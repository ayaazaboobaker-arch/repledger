import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BONES, LIFTS, type Lift } from "../../lib/form/analyze";
import { detectLive, loadPose, type Point, type PoseFrame, type Tracked } from "../../lib/form/pose";
import { checkSetup, type SetupState } from "../../lib/form/setup";
import { Icon } from "../ui";

/**
 * Full-screen camera for filming a set:
 *  1. setup - live guide checks framing, angle and stillness, one step at a time
 *  2. countdown - 3, 2, 1 (with a beep and a buzz) so you can get into position
 *  3. recording - the video is recorded AND the pose is tracked live, so results are instant
 * Nothing leaves the phone.
 */
export interface Filmed { url: string; tracked: Tracked | null }

const MAX_SECONDS = 90;
const MIME = ["video/mp4;codecs=avc1", "video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];

export function CameraSession({ lift, exercise, onDone, onClose }: { lift: Lift; exercise: string; onDone: (f: Filmed) => void; onClose: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const [facing, setFacing] = useState<"user" | "environment">("user");
  const [phase, setPhase] = useState<"starting" | "setup" | "countdown" | "recording" | "saving">("starting");
  const [error, setError] = useState<string | null>(null);
  const [setup, setSetup] = useState<SetupState | null>(null);
  const [count, setCount] = useState(3);
  const [secs, setSecs] = useState(0);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;
  const rec = useRef<{ recorder: MediaRecorder; chunks: Blob[]; t0: number; frames: PoseFrame[] } | null>(null);
  const readySince = useRef<number | null>(null);

  // camera on / off
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setPhase("starting"); setError(null);
      if (!navigator.mediaDevices?.getUserMedia) {
        setError(location.protocol === "https:" || location.hostname === "localhost" ? "This browser can't use the camera. Try Safari or Chrome, or choose a video instead." : "The camera only works on a secure (https) address. Open the app from its web address, or choose a video instead.");
        return;
      }
      try {
        stream.current?.getTracks().forEach((t) => t.stop());
        const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: facing, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
        if (cancelled) { s.getTracks().forEach((t) => t.stop()); return; }
        stream.current = s;
        const v = video.current!;
        v.srcObject = s;
        await v.play().catch(() => undefined);
        await loadPose();
        if (!cancelled) setPhase("setup");
      } catch (e) {
        const name = (e as Error).name;
        setError(name === "NotAllowedError" ? "Camera access was blocked. Allow the camera for this site in your browser settings, then try again." : name === "NotFoundError" ? "No camera found on this device." : "Couldn't start the camera: " + (e as Error).message);
      }
    })();
    return () => { cancelled = true; };
  }, [facing]);
  useEffect(() => () => { stream.current?.getTracks().forEach((t) => t.stop()); rec.current?.recorder.state === "recording" && rec.current.recorder.stop(); }, []);

  // keep the screen awake while filming
  useEffect(() => {
    let lock: { release: () => Promise<void> } | null = null;
    (navigator as Navigator & { wakeLock?: { request: (t: "screen") => Promise<{ release: () => Promise<void> }> } }).wakeLock?.request("screen").then((l) => { lock = l; }).catch(() => undefined);
    return () => { void lock?.release().catch(() => undefined); };
  }, []);

  // live pose loop: guide during setup, record frames during recording, draw the skeleton
  useEffect(() => {
    if (phase === "starting") return;
    let raf = 0, last = 0, stop = false;
    const recent: Point[][] = [];
    const tick = async (now: number) => {
      if (stop) return;
      raf = requestAnimationFrame(tick);
      if (now - last < 66) return; // ~15 a second
      last = now;
      const v = video.current, c = canvas.current;
      if (!v || !c) return;
      const pose = await loadPose();
      let lm: Point[] | null = null;
      try { lm = detectLive(pose, v); } catch { return; }
      draw(c, v, lm);
      const p = phaseRef.current;
      if (p === "setup") {
        if (lm) { recent.push(lm); if (recent.length > 15) recent.shift(); } else recent.length = 0;
        const st = checkSetup(lm, lift, v.videoWidth / (v.videoHeight || 1), recent);
        setSetup(st);
        if (st.ok) readySince.current ??= now; else readySince.current = null;
      } else if (p === "recording" && rec.current) {
        rec.current.frames.push({ t: (performance.now() - rec.current.t0) / 1000, lm });
      }
    };
    raf = requestAnimationFrame(tick);
    return () => { stop = true; cancelAnimationFrame(raf); };
  }, [phase, lift]);

  const beep = (hz: number, ms: number) => {
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx(); const o = ctx.createOscillator(); const g = ctx.createGain();
      o.frequency.value = hz; g.gain.value = 0.08; o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + ms / 1000);
      setTimeout(() => void ctx.close(), ms + 100);
    } catch { /* no sound */ }
    try { navigator.vibrate?.(40); } catch { /* no buzz */ }
  };

  const startCountdown = () => {
    setPhase("countdown");
    let n = 3; setCount(n); beep(660, 120);
    const iv = setInterval(() => {
      n--;
      if (n > 0) { setCount(n); beep(660, 120); }
      else { clearInterval(iv); beep(990, 250); startRecording(); }
    }, 1000);
  };

  const startRecording = () => {
    const s = stream.current;
    if (!s) return;
    const type = MIME.find((m) => typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(m));
    let recorder: MediaRecorder;
    try { recorder = new MediaRecorder(s, type ? { mimeType: type, videoBitsPerSecond: 2_500_000 } : undefined); }
    catch { setError("This browser can't record video. Film with your camera app and choose the video instead."); return; }
    const chunks: Blob[] = [];
    recorder.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
    rec.current = { recorder, chunks, t0: performance.now(), frames: [] };
    recorder.start(500);
    setSecs(0);
    setPhase("recording");
  };

  // recording clock + auto-stop
  useEffect(() => {
    if (phase !== "recording") return;
    const iv = setInterval(() => {
      const r = rec.current; if (!r) return;
      const s = Math.floor((performance.now() - r.t0) / 1000);
      setSecs(s);
      if (s >= MAX_SECONDS) finish();
    }, 250);
    return () => clearInterval(iv);
  });

  const finish = () => {
    const r = rec.current, v = video.current;
    if (!r || r.recorder.state !== "recording") return;
    setPhase("saving");
    r.recorder.onstop = () => {
      const blob = new Blob(r.chunks, { type: r.recorder.mimeType || "video/webm" });
      const url = URL.createObjectURL(blob);
      const duration = (performance.now() - r.t0) / 1000;
      const seen = r.frames.filter((f) => f.lm).length;
      // enough live readings? use them straight away; otherwise the video gets checked frame by frame
      const fps = r.frames.length / Math.max(0.1, duration);
      const tracked: Tracked | null = fps >= 7 && seen > 10 && v ? { frames: r.frames, width: v.videoWidth, height: v.videoHeight, duration, fps: Math.round(fps) } : null;
      stream.current?.getTracks().forEach((t) => t.stop());
      onDone({ url, tracked });
    };
    r.recorder.stop();
  };

  const cancel = () => {
    if (rec.current?.recorder.state === "recording") { rec.current.recorder.onstop = null; rec.current.recorder.stop(); }
    stream.current?.getTracks().forEach((t) => t.stop());
    onClose();
  };

  const meta = LIFTS[lift];
  const ready = setup?.ok;
  const mirror = facing === "user";

  return createPortal(
    <div className="cam" role="dialog" aria-label={`Film ${exercise}`}>
      <div className={`cam-stage${mirror ? " mirror" : ""}`}>
        <video ref={video} playsInline muted autoPlay />
        <canvas ref={canvas} aria-hidden="true" />
        {phase === "setup" && <div className={`cam-frame${ready ? " ok" : ""}`} aria-hidden="true" />}
      </div>

      <div className="cam-top">
        <button className="cam-btn" onClick={cancel} aria-label="Close camera">{Icon.x}</button>
        <div className="cam-title"><b>{exercise}</b>{meta.label.toLowerCase() !== exercise.toLowerCase() && <small>Checked as: {meta.label}</small>}</div>
        <button className="cam-btn" onClick={() => setFacing(facing === "user" ? "environment" : "user")} aria-label="Switch camera" disabled={phase === "recording" || phase === "countdown"}>{Icon.swap}</button>
      </div>

      {phase === "countdown" && <div className="cam-count" aria-live="assertive">{count}</div>}

      <div className="cam-panel">
        {error ? (
          <div className="cam-msg bad">{error}<button className="btn sm" style={{ marginTop: 10 }} onClick={cancel}>Back</button></div>
        ) : phase === "starting" ? (
          <div className="cam-msg">Starting the camera…</div>
        ) : phase === "setup" ? (
          <>
            <div className={`cam-msg${ready ? " ok" : ""}`} aria-live="polite">{setup?.message ?? "Looking for you…"}</div>
            <ol className="cam-steps">
              <li className="done"><span>{Icon.check}</span>Phone at {meta.phone}, propped up and still</li>
              {(setup?.items ?? []).map((it) => <li key={it.id} className={it.done ? "done" : ""}><span>{it.done ? Icon.check : null}</span>{it.label}</li>)}
            </ol>
            <div className="cam-actions">
              <button className="btn lg primary block" onClick={startCountdown}>{Icon.play} {ready ? "Start" : "Start anyway"}</button>
            </div>
            <p className="xs cam-hint">{meta.tips.join(" · ")}. Tap Start, you get 3 seconds to get set.</p>
          </>
        ) : phase === "countdown" ? (
          <div className="cam-msg">Get into position…</div>
        ) : phase === "recording" ? (
          <>
            <div className="cam-rec"><i />REC {Math.floor(secs / 60)}:{String(secs % 60).padStart(2, "0")}<span>Do your set, then tap Stop</span></div>
            <div className="cam-actions"><button className="btn lg block stop-btn" onClick={finish}>{Icon.stop} Stop</button></div>
          </>
        ) : (
          <div className="cam-msg">Saving…</div>
        )}
      </div>
    </div>,
    document.body,
  );
}

function draw(c: HTMLCanvasElement, v: HTMLVideoElement, lm: Point[] | null) {
  const ctx = c.getContext("2d");
  if (!ctx) return;
  const w = (c.width = c.clientWidth * devicePixelRatio), h = (c.height = c.clientHeight * devicePixelRatio);
  ctx.clearRect(0, 0, w, h);
  if (!lm || !v.videoWidth) return;
  // the video fills the screen (object-fit: cover), so crop the same way
  const s = Math.max(w / v.videoWidth, h / v.videoHeight), ox = (w - v.videoWidth * s) / 2, oy = (h - v.videoHeight * s) / 2;
  const P = (i: number) => [ox + lm[i].x * v.videoWidth * s, oy + lm[i].y * v.videoHeight * s] as const;
  ctx.lineWidth = 4 * devicePixelRatio; ctx.lineCap = "round"; ctx.strokeStyle = "rgba(34,211,238,.9)";
  for (const [a, b] of BONES) {
    if (lm[a].v < 0.5 || lm[b].v < 0.5) continue;
    const [x1, y1] = P(a), [x2, y2] = P(b);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  }
}
