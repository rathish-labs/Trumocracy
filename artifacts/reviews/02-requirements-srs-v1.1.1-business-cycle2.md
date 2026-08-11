# Document Review Report

```
Reviewed document: 02-requirements-srs.md
Document version:  1.1.1
Review mode:       business
Reviewer role:     technical-writer (neutral — not the owning role for Doc 02)
Score:             96%
Critical:          0
High:              0
Medium:            0
Low:               2
Cycle:             2 of 5
Verdict:           PASS
```

---

## 1. Purpose and scope

Business-rubric cycle-2 review of SRS-TRUMOCRACY v1.1.1 (2026-08-10). The owner's per-issue
change log is `artifacts/product-owner-2026-08-10T1200.md`. This report verifies each claimed
fix against the document text and checks for regressions.

OI-13 calibration (same as cycle 1): the FR-062 vs NFR-001/NFR-024/TD-02 contradiction is
deliberately open, awaiting the human approver. The conflict is correctly recorded in six locations
(§4.19, §6, §7, §9.3, §13, §15). Quality of recording is a STRENGTH, not a defect.

---

## 2. Cycle-1 issue disposition

### ISS-01 (High — §8 preamble false + 15 missing Must-NFR Gherkin) — FIXED

The §8 preamble now correctly states "22 of 22 Must NFRs" and lists them explicitly. Verified
presence of all 22 Gherkin blocks in the second code block: NFR-001, NFR-002, NFR-003, NFR-004,
NFR-005, NFR-006, NFR-007, NFR-009, NFR-010, NFR-011, NFR-012, NFR-013, NFR-014, NFR-015,
NFR-016, NFR-017, NFR-020, NFR-021, NFR-022, NFR-023, NFR-024, NFR-025. Scenarios are testable
and non-trivial. ISS-01 closed.

### ISS-02 (High — NFR-010 absolute claim vs §7 two restricted stores) — FIXED

NFR-010 text now explicitly carves out "(a) Recovery requests & notification channel (90-day
retention, access-controlled, region-local) and (b) Support & appeal records (24-month retention,
access-controlled, region-local) — are outside the scope of this requirement." The §6.1 GDPR row
is updated with the same distinction. The NFR-010 Gherkin block in §8 has a separate scenario
for the two restricted stores checking that they "hold only the minimal personal data fields and
retention durations stated in §7." Contradiction resolved. ISS-02 closed.

### ISS-03 (High — unfalsifiable "better than chance" / "computationally bounded adversary") — FIXED

NFR-001 now specifies the adversary capability set (all operator logs, attestor credential hashes,
public verifiable record, network timing at 1-second granularity), N ≥ 10,000 independent action
pairs, provisional ε = 0.02 (OI-10 open), 95% confidence. NFR-003 specifies a PPT adversary with
security parameter λ ≥ 128 bits. FR-002 and FR-030 Gherkin blocks adopt the identical adversary
game framing — capability set, N, ε, confidence. "Better than chance" is gone. ISS-03 closed.

### ISS-04 (High — BR-006/BR-011 unmeasurable success measures) — FIXED

BR-006 success measure: "Audited duplicate/synthetic-person rate ≤ 0.1% of credentials per region,
measured by independent out-of-band sampling (consented random sample of ≥ 5,000 credentials per
region per quarterly audit, 95% confidence interval; audit body and consent framework confirmed
before Gate 2; methodology: independent auditor draws sample, matches against external reference
cohort, publishes protocol and confidence interval)." Observable, well-specified.

BR-011 success measure: (a) adversarial audit (PPT, λ ≥ 128 bits, N ≥ 10,000 ballot observations,
95% confidence) finds no receipt construction; (b) 0 externally detectable override events; (c)
coercion incident rate published as an upper bound from independent incident reports, explicitly NOT
as an operational observation rate (consistent with TD-06, FR-032 — re-voting is invisible). ISS-04
closed.

BR-005 reconciliation: The Must-level guarantee is hand-reproducibility from raw public data
(FR-033, FR-054); the open-source verifier (FR-055, Should) is a convenience enhancement. This
honestly resolves ISS-09 simultaneously.

### ISS-05 (Medium — OI-08 constants presented as specifications) — FIXED

FR-025 Gherkin: "(example — non-normative; quorum and supermajority values unset; story not Ready
until OI-08 closes; owner: Tomás Ferreira)" and "(example values used below: Q=40%, S=66%;
normative values set at OI-08 closure)." FR-026 and FR-043 Gherkin blocks carry identical markers.
All three blocks reframe their illustrative numbers as "(example: X — not normative; normative
value set at OI-08 closure)." ISS-05 closed.

### ISS-06 (Medium — NFR-024 harassment metric undefined) — FIXED

NFR-024 defines the metric explicitly: "the count of recall-initiation or nomination-initiation
events directed at a single office-holder from distinct member nullifiers within any rolling 90-day
window, normalised per 1,000 active members of that party, computed mechanically with no Trumocracy
employee exercising discretion over political speech content." Adjudication conflict with FR-056 is
resolved by stating that no Trumocracy employee exercises discretion — FR-056/FR-057 is the only
lever, governed by legal basis and public log. ISS-06 closed.

### ISS-07 (Medium — "major election" undefined in §14) — FIXED

§14 Glossary entry: "Major election — An election filling an office or position within a party —
including by-elections (mid-term vacancies), elections following a successful recall (FR-042–FR-045),
and scheduled end-of-term elections. Excludes internal non-office administrative votes (e.g.,
procedural motions, informal straw polls, and internal rule confirmations that do not place a named
person in an office). The three-debate requirement (FR-066) and the post-debate candidacy-vote
requirement (FR-067) apply to every major election; the scope of 'major election' does not extend
to sub-party administrative resolutions that do not fill a defined office. (Added v1.1.1 — ISS-07.)"
ISS-07 closed.

### ISS-08 (Medium — §11 Won't vs Could mismatch with Doc 01 §D) — FIXED

§11 now has a separate "Could (non-FR features, v2 candidates)" row: "Party dormancy/deactivation
lifecycle; treasury splitting on fork; personal blocklists — deferred to v2, contingent on
month-6 metrics per Doc 01 §D and FAQ §E3. Classified as Could in Doc 01 §D; not permanently
excluded. (ISS-08: aligned with Doc 01 §D.)" ISS-08 closed.

### ISS-09 (Medium — FR-055/NFR-018 Should vs BR-005 Must) — FIXED

Addressed together with ISS-04 (see BR-005 update above). NFR-018 remains Should; FR-055 remains
Should. BR-005 now explicitly states that the Must guarantee is the raw-data reproducibility, not
the convenience tool. Honest and internally consistent. ISS-09 closed.

### ISS-10 (Low — Change 9 not traced in §12/§13) — FIXED

§12 now includes: "CR-v1.1.0 Change 9 ('party operation / no boss roles'): No new requirement
minted. Analysis confirms coverage by FR-020, FR-021, FR-024, FR-056, BR-003. Detail:
artifacts/product-owner-2026-08-09T2200.md. (ISS-10.)" ISS-10 closed.

### ISS-11 (Low — RFC 2119 negation errors in 5 NFRs) — FIXED

NFR-004, NFR-007, NFR-014, NFR-024, NFR-025 all now use "the system MUST ensure that no X can Y"
or "MUST NOT be able to Y" rather than the malformed "No X MUST Y" constructions. ISS-11 closed.

### ISS-12 (Low — team-named approvers) — FIXED

§15 header now reads "Gate 1 — Priya Raghunathan (Product Owner), Ana-Maria Petrescu (Project
Manager), Rathish (Human Approver — re-affirmation required at this version)". ISS-12 closed.

### ISS-13 (Low — OI-12 status stale in §13) — FIXED (§13 only; Low residual in §4.1)

§13 OI-12 entry updated: "Resolved by ADR-016 (amends ADR-003 for Phase 1; see Doc 03 §16 and
docs/adr/ADR-016-enrolment-issuer-hierarchy.md). OI-12 is closed. (ISS-13.)" §13 is correct.

However, the inline call-out box in §4.1 after FR-073 ("⚠ v1.1.0 ADR-003 RELATIONSHIP NOTE")
still reads: "The architect MUST confirm in Doc 03 whether Phase-1 single-issuer-class policy is
reconcilable with ADR-003 or requires an ADR amendment. This is recorded as OI-12." This note
was not updated to reflect the resolution. It is stale. Classified as a residual Low issue (see
ISS-A below) — the resolution is available in §13 for a reader who follows the cross-reference,
but the inline note itself is misleading.

---

## 3. New issues found in v1.1.1

### ISS-A — Low — §11 section heading carries stale version

**Location:** §11 opening line.
**Observation:** The section heading reads "Counts (v1.1.0). 13 BR · 73 FR · 26 NFR · 12 CON ·
19 RISK · 7 recorded trade-offs." The document is at v1.1.1. The counts themselves are unchanged
since v1.1.0 (no new IDs were minted in v1.1.1), so this is a version-label error only, not a
count error.
**Severity:** Low (trivially correctable; counts are correct).
**Rework owner:** Priya Raghunathan.

### ISS-B — Low — §4.1 FR-073 inline OI-12 call-out not updated

**Location:** §4.1, the "⚠ v1.1.0 ADR-003 RELATIONSHIP NOTE (FR-073)" block.
**Observation:** The note still says "The architect MUST confirm in Doc 03 whether Phase-1
single-issuer-class policy is reconcilable with ADR-003 or requires an ADR amendment. This is
recorded as OI-12." This is stale — OI-12 was resolved by ADR-016 and §13 was updated (ISS-13
fix), but this inline note was not. A reader relying on §4.1 alone sees a still-open question.
**Severity:** Low (§13 contains the correct resolution; stale note is a consistency gap, not a
missing resolution).
**Rework owner:** Priya Raghunathan.

---

## 4. Scoring

| Rubric criterion | Weight | Score | Notes |
|-----------------|--------|-------|-------|
| B1 Outcome & problem clarity | 20 | 19.5 | All 13 BRs have named owners and measurable success measures. OI-10 provisional ε properly escalated to Gate 1 re-affirmation. |
| B2 Completeness | 15 | 14.5 | 22/22 Must NFR Gherkin; all 54 Must FR covered; §11 version label stale (Low). |
| B3 Traceability & IDs | 20 | 19.0 | All ID sequences correct; §12 comprehensive including Change-9 trace. §4.1 OI-12 inline note stale (Low). |
| B4 Correctness & consistency | 15 | 14.5 | NFR-010 vs §7 resolved; BR-011 measurement consistent with TD-06/FR-032; §11 version label minor. |
| B5 Testability | 15 | 14.5 | All 22 Must NFR + all 54 Must FR Gherkin present; adversary games correctly specified; OI-08 constants marked non-normative. |
| B6 Convention compliance | 15 | 14.5 | RFC 2119 negation fixed; named individual approvers; ISO-8601 dates; Conventional IDs. |
| **Total** | **100** | **96** | |

**Verdict: PASS** — Score 96% ≥ 95% and zero Critical, High, Medium issues.

---

## 5. OI-13 recording quality assessment (special calibration)

OI-13 (FR-062 vs NFR-001/NFR-024/TD-02) is flagged in six locations:
- §4.19 inline call-out before the FR-062/FR-063 table
- §6 inline call-out after the NFR-001/NFR-024 rows
- §7 data table (Participation profile row carries "⚠ See OI-13")
- §9.3 TD-02 row — a separate call-out names TD-02 vs FR-062 explicitly
- §13 OI-13 entry — routes to Gate 1 re-affirmation by Rathish
- §15 approvals — "Must confirm or revise OI-13 (profile vs anonymity)"

The contradiction is not silently reconciled. It is honestly characterised (no privacy-preserving
architecture satisfies both FR-062 and NFR-001 simultaneously). DES-064 was designed but flagged
off above dev. This recording is exemplary. OI-13 recording quality: STRENGTH, not a defect.

---

## 6. Routing

**Document: PASS.** No rework required for this cycle. The two Low issues (ISS-A, ISS-B) may be
fixed in the next version update without triggering a new review cycle — they do not block
Gate 1 re-affirmation. Gate 1 re-affirmation packet may proceed subject to OI-13 resolution by
Rathish.

**Routed to:** project-manager (for Gate 1 re-affirmation assembly).

---

*Reviewed: 2026-08-10 | Reviewer: technical-writer (neutral) | Cycle: 2 of 5*
