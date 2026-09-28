/**
 * Subscription plans and fair-use limits. Prices include VAT, in rand.
 * The server-side AI function must enforce the same numbers (see ai-pricing-plan.md in the RepLedger project).
 */
export const PRICES = { monthly: 99, yearly: 899, topup: 39 } as const;
export const YEARLY_SAVING = PRICES.monthly * 12 - PRICES.yearly; // R289

export type AiFeature = "scan" | "chat" | "formReview" | "checkin" | "mealPlan";
export interface Limit { day?: number; month: number }

export const AI_FEATURES: { id: AiFeature; label: string; unit: string }[] = [
  { id: "scan", label: "Meal scans", unit: "scans" },
  { id: "chat", label: "Coach chat", unit: "messages" },
  { id: "formReview", label: "AI form reviews", unit: "reviews" },
  { id: "checkin", label: "Weekly check-ins", unit: "check-ins" },
  { id: "mealPlan", label: "Meal plans", unit: "plans" },
];

export const PRO_LIMITS: Record<AiFeature, Limit> = {
  scan: { day: 12, month: 200 },
  chat: { day: 40, month: 400 },
  formReview: { day: 5, month: 30 },
  checkin: { month: 5 },
  mealPlan: { month: 4 },
};
export const FREE_LIMITS: Record<AiFeature, Limit> = {
  scan: { month: 5 },
  chat: { month: 10 },
  formReview: { month: 1 },
  checkin: { month: 0 },
  mealPlan: { month: 0 },
};
export const TOPUP = { scan: 100, chat: 200 } as const;

export const limitText = (l: Limit, unit: string) =>
  l.month === 0 ? "-" : `${l.month} ${unit} a month${l.day ? ` · up to ${l.day} a day` : ""}`;
