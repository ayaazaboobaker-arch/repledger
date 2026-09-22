import { create } from "zustand";
import { calculate, targetsFrom } from "./calc";
import { clearMeta, deleteRow, fetchRow, saveRow, startSync, stopSync, updateColumns } from "./cloud";
import { recommendPlan } from "./plans";
import { closeUserData, deleteUserData, demoData, openUserData, readUserData, writeUserData, type UserData } from "./store";
import { keepData } from "./backup";
import { store } from "./storage";
import { cloudConfigured, isNetworkError, supabase } from "./supabase";
import type { Goal, Profile } from "./types";
import { todayStr } from "./util";

/**
 * Accounts live in the online database (Supabase): email + password, plus a 4-digit
 * PIN for quick unlocking. The first time on a device you sign in with your email and
 * password; after that the device remembers you and you just pick your profile and
 * type your PIN. Closing the app locks it again.
 *
 * Profiles made before online accounts existed ("local profiles") stay on this device
 * until they are brought into an account.
 */
export interface Account {
  id: string;
  name: string;
  email?: string;
  pinHash: string | null;
  goal?: Goal;
  createdAt: number;
  lastUsed: number;
  demo?: boolean;
}

/** Signed in with email but no profile saved yet - next step is setup (or bringing over a local profile). */
export interface Pending { id: string; email: string }

interface AccountsState {
  /** Accounts that have signed in on this device (plus the demo). */
  accounts: Account[];
  /** Old on-device profiles that can be brought into an account. */
  locals: Account[];
  currentId: string | null;
  pending: Pending | null;
  /** Arrived from a "reset your password" email. */
  recovery: boolean;
}

const KEY = "rep-ledger:signins";
const LEGACY_KEY = "rep-ledger:accounts";
const DEMO_ID = "demo";
const SESSION_KEY = "rl.session";
const tokenKey = (id: string) => `rep-ledger:tokens:${id}`;

/** Who's unlocked lives in sessionStorage: it survives a refresh but is wiped when the app is closed. */
const session = {
  get(): string | null { try { return sessionStorage.getItem(SESSION_KEY); } catch { return null; } },
  set(id: string | null) { try { if (id) sessionStorage.setItem(SESSION_KEY, id); else sessionStorage.removeItem(SESSION_KEY); } catch { /* ignore */ } },
};

async function hashPin(pin: string, id: string): Promise<string> {
  const text = `rep-ledger:${id}:${pin}`;
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return "s:" + [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    let h = 0x811c9dc5;
    for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return "f:" + (h >>> 0).toString(16);
  }
}

function load(): Pick<AccountsState, "accounts" | "locals"> {
  const saved = store.getJSON<{ accounts: Account[] }>(KEY);
  const legacy = store.getJSON<{ accounts: Account[] }>(LEGACY_KEY)?.accounts ?? [];
  const accounts = Array.isArray(saved?.accounts) ? saved!.accounts : [];
  // The demo moves across as-is; everything else waits to be brought into an account.
  const demo = legacy.find((a) => a.id === DEMO_ID);
  if (demo && !accounts.some((a) => a.id === DEMO_ID)) accounts.push({ ...demo, demo: true });
  return { accounts, locals: legacy.filter((a) => a.id !== DEMO_ID && !a.demo) };
}

export const useAccounts = create<AccountsState>()(() => ({ ...load(), currentId: null, pending: null, recovery: false }));
/** Re-read from storage (after restoring a backup). */
export const reloadAccounts = () => useAccounts.setState(load());
useAccounts.subscribe((s, prev) => {
  if (s.accounts !== prev.accounts) store.set(KEY, JSON.stringify({ accounts: s.accounts }));
  if (s.locals !== prev.locals) store.set(LEGACY_KEY, JSON.stringify({ accounts: s.locals, currentId: null }));
  if (s.currentId !== prev.currentId) session.set(s.currentId);
});

const find = (id: string) => useAccounts.getState().accounts.find((a) => a.id === id);
const remember = (acc: Omit<Account, "createdAt" | "lastUsed"> & Partial<Account>) =>
  useAccounts.setState((s) => {
    const old = s.accounts.find((a) => a.id === acc.id);
    const merged: Account = { createdAt: Date.now(), ...old, ...acc, lastUsed: Date.now() };
    return { accounts: [...s.accounts.filter((a) => a.id !== acc.id), merged] };
  });

/** Show this account's data and start syncing it. */
function open(id: string, initial?: UserData) {
  openUserData(id, initial);
  useAccounts.setState((s) => ({ currentId: id, pending: null, accounts: s.accounts.map((a) => (a.id === id ? { ...a, lastUsed: Date.now() } : a)) }));
  if (!find(id)?.demo) startSync(id);
  keepData();
}

/* ---------- online session ---------- */

if (supabase) {
  supabase.auth.onAuthStateChange((event, s) => {
    if (s) store.set(tokenKey(s.user.id), JSON.stringify({ access_token: s.access_token, refresh_token: s.refresh_token }));
    if (event === "PASSWORD_RECOVERY") useAccounts.setState({ recovery: true });
  });
}

/** Make sure the online session belongs to this account. */
async function resumeCloud(id: string): Promise<"ok" | "offline" | "expired"> {
  if (!supabase) return "offline";
  try {
    const { data } = await supabase.auth.getSession();
    if (data.session?.user.id === id) return "ok";
    const t = store.getJSON<{ access_token: string; refresh_token: string }>(tokenKey(id));
    if (!t) return "expired";
    const { error } = await supabase.auth.setSession(t);
    if (error) return isNetworkError(error) ? "offline" : "expired";
    return "ok";
  } catch (e) {
    return isNetworkError(e) ? "offline" : "expired";
  }
}

/** On start-up: stay unlocked after a refresh, and finish email links (confirm / reset password). */
export async function restoreSession() {
  const id = session.get();
  const acc = id ? find(id) : undefined;
  if (acc) {
    open(acc.id);
    if (!acc.demo) resumeCloud(acc.id).then((r) => { if (r === "expired") signOut(); });
  } else session.set(null);

  if (supabase && /[?&](code|error)=/.test(location.search)) {
    const { data } = await supabase.auth.getSession();
    history.replaceState(null, "", location.pathname + location.hash);
    if (useAccounts.getState().recovery) return;
    if (data.session) await afterPassword(data.session.user.id, data.session.user.email ?? "");
  }
}

/* ---------- unlocking with a PIN ---------- */

export type UnlockResult = "ok" | "bad-pin" | "need-password";

export async function unlock(id: string, pin: string): Promise<UnlockResult> {
  const acc = find(id);
  if (!acc) return "bad-pin";
  if (acc.pinHash && (await hashPin(pin, id)) !== acc.pinHash) return "bad-pin";
  if (!acc.demo && (await resumeCloud(id)) === "expired") return "need-password";
  open(id);
  return "ok";
}

export async function verifyPin(id: string, pin: string): Promise<boolean> {
  const acc = find(id);
  if (!acc) return false;
  return !acc.pinHash || (await hashPin(pin, id)) === acc.pinHash;
}

export async function setPin(id: string, pin: string) {
  const pinHash = await hashPin(pin, id);
  useAccounts.setState((s) => ({ accounts: s.accounts.map((a) => (a.id === id ? { ...a, pinHash } : a)) }));
  if (!find(id)?.demo) await updateColumns(id, { pin_hash: pinHash });
}

/* ---------- email + password ---------- */

const friendly = (e: unknown): string => {
  if (isNetworkError(e)) return "Can't reach the server - check your internet connection.";
  const m = String((e as Error)?.message ?? e);
  if (/invalid login/i.test(m)) return "That email and password don't match.";
  if (/email not confirmed/i.test(m)) return "Confirm your email first - check your inbox for the link.";
  if (/already registered|already exists/i.test(m)) return "There's already an account with that email - sign in instead.";
  if (/password should be|weak/i.test(m)) return "Choose a longer password (at least 8 characters).";
  if (/rate limit|too many/i.test(m)) return "Too many tries - wait a minute and try again.";
  return m;
};

export type AuthResult = { ok: true; next: "open" | "setup" | "confirm-email" } | { ok: false; message: string };

/** After email + password: open the account, or ask to set it up if there's no profile yet. */
async function afterPassword(id: string, email: string): Promise<AuthResult> {
  try {
    const row = await fetchRow(id);
    const hasData = !!row && !!row.data && typeof row.data === "object" && !!(row.data as UserData).profile;
    if (row && row.pin_hash && hasData) {
      remember({ id, email, name: row.name || "Me", pinHash: row.pin_hash, goal: (row.goal as Goal) || undefined });
      open(id, row.data as UserData);
      return { ok: true, next: "open" };
    }
    useAccounts.setState({ pending: { id, email } });
    return { ok: true, next: "setup" };
  } catch (e) {
    return { ok: false, message: friendly(e) };
  }
}

export async function emailSignIn(email: string, password: string): Promise<AuthResult> {
  if (!supabase) return { ok: false, message: "Online accounts aren't set up yet." };
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) return { ok: false, message: friendly(error) };
    return await afterPassword(data.user.id, data.user.email ?? email.trim());
  } catch (e) {
    return { ok: false, message: friendly(e) };
  }
}

export async function emailSignUp(email: string, password: string): Promise<AuthResult> {
  if (!supabase) return { ok: false, message: "Online accounts aren't set up yet." };
  try {
    const { data, error } = await supabase.auth.signUp({ email: email.trim(), password, options: { emailRedirectTo: location.origin + location.pathname } });
    if (error) return { ok: false, message: friendly(error) };
    if (!data.session || !data.user) return { ok: true, next: "confirm-email" };
    useAccounts.setState({ pending: { id: data.user.id, email: data.user.email ?? email.trim() } });
    return { ok: true, next: "setup" };
  } catch (e) {
    return { ok: false, message: friendly(e) };
  }
}

export async function sendPasswordReset(email: string): Promise<string | null> {
  if (!supabase) return "Online accounts aren't set up yet.";
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: location.origin + location.pathname });
    return error ? friendly(error) : null;
  } catch (e) {
    return friendly(e);
  }
}

/** Finish the "reset your password" email link. */
export async function setNewPassword(password: string): Promise<AuthResult> {
  if (!supabase) return { ok: false, message: "Online accounts aren't set up yet." };
  const { data, error } = await supabase.auth.updateUser({ password });
  if (error) return { ok: false, message: friendly(error) };
  useAccounts.setState({ recovery: false });
  return afterPassword(data.user.id, data.user.email ?? "");
}
export const cancelRecovery = () => useAccounts.setState({ recovery: false });

/* ---------- first-time setup ---------- */

const newUserData = (profile: Profile): UserData => ({
  profile, targets: targetsFrom(profile, calculate(profile)), plan: recommendPlan(profile).plan,
  days: { [todayStr()]: { date: todayStr(), weight: profile.weightKg } }, savedMeals: [], customFoods: [], active: null, isDemo: false, layout: null,
});

/** New account: save the questionnaire answers and PIN to the database. */
export async function finishSetup(profile: Profile, pin: string): Promise<string | null> {
  const p = useAccounts.getState().pending;
  if (!p) return "Please sign in again.";
  const data = newUserData(profile);
  const pinHash = await hashPin(pin, p.id);
  try {
    await saveRow(p.id, { name: profile.name, goal: profile.goal, pin_hash: pinHash, data });
  } catch (e) {
    return friendly(e);
  }
  writeUserData(p.id, data);
  remember({ id: p.id, email: p.email, name: profile.name || "Me", pinHash, goal: profile.goal });
  open(p.id);
  return null;
}

/**
 * Bring a profile that only lived on this device into the signed-in account.
 * If it had a PIN, that PIN must be entered; otherwise `pin` becomes the new PIN.
 */
export async function bringOver(localId: string, pin: string): Promise<string | null> {
  const p = useAccounts.getState().pending;
  const local = useAccounts.getState().locals.find((a) => a.id === localId);
  if (!p || !local) return "Please sign in again.";
  if (local.pinHash && (await hashPin(pin, localId)) !== local.pinHash) return "That PIN isn't right.";
  const data = readUserData(localId);
  if (!data?.profile) return "That profile has no details saved - start fresh instead.";
  const pinHash = await hashPin(pin, p.id);
  const name = data.profile.name || local.name;
  try {
    await saveRow(p.id, { name, goal: data.profile.goal, pin_hash: pinHash, data: { ...data, isDemo: false } });
  } catch (e) {
    return friendly(e);
  }
  writeUserData(p.id, { ...data, isDemo: false });
  if (localId !== p.id) deleteUserData(localId);
  useAccounts.setState((s) => ({ locals: s.locals.filter((a) => a.id !== localId) }));
  remember({ id: p.id, email: p.email, name, pinHash, goal: data.profile.goal });
  open(p.id);
  return null;
}

export async function cancelSetup() {
  useAccounts.setState({ pending: null });
  await supabase?.auth.signOut({ scope: "local" }).catch(() => undefined);
}

/* ---------- demo, locking, removing ---------- */

export function openDemo() {
  if (!find(DEMO_ID)) remember({ id: DEMO_ID, name: "Demo", pinHash: null, goal: "lose", demo: true });
  open(DEMO_ID, demoData());
}

/** Lock the app: back to the profile picker. The device still remembers the account. */
export function signOut() {
  void stopSync();
  closeUserData();
  useAccounts.setState({ currentId: null });
}

export function updateAccount(id: string, patch: Partial<Pick<Account, "name" | "goal">>) {
  useAccounts.setState((s) => ({ accounts: s.accounts.map((a) => (a.id === id ? { ...a, ...patch } : a)) }));
}

/** Forget this account on this device only (its data stays online). */
export async function forgetOnDevice(id: string) {
  if (useAccounts.getState().currentId === id) { await stopSync(); closeUserData(); }
  if (supabase && id !== DEMO_ID) {
    const { data } = await supabase.auth.getSession().catch(() => ({ data: { session: null } }));
    if (data.session?.user.id === id) await supabase.auth.signOut({ scope: "local" }).catch(() => undefined);
  }
  store.remove(tokenKey(id));
  clearMeta(id);
  deleteUserData(id);
  useAccounts.setState((s) => ({ accounts: s.accounts.filter((a) => a.id !== id), currentId: s.currentId === id ? null : s.currentId }));
}

/** Delete everything: the online copy too. */
export async function deleteAccount(id: string): Promise<string | null> {
  if (id !== DEMO_ID && !find(id)?.demo) {
    try { await deleteRow(id); } catch (e) { return friendly(e); }
  }
  await forgetOnDevice(id);
  return null;
}

/** Earlier versions kept a single log under rep-ledger:v2 - keep it as a local profile to bring over. */
export function migrateLegacy() {
  const legacy = store.getJSON<{ state?: Partial<UserData> }>("rep-ledger:v2");
  if (!legacy?.state) return;
  const st = legacy.state;
  const isDemo = !!st.isDemo;
  const id = isDemo ? DEMO_ID : "local-" + Date.now().toString(36);
  store.set(`rep-ledger:user:${id}`, JSON.stringify(st));
  const acc: Account = { id, name: isDemo ? "Demo" : st.profile?.name || "Me", pinHash: null, goal: st.profile?.goal as Goal | undefined, createdAt: Date.now(), lastUsed: Date.now(), demo: isDemo };
  if (isDemo) remember(acc);
  else useAccounts.setState((s) => ({ locals: [...s.locals, acc] }));
  store.remove("rep-ledger:v2");
}

export { cloudConfigured };
export const useCurrentAccount = () => useAccounts((s) => s.accounts.find((a) => a.id === s.currentId) || null);
