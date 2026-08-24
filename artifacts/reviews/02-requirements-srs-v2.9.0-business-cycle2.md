# Document Review — Doc 02 Requirements SRS v2.9.0

```
Reviewed document: 02-requirements-srs.md
Document version: 2.9.0
Review mode: business
Reviewer role: technical-writer (neutral reviewer — not the document owner)
Score: 98%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Review scope

**Document owner:** Priya Raghunathan (Product Owner). Reviewer (technical-writer) is NOT the owner.

**Claimed fixes from v2.8.0 Cycle-1 (verified below):**
- ISS-01 (Medium): §16.3.1 FR tally line corrected to FR-001..FR-133, 131 active, IN-v1 107, PARTIAL 20, DEFERRED-v2 4, SUPERSEDED-n/a 2
- ISS-02 (Low): §11 heading label corrected from "Counts (v2.6.0)" to "Counts (v2.9.0)"
- ISS-03 (Low): §16 Source block corrected from "Doc 03 v2.4.0" to "Doc 03 v2.4.1 (Approved)"

**Sections read for this cycle:** header + changelog (v2.9.0 delta); §11 counts line and Must table; §16.1 Source block (ISS-03 location); §16.3.1 classification table and tally line (ISS-01 location); independent row count of classification table.

---

## 2. Fix verification

### ISS-01 fix — §16.3.1 FR tally line

**Claimed fix:** "FR-001..FR-133, 131 active — IN-v1 107, PARTIAL 20, DEFERRED-v2 4, SUPERSEDED-n/a 2"

**Verified at location:** §16.3.1, tally line immediately after NFR-028 row:
> `**Tally — FRs (FR-001..FR-133, excluding superseded):** 131 active FRs classified: **IN-v1 107** · **PARTIAL 20** · **DEFERRED-v2 4** · **SUPERSEDED-n/a 2** (FR-046, FR-062).`

**Independent arithmetic check (row count, not trusting the claim):**
- Rows matching `| FR-### | … | IN-v1 |` in §16.3.1: **107** ✓
- Rows matching `| FR-### | … | PARTIAL |` in §16.3.1: **20** ✓
- Rows matching `| FR-### | … | DEFERRED-v2 |` in §16.3.1: **4** ✓
- SUPERSEDED-n/a: FR-046, FR-062 = **2** ✓
- Active total: 107 + 20 + 4 = **131** ✓
- Minted total: 131 + 2 = **133** ✓

**ISS-01: RESOLVED** ✓

NFR tally (unchanged — no new NFRs in v2.8.0 or v2.9.0): IN-v1 24 · PARTIAL 3 · DEFERRED-v2 1 = 28 NFRs ✓

### ISS-02 fix — §11 heading label

**Claimed fix:** label updated to "Counts (v2.9.0)"

**Verified at location:** §11 body, first bold line:
> `**Counts (v2.9.0).** 21 BR · 131 FR minted (129 active + 2 superseded: FR-046, FR-062) · …`

**Label "v2.9.0":** RESOLVED ✓

**However — a residual error in the same line (new finding ISS-A):** The minted FR count in this line reads "131 FR minted (129 active + 2 superseded)." The independent row count confirms: at v2.9.0 there are 133 FR minted (131 active + 2 superseded). The correct figure has been in the §16.3.1 tally since the ISS-01 fix (which now correctly says 131 active = 133 minted). The §11 header line was not corrected when FR-132 and FR-133 were added at v2.8.0, and the v2.9.0 rework updated the label but not the count. The line now says "v2.9.0" with a count that is 2 short, internally contradicting the fixed §16.3.1 tally in the same document.

### ISS-03 fix — §16 Source block Doc 03 version reference

**Claimed fix:** "Doc 03 v2.4.0" → "Doc 03 v2.4.1 (Approved)"

**Verified at location:** §16.1 Source block, architect-alignment sentence:
> `Doc 03 v2.4.1 (Approved) §10.13 (DES-095 amended, DES-099) + ADR-025.`

**ISS-03: RESOLVED** ✓ at the §16 Source block.

**However — two residual instances not in scope of ISS-03 but newly visible (new finding ISS-B):**
- §4.46 rationale note: "Design: DES-095 (v1 backing amended in Doc 03 v2.4.0), ADR-025."
- §4.47 rationale note: "Design: DES-099 (minted by architect, Doc 03 v2.4.0)."

These two rationale annotations were not stale at v2.8.0 creation time (Doc 03 v2.4.0 was the then-current version); they became stale when Doc 03 advanced to v2.4.1. ISS-03's fix was rightly limited to the §16 Source block; these are residual, newly visible once the §16 fix is in place.

---

## 3. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-A | **Medium** | B4 Correctness & consistency | §11 body, first bold line ("Counts (v2.9.0).") | The minted FR count reads "131 FR minted (129 active + 2 superseded: FR-046, FR-062)" but the correct count at v2.9.0 is 133 FR minted (131 active + 2 superseded). Independently confirmed: the §16.3.1 tally (now correctly fixed by ISS-01) shows 131 active FRs, and 131 + 2 superseded = 133 minted. The §11 header line was not updated when FR-132 and FR-133 were added at v2.8.0, and the v2.9.0 rework corrected only the version label. The two sections now directly contradict each other. | Update the line to: "133 FR minted (131 active + 2 superseded: FR-046, FR-062)". |
| ISS-B | Low | B3 Traceability & IDs | §4.46 rationale note; §4.47 rationale note | Both FR rationale source annotations cite "Doc 03 v2.4.0" for DES-095 (amended) and DES-099. Doc 03 is at v2.4.1 (Approved). ISS-03 was fixed only in the §16 Source block; these two inline rationale citations were not in scope of the fix and now carry a stale version reference. | Update both annotations from "Doc 03 v2.4.0" to "Doc 03 v2.4.1 (Approved)". |

---

## 4. Per-criterion scores

| Criterion | Weight | Score | Weighted | Notes |
|-----------|--------|-------|---------|-------|
| B1 Outcome & problem clarity | 20% | 100 | 20.0 | No change from cycle 1; FR-132/FR-133 honest framing intact |
| B2 Completeness | 15% | 97 | 14.55 | ISS-01 fix resolves the classification tally gap; ISS-A introduces a contradictory minted count in §11 header |
| B3 Traceability & IDs | 20% | 99 | 19.8 | ISS-03 resolved in §16; two residual §4.46/§4.47 annotations carry stale Doc 03 v2.4.0 reference (ISS-B Low) |
| B4 Correctness & consistency | 15% | 90 | 13.5 | §11 header "131 FR minted/129 active" contradicts §16.3.1 tally "131 active/133 minted" (ISS-A Medium) |
| B5 Testability | 15% | 100 | 15.0 | Unchanged; Gherkin and verify-by intact |
| B6 Convention compliance | 15% | 100 | 15.0 | §11 label now "v2.9.0" ✓; RFC 2119 compliant; named owners correct |
| **Total** | **100%** | — | **97.85%** | Rounded to **98%** |

---

## 5. Regression check

| Item | Status |
|------|--------|
| ISS-01 fix (§16.3.1 tally): FR-001..FR-133, 131 active, IN-v1 107, PARTIAL 20 | VERIFIED ✓ — independently counted |
| ISS-02 fix (§11 label): "Counts (v2.9.0)" | VERIFIED ✓ |
| ISS-03 fix (§16 Source block): "Doc 03 v2.4.1 (Approved)" | VERIFIED ✓ |
| §16.4 H-01..H-16 intact | VERIFIED ✓ (inherited from v2.7.0/v2.8.0; no changes in v2.9.0) |
| §16.5 T-01..T-07 intact | VERIFIED ✓ |
| FR-132/FR-133 normative text unchanged | VERIFIED ✓ |
| §11 Must count table (114) | VERIFIED ✓ |
| §16 Source block cites both decision records | VERIFIED ✓ |
| NFR tally: IN-v1 24 · PARTIAL 3 · DEFERRED-v2 1 | VERIFIED ✓ — unchanged |
| H? sweep: 19 H=Y items, H-01..H-16 coverage | VERIFIED ✓ — no classification changes in v2.9.0 |

---

## 6. Verdict and routing

**Verdict: FAIL**
**Score: 98%** — above the 95% floor, but ISS-A (Medium) prevents PASS.

**Route to:** product-owner (Priya Raghunathan) for rework.

**Required fixes before Cycle 3:**

1. **ISS-A (Medium — must fix):** Correct §11 header minted count from "131 FR minted (129 active + 2 superseded)" to "133 FR minted (131 active + 2 superseded)".
2. **ISS-B (Low — should fix):** Update §4.46 and §4.47 rationale source annotations from "Doc 03 v2.4.0" to "Doc 03 v2.4.1 (Approved)".

**Version bump required:** ISS-A is Medium → at minimum a **minor bump (v2.10.0)**. Set `Status: In Review`.

After rework, neutral reviewer runs Cycle 3.

---

*Review performed 2026-08-23 by technical-writer (neutral reviewer, not the document owner).*
*Report filed: `artifacts/reviews/02-requirements-srs-v2.9.0-business-cycle2.md`.*
