-- AppealAFine: log the verdict each visitor sees in the free assessment.
-- Project: noxczmrnyyosgvvjlqca (shared Pro project; aaf_ prefix keeps this
-- apart from the CarCostCheck, CarWorthIt and other sister-site tables).
--
-- Why: about 745 assessments a month produce 34 sales and nothing recorded
-- whether the rest were told strong, moderate or weak, or which product was
-- put in front of them. The existing `searches` insert (CommandCenter reads
-- it) is untouched; this table sits alongside it.
--
-- Privacy: no personal fields. Issuer and contravention are the same
-- sanitised tokens the searches row carries (no name, email, VRM, PCN
-- number or address). Referrer is the host only, landing path has no query
-- string.
--
-- Access follows the CarWorthIt pattern (carworthit/supabase/migrations/
-- 002_cwi_insert_only_anon.sql): RLS on, a single anon INSERT policy, and
-- check constraints so the public anon key can only add well-formed rows.
-- Reads happen through CommandCenter and the Management API with the
-- service role. Applied via the Management API on 2026-09-11.

create table if not exists aaf_assessments (
  id                  bigserial primary key,
  created_at          timestamptz not null default now(),
  fine_type           text        not null,
  issuer              text,
  contravention       text,
  stage               text        not null default 'new',
  overall_strength    text        not null,
  success_probability int         not null,
  recommended_product text,
  grounds_count       int         not null default 0,
  deadline_days       int,
  device              text,
  landing_path        text,
  referrer_host       text,
  -- true when the reader added circumstances on step 3 and the verdict was
  -- recomputed; the first row for that visit has refined = false.
  refined             boolean     not null default false,

  constraint aaf_assessments_fine_type_chk
    check (fine_type in ('council', 'private', 'bus-lane', 'congestion')),
  constraint aaf_assessments_stage_chk
    check (stage in ('new', 'rejected', 'popla-rejected', 'collector', 'letter-before-claim', 'court-claim')),
  constraint aaf_assessments_strength_chk
    check (overall_strength in ('strong', 'moderate', 'weak')),
  constraint aaf_assessments_probability_chk
    check (success_probability between 0 and 100),
  constraint aaf_assessments_grounds_chk
    check (grounds_count between 0 and 50),
  constraint aaf_assessments_deadline_chk
    check (deadline_days is null or deadline_days between -3650 and 3650),
  constraint aaf_assessments_device_chk
    check (device is null or device in ('mobile', 'tablet', 'desktop', 'unknown')),
  constraint aaf_assessments_issuer_len_chk
    check (issuer is null or length(issuer) <= 80),
  constraint aaf_assessments_contravention_len_chk
    check (contravention is null or length(contravention) <= 80),
  constraint aaf_assessments_product_len_chk
    check (recommended_product is null or length(recommended_product) <= 40),
  constraint aaf_assessments_landing_len_chk
    check (landing_path is null or length(landing_path) <= 200),
  constraint aaf_assessments_referrer_len_chk
    check (referrer_host is null or length(referrer_host) <= 100)
);

create index if not exists aaf_assessments_created_idx on aaf_assessments (created_at desc);
create index if not exists aaf_assessments_stage_idx   on aaf_assessments (stage, overall_strength);

alter table aaf_assessments enable row level security;

-- create policy has no "if not exists", so guard it for re-runs.
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'aaf_assessments'
      and policyname = 'aaf_assessments_anon_insert'
  ) then
    create policy aaf_assessments_anon_insert
      on aaf_assessments for insert to anon with check (true);
  end if;
end $$;

-- Supabase's default privileges hand anon every table privilege and rely on
-- RLS to gate them. With no SELECT, UPDATE or DELETE policy anon already gets
-- nothing back, but revoking the privileges as well means a future policy
-- mistake cannot expose the table.
revoke select, update, delete, truncate, references, trigger on aaf_assessments from anon;
grant insert on aaf_assessments to anon;
grant usage, select on sequence aaf_assessments_id_seq to anon;
