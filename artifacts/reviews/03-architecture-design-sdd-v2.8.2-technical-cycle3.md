Reviewed document: 03-architecture-design-sdd.md
Document version: 2.8.2
Review mode: technical
Reviewer role: reviewer-qa (neutral — architect owns Doc 03)
Score: 100%
Critical: 0
High: 0
Medium: 0
Low: 0
Cycle: 3 of 5
Verdict: PASS

---

# Document Review — Doc 03 Architecture Design (SDD) v2.8.2
**Technical mode · Cycle 3 of 5**
**Date:** 2026-08-29
**Reviewer:** reviewer-qa (neutral — Ravi Deshmukh / architect owns Doc 03)
**Source commit base:** 88860b4 (v2.8.1 Approved); v2.8.2 in working tree
**Report file:** artifacts/reviews/03-architecture-design-sdd-v2.8.2-technical-cycle3.md

---

## 1. Scope of this cycle

v2.8.2 is a one-increment rework extending DES-101 (FR-077) to cover the requirement's
SECOND CLAUSE — amendment-time verification — which was undesigned in v2.8.0 and v2.8.1.
The cycle-3 charter:

- New §10.13.10.1 (amendment-time verification, six normative rules)
- Header update and new Change entry
- §15 debt table: old v2.8.0 FR-077 row corrected in place + new High row for the
  amendCharter weakness
- §15 FR-077 row: old v2.8.0 assessment struck through and corrected

v2.8.1 content (DES-101 publication gate, DES-102 provisional cap, DES-097(b) store
wiring) is carried forward unchanged from the PASS-100% cycle-2 verdict and is not
re-evaluated here. This report covers only the delta, cross-checked for regressions.

---

## 2. Issue table

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| — | — | — | — | No issues found | — |

---

## 3. Per-criterion scores and findings

### T1 — Requirement coverage (20/20)

FR-077's normative text (Doc 02 §4.22 line 708) requires the system to "refuse publication
of any new constitution AND refuse every subsequent amendment if the non-violence clause is
absent or has been altered." v2.8.0 designed only the publication gate; the amendment gate
was undesigned. §10.13.10.1 designs the amendment gate: clause-map charter, platform-immutable
clauseId, amendments carrying their text, adversarial-amendment test obligation. All six rules
address the gap directly. FR-077 stays OPEN (G-NOMECH) — this is the correct status: designed,
not yet built.

All other FRs (FR-130, FR-010, FR-027, FR-078) unchanged from v2.8.1 PASS. No gaps found.
Score: **20/20**.

### T2 — Soundness (20/20)

**Vulnerability claim verified against Party.sol.**

`amendCharter` at Party.sol:350–359 reads:
```
function amendCharter(bytes32 clauseId, bytes32 newCharterHash, string calldata newCharterCID)
    external notDissolved
{
    if (msg.sender != governor) revert NotGovernor();
    if (immutableClause[clauseId]) revert ClauseIsImmutable(clauseId);
    charter.charterHash = newCharterHash;
    charter.charterCID = newCharterCID;
    emit CharterAmended(newCharterHash, newCharterCID);
}
```

The function takes `(clauseId, newCharterHash, newCharterCID)` and assigns `charter.charterHash`
and `charter.charterCID` WHOLESALE. It never receives the charter text and cannot inspect the
non-violence clause even in principle. The two failure modes described by the architect are both
confirmed in code:

**Failure mode 1 (Direct):** `setFoundingClauses` (Party.sol:363–377) iterates a
`immutableIds` array passed by the registry and sets `immutableClause[id] = true` for each.
The non-violence clauseId is NOT forced into that array by the contract — it is a
founding-time choice. A party that omits it from `immutableIds` can call
`amendCharter(nonViolenceClauseId, ...)` without `ClauseIsImmutable` firing. **Confirmed.**

**Failure mode 2 (Structural):** Even with the non-violence clauseId entrenched, calling
`amendCharter(anyMutableClauseId, newHash, newCID)` passes the immutability check (checking
the OTHER clauseId), then assigns `charter.charterHash = newHash` wholesale. The new hash
may be for a document without the non-violence clause. **Confirmed.**

**Grep of all contracts for any non-violence verification:** zero matches. No non-violence
check exists at the contract layer outside the application-tier `validateDraft` that already
covers publication only.

**Clause-map fix soundness (Rule 1):** Storing `mapping(bytes32 clauseId => bytes32 clauseHash)`
with the document hash derived from the ordered clause set means `amendCharter` can only
update the named clause's hash; it cannot replace the whole document. This closes the structural
hole. Composition verified:

- FR-078 (constitution versioned immutably, tiered amendment only): clause map is orthogonal
  to the immutable-versioning discipline; both operate together without conflict. ✓
- FR-027/DES-022 (entrenchment): `immutableClause[clauseId]` still gates individual clauses;
  the clause map makes that gate meaningful — a clause can no longer be overwritten by naming a
  different one. Composes correctly. ✓
- DES-017 (ratchet): platform-immutable non-violence clauseId is written at deployment for every
  party; founders may entrench more, never less. Ratchet applies cleanly to the clauseId space. ✓

No interaction the architect missed was found.

**v1 exposure assessment.** The document says the weakness is "not exploitable in v1 (no
on-chain governance, ADR-024 §(b))." This reasoning holds: the threat model is a governance
attack where members propose and vote to amend the charter. That path (on-chain proposals,
voting, `amendCharter` execution via governance module) does not exist in v1. The coordinator
separately flagged that `party_governance` flag is on in every environment — confirmed in Doc 06
§6, but that flag enables governance-related application features (display, tracking), not the
on-chain governance proposal/execution module. The flag does not gate `amendCharter` directly;
`amendCharter` is callable by whoever holds the governor key. However, a direct governor call
is a key-trust threat, not the governance-module attack that arrives with the on-chain
increment. The architect's exposure framing (risk materialises at the on-chain governance
increment, must be fixed before it ships) is directionally correct and appropriately cautious.
Severity High for that increment is correct.

Score: **20/20**.

### T3 — Traceability & IDs (20/20)

§10.13.10.1 Traces block: FR-077, FR-027, FR-078, CON-013, ADR-010, DES-017, DES-022,
DES-074. All IDs verified as real and relevant. Backs: "FR-077 (Doc 02 §4.22; owner Daniel
Okonkwo; traces BR-014)" — verified: Doc 02 §4.22 line 708 names **Daniel Okonkwo** as owner
of FR-077. This corrects a pre-existing error carried from v2.8.0 through v2.8.1 (which
incorrectly cited Tomás Ferreira — Ferreira owns FR-076 and FR-078, per the same table).
The correction is a genuine traceability improvement, not a new defect.

§15 new debt row traces correctly: `amendCharter` weakness described, Phase-3 governance
increment as build home, High severity confirmed. No broken chains.

Score: **20/20**.

### T4 — Security & failure modes (15/15)

Both failure modes described precisely (direct: non-violence clauseId not platform-mandated;
structural: whole-document replacement via any mutable clauseId). Security routing recorded
explicitly in two places: §10.13.10.1 security note, and §13 debt row. Routing targets:
reviewer-qa (next security scan) and engineer (Phase-3 increment). v1 non-exploitability
reasoning holds per T2 above. "Must be fixed BEFORE the on-chain governance increment ships"
is the correct mandatory gating statement. Rule 4 (any future bulk replacement path re-verifies)
is a correct defence-in-depth rule that closes the obvious regression path.

Score: **15/15**.

### T5 — Completeness & testability (15/15)

Rule 6 specifies the adversarial-amendment test obligation precisely: "amend an unrelated
clause with a replacement charter whose non-violence clause has been stripped, and assert
refusal. Written against today's code that test FAILS, which is the point — it is the
regression test for this hole." The honest acknowledgement that the test fails today (because
the fix is not built) is correct and important — this is a failing test obligation, not a
passing one, and the document does not overstate. The §15 debt row is complete with root
cause, discovery date, designed status, and build-owed home.

Score: **15/15**.

### T6 — Convention compliance (10/10)

ISO-8601 dates throughout. Correction-in-place with explicit strikethrough on the wrong v2.8.0
assessment — transparent, auditable, not a quiet rewrite. The header Change block explicitly
labels the self-correction and the honest status. Named owners on all new claims. House style
followed (bold normative verbs MUST/MAY/MUST NOT consistent with RFC 2119).

Score: **10/10**.

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

## 5. Independent verdict on the amendCharter vulnerability

**The vulnerability is real.** Both failure modes are present in Party.sol as shipped:

1. The non-violence clauseId is not forced immutable by the platform — it is a founding-time
   party choice — so a party that omits it can amend the clause away via direct `amendCharter`
   call.
2. Even with the clauseId entrenched, naming any other mutable clauseId replaces the entire
   `charter.charterHash` and `charter.charterCID` wholesale, installing a replacement document
   that the contract cannot inspect for clause content.

No non-violence verification exists anywhere in the contracts. The only verification is in the
application-tier `validateDraft`, which covers publication — exactly the publication-gate that
DES-101's §10.13.10 designed and v2.8.1 got correct.

**The severity rating (High — governance-integrity blocker for the on-chain increment) is
correct.** The condition of non-violence is enshrined in CON-013 as the platform's single
deliberate exception to political-content neutrality — it is a founding principle, not a
preference. A governance mechanism that allows members to vote out this clause would be a
material integrity failure. The fix must land before the on-chain governance increment ships.
Classifying it High (not Critical) is defensible because v1 has no exploit path via the
governance module; it should be promoted to Critical if a v1 amendment path is ever introduced
before the clause-map refactor lands.

---

## 6. Note on pre-existing owner-name error (v2.8.1 review retrospective)

v2.8.1 §10.13.10 cited "owner Tomás Ferreira" for FR-077. This was wrong; the correct owner
is Daniel Okonkwo (Doc 02 §4.22:708). This error was present in v2.8.0 (FAIL cycle 1 for a
different reason) and carried into v2.8.1 (PASS cycle 2). The cycle-2 reviewer did not catch
it. v2.8.2 corrects it. The Approved status of v2.8.1 is not re-opened by this correction —
the wrong owner name did not affect any normative claim or any architectural decision; it was
a citation precision error in a Backs line, and it is now corrected in the current live
document. The error is recorded here as a transparency note, not a reopening.

---

## 7. Verdict and routing

**PASS — 100%, 0C/0H/0M/0L.**

Routing instruction: Ravi Deshmukh (architect) sets Doc 03 v2.8.2 `Status: Approved`.
FR-077 stays OPEN (G-NOMECH) — designed, not yet built. The amendCharter weakness is logged
in §13 and routed to reviewer-qa (next security scan) and the engineer (Phase-3 increment).
No action from the tester at this stage; tester makes the final FR-077 RTM row call once the
clause-map refactor and adversarial-amendment test land.
