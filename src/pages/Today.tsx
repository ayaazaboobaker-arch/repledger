import { useMemo, useRef, useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CalorieSummary, DateBar, DemoBanner, StepsCard, WeightCard } from "../components/cards";
import { ExerciseProgress } from "../components/ExerciseProgress";
import { Select } from "../components/Select";
import { defaultMeal, FoodPicker, MEAL_LABEL } from "../components/FoodPicker";
import { Icon, Sparkline, toast } from "../components/ui";
import { useStore } from "../lib/store";
import { exerciseHistory, foodTotals, norm, planSession, weeklyExercise } from "../lib/stats";
import type { LayoutItem, WidgetId } from "../lib/types";
import { DOW, DOW_LONG, dowKey, fmt, todayStr } from "../lib/util";
import { useWeekRows, WeeklyBars, WeekStats, WeightTrend } from "./Progress";

/* ---------- which cards exist ---------- */
const WIDGETS: Record<WidgetId, { title: string; size: "full" | "half" }> = {
  session: { title: "Today's session", size: "full" },
  nutrition: { title: "Nutrition", size: "half" },
  weight: { title: "Weigh-in", size: "half" },
  steps: { title: "Steps", size: "half" },
  kcalChart: { title: "Calories by week", size: "half" },
  week: { title: "This week", size: "full" },
  strength: { title: "Strength graph", size: "full" },
  weightChart: { title: "Body weight graph", size: "half" },
  stepsChart: { title: "Steps graph", size: "half" },
  sessionsChart: { title: "Sessions graph", size: "half" },
};
const ALL = Object.keys(WIDGETS) as WidgetId[];
export const DEFAULT_LAYOUT: LayoutItem[] = ["session", "nutrition", "weight", "steps", "kcalChart", "week", "strength", "weightChart", "stepsChart"].map((id) => ({ id: id as WidgetId, size: WIDGETS[id as WidgetId].size }));

const colsOf = (l: LayoutItem) => l.cols ?? (l.size === "full" ? 6 : 3);
const WIDTHS = [2, 3, 4, 6];
const widthLabel = (c: number) => ({ 2: "⅓", 3: "½", 4: "⅔", 6: "Full" } as Record<number, string>)[c] ?? `${c}/6`;
const GAP = 16;

export function Today() {
  const [date, setDate] = useState(todayStr());
  const { profile, layout: saved, setLayout } = useStore();
  const layout = (saved ?? DEFAULT_LAYOUT).filter((l) => WIDGETS[l.id]);
  const [arranging, setArranging] = useState(false);
  const [dragId, setDragId] = useState<WidgetId | null>(null);
  const dragRef = useRef<WidgetId | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState<{ id: WidgetId; cols: number; h: number | null } | null>(null);
  const [picker, setPicker] = useState(false);
  const hidden = ALL.filter((id) => !layout.some((l) => l.id === id));
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const commit = (l: LayoutItem[]) => setLayout(l);
  const patch = (id: WidgetId, p: Partial<LayoutItem>) => commit(layout.map((l) => (l.id === id ? { ...l, ...p, size: (p.cols ?? colsOf(l)) >= 6 ? "full" : "half" } : l)));
  const moveTo = (id: WidgetId, target: WidgetId, after: boolean) => {
    if (id === target) return;
    const rest = layout.filter((l) => l.id !== id);
    const item = layout.find((l) => l.id === id)!;
    let at = rest.findIndex((l) => l.id === target);
    if (after) at++;
    const next = [...rest.slice(0, at), item, ...rest.slice(at)];
    if (next.map((l) => l.id).join() !== layout.map((l) => l.id).join()) commit(next);
  };
  const nudge = (id: WidgetId, dir: -1 | 1) => {
    const i = layout.findIndex((l) => l.id === id), j = i + dir;
    if (j < 0 || j >= layout.length) return;
    const next = [...layout];
    [next[i], next[j]] = [next[j], next[i]];
    commit(next);
  };
  const cycleWidth = (l: LayoutItem) => {
    const c = colsOf(l);
    const i = WIDTHS.indexOf(c);
    patch(l.id, { cols: WIDTHS[(i + 1) % WIDTHS.length] });
  };
  const hide = (id: WidgetId) => commit(layout.filter((l) => l.id !== id));
  const show = (id: WidgetId) => commit([...layout, { id, size: WIDGETS[id].size }]);
  const afterPos = (l: LayoutItem, e: React.DragEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    return colsOf(l) < 6 ? e.clientX > r.left + r.width / 2 : e.clientY > r.top + r.height / 2;
  };

  /** Drag the corner handle: sideways snaps the width to the grid, up/down sets the height. */
  const startResize = (l: LayoutItem, e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const card = e.currentTarget.closest(".widget") as HTMLElement;
    const grid = gridRef.current;
    if (!card || !grid) return;
    const handle = e.currentTarget;
    handle.setPointerCapture(e.pointerId);
    const r0 = card.getBoundingClientRect();
    const gridW = grid.getBoundingClientRect().width;
    const colW = (gridW - GAP * 5) / 6;
    const x0 = e.clientX, y0 = e.clientY;
    const oneCol = window.matchMedia("(max-width: 860px)").matches;
    const body = card.querySelector(".wbody") as HTMLElement;
    const hStart = body.getBoundingClientRect().height;
    let cur = { id: l.id, cols: colsOf(l), h: l.h ?? null };
    const move = (ev: PointerEvent) => {
      const w = r0.width + (ev.clientX - x0);
      const cols = oneCol ? colsOf(l) : Math.max(2, Math.min(6, Math.round((w + GAP) / (colW + GAP))));
      const dy = ev.clientY - y0;
      const h = Math.abs(dy) < 4 && l.h == null ? null : Math.max(160, Math.round(hStart + dy));
      cur = { id: l.id, cols, h };
      setLive(cur);
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      setLive(null);
      patch(l.id, { cols: cur.cols, h: cur.h });
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
  };

  return (
    <>
      <DemoBanner />
      <DateBar date={date} setDate={setDate}>
        {date === todayStr() ? `${greet}${profile?.name && profile.name !== "Demo" ? ", " + profile.name : ""}` : undefined}
      </DateBar>
      <div className="arrange-bar">
        {arranging ? (
          <>
            <span className="small"><b>Arrange your page.</b> Drag a card to move it. Drag the corner handle <span className="rz-hint" aria-hidden="true" /> to resize - sideways for width, up or down for height. <span className="muted">Double-click the handle to fit the height to the content.</span></span>
            <div className="row">
              <button className="btn sm ghost" onClick={() => { commit(DEFAULT_LAYOUT); toast("Layout reset"); }}>Reset layout</button>
              <button className="btn sm primary" onClick={() => setArranging(false)}>{Icon.check} Done</button>
            </div>
            {hidden.length > 0 && (
              <div className="chips" style={{ width: "100%" }}>
                <span className="small muted" style={{ alignSelf: "center" }}>Add a card:</span>
                {hidden.map((id) => <button key={id} className="chip" onClick={() => show(id)}>{Icon.plus} {WIDGETS[id].title}</button>)}
              </div>
            )}
          </>
        ) : (
          <button className="btn sm ghost" onClick={() => setArranging(true)} style={{ marginLeft: "auto" }}>{Icon.grid} Arrange and resize cards</button>
        )}
      </div>

      <div className={`wgrid${arranging ? " arranging" : ""}`} ref={gridRef}>
        {layout.map((l, i) => {
          const L = live && live.id === l.id ? { ...l, cols: live.cols, h: live.h } : l;
          const cols = colsOf(L);
          const h = L.h ?? null;
          return (
            <div
              key={l.id}
              className={`widget${cols >= 6 ? " full" : ""}${h ? " sized" : ""}${dragId === l.id ? " dragging" : ""}${live?.id === l.id ? " resizing" : ""}`}
              style={{ "--span": cols } as React.CSSProperties}
              draggable={arranging && !live}
              onDragStart={(e) => { dragRef.current = l.id; setDragId(l.id); e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", l.id); }}
              onDragEnd={() => { dragRef.current = null; setDragId(null); }}
              onDragOver={(e) => {
                const d = dragRef.current;
                if (!d) return;
                e.preventDefault();
                if (d !== l.id) moveTo(d, l.id, afterPos(l, e));
              }}
              onDrop={(e) => {
                e.preventDefault();
                const d = dragRef.current;
                if (d && d !== l.id) moveTo(d, l.id, afterPos(l, e));
                dragRef.current = null;
                setDragId(null);
              }}
            >
              {arranging && (
                <div className="wbar">
                  <span className="grip" aria-hidden="true">{Icon.grip}</span>
                  <b>{WIDGETS[l.id].title}</b>
                  <span className="wbar-actions">
                    <button className="icon-btn plain" onClick={() => nudge(l.id, -1)} disabled={i === 0} aria-label={`Move ${WIDGETS[l.id].title} earlier`}>{Icon.up}</button>
                    <button className="icon-btn plain" onClick={() => nudge(l.id, 1)} disabled={i === layout.length - 1} aria-label={`Move ${WIDGETS[l.id].title} later`}>{Icon.down}</button>
                    <button className="btn sm" onClick={() => cycleWidth(l)} title="Change width" aria-label={`Width of ${WIDGETS[l.id].title}: ${widthLabel(cols)}. Change width`}>{widthLabel(cols)}</button>
                    {h != null && <button className="btn sm" onClick={() => patch(l.id, { h: null })} title="Fit height to content">Fit</button>}
                    <button className="icon-btn" onClick={() => hide(l.id)} aria-label={`Hide ${WIDGETS[l.id].title}`}>{Icon.x}</button>
                  </span>
                </div>
              )}
              <div className="wbody" style={h ? { height: h } : undefined}>
                <Widget id={l.id} date={date} openFood={() => setPicker(true)} />
              </div>
              {arranging && (
                <button
                  className="rz"
                  aria-label={`Resize ${WIDGETS[l.id].title}. Use arrow keys: left and right for width, up and down for height.`}
                  title="Drag to resize · double-click to fit height"
                  onMouseDown={(e) => e.preventDefault()}
                  onPointerDown={(e) => startResize(l, e)}
                  onDoubleClick={() => patch(l.id, { h: null })}
                  onKeyDown={(e) => {
                    const c = colsOf(l);
                    const cur = (e.currentTarget.closest(".widget")?.querySelector(".wbody") as HTMLElement)?.getBoundingClientRect().height ?? 300;
                    if (e.key === "ArrowRight") { e.preventDefault(); patch(l.id, { cols: Math.min(6, c + 1) }); }
                    else if (e.key === "ArrowLeft") { e.preventDefault(); patch(l.id, { cols: Math.max(2, c - 1) }); }
                    else if (e.key === "ArrowDown") { e.preventDefault(); patch(l.id, { h: Math.round((l.h ?? cur) + 40) }); }
                    else if (e.key === "ArrowUp") { e.preventDefault(); patch(l.id, { h: Math.max(160, Math.round((l.h ?? cur) - 40)) }); }
                  }}
                />
              )}
              {live?.id === l.id && <div className="rz-tip">{widthLabel(cols)} width · {h ? `${h}px tall` : "fit height"}</div>}
            </div>
          );
        })}
        {!layout.length && <div className="empty widget full">Your page is empty. Tap <b>Add a card</b> above to bring cards back.</div>}
      </div>

      <FoodPicker open={picker} onClose={() => setPicker(false)} date={date} meal={defaultMeal()} />
    </>
  );
}

function Widget({ id, date, openFood }: { id: WidgetId; date: string; openFood: () => void }) {
  switch (id) {
    case "session": return <SessionCard date={date} />;
    case "nutrition": return <NutritionCard date={date} openFood={openFood} />;
    case "steps": return <StepsCard date={date} />;
    case "weight": return <WeightCard date={date} />;
    case "week": return <section className="card"><div className="spread" style={{ marginBottom: 12 }}><h2>This week</h2><Link to="/progress" className="btn ghost sm">All progress {Icon.right}</Link></div><WeekStats /></section>;
    case "strength": return <StrengthCard date={date} />;
    case "weightChart": return <ChartCard title="Body weight" sub="Weekly average of your weigh-ins"><WeightChart /></ChartCard>;
    case "stepsChart": return <WeekBars k="steps" />;
    case "kcalChart": return <WeekBars k="kcal" />;
    case "sessionsChart": return <WeekBars k="sess" />;
  }
}

function ChartCard({ title, sub, children }: { title: string; sub: string; children: ReactNode }) {
  return <section className="card"><h2>{title}</h2><div className="small muted">{sub}</div>{children}</section>;
}
function WeightChart() {
  const rows = useWeekRows();
  if (rows.filter((r) => r.weight != null).length < 2) return <div className="empty" style={{ marginTop: 10 }}>Log a weigh-in each week and your trend appears here.</div>;
  return <WeightTrend data={rows} bare />;
}
function WeekBars({ k }: { k: "steps" | "kcal" | "sess" }) {
  const rows = useWeekRows();
  const { targets, plan } = useStore();
  const planned = DOW.filter((d) => plan[d].exercises.length).length;
  if (!rows.some((r) => (k === "sess" ? r.sess > 0 : r[k] != null))) {
    const t = { steps: ["Steps", "Log steps or track a walk to fill this in."], kcal: ["Calories", "Log your food and your weekly average shows here."], sess: ["Sessions", "Finish a session and it's counted here."] }[k];
    return <ChartCard title={t[0]} sub="Per week"><div className="empty" style={{ marginTop: 10 }}>{t[1]}</div></ChartCard>;
  }
  if (k === "steps") return <WeeklyBars title="Steps" sub="Daily average per week" data={rows} k="steps" target={targets.steps} targetLabel={`Goal ${fmt(targets.steps)}`} fmtY={(v) => (v >= 1000 ? fmt(v / 1000, 0) + "k" : fmt(v))} tipText={(p) => (p.steps != null ? <><b>{fmt(p.steps)} steps/day</b>Week of {p.x}</> : null)} hitAbove />;
  if (k === "kcal") return <WeeklyBars title="Calories" sub="Daily average per week" data={rows} k="kcal" target={targets.kcal} targetLabel={`Target ${fmt(targets.kcal)}`} fmtY={(v) => fmt(v)} tipText={(p) => (p.kcal != null ? <><b>{fmt(p.kcal)} kcal/day</b>Protein {fmt(p.protein)} g</> : null)} />;
  return <WeeklyBars title="Sessions" sub="Workouts completed per week" data={rows} k="sess" target={planned} targetLabel={`Plan ${planned}`} fmtY={(v) => fmt(v)} tipText={(p) => <><b>{p.sess} of {planned}</b>Week of {p.x}</>} hitAbove />;
}

function StrengthCard({ date }: { date: string }) {
  const { days, plan } = useStore();
  const names = useMemo(() => {
    const today = (days[date]?.workout || planSession(plan, dowKey(date))).exercises.map((e) => e.name);
    const m = new Map<string, string>();
    for (const n of today) m.set(norm(n), n);
    for (const k of DOW) for (const e of plan[k].exercises) if (!m.has(norm(e.name))) m.set(norm(e.name), e.name);
    return [...m.values()].filter((n) => exerciseHistory(days, n).length);
  }, [days, plan, date]);
  const [ex, setEx] = useState<string | null>(null);
  const cur = ex && names.includes(ex) ? ex : names[0];
  return (
    <section className="card">
      <div className="card-h" style={{ marginBottom: 4 }}>
        <div><h2>Strength</h2><div className="small muted">Weight, sets and reps week by week</div></div>
        {names.length > 0 && (
          <Select id="today-strength-ex" label="Exercise" width={240} value={cur} onChange={setEx} options={names.map((n) => ({ value: n, label: n }))} />
        )}
      </div>
      {cur ? <ExerciseProgress key={cur} name={cur} days={days} idPrefix="tw" /> : <div className="empty">Finish a session and your strength progress shows up here.</div>}
    </section>
  );
}

function NutritionCard({ date, openFood }: { date: string; openFood: () => void }) {
  const { savedMeals, addFoods } = useStore();
  return (
    <section className="card">
      <div className="card-h" style={{ marginBottom: 12 }}>
        <h2>Nutrition</h2>
        <Link to="/food" className="btn ghost sm">Food diary {Icon.right}</Link>
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

function SessionCard({ date }: { date: string }) {
  const { days, plan, active } = useStore();
  const nav = useNavigate();
  const [open, setOpen] = useState<number | null>(0);
  const logged = days[date]?.workout;
  const w = logged || planSession(plan, dowKey(date));
  const totalSets = w.exercises.reduce((a, e) => a + e.sets.length, 0);
  const doneSets = w.exercises.reduce((a, e) => a + e.sets.filter((s) => s.done).length, 0);
  const volume = w.exercises.reduce((a, e) => a + e.sets.filter((s) => s.done).reduce((b, s) => b + (s.kg || 0) * (s.reps || 0), 0), 0);
  const status = logged?.finishedAt ? "done" : doneSets > 0 ? "progress" : "todo";
  const isActive = active?.date === date;

  const rows = useMemo(
    () =>
      w.exercises.map((e) => {
        const wk = weeklyExercise(exerciseHistory(days, e.name));
        const bw = wk.length > 0 && wk.every((x) => x.top === 0);
        const series = wk.map((x) => (bw ? x.reps / x.sessions : x.top));
        const delta = wk.length > 1 ? series[series.length - 1] - series[0] : 0;
        return { e, series, delta, bw, weeks: wk.length };
      }),
    [w, days],
  );
  const start = () => { useStore.getState().startSession(date, w.planKey); nav("/train"); };

  return (
    <section className="card hero" aria-labelledby="sess-title">
      <div className="hero-top">
        <div className="spread" style={{ alignItems: "flex-start" }}>
          <div>
            <div className="eyebrow">{DOW_LONG[dowKey(date)]}'s session</div>
            <div className="hero-title" id="sess-title">{w.title}</div>
            {plan[w.planKey]?.focus && <div className="muted" style={{ marginTop: 4 }}>{plan[w.planKey].focus}</div>}
          </div>
          {status === "done" ? <span className="pill good">{Icon.check} Done</span> : status === "progress" ? <span className="pill warn">In progress</span> : w.exercises.length ? <span className="pill off">Not started</span> : null}
        </div>
        {w.exercises.length > 0 && (
          <div className="hero-meta">
            <div><b>{w.exercises.length}</b>exercises</div>
            <div><b>{doneSets}/{totalSets}</b>sets done</div>
            <div><b>{fmt(volume)}</b>kg lifted</div>
            <div><b>~{Math.round(totalSets * 2.6 + 5)}</b>minutes</div>
          </div>
        )}
      </div>

      {w.exercises.length ? (
        <ul className="exlist">
          {rows.map(({ e, series, delta, bw, weeks }, i) => (
            <li key={e.name + i} className="exrow" data-open={open === i}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <div>
                  <div className="nm">{e.name}</div>
                  <div className="sub">
                    {e.sets.some((s) => s.done)
                      ? `${e.sets.filter((s) => s.done).length}/${e.sets.length} sets done`
                      : `${e.tSets ?? e.sets.length} × ${e.tReps ?? "?"}${e.tKg ? ` @ ${e.tKg} kg` : " bodyweight"}`}
                  </div>
                </div>
                <Sparkline values={series} />
                <div className={`delta ${delta > 0 ? "up" : "flat"}`}>
                  {weeks > 1 ? (delta > 0 ? `+${bw ? fmt(delta) + " reps" : fmt(delta, delta % 1 ? 1 : 0) + " kg"}` : "holding") : "new"}
                  <div className="xs faint" style={{ fontWeight: 500 }}>{weeks > 1 ? `${weeks} weeks` : ""}</div>
                </div>
                <span className="chev">{Icon.right}</span>
              </button>
              {open === i && <div className="detail"><ExerciseProgress name={e.name} days={days} size="short" idPrefix={`t${i}`} /></div>}
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ padding: "8px 20px 20px" }}>
          <p className="muted prose">Rest day - recovery is where the strength gets built. Want to train anyway? Pick a session:</p>
          <div className="chips" style={{ marginTop: 12 }}>
            {DOW.filter((k) => plan[k].exercises.length).map((k) => (
              <button key={k} className="chip" onClick={() => { useStore.getState().startSession(date, k); nav("/train"); }}>{plan[k].title} <span className="faint">· {DOW_LONG[k].slice(0, 3)}</span></button>
            ))}
          </div>
        </div>
      )}

      {w.exercises.length > 0 && (
        <div className="hero-foot">
          <Link to="/plan" className="btn ghost sm">{Icon.plan} Edit plan</Link>
          {status === "done" ? (
            <button className="btn" onClick={start}>Review / edit session</button>
          ) : (
            <button className="btn primary lg" onClick={start}>{Icon.play} {isActive || status === "progress" ? "Continue session" : "Start session"}</button>
          )}
        </div>
      )}
    </section>
  );
}
