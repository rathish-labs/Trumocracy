# Independent Security Scan -- Doc 03 v2.0.3 Directed Surfaces

```
Scan ID:         SECURITY-SCAN-DOC03-V2-2026-08-11
Role:            reviewer-qa (read-only; no edits to any scanned document)
Date:            2026-08-11
Scope:           Doc 03 v2.0.3 -- two directed surfaces only:
                 (1) Amendment boundary (Charter Layer / Guarded Layer / Open Layer;
                     DES-087; ADR-019; ss5.3/5.4/5.6; ss10.11; entrenched registry)
                 (2) Steward powers (DES-088/089; FR-114..FR-117;
                     fund custody; issuer-onboarding coordination)
                 Plus: trust-anchor lifecycle closure verification (SC-13/SC-14;
                 DES-090; ADR-020) for any NEW surface opened by the governance path.
Documents read:  docs/03-architecture-design-sdd.md v2.0.3
                 docs/adr/ADR-019-amendment-boundary-and-super-process.md
                 docs/adr/ADR-020-trust-anchor-lifecycle-governance.md
                 docs/02-requirements-srs.md v2.2.0 ss4.39 + FR-118/FR-119
                 artifacts/status/OI-18-DECISION-2026-08-11.md
Prior scans:     SC-01..SC-14 (sequence continues at SC-15)
Lens:            attack-model only; does the SPECIFIED DESIGN actually deliver
                 the security property it claims? Not a completeness review
                 (cycle-4 PASS at 100% already recorded).
Finding count:   1 CRITICAL / 3 HIGH / 2 MEDIUM / 1 LOW  (7 total)
Verdict:         DESIGN ADVANCE BLOCKED -- SC-15 (CRITICAL) must be
                 resolved at design level before backlog/test-design catch-up.
                 SCs-16/17/18 (HIGH) are recorded for architect response in the
                 same increment.
```

---

## 1. Findings

### SC-15 (CRITICAL) -- ProtocolGovernance immutability not established; "who guards the guard" unresolved

**Surface:** Amendment boundary -- Charter Layer and Guarded Layer enforcement contract.

**Claimed property:** The seven entrenched rules are unamendable by any vote. The Guarded Layer
five-property state machine is the only path to amend named absolutes.

**Attack:**

An Open Layer coalition (60%/15%) proposes an amendment whose `callData` targets a code upgrade
or replacement of the `ProtocolGovernance` contract itself (or deploys a parallel governance
contract via `Governor.execute()` and redirects all amendment proposals to it). The new contract
omits the `entrenched[ruleId]` check in `proposeAmendment()` or replaces the Guarded Layer state
machine with a direct-pass path. After the 90-day Open Layer timelock elapses, `proposeAmendment()`
for Charter Layer rules no longer reverts `EntrenchedRule`. Charter Layer rules become effectively
amendable at the 60%/15% Open Layer bar.

**Why the existing design does not close this:**

DES-087 describes `ProtocolGovernance` as a Solidity component. The container diagram in ss5.1
(the C4 L2 view) categorises v1.x contracts into IMMUTABLE CORE / TIMELOCKED REGISTRIES / MODULES.
`ProtocolGovernance` is a v2.0.0 addition (DES-087 was minted in v2.0.0). It does NOT appear in
the container diagram. The diagram's IMMUTABLE CORE category currently lists only:
`PersonhoodRegistry`, `RegionRegistry`, `PartyRegistry`, `Party`. ADR-010's prohibition on
admin/pause/proxy is cited throughout, but the SDD never explicitly declares that
`ProtocolGovernance` itself falls within IMMUTABLE CORE and is therefore not replaceable or
upgradeable via any governance vote.

DES-091 (`GovernanceConstants`) adds the constraint "No constructor argument may override a
Charter Layer (Tier-1)-adjacent constant," which limits DEPLOYMENT-TIME configuration but says
nothing about the contract's runtime replaceability.

The STRIDE table's "Guarded Layer super-process bypass" entry addresses attempts to call `enact()`
without completing all five properties -- it does NOT address an attack that replaces the
contract that enforces those properties.

ADR-010's "immutable core; no admin, no pause, no proxy" is the intended protection, but the
SCOPE of "core" in the v2.0.0 contract set is ambiguous. Without an explicit normative statement
that `ProtocolGovernance` and `StewardRegistry` are IMMUTABLE CORE (not timelocked, not
replaceable by any governance action at any layer), the protection model has a gap at its root.

**Route:** Architect MUST (1) add `ProtocolGovernance` and `StewardRegistry` to the IMMUTABLE
CORE box in the ss5.1 container diagram; (2) add a normative sentence in DES-087 stating that
`ProtocolGovernance` is deployed as an immutable non-proxy contract and cannot be replaced by any
governance action at any layer; (3) confirm that the `permittedActionClass` table for Open Layer
excludes any selector that would deploy a competing governance contract or call an upgrade function.

---

### SC-16 (HIGH) -- GovernanceConstants layer-classification underspecified; Guarded Layer bars potentially reducible via Open Layer vote

**Surface:** Amendment boundary -- GovernanceConstants module (DES-091); ss10.11.

**Claimed property:** The Guarded Layer super-process constants (25% quorum, 80% supermajority,
180-day inter-vote window, 30-day audit lead time) are themselves protected and cannot be reduced
by an Open Layer coalition.

**Attack:**

DES-091 states: "Constants are readable by any contract or client; changeable only via the
Guarded Layer (Tier-2) or Open Layer (Tier-3) amendment boundary -- whichever governs that
constant." The phrase "whichever governs that constant" is the critical ambiguity: no normative
enumerated list of "Guarded-Layer-to-change" constants vs "Open-Layer-to-change" constants
exists anywhere in DES-091 or ss10.11. The ss10.11 table groups Tier-2 quorum, Tier-2
supermajority, inter-vote window, and audit lead time under a heading labelled "Guarded Layer --
named-absolutes super-process," which implies they require a Guarded Layer amendment to change --
but this grouping is descriptive, not normative (the table provides values and rationale; it does
not specify the class of amendment required).

Attack scenario: a faction interprets the 180-day inter-vote window as an "ordinary governance
process parameter" (not a named-absolute itself) and proposes an Open Layer vote reducing it to 7
days. If the engineer implements GovernanceConstants with a governance-controlled setter that
does not enforce layer-specific access control (e.g., any passed governance vote can update any
constant), the reduction passes at 60%/15%. The Guarded Layer protection then requires only 7-day
separation between votes. A faction with 80%/25% approval across a single week carries a
named-absolute amendment with essentially no fork-right exercisability window.

**Secondary gap:** DES-091 describes GovernanceConstants as "immutable-at-deployment" but also
says the values are "revisable only through the amendment boundary." These two characterisations
are in tension. Solidity's `immutable` keyword means a value is set at construction time and
cannot change. If constants are truly immutable, they cannot be revised by governance -- which
contradicts the stated revisability. If constants are not truly immutable (i.e., they have
governance-controlled setters), the contract is NOT "immutable-at-deployment" and the word is
misleading. The update mechanism is not specified anywhere in DES-091 or ss10.11.

**Route:** Architect MUST (1) add an explicit normative classification table in DES-091 mapping
each constant to "requires Guarded Layer amendment" vs "requires Open Layer amendment," with
Charter Layer constants explicitly marked as not updatable by any vote; (2) describe the update
mechanism (e.g., a governance-controlled setter callable only via `Governor.execute()` with the
appropriate layer's `permittedActionClass`); (3) add a sentence confirming that the layer check
is enforced on-chain (not only in the interface description).

---

### SC-17 (HIGH) -- Steward monopoly on `publishAuditRef` creates functional veto over Guarded Layer amendment timing; no citizen fallback exists

**Surface:** Steward powers (DES-089); Guarded Layer super-process state machine (ss5.6; DES-087).

**Claimed property (FR-116):** "Stewards propose; citizens decide; no override." Stewards cannot
block or delay citizen governance outcomes.

**Attack:**

`publishAuditRef(proposalId, auditRefHash)` is callable only by "steward (via StewardPowers
only)" per the ss5.4 API contracts table. The Guarded Layer state machine cannot advance from
WINDOW_OPEN to AUDIT_PUBLISHED without this call. If it is never called, the state machine is
permanently stuck: `secondVote()` precondition "auditRef published AND block.timestamp >=
auditPublishedAt + AUDIT_LEAD_TIME" is never satisfied; `enact()` is never reachable.

A steward body that collectively refuses to publish any audit ref -- even when a valid independent
audit report exists off-chain -- permanently blocks ALL Guarded Layer amendments. This veto
requires no positive action (no recall, no governance vote); it is achieved by steward inaction.

The steward veto is not symmetric with the FR-116 principle: stewards cannot ENACT changes
(citizens vote on `enact()`), but they CAN prevent any named-absolute amendment from ever
reaching a second vote. A steward body that opposes a legitimate Guarded Layer amendment to
upgrade coercion-resistance mechanisms can stall it indefinitely, even if 80%/25% of citizens
supported the first vote.

The only remedy is recall (20% affirmative quorum + 60% recall-vote turnout), which itself
has a failed-recall cooldown of 6 months and requires political mobilisation. During the recall
cycle, the Guarded Layer amendment remains frozen.

RISK-32 ("steward-body collapse") records "zero citizen-facing impact" during vacancy, citing
FR-117. This is true for CITIZEN-FACING FLOWS (enrolment, voting, party creation). But a complete
steward vacancy also blocks Guarded Layer amendments for the same reason -- vacancy means no one
can call `publishAuditRef()`. The RISK-32 residual does not acknowledge this structural impact.

**Route:** Architect MUST choose one of: (a) add a citizen-initiated fallback path for audit
publication (e.g., after a configurable "steward-inaction window" -- say 60 days post first-vote
pass -- any enrolled citizen can submit an audit ref hash, subject to the same AUDIT_LEAD_TIME
precondition); (b) explicitly scope DES-089's zero-dependency guarantee to CITIZEN-FACING FLOWS
only and record Guarded Layer blocking as a known, accepted steward veto in the RISK register;
(c) add a new RISK entry and a mitigation pathway. Option (a) resolves the FR-116 tension;
options (b)/(c) accept it as a design trade-off with full disclosure.

---

### SC-18 (HIGH) -- Trust-anchor state machine has no ROTATION_PENDING abort path; malicious rotation has no safe undo

**Surface:** Trust-anchor lifecycle (DES-090; ADR-020); ss5.6 state machine.

**Claimed property:** The 60-day dual-anchor overlap window prevents enrolment blocking on
compliant rotation (SC-14 closed). Revocation is always available via governance vote (SC-13
closed).

**Attack:**

The state machine in ss5.6 and ADR-020 defines:
  ACTIVE -- rotateTrustAnchor() --> ROTATION_PENDING --> ACTIVE (new hash, after effectiveAt)
  ACTIVE -- revokeTrustAnchor() --> REVOCATION_PENDING --> REVOKED

There is NO transition from ROTATION_PENDING to REVOCATION_PENDING, and NO transition from
ROTATION_PENDING back to ACTIVE (original anchor).

Scenario: An Open Layer governance vote passes `rotateTrustAnchor(issuerId, attackerControlledHash)`
-- either because the attacker manipulated the vote (60%/15% threshold), or because the proposal
appeared legitimate but was found to be malicious after enactment. At enactment, the state
transitions to ROTATION_PENDING. The 60-day dual-anchor overlap window now accepts BOTH the
original anchor AND the attacker's hash. The attacker controls the new anchor and can sign
synthetic credentials for up to 60 days.

The community wants to abort the rotation and return to ACTIVE (original anchor). There is no
code path to do this. The only available paths are:
- Wait for the overlap window to expire (60 days), after which ONLY the attacker's anchor is
  accepted -- worsening the situation.
- Pass a new governance vote to `revokeTrustAnchor(issuerId)` -- which revokes the ENTIRE issuer,
  blocking new enrolments from all citizens of that issuer class, not just those with the
  attacker's credentials.

The second option terminates legitimate enrolments for the entire issuer class for 30 days
(ordinary path) or 7 days (emergency path) -- a significant collateral impact for a major
government-eID issuer class.

**Note:** ADR-019 (Open Layer bar: 60%/15%) applies to trust-anchor rotation as a governance
action. The same vote threshold that governs the malicious rotation also governs the corrective
revocation. A faction with 60%/15% can execute the attack and the community needs 60%/15% to
respond -- so the political barrier to correction is the same as the barrier to attack. But the
collateral damage of full issuer revocation is asymmetric.

**Route:** Architect MUST add at minimum: (a) a ROTATION_PENDING -- [governance vote] --> REVOCATION_PENDING
transition that cancels the pending rotation and initiates revocation of the original (pre-rotation)
anchor, preserving the option to issue a second, legitimate rotation vote; OR (b) a
ROTATION_PENDING -- [governance vote] --> ROTATION_ABORTED transition that returns the issuer
to ACTIVE (original hash) with the old anchor remaining sole-accepted, allowing the community
to re-run a corrective rotation vote. The specific semantics (which anchor is accepted during
abort, what happens to credentials issued using the attacker's hash during the overlap window)
must be specified. ADR-020 must be updated.

---

### SC-19 (MEDIUM) -- Steward agenda power over issuer onboarding; no citizen-initiated bypass specified

**Surface:** Steward powers (DES-089; FR-115 power (b)); trust-anchor rotation lifecycle.

**Claimed property (FR-115):** Steward powers enumerated and exhaustive; unlisted action refused.

**Concern:**

FR-115 power (b) gives stewards the right to "coordinate an independent audit, trusted-setup
ceremony, or credential-issuer onboarding." The design correctly separates coordination
(steward) from enactment (citizen vote via `rotateTrustAnchor()` / issuer registration). However,
no citizen-initiated issuer-onboarding coordination pathway is specified. The COORDINATION steps
(commissioning an audit, running a ceremony, gathering the necessary issuer metadata for a
governance proposal) lie exclusively in the steward's enumerated power set.

A captured steward body that wants to suppress issuers serving specific demographic groups can
achieve this by never initiating the coordination process for those issuers, without triggering
any code-enforceable constraint. Citizens can propose an Open Layer amendment that adds an issuer
(since any citizen can DRAFT and PUBLISH a protocol proposal -- FR-115 power (a) for the steward
version, but this right is also available to any citizen per FR-116 equal standing), but the
off-chain coordination steps required to MAKE the proposal viable (technical audit, ceremony,
issuer contact) remain a steward coordination bottleneck.

This is more concrete than the generic RISK-31 (steward soft-power accretion) treatment: it
creates a demographic bottleneck in the credential-issuer supply chain. RISK-31 does not
enumerate the issuer-onboarding agenda-power specifically.

**Route:** Either (a) record this as an accepted design limitation in RISK-31 with explicit
language about the issuer-onboarding agenda power, OR (b) add a citizen-initiated
issuer-onboarding coordination trigger mechanism (e.g., a "citizen petition for issuer onboarding
review" that, on reaching a threshold, requires stewards to open the coordination process within
a defined window, with a steward-inaction escalation to a citizen-run coordination panel). Option
(a) requires only a RISK register update; option (b) is a new design element requiring a new FR.

---

### SC-20 (MEDIUM) -- Guarded Layer quorum computation basis unspecified; enrollment surge during 180-day window may shift quorum targets unpredictably

**Surface:** Guarded Layer super-process -- quorum calculation (ss10.11; DES-087; ss5.6).

**Claimed property (P4):** Growth-surge defence active throughout both votes and inter-vote window;
snapshot eligibility frozen at `snapshotRoot`.

**Concern:**

The P4 growth-surge property correctly freezes the SET OF ELIGIBLE VOTERS at the
`proposeAmendment()` snapshot. However, the QUORUM DENOMINATOR is "25% of enrolled citizens"
(ss10.11). The `superProcessState` data model does not record a quorum target or total eligible
count at first-vote close time. The question of whether the denominator is computed from (a)
the enrolled count at snapshot time, or (b) the enrolled count at vote-close time, or (c) the
enrolled count at `enact()` time, is nowhere specified in the design.

If the denominator is computed from the CURRENT enrolled count (option b or c), a large
enrollment surge during the 180-day inter-vote window raises the quorum target for the second
vote. A first vote that cleared 25% quorum (using the count at first-vote close) may fail 25%
quorum at second-vote close if the enrolled population has grown significantly. This could
permanently stall a legitimate amendment: first vote passes, enrollment surges organically,
second vote fails quorum repeatedly, the proposal lapses, and the community must restart the
entire 360-day process.

Conversely, if the denominator is from SNAPSHOT time (option a), both votes use the same
denominator, which is consistent with the P4 snapshot-immutability principle. But this needs
to be explicitly stated; an implementation team left to infer may use the "current enrolled"
reading.

**Route:** Architect MUST add a normative statement in DES-087 and ss10.11 specifying which
enrolled count is used as the quorum denominator for each vote in the Guarded Layer
super-process. The recommended specification is: "quorum denominator = enrolled citizens at
`snapshotRoot` time (same root used for eligibility)" to maintain consistency with P4 and
prevent surge-driven stalling.

---

### SC-21 (LOW) -- Charter Layer hash-commitment scheme guards rule identity, not rule substance; indirect circumvention partially mitigated by permittedActionClass

**Surface:** Charter Layer entrenched registry (DES-087; ADR-019; ss5.3 ProtocolGovernance data model).

**Claimed property:** Seven entrenched rules are unamendable by any vote; code rejects proposals
targeting any of the seven `ruleId` values at submission.

**Concern:**

`entrenched[ruleId] = bytes32` maps rule identifiers to content hashes. The enforcement
mechanism at `proposeAmendment()` checks whether `ruleId` is in the entrenched set and reverts
`EntrenchedRule` if it is. This guards against DIRECT amendments to the seven named rules.

An adversary seeking to functionally undermine a Charter Layer property (e.g., "one human one
vote") could attempt an Open Layer amendment that adds weighted voting to a DIFFERENT CONTRACT
(not the one identified by an entrenched `ruleId`), targeting the enforcement mechanism rather
than the rule text. Because the `ruleId` of "one human one vote" is not in the callData of such
a proposal, the `EntrenchedRule` check does not trigger.

This attack is substantially mitigated by:
- The `permittedActionClass` binding (DES-016; ISS-H1 fix), which restricts which selectors an
  Open Layer proposal can invoke via `Governor.execute()`
- The capability-absence CI assertions over ABI surfaces (DES-075, DES-077)
- ADR-010's prohibition on admin/pause/proxy, which prevents adding privileged bypass mechanisms
- The requirement that all enacted code paths flow through `Governor.execute()`, limiting the
  universe of callable targets

The attack is therefore residual, not direct. The residual concern is: an undiscovered bypass
of the `permittedActionClass` table could open a path to enact a weighted-voting mechanism
without directly targeting a Charter Layer `ruleId`. This is explicitly acknowledged in the
STRIDE table as an accepted residual ("undiscovered bypass of the action-class table").

**Route:** No new action required beyond confirming SC-15 (ProtocolGovernance immutability)
is addressed, which closes the strongest indirect path. A LOW annotation to the STRIDE "undiscovered
bypass" residual that explicitly names this sub-case would improve traceability.

---

## 2. Verified-sound list

The following attack surfaces were probed and found sound at design level:

**Charter Layer:**
- Seven-rule entrenched registry populated at genesis; the code has no mutable setter
  (`entrenched` is keyed read-only after population per DES-087 and the data model in ss5.3).
  No vote at any layer can update the registry without resolving SC-15.
- `proposeAmendment()` check fires at SUBMISSION, pre-tally, pre-ballot-open -- no path exists
  to get an entrenched-rule amendment past the check by timing the call differently.
- The CON-001 promotion (scope boundary, not implementation commitment) is correctly placed:
  "permit the platform to conduct a municipal election" scenario in FR-118 Gherkin explicitly
  reverts at submission. Sound.

**Guarded Layer super-process:**
- Two-vote requirement with independent `superProcessState` slots per `proposalId`: each
  proposal tracks its own `firstVoteResult` / `secondVoteResult`; no cross-proposal ID
  confusion is possible.
- Snapshot immutability between first and second vote: `snapshotRoot` committed at
  `proposeAmendment()`; the P4 test (P4-growth-surge-b) specifically asserts that attempting
  to update `snapshotRoot` between votes MUST revert `SnapshotImmutable`. Sound.
- "Stale first vote" replay: a defeated proposal (state = DEFEATED) has no transition back to
  FIRST_VOTE_OPEN; the precondition `firstVoteResult == pending` blocks `firstVote()` on a
  completed proposal. Sound.
- Double-proposal interleaving on the same rule: two proposals can run concurrently on the
  same `ruleId`, each with its own `proposalId` and independent state machine. They cannot
  interfere with each other's preconditions. If one enacts first, the second enacts a subsequent
  amendment. The sequencing is transparent and on-chain; no bypass results.
- Audit-ref timing enforcement: `secondVote()` precondition requires `block.timestamp >=
  auditPublishedAt + AUDIT_LEAD_TIME` (code-enforced). Publishing a ref does not immediately
  open the second vote. Sound.
- Audit content and auditor independence: explicitly acknowledged as a social/governance control
  in ADR-019 ("A bad-faith audit can be published; the 30-day window is for member response,
  not audit quality"). This accepted limitation is transparent and recorded.
- `enact()` is permissionless: consistent with the rest of the governance design; no new attack
  surface.

**Steward powers:**
- FR-117 zero-dependency property (steward vacancy causes zero citizen-facing degradation): BY
  CONSTRUCTION -- no citizen-path contract imports or references `StewardRegistry`. Vacancy
  simulation test (ss14) verifies this. Sound.
- Four enumerated powers only; no fifth power discoverable by ABI inspection: CI assertion
  over the ABI allowlist enforces this. Sound.
- StewardRegistry has no `enact()` path; only `Governor.execute()` can change protocol state.
  FR-116 is sound at the level of ENACTMENT; the new finding SC-17 concerns the TIMING VETO
  over the super-process, not enactment override.
- Steward term arithmetic: 5 seats / 2-year terms / annual staggered elections -- 3 seats in
  odd years, 2 seats in even years (or vice versa) -- verified. "At most 3 seats in any one
  election cycle" is arithmetically correct. A coordinated faction can reach majority (3/5) in
  one election but cannot capture all 5 seats in fewer than two consecutive elections.
- Recall mechanism (20% affirmative quorum + 60% of recall-vote turnout): "silence does not
  recall" property is correctly designed; growth-surge defence active throughout (ss10.11).
  Sound.
- Failed-recall cooldown (6 months): prevents harassment-campaign cycling. Sound.

**Trust-anchor lifecycle (SC-13/SC-14 closure verification):**
- Rotation dual-anchor overlap (60 days): Sybil risk during overlap correctly bounded by
  enrolment nullifier deduplication (same person cannot enrol twice regardless of which anchor
  was used). SC-14 CLOSED at design level. Sound.
- Emergency revocation path requires a FULL passed governance vote at the ordinary bar
  (60%/15%); ONLY the timelock is shortened (7 days vs 30 days). No unilateral operator action
  can trigger either path. SC-13 CLOSED at design level for the specified paths. Sound.
- The `revokeTrustAnchor(issuerId, emergencyPath=true)` ACTIONS-vs-AMENDMENTS disambiguation is
  correct: Guarded Layer (80%/25%/180-day two-vote) applies only to amendments of named
  absolutes; it does NOT apply to revocation or rotation governance actions. The emergency
  revocation DoS threat in the STRIDE table correctly states the residual (a genuine 60%/15%
  majority can pass any governance action -- accepted residual bounded by quorum bar and fork
  backstop). Sound.
- `rotateTrustAnchor()` and `revokeTrustAnchor()` callable ONLY from `Governor.execute()` with
  `permittedActionClass = TRUST_ANCHOR_MGMT`: the capability-absence property removes operator
  unilateral path. Sound.
- ROTATION_PENDING overlap: both old and new anchor accepted until `anchorOverlapEnd`. New
  finding SC-18 identifies an absent ABORT path but does not invalidate the existing forward
  transition design (ACTIVE to ROTATION_PENDING to ACTIVE with new hash). Sound in isolation.
- REVOCATION_PENDING continuity: `enrol()` CONTINUES until `anchorEffectiveAt` (explicitly
  corrected in v2.0.3); REVOCATION_PENDING is entered at enactment as the public on-chain
  signal. The v2.0.3 changelog fix for the NN-01 contradiction is correct. Sound.
- 7-day RISK-30 residual (Sybil window during emergency timelock): bounded by per-issuer epoch
  cap (DES-003). Accepted and recorded. Sound.
- Anchor-rotation staleness SLA (30-day SRE alert): an operational control, not a code control.
  Appropriately scoped (SRE Doc 11 SLO obligation). Sound.

---

## 3. Verdict

**1 CRITICAL / 3 HIGH / 2 MEDIUM / 1 LOW.**

**SC-15 (CRITICAL)** blocks design advance to backlog/test-design catch-up. The architect must
explicitly categorise `ProtocolGovernance` and `StewardRegistry` as IMMUTABLE CORE in DES-087
and the ss5.1 container diagram, and confirm that no Open Layer or Guarded Layer vote can
replace or upgrade these contracts. This is a specification gap, not a fundamental design error:
the intent to make these contracts immutable is stated in ADR-010 and CON-003; the explicit
extension of that categorisation to the v2.0.0 governance contracts simply needs to be written.

**SC-16/SC-17/SC-18 (HIGH)** are design-level gaps requiring architect response in the same
increment. None of them stem from a wrong design philosophy; each is a specification or state-
machine omission that the architect can address without requiring new requirements:

- SC-16: enumerate the layer classification of each GovernanceConstants entry and specify the
  update mechanism.
- SC-17: either add a citizen-initiated audit-publication fallback or record the steward veto
  as a design trade-off in the RISK register.
- SC-18: add ROTATION_PENDING abort transitions to DES-090 and ADR-020.

**SC-19/SC-20 (MEDIUM)** are recorded for the architect's next increment response. They do not
independently block advance but represent design-level ambiguities the engineer cannot resolve
from the current specification alone.

**SC-21 (LOW)** is recorded as a traceability improvement; no action required beyond SC-15.

The core design of the Charter Layer entrenched registry, the Guarded Layer five-property state
machine, the trust-anchor lifecycle, and the steward zero-dependency property are sound in their
fundamental conception. All prior SC-01..SC-14 closures remain valid. No finding in this scan
reopens a previously closed finding.

---

*Findings are recorded, not closed. All rework is the architect's responsibility.
reviewer-qa does not propose edits to scanned documents.*
