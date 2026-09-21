# Requirements Traceability Matrix (RTM) — Trumocracy

```
Document ID:   RTM-TRUMOCRACY
Version:       2.16.0
Status:        Approved — 08-traceability-matrix-v2.16.0-technical-cycle4.md (PASS 98%, 0C/0H/0M/2L; reviewer: reviewer-qa; two Lows carried, non-blocking, to fold at the next touch: ISS-C4-01 one header-fence line (the v2.16.0 Status record's OP-3 site) lost its 15-space continuation indent; ISS-C4-02 the v2.16.0 spec tail's self-check published a grep count of 1 where the true value is 2 (both quotations inside corrections)). Previously: In Review — v2.16.0 (2026-09-21). **Rework cycle 4 of 5 — two cycles remain** — against
               `artifacts/reviews/08-traceability-matrix-v2.15.0-technical-cycle3.md` (**FAIL 96%,
               0C/0H/1M/2L**; reviewer: **reviewer-qa**, Rafael Duarte — neutral, PM-assigned and recorded
               before dispatch). **All three issues taken.** **MINOR bump per the house rule.**
               **NO RULING, STATUS, MARKER OR COUNT MOVES.** **138 Must · 19 COMPLETE · 119 OPEN**, both
               hook signals agreeing; non-Must **5 / 18**; total **24 / 137**; `G-PHASE3` **40** ·
               `G-NOMECH` **19** · `G-TRACE` **32**; by-reason **120**, distinct **119**; stories
               **23 of 142**; test cases **528 / 275 / 253**. The reviewer **signs all three closures**
               (FR-036, FR-037, FR-085) and verified ISS-C2-01 and ISS-C2-03/04 FIXED.
               **Every site changed at this version — 4 sites, 5 operations, and these are they:**
               **(1)** the header — `Version` and this `Status` block [ops 1–2]; **(2)** the **v2.15.0
               Status record** — its own six-site enumeration added and its scope absolute corrected
               [op 3]; **(3)** the `Source:` block's **Doc 07 pin** — In Review → **Approved** [op 4];
               **(4)** the **v2.14.0 Changelog's ISS-01 sweep** — the device replaced [op 5]. **Sites and
               operations are published as two figures because they are two things**, and conflating them
               is how Doc 07 v2.11.0's Medium happened.
               **ISS-C3-01 (Medium) — THE SWEEP WAS SELF-REFERENTIAL, AND THAT IS A PROPERTY OF THE DEVICE,
               NOT AN ERROR IN THE NUMBER.** v2.15.0 said "Run against **this file** it returns **14 lines
               and 21 occurrences**". Against the published v2.15.0 document the command returns
               **22 lines / 38 occurrences** — the extra lines are **the correction's own text**, because
               the classification has to quote the very strings it is counting. **Writing the claim changed
               what the claim measured.** Class (a) was also published as 11 occurrences where its five
               lines carry **12**, so the classes summed to 20 against a total asserted as 21 twice.
               **THE FIX IS THE DEVICE.** The falsifiable claim is now anchored to a **FIXED REFERENCE that
               writing cannot alter** — the **v2.14.0 text**, reconstructible from `HEAD` `12fe4a6` plus the
               applied v2.13.0 and v2.14.0 specs, or from the PM's backup — against which the command
               returns **14 lines / 21 occurrences**, now with **(a) 5 lines / 12 occurrences**, so the four
               classes sum to exactly 21. **I reconstructed that text by reverse-applying the v2.15.0 spec
               to the live file and re-ran the command: 14 lines, 21 occurrences, the fourteen line numbers
               identical to the reviewer's.** The live figure is published too, but **as an observation and
               not as the claim**, in a sentence carrying **none of the three search strings** — so
               publishing it does not change it. **And the standing invariant, which is what actually
               matters and is stable under any amount of quotation, is stated as the claim: every
               occurrence, in any version, is a quotation, a dated record, a transition's *from* side, or
               the FR-132 false positive — ZERO are live stale figures.**
               **The general lesson, recorded because this lineage has now produced it three times:
               a sweep published INSIDE the corpus it sweeps cannot make a live count falsifiable.** The
               count is only stable against a frozen reference, or behind an exclusion the sweep itself
               defines. Everything else must be stated as an invariant, not as a total.
               **ISS-C3-02 (Low) — v2.15.0 published no site enumeration and stated its scope absolutely.**
               Both corrected **in the v2.15.0 record itself**: its six sites are now listed, and
               "Nothing in this version touches a row, a marker, a figure or a ruling" — stated while
               **OP 7 edited FR-037's Decision cell** — is narrowed to what is true. Nobody was misled
               (the edit is explained two paragraphs later and it **adds** a citation), but an absolute a
               reader can falsify by diff is the same class as a count they can falsify by grep.
               **ISS-C3-03 (Low) — the Doc 07 pin read "v2.12.0 (In Review)".** **Doc 07 v2.12.0 is
               APPROVED** — `07-test-cases-suites-v2.12.0-technical-cycle3.md`, **PASS 97%, 0C/0H/0M** —
               so the cycle-2 qualification that this matrix pinned an In-Review sibling is **spent in the
               right direction: the source is stronger than when the closures were signed, not weaker.**
               Folded.
               _(v2.15.0 record, retained — the version this one supersedes:)_ In Review — v2.15.0 (2026-09-21). **Rework cycle 3 of 5** against
               `artifacts/reviews/08-traceability-matrix-v2.14.0-technical-cycle2.md` (**FAIL 94%,
               0C/0H/2M/2L**; reviewer: **reviewer-qa**, Rafael Duarte — neutral, PM-assigned and recorded
               before dispatch). **All four issues taken.** **MINOR bump per the house rule.**
               **NO RULING, STATUS OR COUNT MOVES. 138 Must · 19 COMPLETE · 119 OPEN**, both hook signals
               agreeing; non-Must **5 / 18**; total **24 / 137**; `G-PHASE3` **40** · `G-NOMECH` **19** ·
               `G-TRACE` **32**; by-reason **120**, distinct **119**; stories **23 of 142**; test cases
               **528 / 275 / 253**. The reviewer verified both cycle-2 Highs FIXED with an independent
               marker counter, accepts **rule 4a**, and records that **FR-036 is now defensible at merge**
and that all three closures would be signed. **Nothing in this version changes a row's marker,
               status, gap code, evidence ids or ruling, and no figure moves** _(v2.16.0, **ISS-C3-02**:
               this read "**Nothing in this version touches a row, a marker, a figure or a ruling**" —
               stated more absolutely than was true, because **OP 7 edited the FR-037 row's Decision
               cell** to reconcile rule 4a's two limbs. That edit **adds** a citation (`UT-0904` /
               `TC-3614`) and changes no marker, status, gap code or ruling, and it is explained two
               paragraphs below — so no reader was misled — but **an absolute a reader can falsify by
               diff is the same defect class as a count they can falsify by grep**, and this lineage has
               produced enough of both.)_ **Every site changed at v2.15.0 — 6 sites, 7 operations, and
               these are they** _(v2.16.0, ISS-C3-02: v2.15.0 published **no** site enumeration at all,
               dropping the one device that retires the N+1th-site defect class; the cycle-3 reviewer had
               to establish the scope by diff, and confirmed all six)_**:** **(1)** the header —
               `Version` and the `Status` block; **(2)** the **v2.14.0 Status record's** ISS-05 claim;
               **(3)** the **v2.14.0 Changelog's** ISS-05 claim; **(4)** the `Source:` block's
               **`TC-TRUMOCRACY (` pin** — the parenthesis closed for real and Doc 07 re-pinned;
               **(5)** the **v2.14.0 Changelog's ISS-01 sweep** — re-published with its command;
               **(6)** **§3.1's FR-037 row** — rule 4a's limbs reconciled.
               **Both Mediums are the same defect in two places: a statement this document makes ABOUT ITS
               OWN FIX that does not hold.** That is the defect class v2.14.0 existed to retire, and it
               survived inside the two devices v2.14.0 offered as proof.
               **ISS-C2-01 (Medium) — the parenthesis was not closed, and three places said it was.**
               Cycle-1 ISS-05 was raised on a `Source:` pin that ended mid-word with its sentence, italic
               and `TC-TRUMOCRACY (` group unclosed. v2.14.0 restored the tail and advanced the pin — and
               **left the group open**. Counted character by character on the live file: the pin line runs
               **7 open parens to 5 close**, one excess being the deliberate backticked literal that names
               the group and **the other being the group itself**, opened at `TC-TRUMOCRACY v2.10.0 (` and
               never closed. Its two siblings balance **12/12** and **3/3** and each ends `) ·`. Meanwhile
               the annotation said "Restored and closed", the Status said "restored", and the Changelog said
               "restored, **closed**, and advanced". **The document named the exact group it had failed to
               close and then asserted it had closed it.** Closed for real here — the pin now ends `) ·`
               like its siblings — and **all three claims are corrected rather than left standing**.
               **ISS-C2-02 (Medium) — the falsifiable enumeration did not reproduce under its own grep.**
               v2.14.0 published "A grep for the stale trio returns **15 hits** — 3 LIVE, 12 HISTORICAL"
               and named lines. **It is not 15 under any convention.** The cause is now diagnosed rather
               than patched: **the sweep conflated the grep's HIT LIST with the list of SITES CORRECTED.**
               Those are different sets. **Two of the three "LIVE" sites match none of the three strings** —
               the pre-v2.0.0 subtotal read "12 complete · 42 open" and the non-Must subtotal "4 complete ·
               19 open", neither of which contains `16 complete`, `98 open` or `122 open` — and the
               historical line cited as a hit ("122 **Must rows stay** open") matches none either. **Those
               three sites were found by DERIVING the subtotals from the row markers, not by the grep**, and
               saying so is the whole correction. **And the sweep missed a genuine hit — the N+1th site,
               inside the sweep whose purpose was to prove there is no N+1th site:** §9's tester sign-off
               row carries "_(Prior v2.12.3: Submitted — **122 open** Must rows…)_". **It is enumerated
               now, and classified: a dated prior-version record, correctly not rewritten.** The sweep is
               re-published with **the exact command**, its **true output run against this file**
               (**14 lines / 21 occurrences**, each classified), and the separate marker-derivation that
               actually found the three subtotals. **The finding is unchanged and is now checkable: ZERO
               live stale figures remain.**
               **The two Lows.** **ISS-C2-03:** rule 4a's limb (i) named three **SDK** `UT`s "at that site"
               while limb (ii) enumerated **five files**, two of them outside the SDK — so a reader
               auditing one limb against the other found two files unaccounted for. Limb (i) now also names
               **`UT-0904` (`TC-3614`)** as the **web-surface** absence test, and limb (ii) now states that
               **of the five files only `packages/sdk/src/candidates.js` holds the datum at rest**: the
               component holds the caller's own input, `page.tsx` a demo fixture, and the two i18n files
               label copy. **ISS-C2-04:** the v2.14.0 spec's tail predicted **0** hits for a phrase whose
               true count is **2** (both self-quoting). Harmless in the document — nothing counts prose —
               but **the spec is the transcription contract, and a PM ticking off a wrong expected figure is
               a check that silently passes.** Recorded, and **every figure in this version's spec tail was
               run before it was written.**
               _(v2.14.0 record, retained — the version this one supersedes:)_ In Review — v2.14.0 (2026-09-21). **Rework cycle 2 of 5** against
               `artifacts/reviews/08-traceability-matrix-v2.13.0-technical-cycle1.md` (**FAIL 87%,
               0C/2H/3M/3L**; reviewer: **reviewer-qa**, Rafael Duarte — neutral, PM-assigned and recorded
               before dispatch). **All eight issues taken. Nothing carried.** **MINOR bump per the house
               rule** — a Medium-or-worse FAIL takes at least a MINOR — **not** the v2.13.1 the report
               offered as an alternative, because ISS-02 changes a **closed Must row's cited evidence set**
               and that is not a patch-shaped change even when no status moves.
               **NO RULING CHANGES AND NO COUNT MOVES. 138 Must · 19 COMPLETE · 119 OPEN, both hook
               signals agreeing, exactly as at v2.13.0.** Every fix here is a statement this document made
               that was not true of itself.
               **ISS-01 (High) — the recurring defect class recurred three times, in the document that
               names it.** Three **live** subtotal lines were never moved: §3.1's pre-v2.0.0 block
               (**12 complete · 42 open → 14 · 40**), §3.1's all-114 line (**16 · 98 → 19 · 95**, whose
               reconciliation published **the gate criterion figure itself** as "= 122 open of 138" and now
               reads **95 + 24 = 119**), and §3.3's non-Must line (**4 · 19 → 5 · 18**). None of the 43
               v2.13.0 OPs touched them: **an authoring omission in my spec, not transcription residue**, and
               the middle line is a **known repeat** — its own annotation records being left stale "through
               four drops that closed rows". **The sweep is now stated as a falsifiable enumeration rather
               than as a count of sites fixed: 15 hits for the stale trio, 3 live and 12 historical, every
               one classified in the changelog.** Each corrected figure is **derived from the row markers**,
               not retyped.
               **ISS-01 also surfaced a defect the review did not catch, and it is the FR-078 failure mode
               exactly.** §3.3's **FR-038** row — closed at v2.13.0 — carries **both a ✅ and a ☐**,
               because my own annotation wrote "was ☐ Phase 3". A row with both markers is **silently
               uncountable**: a row-wise recount of §3.3 returns **22 rows, 4 complete**, not 23 and 5, so
               the SUMMARY's honest **5 / 18** could not be reproduced mechanically. **The Must count is
               unaffected — the hook counts §3.1 and §3.2 only — but this is how FR-078 was lost at
               v2.5.4**, and it is fixed by removing the glyph, not the sentence.
               **ISS-02 (High) — a Must row closed on evidence its own cells did not carry.** **FR-036**'s
               status cell argued the withdrawal clause from **UT-0897** and the changelog cited **TC-3605**,
               but the row's TC cell listed neither `TC-3605` nor `TC-3606` and its UT cell listed neither
               `UT-0897` nor `UT-0898`. Worse, Doc 07's `TC-3605` named `FR-085` and **not FR-036**, so
               **no case anywhere was attributed to FR-036 for that clause**, and `TC-3606` — the only
               passing test proving the published minimum **GATES** the candidacy (`ENDORSEMENTS_SHORT`) —
               was off the row too. Both cases and both `UT`s are added here, the status cell now **names
               which case carries which clause**, and §7 entry 17 and the changelog are reconciled to the
               row. **The Doc 07 half is fixed in its own v2.11.0 spec, not from here.** The tests were
               always real and green; the **chain** was broken, which is the one thing this document exists
               to get right.
               **ISS-03 (Medium) — RULED, not straddled.** FR-037's platform-wide clause closed on a scope
               premise verified by **inspection**, while FR-081's clause was refused for want of an
               **assertion**, in the same version, with no rule reconciling them. **The rule is now written
               down as `Completion rule 4a` (§1) and the distinction is principled, not convenient:
               inspection can bound an ABSENCE; it cannot manufacture a RECORD.** FR-037's clause is a
               **prohibition** whose every site holding the protected datum is itself covered by a passing
               absence test — inspection fixes only the **extent**. FR-081's clause is a **positive
               obligation to record**; inspection there **confirms the gap** rather than discharging it.
               **FR-037 stays CLOSED, FR-081 stays OPEN, and both rows now cite 4a and say which side of it
               they fall on.** The scan behind the extent premise is published as a reproducible
               enumeration: **five files hit, all five in the candidacy flow**, two of them i18n **label
               copy**. The absence-scan `it` is **routed to the engineer as owed hardening** with a revisit
               flag on FR-037 — routed, not required, because 4a discharges the clause today.
               **The three remaining Mediums and three Lows.** **ISS-04:** "Thirteen stories were checked"
               over an enumeration of **fifteen**, in the sentence immediately after the paragraph naming
               this very defect class — corrected to **Fifteen**, and the figure is now derived from the
               list beside it. **ISS-05:** the `Source:` block's Doc 07 pin ended mid-word ("…after that
               annot"), leaving a sentence, an italic and a parenthesis unclosed — the sentence and the italic restored **but the `TC-TRUMOCRACY (` group left OPEN, which v2.15.0 closes (ISS-C2-01)**, and the pin
               advanced to **Doc 07 v2.11.0**. **ISS-06:** §4 gains the **v2.13.0 sweep** it was missing for
               the largest drop in this document's life. **ISS-07:** §7's preamble gains its **v2.13.0
               update** note — three entries retired, six rewritten, heading 122 → 119. **ISS-08:** §8
               gains four change-impact rows — the two ratified constants, the `ICandidateStore` v1→v2 seam,
               and the three recorded revisit triggers.
               _(v2.13.0 record, retained — the version this one supersedes:)_ In Review — v2.13.0 (2026-09-21). **Candidate-selection row ruling**, per
               `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md` ("Ownership and rework"):
               the honest per-row ruling for the nine candidate/election Must rows that TRUMO-P02 built and
               tested and TRUMO-P03 designed. **Cycle 1 of a fresh loop** — v2.12.3 PASSed and closed its own
               lineage. Neutral technical reviewer, PM-assigned and recorded BEFORE dispatch: **reviewer-qa**
               (Rafael Duarte, new instance) — the tester owns this document and does not review it; the
               architect is excluded as the author of the DESs these rows now cite. **MINOR bump, and it is
               earned: the Must count moves for the first time since v2.4.0.**
               **THE RULING, in one block, so no reader has to assemble it from nine rows.** **Three Must
               rows CLOSE — FR-036, FR-037, FR-085** — and the non-gating **FR-038** Should row closes with
               them. **Six stay OPEN and every one is reclassified — FR-039, FR-065, FR-066, FR-067, FR-081,
               FR-093 all become `G-NOMECH`**, and **FR-081 and FR-093 LEAVE `G-TRACE`** because DES-107 and
               DES-108 close their chain gaps without closing their rows. That pairing — a DES paid, a row
               still open — is the DES-101/FR-077 lesson repeated twice, and it is the point of recording it
               this way rather than as two closures.
               **Must 16 → 19 COMPLETE · 122 → 119 OPEN · completion 11.6% → 13.8%.** Non-Must 4 → **5**
               complete, 19 → **18** gap. Total rows 20 → **24** complete, 141 → **137** gap.
               `G-PHASE3` **47 → 40** · `G-NOMECH` **13 → 19** · `G-TRACE` **34 → 32**; by-reason total
               **123 → 120**, distinct open **119**, the +1 still being NFR-007's compound classification.
               Stories meeting the Definition of Done **17 → 23 of 142** (US-0046, US-0047, US-0048, US-0049,
               US-0050, US-0095 — checked story by story against every row each one carries, not inferred
               from the FRs that closed). Test cases **500 → 528** designed, **245 → 275** with passing
               evidence, gaps **255 → 253**.
               **The five clauses the architect left to the tester are each RULED, and two of the five do not
               go the way the design hoped.** (1) **FR-065 "unlinkable to their caster" — NOT satisfied.**
               Definition-B; the operator database can see the direction of an individual feedback vote and
               the surface says so (FR-131(b)). (2) **FR-065 "the same nullifier mechanism as scope-action
               limits" — NOT satisfied.** v1 uses a store-local check-then-write, not DES-095's
               `isUniqueInScope`; Doc 03 DES-066 rule 2 records it as a v1 DIVERGENCE and the production
               UNIQUE constraint it needs is unbuilt. FR-065 stays OPEN on both. (3) **FR-067 "refused **and
               logged**" — the logging half is NOT satisfied.** Refusal is discharged by capability absence;
               logging is a positive obligation to produce a record, and an absence produces none. FR-067
               stays OPEN on that clause alone. (4) **FR-081 "with its state (active/inactive)" — NOT
               satisfied.** No field, no read, no assertion; a mapping published in an SDD is not a test.
               FR-081 stays OPEN on that clause alone, one `it` short of closing. (5) **FR-085's TC-3476 —
               does NOT belong on the row**, and it is removed: it is an FR-131 clause-8 case about the
               **enrolment** screen, while FR-085 governs **candidacy** consent and disclosure destruction.
               It keeps its FR-131 home. **FR-085 closes on TC-3411, TC-3599, TC-3605 and TC-3614 and would
               close with or without that removal** — stated so the removal cannot be read as clearing an
               obstacle.
               **One new evidence defect is raised rather than worked around: `TD-RTM-05` (§10).** Doc 02
               §16.3.1 records FR-065 as fully **IN-v1** with v2 "Same" and divergence "**N**", while FR-065's
               own §4 text requires votes "unlinkable to their caster" — a property v1 does not have and Doc
               03 v2.16.0 expressly declines to claim. FR-063 carries "**Y**" for a smaller divergence. The
               row under-records a real gap; routed to the product-owner. **This ruling does not rest on
               §16.3.1**: a row cannot close by citing a table that is wrong about the row.
               **Evidence: run R-21** (Doc 07 v2.10.0 §9) — `npm test` **739/739, exit 0**, then four
               case-by-case runs covering **97 `it`s green individually**; the 28 new cases TC-3592..TC-3619
               are **Pass (obs.)**. **The two Lows carried from the v2.12.3 PASS are folded here** (ISS-01
               the ISS-03 bridge's reconstruction recipe, now moot — this version supersedes the whole
               v2.12.x chain and the bridge note is restated as history; ISS-02 the cycle index, set by the
               project-manager in the assignment record above, which this version cites by name).
               _(v2.12.3 record, retained — the version this one supersedes:)_ Approved — 08-traceability-matrix-v2.12.3-technical-cycle5.md (PASS 97%, 0C/0H/0M/2L; reviewer: reviewer-qa; two Lows carried, non-blocking: ISS-01 the ISS-03 bridge's optional deep-reconstruction path says to reverse-apply the cycle-3 spec to this file, but the correct recipe is a composition (cycle-4 spec first to reach v2.12.2, then cycle-3) — the failure is LOUD (it trips the document's own exactly-once assertion on operation 1) and no published figure is wrong; ISS-02 the document reads 'Rework cycle 4 of 5' while the review was dispatched as cycle 5 — the cycle index is the project-manager's to set, see the assignment record). Previously: In Review — v2.12.3 (2026-09-20). **Rework cycle 4 of 5** against
               `artifacts/reviews/08-traceability-matrix-v2.12.2-technical-cycle3.md` (**FAIL 94%,
               0C/0H/1M/2L**; neutral technical reviewer: **reviewer-qa**, Rafael Duarte — PM-assigned and
               recorded BEFORE dispatch, and **Accountable for "RTM complete (zero gaps)"** under the RACI).
               **All three issues are taken in this version; none is carried. This is cycle 4 of 5 — if cycle 5
               fails, the verdict becomes ESCALATED and a human records approve-as-is / rework / reject.**
               **PATCH bump. NOT ONE COUNT, STATUS MARKER, GAP CODE OR VERDICT MOVES** — re-verified with the
               hook's own parser after the edit rather than asserted: `node hooks/run_gates.cjs --audit` reads
               **138 Must rows · 16 COMPLETE · 122 OPEN, and the two independent signals AGREE**. **G-PHASE3 47 ·
               G-TRACE 34 · by-reason 47+13+9+5+6+4+5+34 = 123 against 122 distinct open rows (NFR-007 compound) ·
               stories 142 | 134 | 17 | 125 · Must-FR subtotal 114 · 16 · 98 · test cases 500 designed · 500
               traced · 245 with passing evidence (136 inh. · 109 obs.) · gaps 255 · §9's 245 + 15 + 233 = 493 ·
               suite 640/640 (R-20) · Gate-2 verdict FAIL on all six rows.** **FR-131 and FR-132 both stay OPEN
               (G-PHASE3), and the §3.2 NFR-023 row is not edited: still `G-UI`, Complete 0.**
               **No suite re-run and NO NEW RUN ID.** Nothing testable changed — no product, test or configuration
               path is touched — and minting an **R-21** against an unchanged code state would manufacture two
               pieces of evidence out of one execution, the exact defect this document named at R-18/R-19.
               **R-20 stands**, and the cycle-3 reviewer re-ran it independently (exit 0; contracts 95 · protocol
               151 · sdk 244 · ui 18 · indexer 16 · web 116 = 640).
               **ISS-01 (Medium) — A FALSE SCOPE CLAIM ABOUT THIS LINEAGE’S OWN EDIT FOOTPRINT, AND THE METHOD
               THAT PASSED IT. TAKEN — AND THE METHOD IS WHAT CHANGES.** The v2.12.2 changelog asserted, present
               tense and in bold, **"§6 is not edited at all"**. **That was false.** v2.12.2’s tenth changed line is
               old **1930** / new **2055**, the `v2.12.0 DoD check` paragraph — and that is a **§6** line, and
               always was. The words "at all" foreclose the charitable reading that "§6" meant only the dashboard
               table, and §6 is the one section a reader trusts to hold the census, so a false "untouched" guarantee
               about that section is not cosmetic.
               **Why it passed the dry run, which is the part that matters.** The v2.12.2 invariant list recorded
               "§6 not edited at all" as *verified*. It could only do that because it asked **"did §8 change?"** —
               the label the cycle-2 review attached to that line, which the OP-8 heading then inherited — instead
               of asking the **file** which section contains the line. **The verification ran against a section
               boundary taken from a label rather than from the document.** A label is not evidence.
               **HOW THE BOUNDARIES ARE DERIVED FROM NOW ON — one command, no labels.**
               `grep -n '^## ' docs/08-traceability-matrix.md` returns every top-level section heading with its
               line number; the section containing line *n* is the last heading at or before *n*, and it ends one
               line before the next heading. Run at **v2.12.2** it returns §1 **1691** · §2 **1718** · §3 **1727** ·
               §4 **1956** · §5 **1989** · §6 **2013** · §7 **2059** · §8 **2233** · §9 **2249** · §10 **2284** — so
               **§6 runs 2013–2058** and line **2055** is inside it. Run on the reconstructed **v2.12.1** file (see
               (a) under P3 below) it returns §6 **1888** · §7 **1934** · §8 **2108**, so **§6 ran 1888–1933** there
               and old line **1930** was inside it too. **The file was never ambiguous in either state; only the
               label was wrong.** Run on **this file** the same command returns §1 **1882** · §6 **2204** · §7
               **2250** · §8 **2424** · §9 **2440** — every section moves down as the metadata block grows at
               each cycle, which is exactly why a boundary copied from a previous version, from a spec or from a
               review report is never evidence. **Section boundaries are never again taken from a spec, a review
               report or an operation heading.**
               **WHAT IS ACTUALLY TRUE OF v2.12.2’s FOOTPRINT, stated as invariants a reader can re-derive.**
               v2.12.2 changed **exactly ten original lines** — 5, 6, 26, 247, 411, 424, 446, 522, 1930, 2149 in
               v2.12.1 numbering — falling in **three** regions: the **metadata block** (lines 3–1512 of that file;
               eight lines), **§6** (one line), and **§9** (one line). Nothing else moved. **§6’s other 45 lines are
               byte-identical** — the section minus the DoD-check line hashes the same in both states — so the
               dashboard table, the TC-count convention notes and the story-census disclosure are untouched. **The
               one §6 line that changed is a pure insertion:** a word-level diff of it yields a single hunk, an
               addition of 67 tokens with **no deletion and no substitution**, so the dated v2.12.0 sentence
               survives word for word and **the DoD figure stays 17 of 142**. **And the by-reason table is not in
               §6 at all** — it sits under `### Must-row gaps by primary reason` in the `SUMMARY` block **above**
               §1 — so calling its figures "§6’s" would have been a second boundary error; it is untouched, and it
               is named where it lives.
               **ISS-02 (Low) — TAKEN, not carried.** The cycle-2 comparison paragraph offered **symmetry as a
               cause** — "the merge is symmetric, which is why both counts land on 14". **Symmetry is not a cause,**
               and the sentence is **withdrawn** as an explanation. The cycle-2 list happened to mis-assign exactly
               three lines and to omit exactly three; had it mis-assigned two and omitted four the totals would have
               diverged with the substance unchanged. **The totals coincide by arithmetic, not by construction.**
               What carries the finding is the sentence that already followed it — *"The classification, not the raw
               total, is the claim being made here"*. Two smaller residues go with it: **1862 is regrouped** — it
               does not carry the claim in words, it enumerates separate case ids inside §4’s `it`-count provenance
               and makes no clause claim, exactly as this document’s own P3 classifies it, so only **410** and
               **1930** carry the claim in words; and the quoted **"14 hits on 12 lines"** is reproduced as the
               cycle-2 report wrote it, while that report’s own enumerated list has **13** distinct lines — a
               correction its author recorded at cycle 3. **The dated paragraph is annotated in place, not
               rewritten.**
               **ISS-03 (Low) — TAKEN, not carried.** The P1/P2/P3 enumeration was anchored to the **v2.12.1**
               state, and **v2.12.1 was never committed** — it existed only in the working tree — so a reader
               running the three published commands on the file in front of them landed on different totals with no
               way to tell a discrepancy from a defect. **The bridge is now recorded with the commands**: how to
               reconstruct the v2.12.1 state, and what each command returns at **v2.12.1**, at **v2.12.2** and at
               **this version** — so the enumeration is falsifiable against whichever file a reader actually holds.
               **NOT REOPENED, and named so no reader wonders:** the FR-131/FR-132 tracing ruling, the Must-row
               count reasoning, `TD-RTM-03`’s disclosure sufficiency, the declined `SCR` link, R-20’s discharge, the
               three cycle-1 Medium fixes, the sixth-site fix, both cycle-2 Lows, and `TD-RTM-01`/`TD-RTM-02`/
               `TD-RTM-04` — all affirmed across cycles 1–3, all left exactly as they stand. **All four §10 debts
               remain OPEN.** **The FR-132 claim-family sweep is CLOSED** — the cycle-3 reviewer classified all 18
               surviving occurrences by hand, found no live present-tense claim anywhere, and stated it would not
               ask for a fourth sweep of that family. **Doc 07 v2.9.0 is Approved and is NOT reopened.** **Docs 03
               and 04 are now both Approved — v2.14.1 and v1.7.1, PASS 97% each** — they are the architect’s and
               nothing in either is touched from here. **`OPEN-30` stays routed to the project-manager.**
               _(v2.12.2 record, retained.)_ **Previously:** In Review — v2.12.2 (2026-09-20). **Rework cycle 3 of 5** against
               `artifacts/reviews/08-traceability-matrix-v2.12.1-technical-cycle2.md` (**FAIL 93%,
               0C/0H/1M/2L**; neutral technical reviewer: **reviewer-qa**, Rafael Duarte — PM-assigned and
               recorded BEFORE dispatch, and **Accountable for "RTM complete (zero gaps)"** under the RACI).
               **All three issues are taken in this version; none is carried.**
               **PATCH bump. NOT ONE COUNT, STATUS MARKER, GAP CODE OR VERDICT MOVES** — re-verified with the
               hook's own parser after the edit rather than asserted: `node hooks/run_gates.cjs --audit` reads
               **138 Must rows · 16 COMPLETE · 122 OPEN, and the two independent signals AGREE**. **G-PHASE3 47 ·
               G-TRACE 34 · stories meeting DoD 17 of 142 · Must-FR subtotal 114 · 16 · 98 · test cases 500
               designed · 245 with passing evidence (136 inh. · 109 obs.) · gaps 255 · §9's 245 + 15 + 233 =
               493 · suite 640/640 (R-20) · Gate-2 verdict FAIL on all six rows.** **FR-131 and FR-132 both stay
               OPEN (G-PHASE3).**
               **No suite re-run and NO NEW RUN ID.** Nothing testable changed, and minting an R-21 against an
               unchanged code state would manufacture two pieces of evidence out of one execution — the exact
               defect this document named at R-18/R-19. **R-20 stands**, and the neutral reviewer independently
               reproduced it at cycle 2 (exit 0; contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 ·
               web 116 = 640).
               **ISS-01 (Medium) — THE SIXTH SITE, in the `Source:` block. TAKEN.** The `SRS-TRUMOCRACY v2.17.3`
               scoped-read parenthetical still read "**§(d) is the requirement `TC-3577..TC-3591` verify**" — the
               contiguous range, silently absorbing **TC-3586**, in the **present tense**, in the block a Gate-2
               reader consults to learn what this version actually read, and **two lines above the Doc 07 pin
               v2.12.1 itself edited**. It now states the **fourteen** it means — **TC-3577..TC-3585,
               TC-3587..TC-3591** — carrying the same ISS-01 annotation applied at every other site. **TC-3586
               verifies `US-0133 · NFR-023 · DES-085` and names no FR** (Doc 07 v2.9.0), so it enters this matrix
               at the §3.2 **NFR-023** row **only**, on the **TC-3576** precedent this document set at v2.11.0.
               **The §3.2 NFR-023 row is NOT edited** and stays `G-UI` with Complete **0**.
               **AND THE CLAIM THAT HID IT IS RETIRED.** "All five places" was a count of sites **FIXED**
               published as a count of sites **CHECKED**. The two are not the same claim, and only the second is
               falsifiable by a reader. This lineage failed twice on sites a correction did not reach, so this
               version replaces the count with a **pattern enumeration reproducible in one command**. Run over
               the file exactly as v2.12.1 stood — the state the cycle-2 reviewer read:
               **(P1)** `grep -o 'TC-3577\.\.TC-3591' docs/08-traceability-matrix.md | wc -l` → **14 occurrences
               on 13 lines** (19, 68, **247**, 249, 438, 519, 598, 1740, 1907, 2076, 2077, 2133, and 2149 twice).
               **Thirteen are not the claim:** four quote the superseded range inside an ISS-01 **defect
               description** (19, 438, 519, and one of 2149's two); seven are **minting or matrix-entry**
               references, where fifteen is the true figure because fifteen cases were minted (68, 249, 1740,
               1907, 2077, 2133, and 2149's other); one is **Doc 07's suite filing** under `TS-ADV-02` (598); and
               one is §7 entry 117 recording that the drop touches FR-131 **not at all** (2076). **One — line
               247 — was the live claim.** That is this version’s ISS-01.
               **(P2)** `grep -o -i 'fifteen' docs/08-traceability-matrix.md | wc -l` → **34 occurrences on 24
               lines**. Exactly **two** assert that fifteen cases verify FR-132 §(d), and **both are
               v2.12.0-stamped records**: line **410** (the pin note) and line **1930** (§6’s DoD check
               _(v2.12.3, ISS-01: this read "**§8**’s DoD check". Boundaries derived from the file with
               `grep -n '^## '` put line 1930 inside **§6**, which ran 1888–1933 in the v2.12.1 state this
               enumeration is over; the mislabel entered from the cycle-2 report and is corrected wherever it was
               repeated.)_). They
               are **ISS-02** below. The other 32 are matrix-wide entry and evidence statements (fifteen cases do
               enter this matrix — fourteen at FR-132 and one at NFR-023), FR-131 clause-(e) rulings, §4’s
               `it`-count provenance, and the corrected "fourteen of the fifteen" formulations.
               **(P3)** the co-occurrence net — the one that catches a site without a list:
               `grep -n -E 'FR-132|§\(d\)' docs/08-traceability-matrix.md | grep -E -i
               'fifteen|fourteen|TC-35[789][0-9]'` → **18 lines**, being P1’s and P2’s claim sites plus §3.1’s
               two FR-131 rows and §7.1, which match only on ids in the **TC-3570..TC-3575** band and carry no
               count claim at all. **No seventh site exists.**
               **THE STATE THESE FIGURES ARE ANCHORED TO, AND HOW A READER REACHES IT** _(v2.12.3, ISS-03: the
               three commands above are run at the **v2.12.1** state, and **v2.12.1 was never committed** — it
               existed only in the working tree. A reader running them on the file in front of them does not land on
               these totals, and had no way to tell a discrepancy from a defect. The bridge is recorded here so the
               enumeration is falsifiable against whichever version a reader actually holds.)_
               **(a) To obtain the v2.12.1 state:** reverse-apply the nine `FIND`/`REPLACE` pairs in
               `artifacts/tester-2026-09-20T2100-doc08-c3-spec.md` to this file, asserting each `REPLACE` matches
               **exactly once** before substituting. The result reads `Version: 2.12.1`, runs to **2173** lines
               against v2.12.2’s **2298**, and differs from v2.12.2 in **exactly ten original lines** — 5, 6, 26,
               247, 411, 424, 446, 522, 1930, 2149 (v2.12.1 numbering). The cycle-3 reviewer reconstructed the same
               file the same way
               and reproduced every figure published here. The equivalent recipe for this version is
               `artifacts/tester-2026-09-20T2300-doc08-c4-spec.md`.
               **(b) What the same commands return at each published state** — P1 the contiguous range · P2 the
               word · P3 the co-occurrence net · and the retired "all five places" claim:
               **v2.12.1** — 14 occurrences / 13 lines · 34 / 24 lines · 18 lines · 3.
               **v2.12.2** — 18 / 16 lines · 50 / 34 lines · 23 lines · 6.
               **v2.12.3, this file** — 18 / 16 lines · 50 / 34 lines · 23 lines · 7.
               **(c) The totals RISE as the lineage corrects itself, and that is expected rather than drift.** Each correction is
               published by quoting the pattern it corrects, so annotating a site adds occurrences to the very count
               that found it. **The totals are not the claim; the classification is** — and it is unchanged at all
               three states: no live, present-tense assertion that a range or a count of cases verifies the clause
               survives anywhere outside a dated, annotated record.
               **Derived independently, and the line list does not match the reviewer’s — the totals do.** The
               cycle-2 report enumerated "14 hits on 12 lines" and listed **410, 1862 and 1930** among them while
               omitting **68, 2077 and 2133**. The first three carry the claim **in words** (P2) rather than as
               the range (P1); the merge is symmetric, which is why both counts land on **14**. Both enumerations
               find **one** live defect, at line **247**. **The classification, not the raw total, is the claim
               being made here** — and after this edit no occurrence anywhere in this file asserts that a range or
               count of cases verifies FR-132 §(d) outside a dated, annotated record.
               _(v2.12.3, ISS-02: three corrections to this paragraph, which is **annotated, not rewritten**.
               **(a) The symmetry sentence is WITHDRAWN as an explanation.** Symmetry is not a cause. The cycle-2
               list happened to mis-assign exactly three lines to the range pattern and to omit exactly three that
               the range pattern does catch; had it mis-assigned two and omitted four, the totals would have
               diverged with the substance unchanged. **The totals coincide by arithmetic, not by construction.**
               The sentence that carries this finding is the next one — *"The classification, not the raw total, is
               the claim being made here"* — and on that standard the two enumerations agree line for line: every
               hit has the same disposition in both, and both find the same single live defect.
               **(b) 1862 is regrouped.** It does not carry the claim in words. It enumerates separate case ids
               inside §4’s `it`-count provenance and makes no clause claim at all — which is how this document’s own
               P3 classifies it. Only **410** and **1930** carry the claim in words.
               **(c)** The quoted "14 hits on **12** lines" is reproduced as the cycle-2 report wrote it; that
               report’s own enumerated list has **13** distinct lines, a correction its author recorded at cycle 3.)_
               **ISS-02 (Low) — TAKEN, not carried.** The two v2.12.0-stamped records that repeat the superseded
               claim — line **410**’s pin note and line **1930**’s §6 DoD check
               _(v2.12.3, ISS-01: read "§8 DoD check" at v2.12.2; §6 ran 1888–1933 in the file this enumeration is
               over)_ — now carry the one-clause ISS-01
               annotation every other site received: **fourteen; TC-3586 enters at NFR-023 only**. **The dated
               text itself is not rewritten** — the retained-record convention protects it, and what was missing
               was the annotation, not a correction.
               **ISS-03 (Low) — TAKEN, not carried.** The changelog now enumerates the Doc 07 pin advance that
               v2.12.1 disclosed only at the pin: `TC-TRUMOCRACY` moved **In Review → Approved** on
               `artifacts/reviews/07-test-cases-suites-v2.9.0-technical-cycle1.md` (PASS 97%, 0C/0H/0M/4L),
               **version unchanged at v2.9.0 — a status-currency correction only.**
               **NOT REOPENED, and named so no reader wonders:** the FR-131/FR-132 tracing ruling, the Must-row
               count reasoning, `TD-RTM-03`'s disclosure sufficiency, the declined `SCR` link, R-20's discharge,
               and `TD-RTM-01`/`TD-RTM-02`/`TD-RTM-04` — all affirmed across cycles 1 and 2, all left exactly as
               they stand. **All four §10 debts remain OPEN.** **Doc 07 v2.9.0 is Approved and is NOT reopened.**
               Docs 03 and 04 are the architect’s, at v2.14.1 / v1.7.1 under a different reviewer; nothing in
               either is touched from here. **`OPEN-30` stays routed to the project-manager, not fixed here.**
               _(v2.12.1 record, retained.)_ **Previously:** In Review — v2.12.1 (2026-09-20). **Rework cycle 2 of 5** against
               `artifacts/reviews/08-traceability-matrix-v2.12.0-technical-cycle1.md` (**FAIL 92%,
               0C/0H/3M/2L**; neutral technical reviewer: **reviewer-qa**, Rafael Duarte — PM-assigned and
               recorded BEFORE dispatch, and **Accountable for "RTM complete (zero gaps)"** under the RACI).
               **All five issues are taken in this version. The one item that is carried is carried in ANOTHER
               document** — see ISS-05.
               **PATCH bump, and the reviewer said so in terms: not one count, status marker, gap code or verdict
               moves.** Re-verified after the edit rather than asserted: **Must 138 · COMPLETE 16 · OPEN 122
               (11.6%) · G-PHASE3 47 · G-TRACE 34 · stories meeting DoD 17 of 142 · Must-FR subtotal 114 · 16 ·
               98 · test cases 500 designed · 245 with passing evidence (136 inh. · 109 obs.) · gaps 255 ·
               suite 640/640 (R-20) · Gate-2 verdict FAIL.** **FR-131 and FR-132 both stay OPEN (G-PHASE3).**
               **No suite re-run:** nothing testable changed, so **R-20 stands** and no run id is minted.
               **ISS-01 (Medium) — an `FR-132 → TC-3586` link was asserted that Doc 07 does not carry.** Written
               as the contiguous range `TC-3577..TC-3591`, the FR-132 `TC` cell silently absorbed **TC-3586**,
               whose Doc 07 v2.9.0 row verifies `US-0133 · NFR-023 · DES-085` and names **no FR** — so the row
               claimed **fifteen** cases where **fourteen** are FR-132 evidence. That is a **fresh instance of the
               `TD-RTM-03` defect class, created in the very version that discloses the old one**, and it
               contradicts this document's own v2.11.0 precedent, where **TC-3576** was kept off the FR-131 chain
               for exactly this reason. The cell now states the fourteen it means — **TC-3577..TC-3585,
               TC-3587..TC-3591** — and the correction reaches all five places the claim was made: §3.1's `TC`
               cell, §3.1's evidence cell, §7 entry 118, §9's gate row and the changelog. _(v2.12.2, ISS-01:
               **five was the count of sites FIXED, not the count of sites CHECKED.** A **sixth** site was live,
               present-tense and unannotated — the `Source:` block’s scoped-read parenthetical — and this very
               claim is what hid it. v2.12.2 corrects that site and replaces the count with the pattern
               enumeration recorded in the v2.12.2 record above.)_ **TC-3586 keeps the one
               link it genuinely has** — the §3.2 **NFR-023** row, unedited, still `G-UI` with Complete **0**.
               **ISS-02 (Medium) — the §9 gate row stated its own denominator twice and differently.** The headline
               read "245 of **493**" while the Denominator note in the same cell read "counts against **478** …
               §6's dashboard counts against **485** … §6's **254** … this row's **232**", all in the present
               tense — and **478 and 485 went stale by v2.12.0's own edit, inside the cell that edit touched.**
               The note is brought current in place: this row **493**, §6's dashboard **500**, §6's **255**
               against this row's **233**, the gap still **7** and still **UNRECONCILED**. The historical series is
               kept in parentheses so the trail is not destroyed. **§9 is the cell a Gate-2 reader quotes.**
               **ISS-03 (Medium) — FR-132's Requirement cell summarised only the DES-100 seam shape.** §(d), the
               clause all fourteen cases verify, appeared nowhere in the column that states the requirement. The
               cell is restated from **Doc 02 v2.17.3 §4.46**, naming clauses **(a)–(e)** in summary, and the
               DES-100 allowlist-only seam is kept as the sub-clause of the row it actually is — the same
               treatment this document gave FR-131 at v2.9.0.
               **ISS-04 (Low) — TAKEN, not carried.** §10's `TD-RTM-02` is brought to current figures (Doc 07 §2
               **493** · §6 **500** · Doc 07 §10's third base; **245** with passing evidence and the **640/640**
               suite on R-20) and `TD-RTM-03` now describes the NFR-023 row as it actually reads — **four cases
               cited, two carrying evidence**, not "none". **Both keep their original raising dates and both stay
               OPEN. Neither debt is paid; only its register is made current.**
               **ISS-05 (Low) — TAKEN here, and it RIDES in Doc 07.** The clause-(e) carve-out is restated from the
               **claim** rather than the **surface**: clause (e) reaches a string only where the string asserts that
               a **participation act** is unknowable, and none of the fifteen does. The reviewer independently
               re-read clause (e) and confirmed the ruling; the surface framing was the defect, because
               `en.verify.unavailableBody` itself names two participation acts ("anyone can make an account, **join
               a party**, read, discuss and **support one**"). **Doc 07 v2.9.0 carries the same Low, is Approved,
               and is NOT reopened — that Low rides to Doc 07's next touch.**
               **ROUTED, NOT FIXED — `OPEN-30`.** Doc 07 v2.9.0's own ISS-01 records that the free `TC` band is now
               **TC-3592–TC-3699** while **Doc 04 v1.6.0 §14 still reserves TC-3570–TC-3699** (22 ids stale). The
               architect minted **`OPEN-30`** for precisely this, due at the first touch after Doc 07 v2.9.0 is
               Approved — **which has now happened**. Doc 04 is the architect's document and is at **v1.7.0, In
               Review**; **nothing in it is edited from here.** Routed to the project-manager.
               **Still NOT attempted, and named rather than half-done:** `TD-RTM-01` (UT-0841..UT-0848 defined
               twice — an engineer code touch), `TD-RTM-02` (three irreconcilable test-case denominators) and
               `TD-RTM-04` (US-0135..US-0142 untraced). All three stay **OPEN**.
               _(v2.12.0 record, retained.)_ **Previously:** In Review — v2.12.0 (2026-09-20). **Debt-closure session**, per
               `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md` items **1** (the RTM rows for
               `UT-0890` — the sole `TC` row owed at entry) and **4a** (this document's one carried Low).
               Neutral technical reviewer, PM-assigned and recorded BEFORE dispatch: **reviewer-qa** (Rafael
               Duarte, new instance), who is **Accountable for "RTM complete (zero gaps)"** under the RACI.
               **This is cycle 1 of a FRESH loop.** v2.11.3 closed **on the cap** (cycle 5 of 5) with a **PASS**,
               not an escalation; the cap governs one version lineage and a PASS closes it. v2.12.0 is a new
               version and opens a new loop at cycle 1.
               **MINOR bump: fifteen new test cases enter the matrix, TC-3577..TC-3591** (Doc 07 v2.9.0, one per
               `it` of the UT-0890 block). Test-case figures move by exactly that: designed **485 → 500**, with
               passing evidence **230 → 245** (136 inh. · **109** obs.), **gaps 255 — unchanged**, because all
               fifteen carry evidence. Suite **625/625 (R-19) → 640/640 (R-20)**.
               **NOTHING ELSE NORMATIVE MOVES, and it was ruled rather than assumed: Must 138 · COMPLETE 16 ·
               OPEN 122 (11.6%) · G-PHASE3 47 · stories meeting DoD 17 of 142 · Must-FR subtotal 114 · 16 · 98.**
               **`FR-131` stays OPEN (G-PHASE3) and is NOT linked to any of the fifteen** — Doc 02 §4.45 places
               personhood-enrolment and identity-verification claims **expressly outside** clause (e) and routes
               them to FR-132 §(d), and the `/verify` copy is enrolment copy. **`FR-132` stays OPEN (G-PHASE3)**
               — §(a), §(b), §(c) and §(e) are unbuilt, and §(d)'s own notice duty names **DES-098**, which does
               not exist (Doc 06 §7 item 26(d)).
               **Run R-20 is the clean-tree run this row has owed since R-18.** `npm test` **640/640**, exit 0,
               with `git status --porcelain` returning **three** paths, all session-governance records under
               `artifacts/`, and **no modified product, test, configuration or document path**. R-18 and R-19
               were both run against an **uncommitted 76-path tree** and both recorded a post-merge re-run as
               owed. **R-20 DISCHARGES that.**
               **The one Low carried from the v2.11.3 PASS is folded here:** `Last updated` now reads
               **2026-09-20** and tracks the version, which is what the finding asked for.
               **Explicitly NOT attempted, and named rather than half-done:** `TD-RTM-01` (UT-0841..UT-0848
               defined twice — a two-file engineer code touch), `TD-RTM-02` (three irreconcilable test-case
               denominators) and `TD-RTM-04` (US-0135..US-0142 untraced). All three stay **OPEN and unedited**;
               the changelog records which figures this version moves that they bear on, and why none is repaired.
               _(v2.11.3 record, retained — the version this one supersedes:)_ Approved — 08-traceability-matrix-v2.11.3-technical-cycle5.md (PASS 98%, 0C/0H/0M/1L; reviewer: reviewer-qa, neutral,
               PM-assigned; loop closed ON the cap, cycle 5 of 5, no escalation; one Low carried: Last updated should read 2026-09-08). Previously: In Review — v2.11.3 (2026-09-08). **Rework cycle 5 of 5 — THE CAP — against
               artifacts/reviews/08-traceability-matrix-v2.11.2-technical-cycle4.md (FAIL 96%, 0C/0H/1M/1L;
               reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned, and Accountable for "RTM
               complete (zero gaps)"). Both issues addressed; neither carried. The cycle-3 Medium (ISS-01,
               the story census) was confirmed CLOSED by that report.** **If this cycle fails, the verdict
               becomes ESCALATED and the approver records a decision — approve-as-is, rework or reject.**
               **Both survivors were in text v2.11.2 itself wrote, and both are the same defect: a
               correction that did not reach every place it claimed to reach.**
               **ISS-01 (the Medium) — the live Gate-2 sign-off still published the retired denominator.**
               §9's tester row has two cells; v2.11.2 converted the **Notes** cell to "17 of 142" and left
               the **Decision** cell reading "Must 16/138 · **stories 17/134** · both UNCHANGED" — and the
               v2.11.2 changelog asserted the conversion covered "the §6 DoD lead-in **and the §9
               sign-off**". **The Decision cell is the one a Gate-2 reader quotes.** Corrected to
               **stories 17/142**; the changelog claim is corrected where it was made rather than left to
               read as true.
               **ISS-02 (Low) — the residue is EIGHT cells, not one.** `TD-RTM-04` said "the live residue
               is one concrete cell" (FR-050). I re-extracted every story cell myself: **FR-121, FR-125,
               FR-126, FR-127, FR-128, FR-129 and FR-133 all read "none" in §3.1**, and **FR-050 reads
               "none" in §3.2** — one per untraced story, which is what the disclosure should always have
               said. Stated as eight in `TD-RTM-04` and in §6; **FR-050 stays named as the sharpest**,
               because §9 assigns the Product Owner a story gap on it by name.
               **NOTHING NORMATIVE MOVES: Must 138 · COMPLETE 16 · OPEN 122 (11.6%) · G-PHASE3 47 ·
               stories meeting DoD 17 of 142 (numerator unchanged) · test cases 485 designed, 230 with
               passing evidence · gaps 255 · suite 625/625 (R-19). FR-131 stays OPEN (G-PHASE3).**
               _(v2.11.2 record, retained:)_ In Review — v2.11.2 (2026-09-07). **Rework cycle 4 of 5 against
               artifacts/reviews/08-traceability-matrix-v2.11.1-technical-cycle3.md (FAIL 96%, 0C/0H/1M/1L;
               reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned, and Accountable for "RTM
               complete (zero gaps)"). Both issues addressed; neither carried. All three cycle-2 issues
               were confirmed CLOSED by that report. Cycle 5 is the cap.**
               **ISS-01 (the Medium) — this matrix pinned a 142-story backlog and published a 134-story
               census.** Doc 05 **v2.5.0** states **142 stories**; §6's Stories row read "134 | 134 | 17 |
               117", and a mechanical id diff shows **US-0135..US-0142 appear nowhere in this matrix** —
               so "134 traced of 134" read as **complete** when the population is 142. **The reviewer found
               exactly what my own v2.11.1 annotation said was owed:** I advanced the BKLG pin
               "**version-only, NOT re-read**" and wrote that the `US-####` chains were not re-verified
               against v2.5.0 — and then left a census derived from the old backlog standing beside the new
               pin. **An accurate disclaimer does not make an inaccurate number accurate.**
               **Taken by the reviewer's disclose-and-register route: NOTHING NORMATIVE MOVES.** The
               population is restated as **142**, the eight untraced ids are **named**, the Stories row
               reads **142 | 134 | 17 | 125**, every live "17 of 134" becomes **"17 of 142"**, and the
               owed work is registered as **`TD-RTM-04`**. **The eight are NOT traced in this version** —
               tracing them means deriving eight chains from a backlog this matrix has not re-read, which
               is the next backlog sync, not a cycle-4 rework.
               **Must 138 · COMPLETE 16 · OPEN 122 (11.6%) · G-PHASE3 47 — every one unchanged, and
               verified, not assumed:** all eight stories map to FRs whose rows already exist and are
               already OPEN — FR-121, FR-125..FR-129 and FR-133 are `G-TRACE`/`G-PHASE3` (no DES, or no
               implementation), and FR-050 is a **Should** row. **Not one of the eight can close a Must
               row, so the Must count cannot move on this finding.** FR-131 stays OPEN.
               **ISS-02 (Low)** — the SRS and SDD pins carried a scoped-read annotation **and** a trailing
               legacy section list, naming two different section sets on one pin; the trailing lists are
               now labelled "sections this matrix cites", so one pin names one scope.
               _(v2.11.1 record, retained:)_ In Review — v2.11.1 (2026-09-07). **Rework cycle 3 of 5 against
               artifacts/reviews/08-traceability-matrix-v2.11.0-technical-cycle2.md (FAIL 96%, 0C/0H/1M/2L;
               reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned, and Accountable for "RTM
               complete (zero gaps)"). All three issues addressed; none carried. All three cycle-1 issues
               were confirmed CLOSED by that report.** Patch bump: **every fix is in the header block.**
               **NOTHING ON THE MATRIX MOVES: Must 138 · COMPLETE 16 · OPEN 122 (11.6%) · G-PHASE3 47 ·
               stories meeting DoD 17 of 134 · test cases 485 designed and 230 with passing evidence (136
               inh. · 94 obs.) · gaps 255 · suite 625/625 on run R-19 — every figure identical to v2.11.0.
               FR-131 stays OPEN (G-PHASE3). No row, gap code, owner, phase or link changes.**
               **ISS-01 (the Medium) — "Every source this matrix now pins is Approved" was false of this
               matrix's own `Source:` block**, which read SDD **v2.11.2**, BKLG **v2.3.0 (In Review)** and
               TC **v2.7.0**. The sentence named the versions it *should* have pinned and the block pinned
               others. **The pins are advanced so the sentence is true where it stands** — SDD **v2.13.0
               (Approved)**, BKLG **v2.5.0 (Approved)**, TC **v2.8.1 (In Review, this version's sibling)**
               — each annotated with what was read, and the one claim that cannot be made is made
               explicitly: BKLG is a **version-only** advance.
               **ISS-02 (Low)** — the TC pin said v2.7.0 while the body syncs to Doc 07 v2.8.x; advanced to
               **v2.8.1**. **ISS-03 (Low)** — `Last updated` corrected to **2026-09-07**.
               _(v2.11.0 record, retained:)_ In Review — v2.11.0 (2026-09-07). **Rework cycle 2 of 5 against
               artifacts/reviews/08-traceability-matrix-v2.10.0-technical-cycle1.md (FAIL 95%, 0C/0H/1M/2L;
               reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned, and Accountable for "RTM
               complete (zero gaps)"). All three issues addressed; none carried.**
               **NOTHING MOVES ON THE MATRIX ITSELF: Must 138 · COMPLETE 16 · OPEN 122 (11.6%) · G-PHASE3
               47 · stories meeting DoD 17 of 134 — every figure unchanged, and FR-131 stays OPEN.** The
               reviewer re-derived that ruling independently — from the requirement text, a repository
               search that found **no acknowledge affordance** and **no FR-131 denylist**, and a route
               inventory confirming **SCR-13/SCR-14 unbuilt** — and concurred. Nothing here disturbs it.
               **ISS-01 (the Medium) — a pin-note sentence said Doc 04 v1.5.0 §14 records what it did not.**
               It was the stated justification for advancing the MTP pin, and it read as though the
               architect's register had already ratified the TC-3570 mint. **Doc 04 v1.6.0 — Approved
               since (PASS 96%) — does record it**, so the sentence is re-attributed and the pin advanced
               to **v1.6.0**. No id, link, count or ruling changes.
               **Both Lows discharged:** ISS-02 (UT-0889 has **6** `it`s, not five — the sixth is now
               **TC-3576**, and the NFR-023 row carries the link) and ISS-03 (CODE pin → **v2.7.0,
               Approved**). Test-case figures move only: **484 → 485** designed, **229 → 230** with passing
               evidence (**136** inh. · **94** obs.), gaps **255** unchanged. Suite **624/624 (R-18) →
               625/625 (R-19)**. **One new debt raised, `TD-RTM-03`** — the NFR-023 row cites neither
               TC-3538 nor TC-3561 and reads "none" for evidence, while Doc 07 has both verifying NFR-023.
               _(v2.10.0 record, retained:)_ In Review — v2.10.0 (2026-09-06). **The FR-131 row reopens and re-closes
               through its loop, on the approver's own instruction** ("Draft and apply FR-131 clause (e)
               in Doc 02; let Doc 08 reopen and re-close through its loop" —
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 item 3). Doc 02 **v2.17.1
               (Approved)** §4.45 adds **clause (e)**, widens the closing sentence, and at v2.17.1 adds
               the acceptance criteria — **§8 FR-131 Scenario 8** (grade-8 reader test; public-by-design
               rule; safe harbour; reader test governs) and **Scenario 9** (the absence test over every
               surface in every language). Doc 06 **v2.6.0 (In Review**, cycle-1 FAIL 94%, v2.7.0 rework
               in progress**)** lands **UT-0889**; Doc 07 **v2.7.0** mints **TC-3570..TC-3575**.
               **THE FR-131 MUST ROW STAYS OPEN (G-PHASE3), and the ruling is the headline of this
               version, not a footnote.** Scenario 8 is guarded at five strings on three surfaces
               (TC-3570..TC-3574, all **Pass (obs.)** on run R-18 — 624/624 plus a case-by-case re-run).
               **Scenario 9 is BLOCKED at TC-3575**: it quantifies over every public-facing surface in
               every language, the only instrument specified for it (Doc 04 §0.5 S5) is **not built**, and
               a criterion no test executes cannot close a Must row. The DES-098 acknowledge-to-proceed
               control, SCR-13/SCR-14 and everything else G-PHASE3 covers are **untouched by this drop**.
               **Must 138 · COMPLETE 16 · OPEN 122 (11.6%) · stories meeting DoD 17 of 134 — all
               unchanged.** Only the test-case row moves: **484** designed (was 478) and **229** with
               passing evidence (was 224; **136** inh. · **93** obs.), gaps **255**. Neutral technical
               review owed (reviewer-qa, per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md).
               **The v2.9.0 Low is DISCHARGED, not carried** — ISS-C2-01 (stale In-Review pins): the pin
               block is re-cut to the versions current on 2026-09-06 and four pins advance on deltas
               actually read (SRS, CODE, MTP, TC); see Source. The 14 Lows formally accepted at v2.7.0
               remain accepted-and-carried except where a later version touched their lines.
               _(v2.9.0 record, retained — the Low it carried, and its "fix first on any future touch"
               instruction, are executed above rather than inherited:)_ Approved — 08-traceability-matrix-v2.9.0-technical-cycle2.md (PASS 98%, 0C/0H/0M/1L;
               reviewer: reviewer-qa, neutral, PM-assigned; FR-131 OPEN ruling and 16/138 Must
               COMPLETE independently re-derived and confirmed). One Low carried — **fix first on any
               future touch:** ISS-C2-01 (In-Review pins of Docs 03/04/09 now superseded — Doc 03
               v2.13.0 and Doc 04 v1.4.0 are Approved; refresh at the owed pin-sync). The 14 Lows
               formally accepted at v2.7.0 remain accepted-and-carried except where v2.8.0/v2.9.0
               touched their lines (see change history). This was v2.9.0 (rework cycle 2 against
               artifacts/reviews/08-traceability-matrix-v2.8.0-technical-cycle1.md, FAIL 85%,
               0C/2H/3M/3L). Minor bump per the review-loop rule. **No Must row closes, no gap code
               changes and no authoritative count moves: Must 138 · COMPLETE 16 · OPEN 122 (11.6%)
               · stories meeting DoD 17 of 134 — all unchanged. FR-131 stays OPEN (G-PHASE3),
               exactly as v2.8.0 ruled and the neutral reviewer independently re-derived and
               concurred.** The two Highs were a rendering defect that hid this version's own
               additions and a missing chain link (`DES-098`); neither asked a status to move, and
               none moved.
               _(v2.8.0 record, retained:)_ In Review — v2.8.0 (FR-131 honesty-drop traceability;
               Doc 06 v2.5.1 / Doc 07 v2.5.0 sync). **No Must row closes at that version and no
               authoritative count moves — see the FR-131 ruling in the changelog, §3.1, §7 entry
               117 and §9.**
               _(v2.7.0 record, retained:)_ Approved — 08-traceability-matrix-v2.7.0-technical-cycle5.md (PASS 95%,
               0C/0H/0M/14L). **Reached cycle 5 of 5 — the last before mandatory human
               escalation — and passed on it.** Trajectory 85 → 83 → 86 → 93 → 95. Two honest
               qualifications recorded here rather than left in the report: the score sat AT the
               bar, and the reviewer disclosed that raising T2 from 95 to 96 during scoring
               **moved the verdict**, with the justification stated independently. This is a
               marginal pass, not a comfortable one.
               **The 14 remaining Lows are FORMALLY ACCEPTED** (a recorded acceptance stops the
               clock on a Low; a silent carry does not). **Fix first on any future touch:**
               **(1) L-13 — §6 publishes "472 / 255" and asserts "Doc 07 v2.4.4 uses 463 TC row
               anchors" unqualified, with no pointer to `TD-RTM-02`** — the mirror image of the
               §4→§10 defect this version closed, and the reason "no count is affected" in
               TD-RTM-02 slightly over-claims: no requirement-row status, Must-row count or gap
               classification is affected, but §6's coverage statistics are stated as settled when
               they are disputed. **(2)** The new §4 caveat is a blockquote placed inside the §4
               table, splitting its last three rows — including the `TD-07-01` record — from their
               header. **(3)** §7 entry 82's owner fix **replaced** Tomás Ferreira with Priya
               Raghunathan where it should have named both. The remaining eleven are wording and
               cross-reference nits carried from earlier cycles, none affecting a status, count,
               link or gate determination.
Owner:         Ji-woo Park — Test Lead (tester, author)
Verifier:      reviewer-qa (independent) — Accountable for "RTM complete (zero gaps)" per CLAUDE.md RACI
Source:        SRS-TRUMOCRACY v2.17.3 (**Approved** — 02-requirements-srs-v2.17.3-business-cycle2.md; **scoped read**: §4.45 and §8 FR-131 Scenarios 8/9, carried from the v2.11.x read, **plus §4.46 FR-132 clauses (a)–(e), read clause by clause for this version** — §(d) is the requirement **fourteen of the fifteen `UT-0890` cases — TC-3577..TC-3585, TC-3587..TC-3591** — verify, and §(a)/(b)/(c)/(e) are why its row stays OPEN _(v2.12.2, ISS-01: this read "§(d) is the requirement **TC-3577..TC-3591** verify" — the contiguous range, which silently absorbs **TC-3586**. Doc 07 v2.9.0 verifies TC-3586 against `US-0133 · NFR-023 · DES-085` and names **no FR**, so it enters this matrix at the §3.2 NFR-023 row **only**, on the TC-3576 precedent set at v2.11.0. **This was the SIXTH site of the v2.12.1 ISS-01 claim and the only one that version’s sweep did not reach**; the pattern enumeration that found it is recorded in the v2.12.2 `Status:` record. No count, status marker or gap code moves with this correction.)_; **plus, for v2.13.0, the §4 normative text AND the §8 Gherkin of FR-036, FR-037, FR-038, FR-039, FR-065, FR-066, FR-067, FR-081, FR-085 and FR-093, read clause by clause — they are the ten rows this version rules on — together with §16.3.1's v1/v2 mechanism rows for the same ten, which is where `TD-RTM-05` was found**) · SDD-TRUMOCRACY v2.16.0 (**Approved** — 03-architecture-design-sdd-v2.16.0-technical-cycle2.md, PASS 97%, 0C/0H/0M/2L, two Lows carried in its Status line; **scoped read for v2.13.0**: §10.13.14 in full — the `ICandidateStore` seam table, DES-027/028/066/067/076 as amended, DES-107, DES-108 and the evidence map at its end — plus §15's "v2.15.0 candidate selection — Definition-A trace rows" sub-table, §10.11's ratified constants, §10.12.4's screen inventory and §13's owed-build rows; **carried, version-only, NOT re-read**: §15's FR-131 DES assignment and §10.12.3 / DES-094 clause 9; **sections this matrix cites:** §5.2, §10.11, §10.12.4, §10.13.10.1, §10.13.13, §10.13.14, §13, §15, §16) · BKLG-TRUMOCRACY v2.5.0 (**Approved** — **version-only advance, NOT re-read for this version, and the story census was NOT re-derived from it**: Doc 05 v2.5.0 carries **142** stories and this matrix traces **134** — `TD-RTM-04`, disclosed at §6; see the v2.11.1 and v2.11.2 pin notes. **The v2.13.0 DoD check is nevertheless a real check**: the six stories it promotes were tested against **every row each one carries in this file**, by id diff, not against the backlog) ·
               CODE-TRUMOCRACY v2.11.1 (**Approved**; **scoped read for v2.13.0**: §3's `UT-0891`..`UT-0907` registry rows and the **739** total with its per-package addends, and §7 item **30**; **carried from the v2.8.1 pin and NOT re-read**: §3's `UT-0890` row and the **640** total, §6's `enrolment_ui` row, §7 items **26(d)** and **28**) · MTP-TRUMOCRACY v1.6.0 (**Approved** — PASS 96%; §0.5 S4/S5 and §14 read. **Known stale and named here rather than advanced silently:** Doc 04 is at **v1.7.1** and its §14 still reserves `TC-3570`–`TC-3699` for the six `TS-V1-*` suites, which Doc 07 v2.10.0 draws `TC-3592`..`TC-3619` from; **Doc 04 §14 must re-narrow that floor to `TC-3620`** — routed to the architect, OPEN-30 pattern) ·
               TC-TRUMOCRACY v2.10.0 (**In Review** — this version's sibling, authored in the same 2026-09-21 candidate-selection touch and under the same neutral reviewer, from `artifacts/status/SPEC-2026-09-21-doc07-v2.10.0.md`; it is the document **TC-3592..TC-3619** are minted in and the document that carries run **R-21**. **The pin is to an In-Review sibling and that is stated, not hidden:** the evidence these rulings rest on is the 97 `it`s of `UT-0891`..`UT-0907`, read green individually in R-21 against merged code at `HEAD` `12fe4a6` — evidence that does not depend on either document's review status. If the Doc 07 review changes a case id, a status or an `it` attribution, **the affected rows here must be re-derived**, and the reviewer of this document should check that before signing. _(v2.12.1: the v2.9.0 pin read "**In Review**" until that version, and the same qualification applied; it is repeated here because the situation is the same one.)_ _(v2.12.0: the previous pin read "v2.8.1 (**In Review**)". **Doc 07 v2.8.1 reached Approved on 2026-09-07** — 07-test-cases-suites-v2.8.1-technical-cycle3.md, PASS 98% — after that annotation was written, and the pin is corrected here rather than left to imply the document was still under review when these rows were ruled.)_ _(**v2.14.0, ISS-05 — this line ended mid-word at "after that annot", leaving the sentence, the italic and the `TC-TRUMOCRACY (` group all unclosed, so the `Source:` block was structurally broken and the lost clause was the one explaining the v2.12.0 correction. The truncation was in the v2.13.0 spec's own REPLACE block, so transcription faithfully reproduced a truncated instruction — **a spec is not self-checking, and this is the failure mode of authoring one in a text field**. Restored and closed.)_ **→ Pin advanced for v2.14.0: TC-TRUMOCRACY v2.11.0** (In Review — rework cycle 2 of 5 against 07-test-cases-suites-v2.10.0-technical-cycle1.md, FAIL 91%; `artifacts/status/SPEC-2026-09-21-doc07-v2.11.0.md`). **It carries the Doc 07 half of this version's ISS-02:** `TC-3605`'s requirement cell now names **FR-036** and **US-0046**, which is what makes FR-036's backward trace resolve on both sides. It also corrects Doc 07's own `640 + 97 + 2 = 739` arithmetic and drops the false `TC-3320`/`TC-3612` FR-039 carrier citation — **neither of which reaches a figure or a ruling in this matrix**, checked row by row. **→ Pin advanced again for v2.15.0: TC-TRUMOCRACY v2.12.0** (**APPROVED** — 07-test-cases-suites-v2.12.0-technical-cycle3.md, **PASS 97%, 0C/0H/0M**; its loop closed at three cycles, 91% → 94% → 97%. _(v2.16.0, **ISS-C3-03**: this pin read "**In Review** — rework cycle 3 of 5 … FAIL 94%", which was true when written and is not now. **The cycle-2 qualification that this matrix pinned an In-Review sibling is therefore spent in the RIGHT direction — the source these closures rest on is stronger than when they were signed, not weaker** — and a pin that understates its source's standing is still a pin a reader cannot trust.)_) Its Medium was a **site enumeration counted from the issue list rather than from the diff** — thirteen published over a fourteen-site change — and **the unenumerated fourteenth was `TC-3605`'s FR-036 attribution, this matrix's own ISS-02 fold**; v2.12.0 corrects the count, names the fold and drops two non-derivable figures. **Checked against this matrix row by row: no `TC` id, evidence cell, figure or ruling here changes.** _(**v2.15.0, ISS-C2-01 — THE PARENTHESIS IS CLOSED HERE, FOR REAL, AND THE EARLIER CLAIM THAT IT WAS IS CORRECTED WHERE IT WAS MADE.** Cycle-1 ISS-05 raised a truncated pin; v2.14.0 restored the tail and advanced the pin but **left this group open** — the line ran **7 open parens to 5 close**, one excess the backticked literal naming the group and the other the group itself. Its siblings balance **12/12** and **3/3** and each ends `) ·`; this one ended in a full stop and the next `Source:` line opened an unrelated parenthetical. The annotation above, the Status and the Changelog all said "closed". **A document that names the group it failed to close and then asserts closure is asserting something about its own fix that a reader can disprove by counting characters — which is what happened.** Closed now, with the `·` separator its siblings carry.)_ ) ·
               _(v2.7.0: every pin now carries its status. Four of six are Approved; BKLG v2.3.0
               and MTP v1.0.2 are In Review — an unannotated pin to an unapproved source reads as
               settled evidence when it is not.)_
               _(v2.8.0: CODE advanced v2.4.3 → **v2.5.1** and TC v2.4.4 → **v2.5.0**, both read for
               this version. The BKLG and MTP pins are **not** advanced and are now doubly stale —
               BKLG is at **v2.5.0 (Approved)** and MTP at **v1.3.0 (In Review as of 2026-09-06, its
               own FR-131 cascade)**, so the "In Review" annotation beside BKLG and the version beside
               MTP are both out of date. Note also that the SRS and SDD pins moved under this
               document today: **SDD is now v2.12.0 (In Review)**, carrying the §13 and §10.12.3
               FR-131 corrections and the new DES-094 **clause 9** title rule that TC-3568 verifies.
               All four are left as written rather
               than corrected in passing, because advancing a pin asserts the delta was read and it
               was not; the correct versions are named here so no reader is misled either way. A
               BKLG/MTP pin-sync is owed at the next version, together with the identical debt in
               Doc 07 §Source.)_
               _(v2.9.0: the **TC** pin is advanced v2.5.0 → **v2.6.0** — the same tester authored
               both on 2026-09-06 and read the delta, and it changes no id, status or count this
               matrix cites (Doc 07 v2.6.0 is a wording rework: three over-claims narrowed, four
               nits fixed, no TC minted or re-statused). **No other pin is advanced.** The
               "current versions" named in the v2.8.0 note have themselves moved since that note
               was written: **SDD is now v2.13.0** and **MTP v1.4.0**, both **In Review** and both
               in cycle 2 of their neutral technical review, and Doc 09 is now **v1.6.0 (In
               Review)**; SRS **v2.16.3** and BKLG **v2.5.0** are both **Approved** and unchanged.
               The SRS/SDD/BKLG/MTP pin-sync is still owed, and is still owed in Doc 07 §Source.)_
               _(v2.10.0: **ISS-C2-01 DISCHARGED — the pin block is re-cut and four pins advance on
               deltas that were actually read.** **SRS v2.16.3 → v2.17.1 (Approved)** — §4.45 was read
               clause by clause and §8 FR-131 **Scenarios 8 and 9** line by line for the ruling below.
               **v2.17.1 PASSED cycle 2 of its neutral business review on 2026-09-06**
               (artifacts/reviews/02-requirements-srs-v2.17.1-business-cycle2.md), so unlike the position
               at v2.9.0 — when clause (e) existed in no Approved text at all — the criteria this ruling
               is measured against are **settled**. That strengthens the evidence and changes no status:
               a settled criterion that nothing executes is still a criterion that nothing executes. **CODE
               v2.5.1 → v2.6.0 (In Review)** — the UT-0889 block and Doc 06 §3/§7 item 26 were read; the
               pin carries its **cycle-1 FAIL (94%, 0C/0H/1M/5L)** and the in-progress **v2.7.0** rework,
               because a bare pin to a failing version reads as settled evidence. The Medium is about
               stale "owed" statements in Doc 06 §7, **not** about UT-0889. **MTP v1.0.2 → v1.5.0 (In
               Review)** — §0.5 S4/S5 were read as re-cut for clause (e), together with §14. _(**v2.11.0,
               ISS-01 — CORRECTED, and the correction is recorded rather than the sentence rewritten.** This
               read "…§14, whose register records TC-3564..TC-3569 as minted and reserves TC-3570–TC-3699".
               **Doc 04 v1.5.0 said neither half.** Its §14 (line 2166) reserved **TC-3564–TC-3699** for
               the six unminted `TS-V1-*` suites, annotated "reserved at v1.1.0; **none minted**", and §0.4
               repeated the same range; **TC-3569 and TC-3570 appeared nowhere in the file**. The sentence
               was load-bearing — it was the stated justification for advancing the pin — and it erred in
               the harmful direction, reading as though the architect's register had already ratified the
               mint and narrowed the band. **Doc 04 v1.6.0 — Approved on 2026-09-06 (PASS 96%,
               04-test-strategy-master-plan-v1.6.0-technical-cycle2.md) — does exactly what the sentence
               claimed:** §14 records **TC-3564–TC-3567** in `TS-ADV-01…16`, **TC-3568** in `TS-SCAFFOLD`,
               **TC-3569** in `TS-ABSENCE`, and narrows the `TS-V1-*` reservation to **TC-3570–TC-3699**,
               noting that band "is itself being drawn on by **Doc 07 v2.7.0, in progress**". **The pin is
               therefore advanced to v1.6.0 and the claim now rests on the version that carries it.** The
               other half of the original justification — that §0.5 S4/S5 were read — was always true and
               is unaffected. **The mint was never in question:** ids continue from TC-3569, none reused,
               the band otherwise free, so **no id, link, count or ruling changes**. The identical sentence
               in Doc 07 v2.7.0 (its ISS-01) is corrected in the same touch, at Doc 07 v2.8.0.)_
               **TC v2.6.0 → v2.7.0** — same author, same day, delta read.
               **SDD and BKLG do NOT advance, for the unchanged reason:** advancing a pin asserts the
               delta was read, and neither was. Current versions, stated so no reader is misled: **SDD
               v2.13.0 — now Approved** (it was In Review when the v2.9.0 note above was written, so the
               §3.1 and §7 citations of "Doc 03 v2.13.0 §15, In Review, cycle 2 under way" are superseded
               on that one point and are annotated in place rather than rewritten); **BKLG v2.5.0
               (Approved)**; Doc 09 is `docs/09-release-notes.md` at **v1.9.0 (Approved)**. An SDD/BKLG
               pin-sync is still owed, and is still owed in Doc 07 §Source.)_
               _(v2.11.0: **two more pins advance, both on documents that have since been Approved.**
               **CODE v2.6.0 → v2.7.0 (Approved**, PASS 96%, 0C/0H/0M/3L**)** — ISS-03; the FAIL annotation
               is dropped because there is no longer a FAIL to annotate, and the v2.7.0 delta matters here
               for one reason: it added a **sixth `it`** to UT-0889, which is ISS-02. **MTP v1.5.0 →
               v1.6.0 (Approved**, PASS 96%**)** — ISS-01, above. **SDD and BKLG still do not advance**,
               for the unchanged reason: advancing a pin asserts the delta was read, and neither was.
               **Every source this matrix now pins is Approved** — SRS v2.17.1, SDD v2.13.0, BKLG v2.5.0,
               CODE v2.7.0, MTP v1.6.0, TC (Doc 07) at v2.8.0 In Review as this version's sibling. That is
               the first time that has been true since the FR-131 cascade opened on 2026-09-06, and it is
               worth stating plainly because several caveats in the v2.10.0 text above — "cited as current
               In-Review text, not as settled evidence" — are now **spent**. **It changes no ruling.** The
               FR-131 row was never open because its sources were provisional; it is open because the
               acknowledge control, the ballot surfaces and the Scenario 9 instrument do not exist. A
               settled criterion that nothing executes is still a criterion that nothing executes. The
               SDD/BKLG pin-sync is still owed, and is still owed in Doc 07 §Source.)_ _(v2.11.1, ISS-01: **that sentence was false of the block it sat above.** It named SDD v2.13.0, BKLG v2.5.0 and TC v2.8.0 while the `Source:` lines pinned SDD **v2.11.2**, BKLG **v2.3.0 (In Review)** and TC **v2.7.0** — and the same sentence in the v2.11.0 changelog carried the same defect. Corrected at v2.11.1 by advancing the pins, below.)_
               _(v2.11.1 pin note — **the pins now say what the sentence above says, and the SDD/BKLG
               pin-sync debt is DISCHARGED.** Three advances, each annotated with what was read.
               **SDD v2.11.2 → v2.13.0 (Approved)** — *scoped*: **§15**, where the architect states the
               FR-131 DES assignment this matrix records (DES-098 primary, DES-094 for the status-badge
               reach, DES-096 the ballot seam), and **§10.12.3 / DES-094 clause 9**. Those are the two
               places this matrix cites, they were read, and Doc 03 v2.13.0 is now Approved — which is
               why the "cited as current corrected text, not an approved source" caveat in the §3.1 FR-131
               row and §7 entry 117 is **spent**, and is annotated as spent rather than deleted.
Changelog:     v2.11.3 (2026-09-08) — **Rework cycle 5 of 5 — THE CAP — against
               artifacts/reviews/08-traceability-matrix-v2.11.2-technical-cycle4.md (FAIL 96%, 0C/0H/1M/1L).
               Both issues addressed, none carried. PATCH bump. NOTHING NORMATIVE MOVES: Must **138** ·
               COMPLETE **16** · OPEN **122** (11.6%) · G-PHASE3 **47** · stories meeting DoD **17 of 142**
               · test cases **485** designed, **230** with passing evidence (**136** inh. · **94** obs.) ·
               gaps **255** · suite **625/625** (R-19) — every one identical to v2.11.2, and FR-131 stays
               OPEN (G-PHASE3).** **If cycle 5 fails, the verdict becomes ESCALATED and the approver
               records a decision.**
               **Both survivors were in text v2.11.2 itself wrote, and both are one defect wearing two
               faces: a correction that did not reach everywhere it claimed to reach.** v2.11.2 fixed a
               census and then mis-stated, twice, how far the fix had travelled. That is worth naming
               before the fixes, because it is the third distinct instance of the same failure mode this
               document has produced in five cycles — v2.11.1's pin note announced an advance the
               `Source:` block never received; v2.11.2's changelog announced a conversion the Decision
               cell never received. **The remedy that generalises is mechanical, not attentional: after
               writing a claim about scope, grep the file for the thing the claim covers.** That sweep is
               now part of this version and its result is published below.
               **ISS-01 (Medium) FIXED — the live Gate-2 sign-off still published the retired denominator.**
               §9's tester row carries **two** cells: a **Decision** cell and a **Notes** cell. v2.11.2
               converted the Notes cell to "17 of 142" and left the Decision cell reading "**Must 16/138 ·
               stories 17/134** · both UNCHANGED" — while the v2.11.2 changelog asserted that every live
               "17 of 134" had become "17 of 142" in "the §6 DoD lead-in **and the §9 sign-off**".
               **"The §9 sign-off" is not one place**, and the cell left behind is the one a Gate-2 reader
               quotes: the Decision cell is the document's own one-line verdict on itself. The cell now
               reads **stories 17/142**. **The numerator is untouched — 17 stories meet the Definition of
               Done, before and after** — and "both UNCHANGED" remains exactly true: 16/138 and 17 are
               unchanged; only the denominator moved to the population this matrix pins. **The v2.11.2
               changelog claim is corrected where it was made**, annotated in place rather than rewritten,
               so the trail records that the claim outran the edit.
               **ISS-02 (Low) FIXED — the residue is EIGHT cells, not one.** `TD-RTM-04` read "**The live
               residue is one concrete cell:** §3.2's FR-050 row reads 'none' for its story". **I
               re-extracted every story cell mechanically rather than accept the count:** in §3.1,
               **FR-121, FR-125, FR-126, FR-127, FR-128, FR-129 and FR-133 each read "none"** in their
               `US` cell (column 5 of that table's eight); in §3.2, **FR-050** reads "**none**" in its
               story cell. **Eight cells — one for each untraced story**, which is what the disclosure
               should have said from the start: if eight stories are untraced, eight rows say so.
               Understating it as one made the debt look like a typo when it is a systematic gap.
               **FR-050 keeps its billing as the sharpest**, and the reason is unchanged: §9 tells the
               Product Owner they own "the FR-005/FR-049/**FR-050**/FR-052/FR-053 story gap", so it is the
               one instance already assigned to a named owner elsewhere in this file. **None of the eight
Changelog:     v2.14.0 (2026-09-21) — **Rework cycle 2 of 5: three stale subtotals, a closed row that
               did not carry its own evidence, and a completion rule finally written down.** Against
               `artifacts/reviews/08-traceability-matrix-v2.13.0-technical-cycle1.md` (FAIL 87%, 0C/2H/3M/3L,
               reviewer-qa). **All eight issues taken; none carried.** **MINOR bump per the house rule.**
               **NOT ONE RULING CHANGES AND NOT ONE COUNT MOVES:** 138 Must · **19** COMPLETE · **119**
               OPEN · 13.8% · non-Must **5 / 18** · total **24 / 137** · `G-PHASE3` **40** · `G-NOMECH`
               **19** · `G-TRACE` **32** · by-reason **120**, distinct **119** · stories **23 of 142** ·
               test cases **528 / 275 / 253**. Both hook signals still agree at **19 / 119**.
               **Every site changed, enumerated — sixteen sites, and these are they:** (1) header Version,
               Status and this entry; (2) the `Source:` block's Doc 07 pin (ISS-05); (3) this entry's
               "Thirteen"→"Fifteen" story line (ISS-04); (4) §1's completion rules, new **rule 4a**
               (ISS-03); (5) §3.1 **FR-036** row (ISS-02); (6) §3.1 **FR-037** row (ISS-03); (7) §3.1
               **FR-081** row (ISS-03); (8) §3.1 pre-v2.0.0 subtotal (ISS-01a); (9) §3.1 all-114 subtotal
               (ISS-01b); (10) §3.3 non-Must subtotal (ISS-01c); (11) §3.3 **FR-038** row — the
               both-markers defect (new, found while re-deriving ISS-01); (12) §4 v2.13.0 sweep (ISS-06);
               (13) §7 preamble v2.13.0 update (ISS-07); (14) §7 entry 17 (ISS-02); (15) §8 four
               change-impact rows (ISS-08); (16) §10 — no change, stated so the enumeration is complete.
               **ISS-01 — THE SWEEP. _(Device replaced at v2.16.0, ISS-C3-01. The v2.15.0 re-publication
               below — itself a replacement for v2.14.0's non-reproducing "15 hits" — anchored its count to
               "**this file**", which a reader runs against the published document and finds wrong. It is not
               wrong by carelessness: **the classification must quote the very strings it counts, so writing
               the claim changes what the claim measures.** That is a property of publishing a sweep INSIDE
               the corpus it sweeps, and no amount of re-counting fixes it. Both superseded texts are
               retained below as the dated records they are.)_**
               **THE CLAIM, anchored to a FIXED REFERENCE that writing cannot alter.** Command:
               `grep -n -E "16 complete|98 open|122 open" docs/08-traceability-matrix.md`
               **Against the v2.14.0 text** — reconstructible from `HEAD` `12fe4a6` plus the applied v2.13.0
               and v2.14.0 specs, or from the project-manager's backup — **it returns 14 lines and 21
               occurrences**, and the four classes sum to exactly that: **(a) quotations inside the
               corrections themselves — 5 lines, 12 occurrences** _(v2.16.0: published as 11 at v2.15.0; the
               five lines carry twelve, and the classes summed to 20 against a total asserted as 21 twice)_;
               **(b) dated historical records, correctly not rewritten — 7 lines, 7 occurrences**, including
               **§9's tester sign-off row** ("_Prior v2.12.3: Submitted — … Must rows…_"), the hit v2.14.0
               missed; **(c) a transition statement — 1 line, 1 occurrence**, §7's v2.13.0 note recording the
               heading move, where the old figure is the *from* side; **(d) a false positive — 1 line, 1
               occurrence**, FR-132's requirement text, where the match is the tail of "FR-**122** open tier".
               **12 + 7 + 1 + 1 = 21 over 5 + 7 + 1 + 1 = 14 lines.** **This claim is falsifiable and stays
               falsifiable**, because the reference is frozen: nothing written after it can move it.
               **THE LIVE FIGURE, published as an observation and NOT as the claim.** Run against the
               document as published at this version the same command returns **23 lines / 41
               occurrences**. The excess over 14 / 21 is **this correction's own text and v2.15.0's before
               it** — every paragraph that classifies the strings necessarily contains them. **The live count
               rises with each version that explains the sweep, and that is expected rather than wrong.**
               _(This sentence is deliberately written WITHOUT any of the three search strings, so that
               publishing the figure does not change the figure — which is exactly the trap the previous two
               versions fell into. It was computed after the last edit of this version was final and checked
               to be a fixed point.)_
               **THE INVARIANT, which is what actually matters and is stable under any amount of quotation:
               EVERY occurrence, at every version, is a quotation, a dated record, a transition's *from*
               side, or the FR-132 false positive. ZERO are live stale figures.** That is the finding; the
               totals above are only the evidence for it, and **the invariant is the thing a reader should
               check, because it cannot be broken by writing about it.**
               **AND THE INSTRUMENT THAT ACTUALLY FOUND THE THREE STALE SUBTOTALS WAS NEVER THIS GREP.** It
               was **deriving each subtotal from the ✅/☐ row markers beneath it** — re-run at v2.16.0 and
               unchanged: §3.1 above the pre-v2.0.0 subtotal → **54 rows, 14 ✅, 40 ☐**; §3.1 entire →
               **114 rows, 19 ✅, 95 ☐**; §3.2 → **24 rows, 0 ✅, 24 ☐**; §3.3 → **23 rows, 5 ✅,
               18 ☐**; Must total **138 · 19 · 119**, matching §9's two hook-parsed rows and `--audit`.
               **A derivation over markers is immune to the self-reference that defeats a grep over prose**,
               and that is why it is the instrument of record.
               _(The superseded v2.15.0 sweep text follows, retained as the dated record it is:)_
               **ISS-01 — THE SWEEP. _(Re-published at v2.15.0, ISS-C2-02, because the version below did
               not reproduce under its own grep. The command, its true output and the classification of every
               hit are given here; the superseded "15 hits" text is retained after them as the dated record
               it is.)_** **The command, so it can be re-run rather than trusted:**
               `grep -n -E "16 complete|98 open|122 open" docs/08-traceability-matrix.md`
               **Run against this file it returns 14 lines and 21 occurrences, and these are they, every one
               classified:** **(a) Quotations inside the corrections themselves — 5 lines, 11 occurrences:**
               the v2.14.0 Status record; the three lines of this changelog entry that name the grep terms and
               quote the old reconciliation; and **the corrected §3.1 all-114 subtotal**, whose annotation
               quotes "16 complete · 98 open" and "122 open of 138" six times while the line's **live figure
               reads 114 · 19 · 95**. **(b) Dated historical records, correctly not rewritten — 7 lines:**
               three earlier Status/Changelog entries carrying the Gate-2 verdict of their day; the v2.5.4
               changelog entry; §7's dated **v2.10.0** and **v2.11.0** update notes ("the gap-log total stays
               122 open Must rows"); and **§9's tester sign-off row, "_(Prior v2.12.3: Submitted — 122 open
               Must rows…)_"** — **the hit the v2.14.0 sweep MISSED, and the reason this sweep is
               re-published.** It is a dated prior-version record and is correctly left standing; what was
               wrong was its absence from a list claiming to be exhaustive. **(c) A transition statement — 1
               line:** §7's new v2.13.0 note, "Heading: all 122 open Must rows → all 119", where the old
               figure is the *from* side of a stated move. **(d) A false positive — 1 line:** FR-132's
               requirement text, where "122 open" is the tail of "FR-**122** open tier".
               **THE FINDING, AND IT IS UNCHANGED: ZERO live stale figures remain.** Every one of the 21
               occurrences is a quotation, a dated record, the *from* side of a transition, or a false
               positive. **That claim is now checkable by running the command above.**
               **WHY THE "15 HITS" BELOW DID NOT REPRODUCE, diagnosed rather than patched.** It **conflated
               the grep's HIT LIST with the list of SITES CORRECTED** — two different sets. **Two of the
               three sites published as LIVE hits match none of the three strings:** the pre-v2.0.0 subtotal
               read "**12 complete · 42 open**" and the non-Must subtotal "**4 complete · 19 open**". Neither
               contains `16 complete`, `98 open` or `122 open`, so a reader re-running the grep found the two
               headline corrections **absent from the hit list**. One line offered as historical
               ("122 **Must rows stay** open") matches none either. **Those three subtotals were not found by
               the grep at all — they were found by DERIVING each subtotal from the ✅/☐ row markers
               beneath it**, which is the instrument that actually works and which every corrected figure in
               v2.14.0 already cites. **The grep and the derivation are two different devices answering two
               different questions, and publishing one list under the other's name is what failed.** The
               derivation, stated separately and re-run at v2.15.0: §3.1 rows above the pre-v2.0.0 subtotal
               → **54 rows, 14 ✅, 40 ☐**; §3.1 entire → **114 rows, 19 ✅, 95 ☐**; §3.2 → **24 rows,
               0 ✅, 24 ☐**; §3.3 → **23 rows, 5 ✅, 18 ☐**; Must total **138 · 19 · 119**, matching
               §9's two hook-parsed rows and `--audit`. **This is the second time in one session that a list
               was derived from the author's intent instead of from the instrument** — Doc 07 v2.11.0's
               "thirteen sites" was the first — and the countermeasure is the same: **derive the list from
               the thing being measured, publish the command, and run it.**
               _(The superseded v2.14.0 sweep text follows, retained as the dated record it is:)_
               **ISS-01 — THE SWEEP, AS A FALSIFIABLE ENUMERATION RATHER THAN A COUNT OF SITES FIXED.**
               A grep for the stale trio (`16 complete` / `98 open` / `122 open`) returns **15 hits**.
               **3 are LIVE and all three are corrected:** §3.1 pre-v2.0.0 subtotal (line 2110)
               **12 · 42 → 14 · 40**; §3.1 all-114 subtotal (line 2186) **16 · 98 → 19 · 95** with its
               reconciliation **"122 open of 138" → "95 + 24 = 119 of 138"**; §3.3 non-Must subtotal
               (line 2248) **4 · 19 → 5 · 18**. **12 are HISTORICAL dated records and are deliberately NOT
               rewritten** — lines 66, 149 (retained Status records), 647, 858, 1128, 1172, 1660 (dated
               changelog entries), 2392, 2394 (§7's dated v2.10.0 / v2.11.0 update notes), plus line 2183,
               which is a **false positive**: the string "122 open" there is "FR-**122** open tier" inside
               FR-132's requirement text, not a count. **Rewriting a dated record to a figure it never used
               destroys the trail this document exists to keep**, which is why the split is published rather
               than the total. **Each corrected figure is DERIVED from the ✅/☐ row markers, not retyped:**
               §3.1 rows above line 2110 → 54 rows, **14** ✅; §3.1 entire → 114 rows, **19** ✅;
               §3.3 → 23 rows, **5** ✅ (after site 11 below).
               **ISS-01's by-product, and it is the FR-078 failure mode.** Re-deriving §3.3 returned **22
               rows, 4 complete** — not 23 and 5. Cause: **FR-038's row carries BOTH a ✅ and a ☐**,
               because my v2.13.0 annotation wrote "was ☐ Phase 3". A row with both markers is **silently
               uncountable**, which is exactly how **FR-078 disappeared from a recount at v2.5.4** — the
               incident this document already records. The Must count is unaffected (the hook reads §3.1 and
               §3.2 only), so **no published figure was ever wrong**; what was wrong is that the honest
               **5 / 18** could not be reproduced mechanically. Fixed by **removing the glyph, not the
               sentence**: "was ☐ Phase 3" → "was OPEN — Phase 3".
               **ISS-02 — what FR-036's row now carries, and why it did not before.** TC cell **+TC-3605**
               (withdrawal at any time before the ballot locks) and **+TC-3606** (the published minimum
               **GATES** the candidacy — `ENDORSEMENTS_SHORT` naming the shortfall); UT cell **+UT-0897**
               and **+UT-0898**. The status cell now **names which case carries which of the four clauses**.
               §7 entry 17 and this changelog are reconciled to the row. **The defect was that the argument
               and the cells disagreed**: the prose proved the clause from UT-0897 while the cells cited
               neither it nor any case carrying it, and Doc 07's `TC-3605` named FR-085 and not FR-036, so
               the backward trace dead-ended. **Both tests were always green — I re-ran them — and the row
               still should not have closed as published**, because a Must row that closes on evidence its
               own cells do not name is a row nobody can check. Doc 07 v2.11.0 carries the other half.
               **ISS-03 — the ruling, written down as `Completion rule 4a`.** FR-037 closed on a scope
               premise verified by inspection; FR-081 was refused for want of an assertion; nothing
               reconciled them. **Rule 4a: a scope premise established by a reproducible inspection MAY fix
               the EXTENT of an absence clause — but only where every site at which the protected datum
               exists is itself covered by a passing absence test. It may never discharge a positive
               obligation to record.** **Inspection can bound an absence; it cannot manufacture a record.**
               FR-037 is a prohibition and falls inside 4a — UT-0897, UT-0900 and UT-0901 cover every site
               holding an identity, and inspection fixes only that there is no second site. FR-081 is a
               positive obligation and falls outside it — there inspection **confirms the gap**. **Both rows
               now cite 4a and state which side they fall on. FR-037 stays CLOSED; FR-081 stays OPEN.**
               **The extent scan is published so it can be re-run:** `grep -rln` for
               `disclosures|realName|legalName|fullName|dateOfBirth|documentNumber` over `packages/*/src`,
               `services/*/src` and `apps/web/src` returns **5 files, and these are they** —
               `packages/sdk/src/candidates.js` (17 hits, the store and service),
               `apps/web/src/components/CandidateSelection.tsx` (8) and `apps/web/src/app/candidates/page.tsx`
               (1) (the surface), and `apps/web/src/i18n/en.ts` (2) and `ar.ts` (2), which are **label copy**
               (`legalNameField`, `legalNameHelp`), not storage. **All five are inside the candidacy flow;
               `packages/protocol`, `services/indexer` and every other `apps/web` route return nothing.**
               `ENROLMENT_UI` is `{dev: true, staging: false, prod: false}`. **The absence-scan `it` is
               ROUTED to the engineer as owed hardening, not required** — 4a discharges the clause today —
               and FR-037 carries the revisit flag.
               **The rest.** ISS-04: "Thirteen stories were checked" over **fifteen** ids — in the sentence
               immediately after the paragraph naming this defect class — now **Fifteen** (6 promoted +
               9 not = 15), agreeing with §6. ISS-05: the Doc 07 pin ended mid-word at "after that annot",
               leaving sentence, italic and parenthesis unclosed — **the truncation was in my own v2.13.0
               REPLACE block**, faithfully transcribed; the tail restored and the pin advanced to **Doc 07 v2.11.0** — **but the `TC-TRUMOCRACY (` group itself was NOT closed, and this entry said it was.** _(v2.15.0, ISS-C2-01: the pin line ran **7 open parens to 5 close** while this sentence, the Status and the pin's own annotation all claimed closure. The group is closed at v2.15.0 and the pin now ends `) ·` like its two siblings, which balance 12/12 and 3/3. **A version that names the group it failed to close and then asserts it closed it is the exact defect this version existed to retire.**)_
               ISS-06: §4 gains the **v2.13.0 sweep** — 17 new `UT` ids, 97 `it`s, mapped to
               TC-3592..TC-3619, material orphan count **0**. ISS-07: §7's preamble gains its **v2.13.0
               update** — entries **17, 18, 76 RETIRED**, entries **19, 56, 57, 58, 72, 84 REWRITTEN**,
               heading **122 → 119**. ISS-08: §8 gains **four** rows — the two ratified constants, the
               `ICandidateStore` v1→v2 seam swap, and the three recorded revisit triggers.
               v2.13.0 (2026-09-21) — **Candidate-selection traceability: nine Must rows ruled, three
               trace cells from a backlog this matrix has not re-read end to end is how the original
               defect began.
               **The sweep, run by me and published rather than asserted.** After building the corrections
               I grepped the whole file for every figure this version touches — `17/1`, "of 134",
               "of 142", "one concrete cell", "both UNCHANGED" — and classified every hit live or
               historical. **Result: exactly one live `17/134` (the §9 Decision cell, fixed here) and one
               live "one concrete cell" (`TD-RTM-04`, fixed here).** The other story-count figures are
               **historical**: the retained Status-block records, the dated changelog entries, the v2.2.4
               baseline and the per-drop DoD checks — all covered by the **denominator note** added at
               v2.11.2 beneath §6's checks, and none edited, because rewriting a dated record to a
               denominator it never used destroys the trail. **I also re-derived the census itself:** the
               eight untraced ids still return `grep -c` = 0 in this file, and §6's Stories row
               (**142 \| 134 \| 17 \| 125**) reconciles — 142 population, 134 traced, gaps 142 − 17 = 125.
               **No other cell contradicts the census.**
               **No suite re-run:** nothing testable changed, so **R-19 (2026-09-07, 625/625) stands** and
               no run id is minted. **The post-merge re-run owed since R-18 is still owed.**
               **Unchanged and still open:** `TD-RTM-01`, `TD-RTM-02`, `TD-RTM-03`, `TD-RTM-04`,
               `OPEN-27`, `ENROL-COPY (j)` — and the Gate-2 verdict: **122 open Must rows; Gate 2 is not
               ready.**
               **BKLG v2.3.0 → v2.5.0 (Approved)** — **version-only, NOT re-read**, and labelled
               differently from the SDD advance on purpose. It removes a false *In Review* status on a
               document Approved four versions ago; it does **not** claim a story-by-story read, and the
               `US-####` chains in §3.1/§3.2 are **not** re-verified against v2.5.0 by it, **and neither was the story census** _(v2.11.2, ISS-01: that omission is exactly what the cycle-3 reviewer found — Doc 05 v2.5.0 carries **142** stories and §6 was still publishing the 134-story census derived from BKLG v2.3.0, with **US-0135..US-0142** appearing nowhere in this matrix. **An accurate disclaimer does not make an inaccurate number accurate**; §6 now states the 142 population, names the eight untraced ids and registers `TD-RTM-04`)_. **That re-read
               is still owed**, as plainly as before. **TC v2.7.0 → v2.8.1 (In Review)** — Doc 07 is this
               document's sibling and both are reworked in the same cycle-3 touch; the body has cited
               v2.8.x since v2.11.0 (ISS-02).
               **Every pin in the block above is now either Approved or, for the sibling Doc 07, In Review
               and named as such** — which is what the sentence claimed and, until this version, was not
               true of the block. **It changes no ruling.** The FR-131 row was never open because its
               sources were provisional; it is open because the DES-098 acknowledge-to-proceed control,
               the SCR-13/SCR-14 ballot surfaces and the Scenario 9 instrument do not exist. **Settled
               pins do not close a Must row, and this note must not be read as if they did.**)_
               _(v2.12.0 pin note — **two pins advance on deltas actually read; two documents are re-pinned
               at their true status; nothing else moves.** **SRS v2.17.1 → v2.17.3 (Approved)** — *scoped*:
               **§4.46 FR-132** read clause by clause, because §(d) is the requirement the fifteen new cases
               verify and §(a)/(b)/(c)/(e) are the clauses that keep its row OPEN. _(v2.12.2, ISS-02:
               **fourteen**, not fifteen — TC-3586 enters at the §3.2 NFR-023 row only, per the v2.12.1 ISS-01
               correction. This v2.12.0 text is retained as the dated record it is and is **not rewritten**;
               what was missing was this annotation.)_ §4.45 and §8 Scenarios 8/9
               were **not** re-read; nothing here rests on a change to them. **CODE v2.7.0 → v2.8.1 (Approved)**
               — *scoped*: §3's `UT-0890` row (Count **15**, total **640**), §6's `enrolment_ui` row, §7 items
               **26(d)** and **28**. **Both were checked against the repository, not taken on assertion:** the
               `UT-0890` `describe` at `apps/web/test/safety-surfaces.test.tsx` line **430** was read `it` by
               `it`, `packages/protocol/src/flags.js` for the `ENROLMENT_UI` defaults and `permanentFlags()`,
               and `apps/web/src/app/verify/page.tsx` for the flag branch. **TC v2.8.1 → v2.9.0**, the sibling
               authored in this same touch. **SDD stays v2.13.0, MTP stays v1.6.0, BKLG stays v2.5.0** — none
               was re-read, and **the story-by-story BKLG re-read `TD-RTM-04` registers is still owed and is
               not attempted here.** **None of these advances closes anything.** FR-132 is not open because its
               sources were stale; it is open because §(a), §(b), §(c) and §(e) are unbuilt and §(d)'s notice
               lives on DES-098, which does not exist.)_
Last updated:  2026-09-21
Changelog:     v2.13.0 (2026-09-21) — **Candidate-selection traceability: nine Must rows ruled, three
               close, six reclassified. The first Must-count movement since v2.4.0.** Sources: Doc 03
               **v2.16.0** §10.13.14 (DES-027/028/066/067/076 amended to their Definition-A backing;
               **DES-107** and **DES-108** minted), Doc 06 **v2.11.1** §3 (`UT-0891`..`UT-0907`, suite 739),
               Doc 07 **v2.10.0** §5.7 (`TC-3592`..`TC-3619`, run **R-21**).
               **WHAT CLOSED, and why — clause by clause, applying the four completion rules exactly as
               v2.5.0 did for FR-079 and FR-090.** **FR-036** (self-nomination, region-scoped): self-only by
               construction (no nominee parameter — TC-3601), office region equals or contains residency and
               never the reverse (TC-3597, TC-3600), maturation checked before the seam (TC-3598, TC-3600),
               a **published** endorsement minimum returned on every endorsement and naming its shortfall
               (TC-3602, TC-3606), withdrawal permitted at any time before the ballot locks (TC-3605), and
               the surface carrying all of it honestly (TC-3615). **FR-037** (consent before publication;
               non-candidates never disclosed): consent is separate, explicit, recorded once, takes no
               verifier (TC-3599, TC-3603), refuses any actor but the candidate before any read or write
               (TC-3604), and **nobody who has not consented is named on any read or trail event** — the
               candidate's name enters at CONSENT_RECORDED and not before, endorsers, feedback casters and
               post-debate voters are never named (TC-3603, TC-3609), with the two-step crossing asserted in
               document order (TC-3614). **FR-085** (irrevocable for the term; withdrawal before close
               destroys the disclosures): TC-3411 (re-statused), TC-3599, TC-3605, TC-3614. **FR-038**
               (Should, non-gating): TC-3599 and TC-3614 carry its whole stated guarantee — the two facts
               stated **before** consent is given, in asserted document order.
               **WHAT DID NOT CLOSE, and on which clause.** **FR-039** — the office ballot's voter-scope
               guard and its tie-break field are designed and unbuilt (DES-076 rule 2); **there is no
               tie-break field in the election record at all**. **FR-065** — two clauses: the nullifier
               mechanism the requirement names, and unlinkability. **FR-066** — "recorded on the verifiable
               record" waits on DES-097 audit anchoring (Doc 13 S-8). **FR-067** — "refused **and logged**":
               the logging half. **FR-081** — "with its state (active/inactive)": no field, no read, no
               assertion. **FR-093** — the question phase and the office election. **Each of the six names
               its blocker in its §3.1 status cell and in its §7 entry, and each has a designed Blocked case
               waiting for it** (TC-3320/TC-3611's note, TC-3315/TC-3316, TC-3317, TC-3322, none, TC-3419)
               — **except FR-081's, which has no case at all**, because minting one Pass would fabricate
               coverage and minting one Blocked would imply the missing thing is an instrument when it is
               the product.
               **THE THREE RULINGS the architect referred here, stated as rulings.** (a) **FR-065's two
               clauses — both NOT satisfied in v1.** Doc 02 §16.3.1 scopes FR-065's v1 mechanism as "DB
               aggregate; aggregate public" and would, read alone, let the row close; **it is not read
               alone**, because the same row asserts v2 "Same" and divergence "N" for a requirement whose §4
               text demands unlinkability the operator database does not provide. That is a defect in the
               source, raised as **`TD-RTM-05`**, not a licence to close. (b) **FR-067's "and logged" — NOT
               satisfied.** A conjunction in a Must requirement is two obligations; capability absence
               discharges the refusal and cannot discharge the record. (c) **FR-081's "with its state" — NOT
               satisfied.** Doc 03 DES-107 rule 4 publishes a total stage→state mapping and calls its own
               position a view; completion rules 2 and 3 require a passing implementing test for the clause,
               and there is none. **FR-085's TC-3476 is re-homed, not deleted** — see the Status line.
               **EVERY FIGURE A CLOSURE MOVES, re-derived and stated as arithmetic rather than asserted.**
               SUMMARY: Must COMPLETE **16 → 19**; Must OPEN **122 → 119**; completion **11.6% → 13.8%**
               (19/138 = 13.768%); non-Must complete/gap **4 / 19 → 5 / 18**; total complete/gap
               **20 / 141 → 24 / 137** (24 + 137 = 161). BY REASON: `G-PHASE3` **47 → 40** (−7: FR-036,
               FR-037, FR-085 close; FR-039, FR-065, FR-066, FR-067 move to `G-NOMECH`); `G-NOMECH`
               **13 → 19** (+6: those four plus FR-081 and FR-093); `G-TRACE` **34 → 32** (−2: FR-081 and
               FR-093 gain DES-107 and DES-108); `G-NOENV` 9, `G-EXTERNAL` 5, `G-UI` 6, `G-UNMEASURABLE` 4,
               `G-CIRCUIT` 5 unchanged; total **123 → 120** (40+19+9+5+6+4+5+32 = 120), distinct open
               **119**, the residual +1 still NFR-007's compound G-NOENV + G-TRACE classification. §6:
               FR — Must complete **16 → 19**, gaps **98 → 95**; FR — Should/Could complete **4 → 5**, gaps
               **15 → 14**; Stories DoD **17 → 23**, gaps **125 → 119**; Test cases **500 → 528** designed,
               **245 → 275** with evidence (inherited **136** unchanged, observed **109 → 139**), gaps
               **255 → 253**. §7: heading **122 → 119**; entries **17, 18, 76 RETIRED** with strike-through
               (the entry-70/FR-130 precedent); entries **19, 56, 57, 58, 72, 84 REWRITTEN** with the new
               code and the named blocker. §9: "Must rows with a complete chain" **16 / 138 → 19 / 138**;
               "Open Must rows" **122 → 119**; the suite row **640/640 → 739/739** with **275 of 521**
               carrying evidence, 15 not executed case-by-case, **231 cannot execute**, 275 + 15 + 231 = 521;
               the reviewer-qa row's G-TRACE enumeration **34 → 32** with FR-081 and FR-093 struck from the
               list; the Principal Architect row likewise. Gate rule footer **122 → 119**.
               **THE DoD CHECK WAS DONE STORY BY STORY, AND THE METHOD IS STATED because this is the recurring
               defect class in this repo — publishing a count of sites FIXED as a count of sites CHECKED.**
               Fifteen stories were checked _(v2.14.0, ISS-04: this read "**Thirteen**" over the fifteen ids enumerated beside it — 6 promoted + 9 not promoted = 15 — and §6 already said "Fifteen stories were in scope" over the same list. It appeared in the sentence immediately after the one naming this defect class. The word is now derived from the list it introduces)_: US-0046, US-0047, US-0048, US-0049, US-0050, US-0051, US-0052,
               US-0074, US-0075, US-0076, US-0077, US-0091, US-0095, US-0103 and US-0132. Each was resolved
               by an id diff over **this file**, so a story carrying a second row could not be promoted on
               one closure. **Six newly meet the bar: US-0046, US-0047** (FR-036 only) **· US-0048** (FR-036
               + FR-038, both close) **· US-0049** (FR-037 + FR-038, both close) **· US-0050** (FR-037 only)
               **· US-0095** (FR-085 only). **17 → 23 of 142.** **Nine do not, and the reason is named for
               each:** US-0051/US-0052 (FR-039 open), US-0074/US-0075 (FR-065), US-0076 (FR-066), US-0077
               (FR-067), US-0091 (FR-081), US-0103 (FR-093), and **US-0132**, which carries **six** rows —
               FR-082, FR-083, FR-084, FR-085, FR-086 and FR-124 — of which only FR-085 closes.
               **Two Lows folded from the v2.12.3 PASS** (ISS-01, ISS-02). **One new §10 entry: `TD-RTM-05`.**
               v2.12.3 (2026-09-20) — **Rework cycle 4 of 5 against
               artifacts/reviews/08-traceability-matrix-v2.12.2-technical-cycle3.md (FAIL 94%, 0C/0H/1M/2L;
               reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned, and Accountable for "RTM complete
               (zero gaps)"). All three issues taken; none carried. PATCH bump. Cycle 5 is the cap.**
               **NOT ONE COUNT, STATUS MARKER, GAP CODE OR VERDICT MOVES, re-verified with the hook’s own parser
               after the edit rather than asserted: Must 138 · COMPLETE 16 · OPEN 122, the two independent signals
               AGREE · G-PHASE3 47 · G-TRACE 34 · by-reason 47+13+9+5+6+4+5+34 = 123 against 122 distinct open
               rows · stories 142 | 134 | 17 | 125 · Must-FR subtotal 114 · 16 · 98 · test cases 500 designed ·
               245 with passing evidence (136 inh. · 109 obs.) · gaps 255 · 245 + 15 + 233 = 493 · suite 640/640
               (R-20) · Gate-2 verdict FAIL on all six rows. FR-131 and FR-132 both stay OPEN (G-PHASE3); the
               §3.2 NFR-023 row is not edited and stays G-UI with Complete 0.** No row is opened, closed,
               reclassified or re-owned; no `TC` is minted, retired or re-statused; §7 adds and retires no entry.
               **No suite re-run and no new run id — R-20 stands; no product, test or configuration path is
               touched.**
               **ISS-01 (Medium) — the v2.12.2 entry’s claim "§6 is not edited at all" was FALSE, and the dry run
               that passed it read the wrong boundary.** v2.12.2’s tenth changed line is old 1930 / new 2055, and
               that is a §6 line. The check asked "did §8 change?" — the label the cycle-2 report attached to the
               line and the OP-8 heading inherited — instead of asking the file which section contains the line.
               **The method is replaced, not just the sentence:** section boundaries are derived with
               `grep -n '^## '` against the file, never from a label in a spec, a report or an operation heading.
               At v2.12.2 that returns §6 **2013**, §7 **2059**, §8 **2233**, so §6 runs 2013–2058; on the
               reconstructed v2.12.1 file it returns §6 **1888**, §7 **1934**, so §6 ran 1888–1933 and old line
               1930 was a §6 line there too. **What is true of v2.12.2’s footprint:** ten original lines in three
               regions — the metadata block (eight), §6 (one), §9 (one); §6’s other **45** lines are
               byte-identical; and the one §6 line that changed is a **pure insertion** (a single word-level hunk,
               67 tokens added, nothing deleted or substituted), so the dated v2.12.0 sentence survives word for
               word and the DoD figure stays **17 of 142**. The by-reason table is **not** in §6 — it is in the
               SUMMARY block above §1 — and is untouched. The claim is corrected where it was made, and the
               superseded wording is retained beside it.
               **ISS-02 (Low) — taken.** "The merge is symmetric, which is why both counts land on 14" is
               **withdrawn**: symmetry is not a cause, the totals coincide by arithmetic, and the load-bearing
               sentence is the next one — "the classification, not the raw total, is the claim being made here".
               Line **1862** is regrouped out of the "in words" group (it enumerates separate ids in §4’s `it`-count
               provenance and makes no clause claim), and the quoted "14 hits on 12 lines" is noted as the cycle-2
               report wrote it against its own list of **13** distinct lines. **Annotated, not rewritten.**
               **ISS-03 (Low) — taken.** The P1/P2/P3 enumeration is bridged to the versions a reader can actually
               hold: the reverse-apply recipe for the uncommitted v2.12.1 state is cited
               (`artifacts/tester-2026-09-20T2100-doc08-c3-spec.md`, nine operations, ten changed lines, 2173 lines
               against 2298), and each command’s result is published at v2.12.1, v2.12.2 and v2.12.3 side by side,
               with the reason the totals rise — every correction quotes the pattern it corrects.
               **WHAT THIS VERSION STILL DOES NOT REPAIR.** `TD-RTM-01`, `TD-RTM-02`, `TD-RTM-03` and `TD-RTM-04`
               all stay **OPEN** and untouched. **The Gate-2 verdict table is not touched and stays FAIL on all six
               rows; 122 Must rows stay open and the gate stays shut.** The FR-132 claim-family sweep is **closed**
               by the cycle-3 ruling and is not re-run. Doc 07 v2.9.0 is Approved and is not reopened; Docs 03
               (v2.14.1) and 04 (v1.7.1) are the architect’s, both now Approved, and nothing in either is edited
               from here; `OPEN-30` stays routed to the project-manager.
               _(v2.12.2 record, retained:)_ v2.12.2 (2026-09-20) — **Rework cycle 3 of 5 against
               artifacts/reviews/08-traceability-matrix-v2.12.1-technical-cycle2.md (FAIL 93%, 0C/0H/1M/2L;
               reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned, and Accountable for "RTM complete
               (zero gaps)"). All three issues taken; none carried. PATCH bump.**
               **NOT ONE COUNT, STATUS MARKER, GAP CODE OR VERDICT MOVES, re-verified with the hook’s own parser
               after the edit rather than asserted: Must 138 · COMPLETE 16 · OPEN 122 (11.6%), the two independent
               signals AGREE · G-PHASE3 47 · G-TRACE 34 · stories meeting DoD 17 of 142 · Must-FR subtotal 114 ·
               16 · 98 · test cases 500 designed · 245 with passing evidence (136 inh. · 109 obs.) · gaps 255 ·
               245 + 15 + 233 = 493 · suite 640/640 (R-20) · Gate-2 verdict FAIL on all six rows. FR-131 and
               FR-132 both stay OPEN (G-PHASE3).** No row is opened, closed, reclassified or re-owned; no `TC` is
               minted, retired or re-statused; §7 adds and retires no entry; **§6’s dashboard table, TC-count
               convention notes and story-census disclosure are not edited — its other 45 lines are byte-identical
               — and §6’s `v2.12.0 DoD check` paragraph gains the ISS-02 annotation as a pure insertion in which no
               figure moves and the DoD figure stays 17 of 142**
               _(v2.12.3, ISS-01: this read "**§6 is not edited at all**", and that was **FALSE**. v2.12.2’s tenth
               changed line is old **1930** / new **2055** — the `v2.12.0 DoD check` paragraph — and it is a **§6**
               line. Boundaries derived from the file with `grep -n '^## '`: at v2.12.2, §6 **2013** · §7 **2059**
               · §8 **2233**, so §6 runs **2013–2058**; on the reconstructed v2.12.1 file, §6 **1888** · §7
               **1934**, so §6 ran **1888–1933** and old line 1930 sat inside it there too. The dry run that
               recorded this invariant as *verified* asked "did §8 change?" — the label the cycle-2 report attached
               to the line and the OP-8 heading inherited — instead of asking the file which section contains the
               line: **the method, not only the sentence, was defective, and the method is what is replaced.**
               Section boundaries are never again taken from a spec, a review report or an operation heading.
               **The footprint v2.12.2 actually had:** ten original lines — 5, 6, 26, 247, 411, 424, 446, 522,
               1930, 2149 — in three regions: the **metadata block** (lines 3–1512 of the v2.12.1 file; eight
               lines), **§6** (one line) and **§9** (one line), every one accounted for by an operation. The
               by-reason table is **not** in §6 — it sits under `### Must-row gaps by primary reason` in the
               SUMMARY block above §1 — and it is untouched. Provenance, recorded because it belongs in the record
               and not because it changes the severity: the "§8" label originated in the cycle-2 review report and
               was inherited here; the defect was live in this document, so it is corrected here.)_. **No
               suite re-run and no new run id — R-20 stands.**
               **ISS-01 (Medium) — the sixth site, in the `Source:` block.** The `SRS-TRUMOCRACY v2.17.3`
               scoped-read parenthetical still read "§(d) is the requirement **TC-3577..TC-3591** verify" — live,
               present-tense, and two lines above the Doc 07 pin v2.12.1 itself edited. It now states the
               **fourteen**: **TC-3577..TC-3585, TC-3587..TC-3591**. TC-3586 verifies `US-0133 · NFR-023 ·
               DES-085` and names no FR, so it enters at the §3.2 NFR-023 row only; **that row is not edited.**
               **The "all five places" claim is retired with it.** Five was a count of sites **fixed** published
               as a count of sites **checked**. This version publishes instead an enumeration reproducible in one
               command over the v2.12.1 file: the contiguous range `TC-3577..TC-3591` returns **14 occurrences on
               13 lines** — 4 defect descriptions, 7 minting/matrix-entry references, 1 Doc 07 suite filing, 1
               FR-131 "touches this entry not at all" record, and **1 live claim, at line 247**; the word
               "fifteen" returns **34 occurrences on 24 lines**, of which exactly **2** assert that fifteen cases
               verify §(d) and **both are v2.12.0-stamped records** (lines 410 and 1930 — ISS-02); and the
               co-occurrence net over `FR-132|§(d)` against `fifteen|fourteen|TC-35[789][0-9]` returns **18
               lines**, adding only FR-131 rows that match on `TC-3570..TC-3575` ids and carry no count claim.
               **There is no seventh site.** The full enumeration, with the classification of every hit and the
               one place it differs from the reviewer’s own, is in the `Status:` record above.
               **ISS-02 (Low) — taken.** Lines **410** (the v2.12.0 pin note) and **1930** (§6’s v2.12.0 DoD
               check _(v2.12.3, ISS-01: read "§8’s" at v2.12.2; §6 ran 1888–1933 in the v2.12.1 file)_) now carry the one-clause ISS-01 annotation — fourteen; TC-3586 enters at NFR-023 only.
               **Their dated text is annotated, not rewritten.**
               **ISS-03 (Low) — taken.** Recorded here rather than only at the pin: at v2.12.1 the `TC-TRUMOCRACY`
               pin advanced **In Review → Approved** on
               artifacts/reviews/07-test-cases-suites-v2.9.0-technical-cycle1.md (PASS 97%, 0C/0H/0M/4L),
               **version unchanged at v2.9.0 — a status-currency correction only, not a re-read.**
               **WHAT THIS VERSION STILL DOES NOT REPAIR.** `TD-RTM-01`, `TD-RTM-02`, `TD-RTM-03` and
               `TD-RTM-04` all stay **OPEN** and untouched. **The Gate-2 verdict table is not touched and stays
               FAIL on all six rows; 122 Must rows stay open and the gate stays shut.** Doc 07 v2.9.0 is Approved
               and is not reopened; Docs 03 and 04 are the architect’s and nothing in either is edited from here;
               `OPEN-30` stays routed to the project-manager.
               _(v2.12.1 record, retained:)_ v2.12.1 (2026-09-20) — **Rework cycle 2 of 5 against
               artifacts/reviews/08-traceability-matrix-v2.12.0-technical-cycle1.md (FAIL 92%, 0C/0H/3M/2L;
               reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned, and Accountable for "RTM complete
               (zero gaps)"). All five issues addressed. PATCH bump.**
               **NOT ONE COUNT, STATUS MARKER, GAP CODE OR VERDICT MOVES, and it was re-verified after the edit
               rather than asserted: Must 138 · COMPLETE 16 · OPEN 122 (11.6%) · G-PHASE3 47 · G-TRACE 34 ·
               stories meeting DoD 17 of 142 · Must-FR subtotal 114 · 16 · 98 · test cases 500 designed · 245
               with passing evidence (136 inh. · 109 obs.) · gaps 255 · suite 640/640 (R-20) · Gate-2 verdict
               FAIL. FR-131 and FR-132 both stay OPEN (G-PHASE3).** No row is opened, closed, reclassified or
               re-owned; no `TC` is minted, retired or re-statused; §7 adds and retires no entry. **No suite
               re-run — nothing testable changed, so R-20 stands and no run id is minted.**
               **ISS-01 (Medium) — an `FR-132 → TC-3586` link asserted that Doc 07 does not support.** Doc 07
               v2.9.0's TC-3586 row reads "Verifies `US-0133 · NFR-023 · DES-085`" and names **no FR**; it is the
               drop's DES-085 jargon scan, a readability check, not the §(d) honesty posture. Because v2.12.0
               wrote the FR-132 `TC` cell as the contiguous range **TC-3577..TC-3591**, the cell **silently
               absorbed** it and the row claimed **fifteen** cases where **fourteen** are FR-132 evidence.
               **This document had already ruled the identical question correctly one version earlier** — at
               v2.11.0, "TC-3576 verifies NFR-023 · DES-085, **not** FR-131 clause (e) … adds nothing to the
               FR-131 chain", and TC-3576 is correctly absent from FR-131's `TC` cell. **So the defect is a fresh
               instance of the `TD-RTM-03` class — Docs 07 and 08 disagreeing about which requirement a case
               verifies — created in the very version that discloses the old one.** **Fixed in all five places
               the claim was made:** §3.1's `TC` cell and evidence cell, §7 entry 118, the §9 gate row's v2.12.0
               parenthetical, and this changelog. _(v2.12.2, ISS-01: **five was the count of sites FIXED, not the
               count of sites CHECKED.** There was a **sixth** — the `Source:` block’s scoped-read parenthetical,
               live and present-tense — corrected at v2.12.2, where the sweep is stated as a reproducible pattern
               enumeration instead of a count of sites fixed.)_ The cell now reads **TC-3577..TC-3585, TC-3587..TC-3591**.
               **TC-3586 keeps the one link it genuinely has — the §3.2 NFR-023 row, which is NOT edited and
               stays `G-UI` with Complete 0.** The alternative — asserting the link in Doc 07 instead — was
               considered and rejected: Doc 07 v2.9.0 is **Approved** (PASS 97%, 0C/0H/0M/4L) and the reviewer
               ruled ISS-01 to be Doc 08's defect, not Doc 07's.
               **ISS-02 (Medium) — the §9 gate row stated its own denominator twice and differently, both in the
               present tense.** The headline read "245 of **493** … 245 + 15 + 233 = **493**"; three sentences
               later the same cell read "This row counts against **478** … §6's dashboard counts against **485**
               … §6's **254** … this row's **232**". §6 publishes **500** and **255**. **478 and 485 went stale
               by v2.12.0's own edit** — the recurring defect of this lineage, a correction that did not reach
               every place it claimed to reach, this time **inside the very cell the correction edited**, and §9
               is the cell a Gate-2 reader quotes. **Brought current in place** (not dated-and-retained, because
               two live denominators in one cell is the defect): this row **493**, §6's dashboard **500**, §6's
               **255** against this row's **233**, **the gap still 7 and still UNRECONCILED** — both sides moved
               by exactly +15 at v2.12.0 and neither was reconciled. The superseded series (478 / 477 / 471 / 465
               and 485 / 484) is kept in parentheses so the trail survives, and the "what is NOT in doubt"
               sentence — three drops behind at "224 … 619/619 … R-17" — now reads **245** and **640/640** on
               **R-20**. **The 465/456/463 analysis is labelled as the dated v2.6.1-era reasoning it is.**
               **ISS-03 (Medium) — FR-132's Requirement cell summarised only the DES-100 seam shape.** It read
               "IEligibilityVerifier allowlist-only action-type shape (DES-100)…", so **§(d) — the clause all
               fourteen new cases verify — appeared nowhere in the column that states the requirement**, and
               neither did the four unbuilt clauses the status cell rules on. **Restated from Doc 02 v2.17.3
               §4.46**, naming **(a)** the phone layer, **(b)** the government-ID check and verify-and-discard
               allowlist, **(c)** `subject_id_hash` deduplication, **(d)** the honesty posture (including the
               DES-098 duty that is why the row cannot close on it) and **(e)** vendor non-retention — with the
               DES-100 allowlist-only seam kept as **the sub-clause of the row it actually is**, in the same form
               FR-131 uses for its DES-096 seam half. **This is the repair this document already made for FR-131
               at v2.9.0**; it was survivable while the row cited two seam cases and is not with fourteen.
               **ISS-04 (Low) — TAKEN, not carried.** §10 is the register the rest of the document attributes its
               debts to, and it was the one section v2.12.0 did not refresh. **`TD-RTM-02`** now states the three
               live conventions as they are (Doc 07 §2 **493**; §6 **500** from **491** anchors − 1 + 10; Doc 07
               §10's third base, explicitly not re-derived) and its load-bearing figures as they are (**245** with
               passing evidence, the **640/640** suite on **R-20**). **`TD-RTM-03`** now says the NFR-023 row
               cites **four** cases and carries **two** evidence entries rather than "none". **Both keep their
               original raising dates; both stay OPEN; neither debt is paid — only its register is made current.**
               **ISS-05 (Low) — TAKEN here, and the same Low RIDES in Doc 07.** The clause-(e) carve-out was
               argued from the **surface** ("the `/verify` copy is enrolment copy") where Doc 02 §4.45 scopes it by
               **claim** ("This clause governs participation acts only"). **The ruling is unchanged and correct** —
               the reviewer re-read clause (e) itself and confirmed that no FR-131 link belongs on any of the
               fifteen — but the framing as written would license a future enrolment-page string that DID assert
               unknowability, and the shipped `en.verify.unavailableBody` names two participation acts in one
               sentence ("anyone can make an account, **join a party**, read, discuss and **support one**"), which
               is the proof the surface was never the boundary. Restated from the claim in the changelog and in §7
               entry 117. **Doc 07 v2.9.0 carries the identical Low, is Approved, and is NOT reopened for it — it
               rides to Doc 07's next touch.**
               **ROUTED, NOT FIXED — `OPEN-30`.** Doc 07 v2.9.0's own ISS-01 (Low) records that the free `TC` band
               is now **TC-3592–TC-3699** while **Doc 04 v1.6.0 §14 still reserves TC-3570–TC-3699** — 22 ids
               stale. The architect minted **`OPEN-30`** for precisely this, due "at the first touch after Doc 07
               v2.9.0 is Approved", **which has now happened**. §14 of Doc 04 is the architect's register, Doc 04
               is **In Review at v1.7.0**, and **nothing in it is edited from here.** Routed to the
               project-manager. **This document mints no `TC` at v2.12.1, so it consumes none of that band.**
               **WHAT THIS VERSION STILL DOES NOT REPAIR.** **`TD-RTM-01`** (UT-0841..UT-0848 each defined twice)
               — untouched; renumbering is product code. **`TD-RTM-02`** — its register is current, **the
               reconciliation is not done**, and doing it is a recount of every case in two documents.
               **`TD-RTM-04`** (US-0135..US-0142 untraced) — untouched; no case moves and the eight "none" story
               cells are not edited. **The Gate-2 verdict table is not touched and stays FAIL on all six rows.**
               _(v2.12.0 record, retained:)_ v2.12.0 (2026-09-20) — **Debt closure: the RTM rows for `UT-0890`, and the one carried Low.**
               **MINOR bump** — fifteen new cases enter the matrix. **Test-case figures are the only normative
               figures that move:** designed **485 → 500**, with passing evidence **230 → 245** (136 inh. ·
               **94 → 109** obs.), **gaps 255 — unchanged**, because every one of the fifteen carries evidence.
               Suite **625/625 (R-19) → 640/640 (R-20)**.
               **EVERYTHING ELSE IS UNCHANGED, and this was ruled row by row rather than assumed: Must 138 ·
               COMPLETE 16 · OPEN 122 (11.6%) · G-PHASE3 47 · G-TRACE 34 · stories meeting DoD 17 of 142 ·
               Must-FR subtotal 114 · 16 · 98 · Gate-2 verdict FAIL.** No row is opened, closed, reclassified
               or re-owned; no gap code, owner or phase changes; §7 adds and retires no entry.
               **Rows whose EVIDENCE changed (status unchanged in every case):** §3.1 **FR-132** — TC cell gains
               **TC-3577..TC-3585 and TC-3587..TC-3591 (fourteen of the fifteen)**, evidence cell gains `UT-0890`
               at **Pass (obs.)** on R-20; §3.2 **NFR-023**
               — TC cell gains **TC-3586** (the drop's DES-085 jargon scan) **and that is the only row it enters**,
               and the row stays **`G-UI`**
               with Complete **0**; §7 **entry 118** (FR-132) records the same and stays OPEN; §7 **entry 117**
               (FR-131) records that the drop touches it **not at all**.
               _(v2.12.1, ISS-01: this paragraph, the §3.1 `TC` and evidence cells, §7 entry 118 and the §9 gate
               row all read "gains **TC-3577..TC-3591**" at v2.12.0 — a contiguous range that silently absorbed
               **TC-3586**, whose Doc 07 v2.9.0 row verifies `US-0133 · NFR-023 · DES-085` and names no FR.
               **Fourteen** cases are FR-132 evidence, not fifteen. Corrected in all five places, on the
               **TC-3576** precedent this document set at v2.11.0.)_ _(v2.12.2, ISS-01: **six sites, not five** —
               the `Source:` block’s scoped-read parenthetical carried the same claim and the v2.12.1 sweep did
               not reach it. Corrected at v2.12.2, which states the sweep as a pattern enumeration rather than a
               count of sites fixed. No figure in the v2.12.0 entry above moves.)_
               **THE FR-131 QUESTION, ASKED PLAINLY AND ANSWERED PLAINLY: do any of the fifteen belong on the
               FR-131 row? No — and the reason is in Doc 02, not in a judgement call.** §4.45 clause (e) ends:
               "Personhood-enrolment and identity-verification claims are **expressly outside** clause (e)
               (FR-132 §(d); §16.4 H-16/H-17/H-18; Doc 02 §13 routing (j))." **The scope test is the CLAIM, not the
               surface:** clause (e) reaches a string only where the string asserts that a **participation act** —
               casting a vote; endorsing or backing a petition; joining or belonging to a party; supporting a
               party — is unknowable to Trumocracy. **None of the fifteen strings makes such a claim.** The five
               retired claims ("never leaves your phone", "and nothing else", "cannot be traced back to you",
               "never run by a government", "Everything happens on your phone") and the four replacement values
               are claims about **document handling and identity checking**, which §4.45 routes to FR-132 §(d).
               _(v2.12.1, ISS-05: this read "The `/verify` page is the enrolment surface … are enrolment claims",
               scoping the carve-out by **surface** where Doc 02 scopes it by **claim**. The ruling is unchanged
               and the neutral reviewer re-read clause (e) independently and confirmed that no FR-131 link belongs
               on any of the fifteen — but the surface framing would license a future enrolment-page string that
               DID assert unknowability, and `en.verify.unavailableBody` itself names two participation acts in
               one sentence: "anyone can make an account, **join a party**, read, discuss and **support one**".
               The surface was never the boundary. **Doc 07 v2.9.0 carries the same Low, is Approved, and is NOT
               reopened — it rides to Doc 07's next touch.**)_
               **So no FR-131 link is added, and the §3.1 FR-131 row is deliberately not
               edited** — nothing in it changes, and editing a row to record a non-change is how a reader comes
               to believe something moved. The non-change is recorded once, at §7 entry 117, which is the gap
               log's canonical place for it. **TC-3585 and TC-3591 do apply FR-131's four-word list**, but as
               an **instrument** over copy that clause (e) does not govern; both rows say so in Doc 07 §5.
               **FR-131 stays OPEN (G-PHASE3)** on exactly what it was already open on: the **DES-098
               acknowledge-to-proceed control does not exist** (Doc 06 §7 item 26(d)), SCR-13/SCR-14 are
               unbuilt, and Scenario 9 has no instrument (TC-3575, Blocked).
               **THE FR-132 QUESTION: does 16 become 17? No.** Ruled clause by clause against Doc 02 v2.17.3
               §4.46. **§(a) phone layer** — not built; no `phone_hash`, no one-account-per-verified-phone
               enforcement. TC-3588 verifies that the *copy* describing v1 ("nobody is checked at all") is true,
               which is not the same thing. **§(b) government-ID check and verify-and-discard allowlist** — not
               built; `StubIdDocumentChecker.IS_INSECURE_MOCK()` returns `true` and the Phase-1 vendor adapter
               is blocked on **CON-015**, which is why the route is dark at all. **§(c) `subject_id_hash`
               deduplication** — not built. **§(d) honesty posture** — **this is the clause the drop serves,
               and it is still not discharged**: §(d) requires that "the FR-131 honesty notice (**DES-098**)
               MUST carry" the same-document-deduplication statement, and **DES-098 does not exist**. TC-3587
               proves the fact is stated honestly on the `/verify` placeholder — the right fact on a surface
               that is not the one §(d) names. **§(e) vendor non-retention** — a procurement clause; no
               procurement has happened. **Completion rule 4 (the whole stated guarantee) therefore fails four
               ways over**, and rule 2/3 are irrelevant to a capability that is not built. **The row stays
               OPEN — G-PHASE3.** **`/verify` is flag-gated OFF above `dev`** (TC-3577), so nothing these cases
               guard is a shipped capability, and no honest reading of them moves a Gate-2 number.
               **Definition of Done — US-0133: NOT met, unchanged.** Its RTM row set (FR-122, FR-123, FR-132)
               does not close; FR-122 and FR-123 are untouched by this drop and stay stub-gated at
               `IS_INSECURE_MOCK=true`. **US-0134 is untouched** — no case here cites it. **Stories meeting the
               Definition of Done: 17 of 142 — unchanged.** See the v2.12.0 DoD check in §6.
               **Run R-20, and the qualification this row has carried since R-18 is DISCHARGED.** `npm test`
               from the repo root: **640 / 640 pass, 0 failed**, exit 0 — contracts **95** · protocol **151** ·
               sdk **244** · ui **18** · indexer **16** · web **116**. Then the UT-0890 block case by case:
               **15 passed, 26 skipped (41)**, every `it` name green individually, which is what earns all
               fifteen **Pass (obs.)** rather than Pass (inh.). **R-18 and R-19 were run against an uncommitted
               76-path working tree** and each recorded a post-merge re-run as owed; v2.11.0 said so in terms.
               **R-20 is against `HEAD` `18244e8` with `git status --porcelain` returning three paths — all
               session-governance records under `artifacts/` (the two review-assignment records and
               `memory-index.json`), none read by any test, and no modified product, test, configuration or
               document path.** The owed re-run is closed, and it closes on **640**, not R-19's 625, because
               the drop under test landed in between.
               **The carried Low (v2.11.3 PASS) is FOLDED, not carried:** `Last updated` read **2026-09-07**
               against a v2.11.3 dated 2026-09-08 and now reads **2026-09-20**, tracking this version.
               **WHAT THIS VERSION DOES NOT REPAIR — named, with the figures it touches that they bear on.**
               **`TD-RTM-01`** (UT-0841..UT-0848 each defined twice) — **untouched**; renumbering is product
               code and the tester must not edit it. **None of the fifteen new cases cites one of those eight
               ids**, so the §4 orphan zeroes are no less sound than they were. **`TD-RTM-02`** (three
               irreconcilable test-case denominators) — **this version moves figures it bears on and repairs
               nothing**: §6 moves **485 → 500** in its own expanded convention, §9 moves **478 → 493** in
               Doc 07 §2's row-anchor convention, and Doc 07 §10's overlap paragraph still counts on a third
               base. All three move by exactly **+15** and the three-way disagreement is **unchanged in
               character**. Reconciling them is a recount of every case in two documents, not a side-effect of
               a mint. **`TD-RTM-03`** (this matrix's NFR-023 row cites neither TC-3538 nor TC-3561) — **the
               debt is not paid and is arguably sharper now**: TC-3586 is added to that row, so it cites two
               of the four cases Doc 07 records as verifying NFR-023 and still omits the other two. Adding
               TC-3586 while the older two stay absent is deliberate — it is the case this version is
               responsible for — and the omission is re-stated in the row. **`TD-RTM-04`** (US-0135..US-0142
               untraced) — **untouched**; every new case cites **US-0133**, which is traced, so the census is
               neither improved nor worsened. The eight "none" story cells are not edited.
               **Two things deliberately NOT edited, so a reader does not read their silence as an oversight.**
               **(1) §5's `RISK-02` row is not extended.** Doc 07 files TC-3577..TC-3591 under `TS-ADV-02 ·
               RISK-02` to keep the FR-131/FR-132 honesty family in one suite, but §5 was **not** extended for
               TC-3570..TC-3576 either (v2.10.0/v2.11.0), and the row's verdict — "**Not mitigated at v1**" —
               turns on MACI being Phase 3, not on copy guards. Consistency with the immediately preceding
               drop is the reason; the placement caveat is recorded in Doc 07 v2.9.0's changelog. **(2) The
               §3.1 `SCR` cell for FR-132 still reads "none", although `/verify/` is a real UI surface** that
               Doc 03 §10.12 maps to **SCR-01** (pre-enrolment disclosure) and **SCR-02** (attestor choice &
               enrolment). **Assigning a screen to a requirement is the architect's (Doc 03 §5.2), not the
               tester's**, so no SCR link is asserted here. It changes nothing either way — FR-132 is OPEN on
               four unbuilt clauses, not on a missing screen id — and it is routed to Ravi Deshmukh.
               _(v2.11.3 was recorded in the `Status:` block rather than as a changelog entry; that record is
               retained above. v2.11.2 record, retained:)_ v2.11.2 (2026-09-07) — **Rework cycle 4 of 5 against
               artifacts/reviews/08-traceability-matrix-v2.11.1-technical-cycle3.md (FAIL 96%, 0C/0H/1M/1L).
               Both issues addressed, none carried. PATCH bump. NOTHING NORMATIVE MOVES: Must **138** ·
               COMPLETE **16** · OPEN **122** (11.6%) · G-PHASE3 **47** · test cases **485** designed,
               **230** with passing evidence (**136** inh. · **94** obs.), gaps **255** · suite **625/625**
               (R-19) — every one identical to v2.11.1, and FR-131 stays OPEN (G-PHASE3).** What changes is
               a **disclosure**: the Stories dimension is restated against the population this matrix
               actually pins.
               **ISS-01 (Medium) FIXED — a 142-story backlog pinned, a 134-story census published.** Doc 05
               **v2.5.0** states **142 stories** (§12 census: "142 stories = 75 carrying an SCR-##, …";
               "12 epics · 62 features · **142 stories**"). §6's Stories row read **"134 | 134 (all carry
               Gherkin AC) | 17 | 117"**. A mechanical id diff — every `US-####` in Doc 05 against every
               `US-####` in this file — returns **eight ids that appear nowhere in this matrix:
               US-0135, US-0136, US-0137, US-0138, US-0139, US-0140, US-0141, US-0142** (I re-derived this
               independently rather than accept the report: `grep -c` for those ids in this document
               returns **0**). The defect is not the 134 — it is that **"134 traced of 134" reads as a
               complete population** when the population is 142, in the one dimension of §6 whose
               denominator a Gate-2 reader has no other way to check.
               **Where it came from, stated plainly because it is mine.** v2.11.1 advanced the BKLG pin
               v2.3.0 → v2.5.0 and annotated it "**version-only, NOT re-read**", adding that the `US-####`
               chains were "**not** re-verified against v2.5.0 by it". That annotation was true, careful —
               and insufficient. **An accurate disclaimer does not make an inaccurate number accurate.**
               Advancing a pin changes the population a census is measured against, so a version-only pin
               advance carries a duty to re-check every count that depends on the pinned document, or to
               say in the count itself that it was not re-checked. I did neither. **The lesson is narrower
               and more useful than "be careful": a pin advance is a change to a denominator.**
               **The route taken, and what it deliberately does NOT do.** The reviewer offered
               disclose-and-register, and it is the right one: **the eight stories are named and the debt
               is registered; they are NOT traced at this version.** Tracing them means deriving eight
               chains — `BR → FR → DES → US → TC` — from a backlog this matrix has **not** re-read, which
               is a backlog sync and not a cycle-4 rework, and doing it here would repeat the original
               error in the opposite direction: asserting eight chains I have not verified. **Disclosure
               is honest; a fabricated chain is not.**
               **Restated, precisely:** §6 Stories row now reads **142 | 134 | 17 | 125** — population
               **142** (Doc 05 v2.5.0), **134** traced with rows in this matrix and all 134 carrying
               Gherkin AC, **8 untraced and named**, **17** meeting the Definition of Done, gaps
               142 − 17 = **125** (was 117 against the 134 denominator). Every **live** "17 of 134" becomes
               **"17 of 142"** — the §6 DoD lead-in and the §9 sign-off. _(v2.11.3, cycle-4 ISS-01: **that claim was not true when written.** §9's tester row has **two** cells; v2.11.2 converted the **Notes** cell and left the **Decision** cell — the one a Gate-2 reader quotes — reading "stories 17/134". Corrected at v2.11.3. **The lesson is the specific one, not a general resolution:** "the §9 sign-off" is not one place, and a conversion claim must name cells, not sections.)_ **Historical changelog entries and
               per-drop DoD checks keep their "17 of 134" wording and are covered by one blanket
               annotation** rather than twelve edits: each was true of the population known when written,
               and rewriting a dated record to a denominator it never used destroys the trail this
               document exists to keep. **The numerator never moved: 17 stories meet the DoD, before and
               after.** What moved is the honesty of the fraction.
               **No Must row can move on this finding, and that is verified rather than asserted.** The
               eight map to: **US-0135** → FR-121, **US-0136** → FR-125, **US-0137** → FR-133,
               **US-0138** → FR-126, **US-0139** → FR-127, **US-0140** → FR-128, **US-0141** → FR-129,
               **US-0142** → FR-050 (Doc 05 v2.4.0 mint line). Every one of those FR rows **already exists
               in §3.1/§3.2 and is already OPEN**: FR-121, FR-125, FR-126, FR-127, FR-128 and FR-129 are
               `☐ G-TRACE + G-PHASE3` (no DES assigned, no implementation), FR-133 is `☐ G-PHASE3`, and
               **FR-050 is a Should row**, not a Must. **A missing `US` link cannot close a row that is
               blocked on a missing `DES` and a missing implementation**, so Must COMPLETE stays **16 of
               138** and open Must stays **122**.
               **The sharpest instance, named because it is the one a reader will hit.** _(v2.11.3, cycle-4 ISS-02: **"the" sharpest was right; the implied singularity was not.** The residue is **eight** story cells reading "none" — FR-121, FR-125..FR-129 and FR-133 in §3.1, plus FR-050 here — one for each untraced story. FR-050 remains the sharpest because §9 names it in the Product Owner's story gap. Stated as eight at §6 and in `TD-RTM-04`.)_ §3.2's **FR-050**
               row reads `| FR-050 treasury ledger | Should | DES-033 | **none** | — | ☐ no story, no code |`
               — "**none**" for the story — while Doc 05 v2.5.0 has minted **US-0142** for exactly that
               requirement. §9 still tells the Product Owner they own "the FR-005/FR-049/**FR-050**/FR-052/
               FR-053 story gap", and for FR-050 that gap has been **partly answered by the backlog and not
               yet recorded here**. **That row is NOT edited at this version** — correcting it is part of
               the same re-read `TD-RTM-04` registers, and one cell fixed from a document I have not read
               end to end is how this defect started.
               **`TD-RTM-04` RAISED (§10) — mine, OPEN.** "The story census is derived from a backlog
               version this matrix no longer pins." Owner: tester (Ji-woo Park). Closes at the next backlog
               sync, when the eight get rows and the FR-050 story cell is re-derived.
               **ISS-02 (Low) FIXED — one pin, two scopes.** The SRS and SDD pins each carried a
               **scoped-read** annotation *and* a trailing **legacy section list** (SRS "§8 Gherkin"; SDD
               "§5.2, §10.13.10.1, §10.13.13, §15, §16"), naming two different section sets on one line, so
               a reader could take the trailing list as the scope that was read. The trailing lists are now
               labelled **"sections this matrix cites:"**, and the SRS pin's annotation is relabelled
               **scoped read** to match the SDD and MTP pins. **One pin now names one scope.** _(Doc 07
               v2.8.1 carries the identical Low as its single surviving issue. It is **not** fixed here:
               Doc 07 is **Approved**, and its reviewer routed that Low to "the next touch of the header
               block". Bumping an Approved document to clear a non-blocking Low would restart its review
               loop and buy nothing — it rides, as routed.)_
               **No suite re-run:** nothing testable changed, so **R-19 (2026-09-07, 625/625) stands** and
               no run id is minted. **The post-merge re-run owed since R-18 is still owed.**
               **Unchanged and still open:** `TD-RTM-01`, `TD-RTM-02`, `TD-RTM-03`, **`TD-RTM-04` (new)**,
               `OPEN-27`, `ENROL-COPY (j)` — and the Gate-2 verdict: **122 open Must rows; Gate 2 is not
               ready.**
               v2.11.1 (2026-09-07) — **Rework cycle 3 of 5 against
               artifacts/reviews/08-traceability-matrix-v2.11.0-technical-cycle2.md (FAIL 96%, 0C/0H/1M/2L).
               All three issues addressed, none carried. PATCH bump — every fix is in the header block.
               NOTHING MOVES: Must **138** · COMPLETE **16** · OPEN **122** (11.6%) · G-PHASE3 **47** ·
               stories meeting DoD **17 of 134** · test cases **485** designed, **230** with passing
               evidence (**136** inh. · **94** obs.), gaps **255** · suite **625/625** (R-19) — every
               figure identical to v2.11.0, and FR-131 stays OPEN (G-PHASE3).** No row, link, gap code,
               owner or phase changes anywhere in §3, §4, §5, §6, §7, §8, §9 or §10.
               **ISS-01 (Medium) FIXED — the matrix claimed every source it pins is Approved, and its own
               `Source:` block said otherwise.** The v2.11.0 pin note and changelog both read "Every source
               this matrix now pins is Approved — SRS v2.17.1, SDD v2.13.0, BKLG v2.5.0, CODE v2.7.0, MTP
               v1.6.0, TC (Doc 07) at v2.8.0". **The block pinned SDD v2.11.2, BKLG v2.3.0 (In Review) and
               TC v2.7.0.** The sentence named the versions it *should* have pinned and then did not pin
               them — a claim about the block, contradicted by the block, four lines above it. **This is
               the same defect as Doc 07 v2.8.0 ISS-01** (a pin note announcing an advance the Source line
               never received) and the same class as every Medium these three cycles have produced: **a
               statement that outran what it sat on.** Recording that plainly matters more than the fix,
               because the fix is trivial and the pattern is not. **Three pins advanced:** **SDD →
               v2.13.0 (Approved)** *(scoped: §15's FR-131 DES assignment and §10.12.3 / DES-094 clause 9
               — the two places this matrix cites)*; **BKLG → v2.5.0 (Approved)** *(**version-only, NOT
               re-read**)*; **TC → v2.8.1 (In Review**, this version's sibling**)**. **The BKLG advance is
               labelled differently on purpose:** it removes a false *In Review* status on a document
               Approved four versions ago, and it does **not** re-verify this matrix's `US-####` chains
               against v2.5.0 — that re-read is still owed and is still stated as owed. **The SDD/BKLG
               pin-sync debt, carried since v2.8.0, is DISCHARGED.**
               **A consequence worth naming rather than leaving implicit:** with SDD now pinned at **v2.13.0
               Approved**, the caveat the §3.1 FR-131 row and §7 entry 117 carry — that the DES assignment
               is "cited as current corrected text, **not an approved source**" — is **spent**. It is
               annotated as spent in the pin note rather than deleted from those cells, because the cells
               record why the caveat existed. **It closes nothing.** FR-131 was never open on account of a
               provisional source; it is open because the DES-098 acknowledge-to-proceed control, the
               SCR-13/SCR-14 surfaces and the Scenario 9 instrument do not exist. **A settled source and a
               built control are different things, and only the second one closes a Must row.**
               **ISS-02 (Low) FIXED — the TC pin said v2.7.0 while the body syncs to Doc 07 v2.8.x.**
               Advanced to **v2.8.1**, Doc 07's cycle-3 sibling, reworked in the same touch as this
               version. **ISS-03 (Low) FIXED — `Last updated: 2026-09-06` → 2026-09-07**, matching the
               v2.11.0 changelog, run R-19, §9's tests-green row and the sign-off row.
               **No suite re-run at this version, deliberately:** nothing testable changed, so **R-19
               (2026-09-07, 625/625) stands** and no run id is minted. **The post-merge re-run owed since
               R-18 is still owed** — the working tree is still uncommitted and reviewer-qa has not signed
               the merge.
               **Unchanged and still open:** `TD-RTM-01`, `TD-RTM-02`, `TD-RTM-03`, `OPEN-27`,
               `ENROL-COPY (j)`, and the Gate-2 verdict — **122 open Must rows; Gate 2 is not ready.**
               v2.11.0 (2026-09-07) — **Rework cycle 2 of 5 against
               artifacts/reviews/08-traceability-matrix-v2.10.0-technical-cycle1.md (FAIL 95%, 0C/0H/1M/2L).
               All three issues addressed, none carried. NOTHING MOVES: Must **138** · COMPLETE **16** ·
               OPEN **122** (11.6%) · G-PHASE3 **47** · stories meeting DoD **17 of 134** — every figure
               unchanged from v2.10.0, and FR-131 stays OPEN (G-PHASE3).** Test cases move: **484 → 485**
               designed and **229 → 230** with passing evidence (**136** inh. · **93 → 94** obs.); gaps
               **255**, unchanged. Suite **624/624 (R-18) → 625/625 (R-19)**.
               **ISS-01 (Medium) FIXED — the pin note claimed Doc 04 v1.5.0 §14 records something it does
               not.** The sentence — "§14, whose register records TC-3564..TC-3569 as minted and reserves
               TC-3570–TC-3699" — was the **stated justification for advancing the MTP pin**, which is what
               made it a Medium rather than a nit: it read as though the architect's register had already
               ratified the mint and narrowed the band, when Doc 04 v1.5.0 §14 reserved **TC-3564–TC-3699**
               annotated "**none minted**" and contained neither TC-3569 nor TC-3570. **Doc 04 v1.6.0 —
               Approved since (PASS 96%) — records exactly what the sentence claimed**, so the pin advances
               to v1.6.0 and the claim now rests on the version that carries it; the other half of the
               justification (that §0.5 S4/S5 were read) was always true. **The mint was never in question**
               — ids continue from TC-3569, none reused, the band otherwise free — so **no id, link, count
               or ruling changes**. The correction is **recorded in place**, not written over: the original
               sentence is quoted, what v1.5.0 actually said is stated, and what v1.6.0 now says is stated
               beside it. **This is the second version running in which a claim of mine outran its source**
               (TC-3573 at Doc 07 v2.8.0 is the other), and both were found the same way — by re-reading
               the source rather than the sentence. Worth naming as a pattern rather than fixing twice in
               silence.
               **ISS-02 (Low) FIXED — UT-0889 has SIX `it`s, and the sixth now has a case.** Doc 06 v2.7.0
               added a **DES-085 jargon scan** ahead of the five mapped ones. Doc 07 v2.8.0 mints
               **TC-3576** for it, so "one TC per independently defeatable assertion" describes the block
               again and the §4 sweep's zero is true of the file again. Corrected in **three** places here:
               the §4 v2.10.0 sweep, the §3.1 FR-131 evidence cell ("five `it`s green individually" → six),
               and the **§3.2 NFR-023 row**, which gains the TC-3576 link because that is what TC-3576
               verifies. **NFR-023 does NOT close, and the reason is the same shape as FR-131 Scenario 9:**
               TC-3576 is an **enumerated** scan over **two** strings, not the jargon scanner and readability
               check the row has waited for since v1.1.0. The row stays `G-UI`, its Complete count stays 0,
               and the NFR — Must line of §6 stays **24 / 23 / 0 / 24**.
               **`TD-RTM-03` RAISED (new, §10) — and it is mine, found while fixing ISS-02.** Doc 08's
               NFR-023 row cites **TC-2331, TC-2332** and reads "**none**" for evidence, while Doc 07 has
               carried **TC-3538** (UT-0868, membership jargon scan, Pass (inh.)) and **TC-3561** (UT-0884,
               proposals surface, Pass (inh.)) as verifying `NFR-023 · DES-085` since v2.3.0 and v2.4.0
               respectively. **The two documents disagree about which cases verify NFR-023** — the exact
               defect class Doc 07 v2.6.0 ISS-02 corrected in the opposite direction (a Doc 07 cell claiming
               an NFR-013 link Doc 08 did not carry). **Raised, not paid:** adding those two rows means
               re-deriving two other drops' evidence and re-checking whether either changes the row's `G-UI`
               classification, which is a recount and not a side-effect of this rework. **No status or count
               moves on it today** — NFR-023 is OPEN either way, so the defect is in the evidence trail, not
               in the verdict. Owner: tester (Ji-woo Park). OPEN.
               **ISS-03 (Low) FIXED — CODE pin → v2.7.0 (Approved).** With it, every source this matrix pins
               is now Approved for the first time since the FR-131 cascade opened _(v2.11.1, ISS-01: **false of the `Source:` block when written** — it still pinned SDD v2.11.2, BKLG v2.3.0 (In Review) and TC v2.7.0. True of the block from v2.11.1, which advances them)_; several "not settled
               evidence" caveats in the v2.10.0 text are spent and are marked so. **It changes no ruling** —
               the FR-131 row was never open because its sources were provisional.
               **Run R-19 (2026-09-07):** `npm test` **625 / 625, 0 failed**, exit 0 — web **101**; then the
               UT-0889 block case by case, **6 passed, 20 skipped (26)**. 624 → 625 is the sixth `it`.
               **Still an uncommitted working tree** (76 dirty paths); the post-merge re-run stays owed,
               as R-18 already said and as the reviewer independently confirmed by re-running the suite.
               **Rows whose EVIDENCE changed (status unchanged in every case):** §3.1 **FR-131** (six `it`s,
               R-19, TC-3576 named as adjacent-not-clause-(e) evidence), §3.2 **NFR-023** (TC-3576 link,
               still `G-UI`), §4 (sweep re-run), §6 (Test-cases row and convention note), §7 (update note),
               §9 (suite figure, sign-off), §10 (`TD-RTM-03`). **No Must row is touched.**
               v2.10.0 (2026-09-06) — **FR-131 reopened by Doc 02 clause (e) and re-closed
               through the loop as OPEN.** Not a rework cycle: a **requirement cascade**. The approver
               confirmed clause (e) on 2026-09-06 and instructed this matrix to reopen and re-close
               (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 item 3). **NOTHING CLOSES: Must 138 ·
               COMPLETE 16 · OPEN 122 (11.6%) · G-PHASE3 47 · stories meeting DoD 17 of 134 — every one
               unchanged.** Test cases move: **478 → 484** designed and **224 → 229** with passing
               evidence (**136** inh. · **88 → 93** obs.); gaps **254 → 255**, the +1 being TC-3575, which
               is minted **Blocked**. Suite **619/619 (R-17) → 624/624 (R-18)**.
               **THE RULING, ASKED PLAINLY AND ANSWERED PLAINLY: does clause (e) close FR-131? No. Does
               it close anything? No. Does 16 become 17? No.**
               **(1) The obligation count moves from ten to ELEVEN, and this is NOT a reversion of the
               v2.9.0 correction.** v2.9.0 corrected "eleven obligations" to **ten** because the eleventh
               item had been the **DES-096 seam half** — design this row carries, not an FR-131
               obligation. **That is still true and the seam half is still not an obligation.** The count
               moves to eleven because Doc 02 v2.17.0/v2.17.1 adds a **genuinely new lettered clause (e)**
               to §4.45. Ten + clause (e) = eleven; the seam half stays outside the count and is labelled
               as such wherever it appears.
               **(2) Clause (e) now has acceptance criteria, and they are what this matrix traces to.**
               Doc 02 **v2.17.1** added §8 FR-131 **Scenario 8** (any public-facing string describing a
               participation act, in any language; the grade-8 **reader test**, not a word list; the
               **public-by-design** rule; the safe harbour — state what is not published, state what our
               own records can see, **and make no contrary claim elsewhere in the same string**; and
               **where safe harbour and reader test disagree, the reader test governs**) and **Scenario 9**
               (the absence test: **every** public-facing surface, **every** language, README included;
               **zero** materials asserting or implying unknowability; **a claim with none of the four
               banned words still FAILS**). Without those, clause (e) had §4.45 prose and no Gherkin, and
               no `TC` was derivable at all.
               **(3) Scenario 8 — evidenced at five strings on three surfaces, and recorded as exactly
               that.** **UT-0889** → **TC-3570** (en `home.steps[1].body`), **TC-3571** (en
               `home.promises[0]`), **TC-3572** (both bound to the rendered landing page), **TC-3573** (the
               Arabic mirror), **TC-3574** (the sdk `AUTHORSHIP_REQUIRES_WORKER_TIER` refusal message) —
               all five **Pass (obs.)** on R-18. Already in this matrix: **TC-3535/UT-0869** (party-join
               copy — the pattern Scenario 8 names as the safe harbour) and **TC-3564..TC-3567/UT-0887**
               (the ballot banner, whose negation-aware guard the widened closing sentence preserves).
               **Eleven guarded strings in total.** **What is NOT evidenced even within Scenario 8:** its
               operative test is the **grade-8 reader test**, which governs over the safe harbour, and
               **no automated test in this repository applies a reader test** — UT-0889 asserts
               substrings. Nor does anything test the v2.17.1 "no contrary claim elsewhere in the same
               string" qualifier. Those halves rest on **inspection (I)**.
               **(4) Scenario 9 — BLOCKED, and this is the finding that keeps the row shut on clause (e)
               alone.** Scenario 9 quantifies over **every** public-facing surface in **every** language.
               That is a **population** obligation, and the only instrument specified for it is **Doc 04
               §0.5 S5** — the build-failing FR-131 claims denylist over `apps/web` and `packages/ui`,
               widened at MTP v1.5.0 to every participation act, every language, and to claims as well as
               words. **S5 is specified and not built.** The scans that do exist (UT-0857, UT-0868,
               UT-0884) are **DES-085 jargon** lists over enumerated per-drop strings; they are not the
               FR-131 denylist and would have caught **neither** string this drop fixed — which is exactly
               how "we never learn which party you support" survived the 2026-09-05 sweep. Doc 07 v2.7.0
               therefore mints **TC-3575** against Scenario 9 and records it **Blocked — instrument
               absent**. **This is the single most important line of this version:** the gap is now a
               named, traceable case rather than a paragraph of prose, and a Gate-2 verifier can see it
               without reading an argument. **Clause (e) is recorded PARTIALLY EVIDENCED, not met.**
               **(5) Two live questions sit inside clause (e)'s scope and neither is the tester's to
               answer.** **OPEN-27** (Doc 04 §13 → Ravi Deshmukh): the S5 `anon`-badge carve-out —
               `packages/ui/src/PrivacyStatus.tsx` `STATE_CONFIG.anon.title` = "Anonymous", subtitle
               "Nothing you do here is linked to you" — was reasoned against a **voting-scoped** FR-131,
               and two of the three contexts Doc 03 §10.12.3 clause 8 names for that pill (party-joining,
               endorsing) are now **participation acts**. Doc 03's re-open trigger (iii) wants an
               *unconditional* amendment and clause (e) is conditional, so the carve-out has **not**
               lapsed; it is a copy ruling for Doc 03. **ENROL-COPY (j)** (Doc 02 §13 → Priya
               Raghunathan): enrolment and identity-verification claims are **expressly outside** clause
               (e) — addressed by FR-132 §(d) and §16.4 H-16/H-17/H-18 — and whether those provisions
               reach the enrolment landing copy is itself the open question. **Neither is counted as
               coverage; neither is scored as a new gap.** Both are named so a Gate-2 verifier does not
               have to rediscover them.
               **(6) The six previously unmet obligations are untouched by this drop, and one alone keeps
               the row open.** The notice must appear **wherever a vote is cast** and on **SCR-13 /
               SCR-14** — both unbuilt (Doc 06 §7 #21), TC-3481 still Blocked; **"the voter MUST
               acknowledge the notice to proceed"** — the **DES-098 acknowledge-to-proceed control does
               not exist at all** (Doc 06 §7 item 26(d), owed SCR-13 story scope, listed as *unchanged by
               this record* in DECISIONS §10); "visible before confirmation" has no confirmation step to
               precede; WCAG 2.2 AA and screen-reader access are unevidenced (NFR-011 is G-UI); TC-3476
               and TC-3487 stay Blocked.
               **VERDICT: FR-131 stays OPEN — G-PHASE3. Of its ELEVEN obligations, (a), (b), (c) and the
               widened closing sentence are met at the copy layer; clause (e) is PARTIALLY EVIDENCED —
               Scenario 8 guarded at eleven strings, Scenario 9 Blocked at TC-3575; and six are unmet or
               unevidenced. Must COMPLETE stays 16 of 138; open Must stays 122.**
               **Definition of Done — US-0134: NOT met, unchanged.** It gains materially better evidence
               and no status. A story whose row closes on the tractable half of its requirement teaches
               everyone downstream to read the hard half as optional — the same reason v2.8.0 refused this
               row on the closing sentence.
               **Rows whose EVIDENCE changed (status unchanged in every case):** §3.1 **FR-131** — clause
               (e) added to the requirement summary, **UT-0889** and **TC-3570..TC-3575** added to the
               chain, the ruling recorded in the Status cell. §7 **entry 117** — the same in gap-log form;
               the entry stays live, its gap code, owner and phase unchanged. §4 — a v2.10.0 orphan sweep.
               §6 — the Test-cases row, its convention note and a v2.10.0 DoD check. §8 — one new
               change-impact row for clause (e). §9 — the suite figure and the tester sign-off. **No other
               row in this matrix is touched.**
               **Pins:** SRS → v2.17.1 (**Approved** — it passed cycle 2 on 2026-09-06, so clause (e) and
               its scenarios now sit in an Approved requirement text), CODE → v2.6.0 (In Review, cycle-1
               FAIL, v2.7.0 rework in progress), MTP → v1.5.0 (In Review, v1.6.0 rework in progress),
               TC → v2.7.0; SDD and BKLG deliberately not advanced. **ISS-C2-01 (the v2.9.0 Low)
               DISCHARGED.** `TD-RTM-01` and `TD-RTM-02` are unchanged and still open.
               v2.9.0 (2026-09-06) — **Rework cycle 2 against
               artifacts/reviews/08-traceability-matrix-v2.8.0-technical-cycle1.md (FAIL 85%,
               0C/2H/3M/3L). All eight issues addressed. NOTHING MOVES: Must **138** ·
               COMPLETE **16** · OPEN **122** (11.6%) · G-PHASE3 **47** · stories meeting DoD
               **17 of 134** · test cases **478** designed and **224** with passing evidence
               (**136** inh. · **88** obs.) · **254** not executed or not executable · suite
               **619/619** on run R-17 — every figure unchanged from v2.8.0. FR-131 stays **OPEN
               (G-PHASE3)** and US-0134 still does not meet the Definition of Done.** The reviewer
               re-derived that ruling independently from Doc 02 §4.45 and the shipped code and
               concurred with it; nothing in this version disturbs it.
               **ISS-01 (High) FIXED — four of v2.8.0's own additions were invisible when
               rendered.** The v2.8.0 notes on §3.1 **FR-124**, §3.1 **FR-131**, §3.2 **NFR-011**
               and the §4 orphan-sweep row were each written as an EXTRA cell beyond their table's
               header width — 9 cells against an 8-column header in §3.1, 8 against 7 in §3.2, 3
               against 2 in §4 — and not one of the four rows ended with a pipe, so a GFM renderer
               discarded them: a reader of the rendered matrix saw the v2.7.0 rows unchanged,
               including the entire FR-131 rule-by-rule ruling, which was the headline content of
               the version. Each note is folded into its row's existing final cell and each row now
               ends with `|`; cell counts were re-verified against every header. **No text was
               lost in the fold**, and no wording changed except where an issue below required it.
               **ISS-02 (High) FIXED — `DES-098` now appears in this matrix.** It appeared **zero**
               times in Doc 08 before this version, although Doc 02 §4.45 designs the honesty notice
               **as DES-098** and six of the cases this matrix cites for FR-131 (TC-3564..TC-3569)
               name it. Four corrections to the FR-131 row: **(i)** the DES cell now reads
               **DES-098** (the notice — primary) · **DES-094** (the status-badge reach TC-3568
               verifies) · DES-096 · ADR-024; **(ii)** the SCR cell reads **SCR-13, SCR-14 — both
               UNBUILT** instead of "none", so the gap is visible rather than absent; **(iii)** the
               requirement summary is restated from Doc 02 §4.45 — it had described the DES-096
               `IBallotService` seam and not the notice — with the seam clauses kept and labelled
               as the DES-096 half this row also tracks; **(iv)** "FR-131 has eleven obligations"
               is corrected to Doc 02 §4.45's **ten**, plus that seam half, which is not one of
               them. **The DES assignment is taken from Doc 03 v2.13.0 §15** (2026-09-06, **In
               Review**, cycle 2 of its neutral review under way), where the architect states the
               intended FR-131 assignment — DES-098 primary, DES-094 for the status-badge reach,
               DES-096 retained as the ballot seam — and routes it to the tester because Doc 08 is
               the tester's document. It is cited as **current corrected text, not as an approved
               source**, and it closes nothing: FR-131 stays OPEN on unbuilt controls and unbuilt
               surfaces. Naming two unbuilt screens in a trace cell moves no count either — §6's
               Screens row still reads 23 mapped / 0 verified.
               **ISS-03 (Medium) FIXED — the Gate-2 verdict's opening sentence is whole again.**
               v2.8.0 inserted its addendum **into the middle** of "…**16 close and 122 do not** —
               an 11.6% completion rate…", so the document's most load-bearing sentence rendered
               broken, with literal asterisks and a paragraph between the bold markers. The sentence
               is restored as one continuous sentence and the addendum now sits **below** the
               verdict, its text otherwise unchanged.
               **ISS-04 (Medium) FIXED — §10's `TD-RTM-02` entry now records what §6 and the
               changelog say it records.** The entry was still written on its v2.6.1 figures (Doc 07
               v2.4.4's **465**, the implied **456** anchors, §6's then-**463**/**472**, **217** with
               passing evidence, the **610/610** suite) and described a **two-way** disagreement,
               while §6 and the v2.8.0 changelog quoted it for a **three-way** one. Updated to the
               current figures — Doc 07 §2's **471**, this dashboard's **478**, and Doc 07 §10's
               overlap base (193 + 171 + 48 + 12 = **424**) — and to the three-way framing, with
               **224** cases carrying passing evidence and the **619/619** suite. **The raising
               date stays 2026-08-30 and the debt stays OPEN**: this is a truthful restatement of
               the defect, not a payment of it.
               **ISS-05 (Medium) FIXED — the FR-124 row's "approved design element" claim is
               retracted.** Doc 03 reads `Status: In Review`; v2.12.0 FAILED cycle 1 of its neutral
               technical review (89%, 0C/1H/2M/2L) and v2.13.0 is the rework, itself under cycle-2
               review, so DES-094 clause 9 may still move. The row now cites it as the **current
               corrected text of a design element, not an approved source** — the discipline this
               document's own changelog set for the whole version and then broke in that one line.
               **ISS-06 (Low) FIXED:** §7 entry 117's missing sentence break. It read "production ZK
               ballot pending **v2.8.0 (FR-131 honesty drop…)**", which literally says the
               production ZK ballot is pending v2.8.0. The break is inserted.
               **ISS-07 (Low) FIXED:** the §9 tester row's doubled italic close (`)_)_`) after the
               retained v2.5.0 record now closes once.
               **ISS-08 (Low) FIXED:** the NFR-013 row's stated reason read "no locale files";
               `apps/web/src/i18n/en.ts` and `ar.ts` exist and are shipped. Restated as "locale
               files exist but there is no locale-coverage or string-coverage gate and no RTL
               rendering evidence". **The G-UI verdict is unchanged** — only its reason was wrong.
               TC-3567 is deliberately **not** linked into the row: Doc 07 **v2.6.0** removed the
               NFR-013 claim from that case for the same reason (it reads two Arabic copy constants
               and exercises neither locale coverage nor RTL). The two documents now agree, which
               was the point of the finding.
               **Suite re-executed at rework time:** `npm test` from the repo root, 2026-09-06 —
               **619 / 619 pass, 0 failed**, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18
               · indexer 16 · web 95, identical to **R-17** package for package. No new run id is
               minted and no case is promoted; §9's suite figure is unchanged.
               **What this version does NOT do.** It does not close a row, reconcile
               `TD-RTM-02`, or advance `TD-RTM-01` (still engineer scope). It does not re-derive
               the §4 sweep's **288** observed/inherited population — that belongs with the
               `TD-RTM-02` recount and is still annotated rather than advanced. It does not treat
               Doc 03 v2.13.0, Doc 04 v1.4.0 or Doc 09 v1.6.0 as approved sources; all three are
               **In Review** and are cited as current corrected text only.
               Changelog:     v2.8.0 (2026-09-06) — **FR-131 honesty-drop traceability (Doc 06 v2.5.1 Approved;
               Doc 07 v2.5.0 sync; commit `0a5c542`, PR #19, merged to `main`). Evidence extended
               on four rows. NO Must row closes and NO authoritative count moves: Must **138** ·
               COMPLETE **16** · OPEN **122** (11.6%) — unchanged; stories meeting DoD **17 of 134**
               — unchanged.**
               **The FR-131 ruling, asked plainly and answered plainly: does 16 become 17? No.**
               FR-131 (SRS v2.16.3 §4.45) imposes **ten** distinct obligations. Ruled one at a time
               against the evidence that now exists: _(v2.9.0 correction — v2.8.0 wrote "eleven",
               counting the DES-096 seam half ruled as item (11) below as an eleventh FR-131
               obligation. It is not one; Doc 02 §4.45 has ten. The ruling itself is untouched —
               same items, same findings, same verdict.)_
               **(1) notice displayed wherever a vote is cast, before the ballot is confirmed —
               NOT MET.** SCR-13 (ballot booth) and SCR-14 (post-vote confirmation) are not built
               (Doc 06 §7 #21). A notice cannot be shown wherever a vote is cast in a product where
               no vote can yet be cast. **(2) content clause (a) — MET at the copy layer**
               (UT-0887 → TC-3565): "not anonymous", "not receipt-free", "not coercion-resistant",
               en and ar. **(3) clause (b) — MET at the copy layer** (TC-3565; also TC-3535/UT-0869
               for the join copy). **(4) clause (c) — MET at the copy layer** (TC-3565).
               **(5) clause (d), the open-tier non-counting disclosure — MET AT TWO SURFACES, NOT AT
               THE BALLOT.** All four sub-clauses render non-dismissably before the refusal at the
               parties-directory counting surface (TC-3534/UT-0864) and at the proposals
               ballot-admission surface (UT-0881/UT-0882) — but clause (d) names "casting a binding
               vote", and that surface does not exist. **TC-3481 stays Blocked.** **(6) visible
               before confirmation — NOT VERIFIABLE.** There is no confirmation step for it to
               precede. **(7) non-dismissable, "the voter MUST acknowledge the notice to proceed" —
               NOT MET, and this one alone keeps the row open.** The banner is non-dismissable (no
               dismiss control, asserted), but it has **no acknowledge control at all**: there is
               nothing for the voter to acknowledge and nothing gating "proceed". Doc 06 §7 item
               26(d) records this explicitly as owed SCR-13 story scope, not as part of the defect
               fix. Even if every surface existed, this clause would still be unbuilt.
               **(8) WCAG 2.2 AA (DES-081) and screen-reader accessible — NOT EVIDENCED.** No
               automated a11y gate and no screen-reader pass exists; NFR-011 is G-UI. `role="note"`
               and UT-0704’s accessible name are not AA conformance. **(9) appears on SCR-13 and
               SCR-14 — NOT MET** (both unbuilt). **(10) closing sentence, the four banned words and
               the no-v2-guarantees claim — NOW MET for the swept code and GUARDED against
               regression**, which is what this drop actually bought: TC-3564..TC-3567 (rendered
               banner + en/ar source), TC-3568 (the `ver` title), TC-3569 (the flag description),
               over the engineer’s sweep of `packages/*/src` and `apps/web/src`. **Not** met as
               stated for "README and all public-facing materials" — no test covers those. The
               **document set** is now clean: Doc 03 §13 and Doc 04 A-02.6 both carried the retired
               framing and both were corrected on 2026-09-06 (Doc 03 v2.12.0, Doc 04 v1.3.0), and
               Doc 09 v1.5.0 moved `REL-LIM-18` to CLOSED. A whitespace-normalised sweep of `docs/`
               finds **zero live assertions** of the retired framing; every survivor is a quotation
               inside a correction record. **Stated precisely, because it bears on how much weight
               this evidence carries: all three of those versions are In Review, not Approved** — none
               has a passing neutral technical review yet — so the document-set cleanup is MADE but
               not SETTLED, and this row cites them as current corrected text rather than as approved
               sources. It changes no ruling above: FR-131 stays open on unbuilt controls and unbuilt
               surfaces, which no document review can alter. **(11) — NOT an FR-131 obligation, and labelled as what it is (v2.9.0): the DES-096 seam half this row also tracks** (cast / silent change /
               deterministic tally-hash / refusal without `eligibilityRef` / embargo / audit-contract
               publication) — 5 of 6 pass at `IS_INSECURE_MOCK=true`; **TC-3487 is still Blocked**,
               as is TC-3476.
               **Verdict: FR-131 stays OPEN — G-PHASE3. Six of the ten FR-131 obligations are unmet or
               unevidenced, and two of them are unmet by absence of the thing itself, not absence of
               a test.** Closing this row on a banned-words fix would be the single most misleading
               thing this matrix could do about FR-131, because the clause that most protects a
               voter — you must acknowledge before you proceed — is exactly the one still missing.
               **Must rows COMPLETE stays 16; OPEN stays 122; gap-log entry 117 stays live.**
               **Definition of Done — US-0134: NOT met, unchanged.** Its RTM row (FR-131) does not
               close, so by CLAUDE.md the story is not done. **Stories meeting DoD: 17 of 134 —
               unchanged.** US-0132 and US-0133 are likewise unaffected (FR-124, FR-122/FR-123 all
               stay OPEN).
               **Rows whose EVIDENCE changed (status unchanged in every case):** §3.1 **FR-131** —
               TC-3564..TC-3569 and UT-0887/UT-0759/UT-0888 added, ruling recorded in the row;
               §3.1 **FR-124** — TC-3568 added (the title half of the DES-094 clause-7 rule whose
               subtitle half TC-3475/UT-0758 already covered); §3.2 **NFR-011** — the UT-0753
               citation corrected (the file moved and its expected `aria-label` changed from
               "Verified — private" to "Verified"); §5 **RISK-02** — TC-3564..TC-3567 added, verdict
               still "not mitigated at v1".
               **Counts that moved, and only these:** §6 dashboard Test cases 472 → **478**
               designed, 217 → **224** with passing evidence (129 → **136** inh. · 88 obs.
               unchanged), 255 → **254** not executed or not executable; §9 suite figure
               610/610 → **619/619** on run **R-17** (2026-09-06, tester-executed, exit 0 —
               contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95) with its case
               split 224 + 15 + 232 = **471**. Every requirement-row count, gap code tally, DoD
               figure and gate verdict is **unchanged**, and is stated as unchanged rather than
               left to inference.
               **Two of the 14 formally accepted Lows are PAID, because this version was editing
               their lines anyway.** **L-13** — §6 published "472 / 255" and asserted Doc 07’s
               anchor count unqualified with no pointer to `TD-RTM-02`; the pointer is now in the
               line. **L-2** — the §4 ⚠ caveat was a blockquote placed *inside* the §4 table,
               splitting its last three rows (including the `TD-07-01` record) from their header;
               the table is now contiguous and the blockquote sits below it. **L-3** (§7 entry 82’s
               owner naming only Priya Raghunathan where it should name Tomás Ferreira as well) and
               the remaining eleven wording and cross-reference nits are **not** in any line this
               version touches and remain accepted-and-carried, unchanged.
               **`TD-RTM-01` (the duplicate `UT-0841`..`UT-0848` definitions) stays OPEN and
               untouched** — renumbering is product code and therefore engineer scope; none of the
               six new cases cites one of those eight ids, so this version’s orphan sweep is
               unaffected by it. **`TD-RTM-02` (the three-way test-case denominator disagreement — Doc 07 §2’s 471, this document’s 478 and Doc 07 §10’s overlap base; 465 was Doc 07 v2.4.4’s superseded figure) also
               stays open**, and this version widens it by 6 on both sides rather than resolving it;
               the reconciliation is the tester’s owed work and is a document-wide recount, not a
               side-effect of an FR-131 drop.
               v2.7.0 (2026-08-30) — **Rework cycle 4 against
               artifacts/reviews/08-traceability-matrix-v2.6.1-technical-cycle4.md
               (FAIL 93%, 0C/0H/0M/20L — a SOFT fail: the severity row of the pass bar was
               satisfied for the first time in this loop, and it missed on the numeric bar alone,
               on twenty accumulated Lows. The reviewer recorded that no adjudication, count,
               status or normative statement needed to change.) Minor bump per the loop rule
               (v2.6.1 took a patch bump after a Medium-or-worse FAIL, which it was not entitled
               to). NO row status changed and NO authoritative count moved: Must 138 ·
               COMPLETE 16 · OPEN 122 (11.6%).**
               **The strongest carried Low — four cycles open — is FIXED, and it had real
               Gate-2 consequence.** §4's orphan check reported "`TC` citing a non-existent `UT`:
               **0**" and "`UT` with no `TC` mapping: **0 material**" with no pointer to §10, while
               §10 has warned since v2.5.4 that the `UT-0841`..`UT-0848` duplicate-definition
               collision corrupts **exactly those checks** — every one of them matches ids across
               files, so an id with two definitions resolves to whichever the checker found first.
               A Gate-2 verifier is meant to start at §4 and would have read two unconditional
               zeroes. Both are now conditioned: correct for every id except those eight,
               undetermined for those, sound again once the engineer renumbers.
               **NEW DEFECT RECORDED — `TD-RTM-02` (§10).** The v2.6.1 review carried a Low that §6
               and §9 use different denominators with no bridge. Writing that bridge showed the
               two cannot be bridged: **Doc 07 gives 465 and calls it the expanded count with the
               TC-3200 range already expanded — implying 456 anchors — while Doc 08 §6 gives 463
               anchors and derives 472. The documents disagree on both figures, by 7.** The
               comfortable close was "each is correct in its own convention"; it is not
               supportable, because 456 ≠ 463. Recorded, owned by the tester (who owns both
               documents), and to be reconciled before Gate 2. **No status, gap or count is
               affected** — 217 with passing evidence and the 610/610 suite were each re-derived
               independently at three reviews.
               **Bookkeeping fixes.** §7 entry 82's Owner cell named Tomas Ferreira for **Q15**,
               which Doc 03 §16 owns to **Priya Raghunathan (PO)**; the timeline-wiring half is
               named to Samuel Oyelaran. §9's architect cell described all 34 G-TRACE rows as
               "chains broken for want of a DES" — true of 33, **untrue of NFR-007**, which has
               DES-051 and carries `G-NOENV + G-TRACE` for a different reason — and pointed
               "below" at a row immediately above it. §3.1's FR-090 row attributed three claims to
               UT-0089/UT-0832; the **not-a-verification-gate** half is **UT-0834**'s (4th cycle).
               §6's TC-count note carried **two conflicting trailing clauses** accreted from
               different drops ("all 20 TS-PROPOSALS…" and "all 24 new cases…"), each giving a
               different reason and count for one figure (5th cycle). §8 dated the COUNTING_ACTION
               ratification to 2026-08-30; it was **ratified 2026-08-24** and *confirmed* on the
               30th — the confirmation's authority rests on the earlier ratification. An unclosed
               parenthesis introduced by the v2.6.1 correction is closed. Every `Source:` pin now
               carries its status: four Approved, two (BKLG, MTP) In Review.
               **Two v2.6.1 changelog claims WITHDRAWN as overstated.** (i) It said "Eight Lows
               carried"; the true figure was about **twelve**. (ii) It called the formatting Low
               "**now fully closed**" — the concatenation half was closed and verified, but the
               table-fracturing blank lines remain, and are carried again here. (iii) It said Doc
               03 v2.11.1 "**WITHDREW** the FR-107 → DES-106 claim"; v2.11.1 withdrew it in §15
               only — §5.2 and the §10.13.13 heading carried it until **v2.11.2**.
               v2.6.1 (2026-08-30) — **Rework cycle 3 against
               artifacts/reviews/08-traceability-matrix-v2.6.0-technical-cycle3.md (FAIL 86%,
               0C/1H/3M/12L). NO row status changed and NO authoritative count moved:
               Must 138 · COMPLETE 16 · OPEN 122 (11.6%).**
               **ISS-02 (High) FIXED — and the changelog claim that produced it is withdrawn.**
               v2.6.0 said "All three instances corrected". Two *different* errors were in play and
               v2.6.0 conflated them: the **phrase** ("v1 holds no vote") was indeed corrected in
               three places, but the **scope framing** was corrected in only ONE of three. §8
               carried the corrected both-versions rule while §3.1's FR-091 row still read "a
               v2-seam obligation, not a v1 test obligation" and §7 entry 82 still read "a build
               obligation at the v2 swap, not a v1 gap". The document therefore **asserted and
               denied the same normative MUST — strictly worse than the uniform error it
               replaced.** Both now state the rule Doc 03 v2.11.0 settled: the **ballot layer** is
               the sole authority in **both** versions (DES-096 database backing in v1,
               `Governor.State` at the v2 seam), and it is a build obligation rather than a v1 test
               obligation only because the proposals layer derives nothing yet.
               **ISS-01 (Medium) FIXED — introduced by v2.6.0's own repair.** The corrected
               Principal Architect cell assigned the architect Doc 03 §16 **Q17**, which belongs to
               **Ji-woo Park (tester — this document's author) + Samuel Oyelaran**. That is the
               **third consecutive cycle** in which a correction to this one block misassigned an
               owner. The cell now names only architect-owned work: the 34 live G-TRACE chains,
               OPEN-02/03/11, and the owed **DES-096 ballot-state accessor**.
               **ISS-03 (Medium) FIXED:** §7 entry 82 stated that a defeated window "terminates at
               DECISION" as **fact**, contradicting the warning box in the SDD version it pins —
               Doc 03 v2.11.1 records that `advanceStage()` consults no outcome and would advance a
               defeated window straight to IMPLEMENTATION. Now marked a design intention, not built
               behaviour.
               **ISS-04 (Medium) FIXED:** pin advanced SDD v2.11.0 → **v2.11.1** (and SRS to
               v2.16.2, now **Approved**). The v2.11.1 delta is **favourable and moves nothing
               here**: it WITHDREW the FR-107 → DES-106 claim that had contradicted this matrix —
               **so this document's FR-107 row was right and stands unchanged** — and it minted the
               owed DES-096 accessor, now carried in the architect's sign-off cell.
               **The Low that caused two Highs is now fully closed.** v2.6.0 split gap-log entries
               68/69; entries **125/126 were still concatenated**. All **126** gap-log rows now
               render as individual rows — verified mechanically, zero concatenations remain — so
               row-wise counts over §7 are trustworthy for the first time. Eight Lows carried
               (permitted by the pass bar), three of them on their third or fourth cycle: the
               duplicated §6 TC clause, the UT-0834/UT-0090 citations, and the table-fracturing
               blank lines.
               v2.6.0 (2026-08-30) — **Rework cycle 2 against
               artifacts/reviews/08-traceability-matrix-v2.5.4-technical-cycle2.md (FAIL 83%,
               0C/2H/4M/10L). Minor bump, as the loop requires after a Medium-or-worse FAIL —
               v2.5.4 took a patch bump it was not entitled to. NO row status changed and NO
               authoritative count moved: Must 138 · COMPLETE 16 · OPEN 122 (11.6%).**
               **Both new Highs were introduced BY the v2.5.4 corrections, and both drifted
               optimistic — the direction that matters.**
               **ISS-01 (High) FIXED — the G-TRACE count was 33; it is 34.** v2.5.4's correction
               replaced a stale "40" with "33" and justified it by asserting "FR-078/FR-079/FR-080
               closed". **FR-078 is not closed** — it is `☐ OPEN — G-TRACE + G-PHASE3` in §3.1 and
               live as §7 entry 69. **Root cause, and it is the instructive part: §7 entries 68 and
               69 were concatenated onto ONE PHYSICAL LINE**, so entry 69 never rendered as a row
               and no row-wise recount could see it. A formatting Low carried across three cycles
               produced a counting High whose effect was to **drop a live open Must row from the
               set the Accountable verifier is instructed to check**. The line break is fixed and
               the count re-derived mechanically: **34** = NFR-007 + 33 FRs, now enumerated in full
               rather than by range.
               **ISS-02 (High) FIXED — 233 was the wrong figure to call "passing evidence".**
               v2.5.4 wrote "233 of 465 carry passing evidence". Doc 07 §2 reports 233 as cases
               with an *implementing automated test*, **16 of which are `apps/web` cases that were
               not executed**. The row credited 16 cases with evidence they do not have and
               simultaneously reported 23 fewer unexecutable cases than this document's own §6
               dashboard. Now decomposed and made to sum: **217 with passing evidence + 16
               automated-but-unexecuted + 232 cannot execute = 465**, with 217 agreeing exactly
               with §6.
               **ISS-05/ISS-06 (Medium) FIXED — two cycle-1 fixes that v2.5.4 silently re-scoped
               instead of making.** §9's verdict row still read "**12** / 138" (correct: 16), and
               the Principal Architect sign-off row still assigned "the 15 missing DES links" —
               a set closed at Doc 03 **v1.1.0** (DES-064..DES-086), named in that cell for the
               whole life of this document. That row now carries the real outstanding set: the 34
               live G-TRACE chains, plus Doc 03 §16 Q17.
               **ISS-03/ISS-04 (Medium) FIXED — the SDD pin moved without a delta sweep.** v2.5.4
               advanced the pin v2.10.0→v2.11.0 while leaving the superseded framing in three
               places, including the **new §8 row**, which cited v2.10.0 by name and published the
               **v2-only** scope of the derivation rule. Doc 03 v2.11.0 had already corrected that:
               "v1 holds no ballot (ADR-024 §(b))" **mis-cited** — ADR-024 removes on-chain
               EXECUTION in v1, while DES-096 specifies a v1 ballot backing — so the rule now binds
               the ballot layer in **both** versions. All three instances corrected to the narrow
               true claim: **the proposals and debate layer** holds no vote.
               **Q16 RECORDED against FR-090 as a REVIST FLAG (Medium), not a gap.** Doc 03 §16
               Q16 / Doc 02 §13 (i) names FR-090 and is OPEN, but concerns **post-vote window
               resolution**, which FR-090's stated guarantee does not require and this layer does
               not hold — so all four completion rules still close and **the row stays ✅ COMPLETE,
               correctly**. Flagged in the FR-051/FR-130 pattern so it is not invisible: if the
               rule answering Q16 alters what "the same decision window" guarantees, this row and
               TC-3548/TC-3549 must be re-derived — and the answer must not be a window-closing
               capability, whose absence is the anti-capture control this row certifies.
               v2.5.4 (2026-08-30) — **Rework cycle 1 against
               artifacts/reviews/08-traceability-matrix-v2.5.3-technical-cycle1.md (FAIL 85%,
               0C/1H/6M/5L). NO row status changed and NO count moved by any fix: Must 138 ·
               COMPLETE 16 · OPEN 122 (11.6%), as at v2.5.2. Every fix below corrects a
               STATEMENT ABOUT the matrix, never the matrix.**
               **ISS-H (High) FIXED — the document asserted and denied the same fact.** §3.1's
               FR-091 row said the row stays open "for exactly one reason and no other" while §7
               gap-log entry 82 still read "**Also open:** … reconciliation owed" and still named
               the architect as owner of a stage-taxonomy reconciliation the 2026-08-30 ruling had
               discharged — and the contradiction lived in the register that ASSIGNS OWNERS, so it
               would have put an architect to work on a closed item. Entry 82's taxonomy item is
               now closed with the ruling; entry 81's "**Revisit if** the approver rules PROPOSING
               a counting action" is marked DISCHARGED (it never triggered); entry 71's residual
               (Doc 03 §10.12.5 class (i) staleness) is marked discharged — the architect closed
               it at Doc 03 v2.9.3.
               **ISS-03 (Medium) FIXED — a new open item was left unrecorded while the row claimed
               to have none.** The same ruling minted Doc 02 §13 (h) / Doc 03 §16 Q15 (FR-091's
               text does not say what becomes of a DEFEATED or CANCELLED decision), which this
               matrix recorded nowhere while asserting FR-091 had "no other" open item. Both the
               §3.1 row and §7 entry 82 now name Q15 explicitly and state precisely why it is
               **tracked but not a gap in this row**: it is a requirement-TEXT clarification owed
               to the product-owner, and the proposals layer holds no vote, so no window can be defeated and no
               test can turn on it. The claim is restated as "exactly ONE GAP" — accurate — rather
               than "one reason and no other", which was not.
               **Four carried count contradictions FIXED (Medium).** None was load-bearing and none
               moved a status; all were statements left behind by drops that changed the numbers
               around them. (1) §3.1's Must-FR subtotal still read "114 rows · 12 complete · 102
               open" from v2.2.2 — now 114 · 16 · 98, reconciled to §6 (98 FR + 24 NFR = 122 open).
               (2) §6's Definition-of-Done lead-in read "13 of 134 stories" while the per-drop
               checks below it had already reached 17 — the lead-in now gives 17 and the derivation
               (13 baseline → +US-0131 → +US-0089/US-0100 → +US-0090), and the 13-item list is
               relabelled the v2.2.4 baseline. (3) §9's gate row read "542/542 … 195 of 449 … 127
               cannot execute" — pre-proposals figures, stale on four of six packages; now 610/610
               (contracts 95 · protocol 150 · sdk 244 · ui 14 · indexer 16 · web 91), 233 of 465
               with evidence, 232 not executable. (4) §9 instructed reviewer-qa to verify "40
               G-TRACE rows FR-074..FR-081/FR-087..FR-111/FR-121/FR-125..FR-130" — both count and
               ranges stale (FR-078/079/080 and FR-130 closed; FR-077/FR-091/FR-092 reclassified
               G-TRACE→G-NOMECH once a DES was assigned). Now **33 live G-TRACE rows**, enumerated
               and derived mechanically from §7.
               **ISS-01 (Low, carried since v2.5.0) FIXED — with a second error found beside it.**
               §6's TC-count convention note opened with the stale "195 = 107+88" AND its anchor
               breakdown (299+70+19+29+24) summed to **441** while asserting 463 — the
               pre-proposals breakdown left under the post-proposals total. Both corrected: 463
               anchors including the 22 TS-PROPOSALS, and 217 = 129 inh. + 88 obs. Not carried a
               third time: a convention note that cannot be added up teaches a reader to distrust
               the table it explains.
               **Pins corrected (Medium/Low):** MTP v1.0.1→**v1.0.2** (stale — Doc 04 is at
               v1.0.2), TC v2.4.3→**v2.4.4**.
               **§8 change-impact row added (Low):** the v2-seam derivation obligation is now
               mirrored in §8, the RTM's designated home for forward-looking impact.
               **NEW DEFECT RECORDED (§10) — beyond the review brief, found by the reviewer:**
               **UT-0841..UT-0848 are each defined TWICE**, in apps/web/test/party-creation.test.tsx
               and packages/sdk/test/proposals.test.js, breaking CLAUDE.md's never-reuse ID rule.
               Verified independently. Renumbering is product code and belongs to the **engineer**;
               recorded here, routed, and NOT silently repaired by the tester.
               v2.5.3 (2026-08-30) — **Ruling sync only. NO row status changed and NO count moved:
               Must 138 · COMPLETE 16 · OPEN 122 (11.6%), identical to v2.5.2.** The two open
               questions this matrix carried as forward-looking caveats on the FR-090 and FR-091
               rows were both RULED by the human approver on 2026-08-30 (Rathish;
               artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md; applied at
               Doc 02 v2.16.0 and Doc 03 v2.10.0). Both rulings CONFIRM what was built and tested,
               so both caveats resolve WITHOUT moving a status — which is the outcome worth
               recording, because either could have moved one.
               **FR-090 (✅ COMPLETE, unchanged):** the revisit flag is **DISCHARGED**. It read
               "if the approver rules PROPOSING a counting action, this row and TC-3545 must be
               revisited"; the approver ruled the other way — PROPOSING is NOT an FR-123 counting
               action, because gating authorship on verification status is a participation
               restriction FR-020 prohibits. The FR-conformant reading closed at v2.5.0 is
               confirmed correct; the row and TC-3545 stand unchanged.
               **FR-091 (☐ OPEN — G-NOMECH, unchanged):** the taxonomy note is corrected. FR-091's
               stages and ADR-008's PROPOSAL_STATE are COMPLEMENTARY, each canonical at its own
               layer, so no reconciliation was owed in the sense of choosing between them; the
               published stage set is UNCHANGED, so the note's speculation that it "bears directly
               on what this row must test" is corrected — it bears on nothing here. The row now
               states plainly that it stays open for **exactly one reason**: the unwired "per
               published timelines" clause. The v2 seam rule (chain owns ballot state;
               VOTE/DECISION/IMPLEMENTATION derive from it) is recorded as a v2-seam obligation,
               not a v1 test obligation.
               **FR-092 (☐ OPEN — G-NOMECH, unchanged):** untouched by either ruling; still open on
               both counts (no ballot layer; no DES-097 anchoring). Source pins advanced
               (SRS v2.15.0→v2.16.0, SDD v2.9.3→v2.10.0, TC v2.4.2→v2.4.3). Housekeeping: v2.5.2
               technical cycle-1 review PASSED (97%, 0C/0H/0M/1L; ISS-01 Low carried — the §6
               convention note opens with a stale "195 = 107+88" while the authoritative dashboard
               table and the note's own later arithmetic correctly read 217 = 129+88; carried
               again here, as this version moves no count).
               v2.5.2 (2026-08-29) — **Source-pin sync only. No row status changed; no count moved.**
               Both upstream documents took a further rework cycle after Doc 08 v2.5.1 and are now
               **Approved at 100%**: SDD v2.9.2→**v2.9.3**, CODE v2.4.2→**v2.4.3**; TC pinned to
               Doc 07 **v2.4.2**. The tester read both deltas against every row decided at
               v2.5.0/v2.5.1 and confirms **neither bears on one**.
               **§7 routing DISCHARGED.** The residual recorded in the FR-080 row and routed to the
               architect at v2.5.1 — Doc 03 §10.12.5 class (i) still listing FR-080 as having "no
               dedicated SCR, no DES surface element" — is **closed at Doc 03 v2.9.3**: the row is
               struck through, DES-103 is named as the surface element and SCR-15 as the binding,
               and the contradicting Wireframe→SCR 3.6 row is aligned. Doc 03's own cycle-1 review
               raised the same entry independently. The FR-080 row now records the routing as
               discharged rather than open.
               **FR-080 — status UNCHANGED (COMPLETE), evidence strengthened.** Doc 06 v2.4.3
               widened `workerGateHow` to state both FR-080 facts at the **step-1 gate** as well
               as in the consent panel, and UT-0872 gained two assertions (no new UT id; suite
               unchanged at **610**; web 91/91 re-verified). This does **not** re-open or
               re-justify the closure: FR-080's normative clause is the disclosure "before a
               declaration is confirmed", and the **consent panel** is the clause-bearing surface —
               that was the basis at v2.5.1 and it is untouched. What the change fixes is a
               *sub-normative* honesty gap: the gate line is the standing reminder existing Workers
               see, and an initial impression narrower than the truth still misleads even when the
               binding disclosure later corrects it. Strictly a strengthening; the row would have
               closed without it.
               **No other row is affected.** FR-079, FR-090 (COMPLETE), FR-091, FR-092 (OPEN,
               G-NOMECH), FR-024, FR-122, FR-123, FR-077, FR-130, FR-064 all re-verified unchanged.
               Counts held constant and re-checked: Must **138** · COMPLETE **16** · OPEN **122** ·
               **11.6%** · total **20/141**; gaps by reason G-PHASE3 47 · G-NOMECH 13 · G-NOENV 9 ·
               G-EXTERNAL 5 · G-UI 6 · G-UNMEASURABLE 4 · G-CIRCUIT 5 · G-TRACE 34 (sum 123 against
               122 distinct open); stories meeting DoD **17/134**; TC **472** with **217** passing
               evidence.
               v2.5.1 (2026-08-29) — **FR-080 re-assessed and CLOSED.** The v2.5.0 rule-4 and rule-1 findings
               were acted on rather than filed: the engineer built the two-step informed-consent
               event (Doc 06 **v2.4.2**) and the architect bound **SCR-15 + SCR-12** to DES-103
               (Doc 03 **v2.9.2**), so both failures are gone at the root.
               **Rule 1** — DES-103 now binds SCR-15 (Nomination & disclosure consent; the
               §10.12.4 screen table records the Worker declaration as sharing that consent
               pattern) and SCR-12. **Rule 4** — verified by the tester IN THE COMPONENT, not from
               a description: 'declare-worker' sets consent-pending state ONLY, the SOLE call to
               onDeclareWorker is 'confirm-worker' inside the panel, and 'cancel-worker' returns
               to the gate recording nothing. The panel states, BEFORE confirmation, permanence
               ("This lasts for the whole term. You cannot undo it partway through." — duration
               AND irrevocability) and the participation record ("Your record of taking part in
               this party becomes public for the term — not only the proposals you put forward,
               but what you take part in" — the trailing clause closing exactly the narrow reading
               that failed at v2.5.0), plus no-approval. The filing form is unreachable while the
               panel shows (UT-0885), so "before … confirmed" has a real moment; declining records
               nothing (UT-0886), which is what makes it consent rather than an unavoidable
               notice. New TCs **TC-3562, TC-3563** (Doc 07 v2.4.1).
               RECORDED RESIDUAL, routed not hidden: Doc 03 §10.12.5 class (i) still lists FR-080
               as having "no dedicated SCR, no DES surface element, and no US explicitly covering
               the permanent/public" — two of the three are demonstrably resolved and the third is
               a shared-surface tidiness question, not a missing link. Rule 1 asks for AN SCR and
               one is bound; the stale debt entry is routed to the architect.
               ARITHMETIC: Must rows **138 unchanged**; COMPLETE **15 → 16**; OPEN **123 → 122**;
               completion 10.9% → **11.6%**; total rows 19/142 → **20/141**. **G-NOMECH 14 → 13**
               (FR-080 leaves); G-TRACE **34 unchanged**; by-reason total 124 → **123** against
               122 distinct open. §6: FR-Must **16/98**; Stories meeting DoD 16 → **17**
               (**US-0090** newly done); TC 470 → **472**, evidence 215 → **217** (129 inh. + 88
               obs.), not-executable **255 unchanged**. §7: heading 122; **entry 71 RETIRED** with
               a closure record; v2.5.1 note added. §9: verdict, breakdown, sign-off, reviewer-qa
               note and gate rule updated to 16/122. Pins SDD v2.9.1→**v2.9.2**, CODE
               v2.4.1→**v2.4.2**, TC v2.4.0→**v2.4.1**. Suite 608 → **610** (web 89 → 91).
               **Everything else from v2.5.0 stands unchanged:** FR-079 and FR-090 COMPLETE;
               FR-091 and FR-092 OPEN (G-NOMECH) for the reasons given there; FR-024, FR-122,
               FR-123 unchanged.
               v2.5.0 (2026-08-29) — Proposals & debate drop traceability (Doc 06 **v2.4.1**, commit c04b4f2;
               Doc 03 **v2.9.1** DES-103 tiers / DES-104 authorship & competing proposals /
               DES-105 deliberative lifecycle / DES-106 permanent decision trail, §10.13.13;
               TC-TRUMOCRACY **v2.4.0** sync, TS-PROPOSALS TC-3542..TC-3561). Five G-TRACE chain
               gaps paid down at once; the four completion rules applied to each row individually.
               **TWO ROWS CLOSE.** **FR-079 → COMPLETE** (was G-TRACE + G-PHASE3): DES-103 closes
               the chain and every clause is separately tested — exactly three tiers with no
               nameable fourth (UT-0088), automatic Supporter assignment on join, and
               votingWeightForTier() returning 1 for EVERY tier so no configuration can
               differentiate weight (FR-021 unchanged), with an unknown tier refused loudly rather
               than defaulted (UT-0087). FR-079 carries no UI clause, so no SCR is required for
               rule 1. **FR-090 → COMPLETE** (was G-TRACE + G-PHASE3): DES-104 + SCR-12 close the
               chain; public authorship, any-Worker-may-compete, and equal standing are each
               tested positively AND as capability-absence — no withdraw/reject/reorder/demote/
               merge/veto path for the first author, no weight/rank/priority field, isOriginal is
               provenance only, and differently-phrased spellings of one question group into ONE
               decision window, without which "same window" would be defeated by rephrasing.
               Carries a REVISIT FLAG for Doc 03 §10.13.13 open question (b).
               **THREE ROWS DO NOT CLOSE — reclassified G-TRACE → G-NOMECH.** **FR-080**: the
               self-declaration half is built, but rule 4 fails on the informed-consent clause —
               FR-080 requires the UI to state plainly BEFORE confirmation that Worker status is
               PERMANENT FOR THE TERM and makes the participation record public for the term; the
               shipped copy states publicity of what is put forward only, states permanence
               NOWHERE, and there is no confirmation step for a disclosure to precede. Rule 1 ALSO
               fails: FR-080 carries an explicit UI obligation so it needs an SCR, and DES-103
               binds none. **FR-091**: the ORDER guarantees are complete (eight stages one step at
               a time; skip/reverse/no-op/unknown refused; capability-absence at all three layers;
               deliberative stages produce records never outcomes), but rule 4 fails on
               "transitions executed by code per published timelines" — governance.js schedule() is
               not wired into the service and the demo advances by a button (Doc 06 §7 #25). The
               anti-capture half is done; the automation half is not. **FR-092**: the trail is
               genuinely append-only (ordered, un-rewritable, no delete path, copies on read,
               injected clock), but rule 4 fails on TWO grounds — (i) FR-092 enumerates the vote
               result, enacted consequence, implementation status and measured outcome, and this
               layer records none of them (TC-3558/UT-0845 asserts the service never casts, stores
               or counts a vote — correct design, and it leaves four of seven elements unrecorded);
               (ii) third-party reconstruction from public data alone needs DES-097 anchoring
               (Doc 06 §7 #24, Doc 13 S-8). The drop does not paper this over — the surface states
               plainly that the record is not yet independently checkable (UT-0883).
               **EVIDENCE EXTENDED, STATUS UNCHANGED:** FR-024 (already COMPLETE) gains the v1
               application-tier proof that the authoring rule is a pure function of tier taking no
               approver/reviewer/reason, and that content is never judged; FR-122 and FR-123 both
               stay **G-PHASE3** and gain the open-tier-may-deliberate evidence, the refusal that
               names what the member KEEPS (stillAMember/mayStillDeliberate), the BINDING_VOTE
               admission gate as the only seam call site, the non-dismissable coercion notice
               rendered BEFORE the ask, and the service never holding a vote.
               ARITHMETIC: Must rows **138 unchanged**; COMPLETE **13 → 15**; OPEN **125 → 123**;
               completion 9.4% → **10.9%**; total rows 17/144 → **19/142**. Gaps by reason:
               **G-TRACE 39 → 34** (all five rows leave), **G-NOMECH 11 → 14** (FR-080/091/092
               join); by-reason total 126 → **124** against 123 distinct open (NFR-007 compound
               still accounts for the +1). §6: FR-Must 13/101 → **15/99**; Stories meeting DoD
               14 → **16** (US-0089 and US-0100 newly done; US-0090/US-0101/US-0102 not); TC total
               450 → **470**, passing evidence 195 → **215** (127 inh. + 88 obs.), not-executable
               **255 unchanged** (all 20 new cases carry passing evidence, none Blocked). §7:
               heading 125 → 123; entries **70 and 81 RETIRED** with closure records; entries
               **71, 82, 83 reclassified** with their rule-4 reasons and owners re-pointed to the
               engineer/architect; v2.5.0 preamble note added. §9: gate verdict, breakdown,
               sign-off, reviewer-qa note and gate rule updated to 15/123. Pins: SDD v2.8.3 →
               **v2.9.1**, CODE v2.3.3 → **v2.4.1**, TC v2.3.2 → **v2.4.0**. Suite re-run by the
               tester: **608/608 green** (contracts 95 / protocol 150 / sdk 244 / ui 14 /
               indexer 16 / web 89), up from 542 by the drop's 66 new tests.
               v2.4.1 (2026-08-29) — Upstream refresh for Doc 03 v2.8.2/v2.8.3 and the `PREREQ-01` approver
               ruling (Rathish, 2026-08-29; artifacts/status/DECISIONS-2026-08-29-NONVIOLENCE-ENTRENCHMENT.md).
               Source pins SDD v2.8.1 → **v2.8.3** (+ §10.13.10.1) and TC v2.3.1 → **v2.3.2**.
               **NO STATUS AND NO MUST-ROW COUNT MOVED.** This version records new information
               about an open row; it does not re-adjudicate it. FR-077 stays exactly where the
               tester set it at v2.4.0: **OPEN, G-NOMECH**.
               FR-077 forward-trace row and gap-log entry 68 ENRICHED: the amendment-time
               mechanism has moved from *undesigned* to **designed-and-unbuilt**. Doc 03 v2.8.3
               §10.13.10.1 specifies (1) the charter as a CLAUSE MAP with the document hash
               derived from the map, so amendCharter amends only the clause it names and can no
               longer replace the whole document wearing one clause's name — the structural fix;
               (2) the non-violence clauseId as PLATFORM-IMMUTABLE at construction for every
               party, independent of founder choice; (3) amendments CARRYING THE TEXT they change
               so the contract verifies rather than trusts. Reviewer-qa independently reproduced
               both failure modes against Party.sol and found zero non-violence checks in any
               contract. The build is governed by **PREREQ-01** — a separately tracked BLOCKING
               PREREQUISITE to the on-chain governance increment, explicitly not folded into it —
               with DES-101 §10.13.10.1 rule 6's adversarial amendment test as closing evidence.
               That test is now minted as **TC-3541** (Doc 07 v2.3.2, status No mechanism), and
               added to FR-077's TC column so the row finally cites a case covering the clause
               that keeps it open. **PREREQ-01 governs WHEN the fix lands, not WHETHER the row
               closes:** the row closes when the clause-map refactor is built and TC-3541 passes.
               A design is not an implementation — the same principle applied to DES-097(b) at
               v2.4.0. Gap-log entry 68's owner column moves from "architect (design owed)" to
               "engineer (PREREQ-01 build)" and its phase target from "design fix required first"
               to "before the on-chain governance increment ships", because the design half is
               done. Recorded as NOT exploitable in v1 (no on-chain governance, ADR-024 §(b)) —
               no v1 work is blocked.
               VERIFIED UNCHANGED: Must rows **138**; COMPLETE **13**; OPEN **125**; completion
               **9.4%**; total rows **17/144**; gaps by reason G-PHASE3 47 · G-NOMECH 11 ·
               G-NOENV 9 · G-EXTERNAL 5 · G-UI 6 · G-UNMEASURABLE 4 · G-CIRCUIT 5 · G-TRACE 39
               (sum 126 against 125 distinct open); stories meeting DoD **14/134**. FR-130
               re-checked and still honestly recorded **COMPLETE** on DES-102 + SCR-09/SCR-11,
               with its v1 tamper-evidence residual and the revisit-when-on-chain-membership-goes-live
               flag intact. FR-064 untouched.
               The ONE figure that moved is a test-case count, not a requirement count: §6 TC
               total 449 → **450** and not-executed/not-executable 254 → **255**, because Doc 07
               v2.3.2 minted TC-3541. Passing evidence stays **195** — a No-mechanism case adds
               to the gap bucket, never to evidence. §9 sign-off NOT amended: no figure in it
               changed.
               v2.4.0 (2026-08-29) — DES paydown traceability (Doc 03 **v2.8.1 Approved**, technical cycle-2
               PASS 100%; TC-TRUMOCRACY v2.3.1 sync). The architect wrote DES-101, DES-102 and
               DES-097(b); this version applies the four completion rules to them and records
               **one closure, one reclassification, and one deliberate non-closure**.
               **FR-130 CLOSES → COMPLETE** (was G-TRACE). DES-102 (Doc 03 §10.13.11) supplies
               the missing design link and SCR-09/SCR-11 bind, so rule 1 is satisfied; rules 2-3
               were already satisfied. Rule 4 holds because every clause of the stated guarantee
               has its own passing test: cap at 100 ACTIVE members with the 101st refused
               unconditionally and a leave freeing exactly one slot (UT-0825, UT-0802..0805,
               UT-0862); automatic code-only lift on verified legal registration (UT-0809..0811);
               and capability-absence of any operator, admin, configuration or environment path
               that raises the cap (UT-0806). The v1 residual is recorded IN the row, not hidden:
               enforcement is at the application/Postgres write boundary — the only enforcement
               point v1 has (ADR-024 §(b)) — with audit-record publication giving tamper-EVIDENCE
               rather than tamper-PREVENTION; the v2 Party.join() guard (DES-102 rule 7) is owed,
               and Party.join() today increments memberCount with no cap check. That is an
               enforcement-TIER upgrade, not an unmet clause, and it is the same posture on which
               FR-011/FR-020/FR-022 already stand COMPLETE — holding FR-130 alone to a stricter
               bar would be special-pleading. **The row is flagged for revisit when on-chain
               membership goes live**, at which point the uncapped join becomes a live bypass.
               **FR-077 does NOT close — reclassified G-TRACE → G-NOMECH.** DES-101 (§10.13.10)
               closes its chain gap and the publication half passes at protocol + sdk + web, so
               rules 1-3 hold. **Rule 4 fails.** FR-077 requires refusal at publication AND at
               "every subsequent amendment"; only publication is verified, and nothing implements
               the amendment half at EITHER tier — there is no application charter-amendment path
               (validateDraft runs only at createDraft/publishDraft), and on-chain
               Party.amendCharter (packages/contracts/src/core/Party.sol ~line 350) overwrites
               charter.charterHash/charterCID after checking only immutableClause[clauseId]; it
               stores a hash and a CID and never sees the charter text, so a constitutional-tier
               amendment naming any other clauseId can install a charter with the clause stripped
               and nothing refuses it. Rule 4 is explicit that a fragment of a guarantee does not
               close a row. Found by the tester while applying the paydown — the architect's §15
               assessment considered the publication half only. Amendment-time clause verification
               is UNDESIGNED and is routed to the architect; a dedicated amendment-path TC is owed
               once a mechanism exists.
               **DES-097(b) closes nothing.** It specifies the IPartyStore→Postgres store that
               FR-010 and several other rows wait on; evidence notes updated, **no status
               improved** — a written design is not a running store, and retention duration,
               erasure handling and hash classification are PENDING CON-015.
               **FR-064 deliberately untouched** — DES-065 is v2 and unbuilt; the row stays
               exactly as v2.3.1 left it (gap-log entry 55, semantics/DES split).
               ARITHMETIC: Must rows 138 unchanged; **COMPLETE 12 → 13**; **OPEN 126 → 125**;
               completion 8.7% → 9.4%; total rows complete/gap 16/145 → 17/144. Gaps by reason:
               **G-TRACE 41 → 39** (FR-077 and FR-130 both leave); **G-NOMECH 10 → 11** (FR-077
               joins); by-reason total 127 → 126 against 125 distinct open (the NFR-007 compound
               classification still accounts for the excess of 1). §6 dashboard: FR-Must complete
               12 → 13, gaps 102 → 101; Stories meeting DoD 13 → 14. **DoD: US-0131 newly meets
               the bar** (FR-130 chain closes end to end); **US-0087 does not** and stays Partial
               (FR-077 open). §7: heading 126 → 125; entry 125 (FR-130) RETIRED with a closure
               record; entry 68 (FR-077) reclassified with the new blocker and the architect added
               as an owner; v2.4.0 preamble note added. §9: gate verdict, breakdown, tester
               sign-off, reviewer-qa note and the gate rule all updated to 13/125. Source pins:
               SDD v2.7.1 → **v2.8.1**, TC v2.3.0 → **v2.3.1**; SRS v2.15.0 and CODE v2.3.3
               already current. Suite re-run 2026-08-29: **542/542 green**, unchanged — no code
               changed in this increment.
               v2.3.1 (2026-08-29) — cycle-1 rework (08-traceability-matrix-v2.3.0-technical-cycle1.md; FAIL 97%, 0C/0H/1M/1L). ISS-01 (Medium): five stale FR-064-SEMANTICS references updated — the ruling (option (a) EXPLICIT-LEAVE; Rathish, Human Approver, 2026-08-29; Doc 02 v2.15.0 §4.6 Approved, business cycle-1 PASS 97%; Doc 06 v2.3.3 §7 #20 closed RESOLVED (a), technical cycle-1 PASS 98%) landed the same day but AFTER v2.3.0 was authored: (a) source pin SRS v2.13.0 → v2.15.0; (b) source pin CODE v2.3.2 → v2.3.3; (c) §3.1 FR-064 gap note — the semantics count is RESOLVED (requirement text now matches the built explicit-leave behaviour; auto-void deferred to DES-065 at the v2 seam swap), the row stays OPEN on DES-065 alone; (d) §7 gap-log entry 55 recorded as a SPLIT — semantics half RESOLVED by ruling, DES-065 half OPEN — NOT a close; (e) §9 tester sign-off "acquires a second blocker" sentence replaced with the split. ISS-02 (Low): §6 Stories dashboard cell corrected "12 meet the Definition of Done | 122" → "13 | 121" (the adjacent §6 text already listed 13; pre-existing drift from v2.2.5). Summary counts UNCHANGED: 12/138 Must complete, 126 open; 16/145 total — no row opens or closes in this rework.
               v2.3.0 (2026-08-29) — join/membership drop traceability (Doc 06 v2.3.2 Approved, technical cycle-3 PASS 97%; TC-TRUMOCRACY v2.3.0 sync). Forward-trace rows extended with TS-MEMBERSHIP evidence (TC-3517..TC-3540, 24 cases, all Pass (inh.) from Doc 06 v2.3.2; the tester also observed 542/542 green in the 2026-08-29 full-suite run, Doc 07 §9 R-12). **FR-020** TC/UT extended (TC-3517..TC-3520; UT-0819/0820 sdk, UT-0858/0866 web) — COMPLETE stays. **FR-022** TC/UT extended (TC-3521..TC-3522, TC-3526..TC-3527, TC-3536; UT-0823/0824/0829 sdk, UT-0860/0861 web) — COMPLETE stays. **FR-064** TC/UT extended (TC-3523..TC-3525; UT-0821/0822 sdk, UT-0859 web) and gap note REWRITTEN — app-side one-active-party is implemented and tested in the EXPLICIT-LEAVE form, but the Must row **stays OPEN on two independent counts**: (i) semantics — FR-064's text reads auto-void-on-join and Doc 06 §7 #20 records a TRACKED DECISION (Flag: FR-064-SEMANTICS) awaiting a product-owner ruling in Doc 02; (ii) design — the assigned DES-065 membership-scope nullifier is a v2/Phase-3 chain mechanism, unbuilt. **FR-122** TC/UT extended (TC-3530, TC-3532..TC-3534; UT-0826/0828/0830 sdk, UT-0863/0864 web) — G-PHASE3 stays. **FR-123** TC/UT extended (TC-3530..TC-3533, TC-3520; UT-0826/0827/0828/0830 sdk, UT-0863/0865/0866 web) — G-PHASE3 stays. **FR-130** TC/UT extended (TC-3528..TC-3529; UT-0825 sdk, UT-0862 web — cap now proven to bind on ACTIVE members, a leave frees exactly one slot) — G-TRACE stays: still no DES assigned in Doc 03 §5.2. **FR-131** TC/UT extended (TC-3534..TC-3535; UT-0864/0869 web) and gap note updated — the clause (d) four-clause non-dismissable notice is now BUILT and tested at the parties-directory counting surface, closing the substance of the previously-Blocked TC-3481 **at that surface only**; the SCR-13/SCR-14 ballot surfaces remain unbuilt (Doc 06 §7 #21), so G-PHASE3 stays. Should rows: **FR-013** TC/UT extended with the two DES-097 seam guards (TC-3539..TC-3540; UT-0831 expirePetitions interface-only, UT-0871 .d.ts shim sync) — already complete, evidence strengthened. **NOT extended: FR-021** (one-member-one-equal-vote) — this drop adds no vote-weight or tally evidence; claiming it would be fabricated coverage. **Summary counts UNCHANGED: Must rows 12 complete / 126 open; non-Must 4 / 19; total 16 / 145.** No Must row opens or closes; no new rows. **DoD: no story newly meets the bar** — US-0024/0025/0026/0027 already met it; US-0073 stays not-done (FR-064 open), US-0131 stays Partial (FR-130 open), US-0133/0134 stay not-done (FR-122/123/131 open). §6 dashboard: TC 425→449 (Doc 07 v2.3.0 expanded), passing evidence 171→195 (107 inh. + 88 obs.). §7 gap-log entries 55 (FR-064), 114 (FR-122), 115 (FR-123), 117 (FR-131), 125 (FR-130) updated; v2.3.0 update note added. §9 gate verdict and tester sign-off updated. Source pins: CODE v2.2.0→v2.3.2, TC v2.2.2→v2.3.0; BKLG v2.3.0, SRS v2.13.0, SDD v2.7.1 unchanged.
               v2.2.5 (2026-08-26) — cycle-1 rework (08-traceability-matrix-v2.2.4-technical-cycle1.md). ISS-01 (Medium): §6 dashboard FR — Should/Could row corrected from "3 complete | 16 gaps" to "4 complete | 15 gaps" — FR-013 Should row closed at v2.2.4 but table cell was not updated (narrative at §3.3 and subtotal note already correct at v2.2.4).
               v2.2.4 (2026-08-25) — party-creation drop traceability (Doc 06 v2.2.0 Approved; TC-TRUMOCRACY v2.2.2 sync). Forward-trace rows updated with TS-PARTY evidence (TC-3489..TC-3516, 28 inherited tests, all Pass (inh.) from Doc 06 v2.2.0): FR-010 TC/UT columns extended (G-NOMECH note updated — collision/emblem logic now implemented at IS_INSECURE_MOCK=true; Must row stays OPEN: production store pending DES-097 — **v2.4.0: DES-097(b) (Doc 03 v2.8.1 §10.13.12) now specifies that store** (IPartyStore→Postgres mapping, append-only membership log as the authoritative record, concurrency re-expression of the invariants the in-memory store gets free from single-threading, retention boundary, and the `IS_INSECURE_MOCK = false` promotion condition). **This is a build enabler and closes no row:** a written design is not a running store, retention duration / erasure / hash classification are PENDING CON-015, and no status improves on the strength of a specification); FR-011 TC/UT columns extended (COMPLETE stays); FR-018 TC/UT columns extended (G-NOMECH stays: dwell period absent); FR-020 TC/UT columns extended (COMPLETE stays); FR-077 TC/UT columns extended (gap updated G-TRACE+G-PHASE3 → G-TRACE only: code exists; Must row stays OPEN: DES not assigned); FR-130 TC/UT columns extended (gap updated G-TRACE+G-PHASE3 → G-TRACE only: code exists; Must row stays OPEN: DES not assigned). Should rows: FR-012 TC/UT extended (COMPLETE stays); FR-013 TC/UT extended — cooldown now tested — **FR-013 Should row CLOSES** (1 non-Must row newly complete; total complete 15→16). Summary: Must rows 12/126 unchanged; non-Must complete 3→4; non-Must gap 20→19; total 16/145. §6 dashboard: TC 397→425 (Doc 07 v2.2.2 expanded), passing evidence 143→171 (83 inh. + 88 obs.). DoD: US-0021 newly meets DoD (FR-013 Should chain closes). §7 gap-log entries 9/11/68/125 updated. Source pins: BKLG v2.2.0→v2.3.0, CODE v2.0.1→v2.2.0, TC v2.2.1→v2.2.2.
               v2.2.3 (2026-08-25) — cycle-3 rework (08-traceability-matrix-v2.2.2-technical-cycle3.md). ISS-01 (Medium): §3.1 heading corrected from "the 106 gating functional rows" to "the 114 gating functional rows". ISS-02 (Medium): Gate-2 verdict paragraph updated — five stale pre-v2.2.2 figures corrected to v2.2.2 actuals: 130→138 gating Must rows; 118→126 open Must rows; 9.2%→8.7% completion rate; 33→41 G-TRACE rows; 46→47 G-PHASE3 rows.
               v2.2.2 (2026-08-25) — cycle-2 rework (08-traceability-matrix-v2.2.1-technical-cycle2.md). ISS-01 (Medium): TC-3488 added to NFR-011 forward trace row (§3.2); UT-0753 (accessible-name aria-label, packages/ui/test/PrivacyStatus.test.tsx line 46) added as evidence; US-0132 added to NFR-011 US column; dashboard TC total 397 now correctly traced (was 396 actual). ISS-02 (Medium) + sweep of FR-121..FR-133 range: 8 absent Must FR rows added to §3.1 in numerical order — FR-121 (BR-020/BR-006, G-TRACE+G-PHASE3), FR-125 (BR-003/BR-006, G-TRACE+G-PHASE3), FR-126 (BR-009/BR-006, G-TRACE+G-PHASE3), FR-127 (BR-006/BR-009, G-TRACE+G-PHASE3), FR-128 (BR-009/BR-006, G-TRACE+G-PHASE3), FR-129 (BR-006/BR-012/BR-021, G-TRACE+G-PHASE3), FR-130 (BR-002/BR-012, US-0131, G-TRACE+G-PHASE3), FR-133 (BR-012/BR-003, DES-099, G-PHASE3 only). Arithmetic: Must FR 106→114 (+8); Must rows 130→138; open Must 118→126 (+8); completion 9.2%→8.7% (12/138); G-TRACE 34→41 (+7: FR-121/FR-125..FR-130); G-PHASE3 46→47 (+1: FR-133); by-reason total corrects 114→127 (distinct 118→126). §6 FR-Must row 106→114. §7 heading/preamble updated; entries 119–126 added. §9 gate verdict 12/130→12/138; open Must 118→126; reviewer-qa notes 118→126; tester sign-off 118→126; gate rule footnote 118→126.
               v2.2.1 (2026-08-25) — cycle-1 rework (08-traceability-matrix-v2.2.0-technical-cycle1.md). ISS-01 (Medium): §9 tester sign-off row updated from stale v2.0.1/2026-08-12/113 to v2.2.1/2026-08-25/118; gate-rule footnote updated from 113 to 118 — both now internally consistent with the §9 summary table. ISS-02 (Low): Stories 134 verified correct against Doc 05 v2.2.0 (Doc 05 baseline at v2.1.0 was 131, not 130; 131 + 3 new US-0132..0134 = 134; reviewer arithmetic 130+3=133 used stale baseline; no count change). TC sync from Doc 07 v2.2.1: TC total 396→397 (TC-3488 added), passing evidence 142→143 (55 inh. · 88 obs.), anchor count 387→388. TC-count convention note updated.
               v2.2.0 (2026-08-25) — TC-TRUMOCRACY v2.2.0 sync: 5 new Must FR rows added (FR-122, FR-123, FR-124, FR-131, FR-132) via US-0132..US-0134 (Doc 05 v2.2.0). FR-082..FR-086 rows updated: DES-093/DES-094 assigned (G-TRACE removed; G-PHASE3 retained; US-0132 added; new TCs TC-3470/TC-3471/TC-3472/TC-3474 added with Pass (obs.) evidence). SUMMARY: 148→153 rows, 125→130 Must, 101→106 Must FR, 113→118 OPEN. Must-row gaps: G-TRACE 39→34 (5 FR-082..086 DES gaps closed), G-PHASE3 36→46 (FR-082..086 reclassified + 5 new rows). §6 coverage dashboard: FR-Must 101→106, Stories 130→134, TC total 378→396 (142 passing, 254 not executable). §7 gap log entries 73-77 reclassified from G-TRACE to G-PHASE3; entries 114-118 added for FR-122..124/131/132. §9 gate verdict updated. Source pins: SRS v2.13.0, SDD v2.7.1, BKLG v2.2.0, CODE v2.0.1, TC v2.2.0.
               v2.1.0 (2026-08-12) — TC-TRUMOCRACY v2.1.0 sync: FR-117 TC column += TC-3467 (publishAuditRef vacancy-immediate citizen fallback) and TC-3468 (issuer-onboarding coordination vacancy-immediate citizen fallback); FR-119 TC column += TC-3469 (Open Layer vote attempts GovernanceConstants setter to lower Guarded Layer constant; reverts at anti-circularity classification check). §6 coverage dashboard TC total 375→378 (127 passing-evidence unchanged; 248→251 not executed or not executable). Source pin TC-TRUMOCRACY v2.0.1→v2.1.0.
               v2.0.0 (2026-08-11) — 47 new Must FR rows added (FR-074..FR-120, SRS v2.2.0) to §3.1; 2 new Must NFR rows (NFR-027, NFR-028) added to §3.2; FR-062 row annotated as superseded by FR-082..FR-086 per SRS v2.2.0; FR-046 row annotated as superseded by FR-094/FR-095 per SRS v2.2.0; summary totals recomputed (125 Must rows, 12 COMPLETE, 113 OPEN — 9.6%); §6 coverage dashboard updated; §7 gap log extended to 113 entries; Gate-2 verdict updated; source pins bumped to SRS v2.2.0, SDD v2.1.1, BKLG v2.0.1, TC v2.0.0.
               v2.0.1 (2026-08-12) — cycle-1 technical review rework (08-traceability-matrix-v2.0.0-technical-cycle1.md): ISS-01 Critical: TC-3460..TC-3464 added to FR-119 TC column; ISS-02 High: TC-3454 moved from FR-109 row to FR-119 row; TC-3456 removed from FR-110 row (now FR-119 only); ISS-03 Medium: §9 gate verdict table updated to 125/12/113; stale sentence fixed; ISS-04 Medium: §6 passing-evidence count corrected to 127 (55 inh. + 72 obs.) per Doc 07 §2 footer; §6 TC count convention note updated; ISS-05 Low: subsumed by ISS-03. Source pins: Doc 04 → v1.0.1, Doc 07 → v2.0.1.
               v1.1.4 (2026-08-10) — §6 Test cases dashboard corrected to expanded-convention total 308 (pre-existing drift; 299 row anchors + 9 from collapsed TC-3200–TC-3209 range); breakdown corrected to 148 with evidence / 160 not executable; TC-count note added; SRS source pin bumped to v1.1.1; BKLG source pin bumped to v1.1.2.
               v1.1.3 (2026-08-10) — FR-069/FR-070 rows updated with TC-3343..TC-3345 (SC-01 trust-anchor negatives); FR-069 description updated to 5 in-circuit checks; Doc 03 source pin bumped to v1.1.2; TC count dashboard 298→301.
               v1.1.2 (2026-08-10) — Screens dashboard corrected 20→23 (SCR-21/22/23 from CR-v1.1.0; cycle-2 NEW-ISS-01); TC source pin bumped to v1.1.1 (NEW-ISS-02).
               v1.1.1 (2026-08-10) — FR-063 evidence corrected (obs. → not run; cycle-1 ISS-01); Risks dashboard updated 16→19 total, 12→15 gaps (ISS-02); §7 preamble documents gap-log renumbering (ISS-03); Doc 03 source pin bumped to v1.1.1.
               v1.1.0 (2026-08-10) — FR-062..073 rows added; DES-064..086 cells filled; FR-011, FR-035 converted to COMPLETE; Change-9 coverage note added; gap log updated to 64 entries.
```

> **Based on:** Bidirectional RTM (ISO/IEC/IEEE 29148 traceability). **Living.** **Verified at each gate.**
> **Chain:** `BR → FR/NFR → DES (+ADR) → SCR → EP ▸ FE ▸ US → UT/TC → Status`
> _A blank cell in a Must row is a documentation defect that **blocks the gate**._

---

# SUMMARY — read this first

| Measure | Count |
|---|---|
| Requirement rows in this matrix | **161** (138 Must + 23 Should/Could) |
| **Must rows (gating)** | **138** — 114 Must FR + 24 Must NFR |
| **Must rows COMPLETE** | **19** |
| **Must rows OPEN (gap)** | **119** |
| Must-row completion | **13.8%** |
| Non-Must rows complete / gap | 5 / 18 |
| Total rows complete / gap | 24 / 137 |

### Must-row gaps by primary reason

| Code | Reason | Must rows | Closes in |
|---|---|---|---|
| `G-PHASE3` | The capability is **not implemented** in this drop — MACI, Elections, Recall, Treasury, recovery, relayer, membership nullifier; 8 new Must FRs from CR-v1.1.0; 9 Must FRs with DES from v2.2.0 (FR-112..FR-120); NFR-027 and NFR-028; FR-082..086 (DES-093/094 now assigned, G-TRACE removed, implementation still pending); 5 new Must FRs (FR-122, FR-123, FR-124, FR-131, FR-132); FR-133 (DES-099 assigned, Doc 03 v2.4.1 Approved; no US or TC yet — Phase 3). **v2.13.0: SEVEN rows leave this class and the candidate-selection examples leave with them.** FR-036, FR-037 and FR-085 **close**; FR-039, FR-065, FR-066 and FR-067 move to `G-NOMECH` — they are no longer "not implemented in this drop" but "implemented, with a named clause of the guarantee that has no mechanism". The words *feedback scorer* and *debate lifecycle* are struck from the reason above for the same cause: Doc 06 v2.11.1 built both | **40** | Phase 3 |
| `G-NOMECH` | The design has **no mechanism** for the stated guarantee — the requirement cannot be tested because nothing implements it. **v2.4.0: FR-077 joins this class.** **v2.5.0: FR-080, FR-091 and FR-092 join it** — all three gained a DES from the proposals drop (DES-103/DES-105/DES-106), so their chain gaps closed, but each has a clause of its stated guarantee with no implementation: FR-091's "per published timelines" transitions (`schedule()` unwired) and FR-092's vote-result/consequence/implementation/outcome elements plus third-party reconstruction. **FR-080 joined at v2.5.0 and LEFT at v2.5.1** — the engineer built the two-step consent event rather than recording the gap, and the row closed. **v2.13.0: SIX rows join, the largest single movement into this class, and each names one clause.** **FR-039** — the office ballot's voter-scope guard and a tie-break field that does not exist in the election record (DES-076 rule 2). **FR-065** — two clauses: the one-vote rule is not enforced by "the same nullifier mechanism as scope-action limits" (a store-local check-then-write, not `isUniqueInScope`; Doc 03 DES-066 rule 2 records the DIVERGENCE), and individual votes are **not unlinkable to their caster** (Definition-B). **FR-066** — "recorded on the verifiable record", which waits on DES-097 audit anchoring (Doc 13 S-8). **FR-067** — "the attempt is refused **and logged**": v1 appends no event for a refused attempt (DES-067 rule 6). **FR-081** — "every tier transition … **with its state (active/inactive)**": no field, no read, no assertion (DES-107 rule 4). **FR-093** — the question phase and the office election (DES-108 rule 3). **Four arrive from `G-PHASE3` and two — FR-081, FR-093 — from `G-TRACE`**, having gained DES-107 and DES-108 without gaining a closure | **19** | Design fix required first |
| `G-NOENV` | Needs an **environment or instrument that does not exist** — devnet/testnet/staging, CI scanner, device lab | **9** | Phase 2–3 |
| `G-EXTERNAL` | Needs **external evidence** — independent audit, legal review, usability study, reproducible-build attestation | **5** | Phase 2–3 (MS-09/MS-10) |
| `G-UI` | Needs the **client surface** built and verified — accessibility, localisation, plain language, jargon scan, ballot-direction audit (FR-063) | **6** | Phase 3 |
| `G-UNMEASURABLE` | **Not falsifiable or not measurable as written** — needs a requirement restatement, not more testing | **4** | Requires a product/architecture decision |
| `G-CIRCUIT` | Depends on **compiled circuits and real verifiers**; today enforced by `MockVerifierAlwaysTrue` (Doc 06 §7.1–7.2); FR-069/FR-070 also need compiled circuits | **5** | Phase 2 ceremonies |
| `G-TRACE` | The **chain itself is broken** — no `DES` in Doc 03 §5.2 (or no `US` in Doc 05), independently of any test result. **v1.1.0: All 15 pre-existing DES gaps closed (DES-064..086).** v2.0.0: FR-074..FR-111 (38 rows) have no DES — Doc 03 §16 records this as deliberate next-increment phasing, not an error. NFR-007 (no story/NF-backlog item) retains G-TRACE aspect. **v2.2.0: FR-082..086 DES gaps closed (DES-093/094 assigned via Doc 05 v2.2.0 US-0132); those 5 rows reclassified to G-PHASE3.** **v2.2.2: FR-121, FR-125..FR-130 added (7 rows; no DES; recorded-phasing posture, Doc 03 §16; same posture as FR-074..FR-111).** **v2.4.0: FR-077 and FR-130 DES gaps CLOSED by DES-101/DES-102.** **v2.5.0: FR-079, FR-080, FR-090, FR-091 and FR-092 DES gaps CLOSED by DES-103..DES-106 (Doc 03 v2.9.1); all five leave this class — FR-079 and FR-090 to COMPLETE, FR-080/FR-091/FR-092 to G-NOMECH.** **v2.13.0: FR-081 and FR-093 DES gaps CLOSED by DES-107 and DES-108 (Doc 03 v2.16.0 §10.13.14); both leave this class — and neither closes.** Both move to `G-NOMECH`, FR-081 on "with its state (active/inactive)" and FR-093 on the unbuilt question phase and office election. **That is the DES-101/FR-077 lesson twice over: paying a chain gap buys a reclassification, not a closure** | **32** (1 NFR-007 + 31 FRs: FR-074..FR-076/FR-078/FR-087..FR-089/FR-094..FR-111/FR-121/FR-125..FR-129) | Immediate: NFR-007; Design phase (next increment): FR-074..FR-076, FR-078, FR-087..FR-089, FR-094..FR-111, FR-121, FR-125..FR-129 |
| | **Total** | **120** | |

_Note: Total by-reason count (120) exceeds Must-rows OPEN (119) by 1 because NFR-007 carries both G-NOENV (environment) and G-TRACE (no story) — it is counted in G-TRACE above and appears in the G-NOENV 9-count as well. This pre-existing compound classification does not affect the row count (120 distinct open Must rows, of which 119 are distinct after the NFR-007 double-count is removed). Arithmetic (v2.13.0): 40+19+9+5+6+4+5+32 = 120; distinct open = 119. Previous (v2.5.1 through v2.12.3): 47+13+9+5+6+4+5+34 = 123; distinct open = 122. **Every term that moved is named in the three rows above and in the changelog; the four that did not — G-NOENV 9, G-EXTERNAL 5, G-UI 6, G-UNMEASURABLE 4, G-CIRCUIT 5 — are untouched by this drop and were re-read rather than assumed._

### Chain-integrity findings (independent of test status)

- ~~**6 Must FRs have no `DES` in SDD §5.2:** `FR-010`, `FR-011`, `FR-035`, `FR-039`, `FR-056`, `FR-060`.~~ **v1.1.0: ALL CLOSED** — DES-073..077 assigned and DES-040 Satisfies column extended by architect. FR-011 and FR-035 now COMPLETE; others remain open for non-trace reasons.
- ~~**9 Must NFRs have no `DES` in SDD §5.2:** `NFR-006`, `NFR-009`, `NFR-010`, `NFR-011`, `NFR-012`, `NFR-013`, `NFR-015`, `NFR-023`, `NFR-024`.~~ **v1.1.0: ALL CLOSED** — DES-078..086 assigned by architect. Rows remain open for their non-trace reasons.
- **1 Must NFR has no story and no backlog item:** `NFR-007` (reliability/availability).
- **FR-011 and FR-035 are now COMPLETE (v1.1.0).** DES-074 and DES-075 assigned by architect; their tests already passed; the full chain now closes. Recorded as 2 rows converted from open to complete this session.
- **v2.0.0: 38 new Must FRs (FR-074..FR-111) have no `DES` in SDD §5.2.** This is a recorded, deliberate decision (Doc 03 §16 "Next-increment scope") — full DES coverage of FR-074..FR-111 is the next-increment design work. The 38 rows carry G-TRACE as the primary gap code. They are not a documentation error; they are a phasing record.

### Gate-2 verdict — one paragraph, blunt

**Gate 2 cannot be approved today.** Of 138 gating Must rows, **19 close and 119 do not** — a 13.8% completion rate against a gate criterion that requires **zero** open Must rows. **v2.4.0 records the first Must row to close since v1.1.0**: FR-130, closed by the DES-102 design paydown over tests that were already passing. That is what a chain gap looks like when it is paid: no new code, one design element, one row. It also records the opposite lesson — DES-101 paid FR-077's chain gap and the row **still** did not close, because applying completion rule 4 surfaced that half its guarantee (refusal at every subsequent amendment) has no mechanism at either tier. Two DES elements, one closure. **v2.13.0 records the largest single movement in this matrix's life, and it teaches both lessons at once: three rows close (FR-036, FR-037, FR-085) and six are reclassified without closing (FR-039, FR-065, FR-066, FR-067, FR-081, FR-093).** Seven DES elements were amended or minted for those nine rows; **two of them — DES-107 and DES-108 — closed a chain gap and bought a reclassification rather than a closure**, exactly as DES-101 did. The drop under them is real, tested and merged (739/739, run R-21); what it did not do is finish six stated guarantees, and each unfinished clause is named in its row rather than absorbed into the three that closed.
The picture did not worsen because of regressions; it worsened because 49 new Must rows from SRS v2.2.0 were honestly added, all of them open, and because v2.2.0 adds 5 more Must FR rows (FR-122..124/131/132) also open. 15 new test cases in TS-SCAFFOLD pass observed (TC-3470..TC-3486 minus the 3 Blocked), and 28 additional test cases in TS-PARTY inherit green status from Doc 06 v2.2.0 Approved (TC-3489..TC-3516; party-creation logic, emblem bounds, collision detection, cooldown, threshold gate, cap boundary, non-violence clause, BR-020 disclosure) — these together represent genuine Phase-1 progress. Neither batch is enough to close any Must row in full because the seam implementations are IS_INSECURE_MOCK=true and the broader FR guarantees (production storage, enforcement, linkage prevention) are not yet implemented. **One non-Must Should row does close: FR-013 petition expiry and cooldown is now fully tested (TC-3499..TC-3503; UT-0795..0801, UT-0817 all pass inh.); US-0021 meets DoD.** Total rows complete rises from 15 to 16.
The 119 open rows break down as follows: **32 rows carry G-TRACE** (FR-074..FR-076, FR-078, FR-087..FR-089 and FR-094..FR-111 have no DES yet — Doc 03 §16 deliberate phasing — and no implementation; FR-082..086 DES gaps closed by DES-093/094, and **FR-081 and FR-093 left this class at v2.13.0** on DES-107 and DES-108); **40 rows carry G-PHASE3** (capability designed or planned but not built — includes FR-082..086 reclassified from G-TRACE, 5 new scaffold FRs, MACI, Recall, Treasury, recovery, steward organisation, trust-anchor lifecycle governance, v2.0 governance stores; **seven candidate/election rows left this class at v2.13.0**, three by closing and four by reclassification); **19 rows carry G-NOMECH** (FR-077 at v2.4.0; FR-091 and FR-092 at v2.5.0 — FR-080 joined and left the same day, fixed at v2.5.1; **FR-039, FR-065, FR-066, FR-067, FR-081 and FR-093 at v2.13.0**, each on a named clause); **4 rows carry G-UNMEASURABLE**; **9 rows carry G-NOENV**, **6 carry G-UI**, **5 carry G-EXTERNAL**, and **5 carry G-CIRCUIT**. Nothing has been audited, no environment exists, no rollback has been drilled, every proof is produced by a mock verifier, and the entire v2.0 governance architecture (three-tier amendment, steward organisation, trust-anchor lifecycle, transparency dashboard) exists only in design documents. Doc 04's Gate-2 blockers `OPEN-01`, `OPEN-02`, `OPEN-03`, and `OPEN-11` remain open. **The correct reading of this matrix is that Trumocracy is at the end of Phase 1 and Gate 2 belongs after Phase 3, exactly where Doc 13 put it (MS-13, 2027-05-14).** Anyone presenting this drop as launch-ready would be presenting a false green light.

**v2.8.0 addendum (2026-09-06) — the FR-131 honesty drop, and why the numbers above did not move.** Doc 06 v2.5.1 (commit `0a5c542`) removed the retired "votes are anonymous but not receipt-free" framing from five shipped strings and one component title, and added three regression blocks (UT-0887, UT-0759, UT-0888) so it cannot return. Six new test cases (TC-3564..TC-3569) carry that evidence, and the suite runs **619/619 green**. **FR-131 nevertheless stays OPEN, and the Must count stays 16 of 138.** The clause the drop closed is FR-131’s *closing sentence* — the ban on four words. The clauses that keep the row open are structural: the notice must appear **wherever a vote is cast**, on **SCR-13 and SCR-14**, and the voter **must acknowledge it to proceed**. None of those three exists — the ballot surfaces are unbuilt (Doc 06 §7 #21) and the banner has **no acknowledge control at all** (Doc 06 §7 item 26(d)). This is the clearest example in the matrix of a genuinely good fix that closes no row, and it is recorded that way on purpose: a row that closes on the easy clause of a requirement teaches everyone downstream to read the hard clauses as optional. The full rule-by-rule ruling is in the changelog, in §3.1’s FR-131 row and in §7 entry 117. _(v2.9.0, ISS-03: this addendum was inserted **into the middle** of the verdict’s opening sentence at v2.8.0, splitting "16 close and 122" from "do not" and leaving literal asterisks in the rendered output. The sentence is restored and the addendum now sits below the verdict, where an addendum belongs. Its text is otherwise unchanged.)_

---

## 1. Purpose & how to read

This is the single place the whole chain is verified. One row per requirement. A row is **COMPLETE**
only when **all four** of the following hold; otherwise it is **OPEN (gap)** and the reason is named.

| # | Completion rule |
|---|---|
| 1 | **Every link exists** — the row has a `BR`, a `DES` in Doc 03 §5.2 (and `SCR` where the requirement has UI), a `US` in Doc 05, and at least one `TC` in Doc 07. |
| 2 | **The `TC` has a real implementing test** against real product code — a file path and a `UT-####` that exist in the repository. |
| 3 | **That test passes**, either observed by the tester on 2026-08-09 or recorded green in Doc 06 §3/§5 (the contract suite; see §1.1). |
| 4 | **The test verifies the requirement's whole stated guarantee**, not a fragment of it. Where a mock verifier stands in for a circuit, the row may still complete **only if** the guarantee does not depend on proof soundness — "no approval step exists" is independent of the proof; "one credential per human" is not. |
| **4a** | **A scope premise may fix the EXTENT of an absence clause; it may never discharge a positive obligation.** _(New at **v2.14.0**, ISS-03 — written down because v2.13.0 applied two different standards to two identically-shaped-looking clauses in the same version and reconciled them nowhere.)_ Where a requirement forbids something **platform-wide**, rule 3 is satisfied for that clause when **(i)** every site at which the protected datum exists is itself covered by a **passing absence test**, and **(ii)** the claim that there is no other such site is established by a **reproducible, published inspection** — a scan stated as a falsifiable enumeration ("N hits, these are they"), not an assertion. **The allowance reaches nothing else.** It may **never** discharge a clause requiring that something **be recorded**: there, inspection can only confirm the datum is absent, which is the failure and not the discharge. **Inspection can bound an ABSENCE; it cannot manufacture a RECORD.** A row closing under 4a **MUST** carry a revisit flag naming the change that would break the premise. **Applied at v2.14.0:** **FR-037** closes under 4a (a prohibition; UT-0897/UT-0900/UT-0901 cover every site holding an identity; the extent scan is published in its row). **FR-081** is expressly **outside** it (a positive obligation to record the active/inactive state — no field, no read, no assertion) and stays **OPEN**. |

**Nothing in this matrix has been marked complete to make a number look better.** Where a link is
missing, the cell says **none**. Where a mechanism is absent, the status says **No mechanism**. A
recorded gap is this document working correctly; a fabricated link would put a false green light in
front of a Gate-2 approver, which is the worst outcome available here.

### 1.1 Evidence basis

| Source of "passes" | Scope | Basis |
|---|---|---|
| **Observed 2026-08-09** | `packages/protocol` 82/82 · `services/indexer` 16/16 · `packages/sdk` 124/124 = **222 tests** | Executed by the tester this session (Doc 07 §0.2) |
| **Inherited** | `packages/contracts` (`UT-0100…0125`, `UT-0200…0230`, `UT-0300…0361`, `UT-0400…0420`, `UT-0600…0612`) | Recorded green in Doc 06 §3/§5; the suite takes ~5 min and was **not executed this session** |
| **Inherited (v2.2.4)** | `packages/protocol/test/party-creation.test.js` (`UT-0060…UT-0086`); `packages/sdk/test/party-creation.test.js` (`UT-0780…UT-0818`); `apps/web/test/party-creation.test.tsx` (`UT-0841…UT-0857`) | Recorded green in Doc 06 v2.2.0 Approved (44/37/27 tests, all pass); not executed this session; 28 TCs in TS-PARTY cite this evidence |
| **Not executed** | `apps/web` non-party-creation suite (`UT-0700…0742`) | Suite exists; not run this session; **no row is marked complete on its strength alone** |
| **Absent** | `packages/circuits` | No suite — circuits are not compiled (Doc 06 §7.2) |

## 2. ID scheme (restated)

`BR-###` business · `FR-###` functional · `NFR-###` non-functional (Doc 02) · `CON-###` constraint ·
`RISK-##` risk (Doc 02 §10, register of record Doc 13 §6) · `ADR-###` / `DES-###` design (Doc 03) ·
`SCR-##` screen · `EP-##` / `FE-###` / `US-####` backlog (Doc 05) · `UT-####` unit test (Doc 06) ·
`TC-####` test case (Doc 07) · `REF-##` production learning (none exist at v1.0.0).

---

## 3. Forward trace (requirement → everything)

### 3.1 Must FRs — the 114 gating functional rows

Legend: **✅ COMPLETE** · **☐ OPEN** (reason code in the last column). `DES` cells reading **none** indicate either a Doc 03 §5.2 gap (existing rows, now all closed per v1.1.0) or deliberate next-increment phasing (FR-074..FR-111, per Doc 03 §16).

| BR | FR | DES (+ADR) | SCR | EP ▸ FE ▸ US | TC (Doc 07) | UT evidence | Status |
|---|---|---|---|---|---|---|---|
| BR-006 | **FR-001** one credential per human | DES-001 · ADR-003 | SCR-02 | EP-01 ▸ FE-001 ▸ US-0001 | TC-0001, TC-1001, TC-1002, TC-1003, TC-2600, TC-2601 | UT-0104, UT-0105, UT-0109, UT-0109b | ☐ **G-CIRCUIT** — namespace collision passes, but the personhood proof is a mock and ADR-003's cross-*identifier-type* residual leaves a second enrolment possible (TC-2601, No mechanism) |
| BR-006, BR-009 | **FR-002** one action per scope · cross-scope unlinkability | DES-001, DES-011 · ADR-003 | — | EP-01 ▸ FE-003 ▸ US-0006, US-0007 | TC-1016, TC-1025, TC-1607, TC-1956, TC-1957, TC-1961 | UT-0122, UT-0204, UT-0108, UT-2521, UT-2522 | ☐ **G-UNMEASURABLE** — the single-action half passes; "cannot determine better than chance" has no pass line (OPEN-08) |
| BR-009 | **FR-003** no identity data at rest | DES-001 · ADR-013 | SCR-01 | EP-01 ▸ FE-001 ▸ US-0002, US-0003 | TC-2050, TC-2051, TC-2052 | UT-0046, UT-0108 (partial) | ☐ **G-NOENV** — no data-inventory scanner exists; the build-failing check of US-0002 is not implemented |
| BR-006, BR-012 | **FR-004** attestor plurality + 50%-per-region cap | DES-001, DES-002 · ADR-003 | SCR-02 | EP-01 ▸ FE-002 ▸ US-0004, US-0005 | TC-0002, TC-0003, TC-1004, TC-2640, TC-2641, **TC-2642** | UT-0102, UT-0103, UT-0106, UT-0109c, UT-0321, UT-0052 | ☐ **G-NOMECH — OPEN-02** the per-region share cap has no implementing mechanism at all |
| BR-004, BR-009 | **FR-006** residency without an address | DES-005, DES-006 · ADR-004 | SCR-03 | EP-01 ▸ FE-004 ▸ US-0008 | TC-0004, TC-1040, TC-1400, TC-1609 | UT-0044, UT-0045, UT-0046 | ☐ **G-CIRCUIT** — "no address anywhere" is proven; "proves residency" rests on the uncompiled `residency_member` circuit |
| BR-004, BR-002 | **FR-007** versioned, non-retroactive region registry | DES-004 · ADR-004 | — | EP-01 ▸ FE-004 ▸ US-0010 | TC-0005, TC-0006, TC-1204, **TC-2522** | UT-0044, UT-0047, UT-0415 | ☐ **G-NOENV** — the reference rule passes; no case exercises a **closed contest** across a version bump |
| BR-004, BR-012 | **FR-008** one residency scope, 180-day cooldown | DES-005 | SCR-03 | EP-01 ▸ FE-004 ▸ US-0009 | TC-0037, TC-1043 | none | ☐ **G-NOMECH** — no residency-change function and no cooldown exist |
| BR-002, BR-012 | **FR-009** denominator from independent sources | DES-007 · ADR-004 | SCR-08 | EP-03 ▸ FE-008 ▸ US-0019, US-0020 | TC-0007, TC-1011–TC-1014, TC-2710–TC-2714, **TC-2715** | UT-0101, UT-0330–UT-0334, UT-0024 | ☐ **G-NOMECH — OPEN-12** `submitPopulation` is `onlyTimelock`; source independence is not enforceable on-chain |
| BR-001 | **FR-010** draft creation, jurisdiction, name/emblem collision | DES-073 | SCR-04 | EP-02 ▸ FE-005 ▸ US-0011, US-0012 | TC-0010, TC-1041, TC-3489..TC-3493, TC-3515 | UT-0060..UT-0063, UT-0064..UT-0065, UT-0086 (**inh.** protocol Doc 06 v2.2.0); UT-0787..UT-0792, UT-0818 (**inh.** sdk); UT-0841..UT-0847 (**inh.** web) | ☐ **partial** — collision/emblem/jurisdiction logic NOW implemented (IS_INSECURE_MOCK=true; protocol+service+web layers; UT evidence pass inh.); production-persistent store pending DES-097 wiring; **Must row does not close** (persistent store absent; DoD rule 4 not satisfied end-to-end in production) |
| BR-001 | **FR-011** eight mandatory pillars | DES-074 | SCR-04, SCR-05 | EP-02 ▸ FE-006 ▸ US-0014, US-0015 | TC-0009, TC-3494..TC-3496 | UT-0033..UT-0036 (**obs.**), UT-0060..UT-0063, UT-0730, UT-0732 (**inh.** protocol Doc 06 v2.2.0); UT-0783..UT-0786 (**inh.** sdk); UT-0845 (**inh.** web) | ✅ **COMPLETE** — DES-074 assigned (v1.1.0); eight-pillar gate verified at protocol, service, and web layers; all tests pass (obs. + inh.). _(OPEN-07/OI-09: minimum-substance standard is a 280-char floor; the qualitative question is open but does not break the chain.)_ |
| BR-002, BR-006, BR-010 | **FR-014** one endorsement, resident-only, non-transferable | DES-011 | SCR-06, SCR-07 | EP-03 ▸ FE-007 ▸ US-0016 | TC-0011, TC-0038, TC-1007, TC-1008 | UT-0112, UT-0113 | ☐ **G-CIRCUIT** — one-per-person and scope binding pass; the *resident-only* half is enforced only by the mocked residency proof |
| BR-002, BR-008 | **FR-016** threshold in code, no override | DES-009, DES-010 · ADR-004 | SCR-08 | EP-03 ▸ FE-008 ▸ US-0019 | TC-0008, TC-1009, TC-1010, TC-1203, TC-2604 | UT-0023, UT-0025 (**obs.**), UT-0410, UT-0111 | ✅ **COMPLETE** — reproducible from the reference and the chain; no waiver path exists. *(OI-01, the percentage value, is a product decision that does not affect this guarantee.)* |
| BR-002, BR-008 | **FR-018** automatic activation after a dwell period | DES-009 | SCR-09 | EP-03 ▸ FE-009 ▸ US-0022 | TC-0013, TC-0014, **TC-1042**, TC-3504..TC-3506 | UT-0115, UT-0026, UT-0027 (**inh.**); UT-0814..UT-0816 (**inh.** sdk Doc 06 v2.2.0) | ☐ **G-NOMECH** — threshold-gate logic tested (TC-3504..TC-3506; UT-0814..0816 pass inh.); activation is automatic and permissionless; **dwell period still not implemented** (OI-08 unset), so the "met and *sustained*" guarantee and its negative AC cannot hold |
| BR-003, BR-008 | **FR-020** join without approval | DES-013 · ADR-007 | SCR-10, SCR-11 | EP-04 ▸ FE-010 ▸ US-0024, US-0026 | TC-0015, TC-0017, TC-1015, TC-1020, TC-3507, TC-3517, TC-3518, TC-3519, TC-3520 | UT-0120, UT-0123, UT-0039 (**obs.**), UT-0520 (**obs.**); UT-0807 (**inh.** sdk Doc 06 v2.2.0); UT-0819, UT-0820 (**inh.** sdk Doc 06 v2.3.2); UT-0858, UT-0866 (**inh.** web Doc 06 v2.3.2) | ✅ **COMPLETE** — no approval, sponsorship, interview, invitation, fee or veto path exists. **v2.3.0 strengthens this row on both layers:** the guarantee is now *structural* as well as behavioural — the service holds no verifier at all (`service._verifier` is `undefined`; UT-0820) and `joinParty.length === 2`, so no gatekeeping parameter can exist (UT-0819); on the web surface **every** button is asserted not to match /approve\|request\|apply\|invite/ (UT-0858), and a seam spy proves zero verifier calls across join → leave → rejoin (UT-0866) |
| BR-003, BR-010 | **FR-021** one member, one equal vote | DES-013, DES-014 · ADR-007 | SCR-10 | EP-04 ▸ FE-011 ▸ US-0027 | TC-0023, TC-1021, TC-1608 | UT-0017, UT-0040 (**obs.**), UT-0121, UT-0302, UT-0521 (**obs.**) | ✅ **COMPLETE** — no weight field exists; a tally can only ever increment by one |
| BR-003 | **FR-022** leave at will | DES-013 | SCR-11 | EP-04 ▸ FE-010 ▸ US-0025 | TC-0016, TC-3521, TC-3522, TC-3526, TC-3527, TC-3536 | UT-0124; UT-0823, UT-0824, UT-0829 (**inh.** sdk Doc 06 v2.3.2); UT-0860, UT-0861 (**inh.** web Doc 06 v2.3.2) | ✅ **COMPLETE** — immediate, unblockable, no penalty path. **v2.3.0:** `leaveParty.length === 2` (no approval parameter) and `NOT_A_MEMBER` is the *only* refusal path (UT-0823); leaving is **never deletion** — the log is append-only, the store exposes no method matching /delete\|remove\|clear\|rewrite/, and `getMembershipEvents` returns copies so a caller cannot mutate history (UT-0824); the web history panel renders the departed membership as *inactive* rather than dropping it (UT-0861); timestamps come from the injected clock, so the same scenario yields byte-identical history (UT-0829) |
| BR-012 | **FR-023** maturation + churn rate limit | DES-013, DES-014 · ADR-008 | — | EP-04 ▸ FE-012 ▸ US-0029, US-0030 | TC-1023, TC-1031, **TC-1044** | UT-0016, UT-0019, UT-0020 (**obs.**), UT-0201 | ☐ **G-NOMECH** — maturation passes to the second; **the join/leave churn rate limit does not exist** (`Party.join` permits unlimited rejoin) |
| BR-003, BR-008 | **FR-024** unscreened proposals | DES-018, **DES-104** | SCR-12 | EP-05 ▸ FE-013 ▸ US-0031 | TC-0018, TC-3543, TC-3544, TC-3547 | UT-0200, UT-0310; UT-0089, UT-0095 (**inh.** protocol Doc 06 v2.4.1); UT-0832 (**inh.** sdk); UT-0872, UT-0873 (**inh.** web) | ✅ **COMPLETE** — no pre-screening, moderation or approval hook exists. **v2.5.0 extends the evidence to the v1 application tier** (DES-104): the authoring rule is a **pure function of tier** — its signature takes no approver, no reviewer and no reason, so there is nothing for a gatekeeper to hold (UT-0089); drafts are checked against **published floors** with (field, code) deficiencies and **every declared tier is accepted**, so the platform never judges which tier a proposal claims or what it says (UT-0095); and no control on the surface matches /approve\|request\|permission\|await\|pending review/ (UT-0872). The Worker gate is a **disclosure step about name publicity**, explicitly "not about whether your idea is good" |

| BR-008, BR-012 | **FR-025** tiered quorum + supermajority | DES-016 · ADR-008 | SCR-12 | EP-05 ▸ FE-014 ▸ US-0033, US-0034 | TC-0019, TC-1026–TC-1029, TC-1036, TC-1200, TC-1202 | UT-0010–UT-0013 (**obs.**), UT-0210, UT-0211, UT-0400, UT-0402 | ✅ **COMPLETE** — quorum miss, supermajority miss, exact tie and abstention handling all provoked, and reference and chain agree |
| BR-008, BR-012 | **FR-026** tier-proportional timelock | DES-016, DES-021 · ADR-008 | SCR-12 | EP-05 ▸ FE-015 ▸ US-0035 | TC-0020, TC-1024, TC-1032 | UT-0203, UT-0021 (**obs.**), UT-0202, UT-0310 | ✅ **COMPLETE** — execution before expiry refused; execution permissionless; no shorten/waive/bypass capability |
| BR-012 | **FR-027** entrenched founding clauses | DES-022 · ADR-008 | SCR-12 | EP-05 ▸ FE-015 ▸ US-0036 | TC-0021, TC-1019, TC-1022, TC-2630 | UT-0041, UT-0003, UT-0038 (**obs.**), UT-0230 | ✅ **COMPLETE** — highest tier, longest timelock, age-qualified quorum; mob-capture scenario fails as required |
| BR-012 | **FR-028** eligibility snapshot at open | DES-018, DES-019 · ADR-008 | — | EP-05 ▸ FE-016 ▸ US-0037 | TC-0022, TC-1030, TC-2620, TC-2622 | UT-0014, UT-0018 (**obs.**), UT-0200 | ✅ **COMPLETE** — post-snapshot joins have zero effect, including the 100,000-account flood |
| BR-009, BR-011 | **FR-030** ballot unlinkability | DES-023, DES-024 · ADR-006 | SCR-13 | EP-06 ▸ FE-017 ▸ US-0038 | TC-0033, TC-1958 | UT-2601 (public-signal hygiene only) | ☐ **G-PHASE3** — MACI is not implemented; `maci_voting` is off in staging and production |
| BR-011 | **FR-031** receipt-freeness | DES-023, DES-063 · ADR-006 | SCR-13 | EP-06 ▸ FE-018 ▸ US-0041 | TC-2610, TC-2612, TC-2614 | UT-0700, UT-0701, UT-0710–UT-0712 (client disclosure only) | ☐ **G-PHASE3 — OPEN-01** the client *discloses* that votes are not receipt-free; disclosure is not satisfaction |
| BR-011 | **FR-032** invisible coerced-vote override | DES-023, DES-063 · ADR-006 | SCR-13 | EP-06 ▸ FE-018 ▸ US-0042 | TC-2611, TC-2613, TC-1039 | UT-0022 (**obs.**), UT-0702, UT-0703 | ☐ **G-PHASE3 — OPEN-01** the re-vote window is protected in the schedule rules; the invisible override needs MACI |
| BR-005, BR-008 | **FR-033** independently reproducible tally | DES-025 | SCR-14 | EP-06 ▸ FE-019 ▸ US-0044, US-0045 | TC-0024, TC-2482 | UT-0500, UT-0515 (**obs.**) | ☐ **G-PHASE3** — re-computation works, but Phase-1 tallies expose individual votes (Doc 06 §7.5), so "learns no individual vote" fails; `apps/verifier` does not exist |
| BR-010, BR-011 | **FR-035** no transfer, delegation or proxy | DES-075 | — | EP-04/EP-06 ▸ FE-011/FE-017 ▸ US-0028, US-0040 | TC-1604, TC-1605, TC-2605, TC-2621 | UT-0300, UT-0301, UT-0040 (**obs.**) | ✅ **COMPLETE** — DES-075 assigned (v1.1.0); no transferable surface in ABI or bytecode; capability-absence is real, mechanical and build-failing |
| BR-004 | **FR-036** self-nomination, region-scoped | **DES-027** (amended v2.15.0, Doc 03 v2.16.0 §10.13.14 — the SDK conventional backing is the Definition-A design; the Elections contract is the deferred v2 backing behind `ICandidateStore`) | **SCR-15** | EP-07 ▸ FE-020 ▸ US-0046, US-0047, US-0048 | TC-0028, **TC-3597, TC-3598, TC-3600, TC-3601, TC-3602, TC-3605, TC-3606, TC-3615, TC-3616** | **TC-3597, TC-3598 Pass (obs.) · UT-0894** (protocol); **TC-3600, TC-3601, TC-3602 Pass (obs.) · UT-0896** (sdk); **TC-3605 Pass (obs.) · UT-0897** and **TC-3606 Pass (obs.) · UT-0898** (sdk); **TC-3615, TC-3616 Pass (obs.) · UT-0905** (web) — all observed `it` by `it` in run **R-21**, 2026-09-21, `npm test` 739/739 exit 0 at `HEAD` `12fe4a6`. **TC-0028 stays Blocked** — an E2E case with no environment (Doc 07 v2.10.0 §3.1) | ✅ **COMPLETE** _(was G-PHASE3; closed v2.13.0; **evidence cells corrected v2.14.0, ISS-02 — the ruling is unchanged and the row is now checkable**)_ **Clause → case, so no reader has to reconstruct it:** *only themselves* → **TC-3601** · *office region equals or contains the residency* → **TC-3597, TC-3600** · *matured* → **TC-3598, TC-3600** · *a published minimum of endorsements* — published by **TC-3602**, and **GATING the candidacy by TC-3606** (`ENDORSEMENTS_SHORT` naming the shortfall) · *withdrawal at any time before the ballot locks* → **TC-3605** · the honest surface → **TC-3615, TC-3616**. _(**v2.14.0, ISS-02 (High) — what was wrong, stated plainly.** This row **closed** at v2.13.0 while its TC cell named neither `TC-3605` nor `TC-3606` and its UT cell named neither `UT-0897` nor `UT-0898` — yet the status cell below argued the withdrawal clause **from UT-0897** and the changelog cited **TC-3605**. Worse, Doc 07's `TC-3605` named `US-0095 · FR-085, FR-107, FR-081` and **not FR-036**, so **no case anywhere was attributed to FR-036 for that clause** and the backward trace dead-ended. `TC-3606` — the **only** passing test proving the minimum **gates** rather than merely being **published** — was off the row too, though §7 entry 17 and the changelog both leaned on it. **The tests were always real and green; the chain was broken.** A Must row that closes on evidence its own cells do not name is a row nobody can check, which is the one thing this document exists to prevent. Both cases and both `UT`s are added, the clause→case map above is new, and **Doc 07 v2.11.0 adds `FR-036` and `US-0046` to `TC-3605`'s requirement cell** so the trace resolves on both sides. **No status, count or gap code moves.**)_ — **DES-027 as amended closes the chain with SCR-15 bound, and every clause of the stated guarantee has its own passing test.** **"Only themselves"** — `nominate()` **has no parameter naming anyone but the caller** (UT-0896), and the protocol module exports nothing that approves, rejects, ranks or renominates (UT-0891): the Gherkin's "any member attempts to nominate a different person → refused" is satisfied **by construction**, which is the stronger form of the guarantee. **"Only for an office whose region equals or contains the member's active residency scope"** — proved in both directions and at the failure mode: a ward resident may stand for the ward and for a containing district; a resident of **another** ward is refused `OUT_OF_SCOPE`; a **district** resident may **not** stand for a ward inside it; a residency outside the party jurisdiction is refused; and a **malformed region path throws rather than returning false** (UT-0894, UT-0896), so the check cannot fail open. **"Matured member"** — the maturation boundary is asserted to the second and a fresh joiner is refused **before the counting seam is even asked** (UT-0894, UT-0896). **"Subject to a published minimum number of nomination endorsements from matured members resident in that region"** — `endorseNomination` returns `{endorsements, required, met}` on every call and `ENDORSEMENTS_SHORT` names the shortfall, so **the minimum is published through the API on every endorsement**; endorsers must be matured and resident, may endorse once, and may never be the candidate (UT-0896, UT-0898). The value itself is **APPROVER-RULED at 5** (`artifacts/status/DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md`; Doc 03 §10.11). **"Withdrawal at any time before the ballot locks"** — permitted before the window and after it, refused `BALLOT_LOCKED` after the lock (UT-0897). **TWO RESIDUALS, DISCLOSED, NEITHER FATAL — recorded as revisit flags in the FR-130 pattern rather than as silent acceptances.** **(i) v1 residency is self-declared**; no attestation exists (Doc 03 DES-027 rule 2), and the surface **says so in terms** (UT-0905, TC-3615). FR-036's stated guarantee is a **scope rule**, and the scope rule is what closes here; the strength of the residency claim behind it is FR-006/DES-007's requirement and is separately open. **When attested residency lands, this row must be re-derived.** **(ii) The ratified value 5 is not pinned by a test** — UT-0894 asserts `NOMINATION_ENDORSEMENTS_MIN > 0` and pins only the 30-day maturation exactly, and the `it` title still reads "flagged for ratification". The **guarantee** (a published minimum gates the candidacy) is asserted; the **value** is not. Pinning it is an engineer touch, routed by the assignment record alongside Doc 06 §7 item 30(iii) |
| BR-009 | **FR-037** informed consent; non-candidates never disclosed | **DES-028** (amended v2.15.0, Doc 03 v2.16.0 §10.13.14 — the consent record and the one-way-door lifecycle) | **SCR-15** | EP-07 ▸ FE-021 ▸ US-0049, US-0050 | TC-0029, **TC-3599, TC-3603, TC-3604, TC-3609, TC-3614** | **TC-3599 Pass (obs.) · UT-0895** (protocol); **TC-3603, TC-3604 Pass (obs.) · UT-0897** and **TC-3609 Pass (obs.) · UT-0900** (sdk); **TC-3614 Pass (obs.) · UT-0904** (web) — all observed `it` by `it` in run **R-21**. **TC-0029 stays Blocked** — E2E, no environment | ✅ **COMPLETE** _(was G-PHASE3; closed v2.13.0)_ — **DES-028 as amended closes the chain with SCR-15 bound, and both halves of the requirement have their own passing tests.** **First half — "an explicit, separately recorded, informed consent, before a candidacy is published, acknowledging that the real-world identity becomes public."** It is **its own call**, after nomination and before anything is published; it requires each of `identityBecomesPublic`, `irreversibleForTerm` and `revocableOnlyByWithdrawalBeforeLock` to be the **literal `true`** — a missing key is a missing acknowledgement and a truthy-but-not-`true` value does not count, so **silence cannot be laundered into consent** (UT-0895); it is refused `CONSENT_INCOMPLETE` **naming the gap**, recorded **once**, and **takes no verifier and calls no seam** — asserted structurally as well as behaviourally, so it is a disclosure step and not an FR-123 counting action (UT-0897). **Before consent the public view shows no member and no disclosures; after it, both** (UT-0897) — the "before" is demonstrable, not asserted. The web crossing states all three facts **BEFORE the confirm control, in asserted document order**, and **cancel records nothing** (UT-0904). **Second half — "MUST NOT disclose the identity of any person who is not a consenting candidate or office-holder under any circumstance."** Proved as an **absence at every read this flow has**: the candidate's pseudonym **first enters the trail at `CONSENT_RECORDED` and not before**; the `NOMINATED` event carries the residency region only and never the disclosures; **the endorsement trail names no endorser**; **no read returns a feedback caster** — not the aggregate, not the public view, not the trail; post-debate voters are never named (UT-0897, UT-0900, UT-0901). Any actor but the candidate is refused `NOT_YOUR_CANDIDACY` **before any read**, so a leaked candidacy id is not a route into someone else's record (UT-0897). **THIS CLAUSE CLOSES UNDER `Completion rule 4a` (§1), AND THE RULE IS NAMED RATHER THAN IMPROVISED** _(v2.14.0, ISS-03)_. The clause is platform-wide; the evidence above is candidacy-flow-local. It closes because **in v1 the candidacy disclosure holding is the only place the platform holds a real-world identity at all**: the `/verify` enrolment route is flag-gated **off** above dev and its verify-and-discard mechanism is unbuilt (FR-132 §(b), CON-015, Doc 06 §7 item 26), so there is no second holding to test and no second path to disclose by. **Rule 4a has two limbs and both are met.** **(i) Every site at which the protected datum exists is covered by a passing absence test.** **At the store and service** — the only place v1 holds a real-world identity **at rest** — **UT-0897**, **UT-0900** and **UT-0901** assert that nobody unconsented is named on any read or trail event. **At the web surface**, **UT-0904** (`TC-3614`, already on the FR-085 row) is the absence test: its first `it` asserts that after standing **nothing is public** and the gate names the one-way door. _(v2.15.0, **ISS-C2-03**: limb (i) previously named three **SDK** `UT`s "at that site" while limb (ii) below enumerates **five files**, two of them outside the SDK — so a reader auditing one limb against the other found two files unaccounted for. Both limbs now range over the same evidence.)_ **(ii) The extent is fixed by a reproducible, published inspection, stated as a falsifiable enumeration rather than asserted:** `grep -rln` for the six identity-datum names — `disclosures`, `realName`, `legalName`, `fullName`, `dateOfBirth`, `documentNumber` (one alternation; the separator is written out here because a literal pipe is a cell break in this table) — over `packages/*/src`, `services/*/src` and `apps/web/src` returns **five files, and these are they** — `packages/sdk/src/candidates.js` (17 hits: the store and service), `apps/web/src/components/CandidateSelection.tsx` (8) and `apps/web/src/app/candidates/page.tsx` (1) (the surface), and `apps/web/src/i18n/en.ts` (2) and `ar.ts` (2), which are **label copy** (`legalNameField`, `legalNameHelp`) and hold nothing. **Of the five, only `packages/sdk/src/candidates.js` holds the datum AT REST** — and that is the site limb (i)'s three `UT`s cover. The component holds only **the caller's own input** (`legalName` in local state, passed into `nominate`), covered at that surface by `UT-0904`/`TC-3614`; `page.tsx` carries a **demo fixture** (`legalName: 'Neighbour Example'`); and the two i18n files are **label copy**. **All five are inside the candidacy flow. `packages/protocol`, `services/indexer` and every other `apps/web` route return nothing.** `ENROLMENT_UI` is `{dev: true, staging: false, prod: false}` in `packages/protocol/src/flags.js`, so the one route that would hold identity elsewhere is off above dev and its verify-and-discard mechanism is unbuilt (FR-132 §(b), CON-015). **WHY THIS IS NOT THE ALLOWANCE FR-081 WAS REFUSED** _(v2.14.0, ISS-03 — the reviewer was right that the two rulings sat unreconciled, and the reconciliation is a rule, not a preference)_: **this clause is a PROHIBITION and FR-081's is a POSITIVE OBLIGATION TO RECORD. Inspection can bound an absence; it cannot manufacture a record.** Here inspection establishes only the **extent** of something already tested wherever it exists. At FR-081 there is no field, no read and no assertion, so inspection would **confirm the gap**, not discharge it — which is why FR-081 stays OPEN and says so in its own row. **REVISIT FLAG (required by 4a):** when the **FR-132 identity layer** is built, **this row MUST be re-derived against it** — a second holding of real-world identity is a new way to fail this clause, and this closure does not cover one. **ROUTED, not required:** an **absence-scan `it`** — asserting that no module outside the candidacy flow holds a real-world identity datum, in the style of UT-0891's export scan and UT-0899's method scan — would convert limb (ii) from inspection into assertion. It is **owed hardening for the engineer**, not a condition of this closure, because 4a discharges the clause today |
| BR-004, BR-008 | **FR-039** election scoped, timetable immutable | **DES-076** (amended v2.15.0, Doc 03 v2.16.0 §10.13.14 — rule 1 built, rule 2 designed and owed §13) | SCR-16 | EP-07 ▸ FE-022 ▸ US-0051, US-0052 | TC-0030, TC-1024, **TC-3611** | UT-0021, UT-0202 (schedule half only); **TC-3611 Pass (obs.) · UT-0901** (sdk; run **R-21**) — the timetable and ballot-lock half only | ☐ **G-NOMECH** _(was G-PHASE3; reclassified v2.13.0, NOT closed)_ — **the chain is whole and one half of the guarantee is now proved; the other half has no mechanism.** **Built and asserted:** `openElection` validates the office region within the party jurisdiction and an ordered future timetable, **exposes no update method at all** — immutability by capability absence, not by a guard a caller could route around — and `lockBallot` refuses before `ballotLocksAt` (`TOO_EARLY`), is idempotent, and freezes the candidate set so that closing a vote afterwards is refused (UT-0901, TC-3611). **NOT built, and this is the named blocker:** DES-076 rule 2 designs **(a)** the office ballot's **voter-scope guard** — a vote cast through DES-096 only after the BINDING_VOTE gate and a residency check identical to DES-027 rule 2 — and **(b)** a **tie-break rule fixed at `openElection`**. Neither exists. FR-039's §8 Gherkin has two scenarios and **the first one has no product at all**: "a member resident outside R attempts to vote → the vote is refused as out-of-scope" cannot execute, because there is no office ballot to vote on. The second scenario — "any actor attempts to change the timetable, candidate set or tie-break rule after opening → the change is refused and the attempt is logged" — is **two-thirds served**: timetable and candidate set are immutable, and **there is no tie-break field in the election record to protect**. Reclassified **G-PHASE3 → G-NOMECH** on the FR-091 precedent: the row is no longer waiting on Phase 3 and an on-chain Elections contract, it is waiting on a **designed v1 build** that is owed in Doc 03 §13. **Owner: engineer, for (a) and (b); the design is already written** |
| BR-004, BR-008 | **FR-040** automatic office assignment | DES-029 | SCR-16 | EP-07 ▸ FE-022 ▸ US-0053 | TC-0030 | none | ☐ **G-PHASE3** |
| BR-005 | **FR-042** member-initiated recall | DES-030 | SCR-18 | EP-08 ▸ FE-024 ▸ US-0057 | TC-0031 | none | ☐ **G-PHASE3** — `recall` flag off above dev |
| BR-005, BR-012 | **FR-043** two-stage recall, higher bar | DES-030 | SCR-18 | EP-08 ▸ FE-024 ▸ US-0058 | TC-0031, TC-0032 | none | ☐ **G-PHASE3** |
| BR-005, BR-008 | **FR-045** automatic revocation + by-election | DES-030 | SCR-18 | EP-08 ▸ FE-024 ▸ US-0060 | TC-0032 | none | ☐ **G-PHASE3** |
| BR-005, BR-008 | **FR-047** immutable version history | DES-031 · ADR-009 | SCR-17 | EP-08 ▸ FE-023 ▸ US-0055 | TC-0026, TC-1045, TC-1614 | UT-0523 (**obs.**) | ☐ **G-NOENV** — manifesto versions are append-only; **no test proves prior charter versions stay retrievable**, and no diff view exists |
| BR-010 | **FR-051** money buys no governance advantage | DES-033 · ADR-007 | — | EP-04 ▸ FE-011 ▸ US-0028 | TC-1021, TC-1604, TC-1605, TC-1608 | UT-0040 (**obs.**), UT-0300, UT-0301, UT-0302, UT-0121 | ✅ **COMPLETE (conditional)** — no payment surface and no weighting surface exist. **MUST be re-verified when the `treasury` flag ships in Phase 3**; this row does not carry forward unexamined |
| BR-005, BR-008, BR-009 | **FR-054** public record of every governance action | DES-035 | SCR-20 | EP-09 ▸ FE-025 ▸ US-0061 | TC-0027, TC-1047, TC-1048, TC-1207 | UT-0500, UT-0510, UT-0511, UT-0524 (**obs.**) | ☐ **G-NOENV** — replay works for what exists; **"every" is unverifiable** while nomination, election, recall, treasury and filtering actions do not exist, and there is no event-schema no-personal-data assertion |
| BR-008, BR-009 | **FR-056** no operator discretion; logged display filtering | DES-077 | SCR-20 | EP-09 ▸ FE-026 ▸ US-0064, US-0065 | TC-0039, TC-1600, TC-1601, TC-1614, TC-2661, TC-2720, **TC-2721** | UT-0310, UT-0311, UT-0311b, UT-0311c, UT-0301 | ☐ **G-NOMECH** — (DES-077 assigned in v1.1.0, closing G-TRACE); the absence half is strongly proven; **the display-filtering register does not exist**, so the only permitted intervention has no public log |
| BR-007 | **FR-058** recovery without seed phrases | DES-040, DES-042 · ADR-002 | SCR-19 | EP-10 ▸ FE-028 ▸ US-0068 | TC-0034, TC-2700, TC-2701 | UT-2513–UT-2519 (key derivation only) | ☐ **G-PHASE3** — the social-recovery / 4337 path is not implemented |
| BR-009 | **FR-059** recovery reveals nothing | DES-042 | SCR-19 | EP-10 ▸ FE-028 ▸ US-0069 | TC-2700 | none | ☐ **G-PHASE3** |
| BR-007 | **FR-060** no token, no gas, no jargon | DES-040 | all primary | EP-10 ▸ FE-027 ▸ US-0066 | TC-0035, TC-2203, TC-2331 | none | ☐ **G-UI** — no jargon scanner, no deployed journey (DES-040 Satisfies extended to FR-060 in v1.1.0, closing G-TRACE) |
| BR-007, BR-012 | **FR-061** sponsorship degrades, never denies | DES-043 · ADR-014 | — | EP-10 ▸ FE-027 ▸ US-0067 | TC-0036, TC-2152 | UT-0054 (**obs.**, flag permanence only) | ☐ **G-PHASE3** — the paymaster/relayer service is not built; queue-with-explanation cannot be exercised |

| BR-008, BR-009 | **FR-062** public participation profile (ballot participation, party memberships, endorsed petitions, authored proposals, debates attended) _(v2.0.0: SUPERSEDED by FR-082..FR-086; see SRS v2.2.0 §4.19 and OI-13 resolution. Retained for traceability; do not implement. Successor rows appear below.)_ | DES-064 | SCR-21 | EP-02 ▸ FE-029 ▸ US-0071 | TC-3300, TC-3301, TC-3302 | none | ☐ **G-NOMECH** — OI-13 resolved via three-tier privacy model (SRS v2.2.0 §4.24); FR-082..FR-086 carry the live requirements; this row is a retained-for-traceability historical record |
| BR-008, BR-009 | **FR-063** ballot direction MUST NOT be disclosed through any path (FR-048 elected-representative exception) | DES-064 | SCR-21 | EP-02 ▸ FE-029 ▸ US-0072 | TC-3303, TC-3304, TC-3305, TC-3306 | UT-0700, UT-0701 (capability-absence, **not run** — apps/web suite not executed this session; see §1.1) | ☐ **G-UI** — ballot-direction audit requires deployed client system; UT-0700/UT-0701 prove protocol-level absence but no front-end deployment |
| BR-003 | **FR-064** single party at a time; switch resets tenure clock | DES-065 | — | EP-03 ▸ FE-030 ▸ US-0073 | TC-3307, TC-3308, TC-3309, TC-3523, TC-3524, TC-3525 | UT-0821, UT-0822 (**inh.** sdk Doc 06 v2.3.2); UT-0859 (**inh.** web Doc 06 v2.3.2) | ☐ **G-PHASE3** — **app-side one-active-party IS now implemented and tested**, in the **EXPLICIT-LEAVE** form: a second join is refused with `ALREADY_MEMBER_ELSEWHERE`, naming the current party and telling the member that an "explicit, recorded action" is required (UT-0821); a same-party double join is refused `ALREADY_MEMBER` without inflating the member count (UT-0822); the web surface names the blocking party rather than showing a generic error (UT-0859). **The former semantics blocker is RESOLVED (v2.3.1):** the `FR-064-SEMANTICS` ruling (option (a) EXPLICIT-LEAVE; Rathish, Human Approver, 2026-08-29) amended FR-064's normative text to the v1 explicit-leave posture — Doc 02 v2.15.0 §4.6 (Approved; superseded auto-void wording annotated in place) and Doc 06 v2.3.3 §7 #20 (closed RESOLVED (a)). The requirement text now says what the code does; automatic voidance and the bypass-proof nullifier enforcement are deferred to DES-065 at the v2 seam swap, with the v1 behaviour the subset v2 formalises. **The row stays OPEN on one remaining count: design** — the assigned **DES-065** membership-scope nullifier is a v2/Phase-3 *chain* mechanism and is not built, so nothing enforces this invariant beyond the single app-side service |
| BR-013 | **FR-065** candidate feedback +3/−1; one vote per member per candidate per election **enforced by the same nullifier mechanism as scope-action limits**; individual votes private and **unlinkable to their caster**; aggregate tally public | **DES-066** (amended v2.15.0, Doc 03 v2.16.0 §10.13.14) · ADR-015 | **SCR-22** per Doc 03 §10.12.4 _(this matrix and Doc 03 §5.2 have long carried SCR-23; §10.12.4 is the screen inventory of record and names **SCR-22** the feedback widget. Doc 03 v2.15.0 annotated the inversion in place rather than swapping it silently; this row follows §10.12.4 and the swap is recorded, not hidden)_ | EP-07 ▸ FE-031 ▸ US-0074, US-0075 | TC-3313, TC-3314, TC-3315, TC-3316, **TC-3595, TC-3608, TC-3609, TC-3618** | **TC-3595 Pass (obs.) · UT-0893** (protocol); **TC-3608, TC-3609 Pass (obs.) · UT-0900** (sdk); **TC-3618 Pass (obs.) · UT-0906** (web) — run **R-21**. **TC-3313..TC-3316 stay Blocked**, and two of them are this row's open clauses | ☐ **G-NOMECH** _(was G-PHASE3; reclassified v2.13.0, NOT closed — and this is the row the architect referred here for ruling)_ — **three clauses of four are proved; two of the remaining obligations have no mechanism in v1 and the row does not close on the three that do.** **PROVED.** *Scoring:* `FEEDBACK_SCORE` is **exactly** +3 / −1 and `feedbackScore` is 3·up − down (UT-0893), with the surface's copy and its rendered score asserted to agree — a thumbs-down "takes one away" and the score goes to −1 (UT-0906). *One vote, refused not overwritten:* a second feedback vote from the same member is **REFUSED** `ALREADY_GAVE_FEEDBACK` and the first stands; self, open-tier and fresh casters are each refused with their own code (UT-0900). *Aggregate-only publication:* **no read returns a caster** — not the aggregate, not the public view, not the trail — and `feedbackTally()` takes no verifier and calls no seam (UT-0900). **RULING 1 — "enforced by the same nullifier mechanism as scope-action limits": NOT SATISFIED.** The scope-action mechanism is **DES-095's `isUniqueInScope`**, a first-write-wins atomic check-and-register that `nominate` itself uses for `CANDIDACY:<electionId>`. `castFeedback` instead calls `hasGivenFeedback` and then `recordFeedback` against `ICandidateStore` — **a different component and a check-then-write pair whose atomicity is only as good as the backing**, which today is `InMemoryCandidateStore` with `IS_INSECURE_MOCK = true`. Doc 03 v2.16.0 DES-066 rule 2 records this as a **v1 DIVERGENCE**, withdraws v2.15.0's claim that the store record "is the v1 nullifier", and specifies two owed touches: a **UNIQUE constraint on (candidacyId, member)** in the DES-097(b) Postgres backing, and the convergent form registering `FEEDBACK:<candidacyId>` through `isUniqueInScope`. **Neither is built.** The requirement names a mechanism, not only an outcome; the outcome holds and the mechanism does not, and completion rule 4 asks for the whole stated guarantee. **RULING 2 — "individual votes MUST remain private and unlinkable to their caster": NOT SATISFIED.** The store keeps a caster record **precisely so it can refuse a second vote**, and the operator database can therefore see **who voted and which way**. Doc 03 DES-066 rule 4 states it plainly, declines to claim unlinkability for v1, and places it in the v2 nullifier `keccak(feedback, electionId, candidateId)`; the product **discloses the truth on the surface** under FR-131(b) and **TC-3618 asserts that it does**. Unpublished is not unlinkable. **WHY DOC 02 §16.3.1 DOES NOT CLOSE THIS ROW.** §16.3.1 scopes FR-065's v1 mechanism as "DB aggregate (asymmetric +3/−1); aggregate public", which read alone would license a closure. It is not read alone: **the same row records v2 as "Same" and divergence as "N"**, for a requirement whose §4 text demands unlinkability v1 does not deliver — while **FR-063 carries "Y" for a strictly smaller divergence**. The row under-records a real gap, and **a Must row cannot close by citing a source that is wrong about that row**. Raised as **`TD-RTM-05`** (§10) and routed to the product-owner; the honest §16.3.1 row would read **PARTIAL**, divergence **Y**, with the v2 column naming the nullifier. **OWED:** engineer, for the UNIQUE constraint and the convergent form (Doc 03 §13); **plus** the FR-131(b) disclosure's placement **before** the feedback controls with a document-order assertion, which DES-066 rule 4 records as owed and which TC-3618 expressly does not claim. **TC-3315 and TC-3316 are the cases that will close this row** |
| BR-013 | **FR-066** three mandatory pre-election debates per candidate; local conditions, problems, work required; content reference **and** scheduling, attendance and the post-debate vote **recorded on the verifiable record** | **DES-067** (amended v2.15.0, Doc 03 v2.16.0 §10.13.14 — rules 1–3 built, rule 7 the disclosed v1 boundary) | **SCR-23** per Doc 03 §10.12.4 _(see the FR-065 row: §10.12.4 names SCR-23 the debate schedule, attendance and post-debate vote; the long-standing inversion in this matrix is recorded, not swapped silently)_ | EP-07 ▸ FE-032 ▸ US-0076 | TC-3317, TC-3318, TC-3319, **TC-3594, TC-3606** | **TC-3594 Pass (obs.) · UT-0892** (protocol); **TC-3606 Pass (obs.) · UT-0898** (sdk) — run **R-21**. **TC-3317..TC-3319 stay Blocked** on the clause below | ☐ **G-NOMECH** _(was G-PHASE3; reclassified v2.13.0, NOT closed)_ — **the debate lifecycle is built and proved; the record it writes to is not yet verifiable, and that is the whole of the gap.** **PROVED.** `REQUIRED_DEBATE_TOPICS` is **exactly** the three FR-066 names and `DEBATES_PER_CANDIDATE` is 3; scheduling — after consent **and** the published endorsement minimum — creates exactly three **unheld** records; `debatesComplete()` **names the missing topics**; attendance **must be attested as a boolean** (`ATTENDANCE_REQUIRED`) and an unknown topic is refused, so a missing attestation cannot be laundered into an attendance; a **recorded absence is on the trail, visible in the public view, and blocks** completion, while an **unheld debate is not an absence** — a distinction that matters because only absence blocks; each attestation carries a `contentRef`, the publicly resolvable external reference to the debate content (UT-0892, UT-0898). **NOT PROVED, and it is the requirement's own words:** "debate content MUST be stored via a publicly verifiable external reference address **recorded on the verifiable record**; scheduling, attendance attestation, and the post-debate member vote … MUST be recorded on the verifiable record." The v1 trail is **application-held** — complete and append-only, and **not independently checkable by a third party** until the **DES-097 audit-record anchoring** (Doc 13 stage **S-8**) publishes the attestation hashes. That is unbuilt. Doc 03 DES-067 rule 7 states the boundary in terms rather than arguing around it, and Doc 02 §16.3.1 itself scopes FR-066's v1 mechanism as "on-chain CID attestation" — which v1 does not have either. **This is the same clause FR-092 stays open on**, and it is recorded the same way. **OWED:** the DES-097 S-8 anchoring — architect for the mapping, engineer for the build. **TC-3317 is the case that will close this row** |
| BR-013 | **FR-067** candidacy only from a net-positive post-debate member vote; no automatic advancement for incumbency; no automatic renomination without the full cycle — and §8's "the attempt is **refused and logged**" | **DES-067** (amended v2.15.0, Doc 03 v2.16.0 §10.13.14 — rules 3–6; rule 6 states the v1 boundary and refers the ruling here) | **SCR-23** per Doc 03 §10.12.4 | EP-07 ▸ FE-032 ▸ US-0077 | TC-3320, TC-3321, TC-3322, **TC-3592, TC-3596, TC-3607, TC-3610, TC-3617** | **TC-3592, TC-3596 Pass (obs.) · UT-0891, UT-0893** (protocol); **TC-3607, TC-3610 Pass (obs.) · UT-0899, UT-0901** (sdk); **TC-3617 Pass (obs.) · UT-0906** (web) — run **R-21**. **TC-3320..TC-3322 stay Blocked**; **TC-3322 is this row's open clause** | ☐ **G-NOMECH** _(was G-PHASE3; reclassified v2.13.0, NOT closed — the second row the architect referred here for ruling, and the closest call in this version)_ — **every clause but one is proved, and the one is a two-word conjunction.** **PROVED.** *Candidacy from the vote:* PUBLISHED is reachable **only** from VOTE_OPEN, only from DEBATES_COMPLETE, and every other edge throws `ILLEGAL_TRANSITION` naming `from` and `to`; the terminal stages have no exits (UT-0891). The close reads the tally **through `IBallotService.computeTally` alone** and advances iff `isNetPositive` — **strictly** positive, so a **tie does not advance** and **zero votes does not advance** (UT-0893, UT-0901); the tally and the ballot service's `resultHash` go on the trail. **The candidate service stores no ballot** — asserted **structurally**, by walking its Maps and Sets and proving the ballot present in the ballot service, which is what stops the claim being vacuous (UT-0901). *No incumbency advantage:* the office-holder takes the **identical** path and is NOMINATED, not PUBLISHED; `officeHolder` is **never read on the nomination or publication path** — spy-asserted **through `closePostDebateVote()`**, not merely through `nominate()`; **no method or parameter** on the service mentions incumbent, renominate, override or skip; and **the candidate set is empty until a net-positive vote closes**, so there is no other route onto the ballot (UT-0899). The surface names the incumbent and **disclaims the office** (UT-0906). *No automatic renomination:* two attended debates leave the candidacy DEBATING and the vote cannot open (UT-0898). **RULING — "the attempt is refused AND LOGGED": the logging half is NOT SATISFIED, and the row stays open on it alone.** **Refusal is discharged, and discharged in the strongest available form:** there is **no call that adds a candidacy to a ballot** — publication is the sole effect of a closed net-positive vote — so the attempt the Gherkin describes cannot even be expressed against this API, and any out-of-order transition throws. **Logging is not discharged.** Doc 03 DES-067 rule 6 states it without hedging: "a refused call changes no state, and the trail records state; **v1 therefore appends no event for a refused attempt**." The compensating argument the design offers — every PUBLISHED candidacy's trail carries its complete cycle, so a candidacy on the ballot without one is impossible and its absence detectable — establishes **integrity**, which is a different property. **A capability-absence argument can discharge a prohibition; it cannot discharge a positive obligation to produce a record, because an absence produces none.** Detecting that no illegitimate candidacy exists is not the same as recording that someone tried to create one, and the second is what the clause asks for. This is the FR-077 precedent exactly: a DES paid, half a guarantee proved, the row open on the other half. **No `TC` is minted Pass for this clause** — there is nothing to assert. **OWED:** an engineer touch appending a refusal event (Doc 03 §13 already carries it) and the `TC` that asserts it. **TC-3322 is the case that will close this row** |
| BR-003 | **FR-068** tenure waiver first 3 months for newly chartered parties; FR-023/FR-028 anti-capture controls fully active | DES-068 | — | EP-03 ▸ FE-030 ▸ US-0078 | TC-3310, TC-3311, TC-3312 | UT-0220 (mandated; anti-capture defence) | ☐ **G-PHASE3** — tenure-waiver flag (DES-068) not implemented; depends on FR-064 single-party membership |
| BR-002 | **FR-069** deterministic enrolment nullifier Poseidon(stable_id_secret, enrolment_scope); five in-circuit checks (trust-anchor hash is public signal[4]; on-chain binding check per SC-01/DES-069) | DES-069 · ADR-017 | — | EP-01 ▸ FE-033 ▸ US-0079 | TC-3323, TC-3324, TC-3325, TC-3343, TC-3345 | none | ☐ **G-CIRCUIT** — in-circuit enrolment nullifier (DES-069); personhood_enrol circuit not compiled; MockVerifierAlwaysTrue in place |
| BR-002 | **FR-070** pluggable credential adapter; three candidate types: eIDAS 2.0, ICAO Doc 9303 NFC, offline paper KYC (e.g. Aadhaar) | DES-070 · ADR-017 | — | EP-01 ▸ FE-034 ▸ US-0080 | TC-3326, TC-3327, TC-3328, TC-3329, TC-3344 | none | ☐ **G-CIRCUIT** — credential adapter interface (DES-070); circuits + adapter infrastructure not deployed |
| BR-002 | **FR-071** nullifier collision routes to recovery state machine; key rotates; membership, tenure, history survive; no second identity | DES-071 · ADR-018 | — | EP-05 ▸ FE-035 ▸ US-0081 | TC-3333, TC-3334 | none | ☐ **G-PHASE3** — nullifier-collision recovery state machine (DES-071, ADR-018) not implemented |
| BR-002 | **FR-072** seven-day recovery delay; active-key veto window ≥ delay; no voting during delay; notification at initiation | DES-071 · ADR-018 | — | EP-05 ▸ FE-035 ▸ US-0082 | TC-3335, TC-3336, TC-3337, TC-3338, TC-3339 | none | ☐ **G-PHASE3** — recovery 7-day delay and veto guard (DES-071, ADR-018) not implemented |
| BR-002 | **FR-073** government eID sole enrolment-nullifier-minting class per region (Phase 1); availability-only classes MUST NOT mint | DES-072 · ADR-016 | — | EP-01 ▸ FE-036 ▸ US-0083 | TC-3330, TC-3331, TC-3332 | none | ☐ **G-PHASE3** — government-eID class enforcement (DES-072, ADR-016) not deployed to PersonhoodRegistry |

**Must FR subtotal (pre-v2.0.0 rows): 54 rows · 14 complete · 40 open.** _(**v2.14.0, ISS-01(a) — this line still read "12 complete · 42 open" after v2.13.0 closed two rows inside this block.** **FR-036** and **FR-037** both close, so 12 + 2 = **14** and 42 − 2 = **40**. **The figure is DERIVED, not retyped:** a row-wise count of the ✅ markers in §3.1 above this line returns **14** of **54**. None of v2.13.0's 43 OPs touched this line — an authoring omission in the spec, not transcription residue, and the third instance in this document's life of the defect class its own Status block names.)_

---

#### v2.0.0 Must FR additions — FR-074..FR-120 (SRS v2.2.0)

Legend for new rows: `DES` = **none** for FR-074..FR-111 (Doc 03 §16 deliberate phasing; G-TRACE); `DES` = specific element for FR-112..FR-120. All 47 new rows are **OPEN**. `SCR` = **none** (no screen assignments for v2.0.0 FRs yet). `UT evidence` = **none** (no implementing contracts in this drop).

| BR | FR | DES (+ADR) | SCR | EP ▸ FE ▸ US | TC (Doc 07) | UT evidence | Status |
|---|---|---|---|---|---|---|---|
| BR-020, BR-006 | **FR-074** country selection scopes party-political participation to exactly one jurisdiction; second selection refused; change governed by FR-008 | none | none | EP-01 ▸ FE-037 ▸ US-0084 | TC-3400 | none | ☐ **G-TRACE + G-PHASE3** — no DES in Doc 03 §5.2 (Doc 03 §16 deliberate next-increment phasing); no implementation in this drop |
| BR-020 | **FR-075** platform party creation distinct from legal registration; platform MUST NOT represent activation as legal registration | none | none | EP-01 ▸ FE-037 ▸ US-0085 | TC-3401 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-014, BR-019 | **FR-076** party creation requires published founding-member set and public digital constitution with machine-checkable mandatory sections; missing sections named | none | none | EP-02 ▸ FE-038 ▸ US-0086 | TC-3402 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-014 | **FR-077** non-violence clause verified by code; publication refused if absent or altered; **every subsequent amendment** refused likewise | **DES-101** | **SCR-04, SCR-05** | EP-02 ▸ FE-038 ▸ US-0087 | TC-3403, TC-3508..TC-3510, **TC-3541** | UT-0071..UT-0075 (**inh.** protocol Doc 06 v2.2.0); UT-0786 (**inh.** sdk); UT-0849..UT-0851 (**inh.** web) | ☐ **G-NOMECH** _(was G-TRACE; reclassified v2.4.0)_ — **the chain gap is closed**: DES-101 (Doc 03 v2.8.1 §10.13.10) assigned, SCR-04/SCR-05 bound, so rules 1–3 are satisfied and the **publication** half passes at protocol + sdk + web (TC-3508..TC-3510, corrected in Doc 07 v2.3.1). **Rule 4 fails.** FR-077's stated guarantee is refusal at publication **AND** at "every subsequent amendment"; only publication is verified, and nothing implements the amendment half **at either tier**: there is no application charter-amendment path (`validateDraft` runs at `createDraft` and `publishDraft` only), and on-chain `Party.amendCharter` (`packages/contracts/src/core/Party.sol` ~line 350) overwrites `charter.charterHash`/`charterCID` after checking only `immutableClause[clauseId]` — it stores a hash and a CID, never sees the charter text, and performs no clause verification. A constitutional-tier amendment naming any other clauseId can therefore install a charter with the clause stripped, and nothing refuses it. This is a **fragment of the guarantee, not the whole of it** — rule 4 is explicit that a fragment does not close a row. Found by the tester at v2.4.0 while applying the DES-101 paydown. **v2.4.1 — the mechanism is now DESIGNED, and the row is UNCHANGED.** Doc 03 v2.8.3 **§10.13.10.1** specifies it: (1) the charter becomes a **clause map** whose document hash is *derived* from the map, so `amendCharter` amends only the clause it names and can no longer replace the whole document wearing one clause's name — this is the structural fix; (2) the non-violence `clauseId` is **platform-immutable**, written at construction for **every** party independent of founder choice, so the guarantee no longer depends on each party electing to keep it; (3) **amendments carry the text** they change, so the contract verifies rather than trusts a document it never sees. Reviewer-qa independently reproduced both failure modes against `Party.sol` and found zero non-violence checks in any contract. The build is governed by **`PREREQ-01`** (approver ruling, Rathish, 2026-08-29; `artifacts/status/DECISIONS-2026-08-29-NONVIOLENCE-ENTRENCHMENT.md`) — a **separately tracked blocking prerequisite** to the on-chain governance increment, not a line item inside it, with DES-101 §10.13.10.1 rule 6's adversarial amendment test as the closing evidence. That test is minted as **TC-3541** (Doc 07 v2.3.2, No mechanism — executable today and it would fail). **`PREREQ-01` governs WHEN the fix lands, not whether this row closes:** the row closes when the clause-map refactor is built and TC-3541 passes, and not before. A design is not an implementation. **Not exploitable in v1** — v1 runs no on-chain governance (ADR-024 §(b)) — so no v1 work is blocked; the exposure arrives with the on-chain governance increment |
| BR-019, BR-008 | **FR-078** party constitution versioned immutably; amendable only through tiered proposal process; sections may be entrenched per FR-027 | none | none | EP-02 ▸ FE-038 ▸ US-0088 | TC-3404 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-016 | **FR-079** exactly three participation tiers (Supporter, Worker, Candidate); tiers are descriptive only; tiers MUST NOT confer voting weight, standing, or precedence | **DES-103** | none _(no UI clause in the requirement)_ | EP-04 ▸ FE-039 ▸ US-0089 | TC-3405, **TC-3542** | UT-0087, UT-0088 (**inh.** protocol Doc 06 v2.4.1) | ✅ **COMPLETE** _(was G-TRACE + G-PHASE3; closed v2.5.0)_ — **DES-103** (Doc 03 v2.9.1 §10.13.13) closes the chain gap, and each clause of the stated guarantee has its own passing test. **Exactly three tiers** exist and no privileged fourth can be named (UT-0088). A joiner is **automatically a Supporter** without declaring anything (UT-0087). **No tier confers weight under any configuration** — `votingWeightForTier()` returns **1 for every tier**, so FR-021 is unchanged and a multiplier cannot be introduced by configuration; an **unknown** tier is refused rather than silently weighted, so the failure is loud rather than a default-to-zero (UT-0087). The one clause that permits differentiation — "differentiated eligibility per vote type… only where a published, code-checked rule defines it" — is a **permission, not an obligation**, and the single such rule that exists (the Worker authoring gate) is published and code-checked (UT-0089, FR-090). No UI clause appears in FR-079, so no SCR is required for rule 1 |

| BR-016, BR-017 | **FR-080** Worker tier self-declared with no approval; recorded work is sole credential; informed-consent event recorded before declaration confirmed | **DES-103** | **SCR-15, SCR-12** | EP-04 ▸ FE-039 ▸ US-0090 | TC-3406, **TC-3544, TC-3562, TC-3563** | UT-0872, UT-0873, **UT-0885, UT-0886** (**inh.** web Doc 06 v2.4.2); UT-0832 (**inh.** sdk) | ✅ **COMPLETE** _(was G-NOMECH at v2.5.0; closed v2.5.1)_ — **both failures I recorded at v2.5.0 are fixed, and fixed at the root rather than annotated.** **Rule 1:** DES-103 (Doc 03 v2.9.2) now binds **SCR-15** (Nomination & disclosure consent — the §10.12.4 screen table records the Worker declaration as sharing that consent pattern) **and SCR-12**, closing the missing-SCR gap on a requirement that carries an explicit UI obligation. **Rule 4:** the declaration is now a genuine **two-step informed-consent event**, and I verified the mechanism in the component rather than from its description — `declare-worker` sets consent-pending state **only**, the **sole** call to `onDeclareWorker` is `confirm-worker` inside the panel, and `cancel-worker` returns to the gate recording nothing. Each clause of the guarantee now has its own passing test: **no human approval** — "Nobody reviews this. When you confirm, it is done.", and no control matches /approve\|request\|permission\|await\|pending review/ (UT-0872); **permanence stated before confirmation** — "This lasts for the whole term. You cannot undo it partway through." (duration *and* irrevocability); **participation record stated before confirmation** — "Your record of taking part in this party becomes public for the term — **not only the proposals you put forward, but what you take part in**", whose trailing clause closes precisely the narrow reading that failed at v2.5.0; and **the disclosure genuinely precedes confirmation** — the filing form is unreachable while the panel is shown (UT-0885), so "before … confirmed" has a real moment, which a one-click control could not provide. **Declining records nothing** (UT-0886) — the property that makes this *consent* rather than an unavoidable notice, as FR-080 requires when it calls the act of declaration "the informed-consent event". **Recorded residual (not a blocker):** Doc 03 §10.12.5 class (i) still lists FR-080 as having "no dedicated SCR, no DES surface element, and no US explicitly covering the permanent/public" — two of those three are now demonstrably resolved (DES-103 specifies the surface; SCR-15 is bound), and the third is a shared-surface tidiness question, not a missing link. **Routed to the architect — and DISCHARGED at Doc 03 v2.9.3 (2026-08-29):** that §10.12.5 row is now struck through and CLOSED (DES-103 named as the surface element, SCR-15 as the binding), and the contradicting Wireframe→SCR 3.6 row was aligned with the SCR→Wireframe SCR-15 row. Doc 03's own cycle-1 review found the same stale entry independently, which is a useful corroboration of the finding rather than a duplication of it. Rule 1 asked for *an* SCR; one is bound, and the debt register now agrees |

| BR-016, BR-013 | **FR-081** Candidate tier self-nominated per FR-036; eligibility checked by code against published rules; candidacy decided by the post-debate member vote per FR-067; **no human MAY approve, reject or rank** at any point in the path; **every tier transition recorded append-only with its state (active/inactive)** and never deleted | **DES-107** (new v2.15.0, Doc 03 v2.16.0 §10.13.14 — the chain gap is CLOSED) | **SCR-15**, **SCR-23** per Doc 03 §10.12.4 | EP-04 ▸ FE-039 ▸ US-0091 | **TC-3407**, **TC-3593, TC-3597, TC-3598, TC-3600, TC-3601, TC-3605, TC-3607, TC-3610** | **TC-3407 Pass (obs.)** _(re-statused from **No mechanism** at Doc 07 v2.10.0 — DES-107 designed what it asserts and Doc 06 v2.11.1 built it)_ · **UT-0891, UT-0899, UT-0901**; **TC-3593, TC-3597, TC-3598 Pass (obs.) · UT-0891, UT-0894** (protocol); **TC-3600, TC-3601, TC-3605, TC-3607, TC-3610 Pass (obs.) · UT-0896, UT-0897, UT-0899, UT-0901** (sdk) — run **R-21** | ☐ **G-NOMECH** _(was **G-TRACE + G-PHASE3**; **the G-TRACE half is CLOSED at v2.13.0 by DES-107** and the row is reclassified, NOT closed — the third row the architect referred here, and the one that comes closest)_ — **four clauses of five are proved. The fifth has no field, no read and no assertion, and one `it` would close it.** **PROVED.** *Self-nominated per FR-036:* `nominate()` **has no parameter naming anyone but the caller** (UT-0896), and FR-036's own row closes at this version. *Eligibility checked by code against published rules:* every rule on the path is a **named constant or function** and every refusal a **named code** — maturation (30 days, §10.11), `inScopeForOffice`, the DES-095 counting gate, the endorsement minimum, `validateConsent`, `debatesComplete`, `isNetPositive` (UT-0894, UT-0896). *Decided by the post-debate vote:* the tally read through `IBallotService` **alone** decides, strictly net-positive, with the service storing no ballot (UT-0901). **This clause does not inherit FR-067's open one:** FR-081 restates FR-067's **decision rule**, which is built and asserted; FR-067 stays open on its **refusal-logging** obligation, which FR-081 does not restate. *No human approves, rejects or ranks:* asserted as **absence at both layers on the path** — the protocol module's export scan (UT-0891) and the `CandidateService.prototype` scan (UT-0899). *Recorded append-only and never deleted:* `appendTrailEvent` is the only writer, reads return copies, and the **store has exactly one delete**, the confidential-class disclosure carve-out, asserted by prototype scan so a second delete cannot appear unnoticed (UT-0897); terminal stages have no exits (UT-0891). **RULING — "every tier transition MUST be recorded append-only WITH ITS STATE (active/inactive)": NOT SATISFIED, and `Completion rule 4a` does NOT reach it.** _(v2.14.0, ISS-03: v2.13.0 refused this clause for want of an assertion while closing FR-037's platform-wide clause on a scope premise, and reconciled the two nowhere. **Rule 4a (§1) is now the recorded rule and it expressly excludes this case.** 4a may fix the **extent of an absence**; this clause is a **positive obligation to RECORD**. An inspection here does not bound a gap — it **confirms** one: the datum FR-081 requires does not exist anywhere to be bounded. **Inspection can bound an absence; it cannot manufacture a record.** FR-037's every site holding the protected datum is covered by a passing absence test and inspection fixes only that there is no second site; here there is no site, no test and nothing to fix the extent of.)_ Doc 03 v2.16.0 DES-107 rule 4 states the position with unusual candour: the trail event records the **stage** (`from`, `to`); **no active/inactive field exists in code, no read exposes one, and no cited UT asserts the mapping**. It then publishes the mapping as total and fixed — NOMINATED, CONSENTED, DEBATING, DEBATES_COMPLETE, VOTE_OPEN, PUBLISHED are **active**; NOT_ADVANCED and WITHDRAWN are **inactive** — and records the architect's **view** that derivation satisfies the clause, leaving the ruling here. **It does not.** Completion rules 2 and 3 require a real implementing test that passes **for the clause**, and for this clause there is none: **three absences, not one** — no field, no read, no assertion. **A mapping published in a design document is not a test:** nothing in code enforces it, so if a ninth stage were added tomorrow no test would fail and the mapping would silently become partial. That is not hypothetical — the same document's cycle-2 review found it already miscounting its own enum ("nine stages" where there are eight, ISS-C2-02), which is exactly the failure mode a derivation without a test has. FR-107, the platform requirement this clause instantiates ("every governed entity is active or inactive; state transitions MUST be appended with timestamp and cause"), is itself OPEN. **This is the smallest open clause in the matrix and it is recorded as such rather than waved through:** recording the state on the transition event, or asserting the published mapping in one `it`, closes it. **A second, smaller residual, disclosed:** DES-107 rule 3 notes the **store's** prototype is not scanned for approve/reject/rank — UT-0897's scan covers delete/destroy/remove/purge only. The clause names "the path", and both layers **on the path** are scanned, so the row does not turn on it; but a store is injectable, and **this row must be re-derived if the DES-097(b) production backing exposes any such member**. Routed with DES-107 ISS-08. **OWED:** engineer — one field or one `it`, plus the store scan; then the `TC` |
| BR-017, BR-009 | **FR-082** Supporter-tier: only nullifier stored; no attributable record; no profile surface; NFR-001/002/024 apply unconditionally | DES-093/DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0092, US-0132 | TC-3408, TC-3470, TC-3474 | TC-3470 Pass (obs.) · UT-0750; TC-3474 Pass (obs.) · UT-0757 | ☐ **G-PHASE3** — DES-093/094 assigned (v2.2.0, UI display layer only); US-0132 closes the US gap; full storage/enforcement/linkage-prevention design pending; IS_INSECURE_MOCK=true |
| BR-017, BR-005 | **FR-083** Worker/Candidate-tier: public participation record from consent event; ballot direction never disclosed in any tier; FR-048 elected-rep exception | DES-093/DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0093, US-0132 | TC-3409, TC-3471, TC-3474 | TC-3471 Pass (obs.) · UT-0751; TC-3474 Pass (obs.) · UT-0757 | ☐ **G-PHASE3** — DES-093/094 assigned (v2.2.0, UI display layer only); US-0132 closes the US gap; full participation-record data model and ballot-direction non-disclosure enforcement pending |
| BR-017 | **FR-084** full disclosure schedule published before any declaration window; no post-declaration demand outside schedule | DES-093/DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0094, US-0132 | TC-3410, TC-3472, TC-3474 | TC-3472 Pass (obs.) · UT-0752; TC-3474 Pass (obs.) · UT-0757 | ☐ **G-PHASE3** — DES-093/094 assigned (v2.2.0, UI display layer only); US-0132 closes the US gap; disclosure schedule publication and enforcement not yet designed |
| BR-017, BR-009 | **FR-085** informed consent irrevocable for term; withdrawal before nomination window closes permitted; pre-nomination disclosure data (confidential-class) destroyed on withdrawal (OI-16 adopted) | **DES-028** (amended v2.15.0, Doc 03 v2.16.0 §10.13.14 — **rule 6 is the FR-085 lifecycle and this row's primary backing**) · DES-093/DES-094 (the display layer) · ADR-023 | **SCR-15** | EP-09 ▸ FE-040 ▸ US-0095, US-0132 | **TC-3411**, TC-3474, **TC-3599, TC-3605, TC-3614** _(**TC-3476 REMOVED** — see the status cell)_ | TC-3474 Pass (obs.) · UT-0757; **TC-3411 Pass (obs.)** _(re-statused from **No mechanism** at Doc 07 v2.10.0)_ **· UT-0895, UT-0897, UT-0904**; **TC-3599 Pass (obs.) · UT-0895** (protocol); **TC-3605 Pass (obs.) · UT-0897** (sdk); **TC-3614 Pass (obs.) · UT-0904** (web) — run **R-21** | ✅ **COMPLETE** _(was G-PHASE3; closed v2.13.0)_ — **DES-028 rule 6 gives FR-085 the lifecycle DES it never had — DES-093/094 were always the display layer only — and every clause has its own passing test.** **"The informed-consent event MUST cover the entire campaign and any resulting term and is irrevocable for that term."** `irreversibleForTerm` is one of the three acknowledgements and **must be the literal `true`** (UT-0895); the web crossing states it **before** the confirm control in asserted document order (UT-0904); and the irrevocability is proved **as an absence and at the boundary**: withdrawal **after** the nomination window closes is permitted but **the disclosures STAND** — the candidacy is by then a completed public action (FR-107) — and **no revocation method exists for a term in progress**, so the Gherkin's "the revocation is attempted → no revocation path exists" is satisfied by there being nothing to call (UT-0897). After `lockBallot`, `BALLOT_LOCKED`. **"Withdrawal before the nomination window closes is permitted and MUST cause the system to destroy the disclosure data submitted for that withdrawn candidacy."** `withdraw` before `nominationClosesAt` calls `destroyDisclosures` — **the store's only delete**, asserted by prototype scan — and the trail records `disclosuresDestroyed` **without ever having contained the disclosures** (UT-0897); the surface confirms the destruction to the member (UT-0904). **The OI-16 carve-out holds in both directions:** the confidential-class holding is destroyable **precisely because it never entered the append-only record**, and **no public governance record is destroyed** (FR-107 unbroken). **TC-3476 IS REMOVED FROM THIS ROW, and the ground is subject matter, not convenience.** Doc 03 v2.16.0 §15 surfaced it for this ruling. TC-3476 tests the **FR-131 clause-8 disclosure affordance on the ENROLMENT screen**; FR-085 governs the **candidacy** consent event and the destruction of pre-nomination disclosure data. Different act, different surface, different requirement — and Doc 02 §4.45 already places personhood-enrolment and identity-verification claims **expressly outside** the FR-131 clause (e) route and inside FR-132 §(d), the same boundary this matrix used at v2.12.0 to keep the fifteen `UT-0890` cases off FR-131. **Nothing is lost:** TC-3476 keeps its FR-131 clause-8 and US-0132 links, keeps its **Blocked** status, and **keeps its place on the FR-131 row of this matrix, where it already sits and is already counted**. **And the removal is not what closes this row** — FR-085 closes on TC-3411, TC-3599, TC-3605 and TC-3614, each with a passing test for a named clause, and **it would close with TC-3476 still on it**, because a Blocked case testing a different requirement's clause was never evidence for or against this guarantee. Stated at length because a reader checking whether a Blocked case was moved out of the way deserves the argument rather than a motive |
| BR-017, BR-009 | **FR-086** prior Supporter-period activity remains anonymous permanently after public role taken; no linkage through any data or combination of public outputs | DES-093/DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0096, US-0132 | TC-3412, TC-3474 | TC-3474 Pass (obs.) · UT-0757 | ☐ **G-PHASE3** — DES-093/094 assigned (v2.2.0, UI display layer only); US-0132 closes the US gap; cross-tier unlinkability guarantee for role-changers not yet designed |
| BR-015, BR-014 | **FR-087** committees formed; sole permitted output is proposals entering ordinary lifecycle; no special precedence; composition and minutes public | none | none | EP-11 ▸ FE-041 ▸ US-0097 | TC-3413 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015, BR-008 | **FR-088** committees MUST NOT hold capabilities that can change who wins, who votes, or who is a member; non-permitted configuration rejected by code | none | none | EP-11 ▸ FE-041 ▸ US-0098 | TC-3414 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015 | **FR-089** committee membership expires at term end by code; continuation requires fresh member vote; FR-041 discipline | none | none | EP-11 ▸ FE-041 ▸ US-0099 | TC-3415 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015, BR-003 | **FR-090** proposal authorship public; any Worker-or-above member may submit a competing proposal with equal standing in the same decision window (OI-14 adopted) | **DES-104** | **SCR-12** | EP-11 ▸ FE-041 ▸ US-0100 | TC-3416, **TC-3543, TC-3545, TC-3546, TC-3548, TC-3549, TC-3550, TC-3551** | UT-0089, UT-0094, UT-0095 (**inh.** protocol Doc 06 v2.4.1); UT-0832..UT-0838 (**inh.** sdk); UT-0874..UT-0877 (**inh.** web) | ✅ **COMPLETE** _(was G-TRACE + G-PHASE3; closed v2.5.0)_ — **DES-104** (Doc 03 v2.9.1 §10.13.13) closes the chain gap with **SCR-12** bound, and every clause of the stated guarantee has its own passing test. **Authorship is public** — a Worker's authorship is recorded publicly (UT-0832) and the surface **names both authors**, so agenda-setting is visible (UT-0875). **Any Worker-or-above member may submit a competing proposal** — gated on self-declared tier by a rule that takes no approver (UT-0089), refused for a non-member whatever tier they claim (UT-0833). **Equal standing in the same window** is proven both positively and as an absence: a second proposal joins the first author's window, and **differently-phrased spellings of one question group into ONE window** (UT-0835, UT-0095) — without which "same window" would be defeated by rephrasing; the first author holds **no** withdraw, reject, reorder, demote, merge or veto path (UT-0836); **no proposal carries a weight, rank or priority field** and `isOriginal` is provenance only (UT-0837); and the surface renders both with the **same affordances**, offers **no** cross-author control, and marks the tag as provenance, not precedence (UT-0874, UT-0876, UT-0877). Entry closes exactly when voting starts (UT-0838, UT-0094). **Revisit flag DISCHARGED — RULED 2026-08-30** (Rathish, Human Approver; artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md §1; Doc 03 v2.10.0 §10.13.13(b)). The flag this row carried at v2.5.0–v2.5.2 read: *if the approver rules PROPOSING a counting action, this row and TC-3545 must be revisited.* **The approver ruled the other way.** PROPOSING is **NOT** an FR-123 counting action — authoring is OPEN participation, because gating it on verification status would be a participation restriction FR-020 prohibits; the commissioning brief that said otherwise is superseded by that constraint. **The FR-conformant reading closed here is confirmed correct; this row and TC-3545 stand unchanged.** The OI-14 Worker-tier condition is unchanged — it sits on the orthogonal privacy-disclosure axis and is self-declared with no approver (**UT-0089**, which asserts `canAuthorProposal.length === 1` so no approver can be passed; **UT-0832**, the tier requirement). That it is **not a verification gate** is asserted by **UT-0834** — the service holds no verifier and `fileProposal` takes none. _(v2.7.0: all three claims had been attributed to UT-0089/UT-0832; the no-verification-gate half is UT-0834's.)_ **NEW REVISIT FLAG (v2.6.0) — Doc 03 §16 `Q16` / Doc 02 §13 (i), raised 2026-08-30:** FR-090 requires competing proposals to be voted **in the same decision window**; the ballot model gives each proposal an **independent binary ballot**; and DES-104 deliberately exposes no window-closing, merging or ranking capability. **Two competing proposals can therefore both pass, and no rule says what the party then gets.** **This row stays ✅ COMPLETE and that is the correct call** — Q16 concerns *post-vote window resolution*, which FR-090's stated guarantee (public authorship · equal standing · same window · no cross-author control) does not require, and which this layer does not hold; all four completion rules still close. But Q16 **names FR-090** and is OPEN, so it is flagged here in the FR-051/FR-130 pattern rather than left invisible: **if the resolution rule that answers Q16 alters what "the same decision window" guarantees, this row and TC-3548/TC-3549 must be re-derived.** The answer MUST NOT be a window-closing capability — that absence is the anti-capture control this row certifies |

| BR-014, BR-008 | **FR-091** proposal lifecycle stages (proposal → review → discussion → debate → vote → decision → implementation → measurement) code-enforced in sequence, **transitions executed by code per published timelines**; no stage skipped or human-vetoed | **DES-105** | **SCR-12** | EP-05 ▸ FE-042 ▸ US-0101 | TC-3417, **TC-3552, TC-3553, TC-3554, TC-3555** | UT-0090..UT-0094 (**inh.** protocol Doc 06 v2.4.1); UT-0839..UT-0842 (**inh.** sdk); UT-0878..UT-0880 (**inh.** web) | ☐ **G-NOMECH** _(was G-TRACE + G-PHASE3; reclassified v2.5.0)_ — **DES-105 closes the chain gap** and the **order** guarantees are covered completely: the eight published stages advance **one step at a time** to MEASUREMENT and then refuse (UT-0090, UT-0841); a **skip** is refused *naming what was skipped*, a **reversal** is refused so deliberation cannot be re-run for a better answer, a **no-op** is refused, and an **unknown stage** is rejected rather than treated as position zero (UT-0091, UT-0092); the capability-absence set holds at all three layers — no override/force/skip-to, `advanceStage()` takes **no target, no force, no skip and no actor**, and the surface offers no skip control (UT-0093, UT-0842, UT-0879); and the three deliberative stages produce **records, never outcomes**, open to every member including open-tier (UT-0094, UT-0839, UT-0840, UT-0880). **Rule 4 fails on one clause:** FR-091 requires transitions "executed by code **per published timelines**". `governance.js` `schedule()` exists but is **not wired into the proposal service** — the demo advances by a button, which can only ever move one step because the service exposes no other move (Doc 06 §7 #25 records this as owed). The **anti-capture half is done; the automation half is not**, and a row does not close on a fragment. **Taxonomy question RULED 2026-08-30 — this row is unaffected** (Rathish, Human Approver; Doc 03 v2.10.0 §10.13.13(a)). This row previously recorded that FR-091's stages and ADR-008's `PROPOSAL_STATE` are a different taxonomy, that a reconciliation was owed, and that it might bear on what the row must test. The ruling is that they are **complementary, each canonical at its own layer** — FR-091 owns the public process, `PROPOSAL_STATE` owns the ballot; their subjects differ (a decision window vs one proposal's ballot, one-to-many at resolution), so no reconciliation was ever owed in the sense of choosing between them. **The published stage set is UNCHANGED, so it bears on nothing this row tests.** A normative derivation rule is recorded and it binds **BOTH versions**: the **ballot layer** is the sole authority on ballot state — the DES-096 database backing in v1, `Governor.State` at the v2 seam — and the `VOTE`/`DECISION`/`IMPLEMENTATION` stages MUST derive from whatever backing `IBallotService` is bound to, never be tracked independently. It is a **build obligation, not a v1 test obligation today**, because the proposals layer built so far derives nothing — it stops at `admitToBallot()` and hands off. _(v2.6.1: this read "recorded for v2 … a v2-seam obligation", the scope Doc 03 v2.11.0 corrected after review.)_ **This row therefore carries exactly ONE GAP: the unwired "per published timelines" clause above** — that clause alone is what holds it open, and closing it closes the row. **One related item is tracked elsewhere and is deliberately NOT a gap in this row:** Doc 02 §13 **(h)** / Doc 03 §16 **Q15** — FR-091's *text* does not say what becomes of a DEFEATED or CANCELLED decision. That is a requirement clarification owed to the product-owner, raised by the same 2026-08-30 mapping; it does not affect this row's status (the proposals layer holds no vote, so no window can be defeated and no test can turn on it) and is named here so the sentence above is not read as claiming FR-091 has no other open item of any kind |

| BR-014, BR-019 | **FR-092** permanent decision trail for every decision (proposal(s), authorship, deliberation, vote result, enacted consequence, implementation status, measured outcome); reconstructable from public data alone | **DES-106** | **SCR-12** | EP-05 ▸ FE-042 ▸ US-0102 | TC-3418, **TC-3559, TC-3560** | UT-0846, UT-0847, UT-0848 (**inh.** sdk Doc 06 v2.4.1); UT-0883 (**inh.** web) | ☐ **G-NOMECH** _(was G-TRACE + G-PHASE3; reclassified v2.5.0)_ — **DES-106 closes the chain gap** and the **append-only** property is genuinely proven: the trail records window opening, every proposal, deliberation, stage change and admission **in order**; it **cannot be rewritten by a caller** and the store exposes **no delete path**; reads return **copies**, so a caller mutating what it received changes nothing; timestamps come from the injected clock, so a run is reproducible (UT-0846, UT-0847, UT-0848). **Rule 4 fails on two independent grounds.** **(i) The trail is incomplete against its own enumeration.** FR-092 names the **vote result**, the **enacted consequence**, **implementation status** and **measured outcome** among the things the trail MUST comprise. This layer records none of them — indeed **TC-3558/UT-0845 asserts the service never casts, stores or counts a vote**, which is correct design and simultaneously means four of the seven enumerated elements have no recording mechanism. **(ii) Third-party reconstruction is not built.** FR-092 requires the trail be "reconstructable end-to-end by any **third party** from **public data alone**"; the trail lives in the application store and needs DES-097 audit-record anchoring (Doc 06 §7 #24; Doc 13 stage S-8). To its credit the drop does not paper over this — the surface **states plainly** that the record is not yet independently checkable in v1 (`trail-v1-note`, UT-0883, TC-3560), which is the honest posture and is also the reason the row cannot close |

| BR-013, BR-004 | **FR-093** candidate selection on published schedule (nomination, question phase, debates per FR-066, post-debate vote per FR-067, election); unanswered member questions visibly recorded | **DES-108** (new v2.15.0, Doc 03 v2.16.0 §10.13.14 — the chain gap is CLOSED; rules 1–2 built, rule 3 designed and owed §13) | SCR-16, **SCR-23** per Doc 03 §10.12.4 | EP-07 ▸ FE-043 ▸ US-0103 | TC-3419, **TC-3611** | **TC-3611 Pass (obs.) · UT-0901** (sdk; run **R-21**) — the published, immutable timetable only. **TC-3419** is re-statused **No mechanism → Blocked** at Doc 07 v2.10.0 and is this row's open clause | ☐ **G-NOMECH** _(was **G-TRACE + G-PHASE3**; **the G-TRACE half is CLOSED at v2.13.0 by DES-108** and the row is reclassified, NOT closed)_ — **the schedule now has a design and most of a build; two of its five phases do not exist.** **BUILT AND PROVED:** the schedule **is** the election record, published at `openElection` and immutable — the service exposes **no update method** (UT-0901, TC-3611) — and the **nomination window**, the **debates** (DES-067), the **post-debate member vote** (DES-067) and the **ballot lock** are built and separately evidenced on the FR-066 and FR-067 rows. **NOT BUILT, and these are the named blockers.** **(a) The question phase.** DES-108 rule 3(a) designs `askQuestion` (appending `QUESTION_ASKED` with the question text and a per-election question id, and **not** the asker's identity on the public record), `recordAnswer` (by the candidate only) and `closeQuestionPhase` (appending `QUESTION_UNANSWERED` for every open question, so the unanswered state is visible and can never be erased). **None of it exists.** FR-093's two normative obligations beyond the schedule — "questions and answers MUST be placed on the public record" and "**unanswered questions MUST be visibly recorded as unanswered**" — therefore have **no product to execute against**, and TC-3419 is Blocked rather than passing. **(b) The election.** The office ballot is DES-076 rule 2 — the same unbuilt voter-scope guard and tie-break field that keep FR-039 open — so the last phase of the published schedule has no mechanism either. **A related product gap is recorded rather than absorbed:** FR-093's Gherkin says the phase durations were "set at OI-17 closure"; §10.11 closed OI-17 **without** them, v1 publishes per-election dates with **no floor**, and Doc 03 §16 **Q18** asks the product-owner whether a floor is wanted. **That is a requirement question, not a test gap, and it does not by itself hold this row open** — the four built phases are immutable once published, which is what the clause asks — but **if a floor is ruled in, this row must be re-derived against it**. **OWED:** engineer for (a) and (b); the design for both is already written. **TC-3419 is the case that will close this row** |
| BR-019, BR-014 | **FR-094** manifesto is structured machine-readable commitment set with time horizons (1/3/5/10/30 yr) and per-sector baseline/target/budget/timeline/method/owner; missing field named and publication refused | none | none | EP-08 ▸ FE-044 ▸ US-0104 | TC-3420 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-005 | **FR-095** every manifesto commitment carries a stable per-commitment ID with progress status and linked evidence; status updates append-only; supersedes FR-046 | none | none | EP-08 ▸ FE-044 ▸ US-0105 | TC-3421 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-010 | **FR-096** mechanical anomaly detection over treasury public record (velocity, structuring, concentration, round-trip); every flag published on transparency dashboard; flags MUST NOT freeze funds or block governance | none | none | EP-11 ▸ FE-045 ▸ US-0106 | TC-3422 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-019 | **FR-097** every public-tier role-taker files COI disclosure on schedule and on material change; disclosures public-class; missing/overdue disclosure flagged by code on participation record | none | none | EP-11 ▸ FE-046 ▸ US-0107 | TC-3423 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-015 | **FR-098** COI review is investigation-and-recommendation only via sortition reviewers; recusal by voluntary compliance, member vote, or charter code rule; no reviewer holds outcome power | none | none | EP-11 ▸ FE-046 ▸ US-0108 | TC-3424 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-015 | **FR-099** independent internal audit by per-case sortition from eligible members; read-only access to all party records; reports on published schedule; no enforcement power | none | none | EP-11 ▸ FE-047 ▸ US-0109 | TC-3425 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018 | **FR-100** published maximum timelines per dispute stage; code-enforced; stage transitions recorded; timeline breach itself recorded on decision trail | none | none | EP-11 ▸ FE-048 ▸ US-0110 | TC-3426 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-015 | **FR-101** per-case appeal/review panels drawn by verifiable sortition from eligible members; no standing panel body; outputs are recommendations to membership or inputs to code rules | none | none | EP-11 ▸ FE-048 ▸ US-0111 | TC-3427 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-016, BR-003 | **FR-102** machine-readable member-rights charter published; every right maps to a code-enforced capability; no party charter may reduce any right below platform floor | none | none | EP-11 ▸ FE-049 ▸ US-0112 | TC-3428 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-012 | **FR-103** conduct votes using nullifier+privacy mechanics on public-tier participants; individual votes private, aggregates public; Supporter-tier conduct vote impossible by construction | none | none | EP-11 ▸ FE-050 ▸ US-0113 | TC-3429 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-012 | **FR-104** removal from role requires affirmative active-vote quorum; silence MUST NOT remove; subject's statement right honoured; FR-023/FR-028 surge defence applies | none | none | EP-11 ▸ FE-050 ▸ US-0114 | TC-3430 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-012 | **FR-105** expulsion from party at strictly higher bar than removal; public-tier only (Supporter expulsion impossible by construction); historical records unaltered (OI-15 adopted) | none | none | EP-11 ▸ FE-050 ▸ US-0115 | TC-3431 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017, BR-009 | **FR-106** every data entity carries exactly one classification (public/restricted/confidential); unclassified entity MUST NOT be storable | none | none | EP-09 ▸ FE-051 ▸ US-0116 | TC-3432 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-008 | **FR-107** nothing deleted — every governed entity is active or inactive; state transitions appended with timestamp and cause; history MUST NOT be rewritten; confidential-class carve-out for pre-nomination disclosures (FR-085, OI-16) | none | none | EP-09 ▸ FE-051 ▸ US-0117 | TC-3433 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-009 | **FR-108** public verifiable record carries only proofs, timestamps, counts, governance events; restricted- and confidential-class data MUST NOT be written to any public chain (CON-002/CON-008/NFR-010) | none | none | EP-09 ▸ FE-051 ▸ US-0118 | TC-3434 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-005 | **FR-109** public transparency dashboard per party: governance activity, treasury summary with anomaly flags, participation aggregates, commitment progress, dispute-timeline compliance; aggregate-only, no per-member drill-down | none | none | EP-11 ▸ FE-052 ▸ US-0119 | TC-3435 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-005 | **FR-110** performance scorecard: commitments vs measured progress factually, with methodology, baselines, and evidence links; MUST NOT rank parties or emit editorial conclusions | none | none | EP-11 ▸ FE-052 ▸ US-0120 | TC-3436 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017, BR-009 | **FR-111** zero per-user behavioural tracking; analytics aggregate-only; personalisation client-side and user-held only; UT-0525 and UT-0740 preserved and extended to all v2.0 surfaces | none | none | EP-09 ▸ FE-053 ▸ US-0121 | TC-3437, TC-3447 | UT-0525 (**obs.**), UT-0740 (existing surfaces only — **not run** this session; see §0.2) | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); UT-0525/UT-0740 cover existing surfaces only; v2.0 surfaces not yet built |
| BR-015, BR-006, BR-012 | **FR-112** trust-anchor revocation is a member-voted platform-governance action at highest tier with published expedited emergency variant; no operator/funder/employee path | DES-090 | none | EP-12 ▸ FE-054 ▸ US-0122 | TC-3438, TC-3449 | none | ☐ **G-PHASE3** — DES-090 assigned; TrustAnchorLifecycle contract not deployed in this drop |
| BR-015, BR-006 | **FR-113** trust-anchor rotation follows member-vote governance at published tier; outgoing anchor enrolments remain valid; ROTATION_ABORTED state on abortRotation(); pending anchor rejected post-abort | DES-090 | none | EP-12 ▸ FE-054 ▸ US-0123 | TC-3439, TC-3452 | none | ☐ **G-PHASE3** — DES-090 assigned; TrustAnchorLifecycle state machine not deployed |
| BR-021, BR-015 | **FR-114** steward body elected by all enrolled citizens via FR-030..035 mechanics; fixed terms; recallable mid-term by affirmative-quorum mechanism (FR-104 discipline); candidacy is public-tier role-taking | DES-088 | none | EP-12 ▸ FE-055 ▸ US-0124 | TC-3440 | none | ☐ **G-PHASE3** — DES-088; StewardRegistry not deployed; IMMUTABLE CORE contract not implemented |
| BR-021, BR-015 | **FR-115** steward powers enumerated and exhaustive: (a) draft/publish proposals, (b) coordinate audits/ceremonies/issuer-onboarding, (c) hold funds/sign vendor contracts, (d) publish operational reports; list is exhaustive | DES-089 | none | EP-12 ▸ FE-055 ▸ US-0125 | TC-3441 | none | ☐ **G-PHASE3** — DES-089; steward powers ABI allowlist not implemented |
| BR-021, BR-015, BR-008 | **FR-116** stewards MUST NOT exercise power that can change who wins, who votes, or who is a member; no emergency override; issuer onboarding coordination only, not enactment | DES-089 | none | EP-12 ▸ FE-055 ▸ US-0126 | TC-3442 | none | ☐ **G-PHASE3** — DES-089; steward prohibition and CI assertion not yet implemented |
| BR-021 | **FR-117** protocol survives its stewards: no steward signature, action, approval, or liveness required for any citizen-facing capability; capability-absence suite mandated (static dep-guard + dynamic vacancy simulation) | DES-089 | none | EP-12 ▸ FE-055 ▸ US-0127 | TC-3443, TC-3451, TC-3453, TC-3465, TC-3466, TC-3467, TC-3468 | none | ☐ **G-PHASE3** — DES-089; StewardRegistry and dep-guard CI check not implemented; vacancy simulation not built; TC-3467/3468 test vacancy-immediate citizen fallback (DES-092; not deployed) |
| BR-021, BR-015 | **FR-118** seven charter rules entrenched as unamendable by any vote at any tier; amendment proposals targeting Tier-1 rules rejected by code at submission | DES-087 | none | EP-12 ▸ FE-056 ▸ US-0128 | TC-3444, TC-3449, TC-3455 | none | ☐ **G-PHASE3** — DES-087; ProtocolGovernance entrenched-rule enforcement not deployed |
| BR-021, BR-008 | **FR-119** three-tier amendment structure: Tier-1 fork-only; Tier-2 named absolutes via super-process (DES-087 constants); Tier-3 ordinary citizen vote with published constants | DES-087, DES-091 | none | EP-12 ▸ FE-056 ▸ US-0129 | TC-3445, TC-3450, TC-3454, TC-3456, TC-3457, TC-3458, TC-3459, TC-3460, TC-3461, TC-3462, TC-3463, TC-3464, TC-3469 | none | ☐ **G-PHASE3** — DES-087, DES-091; ProtocolGovernance and GovernanceConstants not deployed; TC-3469 tests anti-circularity direct attack (Open Layer vote attempting to lower Guarded Layer constant) |
| BR-021, BR-003 | **FR-120** unconditional right to fork (FR-053 mechanics; NFR-018 full-history export) entrenched in Tier-1; fork right available regardless of any steward action or protocol vote | DES-034 | none | EP-12 ▸ FE-056 ▸ US-0130 | TC-3446 | none | ☐ **G-PHASE3** — DES-034; `fork` flag OFF above dev; FR-053 open critical; Phase-3 only |
| BR-020, BR-006 | **FR-121** pilot jurisdiction sequence: Phase-1 India (Aadhaar offline paperless KYC); Phase-2 EU (eIDAS 2.0 wallets); Phase-3 USA deferred — ordered by technical readiness of the identity rail, not market size; CON-015 must clear before Phase-1 adapter is implementation-ready | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (Doc 03 §16 deliberate next-increment phasing); no implementation in this drop |
| BR-003, BR-016 | **FR-122** open-tier (Supporter) participants refused at all counting actions; IEligibilityVerifier returns false for any non-counting-tier participant; refusal reason emitted | DES-095 · ADR-025 | none | EP-01 ▸ FE-057 ▸ US-0133 | TC-3478, TC-3530, TC-3532, TC-3533, TC-3534, **TC-3555, TC-3556** | TC-3478 Pass (obs.) · UT-0763, UT-0764; UT-0826, UT-0828, UT-0830 (**inh.** sdk Doc 06 v2.3.2); UT-0863, UT-0864 (**inh.** web Doc 06 v2.3.2) | ☐ **G-PHASE3** — DES-095 assigned; IS_INSECURE_MOCK=true; production ZK-backed enforcement pending Phase 3. **v2.3.0 adds the honest-refusal half of this requirement end to end:** an open-tier member is refused `NOT_COUNTING_ELIGIBLE` with a reason naming government-ID verification, **and remains a full member** — `countingStatus` `{member: true, counted: false}`, memberCount 1, officialStrength 0 (UT-0826); the refusal is surfaced with the FR-131(d) four-clause notice (UT-0864) and the two figures are displayed side by side rather than conflated (UT-0863). Row stays OPEN: the gate is a stub over an in-memory credential store, not ZK-backed enforcement. **v2.5.0 extends the evidence to the proposals flow:** an open-tier member may **deliberate** without any verification (the verifier is not called and the entry point takes no verifier parameter — UT-0839, UT-0880), and the ballot refusal carries **`stillAMember: true`** and **`mayStillDeliberate: true`**, so the refusal states what the member *keeps* rather than only what they lose (UT-0844, UT-0882) |
| BR-006, BR-010, BR-016 | **FR-123** counting-tier verified participants pass the eligibility gate; IEligibilityVerifier returns true; counting action proceeds | DES-095 · ADR-025 | none | EP-01 ▸ FE-057 ▸ US-0133 | TC-3477, TC-3520, TC-3530, TC-3531, TC-3532, TC-3533, **TC-3556, TC-3557, TC-3558** | TC-3477 Pass (obs.) · UT-0760, UT-0761, UT-0762; UT-0826, UT-0827, UT-0828, UT-0830 (**inh.** sdk Doc 06 v2.3.2); UT-0863, UT-0865, UT-0866 (**inh.** web Doc 06 v2.3.2) | ☐ **G-PHASE3** — DES-095 assigned; IS_INSECURE_MOCK=true; production ZK-backed gate pending Phase 3. **v2.3.0 evidences the counting distinction properly:** official strength counts **verified members only** — a verified member is counted once and a repeat is refused `ALREADY_COUNTED`; a verified non-member is refused `NOT_A_MEMBER`; 3 joined / 1 counted diverge honestly (UT-0826). A counted member who leaves **stops counting**, and a rejoin does **not** silently restore the count, so strength cannot be inflated by a leave/rejoin cycle (UT-0827). The seam is called **exactly once**, with `(member, jurisdiction, COUNTING_ACTION.STRENGTH_CONTRIBUTION)` (UT-0828, UT-0866), and `countingStatus` takes no verifier parameter, so a status read can never trigger verification (UT-0830). Row stays OPEN: uniqueness is enforced by an app-side counted-members set, not by the verifier’s `isUniqueInScope()` nullifier record — the v2/DES-065 on-chain path (Doc 06 §7 #21) is unbuilt. **v2.5.0 extends the evidence to the ballot-admission gate:** admission calls the seam **exactly once** with scope **`BINDING_VOTE`** and is the **only** seam call site in the proposals service (UT-0843); admission before the ballot opens and a repeat admission are both refused; the coercion notice renders **before** the member is asked to act and **cannot be dismissed** (UT-0881); and the service **never casts, stores or counts a vote** (UT-0845) |
| BR-009, BR-017, BR-006 | **FR-124** verified-status property is private to the holder; PrivacyStatus component refuses self-view; backing-aware 'ver' copy (absent/false/true/malformed `backing.isVerified` four-path coverage) | DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0132 | TC-3473, TC-3474, TC-3475, **TC-3568** | TC-3473 Pass (obs.) · UT-0754..UT-0756; TC-3474 Pass (obs.) · UT-0757; TC-3475 Pass (obs.) · UT-0758; **TC-3568 Pass (inh.) · UT-0759** (**inh.** ui Doc 06 v2.5.1, green in R-17) | ☐ **G-PHASE3** — DES-094 assigned; component passes for the UI layer; verified-status backend enforcement and full privacy guarantee pending. **v2.8.0 — evidence extended, status unchanged.** Until this drop only the **subtitle** half of the backing-aware `ver` copy was tested (UT-0758/TC-3475) while the **title** was hardcoded "Verified — private". UT-0759/TC-3568 gives the title the same four-path treatment (absent / `false` / `true` / malformed), with "Verified" as the fail-honest v1 default, and Doc 03 minted **DES-094 clause 9** at **v2.12.0** (2026-09-06) to state that title rule normatively, and carried it into **v2.13.0** — so the chain link this evidence hangs on is **the current corrected text of a design element (Doc 03 v2.13.0, In Review — not yet an approved source: v2.12.0 FAILED cycle 1 of its neutral technical review at 89%, and v2.13.0 is under cycle-2 review)**, rather than a test standing in for one. _(v2.9.0, ISS-05: v2.8.0 called it "an approved design element", which broke the citation discipline its own changelog set for the whole version.)_ **The row stays OPEN for the reason it was already open** — the component passes at the UI layer; verified-status backend enforcement and the full privacy guarantee are unbuilt. A copy fix does not make a property private. _(v2.9.0, ISS-01: this note was written as a NINTH cell in an eight-column table and ended without a pipe, so it was discarded when rendered; it is folded into this Status cell unchanged and the row now closes with a pipe.)_ |
| BR-003, BR-006 | **FR-125** spam-control invite-gating: invite-based fast path permitted; non-invite fallback MUST always remain available and must never be the sole door; determined real person can always join without an invite; referral edge verified and discarded immediately; counted-membership path ungated (OI-19 RESOLVED at v2.4.0; finalised — implementation-ready pending DES) | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (Doc 03 §16 deliberate next-increment phasing); no implementation in this drop |
| BR-009, BR-006 | **FR-126** on-device credential processing: raw credential (Aadhaar XML, eIDAS wallet attributes, ICAO NFC, mDL data) processed exclusively on user device; only ZK proof and derived nullifier transmitted; raw credential never sent to platform or any intermediary; strengthens FR-003 | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (Doc 03 §16 deliberate next-increment phasing); on-device prover and witness preparation (ADR-017) designed but formal DES owed; no implementation in this drop |
| BR-006, BR-009 | **FR-127** duplicate enrolment detection by nullifier collision only: no identity record comparison, name-matching, biometric comparison, or document-number lookup in any duplicate-detection path; second attempt by same person produces same deterministic nullifier (FR-069) and collides on-chain | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (Doc 03 §16 deliberate next-increment phasing); nullifier-collision posture is C-03 design (ADR-017) recorded as normative; formal DES owed; no implementation in this drop |
| BR-009, BR-006 | **FR-128** no stored identity data in any form (raw, reversible, encrypted-but-decryptable); acceptance test is the subpoena test: the platform MUST be technically unable to disclose who belongs to a party on court order | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (Doc 03 §16 deliberate next-increment phasing); subpoena-test posture is Decision 3/ADR-017 recorded as normative; formal DES owed; no implementation in this drop |
| BR-006, BR-012, BR-021 | **FR-129** Charter-layer guard on single-issuer permanence: making single-issuer operation permanent (beyond dated Phase-1 scope) MUST require Charter-level amendment and re-entry through both gates; configuration or deployment-default extension MUST be blocked; Charter-tier classification (FR-118 vs FR-119) owed to architect (OI-20 ruling, Rathish, 2026-08-20) | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (recorded-phasing posture, Doc 03 §16); Charter-tier classification owed to architect; no implementation in this drop |
| BR-002, BR-012 | **FR-130** provisional-party membership cap: a platform-activated party whose legal registration has not yet been verified MUST be capped at 100 members; cap lifts automatically by code on verified legal registration (FR-075); no operator or manual path may lift the cap early; anti-capture invariant (C-02 ruling, Rathish, 2026-08-22) | **DES-102** | **SCR-09, SCR-11** | EP-03 ▸ FE-009 ▸ US-0131 | TC-3511..TC-3516, TC-3528, TC-3529 | UT-0802..UT-0811 (**inh.** sdk Doc 06 v2.2.0); UT-0852..UT-0856 (**inh.** web); UT-0825 (**inh.** sdk Doc 06 v2.3.2); UT-0862 (**inh.** web Doc 06 v2.3.2) | ✅ **COMPLETE** _(was G-TRACE; closed v2.4.0)_ — **DES-102** (Doc 03 v2.8.1 §10.13.11) assigned with SCR-09/SCR-11 bound, closing the last missing link. All four rules now hold, and each clause of the stated guarantee has its own passing test: **cap at 100 when unverified** — the 100th join succeeds, the 101st is refused `PROVISIONAL_CAP_REACHED` unconditionally, and a leave frees **exactly one** slot, so the cap tracks ACTIVE membership rather than cumulative joins (UT-0825, UT-0802..0805, UT-0862); **lift by code only on verified registration** — status transitions automatically with no admin call in the path (UT-0809..0811, TC-3515); **no operator or manual early-lift path** — asserted as first-class capability-absence: no admin API, configuration flag, environment variable or code path raises the cap (UT-0806, TC-3514). **Recorded residual, disclosed not hidden (DES-102 rule 8 + its residual):** in v1 the invariant is enforced at the application/Postgres write boundary — the only enforcement point v1 has (ADR-024 §(b): no on-chain membership in v1) — and audit-record publication makes an over-cap party externally **detectable**, i.e. tamper-EVIDENCE, not tamper-PREVENTION. Tamper-prevention arrives with the v2 `Party.join()` guard (DES-102 rule 7), which is **not yet built**: `Party.join()` today increments `memberCount` with no cap check. That is an enforcement-tier upgrade, not an unmet clause of FR-130, and it is exactly the posture on which FR-011/FR-020/FR-022 already stand COMPLETE — an operator with direct database access can bypass any v1 application boundary, and holding FR-130 alone to a stricter bar would be special-pleading. **This row MUST be revisited when on-chain membership goes live**, at which point the uncapped `Party.join()` becomes a live bypass rather than a dormant one |
| BR-005, BR-009 | **FR-131** v1 honesty notice (Doc 02 §4.45) — wherever a vote is cast, the UI MUST display a plain-language notice **before the ballot is confirmed**, stating **(a)** this ballot uses conventional authentication and is NOT anonymous, NOT receipt-free, NOT coercion-resistant; **(b)** the platform database CAN see vote direction and party membership in v1; **(c)** the cryptographic private ballot arrives with the Definition-B (v2) upgrade; **(d)** open-tier non-counting disclosure, shown before the action is refused. The notice MUST be visible before confirmation; **non-dismissable — the voter MUST acknowledge it to proceed**; WCAG 2.2 AA (DES-081) and screen-reader accessible; and MUST appear on **SCR-13** (ballot booth) and **SCR-14** (post-vote confirmation). The v1 product — UI, README and all public-facing materials, **in every language** — MUST NOT use "private", "anonymous", "receipt-free" or "secure" of v1 voting **or of any other v1 participation act as defined in clause (e)**, nor claim the v2 guarantees. **(e) Honesty-of-claim across every v1 participation act** _(added Doc 02 **v2.17.0**, approver-confirmed 2026-09-06; acceptance criteria added at **v2.17.1** as §8 FR-131 **Scenarios 8 and 9**)_ — public-facing strings, screens, READMEs and other materials, **in any language**, MUST NOT assert that a **participation act** (casting a vote; endorsing or backing a petition; joining or belonging to a party; supporting a party) is unknowable to Trumocracy. **The test is what an ordinary grade-8 reader (NFR-023) would take the claim to mean, not whether a banned word appears.** Where an act is **public by design** — petition endorsement is — the copy MUST say so and MUST NOT call it private, secret or hidden. **Safe harbour:** copy that states what the platform does not **publish**, states what its **own records can see**, and makes **no contrary claim elsewhere in the same string**, passes — the approved pattern being `en.ts` `parties.joinPrivate`, guarded by UT-0869 — **and where safe harbour and reader test disagree, the reader test governs**. Personhood-enrolment and identity-verification claims are **expressly outside** clause (e) (FR-132 §(d); §16.4 H-16/H-17/H-18; Doc 02 §13 routing (j)). **This row ALSO tracks the DES-096 `IBallotService` seam half** — cast records ballot without revealing direction; silent ballot-change (last cast counts); deterministic tally-hash for audit; cast refused without `eligibilityRef`; results embargo while the ballot is open; audit-contract publication — which is design this row carries, **not** an FR-131 obligation | **DES-098** (the honesty notice — primary) · **DES-094** (status-badge reach, clause 9) · DES-096 · ADR-024 | **SCR-13, SCR-14 — both UNBUILT** (Doc 06 §7 #21) | EP-06 ▸ FE-058 ▸ US-0134 | TC-3476, TC-3481, TC-3482, TC-3483, TC-3484, TC-3485, TC-3486, TC-3487, TC-3534, TC-3535, **TC-3564, TC-3565, TC-3566, TC-3567, TC-3568, TC-3569**, **TC-3570, TC-3571, TC-3572, TC-3573, TC-3574** (clause (e), Scenario 8), **TC-3575** (clause (e), Scenario 9 — **Blocked**) | TC-3482..TC-3486 Pass (obs.) · UT-0770..UT-0776; TC-3534, TC-3535 Pass (inh.) · UT-0864, UT-0869 (**inh.** web Doc 06 v2.3.2); TC-3476/TC-3481/TC-3487 Blocked; **TC-3564..TC-3567 Pass (inh.) · UT-0887** (web), **TC-3568 Pass (inh.) · UT-0759** (ui), **TC-3569 Pass (inh.) · UT-0888** (protocol) — all three **inh.** Doc 06 v2.5.1, observed green at file granularity in run R-17 (619/619, 2026-09-06); **TC-3570..TC-3574 Pass (obs.) · UT-0889** (web, Doc 06 v2.6.0 In Review) — the first FR-131 cases at **obs.**, earned by run **R-18** (`npm test` 624/624 **and** a case-by-case verbose re-run of the UT-0889 block) and **re-observed in run R-19** (625/625; the block now has **six** `it`s, all green individually — Doc 06 v2.7.0 added a DES-085 jargon scan, mapped to **TC-3576**, which verifies NFR-023 and is **not** clause-(e) evidence); **TC-3575 Blocked — no implementing instrument** (Doc 04 §0.5 S5 unbuilt) | ☐ **G-PHASE3** — DES-096 assigned; IS_INSECURE_MOCK=true; seam passes for cast/change/tally/refusal/embargo (5 TCs obs.); production ZK ballot pending Phase 3. **v2.3.0 — clause (d) is now BUILT, but only at one surface.** The four-clause non-dismissable open-tier notice is implemented and tested at the **parties-directory counting surface**: all four clauses (i)–(iv) render, the refusal comes **after** them inside the notice, `queryAllByRole('button')` within the notice is the **empty list** (no dismiss control), and the refused action changes nothing (UT-0864, TC-3534). Clause (b) is also closed as an honesty fix: the join copy no longer carries the v2-only claim "Nobody gets that list" and instead discloses that "our own records can link your account", rendered on every join panel (UT-0869, TC-3535). **TC-3481 stays Blocked and the row stays OPEN** — TC-3481 is written against the **ballot** surfaces SCR-13/SCR-14, which are not built in this drop (Doc 06 §7 #21), and TC-3487 (audit-contract endpoint) is still unwired. Partial delivery is recorded, not promoted to a close. **v2.8.0 — the closing sentence is now CLOSED and GUARDED; the row still does not close, and the reason is not a missing test.** Doc 06 v2.5.1 (commit `0a5c542`) removed the retired "anonymous but not receipt-free" framing from five shipped strings and one component title, and three regression blocks now hold the line: the rendered vote-surface banner carries no banned word except immediately negated and never "private"/"secure" (TC-3564), states (a), (b) and (c) positively with the retired claims absent (TC-3565), is bound to the shipped `en.ts` strings rather than a test copy (TC-3566), and the Arabic mirror carries the same truth (TC-3567); the `ver` badge title is backing-aware four-path with "Verified" as the fail-honest v1 default (TC-3568); the `maci_voting` flag description states the v1 truth (TC-3569). **Ruled rule by rule, FR-131 has ten obligations (Doc 02 §4.45) — plus the DES-096 seam half this row also tracks, which is not one of them — and six of the ten are unmet or unevidenced.** Unmet **by absence of the thing itself, not by absence of a test**: (i) the notice must appear **wherever a vote is cast** and on **SCR-13/SCR-14** — neither surface is built (Doc 06 §7 #21), so TC-3481 stays Blocked; (ii) **"the voter MUST acknowledge the notice to proceed"** — the banner is non-dismissable but has **no acknowledge control at all**, recorded as owed SCR-13 story scope in Doc 06 §7 item 26(d). **Clause (7) alone keeps this row open even if every surface existed.** Unevidenced: "visible before confirmation" (no confirmation step to precede) and WCAG 2.2 AA + screen-reader (no a11y gate; NFR-011 is G-UI). Still Blocked in the seam half: TC-3487 (audit-contract publication) and TC-3476. **Closing this row on a banned-words fix would misrepresent the requirement, so it is not closed.** **v2.9.0 — recording corrections only; no ruling, status or count changes (ISS-01, ISS-02).** Three things this row should always have carried are now in it: **DES-098**, the design element Doc 02 §4.45 names for this notice and the element TC-3564..TC-3569 cite, which appeared **nowhere in Doc 08** before this version; **DES-094**, for the status-badge reach TC-3568 verifies; and **SCR-13 / SCR-14**, recorded UNBUILT in the SCR cell instead of "none" so the gap is visible rather than absent. The requirement summary is restated from Doc 02 §4.45 — it had described the DES-096 seam and not the notice — and "eleven obligations" is corrected to **ten**, plus the seam half. The DES assignment follows **Doc 03 v2.13.0 §15** (2026-09-06, **In Review**, cycle 2 under way), where the architect states DES-098 primary, DES-094 for the status-badge reach, DES-096 retained as the ballot seam, and routes the recording to the tester; it is cited as **current corrected text, not an approved source**, and it closes nothing. **The row stays OPEN (G-PHASE3), Must COMPLETE stays 16 of 138, and §6’s Screens row still reads 23 mapped / 0 verified** — naming two unbuilt screens in a trace cell is not a screen becoming traced. The v2.8.0 ruling above was itself written as a NINTH cell in an eight-column table and ended without a pipe, so a renderer discarded it; it is folded into this Status cell unchanged and the row now closes with a pipe. **v2.10.0 — the row REOPENS on a new clause and re-closes as OPEN. This is the ruling; the changelog carries the long form.** Doc 02 **v2.17.0** adds **clause (e)** and **v2.17.1** gives it acceptance criteria (§8 FR-131 **Scenarios 8 and 9**), so FR-131 now has **ELEVEN** obligations, not ten. **This is not a reversion of the v2.9.0 correction:** v2.9.0 corrected eleven to ten because the eleventh had been the **DES-096 seam half**, which is design this row carries and is still **not** an obligation; the count moves because a genuinely new lettered clause exists. **Clause (e) is PARTIALLY EVIDENCED, and "partially" is the whole finding.** **Scenario 8** is guarded at **eleven strings**: five on three surfaces by **UT-0889** — the landing endorsement copy (TC-3570), the "What we promise" list (TC-3571), the binding of both to the rendered page (TC-3572), the Arabic mirror (TC-3573), the sdk authorship-refusal message (TC-3574) — plus the party-join copy (TC-3535/UT-0869, the safe-harbour exemplar Scenario 8 itself names) and the ballot banner (TC-3564..TC-3567/UT-0887, whose negation-aware guard the widened closing sentence preserves). **Even inside Scenario 8 the operative test is unautomated:** the scenario makes the **grade-8 reader test govern** over the safe harbour, and no test in this repository applies a reader test — UT-0889 asserts substrings; nor is the v2.17.1 "no contrary claim elsewhere in the same string" qualifier tested anywhere. **Scenario 9 is BLOCKED at TC-3575, and that alone holds this row shut on clause (e).** Scenario 9 quantifies over **every** public-facing surface in **every** language, README included, and requires **zero** materials asserting or implying unknowability — including claims carrying none of the four banned words. The only instrument specified for it, **Doc 04 §0.5 S5** (the build-failing FR-131 claims denylist over `apps/web` and `packages/ui`, widened at MTP v1.5.0 to every participation act and to claims as well as words), is **specified and not built**; UT-0857/UT-0868/UT-0884 are **DES-085 jargon** scans over enumerated per-drop strings and would have caught **neither** string this drop fixed. The remainder rests on **inspection (I)** — FR-131's own recorded Verify-by, legitimate evidence, but point-in-time and unable to hold a Must row against silent regression. Two questions live inside clause (e)'s scope and neither is the tester's: **OPEN-27** (Doc 04 §13 → Ravi Deshmukh — the S5 `anon`-badge carve-out was reasoned against a voting-scoped FR-131, and party-joining and endorsing are now participation acts; Doc 03's re-open trigger (iii) wants an *unconditional* amendment, which clause (e) is not, so the carve-out stands) and **ENROL-COPY (j)** (Doc 02 §13 → Priya Raghunathan — expressly outside clause (e), unruled). Neither counts as coverage; neither is scored as a new gap. **Everything that kept this row open before is untouched by this drop:** SCR-13/SCR-14 unbuilt and TC-3481 Blocked; the **DES-098 acknowledge-to-proceed control still does not exist** (Doc 06 §7 item 26(d); named as unchanged in DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §10); "visible before confirmation" has no confirmation step; WCAG 2.2 AA and screen-reader unevidenced; TC-3476 and TC-3487 Blocked. **Row stays OPEN (G-PHASE3); Must COMPLETE stays 16 of 138; US-0134 still does not meet the Definition of Done.** _(v2.11.0, ISS-02: the evidence cell said the UT-0889 block has "five `it`s"; Doc 06 v2.7.0 made it six. Corrected above. The sixth is a jargon scan — **it adds nothing to clause (e)**, and is named here only so a reader comparing the block to this row does not find an unexplained assertion. Doc 06 v2.7.0 also narrowed the block's Arabic assertion to the exact retired phrase "اسمك سريًا"; Doc 07 v2.8.0 re-cuts TC-3573 to match, **with no status change** — see that document's ISS-02.)_ _(Pin note: the v2.9.0 text above cites Doc 03 v2.13.0 §15 as "In Review, cycle 2 under way"; Doc 03 v2.13.0 is now **Approved**. Annotated here rather than rewritten — the DES assignment it supplied is unchanged and is now settled rather than provisional.)_ |
| BR-006, BR-012 | **FR-132** v1 two-layer identity verification (Doc 02 §4.46) — the `IEligibilityVerifier` backing MUST implement two sequential layers. **(a) Phone layer — account creation and open-tier access:** creating an account, joining a party, reading, discussing, supporting and organising MUST require phone verification **alone** (FR-020 absolute; FR-122 open tier); each verified number creates at most one member account; the number MUST be stored one-way hashed (`phone_hash`, HMAC-SHA-256 with a KMS-managed pepper), never reversible; the system MUST NOT refuse an account or party membership for absence of a government-ID document. **(b) Government-ID document check — COUNTING-tier eligibility only (the three FR-123 counting actions: official party strength, a binding vote, standing as a candidate):** the **verify-and-discard** rule applies — document image, biometric template, selfie, name, date of birth, document number, expiry, raw subject id and verification session id MUST NOT be stored, and only the enumerated DES-100 allowlist MAY be retained (`id_verified_flag`, `age_verified`, `issuing_region`, `subject_id_hash`, `phone_hash`, `verified_at`), all restricted-class. **(c) `subject_id_hash` deduplication — at counting-verification, not at account creation:** an applicant whose hash matches an existing counting-verified account MUST be refused COUNTING eligibility as a duplicate; the open-tier account is NOT refused. **(d) Honesty posture:** v1 MUST record and present the check as establishing "a real, legal-age person" for the COUNTING tier and **MUST NOT** claim unique personhood, anonymity or one-person-one-vote in UI, README or any public-facing material; **the FR-131 honesty notice (DES-098) MUST carry** the plain-language statement that same-document deduplication does not prevent a person with multiple legitimate government IDs holding multiple counting accounts, plus the FR-131 clause (d) open-tier disclosure. **(e) Vendor non-retention:** the ID-check procurement MUST bind the provider contractually not to retain documents, biometrics or personal data beyond the verification session. **This row ALSO tracks the DES-100 allowlist-only action-type seam** — only counting actions permitted; JOIN, LEAVE and account-creation throw `IllegalActionType`; `IS_INSECURE_MOCK=false` with no vendor bound throws `VendorNotBound` — which is the seam shape TC-3479/TC-3480 verify and is **design this row carries, not one of the five clauses**. _(v2.12.1, ISS-03: this cell had summarised the DES-100 seam only, so **§(d) — the clause the fourteen new cases verify — appeared nowhere in the column that states the requirement**, and neither did the four unbuilt clauses the status cell rules on. Restated from Doc 02 v2.17.3 §4.46, the same repair this document made to FR-131 at v2.9.0.)_ | DES-095, DES-100 · ADR-024, ADR-025 | none | EP-01 ▸ FE-057 ▸ US-0133 | TC-3479, TC-3480, **TC-3577..TC-3585, TC-3587..TC-3591** — **fourteen** of the fifteen `UT-0890` cases; **TC-3586 is deliberately NOT here**, see the status cell | TC-3479 Pass (obs.) · UT-0765; TC-3480 Pass (obs.) · UT-0766..UT-0769; **TC-3577..TC-3585, TC-3587..TC-3591 Pass (obs.) · UT-0890** (web, `test/safety-surfaces.test.tsx`; run **R-20**, 2026-09-20, `npm test` 640/640 on a clean tree, then the block re-run `it` by `it` — 15 passed, 26 skipped, of which these **fourteen** are this row's evidence) | ☐ **G-PHASE3** — DES-095/DES-100 assigned; allowlist shape and VendorNotBound guard pass; production enforcement pending Phase 3. **v2.12.0 — evidence extended to clause §(d), status unchanged, and the extension is smaller than it looks.** Doc 06 v2.8.0 gated the `/verify` route behind the `enrolment_ui` flag (off in staging/prod, on in `dev`) because the page stated the **unbuilt** §(b) verify-and-discard design as current fact, and put an honest placeholder in its place (`DECISIONS-2026-09-08-VERIFY-PAGE.md` §1 approver ruling, §5 remedy (a), §5.3 NORMATIVE text). `UT-0890` guards all of it in fifteen assertions, minted in Doc 07 v2.9.0 as TC-3577..TC-3591, **of which fourteen enter this row**. _(v2.12.1, ISS-01: this row had cited the contiguous range, which silently absorbed **TC-3586**. Doc 07 v2.9.0's TC-3586 row verifies `US-0133 · NFR-023 · DES-085` and names **no FR** — it is a DES-085 jargon/readability scan, not §(d) honesty-posture evidence — so it enters this matrix at the §3.2 **NFR-023** row **only**, exactly as **TC-3576** did at v2.11.0 and for the same stated reason. **Fourteen** cases are FR-132 evidence, not fifteen; the status does not turn on it either way, but a claimed link Doc 07 does not carry is the `TD-RTM-03` defect class and this row will not add to it.)_ **Ruled clause by clause against Doc 02 v2.17.3 §4.46, the row does NOT close:** **§(a)** phone layer — unbuilt (TC-3588 verifies the *copy* that describes v1, not the mechanism); **§(b)** government-ID check, denylist/allowlist, verify-and-discard — unbuilt, `StubIdDocumentChecker.IS_INSECURE_MOCK()` = true, blocked on **CON-015**; **§(c)** `subject_id_hash` deduplication — unbuilt; **§(d)** honesty posture — **served but not discharged**: §(d) requires the statement to be carried by "**the FR-131 honesty notice (DES-098)**", and **DES-098 does not exist** (Doc 06 §7 item 26(d)), so TC-3587 states the right fact on a surface that is not the one §(d) names; **§(e)** vendor non-retention — a procurement clause, and no procurement has happened. **Completion rule 4 fails four ways over.** **`/verify` is flag-gated OFF above `dev`, so nothing this evidence guards is a shipped capability** — what the drop removed is a false public surface, and Doc 06 §7 item 28 is explicit that it "builds nothing". **No FR-131 link is added for any of the fifteen**: Doc 02 §4.45 places personhood-enrolment and identity-verification claims **expressly outside** clause (e) and routes them here, to §(d). **The `SCR` cell above still reads "none"** although `/verify/` is a real UI surface (Doc 03 §10.12 maps the enrolment flow to **SCR-01**/**SCR-02**) — assigning a screen is the architect's, not the tester's, and the row's status does not turn on it; routed to Ravi Deshmukh |
| BR-012, BR-003 | **FR-133** v1 spam-resistance flag-don't-block layer: VoIP/virtual-number intelligence + velocity/device anti-fraud; flagged numbers rate-limited, never hard-blocked; false-positive path first-class; flag-don't-block scope limited to spam signals only — government-ID eligibility gate (FR-132 §(b)) is a hard gate not subject to flag-don't-block | DES-099 | none | none | none | none | ☐ **G-PHASE3** — DES-099 assigned (Doc 03 v2.4.1 Approved); no US or TC yet — recorded-phasing posture; TC OPEN — Phase 3 |

**Must FR subtotal (v2.14.0): 114 rows · 19 complete · 95 open.** _(**v2.14.0, ISS-01(b) — the worst of the three, because this line publishes the GATE CRITERION FIGURE ITSELF.** It read "16 complete · 98 open" with a reconciliation asserting "**122 open** of **138** Must", sitting directly beneath a table whose rows say **19**, and directly contradicting this version's own §6 bullet ("FR — Must complete 16 → 19, gaps 98 → 95"). **v2.13.0 closed FR-036, FR-037 and FR-085 and moved neither number here.** Corrected and **DERIVED, not retyped:** a row-wise count of §3.1 returns **114 rows, 19 ✅, 95 ☐**. **The reconciliation now reads: 95 open FRs + 24 open NFRs (§3.2 still has no complete row) = 119 open of 138 Must**, which is what §9's two hook-parsed rows and `--audit` both report. **This is a KNOWN REPEAT** — the annotation below records this same line being left stale "through four drops that closed rows" before v2.5.4 — which is why v2.14.0 also publishes the sweep that found it as a falsifiable enumeration rather than a claim that the document was checked.)_ _(Corrected v2.5.4 — the line had been left at its v2.2.2 values, "12 complete · 102 open", through four drops that closed rows. The 16 complete are the 15 rows marked ✅ **COMPLETE** plus FR-051, marked ✅ **COMPLETE (conditional)**. Reconciles with §6: 98 open FRs + 24 open NFRs (§3.2 has no complete row) = **122 open** of **138** Must.)_ _(**v2.8.0: UNCHANGED — 114 · 16 · 98 — and stated rather than left to inference.** The FR-131 honesty drop extended the evidence on FR-131 and FR-124 and closed neither, so no row moved in either direction. The check was made row by row, not assumed: FR-131 fails six of its ten obligations (Doc 02 §4.45 — see its row and §7 entry 117); FR-124 gains the title half of its DES-094 clause-7 coverage but its backend enforcement is still unbuilt. No other Must FR row cites `UT-0887`, `UT-0759` or `UT-0888`.)_

### 3.2 Must NFRs — the 24 gating quality rows

| BR | NFR | DES (+ADR) | US / NF item | TC (Doc 07) | UT evidence | Status |
|---|---|---|---|---|---|---|
| BR-009 | **NFR-001** no linkage by any actor | DES-004, DES-008 | US-0007, US-0026, US-0038 · NF-01 | TC-1607, TC-1959–TC-1961, TC-1963, TC-2650 | UT-0108, UT-0525 (**obs.**), UT-0740 | ☐ **G-UNMEASURABLE — OPEN-13** the collusion bound (`OI-10`) is unset, so the adversary model and the pass threshold do not exist |
| BR-009 | **NFR-002** anonymity set k ≥ 1,000 | DES-008 · ADR-004 | US-0007, US-0039 · NF-01 | TC-1950–TC-1955, TC-1962, TC-2651, TC-2652 | UT-0048–UT-0050 (**obs.**), UT-0116, UT-2607, UT-2608 (**obs.**) | ☐ **G-UNMEASURABLE — OPEN-10 / OI-05** the enforcement mechanism is the strongest evidence in the drop, but "escalation touches publication, never eligibility" has no pass line while `OI-05` is undecided, and there is no runtime invariant over published actions |
| BR-011 | **NFR-003** coercion resistance | DES-023, DES-024, DES-063 · ADR-006 | US-0041 | TC-2610, TC-2611, TC-2614 | UT-0710–UT-0712 (disclosure only) | ☐ **G-PHASE3 — OPEN-01** MACI is Phase 3; a formal argument and an independent adversarial audit are also required and have not begun |
| BR-006, BR-012 | **NFR-004** Sybil resistance ≤ 0.1% | DES-001, DES-011 · ADR-003 | US-0005 | TC-2600–TC-2603, TC-2642, TC-1850 | UT-0109, UT-0320, UT-0321, UT-0325, UT-0326 | ☐ **G-UNMEASURABLE — OPEN-14 + OPEN-02** the duplicate rate **is not internally measurable by design**: the system refuses to link a nullifier to a person, so measurement requires a consented out-of-band audited sample at the attestors. The 50%-per-region cap additionally has no mechanism |
| BR-007 | **NFR-005** cost < USD 0.01 median, citizen pays 0 | DES-043 · ADR-014 | US-0066 · NF-04 | TC-2200–TC-2203 | harness gas (regression detector only) | ☐ **G-NOENV — OPEN-15** harness gas excludes intrinsic, calldata and blob fee, so it is not a price; and the action denominator is not enumerated |
| BR-007 | **NFR-006** performance on the reference device | DES-078 | US-0070 · NF-05 | TC-2080–TC-2084 | none | ☐ **G-NOENV** — no reference-device harness exists (DES-078 assigned in v1.1.0, closing G-TRACE) |
| BR-007, BR-008 | **NFR-007** availability 99.5% / 99.9% | DES-051 | **none** | TC-1046, TC-2150, TC-2153, TC-2422 | UT-0517 (**obs.**, tolerance only) | ☐ **G-NOENV + G-TRACE** — **no story and no backlog item implements this NFR**, and no environment exists to measure it |
| BR-008, BR-012 | **NFR-009** independent security audit, 0 critical/high | DES-079 | NF-02, NF-03 | TC-1863, TC-1600–TC-1614 | capability-absence suite (partial) | ☐ **G-EXTERNAL** — neither audit firm has reported (MS-09, 2027-03-12); the red team (NF-03) has not run |
| BR-009 | **NFR-010** no personal data at rest or on the record | DES-080 | US-0002 | TC-2050–TC-2053 | UT-0046 (**obs.**), UT-0108 | ☐ **G-NOENV** — the three build-failing scanners of Doc 04 §11 do not exist (DES-080 assigned in v1.1.0, closing G-TRACE) |
| BR-007 | **NFR-011** WCAG 2.2 AA | DES-081 | US-0045, US-0070, US-0132 | TC-2250–TC-2255, TC-3488 | UT-0704, UT-0721 (two components, not executed); TC-3488 Pass (obs.) · UT-0753 (accessible-name aria-label, `packages/ui/test/PrivacyStatus.test.tsx` line **51** — line 46 at v2.7.0; the file moved at Doc 06 v2.5.1) | ☐ **G-UI** — no automated a11y gate; no manual screen-reader pass has been performed (DES-081 assigned in v1.1.0, closing G-TRACE); TC-3488/UT-0753 (TS-SCAFFOLD accessible-name check) pass; full WCAG 2.2 AA automation gate and screen-reader pass remain pending. _(**v2.8.0 — citation corrected, status unchanged.** UT-0753’s expected `aria-label` changed from "Verified — private" to **"Verified"** at Doc 06 v2.5.1, because FR-131 bans "private" as a description of v1 voting; the accessible name still matches the displayed state title, so what TC-3488 verifies is untouched — only the string it lands on changed. Re-confirmed green in run R-17 (`packages/ui` 18/18). The row stays **G-UI**: one component-level accessible-name check is not a WCAG 2.2 AA gate, and no screen-reader pass has been performed.)_ _(v2.9.0, ISS-01: the v2.8.0 note was written as an EIGHTH cell in a seven-column table and ended without a pipe, so it was discarded when rendered; it is folded into this Status cell unchanged and the row now closes with a pipe.)_ |
| BR-007 | **NFR-012** device & bandwidth floor | DES-082 | US-0012, US-0070 · NF-05 | TC-2080, TC-2083, TC-2084, TC-2382 | none | ☐ **G-UI** — offline draft composition (US-0012) has no implementing code or test (DES-082 assigned in v1.1.0, closing G-TRACE) |
| BR-007 | **NFR-013** 8 locales incl. RTL | DES-083 | US-0070 | TC-2330, TC-2333 | none | ☐ **G-UI** — locale files exist (`apps/web/src/i18n/en.ts`, `ar.ts`) but there is **no locale-coverage or string-coverage gate and no RTL rendering evidence**, and the 8-locale guarantee is unbuilt (DES-083 assigned in v1.1.0, closing G-TRACE). _(v2.9.0, ISS-08: this row read "no locale files"; two exist and are shipped, and TC-3567 asserts against `ar.banner.*`. **The G-UI verdict is unchanged — only its stated reason was wrong.** TC-3567 is deliberately NOT linked into the TC cell: it reads two Arabic copy constants and exercises neither locale coverage nor RTL, and Doc 07 v2.6.0 removed the same NFR-013 claim from that case for the same reason.)_ |
| BR-008 | **NFR-014** censorship resistance | DES-041, DES-050, DES-051 · ADR-001 | NF-06 | TC-2423, TC-2670, TC-2671 | UT-0054 (**obs.**, escape hatch cannot be disabled) | ☐ **G-NOENV** — the blocking simulation needs an isolated network lab that does not exist |
| BR-009 | **NFR-015** legal / regulatory posture | DES-084 | US-0003 | TC-2730, TC-3253 | none | ☐ **G-EXTERNAL** — per-jurisdiction legal review is a launch condition; the three pilots are still unnamed (`OI-04`) (DES-084 assigned in v1.1.0, closing G-TRACE) |
| BR-007 | **NFR-016** key recovery ≥ 99% in 14 days | DES-042 · ADR-002 | US-0068 | TC-0034, TC-2700, TC-2701 | none | ☐ **G-PHASE3** — recovery is not implemented |
| BR-008 | **NFR-017** governed upgradeability, 0 unilateral paths | DES-039 · ADR-010 | US-0064 | TC-1600, TC-1606, TC-1613, TC-2521, TC-2523, TC-2750 | UT-0310, UT-0312, UT-0344 | ☐ **G-EXTERNAL** — "0 unilateral paths **at audit**" needs the audit; the storage-layout control (TC-1613) and the registry-timelock assertion (TC-2523) are also unwritten |
| BR-008 | **NFR-020** rollback < 15 min; flags kill-switchable; **open-ballot freeze** | DES-037 | NF-07 | TC-1610, TC-1611, TC-2425, **TC-2426** | UT-0053, UT-0055 (**obs.**), UT-0360, UT-0361 | ☐ **G-NOMECH — OPEN-03** the rollback drill has never run, and **`FeatureFlags` has no notion of an in-flight ballot**, so the second clause has no mechanism |
| BR-008 | **NFR-021** open source + reproducible builds | DES-045 · ADR-011 | US-0062 | TC-1206–TC-1208, TC-2671, TC-1803 | UT-2577, UT-2583, UT-0515 (**obs.**), UT-0415 | ☐ **G-EXTERNAL** — differential agreement is strong, but reproducibility has not been verified by an independent party |
| BR-007 | **NFR-022** usability, SUS ≥ 75 | DES-040 | US-0015, US-0070 | TC-3250–TC-3253 | none | ☐ **G-EXTERNAL** — no moderated study (n ≥ 200 per locale) has been run |
| BR-007, BR-009 | **NFR-023** plain language, no jargon, safe notifications | DES-085 | US-0003, US-0015, US-0034, US-0045, US-0066 | TC-2331, TC-2332, **TC-3576**, **TC-3586** | **TC-3576 Pass (obs.) · UT-0889** (web; run R-19, 2026-09-07, observed `it` by `it`); **TC-3586 Pass (obs.) · UT-0890** (web; run **R-20**, 2026-09-20, 640/640 on a clean tree, observed `it` by `it`) | ☐ **G-UI** — no jargon scanner and no readability check exist (DES-085 assigned in v1.1.0, closing G-TRACE). _(v2.11.0, ISS-02: **TC-3576 is added to the chain and the row does NOT close.** Doc 06 v2.7.0 added a DES-085 jargon `it` to UT-0889 over the two corrected landing strings; Doc 07 v2.8.0 mints TC-3576 for it. It is an **enumerated** scan over **two** strings — not the scanner and not the readability check this row has waited for since v1.1.0 — so it is real evidence against a real gap and closes none of it. Same instrument-versus-enumeration distinction TC-3575 draws for FR-131 Scenario 9, and the reason the Complete column stays **0**.)_ **`TD-RTM-03` (§10, raised at v2.11.0):** this row cites neither **TC-3538** (UT-0868) nor **TC-3561** (UT-0884), both of which Doc 07 records as verifying `NFR-023 · DES-085`, both Pass (inh.). The two documents disagree about which cases verify this NFR. **Named, not repaired in passing** — repairing it means re-deriving two other drops' evidence, and no status turns on it: the row is OPEN either way. _(v2.12.0: **TC-3586 is added and the row does NOT close.** Doc 06 v2.8.0's UT-0890 block carries a DES-085 jargon `it` over the **four** new `en.verify.*` placeholder strings; Doc 07 v2.9.0 mints TC-3586 for it, on the TC-3538/TC-3561/TC-3576 precedent that every per-drop jargon scan gets its own row. It is an **enumerated** scan over four strings — not the jargon **scanner** and not the readability check this row has waited for since v1.1.0 — so it is real evidence against a real gap and closes none of it. The Complete column stays **0** and the gap code stays **`G-UI`**. **`TD-RTM-03` is NOT repaired by this addition, and is arguably sharper for it:** this row now cites **two** of the **four** cases Doc 07 records as verifying `NFR-023 · DES-085`, and still omits **TC-3538** and **TC-3561**. Adding only the case this version is responsible for is deliberate — importing two other drops' evidence is the debt, not a side-effect of a mint.)_ |
| BR-009 | **NFR-024** anti-harassment | DES-086 | US-0026, US-0050, US-0059 | TC-0017, TC-1959, TC-2652 | UT-0520, UT-0525 (**obs.**) | ☐ **G-PHASE3** — the nomination and recall surfaces that create the harassment risk do not exist yet (DES-086 assigned in v1.1.0, closing G-TRACE) |
| BR-008 | **NFR-025** operator cannot censor an individual (≤ 60 min) | DES-041 · ADR-001 | NF-06 | TC-2420, TC-2680 | none | ☐ **G-NOMECH — OPEN-11** `NFR-025` demands ≤ 60 min; ADR-001 states force inclusion is 12–24 h. **Irreconcilable as written** — no suite can pass a criterion the design contradicts |

| BR-017, BR-009 | **NFR-027** zero per-user behavioural events in any store, log, or export; analytics aggregate-only; UT-0525 and UT-0740 green on every release; mirrors FR-111 as a quality attribute | none | US-0121 | TC-3447 | UT-0525 (**obs.**), UT-0740 (not run — apps/web suite not executed this session) | ☐ **G-PHASE3** — UT-0525/UT-0740 cover existing surfaces and remain green; v2.0 governance surfaces not yet built; full guarantee requires all v2.0 surfaces deployed and verified |
| BR-019, BR-008 | **NFR-028** zero hard-delete or overwrite paths in any governance-path store; every state transition appended with timestamp and cause; verified by audit inspection | none | US-0117 | TC-3448 | none | ☐ **G-PHASE3** — v2.0 governance stores (committee records, dispute trail, COI disclosures, manifesto commitments, conduct votes) not yet implemented; no audit mechanism exists in this drop |

**Must NFR subtotal (v2.0.0): 24 rows · 0 complete · 24 open.**

### 3.3 Non-Must rows (Should / Could) — recorded, not gating

| FR/NFR | Priority | DES | US | TC | Status |
|---|---|---|---|---|---|
| FR-005 revocation & appeal | Should | DES-003 | **none** | TC-1005, TC-1006 | ☐ **no story** — Doc 05 §12 declared gap, owner Priya Raghunathan |
| FR-012 charter declares its own rules | Should | DES-017 | US-0013 | TC-1018, TC-1201, TC-3497..TC-3498 | ✅ complete (UT-0002, UT-0037 **obs.**; UT-0066..UT-0082, UT-0401 **inh.** Doc 06 v2.2.0) |
| FR-013 petition expiry & cooldown | Should | DES-009 · DES-097 | US-0021 | TC-1034, TC-1035, TC-3499..TC-3503, TC-3539, TC-3540 | ✅ **complete (v2.2.4; evidence strengthened v2.3.0)** — expiry (UT-0795/0796 **inh.**), immutable archive (UT-0797/0800 **inh.**), archivedAt determinism (UT-0817 **inh.**), cooldown boundary (UT-0798/0799 **inh.**) — full chain closes; US-0021 meets DoD. **v2.3.0 adds two DES-097 seam guards to the expiry path**, both minted from defects the Doc 06 review loop caught: `expirePetitions` is exercised through an **interface-only** `IPartyStore` facade, so a renewed reach into private store state finds `undefined` and fails the test rather than silently expiring nothing in production (UT-0831, TC-3539); and the `trumocracy-sdk.d.ts` shim is asserted **set-equal both ways** to the SDK JSDoc typedef, so a TypeScript store can no longer typecheck clean and then throw on the first expiry sweep (UT-0871, TC-3540) |
| FR-015 endorsement withdrawal | Should | DES-012 | US-0017 | TC-0012 | ✅ complete (UT-0114; UT-0503, UT-2598 **obs.**) |
| FR-017 live petition progress | Should | DES-009 | US-0018 | TC-0025, TC-1209 | ✅ complete (UT-0502 **obs.**; UT-0720–UT-0723 not executed) |
| FR-019 jurisdiction fixed after activation | Should | DES-009 | US-0023 | — | ☐ no case automated |
| FR-029 proposal withdraw/amend + flood limit | Should | DES-018 | US-0032 | TC-1862 | ☐ `PROPOSAL_COOLDOWN` exists; nothing provokes it |
| FR-034 no interim tallies | Should | DES-026 | US-0043 | TC-0024 | ☐ client/indexer suppress; **chain state is public** (Doc 06 §7.5) |
| FR-038 consent wording | Should | **DES-028** (amended v2.15.0, Doc 03 v2.16.0 §10.13.14 rules 1 and 5) | US-0048, US-0049 | TC-0029, **TC-3599, TC-3614** | ✅ **COMPLETE** _(was **OPEN — Phase 3**; closed v2.13.0 — **non-gating**, so the Must count does not move on it; the non-Must complete/gap figures do, 4 / 19 → 5 / 18)_ — FR-038 requires the consent to **state, before it is given**, that disclosure is **irreversible for the candidacy and any resulting term** and that consent may be **revoked only by withdrawing before the ballot locks**. Both facts are acknowledgement constants that **must be the literal `true`** — `irreversibleForTerm` and `revocableOnlyByWithdrawalBeforeLock` — with a missing key and a truthy-but-not-`true` value each refused (**TC-3599 · UT-0895**); and both are **stated on SCR-15 in step 2 BEFORE the confirm control, with document order asserted rather than mere presence** (**TC-3614 · UT-0904**), which is precisely the "before it is given" the clause turns on. Cancelling records nothing, so the disclosure attaches to a refusable moment — the FR-080/TC-3563 pattern. **TC-0029 stays Blocked** (E2E, no environment) and this closure does not rest on it _(**v2.14.0 — a defect the cycle-1 review did not catch, found while re-deriving ISS-01(c), and it is the FR-078 failure mode exactly.** This cell's v2.13.0 annotation wrote the OPEN-box marker (U+2610) inside the words "was … Phase 3", putting an open-box marker **and** a COMPLETE marker (U+2705) on the same row. **Neither glyph is reproduced anywhere in this annotation — both are named by codepoint — because quoting one would RE-CREATE the defect it describes: the counter is a plain substring test over the row and cannot tell a marker from a mention of a marker.** **A row carrying both markers is silently uncountable** — every row-wise recount of §3.3 dropped it, returning 22 rows and 4 complete instead of 23 and 5, so the SUMMARY's honest **5 / 18** could not be reproduced mechanically. **This is precisely how FR-078 was lost at v2.5.4**, an incident §9 still records. **No published figure was ever wrong and the Must count is untouched** — the hook counts §3.1 and §3.2 only, and FR-038 is a Should row — but a figure that cannot be re-derived is a figure a verifier cannot check. **Fixed by removing the glyph, not the sentence.**)_ |
| FR-041 fixed term expiry | Should | DES-029 | US-0053 | TC-0030 | ☐ Phase 3 |
| FR-044 recall grace & cooldown | Should | DES-030 | US-0059 | TC-0031 | ☐ Phase 3 |
| FR-046 manifesto & commitments _(v2.0.0: SUPERSEDED by FR-094 and FR-095; retained for traceability — see SRS v2.2.0 §4.28 and US-0054 supersession annotation in BKLG v2.0.1)_ | Should | DES-031 | US-0054 | TC-0026 | ☐ versions exist; status/evidence model not evidenced; successor requirements FR-094/FR-095 carry the live traceability |
| FR-048 attributed office-holder votes | Should | DES-032 | US-0056 | — | ☐ Phase 3 |
| FR-049 contribution cap | Should | DES-033 | **none** | — | ☐ no story, no code |
| FR-050 treasury ledger | Should | DES-033 | **none** | — | ☐ no story, no code |
| FR-052 outflow approval | Could | DES-033 | **none** | — | ☐ no story, no code |
| FR-053 fork with lineage | Could | DES-034 | **none** | TC-2633 | ☐ **no story**, though UT-0042/UT-0043 pass (**obs.**) |
| FR-055 open-source verifier & export | Should | DES-025, DES-044 | US-0062, US-0063 | TC-2480–TC-2482 | ☐ `apps/verifier` does not exist |
| FR-057 filtering register & transparency report | Could | **none** | US-0065 | TC-2721 | ☐ no mechanism |
| NFR-008 scalability | Should | — | NF-— | TC-2150, TC-2151 | ☐ no load rig |
| NFR-018 exit rights | Should | DES-044 | US-0063 | TC-2480, TC-2481 | ☐ export path not built |
| NFR-019 observability dashboard | Should | — | NF-08 | — | ☐ not built |
| NFR-026 compatibility matrix | Should | — | US-0070 | TC-2380–TC-2382 | ☐ no device lab |

**Non-Must subtotal (v2.14.0): 23 rows · 5 complete · 18 open.** _(**v2.14.0, ISS-01(c)** — **FR-038** closes at v2.13.0, so 4 + 1 = **5** and 19 − 1 = **18**, matching the SUMMARY's non-Must line. **DERIVED, not retyped** — and deriving it is what exposed site (11) below: until FR-038's row was repaired, a row-wise count of §3.3 returned **22 rows, 4 complete**, because that row carried **both** a ✅ and a ☐ and was therefore uncountable.)_ FR-013 Should row newly complete (v2.2.4); FR-012 also complete. Five FRs (`FR-005`, `FR-049`, `FR-050`,
`FR-052`, `FR-053`) still have **no story**, exactly as Doc 05 §12 declared. They are recorded here
as open non-Must rows rather than silently absent, per that declaration.

---


---

### 3.4 Change-9 coverage record — party operation / no boss-privileged roles

**Product-owner determination (2026-08-09T2200, `artifacts/product-owner-2026-08-09T2200.md`):**
Change 9 of CR-v1.1.0 specified "party operation with no boss-privileged roles". The product owner
confirmed full coverage by existing requirements; **no new FR was minted**.

| Change-9 concern | Covered by |
|---|---|
| No party owner with special admin rights | FR-020 (any member joins without approval) |
| Every active member has one equal vote | FR-021 (one-member-one-vote) |
| Any matured member may propose | FR-024 (proposal without seniority gate) |
| No operator can override display or remove content | FR-056 (no operator discretion; logged display filtering) |
| No special standing above ordinary member | BR-003 (equal standing for all participants) |

This record closes the traceable link between Change-9 and the RTM. No new test cases are required
beyond those already associated with FR-020, FR-021, FR-024, FR-056.

## 4. Backward trace (test → requirement) — orphan check

Every `TC` in Doc 07 names the `US` and the `FR`/`NFR` it verifies; every `UT` cited in this matrix
was located by identifier in a real test file. Result of the reverse sweep:

| Check | Result |
|---|---|
| `TC` with no requirement | **0** |
| `TC` citing a non-existent `UT` | **0** — but see the ⚠ below: this check assumes a `UT` id resolves to exactly one test, and **`UT-0841`..`UT-0848` currently do not** |
| `UT` in the repository with no `TC` mapping | **0 material** — all 288 observed/inherited tests fall inside a mapped group. ⚠ Same caveat. _(v2.8.0: the FR-131 honesty drop’s three blocks — `UT-0887` (web, 4), `UT-0759` (ui, 4), `UT-0888` (protocol, 1) — are mapped to TC-3564..TC-3569 in Doc 07 §8 and are inside the sweep. The **288** figure is the v2.7.0 observed/inherited population and has **not** been re-derived at this version, so it is annotated rather than advanced; re-deriving it belongs with the `TD-RTM-02` recount.)_ _(v2.9.0, ISS-01: the v2.8.0 annotation was written as a THIRD cell in a two-column table and ended without a pipe, so it was discarded when rendered; it is folded into this Result cell unchanged and the row now closes with a pipe. Note the irony recorded by the reviewer: v2.8.0 un-orphaned this table from its blockquote and introduced this defect in the same edit.)_ |
| `UT` ranges present in code but **missing from the Doc 06 §3 inventory** | **2** — `UT-0600…0612` (deployment safety, 13 tests) and `UT-0700…0742` (`apps/web`, 16 tests). Raised as **TD-07-01** (Medium), owner engineer |
| `UT` ranges reserved but empty | `UT-2000…2499` circuits — **no suite exists**, circuits uncompiled |
| Regression tests for the four Doc 06 §5 defects, all carried as first-class cases | **Yes** — TC-2603 (`UT-0325/0326`), TC-2600 (`UT-0109/0109b`), TC-2641 (`UT-0109c`), TC-1610 (`UT-0360/0361`) |

> ⚠ **This check is not currently sound for `UT-0841`..`UT-0848` — see §10 `TD-RTM-01`.** Those
> eight ids are each **defined twice**, in `apps/web/test/party-creation.test.tsx` and
> `packages/sdk/test/proposals.test.js`. Every check in this table matches ids across files, so an
> id with two definitions resolves to whichever the checker happened to find: a "citing a
> non-existent `UT`" test cannot fail on a duplicate, and an orphan check cannot see one. **Both
> zeroes above are therefore correct for every id except those eight, and undetermined for those.**
> No RTM row's status is affected — both files exist and pass, and each citing row's evidence is
> real — but a Gate-2 verifier who starts at §4, as they are meant to, would otherwise take these
> zeroes as unconditional. **The check regains its soundness when the engineer renumbers the
> collision.** _(v2.7.0: added. §10 had warned since v2.5.4 that the collision corrupts exactly
> this check, and §4 carried no pointer to it for four review cycles.)_
> _(v2.8.0: **L-2 paid.** This blockquote was placed **inside** the §4 table, between the third and fourth rows, so the last three rows — including the `TD-07-01` record — rendered detached from their header. It now sits below a contiguous table. It was one of the 14 Lows formally accepted at v2.7.0 and marked "fix first on any future touch"; this version was editing these lines, so it is fixed here rather than carried a sixth cycle.)_

**v2.8.0 sweep — FR-131 honesty drop (Doc 06 v2.5.1, commit `0a5c542`).** Every id was read in its test file. `UT-0887` → TC-3564, TC-3565, TC-3566, TC-3567 (one TC per independently defeatable assertion); `UT-0759` → TC-3568 (one TC for the four-path block, matching TC-3475/UT-0758 for the subtitle half of the same rule); `UT-0888` → TC-3569. **Material orphan count for this drop: 0.** Two existing mappings were re-checked because the drop changed what their tests assert — `UT-0751` → TC-3471 and `UT-0753` → TC-3488, both of which moved their expected `ver` title from "Verified — private" to "Verified" — and neither TC became false; both now carry a note in Doc 07 §5.3 saying so. **The `TD-RTM-01` caveat above does not touch this drop:** none of the six new cases cites `UT-0841`..`UT-0848`.

**v2.10.0 sweep — FR-131 clause (e) drop (Doc 06 v2.6.0, branch `build/v1-cascade-and-release-prep`).** One new `UT`, read `it` by `it` in its test file. **`UT-0889`** (`apps/web/test/safety-surfaces.test.tsx`, **5** `it`s) → **TC-3570** (en `home.steps[1].body`), **TC-3571** (en `home.promises[0]`), **TC-3572** (both strings bound to the rendered landing page), **TC-3573** (the Arabic mirror), **TC-3574** (the sdk `AUTHORSHIP_REQUIRES_WORKER_TIER` message) — one TC per independently defeatable assertion, the UT-0887/TC-3564..TC-3567 precedent. **Material orphan count for this drop: 0.** **The converse is recorded too, because it is the finding that matters: `TC-3575` deliberately cites NO `UT`.** It carries Doc 02 §8 FR-131 **Scenario 9**, whose instrument (Doc 04 §0.5 S5) is unbuilt. A `TC` with no `UT` is not an orphan in this table's sense — the orphan check asks whether a `TC` cites a **non-existent** `UT`, and TC-3575 cites none — but it is named here so the §4 zeroes are not read as "everything is covered". **Reverse sweep over the strings the drop changed, because a copy change can stale a `TC` that never cites the changed `UT`:** the five rewritten strings were grepped across Docs 07 and 08 in their retired wording ("kept private", "never learn", "Supporters are anonymous"). **One hit — Doc 07 `TC-3543`**, whose expected result said the Supporter refusal's "stated reason is *anonymity*"; corrected at Doc 07 v2.7.0, and **its status does not change**, because UT-0089 and UT-0832 assert a boolean, an error code and the substring "self-declared" — none of which moved. **No RTM row's status, gap code or count is affected by that correction.** **v2.11.0 re-sweep (ISS-02) — the paragraph above was written against Doc 06 v2.6.0 and the file has since settled at v2.7.0 (Approved).** `UT-0889` now has **6** `it`s: a **DES-085 jargon scan** was added as the first `it`, over the two corrected landing strings. Doc 07 v2.8.0 mints **TC-3576** for it, so the mapping is `UT-0889` → **TC-3570..TC-3574 + TC-3576** — six `it`s, six cases — and "one TC per independently defeatable assertion" is true of the block again. **Material orphan count for this drop: 0, and now truly**; between v2.10.0 and this version it was **1**, which is stated rather than glossed. **TC-3576 verifies `NFR-023 · DES-085`, not FR-131 clause (e)**, so it enters this matrix at the §3.2 NFR-023 row and adds nothing to the FR-131 chain. Doc 06 v2.7.0 also **narrowed** the block's Arabic assertion to the exact retired phrase; Doc 07 v2.8.0 re-cuts TC-3573 to match, with no status change, and **no RTM row's status, gap code or count is affected**. The `TD-RTM-01` caveat (the `UT-0841`..`UT-0848` double definition) does not touch this drop: none of the six new cases cites one of those eight.

**v2.12.0 sweep — the `/verify` flag-gate drop (Doc 06 v2.8.1, `HEAD` `18244e8`).** One new `UT`, read `it` by `it` in its test file rather than taken from Doc 06 §3 or from the engineer's note. **`UT-0890`** (`apps/web/test/safety-surfaces.test.tsx`, `describe` opening at line **430**, **15** `it`s in five lettered groups) → **TC-3577**, **TC-3578**, **TC-3579** (group A, the flag posture: `isEnabled` defaults, `permanentFlags()` empty, the description cites CON-015/FR-132); **TC-3580**..**TC-3583** (group B, flag-off DOM: the placeholder renders whole, the five retired enrolment claims are absent, the enrolment controls are absent, `SiteHeader` emits no `/verify` anchor); **TC-3584** (group C, flag-on: the screen and nav link are intact — the copy is gated, not deleted); **TC-3585**..**TC-3588** (group D, the new copy is itself honest: no banned word, no DES-085 jargon, the H-17/H-15/CON-015 facts stated, "nobody is checked at all"); **TC-3589**..**TC-3591** (group E, the Arabic mirror: same key set, complete and not a copy-paste, no Latin-script banned word) — **one TC per `it`**, the `UT-0887`/TC-3564..TC-3567 and `UT-0889`/TC-3570..TC-3576 precedent, because each `it` is an independently defeatable guard. **The count was established twice and by two methods:** fifteen `it(` occurrences inside the `describe`, and **15 passed / 26 skipped (41)** from the verbose run. **Material orphan count for this drop: 0.** **No reverse-orphan this time** — unlike `TC-3575`, every one of the fifteen cites a real `it`, and no acceptance criterion in this drop lacks an instrument. **Reverse sweep over the strings the drop retired, because a copy change can stale a `TC` or an RTM row that never cites the changed `UT`:** the five retired `/verify` claims ("never leaves your phone", "and nothing else", "cannot be traced back to you", "never run by a government", "Everything happens on your phone") were grepped across this matrix and Doc 07. **Zero hits in either document** — and that zero is itself the finding, not a clean bill of health: **no `TC` and no RTM row had ever named the `/verify` surface**, so a public page asserting an unbuilt guarantee sat outside the traceability net for the whole life of both documents. It is inside it now. **Caveat inherited, not resolved here:** §10 `TD-RTM-01` (the `UT-0841`..`UT-0848` double definition) still makes id-matching unsound for those eight ids; **none of the fifteen new cases cites one of them**, so this drop's zero is unaffected by it.

**v2.13.0 sweep — the candidate-selection drop (Doc 06 v2.11.1, `HEAD` `12fe4a6`).** _(Added at **v2.14.0**, ISS-06: **the largest drop in this document's life added no sweep**, so §4's standing assertion that "every `UT` cited in this matrix was located by identifier in a real test file" was unsupported here for **seventeen** ids. Doc 07 v2.10.0 §8 carried the sweep; this section is where a reader of **this** document looks, and the omission is corrected at the site rather than pointed at.)_ **Seventeen new `UT` ids, `UT-0891`..`UT-0907`, 97 `it`s over four files**, each read `it` by `it` in its test file in run **R-21** and not taken from Doc 06 §3: `packages/protocol/test/candidates.test.js` **UT-0891** (6 `it`s) → **TC-3592, TC-3593** · **UT-0892** (5) → **TC-3594** · **UT-0893** (4) → **TC-3595, TC-3596** · **UT-0894** (7) → **TC-3597, TC-3598** · **UT-0895** (5) → **TC-3599**; `packages/sdk/test/candidates.test.js` **UT-0896** (10) → **TC-3600, TC-3601, TC-3602** · **UT-0897** (9) → **TC-3603, TC-3604, TC-3605** · **UT-0898** (6) → **TC-3606** · **UT-0899** (4) → **TC-3607** · **UT-0900** (5) → **TC-3608, TC-3609** · **UT-0901** (6) → **TC-3610, TC-3611** · **UT-0902** (3) → **TC-3612**; `packages/ui/test/PrivacyStatus.test.tsx` **UT-0903** (7) → **TC-3613**; `apps/web/test/candidates.test.tsx` **UT-0904** (4) → **TC-3614** · **UT-0905** (5) → **TC-3615, TC-3616** · **UT-0906** (7) → **TC-3617, TC-3618** · **UT-0907** (4) → **TC-3619**. **27 + 43 + 7 + 20 = 97 `it`s over 28 cases, no `it` cited twice and none omitted. Material orphan count for this drop: 0.** **Two existing cases were re-checked because the drop changed what their tests assert**, the `UT-0751`/TC-3471 precedent: **`UT-0750`** — whose anon assertion the drop **FLIPPED**, so a green test had been guarding a superseded string — maps **TC-3470**, annotated at Doc 07 v2.11.0 with no status change; and **`UT-0871`**, extended at Doc 06 **v2.10.0** to `IProposalStore` and **`ICandidateStore`**, maps **TC-3540**, whose scope is widened at Doc 07 v2.11.0 from `IPartyStore` alone to all three seams. **`UT-0871` is the drop's EIGHTEENTH block** — Doc 07 v2.10.0 swept seventeen and its own cycle-1 review (ISS-01) caught the omission; the `it` arithmetic closes as **640 + 97 + 2 = 739**. **Two re-statused cases carry no new `UT`:** `TC-3407` and `TC-3411` move No mechanism → Pass (obs.) on `UT-0891`/`UT-0894`/`UT-0896`/`UT-0899`/`UT-0901` and `UT-0895`/`UT-0897`/`UT-0904` respectively — existing ids, newly attributable because DES-107 and DES-028 rule 6 now design what they assert. **`TC-3419` cites no `UT` and is Blocked**, the `TC-3575` situation: a `TC` with no `UT` is not an orphan in this table's sense, and it is named here so the zero is not read as "everything is covered". **Caveat inherited, not resolved:** §10 `TD-RTM-01` (the `UT-0841`..`UT-0848` double definition) still makes id-matching unsound for those eight ids; **none of the seventeen is one of them**, so this drop's zero is unaffected.

## 5. Risk → control → test

| RISK | Control (design) | Verified by | Verdict |
|---|---|---|---|
| RISK-01 Sybil inflation | DES-001, DES-002, DES-010, DES-011 | TC-2600–TC-2605, TC-1001–TC-1004 | **Partial** — namespace collision and nullifier-burn defences pass; cross-type residual (TC-2601) and the per-region cap (TC-2642) are open |
| RISK-02 Coercion & vote-buying | DES-023, DES-024, DES-063 | TC-2610–TC-2614, **TC-3564–TC-3567** | **Not mitigated at v1** — MACI is Phase 3 (OPEN-01); the client discloses the limitation. **v2.8.0: the disclosure itself is now regression-guarded** (TC-3564..TC-3567 / UT-0887) after Doc 06 v2.5.1 found the shipped copy asserting the *opposite* of the disclosure — "Your vote is private" / "Nobody can see that a vote was yours". **This changes the verdict not at all:** an honest warning is still a warning, not a control. It does close a real hole in the control set, because a disclosure control whose text can silently regress is not a control |
| RISK-03 Flash takeover | DES-019, DES-021, snapshot + maturation | TC-2620–TC-2622, TC-1030, TC-1031 | **Mitigated and proven** |
| RISK-04 Mob charter capture | DES-020, DES-022, DES-034 | TC-2630–TC-2633 | **Mitigated and proven** (fork exit has no story) |
| RISK-05 Issuer compromise | DES-002, DES-003, DES-036 | TC-2640–TC-2642 | **Partial** — epoch cap and fail-closed invariant pass; the 50% region cap has no mechanism |
| RISK-06 Deanonymisation | DES-008, ADR-004 | TC-2650–TC-2653, TC-1950–TC-1962 | **Partial** — the k-floor is enforced at three layers; the correlation battery has no pass line (OPEN-08/10/13) |
| RISK-07 State compulsion | DES-001 (no linkage), ADR-013 | TC-2660–TC-2662 | **Mitigated by non-collection**; attestor-side residual accepted and disclosed |
| RISK-08 State-level blocking | DES-041, DES-050, DES-051 | TC-2670, TC-2671, TC-2423 | **Untested** — no network lab |
| RISK-09 Sequencer censorship | DES-041 | TC-2680, TC-2420 | **Untested and contradicted** — OPEN-11 |
| RISK-10 Ceremony / circuit compromise | DES-038, DES-052 | TC-2690–TC-2693, TC-1852–TC-1859 | **Partial** — registry, ceremony binding and mock-detection pass; the circuits themselves are uncompiled |
| RISK-11 Key loss at scale | DES-042 | TC-2700, TC-2701 | **Untested** — recovery not built |
| RISK-12 Oracle manipulation | DES-007, DES-010 | TC-2710–TC-2715 | **Strongly mitigated** — median, drift cap, dispute window, ≥5 sources and the deflation floors all pass; source *independence* is not enforceable (OPEN-12) |
| RISK-13 Misuse / unlawful content | DES-035, filtering boundary | TC-2720, TC-2721 | **Partial** — no deletion path exists; the filtering register does not exist |
| RISK-14 Regulatory reclassification | CON-001 boundary | TC-2730 | **Untested** — manual |
| RISK-15 Adoption failure | threshold calibration | TC-2740 | **Blocked** — OI-01 undecided |
| RISK-16 Trumocracy becomes the gatekeeper | DES-037, DES-039, DES-044, DES-045 | TC-2750–TC-2752, TC-1600–TC-1612 | **Partial** — capability absence is proven at the ABI/bytecode boundary; the flag blast radius (OPEN-03) and the exit path are open |
| RISK-22 Stolen credential: attacker initiates recovery to seize victim party membership | Active-key holder veto path (7-day delay + independent on-chain veto, DES-071/ADR-018); notification at initiation (FR-072) | TC-3340 | ☐ **G-PHASE3** — recovery state machine not implemented |
| RISK-23 Veto suppression via notification-channel compromise | Independent on-chain veto path (attacker cannot block an on-chain transaction); veto window ≥ delay (FR-072); ADR-018 | TC-3341 | ☐ **G-PHASE3** — recovery state machine not implemented |
| RISK-24 Recovery raced against a live ballot | `isInRecovery` check in `vote()` bars any vote cast while recovery is RECOVERY_PENDING (FR-072, DES-071) | TC-3342 | ☐ **G-PHASE3** — recovery state machine and Elections not implemented |

## 6. Coverage dashboard

| Dimension | Total | Traced (chain links all present) | Complete (chain closes with a passing TC) | Gaps |
|---|---|---|---|---|
| BR | 21 | 21 | **0** — every BR depends on ≥1 open Must FR | 21 |
| FR — Must | 114 | 114 | **19** | **95** |
| FR — Should/Could | 19 | 14 (5 lack a `US`) | 5 | 14 |
| NFR — Must | 24 | 23 (1 lacks a `US`: NFR-007) | **0** | **24** |
| NFR — Should | 4 | 2 | 0 | 4 |
| Risks | 19 | 19 | 4 fully mitigated & proven | 15 |
| Stories | **142** | **134** (all 134 carry Gherkin AC; **8 untraced — see below**) | 23 meet the Definition of Done | **119** |
| Test cases | **528** | **528** | **275** with passing evidence (136 inh. · **139** obs.) | 253 not executed or not executable |
| Screens | 23 | 23 mapped | 0 verified (no UI suite executed) | 23 |

**TC count convention (Test cases row — v2.5.4 reconciliation; ISS-01 carried since v2.5.0 now FIXED, together with a second arithmetic error found at v2.5.3 review):** Doc 07 at **v2.4.4** uses **463 TC row anchors** = 299 original + 70 TS-GOV2 + 19 TS-SCAFFOLD + **29 TS-PARTY, incl. the newly minted TC-3541** + 24 TS-MEMBERSHIP + **22 TS-PROPOSALS** (TC-3542..TC-3563). _(Both errors corrected here. **(i)** The breakdown previously omitted the 22 TS-PROPOSALS anchors and summed to **441** while asserting 463 — the pre-proposals breakdown left standing under the post-proposals total. **(ii)** The evidence line previously opened "The 195 'with passing evidence' = 107 + 88", the pre-proposals figures, contradicting the authoritative dashboard beside it. Neither was ever load-bearing — the dashboard and §3 tables were right throughout — but a convention note that cannot be added up teaches a reader to distrust the table it explains, which is why it is not carried a third time.)_ This dashboard uses the **expanded** convention: 463 − 1 + 10 = **472 designed test cases** (one anchor TC-3200-TC-3209 expands to 10 exploratory charters; see Doc 07 §2 convention note). The **217** 'with passing evidence' = **129 Pass (inh.) + 88 Pass (obs.)** per Doc 07 §2 footer; the inherited bucket is 55 contract suite + 28 TS-PARTY (Doc 06 v2.2.0) + **22 TS-PROPOSALS** (Doc 06 v2.4.2) + **24 TS-MEMBERSHIP** (TC-3517..TC-3540; sdk/web membership suites inherited from Doc 06 v2.3.2 Approved, R-09..R-12 2026-08-29). The 255 'not executed or not executable' = 472 − 217 = 255, **unchanged across both recent drops**: every TS-MEMBERSHIP case (24) and every TS-PROPOSALS case (22) carries passing evidence and none is Blocked, so neither drop added to this bucket. `TC-3541` is the one exception — **No mechanism**, so it joins this bucket rather than the passing-evidence one. _(v2.7.0: this sentence had accumulated **two** conflicting trailing clauses across drops — "because all **20** TS-PROPOSALS cases…" followed by "**unchanged**, because all **24** new cases…", each a leftover from a different drop, giving two different reasons for one figure and two different counts. Carried five cycles as a Low. Merged into one statement covering both drops; the arithmetic was never in doubt.)_ **Honesty note:** the tester executed the full suite on 2026-08-29 during the Doc 06 v2.3.2 cycle-3 review and observed **542/542 green**, which covers every TS-PARTY and TS-MEMBERSHIP file; those cases are nevertheless counted in the **inh.** bucket, not promoted to **obs.**, because the observation was at file granularity during a review run rather than case-by-case (Doc 07 §2 corroboration note). The count understates the evidence rather than overstating it.

**v2.8.0 update to the convention note, and `TD-RTM-02` is the point of it.** Doc 07 at **v2.5.0** mints six cases (TC-3564..TC-3569), so its anchor count moves 463 → **469** and this dashboard’s expanded figure 472 → **478** (469 − 1 + 10). Passing evidence moves 217 → **224**: +6 for the new cases and +1 for TC-2614, re-statused *Not run* → Pass (inh.) in Doc 07 v2.5.0 on the R-17 result. The inherited bucket therefore moves 129 → **136** and the observed bucket stays **88** — run R-17 (2026-09-06, 619/619, tester-executed) was observed at **file** granularity, and Doc 07 §2’s corroboration convention records such cases as Pass (inh.) rather than promoting them. Gaps: 478 − 224 = **254**. ⚠ **These figures are stated in ONE of three live conventions and must not be quoted across sections.** `TD-RTM-02` (§10) records that Doc 07 §2 counts **471**, this dashboard counts **478**, and Doc 07 §10’s overlap paragraph counts on a third base again; the three disagree by construction and the disagreement is **unresolved**. _(v2.9.0, ISS-04: the §10 `TD-RTM-02` entry now records exactly these figures and this three-way framing. Until v2.9.0 it still carried its superseded v2.6.1 figures — 465 / 456 / 463 / 472, 217 with passing evidence, the 610/610 suite — and a two-way framing, so this sentence and the changelog were attributing to it content it did not contain. The attribution is now true; the debt is still OPEN.)_ _(v2.8.0: **L-13 paid.** v2.7.0 published "472 / 255" and asserted Doc 07’s anchor count unqualified, with no pointer to `TD-RTM-02` — the mirror image of the §4→§10 defect v2.7.0 itself closed. It was formally accepted and flagged "fix first on any future touch"; this version was editing the line, so the pointer is now in it. What is **not** fixed is the underlying disagreement — widening it by 6 on both sides is what a sync version can honestly do; reconciling it is a document-wide recount the tester owes.)_ _(**v2.10.0 update.** Doc 07 at **v2.7.0** mints six more cases (TC-3570..TC-3575), so its anchor count moves 469 → **475** and this dashboard's expanded figure 478 → **484** (475 − 1 + 10). Passing evidence moves 224 → **229**, and this time **the observed bucket is the one that moves**: 88 → **93**, because run **R-18** had a second half — after the 624/624 full-suite run the tester re-ran the UT-0889 block with `--reporter=verbose -t "UT-0889"` and read each of its five `it`s green individually, which is the case-by-case bar every other Pass (obs.) case met. The inherited bucket stays **136**. Gaps: 484 − 229 = **255**, up one, because the sixth new case — **TC-3575**, Doc 02 §8 FR-131 **Scenario 9** — is minted **Blocked**: the population scan it needs (Doc 04 §0.5 S5) is not built. **TC-3564..TC-3569 are NOT promoted** on R-18; no case-by-case run of UT-0887, UT-0759 or UT-0888 was performed. ⚠ **The three-way convention warning above applies unchanged to every figure in this sentence:** Doc 07 §2 now counts **477**, this dashboard **484**, and Doc 07 §10's overlap paragraph a third base again (**430**). `TD-RTM-02` is still OPEN and is still not paid here.)_ _(**v2.11.0 update.** Doc 07 at **v2.8.0** mints one more case (**TC-3576**, the sixth UT-0889 `it`), so its anchor count moves 475 → **476** and this dashboard's expanded figure 484 → **485** (476 − 1 + 10). Passing evidence moves 229 → **230**, all of it in the observed bucket (93 → **94**), because TC-3576 was observed `it` by `it` in run **R-19**; the inherited bucket stays **136**. Gaps: 485 − 230 = **255**, unchanged. ⚠ **The three-way convention warning above still applies to every figure here:** Doc 07 §2 now counts **478**, this dashboard **485**, and Doc 07 §10's overlap paragraph a third base again (**431**). `TD-RTM-02` is still OPEN and is still not paid. **`TD-RTM-03` is new at this version** and is a different defect — not a denominator disagreement but an evidence-link disagreement, on NFR-023.)_


**v2.12.0 update to the convention note — the figures move, and `TD-RTM-02` does not.** Doc 07 at **v2.9.0** mints fifteen cases (TC-3577..TC-3591), so its row-anchor count moves 476 → **491** and this dashboard's expanded figure **485 → 500** (491 − 1 + 10). Passing evidence moves **230 → 245**: +15, all of them observed, so the **observed** bucket moves **94 → 109** and the **inherited** bucket stays **136**. **Gaps stay 255** (500 − 245), because every one of the fifteen carries evidence — this is the first drop since v2.2.4 in which the gap figure does not move at all. **The three-way denominator disagreement `TD-RTM-02` records is unchanged in character:** §6 counts **500**, §9 counts **493** (Doc 07 §2's row-anchor convention), and Doc 07 §10's overlap paragraph counts on a third base again. **All three moved by exactly +15 and none was reconciled to the others** — reconciling them is a recount of every case in two documents, which is the debt, not a side-effect of a mint. ⚠ **These figures are still stated in one of three live conventions and must not be quoted across sections.**

**v2.13.0 update to the convention note — the figures move on both sides and `TD-RTM-02` still does not.** Doc 07 at **v2.10.0** mints twenty-eight cases (TC-3592..TC-3619, the new §5.7 `TS-CANDIDATE` suite), so its row-anchor count moves 491 → **519** and this dashboard's expanded figure **500 → 528** (519 − 1 + 10). Passing evidence moves **245 → 275**: **+28** for the new cases, all of them **observed** `it` by `it` in run **R-21**, **plus +2** for **TC-3407** and **TC-3411**, re-statused **No mechanism → Pass (obs.)** at Doc 07 v2.10.0 because DES-107 and DES-028 rule 6 designed what they assert and Doc 06 v2.11.1 built it. The **observed** bucket therefore moves **109 → 139** and the **inherited** bucket stays **136**. **Gaps: 528 − 275 = 253**, down two — the only two movements out of that bucket are TC-3407 and TC-3411, and **TC-3419's No mechanism → Blocked move does not touch it**, because both statuses sit inside "not executed or not executable". **The three-way denominator disagreement `TD-RTM-02` records is unchanged in character:** §6 counts **528**, §9 counts **521** (Doc 07 §2's row-anchor convention), and Doc 07 §10's overlap paragraph counts on a third base again (**459**). **All three moved and none was reconciled to the others.** ⚠ **These figures are still stated in one of three live conventions and must not be quoted across sections.**

**Story-census disclosure (v2.11.2, cycle-3 ISS-01) — the population is 142, this matrix traces 134, and the eight it does not trace are named here.** Doc 05 **v2.5.0** — the BKLG version this matrix pins — states **142 stories** (§12 census; "12 epics · 62 features · 142 stories"). This matrix carries rows for **134**. A mechanical id diff of every `US-####` in Doc 05 against every `US-####` in this file returns **eight that appear nowhere here**, together with the requirement each was minted for (Doc 05 v2.4.0 mint line): **US-0135** (FR-121, pilot jurisdiction sequence) · **US-0136** (FR-125) · **US-0137** (FR-133) · **US-0138** (FR-126) · **US-0139** (FR-127) · **US-0140** (FR-128) · **US-0141** (FR-129) · **US-0142** (FR-050). **They are disclosed, not traced.** Tracing them means deriving eight `BR → FR → DES → US → TC` chains from a backlog this matrix has not re-read end to end; that is the next backlog sync, registered as **`TD-RTM-04`** (§10). **No Must row can move on it** — every one of those FRs already has a row and is already OPEN (FR-121, FR-125..FR-129 are `G-TRACE + G-PHASE3`, FR-133 is `G-PHASE3`, and **FR-050 is a Should row**), so a missing `US` link cannot close a row blocked on a missing `DES` and a missing implementation. **The residue is EIGHT story cells, one per untraced story** _(v2.11.3, cycle-4 ISS-02: this read "sharpest instance… one concrete cell", which understated a systematic gap as a single typo)_. In **§3.1**, the `US` cell reads "**none**" for **FR-121, FR-125, FR-126, FR-127, FR-128, FR-129 and FR-133**; in **§3.2**, **FR-050**'s story cell reads "**none**". Every one of those requirements has a story minted for it in Doc 05 v2.5.0 and no link here — which is the same gap the Stories row discloses, seen from the requirement side. **Sharpest instance, and it keeps that billing: §3.2's FR-050** — because §9 tells the Product Owner they own "the FR-005/FR-049/**FR-050**/FR-052/FR-053 story gap", making it the one case already assigned to a named owner elsewhere in this file, while Doc 05 has minted **US-0142** for exactly that requirement. **None of the eight cells is edited here, on purpose**, because re-deriving them belongs to the same re-read (`TD-RTM-04`). **How the gap arose:** v2.11.1 advanced the BKLG pin v2.3.0 → v2.5.0 as a **version-only** advance and disclosed that the `US-####` chains were not re-verified — but left the census derived from the old backlog standing beside the new pin. **A pin advance is a change to a denominator**, and this disclosure exists so the denominator is never again quieter than the pin.

**Definition of Done check (CLAUDE.md).** A story is done only when its RTM row is complete.
**The current figure is 23 of 142** _(v2.13.0: was 17 of 142. The numerator moves for the first time since v2.5.1, by six stories, and the move is the result of a story-by-story check recorded below — not a deduction from the three FRs that closed. v2.11.2, ISS-01, retained: the denominator was corrected from 134 to the population Doc 05 v2.5.0 actually carries — see the story-census disclosure above)_ — see the running per-drop checks below, which are authoritative;
the v2.2.4 baseline list that follows is retained as the starting point, not as the current total.
_(Corrected v2.5.4: this lead-in still read "13 of 134" while the v2.5.0 check below had already
carried the running total to 17 — a reader stopping at the lead-in got a stale number. The path is
13 (v2.2.4 baseline) → +US-0131 (v2.4.0) → +US-0089, US-0100 (v2.5.0) → +US-0090 (v2.5.1) = **17**.)_
**v2.2.4 baseline — 13 of 134 stories:** US-0019, US-0021, US-0024, US-0025, US-0026, US-0027, US-0031, US-0033,
US-0034, US-0035, US-0036, US-0037, US-0028. **US-0021 newly meets DoD (v2.2.4)** — FR-013 Should row closes (TC-3499..TC-3503, UT-0795..0801, UT-0817 all pass inh.; full chain BR→FR-013→DES-009→US-0021→TC closes). The 47 new stories (US-0084..US-0130) and the 13 pre-v2 stories (US-0071..US-0083) are not done (capabilities not yet implemented). US-0132/0133/0134 (TS-SCAFFOLD) are not done — seam is IS_INSECURE_MOCK=true and the full FR guarantees are not yet implemented. US-0011/0013/0015/0022/0087/0131 are **Status: Partial** — logic+UI complete and tested (IS_INSECURE_MOCK=true) but their Must RTM rows stay OPEN (production store, DES assignment, or dwell period pending). Every other story is **not done**.

**v2.3.0 DoD check (join/membership drop) — no story newly meets the bar.** This was checked story by story rather than assumed. **US-0024** (join without approval) and **US-0025** (leave at will) gain substantial new evidence (TC-3517..TC-3522, TC-3526..TC-3527, TC-3536) but were **already** among the 13 done — FR-020 and FR-022 were COMPLETE before this drop, so the count does not move. **US-0073** (single party at a time) is **not done**: its FR-064 row stays OPEN pending the product-owner ruling on Flag `FR-064-SEMANTICS` *and* the unbuilt DES-065 nullifier. **US-0131** stays **Partial**: FR-130 is now well tested at the 100/101 ACTIVE-member boundary but still has **no DES** (G-TRACE) — a chain defect no test can close. **US-0133 / US-0134** stay **not done**: FR-122/FR-123 remain stub-gated (IS_INSECURE_MOCK=true) and FR-131 has clause (d) built at the parties-directory surface only, with the SCR-13/SCR-14 ballot surfaces unbuilt. **Stories meeting DoD: 13 of 134 — unchanged.**

**v2.5.0 DoD check (proposals & debate drop) — two stories newly qualify, three do not.** Checked story by story. **US-0089** (participation tiers) and **US-0100** (public authorship / competing proposals) now meet the bar: FR-079 and FR-090 close, so their chains `BR → FR → DES-103/DES-104 → (SCR-12 for US-0100) → US → TC` close end to end. Total **14 → 16 of 134**. **US-0090 DOES, as of v2.5.1** — the informed-consent event was built (Doc 06 v2.4.2) and FR-080 closes, taking the total to **17 of 134**. **US-0101 does NOT** — FR-091 stays open on the unwired timeline clause. **US-0102 does NOT** — FR-092 stays open on four unrecorded trail elements and unbuilt third-party reconstruction. **US-0031** (unscreened proposals) was already done via FR-024 and gains evidence, not status.

**v2.4.0 DoD check (DES paydown) — one story newly qualifies.** **US-0131 (provisional membership cap) now meets DoD**: FR-130 closes at v2.4.0, so its chain `BR-002/BR-012 → FR-130 → DES-102 → SCR-09/SCR-11 → US-0131 → TC-3511..TC-3516/TC-3528/TC-3529` closes end to end. It moves from **Status: Partial** to **done**, taking the total from 13 to **14 of 134**. **US-0087 (non-violence clause) does NOT qualify** — FR-077 stays OPEN (G-NOMECH: the amendment half of its guarantee has no mechanism at either tier), so US-0087 remains **Partial**: its publication-half logic and UI are complete and tested, but its Must row does not close. No other story is affected by this increment.

**v2.8.0 DoD check (FR-131 honesty drop) — no story newly meets the bar; the count stays 17 of 134.** Checked story by story rather than assumed, because this drop shipped visible user-facing correctness and it would be easy to reward it with a status it has not earned. **US-0134** (ballot seam and honest pre-action notices) is the story the drop was built under and it is **NOT done**: CLAUDE.md makes a story done only when its RTM row completes, and FR-131 stays OPEN on six of its ten obligations (Doc 02 §4.45) — most sharply the acknowledge-to-proceed control, which does not exist, and the SCR-13/SCR-14 ballot surfaces, which are unbuilt. US-0134 moves from *not done* to *not done with materially better evidence*, which is not a DoD state. **US-0132** (PrivacyStatus) is **not done** — FR-124 stays OPEN; TC-3568 closes the title half of DES-094 clause 7, not the backend enforcement the row waits on. **US-0133** is **not done** — FR-122/FR-123 remain stub-gated at `IS_INSECURE_MOCK=true` and are untouched by this drop. No other story cites `UT-0887`, `UT-0759` or `UT-0888`. **Stories meeting DoD: 17 of 134 — unchanged.**

**v2.10.0 DoD check (FR-131 clause (e) drop) — no story newly meets the bar; the count stays 17 of 134.** Checked story by story, and checked harder than usual because this drop removed a **false anonymity claim from the public landing page** — the kind of fix that invites a status it has not earned. **US-0134** (ballot seam and honest pre-action notices) is the story the work lands under — DECISIONS §5.5 mints no new `US` and places it here explicitly — and it is **NOT done**: CLAUDE.md makes a story done only when its RTM row completes, and FR-131 stays OPEN on six of its **eleven** obligations plus a clause (e) whose **Scenario 9 has no executing test at all (TC-3575, Blocked)**. Most sharply, the **DES-098 acknowledge-to-proceed control does not exist**, and DECISIONS §10 lists it as *unchanged by this record*. **US-0132** (PrivacyStatus) is **not done** — FR-124 stays OPEN and the drop did not touch `packages/ui`; note that **OPEN-27** now asks whether that component's own `anon` copy still passes clause (e), which is a question about US-0132's surface, not an answer for it. **US-0133** is **not done** — FR-122/FR-123 remain stub-gated at `IS_INSECURE_MOCK=true`, untouched. **US-0031 / US-0100** (proposals authorship) were already done via FR-024/FR-090 and are unaffected: the TC-3543 correction is a description fix on a passing case, not a status change. No other story cites `UT-0889`. **Stories meeting DoD: 17 of 134 — unchanged.**

**v2.12.0 DoD check (the `/verify` flag-gate drop) — no story newly meets the bar; the count stays 17 of 142.** Checked story by story rather than assumed, and checked with the usual suspicion, because this drop took a **false guarantee off a public page** — the kind of fix that invites a status it has not earned. **US-0133** (gate every counting action behind the `IEligibilityVerifier` seam) is the story the work lands under: `DECISIONS-2026-09-08-VERIFY-PAGE.md` mints no new `US`, and FR-132 — the requirement the fifteen cases verify — is implemented by US-0133 per Doc 05 v2.5.0 §FE-057. _(v2.12.2, ISS-02: **fourteen** of the fifteen verify FR-132 — TC-3586 verifies `US-0133 · NFR-023 · DES-085`, names no FR, and enters at the §3.2 NFR-023 row only, per the v2.12.1 ISS-01 correction. This v2.12.0 paragraph is retained as the dated record it is and is **not rewritten**; what was missing was this annotation. **No count in this paragraph moves and the DoD figure stays 17 of 142.**)_ It is **NOT done**. CLAUDE.md makes a story done only when its RTM row completes, and US-0133 carries **three** Must rows: **FR-122** and **FR-123** are untouched by this drop and stay stub-gated at `IS_INSECURE_MOCK=true`, and **FR-132** stays OPEN on four unbuilt clauses (§(a), §(b), §(c), §(e)) plus a §(d) notice duty that names a **DES-098 that does not exist**. US-0133 moves from *not done* to *not done with materially better evidence on one clause of one of its three rows*, which is not a DoD state. **US-0134** (ballot seam and honest pre-action notices) is **not cited by any of the fifteen** and is unaffected — FR-131 stays OPEN, and clause (e) expressly does not reach enrolment copy. **US-0132** (PrivacyStatus) is untouched — the drop does not enter `packages/ui`. **No other story cites `UT-0890`.** **Stories meeting the Definition of Done: 17 of 142 — unchanged.**

**v2.13.0 DoD check (the candidate-selection drop) — SIX stories newly meet the bar and nine do not; the count moves 17 → 23 of 142.** **The method is stated first, because the recurring defect class in this repo is publishing a count of sites FIXED as a count of sites CHECKED.** Fifteen stories were in scope — US-0046, US-0047, US-0048, US-0049, US-0050, US-0051, US-0052, US-0074, US-0075, US-0076, US-0077, US-0091, US-0095, US-0103, US-0132 — and each was resolved by a **mechanical id diff over this file**, listing **every row that cites it**, so that a story carrying a second open row could not be promoted on one closure. The enumeration follows in full; anyone can re-run it. **SIX NEWLY QUALIFY.** **US-0046** and **US-0047** appear on **one row each — FR-036**, which closes: chain `BR-004 → FR-036 → DES-027 → SCR-15 → US → TC-3597/TC-3598/TC-3600/TC-3601/TC-3602/TC-3615/TC-3616` closes end to end. **US-0048** appears on **two — FR-036 (Must) and FR-038 (Should)** — and **both** close. **US-0049** appears on **two — FR-037 (Must) and FR-038 (Should)** — and **both** close. **US-0050** appears on **one — FR-037**, which closes. **US-0095** appears on **one — FR-085**, which closes. **17 + 6 = 23 of 142.** **NINE DO NOT, and the blocking row is named for each.** **US-0051, US-0052** — FR-039 stays OPEN (`G-NOMECH`: the office ballot's voter-scope guard and tie-break field are unbuilt). **US-0074, US-0075** — FR-065 stays OPEN on the nullifier-mechanism and unlinkability clauses. **US-0076** — FR-066 stays OPEN on "the verifiable record". **US-0077** — FR-067 stays OPEN on "and logged". **US-0091** — FR-081 stays OPEN on "with its state (active/inactive)"; it is **one `it` from done** and it is not counted as done, because a story is done when its row completes and not when it nearly does. **US-0103** — FR-093 stays OPEN on the question phase and the election. **US-0132** — it carries **six** rows in this file (FR-082, FR-083, FR-084, FR-085, FR-086, FR-124) and **only FR-085 closes**; the other five are untouched by this drop, so US-0132 moves from *not done* to *not done with one of six rows closed*, which is not a DoD state. **No story outside those fifteen cites `UT-0891`..`UT-0907`**, checked by grep over this file rather than assumed. **Stories meeting the Definition of Done: 23 of 142.**

**Denominator note on every check above (v2.11.2, cycle-3 ISS-01).** Each per-drop check, and each historical changelog entry, states its result as "**17 of 134**". **Every one was true of the population known when it was written** — this matrix pinned BKLG v2.3.0 until v2.11.1 — and none is edited, because rewriting a dated record to a denominator it never used destroys the trail this document exists to keep. **The current figure is 17 of 142**, per the story-census disclosure above. **The numerator has never moved:** 17 stories meet the Definition of Done, before and after this correction, and no per-drop check's finding changes. What changed is the honesty of the fraction, and it changed once, here.

## 7. Gap log — all 119 open Must rows

Owners are the named requirement owners from Doc 02; phase targets are Doc 13 milestones.
**v1.1.0 update (2026-08-10):** FR-011 and FR-035 removed (now COMPLETE after DES-074/075 assigned);
12 new Must FR rows added for FR-062..073 (entries 53–64); G-TRACE secondary tags removed from 13
rows whose DES gaps are now closed by DES-073..086. NFR-007 retains G-TRACE (no story/backlog item
— not a DES gap).
**v2.2.0 update (2026-08-25):** Entries 73–77 (FR-082..086) reclassified from G-TRACE to G-PHASE3 — DES-093/094 now assigned (US-0132; TS-SCAFFOLD seam). Entries 114–118 added for FR-122, FR-123, FR-124, FR-131, FR-132 (all G-PHASE3; DES assigned; IS_INSECURE_MOCK=true; production pending Phase 3).
**v2.2.2 update (2026-08-25):** Entries 119–126 added — FR-121 (G-TRACE+G-PHASE3; no DES; pilot-jurisdiction sequence), FR-125 (G-TRACE+G-PHASE3; no DES; invite-gating), FR-126 (G-TRACE+G-PHASE3; no DES; on-device credential), FR-127 (G-TRACE+G-PHASE3; no DES; nullifier-collision-only duplicate detection), FR-128 (G-TRACE+G-PHASE3; no DES; no stored identity), FR-129 (G-TRACE+G-PHASE3; no DES; Charter-layer guard), FR-130 (G-TRACE+G-PHASE3; no DES; membership cap; US-0131 Not Ready pending DES), FR-133 (G-PHASE3; DES-099 assigned; no US or TC). Must FR count corrects from 106 to 114; open Must rows correct from 118 to 126.
**v2.8.0 update (2026-09-06):** **Entry 117 (FR-131) updated; NO entry is retired and NO entry is added.** The FR-131 honesty drop (Doc 06 v2.5.1, commit `0a5c542`; Doc 07 v2.5.0 TC-3564..TC-3569) closes FR-131’s **closing sentence** — the ban on "private" / "anonymous" / "receipt-free" / "secure" as descriptions of v1 voting — and guards it with three regression blocks. **The row stays OPEN and the reason it stays open is not a missing test:** the notice must appear wherever a vote is cast and on SCR-13/SCR-14, neither of which is built, and "the voter MUST acknowledge the notice to proceed" has **no acknowledge control at all** (Doc 06 §7 item 26(d)). Open Must rows **122 — unchanged**; G-PHASE3 **47 — unchanged**. Recorded as a pattern worth naming beside the v2.4.0 and v2.5.0 ones: **a shipped fix can be entirely correct, materially improve the product, and close no row** — the test for closure is whether every clause of the stated guarantee holds, not whether the drop was good work.

**v2.10.0 update (2026-09-06):** **Entry 117 (FR-131) updated; NO entry is retired, NO entry is added, and no gap code, owner, phase or count changes.** Doc 02 v2.17.0/v2.17.1 adds FR-131 **clause (e)** with acceptance criteria at §8 Scenarios 8 and 9, which makes the requirement **larger**, not closer to closing: the obligation count goes ten → **eleven** (the DES-096 seam half is still not one of them — the v2.9.0 correction stands); **Scenario 8** is guarded at eleven strings by UT-0869, UT-0887 and the new UT-0889 (TC-3535, TC-3564..TC-3567, TC-3570..TC-3574); **Scenario 9** — the population sweep over every surface in every language — is **Blocked at TC-3575** because the instrument it requires, **Doc 04 §0.5 S5, does not exist in the repository**. **The gap-log total stays 122 open Must rows.** A requirement growing a clause does not open a *new* row; it deepens an existing one, and entry 117 is where that is recorded.

**v2.11.0 update (2026-09-07):** **NO entry is retired, added or updated, and no gap code, owner, phase or count changes — the gap log is untouched at this version.** Stated explicitly rather than left to silence, because the version does move test-case figures and a reader is entitled to know the gap log was checked and found unaffected. The cycle-2 rework corrected a pin-note attribution (ISS-01), an `it` count (ISS-02) and a pin (ISS-03); **none of the three bears on a gap**. **The gap-log total stays 122 open Must rows**, entry **117 (FR-131)** stays live and unchanged, and the new **TC-3576** enters the matrix at the **§3.2 NFR-023** row — which is a `G-UI` **NFR** row and therefore is not in this Must-FR gap log at all.

**v2.13.0 update (2026-09-21) — the largest gap-log movement recorded, and it is stated rather than left to the changelog.** _(Added at **v2.14.0**, ISS-07: every prior touching version honours this convention — **v2.11.0** even records "NO entry is retired, added or updated … stated explicitly rather than left to inference" — and the version that retired three entries and rewrote six added no note at all. No figure was wrong; the register's own change record was silent about the largest change made to it.)_ **Heading: all 122 open Must rows → all 119.** **THREE entries RETIRED** (struck through in place, the entry-70/FR-130 precedent, never deleted): **17 (FR-036)**, **18 (FR-037)**, **76 (FR-085)** — each closed by Doc 03 v2.16.0 §10.13.14 plus Doc 06 v2.11.1, with every clause carrying its own passing test. **SIX entries REWRITTEN**, all six keeping their open status and changing their **reason**: **19 (FR-039)**, **56 (FR-065)**, **57 (FR-066)**, **58 (FR-067)** — all four **G-PHASE3 → G-NOMECH**, because they are no longer "not implemented in this drop" but "implemented, with a named clause that has no mechanism" — and **72 (FR-081)**, **84 (FR-093)**, both **G-TRACE → G-NOMECH**, their chain gaps closed by **DES-107** and **DES-108** without their rows closing. **NO entry is added, and no entry number is reused or renumbered.** **Net: 122 − 3 = 119.** **The pattern worth recording:** of the seven DES elements amended or minted for these nine rows, **two bought a reclassification rather than a closure** — which is the DES-101/FR-077 lesson from v2.4.0, repeated twice in one version.
**v2.5.1 update (2026-08-29):** **Entry 71 (FR-080) RETIRED** — the row closes. The v2.5.0 finding was acted on rather than filed: the engineer built the two-step consent event and the architect bound SCR-15/SCR-12, so both the rule-4 and rule-1 failures are gone. Open Must rows 123 → **122**; G-NOMECH 14 → **13**. Worth recording as a pattern: of the five G-NOMECH reclassifications this matrix has made, this is the first to be **fixed within the same day it was raised** — the finding was specific enough to act on, which is what a gap note is for.
**v2.5.0 update (2026-08-29):** The proposals & debate drop (Doc 06 v2.4.1) plus Doc 03 v2.9.1 DES-103..DES-106 pay down **five** G-TRACE chain gaps at once. **Entries 70 (FR-079) and 81 (FR-090) are RETIRED** — both rows close. **Entries 71 (FR-080), 82 (FR-091) and 83 (FR-092) are RECLASSIFIED G-TRACE → G-NOMECH, not closed** — each gained its DES but each has a clause of its guarantee with no implementation. Open Must rows fall 125 → 123; G-TRACE 39 → 34; G-NOMECH 11 → 14. The pattern from v2.4.0 repeats and is worth naming: **a DES pays a chain gap; whether the row then closes depends on whether the tests cover the whole guarantee.** Five DES elements, two closures.
**v2.4.0 update (2026-08-29):** Doc 03 **v2.8.1 Approved** pays down two long-standing DES gaps. **Entry 125 (FR-130) is RETIRED** — DES-102 closes the chain and the row completes; open Must rows fall 126 → 125 and G-TRACE falls 41 → 39. **Entry 68 (FR-077) is RECLASSIFIED G-TRACE → G-NOMECH, not closed** — DES-101 closes its chain gap, but applying completion rule 4 surfaced that FR-077's amendment-refusal clause has no mechanism at either tier; the row stays open for a *different* reason than before, and the architect owes amendment-time verification design. **DES-097(b) closes nothing** — it specifies the production store that FR-010 and several other rows wait on, but a written design is not a running store and no status improved on its strength. Net: one row closes, one row changes reason, none regresses.
**v2.3.0 update (2026-08-29):** Entries 55 (FR-064), 114 (FR-122), 115 (FR-123), 117 (FR-131) and 125 (FR-130) updated to record the join/membership drop (Doc 06 v2.3.2 Approved; TC-3517..TC-3540). **No gap entry is removed and no Must row closes** — every one of these five rows stays OPEN for the reason it was already open (unbuilt DES/Phase-3 mechanism, or an unassigned DES), and FR-064 acquires a second, independent blocker: the `FR-064-SEMANTICS` product-owner ruling. Entry 55’s owner column now names the product-owner alongside the architect, because the semantics half of that gap cannot be closed by design work.
**v2.2.4 update (2026-08-25):** Entries 9, 11, 68, 125 updated to reflect party-creation drop (Doc 06 v2.2.0 Approved): FR-010 — logic now implemented (partial: G-NOMECH note updated); FR-018 — threshold-gate tested, dwell period still absent; FR-077 — code exists, G-PHASE3 removed, G-TRACE retained; FR-130 — code exists, G-PHASE3 removed, G-TRACE retained. No gap entries removed (Must rows stay OPEN). FR-013 Should row closed — no gap entry (was non-Must open, not in this log).
Gap-log entry numbers are internal sequence only; no externally referenced ID (FR, NFR, BR, US, TC) was renumbered. Prior references to old entry numbers should be resolved by FR/NFR ID, not by entry number.

| # | Row | Reason | Blocking cause (one line) | Owner | Closes at |
|---|---|---|---|---|---|
| 1 | FR-001 | G-CIRCUIT | Mock verifier; ADR-003 cross-identifier-type residual permits a second enrolment | Marcus Adeyemi | MS-08 + ADR-003 decision |
| 2 | FR-002 | G-UNMEASURABLE | "Better than chance" not falsifiable (OPEN-08); needs an adversary game with ε | Dr. Lena Kowalczyk | Requirement restatement |
| 3 | FR-003 | G-NOENV | No data-inventory scanner; the US-0002 build-failing check is unimplemented | Dr. Lena Kowalczyk | Phase 2 |
| 4 | FR-004 | G-NOMECH | **OPEN-02** — no per-region attestor share cap exists | Marcus Adeyemi | Design fix, then Phase 2 |
| 5 | FR-006 | G-CIRCUIT | `residency_member` uncompiled | Marcus Adeyemi | MS-08 |
| 6 | FR-007 | G-NOENV | No case exercises a closed contest across a registry version bump | Yuki Sato | Phase 2 |
| 7 | FR-008 | G-NOMECH | No residency-change function, no 180-day cooldown | Marcus Adeyemi | Design fix |
| 8 | FR-009 | G-NOMECH | **OPEN-12** — `submitPopulation` is `onlyTimelock`; independence unenforceable | Yuki Sato | Design fix |
| 9 | FR-010 | G-NOMECH (partial) | Collision/emblem/jurisdiction logic NOW implemented (IS_INSECURE_MOCK=true; TC-3489..TC-3493, TC-3515; UT evidence pass inh., Doc 06 v2.2.0); production-persistent store pending DES-097 wiring; Must row does not close | Tomás Ferreira | Design fix (DES-097 wiring) |
| 10 | FR-014 | G-CIRCUIT | Resident-only enforcement rests on the mocked residency proof | Tomás Ferreira | MS-08 |
| 11 | FR-018 | G-NOMECH | Threshold-gate logic tested (TC-3504..TC-3506; UT-0814..0816 pass inh., Doc 06 v2.2.0); **dwell period still not implemented** (OI-08 unset) — the "met and *sustained*" guarantee and its negative AC cannot hold | Tomás Ferreira | Design fix (implement dwell period) |
| 12 | FR-023 | G-NOMECH | No join/leave churn rate limit | Rafael Duarte | Design fix |
| 13 | FR-030 | G-PHASE3 | MACI not implemented | Dr. Lena Kowalczyk | Phase 3 |
| 14 | FR-031 | G-PHASE3 | **OPEN-01** — receipt-freeness needs MACI | Aisha Nkemdirim | Phase 3 |
| 15 | FR-032 | G-PHASE3 | **OPEN-01** — invisible override needs MACI | Aisha Nkemdirim | Phase 3 |
| 16 | FR-033 | G-PHASE3 | Phase-1 tallies expose individual votes; no verifier app | Erik Lindqvist | Phase 3 |
| ~~17~~ | ~~FR-036~~ | ~~G-PHASE3~~ | **CLOSED v2.13.0 — entry retired.** DES-027 as amended (Doc 03 v2.16.0 §10.13.14) makes the SDK conventional backing the Definition-A design, and every clause has its own passing test: self-only by construction (UT-0896), region containment proved in both directions with a throwing failure mode (UT-0894, UT-0896), maturation before the seam (UT-0894, UT-0896), a published endorsement minimum — **returned on every endorsement (TC-3602 · UT-0896)** and **GATING the candidacy (TC-3606 · UT-0898, `ENDORSEMENTS_SHORT`)** — and **withdrawal at any time before the lock (TC-3605 · UT-0897)** _(v2.14.0, ISS-02: this entry already leaned on UT-0897 and UT-0898 while the §3.1 row cited neither them nor the cases carrying them; the **cases** are named here now, so the entry and the row say the same thing)_, and an honest surface (UT-0905). All four completion rules hold — see §3.1. **Recorded residuals, disclosed:** v1 residency is **self-declared** and the surface says so, and the ratified value **5** is not pinned by a test (the constant is asserted non-zero). **This row must be revisited when attested residency lands** | ~~Aisha Nkemdirim~~ Closed | ~~Phase 3~~ Closed |
| ~~18~~ | ~~FR-037~~ | ~~G-PHASE3~~ | **CLOSED v2.13.0 — entry retired.** DES-028 as amended carries the consent record and the one-way door. Consent is separate, explicit, literal-`true`-only, recorded once, verifier-free and bound to the candidate alone (UT-0895, UT-0897), stated before the confirm control in asserted document order (UT-0904); and **nobody who has not consented is named on any read or trail event** — the name enters at `CONSENT_RECORDED`, endorsers, feedback casters and post-debate voters never (UT-0897, UT-0900, UT-0901). The "under any circumstance" clause closes because **the candidacy disclosure holding is v1's only holding of real-world identity** — `/verify` is flag-gated off above dev and verify-and-discard is unbuilt. **This row must be revisited when the FR-132 identity layer is built** | ~~Dr. Lena Kowalczyk~~ Closed | ~~Phase 3~~ Closed |
| 19 | FR-039 | **G-NOMECH** _(was G-PHASE3; reclassified v2.13.0)_ | **The office ballot has no mechanism.** DES-076 as amended (Doc 03 v2.16.0 §10.13.14) builds and proves rule 1 — an ordered, jurisdiction-checked timetable published at `openElection` with **no update method at all**, and `lockBallot` freezing the candidate set (UT-0901, TC-3611). **Rule 2 is designed and unbuilt:** (a) the office ballot's **voter-scope guard** through DES-096, and (b) a **tie-break rule fixed at open** — there is no tie-break field in the election record. FR-039's first Gherkin scenario ("a member resident outside R attempts to vote") therefore has no product to execute against. No longer a Phase-3/Elections-contract wait: the v1 design exists and the build is owed in Doc 03 §13 | **Engineer** (build); Ravi Deshmukh (design, written) | Owed v1 build |
| 20 | FR-040 | G-PHASE3 | Elections not implemented | Aisha Nkemdirim | Phase 3 |
| 21 | FR-042 | G-PHASE3 | Recall not implemented | Aisha Nkemdirim | Phase 3 |
| 22 | FR-043 | G-PHASE3 | Recall not implemented | Aisha Nkemdirim | Phase 3 |
| 23 | FR-045 | G-PHASE3 | Recall not implemented | Aisha Nkemdirim | Phase 3 |
| 24 | FR-047 | G-NOENV | Charter-version retrievability and the diff view are untested/unbuilt | Erik Lindqvist | Phase 2 |
| 25 | FR-054 | G-NOENV | "Every action" unverifiable while five action types do not exist; no event-schema assertion | Erik Lindqvist | Phase 3 |
| 26 | FR-056 | G-NOMECH | Display-filtering register does not exist (DES-077 assigned in v1.1.0, G-TRACE closed) | Daniel Okonkwo | Design fix |
| 27 | FR-058 | G-PHASE3 | Social recovery / 4337 path not implemented | Amara Diallo | Phase 3 |
| 28 | FR-059 | G-PHASE3 | Recovery not implemented | Dr. Lena Kowalczyk | Phase 3 |
| 29 | FR-060 | G-UI | No jargon scanner, no deployed journey (DES-040 Satisfies extended in v1.1.0, G-TRACE closed) | Hiroshi Tanaka | Phase 3 |
| 30 | FR-061 | G-PHASE3 | Paymaster/relayer not built | Hiroshi Tanaka | Phase 3 |
| 31 | NFR-001 | G-UNMEASURABLE | **OPEN-13** — collusion bound (`OI-10`) unset | Dr. Lena Kowalczyk | Product decision |
| 32 | NFR-002 | G-UNMEASURABLE | **OPEN-10 / OI-05** — publication vs eligibility escalation undecided | Dr. Lena Kowalczyk | Product decision |
| 33 | NFR-003 | G-PHASE3 | **OPEN-01** — MACI + formal argument + adversarial audit | Aisha Nkemdirim | Phase 3 |
| 34 | NFR-004 | G-UNMEASURABLE | **OPEN-14** — duplicate rate is **not internally measurable by design**; needs a consented out-of-band audited sample. Plus **OPEN-02** | Marcus Adeyemi | Out-of-band instrument + design fix |
| 35 | NFR-005 | G-NOENV | **OPEN-15** — no price instrument, no enumerated action set | Hiroshi Tanaka | Phase 2 testnet |
| 36 | NFR-006 | G-NOENV | No reference-device harness (DES-078 assigned in v1.1.0, G-TRACE closed) | Hiroshi Tanaka | Phase 2 (NF-05) |
| 37 | NFR-007 | G-NOENV + G-TRACE | **No story and no backlog item implements it**; no environment | Chen Wei | Immediate (backlog) + Phase 3 |
| 38 | NFR-009 | G-EXTERNAL | Audits not reported (DES-079 assigned in v1.1.0, G-TRACE closed) | Rafael Duarte | MS-09 / MS-10 |
| 39 | NFR-010 | G-NOENV | Data-inventory scanners not built (DES-080 assigned in v1.1.0, G-TRACE closed) | Dr. Lena Kowalczyk | Phase 2 |
| 40 | NFR-011 | G-UI | No a11y gate; no manual screen-reader pass (DES-081 assigned in v1.1.0, G-TRACE closed) | Nadia Hassan | Phase 3 |
| 41 | NFR-012 | G-UI | No device lab; offline drafting unimplemented (DES-082 assigned in v1.1.0, G-TRACE closed) | Nadia Hassan | Phase 3 |
| 42 | NFR-013 | G-UI | No locales, no coverage gate (DES-083 assigned in v1.1.0, G-TRACE closed) | Nadia Hassan | Phase 3 |
| 43 | NFR-014 | G-NOENV | No isolated network lab (NF-06) | Chen Wei | Phase 2 |
| 44 | NFR-015 | G-EXTERNAL | Legal review per jurisdiction; pilots unnamed (`OI-04`) (DES-084 assigned in v1.1.0, G-TRACE closed) | Sofia Marchetti | Before launch |
| 45 | NFR-016 | G-PHASE3 | Recovery not implemented | Amara Diallo | Phase 3 |
| 46 | NFR-017 | G-EXTERNAL | "0 unilateral paths at audit" needs the audit; TC-1613/TC-2523 unwritten | Rafael Duarte | MS-09 |
| 47 | NFR-020 | G-NOMECH | **OPEN-03** — no open-ballot flag freeze; rollback drill never run | Chen Wei | Design fix + NF-07 |
| 48 | NFR-021 | G-EXTERNAL | Reproducibility not verified by an independent party | Rafael Duarte | Phase 2 |
| 49 | NFR-022 | G-EXTERNAL | No moderated usability study | Grace Mbeki | Phase 3 |
| 50 | NFR-023 | G-UI | No jargon or readability check (DES-085 assigned in v1.1.0, G-TRACE closed) | Nadia Hassan | Phase 3 |
| 51 | NFR-024 | G-PHASE3 | Nomination/recall surfaces do not exist (DES-086 assigned in v1.1.0, G-TRACE closed) | Daniel Okonkwo | Phase 3 |
| 52 | NFR-025 | G-NOMECH | **OPEN-11** — 60 min vs ADR-001's 12–24 h is irreconcilable as written | Chen Wei | Requirement or design restatement |
| 53 | FR-062 | G-NOMECH | OI-13 unresolved; participation_profile flag off above dev until Gate 1 re-affirmation (DES-064 designed) | Erik Lindqvist | Gate 1 re-affirmation + design fix |
| 54 | FR-063 | G-UI | Ballot-direction audit requires deployed client system; UT-0700/UT-0701 exist but apps/web suite not run | Dr. Lena Kowalczyk | Phase 3 |
| 55 | FR-064 | G-PHASE3 | **SPLIT (v2.3.1) — semantics RESOLVED, design OPEN; not a close.** App-side one-active-party implemented and tested in the EXPLICIT-LEAVE form (TC-3523..TC-3525; UT-0821/0822 sdk, UT-0859 web; Doc 06 v2.3.2/v2.3.3). **(i) Semantics — RESOLVED** by the `FR-064-SEMANTICS` ruling (option (a) EXPLICIT-LEAVE; Rathish, 2026-08-29; Doc 02 v2.15.0 §4.6 Approved; Doc 06 v2.3.3 §7 #20 closed RESOLVED (a)) — the requirement text now matches the built refuse-until-leave behaviour; auto-void deferred to DES-065 at the v2 seam swap. **(ii) Design — OPEN:** DES-065 membership-scope nullifier is a v2/Phase-3 chain mechanism, unbuilt. The Must row stays OPEN | Rafael Duarte (design) | DES-065: Phase 3 |
| 56 | FR-065 | **G-NOMECH** _(was G-PHASE3; reclassified v2.13.0)_ | **Built and proved for three clauses; two have no mechanism.** DES-066 as amended gives +3/−1 exactly (UT-0893), a second vote **REFUSED not overwritten** with self/open-tier/fresh each refused by code (UT-0900), and aggregate-only publication with **no read returning a caster** (UT-0900). **Open clause 1 — "enforced by the same nullifier mechanism as scope-action limits":** v1 uses a store-local `hasGivenFeedback`/`recordFeedback` check-then-write against `ICandidateStore`, **not** DES-095's `isUniqueInScope`; Doc 03 DES-066 rule 2 records the DIVERGENCE and specifies the owed Postgres UNIQUE constraint and the convergent form, neither built. **Open clause 2 — "unlinkable to their caster":** the operator database can see the direction of an individual vote; the surface discloses it (FR-131(b), UT-0906) and Doc 03 declines to claim unlinkability for v1. **Also owed:** that disclosure must render **before** the feedback controls with a document-order assertion (Doc 03 §13). **Doc 02 §16.3.1's FR-065 row under-records this gap — `TD-RTM-05`, §10** | **Engineer** (both clauses' v1 half); product-owner (`TD-RTM-05`) | Owed v1 build + v2 nullifier |
| 57 | FR-066 | **G-NOMECH** _(was G-PHASE3; reclassified v2.13.0)_ | **The debate lifecycle is built and proved; the record is not yet verifiable.** Three topics keyed by `REQUIRED_DEBATE_TOPICS`, scheduling after consent and the endorsement minimum, `debatesComplete()` naming the missing topics, boolean-only attestation with `contentRef`, a visible blocking absence, and unheld-is-not-absent (UT-0892, UT-0898). **Open clause — "recorded on the verifiable record":** the v1 trail is application-held and not independently checkable until the **DES-097 audit-record anchoring**, Doc 13 stage **S-8**, which is unbuilt (Doc 03 DES-067 rule 7). The same clause keeps FR-092 open | Ravi Deshmukh (DES-097 S-8 mapping); **engineer** (build) | Owed — S-8 anchoring |
| 58 | FR-067 | **G-NOMECH** _(was G-PHASE3; reclassified v2.13.0)_ | **Every clause but one is proved; the row is open on two words.** Candidacy from a **strictly** net-positive tally read through `IBallotService` alone, with the service storing no ballot (structurally asserted); PUBLISHED reachable only from VOTE_OPEN; incumbency proved to confer nothing by spy **through `closePostDebateVote()`** plus capability absence; the candidate set empty until a net-positive close (UT-0891, UT-0893, UT-0899, UT-0901, UT-0906). **Open clause — §8's "the attempt is refused AND LOGGED":** refusal is discharged by construction (no ballot-inclusion call exists; every out-of-order edge throws `ILLEGAL_TRANSITION`), but **v1 appends no trail event for a refused attempt** (Doc 03 DES-067 rule 6). A capability-absence argument discharges a prohibition; it cannot discharge a positive obligation to produce a record. **Small, named, and owed:** append a refusal event, then the `TC` (`TC-3322`) | **Engineer** (Doc 03 §13) | Owed — small v1 touch |
| 59 | FR-068 | G-PHASE3 | Tenure-waiver flag (DES-068) not implemented; depends on FR-064 party membership | Rafael Duarte | Phase 3 |
| 60 | FR-069 | G-CIRCUIT | In-circuit enrolment nullifier (DES-069, ADR-017); personhood_enrol circuit not compiled | Marcus Adeyemi | Phase 2 ceremonies |
| 61 | FR-070 | G-CIRCUIT | Credential adapter interface (DES-070, ADR-017); circuits + adapter infrastructure not deployed | Marcus Adeyemi | Phase 2 ceremonies |
| 62 | FR-071 | G-PHASE3 | Nullifier-collision recovery state machine (DES-071, ADR-018) not implemented | Amara Diallo | Phase 3 |
| 63 | FR-072 | G-PHASE3 | Recovery 7-day delay and active-key veto guard (DES-071, ADR-018) not implemented | Rafael Duarte | Phase 3 |
| 64 | FR-073 | G-PHASE3 | Government-eID class enforcement (DES-072, ADR-016) not deployed to PersonhoodRegistry | Marcus Adeyemi | Phase 3 |
**v2.0.0 update (2026-08-11):** 49 new Must rows added — FR-074..FR-111 (38 entries, G-TRACE: no DES assigned, Doc 03 §16 next-increment scope); FR-112..FR-120 (9 entries, G-PHASE3: DES assigned but not deployed); NFR-027/028 (2 entries, G-PHASE3). Total open Must rows: 113.
| 65 | FR-074 | G-TRACE | No DES assigned — Doc 03 §16 next-increment scope; country-selection eligibility rule not designed | Marcus Adeyemi | Design next increment |
| 66 | FR-075 | G-TRACE | No DES assigned — Doc 03 §16; platform-vs-legal-registration distinction not designed | Sofia Marchetti | Design next increment |
| 67 | FR-076 | G-TRACE | No DES assigned — Doc 03 §16; party founding mandatory-sections checker not designed | Tomas Ferreira | Design next increment |
| 68 | FR-077 | **G-NOMECH** _(was G-TRACE — reclassified v2.4.0)_ | **Chain gap CLOSED** — DES-101 (Doc 03 v2.8.1 §10.13.10) assigned, SCR-04/SCR-05 bound; the **publication** half is implemented and passing at protocol + sdk + web (TC-3508..TC-3510, corrected in Doc 07 v2.3.1; UT-0071..0075, UT-0786, UT-0849..0851). **New blocker, found by the tester at v2.4.0:** FR-077 also requires refusal at "**every subsequent amendment**", and **nothing implements that at either tier** — no application charter-amendment path exists (`validateDraft` runs only at `createDraft`/`publishDraft`), and on-chain `Party.amendCharter` overwrites `charter.charterHash`/`charterCID` after checking only `immutableClause[clauseId]`, never seeing the charter text. A constitutional-tier amendment naming any other clauseId can install a charter with the clause stripped. Rule 4 fails on a fragment-vs-whole basis; the row stays OPEN. **v2.4.1: amendment-time verification is now DESIGNED** — Doc 03 v2.8.3 §10.13.10.1 (clause-map charter; platform-immutable non-violence `clauseId`; amendments carry their text). Independently reproduced by reviewer-qa against `Party.sol`. Build governed by **`PREREQ-01`** — an approver-ruled **blocking prerequisite** to the on-chain governance increment (Rathish, 2026-08-29), with rule 6's adversarial amendment test (**TC-3541**, Doc 07 v2.3.2) as closing evidence. **The row is unchanged: designed ≠ built.** PREREQ-01 fixes WHEN, not whether. Not exploitable in v1 (no on-chain governance, ADR-024 §(b)) — no v1 work blocked | Daniel Okonkwo (requirement) · **engineer (`PREREQ-01` build)** | **`PREREQ-01`** — before the on-chain governance increment ships |
| 69 | FR-078 | G-TRACE | No DES assigned — Doc 03 §16; constitution versioning + entrenchment mechanics not designed | Tomas Ferreira | Design next increment |
| ~~70~~ | ~~FR-079~~ | ~~G-TRACE~~ | **CLOSED v2.5.0 — entry retired.** DES-103 (Doc 03 v2.9.1 §10.13.13) supplied the missing design link; all four rules hold and the FR-079 Must row is **COMPLETE** (see §3.1). Exactly three tiers with no nameable fourth; automatic Supporter assignment on join; `votingWeightForTier()` returns 1 for every tier so no configuration can differentiate weight; unknown tier refused loudly (UT-0087, UT-0088) | ~~Grace Mbeki~~ Closed | ~~Design next increment~~ Closed |

| ~~71~~ | ~~FR-080~~ | ~~G-NOMECH~~ | **CLOSED v2.5.1 — entry retired.** Both v2.5.0 failures fixed at the root: DES-103 (Doc 03 v2.9.2) binds **SCR-15 + SCR-12**, closing the rule-1 gap; and the declaration is now a **two-step informed-consent event** stating permanence and the participation record **before** confirmation, with the filing form unreachable at that moment (UT-0885) and declining recording nothing (UT-0886). Verified by the tester in the component: `declare-worker` sets consent-pending only; the sole call to `onDeclareWorker` is `confirm-worker`. ~~Residual routed to the architect: Doc 03 §10.12.5 class (i)'s entry for 3.6 is now partly stale~~ **RESIDUAL DISCHARGED — the architect closed it at Doc 03 v2.9.3:** §10.12.5's 3.6 entry is marked CLOSED (DES-103 + SCR-15) and the contradicting Wireframe→SCR 3.6 row was aligned in the same version | ~~Grace Mbeki~~ Closed | ~~Design fix required first~~ Closed |
| 72 | FR-081 | **G-NOMECH** _(was G-TRACE; the chain gap is CLOSED at v2.13.0 by **DES-107**, Doc 03 v2.16.0 §10.13.14 — the row is reclassified, not closed)_ | **Four clauses of five are proved. The fifth has no field, no read and no assertion.** Self-nomination by capability absence, eligibility by named constants and refusal codes, decision by the tally alone, **no approve/reject/rank capability at either layer on the path**, and append-only transitions with exactly one delete — the confidential-class carve-out — all asserted (UT-0891, UT-0894, UT-0896, UT-0897, UT-0899, UT-0901). **Open clause — "every tier transition MUST be recorded append-only WITH ITS STATE (active/inactive)":** Doc 03 DES-107 rule 4 states that no active/inactive field exists, no read exposes one and no UT asserts the published stage→state mapping, records the architect's **view** that derivation satisfies the clause, and leaves the ruling to the tester. **Ruled NOT satisfied:** completion rules 2 and 3 require a passing implementing test for the clause, and a mapping published in a design document is not one — nothing in code enforces it, and the same document was already found miscounting its own enum. **This is the smallest open clause in the matrix: one field, or one `it`, closes it.** **Second residual, disclosed:** the **store's** prototype is not scanned for approve/reject/rank (DES-107 ISS-08); the clause names "the path" and both layers on it are scanned, but the row must be re-derived if the DES-097(b) backing exposes such a member | **Engineer** (one field or one `it`, plus the store scan); tester (the `TC`) | Owed — smallest open clause |
| 73 | FR-082 | G-PHASE3 | DES-093/094 assigned (v2.2.0) — UI display layer designed; US-0092/US-0132 present; TC-3470/TC-3474 pass; full storage/enforcement/linkage-prevention not yet designed or implemented | Dr. Lena Kowalczyk | Design + Phase 3 |
| 74 | FR-083 | G-PHASE3 | DES-093/094 assigned (v2.2.0) — UI display layer designed; US-0093/US-0132 present; TC-3471/TC-3474 pass; participation-record data model and ballot-direction enforcement not yet designed | Erik Lindqvist | Design + Phase 3 |
| 75 | FR-084 | G-PHASE3 | DES-093/094 assigned (v2.2.0) — UI display layer designed; US-0094/US-0132 present; TC-3472/TC-3474 pass; disclosure-schedule publication and enforcement not yet designed | Dr. Lena Kowalczyk | Design + Phase 3 |
| ~~76~~ | ~~FR-085~~ | ~~G-PHASE3~~ | **CLOSED v2.13.0 — entry retired.** This entry read "consent lifecycle and data-destruction mechanics not yet designed"; **DES-028 rule 6** (Doc 03 v2.16.0 §10.13.14) designs them and Doc 06 v2.11.1 builds them — DES-093/094 were always the display layer only. Every clause has its own passing test: `irreversibleForTerm` must be the literal `true` (UT-0895) and is stated before the confirm control in asserted document order (UT-0904); **no revocation method exists for a term in progress** and disclosures **stand** after the window closes (UT-0897); withdrawal **before** the window calls `destroyDisclosures`, the store's **only** delete, and the trail records the destruction **without ever having contained the data** (UT-0897, UT-0904). The OI-16 carve-out holds in both directions and **no public governance record is destroyed** (FR-107 unbroken). **`TC-3476` was REMOVED from this row** — it is an FR-131 clause-8 **enrolment**-screen case, not a candidacy-consent case; it keeps its FR-131 home and its Blocked status, and **the row closes with or without it** | ~~Sofia Marchetti~~ Closed | ~~Design + Phase 3~~ Closed |
| 77 | FR-086 | G-PHASE3 | DES-093/094 assigned (v2.2.0) — UI display layer designed; US-0096/US-0132 present; TC-3474 passes; cross-tier unlinkability guarantee for role-changers not yet designed | Dr. Lena Kowalczyk | Design + Phase 3 |
| 78 | FR-087 | G-TRACE | No DES assigned — Doc 03 §16; committee formation + minute publication not designed | Tomas Ferreira | Design next increment |
| 79 | FR-088 | G-TRACE | No DES assigned — Doc 03 §16; committee capability boundary enforcement not designed | Rafael Duarte | Design next increment |
| 80 | FR-089 | G-TRACE | No DES assigned — Doc 03 §16; committee mechanical term expiry not designed | Rafael Duarte | Design next increment |
| ~~81~~ | ~~FR-090~~ | ~~G-TRACE~~ | **CLOSED v2.5.0 — entry retired.** DES-104 + SCR-12 closed the chain; every clause tested — public authorship (UT-0832, UT-0875); any Worker-or-above may compete (UT-0089, UT-0833); equal standing proven positively and as capability-absence (UT-0835..0837, UT-0874..0877); one decision window even for differently-phrased questions (UT-0095); entry closes when voting starts (UT-0838). ~~**Revisit if** the approver rules PROPOSING an FR-123 counting action (Doc 03 §10.13.13 open question (b))~~ **REVISIT CONDITION DISCHARGED v2.5.4 — it never triggered.** RULED 2026-08-30 (Rathish, Human Approver; DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md §1): PROPOSING is **NOT** an FR-123 counting action, because gating authorship on verification status is a participation restriction FR-020 prohibits. The closure above stands unrevisited | ~~Tomas Ferreira~~ Closed | ~~Design next increment~~ Closed |

| 82 | FR-091 | **G-NOMECH** _(was G-TRACE — reclassified v2.5.0)_ | **Chain gap CLOSED** by DES-105 + SCR-12; the **order** guarantees are complete — eight stages one step at a time, skip/reverse/no-op/unknown all refused, capability-absence at all three layers, deliberative stages produce records never outcomes (UT-0090..0094, UT-0839..0842, UT-0878..0880). **Rule 4 fails on the timeline clause:** transitions must be "executed by code per published timelines"; `governance.js` `schedule()` is **not wired** into the service and the demo advances by a button (Doc 06 §7 #25). The anti-capture half is done; the automation half is not. ~~**Also open:** the eight FR-091 stages are a different taxonomy from ADR-008 `PROPOSAL_STATE` (Doc 03 §10.13.13 open question (a)) — reconciliation owed~~ **TAXONOMY ITEM CLOSED v2.5.4 — no reconciliation was owed.** RULED 2026-08-30 (Doc 03 v2.10.0 §10.13.13(a)): the two are **complementary, each canonical at its own layer** (different subjects — a decision window vs one proposal's ballot, one-to-many at resolution), so there was never a choice to make between them. The published stage set is unchanged; the architect's reconciliation ownership is discharged. A derivation obligation is recorded in Doc 03 §10.13.13(a) and it binds **BOTH versions** — the **ballot layer** owns ballot state (DES-096 database backing in v1, `Governor.State` at the v2 seam) and the `VOTE`/`DECISION`/`IMPLEMENTATION` stages MUST derive from it. A **build obligation, not a v1 gap today**, because the proposals layer derives nothing. _(v2.6.1: this read "a v2-seam derivation obligation … at the v2 swap", the scope Doc 03 corrected at v2.11.0.)_ **This entry's ONE remaining gap is the timeline clause above.** **Separately tracked, not a gap in this row:** Doc 02 §13 **(h)** / Doc 03 §16 **Q15** — FR-091's *text* does not say what becomes of a DEFEATED or CANCELLED decision (it **should** terminate at `DECISION`; terminating is not skipping — but **nothing enforces this today**: Doc 03 records that `advanceStage()` consults no outcome and would advance a defeated window straight to `IMPLEMENTATION`, so the termination is a **design intention, not built behaviour**). _(v2.6.1: this entry stated the termination as fact, contradicting the warning box in the SDD version it pins. v2.7.0: that correction opened a parenthesis it never closed.)_ That is a **requirement clarification owed to the product-owner**, raised 2026-08-30, and it does **not** affect this row's status: the proposals layer holds no vote, so no window can be defeated, and no test can close or fail on it today. It is named here so this entry is not read as claiming FR-091 has no other open item of any kind | **Priya Raghunathan (PO)** — requirement text, **Q15** · **Samuel Oyelaran (engineer)** — timeline wiring, the row's only gap | Design fix + build |
| 83 | FR-092 | **G-NOMECH** _(was G-TRACE — reclassified v2.5.0)_ | **Chain gap CLOSED** by DES-106 + SCR-12; the trail is genuinely **append-only** — ordered, un-rewritable, no delete path, copies on read, injected clock (UT-0846..0848). **Rule 4 fails twice.** (i) **Incomplete against its own enumeration:** FR-092 names the vote result, enacted consequence, implementation status and measured outcome; this layer records none — TC-3558/UT-0845 asserts the service never casts, stores or counts a vote, which is correct design and leaves four of seven elements unrecorded. (ii) **Third-party reconstruction unbuilt:** needs DES-097 audit anchoring (Doc 06 §7 #24; Doc 13 stage S-8). The surface states this honestly (`trail-v1-note`, UT-0883) rather than implying auditability | Erik Lindqvist (requirement) · **engineer (trail completion)** · **sre/architect (DES-097 anchoring, S-8)** | Design fix + build |
| 84 | FR-093 | **G-NOMECH** _(was G-TRACE; the chain gap is CLOSED at v2.13.0 by **DES-108**, Doc 03 v2.16.0 §10.13.14 — the row is reclassified, not closed)_ | **The schedule has a design and most of a build; two of its five phases do not exist.** Built and proved: the schedule **is** the election record, published at `openElection`, immutable because the service exposes **no update method** (UT-0901, TC-3611); the nomination window, the debates, the post-debate vote and the ballot lock are built. **Open clause (a) — the question phase:** `askQuestion` / `recordAnswer` / `closeQuestionPhase` are designed in DES-108 rule 3(a) and **not built**, so "questions and answers MUST be placed on the public record" and "**unanswered questions MUST be visibly recorded as unanswered**" have no product to execute against (`TC-3419`, Blocked). **Open clause (b) — the election:** the office ballot is DES-076 rule 2, the same unbuilt guard that keeps FR-039 open. **Related product question, recorded not absorbed:** FR-093's Gherkin says the phase durations were "set at OI-17 closure"; §10.11 closed OI-17 without them and no floor is published — Doc 03 §16 **Q18**, product-owner. It does not by itself hold this row open, but **the row must be re-derived if a floor is ruled in** | **Engineer** (a and b); Aisha Nkemdirim (Q18) | Owed v1 build |
| 85 | FR-094 | G-TRACE | No DES assigned — Doc 03 §16; manifesto structured-commitment schema not designed | Erik Lindqvist | Design next increment |
| 86 | FR-095 | G-TRACE | No DES assigned — Doc 03 §16; per-commitment ID + append-only status not designed | Erik Lindqvist | Design next increment |
| 87 | FR-096 | G-TRACE | No DES assigned — Doc 03 §16; treasury anomaly-detection rule engine not designed | Erik Lindqvist | Design next increment |
| 88 | FR-097 | G-TRACE | No DES assigned — Doc 03 §16; COI disclosure filing + overdue flag not designed | Ingrid Bergqvist | Design next increment |
| 89 | FR-098 | G-TRACE | No DES assigned — Doc 03 §16; COI review recommendation-only enforcement not designed | Ingrid Bergqvist | Design next increment |
| 90 | FR-099 | G-TRACE | No DES assigned — Doc 03 §16; independent audit function (sortition, read-only access) not designed | Ingrid Bergqvist | Design next increment |
| 91 | FR-100 | G-TRACE | No DES assigned — Doc 03 §16; dispute stage timeline enforcement not designed | Ingrid Bergqvist | Design next increment |
| 92 | FR-101 | G-TRACE | No DES assigned — Doc 03 §16; per-case sortition panel selection proof not designed | Rafael Duarte | Design next increment |
| 93 | FR-102 | G-TRACE | No DES assigned — Doc 03 §16; machine-readable member-rights charter + floor enforcement not designed | Grace Mbeki | Design next increment |
| 94 | FR-103 | G-TRACE | No DES assigned — Doc 03 §16; conduct-vote mechanics (nullifier + Supporter impossibility) not designed | Daniel Okonkwo | Design next increment |
| 95 | FR-104 | G-TRACE | No DES assigned — Doc 03 §16; removal affirmative-quorum + surge-defence mechanics not designed | Daniel Okonkwo | Design next increment |
| 96 | FR-105 | G-TRACE | No DES assigned — Doc 03 §16; expulsion higher-bar + public-tier-only restriction not designed | Daniel Okonkwo | Design next increment |
| 97 | FR-106 | G-TRACE | No DES assigned — Doc 03 §16; three-class data classification assignment enforcement not designed | Dr. Lena Kowalczyk | Design next increment |
| 98 | FR-107 | G-TRACE | No DES assigned — Doc 03 §16; append-only state-transition lifecycle not designed (FR-085 carve-out pending too) | Erik Lindqvist | Design next increment |
| 99 | FR-108 | G-TRACE | No DES assigned — Doc 03 §16; public-chain proofs-only discipline not designed | Rafael Duarte | Design next increment |
| 100 | FR-109 | G-TRACE | No DES assigned — Doc 03 §16; transparency dashboard (aggregate-only, no drill-down) not designed | Yuki Sato | Design next increment |
| 101 | FR-110 | G-TRACE | No DES assigned — Doc 03 §16; factual performance scorecard (no ranking, no editorial) not designed | Yuki Sato | Design next increment |
| 102 | FR-111 | G-TRACE | No DES assigned — Doc 03 §16; behavioural-analytics prohibition enforcement not designed | Dr. Lena Kowalczyk | Design next increment |
| 103 | FR-112 | G-PHASE3 | TrustAnchorLifecycle (DES-090) designed — ProtocolGovernance/emergency-revocation path not deployed | Rafael Duarte | Phase 3 |
| 104 | FR-113 | G-PHASE3 | TrustAnchorLifecycle (DES-090) designed — legitimate rotation governance path not deployed | Rafael Duarte | Phase 3 |
| 105 | FR-114 | G-PHASE3 | StewardRegistry (DES-088) designed — steward election + recall contract not deployed | Aisha Nkemdirim | Phase 3 |
| 106 | FR-115 | G-PHASE3 | StewardPowers (DES-089) designed — enumerated-capability enforcement not deployed | Rafael Duarte | Phase 3 |
| 107 | FR-116 | G-PHASE3 | StewardPowers (DES-089) designed — veto-prohibition + competing-proposal parity not deployed | Rafael Duarte | Phase 3 |
| 108 | FR-117 | G-PHASE3 | StewardPowers (DES-089) designed — capability-absence suite seeded (TC-3465/TC-3466); steward-vacancy simulation not run; no UT IDs yet | Chen Wei | Phase 3 |
| 109 | FR-118 | G-PHASE3 | ProtocolGovernance IMMUTABLE CORE (DES-087) designed — seven-rule entrenchment + Tier-1 rejection not deployed | Rafael Duarte | Phase 3 |
| 110 | FR-119 | G-PHASE3 | ProtocolGovernance (DES-087) + GovernanceConstants (DES-091) designed — three-tier super-process not deployed | Tomas Ferreira | Phase 3 |
| 111 | FR-120 | G-PHASE3 | Fork-right preservation (DES-034 lineage) — fork flag OFF above dev; no Phase-3 deployment yet | Erik Lindqvist | Phase 3 |
| 112 | NFR-027 | G-PHASE3 | No inspection harness for v2 surfaces; UT-0525/UT-0740 pass but v2 aggregate-analytics discipline not verified | Dr. Lena Kowalczyk | Phase 3 |
| 113 | NFR-028 | G-PHASE3 | No governance-path audit scan for v2 stores; append-only discipline unverified beyond existing UT scope | Erik Lindqvist | Phase 3 |
| 114 | FR-122 | G-PHASE3 | DES-095/ADR-025 assigned; IS_INSECURE_MOCK=true; TC-3478 Pass (obs.) at stub level; **v2.3.0: the honest-refusal path is now covered end to end** (TC-3530/3532/3533/3534; UT-0826/0828/0830 sdk, UT-0863/0864 web) — an open-tier member is refused `NOT_COUNTING_ELIGIBLE` naming government-ID and **remains a full member**. Production ZK-backed enforcement still pending | Dr. Lena Kowalczyk | Phase 3 |
| 115 | FR-123 | G-PHASE3 | DES-095/ADR-025 assigned; IS_INSECURE_MOCK=true; TC-3477 Pass (obs.) at stub level; **v2.3.0: verified-members-only official strength now covered** (TC-3530/3531/3532/3533, TC-3520; UT-0826/0827/0828/0830 sdk, UT-0863/0865/0866 web) — counted once, `ALREADY_COUNTED` on repeat, counting stops on leave and does not silently resume on rejoin, seam called once with scope `STRENGTH_CONTRIBUTION`. Row stays OPEN: uniqueness is an app-side set, not the verifier’s nullifier record; the DES-065 on-chain path is unbuilt | Dr. Lena Kowalczyk | Phase 3 |
| 116 | FR-124 | G-PHASE3 | DES-094/ADR-023 assigned; TC-3473/TC-3474/TC-3475 Pass (obs.) for UI layer; full verified-status privacy enforcement (backend + storage) pending | Grace Mbeki | Phase 3 |
| 117 | FR-131 | G-PHASE3 | **DES-098** (the v1 honesty notice — primary, Doc 02 §4.45) · **DES-094** (status-badge reach, clause 9) · DES-096/ADR-024 assigned; IS_INSECURE_MOCK=true; TC-3482..TC-3486 Pass (obs.) at seam level. **v2.3.0: clause (d) is BUILT and tested at the parties-directory counting surface** (TC-3534/UT-0864 — four clauses, refusal after them, no dismiss control) and **clause (b) honesty copy is fixed** (TC-3535/UT-0869). **TC-3481 stays Blocked** because it is written against the **SCR-13/SCR-14 ballot** surfaces, unbuilt in this drop (Doc 06 §7 #21); TC-3476 and TC-3487 still Blocked; production ZK ballot pending. **v2.8.0 (FR-131 honesty drop, Doc 06 v2.5.1, commit `0a5c542`): the closing sentence is CLOSED and regression-guarded — TC-3564..TC-3567/UT-0887 (rendered banner: banned words only when negated, never "private"/"secure"; (a)/(b)/(c) stated; guard bound to the shipped `en.ts` strings; Arabic mirror honest), TC-3568/UT-0759 (`ver` title backing-aware four-path, "Verified" as the fail-honest v1 default), TC-3569/UT-0888 (`maci_voting` description). Suite 619/619 green in R-17. THE ROW STILL DOES NOT CLOSE, ruled clause by clause: of FR-131’s ten obligations (Doc 02 §4.45; the DES-096 seam half this row also tracks is not one of them), (a), (b), (c) and the closing sentence are met at the copy layer, and six are not — the notice cannot be shown "wherever a vote is cast" or on SCR-13/SCR-14 (unbuilt, Doc 06 §7 #21); "visible before confirmation" has no confirmation step to precede; WCAG 2.2 AA and screen-reader access are unevidenced (NFR-011 is G-UI); clause (d) is built at the parties-directory and proposals-admission surfaces but not at the binding-vote surface (TC-3481 Blocked); TC-3487 audit-contract publication and TC-3476 stay Blocked. **The blocking cause in one line, unchanged in substance and sharpened in fact: "the voter MUST acknowledge the notice to proceed" has no acknowledge control at all — the banner is non-dismissable but nothing gates proceeding (Doc 06 §7 item 26(d), owed SCR-13 story scope) — and the ballot surfaces the notice must appear on are unbuilt.** **v2.9.0 (ISS-02, ISS-06): `DES-098` is recorded against this entry for the first time** — the design element Doc 02 §4.45 names for this notice appeared nowhere in Doc 08 before v2.9.0, though six of the cases above cite it; DES-094 is named for the status-badge reach TC-3568 verifies. The assignment follows Doc 03 v2.13.0 §15 (**In Review**, cited as current corrected text, not an approved source), and SCR-13/SCR-14 are now recorded UNBUILT in the §3.1 SCR cell rather than "none". The missing sentence break before "v2.8.0" is also fixed — the entry had read "production ZK ballot pending v2.8.0". **No status, gap code, owner, phase or count changes; the entry stays live.** **v2.12.0 — recorded because a reader will otherwise ask: the `/verify` flag-gate drop (Doc 06 v2.8.1, `UT-0890`, fifteen new cases TC-3577..TC-3591) touches this entry NOT AT ALL, and no FR-131 link is added for any of them.** Doc 02 §4.45 clause (e) closes by placing personhood-enrolment and identity-verification claims **expressly outside** it (FR-132 §(d); §16.4 H-16/H-17/H-18; Doc 02 §13 routing (j)), and **the scope test is the CLAIM, not the surface**: clause (e) reaches a string only where the string asserts that a **participation act** — casting a vote; endorsing or backing a petition; joining or belonging to a party; supporting a party — is unknowable to Trumocracy. **Not one of the fifteen strings makes such a claim**: the five retired claims and the four replacement values are claims about **document handling and identity checking**, which §4.45 routes to FR-132 §(d). _(v2.12.1, ISS-05: this read "the `/verify` copy is enrolment copy", scoping the carve-out by **surface**. The outcome is unchanged and the neutral reviewer re-read clause (e) independently and confirmed that no FR-131 link belongs on any of the fifteen — but the surface framing would license a future enrolment-page string that DID assert unknowability, and `en.verify.unavailableBody` names two participation acts in its own sentence ("anyone can make an account, **join a party**, read, discuss and **support one**"), so the surface was never the boundary. **The same Low is carried in Doc 07 v2.9.0, which is Approved and is NOT reopened; it rides to Doc 07's next touch.**)_ Two of the fifteen — TC-3585 and TC-3591 — do apply FR-131's four-word list, but as an **instrument** over copy this requirement does not govern; Doc 07 §5 says so in both rows. **The blocking cause is unchanged and unaffected: there is still no acknowledge-to-proceed control, SCR-13/SCR-14 are still unbuilt, and Scenario 9 still has no instrument (TC-3575, Blocked).** No status, gap code, owner, phase or count changes at v2.12.0 either. | Samuel Oyelaran (acknowledge control + ballot surfaces, SCR-13 story scope) · Nadia Hassan (FR-131 owner) | Phase 3 |
| 118 | FR-132 | G-PHASE3 | DES-095/DES-100/ADR-024/ADR-025 assigned; IS_INSECURE_MOCK=true; TC-3479/TC-3480 Pass (obs.); production allowlist-only enforcement and VendorNotBound guard in production pending. **v2.12.0 — evidence extended, entry unchanged in every other respect.** The `/verify` route is now flag-gated dark (`enrolment_ui` off above `dev`) because its copy stated the unbuilt §(b) verify-and-discard design as current fact; `UT-0890` guards the gate and the honesty placeholder in fifteen assertions, minted as **TC-3577..TC-3591** (all **Pass (obs.)**, run **R-20**, 640/640 on a clean tree), **of which fourteen — TC-3577..TC-3585 and TC-3587..TC-3591 — are this entry's evidence**. _(v2.12.1, ISS-01: **TC-3586 is not FR-132 evidence.** Doc 07 v2.9.0 records it against `US-0133 · NFR-023 · DES-085` with no FR named — a DES-085 jargon scan, not §(d) — so it enters the matrix at the §3.2 NFR-023 row only, on the **TC-3576** precedent set at v2.11.0. This entry and the §3.1 row now cite the fourteen they mean.)_ **This closes nothing.** §(a), §(b), §(c) and §(e) are unbuilt — `StubIdDocumentChecker.IS_INSECURE_MOCK()` = true and the Phase-1 vendor adapter is blocked on **CON-015** — and **§(d), the clause the drop actually serves, is still not discharged**: §(d) puts its statement duty on "the FR-131 honesty notice (**DES-098**)", and DES-098 does not exist (see entry 117 and Doc 06 §7 item 26(d)), so TC-3587 states the right fact on a surface that is not the one §(d) names. **A dark route removes a false claim; it does not build an identity check** (Doc 06 §7 item 28: "Nothing in this item clears CON-015 or is progress on enrolment — it removes a false public surface and builds nothing"). **Blocker for this entry, stated in one line: CON-015 is not cleared, so §(b) cannot start.** No status, gap code, owner, phase or count changes | Samuel Oyelaran | Phase 3 |
| 119 | FR-121 | G-TRACE + G-PHASE3 | No DES assigned — Doc 03 §16 next-increment phasing; pilot-jurisdiction sequence (India Aadhaar → EU eIDAS 2.0 → USA deferred) not designed | Marcus Adeyemi | Design next increment |
| 120 | FR-125 | G-TRACE + G-PHASE3 | No DES assigned — Doc 03 §16; invite-gating spam-control with mandatory non-invite fallback; OI-19 RESOLVED (v2.4.0) — finalised but implementation-ready pending DES | Grace Mbeki | Design next increment |
| 121 | FR-126 | G-TRACE + G-PHASE3 | No DES assigned — Doc 03 §16; on-device credential-processing boundary not separately designed (ADR-017 covers prover concept; formal DES owed) | Dr. Lena Kowalczyk | Design next increment |
| 122 | FR-127 | G-TRACE + G-PHASE3 | No DES assigned — Doc 03 §16; nullifier-collision-only duplicate-detection posture (ADR-017/C-03) recorded normative; formal DES owed | Marcus Adeyemi | Design next increment |
| 123 | FR-128 | G-TRACE + G-PHASE3 | No DES assigned — Doc 03 §16; subpoena-test no-stored-identity posture (Decision 3/ADR-017) recorded normative; formal DES owed | Dr. Lena Kowalczyk | Design next increment |
| 124 | FR-129 | G-TRACE + G-PHASE3 | No DES assigned — recorded-phasing posture (Doc 03 §16); Charter-tier classification (FR-118 vs FR-119) for issuer-plurality guard owed to architect (OI-20) | Marcus Adeyemi | Design next increment |
| ~~125~~ | ~~FR-130~~ | ~~G-TRACE~~ | **CLOSED v2.4.0 — entry retired.** DES-102 (Doc 03 v2.8.1 §10.13.11) supplied the missing design link with SCR-09/SCR-11 bound; all four completion rules now hold and the FR-130 Must row is **COMPLETE** (see §3.1). Every clause has its own passing test: cap at 100 ACTIVE members with a leave freeing exactly one slot (UT-0825, UT-0862); automatic code-only lift on verified registration (UT-0809..0811); capability-absence of any operator/config/env early-lift path (UT-0806). Recorded residual, disclosed: v1 enforces at the application boundary with audit-record **tamper-evidence**, not tamper-prevention; the v2 `Party.join()` guard (DES-102 rule 7) is owed and **this row must be revisited when on-chain membership goes live** | ~~Sofia Marchetti~~ Closed | ~~Design next increment~~ Closed |
| 126 | FR-133 | G-PHASE3 | DES-099 assigned (Doc 03 v2.4.1 Approved); no US or TC yet — recorded-phasing posture; spam-resistance flag-don't-block layer not deployed | Rafael Duarte | Phase 3 |

### 7.1 The four gaps that will not close by building harder

Called out because they are qualitatively different from "not built yet", and a Gate-2 approver
should not be allowed to mistake them for schedule:

1. **`NFR-004` duplicate rate is not internally measurable — by design.** The system refuses to link
   a nullifier to a person (proven by `TC-1607` / `UT-0108`). That is the privacy property working.
   It also means Trumocracy **cannot count its own duplicates**. Measurement requires a consented,
   out-of-band audited sample at the attestors, reported with its confidence interval. The
   requirement's ≤ 0.1% target must be re-worded to name that instrument, or it stays unverifiable
   forever (OPEN-14).
2. **`FR-002` / `NFR-001` "better than chance" is not falsifiable by a finite suite.** No amount of
   testing produces a pass verdict against an unbounded adversary with an unset collusion bound
   (OPEN-08, OPEN-13, OI-10). This needs a restatement into a concrete adversary game with a
   maximum advantage ε at a stated confidence — a product and architecture decision, not a test.
3. **`NFR-025` contradicts ADR-001.** 60 minutes versus 12–24 hours. The suite can measure and
   report; it cannot pass a criterion the design contradicts (OPEN-11).
4. **`FR-031` / `FR-032` / `NFR-003` need MACI, which is Phase 3.** No test, environment or
   documentation change makes receipt-freeness true at v1. The honest option is the one already
   taken in the client (`UT-0710`–`UT-0712`): say so, loudly, in the product.

## 8. Change-impact view

| If this changes | These rows must be re-verified |
|---|---|
| `ADR-003` nullifier scoping | FR-001, FR-002, NFR-004 + TC-2600, TC-2601, TC-1001–TC-1003 |
| **`NOMINATION_ENDORSEMENTS_MIN` = 5 · `NOMINATION_MATURATION` = 30 days** _(approver-ruled 2026-09-21, `artifacts/status/DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md`; Doc 03 §10.11)_ | **FR-036**, FR-023, **FR-081** + TC-3598, TC-3602, TC-3606 — the endorsement floor gates `scheduleDebates` and the maturation gate precedes the counting seam, so a change to either re-opens FR-036's "published minimum" clause and FR-081's "eligibility checked by code against published rules". **Note:** UT-0894 pins the 30-day value exactly and asserts the endorsement minimum only as **non-zero**, so a change to 5 breaks no test — the value pin is routed to the engineer |
| **`ICandidateStore` v1 → v2 backing swap** _(Doc 03 §10.13.14 seam table; `InMemoryCandidateStore` → DES-097(b) Postgres → the Elections contract)_ | **FR-036, FR-037, FR-039, FR-065, FR-066, FR-067, FR-081, FR-085, FR-093** + every `TS-CANDIDATE` case — the whole flow sits on this seam. **FR-065 turns on it specifically:** its one-vote rule is a store-local check-then-write whose atomicity is only as good as the backing, and the owed **UNIQUE constraint on (candidacyId, member)** is what the clause waits for. `IS_INSECURE_MOCK` = true today (TC-3612) |
| **Attested residency lands** _(DES-007; v1 residency is self-declared)_ | **FR-036** — recorded revisit flag on the row. The scope rule is what closes; the strength of the claim behind it is FR-006/DES-007's, and TC-3615 currently asserts the surface **discloses** that v1 takes the member at their word |
| **The FR-132 identity layer is built, or a DES-097(b) production store exposes an approve/reject/rank member** | **FR-037** and **FR-081** — the two recorded revisit flags. FR-037 closes under **Completion rule 4a** on a scope premise whose extent is fixed by inspection; **a second holding of real-world identity is a new way to fail it**. FR-081's store-prototype scan gap (DES-107 ISS-08) is the mirror case |
| `ADR-006` MACI design | FR-030, FR-031, FR-032, FR-033, FR-034, NFR-003 + all of TS-ADV-02 |
| `GovernanceRules` tier table | FR-025, FR-026, FR-027, FR-023 + TC-1200, TC-1202 and every `TS-DIFF` case |
| `RegionRegistry` population logic | FR-009, FR-016, FR-018, NFR-002 + TC-2710–TC-2715 |
| `MIN_ANONYMITY_SET` | NFR-002, NFR-001, FR-020 + TC-1950–TC-1955, TC-2651 |
| `FeatureFlags` semantics | NFR-020, NFR-017, FR-056 + TC-1610, TC-1611, TC-2750, TC-2426 |
| The `treasury` flag turning on | **FR-051 loses its conditional completion** and must be re-tested in full, plus FR-049, FR-050, FR-052 |
| Any `OI-01`…`OI-11` decision | Re-check every row citing that OI; `OI-05` alone gates NFR-002 and BR-004 |
| **The v2 on-chain seam swap (ADR-024) — the FR-091 stage machine binding to `PROPOSAL_STATE`** | **FR-091, FR-092** + TC-3552..TC-3555, TC-3559, TC-3560. Doc 03 **v2.11.0** §10.13.13(a) makes this normative: **the ballot layer is the sole authority on ballot state in BOTH versions** — the DES-096 database backing in v1, `Governor.State` at the v2 seam — and FR-091's `VOTE` / `DECISION` / `IMPLEMENTATION` stages MUST be **derived** from whatever backing `IBallotService` is bound to, never tracked independently. _(v2.6.0: this row cited **v2.10.0** and its v2-only scope. Doc 03 v2.11.0 corrected that scope after review — "v1 holds no ballot (ADR-024 §(b))" **mis-cited**: ADR-024 removes on-chain **execution** in v1, while **DES-096 specifies a v1 ballot backing outright**, so the v2-only rule left the drift failure mode unbound exactly where v1 first holds a vote. The narrow true claim is that **the proposals and debate layer** holds no vote — it stops at `admitToBallot()` and hands off.)_ It is a **build obligation, not a v1 test obligation today**, because the layer built so far derives nothing. At the swap, every case asserting a stage position must be re-verified against the derivation rather than against stored state, and the `discussion` **name collision** must be honoured (ADR-008 §6's single pre-vote `DISCUSSION` period spans FR-091's review + discussion + debate; equating them by name skips two stages). See also **Q15** — FR-091's text does not yet say that a DEFEATED or CANCELLED window terminates at `DECISION` |
| **`COUNTING_ACTION` allowlist membership (DES-100)** | **FR-024, FR-090, FR-122, FR-123, FR-132** + TC-3543, TC-3545, TC-3546, TC-3556. The set was approver-**ratified at three values on 2026-08-24** (DES-100) and **confirmed closed** on **2026-08-30** by the PROPOSING ruling; adding a fourth requires an amendment to FR-123 **and** DES-100, never a code change alone. _(v2.7.0: this row gave 2026-08-30 as the ratification date. The 2026-08-30 ruling confirmed an allowlist ratified six days earlier — it did not create it, and the distinction matters because the confirmation's authority rests on the earlier ratification.)_ Were PROPOSING ever added, FR-090's closure and TC-3545 would both have to be re-derived — the revisit condition that was discharged 2026-08-30 |
| **Any public-facing string describing a v1 participation act (FR-131 clause (e); Doc 02 v2.17.1 §4.45 and §8 Scenarios 8/9)** — voting, endorsing/backing a petition, joining or belonging to a party, supporting a party, **in any language** | **FR-131** + TC-3535, TC-3564..TC-3567, **TC-3570..TC-3575** and their guards UT-0869, UT-0887, **UT-0889**. Clause (e) is a duty over a **population of strings**, so the rows to re-verify are not only the one whose copy changed: **any** new or edited string in `apps/web`, `packages/ui`, the README or any locale mirror is in scope, and the **grade-8 reader test** (NFR-023) applies even when none of the four banned words appears — the two strings the 2026-09-06 ruling corrected contained none of them, and Scenario 9 says so in terms. **Until Doc 04 §0.5 S5 is implemented as a build-failing scan there is no mechanical detector for this row** — that absence is itself carried as **TC-3575 (Blocked)** — so the trigger is editorial: a copy change ships with a UT-0869-pattern guard, or it ships unguarded and FR-131's evidence weakens. **Carve-outs, and only two:** clause (a)'s mandated negated forms inside a DES-098 notice (UT-0887 is negation-aware for exactly this reason) and the named `anon`-badge exception, itself under review as **OPEN-27**. **Out of scope:** personhood-enrolment and identity-verification claims, addressed by **FR-132 §(d)** and §16.4 H-16/H-17/H-18 (Doc 02 §13 routing (j)) |

## 9. Gate verdict & sign-off

**Gate rule (CLAUDE.md): 0 gaps in Must rows = traceability criterion met. Any open row → the gate
stays shut.**

| Criterion | Required | Actual | Verdict |
|---|---|---|---|
| Must rows with a complete chain | 138 / 138 | **19 / 138** | **FAIL** |
| Open Must rows | 0 | **119** | **FAIL** |
| Tests green across the requirement set | all | **739/739 green repo-wide (2026-09-21, run R-21, tester-executed, exit 0, against merged code at `HEAD` `12fe4a6`)** — contracts 95 · protocol **178** · sdk **287** · ui **25** · indexer 16 · web **138**; of the RTM's own cases, **275 of 521 carry passing evidence**; **15** have an implementing automated test that was **not executed case-by-case** (all 15 ran green at file granularity in R-17 through R-21 — Doc 07 `TD-07-03`, still open); **231 cannot execute** at all (Blocked or no mechanism). 275 + 15 + 231 = **521**. _(v2.13.0: was 640/640 on R-20 with 245 + 15 + 233 = 493. The **+99 tests** are the candidate-selection drop's 97 `it`s in `UT-0891`..`UT-0907` plus the two added at Doc 06 v2.11.0/v2.11.1 inside them; the **+28 cases** are **TC-3592..TC-3619**, all **Pass (obs.)**, observed `it` by `it` in four separate runs. **Unlike the +15 at v2.12.0, these close rows:** FR-036, FR-037 and FR-085 complete, and FR-038 (Should) with them. The cannot-execute figure moves **233 → 231** because **TC-3407** and **TC-3411** leave it for **Pass (obs.)**, while **TC-3419** moves No mechanism → Blocked **within** it. **R-21 carries no qualification and owes no re-run:** the drop under test is merged at `12fe4a6` (PR #22) and `git status --porcelain` returned nine paths — seven untracked `artifacts/` session records, `memory-index.json`, and `docs/03-architecture-design-sdd.md` — **no product, test or configuration path modified or untracked**, so every test input is identical to `HEAD`.)_ _(v2.12.0: was 625/625 on R-19 with 230 + 15 + 233 = 478. The **+15 tests** are the `UT-0890` `/verify` flag-gate guard added at Doc 06 v2.8.0; the **+15 cases** are **TC-3577..TC-3591**, all **Pass (obs.)**, of which **fourteen — TC-3577..TC-3585 and TC-3587..TC-3591 — enter at the §3.1 FR-132 row**, while **TC-3586 enters at the §3.2 NFR-023 row ONLY** (Doc 07 v2.9.0 verifies it against `US-0133 · NFR-023 · DES-085` and names no FR); they **close nothing at either**. _(v2.12.1, ISS-01: this read "and TC-3586 **additionally** at the NFR-023 row", which asserted an FR-132 link Doc 07 does not carry. Corrected where the claim was made, not only in the changelog.)_ The cannot-execute figure **does not move** — this drop adds no Blocked case and no case without an implementing test, which is why gaps stay 255 in §6. **THE STANDING QUALIFICATION IS DISCHARGED:** R-18 and R-19 were each run against an **uncommitted 76-path working tree** and each recorded a post-merge re-run as owed. R-20 is against `HEAD` `18244e8` with `git status --porcelain` returning **three** paths — `artifacts/memory-index.json` and the two review-assignment records under `artifacts/status/` — **all of them session-governance records, none read by any test, and no modified product, test, configuration or document path.** The owed re-run is closed, and it closes on **640** rather than R-19's 625 because the drop under test landed in between.)_ _(v2.11.0: was 624/624 on R-18 with 229 + 15 + 233 = 477. The +1 test is the **sixth UT-0889 `it`** (a DES-085 jargon scan added at Doc 06 v2.7.0); the +1 case is **TC-3576**, **Pass (obs.)**, which enters at the §3.2 NFR-023 row and closes nothing there. **R-19 ran against the same uncommitted working tree as R-18** — 76 dirty paths — so the two runs are one piece of evidence, not two, and the post-merge re-run this row has owed since R-18 is still owed. The reviewer independently re-ran the suite for the v2.10.0 cycle-1 review and also got 625/625, which corroborates the figure without curing the tree.)_ _(v2.10.0: was 619/619 on R-17 with 224 + 15 + 232 = 471. The +5 tests are the FR-131 clause-(e) guard **UT-0889**; the +6 cases are TC-3570..TC-3575, of which five are **Pass (obs.)** and **TC-3575 is Blocked** — Doc 02 §8 FR-131 Scenario 9 has no implementing instrument, Doc 04 §0.5 S5 being unbuilt, which is why the cannot-execute figure moves 232 → 233. **R-18 ran against an uncommitted working tree**, not a merged commit — 40 dirty paths, product code among them — because reviewer-qa has not signed the merge; a post-merge re-run should confirm the same 624, and this row will be re-derived if it does not.)_ _(v2.8.0: was 610/610 at 2026-08-30 with 217 + 16 + 232 = 465. The +9 tests are the FR-131 guard blocks UT-0887/UT-0759/UT-0888; the +6 cases are TC-3564..TC-3569; the 16 → 15 is TC-2614 re-statused Not run → Pass (inh.).)_ Seam tests are still IS_INSECURE_MOCK=true. **Denominator note (added v2.7.0; figures brought current at v2.12.1) — the two sections do NOT share a denominator, and the gap is not yet explained.** This row counts against **493**, Doc 07 v2.9.0 §2's total (was 478 against Doc 07 v2.8.0, 477 at v2.7.0, 471 at v2.5.0/v2.6.0, 465 at v2.4.4). §6's dashboard counts against **500**, derived there as 491 anchors − 1 + 10 (was 485 from 476 anchors, and 484 from 475) (the `TC-3200`-`TC-3209` range expanding to 10 charters). **These differ by 7 and the difference is UNRECONCILED — the same 7 as before, both sides having moved by exactly +15 at v2.12.0.** _(v2.12.1, ISS-02: this note published **478** and **485** in the present tense beside a headline in the same cell reading **493**, and quoted §6 at a figure §6 no longer uses. Both went stale **by v2.12.0's own edit**, inside the cell that edit touched. Brought current in place rather than dated-and-retained, because §9 is the cell a Gate-2 reader quotes and two live denominators in one cell is the defect. The superseded series is kept in the parentheses above.)_ Doc 07 describes its own 465 as the *expanded* count with that same range already listed as 10 individual cases, which would imply 456 anchors, not 463 — so the two documents do not agree on either figure. _(That sentence is a dated v2.6.1-era analysis of the 465/456/463 series, retained as the origin of the 7; the live anchor figures are the 491 / 493 / 500 above.)_ Consequently §6's "**255** not executed or not executable" (= 500 − 245) and this row's "**233** cannot execute" are **different measures over different denominators and must not be reconciled to each other**; the 15 automated-but-unexecuted cases also fall inside §6's 255 and outside this row's 233. **What is NOT in doubt:** **245** with passing evidence, and the **640/640** suite — the suite figure was executed and read from the run output by the tester on 2026-09-20 (run **R-20**, exit 0, on a clean tree), package by package _(v2.12.1, ISS-02: this read "224 … 619/619 … 2026-09-06 (R-17)", three drops behind the row it sits in; R-17 remains the run at which the sentence was first true)_. **Owed:** the tester owns Doc 07 and Doc 08 and must reconcile the two conventions to one stated definition, recorded as **TD-RTM-02** in §10. _(The §6/§9 denominator mismatch was raised as a carried Low across cycles; stating it as "both correct in their own convention" would have been the comfortable answer and is not supportable — 456 ≠ 463.)_ _(**v2.6.0 — corrected twice.** Before v2.5.4 this read "542/542 … 195 of 449 … 127 cannot execute", the figures from before the proposals & debate drop, stale on four of six packages. v2.5.4 fixed the suite total but then wrote "**233** of 465 carry passing evidence", **mislabelling Doc 07's figure**: Doc 07 §2 reports 233 as cases with an *implementing automated test*, of which **16 `apps/web` cases exist but were not executed**. Crediting all 233 with passing evidence claimed evidence for 16 cases that have none, and simultaneously reported 23 fewer unexecutable cases than this document's own §6 dashboard. 233 − 16 = **217**, which is exactly what §6 says — the two now agree.)_ **A green suite is not a closed matrix:** the suite proves the code does what it was built to do, not that every Must requirement has been built | **FAIL** |
| Rollback proven | yes | never drilled (TC-2425) | **FAIL** |
| Doc 04 Gate-2 blockers closed | OPEN-01…06, OPEN-11 | OPEN-04, OPEN-05, OPEN-06 **closed with regression tests**; OPEN-01, OPEN-02, OPEN-03, OPEN-11 **open** | **FAIL** |
| Independent security/crypto audit, 0 critical/high | yes | not started | **FAIL** |

**Tester's recorded verdict: Gate 2 is NOT ready. Do not present this drop as launch-ready.**

What is genuinely good here, and should not be lost in the gap count: the governance arithmetic is
correct and **differentially proven against an independent reference implementation**; the
capability-absence controls are real, mechanical and build-failing; the four defects Doc 04's review
found — two Critical — are fixed with regression tests that are now first-class cases in Doc 07; and
the anti-capture machinery (snapshot, maturation, entrenchment, surge quorum) defeats every takeover
scenario the risk register describes. That is a strong Phase-1 foundation. It is not a launch.

| Role | Name | Decision | Date | Notes |
|---|---|---|---|---|
| Tester (author, **R**) | Ji-woo Park | **Submitted — 119 open Must rows recorded. 3 Must rows CLOSED (FR-036, FR-037, FR-085), 6 reclassified (FR-039, FR-065, FR-066, FR-067, FR-081, FR-093 — all to `G-NOMECH`, FR-081 and FR-093 leaving `G-TRACE`), 0 opened. 1 non-Must row closed (FR-038). Must 16/138 → 19/138 · stories 17/142 → 23/142 · test cases 500 → 528 designed, 245 → 275 with passing evidence, 255 → 253 gaps · suite 640/640 → 739/739 (R-21, merged code, exit 0). This is the first Must-count movement since v2.4.0 and the largest in this matrix's life. It is also, deliberately, six rows that did NOT close: seven DES elements were amended or minted for these nine rows and two of them bought a reclassification rather than a closure, exactly as DES-101 did for FR-077.** | 2026-09-21 | **v2.13.0, Status In Review — cycle 1 of a fresh loop** (v2.12.3 PASSed and closed its own lineage). Neutral technical reviewer, PM-assigned and recorded BEFORE dispatch in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`: **reviewer-qa** (Rafael Duarte, new instance); the architect is excluded as the author of the DESs these rows cite. **The five clauses Doc 03 v2.16.0 referred here are each ruled in §3.1, and two of the five went against the design's hope** (FR-065's nullifier mechanism and unlinkability; FR-067's "logged"; FR-081's active/inactive state; FR-085's TC-3476, re-homed). **One new evidence defect raised: `TD-RTM-05`** — Doc 02 §16.3.1 records FR-065 as fully IN-v1 with divergence "N" for a requirement v1 demonstrably does not satisfy; routed to the product-owner, and **this version's ruling does not rest on that table**. _(Prior v2.12.3: Submitted — 122 open Must rows; 0 CLOSED, 0 reclassified, 0 opened; not one figure moved at v2.12.1, v2.12.2 or v2.12.3.)_ |
| | | | | _(Prior v2.2.2: Cycle-2 rework — TC-3488/UT-0753 added to NFR-011; 8 absent Must FR rows added FR-121/125..130/133; Must FR 106→114; open Must 118→126.)_ |
| reviewer-qa (**A**, independent verifier) | _pending_ | | | Must independently verify these 119 gaps (including **32 live G-TRACE rows**: NFR-007, FR-074, FR-075, FR-076, **FR-078**, FR-087, FR-088, FR-089, FR-094..FR-111, FR-121, FR-125..FR-129) before any merge sign-off. _(**v2.13.0 — the count and the list both move, and the two names that leave are named.** **FR-081** and **FR-093** left this class when **DES-107** and **DES-108** were minted at Doc 03 v2.16.0 §10.13.14; both rows are still OPEN, now `G-NOMECH`, so **the verifier still owes them a check — under a different code, not fewer rows**. Re-derived: 1 NFR + 31 FRs = 32, and the range that read FR-093..FR-111 now reads FR-094..FR-111. **The 122 → 119 is the three closures — FR-036, FR-037, FR-085 — each argued clause by clause in §3.1, and each is a claim this verifier must be able to defend at merge.**)_  _(**v2.6.0 — corrected twice, and the second correction is the instructive one.** Before v2.5.4 this read "40 G-TRACE rows FR-074..FR-081/FR-087..FR-111/FR-121/FR-125..FR-130"; both the count and the ranges were stale (FR-079/FR-080 and FR-130 closed; FR-077/FR-091/FR-092 reclassified G-TRACE→G-NOMECH once a DES was assigned). v2.5.4 replaced it with "33" and a note claiming "FR-078/FR-079/FR-080 closed" — **FR-078 is not closed**: it is `☐ OPEN — G-TRACE + G-PHASE3` in §3.1 and live as §7 entry 69. The mechanical recount had missed it because **§7 entries 68 and 69 were concatenated onto one physical line**, so the row did not render as a row and no row-wise count could see it. The formatting defect caused the counting defect, and the effect was to drop a live open Must row from the set the Accountable verifier is told to check. The line break is fixed in §7 at v2.6.0 and the count re-derived: **34** = 1 NFR + 33 FRs. §7 is authoritative.)_ |
| Principal Architect | _pending_ | | | ~~Owns the 15 missing `DES` links (Doc 03 §5.2)~~ **Those 15 closed at Doc 03 v1.1.0 (DES-064..DES-086); see the `G-TRACE` legend row in §3.** Now owns the **32 live `G-TRACE` rows** enumerated in the reviewer-qa row **above** _(v2.13.0: **34 → 32** — DES-107 and DES-108, minted at Doc 03 v2.16.0 §10.13.14, closed the chain gaps on **FR-081** and **FR-093**. Neither row closed; both moved to `G-NOMECH` and the architect still owes the **DES-097 S-8 anchoring** that FR-066 and FR-092 wait on, plus the DES-076 rule 2 and DES-108 rule 3 designs that are written and awaiting build)_ — **31 of them** chains still broken for want of a `DES`; the 34th, **NFR-007**, is not one of those: it **has** DES-051 (§3.2) and carries `G-NOENV + G-TRACE` for a different reason _(v2.7.0: the cell had described all 34 as DES-less, and pointed "below" at a row that sits above it)_ — plus OPEN-02/03/11, and the **owed DES-096 ballot-state accessor** (Doc 03 v2.11.1 §10.13.13(a): the v1 half of the derivation rule has nothing to derive from until `IBallotService` reports ballot state). _(v2.6.0: this cell had named "the 15 missing DES links", a set closed at Doc 03 v1.1.0, for the whole life of the document. **v2.6.1: the v2.6.0 repair then assigned this cell Doc 03 §16 Q17, which is NOT the architect's — Q17 is owned by Ji-woo Park (tester) + Samuel Oyelaran (Engineering Lead).** Third consecutive cycle in which a correction to this block misassigned an owner; the corrected cell now names only architect-owned work.)_ |
| Product Owner (**A** for Gate 2) | _pending_ | | | Owns `OI-01`…`OI-05`, the `FR-005`/`FR-049`/`FR-050`/`FR-052`/`FR-053` story gap, and the OPEN-01 receipt-freeness decision |
| Project Manager (**R** for Gate 2) | _pending_ | | | Gate-2 packet: this matrix is the traceability evidence, and it fails the criterion |
| **Human approver — Gate 2** | _pending_ | **Approve / Rework / Reject** | | Recommendation from the tester: **do not schedule Gate 2 until the Must-row count closes** |

---

## 10. Traceability defects in the evidence itself

Defects in the *citations* this matrix relies on, as distinct from gaps in the requirements it
tracks. Recorded here rather than repaired silently, because repairing them is not the tester's to do.

| # | Defect | Effect on this matrix | Owner | Status |
|---|---|---|---|---|
| **TD-RTM-05** _(new, v2.13.0)_ | **Doc 02 §16.3.1 records FR-065 as fully satisfied in v1, with no divergence, for a property v1 demonstrably does not have.** The §16.3.1 row reads: FR-065 · Must · **IN-v1** · v1 mechanism "DB aggregate (asymmetric +3/−1); aggregate public" · v2 "**Same**" · divergence "**N**". FR-065's own §4 normative text requires that "individual votes MUST remain private and **unlinkable to their caster**" and that the one-vote rule "MUST be enforced by **the same nullifier mechanism as scope-action limits**". **v1 satisfies neither** — the store keeps a caster record so it can refuse a second vote, the operator database can read direction, the product **discloses that on the surface** under FR-131(b), and Doc 03 v2.16.0 DES-066 rules 2 and 4 expressly decline to claim either property for v1. **FR-063 carries divergence "Y" for a strictly smaller gap** (ballot direction: API never exposes it, DB holds it), so the table has the vocabulary to record this and did not use it. Found while reading §16.3.1 clause by clause for the v2.13.0 ruling | **It does not change this version's ruling and that is the point.** FR-065's row stays **OPEN (`G-NOMECH`)** on both clauses; a Must row cannot close by citing a source that is wrong about that row, and the comfortable reading — "§16.3.1 scopes FR-065 down to the aggregate, so the row closes" — is the one this entry exists to refuse. The effect is on **readers of Doc 02**, who are told a requirement is met that is not, and on any future ruling that leans on §16.3.1 without reading §4 beside it | **Product Owner** (Doc 02 §16.3.1; the honest row reads **PARTIAL**, divergence **Y**, with the v2 column naming the `keccak(feedback, electionId, candidateId)` nullifier) | **OPEN** — raised 2026-09-21, routed, not repaired here (Doc 02 is not the tester's document) |
| **TD-RTM-03** _(new, v2.11.0)_ | **Doc 07 and Doc 08 do not agree on which cases verify `NFR-023`.** This matrix's §3.2 NFR-023 row cited **TC-2331, TC-2332** and read "**none**" for evidence when this debt was raised. _(v2.12.1, ISS-04 — register brought current, raising date deliberately unchanged: the row now cites **four** cases (TC-2331, TC-2332, **TC-3576** added at v2.11.0, **TC-3586** added at v2.12.0) and carries **two** evidence entries rather than "none". **TC-3538 and TC-3561 are still absent — that omission is the whole of this debt and it is untouched at exactly two.**)_ Doc 07 has recorded **TC-3538** (UT-0868 — jargon filter over every new membership string, `US-0133 · NFR-023 · DES-085`, Pass (inh.)) since **v2.3.0**, and **TC-3561** (UT-0884 — the proposals surface carries no banned vocabulary, `US-0102 · NFR-023 · DES-085`, Pass (inh.)) since **v2.4.0**. Neither has ever appeared in this row. Found while adding **TC-3576** for the same requirement at v2.11.0 — i.e. found by doing the link properly once and noticing the two that were never done. | **No status, count or gap classification changes, and NFR-023 is OPEN either way** — the row is `G-UI` because no jargon **scanner** and no readability check exist, and three enumerated per-drop scans do not make one. The defect is in the **evidence trail**: a Gate-2 verifier reading this row meets **two** of the **four** cases Doc 07 records against NFR-023 — TC-3576 and TC-3586 — and does not learn that **TC-3538** and **TC-3561** exist. _(v2.12.1, ISS-04: until v2.11.0 the row read "none" and this sentence said so; the absolute omission is unchanged at exactly two, and the row still tests nothing that could close it.)_ It is the mirror image of Doc 07 v2.6.0 ISS-02, where a Doc 07 cell claimed an NFR-013 link this matrix did not carry — same class, opposite direction. **Not repaired in passing:** adding the two rows means re-deriving two other drops' evidence and re-checking whether either bears on the `G-UI` classification, which is a recount, not a side-effect of a cycle-2 rework. | Ji-woo Park (tester) | **OPEN** — raised 2026-09-07 |
| **TD-RTM-02** | **Doc 07 and Doc 08 do not agree on the test-case denominator, and there are THREE live conventions, not two.** **(1) Doc 07 §2** counts **493** designed cases — the suite-table total at Doc 07 **v2.9.0** (it was 471 at v2.5.0/v2.6.0 when this debt was raised, and 478 at v2.8.0). **(2) Doc 08 §6** counts **500** — Doc 07’s **491** row anchors expanded (491 − 1 + 10, with `TC-3200`-`TC-3209` counted as ten individual cases). **(3) Doc 07 §10**’s automated-and-Blocked overlap paragraph counts on a **third base again**: 193 automated + 171 Blocked-only + 48 No mechanism + 12 Manual = **424** distinct, on v2.1.0-era base figures that already disagree with §2’s 239 automated and 49 No mechanism _(v2.12.1: Doc 07 **v2.9.0** §2 now reports **260** of **493** cases with an implementing automated test and **233** that cannot execute; the §10 overlap paragraph was **not** re-derived for this check and remains the third base)_. Raised at the v2.6.1 review as a carried Low ("§6 and §9 use different denominators with no bridge"); stating that each is "correct in its own convention" would have closed it comfortably and is **not supportable**, because the three bases are not reconcilable by inspection | **No requirement-row status, Must-row count or gap classification is affected, and the load-bearing figures are sound**: the **245** cases with passing evidence and the **640/640** suite (run **R-20**, 2026-09-20, tester-executed, exit 0, and the first clean-tree run in this lineage) have each been re-derived independently, most recently by the neutral reviewer at the **v2.12.0** cycle-1 review, which reproduced R-20 package by package. What is unusable is any statement of the form "N of M cases" that crosses between §6, §9 and Doc 07 §10 — including any reconciliation of §6’s **255** (= 500 − 245) with §9’s **233**, which are different measures over different denominators | **tester** (Ji-woo Park) — owns both Doc 07 and Doc 08, so this is one owner's reconciliation, not a cross-role negotiation | **OPEN — raised 2026-08-30.** Does not block the current merge. Reconcile to ONE stated definition before Gate 2, since a Gate-2 verifier reading these documents will otherwise meet three totals for one suite. _(v2.9.0, ISS-04: this entry was still written on its v2.6.1 figures — Doc 07 v2.4.4’s 465, the implied 456 anchors, §6’s then-463/472, 217 with passing evidence, the 610/610 suite — and on a two-way framing, while §6 and the v2.8.0 changelog had already begun quoting it for the three-way v2.8.0 framing it did not contain. Restated to the current figures and the three-way framing; **the raising date is deliberately unchanged and the debt is no closer to paid** — the reconciliation is a document-wide recount the tester owes, not a side-effect of a sync version.)_ _(v2.12.1, ISS-04 — the same treatment a second time: this entry was still written on its v2.8.0-era figures (471 / 478 / 469 anchors, **224** with passing evidence, the **619/619** suite) while §6 and §9 had already moved to **500** and **493**, and the v2.12.0 changelog was quoting this debt for the post-mint figures it did not contain. Restated to the current three conventions and to run R-20. **The raising date is unchanged and the debt is no closer to paid** — all three bases moved by exactly **+15** at v2.12.0 and not one was reconciled to the others.)_ |
| **TD-RTM-01** | **`UT-0841` … `UT-0848` are each defined TWICE** — once in `apps/web/test/party-creation.test.tsx` and once in `packages/sdk/test/proposals.test.js`. Both files define all eight ids. This breaks CLAUDE.md's ID-scheme rule: *"stable — never reuse or renumber"*. Introduced by the proposals & debate drop (Doc 06 v2.4.1), which reused a block already taken by the party-creation web suite. Found at the v2.5.3 review (2026-08-30) and verified independently | **The matrix cites both meanings of the same ids.** `UT-0841`..`UT-0848` appear against FR-010/FR-011 meaning the **web** tests, and against FR-091/FR-092 meaning the **sdk** tests — including on **FR-011, a COMPLETE Must row**. **No row's evidence is false and no status is affected:** both test files exist, both pass, and each row's cited tests do assert what the row claims. What is broken is **unambiguous resolution** — an auditor following `UT-0845` from FR-011 lands on a proposals test, and an id is no longer a unique address. Left unfixed, it will silently corrupt the next orphan check, which matches ids across files | **engineer** (renumbering is product code; the tester must not edit it) · tester re-runs §4 orphan check after | **OPEN — raised 2026-08-30.** Does **not** block the current merge: no status is wrong today. MUST be fixed before the next drop adds `UT-08xx` ids, and before Gate 2 |

---
### Gate rule
**0 gaps in Must rows = traceability criterion met. There are 119 open Must rows. The gate stays shut.**
