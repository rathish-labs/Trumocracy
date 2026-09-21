# Anchored FIND/REPLACE spec — docs/03-architecture-design-sdd.md v2.13.0 (Approved) → v2.14.0 (In Review)

```
Author:        architect (Ravi Deshmukh — Principal Architect; owning role for Docs 03 and 04)
Date:          2026-09-20
Session:       Debt-closure — artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md,
               row 3: OPEN-27 (Doc 04 §13, line 2360) — the `anon` title AND subtitle
               re-examined against Doc 02 §4.45 FR-131 clause (e). This document is the copy
               authority and this increment is the fresh look that item owed.
Target:        docs/03-architecture-design-sdd.md
From:          v2.13.0, Status: Approved
To:            v2.14.0, Status: In Review (neutral reviewer: tester, Ji-woo Park — recorded by
               the PM before dispatch in the review-assignment record above)
Operations:    15
Applied by:    the project-manager's applier. I hold Write but NOT Edit and have not touched
               docs/ at all.
```

## How to apply

1. Apply the operations **in order**. Each `FIND` must match **exactly once**. If any `FIND`
   matches 0 or 2-or-more times, **refuse the whole spec** and return it to me — do not partially
   apply.
2. A `FIND` is **whole lines, start to end**. Never a prefix of a line.
3. **Long single-line operations — double-check these.** The following anchor on single lines of
   150-2,500 characters. Compare them character-for-character before applying:
   - **OP 11** — §10.12.3 normative binding clause 8 (line 1823, ~2,400 characters). Highest risk.
   - **OP 4** — §5.2 DES-066 table row (line 1083).
   - **OP 6** — §10.12.3 three-state table `anon` row (line 1757).
   - **OP 14** — §11 `RISK-24 / DES-071` table row (line 2898).
   OPs 5, 7, 8, 9, 10 anchor on single-line paragraphs of 400-1,000 characters — also compare whole.
4. Nothing is deleted. Superseded text is retained verbatim and marked SUPERSEDED in place.
5. Line numbers below are v2.13.0 line numbers, given as a locating aid only. The `FIND` text is
   authoritative.

## Why this version exists, in one paragraph

Doc 04 v1.6.0 §13 `OPEN-27` routed one question here and deliberately declined to answer it:
the v2.13.0 `anon` **TITLE** disposition and the 2026-08-25 `anon` **subtitle** no-change
decision were both reasoned against an FR-131 whose ban was **voting-scoped**, and FR-131 has
not been voting-scoped since clause (e) entered at Doc 02 v2.17.0 (Approved, unchanged, at
**v2.17.3**). This version answers it. **Both strings fail clause (e)**; the v2.13.0 title
disposition and the 2026-08-25 subtitle decision are SUPERSEDED in place; **clause 10** is added
to the DES-094 normative binding list specifying the v1 variants, in the same form clauses 7 and
9 specify the `ver` copy; and — the finding that is larger than the debt — **no single static
`anon` subtitle can be honest across clause 8's three contexts**, because petition endorsement
(screen 2.3) is *public by design*, so the copy must be context-selected with a fail-honest
default. Nothing renders today (`PrivacyStatus` is mounted on no shipped surface), so this is a
**pre-mount** ruling, not a live copy defect — the opposite posture to the `ver` title, which
shipped wrong and had to be caught in code by Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`. **No code
is written or edited by this spec, and none needs to be.** The two v2.13.0 carried Lows
(ISS-C2-01, ISS-C2-02) are discharged on this touch, as v2.13.0's own status line directs.

---

### OP 1 — Header: version, status, and the two carried Lows discharged

FIND:
````
Version:       2.13.0
Status:        Approved — 03-architecture-design-sdd-v2.13.0-technical-cycle2.md (PASS 97%,
               0C/0H/0M/2L; reviewer: reviewer-qa, neutral, PM-assigned). Two Lows carried —
````
REPLACE WITH:
````
Version:       2.14.0
Status:        In Review — v2.14.0 (2026-09-20). **Debt-closure increment: `OPEN-27` — the
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
````

---

### OP 2 — Header: `Source:` pin swept to Doc 02 v2.17.3, and `Last updated:`

FIND:
````
Source:        SRS-TRUMOCRACY v2.16.3 (Approved 2026-08-30) — re-pinned at v2.12.0 from the
               three-versions-stale v2.16.0 pin (carried Low #2). No normative requirement text
               changed across the v2.16.0 → v2.16.3 delta; FR-131 (§4.45) is unchanged and is the
               normative wording this version cascades.
Last updated:  2026-09-06
````
REPLACE WITH:
````
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
Last updated:  2026-09-20
````

---

### OP 3 — Header: v2.14.0 change-history entry

FIND:
````
Change:        v2.13.0 (2026-09-06) — **Rework cycle 1 against
````
REPLACE WITH:
````
Change:        v2.14.0 (2026-09-20) — **`OPEN-27` closed: the DES-094 `anon` badge copy is
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
````

---

### OP 4 — §5.2: DES-066 "private votes" annotated (v2.13.0 carried Low ISS-C2-02)

**Long single-line table row — compare character-for-character.**

FIND:
````
| DES-066 | candidate feedback scorer | per-candidate-per-election nullifier; upvote +3, downvote −1 (ADR-015); private votes; public tally | FR-065, ADR-015, SCR-23 | Elections; Solidity |
````
REPLACE WITH:
````
| DES-066 | candidate feedback scorer | per-candidate-per-election nullifier; upvote +3, downvote −1 (ADR-015); private votes _(v2.14.0 — v2.13.0 carried Low **ISS-C2-02**, discharged: "private votes" here is a **Definition-B (v2) property** and is annotated, not deleted. In **Definition-A (v1)** the platform database **CAN** see the direction of a candidate-feedback vote (FR-131(b)); privacy of the individual vote arrives with the MACI/ZK layer (ADR-006, DES-095/DES-096, §10.13.1). FR-131 does **not** bind this cell — it is internal design rationale in a DES register, not product copy — but the element is **v1-reachable**, and v2.13.0's own ISS-04 finding was that this document's diagnosis of the v2.7.0 failure is that **a reader does not parse the distinction**. The standing FR-131 bare-word sweep widened at v2.13.0 is what found it; it is corrected here rather than left to be rediscovered.)_; public tally | FR-065, ADR-015, SCR-23 | Elections; Solidity |
````

---

### OP 5 — §10.12.3: the head-of-table normative note extended to the `anon` row

FIND:
````
> _(v2.13.0, cycle-1 ISS-05: the v2.12.0 form of this note presented one annotation string as a quotation applying to "each" of the two cells. Only the subtitle cell carries that string. A quotation matching one of the two cells it claims to quote is a self-inconsistency in the one note whose job is to stop a reader taking the wrong cell as normative.)_
````
REPLACE WITH:
````
> **Scope extended again at v2.14.0 — the note now guards the `anon` row too (`OPEN-27`).** Until this version the note warned about the `ver` row alone. **The `anon` row of the table below is likewise informational reference copy and is NOT the implementation spec.** Its title cell ("Anonymous") and its subtitle cell ("Nothing you do here is linked to you") are the **v2.7.1 reference strings and are SUPERSEDED for Definition-A (v1)** by **clause 10** of the normative binding list below, which specifies the v1 title and the three context-selected v1 subtitles together with their fail-honest default. An engineer implementing `PrivacyStatus.tsx` MUST consult **clause 10** for the `anon` state exactly as they MUST consult clauses 7 and 9 for the `ver` state; taking the `anon` row of this table as the implementation spec will produce copy that **fails FR-131 clause (e)**. **This is the third time the same defect has been found in this one note, and the shape is identical each time:** v2.7.1 guarded the `ver` subtitle and left the `ver` title reading as normative, which shipped (Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`); v2.12.0 guarded the `ver` row and left the `anon` row reading as normative, which did not ship only because the component is mounted on no surface. **A note that guards one row of a three-row table does not guard the table.** The `pub` row carries no banned word and makes no unlinkability claim, and is dispositioned unchanged below.
>
> _(v2.13.0, cycle-1 ISS-05: the v2.12.0 form of this note presented one annotation string as a quotation applying to "each" of the two cells. Only the subtitle cell carries that string. A quotation matching one of the two cells it claims to quote is a self-inconsistency in the one note whose job is to stop a reader taking the wrong cell as normative.)_
````

---

### OP 6 — §10.12.3: three-state reference table, `anon` row annotated

**Single-line table row — compare whole.**

FIND:
````
| `anon` | `privacy anon` | `--grey-soft` (#8892AE) | #ECEEF5 | #41496b | "Anonymous" | "Nothing you do here is linked to you" |
````
REPLACE WITH:
````
| `anon` | `privacy anon` | `--grey-soft` (#8892AE) | #ECEEF5 | #41496b | "Anonymous" *(v2.14.0 — **SUPERSEDED for v1**; reference copy only. The v1 title is specified by **clause 10**; this cell MUST NOT be implemented. `OPEN-27`)* | "Nothing you do here is linked to you" *(v2.14.0 — **SUPERSEDED for v1**; reference copy only. The v1 subtitle is **context-selected** by **clause 10**; this cell MUST NOT be implemented. `OPEN-27`)* |
````

---

### OP 7 — §10.12.3: the 2026-08-25 subtitle decision and the v2.13.0 TITLE disposition, both marked SUPERSEDED in place

**Three single-line paragraphs, 700-1,000 characters each — compare whole.**

FIND:
````
**`anon` subtitle v1 variant — no change (architect decision, 2026-08-25).** "Nothing you do here is linked to you" is sustainable under the explicit interpretive basis stated above: no `anon`-state action is published linked to any individual identity in either v1 or v2 (FR-124(b) aggregate-only policy). The operator-side linkage is real in v1 — but that is a platform-data-practices disclosure concern addressed by clause 8, not by a subtitle change. No v1 subtitle variant is required. This decision is recorded; if a future honesty review or user-research finding establishes that "publicly linked" is not the reading a reasonable user in the India pilot context applies to the claim, a subtitle variant MUST be considered before that deployment.

**`anon` TITLE banned-word disposition (v2.13.0 — added per cycle-1 ISS-03; the analysis that was missing).** The `anon` title is the bare word **"Anonymous"** — one of FR-131's four banned words — hardcoded in the same `STATE_CONFIG` of the same component as the `ver` title (`packages/ui/src/PrivacyStatus.tsx`). Until this version, this was the **only one of the three state analyses with no banned-word line at all**: the `pub` analysis states "No banned words" and the `ver` analysis devotes four paragraphs to one. v2.12.0 minted a normative rule that FR-131's ban reaches voting-adjacent **status** copy, and then dispositioned one of the two badge states that rule touches. That is the same shape as the defect v2.12.0 was written to correct, at component scale rather than cell scale.
````
REPLACE WITH:
````
> **SUPERSEDED — both `anon` decisions below are OVERRULED at v2.14.0 (2026-09-20), on `OPEN-27`.** Superseding authority: **Doc 02 v2.17.3 §4.45 FR-131 clause (e)** (entered at v2.17.0; product-owner ruling 2026-09-06, CONFIRMED by the approver Rathish Kumar 2026-09-06, DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11) together with **§8 FR-131 Scenarios 8 and 9**, routed here by **Doc 04 v1.6.0 §13 `OPEN-27`**. **What is superseded:** (a) the **2026-08-25 "no v1 subtitle variant required" decision**, in full; (b) the **v2.13.0 `anon` TITLE disposition**, as to **Definition-A (v1)**. **The rule that now governs is `clause 10`** of the normative binding list below. The full v2.14.0 reasoning — the two findings, the third finding that no single static subtitle can be honest across clause 8's three contexts, the rejected alternatives, and the render trigger — is recorded **immediately after the re-open triggers below**, so that the superseded reasoning and its replacement read in sequence.
>
> **Why the superseded reasoning fails, in one sentence each.** The **subtitle** decision rescued "Nothing you do here is linked to you" by reading "linked" as "***publicly*** linked" on the strength of FR-124(b)'s aggregate-only **publication** policy — but clause (e) is not a publication rule, it is a rule about what **Trumocracy itself** can do, and it expressly makes the ordinary grade-8 reader's reading govern over the author's gloss. The **title** disposition rested on the premise that the badge cannot be describing an open-tier user's **voting** behaviour because that user cannot vote — a premise that is **still true**, and which fails only because the ban is no longer voting-scoped: it now reaches "any other v1 participation act as defined in clause (e)", and clause 8 renders the pill on **party-joining (1.6)** and **endorsing (2.3)**, two acts clause (e) names.
>
> **Retained verbatim per annotate-don't-delete, and it matters here.** Both decisions below, and the four paragraphs of the TITLE disposition that follow them — the disposition, "Why this is not the reading that was just overruled", "What this disposition does NOT claim", and the four re-open triggers — are **retained exactly as written** and are the record of what was reasoned, when, and on what. They **MUST NOT** be relied on as the rule in force for v1.

_(2026-08-25 subtitle decision — SUPERSEDED at v2.14.0, retained for the trail:)_ **`anon` subtitle v1 variant — no change (architect decision, 2026-08-25).** "Nothing you do here is linked to you" is sustainable under the explicit interpretive basis stated above: no `anon`-state action is published linked to any individual identity in either v1 or v2 (FR-124(b) aggregate-only policy). The operator-side linkage is real in v1 — but that is a platform-data-practices disclosure concern addressed by clause 8, not by a subtitle change. No v1 subtitle variant is required. This decision is recorded; if a future honesty review or user-research finding establishes that "publicly linked" is not the reading a reasonable user in the India pilot context applies to the claim, a subtitle variant MUST be considered before that deployment.

_(v2.13.0 TITLE disposition — SUPERSEDED as to v1 at v2.14.0, retained verbatim for the trail, and it runs from here through the four re-open triggers below:)_ **`anon` TITLE banned-word disposition (v2.13.0 — added per cycle-1 ISS-03; the analysis that was missing).** The `anon` title is the bare word **"Anonymous"** — one of FR-131's four banned words — hardcoded in the same `STATE_CONFIG` of the same component as the `ver` title (`packages/ui/src/PrivacyStatus.tsx`). Until this version, this was the **only one of the three state analyses with no banned-word line at all**: the `pub` analysis states "No banned words" and the `ver` analysis devotes four paragraphs to one. v2.12.0 minted a normative rule that FR-131's ban reaches voting-adjacent **status** copy, and then dispositioned one of the two badge states that rule touches. That is the same shape as the defect v2.12.0 was written to correct, at component scale rather than cell scale.
````

---

### OP 8 — §10.12.3: the v2.14.0 ruling, placed after the retained re-open triggers

FIND:
````
**Re-open triggers — this disposition MUST be revisited if any of these holds:** (i) the `anon` badge ever renders on a vote-casting surface, or for any user who can cast a binding vote; (ii) FR-122/FR-123 change so that open-tier participation includes binding voting; (iii) FR-131 is amended to ban the four words unconditionally rather than "to describe v1 voting behaviour"; (iv) user research or an honesty review shows open-tier members read the badge as a claim about how their vote is handled. Trigger (iv) is the same standing condition the `anon` subtitle decision already carries.
````
REPLACE WITH:
````
**Re-open triggers — this disposition MUST be revisited if any of these holds:** (i) the `anon` badge ever renders on a vote-casting surface, or for any user who can cast a binding vote; (ii) FR-122/FR-123 change so that open-tier participation includes binding voting; (iii) FR-131 is amended to ban the four words unconditionally rather than "to describe v1 voting behaviour"; (iv) user research or an honesty review shows open-tier members read the badge as a claim about how their vote is handled. Trigger (iv) is the same standing condition the `anon` subtitle decision already carries.

_(End of the retained, superseded v2.13.0 material. The ruling in force follows.)_

---

**`anon` COPY RULED AGAINST FR-131 CLAUSE (e) — v2.14.0, 2026-09-20. This is the ruling in force for Definition-A (v1), and it supersedes both `anon` decisions above.**

**What was asked, by whom, and what was NOT asked.** Doc 04 v1.6.0 §13 `OPEN-27` routed one question here and deliberately declined to answer it — *"This is a copy ruling for the copy authority (Doc 03), not for this plan: ruling it in the test plan would repeat the v2.7.0 mistake of a copy ruling living somewhere other than the copy authority. What is owed is a fresh look, not a lapse."* **Doc 04's lapse analysis is correct, was reviewed and PASSed, and is not disturbed by anything here: none of the four re-open triggers above has fired.** Whether a trigger *fired* and what clause (e), read directly against these two strings, *requires* are **different questions**. Clause (e) supplies its own test and does not wait on a trigger. **No trigger fired. The requirement changed.**

**The text this copy is now measured against.** Doc 02 **v2.17.3 (Approved)** §4.45 **FR-131 clause (e)**, entered at v2.17.0 and unchanged since; acceptance criteria at **§8 FR-131 Scenarios 8 and 9**. Its operative terms, quoted because the ruling turns on them: the duty is "about **claims**, not about a list of words, and it is **not confined to the ballot**"; a *participation act* means "casting a vote, endorsing or backing a petition, **joining or belonging to a party**, or supporting a party"; "**the test is what an ordinary reader at the grade-8 reading level (NFR-023) would take the claim to mean, not whether a banned word appears**: a claim FAILS this clause if such a reader would conclude from it that **Trumocracy itself cannot link them to the act**"; where an act is "**public by design** … the copy MUST say so plainly and MUST NOT describe that act as kept private, secret or hidden"; copy that "states what the platform does **not publish**, and separately states what the platform's **own records can see**, **and makes no contrary claim elsewhere in the same string**, SATISFIES this clause"; and "**where the safe-harbour and the reader test above appear to disagree, the reader test governs**". The closing sentence now bans the four words for "v1 voting behaviour **or any other v1 participation act as defined in clause (e)**".

**FINDING 1 — the subtitle "Nothing you do here is linked to you" FAILS clause (e).** It is a **universal negative over the holder's acts**, and clause 8 renders it on **party-joining (screen 1.6)** and **endorsing (screen 2.3)** — two of the acts clause (e) names. An ordinary grade-8 reader, standing on the join screen and reading "Nothing you do here is linked to you", concludes that joining this party is not linkable to them. That is precisely and exactly the conclusion clause (e) forbids. This section has **conceded since v2.7.1** that the claim is **not literally true in v1**: the platform DB associates open-tier actions with the account; `phone_hash` is derivable to a phone number by an operator holding the KMS pepper; and in the India pilot that chain reaches a TRAI-registered real person (Doc 02 H-16, H-18; §10.13.7 T-01, T-02). **The safe harbour does not save it:** the string states the not-published half **not at all** and the operator-records half **not at all**; and clause 8's data-practices affordance is (i) a **different artefact** from the string, where clause (e)'s safe harbour is expressly "in the same string", and (ii) **still unbuilt**. **The 2026-08-25 decision is SUPERSEDED. A v1 subtitle variant is REQUIRED.**

**FINDING 2 — the title "Anonymous" FAILS clause (e) as rendered.** The v2.13.0 disposition ruled it COMPLIANT on one load-bearing premise — ***"The distinction is the voter, not the word"***: the `anon` state renders only for open-tier users who by FR-122/FR-123 cannot cast a binding vote, so the badge cannot be describing that user's **voting** behaviour. **That premise is true and remains true**, and it is exactly why the disposition does not survive. It was an answer to a **voting-scoped** ban. The ban is no longer voting-scoped. **FR-122/FR-123 are unamended; what changed is the requirement, not the voter** — which is why this is not trigger (ii), and why Doc 04 is right that no trigger fired. On screens 1.6 and 2.3 the badge renders **at the point of a named participation act**, directly above a subtitle whose subject is that act, carrying one of the four words the closing sentence now bans for that act. The title and the subtitle are rendered as **one visual unit** — one container, one `role="status"`, the title supplying the `aria-label` — so the title cannot be rescued by being read in isolation from the subtitle glued to it. **And on screen 2.3 there is a second, independent failure that does not depend on the reader test at all:** petition endorsement is **public by design** — Doc 14 §2.2, "a public act, on purpose", "only back a petition if you are comfortable being seen to support it"; the fully private alternative is the `private_endorsement` charter option, a Phase-4 flag **OFF in every v1 deployment** — and clause (e) requires copy to **say so plainly** and forbids describing such an act as kept private, secret or **hidden**. A badge reading "Anonymous" over an endorsement action describes it as hidden. **The v2.13.0 TITLE disposition is SUPERSEDED as to v1. A v1 title variant is REQUIRED.**

**FINDING 3 — and this is larger than the debt item that produced it. No single static `anon` subtitle can be honest across clause 8's three contexts.** On browsing (1.2) and party-joining (1.6), "not made public" is **true** (FR-124(b) aggregate-only; the approved exemplar `apps/web/src/i18n/en.ts` `parties.joinPrivate`, guarded by UT-0869, says exactly this of membership). On **endorsing (2.3)** the same sentence is **false**, because the endorsement is public by design. **Any single-string fix therefore trades a clause-(e) breach in one direction for a clause-(e) breach in the other** — an honest-sounding string that under-states the exposure of the one act in the set where exposure is the whole point, and where Doc 14's own guidance is that a citizen should weigh being seen before acting. The `anon` copy MUST therefore be **context-selected**, by the same fail-honest discipline clauses 7 and 9 apply to `ver`: an explicit input, an enumerated context set, and a default that claims **least** when the input is absent, unknown or malformed. **This is `clause 10`.** It is recorded as a finding in its own right because a reader of `OPEN-27` would reasonably have expected a two-string word swap, and that is not what the requirement turns out to need.

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
````

---

### OP 9 — §10.12.3: the Downstream / copy-authority paragraph, re-cut

FIND:
````
**Downstream — the copy authority is here, and only here.** Doc 04 §0.5 **S5** is a **build-failing** denylist over `apps/web` and `packages/ui` user-facing strings forbidding any v1 string that asserts anonymity outside a DES-098 notice denying it; the shipped `STATE_CONFIG.anon.title` is exactly such a string, so S5 as written would fail the build on copy this section approves. Doc 04 v1.4.0 §0.5 S5 therefore carries a **named carve-out citing this disposition**. It cites; it does not rule. A copy ruling living anywhere other than the copy authority is precisely the v2.7.0 mistake.
````
REPLACE WITH:
````
**Downstream — the copy authority is here, and only here.** Doc 04 §0.5 **S5** is a **build-failing** denylist over `apps/web` and `packages/ui` user-facing strings forbidding any v1 string that asserts anonymity outside a DES-098 notice denying it; the shipped `STATE_CONFIG.anon.title` is exactly such a string, so S5 as written would fail the build on copy this section approves. Doc 04 v1.4.0 §0.5 S5 therefore carries a **named carve-out citing this disposition**. It cites; it does not rule. A copy ruling living anywhere other than the copy authority is precisely the v2.7.0 mistake.

**Downstream — re-cut at v2.14.0. The carve-out is WITHDRAWN, not narrowed.** The paragraph above is retained as the record of why the carve-out existed; it is **superseded as to its conclusion**. This section no longer approves the shipped `STATE_CONFIG.anon.title` or the shipped `anon` subtitle, so **S5 has nothing left to carve out**: the two strings at `packages/ui/src/PrivacyStatus.tsx:251-252` are now **inside** S5's scan scope and **failing it**, on this section's own ruling. **Doc 04 v1.7.0 is instructed accordingly**, at every site that carries the carve-out — §0.5 S5's named exception, S5 rule 4's count, S4's scope-before-count sentence, §1.4's status roll-call and §13's `OPEN-27` row — because a correction that does not reach every place it claimed to reach is the defect this document family has FAILed on repeatedly, and a withdrawn carve-out surviving in one of five sites is a **build-failing** scan quietly not failing. **Two things S5 MUST NOT do, stated so the scan is mechanical.** It MUST NOT record the two strings as an *exception*: they are a **ruled, remediation-pending failure**, tracked as `OPEN-28` with the render trigger above as its closing condition. And it MUST NOT be read as failing a build today: the `packages/ui` string scan S5 specifies **is not implemented** — the guards that exist (`UT-0869`, `UT-0887`, `UT-0889`, `UT-0759`) are scoped to `apps/web` i18n strings and to the `ver` state — so no build is failing on this ruling, and none should be made to fail on copy the engineer has not yet been given a story to change. **The relationship between the two documents is unchanged and is the point:** this section rules; Doc 04 cites. What has changed is what it cites.
````

---

### OP 10 — §10.12.3: the v2.13.0 Verdict, superseded and re-stated

FIND:
````
**Verdict (revised — v2.13.0).** Copy is compliant under the stated interpretive basis, cell by cell: the `anon` **subtitle** is compliant under the interpretive basis stated above together with the clause-8 disclosure obligation, and the `anon` **title** is compliant with FR-131 on the basis and re-open triggers stated immediately above. Non-vote `anon` context disclosure gap addressed normatively via clause 8. No v1 subtitle variant required, and no v1 title variant required.
````
REPLACE WITH:
````
_(v2.13.0 Verdict — SUPERSEDED at v2.14.0, retained for the trail:)_ **Verdict (revised — v2.13.0).** Copy is compliant under the stated interpretive basis, cell by cell: the `anon` **subtitle** is compliant under the interpretive basis stated above together with the clause-8 disclosure obligation, and the `anon` **title** is compliant with FR-131 on the basis and re-open triggers stated immediately above. Non-vote `anon` context disclosure gap addressed normatively via clause 8. No v1 subtitle variant required, and no v1 title variant required.

**VERDICT (in force — v2.14.0, 2026-09-20; `OPEN-27` closed).** Cell by cell, for **Definition-A (v1)**:

- **`anon` TITLE "Anonymous" — NOT COMPLIANT in v1.** Fails FR-131 clause (e)'s closing sentence as rendered on screens 1.6 and 2.3, and fails clause (e)'s public-by-design rule independently on screen 2.3. **A v1 title variant IS required** — specified at **clause 10**. Not ruled for v2.
- **`anon` SUBTITLE "Nothing you do here is linked to you" — NOT COMPLIANT in v1.** Fails clause (e)'s ordinary-reader test; the safe harbour does not reach it. **A v1 subtitle variant IS required, and it MUST be context-selected** — specified at **clause 10**, with a fail-honest default.
- **`ver` title and subtitle — unchanged.** Clauses 7 and 9 govern; the v2.12.0 reversal stands; nothing here re-opens them.
- **`pub` title and subtitle — unchanged. No banned words, no unlinkability claim, backing-independent.** No v1 variant needed.
- **Clause 8 — unchanged and still owed.** The non-vote `anon` context disclosure obligation is **not** discharged by clause 10's strings; its affordance remains unbuilt (owner: engineer, enrolment sprint).
- **Render trigger — five conditions, stated above and normative.** Nothing renders today; this is a pre-mount ruling.
- **No re-open trigger fired.** Doc 04 v1.6.0's analysis stands. The requirement changed; the four triggers are untouched and remain live against clause 10's copy exactly as they were against the copy it replaces.
````

---

### OP 11 — §10.12.3: normative binding clause 8, re-pointed

**Very long single line (~2,400 characters) — compare character-for-character before applying. This is the highest-risk operation in the spec.**

FIND:
````
8. **Non-vote `anon` context disclosure (FR-131, ADR-025 §(c-ii), Doc 02 H-16, H-18):** In any screen where the `anon` pill renders in a non-vote-casting context — specifically browsing (screen 1.2), party-joining (screen 1.6), and endorsing (screen 2.3) — the component or its host screen MUST provide an accessible data-practices disclosure link adjacent to the pill. The disclosure MUST inform the user, in plain language at Grade-8 level or lower, that: (i) the platform holds a hashed account identifier associated with their phone number in a restricted-access store; (ii) their open-tier participation actions are associated with that account in the platform DB; and (iii) this account record is subject to legal compulsion in the jurisdiction of operation. The minimum disclosure mechanism is a "?" or "Learn more" affordance adjacent to the `anon` pill that surfaces a one-paragraph plain-language data notice. This obligation exists because DES-098's honesty notice (FR-131) applies only at vote time (SCR-13/14) and does not cover non-vote contexts where the `anon` pill displays the claim "Nothing you do here is linked to you." DES-098's scope is unchanged; this clause supplements it for non-vote surfaces. Cites: FR-131 (honesty notice obligation); ADR-025 §(c-ii) (phone number at rest as identity data in v1); Doc 02 H-16 (`phone_hash` is derived identity data held in operator DB); Doc 02 H-18 (`subject_id_hash` retained as derived identifier); T-01 (operator-side linkage accepted with disclosure). Owner: engineer (enrolment sprint). Trigger: MUST be implemented before any screen rendering the `anon` pill in a non-vote context is shipped to production.
````
REPLACE WITH:
````
8. **Non-vote `anon` context disclosure (FR-131, ADR-025 §(c-ii), Doc 02 H-16, H-18):** In any screen where the `anon` pill renders in a non-vote-casting context — specifically browsing (screen 1.2), party-joining (screen 1.6), and endorsing (screen 2.3) — the component or its host screen MUST provide an accessible data-practices disclosure link adjacent to the pill. The disclosure MUST inform the user, in plain language at Grade-8 level or lower, that: (i) the platform holds a hashed account identifier associated with their phone number in a restricted-access store; (ii) their open-tier participation actions are associated with that account in the platform DB; and (iii) this account record is subject to legal compulsion in the jurisdiction of operation. The minimum disclosure mechanism is a "?" or "Learn more" affordance adjacent to the `anon` pill that surfaces a one-paragraph plain-language data notice. This obligation exists because DES-098's honesty notice (FR-131) applies only at vote time (SCR-13/14) and does not cover non-vote contexts where the `anon` pill displays the claim "Nothing you do here is linked to you." DES-098's scope is unchanged; this clause supplements it for non-vote surfaces. Cites: FR-131 (honesty notice obligation); ADR-025 §(c-ii) (phone number at rest as identity data in v1); Doc 02 H-16 (`phone_hash` is derived identity data held in operator DB); Doc 02 H-18 (`subject_id_hash` retained as derived identifier); T-01 (operator-side linkage accepted with disclosure). Owner: engineer (enrolment sprint). Trigger: MUST be implemented before any screen rendering the `anon` pill in a non-vote context is shipped to production. **_(v2.14.0 — this clause is UNCHANGED in substance and is still owed and still unbuilt; two things about it are re-pointed, and nothing is deleted. (1) The string it quotes — "Nothing you do here is linked to you" — is SUPERSEDED for v1 by clause 10, which was ruled on `OPEN-27`. The quotation is retained because it is the record of the claim this clause was written to disclose against; read it as historical. (2) Clause 10 does NOT discharge this clause. Clause 10 replaces a one-line badge gloss with an honest one; clause 8 requires a three-part plain-language data-practices disclosure — hashed identifier · action-to-account association · legal compulsion. A badge subtitle is not that disclosure, and clause (e)'s safe harbour being "in the same string" cuts both ways: the badge cannot carry clause 8's content, and clause 8 cannot be satisfied by the badge. This clause and clause 10 are cumulative, and both are conditions of the render trigger recorded in the `anon` ruling above. The three contexts this clause enumerates — 1.2, 1.6, 2.3 — are the same enumerated set clause 10 selects copy by, deliberately: one list, two obligations, so a future context can only be added in one place.)_**
````

---

### OP 12 — §10.12.3: clause 10 minted, ahead of the leak-check verdict

FIND:
````
**Leak-check verdict (FR-124 applied to entire wireframe):**
````
REPLACE WITH:
````
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
````

---

### OP 13 — §10.13.6: the status-copy scope bullet corrected

FIND:
````
- Backs: **FR-131** (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009)
````
REPLACE WITH:
````
- **v2.14.0 correction (normative) — the `anon` half of the bullet above is SUPERSEDED.** The v2.13.0 bullet above states that the `anon` title "Anonymous" is "**COMPLIANT in v1** — the state renders only for open-tier users who cannot cast a binding vote under FR-122/FR-123, so the badge describes a participation tier and not voting behaviour". That was ruled against an FR-131 whose closing sentence was **voting-scoped**. **It is no longer.** Doc 02 **v2.17.3** §4.45 **clause (e)** (entered v2.17.0) extends the ban to "any other v1 participation act", and §10.12.3 clause 8 renders the `anon` pill on **party-joining (1.6)** and **endorsing (2.3)**, two acts clause (e) names. **On `OPEN-27`, §10.12.3 v2.14.0 rules both the `anon` title AND the `anon` subtitle NOT COMPLIANT in v1** and specifies the v1 variants at **clause 10** (context-selected, with a fail-honest default). The bullet above is retained verbatim as the record of the superseded ruling; **clause 10 and the `anon` ruling in §10.12.3 are what govern.** Everything else in that bullet is **unchanged and correct**: the `ver` half (clauses 7 and 9; the v2.12.0 reversal), the negated-form allowance for clause (a) and its negation-aware `UT-0887`, and the standing rule that **exactly two** DES-094 badge states carry copy containing a banned word and **both are dispositioned in §10.12.3, which is the copy authority for both** — a rule that reaches status copy must say which status copy it reaches. Any new badge state carrying one of the four words MUST still be dispositioned in §10.12.3 before it ships, and so must any substitute for clause 10's strings.
- Backs: **FR-131** (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009)
````

---

### OP 14 — §11: two FR-131(e) / DES-094 failure-mode rows

**Single-line table row anchor — compare whole.**

FIND:
````
| RISK-24 / DES-071 | recovery initiated during live ballot | recovering credential attempts to vote | `isInRecovery(nullifier)` check in `vote()` → **reject**; active key still votes normally |
````
REPLACE WITH:
````
| RISK-24 / DES-071 | recovery initiated during live ballot | recovering credential attempts to vote | `isInRecovery(nullifier)` check in `vote()` → **reject**; active key still votes normally |
| FR-131(e) / DES-094 _(v2.14.0)_ | `anon` pill mounted on a non-vote participation surface | host screen supplies **no** `anonContext`, or an unrecognised or malformed value | clause 10(c) **fail-honest default** renders — title "Open tier", subtitle "Our own records can link what you do here to your account." — the **claim-least** string, true in all three of clause 8's contexts. The component **MUST NOT infer** the context from route or referrer: a wrong inference produces precisely the clause-(e) breach the default prevents. Same doctrine as clauses 7 and 9 — absence of the selecting input falls back to the weaker claim, never the stronger |
| FR-131(e) / DES-094 _(v2.14.0)_ | `anon` pill rendered on the endorsement surface (screen 2.3) | copy asserts, or a future edit reintroduces, that the act is not made public | petition endorsement is **public by design** (Doc 14 §2.2, "a public act, on purpose"; `private_endorsement` is a Phase-4 charter flag OFF in every v1 deployment), so clause (e) requires the copy to **say so plainly**. Clause 10(b)'s `'endorse'` string does: "Backing a petition is public, on purpose." A "not made public" string on this screen is a clause-(e) breach **in the opposite direction** to the one `OPEN-27` found, and MUST fail Doc 04 §0.5 S5's scan. This is the failure mode that makes a single static `anon` subtitle impossible — see Finding 3 in the §10.12.3 ruling |
````

---

### OP 15 — §15: footnote on the FR-131 → DES-098 row

FIND:
````
**v2.4.0 v1 phone-auth + spam-resistance additions (§10.13, 2026-08-23):**
````
REPLACE WITH:
````
_(v2.14.0 footnote to the FR-131 → DES-098 row above, added rather than editing the cell, per annotate-don't-delete: the row's parenthetical "(§10.12.3 clauses 7 and 9 — 'private' on a status badge only against `unlinkable === true`, and clause `anon` disposition for 'Anonymous')" remains accurate as to **clauses 7 and 9**, which are untouched. The **`anon` half is superseded**: on `OPEN-27`, §10.12.3 **v2.14.0** rules the `anon` title "Anonymous" and the `anon` subtitle "Nothing you do here is linked to you" **NOT COMPLIANT in Definition-A (v1)** against **FR-131 clause (e)** (Doc 02 v2.17.3 §4.45; §8 Scenarios 8 and 9), and specifies the v1 variants at the new **clause 10** — context-selected over clause 8's three contexts, with a fail-honest default. **This changes no US/TC/RTM claim in the row above**, and no `US`, `TC` or `UT` is minted, renumbered or reused by v2.14.0; the DES assignment for FR-131 stated in that row — DES-098 primary, **DES-094 for the status-badge reach**, DES-096 retained as the ballot seam — is unchanged, and is if anything more firmly DES-094's than when it was written. Implementation and its guard are owed and are tracked as `OPEN-28` in Doc 04 §13, with the five-condition render trigger recorded in §10.12.3.)_

**v2.4.0 v1 phone-auth + spam-resistance additions (§10.13, 2026-08-23):**
````

---

## Post-application checklist (for the applier)

- [ ] All 15 `FIND`s matched exactly once. If any matched 0 or 2-or-more times, the spec was
      refused whole and returned to the architect.
- [ ] `Version:` reads **2.14.0**; `Status:` reads **In Review** and names
      `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md` and the neutral reviewer
      (**tester**, Ji-woo Park).
- [ ] `Last updated:` reads **2026-09-20**; `Source:` pins **Doc 02 v2.17.3 (Approved)**.
- [ ] `Change:` carries a **v2.14.0** entry above the retained v2.13.0 entry; no prior entry lost.
- [ ] §10.12.3 contains, in order: the extended normative note · the annotated `anon` table row ·
      the SUPERSEDED banner · the retained 2026-08-25 subtitle decision · the retained v2.13.0
      TITLE disposition through its four re-open triggers · the v2.14.0 ruling · the retained
      Downstream paragraph and its re-cut · the retained v2.13.0 Verdict · the v2.14.0 Verdict ·
      clauses 1-8, 9 and the new **clause 10** · the leak-check verdict.
- [ ] §5.2, §10.13.6, §11 and §15 each carry their v2.14.0 correction.
- [ ] Doc 03 has **no §22 Approvals table** — its sign-off apparatus is the header `Approvers:`
      line, which names the four domain approvers and is **not** a per-version row. Nothing is
      owed there and nothing is added. Doc 04's §22 row is handled in the Doc 04 spec.
- [ ] No file under `packages/`, `apps/` or `services/` is touched by this spec.
