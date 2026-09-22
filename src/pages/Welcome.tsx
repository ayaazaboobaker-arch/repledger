import { useEffect, useRef, useState } from "react";
import { PinInput } from "../components/forms";
import { BLANK_PROFILE, Onboarding } from "../components/Onboarding";
import { ConfirmButton } from "../components/safety";
import { Icon, toast } from "../components/ui";
import {
  bringOver, cancelRecovery, cancelSetup, cloudConfigured, emailSignIn, emailSignUp, finishSetup, forgetOnDevice, openDemo,
  reloadAccounts, sendPasswordReset, setNewPassword, setPin, unlock, useAccounts, type Account,
} from "../lib/accounts";
import { importBackup } from "../lib/backup";
import { GOALS } from "../lib/calc";
import { storageWorks } from "../lib/storage";

type View =
  | { kind: "list" }
  | { kind: "pin"; acc: Account }
  | { kind: "password"; acc: Account; reason: "expired" | "forgot-pin" }
  | { kind: "signin"; email?: string }
  | { kind: "signup" }
  | { kind: "forgot"; email: string }
  | { kind: "check-email"; email: string; what: "confirm" | "reset" };

export function Welcome() {
  const accounts = useAccounts((s) => s.accounts);
  const pending = useAccounts((s) => s.pending);
  const recovery = useAccounts((s) => s.recovery);
  const people = [...accounts].sort((a, b) => Number(!!a.demo) - Number(!!b.demo) || b.lastUsed - a.lastUsed);
  const [view, setView] = useState<View>(accounts.length ? { kind: "list" } : { kind: "signin" });
  const back = () => setView(accounts.length ? { kind: "list" } : { kind: "signin" });

  if (recovery) return <Shell><NewPassword /></Shell>;
  if (pending) return <Setup />;

  return (
    <Shell>
      {!cloudConfigured && (
        <div className="notice warn" role="status">
          <b>Online accounts aren't connected yet.</b> Add the Supabase keys (see README → “Online accounts”) to sign in. You can still look around with the demo.
        </div>
      )}

      {view.kind === "list" && (
        <>
          <h1>Who's training?</h1>
          <p className="muted prose" style={{ marginTop: 6 }}>Pick your profile and enter your PIN.</p>
          <div className="people">
            {people.map((a) => (
              <button key={a.id} className="person" onClick={() => (a.pinHash ? setView({ kind: "pin", acc: a }) : unlock(a.id, "").then(() => toast(`Opened ${a.name}`)))}>
                <span className={`avatar${a.demo ? " demo" : ""}`}>{a.name.slice(0, 1).toUpperCase()}</span>
                <span className="pn">{a.name}</span>
                <span className="pg">{a.demo ? "Sample data" : a.goal ? GOALS[a.goal]?.label ?? "" : ""}</span>
                {a.pinHash && <span className="lock" aria-label="PIN protected">PIN</span>}
              </button>
            ))}
            <button className="person add" onClick={() => setView({ kind: "signin" })}>
              <span className="avatar ghost">{Icon.plus}</span>
              <span className="pn">Add account</span>
              <span className="pg">Sign in or sign up</span>
            </button>
          </div>
          {!people.some((a) => a.demo) && (
            <button className="btn ghost sm" style={{ marginTop: 16 }} onClick={() => { openDemo(); toast("Opened the demo profile"); }}>Look around with demo data</button>
          )}
          <Foot />
        </>
      )}

      {view.kind === "pin" && (
        <PinStep
          acc={view.acc}
          onBack={back}
          onForgot={() => setView({ kind: "password", acc: view.acc, reason: "forgot-pin" })}
          onNeedPassword={() => setView({ kind: "password", acc: view.acc, reason: "expired" })}
        />
      )}
      {view.kind === "password" && <PasswordStep acc={view.acc} reason={view.reason} onBack={back} onForgotPassword={() => setView({ kind: "forgot", email: view.acc.email ?? "" })} />}

      {view.kind === "signin" && (
        <EmailForm
          mode="signin"
          email={view.email}
          onSwitch={() => setView({ kind: "signup" })}
          onForgot={(email) => setView({ kind: "forgot", email })}
          onBack={accounts.length ? back : undefined}
          onConfirm={(email) => setView({ kind: "check-email", email, what: "confirm" })}
        />
      )}
      {view.kind === "signup" && (
        <EmailForm mode="signup" onSwitch={() => setView({ kind: "signin" })} onBack={accounts.length ? back : undefined} onConfirm={(email) => setView({ kind: "check-email", email, what: "confirm" })} />
      )}
      {view.kind === "forgot" && <ForgotPassword email={view.email} onBack={() => setView({ kind: "signin", email: view.email })} onSent={(email) => setView({ kind: "check-email", email, what: "reset" })} />}
      {view.kind === "check-email" && (
        <div className="auth">
          <span className="avatar lg" style={{ display: "grid", margin: "0 auto" }}>{Icon.mail}</span>
          <h1 style={{ marginTop: 12 }}>Check your email</h1>
          <p className="muted prose" style={{ marginTop: 8 }}>
            {view.what === "confirm"
              ? <>We sent a link to <b>{view.email}</b>. Tap it to confirm your account - it opens Rep Ledger and takes you to the next step.</>
              : <>We sent a link to <b>{view.email}</b>. Tap it to choose a new password.</>}
          </p>
          <button className="btn" style={{ marginTop: 18 }} onClick={() => setView({ kind: "signin", email: view.email })}>Back to sign in</button>
        </div>
      )}

      {(view.kind === "signin" || view.kind === "signup") && (
        <>
          {!people.some((a) => a.demo) && (
            <button className="btn ghost sm" style={{ marginTop: 14 }} onClick={() => { openDemo(); toast("Opened the demo profile"); }}>Look around with demo data first</button>
          )}
          <Foot />
        </>
      )}
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="welcome-wrap">
      <div className="welcome">
        <div className="brand big">{Icon.logo}Rep Ledger</div>
        {children}
      </div>
    </div>
  );
}

function Foot() {
  const locals = useAccounts((s) => s.locals);
  return (
    <>
      {locals.length > 0 && (
        <p className="small muted prose" style={{ marginTop: 18 }}>
          {locals.length === 1 ? `${locals[0].name}'s profile is` : `${locals.length} profiles are`} saved on this device from before. Sign in or create an account and you can bring {locals.length === 1 ? "it" : "one"} over.
        </p>
      )}
      <RestoreBackup />
      {!storageWorks && <p className="small" style={{ marginTop: 16, color: "var(--warn)" }}>This browser is blocking storage, so you'll need to sign in with your email each time.</p>}
      <p className="xs faint" style={{ marginTop: 18 }}>Your data is saved to your account online. For privacy the app locks when it's closed - pick your profile and enter your PIN to get back in.</p>
    </>
  );
}

/* ---------- PIN ---------- */

function PinStep({ acc, onBack, onForgot, onNeedPassword }: { acc: Account; onBack: () => void; onForgot: () => void; onNeedPassword: () => void }) {
  const [pin, setPinV] = useState("");
  const [bad, setBad] = useState(false);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (pin.length !== 4) return;
    let live = true;
    setBusy(true);
    unlock(acc.id, pin).then((r) => {
      if (!live) return;
      setBusy(false);
      if (r === "ok") toast(`Welcome back, ${acc.name}`);
      else if (r === "need-password") onNeedPassword();
      else { setBad(true); setPinV(""); }
    });
    return () => { live = false; };
  }, [pin, acc, onNeedPassword]);
  const press = (d: string) => { setBad(false); setPinV((v) => (d === "⌫" ? v.slice(0, -1) : (v + d).slice(0, 4))); };
  return (
    <div className="pin-step">
      <span className="avatar lg">{acc.name.slice(0, 1).toUpperCase()}</span>
      <h1>Hi, {acc.name}</h1>
      <p className="muted" style={{ margin: "4px 0 16px" }}>{busy ? "Unlocking…" : "Enter your PIN"}</p>
      <PinInput id="login-pin" label={`PIN for ${acc.name}`} value={pin} onChange={(v) => { setBad(false); setPinV(v); }} autoFocus invalid={bad} />
      <div className="small" style={{ minHeight: 22, marginTop: 8, color: "var(--bad)" }} role="alert">{bad ? "That PIN isn't right - try again." : ""}</div>
      <div className="keypad" aria-hidden="true">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].map((d, i) => d ? <button key={i} tabIndex={-1} onClick={() => press(d)}>{d}</button> : <span key={i} />)}
      </div>
      <div className="row" style={{ justifyContent: "center", marginTop: 14 }}>
        <button className="btn ghost sm" onClick={onBack}>{Icon.left} Other profiles</button>
        {!acc.demo && <button className="btn ghost sm" onClick={onForgot}>Forgot PIN?</button>}
      </div>
    </div>
  );
}

/** Sign in again with the password: when the online session has expired, or to set a new PIN. */
function PasswordStep({ acc, reason, onBack, onForgotPassword }: { acc: Account; reason: "expired" | "forgot-pin"; onBack: () => void; onForgotPassword: () => void }) {
  const [password, setPassword] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const needPin = reason === "forgot-pin";
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (needPin && (p1.length !== 4 || p1 !== p2)) { setErr(p1.length !== 4 ? "Choose a 4-digit PIN." : "The two PINs don't match."); return; }
    setBusy(true);
    const r = await emailSignIn(acc.email ?? "", password);
    if (!r.ok) { setBusy(false); setErr(r.message); return; }
    if (needPin) { await setPin(acc.id, p1).catch(() => toast("PIN saved on this device - it'll sync when you're back online")); toast("New PIN saved"); }
    else toast(`Welcome back, ${acc.name}`);
  };
  return (
    <form className="auth" onSubmit={submit}>
      <span className="avatar lg" style={{ display: "grid", margin: "0 auto" }}>{acc.name.slice(0, 1).toUpperCase()}</span>
      <h1 style={{ marginTop: 10 }}>{needPin ? "Reset your PIN" : "Sign in again"}</h1>
      <p className="muted prose" style={{ margin: "6px auto 16px" }}>
        {needPin ? "Enter your account password, then choose a new PIN." : "It's been a while - enter your password once to keep your data syncing."}
      </p>
      <label className="f">Email<input className="in" value={acc.email ?? ""} readOnly /></label>
      <label className="f">Password<input className="in" id="pw" type="password" autoComplete="current-password" autoFocus value={password} onChange={(e) => { setErr(""); setPassword(e.target.value); }} /></label>
      {needPin && (
        <div className="grid-2">
          <div><div className="f" style={{ marginBottom: 6 }}>New PIN</div><PinInput id="new-pin" label="New PIN" value={p1} onChange={setP1} /></div>
          <div><div className="f" style={{ marginBottom: 6 }}>Type it again</div><PinInput id="new-pin2" label="Confirm new PIN" value={p2} onChange={setP2} invalid={p2.length === 4 && p1 !== p2} /></div>
        </div>
      )}
      <div className="small" style={{ minHeight: 20, color: "var(--bad)" }} role="alert">{err}</div>
      <button className="btn primary lg block" disabled={busy || !password}>{busy ? "Signing in…" : needPin ? "Save new PIN" : "Sign in"}</button>
      <div className="row" style={{ justifyContent: "center", marginTop: 6 }}>
        <button type="button" className="btn ghost sm" onClick={onBack}>{Icon.left} Back</button>
        <button type="button" className="btn ghost sm" onClick={onForgotPassword}>Forgot password?</button>
      </div>
      <ConfirmButton className="btn ghost sm danger-link" label="Remove this profile from this device" question={`Remove ${acc.name} from this device? Their data stays safe online.`} confirmLabel="Remove" onConfirm={async () => { await forgetOnDevice(acc.id); toast("Removed from this device"); onBack(); }} />
    </form>
  );
}

/* ---------- email + password ---------- */

function EmailForm({ mode, email: initialEmail, onSwitch, onForgot, onBack, onConfirm }: {
  mode: "signin" | "signup"; email?: string; onSwitch: () => void; onForgot?: (email: string) => void; onBack?: () => void; onConfirm: (email: string) => void;
}) {
  const [email, setEmail] = useState(initialEmail ?? "");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const signup = mode === "signup";
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) { setErr("Enter your email address."); return; }
    if (signup && password.length < 8) { setErr("Choose a password of at least 8 characters."); return; }
    if (signup && password !== password2) { setErr("The two passwords don't match."); return; }
    setBusy(true);
    const r = signup ? await emailSignUp(email, password) : await emailSignIn(email, password);
    setBusy(false);
    if (!r.ok) { setErr(r.message); return; }
    if (r.next === "confirm-email") onConfirm(email.trim());
    else if (r.next === "open") toast("Signed in");
  };
  return (
    <form className="auth" onSubmit={submit} noValidate>
      <h1>{signup ? "Create your account" : "Sign in"}</h1>
      <p className="muted prose" style={{ margin: "6px auto 18px" }}>
        {signup ? "Your workouts, food and weigh-ins are saved to your account, so they're on every device you sign in on." : "Use your email and password. After this, this device remembers you and your PIN is all you need."}
      </p>
      <label className="f">Email<input className="in" id="email" type="email" autoComplete="email" inputMode="email" autoFocus={!initialEmail} value={email} onChange={(e) => { setErr(""); setEmail(e.target.value); }} /></label>
      <label className="f">Password<input className="in" id="password" type="password" autoComplete={signup ? "new-password" : "current-password"} autoFocus={!!initialEmail} value={password} onChange={(e) => { setErr(""); setPassword(e.target.value); }} /></label>
      {signup && <label className="f">Type the password again<input className="in" id="password2" type="password" autoComplete="new-password" value={password2} onChange={(e) => { setErr(""); setPassword2(e.target.value); }} /></label>}
      <div className="small" style={{ minHeight: 20, color: "var(--bad)" }} role="alert">{err}</div>
      <button className="btn primary lg block" disabled={busy || !cloudConfigured}>{busy ? "One moment…" : signup ? "Create account" : "Sign in"}</button>
      <div className="row" style={{ justifyContent: "center", marginTop: 6, flexWrap: "wrap" }}>
        {onBack && <button type="button" className="btn ghost sm" onClick={onBack}>{Icon.left} Profiles</button>}
        <button type="button" className="btn ghost sm" onClick={onSwitch}>{signup ? "I already have an account" : "Create an account"}</button>
        {!signup && onForgot && <button type="button" className="btn ghost sm" onClick={() => onForgot(email)}>Forgot password?</button>}
      </div>
    </form>
  );
}

function ForgotPassword({ email: initial, onBack, onSent }: { email: string; onBack: () => void; onSent: (email: string) => void }) {
  const [email, setEmail] = useState(initial);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <form className="auth" onSubmit={async (e) => {
      e.preventDefault();
      if (!/^\S+@\S+\.\S+$/.test(email.trim())) { setErr("Enter your email address."); return; }
      setBusy(true);
      const m = await sendPasswordReset(email);
      setBusy(false);
      if (m) setErr(m); else onSent(email.trim());
    }} noValidate>
      <h1>Forgot your password?</h1>
      <p className="muted prose" style={{ margin: "6px auto 18px" }}>We'll email you a link to choose a new one.</p>
      <label className="f">Email<input className="in" id="reset-email" type="email" autoComplete="email" autoFocus value={email} onChange={(e) => { setErr(""); setEmail(e.target.value); }} /></label>
      <div className="small" style={{ minHeight: 20, color: "var(--bad)" }} role="alert">{err}</div>
      <button className="btn primary lg block" disabled={busy}>{busy ? "Sending…" : "Send reset link"}</button>
      <button type="button" className="btn ghost sm" style={{ marginTop: 6 }} onClick={onBack}>{Icon.left} Back to sign in</button>
    </form>
  );
}

function NewPassword() {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <form className="auth" onSubmit={async (e) => {
      e.preventDefault();
      if (p1.length < 8) { setErr("Choose a password of at least 8 characters."); return; }
      if (p1 !== p2) { setErr("The two passwords don't match."); return; }
      setBusy(true);
      const r = await setNewPassword(p1);
      setBusy(false);
      if (!r.ok) setErr(r.message); else toast("Password changed");
    }} noValidate>
      <h1>Choose a new password</h1>
      <label className="f" style={{ marginTop: 16 }}>New password<input className="in" id="np1" type="password" autoComplete="new-password" autoFocus value={p1} onChange={(e) => { setErr(""); setP1(e.target.value); }} /></label>
      <label className="f">Type it again<input className="in" id="np2" type="password" autoComplete="new-password" value={p2} onChange={(e) => { setErr(""); setP2(e.target.value); }} /></label>
      <div className="small" style={{ minHeight: 20, color: "var(--bad)" }} role="alert">{err}</div>
      <button className="btn primary lg block" disabled={busy}>{busy ? "Saving…" : "Save password"}</button>
      <button type="button" className="btn ghost sm" style={{ marginTop: 6 }} onClick={cancelRecovery}>Cancel</button>
    </form>
  );
}

/* ---------- first-time setup ---------- */

function Setup() {
  const pending = useAccounts((s) => s.pending)!;
  const locals = useAccounts((s) => s.locals);
  const [mode, setMode] = useState<"choose" | "fresh" | { local: Account }>(locals.length ? "choose" : "fresh");
  const [err, setErr] = useState("");

  if (mode === "fresh")
    return (
      <div className="welcome-wrap">
        <Onboarding
          mode="create"
          initial={BLANK_PROFILE}
          onCancel={() => (locals.length ? setMode("choose") : cancelSetup())}
          onFinish={async (p, pin) => {
            const m = await finishSetup(p, pin);
            if (m) toast(m); else toast(`Account ready - welcome, ${p.name}`);
          }}
        />
      </div>
    );

  return (
    <Shell>
      {mode === "choose" ? (
        <>
          <h1>Bring your data over?</h1>
          <p className="muted prose" style={{ marginTop: 6 }}>
            Signed in as <b>{pending.email}</b>. {locals.length === 1 ? "This profile is" : "These profiles are"} saved on this device from before - pick yours to move its workouts, food and weigh-ins into your account.
          </p>
          <div className="people">
            {locals.map((a) => (
              <button key={a.id} className="person" onClick={() => { setErr(""); setMode({ local: a }); }}>
                <span className="avatar">{a.name.slice(0, 1).toUpperCase()}</span>
                <span className="pn">{a.name}</span>
                <span className="pg">{a.goal ? GOALS[a.goal]?.label ?? "" : "On this device"}</span>
              </button>
            ))}
          </div>
          <div className="stack" style={{ marginTop: 22, gap: 10 }}>
            <button className="btn block" onClick={() => setMode("fresh")}>Start fresh instead</button>
            <button className="btn ghost sm" onClick={cancelSetup}>{Icon.left} Use a different email</button>
          </div>
        </>
      ) : (
        <BringOverStep local={mode.local} err={err} setErr={setErr} onBack={() => setMode("choose")} />
      )}
    </Shell>
  );
}

function BringOverStep({ local, err, setErr, onBack }: { local: Account; err: string; setErr: (s: string) => void; onBack: () => void }) {
  const [pin, setPinV] = useState("");
  const [pin2, setPin2] = useState("");
  const [busy, setBusy] = useState(false);
  const hasPin = !!local.pinHash;
  useEffect(() => {
    if (pin.length !== 4 || (!hasPin && pin2.length !== 4)) return;
    if (!hasPin && pin !== pin2) { setErr("The two PINs don't match."); return; }
    setBusy(true);
    bringOver(local.id, pin).then((m) => {
      setBusy(false);
      if (m) { setErr(m); setPinV(""); setPin2(""); } else toast(`${local.name}'s data is now in your account`);
    });
  }, [pin, pin2, hasPin, local, setErr]);
  return (
    <div className="pin-step">
      <span className="avatar lg">{local.name.slice(0, 1).toUpperCase()}</span>
      <h1>{local.name}</h1>
      <p className="muted prose" style={{ margin: "4px auto 16px" }}>
        {hasPin ? `Enter ${local.name}'s PIN to move this profile into your account. It stays your PIN.` : "Choose a 4-digit PIN for unlocking the app."}
      </p>
      <PinInput id="bring-pin" label="PIN" value={pin} onChange={(v) => { setErr(""); setPinV(v); }} autoFocus invalid={!!err} />
      {!hasPin && <div style={{ marginTop: 10 }}><PinInput id="bring-pin2" label="Confirm PIN" value={pin2} onChange={(v) => { setErr(""); setPin2(v); }} /></div>}
      <div className="small" style={{ minHeight: 22, marginTop: 8, color: "var(--bad)" }} role="alert">{busy ? <span className="muted">Uploading…</span> : err}</div>
      <button className="btn ghost sm" onClick={onBack}>{Icon.left} Back</button>
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
        try { const n = await importBackup(f); reloadAccounts(); toast(`Restored ${n} profile${n === 1 ? "" : "s"} - sign in to bring it into your account`); }
        catch (err) { toast(err instanceof Error ? err.message : "Couldn't read that file"); }
      }} />
    </>
  );
}
