# Anchored FIND/REPLACE spec — Doc 03 SDD v2.14.0 → **v2.14.1** (cycle 2 of 5)

```
Author:        architect (Ravi Deshmukh) — owning role for Docs 03 and 04
Date:          2026-09-20
Target file:   docs/03-architecture-design-sdd.md
Base on disk:  v2.14.0, Status: In Review  (the PM applied the v2.14.0 spec and nothing else)
Produces:      v2.14.1, Status: In Review, rework cycle 2 of 5
Answers:       artifacts/reviews/03-architecture-design-sdd-v2.14.0-technical-cycle1.md
               (FAIL 93%; 0C / 0H / 2 Medium / 3 Low; neutral reviewer: tester, Ji-woo Park)
Bump:          PATCH. No normative content changes. Clause 10, the three findings, the rejected
               alternatives, the five-condition render trigger, the `OPEN-27` closure and the
               `OPEN-28`/`OPEN-29`/`OPEN-30` mints are carried into v2.14.1 UNCHANGED.
Ordering:      APPLY THIS SPEC BEFORE artifacts/architect-2026-09-20T1700-doc04-c2-spec.md.
               Doc 03's ISS-02 is the upstream half of Doc 04's ISS-01: the instruction is
               corrected here, the site is swept there.
Method:        Annotation only. Nothing is deleted; every superseded statement is retained
               verbatim and annotated in place. 12 operations.
```

**Applier notes.** Fences are 4 backticks. Every FIND begins at a line start and ends at the end of
a block-level unit, and matches **exactly once**. Lines 1932, 1975, 1979, 2019, 2039, 2081, 3155 are
single-line block units and are reproduced whole. No operation overlaps another.

---

### OP 1 — Version bump to v2.14.1

FIND:
````
Version:       2.14.0
````
REPLACE WITH:
````
Version:       2.14.1
````

---

### OP 2 — Status block: v2.14.1 header, the two Mediums, the three Lows, nothing carried

FIND:
````
Status:        In Review — v2.14.0 (2026-09-20). **Debt-closure increment: `OPEN-27` — the
               `anon` badge copy re-examined against FR-131 clause (e), and ruled.** Neutral
               reviewer assigned by the project-manager **before dispatch**: **tester**
               (Ji-woo Park, new instance), per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md — which records the
               grounds (owns neither Doc 03 nor Doc 04; holds Bash and can verify the
               `PrivacyStatus.tsx` claims against the code at HEAD rather than taking them on
               assertion) and the exclusions (architect — owner; engineer — built the component
               under ruling). Cycle 1 of a fresh loop; the v2.13.0 lineage closed PASS at 97%.
````
REPLACE WITH:
````
Status:        In Review — v2.14.1 (2026-09-20). **Rework cycle 2 of 5** against
               artifacts/reviews/03-architecture-design-sdd-v2.14.0-technical-cycle1.md
               (**FAIL 93%; 0 Critical / 0 High / 2 Medium / 3 Low**). Neutral reviewer:
               **tester** (Ji-woo Park, new instance), assigned by the project-manager **before
               dispatch** per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md — the same reviewer
               and the same grounds as cycle 1, recorded again here rather than by reference.
               **PATCH bump, and the claim is exact rather than conventional: no normative
               content changes in this version.** **Clause 10**, the **three findings**, the
               **rejected alternatives**, the **five-condition render trigger**, the `OPEN-27`
               closure and the `OPEN-28` / `OPEN-29` / `OPEN-30` mints are carried into v2.14.1
               **unchanged** — the reviewer ruled each of them sound on independently verified
               facts and wrote *"Nothing in the ruling itself needs reworking."* **No `DES`,
               `ADR`, `US`, `TC`, `UT`, `SCR` or `RISK` id is minted, renumbered or reused; no
               test status is upgraded; no product code is written or edited.** Every operation
               in this version is an **annotation** or an **enumeration correction**.
               **Both Mediums were sweep-completeness defects, not reasoning defects**, and both
               are the same defect this document names three times in its own words: **a note
               that guards one row of a three-row table does not guard the table.**
               **ISS-01 (Medium) FIXED — the two v2.7.1 paragraphs the v2.14.0 banner did not
               reach.** §10.12.3's supersession banner is scoped to "both `anon` decisions
               **below**". The **"Interpretive basis (explicit — stated here, not assumed)"**
               paragraph and the **"FR-124(b) aggregate-only policy"** paragraph sit **above**
               it, so the banner never reached them: they were left **live and unannotated**, and
               the second still closed *"This is the operative basis on which 'linked to you' is
               truthful in the public sense."* **That gloss is precisely what FINDING 1 says
               clause (e) displaces** — clause (e) is not a publication rule, and it expressly
               makes the ordinary grade-8 reader's reading govern over the author's gloss. A
               reader working top-down through the `anon` analysis met that sentence as **current**
               before reaching any supersession marker. **Both paragraphs are now bracketed by
               v2.14.1 annotations — a supersession banner immediately ABOVE them and a note
               immediately BELOW them — and nothing is deleted.** The annotations separate the
               two halves the reader could not previously tell apart: **SUPERSEDED** is the
               *gloss* (reading "linked" as "***publicly*** linked", and with it the closing
               sentence quoted above); **SURVIVING, true and load-bearing** is the **FR-124(b)
               fact itself** — publication is aggregate-only — which is exactly what clause
               10(b)'s `'browse'` and `'join'` strings rest on. Both sites are added to the change
               entry's "Sites changed" list, which had omitted them.
               **ISS-02 (Medium) FIXED — the Downstream instruction enumerated FIVE carve-out
               sites when there are SIX.** The missed site is **Doc 04 §11.2's tooling-register
               row** for the build-failing S5 denylist control — a **known** S5 site, last edited
               at Doc 04 **v1.5.0 for this exact scan**, and the row that *describes the control
               the withdrawal changes*. The enumeration is **corrected to six and the instruction
               re-issued**, in a correction block printed immediately after the retained
               Downstream paragraph. The under-count is not cosmetic: it is the mechanism by which
               that paragraph's own warning — *"a withdrawn carve-out surviving in one of five
               sites is a build-failing scan quietly not failing"* — came true. It did. Doc 04
               v1.7.0 swept the five named sites and left the sixth stale, and its cycle-1 review
               raised that as its own **ISS-01 (Medium)**. **The stale row is Doc 04's to fix** —
               it is swept at Doc 04 **v1.7.1**, applied after this spec — **but the instruction
               that missed it was this document's**, and is fixed here first.
               **All three Lows TAKEN on this touch. No Low is carried forward.** **ISS-03** —
               §10.12.3's DES-094 register row still read "`packages/ui/PrivacyStatus` (not yet
               created — Coding phase)" for a component this entire ruling is about; annotated in
               place to record that `packages/ui/src/PrivacyStatus.tsx` is **built**, is **mounted
               on no shipped surface**, and is governed for `anon` copy by **clause 10** and for
               `ver` copy by clauses 7 and 9. The superseded cell text is retained. **ISS-04** —
               the three **Doc 14 §2.2** citations (FINDING 2, clause 10(b)'s `'endorse'` string,
               and §11's endorsement row) cited a **future-tense** source as a present fact; a
               reconciling clause is added at §10.12.3 and a matching one at §11. **The conclusion
               is unaffected and the correction says so:** FINDING 2's screen-2.3 limb rests on
               design facts that are true **now** (endorsement is public **by design**;
               `private_endorsement` is a Phase-4 charter flag OFF in every v1 deployment), and
               clause 10(b)'s present-tense string can render only on a **shipped** screen 2.3.
               **ISS-05** — render-trigger condition (ii), read with clause 10(b)'s enumerated
               set, converts clause 8's three contexts into an **exhaustive `anon`-render bar**,
               while the leak-check table lists the privacy pill on **thirteen** screens; a
               reconciling note is added immediately above that table. It is a reconciliation, not
               a change: clause 8 has enumerated the same three contexts since v2.7.1.
               **Pins re-verified at this touch, and two have moved since v2.14.0 was submitted.**
               **Doc 07 is now v2.9.0 (Approved)**; **Doc 08 is now v2.12.1 (In Review**, last
               Approved v2.11.3**)** and is mid-rework in the tester's hands, so it is **not read
               as settled** and nothing here comments on its content. Doc 02 **v2.17.3
               (Approved)** — still the text this version rules against — Doc 05 v2.5.0, Doc 06
               v2.8.1 and Doc 09 v1.9.0 are unchanged. **No statement in this document depends on
               the content of Doc 07 or Doc 08**, which is why this is a pin sweep and not a
               cascade; the v2.14.0 `Source:` text is retained as the record of what was true
               when written and annotated rather than rewritten. Doc 04 is at **v1.7.1 (In
               Review)**, the matching half of this rework.
               _(v2.14.0 record, retained verbatim per annotate-don't-delete — its two Mediums
               and three Lows are discharged above:)_
               In Review — v2.14.0 (2026-09-20). **Debt-closure increment: `OPEN-27` — the
               `anon` badge copy re-examined against FR-131 clause (e), and ruled.** Neutral
               reviewer assigned by the project-manager **before dispatch**: **tester**
               (Ji-woo Park, new instance), per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md — which records the
               grounds (owns neither Doc 03 nor Doc 04; holds Bash and can verify the
               `PrivacyStatus.tsx` claims against the code at HEAD rather than taking them on
               assertion) and the exclusions (architect — owner; engineer — built the component
               under ruling). Cycle 1 of a fresh loop; the v2.13.0 lineage closed PASS at 97%.
````

---

### OP 3 — `Source:` block: pin sweep annotation (Doc 07 → v2.9.0 Approved; Doc 08 → v2.12.1 In Review)

FIND:
````
Last updated:  2026-09-20
````
REPLACE WITH:
````
               _(v2.14.1 — **the pins above are re-verified, and two have moved since v2.14.0 was
               submitted. The v2.14.0 text is retained verbatim as the record of what was true
               when it was written; it is annotated, not rewritten.** **Doc 07 is now v2.9.0
               (Approved)** — it PASSed its cycle-1 technical review at 97% (0C/0H/0M/4L;
               reviewer-qa) on 2026-09-20 and minted **TC-3577..TC-3591** into `TS-ADV-01…16`.
               **Doc 08 is now v2.12.1 (In Review)**, last **Approved v2.11.3**; it is mid-rework
               in the tester's hands, and this document neither reads it as settled nor comments
               on its content. **No statement in this version depends on the content of either
               document** — the v2.14.0 pins were cited as "Approved at HEAD and in flight" for
               exactly this reason — so this is a pin sweep, not a cascade, and it changes no
               conclusion. Doc 02 **v2.17.3 (Approved)** is unchanged and remains the text this
               section rules against; Doc 05 v2.5.0, Doc 06 v2.8.1 and Doc 09 v1.9.0 are
               unchanged. **MTP Doc 04 is at v1.7.1 (In Review)** — the matching half of this
               rework, which uses the Doc 07 v2.9.0 approval recorded here to discharge its
               `OPEN-30` §14 register reconciliation in the same session.)_
Last updated:  2026-09-20
````

---

### OP 4 — `Change:` block: new v2.14.1 entry above the retained v2.14.0 entry

FIND:
````
Change:        v2.14.0 (2026-09-20) — **`OPEN-27` closed: the DES-094 `anon` badge copy is
````
REPLACE WITH:
````
Change:        v2.14.1 (2026-09-20) — **Rework cycle 2 of 5 against
               artifacts/reviews/03-architecture-design-sdd-v2.14.0-technical-cycle1.md**
               (FAIL 93%; 0C / 0H / 2 Medium / 3 Low; neutral reviewer: **tester**, Ji-woo Park,
               PM-assigned). **PATCH bump: annotation and enumeration corrections only, with no
               normative meaning change.** This entry describes only what changed.
               **THE RULING IS NOT REWORKED AND IS NOT REOPENED.** Clause 10, FINDING 1,
               FINDING 2, FINDING 3, the five rejected alternatives and three rejected titles,
               the five-condition render trigger, the `OPEN-27` closure and the `OPEN-28` /
               `OPEN-29` / `OPEN-30` mints are carried forward **unchanged**. The reviewer
               verified each against HEAD — the strings at `PrivacyStatus.tsx:251-252`, the
               `ver`-scoped banned-word regex, the six non-render comments across five files,
               Doc 14 §2.2, the `private_endorsement` flag ledger, Doc 02 v2.17.3 §4.45 and §8
               Scenarios 8 and 9 — and affirmed the lapse-vs-requirement-change distinction, the
               endorse-context finding, the no-new-ADR decision and `OPEN-29` named-not-ruled.
               **Both Mediums are sweep-completeness defects: sites the correction did not
               reach.**
               **ISS-01 (Medium) FIXED — §10.12.3's v2.7.1 "Interpretive basis" and "FR-124(b)
               aggregate-only policy" paragraphs.** They sit **above** the v2.14.0 supersession
               banner, which is scoped to the decisions "**below**", so the banner did not reach
               them; they were live and unannotated, and the second still closed "This is the
               operative basis on which 'linked to you' is truthful in the public sense" — the
               gloss FINDING 1 holds that clause (e) displaces. **A supersession banner is added
               immediately above the pair and a note immediately below it**, naming the half that
               is superseded (the gloss) and the half that **survives and is load-bearing** (the
               FR-124(b) aggregate-only publication fact, on which clause 10(b)'s `'browse'` and
               `'join'` strings rest). Both paragraphs are **retained verbatim**. Both sites are
               added to the v2.14.0 entry's "Sites changed" list by annotation below it.
               **ISS-02 (Medium) FIXED — the Downstream paragraph instructed Doc 04 "at every
               site that carries the carve-out" and enumerated five; there are six.** The sixth
               is **Doc 04 §11.2's tooling-register row** for the build-failing S5 denylist
               control. The enumeration is corrected to six and the instruction re-issued in a
               correction block printed immediately after the retained paragraph, with the six
               sites listed so Doc 04's sweep is mechanical. **The site itself is Doc 04's and is
               swept at Doc 04 v1.7.1**; the instruction was this document's and is fixed here
               first, in that order, deliberately.
               **Three Lows taken, none carried.** **ISS-03** — the DES-094 register row's
               "not yet created — Coding phase" implementation cell annotated to the built
               reality. **ISS-04** — the three Doc 14 §2.2 citations reconciled on tense, at
               §10.12.3 and at §11. **ISS-05** — the render bar reconciled with the thirteen-screen
               leak-check table, immediately above that table.
               **Pins swept: Doc 07 → v2.9.0 (Approved), Doc 08 → v2.12.1 (In Review)**; see
               `Source:`. No statement here depends on the content of either.
               v2.14.0 (2026-09-20) — **`OPEN-27` closed: the DES-094 `anon` badge copy is
````

---

### OP 5 — ISS-01 (a): supersession banner immediately ABOVE the two v2.7.1 paragraphs

FIND:
````
**Copy:** "Nothing you do here is linked to you."
````
REPLACE WITH:
````
**Copy:** "Nothing you do here is linked to you."

> **SUPERSEDED IN PART — READ THIS BEFORE THE TWO PARAGRAPHS BELOW (v2.14.1, 2026-09-20; cycle-1 ISS-01, Medium).** The two paragraphs immediately following — **"Interpretive basis (explicit — stated here, not assumed)"** and **"FR-124(b) aggregate-only policy"** — are the **v2.7.1 interpretive basis for the `anon` copy**. That basis is **SUPERSEDED for Definition-A (v1)** by the v2.14.0 ruling recorded further down this section and by **clause 10** of the normative binding list. They are **retained verbatim** per annotate-don't-delete, as the record of the reasoning clause (e) displaced, and they **MUST NOT** be relied on as the basis on which either `anon` string is truthful.
>
> **Which half is superseded and which half survives — stated plainly, because the two were previously indistinguishable to a reader working top-down.** **SUPERSEDED: the gloss.** The reading of "linked" as "***publicly*** linked", and with it the second paragraph's closing sentence, *"This is the operative basis on which 'linked to you' is truthful in the public sense."* FR-131 **clause (e)** is **not a publication rule** — it is a rule about what **Trumocracy itself** can do — and it expressly makes the **ordinary grade-8 reader's** reading govern over the **author's gloss**. That is **FINDING 1** below, and it is why the subtitle FAILS. **SURVIVES, unchanged, true, and load-bearing: the FR-124(b) fact itself.** No participant action is ever published linked to any individual identity; publication is **aggregate-only**. That fact is not disturbed by anything in v2.14.0, and it is exactly what **clause 10(b)**'s `'browse'` and `'join'` strings rest on — *"What you do here is not made public. Our own records can link it to your account."* / *"Your membership is not made public. Our own records can link it to your account."* What clause (e) forbids is **not** stating that fact; it is stating it as a **universal negative** from which the reader concludes that Trumocracy itself cannot link them to the act. **The third context is the reason no single string works:** on **endorsing (2.3)** the aggregate-only framing does not apply at all, because endorsement is **public by design** (Doc 14 §2.2) — which is FINDING 3, and why clause 10(b)'s `'endorse'` string makes **no** non-publication claim. *(The cycle-1 report offered the formulation "endorsement is published pseudonymously, not identity-linked"; this section states the surviving half as the aggregate-only publication fact plus clause (e)'s public-by-design rule instead, because **no design record in this document establishes a pseudonymous-publication property for endorsement**, and the ruling must not rest on a property it has not specified. The distinction the report asked for — which half survives — is made, on sourced grounds.)*
>
> **Why this banner sits here, above, and not only below.** The v2.14.0 supersession banner further down this section is scoped to "both `anon` decisions **below**", so it never reached these two paragraphs. A reader working top-down through the `anon` analysis therefore met the superseded gloss **as current** before meeting any supersession marker. That is this document family's signature defect in its own house style — **a note that guards one row of a three-row table does not guard the table** — appearing this time in the very version that names the defect three times. It is recorded that way rather than tidied away.
````

---

### OP 6 — ISS-01 (b): annotation immediately BELOW the "FR-124(b) aggregate-only policy" paragraph

FIND:
````
**FR-124(b) aggregate-only policy.** No participant action is ever published linked to any individual identity. No published record accessible to anyone other than the operator links any action to the `anon` user's account or phone number. This is the operative basis on which "linked to you" is truthful in the public sense — the claim holds for every published record. The operator-accessible linkage is real but is a platform-data-practices concern, not a published-record concern, and is accepted as a disclosed v1 limitation.
````
REPLACE WITH:
````
**FR-124(b) aggregate-only policy.** No participant action is ever published linked to any individual identity. No published record accessible to anyone other than the operator links any action to the `anon` user's account or phone number. This is the operative basis on which "linked to you" is truthful in the public sense — the claim holds for every published record. The operator-accessible linkage is real but is a platform-data-practices concern, not a published-record concern, and is accepted as a disclosed v1 limitation.

> **_(v2.14.1 — annotated in place at the paragraph, per cycle-1 ISS-01 (Medium). The paragraph above is retained verbatim; nothing in it is deleted.)_** **Its closing sentence is SUPERSEDED for Definition-A (v1) and MUST NOT be read as current:** *"This is the operative basis on which 'linked to you' is truthful in the public sense."* **FINDING 1 below is the ruling in force.** FR-131 clause (e) is not a publication rule and makes the **ordinary reader's** reading govern over the **author's gloss**, so *"truthful in the public sense"* is no longer the test the `anon` subtitle has to pass — and on that test the subtitle **FAILS**. **What survives in this paragraph is its first two sentences**, unchanged and load-bearing: publication is **aggregate-only**, no published record links any action to the `anon` holder, and the operator-side linkage is real and disclosed. Those facts are **true**, are not reopened by v2.14.0, and are what **clause 10(b)**'s `'browse'` and `'join'` strings say in the reader's own words — stating the not-published half **and** the operator-records half **in the same string**, which is clause (e)'s approved satisfying pattern. **The same is true of the paragraph above it** ("Interpretive basis"): its **facts** about `phone_hash`, `subject_id_hash`, the KMS pepper and the TRAI chain (Doc 02 H-16, H-18; §10.13.7 T-01, T-02) are **true and still relied on** — FINDING 1 cites them — while its **conclusion**, that these facts leave "linked to you" truthful because the linkage is not *published*, is the gloss clause (e) displaces. **Facts survive; the gloss does not.**
````

---

### OP 7 — ISS-01 (c): add both sites to the v2.14.0 entry's "Sites changed" list

FIND:
````
               FR-131(e) / DES-094 failure-mode rows; **§15**'s FR-131 → DES-098 row footnoted.
````
REPLACE WITH:
````
               FR-131(e) / DES-094 failure-mode rows; **§15**'s FR-131 → DES-098 row footnoted.
               _(v2.14.1, cycle-1 **ISS-01** (Medium) — **two sites were missing from the list
               above, and they are added here rather than by editing a list this document has
               already published.** The omitted sites are §10.12.3's **v2.7.1 "Interpretive
               basis" paragraph** and its **"FR-124(b) aggregate-only policy" paragraph**. Both
               sit **above** the v2.14.0 supersession banner, which is scoped to the `anon`
               decisions "below", so the banner did not reach them: they were left live and
               unannotated, and the second still closed "This is the operative basis on which
               'linked to you' is truthful in the public sense" — the author's gloss that
               FINDING 1 holds clause (e) displaces. **Both are now bracketed by v2.14.1
               annotations, above and below, separating the superseded gloss from the surviving
               FR-124(b) publication fact.** A **third** correction belongs to the same sweep and
               is recorded with it so the three are read together: the **Downstream** paragraph's
               enumeration of the Doc 04 sites carrying the withdrawn carve-out said **five**, and
               there are **six** — the sixth being Doc 04 **§11.2**'s tooling-register row. The
               corrected enumeration is printed immediately after that paragraph. **A list that
               claims to be "all of them" and is not is the defect this entry's own heading
               warns against**, and it is recorded here rather than silently re-cut.)_
````

---

### OP 8 — ISS-02: correct the Downstream enumeration from five sites to six, and re-issue the instruction

FIND:
````
_(v2.13.0 Verdict — SUPERSEDED at v2.14.0, retained for the trail:)_ **Verdict (revised — v2.13.0).** Copy is compliant under the stated interpretive basis, cell by cell: the `anon` **subtitle** is compliant under the interpretive basis stated above together with the clause-8 disclosure obligation, and the `anon` **title** is compliant with FR-131 on the basis and re-open triggers stated immediately above. Non-vote `anon` context disclosure gap addressed normatively via clause 8. No v1 subtitle variant required, and no v1 title variant required.
````
REPLACE WITH:
````
**ENUMERATION CORRECTED — v2.14.1, 2026-09-20 (cycle-1 ISS-02, Medium). There are SIX sites, not five. The instruction above is re-issued against all six.** The Downstream paragraph immediately above is **retained verbatim and its conclusion is unchanged**: the carve-out is **WITHDRAWN**, not narrowed, and Doc 04 is instructed **at every site that carries it**. What was wrong is the **enumeration**. In a paragraph whose own next clause warns that *"a withdrawn carve-out surviving in one of five sites is a **build-failing** scan quietly not failing"*, an under-count is not cosmetic — it is the mechanism by which that warning comes true. **It did come true:** Doc 04 v1.7.0 swept the five named sites and left the sixth stale, and Doc 04's cycle-1 review raised that stale row as its own **ISS-01 (Medium)**. Seven of the eight sites Doc 04 named were clean; the eighth was never named here.

**The six sites, listed so Doc 04's sweep is mechanical rather than interpretive:**

1. **Doc 04 §0.5 S5's named `anon`-badge exception** — the carve-out itself. *(Swept at Doc 04 v1.7.0: WITHDRAWN, the v1.6.0 text retained verbatim beneath a READ-THIS-FIRST banner.)*
2. **Doc 04 §0.5 S5 rule 4's count** — "two carve-outs, and only two" → **"ONE carve-out, and only one"**. *(Swept at v1.7.0.)*
3. **Doc 04 §0.5 S4's scope-before-count sentence** — the sentence pointing at S5's *second* exception, there being no longer a second; S4's own count of one within S4's scope is unchanged. *(Swept at v1.7.0.)*
4. **Doc 04 §1.4's status roll-call.** *(Swept at v1.7.0.)*
5. **Doc 04 §13's `OPEN-27` row**, together with §13's gate-blocking bullets, which move with it. *(Swept at v1.7.0.)*
6. **Doc 04 §11.2's tooling-register row** — *"**_(v1.1.0)_ Second denylist over user-facing strings (build-failing)**"*, owner **Nadia Hassan**, controlling `DES-085`, `DES-098`, **`FR-131(e)`** — whose live v1.5.0 annotation ends *"Two carve-outs only: clause (a)'s mandated negated forms, and the named `anon`-badge exception. See §0.5 S5."* **THIS IS THE SITE THE v2.14.0 ENUMERATION MISSED.** *(Swept at Doc 04 **v1.7.1**.)*

**Why site 6 should have been on the list, stated rather than excused.** It is a **known** S5 site: it was last edited at Doc 04 **v1.5.0 for this very scan**. It is not inside any retained or superseded block — it is a **current row in a current section**. And it is the row that *describes the control the withdrawal changes*, so leaving it stale records as an **exception** exactly what S5 rule 4 now says MUST NOT be recorded as one: **an exception asserts compliance and a failure asserts work.** The two `PrivacyStatus` `anon` strings are a **ruled, remediation-pending failure** tracked as **`OPEN-28`**, never an exception.

**The form of the sweep at site 6 is the same annotate-don't-delete form used at the other five:** the v1.5.0 annotation is retained as the record, and a **v1.7.1** annotation is appended stating that the named `anon`-badge exception is **WITHDRAWN** (this section, v2.14.0, on `OPEN-27`), that the control now carries **one** carve-out — clause (a)'s mandated negated forms — and that the two strings at `packages/ui/src/PrivacyStatus.tsx:251-252` are **in scope and failing**, tracked as `OPEN-28`.

**Two things this correction does NOT change.** It does not change the **ruling** — nothing in FINDING 1, FINDING 2, FINDING 3, clause 10, the rejected alternatives or the render trigger is reopened, and none of them depended on the count. And it does not change **S5's two MUST NOTs** stated in the paragraph above: S5 MUST NOT record the two strings as an exception, and S5 MUST NOT be read as failing a build today — the `packages/ui` string scan it specifies **is not implemented**, and the component is mounted on no shipped surface. **The ordering is load-bearing and is recorded:** the instruction is corrected **here first**, then the site is swept in Doc 04. A lower-tier document should not be left to discover a site its instruction never named.

_(v2.13.0 Verdict — SUPERSEDED at v2.14.0, retained for the trail:)_ **Verdict (revised — v2.13.0).** Copy is compliant under the stated interpretive basis, cell by cell: the `anon` **subtitle** is compliant under the interpretive basis stated above together with the clause-8 disclosure obligation, and the `anon` **title** is compliant with FR-131 on the basis and re-open triggers stated immediately above. Non-vote `anon` context disclosure gap addressed normatively via clause 8. No v1 subtitle variant required, and no v1 title variant required.
````

---

### OP 9 — ISS-03 (Low): the DES-094 register row's implementation cell

FIND:
````
| DES-094 | Privacy-status component | Persistent authenticated-holder self-view element; renders one of three states; normatively binds FR-124 at the component level | FR-082..086, FR-124, FR-131, NFR-001, NFR-002, NFR-024 | `packages/ui/PrivacyStatus` (not yet created — Coding phase) |
````
REPLACE WITH:
````
| DES-094 | Privacy-status component | Persistent authenticated-holder self-view element; renders one of three states; normatively binds FR-124 at the component level | FR-082..086, FR-124, FR-131, NFR-001, NFR-002, NFR-024 | `packages/ui/src/PrivacyStatus.tsx` — **BUILT, and mounted on no shipped surface** *(v2.14.1, cycle-1 ISS-03: this cell read "`packages/ui/PrivacyStatus` (not yet created — Coding phase)" — true when written, false since the enrolment drop, and retained here as the superseded text rather than deleted. The component **exists**: v2.14.0's own facts depend on it existing (`PrivacyStatus.tsx:251-252`; a green test pinning the `anon` title). It is **mounted on no shipped surface** — six explicit non-render comments across five consuming files, re-verified by Doc 09 v1.9.0, with the non-render decision at Doc 06 v2.8.1 §7 item 18. Its **`anon` copy is governed for Definition-A (v1) by clause 10** of the normative binding list below, and may not render until clause 10's five-condition render trigger is satisfied (`OPEN-28`); its **`ver` copy by clauses 7 and 9**. The staleness was pre-existing rather than introduced at v2.14.0, but v2.14.0 is the version that made it consequential, which is why it is corrected here.)* |
````

---

### OP 10 — ISS-04 (Low), §10.12.3 half: the Doc 14 §2.2 tense reconciled at the citation

FIND:
````
**REJECTED ALTERNATIVES** — recorded to the ADR standard, because a copy ruling without them is a preference and not a decision.
````
REPLACE WITH:
````
**_(v2.14.1 — one clause at the citation, per cycle-1 ISS-04 (Low). The tense is corrected; the force is not.)_** **FINDING 2 above and clause 10(b)'s `'endorse'` string both cite Doc 14 §2.2, and §2.2 is written in the FUTURE tense** — *"When backing ships, **it will be** a public act, on purpose"* — while petition **endorsement is unshipped in v1** (a contract skeleton only; Doc 09 v1.9.0), and clause 10(b)'s `'endorse'` string is in the **present** tense. **The tenses meet, and the reconciliation is this:** Doc 14 §2.2 states the **posture for when backing ships**, and clause 10(b)'s `'endorse'` string can render **only on a shipped screen 2.3** — the render trigger's condition **(ii)** permits no mount that cannot supply a context from clause 10(b)'s enumerated set, so the string becomes a present-tense claim at exactly the moment the source's future tense is discharged. **Nothing in FINDING 2 depends on the tense.** Its screen-2.3 limb rests on facts that are **true now**: endorsement is public **by design** — a design fact, not a shipped one — and the fully private alternative, `private_endorsement`, is a **Phase-4 charter flag OFF in every v1 deployment** (Doc 06 v2.8.1 flag ledger; Doc 09 v1.9.0 prod-default list). A design-stage ruling about copy that cannot render yet is the **whole posture** of this section — it is a **pre-mount** ruling — so a future-tense source is the correct source to cite; the citation simply now says so. The matching note is recorded at **§11**, against the FR-131(e) / DES-094 endorsement row that makes the same citation.

**REJECTED ALTERNATIVES** — recorded to the ADR standard, because a copy ruling without them is a preference and not a decision.
````

---

### OP 11 — ISS-05 (Low): reconcile the render bar with the thirteen-screen leak-check table

FIND:
````
Review scope: all 15 wireframe screens examined for (a) every `privacy(...)` component instance and (b) every place another person or aggregate is rendered.
````
REPLACE WITH:
````
Review scope: all 15 wireframe screens examined for (a) every `privacy(...)` component instance and (b) every place another person or aggregate is rendered.

> **_(v2.14.1 — reconciling this table with the v2.14.0 render trigger, per cycle-1 ISS-05 (Low). v2.14.0 turned a disclosure-scope list into a render BAR and did not say so where a reader would look; this says so, immediately above the table.)_** The table below lists the privacy pill on **thirteen** screens. That is a **leak-check** scope — which screens carry a pill **at all** — and it is **unchanged and still correct**. It is **not** a statement about which **state** each of those pills may show. **The `anon` state is now bounded more tightly than the pill is.** Render-trigger condition **(ii)** — *"the host screen supplies a context value from clause 10's enumerated set; a mount that cannot supply one is not permitted"* — read together with clause **10(b)**'s enumerated set `'browse' | 'join' | 'endorse'`, makes **screens 1.2, 1.6 and 2.3 the exhaustive set of `anon`-render surfaces in Definition-A (v1)**. The other ten pill screens render **`ver`** or **`pub`**, which clauses 7 and 9 govern and which this ruling does not touch. **This is a reconciliation, not a change:** clause 8 has enumerated the same three contexts since v2.7.1, so the table and the trigger have never disagreed — what v2.14.0 added is that the same list now also **bars** an `anon` render outside it. **One list, two obligations**, exactly as clause 8's v2.14.0 annotation claims: **adding a fourth `anon` context requires an edit to clause 8 AND clause 10 together**, in this section, and nowhere else. **Two consequences worth separating, because they operate at different times.** At **ship** time, condition (ii) bars a mount that cannot name its context. At **run** time, if a context is nonetheless absent, unrecognised or malformed, clause **10(c)**'s fail-honest default renders — *"Our own records can link what you do here to your account."* — and the component **MUST NOT infer** the context from route or referrer. The default is the safety net, not the permission. **The leak-check verdict below is unaffected.**
````

---

### OP 12 — ISS-04 (Low), §11 half: the same tense note against the endorsement failure-mode row

FIND:
````
### Single-point-of-progress sweep — steward powers (FR-115) and steward-touching §5.4 calls
````
REPLACE WITH:
````
**_(v2.14.1 — cycle-1 ISS-04 (Low), the §11 half; the matching note is at §10.12.3.)_** The second of the two **FR-131(e) / DES-094** rows added at v2.14.0 cites **Doc 14 §2.2** for the proposition that petition endorsement is **public by design**. Doc 14 §2.2 is written in the **future tense** — *"When backing ships, **it will be** a public act, on purpose"* — and endorsement is **unshipped in v1**. **The failure mode is unaffected**, and that is the point of recording it: it is a failure mode of a surface that does not exist yet, captured **before** the surface is built, which is the discipline the `ver` title's shipped defect cost this project. The citation should be read as **the posture for when backing ships**, not as a present-tense fact about a live screen. **The present-tense grounds the row actually stands on are design facts:** `private_endorsement` is a **Phase-4 charter flag OFF in every v1 deployment** (Doc 06 v2.8.1 flag ledger; Doc 09 v1.9.0), and clause 10(b)'s `'endorse'` string may render only on a **shipped** screen 2.3 under the five-condition render trigger — so the string and its source become present-tense together.

### Single-point-of-progress sweep — steward powers (FR-115) and steward-touching §5.4 calls
````

---

## Verification checklist for the applier

| # | Op | FIND anchor | Expected matches |
|---|---|---|---|
| 1 | Version bump | `Version:       2.14.0` | 1 |
| 2 | Status block | Status lines (9 lines, `Status:        In Review — v2.14.0 …` → `… PASS at 97%.`) | 1 |
| 3 | Source pin sweep | `Last updated:  2026-09-20` | 1 |
| 4 | Change entry | `Change:        v2.14.0 (2026-09-20) — **\`OPEN-27\` closed: the DES-094 \`anon\` badge copy is` | 1 |
| 5 | ISS-01 banner above | `**Copy:** "Nothing you do here is linked to you."` | 1 |
| 6 | ISS-01 note below | the `**FR-124(b) aggregate-only policy.**` paragraph (whole line) | 1 |
| 7 | ISS-01 site list | `               FR-131(e) / DES-094 failure-mode rows; **§15**'s FR-131 → DES-098 row footnoted.` | 1 |
| 8 | ISS-02 enumeration | the `_(v2.13.0 Verdict — SUPERSEDED at v2.14.0…)_` paragraph (whole line) | 1 |
| 9 | ISS-03 | the `\| DES-094 \| Privacy-status component \| …` table row (whole line) | 1 |
| 10 | ISS-04 §10.12.3 | `**REJECTED ALTERNATIVES** — recorded to the ADR standard, …` | 1 |
| 11 | ISS-05 | `Review scope: all 15 wireframe screens examined …` | 1 |
| 12 | ISS-04 §11 | `### Single-point-of-progress sweep — steward powers (FR-115) and steward-touching §5.4 calls` | 1 |

**After applying:** the document is **v2.14.1, Status: In Review**, rework cycle 2 of 5, answering
`artifacts/reviews/03-architecture-design-sdd-v2.14.0-technical-cycle1.md`. **Zero Lows carried.**
Then apply `artifacts/architect-2026-09-20T1700-doc04-c2-spec.md`, and not before.
