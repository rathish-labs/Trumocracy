# Document Review Report — 03 Architecture & Design (SDD)

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 1.0.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 77%
Critical: 3
High: 3
Medium: 4
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

The SDD is a genuinely strong architecture document — the arc42/C4 structure is complete, the
STRIDE analysis is real rather than ceremonial, §16 states unresolved conflicts honestly instead
of burying them, and the "deliberately absent" framing in §5.3 is the right way to specify a
system whose thesis is the absence of capability. It **FAILS** cycle 1 for one reason: three
security properties the document asserts in prose are never given a **design element that
specifies the mechanism**, and the code drop implements exactly what the document specified —
nothing. The proposal snapshot (§5.4, ADR-008 §2), the fork initiation threshold (§5.6 lineage,
ADR-008 §5) and attester authentication (§5.3) are described as guarantees and designed nowhere.
Each became a critical defect in the code (SECURITY-SCAN-2026-08-09 C-02, C-05, C-01). An SDD
that states a property without designing its enforcement transfers the design decision to the
engineer by accident; that is the pattern to fix, not just the three instances.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`77%`)
- Critical = 0? **no** · High = 0? **no** · Medium = 0? **no**
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 78 | 15.6 | §5.2/§11 cover the FR/NFR/RISK set broadly, but three Must-level mechanisms (snapshot binding, fork initiation, attester identity) have no design element at all. |
| T2 Soundness | 20 | 72 | 14.4 | Decisions are well argued with rejected alternatives; three are unsound by omission, and §5.4's entrypoint table is already stale against the code. |
| T3 Traceability & IDs | 20 | 80 | 16.0 | DES/ADR IDs used consistently; §15 correctly delegates to the RTM. §5.3's "complete list" claim is materially false, which breaks design→code traceability. |
| T4 Security & failure modes | 15 | 70 | 10.5 | STRIDE table is substantive and residuals are named. No row for the single most powerful primitive in the system (`Governor.execute`'s arbitrary call), none for cross-context commitment linkage, none for attester impersonation. |
| T5 Completeness & testability | 15 | 76 | 11.4 | §14 test hooks and §16 open questions are excellent. §9 is six lines of delegation where the handbook requires the repo-structure design, and omits CI topology entirely. |
| T6 Convention compliance | 10 | 92 | 9.2 | Header block, semver, ISO-8601, named owners, RFC 2119 all correct. Minor: RFC 2119 keywords used inconsistently across §10. |
| **Total** | **100** | — | **77.1 → 77%** | |

## 4. Issues

### Critical

**ISS-C1 — §5.4 / §5.6: the proposal snapshot is asserted as a guarantee and never designed.**
§5.4 lists `vote(id, choice, π, signals)` with proof `tenure_member` and scope
`keccak("vote",partyId,id)` — and stops there. Nowhere in §5.3, §5.4, §5.5 or §5.6 is it stated
that the Governor MUST record the party's member root at proposal creation and MUST require the
voter's `partyRootAtSnapshot` to equal it, nor that the circuit's `snapshotAt` input MUST be
bound to the proposal's `createdAt`. §5.3's `Governor.proposals` field list records
`snapshotMembers` but **no snapshot root**. The result in code is SECURITY-SCAN C-02: votes are
forgeable without limit against an attacker-built tree, and ADR-008 §2's anti-flood property
does not exist. **Required:** add a `DES-###` specifying the snapshot root field, the equality
check on `publicSignals[0]`, the `snapshotAt` binding, and the `joinedAt > snapshotAt` rejection;
add `snapshotRoot` to the §5.3 Governor field list; add the checks to the §5.4 table.

**ISS-C2 — §5.6 / §12: fork initiation has no on-chain mechanism.** The state model and ADR-008
§5 both promise "≥10% of members, then a 30-day cooling-off". No section designs how initiators
are counted, how an initiator proves membership, which nullifier scope prevents one person
counting twice, or where the initiation timestamp is stored. §5.3's `PartyRegistry` field list
contains no fork-initiation state. §5.4's entrypoint table omits `openForkPetition` entirely.
The code consequently takes both numbers from calldata (SECURITY-SCAN C-05) and the two
protections are unenforced. **Required:** design an `initiateFork` action with its proof, scope
and storage, and add the fields to §5.3 and the entrypoint to §5.4.

**ISS-C3 — §5.3: `attesters` has no operator identity, so the design cannot authenticate an
issuance.** The RegionRegistry model reads `attesters attesterId → {active, tier, stake, metadataURI}`.
There is no address, key or operator field, and no section states who is permitted to call
`issueResidency` or how that permission is checked. The code implements precisely that: the
`attesterId` is caller-supplied and unauthenticated, so anyone can mint unlimited residency
credentials (SECURITY-SCAN C-01) — which also compromises the k ≥ 1000 anonymity guard and the
petition denominator, both of which this document relies on as controls (§10.1 "I**nfo**",
§5.4). **Required:** add the operator binding to the §5.3 model and an explicit authentication
rule for residency issuance; add an "attester impersonation" row to the §10.1 STRIDE table.

### High

**ISS-H1 — §10.1: no STRIDE row for `Governor.execute`'s arbitrary `target.call(callData)`.**
§5.3 records `target, callData` in the proposal struct, and §5.4 lists `execute(id)` as simply
"permissionless" — with no statement of what a proposal is permitted to *do*, and no rule
binding a decision tier to a class of action. This is the highest-authority primitive in the
protocol and it is absent from the threat model. In code it is a complete tier bypass: a 5%-quorum,
zero-timelock T0 proposal can dissolve a party (SECURITY-SCAN C-06). **Required:** a design
element specifying the tier↔action binding, and an EoP row in §10.1.

**ISS-H2 — §5.3's "complete list" claim is materially false.** The section opens "if a field is
not here, the protocol does not have it", which makes every omission a specification defect
rather than an editorial one. Missing from the shipped contracts: `PersonhoodRegistry.authorisedSpender`,
`spenderAuthoriser`, `knownRoot`/root-history, the per-issuer `namespaceId` and epoch usage;
`Party.governor`, `dissolved`, `charter`, `parentPartyId`, `forkBlock`, `knownRoot`;
`Governor.cancelled` and `lastProposalAt`; `RegionRegistry.frozen` and `attesterAuthorised`.
`authorisedSpender`/`spenderAuthoriser` matter most — they are the protocol's only
disenfranchisement-capable authority (SECURITY-SCAN H-01) and the document does not acknowledge
they exist. **Required:** complete the list or soften the claim; the first is better.

**ISS-H3 — §10.1/§10.2 do not address cross-context linkability of the published
`identityCommitment`.** §10.2 asserts "Unlinkability by scoped nullifiers", and the glossary
defines Scope as what "makes nullifiers unlinkable across actions". Both are true of the
nullifiers and false of the commitment published beside them, which is constant for one person
across every region, party and petition (SECURITY-SCAN H-06). The nearest STRIDE row —
"deanonymise by elimination in a small region", residual "correlation over time (RISK-06)" —
addresses k-anonymity, not a stable public identifier. **Required:** either design a per-party
scoped pseudonym, or state the linkage explicitly as an accepted residual with its citizen-facing
disclosure.

### Medium

**ISS-M1 — §5.4's entrypoint table is stale and incomplete.** `enrol` is listed with three
public signals `[Nᵢ, C, issuerId]`; the contract requires four (the `namespaceId` added by the
Doc 06 §5 defect-2 fix). `withdrawEndorsement`, `leave` and `openForkPetition` are absent from
the table although all three are unprivileged, state-changing, proof-gated entrypoints. Signal
vectors are given for `enrol` and `endorse` but not for `vote`/`propose`, which is where the
binding rules were lost (ISS-C1).

**ISS-M2 — §9 does not carry the repository design the handbook assigns to it.** The Coding & UT
rule requires SDD §9 to design monorepo-vs-polyrepo, module boundaries, branch model and **CI
topology**. §9 names the monorepo, the workspace layering and trunk-based development in six
lines and delegates the rest to ADR-011 and Doc 04. CI topology appears in neither §9 nor the
§13 debt table. Since Doc 06 §1 builds from §9, the delegation puts the normative content one
hop away from its consumer.

**ISS-M3 — §13's debt entry for growth-sample trimming understates a liveness ceiling.**
"Growth-sample array trimming in `Party` — bounded gas — move to a ring buffer before mainnet
scale" reads as an optimisation. The shipped implementation additionally runs an O(n²) scan over
the same array from a state-changing path, which makes joins impossible at the cap rather than
merely expensive (SECURITY-SCAN H-02). The debt register should carry the liveness consequence,
not just the cost.

**ISS-M4 — §5.4 does not specify residency-root freshness.** The design says proofs are checked
against a region's root but never states the acceptance window. The implementation chose a
64-**insertion** ring, which in a region sized to §7.6's 50 M/10 M targets rotates faster than a
citizen can generate a proof (SECURITY-SCAN H-07). A one-line design constraint — "a root MUST
remain acceptable for at least N minutes" — would have prevented it.

### Low

- **ISS-L1 — §11's failure-mode analysis is per requirement, not per component.** The three
  mechanisms in ISS-C1..C3 have no requirement that names them, so they fall through the
  analysis. A per-entrypoint pass over §5.4 would have caught all three.
- **ISS-L2 — RFC 2119 keywords are used unevenly.** §10.3–§10.9 state budgets and properties as
  bare assertions where MUST/SHOULD would make them testable; §13's MACI note uses **MUST**
  correctly. Pick one register.
- **ISS-L3 — §15 asserts the traceability chain is "maintained in the RTM (Doc 08)"**, which does
  not yet exist in `docs/`. Accurate as an intent, unverifiable as a statement; mark it as
  forward-looking.

## 5. What is genuinely good (and should survive the rework)

Recorded so the owning role does not lose it while reworking: §16's open questions Q6–Q9 name
real, uncomfortable conflicts (public tallies vs FR-034; NFR-025 vs 12–24 h force inclusion;
NFR-004's un-measurability) instead of closing them silently — that is the single best quality
signal in the document. §5.3's "deliberately absent" list, §10.1's residual column, and §5.5's
observation that no arrow terminates at a human approver are all doing real specification work.

## 6. Routing

To the **architect** (owner) for v1.1.0. Three critical and three high issues; the criticals
share one root cause — *a property is stated in prose without a design element specifying its
enforcement* — so the rework should include a sweep of §5.4's entrypoints asking, for each
asserted guarantee, "which line of which contract enforces this?".
