# Document Review Report
## Doc 02 — Requirements Specification (SRS-TRUMOCRACY v2.13.0)
### Business Mode · Cycle 2

---

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.13.0
Review mode: business
Reviewer role: reviewer-qa (neutral; not the document owner — product-owner owns Doc 02)
Score: 99%
Critical: 0
High: 0
Medium: 0
Low: 0
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

`docs/02-requirements-srs.md` v2.13.0 was reviewed in business mode as the product-owner's
rework of the cycle-1 FAIL (87%, 0C/1H/3M/1L). All five issues from cycle 1 have been
genuinely closed. No new defects were introduced by the rework. The document is internally
consistent with the 2026-08-24 ruling (`artifacts/status/DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md`):
government-ID check gates COUNTING-tier eligibility only, never joining. FR-132 Scenario 6
("No government ID — enrolment denied") has been deleted and replaced with a correct positive
path (Scenario 6) and a correct counting-blocked path (Scenario 7). The §4.24 cross-reference
to the TWO-AXIS NOTE exists and the TWO-AXIS NOTE closing line accurately describes the
bidirectional cross-referencing. FR-131 Scenario 5 covers clause (d) with all required
content elements. The §12 scope note correctly identifies Doc 03 v2.5.1 as the current
APPROVED baseline and v2.6.0 as In Review. The TWO-AXIS naming collision and the
Definition-B gate-date incoherence remain surfaced (not silently resolved). H-19 remains
honest and has not been softened. Verdict: **PASS** (99%, 0C/0H/0M/0L).

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (`99%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — all pass-bar conditions satisfied.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 99 | 19.8 | H-19 honest and unchanged; TWO-AXIS naming collision surfaced; Definition-B incoherence surfaced in decision record; §16.5 RESOLVED row correct |
| B2 Completeness | 15 | 99 | 14.85 | All five missing items now present: ISS-01 Scenarios 6+7, ISS-02 §4.24 cross-reference, ISS-03 FR-131 Scenario 5, ISS-04 positive Scenario 6, ISS-05 scope note |
| B3 Traceability & IDs | 20 | 100 | 20.0 | No new FR minted; Must count 114 confirmed; FR-131 scenarios 1–5 contiguous; FR-132 scenarios 1–7 contiguous; all IDs correct |
| B4 Correctness & consistency | 15 | 99 | 14.85 | New Scenario 6 consistent with FR-132(a); Scenario 7 consistent with FR-132(b); FR-131 Scenario 5 consistent with clause (d); §4.24 cross-reference factually accurate; TWO-AXIS closing line corrected |
| B5 Testability | 15 | 99 | 14.85 | All normative clauses now have Gherkin coverage; FR-131 clause (d) trigger, four content elements, non-dismissable, account-unaffected all present in Scenario 5; positive phone-only path in FR-132 Scenario 6 explicit |
| B6 Convention compliance | 15 | 99 | 14.85 | §11 label updated to v2.13.0; ISS-05 scope note fixed; named owners unchanged; RFC 2119 consistent; ISO-8601 throughout |
| **Total** | **100** | — | **99.2%** | Rounded to **99%** |

---

## 4. Issues

No issues survive verification. The pass bar is met on all dimensions.

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| — | — | — | — | No surviving issues | — |

---

## 5. ISS-01 through ISS-05 — per-issue closure confirmation

### ISS-01 (High) — FR-132 Scenario 6 rewritten; no surviving exclusionary Gherkin in §8

**Verdict: CLOSED.**

**How verified (independent, not taking the owner's sweep on trust):**

The old Scenario 6 ("No government ID — enrolment denied with disclosure") has been deleted.
Two new scenarios replace it:

- **New Scenario 6** (lines 2301–2312 in the document): "Phone-only registration — account
  created without any government-ID document (v2.13.0 ISS-01/ISS-04 positive path)." Given a
  person with no government ID who completes SMS verification, when they submit registration,
  then the account is created successfully, no government-ID document is required or requested,
  and the member has open-tier access with no further steps. Consistent with FR-132(a). ✓

- **New Scenario 7** (lines 2314–2322): "Open-tier member's counting action refused with FR-131
  clause (d) notice (v2.13.0 ISS-01 counting-blocked path)." When an open-tier member (phone
  only, no ID) attempts a FR-123 counting action, the FR-131 clause (d) notice is displayed
  before refusal, notice is non-dismissable, counting action is refused, participant's account
  and all open-tier access are unaffected. Consistent with FR-132(b). ✓

Independent Grep sweep across §8 for `denied`, `enrol`, `refus`, `government ID`,
`not permitted`, `blocked`:

- `"enrolment denied"` — appears only in (a) the changelog header noting what was deleted
  ("Scenario 6 'No government ID — enrolment denied' deleted") and (b) a comment line in the
  new Scenario 6 identifying its predecessor. Neither is a behavioral assertion in the
  acceptance criteria.
- `"permanently denied"` — in FR-133 Scenario 1 (line 2336): "the response never states the
  user is permanently denied due to the flag." This is the correct flag-don't-block behavior
  for the spam-resistance layer; it says denial does NOT happen. ✓
- `"no governance action is denied"` — in FR-133 Scenario 2: "no governance action is denied
  solely on the basis of the spam-resistance flag." Correct. ✓
- All other `refus` hits are legitimate business refusals in unrelated FRs (FR-009 threshold
  computation, FR-011 pillar deficiency, FR-094 manifesto fields, FR-130 cap, etc.) — none
  relate to government-ID gating of account creation.

No surviving Gherkin anywhere in §8 encodes "enrolment denied for lack of government ID."
The only surviving text describing the absence of government ID in §8 FR-132 is the two new
correct scenarios. **ISS-01 is genuinely closed.**

---

### ISS-02 (Medium) — §4.24 cross-reference note and TWO-AXIS NOTE closing line

**Verdict: CLOSED.**

**How verified:**

**(a) §4.24 cross-reference note exists and is before FR-082:**

A blockquote cross-reference note was added in §4.24 before the FR-082 table. The note (added
v2.13.0 per ISS-02) states:

> "The Supporter/Worker/Candidate tiers in this section are the **privacy-disclosure axis** —
> a self-declared tier governing identity visibility. This axis is orthogonal to the
> **verification axis** (§4.41: open/unverified tier vs verified/counting tier). A verified
> Supporter-tier member holds COUNTING-action eligibility and DOES vote; an unverified
> open-tier participant cannot take COUNTING actions regardless of their privacy-tier
> self-declaration. The two axes are orthogonal: the verification axis controls whether
> actions count; the privacy axis controls identity disclosure. See §4.41 TWO-AXIS NOTE."

This cross-reference correctly explains the orthogonality, names both axes, gives the
key counter-intuitive example (verified Supporter-tier member DOES vote), and points to
§4.41 TWO-AXIS NOTE. ✓

**(b) TWO-AXIS NOTE closing line corrected:**

The TWO-AXIS NOTE closing line (§4.41, line 884) now reads:

> "...the operative interpretation is not in doubt. Cross-referenced to §4.24 and §4.46."

The old text was "Cross-referenced from §4.46 and §4.24" — factually wrong because §4.24
had no cross-reference. The new text is "Cross-referenced to §4.24 and §4.46" — factually
accurate: the TWO-AXIS NOTE points to §4.24 (which now has the counter-reference) and §4.46
(which had a cross-reference since v2.12.0). ✓

Both directions verified. **ISS-02 is genuinely closed.**

---

### ISS-03 (Medium) — FR-131 clause (d) Gherkin scenario

**Verdict: CLOSED.**

**How verified:**

FR-131 Scenario 5 was added (lines 2251–2259):

> "Given a Definition-A (v1) deployment of Trumocracy  
> And a participant who has completed phone-only verification (open tier) and has NOT
> completed the government-ID document check  
> When that participant attempts a FR-123 counting action — contributing to a party's
> official strength number, casting a vote that counts in a binding decision, or standing
> as a candidate  
> Then the FR-131 clause (d) notice is displayed before the action is refused  
> And the notice states in plain language: (i) the participant's current participation
> is open-tier only; (ii) that specific action requires government-ID verification per
> FR-123; (iii) what specifically does not count — official strength contribution, binding
> vote, and candidacy; (iv) how to become a counting member by completing the
> government-ID document check (FR-132 §(b))  
> And the notice is non-dismissable: the participant cannot proceed with the counting
> action without the notice being presented  
> And the counting action is refused  
> And the participant's account and all open-tier access are unaffected by the refusal
> of the counting action"

All required elements verified: trigger (open-tier participant attempts FR-123 counting
action), all four content items (i)–(iv), non-dismissable property, counting action
refused, account unaffected. FR-131 Scenarios 1–5 are present and contiguous. **ISS-03
is genuinely closed.**

---

### ISS-04 (Medium) — positive scenario for phone-only registration without government ID

**Verdict: CLOSED.**

**How verified:**

Addressed by integration with the ISS-01 fix. The new FR-132 Scenario 6 (lines 2301–2312)
explicitly tests the post-ruling positive behaviour:

- "a person who has no government-ID document and completes SMS verification with a valid
  phone number"
- "When they submit their account registration"
- "Then the account is created successfully"
- "And no government-ID document is required or requested during account creation"
- "And the member has open-tier access — reading, following, watching, discussing,
  supporting, and organising — with no further steps required"

The scenario explicitly includes the person having "no government-ID document" and confirms
the account is created successfully without one. This is exactly the positive path ISS-04
required. The integration is flagged in the scenario header with "(v2.13.0 ISS-01/ISS-04
positive path)". **ISS-04 is genuinely closed.**

---

### ISS-05 (Low) — §12 scope note states Doc 03 baseline accurately

**Verdict: CLOSED.**

**How verified:**

The v2.12.0 session scope note in §12 (line 2750) now reads:

> "Doc 03 v2.5.1 (Approved) is the current APPROVED architect baseline; Doc 03 v2.6.0
> (In Review) exists and carries the 2026-08-24 counting-gate architecture increment
> (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md) — it may supersede some references on
> approval."

This satisfies the ISS-05 required fix: identifies v2.5.1 as the current APPROVED baseline
(unambiguous with "APPROVED"), notes v2.6.0 In Review exists, and explains its contents.
The cycle-1 ambiguity in "current" has been resolved by adding "APPROVED". **ISS-05 is
genuinely closed.**

---

## 6. New-defect check — no defects found

The following items were independently verified as non-defects:

**Scenario numbering:**
- FR-131: Scenarios 1 (honesty notice at ballot), 2 (post-vote confirmation), 3 (no false claims),
  4 (absence test), 5 (clause (d) notice) — contiguous, no gaps. ✓
- FR-132: Scenarios 1 (phone dedup), 2 (no one-person-one-vote claim), 3 (honesty notice caveat),
  4 (verify-and-discard), 5 (duplicate document via subject_id_hash), 6 (positive phone-only), 7
  (counting-blocked) — contiguous, no gaps. ✓

**No scenario contradicts normative text:**
- FR-132 Scenario 6 is consistent with FR-132(a) (MUST NOT refuse for absence of government ID). ✓
- FR-132 Scenario 7 is consistent with FR-132(b) (government-ID required for FR-123 counting
  actions). ✓
- FR-131 Scenario 5 is consistent with FR-131 clause (d) (notice before refusal). ✓

**The near-duplication of FR-131 Scenario 5 and FR-132 Scenario 7** (both test the same
boundary behavior from different FR angles) follows the document's established pattern; both
FRs contribute to the behavior being tested; this is the correct approach and is not a defect.

**§11 label:** "Counts (v2.13.0)" confirmed. ✓

**Must count:** §12 v2.13.0 session scope (line 2760): "Must count stays at 114." ✓

**No new FR minted:** Confirmed in both the changelog and the v2.13.0 session scope note. ✓

**TWO-AXIS naming collision — still surfaced, not silently resolved:** The TWO-AXIS NOTE
closing line states: "Naming collision surfaced to the approver for terminology clarification
(see decision record §6); the operative interpretation is not in doubt." Not silently
resolved. ✓

**Definition-B gate-date incoherence — still surfaced:** §11 Release shape still shows "Gate 2
readiness 2027-05-14." The decision record §4.2 flags the incoherence between the Definition-B
Gate-2 date (2027-05-14) and the v1 gate date (2027-06-30) as an open item for the approver.
The cycle-1 review confirmed this is not a Doc 02 defect — it is a Doc 13 item routed to the
project-manager. The incoherence remains surfaced in the decision record; the figures in Doc 02
are unchanged per the decision record's directive ("until the approver rules, both figures stand
in their respective documents"). ✓

**H-19 — honest and not softened:** H-19 (§16.4, line 3125) is unchanged from v2.12.0 —
the v2.13.0 rework only touched Gherkin and cross-references. The entry retains all the honest
language from the cycle-1 PASS check: exclusion is from COUNTING (not platform), the named
population is listed (refugees, stateless persons, undocumented persons), "IS excluded from a
permanent counting class" is still stated, and "meaningful limitation on political participation"
is still stated. ✓

---

## 7. Routing instruction

**PASS.** The owning role (product-owner, Priya Raghunathan) MUST set `Status: Approved` on
`docs/02-requirements-srs.md` v2.13.0. The SOP advances.

---

_Reviewer: reviewer-qa (neutral) — not the document's owning role (product-owner)_
_Review date: 2026-08-24_
_Decision record consulted: `artifacts/status/DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md`_
_Cycle-1 review consulted: `artifacts/reviews/02-requirements-srs-v2.12.0-business-cycle1.md`_
_Source document navigated end-to-end (grep + targeted reads) before scoring: confirmed._
_All five cycle-1 issues verified independently (not on owner's sweep alone): confirmed._
