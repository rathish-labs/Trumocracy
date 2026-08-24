# Product-Owner Session Memory — 2026-08-23T09:00

```
Role:       product-owner (Priya Raghunathan)
Timestamp:  2026-08-23T09:00:00Z
Phase:      Define — v1/v2 delivery-phasing classification applied; FR-131 minted; CON-007 corrected
Product:    Trumocracy
Scope:      Documents only. No code, no design, no Doc 01/03/05/13 edits.
```

## What I did

Applied four approver directives (Rathish, 2026-08-23) to `docs/02-requirements-srs.md`,
advancing it from v2.5.0 to v2.6.0. Decision record:
`artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` (being written by the project-manager).

### Deliverable 1 — §16 Delivery Phasing (COMPLETE)

New top-level section appended after §15 Approvals:

- **§16.1 Definitions**: Definition A (v1 — transparent party platform, conventional auth,
  blockchain as audit record only per DES-097) and Definition B (v2 — same platform plus
  ZK anonymous enrolment, MACI private receipt-free ballots, trusted-setup ceremony). Reference
  to DES-095/096 stable seam interfaces that allow v2 to be an implementation swap, not a rewrite.

- **§16.2 Classification test (normative)**: Four dispositions defined — IN-v1, PARTIAL,
  DEFERRED-v2, SUPERSEDED-n/a — with the normative test: a requirement is DEFERRED-v2 if and
  only if it exists ONLY to provide anonymity, private ballots, coercion-resistance, or
  hostile-state safety.

- **§16.3.1 FR classification table**: All 131 FRs classified. Tallies:
  - IN-v1: 106 FRs
  - PARTIAL: 19 FRs (FR-001, 002, 014, 021, 032, 033, 034, 048, 059, 063, 069, 071, 103,
    114, 123, 124, 126, 127, 128)
  - DEFERRED-v2: 4 FRs (FR-030, FR-031, FR-082, FR-086)
  - SUPERSEDED-n/a: 2 FRs (FR-046, FR-062)

- **§16.3.2 NFR classification table**: All 28 NFRs classified. Tallies:
  - IN-v1: 24 NFRs
  - PARTIAL: 3 NFRs (NFR-001, NFR-002, NFR-024)
  - DEFERRED-v2: 1 NFR (NFR-003)

- **§16.4 Honesty register** (H-01..H-06): Six items the v1 README MUST disclose:
  - H-01: Votes not secret (DB records vote direction linked to member account)
  - H-02: Membership not anonymous (operator DB links account↔party; FR-082/FR-086 cannot be
    technically satisfied in v1)
  - H-03: No receipt-freeness; no coercion resistance (last-ballot-counts visible in logs)
  - H-04: No cryptographic subpoena-proofness (FR-128 "technically unable" fails in v1)
  - H-05: Tally verifiability relies on trusting the DB operator (not ZK-proven in v1)
  - H-06: k≥1000 anonymity set floor (NFR-002) is policy, not mathematical guarantee in v1

- **§16.5 Contradiction surface** (AWAITING APPROVER CONFIRMATION — not reconciled):
  16 items listed: BR-009, BR-011, NFR-001, NFR-002, NFR-003, FR-030, FR-031, FR-082, FR-128,
  Doc 01 §C kill criteria, Doc 13 §3.1 recorded argument, Charter Rules 6/3 (T-01/T-05),
  FR-128 subpoena test (T-02), BR-009/FR-082 anonymity guarantee (T-03), NFR-003 Guarded Layer
  (T-04). All cross-referenced to architect tensions T-01..T-05 in Doc 03 §10.13.7 / ADR-024.

### Deliverable 2 — FR-131 minted (COMPLETE)

- §4.45 added: v1 honesty notice — voting authentication posture (DES-098)
- FR-131: Must; owner Nadia Hassan; traces BR-005 and BR-009; design DES-098; SCR-13, SCR-14
- Normative text: wherever a vote is cast in a Definition-A (v1) deployment, the UI MUST display
  a non-dismissable plain-language honesty notice (DES-098) before the ballot is confirmed, stating:
  (a) NOT anonymous, NOT receipt-free, NOT coercion-resistant; (b) database CAN see vote direction
  and membership; (c) v2 cryptographic ballot available on upgrade. WCAG 2.2 AA per DES-081.
  MUST NOT use "private/anonymous/receipt-free/secure" to describe v1 voting.
- §8 Gherkin added (4 scenarios: notice on SCR-13; notice on SCR-14; product materials prohibition;
  absence test — no bypass path)
- §11 Must count: 111 → 112; FR-131 added to Must list
- §12 traceability: FR-131 entry added; v2.6.0 session scope note added (including pre-allocation
  error flag: Doc 03 §12 references "FR-130" for DES-098 — cascade annotation owed to Doc 03)

### Deliverable 3 — CON-007 corrected (COMPLETE)

Changed stale "~USD 4.13M" to record-derived:
"≈ USD 4.03M on the accepted L2 basis — record-derived figure; Ruling 1 cascade 2026-08-21,
DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.2; ≈ USD 175K held as explicit
audit-remediation contingency against the unchanged USD 4.2M appetite"

Source confirmed: `artifacts/status/DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md` §3.2.
Note: approver's cited figures (~$3.836M and ~$294K) match no artifact; record-derived figures
used per rules.

### Deliverable 4 — Header hygiene (COMPLETE)

Version 2.5.0 → 2.6.0; Status: In Review; Last updated: 2026-08-23; changelog entry prepended.

## Documents produced / updated

| Document | From → To | Status |
|----------|-----------|--------|
| `docs/02-requirements-srs.md` | v2.5.0 → **v2.6.0** | In Review |

## IDs minted

| Prefix | ID | Notes |
|--------|----|-------|
| FR | FR-131 | Must, §4.45, Doc 02 v2.6.0. BR: BR-005, BR-009. DES: DES-098. Owner: Nadia Hassan. SCR: SCR-13, SCR-14. |

## Classification tallies

**FR-001..FR-131 (active 129, excluding 2 superseded):**
- IN-v1: 106
- PARTIAL: 19 (FR-001, 002, 014, 021, 032, 033, 034, 048, 059, 063, 069, 071, 103, 114, 123, 124, 126, 127, 128)
- DEFERRED-v2: 4 (FR-030, 031, 082, 086)
- SUPERSEDED-n/a: 2 (FR-046, FR-062)

**NFR-001..NFR-028:**
- IN-v1: 24
- PARTIAL: 3 (NFR-001, NFR-002, NFR-024)
- DEFERRED-v2: 1 (NFR-003)

## Key decisions

1. **FR-131 BR trace:** Both BR-005 and BR-009. BR-005 (publicly verifiable platform) — honesty
   about mechanism properties is the complement of verifiability. BR-009 (member identity
   protection) — informed disclosure of what v1 cannot guarantee enables informed consent.

2. **FR-131 owner:** Nadia Hassan. She owns UX-writing/accessibility/plain-language NFRs
   (NFR-011/012/013/023). The honesty notice is a WCAG-compliant plain-language notice — the
   most natural owner.

3. **Classification test anchor:** "DEFERRED-v2 if and only if it exists ONLY to provide
   anonymity, private ballots, coercion-resistance, or hostile-state safety." Applied across all
   131 FRs and 28 NFRs. Only 4 FRs and 1 NFR are purely DEFERRED-v2.

4. **Contradiction surface policy:** All 16 items flagged AWAITING APPROVER CONFIRMATION. No
   reconciliation made silently. The approver decides; this document surfaces.

5. **Pre-allocation error in Doc 03:** Doc 03 §12 trace table references "FR-130" for DES-098.
   FR-130 was already minted at v2.5.0 for the provisional-party membership cap. The honesty-notice
   FR is FR-131. Cannot fix (Doc 03 is architect-owned). Surfaced in §12 session scope note and
   in this memory note. Cascade annotation owed to Doc 03 at next architect increment.

6. **CON-007 source:** Record-derived from DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.2.
   Approver's cited figures (~$3.836M and ~$294K) match no artifact in the repository; record-derived
   figures used.

## Open items carried forward

| Item | Owner | Priority |
|------|-------|----------|
| Doc 03 cascade annotation for FR-131/DES-098 (fix "FR-130" pre-allocation error in §12) | architect (Ravi Deshmukh) — next Doc 03 increment | Before RTM can be complete |
| DES for FR-131 (DES-098 backing confirmed; US linkage owed) | architect (Ravi Deshmukh) | For DoR on stories implementing FR-131 |
| US for FR-131 | product-owner (this role) — next session when DES assigned | Before FR-131 stories can be Ready |
| TC for FR-131 | tester (Ji-woo Park) | Phase 3 |
| RTM row for FR-131 | tester — after DES and TC available | Gate 2 blocker once minted |
| Approver decision on 16 contradiction surface items (§16.5) | Rathish (human approver) | Before v1 launch |
| PM to re-plan Doc 13 §3.1 (MACI OFF / v1 scope) | project-manager | Current session (PM directive) |
| DECISIONS-2026-08-23-V1-V2-SPLIT.md | project-manager | Current session |
| Doc 02 v2.6.0 business-mode document-review | neutral reviewer (PM to assign) | Before Status → Approved |

## Gate status

Gate 1: APPROVED (2026-08-11, Rathish, unconditional). Direction remains approved.
Gate 2: NOT READY. Must count now 112. RTM: 126 rows / 12 COMPLETE / 114 OPEN
(FR-131 RTM row not yet added). Doc 02 In Review — review loop outstanding.

---

## Rework section — v2.7.0 (2026-08-23, same session)

**Trigger:** c1 business-mode review FAIL (94%, 0C/0H/1M/1L;
`artifacts/reviews/02-requirements-srs-v2.6.0-business-cycle1.md`). Coordinator directive.

### ISS-01 (Medium — missing decision artifact) — FIXED

`artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` now exists (written by project-manager
Ana-Maria Petrescu this session). The §16 Source block provisional qualifier "(being written by
the project-manager this session)" was removed. The block now cites the decision record directly
with no qualification. Doc 03 alignment reference updated from "v2.3.0" to "v2.3.1 (Approved)"
(matching the session's Cycle-2 PASS result).

Confirmed that §4.45 FR-131 rationale block and §12 v2.6.0 trace note already cited the
decision record directly without provisional language — no further edit required there.

### ISS-02 (Low — honesty-register gap) — FIXED

Swept all H?=Y rows in §16.3.1 and §16.3.2. Eight gaps identified (six named by reviewer plus
two additional found in sweep: FR-063, NFR-024). H-07..H-14 added to §16.4:

| Register ID | FR/NFR covered | T-xx |
|-------------|---------------|------|
| H-07 | FR-002 (cross-scope unlinkability) | T-01, T-03 |
| H-08 | FR-034 (interim-tally suppression policy-only in v1) | T-02 |
| H-09 | FR-048 (office-holder vs member vote separation) | T-02 |
| H-10 | FR-059 (recovery reveals nothing) | T-01, T-03 |
| H-11 | FR-063 (ballot-direction prohibition — DB operator CAN see) | T-02 |
| H-12 | FR-103 (conduct-vote privacy) | T-02 |
| H-13 | FR-124 (verified-status privacy) | T-01, T-03 |
| H-14 | NFR-024 (anti-harassment no individual-level data) | T-01, T-03 |

All H?=Y rows in §16.3 now map to a specific §16.4 entry.

### Document status after rework

`docs/02-requirements-srs.md` — v2.6.0 → **v2.7.0** (**Approved**, c2 PASS 98%, 0C/0H/0M/0L;
`artifacts/reviews/02-requirements-srs-v2.7.0-business-cycle2.md`).

### Open items updated

- "DECISIONS-2026-08-23-V1-V2-SPLIT.md — project-manager" is CLOSED (file now exists).
- "Doc 02 v2.6.0 business-mode document-review" is now "Doc 02 v2.7.0 business-mode c2 review
  — neutral reviewer (PM to assign) — outstanding."

---

## Rework section 2 — v2.8.0 (2026-08-23, same session)

**Trigger:** Approver rulings transmitted via coordinator (2026-08-23).
Decision record: `artifacts/status/DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md`.

### FR-132 minted (Must, §4.46, Marcus Adeyemi) — COMPLETE

Normative text: In a Definition-A (v1) deployment, the `IEligibilityVerifier` backing MUST use
phone-based SMS verification: each verified phone number creates at most one member account. The
system MUST record and present phone verification as spam mitigation, NOT unique-personhood proof.
v1 MUST NOT claim, in its UI, README, or any public-facing material, that one-person-one-vote is
guaranteed. The FR-131 honesty notice (DES-098) MUST carry a plain-language statement that
one-account-per-phone is not one-person-one-vote.
Traces: BR-006 (v1 degraded form of personhood), BR-012 (anti-capture/Sybil).
Design: DES-095 amended, ADR-025.

### FR-133 minted (Must, §4.47, Rafael Duarte) — COMPLETE

Normative text: Phone numbers at enrolment MUST be screened via (a) VoIP/virtual-number
phone-intelligence API; (b) velocity checks; (c) device anti-fraud. Flagged numbers MUST be
rate-limited, MUST NOT be hard-blocked, MUST NOT be denied a governance action solely on the
flag. False-positive path (legitimate VoIP/eSIM user) MUST be first-class: completes every
primary flow subject only to rate-limiting. Flag events are restricted-class (NFR-027), never
on public record.
Traces: BR-012 (anti-capture), BR-003 (frictionless join / non-exclusion).
Design: DES-099.

### §8 Gherkin — COMPLETE

FR-132: 3 scenarios (enrolment creates one account per phone; v1 MUST NOT claim one-person-one-vote; honesty notice carries caveat).
FR-133: 4 scenarios (flagged VoIP → rate-limited not blocked; legitimate VoIP/eSIM completes all flows; flag events not on public record; hard-block path does not exist — absence test).

### §16 updates — COMPLETE

- FR-001 v1-form: updated to "one account per verified phone number; SMS spam speed-bump; MUST NOT claim one-person-one-vote (FR-132)"
- FR-002 v1-form: updated to note "same phone-verified account across scopes"
- FR-003: reclassified IN-v1 → PARTIAL (v1 stores phone number; H? N → Y); v1 form + v2 form updated
- FR-132 row added (IN-v1, H? = Y)
- FR-133 row added (IN-v1, H? = N)
- NFR-010 v1-form: annotated with phone-number restricted-store carve-out
- §16.3.1 heading updated to FR-001..FR-133
- §16 Source block updated to include DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md and blockchain ratification note
- §16 intro examples block updated for FR-001

### §16.4 honesty register additions — COMPLETE

H-15: v1 does not guarantee one-person-one-vote (FR-132; T-06)
H-16: v1 stores verified phone number as identity data (FR-003 partial; T-07)
Final register: H-01..H-16.

### §16.5 contradiction surface additions — COMPLETE

T-06 (Charter Rule 1 — one human one vote — vs v1 phone auth): AWAITING APPROVER CONFIRMATION
T-07 (FR-003 no identity at rest — vs phone number storage): AWAITING APPROVER CONFIRMATION
Closing note updated: T-01..T-05 → T-01..T-07; ADR-025 reference added.

### Counts updated

Must count: 112 → 114 (FR-132, FR-133 both Must). §11 prose and ID list updated.

### FR-003 reclassification sweep

- NFR-010 (data minimisation): v1-form annotated; remains IN-v1 (phone number in restricted-store carve-out enumerated in §7). H? unchanged (N).
- No other NFR rows required update.
- Blockchain Ruling 3: DES-097 stack recommendation is now RATIFIED; item (a) from DECISIONS-2026-08-23-V1-V2-SPLIT.md §4 CLOSED as DECIDED. Recorded in §16 Source block and §12 scope note.

### Document status after v2.8.0

`docs/02-requirements-srs.md` — v2.7.0 (Approved) → **v2.8.0** (In Review).

---

## Rework section 3 — v2.9.0 (2026-08-23, same session)

**Trigger:** c1 business-mode review of v2.8.0 FAIL (97%, 0C/0H/1M/2L; `artifacts/reviews/02-requirements-srs-v2.8.0-business-cycle1.md`).

ISS-01 (Medium): §16.3.1 tally line updated. Verified arithmetic against table: 133 FRs minted, 2 superseded (FR-046, FR-062) = 131 active. FR-003 moved from IN-v1 to PARTIAL (−1 IN-v1, +1 PARTIAL); FR-132 and FR-133 added as IN-v1 (+2 IN-v1). Final: IN-v1 107, PARTIAL 20, DEFERRED-v2 4, SUPERSEDED-n/a 2. NFR tally verified unchanged: IN-v1 24, PARTIAL 3, DEFERRED-v2 1, total 28.

ISS-02 (Low): §11 heading "Counts (v2.6.0)" → "Counts (v2.9.0)".

ISS-03 (Low): §16 Source block "Doc 03 v2.4.0" → "Doc 03 v2.4.1 (Approved)".

`docs/02-requirements-srs.md` → **v2.9.0** (In Review).

---

## Rework section 4 — v2.10.0 (2026-08-23, same session)

**Trigger:** c2 business-mode review of v2.9.0 FAIL (98%, 0C/0H/1M/1L; `artifacts/reviews/02-requirements-srs-v2.9.0-business-cycle2.md`).

ISS-A (Medium): §11 Counts line corrected — "133 FR minted (131 active + 2 superseded: FR-046, FR-062)". Sweep of §11 and §1/§2 for stale "131 FR"/"129 active"/"112 Must": no other active-prose occurrences found outside historical changelog entries (which correctly record past states). One additional "Doc 03 v2.4.0" found in §12 v2.8.0 scope note (line 2524) — not in scope of ISS-B (§4.46/§4.47 only); flagged for coordinator.

ISS-B (Low): §4.46 inline annotation "Doc 03 v2.4.0" → "Doc 03 v2.4.1 (Approved)"; §4.47 inline annotation "Doc 03 v2.4.0" → "Doc 03 v2.4.1 (Approved)".

`docs/02-requirements-srs.md` → **v2.10.0** (**Approved**, c3 PASS 100%, 0C/0H/0M/0L; `artifacts/reviews/02-requirements-srs-v2.10.0-business-cycle3.md`). Post-edit citation sweep (no version bump): §12 v2.8.0 scope note "Doc 03 v2.4.0" → "Doc 03 v2.4.1 (Approved)" fixed. Full active-prose sweep found no other stale cross-document pins — all remaining v2.3.x/v2.4.0 occurrences are historical SRS self-annotations or Gherkin version comments, not cross-doc version pins. v2.10.0 changelog appended with citation-fix note.

## Rework section 5 — v2.11.0 (2026-08-23, same session)

**Trigger:** New approver ruling (`artifacts/status/DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md`). Source material read: the ruling, Doc 03 v2.5.0 §10.13.7 (conflict table CONFIRMED/IMPROVED/RESHAPED/ARCHITECT-RESOLVED), Doc 03 v2.5.0 §10.13.9 (DES-100 field-level allowlist/denylist/HMAC design, Q-1/Q-2/Q-3), ADR-025 §(e).

**Edits made to `docs/02-requirements-srs.md` → v2.11.0 (In Review):**

1. **Header:** v2.10.0 Approved → v2.11.0 In Review; changelog prepended (full summary of all changes below).

2. **§4.46 heading + rationale block (FR-132):** Renamed to "v1 identity verification — IEligibilityVerifier backing (DES-095 amended, DES-100, ADR-025)". Rationale expanded: phone SMS + government-ID document check; verify-and-discard model; "real-person verified, not anonymous" posture; same-document deduplication via `subject_id_hash` improves but does NOT close one-person-one-vote gap; vendor no-retention clause required. Source updated to cite DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md, DES-100, ADR-025 §(e).

3. **FR-132 normative text (§4.46):** Fully rewritten. Now requires: (a) phone SMS (phone_hash stored HMAC-SHA-256/KMS-pepper, never plaintext); (b) government-ID document check with verify-and-discard — DES-100 allowlist (id_verified_flag, age_verified, issuing_region, subject_id_hash, phone_hash, verified_at) enumerated normatively, denylist enumerated normatively; (c) subject_id_hash deduplication — duplicate-document refused regardless of phone; (d) honesty posture — MUST NOT claim anonymity or one-person-one-vote; (e) vendor no-retention contractual clause required.

4. **§4.47 heading + rationale block (FR-133):** Rationale expanded with critical asymmetry paragraph: flag-don't-block governs spam layer ONLY; government-ID check is a hard eligibility gate; false-positive path handles VoIP not no-ID citizens. New tension recorded against BR-003/FR-020, routed to §16.5.

5. **FR-133 normative text (§4.47):** Added explicit sentence: "Scope of flag-don't-block: the flag-don't-block rule applies ONLY to the spam-resistance layer signals enumerated above; it does NOT apply to the government-ID eligibility gate (FR-132 §(b))."

6. **§8 Gherkin (FR-132):** Scenario 3 updated (improved caveat — same-document dedupe + multiple-IDs still defeats); three new scenarios added: Scenario 4 (verify+discard — allowlist persists, denylist absent); Scenario 5 (duplicate-document refusal via subject_id_hash); Scenario 6 (no-ID denied with disclosure).

7. **§16 Source block:** Updated to cite DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md, Doc 03 v2.5.0 (In Review) §10.13.7, §10.13.9, ADR-025 §(e).

8. **§16.3.1 FR-001 row:** v1-form updated to phone+ID check, phone_hash AND subject_id_hash deduplication; "real-person verified" posture; MUST NOT claim one-person-one-vote (multiple IDs still defeat).

9. **§16.3.1 FR-002 row:** v1-form updated to cite subject_id_hash improves same-document deduplication across scopes but does not provide cross-scope unlinkability.

10. **§16.3.1 FR-003 row:** Reshaped — phone_hash + subject_id_hash stored HMAC (improvement over plaintext, both are derived identity data); denylist discarded; CON-015 governs legal classification.

11. **§16.3.1 FR-132 row:** Updated v1-form to phone+ID check, verify-and-discard, allowlist/denylist, same-document deduplication, "real-person verified" posture, vendor no-retention clause, CON-015 governs.

12. **§16.3.2 NFR-004 row:** Annotated — subject_id_hash same-document deduplication improves Sybil resistance; multiple-IDs vector remains.

13. **§16.3.2 NFR-010 row:** Updated — phone_hash and subject_id_hash restricted-store carve-out under DES-100 allowlist; CON-015 governs.

14. **§16.4 H-15:** Updated — same-document dedupe improves, T-06 status IMPROVED not closed, multiple-IDs vector stands, `getProperties().onePersonOneVote = false` unchanged.

15. **§16.4 H-16:** Updated — phone stored as HMAC-SHA-256 hash (improvement over plaintext); both phone_hash and subject_id_hash are derived identity data; T-07 RESHAPED.

16. **§16.4 H-17 minted:** ID-check vendor sees document; non-retention depends on vendor contract; risk recorded in Doc 01 §E3 and DES-100 §Q-2.

17. **§16.4 H-18 minted:** subject_id_hash retained as derived identifier; deduplication utility vs identity-surface deepening; CON-015 governs.

18. **§16.4 H-19 minted:** No government ID = no enrolment in v1; political platform exclusion; analogous to ADR-016 Aadhaar exclusion; AWAITING APPROVER CONFIRMATION.

19. **§16.5 T-01..T-05:** Status changed AWAITING APPROVER CONFIRMATION → **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4). All five confirmations recorded with source citation.

20. **§16.5 FR-030/031/082/086 DEFERRED-v2:** Status → **CONFIRMED** (Definition-B-only).

21. **§16.5 T-06:** Status → **T-06 IMPROVED — gap acknowledged**. Same-document dedupe materially improves; multiple-IDs vector stands; `getProperties().onePersonOneVote = false` unchanged. Cite: Doc 03 v2.5.0 §10.13.7.

22. **§16.5 T-07:** Status → **T-07 RESHAPED — CON-015 governs**. Hashed storage accepted; legal classification of phone_hash/subject_id_hash to be resolved by CON-015.

23. **§16.5 T-08 added:** FR-004 plurality vs single-vendor ID-check provider. **ARCHITECT-RESOLVED** (Doc 03 v2.5.0 §10.13.7 T-08): Phase-1 single-vendor operational limitation; provider-agnostic architecture; Phase 2 adds second provider.

24. **§16.5 new tension row:** Government-ID eligibility gate vs BR-003/FR-020. **AWAITING APPROVER CONFIRMATION** — does the approver accept no-government-ID exclusion as a v1 limitation disclosed under FR-131 + §16.4 (H-19), or must a non-document fallback path be specified for v1?

25. **§16.5 note updated:** Reflects T-01..T-05 CONFIRMED; T-06 IMPROVED; T-07 RESHAPED; T-08 ARCHITECT-RESOLVED; government-ID tension AWAITING APPROVER CONFIRMATION.

26. **CON-015 annotation (§9):** CRITICAL PATH annotation added — eight retention questions from DES-100 routed to CON-015 (India DPDP Act, Aadhaar Act 2016, GDPR); no enrolment sprint begins without CON-015 cleared.

27. **§11 heading:** "Counts (v2.10.0)" → "Counts (v2.11.0)".

28. **§12 v2.11.0 scope note:** Added — records FR-132/FR-133 amendment posture, DES-100 source, ADR-025 §(e), T-status updates, CON-015 critical path, Doc 03 v2.5.0 In Review pin.

**IDs touched:** FR-001, FR-002, FR-003, FR-132, FR-133 amended. NFR-004, NFR-010 annotated. H-15, H-16 updated. H-17, H-18, H-19 minted. T-01..T-08 status updated. CON-015 annotated. No new FR/NFR minted; Must count stays at 114.

**Open items carried forward:**
- CON-015 CRITICAL PATH — legal opinion on DES-100 eight-question scope must be obtained before enrolment sprint. Owner: Sofia Marchetti.
- Government-ID vs BR-003/FR-020 tension AWAITING APPROVER CONFIRMATION (Rathish).
- US for FR-131, FR-132, FR-133 owed at next catch-up.
- TC and RTM rows for FR-131, FR-132, FR-133 owed Phase 3.
- Doc 03 cascade annotation owed (§12 pre-allocation error FR-130 vs FR-131 for DES-098) — architect-owned.
- Doc 03 v2.5.0 In Review: this document pins it at v2.5.0 In Review; §16 Source block will be updated to v2.5.0 Approved when the architect's review concludes.

`docs/02-requirements-srs.md` → **v2.11.0** (**Approved**, c1 PASS 99%, 0C/0H/0M/1L; `artifacts/reviews/02-requirements-srs-v2.11.0-business-cycle1.md`).

**Carried Low debt — ISS-01 (authorised by reviewer; deferred to next substantive Doc 02 increment per Doc 13 v2.0.3 precedent):**
ISS-01: All occurrences of "Doc 03 v2.5.0 (In Review)" in active prose are stale — Doc 03 is now **v2.5.1 (Approved)**. Affected locations: §16 Source block, §4.46 rationale inline source note, H-17 (§16.4), and the §16.5 T-row source citations and footer note. The reviewer authorised fixing this without re-review in the next substantive increment. The next editor MUST sweep these four locations and replace "Doc 03 v2.5.0 (In Review)" with "Doc 03 v2.5.1 (Approved)" as the first pre-edit step.
