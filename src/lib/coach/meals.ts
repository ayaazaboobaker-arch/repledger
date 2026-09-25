/**
 * Meal plans built from the app's own food list, sized to hit your calorie and macro targets.
 *
 * Each meal has a shape (breakfast = protein + carb + fruit, lunch = protein + carb + veg, ...).
 * Foods are picked from hand-picked pools of everyday whole foods (with SA staples), favouring
 * foods you log often, and skipping anything your diet settings rule out. Portions are then
 * solved so each meal lands on its share of the day's protein, carbs and fat, and rounded to
 * sensible amounts (whole eggs, slices, 5 g steps).
 */
import { FOOD_BY_ID, type Food } from "../foods";
import type { DayLog, FoodEntry, MealSlot, Targets } from "../types";

export type Role = "bprot" | "bcarb" | "fruit" | "prot" | "carb" | "veg" | "fat" | "snackp" | "snackx";

const POOLS: Record<Role, string[]> = {
  bprot: ["egg", "egg-scrambled", "greek-yoghurt-fat-free", "skyr", "cottage-cheese", "protein-yoghurt", "whey", "egg-white"],
  bcarb: ["oats", "weetbix", "bread-wholewheat", "bread-low-gi", "pronutro", "muesli-untoasted", "english-muffin", "bread-rye", "mabela"],
  fruit: ["banana", "apple", "berries", "orange", "naartjie", "pear", "mango", "strawberries", "papaya", "peach", "blueberries"],
  prot: ["chicken-breast", "chicken-thigh", "beef-mince-extra-lean", "steak", "sirloin", "hake", "kingklip", "salmon", "tuna-water", "pork-fillet", "turkey-breast", "ostrich", "tilapia", "prawns", "tofu", "chicken-drumstick", "venison", "lamb-leg", "soya-mince"],
  carb: ["rice-brown", "rice-basmati", "pasta-wholewheat", "pasta", "potato", "sweet-potato", "pap-stiff", "quinoa", "couscous", "samp-beans", "potato-baked", "tortilla-wholewheat", "noodles-egg"],
  veg: ["broccoli", "mixed-veg", "green-beans", "salad", "spinach", "butternut", "carrots", "cauliflower", "chakalaka", "morogo", "stir-fry-veg", "cabbage", "gem-squash", "zucchini", "brussels"],
  fat: ["avocado", "olive-oil", "peanut-butter", "almonds", "hummus", "feta"],
  snackp: ["greek-yoghurt-fat-free", "skyr", "biltong", "cottage-cheese", "protein-yoghurt", "whey", "egg", "protein-bar"],
  snackx: ["banana", "apple", "almonds", "rice-cake", "peanut-butter", "berries", "provitas", "naartjie", "mixed-nuts"],
};

/** grams allowed per item, by role (a food's own first serving narrows it further) */
const BOUNDS: Record<Role, [number, number]> = {
  bprot: [50, 300], bcarb: [30, 120], fruit: [0, 0], prot: [80, 300], carb: [60, 400], veg: [0, 0], fat: [5, 100], snackp: [30, 250], snackx: [0, 0],
};

export const MEAL_SHAPES: { slot: MealSlot; label: string; share: number; roles: Role[] }[] = [
  { slot: "breakfast", label: "Breakfast", share: 0.25, roles: ["bprot", "bcarb", "fruit"] },
  { slot: "lunch", label: "Lunch", share: 0.3, roles: ["prot", "carb", "veg", "fat"] },
  { slot: "dinner", label: "Dinner", share: 0.3, roles: ["prot", "carb", "veg", "fat"] },
  { slot: "snacks", label: "Snack", share: 0.15, roles: ["snackp", "snackx"] },
];

export interface DietPrefs { noPork: boolean; noRedMeat: boolean; vegetarian: boolean; noFish: boolean; noDairy: boolean }
export const NO_PREFS: DietPrefs = { noPork: false, noRedMeat: false, vegetarian: false, noFish: false, noDairy: false };

const PORK = new Set(["pork-fillet", "pork-chop", "bacon", "ham", "gammon"]);
const RED = new Set(["beef-mince-extra-lean", "steak", "sirloin", "ostrich", "venison", "lamb-leg"]);
const MEAT = new Set([...PORK, ...RED, "chicken-breast", "chicken-thigh", "turkey-breast", "chicken-drumstick", "biltong"]);
const FISH = new Set(["hake", "kingklip", "salmon", "tuna-water", "tilapia", "prawns"]);
const DAIRY = new Set(["greek-yoghurt-fat-free", "skyr", "cottage-cheese", "protein-yoghurt", "whey", "feta", "protein-bar"]);

/** foods that are too alike to have twice in a day */
const FAMILY: Record<string, string> = {
  "steak": "beef", "sirloin": "beef", "beef-mince-extra-lean": "beef",
  "chicken-breast": "chicken", "chicken-thigh": "chicken", "chicken-drumstick": "chicken",
  "hake": "whitefish", "kingklip": "whitefish", "tilapia": "whitefish",
  "rice-brown": "rice", "rice-basmati": "rice", "pasta": "pasta", "pasta-wholewheat": "pasta", "noodles-egg": "pasta",
  "potato": "potato", "potato-baked": "potato",
  "greek-yoghurt-fat-free": "yoghurt", "skyr": "yoghurt", "protein-yoghurt": "yoghurt",
  "egg": "egg", "egg-scrambled": "egg", "egg-white": "egg",
};
const familyOf = (id: string) => FAMILY[id] ?? id;

export function allowed(id: string, d: DietPrefs) {
  if (d.noPork && PORK.has(id)) return false;
  if (d.noRedMeat && RED.has(id)) return false;
  if (d.vegetarian && (MEAT.has(id) || FISH.has(id))) return false;
  if (d.noFish && FISH.has(id)) return false;
  if (d.noDairy && DAIRY.has(id)) return false;
  return !!FOOD_BY_ID.get(id);
}

export interface PlanItem { foodId: string; name: string; role: Role; grams: number; portion: string; kcal: number; p: number; c: number; f: number }
export interface PlanMeal { slot: MealSlot; label: string; items: PlanItem[]; kcal: number; p: number; c: number; f: number }
export interface MealPlan { seed: number; meals: PlanMeal[]; kcal: number; p: number; c: number; f: number }

/* ---------- small helpers ---------- */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const sum = (xs: { kcal: number; p: number; c: number; f: number }[]) =>
  xs.reduce((a, x) => ({ kcal: a.kcal + x.kcal, p: a.p + x.p, c: a.c + x.c, f: a.f + x.f }), { kcal: 0, p: 0, c: 0, f: 0 });

/** How often each food was logged in the last 60 days - your favourites get picked more. */
export function favourites(days: Record<string, DayLog>, today: string) {
  const since = new Date(new Date(today + "T12:00:00").getTime() - 60 * 864e5).toISOString().slice(0, 10);
  const n = new Map<string, number>();
  for (const [d, log] of Object.entries(days)) {
    if (d < since) continue;
    for (const f of log.foods || []) if (f.foodId) n.set(f.foodId, (n.get(f.foodId) || 0) + 1);
  }
  return n;
}

function pick(role: Role, rand: () => number, prefs: DietPrefs, fav: Map<string, number>, avoid: Set<string>) {
  const fams = new Set([...avoid].map(familyOf));
  const pool = POOLS[role].filter((id) => allowed(id, prefs) && !avoid.has(id) && !fams.has(familyOf(id)));
  const list = pool.length ? pool : POOLS[role].filter((id) => allowed(id, prefs));
  if (!list.length) return null;
  const w = list.map((id) => 1 + 3 * Math.min(fav.get(id) || 0, 6) / 6);
  let r = rand() * w.reduce((a, b) => a + b, 0);
  for (let i = 0; i < list.length; i++) { r -= w[i]; if (r <= 0) return list[i]; }
  return list[list.length - 1];
}

/** A food's "one of" serving (1 egg, 1 slice, 1 tub), if it has one. */
function unitServing(food: Food) {
  return food.servings.find((s) => /^1\s/.test(s.label) && !/\(|cup|bowl|serving|portion|plate/i.test(s.label));
}

function boundsFor(food: Food, role: Role): [number, number] {
  const s = food.servings[0]?.g ?? 100;
  if (role === "fruit" || role === "veg" || role === "snackx") {
    // one normal serving (nuts kept to a small handful)
    const g = food.f > 40 ? Math.min(s, 30) : role === "veg" ? Math.max(80, Math.min(s, 200)) : s;
    return [g, g];
  }
  const [lo, hi] = BOUNDS[role];
  if (food.f > 60) return [5, 30]; // oils
  if (food.f > 40) return [10, 45]; // nuts, nut butter
  if (role === "fat") return [20, 60]; // avocado, hummus, feta
  const unit = unitServing(food);
  const min = unit ? Math.max(unit.g, Math.min(lo, s * 0.5)) : Math.max(lo * 0.5, Math.min(lo, s * 0.5));
  return [min, Math.min(hi, Math.max(s * 3, lo * 2))];
}

/**
 * Choose grams for each item so the meal hits its protein/carb/fat targets as closely as possible
 * (least squares in kcal terms, solved one item at a time until it settles), within each item's bounds.
 */
function solve(foods: Food[], roles: Role[], target: { p: number; c: number; f: number }) {
  const a = foods.map((f) => [f.p * 4 / 100, f.c * 4 / 100, f.f * 9 / 100]);
  const T = [target.p * 4, target.c * 4, target.f * 9];
  const w = [1.3, 1, 1]; // protein matters most
  const bnd = foods.map((f, i) => boundsFor(f, roles[i]));
  const g = bnd.map(([lo, hi]) => (lo + hi) / 2);
  for (let it = 0; it < 80; it++) {
    for (let i = 0; i < g.length; i++) {
      let num = 0, den = 0;
      for (let k = 0; k < 3; k++) {
        let r = T[k];
        for (let j = 0; j < g.length; j++) if (j !== i) r -= a[j][k] * g[j];
        num += w[k] * a[i][k] * r;
        den += w[k] * a[i][k] * a[i][k];
      }
      const best = den > 0 ? num / den : bnd[i][0];
      g[i] = Math.min(bnd[i][1], Math.max(bnd[i][0], best));
    }
  }
  return g;
}

/** "2 slices", "3 tbsp", "2 large eggs", "2 × medium" */
function plural(n: number, what: string) {
  if (/^(tbsp|tsp|g|ml)$/.test(what)) return `${n} ${what}`;
  const words = what.split(" ");
  const last = words[words.length - 1];
  if (/^(medium|large|small)$/.test(last)) return `${n} × ${what}`;
  if (/^[a-z]+$/i.test(last) && !/s$/.test(last)) words[words.length - 1] = /(ch|sh|x)$/.test(last) ? last + "es" : last + "s";
  return `${n} ${words.join(" ")}`;
}

/** Round to something you can actually measure, and describe it the way the food list does. */
export function portionOf(food: Food, grams: number): { grams: number; portion: string } {
  const unit = food.liquid ? "ml" : "g";
  // whole units: eggs, slices, fruit, tubs, scoops...
  const one = unitServing(food);
  if (one) {
    const n = Math.max(1, Math.round(grams / one.g));
    if (Math.abs(n * one.g - grams) / grams < 0.25 && n <= 6) {
      const what = one.label.replace(/^1\s+/, "");
      return { grams: Math.round(n * one.g), portion: n === 1 ? one.label : plural(n, what) };
    }
  }
  // cups and bowls can be halves
  const cup = food.servings.find((s) => /^1 (cup|bowl)/.test(s.label));
  if (cup) {
    const n = Math.max(0.5, Math.round((grams / cup.g) * 2) / 2);
    if (Math.abs(n * cup.g - grams) / grams < 0.15 && n <= 4) {
      const what = cup.label.replace(/^1\s+/, "");
      const num = `${Math.floor(n) || ""}${n % 1 ? "½" : ""}`;
      return { grams: Math.round(n * cup.g), portion: `${num} ${what}${n > 1 ? "s" : ""}` };
    }
  }
  const step = grams < 40 ? 5 : 10;
  const g = Math.max(step, Math.round(grams / step) * step);
  return { grams: g, portion: `${g} ${unit}` };
}

function item(food: Food, role: Role, grams: number): PlanItem {
  const { grams: g, portion } = portionOf(food, grams);
  const k = g / 100;
  return { foodId: food.id, name: food.name, role, grams: g, portion, kcal: Math.round(food.kcal * k), p: +(food.p * k).toFixed(1), c: +(food.c * k).toFixed(1), f: +(food.f * k).toFixed(1) };
}

function buildMeal(shape: (typeof MEAL_SHAPES)[number], ids: string[], t: Targets): PlanMeal {
  const foods = ids.map((id) => FOOD_BY_ID.get(id)!);
  const g = solve(foods, shape.roles, { p: t.protein * shape.share, c: t.carbs * shape.share, f: t.fat * shape.share });
  const items = foods.map((f, i) => item(f, shape.roles[i], g[i]));
  return { slot: shape.slot, label: shape.label, items, ...sum(items) };
}

/**
 * Lean foods and portion limits usually leave the day a little under. Close the gap with the
 * starch (rice, oats, bread...) first, then the fats, up to 60% more of each, so totals land
 * within a few percent of the target.
 */
function topUp(meals: PlanMeal[], t: Targets): PlanMeal[] {
  const out = meals.map((m) => ({ ...m, items: [...m.items] }));
  const tot = () => sum(out.flatMap((m) => m.items));
  const grow = (roles: Role[], wantKcal: number) => {
    let left = wantKcal;
    const spots = out.flatMap((m, mi) => m.items.map((it, ii) => ({ mi, ii, it })).filter((x) => roles.includes(x.it.role)));
    spots.forEach((x, n) => {
      if (left <= 20) return;
      const food = FOOD_BY_ID.get(x.it.foodId)!;
      const per = food.kcal / 100;
      const cap = boundsFor(food, x.it.role)[1] * 1.3;
      const add = Math.min(left / (spots.length - n), x.it.grams * 0.6 * per, Math.max(0, cap - x.it.grams) * per);
      if (add <= 0) return;
      const next = item(food, x.it.role, x.it.grams + add / per);
      left -= next.kcal - x.it.kcal;
      out[x.mi].items[x.ii] = next;
    });
  };
  // fill what's missing in order: protein, then fat, then starch for whatever calories remain
  const pGap = (t.protein - tot().p) * 4;
  if (pGap > 40) grow(["prot", "bprot", "snackp"], pGap * 1.6);
  const fGap = (t.fat - tot().f) * 9;
  if (fGap > 40) grow(["fat"], Math.min(fGap, t.kcal - tot().kcal));
  const kGap = t.kcal - tot().kcal;
  if (kGap > t.kcal * 0.02) grow(["carb", "bcarb"], kGap);
  return out.map((m) => ({ ...m, ...sum(m.items) }));
}

function finish(seed: number, meals: PlanMeal[]): MealPlan {
  const tot = sum(meals);
  return { seed, meals, kcal: Math.round(tot.kcal), p: Math.round(tot.p), c: Math.round(tot.c), f: Math.round(tot.f) };
}

export function generatePlan(t: Targets, prefs: DietPrefs, fav: Map<string, number>, seed: number): MealPlan {
  const rand = rng(seed);
  const used = new Set<string>();
  const meals = MEAL_SHAPES.map((shape) => {
    const ids: string[] = [];
    for (const role of shape.roles) {
      const id = pick(role, rand, prefs, fav, new Set([...used, ...ids]));
      if (id) ids.push(id);
    }
    // keep the main protein and carb different between lunch and dinner
    ids.forEach((id) => { if (FOOD_BY_ID.get(id)!.p * 4 > FOOD_BY_ID.get(id)!.kcal * 0.4 || shape.slot !== "snacks") used.add(id); });
    const roles = shape.roles.filter((_, i) => ids[i]);
    return buildMeal({ ...shape, roles }, ids, t);
  });
  return finish(seed, topUp(meals, t));
}

/** Swap one food for another of the same kind, then re-size that meal. */
export function swapItem(plan: MealPlan, t: Targets, prefs: DietPrefs, fav: Map<string, number>, mealIdx: number, itemIdx: number): MealPlan {
  const meal = plan.meals[mealIdx];
  const shape = MEAL_SHAPES.find((s) => s.slot === meal.slot)!;
  const role = meal.items[itemIdx].role;
  const inPlan = new Set(plan.meals.flatMap((m) => m.items.map((i) => i.foodId)));
  const rand = rng(plan.seed * 31 + mealIdx * 7 + itemIdx + Date.now() % 997);
  const id = pick(role, rand, prefs, fav, inPlan) ?? meal.items[itemIdx].foodId;
  const ids = meal.items.map((i, k) => (k === itemIdx ? id : i.foodId));
  const roles = meal.items.map((i) => i.role);
  const meals = plan.meals.map((m, k) => (k === mealIdx ? buildMeal({ ...shape, roles }, ids, t) : m));
  return finish(plan.seed, meals);
}

/** Diary entries for one meal, ready for addFoods(). */
export function toEntries(meal: PlanMeal): Omit<FoodEntry, "id" | "meal">[] {
  return meal.items.map((i) => ({ name: i.name, kcal: i.kcal, p: i.p, c: i.c, f: i.f, portion: i.portion, foodId: i.foodId, grams: i.grams }));
}
