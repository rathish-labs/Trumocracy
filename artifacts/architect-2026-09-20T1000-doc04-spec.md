# Anchored FIND/REPLACE spec — docs/04-test-strategy-master-plan.md v1.6.0 (Approved) → v1.7.0 (In Review)

```
Author:        architect (Ravi Deshmukh — Principal Architect; owning role for Docs 03 and 04)
Date:          2026-09-20
Session:       Debt-closure — artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md,
               row 3. Doc 03 v2.14.0 RULES on `OPEN-27` (it is the copy authority); this
               document RECORDS the outcome where `OPEN-27` is registered, at every site.
Target:        docs/04-test-strategy-master-plan.md
From:          v1.6.0, Status: Approved
To:            v1.7.0, Status: In Review (neutral reviewer: tester, Ji-woo Park — recorded by
               the PM before dispatch in the review-assignment record above)
Operations:    15
Companion:     artifacts/architect-2026-09-20T1000-doc03-spec.md (Doc 03 v2.13.0 → v2.14.0).
               APPLY THE DOC 03 SPEC FIRST. This document cites Doc 03 v2.14.0's ruling as an
               existing fact; applying this one first would make it assert a state that does not
               yet exist — the exact defect Doc 02 v2.17.2 FAILed on (cycle-1 ISS-01).
Applied by:    the project-manager's applier. I hold Write but NOT Edit and have not touched
               docs/ at all.
```

## How to apply

1. Apply the operations **in order**. Each `FIND` must match **exactly once**. If any `FIND`
   matches 0 or 2-or-more times, **refuse the whole spec** and return it to me — do not partially
   apply.
2. A `FIND` is **whole lines, start to end**. Never a prefix of a line.
3. **OPERATIONS ANCHORED ON VERY LONG SINGLE-LINE TABLE ROWS — DOUBLE-CHECK THESE TWO.** Each is
   one markdown table row of **several thousand characters** on a single line. A prefix is not a
   match and the applier will correctly refuse the spec. Compare character-for-character:
   - **OP 14** — §13 `OPEN-27` row (line 2360, ~4,700 characters).
   - **OP 15** — §22 architect Approvals row (line 2656, ~4,600 characters).
   This exact failure cost OP 19 a round on 2026-09-06; it is called out here for that reason.
4. **Sentences that wrap across lines.** OPs 2, 7, 11, 12 and 13 anchor on multi-line paragraphs
   whose sentences begin or end mid-line. Every `FIND` starts at a line start and ends at the end
   of a block-level unit, so no sentence is split — but reproduce the line breaks exactly. OP 20
   failed on 2026-09-06 on precisely this.
5. Nothing is deleted. Superseded text is retained verbatim and marked in place.
6. Line numbers below are v1.6.0 line numbers, given as a locating aid only. The `FIND` text is
   authoritative.

## What this version does, and what it deliberately does not

**Does.** Records the `OPEN-27` outcome at **every** site that carries it — §0.5 S5's named
carve-out (banner + tail), S5 rule 4's count, S4's scope-before-count sentence, §1.4's status
roll-call, §13's gate-blocking bullets, §13's `OPEN-27` row, §22's Approvals row and the
`Source:` block's Doc 03 pin. **Doc 03 v2.14.0 rules both `anon` strings NOT COMPLIANT in v1**,
so **S5's named carve-out is WITHDRAWN, not narrowed** — and S5's count drops from **two
carve-outs to one**. Leaving §13 asserting an open item that Doc 03 has closed, or leaving the
carve-out alive at four of five sites, is exactly the "a correction that did not reach every
place it claimed to reach" defect this family has FAILed on repeatedly; a **build-failing** scan
quietly not failing is its worst form. `OPEN-27` is **CLOSED**; three successor items are minted
— **`OPEN-28`** (implementation before first mount), **`OPEN-29`** (the newly-in-scope screen-3.6
wireframe copy, named and routed, not ruled) and **`OPEN-30`** (the carried §14 reconciliation).
Also folds the **three Lows carried from the v1.6.0 cycle-2 review**: **ISS-07** fixed (Doc 06
re-pinned), **ISS-09** discharged by supersession (the sentence it concerns is now a retained
historical record), **ISS-08** explicitly **deferred with a named trigger and an owner**, not
silently dropped — see OP 1 and `OPEN-30`.

**Does not.** `OPEN-20` (the `TS-PROPOSALS` §2-vs-§5.6 heading disagreement — the tester's) is
**not re-opened** and stays a v1 Gate-2 blocker. The clause-(e) substance the v1.6.0 review
instructed must not be re-opened is **not re-opened**: S4's (a)–(d) notice range and its five
refusals of a fifth notice clause, S5's four rules and the claims test, the verification path
(UT-0889 / UT-0869 / inspection), `OPEN-01`, §0.6's 4 / 2 / 7 buckets, every test status and
`A-02.6` are untouched. **§14's `TC` register is NOT touched**: the tester is minting from
**TC-3577** in parallel this session (Doc 07 → v2.9.0, Doc 08 → v2.12.0), and this document does
not pin a number it cannot see settle. Consistently with that, **this version does not advance
§14's Doc 07 *reconciliation* pin** — which is why §14's standing instruction ("any future
version that advances the Doc 07 pin MUST re-read this table against Doc 07 §2 in the same
touch") is **not** tripped. The *bibliographic* pins in `Source:` and §1.4 do move to HEAD; the
two kinds of pin are different statements and are kept apart, exactly as clause (e)'s **origin**
and **currency** are. **No `TC`, `UT` or `US` is minted, renumbered or reused; no test status is
upgraded; no product code is written or edited.**

---

### OP 1 — Header: version and status

FIND:
````
Version:       1.6.0
Status:        Approved — 04-test-strategy-master-plan-v1.6.0-technical-cycle2.md (PASS 96%, 0C/0H/0M/3L; reviewer: reviewer-qa, neutral,
````
REPLACE WITH:
````
Version:       1.7.0
Status:        In Review — v1.7.0 (2026-09-20). **`OPEN-27` is CLOSED, and this document records
               the outcome at every site that carried it.** Neutral reviewer assigned by the
               project-manager **before dispatch**: **tester** (Ji-woo Park, new instance), per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md — which records the
               grounds (owns neither Doc 03 nor Doc 04; holds Bash and can verify the
               `PrivacyStatus.tsx` claims against the code at HEAD) and the exclusions (architect
               — owner; engineer — built the component under ruling). It also records, for the
               avoidance of doubt, that §13 assigns the tester `OPEN-20` as an action item and
               that **being assigned an item is not authorship**; `OPEN-20` is untouched by this
               session. Cycle 1 of a fresh loop; the v1.6.0 lineage closed PASS at 96%.
               Minor bump: a normative test-criterion scope change — a **build-failing** carve-out
               is withdrawn.
               **THE RULING THIS VERSION RECORDS (it is Doc 03's, not this plan's).** Doc 03
               **v2.14.0 §10.12.3** — the copy authority — re-examined the DES-094 `anon` **title
               and subtitle** against **FR-131 clause (e)** (Doc 02 **v2.17.3** §4.45; §8
               Scenarios 8 and 9) and ruled **both NOT COMPLIANT in Definition-A (v1)**. The
               v2.13.0 `anon` TITLE disposition and the 2026-08-25 subtitle no-change decision are
               **SUPERSEDED in place**; Doc 03's new **clause 10** specifies the v1 variants —
               title "Open tier", and a **context-selected** subtitle over clause 8's three
               contexts with a **fail-honest default** — in the same normative form clauses 7 and
               9 specify the `ver` copy. **This plan does not repeat the ruling and does not
               reason it; it cites it**, which is the whole point of `OPEN-27` having been routed
               rather than answered here.
               **CONSEQUENCE FOR §0.5 S5 — THE CARVE-OUT IS WITHDRAWN, NOT NARROWED.** Doc 03 no
               longer approves the two `anon` strings, so **S5 has nothing left to carve out**.
               The strings at `packages/ui/src/PrivacyStatus.tsx:251-252` are now **inside** S5's
               scope and **failing it**, recorded as a **ruled, remediation-pending failure**
               (`OPEN-28`), **not** as an exception. **S5's count therefore drops from "two
               carve-outs, and only two" to ONE** — clause (a)'s mandated negated forms, which is
               unchanged, still guards `UT-0887`, and is the only exception that survives. S4's
               count of **one within S4's scope** is unchanged; what changes is the sentence that
               points at S5's second exception, because there is no longer a second. **Both
               counts are re-cut together**, because the v1.6.0 cycle-1 ISS-05 finding was
               precisely that a count stated without its scope invites mis-application.
               **NOT A BUILD FAILURE TODAY, AND THE DOCUMENT SAYS SO RATHER THAN LEAVING IT TO BE
               ASSUMED.** The `packages/ui` string scan S5 specifies **is not implemented**: the
               guards that exist — `UT-0869`, `UT-0887`, `UT-0889`, `UT-0759` — are scoped to
               `apps/web` i18n strings and to the `ver` state. And `PrivacyStatus` is mounted on
               **no shipped surface** (six explicit non-render comments across five consuming
               files, re-verified by Doc 09 **v1.9.0**; Doc 06 **v2.8.1** §7 item 18), so **no
               citizen sees either string**. `OPEN-28` is therefore **owed, not gate-blocking
               today**, and becomes a **v1 Gate-2 blocker** the moment a mount is scheduled —
               inheriting `OPEN-27`'s own trigger wording unchanged.
               **`OPEN-27` CLOSED; THREE SUCCESSORS MINTED.** **`OPEN-28`** — implement Doc 03
               clause 10 and satisfy all five conditions of its render trigger before first mount
               (Samuel Oyelaran, with Ji-woo Park for the `UT`/`TC`). **`OPEN-29`** — Doc 03
               clause 6's screen-3.6 wireframe copy ("…stays anonymous forever. It is never linked
               to your new public identity"), **newly in clause-(e) scope, named and routed, NOT
               ruled**, and **not a shipped string** (Ravi Deshmukh, next Doc 03 increment).
               **`OPEN-30`** — the carried §14 reconciliation, below. No `OPEN-##` is renumbered or
               reused; `OPEN-30` is the new high-water mark.
               **THE THREE CARRIED LOWS FROM THE v1.6.0 CYCLE-2 REVIEW, TAKEN EXPLICITLY.**
               **ISS-07 — FIXED.** The Doc 06 pin read "v2.7.0, In Review; last Approved v2.5.1";
               Doc 06 is **v2.8.1 (Approved)** at HEAD and is re-pinned at both live locations
               (`Source:` and §1.4). The third location the report named — the Status block — is
               now a **retained historical record** of v1.6.0 and is correctly left verbatim.
               **ISS-09 — DISCHARGED BY SUPERSESSION, and stated rather than quietly dropped.**
               It concerned a v1.6.0 Status sentence ("No word changed by the re-wrap itself")
               that was a shade broader than the operation. That sentence is now a retained
               historical record, not a live claim; and this version's own status block states
               plainly what it changes. **ISS-08 — DEFERRED, with a named trigger, an owner and an
               id; NOT silently dropped.** It asks that §14 record **TC-3570–TC-3575** under
               `TS-ADV-01…16` and re-narrow the `TS-V1-*` floor once the Doc 07 pin advances to an
               **Approved** version. Doc 07 is now **v2.8.1 Approved** — but it is being
               incremented to **v2.9.0 by the tester in this same session, from TC-3577**, so a
               register reconciled today would be stale before the session closed. **This version
               therefore does not touch §14 and does not advance §14's *reconciliation* pin**, so
               §14's standing instruction is not tripped. Tracked as **`OPEN-30`**, owner Ravi
               Deshmukh, trigger: the first touch of this document after **Doc 07 v2.9.0 is
               Approved**. Recording the deferral with a trigger is the honest form; reconciling
               against an in-flight document is the cycle-1 Medium in a new costume.
               **PINS SWEPT TO HEAD BEFORE SUBMISSION, and their currency stated honestly.** Doc 02
               **v2.17.3 (Approved)** — clause (e)'s normative text **unchanged** since it entered
               at **v2.17.0**; origin and currency are kept apart throughout. Doc 03 **v2.14.0 (In
               Review)**, the matching half of this same closure, last Approved **v2.13.0**.
               Doc 05 **v2.5.0 (Approved)**. Doc 06 **v2.8.1 (Approved**, three Lows carried
               there**)**. Doc 07 **v2.8.1** and Doc 08 **v2.11.3**, both **Approved at HEAD and
               both being incremented by the tester in this same session** (to v2.9.0 and v2.12.0)
               — cited as Approved-and-in-flight, and **no statement in this version depends on
               their in-flight content**. Doc 09 **v1.9.0 (Approved)**.
               **NOT RE-OPENED.** `OPEN-20` stays live and gate-blocking on its surviving
               `TS-PROPOSALS` half; §13's Definition-A blocker bullet is correct and deliberately
               untouched. The clause-(e) substance the v1.6.0 review instructed must not be
               re-opened is untouched: S4's **(a)–(d)** notice range and its five refusals of a
               fifth notice clause; S5's **four rules** and the claims test; the verification path
               (UT-0889 / UT-0869 / inspection); `OPEN-01`; §0.6's 4 / 2 / 7 buckets; every test
               status; `A-02.6`; §11.2. **§14 is untouched.** **No `TC`, `UT` or `US` is minted,
               renumbered or reused; no test status is upgraded; no product code is written or
               edited.**
               _(v1.6.0 record, retained verbatim per annotate-don't-delete — its three carried
               Lows are taken above:)_
               Approved — 04-test-strategy-master-plan-v1.6.0-technical-cycle2.md (PASS 96%, 0C/0H/0M/3L; reviewer: reviewer-qa, neutral,
````

---

### OP 2 — `Source:` block: the whole Doc 02 pin cell re-cut to v2.17.3

**Multi-line block, 21 lines. The `FIND` begins at the `Source:` label and ends at the close of the retained v1.6.0 Revision-2 annotation, so no sentence is split. Reproduce the line breaks exactly.**

FIND:
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
REPLACE WITH:
````
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md **v2.17.3, Approved** —
               02-requirements-srs-v2.17.3-business-cycle2.md, PASS 96%, ten Lows carried there;
               last updated 2026-09-08) — FR-131 §4.45 is the normative wording
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
               _(v1.7.0, 2026-09-20 — the **pin** is re-cut again; the sentence above is still
               not, and the superseded pin is retained here rather than deleted. It read:
               "**v2.17.1, Approved** 2026-09-06 — 02-requirements-srs-v2.17.1-business-cycle2.md,
               PASS 96%; clause (e) entered at **v2.17.0** and is **unchanged** at v2.17.1, which
               adds **§8 Scenarios 8 and 9**, the Gherkin the owed clause-(e) `TC` rows trace to;
               last Approved **v2.16.3**, 2026-08-30". Two things in it were overtaken and are
               corrected together rather than one at a time. **(1) Currency:** Doc 02 is now
               **v2.17.3 (Approved)**; **clause (e)'s normative text is unchanged at v2.17.1,
               v2.17.2 and v2.17.3**, so every clause-(e) citation in this plan holds against
               any of them, and **§8 Scenarios 8 and 9 — added at v2.17.1 — are unchanged and
               remain the Gherkin the owed clause-(e) `TC` rows trace to**. **(2) The stale
               "last Approved v2.16.3" clause**, which was true relative to the v2.17.0/v2.17.1
               window and is not true now: Doc 02's approved lineage has continued
               **v2.17.1 → v2.17.2 → v2.17.3**. It is dropped from the live sentence and quoted
               here instead, which is the only deletion in this operation and is named as such.
               **Origin and currency remain different statements and remain kept apart** — that
               discipline is why the "At v2.17.0 it enumerates…" sentence above is left exactly
               as written, twice now. This pin matters more at v1.7.0 than it has before: **Doc 03
               v2.14.0 rules `OPEN-27` against clause (e)**, so the version of Doc 02 this plan
               pins is the version that ruling is measured against.)_
````

---

### OP 3 — `Source:` block: Doc 03 pin re-cut to v2.14.0 and the routing annotation closed

FIND:
````
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md **v2.13.0**, **Approved** — the
               matching half of this same FR-131 cascade, reworked in the same cycle; re-pinned
               from v2.12.0 at v1.4.0, and from v2.11.2 at v1.3.0) _(v1.5.0: the status half of
               this pin read "In Review"; v2.13.0 passed its cycle-2 technical review at 97% and
               is Approved. **No Doc 03 statement is falsified by FR-131 clause (e)** — the
               §10.12.3 `anon`-badge question that clause (e) does raise is routed as
               **OPEN-27**, not decided here.)_
````
REPLACE WITH:
````
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md **v2.14.0**, **In Review** —
               last **Approved v2.13.0** (PASS 97%). **v2.14.0 is the matching half of this
               closure**: it is the increment that answers `OPEN-27`, and it is In Review in this
               same session under the same neutral reviewer. Re-pinned from v2.13.0 at v1.7.0,
               from v2.12.0 at v1.4.0, and from v2.11.2 at v1.3.0) _(v1.7.0 — **the routed
               question is ANSWERED, and the v1.5.0 annotation below is superseded on its last
               clause only.** That note said the `anon`-badge question "is routed as **OPEN-27**,
               not decided here". It is now **decided — in Doc 03 v2.14.0 §10.12.3, which is the
               copy authority, exactly as `OPEN-27` required and exactly not here**. The ruling:
               **both** the `anon` title "Anonymous" **and** the `anon` subtitle "Nothing you do
               here is linked to you" are **NOT COMPLIANT in Definition-A (v1)** under FR-131
               clause (e); the v2.13.0 TITLE disposition and the 2026-08-25 subtitle decision are
               SUPERSEDED in place; Doc 03's new **clause 10** specifies the v1 variants,
               context-selected with a fail-honest default. **The rest of the v1.5.0 note stands
               and is not superseded:** no Doc 03 statement was *falsified* by clause (e) —
               clause (e) widens a ban and narrows nothing, so every v2.12.0 / v2.13.0 `ver`
               ruling holds a fortiori. What clause (e) did was make two `anon` dispositions
               **unsound on their own stated basis**, which is a different thing, and is why a
               fresh look was owed rather than a lapse declared. Retained below, not deleted:)_
               _(v1.5.0: the status half of
               this pin read "In Review"; v2.13.0 passed its cycle-2 technical review at 97% and
               is Approved. **No Doc 03 statement is falsified by FR-131 clause (e)** — the
               §10.12.3 `anon`-badge question that clause (e) does raise is routed as
               **OPEN-27**, not decided here.)_
````

---

### OP 4 — `Source:` block: Doc 06 pin re-cut to v2.8.1 (v1.6.0 carried Low ISS-07, location 1 of 2)

FIND:
````
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md — **v2.7.0, In Review**; last
               **Approved v2.5.1**. **v2.6.0**
````
REPLACE WITH:
````
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md — **v2.8.1, Approved**
               (06-coding-and-ut-v2.8.1-technical-cycle2.md, PASS 97%, three Lows carried there;
               reviewer: tester, neutral, PM-assigned), **being incremented to v2.9.0 by the
               engineer in this same session** and cited as Approved-at-HEAD and in flight.
               **Load-bearing for this version:** §7 item **18** records that `PrivacyStatus` is
               **mounted on no shipped surface**, and §7 item **26** (v2.7.0, ISS-05(i))
               inventories `packages/ui/src/PrivacyStatus.tsx:251-252` — the two `anon` strings —
               and flags them "for re-copy-review against clause (e) **before first mount**".
               **Doc 03 v2.14.0 is that review**; `OPEN-28` carries what it leaves owed.
               _(v1.7.0 — v1.6.0 carried Low **ISS-07**, FIXED at the first of its two live
               locations. The superseded pin read "**v2.7.0, In Review**; last **Approved
               v2.5.1**.", which was true when the v1.6.0 spec was written and was overtaken the
               same day by v2.7.0's approval; it is quoted here rather than deleted. The third
               location the cycle-2 report named — the `Status:` block — is now a **retained
               historical record** of v1.6.0 and is correctly left verbatim rather than edited.
               The rest of the cell is retained below, unchanged:)_ **v2.6.0**
````

---

### OP 5 — `Source:` block: Doc 07 and Doc 08 pins, with the §14 reconciliation pin held back

FIND:
````
               TC-TRUMOCRACY (docs/07-test-cases-suites.md **v2.6.0**, Approved) _(v1.5.0,
               cycle-2 ISS-C2-01 DISCHARGED — this read "**v2.4.4**, Approved", which was Doc 07's
               last Approved version when written and is stale rather than false; the clause-(e)
               `TC` re-cut is owed at **Doc 07 v2.7.0** / **Doc 08 v2.10.0**, from the tester)_
````
REPLACE WITH:
````
               TC-TRUMOCRACY (docs/07-test-cases-suites.md **v2.8.1**, Approved
               (07-test-cases-suites-v2.8.1-technical-cycle3.md, PASS 98%) — **being incremented
               to v2.9.0 by the tester in this same session, minting from TC-3577**) and
               RTM-TRUMOCRACY (docs/08-traceability-matrix.md **v2.11.3**, Approved
               (08-traceability-matrix-v2.11.3-technical-cycle5.md, PASS 98%; the loop closed
               **ON the cap**, cycle 5 of 5, with a **PASS and no escalation**) — **being
               incremented to v2.12.0 in the same session**) _(v1.7.0 — the superseded Doc 07 pin
               read "**v2.6.0**, Approved" and is quoted here rather than deleted. **Two kinds of
               pin, kept apart deliberately.** These are **bibliographic** pins: what version
               exists. §14's `TC`-range register carries a separate **reconciliation** pin — the
               version its rows were verified against — and **this version does NOT advance it**:
               §14 remains reconciled against **Doc 07 v2.6.0**, §14 is untouched, and §14's
               standing instruction ("any future version that advances the Doc 07 pin MUST re-read
               this table against Doc 07 §2 in the same touch") is therefore **not tripped**. The
               reason is the standing instruction's own logic: Doc 07 is mid-rework in this very
               session, so a register reconciled today would be stale before the session closed,
               and reconciling against an in-flight document is the cycle-1 Medium in a new
               costume. The carried cycle-2 Low **ISS-08** — record **TC-3570–TC-3575** under
               `TS-ADV-01…16` and re-narrow the `TS-V1-*` floor — is **deferred with a named
               trigger**, not dropped: it is **`OPEN-30`**, owner Ravi Deshmukh, due at the first
               touch of this document after **Doc 07 v2.9.0 is Approved**. Retained below, not
               deleted:)_ _(v1.5.0,
               cycle-2 ISS-C2-01 DISCHARGED — this read "**v2.4.4**, Approved", which was Doc 07's
               last Approved version when written and is stale rather than false; the clause-(e)
               `TC` re-cut is owed at **Doc 07 v2.7.0** / **Doc 08 v2.10.0**, from the tester)_
````

---

### OP 6 — Header: `Last updated:` and the v1.7.0 changelog entry

FIND:
````
Last updated:  2026-09-06
Changelog:     2026-09-06 v1.6.0 — **Rework cycle 2 of 5 against
````
REPLACE WITH:
````
Last updated:  2026-09-20
Changelog:     2026-09-20 v1.7.0 — **`OPEN-27` CLOSED. Doc 03 v2.14.0 ruled; this plan records
               the outcome at every site, and §0.5 S5's named `anon`-badge carve-out is
               WITHDRAWN.** Minor bump: a normative test-criterion scope change — a
               build-failing exception is removed, which widens what the scan must catch. Session
               record: artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md row 3. This
               entry describes only what changed.
               **The ruling, cited and not reasoned here.** Doc 03 **v2.14.0 §10.12.3** — the
               copy authority — re-examined the DES-094 `anon` **title and subtitle** against
               **FR-131 clause (e)** (Doc 02 **v2.17.3** §4.45; §8 Scenarios 8 and 9) and ruled
               **both NOT COMPLIANT in Definition-A (v1)**. Its two findings, in its words: the
               subtitle is a **universal negative** rendered on party-joining and endorsing, two
               acts clause (e) names, and Doc 03 has conceded since v2.7.1 that it is not
               literally true in v1; the title's v2.13.0 basis — *"the distinction is the voter,
               not the word"* — is **still true** and fails only because the ban is **no longer
               voting-scoped**. **Doc 03's third finding is larger than the debt item that
               produced it:** no single static `anon` subtitle can be honest across clause 8's
               three contexts, because petition endorsement is **public by design** (Doc 14 §2.2),
               so a "not made public" string is **false on screen 2.3** — a clause-(e) breach in
               the opposite direction to the one `OPEN-27` found. Doc 03's new **clause 10**
               therefore makes the copy **context-selected** with a **fail-honest default**, the
               same doctrine clauses 7 and 9 apply to `ver`.
               **This plan cites; it does not rule.** That is not a formality: `OPEN-27` was minted
               precisely so the ruling would happen in the copy authority, and the v1.6.0 reviewer
               called that route-don't-rule disposition "the strongest judgement in the version".
               Repeating the reasoning here would recreate the second home for a copy ruling that
               `OPEN-27` existed to prevent.
               **§0.5 S5 — the carve-out is WITHDRAWN, at every site, and the count moves with
               it.** Doc 03 no longer approves the two strings, so the exception has nothing to
               except. The strings at `packages/ui/src/PrivacyStatus.tsx:251-252` are now
               **inside** S5's scan scope and **failing it** — recorded as a **ruled,
               remediation-pending failure** (`OPEN-28`), never as an exception, because an
               exception asserts compliance and a failure asserts work. **S5 rule 4 now counts
               ONE carve-out** — clause (a)'s mandated negated forms, unchanged, still the reason
               `UT-0887` is negation-aware. **S4's count of one within S4's scope is unchanged**;
               its sentence pointing at "S5's second exception" is re-cut, because there is no
               longer a second. Both counts are taken in the same touch, for the reason v1.6.0's
               ISS-05 gave: a count stated apart from its scope invites mis-application.
               **The sites, and the reason all of them are taken.** §0.5 S5's carve-out blockquote
               (a superseding banner at its head **and** its "Until Doc 03 rules" tail), S5 rule
               4, S4's scope-before-count sentence, §1.4's status roll-call, §13's gate-blocking
               bullets, §13's `OPEN-27` row, §22's Approvals row, and the `Source:` block's Doc 03
               pin. **Leaving §13 asserting an item Doc 03 has closed — or leaving a withdrawn
               carve-out alive at one site of five — is the "a correction that did not reach every
               place it claimed to reach" defect this document family has FAILed on repeatedly**,
               and in a **build-failing** scan its consequence is a gate quietly not gating.
               **Not a live defect today, stated plainly in both directions.** The `packages/ui`
               string scan S5 specifies **is not implemented** (the guards that exist —
               `UT-0869`, `UT-0887`, `UT-0889`, `UT-0759` — are scoped to `apps/web` i18n and to
               the `ver` state), and `PrivacyStatus` is mounted on **no shipped surface**: six
               explicit non-render comments across five consuming files, re-verified by Doc 09
               **v1.9.0**, with the non-render decision at Doc 06 **v2.8.1** §7 item 18. **No
               citizen sees either string.** So nothing is failing a build, nothing shipped wrong,
               and `OPEN-28` is **owed rather than gate-blocking** — becoming a **v1 Gate-2
               blocker** the moment a mount is scheduled, on `OPEN-27`'s own trigger wording. This
               is the **pre-mount** posture; the `ver` title, by contrast, **shipped** and had to
               be caught in code by Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`.
               **`OPEN-27` CLOSED; `OPEN-28`, `OPEN-29` and `OPEN-30` minted.** `OPEN-28` —
               implement Doc 03 clause 10 and satisfy its five-condition render trigger before
               first mount (Samuel Oyelaran; Ji-woo Park for the `UT`/`TC`), including the fact
               Doc 03 records that `packages/ui/test/PrivacyStatus.test.tsx` **currently pins the
               non-compliant string** with a green `getByText('Anonymous')` assertion. `OPEN-29` —
               Doc 03 clause 6's screen-3.6 wireframe copy, **newly in clause-(e) scope, named and
               routed, NOT ruled**, and **not a shipped string** (Ravi Deshmukh, next Doc 03
               increment). `OPEN-30` — the deferred §14 reconciliation (carried Low ISS-08), due
               after Doc 07 v2.9.0 is Approved. **No `OPEN-##` is renumbered or reused.**
               **The three carried Lows, taken explicitly: ISS-07 FIXED** (Doc 06 re-pinned
               **v2.7.0 In Review → v2.8.1 Approved** at both live locations — `Source:` and §1.4;
               the third location named by the report is now a retained historical record);
               **ISS-09 DISCHARGED by supersession** (the sentence it concerns is no longer a live
               claim, and this version states its own scope plainly); **ISS-08 DEFERRED with a
               named trigger, an owner and an id** — `OPEN-30` — because §14 cannot honestly be
               reconciled against a Doc 07 that is mid-rework in this same session.
               **Untouched, deliberately:** `OPEN-20` and §13's Definition-A blocker bullet; the
               clause-(e) substance the v1.6.0 review instructed must not be re-opened (S4's
               (a)–(d) range and its five refusals of a fifth notice clause, S5's four rules and
               the claims test, the verification path, the pin *reasoning*, `OPEN-01`, §0.6's
               buckets, every test status, `A-02.6`, §11.2); and **§14 in its entirety**. **No
               `TC`, `UT` or `US` is minted, renumbered or reused; no test status is upgraded; no
               product code is written or edited.**
               2026-09-06 v1.6.0 — **Rework cycle 2 of 5 against
````

---

### OP 7 — §0.5 S4: the scope-before-count sentence re-cut (S5 no longer has a second exception)

**Multi-line paragraph; the sentence begins mid-line — reproduce the line breaks exactly.**

FIND:
````
the amendment cannot break the FR-131(a) banner. **S5's scan is broader and carries that same
carve-out plus one more** — the named `anon`-badge exception — which is why S5 rule 4 counts
**two**. The counts differ because the scopes differ; neither may be applied outside its own
section. _(v1.6.0, cycle-1 ISS-05: this sentence stated its count without its scope, immediately
after directing the reader to S5. Neither count is changed.)_
````
REPLACE WITH:
````
the amendment cannot break the FR-131(a) banner. **S5's scan is broader and carries that same
carve-out plus one more** — the named `anon`-badge exception — which is why S5 rule 4 counts
**two**. The counts differ because the scopes differ; neither may be applied outside its own
section. _(v1.6.0, cycle-1 ISS-05: this sentence stated its count without its scope, immediately
after directing the reader to S5. Neither count is changed.)_
**_(v1.7.0 — the sentence above is SUPERSEDED on its count and retained on everything else.
S5 no longer carries "one more": Doc 03 v2.14.0 §10.12.3 ruled both `anon` strings NOT COMPLIANT
in v1, so the named `anon`-badge exception is WITHDRAWN and **S5 rule 4 now counts ONE** — the
same clause-(a) negated-form carve-out S4 counts. **S4's own count is unchanged at one**, and the
two are now the same one. What survives unchanged from the sentence above is the rule that settles
it, and that matters more than either number: the counts are stated per scope, and neither may be
applied outside its own section — if S5 later acquires a second exception it will be stated at S5
and counted there. The two `anon` strings are not gone from the scan; they are **in** it and
**failing** it, tracked as `OPEN-28`. See S5 rule 4 and the carve-out blockquote below.)_**
````

---

### OP 8 — §0.5 S5 rule 4: the count drops from two to one

FIND:
````
4. **Two carve-outs, and only two.** (i) **Clause (a)'s mandated negated forms** — inside a DES-098
   notice the banned words appear **only** as "NOT anonymous / NOT receipt-free /
   NOT coercion-resistant", which is a denial, not a claim; `UT-0887` is negation-aware for exactly
   this reason and is unaffected by the widening. (ii) The **named `anon`-badge carve-out** below,
   unchanged and unextended. **Out of scope:** claims about **personhood enrolment and identity
   verification** are governed by `FR-132` and Doc 02 §16.4 H-16/H-17/H-18, expressly **not** by
   clause (e) (Doc 02 §13 tracked routing (j)) — this scan MUST NOT be used to rule them, and the
   product-owner's ruling on them is owed.
````
REPLACE WITH:
````
4. **ONE carve-out, and only one** _(v1.7.0 — this rule read "**Two carve-outs, and only two**"
   and its clause (ii) is WITHDRAWN; the superseded text is retained verbatim immediately below)_.
   (i) **Clause (a)'s mandated negated forms** — inside a DES-098 notice the banned words appear
   **only** as "NOT anonymous / NOT receipt-free / NOT coercion-resistant", which is a denial, not
   a claim; `UT-0887` is negation-aware for exactly this reason and is unaffected by the widening.
   **This is now the only exception to this scan.** (ii) **WITHDRAWN at v1.7.0 — the named
   `anon`-badge carve-out is gone, not narrowed.** Doc 03 **v2.14.0 §10.12.3**, the copy
   authority, ruled **both** the `anon` title "Anonymous" **and** the `anon` subtitle "Nothing
   you do here is linked to you" **NOT COMPLIANT in Definition-A (v1)** under FR-131 clause (e),
   superseded the v2.13.0 TITLE disposition and the 2026-08-25 subtitle decision in place, and
   specified the v1 variants at its new **clause 10**. **There is nothing left to except.** The
   two strings at `packages/ui/src/PrivacyStatus.tsx:251-252` are **inside this scan's scope and
   failing it** — recorded as a **ruled, remediation-pending failure** tracked as **`OPEN-28`**,
   and **MUST NOT** be recorded as an exception, because an exception asserts compliance and a
   failure asserts work. **No build fails on this today**, and the scan MUST NOT be made to: the
   `packages/ui` string scan this criterion specifies **is not implemented** (the guards that
   exist — `UT-0869`, `UT-0887`, `UT-0889`, `UT-0759` — are scoped to `apps/web` i18n strings and
   to the `ver` state), and the component is mounted on **no shipped surface**. When the scan is
   built, these two strings MUST be in its scope with `OPEN-28` as the reference, and the closing
   condition is Doc 03 clause 10's **five-condition render trigger**. **Out of scope:** claims
   about **personhood enrolment and identity verification** are governed by `FR-132` and Doc 02
   §16.4 H-16/H-17/H-18, expressly **not** by clause (e) (Doc 02 §13 tracked routing (j)) — this
   scan MUST NOT be used to rule them, and the product-owner's ruling on them is owed.

   _(v1.6.0 text of rule 4, retained verbatim per annotate-don't-delete; its clause (ii) is
   superseded as recorded above:)_ **Two carve-outs, and only two.** (i) **Clause (a)'s mandated
   negated forms** — inside a DES-098 notice the banned words appear **only** as "NOT anonymous /
   NOT receipt-free / NOT coercion-resistant", which is a denial, not a claim; `UT-0887` is
   negation-aware for exactly this reason and is unaffected by the widening. (ii) The **named
   `anon`-badge carve-out** below, unchanged and unextended. **Out of scope:** claims about
   **personhood enrolment and identity verification** are governed by `FR-132` and Doc 02 §16.4
   H-16/H-17/H-18, expressly **not** by clause (e) (Doc 02 §13 tracked routing (j)) — this scan
   MUST NOT be used to rule them, and the product-owner's ruling on them is owed.
````

---

### OP 9 — §0.5 S5: a superseding banner at the head of the carve-out blockquote

FIND:
````
> **Named carve-out — the `anon` participation-tier badge** _(v1.4.0, cycle-1 ISS-08)_.
````
REPLACE WITH:
````
> **WITHDRAWN at v1.7.0 (2026-09-20) — READ THIS FIRST. The named `anon`-badge carve-out below no
> longer exists.** Doc 03 **v2.14.0 §10.12.3** — the copy authority this carve-out was always
> keyed to — **ruled on `OPEN-27`** and found **both** `anon` strings **NOT COMPLIANT in
> Definition-A (v1)** under FR-131 clause (e). The v2.13.0 `anon` TITLE disposition this carve-out
> **cites** is SUPERSEDED in place, as is the 2026-08-25 subtitle decision; Doc 03's new
> **clause 10** specifies the v1 variants — title "Open tier", and a **context-selected** subtitle
> over clause 8's three contexts with a **fail-honest default**. **The carve-out is therefore
> withdrawn, not narrowed: there is nothing left to except.** The two strings at
> `packages/ui/src/PrivacyStatus.tsx:251-252` are now **inside** this scan's scope and **failing**
> it, tracked as **`OPEN-28`** — a ruled, remediation-pending failure, never an exception.
> **The everything-else-stays-in-scope rules below are unchanged and still govern**, including the
> `ver` title staying in scope in **both** directions. **Nothing is failing a build today** and
> nothing should be made to: the `packages/ui` scan is unimplemented and the component is mounted
> on no shipped surface. **The whole blockquote below is retained verbatim** — including the
> v1.5.0 / v1.6.0 lapse analysis, whose conclusion that **none of Doc 03's four re-open triggers
> has fired remains CORRECT and is not disturbed by the ruling.** That analysis answered whether
> the disposition **lapsed**; Doc 03 v2.14.0 answered what clause (e), read directly against the
> two strings, **requires**. Those are different questions, clause (e) supplies its own test, and
> the honest summary is: **no trigger fired; the requirement changed.**
>
> _(v1.6.0 carve-out, retained verbatim per annotate-don't-delete and SUPERSEDED as a whole by the
> banner above:)_
> **Named carve-out — the `anon` participation-tier badge** _(v1.4.0, cycle-1 ISS-08)_.
````

---

### OP 10 — §0.5 S5: the "Until Doc 03 rules" tail, closed

FIND:
````
> production". **Until Doc 03 rules:** the exception covers those two `anon` strings in that one
> component and **no others**; no new string may claim it; and rule 2 above (the claims test)
> applies to every string that is not inside the exception.
````
REPLACE WITH:
````
> production". **Until Doc 03 rules:** the exception covers those two `anon` strings in that one
> component and **no others**; no new string may claim it; and rule 2 above (the claims test)
> applies to every string that is not inside the exception.
>
> **_(v1.7.0 — 2026-09-20: DOC 03 HAS RULED, and the condition above is discharged.)_** Doc 03
> **v2.14.0 §10.12.3** rules both strings **NOT COMPLIANT in v1** and specifies the v1 variants at
> its new **clause 10**. **The exception covers nothing now.** Rule 2 (the claims test) applies to
> **every** string in scope **including these two**, which fail it on Doc 03's own ruling and are
> tracked as **`OPEN-28`** until clause 10's five-condition render trigger is satisfied.
> **What the scan MUST do, stated mechanically so nothing is left to inference:** (1) treat
> `STATE_CONFIG.anon.title` and `STATE_CONFIG.anon.subtitle` as **in scope and currently
> failing**, referencing `OPEN-28`; (2) **not** fail any build today — the `packages/ui` scan is
> unimplemented and the component renders nowhere, and failing a build on copy the engineer has
> not yet been given a story to change would be a gate punishing the wrong party; (3) once
> clause 10 lands, assert the **exact clause-10 strings**, including the **fail-honest default**
> for an absent or unrecognised context, in **every language** — a locale mirror is a
> public-facing string, and the `ar` mirrors are human-gated; (4) keep the `ver` title in scope in
> **both** directions, unchanged. **What did NOT change, because it is worth saying twice:** the
> retained lapse analysis above is **correct** — **none of Doc 03's four re-open triggers fired**,
> and this plan never treated the carve-out as lapsed. It did not lapse. It was **overtaken by a
> ruling**, which is the outcome `OPEN-27` was routed to obtain. **Doc 03 ruled; this plan
> records.** The division of authority is unchanged; only the content it records has changed.
````

---

### OP 11 — §1.4 References: pins re-cut (v1.6.0 carried Low ISS-07, location 2 of 2)

FIND:
````
Doc 01 PR-FAQ · Doc 02 SRS **v2.17.1** (incl. §16 delivery phasing and §16.4 honesty register,
§4.45 FR-131 clause (e) and its §8 Scenarios 8 and 9) · Doc 03 SDD **v2.13.0** (§9 repo design,
§10.13 v1/v2 split, §11 failure-mode analysis which seeds `TS-EDGE`, §14 test hooks) · Doc 05
Backlog **v2.5.0** (§8 non-functional backlog items `NF-01`…`NF-08`) · Doc 06 Coding & UT
**v2.5.1 Approved / v2.7.0 In Review** (unit-test standard, `UT-####`, §2.1 `IS_INSECURE_MOCK`
discipline) · Doc 07 Test Cases **v2.6.0** (`TC-####`) · Doc 08 RTM **v2.9.0** ·
**ADR-001…ADR-025** · CLAUDE.md · ISO/IEC/IEEE 29119 · IEEE 829 · WCAG 2.2 Level AA · RFC 2119.
````
REPLACE WITH:
````
Doc 01 PR-FAQ · Doc 02 SRS **v2.17.3** (incl. §16 delivery phasing and §16.4 honesty register,
§4.45 FR-131 clause (e) — normative text unchanged since it entered at v2.17.0 — and its §8
Scenarios 8 and 9) · Doc 03 SDD **v2.14.0 In Review / v2.13.0 Approved** (§9 repo design,
§10.12.3 **the DES-094 copy authority, incl. the v2.14.0 `anon` ruling and clause 10**, §10.13
v1/v2 split, §11 failure-mode analysis which seeds `TS-EDGE`, §14 test hooks) · Doc 05
Backlog **v2.5.0** (§8 non-functional backlog items `NF-01`…`NF-08`) · Doc 06 Coding & UT
**v2.8.1 Approved** (unit-test standard, `UT-####`, §2.1 `IS_INSECURE_MOCK` discipline; §7 item
18 the `PrivacyStatus` non-render decision, §7 item 26 the two `anon` strings inventoried) ·
Doc 07 Test Cases **v2.8.1** (`TC-####`) · Doc 08 RTM **v2.11.3** · Doc 09 Release Notes
**v1.9.0** (re-verifies the six non-render comments across five consuming files) ·
**ADR-001…ADR-025** · CLAUDE.md · ISO/IEC/IEEE 29119 · IEEE 829 · WCAG 2.2 Level AA · RFC 2119.
_(v1.7.0 — the superseded reference line is retained here rather than deleted. It read: "Doc 02
SRS **v2.17.1** … · Doc 03 SDD **v2.13.0** … · Doc 06 Coding & UT **v2.5.1 Approved / v2.7.0 In
Review** … · Doc 07 Test Cases **v2.6.0** (`TC-####`) · Doc 08 RTM **v2.9.0**". The Doc 06 half
is the second of the two live locations of the v1.6.0 cycle-2 carried Low **ISS-07**, now fixed;
Doc 09 is newly listed because v1.7.0 relies on its re-verification of the non-render comments.
**§14's `TC`-range reconciliation pin is a different pin and is deliberately NOT advanced** — see
the `Source:` block and `OPEN-30`.)_
````

---

### OP 12 — §1.4: the status roll-call brought to HEAD

**Multi-line paragraph; the first sentence begins mid-line — reproduce the line breaks exactly.**

FIND:
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
**_(v1.7.0 roll-call — 2026-09-20. It supersedes the v1.6.0 roll-call above, which is retained,
and it discharges the second live location of the v1.6.0 cycle-2 carried Low ISS-07.)_**
**Approved at HEAD:** Doc 02 **v2.17.3** (ten Lows carried there), Doc 05 **v2.5.0**, Doc 06
**v2.8.1** (three Lows carried there), Doc 07 **v2.8.1**, Doc 08 **v2.11.3**, Doc 09 **v1.9.0**.
**In Review:** Doc 03 **v2.14.0** — the increment that rules `OPEN-27`, last Approved v2.13.0 —
and **this document at v1.7.0**. **In flight in this same session, and cited as such rather than
as settled:** Doc 06 → v2.9.0 (engineer), Doc 07 → **v2.9.0** and Doc 08 → **v2.12.0** (tester,
minting from **TC-3577**). **No statement in v1.7.0 depends on the in-flight content of any of the
three**, and **§14 is untouched**: its `TC`-range **reconciliation** pin stays at **Doc 07 v2.6.0**
and is deliberately not advanced, so §14's standing re-read instruction is not tripped by this
touch. The carried cycle-2 Low **ISS-08** (record TC-3570–TC-3575 under `TS-ADV-01…16`; re-narrow
the `TS-V1-*` floor) is **`OPEN-30`**, due at the first touch after **Doc 07 v2.9.0 is Approved**.
**Bibliographic pins and reconciliation pins are different statements and are kept apart** — the
same discipline this document already applies to clause (e)'s **origin** (v2.17.0) versus its
**currency** (v2.17.3).
````

---

### OP 13 — §13: the gate-blocking bullets re-cut

FIND:
````
- **Not gate-blocking, but owed:** `OPEN-07`, `OPEN-08`, `OPEN-09`, `OPEN-10`, `OPEN-12` … `OPEN-15`,
  `OPEN-22`, **`OPEN-27`** _(added v1.5.0 — a design-authority copy question raised by FR-131
  clause (e); it is **not** a shipped-copy defect today, which is why it is owed rather than
  blocking. It becomes a **v1 Gate-2 blocker** the moment any screen rendering the `anon` pill in a
  non-vote context is scheduled to ship, per Doc 03 §10.12.3 clause 8's own trigger)_.
- **Closed at v1.1.0:** `OPEN-16`, `OPEN-17`.
````
REPLACE WITH:
````
- **Not gate-blocking, but owed:** `OPEN-07`, `OPEN-08`, `OPEN-09`, `OPEN-10`, `OPEN-12` … `OPEN-15`,
  `OPEN-22`, **`OPEN-27`** _(added v1.5.0 — a design-authority copy question raised by FR-131
  clause (e); it is **not** a shipped-copy defect today, which is why it is owed rather than
  blocking. It becomes a **v1 Gate-2 blocker** the moment any screen rendering the `anon` pill in a
  non-vote context is scheduled to ship, per Doc 03 §10.12.3 clause 8's own trigger)_.
- **Not gate-blocking, but owed — re-cut at v1.7.0.** The bullet above is retained; **`OPEN-27`
  is CLOSED** and leaves this list, and its successors take its place. The list in force is:
  `OPEN-07`, `OPEN-08`, `OPEN-09`, `OPEN-10`, `OPEN-12` … `OPEN-15`, `OPEN-22`, **`OPEN-28`**,
  **`OPEN-29`**, **`OPEN-30`**. **`OPEN-28` inherits `OPEN-27`'s gate posture verbatim and
  unchanged:** it is **not** a shipped-copy defect today — `PrivacyStatus` is mounted on no
  shipped surface and no citizen sees either string — which is why it is owed rather than
  blocking, and it becomes a **v1 Gate-2 blocker** the moment any screen rendering the `anon` pill
  in a non-vote context is scheduled to ship, per Doc 03 §10.12.3 clause 8's own trigger, now
  joined by clause 10's five-condition render trigger. **`OPEN-29`** is a design-authority copy
  question about **unbuilt wireframe copy**, not a shipped string, and is owed at the next Doc 03
  increment. **`OPEN-30`** is a register-currency item with a named trigger (the first touch of
  this document after Doc 07 v2.9.0 is Approved) and blocks nothing.
- **Closed at v1.1.0:** `OPEN-16`, `OPEN-17`. **Closed at v1.7.0:** **`OPEN-27`** — closed **on a
  ruling, not on age**: Doc 03 v2.14.0 §10.12.3 delivered the fresh look the item demanded, and
  the work it created is carried forward as `OPEN-28` rather than left inside a closed item.
````

---

### OP 14 — §13: the `OPEN-27` row closed, and three successor rows added

**VERY LONG SINGLE-LINE TABLE ROW (~4,700 characters). Reproduce the `FIND` whole and verbatim, from the leading `|` to the trailing `|`. A prefix is not a match.**

FIND:
````
| **OPEN-27** _(new v1.5.0; lapse analysis completed v1.6.0)_ | **The `anon`-badge disposition that §0.5 S5's carve-out cites was reasoned against a voting-scoped FR-131, and FR-131 is no longer voting-scoped.** Doc 03 v2.13.0 §10.12.3 rules `STATE_CONFIG.anon.title` ("Anonymous") COMPLIANT in v1 on the basis that the badge renders only for open-tier users who cannot cast a binding vote, so it "is not describing that user's voting behaviour" but names a participation tier. Doc 02 **v2.17.0** FR-131 **clause (e)** (approver, 2026-09-06; carried unchanged into the Approved **v2.17.1**) extends the duty to **every v1 participation act**, expressly including **joining or belonging to a party** and **endorsing a petition** — two of the three contexts §10.12.3 **clause 8** itself names for the `anon` pill (screens 1.6 and 2.3). §10.12.3 separately **concedes** that the `anon` subtitle "Nothing you do here is linked to you" is **not literally true in v1**, and carries a standing condition that a subtitle variant MUST be considered if an honesty review establishes that a reasonable user does not read it as "publicly linked"; the 2026-09-06 ruling — which litigated exactly this claim class on the landing page — is such a review **of that copy, and it is why this item exists**. _(v1.6.0, cycle-1 ISS-04 — the sentence above engages the condition Doc 03 equates with **trigger (iv)**, so (iv) is disposed of here rather than left for a reader to draw the opposite conclusion from.)_ **No re-open trigger has fired. (iii)** is worded for an ***unconditional*** amendment and clause (e) is scoped, not unconditional. **(iv)** fires only where research or an honesty review "**shows**" open-tier members read the badge as a claim about how their vote is handled; the 2026-09-06 ruling examined landing-page copy and the FR-082 strings and took **no evidence about the badge**, so it raises the question without showing the reading. **(i)** and **(ii)** are untouched — the badge renders on no vote surface and FR-122/FR-123 are unamended. **The disposition has therefore NOT lapsed, and neither has S5's carve-out; this plan does not treat either as lapsed** | **Not a shipped-copy defect today:** `PrivacyStatus` has no authenticated host surface in `apps/web`, so no citizen currently sees the string; `packages/ui` is nevertheless inside S5's scan scope, and Doc 03 clause 8's own trigger is "before any screen rendering the `anon` pill in a non-vote context ships to production" — at which point this becomes a v1 Gate-2 blocker. **This is a copy ruling for the copy authority (Doc 03), not for this plan**: ruling it in the test plan would repeat the v2.7.0 mistake of a copy ruling living somewhere other than the copy authority. **What is owed is a fresh look, not a lapse**: the architect re-examines the `anon` title **and** subtitle against clause (e) at the next Doc 03 increment. Until then S5's carve-out stands, covering exactly the two `anon` strings and extended to nothing | Ravi Deshmukh (Doc 03 ruling); Nadia Hassan (the S5 scan once ruled) |
````
REPLACE WITH:
````
| **OPEN-27** — **CLOSED v1.7.0** _(new v1.5.0; lapse analysis completed v1.6.0; **closed on a ruling 2026-09-20**)_ | **CLOSED — the fresh look was taken and the copy authority ruled.** **Doc 03 v2.14.0 §10.12.3** re-examined the `anon` **title and subtitle** against FR-131 clause (e) and ruled **BOTH NOT COMPLIANT in Definition-A (v1)**. The v2.13.0 TITLE disposition and the 2026-08-25 subtitle no-change decision are **SUPERSEDED in place and retained verbatim**; Doc 03's new **clause 10** specifies the v1 variants — title **"Open tier"**, and a **context-selected** subtitle across clause 8's three contexts (browse / join / endorse) with a **fail-honest default** for an absent or unrecognised context — in the same normative form clauses 7 and 9 specify the `ver` copy. **Doc 03's reasoning, in one line each, cited and not re-argued here:** the subtitle is a **universal negative** rendered on two acts clause (e) names, and Doc 03 has conceded since v2.7.1 that it is not literally true in v1; the title's v2.13.0 basis — *"the distinction is the voter, not the word"* — is **still true** and fails only because the ban is **no longer voting-scoped**, FR-122/FR-123 being unamended. **A third finding, larger than this item, is recorded in Doc 03 and repeated here because it changes what is owed:** no single static `anon` subtitle can be honest across clause 8's three contexts, because petition **endorsement is public by design** (Doc 14 §2.2), so a "not made public" string is **false on screen 2.3** — a clause-(e) breach in the opposite direction to the one this item found. **`OPEN-27`'s own lapse analysis, below, is CORRECT and is NOT disturbed by the ruling:** none of Doc 03's four re-open triggers fired, and this plan never treated the carve-out as lapsed. **No trigger fired; the requirement changed** — whether a trigger *fired* and what clause (e) *requires* when read directly against the strings are different questions, and clause (e) supplies its own test. **What this item created, carried forward rather than buried in a closed row:** **`OPEN-28`** (implement clause 10 and satisfy its five-condition render trigger before first mount) and **`OPEN-29`** (Doc 03 clause 6's screen-3.6 wireframe copy, newly in clause-(e) scope, **named and routed, not ruled**). **Consequence for §0.5 S5, applied at every site in this version: the named `anon`-badge carve-out is WITHDRAWN, not narrowed**, and S5 rule 4 now counts **one** carve-out, not two. _(v1.6.0 body, retained verbatim per annotate-don't-delete:)_ **The `anon`-badge disposition that §0.5 S5's carve-out cites was reasoned against a voting-scoped FR-131, and FR-131 is no longer voting-scoped.** Doc 03 v2.13.0 §10.12.3 rules `STATE_CONFIG.anon.title` ("Anonymous") COMPLIANT in v1 on the basis that the badge renders only for open-tier users who cannot cast a binding vote, so it "is not describing that user's voting behaviour" but names a participation tier. Doc 02 **v2.17.0** FR-131 **clause (e)** (approver, 2026-09-06; carried unchanged into the Approved **v2.17.1**) extends the duty to **every v1 participation act**, expressly including **joining or belonging to a party** and **endorsing a petition** — two of the three contexts §10.12.3 **clause 8** itself names for the `anon` pill (screens 1.6 and 2.3). §10.12.3 separately **concedes** that the `anon` subtitle "Nothing you do here is linked to you" is **not literally true in v1**, and carries a standing condition that a subtitle variant MUST be considered if an honesty review establishes that a reasonable user does not read it as "publicly linked"; the 2026-09-06 ruling — which litigated exactly this claim class on the landing page — is such a review **of that copy, and it is why this item exists**. _(v1.6.0, cycle-1 ISS-04 — the sentence above engages the condition Doc 03 equates with **trigger (iv)**, so (iv) is disposed of here rather than left for a reader to draw the opposite conclusion from.)_ **No re-open trigger has fired. (iii)** is worded for an ***unconditional*** amendment and clause (e) is scoped, not unconditional. **(iv)** fires only where research or an honesty review "**shows**" open-tier members read the badge as a claim about how their vote is handled; the 2026-09-06 ruling examined landing-page copy and the FR-082 strings and took **no evidence about the badge**, so it raises the question without showing the reading. **(i)** and **(ii)** are untouched — the badge renders on no vote surface and FR-122/FR-123 are unamended. **The disposition has therefore NOT lapsed, and neither has S5's carve-out; this plan does not treat either as lapsed** | **Closed on a ruling, not on age.** The item asked for one thing — *"What is owed is a fresh look, not a lapse"* — and Doc 03 v2.14.0 delivered it, in the copy authority and not here, which is what the item was minted to secure. **Still not a shipped-copy defect:** `PrivacyStatus` is mounted on **no shipped surface** (six explicit non-render comments across five consuming files, re-verified by Doc 09 v1.9.0; Doc 06 v2.8.1 §7 item 18), so **no citizen sees either string**, and the `packages/ui` scan S5 specifies is **unimplemented** — **no build is failing and none should be made to fail**. The Gate-2 posture transfers unchanged to **`OPEN-28`**. _(v1.6.0 Impact cell, retained verbatim:)_ **Not a shipped-copy defect today:** `PrivacyStatus` has no authenticated host surface in `apps/web`, so no citizen currently sees the string; `packages/ui` is nevertheless inside S5's scan scope, and Doc 03 clause 8's own trigger is "before any screen rendering the `anon` pill in a non-vote context ships to production" — at which point this becomes a v1 Gate-2 blocker. **This is a copy ruling for the copy authority (Doc 03), not for this plan**: ruling it in the test plan would repeat the v2.7.0 mistake of a copy ruling living somewhere other than the copy authority. **What is owed is a fresh look, not a lapse**: the architect re-examines the `anon` title **and** subtitle against clause (e) at the next Doc 03 increment. Until then S5's carve-out stands, covering exactly the two `anon` strings and extended to nothing | Ravi Deshmukh (Doc 03 ruling — **DONE, v2.14.0**); Nadia Hassan (the S5 scan once ruled — **now `OPEN-28`**) |
| **OPEN-28** _(new v1.7.0 — the successor to `OPEN-27`; the work the ruling created)_ | **Doc 03 v2.14.0 §10.12.3 clause 10 is ruled but unbuilt, and one green test currently pins the non-compliant string.** `packages/ui/src/PrivacyStatus.tsx:251-252` still carries `title: 'Anonymous'` and `subtitle: 'Nothing you do here is linked to you'`, both now ruled **NOT COMPLIANT in v1**. Clause 10 requires: the v1 title **"Open tier"**; a subtitle selected by an **explicit** context input over the enumerated set browse / join / endorse (the same three contexts clause 8 enumerates); and a **fail-honest default** — *"Our own records can link what you do here to your account."* — whenever the context is absent, unrecognised or malformed, with an express prohibition on **inferring** context from route or referrer. Clause 10's **five-condition render trigger** must all hold before first mount: (i) clause 10 implemented; (ii) the host screen supplies a context from the enumerated set; (iii) clause 8's data-practices affordance exists on that surface (**still unbuilt**); (iv) a `UT-####` in the **UT-0759 four-path pattern** covers context absent / browse / join / endorse, asserting each exact string and that **no FR-131 banned word** appears in the rendered title, subtitle or `aria-label` — **note that `packages/ui/test/PrivacyStatus.test.tsx` today asserts `getByText('Anonymous')` and scopes its banned-word regex to the `ver` state, so a passing test pins the defect and that assertion changes with the constant**; (v) the `ar` mirrors have passed the **human native-speaker review** (Doc 06 v2.8.1 §7 item 17 `ARABIC-I18N`), clause (e) binding "in any language". **This plan mints no `TC` and no `UT` here** — those are the tester's and the engineer's, under the existing story `US-0134` (FR-131 · DES-098) or a new story the product-owner cuts | **Owed, not gate-blocking today** — inheriting `OPEN-27`'s posture verbatim: nothing renders, nothing ships wrong, no build fails. **Becomes a v1 Gate-2 blocker the moment any screen rendering the `anon` pill in a non-vote context is scheduled to ship**, per clause 8's own trigger now joined by clause 10's. **§0.5 S5 records these two strings as a ruled, remediation-pending FAILURE, never as an exception** | Samuel Oyelaran (build + `UT`); Ji-woo Park (`TC` and RTM rows); Nadia Hassan (the S5 scan once built) |
| **OPEN-29** _(new v1.7.0 — named and routed by Doc 03 v2.14.0; **NOT ruled**)_ | **One further clause-(e) site was inventoried while ruling `OPEN-27`, and it is named rather than half-done.** Doc 03 §10.12.3 **clause 6** quotes screen 3.6's one-way-door copy — *"What you've done as an anonymous supporter stays anonymous forever. It is never linked to your new public identity"* — as a normative consistency obligation on the component. That is a v1 public-facing claim about **supporting a party**, a clause-(e) participation act; it carries a banned word **twice** and an "is never linked to" construction of the same family as the subtitle just ruled on. **Doc 03 v2.14.0 expressly does NOT rule it**: it is outside `OPEN-27`'s scope, which named the two `PrivacyStatus` strings. **Two facts bound the urgency and are stated rather than assumed:** it is **wireframe copy quoted in Doc 03**, not a shipped string — `apps/web/src/i18n/en.ts` contains "anonymous" only in clause (a)'s mandated **negated** form, guarded by `UT-0887` — and **screen 3.6 is unbuilt**. **Naming a site is not ruling it**; this is the same "one more site inventoried" discipline by which Doc 06 v2.8.1 §7 item 26 surfaced the two strings `OPEN-27` closed on | **Not gate-blocking:** no shipped string, no built screen. It becomes live the moment screen 3.6 is scheduled, and it is registered now so it is not rediscovered as a surprise at that point — which is exactly what the `ver` title cost when it was not | Ravi Deshmukh (next Doc 03 increment, routed via the project-manager) |
| **OPEN-30** _(new v1.7.0 — the v1.6.0 cycle-2 carried Low ISS-08, converted to a tracked item with a trigger)_ | **§14's `TC`-range register is owed one reconciliation, and it is deferred on purpose rather than done badly.** The v1.6.0 cycle-2 review asked that, once the Doc 07 pin advances to an **Approved** version, §14 record **TC-3570–TC-3575** under `TS-ADV-01…16` (Doc 07 v2.7.0 §2 assigned them there — again **not** to any of the six `TS-V1-*` suites the band is reserved for) and re-narrow the `TS-V1-*` floor accordingly; and that the free-band disclosure **name the suite** drawing on it and re-word "cannot see" to "declines to rely on an unreviewed version". Doc 07 is now **v2.8.1 Approved** — but is being incremented to **v2.9.0 in this same session, minting from TC-3577**, so a register reconciled today is stale before the session closes. **v1.7.0 therefore does not touch §14 and does not advance §14's reconciliation pin, which stays at Doc 07 v2.6.0**; §14's standing re-read instruction is consequently **not tripped** by this touch, and the deferral is consistent with the instruction rather than an evasion of it | **Blocks nothing.** A register-currency item, graded Low twice before on the same ground: it changes no conclusion drawn from it. **Trigger: the first touch of this document after Doc 07 v2.9.0 is Approved** — which the §14 standing instruction will itself force when the bibliographic and reconciliation pins are next brought together | Ravi Deshmukh |
````

---

### OP 15 — §22 Approvals: the architect row re-cut for v1.7.0

**VERY LONG SINGLE-LINE TABLE ROW (~4,600 characters). Reproduce the `FIND` whole and verbatim, from the leading `|` to the trailing `|`. A prefix is not a match — this is the failure that cost OP 19 a round on 2026-09-06.**

FIND:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-06 | **v1.6.0, Status: In Review.** Rework **cycle 2 of 5** against the v1.5.0 technical review (FAIL 92%; 0 Critical / 0 High / 1 Medium / 5 Low; reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned). All six findings taken on this touch, none carried: **ISS-01 (Medium)** — §14's `TC`-range reservation register reconciled against **Doc 07 v2.6.0 §2** (TC-3564–TC-3567 → `TS-ADV-01…16`, TC-3568 → `TS-SCAFFOLD`, TC-3569 → `TS-ABSENCE`; the `TS-V1-*` reservation narrowed to **TC-3570–TC-3699**), with its three echoes at §0.4, the v1.1.0 changelog entry and Downstream; **ISS-02** — `OPEN-20` narrowed to the surviving `TS-PROPOSALS` half and deliberately left **open** and gate-blocking; **ISS-03** — `UT-0889` re-stated as **landed and green** (25/25, executed by the cycle-1 reviewer on 2026-09-06; registered in Doc 06 at v2.6.0, unchanged at **v2.7.0 In Review**) at all three mentions; **ISS-04** — Doc 03's re-open trigger **(iv)** disposed of by name in both §0.5 S5 and `OPEN-27`, completing the not-lapsed conclusion; **ISS-05** — S4's carve-out count scoped before it is stated; **ISS-06** — §1.4 re-wrapped. **Pins swept to HEAD before submission** rather than left for the next reviewer to catch: **Doc 02 → v2.17.1 (Approved)**, clause (e) unchanged plus its §8 Scenarios 8 and 9; **Doc 06 → v2.7.0 (In Review)**, last Approved v2.5.1; Doc 07 v2.6.0 and Doc 08 v2.9.0 Approved. **No `TC`, `UT`, `US` or `OPEN-##` is minted, renumbered or reused; no test status is upgraded.** The clause-(e) substance is **not re-opened**, per the review's routing instruction. _(Row history: **v1.5.0** was submitted 2026-09-06 and **FAILed cycle 1 at 92%** on one Medium — the `TC`-register drift this version closes. It was not a rework cycle but a **requirement cascade**: FR-131 **clause (e)** was ruled in by the approver on 2026-09-06 and applied as Doc 02 v2.17.0, so the question §0.5 S4 routed to the product-owner at v1.4.0 is answered and S4/S5 are re-cut to the amended closing sentence. The notice-clause range stays **(a)–(d)**; clause (e) is scanned at S5 and guarded by **UT-0889 (Doc 06 v2.6.0)** and **UT-0869**, not by a fifth notice assertion. The S5 `anon`-badge carve-out is annotated and the copy question it raises is routed to Doc 03 as **OPEN-27** rather than ruled here. **All three v1.4.0 Lows discharged** (ISS-C2-01, ISS-C2-02, ISS-C2-03) with two further stale pins swept; none carried. `TC` re-cut owed from the tester at Doc 07 v2.7.0 / Doc 08 v2.10.0. **v1.4.0** was submitted 2026-09-06 and Approved at PASS 96% (0C/0H/0M/3L) — rework cycle 1 against the v1.3.0 technical review (FAIL 89%; 0C/0H/2M/6L): §0.5 S4's clause range corrected to (a)–(d) and annotated with the PO routing; the S4/S5 correctness over-claim withdrawn from the Status block and annotated in the v1.3.0 changelog entry; all six Lows taken rather than carried. **v1.3.0** was submitted 2026-09-06 — the FR-131 cascade that corrected `A-02.6` and `OPEN-01` off the retired "votes are anonymous but not receipt-free" framing and closed `ISS-10`; cycle 1 verified both corrections and they are not re-opened. **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which v1.3.0 closed; keeping this row current at every version is the standing discipline that Low bought. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
````
REPLACE WITH:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-20 | **v1.7.0, Status: In Review.** Debt-closure increment (session record: artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md, row 3); neutral reviewer assigned by the project-manager **before dispatch**: **tester** (Ji-woo Park). Cycle 1 of a fresh loop; the v1.6.0 lineage closed PASS at 96%. **`OPEN-27` is CLOSED, on a ruling and not on age.** Doc 03 **v2.14.0 §10.12.3** — the copy authority — re-examined the DES-094 `anon` **title and subtitle** against **FR-131 clause (e)** (Doc 02 **v2.17.3** §4.45; §8 Scenarios 8 and 9) and ruled **both NOT COMPLIANT in Definition-A (v1)**, superseding the v2.13.0 TITLE disposition and the 2026-08-25 subtitle decision in place and specifying the v1 variants at its new **clause 10** (title "Open tier"; a **context-selected** subtitle over clause 8's three contexts; a **fail-honest default**). **This plan cites the ruling and does not make one** — the division `OPEN-27` was minted to protect, and which the v1.6.0 reviewer called "the strongest judgement in the version". **Consequence, applied at every site rather than only where the item is registered: §0.5 S5's named `anon`-badge carve-out is WITHDRAWN, not narrowed**, and **S5 rule 4 now counts ONE carve-out, not two** (clause (a)'s mandated negated forms; `UT-0887` unaffected). Sites taken: S5's carve-out blockquote (superseding banner **and** its "Until Doc 03 rules" tail), S5 rule 4, **S4's** scope-before-count sentence, §1.4's status roll-call, §13's gate-blocking bullets, §13's `OPEN-27` row, the `Source:` block's Doc 03 pin, and this row. **The two strings are recorded as a ruled, remediation-pending FAILURE (`OPEN-28`), never as an exception**, and **no build fails today**: the `packages/ui` scan S5 specifies is unimplemented and `PrivacyStatus` is mounted on **no shipped surface** (six non-render comments across five consuming files, re-verified by Doc 09 v1.9.0; Doc 06 v2.8.1 §7 item 18), so **no citizen sees either string** — a **pre-mount** posture, the opposite of the `ver` title, which shipped and had to be caught in code by Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`. **Three successors minted, none renumbered or reused:** **`OPEN-28`** (implement clause 10 and satisfy its five-condition render trigger before first mount — noting that a green `getByText('Anonymous')` assertion in `packages/ui/test/PrivacyStatus.test.tsx` currently pins the non-compliant string); **`OPEN-29`** (Doc 03 clause 6's screen-3.6 wireframe copy — newly in clause-(e) scope, **named and routed, NOT ruled**, and not a shipped string); **`OPEN-30`** (the deferred §14 reconciliation). **The three v1.6.0 carried Lows taken explicitly: ISS-07 FIXED** (Doc 06 re-pinned v2.7.0 In Review → **v2.8.1 Approved** at both live locations; the third location the report named is now a retained historical record); **ISS-09 DISCHARGED by supersession**; **ISS-08 DEFERRED with a named trigger, an owner and an id** (`OPEN-30`, due after Doc 07 v2.9.0 is Approved) because §14 cannot honestly be reconciled against a Doc 07 mid-rework in this same session. **Pins swept to HEAD before submission, with currency stated honestly:** Doc 02 **v2.17.3**, Doc 03 **v2.14.0 In Review** (last Approved v2.13.0), Doc 05 v2.5.0, Doc 06 **v2.8.1**, Doc 07 **v2.8.1** and Doc 08 **v2.11.3** — the last two **Approved at HEAD and being incremented in this same session**, cited as such, with no statement here depending on their in-flight content — and Doc 09 v1.9.0. **§14 is untouched and its reconciliation pin is deliberately not advanced**, so its standing re-read instruction is not tripped. **No `TC`, `UT` or `US` is minted, renumbered or reused; no test status is upgraded; no product code is written or edited.** **Not re-opened:** `OPEN-20` and §13's Definition-A blocker bullet; and the clause-(e) substance the v1.6.0 review instructed must not be re-opened. _(Row history: **v1.6.0** was submitted 2026-09-06 and **Approved at PASS 96%** (0C/0H/0M/3L; reviewer: reviewer-qa, neutral, PM-assigned) with three Lows carried — ISS-07, ISS-08, ISS-09 — all three taken above. Its own row text, retained verbatim:)_ **v1.6.0, Status: In Review.** Rework **cycle 2 of 5** against the v1.5.0 technical review (FAIL 92%; 0 Critical / 0 High / 1 Medium / 5 Low; reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned). All six findings taken on this touch, none carried: **ISS-01 (Medium)** — §14's `TC`-range reservation register reconciled against **Doc 07 v2.6.0 §2** (TC-3564–TC-3567 → `TS-ADV-01…16`, TC-3568 → `TS-SCAFFOLD`, TC-3569 → `TS-ABSENCE`; the `TS-V1-*` reservation narrowed to **TC-3570–TC-3699**), with its three echoes at §0.4, the v1.1.0 changelog entry and Downstream; **ISS-02** — `OPEN-20` narrowed to the surviving `TS-PROPOSALS` half and deliberately left **open** and gate-blocking; **ISS-03** — `UT-0889` re-stated as **landed and green** (25/25, executed by the cycle-1 reviewer on 2026-09-06; registered in Doc 06 at v2.6.0, unchanged at **v2.7.0 In Review**) at all three mentions; **ISS-04** — Doc 03's re-open trigger **(iv)** disposed of by name in both §0.5 S5 and `OPEN-27`, completing the not-lapsed conclusion; **ISS-05** — S4's carve-out count scoped before it is stated; **ISS-06** — §1.4 re-wrapped. **Pins swept to HEAD before submission** rather than left for the next reviewer to catch: **Doc 02 → v2.17.1 (Approved)**, clause (e) unchanged plus its §8 Scenarios 8 and 9; **Doc 06 → v2.7.0 (In Review)**, last Approved v2.5.1; Doc 07 v2.6.0 and Doc 08 v2.9.0 Approved. **No `TC`, `UT`, `US` or `OPEN-##` is minted, renumbered or reused; no test status is upgraded.** The clause-(e) substance is **not re-opened**, per the review's routing instruction. _(Row history: **v1.5.0** was submitted 2026-09-06 and **FAILed cycle 1 at 92%** on one Medium — the `TC`-register drift this version closes. It was not a rework cycle but a **requirement cascade**: FR-131 **clause (e)** was ruled in by the approver on 2026-09-06 and applied as Doc 02 v2.17.0, so the question §0.5 S4 routed to the product-owner at v1.4.0 is answered and S4/S5 are re-cut to the amended closing sentence. The notice-clause range stays **(a)–(d)**; clause (e) is scanned at S5 and guarded by **UT-0889 (Doc 06 v2.6.0)** and **UT-0869**, not by a fifth notice assertion. The S5 `anon`-badge carve-out is annotated and the copy question it raises is routed to Doc 03 as **OPEN-27** rather than ruled here. **All three v1.4.0 Lows discharged** (ISS-C2-01, ISS-C2-02, ISS-C2-03) with two further stale pins swept; none carried. `TC` re-cut owed from the tester at Doc 07 v2.7.0 / Doc 08 v2.10.0. **v1.4.0** was submitted 2026-09-06 and Approved at PASS 96% (0C/0H/0M/3L) — rework cycle 1 against the v1.3.0 technical review (FAIL 89%; 0C/0H/2M/6L): §0.5 S4's clause range corrected to (a)–(d) and annotated with the PO routing; the S4/S5 correctness over-claim withdrawn from the Status block and annotated in the v1.3.0 changelog entry; all six Lows taken rather than carried. **v1.3.0** was submitted 2026-09-06 — the FR-131 cascade that corrected `A-02.6` and `OPEN-01` off the retired "votes are anonymous but not receipt-free" framing and closed `ISS-10`; cycle 1 verified both corrections and they are not re-opened. **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which v1.3.0 closed; keeping this row current at every version is the standing discipline that Low bought. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
````

---

## Post-application checklist (for the applier)

- [ ] The **Doc 03 spec was applied first**. Doc 03 now reads v2.14.0.
- [ ] All 15 `FIND`s matched exactly once. If any matched 0 or 2-or-more times, the spec was
      refused whole and returned to the architect.
- [ ] **OP 14 and OP 15** — the two multi-thousand-character single-line table rows — matched
      whole, not as a prefix.
- [ ] `Version:` reads **1.7.0**; `Status:` reads **In Review**, names
      `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md` and the neutral reviewer
      (**tester**, Ji-woo Park).
- [ ] `Last updated:` reads **2026-09-20**; `Changelog:` carries a **v1.7.0** entry above the
      retained v1.6.0 entry; no prior entry lost.
- [ ] Every `OPEN-27` site now records the closure: §0.5 S5 banner, §0.5 S5 tail, S5 rule 4,
      S4's sentence, §1.4 roll-call, §13 bullets, §13 row, §22 row, `Source:` Doc 03 pin.
- [ ] **`OPEN-28`, `OPEN-29`, `OPEN-30`** each appear as exactly one new §13 row; `OPEN-27` is
      marked CLOSED; **`OPEN-20` is untouched** and still in the Definition-A Gate-2 blocker
      bullet.
- [ ] **§14 is byte-identical to v1.6.0.** No `TC` id anywhere in this document changed.
- [ ] No file under `packages/`, `apps/` or `services/` is touched by this spec.
