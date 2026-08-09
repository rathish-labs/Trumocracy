# Document Review Report — 06 Coding & Unit Testing (+ the code drop)

```
Reviewed document: 06-coding-and-ut.md
Document version: 1.0.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 48%
Critical: 6
High: 6
Medium: 5
Low: 4
Cycle: 1 of 5
Verdict: FAIL
```

> Per CLAUDE.md, code generation is reviewed in technical mode and the verdict is recorded
> against Doc 06's current version. This review therefore covers **the document and the code
> drop it certifies**. Full evidence for every code issue is in
> `artifacts/reviews/SECURITY-SCAN-2026-08-09.md`.

---

## 1. Summary (BLUF)

Doc 06 is a well-written document about a code drop that is not ready. The document's own
reasoning is often excellent — §1.1's rejection of Foundry and Hardhat on reproducibility
grounds is a genuinely good engineering decision argued from a product requirement, and §4's
statement of what capability-absence testing does *and does not* prove is more honest than most
security sections I read. It **FAILS** cycle 1 because the code it certifies contains **six
critical defects**, none covered by a test, three of which break guarantees this very document
claims are fixed or tested; and because three of the document's own factual claims — §5's
"all four fixed", §6's "every flag that can be exercised on-chain is also enforced by the
`FeatureFlags` contract", and §7.4's characterisation of the growth-sample trim as "correct but
wasteful" — are not true of the code in the repository. The gap between the document's
confidence and the drop's condition is itself the most important finding: this document would
have persuaded a gate reviewer that the drop was safe.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`48%`)
- Critical = 0? **no** · High = 0? **no** · Medium = 0? **no**
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 48 | 9.6 | The document covers the required sections. The code fails six Must-level protocol guarantees (1p1v, snapshot eligibility, fork threshold, tier separation, party liveness, credential authenticity). |
| T2 Soundness | 20 | 45 | 9.0 | §1.1's toolchain reasoning is first-rate. The code drop is unsound: unauthenticated credential minting, forgeable votes, a self-bricking party. |
| T3 Traceability & IDs | 20 | 52 | 10.4 | UT ranges are stated per area, but "Every `UT-####` maps to an `FR`/`NFR`/`RISK` in the RTM (Doc 08)" is unverifiable — `docs/08` does not exist. Range counts do not reconcile with the test files. |
| T4 Security & failure modes | 15 | 45 | 6.75 | §4 and §7 are commendably candid; but §5 reports a Critical as fixed when the fix is bypassable one level up, and §6's flag claim is false. |
| T5 Completeness & testability | 15 | 40 | 6.0 | No placeholders, good standard. But every critical is untested, and the one differential growth case is monotonic **by construction** so it cannot catch the underflow it sits next to. |
| T6 Convention compliance | 10 | 62 | 6.2 | Header, semver, trunk/Conventional Commits stated. §6's ledger has a false column and contradicts its own "no permanent flags" assertion. |
| **Total** | **100** | — | **47.95 → 48%** | |

## 4. Issues

### Critical — all six are code defects; see the security scan for full scenarios and fixes

**ISS-C1 — Unauthenticated residency minting.** `RegionRegistry.issueResidency`
(`packages/contracts/src/core/RegionRegistry.sol:169`) takes `attesterId` from the caller and
never checks `msg.sender`; `struct Attester` has no operator address. Anyone mints unlimited
residency credentials, which is the Sybil boundary for `join` and `endorse` and the source of
`verifiedResidents()`. This directly falsifies §3's `UT-0320` ("gains an attacker nothing from
controlling many addresses") as a statement about the system, though the test itself passes.
(SECURITY-SCAN C-01.)

**ISS-C2 — Voting snapshot never bound.** `Governor.vote/propose/cancelDuringDiscussion`
(`Governor.sol:259, 153, 343`) never read `publicSignals[0]` (`partyRootAtSnapshot`) or bind the
circuit's `snapshotAt`. `Party.knownRoot` is written and read by no contract in the repository;
`error JoinedAfterSnapshot()` is declared and never thrown. Unlimited forged votes at any tier.
(SECURITY-SCAN C-02.)

**ISS-C3 — Circuit/contract public-signal arity mismatch.** The circuits declare 7 and 6 public
signals; the contracts require 6 and 5. The dropped signals are exactly `nowTs` and `snapshotAt`
— the two the circuit comments say the contract must bind. `test/fixture.mjs:111-113` registers
mocks at the *contract* arities, so `UT-0341` validates the mistake. With real verifiers the
protocol is either inert or has vacuous expiry and prover-chosen tenure. (SECURITY-SCAN C-03.)

**ISS-C4 — `Party.surgeActive()` underflow bricks a party permanently.** `Party.sol:279-281`
subtracts before the guard that prevents the subtraction. The first time membership decreases,
`join`, `leave` and `propose` revert forever, with no admin path to recover. This contradicts
§7.4's assessment of the same array as "correct but wasteful". The reference implementation does
**not** share the bug, so it is also a live differential divergence that `UT-0420` cannot catch
because its fixture performs 30 joins and zero leaves. (SECURITY-SCAN C-04.)

**ISS-C5 — Fork threshold and cooling-off taken from calldata.** `PartyRegistry.openForkPetition`
(`:306`) trusts caller-supplied `initiators` and `forkInitiatedAt`; no fork-initiation state
exists anywhere. `FORK_MIN_INITIATOR_BPS` and `FORK_COOLING_OFF` are dead constants.
(SECURITY-SCAN C-05.)

**ISS-C6 — Tier bypass via `Governor.execute`.** Nothing binds a proposal's tier to what its
`callData` may do. A tier-0 proposal (5% quorum, zero discussion, **zero timelock**) can call
`Party.dissolve()`. The whole ADR-008 §1 tier table is bypassable by typing a different integer.
(SECURITY-SCAN C-06.)

### High

**ISS-H1 — §5 reports defect 1 as fixed; the fix is bypassable one level up.** The table states
`spendNullifier` is "Restricted to modules the registry deployed", regression-tested by
UT-0325/UT-0326. The guard on `spendNullifier` and `authoriseSpender` is correct, but
`setSpenderAuthoriser` (`PersonhoodRegistry.sol:268`) is re-callable, self-authorises its
argument, and has no de-authorisation path — so the timelock can make itself a universal
nullifier burner in one call, restoring the same one-call disenfranchisement. Neither regression
test covers `setSpenderAuthoriser`. A "fixed" row in a defect register that a reviewer can
bypass in one call is worse than an open row. (SECURITY-SCAN H-01.)

**ISS-H2 — §6's claim "Every flag that can be exercised on-chain is *also* enforced by the
`FeatureFlags` contract" is false, and the ledger's On-chain column is wrong.** `elections`,
`recall`, `treasury`, `private_endorsement` and `delegation` are marked "On-chain: yes"; grep
shows those strings exist only in `packages/protocol/src/flags.js` and in **no contract**. Only
`petitions`, `party_governance`, `fork` and `maci_voting` are enforced on-chain. Separately,
`enrol`, `issueResidency`, `join`, `leave` and `withdrawEndorsement` are ungated. Since Gate 2
turns on "features are behind flags and changes are reversible", a false flag ledger is a
gate-blocking inaccuracy. (SECURITY-SCAN H-05.)

**ISS-H3 — §6's "`permanentFlags()` returns empty and a test asserts it, so a flag cannot
quietly become permanent" contradicts the same table**, in which `l1_force_inclusion` and
`sponsored_gas` both carry removal target "**never** — permanent escape hatch". Either the
assertion or the ledger is wrong; as written the paragraph asserts a control the table exempts
two entries from.

**ISS-H4 — §7.2 understates the circuit gap.** "Circuits are written but not compiled" is
accurate about the two files present and misleading about the set: there is **no
`personhood_enrol.circom`**, and `CIRCUIT_ENROL` is the root of every Sybil claim the drop
makes. §7 is the right place to say so plainly. (SECURITY-SCAN H-08.)

**ISS-H5 — §7.4 mis-severities a liveness ceiling as an optimisation.** "Correct but wasteful;
a ring buffer is queued as debt" describes an array that (a) is scanned O(n²) from a
state-changing path, ~130,800 storage reads at the 512 cap, and (b) contains the ISS-C4
underflow. "Correct" is not true, and "wasteful" understates a hard cap on party activity.
(SECURITY-SCAN C-04, H-02.)

**ISS-H6 — the quorum computation diverges from the reference.**
`GovernanceRules.sol:96` casts to `uint16` and wraps at ≥6.5536× turnout, where
`governance.js:147` does not — the chain can record Defeated on a 660% turnout that the client
told the citizen had passed. §2.4 makes differential testing mandatory "wherever the reference
implementation and a contract implement the same rule"; the standard is right and this instance
escaped it, along with the charter-override divergence (SECURITY-SCAN M-06) and the `leftAt`
eligibility divergence (M-05). (SECURITY-SCAN H-03.)

### Medium

**ISS-M1 — §3's "Every `UT-####` maps to an `FR`/`NFR`/`RISK` in the RTM (Doc 08)" is
unverifiable.** `docs/08-requirements-traceability-matrix.md` does not exist; neither does
`docs/07`. Until the tester produces them, the mapping is an intention. Mark it forward-looking
or hold the claim.

**ISS-M2 — §3's inventory counts do not reconcile with the test files.** The `UT-0300..0361`
row claims 18; `adversarial.test.mjs` + `deployment-safety.test.mjs` contain noticeably more
named cases, and `UT-0500..0525 / indexer / 16` cannot be checked because no indexer test file
exists in the repository. An inventory that a reviewer cannot reconcile in one command is not
doing its job.

**ISS-M3 — §2.7 claims a 100%-branch coverage target for "governance-critical contract paths
(membership, thresholds, tallies, nullifiers, eligibility)" with no evidence.** No coverage
report is cited or present. Given that ISS-C2 (eligibility) and ISS-C4 (membership) are
uncovered branches in exactly those paths, the claim needs either a report or a retraction.

**ISS-M4 — §2.5 "No mock where a real component fits; only the ZK verifiers are mocked" is
accurate but incomplete.** The mocks are registered at hand-written signal counts that disagree
with the circuits (ISS-C3), which converts the mock from a stand-in into a source of false
assurance. §7.1 should carry that caveat next to `IS_INSECURE_MOCK`.

**ISS-M5 — §5's closing paragraph attributes the defect findings to "the Doc 04 test
strategy".** Under the review loop the detector for a code drop is the `document-review` skill
run by a neutral role, and the Gate-2 security scan is `reviewer-qa`'s. Attributing code defects
to a test-strategy document blurs which control caught them, which matters when judging whether
the control is working.

### Low

- **ISS-L1 — §1.2's gas figures are correctly caveated** as "execution gas only … a regression
  detector, not a price" — good — but the table header says "Verified toolchain facts
  (measured, not assumed)", which invites the numbers to be quoted as costs. Move the caveat
  into the table.
- **ISS-L2 — §8 names the trunk as `claude/decentralized-political-party-fy8b1k`.** A
  tool-generated branch name as the permanent trunk will read oddly in a repository whose
  auditability is a political property.
- **ISS-L3 — §5's "Two further findings were accepted as documentation defects"** does not give
  them IDs, so they cannot be traced or re-checked.
- **ISS-L4 — the document has no rollback/reversibility section.** Gate 2 requires proven
  rollback; §6's flag ledger is the nearest thing and it is inaccurate (ISS-H2). One short
  section stating what is reversible by flag, what by redeploy, and what is irreversible (e.g.
  `setSpenderAuthoriser`, `Party.dissolve`) would serve the gate directly.

## 5. What is genuinely good (and should survive the rework)

§1.1's toolchain decision and §4's honest statement of the limits of capability-absence testing
are the two best passages in the document set I have read so far. §2.1 ("test names state the
guarantee, not the mechanism") is a standard worth keeping verbatim, and the suites do follow
it. §7's willingness to publish known limitations at all — particularly §7.5 on public tallies —
is the right instinct; the corrections above are about accuracy, not candour.

## 6. Routing

To the **engineer** (owner) for v1.1.0, and the code defects to the engineer for fix. The
regression tests named in each security-scan entry go to the **tester**. Six critical code
defects; do not re-review until all six are fixed and covered, and until §5, §6 and §7's factual
claims match the repository.
