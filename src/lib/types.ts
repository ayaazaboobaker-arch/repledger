export type DowKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface PlanExercise {
  name: string;
  sets: number;
  reps: number;
  kg: number;
}
export interface PlanDay {
  title: string;
  focus?: string;
  exercises: PlanExercise[];
}
export type WeekPlan = Record<DowKey, PlanDay>;

export interface LoggedSet {
  reps: number | null;
  kg: number | null;
  done: boolean;
}
export interface SessionExercise {
  name: string;
  tSets: number | null;
  tReps: number | null;
  tKg: number | null;
  sets: LoggedSet[];
}
export interface Workout {
  title: string;
  planKey: DowKey;
  exercises: SessionExercise[];
  startedAt?: number;
  finishedAt?: number;
}

export type MealSlot = "breakfast" | "lunch" | "dinner" | "snacks";
export interface FoodEntry {
  id: string;
  name: string;
  meal: MealSlot;
  kcal: number;
  p: number;
  c: number;
  f: number;
  /** portion description, e.g. "150 g" or "2 slices" */
  portion?: string;
  foodId?: string;
  grams?: number;
}

export interface Activity {
  id: string;
  kind: "walk" | "run";
  start: number;
  seconds: number;
  steps: number;
  km: number;
  kcal: number;
}

export interface DayLog {
  date: string;
  activities?: Activity[];
  workout?: Workout;
  foods?: FoodEntry[];
  steps?: number | null;
  weight?: number | null;
}

export interface Targets {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  steps: number;
  goalWeight: number;
}

export type Sex = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "very";
export type Goal = "lose" | "gain" | "recomp" | "tone" | "fit";
export type Experience = "beginner" | "intermediate" | "advanced";
export type Equipment = "gym" | "dumbbells" | "bodyweight";

export interface Profile {
  name: string;
  sex: Sex;
  age: number;
  heightCm: number;
  weightKg: number;
  goalWeightKg: number;
  activity: ActivityLevel;
  goal: Goal;
  /** kg per week, for lose/gain */
  rate: number;
  experience: Experience;
  daysPerWeek: number;
  equipment: Equipment;
  sessionMinutes: number;
}

export interface SavedMeal {
  id: string;
  name: string;
  items: Omit<FoodEntry, "id" | "meal">[];
}

export interface CustomFood {
  id: string;
  name: string;
  /** values per serving */
  servingLabel: string;
  kcal: number;
  p: number;
  c: number;
  f: number;
}

export type WidgetId = "session" | "nutrition" | "steps" | "weight" | "week" | "strength" | "weightChart" | "stepsChart" | "kcalChart" | "sessionsChart";
export interface LayoutItem {
  id: WidgetId;
  /** legacy width, kept so older saved layouts still load */
  size: "full" | "half";
  /** width in columns of a 6-column grid (2 = a third, 3 = half, 4 = two thirds, 6 = full) */
  cols?: number;
  /** fixed height in px; missing = fit the content */
  h?: number | null;
}

export interface ActiveSession {
  date: string;
  index: number;
  startedAt: number;
  restEndsAt: number | null;
  restSeconds: number;
}
