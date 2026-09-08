# Anchored spec — Doc 04 v1.5.0 → v1.6.0 (rework cycle 2 of 5)

```
Spec ID:       SPEC-DOC04-v1.6.0-CYCLE2
Target file:   docs/04-test-strategy-master-plan.md
From version:  1.5.0 (In Review — FAILED cycle-1 technical review)
To version:    1.6.0 (In Review, rework cycle 2 of 5)
Author:        Ravi Deshmukh — Principal Architect (owning role; rework is the owner's)
Date:          2026-09-06
Applier:       project-manager's mechanical applier (the architect has Write but not Edit)
Against:       artifacts/reviews/04-test-strategy-master-plan-v1.5.0-technical-cycle1.md
               (FAIL 92%; 0 Critical / 0 High / 1 Medium / 5 Low; reviewer: reviewer-qa,
               Rafael Duarte — neutral, PM-assigned)
Fixes:         ISS-01 (Medium) + ISS-02 … ISS-06 (Low) — all six taken on this touch, none carried
Operations:    21 (OP 1 … OP 21)
Touches:       docs/04-test-strategy-master-plan.md ONLY. No other document, no code.
Revision 1:    OP 19 rewritten 2026-09-06 after the applier reported it matched 0 times — its FIND
               had been truncated to the first sentence of the §22 architect row. A FIND must be
               whole lines; the row is a single 2,174-character table line and is now reproduced
               in full. OPs 1–18 unchanged; each already matched exactly once.
Revision 2:    Pins re-cut 2026-09-06 to HEAD, before application, on the project-manager's
               direction. **Doc 06 is now v2.7.0 (In Review)** — cycle-2 rework by the engineer
               against artifacts/reviews/06-coding-and-ut-v2.6.0-technical-cycle1.md (FAIL 94%,
               one Medium about stale "owed" statements; **nothing about UT-0889**, which was
               registered at v2.6.0 and is unchanged); last Approved Doc 06 remains **v2.5.1**.
               **Doc 02 is now v2.17.1 (Approved)** — 02-requirements-srs-v2.17.1-business-cycle2.md,
               PASS 96%; **clause (e) is unchanged** and v2.17.1 adds **§8 Scenarios 8 and 9** as
               its Gherkin. Doc 07 v2.6.0 and Doc 08 v2.9.0 remain Approved (the tester's
               v2.7.0 / v2.10.0 re-cut is a spec in progress). **No `FIND` was altered by this
               revision** — every anchor still matches the file as it stands; only `REPLACE` text
               changed, in **OPs 1, 2, 3, 7, 8, 16, 18, 19**, plus two new separately-anchored
               operations, **OP 20** and **OP 21**, for the two live Doc 02 pins no existing
               operation covered. Applying a spec whose own pins are stale would re-commit the
               defect class that produced this cycle's Medium.
Revision 3:    OP 20 rewritten 2026-09-06 after the applier reported it matched 0 times (OPs 1–19
               and 21 matched). Two defects, both mine: (a) its third FIND line was transcribed as
               "…(d) and (e).**" when the file reads "…(d) and (e)**," — the period was moved
               inside the bold and the trailing comma dropped; (b) that comma is load-bearing,
               because the sentence **continues onto the next line** ("and its closing sentence
               bans the four words for …"), so the original FIND would have left a re-pinned block
               followed by a mid-sentence fragment. The FIND now runs from the `Source:` label
               through the end of the retained v1.5.0 annotation, the sentence is re-emitted
               **whole and unaltered**, and the new `_(v1.6.0, Revision 2 …)_` annotation sits
               **after** it rather than inside it. **No other operation is touched.**
```

## How to apply

- Fences below are **four backticks**. Everything between them is literal file text.
- Every `FIND` matches **exactly once**. Apply the OPs **in order**; none overlaps another.
- **A `FIND` is always whole lines, start to end.** Three OPs (9, 10, 19) anchor on a single very
  long markdown **table row**; each of those `FIND` blocks is one line and must be matched in its
  entirety, not by prefix. **A `FIND` must also never stop mid-sentence** — where a sentence wraps
  across lines, the anchor runs to the line on which the sentence ends (OP 20).
- Boundary rule: every non-blank `FIND` line reappears in `REPLACE WITH` except where the OP header
  **names** a replacement, a deletion or a re-wrap. Three OPs name one:
  - **OP 1** names the version bump (`1.5.0` → `1.6.0`) and converts the retained v1.5.0 `Status:`
    label line into a 15-space continuation line — the words are preserved, only the gutter changes.
  - **OP 2** does the same for the `Changelog:` label line of the v1.5.0 entry.
  - **OP 18** names a **re-wrap plus a re-pin** of the §1.4 paragraph (ISS-06 + Revision 2): the
    line boundaries move and two version pins advance. It is the only OP that re-flows lines.
- Header block gutter is **15 columns**: `Version:` + 7 spaces, `Status:` + 8, `Last updated:` + 2,
  `Changelog:` + 5; continuation lines are indented **15 spaces**.
- Do not reflow, re-space or re-wrap any line outside a `FIND`.

## Commentary for the applier (not part of any operation)

- **The clause-(e) substance is verified and MUST NOT be re-opened** (review §6). Nothing in this
  spec touches the S4 criterion's widened scope, S5's four rules, the notice-range-stays-(a)–(d)
  position, `OPEN-27`'s routing disposition, §11.2 or `A-02.6`. Pin **values** move under
  Revision 2; pin **reasoning** does not.
- **`OPEN-20` is annotated, not closed** (review ISS-02, explicit). It remains a v1 Gate-2 blocker
  on the `TS-PROPOSALS` half, so the §13 blocker bullet at line ~2087 is **correct as it stands and
  is deliberately not edited** — recorded here so cycle 2 need not re-check it.
- **This document mints no `TC`.** OP 11–14 *record* ids Doc 07 v2.6.0 already minted and *narrow*
  a reservation this document does own. The band from **TC-3570** is described as "Doc 07 v2.7.0 in
  progress" rather than pinned to a number I cannot see.
- **`UT-0889` status is upgraded on the reviewer's evidence, not on my assumption** — the cycle-1
  reviewer executed `apps/web/test/safety-surfaces.test.tsx` and recorded **25/25 pass**
  (2026-09-06). It was **registered at Doc 06 v2.6.0 and is unchanged at v2.7.0**; the live Doc 06
  pin is **v2.7.0 (In Review)**, last Approved **v2.5.1**.
- **Doc 02 is cited two ways, deliberately.** Clause (e) *originated* at **v2.17.0** — that is a
  historical fact, and both OP 10's row text and the `Source:` sentence OP 20 re-emits keep it. The
  *current* pin is **v2.17.1 (Approved)**, which leaves clause (e) unchanged and adds **§8
  Scenarios 8 and 9** as its Gherkin. Origin and currency are different statements and are not
  collapsed into one.

---

### OP 1 — docs/04-test-strategy-master-plan.md — header: bump Version 1.5.0 → 1.6.0 and open the cycle-2 `Status:`, retaining the v1.5.0 status record verbatim as a continuation line

FIND:
````
Version:       1.5.0
Status:        In Review — v1.5.0 (2026-09-06). **FR-131 clause (e) was ruled in, so the
````
REPLACE WITH:
````
Version:       1.6.0
Status:        In Review — v1.6.0, **rework cycle 2 of 5** against
               artifacts/reviews/04-test-strategy-master-plan-v1.5.0-technical-cycle1.md
               (**FAIL 92%; 0 Critical / 0 High / 1 Medium / 5 Low**; reviewer: reviewer-qa,
               Rafael Duarte — neutral, PM-assigned). Minor bump: a Medium finding makes a minor
               bump the floor. **All six findings fixed on this touch; none carried.**
               **ISS-01 (Medium) FIXED — the `TC`-range register at §14 is reconciled against the
               Doc 07 v2.6.0 that v1.5.0 itself re-pinned.** v1.5.0 advanced the Doc 07 pin
               v2.4.4 → v2.6.0 without re-verifying the body statements that depend on Doc 07's
               *content*, and §14 went on reserving **TC-3564–TC-3699** for the six unminted
               `TS-V1-*` suites, annotated "none minted", after Doc 07 had minted
               **TC-3564..TC-3569** into three other suites. Four rows re-cut against **Doc 07
               v2.6.0 §2**: `TS-ADV-01…16` gains **TC-3564–TC-3567**, `TS-SCAFFOLD` gains
               **TC-3568**, `TS-ABSENCE` gains **TC-3569**, and the `TS-V1-*` reservation is
               narrowed to the band that is genuinely free, **TC-3570–TC-3699**. The three echoes
               at §0.4, the v1.1.0 changelog entry and Downstream are corrected with them. This
               register's stated purpose is "so numbering does not collide"; the collision had
               already happened, and this is its **second** drift into fiction — the first closed
               at v1.1.0 as a High. **No `TC` is minted by this document**; ids Doc 07 owns are
               recorded, and a reservation this document owns is narrowed.
               **ISS-02 (Low) FIXED** — `OPEN-20`'s basis is half-superseded and now says so: the
               `TS-SCAFFOLD` range disagreement is **resolved** at Doc 07 v2.6.0 (§5.3's heading
               now reads TC-3470–TC-3488, TC-3568, matching §2); only the **`TS-PROPOSALS`** half
               survives (§2 TC-3542–TC-3563 vs §5.6's heading TC-3542–TC-3561). **The item is
               annotated, not closed** — it remains live and gate-blocking on that half.
               **ISS-03 (Low) FIXED** — **UT-0889 has landed and is green**: the cycle-1 reviewer
               independently executed `apps/web/test/safety-surfaces.test.tsx` (**25/25 pass**,
               2026-09-06) and the guard is registered in Doc 06, minted at **v2.6.0** and carried
               unchanged into **v2.7.0 (In Review)**. All three
               "owed-and-in-progress, not green" mentions — `Source:`, §0.5 S4's note and
               Downstream — are re-pinned to "landed and green; registered in Doc 06, now v2.7.0
               In Review". The
               discipline is unchanged: this plan still upgrades no test status it has not seen
               pass, and here it has, on the reviewer's executed evidence.
               **ISS-04 (Low) FIXED** — the S5 lapse analysis disposed of Doc 03's trigger (iii)
               only, while its own text engaged the standing condition Doc 03 equates with trigger
               **(iv)**, so a reader could reach the opposite conclusion from the document's own
               sentences. Trigger (iv) is now disposed of **by name and on the evidence standard it
               states**: it fires only where research or an honesty review "**shows**" open-tier
               members read the badge as a claim about how their vote is handled; the 2026-09-06
               ruling took no evidence about the badge at all. **Neither (iii) nor (iv) fired**, (i)
               and (ii) are untouched, and the carve-out stands. Corrected in both places — §0.5 S5's
               annotation and `OPEN-27`'s body.
               **ISS-05 (Low) FIXED** — S4's "**one carve-out**" and S5's "**two carve-outs, and
               only two**" are both correct in their own scope but read as contradictory out of
               context. S4's sentence now states its scope before its count.
               **ISS-06 (Low) FIXED** — §1.4's ragged mid-sentence line breaks, introduced by the
               v1.5.0 OP 9 replacement text, are re-wrapped to the surrounding paragraph's
               measure. No word changed by the re-wrap itself.
               **Pins re-cut to HEAD before this version was submitted, deliberately and as part of
               the same lesson.** **Doc 02 is now v2.17.1 (Approved)** — clause (e) unchanged, and
               v2.17.1 adds **§8 Scenarios 8 and 9**, the Gherkin the tester's owed clause-(e) `TC`
               rows trace to. **Doc 06 is now v2.7.0 (In Review)**, last Approved **v2.5.1**;
               **UT-0889 was registered at v2.6.0 and is unchanged**. Doc 07 v2.6.0 and Doc 08
               v2.9.0 remain Approved. The cycle-1 Medium was a pin advanced without its dependent
               statements re-read; submitting this version with pins already stale would have been
               the same defect wearing the next costume.
               **Not re-opened, per the review's routing instruction:** the clause-(e) substance is
               **verified** — §0.5 S4's widened criterion and its (a)–(d) notice range, S5's four
               rules, the `Source:` and §1.4 pin **reasoning**, `OPEN-27`'s route-don't-rule
               disposition, §22, §11.2 and Downstream's clause-(e) paragraph all stand as written.
               `OPEN-01`, §0.6's 4 / 2 / 7 buckets, every test status and `A-02.6` are untouched.
               _(v1.5.0 record, retained verbatim per annotate-don't-delete:)_
               In Review — v1.5.0 (2026-09-06). **FR-131 clause (e) was ruled in, so the
````

---

### OP 2 — docs/04-test-strategy-master-plan.md — add the v1.6.0 changelog entry above the v1.5.0 entry

FIND:
````
Last updated:  2026-09-06
Changelog:     2026-09-06 v1.5.0 — **FR-131 clause (e) ruled in; this plan re-cut to the amended
````
REPLACE WITH:
````
Last updated:  2026-09-06
Changelog:     2026-09-06 v1.6.0 — **Rework cycle 2 of 5 against
               `artifacts/reviews/04-test-strategy-master-plan-v1.5.0-technical-cycle1.md`**
               (FAIL 92%; 0 Critical / 0 High / 1 Medium / 5 Low; reviewer: reviewer-qa,
               Rafael Duarte — neutral, PM-assigned). Minor bump: a Medium finding makes a minor
               bump the floor. This entry describes only what changed.
               **ISS-01 (Medium) CLOSED — §14's `TC`-range reservation register, reconciled
               against Doc 07 v2.6.0.** The defect and why it is this version's: v1.5.0's headline
               achievement was discharging three pin-currency Lows by advancing the Doc 07 pin
               **v2.4.4 → v2.6.0**, and it advanced the pin **without re-verifying the body
               statements that depend on Doc 07's content**. Doc 07 minted **TC-3564..TC-3569** at
               its v2.5.0 and assigned them to three suites — **TC-3564–TC-3567** to
               `TS-ADV-01…16` (mapping `UT-0887`), **TC-3568** to `TS-SCAFFOLD` (mapping
               `UT-0759`), **TC-3569** to `TS-ABSENCE` (mapping `UT-0888`), per Doc 07 v2.6.0 §2
               rows and its §4.3 / §5 / §5.3 headings — out of the very band §14 still reserved
               for the six unminted `TS-V1-*` suites while annotating it "none minted". §14's own
               opening says the register exists "so numbering does not collide". **Four rows
               re-cut** against Doc 07 v2.6.0 §2, recording the **actual** allocation exactly as
               the v1.1.0 remedy did: `TS-ABSENCE` TC-1600–TC-1614 **+ TC-3569**; `TS-ADV-01…16`
               TC-2600–TC-2752 **+ TC-3564–TC-3567**; `TS-SCAFFOLD` TC-3470–TC-3488 **+ TC-3568**;
               and the `TS-V1-*` reservation **narrowed to TC-3570–TC-3699**, with "none minted"
               replaced by the true statement — none of the **six `TS-V1-*` suites** has minted an
               id; the band's first six numbers went to other suites. The band from **TC-3570** is
               described as "**Doc 07 v2.7.0 in progress**" rather than pinned to a number this
               document cannot see, because the tester is minting the clause-(e) rows in the same
               session. **Three echoes corrected with the rows:** §0.4's "reserved for them at
               §14" sentence, the **v1.1.0 changelog entry**'s "TC-3564–TC-3699 reserved for the
               six unminted v1 suites" (annotated as the historical record it is, not rewritten),
               and Downstream's "reserved at TC-3564–TC-3699". **Annotated, not deleted**, per
               house style. **This document mints no `TC`**: it records ids Doc 07 owns and
               narrows a reservation it owns itself. **Recorded honestly:** the drift originated
               before v1.5.0, but it became a live self-contradiction **at** v1.5.0 — the version
               that moved the pin and published "the three v1.4.0 Lows are DISCHARGED… No Low is
               carried forward". A pin advanced without its dependent statements re-read is the
               same defect class in a new costume, and it is recorded as such rather than as
               inherited debt. **`OPEN-26`(a) — the register's first drift, closed at v1.1.0 as a
               High — is the precedent this closure follows.**
               **ISS-02 (Low) CLOSED — `OPEN-20`'s half-superseded basis.** `OPEN-20` states that
               Doc 07 "disagrees with itself on two `TC` ranges". At Doc 07 **v2.6.0** the
               `TS-SCAFFOLD` half is **resolved** — §5.3's heading now reads "(TC-3470–TC-3488,
               TC-3568)", matching §2. Only the **`TS-PROPOSALS`** half survives: §2 says
               TC-3542–TC-3563 (22 cases) while §5.6's heading still reads TC-3542–TC-3561. The
               item and the §0.4 tester note are **annotated to that narrowed scope; the item is
               NOT closed** and remains a v1 Gate-2 blocker, so §13's blocker bullet is correct
               and deliberately untouched. Doc 07 is the tester's document; this stays recorded,
               not fixed here.
               **ISS-03 (Low) CLOSED — `UT-0889` is landed and green.** v1.5.0 described it as
               "owed-and-in-progress, not green", which was accurate at authoring time and is an
               **under-claim** now: the guard exists at `apps/web/test/safety-surfaces.test.tsx`,
               was **registered in Doc 06 at v2.6.0** §3/§7 and is **unchanged at v2.7.0**, and the
               cycle-1 reviewer executed the file independently — **25/25 pass, 2026-09-06**. All
               three mentions (`Source:`, §0.5 S4's note, Downstream) now read "landed and green as
               of 2026-09-06 on the cycle-1 reviewer's executed run; registered in Doc 06 (minted
               at v2.6.0; **v2.7.0 In Review** at this date)". The standing discipline
               is intact — this plan upgrades no test status it has not seen pass; here the
               evidence is a named, dated, independently executed run.
               **ISS-04 (Low) CLOSED — the lapse analysis now disposes of trigger (iv) by name.**
               v1.5.0 argued correctly that Doc 03's trigger **(iii)** does not fire (clause (e) is
               scoped, not unconditional) — but `OPEN-27`'s body simultaneously argued that the
               2026-09-06 ruling "is such a review" for the `anon` subtitle's standing condition,
               and Doc 03 §10.12.3 states in terms that "**Trigger (iv) is the same standing
               condition the `anon` subtitle decision already carries**". The document therefore
               contained the materials for the opposite conclusion — that a trigger fired and the
               carve-out lapsed automatically — without disposing of it. It is disposed of now, on
               trigger (iv)'s own evidence standard: (iv) fires where research or an honesty review
               "**shows**" open-tier members read the badge as a claim about how their vote is
               handled; the 2026-09-06 ruling is an honesty review, but it examined **landing-page
               copy** and the FR-082 supporter strings and took **no evidence about the badge**, so
               it *raises* the question without *showing* the reading. **Neither (iii) nor (iv) has
               fired**; (i) and (ii) are untouched (the badge renders on no vote surface, and
               FR-122/FR-123 are unamended by Doc 02 v2.17.0/v2.17.1). Corrected in both places —
               §0.5 S5's annotation and `OPEN-27`'s body. **The conclusion is unchanged; only its
               completeness was defective.**
               **ISS-05 (Low) CLOSED — the carve-out counts are scoped, not reconciled away.** S4
               said "the word ban carries **one carve-out**" and S5 said "**Two carve-outs, and
               only two**", four sections apart and both correct: S4 governs the notice and v1
               voting surfaces, where the `anon` badge does not render; S5 governs the
               `apps/web` + `packages/ui` string scan, where it does. S4's sentence now names its
               scope before its count and points at S5's second exception, so a mechanical reader
               cannot mis-apply either number. **Neither count is changed.**
               **ISS-06 (Low) CLOSED — §1.4 re-wrapped.** The mid-sentence breaks introduced by the
               v1.5.0 OP 9 replacement ("…honesty register, and / §4.45 FR-131 clause (e)) ·" and
               "…(unit-test standard, / `UT-####`, §2.1 / `IS_INSECURE_MOCK` discipline)") are
               re-flowed to the paragraph's measure — presentation only, and an authoring defect in
               the v1.5.0 spec rather than an application defect. Two pins in the same paragraph
               advance with it, under the pin sweep below.
               **Pin sweep to HEAD, done before submission rather than after the next review.**
               **Doc 02 → v2.17.1 (Approved)** (`02-requirements-srs-v2.17.1-business-cycle2.md`,
               PASS 96%): **clause (e) is unchanged**, and v2.17.1 adds **§8 Scenarios 8 and 9** —
               the Gherkin the owed clause-(e) `TC` rows trace to, now named in §0.5 S4's note so
               the tester does not have to hunt for it. Clause (e)'s **origin** stays cited as
               **v2.17.0** where the text is historical; the **current** pin is v2.17.1, and the
               two are different statements. **Doc 06 → v2.7.0 (In Review)**, last Approved
               **v2.5.1**; its cycle-1 Medium concerns stale "owed" statements and **not UT-0889**,
               which was registered at v2.6.0 and is unchanged. **Doc 07 v2.6.0** and **Doc 08
               v2.9.0** remain Approved; the tester's v2.7.0 / v2.10.0 re-cut is still in progress
               and is cited as owed, not done. Four locations touched: the `Source:` block (Doc 02
               and Doc 06), §0.5 S4's note, §1.4 and its trailing annotation, and Downstream.
               **This sweep is the cycle-1 Medium's real lesson applied to this version's own
               header** rather than to §14 alone.
               **Not re-opened.** The review recorded ten items as verified and instructed that the
               clause-(e) substance MUST NOT be re-opened: the (a)–(d) notice range and its five
               refusals of a fifth notice clause; S5's four rules and the claims test; the
               verification path (UT-0889 / UT-0869 / inspection); the pin **reasoning**;
               `OPEN-27`'s mint and its route-don't-rule disposition — which the reviewer called
               "the strongest judgement in the version". All stand unchanged here.
               2026-09-06 v1.5.0 — **FR-131 clause (e) ruled in; this plan re-cut to the amended
````

---

### OP 3 — docs/04-test-strategy-master-plan.md — `Source:` block: UT-0889 is landed and green, and the Doc 06 pin advances to v2.7.0 (ISS-03, location 1 of 3; Revision 2)

FIND:
````
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md — last **Approved v2.5.1**; **v2.6.0**
               is being cut in this same 2026-09-06 session and registers **UT-0889**, the
               clause-(e) landing-copy guard in `apps/web/test/safety-surfaces.test.tsx`, which
               this plan cites as **owed-and-in-progress, not green** — re-pinned from
               v2.4.3 at v1.3.0; v2.5.0/v2.5.1 carry the FR-131 code drop and UT-0759/0887/0888)
````
REPLACE WITH:
````
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md — **v2.7.0, In Review**; last
               **Approved v2.5.1**. **v2.6.0**
               was cut in this same 2026-09-06 session and registered **UT-0889**, the
               clause-(e) landing-copy guard in `apps/web/test/safety-surfaces.test.tsx`, which
               is **landed and green** — 25/25 pass, executed independently by the cycle-1
               reviewer on 2026-09-06 — and **v2.7.0 carries it unchanged** — re-pinned from
               v2.4.3 at v1.3.0; v2.5.0/v2.5.1 carry the FR-131 code drop and UT-0759/0887/0888)
               _(v1.6.0, cycle-1 ISS-03: this cell read "**v2.6.0** is being cut in this same
               2026-09-06 session and registers **UT-0889** … which this plan cites as
               **owed-and-in-progress, not green**" — accurate when written in the same session and
               an under-claim once the guard landed. Re-pinned to **v2.7.0 (In Review)** in the
               same touch: Doc 06's own cycle-1 Medium concerns stale "owed" statements and
               **nothing about UT-0889**.)_
````

---

### OP 4 — docs/04-test-strategy-master-plan.md — §0.4 tester note: record that the `TS-SCAFFOLD` half of OPEN-20 closed at Doc 07 v2.6.0 (ISS-02, location 1 of 2)

FIND:
````
> **Note for the tester (recorded, not acted on here — Doc 07 is the tester's document).** Doc 07
> v2.4.4 §2's `TS-PROPOSALS` row reads **TC-3542–TC-3563** while its own §5.6 heading reads
> **TC-3542–TC-3561**; likewise §2's `TS-SCAFFOLD` row reads **TC-3470–TC-3488** while §5.3's
> heading reads **TC-3470–TC-3487**. §14 here reserves the **§2** ranges, because those are the
> ones the suite table and the case counts agree on. Routed to Ji-woo Park as **OPEN-20**.
````
REPLACE WITH:
````
> **Note for the tester (recorded, not acted on here — Doc 07 is the tester's document).** Doc 07
> v2.4.4 §2's `TS-PROPOSALS` row reads **TC-3542–TC-3563** while its own §5.6 heading reads
> **TC-3542–TC-3561**; likewise §2's `TS-SCAFFOLD` row reads **TC-3470–TC-3488** while §5.3's
> heading reads **TC-3470–TC-3487**. §14 here reserves the **§2** ranges, because those are the
> ones the suite table and the case counts agree on. Routed to Ji-woo Park as **OPEN-20**.
>
> _(v1.6.0, cycle-1 ISS-02 — **half of this note is now historical**. At **Doc 07 v2.6.0** the
> `TS-SCAFFOLD` disagreement is **RESOLVED**: §5.3's heading reads "(TC-3470–TC-3488, TC-3568)",
> matching §2. **Only the `TS-PROPOSALS` half survives** — §2's TC-3542–TC-3563 against §5.6's
> TC-3542–TC-3561 — and `OPEN-20` stands on that half alone. The note is annotated rather than
> rewritten because it records what was true of Doc 07 v2.4.4, which is why §14 reserved the §2
> ranges in the first place.)_
````

---

### OP 5 — docs/04-test-strategy-master-plan.md — §0.4: narrow the `TS-V1-*` reservation echo to TC-3570–TC-3699 (ISS-01, echo 1 of 3)

FIND:
````
**v1 capabilities with no suite at all.** Named here rather than left to be discovered at Gate 2.
`TC-3564–TC-3699` is reserved for them at §14; the tester mints the IDs.
````
REPLACE WITH:
````
**v1 capabilities with no suite at all.** Named here rather than left to be discovered at Gate 2.
**`TC-3570–TC-3699`** is reserved for them at §14; the tester mints the IDs. _(v1.6.0, cycle-1
ISS-01: this read "`TC-3564–TC-3699` is reserved for them at §14". Doc 07 v2.6.0 §2 shows
**TC-3564..TC-3569 already minted into other suites** — TC-3564–TC-3567 to `TS-ADV-01…16`,
TC-3568 to `TS-SCAFFOLD`, TC-3569 to `TS-ABSENCE` — so the free band now begins at **TC-3570**.
The band from TC-3570 is itself being drawn on by **Doc 07 v2.7.0, in progress** for the
clause-(e) rows; this plan states the floor it can verify and does not pin a number it cannot
see. **None of the six `TS-V1-*` suites has minted an id.**)_
````

---

### OP 6 — docs/04-test-strategy-master-plan.md — §0.5 S4: scope the carve-out count before stating it (ISS-05)

FIND:
````
**UT-0869**. The word ban carries **one carve-out**: where **clause (a)** mandates the words
("NOT anonymous, NOT receipt-free, NOT coercion-resistant") they MUST appear **only in the negated
form clause (a) requires** — the negation-aware assertion `UT-0887` already makes, and the reason
the amendment cannot break the FR-131(a) banner.
````
REPLACE WITH:
````
**UT-0869**. **Within S4's scope** — the DES-098 notice and v1 voting surfaces, where the DES-094
`anon` badge does not render — the word ban carries **exactly one carve-out**: where **clause (a)**
mandates the words
("NOT anonymous, NOT receipt-free, NOT coercion-resistant") they MUST appear **only in the negated
form clause (a) requires** — the negation-aware assertion `UT-0887` already makes, and the reason
the amendment cannot break the FR-131(a) banner. **S5's scan is broader and carries that same
carve-out plus one more** — the named `anon`-badge exception — which is why S5 rule 4 counts
**two**. The counts differ because the scopes differ; neither may be applied outside its own
section. _(v1.6.0, cycle-1 ISS-05: this sentence stated its count without its scope, immediately
after directing the reader to S5. Neither count is changed.)_
````

---

### OP 7 — docs/04-test-strategy-master-plan.md — §0.5 S4 note: UT-0889 is landed and green; Doc 06 → v2.7.0; name Doc 02 v2.17.1's §8 Gherkin (ISS-03, location 2 of 3; Revision 2)

FIND:
````
> **How clause (e) is verified, and by whom.** By **UT-0889 (Doc 06 v2.6.0)** — a UT-0869-pattern
> guard on the landing copy in `apps/web/test/safety-surfaces.test.tsx`, minted by the engineer in
> the same 2026-09-06 session and cited here as **owed-and-in-progress, not green**; by **UT-0869**
````
REPLACE WITH:
````
> **How clause (e) is verified, and by whom.** By **UT-0889** — registered in Doc 06 at **v2.6.0**
> and unchanged at **v2.7.0 (In Review)** — a UT-0869-pattern
> guard on the landing copy in `apps/web/test/safety-surfaces.test.tsx`, minted by the engineer in
> the same 2026-09-06 session and **landed and green**: 25/25 pass, executed independently by the
> cycle-1 reviewer on 2026-09-06 _(v1.6.0, cycle-1 ISS-03 — this read "**UT-0889 (Doc 06 v2.6.0)**
> … cited here as **owed-and-in-progress, not green**", accurate at authoring time and an
> under-claim within the session. The discipline it protected is unchanged: this plan upgrades no
> test status it has not seen pass, and the evidence here is a named, dated, independently executed
> run)_. **The Gherkin to derive the owed rows from is Doc 02 v2.17.1 §8 Scenarios 8 and 9**
> _(v1.6.0: v2.17.1 is Approved and leaves clause (e)'s normative text unchanged; it adds the two
> scenarios, so the tester traces to them rather than paraphrasing §4.45)_; by **UT-0869**
````

---

### OP 8 — docs/04-test-strategy-master-plan.md — §0.5 S5 carve-out annotation: dispose of Doc 03 trigger (iv) by name (ISS-04, location 1 of 2)

FIND:
````
> act** but keeps the ban **conditional** — it is not the unconditional amendment trigger (iii)
> describes. **The carve-out therefore stands, unchanged and unextended**, and this plan does not
> treat it as lapsed. **What has changed underneath it, stated rather than glossed:** the
````
REPLACE WITH:
````
> act** but keeps the ban **conditional** — it is not the unconditional amendment trigger (iii)
> describes. **Trigger (iv) does not fire either, and it is disposed of here by name because the
> annotation below engages it** _(v1.6.0, cycle-1 ISS-04)_. Doc 03 states that "**Trigger (iv) is
> the same standing condition the `anon` subtitle decision already carries**", and (iv) fires only
> where "user research or an honesty review **shows** open-tier members read the badge as a claim
> about how their vote is handled". The 2026-09-06 ruling **is** an honesty review — but it
> examined **landing-page copy** (`home.steps[1]`, `home.promises[0]`) and the FR-082 supporter
> strings, and took **no evidence whatsoever about the badge**. It *raises* the question; it does
> not *show* the reading, and "shows" is the standard trigger (iv) sets. **Triggers (i) and (ii)
> are untouched:** the badge still renders on no vote surface and for no user who can cast a
> binding vote, and FR-122/FR-123 are unamended by Doc 02 v2.17.0 or its v2.17.1 patch. **None of
> the four triggers has
> fired.** **The carve-out therefore stands, unchanged and unextended**, and this plan does not
> treat it as lapsed. **What has changed underneath it, stated rather than glossed:** the
````

---

### OP 9 — docs/04-test-strategy-master-plan.md — §13 `OPEN-20`: narrow the item's stated basis to the surviving `TS-PROPOSALS` half; the item stays open (ISS-02, location 2 of 2)

FIND:
````
| **OPEN-20** _(new v1.1.0)_ | Doc 07 v2.4.4 disagrees with itself on two `TC` ranges: §2's suite table says `TS-PROPOSALS` = **TC-3542–TC-3563** and `TS-SCAFFOLD` = **TC-3470–TC-3488**, while §5.6's heading reads TC-3542–TC-3561 and §5.3's heading reads TC-3470–TC-3487 | §14 here reserves the **§2** ranges, because those are the ones the suite table and the case counts agree on. If the headings are authoritative instead, §14 must be re-cut. Doc 07 is the tester's document; this is recorded, not fixed here | Ji-woo Park |
````
REPLACE WITH:
````
| **OPEN-20** _(new v1.1.0; scope narrowed v1.6.0)_ | **Now stands on the `TS-PROPOSALS` half alone.** At **Doc 07 v2.6.0** §2's suite table says `TS-PROPOSALS` = **TC-3542–TC-3563** (22 cases) while its own §5.6 heading still reads **TC-3542–TC-3561** — a live self-disagreement in the tester's document. _(v1.6.0, cycle-1 ISS-02: this item read "Doc 07 v2.4.4 disagrees with itself on **two** `TC` ranges: §2's suite table says `TS-PROPOSALS` = **TC-3542–TC-3563** and `TS-SCAFFOLD` = **TC-3470–TC-3488**, while §5.6's heading reads TC-3542–TC-3561 and §5.3's heading reads TC-3470–TC-3487". **The `TS-SCAFFOLD` half is RESOLVED at Doc 07 v2.5.0/v2.6.0** — §5.3's heading now reads "(TC-3470–TC-3488, TC-3568)", matching §2 — and is retained here as the record of what §14 was reserved against. The item is **annotated, not closed**.)_ | §14 here reserves the **§2** ranges, because those are the ones the suite table and the case counts agree on. If the headings are authoritative instead, §14 must be re-cut. Doc 07 is the tester's document; this is recorded, not fixed here. **Still a v1 Gate-2 blocker on the surviving half** — the §13 blocker bullet is unchanged | Ji-woo Park |
````

---

### OP 10 — docs/04-test-strategy-master-plan.md — §13 `OPEN-27`: complete the lapse analysis with trigger (iv) (ISS-04, location 2 of 2)

FIND:
````
| **OPEN-27** _(new v1.5.0)_ | **The `anon`-badge disposition that §0.5 S5's carve-out cites was reasoned against a voting-scoped FR-131, and FR-131 is no longer voting-scoped.** Doc 03 v2.13.0 §10.12.3 rules `STATE_CONFIG.anon.title` ("Anonymous") COMPLIANT in v1 on the basis that the badge renders only for open-tier users who cannot cast a binding vote, so it "is not describing that user's voting behaviour" but names a participation tier. Doc 02 **v2.17.0** FR-131 **clause (e)** (approver, 2026-09-06) extends the duty to **every v1 participation act**, expressly including **joining or belonging to a party** and **endorsing a petition** — two of the three contexts §10.12.3 **clause 8** itself names for the `anon` pill (screens 1.6 and 2.3). §10.12.3 separately **concedes** that the `anon` subtitle "Nothing you do here is linked to you" is **not literally true in v1**, and carries a standing condition that a subtitle variant MUST be considered if an honesty review establishes that a reasonable user does not read it as "publicly linked"; the 2026-09-06 ruling — which litigated exactly this claim class on the landing page — is such a review. **Doc 03's re-open trigger (iii) is worded for an *unconditional* amendment and this one is not, so the disposition has NOT lapsed and this plan does not treat it as lapsed** | **Not a shipped-copy defect today:** `PrivacyStatus` has no authenticated host surface in `apps/web`, so no citizen currently sees the string; `packages/ui` is nevertheless inside S5's scan scope, and Doc 03 clause 8's own trigger is "before any screen rendering the `anon` pill in a non-vote context ships to production" — at which point this becomes a v1 Gate-2 blocker. **This is a copy ruling for the copy authority (Doc 03), not for this plan**: ruling it in the test plan would repeat the v2.7.0 mistake of a copy ruling living somewhere other than the copy authority. Re-examine at the next Doc 03 increment; until then S5's carve-out stands, covering exactly the two `anon` strings and extended to nothing | Ravi Deshmukh (Doc 03 ruling); Nadia Hassan (the S5 scan once ruled) |
````
REPLACE WITH:
````
| **OPEN-27** _(new v1.5.0; lapse analysis completed v1.6.0)_ | **The `anon`-badge disposition that §0.5 S5's carve-out cites was reasoned against a voting-scoped FR-131, and FR-131 is no longer voting-scoped.** Doc 03 v2.13.0 §10.12.3 rules `STATE_CONFIG.anon.title` ("Anonymous") COMPLIANT in v1 on the basis that the badge renders only for open-tier users who cannot cast a binding vote, so it "is not describing that user's voting behaviour" but names a participation tier. Doc 02 **v2.17.0** FR-131 **clause (e)** (approver, 2026-09-06; carried unchanged into the Approved **v2.17.1**) extends the duty to **every v1 participation act**, expressly including **joining or belonging to a party** and **endorsing a petition** — two of the three contexts §10.12.3 **clause 8** itself names for the `anon` pill (screens 1.6 and 2.3). §10.12.3 separately **concedes** that the `anon` subtitle "Nothing you do here is linked to you" is **not literally true in v1**, and carries a standing condition that a subtitle variant MUST be considered if an honesty review establishes that a reasonable user does not read it as "publicly linked"; the 2026-09-06 ruling — which litigated exactly this claim class on the landing page — is such a review **of that copy, and it is why this item exists**. _(v1.6.0, cycle-1 ISS-04 — the sentence above engages the condition Doc 03 equates with **trigger (iv)**, so (iv) is disposed of here rather than left for a reader to draw the opposite conclusion from.)_ **No re-open trigger has fired. (iii)** is worded for an ***unconditional*** amendment and clause (e) is scoped, not unconditional. **(iv)** fires only where research or an honesty review "**shows**" open-tier members read the badge as a claim about how their vote is handled; the 2026-09-06 ruling examined landing-page copy and the FR-082 strings and took **no evidence about the badge**, so it raises the question without showing the reading. **(i)** and **(ii)** are untouched — the badge renders on no vote surface and FR-122/FR-123 are unamended. **The disposition has therefore NOT lapsed, and neither has S5's carve-out; this plan does not treat either as lapsed** | **Not a shipped-copy defect today:** `PrivacyStatus` has no authenticated host surface in `apps/web`, so no citizen currently sees the string; `packages/ui` is nevertheless inside S5's scan scope, and Doc 03 clause 8's own trigger is "before any screen rendering the `anon` pill in a non-vote context ships to production" — at which point this becomes a v1 Gate-2 blocker. **This is a copy ruling for the copy authority (Doc 03), not for this plan**: ruling it in the test plan would repeat the v2.7.0 mistake of a copy ruling living somewhere other than the copy authority. **What is owed is a fresh look, not a lapse**: the architect re-examines the `anon` title **and** subtitle against clause (e) at the next Doc 03 increment. Until then S5's carve-out stands, covering exactly the two `anon` strings and extended to nothing | Ravi Deshmukh (Doc 03 ruling); Nadia Hassan (the S5 scan once ruled) |
````

---

### OP 11 — docs/04-test-strategy-master-plan.md — §14 `TS-ABSENCE` row: record TC-3569 (ISS-01, row 1 of 4)

FIND:
````
| `TS-ABSENCE` | **Capability-absence** | L1/L2 + artifact scan | `FR-021`, `FR-035`, `FR-047`, `FR-051`, `FR-056`, `NFR-017`, `CON-003`, `CON-006` | TC-1600–TC-1799 | Rafael Duarte |
````
REPLACE WITH:
````
| `TS-ABSENCE` | **Capability-absence** | L1/L2 + artifact scan | `FR-021`, `FR-035`, `FR-047`, `FR-051`, `FR-056`, `NFR-017`, `CON-003`, `CON-006`, **`FR-131` closing sentence** | TC-1600–TC-1799 **and TC-3569** *(v1.6.0: the out-of-block **TC-3569** maps `UT-0888` (the `MACI_VOTING` flag description) and was minted at Doc 07 v2.5.0; Doc 07 v2.6.0 §2 and its §4.3 heading both read "TC-1600–TC-1614, TC-3569". Actual use is TC-1600–TC-1614, 16 cases)* | Rafael Duarte |
````

---

### OP 12 — docs/04-test-strategy-master-plan.md — §14 `TS-ADV-01…16` row: record TC-3564–TC-3567 (ISS-01, row 2 of 4)

FIND:
````
| `TS-ADV-01` … `TS-ADV-16` | **Adversarial, one per RISK** (Definition-B set) | mixed | `RISK-01` … `RISK-16` (§8) | TC-2600–TC-2799 *(narrowed at v1.1.0 from TC-2600–TC-3199; Doc 07 v2.4.4 §2's actual high-water mark is TC-2752)* | per §8 |
````
REPLACE WITH:
````
| `TS-ADV-01` … `TS-ADV-16` | **Adversarial, one per RISK** (Definition-B set) | mixed | `RISK-01` … `RISK-16` (§8) | TC-2600–TC-2799 **and TC-3564–TC-3567** *(narrowed at v1.1.0 from TC-2600–TC-3199; Doc 07 v2.4.4 §2's actual high-water mark is TC-2752. **v1.6.0:** the four out-of-block ids **TC-3564–TC-3567** map `UT-0887` (the rendered, negation-aware FR-131(a) banner) and were minted at Doc 07 v2.5.0; Doc 07 v2.6.0 §2 and its §5 heading both read "TC-2600–TC-2752, TC-3564–TC-3567" — 47 cases)* | per §8 |
````

---

### OP 13 — docs/04-test-strategy-master-plan.md — §14 `TS-SCAFFOLD` row: record TC-3568 (ISS-01, row 3 of 4)

FIND:
````
| `TS-SCAFFOLD` | **Definition-A** — scaffold seam & design-system seed | V1/V3 | `FR-082`–`086`, `FR-122`–`124`, `FR-131`/`132`, DES-093…096, DES-100, ADR-023…025 | TC-3470–TC-3488 *(reserved retroactively at v1.1.0 — in use in Doc 07 since v2.2.1; 19 cases, 16 automated, 3 Blocked)* | Samuel Oyelaran |
````
REPLACE WITH:
````
| `TS-SCAFFOLD` | **Definition-A** — scaffold seam & design-system seed | V1/V3 | `FR-082`–`086`, `FR-122`–`124`, `FR-131`/`132`, DES-093…096, DES-100, ADR-023…025 | TC-3470–TC-3488 **and TC-3568** *(reserved retroactively at v1.1.0 — in use in Doc 07 since v2.2.1; 19 cases, 16 automated, 3 Blocked. **v1.6.0:** the out-of-block **TC-3568** maps `UT-0759` (the backing-aware `ver` title, four paths) and was minted at Doc 07 v2.5.0; Doc 07 v2.6.0 §2 and its §5.3 heading both read "TC-3470–TC-3488, TC-3568" — 20 cases, 17 automated, 3 Blocked. **This agreement is why the `TS-SCAFFOLD` half of `OPEN-20` is closed**)* | Samuel Oyelaran |
````

---

### OP 14 — docs/04-test-strategy-master-plan.md — §14 `TS-V1-*` row: narrow the reservation to TC-3570–TC-3699 and add the register-reconciliation note (ISS-01, row 4 of 4)

FIND:
````
| `TS-V1-BALLOT` · `TS-V1-NOTICE` · `TS-V1-ID` · `TS-V1-SPAM` · `TS-V1-AUDIT` · `TS-V1-ENROL` | **Definition-A** — the six unminted v1 suites (**§0.4**) | V1–V6 | `FR-121`/`125`/`126`/`128`/`129`/`131`/`132`/`133`, `FR-054`/`092`/`108`, DES-096/098/099/100, and the §6.4 negative-authority matrix in its conventional form | TC-3564–TC-3699 *(reserved at v1.1.0; none minted — each is blocked on unbuilt capability or on `CON-015`. OPEN-18)* | per §0.4 |

> *TS-CR1 and TS-GOV2 rows reserved retroactively at v1.0.1: ranges TC-3300–TC-3399 and TC-3400–TC-3499 were already in use by Doc 07 (minted 2026-08-10 and 2026-08-11 respectively); this patch regularises them at source — recorded, not hidden. Trigger: Doc 07 v2.0.0 cycle-1 review ISS-04.*
````
REPLACE WITH:
````
| `TS-V1-BALLOT` · `TS-V1-NOTICE` · `TS-V1-ID` · `TS-V1-SPAM` · `TS-V1-AUDIT` · `TS-V1-ENROL` | **Definition-A** — the six unminted v1 suites (**§0.4**) | V1–V6 | `FR-121`/`125`/`126`/`128`/`129`/`131`/`132`/`133`, `FR-054`/`092`/`108`, DES-096/098/099/100, and the §6.4 negative-authority matrix in its conventional form | **TC-3570–TC-3699** *(v1.6.0, cycle-1 ISS-01: **narrowed from TC-3564–TC-3699**, which was reserved at v1.1.0 and annotated "none minted" — true of these six suites, false of the band, because Doc 07 v2.5.0 minted **TC-3564..TC-3569** into `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`. **None of these six suites has minted an id**; each is still blocked on unbuilt capability or on `CON-015`. **OPEN-18.** The floor of the free band is **TC-3570** and is itself being drawn on by **Doc 07 v2.7.0, in progress** for the clause-(e) rows — this register states the floor it can verify and does not pin an id it cannot see)* | per §0.4 |

> *TS-CR1 and TS-GOV2 rows reserved retroactively at v1.0.1: ranges TC-3300–TC-3399 and TC-3400–TC-3499 were already in use by Doc 07 (minted 2026-08-10 and 2026-08-11 respectively); this patch regularises them at source — recorded, not hidden. Trigger: Doc 07 v2.0.0 cycle-1 review ISS-04.*

> **_(v1.6.0 — register reconciliation against Doc 07 v2.6.0 §2, cycle-1 ISS-01, Medium.)_** This
> table's stated purpose is that **numbering does not collide**, so a row of it asserting a band it
> does not own is a defect of the same class as a stale pin, not a cosmetic one. Four rows were
> contradicted by the **Approved Doc 07 v2.6.0** that v1.5.0 itself re-pinned, because that version
> advanced the pin without re-reading the body statements depending on Doc 07's *content*. The six
> ids Doc 07 minted at its v2.5.0 are now recorded where they actually live: **TC-3564–TC-3567**
> (`TS-ADV-01…16`, mapping `UT-0887`), **TC-3568** (`TS-SCAFFOLD`, mapping `UT-0759`), **TC-3569**
> (`TS-ABSENCE`, mapping `UT-0888`) — the FR-131 honesty drop, spread across three suites rather
> than one. **This document mints no `TC` and re-statuses none**: it records ids the tester owns and
> narrows a reservation it owns itself. **This is the register's second drift into fiction** — the
> first was closed at v1.1.0 as a **High** (`OPEN-26`(a)) — and the standing remedy is the same one
> applied then: record the **actual** allocation, not the intended one. **Standing instruction:**
> any future version that advances the Doc 07 pin MUST re-read this table against Doc 07 §2 in the
> same touch.
````

---

### OP 15 — docs/04-test-strategy-master-plan.md — the v1.1.0 changelog entry's TC-3564 echo: annotate as historical (ISS-01, echo 2 of 3)

FIND:
````
               `TS-PROPOSALS`; TC-3564–TC-3699 reserved for the six unminted v1 suites. The
````
REPLACE WITH:
````
               `TS-PROPOSALS`; TC-3564–TC-3699 reserved for the six unminted v1 suites _(v1.6.0,
               cycle-1 ISS-01: that reservation is **narrowed to TC-3570–TC-3699** at v1.6.0 —
               Doc 07 v2.5.0 minted TC-3564..TC-3569 into three other suites. This sentence is
               retained as the historical record of what v1.1.0 did, not as a live reservation;
               §14 governs)_. The
````

---

### OP 16 — docs/04-test-strategy-master-plan.md — Downstream: UT-0889 is landed and green; Doc 06 → v2.7.0 (ISS-03, location 3 of 3; Revision 2)

FIND:
````
`apps/web/test/safety-surfaces.test.tsx` in the **UT-0869** pattern (en source strings, the rendered
page, and the Arabic mirror). It is cited here as **owed-and-in-progress, not green** — the engineer
mints it in the same 2026-09-06 session, and this plan upgrades no status on a test it has not seen
pass. The owed re-cut is the tester's: clause-(e) rows at **Doc 07 v2.7.0** and **Doc 08 v2.10.0**,
````
REPLACE WITH:
````
`apps/web/test/safety-surfaces.test.tsx` in the **UT-0869** pattern (en source strings, the rendered
page, and the Arabic mirror). It is **landed and green** — 25/25 pass, executed independently by the
cycle-1 reviewer on 2026-09-06 — and is **registered in Doc 06, minted at v2.6.0 and unchanged at
v2.7.0 (In Review)**. _(v1.6.0, cycle-1
ISS-03: this read "It is cited here as **owed-and-in-progress, not green** — the engineer
mints it in the same 2026-09-06 session, and this plan upgrades no status on a test it has not seen
pass." Accurate when written, an under-claim once the guard landed. The rule it states is unchanged
and is satisfied here by a named, dated, independently executed run.)_ The owed re-cut is still the
tester's: clause-(e) rows at **Doc 07 v2.7.0** and **Doc 08 v2.10.0**,
````

---

### OP 17 — docs/04-test-strategy-master-plan.md — Downstream: narrow the reserved band and the OPEN-20 carry-back (ISS-01 echo 3 of 3; ISS-02)

FIND:
````
level V5 needs (**OPEN-24**); and `TC` mints for the six Definition-A suites reserved at
TC-3564–TC-3699 and the eleven adversarial suites reserved at TC-2800–TC-3199 (**OPEN-18**).

**Two documents carry an item back from this rework.** Doc 07 v2.4.4's §2-vs-§5.3/§5.6 range
disagreement is **OPEN-20** (Ji-woo Park). Doc 06 v2.4.3 §3's `UT-0841`…`UT-0848` overlap between
`apps/web` and `packages/sdk` is **OPEN-26** (Samuel Oyelaran). Neither is fixed here — each is the
owning role's to rule on.
````
REPLACE WITH:
````
level V5 needs (**OPEN-24**); and `TC` mints for the six Definition-A suites reserved at
**TC-3570–TC-3699** and the eleven adversarial suites reserved at TC-2800–TC-3199 (**OPEN-18**).
_(v1.6.0, cycle-1 ISS-01: this read "reserved at TC-3564–TC-3699"; Doc 07 v2.5.0 minted
TC-3564..TC-3569 into `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`, so the free band begins at
TC-3570 — see §14.)_

**Two documents carry an item back from this rework.** Doc 07 v2.4.4's §2-vs-§5.3/§5.6 range
disagreement is **OPEN-20** (Ji-woo Park) — _(v1.6.0, cycle-1 ISS-02: **the §5.3 / `TS-SCAFFOLD`
half is resolved at Doc 07 v2.6.0**; `OPEN-20` now stands on the §5.6 / `TS-PROPOSALS` half alone
and remains open and gate-blocking on it)_. Doc 06 v2.4.3 §3's `UT-0841`…`UT-0848` overlap between
`apps/web` and `packages/sdk` is **OPEN-26** (Samuel Oyelaran). Neither is fixed here — each is the
owning role's to rule on.
````

---

### OP 18 — docs/04-test-strategy-master-plan.md — §1.4 References: RE-WRAP the paragraph and RE-PIN Doc 02 → v2.17.1 and Doc 06 → v2.7.0 (ISS-06 + Revision 2; this OP moves line boundaries and advances two version numbers — no citation is added or removed)

FIND:
````
Doc 01 PR-FAQ · Doc 02 SRS **v2.17.0** (incl. §16 delivery phasing and §16.4 honesty register, and
§4.45 FR-131 clause (e)) ·
Doc 03 SDD **v2.13.0** (§9 repo design, §10.13 v1/v2 split, §11 failure-mode analysis which seeds
`TS-EDGE`, §14 test hooks) · Doc 05 Backlog **v2.5.0** (§8 non-functional backlog items
`NF-01`…`NF-08`) · Doc 06 Coding & UT **v2.5.1 Approved / v2.6.0 in flight** (unit-test standard,
`UT-####`, §2.1
`IS_INSECURE_MOCK` discipline) · Doc 07 Test Cases **v2.6.0** (`TC-####`) · Doc 08 RTM **v2.9.0** ·
**ADR-001…ADR-025** · CLAUDE.md · ISO/IEC/IEEE 29119 · IEEE 829 · WCAG 2.2 Level AA · RFC 2119.
````
REPLACE WITH:
````
Doc 01 PR-FAQ · Doc 02 SRS **v2.17.1** (incl. §16 delivery phasing and §16.4 honesty register,
§4.45 FR-131 clause (e) and its §8 Scenarios 8 and 9) · Doc 03 SDD **v2.13.0** (§9 repo design,
§10.13 v1/v2 split, §11 failure-mode analysis which seeds `TS-EDGE`, §14 test hooks) · Doc 05
Backlog **v2.5.0** (§8 non-functional backlog items `NF-01`…`NF-08`) · Doc 06 Coding & UT
**v2.5.1 Approved / v2.7.0 In Review** (unit-test standard, `UT-####`, §2.1 `IS_INSECURE_MOCK`
discipline) · Doc 07 Test Cases **v2.6.0** (`TC-####`) · Doc 08 RTM **v2.9.0** ·
**ADR-001…ADR-025** · CLAUDE.md · ISO/IEC/IEEE 29119 · IEEE 829 · WCAG 2.2 Level AA · RFC 2119.
````

---

### OP 19 — docs/04-test-strategy-master-plan.md — §22 Approvals: bring the architect row current at v1.6.0, folding the whole v1.5.0 description into the row history

_(REWRITTEN 2026-09-06, Revision 1. The first draft truncated the `FIND` to the row's opening
sentence and matched 0 times. A `FIND` is whole lines: the row is **one** markdown table line at
`docs/04-test-strategy-master-plan.md` line 2407, 2,174 characters, reproduced below in full. Every
word of the v1.5.0 body is carried forward into the `_(Row history: …)_` parenthetical — nothing is
dropped, including its "Doc 06 v2.6.0" citation, which is a **historical quotation of what v1.5.0
said** and correctly stays as written. Revision 2 changed only the **new v1.6.0 body**, where the
live Doc 06 pin is v2.7.0.)_

FIND:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-06 | **v1.5.0, Status: In Review.** Not a rework cycle — a **requirement cascade**: FR-131 **clause (e)** was ruled in by the approver on 2026-09-06 and applied as Doc 02 v2.17.0, so the question §0.5 S4 routed to the product-owner at v1.4.0 is answered and S4/S5 are re-cut to the amended closing sentence. The notice-clause range stays **(a)–(d)**; clause (e) is scanned at S5 and guarded by **UT-0889 (Doc 06 v2.6.0)** and **UT-0869**, not by a fifth notice assertion. The S5 `anon`-badge carve-out is annotated and the copy question it raises is routed to Doc 03 as **OPEN-27** rather than ruled here. **All three v1.4.0 Lows discharged** (ISS-C2-01, ISS-C2-02, ISS-C2-03) with two further stale pins swept; none carried. `TC` re-cut owed from the tester at Doc 07 v2.7.0 / Doc 08 v2.10.0. _(Row history: **v1.4.0** was submitted 2026-09-06 and Approved at PASS 96% (0C/0H/0M/3L) — rework cycle 1 against the v1.3.0 technical review (FAIL 89%; 0C/0H/2M/6L): §0.5 S4's clause range corrected to (a)–(d) and annotated with the PO routing; the S4/S5 correctness over-claim withdrawn from the Status block and annotated in the v1.3.0 changelog entry; all six Lows taken rather than carried. **v1.3.0** was submitted 2026-09-06 — the FR-131 cascade that corrected `A-02.6` and `OPEN-01` off the retired "votes are anonymous but not receipt-free" framing and closed `ISS-10`; cycle 1 verified both corrections and they are not re-opened. **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which v1.3.0 closed; keeping this row current at every version is the standing discipline that Low bought. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
````
REPLACE WITH:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-06 | **v1.6.0, Status: In Review.** Rework **cycle 2 of 5** against the v1.5.0 technical review (FAIL 92%; 0 Critical / 0 High / 1 Medium / 5 Low; reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned). All six findings taken on this touch, none carried: **ISS-01 (Medium)** — §14's `TC`-range reservation register reconciled against **Doc 07 v2.6.0 §2** (TC-3564–TC-3567 → `TS-ADV-01…16`, TC-3568 → `TS-SCAFFOLD`, TC-3569 → `TS-ABSENCE`; the `TS-V1-*` reservation narrowed to **TC-3570–TC-3699**), with its three echoes at §0.4, the v1.1.0 changelog entry and Downstream; **ISS-02** — `OPEN-20` narrowed to the surviving `TS-PROPOSALS` half and deliberately left **open** and gate-blocking; **ISS-03** — `UT-0889` re-stated as **landed and green** (25/25, executed by the cycle-1 reviewer on 2026-09-06; registered in Doc 06 at v2.6.0, unchanged at **v2.7.0 In Review**) at all three mentions; **ISS-04** — Doc 03's re-open trigger **(iv)** disposed of by name in both §0.5 S5 and `OPEN-27`, completing the not-lapsed conclusion; **ISS-05** — S4's carve-out count scoped before it is stated; **ISS-06** — §1.4 re-wrapped. **Pins swept to HEAD before submission** rather than left for the next reviewer to catch: **Doc 02 → v2.17.1 (Approved)**, clause (e) unchanged plus its §8 Scenarios 8 and 9; **Doc 06 → v2.7.0 (In Review)**, last Approved v2.5.1; Doc 07 v2.6.0 and Doc 08 v2.9.0 Approved. **No `TC`, `UT`, `US` or `OPEN-##` is minted, renumbered or reused; no test status is upgraded.** The clause-(e) substance is **not re-opened**, per the review's routing instruction. _(Row history: **v1.5.0** was submitted 2026-09-06 and **FAILed cycle 1 at 92%** on one Medium — the `TC`-register drift this version closes. It was not a rework cycle but a **requirement cascade**: FR-131 **clause (e)** was ruled in by the approver on 2026-09-06 and applied as Doc 02 v2.17.0, so the question §0.5 S4 routed to the product-owner at v1.4.0 is answered and S4/S5 are re-cut to the amended closing sentence. The notice-clause range stays **(a)–(d)**; clause (e) is scanned at S5 and guarded by **UT-0889 (Doc 06 v2.6.0)** and **UT-0869**, not by a fifth notice assertion. The S5 `anon`-badge carve-out is annotated and the copy question it raises is routed to Doc 03 as **OPEN-27** rather than ruled here. **All three v1.4.0 Lows discharged** (ISS-C2-01, ISS-C2-02, ISS-C2-03) with two further stale pins swept; none carried. `TC` re-cut owed from the tester at Doc 07 v2.7.0 / Doc 08 v2.10.0. **v1.4.0** was submitted 2026-09-06 and Approved at PASS 96% (0C/0H/0M/3L) — rework cycle 1 against the v1.3.0 technical review (FAIL 89%; 0C/0H/2M/6L): §0.5 S4's clause range corrected to (a)–(d) and annotated with the PO routing; the S4/S5 correctness over-claim withdrawn from the Status block and annotated in the v1.3.0 changelog entry; all six Lows taken rather than carried. **v1.3.0** was submitted 2026-09-06 — the FR-131 cascade that corrected `A-02.6` and `OPEN-01` off the retired "votes are anonymous but not receipt-free" framing and closed `ISS-10`; cycle 1 verified both corrections and they are not re-opened. **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which v1.3.0 closed; keeping this row current at every version is the standing discipline that Low bought. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
````

---

### OP 20 — docs/04-test-strategy-master-plan.md — `Source:` block: re-pin Doc 02 to v2.17.1 (Approved) and name its §8 clause-(e) Gherkin (Revision 2 — a live pin no other operation covers)

_(REWRITTEN 2026-09-06, Revision 3, after this operation matched 0 times. Two defects, both mine.
**(a) Transcription:** the third `FIND` line was written "…(d) and (e).**" when the file reads
"…(d) and (e)**," — period inside the bold, trailing comma dropped. **(b) Boundary:** that comma is
load-bearing, because the sentence **continues on the next line**; the old `FIND` stopped
mid-sentence and its `REPLACE` would have been followed by the fragment "and its closing sentence
bans the four words for …". The anchor now runs from the `Source:` label through the end of the
retained v1.5.0 annotation. **The sentence is re-emitted whole and completely unaltered — including
"At v2.17.0", which is a true statement about where clause (e) entered — and the new v1.6.0
annotation sits after it, not inside it.** Only the pin at the head of the block changes.)_

FIND:
````
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md **v2.17.0**, In Review 2026-09-06;
               last Approved **v2.16.3**, 2026-08-30) — FR-131 §4.45 is the normative wording
               this plan tests against. **At v2.17.0 it enumerates (a), (b), (c), (d) and (e)**,
               and its closing sentence bans the four words for "v1 voting behaviour **or any
               other v1 participation act**". _(v1.5.0 annotation, not a deletion. This line read
               "and it enumerates clauses (a), (b), (c), (d) — four, not five (see §0.5 S4)".
               That was true of v2.16.3 and is retained as the record of why v1.4.0 corrected
               S4's range; it is **superseded on 2026-09-06**. Clause (e) is **not** a fifth
               clause of the DES-098 notice — the notice range in §0.5 S4 stays (a)–(d) — it is
               a claims duty over every v1 participation act. See §0.5 S4 and S5.)_
````
REPLACE WITH:
````
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md **v2.17.1, Approved** 2026-09-06 —
               02-requirements-srs-v2.17.1-business-cycle2.md, PASS 96%; clause (e) entered at
               **v2.17.0** and is **unchanged** at v2.17.1, which adds **§8 Scenarios 8 and 9**,
               the Gherkin the owed clause-(e) `TC` rows trace to;
               last Approved **v2.16.3**, 2026-08-30) — FR-131 §4.45 is the normative wording
               this plan tests against. **At v2.17.0 it enumerates (a), (b), (c), (d) and (e)**,
               and its closing sentence bans the four words for "v1 voting behaviour **or any
               other v1 participation act**". _(v1.5.0 annotation, not a deletion. This line read
               "and it enumerates clauses (a), (b), (c), (d) — four, not five (see §0.5 S4)".
               That was true of v2.16.3 and is retained as the record of why v1.4.0 corrected
               S4's range; it is **superseded on 2026-09-06**. Clause (e) is **not** a fifth
               clause of the DES-098 notice — the notice range in §0.5 S4 stays (a)–(d) — it is
               a claims duty over every v1 participation act. See §0.5 S4 and S5.)_
               _(v1.6.0, Revision 2 — the **pin** is re-cut; the sentence above is not. This pin
               read "**v2.17.0**, In Review 2026-09-06; last Approved **v2.16.3**, 2026-08-30",
               true when written and superseded the same day: Doc 02 **v2.17.1 is Approved**
               (PASS 96%), leaves clause (e)'s normative text **unchanged**, and adds §8
               Scenarios 8 and 9. **Origin and currency are different statements and are kept
               apart:** clause (e) **entered** at v2.17.0 — which is why the sentence above still
               says so, and why it is left exactly as written — while the **current** version of
               Doc 02 is **v2.17.1**.)_
````

---

### OP 21 — docs/04-test-strategy-master-plan.md — §1.4 trailing annotation: bring its status roll-call to HEAD (Revision 2 — the second live pin no other operation covers)

FIND:
````
it, which is why the class was graded Low twice. Doc 02 v2.17.0 and Doc 06 v2.6.0 are **In Review**
at this date, Doc 03 v2.13.0 / Doc 05 v2.5.0 / Doc 07 v2.6.0 / Doc 08 v2.9.0 are **Approved**.)_
````
REPLACE WITH:
````
it, which is why the class was graded Low twice. **At v1.6.0 the roll-call is:** Doc 06 **v2.7.0**
is **In Review** (last Approved v2.5.1); Doc 02 **v2.17.1**, Doc 03 v2.13.0, Doc 05 v2.5.0,
Doc 07 v2.6.0 and Doc 08 v2.9.0 are **Approved**. _(v1.6.0, Revision 2: this read "Doc 02 v2.17.0
and Doc 06 v2.6.0 are **In Review**
at this date, Doc 03 v2.13.0 / Doc 05 v2.5.0 / Doc 07 v2.6.0 / Doc 08 v2.9.0 are **Approved**",
true when written on 2026-09-06 and superseded the same day by Doc 02's v2.17.1 approval and
Doc 06's v2.7.0 cut. Retained rather than deleted, because a pin that moved twice in one day is
exactly what the standing pin-currency sweep exists to catch.)_
````

---

## Post-application checklist (for the applier and the cycle-2 reviewer)

1. `Version:` reads **1.6.0**; `Status:` opens **In Review — v1.6.0, rework cycle 2 of 5**;
   `Last updated:` reads **2026-09-06**; the `Changelog:` top entry is **v1.6.0** and the v1.5.0
   entry survives below it, beginning "2026-09-06 v1.5.0 — **FR-131 clause (e) ruled in;".
2. The v1.5.0 `Status` narrative survives in full under `_(v1.5.0 record, retained verbatim …)_`.
3. `grep "TC-3564–TC-3699"` returns exactly **two** hits, both inside dated v1.6.0 annotations that
   quote the superseded reservation (the v1.1.0 changelog entry and §14's narrowed row). **No live
   reservation asserts the band.** `grep "TC-3570"` returns the §0.4 sentence, the §14 row, the
   §14 note and the Downstream sentence.
4. §14 shows TC-3569 on `TS-ABSENCE`, TC-3564–TC-3567 on `TS-ADV-01…16`, TC-3568 on `TS-SCAFFOLD`.
   **No `TC` is minted, re-statused or renumbered by Doc 04.**
5. `grep "owed-and-in-progress"` returns only the three dated v1.6.0 annotations quoting the
   superseded wording; no live sentence calls UT-0889 not green.
6. Both trigger analyses (§0.5 S5 annotation and `OPEN-27`) name **(iii) and (iv)** and conclude
   **none of the four fired**. `OPEN-20` is **annotated, not closed**, and still appears in §13's
   Definition-A Gate-2 blocker bullet — which is unedited and correct.
7. §22's architect row opens **v1.6.0** and its `_(Row history: …)_` now begins with **v1.5.0**,
   carrying the whole v1.5.0 description plus the v1.4.0 → v1.0.0 history unchanged.
8. **Pin currency (Revision 2).** `grep "v2.6.0"` returns Doc 07's pins (correct — Doc 07 **is**
   v2.6.0) and the historical quotations of UT-0889's registration version; **no live Doc 06 pin
   reads v2.6.0**. `grep "v2.17.0"` returns only origin statements and dated annotations; **no live
   Doc 02 pin reads v2.17.0 or "In Review"**. Live values: Doc 02 **v2.17.1 Approved** · Doc 03
   **v2.13.0 Approved** · Doc 05 **v2.5.0 Approved** · Doc 06 **v2.7.0 In Review** (Approved
   v2.5.1) · Doc 07 **v2.6.0 Approved** · Doc 08 **v2.9.0 Approved**.
9. **Sentence integrity at OP 20 (Revision 3).** The `Source:` Doc 02 sentence reads whole and
   unbroken — "…**At v2.17.0 it enumerates (a), (b), (c), (d) and (e)**, and its closing sentence
   bans the four words for "v1 voting behaviour **or any other v1 participation act**"." — followed
   by the retained v1.5.0 annotation and then the new v1.6.0 annotation. **No fragment is left
   dangling and no annotation sits inside a sentence.**
10. No `OPEN-##`, `TS-`, `TC-`, `UT-` or `US-` identifier is added, removed, renumbered or reused
    anywhere in this spec. `OPEN-27` remains the high-water mark.
11. No file other than `docs/04-test-strategy-master-plan.md` is touched.
