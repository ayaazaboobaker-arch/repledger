/**
 * Demo data: a believable six weeks of training, food, steps and weigh-ins
 * leading up to today, generated relative to the current date so the demo
 * never looks stale. Deterministic (seeded) so it's the same every reset.
 */
import { sportKcal } from "./burn";
import { calculate, targetsFrom } from "./calc";
import { FOOD_BY_ID, macrosFor } from "./foods";
import type { DayLog, FoodEntry, MealSlot, Profile, SavedMeal, Targets, WeekPlan } from "./types";
import { addDays, dowKey, todayStr, weekStart } from "./util";

export const DEMO_PROFILE: Profile = {
  name: "Demo",
  sex: "male",
  age: 27,
  heightCm: 180,
  weightKg: 81.0,
  goalWeightKg: 78,
  activity: "light",
  goal: "lose",
  rate: 0.5,
  experience: "intermediate",
  daysPerWeek: 5,
  equipment: "gym",
  sessionMinutes: 60,
  focus: "balanced",
  cardio: { sports: ["run", "cycle"], daysPerWeek: 2, minutes: 30, intensity: "moderate" },
};

export const DEMO_TARGETS: Targets = targetsFrom(DEMO_PROFILE, calculate(DEMO_PROFILE));

const ex = (name: string, sets: number, reps: number, kg: number) => ({ name, sets, reps, kg });
export const DEMO_PLAN: WeekPlan = {
  mon: { title: "Push", focus: "Chest, shoulders, triceps", exercises: [ex("Bench Press", 4, 8, 67.5), ex("Overhead Press", 3, 8, 45), ex("Incline Dumbbell Press", 3, 10, 24), ex("Lateral Raise", 3, 15, 10), ex("Tricep Pushdown", 3, 12, 30)] },
  tue: { title: "Pull", focus: "Back and biceps", exercises: [ex("Deadlift", 3, 5, 110), ex("Pull-up", 4, 8, 0), ex("Barbell Row", 3, 8, 65), ex("Face Pull", 3, 15, 22.5), ex("Bicep Curl", 3, 12, 14)] },
  wed: { title: "Running", focus: "30 min · moderate", exercises: [], cardio: [{ sport: "run", minutes: 30, intensity: "moderate" }] },
  thu: { title: "Legs", focus: "Quads, hamstrings, calves", exercises: [ex("Back Squat", 4, 6, 87.5), ex("Romanian Deadlift", 3, 10, 75), ex("Leg Press", 3, 12, 150), ex("Walking Lunge", 3, 12, 18), ex("Calf Raise", 4, 15, 50)] },
  fri: { title: "Upper", focus: "Strength upper body", exercises: [ex("Incline Bench Press", 3, 6, 60), ex("Chin-up", 3, 8, 0), ex("Seated Dumbbell Press", 3, 10, 20), ex("Cable Row", 3, 12, 55), ex("Dips", 3, 10, 0)] },
  sat: { title: "Lower", focus: "Glutes and hamstrings", exercises: [ex("Front Squat", 3, 8, 65), ex("Hip Thrust", 3, 10, 90), ex("Leg Curl", 3, 12, 40), ex("Calf Raise", 3, 15, 50)] },
  sun: { title: "Cycling", focus: "45 min · easy", exercises: [], cardio: [{ sport: "cycle", minutes: 45, intensity: "easy" }] },
};

type Item = [string, number, string?]; // foodId, grams, portion label
const MEALS: Record<MealSlot, Item[][]> = {
  breakfast: [
    [["oats", 80, "1 cup"], ["milk-low", 250, "1 cup"], ["banana", 120, "1 medium"], ["whey", 30, "1 scoop"]],
    [["egg", 150, "3 eggs"], ["bread-brown", 76, "2 slices"], ["avocado", 75, "½ avo"], ["cappuccino", 300, "regular"]],
    [["greek-yoghurt", 250, "1 cup"], ["berries", 150, "1 cup"], ["muesli", 55, "½ cup"], ["coffee-black", 250, "1 mug"]],
  ],
  lunch: [
    [["chicken-breast", 170, "1 breast"], ["rice-white", 185, "1 cup"], ["mixed-veg", 180, "1 cup"]],
    [["wrap", 62, "1 wrap"], ["tuna-water", 120, "1 tin (drained)"], ["salad", 100, "side salad"], ["feta", 30, "30 g"]],
    [["beef-mince", 150, "150 g"], ["pasta", 250, "1 plate"], ["salad", 100, "side salad"]],
  ],
  dinner: [
    [["steak", 200, "200 g steak"], ["sweet-potato", 150, "1 medium"], ["broccoli", 155, "1 cup"]],
    [["boerewors", 180, "2 pieces"], ["pap-stiff", 240, "1 cup"], ["chakalaka", 120, "½ cup"]],
    [["salmon", 130, "1 fillet"], ["rice-brown", 195, "1 cup"], ["spinach", 90, "½ cup"]],
    [["chicken-curry-rice", 450, "1 plate"]],
    [["hake", 150, "1 fillet"], ["potato", 170, "1 medium"], ["mixed-veg", 180, "1 cup"], ["butter", 5, "1 tsp"]],
  ],
  snacks: [
    [["biltong", 50, "50 g"], ["apple", 180, "1 medium"]],
    [["protein-bar", 60, "1 bar"]],
    [["peanut-butter", 16, "1 tbsp"], ["rusk", 40, "1 rusk"], ["rooibos", 250, "1 mug"]],
    [["almonds", 25, "small handful"], ["fat-free-yoghurt", 175, "1 tub"]],
  ],
};

let seed = 1;
const rnd = () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};
const pick = <T,>(a: T[]) => a[Math.floor(rnd() * a.length)];

function entry(foodId: string, grams: number, portion: string | undefined, meal: MealSlot, i: number): FoodEntry {
  const f = FOOD_BY_ID.get(foodId)!;
  return { id: `demo-${i}-${foodId}`, name: f.name, meal, foodId, grams, portion: portion || `${grams} g`, ...macrosFor(f, grams) };
}

const BIG = new Set(["Bench Press", "Incline Bench Press", "Front Squat", "Overhead Press", "Deadlift", "Barbell Row", "Back Squat", "Romanian Deadlift", "Hip Thrust", "Leg Press"]);

export function buildDemoDays(weeks = 6): Record<string, DayLog> {
  seed = 42;
  const today = todayStr();
  const start = addDays(weekStart(today), -7 * weeks);
  const days: Record<string, DayLog> = {};
  let idx = 0;
  for (let d = start; d <= today; d = addDays(d, 1), idx++) {
    const wk = Math.floor(idx / 7); // 0..weeks
    const back = weeks - wk; // weeks before current
    const key = dowKey(d);
    const isToday = d === today;
    const day: DayLog = { date: d };
    const pd = DEMO_PLAN[key];
    const skip = (wk === 2 && key === "sat") || (wk === 4 && key === "fri");
    if (!isToday && pd.exercises.length && !skip) {
      day.workout = {
        title: pd.title,
        planKey: key,
        startedAt: 1,
        finishedAt: 1,
        exercises: pd.exercises.map((e) => {
          const inc = e.kg === 0 ? 0 : BIG.has(e.name) ? 2.5 * back : e.kg >= 20 ? 2.5 * Math.ceil(back / 2) : 1 * Math.ceil(back / 2);
          const kg = Math.max(0, e.kg - inc);
          const sets = Array.from({ length: e.sets }, (_, j) => {
            let reps = e.reps;
            if (e.kg === 0) reps = Math.max(4, e.reps - Math.ceil(back / 2) - (j === e.sets - 1 ? 1 : 0));
            else if (j >= e.sets - 1 && rnd() < 0.35) reps = e.reps - (rnd() < 0.5 ? 1 : 2);
            return { reps, kg, done: true };
          });
          return { name: e.name, tSets: e.sets, tReps: e.reps, tKg: kg, sets };
        }),
      };
    }
    // cardio on the planned days (and the odd game of padel)
    if (!isToday) {
      const acts = [];
      for (const c of pd.cardio || []) if (rnd() < 0.85) {
        const min = c.minutes + Math.round((rnd() - 0.5) * 10);
        acts.push({ id: `a${idx}${c.sport}`, kind: c.sport, start: 1, seconds: min * 60, steps: 0, km: c.sport === "run" ? +(min / 5.8).toFixed(1) : c.sport === "cycle" ? +(min / 2.6).toFixed(1) : 0, kcal: sportKcal(c.sport, min, c.intensity, 82 - 0.4 * wk), manual: true, intensity: c.intensity });
      }
      if (key === "sat" && rnd() < 0.4) acts.push({ id: `a${idx}p`, kind: "padel", start: 1, seconds: 3600, steps: 0, km: 0, kcal: sportKcal("padel", 60, "moderate", 82), manual: true, intensity: "moderate" as const });
      if (acts.length) day.activities = acts;
    }
    // food
    const foods: FoodEntry[] = [];
    let n = 0;
    const slots: MealSlot[] = isToday ? ["breakfast"] : ["breakfast", "lunch", "dinner", "snacks"];
    for (const slot of slots) {
      if (slot === "snacks" && rnd() < 0.25) continue;
      for (const [id, g, portion] of pick(MEALS[slot])) foods.push(entry(id, g, portion, slot, n++));
    }
    if (!isToday && rnd() < 0.2) foods.push(entry(pick(["beer", "coke", "dark-choc", "chips-crisps"]), 330, undefined, "snacks", n++));
    day.foods = foods;
    if (!isToday) {
      day.steps = Math.round((key === "sun" ? 5000 + rnd() * 4500 : 7000 + rnd() * 6500 + wk * 250) / 10) * 10;
      if (key === "mon" || rnd() < 0.12) day.weight = +(83.6 - 0.45 * wk - (idx % 7) * 0.04 + (rnd() - 0.5) * 0.4).toFixed(1);
    }
    days[d] = day;
  }
  // make sure there's a current weigh-in this week
  const mon = weekStart(today);
  if (days[mon] && days[mon].weight == null && mon !== today) days[mon].weight = 81.0;
  if (mon === today) days[today].weight = 81.0;
  return days;
}

export const DEMO_MEALS: SavedMeal[] = [
  {
    id: "meal-oats",
    name: "Protein oats",
    items: [["oats", 80, "1 cup"], ["milk-low", 250, "1 cup"], ["banana", 120, "1 medium"], ["whey", 30, "1 scoop"]].map(([id, g, portion]) => {
      const f = FOOD_BY_ID.get(id as string)!;
      return { name: f.name, foodId: f.id, grams: g as number, portion: portion as string, ...macrosFor(f, g as number) };
    }),
  },
  {
    id: "meal-braai",
    name: "Braai plate",
    items: [["boerewors", 180, "2 pieces"], ["pap-stiff", 240, "1 cup"], ["chakalaka", 120, "½ cup"]].map(([id, g, portion]) => {
      const f = FOOD_BY_ID.get(id as string)!;
      return { name: f.name, foodId: f.id, grams: g as number, portion: portion as string, ...macrosFor(f, g as number) };
    }),
  },
  {
    id: "meal-chicken-rice",
    name: "Chicken, rice & veg",
    items: [["chicken-breast", 170, "1 breast"], ["rice-white", 185, "1 cup"], ["mixed-veg", 180, "1 cup"]].map(([id, g, portion]) => {
      const f = FOOD_BY_ID.get(id as string)!;
      return { name: f.name, foodId: f.id, grams: g as number, portion: portion as string, ...macrosFor(f, g as number) };
    }),
  },
];
