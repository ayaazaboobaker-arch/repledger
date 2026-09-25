import { sportKcal } from "./burn";
import type { ActivityLevel as Activity, CardioPrefs, Goal, Profile, Targets, TrainingFocus } from "./types";

export const FOCUS: Record<TrainingFocus, { label: string; hint: string }> = {
  strength: { label: "Mostly weights", hint: "Lifting is the main thing, a little cardio on the side" },
  balanced: { label: "Weights and cardio", hint: "A good mix - strength sessions plus regular cardio" },
  cardio: { label: "Mostly cardio", hint: "Running, cycling, swimming or sport first, some strength work" },
};

/** Sensible cardio defaults for older profiles that were made before cardio questions existed. */
export function cardioOf(p: Profile): CardioPrefs {
  if (p.cardio) return p.cardio;
  return { sports: ["walk"], daysPerWeek: p.goal === "fit" ? 2 : 0, minutes: 30, intensity: "easy" };
}
export const focusOf = (p: Profile): TrainingFocus => p.focus ?? "strength";

export const ACTIVITY: Record<Activity, { label: string; hint: string; mult: number }> = {
  sedentary: { label: "Mostly sitting", hint: "Desk job, drive most places", mult: 1.2 },
  light: { label: "Lightly active", hint: "On your feet some of the day", mult: 1.375 },
  moderate: { label: "Active", hint: "Walk a lot or have a standing job", mult: 1.55 },
  very: { label: "Very active", hint: "Physical work most of the day", mult: 1.725 },
};

export const GOALS: Record<Goal, { label: string; hint: string }> = {
  lose: { label: "Lose fat", hint: "Drop body fat while keeping your muscle" },
  gain: { label: "Build muscle", hint: "Add size and strength with a small calorie surplus" },
  recomp: { label: "Lose fat & build muscle", hint: "Get leaner and stronger at the same time - slower, but both at once" },
  tone: { label: "Stay toned", hint: "Keep a lean, defined look - hold muscle, trim a little fat" },
  fit: { label: "Just keep fit", hint: "Stay healthy and active - no big change to your body" },
};

/** Older saves used "maintain"; it is now "fit". */
export const normGoal = (g: string): Goal => (g === "maintain" ? "fit" : (g as Goal));

export interface CalorieBreakdown {
  bmr: number;
  daily: number;
  training: number;
  /** of which: lifting and cardio, per day on average */
  weights: number;
  cardio: number;
  tdee: number;
  adjust: number;
  target: number;
  floored: boolean;
  capped: boolean;
  protein: number;
  fat: number;
  carbs: number;
  proteinPerKg: number;
  steps: number;
  bmi: number;
  weeksToGoal: number | null;
  weeklyChange: number;
}

const round = (n: number, to: number) => Math.round(n / to) * to;

/** Mifflin–St Jeor BMR, activity multiplier, training estimate, goal adjustment. */
export function calculate(p: Profile): CalorieBreakdown {
  const bmr = 10 * p.weightKg + 6.25 * p.heightCm - 5 * p.age + (p.sex === "male" ? 5 : -161);
  const daily = bmr * ACTIVITY[p.activity].mult;
  // Lifting (about 5 METs including rest between sets) and cardio (by sport and effort), spread over the week.
  const weights = (p.daysPerWeek * sportKcal("weights", p.sessionMinutes, "moderate", p.weightKg)) / 7;
  const c = cardioOf(p);
  const cardio = c.daysPerWeek && c.sports.length
    ? (c.daysPerWeek * c.sports.reduce((a, s) => a + sportKcal(s, c.minutes, c.intensity, p.weightKg), 0) / c.sports.length) / 7
    : 0;
  const training = weights + cardio;
  const tdee = daily + training;

  let adjust = 0;
  let weeklyChange = 0;
  if (p.goal === "lose") {
    adjust = -(p.rate * 7700) / 7;
    weeklyChange = -p.rate;
  } else if (p.goal === "gain") {
    adjust = (p.rate * 7700) / 7;
    weeklyChange = p.rate;
  } else if (p.goal === "recomp") {
    adjust = -tdee * 0.1;
    weeklyChange = -0.15;
  } else if (p.goal === "tone") {
    adjust = -tdee * 0.05;
    weeklyChange = -0.1;
  }
  let capped = false;
  if (adjust < -tdee * 0.25) {
    adjust = -tdee * 0.25;
    capped = true;
  }
  const floor = Math.max(bmr, p.sex === "female" ? 1200 : 1500);
  let target = tdee + adjust;
  let floored = false;
  if (target < floor) {
    target = floor;
    floored = true;
  }
  target = round(target, 10);

  const bmi = p.weightKg / (p.heightCm / 100) ** 2;
  const refWeight = bmi > 30 ? Math.max(p.goalWeightKg, 25 * (p.heightCm / 100) ** 2) : p.weightKg;
  const proteinPerKg = p.goal === "lose" || p.goal === "recomp" ? 2.0 : p.goal === "fit" || focusOf(p) === "cardio" ? 1.6 : 1.8;
  const protein = round(refWeight * proteinPerKg, 5);
  const fat = round(Math.max((target * 0.25) / 9, refWeight * 0.7), 5);
  const carbs = Math.max(50, round((target - protein * 4 - fat * 9) / 4, 5));
  const steps = focusOf(p) === "cardio" ? 8000 : p.goal === "lose" ? 10000 : p.goal === "recomp" || p.goal === "tone" ? 9000 : p.goal === "gain" ? 7000 : 8000;

  const diff = p.goalWeightKg - p.weightKg;
  const effRate = Math.abs(weeklyChange);
  const weeksToGoal = (p.goal === "lose" || p.goal === "gain") && effRate > 0 && Math.sign(diff) === Math.sign(weeklyChange) && Math.abs(diff) > 0.2 ? Math.ceil(Math.abs(diff) / effRate) : null;

  return { bmr, daily, training, weights, cardio, tdee, adjust, target, floored, capped, protein, fat, carbs, proteinPerKg, steps, bmi, weeksToGoal, weeklyChange };
}

export function targetsFrom(p: Profile, b: CalorieBreakdown): Targets {
  return { kcal: b.target, protein: b.protein, carbs: b.carbs, fat: b.fat, steps: b.steps, goalWeight: p.goalWeightKg };
}
