/**
 * Who gets the Coach.
 *
 *  - The demo profile always has it, so people can see what they would pay for.
 *  - A signed-in account has it while its row in `subscriptions` is active or trialing.
 *    That table can only be written by the server (the payment webhook) - see supabase/schema.sql.
 *  - Developer unlock: add ?coach-dev to the address (or run `npm run dev`) and tap
 *    "Unlock for testing" on the Coach page. It is saved on this device only.
 *
 * Note: the Coach rules run in the browser, so this lock keeps honest people honest. Anything
 * that costs money per use (real AI, later) must be checked on the server, not here.
 */
import { useEffect } from "react";
import { create } from "zustand";
import { useCurrentAccount } from "../accounts";
import { supabase } from "../supabase";

export type AccessSource = "demo" | "dev" | "subscription" | "none";
export interface Subscription { status: string; plan: string | null; current_period_end: string | null }
export interface CoachAccess { pro: boolean; source: AccessSource; loading: boolean; sub: Subscription | null }

const DEV_KEY = "rl-coach-dev";
const FREE_CHECK_KEY = "rl-coach-free-form-checks";
const ACTIVE = new Set(["active", "trialing", "non-renewing"]);

export const devUnlockAllowed = () => import.meta.env.DEV || /[?&]coach-dev\b/.test(location.search + location.hash);
const readDev = () => { try { return localStorage.getItem(DEV_KEY) === "1"; } catch { return false; } };

const useAccessStore = create<{ dev: boolean; subs: Record<string, Subscription | null | undefined>; loading: Record<string, boolean> }>()(() => ({
  dev: readDev(), subs: {}, loading: {},
}));

export function setDevUnlock(on: boolean) {
  try { on ? localStorage.setItem(DEV_KEY, "1") : localStorage.removeItem(DEV_KEY); } catch { /* storage blocked: lasts this visit */ }
  useAccessStore.setState({ dev: on });
}

async function loadSub(id: string) {
  if (!supabase) { useAccessStore.setState((s) => ({ subs: { ...s.subs, [id]: null } })); return; }
  useAccessStore.setState((s) => ({ loading: { ...s.loading, [id]: true } }));
  try {
    const { data, error } = await supabase.from("subscriptions").select("status, plan, current_period_end").eq("user_id", id).maybeSingle();
    // a missing table (not set up yet) just means "no subscription"
    useAccessStore.setState((s) => ({ subs: { ...s.subs, [id]: error ? null : (data as Subscription | null) } }));
  } catch {
    useAccessStore.setState((s) => ({ subs: { ...s.subs, [id]: null } }));
  } finally {
    useAccessStore.setState((s) => ({ loading: { ...s.loading, [id]: false } }));
  }
}

export const isActive = (sub: Subscription | null | undefined) =>
  !!sub && ACTIVE.has(sub.status) && (!sub.current_period_end || new Date(sub.current_period_end).getTime() > Date.now());

export function useCoachAccess(): CoachAccess {
  const acc = useCurrentAccount();
  const { dev, subs, loading } = useAccessStore();
  const id = acc && !acc.demo ? acc.id : null;
  useEffect(() => { if (id && subs[id] === undefined) void loadSub(id); }, [id, subs]);
  if (!acc) return { pro: false, source: "none", loading: false, sub: null };
  if (acc.demo) return { pro: true, source: "demo", loading: false, sub: null };
  const sub = id ? subs[id] ?? null : null;
  if (isActive(sub)) return { pro: true, source: "subscription", loading: false, sub };
  if (dev) return { pro: true, source: "dev", loading: false, sub };
  return { pro: false, source: "none", loading: !!(id && (loading[id] || subs[id] === undefined)), sub };
}

export const refreshAccess = (id: string) => loadSub(id);

/* ---------- the free taste: one form check on the free plan (used by the form-check feature) ---------- */
export function freeFormChecksUsed(id: string): number {
  try { return Number(JSON.parse(localStorage.getItem(FREE_CHECK_KEY) || "{}")[id] || 0); } catch { return 0; }
}
export function spendFreeFormCheck(id: string) {
  try {
    const m = JSON.parse(localStorage.getItem(FREE_CHECK_KEY) || "{}");
    m[id] = (m[id] || 0) + 1;
    localStorage.setItem(FREE_CHECK_KEY, JSON.stringify(m));
  } catch { /* ignore */ }
}
export const FREE_FORM_CHECKS = 1;
