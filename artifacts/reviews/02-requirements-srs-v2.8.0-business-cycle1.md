# Document Review — Doc 02 Requirements SRS v2.8.0

```
Reviewed document: 02-requirements-srs.md
Document version: 2.8.0
Review mode: business
Reviewer role: technical-writer (neutral reviewer — not the document owner)
Score: 97%
Critical: 0
High: 0
Medium: 1
Low: 2
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Review scope and approach

**Document owner:** Priya Raghunathan (Product Owner). The reviewer (technical-writer) is NOT the
document owner and made no edits.

**What this version adds (per changelog):**
- FR-132 minted (Must, §4.46, Marcus Adeyemi — v1 phone-based SMS auth; MUST NOT claim
  one-person-one-vote; traces BR-006, BR-012; DES-095 amended, ADR-025)
- FR-133 minted (Must, §4.47, Rafael Duarte — v1 spam-resistance flag-don't-block layer;
  false-positive path first-class; traces BR-012, BR-003; DES-099)
- §8 Gherkin for FR-132 (3 scenarios) and FR-133 (4 scenarios) added
- §11 Must count 112 → 114
- §16.3.1 updates: FR-001/FR-002 v1-form cells softened; FR-003 reclassified IN-v1 → PARTIAL
  (H? N → Y); FR-132/FR-133 rows added (both IN-v1; FR-132 H?=Y, FR-133 H?=N);
  NFR-010 v1-form annotated
- §16.4: H-15 (one-person-one-vote not guaranteed; FR-132; T-06) and H-16 (phone number stored
  in v1; FR-003 partial; T-07) added
- §16.5: T-06 (Charter Rule 1 vs v1 phone auth) and T-07 (FR-003 vs phone number storage)
  added, both AWAITING APPROVER CONFIRMATION
- Blockchain ratification of DES-097 recorded in §16 Source block (Ruling 3; item (a) from
  V1-V2-SPLIT §4 CLOSED)

**Source documents read end-to-end for this review:**
- `docs/02-requirements-srs.md` v2.8.0 (header, changelog, §4.46, §4.47, §8 Gherkin for
  FR-132 and FR-133, §11, §12 FR-132/FR-133 trace rows, §16.1 Source block, §16.3.1
  classification table and tally line, §16.4 H-01..H-16, §16.5 full contradiction surface)
- `artifacts/status/DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md` (three rulings, §5 tensions)
- `docs/03-architecture-design-sdd.md` v2.4.1 (header, changelog for v2.4.0/v2.4.1, §10.13.2
  DES-095 amendment, §10.13.8 DES-099, §15 FR-132/FR-133 traceability rows)

---

## 2. Obligation checklist (coordinator-specified)

| Obligation | Outcome |
|-----------|---------|
| Decision record exists and records three rulings | PASS — `DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md` exists; Ruling 1 (phone SMS auth), Ruling 2 (flag-don't-block spam resistance), Ruling 3 (blockchain ratified) all present |
| FR-132: no overclaim; v1 = phone SMS spam speed-bump, never personhood; MUST NOT claim one-person-one-vote | PASS — §4.46 states "phone verification is a spam speed-bump... NOT a proof of unique personhood" and "v1 MUST NOT claim one-person-one-vote" |
| FR-133: flag-don't-block; rate-limit never hard-block; false-positive path first-class; precedents cited | PASS — §4.47 states "MUST be rate-limited... MUST NOT be hard-blocked"; "false-positive path MUST be first-class"; cites FR-061, FR-125/OI-19, FR-020 |
| §8 Gherkin FR-133 includes false-positive scenario | PASS — Scenario 2 ("Flagged legitimate VoIP/eSIM user completes every primary flow") is explicitly the false-positive path |
| H? sweep: H-01..H-16 covers all H=Y items | PASS — 19 H=Y items (17 from v2.7.0 + FR-003 reclassified + FR-132 added); H-15 covers FR-132; H-16 covers FR-003; all items verified present |
| H-15/H-16 wording honest and complete | PASS — H-15 states Charter Rule 1 not technically enforced in v1; H-16 states phone number is identity data in v1 operator DB; both cite correct FR and tension IDs |
| T-06/T-07 in §16.5 aligned with decision record §5 and Doc 03 §10.13.7 | PASS — both cite `DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §5 T-06/T-07` and Doc 03 §10.13.7; both AWAITING APPROVER CONFIRMATION |
| §11 Must count = 114 (112 + FR-132 + FR-133) | PASS — table shows `Must \| 114 \| FR-001..133` with FR-132 and FR-133 in the ID list |
| §11 heading stale version label | NOTED — heading reads "Counts (v2.6.0)" in a v2.8.0 document → ISS-02 (Low) |
| Traceability FR-132 → DES-095 amended + ADR-025 in Doc 03 v2.4.1 | PASS — §4.46 normative text, §12 trace row, and Doc 03 §10.13.2/§15 all confirm |
| Traceability FR-133 → DES-099 in Doc 03 v2.4.1 | PASS — §4.47 normative text, §12 trace row, and Doc 03 §10.13.8/§15 all confirm |
| Catch-up posture recorded for FR-132/FR-133 | PASS — both carry "US/TC/RTM owed at next catch-up — same recorded-phasing posture as FR-131. TC OPEN — Phase 3" |
| No regressions in v2.7.0-approved content | PASS — H-01..H-14 intact; §16.1 Source block still cites V1-V2-SPLIT.md; ISS-01/ISS-02 fixes (from v2.6.0 cycle 1) intact |

---

## 3. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | B4 Correctness & consistency | §16.3.1, FR tally line (immediately after NFR-028 row) | The FR classification tally line was not updated for v2.8.0 additions. It still reads: "Tally — FRs (FR-001..FR-131, excluding superseded): 129 active FRs classified: IN-v1 106 · PARTIAL 19 · DEFERRED-v2 4 · SUPERSEDED-n/a 2 (FR-046, FR-062)." v2.8.0 added FR-132 (IN-v1) and FR-133 (IN-v1), and reclassified FR-003 from IN-v1 to PARTIAL. The correct tally at v2.8.0 is: FR-001..FR-133, 131 active (133 minted − 2 superseded), IN-v1 107 (106 − 1 for FR-003 + 2 for FR-132/FR-133), PARTIAL 20 (19 + 1 for FR-003). The stale tally gives downstream roles (tester, reviewer-qa) wrong counts that contradict the table content above it. | Update the tally line to: "Tally — FRs (FR-001..FR-133, excluding superseded): 131 active FRs classified: IN-v1 107 · PARTIAL 20 · DEFERRED-v2 4 · SUPERSEDED-n/a 2 (FR-046, FR-062)." |
| ISS-02 | Low | B6 Convention compliance | §11 heading label (first bold line of §11 body) | The heading label reads "Counts (v2.6.0)" in a v2.8.0 document. The counts in the table and narrative are correct (Must 114, FR-132/FR-133 present); only the version label is stale. Pre-existing issue not caught in v2.6.0 or v2.7.0 review cycles. | Update the label to "Counts (v2.8.0)". |
| ISS-03 | Low | B3 Traceability & IDs | §16.1 Source block, architect-alignment sentence | The Source block reads "Doc 03 v2.4.0 §10.13 (DES-095 amended, DES-099) + ADR-025." Doc 03 was reworked to v2.4.1 (Approved, 2026-08-23) correcting an overclaim in §10.13.2 invariants (ISS-01 Medium from the Doc 03 v2.4.0 technical cycle-1 review). The cited content (DES-095 amendment, DES-099, ADR-025) is present and unchanged in v2.4.1, but citing a non-approved version is a stale reference. | Update the citation to "Doc 03 v2.4.1 (Approved) §10.13 (DES-095 amended, DES-099) + ADR-025." |

---

## 4. Per-criterion scores

| Criterion | Weight | Score | Weighted | Notes |
|-----------|--------|-------|---------|-------|
| B1 Outcome & problem clarity | 20% | 100 | 20.0 | FR-132 and FR-133 problem statements honest; spam-speed-bump framing correct; measurable success criteria inherited from earlier Must set; no overclaim |
| B2 Completeness | 15% | 96 | 14.4 | New FRs, Gherkin, §16.3.1 rows, H entries, T entries all present; stale tally line reduces completeness of the classification summary |
| B3 Traceability & IDs | 20% | 98 | 19.6 | All ID chains (BR→FR→DES→ADR) correct; §12 trace rows present; one stale Doc 03 version reference (ISS-03 Low) |
| B4 Correctness & consistency | 15% | 90 | 13.5 | FR-132/FR-133 normative text internally consistent and aligned with decision record; §16.3.1 tally line factually incorrect vs table above it (ISS-01 Medium) |
| B5 Testability | 15% | 100 | 15.0 | FR-132 Gherkin 3 scenarios; FR-133 Gherkin 4 scenarios including explicit false-positive scenario (Scenario 2) and hard-block absence test (Scenario 4); verify-by "T, I" for both |
| B6 Convention compliance | 15% | 97 | 14.55 | RFC 2119 correct; named owners (Marcus Adeyemi, Rafael Duarte); ISO-8601 dates; §11 label stale (ISS-02 Low); Doc 03 version reference stale (ISS-03 Low) |
| **Total** | **100%** | — | **97.1%** | Rounded to **97%** |

---

## 5. Verification: v2.7.0-approved content regression check

| Item | Status |
|------|--------|
| §16.1 Source block cites `DECISIONS-2026-08-23-V1-V2-SPLIT.md` | INTACT |
| §16.1 Source block: no provisional qualifier | INTACT |
| §16.1 Source block: Doc 03 v2.3.1 (Approved) cited for DES-095..DES-098 + ADR-024 | INTACT |
| H-07..H-14 (ISS-02 fix from v2.6.0 cycle 1) present | INTACT — H-01..H-14 all confirmed |
| §11 Must table count 112 at v2.7.0 | INTACT — narrative shows 112→114 progression |
| §16.5 T-01..T-05 contradiction surface unchanged | INTACT — 16 items from v2.7.0 still present; T-06 and T-07 correctly appended |
| NFR tally (NFR-001..NFR-028): IN-v1 24, PARTIAL 3, DEFERRED-v2 1 | INTACT — NFR tally was not changed in v2.8.0 (no new NFRs) ✓ |

---

## 6. H? sweep (independent, end-to-end)

Independent sweep of the H? column in §16.3.1 (FR-001..FR-133) and §16.3.2 (NFR-001..NFR-028)
confirms all H=Y items at v2.8.0 have a named §16.4 register entry:

| H=Y item | Classification | §16.4 entry | Status |
|----------|---------------|-------------|--------|
| FR-002 | PARTIAL | H-07 | ✓ |
| FR-003 | PARTIAL (reclassified v2.8.0) | H-16 | ✓ |
| FR-030 | DEFERRED-v2 | H-01 | ✓ |
| FR-031 | DEFERRED-v2 | H-01, H-03 | ✓ |
| FR-032 | PARTIAL | H-01, H-03 | ✓ |
| FR-034 | PARTIAL | H-08 | ✓ |
| FR-048 | PARTIAL | H-09 | ✓ |
| FR-059 | PARTIAL | H-10 | ✓ |
| FR-063 | PARTIAL | H-11 | ✓ |
| FR-082 | DEFERRED-v2 | H-02 | ✓ |
| FR-086 | DEFERRED-v2 | H-02 | ✓ |
| FR-103 | PARTIAL | H-12 | ✓ |
| FR-124 | PARTIAL | H-13 | ✓ |
| FR-128 | PARTIAL | H-04 | ✓ |
| FR-132 | IN-v1 (H?=Y) | H-15 | ✓ |
| NFR-001 | PARTIAL | H-02, H-04 | ✓ |
| NFR-002 | PARTIAL | H-02, H-06 | ✓ |
| NFR-003 | DEFERRED-v2 | H-01, H-03 | ✓ |
| NFR-024 | PARTIAL | H-14 | ✓ |

Total H=Y items at v2.8.0: 15 FRs + 4 NFRs = 19. All 19 covered by H-01..H-16. Zero gaps.

---

## 7. Verdict and routing

**Verdict: FAIL**
**Score: 97%** — above the 95% floor, but 1 Medium issue (ISS-01) prevents PASS. The pass
bar requires score ≥ 95% AND zero Critical/High/Medium issues.

**Route to:** product-owner (Priya Raghunathan) for rework.

**Required fixes before Cycle 2:**

1. **ISS-01 (Medium — must fix):** Update the §16.3.1 FR tally line to reflect v2.8.0
   additions (FR-001..FR-133, 131 active, IN-v1 107, PARTIAL 20).
2. **ISS-02 (Low — should fix):** Update §11 heading label from "Counts (v2.6.0)" to
   "Counts (v2.8.0)".
3. **ISS-03 (Low — should fix):** Update §16 Source block architect-alignment citation
   from "Doc 03 v2.4.0" to "Doc 03 v2.4.1 (Approved)".

**Version bump required:** At minimum a patch bump (v2.8.1) for Low-only polish; ISS-01 is
Medium → at minimum a **minor bump (v2.9.0)** per the review-loop convention. Set
`Status: In Review` on the new version.

---

*Review performed 2026-08-23 by technical-writer (neutral reviewer, not the document owner).*
*Report filed: `artifacts/reviews/02-requirements-srs-v2.8.0-business-cycle1.md`.*
