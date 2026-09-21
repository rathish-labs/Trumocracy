# Architecture & Design Document (SDD) — Trumocracy

```
Document ID:   SDD-TRUMOCRACY
Version:       2.14.1
Status:        Approved — 03-architecture-design-sdd-v2.14.1-technical-cycle2.md (PASS 97%, 0C/0H/0M/1L; reviewer: tester; one Low carried, non-blocking, to fold at the next touch: ISS-C2-01 the ISS-01 annotations call the superseded sentence the paragraph's 'closing sentence' when it is the third of four, and S4 (the actual closing sentence) survives — quoted verbatim at both sites, so no careful reader is misled). Previously: In Review — v2.14.1 (2026-09-20). **Rework cycle 2 of 5** against
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
               **What this version rules.** Doc 04 v1.6.0 §13 `OPEN-27` routed a copy question
               here and declined to answer it, correctly: a copy ruling living anywhere other
               than the copy authority is the v2.7.0 mistake. §10.12.3 is the copy authority.
               The question was whether the v2.13.0 `anon` **TITLE** disposition ("Anonymous" is
               COMPLIANT in v1 because the badge renders only for open-tier users who cannot
               cast a binding vote — *"the distinction is the voter, not the word"*) and the
               2026-08-25 **subtitle** no-change decision survive **FR-131 clause (e)**, which
               extends the honesty duty from voting to **every v1 participation act**, naming
               **joining or belonging to a party** and **endorsing or backing a petition** — two
               of the three contexts clause 8 itself assigns the `anon` pill (screens 1.6 and
               2.3). **They do not.** Both strings FAIL clause (e); both dispositions are marked
               **SUPERSEDED in place and retained verbatim**; and **clause 10** is added to the
               DES-094 normative binding list specifying the v1 variants in the same form
               clauses 7 and 9 specify the `ver` copy.
               **Doc 04 v1.6.0's lapse analysis is NOT disturbed, and this ruling does not rest
               on it.** That analysis found that none of the four re-open triggers has fired; it
               was reviewed and PASSed, and it remains correct. Whether a trigger *fired* and
               what clause (e), read directly against these two strings, *requires* are two
               different questions. Clause (e) supplies its own test — "what an ordinary reader
               at the grade-8 reading level (NFR-023) would take the claim to mean, not whether
               a banned word appears" — and that test does not wait on a trigger. **No trigger
               fired; the requirement changed.**
               **The finding that is bigger than the debt.** A single static `anon` subtitle
               **cannot** be honest across clause 8's three contexts. On browsing (1.2) and
               party-joining (1.6), "not made public" is true (FR-124(b)); on **endorsing
               (2.3)** it is false, because petition endorsement is **public by design** (Doc 14
               §2.2, "a public act, on purpose"). Any single-string fix trades a clause-(e)
               breach in one direction for a clause-(e) breach in the other. Clause 10 therefore
               makes the `anon` subtitle **context-selected**, by the same fail-honest discipline
               clauses 7 and 9 apply to `ver`: an explicit input, an enumerated context set, and
               a default that claims **least** when the input is absent, unknown or malformed.
               **Nothing renders today, and that is the point.** `PrivacyStatus` is mounted on
               **no shipped surface** — six explicit non-render comments across five consuming
               files, re-verified by Doc 09 v1.9.0; Doc 06 v2.8.1 §7 item 18 records the
               non-render decision and item 26 (ISS-05(i)) inventories exactly these two strings
               and flags them "for re-copy-review against clause (e) **before first mount**".
               This ruling is that review. **No citizen sees either string**, so this is a
               **pre-mount** ruling and not a live copy defect — the opposite posture to the
               `ver` title, where the same class of defect **shipped** and had to be caught in
               code by Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03` (2026-09-02). Clause 10 states the
               **render trigger** explicitly: what must be true before either string may render.
               **No product code is written or edited, and none needs to be.** Implementation is
               the engineer's, routed through the project-manager under the existing story
               `US-0134` (FR-131 · DES-098) or a new story the product-owner cuts; this document
               does not mint a `US`, a `TC` or a `UT`, and upgrades no test status.
               **Both v2.13.0 carried Lows are DISCHARGED on this touch**, as the v2.13.0 status
               line directs ("fix first on any future touch"). **ISS-C2-01** — the retained
               v2.13.0 record's sentence "Doc 08 has carried the FR-131 Must row since v2.2.0
               (2026-08-25) — `EP-06 ▸ FE-058 ▸ US-0134` with sixteen TCs, row **OPEN
               (G-PHASE3)**" conflates a state-**since**-a-date with a state-**at**-a-date. The
               true position, stated here rather than by editing a block this document has
               declared retained verbatim: **the row's existence** since Doc 08 v2.2.0
               (2026-08-25) is the load-bearing fact and is correct; **the sixteen-TC count and
               the OPEN (G-PHASE3) gap code** describe the row as it stood when v2.13.0 was
               written and are **not** asserted of v2.2.0. Neither figure is re-verified here:
               Doc 08 is **v2.11.3 (Approved)** at HEAD and is being incremented to **v2.12.0**
               by the tester in this same session, and this document does not restate a count it
               cannot see settle. **ISS-C2-02** — §5.2's DES-066 cell ("private votes" of a
               v1-reachable element) is annotated in place at §5.2. **No Low is carried forward
               from v2.13.0.**
               **Pins swept to HEAD before submission**, deliberately, because a rework whose
               pins are already stale is the same defect in its next costume: **Doc 02 →
               v2.17.3 (Approved)** — this is load-bearing, since clause (e) is the text this
               version rules against; Doc 05 v2.5.0, Doc 06 **v2.8.1**, Doc 07 **v2.8.1**,
               Doc 08 **v2.11.3** and Doc 09 **v1.9.0** all Approved, with Docs 07 and 08 being
               incremented in parallel this session and cited as such.
               _(v2.13.0 record, retained verbatim per annotate-don't-delete — its two carried
               Lows are discharged above:)_
               Approved — 03-architecture-design-sdd-v2.13.0-technical-cycle2.md (PASS 97%,
               0C/0H/0M/2L; reviewer: reviewer-qa, neutral, PM-assigned). Two Lows carried —
               **fix first on any future touch:** ISS-C2-01 (header Status block line ~16: the
               Doc 08 FR-131-row history sentence over-states the TC count/dates) and ISS-C2-02
               (§5.2 DES-066 cell still says "private vote" of a v1-reachable element — annotate).
               This was **rework cycle 1 (v2.13.0, 2026-09-06)** against
               artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md
               (FAIL 89%; 0C/1H/2M/2L; reviewer: reviewer-qa, neutral, PM-assigned). Minor bump:
               a High and two Mediums make a minor bump the floor. The FR-131 title/notice copy
               work of v2.12.0 is **correct and is not re-opened** — cycle 1 verified it byte for
               byte against the shipped constants. All four findings are elsewhere.
               **ISS-01 (High) FIXED — a §15 cell contradicted Doc 08, and contradicted itself.**
               The new v2.12.0 sub-table's DES-098 row ended "FR-131 has **no `US`/`TC`/RTM row**
               yet" while naming `US-0134` one clause earlier. Doc 08 has carried the FR-131 Must
               row since v2.2.0 (2026-08-25) — `EP-06 ▸ FE-058 ▸ US-0134` with sixteen TCs, row
               **OPEN (G-PHASE3)**. With Gate 2 approaching, a §15 register publishing "no RTM
               row" for a Must requirement that has an OPEN, evidence-bearing one is a material
               correctness defect. The cell now states the true position and, as the review asked,
               states the intended DES assignment so the tester can align Doc 08 rather than guess.
               **ISS-02 (Medium) FIXED** — the v2.4.0 sub-table's FR-131 row, edited at v2.12.0 to
               add the fourth banned word, still closed "US layer: owed — PO to mint US from
               FR-131". US-0134 exists. **This is the "fixes stopped at the section boundary"
               pattern this document's own v2.11.1 changelog names as the lesson of that cycle,
               and it recurred inside a cell that was open in the editor.**
               **ISS-03 (Medium) FIXED** — v2.12.0 minted a normative rule that FR-131's ban
               reaches voting-adjacent **status** copy, then dispositioned only one of the two
               badge states carrying a banned word. The `anon` title is the bare word "Anonymous".
               §10.12.3's `anon` analysis now carries a banned-word disposition in the same form
               the `ver` and `pub` analyses use — **COMPLIANT in v1**, on the narrow basis that the
               `anon` state renders only for open-tier users who cannot cast a binding vote
               (FR-122/FR-123), with re-open triggers recorded and the clause-8 disclosure gap
               conceded, not papered over — and §10.13.6's status-copy rule now names its own
               scope. Doc 04 v1.4.0 §0.5 S5 cites this disposition; it does not make one.
               **Both Lows taken on this touch rather than carried:** ISS-04 (§10.11's
               "individual votes are private" survived the sweep — annotated, and the standing
               sweep widened to a bare-word scan) and ISS-05 (§10.12.3's note quoted one
               annotation as if both cells carried it — both are now quoted as they actually read).
               **No Low is carried forward.**
               Prior verdicts (superseded, recorded for the trail): **v2.12.0 FAIL 89%**
               (03-architecture-design-sdd-v2.12.0-technical-cycle1.md) — its own five discharged
               v2.11.2 Lows were re-verified at their locations by that review and stand;
               **v2.11.2 Approved** — 03-architecture-design-sdd-v2.11.2-technical-cycle4.md
               (PASS 95%, 0C/0H/0M/5L); the score sat AT the bar (95.05%), not above it.
Owner:         Ravi Deshmukh — Principal Architect
Approvers:     Rafael Duarte (Security), Chen Wei (Reliability), Dr. Lena Kowalczyk (Privacy),
               Aisha Nkemdirim (Elections & Voting)
Source:        SRS-TRUMOCRACY **v2.17.3 (Approved** — 02-requirements-srs-v2.17.3-business-cycle2.md,
               PASS 96%; last updated 2026-09-08). **FR-131 §4.45 is the normative wording this
               version cascades, and at v2.17.3 it enumerates clauses (a), (b), (c), (d) and
               (e).** **Clause (e) entered at v2.17.0** (product-owner ruling 2026-09-06,
               CONFIRMED by the approver Rathish Kumar 2026-09-06 —
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11) and its normative
               text is **unchanged** at v2.17.1 / v2.17.2 / v2.17.3; **v2.17.1 added §8 FR-131
               Scenarios 8 and 9**, clause (e)'s acceptance criteria. **Origin and currency are
               different statements and are kept apart** throughout this document: clause (e)
               *entered* at v2.17.0; the *current* Doc 02 is v2.17.3.
               _(v2.14.0 — the pin is re-cut; the superseded pin is retained, not deleted. It
               read: "SRS-TRUMOCRACY v2.16.3 (Approved 2026-08-30) — re-pinned at v2.12.0 from
               the three-versions-stale v2.16.0 pin (carried Low #2). No normative requirement
               text changed across the v2.16.0 → v2.16.3 delta; FR-131 (§4.45) is unchanged and
               is the normative wording this version cascades." That was true when written on
               2026-09-06 and became false the same day: **FR-131 changed at v2.17.0**, and this
               document went on pinning a Doc 02 that predates the change while §10.12.3 ruled on
               FR-131 copy. The v2.13.0 cascade is not falsified by the stale pin — clause (e)
               widens the ban and does not narrow it, so every v2.12.0 / v2.13.0 `ver` ruling
               holds a fortiori — but the `anon` dispositions were reasoned **against the
               superseded closing sentence**, which is exactly what `OPEN-27` found and what
               v2.14.0 rules. A pin advanced without its dependent statements re-read is a defect
               class this document family has paid for repeatedly; here the pin was not advanced
               at all, which is the same defect standing still.)_
               Other pins at HEAD, verified 2026-09-20: BKLG **Doc 05 v2.5.0 (Approved)**; CODE
               **Doc 06 v2.8.1 (Approved**, PASS 97%, three Lows carried there**)**; TC **Doc 07
               v2.8.1 (Approved**, PASS 98%**)** and RTM **Doc 08 v2.11.3 (Approved**, PASS 98%,
               loop closed ON the cap at cycle 5 with a PASS, not an escalation**)** — **both
               Doc 07 and Doc 08 are being incremented by the tester in this same session** (to
               v2.9.0 and v2.12.0), so they are cited here as Approved-at-HEAD **and in flight**,
               and no statement in this version depends on their in-flight content; REL **Doc 09
               v1.9.0 (Approved)**; MTP **Doc 04 v1.6.0 (Approved)**, going to **v1.7.0 (In
               Review)** in this same session to record this ruling where `OPEN-27` is registered.
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
               re-examined against FR-131 clause (e) and RULED. Both strings fail; clause 10 is
               added.** Minor bump: normative copy in a DES binding list changes, and a new
               normative clause is minted. Trigger: Doc 04 v1.6.0 §13 `OPEN-27` — *"What is owed
               is a fresh look, not a lapse: the architect re-examines the `anon` title **and**
               subtitle against clause (e) at the next Doc 03 increment."* This is that
               increment. Session record:
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md row 3. This entry
               describes only what changed.
               **THE RULING.** **(1) The subtitle "Nothing you do here is linked to you" FAILS
               clause (e).** It is a universal negative over the holder's acts, rendered by
               clause 8's own contexts on **party-joining (1.6)** and **endorsing (2.3)** — two
               acts clause (e) names. An ordinary grade-8 reader on the join screen takes it to
               mean that joining is not linkable to them, which is the conclusion clause (e)
               forbids; and §10.12.3 has **conceded since v2.7.1** that the claim is not
               literally true in v1. The v2.7.1 "interpretive basis" rescued the string by
               reading "linked" as "***publicly*** linked", resting on FR-124(b)'s aggregate-only
               **publication** policy. Clause (e) is not a publication rule — it is a rule about
               what **Trumocracy itself** can do — and it expressly displaces an author's gloss
               in favour of the ordinary reader's reading. The safe harbour does not save it
               either: the string states the not-published half not at all and the
               operator-records half not at all, and clause (e)'s safe harbour is explicitly
               "**in the same string**". **The 2026-08-25 "no v1 subtitle variant required"
               decision is SUPERSEDED; a v1 subtitle variant is REQUIRED.**
               **(2) The title "Anonymous" FAILS clause (e) as rendered.** The v2.13.0
               disposition rested on one load-bearing premise — *"The distinction is the voter,
               not the word"* — which is **true and remains true**, and is exactly why the
               disposition does not survive: it answered a **voting-scoped** ban, and the closing
               sentence now reaches "**any other v1 participation act as defined in clause (e)**".
               FR-122/FR-123 are unamended; **what changed is the requirement, not the voter.**
               On screens 1.6 and 2.3 the badge renders at the point of a named participation act,
               above a subtitle whose subject is that act, carrying one of the four banned words.
               On screen 2.3 there is a **second, independent** failure: endorsement is **public
               by design** (Doc 14 §2.2; "only back a petition if you are comfortable being seen
               to support it"; `private_endorsement` is a Phase-4 charter flag OFF in every v1
               deployment), and clause (e) requires copy to say so **plainly** and forbids
               describing the act as kept private, secret or hidden. A badge reading "Anonymous"
               describes it as hidden. **The v2.13.0 `anon` TITLE disposition is SUPERSEDED as to
               v1; a v1 title variant is REQUIRED.**
               **(3) No single static subtitle can be honest across clause 8's three contexts** —
               "not made public" is true on 1.2 and 1.6 and **false** on 2.3. The copy MUST be
               **context-selected** with a fail-honest default. This is the part of the finding
               that is larger than the debt item that produced it, and it is stated as such.
               **What is NOT ruled, and is not disturbed.** Doc 04 v1.6.0's finding that **none
               of the four re-open triggers has fired** stands untouched and is not re-opened;
               this ruling does not rest on any trigger. Clause 7, clause 9, the `ver` sub-table,
               the `pub` analysis, the leak-check verdict, the v2.12.0 reversal and every DES
               other than DES-094 are untouched. **No `US`, `TC`, `UT`, `DES`, `ADR`, `SCR` or
               `RISK` id is minted, renumbered or reused**; no test status is upgraded; no
               product code is written or edited.
               **No new ADR is minted, and the reason is recorded rather than assumed.**
               §10.12.3 is declared by this document to be the copy authority for DES-094 badge
               copy, and the v2.12.0 and v2.13.0 copy rulings both live there without an ADR.
               A third ADR for the third ruling in the same series would fragment the authority
               this section exists to concentrate. **Rejected alternatives are recorded in-line
               in the ruling**, in the ADR form and to the ADR standard.
               **Sites changed — all of them, because a correction that does not reach every
               place it claims to reach is this family's signature defect:** §10.12.3's
               head-of-table normative note (extended from the `ver` row to the **`anon` row**);
               the three-state reference table's `anon` row (title and subtitle cells annotated
               as reference copy, as the `ver` cells already were); the 2026-08-25 subtitle
               decision (SUPERSEDED in place); the v2.13.0 TITLE disposition (SUPERSEDED in
               place, retained verbatim with its four re-open triggers); the v2.13.0 Verdict
               (superseded and re-stated); the **Downstream / copy-authority** paragraph (Doc 04
               §0.5 S5's carve-out is **withdrawn**, not annotated); **clause 8** (its quoted
               subtitle re-pointed; its disclosure obligation unchanged and still owed);
               **clause 10 minted**; **§10.13.6**'s status-copy scope bullet (whose `anon` half
               said COMPLIANT in v1) corrected by a following bullet; **§11** gains two
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
               **One newly-in-scope site is NAMED and ROUTED, not ruled** — clause 6's screen-3.6
               wireframe copy ("What you've done as an anonymous supporter stays anonymous
               forever…") is a clause-(e) participation-act claim carrying a banned word twice.
               It is **outside `OPEN-27`'s scope**, is **not** a shipped string (`apps/web`'s
               `en.ts` contains "anonymous" only in clause (a)'s mandated negated form), and is
               registered as **`OPEN-29`** in Doc 04 §13 for the next Doc 03 increment. Naming a
               site is not ruling it — the discipline Doc 06 v2.8.1 §7 item 26 used to surface
               the two strings ruled here.
               **Both v2.13.0 carried Lows discharged** (ISS-C2-01 in the Status block by stating
               the true position rather than editing a verbatim-retained record; ISS-C2-02 at
               §5.2's DES-066 cell), and the **Doc 02 pin swept v2.16.3 → v2.17.3** — see
               `Source:`, where the reason the stale pin mattered is recorded rather than glossed.
               v2.13.0 (2026-09-06) — **Rework cycle 1 against
               artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md**
               (FAIL 89%; 0C/1H/2M/2L). Minor bump: a High and two Mediums set a minor bump as the
               floor. **Nothing in the FR-131 title/notice copy work is re-opened** — cycle 1
               checked §10.12.3's tables, clause 9 and §10.13.6 against the shipped constants and
               found them correct; all four findings sit elsewhere. This entry describes only what
               changed.
               **ISS-01 (High) FIXED — §15, the v2.12.0 sub-table's DES-098 row.** Its closing
               clause read "FR-131 has **no `US`/`TC`/RTM row** yet". False, and self-contradicted:
               the same cell named `US-0134` one clause earlier. Corrected to the true state, read
               from source rather than asserted: **Doc 08 carries the FR-131 Must row** —
               `BR-005, BR-009 → FR-131 → EP-06 ▸ FE-058 ▸ US-0134`, sixteen TCs, row **OPEN
               (G-PHASE3)** at **v2.7.0 (Approved)** and still OPEN at **v2.8.0 (In Review,
               2026-09-06)**, which adds TC-3564…TC-3569 for this drop; **TC-3476, TC-3481 and
               TC-3487 are Blocked**, TC-3481 because SCR-13/SCR-14 are not built (Doc 06 §7 item
               21). The row has existed since Doc 08 v2.2.0 (2026-08-25), so the claim was never
               true in this window. The first half of that clause — the DES-098
               acknowledge-to-proceed control is not built — was verified TRUE and stands. **DES
               half reconciled as the review asked:** Doc 08 assigns FR-131 → `DES-096 · ADR-024`;
               the architect's intended assignment is now stated in the cell (**DES-098** primary,
               **DES-094** for the status-badge reach, **DES-096** retained as the ballot seam) and
               **routed to the tester**. Doc 08 is the tester's document and is **not edited from
               here**.
               **ISS-02 (Medium) FIXED — §15, the v2.4.0 sub-table's FR-131 → DES-098 row.** Its
               closing sentence still read "US layer: owed — PO to mint US from FR-131 covering the
               SCR-13/SCR-14 notice surface" after the rest of the cell was edited at v2.12.0.
               `US-0134` (EP-06 ▸ FE-058, Doc 05 **v2.5.0 Approved**) exists and covers that
               surface, and `TC-3481` is written against SCR-13/SCR-14 and is **Blocked, not
               absent**. Replaced with the true state, and the genuine residue is **named rather
               than asserted as an unminted US**: US-0134's Definition of Done is not met (its
               FR-131 RTM row is OPEN) and the acknowledge-to-proceed control is unbuilt.
               **ISS-03 (Medium) FIXED — §10.12.3 `anon` copy analysis + §10.13.6 cross-reference.**
               v2.12.0 minted the rule that FR-131's ban reaches voting-adjacent **status** copy and
               then dispositioned only the `ver` title, leaving the `anon` title — the bare word
               "Anonymous", hardcoded in the same `STATE_CONFIG` of the same component — with no
               banned-word line at all, the only one of the three state analyses without one. A new
               **`anon` TITLE banned-word disposition** rules it **COMPLIANT in v1** on an
               explicitly narrow basis: the `anon` state renders only for **open-tier** users who
               by FR-122/FR-123 **cannot cast a binding vote**, so the badge cannot be describing
               that user's v1 voting behaviour, and clause 8's contexts (browse 1.2, join 1.6,
               endorse 2.3) are all non-vote. **The basis is deliberately narrower than the
               "status visibility" reading v2.12.0 overruled** — that reading failed because the
               `ver` badge renders for users who *can* vote; the distinction is the voter, not the
               word. The disposition **concedes what clause 8 already concedes**: "Nothing you do
               here is linked to you" is not literally true in v1 (`phone_hash` → phone number →
               in the India pilot a TRAI-registered person; H-16, H-18, T-01, T-02), that being a
               disclosure obligation carried by clause 8 whose link is still unbuilt — not a
               banned-word question. Four **re-open triggers** are recorded, in the form the `anon`
               subtitle decision already uses. §10.13.6's status-copy bullet now **names its own
               scope**: `ver` and `anon` are the whole set at v2.13.0.
               **ISS-04 (Low) FIXED — §10.11 governance-constants table.** The conduct-vote quorum
               rationale read "individual votes are private, aggregate public (FR-103)" — an
               affirmative "votes are private" surviving a version whose declared purpose was to
               stop asserting exactly that. It is internal design rationale rather than product
               copy, so FR-131 does not bind it; it is corrected anyway to "**not published
               individually**", because this document's own diagnosis of v2.7.0 is that a reader
               does not parse the distinction. The **standing FR-131 sweep is widened** from the
               five routed phrases to a bare-word scan of "private" / "anonymous" / "secure" in
               vote-adjacent prose, so the next cascade does not rediscover this class.
               **ISS-05 (Low) FIXED — §10.12.3 normative note.** It presented one annotation string
               as a quotation applying to "each" of the title and subtitle cells; the two cells
               carry different strings. Both are now quoted as they actually read — in the very
               note whose job is to stop a reader taking the wrong cell as normative.
               **Reported, not fixed here (not Doc 03's to fix), carried from the cycle-1 report's
               routing section:** the engineer's `PrivacyStatus.tsx` header still pins "Doc 03
               §10.12.3 **v2.7.1**" and attributes the title rule to clause 7 — the behaviour is
               right, the citation is stale, cheap at the next touch of that file; the tester owes
               TC mints for UT-0759/UT-0887/UT-0888 (Doc 06 v2.5.1 §7 item 26(c)) and the Doc 08
               DES-half alignment; the approver holds the ADR-024 §(d) quotation question.
               v2.12.0 (2026-09-06) — **FR-131 cascade: this document stops asserting the claim
               the rest of the project has already retired.** Minor bump — normative copy in a
               DES table changes. Routed in by Doc 06 v2.5.1 §7 item 26(a) and
               artifacts/engineer-2026-09-05T1700.md; superseding authority is Doc 09 v1.3.0
               `REL-LIM-18` / `ISS-03` (pre-mount blocker, 2026-09-02) and the approver's
               direction of 2026-09-05 (Rathish), re-affirmed 2026-09-06 as the highest-priority
               cascade.
               **REVERSAL — the v2.7.0 FR-131 banned-words ruling on the `ver` TITLE is
               OVERRULED.** v2.7.0 ruled the title "Verified — private" COMPLIANT in v1 on the
               reading that "private" describes *status visibility*, not voting behaviour. That
               reading is overruled. **The rule that now governs, v1 and v2 alike:** the word
               "private" may appear on a voting-adjacent status badge **only** against a live
               `IEligibilityVerifier` backing that declares `getProperties().unlinkable === true`.
               FR-131's closing sentence bans "private", "anonymous", "receipt-free" and "secure"
               across the v1 product's UI, README and all public-facing materials where they
               describe v1 voting behaviour, and carves out no "status visibility" exception; the
               green `ver` badge sits on the same authenticated surfaces from which a member
               votes, so a reasonable member reads it as a claim about the ballot — in v1, a false
               one. Locations corrected: §10.12.3 backing-aware sub-table (v1 row title
               "Verified — private" → **"Verified"**; the v2 row keeps "Verified — private",
               verbatim-matching `VER_TITLE_V2`); §10.12.3 three-state reference table (`ver`
               title cell annotated v2-only, as the subtitle cell already was); §10.12.3 v2.7.1
               normative note (its warning was scoped to the *subtitle* alone — that scoping is
               precisely what left the title cell reading as normative, and it now covers the
               title too); §10.12.3 banned-words analysis (v2.7.0 ruling marked SUPERSEDED, text
               retained verbatim, new rule stated); §10.12.3 normative binding list — **clause 9
               added**, applying clause 7's fail-honest backing test to the TITLE, including the
               `aria-label`. Clause 7's own body is left untouched: it is subtitle-scoped and
               remains correct as written; clause 9 is its title-side twin and says so. The
               v2.7.0 changelog entry below is marked as reversed but is otherwise left standing
               as history.
               **§13 debt row "Public tallies in Phase 1" corrected.** Its Repayment cell told the
               client to "state plainly that Phase-1 votes are anonymous but not receipt-free" — a
               statement FR-131 forbids and the v1 build does not make. It now carries the FR-131
               truth: a v1 vote is cast through conventional authentication and is NOT anonymous,
               NOT receipt-free and NOT coercion-resistant; the platform database CAN see vote
               direction and party membership; the cryptographic private ballot arrives with the
               Definition-B (v2) privacy layer.
               **§10.13.6 DES-098 aligned to FR-131(a).** The element's clause (1) said only "NOT
               the private receipt-free ballot", under-stating FR-131(a)'s three explicit denials;
               it now states NOT anonymous, NOT receipt-free, NOT coercion-resistant. The
               banned-words bullet now states that the ban reaches voting-adjacent *status* copy,
               not only notice text, and records the overruling. §15's FR-131 → DES-098 trace row
               gains the fourth banned word ("secure") and the badge rule.
               **Alignment with built code (verified by reading at commit 84e2203, not assumed):**
               `packages/ui/src/PrivacyStatus.tsx` (`VER_TITLE_V1 = 'Verified'`,
               `VER_TITLE_V2 = 'Verified — private'`, selected by
               `backingProperties?.unlinkable === true`, `aria-label` following the selected
               title; UT-0759 four-path test), `packages/protocol/src/flags.js`
               `MACI_VOTING.description`, `apps/web/src/i18n/en.ts`
               `banner.notReceiptFreeTitle`/`Body` (UT-0887),
               `packages/contracts/src/core/Governor.sol` NatSpec,
               `packages/sdk/src/client.js` `#tenureSignals`.
               **All five v2.11.2 carried Lows discharged** (see the Status block): Q17 body;
               `Source:` re-pin to SRS v2.16.3; the "Still routed … Doc 02 §13 (h)" line; the
               §10.13.12 `Traces:` FR-107 annotation; the §10.13.3 DES-096 accessor clause.
               **ADR sweep (reported, not edited — ADRs are decision records):** `ADR-024`
               §"Relationship to existing Doc 03 §13 debt row" quotes the retired §13 wording as
               its precedent pattern; that quotation is now historical and is contradicted by this
               version. `ADR-023` defers to §10.12.3 for the DES-094 copy rather than restating
               it, so it follows this correction automatically. `ADR-006`'s "even when it is
               anonymous" is a general statement about public-ledger voting, not a claim about v1
               Trumocracy. No ADR was edited.
               v2.11.2 (2026-08-30) — Rework cycle 3 against
               artifacts/reviews/03-architecture-design-sdd-v2.11.1-technical-cycle3.md
               (FAIL 90%, 0C/0H/1M/5L). All nine cycle-2 findings were verified fixed at their
               locations against source; nothing in §10.13.13(a) needed rework.
               **ISS-01 (Medium) FIXED — and it is the same defect v2.11.1's changelog had just
               named as the lesson of its own cycle.** §15's new FR-107 row says "**Do not read
               this as a DES assignment**" and defers to Doc 08 — while **§5.2's DES-106 row still
               listed FR-107 in its `Satisfies` column** and **§10.13.13's DES-106 heading still
               read "(FR-092, FR-107)"**. §15's own lead-in declares §5.2 to be the register that
               provides the `FR/NFR → DES` half, so a link in §5.2 **is** a link claimed: the
               document published the very link it disclaimed, against a **Must** row Doc 08 holds
               OPEN for want of exactly that DES. Both removed; FR-107's relationship to DES-106
               (append-only property for the decision trail only, not a discharge) is stated in
               both places instead.
               **Lows FIXED.** (1) The SDK decode array's ordinal hazard was written in the present
               tense, implying a live mis-decode; `PROPOSAL_STATE_ENUM` has **zero call sites
               repo-wide** — it is declared ahead of its consumer, so the hazard is **latent today
               and arms at the seam swap**. Tense corrected, concern unchanged. (2) The owed
               **DES-096 ballot-state accessor** existed only as §10.13.13(a) prose, unowned and
               absent from every register; it is now a **§13 debt-register row owned by Ravi
               Deshmukh**, due before the v1 ballot layer. (3) FR-107's gap class corrected to
               `G-TRACE + G-PHASE3`, matching Doc 08. (4) **Q17 still counted two** representations
               after the sub-table had established three; corrected in both its title and body.
               _(v2.12.0 correction to this historical entry: the **body was NOT corrected** at
               v2.11.2 — it still read "`differential.test.mjs` exercises neither". Only the title
               and the annotation were fixed. The v2.11.2 review carried this as Low #1; the body
               is corrected at v2.12.0.)_
               (5) §15's DES-104 row now records Doc 08 v2.6.0's new **Q16 revisit flag** on
               FR-090, while noting the row correctly stays COMPLETE.
               **Still routed elsewhere, unfixed here (not architect-owned):** Doc 02 §13 (h) and
               the two engineer-owned stale code comments at packages/sdk/src/proposals.js:295 and
               packages/protocol/src/proposals.js:103-108.
               _(v2.12.0 correction to this historical entry, carried Low #3: the **Doc 02 §13 (h)
               routing was already discharged** when this line was written — Doc 02 v2.16.3
               (Approved 2026-08-30) corrected (h)'s ADR-024 mis-citation, which was the routed
               item. (h) itself remains OPEN as a product-owner requirement question, but nothing
               is routed from this document to it. The two engineer-owned code comments are not
               re-asserted here; their status is Doc 06's to record.)_
               v2.11.1 (2026-08-30) — Rework cycle 2 against
               artifacts/reviews/03-architecture-design-sdd-v2.11.0-technical-cycle2.md
               (FAIL 84%, 0C/0H/5M/4L). Both cycle-1 Highs were confirmed genuinely fixed, and
               §10.13.13(a)'s central argument needs no rework. **Four of the five Mediums are the
               same corrections applied ONE LOCATION SHORT — the v2.11.0 fixes stopped at the
               section boundary.** That is the lesson of this cycle and it is recorded as such.
               **ISS-01 (Medium) FIXED:** §16 **Q15** still carried "v1 holds no vote (ADR-024
               §(b))" — the exact mis-citation corrected in §10.13.13, in one of the three
               locations the cycle-1 finding had named, and directly contradicting **Q16 two rows
               above it**, which already used the corrected narrow form.
               **ISS-02 (Medium) FIXED:** §5.2's **DES-105 row** still published the **v2-only**
               seam rule while §10.13.13 bound it in both versions — one normative MUST at two
               scopes, in the row an implementer actually reads. Now binds both, and cites DES-096.
               **ISS-03 (Medium) FIXED — there are THREE ballot-state representations, not two.**
               `PROPOSAL_STATE_ENUM` (`packages/sdk/src/constants.js:42`) is the SDK's
               **ordinal-indexed decode array** for `Governor.State`, and it is **the fragile
               one**: it resolves states by POSITION, so reordering the Solidity enum silently
               remaps every decoded state with no name ever compared and nothing raising an error.
               It also spells the state `timelocked`, agreeing with the chain against the protocol
               mirror's `SUCCEEDED_TIMELOCK`. The reconciliation sub-table now carries all three,
               and Q17 names the ordinal-indexing hazard as the differential case to write first.
               **ISS-04 (Medium) FIXED — and it was the withdrawn illustration's defect, reprised.**
               The mapping's `Cancelled` row still read "(none — **the window ends**)", asserting a
               window termination on three counts it cannot support: no capability implements it
               (DES-104 exposes no `closeWindow`), **Q15 routes terminal outcomes as OPEN**, and
               this version's own new warning says nothing enforces termination. It also ignored
               the one-to-many cardinality the section rests on — `cancelDuringDiscussion(proposalId, …)`
               withdraws **one proposal**, not the window; the others continue.
               **ISS-05 (Medium) FIXED — the new §15 sub-table asserted a link that does not
               exist.** It mapped **FR-107 → DES-106** and marked the row "OPEN (G-NOMECH)", while
               **Doc 08 records FR-107 as `G-TRACE`, DES = none** (gap-log entry 98, Erik
               Lindqvist) — a stronger claim: a DES is owed from the architect, not a build. DES-106
               satisfies FR-107's append-only property **for the decision trail only**; FR-107 is
               platform-wide and still undesigned. A sub-table added to close a traceability
               omission had itself invented a traceability link.
               **Lows FIXED:** the v1 half of the seam rule had **nothing to derive from** —
               DES-096 exposes no ballot-state accessor, so the rule is unsatisfiable against that
               interface and DES-096 MUST gain one before the v1 ballot layer is built (recorded,
               not left for the implementer to hit); the DES-104 correction note misattributed the
               v2.9.1 fix to the §5.2 DES-104 row (it was DES-105); §15 dated DES-103..DES-106 to
               v2.9.1 (minted **v2.9.0**); §16 listed Q16/Q17 before Q15 and left Q17's owner as an
               unnamed "engineer" (**Samuel Oyelaran**, per the named-owner rule).
               v2.11.0 (2026-08-30) — Rework cycle 1 against
               artifacts/reviews/03-architecture-design-sdd-v2.10.0-technical-cycle1.md
               (FAIL 80%, 0C/2H/4M/3L). **Ruling (b) survived review in every particular and is
               untouched. Ruling (a)'s CONCLUSION also survives — the two taxonomies are
               complementary, and every structural argument for that holds — but the MAPPING TABLE
               that carried it did not survive checking against the chain, and is rebuilt here.**
               **ISS-01 (High) FIXED — `Cancelled` was said to be "reachable from any pre-execution
               state". It is not.** The only cancellation entrypoint is
               `Governor.cancelDuringDiscussion` (Governor.sol:397), whose own comment states the
               rule: a proposer may withdraw before voting opens, and not after (FR-029). Once
               voting opens there is no abort. §5.6 of this document already said this correctly,
               so v2.10.0 introduced an internal contradiction; §5.6 is the reference and the table
               is aligned to it.
               **ISS-02 (High) FIXED — the table mapped PROPOSAL and REVIEW to a `DRAFT` state that
               has no producer.** `Governor.State` has SEVEN members and no `Draft`
               (Governor.sol:41-49); `stateAt()` never returns `DRAFT`; nothing in the repository
               produces `PROPOSAL_STATE.DRAFT`; and §5.6's proposal model begins at `discussion`.
               The ballot machine simply has no state before `Discussion`. Consequence for the
               section's central warning: the chain's single pre-vote period spans **FOUR** FR-091
               stages, not three — so a name-equating implementer skips **THREE**, not "two". The
               warning had **understated its own trap**, which is the worst direction for a warning
               to err. Both corrected. A new sub-table reconciles the two enums outright:
               `SUCCEEDED_TIMELOCK`/`Timelocked` are one state under two names, and
               `PROPOSAL_STATE.DRAFT` is recorded as VESTIGIAL.
               **ISS-03 (Medium) FIXED — `proposalState()` does not exist.** The function is
               `stateAt(sched, now, {executed, cancelled, outcome})` at governance.js:210. The
               purity argument was sound; the name was invented. Corrected here and in the decision
               record — the same class of error as the v2.8.x invented error codes, found again by
               review rather than by the author.
               **ISS-04 (Medium) FIXED:** the JS mirror and the on-chain enum are now reconciled
               explicitly instead of being used interchangeably; §16 **Q17** MINTED — neither enum
               is exercised by differential.test.mjs, which matters more now that the ballot layer
               is declared authoritative over derived stage positions.
               **ISS-05 (Medium) FIXED — and this was the consequential one.** v2.10.0 scoped the
               derivation rule to the v2 seam alone, justified by "v1 holds no ballot (ADR-024
               §(b))". That mis-cited: ADR-024 §(b) removes on-chain EXECUTION in v1 and puts votes
               in Postgres; **DES-096 (§10.13.3) specifies a v1 ballot backing outright** (database
               `castBallot`, SQL `computeTally`). The rule therefore left the drift failure mode
               unbound at exactly the point where v1 first holds a vote. **The rule now binds the
               ballot layer in BOTH versions** — authority is whatever backing IBallotService is
               bound to (v1 database, v2 chain). The narrower true claim — that the layer built in
               THIS drop holds no vote — is stated where it belongs.
               **ISS-06 (Medium) FIXED:** the cardinality argument is sound and stands, but its
               illustration ("one SUCCEEDED_TIMELOCK and two DEFEATED") asserted a
               **winner-selection rule nothing specifies** — Governor gives each proposal an
               independent binary ballot and DES-104 deliberately removes every window-closing
               capability. Illustration withdrawn; the absence it exposed is MINTED as §16 **Q16**:
               two competing proposals can both pass and no rule says what then happens. That is a
               real gap between FR-090's "same decision window" and the ballot model, and the
               answer must NOT be to quietly add a window-closing capability.
               **Lows FIXED:** ISS-07 — "terminates at DECISION" is now marked a design intention,
               not built behaviour (`advanceStage()` consults no outcome and would advance a
               defeated window; not yet live because this layer holds no vote, but it must be built
               WITH the ballot layer). ISS-08 — DES-104 item 4's lead-in read "Entry closes when
               the ballot opens" while its own next sentence said debate; the §5.2 row was
               corrected for this exact sentence at v2.9.1 and the lead-in was left behind.
               ISS-09 — §15 gained the missing DES-103..DES-106 sub-table.
               **Routed, not fixed here (engineer-owned):** two stale code comments at
               packages/sdk/src/proposals.js:295 and packages/protocol/src/proposals.js:103-108.
               v2.10.0 (2026-08-30) — The two open questions §10.13.13 recorded rather than
               resolved at v2.9.3 are now BOTH RULED (Rathish, Human Approver, 2026-08-30;
               artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md).
               **No shipped code changes; both rulings confirm what is built.**
               **(a) FR-091 vs ADR-008's PROPOSAL_STATE — COMPLEMENTARY, both canonical at their
               own layer.** The architect was asked to confirm rather than force a choice, and the
               finding is not close: they are different kinds of thing about different subjects.
               The cardinality is the proof — FR-091's stage belongs to the DECISION WINDOW, which
               under DES-104 may hold several competing proposals, while PROPOSAL_STATE belongs to
               ONE proposal's ballot, so a window with three competing proposals has one FR-091
               stage and three PROPOSAL_STATE values at resolution (one SUCCEEDED_TIMELOCK, two
               DEFEATED). One-to-many cannot be a renaming. Three further properties agree:
               total-and-monotone vs branching-with-terminal-exits; stored (advanceStage) vs
               derived (proposalState() is a pure function, nothing stores it); and different spans
               (review/debate/measurement have no chain counterpart, tallying/timelock have no
               FR-091 counterpart). The full MAPPING is recorded as the bridge, with an explicit
               warning that the two `discussion` names are a COLLISION, NOT an identity — ADR-008
               §6's DISCUSSION is the whole mandatory pre-vote period and spans FR-091's
               review + discussion + debate, so an implementer equating them by name builds a
               machine that silently skips two stages. NORMATIVE SEAM RULE added: at the v2 seam
               the chain is the sole authority on ballot state and FR-091's VOTE/DECISION/
               IMPLEMENTATION MUST be DERIVED from PROPOSAL_STATE, never tracked independently —
               which makes the real failure mode (two stored copies of one fact drifting, a window
               showing IMPLEMENTATION while the chain says DEFEATED) unrepresentable rather than
               merely discouraged. FR-091's text does NOT need to name the mapping: the mapping is
               a design artifact, and binding a requirement to an enum ADR-024 has scheduled to
               change would be a step backwards. v1 unaffected (no ballot; ADR-024 §(b)).
               **(b) PROPOSING is NOT an FR-123 counting action — the built reading is CONFIRMED.**
               The commissioning brief said it was; the ruling is that the brief was wrong and the
               drop was right to refuse it. Decisive reason: gating authorship on verification
               status is a participation restriction FR-020 prohibits (reviewer-qa reached this
               independently). No amendment to FR-024/FR-090/DES-100 — each already says what the
               ruling confirms. A DIRECTIONAL WARNING is recorded on both failure modes: adding a
               verifier call to the authoring path violates the ruling; deleting canAuthorProposal()
               misreads it — the OI-14 Worker-tier condition sits on the orthogonal
               privacy-disclosure axis and is unchanged. Both guarded by test (UT-0834; UT-0089/
               UT-0832). §5.2 DES-104 and DES-105 rows carry the rulings; ADR-008 and FR-020 added
               to their trace columns. §16 Q15 MINTED (routed to the PO, not ruled here): FR-091's
               text does not say what happens to a DEFEATED or CANCELLED decision — under the
               mapping such a window terminates at DECISION, and terminating is not skipping, but
               the requirement does not say so. Surfaced by doing the mapping honestly; not a v1
               defect (v1 holds no vote). Housekeeping: v2.9.3 technical cycle-2 review PASSED
               (100%, 0C/0H/0M/0L).
               v2.9.3 (2026-08-29) — Rework cycle 1 against
               artifacts/reviews/03-architecture-design-sdd-v2.9.2-technical-cycle1.md
               (FAIL 95%, 0C/0H/1M/1L). Both findings were cross-references left stale when
               DES-103 closed the gap they describe — the tester had independently routed
               the same debt entry to the architect, so two roles found it separately.
               ISS-01 (Medium): §10.12.5 class (i) still listed FR-080 as having "no
               dedicated SCR, no DES surface element" and needing both. DES-103 IS that
               surface element and SCR-15 is bound; the row is now struck through and
               closed, with the genuine residual named (SCR-15 stays shared with candidacy
               nomination — a screen-inventory question, not a missing link). This tracker
               is operationally live: a tester or PM reading it would have treated a closed
               gap as open.
               ISS-02 (Low): the Wireframe → SCR table's 3.6 row called the Worker
               declaration "related but distinct" from SCR-15 and cited the now-closed debt
               entry as authority, directly contradicting the SCR → Wireframe table's
               SCR-15 row. Aligned to match, with the contradiction recorded rather than
               quietly overwritten.
               v2.9.2 (2026-08-29) — DES-103 completed for FR-080's informed-consent clause,
               after the TESTER's rule-4 check found the shipped surface did not satisfy it
               (Doc 08 v2.5.0). FR-080 requires the UI to state, BEFORE the declaration is
               confirmed, that Worker status is permanent for the term AND makes the
               member's participation record public. The drop's copy said only that it makes
               "what you put forward public for the term" — narrower on the second fact,
               silent on permanence — and there was NO confirmation step at all, so the
               requirement's "before … confirmed" had no moment to attach to. DES-103 now
               specifies the two-step consent event normatively (§5.2 row + §10.13.13), binds
               SCR-15 and SCR-12 (rule 1 also failed for want of an SCR on a requirement with
               an explicit UI obligation), and states that a one-click declaration is
               forbidden by construction. Code and tests landed with it (UT-0885/UT-0886).
               v2.9.1 (2026-08-29) — Rework cycle 1 against
               artifacts/reviews/03-architecture-design-sdd-v2.9.0-technical-cycle1.md
               (PASS 98%, 0C/0H/0M/1L — reworked anyway). ISS-01 (Low): the §5.2 DES-105
               row justified the competing-entry cutoff as "admitting one after the ballot
               opens would change what people already voted on", but entry actually closes
               one stage EARLIER, at debate, when no vote has been cast — the reason given
               was therefore not the reason the code implements. Corrected to name the
               debate cutoff and the actual rationale (the deliberation has by then been
               framed around a fixed set of options). §10.13.13's DES-104 subsection was
               already correct. Fixed despite passing: a design document that misstates the
               behaviour it governs is the exact defect class that produced the v2.8.0 High.
               v2.9.0 (2026-08-29) — PROPOSALS & DEBATE design, written ALONGSIDE the code
               drop it governs (the lesson from the party-creation and join/membership
               features, where the surface shipped and the RTM row stayed open for want of
               a DES). Four new elements in §5.2, normative specifications in §10.13.13:
               **DES-103** participation tiers (FR-079/FR-080) — three tiers, descriptive
               only, weight identical across all three; tier governs authorship for an
               ANONYMITY reason, not a merit one.
               **DES-104** proposal authorship & competing proposals (FR-024/FR-090) — the
               decision-window model, equal standing, and the capability-absence set that
               makes "the author never owns the ballot alone" checkable rather than merely
               asserted.
               **DES-105** deliberative lifecycle (FR-091) — the eight stages, one step at
               a time, with no skip/force/veto parameter anywhere in the surface.
               **DES-106** permanent decision trail (FR-092/FR-107) — append-only, copies
               out; and an honest v1 boundary: the trail is complete but held by us, so
               FR-092's "reconstructable from public data alone" additionally needs the
               DES-097 audit anchoring that is not built.
               CONFLICT RECORDED, NOT SILENTLY RESOLVED (§10.13.13 "Two open questions"):
               (a) FR-091's eight named stages are a DIFFERENT taxonomy from ADR-008's
               `PROPOSAL_STATE` consensus machine — both are implemented, the mapping is
               recorded, and which is normative at the v2 seam is owed to the architect and
               the PO; (b) the brief for this drop asked that PROPOSING be an FR-123
               counting action, but the COUNTING_ACTION allowlist is an approver-ratified
               three-value set (DES-100, 2026-08-24) and FR-024/FR-090/OI-14 gate authoring
               on self-declared Worker tier instead. The FR-conformant reading is built;
               the divergence is flagged for an approver ruling rather than resolved by
               extending a ratified allowlist.
               v2.8.3 (2026-08-29) — APPROVER RULING APPLIED (Rathish, 2026-08-29;
               artifacts/status/DECISIONS-2026-08-29-NONVIOLENCE-ENTRENCHMENT.md). The
               non-violence-clause amendment weakness found at v2.8.2 is recorded as its OWN
               tracked work item — **`PREREQ-01`** — and is explicitly **NOT folded into the
               on-chain governance increment**. It is a **BLOCKING PREREQUISITE**: that
               increment MUST NOT ship until the charter-as-clause-map refactor, the
               platform-immutable non-violence `clauseId`, and amendments-carrying-their-text
               are built and §10.13.10.1 rule 6's adversarial test — the one that fails
               against today's code — passes. Approver's rationale: CON-013 makes the clause a
               condition of a party's existence, so its protection must be a hard gate, not a
               line item that can slip under sprint pressure. Confirmed NOT exploitable in v1
               (no on-chain governance path, ADR-024 §(b)) — v1 work is NOT blocked.
               Edits: §13 debt row upgraded from "build owed in the Phase-3 increment" to the
               ruled `PREREQ-01` blocking prerequisite with the adversarial test named as
               closing evidence; §10.13.10.1 gains a "Governance status — PREREQ-01"
               paragraph and its security note records the ruling plus reviewer-qa's
               independent confirmation. No design changed — the mechanism specified at v2.8.2
               is unaltered; this version records its governance standing. Doc 13 absorbs
               `PREREQ-01` into the Definition-B milestone set at its next version.
               v2.8.2 (2026-08-29) — DES-101 completed for FR-077's SECOND HALF (§10.13.10.1).
               Self-correction: v2.8.0's §15 assessment claimed FR-077's RTM row was closeable
               once the DES link existed. That was WRONG, and the tester's rule-4 check caught
               it (Doc 08 v2.4.0): FR-077 requires refusal at publication AND at "every
               subsequent amendment"; DES-101 designed only the publication gate. Amendment was
               gated nowhere at either tier, and was UNDESIGNED — an architect gap, not a build
               gap. §10.13.10.1 now specifies it: (1) the charter becomes a CLAUSE MAP rather
               than one opaque blob hash, so `amendCharter` amends the named clause and cannot
               reach another — the structural fix, because entrenching one clause cannot protect
               a monolithic document that any single amendment replaces wholesale; (2) the
               non-violence clauseId is PLATFORM-immutable, written by the deployer for every
               party rather than left to founder election (entrenchment ratchet, DES-017);
               (3) amendments carry the text (or a text-binding proof) for the clause they name,
               because `amendCharter(clauseId, newCharterHash, newCharterCID)` never receives
               the charter text and so cannot verify it even in principle; (4) any future bulk
               replacement path MUST re-run the gate; (5) a v1 amendment path, when built, routes
               through the same `validateDraft` contract; (6) the closing evidence is an
               ADVERSARIAL amendment test — strip the clause while naming an unrelated one and
               assert refusal — which fails against today's code, as it should.
               HONEST STATUS: FR-077 stays OPEN (G-NOMECH). This moves it from undesigned to
               designed-and-unbuilt; it does not close it. §15's v2.8.0 row is corrected in
               place rather than quietly rewritten.
               SECURITY FINDING ROUTED: item (2)/(1) is a live weakness in shipped contract
               code — a party can today amend away the non-violence clause that CON-013 makes a
               condition of its existence, and `party_governance` is on in every environment.
               Not exploitable in v1 (no on-chain governance, ADR-024 §(b)); must be fixed
               BEFORE the on-chain governance increment ships. Recorded in §13; routed to
               reviewer-qa (next security scan) and the engineer (Phase-3 increment).
               v2.8.1 (2026-08-29) — Rework cycle 1 against
               artifacts/reviews/03-architecture-design-sdd-v2.8.0-technical-cycle1.md
               (FAIL 95%, 0C/1H/0M/0L). ISS-01 (High): DES-101 named the clause-gate refusals
               `CLAUSE_MISSING` / `CLAUSE_ALTERED`, which appear nowhere in the shipped
               validator — a DES that misdescribes the code it governs, and one a tester
               deriving assertions from it would have written wrong tests against. Corrected
               to the implementation's actual contract at ALL FIVE sites (the reviewer
               located three; the sweep found two more — the §5.2 DES-101 row and this Change
               block): `validateDraft` identifies each error by its **(field, code) pair**,
               and for this gate the field is `charter.nonViolenceClause` with `code:
               'REQUIRED'` (absent/empty) and `code: 'ALTERED'` (present but not
               byte-identical). Rule 2 now states the pair semantics explicitly and records
               that `REQUIRED` is the platform-wide missing-field code — also emitted for
               `name`, `pillars.*`, `emblem` — so it is the FIELD that scopes it to this
               gate, while `ALTERED` is unique to the gate. Option A taken (correct the
               document to the shipped, Approved code) rather than Option B (rename shipped
               code to match a document written after it). Constant location corrected to
               `packages/protocol/src/constants.js`.
               FOUND WHILE FIXING — routed, not silently corrected: **Doc 07 v2.3.0
               (Approved) carries the same wrong names plus three further inaccuracies** in
               TC-3508..TC-3510 — the non-existent path `packages/protocol/src/clauses.js`
               (the constant lives in `constants.js`), the field name
               `charter.clause_nonviolence` (actual: `charter.nonViolenceClause`), and the
               return shape `{ error: 'CLAUSE_ALTERED' }` (actual:
               `{ valid: false, errors: [{field, code, message}] }`). The tests pass because
               they assert the real behaviour; the DOCUMENT misdescribes it. Doc 07 is
               tester-owned — routed to the tester, not edited here.
               v2.8.0 (2026-08-29) — v1 DESIGN-DEBT PAYDOWN. Two Must rows (FR-077, FR-130)
               have shipped, tested code but stayed OPEN in the RTM purely because no DES
               existed in §5.2 — a chain defect no test can close. This increment writes the
               missing design for both, plus the store-wiring specification the v1 persistence
               build needs.
               NEW: **DES-101** — non-violence clause verification gate (FR-077, §10.13.10):
               verbatim-match rule, the (field, code) refusal contract, the
               constant-as-single-source-of-truth rule, the ratification-freeze binding
               (CON-013), and the v1→v2 enforcement-point pair. SCR binding: SCR-04, SCR-05.
               NEW: **DES-102** — provisional-party membership cap (FR-130, §10.13.11): the
               cap invariant at the membership-write boundary, UNCONDITIONAL until verified
               legal registration (Ruling 1, 2026-08-26 — no grace window); the code-only
               lift with no operator/bypass surface; ACTIVE-member counting semantics (a
               leave frees exactly one slot); the v1 enforcement point (application service
               + the DES-097(b) store, with the audit-record publication that makes the cap
               externally checkable) and the v2 on-chain enforcement point (`Party.join()`,
               between the `AlreadyMember` check and the `memberCount` increment);
               capability-absence obligations. SCR binding: SCR-09, SCR-11. Closes Q12.
               NEW: **DES-097(b)** — IPartyStore → Postgres store wiring (§10.13.12): the
               22-method interface-to-relation mapping, the append-only membership event log
               as the authoritative membership record, the retention boundary (composes with
               DES-100's allowlist/denylist — NO raw identity, hashed-only, verify-and-discard),
               transaction/concurrency rules for the invariants the in-memory store enforces
               by single-threading (FR-130 cap, FR-064 one-active-party, FR-010 collision
               TOCTOU), and the IS_INSECURE_MOCK=false promotion condition. Legally-gated
               retention specifics are marked **PENDING CON-015** rather than guessed.
               §5.2 gains the DES-101/DES-102 rows; §13 debt rows updated; §15 gains the
               v2.8.0 trace table; §16 Q12 closed and the next-increment note narrowed.
               SCOPE FENCE HELD: no v2 work pulled forward — DES-065 (FR-064 nullifier),
               circuits, MACI and the anonymity guarantees remain v2; no product code written.
               v2.7.1 (2026-08-25) — §10.12.3 rework cycle 1 (FAIL 91%/0C/0H/1M/2L;
               artifacts/reviews/03-architecture-design-sdd-v2.7.0-technical-cycle1.md):
               ISS-01 (Medium) `anon`-state copy analysis fully reworked — interpretive basis
               stated explicitly ("publicly linked through any published record", not
               "unreadable by operator"); India/TRAI SIM-registration linkage and subpoena
               path acknowledged (ADR-025 "Why phone over email"; Doc 02 H-16, H-18;
               §10.13.7 T-01, T-02); disclosure gap for non-vote `anon` contexts (screens
               1.2, 1.6, 2.3) resolved via option (a): clause 8 added to DES-094 normative
               binding list requiring accessible data-practices disclosure adjacent to `anon`
               pill in browsing/joining/endorsing contexts; `anon` subtitle unchanged (no
               v1 variant required under stated interpretive basis); `anon` state confirmed
               as rendering for authenticated open-tier (phone-verified, not
               government-ID-verified) users.
               ISS-02 (Low) Clause 7 annotated: `getProperties().unlinkable` is a proxy for
               the full "no identity at rest" guarantee; any future backing declaring
               `unlinkable: true` MUST satisfy same guarantee by design review before v2
               copy may render behind it.
               ISS-03 (Low) Prominent normative note added at three-state table header:
               clause 7 + backing-aware sub-table are the normative implementation spec;
               three-state table is informational reference copy; v1 default subtitle
               stated explicitly.
               v2.7.0 (2026-08-25) — **[REVERSED IN PART at v2.12.0: the FR-131 banned-words
               ruling recorded in this entry — that the `ver` title "Verified — private" is
               COMPLIANT in v1 — is OVERRULED (Doc 09 v1.3.0 REL-LIM-18 / ISS-03; approver
               2026-09-05). The v1 title is "Verified". The rest of this entry stands. Historical
               text retained per annotate-don't-delete.]**
               DES-094 backing-aware copy + carried debt ISS-A/ISS-B
               (approver directive Rathish, 2026-08-25; engineer FLAG A,
               artifacts/engineer-2026-08-24T2015.md):
               §10.12.3 DES-094 — `ver` state subtitle made backing-aware. FR-131 banned-words
               analysis conducted: title "Verified — private" is COMPLIANT — "private" describes
               the visibility of the holder's verified status (private to the holder; never
               published per-individual; aggregate-only by FR-124(b)), NOT voting behaviour;
               no change to title required. v1 subtitle decided: "Your vote counts. How you voted
               is never made public." — truthful for v1 (aggregate-only publication enforced by
               FR-124(b); does not claim identity is unstored; no banned words). v2 subtitle
               retained: "Your vote counts. Your identity is not stored." (truthful only for the
               ZK backing). Backing-aware copy sub-table added; anon/pub state analysis
               conducted and recorded (no v1 variants needed for either state). Clause 7 added
               to normative binding list: subtitle selection MUST be keyed off
               IEligibilityVerifier.getProperties() (DES-095); v2 copy renders only when
               getProperties().unlinkable = true; all other cases (including call failure /
               absent values) fall back to v1 copy (fail-honest default); cites FR-131,
               H-15, H-16, T-01, T-02. DES-094 element-table traces updated to add FR-131.
               §15 DES-094 amendment row added (v2.7.0 section).
               ISS-B: §1.1 body prose SRS v2.12.0 → SRS v2.13.0.
               ISS-A: ADR-025 §(e) Q-1 allowlist table age_verified row corrected from
               "at signup" → "at COUNTING-tier government-ID verification".
               v2.6.1 (2026-08-24) — Rework (review cycle 1 FAIL, 84%/0C/0H/3M/3L;
               artifacts/reviews/03-architecture-design-sdd-v2.6.0-technical-cycle1.md):
               ISS-01 (Medium) §10.13.9 DES-100 field table `status` row — purpose corrected:
               "used to gate account creation" → "used to determine COUNTING-tier eligibility
               (FR-123 actions)"; sibling rows swept — no additional pre-ruling residuals found.
               ISS-02 (Medium) §10.13.7 T-06 row — parenthetical rewritten: the
               `subject_id_hash` deduplication check runs at COUNTING-tier verification time
               across all sessions (not at account creation); "in one session" qualifier
               removed (deduplication is persistent across all sessions); framing corrected
               from "cannot create two accounts" to "cannot gain COUNTING-tier eligibility in
               two accounts using one government ID" (per ruling). ACCEPTED — DEFERRED WITH
               DISCLOSURE status and multiple-legitimate-IDs residual unchanged.
               ISS-03 (Medium) ADR-024 — (a) invariants table: "verifyEligibility call-site
               placement" row added (MUST be invoked at FR-123 COUNTING-action call sites;
               MUST NOT gate account creation or party-join; identical placement v1 and v2);
               (b) v1 backing description disambiguated in [AMENDMENT 2026-08-24] block
               ("live session" = COUNTING-action check, not account-creation check);
               (c) [AMENDMENT 2026-08-24] block added recording ruling and call-site placement;
               (d) §12 ADR-024 row annotated with 2026-08-24 amendment (matching ADR-025
               treatment).
               ISS-04 (Low) §10.13.9 DES-100 allowlist `age_verified` — "at signup" →
               "at COUNTING-tier government-ID verification".
               ISS-05 (Low) Source pin updated: v2.12.0 (In Review) → v2.13.0 (business
               cycle-2 PASS 99%; artifacts/reviews/02-requirements-srs-v2.13.0-business-
               cycle2.md); counts unchanged (21 BR · 133 FR / 131 active / 114 Must · 28 NFR
               · 15 CON · 27 RISK — v2.13.0 adds Gherkin scenarios only, no new IDs).
               ISS-06 (Low) §15 — v2.6.x amendment trace rows added: DES-095 amendment 3
               (FR-020, FR-122, FR-123 call-site placement; DECISIONS-2026-08-24-V1-ID-GATES-
               COUNTING.md); DES-098 FR-131 clause (d) extension; DES-100 counting-gate
               correction (FR-020, FR-122, FR-123, FR-124 composition).
Changelog:     v2.6.0 (2026-08-24) — Government-ID gates COUNTING, never joining (approver
               directive Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md):
               §10.13.2 DES-095 — normative call-site placement added: IEligibilityVerifier
               MUST be invoked at FR-123 COUNTING-action call sites (strength-number
               contribution, binding-ballot admission, candidacy nomination) and MUST NOT be
               called as a precondition of account creation or party-join; placement is
               identical for v1 conventional backing and v2 ZK backing — this is the
               architectural reason v1 and v2 share one participation model; seam invariants
               updated to describe COUNTING eligibility, not account admission. §10.13.6
               DES-098 — FR-131 clause (d) cross-reference added: UI must disclose non-
               counting status to open-tier participants at the point of a blocked COUNTING
               action and must explain how to become COUNTING-eligible. §10.13.7 T-06 —
               updated to ACCEPTED — DEFERRED WITH DISCLOSURE (approver, Rathish,
               2026-08-24); BR-003/FR-020 contradiction row marked RESOLVED (government-ID
               check does not gate joining; it gates COUNTING-tier eligibility only).
               §10.13.9 DES-100 — exclusion residual paragraph rewritten: a citizen without
               an accepted government-ID document CAN create an account, join a party, and
               participate in the open tier with phone verification alone; what they cannot do
               is take FR-123 COUNTING actions (contribute to official strength, vote in
               binding decisions, stand as a candidate); ADR-016 Aadhaar-exclusion precedent
               corrected to COUNTING-gate scope; FR-124 composition check recorded (verified
               status restricted-class; no public badge). §12 ADR-025 row annotated with
               2026-08-24 amendment. §1.1 source updated to SRS v2.12.0; counts unchanged
               (21 BR · 133 FR / 131 active / 114 Must · 28 NFR · 15 CON · 27 RISK — Doc 02
               v2.12.0 minted no new IDs). No new DES or ADR minted.
               v2.5.1 (2026-08-23) — Rework (review cycle 1 FAIL, 93%/0C/0H/1M/1L;
               artifacts/reviews/03-architecture-design-sdd-v2.5.0-technical-cycle1.md):
               ISS-01 (Medium) no-ID exclusion residual added — ADR-025 §(e) c-viii minted
               (citizen without accepted government-ID document cannot enrol in v1; BR-003/
               FR-020 contradiction row AWAITING APPROVER CONFIRMATION; H-19 cited; ADR-016
               Aadhaar-exclusion sentence is the house precedent); §10.13.9 DES-100 exclusion-
               residual note added. ISS-02 (Low) Source pin updated to SRS-TRUMOCRACY v2.11.0;
               §1.1 counts updated to v2.11.0 (21 BR · 133 FR / 131 active / 114 Must · 28 NFR
               · 15 CON · 27 RISK — unchanged from v2.10.0; FR-132/FR-133 amended not minted).
               v2.5.0 (2026-08-23) — ID-verification ruling applied (approver directive
               Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md):
               ADR-025 amended (§(e) added: government-ID document check alongside phone SMS;
               verify-and-discard retention rule; Q-1/Q-2/Q-3 architect answers; hashed phone
               HMAC-SHA-256/KMS-pepper; subject_id_hash same-document deduplication; FR-004
               plurality question resolved — single-vendor dated limitation, T-08 minted; CON-015
               now critical-path); DES-095 v1 backing updated — document check + phone_hash +
               subject_id_hash storage model (ADR-025 §(e)); DES-100 minted (§10.13.9) — v1
               ID-document verification flow, allowlist/denylist, HMAC design, Q-1/Q-2/Q-3
               rationale, legal-review routing; §10.13.7 conflict table: T-01..T-05 CONFIRMED
               (2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4); T-06 reshaped
               (same-document deduplication via subject_id_hash added; tension stands); T-07
               reshaped (hashed phone improves FR-003 PARTIAL; subject_id_hash adds derived
               identifier; CON-015 governs classification); T-08 minted (single-vendor ID-check
               concentration vs FR-004 plurality intent; architect-resolved as Phase-1 dated
               limitation); §12 ADR-025 amendment note added; §15 DES-100 row + DES-095
               amendment-2 row added; §1.1 updated to SRS-TRUMOCRACY v2.10.0. Five confirmations
               from §4 of decision record noted in §10.13.7 and §16. (PO increment to
               SRS-TRUMOCRACY v2.11.0 owed — architect answers gate PO's next version.)
               v2.4.1 (2026-08-23) — Rework (review cycle 1 FAIL, 94%/0C/0H/1M/0L;
               artifacts/reviews/03-architecture-design-sdd-v2.4.0-technical-cycle1.md):
               ISS-01 (Medium) §10.13.2 invariants corrected — "one-person-one-vote per scope"
               overclaim replaced with "one-vote-per-account per scope (v1) /
               one-vote-per-person per scope (v2)" with correct backing descriptions
               (`getProperties().onePersonOneVote = false` for v1; T-06, ADR-025 §(a));
               ADR-024 invariants table row corrected (same distinction); ADR-024
               `isUniqueInScope` semantics row corrected (same distinction). No other changes.
               v2.4.0 (2026-08-23) — v1 identity backing + spam-resistance layer (approver
               directives Rathish, 2026-08-23, Rulings 1–3,
               DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md): §10.13.2 DES-095 v1-backing
               amended — phone-based SMS auth named (FR-132, ADR-025); §10.13.8 added —
               DES-099 spam-resistance layer (phone-intelligence VoIP detection + velocity/
               device anti-fraud; flag-don't-block; FR-133; ADR-025 §(b)); §10.13.7 T-06
               (Charter Rule 1 vs phone-auth) and T-07 (FR-003 PARTIAL vs phone-number
               storage) rows added; §10.13.5 DES-097 ratification note added (Ruling 3 —
               blockchain-as-audit-record RATIFIED; transparency-now/privacy-later); ADR-024
               §(b) amendment note added. ADR-025 registered in §12 (ADR count twenty-four →
               twenty-five; ADR-001..ADR-024 → ADR-001..ADR-025). §15 DES-095 amendment row
               (FR-132) + DES-099 row (FR-133) added. §1.1 counts updated to SRS v2.8.0 (133
               FR / 131 active / 114 Must). Source updated to SRS-TRUMOCRACY v2.8.0.
               v2.3.1 (2026-08-23) — Rework (review cycle 1 FAIL, 90%/0C/1H/1M/1L;
               artifacts/reviews/03-architecture-design-sdd-v2.3.0-technical-cycle1.md):
               ISS-01 (High) §15 DES-098 row corrected — FR-130 was wrong (FR-130 = provisional-
               party membership cap; FR-131 = v1 honesty notice MUST, minted by PO, Doc 02
               v2.6.0, 2026-08-23); §15 DES-095 row FR range corrected (FR-121..130 →
               FR-121..129; FR-130 has no logical connection to IEligibilityVerifier seam);
               ADR-024 Traces section corrected (FR-121..FR-129, FR-131 in place of
               FR-121..FR-130); ISS-02 (Medium) §10.13.6 DES-098 "Backs" placeholder replaced
               with actual FR-131 reference; §18 C-02 closure note corrected — removed incorrect
               claim that "FR-130 backs the SCR-13/SCR-14 disclosure obligation" (FR-130 = cap,
               FR-131 = honesty notice, separate mintings); ISS-03 (Low) §10.13.7 legend added
               defining (i)/(ii)/(iii) notation. Source-pin: v2.5.0 → v2.6.0; §1.1 counts
               updated to SRS v2.6.0 (131 FR / 129 active / 112 Must). No other content changed.
               v2.3.0 (2026-08-23) — v1/v2 delivery-architecture split (approver directive
               Rathish, 2026-08-23): §10.13 added — v1/v2 architecture split, abstraction
               seams (IEligibilityVerifier DES-095, IBallotService DES-096), v1 conventional-
               auth backing (DES-097), v1 package disposition table, v1 honesty notice
               (DES-098, backs "FR — to be minted by PO this session"); Charter-layer conflict
               table (T-01..T-05, for approver's decision); ADR-024 registered in §12 (ADR
               count twenty-three → twenty-four; ADR-001..ADR-023 → ADR-001..ADR-024); §15
               DES-095..DES-098 traceability rows added. Two cascade items: (i) §18 C-02
               closure annotation applied — PO decided: accept, FR-130 minted (Doc 02 v2.5.0,
               DECISIONS-2026-08-22-WIREFRAME-C01-C02.md); (ii) ADR-016 amendment-block item
               (c) citizen-exclusion sentence added (ISS-01 from v2.1.4 deferred review
               cycle). §1.1 counts updated to SRS v2.5.0 (130 FR / 128 active / 111 Must).
               Source updated to SRS-TRUMOCRACY v2.5.0. No DES additions beyond DES-095..DES-098.
               v2.2.1 (2026-08-22) — Rework (review cycle 1 FAIL, 84%/0C/0H/2M/3L):
               ISS-01 §10.12.1(b) SCR coverage corrected (16 of 23 covered / 7
               uncovered, not 8/8); ISS-02 §10.12.4 Wireframe→SCR row for screen 3.4
               corrected to SCR-14 (partial) and §10.12.5 class (i) row revised (SCR-14
               partial coverage; remaining DES-063/FR-055 debt noted); ISS-03 changelog
               §18 entry count corrected to three (C-01..C-03); ISS-04 §10.12.3
               leak-check extended with 14th inline `.privacy pub` element on screen 3.6
               (wireframe line 450; self-view preview, not a component instance); ISS-05
               DES-094 normative binding clause 6 added (FR-124(e) no retroactive
               linkage, FR-086). No DES/ADR additions; no §15/§16/§18 structural changes.
               v2.2.0 (2026-08-22) — Design-system formalisation (approver directive
               Rathish, 2026-08-22; wireframe design/wireframes/index.html): §10.12
               added — assessment verdict, design token set (DES-093), privacy-status
               component (DES-094, three states, normative FR-124 privacy binding +
               leak-check PASS), SCR↔wireframe mapping table (15 screens × 23 SCRs),
               design-debt register (class i: 5 screens; class ii: 3 required absent
               screens), conflict register (C-01..C-04). ADR-023 registered in §12
               (design system & privacy-status signature element for packages/ui). §15
               DES-093/DES-094 traceability rows added. §16 Q11–Q14 open questions
               added. §18 three new entries (C-01 Aadhaar button hardcoding; C-02
               100-member cap unbacked; C-03 finance ledger screen absent); C-04
               ("illustrative threshold") is a confirmed-no-conflict disposition in
               §10.12.6 only, not a §18 contradiction. Referent correction applied: approver attributed
               verified-status-privacy ruling to "OI-19" — corrected to FR-124 ruling
               (Doc 02 v2.3.1, Rathish, 2026-08-20); OI-19 is the invite-gating ruling
               (FR-125); mislabel noted in architect memory note. §12 preamble ADR count
               twenty-two → twenty-three; ADR-001..ADR-022 → ADR-001..ADR-023. No
               changes to §1.1 counts; no changes to §9 repository structure.
               v2.1.5 (2026-08-21) — Ceremony-burden correction per REC-1/REC-2
               (DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md): ADR-022
               (Groth16-Phase-1 commitment — near-irreversible Charter-adjacent;
               PPoT Hermez reused at ~$0; assurance-based per-circuit phase-2; Gate-2
               six-circuit set) registered in §12; ADR-005 §12 row amended (Decision-2
               "≥ 500 contributors" convention superseded by assurance-based sizing per
               ADR-022; ceremony transparency/transcripts/beacon unchanged). §12 preamble
               ADR count twenty-one → twenty-two; ADR-001..ADR-021 → ADR-001..ADR-022.
               Doc 04 §Z6 ceremony-burden line corrected (v1.0.1 → v1.0.2). No DES
               additions; no §1.1 count change (already SRS v2.4.0; 129 FR / 127 active /
               110 Must).
               v2.1.4 (2026-08-20) — Registration-only: OI-19 and OI-20 closed (Rathish,
               2026-08-20; DECISIONS-2026-08-20-OI19-OI20.md). ADR-016 amended (OI-20
               ruling: FR-004 satisfied at architecture level; Phase-1 single-rail dated
               deployment limitation with Phase-2/eIDAS exit; 50% cap inoperative Phase-1;
               permanence requires Charter-layer re-entry — FR-129). ADR-021 amended (OI-19
               closed: FR-125 finalised, non-invite fallback mandatory; OI-20 closed:
               FR-004 architecture-level satisfaction, FR-129). §12 ADR-016 and ADR-021
               rows updated with dated amendment notes. §16 next-increment scope extended
               to FR-121..FR-129; tier-determination debt for FR-129 registered. §1.1
               counts updated to SRS v2.4.0 (129 FR / 127 active / 110 Must). No DES
               additions.
               v2.1.3 (2026-08-20) — Cycle-1 review rework
               (03-architecture-design-sdd-v2.1.2-technical-cycle1.md): ISS-01 preamble ADR
               count twenty/ADR-001..ADR-020 → twenty-one/ADR-001..ADR-021; ISS-02 §1.1 SRS
               citation updated to v2.3.0 counts (128 FR / 126 active / 109 Must / 15 CON);
               ISS-03 §12 ADR-016 and ADR-017 rows annotated with 2026-08-20 amendment notes
               (Phase-1 pilot rail named: India/Aadhaar offline KYC; OI-04-PILOT closed —
               ADR-021); ISS-04 ADR-021 "Decision 4" section retitled "Alternatives rejected"
               per ADR-016/017 house style (content unchanged). No DES additions.
               v2.1.2 (2026-08-20) — ADR-021 (verification-gates-counting) registered in §12;
               §16 next-increment scope note extended to include FR-121..FR-128 (DES coverage
               owed) and OI-19/OI-20 (approver-pending inputs to that increment); Source
               updated to SRS-TRUMOCRACY v2.3.0. No DES additions; no design content changed.
               v2.1.1 (2026-08-11) — Cycle-1 rework: ISS-01 §5.3 TrustAnchorLifecycle enum
               adds ROTATION_ABORTED state; ISS-02 sweep table row 4 citation corrected from
               publishOperationalReport §5.4 to FR-115(d)/NFR-019; ISS-03 DES-092 Tech column
               submitCitizenAuditRef → publishAuditRef (single entry point); ISS-04 §12
               ADR-019/020 rows note 2026-08-11 amendments; ISS-05 ADR-020 body state-machine
               diagram adds ROTATION_PENDING → ROTATION_ABORTED → ACTIVE path.
               v2.1.0 (2026-08-11) — Security-scan rework (SECURITY-SCAN-DOC03-V2-2026-08-11.md;
               approver directives Rathish 2026-08-11): SC-15 ProtocolGovernance + StewardRegistry
               designated IMMUTABLE CORE (§5.1, DES-087 general rule + routing surface exclusions);
               SC-16 per-constant Amendment Layer column + anti-circularity rule + setter mechanism
               (§10.11, DES-091); SC-17 citizen-initiated publishAuditRef fallback after
               STEWARD_INACTION_WINDOW=60 days/vacancy-immediate (DES-092, §5.4, §5.6, ADR-019
               amended); SC-18 abortRotation() + ROTATION_ABORTED state (DES-090, §5.4, §5.6,
               ADR-020 amended); SC-19 issuer-onboarding coordination citizen fallback (DES-092);
               SC-20 Guarded Layer quorum denominator = snapshotRoot enrolled count (DES-087,
               §10.11); SC-21 STRIDE undiscovered-bypass residual updated with SC-15 general-rule
               mitigation (§10.1); STEWARD_INACTION_WINDOW constant added to §10.11; single-
               point-of-progress sweep table added (§11); §18 SC-15..SC-21 scan-response entries.
               DES-092 minted.
               v2.0.3 (2026-08-11) — Cycle-3 rework: NN-01 §10.11 ordinary-revocation-timelock
               row corrected (enrol() continues until anchorEffectiveAt; not blocked at
               enactment); exhaustive sweep — 12 hits reviewed, 1 non-conforming fixed.
               v2.0.2 (2026-08-11) — Cycle-2 rework: NI-01 revocation-timing contradiction
               fixed at §5.2 DES-090 and §11 FR-112 row (REVOCATION_PENDING at enactment is
               on-chain signal; enrol() continues until anchorEffectiveAt; that window is
               RISK-30 residual); NI-02 §14 P4-growth-surge sub-case (a) "token transfer"
               corrected to "membership join/enrolment" (no tokens — ADR-007); NI-03 preamble
               ADR count eighteen/ADR-001..018 → twenty/ADR-001..020.
               v2.0.1 (2026-08-11) — Cycle-1 review rework (7 fixes): ISS-01 corrected
               emergency revocation voting bar from Guarded Layer (80%/25%) to Open Layer
               governance bar (60%/15%) in §10.1 DoS row and §10.11 emergency revocation row,
               with ACTIONS-vs-AMENDMENTS disambiguation note; ISS-02 ADR-019 property list
               renumbered to match OI-18's five verbatim-in-substance (growth-surge = P4,
               inter-vote window = P2), quorum explicitly marked as additional design
               requirement beyond OI-18 minimum, §14 growth-surge test hook added; ISS-03
               added SC-13 post-registration compromise sub-entry to §10.1 STRIDE Spoof
               (emergency revocation as mitigation, RISK-30 as residual); ISS-04 layer-naming
               rename throughout: Charter Layer / Guarded Layer / Open Layer replaces bare
               Tier-1/2/3 amendment-boundary labels across §5.2/5.3/5.4/5.6/10.1/10.11/
               11/14/15/16/17/18 and both ADRs, with §10.11 disambiguation note and §17
               Glossary entry distinguishing party T0..T3 tiers from platform amendment layers;
               ISS-05 §1.1 Must count corrected 97 → 101; ISS-06 changelog stale phrasing
               removed; ISS-07 anchor-rotation staleness SLA row added to §10.11 (30-day
               maximum from issuing authority announcement to on-chain vote open).
               v2.0.0 (2026-08-11) — Four-area increment directed by OI-18-DECISION-2026-08-11
               and GATE1-DECISION-2026-08-11: (A) FR-118/FR-119 amendment boundary — Charter
               Layer entrenched charter (seven rules, fork-only), Guarded Layer named-absolutes
               super-process, Open Layer ordinary path; (B) SC-13/SC-14 trust-anchor lifecycle
               — revocation and rotation specified, both findings closed at design level;
               (C) OI-17 governance constants table (§10.11) — values set with rationale,
               normative for Design; (D) DES elements for steward area FR-114..FR-120;
               DES-087..DES-091 minted; ADR-019 and ADR-020 written. Next-increment scope
               (recorded not hidden): full DES coverage of remaining v2.x requirement areas
               (FR-074..FR-111 beyond existing DES-064..DES-086) is the next design increment.
               v1.1.0 (2026-08-10) — CR-v1.1.0 nine-requirement update; DES-064..086 minted
               for FR-062..073 and 15 tester-identified RTM gaps; ADR-015..018 minted;
               ADR-003 amended by ADR-016 (cross-referenced in both files); §5.3 data model
               completed (proposal snapshotRoot, fork-initiation state, attester operator
               field); §5.4 signal arity corrected and missing entrypoints added; §10.1
               STRIDE extended (Governor.execute EoP row, attester-impersonation row);
               §10.2 identityCommitment cross-context linkability stated explicitly;
               §11 RISK-22/23/24 failure modes added; §9 CI topology added; §13 growth-sample
               liveness consequence corrected; §18 contradiction record added (OI-13 design
               consequence). Addresses all critical/high/medium findings from review cycle 1
               (artifacts/reviews/03-architecture-design-sdd-v1.0.0-technical-cycle1.md).
               OPEN-16 (stray ADR-017 references) resolved by engineer before this version.
               v1.1.1 (2026-08-10) — ISS-01/02/03/04 from cycle-1 technical review
               (artifacts/reviews/03-architecture-design-sdd-v1.1.0-technical-cycle1.md):
               added `snapshotAt` to vote() public signals (5-signal arity: index 0 =
               snapshotRoot, index 1 = snapshotAt); MUST checks rewritten in indexed form;
               §10.3 aligned to DES-078 (p95 interactive ≤ 5 s, removes contradicting 3 s
               figure); DES-068 party-switch exclusion stated explicitly (FR-064 clock reset
               not excused by destination-party waiver); RFC 2119 keywords added throughout
               §10.3–§10.9.
               v1.1.2 (2026-08-10) — SC-01 (critical; SEC-TRUMOCRACY-CR-2026-08-10): added
               `trustAnchorHash` (bytes32) and `verifierAddress` (address) to issuer struct
               (§5.3); enrol() signal vector expanded to 5 signals [Nᵢ, C, issuerId,
               namespaceId, trustAnchorHash]; on-chain MUST check added:
               `publicSignals[4] == issuers[issuerId].trustAnchorHash`; per-adapter-class
               verifier dispatch via `issuers[issuerId].verifierAddress` replaces single
               CIRCUIT_ENROL constant (`personhood_enrol_[class]`); DES-069 updated (trust-
               anchor commitment is a public input, checked on-chain); DES-070 updated
               (`verifierAddress` is the dispatch target for `enrol()`); Spoofing STRIDE row
               added (enrolment proof with attacker-chosen trust anchor); ADR-017 amended
               (per-class circuits/verifiers; trust anchor as public input to each adapter
               class's circuit).
```

> **Based on:** arc42 + C4 + Google design doc + IEEE 1016. **Produced in:** Design.
> The twenty-five decision records in `docs/adr/ADR-001..ADR-025` are normative and are
> summarised in §12; where this document and an ADR disagree, the ADR wins and this document
> is the defect.

---

## 1. Introduction & goals

### 1.1 Requirements overview

Trumocracy lets any verified citizen originate a political party, gather demonstrated public
support, and — on reaching a coded threshold — operate that party under rules that no
founder, financier or platform operator can override. The SRS v2.13.0 defines 21 `BR`, 133 `FR`
(131 active + 2 superseded; 114 Must), 28 `NFR` (24 Must), 15 `CON`, and 27 `RISK`. The
requirements that shape this architecture more than any others:

| ID | Requirement | Architectural consequence |
|---|---|---|
| BR-006 / NFR-004 | one real, unique human per participant | personhood is the **security boundary**, not a feature (ADR-003, ADR-016, ADR-017) |
| BR-009 / NFR-001, NFR-002 | proving identity must not expose identity | everything citizen-facing terminates in a ZK proof; k ≥ 1000 anonymity floor is checked on-chain (ADR-004, ADR-005) |
| BR-011 / NFR-003 | receipt-free, coercion-resistant voting | MACI with a threshold coordinator committee (ADR-006) |
| BR-010 | wealth must not buy influence | **no transferable instrument of any kind exists** (ADR-007) |
| BR-012 | resist flash takeover and mob charter capture | tiered decisions, snapshot eligibility, adaptive quorum, entrenchment, fork rights (ADR-008) |
| BR-008 | governance executes in code, not by discretion | immutable core; no admin, no pause, no proxy (ADR-010) |
| NFR-005 | median citizen action < USD 0.01 | Ethereum L2 + sponsored ERC-4337 (ADR-001, ADR-002) |
| NFR-022 / NFR-011 / NFR-012 | usable by a non-technical citizen on a 2 GB Android | passkeys, no seed phrase, no gas token, PWA, in-browser proving (ADR-002, ADR-012) |
| CON-003 | no single trusted operator, admin key or pause switch | the capability is *absent*, and its absence is tested (§10.1, §14) |

### 1.2 Quality goals (the five that shaped the architecture)

1. **Unlinkable participation** (NFR-001/002) — the system must be unable to answer "what is
   this person's politics", including under legal compulsion, including to us.
2. **Receipt-freeness** (NFR-003) — a voter who *wants* to prove their vote must fail.
3. **Non-purchasability** (BR-010) — no path converts money into governance power.
4. **Sub-cent participation** (NFR-005) — cost is a legitimacy property, not a performance one.
5. **Operator powerlessness** (CON-003, NFR-025) — no actor, ourselves included, can stop,
   alter or reverse a party's decision.

Where these conflict, the resolution order is: **1 and 2 before 3 and 5 before 4**. Privacy
and coercion resistance are never traded for cost or convenience.

### 1.3 Goals and non-goals

**Goals.** Party incubation and petitioning; equal, unapproved membership; tiered internal
governance with real anti-capture properties; region-scoped internal candidate selection and
recall; immutable public manifesto history; a fully transparent, non-influence-conferring
treasury; and an exit path for every party.

**Non-goals — stated so nobody builds them by accident.**
- **Not a state ballot system.** "Election" in this codebase always means an internal party election (CON-001).
- **Not a content moderator.** No political content rule (ADR-013 §4).
- **Not a social network.** No feeds, follows, DMs or engagement metrics.
- **Not a token.** No coin, no NFT membership, no points (ADR-007).
- **Not an identity provider.** We consume attestations; we never issue them (ADR-003).

### 1.4 Stakeholders & concerns
Per SRS §2.7. Dr. Kowalczyk (privacy) holds veto over anything that widens the linkability
surface; Rafael Duarte (security) owns the threat model in §10.1; Nadia Hassan (accessibility)
owns the device and bandwidth floor; Sofia Marchetti (legal) owns the jurisdiction boundary.

## 2. Constraints

| ID | Constraint | Where it binds |
|---|---|---|
| CON-001 | parties only, never state elections | §1.3, ADR-013 |
| CON-002 | no custody of documents, biometrics or addresses | §5.3 deliberately-absent list |
| CON-003 | no admin key, pause switch or privileged role | §5.1 core contracts; capability-absence tests §14 |
| CON-004 | open source, reproducible builds | ADR-011, ADR-012 §4 |
| CON-005 | electoral/political-finance law varies per jurisdiction | treasury jurisdiction-configurable; launch per-region gated |
| CON-006 | no token or fundraising instrument | ADR-007 |
| CON-007 | USD 4.2M / 18 people through launch | phasing in Doc 13 |
| CON-008 | immutability vs erasure rights | ADR-013 §2 |
| CON-009 | third-party population statistics | median + drift limit + verified-resident floor (ADR-004 §4) |
| CON-010 | app-store political restrictions | PWA-first, IPFS/Arweave mirrors (ADR-012 §4) |
| CON-011 | 2 GB RAM / Android 9 / 64 kbit/s floor | caps circuit size at ≤2^17 constraints; caps initial JS at 200 KB |
| CON-012 | no bespoke unaudited cryptography | Circom/Groth16, Semaphore-family, MACI — existing, audited primitives |

## 3. Context & scope (C4 L1)

### 3.1 Business context

```
                    ┌───────────────────────┐
   citizen ────────▶│                       │◀──── personhood issuers (GOV_EID class, Phase 1)
   (phone/PWA)      │      TRUMOCRACY       │      (eIDAS 2.0 wallets · ICAO 9303 NFC chips
                    │                       │       · offline paper KYC adapters — ADR-016/017)
   journalist ─────▶│  petitions · parties  │
   auditor          │  membership · votes   │◀──── residency attesters
   (public read)    │  manifestos · treasury│      (civil registry, utility/KYC, NGOs)
                    │                       │
   election  ◀──────│  (evidence only, via  │◀──── population statistics sources
   commission       │   a human officer)    │      (census, electoral roll, UN, World Bank)
                    └───────────┬───────────┘
                                │
                    Ethereum L2 (settlement) · IPFS + Arweave (content) · L1 (escape hatch)
```

### 3.2 Technical context

| Interface | Direction | Data crossing | Protection |
|---|---|---|---|
| citizen ↔ client | both | identity secret, witness data, proofs | **never leaves the device except as a proof**; enclave-held signing key |
| client → chain | out | proofs, nullifiers, commitments, roots, content hashes | public by design; contains nothing personal |
| issuer → client | in | signed credential | consumed on-device; only a nullifier is ever published |
| attester → chain | out | residency leaf (a Poseidon commitment) | components never transmitted |
| client ↔ indexer | both | public state queries | no logging of reader identity or IP (ADR-014) |
| client → IPFS/Arweave | out | manifesto/proposal/debate-content documents | public, content-addressed |
| stats sources → chain | out | population integers | median of ≥5, 7-day dispute window, ±5%/quarter drift cap |

## 4. Solution strategy

Six decisions carry the design; everything else follows from them.

1. **Put only commitments on-chain.** Roots, nullifiers, tallies and content hashes (ADR-009).
2. **Make personhood pluggable and plural.** GOV_EID class in Phase 1; 1-of-N resumes at Phase 3+ (ADR-003, ADR-016, ADR-017).
3. **Scope every nullifier.** Uniqueness per action, unlinkability across actions (ADR-003, ADR-017).
4. **Remove transferable power entirely.** Not "mitigate flash loans" — *delete the asset* (ADR-007).
5. **Defend the charter with time, thresholds, transparency and exit** — never with privilege (ADR-008).
6. **Build the core with no way to intervene.** No admin, no pause, no proxy (ADR-010, ADR-013 §3).

## 5. Building-block view

### 5.1 Container diagram (C4 L2)

```
┌── apps/web (Next.js PWA) ───────────────────────────────────────────────┐
│  passkey account · WASM prover (Web Worker) · local-first cache          │
│  refuses unknown zkeyHash · verifies indexer claims against chain        │
└───────┬──────────────────────────┬──────────────────────┬───────────────┘
        │ @trumocracy/sdk          │ read                 │ fallback
        ▼                          ▼                      ▼
┌── services/relayer ────┐  ┌── services/indexer ──┐  ┌── L1 force-inclusion ──┐
│ ERC-4337 bundler +     │  │ events → read model  │  │ censorship escape      │
│ paymaster (per-        │  │ NON-AUTHORITATIVE    │  │ hatch, always on       │
│ nullifier rate limit)  │  │ no reader logging    │  └────────────────────────┘
└───────┬────────────────┘  └──────────┬───────────┘
        │                              │
        ▼                              │
┌── Ethereum L2 ─────────────────────────────────────────────────────────┐
│  IMMUTABLE CORE            │  TIMELOCKED REGISTRIES   │  MODULES        │
│  PersonhoodRegistry        │  VerifierRegistry        │  Governor       │
│  RegionRegistry            │  (issuer set)            │  Elections      │
│  PartyRegistry             │  (attester set)          │  Recall         │
│  Party                     │  (population oracle)     │  Treasury       │
│  ProtocolGovernance (SC-15)│                          │  FeatureFlags   │
│  StewardRegistry  (SC-15)  │                          │                 │
│  no admin · no pause · no proxy · no governance-vote replacement (ADR-010; SC-15 general rule) │
└────────────────────────────────────────────────────────────────────────┘
        │ content hashes
        ▼
┌── IPFS (hot, pinned) ──┐   ┌── Arweave (permanent mirror) ──┐
```

### 5.2 Component breakdown

> **SCR assignments (provisional; architect confirms, splits or merges per SRS §5.1):**
> SCR-21 = Participation profile surface (FR-062, FR-063); SCR-22 = Debate scheduling and
> attendance surface (FR-066, FR-067); SCR-23 = Candidate feedback voting surface (FR-065).

| ID | Component | Responsibility | Satisfies | Tech |
|---|---|---|---|---|
| DES-001 | `PersonhoodRegistry` | issuer set, enrolment nullifiers, scope nullifiers, identity tree | FR-001..005, NFR-004 | Solidity, LeanIMT/Poseidon |
| DES-002 | issuer adapter interface | 1-of-N pluggable personhood proof (ADR-017) | FR-004, FR-070, RISK-05 | `ICredentialAdapter` |
| DES-003 | per-issuer epoch cap | limits blast radius of a compromised issuer | FR-005, RISK-05 | on-chain counter |
| DES-004 | `RegionRegistry` regions | versioned hierarchical codes, ≤ ward granularity | FR-007, NFR-001 | Solidity |
| DES-005 | per-region residency tree | membership-provable residency without addresses | FR-006, FR-008 | LeanIMT/Poseidon |
| DES-006 | attester federation + operator binding | plural, disputable residency issuance; `issueResidency()` requires `caller == attester.operator` (ISS-C3 fix) | FR-006, RISK-05 | stake + slash + operator field |
| DES-007 | population oracle | median of ≥5 sources, 7-day dispute, ±5%/quarter drift cap | FR-009, RISK-12 | Solidity |
| DES-008 | anonymity-set guard (k ≥ 1000) | refuses to publish an action that would identify by elimination | NFR-002 | on-chain check + client escalation |
| DES-009 | `PartyRegistry` petitions | draft → petition → threshold → activation, no human step; name+emblem collision check | FR-010, FR-013..018 | Solidity |
| DES-010 | threshold formula w/ floor | `max(pct×pop, pct×verified, 500)` | FR-016, RISK-12 | Solidity |
| DES-011 | endorsement nullifier scope | one endorsement per person per petition | FR-014, NFR-004 | scoped nullifier |
| DES-012 | endorsement withdrawal | reversible before activation, separately scoped | FR-015 | Solidity |
| DES-013 | `Party` membership tree | join/leave, unconditional, non-transferable | FR-020..023, BR-003 | LeanIMT/Poseidon |
| DES-014 | tenure record | eligibility input only — never a weight | FR-021, ADR-007 §2 | `joinedAt`/`leftAt` |
| DES-015 | growth sampler + `AnomalousGrowth` | detects membership surges | BR-012, RISK-04 | Solidity |
| DES-016 | `GovernanceRules` tier table + tier↔action binding | quorum/approval/tenure/timelock/discussion per tier; `execute()` binds tier to permitted action class (ISS-H1 fix) | FR-025, FR-026 | Solidity library |
| DES-017 | charter ratchet | a charter may be stricter, never weaker | FR-012, RISK-04 | validation on read |
| DES-018 | `Governor` proposals | tiered, snapshotted, discussion-then-voting | FR-024, FR-028 | Solidity |
| DES-019 | snapshot eligibility + root binding | joining after open confers no power; `proposal.snapshotRoot` MUST equal voter's `partyRootAtSnapshot` (ISS-C1 fix) | FR-028, RISK-03/04 | root + tenure at snapshot |
| DES-020 | adaptive quorum | surge ⇒ +5 pts approval, ×2 window (T2/T3 only) | BR-012, RISK-04 | Solidity |
| DES-021 | timelock + permissionless execute | delay proportional to tier; no privileged executor | FR-026 | Solidity |
| DES-022 | entrenched/immutable clauses | a party can bind its future self | FR-027 | founding-time only |
| DES-023 | MACI message queue | encrypted ballots, key-change override | FR-030..032, NFR-003 | MACI + Groth16 |
| DES-024 | threshold coordinator (5-of-7) | no single party can decrypt a ballot | NFR-003, RISK-07 | DKG across jurisdictions |
| DES-025 | tally proof + public verifier | anyone can re-compute the result | FR-033, FR-055 | `apps/verifier` |
| DES-026 | interim-tally suppression | no partial counts before close | FR-034 | client + indexer policy |
| DES-027 | self-nomination only, region-scoped | you may stand only where you live | FR-036 | Solidity |
| DES-028 | candidate consent record | explicit, separate, irreversible-for-term disclosure | FR-037, FR-038 | Solidity + client copy |
| DES-029 | office assignment on close | automatic, no confirmation step | FR-040, FR-041 | Solidity |
| DES-030 | two-stage recall | signature threshold then ballot | FR-042..045 | Solidity |
| DES-031 | manifesto version chain | append-only, diffable, permanently public | FR-046, FR-047 | on-chain hash + IPFS/Arweave |
| DES-032 | attributed office-holder votes | officials vote publicly; citizens vote secretly | FR-048 | Solidity |
| DES-033 | treasury caps + ledger | per-person cap by nullifier, itemised public record | FR-049..052 | Solidity |
| DES-034 | fork with lineage | ≥10% initiators (on-chain counted, ZK-proven), 30-day cooling-off, permanent lineage (ISS-C2 fix) | FR-053, RISK-04 | Solidity |
| DES-035 | event schema for auditors | every governance action emits a public event | FR-054 | Solidity events |
| DES-036 | region freeze on issuance anomaly | quorum freeze pending review | RISK-05, RISK-01 | timelock action |
| DES-037 | `FeatureFlags` on-chain | ship dark applies on-chain, not only in the client | NFR-020 | Solidity |
| DES-038 | `VerifierRegistry` + `zkeyHash` | binds circuits to their published ceremony | RISK-10 | Solidity |
| DES-039 | supersede grace window | an upgrade never invalidates in-flight proofs | NFR-017 | 30-day dual-accept |
| DES-040 | passkey + 4337 smart account | no seed phrase, no gas token, no cryptocurrency concept | FR-058, FR-060, NFR-022 | ERC-4337, RIP-7212 |
| DES-041 | L1 force-inclusion transport | sequencer censorship fallback, wired into the SDK | NFR-014, NFR-025, RISK-09 | `OptimismPortal` |
| DES-042 | social recovery, 7-day timelocked | recover without a recovery company | FR-058, FR-059, NFR-016 | guardians + owner veto |
| DES-043 | paymaster per-nullifier budget | sponsorship cannot be drained by Sybils; exhaustion queues at zero cost | FR-061, NFR-005, RISK-15 | relayer policy |
| DES-044 | party state export | exit right, tested in CI | NFR-018 | SDK + `apps/verifier` |
| DES-045 | pure `@trumocracy/protocol` | reference rules, differentially tested vs chain | NFR-021 | JS, zero deps |
| DES-050 | reproducible static bundle | anyone can verify the served client | NFR-014, RISK-08 | pinned toolchain + hash job |
| DES-051 | multi-transport client | bundler → alt bundler → queue → self-pay (censorship only) → L1 | NFR-007, NFR-014 | SDK |
| DES-052 | client zkey pinning | refuses to prove with an unregistered proving key | RISK-10 | client |
| DES-063 | safe confirmation + panic re-vote | screen safe to show a coercer | NFR-003, RISK-02 | client |
| DES-064 | participation profile surface | per-person public page: ballot participation (direction withheld), party memberships, endorsed petitions, authored proposals, attended debates; MUST NOT ship until OI-13 resolved | FR-062, FR-063, SCR-21 | apps/web; indexer |
| DES-065 | single-party membership nullifier | global scope nullifier `keccak("membership", personhood)` enforces one-party-at-a-time; join-B burns join-A nullifier automatically; tenure clock resets on switch | FR-064 | PersonhoodRegistry |
| DES-066 | candidate feedback scorer | per-candidate-per-election nullifier; upvote +3, downvote −1 (ADR-015); private votes _(v2.14.0 — v2.13.0 carried Low **ISS-C2-02**, discharged: "private votes" here is a **Definition-B (v2) property** and is annotated, not deleted. In **Definition-A (v1)** the platform database **CAN** see the direction of a candidate-feedback vote (FR-131(b)); privacy of the individual vote arrives with the MACI/ZK layer (ADR-006, DES-095/DES-096, §10.13.1). FR-131 does **not** bind this cell — it is internal design rationale in a DES register, not product copy — but the element is **v1-reachable**, and v2.13.0's own ISS-04 finding was that this document's diagnosis of the v2.7.0 failure is that **a reader does not parse the distinction**. The standing FR-131 bare-word sweep widened at v2.13.0 is what found it; it is corrected here rather than left to be rediscovered.)_; public tally | FR-065, ADR-015, SCR-23 | Elections; Solidity |
| DES-067 | debate lifecycle | Elections contract: schedule 3 debates per candidate; off-chain content CID on-chain; attendance attestation; post-debate member vote determines candidacy | FR-066, FR-067, SCR-22 | Elections; IPFS |
| DES-068 | tenure waiver flag for new parties | `newPartyWaiverActive(partyId)` = party age < 3 calendar months; waives one-month tenure check only; FR-023 surge defence + FR-028 snapshot remain active. **Party-switch exclusion (FR-064):** a tenure clock reset by a party switch is NOT excused by the destination party's waiver — the waiver covers a party's founding cohort only, not members arriving by switch; a member who leaves party A and joins party B MUST be rejected at `vote()` if fewer than one month has elapsed since joining, unconditionally regardless of party B's age. | FR-068 | Governor |
| DES-069 | in-circuit enrolment nullifier | `Poseidon(stable_id_secret, enrolment_scope)`; universal in-circuit checks: issuer authenticity, freshness, region, correct derivation; trust-anchor commitment is a **public input** to the enrolment circuit and MUST be checked on-chain against `issuers[issuerId].trustAnchorHash` (SC-01); no identifier leaves circuit (ADR-017) | FR-069, ADR-017 | circuits/personhood_enrol_[class] |
| DES-070 | credential adapter interface + registry | `ICredentialAdapter`: credentialClass, namespaceId, verifierAddress; `verifierAddress` is the dispatch target for `enrol()` — per-adapter-class verifier, not a shared CIRCUIT_ENROL constant (SC-01); per-class in-circuit requirements (ADR-017); region-level config, not hardcoded | FR-070, ADR-017 | ICredentialAdapter; PersonhoodRegistry |
| DES-071 | nullifier-collision recovery state machine | RECOVERY_PENDING → veto or 7-day delay → KEY_ROTATED / ABORTED; `isInRecovery` blocks `vote()`; independent on-chain veto path; notification on initiation (ADR-018) | FR-071, FR-072, ADR-018 | PersonhoodRegistry |
| DES-072 | government-eID class enforcement | `credentialClass == GOV_EID` checked at `enrol()`; AVAILABILITY_ONLY issuers reverted with `NotEnrolmentClass` (ADR-016) | FR-073, ADR-016 | PersonhoodRegistry |
| DES-073 | name + emblem collision guard | `PartyRegistry.createPetition` rejects a name or emblem that collides (case-normalised) with any open petition or active party in the same jurisdiction; on-chain name registry | FR-010 | PartyRegistry |
| DES-074 | eight-pillar minimum-substance gate | `PartyRegistry.publishDraft` checks: all 8 pillars present, each ≥ published character floor; named rejection per deficient pillar | FR-011 | PartyRegistry |
| DES-075 | no-transfer invariant (capability absence) | no `transfer`, `approve`, `delegate` or `assign` function exists on Party, Governor, or Elections; ABI-surface assertion enforced in CI | FR-035, ADR-007 | Solidity; CI |
| DES-076 | election scope guard + immutable timetable | Elections contract: `vote()` restricted to members with active residency in the election's region; timetable, candidate set and tie-break rule immutable after `openElection()` | FR-039 | Elections |
| DES-077 | operator-capability absence: no delete/edit/suspend/alter/reorder | no function with those semantics exists in any core contract; verified by ABI-surface assertion (first-class CI test) | FR-056, ADR-010 | Solidity; CI |
| DES-078 | performance budget constraints | initial JS ≤ 200 KB; p95 interactive ≤ 5 s on 4× throttled mid-range Android over Slow 4G; proof ≤ 10 s worst-case on reference device; finalisation on-chain ≤ 120 s p95 | NFR-006 | apps/web; circuits |
| DES-079 | audited-primitive policy + independent pre-Gate-2 audit | CON-012: all privacy/personhood/ballot properties rest on audited constructions; independent security audit with 0 critical/high required before Gate 2 | NFR-009 | all layers |
| DES-080 | data-minimisation schema guard | §5.3 deliberate-absence list is the normative schema; CI checks the on-chain ABI and storage layout for forbidden field names/types | NFR-010 | Solidity; CI |
| DES-081 | WCAG 2.2 AA design constraints | all primary flows meet WCAG 2.2 AA; fully operable by screen reader and keyboard/switch; 200% text scaling | NFR-011 | apps/web |
| DES-082 | device/bandwidth floor constraints | ≤ 15 MB install; every primary flow completable at 64 kbit/s intermittent; offline draft composition with deferred submission | NFR-012 | apps/web; SDK |
| DES-083 | i18n / RTL design constraints | ≥ 8 launch languages; ≥ 1 RTL script; zero untranslated primary-flow strings; date/number/name format localisation | NFR-013 | apps/web; packages/ui |
| DES-084 | legal compliance posture | erasure by non-collection (ADR-013 §2); per-jurisdiction feature gating + legal review before enablement (CON-005); transparency report (FR-057) | NFR-015 | ADR-013; legal review |
| DES-085 | UX writing + jargon filter | grade-8 reading level; no primary-flow occurrence of wallet/seed phrase/private key/gas/token/mint/chain/block/hash; CI scan enforces | NFR-023 | apps/web; packages/ui |
| DES-086 | anti-harassment capability-absence | no identity/contact-detail/location-below-region/activity-pattern surface per member; recall and nomination flows designed without targeted individual notification; absence tested as first-class CI control | NFR-024 | apps/web; Solidity |

**Platform governance & stewardship (v2.0.0 — OI-18 / FR-114..FR-120 / SC-13 / SC-14)**

| ID | Component | Responsibility | Satisfies | Tech |
|---|---|---|---|---|
| DES-087 | `ProtocolGovernance` contract | Three-layer amendment boundary: (Charter Layer / Tier 1) immutable registry of the seven entrenched rules — code rejects any proposal targeting them at submission with no exception path; (Guarded Layer / Tier 2) super-process state machine (five-property enforcement — see §5.6); (Open Layer / Tier 3) ordinary citizen-vote path per NFR-017 and §10.11 constants. GENERAL RULE (SC-15): any contract that enforces a Charter Layer rule MUST itself be Charter Layer — otherwise the entrenchment is decorative. Accordingly, `ProtocolGovernance` and `StewardRegistry` are deployed as IMMUTABLE CORE (no admin, no pause, no proxy, non-upgradeable); they are listed in the §5.1 IMMUTABLE CORE box and inherit the ADR-010 guarantees. The `permittedActionClass` table for Open Layer and Guarded Layer MUST NOT include any selector that: (a) deploys a competing governance contract, (b) upgrades or replaces `ProtocolGovernance` or `StewardRegistry`, (c) redirects the `GovernanceConstants` reference pointer, or (d) calls any setter on `GovernanceConstants` without the layer-appropriate passed vote (see DES-091). No routing surface (proxy/upgrade path, registry pointer, `Governor.execute` action class) may circumvent these contracts. An unamendable contract that can be routed around is no better than an amendable one. QUORUM DENOMINATOR (SC-20): the Guarded Layer quorum denominator for BOTH votes is the enrolled citizen count at `snapshotRoot` time (fixed at `proposeAmendment()`), consistent with the P4 snapshot-immutability property; an organic enrolment surge during the 180-day inter-vote window does NOT raise the quorum target for the second vote. | FR-118, FR-119, BR-021, BR-008 | Solidity; state machine per §5.6 |
| DES-088 | `StewardRegistry` contract | Steward election via existing ballot mechanics, platform-scoped; fixed terms and expiry per §10.11; affirmative-quorum recall per §10.11; term record (holder commitment, term start/expiry, recall state); no issuer-class function — the registry is platform-level only | FR-114, BR-021 | Solidity; Governor ballot |
| DES-089 | `StewardPowers` boundary | The FR-115 enumerated-power allowlist is the ONLY set of functions the registry exposes on behalf of stewards: (a) draft/publish a protocol proposal; (b) coordinate an independent audit, trusted-setup ceremony, or credential-issuer onboarding; (c) hold funds and sign a vendor contract; (d) publish an operational report. No citizen-path contract imports or references `StewardRegistry` — the FR-117 capability-absence property is achieved BY CONSTRUCTION: zero citizen flow can be blocked by steward vacancy because no citizen flow calls the registry. CITIZEN-FALLBACK CAVEAT (SC-17 / SC-19): stewards COORDINATE, never gatekeep; the citizen-inaction fallback mechanism (DES-092) applies to power (b) for audit publication and issuer-onboarding initiation — steward inaction or vacancy cannot permanently block a citizen-entitled process. | FR-115, FR-116, FR-117, BR-021, CON-003 | Solidity ABI allowlist; CI capability-absence assertion |
| DES-092 | Citizen-inaction fallback mechanism | Shared pattern applied in two contexts: (1) AUDIT PUBLICATION (SC-17) — after a steward-inaction window (value: §10.11) following a passed Guarded Layer first vote, ANY enrolled citizen may call `publishAuditRef(proposalId, auditRefHash)` to publish the audit reference; steward VACANCY triggers the fallback IMMEDIATELY (no window); the audit substance requirements (independence, scope, 30-day lead time) are UNCHANGED — the fallback changes who may publish, never what qualifies; (2) ISSUER ONBOARDING (SC-19) — after a steward-inaction window following a citizen petition for issuer-onboarding review (threshold: Open Layer quorum, 15%), a citizen-run coordination panel may open the onboarding technical review; stewards coordinate normally but cannot use inaction to suppress issuers serving specific demographic groups. Both fallbacks require a passed governance vote for final enactment (via `Governor.execute()`); the fallback changes only the coordination/publishing step. | FR-115, FR-116, BR-021 | Solidity; `ProtocolGovernance.publishAuditRef()`; citizen-petition tracking |
| DES-090 | `TrustAnchorLifecycle` | Rotation: `rotateTrustAnchor(issuerId, newAnchorHash)` enacted only by a passed governance vote executed by code (ruling 4); activates a dual-anchor overlap window (old + new both accepted until `overlapEnd`) so a compliant rotation never blocks enrolment beyond the published window (closes SC-14). ROTATION ABORT (SC-18): `abortRotation(issuerId)` enacted by a passed governance vote at the same Open Layer bar (60%/15%) as the original rotation; transitions ROTATION_PENDING → ROTATION_ABORTED → ACTIVE (incumbent/pre-rotation hash restored as sole-accepted anchor); credentials signed with the pending anchor during the overlap window are rejected for new enrolments after abort enactment (no retroactive invalidation of already-completed enrolments). Rationale: without this path the only safe undo of a malicious rotation was full issuer revocation (REVOCATION_PENDING), which blocks ALL enrolments for 30+ days — a self-inflicted denial of service against legitimate users; ROTATION_ABORTED returns to ACTIVE with zero enrolment blocking. Revocation: `revokeTrustAnchor(issuerId)` enacted only by a passed governance vote executed by code; entering `REVOCATION_PENDING` at enactment is the public on-chain signal; `enrol()` against the affected anchor continues until `anchorEffectiveAt` (timelock expiry) and reverts `AnchorRevoked` from then on; the window between enactment and `anchorEffectiveAt` is the accepted RISK-30 residual (mitigated by per-issuer epoch cap); already-enrolled credentials untouched (closes SC-13). No operator or steward may call any lifecycle function directly — callable only from `Governor.execute()` with a validated `permittedActionClass` | FR-112, FR-113, DES-016, ADR-017, ADR-008 | Solidity; `Governor.execute()`; `permittedActionClass` binding |
| DES-091 | `GovernanceConstants` module | OI-17 closure: publishes the full governance-constant table (§10.11 values). CLASSIFICATION (SC-16): each constant is normatively classified as Guarded Layer (requires Guarded Layer amendment to change) or Open Layer (requires Open Layer amendment to change); classification is listed in the §10.11 table's Amendment layer column. ANTI-CIRCULARITY RULE: the Guarded Layer super-process constants themselves (Tier-2 quorum, Tier-2 supermajority, inter-vote window, audit lead time, steward audit-inaction window) MUST be Guarded Layer minimum — an Open Layer coalition MUST NOT be able to lower the Guarded Layer bar by amending these constants at the Open Layer threshold; if the Guarded Layer quorum constant were lowered by an Open Layer vote, the Guarded Layer protection would be undermined at its foundation. SETTER MECHANISM (SC-16): "immutable-at-deployment" means the initial deployment values cannot be overridden by a constructor argument; the values are revisable post-deployment only by a `Governor.execute()` call carrying a passed vote at the constant's governing layer; the contract exposes a governance-controlled setter guarded by `onlyGovernor` — any call not routed through `Governor.execute()` reverts; this resolves the apparent tension between "immutable" and "revisable." | FR-119, NFR-017, BR-021 | Solidity; `onlyGovernor` setter guard; layer-keyed permittedActionClass |

**v1 party-lifecycle design-debt paydown (v2.8.0 — FR-077, FR-130)**

These two elements close chain gaps, not build gaps: both requirements already have shipped,
tested implementations (Doc 06 v2.3.3 Approved), and both RTM Must rows stayed OPEN solely
because §5.2 named no design element. Full normative specifications in §10.13.10 and §10.13.11.

| ID | Component | Responsibility | Satisfies | Tech |
|---|---|---|---|---|
| DES-101 | non-violence clause verification gate | `NON_VIOLENCE_CLAUSE` (`packages/protocol/src/constants.js`) is the single source of truth; draft validation refuses publication on `field: 'charter.nonViolenceClause'` with `code: 'REQUIRED'` when the clause is absent and `code: 'ALTERED'` when it differs from the canonical text by any byte; no partial-credit, fuzzy or semantic match; no operator or configuration path may waive the check. Clause text is frozen in code pre-ratification (CON-013); changing it is a protocol governance action (ADR-010). v1 enforcement at protocol + service + web; v2 adds `PartyRegistry.publishDraft` as the trust-minimised enforcement point | FR-077, CON-013, SCR-04, SCR-05 | packages/protocol; packages/sdk; apps/web; (v2) PartyRegistry |
| DES-103 | participation tiers + Worker informed-consent event | Three tiers per party — Supporter (assigned on join), Worker (self-declared, no approval), Candidate. Descriptive metadata ONLY: `votingWeightForTier()` returns 1 for every tier and no configuration can differentiate weight, standing or precedence (FR-021 unchanged). The single thing tier governs is proposal AUTHORSHIP, and for an anonymity reason, not a merit one: authorship is public (FR-090) and a Supporter is anonymous unconditionally (FR-082), so a Supporter cannot author without destroying their own anonymity. **The Worker declaration is a TWO-STEP informed-consent event (FR-080):** step 1 explains why the tier exists; step 2 states, BEFORE confirmation, both required facts — the declaration is **permanent for the term**, and it makes the member's **participation record** public for the term (not merely the proposals they file) — plus that nobody reviews it. Declining leaves the member a Supporter. A one-click declaration is forbidden by construction: without a confirmation step there is no "before" for FR-080's disclosure to attach to | FR-079, FR-080, FR-021, FR-082, SCR-12, SCR-15 | packages/protocol (proposals.js); apps/web |
| DES-104 | proposal authorship & competing proposals | Authoring requires Worker tier or above (OI-14) — a disclosure step, never an approval step; no pre-screening, moderation or veto path exists (FR-024). Proposals answering the same question share a DECISION WINDOW keyed by a normalised question string; every proposal in a window has EQUAL STANDING — one stage, one schedule, no ordering privilege, no weight/rank/priority field, and no capability by which one author can withdraw, remove, merge, reject, prioritise or veto another's proposal. The author never owns the ballot alone; that absence is a first-class capability-absence control. **Counting-tier placement (ruled 2026-08-30, §10.13.13(b)):** authoring is OPEN participation, **NOT** an FR-123 counting action — no verification gate stands on it, because gating authorship on verification status is a participation restriction FR-020 prohibits. The Worker-tier condition is the orthogonal self-declared disclosure step and is unchanged | FR-024, FR-090, FR-020, BR-015, BR-003, SCR-12 | packages/protocol; packages/sdk (ProposalService); apps/web |
| DES-105 | deliberative lifecycle stage machine | The eight FR-091 stages — proposal → review → discussion → debate → vote → decision → implementation → measurement — advanced exactly one step at a time. `assertStageTransition` refuses skipping (`STAGE_SKIPPED`, naming what was skipped), reversal (`STAGE_REVERSED`) and no-ops; `advanceStage()` takes no target, no `force`, no `skipTo` and no actor, so there is nothing for a human to veto. Review/discussion/debate are DELIBERATIVE: they produce records, never outcomes. A competing proposal may join only while the window still accepts entries (proposal / review / discussion); **once the window reaches debate, entry is refused** — the deliberation has by then been framed around a fixed set of options, and admitting another would change the question people have been arguing about. **Layer boundary (ruled 2026-08-30, §10.13.13(a)):** these eight stages are the PUBLIC-PROCESS taxonomy and are canonical at that layer; ADR-008's `PROPOSAL_STATE` is canonical for the BALLOT. They are complementary, not competing — different subjects (window vs one proposal's ballot), one-to-many at resolution. **The ballot layer is the sole authority on ballot state IN BOTH VERSIONS** — the DES-096 database backing in v1, `Governor.State` at the v2 seam — and `VOTE`/`DECISION`/`IMPLEMENTATION` MUST be DERIVED from whatever backing `IBallotService` is bound to, never tracked independently. _(v2.11.1: this row published the v2-only scope after §10.13.13 had been corrected to bind both versions — one normative MUST at two scopes, and this row is the one an implementer reads.)_ | FR-091, BR-014, BR-008, SCR-12, ADR-008, DES-096 | packages/protocol; packages/sdk |
| DES-106 | permanent decision trail | Every event in a decision window — opened, proposal filed (with author), deliberation posted, stage advanced, ballot admission — appends to a per-window log that is never updated and never deleted (FR-107). Reads return copies, so a caller mutating what it received changes nothing. **v1 boundary, disclosed not papered over:** the trail is held in the application store, which makes it complete but not yet independently checkable; FR-092's "reconstructable by any third party from public data alone" additionally requires the DES-097 audit-record anchoring (stage S-8), which is not built. The surface states this in plain words rather than implying more | FR-092, BR-014, BR-019 _(**NOT FR-107** — v2.11.2: this column listed FR-107, publishing the very `FR → DES` link §15 disclaims. DES-106 gives FR-107's append-only property **for the decision trail only**; FR-107 is platform-wide and undesigned, and Doc 08 holds its Must row OPEN as `G-TRACE + G-PHASE3` with DES = none, owner Erik Lindqvist. §5.2 is the register §15 points to for the `FR/NFR → DES` half, so a link here is a link claimed.)_ | packages/sdk; apps/web; (owed) DES-097 anchoring |
| DES-102 | provisional-party membership cap | A platform-activated party whose legal registration is unverified is capped at `PROVISIONAL_MEMBER_CAP` = 100 **ACTIVE** members. The cap is checked at the membership-write boundary and is **UNCONDITIONAL** — no grace window, no queue, no override (Ruling 1, Rathish, 2026-08-26). It lifts by code only, on the recording of verified legal registration (FR-075); no operator, admin, configuration or bypass surface exists, and the absence is tested as a first-class control. Anti-capture invariant (C-02 ruling, Rathish, 2026-08-22) | FR-130, FR-075, BR-002, BR-012, SCR-09, SCR-11 | packages/protocol (constant); packages/sdk (v1 enforcement); DES-097(b) store; (v2) `Party.join()` |

### 5.3 Data model

**Normative on-chain fields.** The fields below are the protocol's authoritative schema. A
field not listed here is absent from the protocol unless specified in an ADR. **The absence of
a field is a security control in many cases** — this list is the specification of both what is
present and what is deliberately excluded.

```
PersonhoodRegistry
  identityTree            LeanIMT<Poseidon>      // leaves: identityCommitment = Poseidon(secret)
  enrolled                issuerNullifier → bool // one human, one enrolment per namespace
  nullifierUsed           keccak(scope,n) → bool // one action per human per scope
  commitmentTier          commitment → uint8     // 1..3 credential strength
  issuers                 issuerId → {active, credentialClass, stateOperated, tier,
                                      operator, epochCap, metadataURI,
                                      trustAnchorHash, verifierAddress}
                                      //         ^^ GOV_EID | AVAILABILITY_ONLY (ADR-016)
                                      //                            ^^ authenticated caller for enrol()
                                      //         trustAnchorHash: bytes32 — on-chain commitment to the issuer class's signing trust anchor (eIDAS trust-list key set / ICAO CSCA root / Aadhaar attestor key); populated at registerIssuer via the timelock-governed process (SC-01)
                                      //         verifierAddress: address — per-adapter-class enrolment verifier contract for this issuer; dispatch target for enrol() (SC-01; DES-070)
  recoveries              enrolmentNullifier → {initiatedAt, completesAt, newKey, state}
                                      // state: PENDING | COMPLETE | ABORTED (ADR-018)
  isInRecovery            enrolmentNullifier → bool  // true when recovery.state == PENDING
  authorisedSpender       nullifier → address    // ERC-4337 paymaster integration
  spenderAuthoriser       address → bool         // MUST be strictly controlled (H-01)
  knownRoot               root-history ring      // accepted identity roots; kept per-namespace

RegionRegistry
  regions                 regionId → {schemeVersion, parent, depth, path}
  residencyTrees          regionId → LeanIMT<Poseidon>
  attesters               attesterId → {active, tier, stake, operator, metadataURI}
                                                      // ^^ ISS-C3 fix: operator address required
  attesterAuthorised      operator → bool            // only authorised operators may call issueResidency()
  issuanceCount           attesterId → regionId → uint256
  population              regionId → {value, effectiveFrom, pending, pendingSince}
  frozen                  regionId → bool            // freeze on anomaly (DES-036)
  rootHistory             regionId → ring[64]        // residency roots; MUST stay valid ≥ 15 min
                                                      // (ISS-M4 fix: sizing policy, not buffer logic)

PartyRegistry
  petitions               petitionId → {jurisdiction, charterHash, cid, name, emblem,
                                        thresholdBps, requiredEndorsements, endorsements,
                                        opensAt, closesAt, state, party, parentPartyId}
                                                  // ^^ name/emblem collision checked (DES-073)
  nameRegistry            jurisdiction → normalised_name → petitionId  // collision guard
  forkPetitions           forkPetitionId → {sourcePartyId, initiatedAt, coolsAt,
                                            initiatorCount, initiatorBps, state}
                                        // ISS-C2 fix: on-chain fork-initiation state
  forkInitiators          forkPetitionId → nullifier → bool  // one initiator per person

Party
  memberTree              LeanIMT<Poseidon>
  joinedAt / leftAt       commitment → uint64
  memberCount             uint64
  growthSamples           ring[64]  // {timestamp, memberCount} — ring, not unbounded array (ISS-M3)
  manifestoVersions       [{contentHash, cid, publishedAt, changeSummary}]
  immutableClause         clauseId → bool
  entrenched              clauseId → {approvalBps, timelockSeconds}
  governor                address         // Governor contract for this party
  dissolved               bool
  charter                 bytes32         // current charter content hash
  parentPartyId           bytes32         // non-zero for forks
  forkBlock               uint64
  knownRoot               root-history ring  // accepted member roots

Governor
  proposals               [{tier, clauseId, contentHash, cid, createdAt, snapshotRoot,
                            snapshotMembers, surgeAtCreation, discussionEndsAt, votingEndsAt,
                            executableAt, quorumBps, approvalBps, minTenureSeconds,
                            for/against/abstain, finalized, succeeded, executed, cancelled,
                            target, callData, permittedActionClass}]
                    //                         ^^ snapshotRoot (publicSignals[0]): ISS-C1 fix —
                    //                            MUST equal voter's partyRootAtSnapshot;
                    //                            snapshotAt (publicSignals[1]): ISS-01 fix —
                    //                            MUST equal proposal.createdAt
                    //                         permittedActionClass: ISS-H1 fix — tier↔action binding
  lastProposalAt    author → uint64  // rate limiting
```

ProtocolGovernance
  entrenched              ruleId → bytes32   // Charter Layer (Tier-1): hash-committed registry of seven rules;
                                              //   populated at genesis; never mutable by any vote
  superProcessState       proposalId → {
                            firstVoteResult,        // passed | failed | pending
                            firstVoteSnapshotAt,
                            windowStart,            // Guarded Layer (Tier-2): inter-vote window start (block ts)
                            windowEnd,              // windowStart + interVoteWindow (see §10.11)
                            auditRefHash,           // bytes32 audit report hash
                            auditPublishedAt,       // must satisfy: windowEnd - auditPublishedAt >= auditLeadTime
                            secondVoteResult,       // passed | failed | pending
                            enactedAt               // non-zero once enacted
                          }

StewardRegistry
  seats                   seatId → {
                            holderCommitment,   // bytes32 — Poseidon commitment of elected holder
                            termStart,          // uint64
                            termExpiry,         // uint64; termStart + STEWARD_TERM (§10.11)
                            recallState         // NONE | RECALL_PENDING | RECALLED
                          }
  recallVotes             seatId → {initiatedAt, affirmativeCount, totalEligible, threshold}

TrustAnchorLifecycle (fields added to PersonhoodRegistry issuer struct)
  trustAnchorState        issuerId → enum { ACTIVE,
                            ROTATION_PENDING,   // newHash and effectiveAt known; overlapEnd = effectiveAt + overlapWindow
                            ROTATION_ABORTED,   // abort enacted via abortRotation(); incumbent hash restored; pending anchor rejected for new enrolments [DES-090, SC-18]
                            REVOCATION_PENDING, // effectiveAt known (ordinary or emergency path)
                            REVOKED }
  pendingAnchorHash       issuerId → bytes32    // non-zero during ROTATION_PENDING
  anchorEffectiveAt       issuerId → uint64     // block timestamp when new state takes effect
  anchorOverlapEnd        issuerId → uint64     // ROTATION_PENDING only: old anchor accepted until this ts

**Deliberately absent, everywhere:** name, address, postcode, coordinate, document number,
document image, biometric template or hash, email, phone, IP, device id, and any mapping from
a nullifier or commitment to any of the above. **A hashed address is still an address** — the
search space is small enough to enumerate — which is why no hash of any personal datum appears
either (ADR-004, CON-002). The `authorisedSpender`/`spenderAuthoriser` pair is present but is
the only disenfranchisement-capable authority in the protocol; its access control is tested as
a first-class security invariant.

**Participation profile data (FR-062, OI-13):** The participation profile is an indexer-side
read model aggregated from public events (Enrolled, Joined, Proposed, DebateAttended, etc.).
No per-member activity field is stored on-chain as a named personal index. **The profile
MUST NOT be served until OI-13 is resolved at Gate 1 re-affirmation** (see §18 for the
design-side contradiction). The feature flag `participation_profile` is off above dev.

**Off-chain.** Manifestos, proposal bodies, charters, debate content, region maps and
ceremony transcripts on IPFS (CIDv1) mirrored to Arweave, integrity-bound by the on-chain
`contentHash`. Notification preferences live only on the citizen's device or in an optional
E2E-encrypted relay the protocol cannot read.

### 5.4 API contracts

The protocol's public API is the contract ABI plus the event log. `@trumocracy/sdk` wraps it.
The indexer exposes a **read-only, non-authoritative** GraphQL API; every value it serves that
could change a citizen's decision is re-verified against chain state by the client (ADR-014).

Key entrypoints, with their proof requirements:

| Call | Proof | Scope | Effect |
|---|---|---|---|
| `enrol(issuerId, π, [Nᵢ, C, issuerId, namespaceId, trustAnchorHash])` | `personhood_enrol_[class]` (resolved via `issuers[issuerId].verifierAddress`; see DES-070) | — | inserts `C`, burns `Nᵢ`; checks `credentialClass == GOV_EID`; MUST check `publicSignals[4] == issuers[issuerId].trustAnchorHash` (SC-01) |
| `endorse(petitionId, π, [root, R, tier, scope, Nₐ, C])` | `residency_member` | `keccak("endorse",petitionId)` | +1 endorsement |
| `withdrawEndorsement(petitionId, π, [root, R, tier, scope, Nₐ, C])` | `residency_member` | `keccak("withdraw_endorse",petitionId)` | −1 endorsement; requires prior endorsement, jurisdiction match |
| `activate(petitionId, charter)` | — | — | deploys Party+Governor iff count ≥ required |
| `join(π, signals)` | `residency_member` | `keccak("join",partyId)` | membership leaf + `joinedAt` |
| `leave(π, signals)` | `tenure_member` | `keccak("leave",partyId)` | removes membership leaf + `leftAt` |
| `propose(input, π, signals)` | `tenure_member` | `keccak("propose",partyId)` | snapshotted proposal; records `snapshotRoot` |
| `vote(id, choice, π, [snapshotRoot, snapshotAt, tenure, scope, Nₐ])` | `tenure_member` | `keccak("vote",partyId,id)` | one vote; MUST check `publicSignals[0] == proposal.snapshotRoot` AND `publicSignals[1] == proposal.createdAt` |
| `finalize(id)` / `execute(id)` | — | — | permissionless; `execute` checks `permittedActionClass` for the proposal's tier |
| `openForkPetition(sourcePartyId, π, signals)` | `tenure_member` | `keccak("fork",sourcePartyId)` | records initiator; threshold ≥ 10% members; GUARDED by `fork` feature flag (off above dev) |
| `vetoRecovery(enrolmentNullifier, proof)` | active-key signature | — | sets recovery.state = ABORTED |
| `proposeAmendment(ruleId, callData, tier)` | `tenure_member` (Worker+) | `keccak("propose_amendment",ruleId)` | Charter Layer (Tier 1): revert `EntrenchedRule` at submission; Guarded Layer (Tier 2): opens super-process (firstVote scheduled); Open Layer (Tier 3): ordinary proposal path |
| `firstVote(proposalId, choice, π, signals)` | `tenure_member` | `keccak("sp_first_vote",proposalId)` | Guarded Layer (Tier-2) only; precondition: `superProcessState[proposalId].firstVoteResult == pending`; records vote; on close checks Tier-2 quorum + supermajority |
| `publishAuditRef(proposalId, auditRefHash)` | steward (primary); OR any enrolled citizen after steward-inaction window (DES-092; SC-17); citizen fallback is IMMEDIATE if steward vacancy | — | Guarded Layer (Tier-2) only; precondition: firstVote passed AND `block.timestamp >= windowStart`; for citizen fallback additionally requires `block.timestamp >= firstVoteClosedAt + STEWARD_INACTION_WINDOW` (or vacancy); records `auditRefHash` and `auditPublishedAt`; second vote cannot open until `auditPublishedAt + AUDIT_LEAD_TIME <= windowEnd`; audit substance requirements (independence, scope) UNCHANGED regardless of who publishes |
| `abortRotation(issuerId)` | Governor.execute() only | `keccak("abort_rotation",issuerId)` | Open Layer bar (60%/15%); precondition: `trustAnchorState[issuerId] == ROTATION_PENDING`; transitions ROTATION_PENDING → ROTATION_ABORTED → ACTIVE (incumbent hash restored); pending-anchor credentials rejected for new enrolments from abort enactment; no retroactive invalidation of already-enrolled |
| `secondVote(proposalId, choice, π, signals)` | `tenure_member` | `keccak("sp_second_vote",proposalId)` | Guarded Layer (Tier-2) only; precondition: auditRef published AND `block.timestamp >= auditPublishedAt + AUDIT_LEAD_TIME`; records vote; on close checks Tier-2 quorum + supermajority |
| `enact(proposalId)` | permissionless | — | Guarded Layer (Tier-2): precondition: secondVote passed AND timelock elapsed; all five super-process properties enforced — missing any single one causes revert; Open Layer (Tier-3): ordinary timelock path |
| `electSteward(seatId, π, signals)` | `tenure_member` | `keccak("steward_elect",seatId)` | opens platform-wide ballot for a vacant or expiring seat via Governor ballot mechanics |
| `recallSteward(seatId, π, signals)` | `tenure_member` | `keccak("steward_recall",seatId)` | affirmative-quorum recall vote per §10.11; surge defence active; silence does not recall |
| `rotateTrustAnchor(issuerId, newAnchorHash)` | code only — callable ONLY from `Governor.execute()` with `permittedActionClass` = TRUST_ANCHOR_MGMT | — | sets `trustAnchorState = ROTATION_PENDING`; records `pendingAnchorHash`, `anchorEffectiveAt` (block.ts + ordinary governance timelock), `anchorOverlapEnd` (effectiveAt + ANCHOR_OVERLAP_WINDOW); old anchor remains accepted until `anchorOverlapEnd`; enrol() checks: if ROTATION_PENDING AND `block.timestamp < anchorOverlapEnd`, accepts EITHER old OR new hash |
| `revokeTrustAnchor(issuerId)` | code only — callable ONLY from `Governor.execute()` with `permittedActionClass` = TRUST_ANCHOR_MGMT | — | ordinary path: sets `REVOCATION_PENDING` with timelock per §10.11; emergency path: same call with `emergencyPath=true` flag validated by `permittedActionClass`, uses EMERGENCY_REVOCATION_TIMELOCK (§10.11); on timelock expiry suspends new enrolments (issuer.active remains true, enrolment reverts with `AnchorRevoked`); already-enrolled credentials unaffected |

**Residency-root freshness (ISS-M4 fix):** A residency root MUST remain acceptable for at
least **15 minutes** after insertion. The `rootHistory` ring size in `RegionRegistry` MUST be
set such that at the §7.6 capacity ceiling (50 M enrolled, 10 M eligible), the 64-insert ring
does not rotate a root out within 15 minutes of its insertion at peak enrolment rate. If it
would, the ring size MUST be increased before mainnet scale. This is a design constraint on
the sizing policy, not on the ring logic itself.

### 5.5 Key sequences

**Enrol → endorse → activate**

```
citizen        client           issuer      PersonhoodRegistry  RegionRegistry  PartyRegistry
   │ tap "verify" │                │                │                │              │
   │─────────────▶│ NFC on device  │                │                │              │
   │              │───────────────▶│ signed cred    │                │              │
   │              │◀───────────────│                │                │              │
   │              │ prove in WASM; stable_id_secret never leaves     │              │
   │              │───────────────────────────────▶│ enrol(π)        │              │
   │              │                                │ check GOV_EID   │              │
   │              │                                │ burn Nᵢ, insert C              │
   │ tap "support" │                               │                 │              │
   │─────────────▶│ prove residency ∈ tree(R)       │                 │              │
   │              │──────────────────────────────────────────────────────────────────▶│
   │              │                                │ spendNullifier  │  endorse(π)   │
   │ anyone       │──────────────────────────────────────────────────────────────────▶│ activate()
```

No arrow terminates at a human approver, and none can be added without changing FR-018.

**Coercion-resistant vote (Phase 3, MACI)**

```
voter  ──register voting key──▶ MACI state tree
voter  ──encrypted ballot─────▶ message queue
voter  ──key-change + re-vote─▶ message queue (indistinguishable from above)
                coordinator committee (5-of-7 DKG) ──▶ tally + ZK proof ──▶ on-chain result
```

**Nullifier-collision recovery (FR-071/072, ADR-018)**

```
citizen        client           PersonhoodRegistry     RegisteredChannel
   │ re-enrols  │                       │                      │
   │───────────▶│ nullifier collision detected                 │
   │            │──────────────────────▶│ → RECOVERY_PENDING   │
   │            │                       │──────────────────────▶│ notification sent
   │            │   7-day delay elapses │                      │
   │            │   (or active-key veto signals)               │
   │            │───────────── vetoRecovery() ────────────────▶│ → RECOVERY_ABORTED
   │            │   OR after 7 days, no veto:
   │            │                       │ KEY_ROTATION_COMPLETE; membership/tenure preserved
```

### 5.6 State models

```
PARTY:     draft ──publish──▶ petition ──threshold met──▶ active ──T3 vote──▶ dissolved
                                  └──window closed──▶ expired
           fork: active party + ≥10% initiators (nullifier-proven) ──30d cooling──▶ fork draft ──petition──▶ new party

PROPOSAL:  discussion ──▶ voting ──▶ tallying ──▶ {defeated | timelocked ──▶ executed}
                └──proposer withdraws (discussion only)──▶ cancelled

CANDIDACY: nominated(self) ──3 debates completed──▶ post-debate member vote ──passes──▶ published
           (no debates = candidacy not published; no automatic renomination of incumbents)
           published ──election──▶ {elected | not elected}
           elected ──term end──▶ expired
           elected ──recall stage 1 + stage 2──▶ removed ──▶ by-election

RECOVERY:  ACTIVE ──nullifier collision──▶ PENDING ──veto──▶ ABORTED
                                                └──7 days, no veto──▶ KEY_ROTATED → ACTIVE (new key)

GUARDED LAYER (TIER-2) SUPER-PROCESS (ProtocolGovernance — DES-087):
  OPEN ──proposeAmendment(GuardedLayer)──▶ FIRST_VOTE_OPEN
  FIRST_VOTE_OPEN ──firstVote closes; quorum+supermajority met──▶ WINDOW_OPEN (windowStart recorded)
  FIRST_VOTE_OPEN ──firstVote closes; quorum or supermajority not met──▶ DEFEATED
  WINDOW_OPEN ──publishAuditRef() by steward [primary path]──▶ AUDIT_PUBLISHED (auditPublishedAt recorded)
  WINDOW_OPEN ──block.timestamp >= firstVoteClosedAt + STEWARD_INACTION_WINDOW; any enrolled citizen calls publishAuditRef() [fallback, DES-092/SC-17]──▶ AUDIT_PUBLISHED
  WINDOW_OPEN ──steward vacancy detected; any enrolled citizen calls publishAuditRef() immediately [vacancy fallback, DES-092/SC-17]──▶ AUDIT_PUBLISHED
  AUDIT_PUBLISHED ──block.timestamp >= auditPublishedAt + AUDIT_LEAD_TIME
                   AND block.timestamp >= windowEnd──▶ SECOND_VOTE_OPEN
  SECOND_VOTE_OPEN ──secondVote closes; quorum+supermajority met──▶ SECOND_PASSED (timelock begins)
  SECOND_VOTE_OPEN ──secondVote closes; quorum or supermajority not met──▶ DEFEATED
  SECOND_PASSED ──timelock elapsed──▶ ENACTABLE
  ENACTABLE ──enact() called (permissionless)──▶ ENACTED
  Any state ──Charter Layer (Tier-1) target detected at proposeAmendment()──▶ revert(EntrenchedRule) [no state created]

TRUST_ANCHOR (DES-090):
  ACTIVE ──rotateTrustAnchor() via Governor.execute()──▶ ROTATION_PENDING (newHash, effectiveAt, overlapEnd set)
  ROTATION_PENDING ──block.timestamp >= effectiveAt──▶ ACTIVE (new hash; old accepted until overlapEnd)
  ROTATION_PENDING ──abortRotation() via Governor.execute() (Open Layer bar)──▶ ROTATION_ABORTED──▶ ACTIVE (incumbent/pre-rotation hash; pending-anchor credentials rejected for new enrolments from abort; no retroactive invalidation) [SC-18]
  ACTIVE ──revokeTrustAnchor() via Governor.execute() [ordinary]──▶ REVOCATION_PENDING (30d timelock)
  ACTIVE ──revokeTrustAnchor() via Governor.execute() [emergency]──▶ REVOCATION_PENDING (7d timelock)
  REVOCATION_PENDING ──timelock elapsed──▶ REVOKED (new enrolments suspended; enrolled credentials unaffected)
```

## 6. Runtime view

**Cold start (first-time citizen).** PWA loads (< 200 KB JS) → passkey created → identity
secret derived and stored wrapped by the passkey → issuer flow → proof generated in WASM
(1–4 s on reference device) → UserOperation sponsored by paymaster → enrolment event. No seed
phrase, no gas token, no cryptocurrency concept exposed.

**Voting.** Client pulls proposal + `snapshotRoot`, verifies both against the chain (not the
indexer), generates tenure proof locally with `snapshotRoot` as public input, submits.

**Degraded modes.** Bundler down → alternate bundler → queue → (censorship only) self-pay →
L1 force-inclusion. Indexer down → direct chain reads. Sponsorship exhausted → queued at
zero cost with explanation and expected time, never a charge and never a denial (FR-061).

## 7. Deployment view

### 7.1 Environments

| Env | Chain | Verifiers | Flags | Purpose |
|---|---|---|---|---|
| local | in-process EthereumJS | mocks | all on | unit + integration |
| CI | in-process EthereumJS | mocks + rejecting mock | matrix | every PR |
| devnet | L2 devnet | mocks | all on | integration, SDK, indexer |
| testnet | Base Sepolia | **real, ceremony-bound** | Phase-appropriate | audits, ceremony rehearsal |
| staging | Base mainnet | real | prod-minus | production config, invited cohort |
| production | Base mainnet | real | staged 1→10→50→100% | live |

A deployment whose `VerifierRegistry` contains a `MockVerifier` cannot be promoted past devnet.

### 7.2 Network topology
Static client on IPFS (ENS-named) + Arweave mirror + conventional CDN, all serving a
byte-identical reproducible bundle. Indexer and relayer behind independent operators; the
client accepts user-supplied endpoints for both. No component sits on a path where its
absence prevents participation — tested by running the E2E suite with indexer and relayer off.

### 7.3–7.5 Compute, storage, availability
Indexer: stateless API + Postgres read model, rebuildable from chain (target < 6 h for a year
of history). Relayer: stateless, horizontally scaled, paymaster buffer 90 days at p95 fees.
Pinning: ≥3 geographically separate operators + Arweave permanence. **RTO 15 min / RPO 0**
for off-chain services.

### 7.6 Capacity & sizing (NFR-008)

| Tier | Unit | Baseline | Peak | Basis |
|---|---|---|---|---|
| Merkle depth | tree | 32 | 32 | 4.29 B leaves — 85× headroom over 50 M |
| On-chain insert | gas | ~70–90 k | ~90 k | measured in EVM harness |
| Proof verification | gas | ~250 k | ~290 k | Groth16, 3 pairings, constant |
| Enrolment | tx/day | 50 k | 500 k | per-issuer epoch caps bound peak |
| Vote burst | tx/hour | 100 k | 1 M | voting windows ≥ 72 h; closes staggered per region |
| Indexer | events/s | 200 | 2 000 | derived from above |
| Client proving | seconds | 1–4 | 10 | 2 GB Android 9, ≤ 2^17 constraints |

## 8. Software & technology

| Layer | Choice | Version | ADR |
|---|---|---|---|
| Settlement | OP Stack L2 (Base), Ethereum blobs | — | ADR-001 |
| Contracts | Solidity | 0.8.28, Cancun | ADR-011 |
| Merkle | `@zk-kit/lean-imt.sol` + `poseidon-solidity` | 2.0.1 / 0.0.5 | ADR-005 |
| Proving | Circom + Groth16 (bn254), snarkjs | — | ADR-005 |
| Coercion resistance | MACI + threshold DKG coordinator | — | ADR-006 |
| Accounts | ERC-4337, passkeys (RIP-7212), EIP-7702 | — | ADR-002 |
| Client | Next.js PWA, viem, WASM prover | Node 22 | ADR-012 |
| Indexer | event-sourced read model → Postgres → GraphQL | — | ADR-014 |
| Storage | IPFS CIDv1 + Arweave | — | ADR-009 |
| Test | solc-js + EthereumJS in-process harness, vitest | — | §14 |

**Licensing:** AGPL-3.0-or-later for governance-critical code (CON-004).

**Configuration & flags (§8.3).** `packages/protocol/flags.js` is the registry; every flag
exercisable on-chain is ALSO enforced by the `FeatureFlags` contract. Flags without a removal
target are reported as debt by CI.

## 9. Repository & code-structure design

Per **ADR-011** (normative). Summary reproduced here to satisfy the handbook's §9 requirement:

**Monorepo, npm workspaces, CI-enforced dependency direction.**
```
trumocracy/
├── packages/contracts/   Solidity core + registries + party modules
├── packages/circuits/    Circom sources, ceremony scripts, generated verifiers
├── packages/protocol/    domain logic: IDs, encoding, state machines, thresholds (zero runtime deps)
├── packages/sdk/         TypeScript client: proofs, tx building, 4337, force-inclusion fallback
├── packages/ui/          design system (accessible components, i18n primitives)
├── apps/web/             Next.js PWA — citizen-facing client
├── apps/verifier/        standalone tally/root verifier
├── services/indexer/     event → read model
├── services/relayer/     4337 bundler adapter + paymaster policy
├── infra/                IaC, deployment topology
├── tools/                evm test harness, dep-guard, codegen
└── docs/                 VEKTOR 14-doc suite + ADRs
```

**Dependency rule (CI-enforced by `tools/dep-guard`):**
`contracts ← (none)` · `circuits ← (none)` · `protocol ← (none)` ·
`sdk ← protocol, contracts(ABI), circuits(artifacts)` · `ui ← protocol` ·
`web ← sdk, ui, protocol` · `indexer ← protocol, contracts(ABI)`.

**Branch model:** Trunk-based development; one long-lived branch (`main`). Every incomplete
capability ships dark behind a flag in `packages/protocol/flags.js` and the corresponding
`FeatureFlags` on-chain contract.

**CI topology:**
```
PR merge → CI pipeline:
  lint + type-check (packages/protocol, sdk, web, indexer)
  dep-guard check (tools/dep-guard)
  unit tests: vitest (packages/protocol — 82+ tests; sdk; web)
  contract tests: solc-js + EthereumJS in-process harness (packages/contracts)
  differential test: protocol reference vs deployed contract ABI
  ZK doctrine: claims.json negative-test coverage scan; circomspect (when circuits exist)
  capability-absence: ABI allowlist snapshot + bytecode selector scan
  data-minimisation: forbidden-field-name scan over ABI + storage layout
  jargon filter: forbidden-term scan over apps/web string files
  deployment-safety: IS_INSECURE_MOCK() scan — blocks promotion past devnet
  → testnet promotion gate (env-based; requires passing deployment-safety test)
```

The dependency guard and deployment-safety test are mechanical, not conventional — a violation
fails the build.

## 10. Cross-cutting concepts

### 10.1 Security — DFD and STRIDE

**Trust boundaries (data-flow diagram).**

```
 ╔═ B1 DEVICE (citizen-trusted) ══════════╗
 ║ identity secret · witness · passkey    ║   ← the only place plaintext identity exists
 ╚════════════════╤═══════════════════════╝
                  │ proof + nullifier ONLY        ── B1→B2: the critical boundary
 ╔═ B2 PUBLIC CHAIN (trustless, world-readable) ══╗
 ║ roots · nullifiers · tallies · hashes          ║
 ╚═══╤════════════════════════════════════╤═══════╝
     │                                    │
 ╔═ B3 OFF-CHAIN SERVICES ═════╗  ╔═ B4 EXTERNAL ISSUERS/ATTESTERS ═══╗
 ║ indexer · relayer · pinning ║  ║ know a real identity already;      ║
 ║ non-authoritative           ║  ║ learn a region request, not a party║
 ╚═════════════════════════════╝  ╚════════════════════════════════════╝
```

| STRIDE | Threat | Mitigation | Residual |
|---|---|---|---|
| **S**poof | fake person endorses/votes | ZK personhood, per-namespace nullifier, tiering, epoch caps (DES-001/002/003) | as strong as the weakest GOV_EID issuer — bounded by tiering (RISK-01/05) |
| **S**poof | malicious frontend serves backdoored proving key | `zkeyHash` pinning + reproducible builds (DES-052, DES-050) | a user who ignores a warning |
| **S**poof | attester impersonates a legitimate attestor; calls `issueResidency()` | `attesterAuthorised[caller]` check; `attester.operator` binding (DES-006; ISS-C3 fix) | an attester whose operator key is compromised |
| **S**poof | enrolment proof verified against an attacker-chosen trust anchor; prover substitutes K_attack for the issuer's real trust anchor, enrolling unlimited synthetic identities (SC-01) | `trustAnchorHash` is a public signal (`publicSignals[4]`) bound on-chain to `issuers[issuerId].trustAnchorHash`; per-adapter verifier dispatch via `issuers[issuerId].verifierAddress` prevents cross-adapter-class proof substitution | a compromised or mis-registered trust anchor at `registerIssuer` time — mitigated by the timelock-governed registration process |
| **S**poof | post-registration trust-anchor compromise (SC-13) — attacker obtains private key of a CORRECTLY registered issuer and uses it to sign synthetic credentials, enrolling Sybil identities with valid on-chain proofs | `revokeTrustAnchor(issuerId, emergencyPath=true)` via `Governor.execute()` (DES-090, ADR-020); 7-day emergency timelock at Open Layer governance bar (60% supermajority / 15% quorum); per-issuer epoch cap (DES-003) throttles enrolment during the revocation window; public governance vote creates an on-chain signal observable by parties and citizens | 7-day Sybil enrolment window before revocation takes effect — accepted residual RISK-30; epoch-cap-bounded; post-enrolment adjudication possible via NFR-004 audit |
| **T**amper | alter a tally | on-chain nullifier-gated votes; MACI tally proof | circuit bug (RISK-10) → two audits + negative tests |
| **T**amper | rewrite a manifesto quietly | append-only version chain + content addressing (DES-031) | none material |
| **R**epudiate | party denies a commitment | permanent public version history with timestamps | none material |
| **I**nfo | deanonymise by elimination in a small region | k ≥ 1000 guard + scope escalation (DES-008) | correlation over time (RISK-06) |
| **I**nfo | deanonymise by timing/traffic | no reader logging, random submission delay, sponsored ops indistinguishable | a global passive adversary — **not defended**, stated in §16 |
| **I**nfo | compelled disclosure of the member list | the list does not exist (§5.3) | attester-side data, outside our boundary |
| **I**nfo | cross-context linkage via stable `identityCommitment` | commitment is the tree leaf and must be public; client uses random delay and bundler pool; see §10.2 | stable pseudonym linkage (RISK-06) — see §18 for OI-13 consequence |
| **D**oS | drain gas sponsorship | per-nullifier budgets + circuit breaker (DES-043) | actions queue at zero cost; delay, never charge or denial |
| **D**oS | sequencer censors a party | L1 force-inclusion (DES-041), ≥ 72 h windows | delay within the window |
| **E**oP | flash-loan governance takeover | **no transferable power exists** (ADR-007) | none — attack class removed |
| **E**oP | mob rewrites a charter | tiers + snapshot + adaptive quorum + entrenchment + fork (ADR-008) | a genuinely persuaded majority over a year |
| **E**oP | operator/admin intervention | no admin, pause or proxy in the core (ADR-010) | registry governance capture → exit right |
| **E**oP | `Governor.execute` calls arbitrary `target.call(callData)`; tier-0 proposal invokes high-authority action | `permittedActionClass` binding in proposal struct (DES-016); `execute()` reverts if `callData.selector` not in the tier's allowed set; CI assertion over the allowed-action table (ISS-H1 fix) | undiscovered logic bypass within the immutable contract; SC-15 general rule (ProtocolGovernance IMMUTABLE CORE — no upgrade, no proxy, no governance-vote replacement) closes the bypass class of contract substitution or proxy redirection (SC-21); remaining residual is a logic bug inside the immutable code — mitigated by audit (DES-079) and the capability-absence CI scan |
| **E**oP | stolen credential initiates recovery to seize account (RISK-22) | 7-day delay + active-key veto + independent on-chain veto path (DES-071, ADR-018) | complete device + channel compromise (RISK-23 accepted residual) |
| **E**oP | steward soft-power elevation — community defers to steward proposals as if they have canonical authority; vendors treat steward signature as an operational override (RISK-31) | power allowlist DES-089 (only four enumerated functions exposed); citizen proposals have equal standing per FR-116; zero-dependency property FR-117 means steward vacancy causes no citizen-facing degradation, eliminating leverage; term expiry + recall (DES-088) cycles authority | perception gap between formal and informal power — accepted residual; mitigated by public operational reports (NFR-019) and fork backstop (FR-120) |
| **T**amper | Guarded Layer (Tier-2) super-process bypass attempt — actor tries to call `enact()` on a Guarded Layer proposal without completing all five super-process properties (skips first vote, audit ref, or second vote) | `ProtocolGovernance.enact()` enforces all five preconditions in code; any missing property causes revert; the state machine in DES-087 and §5.6 is the single gate; there is no out-of-band execution path (CON-003; ADR-010) | undiscovered logic bypass in the state machine — mitigated by audit (DES-079) and capability-absence CI assertions |
| **D**oS | trust-anchor revocation abuse — attacker obtains a governance seat or corrupts a vote to pass an emergency revocation of a major issuer, blocking new enrolments | emergency revocation still requires a passed governance vote at the ordinary platform governance voting bar (60% supermajority / 15% quorum — UNCHANGED from ordinary path; only the timelock is shortened per ADR-020); the Guarded Layer super-process (80%/25%/180-day two-vote) applies only to AMENDMENTS of named absolutes, NOT to governance actions such as revocation; growth-surge defence (DES-020) active throughout; ordinary enrolled citizens unaffected | a genuine coordinated-majority attack passes the vote — accepted residual bounded by the quorum bar and the fork backstop (RISK-30) |

**Capability-absence is a security control here**, so it is tested as one: ABI-surface
assertions, selector scans of deployed bytecode, and storage-layout assertions.

### 10.2 Privacy & data protection

Minimisation by construction (§5.3). Unlinkability by **scoped action nullifiers** (`Nₐ`).
Anonymity-set floor enforced on-chain. Erasure honoured by non-collection (ADR-013 §2).

**IdentityCommitment linkage — stated explicitly (ISS-H3):** The `identityCommitment`
`C = Poseidon(secret)` is published at enrolment and indexed in `Enrolled`, `Joined`, and
similar events. It is **not** a scope-bound nullifier: a party, indexer, or analyst who
observes two events carrying the same `C` knows they came from the same person. The
unlinkability claim for **action nullifiers** (`Nₐ = Poseidon(secret, actionScope)`) holds:
different scopes produce different nullifiers with no derivable relationship. The
`identityCommitment` does not share this property. Mitigation: the client SHOULD introduce
random delay between enrolment and first action and submit through the ERC-4337 bundler pool.
This reduces but does not eliminate the correlation window. The `identityCommitment` linkage
is a **known, accepted design residual** pending further protocol evolution. For the OI-13
consequence, see §18.

### 10.3 Performance
Systems MUST meet the budgets defined in DES-078: initial JS ≤ 200 KB; p95 interactive
≤ 5 s on 4× throttled mid-range Android over Slow 4G; proof ≤ 10 s worst-case on reference
device; finalisation on-chain ≤ 120 s p95. Median citizen action MUST remain < USD 0.01.

### 10.4 Scalability
The system MUST use depth-32 Merkle trees (4.29 B leaves) with constant-cost on-chain
verification. MACI tallying MUST be batched. Off-chain services SHOULD be stateless and
horizontally scalable; residency trees MUST be sharded per region.

### 10.5 Reliability / HA / DR
Off-chain services MUST achieve RTO ≤ 15 min and RPO = 0. Chain liveness is the minimum
liveness floor; the L1 force-inclusion path MUST serve as the backstop. Party state MUST be
exportable at any time by anyone (DES-044).

### 10.6 Observability
Systems MUST expose governance-health SLIs covering: activation counts, turnout, quorum
near-misses, recall rates, growth anomalies, sponsorship burn, proof-failure rate,
force-inclusion usage, and operator diversity. **No SLI MAY be derived from an individual's
behaviour.** Detail in Doc 11.

### 10.7 Error handling & resilience
The system MUST fail *closed* on anything security-relevant (bad proof, unknown root, spent
nullifier, thin anonymity set, wrong `snapshotRoot`). It SHOULD fail *open* on convenience
faults (indexer, sponsorship, notifications). A replayed action MUST be rejected by
construction via nullifier idempotency.

### 10.8 i18n & accessibility
Apps MUST pass WCAG 2.2 AA (tested in CI, DES-081); MUST ship ≥ 8 launch languages including
≥ 1 RTL (DES-083); MUST support icon+audio assisted mode; MUST maintain grade-8 reading level
in all primary copy (DES-085); MUST operate fully by keyboard and screen reader; MUST enforce
the 2 GB RAM / Android 9 / 64 kbit/s floor (DES-082).

### 10.9 Cost / FinOps
Cost per citizen action is a **product metric with an alert**. The sponsorship buffer MUST
remain ≥ 90 days at p95 fees; a circuit breaker MUST engage at 3× p99 daily spend.

### 10.10 Compliance & auditability
Every governance action emits an event; independent verifier binary reproduces every tally;
transparency report covers filtering actions and compulsion attempts (ADR-013 §4, DES-084).

### 10.11 Governance constants (OI-17 closure)

**Naming disambiguation.** This section uses "Charter Layer / Guarded Layer / Open Layer" for
the platform amendment boundary. Doc 02 v2.2.0 calls these "Tier 1 / Tier 2 / Tier 3" — the
labels map 1:1 (Charter Layer = Doc 02 Tier 1, Guarded Layer = Doc 02 Tier 2, Open Layer =
Doc 02 Tier 3). The constant NAMES in the table below (e.g. "Tier-3 quorum", "Tier-2 quorum")
are GovernanceConstants module identifiers that match the on-chain storage layout; they keep
their names for code-level stability. Party-level governance tiers (T0 policy / T1
organisational / T2 structural / T3 constitutional) are a SEPARATE namespace defined in the
party charter rules and Doc 02 FR-103..FR-105; the identical 60%/15% bar shared by Open Layer
and party T2 structural tier is coincidental, not definitional.

**Status: CLOSED.** These values are the OI-17 closure, normative for Design and for the
`GovernanceConstants` module (DES-091). They are revisable only through the amendment
boundary itself (Guarded Layer for named-absolute-adjacent constants; Open Layer for all
others).

**Anti-circularity rule (SC-16).** A constant classified "Amendment Layer = Guarded Layer" in the table below MUST NOT be lowerable by an Open Layer (ordinary) vote. Any Open Layer proposal targeting a Guarded Layer constant MUST revert. This rule prevents an Open Layer coalition from eroding the Guarded Layer amendment bar by reducing the constants that define it.

**Quorum denominator (SC-20).** The Guarded Layer quorum for both votes (proposeAmendment and castSecondVote) is computed over the enrolled citizen count at snapshotRoot time — the count fixed when proposeAmendment() is called — NOT the live enrolled count at vote time. This prevents an organic enrolment surge from raising the absolute headcount threshold mid-vote and stalling a legitimate amendment. The growth-surge defence (FR-023) applies to party-level votes only and does NOT override the snapshotRoot quorum denominator for Guarded Layer votes (DES-087).

| Constant | Value | Rationale | Amendment Layer |
|---|---|---|---|
| **Open Layer — ordinary platform amendment (Doc 02 'Tier 3')** | | | |
| Tier-3 quorum | 15% of enrolled citizens | Matches the highest party-tier quorum (FR-119 reference); sets the floor for platform-wide legitimacy without requiring a supermajority of all citizens to participate | Open Layer |
| Tier-3 supermajority | 60% of votes cast | Materially above a simple majority; comparable to constitutional-amendment thresholds in small deliberative bodies; protects against narrow-majority swings | Open Layer |
| Tier-3 timelock | 90 days | Long enough for a fork petition to reach threshold (10% + 30-day cooling-off) and for community scrutiny; proportional to the structural tier (ADR-008) | Open Layer |
| **Guarded Layer — named-absolutes super-process (Doc 02 'Tier 2')** | | | |
| Tier-2 quorum | 25% of enrolled citizens (denominator = enrolled count at snapshotRoot, SC-20) | Materially above Open Layer (10 percentage-point margin); requires broad platform participation before a fundamental protection can change | **Guarded Layer** (anti-circularity: SC-16) |
| Tier-2 supermajority | 80% of votes cast | Materially above Open Layer (20 percentage-point margin); ensures no transient majority can carry a change that weakens receipt-freeness, data minimisation, cryptographic standards, or the non-violence clause | **Guarded Layer** (anti-circularity: SC-16) |
| Inter-vote window | 180 days | The fork right (FR-120) requires 10% initiators + 30-day cooling-off + an activation petition (30-day minimum). A citizen who observes the first vote and wishes to fork before the second can complete the petition cycle within 180 days; this satisfies NFR-018's export guarantee and FR-053 petition mechanics. The window is the enforced gap between firstVote close and secondVote open | **Guarded Layer** (anti-circularity: SC-16) |
| Audit publication lead time | 30 days before second-vote open | Gives the community at least 30 days to read and respond to the audit of the proposed change before the second vote; the second vote cannot open unless `windowEnd - auditPublishedAt >= 30 days` | **Guarded Layer** (anti-circularity: SC-16) |
| Steward audit-publication inaction window (STEWARD_INACTION_WINDOW) | 60 days from firstVoteClosedAt; steward vacancy triggers citizen fallback immediately (no window) | One-third of the 180-day inter-vote window; long enough for stewards to coordinate and publish the audit reference after the first vote closes; short enough that steward inaction cannot stall the second vote past the halfway mark. Vacancy (no registered steward) triggers the DES-092 citizen fallback immediately with no delay. Same pattern applies to issuer-onboarding coordination trigger (SC-19). | **Guarded Layer** (anti-circularity: SC-16; extension via Open Layer vote would enable indefinite blocking of the super-process) |
| **Steward organisation** | | | |
| Steward term length | 2 years | Long enough to develop institutional competence; short enough that elections are a real check; staggered so the platform is never without experienced stewards | Open Layer |
| Election cadence | Annual (staggered) | One cohort elected per year; at seat count 5, at most 3 seats turn over in any one election cycle, preserving continuity | Open Layer |
| Seat count | 5 | Enough for coordination diversity; small enough that elections are meaningful; a single steward's absence never blocks a quorum for any listed power | Open Layer |
| Steward recall bar | 20% affirmative quorum of enrolled citizens + 60% of recall-vote turnout | Affirmative-quorum recall ensures silence cannot remove a steward; 60% of turnout means a motivated minority cannot remove without a real majority; growth-surge defence (FR-023 mechanics) applies throughout | Open Layer |
| **Conduct, removal, expulsion (FR-103..105)** | | | |
| Conduct-vote minimum quorum | 10% of eligible party members | Sets a floor that prevents a tiny faction from stigmatising a member; individual conduct-vote choices are **not published individually**, and the aggregate is public (FR-103) _(v2.13.0, cycle-1 ISS-04: this cell read "individual votes are private, aggregate public (FR-103)". In v1 the platform database **CAN** see individual choices — FR-131(b) — so "private" here meant **unpublished, not unseen**. This is internal design rationale, not product copy, so FR-131's ban does not bind it; it is corrected anyway, because this document's own diagnosis of the v2.7.0 title ruling is that a reader does not parse that distinction. The standing FR-131 sweep is widened from the five routed phrases to a **bare-word scan** of "private" / "anonymous" / "secure" in vote-adjacent prose.)_ | Open Layer |
| Removal vote bar | T2 structural tier approval (60% of votes cast, 15% quorum) | Removal is more consequential than an ordinary policy vote and MUST require the structural tier with its adaptive quorum and surge defence (FR-104) | Open Layer |
| Expulsion vote bar | T3 constitutional tier (80% of votes cast, 20% quorum) | Expulsion is the most severe action; the bar MUST exceed removal; the 20 pp supermajority margin ensures near-consensus is required (FR-105) | Open Layer |
| Failed-recall cooldown | 6 months | Prevents harassment-campaign cycles; mirrors the recall-cooldown precedent from FR-044/FR-042 party-level recall mechanics | Open Layer |
| **Founding parameters** | | | |
| Founding member count minimum | 5 enrolled citizens | FR-076: five named co-founders must sign the founding constitution; low enough not to exclude small movements, high enough to prove non-trivial coordination | Open Layer |
| Disclosure schedule lead time | 21 days before Worker declaration deadline | FR-084: published 3 weeks in advance; enough time for a prospective Worker to make an informed decision; no extra demands permitted after the deadline | Open Layer |
| **Dispute stage timelines (FR-100)** | | | |
| Intake acknowledgment | 48 hours from submission | Rapid enough to prevent strategic delay; automated on-chain acknowledgment | Open Layer |
| Evidence window | 14 days | Time-bounded; ensures the dispute does not drag; panel receives all evidence before formation | Open Layer |
| Panel formation | 7 days after evidence window closes | Sortition panel formed within one week; breach is recorded on the decision trail | Open Layer |
| Recommendation publication | 14 days after panel formation | Panel must publish; breach recorded; no standing panel means no indefinite deferral | Open Layer |
| Deciding member vote or code execution | 30 days after recommendation publication | Ensures members have time to read and vote; code executes automatically on window close | Open Layer |
| **Trust-anchor lifecycle** | | | |
| Anchor rotation staleness SLA (SRE) | 30 days from issuing authority's public rotation announcement to on-chain enactment-vote open | Bounds the window between an issuing authority announcing a new trust-anchor key and the community initiating the governance vote; the SRE MUST alert (Doc 11 SLO) if 30 days elapse without an open vote; 30 days is long enough for community awareness and proposal drafting, short enough that the on-chain record does not diverge from reality for more than one credential-renewal cycle before a vote is in progress | Open Layer |
| Anchor rotation overlap window | 60 days | Both old and new anchor accepted for 60 days after rotation enactment; large enough to accommodate citizens who renew credentials at normal refresh cadence; Sybil window risk mitigated because both anchors MUST be registered via governance and enrol() deduplication by nullifier still applies | Open Layer |
| Ordinary revocation timelock | 30 days | Enough time for the community to identify false alarms; `REVOCATION_PENDING` is entered at enactment (public on-chain signal); `enrol()` against the affected anchor CONTINUES until `anchorEffectiveAt` (30 days after enactment) and reverts `AnchorRevoked` from then on; the enactment-to-effectiveAt window is the accepted RISK-30 residual; existing enrolled credentials unaffected | Open Layer |
| Emergency revocation timelock | 7 days | Shortened but non-zero; requires a passed governance vote at the ordinary platform governance voting bar (60% supermajority / 15% quorum — UNCHANGED from the ordinary revocation path per ADR-020); only the timelock is shortened, not the voting requirement; seven days allows false-alarm veto without enabling unilateral operator action. NOTE: revocation and rotation are governance ACTIONS governed at the ordinary platform governance bar; the Guarded Layer super-process (80% / 25% / 180-day two-vote) applies only to AMENDMENTS of named absolutes — it does not apply here. RISK-30 accepted residual: 7-day window is a Sybil enrolment opportunity if private key is compromised between enactment and emergency vote. | Open Layer |

### 10.12 Design system & screen inventory

**Source:** Approver directive, Rathish, 2026-08-22. Wireframe input: `design/wireframes/index.html` (15 phone screens, 3 flows). **Referent correction (applied):** The approver attributed the verified-status-privacy ruling to "OI-19"; that is a mislabel. OI-19 is the invite-gating ruling (FR-125; DECISIONS-2026-08-20-OI19-OI20.md). The verified-status-privacy ruling is the **FR-124 ruling** (Doc 02 v2.3.1, Rathish, 2026-08-20; FR-124 normative text and ruling banner near line 694 of Doc 02). All citations in this section use FR-124. The mislabel is noted in the architect memory note (artifacts/architect-2026-08-22T1120.md) and does not affect any requirement; no silent referent swap was made.

---

#### 10.12.1 Assessment verdict

**(a) Against the three-tier privacy model (FR-082..086, FR-124): SOUND.** The wireframe's privacy-status element renders in three states corresponding exactly to the three participation tiers (anonymous / verified-private / public). Every instance of the element in the wireframe appears in an authenticated self-view context — the holder's own screen — consistent with FR-124(a) (private self-view for all verified participants) and FR-082 (Supporter anonymous unconditionally). Other-actor views in the wireframe show only aggregate member counts (e.g. "12,480 verified members") or Worker/Candidate public-tier data ("Public" pill on candidate rows), consistent with FR-124(b) (aggregate-only public counts) and FR-124(c) (Worker/Candidate badge permitted). Full leak-check results are in §10.12.3.

**One normative invariant required (not a current wireframe defect — a design constraint on the built component):** The privacy-status component's `ver` state MUST NOT render on any screen or route accessible without authentication, or on any surface displaying another actor's data. The wireframe as-drawn satisfies this; the component spec in §10.12.3 makes it normative.

**(b) Against the SCR stubs (SCR-01..SCR-23): PARTIALLY SOUND.** The 15 wireframe screens cover 16 of the 23 SCRs with full or partial coverage. 7 SCRs have no wireframe screen at all. The full mapping is tabulated in §10.12.4. Gaps are design debt, not conflicts.

**(c) Against ADR-011 (packages/ui designation): SOUND.** ADR-011 designates `packages/ui` as "design system (accessible components, i18n primitives)". The token set and privacy-status component formalised here are precisely the design-system foundation ADR-011 anticipated. ADR-023 (registered in §12) records the adoption decision.

**Caveats and conflicts:** Four items in §10.12.6 require attention before build. Three are clear conflicts; one is an illustrative value that must not become a constant.

---

#### 10.12.2 Design tokens — DES-093

| DES | Element | Purpose | Traces | Implementation location |
|---|---|---|---|---|
| DES-093 | Design token set for `packages/ui` | Formalises the visual language for all citizen-facing surfaces | FR-082..086, FR-124, NFR-011, NFR-013, DES-081, DES-083, DES-085 | `packages/ui/tokens.css` (not yet created — Coding phase) |

**Colour tokens (verbatim from wireframe `:root`):**

| Token | Hex | Semantic role |
|---|---|---|
| `--navy` | `#1E2761` | Primary public/party territory fill |
| `--navy2` | `#2E3D7E` | Card fill on navy surfaces |
| `--navy3` | `#3F4E96` | Avatar fill; accent on navy surfaces |
| `--amber` | `#F2B134` | Primary CTA; petition/active pill; amber privacy-dot (pub state) |
| `--amber-deep` | `#D9971C` | Eyebrow text on navy; amber hover |
| `--ice` | `#CADCFC` | Secondary text on navy surfaces |
| `--ice-deep` | `#AEC0E8` | Sub-text on navy surfaces |
| `--paper` | `#F7F5EF` | Primary private/user territory fill |
| `--paper2` | `#EFEBE0` | Progress bar track; secondary fills on paper surfaces |
| `--ink` | `#1B2440` | Primary text on all surfaces |
| `--grey` | `#5A6685` | Secondary text on paper surfaces |
| `--grey-soft` | `#8892AE` | Tertiary text; anonymous privacy-dot |
| `--green` | `#2C7A5B` | Verified state; "on track" pill; success icons |
| `--green-soft` | `#E7F1EC` | Verified privacy-status background; "good" note fill |
| `--red` | `#B4483C` | Against-vote bar in tally; error states |
| `--line` | `#E4E1D6` | Borders; dividers; progress track on paper |

**Typography:**
- `--serif: 'Fraunces', Georgia, serif` — display and title text (h1, h2, card headings, avatar initials)
- `--sans: 'Inter', system-ui, sans-serif` — body, labels, buttons, captions

**Radii and shadow conventions (from wireframe CSS, no separate token):** Phone shell 42 px; screen 32 px; card 16 px; button 14 px; pill 20 px; privacy-status element 12 px; avatar 11 px. Card shadow: `0 2px 6px rgba(30,39,97,.05)`. Button active: `scale(0.98)`.

**Note — typeface bundle risk:** Fraunces is a variable font with significant GSUB tables. The engineer MUST verify the combined font bundle (Fraunces + Inter) meets the 15 MB install floor (DES-082) and evaluate self-hosting versus Google Fonts CDN. The Google Fonts CDN is blocked by the strict CSP in the PWA shell (ADR-012); self-hosting is the default requirement.

**Territory rule (normative):** Surfaces representing public party territory (readable by any citizen, anonymous or authenticated) use the `body.navy` class. Surfaces representing a private authenticated user session use the `body.paper` class. This rule is semantic, not stylistic:
- **Navy territory:** 1.1 Welcome (public promise screen), 3.5 Accountability dashboard (public party performance), and any future public-party overview or discovery surface.
- **Paper territory:** 1.2 Browse (authenticated personal context), 1.3..1.6 (enrolment and join flows), 2.1..2.3 (creation and petition flows), 3.1..3.4 (personal governance), 3.6 (one-way door to public role).
- A screen that violates this assignment (e.g. a private authenticated flow rendered on a navy surface) is a design defect detectable at review.

---

#### 10.12.3 Privacy-status component — DES-094

| DES | Element | Purpose | Traces | Implementation location |
|---|---|---|---|---|
| DES-094 | Privacy-status component | Persistent authenticated-holder self-view element; renders one of three states; normatively binds FR-124 at the component level | FR-082..086, FR-124, FR-131, NFR-001, NFR-002, NFR-024 | `packages/ui/src/PrivacyStatus.tsx` — **BUILT, and mounted on no shipped surface** *(v2.14.1, cycle-1 ISS-03: this cell read "`packages/ui/PrivacyStatus` (not yet created — Coding phase)" — true when written, false since the enrolment drop, and retained here as the superseded text rather than deleted. The component **exists**: v2.14.0's own facts depend on it existing (`PrivacyStatus.tsx:251-252`; a green test pinning the `anon` title). It is **mounted on no shipped surface** — six explicit non-render comments across five consuming files, re-verified by Doc 09 v1.9.0, with the non-render decision at Doc 06 v2.8.1 §7 item 18. Its **`anon` copy is governed for Definition-A (v1) by clause 10** of the normative binding list below, and may not render until clause 10's five-condition render trigger is satisfied (`OPEN-28`); its **`ver` copy by clauses 7 and 9**. The staleness was pre-existing rather than introduced at v2.14.0, but v2.14.0 is the version that made it consequential, which is why it is corrected here.)* |

**Three states — exact wireframe copy and colour bindings:**

> **Normative note (v2.7.1 — ISS-03; scope extended from the subtitle to the TITLE at v2.12.0; quotations corrected at v2.13.0):** The table below is **informational reference copy** maintained per the annotate-don't-delete convention. The `ver` row preserves the v2 reference **title and** subtitle, each annotated as v2-ZK-backing-only, but the two annotations are **not the same string**: the subtitle cell carries "(v2 ZK backing only — see backing-aware copy below)" and the title cell carries the longer "(v2 ZK backing only — the v1 default title is "Verified"; see backing-aware copy below)". **Clause 7 (subtitle) and clause 9 (title) in the normative binding list below, together with the backing-aware sub-table, are the normative implementation spec for BOTH the `ver` title and the `ver` subtitle.** The v1 default `ver` title ("Verified") and the v1 default `ver` subtitle ("Your vote counts. How you voted is never made public.") do not appear in this table — they appear in the backing-aware sub-table. An engineer implementing `PrivacyStatus.tsx` MUST consult clauses 7 and 9 and the backing-aware sub-table; taking the `ver` row of this table as the implementation spec will produce an incorrect hardcoded v2 title and an incorrect hardcoded v2 subtitle, both of which those clauses expressly prohibit.
>
> **Scope extended again at v2.14.0 — the note now guards the `anon` row too (`OPEN-27`).** Until this version the note warned about the `ver` row alone. **The `anon` row of the table below is likewise informational reference copy and is NOT the implementation spec.** Its title cell ("Anonymous") and its subtitle cell ("Nothing you do here is linked to you") are the **v2.7.1 reference strings and are SUPERSEDED for Definition-A (v1)** by **clause 10** of the normative binding list below, which specifies the v1 title and the three context-selected v1 subtitles together with their fail-honest default. An engineer implementing `PrivacyStatus.tsx` MUST consult **clause 10** for the `anon` state exactly as they MUST consult clauses 7 and 9 for the `ver` state; taking the `anon` row of this table as the implementation spec will produce copy that **fails FR-131 clause (e)**. **This is the third time the same defect has been found in this one note, and the shape is identical each time:** v2.7.1 guarded the `ver` subtitle and left the `ver` title reading as normative, which shipped (Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`); v2.12.0 guarded the `ver` row and left the `anon` row reading as normative, which did not ship only because the component is mounted on no surface. **A note that guards one row of a three-row table does not guard the table.** The `pub` row carries no banned word and makes no unlinkability claim, and is dispositioned unchanged below.
>
> _(v2.13.0, cycle-1 ISS-05: the v2.12.0 form of this note presented one annotation string as a quotation applying to "each" of the two cells. Only the subtitle cell carries that string. A quotation matching one of the two cells it claims to quote is a self-inconsistency in the one note whose job is to stop a reader taking the wrong cell as normative.)_
>
> _(v2.12.0: the v2.7.1 form of this note scoped its warning to the **subtitle alone**. That scoping is exactly what left the `ver` **title** cell reading as normative — and it is the defect Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03` caught in shipped code, where `PrivacyStatus.tsx` hardcoded "Verified — private" as the v1 title. A note that guards one cell of a two-cell row does not guard the row.)_

| State | CSS class | Dot colour | Background | Text colour | Title | Subtitle |
|---|---|---|---|---|---|---|
| `anon` | `privacy anon` | `--grey-soft` (#8892AE) | #ECEEF5 | #41496b | "Anonymous" *(v2.14.0 — **SUPERSEDED for v1**; reference copy only. The v1 title is specified by **clause 10**; this cell MUST NOT be implemented. `OPEN-27`)* | "Nothing you do here is linked to you" *(v2.14.0 — **SUPERSEDED for v1**; reference copy only. The v1 subtitle is **context-selected** by **clause 10**; this cell MUST NOT be implemented. `OPEN-27`)* |
| `ver` | `privacy ver` | `--green` (#2C7A5B) | `--green-soft` (#E7F1EC) | #1f5a42 | "Verified — private" *(v2 ZK backing only — the v1 default title is "Verified"; see backing-aware copy below)* | "Your vote counts. Your identity is not stored." *(v2 ZK backing only — see backing-aware copy below)* |
| `pub` | `privacy pub` | `--amber` (#F2B134) | #FDF3E0 | #8a5b10 | "Public" | "You chose a public role. Your record is visible" |

**Backing-aware copy for `ver` state (v2.7.0 amendment — approver directive Rathish, 2026-08-25; engineer FLAG A, `artifacts/engineer-2026-08-24T2015.md`):**

| Backing | Title | Subtitle | When rendered |
|---|---|---|---|
| v2 (ZK): `getProperties().unlinkable = true` | "Verified — private" | "Your vote counts. Your identity is not stored." | Live `IEligibilityVerifier` backing (DES-095, §10.13.2) declares `unlinkable = true` |
| v1 (conventional): `getProperties().unlinkable = false`, or call absent/error — **fail-honest default** | "Verified" *(v2.12.0 — this cell read "Verified — private"; overruled, see the banned-words analysis below)* | "Your vote counts. How you voted is never made public." | All other cases, including getProperties() failure or absent backing information |

**FR-131 banned-words analysis (v2.7.0, architect record — the TITLE ruling is SUPERSEDED at v2.12.0):**

> **SUPERSEDED — OVERRULED at v2.12.0 (2026-09-06).** Superseding authority: **Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`** (pre-mount blocker raised 2026-09-02 against the shipped `PrivacyStatus.tsx` title) and the **approver's direction of 2026-09-05 (Rathish)**. **The rule that now governs, in v1 and in v2:** the word **"private" may appear on a voting-adjacent status badge only against a live `IEligibilityVerifier` backing that declares `getProperties().unlinkable === true`.** Against a v1 conventional backing the `ver` title is **"Verified"** — the fail-honest default, exactly as the subtitle already was under clause 7.
>
> **Why the v2.7.0 reading fails.** FR-131's closing sentence (Doc 02 §4.45) bans "private", "anonymous", "receipt-free" and "secure" across *the v1 product — its UI, README, and all public-facing materials* — wherever they describe v1 voting behaviour. It carves out no exception for "status visibility". The `ver` badge is a persistent element on the same authenticated surfaces from which a member votes, and it sits directly above a subtitle whose entire subject is the member's vote ("Your vote counts…"); a reasonable member reads the badge as a claim about the ballot. In v1 that claim is false: the platform database can see vote direction and party membership (FR-131(b)). An architect's reading of what a word "describes" cannot outrank what a member is likely to understand from it — that is the whole point of the honesty doctrine (§0.5 of Doc 04; DES-098).
>
> **Implemented and guarded, not merely written:** `packages/ui/src/PrivacyStatus.tsx` constants `VER_TITLE_V1 = 'Verified'` and `VER_TITLE_V2 = 'Verified — private'`, selected by `backingProperties?.unlinkable === true`, with `aria-label` following the selected title; **UT-0759** asserts all four paths (prop absent / `false` / `true` / malformed). The historical v2.7.0 text is retained verbatim below per annotate-don't-delete so the reversal is legible; it **MUST NOT** be relied on.

_(v2.7.0 text — SUPERSEDED, retained for the trail:)_ Title "Verified — private": the word "private" describes the **visibility of the holder's verified status** (private to the holder; never published per-individual; aggregate-only by FR-124(b)), NOT voting behaviour. FR-131's ban ("MUST NOT use 'private' to describe v1 voting behaviour" — §10.13.6 DES-098) does not apply to a title describing *status visibility*. The title is COMPLIANT in v1 and requires no change.

**v1 title "Verified" (v2.12.0, architect record — this is the ruling in force):** no banned word is present; the title makes no claim about the ballot at all. It is truthful for v1 — the holder's COUNTING-tier eligibility (FR-123) is real, and the fact of it is restricted-class and never published per-individual (FR-124(b)). Grade-8 reading level; one word. **COMPLIANT.** **v2 title "Verified — private"** renders only when the live backing declares `unlinkable === true`, the one case in which "private" is true of the ballot; clause 7's proxy annotation applies to the title exactly as it applies to the subtitle — any future backing declaring `unlinkable: true` MUST satisfy the full "no identity at rest" guarantee by design review before the v2 title may render behind it. **COMPLIANT in v2 only.**

v1 subtitle "Your vote counts. How you voted is never made public.": no banned words present; truthful for v1 (aggregate-only publication is policy-enforced by FR-124(b); individual vote direction is never published to any public audience; the operator-level DB access is separately disclosed by DES-098/FR-131); Grade-8 reading level; one short sentence. COMPLIANT.

**`anon` state copy analysis (v2.7.1 — reworked from v2.7.0 per ISS-01):**

**User class.** The `anon` state renders for **authenticated open-tier users** — phone-verified accounts that have NOT completed government-ID verification and therefore do not hold COUNTING-tier eligibility. This is the specific user class for whom the following analysis is most consequential.

**Copy:** "Nothing you do here is linked to you."

> **SUPERSEDED IN PART — READ THIS BEFORE THE TWO PARAGRAPHS BELOW (v2.14.1, 2026-09-20; cycle-1 ISS-01, Medium).** The two paragraphs immediately following — **"Interpretive basis (explicit — stated here, not assumed)"** and **"FR-124(b) aggregate-only policy"** — are the **v2.7.1 interpretive basis for the `anon` copy**. That basis is **SUPERSEDED for Definition-A (v1)** by the v2.14.0 ruling recorded further down this section and by **clause 10** of the normative binding list. They are **retained verbatim** per annotate-don't-delete, as the record of the reasoning clause (e) displaced, and they **MUST NOT** be relied on as the basis on which either `anon` string is truthful.
>
> **Which half is superseded and which half survives — stated plainly, because the two were previously indistinguishable to a reader working top-down.** **SUPERSEDED: the gloss.** The reading of "linked" as "***publicly*** linked", and with it the second paragraph's closing sentence, *"This is the operative basis on which 'linked to you' is truthful in the public sense."* FR-131 **clause (e)** is **not a publication rule** — it is a rule about what **Trumocracy itself** can do — and it expressly makes the **ordinary grade-8 reader's** reading govern over the **author's gloss**. That is **FINDING 1** below, and it is why the subtitle FAILS. **SURVIVES, unchanged, true, and load-bearing: the FR-124(b) fact itself.** No participant action is ever published linked to any individual identity; publication is **aggregate-only**. That fact is not disturbed by anything in v2.14.0, and it is exactly what **clause 10(b)**'s `'browse'` and `'join'` strings rest on — *"What you do here is not made public. Our own records can link it to your account."* / *"Your membership is not made public. Our own records can link it to your account."* What clause (e) forbids is **not** stating that fact; it is stating it as a **universal negative** from which the reader concludes that Trumocracy itself cannot link them to the act. **The third context is the reason no single string works:** on **endorsing (2.3)** the aggregate-only framing does not apply at all, because endorsement is **public by design** (Doc 14 §2.2) — which is FINDING 3, and why clause 10(b)'s `'endorse'` string makes **no** non-publication claim. *(The cycle-1 report offered the formulation "endorsement is published pseudonymously, not identity-linked"; this section states the surviving half as the aggregate-only publication fact plus clause (e)'s public-by-design rule instead, because **no design record in this document establishes a pseudonymous-publication property for endorsement**, and the ruling must not rest on a property it has not specified. The distinction the report asked for — which half survives — is made, on sourced grounds.)*
>
> **Why this banner sits here, above, and not only below.** The v2.14.0 supersession banner further down this section is scoped to "both `anon` decisions **below**", so it never reached these two paragraphs. A reader working top-down through the `anon` analysis therefore met the superseded gloss **as current** before meeting any supersession marker. That is this document family's signature defect in its own house style — **a note that guards one row of a three-row table does not guard the table** — appearing this time in the very version that names the defect three times. It is recorded that way rather than tidied away.

**Interpretive basis (explicit — stated here, not assumed).** This claim is sustained only in the sense of "publicly linked to your real-world self through any published record." It does NOT mean "unreadable by the operator." This distinction must be stated plainly: in v1, an authenticated open-tier user's platform actions — party joins, endorsements, and browsing-event records captured by the indexer — ARE associated with their DB account. The `phone_hash` (HMAC-SHA-256/KMS-pepper of the verified phone number; Doc 02 H-16) is held in the operator's restricted-class credential store. An operator holding the KMS pepper CAN derive the original phone number from `phone_hash`. If a government-ID verification has been completed, `subject_id_hash` (HMAC-SHA-256/KMS-pepper of the document subject ID; Doc 02 H-18) is also retained. In the India pilot: the TRAI SIM-registration mandate requires SIM cards to be registered to a named real person (ADR-025, "Why phone over email"). This makes the chain `platform account → phone_hash → phone number → TRAI-registered real-world identity` a concrete, subpoena-accessible path to a real-world person (Doc 02 H-16, H-18; §10.13.7 T-01, T-02). This is not a theoretical capability — it is the disclosed v1 posture accepted under the deferred-with-disclosure model (T-01 CONFIRMED, Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4).

**FR-124(b) aggregate-only policy.** No participant action is ever published linked to any individual identity. No published record accessible to anyone other than the operator links any action to the `anon` user's account or phone number. This is the operative basis on which "linked to you" is truthful in the public sense — the claim holds for every published record. The operator-accessible linkage is real but is a platform-data-practices concern, not a published-record concern, and is accepted as a disclosed v1 limitation.

> **_(v2.14.1 — annotated in place at the paragraph, per cycle-1 ISS-01 (Medium). The paragraph above is retained verbatim; nothing in it is deleted.)_** **Its closing sentence is SUPERSEDED for Definition-A (v1) and MUST NOT be read as current:** *"This is the operative basis on which 'linked to you' is truthful in the public sense."* **FINDING 1 below is the ruling in force.** FR-131 clause (e) is not a publication rule and makes the **ordinary reader's** reading govern over the **author's gloss**, so *"truthful in the public sense"* is no longer the test the `anon` subtitle has to pass — and on that test the subtitle **FAILS**. **What survives in this paragraph is its first two sentences**, unchanged and load-bearing: publication is **aggregate-only**, no published record links any action to the `anon` holder, and the operator-side linkage is real and disclosed. Those facts are **true**, are not reopened by v2.14.0, and are what **clause 10(b)**'s `'browse'` and `'join'` strings say in the reader's own words — stating the not-published half **and** the operator-records half **in the same string**, which is clause (e)'s approved satisfying pattern. **The same is true of the paragraph above it** ("Interpretive basis"): its **facts** about `phone_hash`, `subject_id_hash`, the KMS pepper and the TRAI chain (Doc 02 H-16, H-18; §10.13.7 T-01, T-02) are **true and still relied on** — FINDING 1 cites them — while its **conclusion**, that these facts leave "linked to you" truthful because the linkage is not *published*, is the gloss clause (e) displaces. **Facts survive; the gloss does not.**

**Disclosure gap acknowledged.** DES-098 (the FR-131 honesty notice) applies at vote-casting time (SCR-13/14 — ballot booth and vote-confirmation screen only). The `anon` pill renders on browsing (screen 1.2), party-joining (screen 1.6), and endorsing (screen 2.3) with no equivalent contextual disclosure at the point the claim is displayed. A user seeing "Nothing you do here is linked to you" while browsing parties or joining a party has no in-context signal that the platform DB associates their actions with their account and holds a hash linkable — with the KMS pepper — to their phone number and, in the India pilot, to a TRAI-registered real-world identity. This is a real gap; it is addressed normatively in clause 8 below.

**Resolution — option (a) adopted (architect decision, 2026-08-25).** A normative disclosure obligation for non-vote `anon` contexts is added as clause 8 in the DES-094 normative binding list below. Rationale for option (a) over option (b) (design debt): recording the gap as named debt with a milestone would allow the component to ship in the enrolment sprint without any disclosure mechanism in browsing, joining, and endorsing contexts — exactly the contexts where the `anon` pill appears with no other disclosure currently present. A normative clause in the component spec closes the gap at the implementation-obligation level; the engineer building `PrivacyStatus.tsx` has an enforceable obligation rather than a deferred note. DES-098's scope (SCR-13/14 ballot booth) is unchanged.

> **SUPERSEDED — both `anon` decisions below are OVERRULED at v2.14.0 (2026-09-20), on `OPEN-27`.** Superseding authority: **Doc 02 v2.17.3 §4.45 FR-131 clause (e)** (entered at v2.17.0; product-owner ruling 2026-09-06, CONFIRMED by the approver Rathish Kumar 2026-09-06, DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11) together with **§8 FR-131 Scenarios 8 and 9**, routed here by **Doc 04 v1.6.0 §13 `OPEN-27`**. **What is superseded:** (a) the **2026-08-25 "no v1 subtitle variant required" decision**, in full; (b) the **v2.13.0 `anon` TITLE disposition**, as to **Definition-A (v1)**. **The rule that now governs is `clause 10`** of the normative binding list below. The full v2.14.0 reasoning — the two findings, the third finding that no single static subtitle can be honest across clause 8's three contexts, the rejected alternatives, and the render trigger — is recorded **immediately after the re-open triggers below**, so that the superseded reasoning and its replacement read in sequence.
>
> **Why the superseded reasoning fails, in one sentence each.** The **subtitle** decision rescued "Nothing you do here is linked to you" by reading "linked" as "***publicly*** linked" on the strength of FR-124(b)'s aggregate-only **publication** policy — but clause (e) is not a publication rule, it is a rule about what **Trumocracy itself** can do, and it expressly makes the ordinary grade-8 reader's reading govern over the author's gloss. The **title** disposition rested on the premise that the badge cannot be describing an open-tier user's **voting** behaviour because that user cannot vote — a premise that is **still true**, and which fails only because the ban is no longer voting-scoped: it now reaches "any other v1 participation act as defined in clause (e)", and clause 8 renders the pill on **party-joining (1.6)** and **endorsing (2.3)**, two acts clause (e) names.
>
> **Retained verbatim per annotate-don't-delete, and it matters here.** Both decisions below, and the four paragraphs of the TITLE disposition that follow them — the disposition, "Why this is not the reading that was just overruled", "What this disposition does NOT claim", and the four re-open triggers — are **retained exactly as written** and are the record of what was reasoned, when, and on what. They **MUST NOT** be relied on as the rule in force for v1.

_(2026-08-25 subtitle decision — SUPERSEDED at v2.14.0, retained for the trail:)_ **`anon` subtitle v1 variant — no change (architect decision, 2026-08-25).** "Nothing you do here is linked to you" is sustainable under the explicit interpretive basis stated above: no `anon`-state action is published linked to any individual identity in either v1 or v2 (FR-124(b) aggregate-only policy). The operator-side linkage is real in v1 — but that is a platform-data-practices disclosure concern addressed by clause 8, not by a subtitle change. No v1 subtitle variant is required. This decision is recorded; if a future honesty review or user-research finding establishes that "publicly linked" is not the reading a reasonable user in the India pilot context applies to the claim, a subtitle variant MUST be considered before that deployment.

_(v2.13.0 TITLE disposition — SUPERSEDED as to v1 at v2.14.0, retained verbatim for the trail, and it runs from here through the four re-open triggers below:)_ **`anon` TITLE banned-word disposition (v2.13.0 — added per cycle-1 ISS-03; the analysis that was missing).** The `anon` title is the bare word **"Anonymous"** — one of FR-131's four banned words — hardcoded in the same `STATE_CONFIG` of the same component as the `ver` title (`packages/ui/src/PrivacyStatus.tsx`). Until this version, this was the **only one of the three state analyses with no banned-word line at all**: the `pub` analysis states "No banned words" and the `ver` analysis devotes four paragraphs to one. v2.12.0 minted a normative rule that FR-131's ban reaches voting-adjacent **status** copy, and then dispositioned one of the two badge states that rule touches. That is the same shape as the defect v2.12.0 was written to correct, at component scale rather than cell scale.

**Disposition: COMPLIANT in v1 — the ban is not engaged.** The basis, stated explicitly rather than assumed: FR-131's closing sentence bans the four words where they **describe v1 voting behaviour**. The `anon` state renders only for **open-tier** users — phone-verified accounts without government-ID verification, the user class stated at the head of this analysis — who by **FR-122/FR-123 cannot cast a binding vote at all**. A badge on a user who cannot vote is not describing that user's voting behaviour; it names their **participation tier**. Clause 8's contexts are all non-vote by construction: browsing (screen 1.2), party-joining (1.6), endorsing (2.3).

**Why this is not the reading that was just overruled.** v2.7.0 ruled the `ver` title compliant because "private" described *status visibility* rather than voting behaviour, and that reading is OVERRULED above. This disposition is deliberately **narrower** and rests on a different fact: the `ver` badge renders for users who **can** vote, on the authenticated surfaces from which they vote, so the reasonable-member reading reaches the ballot; the `anon` badge renders only for users who cannot. **The distinction is the voter, not the word.** If that fact ever changes, this disposition falls with it — see the triggers below.

**What this disposition does NOT claim.** It does **not** claim the `anon` copy is fully truthful. Clause 8 expressly concedes that "Nothing you do here is linked to you" is **not literally true in v1**: the platform DB associates open-tier actions with the account; `phone_hash` is derivable to a phone number by an operator holding the KMS pepper; and in the India pilot that chain reaches a TRAI-registered real person (Doc 02 H-16, H-18; §10.13.7 T-01, T-02). That gap is a **disclosure** obligation, discharged by clause 8 — whose data-practices link is **still unbuilt** (owner: engineer, enrolment sprint) — and not an FR-131 banned-word question. Recording the compliance finding without also recording this concession would be exactly the tidier-than-the-record over-claim this document family has been marked down for.

**Re-open triggers — this disposition MUST be revisited if any of these holds:** (i) the `anon` badge ever renders on a vote-casting surface, or for any user who can cast a binding vote; (ii) FR-122/FR-123 change so that open-tier participation includes binding voting; (iii) FR-131 is amended to ban the four words unconditionally rather than "to describe v1 voting behaviour"; (iv) user research or an honesty review shows open-tier members read the badge as a claim about how their vote is handled. Trigger (iv) is the same standing condition the `anon` subtitle decision already carries.

_(End of the retained, superseded v2.13.0 material. The ruling in force follows.)_

---

**`anon` COPY RULED AGAINST FR-131 CLAUSE (e) — v2.14.0, 2026-09-20. This is the ruling in force for Definition-A (v1), and it supersedes both `anon` decisions above.**

**What was asked, by whom, and what was NOT asked.** Doc 04 v1.6.0 §13 `OPEN-27` routed one question here and deliberately declined to answer it — *"This is a copy ruling for the copy authority (Doc 03), not for this plan: ruling it in the test plan would repeat the v2.7.0 mistake of a copy ruling living somewhere other than the copy authority. What is owed is a fresh look, not a lapse."* **Doc 04's lapse analysis is correct, was reviewed and PASSed, and is not disturbed by anything here: none of the four re-open triggers above has fired.** Whether a trigger *fired* and what clause (e), read directly against these two strings, *requires* are **different questions**. Clause (e) supplies its own test and does not wait on a trigger. **No trigger fired. The requirement changed.**

**The text this copy is now measured against.** Doc 02 **v2.17.3 (Approved)** §4.45 **FR-131 clause (e)**, entered at v2.17.0 and unchanged since; acceptance criteria at **§8 FR-131 Scenarios 8 and 9**. Its operative terms, quoted because the ruling turns on them: the duty is "about **claims**, not about a list of words, and it is **not confined to the ballot**"; a *participation act* means "casting a vote, endorsing or backing a petition, **joining or belonging to a party**, or supporting a party"; "**the test is what an ordinary reader at the grade-8 reading level (NFR-023) would take the claim to mean, not whether a banned word appears**: a claim FAILS this clause if such a reader would conclude from it that **Trumocracy itself cannot link them to the act**"; where an act is "**public by design** … the copy MUST say so plainly and MUST NOT describe that act as kept private, secret or hidden"; copy that "states what the platform does **not publish**, and separately states what the platform's **own records can see**, **and makes no contrary claim elsewhere in the same string**, SATISFIES this clause"; and "**where the safe-harbour and the reader test above appear to disagree, the reader test governs**". The closing sentence now bans the four words for "v1 voting behaviour **or any other v1 participation act as defined in clause (e)**".

**FINDING 1 — the subtitle "Nothing you do here is linked to you" FAILS clause (e).** It is a **universal negative over the holder's acts**, and clause 8 renders it on **party-joining (screen 1.6)** and **endorsing (screen 2.3)** — two of the acts clause (e) names. An ordinary grade-8 reader, standing on the join screen and reading "Nothing you do here is linked to you", concludes that joining this party is not linkable to them. That is precisely and exactly the conclusion clause (e) forbids. This section has **conceded since v2.7.1** that the claim is **not literally true in v1**: the platform DB associates open-tier actions with the account; `phone_hash` is derivable to a phone number by an operator holding the KMS pepper; and in the India pilot that chain reaches a TRAI-registered real person (Doc 02 H-16, H-18; §10.13.7 T-01, T-02). **The safe harbour does not save it:** the string states the not-published half **not at all** and the operator-records half **not at all**; and clause 8's data-practices affordance is (i) a **different artefact** from the string, where clause (e)'s safe harbour is expressly "in the same string", and (ii) **still unbuilt**. **The 2026-08-25 decision is SUPERSEDED. A v1 subtitle variant is REQUIRED.**

**FINDING 2 — the title "Anonymous" FAILS clause (e) as rendered.** The v2.13.0 disposition ruled it COMPLIANT on one load-bearing premise — ***"The distinction is the voter, not the word"***: the `anon` state renders only for open-tier users who by FR-122/FR-123 cannot cast a binding vote, so the badge cannot be describing that user's **voting** behaviour. **That premise is true and remains true**, and it is exactly why the disposition does not survive. It was an answer to a **voting-scoped** ban. The ban is no longer voting-scoped. **FR-122/FR-123 are unamended; what changed is the requirement, not the voter** — which is why this is not trigger (ii), and why Doc 04 is right that no trigger fired. On screens 1.6 and 2.3 the badge renders **at the point of a named participation act**, directly above a subtitle whose subject is that act, carrying one of the four words the closing sentence now bans for that act. The title and the subtitle are rendered as **one visual unit** — one container, one `role="status"`, the title supplying the `aria-label` — so the title cannot be rescued by being read in isolation from the subtitle glued to it. **And on screen 2.3 there is a second, independent failure that does not depend on the reader test at all:** petition endorsement is **public by design** — Doc 14 §2.2, "a public act, on purpose", "only back a petition if you are comfortable being seen to support it"; the fully private alternative is the `private_endorsement` charter option, a Phase-4 flag **OFF in every v1 deployment** — and clause (e) requires copy to **say so plainly** and forbids describing such an act as kept private, secret or **hidden**. A badge reading "Anonymous" over an endorsement action describes it as hidden. **The v2.13.0 TITLE disposition is SUPERSEDED as to v1. A v1 title variant is REQUIRED.**

**FINDING 3 — and this is larger than the debt item that produced it. No single static `anon` subtitle can be honest across clause 8's three contexts.** On browsing (1.2) and party-joining (1.6), "not made public" is **true** (FR-124(b) aggregate-only; the approved exemplar `apps/web/src/i18n/en.ts` `parties.joinPrivate`, guarded by UT-0869, says exactly this of membership). On **endorsing (2.3)** the same sentence is **false**, because the endorsement is public by design. **Any single-string fix therefore trades a clause-(e) breach in one direction for a clause-(e) breach in the other** — an honest-sounding string that under-states the exposure of the one act in the set where exposure is the whole point, and where Doc 14's own guidance is that a citizen should weigh being seen before acting. The `anon` copy MUST therefore be **context-selected**, by the same fail-honest discipline clauses 7 and 9 apply to `ver`: an explicit input, an enumerated context set, and a default that claims **least** when the input is absent, unknown or malformed. **This is `clause 10`.** It is recorded as a finding in its own right because a reader of `OPEN-27` would reasonably have expected a two-string word swap, and that is not what the requirement turns out to need.

**_(v2.14.1 — one clause at the citation, per cycle-1 ISS-04 (Low). The tense is corrected; the force is not.)_** **FINDING 2 above and clause 10(b)'s `'endorse'` string both cite Doc 14 §2.2, and §2.2 is written in the FUTURE tense** — *"When backing ships, **it will be** a public act, on purpose"* — while petition **endorsement is unshipped in v1** (a contract skeleton only; Doc 09 v1.9.0), and clause 10(b)'s `'endorse'` string is in the **present** tense. **The tenses meet, and the reconciliation is this:** Doc 14 §2.2 states the **posture for when backing ships**, and clause 10(b)'s `'endorse'` string can render **only on a shipped screen 2.3** — the render trigger's condition **(ii)** permits no mount that cannot supply a context from clause 10(b)'s enumerated set, so the string becomes a present-tense claim at exactly the moment the source's future tense is discharged. **Nothing in FINDING 2 depends on the tense.** Its screen-2.3 limb rests on facts that are **true now**: endorsement is public **by design** — a design fact, not a shipped one — and the fully private alternative, `private_endorsement`, is a **Phase-4 charter flag OFF in every v1 deployment** (Doc 06 v2.8.1 flag ledger; Doc 09 v1.9.0 prod-default list). A design-stage ruling about copy that cannot render yet is the **whole posture** of this section — it is a **pre-mount** ruling — so a future-tense source is the correct source to cite; the citation simply now says so. The matching note is recorded at **§11**, against the FR-131(e) / DES-094 endorsement row that makes the same citation.

**REJECTED ALTERNATIVES** — recorded to the ADR standard, because a copy ruling without them is a preference and not a decision.
- **(a) Retain both strings; discharge the honesty duty through clause 8's disclosure link alone.** REJECTED. Clause (e)'s safe harbour is expressly "**in the same string**", and "where the safe-harbour and the reader test disagree, the reader test governs". An adjacent "Learn more" affordance does not make a false universal negative true to the reader who does not open it. Independently fatal: clause 8's link is **unbuilt** (owner: engineer, enrolment sprint), so this alternative discharges the duty with a mechanism that does not exist.
- **(b) Retain "Anonymous" as a bare tier label; fix only the subtitle.** REJECTED, and this was the most attractive option, because the v2.13.0 "participation tier" reasoning is genuinely sound **about the voter**. It fails for two reasons: the badge renders title and subtitle as one unit with the title as the accessible name, so the reader test reaches the pair, not the word; and on screen 2.3 the title alone still describes a **public-by-design** act as hidden, which breaches clause (e) without reference to the reader test.
- **(c) One replacement subtitle for all three contexts.** REJECTED on Finding 3: no single string is true on all three screens.
- **(d) Suppress the `anon` state entirely in v1.** REJECTED as disproportionate and itself dishonest by omission. FR-124 makes this element the holder's **self-view of their own posture**; deleting it would leave the open-tier holder with **no** statement of what the platform can see, which is the opposite of the honesty doctrine (§0.5 of Doc 04; DES-098). It is also a far larger change than the defect warrants, against the small-reversible-changes principle.
- **(e) Route the strings to the product-owner as a requirements question.** REJECTED. Clause (e) **is** the ruling; there is no requirements gap to fill. §10.12.3 is the copy authority — this document says so, and Doc 04 defers to it for exactly this reason. Routing a copy question **out** of the copy authority is the v2.7.0 mistake running in the other direction. (The **Arabic mirrors** are a different matter and **are** routed — see the render trigger.)
- **Title strings considered and rejected:** **"Not verified"** — defines the open tier by deficiency, contradicting FR-020/FR-122's absolute rule that verification gates **counting**, never joining, and inviting the reading that open-tier participation is second-class; **"Phone verified"** — true (FR-132(a)) but invites the holder to believe they hold COUNTING-tier eligibility, a fresh FR-131 **clause (d)** problem; **"Not public"** — the cleanest symmetric pair with `pub`'s "Public", rejected because on screen 2.3 it is **false**, which is Finding 3 reappearing in the title.

**WHAT THIS RULING DOES NOT CLAIM.** It does not claim the clause-10 strings discharge clause 8. They do not: clause 8 requires a three-part plain-language data-practices disclosure (hashed account identifier in a restricted store; open-tier actions associated with the account; the record subject to legal compulsion), and a badge subtitle is a one-line gloss, not that disclosure. **Clause 8 stands, unchanged, and its link is still unbuilt.** It also does not rule on **Definition-B (v2)**: whether a v2 ZK backing — which retains no `phone_hash` or `subject_id_hash` — can sustain "Anonymous" is **not decided here** and MUST be dispositioned in this section before any v2 `anon` variant renders, on the same discipline clause 7's proxy annotation applies to the `ver` copy.

**THE RENDER TRIGGER — what must be true before either `anon` string may render. Normative.** `PrivacyStatus` MUST NOT be mounted on any surface of a Definition-A (v1) deployment until **all five** hold: **(i)** clause 10's v1 title and the three context-selected v1 subtitles are implemented, with the fail-honest default on an absent, unrecognised or malformed context; **(ii)** the host screen supplies a context value from clause 10's enumerated set — a mount that cannot supply one is not permitted, because the default is honest but uninformative and MUST NOT become the shipping copy by neglect; **(iii)** clause 8's data-practices disclosure affordance exists on that surface; **(iv)** a `UT-####` guard in the **UT-0759 four-path pattern** covers the `anon` state — context absent / browse / join / endorse — asserting that no FR-131 banned word appears in the rendered title, subtitle or `aria-label`, and asserting each context's exact string. **The existing guard does not cover this:** `packages/ui/test/PrivacyStatus.test.tsx`'s banned-word regex is scoped to the `ver` state, and its `anon` case asserts `getByText('Anonymous')` — **a green test currently pins the non-compliant string**, and that assertion MUST change with the constant. **(v)** the `ar` mirrors of the clause-10 strings have passed the **human native-speaker review** (Doc 06 v2.8.1 §7 item 17 `ARABIC-I18N`; packet at artifacts/status/ARABIC-NATIVE-REVIEW-2026-09-20.md) — clause (e) binds "in any language", and an untranslated or mistranslated honesty string is a safety defect, not a polish item.

**NOTHING RENDERS TODAY, AND THAT IS THE POSTURE THIS RULING IS MADE IN.** `PrivacyStatus` is mounted on **no shipped surface**: six explicit non-render comments across five consuming files — `apps/web/src/components/ProvisionalStatus.tsx`, `apps/web/src/components/PartyMembership.tsx`, `apps/web/src/app/parties/page.tsx`, `apps/web/src/app/proposals/page.tsx`, and `apps/web/src/app/petitions/new/page.tsx` (twice) — **re-verified by Doc 09 v1.9.0**, with the non-render decision recorded at Doc 06 v2.8.1 §7 item 18 and these two strings inventoried at §7 item 26 (v2.7.0, ISS-05(i)) and flagged there "for re-copy-review against clause (e) **before first mount**". **This ruling is that review.** **No citizen sees either string**, so this is a **pre-mount ruling, not a live copy defect** — and that is exactly the posture in which the `ver` title defect was **missed**: it shipped, and Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03` had to catch it in code on 2026-09-02. The difference between the two cases is not diligence; it is that clause 8 created a named pre-mount moment at which someone was obliged to look. **That obligation is what the render trigger above preserves.**

**ONE NEWLY-IN-SCOPE SITE, NAMED AND ROUTED — NOT RULED.** Clause 6 of the normative binding list quotes screen 3.6's one-way-door copy: *"What you've done as an anonymous supporter stays anonymous forever. It is never linked to your new public identity."* That is a v1 public-facing claim about **supporting a party** — a clause-(e) participation act — and it carries a banned word **twice** plus an "is never linked to" construction of the same family as the subtitle ruled on above. It is **outside `OPEN-27`'s scope**, which named the two `PrivacyStatus` `anon` strings, and it is **NOT ruled here**. Two facts bound the urgency and are stated rather than assumed: it is **wireframe copy quoted normatively in clause 6**, not a shipped string — `apps/web/src/i18n/en.ts` contains "anonymous" only in clause (a)'s mandated **negated** form (`banner.notReceiptFreeTitle` / `banner.notReceiptFreeBody`, guarded by UT-0887) — and screen 3.6 is unbuilt. It is registered as **`OPEN-29`** in Doc 04 §13, owner **Ravi Deshmukh**, for the next Doc 03 increment, and routed through the project-manager. **Naming a site is not ruling it** — this is the same "one more site inventoried" discipline by which Doc 06 v2.8.1 §7 item 26 surfaced the two strings ruled above, and it is recorded here so it cannot be rediscovered as a surprise.

**Downstream — the copy authority is here, and only here.** Doc 04 §0.5 **S5** is a **build-failing** denylist over `apps/web` and `packages/ui` user-facing strings forbidding any v1 string that asserts anonymity outside a DES-098 notice denying it; the shipped `STATE_CONFIG.anon.title` is exactly such a string, so S5 as written would fail the build on copy this section approves. Doc 04 v1.4.0 §0.5 S5 therefore carries a **named carve-out citing this disposition**. It cites; it does not rule. A copy ruling living anywhere other than the copy authority is precisely the v2.7.0 mistake.

**Downstream — re-cut at v2.14.0. The carve-out is WITHDRAWN, not narrowed.** The paragraph above is retained as the record of why the carve-out existed; it is **superseded as to its conclusion**. This section no longer approves the shipped `STATE_CONFIG.anon.title` or the shipped `anon` subtitle, so **S5 has nothing left to carve out**: the two strings at `packages/ui/src/PrivacyStatus.tsx:251-252` are now **inside** S5's scan scope and **failing it**, on this section's own ruling. **Doc 04 v1.7.0 is instructed accordingly**, at every site that carries the carve-out — §0.5 S5's named exception, S5 rule 4's count, S4's scope-before-count sentence, §1.4's status roll-call and §13's `OPEN-27` row — because a correction that does not reach every place it claimed to reach is the defect this document family has FAILed on repeatedly, and a withdrawn carve-out surviving in one of five sites is a **build-failing** scan quietly not failing. **Two things S5 MUST NOT do, stated so the scan is mechanical.** It MUST NOT record the two strings as an *exception*: they are a **ruled, remediation-pending failure**, tracked as `OPEN-28` with the render trigger above as its closing condition. And it MUST NOT be read as failing a build today: the `packages/ui` string scan S5 specifies **is not implemented** — the guards that exist (`UT-0869`, `UT-0887`, `UT-0889`, `UT-0759`) are scoped to `apps/web` i18n strings and to the `ver` state — so no build is failing on this ruling, and none should be made to fail on copy the engineer has not yet been given a story to change. **The relationship between the two documents is unchanged and is the point:** this section rules; Doc 04 cites. What has changed is what it cites.

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

**VERDICT (in force — v2.14.0, 2026-09-20; `OPEN-27` closed).** Cell by cell, for **Definition-A (v1)**:

- **`anon` TITLE "Anonymous" — NOT COMPLIANT in v1.** Fails FR-131 clause (e)'s closing sentence as rendered on screens 1.6 and 2.3, and fails clause (e)'s public-by-design rule independently on screen 2.3. **A v1 title variant IS required** — specified at **clause 10**. Not ruled for v2.
- **`anon` SUBTITLE "Nothing you do here is linked to you" — NOT COMPLIANT in v1.** Fails clause (e)'s ordinary-reader test; the safe harbour does not reach it. **A v1 subtitle variant IS required, and it MUST be context-selected** — specified at **clause 10**, with a fail-honest default.
- **`ver` title and subtitle — unchanged.** Clauses 7 and 9 govern; the v2.12.0 reversal stands; nothing here re-opens them.
- **`pub` title and subtitle — unchanged. No banned words, no unlinkability claim, backing-independent.** No v1 variant needed.
- **Clause 8 — unchanged and still owed.** The non-vote `anon` context disclosure obligation is **not** discharged by clause 10's strings; its affordance remains unbuilt (owner: engineer, enrolment sprint).
- **Render trigger — five conditions, stated above and normative.** Nothing renders today; this is a pre-mount ruling.
- **No re-open trigger fired.** Doc 04 v1.6.0's analysis stands. The requirement changed; the four triggers are untouched and remain live against clause 10's copy exactly as they were against the copy it replaces.

**`pub` state copy analysis (v2.7.0):** "You chose a public role. Your record is visible." True in both v1 and v2: Workers and Candidates have voluntarily taken a public role (FR-124(c)); their public participation record is visible by design. No banned words. No identity-at-rest claims. Copy is backing-independent. **Verdict: no v1 variant needed.**

**Normative privacy binding (FR-124 — these constraints are component-level requirements, not just policies):**

1. **Self-view only (FR-124(a)):** The component MUST render only the authenticated holder's own state in their own authenticated session. It MUST NOT render on any route accessible without authentication, and MUST NOT render on any surface displaying data belonging to another actor.
2. **No other-actor render (FR-082, FR-124(a)/(b)):** The component MUST NOT render on a Supporter's public profile (no public Supporter profile exists by design — FR-082), on any other party member's page, or on any aggregate-only public view.
3. **Supporter `ver` state absence (FR-124(b)/(d)/(f)):** A Supporter's verified state MUST be absent from all public surfaces, all other-actor views, all logs, and all exports with no path available to any actor other than the authenticated holder. The `ver` state is never rendered in a context visible to anyone other than the authenticated holder. The FR-124(f) absence-test obligation applies: a test in the style of UT-0700/UT-0701 MUST verify this absence.
4. **Worker/Candidate `pub` state (FR-124(c)):** The `pub` state corresponds to voluntary role-taking. A separate static "Public" badge on the Worker/Candidate public participation record is permitted by FR-124(c). That badge is NOT a PrivacyStatus component instance; it is a distinct static label on the public-tier participation record.
5. **Aggregate counts (FR-124(b)):** Aggregate verified counts (e.g. "12,480 verified members") on public party pages are plain text derived from on-chain aggregate data. They are not PrivacyStatus component instances and do not reveal any individual's state.
6. **No retroactive linkage (FR-124(e), FR-086):** The PrivacyStatus component MUST NOT write, emit, or trigger any log entry or export that associates the holder's rendered state with any persistent record accessible to any other actor. FR-086 applies: no retroactive linkage between an anonymous Supporter's verified status and their identity is permitted through any data the system holds or emits. This obligation is particularly relevant at screen 3.6, whose copy ("What you've done as an anonymous supporter stays anonymous forever. It is never linked to your new public identity") makes the no-retroactive-linkage guarantee explicit to the user — the component rendering MUST be consistent with that guarantee.
7. **Backing-aware copy selection for `ver` state (FR-131, H-15, H-16, T-01, T-02):** The subtitle rendered in the `ver` state MUST be selected by the live `IEligibilityVerifier` backing's declared properties (DES-095 seam, §10.13.2 `getProperties()`). The v2 subtitle ("Your vote counts. Your identity is not stored.") MUST render ONLY when the live backing declares `getProperties().unlinkable = true`. The v1 subtitle ("Your vote counts. How you voted is never made public.") MUST render in all other cases — including when `getProperties()` returns `unlinkable = false`, when the call fails, or when backing information is absent. **Absence of backing information MUST fall back to the v1 (weaker-claim) subtitle — the fail-honest default; the v2 subtitle MUST never be assumed.** This ensures the stronger identity-at-rest claim is never shown against a v1 conventional backing, which retains `phone_hash` and `subject_id_hash` in the operator DB and cannot technically sustain "Your identity is not stored" (H-15, H-16, T-01 — operator can see account↔membership; T-02 — subpoena test deferred to v2). The component MUST NOT hardcode the v2 subtitle. Cites: FR-131 (no misleading identity-at-rest claim for v1 voting behaviour), H-15 (one-person-one-vote not guaranteed in v1), H-16 (hashed identity data at rest in v1), T-01/T-02 (DB operator access and subpoena deferral). *(v2.7.1 — ISS-02 annotation: `getProperties().unlinkable` is used as the subtitle-selection trigger because the current v2 ZK backing that declares `unlinkable: true` also guarantees "no identity data at rest" by construction — ZK enrolment; nullifier-only on-chain; no `phone_hash` or `subject_id_hash` retained. The `unlinkable` property is a **proxy** for the full "no identity at rest" guarantee, not an independent test. Any future backing declaring `unlinkable: true` MUST satisfy the same guarantee by design review before the v2 subtitle may render behind it. This is a design-review invariant for future backing registrations.)*
8. **Non-vote `anon` context disclosure (FR-131, ADR-025 §(c-ii), Doc 02 H-16, H-18):** In any screen where the `anon` pill renders in a non-vote-casting context — specifically browsing (screen 1.2), party-joining (screen 1.6), and endorsing (screen 2.3) — the component or its host screen MUST provide an accessible data-practices disclosure link adjacent to the pill. The disclosure MUST inform the user, in plain language at Grade-8 level or lower, that: (i) the platform holds a hashed account identifier associated with their phone number in a restricted-access store; (ii) their open-tier participation actions are associated with that account in the platform DB; and (iii) this account record is subject to legal compulsion in the jurisdiction of operation. The minimum disclosure mechanism is a "?" or "Learn more" affordance adjacent to the `anon` pill that surfaces a one-paragraph plain-language data notice. This obligation exists because DES-098's honesty notice (FR-131) applies only at vote time (SCR-13/14) and does not cover non-vote contexts where the `anon` pill displays the claim "Nothing you do here is linked to you." DES-098's scope is unchanged; this clause supplements it for non-vote surfaces. Cites: FR-131 (honesty notice obligation); ADR-025 §(c-ii) (phone number at rest as identity data in v1); Doc 02 H-16 (`phone_hash` is derived identity data held in operator DB); Doc 02 H-18 (`subject_id_hash` retained as derived identifier); T-01 (operator-side linkage accepted with disclosure). Owner: engineer (enrolment sprint). Trigger: MUST be implemented before any screen rendering the `anon` pill in a non-vote context is shipped to production. **_(v2.14.0 — this clause is UNCHANGED in substance and is still owed and still unbuilt; two things about it are re-pointed, and nothing is deleted. (1) The string it quotes — "Nothing you do here is linked to you" — is SUPERSEDED for v1 by clause 10, which was ruled on `OPEN-27`. The quotation is retained because it is the record of the claim this clause was written to disclose against; read it as historical. (2) Clause 10 does NOT discharge this clause. Clause 10 replaces a one-line badge gloss with an honest one; clause 8 requires a three-part plain-language data-practices disclosure — hashed identifier · action-to-account association · legal compulsion. A badge subtitle is not that disclosure, and clause (e)'s safe harbour being "in the same string" cuts both ways: the badge cannot carry clause 8's content, and clause 8 cannot be satisfied by the badge. This clause and clause 10 are cumulative, and both are conditions of the render trigger recorded in the `anon` ruling above. The three contexts this clause enumerates — 1.2, 1.6, 2.3 — are the same enumerated set clause 10 selects copy by, deliberately: one list, two obligations, so a future context can only be added in one place.)_**

9. **Backing-aware `ver` TITLE selection (FR-131; v2.12.0 — clause 7's rule, applied to the title):** The title rendered in the `ver` state MUST be selected by the same live-backing test as clause 7 applies to the subtitle. The v2 title ("Verified — private") MUST render **ONLY** when the live `IEligibilityVerifier` backing declares `getProperties().unlinkable === true`. The v1 title ("Verified") MUST render in every other case — `unlinkable = false`, the call failing, the property malformed, or backing information absent. **Absence of backing information MUST fall back to the v1 title — the fail-honest default; the v2 title MUST never be assumed.** The component's accessible name (`aria-label`) MUST carry the *selected* title rather than a fixed string, so assistive technology never announces a claim the visual badge does not make. Clause 7's proxy annotation applies unchanged to the title: `getProperties().unlinkable` is a **proxy** for the full "no identity at rest" guarantee, and any future backing declaring `unlinkable: true` MUST satisfy that guarantee by design review before the v2 title may render behind it. **Why this clause exists, stated plainly:** v2.7.0 ruled the title compliant in v1 on a "status visibility" reading, and clause 7 was written for the subtitle alone — so the shipped badge read "Verified — private" against a conventional backing, on the same authenticated surfaces from which a member votes. Doc 09 v1.3.0 recorded that as `REL-LIM-18` / `ISS-03` (pre-mount blocker, 2026-09-02); the approver overruled the v2.7.0 reading on 2026-09-05; the banned-words analysis above records the reversal. **Clause 7's body is deliberately unchanged** — it is subtitle-scoped and remains correct as written; this clause is its title-side twin and the two MUST be read together. Implemented at `packages/ui/src/PrivacyStatus.tsx` (`VER_TITLE_V1` / `VER_TITLE_V2`); guarded by **UT-0759** (four paths: prop absent / `false` / `true` / malformed).

10. **Context-selected `anon` copy for Definition-A (v1) (FR-131 clause (e), NFR-023, FR-124(b), Doc 14 §2.2; v2.14.0 — `OPEN-27`; this clause is to the `anon` state what clauses 7 and 9 are to the `ver` state):** In a Definition-A (v1) deployment the component MUST NOT render `STATE_CONFIG.anon.title = 'Anonymous'` or `STATE_CONFIG.anon.subtitle = 'Nothing you do here is linked to you'`. Both are SUPERSEDED by the ruling recorded above in this section. The following is normative.
    - **(a) v1 `anon` TITLE — one string, all contexts: `"Open tier"`.** It names the participation tier, which is the true part of the superseded v2.13.0 reasoning, and carries **no FR-131 banned word and no claim, of any kind, about linkability or publication** — so the ordinary-reader test of clause (e) has nothing to catch. It is **Doc 02's own term** for the thing (§4.41, FR-122), which is the anti-drift property: the badge cannot drift away from the requirement that defines the tier. The `aria-label` MUST carry the **selected** title, as clause 9 requires for `ver`. DES-085's jargon filter is discharged by **(b)**: the subtitle MUST state the meaning in plain words, so "tier" is never the only thing the holder is given.
    - **(b) v1 `anon` SUBTITLE — selected by an explicit render context.** The component MUST accept an explicit context input for the `anon` state (proposed prop name `anonContext`, so that it is as obviously `anon`-only as `backingProperties` is `ver`-only), over the enumerated set **`'browse' | 'join' | 'endorse'`** — the same three contexts clause 8 enumerates, deliberately one list. The strings are normative and verbatim:
        - `'browse'` (screen 1.2): **`"What you do here is not made public. Our own records can link it to your account."`**
        - `'join'` (screen 1.6): **`"Your membership is not made public. Our own records can link it to your account."`**
        - `'endorse'` (screen 2.3): **`"Backing a petition is public, on purpose. Our own records link it to your account."`**
      Each follows clause (e)'s **approved satisfying pattern** — state what the platform does **not publish**, and separately, **in the same string**, what the platform's **own records can see**, with no contrary claim — the pattern Doc 02 §4.45 names and `apps/web/src/i18n/en.ts` `parties.joinPrivate` exemplifies under **UT-0869**. The `'join'` string is deliberately the badge-length form of `joinPrivate` and MUST NOT contradict it, since both render on screen 1.6. The `'endorse'` string discharges clause (e)'s **public-by-design** duty: petition endorsement is public on purpose (Doc 14 §2.2), so the copy says so plainly and asserts **no** non-publication.
    - **(c) Fail-honest default — normative, and the load-bearing half of this clause.** Where `anonContext` is **absent, unrecognised, or malformed**, the component MUST render **`"Our own records can link what you do here to your account."`** This is the **claim-least** string: it asserts nothing about publication and is therefore **true in every one of the three contexts**, including the one where "not made public" is false. **The component MUST NOT infer a context from the route, the referrer, or any heuristic** — a wrong inference produces exactly the clause-(e) breach the default exists to prevent, and a silently-wrong context is worse than an uninformative one. This mirrors clauses 7 and 9 exactly: *absence of the selecting input MUST fall back to the weaker claim; the stronger claim MUST never be assumed.*
    - **(d) Every language.** Clause (e) binds "in any language". The `ar` mirrors of (a), (b) and (c) are owed under this clause and MUST pass the **human native-speaker review** before first mount (Doc 06 v2.8.1 §7 item 17 `ARABIC-I18N`; packet at artifacts/status/ARABIC-NATIVE-REVIEW-2026-09-20.md). A locale mirror is a public-facing string.
    - **(e) Any substitution re-enters here.** These strings are normative, not illustrative. The product-owner or technical-writer MAY propose different copy, but **no substitute may render until it is dispositioned in this section against clause (e)** — the same rule §10.13.6 already imposes on any new badge state carrying one of the four words. **A copy ruling living anywhere other than the copy authority is the v2.7.0 mistake**, and a substitution made downstream would be that mistake with extra steps.
    - **(f) Scope.** This clause governs **Definition-A (v1)** only. Whether a Definition-B (v2) ZK backing — which retains no `phone_hash` or `subject_id_hash` — can sustain a stronger `anon` claim is **not ruled**, and MUST be dispositioned in this section before any v2 `anon` variant renders.
    - **(g) Verification and the render trigger.** Guarded by a `UT-####` in the **UT-0759 four-path pattern** — context absent / `'browse'` / `'join'` / `'endorse'` — asserting each exact string and asserting that **no FR-131 banned word appears in the rendered title, subtitle or `aria-label`**. The `UT` is owed (engineer); the `TC` and RTM rows follow from the tester under the existing story `US-0134` (FR-131 · DES-098), or under a new story if the product-owner cuts one. **Note for whoever implements it:** `packages/ui/test/PrivacyStatus.test.tsx` currently asserts `getByText('Anonymous')` for the `anon` state and scopes its banned-word regex to `ver` — **a green test pins the non-compliant string today**, and that assertion changes with the constant. The full five-condition render trigger is recorded in the `anon` ruling above and is part of this clause by reference. **Nothing renders today:** the component is mounted on no shipped surface (six non-render comments across five consuming files, re-verified by Doc 09 v1.9.0; Doc 06 v2.8.1 §7 item 18), which is why this is a pre-mount obligation and not a live defect — tracked as **`OPEN-28`** in Doc 04 §13.

**Leak-check verdict (FR-124 applied to entire wireframe):**

Review scope: all 15 wireframe screens examined for (a) every `privacy(...)` component instance and (b) every place another person or aggregate is rendered.

> **_(v2.14.1 — reconciling this table with the v2.14.0 render trigger, per cycle-1 ISS-05 (Low). v2.14.0 turned a disclosure-scope list into a render BAR and did not say so where a reader would look; this says so, immediately above the table.)_** The table below lists the privacy pill on **thirteen** screens. That is a **leak-check** scope — which screens carry a pill **at all** — and it is **unchanged and still correct**. It is **not** a statement about which **state** each of those pills may show. **The `anon` state is now bounded more tightly than the pill is.** Render-trigger condition **(ii)** — *"the host screen supplies a context value from clause 10's enumerated set; a mount that cannot supply one is not permitted"* — read together with clause **10(b)**'s enumerated set `'browse' | 'join' | 'endorse'`, makes **screens 1.2, 1.6 and 2.3 the exhaustive set of `anon`-render surfaces in Definition-A (v1)**. The other ten pill screens render **`ver`** or **`pub`**, which clauses 7 and 9 govern and which this ruling does not touch. **This is a reconciliation, not a change:** clause 8 has enumerated the same three contexts since v2.7.1, so the table and the trigger have never disagreed — what v2.14.0 added is that the same list now also **bars** an `anon` render outside it. **One list, two obligations**, exactly as clause 8's v2.14.0 annotation claims: **adding a fourth `anon` context requires an edit to clause 8 AND clause 10 together**, in this section, and nowhere else. **Two consequences worth separating, because they operate at different times.** At **ship** time, condition (ii) bars a mount that cannot name its context. At **run** time, if a context is nonetheless absent, unrecognised or malformed, clause **10(c)**'s fail-honest default renders — *"Our own records can link what you do here to your account."* — and the component **MUST NOT infer** the context from route or referrer. The default is the safety net, not the permission. **The leak-check verdict below is unaffected.**

| Category | Instances | Finding |
|---|---|---|
| Privacy pill on authenticated self-view screens | 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 3.4, 3.6 | All self-view; holder sees their own state only. SAFE. |
| Privacy pill on unauthenticated or public screen | 1.1 (Welcome — no pill), 3.5 (Accountability dashboard — no pill) | No pill on public surfaces. SAFE. |
| Other-actor aggregate counts | 1.2 "12,480 verified members"; 2.3 "6,120 endorsements" | Aggregate-only, consistent with FR-124(b). SAFE. |
| Other-actor named data | 3.1 "Proposed by a Worker" (avatar "R") | Worker role is public by FR-124(c). SAFE. |
| Other-actor with Public pill | 3.2 Candidates "Ayesha K." / "Daniel M." with "Public" pill | Candidate tier; voluntary role-taking per FR-124(c). SAFE. |
| Party-level performance data | 3.5 Accountability dashboard | Aggregate party promises/progress; no per-member data. SAFE. |
| Screen 1.5 "Only you see this" pill | 1.5 `pill green` "Only you see this" on the Verified confirmation card | Explicit confirmation that the mark is private; self-view; consistent with FR-124(a). SAFE. |
| Screen 3.6 inline `privacy pub` element (wireframe line 450) | One `<div class="privacy pub">` in the one-way door screen body — not a `privacy()` function call; a static one-off holder self-view preview of the future `pub` state after crossing to a public role. | Self-view; holder's own future state; not a component instance; not a privacy leak. SAFE. The engineer MUST NOT implement this as a PrivacyStatus component call — it is a one-off static preview element. |

**LEAK-CHECK VERDICT: PASS.** 13 `privacy()` component function calls (3 `anon`, 10 `ver`, 0 `pub`-via-function) — all authenticated-holder self-view. One additional inline `<div class="privacy pub">` on screen 3.6 (wireframe line 450) is a holder self-view preview and not a component instance (noted in table above). No Supporter verified-status leak found in the wireframe as-drawn. The normative invariant in clause 1 above (no `ver` pill on unauthenticated routes or other-actor views) must be enforced at the component level to maintain this pass through build.

---

#### 10.12.4 SCR ↔ Wireframe mapping

**Wireframe → SCR (15 screens):**

| Wireframe screen | SCR | Coverage / notes |
|---|---|---|
| 1.1 Welcome | None | Pre-consent unauthenticated landing. No SCR. Design debt — see §10.12.5 class (i). |
| 1.2 Browse anonymously | SCR-06 (partial), SCR-10 (partial) | Shows petitions (SCR-06) and party listing with aggregate membership (SCR-10); no single-screen exact match. |
| 1.3 Verify — the offer | SCR-01 (partial), SCR-02 (partial) | Pre-enrolment disclosure (SCR-01) combined with attestor intro (SCR-02); no dedicated "offer" screen in SCR set. **Conflict C-01 — button hardcodes "Aadhaar"; see §10.12.6.** |
| 1.4 Verify — on your device | SCR-02 (partial) | On-device ZK proof generation step is part of the SCR-02 enrolment flow. |
| 1.5 Verified | None | No SCR covers post-enrolment confirmation. Design debt — see §10.12.5 class (i). |
| 1.6 Join a party | SCR-10 (partial), SCR-11 | Party home join context (SCR-10) + join action (SCR-11). **Conflict C-03 — "Finances" row links to undesigned screen; see §10.12.6.** |
| 2.1 Create a party — vision | SCR-04 | Full coverage — eight-pillar editor. |
| 2.2 Create — constitution | None | No SCR covers constitution authoring as a distinct step. SCR-04 is eight pillars only. Design debt — see §10.12.5 class (i). |
| 2.3 Petition — live onboarding | SCR-06 (partial), SCR-08 (partial), SCR-09 (partial) | Petition detail + threshold explainer + activation status combined in one screen. **Conflict C-02 — "caps at 100" unbacked; see §10.12.6.** |
| 3.1 Proposal lifecycle | SCR-12 | Full coverage — proposal detail with lifecycle stages. |
| 3.2 Candidate selection | SCR-22 (partial), SCR-23 (partial) | Candidate rows with scores (SCR-22) + debate schedule context (SCR-23); neither SCR is fully covered. |
| 3.3 Cast a vote | SCR-13 | Full coverage — ballot booth. |
| 3.4 Vote confirmed | SCR-14 (partial) | Post-vote tally present (consistent with SCR-14 result surface); independent-verifier flow (verify-it-yourself) absent. DES-063 confirmation treatment and FR-055 independent-verifier aspect absent from wireframe. See §10.12.5 class (i). |
| 3.5 Accountability dashboard | SCR-20 (partial), SCR-17 (partial) | Transparency dashboard (SCR-20) + commitment tracking (SCR-17) combined; filtering log and manifesto version history absent. |
| 3.6 The one-way door | SCR-15 (partial) | SCR-15 covers candidacy nomination disclosure (FR-037/FR-038) **and the Worker self-declaration consent event (FR-080)** — the two share the consent pattern, which is why one SCR carries both. The Worker half is designed in **DES-103** (two-step informed consent) and built at Doc 06 v2.4.2. Partial because the two flows still share one screen entry rather than each holding their own. _(v2.9.3: this row previously read "related but distinct … design debt, see §10.12.5 class (i)", which contradicted the SCR-15 row of the SCR → Wireframe table and pointed at a debt entry now closed.)_ |

**SCR → Wireframe (23 SCRs):**

| SCR | Name | Wireframe screen | Coverage |
|---|---|---|---|
| SCR-01 | Pre-enrolment disclosure & consent | 1.3 (partial) | Partial — disclosure present; combined with attestor offer |
| SCR-02 | Attestor choice & enrolment | 1.3 (partial), 1.4 (partial) | Partial — two screens cover different sub-steps; no dedicated choice step |
| SCR-03 | Residency attestation | None | No wireframe screen |
| SCR-04 | Party draft editor (eight pillars) | 2.1 | Full |
| SCR-05 | Publish check & deficiency report | None | No wireframe screen |
| SCR-06 | Petition browser & detail | 1.2 (partial), 2.3 (partial) | Partial — browse in 1.2; petition detail in 2.3 |
| SCR-07 | Endorse / withdraw | None | No wireframe screen |
| SCR-08 | Threshold & denominator explainer | 2.3 (partial) | Partial — threshold inline in 2.3 only |
| SCR-09 | Activation record | 2.3 (partial) | Partial — onboarding status inline in 2.3 only |
| SCR-10 | Party home & aggregate membership | 1.2 (partial), 1.6 (partial) | Partial — aggregate data in 1.2; join context in 1.6 |
| SCR-11 | Join / leave (single-party enforcement) | 1.6 | Full |
| SCR-12 | Proposal list & detail | 3.1 | Full |
| SCR-13 | Ballot booth (cast / re-cast) | 3.3 | Full |
| SCR-14 | Result & verify-it-yourself | 3.4 (partial) | Partial — post-vote tally shown; independent-verifier flow absent |
| SCR-15 | Nomination & disclosure consent | 3.6 (partial) | Partial — Worker declaration shares the consent pattern; candidacy nomination is distinct |
| SCR-16 | Election & office record | None | No wireframe screen |
| SCR-17 | Manifesto, commitments & version history | 3.5 (partial) | Partial — commitment progress bars present; manifesto and version history absent |
| SCR-18 | Recall initiation & ballot | None | No wireframe screen — see design-debt §10.12.5 class (ii) |
| SCR-19 | Account recovery (seedless + collision) | None | No wireframe screen |
| SCR-20 | Public transparency dashboard & filtering log | 3.5 (partial) | Partial — dashboard present; filtering log absent |
| SCR-21 | Public participation profile | None | No wireframe screen (DES-064 dormant pending OI-13 resolution — §18) |
| SCR-22 | Candidate feedback widget | 3.2 (partial) | Partial — feedback scores shown; widget interaction mechanics absent |
| SCR-23 | Debate schedule, attendance & post-debate vote | 3.2 (partial) | Partial — debate list shown; schedule/attendance/voting mechanics absent |

---

#### 10.12.5 Design-debt register

Kept in two distinct classes per the approver directive; the classes capture different kinds of debt.

**Class (i) — Wireframe screens lacking a backing DES and/or US row:**

| Screen | Missing layers | Required action before build |
|---|---|---|
| 1.1 Welcome | No SCR, no DES, no US. | Requirement gap: the welcome screen UX has no backing FR/DES/US. Must be specified (FR, DES, SCR, US) before engineering can build it. |
| 1.5 Verified (post-enrolment confirmation) | No SCR; no dedicated DES for the confirmation UI state. DES-001 covers enrolment mechanics; the "Verified · private / Only you see this" confirmation screen is not designed. | DES gap: mint a DES for the post-enrolment success-state UI, including the FR-124(a) self-view copy obligation. |
| 2.2 Create — constitution | No SCR, no DES. FR-076 (mandatory constitution sections) and FR-077 (non-violence clause presence check) are backed requirements but no screen-level design exists. SCR-04 covers eight pillars only. | SCR and DES gap: constitution-authoring screen needs its own SCR (with FR-076 + FR-077 traces) and DES element. |
| 3.4 Vote confirmed | SCR-14 partial coverage exists (post-vote tally present). DES-063 covers coercion-safe confirmation at architecture level. FR-055 independent-verifier flow absent from wireframe. | Remaining design debt: confirmation-screen coercion-safe treatment (DES-063 UX detail) and the independent-verifier flow (FR-055) are not wireframed. Note as DES gap under SCR-14. |
| ~~3.6 One-way door (Worker self-declaration)~~ | ~~Worker self-declaration (FR-080) has no dedicated SCR, no DES surface element, and no US explicitly covering the "permanent / public from here on" UI treatment.~~ **CLOSED v2.9.3.** **DES-103** (§5.2, §10.13.13) is that surface element: it specifies the two-step informed-consent event normatively — the disclosure states, before confirmation, that the declaration is permanent for the term and makes the member's participation record public, and declining records nothing. **SCR-15** is bound (with SCR-12 where it is reached); SCR-15 already covers the consent pattern this shares. Built and tested at Doc 06 v2.4.2 (UT-0885/UT-0886); the FR-080 RTM row CLOSED at Doc 08 v2.5.1. **Residual (not a design gap):** SCR-15 remains shared with candidacy nomination (FR-037/FR-038); whether the Worker declaration eventually earns its own SCR is a screen-inventory question, not a missing link. | Closed — DES-103 + SCR-15 |

**Class (ii) — Required screens absent from the wireframe entirely:**

**Recall / removal (affirmative quorum):**
- WHAT EXISTS: SCR-18 stub (FE-024, FR-042..045); US-0057..US-0060 (two-stage recall); DES-030 (two-stage recall at architecture level); US-0114 (FR-104 affirmative-quorum role removal); US-0124 scenario (mid-term steward recall at FR-114 / DES-088). The wireframe constitution screen (2.2) includes "Removal of a representative — Recall by affirmative member vote" as a pre-filled constitution clause but no recall-flow screen exists anywhere in the wireframe.
- WHAT IS MISSING: No wireframe screen for recall initiation. No wireframe screen for the recall ballot. No DES for FR-104 (conduct-vote removal — Doc 05 US-0114 notes "Not Ready pending DES"). The affirmative-quorum semantics from the v2 ruling (FR-104, Rathish, 2026-08-10) are not yet designed at screen level for the party-level removal vote UI. The two-stage recall flow (SCR-18) has a stub but no design.

**FR-125 non-invite fallback join path:**
- WHAT EXISTS: FR-125 finalised per OI-19 ruling (Rathish, 2026-08-20); the non-invite fallback is a MUST; FR-020 unamended and absolute; mandate that "a determined real person can always join without an invite."
- WHAT IS MISSING: The wireframe 1.1 Welcome screen shows only "Explore — no account needed" and "I have an invite". The non-invite fallback path is entirely absent from the wireframe. No US rows exist for FR-121..FR-129 (catch-up debt recorded in Doc 05 and in §16 of this document). No SCR for the fallback join path. No DES covering the FR-125 non-invite fallback UI flow. All four design layers (DES, SCR, US, wireframe screen) are open for this mandatory path.

**Party public finance ledger:**
- WHAT EXISTS: FR-050 (Must — itemised, publicly readable, independently verifiable treasury record); FR-051 (Must — no governance advantage from payments); FR-096 (Must — mechanical anomaly detection with public flags); DES-033 (treasury caps + ledger — on-chain mechanism: per-person cap by nullifier, itemised public record); SCR-20 (Public transparency dashboard includes "treasury summary with anomaly flags"). The wireframe 1.6 Join a party screen lists "Finances — every rupee in and out" as a navigation row.
- WHAT IS MISSING: No wireframe screen for the itemised finance ledger. DES-033 covers the on-chain mechanism; the UI for browsing the itemised inflow/outflow record (FR-050) is not designed. The 1.6 "Finances" navigation row links to an undesigned screen. No dedicated FE, US, or SCR for the ledger UI. SCR-20 is a dashboard summary view, not the itemised ledger. Required additions: ledger SCR (building on DES-033), DES surface element, FE, US.

---

#### 10.12.6 Conflict register

Conflicts are surfaced, not reconciled. Dispositions are recommendations; resolution requires Product Owner (C-02) or engineer build-time decision (C-01, C-04). No silent edits were made to Doc 02 or to the wireframe.

**C-01 — "Verify with Aadhaar" hardcoded button vs adapter-driven design (SCR-02 / FR-004 / OI-20 / DES-070)**

- Screens: 1.3 ("Verify with Aadhaar" primary button), 1.4 (copy "Your Aadhaar data is being read and proven right here on your phone").
- Conflict: The wireframe treats "Aadhaar" as a hardcoded design constant. The normative record requires adapter-driven UI: SCR-02 is titled "Attestor choice & enrolment" (a choice surface, not a hardcoded single option); FR-004 requires ≥ 2 mutually independent attestation paths at architecture level; OI-20 ruling (Rathish, 2026-08-20): "Aadhaar is one implementation of the pluggable adapter interface, not a hardcoded dependency"; DES-070: "region-level config, not hardcoded"; ADR-016 (amended) and ADR-021 confirm Aadhaar as the Phase-1 deployment rail string, not a design constant.
- Required disposition (wireframe-copy fix at build time): The button label and on-device copy strings MUST be adapter-driven — fetched from region-level config or an i18n string resolved at deployment time. "Verify with Aadhaar" is the correct Phase-1 India deployment string; it is not a fixed design constant. The button element and interaction pattern are sound. No requirement change needed. This must not be built as a literal string.

**C-02 — "Membership caps at 100 until legal verification completes" — unbacked requirement**

- Screen: 2.3 (Petition — live onboarding), warning note: "Membership caps at 100 until legal verification completes — so an unverified party can't gather false strength."
- Conflict: No backing FR, DES, or US exists for a "cap at 100 members" during the pre-legal-registration petition phase. FR-013 (petition state), FR-075 (distinguish platform vs legal registration), FR-076 (founding member count ≥ 5), FR-016 (activation threshold by formula) — none authorise a provisional membership cap. The 100-member cap is a new design concept with no normative footing.
- Required disposition (requirement gap): This screen element MUST NOT be built until a FR is minted, reviewed, and approved through the SOP. The Product Owner must decide: accept and mint an FR, or reject (and the wireframe copy is revised). The architect does not resolve this silently. Both the conflict register and the design-debt register (class ii is the correct class once confirmed as a required capability; class i applies if subsequently scoped out) record the gap.

**C-03 — Wireframe finance ledger screen absent; 1.6 "Finances" row links to undesigned surface**

- Screen: 1.6 (Join a party), "Finances — every rupee in and out" navigation row.
- Conflict: FR-050 (Must) requires an itemised, publicly readable, independently verifiable treasury record. The wireframe's 1.6 screen implies a "Finances" screen exists as a navigation target but no finance-ledger wireframe screen is provided. The design of the linked screen is entirely absent. DES-033 covers the on-chain mechanism; no UI-level design exists.
- Required disposition (wireframe-scope gap): The finance ledger screen must be designed (SCR, DES surface element, FE, US) before the 1.6 navigation row can be implemented. The navigation row itself is sound; the target is not. Recorded in design-debt class (ii) above and as a conflict here because the wireframe implies completeness while the design is incomplete.

**C-04 — "9,000 to activate" — illustrative threshold must not become an implementation constant**

- Screens: 1.2 ("Threshold: 9,000"), 2.3 ("9,000 endorsements", "9,000 to activate").
- Potential conflict: The wireframe shows a concrete threshold number. FR-016 (Must) requires the threshold computed entirely in code as a published percentage of the jurisdiction's eligible-population denominator. DES-010 specifies `max(pct×pop, pct×verified, 500)`.
- Disposition (illustrative placeholder — no normative conflict): "9,000" is a plausible concrete example for a mid-size ward in the prototype. It does not contradict the formula. Per the approver directive: "is illustrative but MUST NOT be read as contradicting the endorsement-floor rule." Confirmed no conflict. The UI MUST compute and display the value from DES-010 at runtime; "9,000" MUST NOT appear as a constant in any implementation. No requirement change needed.

---

## 10.13 v1/v2 delivery-architecture split

**Approver directive:** Rathish, 2026-08-23. Full governance record: ADR-024.

### 10.13.1 Two delivery definitions

| | Definition A — v1 | Definition B — v2 |
|---|---|---|
| Identity/personhood | Conventional auth (database account + WebAuthn passkey) | ZK anonymous enrolment via `ICredentialAdapter` → `PersonhoodRegistry` (ADR-016, ADR-017) |
| Ballot casting | Conventional authenticated database write; chain audit log | MACI encrypted ballot + 5-of-7 threshold coordinator (ADR-006, DES-023) |
| Tally | Conventional SQL aggregate; result hash published to audit contract | On-chain ZK tally proof (DES-024, DES-025); independently verifiable |
| Cryptographic ceremonies | None | Groth16 Phase-1 + per-circuit Phase-2 (ADR-005, ADR-022) |
| Blockchain role | Audit-record only (petition milestones, tally hashes, manifesto hashes, party activation events) | Audit record + full governance execution (PersonhoodRegistry, PartyRegistry, Governor, MACI, ProtocolGovernance) |
| Receipt-freeness | NO — disclosed limitation | YES — MACI key-change override |
| Anonymity floor | NO — conventional DB linkage present | YES — k ≥ 1000 (DES-008) |

**Guardrail (approver-stated):** Nothing built in the Design phase is discarded. v1 reuses requirements, flows, design system, and wireframes. v2 is a swap behind stable interfaces, never a rewrite.

### 10.13.2 DES-095 — IEligibilityVerifier seam

**Purpose:** A stable design-level interface decoupling the application layer from the identity/personhood proof mechanism. The application calls this interface; the backing is swapped between v1 (conventional) and v2 (ZK) without any change above the seam boundary.

**Normative call-site placement (2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md):**
`IEligibilityVerifier.verifyEligibility()` MUST be invoked at the three FR-123 COUNTING-action call sites:
(a) contributing to a party's official strength number;
(b) admission to a binding ballot (vote eligibility check);
(c) candidacy nomination.
The verifier MUST NOT be called as a precondition of account creation or party-join — those paths require phone verification alone (FR-020, FR-122). This call-site placement is **identical** for the v1 conventional backing (government-ID document check via DES-100) and the v2 ZK backing (nullifier proof via `ICredentialAdapter` → `PersonhoodRegistry`). The seam's position in the architecture — called at COUNTING actions, never at joining — is what makes v1 and v2 share one participation model with different verification backings. It is therefore an additional architectural reason that the v2 swap is an implementation swap behind the seam, not a rewrite of participation logic above it.

**Design-level interface (methods and semantics — not implementation code):**

| Method | v1 backing behaviour | v2 backing behaviour |
|--------|---------------------|---------------------|
| `verifyEligibility(memberId, regionId, scope, proof)` | Checks COUNTING-tier eligibility at the FR-123 action call site: queries `id_verified_flag = true` from restricted-class credential store (DES-100 allowlist; set when the member first completed government-ID document check at a prior COUNTING-action attempt or onboarding step); confirms session auth; no ZK proof verified; MUST NOT claim one-person-one-vote; MUST NOT claim unique personhood — check confirms real person, not unique person (FR-132 amended, ADR-025 §(e), 2026-08-23; re-scoped to COUNTING gate, ADR-025 §[AMENDMENT 2026-08-24]). If `id_verified_flag` is absent, the enrolment service MUST prompt the member to complete the government-ID document check (DES-100) and retry; it MUST NOT refuse account creation or party-join for absence of the flag. DES-099 spam-resistance guard applies in the enrolment path for the ID-check step, not on the COUNTING-action call itself. | ZK proof verified through `ICredentialAdapter` → `enrol()` → `PersonhoodRegistry` (ADR-017, DES-069, DES-070) |
| `isUniqueInScope(memberId, scope)` | Database nullifier record (atomic write on first COUNTING action per scope) | On-chain `nullifierUsed[keccak(scope, N)]` (DES-001) |
| `getProperties()` | Returns `{ onePersonOneVote: false, subpoenaResistant: false, unlinkable: false, anonymityFloor: false }` — these describe COUNTING-eligibility properties, not account-admission properties | Returns all true |
| `IS_INSECURE_MOCK()` | Returns `false` — v1 is an honest conventional backing, NOT a mock (see §10.13.4) | Returns `false` |

**Invariants both backings MUST satisfy:** one-vote-per-account per scope (v1) / one-vote-per-person per scope (v2) — v1: conventional nullifier record prevents double-voting from the same account; does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`; T-06, ADR-025 §(a)). v2: on-chain nullifier derived from unique personhood proof — DES-001; genuine one-person-one-vote guarantee; eligibility scoping (membership record + snapshot v1; `vote()` snapshotRoot v2); verifiable tally output; no retrospective result change after tally closes. **Both backings MUST NOT gate account creation or party-join on verifyEligibility — the seam gates COUNTING actions only (FR-020, FR-122, FR-123).**

**Properties ONLY v2 provides:** unlinkability, receipt-freeness, coercion-override, no identity at rest, anonymity floor (k ≥ 1000).

**Composes with:** `ICredentialAdapter` (ADR-017, DES-070) — v2 routes through it; v1 bypasses it honestly (declared in `getProperties()`). `IProofVerifier` seam (ADR-022) — used by `IBallotService` v2 tally path; not used by `IEligibilityVerifier` directly.

### 10.13.3 DES-096 — IBallotService seam

**Purpose:** A stable design-level interface decoupling the application layer from the ballot-casting and tally mechanism.

**Design-level interface (methods and semantics):**

| Method | v1 backing behaviour | v2 backing behaviour |
|--------|---------------------|---------------------|
| `castBallot(electionId, choice, memberId, eligibilityRef)` | Authenticated write to database; `BallotReceipt` includes choice + timestamp + member reference | MACI encrypted ballot to message queue (DES-023); `BallotReceipt` includes only the message hash |
| `changeBallot(electionId, newChoice, memberId)` | Database UPDATE with atomic overwrite; audit log records change | MACI key-change + re-vote; indistinguishable from original ballot at tally layer (FR-032, DES-023) |
| `computeTally(electionId)` | SQL COUNT aggregate; result hash published to on-chain audit contract | MACI threshold coordinator DKG → on-chain ZK tally proof (DES-024, DES-025); independently verifiable by anyone |
| `getTallyProperties()` | Returns `{ receiptFree: false, coercionOverride: false, zeroKnowledge: false, publiclyVerifiable: true }` | Returns all true |

**Composes with:** `IProofVerifier` seam (ADR-022) — v2 `computeTally()` produces a ZK proof verified through `IProofVerifier`; v1 `computeTally()` produces a conventional aggregate and does not call `IProofVerifier` (honest bypass, not hidden).

**Owed — ballot-state accessor (added v2.12.0; carried Low #5 from v2.11.2).** The interface above is `castBallot`, `changeBallot`, `computeTally`, `getTallyProperties` **and no more** — it never reports the ballot's state. §10.13.13(a) makes the ballot layer authoritative over the FR-091 `VOTE` / `DECISION` / `IMPLEMENTATION` stages in **both** versions, and that rule is unsatisfiable against an interface with nothing to derive FROM; the only way to render those stages without an accessor is to track them independently, which is precisely what the rule forbids. **DES-096 MUST gain a ballot-state accessor before the v1 ballot layer is built:** a read-only method returning the current ballot state for an election, with the same v1/v2 backing symmetry as the four methods above (v1 — database read; v2 — MACI/tally-layer state), and with **no** capability to set, force, skip or reorder a state. Not urgent today: the proposals and debate layer derives nothing and stops at `admitToBallot()`, so this blocks no current work. Owner: **Ravi Deshmukh (architect)**. Tracked as the owned §13 debt row "DES-096 exposes no ballot-state accessor…" entered at v2.11.2 — this clause is that row's design-side counterpart, whose absence was the fifth Low carried from v2.11.2 (the debt was owned in §13 but invisible to anyone reading the seam spec itself).

### 10.13.4 IS_INSECURE_MOCK() and the promotion gate

The CI deployment-safety scan (§14, §7.1) blocks any deployment to testnet, staging, or production that has a MockVerifier in the VerifierRegistry (`IS_INSECURE_MOCK()` returning true). The distinction between a mock and the v1 conventional backing is critical:

| Entity | Lies about verification? | `IS_INSECURE_MOCK()` | Promotion past devnet? |
|--------|------------------------|---------------------|----------------------|
| `MockVerifier` | YES — accepts any proof without checking | `true` | Blocked by CI gate |
| v1 conventional backing | NO — checks by conventional means honestly | `false` | Permitted (honest, disclosed) |
| v2 ZK backing | NO — verifies ZK proof on-chain | `false` | Permitted (real verifier) |

The v1 conventional backing MUST NOT be labelled or implemented as a mock. It honestly performs what it claims. `IS_INSECURE_MOCK()` returns false because it is NOT an insecure mock: it is a functioning conventional implementation, honest about what it is and what it is not. The CI gate checks for lying; it does not check for genuine ZK-property absence. The latter is governed by the conflict table in ADR-024 §(c) and is a decision for the approver.

### 10.13.5 DES-097 — v1 conventional-auth stack and package disposition

**v1 recommendation (from ADR-024 §(b)):** Blockchain as public transparent-audit record only. The v1 application is a conventional Next.js PWA + Postgres database. A small, auditable on-chain audit contract on Base publishes petition milestones, tally result hashes, manifesto version hashes, and party activation events. No on-chain governance execution in v1.

| Package / service | v1 disposition | Rationale summary |
|---|---|---|
| `packages/contracts` | **Adapt** — deploy only the lightweight audit-record contract subset; full on-chain governance contracts are v2-only | Satisfies FR-108 (blockchain as audit record); CI gate passes honestly |
| `packages/circuits` | **Untouched for v2** — no circuits in v1 | v1 backings never call a circuit |
| `packages/protocol` | **As-is** — pure rules, zero deps; governance state machines, threshold formula, encoding | Strongest reuse candidate; valid in both v1 and v2; differentially tested against chain in v2 |
| `packages/sdk` | **Adapt** — strip ZK proof generation + on-chain PersonhoodRegistry/PartyRegistry paths; expose IEligibilityVerifier and IBallotService interfaces | v2 is a seam-local swap |
| `packages/ui` | **As-is** — DES-093 token set, DES-094 privacy-status component apply unchanged; design system is independent of identity/ballot backing | ADR-023; independent of ZK/conventional split |
| `apps/web` | **As-is with feature flags** — v2-only features flag-off (existing ADR-037 discipline); DES-098 honesty notice is v1 addition | Flag discipline already designed |
| `apps/verifier` | **Untouched for v2** — meaningful only for MACI ZK tally proofs; not built in v1 | Activates when IBallotService v2 backing wired |
| `services/indexer` | **As-is** — indexes whatever on-chain events exist; event set grows in v2 | Architecture unchanged |
| `services/relayer` | **Adapt** — sponsors audit-record writes in v1; ZK proof submission relaying is v2 | Sponsorship model applies in both |
| `infra` | **As-is** — same Base L2, IPFS/Arweave, Postgres topology | |
| `tools` | **As-is** — dep-guard, codegen, test harness; IS_INSECURE_MOCK CI scan unchanged | |

**Ratification note (2026-08-23):** Ruling 3 (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §2) RATIFIES the ADR-024 §(b)/DES-097 stack recommendation. The blockchain-as-public-transparent-audit-record design is the v1 foundation. v1's story is **transparency-now, privacy-later**: the chain delivers the transparency guarantee in v1; the ZK layer delivers the privacy guarantee in v2. Composition confirmed: this is identical to the blockchain-as-audit-layer design in §5.1/ADR-009/FR-108 — the chain remains commitments and audit-record only; the conventional DB is the application store; no restricted data appears on-chain; the boundary is unchanged. ADR-024 §(b) dated amendment note records this ratification.

### 10.13.6 DES-098 — v1 honesty notice

**Element:** Wherever a vote is cast in v1, the UI MUST display a plain-language honesty notice before the ballot is confirmed. The notice MUST state: (1) this ballot uses conventional authentication and is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**; (2) the platform database CAN see vote direction and party membership; (3) the cryptographic private ballot — where the platform is technically unable to see it — is available when the platform upgrades to the Definition-B (v2) privacy layer; (4) the tally result IS publicly auditable and published to the blockchain.

_(v2.12.0: clause (1) previously read "this vote uses conventional authentication and is NOT the private receipt-free ballot". That under-stated **FR-131(a)**, which requires all three denials by name. FR-131 (Doc 02 §4.45) is the normative wording — not this paraphrase and not any string in code. The shipped copy is `apps/web/src/i18n/en.ts` `banner.notReceiptFreeTitle` / `banner.notReceiptFreeBody` (and its `ar.ts` mirror, native-speaker review owed per Doc 06 §7 item 17), guarded by **UT-0887**, which bans each of the four FR-131 words unless immediately negated, bans "private"/"secure" outright, and separately asserts that clauses (a), (b) and (c) are present.)_

**Requirements:**
- Visible before confirmation; non-dismissable (voter must acknowledge to proceed); WCAG 2.2 AA (DES-081); screen-reader accessible
- Displayed on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation)
- MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour — in the notice, in any other v1 UI string, in the README, or in any public-facing material (FR-131 closing sentence, Doc 02 §4.45). **v2.12.0 clarification (normative):** this ban reaches voting-adjacent **status** copy, not only notice text. "private" may appear on a status badge **only** against a backing declaring `getProperties().unlinkable === true` (§10.12.3 clauses 7 and 9). The v2.7.0 "status visibility" carve-out is **overruled** — Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`; approver 2026-09-05. The four words MAY appear **negated** ("NOT anonymous", "NOT receipt-free") because FR-131(a) mandates exactly that phrasing; a blanket substring ban would fail the mandated text, which is why UT-0887 is negation-aware. **v2.13.0 — the scope of that status reach, named rather than left open-ended (cycle-1 ISS-03):** exactly two DES-094 badge states carry copy containing a banned word, and **both are dispositioned in §10.12.3**, which is the copy authority for both — (a) **`ver`**: the title "Verified — private" and the v2 subtitle render **only** against `unlinkable === true`; the v1 defaults are "Verified" and "Your vote counts. How you voted is never made public." (clauses 7 and 9; the v2.7.0 ruling is marked SUPERSEDED there); (b) **`anon`**: the title "Anonymous" is **COMPLIANT in v1** — the state renders only for open-tier users who cannot cast a binding vote under FR-122/FR-123, so the badge describes a participation tier and not voting behaviour — with four recorded re-open triggers and the clause-8 disclosure gap conceded, not papered over. A rule that reaches status copy must say **which** status copy it reaches; these two are the whole set at v2.13.0, and any new badge state carrying one of the four words MUST be dispositioned in §10.12.3 before it ships
- **v2.14.0 correction (normative) — the `anon` half of the bullet above is SUPERSEDED.** The v2.13.0 bullet above states that the `anon` title "Anonymous" is "**COMPLIANT in v1** — the state renders only for open-tier users who cannot cast a binding vote under FR-122/FR-123, so the badge describes a participation tier and not voting behaviour". That was ruled against an FR-131 whose closing sentence was **voting-scoped**. **It is no longer.** Doc 02 **v2.17.3** §4.45 **clause (e)** (entered v2.17.0) extends the ban to "any other v1 participation act", and §10.12.3 clause 8 renders the `anon` pill on **party-joining (1.6)** and **endorsing (2.3)**, two acts clause (e) names. **On `OPEN-27`, §10.12.3 v2.14.0 rules both the `anon` title AND the `anon` subtitle NOT COMPLIANT in v1** and specifies the v1 variants at **clause 10** (context-selected, with a fail-honest default). The bullet above is retained verbatim as the record of the superseded ruling; **clause 10 and the `anon` ruling in §10.12.3 are what govern.** Everything else in that bullet is **unchanged and correct**: the `ver` half (clauses 7 and 9; the v2.12.0 reversal), the negated-form allowance for clause (a) and its negation-aware `UT-0887`, and the standing rule that **exactly two** DES-094 badge states carry copy containing a banned word and **both are dispositioned in §10.12.3, which is the copy authority for both** — a rule that reaches status copy must say which status copy it reaches. Any new badge state carrying one of the four words MUST still be dispositioned in §10.12.3 before it ships, and so must any substitute for clause 10's strings.
- Backs: **FR-131** (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009)

**FR-131 clause (d) extension (Doc 02 v2.12.0, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md):** DES-098 MUST also provide a disclosure to open-tier (unverified) participants at the point a COUNTING action is blocked due to absence of government-ID verification. The disclosure MUST, in plain language: (1) inform the participant that the specific action (contributing to strength, casting a binding vote, or standing as a candidate) requires COUNTING-tier eligibility; (2) explain that open-tier participation (reading, following, watching, discussing, supporting, organising) continues to be available without any additional verification; (3) explain how to complete the government-ID document check to become COUNTING-eligible. This disclosure composes with the ballot-booth notice above: the ballot-booth notice applies to verified (COUNTING-tier) participants; this clause (d) disclosure applies to open-tier participants who attempt a COUNTING action before completing ID verification. No new DES element is minted — this is a clause extension to DES-098, reflecting FR-131 clause (d) (Doc 02 v2.12.0, owner Nadia Hassan).

**Relationship to existing design:** DES-063 (coercion-safe confirmation surface, v2) is the v2 successor; DES-098 is the v1 disclosure surface. §13 "Public tallies in Phase 1" debt row's disclosure discipline is the precedent pattern.

### 10.13.7 Charter-layer conflict check (ADR-024 §(c))

The following tensions between v1 conventional auth and the Charter/Guarded layers are recorded FOR THE APPROVER'S DECISION. They are surfaced, not reconciled. Full analysis in ADR-024.

**Legend — "v1 status" column notation:**
- **(i) SATISFIED** — v1 meets this rule fully by application design; no approver decision required.
- **(ii) DEFERRED** — the property is absent in v1; v1 makes no claim to it; honest disclosure via DES-098 (FR-131) applies; no approver decision on the claim itself (only on whether deferral with disclosure is acceptable scope).
- **(iii) TENSION — FOR THE APPROVER'S DECISION** — the v1 implementation and the Charter or Guarded layer rule are in active tension; an explicit approver ruling is required before v1 implementation begins.

| ID | Tension | v1 status | Decision owed |
|----|---------|-----------|--------------|
| T-01 | Charter Rule 6 — anonymity by default | **(ii)/(iii)** Conventional DB links account↔party; operator can comply with subpoena | **CONFIRMED 2026-08-23** — v1 accepted as a disclosed non-anonymous product; deferred-with-disclosure model accepted. (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4) |
| T-02 | FR-128 — subpoena test | **(iii)** Conventional DB operator CAN disclose; FR-128 requires technical inability to comply | **CONFIRMED 2026-08-23** — subpoena test deferred in full to v2; deferral-with-disclosure accepted. (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4) |
| T-03 | BR-009 / FR-082 — anonymity guarantee | **(ii) DEFERRED** | **CONFIRMED 2026-08-23** — FR-082 and BR-009 are Definition-B (v2-only); remain Must for v2; not weakened or deleted. (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4) |
| T-04 | NFR-003 — receipt-freeness (Guarded Layer named absolute) | **(ii) DEFERRED with honest disclosure** | **CONFIRMED 2026-08-23** — deferral-with-disclosure is acceptable. (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4) |
| T-05 | Charter Rule 3 — no privileged role over outcomes | **(ii) DEFERRED** Tamper-evidence (detectable) not tamper-prevention | **CONFIRMED 2026-08-23** — Charter Rule 3 accepted as v2-only (immutable core contracts). (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4) |
| T-06 | Charter Rule 1 — one human one vote vs v1 phone+ID auth | **(ii) DEFERRED with honest disclosure — IMPROVED (2026-08-23)** — government-ID document check (DES-100) raises the Sybil barrier over phone-alone; `subject_id_hash` same-document deduplication detects same-document-different-phone reuse. Same-person-with-multiple-government-IDs is not prevented. `getProperties().onePersonOneVote = false` is unchanged; v1 MUST NEVER claim one-person-one-vote or unique personhood — the check confirms real person, not unique person. FR-131/FR-132 (amended)/H-15 carry the caveat. | **ACCEPTED — DEFERRED WITH DISCLOSURE (approver, Rathish, 2026-08-24).** Same-document deduplication (`subject_id_hash`) IMPROVES Charter Rule 1 enforcement (cannot gain COUNTING-tier eligibility (FR-123) in two accounts using one government ID — the `subject_id_hash` check runs at COUNTING-tier verification time across all sessions, not at account creation). Multiple legitimate government IDs still allow limited multi-accounting — not closed. Disclosure mechanism: H-15 (onePersonOneVote not technically guaranteed) + FR-132 §(d) self-declaration. `getProperties().onePersonOneVote = false` unchanged. (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3; ADR-025 §(d) [AMENDMENT 2026-08-24]) |
| T-07 | FR-003 (no identity data at rest) vs v1 identity data-at-rest surface | **(ii) DEFERRED / PARTIAL — RESHAPED (2026-08-23)** — stored surface is now: `phone_hash` (HMAC-SHA-256/KMS-pepper, not plaintext) + `subject_id_hash` (HMAC-SHA-256/KMS-pepper — derived identifier for same-document deduplication) + `id_verified_flag` + `age_verified` + `issuing_region` (country code) + `verified_at`; no PII fields (name, DOB, document number, images) stored at any layer (DES-100 allowlist/denylist). Hashed phone improves FR-003 PARTIAL position vs plaintext; `subject_id_hash` adds a new derived identifier that deepens the retained surface. Legal classification of stored hashes as personal data under India DPDP and GDPR is not architect-decidable — routed to CON-015 and GDPR counsel (ADR-025 §(e) Q-3). v2 eliminates by construction. | Reshaped — CON-015 legal opinion and GDPR counsel govern final classification. Architect answers (DES-100, ADR-025 §(e)) gate PO's Doc 02 v2.11.0 update. (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §5) |
| T-08 | FR-004 plurality intent (attestor concentration risk) vs v1 single-vendor ID-verification provider | **(iii) TENSION RECORDED — ARCHITECT-RESOLVED (2026-08-23)** — FR-004's ≥2 independent attestors requirement applies to the v2 protocol-level attestor stack (ZK credential issuers in `PersonhoodRegistry`); it does NOT apply literally to the v1 application-layer ID-verification vendor, which does not issue ZK-verifiable credentials. However, the concentration risk (single vendor sees all signups; state-compulsion risk identical to the §E3 + ADR-003 motivation for attestor diversity) is real and must be recorded. Phase-1 single-vendor is an accepted dated limitation — not a permanent choice. FR-129 Charter-layer guard prevents entrenchment. | **ARCHITECT-RESOLVED** — single-vendor accepted as Phase-1 dated limitation by analogy to OI-20; FR-004 literal requirement satisfied at protocol level (ADR-021); concentration risk recorded as design debt; Phase-2 multi-vendor option to be assessed. Not a blocking decision for the approver; disclosed per honest-record discipline. (ADR-025 §(e)) |

**Resolved items (for completeness):** Charter Rule 2 (no transferable power) — SATISFIED. Charter Rule 5 (no behavioural surveillance) — SATISFIED. Charter Rule 7 (CON-001, parties only) — SATISFIED. CON-012 (no bespoke unaudited crypto) — SATISFIED. CON-013 (non-violence clause) — SATISFIED. **BR-003/FR-020 vs government-ID eligibility gate** — RESOLVED (approver, Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.5): the government-ID check does NOT gate joining (BR-003/FR-020 intact and absolute); it gates COUNTING-tier eligibility only (FR-123). The exclusion is from vote-COUNTING, not from membership. H-19 amended in Doc 02 v2.12.0 to reflect this. The prior AWAITING APPROVER CONFIRMATION flag (Doc 02 v2.11.0 §16.5 and DES-100 exclusion-residual note) is closed.

### 10.13.8 DES-099 — v1 spam-resistance layer

**Element:** A conventional fraud-detection service in the enrolment service path. It is NOT in any governance-path data store; flag records are restricted-class operational data.

**Components and normative semantics (FR-133, ADR-025 §(b)):**

| Component | Purpose | Tech |
|-----------|---------|------|
| Phone-intelligence API | Classify the registering phone number: real mobile, eSIM, VoIP, virtual/cloud-farm, recently recycled, blocked-carrier MSISDN | Third-party phone-intelligence vendor (vendor TBD; Doc 13 assumption (a) partially resolved — mechanism set, vendor open) |
| Velocity / device anti-fraud | Detect high-frequency registration patterns, device-fingerprint clustering, IP/ASN clustering, registration-attempt surge | Application-layer rate-limiting and device-signal checks; no persistent cross-session device ID stored outside the restricted audit log |

**Normative flag-don't-block rule (FR-133, Ruling 2 — non-negotiable):**
- A suspicious classification MUST result in rate-limiting or queue-slowing, NOT a hard block.
- A governance action (petition endorsement, membership join, proposal vote) MUST NEVER be denied solely on a fraud flag (FR-061 degrade-never-deny; FR-125/OI-19 rate-limiter-never-admission-condition; FR-020 absolute).
- A first-class false-positive dispute path is mandatory — a legitimate citizen using VoIP or eSIM MUST be able to dispute without explaining their phone-number choice.
- Flag events are restricted-class: not queryable by members, not published to any public record, not written to any on-chain store. Stored only in the restricted operational audit log with the enrolment service.

**Privacy residual (recorded, not hidden):** The enrolment phone number is transmitted to the phone-intelligence vendor for scoring. Mitigation posture: minimal payload (phone number only; no party context, no political context); vendor contract must include no-retention/no-resale/no-profiling terms; vendor failure mode is fail-open (enrolment proceeds; spam layer is advisory). Residual accepted for v1; eliminated in v2 by ZK enrolment making the spam layer unnecessary at the uniqueness level. Full analysis in ADR-025 §(c-iii).

### 10.13.9 DES-100 — v1 ID-document verification and retention model

**Element:** The end-to-end flow for government-ID document verification as the v1 COUNTING-tier eligibility gate, the allowlist of retained fields, the hashing/KMS design for all retained identity-derived data, and the legal-review routing table. Implements the verify-and-discard retention rule (approver directive, Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §2). **Amended 2026-08-24 (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md):** the ID check is the COUNTING-tier gate (FR-123), not an account-creation gate; account creation requires phone verification alone (FR-020, FR-122). Answers architect Q-1 and Q-2 in full; routes Q-3 items to CON-015 and GDPR counsel.

**Why this element exists:** ADR-025 §(a) names the phone-verification channel for account creation. This element names the government-ID document check that confirms a real, legal-age person as a prerequisite for COUNTING-tier eligibility (FR-123) — specifying precisely the data-at-rest surface that results. The check is triggered when a member first attempts a COUNTING action (strength contribution, binding vote, candidacy) without `id_verified_flag = true` in the restricted-class credential store; account creation itself does NOT require this check. **[Pre-amendment text — superseded 2026-08-24: this element previously described the check as "before account creation"; that scoping was wrong per the 2026-08-24 ruling and is corrected here. The verify-and-discard retention rule, the allowlist/denylist, the HMAC design, and the Q-1/Q-2/Q-3 answers are unchanged.]**

**Provider integration:** A third-party ID-verification provider (vendor TBD; Doc 13 DEP-new) receives the document image (front/back) and optionally a selfie, processes it, and returns a structured JSON response to the platform's enrolment service.

**Field-level disposition (Q-1 answer):**

| Provider field | Description | Platform action |
|---|---|---|
| `status` | APPROVED / REJECTED / REVIEW_NEEDED | Read; used to determine COUNTING-tier eligibility (FR-123 actions); not persisted |
| `verification_id` | Ephemeral provider-issued session UUID | **DISCARDED immediately** — MUST NOT be persisted |
| `subject_id` | Provider-issued stable pseudonymous token (same individual re-verifying → same token) | `HMAC-SHA-256(subject_id, pepper_id)` → stored as `subject_id_hash` |
| `checks.age_verified` | Boolean: verified ≥ 18 | Stored as `age_verified` boolean |
| `checks.issuing_country` | ISO 3166-1 alpha-2 code (e.g. "IN") | Stored as `issuing_region` |
| `extracted_data.name` | Document-holder's full name | **DISCARDED** — PII; MUST NOT reach any store or log |
| `extracted_data.date_of_birth` | Date of birth | **DISCARDED** — PII |
| `extracted_data.document_number` | Document serial number | **DISCARDED** — PII |
| `extracted_data.expiry_date` | Document expiry date | **DISCARDED** |
| Document images (front/back) | Raw image bytes | **DISCARDED** — MUST NOT be forwarded or buffered beyond in-flight verification |
| Selfie / biometric template | Liveness frames or biometric embeddings | **DISCARDED** — MUST NOT be stored or forwarded |

**Allowlist — fields that MAY be persisted (restricted-class credential store only):**

| Field | Type | Purpose |
|---|---|---|
| `id_verified_flag` | boolean | Gate: true iff document authentic + age verified + region returned |
| `age_verified` | boolean | Confirms ≥ 18 at COUNTING-tier government-ID verification |
| `issuing_region` | ISO 3166-1 alpha-2 | Assigns citizen to correct governance region |
| `subject_id_hash` | HMAC-SHA-256(provider_subject_id, pepper_id) | Same-document deduplication — prevents same-document-different-phone reuse |
| `phone_hash` | HMAC-SHA-256(E.164-normalized(phone), pepper_phone) | One-account-per-number enforcement (ADR-025 §(a)) |
| `verified_at` | ISO-8601 timestamp | Compliance audit trail |

**Denylist — fields that MUST NEVER reach any persistence layer, log, analytics pipeline, or error trace:** document images, biometric templates, selfie frames, `name`, `date_of_birth`, `document_number`, `expiry_date`, raw `subject_id`, `verification_id`.

**Doc 01 §E1 alignment:** The allowlist delivers the PR-FAQ promise — "We do not keep your identity documents or biometric templates — they are checked and discarded, never stored by us." This promise holds ONLY IF the vendor contract includes a no-retention clause for document images and biometric templates on the provider's side. The vendor-contract constraint is not optional — it is part of this design element's correctness condition.

**Q-2 answer — HMAC design and brute-force residual:**

`phone_hash = HMAC-SHA-256(E.164-normalized(phone_number), pepper_phone)` and `subject_id_hash = HMAC-SHA-256(provider_subject_id, pepper_id)`. Both peppers (32-byte keys, randomly generated) are stored in KMS/HSM — not in the same data store as the hashes; not loaded into application memory in raw form.

**Why HMAC-SHA-256 with KMS pepper (and why not bcrypt/Argon2id):** The deduplication check is a deterministic lookup — `SELECT WHERE phone_hash = compute(input)`. Slow KDFs (bcrypt, Argon2id) use per-record random salts, making them non-deterministic and unsuitable for duplicate-detection queries without degrading enrolment-service performance to ~100 ms+ per check at scale. HMAC with a KMS-held pepper is the correct design for deterministic, brute-force-resistant deduplication.

**Brute-force residual (stated precisely):**
- Attacker with DB dump only (no pepper): computationally infeasible — cannot precompute the hash table without the key. Security holds as long as the pepper is uncompromised.
- Attacker with DB dump AND pepper: Indian mobile number space is ~4 × 10⁹ possible numbers (~1.1 billion active). Exhaustive precomputation takes hours on commodity GPU hardware. **Phone numbers CAN be recovered if both the DB dump and the pepper are simultaneously compromised. This is the accepted residual for any HMAC scheme.**
- Insider with simultaneous KMS + DB access: can reconstruct all phone numbers. Dual-authorization is the primary mitigation.

**Operational MUST requirements:**
1. KMS/HSM stored; HMAC computation via KMS API; raw pepper bytes MUST NOT be loaded into application memory in production.
2. Dual-authorization access policy on both KMS keys (2-person integrity rule).
3. Pepper rotation schedule defined before production launch; re-hashing window during rotation holds access to both old and new peppers.
4. No plaintext phone number written to any log, error trace, analytics pipeline, or debug output. Log-scrubbing MUST be enforced at application layer.
5. Hash-lookup endpoints MUST be rate-limited at application layer to prevent online enumeration.

**Verify-and-discard vs uniqueness tension (recorded honestly):** `subject_id_hash` detects same-document-different-phone reuse — a material Sybil-resistance improvement over phone-alone. It does NOT prevent a person holding multiple legitimate government IDs from creating multiple accounts. T-06 stands unchanged: `getProperties().onePersonOneVote = false`; v1 is "real-person verified, not unique-person guaranteed." The alternative (boolean only, no `subject_id_hash`) satisfies the stricter verify-and-discard interpretation but provides no same-document deduplication. Recommendation: retain `subject_id_hash`.

**Q-3 answer — Legal-review routing:**

*Architect-decidable (confirmed by this element):* fields to discard (denylist above); fields to store (allowlist above); HMAC-SHA-256/KMS design; restriction to restricted-class credential store only; provider fail-closed on unavailability.

*MUST route to CON-015 and/or GDPR/DPDP counsel:*

| Question | Legal domain | Priority |
|---|---|---|
| Is ephemeral provider-side processing of the government-ID image compliant with India DPDP Act 2023 consent/purpose-limitation provisions? Does verify-and-discard satisfy DPDP "legitimate use"? | CON-015 (India DPDP + Aadhaar Act 2016) | **Critical path — clears before implementation** |
| If the government ID is Aadhaar: does document-check verification by a non-UIDAI entity constitute unauthorized authentication under the Aadhaar Act 2016 and Aadhaar Authentication Regulations? | CON-015 (specifically covers this) | **Critical path** |
| Is `phone_hash` personal data under India DPDP and GDPR (re-identifiable with KMS key)? | CON-015 + EU GDPR counsel | High |
| Is `subject_id_hash` personal data under India DPDP and GDPR (derived from biometric/document processing)? | CON-015 + EU GDPR counsel | High |
| Retention period for all allowlist fields after account deletion (storage-limitation principle) | CON-015 | High |
| Cross-border data transfer if ID-verification provider processes outside India | CON-015 + provider contract | High |
| Erasure rights (DPDP/GDPR): can `phone_hash` and `subject_id_hash` be deleted without breaking audit chain? (On-chain records do not contain these fields — they are restricted-class — audit integrity maintained; legal confirmation required.) | CON-015 | Medium |
| EU GDPR Article 9: political-platform context — restricted-class `phone_hash` linked to party membership may constitute politically sensitive data. Out of scope for Phase-1 India pilot; Gate-2 blocker for any EU expansion. | EU GDPR counsel | Medium (Phase 1) / High (Phase 2+) |

**CON-015 is now critical-path:** this ruling adds government-ID document verification to the India/Aadhaar pilot — precisely the legally sensitive area CON-015 covers (Aadhaar Act 2016, DPDP, eKYC regulations). CON-015 legal opinion MUST be in hand ≥ 8 weeks before Gate 2. **No enrolment sprint begins without CON-015 cleared for the government-ID check path.**

**Exclusion residual (recorded, not hidden) — REWRITTEN 2026-08-24 (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md; corrects the pre-amendment scoping below):**

A citizen without an accepted government-ID document **CAN** create an account, join a party, and participate fully in the open tier with phone verification alone — reading, following, watching, discussing, supporting, and organising (FR-122, FR-020). What they **cannot** do in v1 is:
(a) have a vote counted in a binding decision;
(b) contribute to a party's official strength number;
(c) stand as a candidate.

These are exactly the three FR-123 COUNTING actions. The exclusion is from COUNTING-tier eligibility, not from platform membership. An undocumented person is NOT excluded from Trumocracy — they participate at the open tier (FR-122), which is a full citizen-participation tier, without restriction.

**This is still a real and sharp limitation.** The populations most likely to lack accepted government-issued ID documents — migrants, people in poverty, youth below document-issuance age, and those already marginalised from formal institutions — are the populations Trumocracy's mission specifically targets. A permanent non-counting class that disproportionately includes these populations is a genuine cost, not a hidden one. It is accepted as a Phase-1 limitation, not a permanent architecture choice.

**Corrected house precedent:** ADR-016 item (c) — "In Phase 1, a person without Aadhaar cannot enrol in the pilot region" — is the no-document exclusion precedent for the v2 ZK enrolment path, where no-Aadhaar means no nullifier and thus no COUNTING actions. The v1 parallel is: no government-ID document → no COUNTING-tier eligibility in v1. Both precedents apply to the COUNTING gate, not to platform access. **[Pre-amendment text — superseded 2026-08-24: DES-100 previously stated "a citizen without an accepted government-ID document cannot enrol in v1" and the ADR-016 precedent was cited as gating "access to the platform itself"; both statements were wrong per the 2026-08-24 ruling and are corrected here.]**

**FR-124 composition check (2026-08-24):** FR-124 (verified status is PRIVATE TO THE HOLDER, expressed as eligibility, never a public per-participant badge — Rathish ruling 2026-08-20; Doc 02 v2.12.0 §4.41) composes with this element without tension. The DES-100 allowlist fields (`id_verified_flag`, `age_verified`, `subject_id_hash`) are restricted-class and stored only in the restricted-class credential store. They MUST NOT become a public per-participant marker (FR-124 clause (d): no persistent public attribute, field, tag, or derivable signal MUST reveal that a specific participant is COUNTING-verified). This applies identically under the corrected COUNTING-gate scoping: whether the gate is at account creation or at the COUNTING-action call site, the verified-status fields remain restricted-class and never public. No conflict.

**Traces:** FR-003 (PARTIAL — reshaped), FR-020 (RESOLVED — BR-003/FR-020 contradiction closed 2026-08-24; government-ID check does not gate joining), FR-122, FR-123, FR-124 (composition confirmed), FR-132 (amended; re-scoped to COUNTING gate 2026-08-24), NFR-010, NFR-016, CON-002, CON-008, CON-015, DES-095 (amended), ADR-025 §(e) and §[AMENDMENT 2026-08-24].
**Backs:** FR-132 (Doc 02 v2.12.0; owner Marcus Adeyemi; traces BR-006/BR-012; re-scoped to COUNTING gate by v2.12.0). US layer: owed — PO to derive US from FR-132 (v2.12.0) covering the ID-verification COUNTING-tier flow.

### 10.13.10 DES-101 — non-violence clause verification gate (FR-077)

**Why this element exists.** FR-077 ("non-violence clause verified by code; publication refused
if absent or altered") has had a working implementation since Doc 06 v2.2.0 and passes at three
layers, but §5.2 named no design element, so its RTM Must row stayed OPEN on a **chain** defect
that no additional test can close. §18 C-02's closure note recorded "no further architect action
required" for the *cap* concept; that note was about C-02, and it left FR-077's design link
unwritten. This element writes it.

**Element.** A single canonical clause string, held in `packages/protocol` as
`NON_VIOLENCE_CLAUSE`, is the **sole source of truth**. Every layer that accepts, validates or
publishes a party charter compares the submitted clause against that constant and refuses on any
difference. The clause is a **constitutional precondition of party existence** (CON-013), not a
form field.

**Normative rules:**

1. **Verbatim match, byte-for-byte.** A submitted charter satisfies the gate only when its
   non-violence clause is **identical** to `NON_VIOLENCE_CLAUSE`. Comparison is exact: no
   trimming beyond a single documented normalisation of leading/trailing whitespace, no case
   folding, no Unicode-confusable tolerance, no fuzzy, semantic, keyword or
   percentage-similarity match. A near-match is a **failure**, not a pass — a clause that
   *almost* renounces violence is precisely the artefact this gate exists to reject.
2. **Two distinguishable refusals.** `validateDraft` returns
   `{ valid: false, errors: [...] }`, and each error is identified by its **(field, code)
   pair** — not by a globally-unique code name. For this gate the field is
   `charter.nonViolenceClause`, and the two refusals are:
   - **absent or empty** → `{ field: 'charter.nonViolenceClause', code: 'REQUIRED' }`
   - **present but not byte-identical** → `{ field: 'charter.nonViolenceClause', code: 'ALTERED' }`

   `REQUIRED` is the platform-wide code for a missing mandatory field (it is also emitted for
   `name`, `pillars.*` and `emblem`); the **field** is what scopes it to this gate. `ALTERED`
   is unique to this gate — nothing else in the validator can be *altered*, because nothing
   else has a canonical text to depart from. The two MUST NOT be collapsed into one code: a
   drafter who omitted the clause and a drafter who edited it need different remedies, and an
   auditor reading the refusal log needs to tell attempted-alteration from omission.
3. **No waiver surface.** No operator, admin, configuration value, environment variable, feature
   flag or constructor parameter may disable, soften or bypass the check. The absence of a waiver
   path is a **capability-absence obligation** in the sense of §4/DES-075: it is asserted by test,
   not merely by convention.
4. **Frozen text; governance to change.** The clause text is frozen in code so it is verifiable by
   anyone reading the repository. Changing it is a protocol governance action (ADR-010), never an
   ordinary code edit. Approver ratification of the current engineer-authored text is recorded
   (Ruling 2, Rathish, 2026-08-26; Doc 02 §4.22 is the normative home) and closes the former
   CLAUSE-TEXT-01 flag.
5. **Enforcement points.**
   - **v1 (shipped):** `packages/protocol` validation is the reference rule; `packages/sdk`
     `PartyCreationService` refuses at draft-create and re-checks at publish; `apps/web` surfaces
     the named deficiency. Three layers, one constant.
   - **v2 (owed at the on-chain increment):** `PartyRegistry.publishDraft` performs the same check
     on the charter hash before a petition may open, making the gate trust-minimised rather than
     application-enforced. This is the same v1→v2 shape as DES-074 (eight-pillar gate).
6. **Surfaces.** **SCR-04** (party draft editor — the clause is displayed as non-editable
   canonical text, so a drafter reads what they are adopting) and **SCR-05** (publish check &
   deficiency report — the named `REQUIRED` / `ALTERED` refusal on
   `charter.nonViolenceClause` renders here).

**Failure modes considered.** (a) *Homoglyph substitution* — a visually identical clause with a
Cyrillic character is `ALTERED`, correctly, because comparison is byte-wise; this is the
reason no confusable-normalisation is permitted. (b) *Whitespace drift from copy-paste* — the
single documented outer-trim keeps honest submissions from failing while leaving interior text
exact. (c) *Localisation* — the canonical clause is stored and compared in its canonical language;
a translated rendering MAY be displayed alongside for comprehension but MUST NOT be what is
compared or stored, or the constant stops being a single source of truth.

#### 10.13.10.1 Amendment-time verification — the second half of FR-077 (v2.8.2)

**How this gap was found, and why it matters.** v2.8.0 designed the *publication* gate and
asserted in §15 that FR-077's RTM row was closeable. That assessment was **wrong**, and the
tester's rule-4 check caught it: FR-077 requires the system to "refuse publication of any new
constitution **and** refuse **every subsequent amendment** if the non-violence clause is absent
or has been altered." Publication is gated at three layers. **Amendment is gated nowhere**, at
either tier — and it was not merely unimplemented, it was **undesigned**. This subsection supplies
the missing design. It does **not** close the row: a design is not an implementation.

**The concrete hole.** `Party.amendCharter(clauseId, newCharterHash, newCharterCID)` checks only
that the caller is the governor and that `immutableClause[clauseId]` is unset, then assigns
`charter.charterHash` and `charter.charterCID` wholesale. **The function never receives the
charter text**, so it cannot inspect the clause even in principle. Two distinct failures follow:

1. **Direct** — nothing marks the non-violence clause immutable *by platform rule*.
   `setFoundingClauses` is called by the registry, but the immutable set is a founding-time
   *choice*; a party that simply does not entrench the clause may amend it away. A guarantee the
   platform states unconditionally MUST NOT depend on each party electing to keep it.
2. **Structural, and the more serious of the two** — even with that clauseId entrenched, an
   amendment naming *any other* clause replaces the **entire** document hash and CID. The new
   document may silently omit or alter the non-violence clause, and `ClauseIsImmutable` never
   fires because the amendment did not name that clause. **Entrenching one clause cannot protect
   a monolithic blob**: the charter is stored as one hash, so every amendment is a whole-document
   replacement wearing a single clause's name.

**Normative design.**

1. **The charter is a clause map, not a blob.** `Party` MUST store
   `mapping(bytes32 clauseId => bytes32 clauseHash)` with the document hash **derived** from the
   map (an ordered hash over the clause set), rather than storing one opaque `charterHash` that a
   single call can overwrite. `amendCharter` then does what its signature always implied — amend
   **the named clause** — and cannot reach any other clause. This is the structural fix; rules 2–4
   are defence in depth over it.
2. **The non-violence clause is platform-immutable.** Its `clauseId` is a platform constant, and
   `PartyDeployer`/`PartyRegistry` MUST write it into `immutableClause` at construction for
   **every** party, independent of founder choice. Founding parties may entrench *more*; they may
   never entrench *less* (the DES-017 ratchet, applied to entrenchment). `amendCharter` on that
   clauseId reverts `ClauseIsImmutable`.
3. **Amendments carry what they change.** An amendment MUST submit the clause **text** for the
   clause it names (or a proof binding text to hash), so the contract verifies rather than trusts.
   Where full text on-chain is uneconomic, the amendment carries `keccak(text)` and the CID, and
   the platform's published clause hash is compared directly — verification of a document the
   contract never sees is not verification.
4. **Whole-document replacement, if ever permitted, re-verifies.** Should a future increment
   reintroduce a bulk charter replacement path, it MUST re-run the DES-101 gate over the incoming
   document before the write. A replacement path without re-verification re-opens exactly this
   hole.
5. **v1 (application tier).** No charter-amendment path exists in v1 today — recorded as fact, not
   as safety. When one is built, it MUST route through the same `validateDraft` check that
   `createDraft` and `publishDraft` already use, with the same (field, code) refusal contract. The
   single-source-of-truth constant makes this a reuse, not a reimplementation.
6. **Test obligation.** The closing evidence for FR-077 is an *adversarial amendment* test, not a
   happy path: amend an unrelated clause with a replacement charter whose non-violence clause has
   been stripped, and assert refusal. Written against today's code that test **fails**, which is
   the point — it is the regression test for this hole.

**Status — honest.** FR-077's RTM row stays **OPEN (G-NOMECH)**. This subsection converts it from
*undesigned* to *designed-and-unbuilt*: the mechanism is now specified, and the row closes when the
clause-map refactor and rule 6's adversarial test land.

**Governance status — `PREREQ-01` (approver ruling, Rathish, 2026-08-29).** The build of rules 1–3
is **not** a line item inside the on-chain governance increment; it is a **separately tracked,
blocking prerequisite to it**. The on-chain governance increment MUST NOT ship until rule 6's
adversarial test passes. The approver's rationale: CON-013 makes the non-violence clause a
condition of a party's existence, so a fix protecting it has to be a hard gate rather than
something that can slip under sprint pressure. Recorded in §13, in
`artifacts/status/DECISIONS-2026-08-29-NONVIOLENCE-ENTRENCHMENT.md`, and in the running gate
status. Doc 13 absorbs `PREREQ-01` into the Definition-B milestone set at its next version.

**Security note (routed; ruled `PREREQ-01`).** Item 2 above is a live weakness in shipped contract
code, not merely a documentation gap: a party may today amend away the non-violence commitment that
CON-013 makes a condition of its existence. The `party_governance` flag is on in every environment,
so this is not flag-contained. Independently confirmed by reviewer-qa against `Party.sol` (both
failure modes reproduced; zero non-violence checks found in any contract). It is recorded in §13
and routed to reviewer-qa for the next security scan and to the engineer. No exploit path exists in
v1 deployments, because v1 runs no on-chain governance (ADR-024 §(b)) — **v1 work is not blocked**.
The exposure arrives with the on-chain governance increment, and the approver has ruled (2026-08-29)
that it MUST be fixed **before** that increment ships, as the separately tracked blocking
prerequisite `PREREQ-01` rather than as a line item within it.

**Traces:** FR-077, FR-027 (entrenchment), FR-078 (constitution amendable only via tiered
process), CON-013, ADR-010, DES-017 (ratchet), DES-022 (entrenched clauses), DES-074 (parallel
gate). **Backs:** FR-077 (Doc 02 §4.22; owner Daniel Okonkwo; traces BR-014). **Implemented by
(publication half only):** UT-0071..UT-0075 (protocol), UT-0786 (sdk), UT-0849..UT-0851 (web);
TC-3403, TC-3508..TC-3510. **Owed (amendment half):** clause-map refactor + adversarial amendment
test.

### 10.13.11 DES-102 — provisional-party membership cap (FR-130)

**Why this element exists.** FR-130 was minted to give the wireframe-2.3 cap note a normative
footing (C-02 ruling, Rathish, 2026-08-22). §18 C-02's closure note then recorded the cap as "the
engineer's build-time obligation" and "no further architect action required on C-02 itself" —
true of the *conflict*, but it left FR-130 with **no DES**, which is why the row has stayed OPEN
through two feature drops despite complete, passing tests. This element supplies the missing
design, and specifies the enforcement point at both delivery tiers.

**Element.** A party that the platform has activated but whose **legal registration is not yet
verified** is *provisional*. A provisional party admits at most `PROVISIONAL_MEMBER_CAP` = **100
active members**. The cap is an anti-capture control: it bounds how much apparent political
strength an unregistered entity can accumulate before it has accepted the accountability that
legal registration carries.

**Normative rules:**

1. **The invariant.** For any party `P`: `legalRegistrationVerified(P) = false` ⟹
   `activeMemberCount(P) ≤ 100`. This is an invariant on **state**, not a property of a code path,
   and it MUST hold at every point at which membership is written.
2. **Checked at the membership-write boundary.** The check belongs at the single boundary where a
   membership record is created — not in the UI, not in a controller, not in a query. Any future
   write path (import, migration, admin tool, batch job, restore) inherits the check by
   construction because it must pass through that boundary. A cap enforced at the surface is a cap
   that the next entry point silently bypasses.
3. **UNCONDITIONAL until lift.** There is **no grace window, no queue, no waitlist, no
   temporary overage, and no soft cap** (Ruling 1, Rathish, 2026-08-26; the 60-day grace concept
   considered during requirements was never adopted and is explicitly not part of v1). The 101st
   join is refused. The refusal is honest and named — `PROVISIONAL_CAP_REACHED`, carrying the cap
   value — and the surface states the real reason rather than presenting a dead control.
4. **ACTIVE-member semantics.** The cap counts **currently active** memberships. A member who
   leaves frees **exactly one** slot; a departure MUST NOT permanently consume capacity, and a
   rejoin MUST NOT double-count. The authoritative count is derived from the append-only
   membership event log (DES-097(b)), never from a mutable counter that can drift from its log.
5. **Lift is by code only.** The cap lifts when — and only when — verified legal registration is
   recorded against the party (FR-075). At that moment the party becomes uncapped, automatically,
   with no re-application and no human confirmation step. **No operator, admin, support,
   configuration or flag path may lift the cap early**, and none may raise it. Specifically, no
   `setProvisionalCapOverride`, no `bypassProvisionalCap`, no cap argument on the join path, and
   no privileged caller: the **absence of every such surface is a first-class capability-absence
   obligation** (§4, DES-075, DES-077) and is asserted by test.
6. **What "verified legal registration" means, and its honest boundary.** The recording of legal
   registration is an *external* fact entering the system: a jurisdiction's registrar has
   registered the party. The design obligation here is that the **record** carries an evidence
   reference and is append-only and publicly auditable; the **verification procedure** — who
   checks the registrar's record, and against what — is an operational and legal question that
   composes with CON-015 per jurisdiction and is **not** settled by this element. Until that
   procedure is specified, the trigger is trusted input from the platform operator, and that
   trust is disclosed, not hidden (see the residual below).
7. **Enforcement points.**
   - **v1 (shipped, application-authoritative):** the cap is checked in the SDK
     `PartyCreationService` join path against `legalRegistrationVerified` on the party record and
     the active-member count from the DES-097(b) store. In v1 membership lives in Postgres, not
     on chain (DES-097 / ADR-024 §(b)), so the application boundary is the *only* enforcement
     point that exists — which is precisely why rule 8's audit publication matters.
   - **v2 (owed at the on-chain increment):** `Party.join()` gains the cap guard, placed **after**
     the `AlreadyMember` check and **before** `memberCount += 1` — i.e. after identity and
     duplicate resolution, before the state write, so a refused join costs the caller no
     membership mutation. Two fields back it: a `legalRegistrationVerified` bool on the party and
     a `recordLegalRegistration(evidenceRef)` entry point callable only from a passed governance
     action or the registry that deployed the party — never from an EOA with an operator role.
     A new error `ProvisionalCapReached(uint64 cap)` joins the existing error set. The v2 guard
     makes the invariant trust-minimised; the v1 guard makes it *true today*.
8. **Auditability in v1 (what makes an application-side cap checkable).** Because v1 enforces the
   cap in the application, the cap state MUST be externally verifiable rather than merely
   asserted: the party's provisional status, its cap value, its current active-member count, and
   any legal-registration record (with evidence reference and timestamp) are published to the
   audit-record contract subset (DES-097) and rendered on the party surface. An observer who does
   not trust the operator can therefore detect a party operating over its cap, or a registration
   recorded without evidence, from public data alone. **Tamper-evidence, not tamper-prevention** —
   the same honest posture as T-05 in §10.13.7.
9. **Surfaces.** **SCR-09** (activation record — provisional status, the cap, the current count,
   and the plain-language reason the cap exists) and **SCR-11** (join / leave — where the
   `PROVISIONAL_CAP_REACHED` refusal renders). Copy is subject to DES-085 (jargon filter) and
   NFR-023 (grade-8); it MUST NOT imply the party is defective — a provisional party is a normal
   party at an early stage.

**Interaction with other controls.** The cap composes with, and does not replace: FR-020 (the cap
is a **party-state** limit, never an admission judgement about a person — nobody is refused for
who they are, and the 101st applicant is refused exactly as the 100th would have been had they
arrived later); FR-125 (invite-gating is a rate-limiter, never an admission condition — the cap is
neither); FR-023 (churn limits); and the FR-122/FR-123 counting distinction (the cap bounds
*members*, which is a different quantity from *counted strength*).

**Residual, recorded not hidden.** In v1 the cap is enforced by a single application service over
a single database. An operator with direct database access can write a membership row that
bypasses the service boundary. Rule 8's audit publication makes such a bypass **detectable**, not
**impossible**; impossibility arrives with the v2 on-chain guard in rule 7. This residual is of
the same class as T-05 (Charter Rule 3 deferred to v2) and is disclosed on the same basis.

**Traces:** FR-130, FR-075, BR-002, BR-012, CON-015 (registration-verification procedure),
DES-097(b) (store), DES-098 (disclosure discipline), C-02 ruling (2026-08-22), Ruling 1
(2026-08-26). **Backs:** FR-130 (Doc 02 §4.44; owner Sofia Marchetti). **Implemented by:**
UT-0802..UT-0811, UT-0825 (sdk), UT-0852..UT-0856, UT-0862 (web); TC-3511..TC-3516, TC-3528,
TC-3529. **Closes:** §16 Q12.

### 10.13.12 DES-097(b) — IPartyStore → Postgres store wiring

**Why this element exists.** DES-097 (§10.13.5) fixed the v1 *stack* — conventional PWA +
Postgres, chain as audit record. It did not specify the store itself. The SDK now defines a
22-method `IPartyStore` interface with a working in-memory implementation
(`IS_INSECURE_MOCK = true`), and several Must rows — FR-010 among them — are held open by the
absence of the production backing rather than by any missing logic. This element specifies that
backing so it can be built. **No ID is minted:** the RTM already cites "DES-097" for the
production store, so this is a normative extension of DES-097 rather than a renumber.

**Scope note.** This is a *design* specification. It does not build the backend, and it does not
decide the legally-gated retention questions — those are marked PENDING CON-015 below.

**1. The interface is the contract, and it is already fixed.** The production store implements the
same 22-method `IPartyStore` the SDK defines; the service is written against the interface and
MUST require no change when the backing swaps. The interface is enumerated in
`packages/sdk/src/party-creation.js` (JSDoc `@typedef`) and mirrored in the app's type shim, with
a test asserting the two member sets are equal (UT-0871) — that guard is what makes
"implement the interface" a checkable claim rather than an intention.

**2. Relation mapping (normative shape; column types indicative).**

| Interface concern | Relation | Key / index | Notes |
|---|---|---|---|
| drafts (`saveDraft`, `findDraftById`, `updateDraft`) | `party_draft` | `draft_id` PK; index on `(drafter_pseudonym, jurisdiction)` | Charter stored as JSONB; `charter_fingerprint` a generated column for the FR-013 cooldown check |
| petitions (`savePetition`, `findPetitionById`, `updatePetition`, `archivePetition`, `findPetitionsPastClose`, `findLivePetitionsByJurisdiction`, `findExpiredPetitionsByDrafter`) | `party_petition` | `petition_id` PK; index on `(jurisdiction, state)`; index on `(state, closes_at)` | `findPetitionsPastClose(now)` → `WHERE state = 'PETITION' AND closes_at < $1`; the `(state, closes_at)` index is what keeps the expiry sweep from becoming a table scan |
| archive immutability | `party_petition.archived_at` + row-level rule | — | Once `archived_at IS NOT NULL`, every mutation MUST be refused (`ARCHIVED_IMMUTABLE`). Enforced by a `BEFORE UPDATE` trigger, not by application discipline alone — the immutability guarantee must survive a second writer |
| parties (`saveParty`, `findPartyById`, `updateParty`, `findActivePartiesByJurisdiction`) | `party` | `party_id` PK; index on `(jurisdiction, state)`; **unique** on `(jurisdiction, normalized_name)` and `(jurisdiction, normalized_emblem)` for live rows | Carries `legal_registration_verified` + `legal_registration_evidence_ref` + `legal_registration_recorded_at` (DES-102 rule 6) |
| membership events (`recordJoin`, `recordLeave`, `getMembershipEvents`) | `membership_event` | `(member_pseudonym, seq)`; index on `(party_id, action)` | **Append-only. INSERT only** — no UPDATE, no DELETE grant on this relation for the application role. This log is the authoritative membership record |
| derived membership (`getActiveMembership`, `getMemberPseudonyms`) | materialised projection over `membership_event` | unique partial index enforcing at most one active membership per pseudonym | A projection, never a parallel source of truth; MUST be derivable by replaying the log |
| counted strength (`recordStrengthContribution`, `getCountedPseudonyms`) | `counted_member` | unique `(party_id, member_pseudonym)` | v1 app-side uniqueness; the v2 nullifier path (DES-065) supersedes it |
| `IS_INSECURE_MOCK` | — | — | Returns `false` for this backing **only** when §5's promotion conditions hold |

**3. The append-only log is the membership record.** Membership is stored as an ordered
`JOIN`/`LEAVE` event log, never as a mutable membership row that is deleted on leave. Leaving is
recorded, not erased (FR-022, FR-107). Active membership and member counts are **derived**. Where
a projection is materialised for read performance, it MUST be reconstructible from the log, and a
CI check MUST assert projection-equals-replay on a seeded fixture — a projection that can silently
diverge from its log is a counting bug waiting for an election.

**4. Concurrency: the invariants the in-memory store gets for free.** The in-memory store is
single-threaded, so three invariants hold without effort and MUST be re-established explicitly
under concurrent writers:

| Invariant | Requirement under concurrency |
|---|---|
| FR-130 cap (DES-102) | The count-then-insert sequence MUST be atomic. Either serialise on the party row (`SELECT … FOR UPDATE` on `party` before the count) or enforce by constraint; a plain read-then-write races and admits member 101 |
| FR-064 one-active-party | Enforced by a **unique partial index** on the active-membership projection (one active row per `member_pseudonym`), not by an application pre-check alone — the pre-check is the friendly error, the index is the guarantee |
| FR-010 name/emblem collision | The `publishDraft` TOCTOU re-check (already implemented, UT-0818) is necessary but not sufficient across processes; the **unique index** on `(jurisdiction, normalized_name)` / `(jurisdiction, normalized_emblem)` for live rows is the authority, and the application maps its violation to `NAME_COLLISION` / `EMBLEM_COLLISION` |

Isolation level: `READ COMMITTED` plus the explicit locks and unique indexes above. The general
rule: **every invariant currently guaranteed by single-threading MUST be re-expressed as a
database constraint or an explicit lock** — never as an application-layer check alone.

**5. Retention boundary — composes with DES-100, does not restate it.** DES-100 is the normative
allowlist/denylist for identity-derived data; this store inherits it and adds nothing.

- **Stored:** party/petition/draft content (public-class governance data); `member_pseudonym`
  (the account-scoped pseudonym, not a person); membership events; `legal_registration_evidence_ref`.
- **Never stored in this store, at any layer:** raw identity documents or images, name, date of
  birth, document number, address, or any plaintext phone number. The credential surface
  (`phone_hash`, `subject_id_hash`, `id_verified_flag`, `age_verified`, `issuing_region`,
  `verified_at` — all HMAC-SHA-256 under a KMS-held pepper, verify-and-discard) lives in the
  **restricted-class credential store of DES-100**, is referenced by pseudonym, and MUST NOT be
  joined into the governance relations above. Two stores, one boundary: governance data is
  public-class, identity-derived data is restricted-class, and no foreign key crosses that line
  in a way that would let a single query resolve a member to a document.
- **v1 honesty:** the operator CAN link account ↔ party in v1 by construction (T-01/T-02, FR-131(b)
  disclosure). This element does not pretend otherwise; it bounds *what else* is retained.

**6. PENDING CON-015 — legally-gated, deliberately unspecified here.** The following are **not**
architect-decidable and MUST NOT be guessed into this design:

| Item | Question | Gated on |
|---|---|---|
| Retention period | How long may `membership_event` rows and `legal_registration_evidence_ref` be retained, per jurisdiction? | CON-015 legal opinion (India DPDP first) |
| Erasure-request handling | How does an erasure request compose with the append-only rule (FR-107) and with the pseudonymisation defence? | CON-015 + GDPR counsel; ADR-013 §2 erasure-by-non-collection is the starting posture |
| Hash classification | Are `phone_hash` / `subject_id_hash` "personal data" under DPDP and GDPR? Classification changes the lawful basis and the retention answer | CON-015 + GDPR counsel (already routed, ADR-025 §(e) Q-3) |
| Cross-border placement | May the store reside outside the pilot jurisdiction? | CON-015 |
| Evidence-reference contents | May the legal-registration evidence reference contain a registrar document ID, or must it be a hash? | CON-015 |

Until CON-015 answers land, the store is specified **structurally** (what relations exist, what the
constraints are, what is never stored) and left **open** on duration and erasure. Building the
schema does not require these answers; **promoting it to production does.**

**7. Promotion condition (`IS_INSECURE_MOCK = false`).** This backing may return `false` — and
therefore pass the CI promotion gate — only when **all** hold: (a) it implements all 22 interface
methods with the UT-0871 shim guard green; (b) the append-only grants, immutability trigger and
unique indexes of §2/§4 are in place and covered by tests that attempt the violation and expect
refusal; (c) projection-equals-replay is asserted in CI; (d) the CON-015 retention answers of §6
are recorded and the schema reflects them; (e) no DES-100 denylist field appears anywhere in the
schema, asserted by the same class of scanner as DES-080. Until (a)–(e), the store returns `true`
and is blocked past devnet — the honest position, and the same discipline the in-memory store
already follows.

**Traces:** DES-097, DES-100 (retention), DES-102 (cap), DES-080 (schema guard), ADR-024 §(b),
ADR-013 §2, CON-002, CON-008, CON-015, FR-010, FR-013, FR-022, FR-064, FR-107 *(v2.12.0 — carried
Low #4 discharged: **related only, and expressly NOT a DES assignment.** The store's
recorded-not-erased rule serves FR-107's append-only property **for party and membership records
only**. FR-107 is platform-wide and its lifecycle is still undesigned; **Doc 08 holds the FR-107
Must row OPEN with DES = none** (`G-TRACE + G-PHASE3`, gap-log entry 98) and §15 disclaims the link
in terms. This footer is not the `FR/NFR → DES` register — §5.2 is — but it was listing FR-107
among DES-097(b)'s IDs with nothing marking the distinction, which is how a disclaimed link gets
published anyway)*, FR-130, NFR-010.
**Enables (does not close):** the FR-010 production-store build and every row whose gap reads
"production store pending DES-097". **US layer:** owed — PO to derive the persistence-build stories.

### 10.13.13 DES-103..DES-106 — proposals & debate (FR-024, FR-079/080, FR-090, FR-091, FR-092)

**Scope.** The v1 flow from "a member has a question" up to — and stopping at — the point a
ballot opens. It does not cast, store, count or tally a vote: `admitToBallot()` asks the
eligibility seam whether a member's ballot would COUNT and then hands off to IBallotService
(DES-096). A service that both decided who may vote and counted the votes would be the
single point of trust this architecture exists to remove.

**DES-103 — participation tiers (FR-079, FR-080).** Supporter on joining; Worker and
Candidate above it. `votingWeightForTier()` returns **1** for every tier and there is no
configuration, charter override or flag that can make it return anything else — the rule is
exposed as a function precisely so a test can assert it rather than infer it from an
absence.

Worker is **self-declared**, and the declaration is FR-080's **informed-consent event**, so
its surface is normative rather than incidental. It MUST be two steps: an explanation of why
the tier exists, then — **before** confirmation — a disclosure stating **both** required
facts and asking the member to accept them:

1. the declaration is **permanent for the term** and cannot be undone partway through; and
2. it makes the member's **participation record** public for the term — the record of what
   they take part in, not only the proposals they put forward.

The disclosure MUST also state that nobody reviews the declaration (FR-080's no-approval
clause), and declining MUST leave the member a Supporter with nothing recorded. A one-click
declaration is forbidden by construction: with no confirmation step there is no "before" for
the disclosure to precede, and the requirement becomes unsatisfiable rather than merely
unmet. Bound surfaces: **SCR-15** (the consent pattern — the §10.12.4 screen table already
names the Worker declaration as sharing it) and **SCR-12** where it is reached.

**DES-104 — authorship and competing proposals (FR-024, FR-090).**

1. **Who may author, and why.** Worker tier or above (OI-14, 2026-08-11). The reason is
   anonymity, not merit: authorship is public (FR-090) and Supporters are anonymous
   unconditionally (FR-082), so a Supporter cannot author without breaking their own
   anonymity. Every refusal on this path MUST say that the tier is self-declarable, so the
   gate reads as the disclosure step it is and never as a judgement on the proposal.
2. **The decision window.** Proposals answering the same question share one window, keyed by
   `normalizeQuestionKey()` (NFKC, case-folded, whitespace-collapsed — the same shape as
   `normalizeCollisionKey` for party names). Two members phrasing one question differently
   are answering one question, and their proposals belong together.
3. **Equal standing is enforced by absence.** All proposals in a window share one stage and
   one schedule; none carries a `weight`, `rank`, `priority`, `standing`, `primary` or
   `featured` field; and the service exposes **no** `withdrawProposal`, `removeProposal`,
   `rejectCompeting`, `mergeProposal`, `acceptAsAmendment`, `prioritiseProposal`,
   `setPrimaryProposal`, `closeWindow` or `vetoProposal`. `isOriginal` is **provenance, not
   precedence** — nothing in the service consults it to decide anything. This is a
   capability-absence obligation in the §4/DES-075 sense: asserted by test, on both the
   service surface and the rendered surface.
4. **Entry closes when the debate opens** _(v2.11.0: the lead-in read "when the ballot opens",
   which contradicted its own next sentence. v2.11.1: the correction note said the **DES-104** §5.2
   row had been fixed for this at v2.9.1; it was the **DES-105** row.)_. A competing proposal may join
   while the window is at proposal / review / discussion. Once it reaches debate, entry is refused
   (`WINDOW_CLOSED_TO_ENTRIES`, naming the stage): admitting a new option after people have
   begun deciding would change the question they were asked.

**DES-105 — the deliberative lifecycle (FR-091).** Eight stages, advanced one at a time.
`assertStageTransition(from, to)` is the authority and refuses by name: `STAGE_SKIPPED`
(carrying which stages were skipped), `STAGE_REVERSED`, `STAGE_UNCHANGED`;
`advanceStage(windowId)` takes the window and nothing else — no target stage, no `force`, no
`skipTo`, no `reason`, no actor. FR-091's "no stage MAY be skipped, reordered, or
human-vetoed" is therefore a property of the type signature rather than of a check someone
could forget. Review, discussion and debate are **deliberative**: `postDeliberation()` can
change no stage, no proposal and no outcome, and is open to **every** member including
open-tier Supporters — deliberation is participation, not a counting action (FR-122).

**DES-106 — the permanent decision trail (FR-092).** _(v2.11.2: this heading read "(FR-092, FR-107)". DES-106 serves FR-107's append-only property for the decision trail only; it does not discharge FR-107, whose Must row Doc 08 holds OPEN for want of a DES — see §15.)_ Append-only per window;
`appendTrailEvent` is the only writer and the store exposes no update, delete or rewrite
path; reads return copies. The trail records authorship, so agenda-setting is visible.
**Honest v1 boundary:** the trail is complete but held in the application store. FR-092
additionally requires it be "reconstructable end-to-end by any third party from public data
alone", which needs the DES-097 audit-record anchoring (Doc 13 stage S-8) — not built. The
surface says so in plain words. The FR-092 row therefore does **not** close on this drop,
and that is recorded rather than argued around.

**Counting-tier placement.** Exactly one call site in this flow reaches the eligibility
seam: `admitToBallot()`, with scope `BINDING_VOTE` (§10.13.2(b)). The service holds **no**
verifier, so authoring and deliberation structurally cannot reach one. A refusal at the gate
MUST state what the member keeps — membership, deliberation, reading the trail — because
verification gates counting, never participation (FR-020, FR-122).

**Vote-step honesty.** Where the surface reaches the VOTE stage it renders the
coercion-resistance notice (DES-098 family / FR-031 / NFR-003) **before** the member is
asked to act, non-dismissable, disappearing automatically when `maci_voting` is on.

#### Both open questions RESOLVED (Rathish, Human Approver, 2026-08-30)

_Recorded at v2.9.3 as open; ruled 2026-08-30 —
`artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md`. **Neither ruling
changes any shipped code**; both confirm what is built._

##### (a) FR-091's stage list vs ADR-008's `PROPOSAL_STATE` — ✅ COMPLEMENTARY, both canonical

The architect was asked to confirm whether these are the same model at two layers, or genuinely
competing models one of which must be named normative. **The finding is the former, and it is not
a close call.** They are not two candidate models of one thing; they are different kinds of thing
about different subjects. Four structural properties settle it, any one of which would suffice:

1. **Different subjects — and the cardinality is the proof.** FR-091's stage belongs to the
   **decision window**, which under DES-104 may hold several competing proposals answering one
   question; the stage is stored on the window, and a proposal carries only its `windowId`.
   `PROPOSAL_STATE` belongs to **one proposal's ballot**. A window holding three competing
   proposals therefore has **one** FR-091 stage and **three** ballot states, which resolve
   independently of one another. A one-to-many relation cannot be a renaming.
   _(v2.11.0 correction: this argument previously illustrated the resolution as "one
   `SUCCEEDED_TIMELOCK` and two `DEFEATED`". That asserted a **winner-selection rule that nothing
   in this architecture specifies** — `Governor` gives each proposal an independent binary ballot,
   and DES-104 deliberately removes every window-closing capability. The cardinality argument is
   unaffected and stands; the illustration was withdrawn. The absence it exposed is recorded as
   **§16 Q16**.)_
2. **Total and monotone vs branching with terminal exits.** FR-091 is a sequence every decision
   walks in order, never skipping. The ballot machine branches to terminal outcomes — `DEFEATED`,
   `CANCELLED` — which are not positions in any sequence.
3. **Stored vs derived.** FR-091's stage is stored and advanced explicitly by
   `advanceStage(windowId)`. `stateAt(sched, now, { executed, cancelled, outcome })`
   (`packages/protocol/src/governance.js:210`) is a **pure function** of schedule, tally and
   flags — nothing stores it. A stored position and a derived value are not one variable.
   _(v2.11.0 correction: v2.10.0 called this function `proposalState()`, which exists nowhere in
   the repository. The purity argument was correct; the name was invented. Corrected here and in
   the decision record.)_
4. **Different spans.** FR-091 covers *review*, *debate* (before a ballot exists) and *measurement*
   (after enactment), none of which the chain models. `PROPOSAL_STATE` covers *tallying* and the
   *timelock*, neither of which FR-091 names.

**Ruling: both are canonical at their own layer.** FR-091 is normative for the **public process** —
where a decision stands in its public life. `PROPOSAL_STATE` is normative for the **ballot** — what
the chain enforces about a vote. Neither is normative over the other, because neither answers the
other's question. **The mapping is the bridge:**

**THREE representations express the ballot state, and no two of them agree exactly** — reconciled
here because the seam rule below makes one of them authoritative _(v2.11.1: this passage said
"two". The SDK decode array was missed, and it is the one with a live failure mode.)_:

| | Values | Where |
|---|---|---|
| `Governor.State` (**on-chain, authoritative at v2**) | `Discussion`, `Voting`, `Tallying`, `Defeated`, `Timelocked`, `Executed`, `Cancelled` — **7** | `packages/contracts/src/core/Governor.sol:41-49` |
| `PROPOSAL_STATE` (JS reference mirror) | `draft`, `discussion`, `voting`, `tallying`, `succeeded_timelock`, `executed`, `defeated`, `cancelled` — **8** | `packages/protocol/src/governance.js:19-28` |
| `PROPOSAL_STATE_ENUM` (**SDK decode array — ordinal-indexed**) | `discussion`, `voting`, `tallying`, `defeated`, `timelocked`, `executed`, `cancelled` — **7**, positionally aligned to `Governor.State` | `packages/sdk/src/constants.js:42` |

Three divergences, recorded rather than smoothed over.
**(i) One state, three spellings.** The on-chain `Timelocked` is `SUCCEEDED_TIMELOCK` in the
protocol mirror and `timelocked` in the SDK decode array. The SDK agrees with the chain; the
protocol mirror does not.
**(ii) `PROPOSAL_STATE.DRAFT` is vestigial** — it has no producer anywhere in the repository:
`stateAt()` never returns it, no contract declares a `Draft` member, and §5.6's proposal model
begins at `discussion`. It is therefore **not** used in the mapping below, and it is the reason the
protocol mirror has eight values where the other two have seven.
**(iii) The SDK array is ORDINAL-INDEXED, which makes it the fragile one — latent today, live at
the seam swap.** It decodes a `Governor.State` by **position**, so reordering the Solidity enum
would silently remap every decoded state — a `Defeated` proposal rendering as `Tallying`, with
nothing raising an error because no name is ever compared. **It has zero call sites repo-wide**
(`packages/sdk/src/constants.js:43` is its only occurrence), so nothing is mis-decoding anything
today; it is declared ahead of the consumer. The hazard arms the moment it is wired, which is
exactly when the derivation rule below starts to matter — the rule makes the chain authoritative,
and this array is how the chain's answer would reach the application. _(v2.11.2: stated in the
present tense at v2.11.1, implying a live mis-decode. Correcting the tense, not the concern.)_

**No differential test pins any of the three to another** — `differential.test.mjs` exercises none
of them. Closing that is an engineer/tester obligation recorded in §16 **Q17**, which now names the
ordinal-indexing hazard as the case to write first.

| FR-091 public-process stage | Ballot state | Relationship |
|---|---|---|
| `PROPOSAL` | `Discussion` | the ballot machine has **no pre-discussion state**; it begins here |
| `REVIEW` | `Discussion` | " |
| `DISCUSSION` | `Discussion` | **name collision, not identity** — see the warning below |
| `DEBATE` | `Discussion` | the chain's single pre-vote period spans **all four** |
| `VOTE` | `Voting` | 1:1 |
| `DECISION` | `Tallying` → `Defeated` \| `Timelocked` | one process stage contains the ballot's outcome branch |
| `IMPLEMENTATION` | `Executed` | FR-026's timelock elapses inside `Timelocked`; enactment lands in `Executed` |
| `MEASUREMENT` | *(none)* | the ballot machine has no post-enactment outcome state; FR-092's measured outcome is off-chain |
| *(no stage — and the window does NOT end)* | `Cancelled` | **reachable only during the discussion period**, and it cancels **one proposal**, not the window — see below |

> ⚠ **The `discussion` name collision is the trap in this mapping, and it is worse than a name.**
> ADR-008 §6's pre-vote period (T2: 7 days, T3: 14 days) is a **single** ballot state spanning
> **four** FR-091 stages — `PROPOSAL`, `REVIEW`, `DISCUSSION`, `DEBATE`. An implementer who equates
> the two `discussion`s by name builds a stage machine that silently skips **three** stages.
> _(v2.11.0 correction: v2.10.0 mapped `PROPOSAL` and `REVIEW` to a `DRAFT` state that has no
> producer, and consequently understated its own trap as "skips two". The ballot machine simply has
> no state before `Discussion`.)_

> ⚠ **`Cancelled` is NOT reachable from any pre-execution state.** The only cancellation entrypoint
> is `Governor.cancelDuringDiscussion(...)` (`Governor.sol:397`), whose own contract comment states
> the rule: *"A proposer may withdraw before voting opens, and not after (FR-029)."* Once voting
> opens the proposal runs to an outcome; there is no abort. §5.6 already stated this correctly
> ("proposer withdraws (discussion only)"). _(v2.11.0 correction: v2.10.0's table said "reachable
> from any pre-execution state", contradicting both the contract and §5.6 of this document. §5.6 is
> the reference; this table is aligned to it.)_
>
> **And it cancels ONE PROPOSAL, not the window.** _(v2.11.1: the row read "(none — the window
> ends)", which asserted a window termination on three counts it cannot support — no capability
> implements it (DES-104 deliberately exposes no `closeWindow`), **Q15 routes the question of
> terminal outcomes as OPEN**, and this section's own warning below says nothing enforces
> termination. It also ignored the one-to-many cardinality this section rests on: a window may hold
> several competing proposals, and `cancelDuringDiscussion(proposalId, …)` withdraws exactly one of
> them. The others continue. This was the same defect class as the withdrawn
> "one-`SUCCEEDED_TIMELOCK`-two-`DEFEATED`" illustration two paragraphs above — asserting a
> resolution rule nothing specifies — reintroduced in the correction that removed it.)_

**The seam rule — derivation direction (normative, and it binds in BOTH versions).** The seam
question is not "which taxonomy wins" but "which layer owns each fact":

> **The ballot layer is the sole authority on ballot state.** The citizen-facing FR-091 stages
> `VOTE`, `DECISION` and `IMPLEMENTATION` MUST be **derived** from the state held by whatever
> backing `IBallotService` (DES-096) is bound to, and MUST NOT be tracked independently of it. In
> **v1** that authority is the **database backing** (DES-096: `castBallot` writes, `computeTally`
> aggregates); at the **v2 seam swap** it becomes the **chain** (`Governor.State`). The stages
> `PROPOSAL`, `REVIEW`, `DISCUSSION`, `DEBATE` and `MEASUREMENT` have no ballot-layer counterpart
> and remain owned by the application layer in both versions.

This is what the ruling buys. A "pick one taxonomy" answer would have invited the real failure
mode — **two stored copies of one fact drifting apart**, a window displaying `IMPLEMENTATION` while
the ballot layer says `Defeated`. Derivation makes that unrepresentable rather than merely
discouraged.

> ⚠ **The v1 half of this rule has nothing to derive FROM yet, and that is an owed design change.**
> DES-096's interface (§10.13.3) exposes `castBallot`, `changeBallot`, `computeTally` and
> `getTallyProperties` — **no ballot-state accessor**. A rule requiring `VOTE` / `DECISION` /
> `IMPLEMENTATION` to derive from the ballot layer cannot be satisfied against an interface that
> never reports the ballot's state, so **DES-096 MUST gain a state accessor before the v1 ballot
> layer is built** — otherwise the only way to render those three stages is to track them
> independently, which is exactly what this rule forbids. Recorded here rather than left for the
> implementer to discover at the point of use. _(v2.11.1: added — v2.11.0 extended the rule to v1
> without checking that v1's seam could carry it.)_
>
> _(**v2.11.0 correction — the scope was wrong, in the direction that mattered.** v2.10.0 scoped
> this rule to the v2 seam alone, on the stated ground that "v1 holds no ballot (ADR-024 §(b))".
> That mis-cited: ADR-024 §(b) removes on-chain **execution** in v1 and puts votes in Postgres — it
> does not remove the ballot. **DES-096 (§10.13.3) specifies a v1 ballot backing outright**, with a
> database `castBallot` and a SQL `computeTally`. The rule as first written therefore left the
> drift failure mode unbound at exactly the point where v1 first holds a vote, which is the first
> place it can occur. What IS true, and all that was ever true, is narrower: **the proposals and
> debate layer built in this drop holds no vote** — it stops at `admitToBallot()` and hands off —
> so nothing in the shipped code derives anything yet. The rule is restated above to bind the
> ballot layer in both versions.)_

**Should FR-091's text name the mapping? No.** FR-091 is a requirement about the public process and
is complete as written for that subject. The mapping is a *design* artifact and belongs here.
Binding a requirement to an on-chain enum that ADR-024 has already scheduled to change would be a
step backwards.

**Surfaced by doing the mapping — routed, not ruled (Doc 02 §13 (h), §16 Q15).** FR-091 says no
stage MAY be skipped, but a **defeated** or **cancelled** decision cannot be implemented or
measured: such a window **should terminate at `DECISION`**. Terminating is not skipping — yet
FR-091's text does not say so, so a future implementer could read it as obliging an implementation
stage for a proposal the members rejected. That is a **requirement clarification owed to the
product-owner**, not an architect's call.

> ⚠ **"Terminates at `DECISION`" is a design intention, not a property of the built code.**
> `advanceStage(windowId)` consults no outcome and would advance a defeated window straight on to
> `IMPLEMENTATION`. Nothing today prevents it. This is **not yet a live defect** — the layer built
> in this drop holds no vote, so no window can reach a defeated state to be advanced past — but it
> becomes one the moment the ballot layer lands, and it must be built **together with** that layer
> rather than after it. Recorded here so the phrase is never read as describing today's behaviour.
> _(v2.11.0: added. v2.10.0 asserted the termination as though the machine enforced it.)_

##### (b) Whether PROPOSING is an FR-123 counting action — ✅ NO. The built reading is confirmed

The commissioning brief for this drop stated that proposing, like voting, is a counting action
gated through `IEligibilityVerifier`. **The ruling is that the brief was wrong and this drop was
right to refuse it.** Proposing/authoring is **OPEN participation**: any member, phone-verified, no
government-ID gate, no verifier call. Only **voting** is the FR-123 counting action.

**The decisive reason is FR-020:** gating authorship on verification status is a *participation
restriction*, which FR-020 prohibits absolutely. reviewer-qa reached the same conclusion
independently while reviewing the drop. Three further lines agree — DES-100's `COUNTING_ACTION` is
an approver-ratified three-value allowlist (`STRENGTH_CONTRIBUTION`, `BINDING_VOTE`, `CANDIDACY`,
ratified 2026-08-24) whose seam throws `NotACountingAction` on anything else; FR-024 forbids
pre-screening; and gating authorship would mean an unverified member may join, deliberate and
vote-but-not-count yet may not *speak* by proposing, inverting "verification gates counting, never
participation".

**No amendment follows, and that is the point.** FR-024, FR-090 and DES-100 already say what the
ruling confirms; each carries a confirming annotation and nothing normative changed. Had the ruling
gone the other way it would have required a DES-100 allowlist amendment plus an FR-024/FR-090
amendment — governance work through the SOP, not a code change.

> ⚠ **Read this ruling on the right axis, in both directions.** "Open participation … no ID gate"
> speaks to the **verification** axis (FR-122/FR-123). It does **not** remove the OI-14 requirement
> that an author hold **Worker tier or above** — that sits on the orthogonal **privacy-disclosure**
> axis (Doc 02 §4.41 TWO-AXIS NOTE), is **self-declared** with nobody approving it (FR-080), and
> exists for an **anonymity** reason: authorship is public (FR-090) and a Supporter is anonymous
> unconditionally (FR-082). A future increment that **adds a verifier call to the authoring path
> violates this ruling**; one that **deletes `canAuthorProposal()` misreads it**. Both failure
> modes are guarded by test: UT-0834 (the service holds no verifier and `fileProposal` takes none)
> and UT-0089 / UT-0832 (the authoring rule takes no approver and Worker tier is required).

---

## 11. Situation & failure-mode analysis (per requirement)

| Requirement / DES | Normal | Edge | Failure → behaviour |
|---|---|---|---|
| FR-001 / DES-001 | one credential per human | issuer re-issues after device loss | duplicate `Nᵢ` → recovery flow (FR-071, DES-071), not rejection as duplicate |
| FR-004 / DES-002 | ≥2 issuers per region | one issuer offline | others still serve; **fail closed** if set would drop below 2 |
| FR-005 / DES-003 | issuer honest | issuer compromised | epoch cap throttles; 48 h expedited removal; existing credentials survive |
| FR-006 / DES-005 | resident proves region | credential expired | proof fails `validUntil` → prompt re-attestation |
| FR-009 / DES-007 | 5 sources agree | one corrupt | median absorbs it; > ±5%/quarter → **revert** |
| FR-009 / DES-010 | population known | oracle deflated | verified-resident floor and 500-endorsement floor bind |
| FR-014 / DES-011 | one endorsement each | replay from another address | nullifier already spent → **reject** |
| FR-016 / DES-009 | threshold met → activate | denominator moves mid-petition | requirement frozen at open → unaffected |
| FR-018 | activation automatic | nobody calls `activate()` | permissionless — any citizen, any indexer, any observer can |
| FR-020 / DES-013 | anyone joins | thin region (k < 1000) | refuse to publish; client escalates scope to nearest ancestor region |
| FR-021 | one member, one vote | member leaves mid-vote | snapshot governs; vote stands |
| FR-025 / DES-016 | tier rules apply | charter tries to weaken | **revert** `CharterWeakerThanFloor` |
| FR-026 / DES-021 | timelock elapses → execute | execution call reverts | proposal stays executable; retryable, permissionless |
| FR-027 / DES-022 | entrenched clause needs 90% | proposal targets immutable clause | **revert** at proposal time, not at execution |
| FR-028 / DES-019 | snapshot eligibility | 10 000 accounts join after open | zero effect on this proposal; `AnomalousGrowth` raised for the next |
| FR-030 / DES-023 | ballot encrypted | coordinator member offline | 5-of-7 tolerates 2; below threshold → re-run, **never** a plaintext tally |
| FR-031 | receipt-free | user screenshots confirmation | screen is choice-independent; re-vote remains possible → receipt is worthless |
| FR-032 | last ballot counts | re-vote at deadline | last message in the queue wins; window ≥ 72 h |
| FR-034 / DES-026 | no interim tallies | chain state read directly | **we state plainly: on-chain Phase-1 tallies are observable** — closed by MACI in Phase 3 |
| FR-036 / DES-027 | self-nomination in own region | member moves region | candidacy invalid for new region; term in old one runs to expiry |
| FR-042 / DES-030 | recall in two stages | recall spam | grace window after election + cooldown after failed recall |
| FR-049 / DES-033 | contribution under cap | whale splits into 100 donations | cap is per **nullifier**, not per address |
| FR-053 / DES-034 | fork proceeds | parent tries to block | no blocking function exists; initiators counted on-chain via ZK proofs |
| FR-058 / DES-042 | recovery via guardians | guardians collude | 7-day timelock + owner veto + public notice |
| FR-061 / DES-043 | sponsored action | budget exhausted | **queue with explanation and expected time**; never charge, never deny |
| FR-062 / DES-064 | participation profile viewed | OI-13 unresolved | profile not served until OI-13 resolved at Gate 1 re-affirmation; flag `participation_profile` off above dev |
| FR-064 / DES-065 | member joins party B | party A membership scope nullifier spent | join B burns the global membership-scope nullifier; tenure clock resets to zero |
| FR-065 / DES-066 | candidate receives feedback votes | member attempts second vote on same candidate | per-(election, candidate) scope nullifier already spent → **reject** |
| FR-066 / DES-067 | three debates scheduled per candidate | off-chain content host fails | CID still on-chain; attendance attestation preserved; content is lost unless IPFS/Arweave pin survives |
| FR-067 / DES-067 | candidacy from post-debate vote | incumbent skips debate cycle | no automated candidacy without completed debate cycle; on-chain guard rejects ballot inclusion |
| FR-068 / DES-068 | tenure waiver active (party age < 3 months) | new-member surge during waiver | FR-023 churn limits and FR-028 snapshot remain active — waiver relaxes tenure only |
| FR-069 / DES-069 | nullifier derived and stored | credential expired during enrolment | derivation circuit check 2 fails (`validUntil > blockTimestamp`) → **reject** with reason |
| FR-071 / DES-071 | legitimate recovery via collision | nullifier already exists | → RECOVERY_PENDING; 7-day delay; notification; active-key veto window opens |
| FR-072 / DES-071 | recovery pending | active key submits veto | → RECOVERY_ABORTED; existing key in control; recovery.state = ABORTED on-chain |
| FR-073 / DES-072 | GOV_EID issuer enrols | AVAILABILITY_ONLY issuer calls `enrol()` | → **revert** `NotEnrolmentClass`; no nullifier minted |
| FR-112 / DES-090 | trust-anchor revocation enacted by governance vote | anchor compromised during emergency timelock window (7 days) — attacker enrolls synthetic identities before `anchorEffectiveAt` | `REVOCATION_PENDING` is entered at vote enactment (public on-chain signal); `enrol()` against the affected anchor CONTINUES until `anchorEffectiveAt` (timelock expiry) and reverts `AnchorRevoked` from then on; the window between enactment and `anchorEffectiveAt` is precisely the accepted RISK-30 residual — mitigated by the per-issuer epoch cap (DES-003); accepted residual per §18 SC-13/SC-14 closure entry |
| FR-113 / DES-090 | trust-anchor rotation with overlap window | rotation enacted; old-anchor credentials renewed after `anchorOverlapEnd` | enrol() rejects old-anchor proofs after `anchorOverlapEnd`; the 60-day window (§10.11) is the SLA the issuer must meet; no citizen locked out who renews within the window |
| FR-114 / DES-088 | steward election with quorum | election-capture attempt: surge of new enrolments before the snapshot in order to dilute or capture the steward ballot | growth-surge defence (FR-023/FR-028; DES-015/DES-019) applies to the steward election ballot; snapshot eligibility frozen at `snapshotRoot`; post-snapshot enrolments confer no vote in that election |
| FR-117 / DES-089 | all steward seats vacant | any citizen-facing flow attempted during complete steward vacancy | zero degradation BY CONSTRUCTION — no citizen-path contract imports or calls `StewardRegistry`; enrolment, party creation, voting, proposal submission, and forking all proceed independently of steward liveness; the vacancy simulation test (§14) verifies this |
| FR-118 / DES-087 | Charter Layer (Tier-1) entrenched rule proposal submitted | actor submits a proposal targeting one of the seven entrenched rules with majority support or any governance layer | `ProtocolGovernance.proposeAmendment()` checks `entrenched[ruleId]` at submission and reverts `EntrenchedRule` regardless of layer, quorum, or claimed support; no ballot is opened; the check is pre-execution, not post-tally |
| FR-119 / DES-087 | Guarded Layer (Tier-2) super-process — transient-majority attack | a majority forms transiently and tries to carry a named-absolute change before the fork window is realistically exercisable | defeated by two-vote window separated by 180-day inter-vote gap; a transient majority at first vote must persist through the full window to reach second vote; fork petition (FR-120, FR-053) is exercisable during the 180-day window |
| FR-119 / DES-087 | Guarded Layer (Tier-2) super-process — audit suppression | steward or actor publishes a trivial or incomplete audit ref to open the second vote early | `secondVote()` precondition checks `publishAuditRef` was called AND `block.timestamp >= auditPublishedAt + AUDIT_LEAD_TIME`; the 30-day lead time is enforced in code; publishing a ref does not immediately allow the second vote |
| NFR-014 / DES-041 | normal submission | sequencer censors | L1 force-inclusion; tested in CI |
| RISK-22 / DES-071 | stolen credential; attacker initiates recovery | victim receives notification | victim vetoes via active key (on-chain) within 7-day window → ABORTED |
| RISK-23 / DES-071 | attacker suppresses notification channel | victim cannot see veto alert | independent on-chain veto path available via active key WITHOUT notification channel; complete device + channel compromise is accepted residual |
| RISK-24 / DES-071 | recovery initiated during live ballot | recovering credential attempts to vote | `isInRecovery(nullifier)` check in `vote()` → **reject**; active key still votes normally |
| FR-131(e) / DES-094 _(v2.14.0)_ | `anon` pill mounted on a non-vote participation surface | host screen supplies **no** `anonContext`, or an unrecognised or malformed value | clause 10(c) **fail-honest default** renders — title "Open tier", subtitle "Our own records can link what you do here to your account." — the **claim-least** string, true in all three of clause 8's contexts. The component **MUST NOT infer** the context from route or referrer: a wrong inference produces precisely the clause-(e) breach the default prevents. Same doctrine as clauses 7 and 9 — absence of the selecting input falls back to the weaker claim, never the stronger |
| FR-131(e) / DES-094 _(v2.14.0)_ | `anon` pill rendered on the endorsement surface (screen 2.3) | copy asserts, or a future edit reintroduces, that the act is not made public | petition endorsement is **public by design** (Doc 14 §2.2, "a public act, on purpose"; `private_endorsement` is a Phase-4 charter flag OFF in every v1 deployment), so clause (e) requires the copy to **say so plainly**. Clause 10(b)'s `'endorse'` string does: "Backing a petition is public, on purpose." A "not made public" string on this screen is a clause-(e) breach **in the opposite direction** to the one `OPEN-27` found, and MUST fail Doc 04 §0.5 S5's scan. This is the failure mode that makes a single static `anon` subtitle impossible — see Finding 3 in the §10.12.3 ruling |

**_(v2.14.1 — cycle-1 ISS-04 (Low), the §11 half; the matching note is at §10.12.3.)_** The second of the two **FR-131(e) / DES-094** rows added at v2.14.0 cites **Doc 14 §2.2** for the proposition that petition endorsement is **public by design**. Doc 14 §2.2 is written in the **future tense** — *"When backing ships, **it will be** a public act, on purpose"* — and endorsement is **unshipped in v1**. **The failure mode is unaffected**, and that is the point of recording it: it is a failure mode of a surface that does not exist yet, captured **before** the surface is built, which is the discipline the `ver` title's shipped defect cost this project. The citation should be read as **the posture for when backing ships**, not as a present-tense fact about a live screen. **The present-tense grounds the row actually stands on are design facts:** `private_endorsement` is a **Phase-4 charter flag OFF in every v1 deployment** (Doc 06 v2.8.1 flag ledger; Doc 09 v1.9.0), and clause 10(b)'s `'endorse'` string may render only on a **shipped** screen 2.3 under the five-condition render trigger — so the string and its source become present-tense together.

### Single-point-of-progress sweep — steward powers (FR-115) and steward-touching §5.4 calls

Directive from approver (Rathish, 2026-08-11): sweep all four FR-115 steward powers and all steward-touching §5.4 calls for citizen-entitled process stall risks (SC-15 consequence sweep). A power is a concern ONLY when its absence or inaction can prevent a citizen from exercising a right they are entitled to by a FR/NFR. Transparency obligations and administrative functions are noted but are not citizen-process blockers.

| Power / Call | Citizen-entitled process at risk? | Risk before fix | Fix applied |
|---|---|---|---|
| publishAuditRef (FR-115; §5.4) — steward publishes the audit reference required before the Guarded Layer second vote | YES | Steward inaction or vacancy could stall the second vote and hence any Guarded Layer amendment indefinitely | DES-092 (SC-17): after STEWARD_INACTION_WINDOW (60 days from firstVoteClosedAt) ANY enrolled citizen may call publishAuditRef(); steward vacancy triggers the fallback immediately with no window; audit substance unchanged |
| Issuer-onboarding coordination trigger (FR-115; §5.4) — steward performs the coordination step that initiates issuer onboarding into the trust list | YES | Steward inaction could delay or block the ability of a region's citizens to use a new legitimate issuer for enrolment | DES-092 (SC-19): same 60-day citizen-fallback pattern; any enrolled citizen may trigger the coordination step after the window; vacancy triggers immediately |
| Fund custody / treasury operations (FR-115) — stewards administer the platform treasury | NO | Treasury spend or release is a steward-delegated administrative function; no citizen is entitled to require a specific treasury disbursement; enrolment, voting, party creation, forking, and all citizen-facing flows are independent of treasury operations | N/A — not a citizen-process blocker; zero-dependency property (FR-117, DES-089) verified by vacancy simulation test (§14) |
| Operational reports (FR-115(d) / NFR-019) — stewards publish platform transparency reports | NO | A missing report delays public information but blocks no citizen transaction, vote, or enrolment; the reporting obligation is transparency-only | N/A — reputational only; addressed by Doc 11 SLO monitoring |
| electSteward (§5.4) — initiates a steward election | NO — citizen-initiated | Any enrolled citizen or coalition meeting the petition bar may trigger an election; the outgoing steward cannot block their own replacement ballot | N/A — citizen-initiated; steward absence accelerates, not blocks |
| recallSteward (§5.4) — initiates a steward recall ballot | NO — citizen-initiated | Any enrolled citizen coalition meeting the 20% affirmative quorum bar may trigger a recall; the steward cannot veto the ballot | N/A — citizen-initiated |

**Sweep verdict:** two citizen-entitled stall risks found and fixed (publishAuditRef, issuer-onboarding coordination). The remaining four powers are either citizen-initiated (elections, recall) or non-blocking transparency/administrative functions. No further single-point-of-progress risk remains in the steward layer after DES-092 (SC-17 + SC-19).

## 12. Architecture Decision Records

Full records in `docs/adr/`. Status of all twenty-five ADRs: **Accepted**.

| ADR | Decision | Chief consequence accepted |
|---|---|---|
| 001 | OP Stack L2 (Base); sovereign rollup deferred to Phase 4 | sequencer liveness/ordering trust; mitigated by force-inclusion |
| 002 | ERC-4337 + passkeys + social recovery; no platform key | passkey vendor dependency; mitigated by multi-device, hardware keys, recovery |
| 003 | Issuer-agnostic personhood, 1-of-N, tiered, scope-bound nullifiers; **amended by ADR-016 for Phase 1** | Sybil resistance equals weakest accepted issuer; Phase-1 class restriction per ADR-016 |
| 004 | Hierarchical regions, per-region credential trees, median population oracle with floors | attesters learn a region request; boundary redraws are a governance surface |
| 005 | Circom + Groth16 on bn254, Poseidon LeanIMT; **amended 2026-08-21 (REC-1: Decision-2 "≥ 500 contributors" convention superseded — contributor count now set by assurance-based sizing per ADR-022; ceremony transparency/transcripts/beacon unchanged — DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md)** | trusted setup exists — failure mode is forgery, **not** deanonymisation |
| 006 | MACI + 5-of-7 threshold coordinator | large engineering cost; tally latency; committee liveness dependency |
| 007 | No transferable power; 1p1v; capped, influence-free treasury | no token-funded growth; 1p1v makes personhood load-bearing |
| 008 | Tiers, snapshots, adaptive quorum, entrenchment, fork rights | tenure gates constitutional votes for new members; forks can fragment movements |
| 009 | Commitments on-chain, content on IPFS + Arweave, nothing personal anywhere | permanence cuts both ways; illegal content cannot be deleted, only filtered |
| 010 | Immutable core, timelocked registries, guaranteed exit, no pause | a core bug is unfixable in place — mitigated by size, audits, rehearsed migration |
| 011 | Monorepo with CI-enforced dependency direction | CI cost; needs the guard, not a convention |
| 012 | Local-first PWA, on-device proving, reproducible bundle | browser sandbox is weaker than native; proving heavy on low-end devices |
| 013 | Parties not elections; erasure by non-collection; powerlessness by design | "you can't stop bad actors" is a permanent, accepted criticism |
| 014 | Non-authoritative indexer, replaceable relayer, Sybil-resistant sponsorship | our own services become a convenience monoculture unless diversity is funded |
| 015 | Asymmetric candidate feedback (upvote +3, downvote −1; 25% approval floor) | critics note scoring flatters incumbents; asymmetry is the deliberate risk accepted to protect downvoters (ADR-015) |
| 016 | Government eID sole enrolment-nullifier class per region (Phase 1); amends ADR-003; **amended 2026-08-20 (Phase-1 pilot rail named: India/Aadhaar offline KYC; OI-04-PILOT closed — ADR-021)**; **amended 2026-08-20 (OI-20 CLOSED: FR-004 satisfied at architecture level; Phase-1 single-rail is dated deployment limitation, exit Phase 2/eIDAS 2.0; 50% cap inoperative Phase-1 duration; permanence requires Charter-layer re-entry — FR-129)** | accepted exclusion: no-doc citizens cannot enrol Phase 1; state compulsion risk concentrated (ADR-016) |
| 017 | Deterministic in-circuit nullifier derivation + pluggable credential adapter interface; **amended by ADR-020 (post-registration lifecycle)**; **amended 2026-08-20 (Phase-1 first-production adapter named: India/Aadhaar offline KYC, class (c); OI-04-PILOT closed — ADR-021)** | per-class circuit development cost; trust-list freshness operational dependency (ADR-017) |
| 018 | Nullifier-collision recovery: 7-day delay, active-key veto, voting bar | complete device + channel compromise is accepted residual (ADR-018) |
| 019 | Three-layer amendment boundary: Charter Layer (Tier-1) — seven entrenched rules fork-only; Guarded Layer (Tier-2) — named absolutes via five-property super-process (80%/25%, 180-day window, audit); Open Layer (Tier-3) — ordinary citizen vote; **amended 2026-08-11 (SC-17: citizen-inaction fallback for publishAuditRef)** | a sustained 80%/25% supermajority over 180+ days CAN weaken a named absolute — by design; fork right is the residual protection (ADR-019) |
| 020 | Trust-anchor lifecycle: rotation via 60-day dual-anchor overlap (SC-14 closed); revocation ordinary 30-day / emergency 7-day timelock (SC-13 closed); both enacted only by passed governance vote via Governor.execute(); **amended 2026-08-11 (SC-18: ROTATION_PENDING abort path — ROTATION_ABORTED state added)** | 7-day emergency window remains a Sybil window — RISK-30 accepted; epoch cap bounds blast radius (ADR-020) |
| 021 | Verification gates COUNTING, never joining; on-device nullifier-only identity posture; pilot sequence (Phase 1: India/Aadhaar offline KYC; Phase 2: EU/eIDAS 2.0; Phase 3: USA deferred); subpoena test as design invariant; two rejected designs recorded — persistent referral graph and encrypted identity registry (2026-08-20, directed by Rathish; DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decisions 1–4); **amended 2026-08-20 (OI-19 CLOSED: FR-125 finalised, non-invite fallback mandatory, FR-020 unamended; OI-20 CLOSED: FR-004 satisfied at architecture level, Phase-1 dated limitation, Charter-layer guard FR-129)** | CON-015 Gate-2 legal-opinion dependency; OI-19 and OI-20 both CLOSED 2026-08-20 (DECISIONS-2026-08-20-OI19-OI20.md); open-tier account farms accepted (zero counted impact) |
| 022 | Groth16 stays for Phase 1; near-irreversible Charter-adjacent commitment; PPoT Hermez reused at ~$0 for phase-1 setup; assurance-based per-circuit phase-2 (not convention count); Gate-2 six-circuit transcript set batchable into a campaign of days; accepted trade-off over universal-setup; revisit trigger: Phase 2+ circuit-count dominance; NFR-009 (two independent audits before Gate 2) unchanged (2026-08-21, directed by Rathish; DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md REC-2) | per-circuit phase-2 cost grows with circuit count — growth is the revisit trigger; migration is a verifier swap by design (`IProofVerifier` seam) but a full re-audit in practice |
| 023 | Design system token set (DES-093) + privacy-status signature element (DES-094) adopted as the normative foundation for `packages/ui`; territory rule (navy = public-party / paper = private-user) is normative; PrivacyStatus component's normative privacy binding enforces FR-124 at component level; four wireframe conflicts recorded (§10.12.6) as engineer and PO disposition guidance; ADR-011 packages/ui designation is now concretely specified (2026-08-22, directed by Rathish; design/wireframes/index.html) | Fraunces font bundle risk: engineer must verify 15 MB install floor and self-host (Google Fonts CDN blocked by CSP); token values are specific hex, not a semantic system — any brand change is a DES amendment; three open conflicts (C-01 adapter-driven strings; C-02 unbacked 100-member cap; C-03 missing finance ledger screen) require PO/engineer action before build |
| 024 | v1/v2 delivery-architecture split: IEligibilityVerifier seam (DES-095) and IBallotService seam (DES-096) as the stable abstraction boundary between conventional-auth v1 and ZK/MACI v2; v1 stack = blockchain as audit-record only (not full on-chain governance); v1 package disposition; honesty notice DES-098; Charter-layer conflict table T-01..T-05 for approver's decision (2026-08-23, directed by Rathish); **amended 2026-08-23 (Ruling 3 RATIFIED: blockchain-as-audit-record stack recommendation confirmed by approver; §(b)/DES-097 ratification note added)**; **amended 2026-08-24 (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md): verifyEligibility MUST be invoked at FR-123 COUNTING-action call sites; MUST NOT be called as a precondition of account creation or party-join; call-site placement is identical in v1 and v2; invariants table updated; v1 "live session" backing description disambiguated; [AMENDMENT 2026-08-24] block added — see ADR-024** | Migration cost accepted: v1→v2 migrates identity and ballot backings; application logic, design system, and package topology above the seams are unchanged; Charter-layer tensions T-01..T-07 require approver decision (§10.13.7, ADR-024 §(c), ADR-025 §(d)) before v1 implementation begins |
| 025 | v1 identity backing: phone-based SMS verification (one account per verified phone number; FR-132; spam speed-bump NOT personhood proof; v1 MUST NOT claim one-person-one-vote); DES-099 spam-resistance layer (phone-intelligence VoIP/virtual-number detection + velocity/device anti-fraud; flag-don't-block; first-class false-positive path; FR-133); T-06 and T-07 conflict-table extensions for approver's decision (2026-08-23, directed by Rathish, Rulings 1–2); **amended 2026-08-23 (§(e) added: government-ID document check alongside phone SMS; verify-and-discard retention rule — keep result, discard source; phone stored HMAC-SHA-256/KMS-pepper; subject_id_hash same-document deduplication; Q-1/Q-2/Q-3 architect answers; FR-004 plurality question resolved — single-vendor is Phase-1 dated limitation, T-08 minted; CON-015 now critical-path; consequences (c-i)/(c-ii) reshaped, (c-vii) added; T-06 improved but open; T-07 reshaped); amended 2026-08-24 (government-ID check gates COUNTING, never joining — approver Rathish, DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md): §(c-viii) heading and body rewritten — exclusion is from COUNTING-tier eligibility (FR-123), not from the platform; open-tier access (FR-122) available with phone verification alone; §(c-vi) phone-exclusion unchanged with clarifying sentence distinguishing the two exclusions; §(d) T-06 updated to ACCEPTED — DEFERRED WITH DISCLOSURE (approver, 2026-08-24); T-07 reaffirmed PENDING CON-015 unchanged; [AMENDMENT 2026-08-24] block added recording ruling, seam call-site placement, and v1/v2 participation-model mirror** | Multi-phone multi-account Sybil ceiling improved by ID check but not closed (c-i amended); retained surface is phone_hash + subject_id_hash + flags — restricted-class credential store only; no PII fields stored (c-ii amended, T-07 reshaped); three third-party vendor dependencies with privacy residuals — SMS provider, phone-intelligence API, ID-verification provider (c-iii, c-vii); SIM-swap/number-recycling attacks exist (c-iv); SMS cost must fit NFR-005 (c-v); no-phone exclusion (no account) is separate from no-ID exclusion (no COUNTING actions) — two distinct residuals, both disclosed (c-vi, c-viii amended); single-vendor ID-check concentration risk as dated Phase-1 limitation (T-08) |

## 13. Risks & technical debt

The **living risk register of record is Doc 13 §6**; RISK-01..RISK-24 are owned there and are
not duplicated here. Architectural debt carried knowingly:

| Debt | Why now | Repayment | Severity |
|---|---|---|---|
| Mock verifiers in Phase 1 | circuits depend on ceremonies (Phase 2) | replaced at Phase 2; a mock in a promoted environment fails CI today | Medium (blocked by CI) |
| Public tallies in Phase 1 | MACI is a Phase-3 deliverable | MACI flag; the client MUST state plainly, **per FR-131 / DES-098 (§10.13.6)**, that a Phase-1 (v1) vote is cast through conventional authentication and is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**; that the platform database **CAN** see vote direction and party membership; and that the cryptographic private ballot — where the platform is technically unable to see either — arrives with the Definition-B (v2) privacy layer. _(v2.12.0: this cell read "client MUST state plainly that Phase-1 votes are anonymous but not receipt-free" — a claim **FR-131 forbids** and the v1 build does not make. Corrected per Doc 09 v1.3.0 `REL-LIM-18`; approver 2026-09-05. **ADR-024 §(d) quotes the retired wording** as the precedent pattern for DES-098; that quotation is historical and is not the rule — ADRs are decision records and are not edited here.)_ | Medium (disclosed) |
| Growth-sample array O(n²) scan in `Party` | 512 samples × state-changing path = liveness ceiling, not just a cost: joins become impossible at the cap | move to ring buffer (DES-015 ref) before mainnet scale | **High — liveness blocker at cap** |
| No Elections/Recall/Treasury contracts yet | Phase-3 scope, flags off | built behind their flags | Medium |
| Region path stored as a string on-chain | readability for auditors | acceptable; measured, small | Low |
| Participation profile (DES-064) off above dev | OI-13 unresolved | ship after Gate 1 re-affirmation resolves OI-13 | Open (governance) |
| Fork feature flag off above dev | calldata vulnerability deferred at Gate 1 (FORK-CRIT) | design now finalised in DES-034; engineering fix required before flag is enabled | **High — security blocker** |
| ~~FR-077 and FR-130 have shipped code but no DES~~ | ~~C-02 closure recorded the cap as a build obligation and left the design link unwritten; FR-077's link was never written~~ | **PAID DOWN v2.8.0** — DES-101 (§10.13.10) and DES-102 (§10.13.11) written; both RTM chain gaps closed at the design layer. FR-130's row then CLOSED (Doc 08 v2.4.0); FR-077's did not — see the row below | Closed |
| **`Party.amendCharter` can strip the non-violence clause** — it takes `(clauseId, hash, CID)`, never the charter text, and replaces the whole document hash, so an amendment naming any unrelated clause installs a charter without the CON-013 clause; entrenchment does not help, because the immutable set is a founding-time party choice and the blob is replaced wholesale | found 2026-08-29 while completing DES-101 for FR-077's amendment half; the publication gate was designed and the amendment gate was not | **Designed v2.8.2** (§10.13.10.1). **APPROVER RULING 2026-08-29 (Rathish; artifacts/status/DECISIONS-2026-08-29-NONVIOLENCE-ENTRENCHMENT.md): this fix is its OWN tracked work item — `PREREQ-01` — and is NOT folded into the on-chain governance increment.** It is a **BLOCKING PREREQUISITE**: the on-chain governance increment MUST NOT ship until the charter-as-clause-map refactor, the platform-immutable non-violence `clauseId`, and amendments-carry-their-text are built AND DES-101 §10.13.10.1 rule 6's adversarial test passes. Closing evidence is that test — the one that fails against today's code. Rationale (approver): CON-013 makes the clause a condition of a party's existence, so its protection must be a hard gate, not a line item that can slip under sprint pressure. Confirmed NOT exploitable in v1 (no on-chain governance path, ADR-024 §(b)) — **does not block any v1 work** | **High — `PREREQ-01`, ruled blocking prerequisite for the on-chain governance increment** |
| v1 party/membership store is in-memory (`IS_INSECURE_MOCK = true`) | production Postgres backing not built; blocked past devnet by the CI gate | **Design complete v2.8.0** — DES-097(b) (§10.13.12) specifies the mapping, constraints, retention boundary and promotion condition; the build remains owed, and §6's CON-015 answers gate promotion | Medium (blocked by CI) |
| **DES-096 exposes no ballot-state accessor, so the v1 half of the derivation rule has nothing to derive FROM** — its interface (§10.13.3) is `castBallot`, `changeBallot`, `computeTally`, `getTallyProperties` and no more | §10.13.13(a) makes the ballot layer authoritative over the FR-091 `VOTE`/`DECISION`/`IMPLEMENTATION` stages in **both** versions; that rule is unsatisfiable against an interface which never reports the ballot's state, and the only way to render those stages without one is to track them independently — precisely what the rule forbids. Recorded at v2.11.1 in §10.13.13(a) prose only; entered here at v2.11.2 so it is **owned and tracked** rather than discoverable only by the implementer who hits it | **DES-096 MUST gain a ballot-state accessor before the v1 ballot layer is built.** Not urgent today — the proposals layer derives nothing, stopping at `admitToBallot()` — and it blocks no current work | Medium — **Ravi Deshmukh (architect)**; owed before the v1 ballot layer |
| FR-130 cap is application-enforced in v1 | v1 has no on-chain membership (ADR-024 §(b)); the application boundary is the only enforcement point that exists | audit-record publication makes an over-cap party **detectable** today (DES-102 rule 8); the on-chain guard in `Party.join()` (DES-102 rule 7) makes it **impossible** at the v2 increment | Medium (disclosed) |

## 14. Test hooks designed in

- `@trumocracy/protocol` is a dependency-free reference implementation for differential testing.
- Deterministic in-process EVM harness (solc-js + EthereumJS): no RPC, no downloads.
- `MockVerifier.IS_INSECURE_MOCK()` exists so the deployment-safety test can detect it.
- Every governance action emits an event, making the system replayable from chain data.
- `Chain.warp()` for time-dependent governance; snapshots for adversarial branch testing.
- Capability-absence assertions over ABIs and deployed bytecode (DES-075, DES-077, DES-080, DES-086).
- `snapshotRoot` binding in `vote()` must be tested with an adversarial tree root (ISS-C1 fix).
- `isInRecovery` gate in `vote()` must be tested with a recovery-pending nullifier.
- **FR-117 capability-absence suite (DES-089):** (a) *static* — `tools/dep-guard` asserts that no citizen-path module (`packages/contracts` core, `packages/sdk`, `apps/web`) imports or references `StewardRegistry`; the ABI allowlist snapshot includes no `StewardRegistry` selector in any citizen-path entrypoint; (b) *dynamic* — the vacancy simulation runs the full citizen E2E suite (enrol, join, endorse, vote, propose, fork-petition) with every steward seat in `StewardRegistry` explicitly set to vacant; every flow MUST complete without error; zero degradation is the pass criterion.
- **Guarded Layer super-process property tests (DES-087):** Six tests corresponding to the five OI-18 properties (Property 3 and Property 5 each have two sub-cases) plus the additional quorum requirement; `enact()` MUST revert in each case. Property numbering matches ADR-019 and OI-18: (P1-supermajority) firstVote cast at 75% approval — enact() MUST revert `SupermajorityNotMet`; (P2-window) enact() called before `windowEnd` — MUST revert `WindowNotElapsed`; (P3-two-votes-a) enact() called before firstVote closes — MUST revert `VoteNotComplete`; (P3-two-votes-b) enact() called with secondVote not yet closed — MUST revert `VoteNotComplete`; (P4-growth-surge) snapshot committed at `proposeAmendment()` — (a) membership join/enrolment post-snapshot MUST NOT affect vote eligibility at firstVote or secondVote, (b) attempt to update `snapshotRoot` between firstVote and secondVote MUST revert `SnapshotImmutable`, (c) churn-limit check enforced during the entire inter-vote window — `enact()` MUST revert if churn limits were violated at any point; (P5-audit-a) enact() called with no audit ref published — MUST revert `AuditNotPublished`; (P5-audit-b) enact() called with audit published but `auditPublishedAt + AUDIT_LEAD_TIME > block.timestamp` — MUST revert `AuditLeadTimeNotSatisfied`. Each test confirms the specific revert reason from the `ProtocolGovernance` state machine.

## 15. Traceability

Maintained in the RTM (Doc 08). Every `FR/NFR` traces up to a `BR` and down to a `DES`, a
`US` and a `TC`. §5.2 provides the `FR/NFR → DES` half; Doc 05 provides `FR → US`; Doc 07
provides `US → TC`. **This is a forward-looking statement**: Doc 08 v1.0.0 recorded 54 open
Must rows; the DES additions in v1.1.0 close the 15 tester-identified DES-gap rows immediately
(FR-010, FR-011, FR-035, FR-039, FR-056, FR-060, NFR-006, NFR-009, NFR-010, NFR-011, NFR-012,
NFR-013, NFR-015, NFR-023, NFR-024) once the tester updates Doc 08. The remaining gaps are
pre-existing Phase-3, environment, external, or mechanism gaps per Doc 08 §gap-by-reason.

**v2.0.0 FR/NFR → DES additions (FR-112..FR-120):**

| Requirement | DES | Notes |
|---|---|---|
| FR-112 (trust-anchor revocation; member-vote only) | DES-090 (TrustAnchorLifecycle) | Ordinary + expedited emergency revocation paths; code-only enactment via `Governor.execute()`; normative design in ADR-020 |
| FR-113 (trust-anchor rotation; overlap window) | DES-090 (TrustAnchorLifecycle) | 60-day dual-anchor overlap window; enrol() accepts old OR new during window; normative design in ADR-020 |
| FR-114 (steward election; fixed terms; affirmative-quorum recall) | DES-088 (StewardRegistry) | Platform-scoped ballot; term record; recall with growth-surge defence |
| FR-115 (steward powers enumerated; unlisted action refused) | DES-089 (StewardPowers boundary) | ABI allowlist; four enumerated powers; CI assertion |
| FR-116 (stewards propose; citizens decide; no override) | DES-089 (StewardPowers boundary); DES-087 (ProtocolGovernance) | StewardRegistry has no enact path; only `Governor.execute()` can change protocol state |
| FR-117 (zero steward dependency; vacancy causes zero degradation) | DES-089 (StewardPowers boundary) | No citizen-path contract references StewardRegistry BY CONSTRUCTION; vacancy simulation test (§14) |
| FR-118 (seven entrenched rules; code rejection at submission) | DES-087 (ProtocolGovernance) | `entrenched` registry checked at `proposeAmendment()`; reverts `EntrenchedRule`; normative design in ADR-019 |
| FR-119 (three-layer amendment structure; Guarded Layer / Tier-2 super-process) | DES-087 (ProtocolGovernance); DES-091 (GovernanceConstants) | Five-property state machine; constants from §10.11; normative design in ADR-019 |
| FR-120 (unconditional fork right; fork flag off above dev) | DES-034 (fork with lineage) | Existing DES; no steward can block; fork flag status unchanged |

**v2.8.0 v1 design-debt paydown (2026-08-29):**

| Requirement | DES | Notes |
|---|---|---|
| FR-077 (non-violence clause verified by code; publication refused if absent or altered **and at every subsequent amendment**) | **DES-101** (§10.13.10 + §10.13.10.1) | ~~v2.8.0 assessment: "all four completion rules are satisfiable… the status call is the tester's."~~ **CORRECTED v2.8.2 — that assessment was wrong.** It read FR-077 as the publication gate alone and missed the requirement's second clause. The tester's rule-4 check (Doc 08 v2.4.0) found that amendment-time verification is gated **nowhere at either tier**, and was undesigned. §10.13.10.1 now designs it (clause-map charter, platform-immutable clauseId, amendments carrying their text, adversarial-amendment test obligation). **FR-077 stays OPEN — reclassified G-TRACE → G-NOMECH.** The DES link is closed; the mechanism gap is now designed but unbuilt. Publication half remains fully tested (UT-0071..0075, UT-0786, UT-0849..0851). SCR binding added: SCR-04, SCR-05. The correction is recorded here rather than rewritten away: a DES that overstates what it covers is the failure mode this document exists to prevent |
| FR-130 (provisional cap 100 until verified legal registration; code-only lift; no operator path) | **DES-102** (§10.13.11) | Closes the chain gap and specifies both enforcement points (v1 application boundary; v2 `Party.join()`). SCR binding added: SCR-09, SCR-11. Implementation shipped and passes (UT-0802..0811, UT-0825, UT-0852..0856, UT-0862; TC-3511..3516, TC-3528, TC-3529). Architect's assessment: rules 1–3 are satisfied; **rule 4 is a judgement the tester owns** — the cap, the code-only lift and the absence of a bypass are all tested, but in v1 the invariant is application-enforced with audit-record tamper-evidence rather than chain-enforced tamper-prevention (DES-102 rule 8 and the recorded residual). This element does not assert the row closes; it removes the reason it could not |
| FR-010 (production-persistent store), and every row whose gap reads "production store pending DES-097" | **DES-097(b)** (§10.13.12) | **Enables a build; closes no row.** Specifies the IPartyStore→Postgres mapping, the append-only membership log as the authoritative record, the concurrency re-expression of invariants the in-memory store gets from single-threading, the retention boundary (composing with DES-100 — no raw identity), and the `IS_INSECURE_MOCK = false` promotion condition. Retention duration, erasure handling and hash classification are **PENDING CON-015** and deliberately unspecified |

**v2.2.0 design-system additions (§10.12, 2026-08-22):**

| Requirement | DES | Notes |
|---|---|---|
| FR-082..086 (three-tier privacy), FR-124 (verified-status privacy, v2.3.1 ruling), NFR-001, NFR-002, NFR-011, NFR-013 | DES-093 (design token set) | 16 colour tokens + 2 typefaces + territory rule; normative foundation for `packages/ui/tokens.css`; ADR-023. US layer: owed — in the FR-121..FR-129 next-increment and in the design-debt items (§10.12.5). |
| FR-082..086, FR-124, NFR-001, NFR-002, NFR-024 | DES-094 (privacy-status component) | Three states (anon / ver / pub); normative FR-124 privacy binding (self-view only; no Supporter badge; absence-test obligation); normative for `packages/ui/PrivacyStatus`; ADR-023. US layer: owed — no US yet; the component underpins every flow that shows a privacy state, which spans US-0001..US-0130 range once built. Leak-check PASS recorded (§10.12.3). |

**v2.3.0 v1/v2 split additions (§10.13, 2026-08-23):**

| Requirement | DES | Notes |
|---|---|---|
| BR-006, BR-009, FR-030..035, FR-069, FR-070, FR-082..086, FR-106..108, FR-121..129, NFR-001..004, NFR-009, NFR-027, CON-002, CON-008, CON-012, CON-013 | DES-095 (IEligibilityVerifier seam) | Design-level interface decoupling the application from the identity/personhood proof mechanism; v1 backing: conventional DB auth; v2 backing: `ICredentialAdapter` → `PersonhoodRegistry` (ADR-017); IS_INSECURE_MOCK() = false in both honest backings; ADR-024. US layer: owed — PO to derive US from this design element. |
| BR-011, FR-030..035, FR-082..086, NFR-001..004, NFR-009 | DES-096 (IBallotService seam) | Design-level interface decoupling the application from the ballot-casting and tally mechanism; v1 backing: conventional DB write + audit chain log; v2 backing: MACI + 5-of-7 DKG + ZK tally proof (ADR-006, DES-023..025); `IProofVerifier` seam (ADR-022) is the upgrade path at the tally-proof layer; ADR-024. US layer: owed — flows through existing US once backings are wired. |
| FR-108 (blockchain as trust layer not database), CON-012, CON-013 | DES-097 (v1 conventional-auth stack and package disposition) | Blockchain as audit-record only in v1; `packages/contracts` audit subset deployed; `packages/circuits` / `apps/verifier` untouched for v2; `packages/protocol` as-is; disposition table in §10.13.5; ADR-024 §(b). US layer: no new US — package disposition is a build-time decision, not a story-level deliverable. |
| FR-131 (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009) | DES-098 (v1 honesty notice) | Non-dismissable plain-language notice on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation); MUST NOT use "private", "anonymous", "receipt-free" **or "secure"** to describe v1 voting — all four words, per FR-131's closing sentence _(v2.12.0: this cell listed three of the four)_; the ban reaches voting-adjacent **status** copy as well as notice text (§10.12.3 clauses 7 and 9 — "private" on a status badge only against `unlinkable === true`, and clause `anon` disposition for "Anonymous"); ADR-024 §(d); WCAG 2.2 AA (DES-081). **US layer: `US-0134` EXISTS** (EP-06 ▸ FE-058; Doc 05 v2.5.0, Approved) and covers the SCR-13/SCR-14 notice surface; `TC-3481` is written against SCR-13/SCR-14 and is **Blocked pending those screens, not absent**. Residue — named, rather than asserted as an unminted US: US-0134's **Definition of Done is not met** (its FR-131 RTM row is OPEN — see the v2.12.0 sub-table below), and the DES-098 **acknowledge-to-proceed control is still unbuilt**. _(v2.13.0, cycle-1 ISS-02: this cell closed "US layer: owed — PO to mint US from FR-131 covering the SCR-13/SCR-14 notice surface" — false; US-0134 has carried the row since Doc 08 v2.2.0, 2026-08-25. The rest of the cell was edited at v2.12.0 and this sentence was left standing: the "fixes stopped at the section boundary" pattern this document's v2.11.1 changelog records as the lesson of that cycle, recurring inside an open cell.)_ |

_(v2.14.0 footnote to the FR-131 → DES-098 row above, added rather than editing the cell, per annotate-don't-delete: the row's parenthetical "(§10.12.3 clauses 7 and 9 — 'private' on a status badge only against `unlinkable === true`, and clause `anon` disposition for 'Anonymous')" remains accurate as to **clauses 7 and 9**, which are untouched. The **`anon` half is superseded**: on `OPEN-27`, §10.12.3 **v2.14.0** rules the `anon` title "Anonymous" and the `anon` subtitle "Nothing you do here is linked to you" **NOT COMPLIANT in Definition-A (v1)** against **FR-131 clause (e)** (Doc 02 v2.17.3 §4.45; §8 Scenarios 8 and 9), and specifies the v1 variants at the new **clause 10** — context-selected over clause 8's three contexts, with a fail-honest default. **This changes no US/TC/RTM claim in the row above**, and no `US`, `TC` or `UT` is minted, renumbered or reused by v2.14.0; the DES assignment for FR-131 stated in that row — DES-098 primary, **DES-094 for the status-badge reach**, DES-096 retained as the ballot seam — is unchanged, and is if anything more firmly DES-094's than when it was written. Implementation and its guard are owed and are tracked as `OPEN-28` in Doc 04 §13, with the five-condition render trigger recorded in §10.12.3.)_

**v2.4.0 v1 phone-auth + spam-resistance additions (§10.13, 2026-08-23):**

| Requirement | DES | Notes |
|---|---|---|
| FR-132 (v1 phone-based authentication; Must; owner Marcus Adeyemi; traces BR-006/BR-012; Doc 02 v2.8.0) | DES-095 amended (IEligibilityVerifier seam — v1 backing named) | v1 backing of IEligibilityVerifier now specified: phone-verified account, one per SMS-verified phone number; seam interface and method signatures unchanged; v1 MUST NOT claim one-person-one-vote; IS_INSECURE_MOCK() = false; ADR-025 §(a). US layer: owed — PO to derive US from FR-132 at next catch-up. |
| FR-133 (v1 spam-resistance layer — flag-don't-block; Must; owner Rafael Duarte; traces BR-012/BR-003; Doc 02 v2.8.0) | DES-099 (v1 spam-resistance layer) | Phone-intelligence VoIP/virtual-number detection + velocity/device anti-fraud; flag-don't-block semantics (FR-061 degrade-never-deny; FR-125/OI-19 rate-limiter-never-admission-condition; FR-020 absolute); false-positive dispute path mandatory; flag data restricted-class (not on public record, not in governance-path stores); ADR-025 §(b). US layer: owed — PO to derive US from FR-133 at next catch-up. |

**v2.5.0 ID-verification ruling additions (§10.13, 2026-08-23):**

| Requirement | DES | Notes |
|---|---|---|
| FR-132 (amended by ruling 2026-08-23: government-ID document check co-required alongside phone SMS; verify-and-discard retention rule; MUST NOT claim unique personhood; Must; owner Marcus Adeyemi; traces BR-006/BR-012; Doc 02 v2.10.0) | DES-095 amended (amendment 2 — v1 backing updated: verifyEligibility now includes document check + verify-and-discard + phone_hash + subject_id_hash in restricted-class credential store; DES-100) | Second amendment to DES-095 in this session: v1 IEligibilityVerifier v1 backing now includes government-ID document check; stored fields named per DES-100 allowlist; MUST NOT claim one-person-one-vote; MUST NOT claim unique personhood — check confirms real person, not unique person; ADR-025 §(e). US layer: owed — PO to amend US derived from FR-132 at v2.11.0 catch-up. |
| FR-003 (PARTIAL — reshaped: phone_hash + subject_id_hash + flags retained; document/name/DOB/images DISCARDED; CON-015 governs legal classification; Must for v2 — eliminated by ZK construction; Must; owner Dr. Lena Kowalczyk; Doc 02 v2.10.0) | DES-100 (v1 ID-document verification and retention model) | Allowlist: id_verified_flag, age_verified, issuing_region, subject_id_hash (HMAC-SHA-256/KMS-pepper), phone_hash (HMAC-SHA-256/KMS-pepper), verified_at — restricted-class credential store only; denylist: document images, biometric templates, name, DOB, document_number, expiry_date; HMAC brute-force residual documented; CON-015 legal-review routing table; T-06 improved/T-07 reshaped; ADR-025 §(e) Q-1/Q-2/Q-3. US layer: owed — PO to derive US from FR-132 amended covering the ID-verification enrolment flow. |
| NFR-016 (data-at-rest posture for identity-derived fields; Must; owner Dr. Lena Kowalczyk; traces BR-006/BR-009; Doc 02 v2.10.0), CON-015 (India/Aadhaar legal opinion — now critical-path for government-ID check), CON-008 (no identity data in governance records) | DES-100 (v1 ID-document verification and retention model) | NFR-016 and CON-015 now trace directly to DES-100: HMAC/KMS posture satisfies NFR-016; CON-015 governs the legal questions that DES-100 cannot answer (see Q-3 routing table in §10.13.9). US layer: per FR-132 US above. |

**v2.6.x amendment trace rows (§10.13, 2026-08-24):**

| Requirement | DES | Notes |
|---|---|---|
| FR-020 (absolute join right — unchanged), FR-122 (open-tier access with phone verification alone), FR-123 (COUNTING actions: strength-number contribution, binding-ballot admission, candidacy nomination) | DES-095 amended (amendment 3 — call-site placement: verifyEligibility MUST be invoked at the three FR-123 COUNTING-action call sites; MUST NOT be called as a precondition of account creation or party-join; placement is identical for v1 conventional backing and v2 ZK backing; seam invariants table updated; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md; ADR-024 [AMENDMENT 2026-08-24]) | Third amendment to DES-095 this session: the 2026-08-24 ruling establishes that the ID check gates COUNTING, never joining; call-site placement is the architectural expression of this rule; normative constraint applies to both backings equally. US layer: no new US — this is a placement constraint on call sites for existing US-level actions. |
| FR-131 clause (d) (open-tier participants blocked from a COUNTING action MUST receive disclosure of non-counting status and explanation of how to become COUNTING-eligible; minted Doc 02 v2.12.0; owner Nadia Hassan; traces BR-005/BR-009) | DES-098 amended (FR-131 clause (d) cross-reference added: the DES-098 honesty-notice obligation extends to the point of a blocked COUNTING action for open-tier participants — not only to ballot-confirmation screens SCR-13/SCR-14; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md) | Extends the DES-098 scope established in v2.6.0: clause (d) triggers at any COUNTING-action block (strength contribution, binding vote, candidacy), not only at the ballot booth. US layer: owed — PO to extend US from FR-131 to cover the blocked-action disclosure path. |
| FR-020 (absolute join right), FR-122 (open-tier access), FR-123 (COUNTING actions), FR-124 (verified status private to holder — restricted-class; no public badge; no Supporter badge) | DES-100 amended (counting-gate correction: exclusion residual rewritten from platform exclusion to COUNTING-tier eligibility gate; FR-124 composition check recorded — verified status is restricted-class and MUST NOT become a public per-participant marker; field table status row corrected to COUNTING-tier eligibility gate; age_verified field scoped to COUNTING-tier verification; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md) | The 2026-08-24 ruling corrects DES-100's exclusion-residual scope from "cannot enrol in v1" to "cannot take COUNTING actions"; FR-124 composition check added confirming verified-status privacy applies identically to the v1 `id_verified_flag` path. US layer: owed — PO to update US derived from FR-132 to reflect the COUNTING-action trigger rather than enrolment trigger. |

**v2.7.0 DES-094 backing-aware copy amendment (§10.12.3, 2026-08-25):**

| Requirement | DES | Notes |
|---|---|---|
| FR-082..086, FR-124, FR-131 (v1 honesty notice — no misleading identity-at-rest claim in v1); H-15 (onePersonOneVote not technically guaranteed in v1); H-16 (phone_hash and subject_id_hash retained as restricted-class identity data in v1) | DES-094 amended — backing-aware `ver` subtitle: v1 conventional backing renders "Your vote counts. How you voted is never made public." (when `getProperties().unlinkable = false` or call absent/error); v2 ZK backing renders "Your vote counts. Your identity is not stored." (only when `getProperties().unlinkable = true`); fail-honest default is the v1 subtitle; clause 7 added to normative binding (FR-131, H-15, H-16, T-01, T-02); anon/pub states confirmed backing-independent (no v1 variants); DES-094 element-table traces updated to add FR-131 | Approver directive Rathish 2026-08-25; resolves engineer FLAG A (`artifacts/engineer-2026-08-24T2015.md`). US layer: no new US — this is a copy-selection constraint on the existing DES-094 component; engineer to implement clause 7 as part of PrivacyStatus.tsx in the enrolment sprint. |

**v2.7.1 DES-094 rework cycle 1 (§10.12.3, 2026-08-25):**

| Requirement | DES | Notes |
|---|---|---|
| FR-131 (honesty notice — non-vote `anon` contexts); ADR-025 §(c-ii) (phone number at rest as identity data); Doc 02 H-16 (`phone_hash` derived identity data); Doc 02 H-18 (`subject_id_hash` retained); T-01/T-02 (operator-side linkage and subpoena deferral) | DES-094 amended — `anon`-state copy analysis fully reworked (ISS-01): interpretive basis stated explicitly; India/TRAI subpoena chain acknowledged; disclosure gap for non-vote contexts addressed via clause 8 (new normative obligation for data-practices disclosure adjacent to `anon` pill on screens 1.2/1.6/2.3); `anon` subtitle unchanged; clause 7 annotated (ISS-02: `unlinkable` is proxy for full "no identity at rest" guarantee; design-review invariant for future backings); normative note added at three-state table header (ISS-03). | Review cycle 1 rework (FAIL 91%/0C/0H/1M/2L; artifacts/reviews/03-architecture-design-sdd-v2.7.0-technical-cycle1.md). No new DES or ADR minted. US layer: engineer to implement clause 8 data-practices disclosure link as part of PrivacyStatus.tsx host-screen integration in the enrolment sprint. |

**v2.11.0 proposals & debate trace rows (DES-103..DES-106, §10.13.13, 2026-08-29/30):** _(added
v2.11.0 — these four elements were minted at **v2.9.0** and shipped without a §15 sub-table, unlike
every other DES family in this section. v2.11.1: the minting version read "v2.9.1" here; v2.9.1 was
the first rework cycle, not the mint.)_

| Requirement | DES | Notes |
|---|---|---|
| FR-079 (three tiers; descriptive only; no weight differentiation); FR-021 (unchanged) | **DES-103** (participation tiers) | `votingWeightForTier()` returns 1 for every tier with no configuration able to change it — exposed as a rule so a test asserts it rather than inferring it from an absence. **RTM row CLOSED** (Doc 08 v2.5.0) |
| FR-080 (Worker self-declared; informed-consent event before confirmation); FR-082/FR-083 (disclosure scope) | **DES-103** (two-step consent event) | Normative surface: step 1 explains, step 2 states permanence **and** participation-record publicity **before** confirmation, plus no-approval. A one-click declaration is forbidden by construction — with no confirmation step there is no "before" for the disclosure to precede. Bound to **SCR-15** (+ SCR-12 where reached). **RTM row CLOSED** (Doc 08 v2.5.1) |
| FR-024 (no pre-screening); FR-090 (public authorship; competing proposals, equal standing); FR-020 (no participation restriction) | **DES-104** (authorship & competing proposals) | Worker-tier gate is a **disclosure** step on the privacy axis, never an approval step and never a verification gate (ruled 2026-08-30). Equal standing enforced by **absence**: no weight/rank/priority field and no withdraw/reject/merge/prioritise/veto capability. **FR-090 RTM row CLOSED** (Doc 08 v2.5.0); FR-024 extended. **Doc 08 v2.6.0 added a REVISIT FLAG to that row** (v2.11.2: recorded here): **Q16** names FR-090 and is open, so if the rule answering it alters what "the same decision window" guarantees, the row and TC-3548/TC-3549 must be re-derived. The row stays COMPLETE — Q16 concerns post-vote resolution, outside FR-090's stated guarantee |
| FR-091 (eight stages in sequence; no skip, reorder or human veto; deliberative stages produce records) | **DES-105** (stage machine) | Order guarantees complete and structural — `advanceStage(windowId)` takes no target, force, skip or actor, so the guarantee is a property of the type signature. **RTM row OPEN (G-NOMECH)** on the unwired "per published timelines" clause only. Layer boundary and the ballot-layer derivation rule: §10.13.13(a). See **Q15**, **Q16**, **Q17** |
| FR-092 (permanent decision trail, third-party reconstructable) | **DES-106** (decision trail) | Append-only per window; `appendTrailEvent` the only writer; reads return copies. **RTM row OPEN (G-NOMECH)** on two counts: the four enumerated elements this layer cannot hold (no vote here) and the unbuilt DES-097 anchoring |
| FR-107 (nothing deleted; append-only state-transition lifecycle) | **partially served by DES-106 — NOT discharged by it** | ⚠ **Do not read this as a DES assignment.** DES-106 satisfies FR-107's append-only property **for the decision trail only**. FR-107 is platform-wide — *every governed entity* active-or-inactive, transitions appended with timestamp and cause, plus the FR-085 confidential-class carve-out — and that lifecycle is **still undesigned**. **Doc 08 correctly records FR-107 as `G-TRACE + G-PHASE3` with DES = none** (§3.1; gap-log entry 98, owner Erik Lindqvist): a DES is owed *from the architect*, which is a stronger claim than a build being owed. _(v2.11.1: the v2.11.0 table mapped FR-107 → DES-106 and marked its row "OPEN (G-NOMECH)", contradicting Doc 08 on both the link and the gap class — a §15 sub-table added to fix a traceability omission had itself asserted a traceability link that does not exist.)_ |

**v2.12.0 DES-094 title correction + DES-098 alignment (§10.12.3, §10.13.6, §13, 2026-09-06):**

| Requirement | DES | Notes |
|---|---|---|
| FR-131 (v1 honesty — closing sentence: the v1 product MUST NOT use "private", "anonymous", "receipt-free" or "secure" to describe v1 voting behaviour); FR-124(b) (verified status restricted-class); H-15, H-16, T-01, T-02 | **DES-094 amended** — backing-aware `ver` **TITLE**: v1 conventional backing renders **"Verified"** (fail-honest default, all cases where `unlinkable !== true`); v2 ZK backing renders "Verified — private" (only when `getProperties().unlinkable === true`). **Clause 9** added to the normative binding list, applying clause 7's test to the title and to the `aria-label`; the v2.7.0 "status visibility" ruling is marked SUPERSEDED in place | **REVERSAL of a v2.7.0 architect ruling.** Superseding authority: Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03` (pre-mount blocker, 2026-09-02) + approver direction 2026-09-05 (Rathish), re-affirmed 2026-09-06. Already built and guarded: `packages/ui/src/PrivacyStatus.tsx` `VER_TITLE_V1`/`VER_TITLE_V2`, **UT-0759** (four paths). **US layer: no new US** — this is a copy-selection constraint on the existing DES-094 component, and the component ships with it |
| FR-131(a) (the notice MUST state NOT anonymous, NOT receipt-free, NOT coercion-resistant); FR-131 closing sentence | **DES-098 aligned** (§10.13.6) — element clause (1) now carries all three denials by name; the banned-words bullet now covers voting-adjacent status copy and records the overruling; §13's "Public tallies in Phase 1" repayment cell now states the FR-131 truth instead of "Phase-1 votes are anonymous but not receipt-free" | Shipped copy: `apps/web/src/i18n/en.ts` `banner.notReceiptFreeTitle`/`Body` (+ `ar.ts` mirror), `packages/protocol/src/flags.js` `MACI_VOTING.description`, `packages/contracts/src/core/Governor.sol` NatSpec, `packages/sdk/src/client.js` `#tenureSignals`; guarded by **UT-0887**, **UT-0888**. **Still owed against DES-098** (unchanged by this version, carried openly): the **acknowledge-to-proceed control** on SCR-13 is not built — the banner is non-dismissable but has no acknowledgement step (US-0134; Doc 06 v2.5.1 §7 item 26(d)). **The FR-131 chain is NOT absent — it is OPEN.** Doc 08 carries the FR-131 Must row `BR-005, BR-009 → FR-131 → EP-06 ▸ FE-058 ▸ US-0134` with sixteen TCs; the row is **OPEN (`G-PHASE3`)** at Doc 08 **v2.7.0 (Approved)** and remains OPEN at **v2.8.0 (In Review, 2026-09-06)**, which adds `TC-3564`…`TC-3569` for this drop. **`TC-3476`, `TC-3481` and `TC-3487` are Blocked** — `TC-3481` because SCR-13/SCR-14 are not built (Doc 06 §7 item 21). **DES assignment — stated so the tester can align rather than guess.** Doc 08's row assigns FR-131 → `DES-096 · ADR-024`; the architect's intended assignment is **DES-098** (the notice itself — the primary backing element, §10.13.6), **DES-094** (the status-badge copy that FR-131's closing sentence reaches, §10.12.3 clauses 7 and 9 and the `anon` disposition), with **DES-096** retained as the ballot seam the notice's cast path runs through. Routed to **Ji-woo Park (tester)**; **Doc 08 is the tester's document and is NOT edited from here**, and nothing in this cell should be read as having edited it. _(v2.13.0, cycle-1 ISS-01 (High): this cell previously closed "and FR-131 has **no `US`/`TC`/RTM row** yet" — false, contradicted by Doc 08 and self-contradicted by its own citation of US-0134 one clause earlier. The row has existed since Doc 08 v2.2.0, 2026-08-25. With Gate 2 approaching, a §15 register publishing "no RTM row" for a Must requirement that has an OPEN, evidence-bearing one is a material correctness defect, not a wording slip.)_ |

## 16. Open questions

| # | Question | Owner | Needed by |
|---|---|---|---|
| Q1 | Threshold calibration **method** (OI-01) — percentage, derived how, published when? | Priya Raghunathan | before first petition opens above dev |
| Q2 | Pilot jurisdictions (OI-04); each needs local counsel and ≥2 GOV_EID issuers | Sofia Marchetti | Phase 2 start |
| Q3 | Acceptable enrolment exclusion rate and the non-document path per pilot (OI-03) | Grace Mbeki | Phase 2 start |
| Q4 | Global passive adversary is not defended. Tor/mixnet transport for high-risk jurisdictions? | Dr. Lena Kowalczyk | Phase 4 |
| Q5 | Coordinator committee selection: how are 7 diverse operators recruited and resampled per election? | Aisha Nkemdirim | Phase 3 |
| Q6 | Phase-1 public tallies conflict with FR-034's spirit. Confirm phased acceptance with client disclosure. | Priya Raghunathan | Phase 1 rollout |
| Q7 | **NFR-025 vs ADR-001 conflict.** NFR-025 requires alternative inclusion within 60 min; L1 force-inclusion takes 12–24 h. Needs product restatement or Phase-4 sovereign rollup as a launch dependency. | Chen Wei | before Gate 2 |
| Q8 | **Cross-namespace double enrolment.** Now bounded by Phase-1 GOV_EID-class restriction (ADR-016). Re-assess at Phase 3 when 1-of-N resumes, with a new ADR and threat model. | Marcus Adeyemi | Phase 3 |
| Q9 | **NFR-004's 0.1% duplicate rate is not internally measurable** by design. Requires out-of-band consented audited sample. | Yuki Sato | before Gate 2 |
| Q10 | **OI-13: FR-062 vs NFR-001/NFR-024/TD-02.** Participation profiles making party membership public directly conflicts with the no-linkage guarantee. Resolution required from Rathish at Gate 1 re-affirmation. See §18 for design-side consequence. | Priya Raghunathan | Gate 1 re-affirmation |
| Q11 | **Welcome screen (1.1) design specification needed.** The wireframe 1.1 Welcome screen has no backing FR, DES, SCR, or US. It is a pre-consent unauthenticated landing screen. Before engineering, a requirement and design element must be minted. What is the normative UX obligation for the landing screen, and who owns it? | Priya Raghunathan (PO) | Before Coding sprint 1 |
| ~~Q12~~ | ~~**100-member provisional cap (wireframe 2.3) — accept or reject?**~~ **CLOSED v2.8.0 (2026-08-29).** The PO accepted the concept and minted FR-130 (Doc 02 v2.5.0; C-02 ruling, Rathish, 2026-08-22); Ruling 1 (2026-08-26) fixed the cap as UNCONDITIONAL with no grace window. The remaining architect half — the enforcement mechanism, the relation to the petition lifecycle, and the "legal verification" trigger this question named — is now specified in **DES-102** (§10.13.11): membership-write-boundary check, code-only lift, capability-absence obligations, v1 application enforcement with audit-record tamper-evidence, and the v2 `Party.join()` guard. The verification *procedure* behind the trigger remains a CON-015 / operational question, recorded in DES-102 rule 6. | ~~Priya Raghunathan (PO)~~ Closed | ~~Before design of petition-live screen~~ Closed |
| Q13 | **FR-125 non-invite fallback — design all four layers.** The mandatory non-invite fallback path (OI-19 ruling; FR-125(b) non-invite fallback ALWAYS available) has no wireframe screen, no DES, no SCR, no US. The Welcome screen (1.1) shows only "Explore" and "I have an invite". The fallback flow must be designed end-to-end. Owner of the DES and SCR: architect (next increment). Owner of the US: product-owner. | Ravi Deshmukh (architect) + Priya Raghunathan (PO) | Before Coding sprint covering FR-125 |
| Q14 | **Party finance ledger screen — design owed.** The wireframe 1.6 "Finances — every rupee in and out" navigation row links to an undesigned screen. FR-050 (Must) requires the itemised public treasury record. DES-033 covers the on-chain mechanism; the UI is not designed. A ledger SCR, DES surface element, FE, and US are all owed. | Ravi Deshmukh (architect) + Priya Raghunathan (PO) | Before Coding sprint covering FR-050 |
| Q15 | **FR-091 does not say what happens to a DEFEATED or CANCELLED decision.** Surfaced 2026-08-30 while mapping FR-091 to ADR-008's `PROPOSAL_STATE` (§10.13.13(a)). FR-091 requires every proposal to move through all eight stages in sequence with **no stage skipped**; a defeated or cancelled decision cannot be implemented or measured, so under the recorded mapping such a window **terminates at `DECISION`**. Terminating is not skipping — but the requirement's text does not say so, leaving a future implementer free to read it as obliging an implementation stage for a proposal the members rejected. **This is a requirement clarification, not an architect's call** — the architect surfaces it and routes it. **Not a defect in what is built:** the proposals and debate layer holds no vote — it stops at `admitToBallot()` and hands off to `IBallotService` — so no window can yet reach a defeated state. _(v2.11.1: this row previously read "v1 holds no vote (ADR-024 §(b))" — the same mis-citation corrected in §10.13.13 at v2.11.0 and missed here, one of the three locations the cycle-1 finding named. ADR-024 §(b) removes on-chain **execution** in v1; **DES-096 §10.13.3 specifies a v1 ballot backing**. It also contradicted **Q16** two rows above, which already used the corrected narrow form.)_ Recorded in Doc 02 §13 tracked routing (h). | Priya Raghunathan (PO) | Before the ballot layer is built |
| Q16 | **Nothing specifies how a decision window with several competing proposals RESOLVES.** Surfaced 2026-08-30 at the v2.10.0 review, while checking the cardinality argument in §10.13.13(a). FR-090 requires every competing proposal to be presented with equal standing and voted **in the same decision window**; `Governor` gives each proposal an **independent binary ballot**; and DES-104 deliberately exposes **no** window-closing, merging, ranking or primary-selection capability — that absence is a first-class anti-capture control and MUST NOT be quietly removed to answer this. So two competing proposals answering one question can **both pass**, and no rule says what then happens. This is a genuine gap between FR-090's "same decision window" and the ballot model, not an implementation detail. It is **not a v1 defect** — the layer built in this drop holds no vote — but it MUST be answered before the ballot layer is built, and the answer is a **requirement decision** (what does the party get when both options win?) before it is an architecture one. Related: **Q15**. | Priya Raghunathan (PO) + Ravi Deshmukh (architect) | Before the ballot layer is built |
| Q17 | **None of the THREE ballot-state representations is covered by a differential test.** _(v2.11.2: this row said "neither … enum", counting two, after the reconciliation sub-table had established three. **v2.12.0:** the **body** still read "exercises neither" — v2.11.2 corrected the title and the annotation but not the body, and its changelog over-claimed otherwise. Corrected here; this was carried Low #1.)_ `Governor.State` (Solidity, 7 values), `PROPOSAL_STATE` (JS mirror, 8 values) and `PROPOSAL_STATE_ENUM` (SDK ordinal-indexed decode array, 7 values) all express the same machine, differ by name in one state (`Timelocked` / `SUCCEEDED_TIMELOCK`), and differ by one **vestigial** value (`PROPOSAL_STATE.DRAFT` has no producer anywhere — `stateAt()` never returns it and no contract declares it). `differential.test.mjs` exercises **none of the three**. §10.13.13(a) now makes the ballot layer authoritative over derived stage positions, which raises the cost of an undetected divergence between the reference mirror and the chain. **Write the ordinal-indexing case first:** `PROPOSAL_STATE_ENUM` decodes by position, so a Solidity enum reorder silently remaps every state with nothing to raise an error. Also owed: a decision on whether to retire `PROPOSAL_STATE.DRAFT` or give it a producer. | Ji-woo Park (tester) + Samuel Oyelaran (Engineering Lead) | Before the v2 seam swap |

**Confirmations recorded (2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4):**

| Item | Confirmed disposition |
|---|---|
| T-01..T-05 Charter tensions | Deferred-with-disclosure model accepted for all five; see §10.13.7 "Decision owed" column for each row. |
| FR-030, FR-031, FR-082, FR-086 (DEFERRED-v2 Musts) | Definition-B-only confirmed: remain Must for v2; not weakened or deleted; v1 makes no claim to these properties. |
| NFR-009 v1 re-reading | One OWASP-class pen test for v1 (not two cryptographic audits); the two cryptographic audits remain the requirement for v2. |
| 2027-05-14 | Gate-2 referent for Definition B confirmed. Also closes the "2027-03-15" carry-forward query from the 2026-08-21 budget ruling — that figure matched no artifact; 2027-05-14 is confirmed. |
| v1 gate date | The existence of MS-V1-LRG as a separate v1 launch-readiness gate is confirmed as the mechanism; the date is NOT SET — an explicit approver value is still required. |

**Resolved during design:** OI-05 (k ≥ 1000 vs ward-level governance) — ADR-004 §2 escalates
scope to the nearest ancestor region meeting the floor. OI-12 (FR-073 vs ADR-003) — resolved
by ADR-016 explicitly amending ADR-003 for Phase 1. **OI-17 (governance constants)** —
CLOSED in §10.11 (v2.0.0, 2026-08-11); values normative for Design; revisable only through
the amendment boundary. **OI-18 (entrenched-charter scope)** — CLOSED by Rathish
2026-08-11, option (c) two-tier core (OI-18-DECISION-2026-08-11.md); amendment boundary
designed in DES-087 and the Guarded Layer (Tier-2) super-process state machine.

**v2.8.0 narrowing of the next-increment scope (2026-08-29).** The paragraph below is the
standing record of deliberately-phased DES work. Two of its rows are now paid down: **FR-077**
(DES-101) and **FR-130** (DES-102) — both had shipped, passing implementations and were held open
only by the missing design link, so they were the correct debt to retire first. The remainder of
the phasing statement stands unchanged: FR-074..FR-076, FR-078..FR-081 and FR-087..FR-111 have
neither DES nor implementation, and FR-121/FR-125..FR-129 likewise — for those, writing a DES
alone closes no RTM row, so they stay in the next increment rather than being pulled forward for
the appearance of progress. FR-064's DES (**DES-065**) already exists and is deliberately **not**
touched here: that row waits on the v2 membership-scope nullifier build, which is v2 scope by the
2026-08-29 FR-064-SEMANTICS ruling. FR-126/FR-127/FR-128 remain v2 by construction (on-device
proving, nullifier-collision dedup, the subpoena test — all deferred with disclosure per
§10.13.7 T-02).

**Next-increment scope (recorded not hidden):** Full DES coverage of remaining v2.x
requirement areas — FR-074..FR-111 beyond existing DES-064..DES-086, **and FR-121..FR-129
(pilot sequence, tiered verification, on-device nullifier-only posture, subpoena-test
invariant, Charter-layer guard for issuer-plurality permanence; ADR-021 records Decisions
1–4; OI-19 and OI-20 CLOSED 2026-08-20)** — is the next design increment. Until that
increment is complete, those FR rows carry an open DES gap in the RTM. This is a deliberate
phasing decision consistent with the session scope in GATE1-DECISION-2026-08-11.md §5.
OI-19 and OI-20 are closed (Rathish, 2026-08-20; DECISIONS-2026-08-20-OI19-OI20.md);
FR-125 is finalised (non-invite fallback mandatory) and FR-004 is satisfied at architecture
level. **One tier-determination question is owed for the FR-121..FR-129 DES increment:**
FR-129 (Charter-layer guard — making single-issuer operation permanent) defers to the
architect the determination of WHICH amendment tier (FR-118 Tier-1 entrenched charter /
FR-119 Tier-2 named absolutes) governs issuer-plurality permanence; this question must be
resolved and recorded in the DES element for FR-129 before that DES row can close.

## 17. Glossary

**Identity commitment** `Poseidon(secret)` — a public leaf; not a person; **a stable cross-context pseudonym** (see §10.2).
**Nullifier (action, Nₐ)** a one-time token derived from a secret and a scope; proves "once", reveals nothing; unlinkable across scopes.
**Nullifier (enrolment, Nᵢ)** derived in-circuit from the stable personal identifier and enrolment scope; deduplicated per namespace (ADR-017).
**Scope** a domain string (petition id, proposal id) that makes action nullifiers unlinkable across actions.
**credentialClass** `GOV_EID` (enrolment-nullifier-minting) or `AVAILABILITY_ONLY` (liveness/recovery only) — per ADR-016.
**Anonymity set** the number of credential holders a prover could be; the protocol floor is k ≥ 1000.
**LeanIMT** gas-efficient incremental Merkle tree, Poseidon-hashed.
**Groth16** succinct proof system; constant, cheap on-chain verification; needs a per-circuit ceremony.
**MACI** Minimal Anti-Collusion Infrastructure; encrypted ballots + key-change ⇒ receipt-freeness.
**Receipt-freeness** a voter *cannot* prove how they voted, even if they want to.
**Entrenched clause** a charter clause requiring a higher bar than its tier; **immutable clause** one that no majority can ever amend.
**Fork** a new party inheriting a parent's charter, manifesto history and lineage, requiring nobody's permission.
**Tier (party governance)** T0 operational · T1 policy · T2 structural · T3 constitutional — the four party-level charter tiers defined in Doc 02 FR-025..FR-029 and enforced by the party charter contracts. DISTINCT from platform amendment boundary layers.
**Tier (platform amendment boundary, legacy label)** Doc 02 v2.2.0 uses "Tier 1 / Tier 2 / Tier 3" for the platform amendment boundary; this SDD uses "Charter Layer / Guarded Layer / Open Layer" (see §10.11 disambiguation note). The two usages share the word "tier" but are INDEPENDENT namespaces: the coincidental identity of Open Layer (60%/15%) and party T2 structural bar (60%/15%) is not definitional.
**permittedActionClass** the set of `callData` selectors a given proposal tier may invoke via `Governor.execute()`.

---

## 18. Contradiction record

### OI-13 — FR-062 (public participation profile) vs NFR-001, NFR-024, TD-02

**Status:** Open — resolution required from Rathish at Gate 1 re-affirmation (per Doc 02 §13 OI-13).
This section records the DESIGN-SIDE consequence only. The architect does not pick the winner.

**The conflict, stated plainly:**

FR-062 requires a public per-citizen profile showing: ballot participation (direction withheld),
current and historical party memberships, endorsed petitions, authored proposals, and attended
debates.

NFR-001 requires that no actor — Trumocracy, an operator, an attestor, a party, any
colluding subset — can determine which party a given person belongs to from any data the
system holds, emits or logs.

NFR-024 requires that no feature expose a member's activity pattern to another member.

TD-02 records "ordinary members anonymous always" as a deliberate architectural trade-off.

**Design-side consequence:**

The `identityCommitment` `C = Poseidon(secret)` is the only durable per-person identifier in
the protocol (§10.2). It is published at enrolment and appears in the `Joined` event whenever
a member joins a party. A participation profile that associates a person's profile address with
their `identityCommitment` — which any participation profile must, because the indexer derives
participation from commitment-linked events — creates an explicit, public link between:
- the person's displayed profile
- the `identityCommitment` that appears in every `Joined` event for that person
- and therefore the party or parties that `identityCommitment` has joined

This is the exact linkage NFR-001 is designed to prevent.

Additionally, a profile listing ballot participation, proposal authorship, and debate attendance
is by definition an activity pattern, violating NFR-024.

**What DES-064 does today:**
DES-064 is designed but flagged off above dev (`participation_profile` flag = off). The
indexer read model that would populate the profile is not built. The feature MUST NOT ship
until OI-13 is resolved.

**How this cannot be "threaded through" the existing privacy architecture without a trade-off:**
There is no privacy-preserving mechanism that simultaneously lets any viewer see a person's
party membership (FR-062) and prevents any actor from determining which party that person
belongs to (NFR-001). These requirements are contradictory. A zero-knowledge proof cannot
prove a party membership is real (satisfying FR-062) to a viewer and simultaneously hide the
party identity from the same viewer (NFR-001). The contradiction is structural.

The resolution choices are (for the human approver):
1. Remove FR-062 (preserve NFR-001/NFR-024/TD-02 intact).
2. Approve FR-062 and amend NFR-001/NFR-024/TD-02 to carve out the profile surface.
3. Approve FR-062 but scope the profile to be visible only to the person themselves
   (authenticated view only) — this partially preserves NFR-001 but changes FR-062's scope.

**Until the human approver decides, the architecture holds FR-062 as a designed-but-dormant
feature and treats NFR-001/NFR-024/TD-02 as the live privacy contract.**

---

### SC-13 / SC-14 — trust-anchor lifecycle (CLOSED at design level, v2.0.0)

**Status:** CLOSED at design level. Both findings from SECURITY-RESCAN-SC-01-2026-08-10.md §4
are addressed in this version. The design change was owed to the architect after Gate 1
(GATE1-DECISION-2026-08-11.md §4).

**SC-13 (HIGH) — No trust-anchor revocation/emergency-update path specified.**
Design response: `rotateTrustAnchor()` and `revokeTrustAnchor()` are now specified in DES-090
and §5.4. Both are callable ONLY from `Governor.execute()` (code executes; humans vote; ruling
4 preserved). The STRIDE DoS row in §10.1 and the failure-mode row FR-112/DES-090 in §11 state
the residual: an anchor compromised during the 7-day emergency timelock window allows Sybil
enrolments for that window. This is accepted residual RISK-30 (recorded in Doc 13 §6). The
window is non-zero by design — it is the false-alarm veto window — and its governance cost
is the price of maintaining rule-4 (no operator action, humans vote).

**SC-14 (MEDIUM) — Governance tier for trustAnchorHash UPDATE unspecified; enrolment blocked
during rotation window.**
Design response: the 60-day dual-anchor overlap window in DES-090 and §10.11 ensures a
compliant rotation never blocks enrolment beyond the published window. The governance bar for
rotation is Open Layer (Tier-3 ordinary citizen vote) with the 90-day timelock (§10.11),
giving the issuer at least 90 days advance notice. Already-enrolled credentials are unaffected.

**Residual (recorded, not hidden):** The 7-day emergency revocation window is an accepted design
trade-off between operational response speed and the no-unilateral-operator-action guarantee
(CON-003). It is recorded in the RISK register (RISK-30) in Doc 13.

---

### OI-18 applied — no contradiction between FR-118 (fork-only Charter Layer / Tier 1) and NFR-017 (amendment process)

**Status:** Applied. OI-18-DECISION-2026-08-11.md (Rathish, 2026-08-11) resolved the potential
conflict before design began.

**The apparent conflict:** FR-118 declares seven charter rules unamendable by any vote.
NFR-017 requires a defined amendment process. A strict reading could treat NFR-017 as
requiring a path for every rule, which would conflict with FR-118's fork-only category.

**Resolution (recorded):** NFR-017's "amendment process" governs the Guarded Layer (Tier 2)
and Open Layer (Tier 3) only. The Charter Layer (Tier 1) is explicitly outside any process —
it is unamendable by definition, and the fork right (FR-120) is the only legitimate path to
change it. This is not a contradiction: NFR-017 defines how the AMENDABLE parts of the
protocol change; FR-118 defines which parts are not amendable. The OI-18 decision records this
as a deliberate three-layer structure, not an accidental gap. The design reflects this split
cleanly: `ProtocolGovernance.proposeAmendment()` rejects Charter Layer (Tier-1) targets at
submission; the super-process state machine governs the Guarded Layer (Tier-2); ordinary
governance governs the Open Layer (Tier-3). The architect found no real contradiction here —
this entry records the analysis so it is not re-litigated.

---

### SC-15..SC-21 — security scan responses (SECURITY-SCAN-DOC03-V2-2026-08-11.md; CLOSED at design level, v2.1.0)

**Status:** All seven findings CLOSED at design level in v2.1.0. Each design response is normative and traced to its DES/ADR; no finding is open.

**SC-15 (CRITICAL) — ProtocolGovernance and StewardRegistry not designated IMMUTABLE CORE; a governance vote could replace or redirect them, making Charter Layer entrenchment decorative.**
Design response: Both contracts designated IMMUTABLE CORE in §5.1 and DES-087 (no admin, no pause, no proxy, non-upgradeable). GENERAL RULE in DES-087: any contract that enforces a Charter Layer rule MUST itself be Charter Layer. Routing surface exclusions stated: proxy/upgrade patterns, registry pointers, Governor.execute action classes, and GovernanceConstants setter are explicitly excluded from the immutable-core guarantee by their nature as non-enforcement-logic.

**SC-16 (HIGH) — GovernanceConstants lacked per-constant Amendment Layer classification; no anti-circularity rule prevented an Open Layer vote from lowering Guarded Layer super-process constants.**
Design response: DES-091 and §10.11 now classify every constant by Amendment Layer; Guarded Layer super-process constants (Tier-2 quorum, supermajority, inter-vote window, audit lead time, STEWARD_INACTION_WINDOW) are classified Guarded Layer minimum and cannot be lowered by an Open Layer vote; anti-circularity rule stated explicitly in §10.11 preamble; setter mechanism (Governor.execute() with onlyGovernor guard, initial values immutable at deployment) resolves the "immutable-at-deployment vs post-deployment revisability" tension.

**SC-17 (HIGH) — publishAuditRef was steward-only; steward inaction or vacancy could stall the Guarded Layer second vote indefinitely.**
Design response: DES-092 introduces citizen-initiated fallback: after STEWARD_INACTION_WINDOW (60 days from firstVoteClosedAt, set in §10.11) any enrolled citizen may call publishAuditRef(); steward vacancy triggers the fallback immediately with no window; audit substance and 30-day lead time unchanged; ADR-019 amended with dated note.

**SC-18 (HIGH) — ROTATION_PENDING state had no abort path; the only recovery from a suspected-bad rotation was a full revocation, causing 30+ days of new-enrolment block.**
Design response: DES-090 adds abortRotation(issuerId) via Governor.execute() at Open Layer bar (60%/15%); ROTATION_PENDING → ROTATION_ABORTED → ACTIVE with incumbent trust-anchor hash restored; pending-anchor credentials rejected for new enrolments from abort onward; no retroactive invalidation of already-enrolled citizens; ADR-020 amended with dated note.

**SC-19 (MEDIUM) — Issuer-onboarding coordination trigger was steward-only; steward inaction could block a region from accessing a new legitimate issuer.**
Design response: DES-092 applies the same citizen-fallback pattern (60-day inaction window from coordination trigger; immediate on steward vacancy) to the issuer-onboarding coordination step; both SC-17 and SC-19 are covered under the same DES-092 design element.

**SC-20 (MEDIUM) — Guarded Layer quorum denominator was ambiguous; an organic enrolment surge between firstVote and secondVote could raise the absolute headcount floor and stall a legitimate in-flight amendment.**
Design response: DES-087 and §10.11 now specify the quorum denominator as enrolled citizen count at snapshotRoot time (fixed at proposeAmendment(), not the live count at castSecondVote time); normative quorum denominator statement added to §10.11 preamble; growth-surge defence interaction clarified (growth-surge defence applies to party-level votes only and does not override the Guarded Layer snapshotRoot rule).

**SC-21 (LOW) — "Undiscovered bypass" STRIDE residual for Governor.execute() action-class table did not reference SC-15's general rule as a mitigation.**
Design response: §10.1 STRIDE table updated; SC-15 general rule (ProtocolGovernance IMMUTABLE CORE, no upgrade/proxy path) formally closes the bypass class of contract substitution or proxy redirection; remaining residual is a logic bug within the immutable contract itself, mitigated by audit (DES-079) and capability-absence CI scan.

---

### C-01 — Wireframe hardcodes "Verify with Aadhaar" vs adapter-driven design (v2.2.0)

**Status:** Open — wireframe-copy fix required at build time. Not a design defect; a build-time parameterisation obligation.

**The conflict:** The wireframe screens 1.3 ("Verify with Aadhaar" button) and 1.4 ("Your Aadhaar data is being read and proven right here on your phone") treat "Aadhaar" as a hardcoded design constant. The normative record requires adapter-driven UI strings: SCR-02 is "Attestor choice & enrolment" (implying a choice surface); FR-004 requires ≥ 2 attestation paths at architecture level; OI-20 ruling designates Aadhaar as the Phase-1 deployment rail string, not a design constant; DES-070 requires "region-level config, not hardcoded"; ADR-016 (amended) and ADR-021 confirm the Phase-1 deployment limitation posture.

**Required disposition:** Button label and on-device copy MUST be adapter-driven at build time — resolved from region-level config or i18n string. "Verify with Aadhaar" is the correct Phase-1 India string and is factually accurate; it is not a fixed design constant. The wireframe element and interaction pattern are sound. No requirement change needed. The engineer must not use the literal string.

---

### C-02 — Wireframe "caps at 100 until legal verification" has no backing requirement (v2.2.0)

**Status:** CLOSED — PO decided: accept. FR-130 minted (Doc 02 v2.5.0; DECISIONS-2026-08-22-WIREFRAME-C01-C02.md). 2026-08-22, Rathish.

**The conflict:** Wireframe 2.3 note: "Membership caps at 100 until legal verification completes — so an unverified party can't gather false strength." No backing FR, DES, or US exists. FR-013 (petition state), FR-075 (platform vs legal registration distinction), FR-076 (founding member count ≥ 5), FR-016 (activation threshold by formula) — none authorise a provisional membership cap of any kind. This is a new design concept with no normative footing.

**Required disposition:** This screen element MUST NOT be built until a FR is minted, reviewed, and approved. The Product Owner must decide whether the concept is accepted (mint FR) or rejected (revise wireframe copy). The architect does not determine this; it is a product decision. Recorded in §10.12.5 class (ii) as design debt and here as a conflict.

**Closure note (2026-08-23):** PO accepted the concept and minted FR-130 (Doc 02 v2.5.0) — FR-130 is the provisional-party membership cap (anti-capture control); it closes C-02 by providing the normative footing for the wireframe 2.3 note. The 100-member provisional cap and its enforcement mechanism are now the engineer's build-time obligation per FR-130. Separately, DES-098 (v1 honesty notice, §10.13.6) is backed by FR-131 (Doc 02 v2.6.0, 2026-08-23) — the v1 honesty notice MUST minted by PO; FR-131 and FR-130 are separate requirements with separate obligations. No further architect action required on C-02 itself.

---

### C-03 — Wireframe 1.6 "Finances" row links to undesigned screen; FR-050 (Must) requires it (v2.2.0)

**Status:** Open — design owed before the 1.6 navigation row can be built.

**The conflict:** The wireframe 1.6 Join a party screen presents "Finances — every rupee in and out" as a navigation target. No wireframe finance-ledger screen exists. FR-050 (Must) requires an itemised, publicly readable, independently verifiable treasury record. DES-033 covers the on-chain mechanism. The UI screen is entirely undesigned (no SCR, no DES surface element, no FE, no US).

**Required disposition:** Design the finance ledger screen (SCR, DES, FE, US) before implementing the 1.6 navigation row. The navigation row itself is sound; the target is not. The absence of the ledger screen is a design-completeness defect in the wireframe scope, not an architectural conflict with the token set or privacy model.

---

### Downstream

DES/ADR decompose into stories (Doc 05), the repo is built from §9 + ADR-011 (Doc 06),
tests are designed from §11 and §14 (Doc 04, Doc 07), and everything is verified in the RTM
(Doc 08).
