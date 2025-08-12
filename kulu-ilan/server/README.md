# Kulu İlan API (Render)

Env vars:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` or `SUPABASE_SERVICE_ROLE_KEY`

Start command: `node src/index.js`

## Supabase SQL

```sql
-- users table
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  is_approved boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists idx_users_phone on public.users(phone);

-- listings table
create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  area integer,
  price numeric not null,
  district text not null,
  description text,
  cover_url text,
  type text check (type in ('sale','rent')) not null,
  is_approved boolean not null default false,
  owner_phone text,
  created_at timestamptz not null default now()
);
create index if not exists idx_listings_approved on public.listings(is_approved, created_at desc);
```