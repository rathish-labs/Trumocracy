# Document Review Report — 02-requirements-srs.md v2.7.0 · Business · Cycle 2

> Reviewer: **technical-writer** (neutral — not the document owner; product-owner owns Doc 02).
> Independence maintained: scorer ≠ author; no edits made to the reviewed document.
> Scope note: this is Cycle 2 of the business-mode review loop for Doc 02 v2.6.0→v2.7.0.
> Cycle 1 (v2.6.0) returned FAIL (94%, 0C/0H/1M/1L). This cycle verifies the two fixes
> claimed in the changelog and checks for regressions. Changed areas (§16.1 Source block,
> §16.4 honesty register H-07..H-14, header) reviewed in full; remainder of document
> cross-checked against the cycle-1 review record.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.7.0
Review mode: business
Reviewer role: technical-writer (neutral — not the document owner)
Score: 98%
Critical: 0
High: 0
Medium: 0
Low: 0
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Cycle-2 business review of `docs/02-requirements-srs.md` v2.7.0. Both cycle-1 issues
are confirmed fixed. No regressions found. **Verdict: PASS.**

ISS-01 (Medium, B3): `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` now exists,
contains the verbatim approver directive (Definition A and Definition B), is recorded by
the PM (Ana-Maria Petrescu), explicitly resolves ISS-01, and cites the cycle-1 review
report. The §16.1 Source block no longer carries the provisional "(being written by the
project-manager this session)" qualifier; it cites the decision record directly. The Doc
03 alignment reference is updated to v2.3.1 (Approved). All source citations in §16 and
for FR-131 now point to extant artifacts.

ISS-02 (Low, B2): H-07..H-14 have been added to §16.4, covering all previously unregistered
H=Y items. A full independent sweep of the H? column in §16.3.1 and §16.3.2 confirms 17
H=Y items (13 FRs + 4 NFRs); every one maps to a named register entry (H-01..H-14), with
no remaining gaps. The new entries are well-formed: the "Guarantee v1 users might assume"
column correctly states the user assumption, the "v1 reality" column correctly names what
IS and IS NOT provided, and the "Deferred FRs / NFRs" column cites the backing
classification-table row.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`98%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — all rows above are "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | Unchanged from cycle 1. §16 definitions precise; classification test normative; contradiction surface explicit. |
| B2 Completeness | 15 | 97 | 14.55 | ISS-02 resolved. H-07..H-14 close all honesty-register gaps identified in cycle 1 and in the product-owner's wider sweep (FR-063 and NFR-024 also added). All 17 H=Y items in §16.3 now have explicit register entries. |
| B3 Traceability & IDs | 20 | 98 | 19.60 | ISS-01 resolved. Decision record exists and records the verbatim directive. All source citations for §16 and FR-131 are backed by extant artifacts. Doc 03 alignment reference updated to v2.3.1 (Approved). |
| B4 Correctness & consistency | 15 | 97 | 14.55 | No regression. CON-007 figures unchanged and correct. Classification tallies unchanged. Doc 03 reference updated from v2.3.0 to v2.3.1 (Approved) — minor accuracy improvement. |
| B5 Testability | 15 | 97 | 14.55 | No regression. FR-130 and FR-131 Gherkin unchanged and still correct. No new FRs or acceptance criteria to review. |
| B6 Convention compliance | 15 | 98 | 14.70 | v2.7.0 header correct; Last updated: 2026-08-23 ✓; Status: In Review ✓; changelog accurately summarises both fixes and states "No other changes" ✓; changelog is newest-first ✓. |
| **Total** | **100** | — | **98%** | — |

---

## 4. Fix verification — ISS-01 (Medium)

| Check | Status | Evidence |
|-------|--------|----------|
| `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` exists in repository | CONFIRMED | File present; filesystem search confirmed. |
| Decision record contains the verbatim v1/v2 split directive (Definition A and Definition B) | CONFIRMED | File §2 records the directive verbatim, including "Voting WORKS in v1 but uses conventional authentication, NOT the zero-knowledge private ballot." |
| Decision record recorded by the PM (Ana-Maria Petrescu) | CONFIRMED | Header: "Recorded by: project-manager (Ana-Maria Petrescu)". |
| Decision record explicitly states it resolves ISS-01 from the cycle-1 review | CONFIRMED | File §1: "ISS-01 (Medium, B3): the dangling reference leaves the normative authority … resting on nothing on file. This record is the artifact that resolves ISS-01." |
| §16.1 Source block: provisional qualifier removed | CONFIRMED | Source block reads: "Decision record: `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md`." No "(being written by the project-manager this session)" text present. |
| §16.1 Source block: Doc 03 reference updated to v2.3.1 (Approved) | CONFIRMED | Source block: "Doc 03 v2.3.1 (Approved) §10.13 (DES-095..DES-098) + ADR-024." |
| FR-131 rationale and §12 trace: citations unchanged and already correct | CONFIRMED | §4.45 rationale cites `DECISIONS-2026-08-23-V1-V2-SPLIT.md` and `DES-098, Doc 03 §10.13.6` — both extant. §12 v2.6.0 trace note cites `DECISIONS-2026-08-23-V1-V2-SPLIT.md` — now extant. |

---

## 5. Fix verification — ISS-02 (Low)

**Independent H? column sweep — §16.3.1 (FR) and §16.3.2 (NFR):**

| H=Y item | Register entry | Coverage confirmed |
|----------|---------------|-------------------|
| FR-002 (PARTIAL, cross-scope unlinkability) | H-07 | ✓ H-07 names FR-002 in "Deferred FRs / NFRs" column |
| FR-030 (DEFERRED-v2, ballot unlinkability) | H-01 | ✓ H-01 "Votes are secret ballots" names FR-030 |
| FR-031 (DEFERRED-v2, receipt-freeness) | H-01, H-03 | ✓ H-01 and H-03 both name FR-031 |
| FR-032 (PARTIAL, coerced-vote override) | H-03 | ✓ H-03 "No receipt-freeness; no coercion resistance" names FR-032 |
| FR-034 (PARTIAL, no interim tallies) | H-08 | ✓ H-08 names FR-034 |
| FR-048 (PARTIAL, office-holder vote separation) | H-09 | ✓ H-09 names FR-048 |
| FR-059 (PARTIAL, recovery reveals nothing) | H-10 | ✓ H-10 names FR-059 |
| FR-063 (PARTIAL, ballot-direction prohibition) | H-11 | ✓ H-11 names FR-063 |
| FR-082 (DEFERRED-v2, Supporter anonymous) | H-02 | ✓ H-02 names FR-082 |
| FR-086 (DEFERRED-v2, prior Supporter-period anonymous) | H-02 | ✓ H-02 names FR-086 |
| FR-103 (PARTIAL, conduct votes individual private) | H-12 | ✓ H-12 names FR-103 |
| FR-124 (PARTIAL, verified status private) | H-13 | ✓ H-13 names FR-124 |
| FR-128 (PARTIAL, subpoena test) | H-04 | ✓ H-04 "Cryptographic subpoena-proofness" names FR-128 |
| NFR-001 (PARTIAL, privacy guarantee) | H-02, H-04 | ✓ H-02 and H-04 both name NFR-001 |
| NFR-002 (PARTIAL, anonymity set floor) | H-06 | ✓ H-06 names NFR-002 |
| NFR-003 (DEFERRED-v2, coercion resistance) | H-03 | ✓ H-03 names NFR-003 |
| NFR-024 (PARTIAL, anti-harassment) | H-14 | ✓ H-14 names NFR-024 |

**Result:** All 17 H=Y items (13 FRs + 4 NFRs) confirmed covered. No remaining gaps.
The product-owner's sweep found two additional H=Y items beyond the cycle-1 six (FR-063
and NFR-024); these are correctly added as H-11 and H-14 respectively.

---

## 6. Regression check

| Area | Status | Notes |
|------|--------|-------|
| Version header (2.7.0, Status: In Review, Last updated: 2026-08-23) | No regression | Correct ✓ |
| Changelog format (newest-first, accurate summary) | No regression | v2.7.0 entry describes ISS-01 and ISS-02 fixes and states "No other changes" ✓ |
| §16.3.1 classification table (131 FRs, tallies) | No regression | Tallies unchanged: IN-v1 106, PARTIAL 19, DEFERRED-v2 4, SUPERSEDED 2 ✓ |
| §16.3.2 NFR classification table (28 NFRs, tallies) | No regression | Tallies unchanged: IN-v1 24, PARTIAL 3, DEFERRED-v2 1 ✓ |
| §16.5 contradiction surface (16 items, AWAITING APPROVER CONFIRMATION) | No regression | 16 rows unchanged ✓ |
| §11 Must count (112), §12 traces, §13 session-scope notes | No regression | No changes reported or found ✓ |
| CON-007 budget figures | No regression | ≈ USD 4.03M, ≈ USD 175K, USD 4.2M appetite unchanged ✓ |
| FR-130 (§4.44) and FR-131 (§4.45) normative text | No regression | Unchanged ✓ |
| §8 Gherkin for FR-130 and FR-131 | No regression | Unchanged ✓ |

---

## 7. Issues

No issues found at any severity level.

Both cycle-1 issues (ISS-01 Medium and ISS-02 Low) are confirmed resolved. No regressions.
No new issues introduced.

---

## 8. Routing instruction

**Verdict: PASS.** The owning role (**product-owner**, Priya Raghunathan) MUST:

1. Set `Status: Approved` in the document header (Version 2.7.0).

No issues to carry forward.

**Open items inherited (unchanged — not new, not introduced by this review):**

- **Approver (Rathish):** 16 contradiction-surface items in §16.5 AWAITING APPROVER CONFIRMATION. These are pre-existing governance questions — not document defects.
- **Architect (Ravi Deshmukh):** Doc 03 cascade annotation for FR-131/DES-098 pre-allocation error owed at next Doc 03 increment.
- **Product-owner (Priya Raghunathan):** US for FR-131 owed at next session when DES is assigned.
- **Tester (Ji-woo Park):** TC for FR-131 (Phase 3); RTM row after DES and TC available.
- **Project-manager (Ana-Maria Petrescu):** Doc 13 §3.1 re-plan owed (MACI OFF / v1 scope statement superseded by approver directive 2026-08-23).
