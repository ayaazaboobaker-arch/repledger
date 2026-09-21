import { useEffect, useRef, useState } from "react";
import { PinInput } from "../components/forms";
import { BLANK_PROFILE, Onboarding } from "../components/Onboarding";
import { ConfirmButton } from "../components/safety";
import { Icon, toast } from "../components/ui";
import { createAccount, deleteAccount, openDemo, reloadAccounts, setPin, signIn, useAccounts, type Account } from "../lib/accounts";
import { importBackup } from "../lib/backup";
import { GOALS } from "../lib/calc";
import { storageWorks } from "../lib/storage";

type View = { kind: "list" } | { kind: "pin"; acc: Account } | { kind: "create" } | { kind: "reset"; acc: Account };

export function Welcome() {
  const accounts = useAccounts((s) => s.accounts);
  const people = [...accounts].sort((a, b) => Number(!!a.demo) - Number(!!b.demo) || b.lastUsed - a.lastUsed);
  const [view, setView] = useState<View>(accounts.some((a) => !a.demo) ? { kind: "list" } : { kind: "list" });

  const pick = async (acc: Account) => {
    if (!acc.pinHash) { await signIn(acc.id, ""); toast(`Welcome back, ${acc.name}`); return; }
    setView({ kind: "pin", acc });
  };

  if (view.kind === "create")
    return (
      <div className="welcome-wrap">
        <Onboarding
          mode="create"
          initial={BLANK_PROFILE}
          onCancel={() => setView({ kind: "list" })}
          onFinish={async (p, pin) => { await createAccount(p, pin); toast(`Profile created — welcome, ${p.name}`); }}
        />
      </div>
    );

  return (
    <div className="welcome-wrap">
      <div className="welcome">
        <div className="brand big">{Icon.logo}Rep Ledger</div>
        {view.kind === "list" && (
          <>
            <h1>{people.length ? "Who's training?" : "Let's set you up"}</h1>
            <p className="muted prose" style={{ marginTop: 6 }}>
              {people.length
                ? "Pick your profile, or create a new one."
                : "Tell us about yourself and your goal, and we'll work out your daily calories, macros and a training plan."}
            </p>
            {people.length > 0 && (
              <div className="people">
                {people.map((a) => (
                  <button key={a.id} className="person" onClick={() => pick(a)}>
                    <span className={`avatar${a.demo ? " demo" : ""}`}>{a.name.slice(0, 1).toUpperCase()}</span>
                    <span className="pn">{a.name}</span>
                    <span className="pg">{a.demo ? "Sample data" : a.goal ? GOALS[a.goal]?.label ?? "" : ""}</span>
                    {a.pinHash && <span className="lock" aria-label="PIN protected">PIN</span>}
                  </button>
                ))}
              </div>
            )}
            <div className="stack" style={{ marginTop: 22, gap: 10 }}>
              <button className="btn primary lg block" onClick={() => setView({ kind: "create" })}>{Icon.plus} Create my profile</button>
              {!people.some((a) => a.demo) && <button className="btn block" onClick={() => { openDemo(); toast("Opened the demo profile"); }}>Look around with demo data first</button>}
            </div>
            <RestoreBackup />
            {!storageWorks && <p className="small" style={{ marginTop: 16, color: "var(--warn)" }}>This browser is blocking storage, so profiles won't be kept after you close the page. Open the app in Chrome or Edge to save your data.</p>}
            <p className="xs faint" style={{ marginTop: 18 }}>Profiles are saved in this browser on this device. For privacy you're signed out when the app is closed, so you'll pick your profile and enter your PIN each time you open it.</p>
          </>
        )}
        {view.kind === "pin" && <PinStep acc={view.acc} onBack={() => setView({ kind: "list" })} onForgot={() => setView({ kind: "reset", acc: view.acc })} />}
        {view.kind === "reset" && <ResetStep acc={view.acc} onDone={() => setView({ kind: "list" })} />}
      </div>
    </div>
  );
}

function PinStep({ acc, onBack, onForgot }: { acc: Account; onBack: () => void; onForgot: () => void }) {
  const [pin, setPinV] = useState("");
  const [bad, setBad] = useState(false);
  useEffect(() => {
    if (pin.length !== 4) return;
    let live = true;
    signIn(acc.id, pin).then((ok) => {
      if (!live) return;
      if (ok) toast(`Welcome back, ${acc.name}`);
      else { setBad(true); setPinV(""); }
    });
    return () => { live = false; };
  }, [pin, acc]);
  const press = (d: string) => { setBad(false); setPinV((v) => (d === "⌫" ? v.slice(0, -1) : (v + d).slice(0, 4))); };
  return (
    <div className="pin-step">
      <span className="avatar lg">{acc.name.slice(0, 1).toUpperCase()}</span>
      <h1>Hi, {acc.name}</h1>
      <p className="muted" style={{ margin: "4px 0 16px" }}>Enter your PIN</p>
      <PinInput id="login-pin" label={`PIN for ${acc.name}`} value={pin} onChange={(v) => { setBad(false); setPinV(v); }} autoFocus invalid={bad} />
      <div className="small" style={{ minHeight: 22, marginTop: 8, color: "var(--bad)" }} role="alert">{bad ? "That PIN isn't right — try again." : ""}</div>
      <div className="keypad" aria-hidden="true">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].map((d, i) => d ? <button key={i} tabIndex={-1} onClick={() => press(d)}>{d}</button> : <span key={i} />)}
      </div>
      <div className="row" style={{ justifyContent: "center", marginTop: 14 }}>
        <button className="btn ghost sm" onClick={onBack}>{Icon.left} Other profiles</button>
        <button className="btn ghost sm" onClick={onForgot}>Forgot PIN?</button>
      </div>
    </div>
  );
}

function ResetStep({ acc, onDone }: { acc: Account; onDone: () => void }) {
  const [pin, setPinV] = useState("");
  return (
    <div className="pin-step">
      <h1>Reset {acc.name}'s PIN</h1>
      <p className="muted prose" style={{ margin: "6px auto 16px" }}>Profiles only live on this laptop, so the PIN can be reset here. Choose a new one, or remove the profile.</p>
      <PinInput id="reset-pin" label="New PIN" value={pin} onChange={setPinV} autoFocus />
      <div className="stack" style={{ marginTop: 18, gap: 10, alignItems: "center" }}>
        <button className="btn primary" disabled={pin.length !== 4} onClick={async () => { await setPin(acc.id, pin); toast("PIN changed"); onDone(); }}>Save new PIN</button>
        <ConfirmButton className="btn ghost sm" label="Delete this profile instead" question={`Delete ${acc.name} and all their logs?`} confirmLabel="Delete" onConfirm={() => { deleteAccount(acc.id); onDone(); }} />
        <button className="btn ghost sm" onClick={onDone}>Cancel</button>
      </div>
    </div>
  );
}

function RestoreBackup() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <button className="btn ghost sm" style={{ marginTop: 10 }} onClick={() => ref.current?.click()}>{Icon.upload} Restore from a backup file</button>
      <input ref={ref} type="file" accept="application/json,.json" hidden onChange={async (e) => {
        const f = e.target.files?.[0];
        e.target.value = "";
        if (!f) return;
        try { const n = await importBackup(f); reloadAccounts(); toast(`Restored ${n} profile${n === 1 ? "" : "s"} — pick yours to sign in`); }
        catch (err) { toast(err instanceof Error ? err.message : "Couldn't read that file"); }
      }} />
    </>
  );
}
