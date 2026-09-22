-- Rep Ledger: run this once in Supabase → SQL Editor → New query → Run.
-- One row per person. Their workouts, food, weigh-ins and settings live in `data`.

create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  name        text,
  goal        text,
  pin_hash    text,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

-- The server sets the time, so phones and laptops with different clocks agree.
create or replace function public.touch_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before insert or update on public.profiles
  for each row execute function public.touch_updated_at();

-- Row Level Security: each signed-in person can only see and change their own row.
alter table public.profiles enable row level security;

drop policy if exists "read own profile"   on public.profiles;
drop policy if exists "insert own profile" on public.profiles;
drop policy if exists "update own profile" on public.profiles;
drop policy if exists "delete own profile" on public.profiles;

create policy "read own profile"   on public.profiles for select using (auth.uid() = id);
create policy "insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "update own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "delete own profile" on public.profiles for delete using (auth.uid() = id);
