# product-owner session note — 2026-08-24T1200

```
Role:       product-owner (Priya Raghunathan)
Timestamp:  2026-08-24T12:00:00Z
Phase:      Define — Doc 02 v2.12.0 (ruling application: gov-ID gates COUNTING, never joining)
Product:    Trumocracy
Scope:      docs/02-requirements-srs.md — applying DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md
```

---

## What I did

Applied the 2026-08-24 approver ruling (Rathish) from
`artifacts/status/DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md` to
`docs/02-requirements-srs.md`, bumping it from v2.11.0 (Approved) to v2.12.0 (In Review).

All edits were surgical (Grep + targeted Edit only — no Read of whole file, no Write).

---

## Edits made

### 1. Header
- Version: 2.11.0 → 2.12.0
- Status: Approved → In Review
- Last updated: 2026-08-23 → 2026-08-24
- Change block: added full v2.12.0 summary citing DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md

### 2. §4.41 annotation (after FR-123 table, before FR-124 ruling)
- Added `v1 BACKING ANNOTATION` recording FR-123 v1 conventional backing = FR-132 gov-ID check
  behind DES-095; FR-122 open tier reachable with phone verification alone; participation model
  identical in v1 and v2; FR-122/FR-123 unamended.
- Added `TWO-AXIS NOTE` (surfaced to approver per decision record §6): verification axis (§4.41,
  FR-122/FR-123) and privacy-disclosure axis (§4.24, Supporter/Worker/Candidate) are orthogonal.
  Ruling's "supporter level" = FR-122 open/unverified tier (only reading consistent with FR-123).
  Naming collision surfaced to approver for terminology clarification.

### 3. §4.46 rationale banner — rewritten
- Two-layer framing: (1) phone verification alone for account creation and open-tier access
  (FR-020/FR-122 absolute); (2) government-ID check for FR-123 counting actions only.
- MUST NOT refuse membership for absence of government-ID.
- Source note: Doc 03 v2.5.1 (Approved) (was v2.5.0 (In Review)).

### 4. FR-132 normative text — rewritten
- §(a): phone verification for account creation/open-tier; MUST NOT refuse membership for absence of ID.
- §(b): government-ID check for FR-123 counting actions only (official strength, binding vote, candidacy).
- §(c): subject_id_hash deduplication at counting-verification, not at account creation; open-tier
  account preserved if duplicate counting attempt refused.
- §(d): honesty posture retained; added clause requiring v1 to state open-tier participants may
  join and participate fully, and that only FR-123 counting actions require ID check.
- §(e): vendor non-retention intact.
- Source note updated with 2026-08-24 ruling citation.

### 5. §4.47 "Critical asymmetry" paragraph — rewritten
- Relabelled v2.12.0 (was v2.11.0).
- Spam layer: flags and rate-limits, never denies.
- ID check: hard gate on COUNTING-tier eligibility only, NOT on joining; person without ID may
  create account and participate in open tier (FR-122), cannot take FR-123 counting actions.
- §16.5 row noted as RESOLVED.

### 6. FR-133 "Scope of flag-don't-block" sentence — corrected
- Replaced "excluded by FR-132" with accurate statement: excluded from COUNTING actions, not from
  the platform; open-tier participation remains available.

### 7. FR-133 BR trace rationale note — corrected
- Updated note about ID gate: governs COUNTING only; §16.5 RESOLVED cited.

### 8. FR-131 clause (d) added
- New clause (d): open-tier non-counting disclosure. Wherever an open-tier participant attempts a
  FR-123 counting action in v1, UI MUST display a plain-language notice stating: (i) open-tier
  only status; (ii) the action requires government-ID verification; (iii) what does not count;
  (iv) how to become counting. Notice MUST be shown before refusal, non-dismissable.
- This clause fills the normative gap — no existing FR required this disclosure. FR-131 is the
  natural home (v1 honesty notice). FR-134 NOT minted.

### 9. H-19 (§16.4) — rewritten
- Corrected: exclusion is from COUNTING (official strength, binding vote, candidacy), not from
  platform membership.
- Open-tier participation (FR-122) remains with phone verification alone.
- Honesty sharpened: permanent non-counting class is a real limitation; mission-targeted population
  (refugees, stateless, undocumented) is affected; v2 ZK enrolment is the commitment to a more
  inclusive counting path.
- ADR-016 Aadhaar-exclusion precedent reference retained.
- FR-133 reference removed; FR-123 and §16.5 RESOLVED citation added.

### 10. H-15 (§16.4) — updated
- T-06 status updated to ACCEPTED — DEFERRED WITH DISCLOSURE (Rathish, 2026-08-24;
  DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3).
- `getProperties().onePersonOneVote = false` unchanged stated explicitly.
- "multiple counting accounts" (was "multiple accounts") for precision.
- Doc 03 v2.5.1 (Approved) pin corrected.

### 11. §16.5 "Government-ID eligibility gate vs BR-003/FR-020" row — RESOLVED
- Status changed from AWAITING APPROVER CONFIRMATION to RESOLVED (Rathish, 2026-08-24;
  DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §3.2 and §4.5).
- What column updated to state the correction.

### 12. §16.5 T-06 row — ACCEPTED — DEFERRED WITH DISCLOSURE
- Status updated from "T-06 IMPROVED — gap acknowledged" to "T-06 ACCEPTED — DEFERRED WITH DISCLOSURE".
- Citations updated: DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3; Doc 03 v2.5.1 (Approved).

### 13. §16.5 T-07 row — reaffirmed RESHAPED/CON-015 governs
- Added "reaffirmed 2026-08-24" citation. Status unchanged from 2026-08-23.
- Doc 03 v2.5.1 (Approved) pin corrected.

### 14. §16.5 trailing note — updated
- T-06 → ACCEPTED — DEFERRED WITH DISCLOSURE; government-ID row → RESOLVED; T-07 text updated.

### 15. §16.3 FR-132 classification row — updated
- v1 form description updated: phone for account creation/open-tier; gov-ID for FR-123 counting only;
  deduplication at counting-verification.

### 16. §16.3 FR-133 classification row — updated
- v1 form description: scope clarification on flag-don't-block (spam layer only, not counting gate).

### 17. NFR-004 row (§16.3.2) — annotated
- v2.12.0 note: deduplication now at counting-verification, not account creation; same-document
  multi-counting-account vector is closed; an unverified open-tier account can exist before ID check.

### 18. Doc 03 v2.5.0 stale pins — corrected to v2.5.1 (Approved)
All active-body pins updated (historical changelog entries left intact):
- §4.46 rationale source note
- §16 Source block (lines ~2722-2724)
- H-15: "T-06 per Doc 03 v2.5.0" → v2.5.1 (Approved)
- H-16: T-07 reference
- H-17: DES-100 §Q-2 reference
- §16.5 T-01 (Charter Rule 6)
- §16.5 T-05 (Charter Rule 3)
- §16.5 T-02 (FR-128 subpoena / T-02)
- §16.5 T-03 (FR-082/BR-009)
- §16.5 T-04 (NFR-003/T-04)
- §16.5 T-06 (Charter Rule 1)
- §16.5 T-07 (FR-003/T-07)
- §16.5 T-08 (FR-004/T-08)
- §16.5 trailing note
- §12 v2.11.0 session scope note (two occurrences)

### 19. §11 Counts label
- "Counts (v2.11.0)" → "Counts (v2.12.0)" per maintenance rule.
- No BR/FR/NFR/Must counts change (no new IDs minted). Must = 114 (unchanged).

### 20. §12 v2.12.0 session scope note — added
- Added v2.12.0 amendment bullet list and session scope note after v2.11.0 scope block.

---

## FR-134 decision

FR-134 NOT minted. Step 5 assessment: no existing FR required the UI to disclose to an open-tier
participant that their actions do not count and how to become counting. FR-131 is the natural home
(v1 honesty notice per the task instruction). A new clause (d) was added to FR-131 to carry this
obligation. The clause is tight and normative. No new ID required.

---

## Stale pins corrected

| Location | Was | Now |
|----------|-----|-----|
| §4.46 source note | Doc 03 v2.5.0 §10.13.9 | Doc 03 v2.5.1 (Approved) §10.13.9 |
| §16 Source block | Doc 03 v2.5.0 (In Review) | Doc 03 v2.5.1 (Approved) |
| H-15 | Doc 03 v2.5.0 §10.13.7 | Doc 03 v2.5.1 (Approved) §10.13.7 |
| H-16 | Doc 03 v2.5.0 §10.13.7 | Doc 03 v2.5.1 (Approved) §10.13.7 |
| H-17 | Doc 03 v2.5.0 §10.13.9 | Doc 03 v2.5.1 (Approved) §10.13.9 |
| §16.5 T-01/T-02/T-03/T-04/T-05 | Doc 03 v2.5.0 §10.13.7 | Doc 03 v2.5.1 (Approved) §10.13.7 |
| §16.5 T-06 | Doc 03 v2.5.0 §10.13.7 | Doc 03 v2.5.1 (Approved) §10.13.7 |
| §16.5 T-07 | Doc 03 v2.5.0 §10.13.7 | Doc 03 v2.5.1 (Approved) §10.13.7 |
| §16.5 T-08 | Doc 03 v2.5.0 §10.13.7/§10.13.9 | Doc 03 v2.5.1 (Approved) §10.13.7/§10.13.9 |
| §16.5 trailing note | Doc 03 v2.5.0 §10.13.7 | Doc 03 v2.5.1 (Approved) §10.13.7 |
| §12 v2.11.0 scope note | Doc 03 v2.5.0 (In Review) | Doc 03 v2.5.1 (Approved) |

Historical changelog references (lines 22, 2584, 2598, 2659, 2662, 2667) left intact — those
reference Doc 02's own v2.5.0 version history, not Doc 03.

---

## Items surfaced (not resolved)

1. **TWO-AXIS naming collision**: the ruling's "supporter level" vs §4.24 Supporter privacy tier.
   Operative interpretation adopted (= FR-122 open tier) and the ambiguity surfaced to the approver
   in the §4.41 TWO-AXIS NOTE. Per DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §6.
   
2. **Definition-B Gate-2 (2027-05-14) vs v1 gate (2027-06-30) incoherence**: NOT a Doc 02 item;
   already recorded in the decision record §4.2 for the approver to rule on. Not added to §16.5
   (not a Doc 02 contradiction — this is a project-plan sequencing issue).

3. **ADR-025 §(c-viii) update owed to architect**: noted in §16 Source block and §12 scope note.
   Routing: per DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §5.2.

---

## IDs touched

| Type | IDs |
|------|-----|
| FR amended | FR-131 (clause d added), FR-132 (rewritten), FR-133 (scope corrected) |
| H register | H-15 (updated), H-19 (rewritten) |
| T tensions | T-06 (ACCEPTED), T-07 (reaffirmed), §16.5 new row RESOLVED |
| Doc 03 version | v2.5.0 (In Review) → v2.5.1 (Approved) throughout active body |

No new IDs minted. Must count: 114 (unchanged). BR/FR/NFR totals unchanged.

---

## Open items (from this session)

1. Approver confirmation of "supporter level" = FR-122 open tier (TWO-AXIS naming, §4.41 note).
2. Doc 02 v2.12.0 requires business-mode document-review before it can advance to Approved.
3. Architect to update ADR-025 §(c-viii): exclusion is from COUNTING-tier eligibility, not from
   the platform (per DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §5.2).
4. Architect to update Doc 03 §10.13 and the §10.12.6 C-02 closure annotation.
5. CON-015 legal opinion: CRITICAL PATH, NOT STARTED (Rafael Duarte / Sofia Marchetti).

---

## Gate state

- Gate 1: APPROVED (unconditionally) 2026-08-11. Doc 02 v2.12.0 In Review.
- Gate 2: NOT READY.
- Next: document-review of Doc 02 v2.12.0 in business mode (neutral reviewer).
