/**
 * Runs Google's MediaPipe pose model over a video, on this device. Nothing is uploaded:
 * the model (public/models) and its WebAssembly runtime (public/mediapipe) ship with the app.
 *
 * The video is stepped through frame by frame (seeking) rather than played, so a slow phone
 * gives the same result as a fast one - it just takes longer.
 */
import type { PoseLandmarker } from "@mediapipe/tasks-vision";

export interface Point { x: number; y: number; z: number; v: number }
/** One sampled moment. Landmarks are normalised 0–1 (x across, y down), or null if no person was found. */
export interface PoseFrame { t: number; lm: Point[] | null }
export interface Tracked { frames: PoseFrame[]; width: number; height: number; duration: number; fps: number }

const MAX_SECONDS = 60;
let landmarker: Promise<PoseLandmarker> | null = null;
/** The model needs every timestamp to be later than the last one, across live camera and file runs. */
let lastTs = 0;
const nextTs = (want: number) => (lastTs = Math.max(lastTs + 1, Math.round(want)));

const asset = (p: string) => new URL(p, document.baseURI).href;

export function loadPose(): Promise<PoseLandmarker> {
  if (!landmarker) {
    landmarker = (async () => {
      const { FilesetResolver, PoseLandmarker } = await import("@mediapipe/tasks-vision");
      const files = await FilesetResolver.forVisionTasks(asset("mediapipe"));
      const make = (delegate: "GPU" | "CPU") => PoseLandmarker.createFromOptions(files, {
        baseOptions: { modelAssetPath: asset("models/pose_landmarker_lite.task"), delegate },
        runningMode: "VIDEO", numPoses: 1,
        minPoseDetectionConfidence: 0.5, minPosePresenceConfidence: 0.5, minTrackingConfidence: 0.5,
      });
      try { return await make("GPU"); } catch { return await make("CPU"); }
    })();
    landmarker.catch(() => { landmarker = null; });
  }
  return landmarker;
}

function once(el: HTMLVideoElement, ev: string, ms = 8000) {
  return new Promise<void>((res, rej) => {
    const t = setTimeout(() => { cleanup(); rej(new Error(`Video did not respond (${ev})`)); }, ms);
    const ok = () => { cleanup(); res(); };
    const bad = () => { cleanup(); rej(new Error("This video can't be read on this device. Try filming again with the phone's camera app.")); };
    const cleanup = () => { clearTimeout(t); el.removeEventListener(ev, ok); el.removeEventListener("error", bad); };
    el.addEventListener(ev, ok, { once: true });
    el.addEventListener("error", bad, { once: true });
  });
}

/**
 * Track the person in a video file. Calls onProgress(0..1) as it goes. Pass an AbortSignal to stop.
 */
export async function trackVideo(src: string, onProgress: (p: number) => void, signal?: AbortSignal): Promise<Tracked> {
  const pose = await loadPose();
  const video = document.createElement("video");
  video.muted = true;
  video.playsInline = true;
  video.preload = "auto";
  video.crossOrigin = "anonymous";
  video.src = src;
  await once(video, "loadeddata", 15000);
  const duration = Math.min(video.duration || 0, MAX_SECONDS);
  if (!isFinite(duration) || duration <= 0.5) throw new Error("That video is too short - film the whole set, a few reps at least.");
  // ~15 samples a second is plenty for lifting speed; long clips get a little less
  const fps = duration > 30 ? 10 : 15;
  const frames: PoseFrame[] = [];
  const total = Math.floor(duration * fps);
  const base = lastTs + 1000;
  for (let i = 0; i <= total; i++) {
    if (signal?.aborted) throw new DOMException("Stopped", "AbortError");
    const t = i / fps;
    video.currentTime = Math.min(t, video.duration - 0.01);
    await once(video, "seeked");
    const res = pose.detectForVideo(video, nextTs(base + t * 1000));
    const lm = res.landmarks?.[0];
    frames.push({ t, lm: lm ? lm.map((p) => ({ x: p.x, y: p.y, z: p.z, v: p.visibility ?? 1 })) : null });
    if (i % 3 === 0) onProgress(i / total);
  }
  onProgress(1);
  const out = { frames, width: video.videoWidth, height: video.videoHeight, duration, fps };
  video.removeAttribute("src");
  video.load();
  return out;
}

/** One live reading from a playing <video> (the camera). Returns normalised points, or null. */
export function detectLive(pose: PoseLandmarker, video: HTMLVideoElement): Point[] | null {
  if (video.readyState < 2 || !video.videoWidth) return null;
  // keep live timestamps moving at real speed, even after a file run pushed the clock ahead
  let want = performance.now() + liveShift;
  if (want <= lastTs) { liveShift += lastTs - want + 33; want = performance.now() + liveShift; }
  const res = pose.detectForVideo(video, nextTs(want));
  const lm = res.landmarks?.[0];
  return lm ? lm.map((p) => ({ x: p.x, y: p.y, z: p.z, v: p.visibility ?? 1 })) : null;
}
let liveShift = 0;
