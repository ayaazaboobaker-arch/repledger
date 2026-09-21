import { useMemo, useState } from "react";
import { ACTIVITY, calculate, GOALS } from "../lib/calc";
import { recommendPlan } from "../lib/plans";
import type { ActivityLevel as Activity, Equipment, Experience, Goal, Profile, Sex } from "../lib/types";
import { DOW, DOW_LONG, fmt } from "../lib/util";
import { NumField, Opts, PinInput } from "./forms";
import { CalorieSteps, MacroTargets, Timeline } from "./Numbers";
import { Icon } from "./ui";

export const EXP: Record<Experience, { label: string; hint: string }> = {
  beginner: { label: "New to lifting", hint: "Less than 6 months of consistent training" },
  intermediate: { label: "Some experience", hint: "6 months to 3 years, know the main lifts" },
  advanced: { label: "Experienced", hint: "3+ years, progress comes slowly now" },
};
export const EQUIP: Record<Equipment, { label: string; hint: string }> = {
  gym: { label: "Full gym", hint: "Barbells, machines and cables" },
  dumbbells: { label: "Dumbbells at home", hint: "Adjustable dumbbells, a bench, a pull-up bar" },
  bodyweight: { label: "No equipment", hint: "Bodyweight, a pull-up bar or sturdy table" },
};
const ACT_OPTS = Object.fromEntries(Object.entries(ACTIVITY).map(([k, v]) => [k, { label: v.label, hint: v.hint }])) as Record<Activity, { label: string; hint: string }>;

export const BLANK_PROFILE: Profile = {
  name: "", sex: "male", age: 28, heightCm: 175, weightKg: 80, goalWeightKg: 75, activity: "light", goal: "recomp", rate: 0.5,
  experience: "beginner", daysPerWeek: 3, equipment: "gym", sessionMinutes: 60,
};

interface Props {
  initial: Profile;
  /** create = first step asks for name + PIN and the last step shows the numbers */
  mode: "create" | "edit";
  onFinish: (p: Profile, pin: string) => void;
  onCancel?: () => void;
}

export function Onboarding({ initial, mode, onFinish, onCancel }: Props) {
  const [p, setP] = useState<Profile>(initial);
  const [pin, setPin] = useState("");
  const [pin2, setPin2] = useState("");
  const [usePin, setUsePin] = useState(true);
  const [step, setStep] = useState(0);
  const up = (patch: Partial<Profile>) => setP((cur) => ({ ...cur, ...patch }));

  const STEPS = mode === "create"
    ? ["Create your profile", "About you", "Your body", "Your goal", "Daily activity", "Your training", "Your numbers"]
    : ["About you", "Your body", "Your goal", "Daily activity", "Your training"];
  const key = STEPS[step];
  const last = step === STEPS.length - 1;
  const b = useMemo(() => calculate(p), [p]);
  const rec = useMemo(() => recommendPlan(p), [p]);

  let problem: string | null = null;
  if (key === "Create your profile") {
    if (!p.name.trim()) problem = "Add your name.";
    else if (usePin && pin.length !== 4) problem = "Choose a 4-digit PIN.";
    else if (usePin && pin !== pin2) problem = "The two PINs don't match.";
  }
  if (key === "About you" && (p.age < 13 || p.age > 100)) problem = "Enter an age between 13 and 100.";
  if (key === "Your body" && (p.heightCm < 120 || p.heightCm > 230 || p.weightKg < 35 || p.weightKg > 300)) problem = "Check your height and weight.";
  const [showProblem, setShowProblem] = useState(false);

  const next = () => {
    if (problem) { setShowProblem(true); return; }
    setShowProblem(false);
    if (last || (mode === "edit" && step === STEPS.length - 1)) onFinish({ ...p, name: p.name.trim() }, usePin ? pin : "");
    else setStep(step + 1);
  };

  return (
    <div className="wizard">
      <div className="spread">
        <div className="eyebrow">Step {step + 1} of {STEPS.length}</div>
        {onCancel && <button className="btn ghost sm" onClick={onCancel}>Cancel</button>}
      </div>
      <h1>{key === "Your numbers" ? `${fmt(b.target)} kcal a day` : key}</h1>
      <div className="steps" aria-hidden="true">{STEPS.map((_, i) => <i key={i} className={i <= step ? "on" : ""} />)}</div>

      <form className="card stack" onSubmit={(e) => { e.preventDefault(); next(); }}>
        {key === "Create your profile" && (
          <>
            <p className="small muted prose">Your profile keeps your workouts, food and weigh-ins separate from anyone else using this laptop.</p>
            <label className="f" htmlFor="ob-name">Your name<input className="in" id="ob-name" autoFocus value={p.name} placeholder="e.g. Ayaaz" onChange={(e) => up({ name: e.target.value })} /></label>
            {usePin ? (
              <div className="grid-2">
                <div><div className="f" style={{ marginBottom: 6 }}>Choose a 4-digit PIN</div><PinInput id="ob-pin" label="PIN" value={pin} onChange={setPin} /></div>
                <div><div className="f" style={{ marginBottom: 6 }}>Type it again</div><PinInput id="ob-pin2" label="Confirm PIN" value={pin2} onChange={setPin2} invalid={pin2.length === 4 && pin !== pin2} /></div>
              </div>
            ) : <p className="small muted">No PIN — anyone on this laptop can open your profile.</p>}
            <button type="button" className="btn ghost sm" style={{ alignSelf: "flex-start" }} onClick={() => setUsePin(!usePin)}>{usePin ? "Skip the PIN" : "Use a PIN"}</button>
          </>
        )}

        {key === "About you" && (
          <>
            <div>
              <div className="f" style={{ marginBottom: 6 }}>Sex — used in the calorie formula</div>
              <Opts<Sex> label="Sex" cols={140} value={p.sex} onChange={(sex) => up({ sex })} options={{ male: { label: "Male", hint: "" }, female: { label: "Female", hint: "" } }} />
            </div>
            <div className="fields"><NumField id="ob-age" label="Age" unit="years" value={p.age} min={13} max={100} onChange={(age) => up({ age })} /></div>
          </>
        )}

        {key === "Your body" && (
          <>
            <div className="fields">
              <NumField id="ob-h" label="Height" unit="cm" value={p.heightCm} onChange={(heightCm) => up({ heightCm })} />
              <NumField id="ob-w" label="Weight" unit="kg" value={p.weightKg} step={0.1} onChange={(weightKg) => up({ weightKg })} />
              <NumField id="ob-g" label="Goal weight" unit="kg" value={p.goalWeightKg} step={0.1} onChange={(goalWeightKg) => up({ goalWeightKg })} />
            </div>
            <p className="small muted">BMI {fmt(p.weightKg / (p.heightCm / 100) ** 2, 1)} — a rough guide only; it can't tell muscle from fat. Not sure of a goal weight? Leave it at your current weight.</p>
          </>
        )}

        {key === "Your goal" && (
          <>
            <p className="small muted">What do you want from your training?</p>
            <Opts<Goal> label="Goal" value={p.goal} onChange={(goal) => up({ goal, rate: goal === "gain" ? 0.25 : 0.5 })} options={GOALS} />
            {(p.goal === "lose" || p.goal === "gain") && (
              <div>
                <div className="f" style={{ marginBottom: 6 }}>How fast? (kg per week)</div>
                <div className="chips">
                  {(p.goal === "lose" ? [0.25, 0.5, 0.75, 1] : [0.25, 0.5]).map((r) => (
                    <button type="button" key={r} className="chip" aria-pressed={p.rate === r} onClick={() => up({ rate: r })}>
                      {r} kg{r === 0.5 && p.goal === "lose" ? " · recommended" : r === 0.25 && p.goal === "gain" ? " · lean gain" : r === 1 ? " · aggressive" : ""}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {key === "Daily activity" && (
          <>
            <p className="small muted prose">Outside of your workouts, how active is a normal day? Training is added separately, so don't count the gym here.</p>
            <Opts<Activity> label="Daily activity" value={p.activity} onChange={(activity) => up({ activity })} options={ACT_OPTS} />
          </>
        )}

        {key === "Your training" && (
          <>
            <Opts<Experience> label="Experience" value={p.experience} onChange={(experience) => up({ experience })} options={EXP} />
            <div>
              <div className="f" style={{ marginBottom: 6 }}>Days a week you can train</div>
              <div className="chips">{[2, 3, 4, 5, 6].map((d) => <button type="button" key={d} className="chip" aria-pressed={p.daysPerWeek === d} onClick={() => up({ daysPerWeek: d })}>{d} days</button>)}</div>
            </div>
            <div>
              <div className="f" style={{ marginBottom: 6 }}>Time per session</div>
              <div className="chips">{[30, 45, 60, 75, 90].map((m) => <button type="button" key={m} className="chip" aria-pressed={p.sessionMinutes === m} onClick={() => up({ sessionMinutes: m })}>{m} min</button>)}</div>
            </div>
            <div>
              <div className="f" style={{ marginBottom: 6 }}>Where you train</div>
              <Opts<Equipment> label="Equipment" value={p.equipment} onChange={(equipment) => up({ equipment })} options={EQUIP} />
            </div>
          </>
        )}

        {key === "Your numbers" && (
          <>
            <p className="prose">Here's what {p.name || "you"} should eat each day to <b>{GOALS[p.goal].label.toLowerCase()}</b>, and why.</p>
            <MacroTargets p={p} b={b} />
            <details className="explain">
              <summary>How we worked out {fmt(b.target)} kcal</summary>
              <CalorieSteps p={p} b={b} />
            </details>
            <Timeline p={p} b={b} />
            <div className="card flat">
              <div className="eyebrow">Your training plan</div>
              <div style={{ fontWeight: 700, marginTop: 4 }}>{rec.template.name}</div>
              <div className="small muted">{DOW.filter((k) => rec.plan[k].exercises.length).map((k) => `${DOW_LONG[k].slice(0, 3)} ${rec.plan[k].title}`).join(" · ")}</div>
            </div>
            <p className="xs faint">Estimates to start from, not medical advice. You can change any number later on the Me page.</p>
          </>
        )}

        {showProblem && problem && <div className="form-err" role="alert">{problem}</div>}

        <div className="spread" style={{ marginTop: 4 }}>
          {step > 0 ? <button type="button" className="btn" onClick={() => { setShowProblem(false); setStep(step - 1); }}>{Icon.left} Back</button> : <span />}
          <button type="submit" className="btn primary lg">
            {key === "Your numbers" ? <>Start using Rep Ledger {Icon.right}</> : mode === "edit" && last ? "Save and recalculate" : key === "Your training" && mode === "create" ? <>See my numbers {Icon.right}</> : <>Next {Icon.right}</>}
          </button>
        </div>
      </form>
    </div>
  );
}
