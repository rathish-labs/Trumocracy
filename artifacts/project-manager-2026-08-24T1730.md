# Session Memory — project-manager — 2026-08-24T1730

**Role:** project-manager (Ana-Maria Petrescu)
**Session date:** 2026-08-24
**Task:** Doc 13 v2.7.1 rework — business-mode review Cycle 1 FAIL (90%, 0C/1H/2M/1L)

---

## What was done

Produced `docs/13-project-plan.md` **v2.7.1** (`Status: In Review`, `Last updated: 2026-08-24`), fixing all four issues from the cycle-1 FAIL review report (`artifacts/reviews/13-project-plan-v2.7.0-business-cycle1.md`). Surgical Edit calls only — Write tool not used on the plan document.

### ISS-01 (High) — T-08 label collision — FIXED

Sites swept and corrected:

1. **Header Change block** — `T-08 RESOLVED` replaced with `Gov-ID gate tension RESOLVED [mislabelled T-08 in v2.7.0 — corrected v2.7.1]`.
2. **§3.5 preamble** — "T-06 and T-08 have been confirmed/resolved by the approver" corrected to: T-06 confirmed/resolved; Gov-ID gate tension (mislabelled T-08 in v2.7.0) also RESOLVED; real T-08 (single-vendor concentration vs FR-004 — Doc 03 §10.13.7) ARCHITECT-RESOLVED independently.
3. **§3.5.6 preamble** — "T-08: RESOLVED (Rathish)" replaced with "Gov-ID gate vs BR-003/FR-020 tension: RESOLVED ... (mislabelled T-08 in v2.7.0; corrected v2.7.1). The real T-08 ... is ARCHITECT-RESOLVED independently."
4. **§3.5.6 table** — Row labelled `| **T-08** | Government-ID vs BR-003/FR-020 ...` relabelled to `| **Gov-ID gate vs BR-003/FR-020 (Doc 02 §16.5 row)** |` with inline correction note. New canonical **T-08** row added: FR-004 plurality intent vs single-vendor DEP-13 — ARCHITECT-RESOLVED (Doc 03 §10.13.7; 2026-08-23).
5. **RISK-42 mitigation** — `` `T-08` RESOLVED (BR-003/FR-020 intact) `` annotated as `Gov-ID gate vs BR-003/FR-020 tension RESOLVED (BR-003/FR-020 intact) [v2.7.0 mislabelled this as \`T-08\`; not a T-numbered tension — corrected v2.7.1]`.
6. **§11 v2.7.0 log entry** — Three T-08 RESOLVED mentions in the body annotated with `[mislabelled T-08 in v2.7.0 — corrected v2.7.1]` or `[mislabelled — see v2.7.1 correction]` per house convention (annotate, not silently rewrite). New v2.7.1 row prepended to the log.

### ISS-02 (Medium) — Stale upstream pins — FIXED

Four sites updated:

1. **Header Source block** — `SRS-TRUMOCRACY v2.12.0 — In Review` → `v2.13.0 — Approved`; `SDD-TRUMOCRACY v2.6.0 — In Review` → `v2.6.1 — Approved`.
2. **§2.1** — `SRS v2.12.0 §11 — In Review` → `SRS v2.13.0 §11 — Approved; \`artifacts/reviews/02-requirements-srs-v2.13.0-business-cycle2.md\``.
3. **§3.5.1** — Same pin correction.
4. **§13.1 gate-readiness row** — Doc 02 evidence updated to `v2.13.0: ✅ PASS 99% — business mode, cycle 2 (Approved 2026-08-24; \`artifacts/reviews/02-requirements-srs-v2.13.0-business-cycle2.md\`)`; Doc 03 v2.6.1 PASS 97% added; v2.12.0 "not yet reviewed" gate-blocker claim removed; v2.7.0 FAIL 90% cycle-1 recorded; v2.7.1 In Review.

Historical references that were left intact (genuine citations to version that was current when the text was originally written — e.g. Doc 03 v2.6.0 reference inside RISK-43 body text).

### ISS-03 (Medium) — RISK-44/45/46 misplaced — FIXED

1. **Removed** three RISK rows from before the main `| ID | Risk |` table header.
2. **Removed** the duplicate provenance blockquote that appeared between the misplaced rows and the main table header.
3. **Inserted** RISK-44, RISK-45, RISK-46 rows inside the main register table in numeric position, after RISK-43.
4. **Removed** the `RISK-40…RISK-43` note that appeared after RISK-43 inside the table area.
5. **Extended** the §6 header blockquote to include: `RISK-40…RISK-43` provenance (new at v2.5.0 — government-ID risks); `RISK-44…RISK-46` provenance (new at v2.7.0 — scheduling incoherence, non-counting class, counting-gate distribution; moved into main table v2.7.1 ISS-03 rework); maintenance note for H-register range (both sites must be swept together). This makes the §6 header blockquote the single authoritative provenance registry for all risk groups.

### ISS-04 (Low) — "CON-015 already late" imprecision — FIXED

Arithmetic basis applied:
- **CON-015 S-2b latest start:** S-2b must start by 2026-11-01; legal opinion = 8 weeks = 56 days; 2026-11-01 − 56 days = 2026-09-06 (Saturday) → 2026-09-07 (Monday). As of 2026-08-24: **14 days away — NOT yet late, but window is critically short**. Must start immediately.
- **DEP-11/12/13 latest start:** S-2 no later than 2026-11-14; procurement lead = 8-week upper bound = 56 days; 2026-11-14 − 56 days = 2026-09-18/19 → **2026-09-19**. As of 2026-08-24: **26 days away — NOT yet late**. Initiation must begin immediately.

Sites corrected:
- **§3.3 back-schedule table DEP-11 row** — `Already late?` changed from `YES — NOT STARTED; initiation due immediately` to `No — NOT STARTED; latest start 2026-09-19 (26 days from 2026-08-24); initiation must begin immediately`.
- **§3.3 back-schedule table DEP-12 row** — same correction.
- **§3.3 back-schedule table DEP-13 row** — same correction.
- **§3.3 back-schedule table CON-015 row** — `Item` column corrected to "8-week lead; S-2b ID-integration hard gate"; `Latest start` column corrected from `2027-03-10 for Gate-2` to `2026-09-07 for S-2b constraint (binding)` with arithmetic; `Already late?` changed from `YES — NOT STARTED against S-2 constraint; START IMMEDIATELY` to `No — NOT STARTED; latest start 2026-09-07 for S-2b (14 days from 2026-08-24); must start immediately (Sofia Marchetti)`.
- **§3.5.3 prose** — "CON-015 is therefore already late" → "CON-015 is NOT yet late as of 2026-08-24 (latest start 2026-09-07 for S-2b — 14 days away; ... window is critically short)".
- **§3.5.3 prose** — "all are already late against the optimistic S-2 start" → "DEP-11/12/13 latest start 2026-09-19, 26 days from 2026-08-24; none contracted yet".

---

## IDs touched

- Doc 13 v2.7.1 (owner: Ana-Maria Petrescu)
- RISK-40, RISK-41, RISK-42, RISK-43, RISK-44, RISK-45, RISK-46 (§6 — restructured)
- T-08 (corrected label throughout; real T-08 added to §3.5.6 table)
- CON-015, DEP-11, DEP-12, DEP-13 (§3.3 latest-start arithmetic corrected)
- Doc 02 v2.13.0 pin; Doc 03 v2.6.1 pin

## Decisions made

- Confirmed arithmetic: CON-015 S-2b latest start = 2026-09-07 (2026-11-01 − 56 days); DEP-11/12/13 latest start = 2026-09-19 (2026-11-14 − 56 days). Neither is yet late as of 2026-08-24.
- T-08 in v2.7.0 was a mislabelling: the real T-08 (single-vendor concentration vs FR-004 — ARCHITECT-RESOLVED, Doc 03 §10.13.7) is distinct from the Gov-ID gate vs BR-003/FR-020 policy tension (RESOLVED by Rathish 2026-08-24; not T-numbered). Applied the correction throughout the document per house convention (annotate historical log entries, correct active content).
- RISK-44/45/46 belong inside the main `| ID | Risk |` table, not in a pre-header position. Moved; §6 header blockquote is now the single authoritative provenance registry.

## Open items

- Doc 13 v2.7.1 is `In Review` — business-mode Cycle 2 review required. The reviewer MUST NOT be the project-manager. Assign a neutral role to load the `document-review` skill.
- Docs 01 and 05 still have no passing business-mode review reports. Gate 1 cannot be presented until these are produced.
- RISK-44 remains open (DECISION REQUIRED FROM APPROVER) — Definition-B Gate-2 vs v1-gate scheduling incoherence. No resolution expected until approver rules.
- CON-015 (Sofia Marchetti): latest start 2026-09-07 — must be initiated within 14 days of 2026-08-24.
- DEP-11/12/13: must be initiated within 26 days of 2026-08-24.

## Artifacts produced / updated

- `docs/13-project-plan.md` → v2.7.1 (In Review)
- `artifacts/project-manager-2026-08-24T1730.md` (this file)
- `artifacts/memory-index.json` (updated — see next action)
