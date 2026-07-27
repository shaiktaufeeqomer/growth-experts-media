/*
# Create waitlist and contact submissions tables

This migration creates two public-facing form tables for the Growth Experts Media
marketing site. The site has no sign-in screen, so these are single-tenant tables
that accept submissions from anonymous visitors using the anon Supabase key.

## 1. New Tables

### waitlist
Stores email signups for the "Coming Soon: AI Growth Agents" waitlist.
- `id` (uuid, primary key)
- `email` (text, unique, not null) — the visitor's email address
- `created_at` (timestamptz, default now()) — signup timestamp

### contact_submissions
Stores submissions from the contact / strategy call request form.
- `id` (uuid, primary key)
- `name` (text, not null) — visitor's full name
- `email` (text, not null) — visitor's email
- `company` (text, nullable) — optional company name
- `message` (text, not null) — the message / project details
- `created_at` (timestamptz, default now()) — submission timestamp

## 2. Security

Both tables have Row Level Security enabled. Because the site has no sign-in
screen, all policies are scoped to `TO anon, authenticated` so the anon-key
frontend can insert new rows. Only INSERT is allowed publicly — visitors can
submit data but cannot read, modify, or delete submissions (which protects
other people's email addresses and messages).

- `waitlist`: anon/authenticated INSERT only (public cannot read the list).
- `contact_submissions`: anon/authenticated INSERT only.

## 3. Notes
- No `user_id` columns and no `auth.uid()` checks — these are public forms.
- Unique constraint on `waitlist.email` prevents duplicate waitlist signups.
- No SELECT/UPDATE/DELETE policies for anon — submissions are write-only from
  the public site. Internal access happens via the Supabase dashboard / service
  role key, which bypasses RLS.
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_waitlist" ON waitlist;
CREATE POLICY "anon_insert_waitlist"
ON waitlist FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
