# Independent Security Scan — Trumocracy core

```
Scan ID:       SEC-TRUMOCRACY-2026-08-09
Scanner:       reviewer-qa (independent approver — read-only on all code)
Date:          2026-08-09
Scope:         packages/contracts/src/core/*.sol · packages/contracts/src/{interfaces,mocks}
               packages/protocol/src/*.js · packages/circuits/circuits/*.circom
               services/indexer/src/index.js
Method:        manual source audit (line-by-line) + mechanical primitive scan + compile
               + packages/protocol unit suite. Contract suite NOT re-run (budget); every
               finding below is derived from source, not from a failing test.
Evidence run:  node packages/contracts/script/compile.mjs      → all 11 units compile, all
                                                                 under EIP-170
               node tools/dep-guard/check.mjs                  → 6 packages, layering OK
               npx vitest run --root packages/protocol          → 82/82 pass
Findings:      6 critical · 8 high · 7 medium · 6 low
Verdict:       DO NOT MERGE
```

---

## 0. How to read this

Every finding below is one I convinced myself is real by reading the code path end to end. I
have not padded the list with style, naming or gas-golf observations, and I have not softened
anything. Section 5 lists what I checked and found **clean**, because in a codebase whose
central claim is the *absence* of capabilities, a negative result is a deliverable too.

Two of the criticals (C-02, C-05) are the same failure shape: **a security property that is
described in prose, asserted in a docstring, and never actually enforced by a line of code.**
That shape is the single most important thing for the engineer to internalise from this scan.

---

## 1. Critical

### C-01 — `RegionRegistry.issueResidency` has no caller authentication: anyone can mint unlimited residency credentials

**File:** `packages/contracts/src/core/RegionRegistry.sol:169-181` (with `:28-33`, `:141-153`)

```solidity
function issueResidency(bytes32 regionId, bytes32 attesterId, uint256 leaf) external returns (uint256 newRoot) {
    if (!regions[regionId].exists) revert UnknownRegion(regionId);
    if (frozen[regionId]) revert RegionIsFrozen(regionId);
    if (!attesterAuthorised[regionId][attesterId] || !attesters[attesterId].active) {
        revert NotAuthorisedAttester(regionId, attesterId);
    }
    newRoot = _residencyTrees[regionId]._insert(leaf);
```

`attesterId` is a **caller-supplied `bytes32`**. The function checks that *that identifier* is
authorised — it never checks that `msg.sender` is the attester. And it cannot: `struct Attester`
(`:28-33`) has no `address` field, and `registerAttester` (`:141-147`) never records one. There
is no `attesterOf[address]` mapping anywhere in the contract.

**Failure scenario.** Attester ids are public — `AttesterAuthorised(regionId, attesterId)` is
emitted on-chain (`:86`, `:152`). An attacker reads one from the log and calls
`issueResidency(regionId, thatAttesterId, myLeaf)` in a loop. Each call inserts an arbitrary
leaf into the region's residency tree. Because the `residency_member` circuit proves only
"my leaf is under `residencyRoot`" (`residency_member.circom:61-68`) and the leaf preimage
`Poseidon(C, regionId, validUntil, tier)` is chosen entirely by the attacker, every minted leaf
is a fully functional residency credential with an attacker-chosen `identityCommitment`, an
attacker-chosen expiry and an attacker-chosen tier. Nothing binds the leaf's identity component
to the `PersonhoodRegistry` identity tree — `residency_member` has no personhood root among its
signals — so the residency tree *is* the Sybil boundary for `Party.join` and
`PartyRegistry.endorse`, and it is wide open.

Consequences, all reachable by one unprivileged address:
- unlimited endorsements on any petition → `activate()` any party (`PartyRegistry.sol:237-275`);
- unlimited party memberships → `memberCount` inflation → quorum denominator control;
- inflation of `verifiedResidents()` (`:187-189`), which is simultaneously the anonymity-set
  guard (`Party.sol:184-187`, `PartyRegistry.sol:199-202`) and half the petition-threshold
  denominator (`PartyRegistry.sol:171-181`) — the attacker controls the very counter that is
  supposed to bound them;
- `issuanceCount[attesterId][regionId]` (`:178`) attributes the spike to the *spoofed*
  attester, so the "spikes are visible to everyone" control (SDD §5.3) actively misleads, and
  `slashAttester` punishes an innocent operator.

**Fix.** Bind an attester to an address. Add `address operator` to `struct Attester`, take it in
`registerAttester`, and gate `issueResidency` on
`msg.sender == attesters[attesterId].operator`. (A `mapping(address => bytes32) attesterOf`
plus deriving `attesterId` from `msg.sender` is equivalent and harder to get wrong.) Add a
negative unit test that calls `issueResidency` from a non-attester address with a valid
`attesterId` and asserts `NotAuthorisedAttester`.

---

### C-02 — `Governor` never binds the snapshot: `partyRootAtSnapshot` and `snapshotAt` are unconstrained, so votes can be forged without limit

**Files:** `packages/contracts/src/core/Governor.sol:259-294` (`vote`), `:153-188` (`propose`),
`:343-358` (`cancelDuringDiscussion`); `packages/contracts/src/core/Party.sol:77`;
`packages/circuits/circuits/tenure_member.circom:20-59`

The tenure signals are documented as
`[partyRootAtSnapshot, partyId, scope, actionNullifier, tenureSeconds]` (`Governor.sol:257`).
`vote()` validates `publicSignals[2]` (scope) and `publicSignals[4]` (tenure ≥ minimum). It
**never reads `publicSignals[0]` or `publicSignals[1]` at all.**

Three things follow, and each is independently fatal:

1. **The member root is never checked.** `Party.knownRoot` (`Party.sol:77`) and the whole
   `_rootHistory` ring buffer (`Party.sol:74-76`, `:387-394`) are written and **never read by
   any contract in the repository** — I grepped the entire tree. Compare `Party.join`, which
   *does* check its input root (`Party.sol:180: if (!regions.knownRoot(regionId, residencyRoot)) revert InvalidProof();`)
   and `PartyRegistry.endorse` (`:197`). The Governor simply omits the equivalent line.
2. **The snapshot timestamp is never bound.** `tenure_member.circom:30` declares
   `signal input snapshotAt; // bound by the contract to the proposal's snapshot timestamp`
   and `:59` constrains `tenureSeconds === snapshotAt - joinedAt`. No contract binds it. The
   prover therefore picks `snapshotAt`, and with it picks `tenureSeconds`.
3. **The "joined after snapshot" rule is not enforced.** `Governor` declares
   `error JoinedAfterSnapshot();` (`:121`) — and never throws it. The dead error is the
   author's own evidence that this check was intended and lost.

**Failure scenario.** An attacker who wants to win any vote in any party:
builds their own LeanIMT containing `Poseidon(s_i)` for fresh secrets `s_1..s_n`; takes its
root `R'`; for each `i` generates a `tenure_member` proof against `R'` with `scope = keccak("vote", partyId, proposalId)`,
`nullifier = Poseidon(s_i, scope)` and `snapshotAt` set far enough past `joinedAt` to clear any
tier's `minTenureSeconds`; submits `n` calls to `vote()`. Every one satisfies the circuit
(the inclusion proof is valid *against the attacker's own root*), every scope check passes,
every tenure check passes, every nullifier is distinct so `spendNullifier` never collides.
`n` is unbounded and costs one proof each. Constitutional-tier proposals — the ones that rewrite
the charter — fall exactly as easily as operational ones, because the 180-day tenure floor is a
number the attacker types in.

This defeats ADR-008 §2 in full and makes the entire tier table, quorum table and snapshot
design decorative. It also means the flood attack the Governor docstring claims to have closed
(`Governor.sol:21-24`) is not merely open, it is cheaper than joining the party.

**Fix.** In `propose()`, record `snapshotRoot = party.memberRoot()` in the `Proposal` struct
alongside `snapshotMembers`, and record `createdAt` as the snapshot time (already stored). In
`vote()`, `propose()` and `cancelDuringDiscussion()`: require `publicSignals.length == 6`,
require `publicSignals[0] == p.snapshotRoot` (and, for `propose`, `party.knownRoot(publicSignals[0])`),
require `publicSignals[1] == uint256(party.partyId())`, and require
`publicSignals[5] == p.createdAt` so the circuit's `snapshotAt` is chain-bound. Then throw the
`JoinedAfterSnapshot` error that already exists. Every one of these is a one-line comparison;
the absence of all of them together is the finding.

---

### C-03 — Circuit and contract disagree on the public-signal vector: the two chain-bound inputs are dropped

**Files:** `packages/circuits/circuits/residency_member.circom:93` vs `Party.sol:170`,
`Party.sol:220`, `PartyRegistry.sol:193`, `PartyRegistry.sol:221`;
`packages/circuits/circuits/tenure_member.circom:72` vs `Governor.sol:158`, `:276`, `:348`;
`VerifierRegistry.sol:109`

```
residency_member  main {public [residencyRoot, regionId, minTier, scope, nullifier, identityCommitment, nowTs]}   → 7
contracts         if (publicSignals.length != 6) revert InvalidProof();                                            → 6

tenure_member     main {public [partyRootAtSnapshot, partyId, scope, nullifier, tenureSeconds, snapshotAt]}        → 6
contracts         if (publicSignals.length != 5) revert InvalidProof();                                            → 5
```

The dropped signal in each case is precisely the one the circuit's own comment says the
*contract* is responsible for binding:

- `residency_member.circom:70-76` — "`nowTs` is a public input the contract binds to
  `block.timestamp`; ... letting the prover choose it would make every expiry check vacuous."
- `tenure_member.circom:30` — "`snapshotAt` — bound by the contract to the proposal's snapshot
  timestamp."

Neither binding exists. The test fixture conceals this: `packages/contracts/test/fixture.mjs:111-113`
registers `MockVerifier(4)`, `MockVerifier(6)`, `MockVerifier(5)` — signal counts copied from
the *contracts*, not from the *circuits*. So `UT-0341` ("refuses a proof with the wrong number
of public signals") passes while testing the wrong arity, and `VerifierRegistry.verify`'s
`publicSignalCount()` guard (`:109`) is validated against the mistake rather than against the
circuit.

**Failure scenario, whichever way it is resolved:**
- If the real Groth16 verifier is generated from these `.circom` files as written, it reports
  `publicSignalCount() == 7` / `6`, the `continue` at `VerifierRegistry.sol:109` skips it, and
  `verify` returns `false` for **every** proof. `enrol`, `join`, `leave`, `endorse`, `vote`,
  `propose` all revert permanently. The protocol is inert on the day the mocks are swapped out.
- If instead the contracts are widened to 7/6 without adding the binding checks, the prover
  supplies `nowTs = 0` and reuses an expired residency credential forever
  (`residency_member.circom:73-76` becomes vacuous), and supplies any `snapshotAt` (see C-02).

Note also that `CIRCUIT_ENROL = keccak256("personhood_enrol")` (`PersonhoodRegistry.sol:30`) has
**no circom source at all** — `packages/circuits/circuits/` contains only `residency_member` and
`tenure_member`. The circuit that is the root of the entire one-person-one-vote guarantee does
not exist, and Doc 06 §7.2 describes the circuit set as merely "written but not compiled",
which is not accurate. And SDD §5.4 documents `enrol` with three signals
(`[Nᵢ, C, issuerId]`) while the contract requires four (`PersonhoodRegistry.sol:211`, plus
`namespaceId`) — a third arity disagreement, this one between design and code.

**Fix.** Make one source authoritative. Add `nowTs` and `snapshotAt` to the contract-side signal
vectors, bind them (`publicSignals[6] == block.timestamp` with a small tolerance window;
`publicSignals[5] == p.createdAt`), and set the fixture's `MockVerifier` arities from the
circuit files rather than by hand. Write the `personhood_enrol.circom` source or remove the
claim. Add a CI check that asserts each `main {public [...]}` list length equals the constant
the calling contract enforces — this class of bug should not be re-findable by a human.

---

### C-04 — `Party.surgeActive()` reverts by arithmetic underflow the first time membership decreases, permanently bricking `join`, `leave` and `propose`

**File:** `packages/contracts/src/core/Party.sol:279-281`

```solidity
uint256 growthBps =
    ((uint256(endS.memberCount) - uint256(startS.memberCount)) * 10_000) / uint256(startS.memberCount);
if (endS.memberCount > startS.memberCount && growthBps > 2_000) return true;
```

The guard `endS.memberCount > startS.memberCount` is evaluated **after** the subtraction that
it is guarding. `endS` is always the newer sample and `startS` the older one (outer loop
`:272` walks `e` down from `n`, inner loop `:275` walks `s` down from `e-1`). So the moment any
older sample holds a higher member count than any newer one within a 30-day span, Solidity
0.8 checked arithmetic panics and the whole call reverts.

**Failure scenario.** A party has ≥2 growth samples. One member calls `leave()`
(`Party.sol:219-237`); `memberCount -= 1`; `_sampleGrowth()` runs and — inside the same hour —
takes the coalescing branch (`:295-296`), which writes the lower count into the last sample
without calling `surgeActive()`. The transaction succeeds. More than an hour later, the *next*
`join()` or `leave()` takes the push branch (`:298`) and calls `surgeActive()` at `:306`. The
older sample now exceeds the newer one, the subtraction underflows, and the call reverts.

From that point:
- `Party.join()` reverts (`:210 _sampleGrowth`) — **nobody can ever join the party again**;
- `Party.leave()` reverts (`:234`) — **nobody can ever leave**, which is the one right the
  contract promises "cannot be blocked" (`:215`);
- `Governor.propose()` reverts (`Governor.sol:163: bool surge = party.surgeActive();`) — **the
  party can never make another decision**.

There is no admin, no pause and no upgrade path (correctly — see §5), so there is also no
recovery. A single member exercising their right to leave permanently destroys the party. This
is not an adversarial edge case; it is the normal operation of the contract.

The reference implementation does **not** share the bug — `governance.js:120-122` computes the
same expression in floating point, gets a negative `growthBps`, and returns `false`. So this is
also a live reference-vs-chain divergence: JS says "no surge", the chain says "revert". The
differential test `UT-0420` misses it because it performs 30 joins and zero leaves
(`differential.test.mjs`, `for (let i = 0; i < 10; i++) await join(i)` … `i < 30`) — the
history it feeds both implementations is monotonically increasing by construction.

**Fix.** Evaluate the guard first and skip:
`if (endS.memberCount <= startS.memberCount) continue;` before computing `growthBps`. Add a
differential case whose membership history goes **down** as well as up, and an integration test
that joins, leaves, warps two hours and joins again.

---

### C-05 — `PartyRegistry.openForkPetition` takes the fork threshold and the cooling-off clock as caller-supplied parameters

**File:** `packages/contracts/src/core/PartyRegistry.sol:295-356`

```solidity
struct ForkInput { ...; uint64 initiators; uint64 forkInitiatedAt; ... }

function _checkForkEligibility(address parent, uint64 initiators, uint64 forkInitiatedAt, uint64 durationSeconds) private view {
    uint64 parentMembers = Party(parent).memberCount();
    uint16 shareBps = parentMembers == 0 ? 0 : uint16((uint256(initiators) * 10_000) / parentMembers);
    if (shareBps < FORK_MIN_INITIATOR_BPS) revert ForkInitiatorsInsufficient(shareBps, FORK_MIN_INITIATOR_BPS);
    if (block.timestamp < forkInitiatedAt + FORK_COOLING_OFF) revert ForkCoolingOff(...);
```

`initiators` and `forkInitiatedAt` arrive **in the calldata of the very call being checked**.
There is no on-chain record of a fork initiation anywhere in the repository — no
`initiateFork()`, no per-initiator nullifier, no `forkInitiators` mapping, nothing. The contract
is asking the attacker how many people support the attacker, and when the attacker started.

**Failure scenario.** Anyone calls
`openForkPetition({ parentPartyId: P, initiators: type(uint64).max/2, forkInitiatedAt: uint64(block.timestamp) - 30 days, ... })`
and the fork petition opens immediately with zero real initiators and zero waiting. Both
protections stated in ADR-008 §5, restated in the function's own docstring (`:288-293`), and
restated again in `packages/protocol/src/party.js:158-170`, are unenforced. `FORK_MIN_INITIATOR_BPS`
and `FORK_COOLING_OFF` are dead constants.

The impact is not only "an easy fork". `openForkPetition` writes a full `Petition` and pushes to
`_petitionIds` (`:317-332`), so it is also an unbounded, unmetered storage-growth primitive
callable by anyone, and it lets an attacker mint an unlimited number of petitions that inherit a
real party's `jurisdiction` and lineage — a brand-confusion and endorsement-splitting attack on
the parent party at the cost of gas.

(Secondary, same function: `uint16(...)` at `:350` truncates `shareBps`. With an honest
`initiators ≤ memberCount` it cannot overflow, but since `initiators` is attacker-supplied,
`initiators = 7 * parentMembers` yields `70000 → 4464` and the *revert* message reports a
nonsense share. Cosmetic next to the main defect; noted so it is fixed in the same pass.)

**Fix.** Make initiation a first-class on-chain act. Add
`initiateFork(bytes32 parentPartyId, proof, publicSignals)` that verifies a `residency_member`
or `tenure_member` proof scoped to `keccak("fork-initiate", parentPartyId)`, burns the
nullifier via `personhood.spendNullifier`, increments `forkInitiators[parentPartyId]`, and
stamps `forkInitiatedAt[parentPartyId]` on the **first** initiation only.
`_checkForkEligibility` then reads both from storage and takes neither from calldata.

---

### C-06 — `Governor.execute` binds no relationship between a proposal's tier and what it is allowed to do

**Files:** `packages/contracts/src/core/Governor.sol:327-340`, `:153-169`;
`GovernanceRules.sol:42-44`; `Party.sol:342-375`

```solidity
p.executed = true;
if (p.target != address(0)) {
    (bool ok,) = p.target.call(p.callData);
    if (!ok) revert ExecutionFailed();
}
```

`target` and `callData` are arbitrary and are taken verbatim from `ProposalInput` at creation
(`:225-226`). Nothing anywhere — not `propose`, not `_record`, not `execute` — checks that the
*action encoded in `callData`* is one the proposal's *tier* is permitted to take. The tier only
selects the numeric thresholds in `GovernanceRules.baseRules`.

Tier 0 (operational) is `Rules(500, 5_001, 0, 0, 0, 3 days, false)` — **5% quorum, simple
majority, zero minimum tenure, zero discussion period, zero timelock**
(`GovernanceRules.sol:43`).

**Failure scenario.** An attacker opens a tier-0 proposal with
`target = address(party)`, `callData = abi.encodeWithSelector(Party.dissolve.selector)`.
The Governor is the Party's `governor` (`PartyRegistry.sol:261`), so `Party.dissolve()`'s
`if (msg.sender != governor) revert NotGovernor();` (`Party.sol:372`) is satisfied when the
Governor makes the call. Three days later, with 5% turnout, no discussion window, no tenure
requirement and **no timelock at all**, the party is dissolved irreversibly (`dissolved` is set
once and there is no un-dissolve). The same primitive reaches `Party.amendCharter` and
`Party.publishManifesto`, and any external target the attacker likes.

The `clauseId` guard at `:159-161` is not a defence: it inspects `input.clauseId`, a field the
proposer chooses, and an attacker simply leaves it `0` while putting the real clause in
`callData`. (`Party.amendCharter` does re-check `immutableClause` itself, so *immutable* clauses
survive — but dissolution, manifesto publication, entrenched clauses and every non-Party target
do not.)

So: T3 constitutional decisions require 40% quorum, 75% approval, 180 days of tenure and a
30-day timelock — unless you route the identical state change through a T0 proposal, in which
case it requires none of them. The entire ADR-008 §1 tier design is bypassable by choosing a
different integer in one calldata field. Combined with C-02 (votes are forgeable), a stranger
can dissolve any party on the platform in three days.

**Fix.** Bind action to tier. Either (a) classify the call at proposal time — derive the
required tier from `(target, bytes4(callData))` via an on-chain table and require
`input.tier >= requiredTier`, rejecting unknown selectors on privileged targets; or (b) drop
the arbitrary-call primitive entirely and expose a small enum of typed actions
(`AmendCharter`, `PublishManifesto`, `Dissolve`, …) each carrying its own minimum tier.
Independently, give tier 0 a non-zero timelock, or forbid tier 0 from targeting the Party at
all. Add a test that asserts a T0 proposal targeting `Party.dissolve` is **rejected at
`propose()`**.

---

## 2. High

### H-01 — The `spendNullifier` fix is incomplete: `setSpenderAuthoriser` is re-pointable and self-authorising, and nothing can ever be de-authorised

**File:** `packages/contracts/src/core/PersonhoodRegistry.sol:268-288`

Doc 06 §5 records the original unrestricted `spendNullifier` as a fixed Critical. The guard
itself is now correct — `spendNullifier` (`:259-265`) requires `authorisedSpender[msg.sender]`,
and `authoriseSpender` (`:283-288`) is correctly reachable **only** from `spenderAuthoriser`
(I verified: no other call site, no fallback, no delegatecall). The hole is one level up.

```solidity
function setSpenderAuthoriser(address authoriser) external {
    if (msg.sender != timelock) revert NotTimelock();
    if (authoriser == address(0)) revert ZeroAddress();
    spenderAuthoriser = authoriser;
    authorisedSpender[authoriser] = true;      // ← self-authorises, as a side effect
    ...
}
```

1. **It is not one-shot.** Unlike `Party.setGovernor`, which guards with `GovernedAlreadySet`
   (`Party.sol:150`), this may be called any number of times and re-points the authority.
2. **It authorises its own argument.** So `setSpenderAuthoriser(X)` does not merely nominate X
   as the nominator — it makes X a nullifier burner outright.
3. **There is no de-authorisation**, deliberately (`:279-281`). Every address ever passed stays
   authorised forever, including superseded authorisers.

**Failure scenario.** The protocol timelock calls `setSpenderAuthoriser(timelock)` — a single
transaction, using an existing, documented, timelock-gated function. It is now an
`authorisedSpender` and calls `spendNullifier(anyScope, anyNullifier)` directly, marking any
citizen's action nullifier as spent in any scope. That citizen's vote, endorsement or party
join for that scope is permanently and silently refused. This is exactly the
"one-call disenfranchisement" the fix was written to remove, restored one level up, and it
directly contradicts `PersonhoodRegistry.sol:18-20`
("There is no admin function that can revoke a citizen's participation"). It is also
**irreversible**, which makes it the sharpest contradiction of the handbook's
"reversibility is the risk strategy" principle in the codebase.

`UT-0326` ("authorises exactly the modules the registry deployed, and nothing else") does not
cover it, because the test exercises `authoriseSpender`, not `setSpenderAuthoriser`.

**Fix.** Make `setSpenderAuthoriser` one-shot (`if (spenderAuthoriser != address(0)) revert AlreadySet();`),
or better, take the `PartyRegistry` address as an immutable constructor argument and delete the
setter. Do **not** set `authorisedSpender[authoriser] = true` inside it — the authoriser needs
the right to *nominate*, not the right to *burn*. Add a test that asserts the timelock cannot
burn a nullifier.

---

### H-02 — `Party.surgeActive()` is O(n²) over up to 512 storage samples and is called from a state-changing path

**File:** `packages/contracts/src/core/Party.sol:268-285`, called at `:306` and `Governor.sol:163`

The nested loop is bounded only by the sample array. The outer break needs the *end* sample to
be older than 90 days; the inner break needs a span over 30 days. Samples are coalesced to one
per hour (`:295`), so 512 samples span ~21 days — **neither break ever fires** at the cap, and
the loop runs the full `512 × 511 / 2 ≈ 130,800` iterations, each doing a storage read of a
`GrowthSample`. That is tens of millions of gas — at or beyond a single block's limit.

`surgeActive()` is not merely a view: `_sampleGrowth()` calls it at `:306` on every push branch,
i.e. from inside `join()` and `leave()`. Once the array reaches its cap, joins and leaves become
unaffordable and then impossible; and because a reverted join pushes no sample, the array never
shrinks and the condition never clears. `Governor.propose()` (`Governor.sol:163`) dies with it.

Compounding it, the trim at `:299-305` shifts all 512 elements down by one on **every** push
past the cap — ~511 storage read-write pairs per join, forever, and it only ever removes one
element so the array stays pinned at the cap. Doc 06 §7.4 calls this "Correct but wasteful"
and SDD §13 files it as debt to repay "before mainnet scale"; that assessment understates it,
because combined with the O(n²) scan it is a hard liveness ceiling on any party with sustained
activity, not a gas optimisation.

**Fix.** Replace `growthSamples` with a fixed-size ring buffer (as SDD §13 already intends), and
cache the surge verdict: compute it once per push and store a `bool surgeCached` + `uint64
surgeCheckedAt`, so `join`/`leave`/`propose` read a slot instead of running a quadratic scan.
Bound the inner loop by index as well as by time.

---

### H-03 — `GovernanceRules.passed` truncates the quorum ratio to `uint16`; the reference implementation does not

**File:** `packages/contracts/src/core/GovernanceRules.sol:96` vs
`packages/protocol/src/governance.js:147`

```solidity
quorumReachedBps = uint16((participation * BPS) / snapshotMembers);   // Solidity: wraps mod 65536
```
```js
const quorumReachedBps = Math.floor((participation * BPS) / snapshotMembers);   // JS: unbounded
```

`snapshotMembers` is the member count frozen at proposal creation (`Governor.sol:201`);
`participation` is the count of votes actually cast, which is bounded by the *current* member
count, not the snapshot. Whenever participation reaches ≥ 6.5536 × `snapshotMembers`, the
Solidity value wraps.

**Failure scenario.** A party has 10 members when a proposal opens. Over the three-day voting
window the party grows to 66 and all 66 vote. True quorum = 66,000 bps. Solidity computes
`66000 mod 65536 = 464` bps → 4.64% → below even the 5% operational floor → `finalize` records
the proposal **Defeated** with a 660% turnout. The reference implementation, and therefore the
client that told the citizen "your proposal passed", reports 66,000 bps and `PASSED`. The
citizen is told the opposite of what the chain recorded — precisely the divergence
`differential.test.mjs`'s own header calls "a release blocker".

Reachability is not hypothetical: it requires only that a party more than sextuple in size
during a voting window, which is the growth surge the protocol has a whole subsystem to detect;
and C-02 makes participation entirely detached from membership anyway. Note the wrap can land
either way — it can also make a failed proposal appear to pass.

(`approvalReachedBps` at `:99` is safe: `forVotes ≤ decisive`, so the ratio never exceeds 10,000.)

**Fix.** Compute in `uint256`, clamp before the cast:
`uint256 q = (participation * BPS) / snapshotMembers; quorumReachedBps = q > BPS ? BPS : uint16(q);`
and compare on the `uint256`. Mirror the clamp in `governance.js` so the two still agree, and
add a differential case with `participation > snapshotMembers`.

---

### H-04 — `PartyRegistry.withdrawEndorsement` requires no prior endorsement, no jurisdiction match and no known root

**File:** `packages/contracts/src/core/PartyRegistry.sol:216-229`

Compare it line by line against `endorse` (`:188-209`), which checks the region
(`publicSignals[1] != p.jurisdiction`), the residency root (`regions.knownRoot(...)`), the
anonymity-set floor, and the petitions flag. `withdrawEndorsement` checks **none of them**. It
verifies a `residency_member` proof, burns a nullifier in the distinct
`keccak("withdraw-endorsement", petitionId)` scope, and decrements.

Because the withdraw scope is distinct from the endorse scope — necessary for unlinkability,
and correct as far as it goes — there is no cryptographic link between "endorsed" and
"withdrawing". But the contract also never establishes a *non-cryptographic* one, so the call
is available to anyone holding **any** residency credential for **any** region.

**Failure scenario.** A petition in region A is 200 endorsements from its threshold. An
opposing group of 200 verified residents of region B — a different country, with no standing in
region A's petition whatsoever — each call `withdrawEndorsement` once. The counter drops by
200. They never endorsed. Combined with C-01 (free residency minting), a single attacker drives
any petition's endorsement count to 1 for the price of gas, and `expire()` (`:278-284`) then
closes it permanently.

**Fix.** At minimum, replicate `endorse`'s three checks: jurisdiction match, `regions.knownRoot`,
and the anonymity floor, plus `flags.requireEnabled(FLAG_PETITIONS)`. Properly: bind withdrawal
to a prior endorsement — have the endorse proof also publish a per-petition commitment that the
withdrawal must open, so only an actual endorser can withdraw. Until that exists, the
endorsement count is not a count of support.

---

### H-05 — A circuit found to be unsound cannot be retired; the 30-day grace is unconditional and no flag covers the affected calls

**File:** `packages/contracts/src/core/VerifierRegistry.sol:53-80`, `:96-113`

`register()` is the only way to supersede a circuit, and it *always* grants the outgoing version
`SUPERSEDE_GRACE = 30 days` (`:65`). `verify()` (`:105-111`) returns true if **any** live
version accepts. There is no `retire(circuitId, version)`, no way to set `retiredAt` to now, and
no way to shorten the window.

The docstring frames the grace as anti-disenfranchisement, which is a good goal. But the most
likely reason to replace a circuit is that it was found **unsound** — and in that case the grace
period is the attacker's window. For 30 days after the fix ships, forged proofs against the
broken key remain valid.

The feature-flag kill switch does not cover it. `FeatureFlags` gates only
`FLAG_PETITIONS` (`PartyRegistry.openPetition/endorse/activate`), `FLAG_FORK`
(`openForkPetition`) and `FLAG_GOVERNANCE` (`Governor.propose`). `PersonhoodRegistry.enrol`,
`RegionRegistry.issueResidency`, `Party.join`, `Party.leave`,
`PartyRegistry.withdrawEndorsement`, `Governor.vote`, `finalize` and `execute` are **ungated**.
For `vote`/`finalize`/`execute` that is a deliberate, well-argued decision (`Governor.sol:262-268`)
which I endorse. For `enrol`, `issueResidency`, `join` and `leave` it appears simply to have
been missed — and it makes the `FeatureFlags` docstring claim that "every capability that can be
exercised on-chain is gated here too" (`FeatureFlags.sol:11-13`) false, as does Doc 06 §6's
identical claim.

**Fix.** Add `retire(bytes32 circuitId, uint256 version)`, timelock-gated, that sets
`retiredAt = block.timestamp` immediately, and let `register` take the grace period as a
parameter (0 for a soundness fix, 30 days for a routine re-ceremony). Add flags to `enrol`,
`issueResidency`, `join` and `leave`, or amend both docstrings to state which calls are
deliberately ungated and why.

---

### H-06 — The published `identityCommitment` is a stable, cross-context pseudonym that defeats the scoped-nullifier unlinkability claim

**Files:** `residency_member.circom:36`, `:93`; `Party.sol:97`, `:176`, `:211`;
`PartyRegistry.sol:188-209`; `PersonhoodRegistry.sol:104`, `:246`

Nullifiers are correctly scoped, and I confirmed the scope is pinned at every call site (see
§5). But every `residency_member` action also publishes `identityCommitment` as
`publicSignals[5]`, and that value is **the same for one person across every region, every
party, every petition and every action**, because it is `Poseidon(identitySecret)` with no
scope input (`residency_member.circom:50-52`).

- `Party.join` stores it (`joinedAt[identityCommitment]`) and emits it **indexed**
  (`event Joined(uint256 indexed identityCommitment, ...)`, `:97`), so a single log filter
  enumerates every party a given person has ever joined.
- `PersonhoodRegistry.Enrolled` emits it **indexed** alongside `issuerId` and `tier` (`:104`),
  tying that pseudonym to which issuer verified them and when.
- `PartyRegistry.endorse` receives it in `publicSignals[5]` and **never uses it** — it is in the
  calldata of every endorsement for no functional reason at all (`:188-209`).

**Failure scenario.** An observer with only public chain data builds, for every enrolled person:
their enrolment issuer, credential tier and enrolment time; the complete list of parties they
have joined and left with timestamps; and — from endorsement calldata — the complete list of
petitions they have endorsed. That is a per-citizen political dossier keyed to a stable
identifier, in a system whose `PersonhoodRegistry` docstring promises that
"the same human endorsing a petition and voting in an unrelated election produces two
nullifiers with no derivable relationship" (`:254-256`). The nullifiers are indeed unlinkable;
the identifier printed next to them is not. Re-identification then needs only one leak linking
a commitment to a person — which the credential issuer (`B4` in SDD §10.1) already holds.

The circuit comment (`residency_member.circom:22-24`) acknowledges publication *within a
region*, and the k ≥ 1000 floor addresses that. Neither addresses *cross-context* linkage, and
the SDD's STRIDE table has no row for it (the closest, "correlation over time (RISK-06)", is
listed as a residual of the k-anonymity control, not of a stable published identifier).

**Fix.** Publish a **scoped** pseudonym instead: `Poseidon(identitySecret, partyId)` for party
membership, so tenure still works within a party while nothing links across parties. Remove
`identityCommitment` from the endorsement signal vector entirely — nothing reads it. Un-index
the commitment in `Joined` and `Enrolled`. If a stable per-party identifier is genuinely
required for the tenure design, say so explicitly in the SDD and in the citizen-facing
disclosure, because right now the documents promise the opposite of what ships.

---

### H-07 — A 64-entry root history sized per *insertion* makes residency proofs unusable in any region at real scale

**Files:** `RegionRegistry.sol:61`, `:275-282`; consumed at `Party.sol:180`,
`PartyRegistry.sol:197`

`_recordRoot` is called on every `issueResidency` (`:177`), and `ROOT_HISTORY` is 64. So a
region's set of accepted roots covers only its **last 64 credential issuances** — not a time
window.

**Failure scenario.** SDD §7.6 sizes the system for 50 M enrolled and 10 M eligible in one
jurisdiction. A region issuing even one credential a minute rotates its entire root history in
just over an hour; at launch-day rates, in seconds. A citizen fetches the current root, spends
4–10 s generating a proof on a phone (SDD §10.3), and submits — by which time the root they
proved against has been evicted and `knownRoot` is `false`. `Party.join` (`:180`) and
`PartyRegistry.endorse` (`:197`) both revert with `InvalidProof`, which is also a
**misleading error**: the proof was valid, the root was stale. Users see random failures with a
message implying their credential is bad, and retrying does not converge because the root keeps
moving.

**Fix.** Make root validity time-based rather than count-based: store
`rootValidUntil[regionId][root] = block.timestamp + ROOT_TTL` (e.g. 1 hour) and accept any root
whose TTL has not expired, or keep a much larger ring plus a TTL. Distinguish `UnknownRoot` from
`InvalidProof` so the client can tell the citizen to refresh rather than implying a bad
credential. The same sizing question applies to `PersonhoodRegistry` (`:93`), though it is less
acute because `requireKnownRoot` there is currently called by nobody.

---

### H-08 — The enrolment circuit does not exist

**Files:** `PersonhoodRegistry.sol:30` (`CIRCUIT_ENROL`), `packages/circuits/circuits/` (contains
only `residency_member.circom`, `tenure_member.circom`)

`enrol()` is the sole entry point to personhood and therefore the root of every downstream
guarantee, and its circuit has no source file. Doc 06 §7.2 states the circuit package "holds the
Circom sources for `residency_member` and `tenure_member`" — accurate as a list, but presented
under a heading that reads as though the circuit set is complete and merely awaiting
compilation. A reader of Doc 06 would not learn that the personhood circuit is unwritten.

I am rating this High rather than treating it as scope, because the security properties asserted
throughout the SDD, ADR-003 and the test names ("UT-0320 gains an attacker nothing from
controlling many addresses") are properties of a circuit nobody has specified, and cannot be
reviewed, audited or ceremonied until it exists.

**Fix.** Either write `personhood_enrol.circom` in this drop, or state plainly in Doc 06 §7 that
the personhood circuit is unwritten and that every Sybil-resistance claim is therefore
unverified — and carry it as an explicit Gate-2 blocker.

---

## 3. Medium

**M-01 — Proposal history is linkable to a stable per-citizen pseudonym.**
`Governor.sol:89`, `:177-187`. The propose scope is `keccak("propose", partyId)` — constant per
party, not per proposal. So `publicSignals[3]` is the *same nullifier value* for every proposal
that citizen ever opens in that party, and it is used as the rate-limit map key
(`lastProposalAt[nullifierKey]`) and sits in public calldata. Every proposal by one person is
publicly joinable into a single authored history, correlatable with the proposal text. The
keyspace choice itself is *right* — keying on the scope (as the mapping's name
`proposerScope` misleadingly suggests) would rate-limit the entire party to one proposal per
day; keying on the nullifier gives the intended per-person limit. The defect is the constant
scope, not the key. **Fix:** derive the propose nullifier over a rolling epoch,
`keccak("propose", partyId, block.timestamp / PROPOSAL_COOLDOWN)`, which preserves the cooldown
while breaking cross-proposal linkage; rename the mapping key to `proposerNullifier`.

**M-02 — `RegionRegistry.proposePopulation` is permissionless and resets the dispute clock.**
`RegionRegistry.sol:229-254`. Every call overwrites `pendingSince = block.timestamp` (`:252`).
`activatePopulation` requires `block.timestamp >= pendingSince + 7 days` (`:259-260`). An
attacker calling `proposePopulation` once a week — a cheap, unprivileged, unlimited call —
prevents any population update from ever taking effect, freezing the petition denominator
indefinitely. **Fix:** do not reset `pendingSince` when the recomputed median equals
`pendingValue`; and/or restrict `proposePopulation` to the timelock (the sources it reads are
already timelock-written, so permissionlessness buys nothing here).

**M-03 — Indexer drops governance-visible state transitions and cannot survive a reorg.**
`services/indexer/src/index.js:85-260`, `:73-81`. No handler exists for `ProposalCancelled`,
`Dissolved` or `CharterAmended`. Consequences: `PARTY_STATE.DISSOLVED` (`party.js:18`) is
**unreachable** in the projection, so a dissolved party renders as `ACTIVE` forever; a proposal
cancelled by its proposer renders as open through its entire nominal voting window. Neither
`party.state` nor proposal cancellation is in `AUTHORITATIVE_FIELDS` (`:23-33`), so the client
is not told to re-check them on chain. The `default:` comment's claim that "every event that
MATTERS is handled above, and the differential replay test asserts that set is complete"
(`:256-258`) is therefore false. Separately, `applyEvent` throws `OUT_OF_ORDER` on any
non-increasing `(blockNumber, logIndex)` (`:73-81`) — a chain reorg replaying a block wedges the
projection permanently, with no rollback path. **Fix:** add the three handlers plus a `cancelled`
field; add `party.state` and `proposal.cancelled` to `AUTHORITATIVE_FIELDS`; add reorg handling
(snapshot per block + rewind on reorg) or document the operator runbook for a rebuild.

**M-04 — A passed proposal can burn any nullifier in any scope, protocol-wide.**
`Governor.sol:336` + `PersonhoodRegistry.sol:259-265`. Every Governor is an `authorisedSpender`
(`PartyRegistry.sol:267`), and `spendNullifier` accepts an **arbitrary** scope from any
authorised spender. Every other call site pins the scope to its own action; `execute` does not.
So `target = personhood, callData = spendNullifier(scope, n)` lets party A's members burn a
nullifier belonging to a citizen of party B, or a petition endorsement scope. Exploitability is
limited — the attacker must know the target nullifier, and pre-image resistance plus the
timelock rule out front-running — but the primitive should not exist, and it contradicts the
"no disenfranchisement" claim. **Fix:** have `spendNullifier` check that the scope belongs to
the caller, e.g. register each spender with its scope prefix at `authoriseSpender` time and
require `scope` to derive from the caller's `partyId`.

**M-05 — A member who leaves keeps a valid, permanent membership witness.**
`Party.sol:232` (`leave` sets `leftAt` and never removes the leaf), `tenure_member.circom:43-59`
(proves inclusion only — it has no `leftAt` input and no non-membership check),
`Governor.sol:259-294` (`vote` never reads `party.leftAt`). The member tree is append-only, so
every historical root that included a departed member still includes them, and the Governor
consults neither the tree nor `leftAt`. `Party.isMemberAt` (`:239-244`) implements exactly the
right predicate and is called by nobody. So a member can leave and continue voting.
`isEligible` in the reference implementation *does* check `leftAt` (`governance.js:190`) — a
further chain/reference divergence. **Fix:** add `leftAt` (or a "still a member at snapshot"
constraint) to the tenure circuit's witness, or have `vote` reject when
`party.leftAt(commitment) != 0` — which requires publishing a per-party scoped commitment,
tying this fix to H-06's.

**M-06 — Charter overrides diverge between reference and chain.**
`governance.js:45-96` vs `GovernanceRules.sol:58-78`. The reference lets a charter ratchet up
`quorumBps`, `approvalBps`, `timelockSeconds`, `discussionSeconds` and `minVotingSeconds`
(`pick()` on each). Solidity's `effectiveRules` accepts a single `charterTenure` argument and
silently ignores everything else — and `Party.Charter` (`Party.sol:42-50`) has no fields to hold
them, so `Governor._charterTenure` (`:386-392`) can only ever pass tenure. A party that
configures a 60% quorum in its charter is told by the client that a 55%-turnout proposal failed,
while the chain finalises it as passed at the protocol floor of 10%. `UT-0400`/`UT-0401` do not
catch this because they call the probe with `charterTenure = 0` or a single tenure value.
**Fix:** either extend `Party.Charter` and `GovernanceRules.effectiveRules` to carry all five
overrides, or remove them from the reference implementation and from Doc 03 so the client cannot
promise a rule the chain will not enforce. Add a differential case with a non-tenure override.

**M-07 — The rejoin path is internally consistent but records no root and re-opens tenure.**
`Party.sol:196-208`. Not re-inserting an existing leaf is *correct* — a duplicate insert would
corrupt the LeanIMT, and the comment says so. But the branch also skips `_recordRoot`, so a
rejoin changes `memberCount` (the quorum denominator) while producing no new known root, and it
resets `joinedAt` (`:197`) while the member's inclusion witness against **all** historical roots
persists. Given C-02 and M-05, a rejoining member can prove whichever tenure suits them; even
after C-02 is fixed, a leave/rejoin cycle silently launders a tenure reset past any snapshot
root that predates the leave. **Fix:** once C-02 binds the snapshot root, add a test that a
member who leaves and rejoins is ineligible for a proposal snapshotted before the rejoin, and
assert `memberRoot()` is stable across a rejoin.

---

## 4. Low

- **L-01 — `tenure_member.circom:68-69` binds nothing.** `signal partyBinding; partyBinding <== partyId * partyId;`
  constrains only a signal nothing reads. `partyId` feeds neither the nullifier nor the root, so
  the comment "bind the proof to this party so a proof for party A cannot be replayed against
  party B" describes a property the circuit does not establish. The real cross-party protection
  is the `scope` input (which *is* in the nullifier hash) plus the contract's scope check — that
  is adequate, but no contract checks `publicSignals[1]` either, so `partyId` is a purely
  decorative public input. Fix the comment or bind `partyId` into the nullifier.
- **L-02 — `governance.js:217`** returns the same value from both ternary branches
  (`now < sched.executableAt ? SUCCEEDED_TIMELOCK : SUCCEEDED_TIMELOCK`). Neither the reference
  nor the Solidity `State` enum can express "timelock elapsed, ready to execute", so the UI
  cannot tell a citizen the button is live. Add the state to both.
- **L-03 — `PartyRegistry.sol:350`** `uint16` downcast of `shareBps` (see C-05).
- **L-04 — `GovernanceRules.sol:65-67`** is dead code: `CONSTITUTIONAL_TENURE_FLOOR` is 90 days
  and the constitutional base is already 180 days, and `:61-63` forbids a charter from lowering
  it. The reference has the same dead branch (`governance.js:72-77`). Harmless, but it reads as
  a protection that is doing work when it is not.
- **L-05 — Inconsistent flag gating within one contract.** `openPetition`, `endorse` and
  `activate` require `FLAG_PETITIONS`; `withdrawEndorsement` (`:216`) and `expire` (`:278`) do
  not. Under the "flags gate starting, not completing" doctrine (`Governor.sol:262-268`) that is
  arguably right for `expire`, but it is nowhere stated, so it reads as an omission.
- **L-06 — Duplicate roots would be wrongly un-marked.** `_recordRoot` in both registries and in
  `Party` un-marks the evicted slot unconditionally (`PersonhoodRegistry.sol:311`,
  `RegionRegistry.sol:278`, `Party.sol:390`). If the same root value ever appeared twice in the
  ring, evicting the older copy would set `knownRoot[r] = false` while `r` is still current.
  With Poseidon over a monotonically growing leaf set this is not practically reachable; noted
  only because a one-line guard (`if (evicted != 0 && evicted != r)`) removes the class.

---

## 5. Verified clean — what I checked and did not find

These are stated explicitly because the absence of capability is a security control here, and a
control that is asserted but not independently checked is not a control.

- **No admin / pause / proxy / upgrade / ownership surface in the core.** I enumerated every
  `external`/`public` mutating function across all nine core contracts and read each one. There
  is no `pause`, `setAdmin`, `upgradeTo`, `grantRole`, `transferOwnership`, `forceRemoveMember`
  or `overrideResult`. The mechanical scan for `delegatecall`, `selfdestruct`, `assembly`,
  `payable`, `receive()` and `fallback()` across `packages/contracts/src/` returns **nothing**
  (the only `.call{}`-shaped construct is `Governor.execute`'s deliberate `target.call`, C-06).
  Compilation confirms all units are under EIP-170. The claimed absences hold **structurally**;
  where they fail, they fail through *authorised* callers (H-01, C-06, M-04), not through a
  hidden function — which is exactly the residual Doc 06 §4 says its ABI scanning cannot cover.
  That caveat is honest and correct.
- **No transferable membership.** No `transfer`, `approve`, `permit` or `delegate` on `Party`;
  no balance, no weight field. `vote` can only `+= 1` (`Governor.sol:289-291`). The
  flash-governance attack class really is absent.
- **`authoriseSpender` is correctly restricted** to `spenderAuthoriser` and is not reachable by
  any other path (H-01 is about the layer above it, not about this guard).
- **Nullifier scoping is sound at every call site except `execute`.** `Party.join` pins
  `_joinScope()`, `leave` pins `_leaveScope()`, `endorse`/`withdrawEndorsement` pin their
  petition scopes, `vote`/`propose`/`cancelDuringDiscussion` pin theirs. A proof for one
  scope, party, petition or proposal cannot be replayed against another — the scope is inside
  the nullifier hash (`residency_member.circom:87-90`, `tenure_member.circom:62-65`) and is
  compared on-chain. The one exception is M-04.
- **Root-history ring buffers behave correctly at the boundary.** I traced all three. The
  `uint256[64]` arrays start zeroed; `if (evicted != 0)` correctly skips the sentinel for the
  first 64 inserts; the 65th insert wraps to cursor 0 and un-marks root #1, which is by then
  genuinely 64 roots stale. No still-valid root is evicted early, no evicted root is left
  accepted, and root `0` is handled. The defect is the **sizing policy** (H-07), not the buffer.
- **`Governor.execute` is CEI-safe against re-execution.** `p.executed = true` is set before the
  external call (`:334-336`), so a malicious target cannot re-enter `execute(sameId)`.
  Re-entering `execute(otherId)` is possible but each proposal is independently gated on
  `finalized`/`succeeded`/`executed`/`executableAt`; re-entering `finalize` is blocked by
  `AlreadyFinalized`; re-entering `vote` is blocked by the closed voting window; re-entering
  `propose` requires a proof. No reentrancy exploit found. The danger in `execute` is C-06 and
  M-04, i.e. **what the call is allowed to do**, not the ordering.
- **`PartyRegistry.requiredEndorsements` rounding matches the reference.** `_ceilMulDiv`
  (`:381-384`) equals `Math.ceil` in `governance.js:235-236` for all non-negative inputs, and
  the `max(byPopulation, byVerified, floor)` structure matches. The `uint64` cast at `:180` is
  safe for any plausible population. `RegionRegistry._sort` (`:285-295`) is a correct insertion
  sort over a set bounded by timelock-registered sources; the median at `:238-240` matches
  standard even/odd handling. No divergence found here.
- **`PersonhoodRegistry.issuerSetValid()` inside `enrol()`** (`:179-186`, called at `:209`)
  iterates `_issuerIds`, which only the timelock can grow (`:143`). Bounded and not
  attacker-influenced. Fine as written.
- **`VerifierRegistry.verify`'s backward scan** (`:105-111`) is bounded by the version count,
  which only the timelock can grow, and correctly skips versions past their grace. The problem
  is the missing emergency retire (H-05), not the loop.
- **`FeatureFlags`** is one-directional as advertised: `enable` is timelock-only, `disable` is
  timelock-or-responder, and there is no path by which the responder adds power (`:53-68`).
- **`packages/protocol` has zero runtime dependencies** and the layering holds:
  `node tools/dep-guard/check.mjs` → "6 workspace package(s) checked — layering OK".
- **`packages/protocol` unit suite is green**: 82/82 in 810 ms. It tests the reference
  implementation only, so it does not and cannot cover any finding above.

---

## 6. Merge recommendation

**DO NOT MERGE to trunk.** Six critical findings — C-01 (unauthenticated residency minting),
C-02 (unbound voting snapshot), C-03 (circuit/contract signal mismatch), C-04 (permanent party
brick on the first member departure), C-05 (unenforced fork threshold) and C-06 (tier bypass via
arbitrary execute) — each independently break a load-bearing protocol guarantee, and none is
covered by an existing test. Route all findings to the **engineer** for fix and to the
**tester** for the regression cases named in each entry; I will re-scan on the next drop.
