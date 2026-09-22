import { create } from "zustand";
import { applyRemoteData, onDataChange, snapshot, type UserData } from "./store";
import { store } from "./storage";
import { isNetworkError, supabase, type ProfileRow } from "./supabase";

/**
 * Keeps the signed-in person's data in step with the online database.
 * Edits are saved on this device straight away and sent up a moment later;
 * if there's no signal they wait (even across app restarts) and go up when it's back.
 */

export type SyncStatus = "off" | "saving" | "saved" | "offline" | "error";
export const useSync = create<{ status: SyncStatus; at: number | null; message: string | null }>()(() => ({ status: "off", at: null, message: null }));

interface Meta { dirty: boolean; syncedAt: string | null }
const metaKey = (id: string) => `rep-ledger:sync:${id}`;
const getMeta = (id: string): Meta => store.getJSON<Meta>(metaKey(id)) ?? { dirty: false, syncedAt: null };
const setMeta = (id: string, m: Partial<Meta>) => store.set(metaKey(id), JSON.stringify({ ...getMeta(id), ...m }));
export const clearMeta = (id: string) => store.remove(metaKey(id));

let target: string | null = null;
let timer: number | undefined;
let retry: number | undefined;
let chain: Promise<void> = Promise.resolve();

const status = (s: SyncStatus, message: string | null = null) => useSync.setState({ status: s, message, ...(s === "saved" ? { at: Date.now() } : {}) });

function schedule(ms = 1200) {
  clearTimeout(timer);
  timer = window.setTimeout(() => void push(), ms);
}

onDataChange(() => {
  if (!target) return;
  setMeta(target, { dirty: true });
  status("saving");
  schedule();
});

/** Send the current data up (if there are unsent changes). */
export function push(): Promise<void> {
  clearTimeout(timer);
  if (!target || !getMeta(target).dirty) return chain;
  return send(target);
}

/** Uploads are queued one after another so an older copy never lands after a newer one. */
function send(id: string, data: UserData = snapshot()): Promise<void> {
  chain = chain.then(async () => {
    if (!supabase) return;
    const mine = () => target === id;
    if (mine()) status("saving");
    const { data: row, error } = await supabase.from("profiles")
      .upsert({ id, name: data.profile?.name ?? null, goal: data.profile?.goal ?? null, data })
      .select("updated_at").single();
    if (error) {
      if (mine()) {
        status(isNetworkError(error) ? "offline" : "error", error.message);
        clearTimeout(retry);
        retry = window.setTimeout(() => void push(), 20000);
      }
      return;
    }
    // Only clear the flag if nothing changed while we were sending.
    const same = !mine() || JSON.stringify(snapshot()) === JSON.stringify(data);
    setMeta(id, { dirty: !same, syncedAt: (row as { updated_at: string }).updated_at });
    if (mine()) { status("saved"); if (!same) schedule(300); }
  }).catch(() => undefined);
  return chain;
}

/** Fetch this person's row. `null` = no row yet; throws on network/permission problems. */
export async function fetchRow(id: string): Promise<ProfileRow | null> {
  if (!supabase) throw new Error("Online accounts aren't set up");
  const { data, error } = await supabase.from("profiles").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return (data as ProfileRow | null) ?? null;
}

/** Write a whole row (first save of a new account, or bringing over a profile from this device). */
export async function saveRow(id: string, fields: { name: string; goal: string | null; pin_hash: string | null; data: UserData }) {
  if (!supabase) throw new Error("Online accounts aren't set up");
  const { data, error } = await supabase.from("profiles").upsert({ id, ...fields }).select("updated_at").single();
  if (error) throw error;
  setMeta(id, { dirty: false, syncedAt: (data as { updated_at: string }).updated_at });
}

export async function updateColumns(id: string, fields: Partial<Pick<ProfileRow, "name" | "goal" | "pin_hash">>) {
  if (!supabase) return;
  const { error } = await supabase.from("profiles").update(fields).eq("id", id);
  if (error) throw error;
}

export async function deleteRow(id: string) {
  if (!supabase) return;
  const { error } = await supabase.from("profiles").delete().eq("id", id);
  if (error) throw error;
}

/** Pick up changes made on another device (unless this one has unsent edits, which win). */
export async function pull(id: string): Promise<void> {
  if (!supabase || target !== id) return;
  try {
    const row = await fetchRow(id);
    if (target !== id) return;
    const meta = getMeta(id);
    if (meta.dirty || !row) { setMeta(id, { dirty: true }); await push(); return; }
    const newer = !meta.syncedAt || Date.parse(row.updated_at) > Date.parse(meta.syncedAt);
    if (newer && row.data && typeof row.data === "object" && Object.keys(row.data).length) {
      applyRemoteData(id, row.data as Partial<UserData>);
      setMeta(id, { syncedAt: row.updated_at });
    }
    status("saved");
  } catch (e) {
    status(isNetworkError(e) ? "offline" : "error", (e as Error).message);
  }
}

/** Start syncing this account (after it has been opened with openUserData). */
export function startSync(id: string) {
  target = id;
  status(getMeta(id).dirty ? "saving" : "saved");
  void pull(id);
}

/** Stop syncing — any last changes are still sent in the background. */
export function stopSync(): Promise<void> {
  const id = target;
  clearTimeout(timer);
  clearTimeout(retry);
  const last = id && getMeta(id).dirty ? snapshot() : null;
  target = null;
  status("off");
  return id && last ? send(id, last) : chain;
}

if (typeof window !== "undefined") {
  window.addEventListener("online", () => { if (target) void pull(target); });
  document.addEventListener("visibilitychange", () => {
    if (!target) return;
    if (document.visibilityState === "hidden") void push();
    else void pull(target);
  });
}
