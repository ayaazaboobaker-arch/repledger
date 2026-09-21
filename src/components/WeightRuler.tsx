import { useEffect, useLayoutEffect, useRef } from "react";

const MIN = 30, MAX = 250, PX = 10; // 10 px per 0.1 kg

/**
 * Horizontal ruler you scroll (or drag, or use the arrow keys) to pick a
 * weight to 0.1 kg. The centre line marks the value.
 */
export function WeightRuler({ value, onChange, id }: { value: number; onChange: (kg: number) => void; id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const settle = useRef<number | undefined>(undefined);
  const toX = (kg: number) => Math.round((kg - MIN) * 10) * PX;
  const toKg = (x: number) => Math.min(MAX, Math.max(MIN, +(MIN + Math.round(x / PX) / 10).toFixed(1)));

  // follow the value when it changes from outside (typing, saving, another day)
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || busy.current) return;
    el.scrollLeft = toX(value);
  }, [value]);

  // mouse wheel scrolls sideways; drag with the mouse
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const wheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", wheel, { passive: false });
    return () => el.removeEventListener("wheel", wheel);
  }, []);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    busy.current = true;
    onChange(toKg(el.scrollLeft));
    clearTimeout(settle.current);
    settle.current = window.setTimeout(() => {
      busy.current = false;
      const snapped = toX(toKg(el.scrollLeft));
      if (Math.abs(el.scrollLeft - snapped) > 0.5) el.scrollTo({ left: snapped, behavior: "smooth" });
    }, 120);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    let lastX = e.clientX;
    el.classList.add("grabbing");
    const move = (ev: PointerEvent) => { el.scrollLeft -= ev.clientX - lastX; lastX = ev.clientX; };
    const up = () => { el.classList.remove("grabbing"); el.removeEventListener("pointermove", move); el.removeEventListener("pointerup", up); };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
  };

  const onKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 1 : 0.1;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") { e.preventDefault(); onChange(Math.min(MAX, +(value + step).toFixed(1))); }
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") { e.preventDefault(); onChange(Math.max(MIN, +(value - step).toFixed(1))); }
  };

  const labels = [];
  for (let kg = MIN; kg <= MAX; kg++) labels.push(<span key={kg} style={{ left: (kg - MIN) * 10 * PX }}>{kg}</span>);

  return (
    <div className="ruler-wrap">
      <div
        className="ruler" ref={ref} id={id} tabIndex={0} role="slider"
        aria-label="Body weight in kg" aria-valuemin={MIN} aria-valuemax={MAX} aria-valuenow={value} aria-valuetext={`${value.toFixed(1)} kg`}
        onScroll={onScroll} onPointerDown={onPointerDown} onKeyDown={onKey}
      >
        <div className="ruler-pad" />
        <div className="ruler-track" style={{ width: (MAX - MIN) * 10 * PX + 1 }}>{labels}</div>
        <div className="ruler-pad" />
      </div>
      <div className="ruler-needle" aria-hidden="true" />
    </div>
  );
}
