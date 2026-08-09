# Release Notes — Trumocracy

```
Document ID:   REL-trumocracy-0.1.0
Version:       1.0.0            (document version; SemVer)
Release:       0.1.0            (Phase-1 walking skeleton, public testnet)
Status:        In Review
Owner:         Chen Wei — Reliability Lead (sre), Doc 13 §7.1
Source:        packages/protocol/src/flags.js · packages/contracts/src/core/* · Doc 03 §5.2, §7 · Doc 13 §3.1, §9
Last updated:  2026-08-09
```

> **Based on:** Keep a Changelog + Semantic Versioning. **Produced in:** Launch. **Approved at:** Gate 2.
> Customer-facing section is plain language; the internal record carries the facts and traceability.

---

## 0. Release-gate status — read this before acting on this document

**This release has NOT been approved and MUST NOT be promoted to production.**

| Gate-2 precondition (Doc 13 §3.3) | State on 2026-08-09 |
|---|---|
| RTM (Doc 08) zero gaps in Must rows | **Not met** — `docs/08-traceability-matrix.md` does not exist |
| All suites green, 0 Sev-1/2 (Doc 07) | **Not met** — `docs/07-test-cases-suites.md` does not exist |
| Coding & UT record (Doc 06) | Present at v1.0.0, `Status: In Review` — not yet review-passed |
| User Guide published (Doc 14) | Present at v1.0.0, `Status: In Review` — not yet published |
| Two independent audits, 0 critical/high open (`NFR-009`) | **Not met** — MS-09/MS-10 target 2027-03-12 / 2027-04-16 |
| Six ceremony transcripts, `zkeyHash` frozen | **Not met** — MS-08 target 2027-03-05; verifiers are mocks |
| Rollback drilled < 15 min (`NFR-020`) | **Not met** — drill defined in Doc 10 §8.6, not yet executed |
| MACI 5-of-7 committee constituted (`ADR-006`) | **Not met** — MS-12 target 2027-05-07 |
| Passing `document-review` reports | **Not met** — only `01-press-release-prfaq-v1.0.0-business-cycle1` exists; Docs 02–14 unreviewed |

Gate 2 is milestone **MS-13**, target **2027-05-14**, and it gates the **Phase-3** production rollout
— not this release. Release `0.1.0` is the **Phase-1 walking skeleton on public testnet**
(Doc 13 §3.1, checkpoint **MS-05**, target 2026-11-27). It is a checkpoint exit decided by the Eng
Lead and Test Lead; it is **not** a launch and it carries no Gate-2 authority.

The sre has therefore drafted Docs 09–12 as Gate-2 **inputs** (Doc 13 §3.3 item 10) and **halted the
release**. See §7 of this document and the `<missing_information>` block returned with it.

---

## Customer-facing notes

### ✨ Highlights

You can start a political party from nothing but agreement. Write a founding charter, open a
petition, and if enough verified people in your region publicly back it, **the party comes into
existence automatically** — no committee approves you, no office reviews you, and nobody at
Trumocracy can stop you or speed you up. Once a party exists, anyone eligible can join, propose,
debate, and vote, with one person having exactly one vote and no way to buy, borrow or inherit more.

This first release is a **public testnet dress rehearsal**. The governance machinery is real. The
privacy machinery is not yet (see "What this release does not do", below) and **no real political
organising should be done on it**.

### Added

- **Petitions and automatic activation** (`FR-013`–`FR-018`, `DES-009`, `DES-010`). Open a petition
  for a new party with a charter, a jurisdiction and a window of 30–365 days. The number of
  endorsements needed is `max(threshold% × population, threshold% × verified residents, 500)` — the
  500 floor means no party can be chartered by a handful of accounts, ever. The threshold is
  **frozen at the moment the petition opens**, so nobody can move the goalposts under a live
  petition. Default threshold 2% (configurable 0.5%–20%).
- **Endorse and un-endorse** (`FR-014`, `FR-015`, `DES-011`, `DES-012`). One endorsement per person
  per petition, enforced cryptographically rather than by an account check. You may withdraw at any
  time before the party activates.
- **Party activation with no human step** (`DES-009`). When the count reaches the requirement,
  anyone may call activation; the party and its governor are created on the spot. There is no
  approve, reject, review or feature function anywhere in the registry.
- **Membership: join and leave, unconditionally** (`FR-020`–`FR-023`, `DES-013`, `DES-014`). Joining
  records only a commitment and a join time. **Time in the party affects what you are eligible to
  do; it never affects how much your vote counts.**
- **Tiered governance with public tallies** (`FR-024`–`FR-028`, `DES-016`, `DES-018`, `DES-021`).
  Four decision tiers with escalating protection — operational, policy, structural, constitutional —
  each with its own quorum, approval bar, minimum membership tenure, discussion period, voting window
  and timelock. Constitutional changes need 40% quorum, 75% approval, 180 days' membership, 14 days'
  discussion, 14 days' voting and a 30-day timelock before they take effect.
- **Anti-capture adaptive quorum** (`BR-012`, `DES-015`, `DES-020`). If a party's membership jumps
  more than 20% in 30 days, structural and constitutional votes automatically get harder (+5
  percentage points of approval, double the voting window) and an `AnomalousGrowth` event is
  published. Everyday party business is deliberately left alone.
- **Charters that ratchet only one way** (`FR-012`, `DES-017`). A party may make its own rules
  stricter than the protocol floors. It may never make them weaker.
- **Entrenched and immutable clauses** (`FR-027`, `DES-022`). A party can bind its future self at
  founding, so a later majority cannot rewrite the clauses that define it.
- **Snapshot eligibility** (`FR-028`, `DES-019`). Eligibility is fixed when a proposal opens.
  Joining after that confers no power over it — this is what stops a flash takeover (`RISK-03`).
- **Permissionless finalise and execute** (`DES-021`). Anyone can close a vote and, after its
  timelock, execute it. There is no privileged executor who could sit on a result they dislike.
- **You never pay, and you never touch a wallet** (`NFR-005`, `NFR-023`, `ADR-002`, `ADR-014`).
  Sign in with the face or fingerprint unlock you already use. Fees are sponsored. You will not see
  the words wallet, seed phrase, key, gas, token or chain anywhere in the product.
- **A way in when you are blocked** (`NFR-014`, `NFR-025`, `ADR-001`, `DES-041`, `DES-051`). If the
  main service is blocked or refuses to carry your action, the app falls back automatically:
  alternate relay → pay-your-own-fee → submit directly to Ethereum. Every one of those paths is
  exercised in the test suite, not merely documented.
- **Anyone can check the record** (`FR-054`, `NFR-021`, `DES-035`, `DES-045`). Every governance
  action emits a public event; the rules are published twice — once in Solidity, once as a
  dependency-free JavaScript reference — and a differential test suite proves the two agree.

### Changed

Nothing. This is the first release.

### Deprecated

See the deprecation schedule below. Nothing is deprecated for citizens in this release.

### Removed

Nothing. This is the first release.

### Fixed

Nothing. This is the first release.

### Security

- **No pause button, no admin key, no override** (`CON-003`, `ADR-010`). Nobody — including
  Trumocracy — can stop a party's vote, freeze its state or alter a result. The only unilateral
  power that exists anywhere is the ability to **turn a capability off for future calls**, and it can
  only ever subtract, never add (`FeatureFlags.disable`).
- **The chain holds no personal data** (`NFR-010`, `CON-002`, `CON-008`, `ADR-013 §2`). There is no
  field anywhere for a name, an address, a postcode, a coordinate, a document number, a biometric,
  an email, a phone number, an IP or a device ID — not even a hashed one, because a hashed address
  is still an address.
- **One person, one credential — proven, never known** (`FR-001`–`FR-005`, `DES-001`). Enrolment
  burns a per-issuer nullifier so one document cannot enrol twice, and actions burn a per-scope
  nullifier so one human acts once per petition or vote. The same person endorsing a petition and
  voting in an unrelated party produces two marks with no derivable relationship.
- **A compromised issuer is contained, not weaponised** (`FR-005`, `DES-003`). Each issuer has a
  per-day enrolment cap. Removing a compromised issuer stops new enrolments but **does not revoke
  credentials already issued** — punishing an issuer's users for their issuer's failure would be the
  wrong trade.
- **At least two issuers, at least one not run by a state** (`ADR-003`, enforced by
  `PersonhoodRegistry.issuerSetValid()`).
- **Anonymity-set floor** (`NFR-002`, `DES-008`). An action is refused rather than published if it
  would be identifiable by elimination — fewer than 1,000 verified people in the scope.
- **Fail closed on anything security-relevant** (Doc 03 §10.7): a bad proof, an unknown tree root, a
  spent mark or a thin anonymity set is a refusal. Fail open only on convenience: if the index, the
  fee sponsor or notifications are down, you can still act.

### What this release does **not** do — stated plainly

**Your vote in this release is anonymous, but it is not yet receipt-free.**

Those are two different promises and the difference matters:

- **Anonymous** means an onlooker reading the public record cannot tell that *you* voted, or which
  way. That is true today.
- **Receipt-free** means that *even if you want to*, you cannot prove to somebody else how you
  voted. That is **not** true today.

So in this release, a person who wants to buy your vote — or a boss, a landlord, a spouse or a clan
leader who wants to compel it — could ask you to prove your choice, and you would be able to. The
protection against the *observer* is in place; the protection against the *briber and the coercer*
is not.

That protection is called **MACI**, and it works by letting you quietly replace an earlier vote with
a later one in a way nobody watching can detect — which makes a receipt worthless and a bribe
unenforceable (`ADR-006`, `NFR-003`, `BR-011`). It is behind the `maci_voting` flag, it is
**OFF**, and it lands in **Phase 3** (`ADR-006` "Consequences"; Doc 13 §3.1, 2027-04-19 → 2027-07-09).

Until MACI is on:
- Every voting screen **MUST** carry the plain-language warning that votes are anonymous but not yet
  receipt-free (`packages/protocol/src/flags.js`, `MACI_VOTING.description`; Doc 14).
- The product is a **testnet rehearsal**. Do not use it to organise where being identified as a
  supporter could hurt you.
- When MACI is switched on, **the public-tally voting path closes at the same instant**
  (`Governor.vote` reverts with `MaciPathRequired` once `maci_voting` is enabled). Leaving both open
  would let a coercer simply demand you use the provable one.

**Petition endorsements are public on purpose and always will be** (`ADR-006` "Where MACI is not
used"). Backing a founding petition is closer to signing a public petition than to casting a secret
ballot, and public backing is what gives a petition its legitimacy. You may endorse
**pseudonymously** — proving you live in the region without revealing who you are — and that is the
default. A **fully private** endorsement mode exists for high-risk jurisdictions but is behind the
`private_endorsement` flag, which is **OFF** until Phase 4.

### What a citizen can and cannot do in release 0.1.0

| A citizen **can** | A citizen **cannot** |
|---|---|
| Enrol once, using a credential, without handing over the document | Enrol twice with the same document |
| Open a petition for a new party in their region | Have a petition approved, promoted or blocked by anyone |
| Endorse a petition pseudonymously, and withdraw before activation | Endorse privately (`private_endorsement` **OFF**, Phase 4) |
| Activate a party the moment its threshold is met | Activate early, or stop an activation |
| Join and leave any party, freely and unconditionally | Transfer, sell, lend or inherit membership or voting power (`CON-006`, `ADR-007`) |
| Propose in any tier, with no sponsor and no moderation queue | Bypass the discussion period or the timelock |
| Vote once per proposal, weight exactly 1 | Vote with more weight by paying, staying longer, or holding office |
| Publish and amend a manifesto with a permanent version history | Delete or rewrite a published manifesto version |
| See every tally, quorum and threshold and re-compute it independently | See interim results before a vote closes (`FR-034`, `DES-026`) |
| Export the party's full state at any time, with no permission (`NFR-018`) | Be prevented from leaving |
| Reach the protocol when the main site is blocked (`NFR-014`) | — |
| Fall back to paying their own sub-cent fee if sponsorship is exhausted | Be denied for lack of funds (`FR-061` — degrade, never deny) |
| — | Stand as a candidate — `elections` **OFF**, Phase 3 |
| — | Recall a representative — `recall` **OFF**, Phase 3 |
| — | Delegate a vote — `delegation` **OFF**, Phase 4 |
| — | Use a party treasury — `treasury` **OFF**, Phase 3, jurisdiction-gated |
| — | Fork a party — `fork` **OFF** in production, Phase 3 |
| — | Cast a receipt-free ballot — `maci_voting` **OFF**, Phase 3 |
| — | Use it for a binding state election, ever (`CON-001`, `ADR-013 §1`) |

### Known issues / limitations

Every item below is a **release-blocking** or **disclosed** limitation of release 0.1.0. Each is
open, none is fixed by this release.

| ID | Limitation | Impact | Trace | Cleared by |
|---|---|---|---|---|
| **REL-LIM-01** | **Every proof is verified by `MockVerifier`, which accepts any proof.** The privacy and one-person-one-vote guarantees are **simulated, not enforced**, in this release. | Total. Anyone can forge an enrolment, a residency proof or a vote. | `packages/contracts/src/mocks/MockVerifier.sol`; Doc 13 §3.1 Phase 1 | Phase 2 (MS-08); enforced by the deployment-safety gate, Doc 10 §3.2 |
| **REL-LIM-02** | **Votes are anonymous but not receipt-free.** | Vote-buying and coercion are not defended against. | `NFR-003`, `BR-011`, `ADR-006`; flag `maci_voting` | Phase 3 (MS-12/MS-13) |
| **REL-LIM-03** | **`RegionRegistry.issueResidency` does not bind the caller to the attester.** The function checks that `attesterId` is authorised and active, but never checks that `msg.sender` is that attester — any address may pass an authorised `attesterId` and insert residency leaves. | A residency tree can be inflated at will, which inflates the verified-resident term of the petition threshold and manufactures endorsement eligibility. Directly undermines `RISK-01`. | `packages/contracts/src/core/RegionRegistry.sol:169`; `FR-006`, `NFR-004`, `RISK-01`, `RISK-05` | **Must be fixed and re-tested before any real-value deployment.** Routed to engineer via `REF-02` |
| ~~**REL-LIM-04**~~ | ~~`PersonhoodRegistry.spendNullifier` unpermissioned~~ — **FIXED in this drop.** Burning a nullifier now requires `authorisedSpender[msg.sender]`; the authoriser is set by the timelock and authorises only the `Party`/`Governor` pairs the registry deploys. | The one-call disenfranchisement primitive is closed. | `PersonhoodRegistry.sol:259-262`; Doc 06 §5 defect 1; `UT-0325`, `UT-0326` | **Closed** (verified by the sre against source, 2026-08-09) |
| **REL-LIM-05** | **Population sources all submit through the timelock.** `RegionRegistry.submitPopulation` is `onlyTimelock`, so the "median of ≥5 independent sources" is operationally a median of five values chosen by one governance path. | Weakens the `RISK-12` mitigation from *structural* to *procedural*. The 7-day dispute window and ±5%/quarter drift cap still bind. | `packages/contracts/src/core/RegionRegistry.sol:213`; `FR-009`, `DES-007`, `RISK-12` | Open — routed via `REF-04` |
| **REL-LIM-06** | **On-chain flags are boolean, not percentage.** `FeatureFlags` has no cohort or percentage concept, so a staged 1→10→50→100% rollout of any **on-chain-gated** capability is expressible only in the client. On-chain, every gated capability is all-or-nothing, network-wide. | Staged rollout is a client-cohort control, not a protocol control. Stated honestly in Doc 10 §6. | `packages/contracts/src/core/FeatureFlags.sol`; `NFR-020` | Open — routed via `REF-05` |
| ~~**REL-LIM-07**~~ | ~~Disabling `party_governance` stops voting on open ballots~~ — **FIXED in this drop.** `vote`, `finalize` and `execute` are deliberately **not** flag-gated; only `propose` is. Flags now gate *starting* a capability, never *completing* one already under way. | `NFR-020` sentence 3 is satisfied for ballots. | `Governor.sol:262` (explicit NOTE), `Governor.sol:157`; Doc 06 §5 defect 4; `UT-0360`, `UT-0361` | **Closed** (verified by the sre against source, 2026-08-09) |
| **REL-LIM-15** | **The same hazard survives at activation.** `PartyRegistry.activate` still calls `flags.requireEnabled(FLAG_PETITIONS)`. A petition that has **already met its threshold** cannot be activated while the flag is off — the flag blocks the completion of a citizen process that has already succeeded. | Disabling `petitions` is not purely additive: it strands successful petitions until the flag is re-enabled, which takes **30 days** through the timelock. Same class as the defect fixed for voting; same principle violated. | `PartyRegistry.sol:241`; `NFR-020`, `CON-003`; Doc 06 §5 defect 4 states the principle | **Open.** Routed via `REF-08`; operational control in Doc 11 PB-KILL |
| **REL-LIM-16** | **`enrol()` now fails closed on `issuerSetValid()`** — correct for the invariant, but it makes issuer removal a **global** lever: deactivating a compromised issuer that tips the region below "≥2 active, ≥1 non-state" halts **all** enrolment network-wide, and adding a replacement takes **30 days**. | The primary containment action in the issuer-compromise playbook can itself cause a 30-day enrolment outage. A real cliff, not a theoretical one. | `PersonhoodRegistry.sol:209`, `:176`; `ADR-003`, `ADR-010`; Doc 06 §5 defect 3 | **Open** — operational control in Doc 11 PB-ISSUER. Routed via `REF-09` |
| **REL-LIM-17** | **Nullifier-spender authorisation is irrevocable and monotonic.** `authoriseSpender` has **no** de-authorisation path (deliberate — revoking a live party's ability to record votes would be a pause button by another name), and `setSpenderAuthoriser` authorises the new authoriser **without removing the old one**. | The set of addresses able to burn nullifiers only ever grows and can never shrink. Correct given `CON-003`, but it must be **inventoried and monitored** rather than assumed small. | `PersonhoodRegistry.sol:269-288` | **Accepted by design** — inventoried in Doc 12 §2.6, monitored per Doc 11. Routed via `REF-10` for visibility |
| **REL-LIM-08** | **Enabling `maci_voting` before the MACI module ships bricks voting.** `Governor.vote` reverts with `MaciPathRequired` when the flag is on, and no alternative vote path exists in this release. | A single timelocked `enable('maci_voting')` would make every party ungovernable with no way to undo it faster than the emergency disabler can act. | `Governor.sol:266` | Operational control only — Doc 10 §5.1 forbids enabling it before Phase 3 |
| **REL-LIM-09** | **A compromised verifier cannot be promptly retired.** `VerifierRegistry.register` is timelock-only (30 days, `ADR-010`) and superseding a circuit leaves the old verifier accepting proofs for a further `SUPERSEDE_GRACE = 30 days`. | Worst case ~60 days of a known-bad verifier still accepting proofs. The only fast lever is disabling the flag on the entrypoint that consumes it. | `VerifierRegistry.sol:33,65`; `NFR-017`, `DES-039`, `RISK-10` | Open — routed via `REF-06` |
| **REL-LIM-10** | **Phase-1 flag posture is inconsistent between sources.** `flags.js` prod defaults have `treasury: false` and `fork: false`; the test fixture's `PHASE1_FLAGS` enables `fork` **and** `treasury`; Doc 13 §9 says both OFF. | A deployment driven from the test fixture would ship two capabilities that plan and registry both say are dark. | `packages/protocol/src/flags.js` vs `packages/contracts/test/fixture.mjs:62` vs Doc 13 §9 | Doc 10 §5.1 makes `flags.js` prod defaults the single source of truth. Routed via `REF-07` |
| **REL-LIM-11** | **`l1_force_inclusion` and `sponsored_gas` are client-only flags** (`onChain: false`). | The emergency disabler cannot reach them; killing either requires a client-bundle change. Both are marked `removeBy: never`, so both are permanent configuration by design. | `flags.js` | By design — recorded, not fixed |
| **REL-LIM-12** | **No production deploy script exists.** `packages/contracts/script/` contains only `compile.mjs`; the deployment order in Doc 10 §5 is derived from `test/fixture.mjs`. | Doc 10 §5 is executable-by-hand but not yet automated, and the deployment-safety gate of Doc 10 §3.2 exists as a test assertion (`adversarial.test.mjs:320-329`), not as a promotion job. | `packages/contracts/script/`; `NFR-020` | **Blocks Gate 2** — Doc 10 §3.2 |
| **REL-LIM-13** | Interim tallies are readable on-chain; suppression before close (`FR-034`) is enforced by the client and indexer only, because the chain cannot hide what it stores. | A determined observer can read a running tally directly. Disclosed, not fixed. | `Governor.sol:250-255`; `FR-034`, `DES-026` | By design — disclosed in Doc 14 |
| **REL-LIM-14** | Capacity figures (`NFR-008`), cost per action (`NFR-005`), latency (`NFR-006`) and availability (`NFR-007`) are **N/A — not yet measured** for this release. | No SLO baseline exists. Doc 11 §3 carries the targets; the observed columns are empty. | Doc 03 §7.6 | Load test before Gate 2 (Doc 13 §3.3 item 6) |

### Upgrade / migration notes

**There is no upgrade path, because there is no upgrade mechanism.** This is the design (`ADR-010`,
`CON-003`):

| Layer | Can it change? | How |
|---|---|---|
| **Core** — membership trees, nullifiers, vote accounting, party state machine | **No.** No proxy, no admin, no pause. | A new version is a **new deployment**. Parties opt in by a migration vote. Nobody can migrate a party against its will, and nobody can prevent one that chooses to. |
| **Registries** — issuers, attesters, verifiers, region scheme, population oracle | Yes | Protocol governance, **30-day timelock**; **48-hour expedited path for *removing* a compromised entry only — removal, never addition** |
| **Periphery** — paymaster policy, indexer, gateways, frontends | Freely | Operational, and every one of them is replaceable by the citizen with their own endpoint |

For this release specifically:

1. **Testnet state is disposable.** Release 0.1.0 runs on a public testnet with mock verifiers. When
   Phase 2 registers real, ceremony-bound verifiers, **all Phase-1 state is abandoned, not
   migrated** — every proof in it was accepted by a verifier that accepts anything, so none of it
   means what it appears to mean. This is announced up front rather than discovered later.
2. **The migration drill is a deliverable, not a contingency.** Every party's migration path from
   one core deployment to the next is rehearsed on testnet before mainnet (`ADR-010` "Consequences";
   Doc 10 §8.5). An unrehearsed migration path is a crisis improvisation.
3. **Exit is always available and does not require us.** Any party can export its complete
   verifiable state at any time and reconstitute it on an independent deployment
   (`NFR-018`, `DES-044`, tested as `TC-EXIT-*`).
4. **Circuit changes never disenfranchise in-flight actions.** When a circuit is superseded, the
   previous verifier keeps accepting proofs for 30 days (`SUPERSEDE_GRACE`, `DES-039`, `NFR-017`) so
   a citizen who started an action before the change is not stranded. See `REL-LIM-09` for the cost
   of that choice.

### Breaking changes & compatibility

- **Baseline release — no prior version to break.** The contract ABIs, event schema and the
  `bytes32` identifier derivations (`regionId`, flag keys, nullifier scopes) established here are the
  compatibility baseline for `@trumocracy/sdk` and `@trumocracy/protocol`.
- **`regionId` is derived as `keccak256("v<schemeVersion>:<path>")`** and is bound to the region
  scheme version. Bumping the region scheme version changes every region ID and is a
  **breaking change by construction** — it is a timelocked registry decision, not a refactor.
- **Flag keys are `keccak256` of the string key in `flags.js`.** Renaming a flag key is a breaking
  change to the on-chain gate and would silently leave the old key enabled.
- **Forward-incompatible with Phase 3 by design:** when `maci_voting` is enabled, `Governor.vote`
  stops accepting the public-tally path permanently. Any client that has not shipped the MACI path
  by then will be unable to vote. This is intentional (see `REL-LIM-08`) and must be sequenced:
  **client first, flag second.**

### Deprecation schedule

| Deprecated | Replacement | Deprecated in | Removed in (date) |
|------------|-------------|---------------|-------------------|
| `MockVerifier` (all circuits) | Ceremony-bound Groth16 verifiers registered with a frozen `zkeyHash` | 0.1.0 | Phase 2 — target **2027-03-05** (MS-08). Blocked in prod from day one by the Doc 10 §3.2 deployment-safety gate |
| Public-tally vote path (`Governor.vote`) | MACI receipt-free ballot path (`ADR-006`) | 0.1.0 | Phase 3 — target **2027-07-09** (MS-14), at the instant `maci_voting` is enabled |
| Flag `petitions` | none — capability becomes unconditional core | 0.1.0 | GA **v1.0.0** (`flags.js` `removeBy`) |
| Flag `party_governance` | none — capability becomes unconditional core | 0.1.0 | GA **v1.0.0** (`flags.js` `removeBy`) |
| Flag `maci_voting` | none — becomes mandatory | 0.1.0 | Phase 3 (`flags.js` `removeBy`) |
| Flags `elections`, `recall`, `treasury`, `fork` | none — capabilities become unconditional | 0.1.0 | "Phase 3 rollout complete" (`flags.js` `removeBy`) |
| Flags `delegation`, `private_endorsement` | none | 0.1.0 | Phase 4 (`flags.js` `removeBy`) |
| Flags `l1_force_inclusion`, `sponsored_gas` | **never removed** — permanent escape hatches (`removeBy: never`) | — | — |

> Two flags carry `removeBy: never` by deliberate decision. `permanentFlags()` in `flags.js` reports
> flags with **no** removal target; these two have one — the value `never` — so they are declared
> permanent rather than forgotten. Doc 10 §9 re-checks this every release.

### Developer / API changelog

The protocol's public API is **the contract ABI plus the event log**. There is no privileged REST
surface, by design (Doc 03 §5.4). The indexer's GraphQL API is **read-only and non-authoritative**;
every value that could change a citizen's decision is re-verified against chain state by the client
before use (`ADR-014`).

**Entrypoints added (0.1.0)**

| Call | Proof circuit | Nullifier scope | Flag gate |
|---|---|---|---|
| `PersonhoodRegistry.enrol(issuerId, π, [Nᵢ, C, issuerId])` | `personhood_enrol` | — | none |
| `RegionRegistry.issueResidency(regionId, attesterId, leaf)` | — | — | none (see `REL-LIM-03`) |
| `PartyRegistry.openPetition(...)` | — | — | `petitions` |
| `PartyRegistry.endorse(petitionId, π, signals)` | `residency_member` | `keccak("endorse", petitionId)` | `petitions` |
| `PartyRegistry.withdrawEndorsement(...)` | `residency_member` | `keccak("withdraw", petitionId)` | `petitions` |
| `PartyRegistry.activate(petitionId, charter)` | — | — | `petitions` |
| `PartyRegistry.expire(petitionId)` | — | — | `petitions` |
| `PartyRegistry.openForkPetition(...)` | — | — | `fork` (**OFF in prod**) |
| `Party.join(π, signals)` / `Party.leave(...)` | `residency_member` | `keccak("join", partyId)` | `party_governance` |
| `Governor.propose(input, π, signals)` | `tenure_member` | `keccak("propose", partyId)` | `party_governance` |
| `Governor.vote(id, choice, π, signals)` | `tenure_member` | `keccak("vote", partyId, id)` | `party_governance`; **reverts** if `maci_voting` on |
| `Governor.finalize(id)` / `Governor.execute(id)` | — | — | permissionless |
| `Governor.cancelDuringDiscussion(id, π, signals)` | `tenure_member` | — | `party_governance` |
| `FeatureFlags.isEnabled(flag)` / `requireEnabled(flag)` | — | — | — |
| `VerifierRegistry.verify(circuitId, π, signals)` | — | — | — |

**Events added (0.1.0)** — the auditor's surface (`FR-054`, `DES-035`):
`IssuerRegistered`, `IssuerDeactivated`, `Enrolled`, `NullifierSpent`, `RegionCreated`,
`AttesterRegistered`, `AttesterAuthorised`, `AttesterSlashed`, `ResidencyIssued`,
`PopulationSubmitted`, `PopulationPending`, `PopulationEffective`, `RegionFrozen`, `RegionUnfrozen`,
`CircuitRegistered`, `CircuitSuperseded`, `FlagEnabled`, `FlagDisabled`, `PetitionOpened`,
`Endorsed`, `EndorsementWithdrawn`, `PartyActivated`, `PetitionExpired`, `Joined`, `Left`,
`ManifestoPublished`, `CharterAmended`, `AnomalousGrowth`, `GovernorSet`, `Dissolved`,
`ProposalCreated`, `VoteCast`, `ProposalFinalized`, `ProposalExecuted`, `ProposalCancelled`.

**Deprecated / removed API:** none (baseline release).

---

## Internal release record

| Field | Value |
|-------|-------|
| Release / SemVer | **0.1.0** — Phase-1 walking skeleton |
| Document version | 1.0.0 (`Status: In Review`) |
| Date drafted | 2026-08-09 |
| Target environment | **public testnet** (Doc 03 §7.1 `testnet`) — **not production** |
| Milestone | **MS-05**, target 2026-11-27; exit decided by Eng Lead (Samuel Oyelaran) · Test Lead (Ji-woo Park) |
| Gate | **Gate 2 is MS-13, target 2027-05-14 — NOT approved, NOT applicable to this release** |
| Feature flags **ON** (prod defaults, `flags.js`) | `petitions` · `party_governance` · `l1_force_inclusion` · `sponsored_gas` |
| Feature flags **OFF** (prod defaults) | `elections` · `recall` · `maci_voting` · `private_endorsement` · `delegation` · `treasury` · `fork` |
| Rollout plan | 1% → 10% → 50% → 100%, **client-cohort only** — on-chain flags are boolean (`REL-LIM-06`). Detail: Doc 10 §6 |
| Requirements delivered | `FR-001`–`FR-005`, `FR-006`–`FR-009`, `FR-012`–`FR-018`, `FR-020`–`FR-028`, `FR-046`, `FR-047`, `FR-054`, `FR-061` — **claimed, unverified**: no RTM exists |
| Requirements explicitly **not** delivered | `FR-030`–`FR-035` (MACI) · `FR-036`–`FR-045` (elections, recall) · `FR-049`–`FR-052` (treasury) · `FR-053` (fork) · `NFR-003` · `NFR-009` |
| Design elements | `DES-001`, `DES-003`–`DES-005`, `DES-007`–`DES-022`, `DES-035`, `DES-037`, `DES-038`, `DES-039`, `DES-045` |
| Epics / stories | `N/A — not yet produced` (Doc 05 exists; no per-release story cut recorded) |
| Test status | `N/A — not yet measured`. Suites present: `packages/contracts/test/{lifecycle,governance,adversarial,differential}.test.mjs`, `packages/protocol/test/*`. Docs 06/07/08 do not exist; no suite result of record |
| NFR verification | `NFR-005` cost `N/A — not yet measured` · `NFR-006` p95 `N/A — not yet measured` · `NFR-007` availability `N/A — not yet measured` · `NFR-008` load `N/A — not yet measured` · `NFR-020` rollback drill **not executed** |
| Security / a11y | Audits **not started** (MS-04 contracting target 2026-10-15). `NFR-011` a11y `N/A — not yet measured`. Security defects **open**: `REL-LIM-03`, `REL-LIM-12`, `REL-LIM-15`, `REL-LIM-16`. Security defects **closed in this drop**: `REL-LIM-04`, `REL-LIM-07` (Doc 06 §5) |
| Dependencies | OP Stack L2 (Base Sepolia for testnet) · Ethereum blobs · ERC-4337 bundler + paymaster · IPFS pinning cluster ≥3 operators · Arweave mirror · indexer (Postgres read model) · `@zk-kit/lean-imt.sol` 2.0.1 · `poseidon-solidity` 0.0.5 · Solidity 0.8.28 (Cancun) · Node 22. Full record: Doc 12 |
| Rollback | Flag-off via `FeatureFlags.disable` (emergency disabler, single tx) + client bundle revert + indexer/relayer re-point. **Target < 15 min (`NFR-020`). Cannot halt a running vote or reverse an on-chain decision** (`ADR-010`, `CON-003`). Full procedure and honest limits: Doc 10 §8 |
| Approvals (Gate 2) | **None.** Product `—` · Eng `—` · QA `—` · SRE `—` · Security `—` |

### Changelog (this release)

`N/A — not yet produced.` No `CHANGELOG.md` exists in the repository and no Conventional-Commit range
has been cut for release 0.1.0. This section MUST be populated from the commit range before this
document leaves `In Review`.

### Contributors

Named per Doc 13 §7.1 and Doc 02 §2.7 (VEKTOR named-owner rule — a person, never a team):
Priya Raghunathan (product-owner / architect — dual-hat, see Doc 13 `E-02` / `RISK-21`),
Ana-Maria Petrescu (project-manager), Samuel Oyelaran (engineering lead), Ji-woo Park (test lead),
Rafael Duarte (reviewer-qa / head of security), Nadia Hassan (technical-writer / a11y & l10n),
Chen Wei (sre — owner of this document).

### Links

| Artefact | Path |
|---|---|
| PR-FAQ | `docs/01-press-release-prfaq.md` |
| Requirements (SRS) | `docs/02-requirements-srs.md` |
| Architecture (SDD) | `docs/03-architecture-design-sdd.md` |
| Test strategy | `docs/04-test-strategy-master-plan.md` |
| Backlog | `docs/05-product-backlog.md` |
| Coding & UT | `docs/06-coding-and-ut.md` (v1.0.0, In Review) |
| Test cases | `N/A — not yet produced` (`docs/07-test-cases-suites.md`) |
| **RTM** | `N/A — not yet produced` (`docs/08-traceability-matrix.md`) — **Gate-2 blocker** |
| Deployment runbook | `docs/10-deployment-runbook.md` |
| Operations runbook | `docs/11-operations-runbook.md` |
| Application inventory | `docs/12-application-inventory.md` |
| Project plan | `docs/13-project-plan.md` |
| User guide | `docs/14-user-guide.md` (v1.0.0, In Review) |
| Refine log | `docs/refine-log.md` |
| Dashboards | `N/A — not yet produced` — Doc 11 §4 specifies them |
| ADRs | `docs/adr/ADR-001` … `ADR-014` |

---

## 7. sre release decision

**HALTED.** Release `0.1.0` is not promoted beyond `devnet`/`testnet`, and no production release is
initiated, for the reasons in §0. Specifically, three preconditions are not merely absent but
**failing**:

1. **RTM (Doc 08) does not exist** — the Must-row zero-gap check cannot be performed at all.
   Doc 07 (test cases) is likewise absent, so there is no suite result of record either.
2. **Rollback is unproven** — the drill in Doc 10 §8.6 has not been executed (`NFR-020`, Doc 13
   §3.3 item 5).
3. **One Must-blocking defect remains open in code** — `REL-LIM-03`: `RegionRegistry.issueResidency`
   does not authenticate `msg.sender` against `attesterId`, so residency trees can be inflated at
   will. This defeats `NFR-004` in any deployment carrying real political consequence. Two sibling
   defects of the same class (`REL-LIM-04`, `REL-LIM-07`) were fixed in this drop; this one was not,
   and it is the last of the family.

**Verified fixed since the first readiness pass** (re-read against source on 2026-08-09):
`REL-LIM-04` (nullifier burn now access-controlled) and `REL-LIM-07` (open ballots no longer
flag-gated). **Newly found in the same pass:** `REL-LIM-15` (activation still flag-gated),
`REL-LIM-16` (issuer-removal enrolment cliff), `REL-LIM-17` (irrevocable spender set).

Routed back through the project-manager (Ana-Maria Petrescu). Owning roles: engineer
(`REL-LIM-03`, `-12`, `-15`), tester (Docs 07/08), architect (`REL-LIM-05`, `-06`, `-09`, `-16`),
technical-writer (Doc 14 publication).

---
### Downstream
Proceed to staged rollout per **Doc 10** — **only after Gate 2 (MS-13) is human-approved**. Service
record maintained in **Doc 12**; operation per **Doc 11**; production learnings captured as `REF-##`
in `docs/refine-log.md` and routed to the product-owner.
