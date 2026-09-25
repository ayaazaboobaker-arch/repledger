import { useState } from "react";
import { dayBurn, dayFraction, INTENSITY, SPORT_BY_ID } from "../lib/burn";
import { useCalibration, type Calibration } from "../lib/calibration";
import { useStore } from "../lib/store";
import type { PlanCardio } from "../lib/types";
import { dowKey, fmt, todayStr, uid } from "../lib/util";
import { ActivitySheet, type ActivityDraft } from "./ActivitySheet";
import { CountUp, Icon, toast } from "./ui";

const actLabel = (kind: string) => SPORT_BY_ID.get(kind)?.label ?? (kind === "run" ? "Running" : kind === "walk" ? "Walking" : kind);

/** Weight on or before a date - calorie maths follows your weight as it changes. */
export function weightOn(days: Record<string, { weight?: number | null }>, date: string): number | null {
  const ds = Object.keys(days).filter((k) => k <= date && days[k].weight != null).sort();
  return ds.length ? days[ds[ds.length - 1]].weight! : null;
}

export function useLogActivity(date: string) {
  const { updateDay } = useStore();
  return (a: ActivityDraft & { kcal: number }) => {
    updateDay(date, (d) => {
      d.activities = [...(d.activities || []), { id: uid(), kind: a.sport, start: Date.now(), seconds: a.minutes * 60, steps: 0, km: a.km ? +a.km.toFixed(2) : 0, kcal: a.kcal, manual: true, intensity: a.intensity, inSteps: a.inSteps, fromDevice: a.fromDevice || undefined }];
    });
    toast(`${actLabel(a.sport)} logged · ${fmt(a.kcal)} kcal`);
  };
}

/** Planned cardio for a date that hasn't been logged yet. */
export function openCardio(days: Record<string, { activities?: { kind: string; manual?: boolean }[] }>, cardio: PlanCardio[] | undefined, date: string) {
  const logged = (days[date]?.activities || []).filter((a) => a.manual).map((a) => a.kind);
  return (cardio || []).filter((c) => {
    const i = logged.indexOf(c.sport);
    if (i === -1) return true;
    logged.splice(i, 1);
    return false;
  });
}

export function BurnCard({ date }: { date: string }) {
  const { days, profile, plan, updateDay } = useStore();
  const [sheet, setSheet] = useState<{ initial: ActivityDraft | null } | null>(null);
  const log = useLogActivity(date);
  const day = days[date];
  const isToday = date === todayStr();
  const cal = useCalibration();
  const [why, setWhy] = useState(false);
  const b = dayBurn(day, profile, weightOn(days, date), dayFraction(date, todayStr()), cal.factor);
  const acts = day?.activities || [];
  const planned = openCardio(days, plan[dowKey(date)]?.cardio, date);

  if (!b) return <section className="card"><h2>Calories burned</h2><div className="empty">Finish your profile to see what you burn each day.</div></section>;

  const parts = [
    { k: "resting", label: "Resting", hint: isToday ? `So far today · ${fmt(b.restingFull)} for the whole day` : "Keeping you alive - heart, lungs, brain", v: b.resting, c: "var(--faint)" },
    { k: "steps", label: "Steps", hint: `${fmt(day?.steps || 0)} steps`, v: b.steps, c: "var(--carbs)" },
    { k: "workout", label: "Weight training", hint: day?.workout ? day.workout.title : "No session", v: b.workout, c: "var(--protein)" },
    { k: "sports", label: "Cardio & sport", hint: acts.length ? `${acts.length} activit${acts.length > 1 ? "ies" : "y"}` : "Nothing logged", v: b.sports, c: "var(--good)" },
    { k: "digestion", label: "Digesting food", hint: "About 10% of what you eat", v: b.digestion, c: "var(--fat)" },
    ...(b.adjust ? [{ k: "adjust", label: "Adjusted to you", hint: `${b.adjust > 0 ? "+" : "−"}${Math.abs(Math.round((cal.factor - 1) * 100))}% · learned from your weigh-ins`, v: b.adjust, c: "var(--muted)" }] : []),
  ];

  const remove = (id: string) =>
    updateDay(date, (d) => {
      const a = (d.activities || []).find((x) => x.id === id);
      if (!a) return;
      d.activities = (d.activities || []).filter((x) => x.id !== id);
      if (!a.manual) d.steps = Math.max(0, (d.steps || 0) - a.steps);
    });

  return (
    <section className="card burn">
      <div className="card-h" style={{ marginBottom: 6 }}>
        <div><h2>Calories burned</h2><div className="small muted">{isToday ? "Today so far" : "This day"} · estimated</div></div>
        <span className="pill accent">{fmt(b.active)} active</span>
      </div>
      <div className="burn-total"><b><CountUp value={b.total} /></b><span>kcal</span></div>
      <div className="burn-bar" aria-hidden="true">{parts.map((p) => p.v > 0 && <i key={p.k} style={{ flex: p.v, background: p.c }} />)}</div>
      <ul className="burn-parts">
        {parts.map((p) => (
          <li key={p.k}><i className="dot" style={{ background: p.c }} /><span><b>{p.label}</b><small>{p.hint}</small></span><span className="num">{p.v < 0 ? "−" + fmt(-p.v) : fmt(p.v)}</span></li>
        ))}
      </ul>

      {b.hasFood && !isToday && (
        <div className={`balance ${b.balance < 0 ? "deficit" : "surplus"}`}>
          <span>Eaten {fmt(b.eaten)} − burned {fmt(b.total)}</span>
          <b>{b.balance < 0 ? `${fmt(-b.balance)} kcal deficit` : `${fmt(b.balance)} kcal surplus`}</b>
        </div>
      )}
      {isToday && (
        <div className="balance today">
          <span>By tonight you'll have burned about</span>
          <b>{fmt(b.total + Math.round((b.restingFull - b.resting) * cal.factor))} kcal</b>
        </div>
      )}

      {acts.length > 0 && (
        <ul className="act-list">
          {acts.map((a) => {
            const ab = b.acts.find((x) => x.id === a.id);
            return (
            <li key={a.id}>
              <span>
                <b>{actLabel(a.kind)}</b>
                <small>{Math.round(a.seconds / 60)} min{a.intensity ? ` · ${INTENSITY[a.intensity].label.toLowerCase()}` : ""}{a.km ? ` · ${fmt(a.km, 1)} km` : ""}{a.steps ? ` · ${fmt(a.steps)} steps` : ""}{a.fromDevice ? " · from your watch" : ""}</small>
                {ab && ab.inSteps > 0 && <small className="overlap">{fmt(ab.inSteps)} of its {fmt(a.kcal)} kcal already counted in your steps</small>}
              </span>
              <span className="num">+{fmt(ab?.kcal ?? a.kcal)} kcal</span>
              <button className="icon-btn" onClick={() => remove(a.id)} aria-label={`Remove ${actLabel(a.kind)}`}>{Icon.x}</button>
            </li>
            );
          })}
        </ul>
      )}

      {planned.length > 0 && (
        <div className="planned-cardio">
          <div className="eyebrow">{isToday ? "Planned for today" : "Planned"}</div>
          <div className="chips">
            {planned.map((c, i) => (
              <button key={i} className="chip" onClick={() => setSheet({ initial: { sport: c.sport, minutes: c.minutes, intensity: c.intensity } })}>
                {Icon.check} {actLabel(c.sport)} · {c.minutes} min
              </button>
            ))}
          </div>
        </div>
      )}

      <button className="btn primary block" style={{ marginTop: 14 }} onClick={() => setSheet({ initial: null })}>{Icon.plus} Log activity or sport</button>
      <button className="btn ghost sm block how-acc" onClick={() => setWhy(!why)} aria-expanded={why}>
        {cal.status === "ready" ? `Tuned to you from ${cal.foodDays} days of logs` : "How accurate is this?"} {why ? Icon.up : Icon.down}
      </button>
      {why && <Accuracy cal={cal} />}
      <ActivitySheet open={!!sheet} initial={sheet?.initial} mode="log" onClose={() => setSheet(null)} onSave={(a) => { log(a); setSheet(null); }} />
    </section>
  );
}

/** The cardio planned for a day, with a one-tap "Log it" for each block. */
export function CardioPlanRows({ date, planKey, compact }: { date: string; planKey: import("../lib/types").DowKey; compact?: boolean }) {
  const { days, plan } = useStore();
  const [sheet, setSheet] = useState<ActivityDraft | null>(null);
  const log = useLogActivity(date);
  const cardio = plan[planKey]?.cardio || [];
  if (!cardio.length) return null;
  const open = openCardio(days, cardio, date);
  const pending = [...open];
  return (
    <div className={`cardio-rows${compact ? " compact" : ""}`}>
      {cardio.map((c, i) => {
        const j = pending.indexOf(c);
        const done = j === -1;
        if (!done) pending.splice(j, 1);
        return (
          <div key={i} className={`cardio-row${done ? " done" : ""}`}>
            <span className="cr-ico" aria-hidden="true">{Icon.run}</span>
            <span className="cr-main"><b>{actLabel(c.sport)}</b><small>{c.minutes} min · {INTENSITY[c.intensity].label.toLowerCase()}</small></span>
            {done ? <span className="pill good">{Icon.check} Logged</span> : <button className="btn sm" onClick={() => setSheet({ sport: c.sport, minutes: c.minutes, intensity: c.intensity })}>Log it</button>}
          </div>
        );
      })}
      <ActivitySheet open={!!sheet} initial={sheet} mode="log" onClose={() => setSheet(null)} onSave={(a) => { log(a); setSheet(null); }} />
    </div>
  );
}

/** Explains how good the estimate is, and how close we are to tuning it to this person. */
function Accuracy({ cal }: { cal: Calibration }) {
  return (
    <div className="accuracy small">
      {cal.status === "ready" ? (
        <>
          <p>
            Over the last {cal.spanDays} days your weight moved <b>{cal.kgPerWeek! > 0 ? "+" : "−"}{fmt(Math.abs(cal.kgPerWeek!), 2)} kg a week</b> while you ate what you logged.
            That means you really burn about <b>{fmt(cal.maintenance)} kcal a day</b> - our formula said {fmt(cal.estimate)}.
          </p>
          <p className="muted">
            {cal.factor === 1 ? "The two agree, so no adjustment is needed." : `So every estimate is adjusted by ${cal.factor > 1 ? "+" : "−"}${Math.abs(Math.round((cal.factor - 1) * 100))}%.`} This keeps updating as you log, and assumes you log everything you eat.
          </p>
        </>
      ) : (
        <>
          <p>Right now this is a formula estimate - usually within 10–15% of your real burn. It gets tuned to your body once there's enough to learn from:</p>
          <ul className="acc-steps">
            <li className={cal.needFoodDays ? "" : "ok"}>{cal.needFoodDays ? `Log a full day of food on ${cal.needFoodDays} more day${cal.needFoodDays > 1 ? "s" : ""}` : "Enough days of food logged"} <span className="faint">({cal.foodDays}/14)</span></li>
            <li className={cal.needWeighIns || cal.spanDays < 14 ? "" : "ok"}>{cal.needWeighIns ? `Weigh in ${cal.needWeighIns} more time${cal.needWeighIns > 1 ? "s" : ""}, spread over two weeks` : cal.spanDays < 14 ? "Keep weighing in - we need two weeks between your first and last weigh-in" : "Enough weigh-ins"} <span className="faint">({cal.weighIns}/3)</span></li>
          </ul>
        </>
      )}
      <p className="muted">For better numbers: add distance for walks and runs (we set the effort from your pace), or type in the active calories from your watch.</p>
    </div>
  );
}
