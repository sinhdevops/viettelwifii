import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    env: {
      NEXT_PUBLIC_SITE_URL: "https://fixture.example",
      NEXT_PUBLIC_PHONE_NUMBER: "0900000000",
    },
    include: ["tests/**/*.test.ts", "src/features/seo/**/*.test.ts"],
    exclude: ["tests/e2e/**", "node_modules/**"],
  },
});
