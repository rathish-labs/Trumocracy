# ADR-003 — Proof of personhood: an issuer-agnostic adapter registry with scope-bound nullifiers

```
Status:        Accepted
Date:          2026-08-08
Owner:         Ravi Deshmukh (Principal Architect)
Traces:        BR-006, FR-001..FR-005, NFR-004, NFR-001, CON-002, RISK-01, RISK-05, RISK-06
```

## Context

"One person, one vote" is the entire product. Every other guarantee is downstream of it. But the
naive implementations all fail:

- **Government ID upload → server checks it.** Creates a database of citizens' identity documents
  linked to their political affiliation. This is the single most dangerous artefact it is possible
  to build. Categorically rejected (CON-002).
- **One biometric provider (iris/face) as the sole gate.** Creates a single company that decides who
  is a person. That is a gatekeeper — the exact thing we are removing — and a single point of
  compulsion, outage, and exclusion (people whose biometrics fail enrolment).
- **Stake/deposit-based Sybil resistance.** Makes personhood purchasable. Directly violates the
  anti-plutocracy guardrail.
- **Social-graph-only (BrightID/web-of-trust).** Excellent for the unbanked and undocumented,
  but weaker against a determined, well-funded attacker growing a fake sub-graph.

No single mechanism is simultaneously *inclusive*, *strong*, and *non-capturable*. Betting the
platform on one is an architectural error regardless of which one you pick.

## Decision

**Personhood is a pluggable credential, not a vendor.** The protocol defines an
`IPersonhoodAdapter` interface and a governance-curated **issuer registry**. A citizen is
*enrolled* when they present a valid proof from **any accepted issuer**, and the protocol records
**only** a scope-bound nullifier — never an identifier, never a document, never a biometric.

### The nullifier construction

```
identitySecret  s          — generated in the citizen's enclave, never leaves the device
identityCommitment  C  = Poseidon(s)              — the public leaf in the personhood tree
issuerNullifier     Nᵢ = Poseidon(idHashᵢ, ISSUER_SCOPE)   — proves "this human, at this issuer, once"
actionNullifier     Nₐ = Poseidon(s, actionScope)          — proves "this human, in this vote, once"
```

Two distinct nullifier layers, and the separation matters:

- `Nᵢ` is computed **inside** the issuer's ZK circuit from the underlying identifier
  (e.g. a passport's document hash, an Aadhaar hash, an orb iris code), scoped to an
  **identifier namespace** rather than to the issuer. It enforces *uniqueness at enrolment* —
  one passport cannot enrol twice — without the protocol ever learning the identifier.

  **The namespace, not the issuer, is the deduplication key**, and this distinction is
  load-bearing. Under 1-of-N acceptance, scoping the nullifier per *issuer* would let one
  human enrol once with each accepted issuer and then vote once per enrolment — silently
  converting "one person, one vote" into "one person, N votes". Every issuer that reads the
  same underlying credential (three different vendors all reading the same ICAO e-passport)
  therefore shares one `namespaceId`, so all three derive the *same* `Nᵢ` from the same
  document and the second enrolment is refused on-chain.

  **The residual, stated plainly:** namespaces cannot dedup *across* credential types. A
  person holding both a passport and a social-graph credential can enrol twice. Nothing in
  this design fixes that, because fixing it would require a common identifier across
  unrelated issuers — which is exactly the linkable master identity the whole architecture
  exists to avoid. It is bounded instead: tier-1 (social) credentials are capped at ≤5% of a
  region's enrolments per epoch, are excluded by default from T2/T3 decisions, and a party
  charter that cares can require a minimum tier for every action. A double-enrolled person
  gets at most one extra vote in low-tier decisions, at the cost of obtaining and maintaining
  two independent credentials — and gains nothing they could sell (ADR-007 §6).
- `Nₐ` is computed from the citizen's own secret and the **action scope** (a petition ID, a proposal
  ID, an election ID). It enforces *one action per human per scope*, and because the scope changes,
  actions in different votes are **cryptographically unlinkable to each other**. A citizen who
  endorses a petition and later votes in an unrelated party's election produces two nullifiers with
  no derivable relationship.

The registry stores `Nᵢ → enrolled` and `Nₐ → used`. It never stores a mapping to a person, and no
such mapping exists anywhere, including on our own servers, because we never receive one.

### Accepted issuers at v1 (1-of-N — any single one suffices)

| Class | Example issuer | Strength | Inclusion cost | Notes |
|---|---|---|---|---|
| **eID / e-passport NFC** | Self Protocol style: NFC chip read on-device, ZK proof of a valid ICAO signature + nationality + age, document hash → `Nᵢ` | strong | needs a biometric passport / national eID | Document never leaves the phone; only the proof is published |
| **Biometric uniqueness** | World ID style orb / device-based face-dedup | strong against duplicates | needs physical access to a device or orb | Accepted as *one* option, never as *the* option |
| **State civil registry attestation** | A national/state election commission issuing a blind-signed voter credential | strongest where it exists | requires state cooperation | Also the highest compulsion risk — see Consequences |
| **Social-graph verification** | BrightID-style verification party / web-of-trust | weaker, but reaches the undocumented | free, needs a human meeting | Rate-limited harder and given a lower `personhoodTier` |
| **In-person civic notary** | Accredited civil-society organisations running verification desks | medium | needs local presence | The offline inclusion path; critical for low-connectivity regions |

**Tiering, not exclusion.** Each adapter carries a `personhoodTier` (1–3). A party's charter chooses
the minimum tier it accepts for each action class. A charter amendment can require tier 3; joining
a party can accept tier 1. This lets communities set their own inclusion/strength trade-off rather
than the protocol imposing one globally — and it means a weak-but-inclusive issuer being partially
compromised degrades one tier, not the whole system.

**Adding or removing an issuer is a one-way-door protocol decision**: it requires a protocol
governance proposal with a **30-day timelock** and a published security assessment. Removing a
compromised issuer is expedited (48h) but the *removal* only invalidates future enrolments; already
issued credentials are re-attested rather than mass-revoked, so a compromised issuer cannot be used
to disenfranchise its legitimate users.

## Consequences

**Good**
- No vendor can gatekeep. If one issuer refuses a demographic, is compromised, goes bankrupt, or is
  ordered by a state to exclude a group, citizens route around it through another issuer.
- The protocol holds no identity data, so there is nothing to subpoena, leak, or sell. The honest
  answer to "hand over your member list" is "we do not have one, and here is the code proving it."
- Scope-bound nullifiers give unlinkability *by construction* rather than by policy.

**Bad / accepted risk**
- **1-of-N means the system's Sybil resistance is that of its *weakest* accepted issuer.** This is
  the central trade-off of this ADR and must not be papered over. Mitigations: (a) tiering, so weak
  issuers cannot reach high-stakes actions; (b) per-issuer enrolment caps per region per epoch, so
  a compromised weak issuer cannot flood a jurisdiction faster than the anomaly detector and the
  48h expedited removal can react; (c) published per-issuer enrolment statistics so the anomaly is
  visible to everyone, not just to us.
- **State-issued credentials are a compulsion vector.** A state that issues the credential can
  refuse it to dissidents. This is why a state issuer may never be the *only* accepted issuer in a
  jurisdiction — enforced as a protocol invariant: `acceptedIssuers(region).length >= 2` and at
  least one MUST be non-state (checked on-chain, tested).
- **Enrolment is a correlation moment.** Someone observing an issuer's servers learns "this passport
  enrolled in *something*". Mitigated by: enrolment does not name the platform to the issuer where
  the protocol allows it, mandatory random delay between enrolment and first action, and the
  guidance (Doc 14) to enrol before you need to act.

## Alternatives rejected

- **Building our own personhood system.** Rejected. We would become the gatekeeper we exist to
  abolish, and personhood is a decade-long research problem, not a feature.
- **Requiring 2-of-N issuers.** Materially stronger against Sybils, but excludes anyone with only
  one available credential — which is most of the people this platform is for. Rejected as a default
  and offered instead as a **charter-level option** (`requiredIssuerCount`), so a party that wants
  it can demand it.
