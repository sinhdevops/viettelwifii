-- OPTIONAL. Moves Telegram delivery from the Next.js API into Supabase.
-- Apply only after:
--   1. db/003_lead_installation_guard_notify.sql
--   2. Deploying supabase/functions/lead-telegram:
--        supabase secrets set TELEGRAM_BOT_TOKEN=... TELEGRAM_CHAT_ID=... LEAD_WEBHOOK_SECRET=<random 32+ chars>
--        supabase functions deploy lead-telegram --no-verify-jwt
--   3. Replacing the two placeholders below:
--        <PROJECT_REF>          your project ref (https://<PROJECT_REF>.supabase.co)
--        <LEAD_WEBHOOK_SECRET>  the same value set as the function secret
--   4. Setting LEAD_NOTIFY_MODE=supabase in the Next.js deployment, so the API
--      stops sending its own message (otherwise each lead is announced twice).
--
-- Requires the pg_net and pg_cron extensions (Database -> Extensions).

CREATE EXTENSION IF NOT EXISTS pg_net;
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Store the secret in Vault rather than in the trigger/cron definitions.
DO $vault$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM vault.secrets WHERE name = 'lead_webhook_secret') THEN
    PERFORM vault.create_secret('<LEAD_WEBHOOK_SECRET>', 'lead_webhook_secret');
  END IF;
END
$vault$;

CREATE OR REPLACE FUNCTION public._lead_telegram_call(p_body jsonb)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $fn$
DECLARE
  v_secret text;
BEGIN
  SELECT decrypted_secret INTO v_secret
  FROM vault.decrypted_secrets WHERE name = 'lead_webhook_secret';
  RETURN net.http_post(
    url := 'https://<PROJECT_REF>.supabase.co/functions/v1/lead-telegram',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', v_secret
    ),
    body := p_body,
    timeout_milliseconds := 10000
  );
END
$fn$;
REVOKE ALL ON FUNCTION public._lead_telegram_call(jsonb)
  FROM PUBLIC, anon, authenticated, service_role;

-- Webhook: same payload shape as Supabase "Database Webhooks".
CREATE OR REPLACE FUNCTION public._lead_after_insert_notify()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $fn$
BEGIN
  PERFORM public._lead_telegram_call(jsonb_build_object(
    'type', 'INSERT',
    'table', 'leads',
    'schema', 'public',
    'record', to_jsonb(NEW)
  ));
  RETURN NEW;
END
$fn$;

DROP TRIGGER IF EXISTS leads_notify_telegram ON public.leads;
CREATE TRIGGER leads_notify_telegram
  AFTER INSERT ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public._lead_after_insert_notify();

-- Retry failed / stuck notifications every 5 minutes (max 5 attempts per lead).
SELECT cron.unschedule(jobid) FROM cron.job WHERE jobname = 'lead-telegram-retry';
SELECT cron.schedule(
  'lead-telegram-retry',
  '*/5 * * * *',
  $cron$ SELECT public._lead_telegram_call('{"mode":"retry"}'::jsonb); $cron$
);
