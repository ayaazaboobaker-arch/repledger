import type { DowKey } from "./types";

export const DOW: DowKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
export const DOW_LONG: Record<DowKey, string> = {
  mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday",
};
export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const pad = (n: number) => String(n).padStart(2, "0");
export const ymd = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const parseYmd = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
export const todayStr = () => ymd(new Date());
export const addDays = (s: string, n: number) => {
  const d = parseYmd(s);
  d.setDate(d.getDate() + n);
  return ymd(d);
};
export const weekStart = (s: string) => {
  const d = parseYmd(s);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return ymd(d);
};
export const dowKey = (s: string): DowKey => DOW[(parseYmd(s).getDay() + 6) % 7];
export const shortDate = (s: string) => {
  const d = parseYmd(s);
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
};
export const longDate = (s: string) => {
  const d = parseYmd(s);
  return `${DOW_LONG[dowKey(s)]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
};

/** SA-style number: space thousands separator, dot decimal. */
export function fmt(n: number | null | undefined, d = 0): string {
  if (n == null || !isFinite(n)) return "–";
  const s = (Math.round(n * 10 ** d) / 10 ** d).toFixed(d);
  const [i, f] = s.split(".");
  return i.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (f ? "." + f : "");
}
export const fmtKg = (n: number | null | undefined) =>
  n == null ? "–" : fmt(n, Math.abs(n % 1) > 0.001 ? (Math.abs((n * 10) % 1) > 0.001 ? 2 : 1) : 0);

export const uid = () => Math.random().toString(36).slice(2, 10);
export const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
export const parseNum = (v: string): number | null => {
  if (!v.trim()) return null;
  const n = parseFloat(v.replace(/\s/g, "").replace(",", "."));
  return isFinite(n) ? n : null;
};
export const e1rm = (kg: number, reps: number) => (kg > 0 && reps > 0 ? kg * (1 + Math.min(reps, 15) / 30) : 0);
export const KJ_PER_KCAL = 4.184;
