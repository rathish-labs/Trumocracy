# Document Review — Doc 07 Test Cases & Suites v2.4.2 (technical, cycle 1)

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.4.2
Document:    Test Cases & Suites — Trumocracy (TC-TRUMOCRACY)
Version:     2.4.2
Review mode: technical
Cycle:       1 of 5
Reviewer:    reviewer-qa (neutral — tester owns Doc 07; reviewer-qa is independent verifier per RACI)
Date:        2026-08-29
Score:       98%
Critical:    0
High:        0
Medium:      0
Low:         1
Verdict:     PASS
```

---

## What was checked

1. Every UT id cited by TC-3542..TC-3563 located in its stated test file and confirmed to exist.
2. TC Expected column verified against the actual UT assertions.
3. Count arithmetic: TS-PROPOSALS cases, Total, Automated, Blocked, Anchors, Expanded, Inherited.
4. §9 execution log: R-15 and R-16 rows verified.
5. TC-3544 / UT-0872 judgment (see below).
6. Suite preamble FR-080 exclusion bullet and struck-through status.
7. Whether any behaviour the feature relies on lacks a TC.

---

## UT-ID verification — all 22 cases confirmed

All UTs were located in their stated files. No TC cites a non-existent UT.

**Protocol (`packages/protocol/test/proposals.test.js`):**
UT-0087, UT-0088 (TC-3542) · UT-0089 (TC-3543/3547) · UT-0090 (TC-3552) · UT-0091, UT-0092
(TC-3553) · UT-0093 (TC-3554) · UT-0094 (TC-3551/3555) · UT-0095 (TC-3548/3547) — all
confirmed present with assertions matching TC descriptions. ✅

**SDK (`packages/sdk/test/proposals.test.js`):**
UT-0832 (TC-3543/3547) · UT-0833 (TC-3546) · UT-0834 (TC-3545) · UT-0835 (TC-3548) ·
UT-0836 (TC-3549) · UT-0837 (TC-3549) · UT-0838 (TC-3551) · UT-0839 (TC-3555) ·
UT-0840 (TC-3555) · UT-0841 (TC-3552) · UT-0842 (TC-3554) · UT-0843 (TC-3556) ·
UT-0844 (TC-3556) · UT-0845 (TC-3558) · UT-0846 (TC-3559) · UT-0847 (TC-3559) ·
UT-0848 (TC-3559) — all confirmed. ✅

**Web (`apps/web/test/proposals.test.tsx`):**
UT-0872 (TC-3544) · UT-0873 (TC-3544) · UT-0874 (TC-3550) · UT-0875 (TC-3550) ·
UT-0876 (TC-3550) · UT-0877 (TC-3550) · UT-0878 (TC-3554) · UT-0879 (TC-3554) ·
UT-0880 (TC-3555) · UT-0881 (TC-3557) · UT-0882 (TC-3557) · UT-0883 (TC-3560) ·
UT-0884 (TC-3561) · UT-0885 (TC-3562) · UT-0886 (TC-3563) — all confirmed. ✅

---

## TC expected-column fidelity spot-checks

**TC-3542 / UT-0087, UT-0088:** Expected claims: exactly 3 tiers, auto-Supporter, weight=1
for every tier, unknown tier refused loudly. UT-0087 asserts DEFAULT_PARTICIPATION_TIER =
SUPPORTER and votingWeightForTier returns 1 for all tiers; UT-0088 asserts
Object.values(PARTICIPATION_TIER) = ['SUPPORTER','WORKER','CANDIDATE']. ✅

**TC-3545 / UT-0834:** Expected claims structural guarantee — no verifier parameter, verifier
not called. UT-0834 uses a spy verifier and checks it was never called, uses `takesNoVerifier()`
to check the parameter list, and asserts `service._verifier === undefined`. Three-part check. ✅

**TC-3549 / UT-0836, UT-0837:** Expected claims first author has no withdraw/reject/reorder/
demote/merge/veto path, and isOriginal is provenance only. UT-0836 tests capability absence
via regex on getOwnPropertyNames; UT-0837 checks proposals map to [true, false] for isOriginal
and confirms nothing in the service consults it to decide anything. ✅

**TC-3562 / UT-0885:** Expected claims file-proposal absent while consent panel shows, both
required facts stated (permanence + participation record), no approval control matches regex.
UT-0885 asserts `queryByTestId('file-proposal')` is null at the consent-panel stage, then
checks consent-permanent matches `/lasts for the whole term|cannot undo/i` and
consent-public-record matches `/record of taking part.*public/i`. The regex tests the right
properties, not merely the presence of the word "public." ✅

**TC-3563 / UT-0886:** Expected claims member returns to Supporter with nothing recorded.
UT-0886 clicks cancel-worker and asserts worker-gate is visible (gate returned), file-proposal
is absent (still Supporter). ✅

---

## Behavioural coverage assessment

No material gap found. All FR clauses the suite touches are covered by at least one TC that
tests the right property (positive case + capability absence where applicable). The three
deliberate non-closures (FR-080 consent, FR-091 timelines, FR-092 trail completeness) are
stated plainly in the suite preamble and in the relevant case notes — explicitly, not left for
inference. The FR-080 exclusion bullet is struck through and marked RESOLVED at v2.4.1. ✅

---

## Count arithmetic

| Counter | Claimed | Derived independently | Result |
|---------|---------|----------------------|--------|
| TS-PROPOSALS cases | 22 | TC-3542..TC-3563 = 22 | ✅ |
| TS-PROPOSALS automated | 22 | all 22 are Automated | ✅ |
| TS-PROPOSALS blocked | 0 | none blocked | ✅ |
| Total cases | 465 | 443 (prior) + 22 = 465 | ✅ |
| Total automated | 233 | 211 (prior) + 22 = 233 | ✅ |
| Total blocked | 232 unchanged | no new blocked | ✅ |
| Anchors | 463 | 441 (prior v2.4.0) + 22 = 463 | ✅ |
| Expanded | 472 | 450 (prior) + 22 = 472 | ✅ |
| Inherited | 129 | 107 (pre-proposals) + 22 (v2.4.0) = 127; +2 (TC-3562/3563 at v2.4.1) = 129 | ✅ |

---

## §9 execution log

**R-15** (whole repo at Doc 06 v2.4.1): 608/608 pass — contracts 95 · protocol 150 · sdk 244 ·
ui 14 · indexer 16 · web 89. Verified in §9. ✅

**R-16** (apps/web at Doc 06 v2.4.2): 91/91 pass — web 89→91 with UT-0885/UT-0886; suite total
608→610. Verified in §9. ✅

---

## TC-3544 / UT-0872 independent judgment

**Question:** UT-0872 gained two assertions at v2.4.3 (both FR-080 facts now stated at the
gate: permanence `/lasts for the term/i` and participation-record publicity `/record of taking
part.*public/i`). Should TC-3544's Expected column enumerate these?

**Judgment: leave TC-3544 unchanged. The tester's reasoning is correct.**

Reasons:

1. **Accuracy:** TC-3544's Expected column describes what TC-3544 claims to verify: the gate
   reads as disclosure not judgement, a Supporter is not offered the filing form, and no
   approval control appears after declaring. Every one of those assertions is still true and
   still tested by UT-0872 and UT-0873. Nothing in TC-3544 is now false.

2. **Scope integrity:** TC-3562 is the designated home for the FR-080 "both facts stated
   before confirmation" evidence. That is where the closure basis was recorded (Doc 08
   v2.5.1). Adding the new gate assertions to TC-3544 would blur the scope boundary between
   TC-3544 (step-1 disclosure, no-approval, non-judgement) and TC-3562 (informed-consent
   facts before confirmation). Two cases with distinct scope serve the RTM better than one
   expanded case whose scope spans both.

3. **Version integrity:** the v2.4.2 is explicitly "source-pin sync only — no TC added,
   changed or re-statused." Editing TC-3544's Expected here would make the change appear to
   be a substantive TC change when it is not. The effect is correctly recorded in the change
   header: "evidence strengthened, not altered."

4. **Closure basis unchanged:** FR-080's closure at Doc 08 v2.5.1 rested on the consent
   panel. Adding gate-assertion text to TC-3544 could imply those assertions were part of the
   closure basis — they were not and should not appear to be.

5. **Transparency:** the change header records "EFFECT ON TC-3544: its evidence is
   strengthened, not altered." This is the correct disclosure — explicit and accurate — and
   it is the right place for it.

A future reader checking UT-0872 will find more than TC-3544 describes; the change header
explains why. That is transparency, not a gap.

---

## Issues

### ISS-01 (Low) — v2.4.2 change header claims re-verification but §9 has no run record

**Location:** §9 execution log; v2.4.2 change header.

**Observation:** The v2.4.2 change header states "Suite unchanged at 610 (web 91/91,
re-verified by the tester)." §9 has execution entries through R-16 (at Doc 06 v2.4.2) but no
R-17 corresponding to a re-run at Doc 06 v2.4.3. Prior precedent (R-14) adds an execution log
entry even for re-runs that confirm unchanged results: "Re-run to confirm the v2.3.1
documentation corrections changed no behaviour."

**Context:** The v2.4.3 change (UT-0872 gaining two assertions) is additive within an already
passing test block — the suite cannot regress without the assertions actively failing. The
claimed result (610, 91/91) is credible. But the §9 convention is to record each execution.

**Recommendation (to tester on rework):** add an R-17 entry for the Doc 06 v2.4.3 re-run
confirming 610/610 green, matching the R-14 precedent for documentation-level changes.

---

## Verdict

**PASS — 98% / 0 Critical / 0 High / 0 Medium / 1 Low**

All 22 UT ids confirmed to exist and to assert what their TCs claim. No TC without a
verifiable UT; no material behaviour lacking a TC. Count arithmetic correct end-to-end.
TC-3544 correctly left unedited: evidence strengthened, not altered; scope correctly delegated
to TC-3562. One Low (§9 missing R-17 run record) — does not affect test evidence or status.
