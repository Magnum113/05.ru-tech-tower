-- Enable extensions if needed
create extension if not exists "pgcrypto";

-- Leaderboard entries
create table if not exists public.leaderboard_entries (
  id uuid primary key default gen_random_uuid(),
  nickname text not null,
  score integer not null check (score > 0),
  created_at timestamptz not null default now()
);

-- Normalize historical data before adding uniqueness constraints:
-- keep one row per nickname with max score and earliest created_at tie-breaker.
with ranked as (
  select
    id,
    row_number() over (
      partition by nickname
      order by score desc, created_at asc
    ) as rn
  from public.leaderboard_entries
)
delete from public.leaderboard_entries target
using ranked
where target.id = ranked.id
  and ranked.rn > 1;

create unique index if not exists leaderboard_entries_nickname_uidx
  on public.leaderboard_entries (nickname);

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

-- Allow anonymous clients to raise their best score by nickname.
drop policy if exists "leaderboard_update" on public.leaderboard_entries;
create policy "leaderboard_update" on public.leaderboard_entries
  for update
  using (true)
  with check (score > 0);
