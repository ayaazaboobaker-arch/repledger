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

-- ---------------------------------------------------------------------------
-- Rep Ledger Pro (the Coach). One row per paying person.
-- The app can only READ its own row. Rows are written by the payment webhook
-- (a Supabase Edge Function using the service-role key), never by the app,
-- so nobody can give themselves Pro by editing their data.
-- ---------------------------------------------------------------------------
create table if not exists public.subscriptions (
  user_id             uuid primary key references auth.users (id) on delete cascade,
  status              text not null default 'inactive',  -- active | trialing | non-renewing | past_due | cancelled | inactive
  plan                text,                               -- e.g. 'pro-monthly', 'pro-yearly'
  provider            text not null default 'paystack',
  customer_code       text,                               -- Paystack customer code
  subscription_code   text,                               -- Paystack subscription code
  current_period_end  timestamptz,
  updated_at          timestamptz not null default now()
);

drop trigger if exists subscriptions_touch on public.subscriptions;
create trigger subscriptions_touch before insert or update on public.subscriptions
  for each row execute function public.touch_updated_at();

alter table public.subscriptions enable row level security;
drop policy if exists "read own subscription" on public.subscriptions;
create policy "read own subscription" on public.subscriptions for select using (auth.uid() = user_id);
-- No insert / update / delete policies on purpose: only the service role (webhook) can write.

-- To give yourself Pro while testing (run in the SQL Editor, swap in your email):
--   insert into public.subscriptions (user_id, status, plan, current_period_end)
--   select id, 'active', 'pro-monthly', now() + interval '30 days' from auth.users where email = 'you@example.com'
--   on conflict (user_id) do update set status = excluded.status, current_period_end = excluded.current_period_end;

-- ---------------------------------------------------------------------------
-- Weigh-in photos. A private bucket: every file lives in a folder named after the
-- person's user id (<user id>/<photo id>.jpg), and the policies below only let a
-- signed-in person read, add, replace and delete files in their own folder.
-- The app shrinks photos before upload (about 100 KB); the 5 MB cap is a safety net.
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('weigh-photos', 'weigh-photos', false, 5242880, array['image/jpeg'])
on conflict (id) do update set public = false, file_size_limit = 5242880, allowed_mime_types = array['image/jpeg'];

drop policy if exists "read own weigh photos"   on storage.objects;
drop policy if exists "add own weigh photos"    on storage.objects;
drop policy if exists "update own weigh photos" on storage.objects;
drop policy if exists "delete own weigh photos" on storage.objects;

create policy "read own weigh photos"   on storage.objects for select to authenticated
  using (bucket_id = 'weigh-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "add own weigh photos"    on storage.objects for insert to authenticated
  with check (bucket_id = 'weigh-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "update own weigh photos" on storage.objects for update to authenticated
  using (bucket_id = 'weigh-photos' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'weigh-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "delete own weigh photos" on storage.objects for delete to authenticated
  using (bucket_id = 'weigh-photos' and (storage.foldername(name))[1] = auth.uid()::text);
