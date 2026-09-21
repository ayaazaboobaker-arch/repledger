import { create } from "zustand";
import { calculate, targetsFrom } from "./calc";
import { recommendPlan } from "./plans";
import { closeUserData, deleteUserData, demoData, openUserData, type UserData } from "./store";
import { store } from "./storage";
import type { Goal, Profile } from "./types";
import { todayStr, uid } from "./util";

/**
 * Profiles that live on this device. The PIN keeps people's logs apart on a
 * shared laptop — it's a convenience lock, not bank-grade security (anyone with
 * the computer can read the browser's storage).
 */
export interface Account {
  id: string;
  name: string;
  pinHash: string | null;
  goal?: Goal;
  createdAt: number;
  lastUsed: number;
  demo?: boolean;
}

interface AccountsState {
  accounts: Account[];
  currentId: string | null;
}

const KEY = "rep-ledger:accounts";
const DEMO_ID = "demo";

async function hashPin(pin: string, id: string): Promise<string> {
  const text = `rep-ledger:${id}:${pin}`;
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return "s:" + [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    // crypto.subtle is missing in some embedded previews — fall back to FNV-1a.
    let h = 0x811c9dc5;
    for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return "f:" + (h >>> 0).toString(16);
  }
}

function load(): AccountsState {
  const saved = store.getJSON<AccountsState>(KEY);
  if (saved && Array.isArray(saved.accounts)) return saved;
  return { accounts: [], currentId: null };
}

export const useAccounts = create<AccountsState>()(() => load());
useAccounts.subscribe((s) => store.set(KEY, JSON.stringify({ accounts: s.accounts, currentId: s.currentId })));

const touch = (id: string) =>
  useAccounts.setState((s) => ({ currentId: id, accounts: s.accounts.map((a) => (a.id === id ? { ...a, lastUsed: Date.now() } : a)) }));

/** Re-open whoever was signed in last time (keeps you signed in across reloads). */
export function restoreSession() {
  const { currentId, accounts } = useAccounts.getState();
  if (currentId && accounts.some((a) => a.id === currentId)) openUserData(currentId);
  else useAccounts.setState({ currentId: null });
}

export async function signIn(id: string, pin: string): Promise<boolean> {
  const acc = useAccounts.getState().accounts.find((a) => a.id === id);
  if (!acc) return false;
  if (acc.pinHash && (await hashPin(pin, id)) !== acc.pinHash) return false;
  openUserData(id);
  touch(id);
  return true;
}

export function signOut() {
  closeUserData();
  useAccounts.setState({ currentId: null });
}

export async function createAccount(profile: Profile, pin: string): Promise<string> {
  const id = uid();
  const pinHash = pin ? await hashPin(pin, id) : null;
  const acc: Account = { id, name: profile.name.trim() || "Me", pinHash, goal: profile.goal, createdAt: Date.now(), lastUsed: Date.now() };
  useAccounts.setState((s) => ({ accounts: [...s.accounts.filter((a) => a.id !== id), acc] }));
  const b = calculate(profile);
  const data: UserData = {
    profile, targets: targetsFrom(profile, b), plan: recommendPlan(profile).plan, days: { [todayStr()]: { date: todayStr(), weight: profile.weightKg } }, savedMeals: [], customFoods: [], active: null, isDemo: false, layout: null,
  };
  openUserData(id, data);
  touch(id);
  return id;
}

export function openDemo() {
  const s = useAccounts.getState();
  if (!s.accounts.some((a) => a.id === DEMO_ID)) {
    const acc: Account = { id: DEMO_ID, name: "Demo", pinHash: null, goal: "lose", createdAt: Date.now(), lastUsed: Date.now(), demo: true };
    useAccounts.setState({ accounts: [...s.accounts, acc] });
  }
  openUserData(DEMO_ID, demoData());
  touch(DEMO_ID);
}

export function updateAccount(id: string, patch: Partial<Pick<Account, "name" | "goal">>) {
  useAccounts.setState((s) => ({ accounts: s.accounts.map((a) => (a.id === id ? { ...a, ...patch } : a)) }));
}

export async function verifyPin(id: string, pin: string): Promise<boolean> {
  const acc = useAccounts.getState().accounts.find((a) => a.id === id);
  if (!acc) return false;
  return !acc.pinHash || (await hashPin(pin, id)) === acc.pinHash;
}

export async function setPin(id: string, pin: string) {
  const pinHash = pin ? await hashPin(pin, id) : null;
  useAccounts.setState((s) => ({ accounts: s.accounts.map((a) => (a.id === id ? { ...a, pinHash } : a)) }));
}

export function deleteAccount(id: string) {
  const s = useAccounts.getState();
  if (s.currentId === id) closeUserData();
  deleteUserData(id);
  useAccounts.setState({ accounts: s.accounts.filter((a) => a.id !== id), currentId: s.currentId === id ? null : s.currentId });
}

/** Earlier versions kept a single log under rep-ledger:v2 — carry it over as a profile. */
export function migrateLegacy() {
  const legacy = store.getJSON<{ state?: Partial<UserData> }>("rep-ledger:v2");
  if (!legacy?.state || useAccounts.getState().accounts.length) return;
  const st = legacy.state;
  const isDemo = !!st.isDemo;
  const id = isDemo ? DEMO_ID : uid();
  const acc: Account = { id, name: isDemo ? "Demo" : st.profile?.name || "Me", pinHash: null, goal: st.profile?.goal as Goal | undefined, createdAt: Date.now(), lastUsed: Date.now(), demo: isDemo };
  store.set(`rep-ledger:user:${id}`, JSON.stringify(st));
  useAccounts.setState({ accounts: [acc], currentId: null });
  store.remove("rep-ledger:v2");
}

export const useCurrentAccount = () => useAccounts((s) => s.accounts.find((a) => a.id === s.currentId) || null);
