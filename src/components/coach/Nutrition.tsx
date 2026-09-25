import { useMemo, useState } from "react";
import { useCurrentAccount } from "../../lib/accounts";
import { useCalibration } from "../../lib/calibration";
import { favourites, generatePlan, NO_PREFS, swapItem, toEntries, type DietPrefs, type MealPlan } from "../../lib/coach/meals";
import { checkIn } from "../../lib/coach/nutrition";
import { useStore } from "../../lib/store";
import { fmt, todayStr } from "../../lib/util";
import { Icon, toast } from "../ui";

const PREF_KEY = (id: string) => `rl-diet-prefs:${id}`;
const PLAN_KEY = (id: string) => `rl-meal-plan:${id}`;
const load = <T,>(k: string, fallback: T): T => { try { const v = localStorage.getItem(k); return v ? { ...fallback, ...JSON.parse(v) } : fallback; } catch { return fallback; } };
const save = (k: string, v: unknown) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked */ } };

export function NutritionCoach() {
  return (
    <div className="stack">
      <CheckInCard />
      <MealPlanCard />
    </div>
  );
}

function CheckInCard() {
  const { days, profile, targets, setTargets } = useStore();
  const cal = useCalibration();
  const c = useMemo(() => checkIn(days, profile, targets, cal), [days, profile, targets, cal]);
  const tone = c.status === "adjust" ? "t-down" : c.status === "on-track" ? "t-up" : c.status === "off-target" ? "t-down" : "t-new";
  return (
    <section className="card">
      <div className="eyebrow">Weekly check-in</div>
      <h2 className="coach-headline">{c.title}</h2>
      <div className="coach-kpis">
        <div><b>{fmt(c.current)}</b><small>kcal target now</small></div>
        <div><b>{c.avgIntake != null ? fmt(c.avgIntake) : "–"}</b><small>avg eaten, last 7 days ({c.loggedDays} logged)</small></div>
        <div><b className={c.trendKgWk == null ? "" : ""}>{c.trendKgWk != null ? `${c.trendKgWk > 0 ? "+" : c.trendKgWk < 0 ? "−" : ""}${fmt(Math.abs(c.trendKgWk), 2)}` : "–"}</b><small>kg a week now</small></div>
        <div><b>{c.aimKgWk ? `${c.aimKgWk > 0 ? "+" : "−"}${fmt(Math.abs(c.aimKgWk), 2)}` : "0"}</b><small>kg a week goal</small></div>
      </div>
      <ul className={`coach-lines check-${tone}`}>{c.lines.map((l) => <li key={l}>{l}</li>)}</ul>
      {c.status === "adjust" && (
        <div className="checkin-apply">
          <span className="rec-spec"><s>{fmt(c.current)} kcal</s> {Icon.right} <b>{fmt(c.suggested)} kcal</b> <span className="muted small">· P {c.next.protein} · C {c.next.carbs} · F {c.next.fat} g</span></span>
          <button className="btn sm primary" onClick={() => { setTargets(c.next); toast(`Daily target set to ${fmt(c.suggested)} kcal`); }}>Apply</button>
        </div>
      )}
    </section>
  );
}

const PREFS: { k: keyof DietPrefs; label: string }[] = [
  { k: "noPork", label: "No pork" }, { k: "noRedMeat", label: "No red meat" }, { k: "noFish", label: "No fish" },
  { k: "vegetarian", label: "Vegetarian" }, { k: "noDairy", label: "No dairy" },
];

function MealPlanCard() {
  const acc = useCurrentAccount();
  const id = acc?.id ?? "anon";
  const { days, targets, addFoods } = useStore();
  const [prefs, setPrefs] = useState<DietPrefs>(() => load(PREF_KEY(id), NO_PREFS));
  const fav = useMemo(() => favourites(days, todayStr()), [days]);
  const [plan, setPlanState] = useState<MealPlan | null>(() => {
    try { const v = localStorage.getItem(PLAN_KEY(id)); return v ? JSON.parse(v) : null; } catch { return null; }
  });
  const setPlan = (p: MealPlan) => { setPlanState(p); save(PLAN_KEY(id), p); };
  const fresh = (pr = prefs) => setPlan(generatePlan(targets, pr, fav, Math.floor(Math.random() * 1e9)));
  const stale = plan && Math.abs(plan.kcal - targets.kcal) > targets.kcal * 0.08;

  const togglePref = (k: keyof DietPrefs) => {
    const next = { ...prefs, [k]: !prefs[k] };
    setPrefs(next); save(PREF_KEY(id), next);
    if (plan) fresh(next);
  };
  const logMeal = (i: number) => {
    const m = plan!.meals[i];
    addFoods(todayStr(), m.slot, toEntries(m));
    toast(`${m.label} added to today's food diary`);
  };

  return (
    <section className="card">
      <div className="card-h">
        <div>
          <h2>Meal plan</h2>
          <p className="small muted" style={{ marginTop: 4 }}>A day of meals from everyday foods, sized to your {fmt(targets.kcal)} kcal and {targets.protein} g protein. Swap anything you don't fancy.</p>
        </div>
        <button className="btn sm primary" onClick={() => fresh()}>{Icon.coach} {plan ? "New plan" : "Make my plan"}</button>
      </div>
      <div className="chips" role="group" aria-label="Diet settings" style={{ marginBottom: 12 }}>
        {PREFS.map((p) => <button key={p.k} className="chip" aria-pressed={prefs[p.k]} onClick={() => togglePref(p.k)}>{p.label}</button>)}
      </div>
      {!plan ? (
        <div className="empty">Tap <b>Make my plan</b> for a full day that hits your targets. Foods you log often get picked more.</div>
      ) : (
        <>
          {stale && <div className="deload" style={{ marginTop: 0, marginBottom: 12 }}><span className="at-icon">{Icon.target}</span><div><b>Your targets changed</b><div className="small muted">This plan was made for {fmt(plan.kcal)} kcal. <button className="btn ghost sm" onClick={() => fresh()}>Make a new one</button></div></div></div>}
          <div className="plan-total">
            <span><b>{fmt(plan.kcal)}</b> kcal</span><span><b>{plan.p}</b> g protein</span><span><b>{plan.c}</b> g carbs</span><span><b>{plan.f}</b> g fat</span>
          </div>
          <div className="meals">
            {plan.meals.map((m, mi) => (
              <div className="meal-card" key={m.slot}>
                <div className="spread">
                  <h3>{m.label}</h3>
                  <span className="small muted num">{fmt(m.kcal)} kcal · P {fmt(m.p)} · C {fmt(m.c)} · F {fmt(m.f)}</span>
                </div>
                <ul className="meal-list">
                  {m.items.map((it, ii) => (
                    <li key={it.foodId + ii}>
                      <span className="mi-main"><b>{it.name}</b><small>{it.portion} · {fmt(it.kcal)} kcal · P {fmt(it.p)}</small></span>
                      <button className="icon-btn swap" aria-label={`Swap ${it.name}`} title="Swap" onClick={() => setPlan(swapItem(plan, targets, prefs, fav, mi, ii))}>{Icon.swap}</button>
                    </li>
                  ))}
                </ul>
                <button className="btn ghost sm" onClick={() => logMeal(mi)}>{Icon.plus} Log this meal today</button>
              </div>
            ))}
          </div>
          <p className="xs faint" style={{ marginTop: 10 }}>Portions are cooked weights unless it says dry. Values are typical - packaged foods vary.</p>
        </>
      )}
    </section>
  );
}
