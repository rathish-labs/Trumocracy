# Test Strategy & Master Test Plan — Trumocracy

```
Document ID:   MTP-TRUMOCRACY
Version:       1.7.1
Status:        Approved — 04-test-strategy-master-plan-v1.7.1-technical-cycle2.md (PASS 97%, 0C/0H/0M/3L; reviewer: tester; three Lows carried, non-blocking, to fold at the next touch: ISS-C2-01 a paraphrase inside quotation marks attributed to the Doc 07 cycle-1 review (substance faithful, wording anachronistic); ISS-C2-02 S0.4's 'Live suites' table is a second echo of Doc 07 S2, five versions stale (TS-SCAFFOLD 19/16 vs 20/17) — the free-band echoes were re-cut, this table was not; ISS-C2-03 S14's TS-FUNC row cites Doc 02 v2.16.3, figures verified still correct at v2.17.3 (pre-existing)). Previously: In Review — v1.7.1 (2026-09-20). **Rework cycle 2 of 5** against
               artifacts/reviews/04-test-strategy-master-plan-v1.7.0-technical-cycle1.md
               (**FAIL 94%; 0 Critical / 0 High / 1 Medium / 2 Low**). Neutral reviewer:
               **tester** (Ji-woo Park, new instance), assigned by the project-manager **before
               dispatch** per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md — the same reviewer
               and the same recorded grounds and exclusions as cycle 1.
               **PATCH bump, and the claim is stated exactly.** **No normative rule changes.**
               The withdrawal of the `anon`-badge carve-out, S5 rule 4's count of **ONE**, S4's
               unchanged count, the `OPEN-27` closure, the `OPEN-28` / `OPEN-29` / `OPEN-30`
               mints, the pin sweep, the retained lapse analysis and the four-step mechanical
               scan instruction are carried into v1.7.1 **unchanged** — the reviewer verified
               each against HEAD and wrote *"Nothing else needs reworking."* **The ruling is Doc
               03's and is untouched:** this plan still **cites** and does not reason it.
               **THE MEDIUM — ISS-01 — FIXED. §11.2's tooling-register row, the eighth site,
               which was never named.** The live row for the **build-failing S5 denylist control**
               (owner **Nadia Hassan**; controls `DES-085`, `DES-098`, **`FR-131(e)`**) still
               ended *"Two carve-outs only: clause (a)'s mandated negated forms, and the named
               `anon`-badge exception. See §0.5 S5."* It is not inside any retained or superseded
               block — it is a **current row in a current section, describing the very control the
               withdrawal changes**. It contradicted **S5 rule 4** on a count ("ONE carve-out, and
               only one"), and, worse, it recorded as an **exception** exactly what rule 4 says
               MUST NOT be one — because **an exception asserts compliance and a failure asserts
               work**. It is now swept in the same annotate-don't-delete form used at the other
               five sites: the v1.5.0 annotation is retained verbatim as the record, and a
               **v1.7.1** annotation is appended withdrawing the named exception, restating the
               control's carve-out count as **one**, and recording the two `PrivacyStatus` `anon`
               strings as **in scope and failing**, tracked as **`OPEN-28`**, never as an
               exception. **Seven of the eight sites v1.7.0 named were clean; this was the eighth,
               and the reason it was missed is upstream:** Doc 03 v2.14.0's Downstream instruction
               enumerated **five** sites when there are **six**, which was Doc 03's own cycle-1
               **ISS-02 (Medium)**. **That instruction is corrected first, at Doc 03 v2.14.1**,
               and this sweep answers the corrected six-site enumeration — the instruction, then
               the site, in that order. **The "every site" claims are corrected with it:** this
               block and the changelog now enumerate **six**.
               **BOTH LOWS TAKEN. ISS-03 — the bump rationale.** The v1.7.0 rationale a reader met
               first read *"a **build-failing** carve-out is withdrawn"*, which alone implies a
               control that fails builds **today**; the qualification arrived forty lines later.
               The v1.7.0 sentence is a retained historical record below and is **not edited**;
               the true position is stated here instead, as the cycle-1 reviewer of Doc 03
               v2.13.0 accepted for a verbatim-retained block: **what v1.7.0 withdrew was a
               carve-out to a specified-but-unimplemented build-failing control.** The
               `packages/ui` string scan S5 specifies **is not implemented** (the guards that
               exist — `UT-0869`, `UT-0887`, `UT-0889`, `UT-0759` — are scoped to `apps/web` i18n
               strings and to the `ver` state), and `PrivacyStatus` is mounted on **no shipped
               surface**, so **no build is failing and no citizen sees either string**.
               **ISS-02 — `OPEN-30`'s trigger. It has FIRED, and this version DISCHARGES the item
               rather than only recording the firing.** **Doc 07 is now v2.9.0 (Approved)** — it
               PASSed its cycle-1 technical review at 97% (0C/0H/0M/4L; reviewer-qa) on
               2026-09-20 — which is precisely the trigger `OPEN-30` names: *"the first touch of
               this document after Doc 07 v2.9.0 is Approved."* **Why this version does the
               reconciliation rather than deferring it again, stated because the cycle-1 report
               advised against attempting it:** the report's instruction was *"do not attempt the
               reconciliation in a **Low-only** rework"* — this is **not** a Low-only rework, it
               carries a Medium; the deferral's own stated reason ("a register reconciled today is
               stale before the session closes, because Doc 07 is mid-rework") **has expired**,
               Doc 07 having closed its loop at **Approved**; the **project-manager's dispatch for
               this cycle directs the discharge**; and Doc 07 v2.9.0's own cycle-1 review raised
               the staleness as its **ISS-01 (Low)** and routed it *"to Ravi Deshmukh now, while
               Doc 04 v1.7.1 is open."* **This version is therefore no longer pinning a number it
               cannot see.** **§14's standing instruction is honoured in full and in the same
               touch:** the Doc 07 **bibliographic** pin is advanced to **v2.9.0 (Approved)** and
               §14 is **re-read against Doc 07 v2.9.0 §2** in the same touch, exactly as the
               instruction requires. **What §14 now records, from Doc 07 v2.9.0 §2:**
               `TS-ADV-01…16` = TC-2600–TC-2752, **TC-3564–TC-3567**, **TC-3570–TC-3576** and
               **TC-3577–TC-3591** (69 cases / 49 automated / 20 Blocked), and the six `TS-V1-*`
               suites' reservation is **narrowed from TC-3570–TC-3699 to TC-3592–TC-3699** — the
               **22** ids in between having been drawn by Doc 07 into `TS-ADV-01…16`, not into any
               `TS-V1-*` suite. **108 of the band's ids remain free, and none of the six `TS-V1-*`
               suites has minted an id.** The two echoes are re-cut with the rows, as the v1.6.0
               remedy required: **§0.4**'s "reserved for them at §14" sentence and **Downstream**'s
               reserved-band sentence. The free-band disclosure now **names the suite** drawing on
               the band (`TS-ADV-01…16`) and no longer needs the "cannot see" wording, because the
               version it declined to rely on is now **Approved**. **`OPEN-30` is CLOSED at
               v1.7.1, on a reconciliation and not on age.** **This is a register correction, not
               a normative change:** it mints no `TC`, re-statuses none, records ids the tester
               owns, and narrows a reservation this document owns — which is why the bump stays a
               **patch**. `TS-ABSENCE` and `TS-SCAFFOLD` were re-read against Doc 07 v2.9.0 §2 in
               the same pass and are **unchanged** (TC-1600–TC-1614 + TC-3569; TC-3470–TC-3488 +
               TC-3568).
               **Sites touched by this version, enumerated rather than claimed:** §11.2's
               tooling-register row (the Medium); §13's `OPEN-30` row and §13's not-gate-blocking
               and closed-item bullets; §1.4's roll-call; the `Source:` block's Doc 07 and Doc 08
               pins; §14's `TS-ADV-01…16` row, its `TS-V1-*` row and its standing-instruction
               note; §0.4's free-band sentence; Downstream's reserved-band sentence; this block,
               the changelog and §22's Approvals table. **No Low is carried forward.**
               **Doc 08 is NOT read as settled here.** It is at **v2.12.1 (In Review)** on disk,
               last **Approved v2.11.3**, and is mid-rework in the tester's hands; its status is
               re-pinned bibliographically and **nothing in this version depends on its content or
               comments on it**. **`OPEN-20` is untouched**, as in v1.7.0.
               **No `TC`, `UT`, `US` or `OPEN-##` is minted, renumbered or reused; no test status
               is upgraded; no product code is written or edited.**
               _(v1.7.0 record, retained verbatim per annotate-don't-delete — its Medium and its
               two Lows are taken above:)_
               In Review — v1.7.0 (2026-09-20). **`OPEN-27` is CLOSED, and this document records
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
               PM-assigned; three Lows carried, non-blocking, to fold at the next touch (see the report)). Previously: In Review — v1.6.0, **rework cycle 2 of 5** against
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
               0C/0H/0M/3L; reviewer: reviewer-qa, neutral, PM-assigned). Three Lows carried —
               **fix first on any future touch:** ISS-C2-01 (Doc 07 pinned v2.4.4 in Source and
               §1.4 — Doc 07 is In Review at v2.5.0+), ISS-C2-02 (§1.3 no-story annotation pins
               Doc 05 v1.0.0/v2.3.0 — Doc 05 is Approved at v2.5.0), ISS-C2-03 (Source block Doc 09
               line pins v1.5.0 — Doc 09 has moved on). This was **rework cycle 1 (v1.4.0,
               2026-09-06)** against
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
Owner:         Ravi Deshmukh — Principal Architect
               (CLAUDE.md assigns Doc 04 to the architect. Doc 03 — cited as v2.11.2 (Approved)
                when this line was written at v1.1.0, and **now v2.13.0 (In Review)**; the
                citation is the historical provenance of the owner name, not a version pin, and
                the `Source:` block below carries the live pin _(v1.4.0, cycle-1 ISS-07)_ — names
                Ravi Deshmukh as Principal Architect; Doc 02 v2.16.3 (Approved) §2.7 names
                Priya Raghunathan as Product Owner, accountable for Docs 01/02/05 — not 03/04.
                v1.0.x named Priya Raghunathan as "Principal Architect" and was wrong on both
                counts. Corrected at v1.1.0 per review ISS-04; OPEN-09 re-scoped. Per-suite
                owners below are named individuals drawn from the Doc 02 §2.7 stakeholder table.)
Approvers:     reviewer-qa · Engineering · SRE · Product Owner
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
               BKLG-TRUMOCRACY (docs/05-product-backlog.md **v2.5.0**, Approved — re-pinned at
               v1.4.0 from the stale "v2.3.0, In Review" pin, cycle-1 ISS-05; `OPEN-21` remains
               live and correct on its merits and is re-pinned in its own body too)
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
               _(v1.7.1 — **the Doc 07 and Doc 08 pins are re-cut; the v1.7.0 text above is
               retained verbatim and annotated, not deleted.** **Doc 07 is now v2.9.0
               (Approved)** — 07-test-cases-suites-v2.9.0-technical-cycle1.md, **PASS 97%**
               (0C/0H/0M/4L; reviewer: reviewer-qa), 2026-09-20 — having minted
               **TC-3577..TC-3591**, one case per `it` of the `UT-0890` block, into
               `TS-ADV-01…16`. **Doc 08 is now v2.12.1 (In Review)**, last **Approved v2.11.3**;
               it is mid-rework in the tester's hands, is **not read as settled here**, and
               **nothing in this version depends on its content**.
               **THE RECONCILIATION PIN IS ADVANCED WITH THE BIBLIOGRAPHIC ONE, IN THIS SAME
               TOUCH — which is the whole of §14's standing instruction and the whole of
               `OPEN-30`.** v1.7.0 kept the two pins apart deliberately and said why: Doc 07 was
               mid-rework, so a register reconciled that day would have been stale before the
               session closed. **That reason has expired.** §14's `TC`-range **reconciliation**
               pin therefore moves **Doc 07 v2.6.0 → Doc 07 v2.9.0 (Approved)**, §14 is re-read
               against **Doc 07 v2.9.0 §2** in the same touch as the instruction requires, and
               **`OPEN-30` is CLOSED**. **The distinction between the two kinds of pin is not
               abandoned — it is discharged:** it existed so that a bibliographic pin could never
               silently imply a content re-read, and here the content re-read is done and named.
               See §14, §0.4, Downstream and `OPEN-30`.)_
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
Last updated:  2026-09-20
Changelog:     2026-09-20 v1.7.1 — **Rework cycle 2 of 5 against
               artifacts/reviews/04-test-strategy-master-plan-v1.7.0-technical-cycle1.md**
               (FAIL 94%; 0C / 0H / 1 Medium / 2 Low; neutral reviewer: **tester**, Ji-woo Park,
               PM-assigned). **PATCH bump: one missed site swept, two Lows taken, and one
               register reconciled. No normative rule changes.** This entry describes only what
               changed.
               **ISS-01 (Medium) FIXED — §11.2's tooling-register row, the sixth carve-out site.**
               The live row for the build-failing S5 denylist control still read *"Two carve-outs
               only: clause (a)'s mandated negated forms, and the named `anon`-badge exception"* —
               a current row in a current section, contradicting S5 rule 4's **ONE** on a count
               and recording as an **exception** what rule 4 says MUST NOT be one. Swept in the
               annotate-don't-delete form used at the other five sites. **The "every site" claim
               is corrected with it: there are SIX sites carrying the carve-out**, and they are
               enumerated in the Status block and in Doc 03 v2.14.1's corrected Downstream
               instruction. The omission was upstream — Doc 03 v2.14.0 enumerated five — and the
               instruction was corrected **first**, at Doc 03 v2.14.1, before this sweep.
               **ISS-03 (Low) TAKEN** — the bump rationale a reader meets first is restated with
               the qualification it lacked: **a carve-out to a specified-but-unimplemented
               build-failing control was withdrawn**. The v1.7.0 sentence is a retained historical
               record and is not edited.
               **ISS-02 (Low) TAKEN — and its item, `OPEN-30`, is CLOSED rather than merely
               annotated.** **Doc 07 reached v2.9.0 (Approved)** on 2026-09-20 (PASS 97%,
               0C/0H/0M/4L, reviewer-qa), which **fires `OPEN-30`'s trigger** by name. The Doc 07
               bibliographic pin is advanced **and §14 is re-read against Doc 07 v2.9.0 §2 in the
               same touch**, exactly as §14's standing instruction requires. **§14 re-cut:**
               `TS-ADV-01…16` now records **TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576,
               TC-3577–TC-3591** (69 cases / 49 automated / 20 Blocked), and the six `TS-V1-*`
               suites' reservation is **narrowed from TC-3570–TC-3699 to TC-3592–TC-3699** — 22
               ids having gone to `TS-ADV-01…16` rather than to any `TS-V1-*` suite, leaving
               **108 free**, with **none of the six suites having minted an id**. The **two
               echoes** are re-cut with the rows (**§0.4** and **Downstream**), as the v1.6.0
               remedy for the same register established, and the free-band disclosure now
               **names the suite** drawing on the band. `TS-ABSENCE` and `TS-SCAFFOLD` were
               re-read in the same pass and are **unchanged**. **This is a register correction,
               not a normative change:** no `TC` is minted, none is re-statused, ids the tester
               owns are recorded and a reservation this document owns is narrowed — the same
               operation, and the same reasoning, as the v1.1.0 and v1.6.0 re-cuts of this table.
               **Pins:** Doc 07 → **v2.9.0 (Approved)**; Doc 08 → **v2.12.1 (In Review)**, last
               Approved v2.11.3, **mid-rework and not read as settled**, with no statement here
               depending on its content. All other pins unchanged.
               **Untouched, deliberately:** the ruling (Doc 03's, cited not reasoned); S5's four
               rules and the claims test; S4's (a)–(d) notice range; `OPEN-20`; `OPEN-28` and
               `OPEN-29`; §0.6's buckets; `A-02.6`; every test status. **No `TC`, `UT`, `US` or
               `OPEN-##` is minted, renumbered or reused; no product code is written or edited.**
               2026-09-20 v1.7.0 — **`OPEN-27` CLOSED. Doc 03 v2.14.0 ruled; this plan records
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
               26(a), `artifacts/engineer-2026-09-05T1700.md` (commit 0a5c542; merged to main in
               PR #19 as 84e2203), Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`, and the approver's
               direction of 2026-09-05 / 2026-09-06 (Rathish).
               **A-02.6 (§8, `TS-ADV-02`) CORRECTED — it was false on both counts.** The pass
               criterion read "The UI states that votes are anonymous but **not** receipt-free —
               the flag's own description requires it." v1 votes are **not anonymous**, and
               `packages/protocol/src/flags.js` `MACI_VOTING.description` now says exactly that.
               The case now asserts the FR-131(a)/(b)/(c) content and the four-word ban, and names
               the tests that already enforce it (`UT-0887`, `UT-0888`, `UT-0759`). Its
               substantive point is unchanged: this **still** does not satisfy `FR-031`/`FR-032`/
               `NFR-003`, which are **Must**, and it remains recorded as `OPEN-01`.
               **OPEN-01 (§13) CORRECTED** for the same false clause ("Without MACI, votes are
               anonymous but **not** receipt-free — the flag's own description says so"), with its
               impact, owners and Gate-2-blocker status unchanged. A finding that a Must guardrail
               is undelivered does not need a false premise to stand.
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
               **ISS-10 (the Low carried from v1.2.0, owed on the next touch) CLOSED** — §22's
               architect Approvals row described the v1.1.0 submission; it now describes v1.3.0.
               §22's "Downstream" note re-pins Doc 06 from Approved v2.4.3 to Approved v2.5.1.
               2026-09-01 v1.2.0 — **Rework cycle 2 against
               `artifacts/reviews/04-test-strategy-master-plan-v1.1.0-technical-cycle2.md`
               (FAIL 94%; 0 Critical / 0 High / 1 Medium / 1 Low; reviewer: engineer,
               neutral).** Minor bump: a Medium finding makes a minor bump the floor.
               **ISS-08 (Medium) CLOSED** — §0.6's Gate-2 rollup read "five covered, two
               partial, six no suite", contradicting its own 13-row table, which shows
               **4 / 2 / 7**; the 5/2/6 split only reconciled by silently counting
               `FR-127` as covered against its own "No v1 suite." row. Recounted to
               **4 covered / 2 partial / 7 no suite**, each bucket now naming its FRs, and
               the bucketing rule stated normatively at the table: a Definition-B suite
               (`TS-CR1`, all 46 cases Blocked) never buys a Definition-A row. The same
               undercount is corrected everywhere it propagated — **OPEN-18** (§13), the
               §18 metric row and §21's coverage qualifier now read **47 + 7 = 54**.
               **ISS-09 (Low) CLOSED** — §16 carried two back-to-back `CON-007` "scope
               absorbs overrun, not the date" paragraphs after the Definition-B milestone
               table; the superseded v1.0.x copy ("walking-skeleton capability") is merged
               into the v1.1.0 copy, keeping its `OI-02` citation.
               2026-08-31 v1.1.0 — **Rework cycle 1 against
               `artifacts/reviews/04-test-strategy-master-plan-v1.0.2-technical-cycle1.md`
               (FAIL 46%; 2 Critical / 2 High / 2 Medium / 1 Low; reviewer: engineer,
               neutral).** Minor bump: two Criticals make a minor bump the floor. This
               document remains ONE file.
               **ISS-01 (Critical) CLOSED** — `Source:` re-pinned from the superseded SRS
               v1.0.0 (61 FR / 26 NFR / 16 RISK / 12 CON) to the Approved SRS v2.16.3
               (133 FR minted, 131 active, 114 Must · 28 NFR, 24 Must · 27 requirement-level
               RISK rows · 15 CON) and Backlog v2.3.0. §1.3 scope, §2.1 objectives, §2.2 risk
               banding, §8 lead-in, §9 (now NFR-001…NFR-028, with full method / instrument /
               threshold / owner rows for **NFR-027** and **NFR-028**), §14 and §21's coverage
               assertion all extended. Suite-level mapping for **FR-074…FR-133** added at
               §0.6; adversarial suites `TS-ADV-22`…`TS-ADV-32` for **RISK-22…RISK-32** added
               at §0.8 with band assignments at §2.2.
               **ISS-02 (Critical) CLOSED** — new **§0**, a Definition-A (v1) test-strategy
               track running parallel to the Definition-B material, which is retained whole,
               unaltered and unweakened. §0.1 states normatively which track governs which
               release, so a Gate-2 packet for v1 cannot be assembled against v2 evidence and
               §10.2 cannot be quietly waived.
               **ISS-03 (High) CLOSED** — §14's `TC`-range table reconciled against Doc 07
               v2.4.4 §2: `TS-ADV-01…16` narrowed to TC-2600–TC-2799 (actual high-water
               TC-2752) and TC-2800–TC-3199 reserved for `TS-ADV-22`…`TS-ADV-32`; `TS-GOV2`
               narrowed to its actual TC-3400–TC-3469; reservations added for `TS-SCAFFOLD`,
               `TS-PARTY` (incl. the out-of-block TC-3541), `TS-MEMBERSHIP` and
               `TS-PROPOSALS`; TC-3564–TC-3699 reserved for the six unminted v1 suites _(v1.6.0,
               cycle-1 ISS-01: that reservation is **narrowed to TC-3570–TC-3699** at v1.6.0 —
               Doc 07 v2.5.0 minted TC-3564..TC-3569 into three other suites. This sentence is
               retained as the historical record of what v1.1.0 did, not as a live reservation;
               §14 governs)_. The
               `UT-####` reservation block, which had also failed, is replaced with the actual
               Doc 06 v2.4.3 allocation (OPEN-26).
               **ISS-04 (High) CLOSED** — `Owner:` corrected to Ravi Deshmukh — Principal
               Architect; §22 Approvals row corrected; `OPEN-09` re-scoped (the ownership half
               closes; the no-named-QA-Lead half stays open and is re-assigned).
               **ISS-05 (Medium) CLOSED** — `OPEN-17` **closed** on verified evidence:
               `packages/contracts/package.json` exists with a `test` script, `test/` holds
               five suites (adversarial · differential · governance · lifecycle ·
               deployment-safety) plus `fixture.mjs`, root `verify` runs
               `lint:deps && compile:contracts && typecheck && test` across workspaces, and
               Doc 06 v2.4.3 (Approved) §3 records 95 passing contract tests of 610 total.
               §1.2, §3, §11.2 and §16 updated to match.
               **ISS-06 (Low) CLOSED** — `OPEN-16` **closed** on verified evidence: `docs/adr/`
               holds ADR-001…ADR-025, and the dangling "ADR-017" sponsorship citation is gone
               — ADR-001 contains no ADR-017 reference at all and ADR-002 now cites ADR-014.
               Doc 03 v2.11.2 records the resolution.
               **ISS-07 (Medium) CLOSED** — §16 re-anchored to Doc 02 v2.16.3 §11 / `CON-007`:
               **Gate-2 readiness 2027-05-14, launch 2027-06-01** (was 2027-02-15 /
               2027-03-01), and split into a Definition-A critical path and a Definition-B
               track that carries no committed date.
               Nine open items minted: **OPEN-18 … OPEN-26**.
               2026-08-21 v1.0.2 — §Z6 ceremony-burden line: replaced "Contributor count
               (≥ 500)" with assurance-based-target wording per ADR-022 (REC-1;
               DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md). Version bump only —
               no structural change.
               2026-08-12 v1.0.1 — §14 TC-range reservation table: appended TS-CR1
               (TC-3300–TC-3399) and TS-GOV2 (TC-3400–TC-3499) retroactively to
               regularise ranges already in use by Doc 07 (minted 2026-08-10 and
               2026-08-11 respectively). Trigger: Doc 07 v2.0.0 cycle-1 review ISS-04
               (artifacts/reviews/07-test-cases-suites-v2.0.0-technical-cycle1.md).
               Full Doc 04 v2.x refresh remains explicitly out of scope — recorded as
               open item by the project-manager.
```

> **Based on:** ISO/IEC/IEEE 29119 + IEEE 829. **Produced in:** Design (drafted before code).
> **Approved at:** Gate 2 (exit).
> **Currency (v1.1.0).** **§0** is written against the repository as it actually exists on
> **2026-08-31** and against the Approved Doc 02 v2.16.3 / Doc 03 v2.11.2 / Doc 06 v2.4.3 /
> Doc 07 v2.4.4. **§1–§22** were written against the repository as it existed on **2026-08-09**
> and are the **Definition-B (v2)** plan; where they describe a capability as "not yet created"
> that statement is read as of that date and is corrected in place at §1.2 and §3 where the
> repository has since moved. Where a capability is required but not yet present, it is listed in
> §11.2 as *required, not yet present* with a named owner — never assumed into existence.
> **This document is one file.** It has never been split and MUST NOT be.

---

## 0. Delivery-track governance and the Definition-A (v1) test-strategy track

> **New at v1.1.0.** Closes review finding **ISS-02** (Critical) and the FR-121…FR-133 /
> NFR-027 / NFR-028 / RISK-22…RISK-32 halves of **ISS-01** (Critical).

### 0.1 Two tracks, and which one governs which release

Doc 02 §16 (Approved v2.16.3) splits delivery into two definitions. This plan now has a track for
each. **Neither replaces the other, and neither is partial credit toward the other.**

| Track | What actually ships | Identity backing | Ballot backing | Plan lives in | Governs |
|---|---|---|---|---|---|
| **Definition A — v1** | Conventional Next.js PWA + Postgres; the chain is a public **audit record only** (DES-097). Phone SMS for account creation and open-tier access; government-ID document check gating `FR-123` counting actions only (DES-100). **No ZK proof is verified anywhere.** | `IEligibilityVerifier` conventional backing — DES-095, ADR-024/ADR-025 | `IBallotService` conventional backing — DB `castBallot`, SQL `computeTally`, result hash to the audit contract — DES-096, DES-097 | **§0** | every release up to and including the **2027-06-01 v1 launch** (Doc 02 §11 / `CON-007`) |
| **Definition B — v2** | The same platform **plus** ZK anonymous enrolment, MACI receipt-free ballots, the trusted-setup ceremony, the coordinator committee, on-chain governance execution and the heavy external audits | ZK nullifier via `ICredentialAdapter` → `PersonhoodRegistry` (ADR-016/ADR-017) | MACI encrypted ballot + threshold coordinator; on-chain ZK tally proof (DES-023/024/025) | **§1–§22** | the deferred v2 release. **No committed date exists in Doc 02** — OPEN-22 |

**Normative track rules.**

1. A **Gate-2 packet for a Definition-A release MUST be assembled against §0.9**, not §10.2.
   §10.2 demands circuit evidence (`claims.json` Z2 coverage, `circomspect`), on-chain
   capability-absence snapshots and `TS-DIFF` divergence counts for a system that, per Doc 02
   §16.1.1, does not ship that way at v1. Presenting a v1 release against §10.2 would either block
   a correct release or — worse — invite someone to mark those criteria "N/A" and quietly lose the
   ones that *do* apply.
2. **§10.2 MUST NOT be relaxed, reduced or partially waived for v1 convenience.** It stays whole
   and stays the Definition-B bar. Passing §0.9 says nothing whatsoever about §10.2.
3. Where a §1–§22 statement is expressed against circuits, on-chain registries, MACI or `TS-DIFF`,
   it is a **v2** statement. Where it is expressed against `packages/protocol`, test-data discipline
   (§10.7), flake policy (§10.6), defect severity (§17) or the honest limits of capability-absence
   testing (§6.5), it applies to **both** tracks — §0.3 and §0.9 say which, explicitly, rather than
   leaving it to inference.
4. **A v1 suite MUST NOT be presented as evidence for a Definition-B requirement**, and a v1 surface
   MUST NOT claim a v2 property. §0.5 makes that a mechanical, build-failing test rather than a
   convention.
5. **Standing Musts.** Requirements classified PARTIAL or DEFERRED-v2 in Doc 02 §16.3 remain
   **Must for Definition B**. They are phased, not weakened (Doc 02 §16.5 standing statement). A v1
   Gate-2 packet MUST list them as *deferred with disclosure*, each carrying its Doc 02 §16.4
   honesty-register row (`H-01`…`H-19`) — never as *met*.

### 0.2 Definition-A test items — the repository as it exists on 2026-08-31

Verified by direct inspection on 2026-08-31. This replaces, **for the v1 track only**, the
2026-08-09 inventory at §1.2.

| Item | Location | State on 2026-08-31 | v1 disposition (DES-097) |
|---|---|---|---|
| Pure reference implementation | `packages/protocol/src/` | present; zero runtime dependencies, CI-enforced by `tools/dep-guard`; **150 unit tests** (Doc 06 v2.4.3 §3) | **As-is** — valid and load-bearing in both tracks |
| Conventional SDK seams | `packages/sdk/src/` — 16 modules including `eligibility.js` (DES-095), `ballot.js` (DES-096), `party-creation.js`, `proposals.js`, `identity.js`, `readmodel.js`, `transport.js`, `predict.js` | present; 12 test files under `packages/sdk/test/`; **244 unit tests** | **Adapt** — the v2 swap is seam-local by construction |
| Design system | `packages/ui/src/PrivacyStatus.tsx` (DES-094), `packages/ui/tokens.css` (DES-093) | present + `packages/ui/test/PrivacyStatus.test.tsx`; 14 unit tests | **As-is** — independent of the backing |
| Citizen client | `apps/web/` (Next.js PWA); tests `safety-surfaces`, `party-creation`, `join-membership`, `proposals` | present, 4 test files | **As-is with flags**; the DES-098 honesty notice is a v1 addition |
| Contracts (audit-record subset) | `packages/contracts/` — `package.json`, `vitest.config.mjs`, `test/` (adversarial · differential · governance · lifecycle · deployment-safety · fixture), `script/compile.mjs`, `script/deploy.mjs`, `src/promotion-gate.mjs` | **present and working — 95 passing tests** (Doc 06 v2.4.3, Approved). *This closes `OPEN-17`.* | **Adapt** — v1 deploys only the lightweight audit-record subset |
| Read model | `services/indexer/` | present; 16 unit tests including `UT-0525` (records no reader, query or IP) | **As-is** — a cache, never an authority |
| Test harness | `tools/evm-harness/src/index.mjs` | present, working, offline, deterministic | **As-is** |
| Layering guard | `tools/dep-guard/check.mjs` | present, working, build-failing | **As-is** |
| Circom circuits | `packages/circuits/circuits/` — three `.circom` sources (`personhood_enrol`, `residency_member`, `tenure_member`) + `README.md`; **no `package.json`, no test workspace, no ceremony artifact** | sources only; three of ADR-005's six circuits unwritten | **Untouched for v1** — v1 never calls a circuit |
| Independent verifier | `apps/verifier/` — **does not exist** | absent | **Untouched for v1** — meaningful only for MACI ZK tally proofs. Costs `NFR-019` its stated instrument — OPEN-24 |
| Relayer | `services/relayer/` — **does not exist** | absent | **Adapt (v2)**; v1 sponsorship of audit-record writes is not built |
| Production party store | Postgres backing of `IPartyStore` (DES-097(b), Doc 03 §10.13.12) — **does not exist**; the in-memory implementation returns `IS_INSECURE_MOCK = true` | absent | **Required for v1** — blocks `NFR-028`'s real control and the promotion gate. **OPEN-19** |
| E2E harness | `tests/e2e/` — **does not exist**; no headless driver selected | absent | **Required for v1 level V5** (§0.3) — §11.2, **OPEN-24** |

**Build under test.** Unchanged from §1.2: a single trunk commit, no long-lived branches (ADR-011),
incomplete capabilities dark behind flags. In v1 the flag surface is
`packages/protocol/src/flags.js` **only** — `FeatureFlags.sol` governs the on-chain governance
core, which v1 does not deploy. Every v1 suite therefore runs in at least two **software** flag
configurations.

### 0.3 Definition-A test levels (V0–V6)

Levels are numbered `V#` so they never collide with the Definition-B `L#` levels of §3. Where a
V-level *is* an L-level, that is stated rather than duplicated.

| Level | Scope | Lives in | Runner | Owner | Automated | Gate |
|---|---|---|---|---|---|---|
| **V0 — Pure unit** | `packages/protocol` governance rules, thresholds, state machines, region parsing, flags. **Identical to L0** — the module and its suite are shared by both tracks. | `packages/protocol/test/` | vitest 3.2.4 | Samuel Oyelaran (Engineering Lead) | Yes | pre-commit, pre-merge |
| **V1 — Seam unit** | The conventional seams: `IEligibilityVerifier` (DES-095) call-site placement and property honesty, `IBallotService` (DES-096) cast / change / tally, party creation, membership join / leave / history, proposals and the decision trail. Carries the §0.5 seam-honesty doctrine. | `packages/sdk/test/` | vitest | Samuel Oyelaran | Yes | pre-merge |
| **V2 — Store contract** | The 22-method `IPartyStore` interface (Doc 03 §10.13.12) as a **contract test run against every backing**: the in-memory implementation today, the Postgres backing when it lands. `INSERT`-only grant on `membership_event`, the `archived_at` `BEFORE UPDATE` refusal, unique partial index on the active-membership projection, and projection-equals-replay on a seeded fixture. | `packages/sdk/test/` + store integration *(Postgres half not yet runnable — **OPEN-19**)* | vitest | Samuel Oyelaran | Yes (in-memory) / not yet (Postgres) | pre-merge |
| **V3 — Component, copy & a11y** | `packages/ui` and `apps/web` components; the DES-098 honesty notice asserted **verbatim** against the SDD copy table; the DES-085 jargon filter; WCAG 2.2 AA component rules; the DES-094 backing-aware four-path test (absent / false / true / malformed). | `packages/ui/test/`, `apps/web/test/` | vitest + jsdom | Nadia Hassan | Yes | pre-merge |
| **V4 — Audit-record contract** | **Strict subset of L1/L2**: only the lightweight audit-record contract v1 actually deploys (petition milestones, tally result hashes, manifesto version hashes, activation events — DES-097), plus the `IS_INSECURE_MOCK` promotion gate. The full on-chain governance core that L1/L2/L3 target is **not deployed in v1** and its suites do not gate a v1 release. | `packages/contracts/test/` | vitest + `tools/evm-harness` | Samuel Oyelaran | Yes | pre-merge |
| **V5 — System / E2E** | Whole v1 citizen journeys against the deployed PWA + Postgres + audit contract: create party → petition → activate → join → propose → discuss → vote → tally → published hash. Includes the honesty notice at the point of the ballot. | `tests/e2e/` — **not yet created** (§11.2) | headless browser driver — **not yet selected** (§11.2) | Ji-woo Park (Test Lead) | Yes | pre-release |
| **V6 — Manual & exploratory** | Usability (`NFR-022`), screen-reader passes (`NFR-011`), locale review (`NFR-013`), plain-language review (`NFR-023`), **honesty-notice comprehension testing** (does a real user understand that this ballot is not private?), red-team, external audits. | Doc 07 + report artifacts | — | Nadia Hassan / Grace Mbeki / Rafael Duarte | No | Gate 2 |

**The two levels v1 does not have, stated rather than glossed.**

- **No `TS-DIFF` analogue.** L3 is the highest-value level in the Definition-B plan because two
  independent implementations of the same rules can be compared. In v1 the governance rules run in
  `packages/protocol` and are consumed by one service; there is no second oracle to differ from.
  `packages/protocol` remains differentially testable against the *audit contract* for the narrow
  set of values that contract stores, and that is worth building — but it is a fraction of the L3
  case space. **Recorded as OPEN-23. This is the single largest assurance difference between the
  two tracks and it is not recoverable by effort.**
- **No L4.** v1 verifies no proof, so there is no circuit to test. §7 in full is a v2 section. The
  v1 replacement is not a weaker circuit doctrine — it is §0.5, which tests that v1 **claims
  nothing a circuit would be needed to justify**.

### 0.4 Definition-A suites and their `TC` ranges

Live suites, as they exist in **Doc 07 v2.4.4 §2** (Approved). Ranges verified against that table
on 2026-08-31 and reserved at §14.

| Suite | `TC` range (Doc 07 v2.4.4 §2) | Cases | Automated | Covers | Level | Owner |
|---|---|---|---|---|---|---|
| `TS-SCAFFOLD` | TC-3470–TC-3488 | 19 | 16 (3 Blocked) | `FR-082`…`086` · `FR-122`…`124` · `FR-131`/`132` · DES-093…096 · DES-100 · ADR-023…025 | V1/V3 | Samuel Oyelaran |
| `TS-PARTY` | TC-3489–TC-3516, **TC-3541** | 29 | 28 (1 No mechanism) | `FR-010`/`011`/`012`/`013`/`018`/`020`/`077`/`130` · `BR-020` · DES-073/074/097/101 | V0/V1/V3 | Ji-woo Park |
| `TS-MEMBERSHIP` | TC-3517–TC-3540 | 24 | 24 | `FR-020`/`022`/`064`/`122`/`123`/`130`/`131(b)(d)` · `NFR-023` · DES-013/065/095/097 | V1/V3 | Ji-woo Park |
| `TS-PROPOSALS` | TC-3542–TC-3563 | 22 | 22 | `FR-024`/`079`/`080`/`090`/`091`/`092` · `FR-122`/`123` · `NFR-003`/`023` · DES-085/095/103…106 | V0/V1/V3 | Ji-woo Park |

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

**v1 capabilities with no suite at all.** Named here rather than left to be discovered at Gate 2.
**`TC-3570–TC-3699`** is reserved for them at §14; the tester mints the IDs. _(v1.6.0, cycle-1
ISS-01: this read "`TC-3564–TC-3699` is reserved for them at §14". Doc 07 v2.6.0 §2 shows
**TC-3564..TC-3569 already minted into other suites** — TC-3564–TC-3567 to `TS-ADV-01…16`,
TC-3568 to `TS-SCAFFOLD`, TC-3569 to `TS-ABSENCE` — so the free band now begins at **TC-3570**.
The band from TC-3570 is itself being drawn on by **Doc 07 v2.7.0, in progress** for the
clause-(e) rows; this plan states the floor it can verify and does not pin a number it cannot
see. **None of the six `TS-V1-*` suites has minted an id.**)_
_(v1.7.1, `OPEN-30`: **the reserved band is now `TC-3592–TC-3699`** — the sentence above reads
"`TC-3570–TC-3699`", which was true when written and is superseded here rather than rewritten.
Re-read against **Doc 07 v2.9.0 §2 (Approved 2026-09-20)** in the same touch that advanced the
Doc 07 pin, as §14's standing instruction requires. **Twenty-two ids have been drawn from the band
and all twenty-two went to `TS-ADV-01…16`** — **TC-3570..TC-3576** (`UT-0889`) and
**TC-3577..TC-3591** (`UT-0890`, fifteen cases) — **not to any of these six suites**. **108 ids
remain free, and none of the six suites has minted an id.** The suite drawing on the band is now
**named**, and the "does not pin a number it cannot see" caveat is **discharged**: Doc 07 v2.9.0 is
Approved, so this is a verified allocation rather than a declined reliance. See §14.)_

| Planned suite | Would cover | Blocked on | Owner |
|---|---|---|---|
| `TS-V1-BALLOT` | `IBallotService` v1 backing (DES-096): `castBallot`, `changeBallot` last-ballot-counts, `computeTally` SQL aggregate **including the §5.4 precision suite against the SQL path**, result-hash publication to the audit contract, `getTallyProperties()` honesty, and the §6.4 negative-authority matrix in its conventional form | ballot layer unbuilt; DES-096 must first gain the ballot-state accessor Doc 03 §10.13.13 records as owed | Aisha Nkemdirim |
| `TS-V1-NOTICE` | `FR-131`/DES-098 honesty notice at **SCR-13** (ballot booth) and **SCR-14** (post-vote confirmation) — non-dismissable, pre-confirmation, WCAG 2.2 AA (DES-081), screen-reader operable, forbidden-vocabulary scan. Doc 07 `TC-3481` is Blocked for exactly these two surfaces; clause (d) is partially delivered at the parties directory (`TC-3534`) | ballot surfaces unbuilt | Nadia Hassan |
| `TS-V1-ID` | `FR-126`/`FR-128`/`FR-132` and DES-100: on-device processing, **verify-and-discard** (allowlist `id_verified_flag`, `age_verified`, `issuing_region`, `subject_id_hash`, `phone_hash`, `verified_at`; everything else discarded), `subject_id_hash` deduplication at the counting gate, vendor no-retention posture | ID-check integration unbuilt; `CON-015` legal opinion outstanding (critical path) | Marcus Adeyemi |
| `TS-V1-SPAM` | `FR-133`/DES-099: VoIP/virtual-number intelligence, velocity and device signals, **flag-don't-block**, a first-class false-positive path, and the scope guard that the spam layer never excludes anyone from platform membership | spam layer unbuilt | Marcus Adeyemi |
| `TS-V1-AUDIT` | `FR-054`/`FR-092`/`FR-108` and DES-097: what the audit contract publishes and — as a capability-absence assertion — what it MUST NOT (no restricted or confidential-class field ever reaches the chain) | audit-record publication unbuilt; Doc 07 `TC-3487` Blocked | Rafael Duarte |
| `TS-V1-ENROL` | `FR-121` pilot-jurisdiction adapter schedule; `FR-125` non-invite fallback always open; `FR-129` attestor-plurality Charter guard | adapters unbuilt; `CON-015` | Marcus Adeyemi |

### 0.5 The seam-honesty doctrine — v1's analogue of §7

§7 exists because an under-constrained circuit passes every positive test. v1 has the mirror
hazard: **a conventional backing passes every positive test while silently claiming a guarantee it
does not provide.** The whole of v1's political safety rests on it never doing that. These six
classes are mandatory for every seam component and every user-facing surface.

**S1 — Property honesty is asserted as an absence, and the assertion is inverted.**
`IEligibilityVerifier.getProperties()` MUST return
`{ onePersonOneVote: false, subpoenaResistant: false, unlinkable: false, anonymityFloor: false }`
and `IBallotService.getTallyProperties()` MUST return
`{ receiptFree: false, coercionOverride: false, zeroKnowledge: false, publiclyVerifiable: true }`
(Doc 03 §10.13.2 / §10.13.3). A test asserting these are **`false`** is a capability-absence test
in the sense of §6: it fails the day someone flips one to `true` without swapping the backing.
That inversion is deliberate and MUST NOT be "fixed" — the day a v1 build reports
`onePersonOneVote: true` is the day the platform starts lying to a citizen about the one thing it
exists to be honest about.

**S2 — Mock / composite / honest-backing tiers (Doc 06 §2.1).** Stubs return `true`
(`StubPhoneVerifier`, `StubIdDocumentChecker` — they accept input without checking, so they lie).
Composites **delegate**: `ConventionalEligibilityVerifier.IS_INSECURE_MOCK()` returns
`this._phoneVerifier.IS_INSECURE_MOCK() || this._idDocumentChecker.IS_INSECURE_MOCK()`, and
`ConventionalBallotService` delegates to its eligibility verifier. The honest conventional backing
returns `false` — it is **not** a mock (Doc 03 §10.13.4). **Every new seam component ships the test
triple**: stub → `true`; real → `false`; composed-with-a-stub → `true`. A composite that returns
`false` while a dependency lies is a **Sev-1** defect (§17): it defeats the promotion gate.

**S3 — The promotion gate is a test, not a policy.**
`packages/contracts/test/deployment-safety.test.mjs` and `packages/contracts/src/promotion-gate.mjs`
block promotion past devnet while `IS_INSECURE_MOCK()` is true anywhere in the wired graph. **The
in-memory `IPartyStore` returns `true` today** (Doc 03 §10.13.12), so v1 cannot promote past devnet
until the DES-097(b) Postgres backing lands. That is the correct behaviour and this plan does not
seek a waiver for it. **OPEN-19.**

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
**_(v1.7.0 — the sentence above is SUPERSEDED on its count and retained on everything else.
S5 no longer carries "one more": Doc 03 v2.14.0 §10.12.3 ruled both `anon` strings NOT COMPLIANT
in v1, so the named `anon`-badge exception is WITHDRAWN and **S5 rule 4 now counts ONE** — the
same clause-(a) negated-form carve-out S4 counts. **S4's own count is unchanged at one**, and the
two are now the same one. What survives unchanged from the sentence above is the rule that settles
it, and that matters more than either number: the counts are stated per scope, and neither may be
applied outside its own section — if S5 later acquires a second exception it will be stated at S5
and counted there. The two `anon` strings are not gone from the scan; they are **in** it and
**failing** it, tracked as `OPEN-28`. See S5 rule 4 and the carve-out blockquote below.)_**

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
>
> **_(v1.5.0 — 2026-09-06: FR-131 was amended. The carve-out does NOT lapse; the question it now
> raises is routed, not answered here.)_** Doc 03's re-open trigger **(iii)** reads "FR-131 is
> amended to ban the four words **unconditionally** rather than 'to describe v1 voting
> behaviour'". Clause (e) (Doc 02 **v2.17.0** §4.45) widens the scope to **any v1 participation
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

**S6 — Call-site census.** `verifyEligibility()` MUST be invoked at exactly the three `FR-123`
counting call sites — strength contribution, binding-ballot admission, candidacy nomination — and
MUST NOT be invoked as a precondition of account creation or party-join (`FR-020`/`FR-122` are
absolute; Doc 03 §10.13.2). This is testable as a repo-wide census of production call sites, and it
is the mechanical form of the guarantee that *verification gates counting, never joining*. Current
state: **exactly two production call sites** (strength contribution and binding vote); the proposal
service holds no verifier — correct; the third (candidacy nomination) is unbuilt.

**What a green seam-honesty suite establishes — and what it does not.** It establishes that v1
**declares** its limits at the seam boundary and in its copy, and that a change which quietly
upgrades a claim fails the build. It establishes **nothing whatsoever** about the underlying
property: `receiptFree: false` asserted a thousand times still means votes are not receipt-free.
The honesty doctrine makes the absence *legible*; only Definition B makes it *absent*.

### 0.6 Definition-A functional coverage — `FR-074` … `FR-133`

Closes the "suite-level mapping" half of ISS-01. Statuses are as recorded in Doc 07 v2.4.4;
**nothing here upgrades a status**.

**`FR-074`…`FR-120` (47 Must FRs).** Covered by `TS-GOV2`, TC-3400–TC-3469, **70 cases — 0
automated, all 70 Blocked or No mechanism** (Doc 07 v2.4.4 §2). Of those, 38 are *No mechanism*
because `FR-074`…`FR-111` have **no `DES` assigned at all** (Doc 03 §16 records this as deliberate
next-increment phasing). This is a design gap upstream of testing. **A suite that cannot run is
coverage on paper.** The honest position for a Gate-2 packet is: these 47 Must FRs have declared
cases and **no passing evidence**. Owner of the unblocking action: **Ravi Deshmukh** (DES first),
then Ji-woo Park (TC statuses). Recorded as **OPEN-18**.

**`FR-121`…`FR-133` (13 Must FRs, added Doc 02 v2.3.0–v2.8.0).**

| FR | Short name | v1 disposition (Doc 02 §16.3.1) | Suite | Status on 2026-08-31 |
|---|---|---|---|---|
| `FR-121` | Pilot jurisdiction & adapter schedule | IN-v1 | **none** → `TS-V1-ENROL` (§0.4) | **No suite.** Blocked on adapters + `CON-015`. Owner Marcus Adeyemi |
| `FR-122` | Open-tier access without verification | IN-v1 | `TS-SCAFFOLD`, `TS-MEMBERSHIP`, `TS-PROPOSALS` | Covered; automated |
| `FR-123` | Verified personhood required for counted actions | PARTIAL | `TS-SCAFFOLD`, `TS-MEMBERSHIP`, `TS-PROPOSALS` | Covered for the two built call sites; candidacy nomination unbuilt (§0.5 S6) |
| `FR-124` | Verified status private to holder; aggregate-only public | PARTIAL | `TS-SCAFFOLD` | Covered at the seam/component layer; the DB-operator exposure is disclosed, not tested away (H-13) |
| `FR-125` | Non-invite fallback always open | IN-v1 | **none** → `TS-V1-ENROL` | **No suite.** Owner Marcus Adeyemi |
| `FR-126` | On-device credential processing; raw credential discarded | PARTIAL | **none** → `TS-V1-ID` | **No suite.** Owner Marcus Adeyemi |
| `FR-127` | Nullifier-collision duplicate detection only | PARTIAL | **none** (`TS-CR1` covers the v2 `FR-069`/`FR-071` form; all 46 cases Blocked) | **No v1 suite.** Owner Marcus Adeyemi |
| `FR-128` | No stored identity; subpoena test | PARTIAL | **none** → `TS-V1-ID` | **No suite.** The subpoena test itself is **not met in v1 by design** (H-04) — the testable v1 half is "no identity documents stored in any form". Owner Dr. Lena Kowalczyk |
| `FR-129` | Attestor-plurality Charter guard | IN-v1 | **none** → `TS-V1-ENROL` | **No suite.** Owner Marcus Adeyemi |
| `FR-130` | Provisional-party membership cap (100) | IN-v1 | `TS-PARTY`, `TS-MEMBERSHIP` | Covered; automated (100/101 boundary) |
| `FR-131` | v1 honesty notice (DES-098) | IN-v1 | `TS-SCAFFOLD` (`TC-3481`), `TS-MEMBERSHIP` (`TC-3534`) | **Partial.** Clause (d) delivered at the parties directory; **Blocked** at SCR-13/SCR-14 — the ballot surfaces, which are the surfaces `FR-131` exists for. Owner Nadia Hassan |
| `FR-132` | v1 two-layer identity verification (DES-095 amended, DES-100) | IN-v1 | `TS-SCAFFOLD` | Partial — the DES-100 allowlist is asserted; the ID-check integration is unbuilt |
| `FR-133` | v1 spam-resistance, flag-don't-block (DES-099) | IN-v1 | **none** → `TS-V1-SPAM` | **No suite.** Owner Marcus Adeyemi |

**How a row is bucketed — stated explicitly, so the count cannot drift.** A row counts as
**covered** only if a **Definition-A (v1)** suite exists *and* carries at least one non-Blocked case
for the **v1 form** of that FR; **partial** if such a suite covers some call sites or clauses and not
others; **no suite** otherwise. `FR-127` is bucketed **no suite** under this rule, deliberately: its
only named suite `TS-CR1` is a **Definition-B** suite covering the v2 `FR-069`/`FR-071` form, and all
46 of its cases are Blocked. Per §0.1 a Definition-B suite never governs a Definition-A row, and per
this section's own standing rule **nothing here upgrades a status**.

**Summary, stated plainly for the Gate-2 packet.** Of the 13, **four are covered** (`FR-122`,
`FR-123`, `FR-124`, `FR-130`), **two are partial** (`FR-131`, `FR-132`), and **seven have no suite at
all** (`FR-121`, `FR-125`, `FR-126`, `FR-127`, `FR-128`, `FR-129`, `FR-133`) — 4 + 2 + 7 = 13. All 13
are Must. None of the seven is a testing omission that testing alone can close — each is blocked on
unbuilt capability or on `CON-015`. **OPEN-18.**

### 0.7 NFR verification in Definition A

Twenty-two of the twenty-eight NFRs use the §9 method unchanged in v1 — the reference device
profile, the instruments and the thresholds do not depend on the backing. **Six differ**, and the
difference is the whole point.

| NFR | Doc 02 §16.3.2 disposition | What the v1 method can and cannot establish |
|---|---|---|
| `NFR-001` Privacy — no linkage | **PARTIAL** | §9's `TS-ADV-06` correlation battery bounds *the platform API*. It cannot bound the DB operator, who can read the member↔party mapping directly. The v1 verdict is therefore **"API does not expose; operator can" — a disclosed posture (H-01/H-04), not a met NFR.** `TS-PRIV` MUST report it that way |
| `NFR-002` Anonymity set k ≥ 1,000 | **PARTIAL** | v1 enforces aggregate-only publication with a k threshold — that half is genuinely testable and MUST be tested. Indistinguishability *within* the set is not achievable while individual-level rows exist (H-06). Report the enforced half; do not report the guarantee |
| `NFR-003` Coercion resistance | **DEFERRED-v2** | **No v1 method exists and none is proposed.** MACI is not in v1. `TS-ADV-02` cannot pass and MUST NOT be run-and-reported as if a fail were a defect — it is a phasing fact. The v1 obligation is the DES-098 disclosure, tested at §0.5 S4. `OPEN-01` is the standing record |
| `NFR-024` Anti-harassment | **PARTIAL** | The surface inspection (no identity-exposing surface) is testable in v1, as is the mechanical harassment-rate metric. "No individual-level data exists" is **false in v1** (H-14) and MUST NOT be claimed |
| `NFR-027` No behavioural telemetry | **IN-v1** | Fully in scope for v1 — method row added at §9. Real instruments exist today (`UT-0525`, `UT-0740`) but bound only the two surfaces they cover |
| `NFR-028` Append-only data lifecycle | **IN-v1** | Fully in scope for v1 — method row added at §9. The service-layer half is real today; the store-layer control the requirement actually names is unbuilt (**OPEN-19**) |

**Rule.** For every PARTIAL or DEFERRED-v2 NFR, the v1 Gate-2 packet MUST carry the Doc 02 §16.4
honesty-register row (`H-01`…`H-19`) **alongside** the measurement, on the same page. A measurement
without its disposition is how a phasing decision turns into a false claim.

### 0.8 Adversarial suites for `RISK-22` … `RISK-32`

Eleven suites, one per risk, on the same contract as §8: a named owner from Doc 02 §10, a
quantitative pass criterion, and — where the suite is expected to fail or cannot yet run — that
stated rather than hidden. **Eight of the eleven attack the conventional v1 surface**, which is
precisely why they belong to the v1 track. `TC-2800–TC-3199` is reserved for them at §14.

| Suite | RISK | L×I | Band (§2.2) | v1 attack surface | Pass criterion | Current evidence | Owner |
|---|---|---|---|---|---|---|---|
| `TS-ADV-22` | `RISK-22` Stolen-credential takeover | 3×5=15 | **A** | **The highest-value v1 adversarial suite.** v1 identity is a phone number plus an ID-check flag in a database. A stolen or SIM-swapped phone *is* the stolen credential; there is no nullifier and no device-bound key to fall back on | Recovery initiated with a stolen credential is defeated by the `FR-072` 7-day delay + active-key veto in ≥ 99.99% of attempts (`NFR-016` ≤ 0.01% fraudulent); a takeover **cannot** silently transfer party membership or an in-flight ballot | Doc 07 `TS-CR1` (TC-3300–TC-3345) cites `RISK-22`…`24`; **all 46 cases Blocked** — `FR-071`/`FR-072` recovery is unbuilt. **No passing evidence exists** | Rafael Duarte |
| `TS-ADV-23` | `RISK-23` Veto suppression | 2×5=10 | **A** | v1's veto notification rides the *same* phone number that was compromised. In v2 the active key is independent of the channel; in v1 it may not be | A recovery veto MUST be exercisable through a path independent of the compromised notification channel; a secondary out-of-band notification is required. **If no independent path exists in the v1 build, this suite fails and the `FR-072` mitigation is fictional for v1** — state it, do not pass it | `TS-CR1`, Blocked | Rafael Duarte |
| `TS-ADV-24` | `RISK-24` Recovery raced against a live ballot | 2×5=10 | **B** | Dual control of a v1 account during a ballot window | Voting barred for a credential in recovery for the whole delay; only the last valid ballot counts; no double-count. Assert against the v1 DB ballot path (DES-096), not the v2 nullifier path | `TS-CR1`, Blocked | Rafael Duarte |
| `TS-ADV-25` | `RISK-25` Public-tier disclosure enables targeting | 3×4=12 | **A** | Worker/Candidate identities are public **by consent** and, in v1, sit in a database alongside activity | 0 surfaces expose contact detail, location below the declared region, or activity pattern beyond the `FR-084` schedule; ballot direction never disclosed (`FR-063`); conduct votes individually private (`FR-103`) at the API | **No test case exists anywhere in Doc 07 v2.4.4** (verified 2026-08-31) | Daniel Okonkwo |
| `TS-ADV-26` | `RISK-26` Analytics prohibition masks funnel failure | 4×2=8 | **D** | Pressure to add "just one" per-user event | The suite is **inverted**: it asserts the prohibition *holds* under product pressure (`NFR-027`, §9) and that the permitted substitutes exist — aggregate dashboards and consenting-panel studies. `TD-08` is the accepted cost | No dedicated case; `TS-GOV2`'s `NFR-027` case is Blocked | Yuki Sato |
| `TS-ADV-27` | `RISK-27` Committee agenda capture (soft power) | 3×3=9 | **B** | A body with no formal power steering outcomes through facilitation | Competing proposals carry **equal standing** and equal presentation (`FR-090` — built, covered by `TS-PROPOSALS`); committee composition and minutes public (`FR-087`); membership expires mechanically with no renewal path (`FR-089`) | `FR-090` covered by `TS-PROPOSALS`; `FR-087`/`FR-089` in `TS-GOV2`, Blocked. **No adversarial case exists** | Tomás Ferreira |
| `TS-ADV-28` | `RISK-28` Conduct/removal votes weaponised for harassment | 3×4=12 | **A** | Coordinated flooding of conduct or removal votes against one member | Affirmative quorum required — **silence never removes** (`FR-104`); statement right mandatory before the window closes; growth-surge defence active; harassment-rate metric published | `TS-GOV2`, Blocked. No adversarial case | Daniel Okonkwo |
| `TS-ADV-29` | `RISK-29` Non-violence clause drags toward content judgment | 2×4=8 | **D** | Scope creep from presence-check to content-check | **Presence and integrity only.** `TS-PARTY`/`TC-3541` is the adversarial amendment case (an amendment MUST NOT strip the clause); assert additionally that **no code path evaluates the political content** of any pillar or proposal | `TC-3541` exists — **No mechanism** (designed at Doc 03 §10.13.10.1, unbuilt) | Sofia Marchetti |
| `TS-ADV-30` | `RISK-30` Trust-anchor governance latency | 2×5=10 | **B** | A compromised anchor mints Sybils during the emergency-variant timelock. **In v1 the "anchor" is the ID-check vendor and the phone rail — a compromised vendor mints counting-tier accounts** | **Quantitative:** credentials mintable inside the published expedited-variant window MUST be < the smallest launch region's activation threshold and < `ABSOLUTE_FLOOR_ENDORSEMENTS` (500). If they are not, the published duration is set wrong and the finding is Sev-1 | `TS-GOV2` (`FR-112`/`FR-113`), Blocked. No v1 vendor-compromise case exists | Rafael Duarte |
| `TS-ADV-31` | `RISK-31` Steward soft-power accretion | 3×4=12 | **B** | Steward proposals treated as canonical | `FR-115` exhaustive powers (an unlisted action is refused); `FR-116` competing proposals equal standing; **`FR-117` zero-dependency proven by the vacancy simulation**; `FR-114` recall + term expiry; `FR-120` fork backstop | `TS-GOV2`, Blocked | Rafael Duarte |
| `TS-ADV-32` | `RISK-32` Steward-body collapse | 3×2=6 | **D** | Funding collapse / mass vacancy | The `FR-117` vacancy simulation runs the full citizen journey with **every** steward seat vacant; **zero citizen-facing degradation** is the pass criterion. Low impact **by design** — the suite exists to prove the design, not to prevent the collapse | `TS-GOV2`, Blocked | Chen Wei |

**Honest headline for the Gate-2 packet.** Of the eleven, **three** (`RISK-22`…`24`) have declared
cases that are all Blocked, **one** (`RISK-29`) has a single designed-and-unbuilt case, and **seven
have no case anywhere**. **Zero of the eleven have passing evidence today.** Minting the cases is
Ji-woo Park's; unblocking most of them requires design (Ravi Deshmukh) and build (Samuel Oyelaran)
first. **OPEN-18.**

### 0.9 Definition-A exit criteria — Gate 2 for a v1 release

The v1 counterpart to §10.2, and **not a relaxation of it**. A Gate-2 packet for the 2027-06-01
release is assembled against **this** table.

| # | Criterion | Evidence |
|---|---|---|
| 1 | **100% of Must FR/NFR that are IN-v1 have a passing test**, and the RTM (Doc 08) shows **zero gaps in those Must rows**. PARTIAL and DEFERRED-v2 rows are recorded as *deferred with disclosure*, each carrying its Doc 02 §16.4 `H-##` row — never as met | Doc 08, verified by reviewer-qa |
| 2 | 0 open Sev-1 / Sev-2 defects (§17 severities apply to both tracks) | defect register |
| 3 | **Seam-honesty suite green (§0.5 S1–S6):** every `getProperties()` / `getTallyProperties()` field asserted `false` where Doc 03 §10.13.2/§10.13.3 says false; the stub / composite / honest triple present for every seam component; the call-site census returns exactly the `FR-123` counting sites and nothing at account creation or party-join | CI |
| 4 | **`IS_INSECURE_MOCK()` returns `false` across the entire wired production graph** and the deployment-safety promotion gate passes **without a waiver**. This is a hard gate: **no v1 release ships on the in-memory store** | `packages/contracts/test/deployment-safety.test.mjs` |
| 5 | **DES-098 honesty notice present, non-dismissable and verbatim** at SCR-13 and SCR-14 and at every blocked-counting-action surface; forbidden-vocabulary scan clean (S4/S5); notice comprehension tested with real users at V6 | CI + V6 report |
| 6 | `NFR-027` green: `UT-0525` and `UT-0740` pass, the repo-wide behavioural-event scan is clean, and store/log/export inspection finds zero per-user events | CI + Gate-2 inspection |
| 7 | `NFR-028` green **at the store, not only at the service**: `INSERT`-only grant on `membership_event`, the `archived_at` `BEFORE UPDATE` refusal, and projection-equals-replay on a seeded fixture | V2 integration against the production store |
| 8 | All eleven `TS-ADV-22`…`TS-ADV-32` suites **executed with a recorded verdict**; **Band A and Band B suites green** — `TS-ADV-22`, `23`, `25`, `28` (A) and `24`, `27`, `30`, `31` (B) | suite reports |
| 9 | `NF-02` independent security audit complete, **0 critical/high open** (`NFR-009`). The v1 audit scope **excludes** ZK circuits and the ceremony (Doc 02 §16.3.2) and the packet MUST say so rather than let a green audit imply the v2 scope was covered | audit report |
| 10 | `NF-01` privacy audit complete, reported **against the v1 posture**: the auditor is asked whether the disclosed limitations are correctly and completely disclosed, **not** whether anonymity holds | audit report |
| 11 | Performance green on the **physical RDP**, not only the CI proxy (`NFR-006`, `NFR-012`) | RDP lab report |
| 12 | Accessibility: 0 Level A/AA failures, automated **and** manual screen-reader passes (`NFR-011`), including the honesty notice | a11y report |
| 13 | Cost measured with real fees for the audit-record writes v1 actually makes (`NFR-005`); citizen charged USD 0.00 in 100% of cases | `NF-04` instrumentation |
| 14 | **Rollback drill proven < 15 min** (`NFR-020`), and the open-ballot flag freeze demonstrated in the v1 service | `NF-07` drill record |
| 15 | Censorship simulation executed (`NFR-014`, ≥ 2 access paths verified against the v1 hosting topology) | `NF-06` |
| 16 | `CON-015` legal opinion **obtained and recorded** for the Phase-1 jurisdiction, covering all eight government-ID questions. **Critical path — no Gate-2 checklist may show the Phase-1 enrolment adapter ready without it** | legal record |
| 17 | Per-jurisdiction legal sign-off obtained (`NFR-015`, `CON-005`) | legal record |
| 18 | `TS-EXIT` reconstitutes a party on an independent deployment (`NFR-018`) — **treated as a Must for v1** (see §9 `NFR-018`) | CI artifact |
| 19 | Reproducible build verified by ≥ 1 independent party (`NFR-021`) | third-party attestation |
| 20 | **Every `OPEN-##` in §13 marked v1-relevant is closed, or explicitly accepted in writing by the Gate-2 approver.** None may be closed by silence | Gate-2 packet |
| 21 | **The honesty register (Doc 02 §16.4, `H-01`…`H-19`) is reproduced in the packet in full**, and the approver signs against it. A v1 launch that does not state what v1 is not is the failure mode this whole track exists to prevent | Gate-2 packet |

### 0.10 What a green Definition-A suite establishes — and what it does not

Stated here so it cannot be overclaimed at Gate 2, in the same form as §5.5.

| Green v1 suite | Establishes | Does **not** establish |
|---|---|---|
| V0 pure unit | the governance rules behave as specified over the tested domain | that any implementation *above* them agrees; that the rules are the right rules |
| V1 seam unit | the seams behave as specified and **declare their limits honestly** | any privacy, anonymity, unlinkability or coercion property. `receiptFree: false` asserted correctly is still `false` |
| V2 store contract | the store honours the interface and, when the Postgres backing exists, that append-only is enforced by grant and trigger | that the operator cannot read the data. **In v1 the operator can read everything** — that is the design, disclosed (H-01…H-14) |
| V3 component & copy | the surfaces render, are accessible, and say exactly what the SDD says they must | that a user *understood* the honesty notice. That is a V6 comprehension study, and it is the one that matters |
| V4 audit-record contract | what the chain publishes, and that it publishes nothing else | anything about the *correctness* of the tally that produced the hash. In v1 the SQL count is the source of truth and the hash only proves that what was counted was published (H-05) |
| V5 E2E | the v1 journeys complete under the tested configurations | behaviour under an adversary with the device, the network, the database or a subpoena |
| §0.5 seam honesty | that v1 claims nothing it cannot do, and that a silent upgrade of a claim fails the build | that the missing guarantees are anywhere close to present |
| **The track as a whole** | that a **transparent** party platform works, end to end, and is honest about being transparent rather than private | **any** of Definition B. v1 is *transparency now, privacy later* (Doc 03 §10.13.5). A green v1 suite is not partial credit toward v2; it is a different exam |

---

## 1. Introduction

> **Track scope (v1.1.0).** §1–§22 are the **Definition-B (v2)** plan and are retained whole,
> unaltered except for the currency corrections marked `_(v1.1.0)_` and the track notes that say
> which release a statement governs. The **Definition-A (v1)** track is **§0**. §0.1 states
> normatively which track governs which release. Where a statement below is expressed against
> circuits, on-chain registries, MACI or `TS-DIFF`, it is a v2 statement and MUST NOT be used to
> gate a v1 release.

### 1.1 Purpose & objectives

Trumocracy makes a small number of promises to a citizen that, if broken, are not bugs but harms:

- *your vote counted, exactly once, and nobody knows it was yours* (`FR-002`, `FR-030`, `NFR-001`);
- *nobody can prove how you voted, including you* (`FR-031`, `NFR-003`);
- *nobody — including us — can stop, edit or reverse what your party decided* (`FR-056`, `CON-003`);
- *it costs you nothing and you never meet a wallet* (`FR-060`, `NFR-005`).

> _(v1.1.0.)_ The first two of those four are **Definition-B** promises. Doc 02 §16.3 classifies
> `FR-031`/`NFR-003` DEFERRED-v2 and `FR-002`/`FR-030`/`NFR-001` PARTIAL. **v1 does not keep them
> and says so** (DES-098; Doc 02 §16.4 H-01/H-03/H-07). The v1 obligation is §0.5 S4/S5 — that the
> promise is **not made**. The v2 obligation is everything below.

The objective of testing is therefore narrower and harder than "the features work". It is:

1. **Prove the guarantees, not just the happy paths.** A large part of the Must set is *guardrails*
   — statements about what the system cannot do. §6 defines how absence is tested and, honestly,
   what that technique cannot establish. _(v1.1.0: the v1.0.0 figure "22 of 42 FRs" was drawn from
   SRS v1.0.0 §11 and is superseded — the Approved Must set is now **114 FR + 24 NFR**, Doc 02
   v2.16.3 §11. The v1 form of a guardrail assertion is §0.5 S1 property honesty.)_
2. **Prevent divergence between what the client predicts and what the chain does.** A citizen told
   "your proposal passed" who is then contradicted by the chain has been lied to by us. `TS-DIFF`
   (§5.4) exists solely for this and is the highest-value suite in the plan (ADR-011). _(v1.1.0: v1
   has no second oracle and therefore no `TS-DIFF` analogue — §0.3, **OPEN-23**.)_
3. **Attack the system on purpose, once per named risk.** `RISK-01` … `RISK-16` each get a dedicated
   adversarial suite (§8), owned by a named person, with a stated quantitative pass criterion.
   _(v1.1.0: `RISK-22`…`RISK-32` get theirs at **§0.8**, with band assignments at §2.2.)_
4. **Measure the non-functional promises rather than asserting them.** Cost, latency, accessibility
   and anonymity-set size are measured on the reference device profile and on real fee data (§9).
5. **Surface what we are not testing, and what a passing suite does not prove.** §12, §5.5 and §0.10.

### 1.2 Test items

_(v1.1.0 — this table is the **2026-08-09 / Definition-B** inventory. The current v1 inventory,
verified 2026-08-31, is **§0.2**. Six rows are corrected in place below because leaving them as
written would assert something false about today's repository.)_

| Item | Location | Version basis |
|------|----------|---------------|
| Pure reference implementation | `packages/protocol/src/` (`constants.js`, `governance.js`, `party.js`, `regions.js`, `flags.js`, `index.js`) | trunk; 82 unit tests green at 2026-08-09 (`UT-0001…`); **150 green at Doc 06 v2.4.3** _(v1.1.0)_ |
| Solidity core & registries | `packages/contracts/src/` (`core/PersonhoodRegistry.sol`, `core/RegionRegistry.sol`, `core/VerifierRegistry.sol`, `core/FeatureFlags.sol`, `interfaces/IProofVerifier.sol`) | **CORRECTED v1.1.0:** the workspace now exists — `packages/contracts/package.json` and `vitest.config.mjs` are present and `test/` holds five suites (`adversarial`, `differential`, `governance`, `lifecycle`, `deployment-safety`) plus `fixture.mjs`; **95 contract tests green** (Doc 06 v2.4.3, Approved). The v1.0.x claim "no test workspace exists yet" is superseded and **`OPEN-17` is closed** |
| Circom circuits | `packages/circuits/circuits/` — **CORRECTED v1.1.0:** three `.circom` sources exist (`personhood_enrol`, `residency_member`, `tenure_member`) plus a `README.md`; there is still **no `package.json`, no test workspace and no ceremony artifact**. ADR-005 §"circuit set" defines six circuits, so three remain unwritten | sources only |
| TypeScript SDK | `packages/sdk/` — **CORRECTED v1.1.0:** created; 16 modules, 12 test files, 244 unit tests; ZK proof paths not wired (§0.2) | present |
| Design system / client | `packages/ui/`, `apps/web/` — **CORRECTED v1.1.0:** both created (§0.2) | present |
| Independent verifier | `apps/verifier/` — **not yet created** (ADR-010, `FR-055`); v2-only under DES-097, and its absence costs `NFR-019` its stated instrument — **OPEN-24** | n/a |
| Off-chain services | `services/indexer/` **created** (16 unit tests); `services/relayer/` — **not yet created** (ADR-014) | partial |
| Test harness | `tools/evm-harness/src/index.mjs` — in-process EVM: solc-js compile + EthereumJS execute, offline and deterministic | present, working |
| Layering guard | `tools/dep-guard/check.mjs` — enforces ADR-011 dependency direction; fails CI on violation | present, working |

**Build under test.** Every suite runs against a single trunk commit. There are no long-lived
branches (ADR-011). Incomplete capabilities ship dark behind the flags declared in
`packages/protocol/src/flags.js` and, where they touch the chain, behind `FeatureFlags.sol`.
**Every suite therefore runs in at least two flag configurations** — see §5.9.

### 1.3 Scope

**In scope.** _(v1.1.0 — re-pinned to the Approved SRS v2.16.3. The v1.0.x line read "All 61 FRs,
all 26 NFRs, all 16 RISKs, all 12 CONs" against the superseded SRS v1.0.0 and is corrected here per
review ISS-01.)_ The **current Approved requirement set of Doc 02 v2.16.3 §11**, across both tracks:

- **133 FR minted** — 131 active (`FR-046` and `FR-062` superseded), of which **114 are Must**;
- **28 NFR**, of which **24 are Must** (`NFR-008`, `NFR-018`, `NFR-019`, `NFR-026` are Should);
- **27 requirement-level RISK rows** — `RISK-01`…`RISK-16` plus `RISK-22`…`RISK-32`
  (`RISK-17`…`RISK-21` live in Doc 13 §6 and are the project-manager's register, not this plan's);
- **15 CON** — `CON-001` … `CON-015`.

The **Definition-B** portion — the six circuits of ADR-005, the fallback transport ladder of
ADR-014, the exit/export path of ADR-010, the client guarantees of ADR-012 — is scoped by §1–§22.
The **Definition-A** portion is scoped by **§0**, with delivery dispositions taken from Doc 02
§16.3 (FRs: IN-v1 107 · PARTIAL 20 · DEFERRED-v2 4 · SUPERSEDED 2. NFRs: IN-v1 24 · PARTIAL 3 ·
DEFERRED-v2 1).

**Out of scope (not tested by us, with reason).**

| Not tested | Why |
|---|---|
| Correctness of an identity attestor's own document check | We consume an eligibility result and never see the document (`FR-003`, `CON-002`). We test our *handling* and the plurality invariant, not their KYC. _(v1.1.0: in v1 this extends to the ID-check **vendor** — the verify-and-discard contract is a legal and contractual control, not a technical one; Doc 02 H-17.)_ |
| Correctness of national census / statistical sources | `CON-009` — we may not modify them. We test the median, the drift limit, the dispute window and the verified-resident floor (§8, `TS-ADV-12`). |
| The bn254 pairing precompiles, EthereumJS, solc, snarkjs, Circom internals | Third-party, independently audited. We pin versions and test our use of them. |
| Base / OP Stack L2 consensus and its upgrade keys | ADR-001 accepts this as inherited risk and re-opens it at Phase 4. We test our *fallbacks* (`TS-ADV-09`). |
| IPFS / Arweave durability | ADR-009. We test that a lapsed pin is recoverable from content addressing, not that pinning services stay up. |
| Passkey / secure-enclave implementations (Apple, Google, FIDO) | ADR-002. We test the fallback P-256 verifier path and the guardian path. |

**Features not to be tested at v1 (with reason).** `FR-005`, `FR-049`, `FR-050`, `FR-052`, `FR-053`
had **no backlog story** at Doc 05 v1.0.0 §12. All were Should/Could **except `FR-050`, which Doc 02
§11 has since raised to Must** (BR-019). The tester MUST record them as **open RTM rows**, not as
absent. Delegation (`DELEGATION` flag, ADR-007 §5) ships off in all non-dev environments and is
tested only to the level of "the flag is off and the capability is unreachable". _(v1.1.0: this
no-story list is derived from Doc 05 **v1.0.0** and Doc 05 is now at **v2.5.0 (Approved)**. The
list MUST be re-derived by the product owner at the next backlog version — **OPEN-21**. `FR-050`'s
promotion to Must is recorded here so it is not carried forward as a Should by inheritance.)_
_(v1.5.0, cycle-2 **ISS-C2-02 DISCHARGED**: the pin above read "**v2.3.0 (In Review)**" — the third
and last location of the cycle-1 ISS-05 defect, and the one carrying the live re-derivation
instruction `OPEN-21` cross-references. Doc 05 is Approved at v2.5.0, five minor versions ahead of
the v1.0.0 the list was derived from, which makes the finding **more** live, not less. `OPEN-21`'s
own body was already re-pinned at v1.4.0 and is unchanged.)_

### 1.4 References

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

_(v1.5.0 — cycle-2 **ISS-C2-01 DISCHARGED** at the second of its two named locations, and the
stale neighbours swept with it rather than left to age. The superseded pins read: Doc 02 SRS
**v2.16.3** · Doc 03 SDD **v2.11.2** · Doc 05 Backlog **v2.3.0** · Doc 06 Coding & UT **v2.4.3** ·
Doc 07 Test Cases **v2.4.4**. Each was accurate when written; none changed a conclusion drawn from
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

**_(v1.7.1 roll-call — 2026-09-20. It supersedes the v1.7.0 roll-call immediately above, which is
retained verbatim, and it discharges the cycle-1 carried Low ISS-02 by closing the item behind
it.)_**
**Approved at HEAD:** Doc 02 **v2.17.3** (ten Lows carried there), Doc 05 **v2.5.0**, Doc 06
**v2.8.1** (three Lows carried there), **Doc 07 v2.9.0** — advanced this touch from v2.8.1, PASS
97% (0C/0H/0M/4L; reviewer-qa), 2026-09-20 — and Doc 09 **v1.9.0**.
**In Review:** Doc 03 **v2.14.1** — the matching half of this rework, last Approved v2.13.0 — Doc 08
**v2.12.1** (last Approved **v2.11.3**; mid-rework in the tester's hands and **not read as settled
here**), Doc 06 → **v2.9.0** (engineer), and **this document at v1.7.1**. **No statement in v1.7.1
depends on the content of Doc 06 or Doc 08.**
**§14 IS TOUCHED AT v1.7.1, and this is the change from v1.7.0.** Its `TC`-range **reconciliation**
pin is advanced **Doc 07 v2.6.0 → Doc 07 v2.9.0 (Approved)** and §14 is **re-read against Doc 07
v2.9.0 §2 in this same touch**, which is exactly what §14's standing instruction requires of any
version that advances the Doc 07 pin. The carried cycle-2 Low **ISS-08**, tracked as **`OPEN-30`**,
is therefore **CLOSED**: `TS-ADV-01…16` records **TC-2600–TC-2752, TC-3564–TC-3567,
TC-3570–TC-3576, TC-3577–TC-3591**, and the six `TS-V1-*` suites' reservation is narrowed
**TC-3570–TC-3699 → TC-3592–TC-3699** (**108** ids free; **none of the six suites has minted an
id**). **Bibliographic and reconciliation pins remain different statements** — the distinction is
not abandoned, it is **discharged**: it exists so a bibliographic advance can never silently imply a
content re-read, and here the content re-read is done, dated and named.

---

## 2. Test strategy

### 2.1 Quality objectives (tied to NFRs)

| Objective | NFRs | How we know it is met |
|---|---|---|
| A citizen is never told something the chain contradicts | `NFR-021` | `TS-DIFF` zero divergences across the full generated case space (§5.4) |
| A member cannot be identified or linked | `NFR-001`, `NFR-002`, `NFR-010`, `NFR-024` | `TS-PRIV` + `TS-ADV-06` + independent privacy audit `NF-01` |
| A vote cannot be sold or coerced | `NFR-003` | `TS-ADV-02` + independent adversarial audit; **see OPEN-01** |
| Nobody holds a lever | `NFR-009`, `NFR-017` | `TS-ABSENCE` (§6) + `TS-ADV-16` + security audit `NF-02` zero critical/high |
| It is free and fast on a cheap phone | `NFR-005`, `NFR-006`, `NFR-012`, `NFR-026` | `TS-COST` and `TS-PERF` measured on the reference profile, not modelled |
| Everyone can use it | `NFR-011`, `NFR-013`, `NFR-022`, `NFR-023` | `TS-A11Y` automated + manual screen-reader; `TS-I18N`; moderated usability at n≥200/locale |
| It keeps working when someone tries to switch it off | `NFR-007`, `NFR-014`, `NFR-020`, `NFR-025` | `TS-RES` + `TS-ADV-08` + `TS-ADV-09` + rollback drill |
| **_(v1.1.0)_ No per-user behavioural event exists anywhere** | `NFR-027` | `UT-0525` + `UT-0740` + the repo-wide behavioural-event scan + store/log/export inspection (§9) |
| **_(v1.1.0)_ Nothing is ever deleted or overwritten** | `NFR-028` | Service-layer append-only assertions + `INSERT`-only grant and `BEFORE UPDATE` refusal at the store + projection-equals-replay (§9) |
| **_(v1.1.0)_ v1 claims nothing it cannot do** | `FR-131` + the PARTIAL / DEFERRED-v2 set | §0.5 seam-honesty doctrine S1–S6, build-failing |

### 2.2 Risk-based prioritisation

Effort is weighted by Doc 02 §10 `L × I`, then by *irreversibility of the harm*.

**Band membership — `RISK-01` … `RISK-16` (Definition-B set, unchanged).**

| Band | Risks | Share of test effort | Rationale |
|---|---|---|---|
| **Band A — irreversible harm to a person** | `RISK-02` (20), `RISK-06` (20), `RISK-07` (15) | ~35% | A deanonymised dissident cannot be un-deanonymised. No rollback exists for this class. |
| **Band B — irreversible harm to a party** | `RISK-01` (20), `RISK-04` (20), `RISK-03` (15), `RISK-10` (10) | ~30% | A captured charter or a forged electorate cannot be undone (`TD-04`: no override exists, by design). |
| **Band C — availability & access** | `RISK-08` (16), `RISK-09` (12), `RISK-11` (16), `RISK-05` (15) | ~20% | Recoverable, but disenfranchising while it lasts. |
| **Band D — institutional** | `RISK-12` (15), `RISK-16` (15), `RISK-13` (16), `RISK-14` (15), `RISK-15` (16) | ~15% | Slow-moving; mitigated more by design and disclosure than by test. |

**Band membership — `RISK-22` … `RISK-32`** _(new at v1.1.0; closes the §2.2 half of review ISS-01.
Suites at **§0.8**; `L × I` from Doc 02 v2.16.3 §10.)_

| Band | Risks | Why this band |
|---|---|---|
| **Band A — irreversible harm to a person** | `RISK-22` (15) stolen-credential takeover · `RISK-23` (10) veto suppression · `RISK-25` (12) public-tier targeting & harassment · `RISK-28` (12) conduct votes weaponised | A seized political identity, a suppressed veto, a targeted worker and a harassment campaign all land on **one named human**, and none of the four is undone by a rollback. `RISK-25` and `RISK-28` reach the physical world, which is why they sit with `RISK-02`/`RISK-06` rather than a tier lower. |
| **Band B — irreversible harm to a party** | `RISK-24` (10) recovery raced against a live ballot · `RISK-27` (9) committee agenda capture · `RISK-30` (10) trust-anchor governance latency · `RISK-31` (12) steward soft-power accretion | Each ends in a **decision the party did not actually make** — a mis-decided ballot, a steered agenda, a forged electorate minted during a timelock, or a proposal treated as canonical because of who wrote it. `TD-04` applies: there is no override, so there is no repair. |
| **Band C — availability & access** | *(none)* | None of the eleven is primarily an availability risk. |
| **Band D — institutional** | `RISK-26` (8) analytics prohibition masks funnel failure · `RISK-29` (8) non-violence clause drags toward content judgment · `RISK-32` (6) steward-body collapse | Slow-moving; mitigated more by design, disclosure and recorded trade-off (`TD-08`, `TD-10`, `TD-11`) than by test. `RISK-32` is deliberately low-impact **by design** (`FR-117`); the suite proves the design rather than preventing the event. |

Band A and Band B suites are **blocking at every promotion**, including local pre-push — and that
rule now covers `TS-ADV-22`, `23`, `25`, `28` (A) and `TS-ADV-24`, `27`, `30`, `31` (B). Bands C and
D block promotion to staging and above.

> **Effort re-weighting is owed and is not this document's to invent.** The ~35/30/20/15 split above
> was set against 16 risks. It is deliberately **not** re-derived here across 27, because the effort
> budget is Doc 13's (`CON-007`; 18 people; USD 4.2M) and re-cutting it is the project-manager's
> decision, not the architect's. What **is** decided here, and is the load-bearing half, is **band
> membership** — because band membership is what determines blocking behaviour at a promotion.
> Re-weighting is routed to Ana-Maria Petrescu as part of **OPEN-22**.

### 2.3 Shift-left & automation approach

- **The rules are written as a testable reference implementation first.** `packages/protocol` is pure,
  dependency-free (enforced by `tools/dep-guard/check.mjs`) and runs in milliseconds. Every governance
  rule is expressed there, unit-tested there, and then differentially tested against Solidity. This
  is a deliberate inversion: the *specification executes*. _(v1.1.0: the first half holds in both
  tracks; the differential half is v2-only — §0.3, **OPEN-23**.)_
- **Acceptance criteria exist before code.** Doc 02 §8 already carries Gherkin for every Must
  requirement, and Doc 05 gives every story at least one adversarial scenario. Doc 07 converts these
  to `TC-####`; no `TC` may be invented that does not trace to a Gherkin block or an SDD §11
  failure mode.
- **Determinism over infrastructure.** The EVM harness compiles and executes in-process with a fixed
  genesis timestamp (`1_760_000_000n`), deterministic accounts, and no RPC. `npm test` on a fresh
  clone reproduces every contract result byte-identically, offline. This is why there is **no retry
  policy** for levels L0–L3 (§10.3).
- **Guardrails are automated first.** Doc 05 §10 sets a WIP limit of one guardrail story in review at
  a time. Correspondingly: a guardrail story is not Done until its capability-absence assertion
  (§6) exists, not merely its positive path. _(v1.1.0: in v1 the guardrail assertion is often a
  §0.5 S1 property-honesty assertion — the same discipline, one layer up.)_

### 2.4 Test design techniques

| Technique | Applied to | Example |
|---|---|---|
| **Equivalence partitioning** | tier rules, region depth, personhood tiers | `TIER.OPERATIONAL/POLICY/STRUCTURAL/CONSTITUTIONAL`; region depth 1–5 vs 0 vs 6 |
| **Boundary-value analysis** | every threshold constant in `constants.js` | quorum at `quorumBps-1 / = / +1`; tenure at `minTenureSeconds ∓1s`; surge at `GROWTH_TRIGGER_BPS` exactly 2000 vs 2001; `MIN_ANONYMITY_SET` 999/1000/1001; `ABSOLUTE_FLOOR_ENDORSEMENTS` 499/500/501; `SUPERSEDE_GRACE` at ±1s; **_(v1.1.0)_ the `FR-130` provisional-party cap at 99/100/101** |
| **Decision tables** | `effectiveRules(tier, charter, surge)` — 4 tiers × {charter silent, stricter, weaker} × {surge, no surge} = 24 cells, all enumerated | `TS-UNIT`, mirrored in `TS-DIFF` |
| **State-transition testing** | `PARTY_STATE` (5 states, `TRANSITIONS` map) and `PROPOSAL_STATE` (8 states) | every legal transition asserted; **every illegal transition asserted to revert** — the illegal set is the larger and more important half |
| **Pairwise / combinatorial** | device × locale × network × flag-state matrix (§9, `NFR-026`) | reduces 8 locales × 6 device classes × 3 network profiles × 2 flag sets to a pairwise-covering set |
| **Property-based testing** | `tally()`, `petitionThreshold()`, `isSurgeActive()`, `resolveAnonymityScope()`, `isWithin()` | invariants: a tally never passes below its quorum; threshold is monotonic in population; `resolveAnonymityScope` never returns a scope smaller than `k`; `isWithin(x,x)` is true |
| **Metamorphic testing** | tallies and thresholds | relabelling options permutes the result identically; scaling all vote counts by n does not change pass/fail; adding an abstention never converts a pass to a fail via *approval* |
| **Adversarial / attack-tree** | `TS-ADV-01…16` (§8); **_(v1.1.0)_ `TS-ADV-22…32` (§0.8)** | one tree per RISK, leaves become `TC-####` |
| **Capability-absence assertion** | every guardrail FR (§6); **_(v1.1.0)_ every v1 backing property (§0.5 S1)** | ABI allowlist snapshot, bytecode selector scan, storage-layout snapshot; `getProperties()` asserted `false` |
| **Differential testing** | `packages/protocol` vs deployed contract (§5.4) | generated inputs replayed through both oracles |
| **_(v1.1.0)_ Interface-parity assertion** | the 22-method `IPartyStore` and its app-side type shim | `UT-0871` asserts the two member sets are equal, which is what makes "implement the interface" checkable rather than aspirational (Doc 03 §10.13.12) |
| **_(v1.1.0)_ Call-site census** | `verifyEligibility()` placement | repo-wide scan: exactly the three `FR-123` counting sites, nothing at account creation or party-join (§0.5 S6) |

---

## 3. Test levels

_(v1.1.0 — these are the **Definition-B** levels. The Definition-A levels are **V0–V6** at §0.3.)_

| Level | Scope | Lives in | Runner | Owner | Automated | Gate |
|---|---|---|---|---|---|---|
| **L0 — Pure unit** | governance rules, party/charter validation, region parsing, anonymity-scope resolution, flag resolution. No chain, no I/O, no mocks. | `packages/protocol/test/` | vitest 3.2.4 | Engineer (Doc 06) | Yes | pre-commit, pre-merge |
| **L1 — Contract unit** | one contract at a time, in the in-process EVM. Every custom error provoked. | `packages/contracts/test/` *(the workspace now exists — v1.1.0; 95 tests green, `OPEN-17` closed)* | vitest + `tools/evm-harness` | Engineer | Yes | pre-merge |
| **L2 — Contract integration** | multi-contract flows: `VerifierRegistry` → `PersonhoodRegistry` → party module; timelock-gated registry changes; `FeatureFlags` gating. | `packages/contracts/test/integration/` | vitest + harness | Engineer | Yes | pre-merge |
| **L3 — Differential** | `packages/protocol` reference vs deployed contract, over generated inputs. **The highest-value level in this system.** | `packages/contracts/test/differential/` | vitest + harness | Engineer + tester | Yes | pre-merge, blocking |
| **L4 — Circuit** | Circom circuits: positive, negative/malformed-witness, under-constraint probes, witness-generator differential, malleability, registry lifecycle. | `packages/circuits/test/` | circom + snarkjs + circomspect *(§7.2)* | Rafael Duarte | Yes | pre-merge (fast subset), nightly (full) |
| **L5 — SDK & client** | proof orchestration, transaction building, ERC-4337 UserOp assembly, the fallback transport ladder, artifact-hash verification, component a11y, i18n. | `packages/sdk/test/`, `packages/ui/test/`, `apps/web/test/` | vitest + headless browser *(§7.2)* | Engineer | Yes | pre-merge |
| **L6 — System / E2E** | whole citizen journeys against a real chain: devnet, then testnet. Includes the verifier, the indexer and the relayer. | `tests/e2e/` | headless browser driver *(§7.2)* | Tester | Yes | pre-release |
| **L7 — Manual & exploratory** | usability (`NFR-022`), screen-reader passes (`NFR-011`), locale review (`NFR-013`), plain-language review (`NFR-023`), red-team exercises (`NF-03`), external audits (`NF-01`, `NF-02`). | `docs/07-test-cases.md` + audit reports | — | Nadia Hassan / Grace Mbeki / Rafael Duarte | No | Gate 2 |

**Why the levels sit where they do.** ADR-011 makes `packages/protocol` pure precisely so L0 can be
fast and L3 can be meaningful. If `protocol` ever grows a dependency on a chain client, L3 stops
being a comparison of two independent implementations and becomes a comparison of one implementation
with itself. `tools/dep-guard/check.mjs` fails CI on exactly that, and its `PURE` set is therefore a
**test-strategy control, not a lint rule**.

---

## 4. Test types

| Type | Used? | How, and where |
|---|---|---|
| **Functional** | Yes | `TS-FUNC`, L0–L6. Every FR has at least one positive `TC` traced from Doc 02 §8 Gherkin. |
| **Negative / edge** | Yes | `TS-EDGE`, seeded from SDD §11 failure-mode analysis. Every custom error in every contract must be provoked by name. |
| **Differential** | Yes | `TS-DIFF`, L3. §5.4. **v2 only** — v1 has no second oracle (§0.3, OPEN-23). |
| **Regression** | Yes | Full L0–L3 on every commit (they are seconds, not minutes). L4–L6 affected-target selection per ADR-011 §Consequences, full suite nightly and on release candidates. |
| **Smoke / sanity** | Yes | `TS-SMOKE`: enrol → endorse → activate → join → propose → vote → tally, on devnet, in under 5 minutes. Runs after every deployment to any environment. |
| **Exploratory** | Yes | `TS-EXPL`: time-boxed charters, one per epic, focused on state combinations the automated suites do not reach (interrupted flows, clock skew, back-button, multi-device). Session notes are artifacts; defects found here must produce a new automated `TC`. |
| **Performance (client)** | Yes | `TS-PERF`, `NFR-006`, `NFR-012`. Reference device profile. §9. |
| **Load** | Yes | `TS-LOAD`, `NFR-008`. Indexer and relayer under 5,000 governance actions/s; tree-insert benchmark to 50M leaves. |
| **Stress** | Yes | `TS-LOAD` group S: sponsorship-pool exhaustion, circuit-breaker trip (ADR-014, 3× p99), proving-queue saturation on the reference device. |
| **Soak / endurance** | Yes | 72-hour staging soak covering a complete T3 proposal lifecycle (14d discussion compressed under a test clock + real 30d timelock simulated by chain time-warp on devnet). Memory-growth ceiling on the client: < 10% RSS drift over the soak. |
| **Scalability** | Yes | `TS-LOAD`, `NFR-008` (Should). LeanIMT depth-32 insert cost measured, not extrapolated. |
| **Security (authZ, IDOR, pen)** | Yes | `TS-SEC` + `TS-ABSENCE` + `TS-ADV-*`. Every privileged entrypoint gets a negative-authority test for every non-authorised caller class. Independent penetration test as part of `NF-02`. |
| **Privacy / data** | Yes | `TS-PRIV` + `TS-DATA`. Data-inventory check fails the build (Doc 05 US-0002 AC). §10.6. |
| **Accessibility (WCAG 2.2 AA)** | Yes | `TS-A11Y`. Automated rule engine in CI on every primary flow + manual screen-reader passes per release candidate. §9 `NFR-011`. |
| **Compatibility / cross-device** | Yes | `TS-COMPAT`, `NFR-026`. Pairwise matrix. |
| **Localisation / i18n** | Yes | `TS-I18N`, `NFR-013`. 8 locales incl. ≥1 RTL; pseudo-localisation; string-coverage gate at 100%. |
| **Resilience / chaos** | Yes | `TS-RES`. Sequencer stall, indexer lie, relayer outage, gateway block, IPFS pin loss, coordinator-committee member loss (3 of 7). |
| **Disaster recovery** | Yes | `TS-EXIT` (ADR-010 `TC-EXIT-*`): full party export → reconstitute on an independent deployment → verify identical roots and tallies. Run in CI, not documented as theoretical. |
| **Usability** | Yes | `NFR-022`, L7, n ≥ 200 per launch locale, moderated + unmoderated. |
| **Compliance** | Partial | `NFR-015` legal sign-off per jurisdiction is an *attestation*, not a test. What we test: the pre-enrolment disclosure is present and acknowledged (`SCR-01`), and an erasure request produces the "no personal data exists" demonstration plus credential deactivation. _(v1.1.0: in v1 that demonstration is narrower — `phone_hash` and `subject_id_hash` **do** exist as restricted-class fields; Doc 02 H-16/H-18, `CON-015`.)_ |
| **Upgrade / migration** | Yes | `TS-UPG`: core v1 → v2 party migration rehearsed on testnet (ADR-010); circuit supersede + `SUPERSEDE_GRACE` window; region `schemeVersion` advance with non-retroactivity (`FR-007`). _(v1.1.0: the **backing swap** — Definition A → Definition B behind DES-095/DES-096 — is the migration that matters most and is untested because Definition B is unbuilt. `TS-UPG` MUST gain a seam-swap rehearsal before any v2 release; **OPEN-22**.)_ |
| **Contract / API** | Yes | `TS-ABI`: ABI allowlist snapshot (§6), indexer GraphQL schema snapshot, SDK↔contract ABI drift check, public read-interface contract tests. _(v1.1.0: in v1 the analogous control is the `IPartyStore` interface-parity assertion, §2.4.)_ |
| **Mutation testing** | Partial — manual drill | No mutation tool is present and none is mandated. Instead: a **quarterly seeded-defect drill** — 20 defects are injected into `packages/protocol` and the core contracts by a person who did not write the tests; ≥ 90% must be caught by one CI run. Misses become new `TC`s. This is cheaper than a tool and directly measures the thing a tool proxies. |
| **Fuzzing (property)** | Yes | Generator-driven inputs in L0 and L3 (§5.4). No separate fuzzing binary is required. |
| **Formal verification** | Deferred — stated | ADR-010 says the core is "formally specified for its critical invariants". At v1 we express those invariants as executable property tests, not as machine-checked proofs. Recorded honestly in §12: this is weaker than formal verification and we do not claim otherwise. |
| **_(v1.1.0)_ Seam-honesty / claim-absence** | Yes | §0.5 S1–S6. The v1 track's load-bearing type: it tests that the product does not claim a guarantee it lacks. **Build-failing.** |

---

## 5. Test levels in detail

### 5.1 L0 — Pure unit (`packages/protocol`)

Runner: `vitest run` (`npm run test:protocol`). 82 passing assertions at 2026-08-09 across
`test/governance.test.js` and `test/party-and-regions.test.js`, numbered `UT-0001…`;
**150 passing at Doc 06 v2.4.3 (Approved)** — v1.1.0 currency note.

Required coverage of behaviour (not merely of lines):

- `effectiveRules` — all 24 decision-table cells, including `CHARTER_WEAKER_THAN_FLOOR` and
  `TENURE_BELOW_FLOOR` on the exact boundary. The **ratchet-up-only** rule is a `RISK-04` defence and
  gets boundary tests at `floor-1`, `floor`, `floor+1` for every parameter.
- `isSurgeActive` — the window/decay double loop, including the `memberCount === 0` founding case and
  the exactly-`GROWTH_TRIGGER_BPS` boundary (currently `>`, so 20.00% does **not** trigger — this
  asymmetry must be asserted deliberately so a later refactor cannot flip it silently).
- `tally` — abstention semantics (counts toward quorum, not toward approval), integer-floor rounding
  at every threshold boundary, `snapshotMembers === 0`, and rejection of non-integer/negative inputs.
- `isEligible` — all five outcome reasons; the `leftAt <= snapshotAt` boundary.
- `schedule` / `stateAt` — every `PROPOSAL_STATE` reachable, and the currently-degenerate branch in
  `stateAt` where both arms of the final ternary return `SUCCEEDED_TIMELOCK` (recorded as a
  low-severity finding for Doc 06; the test must pin observed behaviour and flag the redundancy).
- `petitionThreshold` — the `max(byPopulation, byVerified, absoluteFloor)` floor is the `RISK-12`
  deflation defence; tested with `eligiblePopulation = 0`, `1`, and a value below `verifiedResidents`.
- `validateVision` / `validateCharter` — all eight `PILLARS` mandatory; `MIN_PILLAR_CHARS = 280`
  boundary at 279/280/281 (see OPEN-07 on what this does and does not test); `FORBIDDEN` rejections
  of `membershipRequiresApproval` and non-1p1v `voteWeighting`.
- `parseRegion` / `isWithin` / `ancestors` / `resolveAnonymityScope` — malformed paths, depth 6,
  non-ISO country, and the escalation ladder including the "even the country is too small → return
  null → the action must not publish" terminal case.
- `validateIssuerSet` — `TOO_FEW_ISSUERS`, `NO_NON_STATE_ISSUER` (the ADR-003 invariant).
- `isEnabled` / `permanentFlags` — every flag × every environment; and an assertion that
  `MACI_VOTING.defaults.prod === false` is **surfaced to the user**, per its own description
  ("the UI must say so"). See OPEN-01. _(v1.1.0: in v1 that surfacing is DES-098 / `FR-131` and is
  tested at §0.5 S4.)_

### 5.2 L1/L2 — Contract unit & integration (EVM harness)

The harness (`tools/evm-harness/src/index.mjs`) gives: multi-file solc compilation with
`node_modules` import resolution, PoseidonT3 library linking at the deterministic address
`0x3333333C0A88F9BE4fd23ed0536F9B6c427e3B93`, deploy/call/read with viem ABI encoding, event
decoding, revert-reason and custom-error decoding, `warp()`/`mine()` block-time control, `etch()`
for standing up mocks at fixed addresses, and `snapshot()`/`revertTo()`.

**Harness rules, adopted to keep L1–L3 deterministic (these are flake-prevention controls, §10.3):**

1. **Construct a fresh `Chain` per test.** Do not rely on `snapshot()`/`revertTo()` for isolation.
   `snapshot()` restores a state root and the clock but is not a general-purpose journal, and a test
   suite whose isolation depends on it will fail in ways that look like flakes.
2. **Assert on `chain.timestamp`, never on `chain.blockNumber`.** `warp(seconds)` advances the block
   number by an approximation (`seconds/2`); block-number assertions are brittle by construction.
   Every governance rule in this system is expressed in seconds, so this costs nothing.
3. **`gasUsed` from the harness is execution gas only.** `Chain._call` goes through `vm.evm.runCall`,
   which excludes the 21,000 intrinsic cost and all calldata cost, and models no L1 data fee.
   `TS-COST` (§9, `NFR-005`) MUST add calldata cost and the ADR-001 blob-fee model on top, and MUST
   be confirmed against real fees on testnet. Harness gas is a **regression detector**, not a price.
4. **The harness runs `Mainnet`/`Cancun`, not an OP Stack L2.** L2-specific behaviour — the L1 fee
   component, `OptimismPortal.depositTransaction` force-inclusion, sequencer ordering — is **not**
   covered here and is only exercised at L6 on devnet/testnet. `TS-ADV-09` therefore cannot run in
   CI at L1/L2, and the plan does not pretend it can.
5. **Mock verifiers must be explicit.** `IProofVerifier` mocks used to drive `PersonhoodRegistry`
   tests are named `MockVerifierAlwaysTrue` / `MockVerifierAlwaysFalse` / `MockVerifierSignalCount(n)`
   and are **forbidden** in any suite that claims to test a ZK property. A green
   `PersonhoodRegistry` suite against `MockVerifierAlwaysTrue` proves the registry's bookkeeping and
   nothing whatsoever about proof soundness. This distinction is restated in every affected `TC`.
   _(v1.1.0: Doc 06 §2.1 extends this to the v1 seams — a **stub** lies and returns
   `IS_INSECURE_MOCK() = true`; the honest conventional backing returns `false` and is **not** a
   mock (Doc 03 §10.13.4). The two must never be conflated, and §0.5 S2/S3 makes the distinction a
   test rather than a convention.)_

**Required L1 coverage per contract.**

| Contract | Must be provoked by name |
|---|---|
| `PersonhoodRegistry` | `NotTimelock`, `UnknownIssuer`, `IssuerInactive`, `AlreadyEnrolled`, `NullifierAlreadyUsed`, `InvalidProof` (all three causes: wrong signal count, `publicSignals[2] != issuerId`, verifier false), `UnknownRoot`, `IssuerEpochCapReached`, `ZeroAddress`, `BadTier`. Plus: epoch rollover resets `u.count`; `maxEnrolmentsPerEpoch == 0` means unlimited; `_recordRoot` eviction at exactly `ROOT_HISTORY = 64` inserts, and that the 65th insert un-knows the 1st root; `issuerSetValid()` true/false around the ADR-003 invariant. |
| `RegionRegistry` | `NotTimelock`, `NotAuthorisedAttester`, `RegionExists`, `UnknownRegion`, `RegionIsFrozen`, `TooFewSources`, `DriftTooLarge`, `DisputeWindowOpen`, `NoPending`, `ZeroAddress`, `BadPath`. Plus: `regionIdOf` **must equal** `keccak256(regionPreimage(path, v))` from `packages/protocol/src/regions.js` — a `TS-DIFF` case, not a unit case, because it is a cross-implementation agreement; median with odd and even source counts; drift limit at exactly ±5%; `MIN_POPULATION_SOURCES = 5` boundary; dispute window at `±1s`; `anonymitySetSufficient` at 999/1000. |
| `VerifierRegistry` | `NotTimelock`, `UnknownCircuit`, `ZeroAddress`, `EmptyCeremony`, `DuplicateZkey`. Plus: `verify()` walks versions newest-first, skips retired versions, skips on `publicSignalCount()` mismatch; a proof against a superseded key verifies at `retiredAt - 1s` and fails at `retiredAt`; registering a third version retires only the second. |
| `FeatureFlags` | `NotTimelock`, `NotEmergencyDisabler`, `FlagDisabledError`, `ZeroAddress`. Plus the **blast-radius pin** — see OPEN-03 and `TS-ADV-16`. |

### 5.3 L4 — Circuits

Covered in full by §7 (the ZK doctrine). Circuits are not tested by line coverage; that metric is
meaningless for a constraint system. _(v1.1.0: **v2 only** — v1 verifies no proof. §0.3.)_

### 5.4 L3 — Differential testing (`TS-DIFF`) — the load-bearing suite

**Why it exists.** ADR-011 states it plainly: a divergence between what the client predicts and what
the chain does is how a citizen gets told their vote counted when it did not. `packages/protocol` is
what the UI, the indexer and the verifier all compute from; the Solidity contracts are what actually
decides. Two implementations of the same rules will drift. This suite is the only thing that catches
the drift before a citizen does.

> _(v1.1.0 track note.)_ This suite has **no Definition-A analogue**, and its absence is the largest
> assurance gap between the two tracks. In v1 the rules run in `packages/protocol` and are consumed
> by one service; there is no second oracle. A narrow differential against the *audit contract* —
> for the values that contract actually stores — is worth building, and it is a fraction of the case
> space below. **OPEN-23.**

**Construction.** For each rule pair, a generator produces inputs across the boundary space; both
oracles are evaluated; results must be **bit-identical**, including the *reason* for a rejection, not
merely the pass/fail bit.

| Rule pair | Reference (`packages/protocol`) | On-chain | Generator space |
|---|---|---|---|
| Region identity | `regionPreimage()` + keccak | `RegionRegistry.regionIdOf()` | all depths 1–5, every segment shape accepted by `SEGMENT_RE`, scheme versions 1…10⁴ (exercises `_u32ToString`) |
| Anonymity scope | `resolveAnonymityScope()` | `RegionRegistry.anonymitySetSufficient()` + the escalation performed by the party module | resident counts 0…5,000 across a 5-level tree |
| Petition threshold | `petitionThreshold()` | petition module | population 0…10⁹, verified 0…10⁷, bps 50…2000, incl. `absoluteFloor` domination |
| Tier rules | `effectiveRules()` | party governance module | 4 tiers × charter {silent, stricter, weaker} × surge {on, off} |
| Tally | `tally()` | party governance module | for/against/abstain 0…10⁶, snapshotMembers 0…10⁷, every quorum/approval boundary ±1 |
| Eligibility | `isEligible()` | `tenure_member` circuit public-input construction + module check | joinedAt/leftAt/snapshotAt orderings, tenure ±1s |
| Surge detection | `isSurgeActive()` | party growth accounting | membership histories with 2…200 samples, growth −50%…+500% |
| Schedule | `schedule()` | proposal module | createdAt across epoch boundaries, requestedVotingSeconds below and above `minVotingSeconds` |
| Party state machine | `canTransition()` | party module | all 25 (from,to) pairs including all 20 illegal ones |
| Charter validation | `validateCharter()` | charter module | every `FORBIDDEN` and `BELOW_FLOOR` case |

**Rounding is a first-class hazard.** JavaScript `Math.floor((participation * BPS) / snapshotMembers)`
on IEEE-754 doubles and Solidity integer division on `uint256` agree only while values stay below
2⁵³. `NFR-008` targets 50,000,000 enrolled and 10,000,000 in a ballot window; products like
`participation * BPS` reach 10¹¹ — safe — but `eligiblePopulation * thresholdBps` at 10⁹ × 2000 =
2×10¹² is also safe, while a future denominator or a bps widening is not. **Mandatory:** `TS-DIFF`
includes an explicit precision suite that drives both oracles to 2⁵³ ± 1 and asserts either agreement
or an explicit, tested refusal. A silent disagreement here mis-decides an election.

> _(v1.1.0.)_ **The rounding hazard is not v2-only.** v1's `computeTally()` is a SQL aggregate whose
> integer semantics must agree with `packages/protocol`'s `tally()` — the same class of silent
> disagreement, one layer down. `TS-V1-BALLOT` (§0.4) MUST carry the same precision suite against
> the SQL path.

**Pass criterion.** Zero divergences. A single divergence is Sev-1 and blocks merge — it is not
triaged for user impact, because the user impact is "a citizen was told the wrong thing about
democracy".

### 5.5 What a green suite does and does not establish

Stated here so it is not overclaimed at Gate 2. _(The Definition-A counterpart is **§0.10**.)_

| Green suite | Establishes | Does **not** establish |
|---|---|---|
| L0 pure unit | the rules, as written in JS, behave as specified over the tested domain | that the contracts agree; that the rules are the right rules |
| L1/L2 contract | the contract's bookkeeping, authorisation and error paths behave as specified in a deterministic EVM | anything about ZK soundness (mocked verifiers), anything about L2 behaviour, anything about real gas cost |
| L3 differential | the two implementations agree over the generated domain | that both are correct — two implementations can share a misreading of the requirement. Mitigated by Doc 07 tracing every `TC` to a Doc 02 Gherkin block written by the product owner, not by the engineer |
| L4 circuit | the circuit is satisfiable honestly; enumerated dishonest witnesses are rejected; static analysis is clean | **soundness** or **zero-knowledge**. See §7.4 |
| L5/L6 client & E2E | the journeys complete and the guarantees hold in the tested configurations | behaviour under an adversary who controls the device, the network operator, or the user's social environment |
| `TS-ABSENCE` | the enumerated capabilities are absent from the enumerated surfaces | that no capability exists. See §6.4 |

---

## 6. Capability-absence testing

Several of Trumocracy's central guarantees are **the absence of a function**: `FR-021` (no weighting
mechanism), `FR-035` (no transfer/delegation), `FR-056` (no operator discretion), `NFR-017` (no
unilateral rule change), `CON-003` (no pause, no admin, no override), `CON-006` (no transferable
instrument), and the four ADR-013 §3 compulsion rows. These cannot be tested by exercising a feature.
They are tested by *proving a surface is empty* — which is a fundamentally weaker kind of evidence,
and we treat it as such.

> _(v1.1.0 track note.)_ Techniques 1–3 below are **artifact scans over compiled Solidity** and
> therefore bind the on-chain core, which **v1 does not deploy** (v1 deploys only the lightweight
> audit-record subset, DES-097). Technique 4 (negative-authority matrix) and Technique 5 (review
> checklist) apply to both tracks unchanged. The v1 form of "a capability is absent" is **§0.5 S1**
> — every `getProperties()` / `getTallyProperties()` field that Doc 03 §10.13.2/§10.13.3 declares
> `false` is asserted `false`, so that a silent upgrade of a claim fails the build. The honest
> limits at §6.5 apply, with full force, to that form too.

### 6.1 Technique 1 — ABI allowlist snapshot (primary control)

For each contract, the harness's `compile()` returns `.abi`. `TS-ABSENCE` computes the **exact set of
external/public function selectors** and compares it against a checked-in snapshot
(`packages/contracts/test/absence/<Contract>.selectors.json`). Any addition, removal or signature
change fails CI and requires a reviewed snapshot update.

This is an **allowlist**, deliberately, because a denylist can only catch capabilities we thought of.
The snapshot file is a governance artifact: changing it is a reviewable event, and for the immutable
core (ADR-010) it is a one-way door.

Snapshot for `FeatureFlags` today, as an illustration of the granularity required:
`timelock()`, `emergencyDisabler()`, `isEnabled(bytes32)`, `requireEnabled(bytes32)`,
`enable(bytes32)`, `disable(bytes32,string)`. Nothing else. `PersonhoodRegistry` today exposes
`spendNullifier(bytes32,uint256)` **with no caller restriction** — the snapshot pins that fact and
`TS-ADV-01` tests its consequences (see OPEN-05).

> **Status, verified 2026-08-31 _(v1.1.0)_.** The capability-absence *tests* exist —
> `packages/contracts/test/adversarial.test.mjs` performs selector and denylist scanning, and Doc 06
> §4 records the three techniques as implemented. The **checked-in golden files this section
> specifies (`packages/contracts/test/absence/<Contract>.selectors.json`) do not exist**: there is
> no `.json` file anywhere under `packages/contracts/test/`. The control as written — *"a human
> deliberately approved this new selector, and the diff is reviewable"* — is therefore **not yet in
> force**; what is in force is an in-code assertion that a reviewer must read the test to audit.
> Recorded as **OPEN-25**, owner Samuel Oyelaran, needed before the `NF-02` audit freeze.

### 6.2 Technique 2 — Denylist scan over ABI *and* deployed bytecode (secondary control)

- **ABI name scan.** Fails on any function whose name matches a forbidden fragment:
  `transfer`, `approve`, `permit`, `delegate`, `proxy`, `pause`, `unpause`, `upgrade`, `setOwner`,
  `setAdmin`, `mint`, `burn`, `blacklist`, `ban`, `suspend`, `expel`, `remove*Member`, `force*`,
  `setTally`, `adjustCount`, `setThreshold`, `waive`, `override`, `emergency*` (excluding the single
  reviewed `emergencyDisabler` reader), `renounce` (excluding the intentional `renounceProtocolKeys`
  of ADR-010, which is asserted to be irreversible rather than absent).
- **Bytecode selector scan.** Compute `keccak256` of a list of forbidden signatures, take the 4-byte
  selectors, and scan `deployedBytecode` (already returned by the harness) for `PUSH4` occurrences.
  This catches a function reachable through a `fallback` or an assembly dispatcher that never appears
  in the ABI — the most common way an "absent" capability is actually present.
- **Opcode scan.** Assert the immutable core's `deployedBytecode` contains no `DELEGATECALL` (`0xF4`),
  no `SELFDESTRUCT` (`0xFF`), and no `CALLCODE` (`0xF2`). A core with no `DELEGATECALL` cannot be a
  proxy, which is the mechanical form of "no upgrade key" (`CON-003`, `RISK-16`).

### 6.3 Technique 3 — Storage-layout snapshot

solc can emit `storageLayout`; the harness currently requests only
`['abi','evm.bytecode.object','evm.deployedBytecode.object']` in `outputSelection`. **Required harness
extension (Doc 06, engineer):** add `storageLayout` to the output selection so `TS-ABSENCE` can:

- snapshot each core contract's slot layout and fail on any change;
- assert that no slot is typed as an owner/admin/pauser address;
- assert that `immutable` fields (`timelock`, `verifiers`, `emergencyDisabler`) are genuinely
  immutable — i.e. occupy no storage slot at all;
- support the `TS-UPG` migration suite, which must prove a v1→v2 core migration preserves meaning.

### 6.4 Technique 4 — Negative-authority matrix, and Technique 5 — review checklist

For every privileged entrypoint (`onlyTimelock` on `RegionRegistry`; the `msg.sender != timelock`
guards on `PersonhoodRegistry.registerIssuer` / `deactivateIssuer`, `VerifierRegistry.register`,
`FeatureFlags.enable`; the dual guard on `FeatureFlags.disable`), a matrix test asserts that **every**
non-authorised caller class reverts: deployer, a party founder, an office-holder, an attester, an
issuer, a paymaster, the emergency disabler (where not authorised), and an arbitrary EOA.

_(v1.1.0.)_ **The matrix is not v2-only.** Its Definition-A form is the same question asked of the
conventional stack: for every privileged *service* operation (activate a party, record a counting
contribution, publish a tally hash, archive a petition), assert that every non-authorised caller
class is refused — an unauthenticated caller, an open-tier account, a member of a different party, a
member who has left, and an account whose ID verification has not completed. `TS-MEMBERSHIP` and
`TS-PROPOSALS` already carry part of this; the full matrix is owed with `TS-V1-BALLOT` (§0.4).

Technique 5 is a **human review checklist**, run by reviewer-qa at merge and by the external auditor
at `NF-02`, because the absence claims that matter most are about code nobody has written yet. Its
questions are fixed: *does this change add a caller who can decide something? does it add a field
that could hold a person? does it add a path that reaches a result after that result was published?*
_(v1.1.0 adds a fourth, for the v1 track: **does this change make the product claim something it
cannot do?** — §0.5.)_

### 6.5 The honest limits of this technique

**This must be stated at Gate 2 alongside the green result, not instead of it.**

1. **Absence in the ABI is not absence in the system.** Capability-absence tests bound the *on-chain
   core*. They say nothing about the gateway, the indexer, the relayer, DNS, the app store, or the
   hosting provider — all of which can censor a citizen without touching a contract. ADR-014's
   "the indexer is a cache, never an authority" is enforced by client-side re-verification, which is
   an L5/L6 test, not an absence test. _(v1.1.0: in v1 this limit is far larger, because the
   application store **is** the authority. Nothing on-chain bounds what the operator database can do;
   Doc 02 H-01…H-14 is the disclosure, not the mitigation.)_
2. **An allowlist snapshot is only as good as its review.** The control is *"a human deliberately
   approved this new selector"*. If review degrades, the control degrades silently. _(And it is not
   yet in force at all — **OPEN-25**.)_
3. **A denylist catches shapes, not intents.** `function reconcile(bytes32,uint256)` can do anything.
   This is exactly why the allowlist is primary and the denylist secondary.
4. **Bytecode scanning cannot see across a call boundary.** A capability implemented in a contract
   added later through a timelocked registry is invisible to a scan of today's bytecode. The control
   there is the 30-day timelock and the published diff (ADR-010) — governance, not test.
5. **A storage-layout snapshot binds one compiled artifact.** The production control is different and
   stronger: the deployed bytecode hash at the pinned address must equal the hash of the audited
   artifact, verified by anyone (`NFR-021` reproducible builds). Include that check in `TS-ABSENCE`
   against devnet/testnet/production deployments, not only against local compilation.
6. **No test can prove the absence of a legal or social capability.** A court can order a sequencer;
   a state can compel an attester; an employer can stand behind a voter. ADR-013 §3 answers the first
   by making us genuinely powerless; §12 of this plan records the rest as residual risk we do not
   test and do not claim to have solved. _(v1.1.0: in v1 we are **not** powerless — `FR-128`'s
   subpoena test is explicitly not met (Doc 02 H-04), and the honest v1 statement is "we hold it and
   can be compelled", not "we cannot comply".)_

---

## 7. The zero-knowledge test doctrine

> **Definition-B only _(v1.1.0)_.** v1 verifies no proof and deploys no circuit. This section
> governs the deferred v2 release **in full and unchanged**. Its v1 counterpart is **§0.5**, which
> does not weaken this doctrine but tests the opposite proposition: that v1 **claims nothing** a
> circuit would be needed to justify.

ADR-005 states the problem exactly: *"an under-constrained circuit passes all positive tests, so
positive tests prove nothing."* This section makes that a mandatory test contract, not a suggestion.

### 7.1 Mandatory test classes (all six are required for every circuit)

The circuit set from ADR-005: `personhood_enrol`, `residency_member`, `party_member`,
`tenure_member`, `vote_message` (MACI), `tally` (MACI). _(v1.1.0 currency: three `.circom` sources
exist in `packages/circuits/circuits/` — `personhood_enrol`, `residency_member`, `tenure_member` —
with no test workspace and no ceremony artifacts. Three of the six are unwritten.)_

**Z1 — Positive.** An honest witness produces a proof that verifies both off-chain (`snarkjs`) and
on-chain (through `VerifierRegistry.verify`). *Establishes satisfiability and correct wiring. Nothing
more.*

**Z2 — Negative / malformed witness (the required class).** Each circuit ships a
`claims.json` enumerating every constraint it asserts (e.g. *"`Nₐ = Poseidon(s, actionScope)`"*,
*"`leaf ∈ tree(regionId)`"*, *"`validUntil > now`"*, *"`tier ≥ minTier`"*). For **every claim**, at
least one test constructs a witness that violates it and asserts the result is either a
witness-generation failure or a proof that fails verification. **CI fails when a claim in
`claims.json` has no corresponding negative test.** This coverage metric — *claims with a negative
test / total claims = 100%* — replaces line coverage for L4.

**Z3 — Under-constraint probes.**
- `circomspect` runs in CI over every `.circom` source. **Any finding at severity ≥ Warning fails the
  build.** A waiver requires a recorded architect decision in an ADR, not a code comment.
- `snarkjs r1cs info` output (constraint count, public/private signal counts) is snapshotted; an
  unexplained drop in constraint count is the classic signature of a removed constraint and fails CI.
- Targeted probes on every signal assigned with `<--` and not subsequently constrained with `===`:
  attempt to produce two distinct witnesses satisfying identical public signals. If a second witness
  is found, the circuit is under-constrained and the finding is Sev-1.

**Z4 — Differential witness generation.** The WASM witness generator is run against an independent
reference implementation of the same computation living in `packages/protocol` (pure JS
Poseidon/LeanIMT path, no snarkjs dependency — preserving the `PURE` guarantee of
`tools/dep-guard/check.mjs`). Any divergence in a computed signal is a defect. This is the L4 analogue
of `TS-DIFF` and it is the only class here that can catch a *correct-looking but wrong* circuit.

**Z5 — Proof malleability and wrong-public-signal.**
- **Wrong signals:** a valid proof re-submitted with any altered public signal must fail.
- **Cross-circuit:** a proof for circuit A submitted to circuit B's verifier must fail — including
  the case where both have the same `publicSignalCount`, since `VerifierRegistry.verify` currently
  uses signal count as its only pre-filter (`if (v.verifier.publicSignalCount() != publicSignals.length) continue;`).
- **Groth16 re-randomisation:** a proof can be re-encoded into a different byte string proving the
  same statement. **Therefore replay protection MUST rest on the nullifier, never on proof bytes.**
  Test: re-randomise a proof, resubmit with the same nullifier, assert `NullifierAlreadyUsed` /
  `AlreadyEnrolled`. Test the converse too: a fresh nullifier with a re-randomised proof must
  succeed, so that re-randomisation is not accidentally used as a soundness barrier.
- **Malformed group elements:** points not on the bn254 curve, points not in the correct subgroup,
  the point at infinity, and public signals ≥ the bn254 scalar field modulus. All must be rejected,
  not merely produce `false` by accident.
- **Zero/identity witness:** `identityCommitment = 0`, `nullifier = 0`. Note that
  `PersonhoodRegistry._recordRoot` uses `evicted != 0` as a sentinel, so a zero root would corrupt
  the rolling window — assert a zero root is unreachable.

**Z6 — Ceremony binding.** `snarkjs zkey verify` against the published `.r1cs`; the on-chain
`VerifierRegistry.current(circuitId).zkeyHash` must equal the hash of the published zkey; the client
must **refuse to prove** against an artifact whose hash is not the registered one (ADR-012 §3,
`DES-052`). Contributor count — verified against the ADR-022 assurance-based target recorded
for that ceremony — and beacon presence are verified by **transcript inspection**, which is an
audit activity, not a test.

**Z7 — Verifier lifecycle.** `SUPERSEDE_GRACE = 30 days`: a proof against a superseded key verifies at
`retiredAt − 1s` and fails at `retiredAt`; `DuplicateZkey` is rejected; `UnknownCircuit` reverts;
registering a third version does not resurrect the first.

### 7.2 Circuit tooling

`circom`, `snarkjs` and `circomspect` are mandated by ADR-005 §"Bad / accepted risk" but are **not
present in the repository today** (re-verified 2026-08-31: `packages/circuits/` holds three
`.circom` sources and a README, with no `package.json` and no test workspace). See §11.2 (required,
not yet present). Their CI invocation must be
offline and pinned, consistent with the harness's design philosophy: `npm test` on a fresh clone
reproduces every result.

### 7.3 Test data for circuits

Witnesses are generated from a deterministic synthetic-identity generator seeded from a fixed value.
**No real document hash, no real eID, no real biometric derivative may ever be used as circuit test
input, in any environment, including a developer's laptop** (`CON-002`, §10.6).

### 7.4 What a passing circuit suite establishes — and what it does not

**Does establish:**
- the circuit is satisfiable by an honest witness and its on-chain verifier is correctly wired and
  correctly registered;
- the specific dishonest witnesses enumerated in `claims.json` are rejected;
- static analysis found no *known* under-constraint pattern;
- the WASM witness generator agrees with an independent implementation on the tested domain;
- proofs are not accepted for the wrong statement, the wrong circuit, or a spent nullifier.

**Does not establish:**
- **Soundness.** No finite suite proves that *no* malicious witness exists. Only the two independent
  audits per circuit required by ADR-005 approach this, and an audit is not a proof either.
- **Zero-knowledge.** Every test in §7.1 could pass while the proof leaks the witness. Privacy is
  established by the cryptographic argument and by `NF-01`/`NF-02`, never by L4.
- **Setup integrity.** A compromised phase-2 ceremony produces forged proofs that verify perfectly.
  This is undetectable by test, by construction. ADR-005 bounds the blast radius (forgery, not
  deanonymisation); `TS-ADV-10` tests the *containment and response*, not the *detection*.
- **That the circuit computes the right thing.** Z4 catches disagreement between two implementations
  of the same intent; it cannot catch a shared misreading of `FR-002`.

**Gate-2 rule:** circuit test results MUST NOT be presented as evidence of soundness. The evidence for
soundness is `NF-02` (two independent audits per circuit, zero critical/high open) and `CON-012` (no
bespoke unaudited constructions). This is written here so that a green dashboard cannot be mistaken
for a security argument.

---

## 8. Adversarial & security suites — one per RISK

Sixteen suites, one per `RISK-01`…`RISK-16`. Each has a named owner from Doc 02 §2.7 and a
quantitative pass criterion. Where a suite is expected to *fail* against the design as currently
recorded, that is stated — an adversarial suite that is written to pass is not an adversarial suite.

> **Coverage note _(v1.1.0)_ — closes the §8 half of review ISS-01.** Doc 02 v2.16.3 §10 carries
> **27** requirement-level RISK rows, not 16: `RISK-01`…`RISK-16` plus `RISK-22`…`RISK-32`
> (`RISK-17`…`RISK-21` live in Doc 13 §6 and are the project-manager's register, not this plan's).
> The eleven added since v1.0.0 have their own suites — **`TS-ADV-22` … `TS-ADV-32` at §0.8** — and
> their band assignments at §2.2. They are placed in the Definition-A track because **eight of the
> eleven attack the conventional v1 surface** (a phone number, a database, an ID-check vendor, a
> standing steward body) rather than the cryptographic one, and `RISK-22` in particular is the single
> highest-value adversarial suite for a v1 release. The sixteen below are unchanged and remain the
> Definition-B set. **Neither set is a substitute for the other, and a Gate-2 packet must carry a
> recorded verdict for every risk in the track it is gating.**

### TS-ADV-01 — Sybil flood (`RISK-01`) · Owner: Marcus Adeyemi

| Case | What it does | Pass criterion |
|---|---|---|
| A-01.1 Issuer flood | A compromised tier-1 issuer mints to and past `maxEnrolmentsPerEpoch` (`EPOCH = 1 days`) | `IssuerEpochCapReached`. **Quantitative:** credentials mintable in the 48-hour expedited-removal window (ADR-003) MUST be < `PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS` (500) and < the threshold of the smallest launch region. If it is not, the epoch cap is set wrong and the finding is Sev-1. |
| A-01.2 Same human, same issuer | Re-enrol with the same `issuerNullifier` | `AlreadyEnrolled` |
| **A-01.3 Same human, two issuers** | One human enrols via an e-passport issuer *and* a social-graph issuer | **Exactly one active credential (`FR-001`, `BR-006`).** On the ADR record as it stands, `Nᵢ = Poseidon(idHashᵢ, ISSUER_SCOPE)` is scoped **per issuer**, so this produces two independent identity commitments and two votes. **This case is expected to fail today. It is the single highest-value test in the plan. Recorded as OPEN-04 — a Gate-2 blocker for the architect to close in Doc 03.** |
| A-01.4 Nullifier reuse across scopes | Same `Nₐ` submitted for scopes S and T | Both succeed (scopes are independent) and neither reveals the other — this is the *correct* behaviour and is asserted so a later "fix" cannot break unlinkability |
| A-01.5 Unauthorised nullifier burn | Any EOA calls `PersonhoodRegistry.spendNullifier(scope, n)` directly, pre-burning a nullifier a legitimate citizen would need | Currently **unrestricted** — see OPEN-05. A griefer who can predict or observe a nullifier can deny that citizen the action. Expected to fail today; Sev-1. |
| A-01.6 Sybil economics | Simulated attacker acquires N synthetic credentials and attempts to sell the resulting votes | Zero transferable instruments exist (`TS-ABSENCE` cross-reference, ADR-007 §6) |
| A-01.7 Endorsement inflation | Flood endorsements on a live petition | Threshold floor (`max(byPopulation, byVerified, 500)`) plus the activation dwell period defeat it; `TS-ADV-12` covers the denominator half |

> _(v1.1.0.)_ **The v1 form of `RISK-01` is different and is not covered by this suite.** In v1 there
> is no nullifier and no issuer; Sybil resistance rests on one account per verified phone number plus
> `subject_id_hash` same-document deduplication at the counting gate (`FR-132`, DES-100). Doc 02 H-15
> records plainly that **one-person-one-vote is not guaranteed in v1** — a person with multiple
> legitimate government IDs can hold multiple counting accounts. The v1 adversarial work sits in
> `TS-V1-ID` and `TS-V1-SPAM` (§0.4) and must not be reported as `TS-ADV-01`.

### TS-ADV-02 — Vote-buying & coercion, receipt construction (`RISK-02`) · Owner: Aisha Nkemdirim

| Case | What it does | Pass criterion |
|---|---|---|
| A-02.1 Fully cooperating voter | The voter *wants* to prove their choice and is given every artefact they possess: transaction hash, UserOp hash, IndexedDB contents, the encrypted message ciphertext and its salt, the session key, the passkey assertion, every screenshot, every notification, the client's local cache | Nothing distinguishes the actual choice from any other admissible choice (`FR-031`, `NFR-003`) |
| A-02.2 Key-change indistinguishability | A classifier with the full public message queue tries to separate key-change messages from vote messages | Advantage ≤ chance (ADR-006 §3). Measured over ≥ 10⁴ synthetic ballots |
| A-02.3 Device seized after voting | Adversary has the unlocked device post-vote | Cannot determine the choice; the confirmation screen is identical for every option (ADR-012 §7) |
| A-02.4 Coercer watches, voter defects | Coerced vote, then a panic re-vote (`DES-063`) | Only the last ballot counts; nothing in the public record, the device or any notification indicates a replacement occurred or how many were cast (`FR-032`) |
| A-02.5 Buy the account, not the vote | Adversary purchases the phone + passkey + guardian set | This is the acknowledged residual (ADR-006). Test the *detection* half: bulk device-transfer anomaly patterns are surfaced. We do **not** claim to prevent it (§12) |
| A-02.6 Flag-state disclosure | `MACI_VOTING` is off (its production default) | The UI states, before the ballot is confirmed, that the vote is cast through conventional authentication and is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**; that the platform database **CAN** see vote direction and party membership; and that the cryptographic private ballot arrives with the Definition-B (v2) privacy layer — `FR-131`(a)/(b)/(c) via `DES-098`. The four banned words ("private", "anonymous", "receipt-free", "secure") appear **only negated**, never as a claim. **Enforced today — the content and word-ban halves only:** `UT-0887` (rendered banner, negation-aware), `UT-0888` (flag description) and `UT-0759` (the `ver` badge title renders "Verified — private" only against `unlinkable === true`). **Owed, NOT enforced today — the placement half:** "before the ballot is confirmed" is asserted nowhere, because SCR-13/SCR-14 are not built (Doc 06 §7 item 21); UT-0887 renders `ReceiptFreedomBanner` directly at component level; Doc 08 records `TC-3481` — the SCR-13/SCR-14 case — as **Blocked**; and Doc 03 v2.13.0 §15 records that DES-098's acknowledge-to-proceed control is unbuilt. **This does not satisfy `FR-031`/`FR-032`/`NFR-003`, which are Must. Recorded as OPEN-01.** _(v1.3.0: this cell read "The UI states that votes are anonymous but **not** receipt-free — the flag's own description requires it." False on both counts — v1 votes are not anonymous, and the flag description no longer says they are. FR-131's closing sentence forbids the claim outright. Corrected per Doc 09 v1.3.0 `REL-LIM-18`; approver 2026-09-05. **v1.4.0, cycle-1 ISS-04:** v1.3.0 then wrote "Enforced today by" across all three halves; the three tests are real and assert what is claimed, but none of them tests placement.)_ |

> _(v1.1.0.)_ **This suite cannot pass in v1 and MUST NOT be run as if a fail were a defect.** Doc 02
> §16.3 classifies `NFR-003` and `FR-031` **DEFERRED-v2**; `FR-032` is PARTIAL (last-ballot-counts by
> DB overwrite, visible in logs). The v1 obligation is not to achieve receipt-freeness but to **state
> that it is absent**, at every ballot, non-dismissably (DES-098 / `FR-131`), tested at §0.5 S4.
> `OPEN-01` remains the standing record that a Must guardrail is phased.

### TS-ADV-03 — Flash-governance takeover (`RISK-03`) · Owner: Rafael Duarte

The assertion here is **structural impossibility**, not resistance. ADR-007 removes the attack
surface rather than raising its cost, so the suite is written to prove *there is nothing to acquire*.

| Case | Pass criterion |
|---|---|
| A-03.1 Unlimited capital, one block | An attacker with unbounded synthetic funds executes every acquisition attempt reachable in a single transaction and a single block. **Voting power acquired = exactly 0.** |
| A-03.2 No transferable surface | `TS-ABSENCE` allowlist proves membership has no `transfer`, `approve`, `permit`, `delegate`, `assign` or `inherit` selector anywhere in the ABI or the deployed bytecode |
| A-03.3 Snapshot integrity | Joining, maturing or changing residency after the proposal's snapshot confers zero power (`FR-028`, `isEligible` reasons `JOINED_AFTER_SNAPSHOT`, `TENURE_TOO_SHORT`) |
| A-03.4 Mid-vote quorum grief | Flooding a party *during* a vote to fail quorum. Quorum is measured against `snapshotMembers`, so the flood has no effect — asserted in both oracles via `TS-DIFF` |
| A-03.5 Delegation disabled | With `DELEGATION` off (all non-dev defaults), no delegation path is reachable. With it on (dev), `MAX_HOPS = 1` and `MAX_SHARE_BPS = 100` are enforced at the boundary |

### TS-ADV-04 — Mob charter capture under a growth surge (`RISK-04`) · Owner: Rafael Duarte

| Case | Pass criterion |
|---|---|
| A-04.1 The Doc 02 scenario | 10,000-member party, 9,000 joined last week, T3 amendment of an entrenched clause → quorum not met, amendment fails (`FR-027`) |
| A-04.2 Surge detection | `isSurgeActive` true; approval bar +5pp (`SURGE.APPROVAL_PENALTY_BPS`); voting window ×2; `AnomalousGrowth` event emitted; client surfaces it prominently to every member (ADR-008 §3) |
| A-04.3 Surge boundary | Growth of exactly 20.00% does **not** trigger (`>` not `>=`); 20.01% does. Asserted deliberately in both oracles |
| A-04.4 Immutable clause | A clause marked `immutableClauses` cannot be amended by **any** majority, including 100% (`canAmendClause` → `CLAUSE_IMMUTABLE`) |
| A-04.5 Surge weaponisation | An attacker deliberately triggers a surge to freeze a party's legitimate T3 change. ADR-008 promises an override via a T3 vote under the *pre-surge* snapshot. **If that path is not present in the build, this case fails and the ADR mitigation is fictional.** |
| A-04.6 Charter self-weakening | A T3 proposal that would set a tier parameter below the protocol floor → `CHARTER_WEAKER_THAN_FLOOR`. A party cannot vote away its own anti-capture protection |
| A-04.7 Slow, legitimate growth | A year-long real membership build followed by a 75% constitutional win → **succeeds**. This is democracy, not an attack, and the suite must not block it |

### TS-ADV-05 — Issuer compromise & expedited removal (`RISK-05`) · Owner: Marcus Adeyemi

| Case | Pass criterion |
|---|---|
| A-05.1 48-hour expedited removal | `deactivateIssuer` executes within the expedited window; future enrolments revert `IssuerInactive` |
| A-05.2 No mass revocation | Credentials already issued by the removed issuer continue to work — removing an issuer must not disenfranchise its legitimate users (ADR-003) |
| A-05.3 Invariant enforcement | After removal, `issuerSetValid()` may become false (< 2 active, or no non-state issuer). **`issuerSetValid()` is currently a view that nothing enforces — `enrol()` never consults it.** A region can therefore fall to a single state issuer and keep enrolling. Expected to fail today; **OPEN-06**, Sev-1 |
| A-05.4 State-issuer monoculture | Attempt to configure a region with state issuers only | Must be refused, per the ADR-003 protocol invariant `acceptedIssuers(region).length >= 2` with ≥1 non-state |
| A-05.5 Per-region attestor concentration | `FR-004` requires refusing issuance from an attestor whose share would exceed 50% **in that region**. `PersonhoodRegistry` has a per-issuer *epoch count* cap and **no region dimension at all**; `RegionRegistry.issuanceCount` tracks residency attesters, not personhood issuers. **`FR-004`'s share cap has no implementing mechanism and is untestable as written — OPEN-02**, Gate-2 blocker |

> _(v1.1.0.)_ The v1 analogue of "issuer compromise" is **ID-check-vendor compromise**, and it is
> covered by `TS-ADV-30` (§0.8), not here — the mechanism, the blast radius and the removal path are
> all different. Doc 02 `FR-129` makes single-issuer permanence a **Charter-level** re-entry rather
> than a configuration default, and Phase-1's single-rail limitation is recorded and dated
> (`FR-121`, ADR-016).

### TS-ADV-06 — Deanonymisation by correlation and by small anonymity set (`RISK-06`) · Owner: Dr. Lena Kowalczyk

*Group A — correlation.*

| Case | Pass criterion |
|---|---|
| A-06.1 Timing correlation | Enrolment-to-first-action timing across a synthetic population; adversary advantage ≤ the published collusion bound. ADR-003 mandates a random delay between enrolment and first action — its distribution is asserted, not assumed |
| A-06.2 Root-version fingerprinting | A proof cites the tree root it used. With `ROOT_HISTORY = 64`, a rare root can narrow the anonymity set to a handful. **Test: for every published action, compute the anonymity set implied by the `(root, regionId, epoch)` tuple and assert it is ≥ `MIN_ANONYMITY_SET`.** This is a real leak that no other test catches |
| A-06.3 Fee / gas fingerprinting | Paymaster metadata, UserOp shape, gas amounts and sponsorship-budget state must not distinguish individuals |
| A-06.4 Indexer read logs | ADR-014 forbids IP logs, per-user query history and browsing analytics. Assert by inspection of the deployed configuration and by an active probe that produces no retrievable read record |
| A-06.5 Notification metadata | `NFR-023`: content **and metadata** reveal no party or governance activity |
| A-06.6 Gateway logs | IPFS gateway request patterns for manifesto/proposal CIDs reveal what a reader is interested in. Assert multi-gateway rotation + client-side cache defeats the naive form |
| A-06.7 Cross-scope linkage | The `FR-002` game: an observer with all published records decides whether two actions came from one person or two. Advantage ≤ chance. **Note: "better than chance" is not falsifiable by a finite suite — see OPEN-08 for the restatement this suite actually implements** |

*Group B — small anonymity sets.*

| Case | Pass criterion |
|---|---|
| A-06.8 Ward of 40 | `resolveAnonymityScope` escalates to the nearest ancestor with ≥ 1,000, or returns `null` and the action does **not** publish |
| A-06.9 Floor cannot be lowered | No configuration, charter option, flag or privileged call lowers `MIN_ANONYMITY_SET` for any scope (`TS-ABSENCE` cross-reference) |
| A-06.10 Escalation semantics | **Escalating a ward election's scope to its parent changes the electorate.** Assert that escalation is applied to *publication*, never to *eligibility*. This is the mechanical face of `OI-05` (`NFR-002` k≥1000 vs `BR-004` ward-level representation), which Doc 02 leaves open. **Untestable to a pass/fail until `OI-05` is decided — OPEN-10** |
| A-06.11 Withholding is disclosed | The user is told publication is delayed and why (`NFR-002`, US-0039) |

> _(v1.1.0.)_ Group B's **publication** half — aggregate-only publication with a `k` threshold and a
> disclosed delay — is genuinely testable in v1 and MUST be tested there. Group A is **not**: v1's
> database links account ↔ party ↔ activity directly, so a correlation battery measures the API
> surface and nothing more. The v1 verdict is the disclosed posture at Doc 02 H-06/H-07/H-14, never
> "no linkage found". §0.7 states the rule.

### TS-ADV-07 — State compulsion: capability-absence (`RISK-07`) · Owner: Sofia Marchetti

Each row of ADR-013 §3 becomes an executable assertion. **These are capability-absence tests and
carry the §6.5 limits.**

| Order | Executable assertion |
|---|---|
| "Give us party X's member list" | Enumerate **every** contract function, **every** emitted event field, **every** indexer table and column, and **every** off-chain store. Assert none yields an individual membership. The strongest available on-chain form: membership is a Merkle leaf and there is no function that enumerates leaves or maps a leaf to anything |
| "Tell us who cast vote N" | Assert no contract and no service holds a decryption key. Assert the 5-of-7 threshold cryptographically: **4 of 7 committee shares must be demonstrated insufficient to decrypt a real ciphertext** — an executed test, not a claim. Assert committee members span ≥ 5 legal jurisdictions and competing parties (composition inspection) |
| "Take down party Y" | No pause on the core (`TS-ABSENCE` opcode + selector scan). The one unilateral power in the system is `FeatureFlags.disable` — its blast radius is pinned by `TS-ADV-16` and **OPEN-03** |
| "Stop citizen Z participating" | No account-level authority anywhere in the core. Negative-authority matrix over every entrypoint |
| Residual disclosure | The pre-enrolment screen (`SCR-01`) states that an attester still learns the citizen enrolled — assert the disclosure is present, plain-language, and acknowledged before proceeding (`FR-003`, `NFR-015`) |

> _(v1.1.0 — the most important track note in this section.)_ **The first two rows are false in v1
> and the suite MUST say so rather than run.** In Definition A the operator database holds the
> member ↔ party mapping and the ballot direction; `FR-128`'s subpoena test is explicitly **deferred
> to v2** (Doc 02 T-02 CONFIRMED 2026-08-23; H-04). Running `TS-ADV-07` against v1 and recording a
> fail would misrepresent a phasing decision as a defect; running it and recording a pass would be a
> lie. **The v1 obligation is the disclosure**: the enrolment and ballot surfaces state that the
> operator holds this data and can be compelled (DES-098 clauses; §0.5 S4). The third and fourth rows
> do apply in v1, in their conventional form, via §6.4's negative-authority matrix.

### TS-ADV-08 — State-level blocking (`RISK-08`, `NFR-014`) · Owner: Chen Wei

Blocking simulation: primary domain blocked at DNS and IP, and the app-store listing removed
(`CON-010`). Assert **≥ 2 independent access paths** still complete a governance action end to end:
(1) the IPFS-published static bundle via ENS; (2) the Arweave mirror; (3) the signed offline bundle;
(4) an already-installed PWA continuing to function after the block. Assert the reproducible-build
hash of the served bundle matches the public source — the defence against a compelled
"just this one user gets different JavaScript" attack (ADR-012 §4). _(v1.1.0: `NFR-014` is IN-v1 and
this suite applies to both tracks; in v1 the "governance action" completed under a block is a
conventional API write, and the path set MUST be re-verified against the v1 hosting topology.)_

### TS-ADV-09 — Sequencer censorship & L1 force-inclusion (`RISK-09`, `NFR-025`) · Owner: Chen Wei

| Case | Pass criterion |
|---|---|
| A-09.1 Fallback ladder | The sequencer withholds one citizen's UserOp. Assert the ADR-014 ladder executes in order: alternate public bundler → self-paid direct submission → **L1 force-inclusion** (`OptimismPortal.depositTransaction`). All three are **implemented and tested in CI** (ADR-014), not documented as theoretical |
| A-09.2 Time to inclusion | Measure wall-clock time to inclusion via the force-inclusion path on testnet | **`NFR-025` states 60 minutes. ADR-001 states the force-inclusion round trip is typically 12–24 hours and mitigates by requiring ≥ 72h voting windows. These are irreconcilable as written. OPEN-11 — the architect must either restate `NFR-025`'s bound or name a sub-60-minute path.** The suite measures and reports; it cannot pass a criterion the design contradicts |
| A-09.3 Voting-window safety | Assert every voting window is ≥ 72h so a force-inclusion round trip cannot silently disenfranchise (`TIER_RULES[*].minVotingSeconds` is ≥ 3 days for every tier — asserted at L0 and again on-chain) |
| A-09.4 Sequencer stall | Full stall for 6 hours during an open ballot → no ballot closes incorrectly; no result is finalised on partial data |
| A-09.5 Degrade, never deny | Sponsorship circuit-breaker trips (3× p99, ADR-014) → self-pay path works; the action is queued with an explanation, never rejected (`FR-061`) |

> _(v1.1.0.)_ `NFR-025` is IN-v1, but the **mechanism** differs completely: v1 governance actions are
> conventional API writes, not UserOps, and the only chain interaction is the audit-record write.
> `OPEN-11`'s conflict is therefore a **v2** conflict; the v1 question — *can a single operator delay
> one citizen's action beyond 60 minutes?* — has a different and, in v1, **worse** answer, because
> the operator is the write path. It is untested and is folded into **OPEN-22**.

### TS-ADV-10 — Ceremony & circuit compromise (`RISK-10`) · Owner: Rafael Duarte

Detection is impossible by test (§7.4). This suite tests **containment and response**.
_(v1.1.0: **v2 only** — v1 runs no ceremony.)_

| Case | Pass criterion |
|---|---|
| A-10.1 Backdoored artifact refused | The client refuses to prove against a zkey whose hash is not the registered `zkeyHash` (ADR-012 §3) |
| A-10.2 Response drill | Rehearsed on testnet: new ceremony → register new verifier → old verifier enters `SUPERSEDE_GRACE` → in-flight proofs still verify → grace expires → old proofs rejected. Timed; must complete inside the ADR-010 timelock windows |
| A-10.3 Blast-radius bound | A forged residency proof still requires an unspent `Nₐ` and a valid personhood layer. Assert forgery in one layer does not compose into unlimited action volume |
| A-10.4 Setup-compromise honesty | A test that **documents** (does not assert) that a compromised phase-2 ceremony is undetectable, so the Gate-2 packet cannot imply otherwise |

### TS-ADV-11 — Key loss at population scale (`RISK-11`) · Owner: Amara Diallo

| Case | Pass criterion |
|---|---|
| A-11.1 Recovery at scale | 1,000 synthetic subjects lose devices across guardian topologies (3-of-5, 5-of-7, hardware key, printed card) | **≥ 99% succeed within 14 days** (`NFR-016`) |
| A-11.2 Thief-initiated | Thief starts recovery; legitimate holder cancels in the window → recovery aborted, access not transferred (`FR-058`) |
| A-11.3 Guardian collusion | 5 of 7 guardians collude during the 7-day timelock → the owner vetoes with any surviving key (ADR-002 §3) |
| A-11.4 Fraud rate | Red-team fraudulent recovery attempts | ≤ 0.01% succeed (`NFR-016`) |
| A-11.5 Recovery leaks nothing | Every participant (helper, guardian, attester, support agent, operator) pools what they observed → none can determine memberships, ballots, endorsements or history (`FR-059`) |
| A-11.6 Multi-device first | Assert the common "broke my phone" case is served by a second registered passkey and never reaches the recovery path at all |

> _(v1.1.0.)_ `NFR-016` and `FR-058` are IN-v1, so this suite applies to both tracks — but **A-11.5
> is an `FR-059` PARTIAL in v1** (Doc 02 H-10): the recovery event is associated with the account in
> the database and can be correlated with membership. Assert the channel constraints; do not assert
> "reveals nothing". `TS-ADV-22`/`TS-ADV-23` (§0.8) carry the v1 adversarial half.

### TS-ADV-12 — Population-oracle manipulation, deflation and inflation (`RISK-12`) · Owner: Yuki Sato

| Case | Pass criterion |
|---|---|
| A-12.1 Median robustness | 5 sources, corrupt 1 then 2 → effective denominator unmoved. Corrupt 3 of 5 → it moves; assert the drift limit still bounds the damage |
| A-12.2 **Deflation** | Denominator driven toward zero to make activation trivial | Gains nothing: `petitionThreshold` returns `max(byPopulation, byVerified, 500)`. Assert with `eligiblePopulation = 0` that the floor dominates and a party still needs 500 real verified endorsers |
| A-12.3 **Inflation** | Denominator inflated to make activation impossible | Bounded by `POPULATION_MAX_DRIFT_BPS = 500` per `POPULATION_DRIFT_PERIOD = 90 days`. Assert at exactly ±5% and ±5.01% |
| A-12.4 Mid-petition swing | Attempt to change the denominator under a live petition | The petition's denominator is snapshotted at creation (ADR-004 §4). **`RegionRegistry` provides no snapshot primitive today; the petition module must implement it. Assert it, and fail if it is absent.** |
| A-12.5 Dispute window | `POPULATION_DISPUTE_WINDOW = 7 days` — activation refused at `until − 1s` (`DisputeWindowOpen`), permitted at `until` |
| A-12.6 Source independence | `MIN_POPULATION_SOURCES = 5`. **`submitPopulation` is `onlyTimelock`, so every "independent" source value is supplied through one authority. On-chain independence is therefore not enforceable as designed — OPEN-12.** The suite asserts what *is* checkable: source identity is recorded, published, and reproducible from the activation record (`FR-018`) |

> _(v1.1.0.)_ `FR-009`/`FR-016`/`FR-018` are IN-v1 and the threshold arithmetic is the same
> `packages/protocol` code, so A-12.1/2/3/5 apply to both tracks. **OPEN-12 changes shape in v1**:
> the "single authority" is no longer a timelock but the operator, which is strictly weaker. The v1
> form of `FR-009` is a two-source oracle with disagreement tolerance and a dispute window — a lower
> bar than `MIN_POPULATION_SOURCES = 5`. The v1 suite MUST assert the v1 bar **and report it as the
> v1 bar**.

### TS-ADV-13 — Misuse, unlawful content and the filtering boundary (`RISK-13`) · Owner: Daniel Okonkwo

| Case | Pass criterion |
|---|---|
| A-13.1 Filtering is display-only | Jurisdiction-scoped display filtering leaves the underlying record unaltered and retrievable outside that jurisdiction (`FR-056`) |
| A-13.2 Filtering is logged | Every filtering action appears in the public register with jurisdiction, legal basis and affected item, **before or atomically with** the filtering taking effect. A filter without a log entry must be refused |
| A-13.3 No deletion path | `TS-ABSENCE`: no selector, no bytecode path, no service endpoint deletes or edits a published record |
| A-13.4 Member retraction | The member-vote retraction flag (ADR-009) sets `retracted` on-chain; conforming clients honour it; the content remains retrievable. Assert the distinction between *retracted* and *deleted* is visible to a user |
| A-13.5 Denylist auditability | The jurisdiction-scoped gateway denylist is signed, published and diffable; a silent addition is detectable |

> _(v1.1.0.)_ A-13.3 is the `NFR-028`/`FR-107` question in another form and **is** testable in v1 —
> see §9 `NFR-028`. In v1 the "no deletion path" claim must be proven at the **store**, not only at
> the service: an `INSERT`-only grant on `membership_event` and a `BEFORE UPDATE` refusal on archived
> rows (Doc 03 §10.13.12). Until the Postgres backing exists, v1's no-deletion claim is a claim about
> one writer. **OPEN-19.**

### TS-ADV-14 — Regulatory reclassification (`RISK-14`, `CON-001`) · Owner: Sofia Marchetti

| Case | Pass criterion |
|---|---|
| A-14.1 No state-binding output | **Assert no code path produces a state-binding electoral result.** Mechanically: a lexical + ABI audit that the word "election" in the codebase always denotes an *internal party* election (ADR-013 §1), and that no artifact is emitted in a format that a state tabulator consumes |
| A-14.2 Boundary statement present | Every public surface states the `CON-001` boundary (`SCR-*` inspection, all 8 locales) |
| A-14.3 Per-jurisdiction feature gating | `CON-005`: treasury and other regulated features are independently gateable per jurisdiction and **off by default** — assert `TREASURY.defaults.prod === false` and that the on-chain flag agrees |
| A-14.4 Officer-filing evidence | The protocol produces the *evidence* a human officer files (candidate-selection record, treasury ledger) and never files anything itself (ADR-013 §1) |

> _(v1.1.0.)_ Fully applicable to v1. `CON-001` is entrenched at Tier 1 (`FR-118`) and
> `FR-075`/`CON-014` require the platform-vs-legal boundary on every surface — both IN-v1. A-14.3's
> second clause ("and the on-chain flag agrees") has no v1 counterpart, because v1 has one flag
> surface; assert the software flag only, and say so.

### TS-ADV-15 — Adoption failure (`RISK-15`) · Owner: Grace Mbeki

Not an attack; an instrumentation and calibration suite, because `OI-01` (threshold calibration) is
undecided and the product dies at either extreme.

| Case | Pass criterion |
|---|---|
| A-15.1 Threshold sensitivity harness | Sweep `thresholdBps` over `[MIN_THRESHOLD_BPS=50, MAX_THRESHOLD_BPS=2000]` against modelled enrolment curves; report the activation rate. Feeds the `OI-01` Gate-1 decision on the calibration *method* |
| A-15.2 Graveyard behaviour | Expired petitions archive immutably and leave active listings (`FR-013`), so the front page is live politics |
| A-15.3 Kill-criteria instrumentation | The Doc 01 §E2 kill criteria 3 and 4 have live, published metrics with defined denominators (`NFR-019`), with **zero individually identifying fields** |

> _(v1.1.0.)_ Fully applicable to v1 and arguably **more** so: v1 is the release that finds out
> whether anyone shows up. A-15.3's metrics must be built under the `NFR-027` prohibition —
> aggregate-only, no per-user attribution path — which is exactly the tension `RISK-26` names
> (`TS-ADV-26`, §0.8).

### TS-ADV-16 — Trumocracy becomes the gatekeeper (`RISK-16`) · Owner: Rafael Duarte

The whole-stack capability-absence suite. This is the one an auditor and a journalist will read.

| Case | Pass criterion |
|---|---|
| A-16.1 No admin, no pause, no upgrade in the core | ABI allowlist + bytecode `DELEGATECALL`/`SELFDESTRUCT` scan + storage-layout snapshot show no owner, admin, pauser or proxy in the immutable core (`CON-003`, ADR-010) |
| A-16.2 **`FeatureFlags` blast radius** | `emergencyDisabler` can `disable` unilaterally. Pin exactly what that can and cannot do. **Required assertions:** disabling a flag MUST NOT (a) stop or invalidate an in-flight ballot, (b) prevent tallying or execution of a proposal that already passed, (c) alter any published result, (d) enable anything. **As written, `disable()` is unconditional and `FeatureFlags` has no notion of an in-flight ballot; assertions (a) and (b) are expected to fail — OPEN-03, and it is also the mechanism `NFR-020`'s second clause requires and does not have.** Sev-1 |
| A-16.3 No unilateral rule change | `NFR-017`: every registry mutation is `onlyTimelock`; the timelock is ≥ the highest party tier (T3 = 30 days; ADR-010's registry timelock is 30 days — assert equality or better) |
| A-16.4 Funder holds nothing | No governance right, weight, precedence or visibility attaches to any contribution (`FR-051`, ADR-007 §"funding") |
| A-16.5 Reproducible builds | Build twice on different machines → identical artifact hashes; ≥ 1 independent party reproduces (`NFR-021`); deployed bytecode hash equals the audited artifact hash at every pinned address |
| A-16.6 Licence | Every governance-critical source carries an OSI-approved SPDX header (`CON-004`; the contracts currently declare `AGPL-3.0-or-later`) — lint-enforced |
| A-16.7 Exit works | `TS-EXIT` (`NFR-018`): full party export → reconstitute on an independent deployment → identical roots, tallies and history. **In CI**, because an exit path never executed is not an exit path (ADR-010) |
| A-16.8 Key sunset | `renounceProtocolKeys()` is timelocked, published and **irreversible** — assert irreversibility by attempting to re-acquire after renouncement |

> _(v1.1.0 — the honest v1 answer to this suite.)_ **In Definition A, Trumocracy *is* the gatekeeper
> of the application store**, and no test changes that. The operator runs the database, the write
> path and the API. `CON-003`'s "no single trusted operator" is met by the *on-chain core* — which v1
> does not deploy — and is **not** met by the v1 application layer. What v1 can and MUST prove:
> A-16.4 (funder holds nothing), A-16.5 (reproducible builds), A-16.6 (licence), A-16.7 (exit and
> export actually work — the most important of the eight for v1, because the right to leave with your
> history intact is the only structural check on an operator who holds everything else), and the
> code-only governance path with no override in the v1 service (`FR-056`, IN-v1). A-16.1/2/3/8 are v2
> assertions about a core that is not deployed. **A v1 Gate-2 packet that presents `TS-ADV-16` as
> green without this paragraph is misleading, and §0.9 item 21 exists to prevent it.**

---

## 9. NFR verification methods — `NFR-001` … `NFR-028`

_(v1.1.0: extended from `NFR-001`…`NFR-026` to the full Approved set of Doc 02 v2.16.3 §6.
**`NFR-027` and `NFR-028` — both Must, both IN-v1 — had no verification method at all in v1.0.x.**
This closes that half of review ISS-01. The v1-specific deltas for the six NFRs whose verification
changes between the tracks are at **§0.7**.)_

Every NFR gets: a method, a measurement instrument, a reference environment, a threshold, and an
owner. The reference device profile is fixed for the whole plan.

**Reference device profile (RDP).** 2 GB RAM · Android 9 · a physical mid-range handset of that class
· network shaped to **64 kbit/s with intermittent loss** · cold cache. CI uses a *proxy* profile
(4× CPU throttle + 64 kbit/s shaping in a headless browser) for every commit; **the physical RDP lab
is authoritative and runs on every release candidate.** Where CI proxy and RDP disagree, RDP wins and
the CI budget is re-calibrated.

| NFR | Method | Instrument / environment | Pass threshold | Owner |
|---|---|---|---|---|
| **NFR-001** Privacy — no linkage | (a) event-schema assertion: no emitted field is a linkable identifier; (b) `TS-ADV-06` correlation battery over a synthetic production-scale dataset; (c) independent privacy audit `NF-01` | Devnet + offline dataset; audit external | 0 confirmed linkages; audit 0 critical/high. **The collusion bound is unset (`OI-10`) so the adversary model is not fully specified — OPEN-13** | Dr. Lena Kowalczyk |
| **NFR-002** k ≥ 1,000 | L0 `resolveAnonymityScope` + L1 `anonymitySetSufficient` + L3 differential + L6 withheld-publication E2E + a standing indexer invariant that recomputes k for every published action | Local, CI, devnet, testnet, production | k ≥ 1,000 for 100% of published actions, or withheld with a user-visible reason. See OPEN-10 (`OI-05`) | Dr. Lena Kowalczyk |
| **NFR-003** Coercion resistance | `TS-ADV-02` (A-02.1…A-02.4) + key-change indistinguishability classifier + formal-argument review + independent adversarial audit | Devnet + external audit | 0 receipt constructions found; classifier advantage ≤ chance. **Blocked by OPEN-01: MACI is Phase 3 and off in production** | Aisha Nkemdirim |
| **NFR-004** Sybil resistance | Duplicate rate: out-of-band audited sample (see the honesty note below); attestor share: per-region concentration check | Production sampling + on-chain check | ≤ 0.1% duplicates; issuer share ≤ 50% (≤ 40% targeted). **The 50%-per-region cap has no mechanism — OPEN-02.** *Honesty note: the system is designed so that a nullifier cannot be linked to a person, therefore we cannot count duplicates internally. Measurement requires a consented, out-of-band audited sample run by the attestors, at a stated confidence interval. This is a weaker instrument than the requirement implies and must be reported as such — OPEN-14* | Marcus Adeyemi |
| **NFR-005** Cost | (1) harness `gasUsed` per action as a CI regression detector; (2) **+ intrinsic 21,000 + calldata cost + ADR-001 blob-fee model** to reach a price; (3) testnet measurement against real fee oracles; (4) production instrumentation `NF-04` | CI (regression), testnet (price), production (truth) | median < USD 0.01; p99 < USD 0.05; citizen charged USD 0.00 in 100% of cases. CI fails on a > 10% gas regression on any citizen action. **The denominator ("a citizen governance action") must be enumerated before this is measurable — OPEN-15** | Hiroshi Tanaka |
| **NFR-006** Performance | Scripted journeys on the RDP; client proving time measured separately (ADR-005 budget) | CI proxy every commit; physical RDP per RC | primary screen interactive ≤ 5s p95; action acknowledged ≤ 5s p95; finalised on the verifiable record ≤ 120s p95; enrol→endorse ≤ 10 min; ADR-012 budget: < 200KB initial JS | Hiroshi Tanaka |
| **NFR-007** Availability | Staging 72h soak + production SLO measurement; single-operator-failure drill | Staging, production | write path ≥ 99.5%/month; read/verify ≥ 99.9%/month; no single operator failure blocks an action > 60 min | Chen Wei |
| **NFR-008** Scalability (Should) | LeanIMT insert benchmark to depth 32 (measured, not extrapolated); indexer/relayer load test | Devnet + load rig | 50M enrolled; 10M eligible in one ballot window; 5,000 actions/s without violating `NFR-006` | Chen Wei |
| **NFR-009** Security | Independent third-party security **and cryptography** audit (`NF-02`), two independent audits per circuit (ADR-005), penetration test | External | 0 critical/high open at Gate 2; 0 privileged administrative overrides in any governance path | Rafael Duarte |
| **NFR-010** Data minimisation | Automated **data-inventory check that fails the build**: scans contract storage layouts, event field names/types, indexer schema columns, log formats and message-queue payloads against a PII denylist and a mandatory per-field annotation | CI (blocking) + manual inventory inspection at Gate 2 | 0 identity-document, biometric, address, DOB or direct-identifier fields anywhere | Dr. Lena Kowalczyk |
| **NFR-011** Accessibility | **Automated:** an offline-capable WCAG rule engine over every primary flow, every locale, in CI. **Manual (mandatory):** full task completion by screen reader — TalkBack on the Android 9 RDP, plus NVDA and VoiceOver — keyboard-only, switch-control, and 200% text scale, on every release candidate. Automated tooling detects only a minority of WCAG failures; the manual pass is the real gate | CI + RDP lab + assistive-technology lab | 0 Level A and Level AA failures; every task completable by every modality; 44px minimum touch targets (ADR-012) | Nadia Hassan |
| **NFR-012** Portability | Install-size gate in CI; offline draft composition with deferred submission; every primary flow at 64 kbit/s intermittent | CI proxy + RDP | install ≤ 15 MB; 100% of primary flows pass on the RDP; offline compose + exactly-once deferred submit (US-0012) | Nadia Hassan |
| **NFR-013** Localisation | String-key coverage gate at 100%; pseudo-localisation build; RTL layout snapshots; hardcoded-string lint; native-speaker review per locale | CI + review | 8 locales incl. ≥ 1 RTL; 0 untranslated strings in any primary flow; dates/numbers/names localised | Nadia Hassan |
| **NFR-014** Censorship resistance | `TS-ADV-08` blocking simulation | Isolated network lab + testnet | ≥ 2 independent access paths verified end to end under a full block | Chen Wei |
| **NFR-015** Compliance | Per-jurisdiction legal sign-off (**attestation, not test**); tested parts: pre-enrolment disclosure present and acknowledged; an erasure request produces the "no personal data exists" demonstration plus credential deactivation | Legal review + E2E | sign-off per pilot jurisdiction before launch; disclosure present in the enrolment flow in all 8 locales | Sofia Marchetti |
| **NFR-016** Key recovery | `TS-ADV-11` at n = 1,000 synthetic subjects across guardian topologies | Devnet + staging | ≥ 99% succeed ≤ 14 days; ≤ 0.01% fraudulent; notification + cancellation window mandatory on 100% of recoveries | Amara Diallo |
| **NFR-017** Upgradeability | `TS-ABSENCE` negative-authority matrix + timelock-duration assertion + `TS-UPG` | CI + testnet | 0 unilateral rule-change paths; registry timelock ≥ highest party tier (30 days) | Rafael Duarte |
| **NFR-018** Exit rights (Should) | `TS-EXIT` in CI: export → reconstitute on an independent deployment → verify | CI + devnet | export reconstitutes with identical roots, tallies and version history; a member can deactivate at any time | Erik Lindqvist |
| **NFR-019** Observability (Should) | Dashboard field audit + metric-correctness diff against the independent verifier | Staging + production | dashboard live at launch; 0 individually identifying fields; every published metric reproducible by the verifier | Yuki Sato |
| **NFR-020** Operability | Timed rollback drill; per-flag independent kill test; **open-ballot flag freeze test** | Staging (drill) + production (proven once before Gate 2) | rollback < 15 min; flags independently kill-switchable; **a flag governing an open ballot's rules cannot change while that ballot is open — no mechanism exists in `FeatureFlags.sol`; OPEN-03**, Gate-2 blocker | Chen Wei |
| **NFR-021** Openness | Double-build hash comparison across machines; independent third-party reproduction; SPDX licence lint | CI + external | bit-identical artifacts; ≥ 1 independent party reproduces; 100% of governance-critical logic under an OSI licence | Rafael Duarte |
| **NFR-022** Usability | Moderated + unmoderated studies, first-time non-technical users, per launch locale | Field / research lab | ≥ 80% complete enrol→endorse unaided ≤ 10 min; SUS ≥ 75; support-contact ≤ 5% of enrolments; **n ≥ 200 per launch locale** | Grace Mbeki |
| **NFR-023** Content & notifications | Jargon denylist token-scan across every primary-flow string in all 8 locales (automatable, blocking); readability scoring per locale where an instrument exists, else native-speaker review; notification content **and metadata** leak test | CI + review | 0 occurrences of wallet, seed phrase, private key, gas, token, mint, chain, block, hash (or locale equivalents) in primary flows; ≤ grade-8 reading level; every error states cause **and** next action | Nadia Hassan |
| **NFR-024** Anti-harassment | Surface inspection for identity, contact, location-below-region and activity-pattern exposure; recall/nomination flow harassment review | Inspection + L7 review | 0 identity-exposing surfaces; harassment-rate metric published | Daniel Okonkwo |
| **NFR-025** Liveness | `TS-ADV-09` operator-censorship simulation | Testnet | **Stated: alternative inclusion ≤ 60 min. Conflicts with ADR-001's 12–24h force-inclusion window — OPEN-11.** The suite measures and reports the real number | Chen Wei |
| **NFR-026** Compatibility (Should) | Pairwise matrix over evergreen mobile browsers ≤ 24 months old × Android 9+ × 8 locales × 3 network profiles | Device lab + CI | 100% of the supported matrix passes primary flows; unsupported combinations show a clear actionable message, never a broken screen | Nadia Hassan |
| **NFR-027** Privacy — no behavioural telemetry _(NEW at v1.1.0; Must; IN-v1)_ | (a) **Existing and green today:** `UT-0525` (`services/indexer` — the read model records no reader, no query and no IP anywhere in the state shape) and `UT-0740` (`apps/web` safety surfaces — the client carries no beacon, no analytics global and no tracking attribute). (b) **Build-failing repo-wide scan**, extended to every new surface as it lands: no analytics global, no `sendBeacon`, no fetch to an analytics origin, no tracking attribute, no per-user event name, no dwell/scroll/section-view instrumentation. (c) **Store, log and export inspection** at Gate 2: no table, column, log line or export row keyed to a person, credential, session or device. (d) Aggregate-only substitutes are asserted to exist, so the prohibition does not silently become "no measurement at all" (`NFR-019`, `TD-08`). Extends `TS-DATA`, which today covers `NFR-010` only | CI (a, b — blocking) + Gate-2 inspection (c, d) | 0 per-user behavioural events in any store, log or export; `UT-0525` and `UT-0740` green on **every** release. **Current state, verified 2026-08-31: (a) is green but bounds only the two surfaces those two tests cover; (b) does not exist; (c) has no v2.0 governance surfaces to inspect. The `TS-GOV2` case for `NFR-027` is Blocked. Recorded as OPEN-19.** | Dr. Lena Kowalczyk |
| **NFR-028** Data lifecycle — append-only _(NEW at v1.1.0; Must; IN-v1)_ | (a) **Service layer, green today:** `UT-0523` (indexer keeps manifesto history append-only), `UT-0824` (SDK membership history — leaving is never deletion), `UT-0846` (SDK decision trail is append-only and records the whole deliberation), `UT-0861` (`apps/web` membership history shown active/inactive) — each asserts that a state change **appends** and that the interface exposes no update or delete method. (b) **Interface-absence assertion:** the 22-method `IPartyStore` member set contains no `delete*`, `purge*` or `overwrite*` method, guarded by the `UT-0871` interface-parity test against the app-side shim. (c) **The control the requirement actually names**, at the store: the application role holds an **`INSERT`-only grant** on `membership_event`; a `BEFORE UPDATE` trigger refuses every mutation of a row with `archived_at IS NOT NULL`; and **projection-equals-replay** is asserted on a seeded fixture so a materialised view cannot silently diverge from its log (Doc 03 §10.13.12, DES-097(b)). (d) Audit inspection of every governance-path store at Gate 2. The `FR-085`/`OI-16` pre-nomination confidential-class carve-out is the **only** recorded exception and MUST be asserted as bounded to that class | CI (a, b) + integration against the production store (c) + audit (d) | 0 hard-delete or overwrite paths detectable in any governance-path store. **Current state, verified 2026-08-31: (a) and (b) are real and green; (c) cannot run — the DES-097(b) Postgres backing is unbuilt and the v1 store is the in-memory implementation with `IS_INSECURE_MOCK = true`. The `TS-GOV2` case for `NFR-028` is Blocked. An append-only guarantee asserted only above the store is a guarantee about one writer, not about the data. Recorded as OPEN-19.** | Erik Lindqvist |

---

## 10. Entry & exit criteria, coverage, flake and data

### 10.1 Entry criteria (per build)

A build enters test only when **all** hold:

1. `npm run verify` is green locally: `lint:deps` (ADR-011 layering) → `typecheck` → `test`.
2. Every new or changed governance rule exists in `packages/protocol` **and** has a `TS-DIFF` case.
3. Every new contract entrypoint has a negative-authority test and appears in the `TS-ABSENCE` ABI
   allowlist snapshot with a reviewed diff.
4. Every new circuit claim appears in `claims.json` with a Z2 negative test.
5. Every new capability is behind a flag with a `removeBy` value (`permanentFlags()` must stay empty
   except for the two deliberate permanents, `L1_FORCE_INCLUSION` and `SPONSORED_GAS`).
6. No new personal-data field: the `NFR-010` data-inventory check is green.
7. The story's `TC-####` exist in Doc 07 and its RTM row (Doc 08) is open with `BR → FR/NFR → DES →
   US → TC` populated.

### 10.2 Exit criteria — release readiness (Gate 2)

> **Track note _(v1.1.0)_ — read before using this table.** This is the **Definition-B (v2)** Gate-2
> bar. It is retained **whole and unrelaxed**. It MUST NOT be waived, reduced, or marked "N/A" row by
> row to fit a v1 release: several rows demand circuit evidence, on-chain capability-absence
> snapshots and `TS-DIFF` divergence counts for a system that, per Doc 02 §16.1.1, does not ship that
> way at v1. **A Gate-2 packet for the 2027-06-01 Definition-A release is assembled against §0.9
> instead** — an equally strict, separately enumerated table. Passing §0.9 says nothing whatsoever
> about this table. §0.1 rules 1 and 2 are normative.

| # | Criterion | Evidence |
|---|---|---|
| 1 | **100% of Must FR/NFR have a passing test** and the RTM (Doc 08) shows **zero gaps in Must rows** | Doc 08, verified by reviewer-qa |
| 2 | 0 open Sev-1 / Sev-2 defects | defect register |
| 3 | `TS-DIFF`: **zero divergences** | CI run on the release commit |
| 4 | `TS-ABSENCE`: allowlist snapshots unchanged since audit; opcode and storage-layout scans clean | CI + audit artifact |
| 5 | L4: 100% of `claims.json` entries have a passing Z2 negative test; `circomspect` clean at ≥ Warning; Z5 malleability battery green | CI |
| 6 | All 16 `TS-ADV-*` suites executed with a recorded verdict; **Band A and Band B suites green** | suite reports |
| 7 | `NF-01` privacy audit and `NF-02` security & cryptography audit complete, **0 critical/high open** (`NFR-009`) | audit reports |
| 8 | `NF-03` red-team: flash-takeover and mob-capture simulations failed to succeed | red-team report |
| 9 | Performance green on the **physical RDP**, not only the CI proxy (`NFR-006`, `NFR-012`) | RDP lab report |
| 10 | Accessibility: 0 Level A/AA failures, automated **and** manual screen-reader passes (`NFR-011`) | a11y report |
| 11 | Cost measured on testnet with real fees: median < USD 0.01, p99 < USD 0.05, citizen USD 0.00 (`NFR-005`) | `NF-04` instrumentation |
| 12 | **Rollback drill proven < 15 min** and the open-ballot flag freeze demonstrated (`NFR-020`) | `NF-07` drill record |
| 13 | Censorship (`NFR-014`) and operator-censorship (`NFR-025`) simulations executed with recorded results | `NF-06` |
| 14 | `TS-EXIT` reconstitutes a party on an independent deployment (`NFR-018`) | CI artifact |
| 15 | Reproducible build verified by ≥ 1 independent party (`NFR-021`) | third-party attestation |
| 16 | Per-jurisdiction legal sign-off obtained (`NFR-015`, `CON-005`) | legal record |
| 17 | **Every `OPEN-##` in §13 is closed, or explicitly accepted in writing by the Gate-2 approver** | Gate-2 packet |

### 10.3 Suspension & resumption

**Suspend** testing of an area when: the `TS-DIFF` suite is red (the oracle is untrustworthy, so all
downstream results are meaningless); the data-inventory check is red (we may be persisting personal
data — stop and remediate before any further test data is created); an ABI allowlist diff is
unreviewed; or a `circomspect` finding at ≥ Warning is open.

**Resume** when the blocking condition is cleared and a full L0–L3 run is green on the fixed commit.

### 10.4 Definition of Done (inherited and sharpened)

Doc 05 §11 plus: the story's guardrail assertion exists (not only its positive path); its `TS-DIFF`
case exists if it touches a rule; its `TS-ABSENCE` snapshot entry is reviewed if it touches an ABI;
and its Z2 negative tests exist if it touches a circuit.

### 10.5 Coverage targets

| Area | Target | Justification |
|---|---|---|
| `packages/protocol` (`governance.js`, `party.js`, `regions.js`, `constants.js`, `flags.js`) | **100% line and 100% branch** | This is the reference implementation **and the oracle for `TS-DIFF`**. An untested branch here is a rule nobody checked, and worse, an unverified oracle silently blesses whatever the contract does. The module is small, pure and fast; 100% is cheap and the alternative is an oracle we cannot trust. |
| Immutable core contracts (ADR-010) | **100% line, 100% branch, and every custom error provoked by name** | The core has no proxy, no admin and no pause. A bug is **unfixable in place** — the only remedy is deploy-v2-and-migrate. There is no patch path to fall back on, so there is no coverage gap we can afford. |
| Registries (`PersonhoodRegistry`, `RegionRegistry`, `VerifierRegistry`, `FeatureFlags`) | ≥ 95% branch; 100% of authorisation branches | Mutable behind a 30-day timelock, so a defect is recoverable — but every authorisation branch is a `CON-003` surface and gets no discount. |
| SDK (`packages/sdk`) | ≥ 90% line; **100% of the fallback transport ladder**; **_(v1.1.0)_ 100% of the DES-095/DES-096 seam surface, including every `getProperties()` / `getTallyProperties()` field asserted at its Doc 03 §10.13.2/§10.13.3 value** | ADR-014: an escape hatch that has never been exercised does not exist. And a seam whose honesty is not asserted is a seam that can start lying between releases (§0.5 S1). |
| Client (`packages/ui`, `apps/web`) | ≥ 80% line; **100% of primary flows have an E2E case and an a11y case**; **_(v1.1.0)_ 100% of DES-098 honesty-notice surfaces have a verbatim-copy case, a non-dismissability case, an a11y case and a forbidden-vocabulary scan** | Line coverage is a poor proxy for UI correctness; flow and a11y coverage are the real metric. The notice is the one v1 surface where a rendering bug is a political harm, not a defect. |
| **_(v1.1.0)_ `IPartyStore` (22 methods, Doc 03 §10.13.12)** | **100% of interface methods exercised against every backing**, plus the three append-only controls (`INSERT`-only grant, `BEFORE UPDATE` refusal, projection-equals-replay) | The interface is the contract that makes the v2 backing swap a swap rather than a rewrite. An unexercised method is a method the production backing may implement differently. |
| Circuits | **Not measured by line coverage.** Measured by: `claims.json` negative-test coverage = 100%; `circomspect` clean; constraint-count snapshot stable | Line coverage of a constraint system is meaningless — a fully "covered" circuit can be entirely under-constrained. |
| Indexer / relayer | ≥ 85% line; 100% of the client-side re-verification path | ADR-014: the indexer may make the UI fast, never wrong. |
| **Seeded-defect drill** | ≥ 90% of 20 injected defects caught in one CI run, quarterly | Measures whether the tests *assert* rather than merely *execute*. Cheaper and more honest than a coverage percentage. |

### 10.6 Flake policy

**Levels L0–L3 have zero flake tolerance and no retries.** They are deterministic by construction:
in-process EVM, fixed genesis timestamp `1_760_000_000n`, deterministic accounts, no RPC, no network,
no wall-clock, no unseeded randomness. A non-deterministic result at these levels is a **real defect**
— usually shared state between tests or a hidden dependency on block number — and is triaged as such,
never quarantined.

**L4–L6 may retry at most once**, and every retry is logged and counted toward the flake metric.

| Rule | Detail |
|---|---|
| Determinism rules | fresh `Chain` per test; assert on `timestamp` not `blockNumber`; seed every generator; no `Date.now()`; no network in L0–L4 |
| Quarantine | max **48 hours**, named owner, linked defect. A quarantined test that blocks a guardrail (`TS-ABSENCE`, `TS-DIFF`, any Band A/B `TS-ADV`) **cannot be quarantined at all** — it blocks the pipeline until fixed |
| Flake budget | > 0.5% flake rate on any suite over a rolling 200 runs freezes new feature work in that area until it is back under budget |
| "It passed on retry" | Not an outcome. Three failures in 200 runs is a defect, not a flake |

### 10.7 Test data management — **no real personal data, ever**

`CON-002` is absolute and this is its testing expression.

1. **Hard rule.** No real identity document, document image, document number, biometric template,
   biometric derivative, date of birth, residential address, phone number, email address or real
   name may enter **any** environment — local, CI, devnet, testnet, staging or production. This
   includes consenting employees and includes a developer's laptop. There is no "just for debugging"
   exception and no approval that grants one.
2. **Synthetic only.** A deterministic seeded generator produces synthetic personas: fake document
   hashes, fake issuer signatures, fake region assignments, fake guardian sets. Seeds are checked in
   so every run is reproducible.
3. **Production has nothing to copy.** By `NFR-010` the public record holds no personal data. The
   *only* stores that hold anything personal are the recovery notification channel and support
   records (Doc 02 §7). **These MUST NOT be copied to any lower environment under any circumstance**;
   lower environments use synthetic notification channels.
4. **Attestor integration** uses each vendor's sandbox with synthetic documents. Production attestor
   credentials are never used in a test.
5. **Enforcement, not policy.** CI runs (a) a secret scanner, (b) the `NFR-010` PII field-denylist
   check over schemas, ABIs, events and fixtures, and (c) a fixture scanner that fails on anything
   resembling a real document number, national ID pattern, email or E.164 phone number. All three
   are **build-failing**.
6. **Usability and a11y research** (`NFR-022`, `NFR-011`) is run by a research vendor under its own
   consent regime; participants use throwaway accounts created through test attestors, **never their
   own credentials**, and research data is never joined to any platform record.
7. **Refresh & retention.** Devnet is reset from genesis on every deployment. Testnet retains history
   for `TS-UPG` and audit reproduction. No environment retains a fixture beyond the release that used
   it unless it is checked into the repository as a golden file.
8. **Golden files.** ABI allowlist snapshots, storage-layout snapshots, constraint-count snapshots and
   `TS-DIFF` regression corpora are checked in and reviewed like code.

---

## 11. Environments & tooling

### 11.1 Environments and what gates promotion

| Env | Purpose | Chain / data | Flag state | Suites that must pass to **enter** it |
|---|---|---|---|---|
| **local** | developer inner loop | in-process EVM harness; synthetic fixtures | dev defaults (everything on) | — |
| **ci** | every commit on trunk | in-process EVM harness; synthetic fixtures; no network egress | dev **and** prod flag sets, both run | L0, L1, L2, **L3 `TS-DIFF`**, `TS-ABSENCE`, `TS-EDGE`, L4 fast subset, L5 unit + a11y unit, `lint:deps`, `typecheck`, data-inventory, jargon scan, i18n coverage |
| **devnet** | ephemeral full-stack chain, reset per deployment | disposable L2 devnet + local IPFS + indexer + relayer | prod flag set + per-test overrides | everything CI runs, plus `TS-SMOKE` |
| **testnet** | public L2 testnet — the only place L2 behaviour is real | public testnet; real blob fees; real force-inclusion | prod flag set | devnet gates + `TS-E2E` + `TS-ADV-09` + `TS-COST` (real fees) + `TS-UPG` + `TS-EXIT` |
| **staging** | production-shaped, production topology, synthetic population | testnet-backed; production-equivalent services | prod flag set | testnet gates + `TS-LOAD` + 72h soak + `TS-RES` + `TS-ADV-08` + rollback drill (`NF-07`) + RDP performance + manual a11y |
| **production (flagged)** | real citizens, staged rollout 1 → 10 → 50 → 100% | mainnet L2 | prod flag set; new capability dark | staging gates + Gate-2 exit criteria (§10.2) |

**Definition-A environment note _(v1.1.0)_.** The v1 stack is a conventional PWA + Postgres with a
lightweight audit contract, so the environment ladder collapses: **local → ci → staging (production
topology, synthetic population, real Postgres) → production (flagged)**, with a devnet/testnet leg
used **only** for the audit-record writes. The **promotion gate is not the environment, it is
`IS_INSECURE_MOCK()`**: while any component in the wired graph returns `true`, promotion past devnet
is blocked by `packages/contracts/test/deployment-safety.test.mjs` and no waiver is sought (§0.5 S3).
The in-memory `IPartyStore` returns `true` today, so **v1 cannot presently promote past devnet** —
**OPEN-19**. The `tests/e2e/` harness that level V5 needs does not exist and no driver has been
selected — **OPEN-24**, §11.2.

**Promotion rule.** A suite that has never run against L2 semantics cannot gate a promotion that
depends on L2 semantics. Concretely: `TS-ADV-09` (force-inclusion) and `TS-COST` (real fees) are
**testnet-or-above only**, because the harness runs `Mainnet`/`Cancun` and knows nothing about
sequencers or blob fees. Saying otherwise in a report would be a lie the harness cannot detect.

### 11.2 Tooling — what exists, and what must be added

**Present in the repository today (use these; do not replace them without an ADR):**

| Tool | Version / location | Used for |
|---|---|---|
| Node | ≥ 22 (`package.json` `engines`) | everything |
| npm workspaces | `packages/*`, `services/*`, `apps/*`, `tools/*` | monorepo (ADR-011) |
| **vitest** | ^3.2.4 | L0, L1, L2, L3, L5 unit |
| **`tools/evm-harness`** | solc ^0.8.28 (solc-js), `@ethereumjs/vm` ^10, `@ethereumjs/common`, `@ethereumjs/util`, `viem` ^2.40, `poseidon-solidity` ^0.0.5 | all contract testing — offline, deterministic, no Foundry, no Hardhat, no RPC |
| `@zk-kit/lean-imt.sol` | via contract imports | LeanIMT under test |
| **`tools/dep-guard/check.mjs`** | present | ADR-011 layering; **and it is the control that keeps `TS-DIFF` meaningful** |
| TypeScript | ^5.9.3, `tsc -b` | typecheck gate |
| Root scripts | `verify` = `lint:deps && typecheck && test` | the local and CI entry gate |

**Required, not yet present — owner and ADR basis stated. None of these may be assumed green until
they exist.**

| Capability | Constraint it must satisfy | Owner | Basis |
|---|---|---|---|
| ~~`packages/contracts/package.json` + test workspace~~ | **DELIVERED — v1.1.0.** `package.json`, `vitest.config.mjs` and five test suites are present; 95 tests green (Doc 06 v2.4.3, Approved); root `verify` = `lint:deps && compile:contracts && typecheck && test`. **`OPEN-17` closed.** | — | ADR-011 |
| `storageLayout` in the harness `outputSelection` | one-line change; unblocks §6.3 | Samuel Oyelaran | this plan §6.3 |
| **_(v1.1.0)_ `packages/contracts/test/absence/<Contract>.selectors.json` golden files** | the §6.1 allowlist-snapshot control is *"a human deliberately approved this new selector"*; today the assertion is in-code and there is no reviewable diff. No `.json` exists under `packages/contracts/test/` (verified 2026-08-31) | Samuel Oyelaran | this plan §6.1, **OPEN-25** |
| **_(v1.1.0)_ DES-097(b) Postgres backing of `IPartyStore`** | `NFR-028`'s named controls (`INSERT`-only grant, `BEFORE UPDATE` refusal, projection-equals-replay) cannot be asserted above the store; and `IS_INSECURE_MOCK()` cannot return `false` across the graph without it | Samuel Oyelaran | Doc 03 §10.13.12, **OPEN-19** |
| **_(v1.1.0)_ `tests/e2e/` + a headless driver for level V5** | the v1 citizen journey (create → petition → activate → join → propose → vote → tally → published hash) has no home and no runner; `NFR-019`'s "reproducible by the verifier" half also has no v1 instrument because `apps/verifier/` does not exist | Ji-woo Park (harness), Samuel Oyelaran (driver selection) | §0.3, **OPEN-24** |
| **_(v1.1.0)_ Repo-wide behavioural-event scanner (build-failing)** | `NFR-027`(b); `UT-0525` and `UT-0740` bound only two surfaces and the prohibition must bind every new surface as it lands | Dr. Lena Kowalczyk | §9 `NFR-027`, **OPEN-19** |
| **_(v1.1.0)_ Second denylist over user-facing strings (build-failing)** | §0.5 S5 — no v1 string may claim anonymity, unlinkability, receipt-freeness, coercion resistance, one-person-one-vote or zero-knowledge, except inside a DES-098 notice denying it. _(v1.5.0: **widened by FR-131 clause (e)** — the scan now covers **any v1 participation act**, not only voting, applies **in every language**, and is a **claims** test as well as a word list: a string fails if a Grade-8 reader would take it to mean Trumocracy cannot link them to the act, even with none of the banned words present. Two carve-outs only: clause (a)'s mandated negated forms, and the named `anon`-badge exception. See §0.5 S5.)_ _(v1.7.1, cycle-1 **ISS-01**, Medium — **THE NAMED `anon`-BADGE CARVE-OUT IS WITHDRAWN.** The v1.5.0 annotation above is retained verbatim as the record; its closing sentence, "Two carve-outs only … and the named `anon`-badge exception", is **SUPERSEDED**. **This control now carries ONE carve-out, and only one: clause (a)'s mandated negated forms** — inside a DES-098 notice the banned words appear only as "NOT anonymous / NOT receipt-free / NOT coercion-resistant", which is a denial and not a claim, which is why `UT-0887` is negation-aware, and which the widening does not touch. **The second carve-out is gone, not narrowed.** Doc 03 **v2.14.0 §10.12.3** — the copy authority — ruled both the `anon` title "Anonymous" and the `anon` subtitle "Nothing you do here is linked to you" **NOT COMPLIANT in Definition-A (v1)** under FR-131 clause (e), so **there is nothing left to except**. **The two strings at `packages/ui/src/PrivacyStatus.tsx:251-252` are INSIDE this control's scope and FAILING it**, recorded as a **ruled, remediation-pending failure** tracked as **`OPEN-28`**, and they **MUST NOT** be recorded here or anywhere as an exception — **because an exception asserts compliance and a failure asserts work** (§0.5 S5 rule 4). **No build fails on this today, and none should be made to:** the `packages/ui` string scan this row specifies **is not implemented** — the guards that exist, `UT-0869`, `UT-0887`, `UT-0889` and `UT-0759`, are scoped to `apps/web` i18n strings and to the `ver` state — and the component is mounted on **no shipped surface**, so **no citizen sees either string**. When the scan is built, both strings MUST be in its scope with `OPEN-28` as the reference. **Why this row survived the v1.7.0 sweep, recorded rather than excused:** Doc 03 v2.14.0's Downstream instruction enumerated **five** sites carrying the carve-out when there are **six**, and this is the sixth — a **known** S5 site, last edited at **v1.5.0 for this very scan**, and the row that describes the control the withdrawal changes. Doc 03 **v2.14.1** corrects that enumeration to six and re-issues the instruction; this sweep answers it. See §0.5 S5 rule 4, §13 `OPEN-28`, and Doc 03 v2.14.1 §10.12.3 Downstream.)_ | Nadia Hassan | DES-085, DES-098, **FR-131(e)** |
| circom + snarkjs + **circomspect**, pinned and offline in CI | `circomspect` finding ≥ Warning fails the build | Rafael Duarte | ADR-005 |
| Headless browser driver with CPU throttling, 64 kbit/s network shaping and offline mode | `NFR-006`, `NFR-012` are *measured through it*; selection is Doc 06's | Nadia Hassan | ADR-012 |
| Offline-capable automated WCAG 2.2 rule engine, runnable in CI with no egress | `NFR-011`; automated coverage is partial, so it never replaces the manual pass | Nadia Hassan | ADR-012 §6 |
| Physical reference-device lab (2 GB / Android 9) + assistive-technology lab | RDP is authoritative over the CI proxy | Nadia Hassan | `CON-011` |
| Load rig for indexer/relayer | `NFR-008` | Chen Wei | ADR-014 |
| Cost model: gas → calldata → blob fee → USD, checked into the repo as data | `NFR-005` is *measured*, not asserted | Hiroshi Tanaka | ADR-001 |
| Data-inventory / PII denylist checker (build-failing) | `NFR-010`, US-0002 AC | Dr. Lena Kowalczyk | `CON-002` |
| Reproducible-build verification job | `NFR-021` | Rafael Duarte | ADR-012 §4 |

**Explicitly not used:** Foundry, Hardhat, Anvil, Ganache, or any RPC-dependent contract test runner.
The harness's docstring states the reason and it is a test-strategy decision, not a preference:
contract behaviour here is a civic guarantee, so the tests must run everywhere, offline,
byte-identically, on a fresh clone, with no external binary download. An auditor who cannot reproduce
our test results has no reason to believe them.

---

## 12. What we explicitly do NOT test — and the residual risk

Stated plainly, because a Gate-2 packet that lists only what we tested is misleading.

| Not tested | Why not | Residual risk we are accepting |
|---|---|---|
| **Real-world coercion at the device level** | Someone holding your phone and your finger can cast a vote. No test we can write changes that. ADR-002 says so; ADR-006 answers it at the voting layer with re-voting, not at the device layer | A coercer with continuous physical control over a citizen for the whole voting window defeats receipt-freeness. Mitigated by ≥ 72h windows and the panic gesture; **not eliminated**. `RISK-02` residual |
| **The social layer of attester and issuer honesty** | We can test that an attester's stake is slashable and its issuance volume is public. We cannot test whether a bank's local branch manager attests honestly, or whether three peer attesters are the same person's cousins | ADR-004 says it: *"we cannot prevent a citizen from lying to a weak attester; we can only make it expensive, visible and slashable."* `RISK-01`, `RISK-05` residual |
| **Jurisdictional legal outcomes** | Whether a regulator deems us an electoral body, whether pseudonymous-but-immutable records are "personal data" in jurisdiction J, whether anonymous political association is lawful — these are `TD-03`, `CON-005`, `A-03`. Legal review is an attestation, not a test | `NFR-015` is a legal *posture*, not a legal certainty. `RISK-14` residual |
| **Whether the requirements are the right requirements** | Testing proves conformance to Doc 02, never that Doc 02 describes a good democracy. `OI-01` (threshold %), `OI-08` (all the governance constants) are undecided numbers that testing cannot decide | A perfectly tested system with a badly calibrated threshold is a graveyard of petitions (kill criterion 4) or a swamp of noise |
| **Soundness of the proving system** | §7.4. No finite suite establishes it | Bounded by two independent audits per circuit and `CON-012`. A ceremony compromise is undetectable. `RISK-10` residual |
| **Formal verification of core invariants** | ADR-010 aspires to it; at v1 we express invariants as executable property tests instead | Property tests sample; proofs do not. We are claiming the weaker thing and saying so |
| **Third-party infrastructure we depend on** | Base/OP Stack consensus and its upgrade keys, IPFS/Arweave durability, Apple/Google keychain behaviour, attestor uptime | ADR-001 accepts the L2 upgrade-key risk for v1 and re-opens it at Phase 4. ADR-002 accepts vendor keychain centralisation |
| **Content quality of a party's eight pillars** | `FR-011`'s "minimum-substance standard" is implemented today as a 280-character floor. That is a length check, not a substance check — deliberately, because ADR-013 forbids the protocol from judging political content | A well-padded empty programme passes. `OI-09` is open and this is the honest current state — **OPEN-07** |
| **Whether an emergency disable is ever used well** | `FeatureFlags.disable` is the one unilateral power. We can pin its blast radius; we cannot test the judgement of the person holding it | `CON-003` says there should be no such power at all. See **OPEN-03** |
| **Off-chain censorship by gateway, DNS or app store** *as a capability-absence property* | We test that alternative paths exist (`TS-ADV-08`); we cannot assert absence of a capability that lives outside our code | `RISK-08` residual, accepted and disclosed |
| **_(v1.1.0)_ Whether the v1 operator reads the database** | v1's member ↔ party mapping and ballot direction live in an operator-controlled Postgres. No test we can write bounds what a person with a database credential can see. `TS-ADV-07`'s first two rows are false in v1 and the suite says so rather than running (§8) | The whole of `NFR-001`/`NFR-002`/`NFR-024`'s "even from the operator" half. Disclosed at Doc 02 H-01…H-14 and at the point of action by DES-098. **This is not mitigated; it is disclosed and deferred to Definition B.** `RISK-25`, `RISK-28` residual |
| **_(v1.1.0)_ Whether a user understood the honesty notice** | We can test that the notice is present, verbatim, non-dismissable, accessible and translated. Whether it *lands* is a comprehension question, answered by a V6 study with real users, not by CI | A notice that is present and not understood satisfies the letter of `FR-131` and defeats its purpose. Instrumented at §9 `NFR-022`; **no automated substitute exists** |
| **_(v1.1.0)_ Two-oracle agreement in v1** | `TS-DIFF` compares two independent implementations. v1 has one. A narrow differential against the audit contract covers only the values that contract stores | v1 governance arithmetic has no independent cross-check. The compensating controls are `packages/protocol`'s 100% branch coverage and the `TS-V1-BALLOT` precision suite against the SQL path — both weaker than L3, and stated as such. **OPEN-23** |

---

## 13. Open items — findings from writing this plan

These arose from testing the requirements and ADRs against each other and against the code that
exists. Each names the owner who must close it.

**Which items block which gate _(v1.1.0)_.**

- **Blocking a Definition-A (v1) Gate 2 (§0.9 item 20):** `OPEN-18`, `OPEN-19`, `OPEN-20`, `OPEN-21`,
  `OPEN-24`, `OPEN-25`, `OPEN-26`, and — as *disclosure* rather than *satisfaction* — `OPEN-01`.
- **Blocking a Definition-B (v2) Gate 2 (§10.2 item 17):** `OPEN-01` … `OPEN-06`, `OPEN-11`,
  `OPEN-23`, plus every item above that is still open at that time.
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
- **Not gate-blocking, but owed — re-cut again at v1.7.1.** The bullet above is retained;
  **`OPEN-30` is CLOSED** and leaves this list. The list in force is: `OPEN-07`, `OPEN-08`,
  `OPEN-09`, `OPEN-10`, `OPEN-12` … `OPEN-15`, `OPEN-22`, **`OPEN-28`**, **`OPEN-29`**.
  **`OPEN-28` and `OPEN-29` are unchanged in substance and posture** — neither is reopened, and
  `OPEN-28` still inherits `OPEN-27`'s gate posture verbatim.
- **Closed at v1.1.0:** `OPEN-16`, `OPEN-17`. **Closed at v1.7.0:** **`OPEN-27`** — closed **on a
  ruling, not on age**: Doc 03 v2.14.0 §10.12.3 delivered the fresh look the item demanded, and
  the work it created is carried forward as `OPEN-28` rather than left inside a closed item.
  **Closed at v1.7.1:** **`OPEN-30`** — closed **on a reconciliation, not on age**: its trigger
  ("the first touch of this document after Doc 07 v2.9.0 is Approved") **fired on 2026-09-20**
  when Doc 07 v2.9.0 was Approved, and §14 was re-read against Doc 07 v2.9.0 §2 in the same touch
  that advanced the pin, as §14's standing instruction requires. It created no successor item.

| ID | Finding | Impact | Owner |
|---|---|---|---|
| **OPEN-01** | `MACI_VOTING` defaults to **off in staging and production** and ADR-006 defers MACI to Phase 3, but `FR-031`, `FR-032` and `NFR-003` (receipt-freeness, silent re-vote) are **Must** in Doc 02 and are guardrails, not walking-skeleton items. Without MACI a vote is **not anonymous, not receipt-free and not coercion-resistant**, and the platform database **can** see vote direction and party membership — the flag's own description says exactly that, and `FR-131`/`DES-098` require the UI to say it before every ballot _(v1.3.0: this clause read "votes are anonymous but **not** receipt-free — the flag's own description says so", which was false on both counts and is the framing `FR-131` forbids; corrected per Doc 09 v1.3.0 `REL-LIM-18`. The finding itself is unchanged — it never depended on the premise)_ | A Must guardrail is not delivered at v1. `TS-ADV-02` cannot pass. **Gate-2 blocker unless Doc 02 or the roadmap changes** | Aisha Nkemdirim / Priya Raghunathan |
| **OPEN-02** | `FR-004` requires refusing issuance from an attestor whose share would exceed **50% in a region**. `PersonhoodRegistry` has a per-issuer *per-epoch count* cap and **no region dimension**; `RegionRegistry.issuanceCount` covers residency attesters, not personhood issuers | `FR-004` and half of `NFR-004` are untestable as written | Marcus Adeyemi |
| **OPEN-03** | `FeatureFlags.disable()` is unconditional and callable unilaterally by `emergencyDisabler`. Nothing prevents disabling a flag that governs an **open ballot** or blocks execution of an already-passed proposal. `NFR-020` requires exactly that prevention, and `CON-003` forbids any capability to halt a governance process | The one unilateral power in the protocol has an unbounded and untested blast radius | Rafael Duarte |
| **OPEN-04** | ADR-003's `Nᵢ = Poseidon(idHashᵢ, ISSUER_SCOPE)` is scoped **per issuer** under a 1-of-N acceptance model. One human holding two accepted credentials therefore enrols twice and votes twice. `FR-001`/`BR-006` require **at most one active credential per human** | The foundational "one person, one vote" property does not hold across issuers as recorded. `TS-ADV-01/A-01.3` | Principal Architect (Doc 03) |
| **OPEN-05** | `PersonhoodRegistry.spendNullifier(bytes32,uint256)` is `external` with **no caller restriction**. Any address can burn any nullifier for any scope, denying a citizen an action | Griefing / targeted disenfranchisement. `TS-ADV-01/A-01.5` | Principal Architect |
| **OPEN-06** | `issuerSetValid()` is a `view` that nothing enforces; `enrol()` never consults it. A region can fall to a single state issuer and keep enrolling, contradicting the ADR-003 protocol invariant | The stated invariant is advisory. `TS-ADV-05/A-05.3` | Marcus Adeyemi |
| **OPEN-07** | `FR-011`'s "published minimum-substance standard" is implemented as `MIN_PILLAR_CHARS = 280`. Testable, but it tests length, not substance (`OI-09` is open) | We can only claim what we measure. Doc 14 and the UI must not imply more | Tomás Ferreira |
| **OPEN-08** | `FR-002`'s "cannot determine better than chance" and `NFR-001`'s "no colluding subset short of the published collusion bound" are **not falsifiable by a finite suite** as written. `OI-10` (the collusion bound) is undecided | Needs restatement as a concrete adversary game: adversary capabilities, sample size, and a maximum advantage ε at a stated confidence. Until then `TS-ADV-06` reports a measurement without a pass line | Dr. Lena Kowalczyk |
| **OPEN-09** _(re-scoped v1.1.0)_ | **The document-ownership half is CLOSED.** CLAUDE.md assigns Doc 04 to the architect; Doc 03 v2.11.2 (Approved) names **Ravi Deshmukh** as Principal Architect, and the `Owner:` line and §22 Approvals row are corrected accordingly at v1.1.0 (review ISS-04). v1.0.x named Priya Raghunathan as "Principal Architect", which contradicted Doc 02 §2.7 (Product Owner, Docs 01/02/05). **What remains open:** the roster still names no QA Lead, while the Doc 04 template expects one; Doc 07/Doc 08 are owned by **Ji-woo Park — Test Lead**, which is the nearest standing role | Ownership of this document is settled. The QA-Lead-vs-Test-Lead role question is a roster question for the project-manager, not a test-strategy question. Confirm at Gate 2 | Ana-Maria Petrescu (project-manager) |
| **OPEN-10** | `OI-05` (`NFR-002` k ≥ 1,000 vs `BR-004` ward-level representation) is undecided. `resolveAnonymityScope` escalates publication to a parent region — but escalating a *ward election's* scope would change its electorate | `TS-ADV-06/A-06.10` has no pass line until `OI-05` is decided | Dr. Lena Kowalczyk |
| **OPEN-11** | `NFR-025` requires alternative inclusion **within 60 minutes**. ADR-001 states force-inclusion is typically **12–24 hours** and mitigates with ≥ 72h voting windows | The stated NFR cannot be met by the designed mechanism. Restate `NFR-025` or name a sub-60-minute path | Chen Wei |
| **OPEN-12** | `RegionRegistry.submitPopulation` is `onlyTimelock`, so all "independent" source values reach the median through a single authority. Source independence is not enforceable on-chain as designed | `FR-009`/`RISK-12` mitigation is weaker than it reads. `TS-ADV-12/A-12.6` | Yuki Sato |
| **OPEN-13** | `OI-10` (the published collusion bound) is unset, so `NFR-001`'s adversary model — and therefore its pass threshold — is unspecified | Blocks a definitive `NFR-001` verdict | Dr. Lena Kowalczyk |
| **OPEN-14** | `NFR-004`'s ≤ 0.1% duplicate rate cannot be measured internally: the system is designed so a nullifier cannot be linked to a person. Measurement requires a consented, out-of-band audited sample at the attestors | Report the instrument and its confidence interval; do not present it as a system measurement | Marcus Adeyemi |
| **OPEN-15** | `NFR-005`'s "median cost of a citizen governance action" has no enumerated denominator (which actions count, weighted how) | Define the action set before Gate 2 or the metric is unfalsifiable | Hiroshi Tanaka |
| **OPEN-16** — **CLOSED v1.1.0** | Both halves resolve on verified evidence (2026-08-31). (a) `docs/adr/` now holds **ADR-001 … ADR-025**, so the "only ADR-001…ADR-014 exist" premise is superseded — and a real `ADR-017-nullifier-derivation-and-adapters.md` exists, on an unrelated topic. (b) **The dangling citation is already gone:** a full-text search of `ADR-001-execution-layer.md` returns **no `ADR-017` reference at all**, and `ADR-002-accounts-and-keys.md` now reads "rate-limited per personhood nullifier (**ADR-014**)" — the correct home for the sponsorship policy. Doc 03 v2.11.2 records "OPEN-16 (stray ADR-017 references) resolved by engineer before this version" | No action outstanding. Closed on evidence, not on age | — (closed) |
| **OPEN-17** — **CLOSED v1.1.0** | Resolved on verified evidence (2026-08-31): `packages/contracts/package.json` and `vitest.config.mjs` exist; `packages/contracts/test/` holds `adversarial.test.mjs`, `differential.test.mjs`, `governance.test.mjs`, `lifecycle.test.mjs`, `deployment-safety.test.mjs` and `fixture.mjs`; `src/promotion-gate.mjs`, `script/compile.mjs` and `script/deploy.mjs` are present; root `package.json` `verify` = `lint:deps && compile:contracts && typecheck && test` across workspaces. Doc 06 v2.4.3 (Approved) §3 records **95 passing contract tests** of 610 total. `npm run verify` no longer skips contract tests | No action outstanding. §1.2, §3, §11.2 and §16 updated to match | — (closed) |
| **OPEN-18** _(new v1.1.0)_ | **The largest coverage gap in the plan, and it is not a testing omission.** `FR-074`…`FR-120` (47 Must) are covered by `TS-GOV2`'s 70 cases, of which **0 are automated and all 70 are Blocked or No mechanism**; 38 are *No mechanism* because `FR-074`…`FR-111` have **no `DES` assigned at all** (Doc 03 §16 deliberate phasing). Of `FR-121`…`FR-133` (13 Must), **seven have no suite anywhere** (`FR-121`, `125`, `126`, `127`, `128`, `129`, `133`; the bucketing rule and the 4 / 2 / 7 split are at §0.6). Of `RISK-22`…`RISK-32` (11), **three have only Blocked cases, one has a single unbuilt case, and seven have no case at all** — zero have passing evidence. §0.6 and §0.8 carry the item-by-item detail | A Gate-2 packet must state that **47 + 7 = 54 Must FRs and 11 RISKs have no passing evidence** — 47 with declared but unrunnable cases, 7 with no Definition-A suite at all. A suite that cannot run is coverage on paper. The unblocking sequence is design → build → test, in that order | Ravi Deshmukh (DES first), then Samuel Oyelaran (build), then Ji-woo Park (TC statuses) |
| **OPEN-19** _(new v1.1.0)_ | The **DES-097(b) Postgres backing of `IPartyStore` is unbuilt**; the v1 store is the in-memory implementation returning `IS_INSECURE_MOCK = true` (Doc 03 §10.13.12). Consequences: (a) `NFR-028`'s named controls — `INSERT`-only grant on `membership_event`, the `archived_at` `BEFORE UPDATE` refusal, projection-equals-replay — **cannot be asserted**, so v1's append-only claim is a claim about one writer; (b) the deployment-safety promotion gate correctly **blocks promotion past devnet**; (c) `NFR-027`'s repo-wide behavioural-event scanner does not exist and the two green tests bound only two surfaces | Blocks §0.9 items 4, 6 and 7 — three hard v1 Gate-2 conditions. **No waiver is sought and none should be granted:** the gate is behaving correctly | Samuel Oyelaran |
| **OPEN-20** _(new v1.1.0; scope narrowed v1.6.0)_ | **Now stands on the `TS-PROPOSALS` half alone.** At **Doc 07 v2.6.0** §2's suite table says `TS-PROPOSALS` = **TC-3542–TC-3563** (22 cases) while its own §5.6 heading still reads **TC-3542–TC-3561** — a live self-disagreement in the tester's document. _(v1.6.0, cycle-1 ISS-02: this item read "Doc 07 v2.4.4 disagrees with itself on **two** `TC` ranges: §2's suite table says `TS-PROPOSALS` = **TC-3542–TC-3563** and `TS-SCAFFOLD` = **TC-3470–TC-3488**, while §5.6's heading reads TC-3542–TC-3561 and §5.3's heading reads TC-3470–TC-3487". **The `TS-SCAFFOLD` half is RESOLVED at Doc 07 v2.5.0/v2.6.0** — §5.3's heading now reads "(TC-3470–TC-3488, TC-3568)", matching §2 — and is retained here as the record of what §14 was reserved against. The item is **annotated, not closed**.)_ | §14 here reserves the **§2** ranges, because those are the ones the suite table and the case counts agree on. If the headings are authoritative instead, §14 must be re-cut. Doc 07 is the tester's document; this is recorded, not fixed here. **Still a v1 Gate-2 blocker on the surviving half** — the §13 blocker bullet is unchanged | Ji-woo Park |
| **OPEN-21** _(new v1.1.0)_ | §1.3's "features not to be tested at v1" list is derived from **Doc 05 v1.0.0** §12 and Doc 05 is now at **v2.5.0 (Approved)** _(v1.4.0, cycle-1 ISS-05: this read "v2.3.0 (In Review)"; the staleness makes the finding **more** live, not less — the list is now five minor versions behind an **Approved** backlog)_. Separately, `FR-050` has since been raised from Should to **Must** (Doc 02 §11, BR-019) and must not be carried forward as a Should by inheritance | The no-story list must be re-derived at the next backlog version before it is used to justify an RTM row being non-Must | Priya Raghunathan |
| **OPEN-22** _(new v1.1.0)_ | Four related items that belong to the project-manager and product owner, not the architect. (a) **Definition B has no committed date** anywhere in Doc 02 — §16 defines it but §11 commits only to the 2027-06-01 v1 release. (b) §2.2's ~35/30/20/15 **effort re-weighting** was cut against 16 risks and is not re-derived across 27 here, because the budget is Doc 13's (`CON-007`; 18 people; USD 4.2M). (c) `TS-UPG` needs a **seam-swap rehearsal** (Definition A → B behind DES-095/DES-096) before any v2 release; it does not exist. (d) `NFR-018` (party export / exit) is a **Should** but is the only structural check on a v1 operator who holds everything else — §0.9 treats it as a Must for v1 and the formal re-prioritisation is owed. (e) `NFR-025`'s v1 question — can a single operator delay one citizen's action beyond 60 minutes? — is untested and has a worse answer in v1 than in v2 | None of the five is decidable by the architect. Band **membership** (which determines blocking behaviour) *is* decided, at §2.2 | Ana-Maria Petrescu (a, b, c); Priya Raghunathan (d); Chen Wei (e) |
| **OPEN-23** _(new v1.1.0)_ | **Definition A has no `TS-DIFF` analogue.** L3 is the highest-value level in the v2 plan because two independent implementations of the same rules can be compared. In v1 the rules run in `packages/protocol` and are consumed by one service; there is no second oracle. A narrow differential against the audit contract covers only the values that contract stores | **The single largest assurance difference between the two tracks, and it is not recoverable by effort.** The compensating controls are `packages/protocol` at 100% branch coverage and the `TS-V1-BALLOT` precision suite against the SQL `computeTally` path (§5.4, §0.4). Both are weaker than L3 and the Gate-2 packet must say so | Ravi Deshmukh |
| **OPEN-24** _(new v1.1.0)_ | Three absent surfaces, verified 2026-08-31: `tests/e2e/` **does not exist** and no headless driver is selected, so **level V5 has no home and no runner**; `apps/verifier/` **does not exist**, so `NFR-019`'s "every published metric reproducible by the verifier" has **no v1 instrument**; `services/relayer/` does not exist | V5 is a §0.9 precondition for the v1 journey evidence. `NFR-019`'s v1 form must be restated as reproducibility from the published audit-record data, or the NFR's instrument must be built | Ji-woo Park (E2E harness), Samuel Oyelaran (driver + verifier), Yuki Sato (`NFR-019` restatement) |
| **OPEN-25** _(new v1.1.0)_ | §6.1's **checked-in golden files do not exist**: there is no `.json` anywhere under `packages/contracts/test/`, so `test/absence/<Contract>.selectors.json` is unimplemented. The capability-absence *tests* do exist (`adversarial.test.mjs` performs selector and denylist scanning) but the control as specified — *"a human deliberately approved this new selector, and the diff is reviewable"* — is **not in force**; what is in force is an in-code assertion a reviewer must read the test to audit | §6.5 limit 2 already says the control is only as good as its review. Today there is nothing to review. Needed **before the `NF-02` audit freeze**, because the auditor's baseline is the snapshot | Samuel Oyelaran |
| **OPEN-26** _(new v1.1.0)_ | Two `UT-####` register defects, found while reconciling §14. (a) **Doc 04's own `UT` reservation had failed completely** — it reserved UT-1000–1999 for contracts, UT-2500–2999 for SDK and UT-3000–3499 for ui/web, while Doc 06 v2.4.3 §3 actually uses contracts UT-0100…UT-0612, indexer UT-0500…UT-0525, web UT-0700…UT-0886, ui UT-0750…UT-0758, SDK UT-0760…UT-0848. §14 is re-cut at v1.1.0 to record the **actual** allocation rather than a fiction. (b) **Doc 06 v2.4.3 §3 contains an ID overlap:** its table assigns `UT-0841..0857` to **web** (party-creation web flow) and `UT-0832..0848` to **sdk** (ProposalService) — `UT-0841`…`UT-0848` is claimed by both. CLAUDE.md's ID scheme says IDs are never reused | (a) is fixed here. (b) is Doc 06's to rule on — recorded, not fixed, because Doc 06 is the engineer's document. Until it is ruled on, an RTM row citing a `UT` in that band is ambiguous about which package it refers to | Samuel Oyelaran |
| **OPEN-27** — **CLOSED v1.7.0** _(new v1.5.0; lapse analysis completed v1.6.0; **closed on a ruling 2026-09-20**)_ | **CLOSED — the fresh look was taken and the copy authority ruled.** **Doc 03 v2.14.0 §10.12.3** re-examined the `anon` **title and subtitle** against FR-131 clause (e) and ruled **BOTH NOT COMPLIANT in Definition-A (v1)**. The v2.13.0 TITLE disposition and the 2026-08-25 subtitle no-change decision are **SUPERSEDED in place and retained verbatim**; Doc 03's new **clause 10** specifies the v1 variants — title **"Open tier"**, and a **context-selected** subtitle across clause 8's three contexts (browse / join / endorse) with a **fail-honest default** for an absent or unrecognised context — in the same normative form clauses 7 and 9 specify the `ver` copy. **Doc 03's reasoning, in one line each, cited and not re-argued here:** the subtitle is a **universal negative** rendered on two acts clause (e) names, and Doc 03 has conceded since v2.7.1 that it is not literally true in v1; the title's v2.13.0 basis — *"the distinction is the voter, not the word"* — is **still true** and fails only because the ban is **no longer voting-scoped**, FR-122/FR-123 being unamended. **A third finding, larger than this item, is recorded in Doc 03 and repeated here because it changes what is owed:** no single static `anon` subtitle can be honest across clause 8's three contexts, because petition **endorsement is public by design** (Doc 14 §2.2), so a "not made public" string is **false on screen 2.3** — a clause-(e) breach in the opposite direction to the one this item found. **`OPEN-27`'s own lapse analysis, below, is CORRECT and is NOT disturbed by the ruling:** none of Doc 03's four re-open triggers fired, and this plan never treated the carve-out as lapsed. **No trigger fired; the requirement changed** — whether a trigger *fired* and what clause (e) *requires* when read directly against the strings are different questions, and clause (e) supplies its own test. **What this item created, carried forward rather than buried in a closed row:** **`OPEN-28`** (implement clause 10 and satisfy its five-condition render trigger before first mount) and **`OPEN-29`** (Doc 03 clause 6's screen-3.6 wireframe copy, newly in clause-(e) scope, **named and routed, not ruled**). **Consequence for §0.5 S5, applied at every site in this version: the named `anon`-badge carve-out is WITHDRAWN, not narrowed**, and S5 rule 4 now counts **one** carve-out, not two. _(v1.6.0 body, retained verbatim per annotate-don't-delete:)_ **The `anon`-badge disposition that §0.5 S5's carve-out cites was reasoned against a voting-scoped FR-131, and FR-131 is no longer voting-scoped.** Doc 03 v2.13.0 §10.12.3 rules `STATE_CONFIG.anon.title` ("Anonymous") COMPLIANT in v1 on the basis that the badge renders only for open-tier users who cannot cast a binding vote, so it "is not describing that user's voting behaviour" but names a participation tier. Doc 02 **v2.17.0** FR-131 **clause (e)** (approver, 2026-09-06; carried unchanged into the Approved **v2.17.1**) extends the duty to **every v1 participation act**, expressly including **joining or belonging to a party** and **endorsing a petition** — two of the three contexts §10.12.3 **clause 8** itself names for the `anon` pill (screens 1.6 and 2.3). §10.12.3 separately **concedes** that the `anon` subtitle "Nothing you do here is linked to you" is **not literally true in v1**, and carries a standing condition that a subtitle variant MUST be considered if an honesty review establishes that a reasonable user does not read it as "publicly linked"; the 2026-09-06 ruling — which litigated exactly this claim class on the landing page — is such a review **of that copy, and it is why this item exists**. _(v1.6.0, cycle-1 ISS-04 — the sentence above engages the condition Doc 03 equates with **trigger (iv)**, so (iv) is disposed of here rather than left for a reader to draw the opposite conclusion from.)_ **No re-open trigger has fired. (iii)** is worded for an ***unconditional*** amendment and clause (e) is scoped, not unconditional. **(iv)** fires only where research or an honesty review "**shows**" open-tier members read the badge as a claim about how their vote is handled; the 2026-09-06 ruling examined landing-page copy and the FR-082 strings and took **no evidence about the badge**, so it raises the question without showing the reading. **(i)** and **(ii)** are untouched — the badge renders on no vote surface and FR-122/FR-123 are unamended. **The disposition has therefore NOT lapsed, and neither has S5's carve-out; this plan does not treat either as lapsed** | **Closed on a ruling, not on age.** The item asked for one thing — *"What is owed is a fresh look, not a lapse"* — and Doc 03 v2.14.0 delivered it, in the copy authority and not here, which is what the item was minted to secure. **Still not a shipped-copy defect:** `PrivacyStatus` is mounted on **no shipped surface** (six explicit non-render comments across five consuming files, re-verified by Doc 09 v1.9.0; Doc 06 v2.8.1 §7 item 18), so **no citizen sees either string**, and the `packages/ui` scan S5 specifies is **unimplemented** — **no build is failing and none should be made to fail**. The Gate-2 posture transfers unchanged to **`OPEN-28`**. _(v1.6.0 Impact cell, retained verbatim:)_ **Not a shipped-copy defect today:** `PrivacyStatus` has no authenticated host surface in `apps/web`, so no citizen currently sees the string; `packages/ui` is nevertheless inside S5's scan scope, and Doc 03 clause 8's own trigger is "before any screen rendering the `anon` pill in a non-vote context ships to production" — at which point this becomes a v1 Gate-2 blocker. **This is a copy ruling for the copy authority (Doc 03), not for this plan**: ruling it in the test plan would repeat the v2.7.0 mistake of a copy ruling living somewhere other than the copy authority. **What is owed is a fresh look, not a lapse**: the architect re-examines the `anon` title **and** subtitle against clause (e) at the next Doc 03 increment. Until then S5's carve-out stands, covering exactly the two `anon` strings and extended to nothing | Ravi Deshmukh (Doc 03 ruling — **DONE, v2.14.0**); Nadia Hassan (the S5 scan once ruled — **now `OPEN-28`**) |
| **OPEN-28** _(new v1.7.0 — the successor to `OPEN-27`; the work the ruling created)_ | **Doc 03 v2.14.0 §10.12.3 clause 10 is ruled but unbuilt, and one green test currently pins the non-compliant string.** `packages/ui/src/PrivacyStatus.tsx:251-252` still carries `title: 'Anonymous'` and `subtitle: 'Nothing you do here is linked to you'`, both now ruled **NOT COMPLIANT in v1**. Clause 10 requires: the v1 title **"Open tier"**; a subtitle selected by an **explicit** context input over the enumerated set browse / join / endorse (the same three contexts clause 8 enumerates); and a **fail-honest default** — *"Our own records can link what you do here to your account."* — whenever the context is absent, unrecognised or malformed, with an express prohibition on **inferring** context from route or referrer. Clause 10's **five-condition render trigger** must all hold before first mount: (i) clause 10 implemented; (ii) the host screen supplies a context from the enumerated set; (iii) clause 8's data-practices affordance exists on that surface (**still unbuilt**); (iv) a `UT-####` in the **UT-0759 four-path pattern** covers context absent / browse / join / endorse, asserting each exact string and that **no FR-131 banned word** appears in the rendered title, subtitle or `aria-label` — **note that `packages/ui/test/PrivacyStatus.test.tsx` today asserts `getByText('Anonymous')` and scopes its banned-word regex to the `ver` state, so a passing test pins the defect and that assertion changes with the constant**; (v) the `ar` mirrors have passed the **human native-speaker review** (Doc 06 v2.8.1 §7 item 17 `ARABIC-I18N`), clause (e) binding "in any language". **This plan mints no `TC` and no `UT` here** — those are the tester's and the engineer's, under the existing story `US-0134` (FR-131 · DES-098) or a new story the product-owner cuts | **Owed, not gate-blocking today** — inheriting `OPEN-27`'s posture verbatim: nothing renders, nothing ships wrong, no build fails. **Becomes a v1 Gate-2 blocker the moment any screen rendering the `anon` pill in a non-vote context is scheduled to ship**, per clause 8's own trigger now joined by clause 10's. **§0.5 S5 records these two strings as a ruled, remediation-pending FAILURE, never as an exception** | Samuel Oyelaran (build + `UT`); Ji-woo Park (`TC` and RTM rows); Nadia Hassan (the S5 scan once built) |
| **OPEN-29** _(new v1.7.0 — named and routed by Doc 03 v2.14.0; **NOT ruled**)_ | **One further clause-(e) site was inventoried while ruling `OPEN-27`, and it is named rather than half-done.** Doc 03 §10.12.3 **clause 6** quotes screen 3.6's one-way-door copy — *"What you've done as an anonymous supporter stays anonymous forever. It is never linked to your new public identity"* — as a normative consistency obligation on the component. That is a v1 public-facing claim about **supporting a party**, a clause-(e) participation act; it carries a banned word **twice** and an "is never linked to" construction of the same family as the subtitle just ruled on. **Doc 03 v2.14.0 expressly does NOT rule it**: it is outside `OPEN-27`'s scope, which named the two `PrivacyStatus` strings. **Two facts bound the urgency and are stated rather than assumed:** it is **wireframe copy quoted in Doc 03**, not a shipped string — `apps/web/src/i18n/en.ts` contains "anonymous" only in clause (a)'s mandated **negated** form, guarded by `UT-0887` — and **screen 3.6 is unbuilt**. **Naming a site is not ruling it**; this is the same "one more site inventoried" discipline by which Doc 06 v2.8.1 §7 item 26 surfaced the two strings `OPEN-27` closed on | **Not gate-blocking:** no shipped string, no built screen. It becomes live the moment screen 3.6 is scheduled, and it is registered now so it is not rediscovered as a surprise at that point — which is exactly what the `ver` title cost when it was not | Ravi Deshmukh (next Doc 03 increment, routed via the project-manager) |
| **OPEN-30** — **CLOSED v1.7.1** _(new v1.7.0 — the v1.6.0 cycle-2 carried Low ISS-08, converted to a tracked item with a trigger; trigger **FIRED 2026-09-20** and the item **closed on a reconciliation the same day**)_ | **CLOSED — the trigger fired and the reconciliation was done in the touch that advanced the pin, which is what this item and §14's standing instruction both asked for.** **Doc 07 reached v2.9.0 (Approved)** on 2026-09-20 — 07-test-cases-suites-v2.9.0-technical-cycle1.md, **PASS 97%** (0C/0H/0M/4L; reviewer-qa) — which is this item's trigger by name. v1.7.1 advances the Doc 07 **bibliographic** pin to v2.9.0 **and** advances §14's **reconciliation** pin with it, re-reading §14 against **Doc 07 v2.9.0 §2** in the same touch. **What the re-read found and recorded, id for id:** Doc 07 has drawn **TC-3570..TC-3576** (the `UT-0889` FR-131 / FR-132 honesty family, minted at v2.7.0 and v2.8.0) and **TC-3577..TC-3591** (fifteen cases, one per `it` of the `UT-0890` block, minted at v2.9.0) — **all into `TS-ADV-01…16`**, and **none into any of the six `TS-V1-*` suites the band is reserved for**, which is the same pattern this item was raised about. §14's `TS-ADV-01…16` row now reads **TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576, TC-3577–TC-3591** (69 cases / 49 automated / 20 Blocked, per Doc 07 v2.9.0 §2), and the `TS-V1-*` reservation is **narrowed from TC-3570–TC-3699 to TC-3592–TC-3699** — **22 ids drawn, 108 free, and none of the six suites has minted an id.** **Both operative halves of the original ISS-08 ask are discharged:** the ids are recorded where they actually live, and the free-band disclosure now **names the suite** drawing on the band (`TS-ADV-01…16`). The third half — re-wording "cannot see" to "declines to rely on an unreviewed version" — is **moot rather than skipped**: there is no longer an unreviewed version to decline, so the disclosure states a **verified** allocation against an **Approved** source. **The two echoes are re-cut with the rows** (§0.4's "reserved for them at §14" sentence and Downstream's reserved-band sentence), as the v1.6.0 remedy for this same register established; **`TS-ABSENCE` and `TS-SCAFFOLD` were re-read in the same pass and are unchanged.** **Why v1.7.1 did this and v1.7.0 did not, stated rather than left as an unexplained reversal:** v1.7.0's deferral reason was that Doc 07 was mid-rework, so a register reconciled that day would be stale before the session closed — **and that reason expired when Doc 07 closed its loop at Approved.** Doc 07 v2.9.0's own cycle-1 review independently raised the staleness as its **ISS-01 (Low)** and routed it to the architect *"now, while Doc 04 v1.7.1 is open"*. The cycle-1 reviewer of this document advised against attempting the reconciliation **in a Low-only rework**; this rework is not Low-only, and the project-manager's cycle-2 dispatch directs the discharge. _(v1.7.0 body, retained verbatim per annotate-don't-delete:)_ **§14's `TC`-range register is owed one reconciliation, and it is deferred on purpose rather than done badly.** The v1.6.0 cycle-2 review asked that, once the Doc 07 pin advances to an **Approved** version, §14 record **TC-3570–TC-3575** under `TS-ADV-01…16` (Doc 07 v2.7.0 §2 assigned them there — again **not** to any of the six `TS-V1-*` suites the band is reserved for) and re-narrow the `TS-V1-*` floor accordingly; and that the free-band disclosure **name the suite** drawing on it and re-word "cannot see" to "declines to rely on an unreviewed version". Doc 07 is now **v2.8.1 Approved** — but is being incremented to **v2.9.0 in this same session, minting from TC-3577**, so a register reconciled today is stale before the session closes. **v1.7.0 therefore does not touch §14 and does not advance §14's reconciliation pin, which stays at Doc 07 v2.6.0**; §14's standing re-read instruction is consequently **not tripped** by this touch, and the deferral is consistent with the instruction rather than an evasion of it | **Blocked nothing, and blocks nothing now.** A register-currency item, graded Low twice on the same ground: it changed no conclusion drawn from it. **Closed on a reconciliation, not on age.** **It mints no `TC` and re-statuses none** — it records ids the tester owns and narrows a reservation this document owns, which is why v1.7.1 remains a **patch** bump. **No successor item is created.** _(v1.7.0 Impact cell, retained verbatim:)_ **Blocks nothing.** A register-currency item, graded Low twice before on the same ground: it changes no conclusion drawn from it. **Trigger: the first touch of this document after Doc 07 v2.9.0 is Approved** — which the §14 standing instruction will itself force when the bibliographic and reconciliation pins are next brought together | Ravi Deshmukh (**DONE, v1.7.1**) |

---

## 14. Test groups / suites

Suites are created during Coding & UT (Doc 06) and become cases in Doc 07. `TC` ranges are **reserved
here** so numbering does not collide; the tester assigns the actual IDs.

| Suite ID | Group | Level | Covers | Reserved `TC` range | Owner |
|---|---|---|---|---|---|
| `TS-FUNC` | Functional / E2E | L0–L6 | positive paths for the active FR set (**131 active FRs, 114 Must** — Doc 02 v2.16.3 §11; the v1.0.x figure "61" was against the superseded SRS v1.0.0) | TC-0001–TC-0999 | Tester |
| `TS-EDGE` | Negative / edge | L0–L2 | SDD §11 failure modes; every custom error by name | TC-1000–TC-1199 | Engineer |
| `TS-DIFF` | **Differential** | L3 | `protocol` vs contracts; `NFR-021`; every governance rule | TC-1200–TC-1399 | Engineer + Tester |
| `TS-ZK` | Circuits (Z1–Z7) | L4 | `FR-001`–`FR-005`, `FR-030`–`FR-035`, `NFR-001`, `RISK-10` | TC-1400–TC-1599 | Rafael Duarte |
| `TS-ABSENCE` | **Capability-absence** | L1/L2 + artifact scan | `FR-021`, `FR-035`, `FR-047`, `FR-051`, `FR-056`, `NFR-017`, `CON-003`, `CON-006`, **`FR-131` closing sentence** | TC-1600–TC-1799 **and TC-3569** *(v1.6.0: the out-of-block **TC-3569** maps `UT-0888` (the `MACI_VOTING` flag description) and was minted at Doc 07 v2.5.0; Doc 07 v2.6.0 §2 and its §4.3 heading both read "TC-1600–TC-1614, TC-3569". Actual use is TC-1600–TC-1614, 16 cases)* | Rafael Duarte |
| `TS-ABI` | Contract / API | L1/L5 | ABI allowlist, indexer schema, SDK drift, public read interface | TC-1800–TC-1849 | Engineer |
| `TS-SEC` | Security (authZ, negative-authority, pen) | L1–L6 | `NFR-009`, `FR-056` | TC-1850–TC-1949 | Rafael Duarte |
| `TS-PRIV` | Privacy & data | L1–L6 | `NFR-001`, `NFR-002`, `NFR-010`, `NFR-024`, `FR-003` | TC-1950–TC-2049 | Dr. Lena Kowalczyk |
| `TS-DATA` | Data inventory (build-failing) | CI | `NFR-010`, `CON-002` | TC-2050–TC-2079 | Dr. Lena Kowalczyk |
| `TS-PERF` | Performance (RDP) | L6 | `NFR-006`, `NFR-012` | TC-2080–TC-2149 | Hiroshi Tanaka |
| `TS-LOAD` | Load / stress / soak / scalability | staging | `NFR-007`, `NFR-008` | TC-2150–TC-2199 | Chen Wei |
| `TS-COST` | Cost per action | testnet + prod | `NFR-005` | TC-2200–TC-2249 | Hiroshi Tanaka |
| `TS-A11Y` | Accessibility (automated + manual) | L5/L6/L7 | `NFR-011` | TC-2250–TC-2329 | Nadia Hassan |
| `TS-I18N` | Localisation | L5/L6 | `NFR-013`, `NFR-023` | TC-2330–TC-2379 | Nadia Hassan |
| `TS-COMPAT` | Compatibility matrix | L6 | `NFR-026` | TC-2380–TC-2419 | Nadia Hassan |
| `TS-RES` | Resilience / chaos | staging | `NFR-007`, `NFR-020`, `RISK-09` | TC-2420–TC-2479 | Chen Wei |
| `TS-EXIT` | Export / reconstitute (DR) | CI + devnet | `NFR-018`, `FR-055` | TC-2480–TC-2519 | Erik Lindqvist |
| `TS-UPG` | Upgrade / migration | testnet | `NFR-017`, `FR-007`, ADR-010 | TC-2520–TC-2559 | Rafael Duarte |
| `TS-SMOKE` | Post-deploy smoke | all envs | walking skeleton in < 5 min | TC-2560–TC-2579 | Tester |
| `TS-ADV-01` … `TS-ADV-16` | **Adversarial, one per RISK** (Definition-B set) | mixed | `RISK-01` … `RISK-16` (§8) | TC-2600–TC-2799 **and TC-3564–TC-3567, TC-3570–TC-3576, TC-3577–TC-3591** *(narrowed at v1.1.0 from TC-2600–TC-3199; Doc 07 v2.4.4 §2's actual high-water mark is TC-2752. **v1.6.0:** the four out-of-block ids **TC-3564–TC-3567** map `UT-0887` (the rendered, negation-aware FR-131(a) banner) and were minted at Doc 07 v2.5.0; Doc 07 v2.6.0 §2 and its §5 heading both read "TC-2600–TC-2752, TC-3564–TC-3567" — 47 cases)* *(v1.7.1, **`OPEN-30`** — re-read against **Doc 07 v2.9.0 §2 (Approved 2026-09-20)** in the same touch that advanced the Doc 07 pin, as §14's standing instruction requires. **Two further out-of-block groups have landed in this suite since v1.6.0, and neither went to a `TS-V1-*` suite.** **TC-3570–TC-3576** — the `UT-0889` FR-131 / FR-132 honesty family, minted at Doc 07 v2.7.0 (TC-3570..TC-3575) and v2.8.0 (TC-3576, the DES-085 jargon scan). **TC-3577–TC-3591** — fifteen cases mapping one `it` each of the `UT-0890` block, minted at Doc 07 **v2.9.0**. Doc 07 v2.9.0 §2 and its §5 heading both read "TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576, TC-3577–TC-3591" — **69 cases, 49 automated, 20 Blocked**. **This document mints no `TC` and re-statuses none:** it records ids the tester owns. The `TS-V1-*` reservation is narrowed to match, below.)* | per §8 |
| `TS-ADV-22` … `TS-ADV-32` | **Adversarial, one per RISK** (Definition-A set) | mixed | `RISK-22` … `RISK-32` (**§0.8**) | TC-2800–TC-3199 *(reserved at v1.1.0; none minted yet — OPEN-18)* | per §0.8 |
| `TS-EXPL` | Exploratory charters | L7 | one charter per epic `EP-01`…`EP-10` | TC-3200–TC-3249 | Tester |
| `TS-UAT` | User acceptance & usability | L7 | `NFR-022`, Doc 01 §B journey | TC-3250–TC-3299 | Grace Mbeki |
| `TS-CR1` | Change-request regression & new-FR | L0–L6 + regression | `FR-062`–`FR-073`, `RISK-22`–`RISK-24` | TC-3300–TC-3399 | Ji-woo Park (tester) |
| `TS-GOV2` | v2 governance catch-up | L0–L7 | `FR-074`–`FR-120`, `NFR-027`, `NFR-028`, `SC-15`–`SC-21` closure, Guarded Layer property tests | TC-3400–TC-3469 *(narrowed at v1.1.0 from TC-3400–TC-3499 to its actual use in Doc 07 v2.4.4 §2 — it never used TC-3470–TC-3499; 70 cases, all Blocked or No mechanism, OPEN-18)* | Ji-woo Park (tester) |
| `TS-SCAFFOLD` | **Definition-A** — scaffold seam & design-system seed | V1/V3 | `FR-082`–`086`, `FR-122`–`124`, `FR-131`/`132`, DES-093…096, DES-100, ADR-023…025 | TC-3470–TC-3488 **and TC-3568** *(reserved retroactively at v1.1.0 — in use in Doc 07 since v2.2.1; 19 cases, 16 automated, 3 Blocked. **v1.6.0:** the out-of-block **TC-3568** maps `UT-0759` (the backing-aware `ver` title, four paths) and was minted at Doc 07 v2.5.0; Doc 07 v2.6.0 §2 and its §5.3 heading both read "TC-3470–TC-3488, TC-3568" — 20 cases, 17 automated, 3 Blocked. **This agreement is why the `TS-SCAFFOLD` half of `OPEN-20` is closed**)* | Samuel Oyelaran |
| `TS-PARTY` | **Definition-A** — party creation: protocol, service & web | V0/V1/V3 | `FR-010`/`011`/`012`/`013`/`018`/`020`/`077`/`130`, `BR-020`, DES-073/074/097/101 | TC-3489–TC-3516 **and TC-3541** *(reserved retroactively at v1.1.0; the out-of-block TC-3541 is the FR-077 adversarial amendment case minted at Doc 07 v2.3.2 — 29 cases, 28 automated, 1 No mechanism)* | Ji-woo Park |
| `TS-MEMBERSHIP` | **Definition-A** — join / leave / membership history & counting | V1/V3 | `FR-020`/`022`/`064`/`122`/`123`/`130`/`131(b)(d)`, `NFR-023`, DES-013/065/095/097 | TC-3517–TC-3540 *(reserved retroactively at v1.1.0; 24 cases, 24 automated)* | Ji-woo Park |
| `TS-PROPOSALS` | **Definition-A** — proposals & debate: tiers, authorship, lifecycle, trail | V0/V1/V3 | `FR-024`/`079`/`080`/`090`/`091`/`092`, `FR-122`/`123`, `NFR-003`/`023`, DES-085/095/103…106 | TC-3542–TC-3563 *(reserved retroactively at v1.1.0 against Doc 07 §2; §5.6's heading disagrees — OPEN-20. 22 cases, 22 automated)* | Ji-woo Park |
| `TS-V1-BALLOT` · `TS-V1-NOTICE` · `TS-V1-ID` · `TS-V1-SPAM` · `TS-V1-AUDIT` · `TS-V1-ENROL` | **Definition-A** — the six unminted v1 suites (**§0.4**) | V1–V6 | `FR-121`/`125`/`126`/`128`/`129`/`131`/`132`/`133`, `FR-054`/`092`/`108`, DES-096/098/099/100, and the §6.4 negative-authority matrix in its conventional form | **TC-3592–TC-3699** *(v1.6.0, cycle-1 ISS-01: **narrowed from TC-3564–TC-3699**, which was reserved at v1.1.0 and annotated "none minted" — true of these six suites, false of the band, because Doc 07 v2.5.0 minted **TC-3564..TC-3569** into `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`. **None of these six suites has minted an id**; each is still blocked on unbuilt capability or on `CON-015`. **OPEN-18.** The floor of the free band is **TC-3570** and is itself being drawn on by **Doc 07 v2.7.0, in progress** for the clause-(e) rows — this register states the floor it can verify and does not pin an id it cannot see)* *(v1.7.1, **`OPEN-30`** — **narrowed again, from TC-3570–TC-3699 to TC-3592–TC-3699**, against **Doc 07 v2.9.0 §2 (Approved 2026-09-20)**, in the same touch that advanced the Doc 07 pin. The superseded floor is quoted above and is not deleted. **Twenty-two ids of the reserved band have been drawn, and every one went to `TS-ADV-01…16`, not to a `TS-V1-*` suite:** **TC-3570..TC-3576** (`UT-0889`; Doc 07 v2.7.0 and v2.8.0) and **TC-3577..TC-3591** (`UT-0890`, fifteen cases; Doc 07 v2.9.0). **108 of the band's ids remain free — TC-3592–TC-3699 — and none of these six suites has minted an id**; each is still blocked on unbuilt capability or on `CON-015`, and **OPEN-18** is unchanged. **The suite drawing on the band is now named, which is what the v1.6.0 cycle-2 Low asked for**, and the v1.6.0 "does not pin an id it cannot see" caveat is **discharged rather than repeated**: Doc 07 v2.9.0 is **Approved**, so this register now states a **verified** allocation against a settled source instead of a floor it declined to rely on. **This document mints no `TC` and re-statuses none.**)* | per §0.4 |

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

> **_(v1.7.1 — the standing instruction above is OBSERVED, and this note records how, because an
> instruction honoured silently is indistinguishable from one forgotten.)_** v1.7.1 advances the
> Doc 07 **bibliographic** pin **v2.8.1 → v2.9.0 (Approved**, PASS 97%, 0C/0H/0M/4L, reviewer-qa,
> 2026-09-20**)** and re-reads **this table against Doc 07 v2.9.0 §2 in the same touch**. **Two rows
> moved:** `TS-ADV-01…16` gains **TC-3570–TC-3576** (`UT-0889`) and **TC-3577–TC-3591** (`UT-0890`,
> fifteen cases) — 69 cases / 49 automated / 20 Blocked — and the six `TS-V1-*` suites' reservation
> is narrowed **TC-3570–TC-3699 → TC-3592–TC-3699**. **Two rows were re-read and did not move:**
> `TS-ABSENCE` (TC-1600–TC-1614, TC-3569) and `TS-SCAFFOLD` (TC-3470–TC-3488, TC-3568) agree with
> Doc 07 v2.9.0 §2 exactly. **This closes `OPEN-30`** (the v1.6.0 cycle-2 carried Low ISS-08),
> whose trigger — *"the first touch of this document after Doc 07 v2.9.0 is Approved"* — **fired on
> 2026-09-20**. **This is the register's third reconciliation and the first that was not a
> correction of fiction:** v1.1.0 fixed a `UT`/`TC` reservation that described an intention rather
> than reality (`OPEN-26`(a), a **High**), v1.6.0 fixed a band the table had already lost (cycle-1
> ISS-01, a **Medium**), and v1.7.1 records a drawdown **in the same session it happened** — which
> is what the standing instruction was written to produce. **The remedy is unchanged and still
> standing: record the ACTUAL allocation, not the intended one, in the touch that moves the pin.**

**`UT-####` allocation (engineer, Doc 06) — re-cut at v1.1.0.** The v1.0.x reservation
(UT-1000–1999 contracts · UT-2500–2999 SDK · UT-3000–3499 ui/web · UT-3500–3999 services) **failed
in practice exactly as the `TC` table did**: none of those bands is in use. This table records the
**actual** allocation from Doc 06 v2.4.3 §3, verified 2026-08-31, so the reservation describes
reality rather than an intention.

| Band | Package | In use at Doc 06 v2.4.3 | Headroom |
|---|---|---|---|
| UT-0001–UT-0099 | `packages/protocol` | UT-0001…UT-0055 (82 tests), UT-0060…UT-0086 (44), UT-0087…UT-0095 (24) — **150 total** | UT-0096–UT-0099 |
| UT-0100–UT-0499 | `packages/contracts` | UT-0100…0125 (25), UT-0200…0230 (11), UT-0300…0361 + `SEC-*` (34), UT-0400…0420 (12) | the gaps between blocks |
| UT-0500–UT-0599 | `services/indexer` | UT-0500…UT-0525 (16) | UT-0526–UT-0599 |
| UT-0600–UT-0699 | `packages/contracts` (deployment promotion gate) | UT-0600…UT-0612 (13) — **contracts total 95** | UT-0613–UT-0699 |
| UT-0700–UT-0749 | `apps/web` (safety surfaces) | UT-0700…UT-0742 (16) | UT-0743–UT-0749 |
| UT-0750–UT-0759 | `packages/ui` | UT-0750…UT-0758 (14) | UT-0759 |
| UT-0760–UT-0849 | `packages/sdk` | UT-0760…0779 (36), UT-0780…0818 + UT-0831 (38), UT-0819…0830 (22), UT-0832…0848 (24) — **sdk total 244 incl. 124 core** | UT-0849 |
| UT-0850–UT-0899 | `apps/web` (feature flows) | UT-0841…0857, UT-0858…0870, UT-0871, UT-0872…0884, UT-0885…0886 | UT-0887–UT-0899 |
| **UT-0900–UT-1499** | **reserved — next `apps/web` / `packages/sdk` increments** | — | full band |
| **UT-1500–UT-1999** | **reserved — `packages/circuits`** (unwritten; the workspace does not exist) | — | full band |
| **UT-2000–UT-2499** | **reserved — `tests/e2e`** (does not exist — OPEN-24) | — | full band |
| **UT-2500–UT-2999** | **reserved — `services/relayer`, `apps/verifier`** (neither exists) | — | full band |

> **Two register defects recorded here, not fixed here — OPEN-26.** (a) The old reservation was
> fiction and is replaced above. (b) **Doc 06 v2.4.3 §3 assigns `UT-0841..0857` to `apps/web` and
> `UT-0832..0848` to `packages/sdk`** — `UT-0841`…`UT-0848` is claimed by both, and CLAUDE.md's ID
> scheme says an ID is never reused. Until the engineer rules, an RTM row citing a `UT` in that band
> is ambiguous about which package it refers to. Owner: Samuel Oyelaran.

---

## 15. Roles & responsibilities (RACI)

| Activity | Arch | Eng | Test | QA | SRE | PO | PM |
|---|---|---|---|---|---|---|---|
| This test strategy (Doc 04) | **A/R** | C | C | C | C | C | I |
| Unit tests `UT-####`, `TS-DIFF`, `TS-ABSENCE` | C | **A/R** | C | C | I | I | I |
| Test cases `TC-####` (Doc 07) | C | C | **A/R** | C | I | C | I |
| RTM (Doc 08) authorship | I | C | **R** | **A** | I | I | C |
| Adversarial suites `TS-ADV-*` | C | C | R | **A** | C | I | I |
| Red team `NF-03`, audits `NF-01`/`NF-02` | C | C | C | **A** | I | I | R |
| Performance / cost measurement | C | R | C | I | **A** | I | I |
| Accessibility (automated + manual) | C | R | **A/R** | C | I | C | I |
| Release readiness (Gate 2 packet) | I | C | R | **A** | C | **A** | R |
| Merge sign-off | I | R | C | **A** | I | I | I |
| Environment provisioning | C | C | C | I | **A/R** | I | I |

The engineer **never merges their own work**; reviewer-qa signs the merge. The tester writes only
Docs 07/08 and test artifacts. reviewer-qa writes nothing and verifies everything.

---

## 16. Schedule & milestones

Anchored to `CON-007` and **Doc 02 v2.16.3 §11 "Release shape"**: Gate 1 target **2026-08-22**
(passed), **Gate-2 readiness 2027-05-14**, launch **2027-06-01**, staged 1 → 10 → 50 → 100% in the
one approved pilot jurisdiction. _(v1.1.0 — corrected per review ISS-07; v1.0.x carried
2027-02-15 / 2027-03-01 against a superseded plan.)_

**Definition-A (v1) track — this is the critical path to 2027-06-01.**

| Milestone | Target | Exit signal |
|---|---|---|
| Repo structure + unit-test standard built (Doc 06) | **2026-08-29 — done** | `npm run verify` green across workspaces including a real `packages/contracts` workspace, 95 tests (**`OPEN-17` closed**) |
| `DES` produced for `FR-074`…`FR-111` (Doc 03) | 2026-10-30 | `TS-GOV2`'s 38 *No mechanism* cases become testable (**OPEN-18**) |
| `TS-ABSENCE` golden files checked in | 2026-10-30 | `test/absence/<Contract>.selectors.json` reviewable; the §6.1 control is in force (**OPEN-25**) |
| DES-097(b) Postgres store built; V2 store-contract suite green | 2026-11-27 | `IS_INSECURE_MOCK()` false across the wired graph; `NFR-028`'s store controls in force; promotion past devnet unblocked (**OPEN-19**) |
| v1 ballot layer + DES-098 notice at SCR-13/SCR-14; `TS-V1-BALLOT` and `TS-V1-NOTICE` minted and green | 2027-01-15 | `TC-3481` unblocked; §0.5 S4/S5 forbidden-vocabulary scans clean; the §5.4 precision suite runs against the SQL path |
| **`CON-015` legal opinion obtained** (Phase-1 jurisdiction, all eight government-ID questions) | 2027-01-29 | **Critical path** — `TS-V1-ID` cannot be scoped without it (§0.9 item 16) |
| ID-check + spam layers built; `TS-V1-ID`, `TS-V1-SPAM`, `TS-V1-ENROL`, `TS-V1-AUDIT` green | 2027-02-26 | `FR-121`/`125`/`126`/`128`/`129`/`132`/`133` have passing evidence (**OPEN-18**) |
| `tests/e2e` + V5 driver selected; the v1 journey runs end to end | 2027-03-12 | V5 green on staging (**OPEN-24**) |
| `TS-ADV-22`…`TS-ADV-32` executed once, verdicts recorded | 2027-03-26 | Band A (`22`, `23`, `25`, `28`) and Band B (`24`, `27`, `30`, `31`) green |
| `NF-01` privacy + `NF-02` security audits start (**v1 scope**) | 2027-04-02 | Auditors have a frozen commit and a reproducible build; the packet states that v1 scope excludes ZK circuits and the ceremony |
| RDP performance + accessibility on the release candidate, including the honesty notice | 2027-04-16 | `NFR-006`, `NFR-011`, `NFR-012` green; V6 notice-comprehension study reported |
| Rollback drill + censorship simulation (`NF-06`, `NF-07`) | 2027-04-30 | < 15 min rollback proven; ≥ 2 access paths verified against the v1 hosting topology |
| **Gate-2 packet assembled against §0.9** | 2027-05-07 | Every §0.9 item evidenced; Doc 02 §16.4 honesty register (`H-01`…`H-19`) reproduced **in full**; every v1-relevant `OPEN-##` closed or accepted in writing |
| **Gate-2 readiness** | **2027-05-14** | RTM zero gaps in the IN-v1 Must rows; PARTIAL and DEFERRED-v2 rows recorded as *deferred with disclosure*; audits zero critical/high |
| **Launch, staged 1 → 10 → 50 → 100%** | **2027-06-01** | `TS-SMOKE` green at each stage; SLOs within budget |

**Definition-B (v2) track — does not gate the 2027-06-01 release, and carries no committed date.**

| Milestone | Target | Exit signal |
|---|---|---|
| Circuit toolchain in CI with `circomspect` gating | **no committed date** (**OPEN-22**) | `claims.json` mechanism enforcing Z2 coverage |
| `TS-DIFF` full rule-pair coverage incl. the 2⁵³ precision suite | **no committed date** | Zero divergences on the release commit |
| `TS-ADV-01`…`TS-ADV-16` Band A/B executed once | **no committed date** | Verdicts recorded; `OPEN-01`…`OPEN-06`, `OPEN-11` resolved or escalated |
| Two independent audits per circuit (ADR-005) | **no committed date** | Zero critical/high open |
| `TS-UPG` seam-swap rehearsal (Definition A → B behind DES-095/DES-096) | **no committed date** (**OPEN-22**) | A v1 party migrates to the v2 backing with identical membership, history and tallies |
| **Definition-B Gate 2 against §10.2** | **no committed date** | Doc 02 §11 commits only to the v1 release; the v2 date is Ana-Maria Petrescu's to set (**OPEN-22**) |

Per `CON-007`, **scope absorbs overrun, not the date**. If a Band A or Band B suite is not green, the
correct lever is deferring a v1 capability — the v1.0.x "walking-skeleton capability" framing
(Doc 02 §11, `OI-02`) is superseded by the Definition-A/B split and the two mean the same thing — and
never deferring a guardrail suite, and never re-labelling a Definition-B requirement as met.

---

## 17. Defect management

| Severity | Definition | SLA (triage → fix) |
|---|---|---|
| **Sev-1** | A guardrail is breached, or a citizen could be misinformed about a governance outcome. Includes: **any** `TS-DIFF` divergence; any `TS-ABSENCE` failure; any privacy linkage; any Z3 under-constraint finding; any capability that can alter or halt a published or in-flight governance process | 1h → 24h; blocks merge and blocks the pipeline |
| **Sev-2** | A Must FR/NFR fails, without a guardrail breach | 4h → 3 days; blocks the release |
| **Sev-3** | A Should requirement fails, or a Must requirement degrades | 1 day → next release |
| **Sev-4** | Cosmetic, or a Could requirement | best effort |

**Guardrail escalation rule.** Any defect against a guardrail FR (Doc 02 §11's 22) or a
capability-absence assertion is **automatically Sev-1 regardless of estimated user impact**. The
reason is `TD-04`: there is no override, so there is no way to fix the consequence afterwards.

Every defect links to (a) the failing `TC-####`, (b) the requirement `FR/NFR`, (c) the `RISK` if any,
and (d) the `US-####`. A defect with no requirement link is a requirements gap and routes to the
product owner, not to the engineer.

---

## 18. Metrics & reporting

| Metric | Target | Why this one |
|---|---|---|
| **`TS-DIFF` divergences** | **0** | The single most predictive signal of a citizen being misinformed |
| Must-row RTM completeness | 100% at Gate 2 | Gate-2 condition |
| `claims.json` negative-test coverage (circuits) | 100% | Replaces line coverage where line coverage lies |
| `TS-ABSENCE` assertion count, and unreviewed snapshot diffs | monotonically rising; 0 unreviewed | Guardrails should accumulate, never shrink |
| Branch coverage — `packages/protocol` and immutable core | 100% | §10.5 |
| Seeded-defect drill catch rate | ≥ 90% quarterly | Measures assertion quality, not execution |
| Flake rate per suite (rolling 200 runs) | < 0.5%; **0 at L0–L3** | L0–L3 are deterministic; a flake there is a defect |
| Escape rate (defects found after the gate that a suite should have caught) | < 5% | Measures the plan, not the code |
| Cost per citizen action (median, p99) | < USD 0.01 / < USD 0.05 | `NFR-005`, measured on testnet then production |
| p95 TTI and action-ack on the physical RDP | ≤ 5s / ≤ 5s | `NFR-006`, RDP is authoritative |
| Anonymity-set floor violations | 0 | `NFR-002`; computed per published action including the `(root, region, epoch)` form |
| Adversarial suite execution recency | every Band A/B suite run within 7 days | An attack suite that has not run recently is documentation |
| MTTR for Sev-1 | < 24h | Guardrail breach dwell time |
| **_(v1.1.0)_ Seam-honesty assertion count, and property fields asserted `false`** | monotonically rising; **0 fields flipped to `true` without a backing swap** | §0.5 S1. The day a v1 build reports `onePersonOneVote: true` is the day it starts lying. A drop in this count is a Sev-1 signal, not a refactor |
| **_(v1.1.0)_ `IS_INSECURE_MOCK()` true-count across the wired production graph** | **0 before any promotion past devnet** | §0.5 S3. This is a single number that answers "is the thing we are about to ship honest about what it checks?" |
| **_(v1.1.0)_ Must rows with declared cases but no passing evidence** | falling every sprint; **0 at Gate 2 for IN-v1 Musts** | OPEN-18. Today this is 47 + 7 = 54 FRs and 11 RISKs. Reporting *cases declared* without this denominator is how coverage-on-paper is mistaken for coverage |

Reported into the project-manager's `STATUS-DAILY` / `STATUS-WBR` (CLAUDE.md), sourced only from real
artifacts and cited; anything not yet produced is marked `N/A — not yet produced`, never estimated.

---

## 19. Risks to the test effort & contingencies

| Risk to testing | Contingency |
|---|---|
| The physical reference-device lab is not procured in time | CI proxy profile becomes the interim gate, **and the Gate-2 packet must state that `NFR-006`/`NFR-012` were verified on a proxy, not on the RDP.** No silent substitution |
| Circuit toolchain lands late, so `TS-ZK` compresses | Do **not** compress Z2/Z3. Compress Z1 instead — positive tests are the least informative class. If Z2/Z3 cannot be completed, `NFR-009` cannot pass |
| External audits (`NF-01`, `NF-02`) slip | They are Gate-2 exit criteria with no substitute. Scope absorbs the delay (`CON-007`), the gate does not move first |
| `TS-DIFF` becomes a maintenance burden as rules change | This is the intended cost of ADR-011. Reducing it is a scope decision, not a test decision, and requires an ADR |
| The `OPEN-##` list is not closed before Gate 2 | Each open item is presented individually to the Gate-2 approver for explicit written acceptance. None may be closed by silence |
| Test data discipline erodes under deadline pressure | The three CI scanners (§10.7 item 5) are build-failing and have no bypass. Removing them requires an ADR |
| **_(v1.1.0)_ A v1 suite is presented as evidence for a Definition-B requirement** | The failure mode this whole track exists to prevent, and it is a *reporting* failure rather than a testing one. Controls: §0.1 rules 1–5; the requirement that §0.9 (not §10.2) governs a v1 packet; §0.9 item 21 (the honesty register reproduced in full, signed against); and the §8 track notes that say, per suite, which release a verdict belongs to. If a Gate-2 packet ever shows a green `TS-ADV-07` or `TS-ADV-16` for a v1 release without the accompanying paragraph, the control has failed |
| **_(v1.1.0)_ Pressure to waive the `IS_INSECURE_MOCK` promotion gate to hit 2027-06-01** | The gate is currently **blocking correctly** — the in-memory store returns `true` (OPEN-19). The temptation at 2027-04 will be to waive it "just for staging". §0.9 item 4 makes it a hard gate with no waiver, and `CON-007` says scope absorbs overrun, not the date. The correct lever is deferring a v1 capability, never shipping on a store that declares itself insecure |

---

## 20. Deliverables

1. This plan (`docs/04-test-strategy-master-plan.md`).
2. Test cases — `docs/07-test-cases.md`, `TC-####` (tester).
3. Automated suites in-repo, per §14.
4. Golden files: ABI allowlist snapshots, storage-layout snapshots, constraint-count snapshots,
   `TS-DIFF` regression corpora, `claims.json` per circuit.
5. Execution reports per environment per release candidate.
6. Adversarial suite verdict reports, one per `RISK-01`…`RISK-16` **and, for the Definition-A track,
   one per `RISK-22`…`RISK-32` (§0.8)**.
6a. _(v1.1.0)_ **Seam-honesty evidence pack (§0.5 S1–S6):** the property-honesty assertions, the
   stub/composite/honest triple per seam component, the `IS_INSECURE_MOCK` graph report, the
   verbatim DES-098 copy assertions, the forbidden-vocabulary scan output, and the
   `verifyEligibility()` call-site census.
6b. _(v1.1.0)_ **The Doc 02 §16.4 honesty register (`H-01`…`H-19`), reproduced in full** in the v1
   Gate-2 packet, signed against by the approver (§0.9 item 21).
7. External audit reports: `NF-01` (privacy), `NF-02` (security & cryptography), circuit audits.
8. RDP performance report, accessibility report (automated + manual), cost report.
9. RTM view — `docs/08-rtm.md` (tester authors, reviewer-qa verifies).
10. Gate-2 release-readiness summary against §10.2, including the `OPEN-##` disposition.

---

## 21. Traceability

Every `TC-####` traces to a Doc 02 requirement, a Doc 03 `DES-###`, a Doc 05 `US-####`, and — where
adversarial — a `RISK-##`. The RTM (Doc 08) is the system of record; **a gap in any Must row blocks
Gate 2.**

**Coverage assertion at v1.1.0 of this plan, against the Approved SRS v2.16.3.** _(The v1.0.x
assertion was made "at v1.0.0" against SRS v1.0.0 — 61 FR / 26 NFR / 16 RISK / 12 CON — and is
superseded per review ISS-01. This assertion distinguishes **a suite exists** from **passing evidence
exists**, because conflating the two is how coverage-on-paper reaches a gate.)_

- **All 131 active FRs have a named suite.** `FR-001`…`FR-061` by `TS-FUNC` + `TS-EDGE` and, where
  the FR is a guardrail, additionally by `TS-ABSENCE` and/or a `TS-ADV-*` suite; `FR-062`…`FR-073` by
  `TS-CR1`; `FR-074`…`FR-120` by `TS-GOV2`; `FR-121`…`FR-133` by the Definition-A suites mapped
  item-by-item at **§0.6**. `FR-046` and `FR-062` are superseded and excluded.
  **Honest qualifier — this is a suite assertion, not an evidence assertion.** `TS-GOV2`'s 70 cases
  are **all Blocked or No mechanism** and **seven** of `FR-121`…`FR-133` have **no Definition-A suite
  at all** — `FR-127`'s only named suite, `TS-CR1`, is Definition-B and wholly Blocked (§0.6). See
  **OPEN-18**; §0.6 carries the detail.
- **All 28 NFRs have a verification method, instrument, environment, threshold and owner (§9)** —
  extended at v1.1.0 from `NFR-001`…`NFR-026` to include **`NFR-027`** (no per-user behavioural
  telemetry) and **`NFR-028`** (append-only data lifecycle), both Must, both IN-v1, both previously
  absent. The six NFRs whose verification differs between tracks are enumerated at **§0.7**, each
  carrying its Doc 02 §16.4 `H-##` row.
- **All 27 requirement-level RISKs have exactly one dedicated adversarial suite**, each with a named
  owner and a quantitative pass criterion: `RISK-01`…`RISK-16` at **§8**, `RISK-22`…`RISK-32` at
  **§0.8**, with band assignments for both sets at §2.2. `RISK-17`…`RISK-21` live in Doc 13 §6 and
  are the project-manager's register, not this plan's.
  **Honest qualifier:** **zero of the eleven new suites have passing evidence today** — three have
  only Blocked cases, one has a single unbuilt case, seven have no case anywhere. **OPEN-18.**
- **All 15 CONs** are covered: `CON-001` → `TS-ADV-14`; `CON-002` → §10.7 + `TS-DATA`; `CON-003` →
  `TS-ABSENCE` + `TS-ADV-16` (**and its honest v1 answer at the §8 `TS-ADV-16` track note**);
  `CON-004` → `TS-ADV-16/A-16.6`; `CON-005` → `TS-ADV-14/A-14.3`; `CON-006` → `TS-ADV-03/A-03.2`;
  `CON-007` → §16; `CON-008` → `TS-DATA`; `CON-009` → `TS-ADV-12`; `CON-010` → `TS-ADV-08`;
  `CON-011` → `TS-PERF` (RDP); `CON-012` → `TS-ZK` §7.4 + `NF-02`; **_(v1.1.0)_ `CON-013` → §0.5 S4
  and the `NFR-023` jargon scan; `CON-014` → `TS-ADV-14/A-14.2` (the platform-vs-legal boundary on
  every surface, `FR-075`); `CON-015` → `TS-V1-ID` scope plus §0.9 item 16, which makes the legal
  opinion a Gate-2 critical-path line item rather than a test.**
- `DES-###` links: **Doc 03 is now Approved at v2.11.2** _(v1.1.0 — the v1.0.x "pending Doc 03" is
  superseded)_. This plan references directly: `DES-036` (region quorum-freeze), `DES-041`
  (force-inclusion fallback in the SDK), `DES-052` (client refuses an unregistered `zkeyHash`),
  `DES-063` (panic re-vote), and — for the Definition-A track — **`DES-093`** (design tokens),
  **`DES-094`** (privacy-status component), **`DES-095`** (`IEligibilityVerifier` seam),
  **`DES-096`** (`IBallotService` seam), **`DES-097`** and **`DES-097(b)`** (v1 stack and the
  `IPartyStore` → Postgres wiring), **`DES-098`** (honesty notice), **`DES-099`** (spam-resistance
  layer), **`DES-100`** (ID-document verification and retention), **`DES-101`** (non-violence clause
  gate), **`DES-102`** (provisional-party cap) and **`DES-103`…`DES-106`** (proposals & debate). The
  tester reconciles the complete `DES` mapping in Doc 08. **`FR-074`…`FR-111` have no `DES` at all**
  (Doc 03 §16 deliberate phasing) and therefore cannot be traced down — **OPEN-18**.
- **Declared coverage gaps** (inherited from Doc 05 §12, not hidden): `FR-005`, `FR-049`, `FR-050`,
  `FR-052`, `FR-053` have no story and therefore no `TC`. All are Should/Could. The tester MUST
  record them as **open non-Must RTM rows**.

---

## 22. Approvals

| Role | Name | Decision | Date | Notes |
|---|---|---|---|---|
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-20 | **v1.7.1, Status: In Review — rework cycle 2 of 5** against `artifacts/reviews/04-test-strategy-master-plan-v1.7.0-technical-cycle1.md` (**FAIL 94%; 0C / 0H / 1 Medium / 2 Low**; neutral reviewer: **tester**, Ji-woo Park, PM-assigned before dispatch). **The v1.7.0 row below is retained verbatim as the record of that submission and is not edited.** **PATCH bump: no normative rule changes.** The withdrawal, S5 rule 4's count of ONE, S4's unchanged count, the `OPEN-27` closure, `OPEN-28` / `OPEN-29`, the pin sweep, the retained lapse analysis and the mechanical scan instruction are all carried forward **unchanged** — *"Nothing else needs reworking"* — and **the ruling remains Doc 03's, cited and not reasoned here**. **ISS-01 (Medium) FIXED — §11.2's tooling-register row, the sixth carve-out site and the eighth site overall.** The live row for the build-failing S5 denylist control still read *"Two carve-outs only: clause (a)'s mandated negated forms, and the named `anon`-badge exception"* — a current row in a current section, contradicting **S5 rule 4** ("ONE carve-out, and only one") on a count and recording as an **exception** precisely what rule 4 says MUST NOT be one, *because an exception asserts compliance and a failure asserts work*. Swept in the same annotate-don't-delete form as the other five sites; the two `PrivacyStatus` `anon` strings are recorded as a **ruled, remediation-pending FAILURE** tracked as **`OPEN-28`**. **The "every site" claim is corrected: there are SIX sites**, not five — §0.5 S5's exception, S5 rule 4's count, S4's scope-before-count sentence, §1.4's roll-call, §13's `OPEN-27` row, and **§11.2's tooling-register row**. The omission was **upstream**: Doc 03 v2.14.0's Downstream instruction enumerated five, which was its own cycle-1 **ISS-02 (Medium)**; **Doc 03 v2.14.1 corrected the instruction first**, and this version then swept the site — the instruction, then the site, in that order. **ISS-03 (Low) TAKEN** — the bump rationale is restated with the qualification it lacked: what v1.7.0 withdrew was **a carve-out to a specified-but-unimplemented build-failing control**; the `packages/ui` scan is **not implemented** and `PrivacyStatus` is mounted on **no shipped surface**, so **no build fails and no citizen sees either string**. **ISS-02 (Low) TAKEN — and `OPEN-30` is CLOSED rather than merely annotated.** **Doc 07 reached v2.9.0 (Approved)** on 2026-09-20 (PASS 97%, 0C/0H/0M/4L, reviewer-qa), which **fires `OPEN-30`'s trigger by name**. v1.7.1 advances the Doc 07 **bibliographic** pin **and** §14's **reconciliation** pin together, re-reading §14 against **Doc 07 v2.9.0 §2 in the same touch**, exactly as §14's standing instruction requires. **§14 re-cut:** `TS-ADV-01…16` = **TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576, TC-3577–TC-3591** (69 / 49 automated / 20 Blocked); the six `TS-V1-*` suites' reservation narrowed **TC-3570–TC-3699 → TC-3592–TC-3699** (**22** ids drawn, all into `TS-ADV-01…16`; **108** free; **none of the six suites has minted an id**). `TS-ABSENCE` and `TS-SCAFFOLD` were re-read in the same pass and are **unchanged**. The **two echoes** (§0.4, Downstream) are re-cut with the rows. **This is a register correction, not a normative change** — it mints no `TC`, re-statuses none, records ids the tester owns and narrows a reservation this document owns — **which is why the bump stays a patch**. **Why this version did the reconciliation when the cycle-1 report advised against attempting it:** the report's advice was scoped to a **Low-only** rework and this rework carries a Medium; v1.7.0's stated deferral reason (Doc 07 mid-rework) **expired** when Doc 07 closed its loop at Approved; Doc 07 v2.9.0's own review raised the staleness as its ISS-01 and routed it to the architect *"now, while Doc 04 v1.7.1 is open"*; and the project-manager's cycle-2 dispatch directs the discharge. **Pins:** Doc 07 → **v2.9.0 (Approved)**; **Doc 08 → v2.12.1 (In Review)**, last Approved v2.11.3, **mid-rework in the tester's hands, not read as settled, and nothing here depends on its content or comments on it**; Doc 03 → **v2.14.1 (In Review)**, the matching half of this rework; Doc 02 v2.17.3, Doc 05 v2.5.0, Doc 06 v2.8.1, Doc 09 v1.9.0 unchanged. **No `TC`, `UT`, `US` or `OPEN-##` is minted, renumbered or reused; no test status is upgraded; no product code is written or edited.** **Not re-opened:** `OPEN-20`, `OPEN-28`, `OPEN-29`, §13's Definition-A blocker bullet, S5's four rules and the claims test, S4's (a)–(d) range, and the clause-(e) substance. **No Low is carried forward.** _(The v1.7.0 row immediately below is the record of the v1.7.0 submission, retained verbatim.)_ |
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-20 | **v1.7.0, Status: In Review.** Debt-closure increment (session record: artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md, row 3); neutral reviewer assigned by the project-manager **before dispatch**: **tester** (Ji-woo Park). Cycle 1 of a fresh loop; the v1.6.0 lineage closed PASS at 96%. **`OPEN-27` is CLOSED, on a ruling and not on age.** Doc 03 **v2.14.0 §10.12.3** — the copy authority — re-examined the DES-094 `anon` **title and subtitle** against **FR-131 clause (e)** (Doc 02 **v2.17.3** §4.45; §8 Scenarios 8 and 9) and ruled **both NOT COMPLIANT in Definition-A (v1)**, superseding the v2.13.0 TITLE disposition and the 2026-08-25 subtitle decision in place and specifying the v1 variants at its new **clause 10** (title "Open tier"; a **context-selected** subtitle over clause 8's three contexts; a **fail-honest default**). **This plan cites the ruling and does not make one** — the division `OPEN-27` was minted to protect, and which the v1.6.0 reviewer called "the strongest judgement in the version". **Consequence, applied at every site rather than only where the item is registered: §0.5 S5's named `anon`-badge carve-out is WITHDRAWN, not narrowed**, and **S5 rule 4 now counts ONE carve-out, not two** (clause (a)'s mandated negated forms; `UT-0887` unaffected). Sites taken: S5's carve-out blockquote (superseding banner **and** its "Until Doc 03 rules" tail), S5 rule 4, **S4's** scope-before-count sentence, §1.4's status roll-call, §13's gate-blocking bullets, §13's `OPEN-27` row, the `Source:` block's Doc 03 pin, and this row. **The two strings are recorded as a ruled, remediation-pending FAILURE (`OPEN-28`), never as an exception**, and **no build fails today**: the `packages/ui` scan S5 specifies is unimplemented and `PrivacyStatus` is mounted on **no shipped surface** (six non-render comments across five consuming files, re-verified by Doc 09 v1.9.0; Doc 06 v2.8.1 §7 item 18), so **no citizen sees either string** — a **pre-mount** posture, the opposite of the `ver` title, which shipped and had to be caught in code by Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`. **Three successors minted, none renumbered or reused:** **`OPEN-28`** (implement clause 10 and satisfy its five-condition render trigger before first mount — noting that a green `getByText('Anonymous')` assertion in `packages/ui/test/PrivacyStatus.test.tsx` currently pins the non-compliant string); **`OPEN-29`** (Doc 03 clause 6's screen-3.6 wireframe copy — newly in clause-(e) scope, **named and routed, NOT ruled**, and not a shipped string); **`OPEN-30`** (the deferred §14 reconciliation). **The three v1.6.0 carried Lows taken explicitly: ISS-07 FIXED** (Doc 06 re-pinned v2.7.0 In Review → **v2.8.1 Approved** at both live locations; the third location the report named is now a retained historical record); **ISS-09 DISCHARGED by supersession**; **ISS-08 DEFERRED with a named trigger, an owner and an id** (`OPEN-30`, due after Doc 07 v2.9.0 is Approved) because §14 cannot honestly be reconciled against a Doc 07 mid-rework in this same session. **Pins swept to HEAD before submission, with currency stated honestly:** Doc 02 **v2.17.3**, Doc 03 **v2.14.0 In Review** (last Approved v2.13.0), Doc 05 v2.5.0, Doc 06 **v2.8.1**, Doc 07 **v2.8.1** and Doc 08 **v2.11.3** — the last two **Approved at HEAD and being incremented in this same session**, cited as such, with no statement here depending on their in-flight content — and Doc 09 v1.9.0. **§14 is untouched and its reconciliation pin is deliberately not advanced**, so its standing re-read instruction is not tripped. **No `TC`, `UT` or `US` is minted, renumbered or reused; no test status is upgraded; no product code is written or edited.** **Not re-opened:** `OPEN-20` and §13's Definition-A blocker bullet; and the clause-(e) substance the v1.6.0 review instructed must not be re-opened. _(Row history: **v1.6.0** was submitted 2026-09-06 and **Approved at PASS 96%** (0C/0H/0M/3L; reviewer: reviewer-qa, neutral, PM-assigned) with three Lows carried — ISS-07, ISS-08, ISS-09 — all three taken above. Its own row text, retained verbatim:)_ **v1.6.0, Status: In Review.** Rework **cycle 2 of 5** against the v1.5.0 technical review (FAIL 92%; 0 Critical / 0 High / 1 Medium / 5 Low; reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned). All six findings taken on this touch, none carried: **ISS-01 (Medium)** — §14's `TC`-range reservation register reconciled against **Doc 07 v2.6.0 §2** (TC-3564–TC-3567 → `TS-ADV-01…16`, TC-3568 → `TS-SCAFFOLD`, TC-3569 → `TS-ABSENCE`; the `TS-V1-*` reservation narrowed to **TC-3570–TC-3699**), with its three echoes at §0.4, the v1.1.0 changelog entry and Downstream; **ISS-02** — `OPEN-20` narrowed to the surviving `TS-PROPOSALS` half and deliberately left **open** and gate-blocking; **ISS-03** — `UT-0889` re-stated as **landed and green** (25/25, executed by the cycle-1 reviewer on 2026-09-06; registered in Doc 06 at v2.6.0, unchanged at **v2.7.0 In Review**) at all three mentions; **ISS-04** — Doc 03's re-open trigger **(iv)** disposed of by name in both §0.5 S5 and `OPEN-27`, completing the not-lapsed conclusion; **ISS-05** — S4's carve-out count scoped before it is stated; **ISS-06** — §1.4 re-wrapped. **Pins swept to HEAD before submission** rather than left for the next reviewer to catch: **Doc 02 → v2.17.1 (Approved)**, clause (e) unchanged plus its §8 Scenarios 8 and 9; **Doc 06 → v2.7.0 (In Review)**, last Approved v2.5.1; Doc 07 v2.6.0 and Doc 08 v2.9.0 Approved. **No `TC`, `UT`, `US` or `OPEN-##` is minted, renumbered or reused; no test status is upgraded.** The clause-(e) substance is **not re-opened**, per the review's routing instruction. _(Row history: **v1.5.0** was submitted 2026-09-06 and **FAILed cycle 1 at 92%** on one Medium — the `TC`-register drift this version closes. It was not a rework cycle but a **requirement cascade**: FR-131 **clause (e)** was ruled in by the approver on 2026-09-06 and applied as Doc 02 v2.17.0, so the question §0.5 S4 routed to the product-owner at v1.4.0 is answered and S4/S5 are re-cut to the amended closing sentence. The notice-clause range stays **(a)–(d)**; clause (e) is scanned at S5 and guarded by **UT-0889 (Doc 06 v2.6.0)** and **UT-0869**, not by a fifth notice assertion. The S5 `anon`-badge carve-out is annotated and the copy question it raises is routed to Doc 03 as **OPEN-27** rather than ruled here. **All three v1.4.0 Lows discharged** (ISS-C2-01, ISS-C2-02, ISS-C2-03) with two further stale pins swept; none carried. `TC` re-cut owed from the tester at Doc 07 v2.7.0 / Doc 08 v2.10.0. **v1.4.0** was submitted 2026-09-06 and Approved at PASS 96% (0C/0H/0M/3L) — rework cycle 1 against the v1.3.0 technical review (FAIL 89%; 0C/0H/2M/6L): §0.5 S4's clause range corrected to (a)–(d) and annotated with the PO routing; the S4/S5 correctness over-claim withdrawn from the Status block and annotated in the v1.3.0 changelog entry; all six Lows taken rather than carried. **v1.3.0** was submitted 2026-09-06 — the FR-131 cascade that corrected `A-02.6` and `OPEN-01` off the retired "votes are anonymous but not receipt-free" framing and closed `ISS-10`; cycle 1 verified both corrections and they are not re-opened. **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which v1.3.0 closed; keeping this row current at every version is the standing discipline that Low bought. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
| reviewer-qa (independent) | _pending_ | | | Testability of all Must rows; the `OPEN-##` list |
| Engineering | _pending_ | | | §11.2 required-tooling ownership; `OPEN-17` |
| SRE | _pending_ | | | Environments §11.1; `NF-06`, `NF-07` |
| Product Owner | _pending_ | | | `OPEN-01` (receipt-freeness at v1), `OPEN-02`, `OPEN-04` |
| Security | _pending_ | | | §7 ZK doctrine, §8 adversarial suites, §6 absence limits |

---

### Downstream

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
page, and the Arabic mirror). It is **landed and green** — 25/25 pass, executed independently by the
cycle-1 reviewer on 2026-09-06 — and is **registered in Doc 06, minted at v2.6.0 and unchanged at
v2.7.0 (In Review)**. _(v1.6.0, cycle-1
ISS-03: this read "It is cited here as **owed-and-in-progress, not green** — the engineer
mints it in the same 2026-09-06 session, and this plan upgrades no status on a test it has not seen
pass." Accurate when written, an under-claim once the guard landed. The rule it states is unchanged
and is satisfied here by a named, dated, independently executed run.)_ The owed re-cut is still the
tester's: clause-(e) rows at **Doc 07 v2.7.0** and **Doc 08 v2.10.0**,
under the existing story **US-0134** (FR-131 · DES-098) — the 2026-09-06 decision record mints no
new `US`, and this plan mints no `TC`. FR-131's Doc 08 Must row stays **OPEN** until that re-cut
closes it.

_(v1.1.0.)_ What Doc 06 and Doc 07 still owe this plan: the harness `storageLayout` extension that
§6.3 depends on; the `TS-ABSENCE` golden files that §6.1 specifies and that do not exist
(**OPEN-25**); the DES-097(b) Postgres backing without which `NFR-028`'s named controls cannot be
asserted and the promotion gate cannot pass (**OPEN-19**); the `tests/e2e` harness and driver that
level V5 needs (**OPEN-24**); and `TC` mints for the six Definition-A suites reserved at
**TC-3570–TC-3699** and the eleven adversarial suites reserved at TC-2800–TC-3199 (**OPEN-18**).
_(v1.6.0, cycle-1 ISS-01: this read "reserved at TC-3564–TC-3699"; Doc 07 v2.5.0 minted
TC-3564..TC-3569 into `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`, so the free band begins at
TC-3570 — see §14.)_
_(v1.7.1, `OPEN-30`: **the band is now `TC-3592–TC-3699`.** Re-read against **Doc 07 v2.9.0 §2
(Approved 2026-09-20)** in the same touch that advanced the Doc 07 pin. Doc 07 has since drawn
**TC-3570..TC-3576** (`UT-0889`) and **TC-3577..TC-3591** (`UT-0890`, fifteen cases) — **all into
`TS-ADV-01…16`, none into a `TS-V1-*` suite** — so the free floor moves from TC-3570 to
**TC-3592**, leaving **108** ids. The sentence above is superseded on its band only; **`OPEN-18`
and the eleven adversarial suites reserved at TC-2800–TC-3199 are unchanged**. See §14.)_

**Two documents carry an item back from this rework.** Doc 07 v2.4.4's §2-vs-§5.3/§5.6 range
disagreement is **OPEN-20** (Ji-woo Park) — _(v1.6.0, cycle-1 ISS-02: **the §5.3 / `TS-SCAFFOLD`
half is resolved at Doc 07 v2.6.0**; `OPEN-20` now stands on the §5.6 / `TS-PROPOSALS` half alone
and remains open and gate-blocking on it)_. Doc 06 v2.4.3 §3's `UT-0841`…`UT-0848` overlap between
`apps/web` and `packages/sdk` is **OPEN-26** (Samuel Oyelaran). Neither is fixed here — each is the
owning role's to rule on.
