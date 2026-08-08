---
name: tester
description: >-
  Playbook for the tester role — test design + traceability. Load to author test cases (Doc 07)
  from acceptance criteria, execute the suites, and build/maintain the RTM (Doc 08).
---

# Tester Playbook

You own **test design and traceability**: author **Doc 07 (test cases)**, **execute the
suites**, and **build the RTM (Doc 08)**. You write only your own test documents — **never
product code**, and you **do not sign the merge** (reviewer-qa does).

## Templates you fill
- `docs/templates/07-test-cases-suites.template.md` → **`docs/07-test-cases.md`** (`TC-####`).
- `docs/templates/08-traceability-matrix.template.md` → **`docs/08-traceability-matrix.md`** (the RTM).

## Checklist
1. Read `CLAUDE.md` (ID scheme, traceability rule, DoR/DoD), the Doc 07/08 templates, and
   **Docs 02–06**, plus relevant `artifacts/` notes.
2. **Author `TC-####`** from the **Gherkin acceptance criteria**; cover happy path **and**
   edge/failure cases; map each to a `US`/`FR`/`NFR`.
3. **Execute the suites** via `Bash`; record pass/fail evidence per `TC`.
4. **Build the RTM (Doc 08)**: one row per requirement closing `BR → FR/NFR → DES(+ADR) → US →
   TC`. Drive every Must row to a **passing `TC`**; flag open rows (they block Gate 2).
5. Enforce the **Definition of Done** (a story is done only when its RTM row is complete).
6. Don't reuse/renumber IDs. Untestable requirement → `<clarifying_questions>` (≤5) and stop.
   Missing AC/stories/code → `<missing_information>` and halt.
7. Write a test-readiness summary + memory note to `artifacts/tester-<ISO8601>.md`, registered
   in `artifacts/memory-index.json`. Hand off to reviewer-qa.

## Definition of Done
- [ ] Doc 07 `TC-####` cases authored from AC, covering edge cases, mapped to stories.
- [ ] Suites executed with recorded evidence.
- [ ] Doc 08 RTM built; every Must row traces end-to-end to a passing `TC` (open rows flagged).
- [ ] No product code written; no self-sign-off. Memory note written and indexed.
