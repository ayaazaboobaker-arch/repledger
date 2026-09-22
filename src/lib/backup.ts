import { store } from "./storage";

const PREFIX = "rep-ledger:";

/** Ask the browser to keep our data even when the device is low on space (best effort). */
export async function keepData(): Promise<boolean> {
  try {
    if (!navigator.storage?.persist) return false;
    if (await navigator.storage.persisted()) return true;
    return await navigator.storage.persist();
  } catch {
    return false;
  }
}

/** One profile's logs and settings as a JSON file (tokens and other accounts are never included). */
export function exportAccount(acc: { id: string; name: string; pinHash: string | null; goal?: string }): string {
  const data = store.getJSON<unknown>(`${PREFIX}user:${acc.id}`);
  const entry = { id: acc.id, name: acc.name, pinHash: acc.pinHash, goal: acc.goal, createdAt: Date.now(), lastUsed: Date.now() };
  return JSON.stringify({ app: "rep-ledger", version: 3, exportedAt: new Date().toISOString(), data: { [PREFIX + "accounts"]: { accounts: [entry] }, [`${PREFIX}user:${acc.id}`]: data } }, null, 1);
}

export function downloadBackup(acc: { id: string; name: string; pinHash: string | null; goal?: string }) {
  const blob = new Blob([exportAccount(acc)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `rep-ledger-${acc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/**
 * Restores a backup file as profiles on this device, ready to be brought into an
 * account after signing in. Only profile data is read from the file.
 */
export async function importBackup(file: File): Promise<number> {
  const parsed = JSON.parse(await file.text());
  if (parsed?.app !== "rep-ledger" || typeof parsed.data !== "object") throw new Error("That file isn't a Rep Ledger backup.");
  const incoming = parsed.data as Record<string, unknown>;
  const accKey = PREFIX + "accounts";
  const current = store.getJSON<{ accounts: { id: string }[]; currentId: string | null }>(accKey) ?? { accounts: [], currentId: null };
  const inAcc = (incoming[accKey] as { accounts: { id: string }[] } | undefined)?.accounts ?? [];
  for (const a of inAcc) {
    const v = incoming[`${PREFIX}user:${a.id}`];
    if (v && typeof v === "object") store.set(`${PREFIX}user:${a.id}`, JSON.stringify(v));
  }
  const merged = [...current.accounts.filter((a) => !inAcc.some((b) => b.id === a.id)), ...inAcc.filter((a) => a.id !== "demo")];
  store.set(accKey, JSON.stringify({ accounts: merged, currentId: null }));
  return inAcc.length;
}
