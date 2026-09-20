# Review assignment — clause (e) cascade + public-release preparation

```
Assigned by:   project-manager (Ana-Maria Petrescu) — per CLAUDE.md "Review-and-rework loop"
Date:          2026-09-06 (second dispatch of the day; follows REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md)
Trigger:       Approver rulings (Rathish Kumar, 2026-09-06), recorded in
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11:
               1. Ruling B CONFIRMED — landing endorsement copy is an overclaim (en + ar).
               2. FR-131 clause (e) APPROVED — Doc 02 v2.17.0 applied; landing "We never learn
                  which party you support" fixed; Doc 08 reopens and re-closes through its loop.
               3. LICENSE: AGPL-3.0-or-later (code) + CC BY-SA 4.0 (docs/design); DCO, not CLA.
               4. artifacts/ PUBLISHED after depersonalisation; persona note added.
               5. Doc 01 gets a banner: full v2 target vision, NOT the current v1 state.
               BUILD the public files (README rewrite, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT),
               all telling the v1 truth.
Scope:         Product code changes are LIMITED to the strings the approver ruled on
               (DECISIONS §4, §5, §5.3) plus their UT guard. Everything else is documents,
               licence/config files and .github. Gate --audit must exit 0; npm test green;
               commit, do not push.
Rule:          Reviewer assignment is the PM's decision, recorded HERE, BEFORE dispatch. A role
               that hits the SubagentStop block ROUTES to the PM. It NEVER authors the review
               whose absence is blocking it (AL-CANDIDATE-3 — three occurrences to date; the
               third, the product-owner's 2026-09-06 01:23 self-appointment, is in the sibling
               assignment record).
```

## Ownership and rework (owning role authors; anchored FIND/REPLACE specs are transcribed by the PM)

| Work | Owner (reworks) | Target | Artifact |
|---|---|---|---|
| Doc 02 FR-131 clause (e) + closing sentence + §13 (j) | product-owner (Priya Raghunathan) — spec authored 2026-09-06T1000, **applied by the PM this session** | v2.16.3 → **v2.17.0 In Review** | `artifacts/product-owner-2026-09-06T1000-endorsement-copy-spec.md` |
| Doc 01 v1-posture banner + Classification | product-owner (Priya Raghunathan) | v2.0.0 → **v2.1.0 In Review** | `artifacts/product-owner-2026-09-06T1530-doc01-spec.md` |
| Landing copy en/ar (`home.steps[1].body`, `home.promises[0]`), FR-082 strings (`packages/sdk/src/proposals.js`, `ProposalsAndDebate.tsx`, protocol markers), UT guard, Doc 06 §7 item 26 | engineer (Samuel Oyelaran) | Doc 06 v2.5.1 → **v2.6.0 In Review** | code + Doc 06 (engineer has Edit) |
| Doc 04 §0.5 S4/S5 clause-(e) annotation | architect (Ravi Deshmukh) | v1.4.0 → **v1.5.0 In Review** | `artifacts/architect-2026-09-06T1530-doc04-spec.md` |
| Doc 07 TC row(s) for the new UT guard; Doc 08 FR-131 chain re-cut (clause (e), new TC), honest Must-row ruling | tester (Ji-woo Park) — **after** the engineer lands the UT id | Doc 07 v2.6.0 → **v2.7.0**; Doc 08 v2.9.0 → **v2.10.0** In Review | `artifacts/tester-2026-09-06T1700-clause-e-spec.md` |
| README rewrite, CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md | technical-writer (Maya Lindqvist) | new / rewritten root files (not governed docs) | files at repo root |
| LICENSE (AGPL-3.0-or-later), docs/LICENSE (CC BY-SA 4.0), DCO, .github PR template + DCO check, `scripts/contribute-learning` depersonalisation, AL-CANDIDATE-3 packet | project-manager (config/licence files only; no product code) | — | root files, `artifacts/status/AGENT-LEARNINGS-CANDIDATES-2026-09-06.md` |

## Neutral reviewers (recorded BEFORE dispatch)

| Document(s) | Mode | Reviewer | Why neutral | Excluded |
|---|---|---|---|---|
| Doc 02 v2.17.0 | business | **reviewer-qa** (Rafael Duarte) | The independent approver by design; owns neither Doc 02 nor any downstream artifact this amendment moves; can run the audit and write its report via Bash | product-owner (owner and author of the amendment); tester (the amendment moves its own Doc 07/08 rows); engineer (its code change is what clause (e) now governs); technical-writer (its README this session cites clause (e)) |
| Doc 01 v2.1.0 | business | **technical-writer** (separate instance from the public-files author) | Precedent (Doc 01 v2.0.0 cycle-1 PASS was a technical-writer review); owns neither Doc 01 nor its outcome | product-owner (owner); project-manager (applier) |
| Doc 04 v1.5.0 | technical | **reviewer-qa** (new instance) | Precedent (Doc 04 v1.3.0/v1.4.0 this morning) | architect (owner); tester (Doc 04 pins Doc 07/08); engineer (its guard is what S4/S5 now cite) |
| Doc 06 v2.6.0 (+ the code drop) | technical | **tester** (new instance) | Precedent (Doc 06 v2.4.x/v2.5.x, all cycles); verifies the guard against the rendered strings; has Bash for `npm test` | engineer (owner); reviewer-qa reserved for Docs 02/04/07/08 this session |
| Doc 07 v2.7.0 + Doc 08 v2.10.0 | technical | **reviewer-qa** (new instance) | RACI: **A** for "RTM complete (zero gaps)" — the natural verifier of the FR-131 Must-row ruling; precedent this morning | tester (owner); engineer (authored the UT being traced); product-owner (authored the clause being traced) |
| README / CONTRIBUTING / SECURITY / CODE_OF_CONDUCT (public copy — not governed documents) | business, FR-131(e) discipline | **product-owner** (new instance) — report to `artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06.md`, NOT to `artifacts/reviews/` (these are not numbered documents and must not enter the hook's cycle counter) | RACI: the product-owner is Accountable for public-facing claims (DECISIONS §4: "the product-owner approves"); owns none of the four files | technical-writer (author); engineer (its strings are quoted) |

- **General-purpose agents are never reviewers.** Each reviewer loads the shared `document-review`
  skill, scores and lists issues only, never edits. Rework returns to the owning role as a new
  version. Cap 5, then ESCALATE.
- **Memory-index hygiene:** every owner's and reviewer's note path is pre-registered by the PM before
  dispatch; roles write their note file only and never open `artifacts/memory-index.json`.
- **If the SubagentStop audit shows OTHER documents blocking, that is expected mid-session** (several
  documents are In Review at once). Do not self-appoint. Write your note and stop; the PM sequences
  the reviews.

## Reports

`artifacts/reviews/<NN>-<slug>-v<version>-<mode>-cycle<k>.md` from
`docs/templates/document-review.template.md`, metadata fields exactly `Reviewed document:` /
`Document version:`. The Doc 02 cycle counter restarts at 1 for v2.17.0 (a new minor version).

## Outcomes (recorded by the PM as each loop closed)

| Document | Cycle 1 | Cycle 2 | Cycle 3 | Cycle 4 | Final |
|---|---|---|---|---|---|
| Doc 01 PR-FAQ | v2.1.0 FAIL 87% (1C/2H/3M) | v2.2.0 FAIL 96% (0C/0H/1M — the integrity / no-gatekeeper class; PM ruled it inside approver ruling 5) | **v2.3.0 PASS 99%** (0C/0H/0M/1L) | — | **Approved v2.3.0**, Classification Public, §0 banner + 16 markers; 1 Low carried |
| Doc 02 Requirements | v2.17.0 FAIL 86% (0C/0H/3M/10L) | **v2.17.1 PASS 96%** (0C/0H/0M/7L) | — | — | **Approved v2.17.1**; FR-131 clause (e) + §8 Scenarios 8/9; 7 Lows carried (four introduced by the rework, owner-acknowledged) |
| Doc 04 Test strategy | v1.5.0 FAIL 92% (0C/0H/1M/5L) | **v1.6.0 PASS 96%** (0C/0H/0M/3L) | — | — | **Approved v1.6.0**; §14 register reconciled to Doc 07 v2.6.0; OPEN-27 minted; 3 Lows carried |
| Doc 06 Coding & UT (+ code) | v2.6.0 FAIL 94% (0C/0H/1M/5L) | **v2.7.0 PASS 96%** (0C/0H/0M/3L) | — | — | **Approved v2.7.0**; UT-0889 (+ jargon scan, tightened Arabic guard); suite 625/625; 3 Lows carried |
| Doc 07 Test cases | v2.7.0 FAIL 94% (0C/0H/2M/3L) | v2.8.0 FAIL 95% (0C/0H/1M/3L) | **v2.8.1 PASS 98%** (0C/0H/0M/1L) | — | **Approved v2.8.1**; TC-3570..TC-3576 (TC-3575 Blocked — instrument absent); R-18/R-19; 1 Low carried |
| Doc 08 RTM | v2.10.0 FAIL 95% (0C/0H/1M/2L) | v2.11.0 FAIL 96% (0C/0H/1M/2L) | v2.11.1 FAIL 96% (0C/0H/1M/1L — BKLG v2.5.0 pin vs 134-story census; US-0135..US-0142 undisclosed) | v2.11.2 FAIL 96% (0C/0H/1M/1L) → **v2.11.3 PASS 98%** (0C/0H/0M/1L) on cycle 5, the cap, no escalation | **Approved v2.11.3**; census 142 | 134 | 17 | 125 with US-0135..US-0142 disclosed (TD-RTM-04); FR-131 Must row stays OPEN; 16/138 unchanged; 1 Low carried |
| Public files (README / CONTRIBUTING / SECURITY / CODE_OF_CONDUCT) | FAIL 81% (0C/4H/7M/9L) — all factual, no clause-(e) violation | FAIL 93% (0C/0H/1M/5L) | FAIL 95% (0C/0H/1M/0L) | **PASS 98%** (0/0/0/0) | **Closed at cycle 4**, no escalation; reports in artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06*.md |

Process notes: the API session limit (reset 20:10 PT) killed six agents mid-task; each was resumed
from its transcript. The Doc 01 product-owner instance also authored the Doc 02 v2.17.1 spec unasked
(it is the Doc 02 owner); the separately dispatched Doc 02 instance was stopped and its
pre-registered paths pruned — one owner instance per role at a time from here on. The applier was
extended to skip commentary between an OP header and FIND; two owner specs needed a second pass
because a FIND was a prefix of a long table row or cut a sentence at a line boundary.
