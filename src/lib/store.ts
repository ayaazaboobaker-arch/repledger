import { create } from "zustand";
import { normGoal } from "./calc";
import { buildDemoDays, DEMO_MEALS, DEMO_PLAN, DEMO_PROFILE, DEMO_TARGETS } from "./demo";
import { planSession } from "./stats";
import { store } from "./storage";
import type { LayoutItem, ActiveSession, CustomFood, DayLog, DowKey, FoodEntry, MealSlot, Profile, SavedMeal, Targets, WeekPlan, Workout } from "./types";
import { dowKey, uid } from "./util";

/** Everything that belongs to one person. Saved per profile under rep-ledger:user:<id>. */
export interface UserData {
  profile: Profile | null;
  targets: Targets;
  plan: WeekPlan;
  days: Record<string, DayLog>;
  savedMeals: SavedMeal[];
  customFoods: CustomFood[];
  active: ActiveSession | null;
  isDemo: boolean;
  /** Today page card order and widths; null = default */
  layout: LayoutItem[] | null;
}

interface Actions {
  setLayout: (l: LayoutItem[] | null) => void;
  updateDay: (date: string, fn: (d: DayLog) => void) => void;
  editWorkout: (date: string, fn: (w: Workout) => void) => void;
  setPlan: (plan: WeekPlan) => void;
  setTargets: (t: Partial<Targets>) => void;
  setProfile: (p: Profile) => void;

  addFoods: (date: string, meal: MealSlot, items: Omit<FoodEntry, "id" | "meal">[]) => void;
  removeFood: (date: string, id: string) => void;
  saveMeal: (name: string, items: Omit<FoodEntry, "id" | "meal">[]) => void;
  deleteMeal: (id: string) => void;
  addCustomFood: (f: Omit<CustomFood, "id">) => CustomFood;

  startSession: (date: string, planKey?: DowKey) => void;
  setActive: (patch: Partial<ActiveSession> | null) => void;
  finishSession: () => void;

  loadDemo: () => void;
}

type State = UserData & Actions;

const clone = <T,>(o: T): T => JSON.parse(JSON.stringify(o));

const REST_WEEK: WeekPlan = {
  mon: { title: "Rest", exercises: [] }, tue: { title: "Rest", exercises: [] }, wed: { title: "Rest", exercises: [] },
  thu: { title: "Rest", exercises: [] }, fri: { title: "Rest", exercises: [] }, sat: { title: "Rest", exercises: [] }, sun: { title: "Rest", exercises: [] },
};

export const blankData = (): UserData => ({
  profile: null, targets: clone(DEMO_TARGETS), plan: clone(REST_WEEK), days: {}, savedMeals: [], customFoods: [], active: null, isDemo: false, layout: null,
});
export const demoData = (): UserData => ({
  profile: clone(DEMO_PROFILE), targets: clone(DEMO_TARGETS), plan: clone(DEMO_PLAN), days: buildDemoDays(), savedMeals: clone(DEMO_MEALS), customFoods: [], active: null, isDemo: true, layout: null,
});

export const useStore = create<State>()((set, get) => ({
  ...blankData(),

  updateDay: (date, fn) =>
    set((s) => {
      const d = clone(s.days[date] || { date });
      fn(d);
      return { days: { ...s.days, [date]: d } };
    }),
  editWorkout: (date, fn) =>
    get().updateDay(date, (d) => {
      if (!d.workout) d.workout = planSession(get().plan, dowKey(date));
      fn(d.workout);
    }),
  setLayout: (layout) => set({ layout }),
  setPlan: (plan) => set({ plan: clone(plan) }),
  setTargets: (t) => set((s) => ({ targets: { ...s.targets, ...t } })),
  setProfile: (p) => set({ profile: p }),

  addFoods: (date, meal, items) =>
    get().updateDay(date, (d) => {
      d.foods = (d.foods || []).concat(items.map((i) => ({ ...i, id: uid(), meal })));
    }),
  removeFood: (date, id) =>
    get().updateDay(date, (d) => {
      d.foods = (d.foods || []).filter((f) => f.id !== id);
    }),
  saveMeal: (name, items) => set((s) => ({ savedMeals: [{ id: uid(), name, items: clone(items) }, ...s.savedMeals] })),
  deleteMeal: (id) => set((s) => ({ savedMeals: s.savedMeals.filter((m) => m.id !== id) })),
  addCustomFood: (f) => {
    const cf = { ...f, id: "custom-" + uid() };
    set((s) => ({ customFoods: [cf, ...s.customFoods] }));
    return cf;
  },

  startSession: (date, planKey) => {
    const s = get();
    const existing = s.days[date]?.workout;
    const anyDone = existing?.exercises.some((e) => e.sets.some((x) => x.done));
    if (!existing || (planKey && planKey !== existing.planKey && !anyDone)) {
      get().updateDay(date, (d) => {
        d.workout = planSession(s.plan, planKey || dowKey(date));
      });
    }
    get().updateDay(date, (d) => {
      d.workout!.startedAt = d.workout!.startedAt || Date.now();
      delete d.workout!.finishedAt;
    });
    set({ active: { date, index: 0, startedAt: Date.now(), restEndsAt: null, restSeconds: s.active?.restSeconds || 90 } });
  },
  setActive: (patch) => set((s) => ({ active: patch === null ? null : s.active ? { ...s.active, ...patch } : null })),
  finishSession: () => {
    const a = get().active;
    if (a) get().updateDay(a.date, (d) => { if (d.workout) d.workout.finishedAt = Date.now(); });
    set({ active: null });
  },

  loadDemo: () => set({ ...demoData(), layout: get().layout }),
}));

/* ---------- per-profile persistence ----------
 * Every profile keeps a copy on this device (rep-ledger:user:<id>) so the app opens
 * instantly and works offline. Signed-in accounts also sync that copy to the online
 * database - see cloud.ts, which listens through onDataChange().
 */
const DATA_KEYS: (keyof UserData)[] = ["profile", "targets", "plan", "days", "savedMeals", "customFoods", "active", "isDemo", "layout"];
let currentKey: string | null = null;
let timer: number | undefined;
let quiet = false;
let listener: (() => void) | null = null;

const userKey = (id: string) => `rep-ledger:user:${id}`;
export function snapshot(): UserData {
  const s = useStore.getState();
  return Object.fromEntries(DATA_KEYS.map((k) => [k, s[k]])) as unknown as UserData;
}
function flush() {
  clearTimeout(timer);
  timer = undefined;
  if (currentKey) store.set(currentKey, JSON.stringify(snapshot()));
}
useStore.subscribe(() => {
  if (!currentKey || quiet) return;
  clearTimeout(timer);
  timer = window.setTimeout(flush, 250);
  listener?.();
});
if (typeof window !== "undefined") window.addEventListener("pagehide", flush);

/** Called after every change the person makes (not after loading or applying synced data). */
export function onDataChange(fn: (() => void) | null) { listener = fn; }

const normalise = (saved: Partial<UserData>): UserData => {
  const data: UserData = { ...blankData(), ...saved };
  if (data.profile) data.profile = { ...data.profile, goal: normGoal(data.profile.goal) };
  return data;
};
const load = (data: UserData) => { quiet = true; try { useStore.setState(data); } finally { quiet = false; } };

/** Load a profile's data into the app. `initial` is used only when nothing is saved on this device yet. */
export function openUserData(id: string, initial?: UserData) {
  flush();
  currentKey = null;
  const saved = store.getJSON<Partial<UserData>>(userKey(id));
  load(saved ? normalise(saved) : initial ? normalise(initial) : blankData());
  currentKey = userKey(id);
  flush();
}
/** Replace what's on screen with newer data from the database, without treating it as a new edit. */
export function applyRemoteData(id: string, data: Partial<UserData>) {
  if (currentKey !== userKey(id)) { store.set(userKey(id), JSON.stringify(normalise(data))); return; }
  clearTimeout(timer);
  load(normalise(data));
  flush();
}
export function readUserData(id: string): UserData | null {
  const saved = store.getJSON<Partial<UserData>>(userKey(id));
  return saved ? normalise(saved) : null;
}
export function writeUserData(id: string, data: UserData) { store.set(userKey(id), JSON.stringify(data)); }
export function closeUserData() {
  flush();
  currentKey = null;
  load(blankData());
}
export function deleteUserData(id: string) {
  if (currentKey === userKey(id)) currentKey = null;
  store.remove(userKey(id));
}
export const hasUserData = (id: string) => store.get(userKey(id)) != null;
