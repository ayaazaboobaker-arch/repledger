import { useEffect, useRef, useState } from "react";
import { useCurrentAccount } from "../../lib/accounts";
import { analyze, BONES, frameAt, LIFTS, type Lift, type Report, type Status } from "../../lib/form/analyze";
import { patternFor } from "../../lib/form/patterns";
import { trackVideo, type Tracked } from "../../lib/form/pose";
import { ALL_EXERCISES } from "../../lib/exercises";
import { planExercises } from "../../lib/coach/engine";
import { useStore } from "../../lib/store";
import { Select } from "../Select";
import { CameraSession, type Filmed } from "./CameraSession";
import { fmt, todayStr, shortDate } from "../../lib/util";
import { Icon } from "../ui";

interface Saved { date: string; exercise?: string; lift: Lift; score: number | null; reps: number; headline: string; checks: { id?: string; label: string; status: string; summary: string }[] }
const HIST_KEY = (id: string) => `rl-form-history:${id}`;
export const loadHist = (id: string): Saved[] => { try { return JSON.parse(localStorage.getItem(HIST_KEY(id)) || "[]"); } catch { return []; } };
const saveHist = (id: string, h: Saved[]) => { try { localStorage.setItem(HIST_KEY(id), JSON.stringify(h.slice(0, 20))); } catch { /* storage blocked */ } };

const STATUS: Record<Status | "na", { label: string; cls: string }> = {
  good: { label: "Good", cls: "t-up" }, warn: { label: "Work on", cls: "t-hold" }, bad: { label: "Fix this", cls: "t-down" }, na: { label: "–", cls: "t-new" },
};

/**
 * `freeLeft` is set for people without Pro: how many free checks they have left.
 * `onUsed` is called when a free check has been used up.
 */
export function FormCheck({ freeLeft, onUsed }: { freeLeft?: number; onUsed?: () => void }) {
  const acc = useCurrentAccount();
  const id = acc?.id ?? "anon";
  const plan = useStore((st) => st.plan);
  const mine = planExercises(plan).map((e) => e.name);
  const [exercise, setExercise] = useState<string>(() => mine[0] ?? "Back Squat");
  const [other, setOther] = useState(false);
  const [camera, setCamera] = useState(false);
  const lift: Lift = patternFor(exercise);
  const [video, setVideo] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [stage, setStage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ tracked: Tracked; report: Report } | null>(null);
  const [hist, setHist] = useState<Saved[]>(() => loadHist(id));
  const abort = useRef<AbortController | null>(null);
  const locked = freeLeft !== undefined && freeLeft <= 0;

  // stop any running check and free the video only when leaving the page
  const videoRef = useRef<string | null>(null);
  videoRef.current = video;
  useEffect(() => () => { abort.current?.abort(); if (videoRef.current) URL.revokeObjectURL(videoRef.current); }, []);

  const finishWith = (tracked: Tracked) => {
    setStage("Checking your reps…");
    const report = analyze(tracked, lift);
    setResult({ tracked, report });
    if (report.reps.length || (lift === "plank" && report.score != null)) {
      const entry: Saved = { date: todayStr(), exercise, lift, score: report.score, reps: report.reps.length, headline: report.headline, checks: report.checks.map((c) => ({ id: c.id, label: c.label, status: c.status, summary: c.summary })) };
      const h = [entry, ...hist]; setHist(h); saveHist(id, h);
      if (freeLeft !== undefined) onUsed?.();
    }
  };

  /** Check a video: use the pose already tracked live by the camera, or step through the file. */
  const run = async (url: string, live: Tracked | null) => {
    if (locked) return;
    if (video) URL.revokeObjectURL(video);
    setVideo(url); setResult(null); setError(null);
    if (live) { finishWith(live); return; }
    setProgress(0); setStage("Loading the pose model…");
    const ac = new AbortController(); abort.current = ac;
    try {
      const tracked = await trackVideo(url, (p) => { setStage("Finding your body in each frame…"); setProgress(p); }, ac.signal);
      finishWith(tracked);
    } catch (e) {
      if ((e as Error).name !== "AbortError") setError((e as Error).message || "Something went wrong reading that video.");
    } finally {
      setProgress(null); abort.current = null;
    }
  };
  const start = (file: File) => run(URL.createObjectURL(file), null);
  const filmed = (f: Filmed) => { setCamera(false); void run(f.url, f.tracked); };

  return (
    <div className="stack">
      <section className="card">
        <div className="card-h">
          <div>
            <h2>Form check</h2>
            <p className="small muted" style={{ marginTop: 4 }}>Film a set and get a rep-by-rep breakdown. The video is checked on this phone and never uploaded.</p>
          </div>
          {freeLeft !== undefined && <span className={`pill ${locked ? "off" : "accent"}`}>{locked ? "Free check used" : `${freeLeft} free check`}</span>}
        </div>
        <div className="eyebrow" style={{ margin: "4px 0 8px" }}>What are you filming?</div>
        <div className="chips ex-pick" role="radiogroup" aria-label="Exercise">
          {mine.map((n) => (
            <button key={n} role="radio" aria-checked={!other && exercise === n} className="chip" aria-pressed={!other && exercise === n} onClick={() => { setOther(false); setExercise(n); }} disabled={progress != null}>{n}</button>
          ))}
          <button className="chip" aria-pressed={other} onClick={() => setOther(true)} disabled={progress != null}>{Icon.plus} Other exercise</button>
        </div>
        {other && (
          <div style={{ marginTop: 10 }}>
            <Select id="fc-other" label="Exercise" value={ALL_EXERCISES.includes(exercise) ? exercise : ALL_EXERCISES[0]} onChange={(v) => setExercise(v)} options={ALL_EXERCISES.map((n) => ({ value: n, label: n, hint: LIFTS[patternFor(n)].label }))} />
          </div>
        )}
        <div className="fc-pattern">
          <span className="pill accent">{LIFTS[lift].label}</span>
          <span className="small muted">Film {LIFTS[lift].view === "front" ? "facing the camera" : LIFTS[lift].view === "side" ? "side-on" : "from where you're clearly visible"} · phone at {LIFTS[lift].phone}</span>
        </div>
        <ul className="film-tips">{LIFTS[lift].tips.map((t) => <li key={t}>{t}</li>)}</ul>
        {locked ? (
          <div className="deload"><span className="at-icon">{Icon.lock}</span><div><b>You've used your free form check</b><div className="small muted">Unlimited checks come with Rep Ledger Pro.</div></div></div>
        ) : progress != null ? (
          <div className="fc-progress">
            <div className="spread small"><span>{stage}</span><b className="num">{Math.round(progress * 100)}%</b></div>
            <div className="meter"><i style={{ width: `${progress * 100}%` }} /></div>
            <button className="btn ghost sm" onClick={() => abort.current?.abort()}>Cancel</button>
          </div>
        ) : (
          <div className="row fc-actions">
            <button className="btn primary" onClick={() => setCamera(true)}>{Icon.video} Film a set</button>
            <label className="btn">{Icon.upload} Choose a video<input type="file" accept="video/*" hidden onChange={(e) => { const f = e.target.files?.[0]; e.target.value = ""; if (f) void start(f); }} /></label>
          </div>
        )}
        {error && <div className="form-err" style={{ marginTop: 12 }}>{error}</div>}
      </section>
      {camera && <CameraSession lift={lift} exercise={exercise} onDone={filmed} onClose={() => setCamera(false)} />}

      {result && video && <Results video={video} tracked={result.tracked} report={result.report} />}

      {hist.length > 0 && (
        <section className="card">
          <h2 style={{ marginBottom: 10 }}>Past checks</h2>
          <ul className="fc-hist">
            {hist.map((h, i) => (
              <li key={i}>
                <span className={`fc-score s-${scoreTone(h.score)}`}>{h.score ?? "–"}</span>
                <span className="fc-hmain"><b>{h.exercise ?? LIFTS[h.lift]?.label ?? "Set"} · {h.lift === "plank" ? h.headline.split(" - ")[0] : `${h.reps} reps`}</b><small>{shortDate(h.date)} · {h.headline}</small></span>
                <span className="fc-hflags">{h.checks.filter((c) => c.status === "warn" || c.status === "bad").map((c) => c.label).slice(0, 2).join(", ") || "All good"}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      <p className="xs faint coach-note">Form check is automated guidance from a camera, not a coach watching in person. If something hurts, stop and see a professional.</p>
    </div>
  );
}

const scoreTone = (s: number | null) => (s == null ? "na" : s >= 85 ? "good" : s >= 65 ? "warn" : "bad");

function Results({ video, tracked, report }: { video: string; tracked: Tracked; report: Report }) {
  const vid = useRef<HTMLVideoElement>(null);
  const cvs = useRef<HTMLCanvasElement>(null);
  const [cur, setCur] = useState<number | null>(null);
  const curRef = useRef<number | null>(null);

  // draw the skeleton over the video as it plays
  useEffect(() => {
    const v = vid.current, c = cvs.current;
    if (!v || !c) return;
    let raf = 0;
    const draw = () => {
      const ctx = c.getContext("2d");
      if (ctx) {
        const w = (c.width = v.clientWidth * devicePixelRatio), h = (c.height = v.clientHeight * devicePixelRatio);
        ctx.clearRect(0, 0, w, h);
        const f = frameAt(tracked.frames, v.currentTime);
        const rep = report.reps.find((r) => v.currentTime >= r.start && v.currentTime <= r.end);
        const n = rep ? rep.n : null;
        if (n !== curRef.current) { curRef.current = n; setCur(n); }
        const bad = rep && Object.values(rep.marks).some((m) => m === "bad");
        const warn = rep && Object.values(rep.marks).some((m) => m === "warn");
        const col = bad ? "#fbbf24" : warn ? "#a3e635" : "#22d3ee";
        if (f?.lm) {
          // fit the video's aspect ratio inside the element (object-fit: contain)
          const s = Math.min(w / tracked.width, h / tracked.height), ox = (w - tracked.width * s) / 2, oy = (h - tracked.height * s) / 2;
          const P = (i: number) => [ox + f.lm![i].x * tracked.width * s, oy + f.lm![i].y * tracked.height * s] as const;
          ctx.lineWidth = 4 * devicePixelRatio; ctx.lineCap = "round"; ctx.strokeStyle = col; ctx.shadowColor = col; ctx.shadowBlur = 8;
          for (const [a, b] of BONES) {
            if (f.lm[a].v < 0.4 || f.lm[b].v < 0.4) continue;
            const [x1, y1] = P(a), [x2, y2] = P(b);
            ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
          }
          ctx.shadowBlur = 0; ctx.fillStyle = "#fff";
          for (const i of [11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28]) {
            if (f.lm[i].v < 0.4) continue;
            const [x, y] = P(i); ctx.beginPath(); ctx.arc(x, y, 4 * devicePixelRatio, 0, Math.PI * 2); ctx.fill();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [tracked, report]);

  const seek = (t: number) => { const v = vid.current; if (v) { v.currentTime = t; void v.play().catch(() => undefined); } };
  const r = report;
  const graded = r.checks.filter((c) => c.status !== "na");

  return (
    <section className="card fc-result">
      <div className="fc-head">
        {r.score != null && <span className={`fc-score big s-${scoreTone(r.score)}`}>{r.score}</span>}
        <div>
          <div className="eyebrow">{LIFTS[r.lift].label} · {r.lift === "plank" ? "hold" : `${r.reps.length} rep${r.reps.length === 1 ? "" : "s"}`} · filmed {r.view === "side" ? "side-on" : "front-on"}</div>
          <h2 className="coach-headline" style={{ margin: "4px 0 0" }}>{r.headline}</h2>
          {r.tempo && <div className="small muted">About {fmt(r.tempo.down, 1)} s down, {fmt(r.tempo.up, 1)} s up</div>}
        </div>
      </div>
      {r.problems.length > 0 && <div className="notice warn">{r.problems.map((p) => <div key={p}>{p}</div>)}</div>}

      <div className="fc-player">
        <video ref={vid} src={video + "#t=0.001"} controls playsInline muted loop preload="auto" />
        <canvas ref={cvs} aria-hidden="true" />
      </div>
      {r.reps.length > 0 && (
        <div className="fc-reps" role="group" aria-label="Jump to a rep">
          {r.reps.map((rep) => {
            const worst = Object.values(rep.marks).includes("bad") ? "bad" : Object.values(rep.marks).includes("warn") ? "warn" : "good";
            return <button key={rep.n} className={`fc-rep s-${worst}${cur === rep.n ? " on" : ""}`} onClick={() => seek(rep.start)}>Rep {rep.n}</button>;
          })}
        </div>
      )}

      {graded.length > 0 && (
        <ul className="fc-checks">
          {[...r.checks].sort((a, b) => order(a.status) - order(b.status)).map((c) => (
            <li key={c.id} className={STATUS[c.status].cls}>
              <div className="spread"><b>{c.label}</b><span className={`rec-tag ${STATUS[c.status].cls}`}>{STATUS[c.status].label}</span></div>
              <div className="small">{c.summary}</div>
              {c.status !== "good" && c.status !== "na" && <div className="small muted" style={{ marginTop: 2 }}>{c.detail}</div>}
              {c.cue && <div className="fc-cue">{Icon.target}<span>{c.cue}</span></div>}
              {c.perRep && c.perRep.length > 1 && (
                <div className="fc-dots" aria-label="Per rep">{c.perRep.map((m, i) => <i key={i} className={`s-${m ?? "na"}`} title={`Rep ${i + 1}: ${m ? STATUS[m].label : "not measured"}`} />)}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
const order = (s: string) => ({ bad: 0, warn: 1, good: 2, na: 3 } as Record<string, number>)[s] ?? 4;
