# Public-files review — `/verify` delta — cycle 2 — README · CONTRIBUTING · SECURITY

> **Not a governed-document review.** Public root files, not numbered documents. This report lives
> in `artifacts/status/` and deliberately avoids the `document-review` machine-parseable field
> names, so it cannot enter the SubagentStop hook's cycle counter. The business rubric and the
> severity scale are the scoring frame only. (Same convention as
> `artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06*.md` and this loop's cycle-1 report.)

```
Files reviewed:   README.md · CONTRIBUTING.md · SECURITY.md
Scope:            the /verify delta — cycle-2 rework of the lines changed by the
                  technical-writer, per artifacts/technical-writer-2026-09-08T1700-readme-
                  verify-c2.md — plus a re-sweep of the three files for staleness
Cycle:            2 of a cap of 5   (c1 FAIL 92% — 0C/0H/2M/5L)
Rework note:      artifacts/technical-writer-2026-09-08T1700-readme-verify-c2.md
Cycle-1 report:   artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify.md
Read at:          working tree, 2026-09-08 (uncommitted)
Review date:      2026-09-08
Reviewer role:    product-owner (Priya Raghunathan) — Accountable for public-facing claims;
                  same reviewer instance-role as cycle 1, per the assignment record
Author excluded:  technical-writer (Maya Lindqvist)
Assignment record: artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md, "Neutral
                  reviewers" table, row: "README / CONTRIBUTING delta | business,
                  FR-131(e)/FR-132(d) discipline | product-owner (new instance) — report
                  artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify.md, NOT under
                  artifacts/reviews/ | RACI: Accountable for public-facing claims | excluded:
                  technical-writer (author)". Cycle-2 report path set by the coordinator:
                  artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify-cycle2.md
Mode:             business rubric (B1–B6), adapted; severity C/H/M/L
Governing test:   unchanged from cycle 1 — (1) the facts (DECISIONS-2026-09-08-VERIFY-PAGE.md
                  §1/§2/§5, the applied code, Doc 14 §1.2, Doc 02 §13 (j) read-only);
                  (2) FR-131 clause (e) / FR-132 §(d) discipline; (3) nothing else stale.
Pass bar:         score ≥ 95% AND zero Critical/High/Medium
Score:            97%  (96.5 weighted)   [c1: 92%]
Critical 0 · High 0 · Medium 0 · Low 3
VERDICT:          PASS — the loop closes at cycle 2 of 5, no escalation
```

---

## 1. Summary (BLUF)

**PASS.** Both Mediums are closed, and closed **better than the minimum I specified**. All five
Lows are closed; the sixth (ISS-07, SECURITY.md) was declined with a reasoned argument I accept
— see §4. Three new Lows are raised, all wording-level, none blocking.

**ISS-01 is closed twice over.** I asked for the false appositive to go and the re-litigation
duty to be stated. The writer did both **and** added the reason the retained copy is wrong —
in plain words, without ids, at `README:137-140`. I checked all three added facts against source
and all three are correct. This is the strongest sentence in the delta: it is the only place in
any public file that tells a reader the retained design copy is *not merely unshipped but
partly false*, which is exactly what `DECISIONS §5.2` records and what nothing public said
before.

**ISS-02 is closed and the contradiction is gone.** `README:32-37` now reads "**v1's design**
also checks… That check is **not built yet**… **When it is built**, someone… **will be able to**
pass it twice", against `README:133`'s "no check exists yet". Present tense removed at both
sites the issue named; the uniqueness caveat and the `FR-132`(d) sentence survive unweakened.

**Nothing else moved.** I re-read the changed paragraphs in full and re-grepped all three files
for `verify`, `unruled`, `625`, `640`, `placeholder` and `open question`. `SECURITY.md` is
byte-unchanged and still contains no stale `/verify` claim (§6).

**One condition on publication, not an issue:** the "640 tests" figure is true of the working
tree today but rests on `Doc 06 v2.8.0`, which now carries a **cycle-1 FAIL** from the tester
(95%, 1 Medium). If the engineer's rework changes `UT-0890`'s assertion count, `README:164` and
`CONTRIBUTING:113` must be re-checked **before these files are committed**. Routed to the PM as
W-1, escalated from "watch" to "live risk".

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (97%, 96.5 weighted)
- Critical = 0? **yes** · High = 0? **yes** · **Medium = 0? yes**
- **Verdict: PASS.** In my judgement as the role Accountable for public-facing claims, the
  `/verify` delta is fit to publish, subject to the W-1 re-check above. I edited none of the
  three files in either cycle.

---

## 3. Cycle-1 issue closure — verified against source, not against the rework note

| ID | Sev | Status | Evidence checked this cycle |
|---|---|---|---|
| **ISS-01** | Medium | **CLOSED — beyond the minimum** | `README:135-140` now reads: "The fuller design copy — **the enrolment sprint's starting point, not a promise of the words the finished page will use** — stays in the code and renders only when the flag is on in `dev`. **It must be checked and rewritten before that flag turns on: some of it is wrong even about the planned check** — the outside company that will run it does see the document, this pilot has only one government-run check to offer (not the several the text describes), and a scrambled version of the document is kept, not nothing." The banned appositive is gone. The re-litigation duty now matches `DECISIONS §5.5` item 6 and `CONTRIBUTING:163-165` word for word in substance. **All three added facts verified:** (i) vendor sees the document — `DECISIONS §5.2`/§16.4 **H-17**, and the wording mirrors the normative placeholder's own "An outside company will do that check, and that company will see your document" (§5.3 planned[1]); (ii) single government-run rail — Doc 14 §1.2 "This pilot deploys one government-run rail only", **OI-20**, against `chooseIssuerHelp`'s plural-issuer claim; (iii) a hashed document reference is retained — **H-18**/`subject_id_hash`, contradicting `kept`'s "cannot be traced back to you" (**H-16**). Wording nit on (iii) raised as ISS-C2-01 (Low). |
| **ISS-02** | Medium | **CLOSED** | `README:32-37`. Present-tense "v1 **also checks**" → "**v1's design** also checks"; "**can pass** the check twice" → "**When it is built**, … **will be able to** pass it twice"; new pointer "(see "What is actually built", below)" using the file's existing cross-reference idiom. The contradiction with `README:133` ("no check exists yet") is gone. Retained intact, as required: the uniqueness caveat, "One-person-one-vote is a v2 property; v1 does not guarantee it (`FR-132`(d), Doc 02 §4.46)", and "no public-facing material for this version should be read as promising otherwise". The PM's ruling that this line is in scope is noted and honoured. |
| **ISS-03** | Low | **CLOSED** | `README:110-112` now reads "three flagged demo features plus one **flag-gated route that shows a placeholder in the public build** (see "What is actually built", below)". My suggested wording, verbatim. |
| **ISS-04** | Low | **CLOSED** | `CONTRIBUTING:43-46`: "off in the public build **because enrolment is not built and cannot start until `CON-015` (a legal opinion) clears**". The *why* is now in the file that previously gave only the *what*. |
| **ISS-05** | Low | **CLOSED — correctly placed** | `CONTRIBUTING:47-48`: "The placeholder's exact text is pinned by `UT-0890` (`apps/web/test/safety-surfaces.test.tsx`); changing it will fail the suite." Placed in the enrolment paragraph, **not** as a sixth row in the FR-131(e) guard table — the distinction I asked be preserved. Verified `UT-0890` exists at that path with the placeholder assertions (engineer's note; `DECISIONS §5.6` D-block). |
| **ISS-06** | Low | **CLOSED** | `CONTRIBUTING:48-51`: the sentence is split. "…route it through the product-owner role too — the same caution as for a participation-act claim." then "Two of these questions are still unsettled — Doc 02 §13 (j) items (1) and (2)." The routing duty now reads as unqualified. |
| **ISS-07** | Low | **DECLINED — reasoning accepted** | See §4. |

---

## 4. ISS-07 (SECURITY.md) — the declension is right, and better reasoned than my suggestion

I flagged a `REL-LIM-18`-style closed-defect entry as optional and explicitly the writer's call.
The writer declined, on two grounds I did not raise and which I now think are stronger than the
suggestion itself:

1. **No `REL-LIM-##` id exists for the `/verify` fix.** `REL-LIM-18` is a Doc 09 release-register
   id. No artifact in this session mints one for the `/verify` remedy — and `DECISIONS §5.7` is
   explicit that **no new requirement is minted** for it. Writing a SECURITY.md line in the shape
   of a register entry, implying an id that does not exist, would be a small honesty defect of
   exactly the class this loop exists to catch. **The technical-writer is right that it has no
   authority to mint one.**
2. **`REL-LIM-18` cites two real commit SHAs as its evidence of closure; the `/verify` remedy has
   none** — the engineer's and the writer's changes are both uncommitted (my own W-2). Declaring
   it "closed" in the same sentence-pattern as a merged, SHA-verified fix would overstate its
   state.

I verified the substance: `SECURITY.md` is unchanged and contains nothing false. Its only hits
for my sweep terms are "placeholder offset" (`:9`, the MS-09 schedule anchor), "forge an
enrolment" (`:30`, `REL-LIM-01`, about mock verifiers — still true) and "halt all enrolment"
(`:87`, `REL-LIM-16`, design-level — still true). None concerns the `/verify` page.

**Routed, not dropped:** if the sre (owner of the `REL-LIM` register) or the PM wants the entry
once the drop is committed and an id exists, it is a mechanical follow-up. Recorded here so it
survives this loop's closure.

---

## 5. New issues — all Low, none blocking

### ISS-C2-01 — Low — `README:139-140`

> "…and **a scrambled version of the document** is kept, not nothing."

What is retained is a one-way hash of the document **reference/number** (`subject_id_hash`), not
of the document. The same README states it precisely at `:63-64` ("a one-way-hashed
identity-document reference (`subject_id_hash`)"), and Doc 14 §1.2 uses the citizen-facing form
"a one-way scrambled version of the **document number**". As written, a reader could conclude a
scrambled copy of the ID document itself is stored.

This errs toward over-stating retention, which is the safe direction, and the material takeaway
("something derived from your document is kept, not nothing") is correct — hence Low, not
Medium. **One-word fix:** "a scrambled version of the document **number** is kept, not nothing."
Worth taking on the next touch of the file for consistency with `:63-64`.

### ISS-C2-02 — Low — `README:137-140`

The new "It must be checked and rewritten…" sentence runs to roughly 55 words across three
comma-separated facts and an em-dash. It is the longest sentence in the delta and the least
Grade-8 thing in it. The content is right and I would not trade any of it away; splitting after
"planned check" costs nothing:

> "It must be checked and rewritten before that flag turns on. Some of it is wrong even about the
> planned check: the outside company that will run it does see the document, this pilot has only
> one government-run check to offer — not the several the text describes — and a scrambled
> version of the document number is kept, not nothing."

### ISS-C2-03 — Low — `CONTRIBUTING:39-41` and `:50-51`

The paragraph now states that Doc 02 §13 (j) items (1) and (2) remain open **twice**, eleven
lines apart. Both statements are correct; the second exists because of my ISS-06 split. If the
writer touches the paragraph again, the first mention can shed the "— Doc 02 §13 (j) items (1)
and (2)" pin and let the closing sentence carry it. Cosmetic.

---

## 6. Staleness re-sweep — what I grepped, this cycle

Case-insensitive across `README.md`, `CONTRIBUTING.md`, `SECURITY.md`:

| Term | Hits | Ruling |
|---|---|---|
| `625` | **none** | ✓ fully superseded. |
| `640` | `README:164`, `CONTRIBUTING:113` | ✓ consistent, both dated 2026-09-08; see W-1. |
| `unruled` | `CONTRIBUTING:41`, `:166` | ✓ both attached to items (1)/(2), which are genuinely open per Doc 02 §13 (j). |
| `open question` | **none** in the three files | ✓ |
| `placeholder` | `README:111` (now flag-aware — ISS-03 fix), `CONTRIBUTING:47` (the `UT-0890` sentence), `SECURITY:9` (MS-09 offset, unrelated) | ✓ |
| `verify` | README: the bullet, `:111`, `:123`, plus `npm run verify` (`:168`, `:175`) and `verify.yml` (`:176`). CONTRIBUTING: `:41`, `:47`, `:163`, plus `verify.yml` (`:88`) and `npm run verify` (`:117`). | ✓ CI-script senses correct and untouched. |

**Cross-file consistency re-checked:** `README:137` ("must be checked and rewritten before that
flag turns on") and `CONTRIBUTING:163-165` ("must be re-litigated before that flag is turned
on") now say the same thing — the cycle-1 ISS-01 contradiction is resolved in both directions,
not patched on one side. `README:32-37` and `README:133` now agree. `README:63-64` and
`README:139-140` are consistent in substance, imprecise in wording (ISS-C2-01).

**Spot-checked untouched sentinels** from the closed 2026-09-06 loop: the six-field / open-tier
retention paragraph (`README:61-77`), the Status block's mock-verifier and "not deployed
anywhere" paragraphs, CONTRIBUTING §7's "do not write that review yourself" paragraph, and the
five-row FR-131(e) guard table (`CONTRIBUTING:27-33`, no row added). All intact.

---

## 7. FR-131 clause (e) / FR-132 §(d) discipline — cycle-2 application

**No breach in any changed line.**

- **Banned-word set** (`private` · `anonymous` · `receipt-free` · `secure`): none introduced in
  either cycle. The only occurrences remain `CONTRIBUTING:18` (the definitional statement of the
  rule) and `README:27-30`/`:82-98` (negated, v2-labelled) — all pre-existing and untouched.
- **No participation-act claim** created or altered; clause (e) has nothing to catch.
- **Nothing describes the enrolment design as working today.** ISS-02's rewrite moved the last
  present-tense enrolment claim in the three files into the future; ISS-01's addition speaks only
  of "the **planned** check".
- **Enrolment unbuilt + blocked on CON-015** is now stated in **both** README (`:134-135`) and
  CONTRIBUTING (`:44-45`) — cycle 1 had it only in README.
- **No claim of progress on enrolment** (`DECISIONS §5.7`). Every cycle-2 edit corrects wording or
  supplies a reason; none describes a capability gained. The strongest statement in the delta is
  that a retained page is *wrong*, which is the opposite of a progress claim. ✓
- **§5.7 respected:** neither file rules on `home.steps[0].body` or `home.promises[3]`; both
  still name them as open, citing Doc 02 §13 (j) items (1) and (2). ✓
- **No Doc 02 version is pinned** in either public file — correct, given Doc 02 has moved
  v2.17.2 → v2.17.3 during this loop. The citation is to `§13 (j)(3)`, whose ruling text is
  stable across both versions. ✓

---

## 8. Watch items — routed to the project-manager

- **W-1 — ESCALATED from watch to live risk.** "640 tests (2026-09-08)" (`README:164`,
  `CONTRIBUTING:113`) is true of the working tree and corroborated by the engineer's note
  (95+151+244+18+16+116 = 640) and Doc 06 v2.8.0 §3. But **Doc 06 v2.8.0 now carries a cycle-1
  FAIL** (tester; 95%, 0C/0H/1M). If the engineer's rework changes `UT-0890`'s assertion count or
  the suite total, both lines are wrong. **Re-verify the figure against the passing Doc 06
  version before these public files are committed.**
- **W-2 — the delta still describes uncommitted code.** Public files and the behaviour they
  describe must land in the same commit, or the README describes a page that does not behave
  that way.
- **W-3 — Doc 02 §13 (j)(3) citation.** Doc 02 is now v2.17.3 with a passing report (per the
  coordinator). The citation is version-free and the (j)(3) ruling text is stable; W-3 can be
  closed by the PM unless v2.17.4 moves it.
- **W-4 — Arabic debt** on the four `ar.ts` `verify.unavailable*` strings (DECISIONS §5.4; Doc 02
  §13 tracked deferral (b)) — covered generically by CONTRIBUTING §6's existing bullet.
- **W-5 — `UT-0890`'s TC row** owed to the tester at the next Doc 07/08 touch.
- **W-6 (new) — SECURITY.md `REL-LIM` entry** for the closed `/verify` overclaim, once the drop
  is committed and the sre mints an id. Optional; see §4.

---

## 9. Routing

**The loop is closed at cycle 2 of 5.** Trajectory: **92% (0C/0H/2M/5L) → 97% (0C/0H/0M/3L)**.

1. **technical-writer (Maya Lindqvist)** — nothing required. ISS-C2-01 (one word), ISS-C2-02 (a
   sentence split) and ISS-C2-03 (a duplicated pin) are Lows to take on the next touch of these
   files; none of them blocks publication. The three public files are approved from my side as
   the role Accountable for public-facing claims.
2. **project-manager (Ana-Maria Petrescu)** — record "README/CONTRIBUTING delta: cycle 2 **PASS**
   97% (0C/0H/0M/3L)" in the Outcomes table of `REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`;
   record that the ISS-02 scope question was **answered in scope** by the coordinator, not
   carried; carry W-1 (blocking on commit), W-2, W-4, W-5, W-6 and close W-3 if satisfied.
3. **Nobody else.** This report touches neither Doc 02 v2.17.3 (reviewer-qa's, now passing) nor
   Doc 06 v2.8.0 (tester's cycle-1 FAIL → the **engineer** reworks). I am the assigned reviewer
   of neither and did not self-appoint on either.

**I edited none of the three files, in either cycle.** Scored and listed only, per CLAUDE.md's
review-and-rework loop and the assignment record cited at the head of this report.
