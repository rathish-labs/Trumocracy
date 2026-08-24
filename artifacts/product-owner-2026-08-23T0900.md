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
