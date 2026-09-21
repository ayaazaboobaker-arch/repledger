import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NumField } from "../components/forms";
import { PinSheet } from "../components/ProfileMenu";
import { CalorieSteps, MacroTargets, Timeline } from "../components/Numbers";
import { EQUIP, Onboarding } from "../components/Onboarding";
import { ConfirmButton } from "../components/safety";
import { Icon, toast } from "../components/ui";
import { deleteAccount, signOut, updateAccount, useCurrentAccount } from "../lib/accounts";
import { calculate, GOALS, targetsFrom } from "../lib/calc";
import { recommendPlan } from "../lib/plans";
import { useStore } from "../lib/store";
import type { Targets } from "../lib/types";
import { DOW, DOW_LONG, fmt, fmtKg } from "../lib/util";

export function Profile() {
  const { profile, setProfile, setTargets } = useStore();
  const acc = useCurrentAccount();
  const loc = useLocation();
  const [editing, setEditing] = useState(!!(loc.state as { edit?: boolean } | null)?.edit);
  useEffect(() => { if ((loc.state as { edit?: boolean } | null)?.edit) setEditing(true); }, [loc.state]);
  if (!profile || editing)
    return (
      <Onboarding
        mode="edit"
        initial={profile!}
        onCancel={profile ? () => setEditing(false) : undefined}
        onFinish={(p) => {
          setProfile(p);
          setTargets(targetsFrom(p, calculate(p)));
          if (acc) updateAccount(acc.id, { goal: p.goal, name: acc.demo ? acc.name : p.name || acc.name });
          toast("Saved — calories and macros recalculated");
          setEditing(false);
        }}
      />
    );
  return <Results onEdit={() => setEditing(true)} />;
}

function Results({ onEdit }: { onEdit: () => void }) {
  const { profile: p, targets, setTargets, setPlan } = useStore();
  const nav = useNavigate();
  const b = useMemo(() => calculate(p!), [p]);
  const rec = useMemo(() => recommendPlan(p!), [p]);
  if (!p) return null;
  const custom = targets.kcal !== b.target || targets.protein !== b.protein;

  return (
    <>
      <div className="page-head">
        <div>
          <div className="eyebrow">{p.name || "Your plan"} · {GOALS[p.goal].label}</div>
          <h1>{fmt(targets.kcal)} kcal a day</h1>
          <p className="small muted" style={{ marginTop: 4 }}>{p.sex === "male" ? "Male" : "Female"}, {p.age} · {p.heightCm} cm · {fmt(p.weightKg, 1)} kg → {fmt(p.goalWeightKg, 1)} kg</p>
        </div>
        <button className="btn" onClick={onEdit}>Edit my details</button>
      </div>

      <div className="dash">
        <div className="stack">
          <section className="card">
            <h2>Daily macros</h2>
            <div style={{ marginTop: 10 }}><MacroTargets p={p} b={b} /></div>
            {custom && (
              <div className="banner" style={{ marginTop: 12, marginBottom: 0 }}>
                <span className="small">You've fine-tuned your targets ({fmt(targets.kcal)} kcal, {targets.protein} g protein). The numbers above are the calculated ones.</span>
                <button className="btn sm" onClick={() => { setTargets(targetsFrom(p, b)); toast("Targets reset to calculated values"); }}>Use calculated</button>
              </div>
            )}
          </section>
          <section className="card">
            <h2>How we got {fmt(b.target)} kcal</h2>
            <div style={{ marginTop: 6 }}><CalorieSteps p={p} b={b} /></div>
          </section>
          <section className="card">
            <div className="card-h">
              <div><h2>Recommended training</h2><div className="small muted">{rec.template.name} · {EQUIP[p.equipment].label.toLowerCase()} · ~{p.sessionMinutes} min</div></div>
              <ConfirmButton className="btn primary" label="Use this plan" question="Replace your weekly plan? Logged workouts stay." confirmLabel="Replace plan" onConfirm={() => { setPlan(rec.plan); toast("Plan applied"); nav("/plan"); }} />
            </div>
            <p className="prose" style={{ marginBottom: 12 }}>{rec.template.why}</p>
            <div className="plan-preview">
              {DOW.filter((k) => rec.plan[k].exercises.length).map((k) => (
                <div className="d" key={k}>
                  <div className="xs faint" style={{ fontWeight: 700, letterSpacing: ".1em" }}>{DOW_LONG[k].toUpperCase()}</div>
                  <h4>{rec.plan[k].title}</h4>
                  <ul>{rec.plan[k].exercises.map((e) => <li key={e.name}>{e.name} — {e.sets}×{e.reps}{e.kg ? ` @ ${fmtKg(e.kg)} kg` : ""}</li>)}</ul>
                </div>
              ))}
            </div>
            <ul className="notes">{rec.notes.map((n) => <li key={n}>{n}</li>)}</ul>
          </section>
        </div>

        <div className="stack">
          <section className="card"><h2>Timeline</h2><div style={{ marginTop: 8 }}><Timeline p={p} b={b} /></div>
            <p className="small muted" style={{ marginTop: 8 }}>Weight bounces day to day with water and food. Judge progress on the weekly average, and adjust by 100–150 kcal if it hasn't moved for 2–3 weeks.</p>
          </section>
          <TargetEditor />
          <AccountCard />
        </div>
      </div>
    </>
  );
}

function TargetEditor() {
  const { targets, setTargets } = useStore();
  const f = (k: keyof Targets, label: string, unit: string, step = 1) => (
    <NumField key={k + targets[k]} id={`tg-${k}`} label={label} unit={unit} value={targets[k]} step={step} onChange={(v) => setTargets({ [k]: v })} />
  );
  const fromMacros = targets.protein * 4 + targets.carbs * 4 + targets.fat * 9;
  return (
    <section className="card">
      <h2>Fine-tune targets</h2>
      <div className="fields" style={{ marginTop: 10, gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}>
        {f("kcal", "Calories", "kcal")}{f("protein", "Protein", "g")}{f("carbs", "Carbs", "g")}{f("fat", "Fat", "g")}{f("steps", "Steps", "/day", 100)}{f("goalWeight", "Goal weight", "kg", 0.1)}
      </div>
      <p className="xs faint" style={{ marginTop: 10 }}>Macros add up to {fmt(fromMacros)} kcal{Math.abs(fromMacros - targets.kcal) > 100 ? ` — ${fmt(Math.abs(fromMacros - targets.kcal))} kcal ${fromMacros > targets.kcal ? "over" : "under"} your calorie target` : ""}.</p>
    </section>
  );
}

function AccountCard() {
  const acc = useCurrentAccount();
  const { loadDemo } = useStore();
  const [pinOpen, setPinOpen] = useState(false);
  if (!acc) return null;
  return (
    <section className="card acct">
      <div className="acct-head">
        <span className={`avatar${acc.demo ? " demo" : ""}`}>{acc.name.slice(0, 1).toUpperCase()}</span>
        <div>
          <h2 style={{ textTransform: "none", letterSpacing: 0 }}>{acc.name}</h2>
          <div className="xs muted">{acc.pinHash ? "Protected with a PIN" : "No PIN set"} · saved on this computer</div>
        </div>
      </div>
      <div className="acct-actions">
        {!acc.demo && (
          <button className="action-tile" onClick={() => setPinOpen(true)}>
            <span className="at-icon">{Icon.lock}</span>
            <span className="at-text"><b>{acc.pinHash ? "Change PIN" : "Add a PIN"}</b><small>{acc.pinHash ? "Update your 4-digit PIN" : "Lock your profile"}</small></span>
            <span className="at-chev">{Icon.right}</span>
          </button>
        )}
        <button className="action-tile" onClick={signOut}>
          <span className="at-icon">{Icon.users}</span>
          <span className="at-text"><b>Switch profile</b><small>Back to the profile picker</small></span>
          <span className="at-chev">{Icon.right}</span>
        </button>
        <button className="action-tile danger" onClick={() => { signOut(); toast("Logged out"); }}>
          <span className="at-icon">{Icon.logout}</span>
          <span className="at-text"><b>Log out</b><small>{acc.pinHash ? "Your PIN is needed to get back in" : "Sign out of this profile"}</small></span>
          <span className="at-chev">{Icon.right}</span>
        </button>
      </div>
      <div className="acct-foot">
        {acc.demo && <ConfirmButton className="btn ghost sm" label="Reset demo data" question="Put the demo back to how it started?" confirmLabel="Reset" onConfirm={() => { loadDemo(); toast("Demo reset"); }} />}
        <ConfirmButton className="btn ghost sm danger-link" label={<>{Icon.trash} {acc.demo ? "Remove demo profile" : "Delete my profile"}</>} question={`Delete ${acc.name} and all their logs?`} confirmLabel="Delete" onConfirm={() => deleteAccount(acc.id)} />
      </div>
      <PinSheet open={pinOpen} onClose={() => setPinOpen(false)} />
    </section>
  );
}
