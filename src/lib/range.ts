import { dayBurn } from "./burn";
import { foodTotals, sessionDone } from "./stats";
import type { DayLog, Profile } from "./types";
import { addDays, MONTHS, parseYmd, shortDate, todayStr, weekStart, ymd } from "./util";

export type RangePreset = "4w" | "3m" | "6m" | "1y" | "all" | "custom";
export interface DateRange { from: string; to: string }

export const PRESETS: { id: RangePreset; label: string }[] = [
  { id: "4w", label: "4 weeks" },
  { id: "3m", label: "3 months" },
  { id: "6m", label: "6 months" },
  { id: "1y", label: "1 year" },
  { id: "all", label: "All time" },
  { id: "custom", label: "Custom" },
];

const monthsBack = (to: string, n: number) => {
  const d = parseYmd(to);
  d.setMonth(d.getMonth() - n);
  return addDays(ymd(d), 1);
};

export function presetRange(p: RangePreset, days: Record<string, DayLog>, custom?: DateRange): DateRange {
  const to = todayStr();
  if (p === "custom" && custom) return custom.from <= custom.to ? custom : { from: custom.to, to: custom.from };
  if (p === "4w") return { from: addDays(to, -27), to };
  if (p === "3m") return { from: monthsBack(to, 3), to };
  if (p === "6m") return { from: monthsBack(to, 6), to };
  if (p === "1y") return { from: monthsBack(to, 12), to };
  const first = Object.keys(days).sort()[0];
  return { from: first && first < to ? first : addDays(to, -27), to };
}

/** Only the days inside the range. */
export function daysIn(days: Record<string, DayLog>, r: DateRange): Record<string, DayLog> {
  const out: Record<string, DayLog> = {};
  for (const k of Object.keys(days)) if (k >= r.from && k <= r.to) out[k] = days[k];
  return out;
}

export const rangeLabel = (r: DateRange) => {
  const a = parseYmd(r.from), b = parseYmd(r.to);
  const sameYear = a.getFullYear() === b.getFullYear();
  return `${a.getDate()} ${MONTHS[a.getMonth()]}${sameYear ? "" : " " + a.getFullYear()} – ${b.getDate()} ${MONTHS[b.getMonth()]} ${b.getFullYear()}`;
};
export const rangeDays = (r: DateRange) => Math.round((parseYmd(r.to).getTime() - parseYmd(r.from).getTime()) / 86400000) + 1;

export interface Period { week: string; start: string; end: string; x: string; period: string }

/** Weekly buckets for shorter ranges, monthly for anything over ~6 months. */
export function periods(r: DateRange): Period[] {
  const out: Period[] = [];
  if (rangeDays(r) > 190) {
    const d = parseYmd(r.from);
    d.setDate(1);
    while (ymd(d) <= r.to) {
      const start = ymd(d);
      const next = new Date(d);
      next.setMonth(next.getMonth() + 1);
      const end = addDays(ymd(next), -1);
      out.push({ week: start, start: start < r.from ? r.from : start, end: end > r.to ? r.to : end, x: `${MONTHS[d.getMonth()]}${d.getMonth() === 0 ? " " + String(d.getFullYear()).slice(2) : ""}`, period: `${MONTHS[d.getMonth()]} ${d.getFullYear()}` });
      d.setMonth(d.getMonth() + 1);
    }
    return out;
  }
  for (let w = weekStart(r.from); w <= r.to; w = addDays(w, 7)) {
    const end = addDays(w, 6);
    out.push({ week: w, start: w < r.from ? r.from : w, end: end > r.to ? r.to : end, x: shortDate(w), period: `Week of ${shortDate(w)}` });
  }
  return out;
}

const avg = (a: number[]) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : null);
/** A day counts towards "burned" once something was logged on it. */
const hasActivity = (d?: DayLog) => !!d && (d.steps != null || !!d.foods?.length || !!d.activities?.length || sessionDone(d.workout));

export function periodAgg(days: Record<string, DayLog>, p: Period, profile: Profile | null, factor = 1) {
  const w: number[] = [], steps: number[] = [], kcal: number[] = [], prot: number[] = [], burn: number[] = [];
  let sess = 0, cardioMin = 0, cardioKcal = 0, nActs = 0;
  let lastW: number | null = profile?.weightKg ?? null;
  const today = todayStr();
  for (const k of Object.keys(days).sort()) if (k < p.start && days[k].weight != null) lastW = days[k].weight!;
  for (let d = p.start; d <= p.end; d = addDays(d, 1)) {
    const day = days[d];
    if (!day) continue;
    if (day.weight != null) { w.push(day.weight); lastW = day.weight; }
    if (sessionDone(day.workout)) sess++;
    for (const a of day.activities || []) { if (a.manual) { cardioMin += a.seconds / 60; cardioKcal += a.kcal; nActs++; } }
    // Today isn't over yet - half a day of food, steps and burn would drag the daily averages down.
    if (d === today) continue;
    if (day.steps != null) steps.push(day.steps);
    if (day.foods?.length) { const t = foodTotals(day.foods); kcal.push(t.kcal); prot.push(t.p); }
    if (hasActivity(day)) { const b = dayBurn(day, profile, lastW, 1, factor); if (b) burn.push(b.total); }
  }
  return { ...p, weight: avg(w), steps: avg(steps), kcal: avg(kcal), protein: avg(prot), burn: avg(burn), sess, cardioMin, cardioKcal, nActs, nSteps: steps.length, nKcal: kcal.length };
}
export type PeriodRow = ReturnType<typeof periodAgg>;

/** Totals and changes for the whole range. */
export function rangeSummary(days: Record<string, DayLog>, r: DateRange, profile: Profile | null, factor = 1) {
  const all = periodAgg(days, { week: r.from, start: r.from, end: r.to, x: "", period: "" }, profile, factor);
  const wd = Object.keys(days).filter((k) => k >= r.from && k <= r.to && days[k].weight != null).sort();
  const balances: number[] = [];
  let lastW: number | null = profile?.weightKg ?? null;
  for (const k of Object.keys(days).sort()) {
    if (days[k].weight != null) lastW = days[k].weight!;
    if (k < r.from || k > r.to || k === todayStr() || !days[k].foods?.length) continue;
    const b = dayBurn(days[k], profile, lastW, 1, factor);
    if (b) balances.push(b.balance);
  }
  const weeks = Math.max(1, rangeDays(r) / 7);
  return {
    ...all,
    wFirst: wd[0] ? { date: wd[0], v: days[wd[0]].weight! } : null,
    wLast: wd.length ? { date: wd[wd.length - 1], v: days[wd[wd.length - 1]].weight! } : null,
    sessPerWeek: all.sess / weeks,
    balance: avg(balances),
    nBalance: balances.length,
  };
}
