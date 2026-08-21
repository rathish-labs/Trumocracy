# ADR-021 — Verification gates counting, never joining; on-device nullifier-only identity posture; two rejected designs recorded

```
Status:        Accepted
Date:          2026-08-20
Owner:         Ravi Deshmukh — Principal Architect
Traces:        BR-006, BR-009, BR-017,
               FR-069, FR-070, FR-073, FR-082, FR-083, FR-086,
               FR-121, FR-122, FR-123, FR-124, FR-125, FR-126, FR-127, FR-128,
               CON-015, TD-12
Source:        DECISIONS-2026-08-20-PILOT-VERIFICATION.md (Decisions 1–4; Rathish,
               2026-08-20); docs/02-requirements-srs.md v2.3.0 §4.40–§4.42
Lineage:       ADR-003 (personhood, issuer-agnostic); ADR-016 (Phase-1 GOV_EID-class
               restriction); ADR-017 (nullifier derivation + adapter interface, incl.
               SC-01 amendment); ADR-018 (nullifier-collision recovery)
Amendment:     2026-08-20 — OI-19 and OI-20 both resolved (Rathish, 2026-08-20;
               DECISIONS-2026-08-20-OI19-OI20.md). OI-19: invite-gating is a spam-control
               rate-limiter with a mandatory always-open non-invite fallback (FR-125
               finalised, no longer draft); FR-020 unamended and absolute; test obligation —
               a determined real person can always join without an invite. OI-20: Phase-1
               single-rail deployment is a dated limitation with Phase-2/eIDAS 2.0 exit
               condition (FR-121); FR-004 satisfied at the architecture level (Aadhaar is
               one implementation of the pluggable adapter interface, not a hardcoded
               dependency); making single-issuer operation permanent requires the Charter-
               layer amendment process with Gate-1 re-entry, never a deployment default
               (FR-129). See §"Open tensions" below for the resolved-status pointer.
```

## Context

The human approver (Rathish) issued four decisions on 2026-08-20, recorded verbatim in
`artifacts/status/DECISIONS-2026-08-20-PILOT-VERIFICATION.md`. The product-owner applied
these in Doc 02 v2.3.0 as FR-121..FR-128, CON-015, OI-19, OI-20, and TD-12. This ADR
records the architectural consequences of Decisions 1–4.

Three prior ADRs form the design lineage this ADR builds on:

- **ADR-016** restricts Phase-1 enrolment-nullifier minting to the `GOV_EID` credential
  class only (single-class restriction per region; amends ADR-003 for Phase 1).
- **ADR-017** specifies the deterministic in-circuit nullifier derivation
  (`Poseidon(stable_id_secret, enrolment_scope)`) and the pluggable adapter interface; the
  SC-01 amendment (2026-08-10) made the trust-anchor commitment a **public circuit input**
  verified on-chain against the registered issuer's `trustAnchorHash`, with per-adapter-class
  circuits and ceremonies.
- **ADR-018** specifies the nullifier-collision recovery path (7-day delay, active-key veto,
  voting bar).

The SC-01 finding is closed; the C-03 enrolment-circuit design with the SC-01 trust-anchor
binding is confirmed sound by `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`.

---

## Decision 1 — Pilot jurisdiction sequence (FR-121, CON-015)

**Decision (Rathish, 2026-08-20):** deploy enrolment adapters in the following sequence,
determined by technical readiness of the identity rail, not by market size.

**Phase 1 — India — Aadhaar offline paperless KYC.** FR-070 adapter class (c); single
national issuer; near-universal coverage; government-signed XML provable in-circuit;
all four FR-069 universal in-circuit checks satisfied (issuer authenticity, credential
freshness, region membership, correct derivation); ADR-016 single-issuer-class posture
applies; ADR-017 on-device derivation applies.

**Phase 2 — EU — eIDAS 2.0 wallets.** FR-070 adapter class (a); first targets France and
the Nordic countries, whose national implementations are privacy-preserving by design.
Phase 2 follows the adapter-certification process governed by CON-005 and does not require
a separate Gate 2.

**Phase 3 — USA — deferred.** The USA has no national digital identity: the state-by-state
mobile-driver's-licence (mDL) landscape is fragmented, activation is low, and an optional
"phone-home" privacy default in current mDL specifications conflicts with the
non-correlation guarantee (FR-002, FR-069). The USA is deferred to Phase 3 and requires its
own ADR with a threat model and independent audit before any mDL adapter mints enrolment
nullifiers.

**Hard dependency — CON-015.** A legal opinion for the Phase-1 lead jurisdiction (India)
is required before the Phase-1 adapter is marked implementation-ready. Aadhaar's use for
anything resembling political or voter identification is legally sensitive in India. The
legal opinion is a Gate-2 line item, not an afterthought.

This closes OI-04-PILOT (Doc 02 §13).

---

## Decision 2 — Tiered verification gates: COUNTING, never joining (FR-122..FR-125)

### Architectural rule

Verification is a distinct, optional step — not a precondition for joining. This ADR
records the design rule as a protocol-level invariant:

> **Verification gates COUNTING, never joining.**

- **Open tier (FR-122):** any citizen may access the platform — reading, following,
  watching, other low-stakes participation — without completing personhood verification.
  No verification requirement may be a condition of open-tier access under any
  configuration.
- **Counted actions require proof of unique personhood (FR-123):** contributing to a
  party's official strength number, voting in a binding decision, standing as a candidate —
  each requires the FR-069 enrolment nullifier. A party's published strength number counts
  verified persons only.

**Architectural consequence.** The strength number is computable from nullifier-backed
enrolments alone. Open-tier growth can never inflate it — open-tier participation has no
path to any counted total by construction, not by policy configuration. This reconciles open,
frictionless participation with a truthful, manipulation-resistant strength number.

### Verified status mapped onto the existing model

Verification = successful `enrol()` through the **existing** enrolment circuit (the C-03
design with the SC-01 trust-anchor binding; ADR-017). No new "verified" component is added;
the visible verified status is a derived view: does the member's nullifier exist in the
on-chain registry? Privacy-tier-appropriate surfacing rules apply at the client:

- **Worker- and Candidate-tier (FR-083):** verified marker is visible on the member's own
  private account view and on the public participation record; that record already exists
  by explicit informed consent at role-taking.
- **Supporter-tier (FR-082):** no profile surface exists for a Supporter by design. The
  verified status manifests **only** as the Supporter's nullifier being counted in the
  aggregate strength number. No per-person public verified marker exists for a Supporter on
  any surface.
- **No retroactive linkage (FR-086):** no retroactive linkage between a Supporter's verified
  status and any attributable record is permitted through any data the system holds or emits.

### Open-tier invite-gating (FR-125 — draft, pending OI-19)

Decision 2 permits invite-gating for spam control only at the open tier, and Decision 4
permits referral to gate entry with the referral edge verified then discarded, never stored.
These interact with FR-020's admission ban (no approval, sponsorship, interview, invitation,
fee, or veto). OI-19 records the unresolved question. This ADR takes no position on OI-19
and records it as pending the approver.

---

## Decision 3 — On-device proof, nullifier-only, no stored identity (FR-126..FR-128)

### Confirmation of existing design

Decision 3 **confirms** the existing C-03 enrolment circuit with the SC-01 trust-anchor
binding as the mechanism. It is **not a new component.** The existing design, as specified
in ADR-017 and confirmed by `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`:

- `stable_id_secret` is a **private in-circuit witness** that never leaves the device.
- The trust-anchor commitment is a **public input** verified on-chain against the registered
  issuer's `trustAnchorHash`.
- `prepareWitness` runs in the on-device WASM prover; the on-chain adapter interface
  (`ICredentialAdapter`) is the only surface exposed to the platform network.
- Each adapter class has its own circuit and verifier (`personhood_enrol_[class]`) with its
  own trusted-setup ceremony — there is no shared `CIRCUIT_ENROL` constant.

### What Decision 3 adds architecturally

Three normative additions, beyond the base C-03/SC-01 specification, that close the
gap between the existing circuit design and the requirements FR-126..FR-128:

**(a) Raw credential processed on-device and discarded — never transmitted (FR-126).** The
raw credential — Aadhaar offline XML, eIDAS 2.0 wallet attributes, ICAO Doc 9303 chip data,
mDL data — is used locally to generate the ZK proof and to derive the enrolment nullifier.
It is then discarded. It must not be transmitted to the platform or to any intermediary, in
any encoding, at any point in the enrolment flow. Only the generated ZK proof and the
derived nullifier are transmitted. This is a normative protocol-interface bound, not an
operational guideline.

**(b) Duplicate detection by nullifier collision only — no stored-identity comparison path
may exist (FR-127).** A second enrolment attempt by the same person produces the same
deterministic nullifier (ADR-017 derivation is fully deterministic) and is rejected on-chain
by collision with the existing record. No name-matching, biometric comparison,
document-number lookup, administrative review, or identity-record comparison may exist in
any duplicate-detection path under any configuration.

**(c) The subpoena test as a design invariant (FR-128).** No raw or reversible identity
data may be stored in any form — not in any database, cache, log, message queue, backup, or
ephemeral store, and **not even in encrypted form**. The acceptance test is the **subpoena
test**: if a court ordered the platform to disclose who belongs to a party, the platform
must be **technically unable** to comply — not merely legally entitled to decline.
Encrypted-but-decryptable identity storage fails this test: it creates a dataset that can
be produced under sufficient legal compulsion, converting "we cannot deanonymise you" into
"we promise not to." This is an architectural invariant, not a policy commitment.

### Phase-1 pilot adapter mapping

The first production adapter is the Aadhaar offline paperless KYC adapter — ADR-017
adapter class (c) — subject to CON-015 (legal opinion, Gate-2 line item). On-device
processing applies to all adapters; the class (c) adapter derives `stable_id_secret`
from the government-assigned stable identifier present in the signed Aadhaar offline XML,
per ADR-017 §(c). eIDAS 2.0 (class (a)) is Phase 2. USA mDL adapters (which would fall
under a new Phase-3 ADR) are deferred due to the fragmented credential landscape and the
phone-home non-correlation conflict noted in Decision 1.

---

## Alternatives rejected

Both alternatives below are **considered-and-rejected**. They are recorded here so future
contributors do not re-propose them as oversights or address them as unresolved gaps.

**Persistent referral graph / referrer-liability / association-based tracing.** Described
as: store referral edges (who invited whom) persistently; make referrers liable for the
behaviour of those they referred; use association-based analysis to identify disruptive
actors through the social graph.

**Rejected (Rathish, 2026-08-20).** This design deanonymises Supporters through the social
graph and enables guilt-by-association purges. It contradicts:

- The affirmative-quorum removal ruling (FR-105, amended at v2.1.0): removal of a party
  member requires an affirmative-quorum vote — social-graph liability sidesteps this.
- The behavioural-analytics prohibition (FR-111, §4.37): collecting referral-edge data for
  "troublemaker tracing" is precisely the kind of per-user behavioural surveillance the
  platform prohibits.
- The sacred user space principle: the political social graph of who invited whom on a
  political organising platform is among the most sensitive data imaginable; its persistent
  collection recreates the political-intelligence-database risk that the platform exists to
  prevent.

Decision 2 and Decision 4 together permit referral to *gate entry* at the open tier only
(FR-125). The architectural constraint is: the **referral edge is verified then discarded,
never stored**. No referral relationship may be available to any actor at any time after the
gate-check completes. Note that OI-19 leaves the admissibility question of invite-gating
itself (vs FR-020) with the approver — this ADR records the Decision 4 rejection of the
*persistent* referral graph, not a judgment on OI-19.

**Storing identity data (even encrypted) for later comparison.** Described as: store
identity attributes — raw or encrypted — so that duplicate-enrolment detection can compare
records, or so that re-identification can be performed under legal compulsion if required.

**Rejected (Rathish, 2026-08-20).** A decryptable identity registry recreates the subpoena
risk, the operator-override risk, and the platform-capture risk that the platform exists to
eliminate. It turns the architectural guarantee "we cannot deanonymise you" into a policy
promise "we promise not to" — the weakest possible form of protection, and one that is
contingent on the goodwill of whoever controls the decryption key.

The encrypted-identity approach fails the subpoena test (FR-128): a court order to produce
the encrypted store is executable in practice. The only data posture that passes the
subpoena test is one in which no identity-to-member mapping exists — or can be assembled
from any combination of stored data — anywhere in the platform.

---

## Open tensions this ADR does not resolve

> **Resolved 2026-08-20 — see header amendment.** Both OI-19 and OI-20 were decided by
> the approver (Rathish, 2026-08-20; DECISIONS-2026-08-20-OI19-OI20.md). Original tension
> statements retained below for traceability.

**OI-19 — Invite-gating vs FR-020 admission ban (RESOLVED 2026-08-20).** Decision 2 permits
invite-gating for spam control at the open tier; Decision 4 permits referral to gate entry
(edge discarded after check); FR-020 (Must) bans "approval, sponsorship, interview,
invitation, fee or veto" as admission conditions. Whether the scope distinction (open-tier
spam control vs counted-membership admission) resolves the conflict, or whether FR-020's
text requires amendment, is a pending approver decision. This ADR takes no position and
records OI-19 as live.

**OI-20 — Single-rail Phase-1 pilot vs FR-004 attestor plurality (RESOLVED 2026-08-20).**
FR-004 requires at least two independent attestors per launch region. Phase-1 India uses
Aadhaar — one national government issuer, one rail. Whether this is a formal Phase-1 waiver
of FR-004's text, or whether FR-004 requires amendment to accommodate the single-rail pilot
posture, is a pending approver decision. This ADR takes no position and records OI-20 as
live.

---

## DES coverage note

DES elements for FR-121..FR-128 are **next-increment design work**, consistent with the
recorded-phasing posture for FR-074..FR-111 in Doc 03 §16. This ADR records the decision
and the normative architectural constraints. Detailed DES elements — Phase-1 adapter
contract extension, on-device WASM prover interface spec, verified-status client-side
surfacing rules, subpoena-test automated absence-of-data suite wiring — are the next design
increment and will be owed in the corresponding Doc 03 update.

---

## Consequences

**Good**

- The verified strength number is manipulation-resistant by construction: open-tier growth,
  however large, contributes zero to any counted total.
- The subpoena-test invariant provides a legally verifiable architectural guarantee that no
  policy promise can match. The guarantee is architectural: no mapping can be assembled,
  not "we will not assemble it."
- Nullifier-collision duplicate detection requires no identity storage and no administrative
  review process.
- Decision 3 confirms the existing C-03/SC-01 circuit as the complete mechanism; no new
  cryptographic component is introduced.
- ADR-017's deterministic derivation means recovery (ADR-018) works without platform
  cooperation — a person can re-derive their nullifier from the same credential.

**Bad / accepted risk**

- **Open-tier account farms are possible.** Bots or sockpuppets at the open tier have zero
  electoral impact (they do not count); their nuisance impact is accepted and managed by
  the invite-gating mechanism (FR-125, pending OI-19) and rate-limiting (FR-023 scope).
- **CON-015 creates a Gate-2 dependency** on a legal opinion outside the engineering team's
  control. The Phase-1 adapter cannot be marked implementation-ready until this opinion is
  obtained and recorded.
- **OI-19 and OI-20 are live.** Until resolved, FR-125 is a design-intent record (not a
  finalised normative requirement), and FR-004 is not amended. Both require a return to the
  approver before the relevant requirements are implementation-ready.
- **Phase-3 mDL adapter requires a new ADR with threat model and audit.** This cost is
  accepted and is consistent with the OI-03 governance posture established in ADR-016.
