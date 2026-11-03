import "server-only";
import type { ValidatedLead } from "@/lib/lead-schema";

export function leadStoreConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY);
}

async function leadsRequest(
  method: "POST" | "PATCH",
  body: object,
  query = "",
) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key)
    throw new Error("Supabase lead store is missing configuration");
  const response = await fetch(
    `${url.replace(/\/$/, "")}/rest/v1/leads${query}`,
    {
      method,
      headers: {
        apikey: key,
        "Content-Type": "application/json",
        Prefer: method === "POST" ? "return=representation" : "return=minimal",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    },
  );
  if (!response.ok)
    throw new Error(`Supabase leads request failed: ${response.status}`);
  return response;
}

export async function saveLead(lead: ValidatedLead, productTitle: string) {
  const response = await leadsRequest("POST", {
    name: lead.name,
    phone: lead.phone,
    note: lead.note,
    item_id: lead.itemId,
    item_title: productTitle,
    page_path: lead.pagePath,
    attribution: lead.attribution,
  });
  const rows = (await response.json()) as Array<{ id?: string }>;
  const id = rows[0]?.id;
  if (typeof id !== "string") throw new Error("Lead insert returned no ID");
  return id;
}

export async function setLeadNotificationStatus(
  id: string,
  status: "sent" | "failed",
) {
  await leadsRequest(
    "PATCH",
    {
      telegram_status: status,
      telegram_sent_at: status === "sent" ? new Date().toISOString() : null,
    },
    `?id=eq.${encodeURIComponent(id)}`,
  );
}
