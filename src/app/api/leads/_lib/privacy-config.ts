import "server-only";
import { isPrivacyPolicyRouteReady } from "@/lib/site-routes";

const policyVersionPattern = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;

export type LeadPrivacyConfig =
  | { available: true; policyVersion: string }
  | { available: false; policyVersion: null };

/** Fail closed unless all publication and lead-intake gates are satisfied. */
export function getLeadPrivacyConfig(): LeadPrivacyConfig {
  const configuredVersion = process.env.PRIVACY_POLICY_VERSION?.trim() ?? "";
  const policyVersionValid =
    configuredVersion.length > 0 &&
    configuredVersion.toLowerCase() !== "unapproved" &&
    policyVersionPattern.test(configuredVersion);
  const storeConfigured = Boolean(
    process.env.SUPABASE_URL?.trim() && process.env.SUPABASE_SECRET_KEY?.trim(),
  );
  const hasTurnstileSecret = Boolean(process.env.TURNSTILE_SECRET_KEY?.trim());
  const hasTurnstileSiteKey = Boolean(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim(),
  );
  const turnstileConfigured =
    hasTurnstileSecret === hasTurnstileSiteKey &&
    (process.env.NODE_ENV !== "production" || hasTurnstileSecret);
  // Publication is ungated, so lead intake now depends only on the explicit
  // capture switch plus a valid consent version, storage and Turnstile.
  const gatesApproved =
    process.env.LEAD_CAPTURE_ENABLED === "true" &&
    policyVersionValid;

  const available =
    gatesApproved &&
    policyVersionValid &&
    isPrivacyPolicyRouteReady() &&
    storeConfigured &&
    turnstileConfigured;

  return available
    ? { available: true, policyVersion: configuredVersion }
    : { available: false, policyVersion: null };
}
