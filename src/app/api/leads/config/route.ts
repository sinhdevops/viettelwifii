import { connection } from "next/server";
import { getLeadPrivacyConfig } from "../_lib/privacy-config";

export async function GET() {
  // Read availability at request time, not during Cache Components prerendering.
  await connection();
  const config = getLeadPrivacyConfig();

  return Response.json(
    config.available
      ? { available: true, policyVersion: config.policyVersion }
      : { available: false },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
