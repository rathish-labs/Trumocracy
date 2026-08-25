# DECISIONS-2026-08-25 — RTM Zero-Gap Rule Clarification (Merge Condition vs Gate-2 Condition)

```
Prepared by:  project-manager (Ana-Maria Petrescu)
Date:         2026-08-25
Approver:     Rathish Kumar
Status:       CLOSED — ruling applied; gate-status section appended; reviewer-qa merge sign-off unblocked
Scope:        Governance clarification only — no document text changed, no CLAUDE.md edited
```

---

## 1. Context

On 2026-08-25, the reviewer-qa cycle-2 review of Doc 06 v2.0.1
(`artifacts/reviews/06-coding-and-ut-v2.0.1-technical-cycle2.md`) issued a PASS at 97%
(0C/0H/0M/1L) on the code drop consisting of commits 5320342 (initial scaffold) plus the
clause-7 privacy fix and the packages/ui tsconfig fix. Suite 383/383 green. Typecheck bar met.
Dep-guard clean.

However, reviewer-qa withheld merge execution under a CONDITIONALLY HELD position (report §6):

> "CLAUDE.md requires suites green AND RTM gap-free before signing the merge. Technical
> conditions are met. RTM condition is not met: as of tester-2026-08-11T2330, the RTM has
> 113 of 125 Must rows open."

Subsequently, Doc 08 passed its review loop and was approved at v2.2.3. The RTM material
finding surfaced eight additional absent Must FRs, raising the honest open-Must figure to
**126 of 138** (8.7% completion). With the RTM in this state, the conditional hold would
prevent any branch from merging during the entire build phase — the SOP advances by
implementing stories that incrementally close RTM Must rows, but no story merge could occur
until the final row closed. This reading would freeze all incremental delivery.

The project-manager routed the question to the human approver (Rathish Kumar) for a
governance ruling on the correct interpretation of CLAUDE.md's RTM zero-gap rule.

---

## 2. Ruling — VERBATIM (Rathish Kumar, 2026-08-25)

> "CLARIFICATION: the RTM zero-gap rule is a GATE-2 completion condition, not an
> incremental-merge condition. It means 'the system may not be certified Gate-2-complete
> with open Must rows.' It does NOT mean 'no branch may merge while any Must row is open'
> — that reading would freeze all incremental delivery at 8.7% and is not the rule's intent.
> Record this explicitly in the gate status and, if CLAUDE.md's wording is genuinely
> ambiguous, note the clarification so future build PRs are not falsely blocked. The scaffold
> (5320342 + 61fd8af) is technically reviewed, PASS, traceable, suite green — it is
> mergeable now under this clarification. Gate 2 still requires the RTM Musts closed; that
> is unchanged."

---

## 3. Analysis — CLAUDE.md wording assessment

The project-manager assessed CLAUDE.md's actual wording against the approver's ruling to
determine whether the ambiguity is genuine.

### 3.1 Where the zero-gap rule appears

**Gate-2 condition (explicit):** Under "Gate 2 — Launch readiness":

> "Confirms tests green, the RTM (Doc 08) has **zero gaps in Must rows**, and rollback is
> proven."

This unambiguously places the zero-gap requirement as a Gate-2 condition.

**Definition of Done (explicit):** Under "Definition of Done":

> "An open Must row **blocks Gate 2**."

Again explicit: the Must-row gap blocks Gate 2, not merge. The language "blocks Gate 2"
does not say "blocks merge."

**reviewer-qa role description (source of ambiguity):**

> "review + security + RTM verify + sign merge"

This shorthand lists "RTM verify" alongside "sign merge" without specifying the scope of
the verification. The natural reading of a checklist is that all items must pass before
the concluding action — here, signing the merge. That reading treats RTM verify as a
pre-merge check, not a Gate-2-only check.

### 3.2 Finding: wording IS genuinely ambiguous

The zero-gap rule is clearly a Gate-2 condition in context (Gate-2 section + DoD). However,
the reviewer-qa role description "RTM verify + sign merge" is genuinely ambiguous: it does not
specify that RTM verification means "confirm RTM is complete (a Gate-2 gate)" rather than
"confirm RTM status before signing any merge." A reader can reasonably — and the reviewer-qa
did reasonably — read it as requiring RTM completeness before execution of each merge.

The approver's ruling resolves the ambiguity in favour of the Gate-2-only reading, consistent
with VEKTOR's governing principle of incremental reversible delivery: "implement stories on
trunk behind feature flags; keep commits small and reversible."

### 3.3 CLAUDE.md wording amendment — proposal for human adoption

The ambiguity is real and should be resolved in the handbook. Per VEKTOR's agent-improvement
rule, agents never modify CLAUDE.md; only a human commits a definition change after approving
it. The amendment should be proposed via the org repo's `learnings/` register as an `AL-##`
entry.

**Proposed wording change (human to adopt, verbatim-adoptable):**

*Current reviewer-qa role line (Roles & document ownership table, Owns column):*
> "— (read-only: review, security, RTM verify, **signs merge**)"

*Proposed replacement:*
> "— (read-only: review, security, **RTM verify** [zero-gap check applies at Gate 2 only —
> not an incremental-merge condition], **signs merge**)"

*Alternatively, under "Definition of Done", add a parenthetical:*
> "An open Must row blocks Gate 2 *(not incremental merges during the build phase — the
> zero-gap condition applies to Gate-2 certification, not to individual branch merges)*."

Either amendment closes the ambiguity. The project-manager recommends the DoD parenthetical
as the single most visible location; the reviewer-qa role line may also be updated for
belt-and-braces clarity. The human approver decides and commits both.

---

## 4. Consequences

### Immediate

1. The reviewer-qa conditional hold on the scaffold merge is **superseded**. The technical
   PASS (97%, 0C/0H/0M/1L) stands. The merge of `build/v1-scaffold` (commits 5320342 +
   61fd8af + the documents-only commits following) is **MERGEABLE NOW** under this ruling.
   reviewer-qa signs per the "Merge to trunk" RACI (A = reviewer-qa). See the addendum at
   `artifacts/reviewer-qa-2026-08-25T1400-merge-signoff-addendum.md`.

2. Gate 2 itself is **UNCHANGED** — still NOT READY. The RTM zero-gap requirement at Gate 2
   is unchanged. 126 of 138 Must rows remain open (8.7% completion). The Gate-2 condition
   reads exactly as it always did; this ruling does not weaken it.

### Future build PRs

Future build PRs are assessed on:
- The **code-drop review bar** (Doc 06 §4a): technical-mode document-review PASS (≥95%,
  0C/0H/0M) + suite green + typecheck clean + dep-guard clean.
- **Traceability**: the PR's stories trace to FR/DES; TCs exist (even if not yet complete).
- **RTM zero-gap**: NOT a merge gate. Gate-2 certification remains the sole RTM zero-gap
  checkpoint.

### CLAUDE.md amendment

The wording amendment described in §3.3 is a human-owned edit. The project-manager will
file the `AL-##` proposal in the org repo's `learnings/agent-learnings.md` register at
the next cadence review. No CLAUDE.md edit is made by any agent.

---

## 5. Routing

| Action | Owner | Status |
|--------|-------|--------|
| Gate-status section recording this ruling | project-manager (Ana-Maria Petrescu) | DONE — see `GATE-STATUS-2026-08-09.md §Governance clarification 2026-08-25` |
| reviewer-qa merge sign-off addendum | reviewer-qa | DONE — see `artifacts/reviewer-qa-2026-08-25T1400-merge-signoff-addendum.md` |
| CLAUDE.md wording amendment (AL-## proposal) | project-manager → human approval | PENDING — to be filed in org repo learnings register at next cadence review |
