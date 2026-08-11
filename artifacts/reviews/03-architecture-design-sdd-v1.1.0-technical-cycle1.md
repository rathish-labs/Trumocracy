# Document Review Report — 03 Architecture & Design (SDD) v1.1.0

> Produced by the **document-review** skill. Reviewer: **engineer** (neutral — does not own Doc 03; the architect owns it). This report scores and lists issues only; it does not edit the document.

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 1.1.0
Review mode: technical
Reviewer role: engineer (neutral — architect is the document owner)
Score: 91%
Critical: 0
High: 0
Medium: 3
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v1.1.0 is a substantive improvement over v1.0.0. All ten findings from cycle 1 (3C/3H/4M) are genuinely addressed: the snapshot-root binding is specified, the fork-initiation state machine is designed, the attester operator field exists, the Governor.execute tier-action binding is present, the §5.3 "complete list" claim is corrected, the identityCommitment cross-context linkability is stated explicitly, the entrypoint signals table is corrected and extended, §9 now carries the required CI topology, the growth-sample debt entry correctly names the liveness ceiling, and the residency-root freshness constraint is stated. The new content (ADR-015..018, DES-064..086, RISK-22..24, §18 contradiction record, ADR-003 amendment) is coherent and adds the coverage the tester's RTM gap-log required. The document **FAILS** cycle 1 for three medium issues: (1) the `vote()` public signals list omits `snapshotAt` while the MUST check that closes ISS-C1 requires it to be verified on-chain; (2) §10.3 and DES-078 state different values for the interactive performance target; and (3) DES-068 does not specify whether the tenure waiver applies to members whose clock was reset by a party switch (FR-064), a behavior the mandated composition test TC-3309 depends on.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`91%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (3 medium)
- **Verdict:** `FAIL`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 93 | 18.6 | All 12 new Must FRs (FR-062..073) have DES elements; RISK-22..24 in §11; all 26 §11 rows cover the right requirement rows. |
| T2 Soundness | 20 | 88 | 17.6 | ADRs 015..018 are well-argued with rejected alternatives; ADR-003 amendment is coherent; §18 OI-13 contradiction record is correctly framed. ISS-02 (§10.3 vs DES-078 performance budget discrepancy) is a correctness defect. |
| T3 Traceability & IDs | 20 | 93 | 18.6 | DES-064..086 all present and linked to their FR/NFR; DES-040 Satisfies column correctly extended for FR-060; ADR-003 and ADR-016 cross-referenced. |
| T4 Security & failure modes | 15 | 93 | 13.95 | §10.1 STRIDE extended with EoP (Governor.execute) and attester-impersonation rows; §10.2 explicitly names identityCommitment linkage; §11 covers RISK-22..24; §18 honest on OI-13. |
| T5 Completeness & testability | 15 | 86 | 12.9 | §9 CI topology is now complete; §14 test hooks updated. ISS-01 (snapshotAt omitted from vote() signals) leaves a security-critical check mechanically underspecified. ISS-03 (DES-068 party-switcher gap) means TC-3309's expected result has no design basis. |
| T6 Convention compliance | 10 | 90 | 9.0 | Header, semver, ISO-8601, named owners correct. ISS-04: §10.3–10.9 performance and cost budgets stated as bare assertions where MUST/SHOULD would make them testable (pre-existing ISS-L2 from cycle 1, not addressed in the architect's v1.1.0 fix list). |
| **Total** | **100** | — | **91.05 → 91%** | |

---

## 4. Issues

### Verification of cycle 1 findings (all ten)

| Cycle-1 ID | Finding | Verdict |
|---|---|---|
| ISS-C1 | Proposal snapshot not designed | **FIXED** — `snapshotRoot` in §5.3 Governor struct; vote() MUST check `snapshotRoot == proposal.snapshotRoot`; DES-019 updated. One residual gap noted as ISS-01 below. |
| ISS-C2 | Fork initiation has no on-chain mechanism | **FIXED** — `forkPetitions` and `forkInitiators` maps in §5.3; `openForkPetition` in §5.4; §5.6 state model updated; DES-034 updated. |
| ISS-C3 | Attester has no operator identity | **FIXED** — `operator` field in §5.3 attesters struct; `attesterAuthorised` map; §5.4 note `caller == attester.operator`; §10.1 STRIDE row added. |
| ISS-H1 | No STRIDE row for Governor.execute; no tier↔action binding | **FIXED** — EoP STRIDE row in §10.1; `permittedActionClass` in proposals struct; DES-016 updated; CI assertion noted. |
| ISS-H2 | §5.3 "complete list" claim materially false | **FIXED** — Changed to "normative on-chain fields"; all missing fields added including `credentialClass`, `operator`, `recoveries`, `isInRecovery`, `authorisedSpender`, `spenderAuthoriser`, `knownRoot`, `forkPetitions`, `forkInitiators`, and all Party/Governor fields that were absent. |
| ISS-H3 | Cross-context identityCommitment linkability not addressed | **FIXED** — §10.2 has explicit "IdentityCommitment linkage — stated explicitly (ISS-H3)" paragraph; glossary updated; §10.1 Info STRIDE row added; §18 records OI-13 consequence. |
| ISS-M1 | Entrypoint table stale and incomplete | **FIXED** — `enrol` corrected to 4 signals (added `namespaceId`); `withdrawEndorsement`, `leave`, `openForkPetition` added; `vote()` signals corrected. |
| ISS-M2 | §9 lacks repo structure and CI topology | **FIXED** — §9 now carries full directory structure, dependency rule, branch model, and complete CI topology. |
| ISS-M3 | Growth-sample debt entry understates liveness ceiling | **FIXED** — §13 now reads "liveness ceiling, not just cost: joins become impossible at the cap" with severity "High — liveness blocker at cap". |
| ISS-M4 | Residency-root freshness unspecified | **FIXED** — §5.4 states "A residency root MUST remain acceptable for at least 15 minutes after insertion" with ring-sizing policy. |

### New issues in v1.1.0

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Medium | T5 | §5.4, `vote()` row | The MUST check states "MUST check `snapshotRoot == proposal.snapshotRoot` AND `snapshotAt == proposal.createdAt`". The public signals list for `vote()` is `[snapshotRoot, tenure, scope, Nₐ]` — it does not include `snapshotAt`. For the on-chain contract to check `snapshotAt == proposal.createdAt`, `snapshotAt` must be a public signal. Without it appearing in the signal list, the binding mechanism is underspecified and an engineer reading §5.4 alone cannot implement the check. (The snapshotRoot binding — the core of the ISS-C1 fix — is correct; this is a residual gap in the second binding.) | Add `snapshotAt` to the `vote()` public signals list (e.g. `[snapshotRoot, snapshotAt, tenure, scope, Nₐ]`), or explicitly state that `snapshotAt` is verified inside the circuit against a committed `proposal.createdAt` value and explain the on-chain verification path. |
| ISS-02 | Medium | T2 | §10.3 vs DES-078 | §10.3 states the interactive performance target as "interactive < 3 s on 4× throttled mid-range Android over Slow 4G" (no percentile). DES-078 states "p95 interactive ≤ 5 s on 4× throttled mid-range Android over Slow 4G". These are different values for the same constraint — an engineer reading §10.3 targets 3 s while DES-078 says 5 s p95. Similarly, §10.3 adds "proof ≤ 4 s typical" which DES-078 does not state; DES-078 adds "finalisation on-chain ≤ 120 s p95" which §10.3 omits. | Align §10.3 with DES-078 (DES-078 is the normative design element). Reconcile the values, add percentile annotations, and either incorporate or explicitly defer the §10.3-only figures. |
| ISS-03 | Medium | T5 | §5.2 DES-068 | DES-068 specifies the tenure waiver as "waives one-month tenure check only; FR-023 surge defence + FR-028 snapshot remain active" without distinguishing between founding members and members who reset their tenure clock via a party switch (FR-064). The mandated composition test TC-3309 asserts that "FR-068 waiver is inapplicable because the tenure clock reset to 0 on party switch" — asserting that the waiver does NOT apply to party-switchers. This behavior is not specified in DES-068. An engineer and tester reading DES-068 alone would likely reach the opposite conclusion (waiver waives the one-month check for all members of the party, regardless of how they arrived). | Add a sentence to DES-068 explicitly stating whether the waiver applies to members whose tenure clock was reset by a party switch under FR-064. If the correct behavior is that the waiver applies only to members who did not switch parties, state that restriction. |
| ISS-04 | Low | T6 | §10.3–§10.9 | RFC 2119 keywords are absent from the performance (§10.3), scalability (§10.4), reliability (§10.5), observability (§10.6), and cost (§10.9) sections, which state budgets and properties as bare assertions. This was ISS-L2 in cycle 1 and is not addressed in the v1.1.0 changelog. The pre-existing ISS-L3 (§15 "forward-looking statement") was already correct in v1.0.0. | Prefix each measurable budget or invariant in §10.3–10.9 with MUST/SHOULD/MAY as appropriate to make them testable constraints rather than prose assertions. |

---

## 5. Routing instruction

**FAIL.** Route to the **architect** (owner, Ravi Deshmukh) for v1.1.1. Three medium issues to fix:

1. Add `snapshotAt` to the `vote()` public signals list (ISS-01).
2. Reconcile §10.3 performance budget with DES-078 (ISS-02).
3. Specify in DES-068 whether the tenure waiver applies to party-switchers whose clock was reset by FR-064 (ISS-03).

The rework MUST produce a new version (bump `Version:` semver to at least 1.1.1, set `Status: In Review`). This loop re-reviews after the new version is produced.

**What must be preserved:** All ten cycle-1 fixes are genuine and correct — do not remove or weaken them. The §18 OI-13 contradiction record, DES-064..086, ADR-015..018, and the RISK-22..24 failure-mode rows are all correctly done.
