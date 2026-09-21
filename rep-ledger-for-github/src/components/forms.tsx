import { useRef, useState } from "react";
import { parseNum } from "../lib/util";

export function Opts<T extends string>({ value, onChange, options, label, cols }: { value: T; onChange: (v: T) => void; options: Record<T, { label: string; hint: string }>; label: string; cols?: number }) {
  return (
    <div className="opts" role="radiogroup" aria-label={label} style={cols ? { gridTemplateColumns: `repeat(auto-fill, minmax(${cols}px, 1fr))` } : undefined}>
      {(Object.keys(options) as T[]).map((k) => (
        <button type="button" key={k} className="opt" role="radio" aria-checked={value === k} aria-pressed={value === k} onClick={() => onChange(k)}>
          <div className="t">{options[k].label}</div>
          {options[k].hint && <div className="h">{options[k].hint}</div>}
        </button>
      ))}
    </div>
  );
}

export function NumField({ id, label, unit, value, onChange, step = 1, min = 0, max = 1e9 }: { id: string; label: string; unit: string; value: number; onChange: (n: number) => void; step?: number; min?: number; max?: number }) {
  const [draft, setDraft] = useState<string | null>(null);
  const commit = () => {
    const n = parseNum(draft ?? "");
    if (n != null && n > 0) onChange(Math.min(max, Math.max(min, Math.round(n / step) * step)));
    setDraft(null);
  };
  return (
    <label className="f" htmlFor={id}>
      {label}
      <div className="unit-in">
        <input className="in num" id={id} inputMode="decimal" value={draft ?? String(+value.toFixed(2))} onFocus={() => setDraft(String(value))} onChange={(e) => setDraft(e.target.value)} onBlur={commit} onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLInputElement).blur()} />
        <span>{unit}</span>
      </div>
    </label>
  );
}

/** Four-digit PIN field: one real input, drawn as four boxes. */
export function PinInput({ id, value, onChange, label, autoFocus, invalid }: { id: string; value: string; onChange: (v: string) => void; label: string; autoFocus?: boolean; invalid?: boolean }) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className={`pin${invalid ? " bad" : ""}`} onClick={() => ref.current?.focus()}>
      <input
        ref={ref} id={id} className="pin-real" type="password" inputMode="numeric" autoComplete="off" maxLength={4} aria-label={label}
        value={value} autoFocus={autoFocus} onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 4))}
      />
      {[0, 1, 2, 3].map((i) => <span key={i} className={`pin-box${value.length > i ? " on" : ""}${value.length === i ? " cur" : ""}`} aria-hidden="true" />)}
    </div>
  );
}
