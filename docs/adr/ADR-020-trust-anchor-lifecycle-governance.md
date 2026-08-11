# ADR-020 — Trust-anchor lifecycle governance: rotation and revocation

```
Status:        Accepted
Date:          2026-08-11
Owner:         Ravi Deshmukh — Principal Architect
Traces:        FR-112, FR-113, FR-069, FR-070, NFR-004, NFR-008, BR-006, BR-015,
               RISK-30, DES-069, DES-070, DES-090, CON-003
Source:        artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md §4 (SC-13, SC-14);
               GATE1-DECISION-2026-08-11.md §4 (SC-13/SC-14 design change owed to architect);
               ADR-017-nullifier-derivation-and-adapters.md (amended 2026-08-11; see below)
Amends:        ADR-017 (post-registration lifecycle; ADR-017's registration-time binding is
               unchanged)
```

## Context

ADR-017 and the SC-01 fix (Doc 03 v1.1.2, 2026-08-10) established that each issuer's
trust-anchor key commitment is stored on-chain as `issuers[issuerId].trustAnchorHash` and is
checked as a public signal in the enrolment circuit. This correctly defeats the original SC-01
attack (attacker substitutes a fabricated trust anchor as a private witness).

The SC-01 re-scan (artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md, 2026-08-10) found
two lifecycle scenarios that the registration-time fix left unaddressed:

**SC-13 (HIGH):** Post-registration compromise. A trust-anchor key that is correctly registered
can later be compromised. The on-chain record still carries `trustAnchorHash == Hash(compromised_key)`.
Until the on-chain record is updated or the issuer is deactivated, an attacker holding the
compromised private key can sign synthetic credentials and enrol unlimited Sybil identities.
The existing STRIDE residual covered only mis-registration (mitigated by the timelock at
`registerIssuer`), not post-registration compromise.

**SC-14 (MEDIUM):** Rotation liveness gap. When a legitimate issuing authority rotates its
trust anchor (normal lifecycle), the on-chain hash becomes stale. New credentials signed with
the new key fail the `publicSignals[4] == issuers[issuerId].trustAnchorHash` check. New
enrolments from that issuer class are blocked until the on-chain record is updated. The
governance tier and duration for updating `trustAnchorHash` were not specified, leaving the
blocking window indeterminate.

Both findings were resolved in principle at requirements level by FR-112 and FR-113 under
ruling 4: trust-anchor lifecycle governance is a member-vote action, executed by code — not by
an operator, steward, or emergency key. This ADR records the design and rationale.

## Decision

### Ruling 4 applied throughout

Both rotation and revocation MUST be enacted only by `Governor.execute()` with
`permittedActionClass = TRUST_ANCHOR_MGMT`. No steward, operator, or privileged key may call
the lifecycle functions directly. Humans vote; code executes. This is the same "operator-
capability absence" property enforced for all other protocol-state changes (ADR-010, CON-003).

### Trust-anchor rotation (SC-14 closed)

When an issuing authority legitimately rotates its trust anchor, the on-chain lifecycle
follows:

1. A passed governance vote enacts `rotateTrustAnchor(issuerId, newAnchorHash)` via
   `Governor.execute()`. This is a governance ACTION (not an amendment), governed at the
   Open Layer bar: ordinary citizen vote; 15% quorum, 60% supermajority. Timelock is 90 days
   per DES-091 / SDD §10.11 (the ordinary platform governance timelock — shorter amendment-
   specific timelocks do not apply to governance actions).

2. On enactment, `trustAnchorState` transitions to `ROTATION_PENDING` with:
   - `pendingAnchorHash = newAnchorHash`
   - `anchorEffectiveAt = block.timestamp + ordinary_timelock` (already elapsed; this field
     records when the new anchor is the sole accepted anchor)
   - `anchorOverlapEnd = anchorEffectiveAt + ANCHOR_OVERLAP_WINDOW` (60 days, see below)

3. During the overlap window (from enactment until `anchorOverlapEnd`), `enrol()` accepts
   EITHER `publicSignals[4] == issuers[issuerId].trustAnchorHash` (old anchor)
   OR `publicSignals[4] == issuers[issuerId].pendingAnchorHash` (new anchor).

4. After `anchorOverlapEnd`, only the new anchor is accepted.

**Why 60 days for the overlap window:** Standard government-eID and ICAO credential refresh
cadences range from 6 months to 5 years; a 60-day window is safely within the range where a
citizen who renews their credential at the normal schedule will still be within the window.
During the overlap, both anchors produce valid enrolment proofs, so no citizen is blocked.
Sybil risk during the overlap is bounded by the existing per-issuer epoch cap (DES-003) and
the enrolment nullifier deduplication that continues regardless of which anchor is used.
There is no window where a Sybil can leverage the rotation to enrol twice: each enrolment
nullifier is unique per (stable_id_secret, enrolment_scope) regardless of which anchor was
used to prove the credential.

This design **closes SC-14**: enrolments are never blocked by a compliant rotation, and the
overlap window is a published, enforced duration, not an unspecified gap.

### Trust-anchor revocation — ordinary path (SC-13 partially closed)

When a trust anchor is known to be compromised or the issuing authority withdraws:

1. A passed governance vote enacts `revokeTrustAnchor(issuerId)` via `Governor.execute()`.
   This is a governance ACTION at the Open Layer bar: 15% quorum, 60% supermajority. Ordinary
   revocation timelock: 30 days per DES-091 / SDD §10.11. The Guarded Layer super-process
   (80%/25%/180-day two-vote) applies only to AMENDMENTS of named absolutes — it does NOT
   apply to revocation or rotation governance actions.

2. On enactment, `trustAnchorState` transitions to `REVOCATION_PENDING` with
   `anchorEffectiveAt = block.timestamp + 30 days`.

3. After `anchorEffectiveAt`, `enrol()` reverts with `AnchorRevoked` for this issuerId. The
   field `issuer.active` remains true; the specific enrolment-blocking is via the lifecycle
   state, not blunt deactivation.

4. Already-enrolled credentials are not affected. `trustAnchorHash` is checked at `enrol()`
   only. All actions by enrolled citizens (vote, propose, join, fork) continue normally.

5. If a future vote separately decides to invalidate already-enrolled credentials from the
   revoked issuer, that is a separate governance action outside the scope of this ADR (and
   the bar for such an action would be higher, touching fundamental identity rights).

### Trust-anchor revocation — emergency path (SC-13 fully closed)

For scenarios where a 30-day ordinary timelock is too slow (active key compromise with
evidence of ongoing Sybil enrolment):

1. A passed governance vote enacts `revokeTrustAnchor(issuerId, emergencyPath=true)` via
   `Governor.execute()`. The voting requirements (quorum, supermajority, tier) are UNCHANGED
   from the ordinary path. ONLY the timelock is shortened: 7 days instead of 30 days.

2. The 7-day timelock is non-zero. This is deliberate:
   - It preserves the false-alarm veto window. A revocation vote triggered by a mistaken
     report of compromise has 7 days to be corrected (e.g., by a second governance vote
     withdrawing the revocation, if the platform has such a mechanism, or by
     non-enactment if `enact()` is not called before the community responds).
   - It prevents any unilateral operator action disguised as an emergency. Even on the
     expedited path, a full passed governance vote is required.
   - 7 days matches the RECOVERY_DELAY constant (ADR-018), establishing a consistent
     "minimum non-zero emergency window" principle across the protocol.

3. On `anchorEffectiveAt` (7 days after enactment), `enrol()` reverts with `AnchorRevoked`.
   Already-enrolled credentials are unaffected (same as ordinary path).

**Residual window (RISK-30 — accepted):** During the 7-day emergency timelock, a compromised
anchor can still be used to enrol Sybil identities. This window is the accepted residual cost
of maintaining ruling 4 (no operator unilateral action). It is bounded by:
- The per-issuer epoch cap (DES-003, FR-005): Sybil enrolments within the window are
  throttled by the epoch cap; a complete identity flood is not possible within 7 days.
- NFR-004 duplicate-detection audit: out-of-band sampling can identify anomalous enrolment
  patterns for later adjudication.
- The governance vote itself creates a public on-chain signal that a compromise is suspected;
  the community can observe and respond (e.g., parties can freeze candidate selection pending
  investigation).

This residual is accepted, recorded in the risk register (RISK-30, Doc 13 ss6), and is the
explicit trade-off for maintaining operator-capability absence (CON-003).

### Trust-anchor lifecycle state machine

```
[ACTIVE]
    │
    ├─ rotateTrustAnchor() via Governor.execute()
    │
    ▼
[ROTATION_PENDING]
    │  old anchor accepted until anchorOverlapEnd (60 days)
    │  new anchor accepted immediately
    │
    ├─ block.timestamp >= anchorEffectiveAt
    │
    ▼
[ACTIVE] (new anchor; old no longer accepted after anchorOverlapEnd)

[ACTIVE]
    │
    ├─ revokeTrustAnchor() ordinary — 30-day timelock
    ├─ revokeTrustAnchor() emergency — 7-day timelock
    │
    ▼
[REVOCATION_PENDING]
    │
    ├─ block.timestamp >= anchorEffectiveAt
    │
    ▼
[REVOKED] — enrol() reverts AnchorRevoked; enrolled credentials unaffected
```

### Relationship to ADR-017

ADR-017 specifies that `trustAnchorHash` is a PUBLIC INPUT to each adapter-class enrolment
circuit, checked on-chain against `issuers[issuerId].trustAnchorHash`. That specification is
UNCHANGED by this ADR. ADR-017 covers the registration-time binding (what the hash means and
how it is verified). This ADR covers the post-registration lifecycle (how the hash changes and
what governance governs that change). Both ADRs are required for a complete trust-anchor
security model; neither supersedes the other.

ADR-017 is amended to note: "2026-08-11: post-registration trust-anchor lifecycle
(rotation/revocation governance) specified in ADR-020; this ADR's registration-time binding
is unchanged."

## Security properties

| Property | Mechanism | Residual |
|---|---|---|
| Rotation cannot block enrolments | 60-day dual-anchor overlap window | None — both anchors accepted throughout; SC-14 CLOSED |
| Revocation requires a passed vote | `Governor.execute()` only; no operator path | None — the code path for unilateral revocation does not exist |
| Emergency revocation is faster but still requires a vote | 7-day vs 30-day timelock; same quorum/supermajority | 7-day window remains exploitable (RISK-30, accepted) |
| Sybil flood during emergency window is bounded | Per-issuer epoch cap (DES-003) + NFR-004 audit | Epoch-cap-sized Sybil cohort may enrol in 7 days |
| Enrolled credentials unaffected by revocation | `trustAnchorHash` checked at `enrol()` only | None — existing members are unaffected |
| No operator bypass disguised as emergency | Timelock non-zero even on emergency path | Governance vote manipulation (bounded by quorum bar) |

## Alternatives rejected

**Operator emergency key for fast revocation.** Rejected. CON-003 forbids any privileged
operator role. An emergency key is a privileged operator role that could be used — or abused,
or legally compelled — beyond the intended emergency scope. The 7-day emergency-vote path
achieves near-equivalent speed without creating the capability.

**Instant revocation on governance vote.** Rejected. A zero timelock removes the false-alarm
veto window. If the vote was based on a mistaken or fabricated report of compromise, there is
no recovery path. A 7-day window allows correction without requiring a second "correction vote"
to race to completion.

**Single ordinary path only (30 days, no emergency variant).** Rejected. A 30-day wait during
an active key compromise with ongoing Sybil enrolment is operationally inadequate. The epoch
cap provides some throttling, but 30 days of unrestricted (within the cap) Sybil enrolment
from a major issuer class is a significant Sybil injection. 7 days is the minimum non-zero
window that maintains the false-alarm veto property.

**Overlap window shorter than 60 days.** Rejected. Standard eIDAS credential validity periods
are typically 1-5 years, but some citizens renew credentials within the year. A 30-day overlap
would block citizens who renewed their credential immediately before the rotation. 60 days
gives a comfortable margin. Sybil risk during the overlap is bounded by nullifier deduplication
(the same person cannot enrol twice regardless of which anchor their credential is signed by).

## Consequences

**Good**
- SC-13 is closed at design level: both an ordinary revocation path and a faster emergency
  variant are specified; both require a passed governance vote.
- SC-14 is closed at design level: the 60-day dual-anchor overlap window ensures a compliant
  rotation never blocks enrolment.
- Ruling 4 is preserved throughout: humans vote, code executes, no operator path exists.
- Enrolled credentials are untouched by a revocation vote unless a separate vote specifically
  addresses them; this is correct — a person enrolled under a legitimate anchor is not
  retroactively fraudulent because the anchor was later compromised.

**Accepted**
- The 7-day emergency revocation window is an accepted Sybil window. RISK-30 records this
  explicitly in Doc 13 ss6. The epoch cap and NFR-004 audit bound the damage.
- The ordinary 30-day revocation timelock means a compromise that goes undetected for 30 days
  can result in substantial Sybil enrolment before the revocation takes effect. This is also
  an accepted residual; the per-issuer epoch cap is the primary blast-radius limiter.
