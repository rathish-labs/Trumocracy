# Document Review Report
## Doc 02 — Requirements Specification (SRS-TRUMOCRACY v2.12.0)
### Business Mode · Cycle 1

---

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.12.0
Review mode: business
Reviewer role: reviewer-qa (neutral; not the document owner — product-owner owns Doc 02)
Score: 87%
Critical: 0
High: 1
Medium: 3
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

`docs/02-requirements-srs.md` v2.12.0 was reviewed in business mode against the 2026-08-24 ruling
(`artifacts/status/DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md`) that government-ID check gates
COUNTING-tier eligibility only, never joining. The normative requirement text (FR-132, FR-133,
§4.41, §4.46, §4.47, §16.4 H-15/H-19, §16.5) has been correctly updated throughout and is
internally consistent with the ruling. However, the §8 Gherkin acceptance criteria were not
fully reconciled with the rewritten normative text: **FR-132 Scenario 6 tests the old
pre-ruling behaviour** ("government ID required to create an account"), directly contradicting
FR-132(a) which now says the system MUST NOT refuse account creation for absence of a
government-ID document. Three further gaps — a missing §4.24 cross-reference, a missing
Gherkin scenario for FR-131 clause (d), and a missing positive Gherkin for the post-ruling
phone-only account-creation path — complete the issue set. Verdict: **FAIL** (87%, 0C 1H 3M 1L).

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`87%`)
- Critical = 0? **Yes** · High = 0? **No (1)** · Medium = 0? **No (3)**
- **Verdict:** `FAIL` — PASS requires both score ≥ 95% and zero C/H/M.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 97 | 19.4 | Counting-gate ruling rationale clear; TWO-AXIS note well-expressed; H-19 honest |
| B2 Completeness | 15 | 82 | 12.3 | Missing: §4.24 cross-ref (decision record §5.1 required); FR-131 clause (d) Gherkin; FR-132 positive phone-only scenario; Scenario 6 wrong content |
| B3 Traceability & IDs | 20 | 100 | 20.0 | Named owners present; IDs correct; BR/DES/ADR cross-references verified; no new ID minted per scope note |
| B4 Correctness & consistency | 15 | 70 | 10.5 | FR-132 Scenario 6 directly contradicts FR-132(a); TWO-AXIS note falsely claims §4.24 cross-reference that does not exist; all other normative sections internally consistent |
| B5 Testability | 15 | 73 | 10.95 | FR-132 Scenario 6 tests pre-ruling behaviour; FR-131 clause (d) has no Gherkin; no positive scenario for phone-only account creation without government ID |
| B6 Convention compliance | 15 | 95 | 14.25 | Named-owner rule ✓; ISO-8601 dates ✓; RFC 2119 ✓; stale v2.5.0 pins corrected; §12 scope-note pin potentially stale (Low) |
| **Total** | **100** | — | **87.15%** | Rounded to **87%** |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **High** | B4, B5 | §8 Gherkin, FR-132 Scenario 6 ("No government ID — enrolment denied with disclosure") | The scenario was written for the pre-ruling design (government-ID check at account creation) and was not updated in v2.12.0. It asserts `Then the enrolment is denied` and `And the denial message states plainly that a valid government ID is required to create an account in v1`. Both statements directly contradict (a) the 2026-08-24 ruling ("government-ID check gates COUNTING, never joining"), (b) FR-132(a) normative text ("The system MUST NOT refuse account creation or party membership for absence of a government-ID document"), and (c) the explicit check instruction to confirm no surviving text says a person without a government ID cannot create an account or join. This is a residual exclusion statement in the acceptance criteria: if implemented and tested against this Scenario 6, the system will wrongly deny account creation to persons without government IDs — the exact opposite of what the ruling requires. | **Delete Scenario 6 and replace it with two scenarios:** (a) a positive scenario: given a person who has completed phone-only verification and has NO government ID, when they register, then the account is created successfully (phone verification alone is sufficient; no government-ID step appears at account creation); (b) a counting-action-blocked scenario: given that phone-only member, when they attempt a FR-123 counting action (contribute to official party strength / cast a binding vote / stand as a candidate), then the FR-131 clause (d) notice is displayed (stating current open-tier status, which action requires ID verification, what does not count, how to complete the government-ID check), and the counting action is refused while their open-tier account remains active and unaffected. |
| ISS-02 | **Medium** | B2, B4 | §4.24 (Three-tier privacy, FR-082–FR-086); §4.41 TWO-AXIS NOTE line ~853 | The decision record §5.1 explicitly required: "ADD: a cross-reference note in both §4.24 (three-tier privacy model) and §4.41 (verification axis) explicitly stating that the two axes are orthogonal." The TWO-AXIS NOTE was correctly added in §4.41. However, §4.24 (FR-082–FR-086) contains no cross-reference to the TWO-AXIS NOTE or to §4.41. Additionally, the TWO-AXIS NOTE at its closing line states "Cross-referenced from §4.46 and §4.24" — a factually inaccurate claim: §4.24 has no such cross-reference. An implementer reading §4.24 receives no pointer to the distinction between the privacy-disclosure axis and the verification axis, creating the exact conflation risk the decision record identified as a defect risk. | Add a cross-reference box at the top of §4.24 (before FR-082) stating: "NOTE (v2.12.0): The Supporter/Worker/Candidate tiers in this section are the **privacy-disclosure axis** — a self-declared tier governing identity visibility. This axis is orthogonal to the **verification axis** (§4.41: open/unverified tier vs verified/counting tier). A verified Supporter-tier member holds COUNTING-action eligibility and DOES vote; an unverified open-tier participant cannot take COUNTING actions regardless of their privacy-tier self-declaration. See §4.41 TWO-AXIS NOTE." Then correct the TWO-AXIS NOTE closing line from "Cross-referenced from §4.46 and §4.24" to "Cross-referenced to §4.24 and §4.46." |
| ISS-03 | **Medium** | B2, B5 | §8 Gherkin, FR-131 (scenarios present: 1–4 covering clauses a–c only) | FR-131 clause (d) was added in v2.12.0 as a new normative obligation: wherever an open-tier (phone-verified but not ID-verified) participant attempts a FR-123 counting action, the UI MUST display a plain-language notice stating (i) their current participation is open-tier only, (ii) that specific action requires government-ID verification, (iii) what specifically does not count, and (iv) how to become a counting member. The notice MUST be shown before the action is refused and MUST be non-dismissable. The changelog confirms the clause was added to FR-131 but §8 Gherkin for FR-131 was not updated (Scenarios 1–4 cover clauses a–c: pre-ballot honesty notice, post-vote confirmation, no-anonymity-claim materials, absence-of-bypass-path test). No scenario exists for clause (d). Following the document's consistent pattern (every new normative obligation gets a Gherkin scenario), and given that clause (d) has multiple specific testable elements (trigger, content, timing, dismissability), the absence is a testability gap. | Add FR-131 Scenario 5 (or equivalent) covering clause (d): "Given a participant in a v1 deployment who has completed phone-only verification (open-tier) but has not completed the government-ID check, When that participant attempts a FR-123 counting action — contributing to a party's official strength number, casting a binding vote, or standing as a candidate — Then the FR-131 clause (d) notice is displayed before the action is refused, And the notice states in plain language: (i) the participant's current participation is open-tier only; (ii) that specific action requires government-ID verification per FR-123; (iii) what specifically does not count (official strength contribution, binding vote, candidacy); (iv) how to become a counting member by completing the government-ID check (FR-132 §(b)), And the notice is non-dismissable, And the participant's account and open-tier access are unaffected by the refusal of the counting action." |
| ISS-04 | **Medium** | B2, B5 | §8 Gherkin, FR-132 Scenarios 1–6 | There is no positive Gherkin scenario explicitly testing the post-ruling behaviour: a person with phone verification alone (no government-ID document) can create an account and remain an open-tier participant. FR-132 Scenario 1 (one account per verified phone number) tests the phone-only path for account creation but does not explicitly confirm "without presenting a government-ID document." Combined with the wrong Scenario 6 (ISS-01) being the only scenario that addresses the "no government ID" case, there is no Gherkin coverage confirming the post-ruling positive behaviour. This gap is independent of ISS-01: even after ISS-01 is fixed by replacing Scenario 6, a new explicit positive scenario remains needed. | Add an explicit scenario to FR-132 Gherkin (e.g. Scenario 7 or integrated with ISS-01 fix): "Given a person who has no government-ID document and completes SMS verification with a valid phone number, When they submit their account registration, Then the account is created successfully, And no government-ID document is required or requested during account creation, And the member has open-tier access (reading, following, watching, discussing, supporting, organising) with no further steps required." |
| ISS-05 | **Low** | B6 | §12 session scope note (~line 2694) | The scope note says "Doc 03 v2.5.1 (Approved) is the current architect baseline." Doc 03 v2.6.0 (In Review) now exists, produced after the product-owner's v2.12.0 edits. Since v2.5.1 is still the most recent Approved version (v2.6.0 is In Review only), the claim is defensibly accurate for the approved baseline; however, "current" is ambiguous and may mislead a downstream reader into thinking v2.5.1 is the only recent version. | In the next version, update the §12 scope note to clarify: "Doc 03 v2.5.1 (Approved) is the current APPROVED architect baseline; Doc 03 v2.6.0 (In Review) exists and may supersede some references on approval." |

> **Low** issues (ISS-05) do not block the pass bar. **ISS-01 (High)** and **ISS-02/03/04 (Medium)** each force a FAIL.

---

## 5. Detailed findings by review obligation (per review assignment)

### Check 1 — Residual "cannot enrol / excluded from the platform" statements

Grep sweep across the full document for `enrol`, `exclu`, `hard gate`, `eligibility gate`,
`no government ID`.

**Surviving normative-text hits (ISS-01):** §8 FR-132 Scenario 6:
- `Then the enrolment is denied`
- `a valid government ID is required to create an account in v1`

Both say a person without a government ID cannot create an account — directly contradicting the
ruling and FR-132(a). This is in the §8 acceptance criteria (Gherkin), not a comment or
changelog note.

**Correctly amended hits (not defects):**
- FR-129: "in Phase 1 a person without Aadhaar cannot enrol in the pilot region" — this refers
  to the v2 ZK-based personhood enrolment (Aadhaar ZK path) in the Phase-1 single-rail pilot;
  it is the separately accepted limitation per TD-05/ADR-016, unchanged by the 2026-08-24
  ruling. Not a defect.
- FR-133 normative text: "a person who cannot present a valid government ID is excluded from
  COUNTING actions by FR-132, but they are NOT excluded from the platform" — correct. ✓
- §4.46 rationale two-layer note: "The system MUST NOT require a government-ID document to
  create an account or join a party. FR-020 is absolute and unamended." ✓
- §16.5 government-ID row: "RESOLVED — gate applies to COUNTING actions only; BR-003 and
  FR-020 hold unamended." ✓

### Check 2 — Cross-reference integrity

| ID | Claimed location | Exists and correct? |
|----|-----------------|---------------------|
| FR-020 | §4.6 (absolute join right, unamended) | ✓ Referenced in FR-122, FR-132(a), §16.5 RESOLVED row |
| FR-122 | §4.41 (open-tier access) | ✓ Unchanged; correctly cited as v1 backing |
| FR-123 | §4.41 (counting actions require verification) | ✓ Unchanged; correctly cited as the counting gate |
| FR-124 | §4.41 (verified status private to holder) | ✓ Unchanged |
| FR-131 | §4.45 (v1 honesty notice with clause (d) added) | ✓ Normative text correct; Gherkin gap (ISS-03) |
| FR-132 | §4.46 (two-layer gating — phone for account creation; ID for COUNTING only) | ✓ Normative text correct; Gherkin gap (ISS-01, ISS-04) |
| FR-133 | §4.47 (spam-resistance flag-don't-block; scope excludes FR-132 COUNTING gate) | ✓ |
| BR-003 | §3 (frictionless joining) | ✓ Unamended; §16.5 RESOLVED row confirms |
| DES-095 | Cited as v1 backing amended, Doc 03 v2.4.1 (Approved) | ✓ (verified in prior review; no change in v2.12.0) |
| DES-098 | Cited as honesty-notice design, Doc 03 v2.3.0 §10.13.6 | ✓ |
| DES-100 | Cited as field-level disposition, Doc 03 v2.5.1 (Approved) §10.13.9 | ✓ |
| ADR-024 | Cited as IEligibilityVerifier seam | ✓ Confirmed at v2.5.1 |
| ADR-025 | Cited for government-ID check amendment §(e); §(c-viii) update owed | ✓ Owed update recorded in §12 scope note |
| H-15 | §16.4 | ✓ Updated: T-06 ACCEPTED — deferred with disclosure |
| H-19 | §16.4 | ✓ Rewritten: exclusion is from COUNTING, not from platform; honest and plain |
| T-06 | §16.5 | ✓ ACCEPTED — deferred with disclosure (Rathish, 2026-08-24) |
| T-07 | §16.5 | ✓ RESHAPED — pending CON-015; reaffirmed unchanged |

### Check 3 — Stale version pins

| Location | Pin found | Correct? |
|----------|-----------|----------|
| §11 Counts label | "Counts (v2.12.0)" | ✓ Matches document version |
| §4.46 source note | Doc 03 v2.4.1 (Approved); v2.5.1 (Approved) §10.13.9 | ✓ Correct references to approved content |
| §4.47 source note | Doc 03 v2.4.1 (Approved) | ✓ |
| §16 source block | Doc 03 v2.3.1 (Approved); v2.4.1 (Approved); v2.5.1 (Approved) | ✓ All corrected from stale v2.5.0 (In Review) |
| §16.4 H-15/H-17/H-18 | Doc 03 v2.5.1 (Approved) | ✓ Corrected from stale v2.5.0 |
| §16.5 T-01..T-08 rows | Doc 03 v2.5.1 (Approved) §10.13.7 | ✓ Corrected from stale v2.5.0 |
| §16.5 trailing note | Doc 03 v2.5.1 (Approved) §10.13.7 | ✓ Corrected |
| §12 scope note | "Doc 03 v2.5.1 (Approved) is the current architect baseline" | Low (ISS-05): v2.6.0 In Review now exists; v2.5.1 remains current APPROVED |

No surviving `v2.5.0 (In Review)` pins in normative sections. The stale-pin sweep from v2.12.0 was effective.

### Check 4 — Counts consistency

- §11 label: "Counts (v2.12.0)" ✓
- Must count: **114** (unchanged) ✓ — confirmed at §11 table; scope note: "Must count stays at 114" ✓
- FR minted: "133 FR minted (131 active + 2 superseded)" ✓
- §16.3.1 tally: "IN-v1 107 · PARTIAL 20 · DEFERRED-v2 4 · SUPERSEDED-n/a 2" ✓ (unchanged)
- No new FR minted in v2.12.0 per scope note ✓

### Check 5 — Internal consistency §4.46 / §4.47 / §16.3 / §16.4 / §16.5

All normative sections are internally consistent with each other and with the ruling:
- §4.46 rationale: two-layer gating correctly stated (phone for account creation; ID for COUNTING only) ✓
- FR-132(a): "MUST NOT refuse account creation or party membership for absence of government-ID" ✓
- FR-133 scope sentence: "a person who cannot present a valid government ID is excluded from COUNTING actions by FR-132, but they are NOT excluded from the platform" ✓
- §16.3 FR-132 row: "MUST NOT refuse membership for absence of ID; government-ID check required only for FR-123 counting actions" ✓
- §16.3 FR-133 row: "spam layer never excludes from platform membership" ✓
- §16.3 NFR-004 row: "deduplication applies at counting-verification, not at account creation" ✓
- §16.4 H-19: "IS excluded from a permanent counting class" — honest and explicit ✓; NOT excluded from platform ✓
- §16.5 government-ID vs BR-003/FR-020: RESOLVED ✓
- §4.47 BR trace rationale: correctly notes §16.5 contradiction row is RESOLVED ✓

**The only internal contradiction** is between FR-132(a) normative text (correct) and FR-132 Gherkin Scenario 6 (wrong) — ISS-01.

### Check 6 — Honesty at H-19

H-19 has been rewritten (v2.12.0 correction). The entry:
- Correctly states the exclusion is from COUNTING actions (official strength, binding vote,
  candidacy), not from the platform.
- States that open-tier participation remains fully available with phone verification alone.
- Names the affected population explicitly: "refugees, stateless persons, people with expired
  documents, undocumented persons."
- States this is "a real limitation on a political platform" and "a meaningful limitation on
  political participation."
- Notes the affected population "are the same population the platform's stated mission (Doc 01)
  is designed to serve."
- States the person "IS excluded from a permanent counting class."
- Acknowledges the §16.5 row is RESOLVED and the gate applies to COUNTING only.

H-19 is honest, plain, and has not been softened. ✓

### Check 7 — Named-owner rule, RFC 2119, ISO-8601, Gherkin for new normative clause

- Named-owner rule: FR-131 (Nadia Hassan) ✓; FR-132 (Marcus Adeyemi) ✓; FR-133 (Rafael Duarte) ✓
- FR-131 clause (d) is an amendment to FR-131; owner unchanged (Nadia Hassan) ✓
- RFC 2119: MUST/SHOULD/MAY used consistently ✓
- ISO-8601 dates throughout ✓
- FR-131 clause (d) Gherkin: **ABSENT** (ISS-03 — Medium)
- FR-131 clause (d) traces to BR-005 (honesty about voting mechanism) and BR-009 (informed
  consent before voting) via the existing FR-131 traces — adequate ✓

### Check 8 — Surfaced-not-reconciled discipline

**TWO-AXIS naming collision:** Surfaced correctly in §4.41 TWO-AXIS NOTE with the statement
"Naming collision surfaced to the approver for terminology clarification (see decision record §6);
the operative interpretation is not in doubt." The note explicitly states it is SURFACED, not
resolved, and the operative interpretation is adopted for downstream amendments. ✓

However, the claim "Cross-referenced from §4.46 and §4.24" is inaccurate (§4.24 has no
cross-reference) — ISS-02.

**Definition-B Gate-2 date vs v1 gate date incoherence:** The decision record §5.3 routes this
exclusively to the project-manager for Doc 13 as a RISK item. Doc 02 (a requirements document)
is not the natural home for project-scheduling incoherences. Doc 02 v2.12.0 is silent on this
item — which is appropriate given the decision record's routing. The incoherence should be
verified in Doc 13 separately. Not a Doc 02 defect.

---

## 5. Routing instruction (to the owning role)

**FAIL.** Route to the **product-owner** (Priya Raghunathan) for rework. The following fixes are
required:

1. **ISS-01 (High):** Replace FR-132 Scenario 6 in §8 with correct post-ruling scenarios — one
   confirming phone-only account creation succeeds without government ID, one confirming that a
   phone-only member's counting action is blocked with the FR-131 clause (d) notice while the
   open-tier account remains active.
2. **ISS-02 (Medium):** Add a cross-reference note at the top of §4.24 pointing to the TWO-AXIS
   NOTE in §4.41. Correct the TWO-AXIS NOTE closing line to accurately describe the cross-referencing.
3. **ISS-03 (Medium):** Add a Gherkin scenario to §8 for FR-131 clause (d) — the open-tier
   non-counting disclosure notice (trigger, required content items i–iv, non-dismissable property,
   open-tier account unaffected).
4. **ISS-04 (Medium):** Add an explicit positive Gherkin scenario to §8 for FR-132 confirming that
   a person with no government ID who completes phone verification creates an account successfully.
5. **ISS-05 (Low):** Update §12 scope note to clarify Doc 03 v2.5.1 is the current APPROVED
   baseline, noting that v2.6.0 In Review now exists.

Rework MUST produce a **new version** (bump the `Version:` semver — minor bump required for
High+Medium issues — and set `Status: In Review`). The loop re-reviews the new version at cycle 2.

---

_Reviewer: reviewer-qa (neutral) — not the document's owning role (product-owner)_
_Review date: 2026-08-24_
_Decision record consulted: `artifacts/status/DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md`_
_Prior review consulted: `artifacts/reviews/02-requirements-srs-v2.11.0-business-cycle1.md`_
_Source document navigated end-to-end (grep + targeted reads) before scoring: confirmed._
