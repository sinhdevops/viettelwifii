import "server-only";

const policyVersionPattern = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;

export type LeadPrivacyConfig = {
  available: true;
  policyVersion: string;
};

/** Forms are always enabled; delivery dependencies are checked when submitting. */
export function getLeadPrivacyConfig(): LeadPrivacyConfig {
  const configuredVersion = process.env.PRIVACY_POLICY_VERSION?.trim() ?? "";
  const validVersion =
    policyVersionPattern.test(configuredVersion) &&
    configuredVersion.toLowerCase() !== "unapproved";

  return {
    available: true,
    // A missing deployment variable must not hide the registration form.
    policyVersion: validVersion ? configuredVersion : "v1",
  };
}
