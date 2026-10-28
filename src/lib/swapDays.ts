import type { DowKey, WeekPlan } from "./types";

/**
 * Trade two days of the weekly plan: name, focus, exercises and cardio all move together.
 * Returns a new plan and never changes the one passed in. Swapping a day with itself is a no-op,
 * and applying the same swap twice puts everything back (that's how Undo works).
 */
export function swapDays(plan: WeekPlan, a: DowKey, b: DowKey): WeekPlan {
  const next = JSON.parse(JSON.stringify(plan)) as WeekPlan;
  if (a !== b) [next[a], next[b]] = [next[b], next[a]];
  return next;
}
