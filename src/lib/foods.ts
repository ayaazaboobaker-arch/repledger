import { CAT_CODES, FOOD_DATA } from "./foodData";

/**
 * Built-in food list. Values are per 100 g (or 100 ml) and are typical
 * figures rounded for everyday tracking - packaged products vary, so the
 * label always wins. Servings give one-tap portion sizes in grams.
 */
export interface Food {
  id: string;
  name: string;
  cat: FoodCat;
  kcal: number;
  p: number;
  c: number;
  f: number;
  servings: { label: string; g: number }[];
  /** ml instead of g */
  liquid?: boolean;
  tags?: string;
}
export type FoodCat = (typeof CAT_CODES)[keyof typeof CAT_CODES] | "Packaged";
export const FOOD_CATS = Object.values(CAT_CODES) as FoodCat[];

function parse(): Food[] {
  const out: Food[] = [];
  const seen = new Set<string>();
  for (const raw of FOOD_DATA.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const [id, name, code, kcal, p, c, f, sv = "", tags = "", ...rest] = line.split("|");
    if (seen.has(id)) continue;
    seen.add(id);
    const liquid = tags === "L" || rest.includes("L");
    const servings = sv.split(";").map((x) => x.trim()).filter(Boolean).map((x) => {
      const i = x.lastIndexOf("=");
      return { label: x.slice(0, i).trim(), g: Number(x.slice(i + 1)) };
    }).filter((x) => x.label && x.g > 0);
    if (!servings.length) servings.push({ label: liquid ? "100 ml" : "100 g", g: 100 });
    out.push({
      id, name, cat: CAT_CODES[code as keyof typeof CAT_CODES] ?? "Home meals",
      kcal: +kcal, p: +p, c: +c, f: +f, servings, liquid: liquid || undefined, tags: tags === "L" ? undefined : tags || undefined,
    });
  }
  return out;
}

export const FOODS: Food[] = parse();

export const FOOD_BY_ID = new Map(FOODS.map((f) => [f.id, f]));

export function macrosFor(food: { kcal: number; p: number; c: number; f: number }, grams: number) {
  const k = grams / 100;
  return { kcal: Math.round(food.kcal * k), p: +(food.p * k).toFixed(1), c: +(food.c * k).toFixed(1), f: +(food.f * k).toFixed(1) };
}

const norm = (t: string) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const ORDER = new Map<string, number>();
const esc = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const singular = (w: string) => (w.length > 3 && /ies$/.test(w) ? w.slice(0, -3) + "y" : w.length > 3 && /[^s]s$/.test(w) ? w.slice(0, -1) : w);

export function searchFoods(q: string, list: Food[] = FOODS): Food[] {
  const t = norm(q.trim());
  if (!t) return list;
  if (!ORDER.size) FOODS.forEach((f, i) => ORDER.set(f.id, i));
  const words = t.split(/\s+/);
  const w0 = singular(words[0]);
  const whole = new RegExp(`\\b${esc(w0)}s?\\b`);
  const starts = new RegExp(`^${esc(w0)}s?\\b`);
  return list
    .map((f) => {
      const name = norm(f.name);
      const hay = name + " " + norm(f.tags || "") + " " + norm(f.cat);
      if (!words.every((w) => hay.includes(w) || hay.includes(singular(w)))) return null;
      const score = starts.test(name) ? 0 : whole.test(name) ? 1 : name.startsWith(w0) ? 2 : name.includes(w0) ? 3 : 4;
      return { f, score };
    })
    .filter((x): x is { f: Food; score: number } => !!x)
    .sort((a, b) => a.score - b.score || (ORDER.get(a.f.id) ?? 9999) - (ORDER.get(b.f.id) ?? 9999))
    .map((x) => x.f);
}

/* ---------- online search (Open Food Facts: millions of packaged products worldwide) ---------- */

interface OffProduct {
  code?: string;
  product_name?: string;
  brands?: string;
  serving_quantity?: number | string;
  serving_size?: string;
  nutriments?: Record<string, number | string | undefined>;
}

const num = (v: unknown) => (typeof v === "number" ? v : typeof v === "string" && v.trim() ? Number(v) : NaN);

function fromOff(p: OffProduct): Food | null {
  const n = p.nutriments || {};
  let kcal = num(n["energy-kcal_100g"]);
  if (!isFinite(kcal)) { const kj = num(n["energy-kj_100g"] ?? n["energy_100g"]); if (isFinite(kj)) kcal = kj / 4.184; }
  const pr = num(n["proteins_100g"]), c = num(n["carbohydrates_100g"]), f = num(n["fat_100g"]);
  const name = (p.product_name || "").trim();
  if (!name || !isFinite(kcal) || kcal <= 0) return null;
  const brand = (p.brands || "").split(",")[0].trim();
  const sq = num(p.serving_quantity);
  const servings = [{ label: "100 g", g: 100 }];
  if (isFinite(sq) && sq > 0 && sq !== 100) servings.unshift({ label: p.serving_size ? `1 serving (${p.serving_size})` : "1 serving", g: Math.round(sq) });
  return {
    id: "off-" + (p.code || name.toLowerCase().replace(/\W+/g, "-")),
    name: brand && !name.toLowerCase().includes(brand.toLowerCase()) ? `${name} (${brand})` : name,
    cat: "Packaged",
    kcal: Math.round(kcal), p: +(isFinite(pr) ? pr : 0).toFixed(1), c: +(isFinite(c) ? c : 0).toFixed(1), f: +(isFinite(f) ? f : 0).toFixed(1),
    servings,
  };
}

const FIELDS = "code,product_name,brands,serving_quantity,serving_size,nutriments";

/** Search packaged foods online. Throws a friendly message on failure. */
export async function searchOnline(q: string, signal?: AbortSignal): Promise<Food[]> {
  const query = encodeURIComponent(q.trim());
  const urls = [
    `https://search.openfoodfacts.org/search?q=${query}&page_size=30&fields=${FIELDS}`,
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1&page_size=30&fields=${FIELDS}`,
  ];
  let lastErr: unknown = null;
  for (const url of urls) {
    try {
      const res = await fetch(url, { signal, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      const products: OffProduct[] = data.hits ?? data.products ?? [];
      const seen = new Set<string>();
      return products.map(fromOff).filter((f): f is Food => !!f && !seen.has(f.id) && !!seen.add(f.id));
    } catch (e) {
      if ((e as Error).name === "AbortError") throw e;
      lastErr = e;
    }
  }
  throw new Error(lastErr && typeof navigator !== "undefined" && !navigator.onLine ? "You're offline - online search needs internet." : "Online search isn't responding right now. Try again in a moment.");
}
