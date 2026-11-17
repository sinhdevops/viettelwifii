import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { expect, it } from "vitest";
import {
  signupCities,
  wardCitySlug,
} from "../src/features/collections/collection-signup-data";

it("keeps public per-city ward files in sync with the captured source", () => {
  expect(() =>
    execFileSync(
      process.execPath,
      ["scripts/content/split-internet-wards.mjs", "--check"],
      { stdio: "pipe" },
    ),
  ).not.toThrow();
});

it("has a non-empty ward file for every signup city", () => {
  const source = JSON.parse(
    readFileSync("data/content/internet-wards.json", "utf8"),
  ) as { cities: Record<string, { wards: unknown[] }> };
  for (const city of signupCities) {
    const file = `public/data/internet-wards/${wardCitySlug(city)}.json`;
    expect(existsSync(file), city).toBe(true);
    const wards = JSON.parse(readFileSync(file, "utf8")) as unknown[];
    expect(wards.length, city).toBeGreaterThan(0);
    expect(wards.length, city).toBe(source.cities[city]?.wards.length);
  }
});

it("does not bundle the full ward dataset into client code", () => {
  const dialogSources = [
    "src/features/collections/collection-signup-data.ts",
    "src/features/collections/collection-signup-dialog.tsx",
  ].map((file) => readFileSync(file, "utf8"));
  for (const source of dialogSources)
    expect(source).not.toMatch(/import[^;]*internet-wards\.json/);
});
