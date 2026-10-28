import { useEffect, useRef, useState, type RefObject } from "react";
import { Icon, Sheet } from "./ui";
import { spring, type Spring } from "../lib/spring";
import type { DowKey, WeekPlan } from "../lib/types";
import { DOW, DOW_LONG } from "../lib/util";

const HOLD_MS = 450; // touch: press and hold this long to enter arrange mode
const MOVE_PX = 6; // mouse: how far to move before it counts as a drag rather than a click
const PICK_PX = 4; // touch in arrange mode: a tile is picked up as soon as the finger moves this far
const DWELL_MS = 90; // hover over a tile this long and it slides out of the way (like iOS), so the swap is previewed

interface DragState { from: DowKey; over: DowKey | null; dx: number }
/** Where each day's tile sits when nothing is moving: left edge and width, in the strip's own scrolling coordinates. */
type Slots = Partial<Record<DowKey, { l: number; w: number }>>;

/**
 * Swap two days of the week by dragging their tiles, the way you move apps on a phone.
 *  - touch: press and hold a tile to enter arrange mode. The tiles jiggle and you can drag any of them
 *    until you tap Done (or tap elsewhere / press Escape).
 *  - mouse: click and drag a tile, no mode needed.
 * While you drag, the tile under it slides into the gap so you see the swap before you let go. On release the
 * tile springs into place carrying the speed of your finger, then the two days really swap.
 * Spread `tileProps(day)` on each tile and add `tileState(day).className/style`. Wrap the tile's own onClick
 * with `guard` so a drag (or a tap in arrange mode) doesn't also select the day.
 */
export function useDaySwapDrag(strip: RefObject<HTMLElement | null>, onSwap: (from: DowKey, to: DowKey) => void) {
  const [drag, setDrag] = useState<DragState | null>(null);
  const [arranging, setArrangingState] = useState(false);
  const [noTx, setNoTx] = useState(false);
  const arrRef = useRef(false);
  const slots = useRef<Slots>({});
  const st = useRef<{ from: DowKey; x0: number; scroll0: number; lastX: number; lastY: number; lt: number; vx: number; pid: number; el: HTMLElement; raf: number; hover: DowKey | null; dwell: number } | null>(null);
  const press = useRef<{ k: DowKey; x: number; y: number; pid: number; el: HTMLElement; type: string; t: number } | null>(null);
  const settle = useRef<Spring | null>(null);
  const justDragged = useRef(false);
  const swapRef = useRef(onSwap);
  swapRef.current = onSwap;

  const setArranging = (v: boolean) => { arrRef.current = v; setArrangingState(v); };
  // Which tile the finger is over. This uses the tiles' resting slots, not what's under the finger: the tile
  // being hovered slides away into the gap, so asking the page "what's here?" would lose it.
  const tileAt = (x: number, y: number, not: DowKey): DowKey | null => {
    const box = strip.current;
    if (!box) return null;
    const r = box.getBoundingClientRect();
    if (y < r.top - 40 || y > r.bottom + 40) return null;
    const sx = x - r.left + box.scrollLeft;
    for (const [k, sl] of Object.entries(slots.current) as [DowKey, { l: number; w: number }][]) {
      if (k !== not && sx >= sl.l && sx <= sl.l + sl.w) return k;
    }
    return null;
  };
  const dxOf = (s: NonNullable<typeof st.current>) => s.lastX - s.x0 + ((strip.current?.scrollLeft ?? 0) - s.scroll0);
  const refresh = () => {
    const s = st.current;
    if (!s) return;
    const dx = dxOf(s), hit = tileAt(s.lastX, s.lastY, s.from);
    if (hit !== s.hover) {
      s.hover = hit;
      clearTimeout(s.dwell);
      if (hit) s.dwell = window.setTimeout(() => { if (st.current === s && s.hover === hit) { navigator.vibrate?.(4); setDrag((d) => (d ? { ...d, over: hit } : d)); } }, DWELL_MS);
    }
    setDrag((d) => {
      if (!d) return d;
      const over = hit && hit === d.over ? hit : null; // moving off a tile lets it slide back at once
      return d.dx === dx && d.over === over ? d : { ...d, dx, over };
    });
  };
  const begin = (k: DowKey, x: number, y: number, pid: number, el: HTMLElement) => {
    const found: Slots = {};
    strip.current?.querySelectorAll<HTMLElement>("[data-day]").forEach((t) => { found[t.getAttribute("data-day") as DowKey] = { l: t.offsetLeft, w: t.offsetWidth }; });
    slots.current = found;
    st.current = { from: k, x0: x, scroll0: strip.current?.scrollLeft ?? 0, lastX: x, lastY: y, lt: performance.now(), vx: 0, pid, el, raf: 0, hover: null, dwell: 0 };
    try { el.setPointerCapture(pid); } catch { /* ignore */ }
    navigator.vibrate?.(8);
    setDrag({ from: k, over: null, dx: 0 });
    const tick = () => {
      const s = st.current, box = strip.current;
      if (!s || !box) return;
      // Scroll the week sideways when the tile is held near its left or right edge.
      const r = box.getBoundingClientRect(), edge = 56;
      const v = s.lastX < r.left + edge ? -(r.left + edge - s.lastX) / 4 : s.lastX > r.right - edge ? (s.lastX - (r.right - edge)) / 4 : 0;
      if (v && box.scrollWidth > box.clientWidth) { box.scrollLeft += v; refresh(); }
      s.raf = requestAnimationFrame(tick);
    };
    st.current.raf = requestAnimationFrame(tick);
  };
  const finish = (commit: boolean) => {
    const s = st.current;
    if (!s) return;
    cancelAnimationFrame(s.raf);
    clearTimeout(s.dwell);
    try { s.el.releasePointerCapture(s.pid); } catch { /* ignore */ }
    const hit = commit ? tileAt(s.lastX, s.lastY, s.from) : null;
    const cur = dxOf(s);
    const target = hit ? (slots.current[hit]?.l ?? 0) - (slots.current[s.from]?.l ?? 0) : 0;
    st.current = null;
    justDragged.current = true;
    setTimeout(() => (justDragged.current = false), 350);
    setDrag({ from: s.from, over: hit, dx: cur });
    // The dragged tile springs into its slot with the speed of the finger; the other one is already sliding over.
    let done = false;
    const sp = spring({
      from: cur, to: target, velocity: s.vx, stiffness: 420, dampingRatio: 0.78,
      onUpdate: (x) => setDrag((d) => (d ? { ...d, dx: x } : d)),
      onDone: () => {
        done = true;
        settle.current = null;
        if (hit) swapRef.current(s.from, hit);
        // Swap the data and drop every transform in the same frame, with no transition, so nothing jumps.
        setNoTx(true);
        setDrag(null);
        requestAnimationFrame(() => requestAnimationFrame(() => setNoTx(false)));
      },
    });
    if (!done) settle.current = sp;
  };
  const clearPress = () => { if (press.current) { clearTimeout(press.current.t); press.current = null; } };

  useEffect(() => {
    const box = strip.current;
    // Once a tile is picked up, stop the finger from scrolling the page or strip instead.
    const block = (e: TouchEvent) => { if (st.current) e.preventDefault(); };
    const esc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (st.current) finish(false); else if (arrRef.current) setArranging(false);
    };
    // Tap anywhere that isn't a day tile or the Done bar to leave arrange mode.
    const outside = (e: PointerEvent) => {
      if (!arrRef.current || st.current || settle.current) return;
      if (!(e.target as HTMLElement).closest?.(".day-tile, .arrange-bar")) setArranging(false);
    };
    box?.addEventListener("touchmove", block, { passive: false });
    window.addEventListener("keydown", esc);
    document.addEventListener("pointerdown", outside);
    return () => {
      box?.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", esc);
      document.removeEventListener("pointerdown", outside);
      clearPress();
      settle.current?.stop();
      if (st.current) { cancelAnimationFrame(st.current.raf); clearTimeout(st.current.dwell); }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tileProps = (k: DowKey) => ({
    "data-day": k,
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
    onPointerDown: (e: React.PointerEvent<HTMLElement>) => {
      if (settle.current || (e.pointerType === "mouse" && e.button !== 0)) return;
      const el = e.currentTarget;
      const timer = e.pointerType !== "mouse" && !arrRef.current;
      press.current = {
        k, x: e.clientX, y: e.clientY, pid: e.pointerId, el, type: e.pointerType,
        t: timer ? window.setTimeout(() => {
          const p = press.current;
          if (!p) return;
          press.current = null;
          setArranging(true);
          begin(p.k, p.x, p.y, p.pid, p.el); // enter arrange mode with this tile already lifted, finger still down
        }, HOLD_MS) : 0,
      };
    },
    onPointerMove: (e: React.PointerEvent<HTMLElement>) => {
      const s = st.current;
      if (s) {
        e.preventDefault();
        const now = performance.now(), dt = now - s.lt;
        if (dt > 0) s.vx = 0.5 * s.vx + 0.5 * ((e.clientX - s.lastX) / dt) * 1000;
        s.lt = now; s.lastX = e.clientX; s.lastY = e.clientY;
        refresh();
        return;
      }
      const p = press.current;
      if (!p) return;
      const moved = Math.hypot(e.clientX - p.x, e.clientY - p.y);
      if (p.type === "mouse") { if (moved > MOVE_PX) { press.current = null; begin(p.k, p.x, p.y, p.pid, p.el); } }
      else if (arrRef.current) { if (moved > PICK_PX) { press.current = null; begin(p.k, p.x, p.y, p.pid, p.el); } }
      else if (moved > 8) clearPress(); // the finger is scrolling the strip, not picking up a day
    },
    onPointerUp: () => { clearPress(); if (st.current) finish(true); },
    onPointerCancel: () => { clearPress(); if (st.current) finish(false); },
  });
  /** Wrap a tile's onClick: a drag, or a tap while arranging, must not select the day. */
  const guard = (fn: () => void) => () => { if (!justDragged.current && !arrRef.current) fn(); };
  /** Extra classes and inline style for a tile. */
  const tileState = (k: DowKey) => {
    let className = "";
    let style: React.CSSProperties | undefined;
    if (drag?.from === k) { className = " dragging moving"; style = { transform: `translateX(${drag.dx}px)` }; }
    else {
      if (arranging) className = " jiggle";
      if (drag?.over === k) { className += " shifted moving"; style = { transform: `translateX(${(slots.current[drag.from]?.l ?? 0) - (slots.current[k]?.l ?? 0)}px)` }; }
    }
    return { className, style };
  };
  const stripClass = `${drag ? " is-swapping" : ""}${arranging ? " arranging" : ""}${noTx ? " no-tx" : ""}`;
  return { drag, arranging, exitArrange: () => setArranging(false), stripClass, tileProps, tileState, guard };
}

/** The no-drag way to swap: pick the day to trade with from a list. Also works with a keyboard or screen reader. */
export function SwapDaySheet({ day, plan, onClose, onPick }: { day: DowKey | null; plan: WeekPlan; onClose: () => void; onPick: (other: DowKey) => void }) {
  if (!day) return null;
  const name = (k: DowKey) => (plan[k].exercises.length || plan[k].cardio?.length ? plan[k].title || "Session" : "Rest");
  return (
    <Sheet open label={`Swap ${DOW_LONG[day]}`} onClose={onClose}
      title={<div className="spread"><div><div className="eyebrow">{DOW_LONG[day]} · {name(day)}</div><h2 className="sheet-title">Swap with…</h2></div><button className="icon-btn" onClick={onClose} aria-label="Close">{Icon.x}</button></div>}>
      <p className="small muted" style={{ marginBottom: 10 }}>Pick the day to trade places with. The session name, exercises and cardio swap together.</p>
      <ul className="pick-list">
        {DOW.filter((k) => k !== day).map((k) => (
          <li key={k}>
            <button className="pick-item" onClick={() => onPick(k)}>
              <span>{DOW_LONG[k]} · {name(k)}</span>
              <small>{plan[k].exercises.length ? `${plan[k].exercises.length} exercises` : plan[k].cardio?.length ? "Cardio" : "Rest"}</small>
            </button>
          </li>
        ))}
      </ul>
    </Sheet>
  );
}
