/**
 * Weekly calorie check-in: compares what the scale is doing with what your goal asks for,
 * and suggests a new daily calorie target. Rules only, from your own logs.
 *
 *  1. Not enough data yet (needs ~2 weeks of food logs and 3+ weigh-ins)  → tell you what's missing.
 *  2. You're eating well off your target (>10% on average)                 → hit the target first; don't change it.
 *  3. The trend matches the goal (within ±0.15 kg/week of the aim)         → hold.
 *  4. Otherwise: new target = what you really burn (learned from your logs) + what the goal needs,
 *     moved at most 250 kcal at a time, never below a safe floor.
 */
import { calculate } from "../calc";
import type { Calibration } from "../calibration";
import { foodTotals } from "../stats";
import type { DayLog, Profile, Targets } from "../types";
import { addDays, fmt, todayStr } from "../util";

export interface CheckIn {
  status: "learning" | "off-target" | "on-track" | "adjust";
  title: string;
  lines: string[];
  current: number;
  suggested: number;
  change: number;
  /** what the goal asks for, kg per week (negative = losing) */
  aimKgWk: number;
  /** what the scale is doing, kg per week */
  trendKgWk: number | null;
  avgIntake: number | null;
  loggedDays: number;
  /** new targets if you apply it (protein and fat kept, carbs take the change) */
  next: Targets;
}

const MAX_STEP = 250;
const KCAL_PER_KG = 7700;

export function aimFor(p: Profile): number {
  const b = calculate(p);
  return b.weeklyChange;
}

/** Average intake over the last 7 finished days that were properly logged (800+ kcal). */
function lastWeekIntake(days: Record<string, DayLog>, today: string) {
  const vals: number[] = [];
  for (let i = 1; i <= 7; i++) {
    const k = foodTotals(days[addDays(today, -i)]?.foods).kcal;
    if (k >= 800) vals.push(k);
  }
  return { avg: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null, n: vals.length };
}

export function checkIn(days: Record<string, DayLog>, profile: Profile | null, targets: Targets, cal: Calibration, today = todayStr()): CheckIn {
  const current = targets.kcal;
  const withKcal = (kcal: number): Targets => ({ ...targets, kcal, carbs: Math.max(50, Math.round((kcal - targets.protein * 4 - targets.fat * 9) / 4 / 5) * 5) });
  const intake = lastWeekIntake(days, today);
  const base = { current, suggested: current, change: 0, trendKgWk: cal.kgPerWeek, avgIntake: intake.avg ? Math.round(intake.avg) : null, loggedDays: intake.n, next: targets };

  if (!profile) {
    return { ...base, status: "learning", aimKgWk: 0, title: "Set up your profile first", lines: ["The check-in needs your goal and starting weight."] };
  }
  const aim = aimFor(profile);

  if (cal.status !== "ready" || cal.maintenance == null || cal.kgPerWeek == null) {
    const need: string[] = [];
    if (cal.needFoodDays > 0) need.push(`${cal.needFoodDays} more day${cal.needFoodDays > 1 ? "s" : ""} of food logged`);
    if (cal.needWeighIns > 0) need.push(`${cal.needWeighIns} more weigh-in${cal.needWeighIns > 1 ? "s" : ""}`);
    if (!need.length) need.push("weigh-ins spread over at least two weeks");
    return { ...base, status: "learning", aimKgWk: aim, title: "Still learning your numbers",
      lines: [`To make a call it needs ${need.join(" and ")}.`, "Keep logging everything you eat and weigh in once a week, same morning, before breakfast."] };
  }

  const trend = cal.kgPerWeek;
  const dir = aim < 0 ? "losing" : aim > 0 ? "gaining" : "holding";
  const trendTxt = `${trend > 0 ? "+" : trend < 0 ? "−" : ""}${fmt(Math.abs(trend), 2)} kg a week`;
  const aimTxt = aim === 0 ? "steady weight" : `${aim > 0 ? "+" : "−"}${fmt(Math.abs(aim), 2)} kg a week`;

  if (intake.avg != null && intake.n >= 4 && Math.abs(intake.avg - current) > current * 0.1) {
    const over = intake.avg > current;
    return { ...base, status: "off-target", aimKgWk: aim, title: over ? "Eating above your target" : "Eating well under your target",
      lines: [
        `Last week you averaged ${fmt(intake.avg)} kcal a day against a target of ${fmt(current)}.`,
        `Your weight is changing ${trendTxt}; the goal is ${aimTxt}.`,
        over ? "Get closer to the target for a week before changing it - the target isn't the problem yet." : "Eating this far under makes it hard to train well and keep muscle. Get closer to the target first.",
      ] };
  }

  const gap = trend - aim; // + means gaining faster (or losing slower) than planned
  if (Math.abs(gap) <= 0.15) {
    return { ...base, status: "on-track", aimKgWk: aim, title: "On track - keep going",
      lines: [`You're ${trend === 0 ? "holding" : trend < 0 ? "losing" : "gaining"} ${trendTxt.replace(/^[+−]/, "")}; the goal is ${aimTxt}.`, `Your real burn is about ${fmt(cal.maintenance)} kcal a day, learned from ${cal.foodDays} days of food and ${cal.weighIns} weigh-ins.`] };
  }

  const ideal = cal.maintenance + (aim * KCAL_PER_KG) / 7;
  const floor = Math.max(calculate(profile).bmr, profile.sex === "female" ? 1200 : 1500);
  let suggested = Math.max(floor, ideal);
  suggested = current + Math.max(-MAX_STEP, Math.min(MAX_STEP, suggested - current));
  suggested = Math.round(suggested / 10) * 10;
  const change = suggested - current;
  if (change === 0) {
    return { ...base, status: "on-track", aimKgWk: aim, title: "Keep your target", lines: [`You're at the lowest target that is safe for you (${fmt(floor)} kcal). Add steps or cardio rather than eating less.`] };
  }
  const why = gap > 0
    ? (aim < 0 ? `You're ${dir} slower than planned (${trendTxt} vs ${aimTxt}).` : aim > 0 ? `You're gaining faster than planned (${trendTxt} vs ${aimTxt}) - some of that would be fat.` : `You're gaining ${trendTxt} while aiming to hold.`)
    : (aim < 0 ? `You're losing faster than planned (${trendTxt} vs ${aimTxt}) - that risks muscle and energy.` : aim > 0 ? `You're gaining slower than planned (${trendTxt} vs ${aimTxt}).` : `You're losing ${trendTxt.replace(/^−/, "")} while aiming to hold.`);
  return { ...base, status: "adjust", aimKgWk: aim, suggested, change, next: withKcal(suggested),
    title: `${change > 0 ? "Raise" : "Lower"} to ${fmt(suggested)} kcal`,
    lines: [
      why,
      `Your real burn is about ${fmt(cal.maintenance)} kcal a day, learned from ${cal.foodDays} days of food and ${cal.weighIns} weigh-ins.`,
      Math.abs(ideal - current) > MAX_STEP ? `The full fix would be about ${fmt(Math.round(ideal / 10) * 10)} kcal - moving ${MAX_STEP} at a time keeps it easy to stick to.` : `Protein and fat stay the same; carbs ${change > 0 ? "go up" : "come down"} by about ${fmt(Math.abs(change) / 4)} g.`,
    ] };
}
