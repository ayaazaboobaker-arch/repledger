import { useSyncExternalStore } from "react";

/** How the app looks: dark glass by default, light glass, or follow the phone. Saved on this device only. */
export type ThemeChoice = "dark" | "light" | "auto";
const KEY = "rl-theme";
const listeners = new Set<() => void>();

const read = (): ThemeChoice => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "auto" ? v : "dark";
  } catch { return "dark"; }
};

function apply(choice: ThemeChoice) {
  const root = document.documentElement;
  root.dataset.theme = choice;
  const light = choice === "light" || (choice === "auto" && window.matchMedia("(prefers-color-scheme: light)").matches);
  const color = light ? "#edf4f7" : "#050a12";
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", color));
}

let current = read();
apply(current);
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => apply(current));

export function setTheme(choice: ThemeChoice) {
  current = choice;
  try { localStorage.setItem(KEY, choice); } catch { /* storage blocked: still applies for this visit */ }
  apply(choice);
  listeners.forEach((l) => l());
}

export function useThemeChoice(): ThemeChoice {
  return useSyncExternalStore((l) => { listeners.add(l); return () => void listeners.delete(l); }, () => current);
}
