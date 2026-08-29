# Document Review Report — Doc 03 Architecture & Design SDD v2.8.0

> Produced by the **document-review** skill. Reviewer is NOT the document owner.
> Reviewer scores and lists issues only — no edits to the reviewed document.

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.8.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — architect/Ravi Deshmukh owns Doc 03)
Score: 95%
Critical: 0
High: 1
Medium: 0
Low: 0
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v2.8.0 (SDD-TRUMOCRACY, Status: In Review) was reviewed in technical mode. The increment
is a v1 design-debt paydown: DES-101 (non-violence clause gate, FR-077), DES-102 (provisional-party
membership cap, FR-130), and DES-097(b) (store wiring). The intent, structure, and security
reasoning are sound throughout. **Verdict: FAIL** — one High issue prevents PASS: DES-101 §3 rule 2
(the refusal-contract) names error codes `CLAUSE_MISSING` and `CLAUSE_ALTERED`, but the shipped
code in `packages/protocol/src/party.js` (lines 368–377) uses `code: 'REQUIRED'` for absent-clause
and `code: 'ALTERED'` for byte-mismatch. The `CLAUSE_MISSING` name is completely absent from the
implementation; `CLAUSE_ALTERED` carries an erroneous `CLAUSE_` prefix. A developer or tester
deriving test code from the DES will not find these codes in the implementation.

All other code claims verified correct:
- DES-102 Party.sol v2 insertion point: `AlreadyMember` check at lines 191–192, `memberCount += 1`
  at line 201 — the DES places the cap guard between these two, which is accurate.
- FR-130 cap check at `party-creation.js` line 890; `PROVISIONAL_CAP_REACHED` error code at
  line 898 — correct.
- `recordLegalRegistration` path as the only lift mechanism — correct.
- UT-0802..UT-0811 in `party-creation.test.js`, UT-0825 in `membership.test.js` — all confirmed.
- CON-015 PENDING discipline: all legally-gated retention specifics in §10.13.12 §6 marked
  PENDING CON-015, none invented.
- Scope fence held: no DES-065, no circuits, no MACI, no anonymity guarantee pulled forward.
- FR-064 explicitly deferred.
- FR-020 / admission-vs-party-state distinction correctly recorded in DES-102.
- Tamper-evident / tamper-proof residual correctly recorded (rule 8 + Residual paragraph).

Hard-check results:

| Check | Result |
|-------|--------|
| Header: v2.8.0, Status In Review, Source SRS v2.15.0 | PASS ✓ |
| Doc 02 v2.15.0 Status: Approved (source pin validates) | PASS ✓ — header reads Approved |
| DES-101 ID genuinely new (highest prior DES-100) | PASS ✓ |
| DES-102 ID genuinely new | PASS ✓ |
| §5.2 DES-101 SCR binding: SCR-04, SCR-05 | PASS ✓ |
| §5.2 DES-102 SCR binding: SCR-09, SCR-11 | PASS ✓ |
| DES-101 rule 2 error code for absent clause: doc says CLAUSE_MISSING; code says 'REQUIRED' | **HIGH — ISS-01** |
| DES-101 rule 2 error code for differs clause: doc says CLAUSE_ALTERED; code says 'ALTERED' | **HIGH — ISS-01** |
| DES-101 rule 1: verbatim byte-for-byte match, no fuzzy/semantic | PASS ✓ |
| DES-101 rule 3: no waiver surface (capability-absence obligation) | PASS ✓ |
| DES-101 rule 4: frozen text, ADR-010 governance to change | PASS ✓ |
| DES-101 rule 5: v1 three-layer enforcement (protocol + sdk + web); v2 PartyRegistry | PASS ✓ |
| DES-101 failure modes: homoglyph, whitespace, localisation | PASS ✓ |
| NON_VIOLENCE_CLAUSE constant in packages/protocol/src/constants.js:165 | PASS ✓ |
| validateDraft in packages/protocol/src/party.js:323 | PASS ✓ |
| DES-102 rule 3: UNCONDITIONAL, PROVISIONAL_CAP_REACHED, Ruling 1 2026-08-26 | PASS ✓ — cap at party-creation.js:890–898 ✓ |
| DES-102 rule 4: ACTIVE-member semantics, leave frees one slot | PASS ✓ |
| DES-102 rule 5: code-only lift via recordLegalRegistration; no bypass surface | PASS ✓ |
| DES-102 rule 7 v2: Party.sol join() cap guard between AlreadyMember (lines 191–192) and memberCount+=1 (line 201) | PASS ✓ |
| DES-102 rule 8: audit-record publication (tamper-evident, not tamper-proof) | PASS ✓ |
| UT-0802..UT-0811 in party-creation.test.js | PASS ✓ |
| UT-0825 in membership.test.js | PASS ✓ |
| DES-097(b): 22-method interface mapping table | PASS ✓ |
| DES-097(b): append-only membership_event log authoritative | PASS ✓ |
| DES-097(b): concurrency rules (FR-130 cap race, FR-064 unique partial, FR-010 collision) | PASS ✓ |
| DES-097(b) §6: PENDING CON-015 for all legally-gated retention items | PASS ✓ |
| DES-097(b): IS_INSECURE_MOCK=false promotion conditions | PASS ✓ |
| Scope fence: no DES-065/circuits/MACI/anonymity pulled forward | PASS ✓ |
| FR-064 explicitly deferred | PASS ✓ (scope fence note and DES-097(b) counted_member entry: "v2 nullifier path (DES-065) supersedes it") |
| DES-101 closure: tester makes final RTM-row status call | PASS ✓ |
| DES-102 closure: rules 1–5 proven, rule 6/store honest boundary, tester judges row | PASS ✓ |
| DES-097(b): "enables a build; closes no row" | PASS ✓ |
| FR-020 interaction: cap is party-state limit, not admission judgement | PASS ✓ |
| ADR-024 §(b) coherence (v1 has no on-chain governance) | PASS ✓ — v1/v2 enforcement split correct |
| §10.13.7 T-05 tamper-evidence posture consistency | PASS ✓ — same pattern stated explicitly |
| DES-100 (retention) internal consistency | PASS ✓ — DES-097(b) composes, does not contradict |

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`95%`)
- Critical = 0? **yes** · High = 0? **no — 1 High issue (ISS-01)** · Medium = 0? **yes**
- **Verdict:** `FAIL` — one High issue prevents PASS despite score ≥ 95%.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 100 | 20.0 | DES-101 (FR-077), DES-102 (FR-130), DES-097(b) (FR-010 enablement) properly backed. Source pin SRS v2.15.0 Approved confirmed. §15 trace table covers new DES IDs. No orphaned design. |
| T2 Soundness | 20 | 84 | 16.8 | ISS-01 High: DES-101 rule 2 names error codes `CLAUSE_MISSING` and `CLAUSE_ALTERED`; actual codes in party.js lines 369/375 are `'REQUIRED'` and `'ALTERED'`. The same erroneous names reappear in §6 Surfaces (line 1710) and the failure-modes paragraph (line 1713). All other code claims for DES-101, DES-102, and DES-097(b) verified correct. |
| T3 Traceability & IDs | 20 | 98 | 19.6 | DES-101 and DES-102 are genuinely new (highest prior DES-100 confirmed). SCR bindings verified against §10.12.4. FR-064 explicitly deferred. All traces present. DES-097(b) correctly extends DES-097 without renumber. Minor: §6 Surfaces paragraph embeds the erroneous error code names (part of ISS-01, not a separate finding). |
| T4 Security & failure modes | 15 | 96 | 14.4 | No waiver surface for DES-101 or DES-102 ✓. Cap UNCONDITIONAL (Ruling 1) ✓. CON-015 PENDING (not invented) ✓. Tamper-evident / tamper-proof residual correctly recorded ✓. FR-020 admission distinction preserved ✓. Concurrency rules in DES-097(b) cover the FR-130 cap race, FR-064 unique partial index, and FR-010 TOCTOU ✓. Minor impact from ISS-01: the SCR-05 rendering described as showing `CLAUSE_MISSING`/`CLAUSE_ALTERED` refusals cannot match the actual codes; any UI routing keyed on these strings would mis-route. |
| T5 Completeness & testability | 15 | 97 | 14.55 | UT citations verified. §10.13.10 leaves RTM-row status call to tester (explicit) ✓. DES-097(b) "enables a build; closes no row" correctly stated ✓. DES-102 rule-by-rule honesty ✓. All failure modes addressed. Minor: test code derived from the DES for CLAUSE_MISSING/CLAUSE_ALTERED (ISS-01) would fail against the implementation. |
| T6 Convention compliance | 10 | 98 | 9.8 | Source pin SRS v2.15.0 Approved correct. Changelog complete. DES IDs sequential. Convention note at §6 Surfaces embeds erroneous code names (part of ISS-01). |
| **Total** | **100** | — | **94.65% → 95%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | High | T2, T4, T5, T6 | §10.13.10 DES-101 rule 2 (line 1688); §6 Surfaces paragraph (line 1710); failure-modes paragraph (line 1713) | **Error code names in DES-101 do not match the implementation.** Rule 2 states: "Absence refuses with `CLAUSE_MISSING`; presence-but-different refuses with `CLAUSE_ALTERED`." The actual error objects in `packages/protocol/src/party.js` (lines 366–377) use `code: 'REQUIRED'` for the absent-clause branch and `code: 'ALTERED'` for the byte-mismatch branch. `CLAUSE_MISSING` does not appear anywhere in the implementation; `CLAUSE_ALTERED` vs the actual `ALTERED` adds an erroneous `CLAUSE_` prefix. The same names appear verbatim in §6 Surfaces ("the named `CLAUSE_MISSING` / `CLAUSE_ALTERED` refusal renders here") and in the failure-modes paragraph ("is `CLAUSE_ALTERED`, correctly"). A developer or tester who derives test expectations from the DES — which is its purpose — will look for codes that do not exist, causing false test failures or misdirected error handling. Per the task brief: "A DES that misdescribes the code it governs is a High." | **Two options — architect must choose and align:** Option A (fix the DES to match the code): Replace `CLAUSE_MISSING` → `REQUIRED` and `CLAUSE_ALTERED` → `ALTERED` in rule 2, §6 Surfaces, and the failure-modes paragraph. Preferred for this cycle — the code is shipped, tested, and Approved at Doc 06 v2.3.3. Option B (fix the code to match the DES): Route to engineer to update `party.js` so the absent-clause branch uses `code: 'CLAUSE_MISSING'` and the byte-mismatch branch uses `code: 'CLAUSE_ALTERED'`. This requires a Doc 06 update and new test verification cycle. Either choice must be applied consistently in all three §10.13.10 locations and in any downstream DES that cites these codes. Produce Doc 03 v2.8.1 (bump minor, Status: In Review) and submit for cycle-2 review. |

> No Critical, Medium, or Low issues. The single High issue (ISS-01) causes FAIL.

---

## 5. Routing instruction

**Verdict: FAIL.** Route to **Ravi Deshmukh (architect)** for rework:

1. Produce **Doc 03 v2.8.1** (bump minor version from v2.8.0, set `Status: In Review`).
2. Choose and apply one of the two fix options for ISS-01 — correct the three occurrences in
   §10.13.10 (rule 2, §6 Surfaces, failure-modes paragraph) consistently. If Option B, route
   to engineer first and await Doc 06 re-review.
3. Submit v2.8.1 for cycle-2 technical-mode review.

This is cycle 1 of 5. Four rework cycles remain before escalation.
