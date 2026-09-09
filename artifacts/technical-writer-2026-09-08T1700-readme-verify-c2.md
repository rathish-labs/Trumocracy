# Technical-writer session note — 2026-09-08T17:00Z — README/CONTRIBUTING `/verify` delta, cycle 2 rework

```
Role:      technical-writer (Maya Lindqvist) — owning role, unchanged
Trigger:   coordinator message: cycle 1 FAIL, 92%, 0C/0H/2M/5L (product-owner reviewer,
           artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify.md)
Sources read this cycle: PUBLIC-FILES-REVIEW-2026-09-08-verify.md in full (§1 summary, §3
           per-criterion scores, §4 FR-131(e)/FR-132(d) discipline check, §5 all seven
           issues, §6 watch items, §7 staleness sweep, §8 routing); re-checked
           DECISIONS-2026-09-08-VERIFY-PAGE.md §5.1, §5.2, §5.5 item 6 (the facts ISS-01
           cites: starting copy, re-litigation duty, H-17/OI-20/H-16/H-18 falsity-even-of-
           the-planned-check); Doc 14 §1.2 (framing model cited by ISS-02); the current
           README.md and CONTRIBUTING.md (re-read in full before editing, not from memory).
Scope:     Fix every Medium (required) and every Low I can close without widening the delta
           beyond the flagged lines, per the coordinator's brief.
```

## Issues addressed

### ISS-01 (Medium) — `README.md` — CLOSED

**Location (cycle-1 line numbers `:133-134`; same paragraph, now `:132-137`).**

- **Before:** "...(`CON-015`). The fuller design copy — **the wording this page will use once
  enrolment is built** — stays in the code and only renders when the flag is turned on in
  `dev`. See [Doc 14 §1.2]..."
- **After:** "...(`CON-015`). The fuller design copy — **the enrolment sprint's starting
  point, not a promise of the words the finished page will use** — stays in the code and
  renders only when the flag is on in `dev`. **It must be checked and rewritten before that
  flag turns on: some of it is wrong even about the planned check — the outside company that
  will run it does see the document, this pilot has only one government-run check to offer
  (not the several the text describes), and a scrambled version of the document is kept, not
  nothing.** See [Doc 14 §1.2]..."

Closes the issue two ways the report required: (i) the false appositive ("the wording this
page will use") is gone, replaced with "starting point, not a promise"; (ii) the re-litigation
duty is now stated plainly, in the same terms `CONTRIBUTING.md:44` already uses. Went beyond
the reviewer's minimal suggested fix per the coordinator's explicit instruction to also state
*why* the retained copy is wrong even of the planned check, citing without IDs (to stay
Grade-8): vendor sees the document (`H-17`), single-rail-only issuer (`OI-20`), a scrambled but
retained document reference (`H-16`/`H-18`) — phrased in plain words, no jargon, no id
inline (the ids stay in the governing record this paragraph already points to).

### ISS-02 (Medium) — `README.md` — CLOSED

**Location (cycle-1 line numbers `:32-33`; now `:32-36`, Status block).**

- **Before:** "**v1 also checks that you are a real, legal-age person — not that you are a
  *unique* one.** Someone who holds two legitimate government identity documents **can pass
  the check twice** and hold two counting accounts. One-person-one-vote is a v2 property; v1
  does not guarantee it..."
- **After:** "**v1's design also checks that you are a real, legal-age person — not that you
  are a *unique* one.** That check is **not built yet** (see "What is actually built", below).
  **When it is built**, someone who holds two legitimate government identity documents **will
  be able to pass it twice** and hold two counting accounts. One-person-one-vote is a v2
  property; v1 does not guarantee it..."

Re-tenses the claim from present ("checks", "can pass") to planned/future ("design also
checks", "not built yet", "when it is built", "will be able to"), removing the contradiction
with the `/verify` bullet's "no check exists yet" twenty-odd lines later in the same file.
Used the coordinator's required framing (planned, not built, model = Doc 14 §1.2's "not fully
available yet" construction) and pointed the reader at the section that elaborates, matching
the file's own existing cross-reference idiom ("see 'What is actually built', below" — already
used verbatim in the Repository-layout code comment). Kept the uniqueness caveat and the
"v1 does not guarantee it" / `FR-132`(d) sentence intact and unweakened, as instructed.

### ISS-03 (Low) — `README.md:109-110` (repository-layout comment) — CLOSED

- **Before:** `apps/web/  the citizen-facing PWA — three flagged demo features plus one`
  / `placeholder page (see "What is actually built", below)`
- **After:** `apps/web/  the citizen-facing PWA — three flagged demo features plus one` /
  `flag-gated route that shows a placeholder in the public build` / `(see "What is actually
  built", below)`

Used the reviewer's own suggested wording verbatim ("…plus one flag-gated route that shows a
placeholder in the public build").

### ISS-04 (Low) — `CONTRIBUTING.md:41-45` — CLOSED

- **Before:** "...the page sits behind the `enrolment_ui` flag, off in the public build,
  where it shows a short honesty notice instead of the design copy..."
- **After:** "...the page sits behind the `enrolment_ui` flag, off in the public build
  **because enrolment is not built and cannot start until `CON-015` (a legal opinion)
  clears**, where it shows a short honesty notice instead of the design copy..."

Inserted the reviewer's suggested clause verbatim (adapted to fit the sentence's existing
punctuation), stating *why* the page is gated, not only *that* it is.

### ISS-05 (Low) — `CONTRIBUTING.md` §1 — CLOSED

- **Added, new sentence** after the "citizen-facing account" clause: "The placeholder's exact
  text is pinned by `UT-0890` (`apps/web/test/safety-surfaces.test.tsx`); changing it will
  fail the suite."

Names the enrolment-class guard in the enrolment paragraph, **not** in the five-row FR-131(e)
guard table above it — the reviewer explicitly agreed that table is scoped to the
participation-act class and `UT-0890` belongs to the FR-132 §(d) class instead. No new table
row added.

### ISS-06 (Low) — `CONTRIBUTING.md:45-48` — CLOSED

- **Before:** "...route it through the product-owner role too — the same caution as for a
  participation-act claim, **for the two questions still not settled**."
- **After:** "...route it through the product-owner role too — the same caution as for a
  participation-act claim. **Two of these questions are still unsettled — Doc 02 §13 (j)
  items (1) and (2).**"

Split into two sentences exactly as the reviewer suggested, so the routing duty ("route it
through the product-owner... for a participation-act claim") reads as unqualified and the
"still unsettled" count is stated as a separate, explicit fact about items (1)/(2) only — no
longer readable as narrowing the duty itself to just those two questions.

### ISS-07 (Low, `SECURITY.md`) — NOT applied; reason recorded

The reviewer flagged this as optional and "writer's call." I did **not** add a `/verify`
closed-defect entry to `SECURITY.md`, for two reasons:

1. **No `REL-LIM-##` id has been minted for it.** `REL-LIM-18` (the precedent cited) is a
   release-notes-register id; minting a new one is not a call the technical-writer has
   authority to make on its own — that belongs to whichever role owns Doc 09's `REL-LIM`
   register (sre) or Doc 02/06's item numbering, and none of the review-assignment,
   DECISIONS, or engineer-note artifacts for this session mint one for the `/verify` fix.
   Writing a `SECURITY.md` line that implies a register id exists, when it does not, would be
   its own small honesty problem.
2. **The fix is uncommitted (per the report's own W-2).** `REL-LIM-18`'s text cites two real
   commit SHAs (`0a5c542`, `84e2203`) as evidence of closure. The `/verify` remedy has neither
   — engineer and technical-writer changes are both still in the working tree. Declaring it
   "closed" in a security register, in the same sentence-pattern as a merged, SHA-verified fix,
   would overstate its state. The finding is not lost: it already lives in Doc 06 §7 item 28
   and Doc 02 §13 (j)(3), which is where the reviewer noted it is discoverable today.

If the project-manager or sre wants this added once the drop is committed and a `REL-LIM` id
is assigned, that is a small, mechanical follow-up — flagged here rather than silently
dropped, per the reviewer's own instruction on W-items.

## Constraints re-checked against the reworked copy

- **Banned words** (`private`, `anonymous`, `receipt-free`, `secure`): none introduced,
  anywhere, negated or not.
- **Grade-8:** kept sentences short; the ISS-01 addition is the longest new sentence in the
  delta and was read back twice for plain wording ("the outside company that will run it does
  see the document" rather than "the third-party vendor").
- **No claim the enrolment design works today:** ISS-01's added clause states facts about the
  *planned* check ("even about the planned check"), never about today; ISS-02's rewrite moves
  the whole claim to future tense explicitly.
- **No claim of progress on enrolment:** none of the six changes describes a capability
  gained; all describe wording being corrected or a reason being made explicit.
- **Doc 02 version:** cited as "Doc 02 §13 (j)(3)" throughout, with **no version pin** — Doc 02
  is now v2.17.3 (In Review) per the coordinator's note; neither file names a Doc 02 version
  anywhere, cycle 1 or cycle 2.
- **Delta not widened beyond what was required:** every change is inside the six lines/clauses
  the report and the coordinator named. No other paragraph in either file was touched.

## IDs touched (referenced only — this role mints none)

`FR-132` §(b)/(d)/(e), `CON-015`, `H-17`, `OI-20`, `H-16`, `H-18` (referenced in plain words,
not inline, in the ISS-01 fix), Doc 02 §13 (j)(1)/(2)/(3), Doc 14 §1.2, `UT-0890`,
`enrolment_ui` flag.

## Gate/hook status observed

**Two stops this cycle.** First stop (immediately after writing the rework, before this
addendum): the hook showed `02-requirements-srs.md v2.17.3` (business — reviewer-qa) and
`06-coding-and-ut.md v2.8.0` (technical — tester) both blocking, matching the coordinator's
advance notice.

**Second/final stop** (after that first block was recorded and I stopped without touching
either document) returned:

> - `06-coding-and-ut.md v2.8.0` (technical review) — report EXISTS
>   (`06-coding-and-ut-v2.8.0-technical-cycle1.md`) but does not satisfy the gate:
>   Verdict=FAIL, score=95% C=0 H=0 M=1

`02-requirements-srs.md` is no longer listed — its v2.17.3 review evidently now clears the
hook's bar; not my document to check further. `06-coding-and-ut.md` v2.8.0 has a report but
fails the pass bar (score alone would clear 95%, but the bar is score ≥95% **and** zero
Critical/High/Medium — one Medium still fails it). Per
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`'s "Neutral reviewers" table:
Doc 06's owner is the **engineer**, its assigned neutral reviewer is the **tester**. I am
neither. A FAIL routes rework to the **owning role** (engineer), not to whoever last hit the
stop hook. **I am not authoring a review report and not reworking Doc 06** — it is not mine to
own or fix. Recording this block here and stopping, as both cycle-1 and cycle-2 notes have
done consistently: the project-manager sequences the engineer's rework of Doc 06 v2.8.1 (or
whatever version follows) and its re-review by the tester.

## Open items / handoff

- This cycle-2 README/CONTRIBUTING delta is owed a re-review by the **same product-owner
  reviewer instance** (assignment record; report §8 item 2: "re-dispatch this same reviewer
  for cycle 2, author remains excluded"). Unaffected by the Doc 06 block above — different
  document, different reviewer, different report path (`artifacts/status/PUBLIC-FILES-REVIEW-*`,
  not `artifacts/reviews/`).
- **`06-coding-and-ut.md` v2.8.0 — cycle 1 FAIL, 95%, 1 Medium** — owned by the engineer,
  reviewed by the tester; rework and re-review both outside this role's lane. Flagging for the
  project-manager to sequence, per the hook's own routing instruction.
- ISS-02's scope note (the report flagged that `README:32-33` sits outside the literal
  assignment row) was resolved by the coordinator's brief, which explicitly put it in scope
  for cycle 2 — recorded here so the project-manager's Outcomes-table entry can reflect that
  the scope question was answered, not silently carried forward.
- ISS-07 (SECURITY.md) deliberately not applied — see reasoning above; flagged as a possible
  follow-up once the drop is committed and a register id exists.
- W-1 (640-count depends on Doc 06 v2.8.0's un-reviewed/now-FAILing state — **live risk**: if
  Doc 06's rework changes `UT-0890`'s assertion count or the overall test total, README:158
  and CONTRIBUTING:110 will need re-checking again), W-3 (Doc 02 §13 (j)(3) citation should be
  re-checked once v2.17.3's own review is confirmed passing), W-4 (Arabic debt) and W-5 (TC
  row for `UT-0890` owed to the tester) are unchanged from cycle 1 and remain the
  project-manager's to carry; nothing in this cycle's edits depends on them beyond the W-1
  re-check flagged above.
- Did not commit (no Bash tool available this session; not instructed to commit).

## Files touched

- `D:\Projects\Trumocracy\README.md` — three edits: Status block (`:32-36`), repository-layout
  comment (`:109-111`), `/verify` bullet (`:132-137`).
- `D:\Projects\Trumocracy\CONTRIBUTING.md` — one paragraph, three edits combined (`:37-50`):
  ISS-04 clause insertion, ISS-05 new guard sentence, ISS-06 sentence split.
- `D:\Projects\Trumocracy\SECURITY.md` — **not modified** (ISS-07 declined; reasoning above).
- `D:\Projects\Trumocracy\artifacts\technical-writer-2026-09-08T1700-readme-verify-c2.md` —
  this note (pre-registered path; did not open `artifacts/memory-index.json`).

## Every line changed, and which ISS each closes

| File | Line(s), cycle-2 file | ISS closed |
|---|---|---|
| `README.md` | `:32-36` (Status block, "v1's design also checks...") | ISS-02 |
| `README.md` | `:109-111` (repository-layout code comment) | ISS-03 |
| `README.md` | `:132-137` (`/verify` bullet, "fuller design copy" clause) | ISS-01 |
| `CONTRIBUTING.md` | `:44` ("off in the public build because...") | ISS-04 |
| `CONTRIBUTING.md` | `:45-47` (new sentence naming `UT-0890`) | ISS-05 |
| `CONTRIBUTING.md` | `:49-50` (sentence split at "participation-act claim") | ISS-06 |
| `SECURITY.md` | — (no line changed) | ISS-07 — declined, reasoned above |
