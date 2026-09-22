import type { DayLog, DowKey, FoodEntry, SessionExercise, WeekPlan, Workout } from "./types";
import { addDays, e1rm, todayStr, weekStart } from "./util";

export const norm = (s: string) => s.trim().toLowerCase();

export function foodTotals(foods: FoodEntry[] | undefined) {
  const t = { kcal: 0, p: 0, c: 0, f: 0 };
  for (const f of foods || []) {
    t.kcal += f.kcal || 0;
    t.p += f.p || 0;
    t.c += f.c || 0;
    t.f += f.f || 0;
  }
  return t;
}

export function planSession(plan: WeekPlan, key: DowKey): Workout {
  const pd = plan[key] || { title: "Rest", exercises: [] };
  return {
    title: pd.title || "Session",
    planKey: key,
    exercises: pd.exercises.map((e) => ({
      name: e.name,
      tSets: e.sets,
      tReps: e.reps,
      tKg: e.kg,
      sets: Array.from({ length: Math.max(1, e.sets || 1) }, () => ({ reps: null, kg: null, done: false })),
    })),
  };
}

export const sessionDone = (w?: Workout) => !!w && w.exercises.some((e) => e.sets.some((s) => s.done));
export const sessionComplete = (w?: Workout) => !!w && !!w.finishedAt;

export interface SessionPoint {
  date: string;
  top: number;
  one: number;
  vol: number;
  reps: number;
  sets: number;
  bestReps: number;
  /** e.g. "4×8 @ 60" or "60×8, 60×8, 60×7" */
  scheme: string;
  detail: string;
}

function schemeOf(done: { kg: number | null; reps: number | null }[]) {
  const kgs = new Set(done.map((s) => s.kg || 0));
  const reps = new Set(done.map((s) => s.reps || 0));
  if (kgs.size === 1 && reps.size === 1) {
    const kg = [...kgs][0];
    return `${done.length}×${[...reps][0]}${kg ? ` @ ${kg}` : ""}`;
  }
  const top = Math.max(...done.map((s) => s.kg || 0));
  return `${done.length} sets${top ? ` @ ${top}` : ""}`;
}

export function exerciseHistory(days: Record<string, DayLog>, name: string, before?: string): SessionPoint[] {
  const n = norm(name);
  const out: SessionPoint[] = [];
  for (const d of Object.keys(days).sort()) {
    if (before && d >= before) continue;
    const e = days[d].workout?.exercises.find((x) => norm(x.name) === n);
    if (!e) continue;
    const done = e.sets.filter((s) => s.done && (s.reps || 0) > 0);
    if (!done.length) continue;
    let top = 0, bestReps = 0, one = 0, vol = 0, reps = 0;
    for (const s of done) {
      const kg = s.kg || 0, r = s.reps || 0;
      if (kg > top || (kg === top && r > bestReps)) { top = kg; bestReps = r; }
      one = Math.max(one, e1rm(kg, r));
      vol += kg * r;
      reps += r;
    }
    out.push({
      date: d, top, one, vol, reps, sets: done.length, bestReps,
      scheme: schemeOf(done),
      detail: done.map((s) => (s.kg ? `${s.kg}×${s.reps}` : `${s.reps}`)).join(", "),
    });
  }
  return out;
}

export interface WeekPoint {
  week: string;
  top: number;
  one: number;
  vol: number;
  reps: number;
  sets: number;
  sessions: number;
  scheme: string;
}
export function weeklyExercise(hist: SessionPoint[]): WeekPoint[] {
  const m = new Map<string, WeekPoint>();
  for (const r of hist) {
    const k = weekStart(r.date);
    const a = m.get(k) || { week: k, top: 0, one: 0, vol: 0, reps: 0, sets: 0, sessions: 0, scheme: "" };
    if (r.top >= a.top) { a.scheme = r.scheme; }
    a.top = Math.max(a.top, r.top);
    a.one = Math.max(a.one, r.one);
    a.vol += r.vol;
    a.reps += r.reps;
    a.sets += r.sets;
    a.sessions++;
    m.set(k, a);
  }
  return [...m.values()];
}

export function lastPerf(days: Record<string, DayLog>, ex: SessionExercise, before: string) {
  const h = exerciseHistory(days, ex.name, before);
  if (!h.length) return null;
  const last = h[h.length - 1];
  const day = days[last.date].workout!.exercises.find((x) => norm(x.name) === norm(ex.name))!;
  const done = day.sets.filter((s) => s.done && (s.reps || 0) > 0);
  const tR = day.tReps ?? ex.tReps;
  const tK = day.tKg ?? ex.tKg ?? 0;
  const allHit = !!tR && done.length >= (day.tSets || done.length) && done.every((s) => (s.reps || 0) >= tR && (s.kg || 0) >= tK);
  return { ...last, allHit };
}

/** Next working weight: +2.5 kg for loads ≥ 20 kg, +1 kg below that, or +1 rep for bodyweight moves. */
export function suggestion(days: Record<string, DayLog>, ex: SessionExercise, before: string) {
  const lp = lastPerf(days, ex, before);
  if (!lp) return { kg: ex.tKg ?? 0, reps: ex.tReps ?? 8, note: "First time - find a weight you can do with 1–2 reps to spare.", lp };
  if (lp.allHit) {
    if (lp.top > 0) {
      const inc = lp.top >= 20 ? 2.5 : 1;
      return { kg: lp.top + inc, reps: ex.tReps ?? lp.bestReps, note: `You hit every rep last time - try ${lp.top + inc} kg.`, lp };
    }
    return { kg: 0, reps: lp.bestReps + 1, note: `Every rep last time - go for ${lp.bestReps + 1} reps.`, lp };
  }
  return { kg: lp.top, reps: ex.tReps ?? lp.bestReps, note: `Stay at ${lp.top ? lp.top + " kg" : "bodyweight"} until you complete all sets.`, lp };
}

export function weeksRange(days: Record<string, DayLog>, max = 12) {
  const dates = Object.keys(days).sort();
  const end = weekStart(todayStr());
  let start = dates.length ? weekStart(dates[0]) : end;
  if (start > end) start = end;
  const out: string[] = [];
  for (let w = start; w <= end; w = addDays(w, 7)) out.push(w);
  return out.slice(-max);
}

export function weekAgg(days: Record<string, DayLog>, ws: string) {
  const w: number[] = [], steps: number[] = [], kcal: number[] = [], p: number[] = [];
  let sess = 0;
  for (let i = 0; i < 7; i++) {
    const d = days[addDays(ws, i)];
    if (!d) continue;
    if (d.weight != null) w.push(d.weight);
    if (d.steps != null) steps.push(d.steps);
    if (d.foods && d.foods.length) {
      const t = foodTotals(d.foods);
      kcal.push(t.kcal);
      p.push(t.p);
    }
    if (sessionDone(d.workout)) sess++;
  }
  const avg = (a: number[]) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : null);
  return { week: ws, weight: avg(w), steps: avg(steps), kcal: avg(kcal), protein: avg(p), sess, nSteps: steps.length, nKcal: kcal.length };
}

export function recentFoods(days: Record<string, DayLog>, limit = 10) {
  const seen = new Map<string, FoodEntry & { count: number; last: string }>();
  for (const d of Object.keys(days).sort()) {
    for (const f of days[d].foods || []) {
      const k = norm(f.name) + "|" + (f.portion || "");
      const prev = seen.get(k);
      seen.set(k, { ...f, count: (prev?.count || 0) + 1, last: d });
    }
  }
  return [...seen.values()].sort((a, b) => b.count - a.count || b.last.localeCompare(a.last)).slice(0, limit);
}
