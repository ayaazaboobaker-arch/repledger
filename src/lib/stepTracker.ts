/**
 * Counts steps from the phone's motion sensor while the app is open.
 *
 * How: the accelerometer reports acceleration (incl. gravity) ~60×/s. Each
 * footstrike shows up as a bump in the overall magnitude. We smooth the
 * signal, subtract a slowly-moving baseline (gravity + posture), and count a
 * step each time the bump rises above a threshold - with a minimum gap between
 * steps so one footstrike can't count twice.
 *
 * Limits (browser rules, not ours): websites only receive motion data while
 * the page is open and the screen is on, and only over https (or localhost).
 * We hold a screen wake lock during a tracked walk/run to keep it counting.
 */
import { create } from "zustand";

type Kind = "walk" | "run";
export type SensorState = "idle" | "starting" | "live" | "no-sensor" | "denied" | "insecure";

interface TrackerState {
  kind: Kind;
  running: boolean;
  sensor: SensorState;
  steps: number;
  startedAt: number | null;
  pausedMs: number;
  lastStepAt: number | null;
}

export const useTracker = create<TrackerState>()(() => ({
  kind: "walk", running: false, sensor: "idle", steps: 0, startedAt: null, pausedMs: 0, lastStepAt: null,
}));

let smooth = 9.81, base = 9.81, armed = true, lastStep = 0, gotEvent = false;
let wake: { release: () => Promise<void> } | null = null;
let noSensorTimer: number | undefined;

const THRESH: Record<Kind, number> = { walk: 1.1, run: 2.2 };
const MIN_GAP: Record<Kind, number> = { walk: 280, run: 220 };

function onMotion(e: DeviceMotionEvent) {
  const a = e.accelerationIncludingGravity;
  if (!a || a.x == null || a.y == null || a.z == null) return;
  if (!gotEvent) {
    gotEvent = true;
    clearTimeout(noSensorTimer);
    useTracker.setState({ sensor: "live" });
  }
  const mag = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
  smooth = smooth * 0.75 + mag * 0.25;
  base = base * 0.985 + mag * 0.015;
  const dyn = smooth - base;
  const { kind } = useTracker.getState();
  const now = performance.now();
  if (armed && dyn > THRESH[kind] && now - lastStep > MIN_GAP[kind]) {
    armed = false;
    lastStep = now;
    useTracker.setState((s) => ({ steps: s.steps + 1, lastStepAt: Date.now() }));
  } else if (!armed && dyn < THRESH[kind] * 0.3) {
    armed = true;
  }
}

async function keepAwake() {
  try {
    const nav = navigator as Navigator & { wakeLock?: { request: (t: "screen") => Promise<{ release: () => Promise<void> }> } };
    wake = (await nav.wakeLock?.request("screen")) ?? null;
  } catch {
    wake = null;
  }
}
// The browser drops the wake lock when you switch apps; take it back when you return.
if (typeof document !== "undefined")
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && useTracker.getState().running) keepAwake();
  });

export async function startTracking(kind: Kind) {
  if (!window.isSecureContext) {
    useTracker.setState({ sensor: "insecure" });
    return;
  }
  if (typeof DeviceMotionEvent === "undefined") {
    useTracker.setState({ sensor: "no-sensor" });
    return;
  }
  // iPhone asks for permission, and only from a tap.
  const DM = DeviceMotionEvent as unknown as { requestPermission?: () => Promise<"granted" | "denied"> };
  if (typeof DM.requestPermission === "function") {
    try {
      if ((await DM.requestPermission()) !== "granted") {
        useTracker.setState({ sensor: "denied" });
        return;
      }
    } catch {
      useTracker.setState({ sensor: "denied" });
      return;
    }
  }
  smooth = base = 9.81; armed = true; lastStep = 0; gotEvent = false;
  useTracker.setState({ kind, running: true, sensor: "starting", steps: 0, startedAt: Date.now(), pausedMs: 0, lastStepAt: null });
  window.addEventListener("devicemotion", onMotion);
  noSensorTimer = window.setTimeout(() => {
    if (!gotEvent) {
      window.removeEventListener("devicemotion", onMotion);
      useTracker.setState({ running: false, sensor: "no-sensor", startedAt: null });
    }
  }, 2500);
  keepAwake();
}

/** Stops tracking and returns what was recorded. */
export function stopTracking() {
  window.removeEventListener("devicemotion", onMotion);
  clearTimeout(noSensorTimer);
  wake?.release().catch(() => {});
  wake = null;
  const s = useTracker.getState();
  const seconds = s.startedAt ? Math.round((Date.now() - s.startedAt) / 1000) : 0;
  useTracker.setState({ running: false, sensor: "idle", startedAt: null });
  return { kind: s.kind, steps: s.steps, seconds, start: s.startedAt ?? Date.now() };
}

export function setKind(kind: Kind) {
  useTracker.setState({ kind });
}

/** Typical step length: ~41% of height walking, ~65% running. */
export const strideM = (heightCm: number, kind: Kind) => (heightCm / 100) * (kind === "run" ? 0.65 : 0.414);
/** Rough energy cost per step, scaled by body weight. */
export const kcalFor = (steps: number, weightKg: number, kind: Kind) => steps * weightKg * (kind === "run" ? 0.0011 : 0.0005);
