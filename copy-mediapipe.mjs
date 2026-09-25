// Copies the MediaPipe pose runtime (WebAssembly) from node_modules into public/mediapipe,
// so the form check works without downloading anything from Google at run time.
// Runs automatically before `npm run dev` and `npm run build`.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const from = join(root, "node_modules", "@mediapipe", "tasks-vision", "wasm");
const to = join(root, "public", "mediapipe");
const files = ["vision_wasm_internal.js", "vision_wasm_internal.wasm", "vision_wasm_nosimd_internal.js", "vision_wasm_nosimd_internal.wasm"];

if (!existsSync(from)) {
  console.warn("[copy-mediapipe] @mediapipe/tasks-vision is not installed - run npm install. Form check will not work until then.");
  process.exit(0);
}
mkdirSync(to, { recursive: true });
for (const f of files) copyFileSync(join(from, f), join(to, f));
console.log(`[copy-mediapipe] copied ${files.length} files to public/mediapipe`);
