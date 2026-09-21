import { useMemo, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DemoBanner } from "../components/cards";
import { ExerciseProgress } from "../components/ExerciseProgress";
import { Select } from "../components/Select";
import { useTheme } from "../components/ui";
import { useStore } from "../lib/store";
import { exerciseHistory, norm, weekAgg, weeksRange } from "../lib/stats";
import { DOW, fmt, fmtKg, shortDate, todayStr, weekStart } from "../lib/util";

export function WeekStats() {
  const { days, plan, targets } = useStore();
  const ws = weekStart(todayStr());
  const cur = weekAgg(days, ws);
  const wDates = Object.keys(days).filter((d) => days[d].weight != null).sort();
  const wFirst = wDates[0], wLast = wDates[wDates.length - 1];
  const wv = wLast ? days[wLast].weight! : null;
  const wd = wFirst && wLast && wFirst !== wLast ? days[wLast].weight! - days[wFirst].weight! : null;
  const planned = DOW.filter((k) => plan[k].exercises.length).length;
  const near = cur.kcal != null && Math.abs(cur.kcal - targets.kcal) <= targets.kcal * 0.05;
  return (
    <div className="stats">
      <div className="card stat">
        <div className="eyebrow">Body weight</div>
        <div className="v">{wv != null ? <>{fmt(wv, 1)}<span> kg</span></> : "–"}</div>
        <div className="s">{wd != null ? <span className={`pill ${wd <= 0 ? "good" : "off"}`}>{wd > 0 ? "+" : "−"}{fmt(Math.abs(wd), 1)} kg since {shortDate(wFirst)}</span> : wv != null ? <span className="pill off">Starting weight · {shortDate(wFirst)}</span> : "Log a weigh-in to start"}</div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Sessions this week</div>
        <div className="v">{cur.sess}<span> / {planned}</span></div>
        <div className="s"><span className={`pill ${cur.sess >= planned ? "good" : "off"}`}>{cur.sess >= planned ? "Plan complete" : `${planned - cur.sess} to go`}</span></div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Avg steps / day</div>
        <div className="v">{cur.steps != null ? fmt(cur.steps) : "–"}</div>
        <div className="s">{cur.steps != null ? <span className={`pill ${cur.steps >= targets.steps ? "good" : "off"}`}>{cur.steps >= targets.steps ? "On target" : `${fmt(targets.steps - cur.steps)} below goal`}</span> : "No steps this week yet"}</div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Avg calories / day</div>
        <div className="v">{cur.kcal != null ? <>{fmt(cur.kcal)}<span> kcal</span></> : "–"}</div>
        <div className="s">{cur.kcal != null ? <span className={`pill ${near ? "good" : "off"}`}>{near ? "Within 5% of target" : `${cur.kcal > targets.kcal ? "+" : "−"}${fmt(Math.abs(cur.kcal - targets.kcal))} vs target`}</span> : "No food this week yet"}</div>
      </div>
    </div>
  );
}

export function Progress() {
  const { days, plan, targets } = useStore();
  const names = useMemo(() => {
    const m = new Map<string, string>();
    for (const k of DOW) for (const e of plan[k].exercises) m.set(norm(e.name), e.name);
    for (const d of Object.values(days)) for (const e of d.workout?.exercises || []) if (!m.has(norm(e.name))) m.set(norm(e.name), e.name);
    return [...m.values()];
  }, [plan, days]);
  const [ex, setEx] = useState<string>(() => names.find((n) => exerciseHistory(days, n).length) || names[0] || "");
  const hist = useMemo(() => (ex ? exerciseHistory(days, ex) : []), [days, ex]);
  const weeks = weeksRange(days, 12);
  const aggs = weeks.map((w) => weekAgg(days, w));
  const planned = DOW.filter((k) => plan[k].exercises.length).length;
  const labels = aggs.map((a) => ({ ...a, x: shortDate(a.week) }));

  return (
    <>
      <DemoBanner />
      <div className="page-head"><div><div className="eyebrow">Progress</div><h1>Week by week</h1></div></div>
      <WeekStats />

      <section className="card" style={{ marginTop: 16 }}>
        <div className="card-h">
          <div><h2>Strength</h2><div className="small muted">Weight, sets and reps for each exercise over time</div></div>
          <Select id="prog-ex" label="Exercise" width={260} value={ex} onChange={setEx} options={names.map((n) => ({ value: n, label: n, hint: exerciseHistory(days, n).length ? `${exerciseHistory(days, n).length} sessions logged` : "no logs yet" }))} />
        </div>
        {ex && <ExerciseProgress key={ex} name={ex} days={days} size="tall" idPrefix="pg" />}
        {hist.length > 0 && (
          <div className="table-wrap" style={{ marginTop: 14 }}>
            <table className="hist">
              <thead><tr><th>Date</th><th>Sets × reps</th><th>Every set</th><th>Volume</th><th>Est. 1RM</th></tr></thead>
              <tbody>
                {hist.slice(-8).reverse().map((r) => (
                  <tr key={r.date}><td>{shortDate(r.date)}</td><td>{r.scheme}{r.top ? " kg" : " reps"}</td><td className="muted">{r.detail}</td><td>{r.vol ? fmt(r.vol) + " kg" : "–"}</td><td>{r.one ? fmtKg(Math.round(r.one * 10) / 10) + " kg" : "–"}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <div className="grid-2" style={{ marginTop: 16 }}>
        <WeightTrend data={labels} />
        <WeeklyBars title="Steps" sub="Daily average per week" data={labels} k="steps" target={targets.steps} targetLabel={`Goal ${fmt(targets.steps)}`} fmtY={(v) => (v >= 1000 ? fmt(v / 1000, 0) + "k" : fmt(v))} tipText={(p) => p.steps != null ? <><b>{fmt(p.steps)} steps/day</b>Week of {p.x} · {p.nSteps} days logged</> : null} hitAbove />
        <WeeklyBars title="Calories" sub="Daily average per week" data={labels} k="kcal" target={targets.kcal} targetLabel={`Target ${fmt(targets.kcal)}`} fmtY={(v) => fmt(v)} tipText={(p) => p.kcal != null ? <><b>{fmt(p.kcal)} kcal/day</b>Protein {fmt(p.protein)} g · {p.nKcal} days logged</> : null} />
        <WeeklyBars title="Sessions" sub="Workouts completed per week" data={labels} k="sess" target={planned} targetLabel={`Plan ${planned}`} fmtY={(v) => fmt(v)} tipText={(p) => <><b>{p.sess} of {planned}</b>Week of {p.x}</>} hitAbove />
      </div>
    </>
  );
}

const niceUp = (v: number) => { if (v <= 0) return 1; const step = 10 ** Math.floor(Math.log10(v)) / 2; return Math.ceil(v / step) * step; };

type Row = ReturnType<typeof weekAgg> & { x: string };
export function WeeklyBars({ title, sub, data, k, target, targetLabel, fmtY, tipText, hitAbove, bare }: { bare?: boolean; title: string; sub: string; data: Row[]; k: "steps" | "kcal" | "sess"; target: number; targetLabel: string; fmtY: (v: number) => string; tipText: (p: Row) => React.ReactNode; hitAbove?: boolean }) {
  const t = useTheme();
  return (
    <Wrap bare={bare} title={title} sub={sub}>
      <div className="chart-wrap">
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 18, right: 12, left: -6, bottom: 0 }}>
            <CartesianGrid stroke={t.line} vertical={false} />
            <XAxis dataKey="x" tick={{ fill: t.muted, fontSize: 11 }} tickLine={false} axisLine={{ stroke: t.line }} minTickGap={16} />
            <YAxis tick={{ fill: t.muted, fontSize: 11 }} tickLine={false} axisLine={false} width={44} tickFormatter={fmtY} domain={[0, (max: number) => niceUp(Math.max(max, target) * 1.08)]} allowDecimals={false} />
            <ReferenceLine y={target} stroke={t.muted} strokeDasharray="5 4" label={{ value: targetLabel, position: "insideTopRight", fill: t.muted, fontSize: 11 }} />
            <Tooltip cursor={{ fill: t.accentSoft, opacity: 0.5 }} content={({ active, payload }) => (active && payload?.length ? <div className="rtip">{tipText(payload[0].payload as Row)}</div> : null)} />
            <Bar dataKey={k} radius={[4, 4, 0, 0]} maxBarSize={34} isAnimationActive={false}>
              {data.map((d) => <Cell key={d.week} fill={!hitAbove || (d[k] ?? 0) >= target ? t.accent : t.accentSoft} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Wrap>
  );
}

export function useWeekRows() {
  const days = useStore((s) => s.days);
  return useMemo(() => weeksRange(days, 12).map((w) => ({ ...weekAgg(days, w), x: shortDate(w) })), [days]);
}

export function WeightTrend({ data, bare }: { data: Row[]; bare?: boolean }) {
  const t = useTheme();
  const { targets } = useStore();
  const axis = { tick: { fill: t.muted, fontSize: 11 }, tickLine: false } as const;
  const chart = (
    <div className="chart-wrap">
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 16, right: 12, left: -6, bottom: 0 }}>
          <CartesianGrid stroke={t.line} vertical={false} />
          <XAxis dataKey="x" {...axis} axisLine={{ stroke: t.line }} minTickGap={16} />
          <YAxis {...axis} axisLine={false} width={44} domain={[(min: number) => Math.floor(Math.min(min, targets.goalWeight) - 1), (max: number) => Math.ceil(max + 1)]} />
          <ReferenceLine y={targets.goalWeight} stroke={t.muted} strokeDasharray="5 4" label={{ value: `Goal ${fmt(targets.goalWeight, 1)} kg`, position: "insideBottomRight", fill: t.muted, fontSize: 11 }} />
          <Tooltip cursor={{ stroke: t.faint }} content={({ active, payload }) => { if (!active || !payload?.length) return null; const p = payload[0].payload as Row; return <div className="rtip">{p.weight != null ? <><b>{fmt(p.weight, 1)} kg</b>Week of {p.x}</> : <>No weigh-in, week of {p.x}</>}</div>; }} />
          <Area type="monotone" dataKey="weight" connectNulls stroke={t.accent} strokeWidth={2.2} fill={t.accent} fillOpacity={0.1} dot={{ r: 4, fill: t.accent, stroke: t.surface, strokeWidth: 2 }} isAnimationActive={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
  if (bare) return chart;
  return (
    <section className="card">
      <h2>Body weight</h2><div className="small muted">Weekly average of your weigh-ins</div>
      {chart}
    </section>
  );
}

function Wrap({ bare, title, sub, children }: { bare?: boolean; title: string; sub: string; children: React.ReactNode }) {
  if (bare) return <>{children}</>;
  return <section className="card"><h2>{title}</h2><div className="small muted">{sub}</div>{children}</section>;
}
