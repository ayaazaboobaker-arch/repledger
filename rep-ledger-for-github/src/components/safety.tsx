import { Component, useState, type ErrorInfo, type ReactNode } from "react";

/**
 * Two-step button used instead of window.confirm(), which is silently
 * blocked in embedded/sandboxed previews.
 */
export function ConfirmButton({ label, question, confirmLabel, onConfirm, className = "btn" }: { label: ReactNode; question: string; confirmLabel: string; onConfirm: () => void; className?: string }) {
  const [asking, setAsking] = useState(false);
  if (!asking) return <button className={className} onClick={() => setAsking(true)}>{label}</button>;
  return (
    <span className="confirm-row" role="group" aria-label={question}>
      <span className="small">{question}</span>
      <button className="btn sm primary" onClick={() => { setAsking(false); onConfirm(); }}>{confirmLabel}</button>
      <button className="btn sm ghost" onClick={() => setAsking(false)}>Cancel</button>
    </span>
  );
}

/** Inline name field used instead of window.prompt(). */
export function NameInline({ label, initial, onSave }: { label: ReactNode; initial: string; onSave: (name: string) => void }) {
  const [open, setOpen] = useState(false);
  const [v, setV] = useState(initial);
  if (!open) return <button className="btn sm ghost" onClick={() => { setV(initial); setOpen(true); }}>{label}</button>;
  return (
    <form className="confirm-row" onSubmit={(e) => { e.preventDefault(); if (v.trim()) { onSave(v.trim()); setOpen(false); } }}>
      <input className="in" autoFocus value={v} onChange={(e) => setV(e.target.value)} aria-label="Meal name" style={{ width: 180, padding: "5px 8px" }} />
      <button className="btn sm primary" type="submit">Save</button>
      <button className="btn sm ghost" type="button" onClick={() => setOpen(false)}>Cancel</button>
    </form>
  );
}

/** Keeps one broken page from blanking the whole app. */
export class PageBoundary extends Component<{ resetKey: string; children: ReactNode }, { error: Error | null; key: string }> {
  state = { error: null as Error | null, key: this.props.resetKey };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  static getDerivedStateFromProps(props: { resetKey: string }, state: { error: Error | null; key: string }) {
    return props.resetKey !== state.key ? { error: null, key: props.resetKey } : null;
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Rep Ledger page error:", error, info.componentStack);
  }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <section className="card" style={{ maxWidth: 560, margin: "40px auto" }}>
        <h2>This page hit a snag</h2>
        <p className="small muted" style={{ margin: "8px 0 14px" }}>Your data is safe. Try another tab, or reload the app.</p>
        <p className="xs faint" style={{ marginBottom: 14, overflowWrap: "anywhere" }}>{this.state.error.message}</p>
        <button className="btn primary" onClick={() => location.reload()}>Reload</button>
      </section>
    );
  }
}
