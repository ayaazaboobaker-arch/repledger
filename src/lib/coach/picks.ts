/**
 * "Coach's picks": a short, personal list of what to add or change, built from
 *  - lifts that have stalled (an accessory that targets the usual weak point)
 *  - your latest form checks (a drill for whatever was flagged)
 *  - the balance of your plan (pushing vs pulling, legs, hinge, core)
 */
import type { Lift } from "../form/analyze";
import { patternFor } from "../form/patterns";
import type { WeekPlan } from "../types";
import { DOW, todayStr, addDays, shortDate } from "../util";
import { planExercises, type Recommendation } from "./engine";
import { FIX_FOR, knowFor } from "./library";

export interface FormHistoryEntry { date: string; exercise?: string; lift: Lift; checks: { id?: string; label: string; status: string; summary: string }[] }
export interface Pick { id: string; kind: "plateau" | "form" | "balance"; title: string; why: string; add?: { name: string; after?: string } }

const PUSH: Lift[] = ["bench", "press", "pushup", "dip", "triceps", "raise"];
const PULL: Lift[] = ["pull", "row", "curl"];
const LEGS: Lift[] = ["squat", "deadlift", "lunge", "legpress", "legcurl", "legext", "hipthrust", "calf"];

export function coachPicks(plan: WeekPlan, recs: Recommendation[], forms: FormHistoryEntry[], today = todayStr()): Pick[] {
  const out: Pick[] = [];
  const inPlan = new Set(planExercises(plan).map((e) => e.name.toLowerCase()));
  const has = (n: string) => inPlan.has(n.toLowerCase());

  // 1. plateaus → an accessory for that lift
  for (const r of recs.filter((x) => x.kind === "build-reps" || x.kind === "drop-set" || x.kind === "reset" || x.stall >= 3).sort((a, b) => b.stall - a.stall).slice(0, 2)) {
    const acc = knowFor(r.name).accessories.find((a) => !has(a.name));
    if (!acc) continue;
    out.push({ id: `plateau:${r.name}`, kind: "plateau", title: `Add ${acc.name} to push ${r.name} past its plateau`, why: `${r.name} hasn't set a new best in ${r.stall} sessions. ${acc.why}.`, add: { name: acc.name, after: r.name } });
  }

  // 2. latest form check per exercise (last 6 weeks) → a fix for the worst thing flagged
  const since = addDays(today, -42);
  const latest = new Map<string, FormHistoryEntry>();
  for (const f of forms) { const k = f.exercise ?? f.lift; if (f.date >= since && !latest.has(k)) latest.set(k, f); }
  for (const [ex, f] of latest) {
    const bad = f.checks.filter((c) => c.id && (c.status === "bad" || c.status === "warn")).sort((a, b) => (a.status === "bad" ? -1 : 1) - (b.status === "bad" ? -1 : 1));
    for (const c of bad) {
      const fix = FIX_FOR[`${f.lift}:${c.id}`] ?? FIX_FOR[c.id!];
      if (!fix) continue;
      out.push({ id: `form:${ex}:${c.id}`, kind: "form", title: `${ex}: ${c.summary.split(" · ")[0].toLowerCase()} - try ${fix.name}`, why: `From your form check on ${shortDate(f.date)}. ${fix.why}.` });
      break;
    }
  }

  // 3. plan balance, by weekly working sets
  const sets = { push: 0, pull: 0, legs: 0, total: 0 };
  const lifts = new Set<Lift>();
  for (const k of DOW) for (const e of plan[k]?.exercises || []) {
    const l = patternFor(e.name); lifts.add(l);
    sets.total += e.sets;
    if (PUSH.includes(l)) sets.push += e.sets; else if (PULL.includes(l)) sets.pull += e.sets; else if (LEGS.includes(l)) sets.legs += e.sets;
  }
  if (sets.total >= 12) {
    const trainDay = DOW.filter((k) => plan[k]?.exercises.length).sort((a, b) => plan[a].exercises.length - plan[b].exercises.length)[0];
    const dayName = trainDay ? plan[trainDay].title : undefined;
    const suggest = (id: string, title: string, why: string, name: string) => { if (!has(name)) out.push({ id, kind: "balance", title, why, add: { name, after: dayName ? `__day:${trainDay}` : undefined } }); };
    if (sets.push > sets.pull * 1.4) suggest("bal:pull", "Add more pulling to balance your pressing", `You do ${sets.push} pushing sets a week but only ${sets.pull} pulling. Too much pressing pulls your shoulders forward.`, lifts.has("row") ? "Face Pull" : "Barbell Row");
    if (sets.legs < sets.total * 0.25) suggest("bal:legs", "Your legs are getting less work than your upper body", `Only ${sets.legs} of ${sets.total} weekly sets are for legs. Legs are your biggest muscles - they burn the most too.`, lifts.has("squat") ? "Walking Lunge" : "Goblet Squat");
    if (!lifts.has("deadlift") && !lifts.has("hipthrust")) suggest("bal:hinge", "Add a hip hinge", "Nothing in your plan trains the back of your legs and hips as a hinge. It protects your lower back and builds your glutes.", "Romanian Deadlift");
    if (!lifts.has("pull")) suggest("bal:vpull", "Add a vertical pull", "No pull-ups or pulldowns in your plan - they build a wider back and healthy shoulders.", "Lat Pulldown");
    if (!lifts.has("plank") && ![...inPlan].some((n) => /crunch|leg raise|rollout|twist|dead bug/.test(n))) suggest("bal:core", "Add some core work", "A stronger core makes every big lift steadier.", "Plank");
  }
  return out.slice(0, 4);
}
