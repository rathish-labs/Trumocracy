# ADR-018 — Nullifier-collision recovery flow: 7-day delay, active-key veto, voting bar

```
Status:        Accepted
Date:          2026-08-10
Owner:         Ravi Deshmukh — Principal Architect
Traces:        BR-006, BR-007, BR-009, BR-012, FR-071, FR-072, RISK-22, RISK-23, RISK-24
Source:        CR-v1.1.0 Change 7; GATE1-DECISION-2026-08-09.md
```

## Context

FR-071 requires that when an enrolment attempt produces a nullifier that already exists on the
verifiable record, the system routes the user into a **recovery flow** rather than rejecting
them as a duplicate. This is the legitimate path for a person who has lost their key material
but still holds their original credential — they can re-derive the same nullifier from the
same credential.

The problem is that the system cannot distinguish this legitimate case from an attacker who has
stolen the credential and is initiating recovery to seize the victim's party membership, voting
rights, and tenure (RISK-22).

FR-072 adds the guards: a seven-day delay, an active-key veto, and a voting bar during the
delay.

This ADR records the state machine, the security properties, and the threat analysis.

## Decision

### Recovery state machine

```
[ACTIVE]
    │
    ├─ enrolment attempt with matching nullifier
    │
    ▼
[RECOVERY_PENDING] ─────── notification sent to registered channel at initiation
    │                                    │
    │  7-day delay                        │  veto window ≥ 7 days
    │                                    │
    ├─ active key submits veto ──────────▶[RECOVERY_ABORTED]
    │   (RecoveryVeto on-chain)
    │
    ├─ 7 days elapse without veto
    │
    ▼
[KEY_ROTATION_COMPLETE]
    │  membership, tenure and governance history survive intact
    │  no second identity is created
    ▼
[ACTIVE] (new key)
```

### Guards enforced by the design (FR-072)

1. **Seven-day delay.** Key rotation does not complete until at least 7 × 86,400 seconds after
   the recovery initiation timestamp is recorded on-chain. No actor, including Trumocracy, can
   shorten this window.

2. **Active-key veto.** The current active key MUST be able to submit a `RecoveryVeto` signal
   at any time during the delay. The veto window MUST be at least equal to the full seven-day
   delay. The veto is submitted as an on-chain transaction signed by the active key.

3. **Voting bar.** The recovering credential (identified by the matching nullifier) is barred
   from casting any vote during the delay. The `vote()` entrypoint MUST check
   `isInRecovery(enrolmentNullifier)` and reject if true. Existing scope nullifiers for live
   ballots remain associated with the active key, which can still vote normally.

4. **Notification.** On recovery initiation, a notification is sent to the registered channel.
   The notification contains the initiation timestamp, the recovery-completion deadline, and
   clear instructions for vetoing.

5. **Identity preservation.** The recovery creates no second identity. The enrolment nullifier
   is unchanged. Membership, tenure clocks, and governance history survive the key rotation
   intact (FR-071).

### Secondary veto path (RISK-23 mitigation)

An attacker who gains access to the victim's credential may also attempt to suppress the veto
notification by controlling the victim's registered notification channel (RISK-23 — veto
suppression). Where feasible, the veto MUST be submittable independently of the notification
channel — specifically, by submitting a signed `RecoveryVeto` transaction directly to the
chain from any device that holds the active key. The active-key veto is therefore:

- **Primary path:** notification → citizen clicks veto link → on-chain transaction.
- **Independent path:** citizen submits `RecoveryVeto(enrolmentNullifier, proof)` from any
  device holding the active key, without requiring any message from the notification channel.

The independent path means channel suppression alone cannot prevent a veto, as long as the
active key's device is accessible. Complete device + channel compromise (the attacker has the
physical device AND controls notifications) is not defended beyond this point; that attack
surface is outside the protocol's threat boundary.

### Ballot interaction during recovery (RISK-24 mitigation)

A recovery initiated during an active ballot window creates the following state:

- The recovering credential is `isInRecovery = true` and cannot call `vote()`.
- The active key is `isInRecovery = false` and CAN still call `vote()` (including re-voting to
  change a previous ballot choice, per FR-032).
- Scope nullifiers for live ballots are not pre-empted by the recovery; they remain attached
  to the active key's capacity to act.
- On key rotation completion (`[KEY_ROTATION_COMPLETE]`), scope nullifiers transfer to the new
  key. Any ballot that closed during the recovery period used the ballots cast by the active
  key — these are final and unaffected.
- FR-032 ("last ballot counts") applies to the active key during the delay. An attacker who
  holds the recovering credential cannot cast any new ballot during the delay and therefore
  cannot displace the active key's last ballot.

### On-chain data model additions

```
PersonhoodRegistry (additions)
  recoveries       enrolmentNullifier → {
                     initiatedAt:    uint64,  // block.timestamp at initiation
                     completesAt:    uint64,  // initiatedAt + RECOVERY_DELAY
                     newKey:         bytes32, // the new passkey/account to bind
                     state:          enum { PENDING, COMPLETE, ABORTED }
                   }
  isInRecovery     enrolmentNullifier → bool  // true when state == PENDING
```

`RECOVERY_DELAY = 7 × 86400 seconds` is a protocol constant, not a configurable parameter.

## Security properties

| Property | Mechanism | Residual |
|---|---|---|
| Attacker cannot instantly seize an account | 7-day delay | None — a patient attacker with a stolen credential must wait 7 days |
| Legitimate holder can block the attacker | Active-key veto on-chain | Requires active-key device to be accessible |
| Channel-suppression attack is partially mitigated | Independent on-chain veto path | Device theft + channel suppression defeats both paths |
| Attacker cannot cast votes during recovery | `isInRecovery` check at `vote()` | None — vote barring is absolute during delay |
| Recovery cannot create duplicate voting power | Identity preservation: nullifier unchanged, no second enrolment | None |
| Fraudulent recovery rate target | ≤ 0.01% of recoveries (NFR-016) | Enforced by delay + veto; measurable by SRE |

## Threat analysis

**RISK-22 (stolen-credential takeover):** The 7-day delay gives a legitimate holder 7 days to
notice the recovery notification and veto it. At normal notification delivery rates, this is
sufficient. The guard fails only if the notification is suppressed (RISK-23) or the legitimate
holder is incapacitated for 7+ days.

**RISK-23 (veto suppression):** The independent on-chain veto path reduces the suppression
attack to requiring both channel control AND device theft (or that the legitimate holder is
incapacitated). This is an accepted residual.

**RISK-24 (recovery raced against a live ballot):** The voting bar (`isInRecovery`) prevents
the attacker from using the recovering credential to cast votes during the delay. The active
key can still vote. No double-counting is possible: the enrolment nullifier is unique, and
ballot-scope nullifiers are derived from the active key's action, not from the recovery flow.

## Consequences

**Good**
- A person who loses key material but retains their credential can recover without platform
  cooperation (the recovery circuit re-derives the same nullifier).
- The delay + veto gives a legitimate holder a meaningful window to block an attacker without
  requiring any real-time detection capability.
- Membership and tenure survive recovery — no governance rights are lost by a legitimate
  recovery.

**Accepted risk**
- **7-day delay is a usability burden for legitimate recovery.** A citizen who has genuinely
  lost both their device and backup access must wait 7 days. This is the explicit trade-off
  for the security property. NFR-016 (≥ 99% of legitimate recoveries succeed within 14 days)
  accommodates the delay.
- **Complete device + channel compromise is not defended.** This is outside the protocol's
  threat boundary. The protocol cannot defend against an attacker who physically controls both
  the victim's registered device and their notification channel simultaneously.

## Alternatives rejected

**No delay (instant key rotation on re-enrolment).** Rejected. Would trivially enable
stolen-credential account takeover.

**Recovery through Trumocracy support (manual verification).** Rejected. CON-003 forbids any
privileged operator path. A manual support path is a privileged operator path in practice.

**Shorter delay (e.g., 24 hours).** Rejected. Notification delivery and the practical time
for a citizen to notice and act is highly variable in low-connectivity environments. Seven days
is calibrated to give a citizen in a 2G-class network with intermittent connectivity a
realistic chance of vetoing.

**No voting bar (allow recovering credential to vote while delay is active).** Rejected.
Without the bar, the attacker could use RISK-24 (recovery raced against a live ballot) to
cast votes during the overlap window before the active key's last ballot. The bar eliminates
this attack class entirely.
