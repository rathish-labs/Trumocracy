---
name: document-review
description: >-
  Shared, cross-cutting review-and-rework capability (a SKILL, NOT a ninth agent — the roster
  stays eight). Independently scores a major document version (or a code drop, via Doc 06)
  against a strict rubric, lists every issue by severity (critical/high/medium/low), and emits
  a PASS/FAIL/ESCALATED verdict. Pass bar: score ≥95% AND zero critical/high/medium issues.
  Below the bar → the document's OWNING ROLE reworks into a NEW VERSION → re-review. Max 5
  rework cycles, then ESCALATE: the verdict becomes ESCALATED and the document requires manual
  human approval (a recorded decision — approve-as-is / rework / reject). The reviewer only
  scores; it never edits the document. Complements reviewer-qa (the Gate-2 merge signer); it does not replace it and adds
  no new gate or role. The project-manager invokes it within the SOP and assigns a non-author
  reviewer; the SubagentStop hook mechanically enforces a passing report exists.
---

# Document-Review Playbook (review → rework → re-review loop)

This is a **shared capability**, not a role. It owns **no phase, no gate, no product artifact**.
It is the strict, independent quality loop that runs **after every major document version is
created and after code generation**. It mirrors the org's independence principle — **detector ≠
author** — exactly like `reviewer-qa`: the reviewer **scores and lists issues only; it never
edits the document it reviews**. The **owning role** does every rework.

It does **not** replace `reviewer-qa`. `reviewer-qa` remains the independent Gate-2 merge signer
(security scan + RTM zero-gaps + merge sign-off). This loop runs **earlier and per-version**, on
each major document and each code drop, and **complements** it.

## When it runs

The **project-manager** invokes this skill within the SOP, **after** an owning role produces (or
reworks) a major document, and **after the engineer's code drop** (reviewed via its Doc 06). It is
**invocable, not mandatory on every trivial artifact** — it applies to the **major documents**
below and to code; session-memory notes, status reports, and other minor artifacts are out of
scope.

## Independence rule (who may review what)

- The reviewer **MUST NOT be the document's owning role** (author ≠ reviewer). The PM assigns a
  neutral role to load this skill.
- The reviewer is **read-only on the document**: it produces a scored report only and **never
  edits** the document. All fixes are done by the **owning role** as a new version.
- For a **PM-owned** document (Doc 13), the PM does **not** self-review — a neutral role
  (e.g. product-owner or architect) loads this skill instead.

## Mode by document type (which rubric to apply)

| Mode          | Documents (and code)                                                        | Reviewer lens |
| ------------- | -------------------------------------------------------------------------- | ------------- |
| **business**  | 01 PR-FAQ · 02 Requirements · 05 Backlog · 13 Project Plan · 14 User Guide | business reviewer |
| **technical** | 03 Architecture (SDD) · 04 Test Strategy · 06 Coding & UT (+ the code) · 07 Test Cases · 08 Traceability Matrix | technical reviewer |

> Docs 09–12 (release/deploy/ops/inventory) are operational; review them in **technical** mode if
> the PM elects to. **Code generation** is reviewed in **technical** mode and the verdict is
> recorded against **Doc 06**'s current version (Doc 06 is the code drop's review unit).

## Severity taxonomy (every issue is classified)

- **Critical** — would cause wrong outcomes, data loss, security exposure, or a broken
  traceability chain; blocks everything.
- **High** — a material correctness, safety, or completeness defect; not shippable as-is.
- **Medium** — a real defect or significant gap that must be fixed but is contained.
- **Low** — minor/cosmetic/nice-to-have; does **not** block the pass bar.

## Pass bar (the gate this loop enforces)

A document version **PASSES** only when **both** hold:

1. **Score ≥ 95%** against the applicable rubric, **and**
2. **Zero Critical, zero High, and zero Medium** issues (Low issues are allowed).

Anything else is a **FAIL** → route to the owning role for rework.

## Scoring rubric (weights sum to 100)

Score each criterion 0–100, then take the weighted average. Any **Critical/High/Medium** issue
caps the verdict at FAIL regardless of the numeric score.

**Business mode**

| # | Criterion | Weight |
|---|-----------|--------|
| B1 | **Outcome & problem clarity** — measurable customer outcome, real problem, success metrics | 20 |
| B2 | **Completeness** — every required section present and filled (no placeholders) | 15 |
| B3 | **Traceability & IDs** — correct `BR/FR/NFR/EP/FE/US` IDs; up/down links intact; named owner per item | 20 |
| B4 | **Correctness & consistency** — internally consistent, no contradictions with upstream docs | 15 |
| B5 | **Testability** — Gherkin acceptance criteria, MoSCoW, explicit out-of-scope / kill criteria | 15 |
| B6 | **Convention compliance** — RFC 2119, ISO-8601 dates, named-owner rule, house style | 15 |

**Technical mode**

| # | Criterion | Weight |
|---|-----------|--------|
| T1 | **Requirement coverage** — addresses **every** FR/NFR and **every** RISK it must cover | 20 |
| T2 | **Soundness** — architecture/test/code decisions correct; ADRs justified with rejected alternatives | 20 |
| T3 | **Traceability & IDs** — `DES/ADR/UT/TC` IDs correct; chain `BR→FR/NFR→DES→US→TC` intact | 20 |
| T4 | **Security & failure modes** — threats, failure-mode analysis, reversibility/rollback addressed | 15 |
| T5 | **Completeness & testability** — no placeholders; test cases cover edge cases; code has `UT-####` | 15 |
| T6 | **Convention compliance** — Conventional Commits ref `US-####`, flags, house style | 10 |

## The loop (with a hard cap)

```
owning role produces document vN  (Status: In Review)
        │
        ▼
PM invokes document-review (neutral reviewer, correct mode)
        │
   score + issues by severity → Verdict
        │
   PASS (≥95% AND no C/H/M)? ──yes──▶ advance (Status: Approved); cycle ends
        │ no
        ▼
route to OWNING ROLE → rework → NEW VERSION vN+1 → re-review   (cycle++)
        │
   cycle > 5 still failing? ──yes──▶ ESCALATE: Verdict ESCALATED → MANUAL HUMAN APPROVAL
        │                            (PM presents surviving issues; human records a decision)
        │                              ├─ approve-as-is → accept open issues (rationale logged) → advance
        │                              ├─ rework        → owning role makes a new version → re-review
        │                              └─ reject        → do not advance (kill / send back)
        └ never loop infinitely
```

- **Rework yields a NEW versioned document.** The owning role bumps the `Version:` semver in the
  document header (FAIL on a Medium+ issue → at least a **minor** bump; Low-only polish → a patch
  bump) and sets `Status: In Review`; on PASS the owner sets `Status: Approved`.
- **Loop cap = 5 rework cycles.** If cycle 5 still fails the bar, do **not** continue — write a
  report with `Verdict: ESCALATED`, list the surviving issues, and the PM presents them to the
  **human** like a gate packet. The document then **requires manual human approval**.
- **Human decision at the cap is a RECORDED decision.** The human chooses exactly one of:
  **approve-as-is** (accept the open issues), **rework** (send back for another version), or
  **reject**. The decision MUST be recorded in the ESCALATED report — **who approved**, **which
  issues were accepted**, and the **date** — and only **approve-as-is** lets the SOP advance (the
  hook checks for it). `rework` produces a new version that is re-reviewed; `reject` does not
  advance. Escalation is the only sanctioned exit below the bar, and it is never silent.

## The review report (what you write — never edit the document)

Write one report **per review cycle** to
`artifacts/reviews/<NN>-<slug>-v<version>-<mode>-cycle<k>.md`
(e.g. `artifacts/reviews/03-architecture-and-design-v1.1.0-technical-cycle2.md`), built from
`docs/templates/document-review.template.md`. It MUST start with this exact, machine-parseable
metadata block (the SubagentStop hook reads these fields).

> ⚠ **The first two field names are the ones that drift, and drift disables the gate.** Write
> `Reviewed document:` (**not** `Document:`) with the **filename** as its value — not a document
> title and not an ID like `CODE-TRUMOCRACY` — and `Document version:` (**not** `Version:`) with a
> bare semver. Ten reports across four documents got this wrong; the hook could not identify any of
> them, so for those versions the automated gate enforced nothing. `hooks/check_gates.py` now
> accepts the aliases and falls back to the report's filename, but it flags any report that needed
> the fallback. **Verify before you finish:** `python3 hooks/check_gates.py --audit` prints which
> documents pass and which block, and names the report it matched.

```
Reviewed document: 03-architecture-and-design.md
Document version: 1.1.0
Review mode: technical
Reviewer role: <neutral role that ran this skill — not the owner>
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 2 of 5
Verdict: PASS
```

- `Verdict:` is exactly one of **PASS** / **FAIL** / **ESCALATED**.
- Emit **PASS only** when `Score ≥ 95` **and** `Critical = High = Medium = 0`. Otherwise **FAIL**
  (or **ESCALATED** after cycle 5). The hook re-checks these numbers — do not mark PASS otherwise.
- **On ESCALATED (cycle 5 reached), the report MUST also carry the recorded human decision** so the
  hook (and the audit trail) can see it. Add these fields to the metadata block:

  ```
  Verdict: ESCALATED
  Human decision: approve-as-is | rework | reject
  Approved by: <human approver's name>
  Accepted issues: <ISS-ids accepted as-is, or "none">
  Decision date: <YYYY-MM-DD>
  Decision rationale: <one line>
  ```

  Only **`Human decision: approve-as-is`** with a named **`Approved by:`** lets the SOP advance; the
  hook treats `rework`/`reject` (or a missing decision) as **not satisfied**.
- Below the block: an **issue table** (`ID | Severity | Criterion | Location | Finding |
  Required fix`), the **per-criterion scores**, and a one-line **routing instruction** to the
  owning role (or, at the cap, the recorded human decision).

## Operating rules

- Ground every issue in the document text and the upstream artifacts (`CLAUDE.md`, the relevant
  `docs/`, prior `artifacts/` notes). Cite the exact location. **Never invent** findings, and
  never pass a document you have not actually read end to end.
- **Read-only on the document.** You score; the owning role fixes. Do not edit, and do not
  approve your own authored work (independence).
- For any non-trivial sub-task prompt, load the shared **prompt-architect** skill and follow its
  9-section structure.
- Write a **session-memory note** to `artifacts/<reviewer-role>-<ISO8601>.md` and register it in
  `artifacts/memory-index.json` (the SubagentStop hook enforces this).

## Definition of Done

- [ ] Correct **mode** chosen for the document type; reviewer is **not** the document's owner.
- [ ] Document read end to end; every issue **severity-classified** and **located**.
- [ ] Weighted **score** computed; `Verdict` = PASS only when **≥95% and zero C/H/M**.
- [ ] Report written to `artifacts/reviews/` with the **exact metadata block** for the hook.
- [ ] On FAIL: routed to the **owning role** for a **new version**; cycle counted.
- [ ] On cycle 5 failure: `Verdict: ESCALATED`, handed to the **human** for manual approval — never
      looped forever — and the **recorded human decision** (`Human decision`, `Approved by`,
      `Accepted issues`, `Decision date`, rationale) is written into the report; only
      `approve-as-is` advances the SOP.
- [ ] Session-memory note written and indexed.
