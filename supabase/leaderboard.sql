-- Enable extensions if needed
create extension if not exists "pgcrypto";

-- Leaderboard entries
create table if not exists public.leaderboard_entries (
  id uuid primary key default gen_random_uuid(),
  nickname text not null,
  score integer not null check (score > 0),
  created_at timestamptz not null default now()
);

create index if not exists leaderboard_entries_score_idx
  on public.leaderboard_entries (score desc, created_at asc);

alter table public.leaderboard_entries enable row level security;

-- Public read access
create policy if not exists "leaderboard_read" on public.leaderboard_entries
  for select
  using (true);

-- Allow anonymous inserts of positive scores
create policy if not exists "leaderboard_insert" on public.leaderboard_entries
  for insert
  with check (score > 0);
