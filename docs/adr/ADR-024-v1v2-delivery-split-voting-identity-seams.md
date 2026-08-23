# ADR-024 — v1/v2 delivery-architecture split: voting/identity abstraction seams and conventional-stack decision

```
Status:        Accepted
Date:          2026-08-23
Owner:         Ravi Deshmukh — Principal Architect
Traces:        BR-006, BR-009, BR-011,
               FR-030, FR-031, FR-032, FR-033, FR-034, FR-035,
               FR-069, FR-070, FR-082, FR-083, FR-084, FR-085, FR-086,
               FR-106, FR-107, FR-108, FR-121..FR-129, FR-131,
               NFR-001, NFR-002, NFR-003, NFR-004, NFR-009, NFR-027,
               CON-002, CON-008, CON-012, CON-013,
               DES-069, DES-070, DES-023, DES-024, DES-025,
               DES-095, DES-096, DES-097, DES-098,
               ADR-017 (ICredentialAdapter — composes with IEligibilityVerifier v2 path),
               ADR-022 (IProofVerifier seam — the upgrade path at the ballot layer)
Source:        Approver directive, Rathish, 2026-08-23 (v1/v2 delivery split);
               docs/01-press-release-prfaq.md §E3 ("Why blockchain at all?");
               docs/02-requirements-srs.md v2.5.0;
               docs/03-architecture-design-sdd.md v2.2.1;
               artifacts/status/OI-18-DECISION-2026-08-11.md (Charter/Guarded layer ruling)
```

---

## Context

The approver (Rathish, 2026-08-23) has directed a delivery split into two definitions:

**Definition A (v1)** — A real, production-grade, shareable application using conventional
authentication. Voting works; the ZK private ballot does not yet exist. The eight-pillar party
platform, petition→threshold→activation, unconditional join, proposal/debate, candidate
selection by member vote, manifesto with tracked commitments, and public dashboards for
finances, promises and performance are all live. v1 is shared on GitHub and open for
community contribution.

**Definition B (v2)** — The same platform plus the hard cryptographic guarantees: ZK anonymous
enrolment, private receipt-free ballots (MACI), the trusted-setup ceremony, the coordinator
committee, and the heavy external audits. Built later, in the open, with the community.

**Guardrail from the approver:** nothing built in the design phase is discarded. v1 reuses
the requirements, flows, design system, and wireframes. It changes the voting internals, not
the app. v2 is an implementation swap behind a stable interface, never a rewrite.

This ADR records three things: (a) the two stable abstraction seams that make the swap safe;
(b) the v1 conventional stack decision; and (c) the Charter-layer conflict check required
before the approver can direct implementation.

---

## (a) The two abstraction seams

### Seam 1 — IEligibilityVerifier: "verify a member is a unique eligible person"

**Purpose:** Decouple the application layer from the identity/personhood proof mechanism.
The application calls this interface; the backing behind it is swapped between v1 and v2
without any change above the seam boundary.

**Design-level interface (not code — methods and semantics):**

```
IEligibilityVerifier {
    verifyEligibility(memberId, regionId, scope, proof) → bool
    isUniqueInScope(memberId, scope) → bool
    getProperties() → EligibilityProperties { onePersonOneVote, subpoenaResistant,
                                               unlinkable, anonymityFloor }
    IS_INSECURE_MOCK() → bool     // MUST return false in both v1 and v2 honest backings
}
```

**Method semantics:**

| Method | Semantics |
|--------|-----------|
| `verifyEligibility` | Returns true if the member is a unique eligible person for the given action scope. In v1: account lookup in database with conventional session authentication — the check is honest and complete for what it is. In v2: ZK proof verified through `ICredentialAdapter` → on-chain `enrol()` path (ADR-017, DES-069, DES-070). |
| `isUniqueInScope` | Returns true if the member has NOT already exercised this scope (one-person-one-vote per scope). In v1: conventional database nullifier record (written atomically on first action). In v2: on-chain `nullifierUsed[keccak(scope, N)]` check (DES-001). |
| `getProperties` | Declares which properties this backing provides. v1 returns `{ onePersonOneVote: false, subpoenaResistant: false, unlinkable: false, anonymityFloor: false }`. v2 returns all true. The application MUST read and surface these properties — see DES-098 honesty notice. |
| `IS_INSECURE_MOCK` | MUST return false in both honest backings. This is how the CI promotion gate distinguishes a disclosed conventional backing from a mock that lies about verifying. See §"Composition check" below. |

**v1 backing (DES-097):** Conventional authentication. Account record in Postgres. A member is
"eligible" if they have a live session, their account is associated with the correct region,
and they have not already exercised the given scope (conventional nullifier record). The backing
is honest: it performs what it claims. It does not call `ICredentialAdapter`, does not verify
ZK proofs, and does not publish to `PersonhoodRegistry`.

**v2 backing:** The existing `ICredentialAdapter` → `enrol()` → `PersonhoodRegistry` path
(ADR-016, ADR-017, DES-069, DES-070, DES-001). No new component is added; v2 simply wires the
existing design into the IEligibilityVerifier interface.

---

### Seam 2 — IBallotService: "cast and tally a vote"

**Purpose:** Decouple the application layer from the ballot-casting and tally mechanism.

**Design-level interface (not code — methods and semantics):**

```
IBallotService {
    castBallot(electionId, choice, memberId, eligibilityRef) → BallotReceipt
    changeBallot(electionId, newChoice, memberId) → BallotReceipt
    computeTally(electionId) → TallyResult { result, evidence, verifiabilityProps }
    getTallyProperties() → TallyProperties { receiptFree, coercionOverride, zeroKnowledge,
                                              publiclyVerifiable }
}
```

**Method semantics:**

| Method | Semantics |
|--------|-----------|
| `castBallot` | Records a vote for the given election. In v1: authenticated write to database; returns a conventional receipt (choice + timestamp + member reference). In v2: MACI encrypted ballot message to the message queue (DES-023); returns only the message hash (choice cannot be recovered from the receipt). |
| `changeBallot` | Changes a cast ballot; last-vote-counts. In v1: database UPDATE — the new choice overwrites the old in the write path; the audit log records the change. In v2: MACI key-change + re-vote, indistinguishable from the original ballot at the tally layer (DES-023, FR-032). |
| `computeTally` | Produces the election result with tally evidence. In v1: SQL COUNT aggregate; result is a conventional sum with a database-signed audit log published as a hash to the on-chain audit contract. In v2: MACI threshold coordinator DKG → on-chain ZK tally proof (DES-024, DES-025), independently verifiable by anyone. |
| `getTallyProperties` | Declares which properties this backing provides. v1 returns `{ receiptFree: false, coercionOverride: false, zeroKnowledge: false, publiclyVerifiable: true }`. v2 returns all true. The application MUST read and surface these — see DES-098. |

**v1 backing (DES-097):** Conventional authenticated database vote. The ballot direction is
visible to the database operator. The tally is a conventional aggregate, published honestly.
The `BallotReceipt` returned to the voter includes the choice — this is why `receiptFree: false`
is the honest declaration.

**v2 backing:** The existing MACI + 5-of-7 threshold coordinator design (ADR-006, DES-023,
DES-024, DES-025). The `IProofVerifier` seam (ADR-022) is the designed upgrade path at the
tally-proof verification layer; a verifier swap, not a redesign.

---

### Invariants both backings MUST satisfy

| Invariant | How v1 satisfies | How v2 satisfies |
|-----------|-----------------|-----------------|
| One-person-one-vote per scope | Conventional nullifier record in database, written atomically | On-chain `nullifierUsed[keccak(scope, N)]` (DES-001) |
| Eligibility scoping (correct region at snapshot time) | Database membership record + snapshot timestamp check | `vote()` checks `publicSignals[0] == proposal.snapshotRoot` (DES-019) |
| Last-vote-counts | Database UPDATE with atomic overwrite | MACI last-message-wins semantics (FR-032, DES-023) |
| Verifiable tally output | Publicly auditable SQL aggregate + signed hash on-chain | On-chain ZK tally proof reproducible by anyone (DES-025) |
| No retrospective result change after tally closes | Database lock after `computeTally` enacts result | On-chain immutable tally root |

### Properties ONLY the v2 backing provides

| Property | v1 | v2 |
|----------|----|----|
| Unlinkability — the system cannot determine who voted | NO | YES — scoped action nullifiers |
| Receipt-freeness — voter cannot prove their choice even if they want to | NO | YES — MACI key-change override |
| Coercion-override — voter can override a coerced ballot silently | NO | YES — MACI key-change indistinguishable from new ballot |
| No identity at rest — system cannot identify who voted for what | NO | YES — subpoena test invariant (FR-128) |
| Anonymity floor (k ≥ 1000) | NO | YES — on-chain `DES-008` guard |

---

### Composition check (required)

**Composes with `ICredentialAdapter` and ADR-017 (DES-070):** In v2, IEligibilityVerifier
routes through the existing `ICredentialAdapter` → `enrol()` → `PersonhoodRegistry` path.
In v1, IEligibilityVerifier does NOT call `ICredentialAdapter` — it routes via conventional
database authentication instead. This is honest composition-by-bypass, not hiding: the v1
backing's `getProperties()` declares that ZK personhood proof is absent. No tension exists.

**Composes with `IProofVerifier` seam (ADR-022):** `IProofVerifier` is the designed upgrade
path at the tally-proof verification layer. In v2, `IBallotService.computeTally()` produces
a ZK proof that is verified through `IProofVerifier`. In v1, `IBallotService.computeTally()`
produces a conventional tally — `IProofVerifier` is not called. This is consistent with ADR-022's
near-irreversibility statement: the upgrade path is a verifier swap at the proof layer, not a
redesign of the ballot service above it.

**Composes with mock-verifier promotion gate discipline (`IS_INSECURE_MOCK()`, Doc 03 §14,
§7.1):** This is the most important distinction to state precisely.

A `MockVerifier` is a verifier that **lies**: it accepts any proof as valid without checking
anything. `IS_INSECURE_MOCK()` returning true is how the CI promotion gate detects it and
blocks it from reaching testnet, staging, or production.

The **v1 conventional backing is not a mock**. It performs honest checking by conventional
means — database lookup, session validation, scope nullifier. It does not claim to verify a ZK
proof; it makes no claim about proof verification at all. `IS_INSECURE_MOCK()` MUST return
false, because the backing IS NOT insecure in the mock sense — it is a fully functioning
conventional implementation that is honest about what it is and what it is not.

| Entity | Lies about verification? | `IS_INSECURE_MOCK()` | Promotion past devnet? |
|--------|------------------------|---------------------|----------------------|
| `MockVerifier` | YES — accepts all proofs without checking | `true` | Blocked by CI gate |
| v1 conventional backing | NO — checks by conventional means | `false` | Permitted (honest disclosed) |
| v2 ZK backing | NO — verifies ZK proof on-chain | `false` | Permitted (real verifier) |

**Tension to surface (not silently reconciled):** The v1 conventional backing satisfies
`IS_INSECURE_MOCK() = false` and passes the promotion gate. But it does not satisfy NFR-001,
NFR-002, NFR-003, FR-082, FR-086, or FR-128. These requirements are not "mocked away" — they
are honestly absent in v1. The honesty-by-design element (DES-098) is the disclosure
mechanism. The CI gate checks for lying; it does not check for genuine ZK property absence.
The latter is governed by the Charter-layer conflict table in §(c) below and is a decision
for the approver.

---

## (b) The v1 stack decision

### Recommendation: blockchain as public transparent-audit record only

**The recommendation** is that in v1 the blockchain (Ethereum L2, Base) serves ONLY as the
public transparent-audit record, consistent with Doc 01 §E3 ("Why blockchain at all?") and
FR-108 ("the public record is not the application data store"). The v1 application is a
conventional Next.js PWA + Postgres database. Governance actions are executed in application
code and recorded in the database. A small, auditable on-chain audit contract publishes:
petition milestones, tally result hashes, manifesto version hashes, and party activation
events — permanently, publicly, independently verifiable.

**What this means concretely:**

- Party data, memberships, petitions, proposals, votes, and manifesto are stored in a
  conventional relational database (Postgres, operated by the application).
- No on-chain governance execution in v1. No `Governor.execute()` calls. No `PersonhoodRegistry`
  writes. No `PartyRegistry` on-chain state.
- Blockchain role: immutable public event log. Events are written one-way from the application
  to a lightweight audit contract on Base. Anyone can read the chain; the application does not
  read governance state from it.
- Authentication: passkeys (WebAuthn, already designed in ADR-002). No seed phrase, no gas
  token, no cryptocurrency concept in the primary flow. This is continuous with the existing
  design — ADR-002 already mandates passkeys. v1 simply does not add the ZK layer on top.

**Why this over keeping the full on-chain governance path with conventional auth mapped onto it:**

The alternative is to deploy the full suite of contracts (PersonhoodRegistry, PartyRegistry,
Governor, Elections) but bypass ZK verification with conventional auth mapped into the call
paths. This alternative fails for three reasons:

1. **The CI promotion gate is designed to block it.** The deployment-safety scan (`IS_INSECURE_MOCK()`
   check in `script/deploy.mjs`) blocks any deployment to testnet, staging, or production that
   has a MockVerifier in the VerifierRegistry. Mapping conventional auth onto the full on-chain
   governance path in a production deployment would require either lying to the CI gate (a MockVerifier)
   or removing the gate — both are design violations.

2. **It eliminates the schedule benefit.** Full on-chain deployment at v1 requires compiling
   circuits and running ceremonies before any conventional-auth governance is live. The v1/v2
   split exists precisely to decouple these paths. Keeping full on-chain governance recreates
   the dependency.

3. **It contradicts FR-108.** Putting all governance state on-chain makes the chain the
   application data store, not the trust layer. FR-108 and Doc 01 §E3 are explicit: the
   blockchain is the trust layer; the application is the data store.

**The honest trade-off of the road not taken:**

Full on-chain governance from v1 would mean v2 is purely a ZK swap (no structural change).
The conventional-database model accepted here means v2 involves migrating governance state
from Postgres onto on-chain contracts — a non-trivial migration. This migration cost is the
accepted trade-off. It is bounded: the two seams define exactly what migrates (identity backing
and ballot backing) and what stays constant (application logic, UI, flows, design system,
manifesto history). `packages/protocol` (pure rules, zero deps) is the migration anchor: its
state machines and encoding are valid in both v1 and v2 and are differentially tested against
the chain in v2.

---

### Package disposition table

| Package | v1 disposition | Rationale |
|---------|---------------|-----------|
| `packages/contracts` | **Adapt** — deploy only the lightweight audit-record contract subset (petition milestones, tally result hash registry, manifesto hash log, party activation events); full on-chain governance contracts (PersonhoodRegistry, PartyRegistry, Governor, Elections, FeatureFlags, MACI, ProtocolGovernance, StewardRegistry) are v2-only and remain undeployed | Satisfies FR-108 (blockchain as audit record), §E3 intent; audit contracts are small and auditable at v1 scale; no mock verifier in the VerifierRegistry (gate passes honestly) |
| `packages/circuits` | **Untouched for v2** — no circuits needed in v1; all Circom compilation, ceremony work, and ZK proving stack deferred | The IEligibilityVerifier v1 backing never calls a circuit; the IBallotService v1 backing never calls a circuit |
| `packages/protocol` | **As-is** — pure rules, zero deps; domain logic (state machines, encoding, thresholds) is valid for both v1 and v2 | Strongest reuse candidate: the governance rules, threshold formula, proposal state machine, and encoding are correct regardless of whether ZK or conventional auth backs them; differentially tested against chain in v2 |
| `packages/sdk` | **Adapt** — strip ZK proof generation and on-chain PersonhoodRegistry/PartyRegistry submission paths; v1 SDK covers conventional authenticated API calls + on-chain audit-record reads; expose IEligibilityVerifier and IBallotService interfaces so v2 is a seam-local swap | SDK abstraction boundary makes this surgical; the underlying API call patterns are the same |
| `packages/ui` | **As-is** — DES-093 token set and DES-094 privacy-status component apply unchanged to both v1 and v2; design system is independent of the identity/ballot backing | ADR-023 adopted the design system as the normative foundation for both product definitions; territory rule, tokens, and privacy-status states are valid in both |
| `apps/web` | **As-is with feature flags** — ship dark per existing ADR-037 (FeatureFlags) pattern; v2-only features (ZK enrolment flow, MACI-backed voting, ceremony coordination, tally proof verification) remain flagged off; DES-098 honesty notice is a v1 addition | Flag discipline already designed; v1 = flags toggled to v1-disclosed-limitation state; v2 = flags toggled to v2-backed state |
| `apps/verifier` | **Untouched for v2** — the standalone tally verifier (DES-025) is meaningful only for MACI ZK tally proofs; meaningless in v1 (conventional aggregate tally needs no independent verifier binary); build not started in v1 | v2 activation: when IBallotService v2 backing is wired, `apps/verifier` activates as the DES-025 independent verifier |
| `services/indexer` | **As-is** — indexes whatever on-chain events exist; in v1, indexes audit-record contract events; in v2, expands to index full governance events (PersonhoodRegistry, PartyRegistry, Governor, MACI state) | Architecture is unchanged; event set grows in v2 |
| `services/relayer` | **Adapt** — v1 still uses ERC-4337 + paymaster for sponsoring on-chain audit-record writes (petition milestones, tally hashes); ZK proof submission relaying is v2 | Sponsorship model applies in both versions; relayer role shrinks in v1 but is not eliminated |
| `infra` | **As-is** — infrastructure topology unchanged; same Base L2, IPFS/Arweave, Postgres | |
| `tools` | **As-is** — dep-guard, codegen, test harness unchanged; dep-guard rule `contracts ← (none)` and deployment-safety IS_INSECURE_MOCK scan are both unchanged | |

---

## (c) Charter-layer conflict check

**Governing ruling:** OI-18-DECISION-2026-08-11.md, option (c) two-tier core. Tier 1 (Charter
Layer) is seven rules, fork-only. Tier 2 (Guarded Layer) is named absolutes, super-process only.

**Framing note (required — do NOT use to wave tensions away):** The amendment-layer machinery
(ADR-019) governs the *deployed protocol* — it defines how citizens may change protocol rules
that are already running. The v1/v2 product-definition split is a Gate-1-level scoping
decision made by the approver before any deployment: it defines which guarantees the v1
product offers. These are separate questions. Pointing to ADR-019 does not resolve any of the
tensions below. Each tension is evaluated on its own merits.

### Charter Layer (Tier 1 — seven entrenched rules, FR-118, fork-only, unamendable)

| Rule | v1 status | Honest statement |
|------|-----------|-----------------|
| **1. One human one vote** | **(ii) DEFERRED — honest disclosure** | Conventional authentication cannot prevent multi-account creation. The one-human-one-vote guarantee is not claimed in v1. Anti-fraud measures (rate limiting, device fingerprinting opt-in) reduce but do not eliminate the risk. v1 MUST NOT claim this rule is satisfied. |
| **2. No transferable power** | **(i) SATISFIED** | The no-transfer invariant is an application design choice — no token, no NFT, no delegation surface. Enforced in code regardless of ZK layer. |
| **3. No privileged role over outcomes** | **(ii) DEFERRED — honest disclosure** | In v1, the database operator CAN technically alter vote records. v1 uses tamper-evidence (audit log, hash chain published to blockchain) so tampering is detectable, not preventable. The operator CAN change outcomes; detection does not make the guarantee equivalent to prevention. v1 MUST NOT claim outcome-integrity equivalent to the immutable-core contract design. |
| **4. Unconditional right to fork** | **(ii) DEFERRED — in principle satisfied, implementation flag-off** | Fork mechanics are flag-off in both v1 and v2. The right is recorded in the party charter. On-chain enforcement is a v2 deliverable. |
| **5. No behavioural surveillance** | **(i) SATISFIED** | Application-layer design choice. No per-user engagement metrics, no political intelligence database. Independent of ZK layer. |
| **6. Anonymity by default with disclosure only by voluntary role-taking** | **(ii)/(iii) — TENSION FOR APPROVER'S DECISION — see table below** | A conventional database necessarily links account credentials to party memberships. If a court orders disclosure, the database operator CAN comply. The subpoena test (FR-128) fails: encrypted-but-decryptable identity storage is precisely what FR-128 prohibits. v1 with a conventional database cannot satisfy the "technically unable to comply" invariant. This is the most significant Charter-layer tension. |
| **7. CON-001 — parties only, never state elections** | **(i) SATISFIED** | Scope boundary enforced by application design. Independent of ZK layer. |

### Guarded Layer named absolutes (Tier 2 — super-process only, FR-119)

| Named absolute | v1 status | Honest statement |
|----------------|-----------|-----------------|
| **BR-011 / NFR-003 — receipt-freeness, coercion resistance** | **(ii) DEFERRED — absent by definition** | Conventional authenticated voting makes vote direction visible to the database operator. A voter CAN be shown their recorded vote. Receipt-freeness requires that showing the record proves nothing — which is impossible with a conventional authenticated record. v1 MUST NOT claim receipt-freeness or coercion resistance. |
| **CON-002 / CON-008 / NFR-010 — data minimisation, no personal data on governance record** | **(ii) PARTIALLY SATISFIED, PARTIALLY DEFERRED** | The on-chain audit record CAN be designed with no personal data (hashes only). The conventional database necessarily holds account credentials, session data, and the account↔party membership association. Data minimisation in the database is a design discipline, not an architectural guarantee. v1 satisfies the on-chain half; it defers the application-database half. |
| **CON-012 — no bespoke unaudited cryptography** | **(i) SATISFIED** | v1 uses no bespoke cryptography. WebAuthn passkeys and conventional hash functions are well-audited primitives. |
| **CON-013 — non-violence clause** | **(i) SATISFIED** | Application-level rule, enforced in code regardless of ZK layer. |

### Tensions requiring approver decision

The following items are recorded here FOR THE APPROVER'S DECISION. They have been surfaced
precisely; they have not been reconciled silently. The approver directed the v1/v2 split and
has indicated they want these enumerated on the record.

| ID | Tension | v1 claim in tension | What the rule requires | Decision needed |
|----|---------|-------------------|----------------------|-----------------|
| T-01 | Charter Rule 6 (anonymity by default) vs conventional DB | v1 cannot offer anonymity in the Charter sense; account↔party linkage is accessible to the operator and to legal compulsion | Rule 6 requires that anonymity is the default; voluntary role-taking is the ONLY path to disclosure | Does the approver accept v1 as a disclosed non-anonymous product (not a claimed-anonymous one)? What disclosure obligations apply? |
| T-02 | FR-128 (subpoena test) vs conventional DB | The conventional database operator CAN disclose party membership under legal compulsion | FR-128 requires the platform to be technically UNABLE to comply, not merely legally entitled to decline | Is the subpoena-test invariant deferred in full to v2, or does v1 require additional technical controls (e.g., application-level encryption that still fails the test)? |
| T-03 | BR-009 / FR-082 (anonymity guarantee) vs operator access | BR-009 requires proving identity must not expose identity; FR-082 requires Supporter to be anonymous unconditionally | v1 exposes party membership to the DB operator; FR-082's "unconditionally" cannot be satisfied by a conventional DB | Does the approver accept that FR-082 and BR-009 are v2-only properties, with v1 making a best-effort / disclosed-limitation claim? |
| T-04 | NFR-003 (receipt-freeness) vs voting surface | NFR-003 is a Guarded Layer named absolute; its absence in v1 is acknowledged in Doc 03 §13 (disclosed-limitation debt row) | Guarded Layer requires a super-process to weaken it; v1 is not weakening it — it is not offering it | Is the "deferral with honest disclosure" model for NFR-003 in v1 acceptable to the approver? This is a scope question, not an amendment question. |
| T-05 | Charter Rule 3 (no privileged role over outcomes) vs DB operator | The DB operator can technically alter vote records; tamper-evidence makes this detectable but not prevented | The rule requires no privileged role, not merely detectable privilege | Does the approver accept that Charter Rule 3 is v2-only (immutable core contracts), with v1 offering tamper-evidence as a disclosed limitation? |

**The approver directed this split and wants these enumerated, not reconciled.** This table is
the enumeration. The architect surfaces; the approver decides.

---

## (d) Honesty-by-design element — DES-098

**Design element:** Wherever a vote is cast in v1, the UI MUST display a plain-language
honesty notice before the ballot is confirmed. The notice must state:

1. This vote is using conventional authentication. It is NOT the private, receipt-free ballot.
2. The platform operates a conventional database that CAN see which party you are in and your
   vote direction.
3. The cryptographic private ballot — where your vote is genuinely secret and the platform is
   technically unable to see it — will be available when the platform upgrades to the v2 privacy
   layer.
4. Your vote IS publicly auditable: the tally result is published to the blockchain and anyone
   can independently verify the count.

**Notice requirements:**
- Visible before confirmation (not only in documentation)
- Non-dismissable (not a cookie banner — the voter must acknowledge it to proceed)
- Machine-readable (meets WCAG 2.2 AA; screen-reader accessible; DES-081)
- Displayed on the ballot booth screen (SCR-13) and on the post-vote confirmation screen (SCR-14)
- The notice copy MUST NOT use the phrase "receipt-free" or "anonymous" in any description of
  v1 voting behaviour — those words describe v2 properties and MUST be reserved for v2

**What v1 MUST NOT say or imply:**
- "Your vote is private"
- "Nobody can see how you voted"
- "This is an anonymous ballot"
- "Your identity is not stored"
- Any framing that implies receipt-freeness, unlinkability, or subpoena resistance

**Relationship to existing Doc 03 §13 debt row:** Doc 03 §13 already carries the pattern:
"Public tallies in Phase 1 — client MUST state plainly that Phase-1 votes are anonymous but
not receipt-free." DES-098 is the v1 equivalent: the client MUST state plainly that v1 votes
are conventionally authenticated and are NOT the private receipt-free ballot. DES-063 (coercion-safe
confirmation surface) is the v2 successor; DES-098 is the v1 disclosure surface.

**This element backs:** FR-131 (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0,
2026-08-23; owner Nadia Hassan; traces BR-005/BR-009).

---

## Consequences

**Good**
- The two stable seams (IEligibilityVerifier, IBallotService) make the v2 swap local and
  reviewable. Nothing above the seam changes; the v1→v2 upgrade is a well-defined engineering
  scope.
- `packages/protocol` (pure rules, zero deps) reuses unchanged — the governance state machines,
  threshold formula, and encoding logic are identical in both versions.
- `packages/ui`, `apps/web`, `services/indexer`, `services/relayer`, and `infra` all reuse
  as-is or with minor adaptation; the design system (DES-093, DES-094, ADR-023) applies fully.
- v1 can be shipped without circuits, ceremonies, or audit dependencies. The schedule for the
  conventional-auth product is decoupled from the cryptographic programme.
- DES-098 establishes an honesty-by-design discipline that is the correct posture for any
  product that honestly defers a guarantee rather than silently omitting it.
- `packages/circuits` and `apps/verifier` are untouched — no regression surface in v1.

**Bad / accepted risk**
- **Migration cost.** v1→v2 involves migrating governance state from Postgres to on-chain
  contracts. This is a non-trivial engineering effort. It is bounded by the seam definition
  (identity backing and ballot backing migrate; application logic does not).
- **Charter-layer tensions are real.** v1 cannot satisfy Charter Rule 6, FR-082, FR-128, or
  NFR-003. These are genuine gaps, not temporary implementation omissions. The DES-098 honesty
  notice addresses the disclosure obligation; it does not change the underlying gap.
- **T-01 through T-05 require approver decision** before v1 can be implemented. Specifically,
  the approver must explicitly confirm that v1 is a disclosed non-anonymous product and that
  the Charter-layer tensions are accepted as scope deferred to v2, not as violations of the
  product's published commitments.
- **Tamper-evidence, not tamper-prevention, in v1.** Charter Rule 3 (no privileged role over
  outcomes) is deferred. The blockchain audit record provides detectable-tampering evidence,
  not the same protection as the immutable core contract design.

---

## Alternatives rejected

**Keep the full on-chain governance architecture in v1 with conventional auth mapped onto
on-chain calls.** Rejected for three reasons stated in §(b): (1) the CI promotion gate
(`IS_INSECURE_MOCK()` scan) is designed to block conventional-auth-as-mock from reaching
production; (2) it eliminates the schedule benefit of the split (ceremonies remain
on-path); (3) it contradicts FR-108 and Doc 01 §E3 (blockchain becomes application data store,
not trust layer).

**Skip DES-098 honesty notice; disclose only in documentation.** Rejected. A disclosure
buried in documentation does not satisfy the honesty-by-design principle. A user who casts a
vote without seeing the disclosure has not made an informed choice. The notice must be at the
point of action (SCR-13, SCR-14), non-dismissable, and machine-readable. Anything less
reproduces the "we promise not to" failure mode that FR-128 exists to eliminate.

**Defer the Charter-layer conflict analysis to implementation.** Rejected. The conflict table
is for the approver's record. Deferring it means the v1 implementation proceeds without a
documented decision on the most significant tension (T-01, Charter Rule 6). That is precisely
the kind of silent reconciliation the VEKTOR handbook and the architect's conflict-surfacing
obligation prohibit.
