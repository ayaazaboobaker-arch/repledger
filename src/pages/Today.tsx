import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CalorieSummary, DateBar, DemoBanner, StepsCard } from "../components/cards";
import { BurnCard, CardioPlanRows } from "../components/BurnCard";
import { defaultMeal, FoodPicker, MEAL_LABEL } from "../components/FoodPicker";
import { Icon, toast } from "../components/ui";
import { useStore } from "../lib/store";
import { foodTotals, planSession } from "../lib/stats";
import { DOW, DOW_LONG, dowKey, fmt, fmtKg, todayStr } from "../lib/util";

/**
 * Today is a quick glance and a place to act: today's workout, what you've eaten,
 * what you've burned and your steps. Every graph lives on Progress.
 */
export function Today() {
  const [date, setDate] = useState(todayStr());
  const { profile } = useStore();
  const [picker, setPicker] = useState(false);
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <>
      <DemoBanner />
      <DateBar date={date} setDate={setDate}>
        {date === todayStr() ? `${greet}${profile?.name && profile.name !== "Demo" ? ", " + profile.name : ""}` : undefined}
      </DateBar>

      <div className="today-stack">
        <SessionCard date={date} />
        <div className="glance-grid">
          <NutritionCard date={date} openFood={() => setPicker(true)} />
          <BurnCard date={date} compact />
          <StepsCard date={date} compact />
        </div>
      </div>

      <Link to="/progress" className="more-link card">
        <span>{Icon.progress}</span>
        <span><b>Graphs, macros and weigh-ins</b><small>Everything over time lives on Progress</small></span>
        <span className="at-chev">{Icon.right}</span>
      </Link>

      <FoodPicker open={picker} onClose={() => setPicker(false)} date={date} meal={defaultMeal()} />
    </>
  );
}

function NutritionCard({ date, openFood }: { date: string; openFood: () => void }) {
  const { savedMeals, addFoods } = useStore();
  return (
    <section className="card">
      <div className="card-h" style={{ marginBottom: 12 }}>
        <div><h2>Calories eaten</h2><div className="small muted">{date === todayStr() ? "Today" : "This day"}</div></div>
        <Link to="/food" className="btn ghost sm">Diary {Icon.right}</Link>
      </div>
      <CalorieSummary date={date} />
      {savedMeals.length > 0 && (
        <>
          <div className="eyebrow" style={{ margin: "16px 0 8px" }}>One-tap meals → {MEAL_LABEL[defaultMeal()]}</div>
          <div className="chips">
            {savedMeals.slice(0, 4).map((m) => (
              <button key={m.id} className="chip" onClick={() => { addFoods(date, defaultMeal(), m.items); toast(`Added ${m.name}`); }}>
                {m.name} <span className="faint">· {fmt(foodTotals(m.items as never).kcal)}</span>
              </button>
            ))}
          </div>
        </>
      )}
      <button className="btn primary block" style={{ marginTop: 14 }} onClick={openFood}>{Icon.plus} Log food</button>
    </section>
  );
}

/** A short look at today's session: what's on, how far you are, and one button to go. */
function SessionCard({ date }: { date: string }) {
  const { days, plan, active } = useStore();
  const nav = useNavigate();
  const logged = days[date]?.workout;
  const w = logged || planSession(plan, dowKey(date));
  const totalSets = w.exercises.reduce((a, e) => a + e.sets.length, 0);
  const doneSets = w.exercises.reduce((a, e) => a + e.sets.filter((s) => s.done).length, 0);
  const status = logged?.finishedAt ? "done" : doneSets > 0 ? "progress" : "todo";
  const isActive = active?.date === date;
  const start = () => { useStore.getState().startSession(date, w.planKey); nav("/train"); };
  const hasCardio = (plan[w.planKey]?.cardio?.length ?? 0) > 0;

  return (
    <section className="card hero sess-brief" aria-labelledby="sess-title">
      <div className="hero-top">
        <div className="spread" style={{ alignItems: "flex-start" }}>
          <div style={{ minWidth: 0 }}>
            <div className="eyebrow">{DOW_LONG[dowKey(date)]}'s workout</div>
            <div className="hero-title" id="sess-title">{w.exercises.length ? w.title : hasCardio ? plan[w.planKey].title : "Rest day"}</div>
            {w.exercises.length > 0 && plan[w.planKey]?.focus && <div className="muted" style={{ marginTop: 4 }}>{plan[w.planKey].focus}</div>}
          </div>
          {status === "done" ? <span className="pill good">{Icon.check} Done</span> : status === "progress" ? <span className="pill warn">In progress</span> : w.exercises.length ? <span className="pill off">Not started</span> : null}
        </div>
        {w.exercises.length > 0 && (
          <>
            <div className="hero-meta">
              <div><b>{w.exercises.length}</b>exercises</div>
              <div><b>{doneSets}/{totalSets}</b>sets</div>
              <div><b>~{Math.round(totalSets * 2.6 + 5)}</b>min</div>
            </div>
            <div className="sess-bar" aria-hidden="true"><i style={{ width: `${totalSets ? (doneSets / totalSets) * 100 : 0}%` }} /></div>
          </>
        )}
      </div>

      {w.exercises.length > 0 ? (
        <ul className="brief-list">
          {w.exercises.map((e, i) => {
            const done = e.sets.filter((s) => s.done).length;
            const all = done > 0 && done >= e.sets.length;
            return (
              <li key={e.name + i} className={all ? "done" : ""}>
                <span className="bl-n">{all ? Icon.check : i + 1}</span>
                <span className="bl-name">{e.name}</span>
                <span className="bl-spec">{done > 0 && !all ? `${done}/${e.sets.length} sets` : `${e.tSets ?? e.sets.length}×${e.tReps ?? "?"}${e.tKg ? ` · ${fmtKg(e.tKg)} kg` : ""}`}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <div style={{ padding: "4px 20px 16px" }}>
          {hasCardio ? (
            <CardioPlanRows date={date} planKey={w.planKey} compact />
          ) : <p className="muted small">Recovery day - get your steps in and hit your protein.</p>}
          <div className="chips" style={{ marginTop: 12 }}>
            <span className="small muted" style={{ alignSelf: "center" }}>Train anyway:</span>
            {DOW.filter((k) => plan[k].exercises.length).map((k) => (
              <button key={k} className="chip" onClick={() => { useStore.getState().startSession(date, k); nav("/train"); }}>{plan[k].title} <span className="faint">· {DOW_LONG[k].slice(0, 3)}</span></button>
            ))}
          </div>
        </div>
      )}

      {w.exercises.length > 0 && hasCardio && (
        <div style={{ padding: "0 20px 6px" }}>
          <div className="eyebrow" style={{ margin: "4px 0 8px" }}>Plus cardio</div>
          <CardioPlanRows date={date} planKey={w.planKey} compact />
        </div>
      )}
      {w.exercises.length > 0 && (
        <div className="hero-foot">
          <Link to="/plan" className="btn ghost sm">{Icon.plan} Edit plan</Link>
          {status === "done" ? (
            <button className="btn" onClick={start}>Review session</button>
          ) : (
            <button className="btn primary lg" onClick={start}>{Icon.play} {isActive || status === "progress" ? "Continue" : "Start workout"}</button>
          )}
        </div>
      )}
    </section>
  );
}
