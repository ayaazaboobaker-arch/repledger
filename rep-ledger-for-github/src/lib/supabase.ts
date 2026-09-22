import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * The online database. Set these two values in a .env.local file (for your laptop)
 * and in Vercel → Settings → Environment Variables (for the live site):
 *   VITE_SUPABASE_URL=https://xxxx.supabase.co
 *   VITE_SUPABASE_ANON_KEY=your publishable / anon key
 */
const clean = (v: unknown) => (typeof v === "string" ? v.trim().replace(/^["']|["']$/g, "") : "");
// Accept the URL however it was copied: with /rest/v1/ on the end or a trailing slash.
const url = clean(import.meta.env.VITE_SUPABASE_URL).replace(/\/(rest|auth)\/v1\/?$/, "").replace(/\/+$/, "");
const key = clean(import.meta.env.VITE_SUPABASE_ANON_KEY);

export const cloudConfigured = /^https?:\/\/\S+$/.test(url) && key.length > 20 && !/PASTE_/.test(url + key);

export const supabase: SupabaseClient | null = cloudConfigured
  ? createClient(url, key, {
      auth: { storageKey: "rep-ledger:sb", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" },
    })
  : null;

/** The row each person has in the `profiles` table. */
export interface ProfileRow {
  id: string;
  name: string | null;
  goal: string | null;
  pin_hash: string | null;
  data: unknown;
  updated_at: string;
}

/** True when an error looks like "no internet / server unreachable" rather than "not allowed". */
export function isNetworkError(e: unknown): boolean {
  if (typeof navigator !== "undefined" && navigator.onLine === false) return true;
  const msg = String((e as { message?: string })?.message ?? e ?? "");
  const status = (e as { status?: number })?.status;
  return /fetch|network|timeout|load failed/i.test(msg) || status === 0 || (typeof status === "number" && status >= 500);
}
