/** Exercise library for the plan builder, grouped so it's quick to browse on a phone. */
export type ExGroup = "Legs" | "Chest" | "Back" | "Shoulders" | "Arms" | "Core" | "Full body";

export const EXERCISES: Record<ExGroup, string[]> = {
  Legs: ["Back Squat", "Front Squat", "Goblet Squat", "Bulgarian Split Squat", "Leg Press", "Hack Squat", "Walking Lunge", "Reverse Lunge", "Step-up", "Romanian Deadlift", "Hip Thrust", "Glute Bridge", "Leg Curl", "Leg Extension", "Calf Raise", "Pistol Squat"],
  Chest: ["Bench Press", "Incline Bench Press", "Dumbbell Bench Press", "Incline Dumbbell Press", "Chest Fly", "Cable Crossover", "Push-up", "Dips", "Close-grip Bench Press"],
  Back: ["Deadlift", "Sumo Deadlift", "Pull-up", "Chin-up", "Lat Pulldown", "Barbell Row", "Dumbbell Row", "Cable Row", "T-Bar Row", "Inverted Row", "Shrug"],
  Shoulders: ["Overhead Press", "Seated Dumbbell Press", "Arnold Press", "Lateral Raise", "Rear Delt Fly", "Face Pull", "Pike Push-up"],
  Arms: ["Bicep Curl", "Hammer Curl", "Preacher Curl", "Tricep Pushdown", "Skull Crusher", "Overhead Tricep Extension"],
  Core: ["Plank", "Hanging Leg Raise", "Cable Crunch", "Ab Wheel Rollout", "Russian Twist"],
  "Full body": ["Kettlebell Swing", "Farmer's Carry", "Muscle-up", "Burpee", "Clean and Press"],
};

export const GROUPS = Object.keys(EXERCISES) as ExGroup[];
export const ALL_EXERCISES = GROUPS.flatMap((g) => EXERCISES[g]);

/** Sensible starting numbers when an exercise is first added. */
export function defaultsFor(name: string): { sets: number; reps: number; kg: number } {
  const n = name.toLowerCase();
  if (/plank/.test(n)) return { sets: 3, reps: 45, kg: 0 };
  if (/push-up|pull-up|chin-up|dips|muscle-up|pistol|inverted|burpee|leg raise|ab wheel|pike/.test(n)) return { sets: 3, reps: 8, kg: 0 };
  if (/squat|deadlift|bench|press|row/.test(n) && !/dumbbell|goblet|split/.test(n)) return { sets: 4, reps: 6, kg: 40 };
  if (/curl|raise|fly|extension|pushdown|crossover|face pull|shrug|calf/.test(n)) return { sets: 3, reps: 12, kg: 10 };
  return { sets: 3, reps: 10, kg: 20 };
}
