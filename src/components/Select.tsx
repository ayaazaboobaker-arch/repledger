import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";

export interface Option<T extends string> {
  value: T;
  label: string;
  hint?: ReactNode;
}

function useOutside(ref: React.RefObject<HTMLElement | null>, open: boolean, close: () => void) {
  useEffect(() => {
    if (!open) return;
    const h = (e: PointerEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) close(); };
    document.addEventListener("pointerdown", h);
    return () => document.removeEventListener("pointerdown", h);
  }, [open, close, ref]);
}

/** Opens upwards when there isn't room below. */
function usePlacement(open: boolean, anchor: React.RefObject<HTMLElement | null>) {
  const [up, setUp] = useState(false);
  useLayoutEffect(() => {
    if (!open || !anchor.current) return;
    const r = anchor.current.getBoundingClientRect();
    setUp(window.innerHeight - r.bottom < 280 && r.top > window.innerHeight - r.bottom);
  }, [open, anchor]);
  return up;
}

/** Custom dropdown: styled trigger, light-up options, full keyboard support. */
export function Select<T extends string>({ value, options, onChange, label, id, width, compact }: { value: T; options: Option<T>[]; onChange: (v: T) => void; label: string; id?: string; width?: number | string; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const typed = useRef({ s: "", t: 0 });
  const auto = useId();
  const lid = (id || auto) + "-list";
  const cur = options.find((o) => o.value === value);
  const up = usePlacement(open, wrap);
  const close = () => setOpen(false);
  useOutside(wrap, open, close);

  const openList = () => { setHi(Math.max(0, options.findIndex((o) => o.value === value))); setOpen(true); };
  const choose = (i: number) => { const o = options[i]; if (o) onChange(o.value); setOpen(false); btn.current?.focus(); };

  useEffect(() => {
    if (!open) return;
    list.current?.querySelector<HTMLElement>(`[data-i="${hi}"]`)?.scrollIntoView({ block: "nearest" });
  }, [hi, open]);

  const onKey = (e: React.KeyboardEvent) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) { e.preventDefault(); openList(); }
      return;
    }
    if (e.key === "ArrowDown") { e.preventDefault(); setHi((h) => Math.min(options.length - 1, h + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setHi((h) => Math.max(0, h - 1)); }
    else if (e.key === "Home") { e.preventDefault(); setHi(0); }
    else if (e.key === "End") { e.preventDefault(); setHi(options.length - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(hi); }
    else if (e.key === "Escape" || e.key === "Tab") { setOpen(false); }
    else if (e.key.length === 1) {
      const now = Date.now();
      typed.current = { s: now - typed.current.t < 700 ? typed.current.s + e.key.toLowerCase() : e.key.toLowerCase(), t: now };
      const i = options.findIndex((o) => o.label.toLowerCase().startsWith(typed.current.s));
      if (i >= 0) setHi(i);
    }
  };

  return (
    <div className={`sel${open ? " open" : ""}${compact ? " compact" : ""}`} ref={wrap} style={{ width }}>
      <button
        ref={btn} type="button" id={id} className="sel-btn" aria-haspopup="listbox" aria-expanded={open} aria-controls={lid} aria-label={`${label}: ${cur?.label ?? ""}`}
        onClick={() => (open ? setOpen(false) : openList())} onKeyDown={onKey}
      >
        <span className="sel-val">{cur?.label ?? "Choose…"}</span>
        <svg className="sel-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <ul className={`sel-list${up ? " flip" : ""}`} role="listbox" id={lid} ref={list} aria-label={label} aria-activedescendant={`${lid}-${hi}`} tabIndex={-1}>
          {options.map((o, i) => (
            <li
              key={o.value} id={`${lid}-${i}`} data-i={i} role="option" aria-selected={o.value === value}
              className={`sel-opt${i === hi ? " hi" : ""}${o.value === value ? " on" : ""}`}
              onPointerEnter={() => setHi(i)} onClick={() => choose(i)}
            >
              <span>{o.label}{o.hint && <small>{o.hint}</small>}</span>
              {o.value === value && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Text box with a custom suggestion list (replaces the browser's datalist). Free text is allowed. */
export function Combo({ value, onChange, onCommit, suggestions, placeholder, label, id, className = "in", style }: {
  value: string; onChange: (v: string) => void; onCommit?: (v: string) => void; suggestions: string[]; placeholder?: string; label: string; id?: string; className?: string; style?: React.CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(-1);
  const wrap = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const auto = useId();
  const lid = (id || auto) + "-list";
  const up = usePlacement(open, wrap);
  const q = value.trim().toLowerCase();
  const matches = (q ? suggestions.filter((s) => s.toLowerCase().includes(q) && s.toLowerCase() !== q) : suggestions)
    .sort((a, b) => Number(!a.toLowerCase().startsWith(q)) - Number(!b.toLowerCase().startsWith(q)))
    .slice(0, 8);
  const close = () => { setOpen(false); setHi(-1); };
  useOutside(wrap, open, close);
  useEffect(() => { list.current?.querySelector<HTMLElement>(`[data-i="${hi}"]`)?.scrollIntoView({ block: "nearest" }); }, [hi]);

  const pick = (s: string) => { onChange(s); onCommit?.(s); close(); };
  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setOpen(true); setHi((h) => Math.min(matches.length - 1, h + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setHi((h) => Math.max(-1, h - 1)); }
    else if (e.key === "Enter") {
      if (open && hi >= 0 && matches[hi]) { e.preventDefault(); pick(matches[hi]); }
      else { close(); }
    } else if (e.key === "Escape") close();
  };

  return (
    <div className="sel combo" ref={wrap} style={style}>
      <input
        id={id} className={className} value={value} placeholder={placeholder} aria-label={label} autoComplete="off"
        role="combobox" aria-expanded={open && matches.length > 0} aria-controls={lid} aria-autocomplete="list"
        aria-activedescendant={hi >= 0 ? `${lid}-${hi}` : undefined}
        onChange={(e) => { onChange(e.target.value); setOpen(true); setHi(-1); }}
        onFocus={() => setOpen(true)} onKeyDown={onKey}
        onBlur={() => onCommit?.(value)}
      />
      {open && matches.length > 0 && (
        <ul className={`sel-list${up ? " flip" : ""}`} role="listbox" id={lid} ref={list} aria-label={label}>
          {matches.map((s, i) => (
            <li key={s} id={`${lid}-${i}`} data-i={i} role="option" aria-selected={i === hi} className={`sel-opt${i === hi ? " hi" : ""}`}
              onPointerEnter={() => setHi(i)} onPointerDown={(e) => e.preventDefault()} onClick={() => pick(s)}>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
