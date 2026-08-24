# Document Review Report — Doc 03 Architecture & Design SDD v2.4.0 — Technical — Cycle 1

> Produced by the **document-review** skill. Reviewer: **tester (Ji-woo Park)** — PM-assigned
> neutral reviewer. The architect (Ravi Deshmukh) is the document owner and was excluded from
> reviewing their own work. This reviewer scores and lists issues only — it does not edit the
> reviewed document.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.4.0
Review mode: technical
Reviewer role: tester
Score: 94%
Critical: 0
High: 0
Medium: 1
Low: 0
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v2.4.0 (Trumocracy Architecture & Design SDD, author: Ravi Deshmukh, 2026-08-23)
implements the v1 identity backing (phone-based SMS authentication — ADR-025 §(a), DES-095
amendment), the spam-resistance layer (flag-don't-block — ADR-025 §(b), DES-099), T-06/T-07
conflict-table extensions, and the Ruling-3 blockchain ratification note. The increment is
architecturally well-executed: all flag-don't-block semantics are correct and consistent across
FR-133, DES-099, and ADR-025; T-06 and T-07 are honestly surfaced and word-for-word consistent
across the decision record, Doc 02 §16.5, and §10.13.7; ADR count "twenty-five" is internally
consistent; §15 traceability rows are complete and accurate; §1.1 counts match Doc 02 v2.8.0.

One Medium defect is found: the v2.4.0 amendment to §10.13.2 specifies that the v1
`IEligibilityVerifier` backing uses phone-based SMS auth and that `getProperties()` returns
`{ onePersonOneVote: false }`, yet the invariants table immediately below claims "one-person-one-vote
per scope (conventional nullifier record v1)" as an invariant v1 MUST satisfy. This directly
contradicts the method-table return value in the same section, ADR-025 §(a)'s Critical honesty
statement ("Phone verification is a spam speed-bump. It is NOT a proof of unique personhood"),
and T-06's explicit DEFERRED classification of Charter Rule 1 (one human, one vote). The
architect amended the v1 backing specification in v2.4.0 but did not update the invariants row to
accurately reflect the v1 scope. Verdict: **FAIL** (94%, 0C/0H/1M/0L).

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1 Medium issue)
- **Verdict:** `FAIL` — one Medium issue (ISS-01) prevents PASS regardless of score.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | FR-132 and FR-133 both have DES backing (DES-095 amended; DES-099 minted); §15 rows present and accurate; §1.1 counts match Doc 02 v2.8.0 (133 FR / 131 active / 114 Must); ADR-025 traces FR-132/FR-133 correctly; US/TC debt acknowledged in recorded-phasing posture. |
| T2 Soundness | 20 | 96 | 19.2 | ADR-025 architecturally justified; rejected alternatives recorded (email, hard-block, full on-chain governance, no spam resistance); DES-099 flag-don't-block design sound and internally consistent; ratification note for Ruling 3 accurate (composition confirmed at architecture level; T-01..T-07 remain AWAITING APPROVER CONFIRMATION; no overclaim); IS_INSECURE_MOCK() contract unchanged (phone auth is honest conventional backing, not a mock); ADR-024/ADR-025 compose correctly. |
| T3 Traceability & IDs | 20 | 97 | 19.4 | ADR count "twenty-five" consistent in preamble, §12 header, and §12 table (25 rows); ADR-025 row present in §12 with correct decision and consequence summary; ADR-024 consequence row updated (T-01..T-07); §15 DES-095 amendment row (FR-132 → Marcus Adeyemi, BR-006/BR-012) and DES-099 row (FR-133 → Rafael Duarte, BR-012/BR-003) correct; Source pin SRS-TRUMOCRACY v2.8.0; §1.1 counts: 133 FR / 131 active / 114 Must verified against Doc 02 v2.8.0 §11. |
| T4 Security & failure modes | 15 | 80 | 12.0 | ISS-01 (Medium): §10.13.2 invariants table claims "one-person-one-vote per scope (conventional nullifier record v1)" as an invariant v1 MUST satisfy, contradicting `getProperties().onePersonOneVote = false` in the same section, ADR-025 §(a) Critical honesty statement, and T-06 DEFERRED classification. See §4. Remainder sound: T-06 and T-07 honest-disclosure framework correct; governance-action blocking rule ("MUST NEVER be denied solely on a fraud flag") stated consistently in DES-099, ADR-025 §(b), and FR-133 Gherkin. |
| T5 Completeness & testability | 15 | 97 | 14.55 | FR-132 Gherkin: 3 scenarios (one-account-per-phone, no one-person-one-vote claim, FR-131 honesty-notice carries caveat). FR-133 Gherkin: 4 scenarios (rate-limit not block; flagged member can do governance actions; flag events absent from public/governance surfaces; hard-block path absence test). ADR-025 §(c) consequences complete and honest (six items: c-i multi-phone Sybil ceiling, c-ii phone-at-rest FR-003 PARTIAL, c-iii vendor dependencies, c-iv SIM-swap/recovery owed, c-v SMS cost vs NFR-005, c-vi no-phone exclusion). SIM-swap recovery DES tracked as owed in ADR-025 §(c-iv) (normative record). |
| T6 Convention compliance | 10 | 97 | 9.7 | Changelog v2.4.0 entry complete and accurate; Status: In Review; Source: SRS-TRUMOCRACY v2.8.0; RFC 2119 keywords consistent; ADR-025 header complete (Status, Date, Owner, Traces, Source); §10.13.7 legend unchanged and correct; Conventional-Commits discipline noted. |
| **Total** | **100** | — | **94.15% → 94%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | T4 | §10.13.2, invariants table, row "one-person-one-vote per scope" | The invariants table states "one-person-one-vote per scope (conventional nullifier record v1; on-chain nullifier v2)" as an invariant both backings MUST satisfy. The v2.4.0 amendment specifies phone-based SMS auth as the v1 backing and in the method table of the same section returns `{ onePersonOneVote: false }` for v1. ADR-025 §(a) Critical honesty statement is explicit: "Phone verification is a spam speed-bump. It is NOT a proof of unique personhood." T-06 records Charter Rule 1 (one human, one vote) as "(ii) DEFERRED" in v1. A person holding multiple phone numbers CAN create multiple accounts in v1 — person-level one-person-one-vote is NOT satisfied. The invariant text was not updated when phone auth was named in v2.4.0, leaving an internal contradiction: the same section simultaneously claims `onePersonOneVote: false` (method table) and "one-person-one-vote per scope MUST be satisfied" (invariants table). | Replace "one-person-one-vote per scope (conventional nullifier record v1; on-chain nullifier v2)" in the §10.13.2 invariants table with accurate language that distinguishes the v1 and v2 scopes — e.g.: "one-vote-per-account per scope in v1 (conventional nullifier record prevents double-voting from the same account; does NOT provide one-person-one-vote — `getProperties().onePersonOneVote = false`; person-level uniqueness not guaranteed: T-06, ADR-025 §(a)); one-vote-per-person per scope in v2 (on-chain nullifier derived from unique personhood proof — DES-001)." Rework must bump semver (at minimum a patch bump is required for a fix to existing approved section; minimum minor per FAIL on a Medium issue) and set Status: In Review. |

> **Low issues:** None.

---

## 5. Confirmed sound (selected highlights — no regressions from v2.3.1-approved content)

**Flag-don't-block semantics — fully consistent:**
- FR-133 Gherkin (Doc 02 v2.8.0): Scenario 1 (VoIP flagged → rate-limited not blocked), Scenario 2 (flagged member retains all governance actions), Scenario 4 (hard-block path does not exist — absence test).
- DES-099 §10.13.8: "A governance action (petition endorsement, membership join, proposal vote) MUST NEVER be denied solely on a fraud flag (FR-061 degrade-never-deny; FR-125/OI-19 rate-limiter-never-admission-condition; FR-020 absolute)."
- ADR-025 §(b): "A governance action ... MUST NEVER be denied solely on a fraud flag — the flag is advisory, not adjudicating."
- No code path exists in the design that would deny a governance action solely on a flag. ✓

**T-06/T-07 tension wording — consistent across all three normative sources:**
- Decision record (DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §5): T-06 = "Charter Rule 1 (one human, one vote) vs v1 phone-auth"; T-07 = "FR-003 (no identity data at rest) vs v1 phone number storage."
- Doc 02 v2.8.0 §16.5 (changelog confirmed): T-06 = "Charter Rule 1 vs v1 phone auth"; T-07 = "FR-003 vs phone number storage" — both AWAITING APPROVER CONFIRMATION.
- Doc 03 §10.13.7: T-06 = "Charter Rule 1 — one human one vote vs v1 phone-auth"; T-07 = "FR-003 (no identity data at rest) vs v1 phone-number storage" — both AWAITING APPROVER CONFIRMATION. ✓

**Ratification note (§10.13.5) does not overclaim:**
- States "Composition confirmed: this is identical to the blockchain-as-audit-layer design in §5.1/ADR-009/FR-108 — the chain remains commitments and audit-record only; the conventional DB is the application store; no restricted data appears on-chain; the boundary is unchanged."
- This is an architecture-level composition confirmation as requested by the approver (DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §3.1 and Ruling 3). It does NOT claim T-01..T-07 are resolved — all tensions remain AWAITING APPROVER CONFIRMATION in §10.13.7. ✓

**ADR count — consistent:**
- Preamble: "The twenty-five decision records in `docs/adr/ADR-001..ADR-025` are normative." ✓
- §12 header: "Status of all twenty-five ADRs: Accepted." ✓
- §12 table: 25 rows (ADR-001..ADR-025). ✓

**IS_INSECURE_MOCK() — unchanged and correct:**
- §10.13.4 table: v1 conventional backing returns false (honest, not a mock). v2 ZK backing returns false. Phone auth is a genuine conventional implementation. ✓

**ADR-024 consequence update — correct:**
- ADR-024 §12 row consequence: "Charter-layer tensions T-01..T-07 require approver decision (§10.13.7, ADR-024 §(c), ADR-025 §(d)) before v1 implementation begins." Correctly extends from T-01..T-05 to T-01..T-07. ✓

**§15 traceability rows — complete:**
- DES-095 amendment row: FR-132 (Must; Marcus Adeyemi; BR-006/BR-012; Doc 02 v2.8.0) → DES-095 amended. Seam interface unchanged. v1 MUST NOT claim one-person-one-vote. IS_INSECURE_MOCK() = false. ✓
- DES-099 row: FR-133 (Must; Rafael Duarte; BR-012/BR-003; Doc 02 v2.8.0) → DES-099. Flag-don't-block semantics cited. FR-061/FR-125/FR-020 precedents cited. Flag data restricted-class. ✓

**§1.1 counts — match Doc 02 v2.8.0:**
- Doc 03 §1.1: "21 BR, 133 FR (131 active + 2 superseded; 114 Must), 28 NFR (24 Must), 15 CON, and 27 RISK." Doc 02 §11 Must table: 114 Must FRs (FR-001..FR-133 excluding superseded FR-046/FR-062). ✓

**No regressions in v2.3.1-approved content:**
- ADR-016 amendment-block item (c) citizen-exclusion sentence: confirmed present (unchanged). ✓
- §10.13.6 DES-098 (honesty notice): FR-131 reference unchanged. ✓
- §10.13.7 legend (i)/(ii)/(iii): unchanged and correct; T-06 and T-07 rows added correctly. ✓
- §18 C-02 closure note: unchanged and correct (FR-130 = cap; FR-131 = honesty notice). ✓

**Observation (Doc 02 only — not a Doc 03 defect):** Doc 02 §11 heading reads "Counts (v2.6.0)" in a v2.8.0 document. This is a stale version label in Doc 02; the actual counts in the section body (114 Must, 133 FR) are correct. The coordinator should route this as a Low issue to the product-owner for the next Doc 02 rework.

---

## 6. Routing instruction

**FAIL.** The architect (Ravi Deshmukh) MUST rework Doc 03. Fix required:

**ISS-01:** Update the invariants table in §10.13.2 — replace the "one-person-one-vote per scope (conventional nullifier record v1; on-chain nullifier v2)" row with accurate language that correctly distinguishes one-vote-per-account-per-scope (v1 nullifier record, NOT person-level) from one-vote-per-person-per-scope (v2, on-chain nullifier from unique personhood proof). The fix must make the invariant consistent with: (a) `getProperties().onePersonOneVote = false` in the method table of the same section; (b) ADR-025 §(a) Critical honesty statement; (c) T-06 in §10.13.7.

Rework MUST produce a new semver version (minimum minor bump — v2.4.1 or higher) with `Status: In Review`. This loop re-reviews at Cycle 2.
