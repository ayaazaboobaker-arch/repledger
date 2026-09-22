import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPin, signOut, useCurrentAccount, verifyPin } from "../lib/accounts";
import { GOALS } from "../lib/calc";
import { useSync } from "../lib/cloud";
import { useStore } from "../lib/store";
import { fmt } from "../lib/util";
import { PinInput } from "./forms";
import { Icon, Sheet, toast } from "./ui";

/** The avatar in the header: opens your profile menu. */
export function ProfileMenu() {
  const acc = useCurrentAccount();
  const { profile, targets } = useStore();
  const [open, setOpen] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const nav = useNavigate();

  useEffect(() => {
    if (!open) return;
    const click = (e: PointerEvent) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false); };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", click);
    document.addEventListener("keydown", key);
    wrap.current?.querySelector<HTMLElement>(".menu-item")?.focus();
    return () => { document.removeEventListener("pointerdown", click); document.removeEventListener("keydown", key); };
  }, [open]);

  if (!acc) return null;
  const go = (to: string, state?: object) => { setOpen(false); nav(to, { state }); };
  const onMenuKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const items = [...(wrap.current?.querySelectorAll<HTMLElement>(".menu-item") ?? [])];
    const i = items.indexOf(document.activeElement as HTMLElement);
    items[(i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length]?.focus();
  };

  return (
    <div className="me-wrap" ref={wrap}>
      <button className={`me-chip${acc.demo ? " demo" : ""}${open ? " open" : ""}`} aria-haspopup="menu" aria-expanded={open} aria-label={`Profile menu for ${acc.name}`} onClick={() => setOpen(!open)}>
        {acc.name.slice(0, 1).toUpperCase()}
      </button>
      {open && (
        <div className="me-menu" role="menu" aria-label="Profile" onKeyDown={onMenuKey}>
          <div className="me-head">
            <span className={`avatar${acc.demo ? " demo" : ""}`}>{acc.name.slice(0, 1).toUpperCase()}</span>
            <div style={{ minWidth: 0 }}>
              <div className="me-name">{acc.name}</div>
              <div className="xs muted">{profile ? GOALS[profile.goal].label : "No goal set"} · {fmt(targets.kcal)} kcal/day</div>
              {!acc.demo && <SyncBadge />}
            </div>
          </div>
          <div className="me-macros">
            <span><b>{targets.protein}</b> g protein</span><span><b>{targets.carbs}</b> g carbs</span><span><b>{targets.fat}</b> g fat</span>
          </div>
          <button role="menuitem" className="menu-item" onClick={() => go("/profile")}>{Icon.target}<span>My plan &amp; targets<small>Calories, macros, training split</small></span></button>
          <button role="menuitem" className="menu-item" onClick={() => go("/profile", { edit: true })}>{Icon.edit}<span>Edit my details<small>Age, weight, goal, training days</small></span></button>
          {!acc.demo && <button role="menuitem" className="menu-item" onClick={() => { setOpen(false); setPinOpen(true); }}>{Icon.lock}<span>{acc.pinHash ? "Change PIN" : "Add a PIN"}<small>{acc.pinHash ? "Update your 4-digit PIN" : "Lock the app when it opens"}</small></span></button>}
          <div className="me-sep" />
          <button role="menuitem" className="menu-item" onClick={() => { setOpen(false); signOut(); }}>{Icon.users}<span>Switch profile</span></button>
          <button role="menuitem" className="menu-item danger" onClick={() => { setOpen(false); signOut(); toast("Logged out"); }}>{Icon.logout}<span>Log out</span></button>
        </div>
      )}
      <PinSheet open={pinOpen} onClose={() => setPinOpen(false)} />
    </div>
  );
}

/** Change or add a PIN: current PIN (if any), then the new one twice. */
export function PinSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const acc = useCurrentAccount();
  const [step, setStep] = useState<"old" | "new" | "confirm">("new");
  const [oldPin, setOld] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [err, setErr] = useState("");
  useEffect(() => {
    if (open) { setStep(acc?.pinHash ? "old" : "new"); setOld(""); setP1(""); setP2(""); setErr(""); }
  }, [open, acc?.pinHash]);
  useEffect(() => {
    if (!acc) return;
    if (step === "old" && oldPin.length === 4) verifyPin(acc.id, oldPin).then((ok) => { if (ok) { setStep("new"); setErr(""); } else { setErr("That's not your current PIN."); setOld(""); } });
    if (step === "new" && p1.length === 4) { setStep("confirm"); setErr(""); }
    if (step === "confirm" && p2.length === 4) {
      if (p2 !== p1) { setErr("The PINs don't match — try again."); setP1(""); setP2(""); setStep("new"); }
      else setPin(acc.id, p1).then(() => toast("PIN saved"), () => toast("PIN saved on this device — couldn't reach the server, so try again later to update it online")).finally(onClose);
    }
  }, [oldPin, p1, p2, step, acc, onClose]);
  if (!acc) return null;
  const title = step === "old" ? "Enter your current PIN" : step === "new" ? "Choose a new PIN" : "Type it once more";
  return (
    <Sheet open={open} onClose={onClose} label="Change PIN" title={<div className="spread"><h2>{acc.pinHash ? "Change PIN" : "Add a PIN"}</h2><button className="icon-btn" onClick={onClose} aria-label="Close">{Icon.x}</button></div>}>
      <div className="pin-step" style={{ padding: "8px 0 12px" }}>
        <span className="avatar lg" style={{ display: "grid" }}>{Icon.lock}</span>
        <div className="pin-dots" aria-hidden="true">
          {(acc.pinHash ? ["old", "new", "confirm"] : ["new", "confirm"]).map((s) => <i key={s} className={s === step ? "on" : ""} />)}
        </div>
        <p style={{ fontWeight: 700, margin: "10px 0 14px" }}>{title}</p>
        {step === "old" && <PinInput key="old" id="pin-old" label="Current PIN" value={oldPin} onChange={(v) => { setErr(""); setOld(v); }} autoFocus invalid={!!err} />}
        {step === "new" && <PinInput key="new" id="pin-new" label="New PIN" value={p1} onChange={(v) => { setErr(""); setP1(v); }} autoFocus />}
        {step === "confirm" && <PinInput key="confirm" id="pin-confirm" label="Confirm new PIN" value={p2} onChange={setP2} autoFocus />}
        <div className="small" style={{ minHeight: 22, marginTop: 10, color: "var(--bad)" }} role="alert">{err}</div>
      </div>
    </Sheet>
  );
}

/** "Saved" / "Saving…" / "Offline" — whether your data has reached the online database. */
export function SyncBadge() {
  const { status, message } = useSync();
  if (status === "off") return null;
  const label = status === "saved" ? "Saved to your account" : status === "saving" ? "Saving…" : status === "offline" ? "Offline — will sync when you're back online" : "Couldn't sync — will retry";
  return <div className={`sync-badge ${status}`} title={message ?? undefined}>{Icon.cloud}<span>{label}</span></div>;
}
