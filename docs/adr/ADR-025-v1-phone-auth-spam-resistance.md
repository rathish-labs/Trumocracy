# ADR-025 — v1 identity backing: phone-based SMS authentication and conventional spam-resistance layer

```
Status:        Accepted
Date:          2026-08-23
Owner:         Ravi Deshmukh — Principal Architect
Traces:        BR-003, BR-006, BR-012,
               FR-003 (PARTIAL in v1 — reshaped by 2026-08-23 amendment: phone_hash +
               subject_id_hash retained; document image, name, DOB, document number
               DISCARDED; CON-015 governs legal classification of retained hashes),
               FR-058, FR-061, FR-071, FR-120, FR-125, FR-131,
               FR-132 (amended by ruling 2026-08-23: government-ID document check
               co-required alongside phone SMS; verify-and-discard retention rule;
               hashed phone HMAC-SHA-256/KMS-pepper specified; MUST NOT claim unique
               personhood — check confirms real person, not unique person),
               FR-133,
               NFR-005, NFR-010, NFR-016, NFR-022,
               CON-002, CON-008, CON-015,
               DES-095 (amended), DES-098, DES-099, DES-100 (minted 2026-08-23),
               ADR-002 (passkeys compose with phone auth in v1),
               ADR-024 (IEligibilityVerifier seam — v1 backing now named here)
Source:        Approver directive, Rathish, 2026-08-23 (Rulings 1 and 2);
               DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md;
               docs/02-requirements-srs.md v2.8.0 (FR-132, FR-133);
               docs/03-architecture-design-sdd.md v2.3.1 (DES-095, ADR-024);
               [AMENDED 2026-08-23] Approver directive, Rathish, 2026-08-23;
               DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md (government-ID
               ruling, verify-and-discard retention, hashed phone, Q-1/Q-2/Q-3
               architect answers, five confirmations T-01..T-05, FR-030/031/082/086,
               NFR-009 v1 re-reading, 2027-05-14); docs/02-requirements-srs.md v2.10.0
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

**[UNCHANGED — 2026-08-24]** This exclusion is LEFT UNCHANGED by the 2026-08-24 ruling (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md). Phone verification remains the account-creation requirement for all tiers. The ruling that reshaped the government-ID exclusion (§(c-viii) below) does NOT touch the phone-number exclusion — these are two distinct exclusions operating at different layers: (c-vi) bars account creation entirely (no phone = no account, no open-tier access); §(c-viii) bars only COUNTING actions (no government ID = no COUNTING-tier eligibility, but open-tier access via phone verification alone remains available). A reader MUST NOT conflate the two: the ruling that opened the platform to undocumented people did so at the open-tier level, where phone verification is the only requirement; it left the phone-verification gate on account creation intact.

---

## (d) Charter/Guarded conflict-table extension: T-06 and T-07

These tensions were pre-registered in the decision record (DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §5) and in Doc 02 v2.8.0 §16.5 (H-15, H-16, T-06, T-07). This ADR provides the architectural analysis; the conflict table in Doc 03 §10.13.7 is the normative governance record.

### T-06 — Charter Rule 1 (one human, one vote) vs v1 phone-auth

| Element | Statement |
|---------|-----------|
| **Charter Rule 1** | One human, one vote — foundational to the platform's governance guarantee |
| **v1 reality** | Phone verification is a spam speed-bump; government-ID check + `subject_id_hash` deduplication raises the Sybil barrier but does not close it; multiple legitimate IDs still allow limited multi-accounting; `getProperties().onePersonOneVote = false` |
| **v1 MUST NOT** | Claim one-person-one-vote in any product material, README, onboarding screen, or UI copy |
| **Honest disclosure mechanism** | FR-131 (DES-098 honesty notice); FR-132 §(d) self-declaration; H-15 in Doc 02 §16.4 (updated v2.12.0) |
| **v1 status** | **(ii) DEFERRED with honest disclosure — IMPROVED (2026-08-23)** — government-ID check + `subject_id_hash` same-document deduplication improves Charter Rule 1 enforcement over phone-alone; multiple legitimate IDs gap remains. |
| **Approver decision** | **ACCEPTED — DEFERRED WITH DISCLOSURE (approver, Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3).** Same-document deduplication improves enforcement; multiple-IDs vector not closed. `getProperties().onePersonOneVote = false` unchanged. See §10.13.7 T-06 row (Doc 03 v2.6.0). |

### T-07 — FR-003 (no identity data at rest) vs phone-number storage

| Element | Statement |
|---------|-----------|
| **FR-003** | No identity data stored at rest (Must) |
| **v1 reality** | Verified phone number is stored as the v1 account credential; it is identity data; v1 cannot satisfy FR-003 as IN-v1; Doc 02 v2.8.0 reclassifies to PARTIAL |
| **Mitigation posture** | Phone number in restricted-class credential store only; not on public record; not in governance-path stores; NFR-010 carve-out enumerated in Doc 02 §7; vendor contract constraints (see §(c-iii) above) |
| **FR-133 interaction** | DES-099 rate-limiting may require retaining phone-number records for dispute resolution — deepening the FR-003 tension |
| **v1 status** | **(ii) DEFERRED / PARTIAL** — v1 stores phone number with restricted-class posture; v2 eliminates by construction (ZK enrolment; nullifier-only on-chain) |
| **Approver decision** | **RESHAPED — PENDING CON-015 (unchanged from 2026-08-23; reaffirmed 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.4).** Legal classification of `phone_hash` and `subject_id_hash` as personal data under India DPDP and GDPR governs; CON-015 legal opinion MUST be in hand ≥ 8 weeks before Gate 2. No enrolment sprint begins without CON-015 cleared. See §10.13.7 T-07 row (Doc 03 v2.6.0). |

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

---

## [AMENDMENT — 2026-08-23] Government-ID document check, verify-and-discard retention, and Q-1/Q-2/Q-3 answers

**Approver directive:** Rathish, 2026-08-23.
**Source:** DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §2–§3.
**Effect:** This amendment expands the v1 identity mechanism from phone-alone to phone + government-ID document check (verify-and-discard). It answers the three architect questions (Q-1, Q-2, Q-3) directed by the approver, reshapes consequences (c-i) and (c-ii), adds consequence (c-vii) for the ID-verification vendor, extends the conflict table with T-08, and resolves the FR-004 plurality question. Existing sections (a)–(d) are unchanged; this amendment adds §(e).

---

### (e) Decision: v1 identity verification expands to phone + government-ID document check

#### The ruling — verbatim-in-substance

> v1 uses conventional consumer-app identity verification — the model dating apps use: **phone (SMS) PLUS a government-ID document check at signup** to confirm a real, legal-age person. This is a v1 anti-fraud / anti-Sybil layer, NOT the v2 anonymity guarantee.
>
> The government ID is verified (on-device or via a provider) to produce ONLY a "verified adult, region X" flag. The platform MUST NOT store the identity document itself or any reversible copy of it. **Keep the result, discard the source.**
>
> The phone number is stored **HASHED (one-way)**, sufficient to enforce one-account-per-number, never as reversible plaintext.
>
> v1 is "real-person verified, not anonymous"; v2 is "unique person proven without the platform ever seeing identity."

The full engineering specification is in DES-100 (Doc 03 §10.13.9). This section records the architectural rationale and consequences.

#### Q-1 — What does the ID-verification provider actually return, and what fields does the platform store?

A third-party ID-verification provider (vendor TBD; to be listed in Doc 13 as DEP-new) receives the document image (front/back) and optionally a selfie for face match, processes it, and returns a structured JSON response.

**Stored fields (allowlist — only these fields MAY be persisted; everything else is discarded):**

| Field | Derivation | Purpose |
|---|---|---|
| `id_verified_flag` | From provider `status: APPROVED` | Gate: true iff age + region + document authentic |
| `age_verified` | From provider `checks.age_verified` | Confirms ≥ 18 at signup |
| `issuing_region` | From provider `checks.issuing_country` (ISO 3166-1 alpha-2) | Assigns citizen to correct governance region |
| `subject_id_hash` | `HMAC-SHA-256(provider_subject_id, pepper_id)` | Same-document deduplication (see below) |
| `phone_hash` | `HMAC-SHA-256(E.164-normalized(phone), pepper_phone)` | One-account-per-number enforcement |
| `verified_at` | ISO-8601 timestamp | Compliance audit trail |

**Discarded fields (denylist — MUST NEVER reach any persistence layer, log, or analytics pipeline):**
document images, biometric templates, selfie frames, `name`, `date_of_birth`, `document_number`, `expiry_date`, `verification_id` (ephemeral session handle).

**The verify-and-discard-vs-uniqueness tension (recorded honestly):**
Storing ONLY the boolean `id_verified_flag` satisfies verify-and-discard in the strictest sense but allows the same government ID to be re-presented from a different phone number to create a second verified account. The `subject_id_hash` resolves this: modern providers issue a stable `subject_id` pseudonymous token for a given individual — re-verification of the same person yields the same `subject_id`, which hashes to the same `subject_id_hash`. On account creation the enrolment service checks for an existing matching `subject_id_hash` → if found, rejects as duplicate document. **Recommendation: retain `subject_id_hash` for best Sybil resistance within the verify-and-discard constraint.**

Honest consequence: `subject_id_hash` is a derived identifier from the provider's processing of biometric/document data. It is retained in restricted-class credential store. Whether it constitutes "personal data" under India DPDP or GDPR is a legal question routed to CON-015 (see Q-3 below). Its retention deepens the FR-003 PARTIAL surface; T-07 is reshaped accordingly.

**Alignment with Doc 01 §E1:** "We do not keep your identity documents or biometric templates — they are checked and discarded, never stored by us." The allowlist DELIVERS this promise: no images, no biometrics, no document number, no name or DOB are stored at any layer. The promise holds ONLY IF the vendor contract includes a no-retention clause for document images and biometric templates on the provider's side — this is a vendor-contract requirement, not just a platform-side constraint.

#### Q-2 — Hashed phone HMAC design and brute-force residual

**Design:** `phone_hash = HMAC-SHA-256(E.164-normalized(phone_number), pepper_phone)` where `pepper_phone` is a 32-byte randomly generated secret key in KMS/HSM — it MUST NOT reside in the same data store as the hashes and MUST NOT be loaded into application memory in raw form.

**Why HMAC with KMS pepper, not bcrypt/Argon2id:**
The one-account-per-number check requires deterministic lookup (`SELECT WHERE phone_hash = compute(input)`). Slow KDFs (bcrypt, Argon2id) use per-record random salts — they are non-deterministic and unsuitable for deduplication queries without degrading enrolment-service performance to ~100 ms+ per check at scale. HMAC-SHA-256 with a KMS-held pepper is the correct design for deterministic, brute-force-resistant duplicate detection.

**Brute-force residual (stated precisely):**
- Attacker with database dump only (no pepper): computationally infeasible — brute force is blocked without the key. Security holds as long as the pepper is uncompromised.
- Attacker with both the database dump AND the pepper: the Indian mobile number space is ~4 × 10⁹ possible numbers (10-digit numbers starting 6–9), ~1.1 billion active. Exhaustive precomputation of HMAC-SHA-256 over this space takes hours on commodity GPU hardware. **Phone numbers CAN be recovered if both the DB dump and the pepper are compromised simultaneously. This is the accepted residual for any HMAC scheme.**
- Insider with simultaneous KMS + DB access: can reconstruct all phone numbers. Dual-authorization for KMS access is the primary mitigation.

`subject_id_hash` uses the same HMAC pattern with a separate pepper (`pepper_id`). Two peppers are maintained separately in KMS — never combined.

**Operational MUST requirements (both peppers):**
1. KMS/HSM stored; HMAC computation occurs via KMS API; raw key bytes MUST NOT be loaded into application memory in production.
2. Dual-authorization access policy on the KMS keys (2-person integrity rule).
3. Pepper rotation schedule defined before production launch; re-hashing window during rotation holds access to both old and new peppers simultaneously.
4. No plaintext phone number written to application logs, error traces, analytics pipelines, or debugging outputs. Log-scrubbing MUST be enforced at the application layer.
5. Hash lookup endpoint MUST be rate-limited at the application layer to prevent online enumeration.

#### Q-3 — Legal-review routing: architect-decidable vs CON-015/GDPR counsel

**Architect-decidable (confirmed in this amendment and in DES-100):**
- Which fields to discard at the application layer — confirmed in the denylist above.
- Which fields to store — allowlist above; privacy-by-design rationale is the architectural basis.
- HMAC-SHA-256 with KMS-held pepper — a security-design decision; no legal dependency.
- Restriction of all retained fields to restricted-class credential store only — never on governance-path stores, never on-chain, never in public records.
- Provider fail-closed mode: if provider is unavailable, enrolment FAILS; no permit-through.

**MUST route to CON-015 and/or GDPR/DPDP counsel (not architect-decidable):**

| Retention question | Legal domain | Priority |
|---|---|---|
| Is ephemeral provider-side processing of the government-ID image compliant with India DPDP Act 2023 consent/purpose-limitation provisions? Does verify-and-discard satisfy DPDP "legitimate use"? | CON-015 (India DPDP + Aadhaar Act 2016) | **Critical path — must clear before implementation** |
| If the government ID is an Aadhaar card: does document-check verification by a non-UIDAI entity constitute unauthorized authentication under the Aadhaar Act 2016 and Aadhaar Authentication Regulations? | CON-015 — this is the specific area it covers | **Critical path** |
| Is `phone_hash` personal data under India DPDP and GDPR (re-identifiable with the KMS key)? | CON-015 + EU GDPR counsel | High |
| Is `subject_id_hash` personal data under India DPDP and GDPR (derived from biometric/document processing)? | CON-015 + EU GDPR counsel | High |
| Retention period for `id_verified_flag`, `phone_hash`, `subject_id_hash` after account deletion (storage-limitation principle) | CON-015 | High |
| Cross-border data transfer: if the ID-verification provider processes documents outside India, do DPDP Chapter V transfer restrictions apply? | CON-015 + provider contract | High |
| Erasure rights: if a user exercises a DPDP/GDPR right to erasure, can `phone_hash` and `subject_id_hash` be deleted without breaking the audit chain? (On-chain records do not contain these fields — they are restricted-class — so audit integrity is maintained; legal confirmation required.) | CON-015 | Medium |
| EU GDPR Article 9: political-platform context may mean even restricted-class `phone_hash` linked to party membership constitutes Article 9 (politically sensitive) data. Out of scope for Phase-1 India pilot; Gate-2 blocker for any EU expansion. | EU GDPR counsel | Medium (Phase 1) / High (Phase 2+) |

**CON-015 is now more load-bearing** than at its original minting: this ruling adds government-ID document verification to the India/Aadhaar pilot, which is precisely the legally sensitive area CON-015 covers. The CON-015 legal opinion MUST be in hand ≥ 8 weeks before Gate 2. **No enrolment sprint begins without CON-015 cleared for the government-ID check path.**

#### FR-004 plurality question — architect-resolved

**Question (from DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §5(ii)):** Does the v1 ID-verification provider fall under FR-004's ≥2 independent attestors requirement, and how does that interact with OI-20 (Phase-1 single-rail) and FR-129 (Charter-layer permanence guard)?

**Architect ruling:** The v1 ID-verification vendor is an application-layer component called at account signup. It does NOT issue ZK-verifiable personhood credentials; it does NOT plug into the `PersonhoodRegistry`. FR-004's ≥2 independent attestors requirement is defined in ADR-003/ADR-016/ADR-021 for the v2 protocol-level attestor stack (entities that issue credentials for the `PersonhoodRegistry`). FR-004 is satisfied at the architecture level by OI-20's resolution (ADR-021). It does NOT literally apply to the v1 ID-verification vendor.

**However, the intent behind FR-004 — attestor diversity, concentration risk, compulsion resistance — applies in spirit.** A single vendor seeing every signup is a concentration risk: if the vendor is compelled by a state, compromised, or goes offline, every v1 enrolment is affected. This is the same compulsion-risk motivation recorded in Doc 01 §E3 and ADR-003.

**Resolution:** Single-vendor ID-check is an accepted Phase-1 dated limitation — NOT a permanent architecture choice. This mirrors OI-20 reasoning for Phase-1 single-rail Aadhaar. FR-129 (Charter-layer guard) prevents entrenchment of single-vendor operation at the platform-permanence level. This concentration risk is recorded as T-08 in the conflict table (Doc 03 §10.13.7) and as a design debt item.

#### Updated consequences (amendment additions)

**Amended consequence (c-i) — Sybil ceiling improved but not closed:**
Government-ID document check raises the practical Sybil barrier compared to phone-alone: a bad actor now needs both a new SIM card AND a new (or stolen) government ID per fake account. `subject_id_hash` same-document deduplication prevents same-document-different-phone reuse. The Sybil ceiling remains: one person with multiple government IDs (rare but possible) can still create multiple accounts. `getProperties().onePersonOneVote = false` is unchanged. v1 is "real-person verified, not unique-person guaranteed."

**Amended consequence (c-ii) — FR-003 PARTIAL posture reshaped:**
v1 now retains `phone_hash` (HMAC-SHA-256, not plaintext) + `subject_id_hash` (HMAC-SHA-256, not the provider's raw token) + `id_verified_flag` + `age_verified` + `issuing_region` + `verified_at`. No PII fields (name, DOB, document number, images) are stored at any layer. Hashed phone improves the FR-003 PARTIAL position vs plaintext retention; `subject_id_hash` adds a new derived identifier that deepens the retained surface. Legal classification of the hashes as personal data under India DPDP and GDPR is routed to CON-015 (Q-3 answer).

**New consequence (c-vii) — ID-verification vendor dependency:**
v1 now has a third new third-party dependency (beyond SMS delivery and phone-intelligence API): a government-ID document verification provider. Vendor TBD (to be listed in Doc 13 as DEP-new). Privacy consequence: the vendor receives document images, which is a materially deeper data exposure than the phone number transmitted to the phone-intelligence API. Mitigation posture: (a) vendor contract MUST include verify-and-discard terms — no retention of document images or biometric templates; (b) no-resale, no-profiling clauses; (c) cross-border transfer compliance per CON-015; (d) vendor failure mode is fail-closed — if the vendor is unavailable, enrolment fails (not permit-through). Residual: the vendor processes the document. Even with contractual controls, this is a deeper trust relationship than the phone-intelligence call. Accepted for v1; eliminated in v2 (ZK enrolment — no document reaches any external party).

#### (c-viii) Exclusion residual: no accepted government-ID document → no v1 COUNTING actions

**[AMENDED — 2026-08-24; see full amendment block below. The pre-amendment heading was "no accepted government-ID document → no v1 enrolment". That scoping was wrong: the approver has ruled the government-ID check gates the COUNTING tier, never the platform. The corrected residual is recorded here; the pre-amendment text is preserved below in strikethrough notation for the public record.]**

**Corrected residual (2026-08-24):** A citizen who cannot present an accepted government-ID document **CAN** create an account and access the platform for open-tier participation (reading, following, watching, discussing, supporting, organising) with phone verification alone (FR-122, FR-020). What they **cannot** do in v1 is take COUNTING actions: contributing to a party's official strength number, voting in a binding decision, or standing as a candidate (FR-123). This is the COUNTING-tier exclusion — not a platform exclusion.

**Why this still matters beyond an ordinary operational limitation.** Trumocracy's whole premise is that no gatekeeper can deny political participation (BR-003, FR-020). Under the corrected scoping, the platform is open to all — the absolute right to join is preserved (FR-020 intact and absolute). What the government-ID gate does is create a permanent non-COUNTING class: a citizen without accepted ID can join, organise, discuss, and endorse, but cannot have their voice counted in binding decisions or official strength numbers. The populations most likely to lack accepted government-issued ID — migrants, people in poverty, youth below document-issuance age, and others already marginalised from formal institutions — disproportionately fall into this non-COUNTING class. This is a real, sharp limitation on the platform's equity promise. It is accepted as a Phase-1 limitation, not hidden.

**BR-003 / FR-020 — RESOLVED (approver, Rathish, 2026-08-24):** The prior conflict between the government-ID requirement and BR-003/FR-020's absolute joining right (which was AWAITING APPROVER CONFIRMATION in Doc 02 v2.11.0 and in the previous version of this section) is **RESOLVED**: the government-ID check does NOT gate joining (FR-020 intact and absolute); it gates COUNTING-tier eligibility only. H-19 in Doc 02 v2.12.0 is amended to reflect this.

**Honesty register (corrected):** Doc 02 v2.12.0 **H-19** (amended) records this exclusion: "In v1, a person without an accepted government-ID document cannot take COUNTING actions (contribute to official strength, vote in binding decisions, stand as a candidate). Open-tier participation (FR-122: reading, following, watching, discussing, supporting, organising) remains available with phone verification alone." The DES-098 honesty notice (Doc 03 §10.13.6 — including the new FR-131 clause (d) disclosure at the COUNTING-action gate) and FR-131 are the disclosure mechanisms.

**v2 path:** ZK enrolment on a wider attestor class (ADR-003/ADR-016) is designed to reduce this exclusion over time. Phase-1 single-rail (Aadhaar/OVD) already carries a known exclusion (ADR-016 item (c) — no Aadhaar = no COUNTING nullifier in the ZK path); the v1 government-ID-document check is the conventional parallel. The exclusion is an accepted Phase-1 limitation, not a permanent architecture choice. The no-document enrolment path remains a Phase-3 matter (OI-03).

**Seam call-site placement (2026-08-24):** The IEligibilityVerifier seam (DES-095) is invoked at the COUNTING-action call sites, not at account creation or party-join. The government-ID check (DES-100) is the v1 backing for `verifyEligibility()` at those call sites. This placement is identical for v1 and v2 — see Doc 03 §10.13.2 normative call-site placement note.

**[Pre-amendment text — superseded 2026-08-24; preserved for the public record:]** ~~A citizen who cannot present an accepted government-ID document at signup cannot enrol in v1. … The conflict with BR-003/FR-020 is AWAITING APPROVER CONFIRMATION.~~ The pre-amendment text described the document check as gating enrolment in the platform. That scoping is wrong and is superseded by the 2026-08-24 ruling. The conflict with BR-003/FR-020 is now RESOLVED.

---

#### Updated conflict-table analysis

**T-06 (reshaped — now ACCEPTED):** Government-ID document check + `subject_id_hash` same-document deduplication raises the Sybil barrier over phone-alone. Same-document-different-phone is now detected. Same-person-multiple-IDs is not prevented. `getProperties().onePersonOneVote = false` is unchanged. v1 MUST NOT claim one-person-one-vote or unique personhood — the check confirms real person, not unique person. **T-06 ACCEPTED — DEFERRED WITH DISCLOSURE (approver, Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3). See §(d) T-06 row (above) and §10.13.7 T-06 row (Doc 03 v2.6.0).**

**T-07 (reshaped):** Stored surface is now `phone_hash` + `subject_id_hash` + `id_verified_flag` + `age_verified` + `issuing_region` + `verified_at` — no PII fields. Hashed phone improves FR-003 PARTIAL position vs plaintext. `subject_id_hash` adds a derived identifier that deepens the retained surface slightly. Legal classification routed to CON-015. See §10.13.7 T-07 row.

**T-08 (new):** Single-vendor ID-verification concentration risk vs FR-004 plurality intent — see FR-004 plurality question answer above and §10.13.7 T-08 row.

---

## [AMENDMENT — 2026-08-24] Government-ID check gates COUNTING, never joining

**Approver directive:** Rathish, 2026-08-24.
**Source:** DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §2–§5.
**Effect:** This amendment corrects the call-site placement of the government-ID eligibility gate, reshapes §(c-viii) from a platform-exclusion to a COUNTING-tier-exclusion, resolves the BR-003/FR-020 conflict (previously AWAITING APPROVER CONFIRMATION), confirms T-06 as ACCEPTED — DEFERRED WITH DISCLOSURE, and reaffirms T-07 as PENDING CON-015. Existing sections (a)–(e) are amended in place; this block records the governing ruling and the architectural mirror it establishes.

### The ruling — verbatim-in-substance

> RULING: the government-ID check gates the COUNTING tier, never joining.
> - Joining stays an absolute right (BR-003/FR-020 holds, unchanged): anyone may create an account, join a party, read, discuss, support and organise with phone verification alone.
> - Government-ID verification is the v1 conventional mechanism to become a COUNTING member — required only for a vote to count toward binding decisions or official party strength, and to stand as a candidate. This is the same verification-gates-counting rule already established for the ZK path; the ID check is simply its v1 conventional backing, behind the same IEligibilityVerifier interface.
> - An undocumented person is therefore NOT excluded from the platform — they participate fully at the open/unverified tier (FR-122), exactly as any phone-only participant does. Update honesty item H-19 and the BR-003/FR-020 contradiction row: the exclusion is from vote-COUNTING, not from membership.
> - Record that this deliberately mirrors the v2 design (verification gates counting, not joining), so v1 and v2 share the same participation model with different verification backings.

### Seam call-site placement

The `IEligibilityVerifier` seam (DES-095) MUST be invoked at the three FR-123 COUNTING-action call sites: (a) contributing to a party's official strength number; (b) admission to a binding ballot; (c) candidacy nomination. It MUST NOT be called as a precondition of account creation or party-join — those paths require phone verification alone (FR-020, FR-122). This call-site placement is **identical** for the v1 conventional backing (government-ID document check, DES-100) and the v2 ZK backing (nullifier proof via `ICredentialAdapter` → `PersonhoodRegistry`). This is the architectural fact that makes v1 and v2 share one participation model: the seam's position, not the backing behind it, defines the governance boundary of verification-gates-counting-never-joining.

### v1/v2 participation-model mirror

| Property | v1 (conventional) | v2 (ZK) |
|----------|-------------------|---------|
| Open-tier entry | Phone verification alone (FR-122) | Phone verification alone (FR-122) |
| COUNTING actions | Government-ID document check (FR-132; DES-100; behind DES-095) | ZK nullifier enrolment (FR-069/FR-123; behind DES-095) |
| Verification seam | `IEligibilityVerifier` (DES-095) — called at COUNTING-action sites | `IEligibilityVerifier` (DES-095) — called at COUNTING-action sites |
| Joining right | Absolute — BR-003/FR-020 (phone only) | Absolute — BR-003/FR-020 (phone only) |

Only the verification backing differs. The governance boundary — verification gates COUNTING, never joining — is the same in both definitions.

### BR-003/FR-020 contradiction — RESOLVED

The conflict recorded as AWAITING APPROVER CONFIRMATION in Doc 02 v2.11.0 §16.5 and in §(c-viii) (prior version) is **RESOLVED**: the government-ID check does NOT gate joining (BR-003/FR-020 intact and absolute). It gates COUNTING-tier eligibility only. H-19 (Doc 02 v2.12.0) is amended to the corrected reading: no government ID = no COUNTING membership in v1; open-tier participation remains available.

### Two exclusions — distinct, both recorded

- **§(c-vi) — phone-number exclusion (UNCHANGED):** No phone number → no account. This exclusion bars access to the platform itself. The 2026-08-24 ruling does not touch it.
- **§(c-viii) — government-ID exclusion (AMENDED):** No government ID → no COUNTING-tier eligibility. This exclusion bars only the three FR-123 COUNTING actions. Open-tier participation remains available.

These exclusions operate at different layers and MUST NOT be conflated.
