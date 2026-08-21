# Document Review — Doc 03 Architecture / SDD v2.1.3 (Technical, Cycle 2)

```
Reviewed document: 03-architecture-design-sdd.md
Document version:  2.1.3
Review mode:       technical
document:       docs/03-architecture-design-sdd.md
version:        2.1.3
mode:           technical
cycle:          2
reviewer:       Samuel Oyelaran (engineer) — neutral reviewer assigned by coordinator
date:           2026-08-20
score:          100
critical:       0
high:           0
medium:         0
low:            0
verdict:        PASS
```

---

## 1. Assignment scope

This cycle-2 review covers Doc 03 v2.1.3 — the architect's rework addressing all four
issues raised in cycle 1 (v2.1.2). Each fix is verified individually below. A regression
check for new inconsistencies was also run.

Reviewer constraint: score and list only; no edits to any document under review; no product
code.

---

## 2. Scoring rubric

| Severity | Deduction |
|---|---|
| Critical | −10 |
| High | −7 |
| Medium | −2 |
| Low | −0.5 |

Starting score: 100. Deductions: 0 → **100%**.

Pass bar: score ≥ 95% AND zero critical/high/medium issues. Low issues are allowed.

---

## 3. Diff-scope check

The full diff from HEAD (v2.1.1) to working tree (v2.1.3) was reviewed
(`git diff HEAD -- docs/03-architecture-design-sdd.md`). Changes fall into two layers:

**Layer A — carried from v2.1.2 (already reviewed, no regression):**
- Header block: Source v2.2.0→v2.3.0, v2.1.2 changelog entry, Last updated.
- §12 lead sentence: "twenty" → "twenty-one" (corrected here in v2.1.3 — see §3 ISS-01).
- §12: ADR-021 row added.
- §16: next-increment scope note extended to FR-121..FR-128 and OI-19/OI-20.

**Layer B — new in v2.1.3 (the four ISS fixes):**
- Header block: version 2.1.1→2.1.3; v2.1.3 changelog entry added (first in log).
- Preamble: "twenty…ADR-001..ADR-020" → "twenty-one…ADR-001..ADR-021".
- §1.1: SRS version and counts updated.
- §12 ADR-016 and ADR-017 rows: amendment notes added.

**ADR-021** (`docs/adr/ADR-021-verification-gates-counting.md`): untracked new file; diff
against HEAD is inapplicable. Current file content verified by direct read. The only change
from cycle-1 content: the former "Decision 4 — Two rejected designs, recorded with rationale"
section heading was replaced with the standalone "## Alternatives rejected" section heading.
All prose content within that section is unchanged.

No other lines changed in Doc 03 or ADR-021. ✓

---

## 4. Per-ISS verification

### ISS-01 (MEDIUM) — Preamble ADR count and range stale

**Claimed fix:** Preamble updated to "twenty-one decision records in
`docs/adr/ADR-001..ADR-021`."

**Verification:**

Preamble (post-changelog block) now reads:
> "The **twenty-one** decision records in `docs/adr/ADR-001..ADR-021` are normative and are
> summarised in §12; where this document and an ADR disagree, the ADR wins and this document
> is the defect."

Count and range match §12's "Status of all **twenty-one** ADRs: **Accepted**." Consistent. ✓

**ISS-01: CONFIRMED FIXED. ✓**

---

### ISS-02 (MEDIUM) — §1.1 body cites SRS v2.2.0 counts; Source field says v2.3.0

**Claimed fix:** §1.1 updated to cite SRS v2.3.0 with updated counts.

**Verification:**

§1.1 now reads:
> "The SRS **v2.3.0** defines **21** `BR`, **128** `FR` (**126** active + 2 superseded;
> **109** Must), **28** `NFR` (**24** Must), **15** `CON`, and **27** `RISK`."

Cross-checked against Doc 02 v2.3.0 §11 reference counts (21 BR / 128 FR / 126 active /
109 Must / 28 NFR / 24 Must / 15 CON / 27 RISK, sourced from the product-owner
v2.3.0 session record in `artifacts/memory-index.json` entry
`product-owner-2026-08-20T1200`):

| Metric | Reference (Doc 02 v2.3.0 §11) | SDD §1.1 now | Match |
|---|---|---|---|
| BR | 21 | 21 | ✓ |
| FR minted | 128 | 128 | ✓ |
| FR active | 126 | 126 | ✓ |
| FR superseded | 2 | 2 | ✓ |
| FR Must | 109 | 109 | ✓ |
| NFR total | 28 | 28 | ✓ |
| NFR Must | 24 | 24 | ✓ |
| CON | 15 | 15 | ✓ |
| RISK | 27 | 27 | ✓ |

All nine counts match exactly. The arithmetic is consistent: v2.2.0 had 101 Must FR; v2.3.0
adds FR-121..FR-128 (all 8 are Must per SRS v2.3.0 §4.40–§4.42), giving 109. CON count
increases by 1 (CON-015 added). No BRs, NFRs, or RISKs were added. ✓

**ISS-02: CONFIRMED FIXED. ✓**

---

### ISS-03 (LOW) — §12 ADR-016 and ADR-017 rows missing 2026-08-20 amendment notes

**Claimed fix:** Amendment notes added to §12 rows for ADR-016 and ADR-017.

**Verification:**

§12 ADR-016 row now reads:
> "| 016 | Government eID sole enrolment-nullifier class per region (Phase 1); amends ADR-003;
> **amended 2026-08-20 (Phase-1 pilot rail named: India/Aadhaar offline KYC; OI-04-PILOT
> closed — ADR-021)** | accepted exclusion: no-doc citizens cannot enrol Phase 1; state
> compulsion risk concentrated (ADR-016) |"

Amendment note present and accurate — matches the ADR-016 header amendment line exactly. ✓

§12 ADR-017 row now reads:
> "| 017 | Deterministic in-circuit nullifier derivation + pluggable credential adapter
> interface; **amended by ADR-020 (post-registration lifecycle)**; **amended 2026-08-20
> (Phase-1 first-production adapter named: India/Aadhaar offline KYC, class (c);
> OI-04-PILOT closed — ADR-021)** | per-class circuit development cost; trust-list
> freshness operational dependency (ADR-017) |"

Amendment note present and accurate — matches the ADR-017 header amendment line exactly.
Both earlier (ADR-020) and current (2026-08-20 pilot rail) amendments are now noted. ✓

Consistent with the convention in ADR-019 and ADR-020 rows (established by ISS-04 in
v2.1.1). ✓

**ISS-03: CONFIRMED FIXED. ✓**

---

### ISS-04 (LOW) — ADR-021 missing standalone "Alternatives rejected" section

**Claimed fix:** "Decision 4" section retitled to "## Alternatives rejected"; content
unchanged.

**Verification:**

ADR-021 now has:
```
## Alternatives rejected

Both alternatives below are **considered-and-rejected**. They are recorded here so future
contributors do not re-propose them as oversights or address them as unresolved gaps.
```

Followed by the two rejected-design subsections (persistent referral graph; storing
identity data even encrypted), both with the same prose content as reviewed at cycle 1.
Structure is now consistent with ADR-016 and ADR-017 conventions. ✓

Content consistency check:
- Rejected referral graph: rationale cites FR-105, FR-111, and "sacred user space" — unchanged. ✓
- Rejected encrypted identity registry: subpoena-test rationale unchanged. ✓
- The constraint "referral edge is verified then discarded, never stored" — unchanged. ✓
- OI-19 neutrality note preserved ("this ADR records the Decision 4 rejection of the
  *persistent* referral graph, not a judgment on OI-19") — the internal reference to
  "Decision 4" remains and is traceable to `DECISIONS-2026-08-20-PILOT-VERIFICATION.md`
  Decision 4 (the external decision record), not the ADR section heading; this is accurate
  and creates no ambiguity. ✓

**ISS-04: CONFIRMED FIXED. ✓**

---

## 5. Regression checks

### 5a. Changelog entry

v2.1.3 changelog entry is the first entry in the log and accurately describes all four
fixes: ISS-01 (preamble), ISS-02 (§1.1), ISS-03 (§12 ADR-016/017), ISS-04 (ADR-021
section retitle). The entry is complete and accurate. ✓

### 5b. Version and status header

`Version: 2.1.3` and `Status: In Review` — correct for a document in the review loop. ✓

### 5c. No spurious content changes

The diff contains exactly the four ISS fixes plus the v2.1.2 layer carried forward.
No design content, DES elements, §5–§11, §13–§18 sections, or any other section was
altered. The diff scope is clean. ✓

### 5d. ADR-021 substantive content unchanged

The only change to ADR-021 is the section heading replacement. All decision bodies
(Decisions 1–3, Context, Open tensions, DES coverage note, Consequences), all Traces,
and all prose content in the Alternatives rejected section are identical to the content
verified as sound at cycle 1. ✓

### 5e. §1.1 counts internal arithmetic consistency

128 total − 2 superseded = 126 active. 126 active with 109 Must implies 17 Should/Could
active FRs — consistent with SRS v2.3.0 structure (v2.2.0 had 118 active / 101 Must =
17 Should/Could; v2.3.0 adds 8 new Must FRs, keeping the Should/Could count at 17). ✓

---

## 6. Summary

| ISS | Severity | Description | Status |
|---|---|---|---|
| ISS-01 | MEDIUM | Preamble "twenty…ADR-001..ADR-020" stale | CONFIRMED FIXED ✓ |
| ISS-02 | MEDIUM | §1.1 SRS version/count inconsistency | CONFIRMED FIXED ✓ |
| ISS-03 | LOW | §12 ADR-016/ADR-017 amendment notes missing | CONFIRMED FIXED ✓ |
| ISS-04 | LOW | ADR-021 missing standalone Alternatives-rejected section | CONFIRMED FIXED ✓ |
| Changelog regression | — | v2.1.3 entry first, accurate | NO REGRESSION ✓ |
| Header regression | — | Version 2.1.3, Status In Review | NO REGRESSION ✓ |
| Diff-scope check | — | Four fixes + v2.1.2 layer only; no spurious changes | CLEAN ✓ |
| ADR-021 content regression | — | Section retitle only; all substantive content unchanged | NO REGRESSION ✓ |
| New issues found | — | — | NONE |

---

## 7. Verdict

**Score: 100% — PASS**

All four cycle-1 issues are confirmed fixed. No new issues were introduced. The document is
internally consistent across all four fix locations and shows no regression against the
cycle-1 baseline or the v2.1.2 changes already reviewed. Per the review-and-rework loop
protocol, the owning role (Ravi Deshmukh, Principal Architect) may set `Status: Approved`
on Doc 03 v2.1.3 and the SOP advances.
