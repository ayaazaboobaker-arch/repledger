import { useEffect, useState } from "react";
import { signOut } from "../lib/accounts";
import { useStore } from "../lib/store";
import { foodTotals } from "../lib/stats";
import { addDays, DOW_LONG, dowKey, fmt, parseNum, parseYmd, shortDate, todayStr, weekStart } from "../lib/util";
import { TrackerPanel } from "./TrackerPanel";
import { Icon, Meter, Ring, Sparkline, toast } from "./ui";
import { WeightRuler } from "./WeightRuler";

export function DemoBanner() {
  const { isDemo } = useStore();
  if (!isDemo) return null;
  return (
    <div className="banner">
      <span>You're in the <b>demo profile</b> - six weeks of made-up training, food and weigh-ins so every chart has something to show.</span>
      <button className="btn sm primary" onClick={signOut}>Create my own profile</button>
    </div>
  );
}

const FULL_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function DateBar({ date, setDate, children }: { date: string; setDate: (d: string) => void; children?: React.ReactNode }) {
  const d = parseYmd(date);
  const isToday = date === todayStr();
  return (
    <div className="datebar">
      <div className="d">
        <div className="date-main">
          {isToday && <span className="today-tag">Today</span>}
          <span>{DOW_LONG[dowKey(date)]} {d.getDate()} {FULL_MONTHS[d.getMonth()]} {d.getFullYear()}</span>
        </div>
        {children && <div className="greet">{children}</div>}
      </div>
      <div className="nav">
        <button className="btn" onClick={() => setDate(addDays(date, -1))} aria-label="Previous day">{Icon.left}</button>
        {!isToday && <button className="btn" onClick={() => setDate(todayStr())}>Today</button>}
        <button className="btn" onClick={() => setDate(addDays(date, 1))} aria-label="Next day">{Icon.right}</button>
      </div>
    </div>
  );
}

export function CalorieSummary({ date }: { date: string }) {
  const { days, targets } = useStore();
  const t = foodTotals(days[date]?.foods);
  const left = targets.kcal - t.kcal;
  const mac = (cls: string, label: string, v: number, tg: number) => (
    <div className={`macro ${cls}`}>
      <div className="lbl"><span>{label}</span><span><b>{fmt(v)}</b> / {fmt(tg)} g</span></div>
      <Meter value={v} max={tg} sm label={label} />
    </div>
  );
  return (
    <div className="ringbox">
      <Ring value={t.kcal} max={targets.kcal}>
        <b>{fmt(Math.abs(left))}</b>
        <span>{left >= 0 ? "kcal left" : "kcal over"}</span>
      </Ring>
      <div className="macros">
        <div className="small muted num"><b style={{ color: "var(--ink)" }}>{fmt(t.kcal)}</b> of {fmt(targets.kcal)} kcal · {fmt(t.kcal * 4.184)} kJ</div>
        {mac("p", "Protein", t.p, targets.protein)}
        {mac("c", "Carbs", t.c, targets.carbs)}
        {mac("f", "Fat", t.f, targets.fat)}
      </div>
    </div>
  );
}

export function StepsCard({ date }: { date: string }) {
  const { days, targets, updateDay } = useStore();
  const v = days[date]?.steps ?? null;
  const tg = targets.steps;
  const [draft, setDraft] = useState<string | null>(null);
  const set = (n: number | null) => updateDay(date, (d) => { d.steps = n == null ? null : Math.max(0, Math.round(n)); });
  const ws = weekStart(date);
  const vals = Array.from({ length: 7 }, (_, i) => { const dd = addDays(ws, i); return { dd, s: days[dd]?.steps ?? null }; });
  const max = Math.max(tg, ...vals.map((o) => o.s || 0));
  return (
    <section className="card">
      <div className="card-h" style={{ marginBottom: 10 }}><h2>Steps</h2><span className="small muted num">Goal {fmt(tg)}</span></div>
      <div className="stepper">
        <button className="btn" onClick={() => set((v || 0) - 500)} aria-label="Minus 500 steps">−</button>
        <input
          className="val" id={`steps-${date}`} inputMode="numeric" aria-label="Steps"
          value={draft ?? (v == null ? "" : fmt(v))} placeholder="0"
          onFocus={() => setDraft(v == null ? "" : String(v))}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => { if (draft != null) set(parseNum(draft)); setDraft(null); }}
          onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLInputElement).blur()}
        />
        <button className="btn" onClick={() => set((v || 0) + 500)} aria-label="Plus 500 steps">+</button>
      </div>
      <div className="chips" style={{ justifyContent: "center", marginTop: 10 }}>
        {[1000, 2500, 5000].map((n) => <button key={n} className="chip" onClick={() => set((v || 0) + n)}>+{fmt(n)}</button>)}
      </div>
      {date === todayStr() && <TrackerPanel />}
      <div style={{ marginTop: 12 }}><Meter value={v || 0} max={tg} label="Steps progress" /></div>
      <div className="small muted" style={{ marginTop: 6 }}>{v == null ? "Not logged yet" : v >= tg ? "Goal reached" : `${fmt(tg - v)} to go`}</div>
      <div className="weekbars" aria-label="Steps this week">
        {vals.map((o, i) => (
          <div key={o.dd} className={`b${(o.s || 0) >= tg ? " hit" : ""}${o.dd === date ? " cur" : ""}`} title={`${shortDate(o.dd)}: ${o.s != null ? fmt(o.s) + " steps" : "not logged"}`}>
            <i style={{ height: o.s ? Math.max(3, (o.s / max) * 52) : 2 }} />
            <span>{"MTWTFSS"[i]}</span>
          </div>
        ))}
        <div className="tl" style={{ top: 70 - 17 - (tg / max) * 52 }} />
      </div>
      <details className="why">
        <summary>Tracking steps all day?</summary>
        <p className="xs muted">Phones only share motion with web apps while the page is open and the screen is on, so Rep Ledger can't count in the background. For all-day steps, check the step count in your phone's Health or Google Fit app in the evening and type it in above - or use Start walk / Start run to track a walk, run or commute live.</p>
      </details>
    </section>
  );
}

export function WeightCard({ date }: { date: string }) {
  const { days, targets, updateDay, profile } = useStore();
  const v = days[date]?.weight ?? null;
  const earlier = Object.keys(days).filter((d) => d < date && days[d].weight != null).sort();
  const prevD = earlier[earlier.length - 1];
  const prev = prevD ? days[prevD].weight! : null;
  const start = v ?? prev ?? profile?.weightKg ?? 70;
  const [pick, setPick] = useState(start);
  const [typing, setTyping] = useState<string | null>(null);
  useEffect(() => { setPick(v ?? prev ?? profile?.weightKg ?? 70); }, [date, v, prev, profile?.weightKg]);
  const series = Object.keys(days).filter((d) => d <= date && days[d].weight != null).sort().slice(-10).map((d) => days[d].weight!);
  const cur = v ?? prev;
  const delta = v != null && prev != null ? v - prev : null;
  const dirty = v == null || Math.abs(pick - v) > 0.01;
  const save = () => { updateDay(date, (d) => { d.weight = +pick.toFixed(1); }); toast(`Weigh-in saved: ${fmt(pick, 1)} kg`); };
  const change = v != null && prev != null ? null : prev != null ? pick - prev : null;
  return (
    <section className="card">
      <div className="card-h" style={{ marginBottom: 6 }}>
        <h2>Weigh-in</h2>
        {delta != null ? <span className={`pill ${delta <= 0 ? "good" : "off"}`}>{delta > 0 ? "+" : ""}{fmt(delta, 1)} kg</span> : v != null ? <span className="pill good">{Icon.check} Logged</span> : null}
      </div>
      <div className="weigh-val">
        <input
          className="val" id={`weight-${date}`} inputMode="decimal" aria-label="Body weight in kg - type or use the scale below"
          value={typing ?? fmt(pick, 1)}
          onFocus={(e) => { setTyping(String(pick)); e.target.select(); }}
          onChange={(e) => setTyping(e.target.value)}
          onBlur={() => { const n = parseNum(typing ?? ""); if (n != null && n >= 30 && n <= 250) setPick(+n.toFixed(1)); setTyping(null); }}
          onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLInputElement).blur()}
        />
        <span>kg</span>
      </div>
      <WeightRuler id={`ruler-${date}`} value={pick} onChange={setPick} />
      <div className="weigh-actions">
        {dirty ? (
          <button className="btn primary block" onClick={save}>{v == null ? `Log ${fmt(pick, 1)} kg` : `Update to ${fmt(pick, 1)} kg`}{change != null && Math.abs(change) >= 0.05 ? <span className="delta-chip">{change > 0 ? "+" : ""}{fmt(change, 1)}</span> : null}</button>
        ) : (
          <div className="small muted" style={{ textAlign: "center" }}>Scroll the scale to change it</div>
        )}
      </div>
      <div className="spread" style={{ marginTop: 12, alignItems: "flex-end" }}>
        <div className="small muted">
          {prev != null ? <>Previous {fmt(prev, 1)} kg · {shortDate(prevD!)}</> : "First weigh-in"}
          {targets.goalWeight && cur != null ? <div>Goal {fmt(targets.goalWeight, 1)} kg · {fmt(Math.abs(cur - targets.goalWeight), 1)} kg to go</div> : null}
        </div>
        <Sparkline values={series} width={96} height={36} />
      </div>
      <div className="xs faint" style={{ marginTop: 8 }}>Weigh once a week, same morning, before food.</div>
    </section>
  );
}
