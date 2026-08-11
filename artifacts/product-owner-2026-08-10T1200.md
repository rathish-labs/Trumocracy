# Session Memory — Product Owner (Priya Raghunathan)

```
Role:      product-owner
Timestamp: 2026-08-10T12:00:00Z
Phase:     Define — CR-v1.1.0 cycle-1 review rework
Product:   Trumocracy
```

## What was done

Reworked Doc 02 (SRS-TRUMOCRACY) from v1.1.0 → v1.1.1 and Doc 05 (BKLG-TRUMOCRACY) from v1.1.0 → v1.1.1, addressing all 13 issues (4H/5M/4L) from the cycle-1 business review report (artifacts/reviews/02-requirements-srs-v1.1.0-business-cycle1.md) and all 11 issues (1H/5M/5L) from (artifacts/reviews/05-product-backlog-v1.1.0-business-cycle1.md). Both documents are now Status: In Review at v1.1.1.

## Per-issue change log

### Doc 02 — 02-requirements-srs-v1.1.0-business-cycle1.md

**ISS-01 (High — §8 preamble false claim + 15 missing Must-NFR Gherkin):** Replaced the false "Every Must FR and every Must NFR below has at least one... scenario" preamble with an honest coverage statement naming all 22 Must NFRs covered. Added 15 new Gherkin blocks to the second code block in §8: NFR-001, NFR-003, NFR-004, NFR-006, NFR-007, NFR-009, NFR-010, NFR-012, NFR-013, NFR-015, NFR-016, NFR-021, NFR-022, NFR-023, NFR-024. Combined with the 7 pre-existing blocks (NFR-002, NFR-005, NFR-011, NFR-014, NFR-017, NFR-020, NFR-025), all 22 Must NFRs now have Gherkin.

**ISS-02 (High — NFR-010 absolute claim vs §7 two restricted stores):** Re-scoped NFR-010 to exclude the two enumerated restricted operational stores (Recovery requests & notification channel — 90 days; Support & appeal records — 24 months). Updated §6.1 GDPR row to be honest: erasure applies to the two restricted stores via retention windows, and "holding nothing" applies to the public record only.

**ISS-03 (High — unfalsifiable "better than chance"/"computationally bounded adversary"):** 
- NFR-001: Restated with adversary capability set (all operator logs, attestor hashes, public record, 1s network timing), N ≥ 10,000 trial count, provisional ε = 0.02, 95% confidence. Collusion bound and final ε remain OI-10 (Design phase).
- NFR-003: Replaced "computationally bounded" with PPT adversary and security parameter λ ≥ 128 bits.
- FR-002 Gherkin: Replaced "better than chance" with defined adversary game (same capability set as NFR-001, N ≥ 10,000, ε ≤ provisional 0.02, 95% confidence).
- FR-030 Gherkin: Same treatment.
- OI-10 in §13 escalated to Gate 1 re-affirmation with provisional ε = 0.02 confirmed for test-design phase.

**ISS-04 (High — BR-006/BR-011 unmeasurable success measures):**
- BR-006: Added out-of-band audited sampling design (≥ 5,000 consented credentials per region per quarterly audit, 95% confidence interval, audit body confirmed before Gate 2).
- BR-011: Replaced "≥ 95% of reported coercion cases" (unobservable by design) with (a) adversarial audit (PPT, λ ≥ 128, N ≥ 10,000 ballot observations, 95% confidence) finds no receipt construction; (b) 0 externally detectable override events; (c) coercion rate published as upper bound from incident reports, not as operational observation rate (TD-06/FR-032 noted explicitly).
- BR-005: Added clarifying note that the Must-level guarantee is hand-reproducibility from raw public data (FR-033/FR-054), not the convenience tool (FR-055 = Should). This is the honest narrowing that reconciles ISS-09 without weakening BR-005's core claim.

**ISS-05 (Medium — OI-08 constants presented as specifications in §8 Gherkin):** Added `(example — non-normative; normative value set at OI-08 closure)` markers to FR-025 (quorum/supermajority values), FR-026 (14-day timelock), FR-043 (55%/60%/62% recall bars). Rewrote those Gherkin scenarios in terms of "the published value" rather than embedding specific numbers as normative.

**ISS-06 (Medium — NFR-024 harassment metric undefined + adjudication conflict with FR-056):** Defined the harassment-rate metric explicitly in NFR-024: repeat-initiation count (recall or nomination) against a single office-holder from distinct member nullifiers within any rolling 90-day window, normalised per 1,000 active members, computed mechanically. Stated explicitly that no Trumocracy employee exercises discretion over political speech; FR-056/FR-057 jurisdiction-scoped display filtering is the only available lever; harassment assessment is quantitative, not discretionary.

**ISS-07 (Medium — "major election" undefined):** Added "Major election" to §14 Glossary defining it as elections filling an office or position (including by-elections, post-recall elections, end-of-term elections); excluding non-office administrative votes. Three-debate requirement (FR-066) applies to every major election; scope does not extend to sub-party administrative resolutions that do not fill a defined office.

**ISS-08 (Medium — §11 Won't vs Doc 01 §D Could for three features):** Moved "party dormancy/deactivation lifecycle", "treasury splitting on fork", and "personal blocklists" from the Won't row to a new "Could (non-FR features, v2 candidates)" row in §11, aligned with Doc 01 §D (which classifies them as Could/deferred-to-v2).

**ISS-09 (Medium — FR-055/NFR-018 Should vs BR-005 Must promise):** Reconciled by honest narrowing of BR-005: the Must guarantee is that raw data is published and any third party can reproduce the result by hand (FR-033, FR-054). The open-source verifier tool (FR-055, Should) makes this convenient but is not the Must deliverable. NFR-018 remains Should; FR-055 remains Should. No priority change made; the distinction is now stated explicitly in BR-005.

**ISS-10 (Low — Change-9 trace absent from §12/§13):** Added Change-9 coverage note to §12: "CR-v1.1.0 Change 9 ('party operation / no boss roles') produces no new requirement; covered by FR-020, FR-021, FR-024, FR-056, BR-003." Referenced artifacts/product-owner-2026-08-09T2200.md for detail.

**ISS-11 (Low — RFC 2119 negation errors in 5 NFRs):** Fixed NFR-004, NFR-007, NFR-014, NFR-024, NFR-025. Pattern changed from "No X MUST Y" to "the system MUST ensure that no X can Y" or "MUST NOT be able to Y" as appropriate.

**ISS-12 (Low — Approvers line names teams):** Replaced "Gate 1 — Product, Engineering, Design, QA" with individual names: "Priya Raghunathan (Product Owner), Ana-Maria Petrescu (Project Manager), Rathish (Human Approver — re-affirmation required at this version)".

**ISS-13 (Low — OI-12 status stale in §13):** Updated OI-12 entry in §13 to read "Resolved by ADR-016 (amends ADR-003 for Phase 1; see Doc 03 §16 and docs/adr/ADR-016-enrolment-issuer-hierarchy.md)."

**Other fixes:**
- Fixed "participation participation" duplicated word in the OI-13 inline flag (§6).

### Doc 05 — 05-product-backlog-v1.1.0-business-cycle1.md

**ISS-01 (High — NFR-007 uncovered; no Must-NFR coverage map in §12):** Added NF-09 to §8: "Availability SLO instrumentation and error-budget dashboard (citizen write path ≥ 99.5% monthly; public read ≥ 99.9% monthly); single-operator-failure drill confirming no governance action blocked > 60 min; automated alerting when error budget drops below 50% — NFR-007, Chen Wei, Must." Added a Must-NFR → story/NF-item coverage map to §12 covering all 22 Must NFRs.

**ISS-02 (Medium — FE-002 claims FR-005 while §12 declares it unstoried):** Removed FR-005 from FE-002's Maps-to column. FE-002 now correctly maps to FR-004, NFR-004 only.

**ISS-03 (Medium — SCR-10 lists wrong FR-026):** Removed FR-026 from SCR-10's Implements column. SCR-10 now correctly implements FR-020 only. FR-026 remains correctly on SCR-12.

**ISS-04 (Medium — US-0007/US-0038 inherit unfalsifiable "better than chance"):** Updated both ACs to mirror the adversary-game parameters from Doc 02 v1.1.1 (capability set, N ≥ 10,000, ε per OI-10, provisional 0.02, 95% confidence).

**ISS-05 (Medium — OI-08 constants in 6 story ACs):** Added "Blocked pending OI-08" notes and "(example — non-normative; normative value set at OI-08 closure)" markers to US-0022, US-0029, US-0035, US-0036, US-0058, US-0059.

**ISS-06 (Medium — EP-07/US-0076 scope broader than FR-066's "major election"):** Updated EP-07 success metric from "every election" to "every major election (per Doc 02 §14 and FR-066)." Updated US-0076 title and AC from "any election ballot" to "a major election ballot (as defined in Doc 02 §14 Glossary and FR-066)." Marked US-0076 "Not Ready pending ISS-06" — now resolved because "major election" is defined in Doc 02 v1.1.1 §14.

**ISS-07 (Low — point totals incorrect):** Corrected v1.0.0 base from "396" to "approximately 415" (actual sum). Corrected v1.1.0 new-story add from "approximately 88" to "approximately 84". Corrected total from "approximately 484" to "approximately 499". Added "(ISS-07)" note.

**ISS-08 (Low — refinement cadence mismatch with Doc 13):** Updated §10 cadence from "weekly, 60 minutes, product-owner-led; architect and engineer consulted" to "Fortnightly, 60 minutes, product-owner-led; architect, engineer and tester consulted" — aligned with Doc 13 §8.2.

**ISS-09 (Low — SCR-18 missing FR-044):** Added FR-044 to SCR-18's Implements column: SCR-18 now implements FR-042, FR-043, FR-044, FR-045.

**ISS-10 (Low — WSJF sequencing rationale):** Added explicit sequencing rule to §3: "WSJF scores measure value density; the walking-skeleton dependency chain determines the actual start sequence and overrides WSJF where dependency order requires it."

**ISS-11 (Low — US-0080 missing ICAO Doc 9303 NFC scenario):** Added an explicit AC scenario for the ICAO Doc 9303 NFC chip adapter path: biometric passport / NFC-enabled identity card, SOD verification against ICAO PKD, stable identifier extraction (MRZ DocumentNumber or chip pseudonym), attested residency claim, no biometric data retained.

## Decisions taken

1. **ISS-03 / OI-10 provisional ε = 0.02** — Selected as the test-design provisional value; escalated to Gate 1 re-affirmation for human confirmation. Collusion bound remains OI-10 open.
2. **ISS-04 / BR-011 method** — Replaced unobservable "≥ 95% of reported coercion cases" with observable adversarial-audit properties. The coercion incident rate is recorded as an upper bound from independent reports, not an operational observation.
3. **ISS-04 / BR-006 method** — Out-of-band audited sampling design chosen; audit body and consent framework to be confirmed before Gate 2.
4. **ISS-09 / FR-055, NFR-018 priority** — Both remain Should. BR-005's Must promise is scoped to hand-reproducibility (FR-033, FR-054). No priority change.
5. **ISS-08 / §11 three features** — Moved to Could (aligned with Doc 01 §D), not permanently excluded.
6. **ISS-06 / "Major election" scope** — Defined as elections filling an office/position; excludes non-office administrative votes. Three-debate requirement applies to every major election.
7. **OI-13 — NOT touched** — The FR-062 vs NFR-001/NFR-024/TD-02 contradiction remains open and in its six existing locations. This is an honest recording awaiting Rathish's Gate 1 re-affirmation decision. Not weakened.

## Residual open items

- **OI-10** (advantage bound ε, collusion bound): Escalated to Gate 1 re-affirmation. Provisional ε = 0.02 used in §8 Gherkin. Normative values required before Doc 04 test design finalises.
- **OI-08** (governance constants: maturation period, dwell period, timelock durations, recall bars, grace windows): Still unset. 15 stories marked "Blocked pending OI-08". This is a Design phase dependency (owner: Tomás Ferreira).
- **OI-13** (FR-062 vs NFR-001/NFR-024/TD-02 anonymity contradiction): Open at six locations. Resolution required from Rathish at Gate 1 re-affirmation.
- **OI-04** (pilot jurisdiction and eID rail not yet named): Still open.
- **FR-005, FR-049, FR-050, FR-052, FR-053** (no story yet): Carried from v1.0.0, declared gap in Doc 05 §12.
- **Doc 02 v1.1.1 and Doc 05 v1.1.1** are Status: In Review — both require a passing business-mode document-review report (cycle 2) before the SOP advances. The review loop continues.
- **RTM gaps (64 open Must rows)**: Pre-existing debt, out of scope for this session, tracked in Doc 08 by the tester.

## IDs touched

- **Modified (not minted):** BR-005, BR-006, BR-011, NFR-001, NFR-003, NFR-004, NFR-007, NFR-010, NFR-014, NFR-024, NFR-025, FR-002 (Gherkin), FR-030 (Gherkin), OI-10, OI-12 (closed), §8 preamble, §11, §12, §13, §14 (added "Major election"), §15 (header)
- **Added (new):** NFR-001 Gherkin, NFR-003 Gherkin, NFR-004 Gherkin, NFR-006 Gherkin, NFR-007 Gherkin, NFR-009 Gherkin, NFR-010 Gherkin, NFR-012 Gherkin, NFR-013 Gherkin, NFR-015 Gherkin, NFR-016 Gherkin, NFR-021 Gherkin, NFR-022 Gherkin, NFR-023 Gherkin, NFR-024 Gherkin; NF-09 (Doc 05); Must-NFR coverage map (Doc 05 §12)
- **Not minted:** No new BR/FR/NFR/US/FE/EP/SCR/OI IDs

## Next role

Neutral non-product-owner role to run the document-review skill in business mode over:
- docs/02-requirements-srs.md v1.1.1 → artifacts/reviews/02-requirements-srs-v1.1.1-business-cycle2.md
- docs/05-product-backlog.md v1.1.1 → artifacts/reviews/05-product-backlog-v1.1.1-business-cycle2.md

Then route the cycle-2 reports to the project-manager for Gate 1 re-affirmation packet assembly (if PASS) or back to product-owner for cycle-3 rework (if FAIL).

---

## Addendum — Doc 05 v1.1.2 rework (cycle-2, 2026-08-10)

**Trigger:** Doc 02 v1.1.1 PASSED cycle-2 business review (96%, 0C/0H/0M/2L — no rework).
Doc 05 v1.1.1 FAILED cycle-2 business review (88%, 0C/0H/3M/3L — six propagation misses).
Source: artifacts/reviews/05-product-backlog-v1.1.1-business-cycle2.md.

**What changed (Doc 05 only; Doc 02 NOT touched):**

| Issue | Severity | Fix |
|-------|----------|-----|
| ISS-A | Medium | EP-06 outcome hypothesis rewritten: removed "≥95% of reported coercion cases successfully overridden" (structurally unobservable per TD-06/FR-032); replaced with BR-011(a) adversarial-audit (no receipt construction, no re-vote distinguisher) + BR-011(c) coercion rate as published upper bound from incident reports, not operational rate |
| ISS-B | Medium | §12 Must-NFR map: NFR-022→US-0070 (was US-0001; US-0070 is the story that implements NFR-022) |
| ISS-C | Medium | §12 Must-NFR map: NFR-015→US-0003, SCR-01 (was US-0001, SCR-01; US-0003 is the story that implements NFR-015) |
| ISS-D | Low | §2 NF count: 8 → 9 (NF-09 was added in v1.1.1 but count not updated) |
| ISS-E | Low | §2 source pin: "Doc 02 v1.1.0" → "Doc 02 v1.1.1" |
| ISS-F | Low | US-0076: removed "Not Ready pending ISS-06" flag (ISS-06 resolved in v1.1.1) |

**Version:** Doc 05 v1.1.2, Status: In Review.
**Doc 02:** remains at v1.1.1 — DO NOT touch; its passing review must not be invalidated.

**Next role:** Neutral non-product-owner role to run document-review skill in business mode over
docs/05-product-backlog.md v1.1.2 → artifacts/reviews/05-product-backlog-v1.1.2-business-cycle3.md.
If PASS, project-manager assembles Gate 1 re-affirmation packet. If FAIL (≤ 2 cycles remain before escalation).
