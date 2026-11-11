CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  note text NOT NULL DEFAULT '',
  item_id text NOT NULL,
  item_title text NOT NULL,
  page_path text NOT NULL,
  attribution jsonb NOT NULL DEFAULT '{}'::jsonb,
  telegram_status text NOT NULL DEFAULT 'pending'
    CHECK (telegram_status IN ('pending', 'sent', 'failed')),
  telegram_sent_at timestamptz
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_telegram_status_idx
  ON leads (telegram_status) WHERE telegram_status <> 'sent';

-- Apply after db/001_create_leads.sql in the Supabase SQL Editor.
-- Existing rows remain NULL: this migration does not invent historical consent.

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS consent_at timestamptz,
  ADD COLUMN IF NOT EXISTS privacy_policy_version text;

DO $migration$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'leads_privacy_consent_pair_check'
      AND conrelid = 'public.leads'::regclass
  ) THEN
    ALTER TABLE public.leads
      ADD CONSTRAINT leads_privacy_consent_pair_check
      CHECK (
        (consent_at IS NULL AND privacy_policy_version IS NULL)
        OR (
          consent_at IS NOT NULL
          AND privacy_policy_version IS NOT NULL
          AND char_length(btrim(privacy_policy_version)) BETWEEN 1 AND 64
          AND lower(btrim(privacy_policy_version)) <> 'unapproved'
        )
      ) NOT VALID;
  END IF;
END
$migration$;

ALTER TABLE public.leads
  VALIDATE CONSTRAINT leads_privacy_consent_pair_check;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- No browser/client role may read or mutate PII directly.
REVOKE ALL PRIVILEGES ON TABLE public.leads FROM anon, authenticated;

-- Restrict the server-side PostgREST role to the current store contract: it can
-- return/filter by ID, insert only submitted fields, and update notification status.
-- Keep the service key server-side.
REVOKE ALL PRIVILEGES ON TABLE public.leads FROM service_role;
GRANT USAGE ON SCHEMA public TO service_role;
GRANT SELECT (id) ON TABLE public.leads TO service_role;
GRANT INSERT (
  name,
  phone,
  note,
  item_id,
  item_title,
  page_path,
  attribution,
  consent_at,
  privacy_policy_version
) ON TABLE public.leads TO service_role;
GRANT UPDATE (telegram_status, telegram_sent_at)
  ON TABLE public.leads TO service_role;

DO $migration$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'leads'
      AND policyname = 'leads_service_role_select'
  ) THEN
    CREATE POLICY leads_service_role_select
      ON public.leads FOR SELECT TO service_role
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'leads'
      AND policyname = 'leads_service_role_insert'
  ) THEN
    CREATE POLICY leads_service_role_insert
      ON public.leads FOR INSERT TO service_role
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'leads'
      AND policyname = 'leads_service_role_update'
  ) THEN
    CREATE POLICY leads_service_role_update
      ON public.leads FOR UPDATE TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END
$migration$;
