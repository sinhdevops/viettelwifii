const publicationFlags = [
  "CONTENT_RIGHTS_CLEARED",
  "PRODUCT_FACTS_VERIFIED",
  "SITE_IDENTITY_VERIFIED",
  "PRIVACY_POLICY_APPROVED",
];

const isNonLocalHttpsOrigin = (rawUrl) => {
  try {
    const url = new URL(rawUrl ?? "");
    return (
      url.protocol === "https:" &&
      url.pathname === "/" &&
      !url.search &&
      !url.hash &&
      !url.username &&
      !url.password &&
      url.hostname !== "localhost" &&
      !url.hostname.endsWith(".localhost") &&
      !url.hostname.endsWith(".local") &&
      url.hostname !== "127.0.0.1" &&
      url.hostname !== "0.0.0.0" &&
      url.hostname !== "[::1]"
    );
  } catch {
    return false;
  }
};

export function getPublicationReadinessFailures(env = process.env) {
  const failures = [];
  const requireValue = (name, message = `${name} is required`) => {
    if (!env[name]?.trim()) failures.push(message);
  };

  for (const flag of publicationFlags) {
    if (env[flag] !== "true") failures.push(`${flag} must be set to true`);
  }
  if (!isNonLocalHttpsOrigin(env.NEXT_PUBLIC_SITE_URL)) {
    failures.push("NEXT_PUBLIC_SITE_URL must be a public https origin");
  }

  for (const name of [
    "SITE_LEGAL_NAME",
    "SITE_ADDRESS",
    "SITE_CONTACT_EMAIL",
    "PRIVACY_POLICY_VERSION",
    "NEXT_PUBLIC_PHONE_NUMBER",
  ]) {
    requireValue(name);
  }
  const privacyPolicyVersion = env.PRIVACY_POLICY_VERSION?.trim() ?? "";
  if (
    !/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(privacyPolicyVersion) ||
    privacyPolicyVersion.toLowerCase() === "unapproved"
  ) {
    failures.push("PRIVACY_POLICY_VERSION must identify an approved policy");
  }
  if (
    env.SITE_CONTACT_EMAIL &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(env.SITE_CONTACT_EMAIL)
  ) {
    failures.push("SITE_CONTACT_EMAIL must be a valid public contact address");
  }

  if (env.ADS_LAUNCH === "true") {
    if (env.LEAD_CAPTURE_ENABLED !== "true") {
      failures.push("ADS_LAUNCH=true requires LEAD_CAPTURE_ENABLED=true");
    }
    requireValue("NEXT_PUBLIC_GTM_ID", "ADS_LAUNCH=true requires NEXT_PUBLIC_GTM_ID");
    requireValue("GOOGLE_ADS_CONVERSION_ID");
    requireValue("SITE_TAX_ID", "ADS_LAUNCH=true requires a verified business tax ID");
    requireValue("SUPABASE_URL");
    requireValue("SUPABASE_SECRET_KEY");
    requireValue("NEXT_PUBLIC_TURNSTILE_SITE_KEY");
    requireValue("TURNSTILE_SECRET_KEY");
    if (
      env.NEXT_PUBLIC_GTM_ID &&
      !/^GTM-[A-Z0-9]+$/.test(env.NEXT_PUBLIC_GTM_ID)
    ) {
      failures.push("NEXT_PUBLIC_GTM_ID must use the GTM-XXXXXXXX format");
    }
  }

  return failures;
}
