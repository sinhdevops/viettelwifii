// Supabase Edge Function: send Telegram notifications for new leads.
//
// Two triggers, both authenticated with the `x-webhook-secret` header:
//   1. Database Webhook on INSERT into public.leads  -> body { type: "INSERT", record }
//   2. Retry (pg_cron or manual)                     -> body { mode: "retry" }
//
// Required secrets (supabase secrets set ...):
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, LEAD_WEBHOOK_SECRET
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are injected by Supabase.
//
// Deploy: supabase functions deploy lead-telegram --no-verify-jwt
// Then set LEAD_NOTIFY_MODE=supabase in the Next.js app so it stops sending
// its own Telegram message. See db/004_lead_telegram_webhook.sql.

declare const Deno: {
  env: { get(name: string): string | undefined };
  serve(handler: (request: Request) => Response | Promise<Response>): void;
};

type LeadRow = {
  id: string;
  name: string;
  phone: string;
  note?: string | null;
  item_id: string;
  item_title: string;
  attribution?: Record<string, string> | null;
  install_city?: string | null;
  install_ward_name?: string | null;
  install_address?: string | null;
  install_region?: string | null;
  displayed_price?: string | null;
  telegram_status?: string | null;
};

const allowedAttribution = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
]);

const supabaseUrl = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

function message(lead: LeadRow): string {
  const attribution = Object.entries(lead.attribution ?? {})
    .filter(([key]) => allowedAttribution.has(key))
    .map(([key, value]) => `${key}: ${String(value).slice(0, 200)}`)
    .join("\n");
  const installation = lead.install_address
    ? `Địa chỉ lắp đặt: ${lead.install_address}, ${lead.install_ward_name ?? ""}, ${lead.install_city ?? ""}. Khu vực: ${lead.install_region || "—"}. Giá hiển thị: ${lead.displayed_price || "—"}.`
    : "";
  return [
    "📥 ĐĂNG KÝ MỚI",
    `Khách: ${lead.name}`,
    `Điện thoại: ${lead.phone}`,
    `Quan tâm: ${lead.item_title} (${lead.item_id})`,
    installation,
    `Ghi chú: ${lead.note || "—"}`,
    attribution && `Nguồn:\n${attribution}`,
  ]
    .filter(Boolean)
    .join("\n");
}

async function rpc(name: string, body: object): Promise<Response> {
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`rpc ${name} failed: ${response.status}`);
  return response;
}

async function sendTelegram(text: string): Promise<boolean> {
  const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Deno.env.get("TELEGRAM_CHAT_ID");
  if (!token || !chatId) return false;
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!response.ok) return false;
    const result = (await response.json()) as { ok?: boolean };
    return result.ok === true;
  } catch {
    return false;
  }
}

async function notify(lead: LeadRow): Promise<boolean> {
  const sent = await sendTelegram(message(lead));
  await rpc("lead_mark_notification", { p_id: lead.id, p_sent: sent });
  return sent;
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

Deno.serve(async (request) => {
  const secret = Deno.env.get("LEAD_WEBHOOK_SECRET") ?? "";
  const provided = request.headers.get("x-webhook-secret") ?? "";
  if (
    request.method !== "POST" ||
    !secret ||
    !timingSafeEqual(provided, secret)
  )
    return new Response("Forbidden", { status: 403 });

  const body = (await request.json().catch(() => null)) as {
    type?: string;
    table?: string;
    record?: LeadRow;
    mode?: string;
  } | null;

  try {
    if (body?.mode === "retry") {
      const due = (await (
        await rpc("lead_notifications_due", { p_limit: 20 })
      ).json()) as LeadRow[];
      let sent = 0;
      for (const lead of due) if (await notify(lead)) sent++;
      return Response.json({ ok: true, attempted: due.length, sent });
    }
    if (body?.type === "INSERT" && body.table === "leads" && body.record?.id) {
      if (body.record.telegram_status === "sent")
        return Response.json({ ok: true, skipped: true });
      return Response.json({ ok: true, sent: await notify(body.record) });
    }
    return Response.json({ error: "unsupported_payload" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "notify_failed" }, { status: 500 });
  }
});
