import { useCallback, useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { spring, tick, type Spring } from "../lib/spring";

interface Props {
  tabs: { id: string; label: string; icon: ReactNode }[];
  /** index of the current tab, or -1 when the page isn't one of the tabs (the lens hides) */
  active: number;
  onSelect: (i: number) => void;
}

/**
 * The phone tab bar, iOS 27 style: a floating glass pill with a lens behind the current tab.
 * Press and slide across it: the lens lifts, follows your finger, and each tab lights up as the
 * lens passes over it. Let go to open the tab under your finger; the lens settles with a little
 * wobble. A quick tap works as usual, and keyboards use the buttons directly.
 */
export function TabBar({ tabs, active, onSelect }: Props) {
  const pill = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLSpanElement>(null);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);
  const x = useRef(0); // lens position, px from the pill's left inner edge
  const anim = useRef<Spring | null>(null);
  const drag = useRef<{ id: number; startX: number; moved: boolean; hover: number; left: number; t: number; px: number; vx: number } | null>(null);
  const geom = useRef({ tab: 0, pad: 0 });
  const bar = useRef<HTMLElement>(null);
  const slot = Math.max(0, active);

  // smaller bar while you scroll down the page, full size when you scroll back up. Set straight on
  // the bar, so scrolling never re-renders the app.
  useEffect(() => {
    let last = Math.max(0, window.scrollY), ticking = false, travel = 0;
    const update = () => {
      ticking = false;
      const y = Math.max(0, window.scrollY);
      const dy = y - last;
      last = y;
      const nav = bar.current;
      if (!nav) return;
      const nearBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 24;
      // only react to a deliberate scroll, not a jiggle
      travel = Math.sign(dy) === Math.sign(travel) ? travel + dy : dy;
      if (y < 60 || nearBottom) nav.classList.remove("compact");
      else if (travel > 24) nav.classList.add("compact");
      else if (travel < -12) nav.classList.remove("compact");
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // a new page starts with the full bar showing
  useEffect(() => { bar.current?.classList.remove("compact"); }, [active]);

  /** paint the lens and how "lit" each tab is (how much of it the lens covers). Only the lens moves every
   *  frame; a tab's colour is touched only when its value actually changes (at most two tabs at a time). */
  const lit = useRef<number[]>([]);
  const paint = useCallback((pos: number) => {
    x.current = pos;
    const { tab } = geom.current;
    if (lens.current) lens.current.style.transform = `translate3d(${pos}px,0,0)`;
    if (!tab) return;
    btns.current.forEach((b, i) => {
      if (!b) return;
      const v = Math.round((Math.max(0, tab - Math.abs(pos - i * tab)) / tab) * 100) / 100;
      if (lit.current[i] === v) return;
      lit.current[i] = v;
      b.style.setProperty("--lit", String(v));
    });
  }, []);

  const measure = useCallback(() => {
    const p = pill.current;
    if (!p) return;
    const pad = parseFloat(getComputedStyle(p).paddingLeft) || 0;
    const tab = (p.clientWidth - pad * 2) / tabs.length;
    geom.current = { tab, pad };
    if (lens.current) lens.current.style.width = `${tab}px`;
  }, [tabs.length]);

  const springTo = useCallback((to: number, opts: { velocity?: number; wobble?: boolean } = {}) => {
    anim.current?.stop();
    anim.current = spring({
      from: x.current, to, velocity: opts.velocity ?? anim.current?.velocity() ?? 0,
      stiffness: opts.wobble ? 520 : 700, dampingRatio: opts.wobble ? 0.62 : 0.86,
      onUpdate: (v) => paint(v),
    });
  }, [paint]);

  // size and place the lens; keep it right when the bar changes size (compact, rotation)
  useLayoutEffect(() => {
    measure();
    paint(slot * geom.current.tab);
    const ro = new ResizeObserver(() => { measure(); if (!drag.current && !anim.current) paint(slot * geom.current.tab); });
    if (pill.current) ro.observe(pill.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measure]);

  // a new tab (tapped, or opened from elsewhere in the app): glide the lens there
  useEffect(() => {
    if (drag.current) return;
    springTo(slot * geom.current.tab, { wobble: true });
  }, [slot, springTo]);

  // the pill's position is read once when the finger lands, never while it moves (no layout reads per frame)
  const indexAt = (clientX: number, left: number) => {
    const { tab, pad } = geom.current;
    return Math.min(tabs.length - 1, Math.max(0, Math.floor((clientX - left - pad) / tab)));
  };
  const lensFor = (clientX: number, left: number) => {
    const { tab, pad } = geom.current;
    return Math.min((tabs.length - 1) * tab, Math.max(0, clientX - left - pad - tab / 2));
  };

  const onDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    pill.current?.setPointerCapture(e.pointerId);
    const left = pill.current!.getBoundingClientRect().left;
    const hover = indexAt(e.clientX, left);
    anim.current?.stop();
    anim.current = null;
    drag.current = { id: e.pointerId, startX: e.clientX, moved: false, hover, left, t: e.timeStamp, px: e.clientX, vx: 0 };
    pill.current?.classList.add("pressed");
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    if (!d.moved && Math.abs(e.clientX - d.startX) < 6) return;
    if (!d.moved) { d.moved = true; pill.current?.classList.add("lifted"); }
    // the lens sits exactly under your finger: painted straight from the touch, with no easing in between
    const dt = e.timeStamp - d.t;
    if (dt > 0) d.vx = d.vx * 0.6 + (((e.clientX - d.px) / dt) * 1000) * 0.4;
    d.t = e.timeStamp; d.px = e.clientX;
    paint(lensFor(e.clientX, d.left));
    const i = indexAt(e.clientX, d.left);
    if (i !== d.hover) { d.hover = i; tick(); }
  };
  const onUp = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    pill.current?.classList.remove("pressed", "lifted");
    const i = d.moved ? d.hover : indexAt(e.clientX, d.left);
    // a tap on the tab you're already on still reports (the app scrolls back to the top)
    if (i !== active || !d.moved) onSelect(i);
    springTo(i * geom.current.tab, { wobble: true, velocity: d.moved ? d.vx : 0 });
  };
  const onCancel = () => {
    drag.current = null;
    pill.current?.classList.remove("pressed", "lifted");
    springTo(slot * geom.current.tab, { wobble: true });
  };

  return (
    <nav ref={bar} className="tabbar" aria-label="Main">
      <div
        ref={pill}
        className={`tb-pill${active < 0 ? " no-tab" : ""}`}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onCancel}
        onLostPointerCapture={() => drag.current && onCancel()}
      >
        <span ref={lens} className="tb-lens" aria-hidden="true" />
        {tabs.map((t, i) => (
          <button
            key={t.id}
            type="button"
            ref={(b) => { btns.current[i] = b; }}
            className={`tb-tab ${i === active ? "on" : ""}`}
            aria-current={i === active ? "page" : undefined}
            // taps and slides are handled on the pill; this is for keyboards and screen readers
            onClick={(e) => { if (e.detail === 0) onSelect(i); }}
          >
            {t.icon}
            <span className="tb-label">{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
