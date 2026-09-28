import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./lib/theme";
import { loadAllFoods } from "./lib/foods";
import "./styles/app.css";

// iPhone ignores "no zoom" in the viewport tag, so block pinch-zoom gestures directly (the app is designed
// to be readable without zooming, like a native app).
for (const ev of ["gesturestart", "gesturechange", "gestureend"]) document.addEventListener(ev, (e) => e.preventDefault(), { passive: false });

// Fetch the big food list (chains + USDA) once the app has settled, so search is complete by the time you log food.
const idle = (cb: () => void) => ("requestIdleCallback" in window ? (window as unknown as { requestIdleCallback: (f: () => void, o?: object) => void }).requestIdleCallback(cb, { timeout: 4000 }) : setTimeout(cb, 2500));
window.setTimeout(() => idle(() => void loadAllFoods().catch(() => {})), 1500);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
