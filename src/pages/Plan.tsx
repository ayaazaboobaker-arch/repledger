import { Link } from "react-router-dom";
import { DemoBanner } from "../components/cards";
import { Icon, toast } from "../components/ui";
import { useCurrentAccount } from "../lib/accounts";
import { devUnlockAllowed, FREE_FORM_CHECKS, freeFormChecksUsed, setDevUnlock, useCoachAccess } from "../lib/coach/access";
import { AI_FEATURES, FREE_LIMITS, limitText, PRICES, PRO_LIMITS, TOPUP, YEARLY_SAVING } from "../lib/subscription";
import { fmt, shortDate } from "../lib/util";

type Tier = "free" | "monthly" | "yearly";

const FREE_FOREVER = [
  "Workout plan, session logging and rest timer",
  "Food diary with 7,000+ foods and online search",
  "Calories burned, steps and walk/run tracking",
  "Progress graphs, macros and weigh-ins",
  "Next-weight tip for every exercise",
];
const PRO_EXTRAS = [
  "A coach call for every exercise, with the reason why",
  "Unlimited on-device form checks from video",
  "Meal scanner: snap your plate, get the macros",
  "Coach chat about your plan, lifts and food",
  "Weekly check-ins and 7-day meal plans",
];

/** Plans: what you're on, what it includes, and what else is available. */
export function Plan() {
  const access = useCoachAccess();
  const acc = useCurrentAccount();
  const tier: Tier = access.source === "subscription" ? (access.sub?.plan === "yearly" ? "yearly" : "monthly") : "free";
  const isPro = access.pro;
  const formUsed = acc && !acc.demo ? freeFormChecksUsed(acc.id) : 0;
  const soon = () => toast("Payments open soon - we'll let you know when Pro is live.");

  const current = {
    demo: { name: "Pro preview", sub: "The demo profile shows everything Pro includes." },
    dev: { name: "Pro (testing)", sub: "Unlocked on this device for testing - not a real subscription." },
    subscription: { name: tier === "yearly" ? "Pro · Yearly" : "Pro · Monthly", sub: access.sub?.status === "trialing" ? "Free trial" : access.sub?.status === "non-renewing" ? "Cancelled - Pro stays on until the end of this period" : "Active" },
    none: { name: "Free", sub: "Everything you need to train and track. Upgrade for the AI coach." },
  }[access.source];

  return (
    <>
      <DemoBanner />
      <div className="page-head"><div><div className="eyebrow">Plans</div><h1>Your plan</h1></div></div>

      <section className={`card plan-current${isPro ? " is-pro" : ""}`}>
        <div className="spread" style={{ alignItems: "flex-start" }}>
          <div>
            <div className="eyebrow">You're on</div>
            <div className="pc-name">{access.loading ? "Checking…" : current.name}</div>
            <div className="small muted">{current.sub}</div>
          </div>
          <span className={`pill ${isPro ? "good" : "off"}`}>{isPro ? <>{Icon.check} Pro</> : "Free"}</span>
        </div>
        {access.source === "subscription" && access.sub?.current_period_end && (
          <div className="pc-renew small">{access.sub.status === "non-renewing" ? "Ends" : "Renews"} on <b>{shortDate(access.sub.current_period_end.slice(0, 10))}</b> · {tier === "yearly" ? `R${PRICES.yearly} a year` : `R${PRICES.monthly} a month`}</div>
        )}

        <div className="eyebrow" style={{ margin: "16px 0 8px" }}>Included in your plan</div>
        <ul className="pc-usage">
          {AI_FEATURES.map((f) => {
            const l = isPro ? PRO_LIMITS[f.id] : FREE_LIMITS[f.id];
            return (
              <li key={f.id} className={l.month ? "" : "off"}>
                <span>{f.label}</span>
                <span className="small muted">{l.month ? limitText(l, f.unit) : "Pro only"}</span>
              </li>
            );
          })}
          <li>
            <span>Form checks on your phone</span>
            <span className="small muted">{isPro ? "Unlimited" : `${Math.max(0, FREE_FORM_CHECKS - formUsed)} of ${FREE_FORM_CHECKS} free left`}</span>
          </li>
        </ul>
        <p className="xs faint" style={{ marginTop: 8 }}>AI features (meal scanner, chat, reviews) switch on soon - your usage will show here.</p>

        <div className="row" style={{ marginTop: 14, flexWrap: "wrap", gap: 8 }}>
          {isPro ? (
            <>
              <Link to="/coach" className="btn primary">{Icon.coach} Open Coach</Link>
              {access.source === "subscription" && <button className="btn" onClick={soon}>Manage subscription</button>}
            </>
          ) : (
            <button className="btn primary" onClick={() => document.getElementById("plan-pro-yearly")?.scrollIntoView({ behavior: "smooth", block: "center" })}>{Icon.star} See Pro plans</button>
          )}
          {access.source === "dev" && <button className="btn ghost sm" onClick={() => { setDevUnlock(false); toast("Testing unlock removed"); }}>Remove testing unlock</button>}
          {access.source === "none" && devUnlockAllowed() && <button className="btn ghost sm" onClick={() => { setDevUnlock(true); toast("Pro unlocked on this device for testing"); }}>{Icon.lock} Unlock for testing</button>}
        </div>
      </section>

      <h2 className="plans-h">Available plans</h2>
      <div className="plan-cards">
        <PlanCard
          id="plan-free" name="Free" price="R0" per="forever" current={tier === "free" && !isPro}
          points={FREE_FOREVER} extra={[`${FREE_LIMITS.scan.month} meal scans and ${FREE_LIMITS.chat.month} coach messages a month`, `${FREE_FORM_CHECKS} form check to try`]}
          action={tier === "free" && !isPro ? null : <span className="small muted">Included with every account</span>}
        />
        <PlanCard
          id="plan-pro-monthly" name="Pro Monthly" price={`R${PRICES.monthly}`} per="a month" current={tier === "monthly"}
          points={["Everything in Free", ...PRO_EXTRAS]} extra={["Cancel any time"]}
          action={tier === "monthly" ? null : <button className="btn block" onClick={soon}>{tier === "yearly" ? "Switch to monthly" : "Choose monthly"}</button>}
        />
        <PlanCard
          id="plan-pro-yearly" name="Pro Yearly" price={`R${PRICES.yearly}`} per="a year" badge={`Save R${YEARLY_SAVING}`} best current={tier === "yearly"}
          points={["Everything in Pro Monthly", `Works out to R${fmt(PRICES.yearly / 12)} a month`, "Almost 3 months free"]} extra={["Best for sticking with it"]}
          action={tier === "yearly" ? null : <button className="btn primary block" onClick={soon}>{tier === "monthly" ? "Switch to yearly" : "Choose yearly"}</button>}
        />
      </div>

      <section className="card topup" style={{ marginTop: 16 }}>
        <span className="at-icon">{Icon.plus}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <b>Top-up pack · R{PRICES.topup}</b>
          <p className="small muted">For Pro members who hit a monthly limit: +{TOPUP.scan} meal scans and +{TOPUP.chat} coach messages, used before your next renewal.</p>
        </div>
        <button className="btn sm" onClick={soon} disabled={!isPro}>{isPro ? "Buy" : "Pro only"}</button>
      </section>

      <section className="card" style={{ marginTop: 16 }}>
        <h2>Compare plans</h2>
        <div className="table-wrap" style={{ marginTop: 10 }}>
          <table className="compare">
            <thead><tr><th></th><th>Free</th><th>Pro</th></tr></thead>
            <tbody>
              <tr><td>Training plan, logging, food diary, progress</td><td>{Icon.check}</td><td>{Icon.check}</td></tr>
              <tr><td>Next-weight tip</td><td>{Icon.check}</td><td>{Icon.check}</td></tr>
              <tr><td>Coach calls for every exercise</td><td className="muted">-</td><td>{Icon.check}</td></tr>
              <tr><td>Form checks on your phone</td><td>{FREE_FORM_CHECKS} to try</td><td>Unlimited</td></tr>
              {AI_FEATURES.map((f) => (
                <tr key={f.id}><td>{f.label}</td><td>{FREE_LIMITS[f.id].month || <span className="muted">-</span>}{FREE_LIMITS[f.id].month ? " / month" : ""}</td><td>{PRO_LIMITS[f.id].month} / month</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card faq" style={{ marginTop: 16 }}>
        <h2>Questions</h2>
        <details><summary>Why are there limits on Pro?</summary><p className="small muted">The meal scanner, chat and reviews use a paid AI service for every request. The limits are set well above normal use (about 3 scans and 5 messages a day is typical) so the price can stay low. If you run out, a top-up pack carries you to your renewal.</p></details>
        <details><summary>What stays free?</summary><p className="small muted">Everything you need to train and track: your plan, sessions, food diary, steps, calories burned and all your progress. Your data is never locked behind Pro.</p></details>
        <details><summary>Can I cancel?</summary><p className="small muted">Yes, any time. Pro stays on until the end of the period you paid for, then you're back on Free with all your logs.</p></details>
        <details><summary>How do I pay?</summary><p className="small muted">By card, Capitec Pay or instant EFT through Paystack. Prices are in rand and include VAT.</p></details>
      </section>
    </>
  );
}

function PlanCard({ id, name, price, per, points, extra, action, current, best, badge }: { id: string; name: string; price: string; per: string; points: string[]; extra?: string[]; action: React.ReactNode; current?: boolean; best?: boolean; badge?: string }) {
  return (
    <section id={id} className={`card plan-card${current ? " current" : ""}${best ? " best" : ""}`}>
      <div className="spread">
        <h3>{name}</h3>
        {current ? <span className="pill good">{Icon.check} Your plan</span> : badge ? <span className="pill accent">{badge}</span> : null}
      </div>
      <div className="pcard-price"><b>{price}</b><span>{per}</span></div>
      <ul className="pcard-points">
        {points.map((p) => <li key={p}>{Icon.check}<span>{p}</span></li>)}
        {extra?.map((p) => <li key={p} className="muted">{Icon.check}<span>{p}</span></li>)}
      </ul>
      <div className="pcard-foot">{current ? <button className="btn block" disabled>Current plan</button> : action}</div>
    </section>
  );
}
