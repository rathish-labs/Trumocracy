# Anchored spec — Doc 04 v1.4.0 → v1.5.0 (FR-131 clause (e))

```
Spec ID:       SPEC-DOC04-v1.5.0-CLAUSE-E
Target file:   docs/04-test-strategy-master-plan.md
From version:  1.4.0 (Approved)
To version:    1.5.0 (In Review)
Author:        Ravi Deshmukh — Principal Architect (owner of Docs 03 and 04)
Date:          2026-09-06
Applier:       project-manager's mechanical applier (the architect has Write but not Edit;
               Doc 04 MUST NOT be whole-file rewritten)
Authority:     Approver ruling, Rathish Kumar, 2026-09-06 —
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 item 3
               ("APPROVED — Draft and apply FR-131 clause (e) in Doc 02"), §6 (the amendment
               as drafted), applied as docs/02-requirements-srs.md **v2.17.0** §4.45.
Operations:    14 (OP 1 … OP 14)
Touches:       docs/04-test-strategy-master-plan.md ONLY. No other document, no code.
```

## How to apply

- Fences below are **four backticks**. Everything between them is literal file text.
- Every `FIND` matches **exactly once** in the target file. Apply the OPs **in order**; none of
  them overlaps another.
- Boundary rule: every non-blank `FIND` line reappears in `REPLACE WITH` except where the OP
  header **names** a replacement or a deletion. Two OPs name one:
  - **OP 1** names the version bump (`1.4.0` → `1.5.0`) and converts the retained v1.4.0 `Status:`
    label line into a continuation line — the *words* of that line are preserved verbatim, only
    the 15-column label gutter becomes 15 spaces of indent. This is the house
    `_(vN record, retained:)_` pattern already used in Doc 07's header.
  - **OP 3** likewise converts the `Changelog:` label line of the v1.4.0 entry into a
    continuation line so the new v1.5.0 entry can take the label.
- The header block uses a **15-column label gutter**: `Version:` + 7 spaces, `Status:` + 8 spaces,
  `Source:` + 8 spaces, `Last updated:` + 2 spaces, `Changelog:` + 5 spaces; continuation lines are
  indented **15 spaces**. Copy the indentation exactly.
- Do not reflow, re-wrap or re-space any line that is not inside a `FIND`.

## Commentary for the applier (not part of any operation)

Three things this spec deliberately does **not** do, so they are not read as omissions:

1. **Clause (e) is not a fifth clause of the DES-098 notice.** The notice-content range in §0.5 S4
   stays **(a)–(d)**. Clause (e) is a *claims duty on every public-facing string about any v1
   participation act*. It is verified by a UT-0869-pattern guard on the landing copy — **UT-0889
   (Doc 06 v2.6.0)**, `apps/web/test/safety-surfaces.test.tsx` — and otherwise by **inspection (I)**.
2. **No test status is upgraded, no suite is added or retired, no `OPEN-##` / `TS-` / `TC-` /
   `UT-` ID is renumbered or reused.** One new open item is minted: **OPEN-27** (high-water mark
   was OPEN-26).
3. **No Doc 03 change is specified.** See the architect's judgement in the session note
   `artifacts/architect-2026-09-06T1530-doc04-clause-e.md`: no normative statement in Doc 03 has
   become false under clause (e). The one statement whose *basis* has narrowed — the §10.12.3
   `anon`-badge disposition that Doc 04 §0.5 S5 cites — is routed as **OPEN-27**, not rewritten
   here. A copy ruling belongs to the copy authority; that is the v2.7.0 lesson this document
   family has already paid for once.

---

### OP 1 — docs/04-test-strategy-master-plan.md — header: bump Version 1.4.0 → 1.5.0 and open a new `Status:` for v1.5.0, retaining the v1.4.0 status record verbatim as a continuation line

FIND:
````
Version:       1.4.0
Status:        Approved — 04-test-strategy-master-plan-v1.4.0-technical-cycle2.md (PASS 96%,
````
REPLACE WITH:
````
Version:       1.5.0
Status:        In Review — v1.5.0 (2026-09-06). **FR-131 clause (e) was ruled in, so the
               requirement question §0.5 S4 routed to the product-owner at v1.4.0 is ANSWERED
               and this plan is re-cut to the amended requirement.** Authority: the approver's
               recorded decision of **2026-09-06** (Rathish Kumar —
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 item 3: "**APPROVED**
               — Draft and apply FR-131 clause (e) in Doc 02"), applied as **Doc 02 v2.17.0
               (In Review)** §4.45. Minor bump: a normative test-criterion scope change.
               **What changed.** (1) §0.5 **S4** carries a dated v1.5.0 note recording that
               clause (e) is ruled in; **the notice-clause range stays (a)–(d)** — clause (e) is
               **not** a fifth notice assertion but a claims duty over every v1 participation
               act, so no fifth notice clause is asserted and none may be minted; it is verified
               by **UT-0889 (Doc 06 v2.6.0)** on the landing copy, by **UT-0869** on the party
               copy, and otherwise by **inspection (I)**. (2) S4's forbidden-word scan and §0.5
               **S5**'s build-failing denylist are widened from "v1 voting behaviour" to the
               amended closing sentence's "**or any other v1 participation act**", keeping this
               plan's own ***secret*** extension and the **clause-(a) negated-form carve-out**
               intact, and adding the clause-(e) **claims** test (a string can fail with none of
               the banned words in it — the two worst strings the 2026-09-06 ruling found
               contained none). (3) S5's named `anon`-badge carve-out is annotated: it does
               **not** lapse — Doc 03's re-open trigger (iii) is worded for an *unconditional*
               FR-131 amendment and this one is not — but the disposition it cites was reasoned
               against a voting-scoped FR-131, and that question is routed to the architect as
               **OPEN-27**. (4) Header and §1.4 pins re-cut. **No `OPEN-##`, `TS-`, `TC-` or
               `UT-` ID is renumbered or reused; no suite is added or retired; no test status is
               upgraded; §0.6's counts and §14's reservations are untouched.**
               **Owed downstream, cited as owed and not as done:** the clause-(e) `TC` rows are
               the tester's to cut — **Doc 07 v2.7.0** and **Doc 08 v2.10.0** — under the
               existing story **US-0134** (FR-131 · DES-098); no `TC` is minted here.
               **The three v1.4.0 Lows are DISCHARGED, not carried.** **ISS-C2-01** — Doc 07
               re-pinned to **v2.6.0 (Approved)** in the `Source:` block **and** at §1.4, the two
               locations the cycle-2 review named. **ISS-C2-02** — §1.3's no-story annotation
               re-pinned to **Doc 05 v2.5.0 (Approved)**, the third ISS-05 location. **ISS-C2-03**
               — the Doc 09 line now states the version in force, **Approved v1.9.0**, instead of
               an in-flight number that was overtaken within the day. Two further stale pins were
               found on this touch and swept with them rather than left to age: **Doc 03 v2.13.0
               is Approved** (the block said In Review) and **Doc 06** is re-pinned with the
               **v2.6.0** cut that registers **UT-0889**. **No Low is carried forward from
               v1.4.0.**
               _(v1.4.0 record, retained verbatim per annotate-don't-delete — its three carried
               Lows are discharged above:)_
               Approved — 04-test-strategy-master-plan-v1.4.0-technical-cycle2.md (PASS 96%,
````

---

### OP 2 — docs/04-test-strategy-master-plan.md — `Source:` block: re-pin Docs 02/03/06/07/09 and annotate the superseded "(a), (b), (c), (d) — four, not five" statement

FIND:
````
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md **v2.16.3**, Approved 2026-08-30) —
               FR-131 §4.45 is the normative wording this plan tests against, and it enumerates
               clauses (a), (b), (c), (d) — four, not five (see §0.5 S4)
               BKLG-TRUMOCRACY (docs/05-product-backlog.md **v2.5.0**, Approved — re-pinned at
               v1.4.0 from the stale "v2.3.0, In Review" pin, cycle-1 ISS-05; `OPEN-21` remains
               live and correct on its merits and is re-pinned in its own body too)
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md **v2.13.0**, In Review — the
               matching half of this same FR-131 cascade, reworked in the same cycle; re-pinned
               from v2.12.0 at v1.4.0, and from v2.11.2 at v1.3.0)
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md **v2.5.1**, Approved — re-pinned from
               v2.4.3 at v1.3.0; v2.5.0/v2.5.1 carry the FR-131 code drop and UT-0759/0887/0888)
               TC-TRUMOCRACY (docs/07-test-cases-suites.md **v2.4.4**, Approved)
               REL-TRUMOCRACY (docs/09-release-notes.md — last **Approved v1.4.0**; **v1.5.0** is
               In Review at this date, the `REL-LIM-18` closure pass, whose cycle-1 review FAILed
               at 93% with rework to v1.6.0 in progress. `REL-LIM-18` / `ISS-03` — the defect
               this cascade closes — was recorded at **v1.3.0**; every v1.3.0 citation elsewhere
               in this document is that record, not a version pin) _(v1.4.0, cycle-1 ISS-06)_
               ADR-001 … ADR-025 (docs/adr/ — 25 ADRs present, verified 2026-08-31)
````
REPLACE WITH:
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
               BKLG-TRUMOCRACY (docs/05-product-backlog.md **v2.5.0**, Approved — re-pinned at
               v1.4.0 from the stale "v2.3.0, In Review" pin, cycle-1 ISS-05; `OPEN-21` remains
               live and correct on its merits and is re-pinned in its own body too)
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md **v2.13.0**, **Approved** — the
               matching half of this same FR-131 cascade, reworked in the same cycle; re-pinned
               from v2.12.0 at v1.4.0, and from v2.11.2 at v1.3.0) _(v1.5.0: the status half of
               this pin read "In Review"; v2.13.0 passed its cycle-2 technical review at 97% and
               is Approved. **No Doc 03 statement is falsified by FR-131 clause (e)** — the
               §10.12.3 `anon`-badge question that clause (e) does raise is routed as
               **OPEN-27**, not decided here.)_
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md — last **Approved v2.5.1**; **v2.6.0**
               is being cut in this same 2026-09-06 session and registers **UT-0889**, the
               clause-(e) landing-copy guard in `apps/web/test/safety-surfaces.test.tsx`, which
               this plan cites as **owed-and-in-progress, not green** — re-pinned from
               v2.4.3 at v1.3.0; v2.5.0/v2.5.1 carry the FR-131 code drop and UT-0759/0887/0888)
               TC-TRUMOCRACY (docs/07-test-cases-suites.md **v2.6.0**, Approved) _(v1.5.0,
               cycle-2 ISS-C2-01 DISCHARGED — this read "**v2.4.4**, Approved", which was Doc 07's
               last Approved version when written and is stale rather than false; the clause-(e)
               `TC` re-cut is owed at **Doc 07 v2.7.0** / **Doc 08 v2.10.0**, from the tester)_
               REL-TRUMOCRACY (docs/09-release-notes.md — **Approved v1.9.0**, the version in
               force (business cycle 5, PASS 97%, 2026-09-06). `REL-LIM-18` / `ISS-03` — the
               defect this cascade closes — was recorded at **v1.3.0**; every v1.3.0 citation
               elsewhere in this document is that record, not a version pin) _(v1.4.0, cycle-1
               ISS-06; re-pinned at **v1.5.0**, cycle-2 ISS-C2-03 DISCHARGED — the superseded
               pin read "last **Approved v1.4.0**; **v1.5.0** is In Review at this date, the
               `REL-LIM-18` closure pass, whose cycle-1 review FAILed at 93% with rework to
               v1.6.0 in progress", which was true when written and was overtaken within the
               same day; that loop has since closed at v1.9.0)_
               ADR-001 … ADR-025 (docs/adr/ — 25 ADRs present, verified 2026-08-31)
````

---

### OP 3 — docs/04-test-strategy-master-plan.md — add the v1.5.0 changelog entry above the v1.4.0 entry (the v1.4.0 entry keeps its words and moves to a continuation line)

FIND:
````
Last updated:  2026-09-06
Changelog:     2026-09-06 v1.4.0 — **Rework cycle 1 against
````
REPLACE WITH:
````
Last updated:  2026-09-06
Changelog:     2026-09-06 v1.5.0 — **FR-131 clause (e) ruled in; this plan re-cut to the amended
               requirement.** Minor bump: a normative test-criterion scope change. This entry
               describes only what changed. **Authority.** Approver Rathish Kumar, **2026-09-06**,
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 item 3 — "**APPROVED**
               — Draft and apply FR-131 clause (e) in Doc 02" — applied as **Doc 02 v2.17.0
               (In Review)** §4.45. The condition v1.4.0's S4 note wrote down has occurred: "If a
               clause (e) is later ruled in, this criterion and the TCs derived from it are re-cut
               together." This version is the criterion half of that re-cut; the `TC` half is the
               tester's, owed at **Doc 07 v2.7.0** and **Doc 08 v2.10.0** under the existing story
               **US-0134** (FR-131 · DES-098). No `TC` is minted here.
               **§0.5 S4 — the routed question is ANSWERED, and the answer is narrower than it
               looks.** The v1.4.0 note routed to Priya Raghunathan (product-owner) is discharged
               by a dated v1.5.0 note placed **above** it; the v1.4.0 note is retained in full.
               **The notice-clause range stays (a)–(d)**: clause (e) is **not** a fifth clause of
               the DES-098 ballot notice and MUST NOT be tested as a fifth notice assertion. It is
               a **claims duty on every public-facing string about any v1 participation act** —
               casting a vote, endorsing or backing a petition, joining or belonging to a party,
               or supporting a party — **in any language**, whose test is what an ordinary Grade-8
               reader (`NFR-023`) would take the claim to mean. Verification: **UT-0889 (Doc 06
               v2.6.0)**, the UT-0869-pattern guard on the landing copy in
               `apps/web/test/safety-surfaces.test.tsx`; **UT-0869** on the party copy; otherwise
               **inspection (I)**, which is FR-131's own recorded Verify-by.
               **§0.5 S4 and S5 — scan scope widened, carve-outs preserved.** Both now read
               against the amended closing sentence: the four words MUST NOT describe "v1 voting
               behaviour **or any other v1 participation act**". Two things are deliberately
               unchanged. (1) This plan's own fifth word ***secret*** stays, still labelled as
               **this plan's deliberate extension** beyond FR-131's four. (2) The **clause-(a)
               negated-form carve-out** stays: where clause (a) mandates those words they appear
               **only negated**, so the FR-131(a) ballot banner and **UT-0887** are unaffected —
               the amendment was drafted with that carve-out for exactly this reason. What is
               genuinely new is that S5 is now explicitly a **claims** test and not only a word
               list: a string can fail it with none of the five words present. That is not a
               theoretical case — the two strings the 2026-09-06 ruling corrected ("your name kept
               private", "we never learn") contained none of them, and a per-string ruling cadence
               is the governance smell clause (e) exists to end.
               **§0.5 S5 — the `anon`-badge carve-out is annotated, not lapsed, and the question
               it raises is routed.** Doc 03 v2.13.0 §10.12.3's re-open trigger (iii) is worded for
               an amendment that bans the four words **unconditionally**; clause (e) widens the
               scope but keeps it conditional, so **the carve-out does not lapse automatically and
               this plan does not treat it as lapsed**. But the disposition it cites was reasoned
               on "the badge is not describing that user's **voting** behaviour", and the `anon`
               pill's own clause-8 contexts include **party-joining (screen 1.6)** and **endorsing
               (screen 2.3)** — two acts clause (e) now names. That is a **copy question for the
               copy authority (Doc 03), not for this plan**; writing the ruling here would repeat
               the v2.7.0 mistake this document was marked down for. Routed to Ravi Deshmukh as
               **OPEN-27** (§13). Meanwhile the carve-out stays **exactly one** exception, keyed to
               those two `anon` strings, and MUST NOT be extended to any other string.
               **Three carried Lows DISCHARGED (none carried forward).** **ISS-C2-01** — Doc 07
               re-pinned **v2.4.4 → v2.6.0 (Approved)** in the `Source:` block and at **§1.4**.
               **ISS-C2-02** — §1.3's no-story annotation re-pinned **Doc 05 v2.3.0 (In Review) →
               v2.5.0 (Approved)**, the third ISS-05 location, the one carrying the live
               re-derivation instruction `OPEN-21` cross-references. **ISS-C2-03** — the Doc 09
               line now names the version in force, **Approved v1.9.0**, rather than an in-flight
               number. Swept with them: **Doc 03 v2.13.0** is **Approved** (the pin said In
               Review), and the **Doc 06** pin now carries the **v2.6.0** cut and **UT-0889**.
               **What did NOT change.** No requirement is interpreted beyond Doc 02's own words;
               no suite is added or retired; no `TC`, `UT`, `TS-`, `OPEN-##` or `ISS-` ID is reused
               or renumbered; §0.6's 4 / 2 / 7 bucketing and its counts, §14's reservations and
               every test status are untouched; `OPEN-01` remains a Definition-B Gate-2 blocker
               with unchanged owners; `A-02.6`'s enforced-today / owed split stands as written and
               was re-read against clause (e) — it describes the **ballot** banner under the
               clause-(a) carve-out and is unaffected. **No product code is edited by this
               document**; the code corrections are the engineer's, routed by the decision record
               §8 R-1…R-4.
               2026-09-06 v1.4.0 — **Rework cycle 1 against
````

---

### OP 4 — docs/04-test-strategy-master-plan.md — §0.5 S4: widen the forbidden-word scan to any v1 participation act and name the clause-(e) guard

FIND:
````
**S4 — Disclosure copy is asserted verbatim, not paraphrased.** The DES-098 notice (`FR-131`) MUST
be tested for: presence before confirmation; non-dismissability; WCAG 2.2 AA (DES-081);
screen-reader operability; the required clauses **(a)–(d)**; and a **forbidden-word scan** — the
notice and every v1 voting surface MUST NOT use *private*, *anonymous*, *receipt-free* or
*secure* to describe v1 voting behaviour, and this plan's scan additionally forbids *secret* as a
deliberate extension of its own (see the note below). Clause (d) (the blocked-counting-action
disclosure for open-tier participants, Doc 02 H-19) is tested at **every** surface that can block a
counting action, not only the first one built.
````
REPLACE WITH:
````
**S4 — Disclosure copy is asserted verbatim, not paraphrased.** The DES-098 notice (`FR-131`) MUST
be tested for: presence before confirmation; non-dismissability; WCAG 2.2 AA (DES-081);
screen-reader operability; the required clauses **(a)–(d)**; and a **forbidden-word scan** — the
notice and every v1 voting surface MUST NOT use *private*, *anonymous*, *receipt-free* or
*secure* to describe v1 voting behaviour **or any other v1 participation act (FR-131 clause (e):
casting a vote, endorsing or backing a petition, joining or belonging to a party, supporting a
party)**, and this plan's scan additionally forbids *secret* as a
deliberate extension of its own (see the note below). Clause (d) (the blocked-counting-action
disclosure for open-tier participants, Doc 02 H-19) is tested at **every** surface that can block a
counting action, not only the first one built. **Clause (e) is not a fifth notice assertion** —
the notice-clause range above is **(a)–(d)** and stays there; clause (e) is a claims duty over
every v1 participation act, scanned at **S5** and guarded by **UT-0889 (Doc 06 v2.6.0)** and
**UT-0869**. The word ban carries **one carve-out**: where **clause (a)** mandates the words
("NOT anonymous, NOT receipt-free, NOT coercion-resistant") they MUST appear **only in the negated
form clause (a) requires** — the negation-aware assertion `UT-0887` already makes, and the reason
the amendment cannot break the FR-131(a) banner.
````

---

### OP 5 — docs/04-test-strategy-master-plan.md — §0.5 S4 note: prepend the dated v1.5.0 note that answers the routed question; the v1.4.0 note is retained untouched below it

FIND:
````
> _(v1.4.0 — cycle-1 ISS-02 and ISS-03; annotated in place rather than silently rewritten.)_
````
REPLACE WITH:
````
> **_(v1.5.0 — 2026-09-06. READ THIS FIRST. The v1.4.0 note below is retained in full per
> annotate-don't-delete and is SUPERSEDED on one point: the requirement question it routed has
> been answered.)_**
> **Clause (e) was ruled in on 2026-09-06.** The approver (Rathish Kumar) approved the
> product-owner's amendment — artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11
> item 3 — and it is applied as **Doc 02 v2.17.0 (In Review)** §4.45. The v1.4.0 routing to
> Priya Raghunathan is **discharged**; the note below is retained because it records why the
> criterion read (a)–(d) while the question was open, and because its closing sentence — "If a
> clause (e) is later ruled in, this criterion and the TCs derived from it are re-cut together" —
> is the instruction this version is executing.
> **The notice-clause range does NOT become (a)–(e).** This is the point most likely to be got
> wrong, so it is stated flatly. Clause (e) is **not** a fifth clause of the DES-098 notice. It is
> a **duty about claims** — "no public-facing string, screen, README or other material, in any
> language, MUST assert that a **participation act** is unknowable to Trumocracy" — where a
> participation act is casting a vote, endorsing or backing a petition, joining or belonging to a
> party, or supporting a party. Its test is **what an ordinary Grade-8 reader (`NFR-023`) would
> take the claim to mean, not whether a banned word appears**. S4 therefore keeps testing the
> **four** notice clauses **(a)–(d)** verbatim, and clause (e) is tested at **S5** as a scan over
> every v1 public-facing string.
> **How clause (e) is verified, and by whom.** By **UT-0889 (Doc 06 v2.6.0)** — a UT-0869-pattern
> guard on the landing copy in `apps/web/test/safety-surfaces.test.tsx`, minted by the engineer in
> the same 2026-09-06 session and cited here as **owed-and-in-progress, not green**; by **UT-0869**
> on the party copy (`apps/web/src/i18n/en.ts` `parties.joinPrivate`, the pattern Doc 02 names as
> the **approved satisfying form**: state what the platform does not *publish*, and separately
> state what the platform's own records **can see**); and otherwise by **inspection (I)**, which is
> FR-131's own recorded Verify-by. No new suite is created for clause (e).
> **Tester note (Ji-woo Park) — supersedes the v1.4.0 tester note below on one point.** Still do
> **not** derive a fifth *notice* `TC` row from a five-clause reading of the notice: the notice has
> four clauses. **Do** cut clause-(e) rows as a **copy/claims** obligation against `UT-0889` /
> `UT-0869` and inspection, at **Doc 07 v2.7.0** and **Doc 08 v2.10.0**, under the existing story
> **US-0134** (FR-131 · DES-098) — the decision record mints no new `US`. FR-131's Doc 08 Must row
> is OPEN and the mints are owed; this plan does not upgrade that status and neither should the
> re-cut until the guard is green.
> **Scope of the ban, restated because it moved.** FR-131's closing sentence now reads "…to
> describe v1 voting behaviour **or any other v1 participation act as defined in clause (e)**",
> with an explicit carve-out preserving clause (a)'s mandated negated forms. The superseded
> wording — "to describe v1 voting behaviour", full stop — is quoted verbatim in Doc 02 §4.45's own
> Source annotation. S4's scan and S5's denylist are widened to match; the ***secret*** extension
> and the clause-(a) carve-out are both preserved.
>
> _(v1.4.0 — cycle-1 ISS-02 and ISS-03; annotated in place rather than silently rewritten.)_
````

---

### OP 6 — docs/04-test-strategy-master-plan.md — §0.5 S5: widen the denylist to the amended closing sentence and make the claims test explicit

FIND:
````
**S5 — No v1 surface may claim a v2 property.** Extends the DES-085 jargon filter with a second
denylist over `apps/web` and `packages/ui` user-facing strings: no v1 string may assert anonymity,
unlinkability, receipt-freeness, coercion resistance, one-person-one-vote, zero-knowledge or "we
cannot see it", except inside a DES-098 notice that is explicitly denying it. **Build-failing.**
````
REPLACE WITH:
````
**S5 — No v1 surface may claim a v2 property.** Extends the DES-085 jargon filter with a second
denylist over `apps/web` and `packages/ui` user-facing strings: no v1 string may assert anonymity,
unlinkability, receipt-freeness, coercion resistance, one-person-one-vote, zero-knowledge or "we
cannot see it", except inside a DES-098 notice that is explicitly denying it. **Build-failing.**

**Scope, widened at v1.5.0 by FR-131 clause (e)** _(Doc 02 v2.17.0 §4.45; approver ruling
2026-09-06)_. The scan is no longer voting-scoped and is no longer only a word list. Four rules,
stated so the scan is mechanical:

1. **Words.** *private*, *anonymous*, *receipt-free*, *secure* — plus this plan's own extension
   ***secret*** — MUST NOT describe **v1 voting behaviour or any other v1 participation act**:
   casting a vote, endorsing or backing a petition, joining or belonging to a party, or supporting
   a party. **In every language**, `en` and `ar` alike; a locale mirror is a public-facing string.
2. **Claims, not only words.** A string FAILS this scan if an **ordinary reader at the Grade-8
   level (`NFR-023`)** would conclude from it that **Trumocracy itself** cannot link them to a
   participation act — even when none of the five words appears. The two strings the 2026-09-06
   ruling corrected ("…with your name kept private", "we never learn…") contained none of them.
   Under conventional authentication (ADR-024, ADR-025) the v1 operator database **can** make that
   link, and for endorsement necessarily **does**: `FR-014` (at most one endorsement per person per
   petition) and `FR-015` (withdraw your own endorsement) cannot be satisfied in v1 without it.
3. **The satisfying pattern PASSES, and is named so the scan is not merely prohibitive.** Copy that
   states what the platform does **not publish**, and separately states what the platform's **own
   records can see**, satisfies clause (e). The approved exemplar is `apps/web/src/i18n/en.ts`
   `parties.joinPrivate`, guarded by **UT-0869**; the landing copy is guarded by **UT-0889
   (Doc 06 v2.6.0)**. Where an act is additionally **public by design** — petition endorsement is
   (Doc 14 §2.2, "a public act, on purpose"; the fully private alternative is the
   `private_endorsement` charter option, a Phase-4 flag OFF in every v1 deployment) — the copy MUST
   say so plainly and MUST NOT describe that act as kept private, secret or hidden.
4. **Two carve-outs, and only two.** (i) **Clause (a)'s mandated negated forms** — inside a DES-098
   notice the banned words appear **only** as "NOT anonymous / NOT receipt-free /
   NOT coercion-resistant", which is a denial, not a claim; `UT-0887` is negation-aware for exactly
   this reason and is unaffected by the widening. (ii) The **named `anon`-badge carve-out** below,
   unchanged and unextended. **Out of scope:** claims about **personhood enrolment and identity
   verification** are governed by `FR-132` and Doc 02 §16.4 H-16/H-17/H-18, expressly **not** by
   clause (e) (Doc 02 §13 tracked routing (j)) — this scan MUST NOT be used to rule them, and the
   product-owner's ruling on them is owed.
````

---

### OP 7 — docs/04-test-strategy-master-plan.md — §0.5 S5 carve-out: append the dated v1.5.0 annotation (does not lapse; question routed as OPEN-27)

FIND:
````
> there and not answered by this carve-out.

**S6 — Call-site census.** `verifyEligibility()` MUST be invoked at exactly the three `FR-123`
````
REPLACE WITH:
````
> there and not answered by this carve-out.
>
> **_(v1.5.0 — 2026-09-06: FR-131 was amended. The carve-out does NOT lapse; the question it now
> raises is routed, not answered here.)_** Doc 03's re-open trigger **(iii)** reads "FR-131 is
> amended to ban the four words **unconditionally** rather than 'to describe v1 voting
> behaviour'". Clause (e) (Doc 02 **v2.17.0** §4.45) widens the scope to **any v1 participation
> act** but keeps the ban **conditional** — it is not the unconditional amendment trigger (iii)
> describes. **The carve-out therefore stands, unchanged and unextended**, and this plan does not
> treat it as lapsed. **What has changed underneath it, stated rather than glossed:** the
> disposition's stated basis is that the badge "is not describing that user's **voting**
> behaviour", and the `anon` pill's own clause-8 contexts are browsing (screen 1.2),
> **party-joining (screen 1.6)** and **endorsing (screen 2.3)** — the last two of which clause (e)
> now names as participation acts, and about which Doc 03 already concedes the subtitle is "not
> literally true in v1". Whether the title and subtitle still pass is a **copy ruling, and the copy
> authority is Doc 03, not this plan** — ruling it here would repeat the v2.7.0 mistake this
> carve-out was written to avoid. Routed to **Ravi Deshmukh** for the next Doc 03 increment as
> **OPEN-27** (§13). **Not a shipped-copy defect today:** `PrivacyStatus` has no authenticated host
> surface in `apps/web` (the component's own header records that it is not rendered), so no citizen
> currently sees the string — but `packages/ui` is inside this scan's scope and Doc 03 clause 8's
> trigger is "before any screen rendering the `anon` pill in a non-vote context ships to
> production". **Until Doc 03 rules:** the exception covers those two `anon` strings in that one
> component and **no others**; no new string may claim it; and rule 2 above (the claims test)
> applies to every string that is not inside the exception.

**S6 — Call-site census.** `verifyEligibility()` MUST be invoked at exactly the three `FR-123`
````

---

### OP 8 — docs/04-test-strategy-master-plan.md — §1.3: re-pin the no-story annotation to Doc 05 v2.5.0 (Approved) — cycle-2 ISS-C2-02

FIND:
````
tested only to the level of "the flag is off and the capability is unreachable". _(v1.1.0: this
no-story list is derived from Doc 05 **v1.0.0** and Doc 05 is now at **v2.3.0 (In Review)**. The
list MUST be re-derived by the product owner at the next backlog version — **OPEN-21**. `FR-050`'s
promotion to Must is recorded here so it is not carried forward as a Should by inheritance.)_
````
REPLACE WITH:
````
tested only to the level of "the flag is off and the capability is unreachable". _(v1.1.0: this
no-story list is derived from Doc 05 **v1.0.0** and Doc 05 is now at **v2.5.0 (Approved)**. The
list MUST be re-derived by the product owner at the next backlog version — **OPEN-21**. `FR-050`'s
promotion to Must is recorded here so it is not carried forward as a Should by inheritance.)_
_(v1.5.0, cycle-2 **ISS-C2-02 DISCHARGED**: the pin above read "**v2.3.0 (In Review)**" — the third
and last location of the cycle-1 ISS-05 defect, and the one carrying the live re-derivation
instruction `OPEN-21` cross-references. Doc 05 is Approved at v2.5.0, five minor versions ahead of
the v1.0.0 the list was derived from, which makes the finding **more** live, not less. `OPEN-21`'s
own body was already re-pinned at v1.4.0 and is unchanged.)_
````

---

### OP 9 — docs/04-test-strategy-master-plan.md — §1.4 References: re-pin Docs 02/03/05/06/07 — cycle-2 ISS-C2-01 (second named location)

FIND:
````
Doc 01 PR-FAQ · Doc 02 SRS **v2.16.3** (incl. §16 delivery phasing and §16.4 honesty register) ·
Doc 03 SDD **v2.11.2** (§9 repo design, §10.13 v1/v2 split, §11 failure-mode analysis which seeds
`TS-EDGE`, §14 test hooks) · Doc 05 Backlog **v2.3.0** (§8 non-functional backlog items
`NF-01`…`NF-08`) · Doc 06 Coding & UT **v2.4.3** (unit-test standard, `UT-####`, §2.1
`IS_INSECURE_MOCK` discipline) · Doc 07 Test Cases **v2.4.4** (`TC-####`) · Doc 08 RTM ·
**ADR-001…ADR-025** · CLAUDE.md · ISO/IEC/IEEE 29119 · IEEE 829 · WCAG 2.2 Level AA · RFC 2119.
````
REPLACE WITH:
````
Doc 01 PR-FAQ · Doc 02 SRS **v2.17.0** (incl. §16 delivery phasing and §16.4 honesty register, and
§4.45 FR-131 clause (e)) ·
Doc 03 SDD **v2.13.0** (§9 repo design, §10.13 v1/v2 split, §11 failure-mode analysis which seeds
`TS-EDGE`, §14 test hooks) · Doc 05 Backlog **v2.5.0** (§8 non-functional backlog items
`NF-01`…`NF-08`) · Doc 06 Coding & UT **v2.5.1 Approved / v2.6.0 in flight** (unit-test standard,
`UT-####`, §2.1
`IS_INSECURE_MOCK` discipline) · Doc 07 Test Cases **v2.6.0** (`TC-####`) · Doc 08 RTM **v2.9.0** ·
**ADR-001…ADR-025** · CLAUDE.md · ISO/IEC/IEEE 29119 · IEEE 829 · WCAG 2.2 Level AA · RFC 2119.

_(v1.5.0 — cycle-2 **ISS-C2-01 DISCHARGED** at the second of its two named locations, and the
stale neighbours swept with it rather than left to age. The superseded pins read: Doc 02 SRS
**v2.16.3** · Doc 03 SDD **v2.11.2** · Doc 05 Backlog **v2.3.0** · Doc 06 Coding & UT **v2.4.3** ·
Doc 07 Test Cases **v2.4.4**. Each was accurate when written; none changed a conclusion drawn from
it, which is why the class was graded Low twice. Doc 02 v2.17.0 and Doc 06 v2.6.0 are **In Review**
at this date, Doc 03 v2.13.0 / Doc 05 v2.5.0 / Doc 07 v2.6.0 / Doc 08 v2.9.0 are **Approved**.)_
````

---

### OP 10 — docs/04-test-strategy-master-plan.md — §13: add OPEN-27 to the gate-classification bullets

FIND:
````
- **Not gate-blocking, but owed:** `OPEN-07`, `OPEN-08`, `OPEN-09`, `OPEN-10`, `OPEN-12` … `OPEN-15`,
  `OPEN-22`.
- **Closed at v1.1.0:** `OPEN-16`, `OPEN-17`.
````
REPLACE WITH:
````
- **Not gate-blocking, but owed:** `OPEN-07`, `OPEN-08`, `OPEN-09`, `OPEN-10`, `OPEN-12` … `OPEN-15`,
  `OPEN-22`, **`OPEN-27`** _(added v1.5.0 — a design-authority copy question raised by FR-131
  clause (e); it is **not** a shipped-copy defect today, which is why it is owed rather than
  blocking. It becomes a **v1 Gate-2 blocker** the moment any screen rendering the `anon` pill in a
  non-vote context is scheduled to ship, per Doc 03 §10.12.3 clause 8's own trigger)_.
- **Closed at v1.1.0:** `OPEN-16`, `OPEN-17`.
````

---

### OP 11 — docs/04-test-strategy-master-plan.md — §13: mint the OPEN-27 row after OPEN-26 (high-water mark was OPEN-26; no ID reused)

FIND:
````
| **OPEN-26** _(new v1.1.0)_ | Two `UT-####` register defects, found while reconciling §14. (a) **Doc 04's own `UT` reservation had failed completely** — it reserved UT-1000–1999 for contracts, UT-2500–2999 for SDK and UT-3000–3499 for ui/web, while Doc 06 v2.4.3 §3 actually uses contracts UT-0100…UT-0612, indexer UT-0500…UT-0525, web UT-0700…UT-0886, ui UT-0750…UT-0758, SDK UT-0760…UT-0848. §14 is re-cut at v1.1.0 to record the **actual** allocation rather than a fiction. (b) **Doc 06 v2.4.3 §3 contains an ID overlap:** its table assigns `UT-0841..0857` to **web** (party-creation web flow) and `UT-0832..0848` to **sdk** (ProposalService) — `UT-0841`…`UT-0848` is claimed by both. CLAUDE.md's ID scheme says IDs are never reused | (a) is fixed here. (b) is Doc 06's to rule on — recorded, not fixed, because Doc 06 is the engineer's document. Until it is ruled on, an RTM row citing a `UT` in that band is ambiguous about which package it refers to | Samuel Oyelaran |
````
REPLACE WITH:
````
| **OPEN-26** _(new v1.1.0)_ | Two `UT-####` register defects, found while reconciling §14. (a) **Doc 04's own `UT` reservation had failed completely** — it reserved UT-1000–1999 for contracts, UT-2500–2999 for SDK and UT-3000–3499 for ui/web, while Doc 06 v2.4.3 §3 actually uses contracts UT-0100…UT-0612, indexer UT-0500…UT-0525, web UT-0700…UT-0886, ui UT-0750…UT-0758, SDK UT-0760…UT-0848. §14 is re-cut at v1.1.0 to record the **actual** allocation rather than a fiction. (b) **Doc 06 v2.4.3 §3 contains an ID overlap:** its table assigns `UT-0841..0857` to **web** (party-creation web flow) and `UT-0832..0848` to **sdk** (ProposalService) — `UT-0841`…`UT-0848` is claimed by both. CLAUDE.md's ID scheme says IDs are never reused | (a) is fixed here. (b) is Doc 06's to rule on — recorded, not fixed, because Doc 06 is the engineer's document. Until it is ruled on, an RTM row citing a `UT` in that band is ambiguous about which package it refers to | Samuel Oyelaran |
| **OPEN-27** _(new v1.5.0)_ | **The `anon`-badge disposition that §0.5 S5's carve-out cites was reasoned against a voting-scoped FR-131, and FR-131 is no longer voting-scoped.** Doc 03 v2.13.0 §10.12.3 rules `STATE_CONFIG.anon.title` ("Anonymous") COMPLIANT in v1 on the basis that the badge renders only for open-tier users who cannot cast a binding vote, so it "is not describing that user's voting behaviour" but names a participation tier. Doc 02 **v2.17.0** FR-131 **clause (e)** (approver, 2026-09-06) extends the duty to **every v1 participation act**, expressly including **joining or belonging to a party** and **endorsing a petition** — two of the three contexts §10.12.3 **clause 8** itself names for the `anon` pill (screens 1.6 and 2.3). §10.12.3 separately **concedes** that the `anon` subtitle "Nothing you do here is linked to you" is **not literally true in v1**, and carries a standing condition that a subtitle variant MUST be considered if an honesty review establishes that a reasonable user does not read it as "publicly linked"; the 2026-09-06 ruling — which litigated exactly this claim class on the landing page — is such a review. **Doc 03's re-open trigger (iii) is worded for an *unconditional* amendment and this one is not, so the disposition has NOT lapsed and this plan does not treat it as lapsed** | **Not a shipped-copy defect today:** `PrivacyStatus` has no authenticated host surface in `apps/web`, so no citizen currently sees the string; `packages/ui` is nevertheless inside S5's scan scope, and Doc 03 clause 8's own trigger is "before any screen rendering the `anon` pill in a non-vote context ships to production" — at which point this becomes a v1 Gate-2 blocker. **This is a copy ruling for the copy authority (Doc 03), not for this plan**: ruling it in the test plan would repeat the v2.7.0 mistake of a copy ruling living somewhere other than the copy authority. Re-examine at the next Doc 03 increment; until then S5's carve-out stands, covering exactly the two `anon` strings and extended to nothing | Ravi Deshmukh (Doc 03 ruling); Nadia Hassan (the S5 scan once ruled) |
````

---

### OP 12 — docs/04-test-strategy-master-plan.md — §22 Approvals: bring the architect row current at v1.5.0, folding the v1.4.0 description into the row history

FIND:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-06 | **v1.4.0, Status: In Review.** Rework cycle 1 against the v1.3.0 technical review (FAIL 89%; 0C/0H/2M/6L): §0.5 S4's clause range corrected to (a)–(d) and annotated with the PO routing; the S4/S5 correctness over-claim withdrawn from the Status block and annotated in the v1.3.0 changelog entry; all six Lows taken rather than carried. _(Row history: **v1.3.0** was submitted 2026-09-06 — the FR-131 cascade that corrected `A-02.6` and `OPEN-01` off the retired "votes are anonymous but not receipt-free" framing and closed `ISS-10`; cycle 1 verified both corrections and they are not re-opened. **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which v1.3.0 closed; keeping this row current at every version is the standing discipline that Low bought. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
````
REPLACE WITH:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-06 | **v1.5.0, Status: In Review.** Not a rework cycle — a **requirement cascade**: FR-131 **clause (e)** was ruled in by the approver on 2026-09-06 and applied as Doc 02 v2.17.0, so the question §0.5 S4 routed to the product-owner at v1.4.0 is answered and S4/S5 are re-cut to the amended closing sentence. The notice-clause range stays **(a)–(d)**; clause (e) is scanned at S5 and guarded by **UT-0889 (Doc 06 v2.6.0)** and **UT-0869**, not by a fifth notice assertion. The S5 `anon`-badge carve-out is annotated and the copy question it raises is routed to Doc 03 as **OPEN-27** rather than ruled here. **All three v1.4.0 Lows discharged** (ISS-C2-01, ISS-C2-02, ISS-C2-03) with two further stale pins swept; none carried. `TC` re-cut owed from the tester at Doc 07 v2.7.0 / Doc 08 v2.10.0. _(Row history: **v1.4.0** was submitted 2026-09-06 and Approved at PASS 96% (0C/0H/0M/3L) — rework cycle 1 against the v1.3.0 technical review (FAIL 89%; 0C/0H/2M/6L): §0.5 S4's clause range corrected to (a)–(d) and annotated with the PO routing; the S4/S5 correctness over-claim withdrawn from the Status block and annotated in the v1.3.0 changelog entry; all six Lows taken rather than carried. **v1.3.0** was submitted 2026-09-06 — the FR-131 cascade that corrected `A-02.6` and `OPEN-01` off the retired "votes are anonymous but not receipt-free" framing and closed `ISS-10`; cycle 1 verified both corrections and they are not re-opened. **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which v1.3.0 closed; keeping this row current at every version is the standing discipline that Low bought. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
````

---

### OP 13 — docs/04-test-strategy-master-plan.md — §11.2 tooling row: record that the S5 denylist is a claims test, not only a word list

FIND:
````
| **_(v1.1.0)_ Second denylist over user-facing strings (build-failing)** | §0.5 S5 — no v1 string may claim anonymity, unlinkability, receipt-freeness, coercion resistance, one-person-one-vote or zero-knowledge, except inside a DES-098 notice denying it | Nadia Hassan | DES-085, DES-098 |
````
REPLACE WITH:
````
| **_(v1.1.0)_ Second denylist over user-facing strings (build-failing)** | §0.5 S5 — no v1 string may claim anonymity, unlinkability, receipt-freeness, coercion resistance, one-person-one-vote or zero-knowledge, except inside a DES-098 notice denying it. _(v1.5.0: **widened by FR-131 clause (e)** — the scan now covers **any v1 participation act**, not only voting, applies **in every language**, and is a **claims** test as well as a word list: a string fails if a Grade-8 reader would take it to mean Trumocracy cannot link them to the act, even with none of the banned words present. Two carve-outs only: clause (a)'s mandated negated forms, and the named `anon`-badge exception. See §0.5 S5.)_ | Nadia Hassan | DES-085, DES-098, **FR-131(e)** |
````

---

### OP 14 — docs/04-test-strategy-master-plan.md — Downstream: re-pin Doc 06 and record UT-0889 / UT-0869 and the owed Doc 07/08 re-cut

FIND:
````
Suites defined here become cases in **Doc 07 (Test Cases)** and are mapped in **Doc 08 (RTM)**. The
unit-test standard and the physical repository structure were built at the start of Coding in
**Doc 06** (Approved **v2.5.1**; re-pinned at v1.3.0 from the stale v2.4.3 pin), before feature code
— `packages/contracts`'s test workspace is now real and **`OPEN-17` is closed**. Doc 06 v2.5.0/v2.5.1
carry the FR-131 code drop and the regression guards this plan cites at `A-02.6`: **UT-0887**
(rendered banner, negation-aware), **UT-0888** (flag description), **UT-0759** (`ver` title,
four paths). `TC` mints for these remain owed from Doc 07.
````
REPLACE WITH:
````
Suites defined here become cases in **Doc 07 (Test Cases)** and are mapped in **Doc 08 (RTM)**. The
unit-test standard and the physical repository structure were built at the start of Coding in
**Doc 06** (Approved **v2.5.1**; re-pinned at v1.3.0 from the stale v2.4.3 pin), before feature code
— `packages/contracts`'s test workspace is now real and **`OPEN-17` is closed**. Doc 06 v2.5.0/v2.5.1
carry the FR-131 code drop and the regression guards this plan cites at `A-02.6`: **UT-0887**
(rendered banner, negation-aware), **UT-0888** (flag description), **UT-0759** (`ver` title,
four paths). `TC` mints for these remain owed from Doc 07.

_(v1.5.0.)_ **FR-131 clause (e) adds one guard and one owed re-cut, and nothing else.** The guard is
**UT-0889**, registered in **Doc 06 v2.6.0** and asserting the landing copy in
`apps/web/test/safety-surfaces.test.tsx` in the **UT-0869** pattern (en source strings, the rendered
page, and the Arabic mirror). It is cited here as **owed-and-in-progress, not green** — the engineer
mints it in the same 2026-09-06 session, and this plan upgrades no status on a test it has not seen
pass. The owed re-cut is the tester's: clause-(e) rows at **Doc 07 v2.7.0** and **Doc 08 v2.10.0**,
under the existing story **US-0134** (FR-131 · DES-098) — the 2026-09-06 decision record mints no
new `US`, and this plan mints no `TC`. FR-131's Doc 08 Must row stays **OPEN** until that re-cut
closes it.
````

---

## Post-application checklist (for the applier and the neutral reviewer)

1. `Version:` reads **1.5.0**; `Status:` opens **In Review — v1.5.0 (2026-09-06)**;
   `Last updated:` reads **2026-09-06**; the `Changelog:` top entry is **v1.5.0** and the v1.4.0
   entry survives intact below it, beginning "2026-09-06 v1.4.0 — **Rework cycle 1 against".
2. The v1.4.0 `Status` narrative survives in full, introduced by
   `_(v1.4.0 record, retained verbatim per annotate-don't-delete …)_`.
3. `grep "(a)–(e)"` returns only (i) the retained v1.4.0 S4 note and the changelog entries that
   quote what S4 *used to* say, and (ii) **no** live criterion asserting a five-clause **notice**.
   `grep "(a)–(d)"` still returns S4's criterion — that is correct and deliberate.
4. `grep "v2.4.4"` returns **no** `Source:` or `§1.4` pin; the remaining hits are the dated
   provenance statements at §0.2/§0.4/§0.6, `OPEN-20` and the Downstream carry-back, which are
   records of what Doc 07 said when read, not live pins.
5. Exactly one new ID exists: **OPEN-27**. No other `OPEN-##`, `TS-`, `TC-`, `UT-` or `ISS-`
   identifier is added, removed, renumbered or reused.
6. No test status, suite count or coverage bucket (§0.6's 4 / 2 / 7; §14's reservations) has moved.
7. No file other than `docs/04-test-strategy-master-plan.md` is touched by this spec.
