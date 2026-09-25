/**
 * The Coach engine: plain rules over what you have logged. No AI, nothing leaves the device.
 *
 * Per exercise it makes one call - start, add weight, add reps, hold, drop a set, reset - and says why.
 * Per week it writes a short review: sessions, volume, personal bests, lifts that have stalled,
 * and whether a lighter (deload) week would help.
 *
 * How the calls are made (double progression):
 *  - Hit every planned set at the planned reps and weight?  → add weight (or reps for bodyweight moves).
 *  - Missed some reps?                                        → hold and finish the sets first.
 *  - No new best for 3 sessions in a row?                     → it's a plateau:
 *        4+ sets → drop a set (more work than you are recovering from);
 *        otherwise → drop ~5% and build reps back up, then return to the weight.
 *  - Last 2 sessions clearly below your best (≥7% down)?      → reset: 10% lighter and climb again.
 * "Best" means estimated one-rep max, so 60×8 and 65×6 compare fairly.
 */
import type { DayLog, PlanExercise, WeekPlan } from "../types";
import { norm } from "../stats";
import { addDays, DOW, e1rm, fmt, fmtKg, shortDate, todayStr, weekStart } from "../util";

export type RecKind = "start" | "add-weight" | "add-reps" | "hold" | "drop-set" | "build-reps" | "reset";

export interface Target { sets: number; reps: number; kg: number }

export interface SessionSummary {
  date: string;
  /** heaviest weight used */
  top: number;
  /** best estimated one-rep max in the session */
  one: number;
  /** total reps across done sets */
  reps: number;
  setsDone: number;
  /** did every planned set reach the planned reps at the planned weight? */
  hit: boolean;
  /** reps short of the plan, summed over planned sets (0 when hit) */
  short: number;
  /** lowest reps in any working set */
  minReps: number;
  planned: Target;
}

export interface Recommendation {
  name: string;
  kind: RecKind;
  /** short call, e.g. "Add 2.5 kg" */
  title: string;
  /** what to do next session, in words */
  detail: string;
  /** the reasons, one short line each */
  why: string[];
  now: Target;
  next: Target;
  /** estimated 1RM per session, oldest first, for the sparkline */
  trend: number[];
  /** sessions since the last new best */
  stall: number;
  sessions: number;
  lastDate: string | null;
  bodyweight: boolean;
}

const SMALL_LIFT = /raise|curl|pushdown|push-down|fly|flye|extension|kickback|shrug|face pull|calf|lateral|rear delt|pullover/i;

const DUMBBELL = /dumbbell|\bdb\b|kettlebell/i;

/** How much to add, and what weights exist: small moves +1 kg, dumbbells +2 kg, barbells and machines +2.5 kg. */
export function increment(name: string, kg: number): { inc: number; step: number } {
  if (SMALL_LIFT.test(name) || kg < 10) return { inc: 1, step: 0.5 };
  if (DUMBBELL.test(name)) return { inc: 2, step: 1 };
  return { inc: 2.5, step: 2.5 };
}
const roundTo = (kg: number, step: number) => Math.max(0, Math.round(kg / step) * step);

/** One line per logged session of this exercise, oldest first. */
export function summarize(days: Record<string, DayLog>, name: string, plan: PlanExercise | undefined, upTo = todayStr()): SessionSummary[] {
  const n = norm(name);
  const out: SessionSummary[] = [];
  for (const date of Object.keys(days).sort()) {
    if (date > upTo) continue;
    const ex = days[date].workout?.exercises.find((x) => norm(x.name) === n);
    if (!ex) continue;
    const done = ex.sets.filter((s) => s.done && (s.reps || 0) > 0);
    if (!done.length) continue;
    const planned: Target = {
      sets: ex.tSets ?? plan?.sets ?? done.length,
      reps: ex.tReps ?? plan?.reps ?? Math.max(...done.map((s) => s.reps || 0)),
      kg: ex.tKg ?? plan?.kg ?? 0,
    };
    let top = 0, one = 0, reps = 0, minReps = Infinity;
    for (const s of done) {
      const kg = s.kg || 0, r = s.reps || 0;
      top = Math.max(top, kg);
      one = Math.max(one, kg > 0 ? e1rm(kg, r) : r);
      reps += r;
      minReps = Math.min(minReps, r);
    }
    // count the planned sets, best first, against the planned reps
    const byReps = done.filter((s) => (s.kg || 0) >= planned.kg).map((s) => s.reps || 0).sort((a, b) => b - a);
    let short = 0;
    for (let i = 0; i < planned.sets; i++) short += Math.max(0, planned.reps - (byReps[i] ?? 0));
    out.push({ date, top, one, reps, setsDone: done.length, hit: short === 0, short, minReps, planned });
  }
  return out;
}

/** Sessions since the best estimated 1RM was last beaten (0 = the latest session was a new best). */
function sessionsSinceBest(h: SessionSummary[]) {
  let best = -Infinity, since = 0;
  for (const s of h) {
    if (s.one > best + 0.01) { best = s.one; since = 0; } else since++;
  }
  return since;
}

export function recommend(days: Record<string, DayLog>, plan: PlanExercise, upTo = todayStr()): Recommendation {
  const h = summarize(days, plan.name, plan, upTo);
  const now: Target = { sets: plan.sets, reps: plan.reps, kg: plan.kg };
  const base = { name: plan.name, now, trend: h.slice(-8).map((s) => Math.round(s.one * 10) / 10), sessions: h.length, lastDate: h.at(-1)?.date ?? null };
  const last = h.at(-1);
  if (!last) {
    return {
      ...base, kind: "start", stall: 0, bodyweight: plan.kg === 0,
      title: "Find your starting weight",
      detail: plan.kg ? `Start around ${fmtKg(plan.kg)} kg for ${plan.sets}×${plan.reps}. It should feel like you could do 1–2 more reps.` : `Do ${plan.sets}×${plan.reps} with clean form.`,
      why: ["No sessions logged for this exercise yet."],
      next: now,
    };
  }
  const bodyweight = last.top === 0 && plan.kg === 0;
  const stall = sessionsSinceBest(h);
  const best = Math.max(...h.map((s) => s.one));
  const kg = last.planned.kg || last.top;
  const { inc: step, step: grid } = increment(plan.name, kg);
  const res = (kind: RecKind, title: string, detail: string, why: string[], next: Target): Recommendation => ({ ...base, kind, title, detail, why, next, stall, bodyweight });

  // 1. clearly weaker for two sessions running → reset
  const prev = h.at(-2);
  if (!bodyweight && prev && h.length >= 4 && last.one < best * 0.93 && prev.one < best * 0.93) {
    const to = roundTo(kg * 0.9, grid);
    return res("reset", `Reset to ${fmtKg(to)} kg`,
      `Drop to ${fmtKg(to)} kg for ${plan.sets}×${plan.reps}, then add ${fmtKg(step)} kg each time you hit every rep.`,
      [`Your last two sessions were about ${Math.round((1 - last.one / best) * 100)}% below your best.`, "A short step back usually clears built-up fatigue and you pass your old best within a few weeks.", "Also check sleep, food and stress - they show up here first."],
      { ...now, kg: to });
  }

  // 2. hit everything → progress
  if (last.hit) {
    if (bodyweight) {
      if (last.planned.reps >= 15 && plan.sets < 5) {
        return res("add-reps", "Add a set", `Keep ${plan.reps} reps and do ${plan.sets + 1} sets.`,
          [`You hit ${plan.sets}×${last.planned.reps} last time.`, "Past about 15 reps, another set builds more than even more reps."],
          { ...now, sets: plan.sets + 1 });
      }
      const add = last.minReps >= last.planned.reps + 3 ? 2 : 1;
      return res("add-reps", `Add ${add} rep${add > 1 ? "s" : ""}`, `Aim for ${plan.sets}×${last.planned.reps + add}.`,
        [`You hit every set of ${last.planned.reps} last time${add > 1 ? ", with reps to spare" : ""}.`],
        { ...now, reps: last.planned.reps + add });
    }
    const easy = last.minReps >= last.planned.reps + 3;
    const inc = easy ? step * 2 : step;
    const to = roundTo(kg + inc, grid);
    // the plan was already moved up since that session: go for it, don't suggest less
    if (plan.kg >= to) {
      return res("add-weight", `Go for ${fmtKg(plan.kg)} kg`, `Your plan already has the next step: ${plan.sets}×${plan.reps} at ${fmtKg(plan.kg)} kg.`,
        [`You hit all ${last.planned.sets}×${last.planned.reps} at ${fmtKg(kg)} kg on ${shortDate(last.date)}.`, "Now show you can own the new weight before the next jump."],
        now);
    }
    return res("add-weight", `Add ${fmtKg(inc)} kg`, `Go to ${fmtKg(to)} kg for ${last.planned.sets}×${last.planned.reps}.`,
      [`You hit all ${last.planned.sets}×${last.planned.reps} at ${fmtKg(kg)} kg on ${shortDate(last.date)}.`, easy ? "Every set had 3+ reps to spare, so a bigger jump is fine." : "Small, steady jumps keep you progressing for longer."],
      { sets: last.planned.sets, reps: last.planned.reps, kg: to });
  }

  // 3. missed reps and stuck for 3+ sessions → plateau
  if (stall >= 3) {
    if (plan.sets >= 4) {
      return res("drop-set", "Drop a set", `Do ${plan.sets - 1}×${plan.reps} at ${fmtKg(kg)} kg until you hit every rep, then add weight.`,
        [`No new best in your last ${stall} sessions.`, `With ${plan.sets} sets you may be doing more than you recover from - fewer, better sets usually break this.`],
        { ...now, sets: plan.sets - 1, kg });
    }
    if (bodyweight) {
      return res("build-reps", "Change the rep target", `Drop to ${plan.sets}×${Math.max(3, plan.reps - 2)} and build back up one rep at a time.`,
        [`No new best in your last ${stall} sessions.`, "A slightly easier target lets you add reps again."],
        { ...now, reps: Math.max(3, plan.reps - 2) });
    }
    const to = roundTo(kg * 0.95, grid);
    return res("build-reps", "Build reps, then weight", `Use ${fmtKg(to)} kg for ${plan.sets}×${plan.reps + 2}. When you hit that, go back to ${fmtKg(kg)} kg for ${plan.sets}×${plan.reps}.`,
      [`No new best in your last ${stall} sessions at ${fmtKg(kg)} kg.`, "Slightly lighter with more reps builds the base to beat the old weight."],
      { sets: plan.sets, reps: plan.reps + 2, kg: to });
  }

  // 4. missed a few reps → hold
  const need = last.planned.sets * last.planned.reps;
  return res("hold", `Stay at ${bodyweight ? `${last.planned.reps} reps` : `${fmtKg(kg)} kg`}`,
    `Repeat ${last.planned.sets}×${last.planned.reps}${bodyweight ? "" : ` at ${fmtKg(kg)} kg`} and finish every set before moving up.`,
    [`Last time: ${need - last.short} of ${need} planned reps${last.short <= 2 ? " - very close" : ""}.`, stall > 0 ? `${stall} session${stall > 1 ? "s" : ""} since your last best - normal, keep going.` : "You set a new best last session."],
    { ...now, sets: last.planned.sets, reps: last.planned.reps, kg: last.planned.kg });
}

/** Every distinct exercise in the plan, in plan order (first time it appears wins). */
export function planExercises(plan: WeekPlan): PlanExercise[] {
  const seen = new Set<string>();
  const out: PlanExercise[] = [];
  for (const k of DOW) for (const e of plan[k]?.exercises || []) {
    const n = norm(e.name);
    if (!seen.has(n)) { seen.add(n); out.push(e); }
  }
  return out;
}

export function recommendAll(days: Record<string, DayLog>, plan: WeekPlan, upTo = todayStr()) {
  return planExercises(plan).map((e) => recommend(days, e, upTo));
}

/** Write a recommendation into the plan: every day that has this exercise gets the new sets, reps and weight. */
export function applyToPlan(plan: WeekPlan, name: string, next: Target): WeekPlan {
  const n = norm(name);
  const out = structuredClone(plan);
  for (const k of DOW) {
    out[k].exercises = out[k].exercises.map((e) => (norm(e.name) === n ? { ...e, sets: next.sets, reps: next.reps, kg: next.kg } : e));
  }
  return out;
}

/* ---------- weekly review ---------- */

export interface WeekReview {
  week: string;
  planned: number;
  done: number;
  lastDone: number;
  volume: number;
  lastVolume: number;
  /** % change in volume vs last week, null when last week had none */
  volumeChange: number | null;
  prs: { name: string; text: string; date: string }[];
  stalled: string[];
  /** whole weeks in a row (before this one) where every planned session was done */
  streak: number;
  deload: { suggest: boolean; reason: string } | null;
  headline: string;
  lines: string[];
}

function weekTotals(days: Record<string, DayLog>, ws: string, uptoDay = 6) {
  let done = 0, volume = 0;
  for (let i = 0; i <= uptoDay; i++) {
    const w = days[addDays(ws, i)]?.workout;
    if (!w) continue;
    const sets = w.exercises.flatMap((e) => e.sets.filter((s) => s.done && (s.reps || 0) > 0));
    if (!sets.length) continue;
    done++;
    volume += sets.reduce((a, s) => a + (s.kg || 0) * (s.reps || 0), 0);
  }
  return { done, volume };
}

export function weekReview(days: Record<string, DayLog>, plan: WeekPlan, recs: Recommendation[], today = todayStr()): WeekReview {
  const week = weekStart(today);
  const planned = DOW.filter((k) => plan[k]?.exercises.length).length;
  const cur = weekTotals(days, week);
  const prev = weekTotals(days, addDays(week, -7));
  // compare volume with the same point of last week, so Wednesday isn't judged against a full week
  const dayIdx = Math.round((new Date(today + "T12:00:00").getTime() - new Date(week + "T12:00:00").getTime()) / 864e5);
  const prevSoFar = weekTotals(days, addDays(week, -7), dayIdx);

  // personal bests this week: a session whose e1rm beat everything before it
  const prs: WeekReview["prs"] = [];
  for (const e of planExercises(plan)) {
    const h = summarize(days, e.name, e, today);
    let best = -Infinity;
    let pr: SessionSummary | null = null, prevBest = 0;
    for (const s of h) {
      if (s.one > best + 0.01) {
        if (s.date >= week && best > 0) { pr = s; prevBest = best; }
        best = s.one;
      }
    }
    if (pr) prs.push({ name: e.name, date: pr.date, text: pr.top ? `New best: ${fmtKg(pr.top)} kg (est. max ${Math.round(pr.one)} kg, was ${Math.round(prevBest)})` : `New best: ${pr.minReps}+ reps a set` });
  }

  const tracked = recs.filter((r) => r.sessions >= 3);
  const stalled = tracked.filter((r) => r.stall >= 3 || r.kind === "reset").map((r) => r.name);

  // consecutive complete weeks before this one
  let streak = 0;
  for (let w = addDays(week, -7); streak < 52; w = addDays(w, -7)) {
    const t = weekTotals(days, w);
    if (planned && t.done >= planned) streak++;
    else break;
  }

  let deload: WeekReview["deload"] = null;
  if (tracked.length >= 3 && stalled.length / tracked.length >= 0.4) {
    deload = { suggest: true, reason: `${stalled.length} of ${tracked.length} lifts have stopped improving. One lighter week - same weights, about half the sets - usually brings them back.` };
  } else if (streak >= 7) {
    deload = { suggest: true, reason: `${streak} full weeks in a row. A lighter week every 6–8 weeks helps you keep progressing - plan one soon.` };
  }

  const volumeChange = prevSoFar.volume > 0 ? Math.round(((cur.volume - prevSoFar.volume) / prevSoFar.volume) * 100) : null;
  const left = Math.max(0, planned - cur.done);
  const headline =
    !planned ? "Set up your weekly plan and the Coach will start tracking it."
    : cur.done >= planned ? (prs.length ? `Full week and ${prs.length} new best${prs.length > 1 ? "s" : ""}. Strong work.` : "Every planned session done this week.")
    : prs.length ? `${prs.length} new best${prs.length > 1 ? "s" : ""} so far, ${left} session${left > 1 ? "s" : ""} to go.`
    : `${cur.done} of ${planned} sessions done - ${left} to go.`;

  const lines: string[] = [];
  if (volumeChange != null && cur.done > 0) lines.push(`${fmt(cur.volume)} kg lifted so far - ${volumeChange >= 0 ? "up" : "down"} ${Math.abs(volumeChange)}% on the same point last week.`);
  if (streak >= 2) lines.push(`${streak} complete weeks in a row before this one.`);
  if (stalled.length) lines.push(`Stalled: ${stalled.join(", ")}. See the calls below.`);
  const ups = recs.filter((r) => r.kind === "add-weight" || r.kind === "add-reps").length;
  if (ups) lines.push(`${ups} exercise${ups > 1 ? "s are" : " is"} ready to move up next session.`);

  return { week, planned, done: cur.done, lastDone: prev.done, volume: cur.volume, lastVolume: prev.volume, volumeChange, prs, stalled, streak, deload, headline, lines };
}

