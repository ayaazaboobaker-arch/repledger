import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./lib/theme";
import "./styles/app.css";

// iPhone ignores "no zoom" in the viewport tag, so block pinch-zoom gestures directly (the app is designed
// to be readable without zooming, like a native app).
for (const ev of ["gesturestart", "gesturechange", "gestureend"]) document.addEventListener(ev, (e) => e.preventDefault(), { passive: false });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
