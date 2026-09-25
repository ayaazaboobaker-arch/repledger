/**
 * Live filming guide: looks at the camera picture a few times a second and says what to fix
 * before recording - "step back, your feet are cut off", "turn side-on", "hold still".
 */
import { LIFTS, type Lift } from "./analyze";
import type { Point } from "./pose";

const HEAD = [0], SH = [11, 12], EL = [13, 14], WR = [15, 16], HIP = [23, 24], KNEE = [25, 26], ANK = [27, 28];
const FULL = [...HEAD, ...SH, ...HIP, ...KNEE, ...ANK];
const UPPER = [...HEAD, ...SH, ...EL, ...WR, ...HIP];
const LOWER = [...HIP, ...KNEE, ...ANK];

/** Which body points must be in frame for each movement type */
export const NEEDS: Record<Lift, number[]> = {
  squat: FULL, deadlift: [...FULL, ...WR], press: UPPER, pushup: [...FULL, ...WR], bench: [...SH, ...EL, ...WR, ...HIP],
  pull: [...SH, ...EL, ...WR, ...HIP], row: [...SH, ...EL, ...WR, ...HIP], lunge: FULL, curl: UPPER, triceps: UPPER,
  dip: [...SH, ...EL, ...WR, ...HIP, ...KNEE], raise: UPPER, calf: [...LOWER, 31, 32], legcurl: LOWER, legext: LOWER,
  hipthrust: [...SH, ...HIP, ...KNEE, ...ANK], legpress: LOWER, plank: FULL, general: FULL,
};

export interface SetupItem { id: "found" | "frame" | "angle" | "still"; label: string; done: boolean }
export interface SetupState { items: SetupItem[]; message: string; ok: boolean }

const inFrame = (p: Point) => p.v > 0.5 && p.x > 0.02 && p.x < 0.98 && p.y > 0.01 && p.y < 0.99;

export function checkSetup(lm: Point[] | null, lift: Lift, aspect: number, recent: Point[][]): SetupState {
  const view = LIFTS[lift].view;
  const items: SetupItem[] = [
    { id: "found", label: "Step into the picture", done: false },
    { id: "frame", label: "Get the whole movement in frame", done: false },
    { id: "angle", label: view === "side" ? "Turn side-on to the camera" : view === "front" ? "Face the camera" : "Stand where the camera sees you clearly", done: false },
    { id: "still", label: "Hold still for a second", done: false },
  ];
  const out = (message: string) => ({ items, message, ok: items.every((i) => i.done) });
  if (!lm) return out("We can't see you yet - step into the picture");
  items[0].done = true;

  const need = NEEDS[lift];
  const missing = need.filter((i) => !inFrame(lm[i]));
  if (missing.length) {
    const low = missing.some((i) => [25, 26, 27, 28, 31, 32].includes(i));
    const high = missing.some((i) => [0, 15, 16].includes(i));
    const side = missing.some((i) => lm[i].x <= 0.02 || lm[i].x >= 0.98);
    return out(low && high ? "Step back - part of you is out of the picture"
      : low ? "Step back or tilt the phone down - your feet are cut off"
      : high ? "Step back or tilt the phone up - your head or hands are cut off"
      : side ? "Move to the middle of the picture" : "Make sure nothing is blocking the camera");
  }
  const ys = need.map((i) => lm[i].y), xs = need.map((i) => lm[i].x);
  if (Math.max(Math.max(...ys) - Math.min(...ys), (Math.max(...xs) - Math.min(...xs)) * Math.min(1, aspect)) < 0.3) return out("Come a little closer - you're quite small in the picture");
  items[1].done = true;

  // side-on vs front-on, in real proportions (the picture may be portrait or landscape)
  // (distances in any direction, so it also works lying on a bench or the floor)
  const d = (a: Point, b: Point) => Math.hypot((a.x - b.x) * aspect, a.y - b.y);
  const mid = (a: Point, b: Point) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: 0, v: 1 });
  const shW = d(lm[11], lm[12]);
  const torso = d(mid(lm[11], lm[12]), mid(lm[23], lm[24])) || 0.001;
  const ratio = shW / torso;
  if (view === "side" && ratio > 0.5) return out("Turn side-on - point your shoulder at the camera");
  if (view === "front" && ratio < 0.45) return out("Turn to face the camera");
  items[2].done = true;

  // still: hips barely moved over the last second
  if (recent.length >= 8) {
    const hx = recent.map((f) => (f[23].x + f[24].x) / 2), hy = recent.map((f) => (f[23].y + f[24].y) / 2);
    const move = Math.max(Math.max(...hx) - Math.min(...hx), Math.max(...hy) - Math.min(...hy));
    if (move < 0.03) items[3].done = true;
  }
  if (!items[3].done) return out("Get into your starting position and hold still");
  return out("Looking good - tap Start when you're ready");
}
