import type { DowKey, Equipment, Experience, Goal, PlanDay, Profile, WeekPlan } from "./types";

type Pattern =
  | "squat" | "squat2" | "hinge" | "deadlift" | "hpush" | "incline" | "vpush" | "hpull" | "hpull2" | "vpull"
  | "lunge" | "ham" | "glute" | "delts" | "rear" | "biceps" | "triceps" | "calves" | "core";

const COMPOUND: Pattern[] = ["squat", "squat2", "hinge", "deadlift", "hpush", "incline", "vpush", "hpull", "hpull2", "vpull", "lunge"];

const MOVES: Record<Equipment, Record<Pattern, string>> = {
  gym: {
    squat: "Back Squat", squat2: "Leg Press", hinge: "Romanian Deadlift", deadlift: "Deadlift", hpush: "Bench Press",
    incline: "Incline Dumbbell Press", vpush: "Overhead Press", hpull: "Barbell Row", hpull2: "Cable Row", vpull: "Lat Pulldown",
    lunge: "Walking Lunge", ham: "Leg Curl", glute: "Hip Thrust", delts: "Lateral Raise", rear: "Face Pull",
    biceps: "Bicep Curl", triceps: "Tricep Pushdown", calves: "Calf Raise", core: "Cable Crunch",
  },
  dumbbells: {
    squat: "Goblet Squat", squat2: "Bulgarian Split Squat", hinge: "Dumbbell Romanian Deadlift", deadlift: "Dumbbell Deadlift",
    hpush: "Dumbbell Bench Press", incline: "Incline Dumbbell Press", vpush: "Seated Dumbbell Press", hpull: "Dumbbell Row",
    hpull2: "Chest-supported Dumbbell Row", vpull: "Pull-up", lunge: "Reverse Lunge", ham: "Single-leg Romanian Deadlift",
    glute: "Dumbbell Hip Thrust", delts: "Lateral Raise", rear: "Rear Delt Fly", biceps: "Hammer Curl",
    triceps: "Overhead Tricep Extension", calves: "Calf Raise", core: "Russian Twist",
  },
  bodyweight: {
    squat: "Split Squat", squat2: "Bulgarian Split Squat", hinge: "Glute Bridge", deadlift: "Single-leg Glute Bridge",
    hpush: "Push-up", incline: "Decline Push-up", vpush: "Pike Push-up", hpull: "Inverted Row", hpull2: "Towel Row",
    vpull: "Pull-up", lunge: "Reverse Lunge", ham: "Nordic Curl (negative)", glute: "Single-leg Glute Bridge",
    delts: "Wall Walk", rear: "Prone Y-raise", biceps: "Chin-up", triceps: "Dips", calves: "Single-leg Calf Raise", core: "Hanging Leg Raise",
  },
};

/** Rough 8-rep working weight as a fraction of body weight (intermediate male). Dumbbells are per hand. */
const LOAD: Partial<Record<string, number>> = {
  "Back Squat": 0.9, "Leg Press": 1.6, "Romanian Deadlift": 0.8, "Deadlift": 1.1, "Bench Press": 0.7,
  "Incline Dumbbell Press": 0.25, "Overhead Press": 0.45, "Barbell Row": 0.6, "Cable Row": 0.6, "Lat Pulldown": 0.6,
  "Walking Lunge": 0.18, "Leg Curl": 0.4, "Hip Thrust": 1.0, "Lateral Raise": 0.1, "Face Pull": 0.25, "Bicep Curl": 0.14,
  "Tricep Pushdown": 0.3, "Calf Raise": 0.5, "Cable Crunch": 0.4, "Goblet Squat": 0.3, "Bulgarian Split Squat": 0.15,
  "Dumbbell Romanian Deadlift": 0.3, "Dumbbell Deadlift": 0.35, "Dumbbell Bench Press": 0.28, "Seated Dumbbell Press": 0.2,
  "Dumbbell Row": 0.3, "Chest-supported Dumbbell Row": 0.22, "Reverse Lunge": 0.15, "Single-leg Romanian Deadlift": 0.18,
  "Dumbbell Hip Thrust": 0.4, "Rear Delt Fly": 0.08, "Hammer Curl": 0.14, "Overhead Tricep Extension": 0.2, "Russian Twist": 0.1,
};

interface Template {
  id: string;
  name: string;
  days: number;
  why: string;
  schedule: Partial<Record<DowKey, { title: string; focus: string; slots: Pattern[] }>>;
}

const TEMPLATES: Template[] = [
  {
    id: "fb3", name: "Full body, 3 days", days: 3,
    why: "Every muscle gets trained three times a week with a rest day between sessions — the fastest way for newer lifters to learn the lifts and add strength, and easy to keep up with a busy week.",
    schedule: {
      mon: { title: "Full Body A", focus: "Squat, press, pull", slots: ["squat", "hpush", "vpull", "glute", "delts", "core"] },
      wed: { title: "Full Body B", focus: "Hinge, overhead, row", slots: ["deadlift", "vpush", "hpull", "lunge", "biceps", "triceps"] },
      fri: { title: "Full Body A", focus: "Squat, press, pull", slots: ["squat", "hpush", "vpull", "glute", "delts", "core"] },
    },
  },
  {
    id: "ul4", name: "Upper / lower, 4 days", days: 4,
    why: "Upper and lower body each get two sessions a week. It hits the sweet spot of twice-weekly frequency with enough volume per session to keep progressing past the beginner stage.",
    schedule: {
      mon: { title: "Upper A", focus: "Chest, back, shoulders", slots: ["hpush", "hpull", "vpush", "vpull", "triceps", "biceps"] },
      tue: { title: "Lower A", focus: "Quads and hamstrings", slots: ["squat", "hinge", "lunge", "ham", "calves", "core"] },
      thu: { title: "Upper B", focus: "Incline, pull, delts", slots: ["incline", "vpull", "hpull2", "delts", "rear", "triceps"] },
      fri: { title: "Lower B", focus: "Hinge and glutes", slots: ["deadlift", "squat2", "glute", "ham", "calves"] },
    },
  },
  {
    id: "ppl5", name: "Push / pull / legs + upper / lower, 5 days", days: 5,
    why: "Five focused sessions with each muscle trained roughly twice a week. More total volume for building muscle, while keeping each workout a manageable length.",
    schedule: {
      mon: { title: "Push", focus: "Chest, shoulders, triceps", slots: ["hpush", "vpush", "incline", "delts", "triceps"] },
      tue: { title: "Pull", focus: "Back and biceps", slots: ["deadlift", "vpull", "hpull", "rear", "biceps"] },
      thu: { title: "Legs", focus: "Quads, hamstrings, calves", slots: ["squat", "hinge", "squat2", "lunge", "calves"] },
      fri: { title: "Upper", focus: "Strength upper body", slots: ["hpush", "vpull", "vpush", "hpull2", "triceps"] },
      sat: { title: "Lower", focus: "Glutes and hamstrings", slots: ["squat", "glute", "ham", "calves", "core"] },
    },
  },
  {
    id: "ppl6", name: "Push / pull / legs, 6 days", days: 6,
    why: "The classic high-volume split — each muscle twice a week with lots of sets. Best for experienced lifters who recover well and enjoy training most days.",
    schedule: {
      mon: { title: "Push", focus: "Heavy press", slots: ["hpush", "vpush", "incline", "delts", "triceps"] },
      tue: { title: "Pull", focus: "Heavy pull", slots: ["deadlift", "vpull", "hpull", "rear", "biceps"] },
      wed: { title: "Legs", focus: "Squat focus", slots: ["squat", "hinge", "lunge", "ham", "calves"] },
      thu: { title: "Push", focus: "Volume press", slots: ["incline", "hpush", "vpush", "delts", "triceps"] },
      fri: { title: "Pull", focus: "Volume pull", slots: ["vpull", "hpull2", "hpull", "rear", "biceps"] },
      sat: { title: "Legs", focus: "Hinge focus", slots: ["hinge", "squat2", "glute", "ham", "core"] },
    },
  },
];

function repScheme(goal: Goal, exp: Experience, compound: boolean): { sets: number; reps: number } {
  if (!compound) return { sets: exp === "beginner" || goal === "fit" ? 2 : 3, reps: goal === "gain" ? 10 : goal === "tone" ? 15 : 12 };
  if (goal === "fit") return { sets: exp === "advanced" ? 3 : 2, reps: 10 };
  if (goal === "tone") return { sets: 3, reps: 12 };
  const sets = exp === "beginner" ? 3 : exp === "advanced" ? 4 : goal === "lose" ? 3 : 4;
  const reps = exp === "advanced" && goal === "gain" ? 6 : 8;
  return { sets, reps };
}

function startLoad(name: string, p: Profile, eq: Equipment): number {
  if (eq === "bodyweight") return 0;
  const ratio = LOAD[name];
  if (!ratio) return 0;
  const exp = p.experience === "beginner" ? 0.55 : p.experience === "advanced" ? 1.25 : 1;
  const sex = p.sex === "female" ? 0.62 : 1;
  const raw = p.weightKg * ratio * exp * sex;
  const step = raw < 20 ? 1 : 2.5;
  return Math.max(step, Math.round(raw / step) * step);
}

export interface Recommendation {
  template: Template;
  plan: WeekPlan;
  notes: string[];
}

export function recommendPlan(p: Profile): Recommendation {
  const d = p.daysPerWeek;
  let t = d <= 3 ? TEMPLATES[0] : d === 4 ? TEMPLATES[1] : d === 5 ? TEMPLATES[2] : TEMPLATES[3];
  if (p.experience === "beginner" && d >= 5) t = TEMPLATES[1];
  const maxEx = p.sessionMinutes <= 40 ? 4 : p.sessionMinutes <= 55 ? 5 : 6;
  const plan = {} as WeekPlan;
  (["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as DowKey[]).forEach((k) => {
    const s = t.schedule[k];
    if (!s) {
      plan[k] = { title: "Rest", exercises: [] };
      return;
    }
    const day: PlanDay = {
      title: s.title,
      focus: s.focus,
      exercises: s.slots.slice(0, maxEx).map((slot) => {
        const name = MOVES[p.equipment][slot];
        const sc = repScheme(p.goal, p.experience, COMPOUND.includes(slot));
        return { name, sets: sc.sets, reps: sc.reps, kg: startLoad(name, p, p.equipment) };
      }),
    };
    plan[k] = day;
  });
  const notes: string[] = [];
  if (p.experience === "beginner" && d >= 5) notes.push("You picked 5+ days, but as a newer lifter you'll progress just as fast on 4 — use the spare days for walks.");
  if (d < 3) notes.push("Two sessions a week works: do Full Body A and B and skip the Friday repeat.");
  notes.push(
    "Starting weights are estimates from your body weight. Use the first week to find a load you can lift for every rep with 1–2 reps to spare, then add weight once you hit all sets.",
  );
  if (p.goal === "lose") notes.push("Keep lifting heavy while dieting — it's what tells your body to hold on to muscle. The calorie deficit and your step goal do the fat-loss work.");
  if (p.goal === "gain") notes.push("Add 2.5 kg to the big lifts (or 1–2 reps to smaller ones) whenever you complete every set. If your weight isn't rising about 0.25 kg a week, add 150 kcal.");
  if (p.goal === "tone") notes.push("Toning is building a little muscle and keeping body fat in check — so lift with moderate weights for 12–15 controlled reps, and let the small calorie trim and your steps reveal the definition.");
  if (p.goal === "fit") notes.push("For general fitness, two hard sets per exercise is plenty. Add a brisk walk, run or cycle on one or two rest days for your heart and lungs.");
  if (p.goal === "recomp") notes.push("Losing fat and building muscle together works best with heavy lifting, high protein every day and a small deficit. Expect the scale to move slowly while your lifts and the mirror improve.");
  if (p.equipment === "bodyweight") notes.push("Make bodyweight moves harder by slowing the lowering phase to 3 seconds or adding a backpack with books.");
  return { template: t, plan, notes };
}
