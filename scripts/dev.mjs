import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// Only the dev command enables draft UI; build/start retain their existing guards.
const child = spawn(
  process.execPath,
  [require.resolve("next/dist/bin/next"), "dev", ...process.argv.slice(2)],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      SITE_PREVIEW_DRAFTS: process.env.SITE_PREVIEW_DRAFTS ?? "1",
    },
  },
);

child.on("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});
child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
