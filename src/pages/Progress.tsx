import { useMemo, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DemoBanner } from "../components/cards";
import { DatePicker } from "../components/DatePicker";
import { useCalibration } from "../lib/calibration";
import { ExerciseProgress } from "../components/ExerciseProgress";
import { Select } from "../components/Select";
import { CountUp, useTheme } from "../components/ui";
import { useStore } from "../lib/store";
import { daysIn, periodAgg, periods, presetRange, PRESETS, rangeDays, rangeLabel, rangeSummary, type DateRange, type PeriodRow, type RangePreset } from "../lib/range";
import { exerciseHistory, norm, weekAgg, weeksRange } from "../lib/stats";
import type { DayLog } from "../lib/types";
import { addDays, DOW, fmt, fmtKg, shortDate, todayStr, weekStart } from "../lib/util";

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
        <div className="v">{wv != null ? <><CountUp value={wv} digits={1} /><span> kg</span></> : "–"}</div>
        <div className="s">{wd != null ? <span className={`pill ${wd <= 0 ? "good" : "off"}`}>{wd > 0 ? "+" : "−"}{fmt(Math.abs(wd), 1)} kg since {shortDate(wFirst)}</span> : wv != null ? <span className="pill off">Starting weight · {shortDate(wFirst)}</span> : "Log a weigh-in to start"}</div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Sessions this week</div>
        <div className="v">{cur.sess}<span> / {planned}</span></div>
        <div className="s"><span className={`pill ${cur.sess >= planned ? "good" : "off"}`}>{cur.sess >= planned ? "Plan complete" : `${planned - cur.sess} to go`}</span></div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Avg steps / day</div>
        <div className="v">{cur.steps != null ? <CountUp value={cur.steps} /> : "–"}</div>
        <div className="s">{cur.steps != null ? <span className={`pill ${cur.steps >= targets.steps ? "good" : "off"}`}>{cur.steps >= targets.steps ? "On target" : `${fmt(targets.steps - cur.steps)} below goal`}</span> : "No steps this week yet"}</div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Avg calories / day</div>
        <div className="v">{cur.kcal != null ? <><CountUp value={cur.kcal} /><span> kcal</span></> : "–"}</div>
        <div className="s">{cur.kcal != null ? <span className={`pill ${near ? "good" : "off"}`}>{near ? "Within 5% of target" : `${cur.kcal > targets.kcal ? "+" : "−"}${fmt(Math.abs(cur.kcal - targets.kcal))} vs target`}</span> : "No food this week yet"}</div>
      </div>
    </div>
  );
}

export function Progress() {
  const { days, plan, targets, profile } = useStore();
  const [preset, setPreset] = useState<RangePreset>(() => { try { return (sessionStorage.getItem("rl.range") as RangePreset) || "3m"; } catch { return "3m"; } });
  const [custom, setCustom] = useState<DateRange>(() => ({ from: addDays(todayStr(), -55), to: todayStr() }));
  const range = useMemo(() => presetRange(preset, days, custom), [preset, days, custom]);
  const inRange = useMemo(() => daysIn(days, range), [days, range]);
  const pick = (p: RangePreset) => { setPreset(p); try { sessionStorage.setItem("rl.range", p); } catch { /* ignore */ } };

  const names = useMemo(() => {
    const m = new Map<string, string>();
    for (const k of DOW) for (const e of plan[k].exercises) m.set(norm(e.name), e.name);
    for (const d of Object.values(days)) for (const e of d.workout?.exercises || []) if (!m.has(norm(e.name))) m.set(norm(e.name), e.name);
    return [...m.values()];
  }, [plan, days]);
  const [ex, setEx] = useState<string>(() => names.find((n) => exerciseHistory(days, n).length) || names[0] || "");
  const hist = useMemo(() => (ex ? exerciseHistory(inRange, ex) : []), [inRange, ex]);
  const factor = useCalibration().factor;
  const rows = useMemo(() => periods(range).map((p) => periodAgg(days, p, profile, factor)), [days, range, profile, factor]);
  const monthly = rows.length > 0 && !rows[0].period.startsWith("Week");
  const per = monthly ? "month" : "week";
  const planned = DOW.filter((k) => plan[k].exercises.length).length;

  return (
    <>
      <DemoBanner />
      <div className="page-head"><div><div className="eyebrow">Progress</div><h1>Your progress</h1></div></div>

      <section className="card range-card">
        <div className="range-top">
          <div className="chips range-chips" role="radiogroup" aria-label="Date range">
            {PRESETS.map((p) => <button key={p.id} role="radio" aria-checked={preset === p.id} className="chip" aria-pressed={preset === p.id} onClick={() => pick(p.id)}>{p.label}</button>)}
          </div>
          <div className="range-label"><b>{rangeLabel(range)}</b><span className="muted"> · {rangeDays(range)} days</span></div>
        </div>
        {preset === "custom" && (
          <div className="range-custom">
            <div className="f"><span id="range-from-l">From</span><DatePicker id="range-from" label="From" value={custom.from} max={custom.to} range={custom} onChange={(from) => setCustom({ ...custom, from })} /></div>
            <div className="f"><span id="range-to-l">To</span><DatePicker id="range-to" label="To" value={custom.to} min={custom.from} max={todayStr()} range={custom} onChange={(to) => setCustom({ ...custom, to })} /></div>
          </div>
        )}
      </section>

      <RangeStats days={days} range={range} />

      <section className="card" style={{ marginTop: 16 }}>
        <div className="card-h">
          <div><h2>Strength</h2><div className="small muted">Weight, sets and reps for each exercise in this period</div></div>
          <Select id="prog-ex" label="Exercise" width={260} value={ex} onChange={setEx} options={names.map((n) => { const c = exerciseHistory(inRange, n).length; return { value: n, label: n, hint: c ? `${c} session${c > 1 ? "s" : ""} in this period` : "none in this period" }; })} />
        </div>
        {ex && <ExerciseProgress key={ex + range.from + range.to} name={ex} days={inRange} size="tall" idPrefix="pg" />}
        {hist.length > 0 && (
          <div className="table-wrap" style={{ marginTop: 14 }}>
            <table className="hist">
              <thead><tr><th>Date</th><th>Sets × reps</th><th>Every set</th><th>Volume</th><th>Est. 1RM</th></tr></thead>
              <tbody>
                {hist.slice(-12).reverse().map((r) => (
                  <tr key={r.date}><td>{shortDate(r.date)}</td><td>{r.scheme}{r.top ? " kg" : " reps"}</td><td className="muted">{r.detail}</td><td>{r.vol ? fmt(r.vol) + " kg" : "–"}</td><td>{r.one ? fmtKg(Math.round(r.one * 10) / 10) + " kg" : "–"}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <div className="grid-2" style={{ marginTop: 16 }}>
        <WeightTrend data={rows} sub={`Average of your weigh-ins per ${per}`} />
        <WeeklyBars title="Calories burned" sub={`Daily average per ${per} · resting + steps + training + cardio`} data={rows} k="burn" target={targets.kcal} targetLabel={`Eating target ${fmt(targets.kcal)}`} fmtY={(v) => fmt(v)} tipText={(p) => (p.burn != null ? <><b>{fmt(p.burn)} kcal/day burned</b>{p.period}{p.kcal != null ? ` · ate ${fmt(p.kcal)}/day` : ""}{p.nActs ? ` · ${p.nActs} cardio/sport` : ""}</> : null)} hitAbove />
        <WeeklyBars title="Calories eaten" sub={`Daily average per ${per}`} data={rows} k="kcal" target={targets.kcal} targetLabel={`Target ${fmt(targets.kcal)}`} fmtY={(v) => fmt(v)} tipText={(p) => (p.kcal != null ? <><b>{fmt(p.kcal)} kcal/day</b>{p.period} · protein {fmt(p.protein)} g · {p.nKcal} days logged</> : null)} />
        <WeeklyBars title="Steps" sub={`Daily average per ${per}`} data={rows} k="steps" target={targets.steps} targetLabel={`Goal ${fmt(targets.steps)}`} fmtY={(v) => (v >= 1000 ? fmt(v / 1000, 0) + "k" : fmt(v))} tipText={(p) => (p.steps != null ? <><b>{fmt(p.steps)} steps/day</b>{p.period} · {p.nSteps} days logged</> : null)} hitAbove />
        <WeeklyBars title="Weight sessions" sub={`Workouts completed per ${per}`} data={rows} k="sess" target={monthly ? Math.round(planned * 4.3) : planned} targetLabel={`Plan ${monthly ? Math.round(planned * 4.3) : planned}`} fmtY={(v) => fmt(v)} tipText={(p) => <><b>{p.sess} session{p.sess === 1 ? "" : "s"}</b>{p.period}</>} hitAbove />
        <WeeklyBars title="Cardio" sub={`Minutes of cardio and sport per ${per}`} data={rows} k="cardioMin" target={0} targetLabel="" fmtY={(v) => fmt(v)} tipText={(p) => <><b>{fmt(p.cardioMin)} min</b>{p.period} · {p.nActs} session{p.nActs === 1 ? "" : "s"} · {fmt(p.cardioKcal)} kcal</>} />
      </div>
    </>
  );
}

function RangeStats({ days, range }: { days: Record<string, DayLog>; range: DateRange }) {
  const { targets, profile } = useStore();
  const factor = useCalibration().factor;
  const s = useMemo(() => rangeSummary(days, range, profile, factor), [days, range, profile, factor]);
  const wd = s.wFirst && s.wLast && s.wFirst.date !== s.wLast.date ? s.wLast.v - s.wFirst.v : null;
  return (
    <div className="stats range-stats">
      <div className="card stat">
        <div className="eyebrow">Body weight</div>
        <div className="v">{s.wLast ? <>{fmt(s.wLast.v, 1)}<span> kg</span></> : "–"}</div>
        <div className="s">{wd != null ? <span className={`pill ${wd <= 0 ? "good" : "off"}`}>{wd > 0 ? "+" : "−"}{fmt(Math.abs(wd), 1)} kg since {shortDate(s.wFirst!.date)}</span> : s.wLast ? <span className="pill off">One weigh-in in this period</span> : "No weigh-ins in this period"}</div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Weight sessions</div>
        <div className="v">{s.sess}</div>
        <div className="s"><span className="pill off">{fmt(s.sessPerWeek, 1)} a week</span></div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Cardio &amp; sport</div>
        <div className="v">{fmt(s.cardioMin)}<span> min</span></div>
        <div className="s">{s.nActs ? <span className="pill off">{s.nActs} sessions · {fmt(s.cardioKcal)} kcal</span> : "Nothing logged yet"}</div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Avg steps / day</div>
        <div className="v">{s.steps != null ? fmt(s.steps) : "–"}</div>
        <div className="s">{s.steps != null ? <span className={`pill ${s.steps >= targets.steps ? "good" : "off"}`}>{s.steps >= targets.steps ? "On target" : `${fmt(targets.steps - s.steps)} below goal`}</span> : "No steps logged"}</div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Avg eaten / day</div>
        <div className="v">{s.kcal != null ? <>{fmt(s.kcal)}<span> kcal</span></> : "–"}</div>
        <div className="s">{s.kcal != null ? <span className="pill off">{s.nKcal} days logged</span> : "No food logged"}</div>
      </div>
      <div className="card stat">
        <div className="eyebrow">Avg burned / day</div>
        <div className="v">{s.burn != null ? <>{fmt(s.burn)}<span> kcal</span></> : "–"}</div>
        <div className="s">{s.balance != null ? <span className={`pill ${s.balance < 0 ? "good" : "off"}`}>{s.balance < 0 ? `${fmt(-s.balance)} kcal/day deficit` : `${fmt(s.balance)} kcal/day surplus`}</span> : "Log food to see your balance"}</div>
      </div>
    </div>
  );
}

const niceUp = (v: number) => { if (v <= 0) return 1; const step = 10 ** Math.floor(Math.log10(v)) / 2; return Math.ceil(v / step) * step; };

type Row = PeriodRow;
export function WeeklyBars({ title, sub, data, k, target, targetLabel, fmtY, tipText, hitAbove, bare }: { bare?: boolean; title: string; sub: string; data: Row[]; k: "steps" | "kcal" | "sess" | "burn" | "cardioMin"; target: number; targetLabel: string; fmtY: (v: number) => string; tipText: (p: Row) => React.ReactNode; hitAbove?: boolean }) {
  const t = useTheme();
  return (
    <Wrap bare={bare} title={title} sub={sub}>
      <div className="chart-wrap">
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 18, right: 12, left: -6, bottom: 0 }}>
            <CartesianGrid stroke={t.line} vertical={false} />
            <XAxis dataKey="x" tick={{ fill: t.muted, fontSize: 11 }} tickLine={false} axisLine={{ stroke: t.line }} minTickGap={16} />
            <YAxis tick={{ fill: t.muted, fontSize: 11 }} tickLine={false} axisLine={false} width={44} tickFormatter={fmtY} domain={[0, (max: number) => niceUp(Math.max(max, target) * 1.08)]} allowDecimals={false} />
            {target > 0 && <ReferenceLine y={target} stroke={t.muted} strokeDasharray="5 4" label={{ value: targetLabel, position: "insideTopRight", fill: t.muted, fontSize: 11 }} />}
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
  const profile = useStore((s) => s.profile);
  const factor = useCalibration().factor;
  return useMemo(() => {
    const w = weeksRange(days, 12);
    return periods({ from: w[0], to: todayStr() }).map((p) => periodAgg(days, p, profile, factor));
  }, [days, profile, factor]);
}

export function WeightTrend({ data, bare, sub = "Weekly average of your weigh-ins" }: { data: Row[]; bare?: boolean; sub?: string }) {
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
          <Tooltip cursor={{ stroke: t.faint }} content={({ active, payload }) => { if (!active || !payload?.length) return null; const p = payload[0].payload as Row; return <div className="rtip">{p.weight != null ? <><b>{fmt(p.weight, 1)} kg</b>{p.period}</> : <>No weigh-in · {p.period}</>}</div>; }} />
          <Area type="monotone" dataKey="weight" connectNulls stroke={t.accent} strokeWidth={2.2} fill={t.accent} fillOpacity={0.1} dot={{ r: 4, fill: t.accent, stroke: t.surface, strokeWidth: 2 }} isAnimationActive={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
  if (bare) return chart;
  return (
    <section className="card">
      <h2>Body weight</h2><div className="small muted">{sub}</div>
      {chart}
    </section>
  );
}

function Wrap({ bare, title, sub, children }: { bare?: boolean; title: string; sub: string; children: React.ReactNode }) {
  if (bare) return <>{children}</>;
  return <section className="card"><h2>{title}</h2><div className="small muted">{sub}</div>{children}</section>;
}
