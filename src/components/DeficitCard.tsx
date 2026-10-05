import { Link } from "react-router-dom";
import { useCalibration } from "../lib/calibration";
import { dayBalance } from "../lib/deficit";
import { useStore } from "../lib/store";
import { fmt, todayStr } from "../lib/util";
import { CountUp, Icon } from "./ui";

/** Today's calorie deficit at a glance: burned − eaten, where you'll land tonight, and how much room is left. */
export function DeficitCard({ date }: { date: string }) {
  const { days, profile, targets } = useStore();
  const factor = useCalibration().factor;
  const b = dayBalance(days, date, profile, targets, factor, todayStr());
  if (!b) return null;
  const now = b.isToday ? b.deficitSoFar : b.deficit;
  const deficit = now >= 0;
  const surplusGoal = b.goal < 0;
  const max = Math.max(b.burnedDay, b.eaten, 1);

  return (
    <section className={`card deficit-card ${deficit ? "is-deficit" : "is-surplus"}`} aria-labelledby="def-title">
      <div className="dc-main">
        <div className="eyebrow" id="def-title">{b.isToday ? "Calorie deficit · today" : "Calorie deficit"}</div>
        <div className="dc-num">
          <b><CountUp value={Math.abs(now)} /></b>
          <span>kcal {deficit ? "deficit" : "surplus"}{b.isToday ? " so far" : ""}</span>
        </div>
        <div className="small muted num">Burned {fmt(b.burnedSoFar)}{b.isToday ? " so far" : ""} − eaten {fmt(b.eaten)}</div>
      </div>

      <div className="dc-bars" aria-hidden="true">
        <div className="dc-bar"><span>Eaten</span><div><i className="eat" style={{ width: `${(b.eaten / max) * 100}%` }} /></div><b className="num">{fmt(b.eaten)}</b></div>
        <div className="dc-bar"><span>{b.isToday ? "Burned by tonight" : "Burned"}</span><div><i className="burn" style={{ width: `${(b.burnedDay / max) * 100}%` }} />{b.isToday && <i className="burn-now" style={{ width: `${(b.burnedSoFar / max) * 100}%` }} />}</div><b className="num">{fmt(b.burnedDay)}</b></div>
      </div>

      <div className="dc-side">
        {b.isToday ? (
          <>
            <div className="dc-line"><span className="small muted">By tonight, if you eat nothing more</span><b className={b.deficit >= 0 ? "good" : "bad"}>{b.deficit >= 0 ? `${fmt(b.deficit)} deficit` : `${fmt(-b.deficit)} surplus`}</b></div>
            {b.goal !== 0 && (
              <div className="dc-line">
                <span className="small muted">{surplusGoal ? `Plan: ${fmt(-b.goal)} surplus a day` : `Plan: ${fmt(b.goal)} deficit a day`}</span>
                <b className={b.room >= 0 ? "" : "bad"}>{b.room >= 0 ? `~${fmt(b.room)} kcal left to eat` : `${fmt(-b.room)} over the plan`}</b>
              </div>
            )}
          </>
        ) : b.incomplete ? (
          <div className="notice warn small">Only {fmt(b.eaten)} kcal logged - this day probably isn't fully logged, so it's left out of your averages.</div>
        ) : !b.hasFood ? (
          <div className="small muted">No food logged this day.</div>
        ) : (
          <div className="dc-line"><span className="small muted">{surplusGoal ? `Plan: ${fmt(-b.goal)} surplus` : `Plan: ${fmt(b.goal)} deficit`}</span><b className={(surplusGoal ? -b.deficit >= -b.goal * 0.7 : b.deficit >= b.goal * 0.8) ? "good" : ""}>{(surplusGoal ? -b.deficit >= -b.goal * 0.7 : b.deficit >= b.goal * 0.8) ? <>{Icon.check} On plan</> : "Off plan"}</b></div>
        )}
        <Link to="/progress" className="btn ghost sm dc-more" onClick={() => { try { sessionStorage.setItem("rl.ptab", "nutrition"); } catch { /* ignore */ } }}>Every day's deficit {Icon.right}</Link>
      </div>
    </section>
  );
}
