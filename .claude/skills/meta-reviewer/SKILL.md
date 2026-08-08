---
name: meta-reviewer
description: >-
  Cross-project agent-improvement capability (a SKILL, NOT a ninth agent). Reads
  learnings/agent-learnings.md, groups by role, and uses the prompt-architect skill to DRAFT
  proposed edits to the relevant .claude/agents/<role>.md files. It ONLY proposes — a human
  approves and commits. Agent definitions never self-modify. The project-manager invokes it on a cadence.
---

# Meta-Reviewer Skill

A **shared capability**, not a role and not an agent. It runs the **cross-project agent-improvement
loop** for the vektor org: it turns accumulated field signals about how the roles behave into
**reviewable draft edits** to the agent definitions. It owns no phase, no gate, and no product
artifact. The **project-manager** loads it on a cadence; a human may invoke it directly as
**`/meta-reviewer`**.

**The one hard rule:** this skill **only drafts proposals**. It **never edits or commits**
`.claude/agents/*.md` or any skill. A **human approves and commits**; agent definitions **never
self-modify**. (Mechanically: invoke this skill in a read-only context — it should not be granted
Edit/Write on the agent files; it writes only draft files under `learnings/proposals/`.)

## Inputs you read
1. `CLAUDE.md` — the org handbook (roles, invariants, RACI, the two-tier learning loop).
2. **`learnings/agent-learnings.md`** — the cross-project register (rows keyed `AL-##`).
3. `learnings/adopted.md` — what has already been adopted (don't re-propose it).
4. The **current** definition of each role referenced: `.claude/agents/<role>.md` and its
   `.claude/skills/<role>/SKILL.md` — so a proposed edit is a real diff against real text.
5. The **`prompt-architect`** skill — you use it to draft each proposal cleanly.

## Procedure (every run)
1. **Collect** every register row with Status `proposed` (skip `adopted` / `rejected`).
2. **Group by `Role`.** Process one role at a time so a reviewer sees all proposed changes to a
   single definition together.
3. For each role, **read its current `.claude/agents/<role>.md`** (+ skill) so you anchor the draft
   to the exact current wording.
4. **Load `prompt-architect`** and have it draft, per role, a concrete proposed edit: the exact
   target file, the **before/after** text (an applyable diff or a quoted old→new block), the `AL-##`
   IDs it addresses, and a one-line rationale grounded in the register's "What happened." Preserve
   the role invariants in CLAUDE.md/BUILD-SPEC (tool boundaries, gate authority, detector≠decider) —
   **flag, do not silently weaken, any invariant a learning would touch**.
5. **Write the drafts — proposals only — to `learnings/proposals/<role>-<YYYY-MM-DD>.md`.** Do **not**
   touch the agent files. Each proposal file lists: the `AL-##`(s), target file, before→after, and
   rationale.
6. **Summarize** for the human: per role, the proposed edits and the `AL-##`s, plus any learning you
   could **not** turn into a safe edit (and why). Then **stop** — the human decides.

## What you do NOT do
- You do **not** edit `.claude/agents/*.md`, skills, or `CLAUDE.md`.
- You do **not** commit, push, or open PRs.
- You do **not** mark a learning `adopted` — only a human does, after committing the edit.
- You do **not** invent learnings: every proposal traces to an `AL-##` row with a real "What happened."

## Hand-off to the human (the approval gate)
For each proposed edit the human will: review it, edit the role definition by hand (or accept your
draft), **commit**, then in `learnings/agent-learnings.md` flip the `AL-##` to `adopted` (or
`rejected` + reason) and, if adopted, append a row to `learnings/adopted.md` with the **commit SHA**.
Finally they **re-scaffold** (or pull the org layer) to propagate the improved definition to products.

## How the project-manager invokes this (cadence)
The PM runs the meta-reviewer on a **cadence** — e.g. monthly, or at each gate retro — not inside a
product's delivery flow. It is an **org-maintenance** pass over the agent definitions, fully separate
from the per-product refine loop. The PM presents the drafted proposals to the human approver exactly
as it presents a gate packet: **it cannot adopt them itself.**

## Definition of Done
- [ ] Every `proposed` register row is either drafted into `learnings/proposals/<role>-<date>.md` or
      explicitly listed as "could not draft safely" with a reason.
- [ ] Drafts are grouped by role and anchored to the current definition text (real before→after).
- [ ] No agent definition, skill, or `CLAUDE.md` was edited, committed, or marked adopted.
- [ ] A per-role summary was handed to the human for approval.
