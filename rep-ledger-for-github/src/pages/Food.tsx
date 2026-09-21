import { useMemo, useState } from "react";
import { CalorieSummary, DateBar, DemoBanner } from "../components/cards";
import { defaultMeal, FoodPicker, MEAL_LABEL } from "../components/FoodPicker";
import { NameInline } from "../components/safety";
import { Icon, toast } from "../components/ui";
import { useStore } from "../lib/store";
import { foodTotals, recentFoods } from "../lib/stats";
import type { FoodEntry, MealSlot } from "../lib/types";
import { fmt, todayStr } from "../lib/util";

const SLOTS: MealSlot[] = ["breakfast", "lunch", "dinner", "snacks"];
const SHORT: Record<MealSlot, string> = { breakfast: "Bkfst", lunch: "Lunch", dinner: "Dinner", snacks: "Snack" };

export function Food() {
  const [date, setDate] = useState(todayStr());
  const { days, savedMeals, addFoods, removeFood, saveMeal, deleteMeal } = useStore();
  const [picker, setPicker] = useState<MealSlot | null>(null);
  const [quickMeal, setQuickMeal] = useState<MealSlot>(defaultMeal());
  const foods = days[date]?.foods || [];
  const recent = useMemo(() => recentFoods(days, 8), [days]);

  const strip = (e: FoodEntry) => ({ name: e.name, portion: e.portion, kcal: e.kcal, p: e.p, c: e.c, f: e.f, foodId: e.foodId, grams: e.grams });

  return (
    <>
      <DemoBanner />
      <DateBar date={date} setDate={setDate} />
      <div className="dash">
        <div className="stack">
          {SLOTS.map((slot) => {
            const items = foods.filter((f) => f.meal === slot);
            const t = foodTotals(items);
            return (
              <section key={slot} className="card meal" aria-label={MEAL_LABEL[slot]}>
                <div className="meal-h">
                  <h3>{MEAL_LABEL[slot]}</h3>
                  <span className="small muted num">{items.length ? `${fmt(t.kcal)} kcal · P ${fmt(t.p)} · C ${fmt(t.c)} · F ${fmt(t.f)}` : "Nothing yet"}</span>
                </div>
                {items.length > 0 && (
                  <ul className="meal-items">
                    {items.map((f) => (
                      <li key={f.id}>
                        <div><div className="n">{f.name}</div><div className="m">{f.portion} · P {fmt(f.p)} · C {fmt(f.c)} · F {fmt(f.f)}</div></div>
                        <span className="k">{fmt(f.kcal)}</span>
                        <button className="icon-btn" onClick={() => removeFood(date, f.id)} aria-label={`Remove ${f.name}`}>{Icon.x}</button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="meal-foot">
                  <button className="btn sm primary" onClick={() => setPicker(slot)}>{Icon.plus} Add food</button>
                  {items.length > 1 && (
                    <NameInline label={<>{Icon.save} Save as meal</>} initial={`My ${MEAL_LABEL[slot].toLowerCase()}`} onSave={(name) => { saveMeal(name, items.map(strip)); toast(`Saved “${name}”`); }} />
                  )}
                </div>
              </section>
            );
          })}
        </div>

        <div className="stack">
          <section className="card">
            <div className="card-h" style={{ marginBottom: 12 }}><h2>Today's totals</h2></div>
            <CalorieSummary date={date} />
            <button className="btn primary block" style={{ marginTop: 16 }} onClick={() => setPicker(defaultMeal())}>{Icon.plus} Log food</button>
          </section>

          <section className="card">
            <div className="card-h" style={{ marginBottom: 10 }}>
              <h2>One tap</h2>
              <div className="seg" role="group" aria-label="Add to meal">
                {SLOTS.map((s) => <button key={s} aria-pressed={quickMeal === s} onClick={() => setQuickMeal(s)}>{SHORT[s]}</button>)}
              </div>
            </div>
            {savedMeals.length > 0 && (
              <>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Saved meals</div>
                <div className="quick">
                  {savedMeals.map((m) => (
                    <button key={m.id} onClick={() => { addFoods(date, quickMeal, m.items); toast(`Added ${m.name} to ${MEAL_LABEL[quickMeal].toLowerCase()}`); }}>
                      <div className="n">{m.name}</div>
                      <div className="m num">{fmt(foodTotals(m.items as FoodEntry[]).kcal)} kcal · {m.items.length} items</div>
                    </button>
                  ))}
                </div>
              </>
            )}
            {recent.length > 0 && (
              <>
                <div className="eyebrow" style={{ margin: "14px 0 8px" }}>Recent foods</div>
                <div className="quick">
                  {recent.map((r) => (
                    <button key={r.name + r.portion} onClick={() => { addFoods(date, quickMeal, [strip(r)]); toast(`Added ${r.name}`); }}>
                      <div className="n">{r.name}</div>
                      <div className="m num">{r.portion} · {fmt(r.kcal)} kcal</div>
                    </button>
                  ))}
                </div>
              </>
            )}
            {!savedMeals.length && !recent.length && <p className="small muted">Foods and meals you log will appear here for one-tap repeats.</p>}
          </section>

          {savedMeals.length > 0 && (
            <section className="card flat">
              <div className="eyebrow" style={{ marginBottom: 6 }}>Manage saved meals</div>
              <ul className="flist">
                {savedMeals.map((m) => (
                  <li key={m.id} className="spread" style={{ padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                    <span className="small"><b>{m.name}</b> <span className="muted">· {m.items.map((i) => i.name.split(",")[0]).join(", ")}</span></span>
                    <button className="icon-btn" onClick={() => deleteMeal(m.id)} aria-label={`Delete ${m.name}`}>{Icon.x}</button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
      <FoodPicker open={picker !== null} onClose={() => setPicker(null)} date={date} meal={picker || "breakfast"} />
    </>
  );
}
