import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Combo } from "../components/Select";
import { Icon } from "../components/ui";
import { useStore } from "../lib/store";
import type { DowKey, PlanExercise } from "../lib/types";
import { DOW, DOW_LONG, parseNum } from "../lib/util";

const LIBRARY = ["Back Squat", "Front Squat", "Goblet Squat", "Bulgarian Split Squat", "Leg Press", "Hack Squat", "Walking Lunge", "Reverse Lunge", "Step-up", "Romanian Deadlift", "Deadlift", "Sumo Deadlift", "Hip Thrust", "Glute Bridge", "Leg Curl", "Leg Extension", "Calf Raise", "Bench Press", "Incline Bench Press", "Dumbbell Bench Press", "Incline Dumbbell Press", "Chest Fly", "Cable Crossover", "Push-up", "Dips", "Overhead Press", "Seated Dumbbell Press", "Arnold Press", "Lateral Raise", "Rear Delt Fly", "Face Pull", "Shrug", "Pull-up", "Chin-up", "Lat Pulldown", "Barbell Row", "Dumbbell Row", "Cable Row", "T-Bar Row", "Inverted Row", "Bicep Curl", "Hammer Curl", "Preacher Curl", "Tricep Pushdown", "Skull Crusher", "Overhead Tricep Extension", "Close-grip Bench Press", "Hanging Leg Raise", "Cable Crunch", "Ab Wheel Rollout", "Russian Twist", "Kettlebell Swing", "Farmer's Carry", "Muscle-up", "Pistol Squat", "Pike Push-up"];

export function Plan() {
  const { plan, setPlan } = useStore();
  const mutate = (fn: (p: typeof plan) => void) => {
    const p = JSON.parse(JSON.stringify(plan));
    fn(p);
    setPlan(p);
  };
  const setEx = (k: DowKey, i: number, f: keyof PlanExercise, raw: string) =>
    mutate((p) => {
      const e = p[k].exercises[i];
      if (f === "name") e.name = raw;
      else {
        const v = parseNum(raw);
        (e[f] as number) = v == null ? 0 : f === "kg" ? v : Math.max(f === "sets" ? 1 : 0, Math.round(v));
      }
    });
  const add = (k: DowKey, name: string) =>
    mutate((p) => {
      if (!p[k].exercises.length && /^rest$/i.test(p[k].title)) p[k].title = "Session";
      p[k].exercises.push({ name, sets: 3, reps: 10, kg: 0 });
    });
  let train = 0, sets = 0;
  DOW.forEach((k) => { if (plan[k].exercises.length) train++; plan[k].exercises.forEach((e) => (sets += e.sets)); });

  return (
    <>
      <div className="page-head">
        <div><div className="eyebrow">Weekly plan</div><h1>Your training week</h1></div>
        <Link to="/profile" className="btn">{Icon.star} Get a recommended plan</Link>
      </div>
      <div className="row" style={{ gap: 26, marginBottom: 8 }}>
        <div className="small muted"><b className="big-num" style={{ fontSize: 30, color: "var(--ink)", display: "block" }}>{train}</b>training days</div>
        <div className="small muted"><b className="big-num" style={{ fontSize: 30, color: "var(--ink)", display: "block" }}>{7 - train}</b>rest days</div>
        <div className="small muted"><b className="big-num" style={{ fontSize: 30, color: "var(--ink)", display: "block" }}>{sets}</b>working sets a week</div>
      </div>
      <p className="small muted prose" style={{ marginBottom: 16 }}>Each day's list becomes that day's session. Weight is your working target in kg — use 0 for bodyweight moves. Changes apply to sessions you haven't started yet.</p>
      <div className="plan-grid">
        {DOW.map((k) => {
          const pd = plan[k];
          return (
            <section key={k} className={`card pday${pd.exercises.length ? "" : " rest"}`}>
              <div className="dow">{DOW_LONG[k]}</div>
              <input className="ptitle" id={`pt-${k}`} value={pd.title} onChange={(e) => mutate((p) => { p[k].title = e.target.value; })} aria-label={`${DOW_LONG[k]} session name`} />
              <input className="in small" id={`pf-${k}`} style={{ marginTop: 4, fontSize: 13 }} value={pd.focus || ""} placeholder="Focus, e.g. Chest and triceps" onChange={(e) => mutate((p) => { p[k].focus = e.target.value; })} aria-label={`${DOW_LONG[k]} focus`} />
              {pd.exercises.length ? (
                <>
                  <div className="prow h"><span>Exercise</span><span>Sets</span><span>Reps</span><span>kg</span><span /></div>
                  {pd.exercises.map((e, i) => (
                    <div className="prow" key={i}>
                      <Combo id={`p-${k}-${i}-n`} label="Exercise" value={e.name} onChange={(v) => setEx(k, i, "name", v)} suggestions={LIBRARY} />
                      <input key={`s-${e.sets}`} className="in num" id={`p-${k}-${i}-s`} inputMode="numeric" defaultValue={e.sets} onBlur={(ev) => setEx(k, i, "sets", ev.target.value)} aria-label="Sets" />
                      <input key={`r-${e.reps}`} className="in num" id={`p-${k}-${i}-r`} inputMode="numeric" defaultValue={e.reps} onBlur={(ev) => setEx(k, i, "reps", ev.target.value)} aria-label="Reps" />
                      <input key={`k-${e.kg}`} className="in num" id={`p-${k}-${i}-k`} inputMode="decimal" defaultValue={e.kg} onBlur={(ev) => setEx(k, i, "kg", ev.target.value)} aria-label="Target kg" />
                      <button className="icon-btn" onClick={() => mutate((p) => { p[k].exercises.splice(i, 1); })} aria-label={`Remove ${e.name}`}>{Icon.x}</button>
                    </div>
                  ))}
                </>
              ) : <p className="small muted" style={{ marginTop: 10 }}>Rest day — add an exercise to make it a training day.</p>}
              <AddExercise day={DOW_LONG[k]} id={`pa-${k}`} onAdd={(n) => add(k, n)} extra={pd.exercises.length > 0 && <button className="btn sm ghost" type="button" onClick={() => mutate((p) => { p[k] = { title: "Rest", exercises: [] }; })}>Make rest</button>} />
            </section>
          );
        })}
      </div>
    </>
  );
}

function AddExercise({ day, id, onAdd, extra }: { day: string; id: string; onAdd: (name: string) => void; extra: ReactNode }) {
  const [v, setV] = useState("");
  const submit = (name: string) => { if (name.trim()) { onAdd(name.trim()); setV(""); } };
  return (
    <form className="row" style={{ marginTop: 10, flexWrap: "nowrap" }} onSubmit={(e) => { e.preventDefault(); submit(v); }}>
      <Combo id={id} label={`Add exercise to ${day}`} placeholder="Add exercise" value={v} onChange={setV} suggestions={LIBRARY} style={{ flex: 1 }} />
      <button className="btn sm" type="submit">Add</button>
      {extra}
    </form>
  );
}
