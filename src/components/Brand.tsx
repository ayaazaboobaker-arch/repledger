import { useEffect, useState } from "react";

/**
 * Rep Ledger brand pieces: the logo mark (a barbell whose bar dips into a tick - every rep ticked off the ledger),
 * the animated app-open splash, a shared backdrop for the sign-in / PIN screens, and loaders.
 */

/** The mark. Colours come from the brand gradient, so it works on dark and light. `animate` plays the draw-in. */
export function LogoMark({ size = 64, animate = false, className = "" }: { size?: number; animate?: boolean; className?: string }) {
  return (
    <svg className={`logo-mark${animate ? " lm-animate" : ""} ${className}`} width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="rl-grad" x1="6" y1="8" x2="58" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.55" stopColor="#5eead4" />
          <stop offset="1" stopColor="#a3e635" />
        </linearGradient>
      </defs>
      <g className="lm-plates lm-left">
        <rect x="4" y="16" width="8" height="32" rx="3.5" fill="url(#rl-grad)" />
        <rect x="14" y="22" width="5" height="20" rx="2.5" fill="url(#rl-grad)" />
      </g>
      <g className="lm-plates lm-right">
        <rect x="52" y="16" width="8" height="32" rx="3.5" fill="url(#rl-grad)" />
        <rect x="45" y="22" width="5" height="20" rx="2.5" fill="url(#rl-grad)" />
      </g>
      <path className="lm-bar" pathLength={1} d="M21 33 H23 L29 43 L41 22" stroke="url(#rl-grad)" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
      <path className="lm-ledger" d="M14 54 H50" stroke="url(#rl-grad)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <path className="lm-ledger l2" d="M23 60 H41" stroke="url(#rl-grad)" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}

/** Moving light behind the sign-in, PIN and splash screens: a faint grid, sharp light streaks and soft glows. */
export function Backdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`rl-backdrop ${className}`} aria-hidden="true">
      <i className="bd-glow g1" />
      <i className="bd-glow g2" />
      <i className="bd-grid" />
      <i className="bd-streak s1" />
      <i className="bd-streak s2" />
      <i className="bd-streak s3" />
      <svg className="bd-plate p1" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="3" /><circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="2" opacity=".6" /><circle cx="60" cy="60" r="9" stroke="currentColor" strokeWidth="3" /></svg>
      <svg className="bd-plate p2" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="3" /><circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="2" opacity=".6" /><circle cx="60" cy="60" r="9" stroke="currentColor" strokeWidth="3" /></svg>
    </div>
  );
}

/* ---------- app-open animation ---------- */
let splashShown = false;

/** Plays once each time the app opens: plates slide in, the bar draws into a tick, the mark lifts and the name appears. */
export function Splash() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">(splashShown ? "gone" : "in");
  useEffect(() => {
    document.getElementById("boot")?.remove();
    if (phase === "gone") return;
    splashShown = true;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t1 = window.setTimeout(() => setPhase("out"), calm ? 600 : 2500);
    const t2 = window.setTimeout(() => setPhase("gone"), calm ? 900 : 3100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (phase === "gone") return null;
  return (
    <div className={`splash${phase === "out" ? " out" : ""}`} role="presentation" onClick={() => setPhase("out")}>
      <Backdrop />
      <div className="splash-core">
        <div className="splash-mark"><LogoMark size={132} animate /><i className="splash-ring" /></div>
        <div className="splash-word" aria-label="Rep Ledger">
          {"REP LEDGER".split("").map((c, i) => <span key={i} style={{ animationDelay: `${1.05 + i * 0.045}s` }}>{c === " " ? " " : c}</span>)}
        </div>
        <div className="splash-tag">Log it. Lift it. Prove it.</div>
      </div>
    </div>
  );
}

/* ---------- loaders ---------- */

/** Small barbell that keeps lifting. For "checking / searching / saving" spots inside a page. */
export function Loader({ label, size = "md", className = "" }: { label?: string; size?: "sm" | "md" | "lg"; className?: string }) {
  return (
    <div className={`loader ld-${size} ${className}`} role="status" aria-live="polite">
      <svg className="ld-svg" viewBox="0 0 96 64" fill="none" aria-hidden="true">
        <g className="ld-bell">
          <rect x="6" y="14" width="8" height="30" rx="3.5" fill="url(#rl-grad)" />
          <rect x="16" y="20" width="5" height="18" rx="2.5" fill="url(#rl-grad)" />
          <rect x="82" y="14" width="8" height="30" rx="3.5" fill="url(#rl-grad)" />
          <rect x="75" y="20" width="5" height="18" rx="2.5" fill="url(#rl-grad)" />
          <path d="M22 29 H74" stroke="url(#rl-grad)" strokeWidth="4.6" strokeLinecap="round" />
        </g>
        <path className="ld-floor" d="M20 58 H76" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".25" />
      </svg>
      {label && <span className="ld-label">{label}</span>}
    </div>
  );
}

/** Full-screen loader: used while signing in, unlocking, or opening the app. */
export function ScreenLoader({ label = "One moment…", sub }: { label?: string; sub?: string }) {
  return (
    <div className="screen-loader" role="alert" aria-busy="true">
      <Backdrop />
      <div className="sl-core">
        <Loader size="lg" />
        <div className="sl-label">{label}</div>
        {sub && <div className="small muted">{sub}</div>}
        <div className="sl-bar" aria-hidden="true"><i /></div>
      </div>
    </div>
  );
}

/** Placeholder block that shimmers while a card's content loads. */
export function Skeleton({ h = 16, w = "100%", r = 8 }: { h?: number; w?: number | string; r?: number }) {
  return <span className="skel" style={{ height: h, width: w, borderRadius: r }} aria-hidden="true" />;
}
