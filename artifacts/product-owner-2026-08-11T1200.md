# Session Memory — Product Owner
**Timestamp:** 2026-08-11T12:00:00Z
**Phase:** Define — Doc 02 v2.1.0 pass 3 of 3 (Gherkin, counts, traceability, glossary, consistency)
**Product:** Trumocracy

---

## What was done

Pass 3 of 3 on `docs/02-requirements-srs.md` v2.1.0. All seven assigned task areas completed.

### 1. §8 Gherkin — 7 new blocks (FR-114..FR-120)
Seven Gherkin scenario blocks appended to the FIRST Gherkin code block (after FR-113, before the NFR block). Each block includes at least one adversarial scenario per the task specification:

- **FR-114** (steward election): election by all-enrolled ballot; term expiry mechanical (no renewal); recall by affirmative quorum success/fail; human renewal attempt refused.
- **FR-115** (enumerated powers): listed power permitted; unlisted action refused; extra-power configuration rejected.
- **FR-116** (no outcome power): direct enactment refused; citizen vote required; competing citizen proposal equal standing; emergency override refused (CON-003 reaffirmed).
- **FR-117** (zero steward dependency): steward-vacancy simulation — enrolment, party creation, voting, proposal, fork all succeed; capability-absence suite (UT-0700/UT-0701 pattern) finds zero steward-dependency paths.
- **FR-118** (entrenched charter): amendment of any entrenched rule rejected at submission by code regardless of tier/support; non-entrenched rule accepted; no ballot path for entrenched rules.
- **FR-119** (amendable protocol): passes highest-tier quorum+supermajority → timelock → code enactment, no ratification; fails below bar → failing condition published; no ratification/blocking capability.
- **FR-120** (unconditional fork): fork proceeds regardless of steward action or protocol vote; steward opposition has no effect; entrenched-rule protection bars fork-restriction enactment; fork flag OFF above dev noted as open critical.

### 2. §8 Disposition alignment — 3 existing blocks amended
Comment lines added to:
- **FR-024**: `# v2.1.0 per OI-14: submitting requires Worker tier or above; a Supporter attempting to submit is prompted to self-declare Worker (public) first — voting rights unaffected`
- **FR-090**: same OI-14 comment
- **FR-105**: `# v2.1.0 per OI-15: expulsion targets public-tier participants only; no expulsion path exists for a Supporter — supporter-tier fraud is handled by FR-005 credential revocation`

### 3. §11 Counts updated (v2.1.0)
- Heading changed from "Counts (v2.0.0)" to "Counts (v2.1.0)"
- Counts: **21 BR · 120 FR minted (118 active + 2 superseded) · 28 NFR · 14 CON · 27 requirement-level RISK rows (RISK-01..16 + RISK-22..32) · 11 TDs**
- Baseline note: added "Added by v2.1.0: 1 BR (BR-021), 7 FR (FR-114..FR-120), 2 RISK (RISK-31..32), 1 TD (TD-11)."
- Also corrected second baseline label from "v1.1.0" to "v1.0.0" (pre-existing typo in baseline note)
- Must table: **101** (was 94); FR-114, 115, 116, 117, 118, 119, 120 added to Must ID list
- "Size of the Must set" paragraph: one sentence appended — v2.1.0 grows Must from 94 to 101 with 7 steward FRs, all Must per conditional Gate-1 approval

**Count verification:** FR-001..113 = 94 Must IDs (counted 4+6+3+9+4+3+2+4+2+2+4+11+40 = 94); + FR-114..120 = 7; total 101. Matches task spec.

### 4. §12 Traceability — v2.1.0 paragraph appended
- BR-021 → FR-114..FR-120 (primary trace)
- BR-015, BR-008, BR-003 additional downstream trace entries (existing BRs; steward FRs add to downstream sets)
- Part B item 7 (non-violence) — no new requirement minted; covered by CON-013 and FR-077 (v2.0.0); recorded per Change-9 precedent
- Session-scope extension: US/TC seeding for FR-114..FR-120 joins v2.0.0 catch-up owed after this version lands; downstream columns OPEN by design, recorded not hidden

### 5. §14 Glossary — 4 new entries added
- **Steward**: elected platform-level coordinator; enumerated + exhaustive powers; no outcome power (FR-114/115)
- **Entrenched charter**: six unamendable rules; code rejects amendment proposals at submission (FR-118)
- **Amendable protocol**: everything off the entrenched list; highest-tier vote + timelock + code enactment (FR-119)
- **Steward vacancy**: tested state with no steward in office; zero citizen-facing degradation guaranteed (FR-117)

### 6. §15 Approvals — rows updated
- v2.0.0 row updated: "Pending" → "**Gate 1 APPROVED**" (2026-08-11); Approved Doc 01 v2.0.0 + Doc 02 v2.0.1; conditional on v2.1.0 landing before Design; condition fulfilled by this version
- New row added: "Human approver — v2.1.0 condition | Rathish | Steward requirements landed this version; review loop pending | 2026-08-11 | OI-18 open (entrenched-charter scope)"

### 7. Consistency sweep results
- FR-114..FR-120 Gherkin blocks: **7/7 confirmed** (grep found all 7 block headers at lines 1470, 1493, 1506, 1523, 1544, 1557, 1572)
- Stale "⚠ v2.0.0 DECISION REQUIRED" banners: **0 found** (all replaced in passes 1–2)
- "pending OI-16": **0 occurrences** (FR-107 fixed in pass 1)
- §13 OI-14/OI-15/OI-16: **all DECIDED** (strikethrough + DECIDED text confirmed)
- §13 OI-18: **OPEN** (no strikethrough; decision required before Design)
- §4.39 continuation table after OI-18 banner: **proper header row confirmed** (line 596: `| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |`)

---

## Decisions made

- No new IDs minted (task constraint honoured: "Mint NO new IDs")
- Must count verified independently before writing: 94 + 7 = 101

## Open items

- **OI-18** (entrenched-charter scope vs previously-absolute guarantees): open, decision required from Rathish before architect fixes amendment boundary in Doc 03
- Doc 02 v2.1.0 ready for business-mode document-review by neutral role
- Gate 1 condition satisfied by this version; project-manager to record condition satisfaction on review PASS
- Carry-forwards unchanged: OI-01-NUM, OI-04-PILOT, FORK-CRIT (flag OFF above dev), SC-13/SC-14, SC-05, OI-08/OI-17

## IDs touched

- **FR amended (Gherkin/comment):** FR-024, FR-090, FR-105
- **FR Gherkin added:** FR-114, FR-115, FR-116, FR-117, FR-118, FR-119, FR-120
- **Sections modified:** §8 (Gherkin), §11 (counts), §12 (traceability), §14 (glossary), §15 (approvals)
- **No new IDs minted**

## High-water marks (unchanged from pass 2)

| Prefix | High-water mark |
|--------|----------------|
| BR | BR-021 |
| FR | FR-120 |
| NFR | NFR-028 |
| CON | CON-014 |
| RISK | RISK-32 |
| TD | TD-11 |
| OI | OI-18 |

## Gate status

Gate 1 APPROVED (conditional) 2026-08-11. **Condition now satisfied** by Doc 02 v2.1.0 (passes 1–3 complete). Doc 02 v2.1.0 ready for business-mode document-review by neutral role. OI-18 remains open — recorded, not hidden.

## Next role

Neutral role (not product-owner) to run document-review skill in **business mode** over `docs/02-requirements-srs.md` v2.1.0 (cycle 1). On PASS: project-manager records condition satisfaction.

---

## Addendum — v2.1.1 rework (cycle-1 business-review, 2026-08-11)

Cycle-1 review of v2.1.0 returned FAIL (91%, 0C/0H/1M/5L). Reworked into v2.1.1. All six ISS items addressed:

| ISS | Severity | Fix applied | Location |
|-----|----------|-------------|----------|
| ISS-01 | Medium | FR-092 §4.26: "authorship (per FR-090, pending OI-14)" → "authorship (per FR-090; OI-14 decided 2026-08-11 — Worker tier and above)". Grep confirmed this was the only live "pending OI-14" occurrence; zero "pending OI-15" found. | §4.26 FR-092 |
| ISS-02 | Low | §2.5 CON range: "CON-001 … CON-012" → "CON-001 … CON-014" | §2.5 |
| ISS-03 | Low | §15 Downstream paragraph: replaced stale "Nothing is designed until Gate 1 re-affirmation clears for v1.1.0" with current gate state — approved 2026-08-11, conditional on v2.1.0 review PASS, recorded via GATE1-DECISION-2026-08-11.md §2/§5 | §15 Downstream |
| ISS-04 | Low | §15 v1.1.0 re-affirmation row: annotated as superseded — Decision cell strikethrough + "(superseded)", Notes cell updated to "Superseded by the v2.0.0 re-entry (Gate 1 approved 2026-08-11; OI-13 resolved at v2.0.0)", date set to 2026-08-11 | §15 approvals table |
| ISS-05 | Low | OI-16 annotation comment added to FR-085 §8 block (after block header) and FR-107 §8 block (after block header) | §8 FR-085, FR-107 |
| ISS-06 | Low | FR-024 §8: added negative scenario "Given Supporter / When attempts to submit without Worker tier / Then refused + Worker-declaration path offered + voting rights unaffected". FR-105 §8: added "Given Supporter accused of misconduct / When expulsion vote attempted / Then no path exists; FR-005 the only remedy" | §8 FR-024, FR-105 |

Version bumped to 2.1.1, Status: In Review. Change-log entry prepended. No new IDs minted.

**Grep results (item 1):** "pending OI-14" — 1 live occurrence found and fixed (FR-092 §4.26). "pending OI-15" — 0 live occurrences. Struck text in §13 not scanned (acceptable per task rules).

**Next role:** Neutral role to run document-review skill in business mode over `docs/02-requirements-srs.md` v2.1.1 (cycle 2 of 5). On PASS: project-manager records Gate 1 condition satisfied.

**Cycle-2 PASS (2026-08-11):** Doc 02 v2.1.1 reviewed at 99%, 0C/0H/0M/1L — PASS (artifacts/reviews/02-requirements-srs-v2.1.1-business-cycle2.md). Status flipped to "Approved (review loop, cycle 2 PASS 99%; Gate 1 approved 2026-08-11, v2.1.0-condition satisfied at this version)". Version not bumped. The one Low ("Counts (v2.1.0)" heading label) accepted as-is per review-loop rules. Gate 1 condition now satisfied — project-manager to record.
