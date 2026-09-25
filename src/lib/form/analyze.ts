/**
 * Form check rules. Takes the body points the pose model found in each frame and turns them into
 * reps and a list of checks - "good" or "work on" - with a plain-language cue for each.
 *
 * Everything is measured from joint angles and positions, scaled by your own limb lengths,
 * so it works for any height and camera distance. Side-on filming gives the most checks;
 * some checks (knees caving in, left/right balance) need a front view.
 */
import type { PoseFrame, Point, Tracked } from "./pose";

export type Lift =
  | "squat" | "deadlift" | "press" | "pushup" | "bench" | "pull" | "row" | "lunge" | "curl" | "triceps"
  | "dip" | "raise" | "calf" | "legcurl" | "legext" | "hipthrust" | "legpress" | "plank" | "general";
export type Status = "good" | "warn" | "bad";

/** How to film each movement type. `view` is what the live camera check asks for. */
export const LIFTS: Record<Lift, { label: string; view: "side" | "front" | "either"; phone: string; tips: string[] }> = {
  squat: { label: "Squat", view: "side", phone: "hip height, 2–3 m away", tips: ["Side-on, whole body in frame", "Front-on also checks your knees", "3–5 reps is plenty"] },
  deadlift: { label: "Hinge (deadlift, RDL)", view: "side", phone: "hip height, 2–3 m away", tips: ["Exactly side-on so the bar path shows", "Bar and whole body in frame", "Start recording before your first pull"] },
  press: { label: "Overhead press", view: "side", phone: "chest height, 2–3 m away", tips: ["Side-on (front-on checks left/right balance)", "Leave room above your head for lockout"] },
  pushup: { label: "Push-up", view: "side", phone: "on the floor, 2 m away", tips: ["Side-on at floor level", "Head to feet in frame"] },
  bench: { label: "Bench press", view: "side", phone: "bench height, 1.5–2 m away", tips: ["Side-on, level with the bench", "Bar, arms and torso in frame"] },
  pull: { label: "Pull-up / pulldown", view: "side", phone: "chest height, 2–3 m away", tips: ["Side-on, angled slightly up", "Hands and feet in frame at the bottom"] },
  row: { label: "Row", view: "side", phone: "hip height, 2 m away", tips: ["Side-on", "Arms, torso and hips in frame"] },
  lunge: { label: "Lunge / split squat", view: "side", phone: "hip height, 2–3 m away", tips: ["Side-on", "Both feet in frame the whole set"] },
  curl: { label: "Curl", view: "side", phone: "chest height, 2 m away", tips: ["Side-on so the elbow shows", "Head to hips in frame"] },
  triceps: { label: "Triceps extension", view: "side", phone: "chest height, 2 m away", tips: ["Side-on so the elbow shows", "Hands and hips in frame"] },
  dip: { label: "Dip", view: "side", phone: "chest height, 2–3 m away", tips: ["Side-on", "Head to knees in frame"] },
  raise: { label: "Raise (lateral, front)", view: "front", phone: "chest height, 2–3 m away", tips: ["Facing the camera for lateral raises", "Side-on for front raises", "Hands in frame at the top"] },
  calf: { label: "Calf raise", view: "side", phone: "on the floor or low, 1.5 m away", tips: ["Side-on", "Feet and knees clearly in frame"] },
  legcurl: { label: "Leg curl", view: "side", phone: "machine height, 2 m away", tips: ["Side-on to the machine", "Hips to feet in frame"] },
  legext: { label: "Leg extension", view: "side", phone: "seat height, 2 m away", tips: ["Side-on to the machine", "Hips to feet in frame"] },
  hipthrust: { label: "Hip thrust / bridge", view: "side", phone: "bench height, 2 m away", tips: ["Side-on", "Shoulders to feet in frame"] },
  legpress: { label: "Leg press", view: "side", phone: "seat height, 2 m away", tips: ["Side-on to the machine", "Hips, knees and feet in frame"] },
  plank: { label: "Plank / hold", view: "side", phone: "on the floor, 2 m away", tips: ["Side-on at floor level", "Head to feet in frame", "Record the whole hold"] },
  general: { label: "Other exercise", view: "either", phone: "2–3 m away", tips: ["Whole body in frame", "Side-on unless it's a side-to-side move"] },
};

export interface RepResult { n: number; start: number; bottom: number; end: number; down: number; up: number; marks: Record<string, Status> }
export interface Check { id: string; label: string; status: Status | "na"; summary: string; detail: string; cue?: string; perRep?: (Status | null)[] }
export interface Report {
  lift: Lift;
  view: "side" | "front";
  side: "left" | "right";
  reps: RepResult[];
  checks: Check[];
  score: number | null;
  headline: string;
  problems: string[];
  coverage: number;
  tempo: { down: number; up: number } | null;
}

/* ---------- geometry (in pixels, so a tall video's angles aren't squashed) ---------- */
type P = { x: number; y: number };
const L = { nose: 0, sh: [11, 12], el: [13, 14], wr: [15, 16], hip: [23, 24], knee: [25, 26], ank: [27, 28], heel: [29, 30], toe: [31, 32] } as const;
const dist = (a: P, b: P) => Math.hypot(a.x - b.x, a.y - b.y);
/** angle at b, in degrees */
function angle(a: P, b: P, c: P) {
  const v1 = { x: a.x - b.x, y: a.y - b.y }, v2 = { x: c.x - b.x, y: c.y - b.y };
  const d = Math.hypot(v1.x, v1.y) * Math.hypot(v2.x, v2.y) || 1;
  return (Math.acos(Math.max(-1, Math.min(1, (v1.x * v2.x + v1.y * v2.y) / d))) * 180) / Math.PI;
}
/** torso angle from vertical, degrees; positive = leaning the way you face */
function lean(sh: P, hip: P, facing: number) {
  return (Math.atan2((sh.x - hip.x) * facing, hip.y - sh.y) * 180) / Math.PI;
}
const median = (xs: number[]) => { const s = [...xs].sort((a, b) => a - b); return s.length ? s[Math.floor(s.length / 2)] : NaN; };
const pct = (xs: number[], q: number) => { const s = [...xs].sort((a, b) => a - b); return s[Math.min(s.length - 1, Math.max(0, Math.round(q * (s.length - 1))))]; };

interface Body { t: number; pts: P[]; vis: number[] }

/** Fill short gaps (up to 0.4 s) by joining the frames either side, and scale to pixels. */
function prepare(tr: Tracked): (Body | null)[] {
  const px = (p: Point): P => ({ x: p.x * tr.width, y: p.y * tr.height });
  const out: (Body | null)[] = tr.frames.map((f) => (f.lm ? { t: f.t, pts: f.lm.map(px), vis: f.lm.map((p) => p.v) } : null));
  const maxGap = Math.round(tr.fps * 0.4);
  for (let i = 0; i < out.length; i++) {
    if (out[i]) continue;
    let j = i; while (j < out.length && !out[j]) j++;
    const a = out[i - 1], b = out[j];
    if (a && b && j - i <= maxGap) {
      for (let k = i; k < j; k++) {
        const w = (k - i + 1) / (j - i + 1);
        out[k] = { t: tr.frames[k].t, pts: a.pts.map((p, n) => ({ x: p.x + (b.pts[n].x - p.x) * w, y: p.y + (b.pts[n].y - p.y) * w })), vis: a.vis.map((v, n) => Math.min(v, b.vis[n])) };
      }
    }
    i = j;
  }
  return out;
}

function smooth(xs: (number | null)[], r = 2): (number | null)[] {
  return xs.map((x, i) => {
    if (x == null) return null;
    let s = 0, n = 0;
    for (let k = i - r; k <= i + r; k++) { const v = xs[k]; if (v != null) { s += v; n++; } }
    return s / n;
  });
}

/**
 * Find reps in a signal. `rest` is where you are between reps: "high" (standing tall, arms straight)
 * or "low" (bar at the shoulders for a press). Hysteresis stops wobbles counting as reps.
 */
function findReps(sig: (number | null)[], times: number[], rest: "high" | "low", minRange: number) {
  const vals = sig.filter((v): v is number => v != null);
  if (vals.length < 10) return [];
  const lo = pct(vals, 0.05), hi = pct(vals, 0.95), R = hi - lo;
  if (R < minRange) return [];
  const s = sig.map((v) => (v == null ? null : rest === "high" ? v : -v));
  const top = rest === "high" ? hi - 0.3 * R : -lo - 0.3 * R;
  const bot = rest === "high" ? lo + 0.35 * R : -hi + 0.35 * R;
  const reps: { start: number; bottom: number; end: number }[] = [];
  let state: "top" | "bottom" | null = null, start = -1, lastTop = -1, extreme = -1;
  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (v == null) continue;
    if (v >= top) {
      if (state === "bottom" && extreme >= 0) { reps.push({ start: start >= 0 ? start : 0, bottom: extreme, end: i }); start = -1; }
      state = "top"; lastTop = i;
    } else if (v <= bot) {
      if (state !== "bottom") { start = state === "top" ? lastTop : 0; extreme = i; }
      state = "bottom";
      if (v < (s[extreme] ?? Infinity)) extreme = i;
    }
  }
  // widen each rep to where the movement really starts and finishes (near the top, not the trigger line),
  // without running into the rep before or after
  const near = rest === "high" ? hi - 0.08 * R : -lo - 0.08 * R;
  reps.forEach((r, i) => {
    const minI = i > 0 ? reps[i - 1].bottom + 1 : 0;
    const maxI = i < reps.length - 1 ? reps[i + 1].bottom - 1 : s.length - 1;
    let a = r.bottom;
    while (a - 1 >= minI && s[a - 1] != null && (s[a - 1] as number) < near && (s[a - 1] as number) >= (s[a] as number) - 0.5) a--;
    let b = r.bottom;
    while (b + 1 <= maxI && s[b + 1] != null && (s[b + 1] as number) < near && (s[b + 1] as number) >= (s[b] as number) - 0.5) b++;
    r.start = Math.max(minI, Math.min(r.start, a - 1 >= minI ? a - 1 : a));
    r.end = Math.min(maxI, Math.max(r.end, b + 1 <= maxI ? b + 1 : b));
  });
  return reps.filter((r) => times[r.end] - times[r.start] >= 0.6 && times[r.end] - times[r.start] <= 15);
}

/** worst-of-most: bad if half or more reps are bad, warn if any bad or half warn */
function overall(marks: (Status | null)[]): Status | "na" {
  const m = marks.filter((x): x is Status => !!x);
  if (!m.length) return "na";
  const bad = m.filter((x) => x === "bad").length, warn = m.filter((x) => x === "warn").length;
  if (bad * 2 >= m.length) return "bad";
  if (bad || warn * 2 >= m.length) return "warn";
  return "good";
}
const grade = (v: number, good: (v: number) => boolean, ok: (v: number) => boolean): Status => (good(v) ? "good" : ok(v) ? "warn" : "bad");
const countOf = (marks: (Status | null)[], s: Status[]) => marks.filter((x) => x && s.includes(x)).length;

export function analyze(tr: Tracked, lift: Lift): Report {
  const bodies = prepare(tr);
  const coverage = bodies.filter(Boolean).length / Math.max(1, bodies.length);
  const empty: Report = { lift, view: "side", side: "left", reps: [], checks: [], score: null, headline: "", problems: [], coverage, tempo: null };
  if (coverage < 0.5) {
    return { ...empty, headline: "We couldn't see you clearly", problems: ["The model only found you in " + Math.round(coverage * 100) + "% of the video.", "Film in good light with your whole body in frame, and nobody else in shot."] };
  }
  const valid = bodies.filter((b): b is Body => !!b);

  // which side faces the camera, and are we side-on or front-on?
  const visOf = (i: 0 | 1) => median(valid.map((b) => [L.sh, L.hip, L.knee, L.ank, L.el, L.wr].reduce((a, j) => a + b.vis[j[i]], 0)));
  const si = visOf(0) >= visOf(1) ? 0 : 1;
  const side = si === 0 ? "left" : "right";
  const shW = median(valid.map((b) => dist(b.pts[L.sh[0]], b.pts[L.sh[1]])));
  const torsoLen = median(valid.map((b) => dist(mid(b.pts[L.sh[0]], b.pts[L.sh[1]]), mid(b.pts[L.hip[0]], b.pts[L.hip[1]]))));
  const view: "side" | "front" = shW / (torsoLen || 1) > 0.5 ? "front" : "side";
  const J = (b: Body, j: readonly [number, number]) => (view === "front" ? mid(b.pts[j[0]], b.pts[j[1]]) : b.pts[j[si]]);
  const facing = Math.sign(median(valid.map((b) => b.pts[L.toe[si]].x - b.pts[L.heel[si]].x))) || 1;
  const thigh = median(valid.map((b) => dist(J(b, L.hip), J(b, L.knee))));
  const leg = median(valid.map((b) => dist(J(b, L.hip), J(b, L.ank))));
  const times = bodies.map((b, i) => b?.t ?? tr.frames[i].t);

  // the signal that goes up and down each rep
  const elbow = (b: Body) => angle(J(b, L.sh), J(b, L.el), J(b, L.wr));
  const kneeA = (b: Body) => angle(J(b, L.hip), J(b, L.knee), J(b, L.ank));
  const hipA = (b: Body) => angle(J(b, L.sh), J(b, L.hip), J(b, L.knee));
  const shoulderA = (b: Body) => angle(J(b, L.hip), J(b, L.sh), J(b, L.el));
  const ankleA = (b: Body) => angle(J(b, L.knee), J(b, L.ank), J(b, L.toe));
  const kneeOf = (b: Body, i: 0 | 1) => angle(b.pts[L.hip[i]], b.pts[L.knee[i]], b.pts[L.ank[i]]);
  const leanOf = (b: Body) => lean(J(b, L.sh), J(b, L.hip), facing);

  // the signal that goes up and down each rep, where you rest between reps, and the smallest real range
  const SIG: Partial<Record<Lift, { fn: (b: Body) => number; rest: "high" | "low"; min: number; ecc: "down" | "up" }>> = {
    squat: { fn: kneeA, rest: "high", min: 35, ecc: "down" },
    deadlift: { fn: hipA, rest: "high", min: 35, ecc: "down" },
    press: { fn: elbow, rest: "low", min: 45, ecc: "up" },
    pushup: { fn: elbow, rest: "high", min: 35, ecc: "down" },
    bench: { fn: elbow, rest: "high", min: 35, ecc: "down" },
    pull: { fn: elbow, rest: "high", min: 40, ecc: "up" },
    row: { fn: elbow, rest: "high", min: 30, ecc: "up" },
    lunge: { fn: (b) => Math.min(kneeOf(b, 0), kneeOf(b, 1)), rest: "high", min: 30, ecc: "down" },
    curl: { fn: elbow, rest: "high", min: 45, ecc: "up" },
    triceps: { fn: elbow, rest: "low", min: 35, ecc: "up" },
    dip: { fn: elbow, rest: "high", min: 30, ecc: "down" },
    raise: { fn: shoulderA, rest: "low", min: 35, ecc: "up" },
    calf: { fn: ankleA, rest: "low", min: 12, ecc: "up" },
    legcurl: { fn: kneeA, rest: "high", min: 40, ecc: "up" },
    legext: { fn: kneeA, rest: "low", min: 40, ecc: "up" },
    hipthrust: { fn: hipA, rest: "low", min: 30, ecc: "up" },
    legpress: { fn: kneeA, rest: "high", min: 35, ecc: "down" },
  };
  // "Other exercise": use whichever joint moves the most
  let generalJoint = "";
  if (lift === "general") {
    const cands: [string, (b: Body) => number][] = [["elbow", elbow], ["shoulder", shoulderA], ["hip", hipA], ["knee", kneeA]];
    let best = -1;
    for (const [name, fn] of cands) {
      const v = valid.map(fn); const r = pct(v, 0.95) - pct(v, 0.05);
      if (r > best) {
        best = r; generalJoint = name;
        const mid = (pct(v, 0.95) + pct(v, 0.05)) / 2;
        SIG.general = { fn, rest: median(v) >= mid ? "high" : "low", min: 25, ecc: "down" };
      }
    }
  }

  // holds (plank) have no reps: judge the position over time
  if (lift === "plank") {
    // lying flat = the shoulder-to-ankle line is near horizontal (hips can sag or pike without changing that)
    const flat = valid.filter((b) => { const sh = J(b, L.sh), an = J(b, L.ank); return Math.abs(Math.atan2(Math.abs(an.y - sh.y), Math.abs(an.x - sh.x)) * 180 / Math.PI) < 35; });
    if (flat.length < valid.length * 0.4) {
      return { ...empty, view, side, headline: "No plank found", problems: ["We couldn't see a plank position in this video.", "Film side-on at floor level with your whole body in frame."] };
    }
    const devs = flat.map((b) => { const sh = J(b, L.sh), hip = J(b, L.hip), an = J(b, L.ank); const dev = 180 - angle(sh, hip, an); const lineY = sh.y + ((an.y - sh.y) * (hip.x - sh.x)) / ((an.x - sh.x) || 1); return hip.y > lineY ? dev : -dev; });
    const dev = median(devs), shake = pct(devs, 0.9) - pct(devs, 0.1);
    const held = (flat.length / valid.length) * tr.duration * coverage;
    const checks: Check[] = [];
    const st = grade(Math.abs(dev), (v) => v <= 10, (v) => v <= 18);
    checks.push({ id: "line", label: "Straight body line", status: st, summary: st === "good" ? "Head to heels in a line" : dev > 0 ? "Hips sagging" : "Hips too high", detail: st === "good" ? "You held a solid plank position." : dev > 0 ? "Your hips drop below the line from shoulders to ankles, loading your lower back." : "Your hips are raised, which takes work off your core.", cue: st === "good" ? undefined : dev > 0 ? "Squeeze your glutes and pull your belly button in." : "Lower your hips until you're one straight line." });
    const s2 = grade(shake, (v) => v <= 8, (v) => v <= 15);
    checks.push({ id: "steady", label: "Staying steady", status: s2, summary: s2 === "good" ? "Rock solid" : "Position drifting", detail: s2 === "good" ? "Your position barely moved." : "Your hips moved up and down during the hold - a sign you're near your limit.", cue: s2 === "good" ? undefined : "End the hold when you can't keep the line; build time gradually." });
    const score = Math.round(((st === "good" ? 1 : st === "warn" ? 0.6 : 0.2) + (s2 === "good" ? 1 : s2 === "warn" ? 0.6 : 0.2)) / 2 * 100);
    return { ...empty, view, side, checks, score, headline: `${Math.round(held)} s hold${st === "good" && s2 === "good" ? " - solid" : ""}`, tempo: null };
  }

  const cfg = SIG[lift]!;
  const sigFn = { [lift]: cfg.fn } as Record<Lift, (b: Body) => number>;
  const sig = smooth(bodies.map((b) => (b ? cfg.fn(b) : null)));
  const rest = cfg.rest;
  const found = findReps(sig, times, rest, cfg.min);
  if (!found.length) {
    return { ...empty, view, side, headline: "No full reps found", problems: [
      `We could see you, but couldn't find a complete ${LIFTS[lift].label.toLowerCase()} rep.`,
      "Check you picked the right exercise, film the whole movement from start to lockout, and keep the phone still.",
    ] };
  }

  const at = (i: number) => bodies[i]!;
  const near = (i: number, fn: (b: Body) => number, pick: "max" | "min", win = Math.round(tr.fps * 0.3)) => {
    let best = pick === "max" ? -Infinity : Infinity;
    for (let k = Math.max(0, i - win); k <= Math.min(bodies.length - 1, i + win); k++) {
      const b = bodies[k]; if (!b) continue;
      const v = fn(b); best = pick === "max" ? Math.max(best, v) : Math.min(best, v);
    }
    return best;
  };
  // standing baseline (for heel lift): frames in the top zone
  const topFrames = valid.filter((b) => sigFn[lift](b) >= pct(sig.filter((v): v is number => v != null), 0.8));

  const reps: RepResult[] = found.map((r, n) => ({ n: n + 1, start: times[r.start], bottom: times[r.bottom], end: times[r.end], down: times[r.bottom] - times[r.start], up: times[r.end] - times[r.bottom], marks: {} }));
  const checks: Check[] = [];
  const add = (id: string, label: string, marks: (Status | null)[], text: Record<Status, { summary: string; detail: string; cue?: string }>, extra?: string) => {
    const st = overall(marks);
    marks.forEach((m, i) => { if (m) reps[i].marks[id] = m; });
    if (st === "na") { checks.push({ id, label, status: "na", summary: "Not visible", detail: extra ?? "Couldn't measure this from this angle." }); return; }
    const t = text[st];
    const n = countOf(marks, st === "good" ? ["good"] : ["warn", "bad"]);
    const of = marks.filter(Boolean).length;
    checks.push({ id, label, status: st, summary: t.summary + (of > 1 ? ` · ${n} of ${of} reps` : ""), detail: t.detail, cue: st === "good" ? undefined : t.cue, perRep: marks });
  };
  const vis = (b: Body, j: number) => b.vis[j] > 0.5;

  if (lift === "squat") {
    if (view === "side") {
      add("depth", "Depth", found.map((r) => {
        const b = at(r.bottom); const d = (J(b, L.hip).y - J(b, L.knee).y) / (thigh || 1);
        // the hip joint sits ~10% of a thigh above the hip crease, so parallel reads about -0.12
        return grade(d, (v) => v >= -0.12, (v) => v >= -0.28);
      }), {
        good: { summary: "Hip crease at or below the knee", detail: "You're reaching a full-depth squat." },
        warn: { summary: "A little above parallel", detail: "Most reps stop just short of your hip crease reaching knee level.", cue: "Sit a touch deeper - aim for hips level with knees. Lighten the load if it's stopping you." },
        bad: { summary: "Well above parallel", detail: "Reps are stopping high, which leaves strength on the table.", cue: "Drop the weight and practise sitting down between your heels. A box at knee height helps you find depth." },
      });
      add("torso", "Chest position", found.map((r) => grade(lean(J(at(r.bottom), L.sh), J(at(r.bottom), L.hip), facing), (v) => v <= 45, (v) => v <= 58)), {
        good: { summary: "Chest stays up", detail: "Your torso angle at the bottom is well controlled." },
        warn: { summary: "Leaning forward at the bottom", detail: "Your chest drops forward more than ideal at the bottom.", cue: "Brace hard before each rep and push your chest up as you stand. Heel wedges or squat shoes help if ankles are tight." },
        bad: { summary: "Folding forward", detail: "Your chest drops a lot, turning the squat into a good-morning.", cue: "Lighten the load, brace, and keep your chest facing forward. Try goblet squats to groove the position." },
      });
      const baseHeel = median(topFrames.map((b) => b.pts[L.heel[si]].y));
      add("heels", "Heels", found.map((r) => {
        const b = at(r.bottom); if (!vis(b, L.heel[si])) return null;
        return grade((baseHeel - b.pts[L.heel[si]].y) / (leg || 1), (v) => v < 0.035, (v) => v < 0.07);
      }), {
        good: { summary: "Heels stay down", detail: "Your weight stays over mid-foot." },
        warn: { summary: "Heels lifting a little", detail: "Your heels come up slightly at the bottom.", cue: "Push through your whole foot. Work on ankle mobility, or try a small plate under your heels." },
        bad: { summary: "Heels coming off the floor", detail: "Your weight shifts onto your toes at the bottom.", cue: "Widen your stance slightly, sit back more and keep heels planted. Ankle mobility work will help." },
      }, "Heels weren't clear enough to check - make sure your feet are in frame.");
    } else {
      add("knees", "Knees", found.map((r) => {
        const b = at(r.bottom);
        const kw = Math.abs(b.pts[L.knee[0]].x - b.pts[L.knee[1]].x), aw = Math.abs(b.pts[L.ank[0]].x - b.pts[L.ank[1]].x);
        return grade(kw / (aw || 1), (v) => v >= 0.9, (v) => v >= 0.75);
      }), {
        good: { summary: "Knees track over your feet", detail: "Your knees stay out in line with your toes." },
        warn: { summary: "Knees drifting in", detail: "Your knees move inside your feet a little as you drive up.", cue: "Think 'spread the floor' with your feet and push knees out over your toes." },
        bad: { summary: "Knees caving in", detail: "Your knees collapse inward - that loads the knee joint.", cue: "Lighten the load, push knees out, and add banded squats or glute work to strengthen the pattern." },
      });
      add("shift", "Left/right balance", found.map((r) => {
        const b = at(r.bottom); const tilt = Math.abs(b.pts[L.hip[0]].y - b.pts[L.hip[1]].y) / (shW || 1);
        return grade(tilt, (v) => v < 0.12, (v) => v < 0.22);
      }), {
        good: { summary: "Even on both sides", detail: "Your hips stay level." },
        warn: { summary: "Shifting to one side", detail: "Your hips tilt a little to one side at the bottom.", cue: "Film again from the side to check depth, and practise slow, even reps." },
        bad: { summary: "Clear shift to one side", detail: "You're favouring one leg.", cue: "Drop the weight, slow down, and add single-leg work like split squats." },
      });
      checks.push({ id: "depth", label: "Depth", status: "na", summary: "Film side-on to check", detail: "Depth can only be measured from the side." });
    }
    add("lockout", "Standing tall", found.map((r) => grade(near(r.end, (b) => angle(J(b, L.hip), J(b, L.knee), J(b, L.ank)), "max"), (v) => v >= 163, (v) => v >= 150)), {
      good: { summary: "Full lockout each rep", detail: "You finish every rep standing tall." },
      warn: { summary: "Not quite locking out", detail: "Some reps finish with soft knees.", cue: "Stand all the way up and squeeze your glutes at the top before the next rep." },
      bad: { summary: "Cutting reps short", detail: "Reps finish well before standing tall.", cue: "Finish each rep fully - partial reps don't count towards progress." },
    });
    add("tempo", "Control on the way down", reps.map((r) => grade(r.down, (v) => v >= 0.9, (v) => v >= 0.5)), {
      good: { summary: "Controlled descent", detail: "You lower under control." },
      warn: { summary: "A bit quick going down", detail: "You're dropping into the bottom quite fast.", cue: "Take about 2 seconds on the way down, then drive up." },
      bad: { summary: "Dropping into the bottom", detail: "Very fast descents make depth and knees hard to control.", cue: "Slow the way down to 2 seconds - it also builds more muscle." },
    });
  }

  if (lift === "deadlift") {
    add("lockout", "Lockout", found.map((r) => {
      const hip = near(r.end, (b) => angle(J(b, L.sh), J(b, L.hip), J(b, L.knee)), "max");
      const knee = near(r.end, (b) => angle(J(b, L.hip), J(b, L.knee), J(b, L.ank)), "max");
      return grade(Math.min(hip, knee + 5), (v) => v >= 163, (v) => v >= 150);
    }), {
      good: { summary: "Hips and knees fully locked", detail: "You finish every rep standing tall." },
      warn: { summary: "Soft lockout", detail: "Some reps finish with hips not quite through.", cue: "Squeeze your glutes to finish - stand tall, don't lean back." },
      bad: { summary: "Not finishing the pull", detail: "Reps end before you're standing upright.", cue: "Drive your hips forward to stand fully upright at the top of every rep." },
    });
    add("hips", "Hips and chest rise together", found.map((r) => {
      // start of the pull = lowest hip position (when hips shoot up, the hip angle keeps closing after this)
      let i0 = r.bottom;
      for (let k = r.start; k <= r.end; k++) if (bodies[k] && J(at(k), L.hip).y > J(at(i0), L.hip).y) i0 = k;
      const i1 = Math.min(r.end, i0 + Math.max(2, Math.round((r.end - i0) / 3)));
      if (!bodies[i1]) return null;
      const hipRise = J(at(i0), L.hip).y - J(at(i1), L.hip).y, shRise = J(at(i0), L.sh).y - J(at(i1), L.sh).y;
      if (hipRise <= 0) return "good";
      return grade(hipRise / Math.max(1, shRise), (v) => v < 1.5, (v) => v < 2.2);
    }), {
      good: { summary: "Chest and hips rise together", detail: "You push the floor away with your legs and back working as one." },
      warn: { summary: "Hips rising a bit first", detail: "Your hips shoot up slightly before your chest.", cue: "Take the slack out of the bar first, then push the floor away with your legs - chest and hips rise together." },
      bad: { summary: "Hips shooting up", detail: "Your hips rise well before your chest, turning it into a stiff-leg pull and loading your lower back.", cue: "Lighten the load. Start with hips a little lower and 'leg press' the floor away." },
    });
    add("bar", "Bar close to you", found.map((r) => {
      const b = at(r.bottom); if (!vis(b, L.wr[si])) return null;
      const foot = mid(b.pts[L.heel[si]], b.pts[L.toe[si]]);
      return grade(Math.abs(b.pts[L.wr[si]].x - foot.x) / (leg || 1), (v) => v < 0.12, (v) => v < 0.2);
    }), {
      good: { summary: "Bar over mid-foot", detail: "Your hands (and the bar) stay over your mid-foot." },
      warn: { summary: "Bar drifting forward", detail: "The bar is a little in front of your mid-foot at the bottom.", cue: "Pull the bar into your shins and keep it brushing your legs all the way up." },
      bad: { summary: "Bar far from your body", detail: "The bar is well in front of your feet, which strains your back.", cue: "Set up with the bar over your laces and drag it up your legs." },
    }, "Hands weren't clear enough to check - film exactly side-on.");
    add("leanback", "No leaning back", found.map((r) => grade(-near(r.end, (b) => lean(J(b, L.sh), J(b, L.hip), facing), "min"), (v) => v <= 8, (v) => v <= 16)), {
      good: { summary: "Stands tall at the top", detail: "No over-leaning at lockout." },
      warn: { summary: "Leaning back at the top", detail: "You lean back a little past standing.", cue: "Finish with glutes, ribs down - standing straight is enough." },
      bad: { summary: "Big lean back at the top", detail: "Leaning back compresses your lower back.", cue: "Stop when you're standing straight; squeeze glutes, don't arch." },
    });
  }

  if (lift === "press") {
    add("lockout", "Arms locked overhead", found.map((r) => grade(near(r.bottom, (b) => angle(J(b, L.sh), J(b, L.el), J(b, L.wr)), "max"), (v) => v >= 160, (v) => v >= 145)), {
      good: { summary: "Full lockout", detail: "Your arms straighten fully at the top." },
      warn: { summary: "Nearly locked out", detail: "Some reps stop with slightly bent elbows.", cue: "Push until your elbows lock and your head comes 'through the window'." },
      bad: { summary: "Stopping short", detail: "Reps stop well before full lockout.", cue: "Lighten the weight and press to a full lockout every rep." },
    });
    add("overhead", "Bar over your head", found.map((r) => {
      const b = at(r.bottom); const wr = J(b, L.wr), nose = b.pts[L.nose];
      return grade((nose.y - wr.y) / (torsoLen || 1), (v) => v >= 0.35, (v) => v >= 0.15);
    }), {
      good: { summary: "Pressed right overhead", detail: "Your hands finish well above your head." },
      warn: { summary: "Finishing a bit low", detail: "Your hands finish not far above your head.", cue: "Press up and slightly back so the bar ends over the middle of your head." },
      bad: { summary: "Not getting overhead", detail: "The bar isn't getting fully overhead.", cue: "Work on shoulder mobility and use a lighter load to press to full height." },
    });
    if (view === "side") {
      add("lean", "Ribs down, no leaning back", found.map((r) => grade(-lean(J(at(r.bottom), L.sh), J(at(r.bottom), L.hip), facing), (v) => v <= 10, (v) => v <= 20)), {
        good: { summary: "Stays upright", detail: "Your torso stays stacked as you press." },
        warn: { summary: "Leaning back a little", detail: "You arch back slightly to get the bar up.", cue: "Squeeze your glutes and brace your abs - ribs down - before each rep." },
        bad: { summary: "Leaning back a lot", detail: "A big backward lean turns it into an incline press and stresses your lower back.", cue: "Lighten the load, squeeze glutes hard and keep ribs down." },
      });
    } else {
      add("even", "Both arms even", found.map((r) => {
        const b = at(r.bottom); return grade(Math.abs(b.pts[L.wr[0]].y - b.pts[L.wr[1]].y) / (shW || 1), (v) => v < 0.12, (v) => v < 0.22);
      }), {
        good: { summary: "Both sides even", detail: "Your hands reach the same height." },
        warn: { summary: "One arm a bit lower", detail: "One side lags slightly at the top.", cue: "Press evenly; add single-arm dumbbell presses for the weaker side." },
        bad: { summary: "Clearly uneven", detail: "One arm is well behind the other.", cue: "Drop the weight and add single-arm work for the weaker side." },
      });
    }
    add("range", "Full range at the bottom", found.map((r) => grade(near(r.start, (b) => angle(J(b, L.sh), J(b, L.el), J(b, L.wr)), "min", Math.round(tr.fps * 0.5)), (v) => v <= 95, (v) => v <= 115)), {
      good: { summary: "Down to your shoulders", detail: "Each rep starts from the shoulders." },
      warn: { summary: "Stopping a bit high", detail: "Some reps don't come all the way down.", cue: "Bring the bar to your chin or collarbone between reps." },
      bad: { summary: "Half reps", detail: "Reps don't come near your shoulders.", cue: "Use a full range - bar to collarbone every rep." },
    });
  }

  if (lift === "pushup") {
    add("depth", "Depth", found.map((r) => grade(near(r.bottom, (b) => angle(J(b, L.sh), J(b, L.el), J(b, L.wr)), "min", 2), (v) => v <= 95, (v) => v <= 115)), {
      good: { summary: "Chest close to the floor", detail: "Your elbows bend to 90° or more." },
      warn: { summary: "A little shallow", detail: "Some reps stop before a 90° elbow bend.", cue: "Lower until your chest is a fist from the floor." },
      bad: { summary: "Half reps", detail: "Reps stop well short.", cue: "Do fewer, deeper reps - or elevate your hands on a bench until you can go all the way." },
    });
    let sag = 0, pike = 0;
    add("line", "Straight body line", found.map((r) => {
      let worst = 0, sign = 0;
      for (let k = r.start; k <= r.end; k++) {
        const b = bodies[k]; if (!b) continue;
        const sh = J(b, L.sh), hip = J(b, L.hip), an = J(b, L.ank);
        const dev = 180 - angle(sh, hip, an);
        if (dev > worst) { worst = dev; const lineY = sh.y + ((an.y - sh.y) * (hip.x - sh.x)) / ((an.x - sh.x) || 1); sign = hip.y > lineY ? 1 : -1; }
      }
      if (worst > 12) { if (sign > 0) sag++; else pike++; }
      return grade(worst, (v) => v <= 12, (v) => v <= 20);
    }), {
      good: { summary: "Head to heels in a line", detail: "Your body stays like a plank." },
      warn: { summary: "Line breaking a little", detail: "Your hips drift out of line slightly.", cue: "Squeeze glutes and brace abs - think plank that moves." },
      bad: { summary: "Line breaking", detail: "Your hips move well out of line.", cue: "Brace hard; if it keeps happening, do them from your knees or with hands raised until your core catches up." },
    });
    const line = checks.find((c) => c.id === "line");
    if (line && line.status !== "good" && line.status !== "na") line.summary = (sag >= pike ? "Hips sagging" : "Hips piking up") + line.summary.replace(/^[^·]*/, " ");
    add("lockout", "Arms straight at the top", found.map((r) => grade(near(r.end, (b) => angle(J(b, L.sh), J(b, L.el), J(b, L.wr)), "max"), (v) => v >= 155, (v) => v >= 140)), {
      good: { summary: "Full push each rep", detail: "You push all the way up." },
      warn: { summary: "Not quite straight", detail: "Some reps stop short of straight arms.", cue: "Push the floor away until your arms are straight." },
      bad: { summary: "Cutting reps short", detail: "Reps stop well before the top.", cue: "Finish every rep with straight arms." },
    });
    add("tempo", "Control on the way down", reps.map((r) => grade(r.down, (v) => v >= 0.7, (v) => v >= 0.4)), {
      good: { summary: "Controlled", detail: "You lower under control." },
      warn: { summary: "A bit quick", detail: "You drop down fairly fast.", cue: "Take about 2 seconds to lower." },
      bad: { summary: "Dropping down", detail: "Very fast reps usually hide a short range.", cue: "Slow down: 2 seconds down, 1 up." },
    });
  }

  /* ---------- shared checks for the other movement types ---------- */
  const over = (r: { start: number; end: number }, fn: (b: Body) => number) => {
    const v: number[] = [];
    for (let k = r.start; k <= r.end; k++) if (bodies[k]) v.push(fn(bodies[k]!));
    return v.length ? { min: Math.min(...v), max: Math.max(...v), range: Math.max(...v) - Math.min(...v) } : { min: NaN, max: NaN, range: 0 };
  };
  const ecc = (r: RepResult) => (cfg.ecc === "down" ? r.down : r.up);
  const tempo = (min: number) => add("tempo", "Control on the way back", reps.map((r) => grade(ecc(r), (v) => v >= min, (v) => v >= min * 0.55)), {
    good: { summary: "Controlled lowering", detail: "You control the weight on the way back." },
    warn: { summary: "A bit quick on the way back", detail: "You let the weight return fairly fast.", cue: "Take about 2 seconds on the way back - that half of the rep builds muscle too." },
    bad: { summary: "Letting it drop", detail: "The weight falls back with little control.", cue: "Slow the return to 2 seconds. Drop the weight if you can't." },
  });
  const steady = (limit: number, what: string) => add("steady", "No body swing", found.map((r) => grade(over(r, leanOf).range, (v) => v <= limit, (v) => v <= limit * 2)), {
    good: { summary: "Body stays still", detail: `Your ${what} does the work, not momentum.` },
    warn: { summary: "Some body swing", detail: "Your torso rocks a little to help the weight move.", cue: "Brace and keep your torso still. If you have to swing, the weight is too heavy." },
    bad: { summary: "Swinging the weight", detail: "Momentum is doing a lot of the work.", cue: "Lighten the load and move only at the working joint. Try it with your back against a wall." },
  });
  const extreme = (i: number, fn: (b: Body) => number, pick: "min" | "max") => near(i, fn, pick, 2);

  if (lift === "bench") {
    add("depth", "Range of motion", found.map((r) => grade(extreme(r.bottom, elbow, "min"), (v) => v <= 95, (v) => v <= 112)), {
      good: { summary: "Bar to your chest", detail: "Each rep comes all the way down." },
      warn: { summary: "Stopping a bit high", detail: "Some reps stop short of your chest.", cue: "Touch your lower chest lightly every rep, without bouncing." },
      bad: { summary: "Half reps", detail: "Reps stop well above your chest.", cue: "Lighten the load and use a full range - touch, then press." },
    });
    add("lockout", "Lockout", found.map((r) => grade(near(r.end, elbow, "max"), (v) => v >= 155, (v) => v >= 140)), {
      good: { summary: "Arms locked at the top", detail: "You finish each rep with straight arms." },
      warn: { summary: "Soft lockout", detail: "Some reps finish with bent elbows.", cue: "Press until your elbows lock before the next rep." },
      bad: { summary: "Not finishing reps", detail: "Reps stop well short of the top.", cue: "Finish every rep with straight arms." },
    });
    add("stack", "Wrists over elbows", found.map((r) => {
      const b = at(r.bottom); const fore = dist(J(b, L.el), J(b, L.wr)) || 1;
      return grade(Math.abs(J(b, L.wr).x - J(b, L.el).x) / fore, (v) => v <= 0.35, (v) => v <= 0.55);
    }), {
      good: { summary: "Forearms vertical", detail: "Your wrists stay over your elbows at the bottom - the strongest position." },
      warn: { summary: "Forearms tilting", detail: "Your wrists drift away from over your elbows at the bottom.", cue: "Adjust your grip width so your forearms are vertical when the bar touches your chest." },
      bad: { summary: "Forearms well off vertical", detail: "Your wrists are far from over your elbows, which wastes strength and strains the shoulder.", cue: "Change grip width or where the bar touches your chest until forearms are vertical." },
    });
    tempo(0.8);
  }

  if (lift === "pull") {
    add("hang", "Full stretch at the bottom", found.map((r) => grade(Math.max(near(r.start, elbow, "max"), near(r.end, elbow, "max")), (v) => v >= 150, (v) => v >= 130)), {
      good: { summary: "Arms straight at the bottom", detail: "You start and finish each rep fully stretched." },
      warn: { summary: "Not quite straight", detail: "Some reps start with bent arms.", cue: "Let your arms straighten fully (shoulders still engaged) before the next rep." },
      bad: { summary: "Half reps", detail: "Your arms stay well bent at the bottom.", cue: "Use a full range - it builds far more back muscle. Use an assisted machine or band if needed." },
    });
    add("top", "Pulling high enough", found.map((r) => grade(extreme(r.bottom, elbow, "min"), (v) => v <= 70, (v) => v <= 95)), {
      good: { summary: "Full pull", detail: "You pull all the way - chin to the bar or bar to your upper chest." },
      warn: { summary: "Stopping a bit short", detail: "Some reps don't reach the top.", cue: "Drive your elbows down to your ribs and pull your chest to the bar." },
      bad: { summary: "Pulling too short", detail: "Reps stop well before the top.", cue: "Reduce the load (or add assistance) and pull to full height." },
    });
    steady(10, "back");
    tempo(0.8);
  }

  if (lift === "row") {
    add("squeeze", "Full squeeze", found.map((r) => grade(extreme(r.bottom, elbow, "min"), (v) => v <= 80, (v) => v <= 100)), {
      good: { summary: "Pulling all the way in", detail: "You bring the weight right to your body." },
      warn: { summary: "Stopping a bit short", detail: "Some reps don't reach your body.", cue: "Pull until your elbows go past your torso and squeeze your shoulder blades." },
      bad: { summary: "Short pulls", detail: "Reps stop well away from your body.", cue: "Lighten the load and pull to your stomach, pausing for a second." },
    });
    add("stretch", "Full stretch", found.map((r) => grade(Math.max(near(r.start, elbow, "max"), near(r.end, elbow, "max")), (v) => v >= 145, (v) => v >= 125)), {
      good: { summary: "Arms straighten each rep", detail: "You let the weight stretch your back between reps." },
      warn: { summary: "Not quite straightening", detail: "Some reps start with bent arms.", cue: "Let your arms straighten fully between reps." },
      bad: { summary: "Half reps", detail: "Your arms stay bent throughout.", cue: "Use a full range - stretch, then pull." },
    });
    steady(10, "back");
    tempo(0.7);
  }

  if (lift === "lunge") {
    add("depth", "Depth", found.map((r) => grade(extreme(r.bottom, cfg.fn, "min"), (v) => v <= 100, (v) => v <= 120)), {
      good: { summary: "Front thigh near parallel", detail: "You're getting a full lunge." },
      warn: { summary: "A bit shallow", detail: "Some reps stop before your front thigh gets near parallel.", cue: "Drop your back knee towards the floor until it nearly touches." },
      bad: { summary: "Too shallow", detail: "Reps are stopping high.", cue: "Use less weight and sink until your back knee nearly touches the floor." },
    });
    add("torso", "Upright torso", found.map((r) => grade(Math.abs(leanOf(at(r.bottom))), (v) => v <= 22, (v) => v <= 35)), {
      good: { summary: "Chest up", detail: "Your torso stays upright." },
      warn: { summary: "Leaning forward", detail: "Your chest tips forward at the bottom.", cue: "Keep your chest up and think 'straight down, straight up'." },
      bad: { summary: "Folding forward", detail: "A big forward lean shifts work off your legs.", cue: "Lighten the load and keep your torso tall." },
    });
    tempo(0.7);
  }

  if (lift === "curl") {
    add("top", "Full squeeze at the top", found.map((r) => grade(extreme(r.bottom, elbow, "min"), (v) => v <= 60, (v) => v <= 80)), {
      good: { summary: "Curling all the way up", detail: "You get a full contraction each rep." },
      warn: { summary: "Stopping a bit low", detail: "Some reps stop before your forearm is fully up.", cue: "Curl until your hand is near your shoulder and squeeze." },
      bad: { summary: "Half reps at the top", detail: "Reps stop well short.", cue: "Lighten the weight and curl to the top every rep." },
    });
    add("bottom", "Full stretch at the bottom", found.map((r) => grade(Math.max(near(r.start, elbow, "max"), near(r.end, elbow, "max")), (v) => v >= 150, (v) => v >= 130)), {
      good: { summary: "Arms straighten each rep", detail: "You use the full range." },
      warn: { summary: "Not quite straightening", detail: "Some reps start with bent elbows.", cue: "Lower until your arm is straight before the next curl." },
      bad: { summary: "Half reps at the bottom", detail: "Your arm never straightens.", cue: "Use a full range - straight arm to full squeeze." },
    });
    add("elbows", "Elbows pinned", found.map((r) => grade(over(r, shoulderA).range, (v) => v <= 22, (v) => v <= 38)), {
      good: { summary: "Elbows stay by your sides", detail: "Your biceps do the lifting." },
      warn: { summary: "Elbows drifting forward", detail: "Your elbows swing forward as you curl, bringing in the shoulders.", cue: "Keep your elbows glued to your sides; only your forearms move." },
      bad: { summary: "Elbows swinging a lot", detail: "Your shoulders are doing much of the work.", cue: "Lighten the load. Try curling with your back and elbows against a wall." },
    });
    steady(6, "biceps");
    tempo(0.8);
  }

  if (lift === "triceps") {
    add("lockout", "Full lockout", found.map((r) => grade(extreme(r.bottom, elbow, "max"), (v) => v >= 160, (v) => v >= 145)), {
      good: { summary: "Arms fully straight", detail: "You finish every rep with a full squeeze." },
      warn: { summary: "Nearly locked out", detail: "Some reps stop just short of straight.", cue: "Push until your elbows lock and squeeze your triceps." },
      bad: { summary: "Stopping short", detail: "Reps stop well before your arms straighten.", cue: "Use less weight and straighten fully every rep." },
    });
    add("elbows", "Elbows still", found.map((r) => grade(over(r, shoulderA).range, (v) => v <= 15, (v) => v <= 28)), {
      good: { summary: "Upper arms stay put", detail: "Only your forearms move." },
      warn: { summary: "Elbows moving", detail: "Your upper arms move, bringing in your shoulders and lats.", cue: "Pin your elbows in place; only bend and straighten at the elbow." },
      bad: { summary: "Elbows swinging", detail: "Much of the movement is coming from your shoulders.", cue: "Lighten the load and keep your upper arms still." },
    });
    steady(8, "triceps");
    tempo(0.7);
  }

  if (lift === "dip") {
    add("depth", "Depth", found.map((r) => grade(extreme(r.bottom, elbow, "min"), (v) => v <= 95, (v) => v <= 112)), {
      good: { summary: "Down to 90°", detail: "Your elbows bend to about a right angle." },
      warn: { summary: "A bit shallow", detail: "Some reps stop before 90°.", cue: "Lower until your upper arms are about level with the floor." },
      bad: { summary: "Half reps", detail: "Reps stop well short.", cue: "Use assistance or bench dips until you can reach 90°." },
    });
    add("lockout", "Lockout", found.map((r) => grade(near(r.end, elbow, "max"), (v) => v >= 155, (v) => v >= 140)), {
      good: { summary: "Arms locked at the top", detail: "You push all the way up." },
      warn: { summary: "Soft lockout", detail: "Some reps finish with bent arms.", cue: "Straighten your arms fully at the top." },
      bad: { summary: "Not finishing reps", detail: "Reps stop well short of the top.", cue: "Finish each rep with straight arms." },
    });
    tempo(0.8);
  }

  if (lift === "raise") {
    add("height", "Raising to shoulder height", found.map((r) => {
      const top = extreme(r.bottom, shoulderA, "max");
      return top > 115 ? "warn" : grade(top, (v) => v >= 75, (v) => v >= 60);
    }), {
      good: { summary: "Up to shoulder height", detail: "Your arms reach about shoulder level - the working range." },
      warn: { summary: "Height is off", detail: "Some reps stop below shoulder height, or go well above it (which shifts work to your traps).", cue: "Raise to shoulder height, no higher, no lower." },
      bad: { summary: "Well below shoulder height", detail: "Reps stop low.", cue: "Use lighter dumbbells and raise to shoulder height." },
    });
    add("arms", "Soft, fixed elbows", found.map((r) => grade(near(r.bottom, elbow, "min", 2), (v) => v >= 145, (v) => v >= 125)), {
      good: { summary: "Arms nearly straight", detail: "A slight, fixed bend in the elbows." },
      warn: { summary: "Elbows bending", detail: "Your elbows bend more as you lift, making it easier.", cue: "Keep a slight bend and lock it - lead with your elbows." },
      bad: { summary: "Turning into a row", detail: "Your arms bend a lot, turning it into an upright row.", cue: "Go lighter and keep your arms long." },
    });
    steady(6, "shoulders");
    tempo(0.8);
  }

  if (lift === "calf") {
    const base = pct(valid.map(ankleA), 0.1);
    add("height", "Full rise", found.map((r) => grade(extreme(r.bottom, ankleA, "max") - base, (v) => v >= 22, (v) => v >= 14)), {
      good: { summary: "High on your toes", detail: "You rise all the way up." },
      warn: { summary: "Could rise higher", detail: "Some reps don't get fully onto your toes.", cue: "Push up as high as you can and pause for a second at the top." },
      bad: { summary: "Small reps", detail: "You're only lifting your heels a little.", cue: "Use less weight and rise fully, with a pause at the top." },
    });
    tempo(0.7);
  }

  if (lift === "legcurl") {
    add("range", "Full curl", found.map((r) => grade(extreme(r.bottom, kneeA, "min"), (v) => v <= 75, (v) => v <= 100)), {
      good: { summary: "Curling all the way", detail: "You bring your heels right in." },
      warn: { summary: "Stopping a bit short", detail: "Some reps don't curl fully.", cue: "Curl until your heels nearly touch your glutes (or the pad stops)." },
      bad: { summary: "Half reps", detail: "Reps stop well short.", cue: "Lighten the stack and use the full range." },
    });
    add("hips", "Hips stay down", found.map((r) => grade(over(r, hipA).range, (v) => v <= 12, (v) => v <= 22)), {
      good: { summary: "Hips stay put", detail: "Your hamstrings do the work." },
      warn: { summary: "Hips lifting", detail: "Your hips rise as you curl, taking work off your hamstrings.", cue: "Press your hips into the pad the whole set." },
      bad: { summary: "Hips coming up a lot", detail: "Your hips are doing much of the work.", cue: "Go lighter and keep your hips pinned down." },
    });
    tempo(0.8);
  }

  if (lift === "legext") {
    add("lockout", "Full extension", found.map((r) => grade(extreme(r.bottom, kneeA, "max"), (v) => v >= 160, (v) => v >= 145)), {
      good: { summary: "Legs straight at the top", detail: "You get a full squeeze." },
      warn: { summary: "Nearly straight", detail: "Some reps stop short of straight.", cue: "Straighten your legs fully and squeeze for a second." },
      bad: { summary: "Half reps", detail: "Reps stop well short.", cue: "Lighten the stack and straighten fully." },
    });
    tempo(0.8);
  }

  if (lift === "hipthrust") {
    add("lockout", "Hips fully up", found.map((r) => grade(extreme(r.bottom, hipA, "max"), (v) => v >= 165, (v) => v >= 150)), {
      good: { summary: "Full hip extension", detail: "Your hips reach a straight line from shoulders to knees." },
      warn: { summary: "Stopping a bit low", detail: "Some reps finish below a straight line.", cue: "Drive your hips up until shoulders, hips and knees line up, and squeeze your glutes." },
      bad: { summary: "Well short of the top", detail: "Your hips stop low.", cue: "Use less weight and finish with a hard glute squeeze." },
    });
    add("shins", "Knees at 90° on top", found.map((r) => { const k = kneeA(at(r.bottom)); return grade(Math.abs(k - 90), (v) => v <= 20, (v) => v <= 35); }), {
      good: { summary: "Feet in the right spot", detail: "Your shins are vertical at the top, which keeps the work on your glutes." },
      warn: { summary: "Feet a little off", detail: "Your knee angle at the top isn't close to 90°.", cue: "Move your feet so your shins are vertical at the top." },
      bad: { summary: "Feet far off", detail: "Your feet are too close or too far away.", cue: "Adjust your feet: shins vertical at the top of each rep." },
    });
    tempo(0.7);
  }

  if (lift === "legpress") {
    add("depth", "Depth", found.map((r) => grade(extreme(r.bottom, kneeA, "min"), (v) => v <= 95, (v) => v <= 115)), {
      good: { summary: "Knees to 90° or deeper", detail: "You use a full range." },
      warn: { summary: "A bit shallow", detail: "Some reps stop before your knees reach 90°.", cue: "Lower until your knees are at least at 90°, keeping your lower back on the pad." },
      bad: { summary: "Half reps", detail: "Reps stop well short.", cue: "Take some weight off and go deeper." },
    });
    add("lock", "Knees not snapping straight", found.map((r) => { const m = near(r.end, kneeA, "max"); return m >= 178 ? "warn" : "good"; }), {
      good: { summary: "Stopping just short of lockout", detail: "You keep tension on your legs at the top." },
      warn: { summary: "Locking out hard", detail: "Your knees snap fully straight under a heavy load.", cue: "Stop just short of locking your knees." },
      bad: { summary: "Locking out hard", detail: "Your knees snap fully straight under a heavy load.", cue: "Stop just short of locking your knees." },
    });
    tempo(0.8);
  }

  if (lift === "general") {
    add("control", "Control", reps.map((r) => grade(Math.min(r.down, r.up), (v) => v >= 0.5, (v) => v >= 0.3)), {
      good: { summary: "Smooth and controlled", detail: "Both halves of each rep are under control." },
      warn: { summary: "A bit rushed", detail: "Part of each rep is quite fast.", cue: "Slow down - about 1 second up and 2 seconds down." },
      bad: { summary: "Very fast reps", detail: "Reps are too fast to control the weight.", cue: "Slow down and use a weight you can control." },
    });
    if (generalJoint === "elbow" || generalJoint === "shoulder") steady(10, generalJoint === "elbow" ? "arms" : "shoulders");
  }

  // consistency: did the main movement get shorter as the set went on?
  if (found.length >= 3) {
    const depth = found.map((r) => sig[r.bottom] ?? 0);
    const first = depth.slice(0, 2).reduce((a, b) => a + b, 0) / 2, lastTwo = depth.slice(-2).reduce((a, b) => a + b, 0) / 2;
    const worse = rest === "high" ? lastTwo - first : first - lastTwo;
    checks.push(worse > 10
      ? { id: "fatigue", label: "Consistency", status: "warn", summary: "Later reps got shorter", detail: `Your last reps were about ${Math.round(worse)}° shorter than your first.`, cue: "That's fatigue showing. Stop the set when range starts to drop, or use a little less weight." }
      : { id: "fatigue", label: "Consistency", status: "good", summary: "Reps stayed consistent", detail: "Your range of motion held up across the set." });
  }

  const graded = checks.filter((c) => c.status !== "na");
  const pts = { good: 1, warn: 0.6, bad: 0.2 } as const;
  const score = graded.length ? Math.round((graded.reduce((a, c) => a + pts[c.status as Status], 0) / graded.length) * 100) : null;
  const avg = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
  const nWork = graded.filter((c) => c.status !== "good").length;
  const headline = score == null ? "Checked" : nWork === 0 ? "Solid reps - keep it up" : nWork === 1 ? "Good set, one thing to work on" : `Good effort, ${nWork} things to work on`;
  const problems: string[] = [];
  if (lift === "general") problems.push(`Checked as a general exercise: we counted reps from your ${generalJoint} and checked control, range and steadiness.`);
  if (coverage < 0.8) problems.push("You were out of view for part of the video, so some reps may be missing.");
  if (lift === "deadlift" && view === "front") problems.push("Deadlifts are best checked side-on - several checks need that angle.");

  return { lift, view, side, reps, checks, score, headline, problems, coverage, tempo: { down: avg(reps.map((r) => r.down)), up: avg(reps.map((r) => r.up)) } };
}

function mid(a: P, b: P): P { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }

/** Skeleton lines for drawing the replay. */
export const BONES: [number, number][] = [[11, 12], [11, 13], [13, 15], [12, 14], [14, 16], [11, 23], [12, 24], [23, 24], [23, 25], [25, 27], [24, 26], [26, 28], [27, 29], [29, 31], [27, 31], [28, 30], [30, 32], [28, 32]];
export const frameAt = (frames: PoseFrame[], t: number) => {
  let lo = 0, hi = frames.length - 1;
  while (lo < hi) { const m = (lo + hi + 1) >> 1; if (frames[m].t <= t) lo = m; else hi = m - 1; }
  return frames[lo];
};
