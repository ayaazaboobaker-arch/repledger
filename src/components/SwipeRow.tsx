import { useRef, useState, type ReactNode } from "react";
import { Icon } from "./ui";

const OPEN = 88; // width of the revealed Delete button

/**
 * A list row you can swipe left to delete, like in native apps.
 *  - short swipe: the Delete button stays open (tap it, or tap the row to close)
 *  - long swipe (past ~45% of the row): deletes straight away
 * Vertical scrolling still works; the row only moves once the finger is clearly going sideways.
 */
export function SwipeRow({ children, onDelete, label, className = "" }: { children: ReactNode; onDelete: () => void; label: string; className?: string }) {
  const [x, setX] = useState(0);
  const [drag, setDrag] = useState(false);
  const [gone, setGone] = useState(false);
  const st = useRef<{ x0: number; y0: number; base: number; dir: "x" | "y" | null; w: number; id: number } | null>(null);
  const ref = useRef<HTMLLIElement>(null);

  const remove = () => {
    setGone(true);
    setX(-(ref.current?.offsetWidth ?? 400));
    navigator.vibrate?.(10);
    window.setTimeout(onDelete, 220);
  };

  return (
    <li ref={ref} className={`swipe-row${gone ? " gone" : ""}${x < 0 ? " swiping" : ""} ${className}`}>
      <button className="swipe-del" onClick={remove} tabIndex={x <= -OPEN / 2 ? 0 : -1} aria-hidden={x > -OPEN / 2} style={{ width: Math.max(OPEN, -x) }}>
        {Icon.trash}<span>Delete</span>
      </button>
      <div
        className="swipe-body"
        style={{ transform: `translateX(${x}px)`, transition: drag ? "none" : undefined }}
        onPointerDown={(e) => {
          if (e.pointerType === "mouse" && e.button !== 0) return;
          st.current = { x0: e.clientX, y0: e.clientY, base: x, dir: null, w: e.currentTarget.offsetWidth, id: e.pointerId };
        }}
        onPointerMove={(e) => {
          const s = st.current;
          if (!s) return;
          const dx = e.clientX - s.x0, dy = e.clientY - s.y0;
          if (!s.dir) {
            if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
            s.dir = Math.abs(dx) > Math.abs(dy) * 1.2 ? "x" : "y";
            if (s.dir === "x") { setDrag(true); try { e.currentTarget.setPointerCapture(s.id); } catch { /* ignore */ } }
          }
          if (s.dir !== "x") return;
          const nx = Math.min(0, s.base + dx);
          setX(nx < -s.w ? -s.w : nx);
        }}
        onPointerUp={() => {
          const s = st.current;
          st.current = null;
          setDrag(false);
          if (!s || s.dir !== "x") { if (s && !s.dir && x < 0) setX(0); return; }
          if (x < -s.w * 0.45) remove();
          else setX(x < -OPEN / 2 ? -OPEN : 0);
        }}
        onPointerCancel={() => { st.current = null; setDrag(false); setX(x < -OPEN / 2 ? -OPEN : 0); }}
        onKeyDown={(e) => { if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); remove(); } }}
        tabIndex={0}
        aria-label={`${label}. Swipe left or press Delete to remove.`}
      >
        {children}
      </div>
    </li>
  );
}
