import { useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { exerciseHistory, weeklyExercise } from "../lib/stats";
import type { DayLog } from "../lib/types";
import { fmt, fmtKg, shortDate, todayStr, weekStart } from "../lib/util";
import { useTheme } from "./ui";

type Metric = "top" | "one" | "vol" | "reps";
const MET: Record<Metric, { label: string; unit: string }> = {
  top: { label: "Weight", unit: "kg" },
  one: { label: "Est. 1RM", unit: "kg" },
  vol: { label: "Volume", unit: "kg" },
  reps: { label: "Reps", unit: "reps" },
};

interface Props {
  name: string;
  days: Record<string, DayLog>;
  size?: "short" | "normal" | "tall";
  idPrefix: string;
}

export function ExerciseProgress({ name, days, size = "normal", idPrefix }: Props) {
  const t = useTheme();
  const hist = useMemo(() => exerciseHistory(days, name), [days, name]);
  const weekly = useMemo(() => weeklyExercise(hist), [hist]);
  const bodyweight = hist.length > 0 && hist.every((h) => h.top === 0);
  const [metric, setMetric] = useState<Metric>(bodyweight ? "reps" : "top");
  const [group, setGroup] = useState<"session" | "week">("week");
  const m = bodyweight && (metric === "top" || metric === "one" || metric === "vol") ? "reps" : metric;

  if (!hist.length)
    return <div className="empty">No completed sets of {name} yet. Finish a session and your progress appears here.</div>;

  const rows =
    group === "week"
      ? weekly.map((w) => ({ x: "Wk of " + shortDate(w.week), v: w[m], a: w.scheme, b: `${w.sessions} session${w.sessions > 1 ? "s" : ""} · ${w.sets} sets · ${fmt(w.reps)} reps` }))
      : hist.map((h) => ({ x: shortDate(h.date), v: h[m], a: h.scheme, b: h.detail + (h.top ? " kg" : " reps") }));

  const first = hist[0], last = hist[hist.length - 1];
  const fw = weekly[0], lw = weekly[weekly.length - 1];
  const dTop = last.top - first.top;
  const dReps = lw.reps / lw.sessions - fw.reps / fw.sessions;
  const dVol = fw.vol > 0 ? ((lw.vol / lw.sessions - fw.vol / fw.sessions) / (fw.vol / fw.sessions)) * 100 : 0;
  const fmtV = (v: number) => (MET[m].unit === "kg" ? (m === "vol" ? fmt(v) : fmtKg(Math.round(v * 10) / 10)) : fmt(v));
  const sign = (n: number) => (n > 0 ? "+" : n < 0 ? "−" : "±");
  const cls = (n: number) => (n > 0.01 ? "up" : n < -0.01 ? "down" : "faint");
  const curWeek = weekStart(todayStr());

  return (
    <div>
      <div className="xp-kpis">
        {bodyweight ? (
          <div className="xp-kpi"><div className="l">Best set</div><div className="v">{last.bestReps} reps</div><div className={`d ${cls(last.bestReps - first.bestReps)}`}>{sign(last.bestReps - first.bestReps)}{Math.abs(last.bestReps - first.bestReps)} since {shortDate(first.date)}</div></div>
        ) : (
          <div className="xp-kpi"><div className="l">Top set</div><div className="v">{fmtKg(last.top)} kg</div><div className={`d ${cls(dTop)}`}>{sign(dTop)}{fmtKg(Math.abs(dTop))} kg since {shortDate(first.date)}</div></div>
        )}
        <div className="xp-kpi"><div className="l">Reps / session</div><div className="v">{fmt(lw.reps / lw.sessions)}</div><div className={`d ${cls(dReps)}`}>{sign(dReps)}{fmt(Math.abs(dReps))} vs week 1</div></div>
        <div className="xp-kpi"><div className="l">Volume / session</div><div className="v">{bodyweight ? "–" : fmt(lw.vol / lw.sessions)}{bodyweight ? "" : <span className="xs muted"> kg</span>}</div><div className={`d ${cls(dVol)}`}>{bodyweight ? "bodyweight" : `${sign(dVol)}${fmt(Math.abs(dVol))}% vs week 1`}</div></div>
      </div>

      <div className="xp-head" style={{ marginTop: 12 }}>
        <div className="seg" role="group" aria-label="Measure">
          {(Object.keys(MET) as Metric[]).filter((k) => !bodyweight || k === "reps").map((k) => (
            <button key={k} id={`${idPrefix}-m-${k}`} aria-pressed={m === k} onClick={() => setMetric(k)}>{MET[k].label}</button>
          ))}
        </div>
        <div className="seg" role="group" aria-label="Group by">
          <button id={`${idPrefix}-g-w`} aria-pressed={group === "week"} onClick={() => setGroup("week")}>By week</button>
          <button id={`${idPrefix}-g-s`} aria-pressed={group === "session"} onClick={() => setGroup("session")}>By workout</button>
        </div>
      </div>

      <div className={`chart-wrap ${size === "normal" ? "" : size}`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={rows} margin={{ top: 16, right: 12, bottom: 0, left: -6 }}>
            <defs>
              <linearGradient id={`${idPrefix}-fill`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={t.accent} stopOpacity={0.25} />
                <stop offset="100%" stopColor={t.accent} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={t.line} vertical={false} />
            <XAxis dataKey="x" tick={{ fill: t.muted, fontSize: 11 }} tickLine={false} axisLine={{ stroke: t.line }} interval="preserveStartEnd" minTickGap={18} />
            <YAxis tick={{ fill: t.muted, fontSize: 11 }} tickLine={false} axisLine={false} width={48} domain={m === "vol" || m === "reps" ? [0, "auto"] : [(min: number) => Math.max(0, Math.floor((min - 2.5) / 5) * 5), (max: number) => Math.ceil((max + 2.5) / 5) * 5]} tickFormatter={(v: number) => (v >= 10000 ? fmt(v / 1000, 1) + "k" : fmt(v))} allowDecimals={false} />
            <Tooltip
              cursor={{ stroke: t.faint, strokeWidth: 1 }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const r = payload[0].payload as (typeof rows)[number];
                return (
                  <div className="rtip">
                    <b>{fmtV(r.v)} {MET[m].unit}</b>
                    {r.x} · {r.a}
                    <div style={{ opacity: 0.75 }}>{r.b}</div>
                  </div>
                );
              }}
            />
            <Area type="monotone" dataKey="v" stroke={t.accent} strokeWidth={2.2} fill={`url(#${idPrefix}-fill)`} dot={{ r: 4, fill: t.accent, stroke: t.surface, strokeWidth: 2 }} activeDot={{ r: 6, fill: t.accent, stroke: t.surface, strokeWidth: 2 }} isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="weeks" aria-label="Sets and reps each week">
        {weekly.map((w, i) => (
          <div key={w.week} className={`wk${w.week === curWeek ? " now" : ""}`}>
            <div className="l">Week {i + 1} · {shortDate(w.week)}</div>
            <div className="v">{w.scheme}{w.scheme.includes("@") ? " kg" : bodyweight ? " reps" : ""}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
