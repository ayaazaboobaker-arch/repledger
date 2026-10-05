/**
 * Calorie balance for a day: burned − eaten. Positive = deficit (you burned more than you ate).
 *
 *  burned  = resting (Mifflin-St Jeor BMR) + steps + lifting + cardio/sport + digesting food (10% of intake),
 *            × your personal calibration once there are enough weigh-ins (see calibration.ts)
 *  today   = what you've burned so far, plus the resting burn still to come before midnight ("by tonight")
 *
 * A day with less than 800 kcal logged is probably not fully logged, so it's flagged and left out of averages.
 */
import { dayBurn, dayFraction } from "./burn";
import { weightOnDate } from "./weight";
import { calculate } from "./calc";
import type { DayLog, Profile, Targets } from "./types";

export const MIN_LOGGED_KCAL = 800;

export interface Balance {
  eaten: number;
  /** burned so far (today) or for the whole day (past days) */
  burnedSoFar: number;
  /** what you'll have burned by midnight */
  burnedDay: number;
  /** burnedDay − eaten; positive = deficit */
  deficit: number;
  /** burnedSoFar − eaten */
  deficitSoFar: number;
  isToday: boolean;
  hasFood: boolean;
  /** probably not everything was logged */
  incomplete: boolean;
  /** the deficit your plan aims for (negative for a surplus goal, e.g. building muscle) */
  goal: number;
  /** how much more you can eat today and still hit the goal (negative = past it) */
  room: number;
}

/** The deficit (or surplus, when negative) your plan is built on: estimated daily burn − calorie target. */
export function goalDeficit(profile: Profile | null, targets: Targets): number {
  if (!profile) return 0;
  return Math.round(calculate(profile).tdee - targets.kcal);
}

export function dayBalance(days: Record<string, DayLog>, date: string, profile: Profile | null, targets: Targets, factor: number, today: string): Balance | null {
  const w = weightOnDate(days, date);
  const now = dayBurn(days[date], profile, w, dayFraction(date, today), factor);
  if (!now) return null;
  const isToday = date === today;
  const burnedDay = isToday ? now.total + Math.round((now.restingFull - now.resting) * factor) : now.total;
  const goal = goalDeficit(profile, targets);
  return {
    eaten: now.eaten,
    burnedSoFar: now.total,
    burnedDay,
    deficit: burnedDay - now.eaten,
    deficitSoFar: now.total - now.eaten,
    isToday,
    hasFood: now.hasFood,
    incomplete: !isToday && now.hasFood && now.eaten < MIN_LOGGED_KCAL,
    goal,
    room: burnedDay - goal - now.eaten,
  };
}
