import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ActivitySheet } from "../components/ActivitySheet";
import { ConfirmButton } from "../components/safety";
import { INTENSITY, SPORT_BY_ID } from "../lib/burn";
import { Icon, Sheet, toast } from "../components/ui";
import { KG_VALUES, SET_VALUES, WheelPicker } from "../components/WheelPicker";
import { ALL_EXERCISES, defaultsFor, EXERCISES, GROUPS, type ExGroup } from "../lib/exercises";
import { useStore } from "../lib/store";
import type { DowKey, PlanExercise, WeekPlan } from "../lib/types";
import { addDays, DOW, DOW_LONG, dowKey, fmtKg, parseYmd, todayStr, weekStart } from "../lib/util";

const REPS = Array.from({ length: 60 }, (_, i) => i + 1);
const kgLabel = (kg: number) => (kg ? `${fmtKg(kg)} kg` : "Bodyweight");

type Editing =
  | { mode: "add"; day: DowKey }
  | { mode: "edit"; day: DowKey; index: number };

export function Plan() {
  const { plan, setPlan } = useStore();
  const [editing, setEditing] = useState<Editing | null>(null);
  const [renaming, setRenaming] = useState<DowKey | null>(null);
  const [cardioEdit, setCardioEdit] = useState<{ day: DowKey; index: number | null } | null>(null);
  const [sel, setSelRaw] = useState<DowKey>(() => { try { const v = sessionStorage.getItem("rl.planday") as DowKey | null; if (v && DOW.includes(v)) return v; } catch { /* ignore */ } return dowKey(todayStr()); });
  const setSel = (k: DowKey) => { setSelRaw(k); try { sessionStorage.setItem("rl.planday", k); } catch { /* ignore */ } };
  const step = (dir: 1 | -1) => setSel(DOW[(DOW.indexOf(sel) + dir + 7) % 7]);
  const swipe = useRef<{ x: number; y: number } | null>(null);
  const mutate = (fn: (p: WeekPlan) => void) => {
    const p: WeekPlan = JSON.parse(JSON.stringify(plan));
    fn(p);
    setPlan(p);
  };
  let train = 0, sets = 0, cardioMin = 0;
  DOW.forEach((k) => {
    if (plan[k].exercises.length || plan[k].cardio?.length) train++;
    plan[k].exercises.forEach((e) => (sets += e.sets));
    (plan[k].cardio || []).forEach((c) => (cardioMin += c.minutes));
  });

  return (
    <>
      <div className="page-head">
        <div><div className="eyebrow">Weekly plan</div><h1>Your training week</h1></div>
        <Link to="/profile" className="btn">{Icon.star} Get a recommended plan</Link>
      </div>
      <div className="plan-stats">
        <div><b>{train}</b><span>training days</span></div>
        <div><b>{7 - train}</b><span>rest days</span></div>
        <div><b>{sets}</b><span>working sets a week</span></div>
        <div><b>{cardioMin}</b><span>cardio minutes a week</span></div>
      </div>
      <PlanWeek plan={plan} sel={sel} setSel={setSel} />

      <div className="plan-day" key={sel}
        onTouchStart={(e) => { swipe.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
        onTouchEnd={(e) => {
          const s0 = swipe.current; swipe.current = null;
          if (!s0) return;
          const dx = e.changedTouches[0].clientX - s0.x, dy = e.changedTouches[0].clientY - s0.y;
          if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
        }}>
        <DayCard day={sel} plan={plan} mutate={mutate} onAdd={() => setEditing({ mode: "add", day: sel })} onEdit={(index) => setEditing({ mode: "edit", day: sel, index })} onRename={() => setRenaming(sel)} onCardio={(index) => setCardioEdit({ day: sel, index })} />
        <div className="plan-daynav">
          <button className="btn ghost sm" onClick={() => step(-1)}>{Icon.left} {DOW_LONG[DOW[(DOW.indexOf(sel) + 6) % 7]]}</button>
          <span className="xs faint">Tap an exercise to change it</span>
          <button className="btn ghost sm" onClick={() => step(1)}>{DOW_LONG[DOW[(DOW.indexOf(sel) + 1) % 7]]} {Icon.right}</button>
        </div>
      </div>

      <ActivitySheet
        open={!!cardioEdit} mode="plan"
        heading={cardioEdit ? `Add cardio to ${DOW_LONG[cardioEdit.day]}` : undefined}
        initial={cardioEdit && cardioEdit.index != null ? { ...plan[cardioEdit.day].cardio![cardioEdit.index] } : null}
        onClose={() => setCardioEdit(null)}
        onSave={(a) => {
          const { day, index } = cardioEdit!;
          mutate((p) => {
            const pd = p[day];
            const block = { sport: a.sport, minutes: a.minutes, intensity: a.intensity };
            const list = [...(pd.cardio || [])];
            if (index != null) list[index] = block; else list.push(block);
            if (!pd.exercises.length && (!pd.cardio?.length || index != null)) { pd.title = SPORT_BY_ID.get(a.sport)?.label ?? "Cardio"; pd.focus = `${a.minutes} min · ${a.intensity}`; }
            pd.cardio = list;
          });
          toast(index != null ? "Cardio updated" : `Cardio added to ${DOW_LONG[day]}`);
          setCardioEdit(null);
        }}
      />
      <RenameSheet day={renaming} plan={plan} mutate={mutate} onClose={() => setRenaming(null)} />
      <ExerciseSheet editing={editing} plan={plan} mutate={mutate} onClose={() => setEditing(null)} />
    </>
  );
}

function DayCard({ day, plan, mutate, onAdd, onEdit, onRename, onCardio }: { day: DowKey; plan: WeekPlan; mutate: (fn: (p: WeekPlan) => void) => void; onAdd: () => void; onEdit: (i: number) => void; onRename: () => void; onCardio: (i: number | null) => void }) {
  const pd = plan[day];
  const cardio = pd.cardio || [];
  const lifting = pd.exercises.length > 0;
  const rest = !lifting && !cardio.length;
  const sets = pd.exercises.reduce((n, e) => n + e.sets, 0);
  const cMin = cardio.reduce((n, c) => n + c.minutes, 0);
  const removeCardio = (i: number) => mutate((p) => {
    const list = (p[day].cardio || []).filter((_, j) => j !== i);
    p[day].cardio = list.length ? list : undefined;
    if (!p[day].exercises.length && !list.length) p[day] = { title: "Rest", exercises: [] };
  });
  return (
    <section className={`card pday${rest ? " is-rest" : ""}`}>
      <div className="pday-top">
        <div className="dow">{DOW_LONG[day]}</div>
        <span className={`pill ${rest ? "" : "good"}`}>{rest ? "Rest" : [lifting && `${pd.exercises.length} exercise${pd.exercises.length === 1 ? "" : "s"} · ${sets} sets`, cardio.length && `${cMin} min cardio`].filter(Boolean).join(" · ")}</span>
      </div>
      <div className="ptitle-row">
        <h3 className="ptitle">{pd.title || (rest ? "Rest" : "Session")}</h3>
        {lifting && <button className="icon-btn rename" onClick={onRename} aria-label={`Rename ${DOW_LONG[day]}`}>{Icon.edit}</button>}
      </div>
      {lifting && pd.focus && <p className="pfocus">{pd.focus}</p>}

      {rest ? (
        <div className="rest-body">
          <span className="rest-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" /></svg>
          </span>
          <div>
            <b>Rest and recover</b>
            <div className="small muted">Muscles grow between sessions. Add an exercise to make this a training day.</div>
          </div>
        </div>
      ) : !lifting ? null : (
        <ExerciseList
          day={day} items={pd.exercises} onEdit={onEdit}
          onMove={(from, to) => mutate((p) => { const ex = p[day].exercises; const [m] = ex.splice(from, 1); ex.splice(to, 0, m); })}
        />
      )}

      {cardio.length > 0 && (
        <ul className="ex-list cardio-list">
          {cardio.map((c, i) => (
            <li key={i}>
              <div className="ex-row cardio-ex">
                <button className="cx-main" onClick={() => onCardio(i)} aria-label={`Edit ${SPORT_BY_ID.get(c.sport)?.label}: ${c.minutes} minutes, ${c.intensity}`}>
                  <span className="ex-n cardio-n">{Icon.run}</span>
                  <span className="ex-name">{SPORT_BY_ID.get(c.sport)?.label ?? "Cardio"}</span>
                  <span className="ex-spec"><b>{c.minutes} min</b><small>{INTENSITY[c.intensity].label}</small></span>
                </button>
                <button className="icon-btn" onClick={() => removeCardio(i)} aria-label={`Remove ${SPORT_BY_ID.get(c.sport)?.label}`}>{Icon.x}</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="pday-foot">
        <div className="add-row">
          <button className="btn block add-ex" onClick={onAdd}>{Icon.plus} Exercise</button>
          <button className="btn block add-ex" onClick={() => onCardio(null)}>{Icon.run} Cardio</button>
        </div>
        {!rest && (
          <ConfirmButton className="btn ghost sm" label="Make rest day" question={`Clear ${DOW_LONG[day]}'s exercises and cardio and make it a rest day?`} confirmLabel="Make rest"
            onConfirm={() => mutate((p) => { p[day] = { title: "Rest", exercises: [] }; })} />
        )}
      </div>
    </section>
  );
}

/** The week as tiles, like Train: tap a day to see and edit just that day. */
function PlanWeek({ plan, sel, setSel }: { plan: WeekPlan; sel: DowKey; setSel: (k: DowKey) => void }) {
  const today = todayStr();
  const ws = weekStart(today);
  const strip = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = strip.current, tile = el?.querySelector<HTMLElement>(".sel");
    if (el && tile && el.scrollWidth > el.clientWidth) el.scrollTo({ left: tile.offsetLeft - (el.clientWidth - tile.offsetWidth) / 2, behavior: "smooth" });
  }, [sel]);
  return (
    <div className="week-strip plan-strip" ref={strip} role="radiogroup" aria-label="Day of the week">
      {DOW.map((k, i) => {
        const pd = plan[k];
        const date = addDays(ws, i);
        const lift = pd.exercises.length > 0;
        const cardio = pd.cardio || [];
        const kind = lift ? "train glow" : cardio.length ? "train cardio glow" : "rest";
        const sets = pd.exercises.reduce((n, e) => n + e.sets, 0);
        return (
          <button key={k} role="radio" aria-checked={sel === k} className={`day-tile ${kind}${sel === k ? " sel" : ""}${date === today ? " is-today" : ""}`} onClick={() => setSel(k)}>
            <div className="dt-top">
              <span className="dt-dow">{DOW_LONG[k].slice(0, 3)}</span>
              <span className="dt-num">{parseYmd(date).getDate()}</span>
            </div>
            <div className="dt-title">{lift || cardio.length ? pd.title || "Session" : "Rest"}</div>
            <div className="dt-sub">{lift ? `${pd.exercises.length} ex · ${sets} sets${cardio.length ? " + cardio" : ""}` : cardio.length ? `Cardio · ${cardio.reduce((n, c) => n + c.minutes, 0)} min` : "Recovery"}</div>
          </button>
        );
      })}
    </div>
  );
}

/**
 * Exercises you can put in any order: drag the grip (or press and hold a row) and drop it where you want it.
 * Keyboard: focus the grip and use the up/down arrow keys.
 */
function ExerciseList({ day, items, onEdit, onMove }: { day: DowKey; items: PlanExercise[]; onEdit: (i: number) => void; onMove: (from: number, to: number) => void }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [drag, setDrag] = useState<{ from: number; to: number; dy: number } | null>(null);
  const st = useRef<{ from: number; to: number; y0: number; mids: number[]; h: number; scroll0: number; pid: number; el: HTMLElement; raf: number; lastY: number } | null>(null);
  const press = useRef<{ t: number; x: number; y: number; i: number; pid: number; el: HTMLElement } | null>(null);
  const justDragged = useRef(false);

  const begin = (i: number, e: { clientY: number; pointerId: number }, el: HTMLElement) => {
    const list = listRef.current;
    if (!list) return;
    const rows = [...list.children] as HTMLElement[];
    const rects = rows.map((r) => r.getBoundingClientRect());
    const gap = rects.length > 1 ? rects[1].top - rects[0].bottom : 6;
    st.current = { from: i, to: i, y0: e.clientY, mids: rects.map((r) => r.top + r.height / 2 + window.scrollY), h: rects[i].height + gap, scroll0: window.scrollY, pid: e.pointerId, el, raf: 0, lastY: e.clientY };
    try { el.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    navigator.vibrate?.(8);
    setDrag({ from: i, to: i, dy: 0 });
    const tick = () => {
      const s = st.current;
      if (!s) return;
      // Scroll the page when the row is dragged near the top or bottom edge.
      const edge = 90, y = s.lastY, vh = window.innerHeight;
      const v = y < edge ? -(edge - y) / 6 : y > vh - edge ? (y - (vh - edge)) / 6 : 0;
      if (v) { window.scrollBy(0, v); update(s.lastY); }
      s.raf = requestAnimationFrame(tick);
    };
    st.current.raf = requestAnimationFrame(tick);
  };
  const update = (clientY: number) => {
    const s = st.current;
    if (!s) return;
    s.lastY = clientY;
    const dy = clientY - s.y0 + (window.scrollY - s.scroll0);
    const at = s.mids[s.from] + dy;
    let to = s.from;
    while (to < s.mids.length - 1 && at > s.mids[to + 1]) to++;
    while (to > 0 && at < s.mids[to - 1]) to--;
    if (to !== s.to) navigator.vibrate?.(4);
    s.to = to;
    setDrag({ from: s.from, to, dy });
  };
  const end = () => {
    const s = st.current;
    if (!s) return;
    cancelAnimationFrame(s.raf);
    try { s.el.releasePointerCapture(s.pid); } catch { /* ignore */ }
    st.current = null;
    setDrag(null);
    if (s.to !== s.from) { onMove(s.from, s.to); justDragged.current = true; setTimeout(() => (justDragged.current = false), 350); }
  };
  useEffect(() => () => { if (st.current) cancelAnimationFrame(st.current.raf); if (press.current) clearTimeout(press.current.t); }, []);
  // Once a row is picked up, stop the finger from scrolling the page instead (touch-action can't change mid-touch).
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const block = (e: TouchEvent) => { if (st.current) e.preventDefault(); };
    el.addEventListener("touchmove", block, { passive: false });
    return () => el.removeEventListener("touchmove", block);
  }, []);

  const shiftFor = (i: number) => {
    if (!drag || i === drag.from) return 0;
    const h = st.current?.h ?? 0;
    if (drag.from < drag.to && i > drag.from && i <= drag.to) return -h;
    if (drag.from > drag.to && i < drag.from && i >= drag.to) return h;
    return 0;
  };

  return (
    <ol className={`ex-list reorder${drag ? " is-dragging" : ""}`} ref={listRef} aria-label={`${DOW_LONG[day]} exercises. Drag the handles to reorder.`}>
      {items.map((e, i) => {
        const lifted = drag?.from === i;
        return (
          <li key={e.name + i} className={lifted ? "lifted" : ""} style={{ transform: `translateY(${lifted ? drag!.dy : shiftFor(i)}px)` }}>
            <div className="ex-row reorder-row">
              <button
                className="ex-grip" aria-label={`Move ${e.name}. Use up and down arrow keys.`}
                onPointerDown={(ev) => { ev.preventDefault(); begin(i, ev, ev.currentTarget); }}
                onPointerMove={(ev) => st.current && update(ev.clientY)}
                onPointerUp={end} onPointerCancel={end}
                onKeyDown={(ev) => {
                  if (ev.key === "ArrowUp" && i > 0) { ev.preventDefault(); onMove(i, i - 1); requestAnimationFrame(() => (listRef.current?.children[i - 1]?.querySelector(".ex-grip") as HTMLElement)?.focus()); }
                  if (ev.key === "ArrowDown" && i < items.length - 1) { ev.preventDefault(); onMove(i, i + 1); requestAnimationFrame(() => (listRef.current?.children[i + 1]?.querySelector(".ex-grip") as HTMLElement)?.focus()); }
                }}
              >{Icon.grip}</button>
              <button
                className="ex-main" aria-label={`Edit ${e.name}: ${e.sets} sets of ${e.reps}, ${kgLabel(e.kg)}`}
                onClick={() => { if (!justDragged.current) onEdit(i); }}
                onContextMenu={(ev) => ev.preventDefault()}
                onPointerDown={(ev) => {
                  if (ev.pointerType === "mouse") return;
                  const el = ev.currentTarget, x = ev.clientX, y = ev.clientY, pid = ev.pointerId;
                  press.current = { x, y, i, pid, el, t: window.setTimeout(() => { if (press.current) { begin(i, { clientY: press.current.y, pointerId: pid }, el); press.current = null; } }, 380) };
                }}
                onPointerMove={(ev) => {
                  if (st.current) { ev.preventDefault(); update(ev.clientY); return; }
                  const pr = press.current;
                  if (pr && Math.hypot(ev.clientX - pr.x, ev.clientY - pr.y) > 8) { clearTimeout(pr.t); press.current = null; }
                }}
                onPointerUp={() => { if (press.current) { clearTimeout(press.current.t); press.current = null; } if (st.current) end(); }}
                onPointerCancel={() => { if (press.current) { clearTimeout(press.current.t); press.current = null; } if (st.current) end(); }}
              >
                <span className="ex-n">{drag && drag.from !== i ? i + 1 + (shiftFor(i) < 0 ? -1 : shiftFor(i) > 0 ? 1 : 0) : drag ? drag.to + 1 : i + 1}</span>
                <span className="ex-name">{e.name}</span>
                <span className="ex-spec"><b>{e.sets}×{e.reps}</b><small>{e.kg ? `${fmtKg(e.kg)} kg` : "BW"}</small></span>
                <span className="ex-chev">{Icon.right}</span>
              </button>
            </div>
          </li>
        );
      })}
      {items.length > 1 && <li className="reorder-hint xs faint" aria-hidden="true">Drag {Icon.grip} or press and hold to reorder</li>}
    </ol>
  );
}

/* ---------- add / edit sheet ---------- */

function ExerciseSheet({ editing, plan, mutate, onClose }: { editing: Editing | null; plan: WeekPlan; mutate: (fn: (p: WeekPlan) => void) => void; onClose: () => void }) {
  const [step, setStep] = useState<"pick" | "numbers">("pick");
  const [draft, setDraft] = useState<PlanExercise>({ name: "", sets: 3, reps: 10, kg: 0 });

  useEffect(() => {
    if (!editing) return;
    if (editing.mode === "edit") { setDraft({ ...plan[editing.day].exercises[editing.index] }); setStep("numbers"); }
    else { setStep("pick"); setDraft({ name: "", sets: 3, reps: 10, kg: 0 }); }
    // Only when the sheet opens for a new target.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing]);

  if (!editing) return null;
  const day = editing.day;
  const dayName = DOW_LONG[day];
  const isEdit = editing.mode === "edit";
  const list = plan[day].exercises;

  const choose = (name: string) => {
    setDraft((d) => (isEdit ? { ...d, name } : { name, ...defaultsFor(name) }));
    setStep("numbers");
  };
  const save = () => {
    mutate((p) => {
      const pd = p[day];
      if (isEdit) pd.exercises[editing.index] = { ...draft };
      else {
        if (!pd.exercises.length && (!pd.title || /^rest$/i.test(pd.title) || pd.cardio?.length)) { pd.title = "Session"; pd.focus = undefined; }
        pd.exercises.push({ ...draft });
      }
    });
    toast(isEdit ? `${draft.name} updated` : `${draft.name} added to ${dayName}`);
    onClose();
  };
  const move = (dir: -1 | 1) => {
    if (!isEdit) return;
    const j = editing.index + dir;
    if (j < 0 || j >= list.length) return;
    mutate((p) => { const ex = p[day].exercises; [ex[editing.index], ex[j]] = [ex[j], ex[editing.index]]; });
    onClose();
  };
  const remove = () => {
    if (!isEdit) return;
    mutate((p) => {
      p[day].exercises.splice(editing.index, 1);
      if (p[day].exercises.length) return;
      const c = p[day].cardio;
      p[day] = c?.length ? { title: SPORT_BY_ID.get(c[0].sport)?.label ?? "Cardio", focus: `${c[0].minutes} min · ${c[0].intensity}`, exercises: [], cardio: c } : { title: "Rest", exercises: [] };
    });
    toast(`${draft.name} removed`);
    onClose();
  };
  const copyDay = (from: DowKey) => {
    mutate((p) => { p[day] = JSON.parse(JSON.stringify(p[from])); });
    toast(`${dayName} now matches ${DOW_LONG[from]}`);
    onClose();
  };

  const title = step === "pick" ? (isEdit ? "Change exercise" : `Add to ${dayName}`) : draft.name;
  return (
    <Sheet
      open tall={step === "pick"} label={title} onClose={onClose}
      title={
        <div className="spread">
          <div className="row" style={{ gap: 6, minWidth: 0 }}>
            {step === "numbers" && !isEdit && <button className="icon-btn" onClick={() => setStep("pick")} aria-label="Back to exercise list">{Icon.left}</button>}
            {step === "pick" && isEdit && <button className="icon-btn" onClick={() => setStep("numbers")} aria-label="Back">{Icon.left}</button>}
            <div style={{ minWidth: 0 }}>
              <div className="eyebrow">{dayName}</div>
              <h2 className="sheet-title">{title}</h2>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">{Icon.x}</button>
        </div>
      }
      footer={step === "numbers" ? (
        <button className="btn primary lg block" onClick={save}>{isEdit ? "Save changes" : `Add to ${dayName}`}</button>
      ) : undefined}
    >
      {step === "pick" ? (
        <Picker taken={list.map((e) => e.name)} onPick={choose} plan={plan} day={day} onCopy={isEdit ? undefined : copyDay} />
      ) : (
        <>
          <div className="spec-preview">
            <b>{draft.sets} × {draft.reps}</b><span>{kgLabel(draft.kg)}</span>
          </div>
          <div className="wheels">
            <WheelPicker id="pw-sets" label="Sets" values={SET_VALUES} value={draft.sets} onChange={(sets) => setDraft((d) => ({ ...d, sets }))} />
            <WheelPicker id="pw-reps" label="Reps" values={REPS} value={draft.reps} onChange={(reps) => setDraft((d) => ({ ...d, reps }))} />
            <WheelPicker id="pw-kg" label="Weight kg" values={KG_VALUES} value={draft.kg} onChange={(kg) => setDraft((d) => ({ ...d, kg }))} format={(v) => (v === 0 ? "BW" : fmtKg(v))} />
          </div>
          <div className="chips quick-picks" style={{ marginTop: 12 }} aria-label="Quick picks">
            {[[3, 8], [3, 10], [3, 12], [4, 6], [5, 5]].map(([s, r]) => (
              <button key={`${s}x${r}`} className="chip" aria-pressed={draft.sets === s && draft.reps === r} onClick={() => setDraft((d) => ({ ...d, sets: s, reps: r }))}>{s}×{r}</button>
            ))}
            <button className="chip" aria-pressed={draft.kg === 0} onClick={() => setDraft((d) => ({ ...d, kg: 0 }))}>Bodyweight</button>
          </div>
          <p className="xs faint" style={{ marginTop: 10 }}>Scroll the wheels or tap a number. Weight is your working target - use BW for bodyweight moves.</p>
          {isEdit && (
            <div className="edit-actions">
              <button className="btn sm" onClick={() => setStep("pick")}>{Icon.edit} Change exercise</button>
              <button className="btn sm" onClick={() => move(-1)} disabled={editing.index === 0}>{Icon.up} Move up</button>
              <button className="btn sm" onClick={() => move(1)} disabled={editing.index === list.length - 1}>{Icon.down} Move down</button>
              <button className="btn sm danger-link" onClick={remove}>{Icon.trash} Remove</button>
            </div>
          )}
        </>
      )}
    </Sheet>
  );
}

function Picker({ taken, onPick, plan, day, onCopy }: { taken: string[]; onPick: (name: string) => void; plan: WeekPlan; day: DowKey; onCopy?: (from: DowKey) => void }) {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState<ExGroup | "All">("All");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus(); }, []);

  const query = q.trim().toLowerCase();
  const results = useMemo(() => {
    const pool = group === "All" ? ALL_EXERCISES : EXERCISES[group];
    return query ? ALL_EXERCISES.filter((n) => n.toLowerCase().includes(query)) : pool;
  }, [group, query]);
  const exact = ALL_EXERCISES.some((n) => n.toLowerCase() === query);
  const copyable = DOW.filter((k) => k !== day && plan[k].exercises.length);

  return (
    <div className="picker">
      <div className="search">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <input ref={inputRef} id="ex-search" className="in" placeholder="Search exercises" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search exercises" autoComplete="off"
          onKeyDown={(e) => { if (e.key === "Enter" && q.trim()) { e.preventDefault(); onPick(results[0] && !exact && results.length === 1 ? results[0] : (ALL_EXERCISES.find((n) => n.toLowerCase() === query) ?? q.trim())); } }} />
      </div>
      {!query && (
        <div className="chips scroll-chips" role="tablist" aria-label="Muscle group">
          {(["All", ...GROUPS] as const).map((g) => (
            <button key={g} role="tab" className="chip" aria-selected={group === g} aria-pressed={group === g} onClick={() => setGroup(g)}>{g}</button>
          ))}
        </div>
      )}
      <ul className="pick-list">
        {query && !exact && (
          <li><button className="pick-item custom" onClick={() => onPick(q.trim())}>{Icon.plus}<span>Add “{q.trim()}”</span><small>Custom exercise</small></button></li>
        )}
        {results.map((n) => (
          <li key={n}>
            <button className="pick-item" onClick={() => onPick(n)}>
              <span>{n}</span>
              {taken.includes(n) ? <small className="taken">In this day</small> : <small>{GROUPS.find((g) => EXERCISES[g].includes(n))}</small>}
            </button>
          </li>
        ))}
        {!results.length && !query && <li className="small muted">Nothing here yet.</li>}
      </ul>
      {onCopy && copyable.length > 0 && !query && (
        <div className="copy-day">
          <div className="f" style={{ marginBottom: 6 }}>Or copy a whole day</div>
          <div className="chips">
            {copyable.map((k) => <button key={k} className="chip" onClick={() => onCopy(k)}>{DOW_LONG[k].slice(0, 3)} · {plan[k].title || "Session"}</button>)}
          </div>
        </div>
      )}
    </div>
  );
}

const NAME_IDEAS = ["Push", "Pull", "Legs", "Upper", "Lower", "Full body", "Chest & back", "Arms", "Glutes"];

/** Rename a day - only through this sheet, so headings can't be changed by accident. */
function RenameSheet({ day, plan, mutate, onClose }: { day: DowKey | null; plan: WeekPlan; mutate: (fn: (p: WeekPlan) => void) => void; onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [focus, setFocus] = useState("");
  useEffect(() => { if (day) { setTitle(plan[day].title); setFocus(plan[day].focus || ""); } }, [day, plan]);
  if (!day) return null;
  const save = () => {
    mutate((p) => { p[day].title = title.trim() || "Session"; p[day].focus = focus.trim() || undefined; });
    toast(`${DOW_LONG[day]} renamed`);
    onClose();
  };
  return (
    <Sheet open label={`Rename ${DOW_LONG[day]}`} onClose={onClose}
      title={<div className="spread"><div><div className="eyebrow">{DOW_LONG[day]}</div><h2 className="sheet-title">Rename session</h2></div><button className="icon-btn" onClick={onClose} aria-label="Close">{Icon.x}</button></div>}
      footer={<button className="btn primary lg block" onClick={save}>Save</button>}>
      <form className="stack" style={{ gap: 12 }} onSubmit={(e) => { e.preventDefault(); save(); }}>
        <label className="f">Session name<input className="in" id="rn-title" value={title} maxLength={24} onChange={(e) => setTitle(e.target.value)} /></label>
        <div className="chips">{NAME_IDEAS.map((n) => <button type="button" key={n} className="chip" aria-pressed={title === n} onClick={() => setTitle(n)}>{n}</button>)}</div>
        <label className="f">Focus <span className="faint">(optional)</span><input className="in" id="rn-focus" value={focus} maxLength={48} placeholder="e.g. Chest, shoulders, triceps" onChange={(e) => setFocus(e.target.value)} /></label>
      </form>
    </Sheet>
  );
}
