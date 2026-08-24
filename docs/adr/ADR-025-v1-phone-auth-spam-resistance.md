# ADR-025 — v1 identity backing: phone-based SMS authentication and conventional spam-resistance layer

```
Status:        Accepted
Date:          2026-08-23
Owner:         Ravi Deshmukh — Principal Architect
Traces:        BR-003, BR-006, BR-012,
               FR-003 (PARTIAL in v1 per Doc 02 v2.8.0 §16), FR-058, FR-061,
               FR-071, FR-120, FR-125, FR-131, FR-132, FR-133,
               NFR-005, NFR-010, NFR-022,
               CON-002, CON-008,
               DES-095 (amended), DES-098, DES-099,
               ADR-002 (passkeys compose with phone auth in v1),
               ADR-024 (IEligibilityVerifier seam — v1 backing now named here)
Source:        Approver directive, Rathish, 2026-08-23 (Rulings 1 and 2);
               DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md;
               docs/02-requirements-srs.md v2.8.0 (FR-132, FR-133);
               docs/03-architecture-design-sdd.md v2.3.1 (DES-095, ADR-024)
```

---

## Context

ADR-024 designed the `IEligibilityVerifier` seam that decouples the application layer from the identity/personhood proof mechanism. The v1 backing was described as "conventional auth/DB" but not further specified. Two items remained open pending approver direction:

1. **v1 identity mechanism** — what does "conventional auth" concretely mean in v1? No specific mechanism had been decided.
2. **v1 spam resistance** — in the absence of v2's ZK nullifier uniqueness guarantee, how does v1 protect against mass fake-account creation?

The approver (Rathish, 2026-08-23; Rulings 1 and 2, DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md) has now decided both. This ADR records those decisions, their honest consequences, and the resulting design elements.

---

## (a) Decision: v1 IEligibilityVerifier backing is phone-based SMS verification

### The decision

The `IEligibilityVerifier` v1 backing (DES-095 amended) uses **phone-based SMS verification**. One account is permitted per verified phone number. Phone verification is the v1 identity mechanism behind the seam interface; v2 swaps in the ZK enrolment proof behind the same interface without any change above the seam.

### Why phone over email

**Rejected alternative — email verification:** Email is cheaper to operate and less exclusionary (email addresses are easier to obtain without a phone than vice versa). It is also near-zero cost to farm: a single person can generate thousands of email addresses with no meaningful friction. Email verification provides an extremely weak spam speed-bump and was rejected on this basis.

**Phone chosen:** In the Phase-1 pilot region (India), mobile-phone penetration is near-universal among the target citizen population. Obtaining a genuine SIM-card phone number requires a name-registered SIM (TRAI mandate, India) — this raises the practical cost of fake-account farming substantially over email. Phone verification is the better spam speed-bump in this deployment context.

### Critical honesty statement (FR-132 and Ruling 1 — non-negotiable)

**Phone verification is a spam speed-bump. It is NOT a proof of unique personhood.**

v1 explicitly does NOT claim one-person-one-vote. A determined bad actor with access to multiple SIM cards CAN create multiple accounts. The one-person-one-vote guarantee requires the v2 ZK enrolment proof (ADR-016, ADR-017, DES-095 v2 backing), which derives a deterministic nullifier from a government-eID stable identifier that is unique per person by construction.

The `IEligibilityVerifier.getProperties()` v1 backing MUST continue to return `{ onePersonOneVote: false, subpoenaResistant: false, unlinkable: false, anonymityFloor: false }`. The DES-098 honesty notice (FR-131) and the FR-132 self-declaration MUST carry the one-account-per-phone caveat explicitly. Any product material, README section, or UI copy that implies one-person-one-vote in v1 is a compliance failure against FR-131, FR-132, and Ruling 1.

### Seam contract is unchanged

The `IEligibilityVerifier` interface (DES-095, ADR-024) is unchanged by this backing choice. The method signatures, semantics, invariants, and `IS_INSECURE_MOCK()` contract are identical. Only the concrete v1 backing implementation changes: "conventional auth/DB account" is now specified as "phone-verified account (one per SMS-verified number)." The v2 swap behind the same seam remains the planned path.

---

## (b) DES-099 — v1 spam-resistance layer

### Design element

The v1 spam-resistance layer (DES-099) is a conventional fraud-detection service that sits in the enrolment service path. It does NOT sit in any governance-path data store; flag records are restricted-class operational data.

**Components:**

| Component | Purpose | Tech |
|-----------|---------|------|
| Phone-intelligence API | Classify the registering phone number: real mobile, eSIM, VoIP, virtual/cloud-farm number, recently recycled, blocked-carrier-MSISDN | Third-party phone-intelligence vendor (vendor TBD; Doc 13 assumption (a) partially resolved — mechanism decided, vendor open) |
| Velocity / device anti-fraud | Detect high-frequency registration patterns, device-fingerprint clustering, IP/ASN clustering, registration-attempt surge | Application-layer rate-limiting and device-signal checks; no persistent cross-session device ID stored outside the restricted audit log |

**Normative flag-don't-block semantics (FR-133, Ruling 2 — non-negotiable):**

- A suspicious classification MUST result in **rate-limiting or queue-slowing** the registration, NOT a hard block.
- A flagged number MUST NOT be permanently or silently denied registration.
- A flagged number MUST be offered a visible, first-class **false-positive dispute path** that a legitimate citizen using VoIP or eSIM can follow without being required to explain their phone-number choice.
- A governance action (petition endorsement, membership join, proposal vote) MUST NEVER be denied solely on a fraud flag — the flag is advisory, not adjudicating (FR-061 degrade-never-deny; FR-125/OI-19 rate-limiter-never-admission-condition; FR-020 absolute right to join).
- Flag events are **restricted-class data**: not queryable by members, not published to any public record, not written to any on-chain store, not accessible to governance queries. Stored only in the restricted operational audit log with the enrolment service.

**Design precedents this follows:**

| Precedent | Rule | Interaction |
|-----------|------|-------------|
| FR-061 | Degrade-never-deny: the system MUST degrade gracefully; it MUST NOT deny participation for non-eligibility reasons | DES-099 flags rate-limit; they never remove the right to register or participate |
| FR-125 / OI-19 ruling | Rate-limiter is never an admission condition; the fallback path is always available | VoIP flag triggers rate-limit, not admission block; dispute path is the fallback |
| FR-020 | Absolute right of any eligible person to join a party | A governance join action MUST NOT be hard-blocked on a DES-099 flag alone |
| NFR-010 / CON-002 / CON-008 | Data minimisation; no identity data on governance record | Flag records are restricted-class, never on governance-path stores |

---

## (c) Consequences accepted — complete and honest

### (c-i) Multi-phone multi-account: Sybil ceiling in v1 is the price of shipping before ZK

A determined bad actor with access to multiple registered SIM cards CAN create multiple accounts in v1. This is the accepted Sybil ceiling. The DES-099 spam layer raises the practical cost; it does not eliminate the theoretical ceiling. v1 explicitly does not guarantee one-person-one-vote (FR-132, H-15, T-06). The guarantee arrives with the v2 ZK swap. This is an accepted risk, recorded on the public record via H-15 and FR-131/FR-132, not hidden.

### (c-ii) Phone numbers at rest: identity data in v1, eliminated in v2 (FR-003 PARTIAL, T-07)

A verified phone number is identity data under any reasonable reading of FR-003 ("no identity data stored at rest"). v1 MUST store the verified phone number as the account credential. Doc 02 v2.8.0 reclassifies FR-003 from IN-v1 to PARTIAL: the credential document, biometric, DOB, and address are discarded after check; the phone number is retained in restricted-class credential storage (not on any public record, not in governance-path stores, enumerated in Doc 02 §7 carve-out per NFR-010). v2 eliminates this storage by construction: ZK circuit checks and discards the credential on-device; only the nullifier goes on-chain. The retained phone number is the v1 design trade-off; its restricted-class posture is the risk mitigation.

**Conflict T-07** (FR-003 PARTIAL vs phone-number storage) is recorded in §10.13.7 of Doc 03 and is AWAITING APPROVER CONFIRMATION per Doc 02 v2.8.0 §16.5.

### (c-iii) Third-party vendor dependencies: SMS provider and phone-intelligence API

v1 introduces two new third-party dependencies that do not exist in v2's design:

**SMS delivery provider:** Required to send verification codes. Introduces deliverability, cost, and availability risk. SMS delivery cost interacts with NFR-005 (median citizen action < USD 0.01) — the cost envelope for SMS delivery must be modelled in Doc 13 and must not violate NFR-005 at the planned pilot scale.

**Phone-intelligence API:** Required for DES-099 spam resistance. The enrolment phone number is transmitted to the vendor's API for scoring.

**Privacy consequence of the phone-intelligence call:** Sending the enrolment phone number to a third-party vendor is a data-minimisation tension with NFR-010 (data minimisation by construction) and CON-002 (no unnecessary data sharing). This is an honest residual: the spam-resistance benefit cannot be obtained without the phone number reaching the vendor.

**Mitigation posture (design-level):**
- Minimal payload to vendor: phone number only; no party context, no political context, no member name, no governance action attached to the scoring call.
- Vendor contract MUST include: no retention beyond the scoring call; no data resale; no use for profiling; explicit data-minimisation terms.
- The flag result is restricted-class and never sent back to the vendor.
- Vendor failure mode: DES-099 fails open (the enrolment proceeds; the spam-layer is advisory, not blocking).
- **Residual (recorded, not hidden):** The vendor receives the phone number. Even with contractual controls, this is a trust relationship with a third party. The residual is accepted for v1 and eliminated in v2 (ZK enrolment makes the spam layer unnecessary at the uniqueness level; it may be retained as defence-in-depth).

### (c-iv) SIM-swap and number-recycling attacks

A phone number can be taken over via SIM-swap (carrier social-engineering attack) or recycled by the carrier to a new customer. An attacker who acquires a number linked to an existing account gains access to that account.

**SIM-swap interaction with recovery:** This attack is the v1 analogue of the v2 post-registration compromise (RISK-30). The FR-058/FR-071 recovery designs (7-day delay, active-key veto) are designed for the v2 ZK nullifier context; their interaction with phone-number-based account recovery in v1 requires engineering decisions that are NOT made in this ADR. The recovery path for a phone-based account must be designed (DES owed) before the enrolment sprint.

**Number-recycling:** If a carrier reassigns a number to a new customer, the new customer could claim the prior customer's account via SMS verification. Rate-limiting stale-number re-verification and requiring confirmation of the original sign-up (secondary channel or security question where available) are design-level mitigations owed before build.

**Accepted residual:** Both attacks are real. v1 does not have the cryptographic account-binding guarantees of v2 (ADR-018, ADR-020). They are accepted as v1 scope limitations, disclosed in the honesty register.

### (c-v) SMS deliverability, cost, and NFR-005

SMS is not delivered to all phone numbers at all times: roaming failures, carrier filtering, and cost at scale are real. NFR-005 requires median citizen action < USD 0.01. SMS verification per registration adds a non-trivial cost. The engineer MUST model the SMS delivery cost and confirm it fits within the NFR-005 envelope at Phase-1 pilot scale before committing to the phone-auth implementation.

### (c-vi) Exclusion residual: no phone number → no v1 enrolment

A citizen with no phone number cannot enrol in v1. This is the v1 parallel to the ADR-016 Aadhaar exclusion (Phase 1: a person without Aadhaar cannot enrol in the pilot region). Both exclusions are accepted Phase-1 limitations, both are documented on the public record (TD-05 for Aadhaar; the same honest-record discipline applies here), and both are measured costs rather than hidden design assumptions. The non-document (and non-phone) enrolment path remains a Phase-3 matter per OI-03.

---

## (d) Charter/Guarded conflict-table extension: T-06 and T-07

These tensions were pre-registered in the decision record (DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §5) and in Doc 02 v2.8.0 §16.5 (H-15, H-16, T-06, T-07). This ADR provides the architectural analysis; the conflict table in Doc 03 §10.13.7 is the normative governance record.

### T-06 — Charter Rule 1 (one human, one vote) vs v1 phone-auth

| Element | Statement |
|---------|-----------|
| **Charter Rule 1** | One human, one vote — foundational to the platform's governance guarantee |
| **v1 reality** | Phone verification is a spam speed-bump; multiple accounts per person remain possible if a person holds multiple numbers; `getProperties().onePersonOneVote = false` |
| **v1 MUST NOT** | Claim one-person-one-vote in any product material, README, onboarding screen, or UI copy |
| **Honest disclosure mechanism** | FR-131 (DES-098 honesty notice); FR-132 self-declaration; H-15 in Doc 02 §16.4 |
| **v1 status** | **(ii) DEFERRED with honest disclosure** — v1 does not claim Rule 1; the guarantee arrives with v2 ZK enrolment |
| **Approver decision** | AWAITING CONFIRMATION: is the deferral-with-disclosure model for Charter Rule 1 acceptable in v1? |

### T-07 — FR-003 (no identity data at rest) vs phone-number storage

| Element | Statement |
|---------|-----------|
| **FR-003** | No identity data stored at rest (Must) |
| **v1 reality** | Verified phone number is stored as the v1 account credential; it is identity data; v1 cannot satisfy FR-003 as IN-v1; Doc 02 v2.8.0 reclassifies to PARTIAL |
| **Mitigation posture** | Phone number in restricted-class credential store only; not on public record; not in governance-path stores; NFR-010 carve-out enumerated in Doc 02 §7; vendor contract constraints (see §(c-iii) above) |
| **FR-133 interaction** | DES-099 rate-limiting may require retaining phone-number records for dispute resolution — deepening the FR-003 tension |
| **v1 status** | **(ii) DEFERRED / PARTIAL** — v1 stores phone number with restricted-class posture; v2 eliminates by construction (ZK enrolment; nullifier-only on-chain) |
| **Approver decision** | AWAITING CONFIRMATION: is the PARTIAL classification with restricted-class posture for FR-003 acceptable in v1? Pre-registered in Doc 02 v2.8.0 §16.5 (T-07) |

---

## Consequences

**Good**
- Phone-based SMS auth is the concrete v1 identity backing behind the DES-095 seam — the seam interface is unchanged; the v2 ZK swap path is unaffected.
- DES-099 raises the practical Sybil ceiling in v1 without blocking legitimate citizens; flag-don't-block preserves FR-061/FR-120/FR-125 compliance by design.
- All consequences are recorded honestly and on the public record; no gap is hidden.
- The `IS_INSECURE_MOCK()` gate is not affected — phone auth is a genuine conventional implementation returning false, not a mock.

**Bad / accepted risk**
- Multi-phone multi-account Sybil ceiling is a real gap (c-i); accepted for v1.
- Phone number at rest is identity data — FR-003 cannot be IN-v1 (c-ii, T-07); restricted-class posture is the mitigation.
- Two new third-party vendor dependencies with privacy residuals (c-iii); vendor contract constraints and minimal-payload discipline are the mitigations.
- SIM-swap and number-recycling attacks exist (c-iv); recovery design is owed before the enrolment sprint.
- SMS cost must fit NFR-005 (c-v); engineer must verify before build.
- No-phone exclusion is the v1 cost of shipping before ZK (c-vi); accepted and disclosed.

---

## Alternatives rejected

**Email verification as v1 identity mechanism.** Rejected. Near-zero cost to farm; far weaker spam speed-bump than phone in the Phase-1 deployment context; rejected on approver directive (Ruling 1).

**Hard-block on VoIP/virtual-number classification.** Rejected. Legitimate citizens use VoIP and eSIMs; wrongly excluding a citizen from a political platform is a serious failure; FR-061 degrade-never-deny and FR-125/OI-19 rate-limiter-never-admission-condition prohibit it by design. Flag-don't-block (Ruling 2) is the required posture.

**Deploy full on-chain governance contracts with phone-auth mapped onto call paths.** Already rejected by ADR-024 §(b) for three reasons (CI promotion gate, schedule, FR-108). This ADR does not reopen that decision.

**No spam resistance in v1 (ship phone auth without DES-099).** Rejected. Without the phone-intelligence layer, a cloud-farm operator can register thousands of virtual numbers and create a corresponding number of accounts with no meaningful friction beyond the per-SMS cost. The spam speed-bump is an approver requirement (Ruling 2).
