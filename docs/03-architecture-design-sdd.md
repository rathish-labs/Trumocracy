# Architecture & Design Document (SDD) — Trumocracy

```
Document ID:   SDD-TRUMOCRACY
Version:       1.0.0
Status:        In Review
Owner:         Ravi Deshmukh — Principal Architect
Approvers:     Rafael Duarte (Security), Chen Wei (Reliability), Dr. Lena Kowalczyk (Privacy),
               Aisha Nkemdirim (Elections & Voting)
Source:        SRS-TRUMOCRACY v1.0.0
Last updated:  2026-08-09
```

> **Based on:** arc42 + C4 + Google design doc + IEEE 1016. **Produced in:** Design.
> The fourteen decision records in `docs/adr/ADR-001..ADR-014` are normative and are
> summarised in §12; where this document and an ADR disagree, the ADR wins and this document
> is the defect.

---

## 1. Introduction & goals

### 1.1 Requirements overview

Trumocracy lets any verified citizen originate a political party, gather demonstrated public
support, and — on reaching a coded threshold — operate that party under rules that no
founder, financier or platform operator can override. The SRS defines 12 `BR`, 61 `FR`
(42 Must), 26 `NFR` (22 Must), 12 `CON` and 16 `RISK`. The requirements that shape this
architecture more than any others:

| ID | Requirement | Architectural consequence |
|---|---|---|
| BR-006 / NFR-004 | one real, unique human per participant | personhood is the **security boundary**, not a feature (ADR-003) |
| BR-009 / NFR-001, NFR-002 | proving identity must not expose identity | everything citizen-facing terminates in a ZK proof; k ≥ 1000 anonymity floor is checked on-chain (ADR-004, ADR-005) |
| BR-011 / NFR-003 | receipt-free, coercion-resistant voting | MACI with a threshold coordinator committee (ADR-006) |
| BR-010 | wealth must not buy influence | **no transferable instrument of any kind exists** (ADR-007) |
| BR-012 | resist flash takeover and mob charter capture | tiered decisions, snapshot eligibility, adaptive quorum, entrenchment, fork rights (ADR-008) |
| BR-008 | governance executes in code, not by discretion | immutable core; no admin, no pause, no proxy (ADR-010) |
| NFR-005 | median citizen action < USD 0.01 | Ethereum L2 + sponsored ERC-4337 (ADR-001, ADR-002) |
| NFR-022 / NFR-011 / NFR-012 | usable by a non-technical citizen on a 2 GB Android | passkeys, no seed phrase, no gas token, PWA, in-browser proving (ADR-002, ADR-012) |
| CON-003 | no single trusted operator, admin key or pause switch | the capability is *absent*, and its absence is tested (§10.1, §14) |

### 1.2 Quality goals (the five that shaped the architecture)

1. **Unlinkable participation** (NFR-001/002) — the system must be unable to answer "what is
   this person's politics", including under legal compulsion, including to us.
2. **Receipt-freeness** (NFR-003) — a voter who *wants* to prove their vote must fail.
3. **Non-purchasability** (BR-010) — no path converts money into governance power.
4. **Sub-cent participation** (NFR-005) — cost is a legitimacy property, not a performance one.
5. **Operator powerlessness** (CON-003, NFR-025) — no actor, ourselves included, can stop,
   alter or reverse a party's decision.

Where these conflict, the resolution order is: **1 and 2 before 3 and 5 before 4**. Privacy
and coercion resistance are never traded for cost or convenience; that ordering is why, for
example, delegated proving is refused in ADR-005 even though it would help low-end devices.

### 1.3 Goals and non-goals

**Goals.** Party incubation and petitioning; equal, unapproved membership; tiered internal
governance with real anti-capture properties; region-scoped internal candidate selection and
recall; immutable public manifesto history; a fully transparent, non-influence-conferring
treasury; and an exit path for every party.

**Non-goals — stated so nobody builds them by accident.**
- **Not a state ballot system.** Trumocracy never conducts, tabulates or certifies a public
  election (CON-001, ADR-013 §1). "Election" in this codebase always means an internal party
  election.
- **Not a content moderator.** The protocol applies no political content rule. A protocol
  that judges political content is a political actor (ADR-013 §4).
- **Not a social network.** No feeds, follows, DMs or engagement metrics. Every one of those
  is a deanonymisation surface and none is required by any `BR`.
- **Not a token.** No coin, no NFT membership, no points (ADR-007).
- **Not an identity provider.** We consume attestations; we never issue them (ADR-003).

### 1.4 Stakeholders & concerns

Per SRS §2.7. Architecturally load-bearing concerns: Dr. Kowalczyk (privacy) holds veto over
anything that widens the linkability surface; Rafael Duarte (security) owns the threat model
in §10.1; Nadia Hassan (accessibility) owns the device and bandwidth floor, which is a hard
architectural constraint on circuit size; Sofia Marchetti (legal) owns the jurisdiction
boundary that keeps the system lawful in each pilot.

## 2. Constraints

| ID | Constraint | Where it binds |
|---|---|---|
| CON-001 | parties only, never state elections | §1.3, ADR-013 |
| CON-002 | no custody of documents, biometrics or addresses | data model §5.3 has no field capable of holding them |
| CON-003 | no admin key, pause switch or privileged role | §5.1 core contracts; capability-absence tests §14 |
| CON-004 | open source, reproducible builds | ADR-011, ADR-012 §4 |
| CON-005 | electoral/political-finance law varies per jurisdiction | treasury is jurisdiction-configurable; launch is per-region gated |
| CON-006 | no token or fundraising instrument | ADR-007 |
| CON-007 | USD 4.2M / 18 people through launch | phasing in Doc 13; ceremonies and audits are the long poles |
| CON-008 | immutability vs erasure rights | ADR-013 §2 — erasure by non-collection |
| CON-009 | third-party population statistics | median + drift limit + verified-resident floor (ADR-004 §4) |
| CON-010 | app-store political restrictions | PWA-first distribution, IPFS/Arweave mirrors (ADR-012 §4) |
| CON-011 | 2 GB RAM / Android 9 / 64 kbit/s floor | caps circuit size at ≤2^17 constraints; caps initial JS at 200 KB |
| CON-012 | no bespoke unaudited cryptography | Circom/Groth16, Semaphore-family constructions, MACI — all existing, audited primitives |

## 3. Context & scope (C4 L1)

### 3.1 Business context

```
                    ┌───────────────────────┐
   citizen ────────▶│                       │◀──── personhood issuers
   (phone/PWA)      │      TRUMOCRACY       │      (e-passport NFC, biometric uniqueness,
                    │                       │       civil registry, social graph, civic notary)
   journalist ─────▶│  petitions · parties  │
   auditor          │  membership · votes   │◀──── residency attesters
   (public read)    │  manifestos · treasury│      (civil registry, utility/KYC, NGOs, peers)
                    │                       │
   election  ◀──────│  (evidence only, via  │◀──── population statistics sources
   commission       │   a human officer)    │      (census, electoral roll, UN, World Bank, …)
                    └───────────┬───────────┘
                                │
                    Ethereum L2 (settlement) · IPFS + Arweave (content) · L1 (escape hatch)
```

**The boundary that matters:** an election commission is *downstream* and receives evidence
filed by a named human officer. Nothing flows the other way; no state system can write into
Trumocracy, and no Trumocracy output binds a state (CON-001).

### 3.2 Technical context

| Interface | Direction | Data crossing | Protection |
|---|---|---|---|
| citizen ↔ client | both | identity secret, witness data, proofs | **never leaves the device except as a proof**; enclave-held signing key |
| client → chain | out | proofs, nullifiers, commitments, roots, content hashes | public by design; contains nothing personal |
| issuer → client | in | signed credential | consumed on-device; only a nullifier is ever published |
| attester → chain | out | residency **leaf** (a Poseidon commitment) | components never transmitted |
| client ↔ indexer | both | public state queries | no logging of reader identity or IP (ADR-014) |
| client → IPFS/Arweave | out | manifesto/proposal documents | public, content-addressed |
| stats sources → chain | out | population integers | median of ≥5, 7-day dispute window, ±5%/quarter drift cap |

## 4. Solution strategy

Six decisions carry the design; everything else follows from them.

1. **Put only commitments on-chain.** Roots, nullifiers, tallies and content hashes. The
   chain proves things about people without containing people (ADR-009).
2. **Make personhood pluggable and plural.** 1-of-N accepted issuers with tiering, so no
   vendor and no state can gatekeep, and no single compromise is fatal (ADR-003).
3. **Scope every nullifier.** Uniqueness per action, unlinkability across actions, from one
   construction (ADR-003).
4. **Remove transferable power entirely.** Not "mitigate flash loans" — *delete the asset*
   (ADR-007). This single decision retires an entire attack class.
5. **Defend the charter with time, thresholds, transparency and exit** — never with
   privilege, because any privilege is a godfather (ADR-008).
6. **Build the core with no way to intervene.** No admin, no pause, no proxy. The safest
   posture for the operator is genuine powerlessness (ADR-010, ADR-013 §3).

## 5. Building-block view

### 5.1 Container diagram (C4 L2)

```
┌── apps/web (Next.js PWA) ───────────────────────────────────────────────┐
│  passkey account · WASM prover (Web Worker) · local-first cache          │
│  refuses unknown zkeyHash · verifies indexer claims against chain        │
└───────┬──────────────────────────┬──────────────────────┬───────────────┘
        │ @trumocracy/sdk          │ read                 │ fallback
        ▼                          ▼                      ▼
┌── services/relayer ────┐  ┌── services/indexer ──┐  ┌── L1 force-inclusion ──┐
│ ERC-4337 bundler +     │  │ events → read model  │  │ censorship escape      │
│ paymaster (per-        │  │ NON-AUTHORITATIVE    │  │ hatch, always on       │
│ nullifier rate limit)  │  │ no reader logging    │  └────────────────────────┘
└───────┬────────────────┘  └──────────┬───────────┘
        │                              │
        ▼                              │
┌── Ethereum L2 ─────────────────────────────────────────────────────────┐
│  IMMUTABLE CORE            │  TIMELOCKED REGISTRIES   │  MODULES        │
│  PersonhoodRegistry        │  VerifierRegistry        │  Governor       │
│  RegionRegistry            │  (issuer set)            │  Elections      │
│  PartyRegistry             │  (attester set)          │  Recall         │
│  Party                     │  (population oracle)     │  Treasury       │
│  no admin · no pause · no proxy                       │  FeatureFlags   │
└────────────────────────────────────────────────────────────────────────┘
        │ content hashes
        ▼
┌── IPFS (hot, pinned) ──┐   ┌── Arweave (permanent mirror) ──┐
```

### 5.2 Component breakdown

| ID | Component | Responsibility | Satisfies | Tech |
|---|---|---|---|---|
| DES-001 | `PersonhoodRegistry` | issuer set, enrolment nullifiers, scope nullifiers, identity tree | FR-001..005, NFR-004 | Solidity, LeanIMT/Poseidon |
| DES-002 | issuer adapter interface | 1-of-N pluggable personhood proof | FR-004, RISK-05 | `IProofVerifier` + circuit id |
| DES-003 | per-issuer epoch cap | limits blast radius of a compromised issuer | FR-005, RISK-05 | on-chain counter |
| DES-004 | `RegionRegistry` regions | versioned hierarchical codes, ≤ ward granularity | FR-007, NFR-001 | Solidity |
| DES-005 | per-region residency tree | membership-provable residency without addresses | FR-006, FR-008 | LeanIMT/Poseidon |
| DES-006 | attester federation + slashing | plural, disputable residency issuance | FR-006, RISK-05 | stake + slash + public issuance counts |
| DES-007 | population oracle | median of ≥5 sources, 7-day dispute, ±5%/quarter drift cap | FR-009, RISK-12 | Solidity |
| DES-008 | anonymity-set guard (k ≥ 1000) | refuses to publish an action that would identify by elimination | NFR-002 | on-chain check + client escalation to ancestor region |
| DES-009 | `PartyRegistry` petitions | draft → petition → threshold → activation, no human step | FR-013..018 | Solidity |
| DES-010 | threshold formula w/ floor | `max(pct×pop, pct×verified, 500)` | FR-016, RISK-12 | Solidity |
| DES-011 | endorsement nullifier scope | one endorsement per person per petition | FR-014, NFR-004 | scoped nullifier |
| DES-012 | endorsement withdrawal | reversible before activation, separately scoped | FR-015 | Solidity |
| DES-013 | `Party` membership tree | join/leave, unconditional, non-transferable | FR-020..023, BR-003 | LeanIMT/Poseidon |
| DES-014 | tenure record | eligibility input only — never a weight | FR-021, ADR-007 §2 | `joinedAt`/`leftAt` |
| DES-015 | growth sampler + `AnomalousGrowth` | detects membership surges | BR-012, RISK-04 | Solidity |
| DES-016 | `GovernanceRules` tier table | quorum/approval/tenure/timelock/discussion per tier | FR-025, FR-026 | Solidity library |
| DES-017 | charter ratchet | a charter may be stricter, never weaker | FR-012, RISK-04 | validation on read |
| DES-018 | `Governor` proposals | tiered, snapshotted, discussion-then-voting | FR-024, FR-028 | Solidity |
| DES-019 | snapshot eligibility | joining after open confers no power | FR-028, RISK-03/04 | root + tenure at snapshot |
| DES-020 | adaptive quorum | surge ⇒ +5 pts approval, ×2 window (T2/T3 only) | BR-012, RISK-04 | Solidity |
| DES-021 | timelock + permissionless execute | delay proportional to tier; no privileged executor | FR-026 | Solidity |
| DES-022 | entrenched/immutable clauses | a party can bind its future self | FR-027 | founding-time only |
| DES-023 | MACI message queue | encrypted ballots, key-change override | FR-030..032, NFR-003 | MACI + Groth16 |
| DES-024 | threshold coordinator (5-of-7) | no single party can decrypt a ballot | NFR-003, RISK-07 | DKG across jurisdictions |
| DES-025 | tally proof + public verifier | anyone can re-compute the result | FR-033, FR-055 | `apps/verifier` |
| DES-026 | interim-tally suppression | no partial counts before close | FR-034 | client + indexer policy (chain cannot hide state) |
| DES-027 | self-nomination only, region-scoped | you may stand only where you live | FR-036 | Solidity |
| DES-028 | candidate consent record | explicit, separate, irreversible-for-term disclosure | FR-037, FR-038 | Solidity + client copy |
| DES-029 | office assignment on close | automatic, no confirmation step | FR-040, FR-041 | Solidity |
| DES-030 | two-stage recall | signature threshold then ballot | FR-042..045 | Solidity |
| DES-031 | manifesto version chain | append-only, diffable, permanently public | FR-046, FR-047 | on-chain hash + IPFS/Arweave |
| DES-032 | attributed office-holder votes | officials vote publicly; citizens vote secretly | FR-048 | Solidity |
| DES-033 | treasury caps + ledger | per-person cap by nullifier, itemised public record | FR-049..052 | Solidity |
| DES-034 | fork with lineage | ≥10% initiators, 30-day cooling off, permanent lineage | FR-053, RISK-04 | Solidity |
| DES-035 | event schema for auditors | every governance action emits a public event | FR-054 | Solidity events |
| DES-036 | region freeze on issuance anomaly | quorum freeze pending review | RISK-05, RISK-01 | timelock action |
| DES-037 | `FeatureFlags` on-chain | ship dark applies on-chain, not only in the client | NFR-020 | Solidity |
| DES-038 | `VerifierRegistry` + `zkeyHash` | binds circuits to their published ceremony | RISK-10 | Solidity |
| DES-039 | supersede grace window | an upgrade never invalidates in-flight proofs | NFR-017 | 30-day dual-accept |
| DES-040 | passkey + 4337 smart account | no seed phrase, no gas token | FR-058, NFR-022 | ERC-4337, RIP-7212 |
| DES-041 | L1 force-inclusion transport | sequencer censorship fallback, wired into the SDK | NFR-014, NFR-025, RISK-09 | `OptimismPortal` |
| DES-042 | social recovery, 7-day timelocked | recover without a recovery company | FR-058, FR-059, NFR-016 | guardians + owner veto |
| DES-043 | paymaster per-nullifier budget | sponsorship cannot be drained by Sybils; exhaustion queues at zero cost | FR-061, NFR-005, RISK-15 | relayer policy |
| DES-044 | party state export | exit right, tested in CI | NFR-018 | SDK + `apps/verifier` |
| DES-045 | pure `@trumocracy/protocol` | reference rules, differentially tested vs chain | NFR-021 | JS, zero deps |
| DES-050 | reproducible static bundle | anyone can verify the served client | NFR-014, RISK-08 | pinned toolchain + hash job |
| DES-051 | multi-transport client | bundler → alt bundler → queue → self-pay (censorship only) → L1 | NFR-007, NFR-014 | SDK |
| DES-052 | client zkey pinning | refuses to prove with an unregistered proving key | RISK-10 | client |
| DES-063 | safe confirmation + panic re-vote | screen safe to show a coercer | NFR-003, RISK-02 | client |

### 5.3 Data model

**On-chain (the complete list — if a field is not here, the protocol does not have it).**

```
PersonhoodRegistry
  identityTree            LeanIMT<Poseidon>      // leaves: identityCommitment = Poseidon(secret)
  enrolled                issuerNullifier → bool // one human, one enrolment per issuer
  nullifierUsed           keccak(scope,n) → bool // one action per human per scope
  commitmentTier          commitment → uint8     // 1..3 credential strength
  issuers                 issuerId → {active, stateOperated, tier, epochCap, metadataURI}

RegionRegistry
  regions                 regionId → {schemeVersion, parent, depth, path}   // path = "IN/KA/BLR"
  residencyTrees          regionId → LeanIMT<Poseidon>                      // leaf = Poseidon(C, R, validUntil, tier)
  attesters               attesterId → {active, tier, stake, metadataURI}
  issuanceCount           attesterId → regionId → uint256                   // public: spikes are visible
  population              regionId → {value, effectiveFrom, pending, pendingSince}

PartyRegistry
  petitions               petitionId → {jurisdiction, charterHash, cid, name, thresholdBps,
                                        requiredEndorsements /*frozen*/, endorsements,
                                        opensAt, closesAt, state, party, parentPartyId}

Party
  memberTree              LeanIMT<Poseidon>
  joinedAt / leftAt       commitment → uint64        // tenure; NEVER a weight
  memberCount             uint64
  growthSamples           [{timestamp, memberCount}]
  manifestoVersions       [{contentHash, cid, publishedAt, changeSummary}]   // append-only
  immutableClause         clauseId → bool
  entrenched*             clauseId → {approvalBps, timelockSeconds}

Governor
  proposals               [{tier, clauseId, contentHash, cid, createdAt, snapshotMembers,
                            surgeAtCreation, discussionEndsAt, votingEndsAt, executableAt,
                            quorumBps, approvalBps, minTenureSeconds,
                            for/against/abstain, finalized, succeeded, executed, target, callData}]
```

**Deliberately absent, everywhere:** name, address, postcode, coordinate, document number,
document image, biometric template or hash, email, phone, IP, device id, and any mapping from
a nullifier or commitment to any of the above. **A hashed address is still an address** — the
search space is small enough to enumerate — which is why no hash of any personal datum
appears either (ADR-004, CON-002).

**Off-chain.** Manifestos, proposal bodies, charters, region maps and ceremony transcripts on
IPFS (CIDv1) mirrored to Arweave, integrity-bound by the on-chain `contentHash`. Notification
preferences live only on the citizen's device or in an optional E2E-encrypted relay the
protocol cannot read.

### 5.4 API contracts

The protocol's public API is the contract ABI plus the event log; there is no privileged
REST surface, by design. `@trumocracy/sdk` wraps it. The indexer exposes a **read-only,
non-authoritative** GraphQL API; every value it serves that could change a citizen's decision
is re-verified against chain state by the client before use (ADR-014).

Key entrypoints, with their proof requirements:

| Call | Proof | Scope | Effect |
|---|---|---|---|
| `enrol(issuerId, π, [Nᵢ, C, issuerId])` | `personhood_enrol` | — | inserts `C`, burns `Nᵢ` |
| `endorse(petitionId, π, [root, R, tier, scope, Nₐ, C])` | `residency_member` | `keccak("endorse",petitionId)` | +1 endorsement |
| `activate(petitionId, charter)` | — | — | deploys Party+Governor iff count ≥ required |
| `join(π, signals)` | `residency_member` | `keccak("join",partyId)` | membership leaf + `joinedAt` |
| `propose(input, π, signals)` | `tenure_member` | `keccak("propose",partyId)` | snapshotted proposal |
| `vote(id, choice, π, signals)` | `tenure_member` | `keccak("vote",partyId,id)` | one vote, weight 1 |
| `finalize(id)` / `execute(id)` | — | — | permissionless |

### 5.5 Key sequences

**Enrol → endorse → activate**

```
citizen              client              issuer         PersonhoodRegistry   RegionRegistry   PartyRegistry
   │ tap "verify"      │                    │                   │                 │               │
   │──────────────────▶│ read NFC on device │                   │                 │               │
   │                   │───────────────────▶│ signed credential │                 │               │
   │                   │◀───────────────────│                   │                 │               │
   │                   │ prove in WASM (witness never leaves)   │                 │               │
   │                   │───────────────────────────────────────▶│ enrol(π)        │               │
   │                   │                                        │ burn Nᵢ, insert C               │
   │ tap "support"     │                                        │                 │               │
   │──────────────────▶│ prove residency ∈ tree(R)              │                 │               │
   │                   │────────────────────────────────────────────────────────────────────────▶│
   │                   │                                        │ spendNullifier  │  endorse(π)   │
   │                   │                                        │◀────────────────────────────────│
   │                   │  …count reaches threshold…             │                 │               │
   │ anyone            │────────────────────────────────────────────────────────────────────────▶│ activate()
   │                   │                                        │                 │   deploys Party+Governor
```

No arrow in that diagram terminates at a human approver, and none can be added without
changing `FR-018`.

**Coercion-resistant vote (Phase 3, MACI)**

```
voter  ──register voting key──▶ MACI state tree
voter  ──encrypted ballot─────▶ message queue        (coercer may watch this happen)
voter  ──key-change + re-vote─▶ message queue        (indistinguishable from the above)
                                     │
coordinator committee (5-of-7 DKG) ──┴─▶ tally + ZK proof ──▶ on-chain result
                                          nobody learns any individual ballot
```

The coercer's problem is not that they cannot see the ballot; it is that **they cannot tell
whether the ballot they watched is the one that counted**. That is what makes the receipt
worthless and the bribe irrational.

### 5.6 State models

```
PARTY:     draft ──publish──▶ petition ──threshold met──▶ active ──T3 vote──▶ dissolved
                                  └──window closed──▶ expired
           (no "approved", "verified" or "featured" state exists — each would need an approver)

PROPOSAL:  discussion ──▶ voting ──▶ tallying ──▶ {defeated | timelocked ──▶ executed}
                └──proposer withdraws (discussion only)──▶ cancelled

CANDIDACY: nominated(self) ──consent recorded──▶ published ──election──▶ {elected | not elected}
           elected ──term end──▶ expired
           elected ──recall stage 1 + stage 2──▶ removed ──▶ by-election
```

## 6. Runtime view

**Cold start (first-time citizen).** PWA loads (< 200 KB JS) → passkey created in the secure
enclave → identity secret derived and stored wrapped by the passkey → issuer flow → proof
generated in a Web Worker (1–4 s on the reference device) → UserOperation sponsored by the
paymaster → enrolment event. The citizen has at no point seen a seed phrase, a gas token, or
the word "wallet".

**Voting.** Client pulls proposal + snapshot root, verifies both against the chain (not the
indexer), generates the tenure proof locally, submits. Confirmation screen is identical for
every choice and offers "change my vote" for the whole window.

**Degraded modes.** Bundler down → alternate bundler → queue → (censorship only) self-pay → L1
force-inclusion.
Indexer down or lying → client falls back to direct chain reads (slower, still correct).
Sponsorship exhausted → **queued at zero cost with an explanation and an expected time**, never a
charge and never a denial (FR-061, NFR-005); self-pay is reserved for the censorship case, where
the alternative is denial rather than delay. Coordinator committee short of threshold →
election re-run under a fresh committee with the encrypted queue intact; **never** a fallback
to a plaintext tally, which would retroactively strip privacy from people who already voted.

## 7. Deployment view

### 7.1 Environments

| Env | Chain | Verifiers | Flags | Purpose |
|---|---|---|---|---|
| local | in-process EthereumJS | mocks | all on | unit + integration, offline, deterministic |
| CI | in-process EthereumJS | mocks + rejecting mock | matrix | every PR |
| devnet | L2 devnet | mocks | all on | integration, SDK, indexer |
| testnet | Base Sepolia | **real, ceremony-bound** | Phase-appropriate | public dry run, audits, ceremony rehearsal |
| staging | Base mainnet | real | prod-minus | production config, invited cohort |
| production | Base mainnet | real | staged 1→10→50→100% | live |

Promotion is one-directional and gated by the suites in Doc 04. **A deployment whose
`VerifierRegistry` contains a `MockVerifier` cannot be promoted past devnet** — checked by
the deployment-safety test, which reads `IS_INSECURE_MOCK()` from every registered verifier.

### 7.2 Network topology

Static client on IPFS (ENS-named) + Arweave mirror + conventional CDN, all serving a
byte-identical reproducible bundle. Indexer and relayer behind independent operators; the
client accepts user-supplied endpoints for both. No component sits on a path where its
absence prevents participation — that property is what NFR-025 actually requires, and it is
tested by running the E2E suite with the indexer and relayer switched off.

### 7.3–7.5 Compute, storage, availability

Indexer: stateless API + Postgres read model, rebuildable from chain in full (target < 6 h
for a year of history), so its backup strategy is "re-derive". Relayer: stateless, horizontally
scaled, paymaster funded from a treasury buffer sized to 90 days at p95 fees. Pinning cluster:
≥3 geographically separate operators + Arweave permanence. Multi-region active-active for
read paths. **RTO 15 min / RPO 0** for off-chain services — RPO is zero because they hold no
authoritative state; the chain does.

### 7.6 Capacity & sizing (NFR-008: 50M enrolled, 10M eligible in one jurisdiction)

| Tier | Unit | Baseline | Peak | Basis |
|---|---|---|---|---|
| Merkle depth | tree | 32 | 32 | 4.29 B leaves — 85× headroom over 50 M |
| On-chain insert | gas | ~70–90 k | ~90 k | **measured** in the EVM harness, not estimated |
| Proof verification | gas | ~250 k | ~290 k | Groth16, 3 pairings, constant |
| Enrolment | tx/day | 50 k | 500 k | pilot ramp; per-issuer epoch caps bound the peak |
| Vote burst | tx/hour | 100 k | 1 M | national ballot close; L2 throughput and blob capacity are the binding constraint, so voting windows are ≥72 h and closes are staggered per region |
| Indexer | events/s | 200 | 2 000 | derived from the above |
| Client proving | seconds | 1–4 | 10 | 2 GB Android 9, ≤2^17 constraints |

The vote-burst row is the one to watch: it is the only place where the architecture's
capacity assumption depends on someone else's roadmap (L2 throughput). The mitigation is
scheduling, not scaling — long windows and staggered closes — because a governance system
that requires everyone to act in the same hour has designed in its own outage.

## 8. Software & technology

| Layer | Choice | Version | ADR |
|---|---|---|---|
| Settlement | OP Stack L2 (Base), Ethereum blobs | — | ADR-001 |
| Contracts | Solidity | 0.8.28, Cancun | ADR-011 |
| Merkle | `@zk-kit/lean-imt.sol` + `poseidon-solidity` | 2.0.1 / 0.0.5 | ADR-005 |
| Proving | Circom + Groth16 (bn254), snarkjs | — | ADR-005 |
| Coercion resistance | MACI + threshold DKG coordinator | — | ADR-006 |
| Accounts | ERC-4337, passkeys (RIP-7212), EIP-7702 | — | ADR-002 |
| Client | Next.js PWA, viem, WASM prover | Node 22 | ADR-012 |
| Indexer | event-sourced read model → Postgres → GraphQL | — | ADR-014 |
| Storage | IPFS CIDv1 + Arweave | — | ADR-009 |
| Test | solc-js + EthereumJS in-process harness, vitest | — | §14 |

**Licensing:** AGPL-3.0-or-later for governance-critical code (CON-004) — copyleft is chosen
deliberately so a captured fork cannot be closed-sourced.

**Configuration & flags (§8.3).** `packages/protocol/flags.js` is the registry; every flag
that can be exercised on-chain is *also* enforced by the `FeatureFlags` contract, because a
frontend-only flag leaves the risky path live for direct callers. Every flag carries a
removal target; a flag without one is debt and CI reports it.

## 9. Repository & code-structure design

Per **ADR-011** (normative). Summary: one public monorepo; npm workspaces; the dependency
direction `protocol ← sdk ← web` enforced by `tools/dep-guard` in CI, with
`@trumocracy/protocol` held to **zero runtime dependencies** so it can serve as the
differential reference. Trunk-based, flags-first. Directory topology, layering rules and CI
topology are in ADR-011 §Decision; the test topology is in Doc 04.

## 10. Cross-cutting concepts

### 10.1 Security — DFD and STRIDE

**Trust boundaries (data-flow diagram).**

```
 ╔═ B1 DEVICE (citizen-trusted) ══════════╗
 ║ identity secret · witness · passkey    ║   ← the only place plaintext identity exists
 ╚════════════════╤═══════════════════════╝
                  │ proof + nullifier ONLY        ── B1→B2: the critical boundary
 ╔═ B2 PUBLIC CHAIN (trustless, world-readable) ══╗
 ║ roots · nullifiers · tallies · hashes          ║
 ╚═══╤════════════════════════════════════╤═══════╝
     │                                    │
 ╔═ B3 OFF-CHAIN SERVICES ═════╗  ╔═ B4 EXTERNAL ISSUERS/ATTESTERS ═══╗
 ║ indexer · relayer · pinning ║  ║ know a real identity already;      ║
 ║ non-authoritative           ║  ║ learn a region request, not a party║
 ╚═════════════════════════════╝  ╚════════════════════════════════════╝
```

| STRIDE | Threat | Mitigation | Residual |
|---|---|---|---|
| **S**poof | fake person endorses/votes | ZK personhood, per-issuer nullifier, tiering, epoch caps (DES-001/002/003) | as strong as the weakest accepted issuer — bounded by tiering (RISK-01/05) |
| **S**poof | malicious frontend serves a backdoored proving key | `zkeyHash` pinning + reproducible builds (DES-052, DES-050) | a user who ignores a warning |
| **T**amper | alter a tally | tallies derive from on-chain nullifier-gated votes; MACI tally proof | circuit bug (RISK-10) → two audits + negative tests |
| **T**amper | rewrite a manifesto quietly | append-only version chain + content addressing (DES-031) | none material |
| **R**epudiate | party denies a commitment | permanent public version history with timestamps | none material |
| **I**nfo | deanonymise by elimination in a small region | k ≥ 1000 guard + scope escalation (DES-008) | correlation over time (RISK-06) |
| **I**nfo | deanonymise by timing/traffic | no reader logging, random submission delay, sponsored ops indistinguishable | a global passive adversary — **not defended**, stated in §16 |
| **I**nfo | compelled disclosure of the member list | the list does not exist (§5.3) | attester-side data, outside our boundary |
| **D**oS | drain gas sponsorship | per-nullifier budgets + circuit breaker (DES-043) | actions queue at zero cost; delay, never charge or denial |
| **D**oS | sequencer censors a party | L1 force-inclusion (DES-041), ≥72 h windows | delay within the window |
| **E**oP | flash-loan governance takeover | **no transferable power exists** (ADR-007) | none — attack class removed |
| **E**oP | mob rewrites a charter | tiers + snapshot + adaptive quorum + entrenchment + fork (ADR-008) | a genuinely persuaded majority over a year — which is democracy |
| **E**oP | operator/admin intervention | no admin, pause or proxy in the core (ADR-010) | registry governance capture → exit right |

**Capability-absence is a security control here**, so it is tested as one: ABI-surface
assertions (no `transfer`/`approve`/`pause`/`setAdmin` on `Party`), selector scans of deployed
bytecode, and storage-layout assertions. §14 and Doc 04 record what that technique does and
does not prove.

### 10.2 Privacy & data protection

Minimisation by construction (§5.3). Unlinkability by scoped nullifiers. Anonymity-set floor
enforced on-chain. Erasure honoured by non-collection, with crypto-shredding for residual
off-chain content (ADR-013 §2). No analytics on political browsing, ever — the reading record
would be as dangerous as the membership record we refused to build.

### 10.3 Performance
Budgets: < 200 KB initial JS; interactive < 3 s on 4× throttled mid-range Android over Slow
4G; proof ≤ 4 s typical / 10 s worst on the reference device; median citizen action < USD 0.01
(measured per release, not assumed).

### 10.4 Scalability
Depth-32 trees (4.29 B leaves); constant-cost verification; batched MACI tallying; horizontal
stateless off-chain services; per-region sharding of residency trees is inherent to the model.

### 10.5 Reliability / HA / DR
RTO 15 min, RPO 0 off-chain (no authoritative state). Chain liveness is the floor; the L1
escape hatch is the backstop. Party state is exportable at any time by anyone (DES-044).

### 10.6 Observability
Governance-health SLIs: activation counts, turnout, quorum near-misses, recall rates, growth
anomalies, sponsorship burn, proof-failure rate, force-inclusion usage, operator diversity.
**No SLI may be derived from an individual's behaviour.** Detail in Doc 11.

### 10.7 Error handling & resilience
Fail *closed* on anything security-relevant (bad proof, unknown root, spent nullifier, thin
anonymity set). Fail *open* on convenience (indexer, sponsorship, notifications). Idempotency
comes free from nullifiers: a replayed action is rejected by construction.

### 10.8 i18n & accessibility
WCAG 2.2 AA tested in CI; ≥8 launch languages including ≥1 RTL; icon+audio assisted mode;
grade-8 reading level in all primary copy; full keyboard and screen-reader operation.

### 10.9 Cost / FinOps
Cost per citizen action is a **product metric with an alert**, not an infrastructure line
item. Sponsorship buffer ≥90 days at p95 fees; circuit breaker at 3× p99 daily spend.

### 10.10 Compliance & auditability
Every governance action emits an event; an independent verifier binary reproduces every
tally; a published transparency report covers filtering actions and compulsion attempts
(ADR-013 §4).

## 11. Situation & failure-mode analysis (per requirement)

| Requirement / DES | Normal | Edge | Failure → behaviour |
|---|---|---|---|
| FR-001 / DES-001 | one credential per human | issuer re-issues after device loss | duplicate `Nᵢ` → **reject**; recovery re-keys, never re-enrols |
| FR-004 / DES-002 | ≥2 issuers per region | one issuer offline | others still serve; **fail closed** if the set would drop below 2 non-state-inclusive |
| FR-005 / DES-003 | issuer honest | issuer compromised | epoch cap throttles, 48 h expedited removal, existing credentials **survive** (do not punish users for their issuer) |
| FR-006 / DES-005 | resident proves region | credential expired | proof fails on `validUntil` → prompt re-attestation |
| FR-009 / DES-007 | 5 sources agree | one source corrupt | median absorbs it; >±5%/quarter → **revert** |
| FR-009 / DES-010 | population known | oracle deflated to zero | verified-resident floor and 500-endorsement floor bind → attacker gains nothing |
| FR-014 / DES-011 | one endorsement each | replay from another address | nullifier already spent → **reject** |
| FR-016 / DES-009 | threshold met → activate | denominator moves mid-petition | requirement was **frozen at open** → unaffected |
| FR-018 | activation automatic | nobody calls `activate()` | permissionless — any citizen, any indexer, any observer can |
| FR-020 / DES-013 | anyone joins | thin region (k < 1000) | **refuse to publish**; client escalates scope to the nearest ancestor region |
| FR-021 | one member, one vote | member leaves mid-vote | snapshot governs; the vote stands |
| FR-025 / DES-016 | tier rules apply | charter tries to weaken them | **revert** `CharterWeakerThanFloor` |
| FR-026 / DES-021 | timelock elapses → execute | execution call reverts | proposal stays executable; retryable, permissionless |
| FR-027 / DES-022 | entrenched clause needs 90% | proposal targets an immutable clause | **revert** at proposal time, not at execution |
| FR-028 / DES-019 | snapshot eligibility | 10 000 accounts join after open | zero effect on this proposal; `AnomalousGrowth` raised for the next |
| FR-030 / DES-023 | ballot encrypted | coordinator member offline | 5-of-7 tolerates 2; below threshold → re-run, **never** a plaintext tally |
| FR-031 | receipt-free | user screenshots the confirmation | screen is choice-independent; re-vote remains possible → receipt is worthless |
| FR-032 | last ballot counts | re-vote at the deadline | last message in the queue wins; window ≥72 h so force-inclusion still fits |
| FR-034 / DES-026 | no interim tallies | someone reads chain state directly | client/indexer suppress; **we state plainly that on-chain state is public and Phase-1 tallies are observable** — this is a real limitation, closed by MACI in Phase 3 |
| FR-036 / DES-027 | self-nomination in own region | member moves region | candidacy invalid for the new region; term in the old one runs to expiry |
| FR-042 / DES-030 | recall in two stages | recall spam | grace window after election + cooldown after a failed recall |
| FR-049 / DES-033 | contribution under cap | whale splits into 100 donations | cap is per **nullifier**, not per address → **reject** |
| FR-053 / DES-034 | fork proceeds | parent tries to block | no blocking function exists |
| FR-058 / DES-042 | recovery via guardians | guardians collude | 7-day timelock + owner veto + public notice |
| FR-061 / DES-043 | sponsored action | budget exhausted | **queue with an explanation and an expected time**; never charge, never deny |
| NFR-014 / DES-041 | normal submission | sequencer censors | L1 force-inclusion; tested in CI, not assumed |

## 12. Architecture Decision Records

Full records in `docs/adr/`. Status of all fourteen: **Accepted**.

| ADR | Decision | Chief consequence accepted |
|---|---|---|
| 001 | OP Stack L2 (Base) now; sovereign rollup deferred to Phase 4 | sequencer is a liveness/ordering trust; mitigated by force-inclusion + ≥72 h windows |
| 002 | ERC-4337 + passkeys + social recovery; no platform key | passkey vendor dependency; mitigated by multi-device, hardware keys, recovery card |
| 003 | Issuer-agnostic personhood, 1-of-N, tiered, scope-bound nullifiers | Sybil resistance equals the weakest accepted issuer; bounded by tiering + caps |
| 004 | Hierarchical regions, per-region credential trees, median population oracle with floors | attesters learn a region request; boundary redraws are a governance surface |
| 005 | Circom + Groth16 on bn254, Poseidon LeanIMT | trusted setup exists — failure mode is forgery, **not** deanonymisation |
| 006 | MACI + 5-of-7 threshold coordinator | large engineering cost; tally latency; committee liveness dependency |
| 007 | No transferable power; 1p1v; capped, influence-free treasury | no token-funded growth; 1p1v makes personhood load-bearing |
| 008 | Tiers, snapshots, adaptive quorum, entrenchment, fork rights | tenure gates constitutional votes for new members; forks can fragment movements |
| 009 | Commitments on-chain, content on IPFS + Arweave, nothing personal anywhere | permanence cuts both ways; illegal content cannot be deleted, only flagged |
| 010 | Immutable core, timelocked registries, guaranteed exit, no pause | a core bug is unfixable in place — mitigated by size, audits, rehearsed migration |
| 011 | Monorepo with CI-enforced dependency direction | CI cost; needs the guard, not a convention |
| 012 | Local-first PWA, on-device proving, reproducible bundle | browser sandbox is weaker than native; proving heavy on low-end devices |
| 013 | Parties not elections; erasure by non-collection; powerlessness by design | "you can't stop bad actors" is a permanent, accepted criticism |
| 014 | Non-authoritative indexer, replaceable relayer, Sybil-resistant sponsorship | our own services become a convenience monoculture unless diversity is funded |

## 13. Risks & technical debt

The **living risk register of record is Doc 13 §6**; RISK-01..RISK-16 are owned there and are
not duplicated here. Architectural debt carried knowingly:

| Debt | Why now | Repayment |
|---|---|---|
| Mock verifiers in Phase 1 | circuits depend on ceremonies (Phase 2) | replaced at Phase 2; a mock in a promoted environment fails CI today |
| Public tallies in Phase 1 | MACI is a Phase-3 deliverable | MACI flag; **client MUST state plainly that Phase-1 votes are anonymous but not receipt-free** |
| Growth-sample array trimming in `Party` | bounded gas | move to a ring buffer before mainnet scale |
| No Elections/Recall/Treasury contracts yet | Phase-3 scope, flags off | built behind their flags |
| Region path stored as a string on-chain | readability for auditors | acceptable; measured, small |

## 14. Test hooks designed in

- `@trumocracy/protocol` is a dependency-free reference implementation so the contracts can be
  **differentially tested** against it (DES-045). This is the highest-value test class here.
- Deterministic in-process EVM harness (solc-js + EthereumJS): no RPC, no downloads, identical
  results on any machine — so a citizen or auditor can reproduce every result from a clean clone.
- `MockVerifier.IS_INSECURE_MOCK()` exists purely so the deployment-safety test can detect it.
- Every governance action emits an event, making the whole system replayable from chain data.
- `Chain.warp()` for time-dependent governance; snapshots for adversarial branch testing.
- Capability-absence assertions over ABIs and deployed bytecode.

## 15. Traceability

Maintained in the RTM (Doc 08). Every `FR/NFR` traces up to a `BR` and down to a `DES`, a
`US` and a `TC`. §5.2 provides the `FR/NFR → DES` half; Doc 05 provides `FR → US`; Doc 07
provides `US → TC`.

## 16. Open questions

| # | Question | Owner | Needed by |
|---|---|---|---|
| Q1 | Threshold calibration **method** (OI-01) — what percentage, derived how, published when? | Priya Raghunathan | before the first petition opens |
| Q2 | Pilot jurisdictions (OI-04); each needs local counsel and ≥2 issuers incl. ≥1 non-state | Sofia Marchetti | Phase 2 start |
| Q3 | Acceptable enrolment exclusion rate and the non-document path per pilot (OI-03) | Grace Mbeki | Phase 2 start |
| Q4 | **Global passive adversary is not defended.** Someone who watches all network traffic can correlate submissions. Is Tor/mixnet transport in scope for high-risk jurisdictions? | Dr. Lena Kowalczyk | Phase 4 |
| Q5 | Coordinator committee selection: how are 7 jurisdictionally-diverse operators recruited and resampled per election without becoming a standing body? | Aisha Nkemdirim | Phase 3 |
| Q6 | Phase-1 public tallies conflict with FR-034's spirit. Confirm the phased acceptance, with the client disclosure, or hold governance until MACI lands. | Priya Raghunathan | Phase 1 rollout |
| Q7 | **NFR-025 vs ADR-001 conflict.** NFR-025 requires an alternative inclusion path within 60 minutes; L1 force-inclusion takes 12–24 h. The sub-minute alternatives (alternate bundler, self-pay) cover everything except a *sequencer that is actively censoring*, which is the only case NFR-025 is really about. Either NFR-025 is restated to distinguish "operator-independent path" (minutes) from "censorship-proof path" (hours), or Phase 4's sovereign rollout with a decentralised sequencer set becomes a launch dependency. Raised by the test strategy (Doc 04, OPEN-11). | Chen Wei | before Gate 2 |
| Q8 | **Cross-namespace double enrolment (Doc 04, OPEN-04).** ADR-003 now dedups per identifier namespace, closing the multi-issuer-same-document hole. The cross-*type* residual (one person with both a passport and a social credential) is bounded but not eliminated. Confirm the bound — tier caps + charter minimum tier — is acceptable for the Must set, or raise the minimum tier for all governance actions. | Marcus Adeyemi | Phase 2 |
| Q9 | **NFR-004's 0.1% duplicate rate is not internally measurable** — by design, the system cannot link a nullifier to a person, so it cannot count duplicates. Verification requires an out-of-band, consented, audited sample. Confirm that method or restate the NFR. | Yuki Sato | before Gate 2 |

**Resolved during design:** OI-05 (k ≥ 1000 vs ward-level governance) — ADR-004 §2 escalates
an action's anonymity scope to the nearest ancestor region that meets the floor. Neither
NFR-002 nor BR-004 is weakened and no requirement text changes; ward-level *representation*
still works because an office is scoped to a ward while the *proof* is scoped to a larger
region. Needs product confirmation, not a requirements change.

## 17. Glossary

**Identity commitment** `Poseidon(secret)` — a public leaf that is not a person.
**Nullifier** a one-time token derived from a secret and a scope; proves "once", reveals nothing.
**Scope** a domain string (petition id, proposal id) that makes nullifiers unlinkable across actions.
**Anonymity set** the number of credential holders a prover could be; the protocol floor is k ≥ 1000.
**LeanIMT** gas-efficient incremental Merkle tree, Poseidon-hashed.
**Groth16** succinct proof system; constant, cheap on-chain verification; needs a per-circuit ceremony.
**MACI** Minimal Anti-Collusion Infrastructure; encrypted ballots + key-change ⇒ receipt-freeness.
**Receipt-freeness** a voter *cannot* prove how they voted, even if they want to.
**Entrenched clause** a charter clause requiring a higher bar than its tier; **immutable clause** one that no majority can ever amend.
**Fork** a new party inheriting a parent's charter, manifesto history and lineage, requiring nobody's permission.
**Tier** T0 operational · T1 policy · T2 structural · T3 constitutional.

---

### Downstream
DES/ADR are decomposed into stories (Doc 05), the repo is built from §9 + ADR-011 (Doc 06),
tests are designed from §11 and §14 (Doc 04, Doc 07), and everything is verified in the RTM
(Doc 08).
