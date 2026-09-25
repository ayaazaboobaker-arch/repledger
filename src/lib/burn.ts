import type { Activity, DayLog, Intensity, Profile, Workout } from "./types";
import { foodTotals } from "./stats";

/**
 * Calories burned. Sports use MET values from the Compendium of Physical Activities
 * (easy / moderate / hard). We count only the energy above resting (MET - 1), because
 * resting burn is already counted separately - so nothing is counted twice.
 */
export interface Sport {
  id: string;
  label: string;
  group: SportGroup;
  met: [number, number, number];
  /** show a distance field */
  distance?: boolean;
  tags?: string;
}
export type SportGroup = "Cardio" | "Gym & classes" | "Team sports" | "Racket sports" | "Outdoors" | "Mind & body" | "Everyday";

export const SPORTS: Sport[] = [
  { id: "walk", label: "Walking", group: "Cardio", met: [3, 3.8, 5], distance: true, tags: "walk stroll" },
  { id: "run", label: "Running", group: "Cardio", met: [7, 9.8, 11.8], distance: true, tags: "jog jogging parkrun" },
  { id: "treadmill", label: "Treadmill", group: "Cardio", met: [4.3, 8, 11], distance: true },
  { id: "cycle", label: "Cycling", group: "Cardio", met: [5.8, 8, 10], distance: true, tags: "bike mountain biking road" },
  { id: "spin", label: "Spinning / indoor bike", group: "Cardio", met: [6.8, 8.5, 10.5], tags: "stationary bike wattbike" },
  { id: "swim", label: "Swimming", group: "Cardio", met: [6, 8, 10], distance: true, tags: "laps pool" },
  { id: "row", label: "Rowing machine", group: "Cardio", met: [4.8, 7, 8.5], distance: true, tags: "erg" },
  { id: "elliptical", label: "Elliptical / cross-trainer", group: "Cardio", met: [5, 5.5, 7] },
  { id: "stairs", label: "Stair climber", group: "Cardio", met: [6, 8, 9], tags: "stepmill" },
  { id: "skip", label: "Skipping rope", group: "Cardio", met: [8.8, 11.8, 12.3], tags: "jump rope" },
  { id: "hiit", label: "HIIT", group: "Gym & classes", met: [6, 8, 10], tags: "interval tabata circuit" },
  { id: "weights", label: "Weight training", group: "Gym & classes", met: [3.5, 5, 6], tags: "gym lifting" },
  { id: "crossfit", label: "CrossFit / functional", group: "Gym & classes", met: [5.5, 8, 10], tags: "wod" },
  { id: "bootcamp", label: "Bootcamp", group: "Gym & classes", met: [5, 7, 9] },
  { id: "aerobics", label: "Aerobics / step class", group: "Gym & classes", met: [5, 7.3, 9.5], tags: "zumba" },
  { id: "dance", label: "Dancing", group: "Gym & classes", met: [4.5, 5.5, 7.8], tags: "zumba" },
  { id: "boxing", label: "Boxing", group: "Gym & classes", met: [5.5, 7.8, 12], tags: "kickboxing bag" },
  { id: "martial", label: "Martial arts", group: "Gym & classes", met: [5.3, 7, 10.3], tags: "karate judo bjj mma taekwondo" },
  { id: "soccer", label: "Soccer", group: "Team sports", met: [7, 8, 10], tags: "football futsal" },
  { id: "rugby", label: "Rugby", group: "Team sports", met: [6.3, 8.3, 10] },
  { id: "netball", label: "Netball", group: "Team sports", met: [5, 6.5, 8] },
  { id: "basketball", label: "Basketball", group: "Team sports", met: [6, 6.5, 8] },
  { id: "cricket", label: "Cricket", group: "Team sports", met: [4.8, 5.5, 6.5] },
  { id: "hockey", label: "Hockey", group: "Team sports", met: [7, 8, 10] },
  { id: "volleyball", label: "Volleyball", group: "Team sports", met: [3, 4, 6], tags: "beach" },
  { id: "waterpolo", label: "Water polo", group: "Team sports", met: [7, 10, 10] },
  { id: "tennis", label: "Tennis", group: "Racket sports", met: [5, 7.3, 8] },
  { id: "padel", label: "Padel", group: "Racket sports", met: [5, 6, 7.5] },
  { id: "squash", label: "Squash", group: "Racket sports", met: [7.3, 10, 12] },
  { id: "badminton", label: "Badminton", group: "Racket sports", met: [4.5, 5.5, 7] },
  { id: "tabletennis", label: "Table tennis", group: "Racket sports", met: [3, 4, 5] },
  { id: "hike", label: "Hiking", group: "Outdoors", met: [5.3, 6, 7.8], distance: true, tags: "trail mountain" },
  { id: "trailrun", label: "Trail running", group: "Outdoors", met: [8, 9, 11], distance: true },
  { id: "golf", label: "Golf (walking)", group: "Outdoors", met: [4.3, 4.8, 5.3] },
  { id: "surf", label: "Surfing", group: "Outdoors", met: [3, 5, 6] },
  { id: "paddle", label: "Kayaking / SUP", group: "Outdoors", met: [3.5, 5, 7], tags: "canoe paddle board" },
  { id: "climb", label: "Rock climbing / bouldering", group: "Outdoors", met: [5.8, 7.5, 8] },
  { id: "skate", label: "Skateboarding / skating", group: "Outdoors", met: [5, 6, 7], tags: "roller" },
  { id: "horse", label: "Horse riding", group: "Outdoors", met: [3.8, 5.5, 7.3] },
  { id: "yoga", label: "Yoga", group: "Mind & body", met: [2.5, 3, 4], tags: "vinyasa hot" },
  { id: "pilates", label: "Pilates", group: "Mind & body", met: [3, 3.5, 4.5], tags: "reformer" },
  { id: "stretch", label: "Stretching / mobility", group: "Mind & body", met: [2.3, 2.5, 3] },
  { id: "garden", label: "Gardening / yard work", group: "Everyday", met: [3.5, 4, 5] },
  { id: "house", label: "Housework / cleaning", group: "Everyday", met: [2.8, 3.5, 4] },
  { id: "labour", label: "Manual labour", group: "Everyday", met: [4, 5.5, 7], tags: "work construction moving" },
  { id: "play", label: "Playing with kids", group: "Everyday", met: [3, 4, 5.8] },
  { id: "other", label: "Other activity", group: "Everyday", met: [3.5, 5, 7] },
];
export const SPORT_GROUPS = [...new Set(SPORTS.map((s) => s.group))] as SportGroup[];
export const SPORT_BY_ID = new Map(SPORTS.map((s) => [s.id, s]));
export const INTENSITY: Record<Intensity, { label: string; hint: string; i: 0 | 1 | 2 }> = {
  easy: { label: "Easy", hint: "Could chat the whole time", i: 0 },
  moderate: { label: "Moderate", hint: "Breathing harder, short sentences", i: 1 },
  hard: { label: "Hard", hint: "Only a few words at a time", i: 2 },
};

/** Net calories for a sport (above resting). */
export function sportKcal(sportId: string, minutes: number, intensity: Intensity, weightKg: number) {
  const s = SPORT_BY_ID.get(sportId) ?? SPORT_BY_ID.get("other")!;
  const met = s.met[INTENSITY[intensity].i];
  return Math.max(0, Math.round(((met - 1) * 3.5 * weightKg) / 200 * minutes));
}

/** Speed (km/h) where effort moves from easy to moderate, and moderate to hard. */
const SPEED: Record<string, [number, number]> = {
  walk: [4.8, 6.4], run: [8.5, 11], treadmill: [6, 9.5], cycle: [16, 22], hike: [3, 4.5], trailrun: [7, 10], swim: [1.5, 2.5], row: [11, 13],
};
/** When a distance is given, the pace says how hard it really was (more reliable than guessing). */
export function intensityFromPace(sport: string, km: number | null | undefined, minutes: number): Intensity | null {
  const b = SPEED[sport];
  if (!b || !km || km <= 0 || minutes <= 0) return null;
  const kmh = km / (minutes / 60);
  return kmh < b[0] ? "easy" : kmh < b[1] ? "moderate" : "hard";
}

/** Net calories from walking around, per step (about 0.04 kcal a step at 80 kg). */
export const stepKcal = (steps: number, weightKg: number) => Math.round(steps * weightKg * 0.0005);

export const bmrOf = (p: Profile) => Math.round(10 * p.weightKg + 6.25 * p.heightCm - 5 * p.age + (p.sex === "male" ? 5 : -161));

/**
 * How long a lifting session took, in minutes. Uses the clock, but never more than the sets
 * could plausibly take - so a session left open (or finished the next morning) isn't counted
 * as hours of training.
 */
export function workoutMinutes(w?: Workout): number {
  if (!w) return 0;
  const done = w.exercises.reduce((a, e) => a + e.sets.filter((s) => s.done).length, 0);
  if (!done) return 0;
  const estimate = Math.round(done * 2.6 + 5);
  const ceiling = done * 5 + 15;
  if (w.startedAt && w.startedAt > 1 && w.finishedAt && w.finishedAt > w.startedAt) {
    const clock = Math.round((w.finishedAt - w.startedAt) / 60000);
    return Math.max(Math.min(clock, ceiling), Math.round(done * 1.5));
  }
  return estimate;
}

/** Activities done on foot, which your phone or watch also counts as steps. Steps per minute by effort. */
export const ON_FOOT: Record<string, [number, number, number]> = {
  walk: [95, 110, 125], run: [150, 160, 170], treadmill: [110, 150, 165],
  hike: [85, 95, 105], trailrun: [145, 155, 165], golf: [45, 50, 55],
};
export const onFoot = (kind: string) => kind in ON_FOOT;
export function estSteps(a: Pick<Activity, "kind" | "seconds" | "intensity">) {
  const c = ON_FOOT[a.kind];
  return c ? Math.round(c[INTENSITY[a.intensity ?? "moderate"].i] * a.seconds / 60) : 0;
}

export interface ActivityBurn {
  id: string;
  /** calories the activity adds on top of what's already counted */
  kcal: number;
  /** part of the activity already covered by the step count */
  inSteps: number;
}

/**
 * What each activity adds to the day. Nothing is counted twice:
 * - walks/runs from the step tracker already put their steps in the step count, so only their extra effort counts;
 * - a walk, run or hike you log by hand is assumed to be in your step count too (your phone counted it) -
 *   that part is taken off, unless you said the steps aren't included.
 */
export function activityBurns(day: DayLog | undefined, kg: number): ActivityBurn[] {
  const acts = day?.activities || [];
  const trackerSteps = acts.filter((a) => !a.manual).reduce((n, a) => n + (a.steps || 0), 0);
  let spare = Math.max(0, (day?.steps || 0) - trackerSteps);
  return acts.map((a) => {
    if (!a.manual) {
      const base = stepKcal(a.steps, kg);
      return { id: a.id, kcal: Math.max(0, a.kcal - base), inSteps: Math.min(a.kcal, base) };
    }
    if (!onFoot(a.kind) || a.inSteps === false || spare <= 0) return { id: a.id, kcal: a.kcal, inSteps: 0 };
    const overlap = Math.min(spare, estSteps(a));
    spare -= overlap;
    const covered = Math.min(a.kcal, stepKcal(overlap, kg));
    return { id: a.id, kcal: a.kcal - covered, inSteps: covered };
  });
}

export interface DayBurn {
  restingFull: number;
  resting: number;
  steps: number;
  workout: number;
  sports: number;
  digestion: number;
  /** personal correction learned from your weigh-ins (see calibration.ts); 0 when not calibrated */
  adjust: number;
  active: number;
  total: number;
  eaten: number;
  /** eaten - total; negative = deficit */
  balance: number;
  hasFood: boolean;
  acts: ActivityBurn[];
}

/** How much of a day has gone by: 1 for past days, the fraction of today so far. */
export function dayFraction(date: string, today: string, now = new Date()) {
  if (date !== today) return 1;
  return Math.max(0.02, (now.getHours() * 60 + now.getMinutes()) / 1440);
}

/**
 * Everything burned on a day. `fraction` < 1 counts only the resting burn up to now (for
 * "today so far"); `factor` is your personal calibration (1 = none).
 */
export function dayBurn(day: DayLog | undefined, profile: Profile | null, weightOverride?: number | null, fraction = 1, factor = 1): DayBurn | null {
  if (!profile) return null;
  const kg = weightOverride ?? profile.weightKg;
  const restingFull = bmrOf({ ...profile, weightKg: kg });
  const resting = Math.round(restingFull * fraction);
  const steps = stepKcal(day?.steps || 0, kg);
  const workout = sportKcal("weights", workoutMinutes(day?.workout), "moderate", kg);
  const acts = activityBurns(day, kg);
  const sports = acts.reduce((a, x) => a + x.kcal, 0);
  const food = foodTotals(day?.foods);
  const digestion = Math.round(food.kcal * 0.1);
  const base = resting + steps + workout + sports + digestion;
  const adjust = Math.round(base * (factor - 1));
  const active = steps + workout + sports;
  const total = base + adjust;
  return { restingFull, resting, steps, workout, sports, digestion, adjust, active, total, eaten: Math.round(food.kcal), balance: Math.round(food.kcal - total), hasFood: !!day?.foods?.length, acts };
}
