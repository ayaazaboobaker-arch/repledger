import { useEffect, useLayoutEffect, useRef, useState } from "react";

const ITEM = 48;

interface Props {
  values: number[];
  value: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
  label: string;
  id: string;
}

/** Scroll-snap wheel. Scroll, drag, tap an item, or use arrow keys / Page keys. */
export function WheelPicker({ values, value, onChange, format = String, label, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const settle = useRef<number | undefined>(undefined);
  const userScrolling = useRef(false);
  const nearest = (v: number) => {
    let best = 0;
    for (let i = 1; i < values.length; i++) if (Math.abs(values[i] - v) < Math.abs(values[best] - v)) best = i;
    return best;
  };
  const idx = nearest(value);
  const [sel, setSel] = useState(idx);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || userScrolling.current) return;
    el.scrollTop = idx * ITEM;
    setSel(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, values.length]);

  useEffect(() => () => clearTimeout(settle.current), []);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    userScrolling.current = true;
    const i = Math.max(0, Math.min(values.length - 1, Math.round(el.scrollTop / ITEM)));
    setSel(i);
    clearTimeout(settle.current);
    settle.current = window.setTimeout(() => {
      userScrolling.current = false;
      if (values[i] !== value) onChange(values[i]);
    }, 140);
  };

  const go = (i: number) => {
    const j = Math.max(0, Math.min(values.length - 1, i));
    ref.current?.scrollTo({ top: j * ITEM, behavior: "smooth" });
  };

  const onKey = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = { ArrowUp: -1, ArrowDown: 1, PageUp: -5, PageDown: 5 };
    if (e.key in map) {
      e.preventDefault();
      go(sel + map[e.key]);
    } else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(values.length - 1); }
  };

  return (
    <div className="wheel-col">
      <div className="wl" id={id + "-l"}>{label}</div>
      <div className="wheel">
        <div
          className="wheel-list"
          ref={ref}
          onScroll={onScroll}
          onKeyDown={onKey}
          tabIndex={0}
          role="spinbutton"
          aria-labelledby={id + "-l"}
          aria-valuenow={values[sel]}
          aria-valuetext={format(values[sel])}
          id={id}
        >
          <div className="wheel-pad" />
          {values.map((v, i) => (
            <div key={v} className={`wheel-item${i === sel ? " sel" : ""}`} onClick={() => go(i)}>
              {format(v)}
            </div>
          ))}
          <div className="wheel-pad" />
        </div>
      </div>
    </div>
  );
}

export const KG_VALUES = (() => {
  const out: number[] = [];
  for (let v = 0; v < 30; v += 0.5) out.push(+v.toFixed(2));
  for (let v = 30; v <= 320; v += 1.25) out.push(+v.toFixed(2));
  return out;
})();
export const REP_VALUES = Array.from({ length: 51 }, (_, i) => i);
export const SET_VALUES = Array.from({ length: 10 }, (_, i) => i + 1);
