import { useMemo, useState } from "react";
import { FOOD_BY_ID, FOODS, macrosFor, searchFoods, type Food, type FoodCat } from "../lib/foods";
import { useStore } from "../lib/store";
import { foodTotals, recentFoods } from "../lib/stats";
import type { CustomFood, FoodEntry, MealSlot } from "../lib/types";
import { fmt, KJ_PER_KCAL, parseNum } from "../lib/util";
import { Select } from "./Select";
import { Icon, Sheet, toast } from "./ui";

export const MEAL_LABEL: Record<MealSlot, string> = { breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner", snacks: "Snacks" };
export const defaultMeal = (): MealSlot => {
  const h = new Date().getHours();
  return h < 10 ? "breakfast" : h < 15 ? "lunch" : h < 20 ? "dinner" : "snacks";
};

type Tab = "foods" | "recent" | "meals" | "mine";
type Picked = { kind: "food"; food: Food; grams: number } | { kind: "custom"; food: CustomFood; qty: number };
const CATS: FoodCat[] = ["Protein", "SA favourites", "Carbs & grains", "Dairy & eggs", "Fruit & veg", "Fats & snacks", "Drinks", "Meals & takeaway"];

export function FoodPicker({ open, onClose, date, meal: initialMeal }: { open: boolean; onClose: () => void; date: string; meal: MealSlot }) {
  const { days, savedMeals, customFoods, addFoods, addCustomFood } = useStore();
  const [meal, setMeal] = useState<MealSlot>(initialMeal);
  const [tab, setTab] = useState<Tab>("foods");
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<FoodCat | null>(null);
  const [picked, setPicked] = useState<Picked | null>(null);
  const [creating, setCreating] = useState(false);
  const recent = useMemo(() => recentFoods(days, 14), [days]);

  // reset when reopened
  const [lastOpen, setLastOpen] = useState(open);
  if (open !== lastOpen) {
    setLastOpen(open);
    if (open) { setMeal(initialMeal); setPicked(null); setQ(""); setCreating(false); setTab("foods"); setCat(null); }
  }

  const list = useMemo(() => {
    const base = searchFoods(q, FOODS);
    return cat && !q ? base.filter((f) => f.cat === cat) : base;
  }, [q, cat]);

  const add = (items: Omit<FoodEntry, "id" | "meal">[], label: string) => {
    addFoods(date, meal, items);
    toast(`Added ${label} to ${MEAL_LABEL[meal].toLowerCase()}`);
    setPicked(null);
    onClose();
  };

  const preview = picked
    ? picked.kind === "food"
      ? macrosFor(picked.food, picked.grams)
      : { kcal: Math.round(picked.food.kcal * picked.qty), p: +(picked.food.p * picked.qty).toFixed(1), c: +(picked.food.c * picked.qty).toFixed(1), f: +(picked.food.f * picked.qty).toFixed(1) }
    : null;

  const confirm = () => {
    if (!picked || !preview) return;
    if (picked.kind === "food") {
      const unit = picked.food.liquid ? "ml" : "g";
      const sv = picked.food.servings.find((s) => s.g === picked.grams);
      add([{ name: picked.food.name, foodId: picked.food.id, grams: picked.grams, portion: sv ? sv.label : `${picked.grams} ${unit}`, ...preview }], picked.food.name);
    } else {
      add([{ name: picked.food.name, portion: `${picked.qty} × ${picked.food.servingLabel}`, ...preview }], picked.food.name);
    }
  };

  const header = (
    <div className="stack" style={{ gap: 12 }}>
      <div className="spread">
        <h2>{picked ? "How much?" : creating ? "Add your own food" : "Log food"}</h2>
        <button className="icon-btn" onClick={onClose} aria-label="Close">{Icon.x}</button>
      </div>
      <div className="seg" role="group" aria-label="Meal">
        {(Object.keys(MEAL_LABEL) as MealSlot[]).map((m) => (
          <button key={m} aria-pressed={meal === m} onClick={() => setMeal(m)}>{MEAL_LABEL[m]}</button>
        ))}
      </div>
      {!picked && !creating && (
        <>
          <input className="in" id="food-search" placeholder="Search foods - e.g. chicken, pap, oats" value={q} onChange={(e) => { setQ(e.target.value); setTab("foods"); }} autoFocus aria-label="Search foods" />
          <div className="seg" role="tablist" aria-label="Food lists">
            {([["foods", "All foods"], ["recent", "Recent"], ["meals", `Saved meals (${savedMeals.length})`], ["mine", "My foods"]] as [Tab, string][]).map(([k, l]) => (
              <button key={k} role="tab" aria-pressed={tab === k} aria-selected={tab === k} onClick={() => setTab(k)}>{l}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );

  let body: React.ReactNode;
  if (picked && preview) {
    body = <Portion picked={picked} setPicked={setPicked} preview={preview} />;
  } else if (creating) {
    body = <CustomForm onSave={(f) => { const cf = addCustomFood(f); setCreating(false); setPicked({ kind: "custom", food: cf, qty: 1 }); }} />;
  } else if (tab === "foods") {
    body = (
      <>
        {!q && (
          <div className="chips" style={{ marginBottom: 10 }}>
            <button className="chip" aria-pressed={cat === null} onClick={() => setCat(null)}>All</button>
            {CATS.map((c) => <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
          </div>
        )}
        {list.length ? (
          <ul className="flist">
            {list.map((f) => {
              const sv = f.servings[0];
              const m = macrosFor(f, sv.g);
              return (
                <li key={f.id}>
                  <button onClick={() => setPicked({ kind: "food", food: f, grams: sv.g })}>
                    <span><div className="n">{f.name}</div><div className="m">{sv.label} · P {fmt(m.p)} · C {fmt(m.c)} · F {fmt(m.f)}</div></span>
                    <span className="k">{fmt(m.kcal)} kcal</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="empty">No match for “{q}”. <button className="btn sm" style={{ marginLeft: 6 }} onClick={() => setCreating(true)}>Add it from the label</button></div>
        )}
      </>
    );
  } else if (tab === "recent") {
    body = recent.length ? (
      <ul className="flist">
        {recent.map((r) => (
          <li key={r.name + r.portion}>
            <button onClick={() => {
              const f = r.foodId ? FOOD_BY_ID.get(r.foodId) : null;
              if (f && r.grams) setPicked({ kind: "food", food: f, grams: r.grams });
              else add([{ name: r.name, portion: r.portion, kcal: r.kcal, p: r.p, c: r.c, f: r.f, foodId: r.foodId, grams: r.grams }], r.name);
            }}>
              <span><div className="n">{r.name}</div><div className="m">{r.portion} · logged {r.count}×</div></span>
              <span className="k">{fmt(r.kcal)} kcal</span>
            </button>
          </li>
        ))}
      </ul>
    ) : <div className="empty">Foods you log show up here for one-tap repeats.</div>;
  } else if (tab === "meals") {
    body = savedMeals.length ? (
      <ul className="flist">
        {savedMeals.map((m) => {
          const t = foodTotals(m.items as FoodEntry[]);
          return (
            <li key={m.id}>
              <button onClick={() => add(m.items, m.name)}>
                <span><div className="n">{m.name}</div><div className="m">{m.items.map((i) => i.name.split(",")[0]).join(" · ")}</div></span>
                <span className="k">{fmt(t.kcal)} kcal <span className="pill accent" style={{ marginLeft: 6 }}>Add all</span></span>
              </button>
            </li>
          );
        })}
      </ul>
    ) : <div className="empty">No saved meals yet. Log a meal, then tap “Save as meal” under it on the Food page.</div>;
  } else {
    body = (
      <>
        <button className="btn" onClick={() => setCreating(true)} style={{ marginBottom: 10 }}>{Icon.plus} New food from a label</button>
        {customFoods.length ? (
          <ul className="flist">
            {customFoods.map((f) => (
              <li key={f.id}>
                <button onClick={() => setPicked({ kind: "custom", food: f, qty: 1 })}>
                  <span><div className="n">{f.name}</div><div className="m">per {f.servingLabel} · P {fmt(f.p)} · C {fmt(f.c)} · F {fmt(f.f)}</div></span>
                  <span className="k">{fmt(f.kcal)} kcal</span>
                </button>
              </li>
            ))}
          </ul>
        ) : <p className="small muted">Add packaged foods by copying the numbers off the nutrition label - SA labels in kJ are converted for you.</p>}
      </>
    );
  }

  const footer = picked ? (
    <>
      <button className="btn" onClick={() => setPicked(null)}>Back</button>
      <button className="btn primary block" onClick={confirm}>Add to {MEAL_LABEL[meal].toLowerCase()} · {fmt(preview!.kcal)} kcal</button>
    </>
  ) : creating ? <button className="btn block" onClick={() => setCreating(false)}>Cancel</button> : undefined;

  return (
    <Sheet open={open} onClose={onClose} title={header} footer={footer} label="Log food">
      {body}
    </Sheet>
  );
}

function Portion({ picked, setPicked, preview }: { picked: Picked; setPicked: (p: Picked) => void; preview: { kcal: number; p: number; c: number; f: number } }) {
  if (picked.kind === "custom") {
    const f = picked.food;
    return (
      <div className="stack">
        <div><div className="n" style={{ fontWeight: 700, fontSize: 18 }}>{f.name}</div><div className="small muted">{fmt(f.kcal)} kcal per {f.servingLabel}</div></div>
        <div className="portion-v">{picked.qty} <span className="small muted">× {f.servingLabel}</span></div>
        <input type="range" min={0.5} max={6} step={0.5} value={picked.qty} onChange={(e) => setPicked({ ...picked, qty: +e.target.value })} aria-label="Servings" />
        <div className="chips">{[0.5, 1, 1.5, 2, 3].map((q) => <button key={q} className="chip" aria-pressed={picked.qty === q} onClick={() => setPicked({ ...picked, qty: q })}>{q}×</button>)}</div>
        <MacroStrip m={preview} />
      </div>
    );
  }
  const f = picked.food;
  const unit = f.liquid ? "ml" : "g";
  const maxG = Math.max(400, ...f.servings.map((s) => s.g * 3));
  const step = maxG > 800 ? 10 : 5;
  return (
    <div className="stack">
      <div><div style={{ fontWeight: 700, fontSize: 18 }}>{f.name}</div><div className="small muted">{fmt(f.kcal)} kcal per 100 {unit} · {f.cat}</div></div>
      <div className="chips">
        {f.servings.map((s) => <button key={s.label} className="chip" aria-pressed={picked.grams === s.g} onClick={() => setPicked({ ...picked, grams: s.g })}>{s.label} <span className="faint">· {s.g} {unit}</span></button>)}
      </div>
      <div className="spread">
        <div className="portion-v">{picked.grams}<span className="small muted"> {unit}</span></div>
        <div className="row">
          <button className="btn sm" onClick={() => setPicked({ ...picked, grams: Math.max(step, picked.grams - step) })} aria-label={`Less, ${step} ${unit}`}>−</button>
          <button className="btn sm" onClick={() => setPicked({ ...picked, grams: picked.grams + step })} aria-label={`More, ${step} ${unit}`}>+</button>
        </div>
      </div>
      <input type="range" min={step} max={maxG} step={step} value={picked.grams} onChange={(e) => setPicked({ ...picked, grams: +e.target.value })} aria-label={`Amount in ${unit}`} />
      <MacroStrip m={preview} />
      <p className="xs faint">Typical values - check the label for packaged products.</p>
    </div>
  );
}

export function MacroStrip({ m }: { m: { kcal: number; p: number; c: number; f: number } }) {
  return (
    <div className="macro-strip">
      <div><span>kcal</span><b>{fmt(m.kcal)}</b></div>
      <div><span><i className="dot" style={{ background: "var(--protein)" }} />Protein</span><b>{fmt(m.p)} g</b></div>
      <div><span><i className="dot" style={{ background: "var(--carbs)" }} />Carbs</span><b>{fmt(m.c)} g</b></div>
      <div><span><i className="dot" style={{ background: "var(--fat)" }} />Fat</span><b>{fmt(m.f)} g</b></div>
    </div>
  );
}

function CustomForm({ onSave }: { onSave: (f: Omit<CustomFood, "id">) => void }) {
  const [v, setV] = useState({ name: "", serving: "1 serving", energy: "", unit: "kJ", p: "", c: "", f: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setV({ ...v, [k]: e.target.value });
  const e = parseNum(v.energy);
  const kcal = e == null ? null : v.unit === "kJ" ? e / KJ_PER_KCAL : e;
  return (
    <form className="stack" onSubmit={(ev) => { ev.preventDefault(); if (!v.name.trim() || kcal == null) { toast("Add a name and the energy value"); return; } onSave({ name: v.name.trim(), servingLabel: v.serving.trim() || "1 serving", kcal: Math.round(kcal), p: parseNum(v.p) || 0, c: parseNum(v.c) || 0, f: parseNum(v.f) || 0 }); }}>
      <div className="grid-2">
        <label className="f">Name<input className="in" id="cf-name" value={v.name} onChange={set("name")} placeholder="e.g. Futurelife bar" /></label>
        <label className="f">Serving<input className="in" id="cf-serving" value={v.serving} onChange={set("serving")} placeholder="e.g. 1 bar (40 g)" /></label>
      </div>
      <label className="f">Energy per serving
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <input className="in num" id="cf-energy" inputMode="decimal" value={v.energy} onChange={set("energy")} placeholder="0" />
          <Select id="cf-unit" label="Energy unit" width={100} value={v.unit as "kJ" | "kcal"} onChange={(unit) => setV({ ...v, unit })} options={[{ value: "kJ", label: "kJ" }, { value: "kcal", label: "kcal" }]} />
        </div>
        {v.unit === "kJ" && kcal != null && <span className="xs faint">= {fmt(kcal)} kcal</span>}
      </label>
      <div className="fields">
        <label className="f">Protein (g)<input className="in num" id="cf-p" inputMode="decimal" value={v.p} onChange={set("p")} placeholder="0" /></label>
        <label className="f">Carbs (g)<input className="in num" id="cf-c" inputMode="decimal" value={v.c} onChange={set("c")} placeholder="0" /></label>
        <label className="f">Fat (g)<input className="in num" id="cf-f" inputMode="decimal" value={v.f} onChange={set("f")} placeholder="0" /></label>
      </div>
      <button className="btn primary" type="submit">Save food</button>
    </form>
  );
}
