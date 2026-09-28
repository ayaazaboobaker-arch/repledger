/**
 * Meal scanner: photo in, list of foods with portions out.
 *
 * Right now this returns SAMPLE results built from the food list, so the camera and review
 * screens can be tested end to end. To make it real, replace `analyse()` with a call to a
 * Supabase Edge Function (e.g. `meal-scan`) that:
 *   - checks the user's login and Pro status, and the scan limits in subscription.ts
 *   - sends the (already shrunk) JPEG to Claude with a prompt asking for JSON:
 *       [{ name, grams, kcal_per_100g, protein, carbs, fat, confidence }]
 *   - logs the tokens used to `ai_usage`
 * and keep the same return shape. Nothing else needs to change.
 */
import { FOOD_BY_ID, searchFoods } from "./foods";
import { FREE_LIMITS, PRO_LIMITS } from "./subscription";

export interface ScanItem {
  key: string;
  name: string;
  foodId?: string;
  grams: number;
  per100: { kcal: number; p: number; c: number; f: number };
  liquid?: boolean;
  /** 0-1, how sure the scanner is */
  confidence: number;
}
export interface ScanResult { items: ScanItem[]; sample: boolean; note?: string }

/** Shrink a photo before it's sent anywhere: long edge 1024 px, JPEG 80% (keeps AI cost and upload small). */
export async function shrinkPhoto(src: Blob, max = 1024): Promise<Blob> {
  const bmp = await createImageBitmap(src);
  const k = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const w = Math.round(bmp.width * k), h = Math.round(bmp.height * k);
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  c.getContext("2d")!.drawImage(bmp, 0, 0, w, h);
  bmp.close?.();
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("Couldn't read the photo"))), "image/jpeg", 0.8));
}

// Sample plates: [what to search for, grams, confidence]
const SAMPLES: [string, number, number][][] = [
  [["chicken breast grilled", 150, 0.92], ["rice cooked", 180, 0.88], ["broccoli", 80, 0.8]],
  [["egg fried", 100, 0.9], ["toast", 60, 0.85], ["avocado", 50, 0.7]],
  [["beef burger", 220, 0.86], ["chips", 150, 0.82]],
  [["salmon", 140, 0.84], ["sweet potato", 150, 0.78], ["salad", 70, 0.65]],
  [["pap", 250, 0.83], ["boerewors", 120, 0.87], ["chakalaka", 80, 0.62]],
];
let turn = 0;

async function analyse(photo: Blob): Promise<ScanResult> {
  await new Promise((r) => setTimeout(r, 1400 + Math.random() * 800));
  const plate = SAMPLES[(turn++ + (photo.size % SAMPLES.length)) % SAMPLES.length];
  const items: ScanItem[] = [];
  for (const [q, grams, confidence] of plate) {
    const f = searchFoods(q)[0];
    if (!f) continue;
    items.push({ key: f.id + items.length, name: f.name, foodId: f.id, grams, per100: { kcal: f.kcal, p: f.p, c: f.c, f: f.f }, liquid: f.liquid, confidence });
  }
  return { items, sample: true, note: "The AI isn't connected yet, so these foods are an example, not your real plate." };
}

export async function scanMeal(photo: Blob): Promise<ScanResult> {
  const small = await shrinkPhoto(photo).catch(() => photo);
  const r = await analyse(small);
  countScan();
  return r;
}

export const itemMacros = (it: ScanItem) => {
  const k = it.grams / 100;
  return { kcal: Math.round(it.per100.kcal * k), p: +(it.per100.p * k).toFixed(1), c: +(it.per100.c * k).toFixed(1), f: +(it.per100.f * k).toFixed(1) };
};
export const foodFor = (it: ScanItem) => (it.foodId ? FOOD_BY_ID.get(it.foodId) : undefined);

/* ---------- scans used (this device, until the server keeps count) ---------- */
const KEY = "rl-meal-scans";
const monthKey = () => new Date().toISOString().slice(0, 7);
const dayKey = () => new Date().toISOString().slice(0, 10);
type Count = { month: string; m: number; day: string; d: number };
const readCount = (): Count => {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) || "null") as Count | null;
    if (c) return { month: c.month, m: c.month === monthKey() ? c.m : 0, day: c.day, d: c.day === dayKey() ? c.d : 0 };
  } catch { /* ignore */ }
  return { month: monthKey(), m: 0, day: dayKey(), d: 0 };
};
function countScan() {
  const c = readCount();
  try { localStorage.setItem(KEY, JSON.stringify({ month: monthKey(), m: c.m + 1, day: dayKey(), d: c.d + 1 })); } catch { /* ignore */ }
}
export function scansLeft(pro: boolean) {
  const c = readCount();
  const l = pro ? PRO_LIMITS.scan : FREE_LIMITS.scan;
  const month = l.month - c.m;
  const day = l.day != null ? l.day - c.d : Infinity;
  return { used: c.m, limit: l.month, left: Math.max(0, Math.min(month, day)), today: day < month, dayCapped: day <= 0 && month > 0 };
}
