import { useEffect, useState } from "react";
import { supabase, isNetworkError } from "./supabase";
import { useStore } from "./store";

/**
 * Weigh-in photos.
 * The profile data only holds a small photo id (DayLog.photo); the picture itself is
 *  - shrunk on the phone (max 960 px, JPEG 80% - roughly 80-150 KB),
 *  - kept in IndexedDB on this device so it opens instantly and works offline,
 *  - uploaded to the private `weigh-photos` Supabase bucket (folder = the person's user id)
 *    so it shows up on their other devices too. Uploads wait for a connection and retry.
 */

const DB_NAME = "rep-ledger-photos", STORE = "photos", BUCKET = "weigh-photos";

interface Rec { id: string; blob: Blob; /** auth user id it belongs to; null = saved while signed out / demo */ owner: string | null; uploaded: boolean }

/* ---------- tiny IndexedDB wrapper (falls back to memory when the browser blocks it) ---------- */
const mem = new Map<string, Rec>();
let dbp: Promise<IDBDatabase | null> | null = null;
const openDb = () => (dbp ??= new Promise<IDBDatabase | null>((res) => {
  try {
    const r = indexedDB.open(DB_NAME, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: "id" });
    r.onsuccess = () => res(r.result);
    r.onerror = () => res(null);
    r.onblocked = () => res(null);
  } catch { res(null); }
}));
async function run<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T | undefined> {
  const db = await openDb();
  if (!db) return undefined;
  return new Promise<T | undefined>((res) => {
    try {
      const r = fn(db.transaction(STORE, mode).objectStore(STORE));
      r.onsuccess = () => res(r.result);
      r.onerror = () => res(undefined);
    } catch { res(undefined); }
  });
}
const getRec = async (id: string) => mem.get(id) ?? (await run<Rec | undefined>("readonly", (s) => s.get(id))) ?? undefined;
const putRec = async (r: Rec) => { mem.set(r.id, r); await run("readwrite", (s) => s.put(r)); };
const delRec = async (id: string) => { mem.delete(id); await run("readwrite", (s) => s.delete(id)); };
const allRecs = async () => {
  const stored = (await run<Rec[]>("readonly", (s) => s.getAll())) ?? [];
  const seen = new Set(stored.map((r) => r.id));
  return [...stored, ...[...mem.values()].filter((r) => !seen.has(r.id))];
};

async function authId(): Promise<string | null> {
  if (!supabase) return null;
  try { return (await supabase.auth.getSession()).data.session?.user.id ?? null; } catch { return null; }
}

/* ---------- shrinking ---------- */
export async function shrink(file: Blob, max = 960, quality = 0.8): Promise<Blob> {
  let bmp: ImageBitmap;
  try { bmp = await createImageBitmap(file, { imageOrientation: "from-image" }); }
  catch { throw new Error("Couldn't read that photo - try a JPEG or PNG."); }
  const k = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * k);
  c.height = Math.round(bmp.height * k);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
  bmp.close?.();
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("Couldn't prepare that photo."))), "image/jpeg", quality));
}

const newId = () => (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 10));

/** Save a picked photo and return its id (store the id on the day: `d.photo = id`). */
export async function addPhoto(file: Blob): Promise<string> {
  const blob = await shrink(file);
  const id = newId();
  const owner = useStore.getState().isDemo ? null : await authId();
  await putRec({ id, blob, owner, uploaded: false });
  void syncPhotos();
  return id;
}

/** Delete a photo from this device and from the online bucket (best effort). */
export async function removePhoto(id: string) {
  const url = urls.get(id);
  if (url) { URL.revokeObjectURL(url); urls.delete(id); }
  await delRec(id);
  const me = await authId();
  if (me && supabase) await supabase.storage.from(BUCKET).remove([`${me}/${id}.jpg`]).catch(() => undefined);
}

/** Delete every photo the person has online (used when the account is deleted). */
export async function removeAllOnlinePhotos(userId: string) {
  if (!supabase) return;
  try {
    const { data } = await supabase.storage.from(BUCKET).list(userId, { limit: 1000 });
    if (data?.length) await supabase.storage.from(BUCKET).remove(data.map((f) => `${userId}/${f.name}`));
  } catch { /* the account row is gone either way */ }
}

/* ---------- upload queue ---------- */
let syncing: Promise<void> | null = null;
/** Upload photos that haven't reached the online bucket yet. Safe to call any time. */
export function syncPhotos(): Promise<void> {
  return (syncing ??= upload().catch(() => undefined).finally(() => { syncing = null; }));
}
async function upload() {
  const me = await authId();
  const st = useStore.getState();
  if (!me || !supabase || st.isDemo) return;
  const used = new Set(Object.values(st.days).map((d) => d.photo).filter(Boolean) as string[]);
  for (const r of await allRecs()) {
    if (r.uploaded) continue;
    // Photos taken before signing in are adopted once they're part of this account's data.
    if (r.owner !== me && !(r.owner == null && used.has(r.id))) continue;
    const { error } = await supabase.storage.from(BUCKET).upload(`${me}/${r.id}.jpg`, r.blob, { contentType: "image/jpeg", upsert: true });
    if (error) { if (isNetworkError(error)) return; continue; }
    await putRec({ ...r, owner: me, uploaded: true });
  }
}
if (typeof window !== "undefined") window.addEventListener("online", () => void syncPhotos());

/* ---------- showing photos ---------- */
const urls = new Map<string, string>();
const loading = new Map<string, Promise<string | null>>();

/** A displayable URL for a photo id: from this device, else downloaded from the bucket and kept. */
export function photoUrl(id: string): Promise<string | null> {
  const hit = urls.get(id);
  if (hit) return Promise.resolve(hit);
  let p = loading.get(id);
  if (!p) {
    p = (async () => {
      let rec = await getRec(id);
      if (!rec) {
        const me = await authId();
        if (!me || !supabase) return null;
        const { data, error } = await supabase.storage.from(BUCKET).download(`${me}/${id}.jpg`);
        if (error || !data) return null;
        rec = { id, blob: data, owner: me, uploaded: true };
        await putRec(rec);
      }
      const u = URL.createObjectURL(rec.blob);
      urls.set(id, u);
      return u;
    })().catch(() => null).finally(() => loading.delete(id));
    loading.set(id, p);
  }
  return p;
}

/** `url` is null until loaded (or when the photo isn't available on this device yet). */
export function usePhoto(id?: string | null): { url: string | null; loading: boolean } {
  const [state, setState] = useState<{ id?: string | null; url: string | null; loading: boolean }>({ id, url: id ? urls.get(id) ?? null : null, loading: !!id && !urls.has(id) });
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const f = () => setTick((n) => n + 1);
    window.addEventListener("online", f);
    return () => window.removeEventListener("online", f);
  }, []);
  useEffect(() => {
    if (!id) { setState({ id, url: null, loading: false }); return; }
    let off = false;
    const cached = urls.get(id);
    setState({ id, url: cached ?? null, loading: !cached });
    if (!cached) void photoUrl(id).then((u) => { if (!off) setState({ id, url: u, loading: false }); });
    return () => { off = true; };
  }, [id, tick]);
  return state.id === id ? state : { id, url: id ? urls.get(id) ?? null : null, loading: !!id };
}
