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
