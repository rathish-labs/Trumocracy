# Document Review Report — Doc 03 Architecture & Design SDD v2.4.1 — Technical — Cycle 2

> Produced by the **document-review** skill. Reviewer: **tester (Ji-woo Park)** — PM-assigned
> neutral reviewer. The architect (Ravi Deshmukh) is the document owner and was excluded from
> reviewing their own work. This reviewer scores and lists issues only — it does not edit the
> reviewed document.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.4.1
Review mode: technical
Reviewer role: tester
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 0
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 03 v2.4.1 (Trumocracy Architecture & Design SDD, author: Ravi Deshmukh, rework date
2026-08-23) is a re-review following the Cycle-1 FAIL (94%, 0C/0H/1M/0L). ISS-01 (Medium —
§10.13.2 invariants table incorrectly claimed "one-person-one-vote per scope" as a v1 invariant)
is fully fixed at all three locations: the §10.13.2 invariants paragraph in Doc 03, the
ADR-024 invariants-table row, and the ADR-024 `isUniqueInScope` semantics row. A full sweep
of every "one-person-one-vote" / "onePersonOneVote" occurrence across Doc 03 and ADR-024/ADR-025
confirms that every remaining occurrence correctly DENIES the v1 claim or describes it as a v2
guarantee. No regressions found in the v2.4.0-reviewed content. Verdict: **PASS** (97%,
0C/0H/0M/0L).

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | Unchanged from Cycle 1; all DES-095/DES-099 FR coverage confirmed. §1.1 counts correct (133 FR / 131 active / 114 Must). §15 rows accurate. |
| T2 Soundness | 20 | 97 | 19.4 | ISS-01 fix restores internal consistency. ADR-025 clean (no changes needed; confirmed correct throughout sweep). Architecture-level soundness unchanged; flag-don't-block, IS_INSECURE_MOCK(), T-06/T-07, ratification note all sound. |
| T3 Traceability & IDs | 20 | 97 | 19.4 | ADR count twenty-five consistent. §15 traceability complete. FR traces verified. Header Source SRS v2.8.0. All ID references stable. |
| T4 Security & failure modes | 15 | 97 | 14.55 | ISS-01 fully fixed: §10.13.2 invariants paragraph now reads "one-vote-per-account per scope (v1) / one-vote-per-person per scope (v2)" with explicit "does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`; T-06, ADR-025 §(a))". ADR-024 both sibling rows corrected. Full sweep confirms no remaining contradictory claims. Governance-action blocking rule unchanged and correct. |
| T5 Completeness & testability | 15 | 97 | 14.55 | Unchanged from Cycle 1. ADR-025 §(c) consequences complete. FR-132/FR-133 Gherkin complete. SIM-swap recovery DES tracked in ADR-025 §(c-iv). |
| T6 Convention compliance | 10 | 97 | 9.7 | Changelog v2.4.1 entry present and accurate (cites cycle-1 FAIL report path, lists ISS-01 fix at all three locations). Status: In Review. Source: SRS-TRUMOCRACY v2.8.0. |
| **Total** | **100** | — | **97.0%** | — |

---

## 4. Issues

### Cycle-1 issues — status after rework

| ID | Severity | Criterion | Status | Verification |
|----|----------|-----------|--------|-------------|
| ISS-01 | ~~Medium~~ | T4 | **CLOSED** | Fixed at all three locations — see §5 below. |

### New issues — Cycle 2

None. Full sweep found no remaining occurrences that claim v1 provides one-person-one-vote.

---

## 5. ISS-01 fix verification — three locations

**Location 1 — Doc 03 §10.13.2 invariants paragraph (line 1250):**

Confirmed text (v2.4.1):
> `**Invariants both backings MUST satisfy:** one-vote-per-account per scope (v1) / one-vote-per-person per scope (v2) — v1: conventional nullifier record prevents double-voting from the same account; does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`; T-06, ADR-025 §(a)). v2: on-chain nullifier derived from unique personhood proof — DES-001; genuine one-person-one-vote guarantee; ...`

- No longer claims v1 provides one-person-one-vote. ✓
- Explicitly states "does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`; T-06, ADR-025 §(a))". ✓
- v1 and v2 scopes clearly distinguished. ✓

**Location 2 — ADR-024 invariants-table row:**

Confirmed text (v2.4.1):
> `| **One-vote-per-account per scope (v1) / One-vote-per-person per scope (v2)** | Conventional nullifier record in database, written atomically — prevents double-voting from the same account; does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`; T-06, ADR-025 §(a)) | On-chain `nullifierUsed[keccak(scope, N)]` (DES-001) — derived from unique personhood proof; genuine one-person-one-vote guarantee |`

- Row title now correctly distinguishes the v1 and v2 scopes. ✓
- v1 cell explicitly denies one-person-one-vote. ✓
- v2 cell correctly asserts the guarantee (on-chain nullifier, unique personhood proof). ✓

**Location 3 — ADR-024 `isUniqueInScope` semantics row:**

Confirmed text (v2.4.1):
> `| `isUniqueInScope` | Returns true if the member has NOT already exercised this scope. In v1: conventional database nullifier record (written atomically on first action) — prevents double-voting from the same account-scope pair; does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`; T-06, ADR-025 §(a)). In v2: on-chain `nullifierUsed[keccak(scope, N)]` check (DES-001) — derived from unique personhood proof; genuine one-person-one-vote guarantee. |`

- Parenthetical "(account-scope pair)" correctly replaced the old vague phrasing. ✓
- "does NOT provide one-person-one-vote" with full citations. ✓

**Full sweep — all occurrences confirmed to correctly DENY or characterise the v1 limitation:**

| Location | Occurrence | Classification |
|----------|-----------|---------------|
| Doc 03 §10.13.2 method table (`verifyEligibility`) | "MUST NOT claim one-person-one-vote" | Denial ✓ |
| Doc 03 §10.13.2 method table (`getProperties`) | "`{ onePersonOneVote: false }`" | Denial ✓ |
| Doc 03 §10.13.2 invariants paragraph | "does NOT provide one-person-one-vote" | Denial ✓ |
| Doc 03 §10.13.7 T-06 | "Charter Rule 1 — one human one vote vs v1 phone-auth; DEFERRED; v1 MUST NEVER claim one-person-one-vote" | DEFERRED classification ✓ |
| Doc 03 §12 ADR-007 row | "1p1v; capped, influence-free treasury … 1p1v makes personhood load-bearing" | v2 property / overall design (not a v1 claim) ✓ |
| Doc 03 §15 DES-095 row | "v1 MUST NOT claim one-person-one-vote" | Denial ✓ |
| ADR-024 `isUniqueInScope` | "does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`; T-06, ADR-025 §(a))" | Denial ✓ |
| ADR-024 invariants table | "does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`; T-06, ADR-025 §(a))" | Denial ✓ |
| ADR-025 §(a) honesty statement | "v1 explicitly does NOT claim one-person-one-vote" | Denial ✓ |
| ADR-025 §(c-i) | "v1 explicitly does not guarantee one-person-one-vote" | Denial ✓ |
| ADR-025 §(d) T-06 table | "`getProperties().onePersonOneVote = false`; v1 MUST NOT claim one-person-one-vote" | Denial ✓ |

No occurrence reads as a v1 property or a both-backings invariant. Every occurrence correctly denies the v1 claim or characterises it as a v2-only guarantee.

---

## 6. No regressions

Spot-checked v2.4.0-approved content:
- Flag-don't-block semantics (DES-099, FR-133, ADR-025 §(b)): unchanged. ✓
- T-06/T-07 in §10.13.7: unchanged. ✓
- Ratification note (§10.13.5): unchanged. ✓
- ADR count twenty-five (preamble, §12 header, §12 table): unchanged. ✓
- §15 DES-095/DES-099 traceability rows: unchanged. ✓
- IS_INSECURE_MOCK() contract: unchanged. ✓

---

## 7. Routing instruction

**PASS.** The architect (Ravi Deshmukh) MUST set `Status: Approved` in
`docs/03-architecture-design-sdd.md` v2.4.1. The SOP may advance. No further rework required.

Pre-existing open items (not blocking this review, tracked in §16 and ADR-025 §(c)):
- T-01..T-07 Charter-layer tensions require explicit approver ruling (Rathish) before v1
  implementation begins.
- US/TC for FR-131, FR-132, FR-133 owed at next catch-up (Phase 3 debt, §16).
- SIM-swap/number-recycling recovery DES owed before enrolment sprint (ADR-025 §(c-iv)).
- SMS cost vs NFR-005 envelope verification owed before build (ADR-025 §(c-v)).
- Vendor selection (SMS provider + phone-intelligence API) remains open (Doc 13 assumption (a),
  partially resolved — mechanism decided, vendor open).
