#!/usr/bin/env node
/**
 * Split data/content/internet-wards.json into one small static file per city
 * under public/data/internet-wards/. The signup dialog fetches only the city
 * the visitor picks instead of bundling ~300KB of wards into client JS.
 *
 * Usage: node scripts/content/split-internet-wards.mjs [--check]
 */
import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const sourcePath = "data/content/internet-wards.json";
const outputDir = "public/data/internet-wards";
const check = process.argv.includes("--check");

/** Keep in sync with wardCitySlug() in src/features/collections/collection-signup-data.ts. */
export function wardCitySlug(city) {
  return city
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const source = JSON.parse(readFileSync(sourcePath, "utf8"));
const expected = new Map(
  Object.entries(source.cities).map(([city, { wards }]) => [
    `${wardCitySlug(city)}.json`,
    `${JSON.stringify(wards.map(({ name, ward_code }) => ({ name, ward_code })))}\n`,
  ]),
);
if (expected.size !== Object.keys(source.cities).length)
  throw new Error("Two cities produce the same ward slug");

if (check) {
  const actual = new Set(readdirSync(outputDir));
  const problems = [];
  for (const [file, body] of expected) {
    if (!actual.has(file)) problems.push(`missing ${file}`);
    else {
      // Compare data, not bytes, so an editor reformatting the file is harmless.
      let actualJson = null;
      try {
        actualJson = JSON.stringify(
          JSON.parse(readFileSync(path.join(outputDir, file), "utf8")),
        );
      } catch {
        // reported as stale below
      }
      if (actualJson !== body.trim()) problems.push(`stale ${file}`);
    }
    actual.delete(file);
  }
  for (const file of actual) problems.push(`unexpected ${file}`);
  if (problems.length) {
    console.error(problems.join("\n"));
    process.exit(1);
  }
  console.log(`internet wards in sync (${expected.size} cities)`);
} else {
  rmSync(outputDir, { recursive: true, force: true });
  mkdirSync(outputDir, { recursive: true });
  for (const [file, body] of expected)
    writeFileSync(path.join(outputDir, file), body);
  console.log(`wrote ${expected.size} city files to ${outputDir}`);
}
