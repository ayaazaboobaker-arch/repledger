import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/* ---------- icons ---------- */
const S = (d: ReactNode, sw = 2) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
export const Icon = {
  logo: S(<path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />, 2.2),
  today: S(<><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></>),
  train: S(<path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />, 2.2),
  food: S(<><path d="M4 3v7a3 3 0 0 0 6 0V3M7 3v18" /><path d="M17 3c-2 2-3 4-3 7s1 4 3 4v7" /></>),
  progress: S(<path d="M3 17l5-5 4 4 8-8M15 8h5v5" />),
  me: S(<><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></>),
  plan: S(<><path d="M8 6h13M8 12h13M8 18h13" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></>),
  check: S(<path d="M5 12.5l4.5 4.5L19 7" />, 3),
  x: S(<path d="M6 6l12 12M18 6L6 18" />, 2.2),
  left: S(<path d="M15 5l-7 7 7 7" />, 2.4),
  right: S(<path d="M9 5l7 7-7 7" />, 2.4),
  plus: S(<path d="M12 5v14M5 12h14" />, 2.4),
  play: S(<path d="M7 4l13 8-13 8z" />, 2.2),
  star: S(<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />),
  save: S(<><path d="M5 3h11l3 3v15H5z" /><path d="M8 3v5h7M8 21v-7h8v7" /></>),
  grid: S(<><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>),
  grip: S(<><circle cx="9" cy="6" r="1" /><circle cx="15" cy="6" r="1" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /><circle cx="9" cy="18" r="1" /><circle cx="15" cy="18" r="1" /></>, 2.6),
  up: S(<path d="M6 15l6-6 6 6" />, 2.4),
  down: S(<path d="M6 9l6 6 6-6" />, 2.4),
  run: S(<><circle cx="14" cy="4.5" r="1.8" /><path d="M9 20l3-6 3 3v4M7 11l3-3 4 1 2 3h3M12 14l-2-4" /></>),
  stop: S(<rect x="6" y="6" width="12" height="12" rx="2" />),
  lock: S(<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>),
  logout: S(<><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" /><path d="M10 17l5-5-5-5M15 12H4" /></>),
  edit: S(<><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13.5 6.5l4 4" /></>),
  target: S(<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" /></>),
  users: S(<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c1-3.5 3.5-5.5 6.5-5.5s5.5 2 6.5 5.5" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c1.8.7 3 2.5 3.5 5.2" /></>),
  download: S(<><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></>),
  upload: S(<><path d="M12 20V9M7 14l5-5 5 5M5 4h14" /></>),
  cloud: S(<path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.5 8.5z" />),
  mail: S(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  trash: S(<><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></>),
};

/* ---------- toast ---------- */
type Listener = (m: string) => void;
const listeners = new Set<Listener>();
export const toast = (m: string) => listeners.forEach((l) => l(m));
export function Toaster() {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    let t: number | undefined;
    const l: Listener = (m) => {
      setMsg(m);
      clearTimeout(t);
      t = window.setTimeout(() => setMsg(null), 2600);
    };
    listeners.add(l);
    return () => void listeners.delete(l);
  }, []);
  return msg ? <div className="toast" role="status">{msg}</div> : null;
}

/* ---------- theme colours for charts ---------- */
const readVars = () => {
  const cs = getComputedStyle(document.documentElement);
  const g = (n: string) => cs.getPropertyValue(n).trim();
  return { accent: g("--accent"), accentSoft: g("--accent-soft"), ink: g("--ink"), muted: g("--muted"), faint: g("--faint"), line: g("--line"), surface: g("--surface"), good: g("--good"), warn: g("--warn") };
};
export type Theme = ReturnType<typeof readVars>;
export function useTheme(): Theme {
  const [t, setT] = useState(readVars);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const on = () => setT(readVars());
    mq.addEventListener("change", on);
    const mo = new MutationObserver(on);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => { mq.removeEventListener("change", on); mo.disconnect(); };
  }, []);
  return t;
}

/* ---------- small pieces ---------- */
export function Meter({ value, max, over, sm, label }: { value: number; max: number; over?: boolean; sm?: boolean; label?: string }) {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div className={`meter${sm ? " sm" : ""}${over ? " over" : ""}`} role="meter" aria-valuenow={Math.round(value)} aria-valuemax={max} aria-label={label}>
      <i style={{ width: pct + "%" }} />
    </div>
  );
}

export function Sparkline({ values, width = 112, height = 34 }: { values: number[]; width?: number; height?: number }) {
  if (values.length < 2) return <svg width={width} height={height} className="spark" aria-hidden="true" />;
  const lo = Math.min(...values), hi = Math.max(...values);
  const span = hi - lo || 1;
  const x = (i: number) => 3 + (i * (width - 6)) / (values.length - 1);
  const y = (v: number) => height - 4 - ((v - lo) / span) * (height - 8);
  const d = values.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join("");
  const last = values.length - 1;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="spark" aria-hidden="true">
      <path d={`${d}L${x(last)},${height}L${x(0)},${height}Z`} style={{ fill: "var(--accent)", opacity: 0.12 }} />
      <path d={d} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" }} />
      <circle cx={x(last)} cy={y(values[last])} r={3.5} style={{ fill: "var(--accent)", stroke: "var(--surface)", strokeWidth: 1.5 }} />
    </svg>
  );
}

export function Ring({ value, max, children }: { value: number; max: number; children: ReactNode }) {
  const r = 58, c = 2 * Math.PI * r;
  const pct = max > 0 ? Math.min(1, value / max) : 0;
  const over = value > max * 1.05;
  return (
    <div className="ring">
      <svg viewBox="0 0 132 132" aria-hidden="true">
        <circle cx="66" cy="66" r={r} style={{ fill: "none", stroke: "var(--surface-2)", strokeWidth: 12 }} />
        <circle cx="66" cy="66" r={r} style={{ fill: "none", stroke: over ? "var(--warn)" : "var(--accent)", strokeWidth: 12, strokeLinecap: "round", strokeDasharray: `${c * pct} ${c}`, transition: "stroke-dasharray .4s ease" }} />
      </svg>
      <div className="c">{children}</div>
    </div>
  );
}

export function Sheet({ open, onClose, title, children, footer, label, tall }: { open: boolean; onClose: () => void; title: ReactNode; children: ReactNode; footer?: ReactNode; label: string; tall?: boolean }) {
  const scrimRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    // Lock the page behind the sheet. overflow:hidden alone doesn't stop iPhone Safari
    // from scrolling the page, so pin the body in place and restore the scroll after.
    const y = window.scrollY;
    const b = document.body.style;
    const prev = { position: b.position, top: b.top, left: b.left, right: b.right, overflow: b.overflow };
    Object.assign(b, { position: "fixed", top: `-${y}px`, left: "0", right: "0", overflow: "hidden" });
    // Keep the sheet inside the visible area when the phone keyboard opens.
    const vv = window.visualViewport;
    const fit = () => {
      const el = scrimRef.current;
      if (!el || !vv) return;
      el.style.height = `${vv.height}px`;
      el.style.top = `${vv.offsetTop}px`;
    };
    fit();
    vv?.addEventListener("resize", fit);
    vv?.addEventListener("scroll", fit);
    return () => {
      window.removeEventListener("keydown", k);
      vv?.removeEventListener("resize", fit);
      vv?.removeEventListener("scroll", fit);
      Object.assign(b, prev);
      window.scrollTo(0, y);
    };
  }, [open, onClose]);
  if (!open) return null;
  // Portal to <body> so a parent with backdrop-filter/transform can't trap the fixed overlay.
  return createPortal(
    <div className="scrim" ref={scrimRef} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`sheet${tall ? " tall" : ""}`} role="dialog" aria-modal="true" aria-label={label}>
        <div className="sheet-h">{title}</div>
        <div className="sheet-b">{children}</div>
        {footer && <div className="sheet-f">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
