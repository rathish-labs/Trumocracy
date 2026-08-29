# Approver ruling — non-violence-clause amendment weakness (`PREREQ-01`)

```
Date:        2026-08-29
Approver:    Rathish (Human Approver)
Subject:     Disposition of the Party.amendCharter non-violence-clause weakness
Origin:      Doc 03 v2.8.2 §10.13.10.1 + §13 (architect, DES-backlog session 2026-08-29)
Confirmed:   reviewer-qa, independently, against packages/contracts/src/core/Party.sol
             (artifacts/reviews/03-architecture-design-sdd-v2.8.2-technical-cycle3.md)
Status:      RULED — applied at Doc 03 v2.8.3
```

---

## 1. What was found

While completing DES-101 for FR-077's second half ("the system MUST refuse … **every subsequent
amendment** if the non-violence clause is absent or has been altered"), the architect found that
amendment-time verification is gated **nowhere, at either tier** — and was not merely unbuilt but
**undesigned**.

`Party.amendCharter(bytes32 clauseId, bytes32 newCharterHash, string newCharterCID)`:

- checks only `msg.sender == governor` and `immutableClause[clauseId]`;
- then assigns `charter.charterHash` and `charter.charterCID` **wholesale**;
- **never receives the charter text**, so it cannot inspect the clause even in principle.

Two failure modes follow, both reproduced independently by reviewer-qa:

1. **Direct.** `setFoundingClauses` populates `immutableClause` from a registry-supplied array at
   founding. The non-violence `clauseId` is not platform-mandated into it, so a party that simply
   omits it may amend the clause directly.
2. **Structural — the more serious.** Even with that `clauseId` entrenched, an amendment naming
   **any other** clause replaces the entire document hash and CID. The replacement document may
   omit or alter the non-violence clause, and `ClauseIsImmutable` never fires because the
   amendment did not name that clause. Entrenching one clause cannot protect a monolithic blob.

A grep of all contracts for any non-violence check returns **zero matches**.

CON-013 makes the non-violence clause a condition of a party's existence. The platform therefore
states a guarantee that its own amendment path can remove.

## 2. The ruling

**The DES-101 fix is recorded as its OWN tracked work item — `PREREQ-01` — and is NOT folded into
the on-chain governance increment.**

**`PREREQ-01` is a BLOCKING PREREQUISITE.** The on-chain governance increment **MUST NOT ship**
until all of the following are built and verified:

| # | Required before the on-chain governance increment ships |
|---|---|
| 1 | **Charter as a clause map** — `mapping(bytes32 clauseId => bytes32 clauseHash)` with the document hash derived, so an amendment amends the clause it names and cannot reach another (DES-101 §10.13.10.1 rule 1) |
| 2 | **Platform-immutable non-violence `clauseId`** — written into `immutableClause` by the deployer/registry for **every** party, never left to founder election (rule 2) |
| 3 | **Amendments carry their text** — the clause text, or a text-binding proof, so the contract verifies rather than trusts (rule 3) |
| 4 | **Closing evidence: the adversarial amendment test passes** — strip the non-violence clause while naming an unrelated clause, and assert refusal (rule 6). This test **fails against today's code**, which is precisely why it is the closing evidence |

**Rationale (approver's words, recorded):** CON-013 makes the non-violence clause a condition of a
party's existence; a fix that protects it must be a hard gate, not a line item that can slip under
sprint pressure.

## 3. v1 impact — none

**Confirmed NOT exploitable in v1, and `PREREQ-01` does not block any v1 work.**

v1 runs **no on-chain governance** (ADR-024 §(b) / DES-097: the v1 application is a conventional
PWA + Postgres, and the chain carries an audit record only). The threat model for this weakness —
members proposing and passing a charter amendment through the governance module — has no v1
execution path. The `party_governance` feature flag being on in every environment does **not**
change this: that flag does not gate `amendCharter`, and no v1 surface calls it.

The exposure arrives **with** the on-chain governance increment. That is exactly what this ruling
gates.

## 4. Where this is recorded

| Artifact | Record |
|---|---|
| Doc 03 §13 (debt register) | Row upgraded from "build owed in the Phase-3 governance increment" to the ruled `PREREQ-01` blocking prerequisite, with the adversarial test named as closing evidence |
| Doc 03 §10.13.10.1 | "Governance status — `PREREQ-01`" paragraph; security note records the ruling and reviewer-qa's confirmation |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | 2026-08-29 section — `PREREQ-01` listed as a named Phase-3 prerequisite |
| Doc 13 (Project Plan) | **Owed** — PM absorbs `PREREQ-01` into the Definition-B milestone set at Doc 13's next version |
| Doc 08 (RTM) | FR-077 stays **OPEN (G-NOMECH)** — designed, unbuilt. `PREREQ-01` does not change the row's status; it governs when the fix must land |

## 5. What this ruling does NOT do

- It does **not** close FR-077. That row closes when the mechanism is built and its tests pass.
- It does **not** change any design. The mechanism specified at Doc 03 v2.8.2 is unaltered; this
  ruling fixes its **governance standing** and its **sequencing**.
- It does **not** block v1 delivery, Gate-1 work, or any current branch.
- It does **not** set a date. `PREREQ-01` is sequenced *before* the on-chain governance increment,
  wherever that increment lands in the Definition-B plan.
