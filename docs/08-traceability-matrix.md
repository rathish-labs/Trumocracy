# Requirements Traceability Matrix (RTM) — Trumocracy

```
Document ID:   RTM-TRUMOCRACY
Version:       2.7.0
Status:        Approved — 08-traceability-matrix-v2.7.0-technical-cycle5.md (PASS 95%,
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
Source:        SRS-TRUMOCRACY v2.16.3 (**Approved**) · SDD-TRUMOCRACY v2.11.2 (**Approved**) §5.2, §10.13.10.1, §10.13.13, §15, §16 · BKLG-TRUMOCRACY v2.3.0 (In Review) ·
               CODE-TRUMOCRACY v2.4.3 (**Approved**) · MTP-TRUMOCRACY v1.0.2 (In Review) ·
               TC-TRUMOCRACY v2.4.4 (**Approved**)
               _(v2.7.0: every pin now carries its status. Four of six are Approved; BKLG v2.3.0
               and MTP v1.0.2 are In Review — an unannotated pin to an unapproved source reads as
               settled evidence when it is not.)_
Last updated:  2026-08-30
Changelog:     v2.7.0 (2026-08-30) — **Rework cycle 4 against
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
| **Must rows COMPLETE** | **16** |
| **Must rows OPEN (gap)** | **122** |
| Must-row completion | **11.6%** |
| Non-Must rows complete / gap | 4 / 19 |
| Total rows complete / gap | 20 / 141 |

### Must-row gaps by primary reason

| Code | Reason | Must rows | Closes in |
|---|---|---|---|
| `G-PHASE3` | The capability is **not implemented** in this drop — MACI, Elections, Recall, Treasury, recovery, relayer, feedback scorer, debate lifecycle, membership nullifier; 8 new Must FRs from CR-v1.1.0; 9 Must FRs with DES from v2.2.0 (FR-112..FR-120); NFR-027 and NFR-028; FR-082..086 (DES-093/094 now assigned, G-TRACE removed, implementation still pending); 5 new Must FRs (FR-122, FR-123, FR-124, FR-131, FR-132); FR-133 (DES-099 assigned, Doc 03 v2.4.1 Approved; no US or TC yet — Phase 3) | **47** | Phase 3 |
| `G-NOMECH` | The design has **no mechanism** for the stated guarantee — the requirement cannot be tested because nothing implements it. **v2.4.0: FR-077 joins this class.** **v2.5.0: FR-080, FR-091 and FR-092 join it** — all three gained a DES from the proposals drop (DES-103/DES-105/DES-106), so their chain gaps closed, but each has a clause of its stated guarantee with no implementation: FR-091's "per published timelines" transitions (`schedule()` unwired) and FR-092's vote-result/consequence/implementation/outcome elements plus third-party reconstruction. **FR-080 joined at v2.5.0 and LEFT at v2.5.1** — the engineer built the two-step consent event rather than recording the gap, and the row closed | **13** | Design fix required first |
| `G-NOENV` | Needs an **environment or instrument that does not exist** — devnet/testnet/staging, CI scanner, device lab | **9** | Phase 2–3 |
| `G-EXTERNAL` | Needs **external evidence** — independent audit, legal review, usability study, reproducible-build attestation | **5** | Phase 2–3 (MS-09/MS-10) |
| `G-UI` | Needs the **client surface** built and verified — accessibility, localisation, plain language, jargon scan, ballot-direction audit (FR-063) | **6** | Phase 3 |
| `G-UNMEASURABLE` | **Not falsifiable or not measurable as written** — needs a requirement restatement, not more testing | **4** | Requires a product/architecture decision |
| `G-CIRCUIT` | Depends on **compiled circuits and real verifiers**; today enforced by `MockVerifierAlwaysTrue` (Doc 06 §7.1–7.2); FR-069/FR-070 also need compiled circuits | **5** | Phase 2 ceremonies |
| `G-TRACE` | The **chain itself is broken** — no `DES` in Doc 03 §5.2 (or no `US` in Doc 05), independently of any test result. **v1.1.0: All 15 pre-existing DES gaps closed (DES-064..086).** v2.0.0: FR-074..FR-111 (38 rows) have no DES — Doc 03 §16 records this as deliberate next-increment phasing, not an error. NFR-007 (no story/NF-backlog item) retains G-TRACE aspect. **v2.2.0: FR-082..086 DES gaps closed (DES-093/094 assigned via Doc 05 v2.2.0 US-0132); those 5 rows reclassified to G-PHASE3.** **v2.2.2: FR-121, FR-125..FR-130 added (7 rows; no DES; recorded-phasing posture, Doc 03 §16; same posture as FR-074..FR-111).** **v2.4.0: FR-077 and FR-130 DES gaps CLOSED by DES-101/DES-102.** **v2.5.0: FR-079, FR-080, FR-090, FR-091 and FR-092 DES gaps CLOSED by DES-103..DES-106 (Doc 03 v2.9.1); all five leave this class — FR-079 and FR-090 to COMPLETE, FR-080/FR-091/FR-092 to G-NOMECH.** | **34** (1 NFR-007 + 33 FRs: FR-074..FR-076/FR-078/FR-081/FR-087..FR-089/FR-093..FR-111/FR-121/FR-125..FR-129) | Immediate: NFR-007; Design phase (next increment): FR-074..FR-076, FR-078, FR-081, FR-087..FR-089, FR-093..FR-111, FR-121, FR-125..FR-129 |
| | **Total** | **123** | |

_Note: Total by-reason count (123) exceeds Must-rows OPEN (122) by 1 because NFR-007 carries both G-NOENV (environment) and G-TRACE (no story) — it is counted in G-TRACE above and appears in the G-NOENV 9-count as well. This pre-existing compound classification does not affect the row count (123 distinct open Must rows). Arithmetic (v2.5.1): 47+13+9+5+6+4+5+34 = 123; distinct open = 122._

### Chain-integrity findings (independent of test status)

- ~~**6 Must FRs have no `DES` in SDD §5.2:** `FR-010`, `FR-011`, `FR-035`, `FR-039`, `FR-056`, `FR-060`.~~ **v1.1.0: ALL CLOSED** — DES-073..077 assigned and DES-040 Satisfies column extended by architect. FR-011 and FR-035 now COMPLETE; others remain open for non-trace reasons.
- ~~**9 Must NFRs have no `DES` in SDD §5.2:** `NFR-006`, `NFR-009`, `NFR-010`, `NFR-011`, `NFR-012`, `NFR-013`, `NFR-015`, `NFR-023`, `NFR-024`.~~ **v1.1.0: ALL CLOSED** — DES-078..086 assigned by architect. Rows remain open for their non-trace reasons.
- **1 Must NFR has no story and no backlog item:** `NFR-007` (reliability/availability).
- **FR-011 and FR-035 are now COMPLETE (v1.1.0).** DES-074 and DES-075 assigned by architect; their tests already passed; the full chain now closes. Recorded as 2 rows converted from open to complete this session.
- **v2.0.0: 38 new Must FRs (FR-074..FR-111) have no `DES` in SDD §5.2.** This is a recorded, deliberate decision (Doc 03 §16 "Next-increment scope") — full DES coverage of FR-074..FR-111 is the next-increment design work. The 38 rows carry G-TRACE as the primary gap code. They are not a documentation error; they are a phasing record.

### Gate-2 verdict — one paragraph, blunt

**Gate 2 cannot be approved today.** Of 138 gating Must rows, **16 close and 122
do not** — an 11.6% completion rate against a gate criterion that requires **zero** open Must rows. **v2.4.0 records the first Must row to close since v1.1.0**: FR-130, closed by the DES-102 design paydown over tests that were already passing. That is what a chain gap looks like when it is paid: no new code, one design element, one row. It also records the opposite lesson — DES-101 paid FR-077's chain gap and the row **still** did not close, because applying completion rule 4 surfaced that half its guarantee (refusal at every subsequent amendment) has no mechanism at either tier. Two DES elements, one closure.
The picture did not worsen because of regressions; it worsened because 49 new Must rows from SRS v2.2.0 were honestly added, all of them open, and because v2.2.0 adds 5 more Must FR rows (FR-122..124/131/132) also open. 15 new test cases in TS-SCAFFOLD pass observed (TC-3470..TC-3486 minus the 3 Blocked), and 28 additional test cases in TS-PARTY inherit green status from Doc 06 v2.2.0 Approved (TC-3489..TC-3516; party-creation logic, emblem bounds, collision detection, cooldown, threshold gate, cap boundary, non-violence clause, BR-020 disclosure) — these together represent genuine Phase-1 progress. Neither batch is enough to close any Must row in full because the seam implementations are IS_INSECURE_MOCK=true and the broader FR guarantees (production storage, enforcement, linkage prevention) are not yet implemented. **One non-Must Should row does close: FR-013 petition expiry and cooldown is now fully tested (TC-3499..TC-3503; UT-0795..0801, UT-0817 all pass inh.); US-0021 meets DoD.** Total rows complete rises from 15 to 16.
The 122 open rows break down as follows: **34 rows carry G-TRACE** (FR-074..FR-081, FR-087..FR-111 have no DES yet — Doc 03 §16 deliberate phasing — and no implementation; FR-082..086 DES gaps now closed by DES-093/094); **47 rows carry G-PHASE3** (capability designed or planned but not built — includes FR-082..086 reclassified from G-TRACE, 5 new scaffold FRs, MACI, Elections, Recall, Treasury, recovery, steward organisation, trust-anchor lifecycle governance, v2.0 governance stores); **13 rows carry G-NOMECH** (FR-077 at v2.4.0; FR-091 and FR-092 at v2.5.0 — FR-080 joined and left the same day, fixed at v2.5.1); **4 rows carry G-UNMEASURABLE**; **9 rows carry G-NOENV**, **6 carry G-UI**, **5 carry G-EXTERNAL**, and **5 carry G-CIRCUIT**. Nothing has been audited, no environment exists, no rollback has been drilled, every proof is produced by a mock verifier, and the entire v2.0 governance architecture (three-tier amendment, steward organisation, trust-anchor lifecycle, transparency dashboard) exists only in design documents. Doc 04's Gate-2 blockers `OPEN-01`, `OPEN-02`, `OPEN-03`, and `OPEN-11` remain open. **The correct reading of this matrix is that Trumocracy is at the end of Phase 1 and Gate 2 belongs after Phase 3, exactly where Doc 13 put it (MS-13, 2027-05-14).** Anyone presenting this drop as launch-ready would be presenting a false green light.

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
| BR-004 | **FR-036** self-nomination, region-scoped | DES-027 | SCR-15 | EP-07 ▸ FE-020 ▸ US-0046, US-0047, US-0048 | TC-0028 | none | ☐ **G-PHASE3** — Elections not implemented; `elections` flag off above dev |
| BR-009 | **FR-037** informed consent; non-candidates never disclosed | DES-028 | SCR-15 | EP-07 ▸ FE-021 ▸ US-0049, US-0050 | TC-0029 | none | ☐ **G-PHASE3** |
| BR-004, BR-008 | **FR-039** election scoped, timetable immutable | DES-076 | SCR-16 | EP-07 ▸ FE-022 ▸ US-0051, US-0052 | TC-0030, TC-1024 | UT-0021, UT-0202 (schedule half only) | ☐ **G-PHASE3** (DES-076 assigned in v1.1.0, closing G-TRACE) |
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
| BR-013 | **FR-065** candidate feedback +3/−1; individual votes private; aggregate tally public | DES-066 · ADR-015 | SCR-23 | EP-07 ▸ FE-031 ▸ US-0074, US-0075 | TC-3313, TC-3314, TC-3315, TC-3316 | none | ☐ **G-PHASE3** — candidate feedback scorer (DES-066, ADR-015) not implemented; depends on Elections (Phase 3) |
| BR-013 | **FR-066** three mandatory pre-election debates per candidate; local conditions, problems, work required; verifiable on-chain record | DES-067 | SCR-22 | EP-07 ▸ FE-032 ▸ US-0076 | TC-3317, TC-3318, TC-3319 | none | ☐ **G-PHASE3** — debate lifecycle (DES-067) not implemented; Elections Phase 3 |
| BR-013 | **FR-067** candidacy only from net-positive post-debate member vote; no auto-renomination of incumbents | DES-067 | SCR-22 | EP-07 ▸ FE-032 ▸ US-0077 | TC-3320, TC-3321, TC-3322 | none | ☐ **G-PHASE3** — post-debate candidacy vote flow (DES-067) not implemented; Elections Phase 3 |
| BR-003 | **FR-068** tenure waiver first 3 months for newly chartered parties; FR-023/FR-028 anti-capture controls fully active | DES-068 | — | EP-03 ▸ FE-030 ▸ US-0078 | TC-3310, TC-3311, TC-3312 | UT-0220 (mandated; anti-capture defence) | ☐ **G-PHASE3** — tenure-waiver flag (DES-068) not implemented; depends on FR-064 single-party membership |
| BR-002 | **FR-069** deterministic enrolment nullifier Poseidon(stable_id_secret, enrolment_scope); five in-circuit checks (trust-anchor hash is public signal[4]; on-chain binding check per SC-01/DES-069) | DES-069 · ADR-017 | — | EP-01 ▸ FE-033 ▸ US-0079 | TC-3323, TC-3324, TC-3325, TC-3343, TC-3345 | none | ☐ **G-CIRCUIT** — in-circuit enrolment nullifier (DES-069); personhood_enrol circuit not compiled; MockVerifierAlwaysTrue in place |
| BR-002 | **FR-070** pluggable credential adapter; three candidate types: eIDAS 2.0, ICAO Doc 9303 NFC, offline paper KYC (e.g. Aadhaar) | DES-070 · ADR-017 | — | EP-01 ▸ FE-034 ▸ US-0080 | TC-3326, TC-3327, TC-3328, TC-3329, TC-3344 | none | ☐ **G-CIRCUIT** — credential adapter interface (DES-070); circuits + adapter infrastructure not deployed |
| BR-002 | **FR-071** nullifier collision routes to recovery state machine; key rotates; membership, tenure, history survive; no second identity | DES-071 · ADR-018 | — | EP-05 ▸ FE-035 ▸ US-0081 | TC-3333, TC-3334 | none | ☐ **G-PHASE3** — nullifier-collision recovery state machine (DES-071, ADR-018) not implemented |
| BR-002 | **FR-072** seven-day recovery delay; active-key veto window ≥ delay; no voting during delay; notification at initiation | DES-071 · ADR-018 | — | EP-05 ▸ FE-035 ▸ US-0082 | TC-3335, TC-3336, TC-3337, TC-3338, TC-3339 | none | ☐ **G-PHASE3** — recovery 7-day delay and veto guard (DES-071, ADR-018) not implemented |
| BR-002 | **FR-073** government eID sole enrolment-nullifier-minting class per region (Phase 1); availability-only classes MUST NOT mint | DES-072 · ADR-016 | — | EP-01 ▸ FE-036 ▸ US-0083 | TC-3330, TC-3331, TC-3332 | none | ☐ **G-PHASE3** — government-eID class enforcement (DES-072, ADR-016) not deployed to PersonhoodRegistry |

**Must FR subtotal (pre-v2.0.0 rows): 54 rows · 12 complete · 42 open.**

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

| BR-016, BR-013 | **FR-081** Candidate tier from post-debate member vote per FR-067; eligibility by code; no human approval or auto-renomination | none | none | EP-04 ▸ FE-039 ▸ US-0091 | TC-3407 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017, BR-009 | **FR-082** Supporter-tier: only nullifier stored; no attributable record; no profile surface; NFR-001/002/024 apply unconditionally | DES-093/DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0092, US-0132 | TC-3408, TC-3470, TC-3474 | TC-3470 Pass (obs.) · UT-0750; TC-3474 Pass (obs.) · UT-0757 | ☐ **G-PHASE3** — DES-093/094 assigned (v2.2.0, UI display layer only); US-0132 closes the US gap; full storage/enforcement/linkage-prevention design pending; IS_INSECURE_MOCK=true |
| BR-017, BR-005 | **FR-083** Worker/Candidate-tier: public participation record from consent event; ballot direction never disclosed in any tier; FR-048 elected-rep exception | DES-093/DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0093, US-0132 | TC-3409, TC-3471, TC-3474 | TC-3471 Pass (obs.) · UT-0751; TC-3474 Pass (obs.) · UT-0757 | ☐ **G-PHASE3** — DES-093/094 assigned (v2.2.0, UI display layer only); US-0132 closes the US gap; full participation-record data model and ballot-direction non-disclosure enforcement pending |
| BR-017 | **FR-084** full disclosure schedule published before any declaration window; no post-declaration demand outside schedule | DES-093/DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0094, US-0132 | TC-3410, TC-3472, TC-3474 | TC-3472 Pass (obs.) · UT-0752; TC-3474 Pass (obs.) · UT-0757 | ☐ **G-PHASE3** — DES-093/094 assigned (v2.2.0, UI display layer only); US-0132 closes the US gap; disclosure schedule publication and enforcement not yet designed |
| BR-017, BR-009 | **FR-085** informed consent irrevocable for term; withdrawal before nomination window closes permitted; pre-nomination disclosure data (confidential-class) destroyed on withdrawal (OI-16 adopted) | DES-093/DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0095, US-0132 | TC-3411, TC-3474, TC-3476 | TC-3474 Pass (obs.) · UT-0757; TC-3476 Blocked | ☐ **G-PHASE3** — DES-093/094 assigned (v2.2.0, UI display layer only; TC-3476 enrolment disclosure affordance Blocked); US-0132 closes the US gap; consent lifecycle and data-destruction mechanics not yet designed |
| BR-017, BR-009 | **FR-086** prior Supporter-period activity remains anonymous permanently after public role taken; no linkage through any data or combination of public outputs | DES-093/DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0096, US-0132 | TC-3412, TC-3474 | TC-3474 Pass (obs.) · UT-0757 | ☐ **G-PHASE3** — DES-093/094 assigned (v2.2.0, UI display layer only); US-0132 closes the US gap; cross-tier unlinkability guarantee for role-changers not yet designed |
| BR-015, BR-014 | **FR-087** committees formed; sole permitted output is proposals entering ordinary lifecycle; no special precedence; composition and minutes public | none | none | EP-11 ▸ FE-041 ▸ US-0097 | TC-3413 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015, BR-008 | **FR-088** committees MUST NOT hold capabilities that can change who wins, who votes, or who is a member; non-permitted configuration rejected by code | none | none | EP-11 ▸ FE-041 ▸ US-0098 | TC-3414 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015 | **FR-089** committee membership expires at term end by code; continuation requires fresh member vote; FR-041 discipline | none | none | EP-11 ▸ FE-041 ▸ US-0099 | TC-3415 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015, BR-003 | **FR-090** proposal authorship public; any Worker-or-above member may submit a competing proposal with equal standing in the same decision window (OI-14 adopted) | **DES-104** | **SCR-12** | EP-11 ▸ FE-041 ▸ US-0100 | TC-3416, **TC-3543, TC-3545, TC-3546, TC-3548, TC-3549, TC-3550, TC-3551** | UT-0089, UT-0094, UT-0095 (**inh.** protocol Doc 06 v2.4.1); UT-0832..UT-0838 (**inh.** sdk); UT-0874..UT-0877 (**inh.** web) | ✅ **COMPLETE** _(was G-TRACE + G-PHASE3; closed v2.5.0)_ — **DES-104** (Doc 03 v2.9.1 §10.13.13) closes the chain gap with **SCR-12** bound, and every clause of the stated guarantee has its own passing test. **Authorship is public** — a Worker's authorship is recorded publicly (UT-0832) and the surface **names both authors**, so agenda-setting is visible (UT-0875). **Any Worker-or-above member may submit a competing proposal** — gated on self-declared tier by a rule that takes no approver (UT-0089), refused for a non-member whatever tier they claim (UT-0833). **Equal standing in the same window** is proven both positively and as an absence: a second proposal joins the first author's window, and **differently-phrased spellings of one question group into ONE window** (UT-0835, UT-0095) — without which "same window" would be defeated by rephrasing; the first author holds **no** withdraw, reject, reorder, demote, merge or veto path (UT-0836); **no proposal carries a weight, rank or priority field** and `isOriginal` is provenance only (UT-0837); and the surface renders both with the **same affordances**, offers **no** cross-author control, and marks the tag as provenance, not precedence (UT-0874, UT-0876, UT-0877). Entry closes exactly when voting starts (UT-0838, UT-0094). **Revisit flag DISCHARGED — RULED 2026-08-30** (Rathish, Human Approver; artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md §1; Doc 03 v2.10.0 §10.13.13(b)). The flag this row carried at v2.5.0–v2.5.2 read: *if the approver rules PROPOSING a counting action, this row and TC-3545 must be revisited.* **The approver ruled the other way.** PROPOSING is **NOT** an FR-123 counting action — authoring is OPEN participation, because gating it on verification status would be a participation restriction FR-020 prohibits; the commissioning brief that said otherwise is superseded by that constraint. **The FR-conformant reading closed here is confirmed correct; this row and TC-3545 stand unchanged.** The OI-14 Worker-tier condition is unchanged — it sits on the orthogonal privacy-disclosure axis and is self-declared with no approver (**UT-0089**, which asserts `canAuthorProposal.length === 1` so no approver can be passed; **UT-0832**, the tier requirement). That it is **not a verification gate** is asserted by **UT-0834** — the service holds no verifier and `fileProposal` takes none. _(v2.7.0: all three claims had been attributed to UT-0089/UT-0832; the no-verification-gate half is UT-0834's.)_ **NEW REVISIT FLAG (v2.6.0) — Doc 03 §16 `Q16` / Doc 02 §13 (i), raised 2026-08-30:** FR-090 requires competing proposals to be voted **in the same decision window**; the ballot model gives each proposal an **independent binary ballot**; and DES-104 deliberately exposes no window-closing, merging or ranking capability. **Two competing proposals can therefore both pass, and no rule says what the party then gets.** **This row stays ✅ COMPLETE and that is the correct call** — Q16 concerns *post-vote window resolution*, which FR-090's stated guarantee (public authorship · equal standing · same window · no cross-author control) does not require, and which this layer does not hold; all four completion rules still close. But Q16 **names FR-090** and is OPEN, so it is flagged here in the FR-051/FR-130 pattern rather than left invisible: **if the resolution rule that answers Q16 alters what "the same decision window" guarantees, this row and TC-3548/TC-3549 must be re-derived.** The answer MUST NOT be a window-closing capability — that absence is the anti-capture control this row certifies |

| BR-014, BR-008 | **FR-091** proposal lifecycle stages (proposal → review → discussion → debate → vote → decision → implementation → measurement) code-enforced in sequence, **transitions executed by code per published timelines**; no stage skipped or human-vetoed | **DES-105** | **SCR-12** | EP-05 ▸ FE-042 ▸ US-0101 | TC-3417, **TC-3552, TC-3553, TC-3554, TC-3555** | UT-0090..UT-0094 (**inh.** protocol Doc 06 v2.4.1); UT-0839..UT-0842 (**inh.** sdk); UT-0878..UT-0880 (**inh.** web) | ☐ **G-NOMECH** _(was G-TRACE + G-PHASE3; reclassified v2.5.0)_ — **DES-105 closes the chain gap** and the **order** guarantees are covered completely: the eight published stages advance **one step at a time** to MEASUREMENT and then refuse (UT-0090, UT-0841); a **skip** is refused *naming what was skipped*, a **reversal** is refused so deliberation cannot be re-run for a better answer, a **no-op** is refused, and an **unknown stage** is rejected rather than treated as position zero (UT-0091, UT-0092); the capability-absence set holds at all three layers — no override/force/skip-to, `advanceStage()` takes **no target, no force, no skip and no actor**, and the surface offers no skip control (UT-0093, UT-0842, UT-0879); and the three deliberative stages produce **records, never outcomes**, open to every member including open-tier (UT-0094, UT-0839, UT-0840, UT-0880). **Rule 4 fails on one clause:** FR-091 requires transitions "executed by code **per published timelines**". `governance.js` `schedule()` exists but is **not wired into the proposal service** — the demo advances by a button, which can only ever move one step because the service exposes no other move (Doc 06 §7 #25 records this as owed). The **anti-capture half is done; the automation half is not**, and a row does not close on a fragment. **Taxonomy question RULED 2026-08-30 — this row is unaffected** (Rathish, Human Approver; Doc 03 v2.10.0 §10.13.13(a)). This row previously recorded that FR-091's stages and ADR-008's `PROPOSAL_STATE` are a different taxonomy, that a reconciliation was owed, and that it might bear on what the row must test. The ruling is that they are **complementary, each canonical at its own layer** — FR-091 owns the public process, `PROPOSAL_STATE` owns the ballot; their subjects differ (a decision window vs one proposal's ballot, one-to-many at resolution), so no reconciliation was ever owed in the sense of choosing between them. **The published stage set is UNCHANGED, so it bears on nothing this row tests.** A normative derivation rule is recorded and it binds **BOTH versions**: the **ballot layer** is the sole authority on ballot state — the DES-096 database backing in v1, `Governor.State` at the v2 seam — and the `VOTE`/`DECISION`/`IMPLEMENTATION` stages MUST derive from whatever backing `IBallotService` is bound to, never be tracked independently. It is a **build obligation, not a v1 test obligation today**, because the proposals layer built so far derives nothing — it stops at `admitToBallot()` and hands off. _(v2.6.1: this read "recorded for v2 … a v2-seam obligation", the scope Doc 03 v2.11.0 corrected after review.)_ **This row therefore carries exactly ONE GAP: the unwired "per published timelines" clause above** — that clause alone is what holds it open, and closing it closes the row. **One related item is tracked elsewhere and is deliberately NOT a gap in this row:** Doc 02 §13 **(h)** / Doc 03 §16 **Q15** — FR-091's *text* does not say what becomes of a DEFEATED or CANCELLED decision. That is a requirement clarification owed to the product-owner, raised by the same 2026-08-30 mapping; it does not affect this row's status (the proposals layer holds no vote, so no window can be defeated and no test can turn on it) and is named here so the sentence above is not read as claiming FR-091 has no other open item of any kind |

| BR-014, BR-019 | **FR-092** permanent decision trail for every decision (proposal(s), authorship, deliberation, vote result, enacted consequence, implementation status, measured outcome); reconstructable from public data alone | **DES-106** | **SCR-12** | EP-05 ▸ FE-042 ▸ US-0102 | TC-3418, **TC-3559, TC-3560** | UT-0846, UT-0847, UT-0848 (**inh.** sdk Doc 06 v2.4.1); UT-0883 (**inh.** web) | ☐ **G-NOMECH** _(was G-TRACE + G-PHASE3; reclassified v2.5.0)_ — **DES-106 closes the chain gap** and the **append-only** property is genuinely proven: the trail records window opening, every proposal, deliberation, stage change and admission **in order**; it **cannot be rewritten by a caller** and the store exposes **no delete path**; reads return **copies**, so a caller mutating what it received changes nothing; timestamps come from the injected clock, so a run is reproducible (UT-0846, UT-0847, UT-0848). **Rule 4 fails on two independent grounds.** **(i) The trail is incomplete against its own enumeration.** FR-092 names the **vote result**, the **enacted consequence**, **implementation status** and **measured outcome** among the things the trail MUST comprise. This layer records none of them — indeed **TC-3558/UT-0845 asserts the service never casts, stores or counts a vote**, which is correct design and simultaneously means four of the seven enumerated elements have no recording mechanism. **(ii) Third-party reconstruction is not built.** FR-092 requires the trail be "reconstructable end-to-end by any **third party** from **public data alone**"; the trail lives in the application store and needs DES-097 audit-record anchoring (Doc 06 §7 #24; Doc 13 stage S-8). To its credit the drop does not paper over this — the surface **states plainly** that the record is not yet independently checkable in v1 (`trail-v1-note`, UT-0883, TC-3560), which is the honest posture and is also the reason the row cannot close |

| BR-013, BR-004 | **FR-093** candidate selection on published schedule (nomination, question phase, debates per FR-066, post-debate vote per FR-067, election); unanswered member questions visibly recorded | none | none | EP-07 ▸ FE-043 ▸ US-0103 | TC-3419 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
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
| BR-009, BR-017, BR-006 | **FR-124** verified-status property is private to the holder; PrivacyStatus component refuses self-view; backing-aware 'ver' copy (absent/false/true/malformed `backing.isVerified` four-path coverage) | DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0132 | TC-3473, TC-3474, TC-3475 | TC-3473 Pass (obs.) · UT-0754..UT-0756; TC-3474 Pass (obs.) · UT-0757; TC-3475 Pass (obs.) · UT-0758 | ☐ **G-PHASE3** — DES-094 assigned; component passes for the UI layer; verified-status backend enforcement and full privacy guarantee pending |
| BR-003, BR-006 | **FR-125** spam-control invite-gating: invite-based fast path permitted; non-invite fallback MUST always remain available and must never be the sole door; determined real person can always join without an invite; referral edge verified and discarded immediately; counted-membership path ungated (OI-19 RESOLVED at v2.4.0; finalised — implementation-ready pending DES) | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (Doc 03 §16 deliberate next-increment phasing); no implementation in this drop |
| BR-009, BR-006 | **FR-126** on-device credential processing: raw credential (Aadhaar XML, eIDAS wallet attributes, ICAO NFC, mDL data) processed exclusively on user device; only ZK proof and derived nullifier transmitted; raw credential never sent to platform or any intermediary; strengthens FR-003 | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (Doc 03 §16 deliberate next-increment phasing); on-device prover and witness preparation (ADR-017) designed but formal DES owed; no implementation in this drop |
| BR-006, BR-009 | **FR-127** duplicate enrolment detection by nullifier collision only: no identity record comparison, name-matching, biometric comparison, or document-number lookup in any duplicate-detection path; second attempt by same person produces same deterministic nullifier (FR-069) and collides on-chain | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (Doc 03 §16 deliberate next-increment phasing); nullifier-collision posture is C-03 design (ADR-017) recorded as normative; formal DES owed; no implementation in this drop |
| BR-009, BR-006 | **FR-128** no stored identity data in any form (raw, reversible, encrypted-but-decryptable); acceptance test is the subpoena test: the platform MUST be technically unable to disclose who belongs to a party on court order | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (Doc 03 §16 deliberate next-increment phasing); subpoena-test posture is Decision 3/ADR-017 recorded as normative; formal DES owed; no implementation in this drop |
| BR-006, BR-012, BR-021 | **FR-129** Charter-layer guard on single-issuer permanence: making single-issuer operation permanent (beyond dated Phase-1 scope) MUST require Charter-level amendment and re-entry through both gates; configuration or deployment-default extension MUST be blocked; Charter-tier classification (FR-118 vs FR-119) owed to architect (OI-20 ruling, Rathish, 2026-08-20) | none | none | none | none | none | ☐ **G-TRACE + G-PHASE3** — no DES assigned (recorded-phasing posture, Doc 03 §16); Charter-tier classification owed to architect; no implementation in this drop |
| BR-002, BR-012 | **FR-130** provisional-party membership cap: a platform-activated party whose legal registration has not yet been verified MUST be capped at 100 members; cap lifts automatically by code on verified legal registration (FR-075); no operator or manual path may lift the cap early; anti-capture invariant (C-02 ruling, Rathish, 2026-08-22) | **DES-102** | **SCR-09, SCR-11** | EP-03 ▸ FE-009 ▸ US-0131 | TC-3511..TC-3516, TC-3528, TC-3529 | UT-0802..UT-0811 (**inh.** sdk Doc 06 v2.2.0); UT-0852..UT-0856 (**inh.** web); UT-0825 (**inh.** sdk Doc 06 v2.3.2); UT-0862 (**inh.** web Doc 06 v2.3.2) | ✅ **COMPLETE** _(was G-TRACE; closed v2.4.0)_ — **DES-102** (Doc 03 v2.8.1 §10.13.11) assigned with SCR-09/SCR-11 bound, closing the last missing link. All four rules now hold, and each clause of the stated guarantee has its own passing test: **cap at 100 when unverified** — the 100th join succeeds, the 101st is refused `PROVISIONAL_CAP_REACHED` unconditionally, and a leave frees **exactly one** slot, so the cap tracks ACTIVE membership rather than cumulative joins (UT-0825, UT-0802..0805, UT-0862); **lift by code only on verified registration** — status transitions automatically with no admin call in the path (UT-0809..0811, TC-3515); **no operator or manual early-lift path** — asserted as first-class capability-absence: no admin API, configuration flag, environment variable or code path raises the cap (UT-0806, TC-3514). **Recorded residual, disclosed not hidden (DES-102 rule 8 + its residual):** in v1 the invariant is enforced at the application/Postgres write boundary — the only enforcement point v1 has (ADR-024 §(b): no on-chain membership in v1) — and audit-record publication makes an over-cap party externally **detectable**, i.e. tamper-EVIDENCE, not tamper-PREVENTION. Tamper-prevention arrives with the v2 `Party.join()` guard (DES-102 rule 7), which is **not yet built**: `Party.join()` today increments `memberCount` with no cap check. That is an enforcement-tier upgrade, not an unmet clause of FR-130, and it is exactly the posture on which FR-011/FR-020/FR-022 already stand COMPLETE — an operator with direct database access can bypass any v1 application boundary, and holding FR-130 alone to a stricter bar would be special-pleading. **This row MUST be revisited when on-chain membership goes live**, at which point the uncapped `Party.join()` becomes a live bypass rather than a dormant one |
| BR-005, BR-009 | **FR-131** ballot seam with honest pre-action notices: cast records ballot without revealing direction; silent ballot-change (last cast counts); deterministic tally-hash for audit; cast refused without eligibilityRef; results embargo while ballot open; audit-contract publication | DES-096 · ADR-024 | none | EP-06 ▸ FE-058 ▸ US-0134 | TC-3476, TC-3481, TC-3482, TC-3483, TC-3484, TC-3485, TC-3486, TC-3487, TC-3534, TC-3535 | TC-3482..TC-3486 Pass (obs.) · UT-0770..UT-0776; TC-3534, TC-3535 Pass (inh.) · UT-0864, UT-0869 (**inh.** web Doc 06 v2.3.2); TC-3476/TC-3481/TC-3487 Blocked | ☐ **G-PHASE3** — DES-096 assigned; IS_INSECURE_MOCK=true; seam passes for cast/change/tally/refusal/embargo (5 TCs obs.); production ZK ballot pending Phase 3. **v2.3.0 — clause (d) is now BUILT, but only at one surface.** The four-clause non-dismissable open-tier notice is implemented and tested at the **parties-directory counting surface**: all four clauses (i)–(iv) render, the refusal comes **after** them inside the notice, `queryAllByRole('button')` within the notice is the **empty list** (no dismiss control), and the refused action changes nothing (UT-0864, TC-3534). Clause (b) is also closed as an honesty fix: the join copy no longer carries the v2-only claim "Nobody gets that list" and instead discloses that "our own records can link your account", rendered on every join panel (UT-0869, TC-3535). **TC-3481 stays Blocked and the row stays OPEN** — TC-3481 is written against the **ballot** surfaces SCR-13/SCR-14, which are not built in this drop (Doc 06 §7 #21), and TC-3487 (audit-contract endpoint) is still unwired. Partial delivery is recorded, not promoted to a close |
| BR-006, BR-012 | **FR-132** IEligibilityVerifier allowlist-only action-type shape (DES-100): only counting actions permitted; JOIN, LEAVE, account-creation throw `IllegalActionType`; IS_INSECURE_MOCK=false with no vendor bound throws `VendorNotBound` | DES-095, DES-100 · ADR-024, ADR-025 | none | EP-01 ▸ FE-057 ▸ US-0133 | TC-3479, TC-3480 | TC-3479 Pass (obs.) · UT-0765; TC-3480 Pass (obs.) · UT-0766..UT-0769 | ☐ **G-PHASE3** — DES-095/DES-100 assigned; allowlist shape and VendorNotBound guard pass; production enforcement pending Phase 3 |
| BR-012, BR-003 | **FR-133** v1 spam-resistance flag-don't-block layer: VoIP/virtual-number intelligence + velocity/device anti-fraud; flagged numbers rate-limited, never hard-blocked; false-positive path first-class; flag-don't-block scope limited to spam signals only — government-ID eligibility gate (FR-132 §(b)) is a hard gate not subject to flag-don't-block | DES-099 | none | none | none | none | ☐ **G-PHASE3** — DES-099 assigned (Doc 03 v2.4.1 Approved); no US or TC yet — recorded-phasing posture; TC OPEN — Phase 3 |

**Must FR subtotal (v2.5.4): 114 rows · 16 complete · 98 open.** _(Corrected v2.5.4 — the line had been left at its v2.2.2 values, "12 complete · 102 open", through four drops that closed rows. The 16 complete are the 15 rows marked ✅ **COMPLETE** plus FR-051, marked ✅ **COMPLETE (conditional)**. Reconciles with §6: 98 open FRs + 24 open NFRs (§3.2 has no complete row) = **122 open** of **138** Must.)_

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
| BR-007 | **NFR-011** WCAG 2.2 AA | DES-081 | US-0045, US-0070, US-0132 | TC-2250–TC-2255, TC-3488 | UT-0704, UT-0721 (two components, not executed); TC-3488 Pass (obs.) · UT-0753 (accessible-name aria-label, packages/ui/test/PrivacyStatus.test.tsx line 46) | ☐ **G-UI** — no automated a11y gate; no manual screen-reader pass has been performed (DES-081 assigned in v1.1.0, closing G-TRACE); TC-3488/UT-0753 (TS-SCAFFOLD accessible-name check) pass; full WCAG 2.2 AA automation gate and screen-reader pass remain pending |
| BR-007 | **NFR-012** device & bandwidth floor | DES-082 | US-0012, US-0070 · NF-05 | TC-2080, TC-2083, TC-2084, TC-2382 | none | ☐ **G-UI** — offline draft composition (US-0012) has no implementing code or test (DES-082 assigned in v1.1.0, closing G-TRACE) |
| BR-007 | **NFR-013** 8 locales incl. RTL | DES-083 | US-0070 | TC-2330, TC-2333 | none | ☐ **G-UI** — no locale files, no string-coverage gate (DES-083 assigned in v1.1.0, closing G-TRACE) |
| BR-008 | **NFR-014** censorship resistance | DES-041, DES-050, DES-051 · ADR-001 | NF-06 | TC-2423, TC-2670, TC-2671 | UT-0054 (**obs.**, escape hatch cannot be disabled) | ☐ **G-NOENV** — the blocking simulation needs an isolated network lab that does not exist |
| BR-009 | **NFR-015** legal / regulatory posture | DES-084 | US-0003 | TC-2730, TC-3253 | none | ☐ **G-EXTERNAL** — per-jurisdiction legal review is a launch condition; the three pilots are still unnamed (`OI-04`) (DES-084 assigned in v1.1.0, closing G-TRACE) |
| BR-007 | **NFR-016** key recovery ≥ 99% in 14 days | DES-042 · ADR-002 | US-0068 | TC-0034, TC-2700, TC-2701 | none | ☐ **G-PHASE3** — recovery is not implemented |
| BR-008 | **NFR-017** governed upgradeability, 0 unilateral paths | DES-039 · ADR-010 | US-0064 | TC-1600, TC-1606, TC-1613, TC-2521, TC-2523, TC-2750 | UT-0310, UT-0312, UT-0344 | ☐ **G-EXTERNAL** — "0 unilateral paths **at audit**" needs the audit; the storage-layout control (TC-1613) and the registry-timelock assertion (TC-2523) are also unwritten |
| BR-008 | **NFR-020** rollback < 15 min; flags kill-switchable; **open-ballot freeze** | DES-037 | NF-07 | TC-1610, TC-1611, TC-2425, **TC-2426** | UT-0053, UT-0055 (**obs.**), UT-0360, UT-0361 | ☐ **G-NOMECH — OPEN-03** the rollback drill has never run, and **`FeatureFlags` has no notion of an in-flight ballot**, so the second clause has no mechanism |
| BR-008 | **NFR-021** open source + reproducible builds | DES-045 · ADR-011 | US-0062 | TC-1206–TC-1208, TC-2671, TC-1803 | UT-2577, UT-2583, UT-0515 (**obs.**), UT-0415 | ☐ **G-EXTERNAL** — differential agreement is strong, but reproducibility has not been verified by an independent party |
| BR-007 | **NFR-022** usability, SUS ≥ 75 | DES-040 | US-0015, US-0070 | TC-3250–TC-3253 | none | ☐ **G-EXTERNAL** — no moderated study (n ≥ 200 per locale) has been run |
| BR-007, BR-009 | **NFR-023** plain language, no jargon, safe notifications | DES-085 | US-0003, US-0015, US-0034, US-0045, US-0066 | TC-2331, TC-2332 | none | ☐ **G-UI** — no jargon scanner and no readability check exist (DES-085 assigned in v1.1.0, closing G-TRACE) |
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
| FR-038 consent wording | Should | DES-028 | US-0048, US-0049 | TC-0029 | ☐ Phase 3 |
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

**Non-Must subtotal (v2.2.4): 23 rows · 4 complete · 19 open.** FR-013 Should row newly complete (v2.2.4); FR-012 also complete. Five FRs (`FR-005`, `FR-049`, `FR-050`,
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
| `UT` in the repository with no `TC` mapping | **0 material** — all 288 observed/inherited tests fall inside a mapped group. ⚠ Same caveat |

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
| `UT` ranges present in code but **missing from the Doc 06 §3 inventory** | **2** — `UT-0600…0612` (deployment safety, 13 tests) and `UT-0700…0742` (`apps/web`, 16 tests). Raised as **TD-07-01** (Medium), owner engineer |
| `UT` ranges reserved but empty | `UT-2000…2499` circuits — **no suite exists**, circuits uncompiled |
| Regression tests for the four Doc 06 §5 defects, all carried as first-class cases | **Yes** — TC-2603 (`UT-0325/0326`), TC-2600 (`UT-0109/0109b`), TC-2641 (`UT-0109c`), TC-1610 (`UT-0360/0361`) |

## 5. Risk → control → test

| RISK | Control (design) | Verified by | Verdict |
|---|---|---|---|
| RISK-01 Sybil inflation | DES-001, DES-002, DES-010, DES-011 | TC-2600–TC-2605, TC-1001–TC-1004 | **Partial** — namespace collision and nullifier-burn defences pass; cross-type residual (TC-2601) and the per-region cap (TC-2642) are open |
| RISK-02 Coercion & vote-buying | DES-023, DES-024, DES-063 | TC-2610–TC-2614 | **Not mitigated at v1** — MACI is Phase 3 (OPEN-01); the client discloses the limitation |
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
| FR — Must | 114 | 114 | **16** | **98** |
| FR — Should/Could | 19 | 14 (5 lack a `US`) | 4 | 15 |
| NFR — Must | 24 | 23 (1 lacks a `US`: NFR-007) | **0** | **24** |
| NFR — Should | 4 | 2 | 0 | 4 |
| Risks | 19 | 19 | 4 fully mitigated & proven | 15 |
| Stories | 134 | 134 (all carry Gherkin AC) | 17 meet the Definition of Done | 117 |
| Test cases | 472 | 472 | 217 with passing evidence (129 inh. · 88 obs.) | 255 not executed or not executable |
| Screens | 23 | 23 mapped | 0 verified (no UI suite executed) | 23 |

**TC count convention (Test cases row — v2.5.4 reconciliation; ISS-01 carried since v2.5.0 now FIXED, together with a second arithmetic error found at v2.5.3 review):** Doc 07 at **v2.4.4** uses **463 TC row anchors** = 299 original + 70 TS-GOV2 + 19 TS-SCAFFOLD + **29 TS-PARTY, incl. the newly minted TC-3541** + 24 TS-MEMBERSHIP + **22 TS-PROPOSALS** (TC-3542..TC-3563). _(Both errors corrected here. **(i)** The breakdown previously omitted the 22 TS-PROPOSALS anchors and summed to **441** while asserting 463 — the pre-proposals breakdown left standing under the post-proposals total. **(ii)** The evidence line previously opened "The 195 'with passing evidence' = 107 + 88", the pre-proposals figures, contradicting the authoritative dashboard beside it. Neither was ever load-bearing — the dashboard and §3 tables were right throughout — but a convention note that cannot be added up teaches a reader to distrust the table it explains, which is why it is not carried a third time.)_ This dashboard uses the **expanded** convention: 463 − 1 + 10 = **472 designed test cases** (one anchor TC-3200-TC-3209 expands to 10 exploratory charters; see Doc 07 §2 convention note). The **217** 'with passing evidence' = **129 Pass (inh.) + 88 Pass (obs.)** per Doc 07 §2 footer; the inherited bucket is 55 contract suite + 28 TS-PARTY (Doc 06 v2.2.0) + **22 TS-PROPOSALS** (Doc 06 v2.4.2) + **24 TS-MEMBERSHIP** (TC-3517..TC-3540; sdk/web membership suites inherited from Doc 06 v2.3.2 Approved, R-09..R-12 2026-08-29). The 255 'not executed or not executable' = 472 − 217 = 255, **unchanged across both recent drops**: every TS-MEMBERSHIP case (24) and every TS-PROPOSALS case (22) carries passing evidence and none is Blocked, so neither drop added to this bucket. `TC-3541` is the one exception — **No mechanism**, so it joins this bucket rather than the passing-evidence one. _(v2.7.0: this sentence had accumulated **two** conflicting trailing clauses across drops — "because all **20** TS-PROPOSALS cases…" followed by "**unchanged**, because all **24** new cases…", each a leftover from a different drop, giving two different reasons for one figure and two different counts. Carried five cycles as a Low. Merged into one statement covering both drops; the arithmetic was never in doubt.)_ **Honesty note:** the tester executed the full suite on 2026-08-29 during the Doc 06 v2.3.2 cycle-3 review and observed **542/542 green**, which covers every TS-PARTY and TS-MEMBERSHIP file; those cases are nevertheless counted in the **inh.** bucket, not promoted to **obs.**, because the observation was at file granularity during a review run rather than case-by-case (Doc 07 §2 corroboration note). The count understates the evidence rather than overstating it.


**Definition of Done check (CLAUDE.md).** A story is done only when its RTM row is complete.
**The current figure is 17 of 134** — see the running per-drop checks below, which are authoritative;
the v2.2.4 baseline list that follows is retained as the starting point, not as the current total.
_(Corrected v2.5.4: this lead-in still read "13 of 134" while the v2.5.0 check below had already
carried the running total to 17 — a reader stopping at the lead-in got a stale number. The path is
13 (v2.2.4 baseline) → +US-0131 (v2.4.0) → +US-0089, US-0100 (v2.5.0) → +US-0090 (v2.5.1) = **17**.)_
**v2.2.4 baseline — 13 of 134 stories:** US-0019, US-0021, US-0024, US-0025, US-0026, US-0027, US-0031, US-0033,
US-0034, US-0035, US-0036, US-0037, US-0028. **US-0021 newly meets DoD (v2.2.4)** — FR-013 Should row closes (TC-3499..TC-3503, UT-0795..0801, UT-0817 all pass inh.; full chain BR→FR-013→DES-009→US-0021→TC closes). The 47 new stories (US-0084..US-0130) and the 13 pre-v2 stories (US-0071..US-0083) are not done (capabilities not yet implemented). US-0132/0133/0134 (TS-SCAFFOLD) are not done — seam is IS_INSECURE_MOCK=true and the full FR guarantees are not yet implemented. US-0011/0013/0015/0022/0087/0131 are **Status: Partial** — logic+UI complete and tested (IS_INSECURE_MOCK=true) but their Must RTM rows stay OPEN (production store, DES assignment, or dwell period pending). Every other story is **not done**.

**v2.3.0 DoD check (join/membership drop) — no story newly meets the bar.** This was checked story by story rather than assumed. **US-0024** (join without approval) and **US-0025** (leave at will) gain substantial new evidence (TC-3517..TC-3522, TC-3526..TC-3527, TC-3536) but were **already** among the 13 done — FR-020 and FR-022 were COMPLETE before this drop, so the count does not move. **US-0073** (single party at a time) is **not done**: its FR-064 row stays OPEN pending the product-owner ruling on Flag `FR-064-SEMANTICS` *and* the unbuilt DES-065 nullifier. **US-0131** stays **Partial**: FR-130 is now well tested at the 100/101 ACTIVE-member boundary but still has **no DES** (G-TRACE) — a chain defect no test can close. **US-0133 / US-0134** stay **not done**: FR-122/FR-123 remain stub-gated (IS_INSECURE_MOCK=true) and FR-131 has clause (d) built at the parties-directory surface only, with the SCR-13/SCR-14 ballot surfaces unbuilt. **Stories meeting DoD: 13 of 134 — unchanged.**

**v2.5.0 DoD check (proposals & debate drop) — two stories newly qualify, three do not.** Checked story by story. **US-0089** (participation tiers) and **US-0100** (public authorship / competing proposals) now meet the bar: FR-079 and FR-090 close, so their chains `BR → FR → DES-103/DES-104 → (SCR-12 for US-0100) → US → TC` close end to end. Total **14 → 16 of 134**. **US-0090 DOES, as of v2.5.1** — the informed-consent event was built (Doc 06 v2.4.2) and FR-080 closes, taking the total to **17 of 134**. **US-0101 does NOT** — FR-091 stays open on the unwired timeline clause. **US-0102 does NOT** — FR-092 stays open on four unrecorded trail elements and unbuilt third-party reconstruction. **US-0031** (unscreened proposals) was already done via FR-024 and gains evidence, not status.

**v2.4.0 DoD check (DES paydown) — one story newly qualifies.** **US-0131 (provisional membership cap) now meets DoD**: FR-130 closes at v2.4.0, so its chain `BR-002/BR-012 → FR-130 → DES-102 → SCR-09/SCR-11 → US-0131 → TC-3511..TC-3516/TC-3528/TC-3529` closes end to end. It moves from **Status: Partial** to **done**, taking the total from 13 to **14 of 134**. **US-0087 (non-violence clause) does NOT qualify** — FR-077 stays OPEN (G-NOMECH: the amendment half of its guarantee has no mechanism at either tier), so US-0087 remains **Partial**: its publication-half logic and UI are complete and tested, but its Must row does not close. No other story is affected by this increment.

## 7. Gap log — all 122 open Must rows

Owners are the named requirement owners from Doc 02; phase targets are Doc 13 milestones.
**v1.1.0 update (2026-08-10):** FR-011 and FR-035 removed (now COMPLETE after DES-074/075 assigned);
12 new Must FR rows added for FR-062..073 (entries 53–64); G-TRACE secondary tags removed from 13
rows whose DES gaps are now closed by DES-073..086. NFR-007 retains G-TRACE (no story/backlog item
— not a DES gap).
**v2.2.0 update (2026-08-25):** Entries 73–77 (FR-082..086) reclassified from G-TRACE to G-PHASE3 — DES-093/094 now assigned (US-0132; TS-SCAFFOLD seam). Entries 114–118 added for FR-122, FR-123, FR-124, FR-131, FR-132 (all G-PHASE3; DES assigned; IS_INSECURE_MOCK=true; production pending Phase 3).
**v2.2.2 update (2026-08-25):** Entries 119–126 added — FR-121 (G-TRACE+G-PHASE3; no DES; pilot-jurisdiction sequence), FR-125 (G-TRACE+G-PHASE3; no DES; invite-gating), FR-126 (G-TRACE+G-PHASE3; no DES; on-device credential), FR-127 (G-TRACE+G-PHASE3; no DES; nullifier-collision-only duplicate detection), FR-128 (G-TRACE+G-PHASE3; no DES; no stored identity), FR-129 (G-TRACE+G-PHASE3; no DES; Charter-layer guard), FR-130 (G-TRACE+G-PHASE3; no DES; membership cap; US-0131 Not Ready pending DES), FR-133 (G-PHASE3; DES-099 assigned; no US or TC). Must FR count corrects from 106 to 114; open Must rows correct from 118 to 126.
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
| 17 | FR-036 | G-PHASE3 | Elections not implemented | Aisha Nkemdirim | Phase 3 |
| 18 | FR-037 | G-PHASE3 | Candidacy/consent not implemented | Dr. Lena Kowalczyk | Phase 3 |
| 19 | FR-039 | G-PHASE3 | Elections not implemented (DES-076 assigned in v1.1.0, G-TRACE closed) | Aisha Nkemdirim | Phase 3 |
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
| 56 | FR-065 | G-PHASE3 | Candidate feedback scorer (DES-066) not implemented; depends on Elections (Phase 3) | Aisha Nkemdirim | Phase 3 |
| 57 | FR-066 | G-PHASE3 | Debate lifecycle and scheduling (DES-067) not implemented; Elections Phase 3 | Aisha Nkemdirim | Phase 3 |
| 58 | FR-067 | G-PHASE3 | Post-debate candidacy vote flow (DES-067) not implemented; Elections Phase 3 | Aisha Nkemdirim | Phase 3 |
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
| 72 | FR-081 | G-TRACE | No DES assigned — Doc 03 §16; Candidate self-nomination + eligibility check not designed | Aisha Nkemdirim | Design next increment |
| 73 | FR-082 | G-PHASE3 | DES-093/094 assigned (v2.2.0) — UI display layer designed; US-0092/US-0132 present; TC-3470/TC-3474 pass; full storage/enforcement/linkage-prevention not yet designed or implemented | Dr. Lena Kowalczyk | Design + Phase 3 |
| 74 | FR-083 | G-PHASE3 | DES-093/094 assigned (v2.2.0) — UI display layer designed; US-0093/US-0132 present; TC-3471/TC-3474 pass; participation-record data model and ballot-direction enforcement not yet designed | Erik Lindqvist | Design + Phase 3 |
| 75 | FR-084 | G-PHASE3 | DES-093/094 assigned (v2.2.0) — UI display layer designed; US-0094/US-0132 present; TC-3472/TC-3474 pass; disclosure-schedule publication and enforcement not yet designed | Dr. Lena Kowalczyk | Design + Phase 3 |
| 76 | FR-085 | G-PHASE3 | DES-093/094 assigned (v2.2.0) — UI display layer designed; US-0095/US-0132 present; TC-3474 passes, TC-3476 Blocked (enrolment screen not wired); consent lifecycle and data-destruction mechanics not yet designed | Sofia Marchetti | Design + Phase 3 |
| 77 | FR-086 | G-PHASE3 | DES-093/094 assigned (v2.2.0) — UI display layer designed; US-0096/US-0132 present; TC-3474 passes; cross-tier unlinkability guarantee for role-changers not yet designed | Dr. Lena Kowalczyk | Design + Phase 3 |
| 78 | FR-087 | G-TRACE | No DES assigned — Doc 03 §16; committee formation + minute publication not designed | Tomas Ferreira | Design next increment |
| 79 | FR-088 | G-TRACE | No DES assigned — Doc 03 §16; committee capability boundary enforcement not designed | Rafael Duarte | Design next increment |
| 80 | FR-089 | G-TRACE | No DES assigned — Doc 03 §16; committee mechanical term expiry not designed | Rafael Duarte | Design next increment |
| ~~81~~ | ~~FR-090~~ | ~~G-TRACE~~ | **CLOSED v2.5.0 — entry retired.** DES-104 + SCR-12 closed the chain; every clause tested — public authorship (UT-0832, UT-0875); any Worker-or-above may compete (UT-0089, UT-0833); equal standing proven positively and as capability-absence (UT-0835..0837, UT-0874..0877); one decision window even for differently-phrased questions (UT-0095); entry closes when voting starts (UT-0838). ~~**Revisit if** the approver rules PROPOSING an FR-123 counting action (Doc 03 §10.13.13 open question (b))~~ **REVISIT CONDITION DISCHARGED v2.5.4 — it never triggered.** RULED 2026-08-30 (Rathish, Human Approver; DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md §1): PROPOSING is **NOT** an FR-123 counting action, because gating authorship on verification status is a participation restriction FR-020 prohibits. The closure above stands unrevisited | ~~Tomas Ferreira~~ Closed | ~~Design next increment~~ Closed |

| 82 | FR-091 | **G-NOMECH** _(was G-TRACE — reclassified v2.5.0)_ | **Chain gap CLOSED** by DES-105 + SCR-12; the **order** guarantees are complete — eight stages one step at a time, skip/reverse/no-op/unknown all refused, capability-absence at all three layers, deliberative stages produce records never outcomes (UT-0090..0094, UT-0839..0842, UT-0878..0880). **Rule 4 fails on the timeline clause:** transitions must be "executed by code per published timelines"; `governance.js` `schedule()` is **not wired** into the service and the demo advances by a button (Doc 06 §7 #25). The anti-capture half is done; the automation half is not. ~~**Also open:** the eight FR-091 stages are a different taxonomy from ADR-008 `PROPOSAL_STATE` (Doc 03 §10.13.13 open question (a)) — reconciliation owed~~ **TAXONOMY ITEM CLOSED v2.5.4 — no reconciliation was owed.** RULED 2026-08-30 (Doc 03 v2.10.0 §10.13.13(a)): the two are **complementary, each canonical at its own layer** (different subjects — a decision window vs one proposal's ballot, one-to-many at resolution), so there was never a choice to make between them. The published stage set is unchanged; the architect's reconciliation ownership is discharged. A derivation obligation is recorded in Doc 03 §10.13.13(a) and it binds **BOTH versions** — the **ballot layer** owns ballot state (DES-096 database backing in v1, `Governor.State` at the v2 seam) and the `VOTE`/`DECISION`/`IMPLEMENTATION` stages MUST derive from it. A **build obligation, not a v1 gap today**, because the proposals layer derives nothing. _(v2.6.1: this read "a v2-seam derivation obligation … at the v2 swap", the scope Doc 03 corrected at v2.11.0.)_ **This entry's ONE remaining gap is the timeline clause above.** **Separately tracked, not a gap in this row:** Doc 02 §13 **(h)** / Doc 03 §16 **Q15** — FR-091's *text* does not say what becomes of a DEFEATED or CANCELLED decision (it **should** terminate at `DECISION`; terminating is not skipping — but **nothing enforces this today**: Doc 03 records that `advanceStage()` consults no outcome and would advance a defeated window straight to `IMPLEMENTATION`, so the termination is a **design intention, not built behaviour**). _(v2.6.1: this entry stated the termination as fact, contradicting the warning box in the SDD version it pins. v2.7.0: that correction opened a parenthesis it never closed.)_ That is a **requirement clarification owed to the product-owner**, raised 2026-08-30, and it does **not** affect this row's status: the proposals layer holds no vote, so no window can be defeated, and no test can close or fail on it today. It is named here so this entry is not read as claiming FR-091 has no other open item of any kind | **Priya Raghunathan (PO)** — requirement text, **Q15** · **Samuel Oyelaran (engineer)** — timeline wiring, the row's only gap | Design fix + build |
| 83 | FR-092 | **G-NOMECH** _(was G-TRACE — reclassified v2.5.0)_ | **Chain gap CLOSED** by DES-106 + SCR-12; the trail is genuinely **append-only** — ordered, un-rewritable, no delete path, copies on read, injected clock (UT-0846..0848). **Rule 4 fails twice.** (i) **Incomplete against its own enumeration:** FR-092 names the vote result, enacted consequence, implementation status and measured outcome; this layer records none — TC-3558/UT-0845 asserts the service never casts, stores or counts a vote, which is correct design and leaves four of seven elements unrecorded. (ii) **Third-party reconstruction unbuilt:** needs DES-097 audit anchoring (Doc 06 §7 #24; Doc 13 stage S-8). The surface states this honestly (`trail-v1-note`, UT-0883) rather than implying auditability | Erik Lindqvist (requirement) · **engineer (trail completion)** · **sre/architect (DES-097 anchoring, S-8)** | Design fix + build |
| 84 | FR-093 | G-TRACE | No DES assigned — Doc 03 §16; candidate-selection published-schedule flow not designed | Aisha Nkemdirim | Design next increment |
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
| 117 | FR-131 | G-PHASE3 | DES-096/ADR-024 assigned; IS_INSECURE_MOCK=true; TC-3482..TC-3486 Pass (obs.) at seam level. **v2.3.0: clause (d) is BUILT and tested at the parties-directory counting surface** (TC-3534/UT-0864 — four clauses, refusal after them, no dismiss control) and **clause (b) honesty copy is fixed** (TC-3535/UT-0869). **TC-3481 stays Blocked** because it is written against the **SCR-13/SCR-14 ballot** surfaces, unbuilt in this drop (Doc 06 §7 #21); TC-3476 and TC-3487 still Blocked; production ZK ballot pending | Samuel Oyelaran | Phase 3 |
| 118 | FR-132 | G-PHASE3 | DES-095/DES-100/ADR-024/ADR-025 assigned; IS_INSECURE_MOCK=true; TC-3479/TC-3480 Pass (obs.); production allowlist-only enforcement and VendorNotBound guard in production pending | Samuel Oyelaran | Phase 3 |
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
| `ADR-006` MACI design | FR-030, FR-031, FR-032, FR-033, FR-034, NFR-003 + all of TS-ADV-02 |
| `GovernanceRules` tier table | FR-025, FR-026, FR-027, FR-023 + TC-1200, TC-1202 and every `TS-DIFF` case |
| `RegionRegistry` population logic | FR-009, FR-016, FR-018, NFR-002 + TC-2710–TC-2715 |
| `MIN_ANONYMITY_SET` | NFR-002, NFR-001, FR-020 + TC-1950–TC-1955, TC-2651 |
| `FeatureFlags` semantics | NFR-020, NFR-017, FR-056 + TC-1610, TC-1611, TC-2750, TC-2426 |
| The `treasury` flag turning on | **FR-051 loses its conditional completion** and must be re-tested in full, plus FR-049, FR-050, FR-052 |
| Any `OI-01`…`OI-11` decision | Re-check every row citing that OI; `OI-05` alone gates NFR-002 and BR-004 |
| **The v2 on-chain seam swap (ADR-024) — the FR-091 stage machine binding to `PROPOSAL_STATE`** | **FR-091, FR-092** + TC-3552..TC-3555, TC-3559, TC-3560. Doc 03 **v2.11.0** §10.13.13(a) makes this normative: **the ballot layer is the sole authority on ballot state in BOTH versions** — the DES-096 database backing in v1, `Governor.State` at the v2 seam — and FR-091's `VOTE` / `DECISION` / `IMPLEMENTATION` stages MUST be **derived** from whatever backing `IBallotService` is bound to, never tracked independently. _(v2.6.0: this row cited **v2.10.0** and its v2-only scope. Doc 03 v2.11.0 corrected that scope after review — "v1 holds no ballot (ADR-024 §(b))" **mis-cited**: ADR-024 removes on-chain **execution** in v1, while **DES-096 specifies a v1 ballot backing outright**, so the v2-only rule left the drift failure mode unbound exactly where v1 first holds a vote. The narrow true claim is that **the proposals and debate layer** holds no vote — it stops at `admitToBallot()` and hands off.)_ It is a **build obligation, not a v1 test obligation today**, because the layer built so far derives nothing. At the swap, every case asserting a stage position must be re-verified against the derivation rather than against stored state, and the `discussion` **name collision** must be honoured (ADR-008 §6's single pre-vote `DISCUSSION` period spans FR-091's review + discussion + debate; equating them by name skips two stages). See also **Q15** — FR-091's text does not yet say that a DEFEATED or CANCELLED window terminates at `DECISION` |
| **`COUNTING_ACTION` allowlist membership (DES-100)** | **FR-024, FR-090, FR-122, FR-123, FR-132** + TC-3543, TC-3545, TC-3546, TC-3556. The set was approver-**ratified at three values on 2026-08-24** (DES-100) and **confirmed closed** on **2026-08-30** by the PROPOSING ruling; adding a fourth requires an amendment to FR-123 **and** DES-100, never a code change alone. _(v2.7.0: this row gave 2026-08-30 as the ratification date. The 2026-08-30 ruling confirmed an allowlist ratified six days earlier — it did not create it, and the distinction matters because the confirmation's authority rests on the earlier ratification.)_ Were PROPOSING ever added, FR-090's closure and TC-3545 would both have to be re-derived — the revisit condition that was discharged 2026-08-30 |

## 9. Gate verdict & sign-off

**Gate rule (CLAUDE.md): 0 gaps in Must rows = traceability criterion met. Any open row → the gate
stays shut.**

| Criterion | Required | Actual | Verdict |
|---|---|---|---|
| Must rows with a complete chain | 138 / 138 | **16 / 138** | **FAIL** |
| Open Must rows | 0 | **122** | **FAIL** |
| Tests green across the requirement set | all | **610/610 green repo-wide (2026-08-30)** — contracts 95 · protocol 150 · sdk 244 · ui 14 · indexer 16 · web 91; of the RTM's own cases, **217 of 465 carry passing evidence**; **16** have an implementing automated test that was **not executed** this session; **232 cannot execute** at all (Blocked or no mechanism). 217 + 16 + 232 = **465**. Seam tests are still IS_INSECURE_MOCK=true. **Denominator note (added v2.7.0) — the two sections do NOT share a denominator, and the gap is not yet explained.** This row counts against **465**, Doc 07 v2.4.4 §2's total. §6's dashboard counts against **472**, derived there as 463 anchors − 1 + 10 (the `TC-3200`-`TC-3209` range expanding to 10 charters). **These differ by 7 and the difference is UNRECONCILED.** Doc 07 describes its own 465 as the *expanded* count with that same range already listed as 10 individual cases, which would imply 456 anchors, not 463 — so the two documents do not agree on either figure. Consequently §6's "**255** not executed or not executable" (= 472 − 217) and this row's "**232** cannot execute" are **different measures over different denominators and must not be reconciled to each other**; the 16 automated-but-unexecuted cases also fall inside §6's 255 and outside this row's 232. **What is NOT in doubt:** 217 with passing evidence, and the 610/610 suite — both re-derived independently at three reviews. **Owed:** the tester owns Doc 07 and Doc 08 and must reconcile the two conventions to one stated definition, recorded as **TD-RTM-02** in §10. _(The §6/§9 denominator mismatch was raised as a carried Low across cycles; stating it as "both correct in their own convention" would have been the comfortable answer and is not supportable — 456 ≠ 463.)_ _(**v2.6.0 — corrected twice.** Before v2.5.4 this read "542/542 … 195 of 449 … 127 cannot execute", the figures from before the proposals & debate drop, stale on four of six packages. v2.5.4 fixed the suite total but then wrote "**233** of 465 carry passing evidence", **mislabelling Doc 07's figure**: Doc 07 §2 reports 233 as cases with an *implementing automated test*, of which **16 `apps/web` cases exist but were not executed**. Crediting all 233 with passing evidence claimed evidence for 16 cases that have none, and simultaneously reported 23 fewer unexecutable cases than this document's own §6 dashboard. 233 − 16 = **217**, which is exactly what §6 says — the two now agree.)_ **A green suite is not a closed matrix:** the suite proves the code does what it was built to do, not that every Must requirement has been built | **FAIL** |
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
| Tester (author, **R**) | Ji-woo Park | **Submitted — 122 open Must rows recorded; 3 Must rows CLOSED (FR-079, FR-090, FR-080), 2 reclassified (FR-091/FR-092 G-TRACE → G-NOMECH), 0 opened** | 2026-08-29 | **v2.5.0, Status In Review. Proposals & debate drop (Doc 06 v2.4.1; Doc 03 v2.9.1 DES-103..DES-106; TC v2.4.0 sync).** Five chain gaps paid; **two** rows close on rule 4 and three do not: FR-080 (informed-consent disclosure states permanence nowhere, and no confirm step exists; DES-103 binds no SCR though FR-080 has a UI obligation), FR-091 (`schedule()` unwired — the "per published timelines" clause), FR-092 (four of seven enumerated trail elements unrecorded + third-party reconstruction unbuilt). FR-024 evidence extended, status unchanged. FR-122/FR-123 evidence extended, both stay G-PHASE3. Suite 542 → **608** green. Must 15/123; stories 16/134.)_ _(Prior v2.4.1: **v2.4.0, Status In Review. DES paydown traceability (Doc 03 v2.8.1 Approved; TC v2.3.1 sync).** FR-130 **CLOSES** on DES-102 + SCR-09/SCR-11 — all four rules hold, every clause separately tested, v1 tamper-evidence residual disclosed in the row and the row flagged for revisit when on-chain membership goes live. FR-077 does **NOT** close despite DES-101: rule 4 fails because its amendment-refusal clause has no mechanism at either tier (`Party.amendCharter` never sees the charter text) — reclassified G-NOMECH and routed to the architect. DES-097(b) closes nothing by design. Must 13/125; stories 14/134 (US-0131 newly done; US-0087 stays Partial). _(Prior v2.3.0: **v2.3.1, Status In Review (cycle-1 rework of v2.3.0). Join/membership drop traceability (Doc 06 v2.3.2 Approved, cycle-3 PASS 97%, since v2.3.3 Approved; TC v2.3.0 sync).** Evidence extended on 7 forward-trace rows with TS-MEMBERSHIP (TC-3517..TC-3540, 24 cases): FR-020 and FR-022 (already COMPLETE — strengthened, incl. the *structural* no-verifier guarantee); FR-064, FR-122, FR-123, FR-130, FR-131 (all **stay OPEN**); FR-013 Should row evidence strengthened with the two DES-097 seam guards. **FR-021 deliberately NOT extended** — this drop produces no vote-weight or tally evidence, and claiming it would be fabricated coverage. **FR-064's semantics blocker was RESOLVED after v2.3.0 was authored** by the `FR-064-SEMANTICS` ruling (option (a) EXPLICIT-LEAVE; Rathish, 2026-08-29; Doc 02 v2.15.0 Approved; Doc 06 v2.3.3 Approved) — gap-log entry 55 now records a **SPLIT** (semantics resolved / DES-065 open), and the row stays OPEN on DES-065 alone. Summary counts unchanged (12/126 Must; 16/145 total); **no story newly meets DoD** (13/134, checked story by story). Dashboard TC 425→449; passing evidence 171→195 (107 inh. + 88 obs.).)_ _(Prior v2.2.4:_ Party-creation drop traceability (Doc 06 v2.2.0 Approved; TC v2.2.2 sync): FR-010/011/018/020/077/130 forward-trace rows updated with TC-3489..TC-3516 and UT evidence (all pass inh.); FR-012/013 Should rows updated — FR-013 **CLOSED** — cooldown tested; US-0021 met DoD; dashboard TC 397→425.)_ |
| | | | | _(Prior v2.2.2: Cycle-2 rework — TC-3488/UT-0753 added to NFR-011; 8 absent Must FR rows added FR-121/125..130/133; Must FR 106→114; open Must 118→126.)_ |
| reviewer-qa (**A**, independent verifier) | _pending_ | | | Must independently verify these 122 gaps (including **34 live G-TRACE rows**: NFR-007, FR-074, FR-075, FR-076, **FR-078**, FR-081, FR-087, FR-088, FR-089, FR-093..FR-111, FR-121, FR-125..FR-129) before any merge sign-off. _(**v2.6.0 — corrected twice, and the second correction is the instructive one.** Before v2.5.4 this read "40 G-TRACE rows FR-074..FR-081/FR-087..FR-111/FR-121/FR-125..FR-130"; both the count and the ranges were stale (FR-079/FR-080 and FR-130 closed; FR-077/FR-091/FR-092 reclassified G-TRACE→G-NOMECH once a DES was assigned). v2.5.4 replaced it with "33" and a note claiming "FR-078/FR-079/FR-080 closed" — **FR-078 is not closed**: it is `☐ OPEN — G-TRACE + G-PHASE3` in §3.1 and live as §7 entry 69. The mechanical recount had missed it because **§7 entries 68 and 69 were concatenated onto one physical line**, so the row did not render as a row and no row-wise count could see it. The formatting defect caused the counting defect, and the effect was to drop a live open Must row from the set the Accountable verifier is told to check. The line break is fixed in §7 at v2.6.0 and the count re-derived: **34** = 1 NFR + 33 FRs. §7 is authoritative.)_ |
| Principal Architect | _pending_ | | | ~~Owns the 15 missing `DES` links (Doc 03 §5.2)~~ **Those 15 closed at Doc 03 v1.1.0 (DES-064..DES-086); see the `G-TRACE` legend row in §3.** Now owns the **34 live `G-TRACE` rows** enumerated in the reviewer-qa row **above** — **33 of them** chains still broken for want of a `DES`; the 34th, **NFR-007**, is not one of those: it **has** DES-051 (§3.2) and carries `G-NOENV + G-TRACE` for a different reason _(v2.7.0: the cell had described all 34 as DES-less, and pointed "below" at a row that sits above it)_ — plus OPEN-02/03/11, and the **owed DES-096 ballot-state accessor** (Doc 03 v2.11.1 §10.13.13(a): the v1 half of the derivation rule has nothing to derive from until `IBallotService` reports ballot state). _(v2.6.0: this cell had named "the 15 missing DES links", a set closed at Doc 03 v1.1.0, for the whole life of the document. **v2.6.1: the v2.6.0 repair then assigned this cell Doc 03 §16 Q17, which is NOT the architect's — Q17 is owned by Ji-woo Park (tester) + Samuel Oyelaran (Engineering Lead).** Third consecutive cycle in which a correction to this block misassigned an owner; the corrected cell now names only architect-owned work.)_ |
| Product Owner (**A** for Gate 2) | _pending_ | | | Owns `OI-01`…`OI-05`, the `FR-005`/`FR-049`/`FR-050`/`FR-052`/`FR-053` story gap, and the OPEN-01 receipt-freeness decision |
| Project Manager (**R** for Gate 2) | _pending_ | | | Gate-2 packet: this matrix is the traceability evidence, and it fails the criterion |
| **Human approver — Gate 2** | _pending_ | **Approve / Rework / Reject** | | Recommendation from the tester: **do not schedule Gate 2 until the Must-row count closes** |

---

## 10. Traceability defects in the evidence itself

Defects in the *citations* this matrix relies on, as distinct from gaps in the requirements it
tracks. Recorded here rather than repaired silently, because repairing them is not the tester's to do.

| # | Defect | Effect on this matrix | Owner | Status |
|---|---|---|---|---|
| **TD-RTM-02** | **Doc 07 and Doc 08 do not agree on the test-case denominator.** Doc 07 v2.4.4 §2 gives **465** and describes it as the *expanded* count with `TC-3200`-`TC-3209` already listed as 10 individual cases — which implies **456** anchors. Doc 08 §6 gives **463** anchors and derives **472** expanded (463 − 1 + 10). The two documents therefore disagree on both figures, by **7**. Raised at the v2.6.1 review as a carried Low ("§6 and §9 use different denominators with no bridge"); stating that each is "correct in its own convention" would have closed it comfortably and is **not supportable**, because 456 ≠ 463 | **No status, gap or count is affected, and the load-bearing figures are sound**: 217 cases with passing evidence and the 610/610 suite were each re-derived independently at three separate reviews. What is unusable is any statement of the form "N of M cases" that crosses between §6 and §9, and any future reconciliation attempt between §6's **255** (= 472 − 217) and §9's **232** — different measures over different denominators | **tester** (Ji-woo Park) — owns both Doc 07 and Doc 08, so this is one owner's reconciliation, not a cross-role negotiation | **OPEN — raised 2026-08-30.** Does not block the current merge. Reconcile to ONE stated definition before Gate 2, since a Gate-2 verifier reading both documents will otherwise meet two totals for one suite |
| **TD-RTM-01** | **`UT-0841` … `UT-0848` are each defined TWICE** — once in `apps/web/test/party-creation.test.tsx` and once in `packages/sdk/test/proposals.test.js`. Both files define all eight ids. This breaks CLAUDE.md's ID-scheme rule: *"stable — never reuse or renumber"*. Introduced by the proposals & debate drop (Doc 06 v2.4.1), which reused a block already taken by the party-creation web suite. Found at the v2.5.3 review (2026-08-30) and verified independently | **The matrix cites both meanings of the same ids.** `UT-0841`..`UT-0848` appear against FR-010/FR-011 meaning the **web** tests, and against FR-091/FR-092 meaning the **sdk** tests — including on **FR-011, a COMPLETE Must row**. **No row's evidence is false and no status is affected:** both test files exist, both pass, and each row's cited tests do assert what the row claims. What is broken is **unambiguous resolution** — an auditor following `UT-0845` from FR-011 lands on a proposals test, and an id is no longer a unique address. Left unfixed, it will silently corrupt the next orphan check, which matches ids across files | **engineer** (renumbering is product code; the tester must not edit it) · tester re-runs §4 orphan check after | **OPEN — raised 2026-08-30.** Does **not** block the current merge: no status is wrong today. MUST be fixed before the next drop adds `UT-08xx` ids, and before Gate 2 |

---
### Gate rule
**0 gaps in Must rows = traceability criterion met. There are 122 open Must rows. The gate stays shut.**
