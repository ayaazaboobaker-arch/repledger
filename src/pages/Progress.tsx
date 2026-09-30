import { useMemo, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DemoBanner, WeightCard } from "../components/cards";
import { BurnCard } from "../components/BurnCard";
import { MacroTracker } from "../components/MacroTracker";
import { DatePicker } from "../components/DatePicker";
import { useCalibration } from "../lib/calibration";
import { ExerciseProgress } from "../components/ExerciseProgress";
import { Select } from "../components/Select";
import { CountUp, Icon, useTheme } from "../components/ui";
import { useStore } from "../lib/store";
import { autoGrain, daysIn, periodAgg, periods, type Grain, presetRange, PRESETS, rangeDays, rangeLabel, rangeSummary, type DateRange, type PeriodRow, type RangePreset } from "../lib/range";
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

type Tab = "overview" | "strength" | "body" | "nutrition" | "activity";
const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "strength", label: "Strength" },
  { id: "body", label: "Body" },
  { id: "nutrition", label: "Nutrition" },
  { id: "activity", label: "Activity" },
];
const ss = { get: (k: string) => { try { return sessionStorage.getItem(k); } catch { return null; } }, set: (k: string, v: string) => { try { sessionStorage.setItem(k, v); } catch { /* ignore */ } } };

export function Progress() {
  const { days, plan, targets, profile } = useStore();
  const [tab, setTabRaw] = useState<Tab>(() => (ss.get("rl.ptab") as Tab) || "overview");
  const setTab = (t: Tab) => { setTabRaw(t); ss.set("rl.ptab", t); };
  const [preset, setPreset] = useState<RangePreset>(() => (ss.get("rl.range") as RangePreset) || "4w");
  const [custom, setCustom] = useState<DateRange>(() => ({ from: addDays(todayStr(), -55), to: todayStr() }));
  const range = useMemo(() => presetRange(preset, days, custom), [preset, days, custom]);
  const inRange = useMemo(() => daysIn(days, range), [days, range]);
  const pick = (p: RangePreset) => { setPreset(p); ss.set("rl.range", p); };

  const names = useMemo(() => {
    const m = new Map<string, string>();
    for (const k of DOW) for (const e of plan[k].exercises) m.set(norm(e.name), e.name);
    for (const d of Object.values(days)) for (const e of d.workout?.exercises || []) if (!m.has(norm(e.name))) m.set(norm(e.name), e.name);
    return [...m.values()];
  }, [plan, days]);
  const [ex, setEx] = useState<string>(() => names.find((n) => exerciseHistory(days, n).length) || names[0] || "");
  const hist = useMemo(() => (ex ? exerciseHistory(inRange, ex) : []), [inRange, ex]);
  const factor = useCalibration().factor;
  const [grainPick, setGrainPick] = useState<Grain | "auto">(() => (ss.get("rl.grain") as Grain | "auto") || "auto");
  const pickGrain = (g: Grain | "auto") => { setGrainPick(g); ss.set("rl.grain", g); };
  // Long ranges by day would be hundreds of hair-thin bars - cap day view at ~3 months.
  const grain: Grain = grainPick === "auto" ? autoGrain(range) : grainPick === "day" && rangeDays(range) > 92 ? "week" : grainPick;
  const rows = useMemo(() => periods(range, grain).map((p) => periodAgg(days, p, profile, factor)), [days, range, grain, profile, factor]);
  const monthly = grain === "month";
  const daily = grain === "day";
  const per = grain;
  /** "Daily average per week" / "Each day" */
  const avgSub = (extra = "") => (daily ? "Each day" : `Daily average per ${per}`) + extra;
  const planned = DOW.filter((k) => plan[k].exercises.length).length;

  const eaten = <WeeklyBars title="Calories eaten" sub={avgSub()} data={rows} k="kcal" target={targets.kcal} targetLabel={`Target ${fmt(targets.kcal)}`} fmtY={(v) => fmt(v)} tipText={(p) => (p.kcal != null ? <><b>{fmt(p.kcal)} kcal{daily ? "" : "/day"}</b>{p.period} · protein {fmt(p.protein)} g{daily ? "" : ` · ${p.nKcal} days logged`}</> : null)} />;
  const burned = <WeeklyBars title="Calories burned" sub={avgSub(" · resting + steps + training + cardio")} data={rows} k="burn" target={targets.kcal} targetLabel={`Eating target ${fmt(targets.kcal)}`} fmtY={(v) => fmt(v)} tipText={(p) => (p.burn != null ? <><b>{fmt(p.burn)} kcal{daily ? "" : "/day"} burned</b>{p.period}{p.kcal != null ? ` · ate ${fmt(p.kcal)}` : ""}{p.nActs ? ` · ${p.nActs} cardio/sport` : ""}</> : null)} hitAbove />;
  const sessions = <WeeklyBars title="Weight sessions" sub={daily ? "Workouts completed each day" : `Workouts completed per ${per}`} data={rows} k="sess" target={daily ? 0 : monthly ? Math.round(planned * 4.3) : planned} targetLabel={daily ? "" : `Plan ${monthly ? Math.round(planned * 4.3) : planned}`} fmtY={(v) => fmt(v)} tipText={(p) => <><b>{p.sess} session{p.sess === 1 ? "" : "s"}</b>{p.period}</>} hitAbove />;

  return (
    <>
      <DemoBanner />
      <div className="page-head"><div><div className="eyebrow">Progress</div><h1>Your progress</h1></div></div>

      <div className="prog-tabs" role="tablist" aria-label="Progress sections">
        {TABS.map((t) => <button key={t.id} role="tab" aria-selected={tab === t.id} className={tab === t.id ? "on" : ""} onClick={() => setTab(t.id)}>{t.label}</button>)}
      </div>

      <section className="card range-card">
        <div className="range-top">
          <div className="chips range-chips" role="radiogroup" aria-label="Date range">
            {PRESETS.map((p) => <button key={p.id} role="radio" aria-checked={preset === p.id} className="chip" aria-pressed={preset === p.id} onClick={() => pick(p.id)}>{p.label}</button>)}
          </div>
          <div className="range-label"><b>{rangeLabel(range)}</b><span className="muted"> · {rangeDays(range)} days</span></div>
          <div className="seg grain-seg" role="radiogroup" aria-label="Show charts by">
            {([["day", "By day"], ["week", "By week"], ["month", "By month"]] as [Grain, string][]).map(([g, l]) => (
              <button key={g} role="radio" aria-checked={grain === g} aria-pressed={grain === g} disabled={g === "day" && rangeDays(range) > 92} title={g === "day" && rangeDays(range) > 92 ? "Pick 3 months or less to see single days" : undefined} onClick={() => pickGrain(g)}>{l}</button>
            ))}
          </div>
        </div>
        {preset === "custom" && (
          <div className="range-custom">
            <div className="f"><span id="range-from-l">From</span><DatePicker id="range-from" label="From" value={custom.from} max={custom.to} range={custom} onChange={(from) => setCustom({ ...custom, from })} /></div>
            <div className="f"><span id="range-to-l">To</span><DatePicker id="range-to" label="To" value={custom.to} min={custom.from} max={todayStr()} range={custom} onChange={(to) => setCustom({ ...custom, to })} /></div>
          </div>
        )}
      </section>

      <div className="prog-pane" key={tab}>
        {tab === "overview" && (
          <>
            <RangeStats days={days} range={range} />
            <div className="grid-2" style={{ marginTop: 16 }}>
              <WeightTrend data={rows} sub={daily ? "Each weigh-in" : `Average of your weigh-ins per ${per}`} />
              {eaten}
            </div>
            <div className="jump-grid">
              {TABS.slice(1).map((t) => (
                <button key={t.id} className="card jump" onClick={() => { setTab(t.id); window.scrollTo({ top: 0 }); }}>
                  <b>{t.label}</b><small>{{ strength: "Every lift, week by week", body: "Weigh-ins and your trend", nutrition: "Protein, carbs and fat each day", activity: "Steps, burn and cardio" }[t.id as Exclude<Tab, "overview">]}</small>
                  <span className="at-chev">{Icon.right}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {tab === "strength" && (
          <>
            <section className="card">
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
            <div style={{ marginTop: 16 }}>{sessions}</div>
          </>
        )}

        {tab === "body" && (
          <div className="grid-2">
            <WeightCard date={todayStr()} />
            <WeightTrend data={rows} sub={daily ? "Each weigh-in" : `Average of your weigh-ins per ${per}`} />
            <WeighIns days={days} range={range} />
          </div>
        )}

        {tab === "nutrition" && (
          <>
            <MacroTracker days={days} range={range} rows={rows} daily={daily} />
            <div style={{ marginTop: 12 }}>{eaten}</div>
          </>
        )}

        {tab === "activity" && (
          <div className="grid-2">
            <BurnCard date={todayStr()} />
            {burned}
            <WeeklyBars title="Steps" sub={avgSub()} data={rows} k="steps" target={targets.steps} targetLabel={`Goal ${fmt(targets.steps)}`} fmtY={(v) => (v >= 1000 ? fmt(v / 1000, 0) + "k" : fmt(v))} tipText={(p) => (p.steps != null ? <><b>{fmt(p.steps)} steps{daily ? "" : "/day"}</b>{p.period}{daily ? "" : ` · ${p.nSteps} days logged`}</> : null)} hitAbove />
            <WeeklyBars title="Cardio" sub={daily ? "Minutes of cardio and sport each day" : `Minutes of cardio and sport per ${per}`} data={rows} k="cardioMin" target={0} targetLabel="" fmtY={(v) => fmt(v)} tipText={(p) => <><b>{fmt(p.cardioMin)} min</b>{p.period} · {p.nActs} session{p.nActs === 1 ? "" : "s"} · {fmt(p.cardioKcal)} kcal</>} />
          </div>
        )}
      </div>
    </>
  );
}

/** Every weigh-in in the period, newest first, with the change from the one before. */
function WeighIns({ days, range }: { days: Record<string, DayLog>; range: DateRange }) {
  const all = Object.keys(days).filter((d) => days[d].weight != null).sort();
  const list = all.filter((d) => d >= range.from && d <= range.to).reverse();
  return (
    <section className="card">
      <h2>Weigh-ins</h2><div className="small muted">{list.length} in this period</div>
      {list.length ? (
        <ul className="weigh-list">
          {list.slice(0, 20).map((d) => {
            const i = all.indexOf(d);
            const prev = i > 0 ? days[all[i - 1]].weight! : null;
            const ch = prev != null ? days[d].weight! - prev : null;
            return (
              <li key={d}>
                <span>{shortDate(d)}</span>
                <b className="num">{fmt(days[d].weight!, 1)} kg</b>
                <span className={`num xs ${ch == null ? "faint" : ch <= 0 ? "down" : "up"}`}>{ch == null ? "first" : `${ch > 0 ? "+" : ch < 0 ? "−" : "±"}${fmt(Math.abs(ch), 1)}`}</span>
              </li>
            );
          })}
        </ul>
      ) : <div className="empty" style={{ marginTop: 10 }}>No weigh-ins in this period.</div>}
    </section>
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
