-- Apply after db/001_create_leads.sql and db/002_lead_privacy_rls.sql
-- in the Supabase SQL Editor. Safe to re-run.
--
-- 1. Structured installation address columns (Internet collection form).
-- 2. Server-side rate limiting + duplicate guard (lead_intake_guard RPC).
-- 3. Notification bookkeeping for the lead-telegram Edge Function
--    (lead_notifications_due / lead_mark_notification RPCs).
--
-- The Next.js app keeps working before this file is applied: it falls back to
-- the legacy insert and skips the guard when these objects are missing.

-- 1. Installation address --------------------------------------------------
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS install_city text,
  ADD COLUMN IF NOT EXISTS install_ward_code text,
  ADD COLUMN IF NOT EXISTS install_ward_name text,
  ADD COLUMN IF NOT EXISTS install_address text,
  ADD COLUMN IF NOT EXISTS install_region text,
  ADD COLUMN IF NOT EXISTS displayed_price text,
  ADD COLUMN IF NOT EXISTS telegram_attempts integer NOT NULL DEFAULT 0;

DO $migration$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'leads_install_lengths_check'
      AND conrelid = 'public.leads'::regclass
  ) THEN
    ALTER TABLE public.leads
      ADD CONSTRAINT leads_install_lengths_check CHECK (
        coalesce(char_length(install_city), 0) <= 80
        AND coalesce(char_length(install_ward_code), 0) <= 10
        AND coalesce(char_length(install_ward_name), 0) <= 120
        AND coalesce(char_length(install_address), 0) <= 300
        AND coalesce(char_length(install_region), 0) <= 40
        AND coalesce(char_length(displayed_price), 0) <= 80
      );
  END IF;
END
$migration$;

GRANT INSERT (
  install_city,
  install_ward_code,
  install_ward_name,
  install_address,
  install_region,
  displayed_price
) ON TABLE public.leads TO service_role;

CREATE INDEX IF NOT EXISTS leads_phone_item_recent_idx
  ON public.leads (phone, item_id, created_at DESC);

-- 2. Rate limit + duplicate guard -------------------------------------------
CREATE TABLE IF NOT EXISTS public.lead_rate_limits (
  bucket text NOT NULL,
  window_start timestamptz NOT NULL,
  hits integer NOT NULL DEFAULT 0,
  PRIMARY KEY (bucket, window_start)
);
ALTER TABLE public.lead_rate_limits ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public.lead_rate_limits
  FROM anon, authenticated, service_role;

CREATE OR REPLACE FUNCTION public._lead_rate_limit_hit(
  p_bucket text,
  p_window_seconds integer,
  p_max_hits integer
) RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $fn$
DECLARE
  v_window timestamptz :=
    to_timestamp(floor(extract(epoch FROM now()) / p_window_seconds) * p_window_seconds);
  v_hits integer;
BEGIN
  INSERT INTO public.lead_rate_limits AS l (bucket, window_start, hits)
  VALUES (p_bucket, v_window, 1)
  ON CONFLICT (bucket, window_start)
  DO UPDATE SET hits = l.hits + 1
  RETURNING l.hits INTO v_hits;
  RETURN v_hits <= p_max_hits;
END
$fn$;
REVOKE ALL ON FUNCTION public._lead_rate_limit_hit(text, integer, integer)
  FROM PUBLIC, anon, authenticated, service_role;

/**
 * Called by the Next.js lead API before inserting.
 * p_ip_bucket: HMAC of the client IP computed server-side (never the raw IP).
 * Returns { allowed: boolean, duplicate_id: uuid | null }.
 */
CREATE OR REPLACE FUNCTION public.lead_intake_guard(
  p_ip_bucket text,
  p_phone text,
  p_item_id text
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $fn$
DECLARE
  v_digits text := regexp_replace(coalesce(p_phone, ''), '\D', '', 'g');
  v_duplicate uuid;
  v_allowed boolean := true;
BEGIN
  IF p_ip_bucket IS NULL OR char_length(p_ip_bucket) NOT BETWEEN 8 AND 128
     OR char_length(v_digits) NOT BETWEEN 9 AND 15
     OR p_item_id IS NULL OR char_length(p_item_id) > 300 THEN
    RAISE EXCEPTION 'invalid lead guard input' USING ERRCODE = '22023';
  END IF;

  -- Same phone + product within 30 minutes: treat as an already received lead.
  SELECT id INTO v_duplicate
  FROM public.leads
  WHERE regexp_replace(phone, '\D', '', 'g') = v_digits
    AND item_id = p_item_id
    AND created_at > now() - interval '30 minutes'
  ORDER BY created_at DESC
  LIMIT 1;
  IF v_duplicate IS NOT NULL THEN
    RETURN jsonb_build_object('allowed', true, 'duplicate_id', v_duplicate);
  END IF;

  -- 5 submissions / 10 minutes per IP, 3 / hour per phone number.
  v_allowed := public._lead_rate_limit_hit('ip:' || p_ip_bucket, 600, 5);
  v_allowed := public._lead_rate_limit_hit('phone:' || md5(v_digits), 3600, 3)
    AND v_allowed;

  -- Opportunistic cleanup keeps the table tiny without pg_cron.
  IF random() < 0.05 THEN
    DELETE FROM public.lead_rate_limits WHERE window_start < now() - interval '1 day';
  END IF;

  RETURN jsonb_build_object('allowed', v_allowed, 'duplicate_id', NULL);
END
$fn$;
REVOKE ALL ON FUNCTION public.lead_intake_guard(text, text, text)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.lead_intake_guard(text, text, text)
  TO service_role;

-- 3. Notification bookkeeping -----------------------------------------------
/** Leads whose Telegram notification is still owed (for retries). */
CREATE OR REPLACE FUNCTION public.lead_notifications_due(p_limit integer DEFAULT 20)
RETURNS TABLE (
  id uuid,
  created_at timestamptz,
  name text,
  phone text,
  note text,
  item_id text,
  item_title text,
  page_path text,
  attribution jsonb,
  install_city text,
  install_ward_name text,
  install_address text,
  install_region text,
  displayed_price text,
  telegram_attempts integer
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $fn$
  SELECT l.id, l.created_at, l.name, l.phone, l.note, l.item_id, l.item_title,
         l.page_path, l.attribution, l.install_city, l.install_ward_name,
         l.install_address, l.install_region, l.displayed_price,
         l.telegram_attempts
  FROM public.leads l
  WHERE l.telegram_status <> 'sent'
    AND l.telegram_attempts < 5
    AND l.created_at > now() - interval '2 days'
    -- give the first (webhook / in-app) attempt time to finish
    AND (l.telegram_status = 'failed' OR l.created_at < now() - interval '2 minutes')
  ORDER BY l.created_at
  LIMIT least(greatest(coalesce(p_limit, 20), 1), 100);
$fn$;
REVOKE ALL ON FUNCTION public.lead_notifications_due(integer)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.lead_notifications_due(integer) TO service_role;

/** Record one delivery attempt. Never downgrades a lead already marked sent. */
CREATE OR REPLACE FUNCTION public.lead_mark_notification(p_id uuid, p_sent boolean)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $fn$
  UPDATE public.leads
  SET telegram_status = CASE WHEN p_sent THEN 'sent' ELSE 'failed' END,
      telegram_sent_at = CASE WHEN p_sent THEN now() ELSE NULL END,
      telegram_attempts = telegram_attempts + 1
  WHERE id = p_id AND telegram_status <> 'sent';
$fn$;
REVOKE ALL ON FUNCTION public.lead_mark_notification(uuid, boolean)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.lead_mark_notification(uuid, boolean)
  TO service_role;

NOTIFY pgrst, 'reload schema';
