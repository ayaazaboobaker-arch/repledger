import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { addDays, MONTHS, parseYmd, todayStr, ymd } from "../lib/util";

const FULL_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WD = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const WD_LONG = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const monthKey = (s: string) => s.slice(0, 7);
const firstOfMonth = (s: string) => s.slice(0, 7) + "-01";
const shiftMonth = (s: string, n: number) => { const d = parseYmd(firstOfMonth(s)); d.setMonth(d.getMonth() + n); return ymd(d); };
const nice = (s: string) => { const d = parseYmd(s); return `${WD_LONG[(d.getDay() + 6) % 7]} ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; };

/** Phones and tablets keep the system date picker; mouse-and-keyboard screens get the themed calendar. */
function useDesktop() {
  const q = "(pointer: fine) and (min-width: 700px)";
  const [on, setOn] = useState(() => typeof window !== "undefined" && window.matchMedia(q).matches);
  useEffect(() => {
    const m = window.matchMedia(q);
    const f = () => setOn(m.matches);
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return on;
}

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  min?: string;
  max?: string;
  /** shade the days between these two (for a from / to pair) */
  range?: { from: string; to: string };
}

export function DatePicker({ id, label, value, onChange, min, max, range }: Props) {
  const desktop = useDesktop();
  if (!desktop) {
    return <input className="in date-native" type="date" id={id} aria-label={label} value={value} min={min} max={max} onChange={(e) => e.target.value && onChange(e.target.value)} />;
  }
  return <Calendar id={id} label={label} value={value} onChange={onChange} min={min} max={max} range={range} />;
}

function Calendar({ id, label, value, onChange, min, max, range }: Props) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"days" | "months">("days");
  const [month, setMonth] = useState(firstOfMonth(value));
  const [focus, setFocus] = useState(value);
  const [hover, setHover] = useState<string | null>(null);
  const [place, setPlace] = useState({ up: false, right: false });
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const today = todayStr();
  const allowed = (d: string) => (!min || d >= min) && (!max || d <= max);

  const openCal = () => { setMonth(firstOfMonth(value)); setFocus(value); setView("days"); setOpen(true); };
  const close = (refocus = true) => { setOpen(false); setHover(null); if (refocus) btn.current?.focus(); };
  const pick = (d: string) => { if (!allowed(d)) return; onChange(d); close(); };

  useEffect(() => {
    if (!open) return;
    const h = (e: PointerEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) close(false); };
    document.addEventListener("pointerdown", h);
    return () => document.removeEventListener("pointerdown", h);
  }, [open]);

  useLayoutEffect(() => {
    if (!open || !wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    setPlace({ up: window.innerHeight - r.bottom < 380 && r.top > window.innerHeight - r.bottom, right: r.left + 320 > window.innerWidth - 12 });
  }, [open]);

  useEffect(() => {
    if (open && view === "days") grid.current?.querySelector<HTMLElement>(`[data-d="${focus}"]`)?.focus();
  }, [open, focus, view, month]);

  const moveFocus = (d: string) => { setFocus(d); if (monthKey(d) !== monthKey(month)) setMonth(firstOfMonth(d)); };
  const onGridKey = (e: React.KeyboardEvent) => {
    const map: Record<string, () => string> = {
      ArrowLeft: () => addDays(focus, -1), ArrowRight: () => addDays(focus, 1),
      ArrowUp: () => addDays(focus, -7), ArrowDown: () => addDays(focus, 7),
      PageUp: () => shiftMonth(focus, -1).slice(0, 8) + focus.slice(8), PageDown: () => shiftMonth(focus, 1).slice(0, 8) + focus.slice(8),
      Home: () => addDays(focus, -((parseYmd(focus).getDay() + 6) % 7)), End: () => addDays(focus, 6 - ((parseYmd(focus).getDay() + 6) % 7)),
    };
    if (map[e.key]) {
      e.preventDefault();
      let d = map[e.key]();
      if (isNaN(parseYmd(d).getTime()) || ymd(parseYmd(d)) !== d) d = addDays(firstOfMonth(d), 27); // e.g. 31 Feb
      moveFocus(d);
    } else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(focus); }
    else if (e.key === "Escape") { e.preventDefault(); close(); }
  };

  // Six rows of Monday-first weeks around this month.
  const first = parseYmd(month);
  const start = addDays(month, -((first.getDay() + 6) % 7));
  const cells = Array.from({ length: 42 }, (_, i) => addDays(start, i));
  const rows = cells.slice(35).every((d) => monthKey(d) !== monthKey(month)) ? cells.slice(0, 35) : cells;

  // While hovering, preview the range you're about to make.
  const lo = range ? (hover && id.endsWith("from") ? hover : range.from) : null;
  const hi = range ? (hover && id.endsWith("to") ? hover : range.to) : null;
  const canPrev = !min || shiftMonth(month, -1) >= firstOfMonth(min);
  const canNext = !max || shiftMonth(month, 1) <= max;
  const year = first.getFullYear();

  return (
    <div className={`sel dp${open ? " open" : ""}`} ref={wrap}>
      <button
        ref={btn} type="button" id={id} className="sel-btn dp-btn" aria-haspopup="dialog" aria-expanded={open} aria-label={`${label}: ${nice(value)}. Choose date`}
        onClick={() => (open ? close() : openCal())}
        onKeyDown={(e) => { if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) { e.preventDefault(); openCal(); } }}
      >
        <svg className="dp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16.5" rx="2.5" /><path d="M3 9.5h18M8 2.5v4M16 2.5v4" /></svg>
        <span className="sel-val">{nice(value)}</span>
        <svg className="sel-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>

      {open && (
        <div className={`dp-pop${place.up ? " flip" : ""}${place.right ? " right" : ""}`} role="dialog" aria-label={label}>
          <div className="dp-head">
            <button type="button" className="dp-nav" onClick={() => (view === "days" ? setMonth(shiftMonth(month, -1)) : setMonth(`${year - 1}${month.slice(4)}`))} disabled={view === "days" && !canPrev} aria-label={view === "days" ? "Previous month" : "Previous year"}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button type="button" className="dp-title" onClick={() => setView(view === "days" ? "months" : "days")} aria-label={view === "days" ? "Choose month" : "Back to days"}>
              {view === "days" ? `${FULL_MONTHS[first.getMonth()]} ${year}` : year}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={view === "days" ? "M6 9l6 6 6-6" : "M6 15l6-6 6 6"} /></svg>
            </button>
            <button type="button" className="dp-nav" onClick={() => (view === "days" ? setMonth(shiftMonth(month, 1)) : setMonth(`${year + 1}${month.slice(4)}`))} disabled={view === "days" && !canNext} aria-label={view === "days" ? "Next month" : "Next year"}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>

          {view === "months" ? (
            <div className="dp-months">
              {MONTHS.map((m, i) => {
                const key = `${year}-${String(i + 1).padStart(2, "0")}-01`;
                const end = addDays(shiftMonth(key, 1), -1);
                const off = (min && end < min) || (max && key > max);
                return (
                  <button type="button" key={m} disabled={!!off} className={`dp-month${monthKey(key) === monthKey(value) ? " on" : ""}${monthKey(key) === monthKey(today) ? " now" : ""}`}
                    onClick={() => { setMonth(key); setFocus(allowed(key) ? key : min && key < min ? min : key); setView("days"); }}>
                    {m}
                  </button>
                );
              })}
            </div>
          ) : (
            <>
              <div className="dp-wd" aria-hidden="true">{WD.map((w) => <span key={w}>{w}</span>)}</div>
              <div className="dp-grid" ref={grid} role="grid" onKeyDown={onGridKey} onMouseLeave={() => setHover(null)}>
                {rows.map((d) => {
                  const inMonth = monthKey(d) === monthKey(month);
                  const ok = allowed(d);
                  const inRange = lo && hi && d > lo && d < hi;
                  const edge = lo && hi && (d === lo || d === hi);
                  const cls = ["dp-day", !inMonth && "out", !ok && "off", d === value && "on", d === today && "now", inRange && "in", edge && "edge", lo === d && "lo", hi === d && "hi"].filter(Boolean).join(" ");
                  return (
                    <button
                      type="button" key={d} data-d={d} className={cls} disabled={!ok} tabIndex={d === focus ? 0 : -1}
                      aria-label={nice(d)} aria-pressed={d === value}
                      onClick={() => pick(d)} onMouseEnter={() => ok && setHover(d)} onFocus={() => setFocus(d)}
                    >
                      {parseYmd(d).getDate()}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          <div className="dp-foot">
            <button type="button" className="btn ghost sm" onClick={() => pick(today)} disabled={!allowed(today)}>Today</button>
            <span className="xs faint">{view === "days" ? "Arrow keys + Enter work too" : "Pick a month"}</span>
          </div>
        </div>
      )}
    </div>
  );
}
