import { useEffect, useMemo, useRef, useState } from "react";
import { INTENSITY, intensityFromPace, onFoot, SPORT_BY_ID, SPORT_GROUPS, SPORTS, sportKcal, type SportGroup } from "../lib/burn";
import { useStore } from "../lib/store";
import type { Intensity } from "../lib/types";
import { fmt, parseNum } from "../lib/util";
import { Icon, Sheet } from "./ui";
import { WheelPicker } from "./WheelPicker";

export interface ActivityDraft {
  sport: string;
  minutes: number;
  intensity: Intensity;
  km?: number | null;
  /** on-foot activities: are these steps already in the day's step count? */
  inSteps?: boolean;
  /** calories typed in from a watch or gym machine */
  fromDevice?: boolean;
}

const MINUTES = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 75, 80, 90, 100, 105, 120, 135, 150, 165, 180, 210, 240, 270, 300];
const fmtMin = (m: number) => (m < 60 ? `${m}` : `${Math.floor(m / 60)}h${m % 60 ? String(m % 60).padStart(2, "0") : ""}`);

/**
 * Pick a sport or cardio type, then how long and how hard.
 * mode "log" records something you did (with calories); "plan" adds cardio to your weekly plan.
 */
export function ActivitySheet({ open, onClose, onSave, mode, initial, heading }: {
  open: boolean;
  onClose: () => void;
  onSave: (a: ActivityDraft & { kcal: number }) => void;
  mode: "log" | "plan";
  initial?: ActivityDraft | null;
  heading?: string;
}) {
  const { profile, days } = useStore();
  const kg = latestWeight(days) ?? profile?.weightKg ?? 75;
  const [step, setStep] = useState<"pick" | "details">("pick");
  const [d, setD] = useState<ActivityDraft>({ sport: "walk", minutes: 30, intensity: "moderate", km: null });
  const [kmText, setKmText] = useState("");
  const [devText, setDevText] = useState("");
  const [inSteps, setInSteps] = useState(true);

  useEffect(() => {
    if (!open) return;
    setDevText("");
    setInSteps(initial?.inSteps ?? true);
    if (initial) { setD({ ...initial }); setKmText(initial.km ? String(initial.km) : ""); setStep("details"); }
    else { setD({ sport: "walk", minutes: 30, intensity: "moderate", km: null }); setKmText(""); setStep("pick"); }
  }, [open, initial]);

  if (!open) return null;
  const sport = SPORT_BY_ID.get(d.sport) ?? SPORT_BY_ID.get("other")!;
  const km = parseNum(kmText);
  const paced = mode === "log" ? intensityFromPace(d.sport, km, d.minutes) : null;
  const intensity = paced ?? d.intensity;
  const device = mode === "log" ? parseNum(devText) : null;
  const kcal = device != null && device > 0 ? Math.round(device) : sportKcal(d.sport, d.minutes, intensity, kg);
  const foot = mode === "log" && onFoot(d.sport);
  const title = step === "pick" ? heading ?? (mode === "log" ? "Log activity" : "Add cardio") : sport.label;
  const pace = km && km > 0 ? d.minutes / km : null;

  return (
    <Sheet
      open tall={step === "pick"} label={title} onClose={onClose}
      title={
        <div className="spread">
          <div className="row" style={{ gap: 6, minWidth: 0 }}>
            {step === "details" && <button className="icon-btn" onClick={() => setStep("pick")} aria-label="Choose a different activity">{Icon.left}</button>}
            <div style={{ minWidth: 0 }}>
              <div className="eyebrow">{mode === "log" ? "Calories burned" : "Weekly plan"}</div>
              <h2 className="sheet-title">{title}</h2>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">{Icon.x}</button>
        </div>
      }
      footer={step === "details" ? (
        <button className="btn primary lg block" onClick={() => onSave({ ...d, intensity, km: km ?? null, kcal, inSteps: foot ? inSteps : undefined, fromDevice: device != null && device > 0 })}>
          {mode === "log" ? `Save · ${fmt(kcal)} kcal` : "Add to plan"}
        </button>
      ) : undefined}
    >
      {step === "pick" ? (
        <SportPicker onPick={(id) => { setD((x) => ({ ...x, sport: id })); setStep("details"); }} />
      ) : (
        <>
          <div className="burn-preview">
            <b>{fmt(kcal)}</b><span>kcal burned{device ? " · from your device" : ""}</span>
            <small>{d.minutes} min · {INTENSITY[intensity].label.toLowerCase()}{pace ? ` · ${Math.floor(pace)}:${String(Math.round((pace % 1) * 60)).padStart(2, "0")} min/km` : ""}</small>
          </div>
          <div className="wheels one">
            <WheelPicker id="act-min" label="Minutes" values={MINUTES} value={d.minutes} onChange={(minutes) => setD((x) => ({ ...x, minutes }))} format={fmtMin} />
          </div>
          <div className="chips quick-picks" style={{ marginTop: 10 }}>
            {[15, 30, 45, 60, 90].map((m) => <button key={m} className="chip" aria-pressed={d.minutes === m} onClick={() => setD((x) => ({ ...x, minutes: m }))}>{m} min</button>)}
          </div>
          {mode === "log" && sport.distance && (
            <label className="f" style={{ marginTop: 14 }}>Distance <span className="faint">(optional - sets the effort from your pace)</span>
              <div className="unit-in"><input className="in num" id="act-km" inputMode="decimal" value={kmText} placeholder="0" onChange={(e) => setKmText(e.target.value)} /><span>km</span></div>
            </label>
          )}
          <div className="f" style={{ margin: "16px 0 6px" }}>{mode === "log" ? "How hard was it?" : "How hard?"}{paced && <span className="faint"> - worked out from your pace</span>}</div>
          <div className="int-opts" role="radiogroup" aria-label="Intensity">
            {(Object.keys(INTENSITY) as Intensity[]).map((k) => (
              <button key={k} role="radio" aria-checked={intensity === k} disabled={!!paced && paced !== k} className="opt" onClick={() => setD((x) => ({ ...x, intensity: k }))}>
                <div className="t">{INTENSITY[k].label}</div><div className="h">{INTENSITY[k].hint}</div>
              </button>
            ))}
          </div>
          {mode === "log" && (
            <label className="f" style={{ marginTop: 14 }}>Calories from your watch or machine <span className="faint">(optional)</span>
              <div className="unit-in"><input className="in num" id="act-device" inputMode="numeric" value={devText} placeholder={`${sportKcal(d.sport, d.minutes, intensity, kg)}`} onChange={(e) => setDevText(e.target.value)} /><span>kcal</span></div>
              <span className="xs faint">Use the “active calories” number, not the total. A heart-rate reading beats our estimate.</span>
            </label>
          )}
          {foot && (
            <label className="check" style={{ marginTop: 14 }}>
              <input type="checkbox" id="act-insteps" checked={inSteps} onChange={(e) => setInSteps(e.target.checked)} />
              <span><b>My phone or watch counted these steps</b><small>Leave on if your step count for the day includes this {sport.label.toLowerCase()} - we won't count those calories twice.</small></span>
            </label>
          )}
          <p className="xs faint" style={{ marginTop: 12 }}>
            {device ? "Using your device's number." : `Estimated from your weight (${fmt(kg, 1)} kg), the activity and how hard it was.`} Only calories above your resting burn count, so nothing is counted twice.
          </p>
        </>
      )}
    </Sheet>
  );
}

function SportPicker({ onPick }: { onPick: (id: string) => void }) {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState<SportGroup | "All">("All");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { if (window.matchMedia("(pointer: fine)").matches) ref.current?.focus(); }, []);
  const t = q.trim().toLowerCase();
  const list = useMemo(
    () => SPORTS.filter((s) => (t ? (s.label + " " + (s.tags || "") + " " + s.group).toLowerCase().includes(t) : group === "All" || s.group === group)),
    [t, group],
  );
  return (
    <div className="picker">
      <div className="search">
        {Icon.search}
        <input ref={ref} id="sport-search" className="in" placeholder="Search - running, soccer, yoga…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search activities" autoComplete="off" />
      </div>
      {!t && (
        <div className="chips scroll-chips" role="tablist" aria-label="Activity type">
          {(["All", ...SPORT_GROUPS] as const).map((g) => <button key={g} role="tab" className="chip" aria-selected={group === g} aria-pressed={group === g} onClick={() => setGroup(g)}>{g}</button>)}
        </div>
      )}
      <ul className="pick-list">
        {list.map((s) => (
          <li key={s.id}><button className="pick-item" onClick={() => onPick(s.id)}><span>{s.label}</span><small>{s.group}</small></button></li>
        ))}
        {!list.length && <li><button className="pick-item custom" onClick={() => onPick("other")}>{Icon.plus}<span>Log as “Other activity”</span></button></li>}
      </ul>
    </div>
  );
}

/** The most recent weigh-in, so calorie estimates follow your weight as it changes. */
export function latestWeight(days: Record<string, { weight?: number | null }>): number | null {
  const ds = Object.keys(days).filter((k) => days[k].weight != null).sort();
  return ds.length ? days[ds[ds.length - 1]].weight! : null;
}
