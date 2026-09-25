import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FormCheck } from "../components/coach/FormCheck";
import { NutritionCoach } from "../components/coach/Nutrition";
import { Icon, Sparkline, toast } from "../components/ui";
import { devUnlockAllowed, FREE_FORM_CHECKS, freeFormChecksUsed, setDevUnlock, spendFreeFormCheck, useCoachAccess } from "../lib/coach/access";
import { useCurrentAccount } from "../lib/accounts";
import { applyToPlan, recommendAll, weekReview, type Recommendation, type RecKind, type Target } from "../lib/coach/engine";
import { useStore } from "../lib/store";
import { knowFor } from "../lib/coach/library";
import { coachPicks, type Pick } from "../lib/coach/picks";
import { loadHist } from "../components/coach/FormCheck";
import type { WeekPlan } from "../lib/types";
import { DOW } from "../lib/util";
import { fmtKg, shortDate } from "../lib/util";

const KIND: Record<RecKind, { label: string; tone: "up" | "hold" | "down" | "new" }> = {
  "start": { label: "New", tone: "new" },
  "add-weight": { label: "Move up", tone: "up" },
  "add-reps": { label: "Move up", tone: "up" },
  "hold": { label: "Hold", tone: "hold" },
  "build-reps": { label: "Plateau", tone: "down" },
  "drop-set": { label: "Plateau", tone: "down" },
  "reset": { label: "Reset", tone: "down" },
};

const spec = (t: Target, bw: boolean) => `${t.sets}×${t.reps}${bw || !t.kg ? "" : ` @ ${fmtKg(t.kg)} kg`}`;
const same = (a: Target, b: Target) => a.sets === b.sets && a.reps === b.reps && a.kg === b.kg;

export function Coach() {
  const access = useCoachAccess();
  return (
    <div className="coach">
      <div className="page-head">
        <div>
          <div className="eyebrow">Coach</div>
          <h1>Your coach</h1>
        </div>
        {access.pro && <span className="pill coach-pill">{Icon.coach} {access.source === "demo" ? "Pro · demo" : access.source === "dev" ? "Pro · testing" : "Pro"}</span>}
      </div>
      {access.loading ? <div className="card empty">Checking your plan…</div> : access.pro ? <CoachTabs /> : <Paywall />}
      {access.source === "dev" && <button className="btn ghost sm" style={{ marginTop: 12 }} onClick={() => setDevUnlock(false)}>{Icon.lock} Lock again (testing)</button>}
    </div>
  );
}

/* ---------- the paid view ---------- */

const TABS = [
  { id: "training", label: "Training", icon: Icon.train },
  { id: "nutrition", label: "Nutrition", icon: Icon.food },
  { id: "form", label: "Form check", icon: Icon.video },
] as const;
type TabId = (typeof TABS)[number]["id"];

function CoachTabs() {
  const [params, setParams] = useSearchParams();
  const tab = (TABS.find((t) => t.id === params.get("tab"))?.id ?? "training") as TabId;
  return (
    <>
      <div className="seg coach-tabs" role="tablist" aria-label="Coach">
        {TABS.map((t) => (
          <button key={t.id} role="tab" aria-selected={tab === t.id} aria-pressed={tab === t.id} onClick={() => setParams(t.id === "training" ? {} : { tab: t.id }, { replace: true })}>{t.icon}{t.label}</button>
        ))}
      </div>
      {tab === "training" ? <TrainingCoach /> : tab === "nutrition" ? <NutritionCoach /> : <FormCheck />}
    </>
  );
}

function TrainingCoach() {
  const { days, plan, setPlan } = useStore();
  const recs = useMemo(() => recommendAll(days, plan), [days, plan]);
  const review = useMemo(() => weekReview(days, plan, recs), [days, plan, recs]);
  const order: RecKind[] = ["reset", "drop-set", "build-reps", "add-weight", "add-reps", "hold", "start"];
  const sorted = [...recs].sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind));
  const pending = recs.filter((r) => !same(r.now, r.next));

  const apply = (r: Recommendation) => {
    setPlan(applyToPlan(useStore.getState().plan, r.name, r.next));
    toast(`${r.name}: plan set to ${spec(r.next, r.bodyweight)}`);
  };
  const applyAll = () => {
    let p = useStore.getState().plan;
    for (const r of pending) p = applyToPlan(p, r.name, r.next);
    setPlan(p);
    toast(`Updated ${pending.length} exercise${pending.length > 1 ? "s" : ""} in your plan`);
  };

  return (
    <div className="stack">
      <WeekCard r={review} />
      <PicksCard recs={recs} />

      <section className="card">
        <div className="card-h">
          <div>
            <h2>Next session calls</h2>
            <p className="small muted" style={{ marginTop: 4 }}>One call per exercise in your plan, from what you've logged. Apply one and your plan updates for every day it appears.</p>
          </div>
          {pending.length > 1 && <button className="btn sm primary" onClick={applyAll}>{Icon.check} Apply all {pending.length}</button>}
        </div>
        {sorted.length ? (
          <ul className="recs">{sorted.map((r) => <RecRow key={r.name} r={r} onApply={() => apply(r)} />)}</ul>
        ) : (
          <div className="empty">Add exercises to your <Link to="/plan">weekly plan</Link> and the Coach will make a call for each one.</div>
        )}
      </section>

      <p className="xs faint coach-note">The Coach gives general training guidance from your logs, not medical advice. Stop if anything hurts and check with a professional.</p>
    </div>
  );
}

function WeekCard({ r }: { r: ReturnType<typeof weekReview> }) {
  const [allPrs, setAllPrs] = useState(false);
  const prs = allPrs ? r.prs : r.prs.slice(0, 3);
  return (
    <section className="card coach-week">
      <div className="eyebrow">Week of {shortDate(r.week)}</div>
      <h2 className="coach-headline">{r.headline}</h2>
      <div className="coach-kpis">
        <div><b>{r.done}<span>/{r.planned}</span></b><small>sessions</small></div>
        <div><b className={r.volumeChange == null ? "" : r.volumeChange >= 0 ? "up" : "down"}>{r.volumeChange == null ? "–" : `${r.volumeChange >= 0 ? "+" : "−"}${Math.abs(r.volumeChange)}%`}</b><small>volume vs last week so far</small></div>
        <div><b>{r.prs.length}</b><small>new bests</small></div>
        <div><b>{r.streak}</b><small>full weeks in a row</small></div>
      </div>
      {r.lines.length > 0 && <ul className="coach-lines">{r.lines.map((l) => <li key={l}>{l}</li>)}</ul>}
      {r.prs.length > 0 && (
        <div className="coach-prs">
          {prs.map((p) => <div key={p.name} className="pr"><span className="pill good">{Icon.star} PR</span><div><b>{p.name}</b><div className="small muted">{p.text}</div></div></div>)}
          {r.prs.length > 3 && <button className="btn ghost sm" onClick={() => setAllPrs(!allPrs)}>{allPrs ? "Show fewer" : `Show all ${r.prs.length} new bests`} {allPrs ? Icon.up : Icon.down}</button>}
        </div>
      )}
      {r.deload && (
        <div className="deload">
          <span className="at-icon">{Icon.pause}</span>
          <div><b>Consider a lighter week</b><div className="small muted">{r.deload.reason}</div></div>
        </div>
      )}
    </section>
  );
}

function RecRow({ r, onApply }: { r: Recommendation; onApply: () => void }) {
  const [open, setOpen] = useState(false);
  const [tips, setTips] = useState(false);
  const k = KIND[r.kind];
  const changed = !same(r.now, r.next);
  return (
    <li className={`rec t-${k.tone}`}>
      <div className="rec-top">
        <div className="rec-main">
          <div className="rec-name">{r.name}</div>
          <div className="rec-call"><span className={`rec-tag t-${k.tone}`}>{k.label}</span><b>{r.title}</b></div>
        </div>
        {r.trend.length > 1 && <Sparkline values={r.trend} width={84} height={30} />}
      </div>
      <p className="rec-detail">{r.detail}</p>
      <div className="rec-foot">
        <span className="rec-spec">
          {changed ? <><s>{spec(r.now, r.bodyweight)}</s> {Icon.right} <b>{spec(r.next, r.bodyweight)}</b></> : <b>{spec(r.now, r.bodyweight)}</b>}
        </span>
        <div className="row" style={{ gap: 6 }}>
          <button className="btn ghost sm" aria-expanded={tips} onClick={() => setTips(!tips)}>Tips & swaps {tips ? Icon.up : Icon.down}</button>
          <button className="btn ghost sm" aria-expanded={open} onClick={() => setOpen(!open)}>Why {open ? Icon.up : Icon.down}</button>
          {changed && <button className="btn sm primary" onClick={onApply}>Apply</button>}
        </div>
      </div>
      {tips && <TipsPanel name={r.name} />}
      {open && (
        <ul className="rec-why">
          {r.why.map((w) => <li key={w}>{w}</li>)}
          {r.lastDate && <li className="faint">{r.sessions} session{r.sessions > 1 ? "s" : ""} logged · last on {shortDate(r.lastDate)}</li>}
        </ul>
      )}
    </li>
  );
}

/* ---------- tips, swaps and the coach's picks ---------- */

function TipsPanel({ name }: { name: string }) {
  const k = knowFor(name);
  const { plan, setPlan } = useStore();
  return (
    <div className="tips">
      <div className="tips-col">
        <div className="eyebrow">Form cues</div>
        <ul>{k.cues.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>
      {k.accessories.length > 0 && (
        <div className="tips-col">
          <div className="eyebrow">To get better at it</div>
          <ul className="ideas">{k.accessories.map((a) => <li key={a.name}><b>{a.name}</b><small>{a.why}</small><AddBtn name={a.name} after={name} plan={plan} setPlan={setPlan} /></li>)}</ul>
        </div>
      )}
      {k.swaps.length > 0 && (
        <div className="tips-col">
          <div className="eyebrow">Swap it for</div>
          <ul className="ideas">{k.swaps.map((a) => <li key={a.name}><b>{a.name}</b><small>{a.why}</small></li>)}</ul>
        </div>
      )}
    </div>
  );
}

/** Add an exercise to the plan: straight after `after` on each day it appears, or onto a given day. */
function addToPlan(plan: WeekPlan, name: string, after?: string): WeekPlan {
  const p = structuredClone(plan);
  const isHold = /plank/i.test(name);
  const ex = { name, sets: 3, reps: isHold ? 30 : /raise|curl|pushdown|extension|fly|face pull|calf/i.test(name) ? 12 : 10, kg: 0 };
  if (after?.startsWith("__day:")) { const k = after.slice(6) as keyof WeekPlan; p[k].exercises.push(ex); return p; }
  let done = false;
  for (const k of DOW) {
    const i = p[k].exercises.findIndex((e) => e.name.toLowerCase() === (after ?? "").toLowerCase());
    if (i >= 0 && !done) { p[k].exercises.splice(i + 1, 0, ex); done = true; }
  }
  if (!done) { const k = DOW.find((d) => p[d].exercises.length) ?? "mon"; p[k].exercises.push(ex); }
  return p;
}
const inPlanAlready = (plan: WeekPlan, name: string) => DOW.some((k) => plan[k].exercises.some((e) => e.name.toLowerCase() === name.toLowerCase()));

function AddBtn({ name, after, plan, setPlan }: { name: string; after?: string; plan: WeekPlan; setPlan: (p: WeekPlan) => void }) {
  if (inPlanAlready(plan, name)) return <span className="pill off">In your plan</span>;
  return <button className="btn sm" onClick={() => { setPlan(addToPlan(plan, name, after)); toast(`${name} added to your plan - adjust sets and weight on the Plan page`); }}>{Icon.plus} Add to plan</button>;
}

function PicksCard({ recs }: { recs: Recommendation[] }) {
  const { plan, setPlan } = useStore();
  const acc = useCurrentAccount();
  const picks = useMemo(() => coachPicks(plan, recs, acc ? loadHist(acc.id) : []), [plan, recs, acc]);
  if (!picks.length) return null;
  const icon = (p: Pick) => (p.kind === "form" ? Icon.video : p.kind === "plateau" ? Icon.progress : Icon.target);
  return (
    <section className="card picks">
      <div className="eyebrow">Coach's picks</div>
      <h2 style={{ marginBottom: 10 }}>What I'd change this week</h2>
      <ul className="pick-list-c">
        {picks.map((p) => (
          <li key={p.id}>
            <span className={`at-icon k-${p.kind}`}>{icon(p)}</span>
            <div className="pick-main"><b>{p.title}</b><small>{p.why}</small></div>
            {p.add && <AddBtn name={p.add.name} after={p.add.after} plan={plan} setPlan={setPlan} />}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- the locked view ---------- */

const PERKS = [
  { icon: Icon.progress, t: "A call for every exercise", h: "Add weight, add reps, hold, drop a set or reset, with the reason why." },
  { icon: Icon.target, t: "Weekly review", h: "Sessions, volume, new bests, plateaus and when to take a lighter week." },
  { icon: Icon.video, t: "Form check from video", h: "Rep-by-rep feedback on your technique. The video never leaves your phone." },
  { icon: Icon.food, t: "Nutrition coach", h: "Weekly calorie check-ins and meal plans that hit your macros." },
];

function Paywall() {
  const { days, plan } = useStore();
  const acc = useCurrentAccount();
  const [tryIt, setTryIt] = useState(false);
  const [used, setUsed] = useState(() => (acc ? freeFormChecksUsed(acc.id) : 0));
  const preview = useMemo(() => recommendAll(days, plan).slice(0, 3), [days, plan]);
  const dev = devUnlockAllowed();
  return (
    <div className="stack">
      <section className="card paywall">
        <span className="paywall-badge">{Icon.coach} Rep Ledger Pro</span>
        <h2 className="paywall-title">A coach that reads your logs</h2>
        <p className="muted">It tracks every session and tells you exactly what to do next time - and why.</p>
        <ul className="perks">
          {PERKS.map((p) => <li key={p.t}><span className="at-icon">{p.icon}</span><span><b>{p.t}</b><small>{p.h}</small></span></li>)}
        </ul>
        <button className="btn primary lg block" disabled>Start free trial</button>
        <p className="xs faint" style={{ textAlign: "center", marginTop: 8 }}>Payments are coming soon. Your basic next-weight tip in Train stays free.</p>
        {dev && <button className="btn ghost sm block" style={{ marginTop: 8 }} onClick={() => { setDevUnlock(true); toast("Coach unlocked on this device for testing"); }}>{Icon.lock} Unlock for testing</button>}
      </section>

      {tryIt ? (
        <FormCheck freeLeft={Math.max(0, FREE_FORM_CHECKS - used)} onUsed={() => { if (acc) { spendFreeFormCheck(acc.id); setUsed(freeFormChecksUsed(acc.id)); } }} />
      ) : used < FREE_FORM_CHECKS && (
        <section className="card soon">
          <span className="at-icon">{Icon.video}</span>
          <div style={{ flex: 1 }}>
            <b>Try a form check free</b>
            <p className="small muted" style={{ marginTop: 4 }}>Film a squat, deadlift, press or push-up and see your rep-by-rep breakdown. One on the house.</p>
            <button className="btn sm primary" style={{ marginTop: 10 }} onClick={() => setTryIt(true)}>{Icon.video} Try it now</button>
          </div>
        </section>
      )}

      {preview.length > 0 && (
        <section className="card paywall-preview" aria-hidden="true">
          <div className="eyebrow" style={{ marginBottom: 10 }}>Your calls, waiting</div>
          <ul className="recs blurred">{preview.map((r) => <RecRow key={r.name} r={r} onApply={() => undefined} />)}</ul>
          <div className="preview-lock">{Icon.lock}<span>Unlock with Pro</span></div>
        </section>
      )}
    </div>
  );
}
