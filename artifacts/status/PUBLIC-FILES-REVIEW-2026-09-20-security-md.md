# Public-files review — SECURITY.md Doc-08 pin + currency note — cycle 1

> **Not a governed-document review.** `SECURITY.md` is a root public file, not one of the 14
> numbered documents. This report lives in `artifacts/status/` and is deliberately **outside** the
> SubagentStop hook's scan, which globs `artifacts/reviews/*.md` only (`hooks/check_gates.py`
> `audit()`, line 556). The metadata field names below are the canonical ones the assignment
> specified — they are safe here precisely because the hook never reads this directory, and using
> the canonical names avoids teaching the drift the template warns about. The business rubric and
> the severity scale are the scoring frame only; this review starts no hook cycle counter.
> (Same convention as `artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06*.md` and
> `PUBLIC-FILES-REVIEW-2026-09-08-verify.md`.)

```
Reviewed document: SECURITY.md
Document version: n/a (root public file — no semver)
Review mode: business
Reviewer role: product-owner
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 1 of 5
Verdict: PASS
```

```
Reviewer:          product-owner (Priya Raghunathan) — RACI: Accountable for public-facing claims
Author excluded:   technical-writer (Nadia Hassan) — author of the spec
Applier:           project-manager (Ana-Maria Petrescu) — applied the op mechanically
Assignment record: artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md,
                   "Neutral reviewers" table, row "SECURITY.md delta"
Scope:             the 2026-09-20 debt-closure delta ONLY — the "## Gate 2 (launch readiness):
                   NOT met" block (SECURITY.md:106-126). Everything else in the file is read
                   for contradiction only, not re-reviewed.
Read at:           working tree, 2026-09-20 (uncommitted; `git status` shows `M SECURITY.md`)
Sources of truth:  artifacts/technical-writer-2026-09-20T1000-security-spec.md (the authoring
                   spec); docs/08-traceability-matrix.md v2.11.3 Approved (front matter + §9);
                   hooks/check_gates.py (audit() and read_rtm_must_rows()); hooks/run_gates.cjs;
                   .claude/gate-runs.log; artifacts/tester-2026-09-20T1000-doc08-spec.md
Governing test:    (1) every factual claim in the delta checked against source, not against the
                   writer's note; (2) FR-131 clause (e) / FR-132 §(d) honesty discipline on a
                   public surface; (3) no overclaim of the delta's OWN rigour; (4) nothing
                   outside the delta moved
Pass bar:          score ≥ 95% AND zero Critical/High/Medium
Score:             96%  (96.5 weighted, rounded down)
Critical 0 · High 0 · Medium 0 · Low 3
VERDICT:           PASS — the technical-writer sets no version (root file); no rework owed
```

---

## 1. Summary (BLUF)

**PASS at 96%, zero Critical/High/Medium, three Lows.** The delta does exactly the job the debt
register asked for and does it honestly. It replaces an **unfalsifiable** phrase ("the traceability
matrix's current approved version" — a claim no reader could ever check, because it names nothing)
with a **named, checkable pin** (`Doc 08 v2.11.3 (Approved)`), and it adds a maintenance paragraph
whose single best property is that it **discloses its own weakness before a reader can find it**:
the figure is a *hand-copied derived copy*, it *can go silently stale*, and here is the exact
command that re-derives it. That is the FR-131(e) register applied to the file's own machinery
rather than only to the product, and it is the correct instinct.

**The strongest thing in the delta is also the riskiest, and it holds.** The new paragraph makes a
falsifiable claim about what a command outputs. I checked it against the code rather than the
prose, and it is accurate — including the subtle part, that the Must/COMPLETE/OPEN triple comes
from the **row-status markers** while §9's published figure is printed **alongside** it as an
independent second signal. The code prints exactly that, and prints an explicit agreement verdict.

**No sentence in the delta reads as a guarantee**, and the delta adds no product promise at all —
every new sentence is about provenance and maintenance. The three Lows are: one inherited
inaccuracy in a parenthetical ("every invariant"), one missing owner for the re-check duty, and my
ruling on the v2.11.3 pin (§6), which I record as a finding because I was asked to, not because
the file is wrong today.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`, 96.5 weighted)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

---

## 3. What I verified rather than accepted

Every factual claim in the delta, checked against source. **Bash is disabled in this session**, so
where the assignment asked me to *execute* a command I verified the claim by three independent
non-executing routes instead, and I say so plainly below rather than implying I ran it. (§5 states
the limits of that method — an honest account of one's own verification is the same discipline this
delta is being scored on.)

| # | Claim in the delta | Checked against | Result |
|---|---|---|---|
| 1 | "Doc 08 **v2.11.3** (Approved)" | `docs/08-traceability-matrix.md:5-6` — `Version: 2.11.3`, `Status: Approved — 08-traceability-matrix-v2.11.3-technical-cycle5.md (PASS 98%, 0C/0H/0M/1L)` | ✓ exact, **and current on disk right now** — Doc 08 has not yet been bumped |
| 2 | "**138 Must-priority requirement rows, 16 are complete and 122 remain open**" | Doc 08 §9 lines 1841-1842: `Must rows with a complete chain \| 138 / 138 \| **16 / 138** \| **FAIL**` and `Open Must rows \| 0 \| **122** \| **FAIL**`; restated in the §9 sign-off row (line 1859) as "Must 138 · COMPLETE 16 · OPEN 122 (11.6%)" | ✓ exact |
| 3 | Source named as "Doc 08 §9 (\"Gate verdict & sign-off\")" | `docs/08-traceability-matrix.md:1834` — `## 9. Gate verdict & sign-off` | ✓ section number **and** title both correct |
| 4 | `--audit` "reports the Must / COMPLETE / OPEN triple read from the RTM's own row-status markers" | `hooks/check_gates.py:589-590` — `print(f"  derived from row status markers: {s['must']} Must rows, {s['complete']} COMPLETE, {s['open']} OPEN")`; the derivation itself at `read_rtm_must_rows()` lines 234-255, which counts the `✅`/`☐` per-row markers in §3.1/§3.2 | ✓ exact, including the word "derived" and the marker provenance |
| 5 | "…**alongside** Doc 08 §9's published figure" | `check_gates.py:591-592` — `print(f"  published by RTM section 9:      {s['published_complete']} COMPLETE, {s['published_open']} OPEN")`, parsed independently at lines 93-95 / 257-268 | ✓ — and note the wording is **carefully** right: the *triple* is attributed to the row markers, the *published figure* to §9. §9's line prints COMPLETE and OPEN only (no Must denominator), so calling it a "figure" rather than a "triple" is precise, not loose |
| 6 | "…so a reader can see directly whether the two independent signals still agree" | `check_gates.py:593-597` — on disagreement it prints `** UNVERIFIED: …`; otherwise `the two independent signals AGREE` | ✓ — the code does not merely let a reader compare, it states the verdict outright. The claim is if anything **understated** |
| 7 | "(`--audit` reports every invariant…)" | Module docstring lines 1-43: three invariants — **(a)** memory protocol, **(b)** RTM zero-gap, **(c)** review loop. `audit()` (lines 548-603) reports **(c)** and **(b)**. It does **not** report **(a)** | ✗ **overstated** — see ISS-01. Inherited verbatim in substance from `CLAUDE.md` ("`--audit` reports every invariant without blocking"), so the drift is the handbook's, not the writer's invention |
| 8 | "…it does not block anything" | `check_gates.py:607-608` + `run_gates.cjs:158-167` — `--audit` emits no `{"decision":"block"}` contract and is never the hook's decision path; `run_gates.cjs` labels it `REPORT`, not `ALLOW`/`BLOCK` | ✓ in the sense that matters (it takes no gate action). One nuance folded into ISS-01: `audit()` `return 1 if blocked else 0`, so a reader running it mid-rework can see `BLOCK` lines and a non-zero exit |
| 9 | "Last verified: **2026-09-20** … `--audit` reported 138 Must rows / 16 COMPLETE / 122 OPEN" | `.claude/gate-runs.log` lines 308, 309, 311 — three `--audit` runs today (20:35:58Z, 20:41:28Z, 20:48:33Z), **all `exit=0`** (exit 0 ⇒ zero documents blocking). Combined with claim 2 (Doc 08 on disk still publishes 16/122) the printed triple is determined. Independently corroborated by three prior reports recording the literal output of real runs: `artifacts/reviews/07-test-cases-suites-v2.8.1-technical-cycle3.md:118`, `…v2.8.0-technical-cycle2.md:123`, `artifacts/reviews/08-traceability-matrix-v2.11.0-technical-cycle2.md:117` — each "**138 Must / 16 COMPLETE / 122 OPEN**; the two independent signals AGREE" | ✓ corroborated three ways; **not** re-executed by me (§5) |
| 10 | Both links in the changed block resolve | `docs/08-traceability-matrix.md` ✓ exists; `docs/09-release-notes.md` ✓ exists | ✓ no dead link; the `Doc 08` link moved to the first mention and the later mention is now plain text — **exactly one** live link to it, no duplicate |
| 11 | The applied text matches the authoring spec | `artifacts/technical-writer-2026-09-20T1000-security-spec.md:52-72` vs `SECURITY.md:106-126` | ✓ **character-for-character**, including line breaks — 8-line paragraph then a 10-line paragraph, matching the spec's REPLACE block exactly. The PM applied the op faithfully and added nothing |

### Out-of-scope text: did anything else move?

`git diff` was not available to me (Bash disabled), so I proved this positionally and semantically
rather than byte-wise. The evidence is consistent and one-directional:

- **The op is entirely below line 105.** `TD-RTM-01` (the `UT-0841`..`UT-0848` duplicate-id bullet)
  sits at **SECURITY.md:101-104** in the post-change file — precisely where the authoring spec's
  applier note located it in the **pre**-change file ("lines ~101-104"). An unchanged line number at
  line 101 means every line above it is positionally identical.
- **The assignment record independently pins the pre-change geometry**: it cites the debt at
  `SECURITY.md:109-113`, which is where the old 7-line Gate-2 paragraph's figure sentence sat given
  an unchanged prefix through line 108. It matches.
- `REL-LIM-17` (90-92) and `REL-LIM-18` (93-97) are present and intact; `REL-LIM-18`'s two commit
  SHAs still read `0a5c542` / `84e2203`, and `84e2203` is the real HEAD-side commit
  ("build/v1 fr131 honesty (#19)"). "Reporting a vulnerability" (128-139) and "What not to report"
  (141-146) are intact and shifted down by exactly the 11 added lines.
- The spec authorises **one** op, the writer's note records one op, and `git status` shows a single
  modified file.

**Finding: no evidence of any out-of-scope change, and positive evidence against one.** I record in
§5 that this is strong circumstantial proof, not a byte-level diff.

---

## 4. Per-criterion scores

Business rubric (B1–B6), adapted to a root public file: B3 "Traceability & IDs" is read as *do the
citations resolve at the source they name*; B5 "Testability" as *is the claim falsifiable by a
reader who does not trust us*.

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | The delta names the actual problem (a figure with no tie to its source) and solves that problem rather than the adjacent one. It notably does **not** touch the number — the debt was never a wrong number, and a rework that "freshened" a correct figure would have obscured that. |
| B2 Completeness | 15 | 95 | 14.25 | Source, section, section title, command, expected output, re-check trigger, last-verified date and last-verified version are all present. The one gap is an **owner** for the recurring duty (ISS-02). No placeholders. |
| B3 Traceability & citations | 20 | 98 | 19.60 | Every citation resolves **at the source it names** — version, status, section number and section title all check out, which is rarer than it sounds and is the specific failure Doc 02's `ISS-C2-03` was about this same session. |
| B4 Correctness & consistency | 15 | 94 | 14.10 | Claims 1-6 and 9-11 verified exact. One inherited inaccuracy (ISS-01). No contradiction with the rest of the file: the delta's "Doc 08 §9 is the source" sits correctly beside the pre-existing "those documents, not this one, are the source of truth". |
| B5 Testability / falsifiability | 15 | 100 | 15.00 | This is the deliverable and it is fully achieved. Before: a phrase no reader could check. After: a named version, a named section, a command, and the output to expect from it. A hostile reader can now falsify this file in about ten seconds — which is the point. |
| B6 Convention compliance | 15 | 93 | 13.95 | ISO-8601 dates ✓ (`2026-09-20`). Register mostly plain and consistent with the file. "invariant" is unexplained jargon in a file otherwise pitched at a lay reader (ISS-01). No RFC 2119 keyword is needed here and none is misused. |
| **Total** | **100** | — | **96.50 → 96%** | — |

---

## 5. Limits of this verification (stated, not implied)

The assignment asked me to run `node hooks/run_gates.cjs --audit` myself. **Bash is disabled for
this session, in subagents as well as the parent**, so I could not execute it. I did not treat that
as a reason to accept the claim on assertion, and I do not claim a run I did not make.

What I did instead, and what it is worth:

- **Stronger than a run, for the claim actually at issue.** The delta's claim is about *what the
  command reports* — its output shape and provenance. I read `audit()` (`check_gates.py:548-603`)
  and `read_rtm_must_rows()` (211-303) directly, which settles the output shape for **every** run,
  not just one.
- **Weaker than a run, for the specific numbers.** For those I relied on: Doc 08 §9 on disk
  (determines the "published by RTM section 9" line outright), three `--audit` runs recorded in
  `.claude/gate-runs.log` today at `exit=0`, and three prior review reports quoting the literal
  output. I did not re-count the 138 `✅`/`☐` row markers by hand; the derived half of the triple is
  therefore corroborated, not personally recomputed. **This does not matter for the verdict**,
  because the Must figures are expressly out of my scope and belong to the tester.
- **`git diff` was likewise unavailable**; see §3's positional proof. I ask the **PM**, who applied
  the op and has the tooling, to run `git diff SECURITY.md` once and confirm the diff touches only
  lines 106-126. I expect it to, and the PASS does not depend on it — but "I could not check that
  byte-wise" is worth one sentence in the record rather than a silent assumption.

---

## 6. Ruling — the v2.11.3 pin, when Doc 08 v2.12.0 lands in this same session

**Ruling: pinning v2.11.3 was the right call, and it is right for three independent reasons. The
PM's stated intent to update the pin once v2.12.0 is Approved IS sufficient — on one condition,
that the follow-up is *recorded* rather than left as session intent.** Recorded as **ISS-03,
Low**, and Low deliberately: there is no present defect in the file.

**1. A public file must cite an Approved source.** Doc 08 v2.12.0 will be `Status: In Review` from
the moment the tester writes it until a neutral reviewer passes it. Citing an In-Review figure in a
public security file would publish an unratified number — strictly worse than citing a ratified
older one, and against the file's own house rule that the governed documents are the source of
truth. Doc 08 itself models this discipline (§9 retracts a claim precisely because Doc 03 v2.13.0
was "In Review"). "Do not chase a moving target" was not caution here; it was the only defensible
choice available to the writer.

**2. A statement time-indexed with "As of" cannot go stale — only its currency can.** The sentence
reads "**As of** Doc 08 v2.11.3 (Approved), of 138 Must-priority requirement rows, 16 are complete
and 122 remain open." That is a claim about a named version, and it will remain **true forever**,
because v2.11.3 will always have said that. What ages is not the sentence's truth but its
*currency*. The old text had the opposite property: "the current approved version" was a claim
about the present that named nothing, so it could be silently *false* and no reader could tell.
**The delta trades an unfalsifiable claim for a falsifiable one, and a claim that can only become
out-of-date is a strictly better failure mode than one that can become wrong invisibly.** That is
the whole substance of the debt being closed, and the pin is the mechanism that closes it.

**3. The number does not move at v2.12.0 — only the label does.** I checked this rather than
assuming it. `artifacts/tester-2026-09-20T1000-doc08-spec.md:46-47` states for v2.12.0:
"**NOTHING ELSE NORMATIVE MOVES … Must 138 · COMPLETE 16 · OPEN 122 (11.6%)**", restated at lines
118-120 as ruled row by row. So after v2.12.0 Approves, SECURITY.md's **figure is still correct**
and only its version citation is one version behind. The worst case here is a stale *label* on an
accurate *number* — not a wrong number on a public security page. That is what makes this Low
rather than Medium.

**Is "the PM will update it later this session" sufficient?** Yes — with the condition. It is
sufficient *because the delta prescribes its own follow-up*: "Re-check this figure on every Doc 08
version bump" is in the file, in bold, and a Doc 08 version bump is precisely what is about to
happen. A maintenance note that triggers on the very next event is working, not failing. The
condition is that the trigger must fire against a **record**, not a memory: the debt being closed
today existed because a correct figure had nothing durable tying it to its source, and "the PM
intends to" is the same species of undurable tie. Concretely, and this is the whole of what I ask:

- **The PM** records the follow-up in this session's assignment record — the "Outcomes" table row
  for the SECURITY.md delta is the natural place — as an owed action: *"after Doc 08 v2.12.0 is
  Approved, re-verify the triple and advance SECURITY.md's pin v2.11.3 → v2.12.0; expected: figures
  unchanged (tester spec §OP 1)."*
- **If v2.12.0 does not reach Approved this session**, the pin **stays at v2.11.3**. It must not be
  advanced to an In-Review version to look current — that would convert a Low into a real defect
  and undo reason 1.
- **If the pin is still v2.11.3 after v2.12.0 is Approved and the session closes**, that becomes a
  **Medium** at that point — a public file citing a superseded version with no register entry
  saying so. It is not a Medium today, because today v2.11.3 *is* the Approved version on disk.

I record for completeness that Doc 08 on disk at the time of this review is still **v2.11.3,
Approved** (front matter, lines 5-6), so the pin is not merely defensible in principle — it is
**exactly correct against the repository as it stands right now**.

---

## 7. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Low** | B4 / B6 | `SECURITY.md:122-123`, the parenthetical "(`--audit` reports every invariant; it does not block anything)" | **Mild overclaim of the tool's coverage, plus jargon.** `hooks/check_gates.py` defines three invariants — (a) memory protocol, (b) RTM zero-gap, (c) review loop. `audit()` reports **(c)** and **(b)** only; it never touches (a). "Every invariant" is therefore not accurate. Two sub-points: (i) "invariant" is unexplained jargon in a file otherwise readable by a non-engineer, and it is doing no work for the reader — the reader only needs to know the command is safe to run; (ii) `audit()` ends `return 1 if blocked else 0` and prints `BLOCK  <doc>` lines when a document version lacks a passing review, so a reader running it mid-rework sees the word "BLOCK" and a non-zero exit next to a sentence saying "it does not block anything". Both true statements, uncomfortable neighbours. **Provenance noted in the writer's favour:** `CLAUDE.md` says "`--audit` reports every invariant without blocking" — the writer followed the handbook, and the drift originates there. | Reword to claim only what is true and needs no glossary, e.g. "(`--audit` only prints this report — it changes nothing and stops nothing)". **Not owed before the PASS**; a polish item for the next SECURITY.md touch. Separately, and outside this review's scope: the same phrase in `CLAUDE.md` is worth a look by whoever next edits the handbook. |
| ISS-02 | **Low** | B2 | `SECURITY.md:123-124`, "**Re-check this figure on every Doc 08 version bump, and before any public release.**" | **The duty has a trigger and a command but no owner.** The org's named-owner rule formally governs requirements and stories, not root public files, so this is not a convention breach — but the debt this delta closes was created by exactly this shape of absence: a correct figure with nothing durable attached to it. An unowned recurring duty in a public file is a duty that depends on whoever happens to remember. | Either name the maintaining role in one clause, **or** — better, and my preference, because it keeps the public file lay-readable and puts the duty where duties are tracked — register the recurring re-check in the internal debt register (Doc 06 §7) so it is carried by the same machinery as every other owed item. **This is an internal fix; it does not require a SECURITY.md edit.** Routed to the **PM**, not the technical-writer. |
| ISS-03 | **Low** | B4 | `SECURITY.md:110`, the `v2.11.3` pin | **The pin will be superseded within this session by Doc 08 v2.12.0.** Full reasoning and ruling at §6: the pin is correct as written, the number does not change at v2.12.0, and the delta prescribes its own follow-up. Low, not Medium, because there is **no present defect** — Doc 08 on disk is v2.11.3 Approved. | The PM records the pin-advance as an **owed action** in the assignment record's Outcomes table, to be executed **only after** Doc 08 v2.12.0 reaches `Approved`. Do **not** advance the pin to an In-Review version. If v2.12.0 Approves and the pin is not advanced before the session closes, re-raise as **Medium**. |

> **Low** issues do not block the pass bar. Zero Critical/High/Medium were found.

### Observations (not issues — no fix owed, recorded for the next toucher)

1. **"The 138/16/122 count above"** (line 117) uses a slash shorthand that never appears above it —
   the paragraph above spells the three numbers out in prose. The order matches, so the mapping is
   unambiguous, and I am not asking for a change; a future editor might prefer "the 138 / 16 / 122
   count" to echo the audit output's own spacing, which it already mirrors.
2. **"Last verified: 2026-09-20" names a date but no verifier.** The claim is true — the figure was
   re-verified against Doc 08 §9 by the technical-writer (its note records the read), and the
   `--audit` runs are in `.claude/gate-runs.log` at `exit=0`. So this is not an FR-132 §(d)
   overclaim. It is simply one degree less attributable than the rest of the file's register, and
   the next re-verification could name its verifier at no cost.
3. **The "derived copy … copied here by hand rather than generated automatically" disclosure is the
   best sentence in the delta** and should survive every future rework. It is the precise inverse of
   the failure mode my brief told me to hunt for — a delta implying its figure is auto-checked when
   it is not. This one says so first, in bold, before the reader can discover it.

---

## 8. FR-131 clause (e) / FR-132 §(d) honesty check

Read as a Grade-8 reader, and read adversarially — looking for anything quotable out of context as
a promise.

- **No guarantee is stated or implied.** Every new sentence concerns provenance and maintenance;
  the delta introduces **no claim about what the product does, protects, or will do**. There is
  nothing here for a reader to mistake for a safety property.
- **No enrolment, identity or privacy claim is introduced** — FR-132 §(d)'s territory is untouched.
- **The section's honest register is preserved, not weakened.** "Gate 2 has not been reached",
  "122 remain open", "Independent audits have not started", "a rollback drill has not been
  executed", "the MACI committee … does not exist yet" are all intact and unsoftened. The new
  paragraph sits after them and takes nothing back.
- **The delta does not overclaim its own rigour** — the specific risk I was asked to test. It says
  the figure is hand-copied, says it can go silently stale, and says so **before** offering the
  command. A weaker draft would have written "verified automatically against Doc 08"; this one
  refuses that sentence. The single blemish is ISS-01's "every invariant", which overclaims the
  *tool's coverage* by one invariant — not the *figure's* rigour — and is inherited from the
  handbook.
- **Net effect on the file's honesty: strictly positive.** An unfalsifiable sentence in a public
  security file is a small honesty defect in its own right, because it presents a checkable-sounding
  claim that cannot in fact be checked. Naming the version removes it.

---

## 9. Routing instruction

**PASS.** `SECURITY.md` is a root public file and carries no `Version:`/`Status:` block, so there is
nothing for the owning role to set to `Approved` and **no rework is owed**. The technical-writer
(Nadia Hassan) is clear; the cycle closes at **cycle 1 of 5**.

To the **project-manager**, three things, none of which gate anything:

1. Record the outcome — `SECURITY.md delta | Cycle 1: PASS 96% (0C/0H/0M/3L) | Final: PASS` — in
   the assignment record's Outcomes table.
2. **Carry ISS-03's owed action** (§6): after Doc 08 **v2.12.0** reaches `Approved`, re-verify the
   triple and advance the pin v2.11.3 → v2.12.0. Expected outcome: figures unchanged. Do not
   advance to an In-Review version.
3. Run `git diff SECURITY.md` once to confirm byte-wise what §3 establishes positionally — that
   nothing outside lines 106-126 moved. I could not run it (§5).

ISS-01 and ISS-02 are accepted Lows: ISS-01 is polish for the next SECURITY.md touch; ISS-02 is an
internal register entry owned by the PM, not a public-file edit.

I raise nothing against Docs 03, 04, 07 or 08. They are being incremented by other roles in
parallel and are not mine to review; where I read Doc 08 and the tester's v2.12.0 spec above, I read
them **as sources**, not as documents under review, and I have neither edited nor ruled on them.
