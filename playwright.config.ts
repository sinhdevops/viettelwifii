import { defineConfig, devices } from "@playwright/test";
import { loadEnvConfig } from "@next/env";

// Test-side authored records use the same public site configuration as Next.
loadEnvConfig(process.cwd());

const refactorMode = process.env.VIETTELUP_E2E_MODE;
const previewBaseURL = "http://127.0.0.1:3178";
const baseURL =
  process.env.VIETTELUP_E2E_BASE_URL ??
  (refactorMode === "preview" ? previewBaseURL : "http://localhost:3000");

if (refactorMode === "production" && !process.env.VIETTELUP_E2E_BASE_URL) {
  throw new Error(
    "Production E2E requires VIETTELUP_E2E_BASE_URL pointing to a running production server",
  );
}

export default defineConfig({
  testDir: "tests/e2e",
  use: { baseURL, trace: "on-first-retry" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer:
    refactorMode === "production"
      ? undefined
      : refactorMode === "preview"
        ? {
            command: "node scripts/dev.mjs --hostname 127.0.0.1 --port 3178",
            url: previewBaseURL,
            reuseExistingServer: false,
            timeout: 120000,
            env: { SITE_PREVIEW_DRAFTS: "1", VIETTELUP_PREVIEW_ISOLATED: "1" },
          }
        : {
            command: "pnpm dev",
            url: "http://localhost:3000",
            reuseExistingServer: !process.env.CI,
            timeout: 120000,
          },
});
