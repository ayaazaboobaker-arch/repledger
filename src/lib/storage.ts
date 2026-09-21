/** localStorage when the browser allows it, otherwise an in-memory stand-in so the app still runs. */
const mem = new Map<string, string>();
let ls: Storage | null = null;
try {
  const k = "__rl_test";
  localStorage.setItem(k, "1");
  localStorage.removeItem(k);
  ls = localStorage;
} catch {
  ls = null;
}

export const storageWorks = ls !== null;

export const store = {
  get(key: string): string | null {
    try {
      return ls ? ls.getItem(key) : mem.get(key) ?? null;
    } catch {
      return mem.get(key) ?? null;
    }
  },
  set(key: string, value: string) {
    try {
      if (ls) ls.setItem(key, value);
      else mem.set(key, value);
    } catch {
      mem.set(key, value);
    }
  },
  remove(key: string) {
    try {
      if (ls) ls.removeItem(key);
    } catch {
      /* ignore */
    }
    mem.delete(key);
  },
  getJSON<T>(key: string): T | null {
    const raw = this.get(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  },
};
