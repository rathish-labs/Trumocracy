# Public-files review — `/verify` delta — cycle 1 — README · CONTRIBUTING · SECURITY

> **Not a governed-document review.** Public root files, not numbered documents. This report lives
> in `artifacts/status/` and deliberately avoids the `document-review` machine-parseable field
> names, so it cannot enter the SubagentStop hook's cycle counter. The business rubric and the
> severity scale are the scoring frame only. (Same convention as
> `artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06*.md`.)

```
Files reviewed:   README.md · CONTRIBUTING.md · SECURITY.md
Scope:            the /verify delta only — the lines changed by the technical-writer per
                  artifacts/technical-writer-2026-09-08T1200-readme-verify.md — plus a
                  staleness/contradiction sweep of the three files around it
Cycle:            1  (first cycle of this delta; the 2026-09-06 public-files loop closed
                  separately at cycle 4, PASS 98%)
Author note:      artifacts/technical-writer-2026-09-08T1200-readme-verify.md
Read at:          working tree, 2026-09-08 (uncommitted — the engineer's code drop and the
                  technical-writer's edits are both uncommitted)
Review date:      2026-09-08
Reviewer role:    product-owner (Priya Raghunathan) — Accountable for public-facing claims
Author excluded:  technical-writer (Maya Lindqvist)
Assignment record: artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md, "Neutral
                  reviewers" table, row: "README / CONTRIBUTING delta | business,
                  FR-131(e)/FR-132(d) discipline | product-owner (new instance) — report
                  artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify.md, NOT under
                  artifacts/reviews/ | RACI: Accountable for public-facing claims | excluded:
                  technical-writer (author)"
Mode:             business rubric (B1–B6), adapted; severity C/H/M/L
Governing test:   (1) the facts — DECISIONS-2026-09-08-VERIFY-PAGE.md §1, §2, §5 (remedy (a),
                  §5.3 normative placeholder, §5.7 what the decision does NOT do); the
                  engineer's applied code; Doc 14 §1.2; Doc 02 §13 (j) (read-only).
                  (2) FR-131 clause (e) / FR-132 §(d) discipline on a public surface.
                  (3) nothing else in the three files stale or contradictory.
Pass bar:         score ≥ 95% AND zero Critical/High/Medium
Score:            92%  (92.4 weighted)
Critical 0 · High 0 · Medium 2 · Low 5
VERDICT:          FAIL — routes back to the technical-writer for cycle 2 (cap 5)
```

---

## 1. Summary (BLUF)

**FAIL at 92%, on two Mediums.** The delta does the main job well: the "open, unruled question"
line is gone from both files, the `/verify` bullet is factually exact against the code the
engineer actually shipped, and every pin in it resolves. Neither Medium is an FR-131 clause (e)
breach and neither claims progress on enrolment. Both are **contradictions inside README.md**:

- **ISS-01 (Medium)** — `README:133-134` calls the retained design strings "**the wording this
  page will use once enrolment is built**". The governing record says the opposite: they are the
  enrolment sprint's *starting copy*, and `DECISIONS §5.5` item 6 requires them to be
  **re-litigated before the flag turns on** — because `DECISIONS §5.2` documents several of them
  as false even of the *planned* v1 check. `CONTRIBUTING:159-162` states the re-litigation rule
  correctly; README contradicts it and, in doing so, presents strings like "The document never
  leaves your phone" as the project's future promise.
- **ISS-02 (Medium)** — `README:32-33` still reads "**v1 also checks that you are a real,
  legal-age person**" in the present tense, and "can pass the check twice". The new bullet
  eleven paragraphs later says "**no check exists yet**". The delta did not create the old line,
  but it created the contradiction, and the 2026-09-08 ruling is precisely that a public surface
  must not state an unbuilt thing as current fact. Doc 14 §1.2 already models the correct
  framing ("Not fully available yet… There is no working screen you complete today", then "What
  v1 actually **asks for**"); README lacks it.

**What I verified rather than accepted.** Every factual claim in the new bullet was checked
against source, not against the writer's note:

| Claim in the delta | Checked against | Result |
|---|---|---|
| flag `enrolment_ui`, "on in dev and off in staging and production" | `packages/protocol/src/flags.js:80-93` — `defaults: { dev: true, staging: false, prod: false }` | ✓ exact |
| "the link does not appear in the site's navigation" | `apps/web/src/components/SiteHeader.tsx:19,40` — the `/verify/` `li` is flag-gated, with the DECISIONS §5.1 citation in a comment | ✓ |
| "the page itself shows a short notice: no check exists yet, and… what the planned check will and will not do" | `apps/web/src/app/verify/page.tsx:52-78` (`VerifyUnavailable`, returned when the flag is off) + `en.ts:102-104ff` (`unavailable*`, §5.3 text) | ✓ |
| "Enrolment is not built and cannot start until a legal opinion for the first pilot country is finished (`CON-015`)" | DECISIONS §1 and §5.3 planned[3]; flags.js `removeBy` | ✓ |
| "the fuller design copy… stays in the code" (no string deleted) | `verify/page.tsx:80-135` renders the full screen when the flag is on; `en.ts:72-75` header comment marks the block design-only | ✓ (but see ISS-01 for *how* it is described) |
| "Doc 14 §1.2 for the citizen-facing account" | `docs/14-user-guide.md:324-368` — "Not fully available yet in version 0.1.0", two-step model, vendor, discard, Aadhaar-only exclusion | ✓ resolves, no contradiction |
| "Doc 02 §13 (j)(3) — ruled and closed 2026-09-08" | `docs/02-requirements-srs.md:3235` — "(3) — THE RULING (closed 2026-09-08)"; row status "(3) **RULED 2026-09-08**" | ✓ and correctly scoped to (3), not to the PARTIAL row |
| decision-record path | `artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md` exists, §5.1–§5.7 as cited | ✓ |
| `npm test` "640 tests… (2026-09-08)", README:158 and CONTRIBUTING:110 | engineer's note (640/640: contracts 95 + protocol 151 + sdk 244 + ui 18 + indexer 16 + web 116 = **640** ✓); Doc 06 v2.8.0 §3 "Total 625 → 640" | ✓ arithmetic checks; see watch item W-1 |

**Doc 02 was read, not touched.** I opened `docs/02-requirements-srs.md` read-only to resolve the
§13 (j)(3) citation. I made no edit to it; its v2.17.3 rework belongs to the other product-owner
instance.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (92%)
- Critical = 0? yes · High = 0? yes · **Medium = 0? no (2)**
- **Verdict: FAIL.** Cycle 1 of a cap of 5. Rework returns to the **technical-writer** (owning
  role for the public root files); I edited nothing.

---

## 3. Per-criterion scores

| Criterion | Weight | Score | Weighted | Notes |
|---|---|---|---|---|
| B1 Outcome & problem clarity | 20 | 95 | 19.0 | The inventory now answers the reader's real question — is this page a working check? — in the first two sentences. The "unruled question" framing is gone from both files and correctly re-attached to items (1)/(2) only. |
| B2 Completeness | 15 | 90 | 13.5 | README's bullet is complete. CONTRIBUTING §1 omits *why* the page is gated (enrolment unbuilt, CON-015) and names no guard for the enrolment class though the section names five for the participation-act class — ISS-04, ISS-05. |
| B3 Traceability & IDs | 20 | 97 | 19.4 | Every pin resolves at the right scope: `enrolment_ui`, `CON-015`, Doc 14 §1.2, Doc 02 §13 (j)(1)/(2)/(3), the decision-record path. `(j)(3)` is cited rather than `(j)`, which is the precise call given the row is PARTIAL. |
| B4 Correctness & consistency | 15 | 78 | 11.7 | Both Mediums land here: one statement contradicts the governing record and the sibling file (ISS-01), one contradicts a sentence in its own file (ISS-02). |
| B5 Verifiability of claims | 15 | 96 | 14.4 | Flag defaults, nav gating, placeholder markup and the test count all verified against source this cycle. Residual dependency on an In-Review Doc 06 is a watch item, not an issue. |
| B6 Convention compliance | 15 | 96 | 14.4 | No banned word un-negated anywhere in the delta; plain register; each file's voice and structure preserved; no persona/email/licence regressions. |
| **Total** | **100** | — | **92.4 → 92%** | |

---

## 4. FR-131 clause (e) / FR-132 §(d) discipline — applied to the changed lines

**No clause (e) breach, in any changed line, in any of the three files.**

- **Banned-word set** (`private` · `anonymous` · `receipt-free` · `secure`): absent from every
  changed line. `CONTRIBUTING:18` still carries them, unchanged, inside the definitional
  statement of the rule itself — the permitted negated/definitional use, and not part of this
  delta.
- **No participation-act claim** is made or altered by the delta; clause (e) has nothing to
  catch. The enrolment class is governed by FR-132 §(d), which is where I scored it.
- **Nothing describes the enrolment design as working today.** Every design sentence in the
  delta is framed "planned", "will", "once enrolment is built", "not built". ISS-01 is not a
  breach of this — it is a claim about the *future copy*, not about today's behaviour — but it
  is the nearest thing in the delta to one, which is why it is a Medium rather than a Low.
- **"Enrolment unbuilt and blocked on CON-015" is stated** — in README (`:131-133`), plainly and
  in Grade-8 words. **Not** stated in CONTRIBUTING (ISS-04).
- **No claim of progress on enrolment** (DECISIONS §5.7 final bullet). Both files describe a
  surface being *removed*, never a capability being *gained*. ✓
- **Grade-8 register:** the new README bullet uses short, plain constructions ("no check exists
  yet", "is not built", "off in staging and production"). The longest sentence is the one ISS-01
  asks to be rewritten anyway.
- **§5.7 respected:** neither file's changed lines rule on `home.steps[0].body` or
  `home.promises[3]`; both re-attach the "open and unruled" framing to exactly those two items,
  matching Doc 02 §13 (j) items (1) and (2). ✓
- **No string deleted / re-labelled** is correctly reflected: the delta describes the design copy
  as retained and dev-only, consistent with §5.1 and with `en.ts:72-75`. ✓

---

## 5. Issues

### ISS-01 — Medium — `README.md:133-134`

> "The fuller design copy — **the wording this page will use once enrolment is built** — stays in
> the code and only renders when the flag is turned on in `dev`."

The clause between the dashes is not true and is contradicted twice over:

- `DECISIONS §5.1`: the strings "are the enrolment sprint's **starting copy**".
- `DECISIONS §5.5` item 6: "they must be **re-litigated before the flag turns on**, not
  rediscovered."
- `DECISIONS §5.2` lists why: `onDeviceBody` describes an on-device document read when the v1
  check is a **third-party vendor check and the vendor sees the document** (H-17);
  `chooseIssuerHelp` presents issuer plurality as a live choice when that rule is **not in effect
  in this pilot** (OI-20, Doc 14 §1.2); `kept` claims a code "which cannot be traced back to you"
  when v1 retains `subject_id_hash` (H-18) and the operator database can link the account (H-16).
- `CONTRIBUTING:159-162` — the sibling file, same delta — states the rule correctly: the design
  strings "**must be re-litigated before that flag is turned on**".

The reader test: a journalist reading README:133-134 concludes that "The document never leaves
your phone" is the wording Trumocracy intends to ship on this page. The project's own record says
that sentence is false of the planned v1 check. This is the FR-132 §(d) class — an enrolment
claim a public surface should not make — displaced one tense into the future.

**Required change** (technical-writer): delete the appositive or replace it with the record's
own framing. Suggested: "The fuller design copy — the enrolment sprint's starting point, which
must be re-litigated before the flag is turned on — stays in the code and renders only when the
flag is on in `dev`." Any wording that (i) drops "the wording this page will use" and (ii) states
the re-litigation duty closes this issue.

### ISS-02 — Medium — `README.md:32-33` (pre-existing line, contradiction created by this delta)

> "**v1 also checks that you are a real, legal-age person — not that you are a *unique* one.**
> Someone who holds two legitimate government identity documents **can pass the check twice** and
> hold two counting accounts."

Present tense, twice, about a check that does not exist: `StubIdDocumentChecker.IS_INSECURE_MOCK()`
returns true (Doc 06 §7), and `README:131` now says in the same file "**no check exists yet**".
An ordinary reader of the Status block concludes Trumocracy checks government ID today and
merely fails to deduplicate people — an overclaim of *integrity*, the mirror image of the
overclaims this repository's honesty rule usually catches. The 2026-09-08 ruling (`DECISIONS §1`)
is general: "A public surface **MUST NOT state an unbuilt guarantee as current fact.**"

This line passed the 2026-09-06 loop, before the ruling and before the file contained a sentence
contradicting it. It is now stale.

**Required change** (technical-writer): re-tense to the design, keeping the uniqueness caveat
intact and keeping the paragraph's force. Doc 14 §1.2's construction is the model — "What v1
actually **asks for**" under a "not fully available yet" callout. Suggested: "**v1's design also
checks that you are a real, legal-age person — not that you are a *unique* one.** That check is
not built yet (see below); when it is, someone who holds two legitimate government identity
documents will be able to pass it twice and hold two counting accounts."

**Scope note for the project-manager:** this line sits outside the literal assignment row
("README `/verify` inventory line"). I am routing it anyway, because the delta is what made the
file self-contradictory and the fix is two clauses in the file the technical-writer owns. If the
PM prefers to carry it as a separate item rather than block cycle 2 on it, that is a legitimate
call — but it should be a recorded call, not a silent drop.

### ISS-03 — Low — `README.md:109-110`

The repository-layout comment still reads "three flagged demo features plus **one placeholder
page**". Accurate for the public build, but it is the one place in the file that still describes
`/verify` as if it were not flag-gated, ten lines above the intro that now says it "exists behind
its own flag". Suggested: "…plus one flag-gated route that shows a placeholder in the public
build". Not blocking.

### ISS-04 — Low — `CONTRIBUTING.md:41-45`

The paragraph states *what* was decided (gated, notice instead of design copy) but never *why*:
enrolment is unbuilt and blocked on CON-015. A contributor could read the gate as a copy problem
awaiting a rewrite rather than a capability that does not exist. README states it; CONTRIBUTING's
§1 opens by requiring the README be read first, which is why this is Low and not Medium.
Suggested: add ", because enrolment is not built and cannot start until `CON-015` (a legal
opinion) clears" after "off in the public build".

### ISS-05 — Low — `CONTRIBUTING.md:24-35` and `:41-45`

§1 tells a contributor exactly which tests will fail for the **participation-act** class (the
five-row guard table) but names no guard for the **enrolment** class it discusses immediately
afterwards — although `UT-0890` now pins the placeholder text assertion-for-assertion
(`apps/web/test/safety-surfaces.test.tsx`, 15 assertions, engineer's note). A contributor editing
`verify.unavailable*` will be surprised by 15 failures.

I agree with the writer's decision **not** to add `UT-0890` to the existing table — that table is
scoped to FR-131 clause (e) by the paragraph above it, and `UT-0890` guards the FR-132 §(d)
class. The fix is a sentence in the enrolment paragraph, not a sixth table row. Suggested: "The
placeholder's exact text is pinned by `UT-0890` (`apps/web/test/safety-surfaces.test.tsx`);
changing it will fail the suite."

### ISS-06 — Low — `CONTRIBUTING.md:45-48`

> "If your change touches enrolment or identity-verification copy, route it through the
> product-owner role too — the same caution as for a participation-act claim, **for the two
> questions still not settled**."

The trailing clause can be read as limiting the routing duty to the two landing strings. §6's
bullet is broader (all enrolment copy, including the retained `/verify` design strings), and the
broader reading is the intended one. Suggested: end the sentence at "participation-act claim",
and start a new one: "Two of these questions are still unsettled — Doc 02 §13 (j) items (1) and
(2)." Not blocking.

### ISS-07 — Low — `SECURITY.md` (no change made)

Leaving SECURITY.md untouched was **correct**: I re-grepped it for `verify`, `unruled`, `625`,
`placeholder` and `open question`, and the only hit is "placeholder offset" in the MS-09 schedule
sentence at `:9`, which is unrelated. Nothing in the file became false.

The observation is optional and consistency-shaped: `REL-LIM-18` sets a precedent of listing a
**closed** public-copy defect in SECURITY ("Listed here as an example of the review-and-rework
loop closing a real defect, not as an open item"). The `/verify` overclaim is the same species,
closed the same way, in the same week. A two-line entry would be consistent; omitting it is
defensible because the finding lives in Doc 06 §7 item 28 and Doc 02 §13 (j)(3). **Writer's
call** — I am not requiring it.

---

## 6. Watch items — not issues, routed to the project-manager

- **W-1 — the "640 tests" figure rests on an In-Review document.** It is arithmetically correct
  and corroborated twice (engineer's note; Doc 06 v2.8.0 §3), but Doc 06 v2.8.0 has **not** passed
  the tester's technical review. If that review changes `UT-0890`'s assertion count, README:158
  and CONTRIBUTING:110 need re-checking. (Precedent: the cycle-4 "Doc 08 v2.10.0 figure watch".)
- **W-2 — the delta describes uncommitted code.** The engineer did not commit; the technical-writer
  did not commit. The public files and the behaviour they describe must land together, or the
  README will describe a page that does not behave that way.
- **W-3 — Doc 02 §13 (j)(3) is cited from a version in review.** The (j)(3) *ruling* text is
  stable across v2.17.2 → v2.17.3 (the rework separates the ruling from the application; the
  citation the public files make is to the ruling). Worth one re-check when Doc 02 passes.
- **W-4 — Arabic debt.** The four new `ar.ts` `verify.unavailable*` strings are draft (DECISIONS
  §5.4; Doc 02 §13 tracked deferral (b)). CONTRIBUTING §6's existing "Arabic native-speaker
  review" bullet covers them generically. I agree with the writer that no new bullet was owed;
  flagging so the pre-Gate-2 debt is not lost.
- **W-5 — TC row for `UT-0890`** remains owed to the tester at the next Doc 07/08 touch (per the
  assignment record and the engineer's note). Nothing in the public files depends on it.

---

## 7. Staleness sweep — what I grepped and what I found

Case-insensitive across `README.md`, `CONTRIBUTING.md`, `SECURITY.md`:

| Term | Hits | Ruling |
|---|---|---|
| `unruled` | `CONTRIBUTING:41`, `:163` only | ✓ both now attached to Doc 02 §13 (j) items (1)/(2), which are genuinely open. Zero hits in README. |
| `open question` | none in the three files | ✓ the "open, unruled question" line is gone from both files. |
| `625` | none in the three files | ✓ fully superseded by 640 in both places. |
| `placeholder` | `README:110` (ISS-03), `SECURITY:9` (MS-09 offset — unrelated) | ✓ / ISS-03 |
| `verify` | README: the new bullet, `:110`, plus `npm run verify` (`:163`, `:169`) and `verify.yml` (`:170`). CONTRIBUTING: `:41`, `:160`, plus `verify.yml` (`:85`) and `npm run verify` (`:114`). | ✓ the CI-script hits are a different sense of the word and are correct as they stand. |

Also spot-checked for contradiction, beyond the grep terms: the Status block's mock-verifier and
"not deployed anywhere" paragraphs (intact, still correct), the six-field / open-tier retention
paragraph closed at cycle 3 of the previous loop (`README:61-76`, intact), and CONTRIBUTING §7's
"do not write that review yourself" paragraph (intact, and now matched by the reworded hook text).

---

## 8. Routing

1. **technical-writer (Maya Lindqvist) — owning role, reworks into cycle 2.** ISS-01 and ISS-02
   are required. ISS-03 to ISS-06 are recommended and cheap. ISS-07 is the writer's call. I have
   given suggested wording for each; the wording is a suggestion, the requirement is the fact.
2. **project-manager (Ana-Maria Petrescu)** — record "README/CONTRIBUTING delta: cycle 1 FAIL 92%
   (0C/0H/2M/5L)" in the Outcomes table of `REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`; decide
   the ISS-02 scope question in §5 and record the decision; carry W-1..W-5; re-dispatch this same
   reviewer for cycle 2 (author remains excluded).
3. **Nobody else.** This report does not touch Doc 02 v2.17.3 (reviewer-qa) or Doc 06 v2.8.0
   (tester); both remain with their assigned reviewers.

**I edited none of the three files.** Scored and listed only, per CLAUDE.md's review-and-rework
loop and the assignment record cited at the head of this report.
