Reviewed document: 07-test-cases-suites.md
Document version: 2.3.2
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester owns Doc 07)
Score: 100%
Critical: 0
High: 0
Medium: 0
Low: 0
Cycle: 2 of 5
Verdict: PASS

---

# Document Review — Doc 07 Test Cases & Suites v2.3.2
**Technical mode · Cycle 2 of 5**
**Date:** 2026-08-29
**Reviewer:** reviewer-qa (neutral — Ji-woo Park / tester owns Doc 07)
**Cycle history:** v2.3.0 PASS 98% (0C/0H/0M/2L, cycle 1); v2.3.1 absorbed both Lows
  plus four TC-3508..TC-3510 accuracy corrections (not reviewed separately — superseded
  by v2.3.2 before its cycle ran); v2.3.2 is this cycle's subject.
**npm test citation:** 542/542 green (95/126/220/14/16/71) — documents-only change
over unchanged code (last verified at v2.3.1, §9 R-14); re-run not required.
**Report file:** artifacts/reviews/07-test-cases-suites-v2.3.2-technical-cycle2.md

---

## 1. Scope of this cycle

v2.3.2 is an upstream refresh for Doc 03 v2.8.2/v2.8.3 and the PREREQ-01 approver ruling.
Three distinct tasks:
1. Source pin SDD v2.8.1 → v2.8.3 (adds §10.13.10.1)
2. TC-3541 minted — adversarial amendment case, classified No mechanism
3. TC-3403 reason note updated; TC-3508..TC-3510 note section updated (v2.3.2 addendum)
4. Count arithmetic updated throughout

All TC statuses are explicitly stated as unchanged.

---

## 2. Issue table

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| — | — | — | — | No issues found | — |

---

## 3. Per-criterion scores and findings

### T1 — Requirement coverage (20/20)

FR-077's amendment half is now represented by TC-3541 (No mechanism). All other FRs
unchanged from v2.3.1. Score: **20/20**.

### T2 — Soundness (20/20)

#### (a) TC-3508..TC-3510 accuracy — verified against source

**party.js lines 363–380 (read directly):**
```
const nvClause = draft?.charter?.nonViolenceClause;
if (nvClause == null || nvClause === '') {
  errors.push({ field: 'charter.nonViolenceClause', code: 'REQUIRED', message: '...' });
} else if (nvClause !== NON_VIOLENCE_CLAUSE) {
  errors.push({ field: 'charter.nonViolenceClause', code: 'ALTERED', message: '...' });
}
return { valid: errors.length === 0, errors };
```

**party-creation.test.js (read directly):**
- UT-0072: `delete draft.charter.nonViolenceClause` → asserts `field === 'charter.nonViolenceClause' && code === 'REQUIRED'`
- UT-0073: `nonViolenceClause: null` → asserts `field === 'charter.nonViolenceClause' && code === 'REQUIRED'`
- UT-0074: materially rewritten clause → asserts `field === 'charter.nonViolenceClause' && code === 'ALTERED'`
- UT-0075: one-character alteration → asserts `code === 'ALTERED'`

**TC-3509 states:** "Both variants return `valid: false` and push an error object `{ field: 'charter.nonViolenceClause', code: 'ALTERED', message }`" → matches UT-0074/UT-0075. ✓

**TC-3510 states:** "Protocol: both return `valid: false` with an error `{ field: 'charter.nonViolenceClause', code: 'REQUIRED', message }`" → matches UT-0072/UT-0073. ✓

**Return shape:** `{ valid: errors.length === 0, errors }` → TC-3510 says `{ valid: false, errors: [...] }`. ✓

**Source path:** TC-3510 cites `packages/protocol/test/party-creation.test.js`. ✓ (`clauses.js` corrected at v2.3.1 — not present in v2.3.2 diff, confirmed absent.)

**Field name:** `charter.nonViolenceClause`. ✓ (`charter.clause_nonviolence` corrected at v2.3.1.)

**No TC status changed** — confirmed in diff. TC-3508..TC-3510 remain Pass (inh.). ✓

#### (b) TC-3541 classification — independent verdict: NO MECHANISM (correct)

TC-3541 is classified "No mechanism" (not "Blocked"). The tester's argument: "The instrument
exists and the case is executable today — it would FAIL — so the defect is against the
REQUIREMENT, not against the case (§0.1 vocabulary)."

This is the interesting classification call, and it is **correct**. The distinction matters:

- **"Blocked"** = test instrument (EVM harness, circuit, environment) is absent. The test
  cannot run at all.
- **"No mechanism"** = the product has nothing to test. The test CAN run; the product has
  no mechanism to verify against.

For TC-3541: the EVM harness EXISTS and is green today (contracts suite 95/95 confirmed).
A test calling `Party.amendCharter(otherClauseId, strippedHash, strippedCID)` and asserting
refusal is writable and executable right now. It would FAIL because `amendCharter` has no
clause-verification logic (confirmed: checks only governor + `immutableClause[clauseId]`,
assigns `charter.charterHash`/`charterCID` wholesale, never sees charter text). The failure
is a defect against the PRODUCT, not against the INSTRUMENT.

"Blocked" would be wrong here — Blocked implies the instrument is unavailable. The EVM
harness is fully operational. The classification "No mechanism" is accurate. ✓

The additional rationale — that PREREQ-01's exit criterion must be a first-class case in the
suite (not just a design-document description) — is sound governance reasoning. The test is
minted pre-passage intentionally; its value is precisely that it fails today. ✓

#### (c) Count arithmetic — verified

| Measure | v2.3.1 | v2.3.2 | Change | Check |
|---------|--------|--------|--------|-------|
| TS-PARTY cases | 28 | 29 (+TC-3541) | +1 | ✓ |
| Total (expanded row count) | 442 | 443 | +1 | ✓ |
| Automated | 211 | 211 | 0 (TC-3541 not automated) | ✓ |
| Blocked-or-no-mechanism | 231 | 232 | +1 (TC-3541 = No mech) | ✓ |
| Anchors | 440 | 441 | +1 (TS-PARTY 28→29) | ✓ |
| Expanded (441−1+10) | 449 | 450 | +1 | ✓ |
| §10 No mechanism | 48 | 49 | +1 (TC-3541) | ✓ |

All arithmetic correct and internally consistent. ✓

#### Other items verified

- Source pin SDD: v2.8.1 → v2.8.3 (adds §10.13.10.1 to the cited sections). ✓
- TS-PARTY DES coverage: DES-101 added to suite's FR/DES list. ✓
- TC-3403 reason note: updated from "undesigned" to "designed-and-unbuilt", citing
  §10.13.10.1 and TC-3541, stating PREREQ-01 governs WHEN the fix lands. ✓
- No suite re-run: correctly noted as documents-only change over unchanged code. ✓
- TC-3541 TC column range: "TC-3489–TC-3516, TC-3541" — TC-3541 is the next free ID after
  TC-3540 (TS-MEMBERSHIP ends at TC-3540). ✓

Score: **20/20**.

### T3 — Traceability & IDs (20/20)

TC-3541 traces: US-0087, FR-077, CON-013, DES-101 §10.13.10.1 (rules 1–3, 6), ADR-010.
All trace IDs are real and relevant. PREREQ-01 correctly referenced as the approver ruling.
TC-3541 is linked back in TC-3403's reason note. Forward reference to Doc 08 gap-log noted
in TC-3541's status. Score: **20/20**.

### T4 — Security & failure modes (15/15)

TC-3541's design description accurately names both failure modes (structural: whole-document
hash replacement via any mutable clause; direct: non-violence clauseId not platform-mandated).
Security context: "Not exploitable in v1 — v1 runs no on-chain governance (ADR-024 §(b))."
Reviewer-qa's independent confirmation cited. Score: **15/15**.

### T5 — Completeness & testability (15/15)

TC-3541 specifies two concrete preconditions (structural and direct failure modes), a clear
expected result (amendment refused), and an honest automation status (designed, not automatable
yet — executable and would fail). The case is complete and testable once the mechanism is
built. Score: **15/15**.

### T6 — Convention compliance (10/10)

ISO-8601 dates. PREREQ-01 and ruling attribution consistent. House style maintained. Count
convention note updated in both the §2 footer and the §10 table. Score: **10/10**.

---

## 4. Weighted score

| Criterion | Weight | Score | Weighted |
|-----------|--------|-------|---------|
| T1 Requirement coverage | 20% | 100 | 20.0 |
| T2 Soundness | 20% | 100 | 20.0 |
| T3 Traceability & IDs | 20% | 100 | 20.0 |
| T4 Security & failure modes | 15% | 100 | 15.0 |
| T5 Completeness & testability | 15% | 100 | 15.0 |
| T6 Convention compliance | 10% | 100 | 10.0 |
| **Total** | **100%** | | **100.0** |

**Score: 100% · 0 Critical · 0 High · 0 Medium · 0 Low**

---

## 5. Independent position on TC-3541 classification

The "No mechanism" classification is correct. The EVM test harness is operational and the
adversarial case is executable today. The test would fail because `Party.amendCharter` assigns
`charter.charterHash`/`charter.charterCID` wholesale without clause verification — a confirmed
code fact, not a document claim. A failing test against a live product hole is a product
defect, not an instrument gap. "Blocked" is reserved for cases where the instrument itself
is absent; that is not the situation here. The tester's reasoning at §0.1 is applied
correctly.

The decision to mint TC-3541 before it can pass is also sound: PREREQ-01's exit criterion
must exist in the test suite to be traceable and governable. An exit criterion that exists
only in a design document (Doc 03 §10.13.10.1 rule 6) is untracked — the suite is the
authority on what must pass for a gate to clear.

---

## 6. Verdict and routing

**PASS — 100%, 0C/0H/0M/0L.**

Routing instruction: Ji-woo Park (tester) sets Doc 07 v2.3.2 `Status: Approved`.
TC-3541 stays No mechanism until PREREQ-01 is built and the clause-map refactor lands.
