import { useEffect, useRef, useState } from "react";
import { lookupBarcode, macrosFor, type Food } from "../lib/foods";
import { fmt } from "../lib/util";
import { Icon, Sheet } from "./ui";

type State = { kind: "scanning" } | { kind: "looking"; code: string } | { kind: "notfound"; code: string } | { kind: "error"; code: string; msg: string };

interface Detector { detect: (v: HTMLVideoElement) => Promise<{ rawValue: string }[]> }
const FORMATS = ["ean_13", "ean_8", "upc_a", "upc_e", "code_128"];

/** Point the camera at a barcode, look the product up, hand the food back. */
export function BarcodeScanner({ open, onClose, onFound, onAddOwn, localFirst }: { open: boolean; onClose: () => void; onFound: (f: Food) => void; onAddOwn: (code: string) => void; localFirst?: (code: string) => boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<State>({ kind: "scanning" });
  const [cam, setCam] = useState<"starting" | "on" | "off">("starting");
  const [typed, setTyped] = useState("");
  const busy = useRef(false);

  const handle = async (code: string) => {
    if (busy.current) return;
    busy.current = true;
    navigator.vibrate?.(15);
    if (localFirst?.(code)) return;
    setState({ kind: "looking", code });
    try {
      const f = await lookupBarcode(code);
      if (f) { onFound(f); return; }
      setState({ kind: "notfound", code });
    } catch (e) {
      setState({ kind: "error", code, msg: (e as Error).message });
    }
  };
  const again = () => { busy.current = false; setState({ kind: "scanning" }); };

  useEffect(() => {
    if (!open) return;
    busy.current = false;
    setState({ kind: "scanning" });
    setCam("starting");
    let stop = false;
    let stream: MediaStream | null = null;
    let raf = 0;
    let zx: { stop: () => void } | null = null;
    (async () => {
      if (!navigator.mediaDevices?.getUserMedia) { setCam("off"); return; }
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
        if (stop) { stream.getTracks().forEach((t) => t.stop()); return; }
        const v = video.current!;
        v.srcObject = stream;
        await v.play().catch(() => undefined);
        setCam("on");
        // Phones with a built-in barcode reader (Android Chrome) use it; others (iPhone) use ZXing.
        const BD = (window as unknown as { BarcodeDetector?: { new (o: { formats: string[] }): Detector; getSupportedFormats?: () => Promise<string[]> } }).BarcodeDetector;
        const native = BD ? await BD.getSupportedFormats?.().then((f) => FORMATS.some((x) => f.includes(x))).catch(() => false) : false;
        if (BD && native) {
          const det = new BD({ formats: FORMATS });
          const tick = async () => {
            if (stop) return;
            if (!busy.current && v.readyState >= 2) {
              try { const r = await det.detect(v); if (r[0]?.rawValue) void handle(r[0].rawValue); } catch { /* keep trying */ }
            }
            raf = window.setTimeout(tick, 180);
          };
          void tick();
        } else {
          const { BrowserMultiFormatReader } = await import("@zxing/browser");
          if (stop) return;
          const reader = new BrowserMultiFormatReader();
          zx = await reader.decodeFromVideoElement(v, (res) => { if (res && !busy.current) void handle(res.getText()); });
        }
      } catch { if (!stop) setCam("off"); }
    })();
    return () => { stop = true; clearTimeout(raf); zx?.stop(); stream?.getTracks().forEach((t) => t.stop()); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Sheet open={open} onClose={onClose} label="Scan a barcode" tall
      title={<div className="spread"><div><div className="eyebrow">Barcode</div><h2 className="sheet-title">Scan a product</h2></div><button className="icon-btn" onClick={onClose} aria-label="Close">{Icon.x}</button></div>}>
      <div className="scan-view bc-view live">
        <video ref={video} playsInline muted aria-label="Camera preview" />
        {cam === "on" && <span className="bc-frame" aria-hidden="true"><i /></span>}
        {cam === "starting" && <div className="scan-msg small muted">Starting the camera…</div>}
        {cam === "off" && <div className="scan-msg"><span className="at-icon">{Icon.barcode}</span><p className="small muted">Camera not available - type the barcode number below.</p></div>}
      </div>

      <div className="bc-status" role="status">
        {state.kind === "scanning" && <span className="small muted">Line the barcode up inside the box. It scans by itself.</span>}
        {state.kind === "looking" && <span className="small">Found <b className="num">{state.code}</b> - looking it up…</span>}
        {state.kind === "notfound" && (
          <div className="notice small">
            <b>We don't know {state.code} yet.</b> Add it once from the label and it'll be found next time.
            <div className="row" style={{ marginTop: 10, gap: 8, flexWrap: "wrap" }}>
              <button className="btn sm primary" onClick={() => onAddOwn(state.code)}>{Icon.plus} Add it from the label</button>
              <button className="btn sm" onClick={again}>Scan again</button>
            </div>
          </div>
        )}
        {state.kind === "error" && (
          <div className="notice warn small">{state.msg}<div style={{ marginTop: 8 }}><button className="btn sm" onClick={() => { busy.current = false; void handle(state.code); }}>Try again</button> <button className="btn sm ghost" onClick={again}>Scan another</button></div></div>
        )}
      </div>

      <form className="bc-type" onSubmit={(e) => { e.preventDefault(); if (typed.replace(/\D/g, "").length >= 8) { busy.current = false; void handle(typed.replace(/\D/g, "")); } }}>
        <input className="in" inputMode="numeric" placeholder="Or type the barcode number" value={typed} onChange={(e) => setTyped(e.target.value)} aria-label="Barcode number" />
        <button className="btn" type="submit" disabled={typed.replace(/\D/g, "").length < 8}>Look up</button>
      </form>
      <p className="xs faint" style={{ marginTop: 10 }}>Product details come from Open Food Facts, a free database of millions of products. Always check the label - values can be missing or out of date.</p>
    </Sheet>
  );
}

/** Small preview used after a barcode match. */
export const foodLine = (f: Food) => { const s = f.servings[0]; const m = macrosFor(f, s.g); return `${s.label} · ${fmt(m.kcal)} kcal`; };
