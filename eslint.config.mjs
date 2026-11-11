import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  prettier,
  {
    files: ["**/*.cjs"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  globalIgnores([
    ".next/**",
    ".next-preview/**",
    "out/**",
    "coverage/**",
    "node_modules/**",
    ".pnpm-store/**",
    "outputs/**",
    "work/**",
    "reference-clone/**",
    "reports/**",
    "public/**",
    "playwright-report/**",
    "test-results/**",
    ".playwright-mcp/**",
    "next-env.d.ts",
  ]),
]);
