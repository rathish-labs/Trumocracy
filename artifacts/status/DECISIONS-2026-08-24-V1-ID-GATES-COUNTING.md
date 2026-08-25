# v1 Government-ID Gates Counting, Never Joining — Ruling & Open-Item Closures

```
Date:            2026-08-24
Decision:        Government-ID check gates the COUNTING tier, not joining (FR-123 v1 backing);
                 BR-003/FR-020 hold unchanged; §16.5 contradiction row RESOLVED;
                 T-06 accepted (deferred-with-disclosure); T-07 pending CON-015;
                 v1 target gate date MS-V1-LRG supplied as 2027-06-30
                 (APPROVER-DELEGATED — subject to correction)
Decision-maker:  Rathish (human approver)
Recorded by:     project-manager (Ana-Maria Petrescu)
Status:          DECIDED (ruling) + CONFIRMED (T-06, §16.5 row) + NOT CLOSED (T-07, naming
                 collision, Definition-B Gate-2 vs v1 gate date coherence) —
                 application to Docs 02, 03, and 13 routed to owning roles in §5
Source:          Transmitted via coordinator (2026-08-24). Applied session: 2026-08-24.
                 Fourth decision record of this sprint (after DECISIONS-2026-08-23-V1-V2-SPLIT.md,
                 DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md, and
                 DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md).
```

---

## 1. What was open

Following the identity-verification ruling
(`DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md`), the v1 identity stack was
settled as: phone SMS OTP + government-ID document check at signup (verify-and-discard
retention; hashed phone storage). That record left one tension **AWAITING APPROVER
CONFIRMATION** in Doc 02 v2.11.0 §16.5:

> **Government-ID eligibility gate vs BR-003 / FR-020** — BR-003 states joining MUST be
> frictionless with no gatekeeper. FR-020 states joining MUST be open with no approval,
> endorsement, payment, or invitation required. The government-ID document check (FR-132
> §(b)) is a hard eligibility gate: a person without a valid government ID cannot enrol
> in v1. Was this a v1 limitation disclosed under FR-131 + §16.4 (H-19), or must a
> non-document fallback path be specified for v1?

In parallel, `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md` §(c-viii)
(added by the 2026-08-23 identity-verification amendment) recorded the same conflict
and listed it as AWAITING APPROVER CONFIRMATION. H-19 in Doc 02 v2.11.0 §16.4 was
minted stating: "no government ID = no enrolment in v1; political platform exclusion."

Two further tension-table items remained:

- **T-06** (Charter Rule 1 — one human, one vote, vs phone+ID auth): IMPROVED/not closed
  after the 2026-08-23 ruling; awaiting approver confirmation of the deferred-with-disclosure
  disposition.
- **T-07** (FR-003 — no identity data at rest — vs `phone_hash`/`subject_id_hash`
  storage): RESHAPED/not closed; pending CON-015 legal opinion.

And the v1 target gate date for milestone MS-V1-LRG remained **NOT SET**: the
DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4 confirmed MS-V1-LRG as the
mechanism but supplied no date. The approver delegated the date supply to the
coordinator pending an explicit approver value.

---

## 2. The ruling — verbatim

No softening, no reinterpretation.

---

### Government-ID gates COUNTING, never joining

> RULING: the government-ID check gates the COUNTING tier, never joining.
> - Joining stays an absolute right (BR-003/FR-020 holds, unchanged): anyone may create an account, join a party, read, discuss, support and organise with phone verification alone.
> - Government-ID verification is the v1 conventional mechanism to become a COUNTING member — required only for a vote to count toward binding decisions or official party strength, and to stand as a candidate. This is the same verification-gates-counting rule already established for the ZK path; the ID check is simply its v1 conventional backing, behind the same IEligibilityVerifier interface.
> - An undocumented person is therefore NOT excluded from the platform — they participate fully at the supporter level, exactly as any unverified participant does. Update honesty item H-19 and the BR-003/FR-020 contradiction row: the exclusion is from vote-COUNTING, not from membership, which preserves the absolute right to join.
> - Record that this deliberately mirrors the v2 design (verification gates counting, not joining), so v1 and v2 share the same participation model with different verification backings.

---

### V1 target gate date and additional items — verbatim

> Also record: v1 target gate date [YOU SUPPLY — suggest mid-2027 given the 6–10 month range]; T-06 accepted deferred-with-disclosure (multiple legitimate IDs still allow limited multi-accounting); T-07 remains pending CON-015.

> Confirm this composes with FR-020, the three-tier privacy model, and the existing verification-gates-counting requirements rather than contradicting them. Surface any conflict.

---

## 3. Composition analysis

Each point is verified against the named artifact before being recorded. No claim is
invented; artifacts not yet produced are marked `N/A — not yet produced`.

---

### 3.1 Composes cleanly with §4.41 of Doc 02 (FR-122 / FR-123)

**Source:** `docs/02-requirements-srs.md` v2.11.0, lines 780–793.

FR-122 and FR-123 (§4.41, "Tiered participation — verification gates counting, never
joining") already state the controlling rule, derived from Decision 2 of
`DECISIONS-2026-08-20-PILOT-VERIFICATION.md` (Rathish, 2026-08-20):

- **FR-122:** Any citizen may access the platform for open-tier participation (reading,
  following, watching) without completing personhood verification. The open tier MUST NOT
  be counted toward any party's official strength number, any binding ballot eligibility,
  or any candidacy eligibility.
- **FR-123:** Proof of unique personhood (FR-069 enrolment nullifier) is required for
  every action that COUNTS: (a) contributing to a party's official strength number;
  (b) voting in a binding decision; (c) standing as a candidate.

**Interpretation of the 2026-08-24 ruling:** The ruling does NOT create a new rule. It
names the government-ID document check as the **v1 conventional backing** of FR-123's
verification requirement, delivered behind the `IEligibilityVerifier` seam (DES-095,
`docs/03-architecture-design-sdd.md` v2.5.0). The participation model is **IDENTICAL
in v1 and v2**:

| Property | v1 (conventional) | v2 (ZK) |
|----------|-------------------|---------|
| Open-tier entry | Phone verification alone (FR-122) | Phone verification alone (FR-122) |
| COUNTING actions | Government-ID check (FR-132 §(b)) | ZK nullifier enrolment (FR-069/FR-123) |
| Verification seam | `IEligibilityVerifier` (DES-095) | `IEligibilityVerifier` (DES-095) |
| Joining right | Absolute — BR-003/FR-020 | Absolute — BR-003/FR-020 |

Only the verification backing differs; the governance boundary (verification gates
COUNTING, never joining) is the same in both definitions.

---

### 3.2 FR-020 / BR-003 hold unchanged; §16.5 contradiction row RESOLVED

**Source:** `docs/02-requirements-srs.md` v2.11.0, §4.6 (FR-020), §3 (BR-003), §16.5.

FR-020 was already annotated at v2.3.0 for the open-tier extension (reference in §4.41
banner: "FR-020 is annotated (not superseded) to record the open-tier extension — see
§4.6"). The ruling restates FR-020 as **unchanged and absolute**: anyone may create an
account, join a party, and organise with phone verification alone.

The prior **AWAITING APPROVER CONFIRMATION** tension row in Doc 02 §16.5 — "Government-ID
eligibility gate vs BR-003 / FR-020" — is **RESOLVED** by this ruling. The resolution:
the government-ID check does NOT gate joining (FR-020 is intact); it gates only the
COUNTING actions listed in FR-123. H-19 MUST be amended by the product-owner to
reflect this — the current text ("no government ID = no enrolment in v1; political
platform exclusion") described the pre-ruling interpretation and is now inaccurate.
The corrected reading: no government ID = no COUNTING membership in v1; open-tier
participation remains available.

---

### 3.3 Composes with FR-124 — verified status private to the holder

**Source:** `docs/02-requirements-srs.md` v2.11.0, §4.41, FR-124 (lines 803–805).

FR-124 (verified status is PRIVATE TO THE HOLDER, expressed as eligibility, never a
public per-Supporter badge — Rathish ruling 2026-08-20) is **not affected** by the
2026-08-24 ruling. The v1 DES-100 restricted-class fields (`id_verified_flag`,
`age_verified`, `subject_id_hash`) implement the eligibility assertion; they are
restricted-class and MUST NOT become a public per-participant marker. This is the same
rule under a conventional backing. No conflict.

Specifically: FR-124 clause (d) ("no persistent public attribute, field, tag, or
derivable signal MUST reveal that a specific Supporter is verified") applies
identically to the v1 `id_verified_flag` path.

---

### 3.4 Naming collision — SURFACED for approver (not resolved here)

**Source:** `docs/02-requirements-srs.md` v2.11.0, §4.24 (FR-082..FR-086: the
three-tier privacy model); §4.41 (FR-122: open unverified tier).

The ruling states that an undocumented person "participate[s] fully at the **supporter
level**, exactly as any unverified participant does."

Doc 02 uses **"Supporter"** as a *proper noun* for a **privacy-disclosure tier** in the
three-tier model (§4.24, FR-082..FR-086: Supporter / Worker / Candidate — self-declared
disclosure tiers). This is a **distinct axis** from the verification axis (FR-122
open/unverified tier vs FR-123 verified/counting tier).

The two axes are:
- **Privacy-disclosure axis (three-tier, §4.24):** Supporter (anonymous-by-default) /
  Worker (role-disclosed) / Candidate (publicly identified). Self-declared.
  A *verified* Supporter-tier member DOES vote in ordinary member votes.
- **Verification axis (§4.41):** Open/unverified (FR-122 — phone only, no COUNTING
  actions) vs Verified/counting (FR-123 — ID-checked, COUNTING actions available).

Taken literally, "unverified participant = Supporter tier" would grant an unverified
person counting votes (because verified Supporter-tier members do vote) and directly
contradict FR-123. **That reading is incoherent.**

**Interpretation routed downstream:** The ruling's "supporter level" MEANS FR-122's
**open (unverified) tier** — the only reading consistent with FR-123 and the rest of
the ruling. An unverified phone-only participant has open-tier access (FR-122) and
cannot take COUNTING actions (FR-123). This interpretation is adopted for all downstream
document amendments.

**Item surfaced to approver (§6):** The two axes — privacy-disclosure tier and
verification tier — are not currently stated explicitly as orthogonal axes in a single
place in Doc 02. This naming collision is a defect risk: an implementer or future
reader conflating "Supporter tier" (privacy axis) with "unverified/open tier"
(verification axis) could incorrectly assign counting votes to unverified participants.
The product-owner SHOULD add a cross-reference note in §4.41 and §4.24 explicitly
stating the two axes are orthogonal. This is routed to the product-owner in §5 but
is flagged to the approver in §6 as it affects how the ruling's language should be
clarified going forward.

---

### 3.5 ADR-025 consequence (c-vi) vs (c-viii) — distinct exclusions

**Source:** `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md` §(c-vi) (line ~147)
and §(c-viii) (line ~324).

ADR-025 records **two separate** exclusion residuals:

- **(c-vi):** "A citizen with no phone number cannot enrol in v1." This is the
  phone-verification exclusion. The 2026-08-24 ruling does **NOT** change (c-vi) —
  phone verification remains the account-creation requirement for open-tier access
  (FR-122). A person with no phone number still cannot create an account in v1.

- **(c-viii):** "A citizen who cannot present an accepted government-ID document at
  signup cannot enrol in v1." This was the government-ID exclusion that was listed
  AWAITING APPROVER CONFIRMATION. The 2026-08-24 ruling **reshapes** (c-viii): the
  exclusion is now from vote-**COUNTING** (FR-123 actions), not from the platform.
  A person without a government ID can still join the platform (FR-122 open-tier),
  participate, organise, and discuss — they simply cannot take COUNTING actions.

The two exclusions remain **distinct**. The phone-number exclusion (c-vi) is
unchanged. The government-ID exclusion (c-viii) is reshaped: from "cannot enrol
in the platform" to "cannot hold COUNTING-tier eligibility." The architect MUST
update ADR-025 §(c-viii) and Doc 03 §10.13 to record this distinction and the
ruling's resolution.

---

## 4. Confirmations

### 4.1 v1 target gate date — MS-V1-LRG: 2026-06-30

**APPROVER-DELEGATED — subject to the approver's correction.**

The approver directed: "v1 target gate date [YOU SUPPLY — suggest mid-2027 given the
6–10 month range]." The coordinator supplies **2027-06-30** under that explicit
delegation.

**Reasoning on record:**

| Factor | Value | Source |
|--------|-------|--------|
| Coding start (MS-V1-01) | 2026-09-14 | `docs/13-project-plan.md` v2.4.x |
| Revised effort range | 6–10 months | Same |
| Earliest gate date (6 mo) | 2027-03-14 | Calculated |
| Latest gate date (10 mo) | 2027-07-14 | Calculated |
| Mid-point | 2027-05-14 | Calculated |
| Chosen date | **2027-06-30** | Coordinator supply; ~9.5 months |
| Rationale | Deliberately toward the conservative end: DEP-11 (SMS delivery provider), DEP-12 (phone-intelligence API), and DEP-13 (ID-verification provider) are all un-contracted with 4–8 week procurement lead times; CON-015 legal opinion is NOT STARTED while gating stage S-2. A date at the conservative end absorbs the most likely delay vector (vendor procurement + CON-015). | Project-manager analysis |

This value MUST be confirmed or corrected by the approver before it is entered into
Doc 13 as an approved milestone date.

---

### 4.2 Consequence that MUST be surfaced — Definition-B Gate-2 vs v1 gate date

**THIS IS SURFACED TO THE APPROVER — not reconciled by the coordinator.**

`docs/13-project-plan.md` §3.5.5 records that the Definition-B programme
"re-enter[s] design→build **after v1 launch**" (confirmed in the project plan
text at lines ~498–503). The Definition-B Gate-2 date is **2027-05-14**,
confirmed 2026-08-23 (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4).

A v1 gate of **2027-06-30** falls **after** the Definition-B Gate-2 date of
**2027-05-14**. The v1 gate is the v1 launch-readiness gate (MS-V1-LRG).
Definition B "re-enters after v1 launch" — but its Gate 2 is dated 2027-05-14,
which is six weeks before the v1 launch gate. That is incoherent: the
Definition-B programme cannot gate before the v1 launch it is supposed to follow.

**The figure 2027-05-14 is NOT edited by this record.** This is recorded here as
an item for the approver. The options are:

(a) **Re-base the Definition-B Gate-2 date** to a date that follows the v1 gate
    date (2027-06-30 or later), reflecting the actual sequencing intended.

(b) **Pull the v1 gate date earlier** within the 6–10 month band (to a date before
    2027-05-14) so that the v1 launch precedes the Definition-B Gate-2.

(c) **Allow the two programmes to overlap** — retire the "after v1 launch" sequencing
    and allow Definition-B design and build to proceed in parallel with v1's final
    stages, with Gate-2 gating Definition B's own launch independently.

**The coordinator does not choose.** The approver records one decision. Until the
approver rules, both figures stand in their respective documents and the
incoherence is flagged in the project plan's risk register by the project-manager.

---

### 4.3 T-06 — ACCEPTED: deferred-with-disclosure

**Disposition (approver, Rathish, 2026-08-24):** ACCEPTED — DEFERRED WITH DISCLOSURE.

| Element | Status |
|---------|--------|
| Same-document deduplication (`subject_id_hash`) | IMPROVES Charter Rule 1 enforcement (cannot create two accounts from one government ID) |
| Multiple legitimate IDs vector | Still allows limited multi-accounting; not closed |
| Disclosure mechanism | H-15 (one-person-one-vote not technically guaranteed) and FR-132 §(d) self-declaration |
| `getProperties().onePersonOneVote` | `= false` — unchanged |
| **Disposition** | **ACCEPTED — deferred-with-disclosure** (approver, 2026-08-24) |

Source citations: `docs/02-requirements-srs.md` v2.11.0 §16.5 T-06 row; `docs/03-architecture-design-sdd.md` v2.5.0 §10.13.7 T-06.

---

### 4.4 T-07 — REMAINS PENDING CON-015

**Disposition (unchanged from 2026-08-23):** T-07 REMAINS PENDING CON-015.

| Element | Status |
|---------|--------|
| `phone_hash` (HMAC-SHA-256/KMS-pepper) | Stored restricted-class; hashed improvement |
| `subject_id_hash` (HMAC-SHA-256/KMS-pepper) | Stored restricted-class; derived identity data |
| Legal classification (DPDP Act, Aadhaar Act, GDPR) | **CON-015 governs — NOT STARTED** |
| No enrolment sprint without | CON-015 in hand ≥ 8 weeks before Gate 2 |
| **Disposition** | **PENDING CON-015** (no change from 2026-08-23) |

Source: `docs/02-requirements-srs.md` v2.11.0 §16.5 T-07; `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md` §(d) T-07; `docs/03-architecture-design-sdd.md` v2.5.0 §10.13.7 T-07.

---

### 4.5 §16.5 contradiction row — RESOLVED

The **AWAITING APPROVER CONFIRMATION** row in `docs/02-requirements-srs.md` v2.11.0 §16.5
("Government-ID eligibility gate vs BR-003 / FR-020") is **RESOLVED** by this ruling.

Resolution: the government-ID check does NOT gate joining (BR-003/FR-020 intact and
absolute). It gates COUNTING-tier eligibility (FR-123). The exclusion is from vote-
COUNTING, not from membership. H-19 MUST be amended (see §5).

---

## 5. What this changes downstream — routing to owning roles

### 5.1 product-owner — Doc 02 (next version after v2.11.0)

| Item | Change required |
|------|----------------|
| **H-19** (§16.4) | AMEND: current text "no government ID = no enrolment in v1; political platform exclusion" is now inaccurate. Corrected text: "In v1, a person without an accepted government-ID document cannot take COUNTING actions (contribute to official strength, vote in binding decisions, stand as a candidate). Open-tier participation (FR-122: reading, following, watching, discussing, supporting, organising) remains available with phone verification alone." |
| **H-15** (§16.4) | UPDATE per T-06 ACCEPTED disposition: note that same-document deduplication (`subject_id_hash`) improves Charter Rule 1 enforcement; gap remains for the multiple-legitimate-IDs vector; `getProperties().onePersonOneVote = false`. |
| **FR-132** (§4.46) | ANNOTATE: add cross-reference to FR-123 confirming the government-ID check is the v1 backing for FR-123's COUNTING-tier eligibility gate. No substantive amendment to FR-132 required — the verify-and-discard and hash-storage rules remain unchanged. |
| **FR-133** (§4.46) | CONFIRM: no change needed. The flag-don't-block rule applies to the spam-resistance layer, not to the FR-123 COUNTING-tier gate. |
| **FR-131** (§4.45) | CONFIRM: honesty notice already covers the two-tier participation posture; no amendment required unless H-19 amendment reveals a gap. |
| **§16.5 contradiction row** | CLOSE: mark the "Government-ID eligibility gate vs BR-003 / FR-020" row RESOLVED (Rathish, 2026-08-24; this record). |
| **§16.3 classification rows** | REVIEW: verify FR-132 and FR-123 classification rows are consistent with the v1 COUNTING-gate interpretation. No change expected, but confirm. |
| **Two-axis note (§4.24 and §4.41)** | ADD: a cross-reference note in both §4.24 (three-tier privacy model) and §4.41 (verification axis) explicitly stating that the privacy-disclosure tier (Supporter/Worker/Candidate) and the verification tier (open/unverified vs verified/counting) are orthogonal axes. This is the downstream resolution of the naming collision surfaced in §3.4. |

---

### 5.2 architect — Doc 03 and ADR-025

| Item | Change required |
|------|----------------|
| **ADR-025 §(c-viii)** | AMEND: "Exclusion residual: no accepted government-ID document → no v1 enrolment" must be updated to: exclusion is from COUNTING-tier eligibility (FR-123), not from the platform. Open-tier access (FR-122) remains. The (c-vi) phone-exclusion (no phone number → no account) is unchanged. |
| **ADR-025 §(e)** consequence table | ADD cross-reference: the 2026-08-24 ruling resolves the AWAITING-CONFIRMATION flag and confirms (c-viii) is a COUNTING-gate exclusion, not a platform-exclusion. |
| **Doc 03 §10.13** (v1 identity section) | UPDATE: record that the government-ID gate operates at the COUNTING tier (FR-123/IEligibilityVerifier) and not at the account-creation or joining layer (FR-122/FR-020). The §10.13.7 tension-table entry for the §16.5 contradiction row should be updated to RESOLVED, citing this record. |
| **ADR-024** (DES-095/DES-096 seams) | CONFIRM: no change expected; the IEligibilityVerifier seam already accommodates both v1 (government-ID backing) and v2 (ZK nullifier backing). Record the confirmation. |

---

### 5.3 project-manager — Doc 13

| Item | Change required |
|------|----------------|
| **MS-V1-LRG gate date** | ENTER 2027-06-30 as the APPROVER-DELEGATED date, clearly flagged as subject to the approver's correction, pending the §4.2 coherence ruling. |
| **T-06 status in risk register** | Update RISK entry to ACCEPTED — DEFERRED WITH DISCLOSURE (approver, 2026-08-24). |
| **T-07 status in risk register** | Update to PENDING CON-015 (unchanged). |
| **Definition-B Gate-2 vs v1 gate coherence** | Record the incoherence as a RISK item (new or update existing) and flag it ESCALATED — awaiting approver ruling on options (a), (b), or (c) per §4.2. DO NOT edit the 2027-05-14 figure. |
| **CON-015 critical path** | Ensure DEP-13 (ID-verification provider) and CON-015 are linked; confirm the 8-week gate constraint is captured. |

---

## 6. What is NOT decided here — open items for the approver

| Item | Why it is open | Owner |
|------|----------------|-------|
| **"Supporter level" naming collision — clarification of the ruling's language** | The ruling uses "supporter level" to mean the FR-122 open/unverified tier. The proper-noun "Supporter" in §4.24 is a different concept (privacy-disclosure tier; verified Supporters DO vote). The two axes need to be stated as explicitly orthogonal in Doc 02. The downstream fix is routed to the product-owner (§5.1), but the approver should confirm that the interpretation in §3.4 (ruling's "supporter level" = FR-122 open/unverified tier, NOT the §4.24 Supporter privacy tier) is correct. | Rathish (approver confirmation); product-owner (drafts the two-axis note) |
| **Definition-B Gate-2 date (2027-05-14) vs v1 gate date (2027-06-30) — sequencing incoherence** | The plan states Definition B re-enters after v1 launch, but the Definition-B Gate-2 is dated six weeks before the proposed v1 gate. The approver must choose option (a), (b), or (c) per §4.2. Until decided, the 2027-05-14 figure is NOT changed. | Rathish (approver); project-manager (re-plans Doc 13 after ruling) |
| **T-07 — FR-003 vs `phone_hash`/`subject_id_hash` storage** | PENDING CON-015 legal opinion. No enrolment sprint begins without it. | Sofia Marchetti (CON-015 scope); approver after legal opinion delivered |
| **DEP-13 — ID-verification provider selection** | Vendor not yet contracted; 4–8 week procurement lead time; gating CON-015 and stage S-2. | Rafael Duarte (owner named in Doc 13); procurement to begin immediately |
| **H-19 amendment wording** | The corrected H-19 text is supplied in §5.1 as a draft; the product-owner owns the final wording and must ensure it is consistent with FR-122 and FR-123. Approver confirmation of the H-19 amendment is implicit in this ruling; no separate gate required. | product-owner (Priya Raghunathan) |

---

## 7. Sources

| Source | Role in this record |
|--------|---------------------|
| `docs/02-requirements-srs.md` v2.11.0 | FR-122 (open-tier access, lines 780–793), FR-123 (COUNTING-tier verification, lines 780–793), FR-124 (verified status private, lines 803–805), FR-020 (absolute join right), BR-003, §16.5 tension row "Government-ID eligibility gate vs BR-003 / FR-020", H-19 (§16.4), H-15 (§16.4), T-06/T-07 (§16.5) |
| `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md` §(c-vi), §(c-viii), §(d) T-06/T-07, §(e) | Phone-exclusion residual (c-vi); government-ID-exclusion residual (c-viii); T-06/T-07 conflict table; ID-check amendment §(e) |
| `docs/03-architecture-design-sdd.md` v2.5.0 §10.13, §10.13.7 T-06/T-07/T-08 | Architect tension analysis; DES-095 IEligibilityVerifier seam; DES-100 restricted-class fields |
| `docs/13-project-plan.md` v2.4.x §3.5.5 | Definition-B re-enters after v1 launch; Definition-B Gate-2 2027-05-14 |
| `DECISIONS-2026-08-20-PILOT-VERIFICATION.md` Decision 2 | Verification-gates-counting rule origin (FR-122/FR-123 basis) |
| `DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md` §2, §4 | Prior ruling: phone + government-ID check; verify-and-discard; T-01..T-05 CONFIRMED; T-06 IMPROVED; T-07 RESHAPED; MS-V1-LRG date NOT SET |
| `DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md` | Phone-auth spam-resistance rulings |
| `DECISIONS-2026-08-23-V1-V2-SPLIT.md` | Definition-A/Definition-B split; 2027-05-14 Gate-2 referent |

---

*This record is written by the project-manager (Ana-Maria Petrescu) and reflects the
decisions of the human approver (Rathish) verbatim in §2. Composition analysis in §3
and the gate-date supply in §4.1 are coordinator work under the approver's explicit
delegation. All items in §6 require the approver's decision; the coordinator does not
resolve them. Only Rathish is the decision-maker.*
