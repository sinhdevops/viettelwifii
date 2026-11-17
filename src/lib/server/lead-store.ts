import "server-only";
import { formatInstallation, type ValidatedLead } from "@/lib/lead-schema";

export function leadStoreConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY);
}

class SupabaseRequestError extends Error {
  constructor(
    readonly status: number,
    readonly code: string | undefined,
  ) {
    super(`Supabase request failed: ${status}${code ? ` ${code}` : ""}`);
  }
}

async function supabaseRequest(
  path: string,
  method: "POST" | "PATCH",
  body: object,
  prefer: string,
) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key)
    throw new Error("Supabase lead store is missing configuration");
  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: key,
      ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}),
      "Content-Type": "application/json",
      Prefer: prefer,
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
    cache: "no-store",
  });
  if (!response.ok) {
    const error = (await response.json().catch(() => null)) as {
      code?: unknown;
    } | null;
    throw new SupabaseRequestError(
      response.status,
      typeof error?.code === "string" ? error.code : undefined,
    );
  }
  return response;
}

function legacyNote(lead: ValidatedLead) {
  return [formatInstallation(lead.installation), lead.note]
    .filter(Boolean)
    .join("\n")
    .slice(0, 1000);
}

export async function saveLead(
  lead: ValidatedLead,
  productTitle: string,
  consent: { consentAt: string | null; privacyPolicyVersion: string | null },
) {
  const base = {
    name: lead.name,
    phone: lead.phone,
    item_id: lead.itemId,
    item_title: productTitle,
    page_path: lead.pagePath,
    attribution: lead.attribution,
    consent_at: consent.consentAt,
    privacy_policy_version: consent.privacyPolicyVersion,
  };
  const install = lead.installation;
  const insert = (body: object) =>
    supabaseRequest("leads?select=id", "POST", body, "return=representation");

  let response: Response;
  if (!install) {
    response = await insert({ ...base, note: lead.note });
  } else {
    try {
      response = await insert({
        ...base,
        note: lead.note,
        install_city: install.city,
        install_ward_code: install.wardCode,
        install_ward_name: install.wardName,
        install_address: install.address,
        install_region: install.region ?? null,
        displayed_price: install.displayedPrice ?? null,
      });
    } catch (error) {
      // db/003 not applied yet: unknown column (PGRST204) or missing column
      // grant (42501). Keep accepting leads with the address in `note`.
      if (
        !(error instanceof SupabaseRequestError) ||
        !(error.code === "PGRST204" || error.code === "42501")
      )
        throw error;
      response = await insert({ ...base, note: legacyNote(lead) });
    }
  }
  const rows = (await response.json()) as Array<{ id?: string }>;
  const id = rows[0]?.id;
  if (typeof id !== "string") throw new Error("Lead insert returned no ID");
  return id;
}

export type LeadGuardResult =
  | { allowed: true; duplicateId: string | null }
  | { allowed: false; duplicateId: null };

/**
 * Server-side rate limit and duplicate check (db/003 `lead_intake_guard`).
 * Fails open when the RPC is unavailable so a missing migration or a transient
 * Supabase error never blocks real customers; the honeypot/origin checks stay.
 */
export async function guardLeadIntake(input: {
  ipBucket: string;
  phone: string;
  itemId: string;
}): Promise<LeadGuardResult> {
  try {
    const response = await supabaseRequest(
      "rpc/lead_intake_guard",
      "POST",
      {
        p_ip_bucket: input.ipBucket,
        p_phone: input.phone,
        p_item_id: input.itemId,
      },
      "return=representation",
    );
    const result = (await response.json()) as {
      allowed?: unknown;
      duplicate_id?: unknown;
    };
    if (result.allowed === false) return { allowed: false, duplicateId: null };
    return {
      allowed: true,
      duplicateId:
        typeof result.duplicate_id === "string" ? result.duplicate_id : null,
    };
  } catch {
    return { allowed: true, duplicateId: null };
  }
}

export async function setLeadNotificationStatus(
  id: string,
  status: "sent" | "failed",
) {
  await supabaseRequest(
    `leads?id=eq.${encodeURIComponent(id)}`,
    "PATCH",
    {
      telegram_status: status,
      telegram_sent_at: status === "sent" ? new Date().toISOString() : null,
    },
    "return=minimal",
  );
}
