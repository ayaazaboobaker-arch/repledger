import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

/**
 * Form check runs Google's MediaPipe pose model on the phone. Its WebAssembly runtime lives in
 * node_modules; this serves it at /mediapipe/ while developing and copies it into the build,
 * so nothing is fetched from Google at run time and no extra build script is needed.
 */
function mediapipe(): Plugin {
  const dir = join(process.cwd(), "node_modules", "@mediapipe", "tasks-vision", "wasm");
  const files = ["vision_wasm_internal.js", "vision_wasm_internal.wasm", "vision_wasm_nosimd_internal.js", "vision_wasm_nosimd_internal.wasm"];
  return {
    name: "rep-ledger-mediapipe",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const name = req.url?.split("?")[0].match(/\/mediapipe\/([^/]+)$/)?.[1];
        if (!name || !files.includes(name) || !existsSync(join(dir, name))) return next();
        res.setHeader("Content-Type", name.endsWith(".wasm") ? "application/wasm" : "text/javascript");
        res.end(readFileSync(join(dir, name)));
      });
    },
    generateBundle() {
      if (!existsSync(dir)) {
        this.warn("@mediapipe/tasks-vision is not installed - form check will not work. Run npm install.");
        return;
      }
      for (const f of files) this.emitFile({ type: "asset", fileName: `mediapipe/${f}`, source: readFileSync(join(dir, f)) });
    },
  };
}

// `npm run build` -> normal multi-file build in dist/
// `SINGLE=1 npm run build` -> one self-contained dist/index.html (handy for sharing a preview)
export default defineConfig({
  plugins: [react(), mediapipe(), ...(process.env.SINGLE ? [viteSingleFile()] : [])],
  base: "./",
});
