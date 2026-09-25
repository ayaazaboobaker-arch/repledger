import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardioPlanRows, openCardio } from "../components/BurnCard";
import { ExerciseProgress } from "../components/ExerciseProgress";
import { INTENSITY, SPORT_BY_ID } from "../lib/burn";
import { CountUp, Icon, Sparkline, toast } from "../components/ui";
import { KG_VALUES, REP_VALUES, SET_VALUES, WheelPicker } from "../components/WheelPicker";
import { useStore } from "../lib/store";
import { exerciseHistory, planSession, sessionDone, suggestion, weeklyExercise } from "../lib/stats";
import type { DowKey, SessionExercise } from "../lib/types";
import { addDays, DOW, DOW_LONG, dowKey, fmtKg, parseYmd, shortDate, todayStr, weekStart } from "../lib/util";

const mmss = (ms: number) => {
  const s = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(r).padStart(2, "0");
};

function useTick(on: boolean) {
  const [, set] = useState(0);
  useEffect(() => {
    if (!on) return;
    const t = window.setInterval(() => set((n) => n + 1), 500);
    return () => clearInterval(t);
  }, [on]);
}

export function Train() {
  const { active, days } = useStore();
  const [summaryDate, setSummaryDate] = useState<string | null>(null);
  if (summaryDate) return <Summary date={summaryDate} />;
  if (active && days[active.date]?.workout) return <Runner onFinish={(d) => setSummaryDate(d)} />;
  return <Chooser />;
}

/* ---------- pick a session ---------- */
function Chooser() {
  const { plan, days, startSession } = useStore();
  const nav = useNavigate();
  const today = todayStr();
  const ws = weekStart(today);
  const week = DOW.map((k, i) => {
    const date = addDays(ws, i);
    const pd = plan[k];
    const train = pd.exercises.length > 0;
    const cardio = pd.cardio || [];
    const cardioOnly = !train && cardio.length > 0;
    const w = days[date]?.workout;
    const cardioDone = cardio.length > 0 && openCardio(days, cardio, date).length === 0;
    const done = sessionDone(w) || (cardioOnly && cardioDone);
    const sets = pd.exercises.reduce((a, e) => a + (e.sets || 0), 0);
    const status: "done" | "today" | "missed" | "upcoming" | "rest" =
      done ? "done" : !train && !cardioOnly ? "rest" : date === today ? "today" : date < today ? "missed" : "upcoming";
    const cardioMins = cardio.reduce((a, c) => a + c.minutes, 0);
    return { k, i, date, pd, train, cardio, cardioOnly, done, sets, mins: Math.round(sets * 2.6 + 5) + (train ? 0 : cardioMins), cardioMins, status, loggedTitle: w?.title };
  });
  const [key, setKey] = useState<DowKey>(() => dowKey(today));
  const strip = useRef<HTMLDivElement>(null);
  // On phones the week scrolls sideways: start with today's tile in view.
  useEffect(() => {
    const el = strip.current, tile = el?.querySelector<HTMLElement>(".is-today");
    if (el && tile && el.scrollWidth > el.clientWidth) el.scrollLeft = tile.offsetLeft - (el.clientWidth - tile.offsetWidth) / 2;
  }, []);
  const sel = week.find((d) => d.k === key)!;
  const trainingDays = week.filter((d) => d.train || d.cardioOnly);
  const liftDays = week.filter((d) => d.train);
  const doneCount = week.filter((d) => d.done).length;
  const todayDone = days[today]?.workout?.finishedAt;
  const start = (k: DowKey) => { startSession(today, k); nav("/train"); };

  return (
    <div className="train-page">
      <div className="page-head">
        <div>
          <div className="eyebrow">Train · week of {shortDate(ws)}</div>
          <h1>Your training week</h1>
        </div>
        <Link to="/plan" className="btn ghost sm">{Icon.plan} Edit plan</Link>
      </div>

      <div className="week-progress">
        <div className="small"><b>{doneCount} of {trainingDays.length}</b> sessions done this week</div>
        <div className="wp-bar" aria-hidden="true">
          {trainingDays.map((d) => <i key={d.k} className={d.done ? "on" : d.status === "missed" ? "miss" : ""} />)}
        </div>
      </div>

      <div className="week-strip" ref={strip} role="radiogroup" aria-label="Day of the week">
        {week.map((d) => {
          const dt = parseYmd(d.date);
          return (
            <button
              key={d.k} role="radio" aria-checked={key === d.k}
              className={`day-tile ${d.train ? "train glow" : d.cardioOnly ? "train cardio glow" : "rest"} s-${d.status}${key === d.k ? " sel" : ""}${d.date === today ? " is-today" : ""}`}
              onClick={() => setKey(d.k)}
            >
              <div className="dt-top">
                <span className="dt-dow">{DOW_LONG[d.k].slice(0, 3)}</span>
                <span className="dt-num">{dt.getDate()}</span>
              </div>
              <div className="dt-title">{d.done && d.loggedTitle ? d.loggedTitle : d.train || d.cardioOnly ? d.pd.title : "Rest"}</div>
              <div className="dt-sub">{d.train ? `${d.pd.exercises.length} exercises${d.cardio.length ? " + cardio" : ` · ~${d.mins} min`}` : d.cardioOnly ? `Cardio · ${d.cardioMins} min` : "Recovery"}</div>
              <span className={`dt-badge b-${d.status}`}>
                {d.status === "done" ? <>{Icon.check} Done</> : d.status === "today" ? "Today" : d.status === "missed" ? "Missed" : d.status === "rest" ? (d.date === today ? "Today · rest" : "Rest") : "Upcoming"}
              </span>
            </button>
          );
        })}
      </div>

      {sel.train ? (
        <div className="train-detail">
          <section className="card">
            <div className="eyebrow">{DOW_LONG[sel.k]}{sel.date === today ? " · today" : ""}</div>
            <div className="td-title">{sel.pd.title}</div>
            {sel.pd.focus && <div className="muted">{sel.pd.focus}</div>}
            <ul className="td-list">
              {planSession(plan, sel.k).exercises.map((e, i) => {
                const hist = exerciseHistory(days, e.name, today);
                const wk = weeklyExercise(hist);
                const bw = !e.tKg;
                const last = hist[hist.length - 1];
                const sug = suggestion(days, e, today);
                return (
                  <li key={e.name + i}>
                    <span className="td-n">{i + 1}</span>
                    <div className="td-main">
                      <div className="td-name">{e.name}</div>
                      <div className="small muted">
                        {e.tSets} × {e.tReps}{e.tKg ? ` @ ${fmtKg(e.tKg)} kg` : " · bodyweight"}
                        {last ? ` · last ${last.scheme}${last.top ? " kg" : ""}, ${shortDate(last.date)}` : ""}
                      </div>
                      {last && sug.lp?.allHit && <span className="pill good" style={{ marginTop: 6 }}>{bw ? `Go for ${sug.reps} reps` : `Try ${fmtKg(sug.kg)} kg`}</span>}
                    </div>
                    <Sparkline values={wk.map((x) => (bw ? x.reps / x.sessions : x.top))} width={90} height={30} />
                  </li>
                );
              })}
            </ul>
            {sel.cardio.length > 0 && (
              <>
                <div className="eyebrow" style={{ margin: "14px 0 8px" }}>Plus cardio - after lifting</div>
                <CardioPlanRows date={sel.date <= today ? sel.date : today} planKey={sel.k} />
              </>
            )}
          </section>
          <aside className="card td-side">
            <div className="eyebrow">Ready to train?</div>
            <div className="td-stats">
              <div><b>{sel.pd.exercises.length}</b>exercises</div>
              <div><b>{sel.sets}</b>sets</div>
              <div><b>~{sel.mins}</b>minutes</div>
            </div>
            {todayDone && <p className="small muted" style={{ marginBottom: 10 }}>You've already finished today's {days[today].workout!.title}. Starting again lets you review or edit it.</p>}
            {sel.date !== today && !todayDone && <p className="small muted" style={{ marginBottom: 10 }}>This is {DOW_LONG[sel.k]}'s session - starting it now logs it for today.</p>}
            <button className="btn primary lg block" onClick={() => start(sel.k)}>{Icon.play} Start {sel.pd.title}</button>
            <p className="xs faint" style={{ marginTop: 10 }}>Log each set with the scroll wheels. Rest timer starts automatically.</p>
          </aside>
        </div>
      ) : sel.cardioOnly ? (
        <div className="train-detail">
          <section className="card">
            <div className="eyebrow">{DOW_LONG[sel.k]}{sel.date === today ? " · today" : ""}</div>
            <div className="td-title">{sel.pd.title}</div>
            <div className="muted">Cardio day - {sel.cardio.map((c) => `${c.minutes} min ${INTENSITY[c.intensity].label.toLowerCase()} ${SPORT_BY_ID.get(c.sport)?.label.toLowerCase() ?? "cardio"}`).join(", ")}</div>
            <div style={{ marginTop: 14 }}><CardioPlanRows date={sel.date <= today ? sel.date : today} planKey={sel.k} /></div>
            <ul className="notes small" style={{ marginTop: 14 }}>
              {sel.cardio.some((c) => c.intensity === "easy") && <li>Easy means you could hold a conversation the whole way - it builds your aerobic base without tiring you for lifting.</li>}
              {sel.cardio.some((c) => c.intensity === "hard") && <li>Hard sessions: warm up for 5–10 minutes first, and keep the next day easy.</li>}
              <li>Tap <b>Log it</b> when you're done - it's added to the calories you burned today.</li>
            </ul>
          </section>
          <aside className="card td-side">
            <div className="eyebrow">Want to lift as well?</div>
            <p className="small muted" style={{ margin: "6px 0 12px" }}>Pick a session to do today.</p>
            <div className="stack" style={{ gap: 8 }}>
              {liftDays.map((d) => (
                <button key={d.k} className="btn block glow-btn" style={{ justifyContent: "space-between" }} onClick={() => start(d.k)}>
                  <span>{d.pd.title}</span><span className="xs muted">{DOW_LONG[d.k].slice(0, 3)} · {d.pd.exercises.length} ex</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      ) : (
        <div className="train-detail">
          <section className="card rest-card">
            <div className="eyebrow">{DOW_LONG[sel.k]}{sel.date === today ? " · today" : ""}</div>
            <div className="td-title">Rest day</div>
            <p className="muted prose" style={{ marginTop: 6 }}>Muscle is built while you recover, not while you train. Keep today easy:</p>
            <ul className="notes">
              <li>Get your steps in - a relaxed walk helps recovery.</li>
              <li>Hit your protein target; it matters just as much on rest days.</li>
              <li>Aim for 7–9 hours of sleep.</li>
              <li>Light stretching or mobility work is a bonus, not a must.</li>
            </ul>
          </section>
          <aside className="card td-side">
            <div className="eyebrow">Want to train anyway?</div>
            <p className="small muted" style={{ margin: "6px 0 12px" }}>Pick a session to do today instead.</p>
            <div className="stack" style={{ gap: 8 }}>
              {liftDays.map((d) => (
                <button key={d.k} className="btn block glow-btn" style={{ justifyContent: "space-between" }} onClick={() => start(d.k)}>
                  <span>{d.pd.title}</span><span className="xs muted">{DOW_LONG[d.k].slice(0, 3)} · {d.pd.exercises.length} ex</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

/* ---------- the session runner ---------- */
function Runner({ onFinish }: { onFinish: (date: string) => void }) {
  const { active, days, editWorkout, setActive, finishSession } = useStore();
  const a = active!;
  const w = days[a.date].workout!;
  const ex = w.exercises[a.index] as SessionExercise | undefined;
  const resting = a.restEndsAt != null && a.restEndsAt > Date.now();
  useTick(true);

  const firstOpen = ex ? ex.sets.findIndex((s) => !s.done) : -1;
  const [setIdx, setSetIdx] = useState(firstOpen === -1 ? 0 : firstOpen);
  const sug = useMemo(() => (ex ? suggestion(days, ex, a.date) : null), [ex?.name, a.date]); // eslint-disable-line
  const initial = () => {
    if (!ex) return { kg: 0, reps: 8 };
    const s = ex.sets[setIdx];
    if (s?.done) return { kg: s.kg || 0, reps: s.reps || 0 };
    const prevDone = [...ex.sets.slice(0, setIdx)].reverse().find((x) => x.done);
    if (prevDone) return { kg: prevDone.kg || 0, reps: prevDone.reps || 0 };
    return { kg: sug?.kg ?? ex.tKg ?? 0, reps: sug?.reps ?? ex.tReps ?? 8 };
  };
  const [kg, setKg] = useState(initial().kg);
  const [reps, setReps] = useState(initial().reps);

  // when exercise or set changes, reload wheel values
  useEffect(() => {
    const i = initial();
    setKg(i.kg);
    setReps(i.reps);
    // eslint-disable-next-line
  }, [a.index, setIdx]);
  useEffect(() => {
    const f = ex ? ex.sets.findIndex((s) => !s.done) : -1;
    setSetIdx(f === -1 ? 0 : f);
    // eslint-disable-next-line
  }, [a.index]);

  // rest finished → buzz once
  useEffect(() => {
    if (!a.restEndsAt) return;
    const ms = a.restEndsAt - Date.now();
    if (ms <= 0) return;
    const t = window.setTimeout(() => { navigator.vibrate?.([120, 80, 120]); setActive({ restEndsAt: null }); }, ms);
    return () => clearTimeout(t);
  }, [a.restEndsAt, setActive]);

  const hist = useMemo(() => (ex ? weeklyExercise(exerciseHistory(days, ex.name, a.date)) : []), [ex?.name, days, a.date]); // eslint-disable-line
  const [showProg, setShowProg] = useState(false);

  if (!ex) return null;
  const allDone = ex.sets.every((s) => s.done);
  const doneCount = ex.sets.filter((s) => s.done).length;
  const isLastEx = a.index === w.exercises.length - 1;
  const bodyweight = (ex.tKg ?? 0) === 0 && (sug?.lp ? sug.lp.top === 0 : true);

  const logSet = () => {
    editWorkout(a.date, (wk) => {
      const e = wk.exercises[a.index];
      e.sets[setIdx] = { kg, reps, done: true };
    });
    const after = ex.sets.map((s, i) => (i === setIdx ? true : s.done));
    const next = after.findIndex((d) => !d);
    const finishedEx = next === -1;
    setActive({ restEndsAt: finishedEx && isLastEx ? null : Date.now() + a.restSeconds * 1000 });
    if (!finishedEx) setSetIdx(next);
    toast(`Set ${setIdx + 1} logged · ${bodyweight && kg === 0 ? "" : fmtKg(kg) + " kg × "}${reps}`);
  };

  const setCount = (n: number) =>
    editWorkout(a.date, (wk) => {
      const e = wk.exercises[a.index];
      const minN = Math.max(1, e.sets.filter((s) => s.done).length);
      const target = Math.max(minN, n);
      while (e.sets.length < target) e.sets.push({ kg: null, reps: null, done: false });
      while (e.sets.length > target) {
        const i = e.sets.map((s) => s.done).lastIndexOf(false);
        if (i === -1) break;
        e.sets.splice(i, 1);
      }
      e.tSets = target;
    });

  const go = (i: number) => setActive({ index: Math.max(0, Math.min(w.exercises.length - 1, i)) });
  const finish = () => {
    const d = a.date;
    finishSession();
    onFinish(d);
  };
  const restLeft = resting ? a.restEndsAt! - Date.now() : 0;

  return (
    <div className="runner">
      <div className="run-top">
        <div>
          <div className="eyebrow">{w.title} · exercise {a.index + 1} of {w.exercises.length}</div>
          <div className="run-clock" aria-label="Session time">{mmss(Date.now() - a.startedAt)}</div>
        </div>
        <button className="btn good" onClick={finish}>{Icon.check} Finish workout</button>
      </div>
      <div className="dots" role="tablist" aria-label="Exercises">
        {w.exercises.map((e, i) => (
          <button key={i} role="tab" aria-selected={i === a.index} aria-label={e.name} className={i === a.index ? "cur" : e.sets.every((s) => s.done) ? "done" : ""} onClick={() => go(i)} />
        ))}
      </div>

      <section className="card">
        <div className="spread" style={{ alignItems: "flex-start" }}>
          <div style={{ minWidth: 0 }}>
            <div className="run-ex">{ex.name}</div>
            <div className="run-sub">
              Target {ex.tSets ?? ex.sets.length} × {ex.tReps ?? "?"}{ex.tKg ? ` @ ${fmtKg(ex.tKg)} kg` : ""}
              {sug?.lp ? ` · last ${sug.lp.scheme}${sug.lp.top ? " kg" : ""} on ${shortDate(sug.lp.date)}` : ""}
            </div>
          </div>
          <button className="btn ghost sm" onClick={() => setShowProg(!showProg)} aria-expanded={showProg} style={{ flexDirection: "column", gap: 0 }}>
            <Sparkline values={hist.map((h) => (bodyweight ? h.reps / h.sessions : h.top))} width={90} height={30} />
            <span className="xs">{showProg ? "Hide" : "Progress"}</span>
          </button>
        </div>
        {sug && <div className="tip-line">{sug.note}</div>}
        {showProg && <div style={{ marginTop: 12 }}><ExerciseProgress name={ex.name} days={days} size="short" idPrefix="run" /></div>}

        <div className="logged" aria-label="Sets">
          {ex.sets.map((s, i) => (
            <button key={i} className={`lset${s.done ? " done" : ""}${i === setIdx ? " cur" : ""}`} onClick={() => setSetIdx(i)} aria-pressed={i === setIdx}>
              <small>Set {i + 1}</small>
              {s.done ? `${s.kg ? fmtKg(s.kg) + " × " : ""}${s.reps}` : "-"}
            </button>
          ))}
        </div>

        <div className="wheels">
          <WheelPicker id="w-sets" label="Sets" values={SET_VALUES} value={ex.sets.length} onChange={setCount} />
          <WheelPicker id="w-reps" label="Reps" values={REP_VALUES} value={reps} onChange={setReps} />
          <WheelPicker id="w-kg" label="Weight kg" values={KG_VALUES} value={kg} onChange={setKg} format={(v) => (v === 0 ? "BW" : fmtKg(v))} />
        </div>

        {resting && (
          <div className="rest-timer" role="timer" aria-live="off">
            <div><div className="xs" style={{ opacity: 0.7, fontWeight: 700, letterSpacing: ".1em" }}>REST</div><div className="t">{mmss(restLeft)}</div></div>
            <div className="bar"><i style={{ width: `${(restLeft / (a.restSeconds * 1000)) * 100}%` }} /></div>
            <button className="btn sm" onClick={() => setActive({ restEndsAt: a.restEndsAt! + 15000 })}>+15s</button>
            <button className="btn sm" onClick={() => setActive({ restEndsAt: null })}>Skip</button>
          </div>
        )}

        <div className="run-actions">
          {allDone ? (
            isLastEx ? (
              <button className="btn good lg" onClick={finish}>{Icon.check} Finish workout</button>
            ) : (
              <button className="btn primary lg" onClick={() => go(a.index + 1)}>Next: {w.exercises[a.index + 1].name} {Icon.right}</button>
            )
          ) : (
            <button className="btn primary lg" onClick={logSet}>
              {ex.sets[setIdx]?.done ? "Update" : "Log"} set {setIdx + 1} · {kg ? `${fmtKg(kg)} kg × ` : ""}{reps}
            </button>
          )}
        </div>
        {allDone && ex.sets[setIdx]?.done && (
          <button className="btn ghost sm" style={{ marginTop: 8 }} onClick={logSet}>Save changes to set {setIdx + 1}</button>
        )}

        <hr className="divider" />
        <div className="spread">
          <button className="btn sm" onClick={() => go(a.index - 1)} disabled={a.index === 0}>{Icon.left} Previous</button>
          <div className="row small muted" style={{ gap: 6 }}>
            Rest
            {[60, 90, 120, 180].map((s) => (
              <button key={s} className="chip" style={{ padding: "3px 9px" }} aria-pressed={a.restSeconds === s} onClick={() => setActive({ restSeconds: s })}>{s < 120 ? s + "s" : s / 60 + "m"}</button>
            ))}
          </div>
          <button className="btn sm" onClick={() => go(a.index + 1)} disabled={isLastEx}>{doneCount ? "Next" : "Skip"} {Icon.right}</button>
        </div>
      </section>
      <p className="xs faint" style={{ marginTop: 10, textAlign: "center" }}>Scroll each wheel or use the arrow keys. BW means bodyweight.</p>
    </div>
  );
}

/* ---------- after the session ---------- */
function Summary({ date }: { date: string }) {
  const { days } = useStore();
  const nav = useNavigate();
  const w = days[date]?.workout;
  if (!w) return null;
  const sets = w.exercises.flatMap((e) => e.sets.filter((s) => s.done));
  const vol = sets.reduce((a, s) => a + (s.kg || 0) * (s.reps || 0), 0);
  const mins = w.startedAt && w.finishedAt && w.startedAt > 1 ? Math.round((w.finishedAt - w.startedAt) / 60000) : null;
  const prs = w.exercises
    .map((e) => {
      const done = e.sets.filter((s) => s.done);
      if (!done.length) return null;
      const prev = exerciseHistory(days, e.name, date);
      if (!prev.length) return null;
      const top = Math.max(...done.map((s) => s.kg || 0));
      const best = Math.max(...prev.map((p) => p.top));
      const repsBest = Math.max(...prev.map((p) => p.bestReps));
      const topReps = Math.max(...done.map((s) => s.reps || 0));
      if (top > best) return { name: e.name, text: `New top set: ${fmtKg(top)} kg (was ${fmtKg(best)} kg)` };
      if (top === 0 && topReps > repsBest) return { name: e.name, text: `New rep best: ${topReps} reps (was ${repsBest})` };
      return null;
    })
    .filter(Boolean) as { name: string; text: string }[];
  return (
    <div className="runner">
      <div className="page-head"><div><div className="eyebrow">Session complete</div><h1>{w.title} done</h1></div></div>
      <section className="card summary-card">
        {prs.length > 0 && <Confetti />}
        <div className="summary-grid">
          <div className="xp-kpi"><div className="l">Sets</div><div className="v"><CountUp value={sets.length} /></div></div>
          <div className="xp-kpi"><div className="l">Volume</div><div className="v"><CountUp value={vol} ms={1100} /> kg</div></div>
          <div className="xp-kpi"><div className="l">Time</div><div className="v">{mins != null ? mins + " min" : "–"}</div></div>
        </div>
        <h3>Personal bests</h3>
        {prs.length ? prs.map((p) => (
          <div key={p.name} className="pr pr-new"><span className="pill good">{Icon.star} PR</span><div><b>{p.name}</b><div className="small muted">{p.text}</div></div></div>
        )) : <p className="small muted" style={{ marginTop: 6 }}>No new bests this time - consistency is what makes the next one happen.</p>}
        <button className="btn primary lg block" style={{ marginTop: 18 }} onClick={() => nav("/")}>Back to today</button>
      </section>
    </div>
  );
}

/** A short cyan-and-lime burst when a session brings new personal bests. Skipped for reduced motion. */
function Confetti() {
  const bits = useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    x: Math.round((Math.random() - 0.5) * 520), y: Math.round(-120 - Math.random() * 220), r: Math.round(Math.random() * 540 - 270),
    d: Math.round(Math.random() * 180), c: i % 3,
  })), []);
  useEffect(() => { try { navigator.vibrate?.([30, 40, 30]); } catch { /* no vibration here */ } }, []);
  return (
    <div className="confetti" aria-hidden="true">
      {bits.map((b, i) => <i key={i} className={`c${b.c}`} style={{ "--x": `${b.x}px`, "--y": `${b.y}px`, "--r": `${b.r}deg`, animationDelay: `${b.d}ms` } as React.CSSProperties} />)}
    </div>
  );
}
