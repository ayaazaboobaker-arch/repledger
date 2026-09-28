import { useEffect, useRef, useState } from "react";
import { useCoachAccess } from "../lib/coach/access";
import { itemMacros, scanMeal, scansLeft, type ScanItem, type ScanResult } from "../lib/mealScan";
import { useStore } from "../lib/store";
import type { MealSlot } from "../lib/types";
import { fmt, parseNum } from "../lib/util";
import { MEAL_LABEL } from "./FoodPicker";
import { Icon, Sheet, toast } from "./ui";

type Step = "camera" | "working" | "review";

/** Snap your plate → see what's on it → fix portions → add to the diary. */
export function MealScanner({ open, onClose, date, meal: initialMeal, onDone }: { open: boolean; onClose: () => void; date: string; meal: MealSlot; onDone?: () => void }) {
  const { addFoods } = useStore();
  const access = useCoachAccess();
  const [step, setStep] = useState<Step>("camera");
  const [meal, setMeal] = useState<MealSlot>(initialMeal);
  const [photo, setPhoto] = useState<string | null>(null);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [items, setItems] = useState<ScanItem[]>([]);
  const [err, setErr] = useState("");

  const [lastOpen, setLastOpen] = useState(open);
  if (open !== lastOpen) {
    setLastOpen(open);
    if (open) { setStep("camera"); setMeal(initialMeal); setPhoto(null); setResult(null); setItems([]); setErr(""); }
  }
  useEffect(() => () => { if (photo) URL.revokeObjectURL(photo); }, [photo]);

  const quota = scansLeft(access.pro);
  const run = async (blob: Blob) => {
    if (quota.left <= 0) { setErr(quota.dayCapped ? "You've used today's scans - more tomorrow." : access.pro ? "You've used this month's scans. A top-up pack adds 100 more." : "You've used your free scans this month. Pro gives you 200 a month."); return; }
    setErr("");
    setPhoto(URL.createObjectURL(blob));
    setStep("working");
    try {
      const r = await scanMeal(blob);
      setResult(r);
      setItems(r.items);
      setStep("review");
    } catch {
      setErr("Couldn't read that photo - try again with the whole plate in view.");
      setStep("camera");
    }
  };

  const tot = items.reduce((a, it) => { const m = itemMacros(it); return { kcal: a.kcal + m.kcal, p: a.p + m.p, c: a.c + m.c, f: a.f + m.f }; }, { kcal: 0, p: 0, c: 0, f: 0 });
  const save = () => {
    addFoods(date, meal, items.map((it) => ({ name: it.name, foodId: it.foodId, grams: it.grams, portion: `${fmt(it.grams)} ${it.liquid ? "ml" : "g"} · scanned`, ...itemMacros(it) })));
    toast(`Added ${items.length} item${items.length === 1 ? "" : "s"} to ${MEAL_LABEL[meal].toLowerCase()}`);
    onClose();
    onDone?.();
  };

  return (
    <Sheet
      open={open} onClose={onClose} label="Scan a meal" tall
      title={
        <div className="spread">
          <div>
            <div className="eyebrow">Meal scanner{access.pro ? " · Pro" : ""}</div>
            <h2 className="sheet-title">{step === "review" ? "Check what we found" : step === "working" ? "Looking at your plate…" : "Snap your plate"}</h2>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">{Icon.x}</button>
        </div>
      }
      footer={step === "review" ? (
        <button className="btn primary lg block" onClick={save} disabled={!items.length}>{Icon.plus} Add {fmt(tot.kcal)} kcal to {MEAL_LABEL[meal]}</button>
      ) : undefined}
    >
      {step === "camera" && open && <Capture onPhoto={run} err={err} quota={quota} pro={access.pro} />}

      {step === "working" && photo && (
        <div className="scan-working">
          <div className="scan-photo"><img src={photo} alt="Your meal" /><span className="scan-beam" aria-hidden="true" /></div>
          <p className="muted" role="status">Finding each food and guessing the portions…</p>
        </div>
      )}

      {step === "review" && (
        <div className="scan-review">
          {result?.sample && <div className="notice warn small" role="status"><b>Sample result.</b> {result.note}</div>}
          <div className="scan-top">
            {photo && <img src={photo} alt="Your meal" className="scan-thumb" />}
            <div className="scan-tot">
              <b>{fmt(tot.kcal)}</b><span>kcal</span>
              <small>P {fmt(tot.p)} · C {fmt(tot.c)} · F {fmt(tot.f)} g</small>
            </div>
          </div>

          <div className="seg" role="group" aria-label="Meal" style={{ margin: "12px 0" }}>
            {(Object.keys(MEAL_LABEL) as MealSlot[]).map((m) => <button key={m} aria-pressed={meal === m} onClick={() => setMeal(m)}>{MEAL_LABEL[m]}</button>)}
          </div>

          <ul className="scan-items">
            {items.map((it, i) => (
              <ScanRow key={it.key} it={it}
                onGrams={(g) => setItems(items.map((x, j) => (j === i ? { ...x, grams: g } : x)))}
                onRemove={() => setItems(items.filter((_, j) => j !== i))} />
            ))}
          </ul>
          {!items.length && <div className="empty small">Nothing left to add. Retake the photo, or log it by hand.</div>}
          <div className="row" style={{ marginTop: 12, justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <button className="btn ghost sm" onClick={() => { setStep("camera"); setResult(null); setItems([]); }}>{Icon.camera} Retake</button>
            <span className="xs faint">Portions are estimates - adjust them before adding.</span>
          </div>
        </div>
      )}
    </Sheet>
  );
}

function ScanRow({ it, onGrams, onRemove }: { it: ScanItem; onGrams: (g: number) => void; onRemove: () => void }) {
  const m = itemMacros(it);
  const [draft, setDraft] = useState<string | null>(null);
  const unit = it.liquid ? "ml" : "g";
  const step = it.grams >= 200 ? 25 : 10;
  return (
    <li className="scan-item">
      <div className="si-top">
        <div style={{ minWidth: 0 }}>
          <div className="si-name">{it.name}</div>
          <div className="xs muted">{fmt(m.kcal)} kcal · P {fmt(m.p)} · C {fmt(m.c)} · F {fmt(m.f)}{it.confidence < 0.7 ? " · not sure" : ""}</div>
        </div>
        <button className="icon-btn" onClick={onRemove} aria-label={`Remove ${it.name}`}>{Icon.x}</button>
      </div>
      <div className="si-grams">
        <button className="btn sm" onClick={() => onGrams(Math.max(5, it.grams - step))} aria-label="Less">−</button>
        <input className="in" inputMode="numeric" aria-label={`${it.name} amount in ${unit}`} value={draft ?? String(it.grams)}
          onFocus={(e) => { setDraft(String(it.grams)); e.target.select(); }} onChange={(e) => setDraft(e.target.value)}
          onBlur={() => { const n = parseNum(draft ?? ""); if (n != null && n > 0) onGrams(Math.round(n)); setDraft(null); }}
          onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLInputElement).blur()} />
        <span className="small muted">{unit}</span>
        <button className="btn sm" onClick={() => onGrams(it.grams + step)} aria-label="More">+</button>
        <span className={`si-conf${it.confidence < 0.7 ? " low" : ""}`} title="How sure the scanner is"><i style={{ width: `${Math.round(it.confidence * 100)}%` }} /></span>
      </div>
    </li>
  );
}

/** Live camera with a shutter button; falls back to the phone's camera app / photo picker. */
function Capture({ onPhoto, err, quota, pro }: { onPhoto: (b: Blob) => void; err: string; quota: ReturnType<typeof scansLeft>; pro: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const file = useRef<HTMLInputElement>(null);
  const [live, setLive] = useState<"starting" | "on" | "off">("starting");
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!navigator.mediaDevices?.getUserMedia) { setLive("off"); return; }
      try {
        const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment", width: { ideal: 1920 }, height: { ideal: 1440 } }, audio: false });
        if (cancelled) { s.getTracks().forEach((t) => t.stop()); return; }
        stream.current = s;
        if (video.current) { video.current.srcObject = s; await video.current.play().catch(() => undefined); }
        setLive("on");
      } catch { if (!cancelled) setLive("off"); }
    })();
    return () => { cancelled = true; stream.current?.getTracks().forEach((t) => t.stop()); stream.current = null; };
  }, []);
  const snap = () => {
    const v = video.current;
    if (!v || !v.videoWidth) return;
    const c = document.createElement("canvas");
    c.width = v.videoWidth; c.height = v.videoHeight;
    c.getContext("2d")!.drawImage(v, 0, 0);
    navigator.vibrate?.(10);
    c.toBlob((b) => b && onPhoto(b), "image/jpeg", 0.9);
  };
  return (
    <div className="scan-cap">
      <div className={`scan-view${live === "on" ? " live" : ""}`}>
        <video ref={video} playsInline muted aria-label="Camera preview" />
        {live === "on" && <span className="scan-frame" aria-hidden="true" />}
        {live === "starting" && <div className="scan-msg small muted">Starting the camera…</div>}
        {live === "off" && (
          <div className="scan-msg">
            <span className="at-icon">{Icon.camera}</span>
            <p className="small muted">Camera not available here - take or choose a photo instead.</p>
          </div>
        )}
      </div>
      {err && <div className="notice warn small" role="alert" style={{ marginTop: 10 }}>{err}</div>}
      <div className="scan-actions">
        <button className="btn" onClick={() => file.current?.click()}>{Icon.upload} Photo</button>
        <button className="shutter" onClick={snap} disabled={live !== "on"} aria-label="Take photo"><i /></button>
        <span className="scan-left xs muted">{quota.left} scan{quota.left === 1 ? "" : "s"} left{quota.today ? " today" : " this month"}{pro ? "" : " (free)"}</span>
      </div>
      <input ref={file} type="file" accept="image/*" capture="environment" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) onPhoto(f); e.target.value = ""; }} />
      <ul className="scan-tips xs muted">
        <li>Shoot from above with the whole plate in the frame.</li>
        <li>Good light helps - avoid strong shadows.</li>
        <li>Separate foods scan better than a mixed bowl.</li>
      </ul>
    </div>
  );
}
