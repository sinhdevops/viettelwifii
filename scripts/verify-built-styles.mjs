import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Inspect shipped CSS, not only source class names: catch a disconnected PostCSS entry.
const root = join(process.cwd(), ".next", "static");
const css = readdirSync(root, { recursive: true })
  .filter((file) => file.endsWith(".css"))
  .map((file) => readFileSync(join(root, file), "utf8"))
  .join("\n");

// Utilities authored after the capture and still used by live components.
const required = [
  "accent-primary",
  "size-4",
  "min-h-11",
  "bg-black/60",
  "max-h-[90vh]",
  "shadow-2xl",
  "text-red-600",
  "space-y-4",
  "border-neutral-300",
];
for (const name of required) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
  assert.ok(css.includes(`.${escaped}`), `Missing shipped utility: .${name}`);
}

const entry = readFileSync("src/styles/utilities.css", "utf8");
assert.match(entry, /@import "tailwindcss\/utilities\.css"/);
assert.doesNotMatch(
  entry,
  /@import\s+["']tailwindcss(?:\/preflight\.css)?["']/,
);
for (const [name, value] of Object.entries({
  sm: 36,
  md: 60,
  lg: 80,
  xl: 96,
})) {
  assert.ok(
    entry.includes(`--breakpoint-${name}: ${value}rem`),
    `Captured ${name} breakpoint changed`,
  );
}

// The captured reset must stay layered so authored utilities can win.
const captured = readFileSync("src/styles/viettelup-source.css", "utf8");
assert.match(
  captured,
  /p:empty\{display:none\}\s*\}\s*\.no-scrollbar/,
  "Captured reset is no longer closed inside @layer base",
);

console.log(
  "PASS: shipped utility CSS, no Preflight import, captured breakpoints.",
);
