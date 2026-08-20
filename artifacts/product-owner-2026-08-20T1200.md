# Session Memory — Product Owner (Priya Raghunathan)

```
Role:        product-owner
Timestamp:   2026-08-20T12:00:00Z
Phase:       Define — Doc 02 v2.3.0 amendment (pilot jurisdiction + verification + on-device proof)
Product:     Trumocracy
Session:     product-owner-2026-08-20T1200
```

---

## What was done

Updated `docs/02-requirements-srs.md` from **v2.2.0** to **v2.3.0** (Status: In Review,
Last updated: 2026-08-20), applying three human-approver decisions (Rathish, 2026-08-20)
recorded in `artifacts/status/DECISIONS-2026-08-20-PILOT-VERIFICATION.md`. DOCUMENTS ONLY —
no code, no other documents touched.

Source of authority: `artifacts/status/DECISIONS-2026-08-20-PILOT-VERIFICATION.md`
(Decisions 1, 2, 3, 4 by Rathish; recorded by project-manager Ana-Maria Petrescu).

---

## Edits applied (17 surgical Edit calls — no full-file rewrite)

1. **Header:** Version 2.3.0, Status: In Review, Last updated: 2026-08-20; v2.3.0 change-log
   entry added above the existing v2.2.0 entry.

2. **§2.4:** Named India as the Phase-1 pilot jurisdiction; pointer to §4.40 and
   DECISIONS-2026-08-20-PILOT-VERIFICATION.md; OI-04-PILOT closed here.

3. **FR-003 annotation:** Added v2.3.0 note pointing to FR-126 (on-device processing strengthens
   FR-003's storage prohibition); FR-003 normative text unchanged.

4. **FR-004 OI-20 banner:** Added ⚠ OI-20 tension note (single-rail pilot vs ≥2-attestor
   requirement); FR-004 normative text NOT amended — tension surfaced for approver.

5. **FR-020 annotation:** Decision 2 admission-without-verification extension; open-tier may
   join without verification for non-counted participation; original FR-020 properties retained
   in full for counted membership; normative text NOT deleted.

6. **FR-021 annotation:** Decision 2 clarification that verified personhood gates COUNTING only;
   one-member-one-vote applies in full to all verified (counted) members; no tier multiplier.

7. **New §4.40 — Pilot jurisdiction sequence (FR-121):** Phase-1 India/Aadhaar offline KYC,
   Phase-2 EU/eIDAS 2.0, Phase-3 USA deferred; hard dependency CON-015 (legal opinion).

8. **New §4.41 — Tiered participation (FR-122..125):**
   - FR-122: open tier, no verification required; open tier never counted
   - FR-123: personhood proof required for all counted actions (strength number, binding ballot, candidacy)
   - FR-124: verified-status composition with three-tier privacy model
   - OI-19 banner: invite-gating vs FR-020 admission ban — surfaced, NOT decided
   - FR-125: invite-gating draft for open-tier spam control (pending OI-19 resolution)

9. **New §4.42 — On-device proof, nullifier-only (FR-126..128):**
   - FR-126: raw credential processed on-device and discarded; ZK proof + nullifier only transmitted
   - FR-127: nullifier-collision as the only duplicate-detection mechanism; no identity comparison
   - FR-128: no stored identity in any form; subpoena test acceptance criterion; encrypted-but-decryptable FAILS

10. **§8 Gherkin — eight new blocks (FR-121..128):** Each block includes at least one adversarial
    / negative scenario. Subpoena-test Gherkin in FR-128 block (technically-unable-to-comply assertion).

11. **§9.1 CON-015:** Legal opinion for Phase-1 lead jurisdiction (India) required before
    Phase-1 adapter is marked implementation-ready; Gate-2 line item; owner Sofia Marchetti.

12. **§9.3 TD-12:** Two rejected designs recorded — persistent referral graph (social-graph
    deanonymisation) and encrypted identity registry (subpoena risk re-created); architect to
    record full rationale in new ADR.

13. **§11 MoSCoW counts updated:**
    - FR count: 120 → 128 minted (126 active + 2 superseded); Must 101 → 109
    - CON count: 14 → 15; TDs: 11 → 12
    - Counts line bumped from v2.1.0 to v2.3.0

14. **§12 Traceability — v2.3.0 block appended:**
    - BR-020 → FR-121
    - BR-003, BR-016 → FR-122
    - BR-006, BR-010, BR-016 → FR-123
    - BR-009, BR-017, BR-006 → FR-124
    - BR-003, BR-006 → FR-125 (draft; pending OI-19)
    - BR-009, BR-006 → FR-126
    - BR-006, BR-009 → FR-127
    - BR-009, BR-006 → FR-128
    Session note: DES/US/TC coverage owed at next Design/Backlog catch-up.

15. **§13 OI-04 closure:** OI-04-PILOT resolved (Rathish, 2026-08-20); ✅ banner; full
    Phase-1/2/3 decision text; CON-015 hard dependency noted.

16. **§13 OI-19 and OI-20 added (new rows, pending):**
    - OI-19: Invite-gating vs FR-020 admission ban — PENDING Rathish; FR-125 not
      implementation-ready until resolved; owner Grace Mbeki
    - OI-20: Single-rail pilot vs FR-004 attestor plurality — PENDING Rathish; FR-004
      normative text NOT amended; owner Marcus Adeyemi

17. **§14 Glossary — five new entries:**
    Counted action · mDL · Open tier · Subpoena test · Verified status

---

## IDs minted

| ID      | Description |
|---------|-------------|
| FR-121  | Pilot jurisdiction adapter schedule — Phase-1 India/Aadhaar, Phase-2 EU/eIDAS 2.0, Phase-3 USA deferred; hard dependency CON-015 |
| FR-122  | Open-tier participation without verification required; open tier never counted toward any strength number |
| FR-123  | Personhood proof required for all counted actions (strength number, binding ballot, candidacy) |
| FR-124  | Verified-status composition with three-tier privacy — Supporter verified status invisible per-person; Worker/Candidate verified status visible on participation record |
| FR-125  | Open-tier invite-gating for spam control; referral token verified and discarded, never stored; DRAFT — pending OI-19 |
| FR-126  | On-device credential processing only; raw credential discarded before any network transmission; ZK proof + nullifier transmitted |
| FR-127  | Nullifier-collision-only duplicate detection; no identity-record comparison of any kind |
| FR-128  | No stored identity in any form; acceptance criterion is the subpoena test — platform technically unable to comply with disclosure order |
| CON-015 | Legal opinion for Phase-1 lead jurisdiction (India) required before Phase-1 adapter marked implementation-ready; Gate-2 line item |
| OI-19   | Tension: invite-gating (FR-125 / Decision 2) vs FR-020 admission ban — PENDING Rathish |
| OI-20   | Tension: single-rail Phase-1 pilot (FR-121 / ADR-016) vs FR-004 ≥2 independent attestors — PENDING Rathish |
| TD-12   | Two rejected designs: persistent referral graph (social-graph deanonymisation risk) and encrypted identity registry (subpoena risk re-created) |

## IDs amended (annotations only — normative text unchanged unless noted)

| ID     | Amendment |
|--------|-----------|
| FR-003 | v2.3.0 annotation pointing to FR-126; FR-003 normative text unchanged |
| FR-004 | ⚠ OI-20 banner appended; normative text NOT amended |
| FR-020 | v2.3.0 annotation: admission no longer preconditioned on verification; original properties retained for counted membership |
| FR-021 | v2.3.0 annotation: verified personhood gates counting only; one-member-one-vote applies in full to all verified members |

---

## Decisions made

Applying decisions from `artifacts/status/DECISIONS-2026-08-20-PILOT-VERIFICATION.md`
(Rathish, 2026-08-20):

1. **Decision 1 applied** — India as Phase-1 pilot; Aadhaar offline KYC; EU Phase-2; USA
   Phase-3 deferred; CON-015 minted as Gate-2 legal-opinion line item; OI-04-PILOT closed.

2. **Decision 2 applied** — Verification is a separate optional step; verification gates
   COUNTING, never joining; open tier admitted without verification; tiered participation
   model (FR-122..125) minted.

3. **Decision 3 applied** — On-device proof, nullifier-only, no stored identity; subpoena
   test is the acceptance criterion; FR-126..128 minted; FR-003 annotated.

4. **Decision 4 applied** — TD-12 minted with the two rejected designs and their rationale;
   architect owed a new ADR to record these as considered-and-rejected.

No product-owner discretion exercised beyond the decisions above. No new requirements
created outside the decisions' mandate.

---

## Tensions surfaced — NOT resolved (Rathish to decide)

### OI-19 — Invite-gating vs FR-020 admission ban
Decision 2 permits invite-gating for spam control in the open tier (FR-125). FR-020
prohibits "no-invitation" as a condition on counted membership. It is not settled whether
invite-gating on the open tier (non-counted) is consistent with FR-020's no-invitation
property, or whether FR-020 should be read to apply only to counted membership. FR-125 is
NOT implementation-ready until OI-19 is resolved. Documented in §13.

### OI-20 — Single-rail pilot vs FR-004 attestor plurality
FR-004 requires ≥2 independent attestors. The Phase-1 pilot (Decision 1) names one
national rail (Aadhaar/UIDAI). Multiple licensed KYC operators over Aadhaar share the
same UIDAI namespace and are NOT mutually independent paths in the FR-004 sense. ADR-016
accepts the Phase-1 single-issuer-CLASS restriction, but FR-004 as written cannot be
satisfied by the single-rail Phase-1 configuration. FR-004 normative text has NOT been
amended — the conflict is surfaced for the approver's decision. Documented in §13.

---

## Open items

| OI | Description | Must close before | Owner |
|----|-------------|-------------------|-------|
| OI-19 | Invite-gating vs FR-020 admission ban | Before FR-125 implementation-ready | Grace Mbeki (pending Rathish decision) |
| OI-20 | Single-rail pilot vs FR-004 attestor plurality | Before Gate 2 (Phase-1 launch) | Marcus Adeyemi (pending Rathish decision) |
| CON-015 | Legal opinion — Phase-1 lead jurisdiction (India) | Gate-2 line item — must be obtained before Phase-1 adapter implementation-ready | Sofia Marchetti |
| Architect | New ADR required for TD-12 rejected designs and Decision 2 tiered-verification-gates-counting design | Before Doc 03 v2.3.x | Ravi Deshmukh |
| DES/US/TC | FR-121..128 owe DES, US, and TC coverage (§12 traceability gap) | Design catch-up (next architect session) | Per RACI |

All prior open items (OI-01-NUM, FORK-CRIT, SC-13/SC-14, SC-05) are unchanged from the
last session record.

---

## §11 count changes (v2.2.0 → v2.3.0)

| Metric | v2.2.0 | v2.3.0 |
|--------|--------|--------|
| FR minted | 120 | 128 |
| FR active | 118 | 126 |
| FR superseded | 2 | 2 |
| FR Must | 101 | 109 |
| CON minted | 14 | 15 |
| TDs recorded | 11 | 12 |

---

## Next role

- **Architect** (Ravi Deshmukh): new ADR for TD-12 rejected designs + Decision 2
  tiered-verification-gates-counting design + OI-20 single-rail tension resolution path.
- **Approver** (Rathish): decisions requested on OI-19 and OI-20 before next implementation
  milestone.
- **Neutral reviewer**: business-mode document-review of Doc 02 v2.3.0 (cycle 1 of 5).

Stop-hook note: Pre-existing blocks (RTM gap tokens, Doc 04 review) are inherited from
prior sessions — not introduced by this session. This session touches only Doc 02, the
session note, and memory-index.json as specified.

---

## Addendum — Status flip (review loop PASS)

**Date:** 2026-08-20 (same session, coordinator instruction)

Business-mode cycle-1 review of Doc 02 v2.3.0 completed by technical-writer (neutral reviewer).
Report: `artifacts/reviews/02-requirements-srs-v2.3.0-business-cycle1.md`.
Metadata: Score 97%, Critical 0, High 0, Medium 0, Low 3, Cycle 1 of 5, Verdict: **PASS**.

Per CLAUDE.md review-loop rule, the owning role (product-owner) sets the Status on PASS.

**Edit applied:** `docs/02-requirements-srs.md` header Status line changed from
`In Review` → `Approved (review loop, cycle 1 PASS 97% — artifacts/reviews/02-requirements-srs-v2.3.0-business-cycle1.md)`.

**Three Low issues — non-blocking, deferred to next Doc 02 version:**
- ISS-01 (Low): §2.5 CON range citation reads 14→15 (minor stale wording)
- ISS-02 (Low): §15 stale OI-18 note (OI-18 was resolved in a prior version)
- ISS-03 (Low): FR-020 annotation clarity (phrasing could be tighter)

These are open items for the next Doc 02 amendment. No edits made to Doc 02 for these issues now.
