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
import { DOW, DOW_LONG, fmtKg } from "../lib/util";

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
      <p className="small muted prose" style={{ marginBottom: 16 }}>Tap an exercise to change its sets, reps and weight. Changes apply to sessions you haven't started yet.</p>

      <div className="plan-grid">
        {DOW.map((k) => (
          <DayCard key={k} day={k} plan={plan} mutate={mutate} onAdd={() => setEditing({ mode: "add", day: k })} onEdit={(index) => setEditing({ mode: "edit", day: k, index })} onRename={() => setRenaming(k)} onCardio={(index) => setCardioEdit({ day: k, index })} />
        ))}
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
        <ol className="ex-list">
          {pd.exercises.map((e, i) => (
            <li key={i}>
              <button className="ex-row" onClick={() => onEdit(i)} aria-label={`Edit ${e.name}: ${e.sets} sets of ${e.reps}, ${kgLabel(e.kg)}`}>
                <span className="ex-n">{i + 1}</span>
                <span className="ex-name">{e.name}</span>
                <span className="ex-spec"><b>{e.sets}×{e.reps}</b><small>{e.kg ? `${fmtKg(e.kg)} kg` : "BW"}</small></span>
                <span className="ex-chev">{Icon.right}</span>
              </button>
            </li>
          ))}
        </ol>
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
