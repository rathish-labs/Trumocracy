# Technical Review — Doc 06 Coding & UT v2.4.1, Cycle 2 of 5

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.4.1
Document:       CODE-TRUMOCRACY
Document version: 2.4.1
Cycle:          2 of 5
Review mode:    technical
Reviewer role:  reviewer-qa (neutral — engineer owns Doc 06)
Review date:    2026-08-29
Reviewer:       reviewer-qa subagent (independent)
Score:          100%
Critical:       0
High:           0
Medium:         0
Low:            0
Verdict:        PASS
```

---

## Scope

Cycle-2 rework review. Both Low findings from cycle 1 (ISS-01 and ISS-02) were reworked
via comments only — no test behaviour changed, no new tests added, suite count unchanged.
This review verifies the fixes and confirms no new issues were introduced.

---

## ISS-01 Resolution: SCOPE comments in UT-0876 and UT-0879

**Cycle-1 finding:** UT-0876 and UT-0879 in `apps/web/test/proposals.test.tsx` scanned
button text using regex. Their describe-block names ("offers NO control that lets one
author act on another's proposal", "offers no control that skips a stage") read as the
primary security guards for the FR-090 fairness and FR-091 lifecycle properties. They are
UI-text legibility checks, and the primary guards live at the service and protocol layers.

**Fix verified:**

UT-0876 now carries:
```
// SCOPE: this is the UI half — it checks the surface does not CLAIM a capability it
// does not have. The primary guard for the FR-090 fairness property is UT-0836, which
// asserts the absence on the ProposalService surface itself; if the service ever grew
// such a method, UT-0836 fails whether or not anyone wired a button to it.
```

UT-0879 now carries:
```
// SCOPE: UI half again — the enforcement lives in the protocol rule
// (assertStageTransition, UT-0091/0092) and the service signature (UT-0842). This asserts
// only that the surface offers no control implying a skip is possible.
```

Both comments name the primary guard by test ID, make explicit that the test covers only
the UI text half, and explain the consequence of each enforcement point failing (UT-0836
fails regardless of UI wiring for FR-090; protocol enforcement catches any skip attempt
for FR-091). The fix is accurate and sufficient.

**No test assertion changed.** The SCOPE comments are documentation only.

---

## ISS-02 Resolution: takesNoVerifier() documented as one leg of three

**Cycle-1 finding:** The `takesNoVerifier()` helper in
`packages/sdk/test/proposals.test.js` parsed function source for the literal string
"verifier" in the parameter list, but did not document that an aliased parameter name
would escape the regex. The real guards are the spy assertion and `service._verifier`
structural check.

**Fix verified:**

The helper now reads:
```javascript
/**
 * Assert a method takes no eligibility verifier. Reading `.length` is not enough — a
 * parameter with a default is not counted — so inspect the declared parameter list.
 *
 * This alone is NOT the guarantee: a differently-named parameter would slip past the
 * regex. It is one leg of a three-part check, and the other two are the real ones — the
 * spy assertion (`verifyEligibility` was never called) and the structural assertion
 * (`service._verifier` is undefined, so the service holds no verifier to reach).
 */
```

The documented limitation is precisely the aliasing escape identified in cycle 1. The
three-part check structure is named explicitly. The fix is accurate and sufficient.

**No test assertion changed.**

---

## Suite Count and Changelog Accuracy

The v2.4.1 changelog entry states: "No test behaviour changed; suite unchanged at 608."

This is accurate. The changes to `apps/web/test/proposals.test.tsx` and
`packages/sdk/test/proposals.test.js` are comment-only edits. No `it()` block, `expect()`
call or test setup was modified.

The changelog accurately describes both ISS-01 (SCOPE comments in UT-0876/0879 naming
primary guards by test ID) and ISS-02 (takesNoVerifier one-leg-of-three documentation).

---

## No New Issues

The comment-only rework introduces no new findings. The underlying test behaviour, the
test assertions, and the described security properties are unchanged from cycle 1.

---

**Score: 100% / 0C / 0H / 0M / 0L — PASS**
