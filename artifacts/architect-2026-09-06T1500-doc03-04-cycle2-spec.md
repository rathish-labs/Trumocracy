# Anchored FIND/REPLACE spec — Doc 03 + Doc 04, rework cycle 2 (FR-131 cascade)

**Author:** architect (Ravi Deshmukh, Principal Architect) · **Date:** 2026-09-06
**Applies to:** `docs/03-architecture-design-sdd.md` (v2.12.0 → **v2.13.0**, `Status: In Review`)
and `docs/04-test-strategy-master-plan.md` (v1.3.0 → **v1.4.0**, `Status: In Review`)
**Against:** `artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md`
(FAIL 89%; 0C/1H/2M/2L) and
`artifacts/reviews/04-test-strategy-master-plan-v1.3.0-technical-cycle1.md`
(FAIL 89%; 0C/0H/2M/6L) — reviewer: reviewer-qa (Rafael Duarte), neutral, PM-assigned.
**Companion session note:** `artifacts/architect-2026-09-06T1500-doc03-04-cycle2.md`

**Applier rules honoured:** four-backtick fences; every FIND verified to match **exactly once**
against the CURRENT files (which contain the transcribed v2.12.0 / v1.3.0 text); every FIND starts
at a line start and ends at the end of a whole line; every word a FIND consumes reappears in its
REPLACE **except** where the OP intent names the deletion (only OP 1, OP 9 and OP 15 delete, and
each names it).

**Sequencing note honoured:** Doc 03's `anon`-title disposition (OP 5) is written **before**
Doc 04 S5's carve-out (OP 16), and S5 **cites** Doc 03 as the copy authority rather than ruling.

**Ops:** 1–8 → Doc 03. 9–18 → Doc 04.

---

### OP 1 — docs/03-architecture-design-sdd.md — header: version 2.12.0 → 2.13.0, Status rewritten for rework cycle 1; DELETES the v2.12.0 Status narration (the five-Lows paragraph and the prior-verdict lines are restated in the replacement, and the v2.12.0 changelog entry retains the full narration)

FIND:
````
Version:       2.12.0
Status:        In Review — **FR-131 cascade (v2.12.0, 2026-09-06).** Routed in by Doc 06 v2.5.1
               §7 item 26(a) and artifacts/engineer-2026-09-05T1700.md (commit 0a5c542, merged to
               main in PR #19 as 84e2203), on the approver's direction (Rathish, 2026-09-06). The
               product code and Doc 09 v1.3.0 now state the FR-131 v1 truth; this document still
               carried the retired "votes are anonymous but not receipt-free" framing (§13) and
               the v2.7.0 ruling that the `ver` title "Verified — private" is FR-131-compliant in
               v1 (§10.12.3). Both are corrected here. Superseded text is retained and marked per
               the annotate-don't-delete convention, never silently deleted.
               **The five Lows carried from v2.11.2 ("fix first on any future touch") are ALL
               discharged on this touch:** (1) §16 **Q17**'s body no longer reads "exercises
               neither" — it reads "exercises none of the three" — and the v2.11.2 changelog's
               over-claim that Q17 was "corrected in both its title and body" is annotated in
               place as the over-claim it was; (2) the `Source:` pin is re-pinned from SRS
               v2.16.0 to **SRS v2.16.3** (Approved; no normative requirement text changed across
               the delta); (3) the changelog's "Still routed … Doc 02 §13 (h)" line is annotated
               as **discharged at Doc 02 v2.16.3**; (4) **§10.13.12**'s `Traces:` footer now
               annotates FR-107 as related-only and expressly **not** a DES assignment (Doc 08
               holds that Must row OPEN with DES = none); (5) **§10.13.3** now carries the
               DES-096 ballot-state-accessor clause that matches the §13 debt row already owning
               it. No Low is carried forward from v2.11.2.
               Prior verdict (superseded by this version, recorded for the trail): **Approved** —
               03-architecture-design-sdd-v2.11.2-technical-cycle4.md (PASS 95%, 0C/0H/0M/5L);
               the score sat AT the bar (95.05%), not above it.
````
REPLACE WITH:
````
Version:       2.13.0
Status:        In Review — **rework cycle 1 (v2.13.0, 2026-09-06)** against
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
````

---

### OP 2 — docs/03-architecture-design-sdd.md — changelog: insert the v2.13.0 entry above the v2.12.0 entry

FIND:
````
Change:        v2.12.0 (2026-09-06) — **FR-131 cascade: this document stops asserting the claim
               the rest of the project has already retired.** Minor bump — normative copy in a
````
REPLACE WITH:
````
Change:        v2.13.0 (2026-09-06) — **Rework cycle 1 against
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
````

---

### OP 3 — docs/03-architecture-design-sdd.md — §10.11: retire the affirmative "individual votes are private" in the conduct-vote quorum rationale (cycle-1 ISS-04)

FIND:
````
| Conduct-vote minimum quorum | 10% of eligible party members | Sets a floor that prevents a tiny faction from stigmatising a member; individual votes are private, aggregate public (FR-103) | Open Layer |
````
REPLACE WITH:
````
| Conduct-vote minimum quorum | 10% of eligible party members | Sets a floor that prevents a tiny faction from stigmatising a member; individual conduct-vote choices are **not published individually**, and the aggregate is public (FR-103) _(v2.13.0, cycle-1 ISS-04: this cell read "individual votes are private, aggregate public (FR-103)". In v1 the platform database **CAN** see individual choices — FR-131(b) — so "private" here meant **unpublished, not unseen**. This is internal design rationale, not product copy, so FR-131's ban does not bind it; it is corrected anyway, because this document's own diagnosis of the v2.7.0 title ruling is that a reader does not parse that distinction. The standing FR-131 sweep is widened from the five routed phrases to a **bare-word scan** of "private" / "anonymous" / "secure" in vote-adjacent prose.)_ | Open Layer |
````

---

### OP 4 — docs/03-architecture-design-sdd.md — §10.12.3: the normative note quoted one annotation as applying to both cells; quote both as they actually read (cycle-1 ISS-05)

FIND:
````
> **Normative note (v2.7.1 — ISS-03; scope extended from the subtitle to the TITLE at v2.12.0):** The table below is **informational reference copy** maintained per the annotate-don't-delete convention. The `ver` row preserves the v2 reference **title and** subtitle, each annotated "(v2 ZK backing only — see backing-aware copy below)." **Clause 7 (subtitle) and clause 9 (title) in the normative binding list below, together with the backing-aware sub-table, are the normative implementation spec for BOTH the `ver` title and the `ver` subtitle.** The v1 default `ver` title ("Verified") and the v1 default `ver` subtitle ("Your vote counts. How you voted is never made public.") do not appear in this table — they appear in the backing-aware sub-table. An engineer implementing `PrivacyStatus.tsx` MUST consult clauses 7 and 9 and the backing-aware sub-table; taking the `ver` row of this table as the implementation spec will produce an incorrect hardcoded v2 title and an incorrect hardcoded v2 subtitle, both of which those clauses expressly prohibit.
````
REPLACE WITH:
````
> **Normative note (v2.7.1 — ISS-03; scope extended from the subtitle to the TITLE at v2.12.0; quotations corrected at v2.13.0):** The table below is **informational reference copy** maintained per the annotate-don't-delete convention. The `ver` row preserves the v2 reference **title and** subtitle, each annotated as v2-ZK-backing-only, but the two annotations are **not the same string**: the subtitle cell carries "(v2 ZK backing only — see backing-aware copy below)" and the title cell carries the longer "(v2 ZK backing only — the v1 default title is "Verified"; see backing-aware copy below)". **Clause 7 (subtitle) and clause 9 (title) in the normative binding list below, together with the backing-aware sub-table, are the normative implementation spec for BOTH the `ver` title and the `ver` subtitle.** The v1 default `ver` title ("Verified") and the v1 default `ver` subtitle ("Your vote counts. How you voted is never made public.") do not appear in this table — they appear in the backing-aware sub-table. An engineer implementing `PrivacyStatus.tsx` MUST consult clauses 7 and 9 and the backing-aware sub-table; taking the `ver` row of this table as the implementation spec will produce an incorrect hardcoded v2 title and an incorrect hardcoded v2 subtitle, both of which those clauses expressly prohibit.
>
> _(v2.13.0, cycle-1 ISS-05: the v2.12.0 form of this note presented one annotation string as a quotation applying to "each" of the two cells. Only the subtitle cell carries that string. A quotation matching one of the two cells it claims to quote is a self-inconsistency in the one note whose job is to stop a reader taking the wrong cell as normative.)_
````

---

### OP 5 — docs/03-architecture-design-sdd.md — §10.12.3: add the missing `anon` TITLE banned-word disposition and revise the verdict to cover both cells (cycle-1 ISS-03, first half)

FIND:
````
**Verdict (revised).** Copy is compliant under the stated interpretive basis. Non-vote `anon` context disclosure gap addressed normatively via clause 8. No v1 subtitle variant required.
````
REPLACE WITH:
````
**`anon` TITLE banned-word disposition (v2.13.0 — added per cycle-1 ISS-03; the analysis that was missing).** The `anon` title is the bare word **"Anonymous"** — one of FR-131's four banned words — hardcoded in the same `STATE_CONFIG` of the same component as the `ver` title (`packages/ui/src/PrivacyStatus.tsx`). Until this version, this was the **only one of the three state analyses with no banned-word line at all**: the `pub` analysis states "No banned words" and the `ver` analysis devotes four paragraphs to one. v2.12.0 minted a normative rule that FR-131's ban reaches voting-adjacent **status** copy, and then dispositioned one of the two badge states that rule touches. That is the same shape as the defect v2.12.0 was written to correct, at component scale rather than cell scale.

**Disposition: COMPLIANT in v1 — the ban is not engaged.** The basis, stated explicitly rather than assumed: FR-131's closing sentence bans the four words where they **describe v1 voting behaviour**. The `anon` state renders only for **open-tier** users — phone-verified accounts without government-ID verification, the user class stated at the head of this analysis — who by **FR-122/FR-123 cannot cast a binding vote at all**. A badge on a user who cannot vote is not describing that user's voting behaviour; it names their **participation tier**. Clause 8's contexts are all non-vote by construction: browsing (screen 1.2), party-joining (1.6), endorsing (2.3).

**Why this is not the reading that was just overruled.** v2.7.0 ruled the `ver` title compliant because "private" described *status visibility* rather than voting behaviour, and that reading is OVERRULED above. This disposition is deliberately **narrower** and rests on a different fact: the `ver` badge renders for users who **can** vote, on the authenticated surfaces from which they vote, so the reasonable-member reading reaches the ballot; the `anon` badge renders only for users who cannot. **The distinction is the voter, not the word.** If that fact ever changes, this disposition falls with it — see the triggers below.

**What this disposition does NOT claim.** It does **not** claim the `anon` copy is fully truthful. Clause 8 expressly concedes that "Nothing you do here is linked to you" is **not literally true in v1**: the platform DB associates open-tier actions with the account; `phone_hash` is derivable to a phone number by an operator holding the KMS pepper; and in the India pilot that chain reaches a TRAI-registered real person (Doc 02 H-16, H-18; §10.13.7 T-01, T-02). That gap is a **disclosure** obligation, discharged by clause 8 — whose data-practices link is **still unbuilt** (owner: engineer, enrolment sprint) — and not an FR-131 banned-word question. Recording the compliance finding without also recording this concession would be exactly the tidier-than-the-record over-claim this document family has been marked down for.

**Re-open triggers — this disposition MUST be revisited if any of these holds:** (i) the `anon` badge ever renders on a vote-casting surface, or for any user who can cast a binding vote; (ii) FR-122/FR-123 change so that open-tier participation includes binding voting; (iii) FR-131 is amended to ban the four words unconditionally rather than "to describe v1 voting behaviour"; (iv) user research or an honesty review shows open-tier members read the badge as a claim about how their vote is handled. Trigger (iv) is the same standing condition the `anon` subtitle decision already carries.

**Downstream — the copy authority is here, and only here.** Doc 04 §0.5 **S5** is a **build-failing** denylist over `apps/web` and `packages/ui` user-facing strings forbidding any v1 string that asserts anonymity outside a DES-098 notice denying it; the shipped `STATE_CONFIG.anon.title` is exactly such a string, so S5 as written would fail the build on copy this section approves. Doc 04 v1.4.0 §0.5 S5 therefore carries a **named carve-out citing this disposition**. It cites; it does not rule. A copy ruling living anywhere other than the copy authority is precisely the v2.7.0 mistake.

**Verdict (revised — v2.13.0).** Copy is compliant under the stated interpretive basis, cell by cell: the `anon` **subtitle** is compliant under the interpretive basis stated above together with the clause-8 disclosure obligation, and the `anon` **title** is compliant with FR-131 on the basis and re-open triggers stated immediately above. Non-vote `anon` context disclosure gap addressed normatively via clause 8. No v1 subtitle variant required, and no v1 title variant required.
````

---

### OP 6 — docs/03-architecture-design-sdd.md — §10.13.6: the status-copy rule now names its own scope, cross-referencing both badge dispositions (cycle-1 ISS-03, second half)

FIND:
````
- MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour — in the notice, in any other v1 UI string, in the README, or in any public-facing material (FR-131 closing sentence, Doc 02 §4.45). **v2.12.0 clarification (normative):** this ban reaches voting-adjacent **status** copy, not only notice text. "private" may appear on a status badge **only** against a backing declaring `getProperties().unlinkable === true` (§10.12.3 clauses 7 and 9). The v2.7.0 "status visibility" carve-out is **overruled** — Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`; approver 2026-09-05. The four words MAY appear **negated** ("NOT anonymous", "NOT receipt-free") because FR-131(a) mandates exactly that phrasing; a blanket substring ban would fail the mandated text, which is why UT-0887 is negation-aware
````
REPLACE WITH:
````
- MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour — in the notice, in any other v1 UI string, in the README, or in any public-facing material (FR-131 closing sentence, Doc 02 §4.45). **v2.12.0 clarification (normative):** this ban reaches voting-adjacent **status** copy, not only notice text. "private" may appear on a status badge **only** against a backing declaring `getProperties().unlinkable === true` (§10.12.3 clauses 7 and 9). The v2.7.0 "status visibility" carve-out is **overruled** — Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`; approver 2026-09-05. The four words MAY appear **negated** ("NOT anonymous", "NOT receipt-free") because FR-131(a) mandates exactly that phrasing; a blanket substring ban would fail the mandated text, which is why UT-0887 is negation-aware. **v2.13.0 — the scope of that status reach, named rather than left open-ended (cycle-1 ISS-03):** exactly two DES-094 badge states carry copy containing a banned word, and **both are dispositioned in §10.12.3**, which is the copy authority for both — (a) **`ver`**: the title "Verified — private" and the v2 subtitle render **only** against `unlinkable === true`; the v1 defaults are "Verified" and "Your vote counts. How you voted is never made public." (clauses 7 and 9; the v2.7.0 ruling is marked SUPERSEDED there); (b) **`anon`**: the title "Anonymous" is **COMPLIANT in v1** — the state renders only for open-tier users who cannot cast a binding vote under FR-122/FR-123, so the badge describes a participation tier and not voting behaviour — with four recorded re-open triggers and the clause-8 disclosure gap conceded, not papered over. A rule that reaches status copy must say **which** status copy it reaches; these two are the whole set at v2.13.0, and any new badge state carrying one of the four words MUST be dispositioned in §10.12.3 before it ships
````

---

### OP 7 — docs/03-architecture-design-sdd.md — §15 v2.4.0 sub-table: replace the false "US layer: owed — PO to mint US" with the true state and the named residue (cycle-1 ISS-02)

FIND:
````
| FR-131 (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009) | DES-098 (v1 honesty notice) | Non-dismissable plain-language notice on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation); MUST NOT use "private", "anonymous", "receipt-free" **or "secure"** to describe v1 voting — all four words, per FR-131's closing sentence _(v2.12.0: this cell listed three of the four)_; the ban reaches voting-adjacent **status** copy as well as notice text (§10.12.3 clauses 7 and 9 — "private" on a status badge only against `unlinkable === true`); ADR-024 §(d); WCAG 2.2 AA (DES-081). US layer: owed — PO to mint US from FR-131 covering the SCR-13/SCR-14 notice surface. |
````
REPLACE WITH:
````
| FR-131 (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009) | DES-098 (v1 honesty notice) | Non-dismissable plain-language notice on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation); MUST NOT use "private", "anonymous", "receipt-free" **or "secure"** to describe v1 voting — all four words, per FR-131's closing sentence _(v2.12.0: this cell listed three of the four)_; the ban reaches voting-adjacent **status** copy as well as notice text (§10.12.3 clauses 7 and 9 — "private" on a status badge only against `unlinkable === true`, and clause `anon` disposition for "Anonymous"); ADR-024 §(d); WCAG 2.2 AA (DES-081). **US layer: `US-0134` EXISTS** (EP-06 ▸ FE-058; Doc 05 v2.5.0, Approved) and covers the SCR-13/SCR-14 notice surface; `TC-3481` is written against SCR-13/SCR-14 and is **Blocked pending those screens, not absent**. Residue — named, rather than asserted as an unminted US: US-0134's **Definition of Done is not met** (its FR-131 RTM row is OPEN — see the v2.12.0 sub-table below), and the DES-098 **acknowledge-to-proceed control is still unbuilt**. _(v2.13.0, cycle-1 ISS-02: this cell closed "US layer: owed — PO to mint US from FR-131 covering the SCR-13/SCR-14 notice surface" — false; US-0134 has carried the row since Doc 08 v2.2.0, 2026-08-25. The rest of the cell was edited at v2.12.0 and this sentence was left standing: the "fixes stopped at the section boundary" pattern this document's v2.11.1 changelog records as the lesson of that cycle, recurring inside an open cell.)_ |
````

---

### OP 8 — docs/03-architecture-design-sdd.md — §15 v2.12.0 sub-table: replace the false "FR-131 has no US/TC/RTM row yet" with the true OPEN state, and state the intended DES assignment for the tester (cycle-1 ISS-01, High)

FIND:
````
| FR-131(a) (the notice MUST state NOT anonymous, NOT receipt-free, NOT coercion-resistant); FR-131 closing sentence | **DES-098 aligned** (§10.13.6) — element clause (1) now carries all three denials by name; the banned-words bullet now covers voting-adjacent status copy and records the overruling; §13's "Public tallies in Phase 1" repayment cell now states the FR-131 truth instead of "Phase-1 votes are anonymous but not receipt-free" | Shipped copy: `apps/web/src/i18n/en.ts` `banner.notReceiptFreeTitle`/`Body` (+ `ar.ts` mirror), `packages/protocol/src/flags.js` `MACI_VOTING.description`, `packages/contracts/src/core/Governor.sol` NatSpec, `packages/sdk/src/client.js` `#tenureSignals`; guarded by **UT-0887**, **UT-0888**. **Still owed against DES-098** (unchanged by this version, carried openly): the **acknowledge-to-proceed control** on SCR-13 is not built — the banner is non-dismissable but has no acknowledgement step (US-0134); and FR-131 has **no `US`/`TC`/RTM row** yet |
````
REPLACE WITH:
````
| FR-131(a) (the notice MUST state NOT anonymous, NOT receipt-free, NOT coercion-resistant); FR-131 closing sentence | **DES-098 aligned** (§10.13.6) — element clause (1) now carries all three denials by name; the banned-words bullet now covers voting-adjacent status copy and records the overruling; §13's "Public tallies in Phase 1" repayment cell now states the FR-131 truth instead of "Phase-1 votes are anonymous but not receipt-free" | Shipped copy: `apps/web/src/i18n/en.ts` `banner.notReceiptFreeTitle`/`Body` (+ `ar.ts` mirror), `packages/protocol/src/flags.js` `MACI_VOTING.description`, `packages/contracts/src/core/Governor.sol` NatSpec, `packages/sdk/src/client.js` `#tenureSignals`; guarded by **UT-0887**, **UT-0888**. **Still owed against DES-098** (unchanged by this version, carried openly): the **acknowledge-to-proceed control** on SCR-13 is not built — the banner is non-dismissable but has no acknowledgement step (US-0134; Doc 06 v2.5.1 §7 item 26(d)). **The FR-131 chain is NOT absent — it is OPEN.** Doc 08 carries the FR-131 Must row `BR-005, BR-009 → FR-131 → EP-06 ▸ FE-058 ▸ US-0134` with sixteen TCs; the row is **OPEN (`G-PHASE3`)** at Doc 08 **v2.7.0 (Approved)** and remains OPEN at **v2.8.0 (In Review, 2026-09-06)**, which adds `TC-3564`…`TC-3569` for this drop. **`TC-3476`, `TC-3481` and `TC-3487` are Blocked** — `TC-3481` because SCR-13/SCR-14 are not built (Doc 06 §7 item 21). **DES assignment — stated so the tester can align rather than guess.** Doc 08's row assigns FR-131 → `DES-096 · ADR-024`; the architect's intended assignment is **DES-098** (the notice itself — the primary backing element, §10.13.6), **DES-094** (the status-badge copy that FR-131's closing sentence reaches, §10.12.3 clauses 7 and 9 and the `anon` disposition), with **DES-096** retained as the ballot seam the notice's cast path runs through. Routed to **Ji-woo Park (tester)**; **Doc 08 is the tester's document and is NOT edited from here**, and nothing in this cell should be read as having edited it. _(v2.13.0, cycle-1 ISS-01 (High): this cell previously closed "and FR-131 has **no `US`/`TC`/RTM row** yet" — false, contradicted by Doc 08 and self-contradicted by its own citation of US-0134 one clause earlier. The row has existed since Doc 08 v2.2.0, 2026-08-25. With Gate 2 approaching, a §15 register publishing "no RTM row" for a Must requirement that has an OPEN, evidence-bearing one is a material correctness defect, not a wording slip.)_ |
````

---

### OP 9 — docs/04-test-strategy-master-plan.md — header: version 1.3.0 → 1.4.0, Status rewritten for rework cycle 1; DELETES the v1.3.0 Status sentence "§0.5 S4/S5 needed no change — the honesty doctrine was already stated correctly there…" because it is the over-claim ISS-01 names (it is quoted back in the replacement and in the v1.3.0 changelog annotation at OP 13, so the record survives)

FIND:
````
Version:       1.3.0
Status:        In Review — **FR-131 cascade (v1.3.0, 2026-09-06).** Two statements in this plan
               asserted the retired "votes are anonymous but not receipt-free" framing —
               §8 `TS-ADV-02` case **A-02.6** and §13 **OPEN-01** — and both were false on both
               counts: v1 votes are **not** anonymous, and the `MACI_VOTING` flag description no
               longer says they are. Corrected here to the FR-131 truth, with the substantive
               point of each preserved unchanged: `FR-031`, `FR-032` and `NFR-003` remain **Must**
               guardrails that v1 does not deliver, `TS-ADV-02` still cannot pass in v1, and
               `OPEN-01` remains a Definition-B Gate-2 blocker. **ISS-10 (the Low carried from
               v1.2.0 and owed on the next touch) is discharged:** §22's architect Approvals row
               now describes this submission. §0.5 S4/S5 needed no change — the honesty doctrine
               was already stated correctly there, and it is the standard this correction applies.
               Prior verdict (superseded, recorded for the trail): **Approved** —
               04-test-strategy-master-plan-v1.2.0-technical-cycle3.md (PASS 98%, 0C/0H/0M/1L;
               reviewer: engineer, neutral, PM-assigned; loop trajectory 46% → 94% → 98% across
               cycles 1–3).
````
REPLACE WITH:
````
Version:       1.4.0
Status:        In Review — **rework cycle 1 (v1.4.0, 2026-09-06)** against
               artifacts/reviews/04-test-strategy-master-plan-v1.3.0-technical-cycle1.md
               (FAIL 89%; 0C/0H/2M/6L; reviewer: reviewer-qa, neutral, PM-assigned). Minor bump:
               a Medium finding makes a minor bump the floor.
               **ISS-01 + ISS-02 (both Medium) CLOSED — one defect with two halves.** §0.5 **S4**
               required testing FR-131's "required clauses **(a)–(e)**"; FR-131 (Doc 02 §4.45,
               Approved v2.16.3) enumerates **(a)**, **(b)**, **(c)**, **(d)** — four clauses.
               There is no (e). v1.3.0 found this, routed the *requirement* question to the
               product-owner — the correct instinct, since an architect must not invent or delete
               a requirement clause — and then published in this very block that "**§0.5 S4/S5
               needed no change — the honesty doctrine was already stated correctly there**".
               **Routing the question was acceptable; asserting the section was correct while
               knowing it was not, and leaving it un-annotated, was not.** That is the over-claim
               class this document family has repeatedly been marked down for, and it sat in a live
               status field, in the one section the tester reads next when minting the owed FR-131
               TC rows. **The true position, stated here and annotated at S4:** **S5 is unchanged
               and correct. S4 is unchanged in substance but carries a known discrepancy** — now
               annotated in place, routed to **Priya Raghunathan (product-owner)**, with the
               criterion reading **(a)–(d)** and testing the four clauses FR-131 actually states
               until she rules. A product-owner **proposal** for a clause (e) exists but is **NOT
               applied and awaits the approver**; this plan does not assume it and must not be read
               as pre-committing to it.
               **All six Lows taken on this touch rather than carried.** **ISS-03** — S4's fifth
               forbidden word *secret* is now labelled this plan's **own deliberate extension**
               beyond FR-131's four, so S4's five and §8's "four banned words" are reconciled on the
               page. **ISS-04** — `A-02.6` now separates what is **enforced today** (the content
               and word-ban halves: UT-0887/UT-0888/UT-0759) from the **placement** half that is
               owed pending SCR-13/SCR-14. **ISS-05** — Doc 05 re-pinned to **v2.5.0, Approved**,
               in the `Source:` block **and** in `OPEN-21`'s body. **ISS-06** — the Doc 09 pin now
               states the real position rather than a stale number. **ISS-07** — the `Owner:`
               parenthetical's Doc 03 citation is marked as the historical provenance it is.
               **ISS-08** — §0.5 **S5** now carries a named `anon`-title carve-out that **cites**
               Doc 03 v2.13.0 §10.12.3 as the copy authority; **sequenced after** Doc 03 ruled it,
               never invented here. **No Low is carried forward.**
               **Not re-opened.** What v1.3.0 got right and cycle 1 verified stands: `A-02.6` and
               `OPEN-01` are off the retired "votes are anonymous but not receipt-free" framing with
               their substantive findings intact — `FR-031`, `FR-032` and `NFR-003` remain **Must**
               guardrails v1 does not deliver, `TS-ADV-02` still cannot pass, `OPEN-01` remains a
               Definition-B Gate-2 blocker with unchanged owners; `ISS-10` stays discharged.
               Prior verdicts (superseded, recorded for the trail): **v1.3.0 FAIL 89%**
               (04-test-strategy-master-plan-v1.3.0-technical-cycle1.md); **v1.2.0 Approved** —
               04-test-strategy-master-plan-v1.2.0-technical-cycle3.md (PASS 98%, 0C/0H/0M/1L;
               reviewer: engineer, neutral, PM-assigned; loop trajectory 46% → 94% → 98% across
               cycles 1–3).
````

---

### OP 10 — docs/04-test-strategy-master-plan.md — `Owner:` block: mark the Doc 03 citation as historical provenance and re-pin it (cycle-1 ISS-07)

FIND:
````
               (CLAUDE.md assigns Doc 04 to the architect. Doc 03 v2.11.2 (Approved) names
                Ravi Deshmukh as Principal Architect; Doc 02 v2.16.3 (Approved) §2.7 names
````
REPLACE WITH:
````
               (CLAUDE.md assigns Doc 04 to the architect. Doc 03 — cited as v2.11.2 (Approved)
                when this line was written at v1.1.0, and **now v2.13.0 (In Review)**; the
                citation is the historical provenance of the owner name, not a version pin, and
                the `Source:` block below carries the live pin _(v1.4.0, cycle-1 ISS-07)_ — names
                Ravi Deshmukh as Principal Architect; Doc 02 v2.16.3 (Approved) §2.7 names
````

---

### OP 11 — docs/04-test-strategy-master-plan.md — `Source:` block: re-pin Doc 05 (ISS-05), Doc 09 (ISS-06) and Doc 03 (v2.13.0); set the FR-131 clause count

FIND:
````
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md **v2.16.3**, Approved 2026-08-30) —
               FR-131 §4.45 is the normative wording this plan tests against
               BKLG-TRUMOCRACY (docs/05-product-backlog.md **v2.3.0**, In Review — OPEN-21)
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md **v2.12.0**, In Review — the
               matching half of this same FR-131 cascade; re-pinned from v2.11.2 at v1.3.0)
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md **v2.5.1**, Approved — re-pinned from
               v2.4.3 at v1.3.0; v2.5.0/v2.5.1 carry the FR-131 code drop and UT-0759/0887/0888)
               TC-TRUMOCRACY (docs/07-test-cases-suites.md **v2.4.4**, Approved)
               REL-TRUMOCRACY (docs/09-release-notes.md **v1.3.0**) — `REL-LIM-18` / `ISS-03`,
               the defect this cascade closes
               ADR-001 … ADR-025 (docs/adr/ — 25 ADRs present, verified 2026-08-31)
````
REPLACE WITH:
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

---

### OP 12 — docs/04-test-strategy-master-plan.md — changelog: insert the v1.4.0 entry above the v1.3.0 entry

FIND:
````
Changelog:     2026-09-06 v1.3.0 — **FR-131 cascade.** Minor bump: normative test-criterion copy
               changes. Routed in with the Doc 03 v2.12.0 cascade from Doc 06 v2.5.1 §7 item
````
REPLACE WITH:
````
Changelog:     2026-09-06 v1.4.0 — **Rework cycle 1 against
               `artifacts/reviews/04-test-strategy-master-plan-v1.3.0-technical-cycle1.md`**
               (FAIL 89%; 0 Critical / 0 High / 2 Medium / 6 Low; reviewer: reviewer-qa, neutral,
               PM-assigned). Minor bump: a Medium finding makes a minor bump the floor. This entry
               describes only what changed.
               **ISS-01 + ISS-02 (Medium) CLOSED — §0.5 S4, and the claim this document made
               about it.** S4 required testing FR-131's "required clauses **(a)–(e)**"; FR-131
               (Doc 02 §4.45, Approved v2.16.3) has **(a)–(d)**, with (d) added at Doc 02 v2.12.0.
               v1.3.0 routed the requirement question to the product-owner and then asserted, in
               the Status block and in this changelog, that "§0.5 S4/S5 needed no change" and
               "Neither S4 nor S5 is changed". **The remedy for an unresolved question is to
               annotate it, not to leave the criterion asserting a range that does not exist** —
               and this plan's own house convention, applied more than ten times across the
               sibling document in the same session, is annotate-don't-delete. S4 is now
               annotated in place: the discrepancy is named, the authority is cited, the owner is
               **Priya Raghunathan (PO)**, and what governs meanwhile is stated — the criterion
               reads **(a)–(d)** and tests the four clauses FR-131 actually states. A PO
               **proposal** for a clause (e) exists but is **NOT applied and awaits the
               approver**; this plan does not assume it. A **tester note** is attached at S4:
               do not derive FR-131 TC rows from a five-clause reading. The v1.3.0 Status and
               changelog sentences are corrected and annotated rather than deleted.
               **ISS-03 (Low) CLOSED — S4's fifth forbidden word.** S4 scans five words (adding
               *secret*) while FR-131 bans four and §8 `A-02.6` says "The four banned words".
               A stricter superset is a legitimate test-strategy choice and cannot cause a false
               pass — but it was unlabelled, so the document said five in one place and four in
               another with nothing reconciling them, in the version whose subject is citation
               accuracy. *secret* is now labelled **this plan's own deliberate extension beyond
               FR-131**.
               **ISS-04 (Low) CLOSED — `A-02.6` over-reached on "Enforced today by".** All three
               cited tests exist and assert what was claimed, but they enforce the **content** and
               **word-ban** halves only. The **placement** half — "before the ballot is confirmed"
               — is not enforced today: UT-0887 renders `ReceiptFreedomBanner` at component level,
               SCR-13/SCR-14 are not built (Doc 06 §7 item 21), Doc 08 records `TC-3481` as
               **Blocked**, and Doc 03 v2.13.0 §15 records the DES-098 acknowledge-to-proceed
               control as unbuilt. The cell now splits enforced-today from owed, as Doc 03 §15
               does for the same facts.
               **ISS-05, ISS-06, ISS-07 (Low) CLOSED — header pin currency.** Doc 05 re-pinned
               **v2.3.0 (In Review) → v2.5.0 (Approved)** in the `Source:` block and in `OPEN-21`'s
               body (OPEN-21 itself remains live and correct on its merits — the no-story list must
               still be re-derived). Doc 09's pin now states the real position: last **Approved
               v1.4.0**, **v1.5.0 In Review** at this date with its cycle-1 FAIL at 93% and rework
               to v1.6.0 in progress, and v1.3.0 identified as where `REL-LIM-18` / `ISS-03` was
               recorded rather than as a pin. The `Owner:` parenthetical's "Doc 03 v2.11.2
               (Approved)" is marked as the historical provenance of the owner name and re-pinned
               to v2.13.0. **A `Source:` pin asserting a document is unapproved when it is
               Approved is a live status field, not narration** — which is why three Lows in one
               header block are recorded rather than waved through.
               **ISS-08 (Low) CLOSED — §0.5 S5's build-failing denylist vs the shipped `anon`
               title.** S5 forbids any v1 `packages/ui` string asserting anonymity outside a
               DES-098 notice; `PrivacyStatus` `STATE_CONFIG.anon.title` is the word "Anonymous",
               outside any notice — so S5 as written would fail the build on copy the design
               authority approves. S5 now carries **one named carve-out**, narrow and keyed to the
               `anon` state's two strings, **citing Doc 03 v2.13.0 §10.12.3's `anon` TITLE
               banned-word disposition** (the state renders only for open-tier users who cannot
               cast a binding vote under FR-122/FR-123). **Sequenced deliberately:** Doc 03 ruled
               first and this plan cites it. Writing a carve-out here that Doc 03 had not ruled
               would repeat, in the test plan, the v2.7.0 mistake of a copy ruling living
               somewhere other than the copy authority.
               **Not re-opened:** `A-02.6`'s and `OPEN-01`'s FR-131 corrections, and `ISS-10`'s
               discharge, were all verified in cycle 1 and stand.
               2026-09-06 v1.3.0 — **FR-131 cascade.** Minor bump: normative test-criterion copy
               changes. Routed in with the Doc 03 v2.12.0 cascade from Doc 06 v2.5.1 §7 item
````

---

### OP 13 — docs/04-test-strategy-master-plan.md — changelog: annotate the v1.3.0 entry's "Neither S4 nor S5 is changed" over-claim in place (cycle-1 ISS-01, second half)

FIND:
````
               **Why this is a cascade and not a new opinion:** §0.5 **S4** and **S5** already
               stated the correct rule — no v1 surface may claim anonymity, unlinkability,
               receipt-freeness, coercion resistance, one-person-one-vote or zero-knowledge except
               inside a DES-098 notice denying it, build-failing. A-02.6 and OPEN-01 were this
               plan failing its own S5. Neither S4 nor S5 is changed.
````
REPLACE WITH:
````
               **Why this is a cascade and not a new opinion:** §0.5 **S4** and **S5** already
               stated the correct rule — no v1 surface may claim anonymity, unlinkability,
               receipt-freeness, coercion resistance, one-person-one-vote or zero-knowledge except
               inside a DES-098 notice denying it, build-failing. A-02.6 and OPEN-01 were this
               plan failing its own S5. Neither S4 nor S5 is changed.
               _(v1.4.0 correction to this historical entry, cycle-1 ISS-01: **the claim about S4
               was an over-claim and the author knew it when it was written** — the session note
               `artifacts/architect-2026-09-06T1000-fr131-cascade.md` §6 item 4 records the
               "(a)–(e)" discrepancy as found and routed before this entry was published. **S5 was
               and is correct and unchanged. S4 was not correct**: it cited a clause range FR-131
               does not have. The sentence "Neither S4 nor S5 is changed" was true of the text and
               false as a statement of correctness, which is exactly the distinction the over-claim
               class turns on. S4 is annotated and its range corrected to (a)–(d) at v1.4.0.)_
````

---

### OP 14 — docs/04-test-strategy-master-plan.md — §0.5 S4: correct the clause range to (a)–(d), label *secret* as this plan's own extension, and annotate both in place (cycle-1 ISS-02 + ISS-03)

FIND:
````
**S4 — Disclosure copy is asserted verbatim, not paraphrased.** The DES-098 notice (`FR-131`) MUST
be tested for: presence before confirmation; non-dismissability; WCAG 2.2 AA (DES-081);
screen-reader operability; the required clauses (a)–(e); and a **forbidden-word scan** — the notice
and every v1 voting surface MUST NOT use *private*, *anonymous*, *receipt-free*, *secret* or
*secure* to describe v1 voting behaviour. Clause (d) (the blocked-counting-action disclosure for
open-tier participants, Doc 02 H-19) is tested at **every** surface that can block a counting
action, not only the first one built.
````
REPLACE WITH:
````
**S4 — Disclosure copy is asserted verbatim, not paraphrased.** The DES-098 notice (`FR-131`) MUST
be tested for: presence before confirmation; non-dismissability; WCAG 2.2 AA (DES-081);
screen-reader operability; the required clauses **(a)–(d)**; and a **forbidden-word scan** — the
notice and every v1 voting surface MUST NOT use *private*, *anonymous*, *receipt-free* or
*secure* to describe v1 voting behaviour, and this plan's scan additionally forbids *secret* as a
deliberate extension of its own (see the note below). Clause (d) (the blocked-counting-action
disclosure for open-tier participants, Doc 02 H-19) is tested at **every** surface that can block a
counting action, not only the first one built.

> _(v1.4.0 — cycle-1 ISS-02 and ISS-03; annotated in place rather than silently rewritten.)_
> **Clause range.** This criterion read "the required clauses **(a)–(e)**". **FR-131**
> (`docs/02-requirements-srs.md` §4.45, Approved **v2.16.3**) enumerates **(a)**, **(b)**, **(c)**
> and **(d)** — four lettered clauses, (d) added at Doc 02 v2.12.0. **There is no (e).** Whether
> "(e)" named a clause that was never minted, or was a typo for (d), is a **requirement question**
> and not the architect's to answer: inventing or deleting a requirement clause from a test plan
> would be a worse defect than the one it fixed. It is **routed to Priya Raghunathan
> (product-owner)**. A product-owner **proposal** for a clause (e) exists but is **NOT applied and
> awaits the approver** — this plan does not assume it, and this note MUST NOT be read as
> pre-committing to it. **Until the PO rules, this criterion tests the four clauses FR-131 actually
> states**, which is why the range now reads (a)–(d). **Tester note (Ji-woo Park):** do **not**
> derive FR-131 TC rows from a five-clause reading — FR-131 §4.45 is the normative wording, and
> FR-131's Doc 08 Must row is OPEN with TC mints owed, so this is the live risk. If a clause (e) is
> later ruled in, this criterion and the TCs derived from it are re-cut together.
> **Forbidden-word list.** FR-131's closing sentence bans **four** words — *private*, *anonymous*,
> *receipt-free*, *secure*. This plan's scan adds a fifth, ***secret***, as **its own deliberate
> extension**: a stricter superset cannot cause a false pass, and *secret* is the plainest synonym
> a copywriter reaches for. It is labelled here so the list is not read as a mis-citation of
> FR-131, and so this criterion's five and §8 `A-02.6`'s "four banned words" are reconciled on the
> page rather than left to contradict each other.
````

---

### OP 15 — docs/04-test-strategy-master-plan.md — §0.5 S5: add the named `anon`-title carve-out, citing Doc 03 v2.13.0 as the copy authority (cycle-1 ISS-08; sequenced after OP 5). DELETES nothing from S5's normative text — the carve-out is additive and narrows only the two named strings

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

> **Named carve-out — the `anon` participation-tier badge** _(v1.4.0, cycle-1 ISS-08)_.
> `packages/ui/src/PrivacyStatus.tsx` `STATE_CONFIG.anon.title` is the word **"Anonymous"** and its
> subtitle is "Nothing you do here is linked to you", both outside any DES-098 notice — so S5 as
> written above would **fail the build on copy the design authority approves**. The scan MUST
> therefore carry **exactly one** named exception: the `anon` state's title and subtitle in the
> DES-094 PrivacyStatus component. **The basis is Doc 03's, not this plan's.** Doc 03 **v2.13.0
> §10.12.3, "`anon` TITLE banned-word disposition"**, rules the title COMPLIANT in v1 because the
> `anon` state renders only for open-tier users who **cannot cast a binding vote** (FR-122/FR-123),
> so the badge names a participation tier and makes no claim about v1 voting behaviour. **This plan
> cites that disposition; it does not make one** — a copy ruling living anywhere other than the
> copy authority is the v2.7.0 mistake, and repeating it in the test plan would be worse than
> leaving the scan over-broad. **Narrow and keyed:** the exception covers those two strings in that
> one component and lapses automatically if any of Doc 03's four recorded re-open triggers fires
> (the badge rendering on a vote surface or for a user who can vote; FR-122/FR-123 changing; an
> unconditional FR-131 amendment; contrary user research). **Everything else stays in scope**, and
> the `ver` title stays in scope in **both** directions: "Verified — private" is permitted **only**
> against `unlinkable === true` (Doc 03 §10.12.3 clauses 7 and 9), and the scan MUST NOT relax
> that. Note also that Doc 03's disposition **concedes** the `anon` subtitle is not literally true
> of the operator in v1 — that is a clause-8 disclosure obligation with an unbuilt link, tracked
> there and not answered by this carve-out.
````

---

### OP 16 — docs/04-test-strategy-master-plan.md — §8 `A-02.6`: split what is enforced today from the placement half that is owed (cycle-1 ISS-04)

FIND:
````
| A-02.6 Flag-state disclosure | `MACI_VOTING` is off (its production default) | The UI states, before the ballot is confirmed, that the vote is cast through conventional authentication and is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**; that the platform database **CAN** see vote direction and party membership; and that the cryptographic private ballot arrives with the Definition-B (v2) privacy layer — `FR-131`(a)/(b)/(c) via `DES-098`. The four banned words ("private", "anonymous", "receipt-free", "secure") appear **only negated**, never as a claim. Enforced today by `UT-0887` (rendered banner, negation-aware), `UT-0888` (flag description) and `UT-0759` (the `ver` badge title renders "Verified — private" only against `unlinkable === true`). **This does not satisfy `FR-031`/`FR-032`/`NFR-003`, which are Must. Recorded as OPEN-01.** _(v1.3.0: this cell read "The UI states that votes are anonymous but **not** receipt-free — the flag's own description requires it." False on both counts — v1 votes are not anonymous, and the flag description no longer says they are. FR-131's closing sentence forbids the claim outright. Corrected per Doc 09 v1.3.0 `REL-LIM-18`; approver 2026-09-05.)_ |
````
REPLACE WITH:
````
| A-02.6 Flag-state disclosure | `MACI_VOTING` is off (its production default) | The UI states, before the ballot is confirmed, that the vote is cast through conventional authentication and is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**; that the platform database **CAN** see vote direction and party membership; and that the cryptographic private ballot arrives with the Definition-B (v2) privacy layer — `FR-131`(a)/(b)/(c) via `DES-098`. The four banned words ("private", "anonymous", "receipt-free", "secure") appear **only negated**, never as a claim. **Enforced today — the content and word-ban halves only:** `UT-0887` (rendered banner, negation-aware), `UT-0888` (flag description) and `UT-0759` (the `ver` badge title renders "Verified — private" only against `unlinkable === true`). **Owed, NOT enforced today — the placement half:** "before the ballot is confirmed" is asserted nowhere, because SCR-13/SCR-14 are not built (Doc 06 §7 item 21); UT-0887 renders `ReceiptFreedomBanner` directly at component level; Doc 08 records `TC-3481` — the SCR-13/SCR-14 case — as **Blocked**; and Doc 03 v2.13.0 §15 records that DES-098's acknowledge-to-proceed control is unbuilt. **This does not satisfy `FR-031`/`FR-032`/`NFR-003`, which are Must. Recorded as OPEN-01.** _(v1.3.0: this cell read "The UI states that votes are anonymous but **not** receipt-free — the flag's own description requires it." False on both counts — v1 votes are not anonymous, and the flag description no longer says they are. FR-131's closing sentence forbids the claim outright. Corrected per Doc 09 v1.3.0 `REL-LIM-18`; approver 2026-09-05. **v1.4.0, cycle-1 ISS-04:** v1.3.0 then wrote "Enforced today by" across all three halves; the three tests are real and assert what is claimed, but none of them tests placement.)_ |
````

---

### OP 17 — docs/04-test-strategy-master-plan.md — §13 `OPEN-21`: re-pin Doc 05 to v2.5.0 (Approved) in the finding body (cycle-1 ISS-05, second location)

FIND:
````
| **OPEN-21** _(new v1.1.0)_ | §1.3's "features not to be tested at v1" list is derived from **Doc 05 v1.0.0** §12 and Doc 05 is now at **v2.3.0 (In Review)**. Separately, `FR-050` has since been raised from Should to **Must** (Doc 02 §11, BR-019) and must not be carried forward as a Should by inheritance | The no-story list must be re-derived at the next backlog version before it is used to justify an RTM row being non-Must | Priya Raghunathan |
````
REPLACE WITH:
````
| **OPEN-21** _(new v1.1.0)_ | §1.3's "features not to be tested at v1" list is derived from **Doc 05 v1.0.0** §12 and Doc 05 is now at **v2.5.0 (Approved)** _(v1.4.0, cycle-1 ISS-05: this read "v2.3.0 (In Review)"; the staleness makes the finding **more** live, not less — the list is now five minor versions behind an **Approved** backlog)_. Separately, `FR-050` has since been raised from Should to **Must** (Doc 02 §11, BR-019) and must not be carried forward as a Should by inheritance | The no-story list must be re-derived at the next backlog version before it is used to justify an RTM row being non-Must | Priya Raghunathan |
````

---

### OP 18 — docs/04-test-strategy-master-plan.md — §22 Approvals: architect row now describes the v1.4.0 submission (the same defect class as the discharged ISS-10; kept current rather than re-earned)

FIND:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-06 | **v1.3.0, Status: In Review.** FR-131 cascade — `A-02.6` and `OPEN-01` corrected off the retired "votes are anonymous but not receipt-free" framing; `ISS-10` (carried from v1.2.0) closed by this row. _(Row history: **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which is the defect this update closes. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
````
REPLACE WITH:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-06 | **v1.4.0, Status: In Review.** Rework cycle 1 against the v1.3.0 technical review (FAIL 89%; 0C/0H/2M/6L): §0.5 S4's clause range corrected to (a)–(d) and annotated with the PO routing; the S4/S5 correctness over-claim withdrawn from the Status block and annotated in the v1.3.0 changelog entry; all six Lows taken rather than carried. _(Row history: **v1.3.0** was submitted 2026-09-06 — the FR-131 cascade that corrected `A-02.6` and `OPEN-01` off the retired "votes are anonymous but not receipt-free" framing and closed `ISS-10`; cycle 1 verified both corrections and they are not re-opened. **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which v1.3.0 closed; keeping this row current at every version is the standing discipline that Low bought. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
````

---

## End of spec — 18 operations (8 on Doc 03, 10 on Doc 04)
