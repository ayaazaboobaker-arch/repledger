import { ACTIVITY, GOALS, type CalorieBreakdown } from "../lib/calc";
import type { Profile } from "../lib/types";
import { addDays, fmt, shortDate, todayStr } from "../lib/util";

export function CalorieSteps({ p, b }: { p: Profile; b: CalorieBreakdown }) {
  const sign = (n: number) => (n > 0 ? "+" : n < 0 ? "−" : "±");
  return (
    <div className="calc-steps">
      <div className="calc-step"><div><div className="t">Resting burn (BMR)</div><div className="h">What your body uses just to stay alive — breathing, heart, brain. Worked out from your age, height, weight and sex (Mifflin–St Jeor).</div></div><div className="v">{fmt(b.bmr)}</div></div>
      <div className="calc-step"><div><div className="t">+ Everyday movement</div><div className="h">{ACTIVITY[p.activity].label} (× {ACTIVITY[p.activity].mult}) — walking, work, chores.</div></div><div className="v">+{fmt(b.daily - b.bmr)}</div></div>
      <div className="calc-step"><div><div className="t">+ Training</div><div className="h">{p.daysPerWeek} × {p.sessionMinutes} min a week, averaged per day.</div></div><div className="v">+{fmt(b.training)}</div></div>
      <div className="calc-step"><div><div className="t">= Maintenance</div><div className="h">Eat this and your weight stays roughly the same.</div></div><div className="v">{fmt(b.tdee)}</div></div>
      <div className="calc-step">
        <div>
          <div className="t">{b.adjust < -1 ? "− Deficit" : b.adjust > 1 ? "+ Surplus" : "± For your goal"} · {GOALS[p.goal].label.toLowerCase()}</div>
          <div className="h">
            {p.goal === "lose" && `About 7 700 kcal is 1 kg of fat, so ${p.rate} kg a week needs ${fmt(Math.abs(b.adjust))} kcal less per day.`}
            {p.goal === "gain" && `A small surplus of ${fmt(b.adjust)} kcal fuels new muscle without piling on fat.`}
            {p.goal === "recomp" && "A gentle 10% deficit: enough to lose fat slowly, small enough that heavy training and high protein still build muscle."}
            {p.goal === "tone" && "A light 5% trim — keeps body fat drifting down so the muscle you have shows, without hurting your training."}
            {p.goal === "fit" && "No adjustment — you eat what you burn and put the effort into staying active."}
            {b.capped && " Capped at 25% below maintenance so you can still train hard."}
            {b.floored && " Raised to a safe minimum — going lower costs muscle and energy."}
          </div>
        </div>
        <div className="v">{sign(Math.round(b.adjust))}{fmt(Math.abs(b.adjust))}</div>
      </div>
      <div className="calc-step total"><div><div className="t">Your daily target</div><div className="h">{fmt(b.target * 4.184)} kJ — the unit on SA food labels</div></div><div className="v">{fmt(b.target)}</div></div>
    </div>
  );
}

export function MacroTargets({ p, b }: { p: Profile; b: CalorieBreakdown }) {
  const pct = (g: number, per: number) => Math.round(((g * per) / b.target) * 100);
  return (
    <>
      <div className="macro-cards">
        <div className="mc p"><span>Protein</span><b>{b.protein} g</b><small>{pct(b.protein, 4)}% · {b.proteinPerKg} g/kg</small></div>
        <div className="mc c"><span>Carbs</span><b>{b.carbs} g</b><small>{pct(b.carbs, 4)}% of calories</small></div>
        <div className="mc f"><span>Fat</span><b>{b.fat} g</b><small>{pct(b.fat, 9)}% of calories</small></div>
      </div>
      <div className="macro-bar" aria-hidden="true">
        <i style={{ flex: b.protein * 4, background: "var(--protein)" }} />
        <i style={{ flex: b.carbs * 4, background: "var(--carbs)" }} />
        <i style={{ flex: b.fat * 9, background: "var(--fat)" }} />
      </div>
      <ul className="notes small">
        <li><b>Protein</b> — {p.goal === "lose" || p.goal === "recomp" ? "set high to protect your muscle while you're eating less" : p.goal === "gain" ? "the building blocks for new muscle" : "keeps muscle and keeps you full"}. Aim for 30–50 g at each meal.</li>
        <li><b>Fat</b> — about a quarter of your calories, for healthy hormones.</li>
        <li><b>Carbs</b> — fill the rest and fuel your workouts.</li>
        <li><b>{fmt(b.steps)} steps a day</b> — {p.goal === "lose" ? "walking burns fat without eating into recovery." : "keeps your heart healthy and appetite steady."}</li>
      </ul>
    </>
  );
}

export function Timeline({ p, b }: { p: Profile; b: CalorieBreakdown }) {
  const goalDate = b.weeksToGoal ? addDays(todayStr(), b.weeksToGoal * 7) : null;
  if (goalDate) return <p>At about {Math.abs(b.weeklyChange)} kg a week you'd reach <b>{fmt(p.goalWeightKg, 1)} kg</b> in roughly <b>{b.weeksToGoal} weeks</b> — around <b>{shortDate(goalDate)}</b>.</p>;
  if (p.goal === "fit") return <p className="muted">You're eating to stay at your weight — track your steps, sessions and strength instead of the scale.</p>;
  if (p.goal === "tone" || p.goal === "recomp") return <p className="muted">Expect the scale to move slowly. Your lifts going up and your waist coming down are the real signs it's working.</p>;
  return <p className="muted">Your goal weight and your goal don't point the same way — check them under Edit my details.</p>;
}
