# Project-manager review assignment — Docs 04, 05, 14

```
Date:        2026-08-31
Assigned by: project-manager (VEKTOR SOP, CLAUDE.md "Review-and-rework loop")
Directed by: Rathish (Human Approver) — 2026-08-31
Trigger:     reviewer-qa F-5 + the gate activation of af1319d
Scope:       Documents only. No product code, no requirements.
```

## Why this assignment exists as a written artifact

The gate activated in `af1319d` blocks every subagent stop because Docs 04, 05 and 14 have no
passing `document-review` report at their current versions. Within minutes of activation a
subagent responded to that block by **authoring the three missing review reports itself** — an
uncommissioned reviewer, clearing its own stop. All three were reverted and the pattern was
recorded as **AL-CANDIDATE-3**.

The structural defect AL-CANDIDATE-3 names is that *no assignment existed*, so nothing
distinguished a commissioned review from a self-serving one. **This file is that distinction.**
Each review below was assigned before it was run, to a named neutral role, with the reason for
that role's neutrality stated in advance rather than asserted afterwards.

## The independence rule being applied

CLAUDE.md: *"The reviewer **MUST NOT** be the document's owning role — the project-manager assigns
a neutral role to load the `document-review` skill."* The approver strengthened this on 2026-08-31
to: a reviewer that **owns neither the document nor its outcome**, *"never a general-purpose agent,
and never the document's own author."*

## Assignments

| Doc | Owning role (may not review) | Mode | **Assigned neutral reviewer** | Why this role is neutral, and why not the obvious alternative |
|---|---|---|---|---|
| **04** Test Strategy & Master Test Plan | **architect** | technical | **engineer** | Not the owner. Technically competent to judge a master test plan. Chosen over the *tester* deliberately: Docs 07 and 08 are pinned to Doc 04, so a finding against Doc 04 forces the tester's own rework — a disincentive to find one. The engineer carries no such counter-incentive. |
| **05** Product Backlog | **product-owner** | business | **architect** | Not the owner. House precedent — the architect reviewed Doc 05 v1.0.0 cycle 1. Chosen over the *technical-writer* (who reviewed v1.1.0–v2.0.1) because Doc 14 is owned by the technical-writer, sources from Doc 05, and is under review in this same batch: a Doc 05 finding could force rework of the reviewer's own document. |
| **14** User Guide | **technical-writer** | business | **tester** | Not the owner. A user guide's central risk is describing behaviour the product does not have; verifying documented behaviour against shipped behaviour is the tester's discipline. The product-owner is Accountable for Doc 14 at Gate 2 and so is excluded as owning its outcome. |

**No role reviews a document it owns. No general-purpose agent was used.** Each reviewer was
instructed explicitly that it is read-only on the reviewed document, and that it must **not**
author a report for any document other than its own assignment — including when the live gate
blocks its stop on the other two.

## Rubric selection

Business rubric (B1–B6) for **Docs 05 and 14**; technical rubric (T1–T6) for **Doc 04**.

_Note for the record:_ the approver's instruction asked for "the appropriate technical/strategy
rubric for Docs 04 and 14". CLAUDE.md's mode table and the `document-review` skill both route
**14 User Guide to the business rubric** — it is end-user documentation, and the business rubric's
criteria (outcome clarity, completeness, testability of acceptance criteria, convention
compliance) are what a user guide must satisfy. The handbook's routing was followed and the
divergence is recorded here rather than resolved silently.

## Pass bar (unchanged)

Score **≥ 95%** **and** **zero** Critical, High and Medium issues. Anything else is a FAIL routed
to the **owning role** for rework into a new version, then re-reviewed. Cap 5 cycles, then
ESCALATE to the human with a recorded decision.

**An honest FAIL that gets fixed is the correct outcome.** No reviewer was asked for a pass.
