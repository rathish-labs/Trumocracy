# ADR-016 — Government eID as sole enrolment-nullifier issuer class per region (Phase 1)

```
Status:        Accepted — AMENDS ADR-003 (Phase-1 issuer restriction only;
               ADR-003's 1-of-N plurality model applies at Phase 3+)
Date:          2026-08-10
Owner:         Ravi Deshmukh — Principal Architect
Traces:        BR-006, BR-012, FR-073, OI-03 (Gate 1 disposition), OI-12
Source:        CR-v1.1.0 Change 8; GATE1-DECISION-2026-08-09.md §3 OI-03
Amends:        ADR-003 (Phase 1 scope; see ADR-003 Status for cross-reference)
Amendment:     2026-08-20 — Phase-1 pilot rail now named: India (Aadhaar offline paperless
               KYC), adapter class (c), per FR-121 and CON-015; OI-04-PILOT closed (ADR-021).
Amendment:     2026-08-20 — OI-20 ruling (Rathish, 2026-08-20;
               DECISIONS-2026-08-20-OI19-OI20.md): (a) FR-004's plural-issuer requirement is
               satisfied at the ARCHITECTURE LEVEL — Aadhaar is one implementation of the
               pluggable IPersonhoodAdapter interface (ADR-017 lineage), not a hardcoded
               dependency; the interface itself is plural and the Phase-1 deployment exercises
               one implementation of it. (b) Phase-1 single-rail deployment is a dated
               DEPLOYMENT limitation, exit condition Phase 2/eIDAS 2.0 per FR-121 — a
               deployment fact, not an architecture property, and never a Charter amendment.
               (c) FR-004's 50% attestor-share cap is inoperative for the Phase-1 single-rail
               duration (sole rail carries 100% share) — accepted, recorded explicitly. In
               Phase 1, a person without Aadhaar cannot enrol in the pilot region.
               (d) Permanence guard: extending single-issuer operation beyond the published
               Phase-1 scope requires the Charter-layer amendment process with Gate-1 re-entry,
               never a deployment default (FR-129). OI-20 CLOSED.
```

## Context

ADR-003 describes an issuer-plurality model: the protocol defines an `IPersonhoodAdapter`
interface and an issuer registry; a citizen enrols by presenting a valid proof from **any
accepted issuer** of any tier. This 1-of-N model is correct as a long-run design and remains
the architectural direction for Phase 3+.

However, two defects in the 1-of-N model at Phase 1 were identified:

**OPEN-04 / C-03 (cross-issuer deduplication):** Under 1-of-N acceptance, if two credential
*classes* can both mint enrolment nullifiers and they derive the nullifier from different stable
identifiers (e.g., a passport hash vs a social-graph node ID from a different issuer), there is
no on-chain mechanism to detect that both nullifiers belong to the same person *without
revealing the underlying identifiers*. A person holding both a passport and a social-graph
credential could enrol twice — once from each class — and hold two active personhood
credentials. ADR-003 acknowledges this residual ("cross-namespace double enrolment") and
bounds it to a small impact, but does not eliminate it.

**Gate 1 OI-03 disposition:** "Phase 1 uses government eID as the sole uniqueness anchor per
region; persons without a government identity cannot enrol — an accepted, documented
exclusion. A non-document attestation path is Phase 3 and needs its own ADR, threat model
and audit before it can mint anything."

The requirement FR-073 codifies this disposition into the protocol. This ADR records the
design decision and its explicit relationship to ADR-003.

## Decision

For **Phase 1**, the enrolment-nullifier issuer class is restricted to the **government eID
credential rail** as the sole class permitted to mint enrolment nullifiers.

Concretely:
- Each issuer in the `RegionRegistry`'s issuer set carries a `credentialClass` field:
  `GOV_EID` or `AVAILABILITY_ONLY`.
- Only issuers with `credentialClass = GOV_EID` may call the enrolment path (`enrol()`) with
  a nullifier-minting effect.
- `AVAILABILITY_ONLY` issuers (liveness attestors, social-graph issuers, civic notaries) are
  restricted to liveness attestation and the slow-recovery path authorised by FR-071/FR-072.
  They MUST NOT mint enrolment nullifiers and MUST NOT grant membership or governance rights.

The government eID class MAY include multiple issuers (e.g., multiple eIDAS 2.0 wallet
providers, national ID card chip readers, and offline KYC operators acting as government
agents), as long as each reads from the same government-designated stable identifier
namespace. Multiple issuers within the same namespace share one `namespaceId` and therefore
derive the same `Nᵢ` from the same credential, so the second enrolment is refused on-chain
(the nullifier already exists). This is ADR-003's namespace-deduplication property, applied
strictly within the government-eID class.

## Relationship to ADR-003

This ADR is a **Phase-1 amendment to ADR-003**, not a supersession.

| What ADR-003 says | Phase 1 (this ADR) | Phase 3+ |
|---|---|---|
| 1-of-N accepted issuers | Restricted to GOV_EID class only | Full 1-of-N resumes, per new ADR with threat model |
| Tiering (1–3) | Retained; all Phase-1 issuers are tier 2 or 3 | Retained |
| Non-state issuer required | Relaxed in Phase 1 (government eID is state-issued by definition) | Re-enforced at Phase 3 |
| Cross-type deduplication residual | Eliminated by class restriction | Re-assessed at Phase 3 per new ADR |

ADR-003's status field is updated to reference this amendment. The relationship direction is
**ADR-016 amends ADR-003 (Phase 1 only)**. ADR-003 remains the authoritative long-run design.

## Consequences

**Good**
- Eliminates cross-class double enrolment in Phase 1 by construction — there is only one
  credential class, so all nullifiers share one namespace and collide on reuse.
- Simplifies the Phase-1 security argument: "uniqueness is as strong as the government eID
  programme in the jurisdiction" is auditable and jurisdictionally scoped.
- The Phase-3 non-document path gets its own ADR, threat model and audit before it can mint
  anything (OI-03 disposition), which is the correct governance approach for a one-way-door
  decision.

**Accepted risk / known consequences**
- **Accepted exclusion (Phase 1):** Citizens who lack a government eID cannot enrol in Phase 1.
  This disproportionately affects marginalised groups — the exact population the platform
  claims to serve. The exclusion is documented (TD-05), published as a launch metric, and
  treated as a known, measured cost rather than a hidden design assumption.
- **State compulsion risk:** Because all Phase-1 issuers are government-eID-class, the compulsion
  risk noted in ADR-003 (a state that issues the credential can refuse it to dissidents) applies
  to the entire Phase-1 enrolled population, not just to state-tier credentials. This is a
  genuine regression from ADR-003's 1-of-N model. It is accepted for Phase 1 because the
  alternative (cross-class double enrolment) is a worse Sybil failure.
- **Phase-3 re-engineering cost:** Re-opening enrolment to non-government classes at Phase 3
  requires a new ADR, a new threat model, an audit, and a migration path for the then-existing
  enrolment state. This cost is real and is accepted.

## Alternatives rejected

**Keep ADR-003's 1-of-N model unchanged.** Rejected for Phase 1. Cross-class deduplication has
no cryptographic free lunch at Phase 1 scale (no common identifier without a linkable master
identity). The OPEN-04 residual was bounded as "one extra vote at most" in low-tier decisions,
but that bound relies on tiering being correctly configured, which is a launch-time operational
dependency rather than a protocol invariant.

**Require 2-of-N issuers from different classes.** Rejected. Strengthens Sybil resistance but
excludes anyone who only has one credential class — worsening the inclusion problem.

**Use a nullifier namespace that spans classes without revealing identifiers.** Rejected for
Phase 1. No such construction exists that also preserves zero-knowledge properties and is
audited. This is exactly the research problem OI-03 defers to Phase 3.
