import { useMemo } from "react";
import { dayBurn } from "./burn";
import { useStore } from "./store";
import { foodTotals } from "./stats";
import type { DayLog, Profile } from "./types";
import { addDays, parseYmd, todayStr } from "./util";

/**
 * Learns how much YOU really burn by comparing what you eat with what the scale does.
 * If you ate 2 300 a day for four weeks and lost 0.4 kg a week, your real burn was about
 * 2 300 + 0.4 × 7 700 / 7 ≈ 2 740 kcal a day. We compare that with our formula's estimate
 * for the same days and nudge every estimate by the difference.
 */
export interface Calibration {
  status: "ready" | "learning";
  /** multiply estimated burn by this (1 = no change) */
  factor: number;
  /** what your weigh-ins and food logs say you burn a day */
  maintenance: number | null;
  /** what the formula alone said for the same days */
  estimate: number | null;
  foodDays: number;
  weighIns: number;
  spanDays: number;
  kgPerWeek: number | null;
  needFoodDays: number;
  needWeighIns: number;
}

const WINDOW = 35;
const MIN_FOOD_DAYS = 14;
const MIN_WEIGH_INS = 3;
const MIN_SPAN = 14;
/** days with less than this logged are probably half-logged, so they're left out */
const MIN_DAY_KCAL = 800;
const KCAL_PER_KG = 7700;

export function calibrate(days: Record<string, DayLog>, profile: Profile | null, today = todayStr()): Calibration {
  const empty: Calibration = { status: "learning", factor: 1, maintenance: null, estimate: null, foodDays: 0, weighIns: 0, spanDays: 0, kgPerWeek: null, needFoodDays: MIN_FOOD_DAYS, needWeighIns: MIN_WEIGH_INS };
  if (!profile) return empty;
  const end = addDays(today, -1); // today isn't finished yet
  const start = addDays(end, -(WINDOW - 1));

  const weights: [number, number][] = [];
  const intake: number[] = [];
  const model: number[] = [];
  let lastW: number | null = profile.weightKg;
  for (const k of Object.keys(days).sort()) {
    if (k > end) break;
    const d = days[k];
    if (d.weight != null) lastW = d.weight;
    if (k < start) continue;
    if (d.weight != null) weights.push([(parseYmd(k).getTime() - parseYmd(start).getTime()) / 86400000, d.weight]);
    const eaten = foodTotals(d.foods).kcal;
    if (eaten >= MIN_DAY_KCAL) {
      intake.push(eaten);
      model.push(dayBurn(d, profile, lastW)!.total);
    }
  }

  const span = weights.length ? weights[weights.length - 1][0] - weights[0][0] : 0;
  const base = { ...empty, foodDays: intake.length, weighIns: weights.length, spanDays: Math.round(span), needFoodDays: Math.max(0, MIN_FOOD_DAYS - intake.length), needWeighIns: Math.max(0, MIN_WEIGH_INS - weights.length) };
  if (intake.length < MIN_FOOD_DAYS || weights.length < MIN_WEIGH_INS || span < MIN_SPAN) return base;

  // Weight trend: straight line through the weigh-ins (smooths out day-to-day water swings).
  const n = weights.length;
  const mx = weights.reduce((a, w) => a + w[0], 0) / n;
  const my = weights.reduce((a, w) => a + w[1], 0) / n;
  const slope = weights.reduce((a, w) => a + (w[0] - mx) * (w[1] - my), 0) / weights.reduce((a, w) => a + (w[0] - mx) ** 2, 0); // kg per day

  const avgIn = intake.reduce((a, b) => a + b, 0) / intake.length;
  const avgModel = model.reduce((a, b) => a + b, 0) / model.length;
  const real = avgIn - slope * KCAL_PER_KG;
  // Trust it more the more you've logged, and never move more than 20% either way.
  const raw = Math.min(1.2, Math.max(0.8, real / avgModel));
  const trust = Math.min(1, intake.length / 28);
  const factor = Math.round((1 + (raw - 1) * trust) * 100) / 100;

  return { ...base, status: "ready", factor, maintenance: Math.round(real / 10) * 10, estimate: Math.round(avgModel / 10) * 10, kgPerWeek: Math.round(slope * 7 * 100) / 100 };
}

/** The current calibration for the open profile (recomputed when your logs change). */
export function useCalibration(): Calibration {
  const days = useStore((s) => s.days);
  const profile = useStore((s) => s.profile);
  return useMemo(() => calibrate(days, profile), [days, profile]);
}
