import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";

// COLLECTION-WARDS-02: public GET only; no cookies, credentials or lead submission.
const sourceUrl = "https://viettelwifii.vn/internet";
const outputPath = "data/content/internet-wards.json";
const auditPath = "reports/source-audit/COLLECTION-WARDS-02-capture.json";
const citySource = await readFile(
  "src/features/collections/collection-signup-data.ts",
  "utf8",
);
const cityMatch = citySource.match(
  /export const signupCities\s*=\s*(\[[\s\S]*?\])\s*as const/,
);
if (!cityMatch) throw new Error("Cannot find exact signupCities array");
const labels = JSON.parse(cityMatch[1]);
if (labels.length !== 34 || new Set(labels).size !== 34)
  throw new Error("Expected 34 unique source city labels");

function validateResponse(value) {
  if (!value || !Array.isArray(value.wards) || value.wards.length === 0)
    throw new Error("Missing or empty wards array");
  for (const ward of value.wards) {
    if (
      typeof ward.name !== "string" ||
      !ward.name.trim() ||
      typeof ward.ward_code !== "string" ||
      !ward.ward_code.trim()
    ) {
      throw new Error("Invalid name/ward_code; raw values must remain strings");
    }
  }
  const codes = value.wards.map((ward) => ward.ward_code);
  if (new Set(codes).size !== codes.length)
    throw new Error("Duplicate ward_code within city");
  return value.wards.length;
}

if (process.argv.includes("--validate")) {
  const data = JSON.parse(await readFile(outputPath, "utf8"));
  if (
    data.sourceUrl !== sourceUrl ||
    !Number.isFinite(Date.parse(data.capturedAt))
  )
    throw new Error("Invalid provenance");
  if (
    Object.keys(data.cities).length !== 34 ||
    labels.some((label) => !Object.hasOwn(data.cities, label))
  )
    throw new Error("City labels do not match source");
  const wards = labels.reduce(
    (sum, label) => sum + validateResponse(data.cities[label]),
    0,
  );
  console.log(
    JSON.stringify({
      status: "PASS",
      cities: 34,
      wards,
      exactCityLabels: true,
    }),
  );
} else {
  const startedAt = new Date().toISOString();
  const deadline = AbortSignal.timeout(180_000);
  const responses = new Map();
  const results = new Map();
  let next = 0;
  let unavailable = false;
  async function worker() {
    while (next < labels.length && !deadline.aborted && !unavailable) {
      const city = labels[next++];
      const url = `https://viettelwifii.vn/api/wards?city=${encodeURIComponent(city)}`;
      const evidence = { city, url, requestedAt: new Date().toISOString() };
      try {
        const response = await fetch(url, {
          method: "GET",
          credentials: "omit",
          signal: AbortSignal.any([deadline, AbortSignal.timeout(30_000)]),
        });
        Object.assign(evidence, {
          status: response.status,
          finalUrl: response.url,
          redirected: response.redirected,
          contentType: response.headers.get("content-type"),
        });
        const raw = await response.text();
        evidence.sha256 = createHash("sha256").update(raw).digest("hex");
        evidence.bytes = Buffer.byteLength(raw);
        if (!response.ok)
          throw new Error(`HTTP ${response.status}: ${raw.slice(0, 200)}`);
        const parsed = JSON.parse(raw);
        evidence.wardCount = validateResponse(parsed);
        evidence.verifiedAt = new Date().toISOString();
        evidence.verification = "verified_public_response";
        responses.set(city, parsed);
        console.log(
          JSON.stringify({
            city,
            status: response.status,
            wards: evidence.wardCount,
          }),
        );
      } catch (error) {
        evidence.verification = "blocked";
        evidence.error = error.message;
        // Stop scheduling if API is unavailable; no automatic retry loop.
        unavailable = true;
        console.error(JSON.stringify({ city, error: evidence.error }));
      }
      results.set(city, evidence);
    }
  }
  await Promise.all(Array.from({ length: 3 }, () => worker()));
  const capturedAt = new Date().toISOString();
  const cities = Object.fromEntries(
    labels
      .filter((label) => responses.has(label))
      .map((label) => [label, responses.get(label)]),
  );
  const records = labels.map(
    (city) =>
      results.get(city) ?? {
        city,
        verification: "not_captured",
        error: deadline.aborted
          ? "Batch deadline"
          : "Stopped after API failure",
      },
  );
  const failures = records.filter(
    (record) => record.verification !== "verified_public_response",
  );
  const audit = {
    task_id: "COLLECTION-WARDS-02",
    status: failures.length ? "blocked" : "ready_for_review",
    sourceUrl,
    cityLabelsSource:
      "src/features/collections/collection-signup-data.ts#signupCities",
    requestEvidence: "public/assets/viettelup/fdf3e1515e8e93f85a80d984.js",
    startedAt,
    capturedAt,
    limits: {
      concurrency: 3,
      requestTimeoutMs: 30000,
      batchTimeoutMs: 180000,
      retries: 0,
    },
    successCount: responses.size,
    failureCount: failures.length,
    wardCount: records.reduce(
      (sum, record) => sum + (record.wardCount ?? 0),
      0,
    ),
    records,
  };
  await mkdir("data/content", { recursive: true });
  await mkdir("reports/source-audit", { recursive: true });
  await writeFile(
    outputPath,
    JSON.stringify({ sourceUrl, capturedAt, cities }, null, 2) + "\n",
    { flag: "wx" },
  );
  await writeFile(auditPath, JSON.stringify(audit, null, 2) + "\n", {
    flag: "wx",
  });
  console.log(
    JSON.stringify({
      successCount: audit.successCount,
      failureCount: audit.failureCount,
      wardCount: audit.wardCount,
      outputPath,
      auditPath,
    }),
  );
  if (failures.length) process.exitCode = 1;
}
