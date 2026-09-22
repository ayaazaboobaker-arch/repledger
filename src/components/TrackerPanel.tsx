import { useEffect, useState } from "react";
import { kcalFor, setKind, startTracking, stopTracking, strideM, useTracker } from "../lib/stepTracker";
import { useStore } from "../lib/store";
import { fmt, todayStr, uid } from "../lib/util";
import { Icon, toast } from "./ui";

const clock = (s: number) => {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(r).padStart(2, "0");
};

export function TrackerPanel() {
  const t = useTracker();
  const { profile, updateDay, days } = useStore();
  const [, tick] = useState(0);
  useEffect(() => {
    if (!t.running) return;
    const i = window.setInterval(() => tick((n) => n + 1), 1000);
    return () => clearInterval(i);
  }, [t.running]);

  const today = todayStr();
  const h = profile?.heightCm ?? 175, w = profile?.weightKg ?? 75;
  const secs = t.startedAt ? Math.max(0, Math.round((Date.now() - t.startedAt) / 1000)) : 0;
  const km = (t.steps * strideM(h, t.kind)) / 1000;
  const pace = km > 0.05 ? secs / 60 / km : null;
  const cadence = secs > 20 ? Math.round((t.steps / secs) * 60) : null;
  const acts = days[today]?.activities || [];

  const stop = () => {
    const r = stopTracking();
    if (r.steps < 5) { toast("Tracking stopped - no steps counted"); return; }
    const km2 = (r.steps * strideM(h, r.kind)) / 1000;
    updateDay(today, (d) => {
      d.steps = (d.steps || 0) + r.steps;
      d.activities = [...(d.activities || []), { id: uid(), kind: r.kind, start: r.start, seconds: r.seconds, steps: r.steps, km: +km2.toFixed(2), kcal: Math.round(kcalFor(r.steps, w, r.kind)) }];
    });
    toast(`Saved ${r.kind}: ${fmt(r.steps)} steps added to today`);
  };

  const removeAct = (id: string) =>
    updateDay(today, (d) => {
      const a = (d.activities || []).find((x) => x.id === id);
      if (!a) return;
      d.activities = (d.activities || []).filter((x) => x.id !== id);
      d.steps = Math.max(0, (d.steps || 0) - a.steps);
    });

  return (
    <div className="tracker">
      {t.running ? (
        <div className="live">
          <div className="spread">
            <span className="pill good"><i className="pulse" /> {t.sensor === "live" ? `Tracking your ${t.kind}` : "Starting sensor…"}</span>
            <div className="seg" role="group" aria-label="Activity">
              <button aria-pressed={t.kind === "walk"} onClick={() => setKind("walk")}>Walk</button>
              <button aria-pressed={t.kind === "run"} onClick={() => setKind("run")}>Run</button>
            </div>
          </div>
          <div className="live-steps num" aria-live="polite">{fmt(t.steps)}<span> steps</span></div>
          <div className="live-stats">
            <div><b>{clock(secs)}</b>time</div>
            <div><b>{fmt(km, 2)}</b>km</div>
            <div><b>{pace ? `${Math.floor(pace)}:${String(Math.round((pace % 1) * 60)).padStart(2, "0")}` : "–"}</b>min/km</div>
            <div><b>{cadence ?? "–"}</b>steps/min</div>
          </div>
          <button className="btn lg block stop-btn" onClick={stop}>{Icon.stop} Stop and save</button>
          <p className="xs faint" style={{ marginTop: 8 }}>Keep this screen open - phone in your hand or pocket. The screen stays awake while tracking.</p>
        </div>
      ) : (
        <>
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <button className="btn primary block" onClick={() => startTracking("walk")}>{Icon.run} Start walk</button>
            <button className="btn block" onClick={() => startTracking("run")}>{Icon.run} Start run</button>
          </div>
          {t.sensor === "no-sensor" && <p className="tracker-msg">No motion sensor on this device. Open Rep Ledger on your phone to track steps as you move.</p>}
          {t.sensor === "denied" && <p className="tracker-msg">Motion access was blocked. Allow “Motion &amp; Orientation” for this site in your phone's browser settings, then try again.</p>}
          {t.sensor === "insecure" && <p className="tracker-msg">Step tracking needs the app opened over a secure (https) link. It works on a hosted version of Rep Ledger, not over your home network.</p>}
          {t.sensor === "idle" && <p className="xs faint" style={{ marginTop: 8 }}>Counts steps with your phone's motion sensor while this screen is open.</p>}
        </>
      )}
      {acts.length > 0 && (
        <ul className="acts">
          {acts.map((a) => (
            <li key={a.id}>
              <span className="pill accent">{a.kind === "run" ? "Run" : "Walk"}</span>
              <span className="small num">{fmt(a.steps)} steps · {fmt(a.km, 2)} km · {clock(a.seconds)} · ~{fmt(a.kcal)} kcal</span>
              <button className="icon-btn" onClick={() => removeAct(a.id)} aria-label="Remove this activity">{Icon.x}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
