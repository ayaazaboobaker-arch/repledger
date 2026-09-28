import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { DateRange, PeriodRow } from "../lib/range";
import { rangeDays } from "../lib/range";
import { foodTotals } from "../lib/stats";
import { useStore } from "../lib/store";
import type { DayLog } from "../lib/types";
import { addDays, DOW_LONG, dowKey, fmt, shortDate, todayStr } from "../lib/util";
import { useTheme } from "./ui";

type MacroKey = "kcal" | "p" | "c" | "f";
const MACROS: { k: MacroKey; label: string; unit: string; cls: string }[] = [
  { k: "kcal", label: "Calories", unit: "kcal", cls: "k" },
  { k: "p", label: "Protein", unit: "g", cls: "p" },
  { k: "c", label: "Carbs", unit: "g", cls: "c" },
  { k: "f", label: "Fat", unit: "g", cls: "f" },
];
const ROW_KEY: Record<MacroKey, "kcal" | "protein" | "carbs" | "fat"> = { kcal: "kcal", p: "protein", c: "carbs", f: "fat" };

/** Protein is a floor (hit 90% or more); calories, carbs and fat are aims (within 10% either way). */
export function onTarget(k: MacroKey, v: number, target: number) {
  if (!target) return false;
  return k === "p" ? v >= target * 0.9 : Math.abs(v - target) <= target * 0.1;
}
const dayLabel = (d: string) => (d === todayStr() ? "Today" : d === addDays(todayStr(), -1) ? "Yesterday" : `${DOW_LONG[dowKey(d)].slice(0, 3)} ${shortDate(d)}`);

export function MacroTracker({ days, range, rows }: { days: Record<string, DayLog>; range: DateRange; rows: PeriodRow[] }) {
  const { targets } = useStore();
  const t = useTheme();
  const [mk, setMk] = useState<MacroKey>("p");
  const [more, setMore] = useState(14);
  const today = todayStr();
  const tg: Record<MacroKey, number> = { kcal: targets.kcal, p: targets.protein, c: targets.carbs, f: targets.fat };
  const color: Record<MacroKey, string> = { kcal: t.accent, p: t.protein, c: t.carbs, f: t.fat };
  const m = MACROS.find((x) => x.k === mk)!;

  const logged = useMemo(() => {
    const out: { date: string; kcal: number; p: number; c: number; f: number }[] = [];
    for (let d = range.to; d >= range.from; d = addDays(d, -1)) {
      const foods = days[d]?.foods;
      if (foods?.length) out.push({ date: d, ...foodTotals(foods) });
    }
    return out;
  }, [days, range]);

  // Averages leave out today (it isn't over) unless today is all there is.
  const done = logged.filter((r) => r.date !== today);
  const base = done.length ? done : logged;
  const avg = (k: MacroKey) => (base.length ? base.reduce((a, r) => a + r[k], 0) / base.length : null);
  const hits = (k: MacroKey) => done.filter((r) => onTarget(k, r[k], tg[k])).length;

  const daily = rangeDays(range) <= 35;
  const chart = useMemo(() => {
    if (!daily) return rows.map((r) => ({ x: r.x, v: r[ROW_KEY[mk]] ?? null, tip: `${r.period} · ${r.nKcal} days logged`, avg: true, today: false }));
    const out: { x: string; v: number | null; tip: string; avg: boolean; today: boolean }[] = [];
    for (let d = range.from; d <= range.to; d = addDays(d, 1)) {
      const foods = days[d]?.foods;
      out.push({ x: shortDate(d), v: foods?.length ? foodTotals(foods)[mk] : null, tip: dayLabel(d) + (d === today ? " · so far" : ""), avg: false, today: d === today });
    }
    return out;
  }, [daily, rows, mk, range, days, today]);

  // Where your calories come from, against the split your targets imply.
  const split = (() => {
    const p = avg("p"), c = avg("c"), f = avg("f");
    if (p == null || c == null || f == null) return null;
    const kc = p * 4 + c * 4 + f * 9 || 1;
    const tk = tg.p * 4 + tg.c * 4 + tg.f * 9 || 1;
    return { you: [p * 4 / kc, c * 4 / kc, f * 9 / kc], aim: [tg.p * 4 / tk, tg.c * 4 / tk, tg.f * 9 / tk] };
  })();

  if (!logged.length) return <section className="card"><h2>Macros day by day</h2><div className="empty" style={{ marginTop: 10 }}>Log food in your diary and your daily protein, carbs and fat show up here.</div></section>;

  return (
    <>
      <div className="macro-stats">
        {MACROS.map((x) => {
          const a = avg(x.k);
          const h = hits(x.k);
          return (
            <button key={x.k} className={`card macro-stat ${x.cls}`} aria-pressed={mk === x.k} onClick={() => setMk(x.k)}>
              <span className="eyebrow">{x.label}</span>
              <b className="num">{a != null ? fmt(a) : "–"}<small> / {fmt(tg[x.k])} {x.unit}</small></b>
              <span className="xs muted">{done.length ? `${h} of ${done.length} days ${x.k === "p" ? "hit" : "on target"}` : "average so far"}</span>
            </button>
          );
        })}
      </div>

      <section className="card" style={{ marginTop: 12 }}>
        <div className="card-h">
          <div><h2>{m.label} {daily ? "each day" : "per week"}</h2><div className="small muted">{daily ? "Tap a card above to switch macro" : "Daily average per period · pick 4 weeks or less to see single days"}</div></div>
          <div className="seg" role="tablist" aria-label="Macro">
            {MACROS.map((x) => <button key={x.k} role="tab" aria-selected={mk === x.k} aria-pressed={mk === x.k} onClick={() => setMk(x.k)}>{x.label}</button>)}
          </div>
        </div>
        <div className="chart-wrap">
          <ResponsiveContainer>
            <BarChart data={chart} margin={{ top: 18, right: 12, left: -6, bottom: 0 }}>
              <CartesianGrid stroke={t.line} vertical={false} />
              <XAxis dataKey="x" tick={{ fill: t.muted, fontSize: 11 }} tickLine={false} axisLine={{ stroke: t.line }} minTickGap={14} />
              <YAxis tick={{ fill: t.muted, fontSize: 11 }} tickLine={false} axisLine={false} width={44} tickFormatter={(v) => fmt(v)} domain={[0, (max: number) => Math.ceil(Math.max(max, tg[mk]) * 1.12)]} allowDecimals={false} />
              <ReferenceLine y={tg[mk]} stroke={t.muted} strokeDasharray="5 4" label={{ value: `Target ${fmt(tg[mk])}`, position: "insideTopRight", fill: t.muted, fontSize: 11 }} />
              <Tooltip cursor={{ fill: t.accentSoft, opacity: 0.4 }} content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const p = payload[0].payload as (typeof chart)[number];
                return <div className="rtip">{p.v != null ? <><b>{fmt(p.v)} {m.unit}{p.avg ? "/day" : ""}</b>{p.tip}{!p.avg && !p.today ? ` · ${onTarget(mk, p.v, tg[mk]) ? "on target" : p.v < tg[mk] ? `${fmt(tg[mk] - p.v)} ${m.unit} under` : `${fmt(p.v - tg[mk])} ${m.unit} over`}` : ""}</> : <>Nothing logged · {p.tip}</>}</div>;
              }} />
              <Bar dataKey="v" radius={[4, 4, 0, 0]} maxBarSize={30} isAnimationActive={false}>
                {chart.map((d, i) => <Cell key={i} fill={color[mk]} fillOpacity={d.v != null && (d.avg || onTarget(mk, d.v, tg[mk])) ? 1 : 0.45} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        {daily && <div className="xs faint">Solid bars are on target{mk === "p" ? " (90% of your protein or more)" : " (within 10%)"}; faded bars missed it.</div>}
      </section>

      {split && (
        <section className="card" style={{ marginTop: 12 }}>
          <h2>Where your calories come from</h2>
          <div className="small muted">Average of your logged days, against the split your targets aim for</div>
          {([["You", split.you], ["Target", split.aim]] as const).map(([lbl, s]) => (
            <div key={lbl} className="split-row">
              <span className="small">{lbl}</span>
              <div className="split-bar">
                {s.map((v, i) => <i key={i} className={["p", "c", "f"][i]} style={{ flex: v }}>{v >= 0.12 ? `${Math.round(v * 100)}%` : ""}</i>)}
              </div>
            </div>
          ))}
          <div className="split-key xs muted"><span><i className="dot p" />Protein</span><span><i className="dot c" />Carbs</span><span><i className="dot f" />Fat</span></div>
        </section>
      )}

      <section className="card" style={{ marginTop: 12 }}>
        <div className="card-h"><div><h2>Day by day</h2><div className="small muted">{logged.length} day{logged.length === 1 ? "" : "s"} logged in this period</div></div></div>
        <ul className="macro-days">
          {logged.slice(0, more).map((r) => (
            <li key={r.date}>
              <div className="md-top">
                <b>{dayLabel(r.date)}{r.date === today ? <span className="faint"> · so far</span> : null}</b>
                <span className={`num small ${r.date !== today && onTarget("kcal", r.kcal, tg.kcal) ? "ok" : ""}`}><b>{fmt(r.kcal)}</b> / {fmt(tg.kcal)} kcal</span>
              </div>
              <div className="md-macros">
                {(["p", "c", "f"] as const).map((k) => {
                  const ok = r.date !== today && onTarget(k, r[k], tg[k]);
                  return (
                    <div key={k} className={`md-m ${k}${ok ? " ok" : ""}`}>
                      <span className="xs"><span className="md-l">{MACROS.find((x) => x.k === k)!.label[0]}</span> <b className="num">{fmt(r[k])}</b><span className="faint">/{fmt(tg[k])}g</span></span>
                      <div className="md-track"><i style={{ width: `${Math.min(100, (r[k] / (tg[k] || 1)) * 100)}%` }} /></div>
                    </div>
                  );
                })}
              </div>
            </li>
          ))}
        </ul>
        {logged.length > more && <button className="btn ghost sm block" style={{ marginTop: 8 }} onClick={() => setMore(more + 14)}>Show {Math.min(14, logged.length - more)} more days</button>}
      </section>
    </>
  );
}
