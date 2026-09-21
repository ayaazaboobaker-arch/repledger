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

/** Every profile, its logs and settings, as one JSON text. */
export function exportAll(): string {
  const data: Record<string, unknown> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)!;
      if (k.startsWith(PREFIX)) data[k] = JSON.parse(localStorage.getItem(k) || "null");
    }
  } catch {
    /* storage blocked */
  }
  return JSON.stringify({ app: "rep-ledger", version: 2, exportedAt: new Date().toISOString(), data }, null, 1);
}

export function downloadBackup() {
  const blob = new Blob([exportAll()], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `rep-ledger-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/** Restores a backup file. Profiles already on this device are kept; matching ones are replaced. */
export async function importBackup(file: File): Promise<number> {
  const parsed = JSON.parse(await file.text());
  if (parsed?.app !== "rep-ledger" || typeof parsed.data !== "object") throw new Error("That file isn't a Rep Ledger backup.");
  const incoming = parsed.data as Record<string, unknown>;
  const accKey = PREFIX + "accounts";
  const current = store.getJSON<{ accounts: { id: string }[]; currentId: string | null }>(accKey) ?? { accounts: [], currentId: null };
  const inAcc = (incoming[accKey] as { accounts: { id: string }[] } | undefined)?.accounts ?? [];
  for (const [k, v] of Object.entries(incoming)) if (k !== accKey && k.startsWith(PREFIX)) store.set(k, JSON.stringify(v));
  const merged = [...current.accounts.filter((a) => !inAcc.some((b) => b.id === a.id)), ...inAcc];
  store.set(accKey, JSON.stringify({ accounts: merged, currentId: null }));
  return inAcc.length;
}
