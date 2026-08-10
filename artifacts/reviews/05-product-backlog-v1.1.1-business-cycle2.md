# Document Review Report

```
Reviewed document: 05-product-backlog.md
Document version:  1.1.1
Review mode:       business
Reviewer role:     technical-writer (neutral — not the owning role for Doc 05)
Score:             88%
Critical:          0
High:              0
Medium:            3
Low:               3
Cycle:             2 of 5
Verdict:           FAIL
```

---

## 1. Purpose and scope

Business-rubric cycle-2 review of the VEKTOR Product Backlog v1.1.1 (2026-08-10). The owner's
per-issue change log is `artifacts/product-owner-2026-08-10T1200.md`. This report verifies each
claimed fix against the document text and checks for regressions.

OI-13 calibration: same as cycle 1 — the FR-062 vs NFR-001/NFR-024/TD-02 contradiction is
deliberately open. Doc 05 carries an OI-13 call-out at US-0076 and FE-031 consistent with Doc 02.
Quality of recording in Doc 05 matches Doc 02. Not a defect.

---

## 2. Cycle-1 issue disposition

### ISS-01 (High — NFR-007 uncovered) — FIXED

NF-09 added to §8: "Availability SLO instrumentation and error-budget dashboard (citizen write
path ≥ 99.5% monthly; public read ≥ 99.9% monthly); single-operator-failure drill confirming no
governance action blocked > 60 min; automated alerting when error budget drops below 50%."
Owner: Chen Wei. Priority: Must. Implements: NFR-007. The §12 Must-NFR coverage map now includes
"NFR-007→NF-09 (new)." ISS-01 closed.

### ISS-02 (Medium — FE-002 claims FR-005) — FIXED

FE-002 Maps-to column now reads "FR-004, NFR-004" — FR-005 removed. The benefit hypothesis,
problem statement, and US links are unchanged. ISS-02 closed.

### ISS-03 (Medium — SCR-10 incorrect FR-026 reference) — FIXED

SCR-10 now maps to "FR-020" only. FR-026 (charter proposals) removed. Alignment with the screen
description ("Party home & aggregate membership") is correct. ISS-03 closed.

### ISS-04 (Medium — US-0007/US-0038 unfalsifiable acceptance criteria) — FIXED

US-0007 AC specifies: "an adversary holding {all operator logs, all attestor credential hashes,
full public verifiable record, network timing at 1-second granularity} analyses N ≥ 10,000
independently drawn same-person action pairs / Then the adversary's advantage in correctly
identifying each pair as same-person is ≤ ε over 1/2 at 95% confidence (ε and collusion bound
per Doc 02 NFR-001 / OI-10; provisional test value ε = 0.02)."

US-0038 AC specifies the identical adversary game for ballot-voter linkage. "Better than chance"
is gone from both. ISS-04 closed.

### ISS-05 (Medium — OI-08 constants presented as normative in 6 story ACs) — FIXED

US-0022, US-0029, US-0035, US-0036, US-0058, US-0059 all carry "(example — non-normative;
normative value set at OI-08 closure)" markers. Illustrative values are now clearly identified as
non-normative. ISS-05 closed.

### ISS-06 (Medium — EP-07/US-0076 scope inconsistency with FR-066) — FIXED

EP-07 success metric now reads "100% of major-election ballots preceded by three completed debates
per candidate. (ISS-06: aligned to FR-066 'major election' scope.)" US-0076 AC opens "Given a
major election (as defined in Doc 02 §14)." Both are aligned with the §14 Glossary definition
added to Doc 02 v1.1.1. ISS-06 closed.

### ISS-07 (Low — §9 point totals incorrect) — FIXED

§9 now reads: "Total (v1.1.1): 83 stories, approximately 499 points (v1.0.0 was 70 stories at
approximately 415 points (corrected from 396; prior ISS-07); 13 new stories from CR-v1.1.0 add
approximately 84 points at preliminary estimates). (ISS-07: v1.0.0 base corrected to actual point
sum; total revised accordingly.)" ISS-07 closed.

### ISS-08 (Low — §10 cadence said weekly, should be fortnightly) — FIXED

§10 now reads: "Refinement: Fortnightly, 60 minutes, product-owner-led; architect, engineer and
tester consulted (aligned with Doc 13 §8.2). (ISS-08: cadence corrected from 'weekly' to
'fortnightly' to match the project plan.)" ISS-08 closed.

### ISS-09 (Low — SCR-18 missing FR-044) — FIXED

SCR-18 now maps to "FR-042, FR-043, FR-044, FR-045" — FR-044 (grace window) added. ISS-09
closed.

### ISS-10 (Low — WSJF sequencing rationale absent) — FIXED

§3 now includes: "Sequencing rule: WSJF scores measure value density; the walking-skeleton
dependency chain determines the actual start sequence and overrides WSJF where dependency order
requires it (e.g., EP-01 must precede EP-02 because party drafting requires personhood).
(ISS-10.)" ISS-10 closed.

### ISS-11 (Low — US-0080 missing ICAO NFC chip adapter scenario) — FIXED

US-0080 ACs now include three named adapters: (1) government eID wallet (eIDAS 2.0 or
equivalent), (2) ICAO Doc 9303 NFC chip adapter (biometric passport / NFC identity card), (3)
offline paper KYC adapter (Aadhaar offline XML or equivalent). A fourth (negative) scenario tests
that a hard-coded single adapter is refused. ISS-11 closed.

---

## 3. New issues found in v1.1.1

Three Medium and three Low issues are introduced or surfaced by the rework.

### ISS-A — Medium — EP-06 success metric contradicts fixed BR-011

**Location:** §2.6 EP-06 (Anti-coercion & ballot unlinkability), outcome hypothesis.
**Observation:** EP-06 reads: "We'll know when the adversarial audit finds no receipt
construction and >=95% of reported coercion cases are successfully overridden."

The second clause (">=95% of reported coercion cases are successfully overridden") describes
the coercion-override rate as an observable operational metric. Doc 02 v1.1.1 BR-011(c)
explicitly states that this measurement is not valid: "coercion incident rate published as an
upper bound from independent incident reports with a stated methodology — not as an operational
observation rate, since re-voting is by design invisible (TD-06, FR-032)." The design forbids
distinguishing whether a coerced vote was overridden (FR-032, TD-06), so the ">= 95%" clause
names a measurement that is structurally unobservable.

The Gherkin ACs in the individual stories (US-0041, US-0042) are correctly specified — this
error is at the epic outcome hypothesis level.

The BR-011 fix in Doc 02 was not propagated to the EP-06 hypothesis. The consistent measure for
EP-06 would be: adversarial audit finds no receipt construction AND no re-vote distinguisher
(corresponding to BR-011(a) and BR-011(b)).

**Severity:** Medium — an outcome hypothesis that contradicts the source BR and cites an
measurement explicitly ruled out by the approved design.
**Rework owner:** Priya Raghunathan.

### ISS-B — Medium — §12 Must-NFR coverage map cites wrong story for NFR-022

**Location:** §12 Must-NFR coverage map, line "NFR-022→US-0001."
**Observation:** US-0001 ("Enrol as a verified unique person") implements FR-001 only. Its
Implements field lists no NFR-022 (usability: ≥ 80% unaided completion in ≤ 10 min; SUS ≥ 75).
The story that explicitly implements NFR-022 is US-0070 ("Verify the election tally by running
the open-source verifier"), whose Implements field lists "NFR-011, NFR-012, NFR-013, NFR-006,
NFR-022." The coverage map entry is factually incorrect.

**Severity:** Medium — a traceability claim (§12) cites a story that does not implement the
cited NFR. This would require correction in the RTM (Doc 08).
**Rework owner:** Priya Raghunathan.

### ISS-C — Medium — §12 Must-NFR coverage map cites wrong story for NFR-015

**Location:** §12 Must-NFR coverage map, line "NFR-015→US-0001, SCR-01."
**Observation:** US-0001 implements FR-001 only; its Implements field does not list NFR-015
(compliance: erasure by design, legal review, pre-enrolment disclosure). The story that
implements NFR-015 is US-0003 ("Understand what is and is not kept, before enrolling"), whose
Implements field reads "FR-003, NFR-015, NFR-023." SCR-01 (Pre-enrolment disclosure & consent)
correctly surfaces this NFR via US-0003. The §12 map citation should be "NFR-015→US-0003,
SCR-01" — the screen reference is correct; the story reference is wrong.

**Severity:** Medium — a second factual error in the newly added Must-NFR coverage map, citing
the wrong story for NFR-015.
**Rework owner:** Priya Raghunathan.

### ISS-D — Low — §2 non-functional item count stale

**Location:** §2 "Contents at a glance" header.
**Observation:** §2 reads "8 explicit non-functional backlog items." After the ISS-01 fix that
added NF-09, §8 now contains 9 items (NF-01 through NF-09). The header count was not updated.
**Severity:** Low (minor off-by-one in a contents header).
**Rework owner:** Priya Raghunathan.

### ISS-E — Low — §2 references "Doc 02 v1.1.0" after source document was updated

**Location:** §2 "Contents at a glance," coverage assertion.
**Observation:** §2 reads "All 54 Must FRs in Doc 02 v1.1.0 are covered by at least one story."
The source document is now v1.1.1. No FRs were added or removed at v1.1.1, so coverage is
materially accurate, but the version pin is stale.
**Severity:** Low.
**Rework owner:** Priya Raghunathan.

### ISS-F — Low — US-0076 "Not Ready" flag not cleared after ISS-06 resolution

**Location:** US-0076 ("Complete three debates before a candidacy proceeds to the ballot"),
status field.
**Observation:** The story carries "Not Ready pending ISS-06 (depends on 'major election'
definition now resolved in Doc 02 v1.1.1 §14)." The story correctly notes that the issue is
"now resolved," but the "Not Ready" flag was not removed. The story AC is correct (it uses the
§14 definition); only the status label contradicts the inline annotation.
**Severity:** Low (inconsistency in the status field vs inline text; the AC is correct).
**Rework owner:** Priya Raghunathan.

---

## 4. Scoring

| Rubric criterion | Weight | Score | Notes |
|-----------------|--------|-------|-------|
| B1 Outcome & problem clarity | 20 | 16.0 | Most epic hypotheses strong and now observable. EP-06 outcome hypothesis contains an explicitly unobservable metric contradicting fixed BR-011 (Medium). |
| B2 Completeness | 15 | 13.5 | All 54 Must FRs covered; all 22 Must NFRs now mapped; NF-09 adds NFR-007 coverage. §2 NF count stale 8 vs 9 (Low). |
| B3 Traceability & IDs | 20 | 16.0 | Must-FR and Must-NFR coverage maps present. Two factual errors in §12 NFR-022→US-0001 and NFR-015→US-0001 (both Medium). §2 source version pin stale (Low). |
| B4 Correctness & consistency | 15 | 13.0 | OI-08 markers, adversary game ACs, and alignment all strong. EP-06 contradicts BR-011; US-0076 Not Ready flag residual. |
| B5 Testability | 15 | 14.0 | Story ACs now testable with adversary game specifications and non-normative OI-08 markers; ICAO NFC scenario added. |
| B6 Convention compliance | 15 | 14.0 | WSJF sequencing rule added; cadence corrected; ID conventions correct throughout. ISS-F (Low) a minor status-label inconsistency. |
| **Total** | **100** | **88** | |

**Verdict: FAIL** — Score 88% and three Medium issues (ISS-A, ISS-B, ISS-C). Pass bar requires
≥ 95% AND zero Critical, High, Medium.

---

## 5. Routing

Rework required. Route to **Priya Raghunathan** (product-owner, owning role for Doc 05) for
v1.1.2 rework. Cycle 2 of 5 consumed; three cycles remain before escalation.

Rework priorities:
1. **ISS-A (Medium):** Update EP-06 outcome hypothesis to align with fixed BR-011. Replace ">=95%
   of reported coercion cases successfully overridden" with an observable proxy consistent with
   BR-011(a) and BR-011(b) (adversarial audit finds no receipt construction AND no re-vote
   distinguisher).
2. **ISS-B (Medium):** Correct §12 "NFR-022→US-0001" to "NFR-022→US-0070."
3. **ISS-C (Medium):** Correct §12 "NFR-015→US-0001, SCR-01" to "NFR-015→US-0003, SCR-01."
4. **ISS-D (Low):** Update §2 NF item count from 8 to 9.
5. **ISS-E (Low):** Update §2 source version pin from "Doc 02 v1.1.0" to "Doc 02 v1.1.1."
6. **ISS-F (Low):** Remove "Not Ready pending ISS-06" flag from US-0076 (issue resolved).

**Routed to:** product-owner (Priya Raghunathan) for v1.1.2.

---

*Reviewed: 2026-08-10 | Reviewer: technical-writer (neutral) | Cycle: 2 of 5*
