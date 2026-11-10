import { loadEnvConfig } from "@next/env";
import { getPublicationReadinessFailures } from "./lib/publication-readiness.mjs";

loadEnvConfig(process.cwd());

if (process.env.SITE_LIVE !== "true") {
  console.info(
    "SITE_LIVE is not true: this build remains noindex with an empty sitemap.",
  );
  process.exit(0);
}

const failures = getPublicationReadinessFailures();
if (failures.length > 0) {
  console.error("Production publication blocked:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.info("Publication prerequisites are present; page-level status/route gates still apply.");
