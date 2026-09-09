# Requirements Specification (BRD + SRS) — Trumocracy

```
Document ID:   SRS-TRUMOCRACY
Version:       2.17.3
Status:        Approved — 02-requirements-srs-v2.17.3-business-cycle2.md (PASS 96%, 0C/0H/0M/10L; reviewer: reviewer-qa, neutral,
               PM-assigned; ten Lows carried, non-blocking, to fold at the next touch: ISS-01..ISS-03 (new at cycle 2, see report §4) and ISS-04..ISS-10 (the seven carried since v2.17.1: scenario numbering 1-5,8,9; Scenario 8/9 pointers; Scenario-8 steps restating rules; capitalised Grade-8 in the v2.17.0 entry; FR-064 v2 clause; v2.16.0 entry; (h) wording)). Previously: In Review — v2.17.3, **review-loop rework, cycle 2 of 5**, against
               artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md (business,
               cycle 1 — **FAIL 92%, 0 Critical / 0 High / 1 Medium / 9 Low**; reviewer:
               reviewer-qa, neutral, PM-assigned **before dispatch** per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md; the same neutral
               reviewer is assigned for cycle 2). The reviewer reconstructed v2.17.2
               byte-for-byte from v2.17.1 plus the rework spec and so verified the "no normative
               change" claim **mechanically** rather than by assertion; every outward citation in
               the new §13 (j)(3) resolved. What failed was a **build-state assertion**: (j)(3)
               recorded, as dated completed fact, an application that had not occurred when the
               version was authored, and pinned a Doc 06 version that did not then exist. A PATCH
               bump is correct: the fixes are wording, status and citation corrections with **no
               normative meaning change**.
               **Fixed, by issue id:** ISS-01 (Medium — the FAIL) — the **RULING** (approver
               decision 1 of 2026-09-08 plus the product-owner's remedy (a); closed) is separated
               from the **APPLICATION** (routed to the engineer; its status is reported in **Doc 06
               §7 and the UT registry** — Doc 06 v2.8.0, **Status: In Review**, the tester's
               technical review pending — and is **not** certified by this document); the
               present-indicative build claims in §13 (j)(3) are recast as the decided remedy;
               and the correction is mirrored at every site the reviewer named — this block, the
               v2.17.3 Change entry, the v2.17.2 Change entry, and the §13 (j) row. The governing
               convention, adopted here: **a document records the decision it owns and routes the
               application; only the applying role's document reports that the application
               happened.** ISS-02 (Low) — the H-set citations are distinguished: FR-131 clause
               (e)'s carve-out set is §16.4 **H-16/H-17/H-18**, and **H-15** is cited
               **additionally** for the one-person-one-vote point; corrected at all three
               occurrences including the spaced variant in the v2.17.2 Change entry, and H-16
               added to the (j)(3) evidence list, being the provision most directly answering the
               quoted string "a short code … which cannot be traced back to you". ISS-03 (Low) —
               §12 session-scope entries added for **both** v2.17.2 and v2.17.3.
               **Carried, not folded — the seven Lows (ISS-04..ISS-10 of the cycle-1 report):**
               all re-confirmed present, unchanged in severity, none raised above Low, and
               v2.17.3 touches none of their sites — §8 scenario numbering (1-5,8,9), the three
               "Scenario 8" pointers where Scenario 9 also applies, the two Scenario-8 steps that
               restate rules, the capitalised "Grade-8" in dated narration (record-only), §4.6
               FR-064's missing FR-023/FR-068 cross-reference, the v2.16.0 changelog echo, and
               the §13 (h) wording nit. Their routing is unchanged: ISS-05 remains the one worth
               doing first, on the next version that touches §8.
               **On dated narration:** the retained v2.17.2 text below is not rewritten. Where it,
               or the v2.17.2 Change entry, reads as asserting that the remedy was **applied**,
               this block, the v2.17.3 Change entry and §13 (j) govern.
               **Prior status, retained verbatim:**
               In Review — v2.17.2, a **PATCH that touches the §13 tracked-routing block only**.
               **No normative change:** no BR / FR / NFR / CON / RISK text, no §8 Gherkin scenario
               and no §16 row is edited by this version. It records approver **decision 1** of
               2026-09-08 (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §1 — the `/verify`
               page states an unbuilt enrolment guarantee as current fact and the remedy choice is
               delegated to the product-owner), the **product-owner's choice** made under it
               (ibid. §5 — remedy (a), flag-gate behind `enrolment_ui` with an honest placeholder),
               and **widens tracked-routing item (j)** from the two landing strings to also carry
               the `/verify` page copy, with a per-item status for all three. Neutral reviewer
               assigned before dispatch: reviewer-qa
               (artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md).
               The seven Lows carried at v2.17.1 are **carried again and remain open**: this
               version does not touch §8, §4.6 or historical changelog narration.
               **Prior status, retained verbatim:**
               Approved — 02-requirements-srs-v2.17.1-business-cycle2.md (PASS 96%, 0C/0H/0M/7L; reviewer: reviewer-qa, neutral,
               PM-assigned; seven Lows carried, non-blocking, to fold at the next touch: ISS-01 scenario numbering 1-5,8,9; ISS-02 three pointers cite Scenario 8 alone (9 also applies); ISS-03 two Scenario-8 steps restate rules rather than assert outcomes; ISS-04 one capitalised Grade-8 in the v2.17.0 change entry; ISS-05/06/07 the long-carried FR-064, v2.16.0-entry and (h) items). Previously: In Review — v2.17.1, review-loop rework **cycle 2 of 5** against
               artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md (business,
               cycle 1 — **FAIL 86%, 0 Critical / 0 High / 3 Medium / 7 Low**; reviewer:
               reviewer-qa (Rafael Duarte), neutral, PM-assigned). The reviewer verified every
               factual claim in the v2.17.0 delta against primary sources and found no
               substantive error; what failed was the amendment's **cascade inside this
               document**. A PATCH bump is correct per the reviewer's routing: **no normative
               meaning changes** — v2.17.1 completes and correctly frames a ruling already made.
               **Fixed, by issue id:** ISS-01 (Medium) — §8 FR-131 Scenario 8 added for clause (e)
               and the block's header comment de-scoped from the ballot; ISS-02 (Medium) — §4.45's
               heading and rationale widened from ballot-only to the participation-act posture,
               with the existing ballot rationale retained because it remains correct for clauses
               (a)–(d); ISS-03 (Medium) — clause (e)'s operative prohibition recast under RFC 2119
               with a positive subject and MUST NOT (the negated-subject MUST was literally null),
               and "grade-8" aligned to NFR-023's casing; ISS-04 (Low) — the approver confirmation
               is now stated as recorded fact at all five live sites; ISS-05 (Low) — the clause (e)
               safe-harbour is subordinated to the reader test, which is stated to govern; ISS-06
               (Low) — "governed by" softened to "addressed by" with the §13 (j) open question
               named; ISS-07 (Low) — §12 session-scope entries added for v2.17.0 and v2.17.1;
               ISS-08 and ISS-10 (Low) — the §16.3 FR-131 and FR-132 rows corrected, §16.3 being
               touched by this version; ISS-09 (Low) — the bare "§2.5" cross-reference in §13 (j)
               qualified to Doc 06 §2.5.
               **The ruling behind clause (e) is approver-CONFIRMED:** Rathish Kumar, 2026-09-06,
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 (decisions 1–3).
               v2.17.0's "presented for approver confirmation" framing was true when authored at
               10:00 and is superseded by that record.
               Carried from v2.16.3 (Approved — 02-requirements-srs-v2.16.3-business-cycle4.md,
               PASS 96%, 0C/0H/0M/3L): three Lows, all non-blocking, all re-verified still present
               by the v2.17.0 reviewer (there ISS-11 / ISS-12 / ISS-13), and all recommended for
               cleanup on the next version that touches their sections rather than a dedicated
               rework cycle: ISS-01 (§4.6 FR-064's "v2 (deferred)" clause lacks the FR-023/FR-068
               cross-reference, open since v2.15.0); ISS-02 (the v2.16.0 changelog entry still
               carries an unquoted echo of the corrected mis-citation — confined to historical
               narration, not a live status field, which is why it is a Low here where the same
               defect class was a High in Doc 07/08); ISS-03 (a wording nit in §13 (h)).
               v2.17.1 touches §13 but edits only block (j), does not touch FR-064, and does not
               rewrite historical changelog narration; all three Lows are therefore carried again
               and remain open.
Owner:         Priya Raghunathan — Product Owner
Approvers:     Gate 1 — Priya Raghunathan (Product Owner), Ana-Maria Petrescu (Project Manager),
               Rathish (Human Approver — Gate 1 re-entry, v2.0.0)
Source:        PR-TRUMOCRACY (docs/01-press-release-prfaq.md)
Last updated:  2026-09-08
Change:        v2.17.3 (2026-09-08) — **Review-loop rework, cycle 2 of 5**, against
               artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md (FAIL 92%;
               **ISS-01 Medium, ISS-02/03 Low**). PATCH: wording, status and citation corrections
               only — **no normative meaning changes**, no BR/FR/NFR/CON/RISK text, no §8 Gherkin
               and no §16 row edited, no ID minted, reused or renumbered, Must count stays at 114.
               **ISS-01 (Medium — the FAIL).** §13 (j)(3) asserted a build state this document
               cannot verify: the Status column read "CLOSED — ruled and applied 2026-09-08", the
               body made present-indicative build claims ("the route **is** flag-gated…", "the nav
               link **is** hidden", "the route **renders**…"), and it pinned "Doc 06 v2.8.0",
               which did not exist when v2.17.2 was authored — while both role session notes
               recorded the application as **pending**. v2.17.3 **separates the RULING from the
               APPLICATION**: the ruling (approver decision 1, artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md
               §1, plus the product-owner's remedy (a), ibid. §5) is **CLOSED 2026-09-08**; the
               application is **routed to the engineer** and its status is reported in **Doc 06 §7
               and the UT registry** — Doc 06 v2.8.0, **Status: In Review** (the tester's
               technical review is pending), the artifact that reports whether and when the remedy
               landed. The build claims are recast as the decided remedy, and the correction is
               mirrored in the header Status block, in the v2.17.2 entry below, and in the §13 (j)
               row. **The convention this adopts:** a document records the decision it owns and
               routes the application; only the applying role's document reports that the
               application happened. **ISS-02 (Low).** The H-set citations are distinguished —
               FR-131 clause (e)'s carve-out set is §16.4 **H-16/H-17/H-18**, with **H-15** cited
               **additionally** for the one-person-one-vote point — at all three occurrences,
               including the spaced variant in the v2.17.2 entry below; and **H-16** is added to
               the (j)(3) evidence list, being the provision most directly answering the quoted
               string "a short code … which cannot be traced back to you" (the operator database
               holds `subject_id_hash` and `phone_hash` as derived identity data). **ISS-03
               (Low).** §12 session-scope entries added for **both** v2.17.2 and v2.17.3.
               **Carried:** the seven Lows ISS-04..ISS-10 remain open and are disclosed in the
               Status block; v2.17.3 touches none of §8, §4.6 or the dated changelog narration,
               except to append the two marked corrections named above.
               _Previous entry:_
               v2.17.2 (2026-09-08) — **PATCH; §13 tracked-routing block only; no normative
               change.** Records **approver decision 1** of 2026-09-08
               (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §1): the `/verify` page copy
               ("The document never leaves your phone"; "a short proof … and nothing else"; "a
               short code … which cannot be traced back to you") describes the verify-and-discard
               enrolment design — true by design (FR-132 §(b), DES-100, ADR-003) and **not yet
               true in code** (enrolment unbuilt, `StubIdDocumentChecker.IS_INSECURE_MOCK()` =
               true per Doc 06 §7; Phase-1 adapter blocked on **CON-015**) — and a public surface
               MUST NOT state an unbuilt guarantee as current fact. Records the **product-owner's
               choice** under the delegation (ibid. §5): **remedy (a)** — `/verify` is flag-gated
               out of the public v1 build behind a new `enrolment_ui` flag (dev on; staging and
               prod off; `removeBy` = the enrolment sprint), the nav link is hidden when the flag
               is off, and the route renders a short honesty placeholder whose normative English
               text is fixed at that record §5.3 (Arabic draft §5.4, subject to §13 tracked
               deferral (b)); applied by the engineer with a UT guard specified at §5.5–§5.6.
               **Widens §13 tracked-routing item (j)** from "the two landing strings" to a
               three-item register that also carries the `/verify` page copy, and gives each item
               its status: (1) `home.steps[0].body` OPEN — not ruled; (2) `home.promises[3]` OPEN
               — not ruled, sre consulted; (3) the `/verify` page copy **CLOSED — ruled and
               applied 2026-09-08**. _**Corrected at v2.17.3 (cycle-1 ISS-01, Medium):** "and
               applied" overstated the position when this entry was authored. The **ruling** was
               closed on 2026-09-08; the **application** was routed to the engineer and had not
               yet occurred — both role session notes recorded it as pending. Read (3) as
               **RULED 2026-09-08; application routed to the engineer and reported in Doc 06 §7
               and the UT registry**, per the v2.17.3 entry above and §13 (j). The original
               wording is retained per annotate-don't-delete._
               Nothing else in this document is edited: FR-131 and FR-132
               are unamended, and the remedy discharges duties those requirements already impose
               (FR-132 §(d) honesty posture, §(e) vendor non-retention) together with the phasing
               truths already recorded at §16.4 H-16 / H-17 / H-18 — the carve-out set FR-131
               clause (e) itself enumerates — with H-15 cited additionally for the
               one-person-one-vote point _(citation set corrected at v2.17.3, cycle-1 ISS-02; this
               entry as authored read "H-15 / H-17 / H-18", which dropped H-16)_ — no new
               requirement is minted.
               _Previous entry:_
               v2.17.1 (2026-09-06) — **Review-loop rework, cycle 2 of 5**, against
               artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md (FAIL 86%;
               0C / 0H / 3M / 7L). No normative meaning changes — a PATCH bump that completes
               v2.17.0's cascade inside this document. Adds §8 FR-131 **Scenario 8** (clause (e))
               and de-scopes that block's header comment from the ballot; widens §4.45's heading
               and rationale to the participation-act posture without deleting the ballot
               rationale; recasts clause (e)'s operative prohibition under RFC 2119 ("public-facing
               strings … MUST NOT assert", replacing a negated-subject MUST that obliged nothing);
               subordinates clause (e)'s safe-harbour to its reader test; softens "governed by" to
               "addressed by" for enrolment claims and names §13 (j) as the open question; adds §12
               session-scope entries for v2.17.0 and v2.17.1; corrects the §16.3 FR-131 and FR-132
               rows; qualifies §13 (j)'s bare "§2.5" to **Doc 06 §2.5**; and records the approver's
               confirmation of the underlying ruling at every live site. No new BR/FR/NFR minted;
               no ID reused or renumbered; Must count unchanged. Spec
               artifacts/product-owner-2026-09-06T2030-doc02-v2171-spec.md.
               v2.17.0 (2026-09-06) — **FR-131 (§4.45) amended: the honesty duty is extended from
               "v1 voting behaviour" to every v1 participation act.** Recorded by the product-owner
               ruling of 2026-09-06 (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md,
               Ruling B), **CONFIRMED by the approver (Rathish Kumar) 2026-09-06 —
               DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11**. **Why:** the 2026-09-05 FR-131 sweep
               (commit 0a5c542) correctly left the landing-page string "Support a new party with
               your name kept private" (and its Arabic mirror "بقاء اسمك سريًا") in place, because
               it describes petition **endorsement**, not voting, and FR-131's closing sentence was
               scoped literally to "v1 voting behaviour". The claim is nevertheless false twice
               over: the v1 operator database CAN link the account to the endorsement (necessarily
               so — FR-014's one-per-person rule and FR-015's withdraw-your-own rule cannot be
               satisfied in v1 without that link), and backing is **public by design** (Doc 14 §2.2:
               "a public act, on purpose"; "only back a petition if you are comfortable being seen
               to support it"; the fully private alternative is the `private_endorsement` charter
               option, a Phase-4 flag OFF in every v1 deployment). The landing page and the approved
               User Guide contradicted each other on the one fact that determines whether a citizen
               in a hostile jurisdiction is safe. **What changed:** new **clause (e)** — the duty is
               about **claims**, not a word list, and covers voting, endorsing/backing, joining or
               belonging to a party, and supporting a party, **in every language**, with the test
               being what an ordinary Grade-8 reader would take the claim to mean; and the closing
               sentence widened from "v1 voting behaviour" to "or any other v1 participation act",
               with an explicit carve-out preserving clause (a)'s mandated negated forms so the
               FR-131(a) ballot banner and UT-0887 are unaffected. The superseded closing-sentence
               wording is quoted verbatim in the requirement's Source annotation per the
               annotate-don't-delete convention. **What did NOT change:** no requirement is added or
               removed; FR-014, FR-015, FR-017, FR-082 and §16.3/§16.4/§16.5 are untouched; no ID is
               reused or renumbered; `private_endorsement` stays Phase 4; the endorsement design is
               not altered — this is a truth-in-copy amendment, not a policy change. **Also:** §13
               gains a tracked-routing block **(j)** for the enrolment/verification landing copy,
               which is explicitly **outside** clause (e) and **not ruled** on this evidence (H-17:
               the ID-check vendor does see the document; FR-132 §(e) is a contractual, not
               technical, control). Product-code corrections are routed to the engineer by the
               decision record (§8 R-1..R-4) and are not made by this document.
               v2.16.3 (2026-08-30) — **One-line factual correction, routed in from the Doc 03
               v2.11.1 review (cycle 3), which found this document carrying a mis-citation
               verbatim after Doc 03 had corrected its own copy.** §13 tracked routing **(h)** read
               "**Not a defect in what is built:** v1 holds no vote (ADR-024 §(b))". That
               **mis-cites ADR-024**: §(b) removes on-chain **execution** in v1 and puts votes in
               Postgres — it does not remove the ballot, and **DES-096 (Doc 03 §10.13.3) specifies
               a v1 ballot backing outright** (database `castBallot`, SQL `computeTally`). The
               narrow claim that is true, and all that was ever true, is that **the proposals and
               debate layer** holds no vote: it stops at `admitToBallot()` and hands off to
               `IBallotService`. Corrected, with the superseded wording quoted in place per the
               annotate-don't-delete convention. No requirement text, priority, owner or status
               changes; (h) remains OPEN and product-owner-owned. Doc 02 v2.16.2 had PASSED cycle 3
               at 98% — this correction was found downstream, not by that review.
               v2.16.2 (2026-08-30) — Both v2.16.1 Lows fixed. **Neither had to be fixed** — the
               pass bar permits carried Lows and v2.16.1 PASSED at 97% — but ISS-03 is the exact
               defect class that produced two Highs elsewhere in this session's review round
               ("the correction applied one location short"), so it is closed rather than carried.
               **ISS-03 (Low) FIXED:** v2.16.1 added a pointer from FR-091's Gherkin to §13 (f)'s
               unwired-automation admission, and did not apply the same treatment to **FR-090**,
               the row that §13 (i) newly names. FR-090's §4.25 row read "Built and closed as
               written" with nothing indicating an open question stands against it. Both FR-090's
               row and its §8 Gherkin block now name **§13 (i) / Doc 03 §16 Q16** — that the
               requirement does not say what the party gets when **both** competing proposals
               pass — while stating plainly that the RTM row closes honestly, because post-vote
               window resolution is outside FR-090's stated guarantee and outside what v1 holds.
               Both notes repeat the constraint that matters: **the answer MUST NOT introduce a
               window-closing capability**, whose absence is the anti-capture control FR-090's own
               last Gherkin scenario asserts.
               **ISS-04 (Low) FIXED:** §13's new tracked-routing rows were ordered (f), (g), (i),
               (h); now (f), (g), (h), (i).
               ISS-01 (the FR-064 cross-reference gap, carried from v2.15.0) is carried again.
               v2.16.1 (2026-08-30) — Two additions made AFTER v2.16.0's review had already begun,
               recorded as their own version rather than folded silently into a reviewed text.
               **(1) §13 tracked routing (i) — NEW, surfaced at the Doc 03 v2.10.0 review:**
               FR-090 requires competing proposals to be voted in the SAME decision window, the
               ballot model gives each proposal an INDEPENDENT binary ballot, and DES-104
               deliberately exposes no window-closing, merging or ranking capability — so two
               competing proposals can BOTH PASS and no rule says what the party then gets. A
               requirement decision before an architecture one, and the answer MUST NOT be to add
               a window-closing capability, whose absence is a deliberate anti-capture control.
               Not a v1 defect (the proposals layer holds no vote). Doc 03 §16 Q16.
               **(2) ISS-02 (Low) from the v2.16.0 review FIXED:** §8's FR-091 Gherkin carried two
               scenarios with nothing distinguishing the one that is built from the one that is
               not. A note now records that the order/no-skip scenario passes while "per published
               timelines" is unwired, pointing at §13 (f) — so the Gherkin is not read as a
               statement of current behaviour — and cross-references §13 (h) / Q15.
               ISS-01 (Low, the FR-064 cross-reference gap) is carried unchanged from v2.15.0.
               v2.16.0 — PROPOSING-NOT-COUNTING-GATED ruling applied (Rathish, Human Approver,
               2026-08-30; artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md).
               **NO normative requirement text is amended by this version** — the ruling CONFIRMS
               the reading already built and already written here. Proposing/authoring is OPEN
               participation, NOT an FR-123 counting action: no verification gate, no government-ID
               check and no IEligibilityVerifier call stands on the authoring path; only VOTING is
               the counting action. Gating authorship on verification status would be a
               participation restriction, which FR-020 prohibits. The commissioning brief for the
               proposals drop had said the opposite; that instruction is SUPERSEDED by the FR-020
               constraint, and the engineer's FR-conformant build is confirmed correct.
               **The OI-14 Worker-tier condition is UNCHANGED** and is not a verification gate —
               the two sit on orthogonal axes (§4.41 TWO-AXIS NOTE): Worker tier is the
               self-declared privacy-disclosure step (FR-080, nobody approves it), required because
               authorship is public and a Supporter is anonymous unconditionally. Confirming
               annotations added to FR-024 (§4.7), FR-090 (§4.25) and FR-123 (§4.41); FR-123's
               annotation records the counting-action set as CONFIRMED CLOSED at its three clauses
               and states that a fourth member requires an amendment to FR-123 and DES-100, never a
               code change alone. §13: tracked routing (f) FR-091 "per published timelines"
               unwired and (g) FR-092 ballot layer + DES-097 anchoring — both recorded as honestly
               OPEN (G-NOMECH), no ruling sought; (h) NEW — FR-091's text does not say what happens
               to a DEFEATED or CANCELLED decision, surfaced while mapping FR-091 to
               ADR-008's PROPOSAL_STATE and routed to the product-owner as a clarification owed
               before the ballot layer is built (not a defect in v1, which holds no vote);
               (e) FR-130 provisional-cap DES CLOSED (DES-102, Doc 03 v2.8.0; row closed Doc 08
               v2.4.0). Housekeeping: v2.15.0 business cycle-1 review PASSED (97%,
               0C/0H/0M/1L; ISS-B1 Low carried).
               §13 addendum (same date, after the Doc 03 v2.10.0 review): tracked routing (i)
               added — FR-090's "same decision window" and the ballot model's independent binary
               ballots leave it unspecified how a window with several competing proposals
               RESOLVES; two can both pass and no rule says what the party then gets (Doc 03 §16
               Q16). A requirement decision before an architecture one, and the answer MUST NOT be
               to add a window-closing capability, whose absence is a deliberate anti-capture
               control (DES-104). Not a v1 defect — the proposals layer holds no vote.
               v2.15.0 — FR-064 amended to the v1 EXPLICIT-LEAVE posture per the FR-064-SEMANTICS
               ruling, option (a) (Rathish, Human Approver, 2026-08-29; flag raised in Doc 06
               v2.3.0 §7 #20, closed at Doc 06 v2.3.3): joining a second party does NOT
               auto-void the first — a member MUST explicitly, on the record, leave their
               current party before joining another (the platform's affirmative-action
               pattern: nothing consequential happens by silence; auto-void would be a
               silent, costly state change to a membership the member cares about).
               Automatic voidance is DEFERRED to the DES-065 global membership-scope
               nullifier at the v2 seam swap, where one-active-membership is enforced
               cryptographically — the v1 explicit-leave behaviour is the subset the v2
               mechanism formalises. Superseded auto-void wording annotated in place in
               §4.6 (retained, not deleted). §8 FR-064 Gherkin replaced with explicit-leave
               scenarios. §16.3 FR-064 v1-mechanism cell updated. §13 tracked routing (e)
               added: FR-130's RTM Must row is blocked by a missing DES in Doc 03 §5.2
               (architect-owed on-chain design for the provisional cap) — routed to the
               architect; no test can close it. RTM note: FR-064's Must row REMAINS OPEN
               pending the DES-065 build (v2) — this ruling resolves the semantics, not the
               row. Housekeeping: v2.14.1 business cycle-2 review PASSED (97%, 0C/0H/0M/0L;
               artifacts/reviews/02-requirements-srs-v2.14.1-business-cycle2.md) — v2.14.1
               stood Approved; this version re-enters review. No new FR minted. No IDs
               minted. Must count stays at 114. §11 Counts label → v2.15.0.
               v2.14.1 — Rework cycle 1 against business-mode review FAIL
               (artifacts/reviews/02-requirements-srs-v2.14.0-business-cycle1.md; 94%,
               0C/0H/1M/0L). ISS-01 (Medium): §4.45 FR-131 preamble and §4.45 FR-131
               requirement text — "same recorded-phasing posture as FR-121..FR-130. TC OPEN —
               Phase 3" replaced with parenthetical variant at both sites: FR-130 exception
               noted (TC-3511..TC-3516 now pass per Doc 07 v2.2.2 Approved; FR-130 RTM Must
               row remains OPEN for G-TRACE — no DES assigned in Doc 03 §5.2). Sweep found 2
               additional occurrences (§11 Counts para. and §11 Must-set para.) — both are
               contextually labelled historical changelog entries describing the v2.6.0 state
               and are not amended. No new FRs minted. No IDs minted. Must count stays at 114.
               §11 Counts label → v2.14.1 (maintenance rule). §12 rework entry added.
               v2.14.0 — Approver rulings 2026-08-26 applied (DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md).
               Ruling 1 (FR-130): cap is UNCONDITIONAL — annotated in §4.44; 60-day grace never
               adopted and explicitly NOT part of v1; TC note corrected (TC-3511..3516 pass in
               Doc 07 v2.2.2; RTM row 125 OPEN G-TRACE pending DES assignment and DES-097).
               Ruling 2 (FR-077): ratified non-violence clause text given normative home in §4.22
               — verbatim text frozen before first-party-adoption; CON-013 cross-reference;
               closes CLAUSE-TEXT-01. Ruling 3 (FR-013): re-petition cooldown decided policy
               value 30 days annotated in §4.4 — closes COOLDOWN-01; REPETITION_COOLDOWN_SECONDS
               verified. Ruling 4: tracked deferrals (a) jurisdiction seed list OI-04; (b) Arabic
               string review; (c) image-emblem DES; (d) DES-073 v2-contract collision gap
               recorded in §13. §12 v2.14.0 scope note added. §11 Counts label → v2.14.0.
               No new FR minted. No IDs minted. Must count stays at 114.
               v2.13.0 — Rework cycle 1 against business-mode review FAIL
               (artifacts/reviews/02-requirements-srs-v2.12.0-business-cycle1.md; 87%, 0C/1H/3M/1L).
               ISS-01 (High): FR-132 Scenario 6 ("No government ID — enrolment denied") replaced
               with two correct post-ruling scenarios — Scenario 6 (phone-only account creation
               succeeds with no government-ID document; positive path) and Scenario 7 (open-tier
               member's counting action refused with FR-131 clause (d) notice; account and open-tier
               access unaffected). ISS-02 (Medium): cross-reference note added at top of §4.24
               (before FR-082) pointing to §4.41 TWO-AXIS NOTE and stating the Supporter/Worker/
               Candidate tiers are the privacy-disclosure axis, orthogonal to the verification axis;
               TWO-AXIS NOTE closing line corrected from "Cross-referenced from §4.46 and §4.24"
               to "Cross-referenced to §4.24 and §4.46". ISS-03 (Medium): FR-131 Scenario 5 added
               covering FR-131 clause (d) — open-tier participant attempts a FR-123 counting action;
               clause (d) notice displayed (non-dismissable, all four plain-language elements present),
               counting action refused, account and open-tier access unaffected. ISS-04 (Medium):
               addressed by Scenario 6 above (integrated per review guidance). ISS-05 (Low): §12
               scope note updated — Doc 03 v2.5.1 (Approved) is the current APPROVED baseline;
               Doc 03 v2.6.0 (In Review) exists and carries the counting-gate architecture increment.
               §11 Counts label → v2.13.0. No new FR minted. Must count stays at 114.
               v2.12.0 — Approver ruling 2026-08-24 applied (DECISIONS-2026-08-24-V1-ID-GATES-
               COUNTING.md): government-ID check gates COUNTING, never joining (FR-123 v1 backing
               clarified); BR-003 and FR-020 hold unamended and absolute. §4.41: v1 backing
               annotation added (FR-123 v1 conventional backing = FR-132 government-ID check
               behind DES-095; FR-122 open tier reachable with phone verification alone; participation
               model identical in v1 and v2) + TWO-AXIS NOTE (verification axis vs privacy-disclosure
               axis are orthogonal — surfaced to approver for naming confirmation per decision record §6).
               §4.46/FR-132 rewritten: account creation, joining, reading, discussing, supporting and
               organising require phone verification alone (FR-020/FR-122 absolute); government-ID check
               required only for FR-123 counting actions (official strength contribution, binding vote,
               candidacy); MUST NOT refuse account creation or party membership for absence of ID;
               subject_id_hash deduplication moved to counting-verification (not account creation);
               rationale banner rewritten to two-layer framing. §4.47/FR-133 "Critical asymmetry"
               paragraph relabelled v2.12.0 and corrected: spam layer flags and rate-limits, never denies;
               ID check is hard gate on COUNTING-tier eligibility only, never on joining; FR-133 scope
               sentence and BR trace note corrected. §4.45/FR-131: clause (d) added requiring plain-
               language disclosure to open-tier participants of non-counting status at the point of a
               blocked counting action and how to become counting. §16.4 H-19 rewritten: exclusion is
               from vote-COUNTING (official strength, binding vote, candidacy), not from platform
               membership; open-tier participation remains available; mission-targeted population
               limitation and v2 ZK commitment stated plainly. §16.4 H-15: T-06 status updated to
               ACCEPTED — deferred with disclosure (Rathish, 2026-08-24). §16.5: "Government-ID
               eligibility gate vs BR-003/FR-020" row → RESOLVED (Rathish, 2026-08-24; DECISIONS-
               2026-08-24-V1-ID-GATES-COUNTING.md; gate applies to counting only, never to joining);
               T-06 → ACCEPTED — deferred with disclosure; T-07 reaffirmed RESHAPED/CON-015 governs
               (unchanged); trailing T-note updated. §16.3 FR-132 and FR-133 rows updated to state
               counting-gate scoping; NFR-004 row annotated (deduplication now at counting-verification).
               Stale Doc 03 pins corrected throughout: v2.5.0 (In Review) → v2.5.1 (Approved) in §4.46
               source note, §16 source block, H-15, H-16, H-17, and §16.5 T-rows. §11 Counts label →
               v2.12.0. No new FR minted (FR-131 clause (d) carries the open-tier disclosure obligation;
               no normative gap requiring a new ID).
               v2.11.0 — Approver ruling 2026-08-23 applied (DECISIONS-2026-08-23-V1-IDENTITY-
               VERIFICATION.md): FR-132 amended (§4.46) — phone SMS + government-ID document
               check at signup; verify-and-discard rule stated normatively; allowlist/denylist
               enumerated (DES-100); phone stored as HMAC-SHA-256/KMS-pepper hash; subject_id_hash
               retained for one-account-per-document deduplication; "real-person verified, not
               anonymous" posture; MUST NOT claim anonymity or one-person-one-vote. FR-133
               amended (§4.47) — explicit statement that ID check is an eligibility gate (not
               flag-don't-block); FR-133's flag-don't-block governs the spam layer only.
               §8 Gherkin for FR-132 extended: scenarios (a) verify+discard (only allowlist
               fields persist); (b) duplicate-document refusal via subject_id_hash; (c) no-ID
               denial with disclosure. §16 Source block updated: Doc 03 pinned to v2.5.0 (In
               Review). §16.3.1: FR-001/FR-002 rows cite subject_id_hash improved deduplication;
               FR-003 row reshaped (phone_hash improves; subject_id_hash deepens; CON-015
               governs); FR-132 row updated (phone+ID check, verify-and-discard, hashed
               storage). §16.3.2: NFR-004 row annotated (Sybil improved via subject_id_hash);
               NFR-010 row updated (phone_hash + subject_id_hash restricted-store carve-out).
               §16.4: H-15 updated (same-document dedupe improves, does NOT close one-person-
               one-vote gap); H-16 updated (phone stored as HMAC hash, not plaintext); H-17
               minted (ID provider sees document; non-retention depends on vendor contract);
               H-18 minted (subject_id_hash retained as derived identifier); H-19 minted (no
               government ID = no enrolment in v1; political platform exclusion). §16.5:
               T-01..T-05 status changed to CONFIRMED (DECISIONS-2026-08-23-V1-IDENTITY-
               VERIFICATION.md §4); T-06 reshaped (IMPROVED not closed); T-07 reshaped
               (RESHAPED, CON-015 governs); T-08 added (ARCHITECT-RESOLVED); new tension row
               added (no-ID exclusion vs BR-003/FR-020 — AWAITING APPROVER CONFIRMATION).
               CON-015 annotated as CRITICAL PATH for government-ID check path (§9). §11
               heading "Counts (v2.10.0)" → "Counts (v2.11.0)". §12 v2.11.0 scope note added.
               v2.10.0 — Rework against c2 business-mode review (FAIL 98%, 0C/0H/1M/1L;
               artifacts/reviews/02-requirements-srs-v2.9.0-business-cycle2.md). ISS-A
               (Medium): §11 Counts line corrected — "133 FR minted (131 active + 2
               superseded)"; sweep found no other stale "131 FR"/"129 active"/"112 Must"
               in active prose outside historical changelog entries. ISS-B (Low): §4.46
               and §4.47 inline annotations "Doc 03 v2.4.0" → "Doc 03 v2.4.1 (Approved)"
               (both). Post-edit citation sweep (no version bump): §12 v2.8.0 scope note
               "Doc 03 v2.4.0" → "Doc 03 v2.4.1 (Approved)"; full active-prose sweep found
               no further stale cross-document pins — all other v2.3.x/v2.4.0 occurrences
               are historical SRS self-annotations or Gherkin version comments, not
               cross-document version pins. Pre-review fix (no version bump): §11 heading
               "Counts (v2.9.0)" → "Counts (v2.10.0)"; maintenance rule added beside heading.
               v2.9.0 — Rework against c1 business-mode review (FAIL 97%, 0C/0H/1M/2L;
               artifacts/reviews/02-requirements-srs-v2.8.0-business-cycle1.md). ISS-01
               (Medium): §16.3.1 tally line updated — FR-001..FR-133, 131 active, IN-v1 107,
               PARTIAL 20, DEFERRED-v2 4, SUPERSEDED-n/a 2 (verified against table). ISS-02
               (Low): §11 heading label corrected — "Counts (v2.6.0)" → "Counts (v2.9.0)".
               ISS-03 (Low): §16 Source block "Doc 03 v2.4.0" → "Doc 03 v2.4.1 (Approved)".
               No other changes.
               v2.8.0 — Approver rulings 2026-08-23 applied (DECISIONS-2026-08-23-V1-AUTH-SPAM-
               RESISTANCE.md): FR-132 minted (Must, §4.46, Marcus Adeyemi — v1 phone-based SMS
               auth; MUST NOT claim one-person-one-vote; traces BR-006, BR-012; design DES-095
               amended, ADR-025). FR-133 minted (Must, §4.47, Rafael Duarte — v1 spam-resistance
               flag-don't-block layer; false-positive path first-class; traces BR-012, BR-003;
               design DES-099). §8 Gherkin for FR-132/FR-133 added. §11 Must count 112 → 114.
               §12 trace/scope note updated. §16 updates: FR-001/FR-002 v1-form cells softened to
               one-account-per-verified-phone (cite FR-132); FR-003 reclassified IN-v1 → PARTIAL
               (v1 stores phone number; H? N → Y); FR-132/FR-133 rows added (both IN-v1; FR-132
               H?=Y, FR-133 H?=N); NFR-010 v1-form annotated with phone-number carve-out.
               §16.4: H-15 (one-person-one-vote not guaranteed; FR-132; T-06) and H-16 (phone
               number stored in v1; FR-003 partial; T-07) added. §16.5: T-06 (Charter Rule 1 vs
               v1 phone auth) and T-07 (FR-003 vs phone number storage) added — both AWAITING
               APPROVER CONFIRMATION. Blockchain ratification of DES-097 recorded (Ruling 3;
               item (a) from V1-V2-SPLIT §4 CLOSED).
               v2.7.0 — Rework against c1 business-mode review (FAIL 94%, 0C/0H/1M/1L;
               artifacts/reviews/02-requirements-srs-v2.6.0-business-cycle1.md). ISS-01
               (Medium): §16 Source block citation corrected — decision record
               DECISIONS-2026-08-23-V1-V2-SPLIT.md now exists; removed provisional
               "(being written by the project-manager this session)" qualifier; Doc 03
               alignment reference updated to v2.3.1 (Approved). ISS-02 (Low): honesty
               register H-07..H-14 added — closes all H?=Y gaps in §16.3 without a §16.4
               entry (FR-002, FR-034, FR-048, FR-059, FR-063, FR-103, FR-124, NFR-024).
               No other changes.
               v2.6.0 — v1/v2 delivery-phasing classification (§16 new section; approver
               directive 2026-08-23, DECISIONS-2026-08-23-V1-V2-SPLIT.md). FR-131 minted
               (Must, §4.45, Nadia Hassan; traces BR-005, BR-009; design DES-098; §8 Gherkin
               added; §11 Must count 111 → 112; §12 trace and §13 session-scope note updated).
               CON-007 accepted-budget parenthetical corrected from stale ~USD 4.13M to
               record-derived ≈ USD 4.03M on the L2 basis (Ruling 1 cascade, 2026-08-21,
               DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.2; ≈ USD 175K held as
               explicit audit-remediation contingency against the unchanged USD 4.2M appetite).
               FR-131 recorded-phasing posture: DES-098 minted by architect in Doc 03 v2.3.0
               §10.13.6; US and TC/RTM rows owed at next catch-up (same posture as
               FR-121..FR-130); Doc 03 v2.3.0 §12 trace table cites "FR-130" for DES-098 —
               this is a pre-allocation error (FR-130 was minted at v2.5.0 for the
               provisional-party membership cap); the honesty-notice FR is FR-131; cascade
               annotation owed to Doc 03 at the next architect increment.
               v2.5.0 — C-02 ruling applied (Rathish, 2026-08-22;
               artifacts/status/DECISIONS-2026-08-22-WIREFRAME-C01-C02.md). C-02 DECIDED:
               provisional-party membership cap is an anti-capture control, not display copy —
               an unverified party (platform-activated but not yet legally registered per FR-075)
               MUST be capped at 100 members; cap lifts automatically on verified legal
               registration; no manual or operator lift path. FR-130 minted (Must, §4.44);
               §8 Gherkin for FR-130 added; §11 Must count 110 → 111; §12 traceability updated
               (FR-130 trace added; BR-002, BR-012 → FR-130 → US-0131). FR-130 has no DES yet
               (same recorded-phasing posture as FR-121..FR-129; TC OPEN — Phase 3; US-0131
               minted in Doc 05 v2.1.0). C-01 disposition CONFIRMED on record
               (DECISIONS-2026-08-22-WIREFRAME-C01-C02.md): the "Verify with Aadhaar" button
               is an adapter-driven string resolved at build time per the pilot region's rail
               (FR-004/OI-20 architecture-level plurality; DES-070); no requirement change;
               no Doc 02 edit. Open cascade item: Doc 03 §18/§10.12.6 C-02 entry still shows
               "PO must decide" — closure annotation owed at the next Doc 03 version (Doc 03
               is architect-owned, freshly Approved v2.2.1; this record does not edit it).
               v2.4.0 — OI-19 and OI-20 rulings applied (Rathish, 2026-08-20;
               artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md). OI-19 DECIDED: invite-gating
               is a spam-control rate-limiter, never an admission condition; FR-125 finalised (no
               longer draft) — mandatory non-invite fallback ALWAYS open, leads to full counted
               membership, no fee, no refusal for lack of invite; test obligation — "a determined
               real person can always join without an invite"; ✅ OI-19 DECIDED banner applied in
               §4.41; FR-020 unamended and absolute; OI-19 RESOLVED in §13. OI-20 DECIDED: FR-004
               satisfied at architecture level (Aadhaar is one implementation of the pluggable
               adapter interface, not a hardcoded dependency); Phase-1 single-rail deployment
               limitation recorded (person without Aadhaar cannot enrol in Phase-1 pilot region;
               FR-004's 50% attestor-share cap inoperative for Phase-1 duration; exit condition:
               Phase 2 adds eIDAS 2.0 per FR-121); FR-129 minted (Must, §4.43) — Charter-layer
               guard: making single-issuer operation permanent requires Charter-layer amendment
               process, never a deployment default; ✅ OI-20 DECIDED banner on FR-004; OI-20
               RESOLVED in §13. §11: Must count 109 → 110 (FR-129); FR-125 convention note
               updated (no longer draft). §12 traceability updated (FR-129 trace added; FR-125
               trace note updated).
               v2.3.1 — FR-124 verified-status visibility amendment (approver ruling, Rathish,
               2026-08-20, recorded in the FR-124 banner, §4.41): verified status is private to
               the holder, expressed as eligibility; every verified participant including Supporters
               sees their own status in their own authenticated session; the public sees only
               aggregate verified counts, never a per-Supporter badge; Worker/Candidate visible
               badge permitted (voluntary role-taking already crossed the disclosure line);
               MUST-NOT: no persistent public attribute may reveal a specific Supporter is verified;
               absence-test obligation added (UT-0700/UT-0701 style). Original v2.3.0 clause (b)
               annotated as superseded with pointer (retained for traceability). §8 FR-124 Gherkin
               updated: Supporter private self-view scenario added; absence and adversarial scenarios
               strengthened. §14 glossary 'Verified status' updated to match amended composition.
               Three Low issues from v2.3.0 cycle-1 review
               (artifacts/reviews/02-requirements-srs-v2.3.0-business-cycle1.md) fixed: ISS-01 §2.5
               CON range updated CON-001..CON-014 → CON-001..CON-015; ISS-02 §15 OI-18 note updated
               (OI-18 resolved at v2.2.0, stale note corrected); ISS-03 FR-020 annotation scoping
               sentence added (open-tier scope only; counted-membership normative text unchanged).
               v2.3.0 — Pilot jurisdiction decisions applied (Rathish, 2026-08-20;
               DECISIONS-2026-08-20-PILOT-VERIFICATION.md). Decision 1: pilot jurisdiction
               sequence recorded in §4.40 (FR-121); India/Aadhaar offline paperless KYC named as
               Phase-1 adapter; EU/eIDAS 2.0 Phase-2; USA Phase-3 deferred (fragmented mDL
               patchwork, non-correlation conflict); CON-015 legal-opinion Gate-2 line item minted;
               OI-04-PILOT closed (§13); §2.4 updated to name the pilot. Decision 2: verification
               as a separate, optional step — §4.41 minted (FR-122..125); verification gates
               COUNTING, never joining; FR-020 annotated (open-tier entry without precondition);
               FR-021 annotated (personhood-gated counted ballots); two tensions surfaced as OI-19
               (invite-gating vs FR-020 admission ban) and OI-20 (single-rail pilot vs FR-004
               attestor plurality) — both pending Rathish decision, not resolved here. Decision 3:
               on-device proof, nullifier-only, no stored identity — §4.42 minted (FR-126..128);
               FR-003 annotated with pointer to FR-126; subpoena test Gherkin added to §8. TD-12
               records Decision 4 rejected designs. New FRs (FR-121..128) have no DES or US yet —
               same recorded-phasing posture as FR-074..FR-111 (Doc 03 §16); tester's next RTM
               catch-up covers FR-121..128.
               v2.2.0 — OI-18 decision applied (2026-08-11, Rathish; OI-18-DECISION-2026-08-11.md):
               two-tier core adopted. Tier 1 entrenched charter now SEVEN rules (CON-001 promoted —
               scope boundary, not implementation commitment), unamendable by any vote, changeable
               only by fork (FR-118 amended). Tier 2 named absolutes (BR-011/NFR-003, CON-002/
               CON-008/NFR-010, CON-012, CON-013) amendable only via the Doc 03 super-process —
               five minimum properties recorded (FR-119 amended). Tier 3 everything else, ordinary
               tier. The FR-118 decision banner closed.
               v2.1.1 — Cycle-1 business-review rework (2026-08-11): FR-092 pending-OI-14 residue
               fixed (ISS-01); §2.5 CON range updated to CON-001..CON-014 (ISS-02); §15 Downstream
               paragraph updated to current gate state (ISS-03); §15 v1.1.0 re-affirmation row
               annotated as superseded (ISS-04); OI-16 Gherkin annotation comments added to
               FR-085 and FR-107 §8 blocks (ISS-05); adversarial negative scenarios added to
               FR-024 (Supporter blocked, Worker-declaration path offered) and FR-105 (Supporter
               expulsion attempt refused, FR-005 the only remedy) §8 blocks (ISS-06).
               v2.1.0 — Gate 1 v2.0.0 decision applied + steward-organisation requirement area
               (2026-08-11, directed by Rathish; GATE1-DECISION-2026-08-11.md). OI-14 decided:
               proposal authorship requires Worker tier or above (FR-024, FR-090 amended). OI-15
               decided: expulsion applies to public tiers only; supporter-tier fraud handled by
               FR-005 credential revocation (FR-105 amended). OI-16 decided: confidential-class
               carve-out adopted — pre-nomination disclosure data never enters the governance
               record and is destroyed on withdrawal (FR-085, FR-107 amended). BR-021 +
               FR-114..FR-120 steward organisation (passes 2–3); TD-11; RISK-31/32; OI-18.
               Gate 1 APPROVED conditional on this version landing before design.
               v2.0.1 — Cycle-1 business-review rework (2026-08-10): one-pilot correction
               applied to §2.4 (ISS-01); CON-007 schedule made consistent with S-01 — launch
               2027-06-01 (ISS-02); FR-062 §8 Gherkin marked superseded/do-not-test (ISS-03);
               L2 budget noted in CON-007 (ISS-04); §1.4 Doc 05 pin corrected (Low).
               v2.0.0 — Vision re-entry directed by the approver (Rathish), 2026-08-10. Party
               self-governance first; three participation tiers with three-tier privacy (resolves
               OI-13); committees without decisional power; proposal lifecycle; measurable manifesto
               commitments; financial transparency + anomaly detection; COI, internal audit,
               disputes, member rights; conduct votes, removal & expulsion; three-level data
               classification; transparency dashboard & factual scorecard; behavioural tracking
               excluded by approver decision; non-violence founding clause. BR-014..BR-020 minted;
               new FR/NFR/CON/RISK/TD/OI sections land in the same version (passes 2–4 of this
               session). FR-062 and FR-046 superseded, not deleted. Gate 1 re-entry: this version
               stops at Gate 1.
               v1.1.1 — Cycle-1 business-review rework (2026-08-10).
               Addresses ISS-01..ISS-13 from artifacts/reviews/02-requirements-srs-v1.1.0-business-cycle1.md.
               Key changes: §8 preamble corrected + 15 missing Must-NFR Gherkin blocks added (ISS-01);
               NFR-010 scoped to exclude two enumerated restricted stores (ISS-02); FR-002/FR-030/NFR-001/NFR-003
               restated with defined adversary-game parameters (ISS-03); BR-006/BR-011 success measures
               replaced with falsifiable, observable proxies (ISS-04); OI-08 constants marked non-normative
               in §8 (ISS-05); NFR-024 harassment metric defined and reconciled with FR-056 (ISS-06);
               "Major election" defined in §14 (ISS-07); §11 Won't→Could for three items aligned with
               Doc 01 §D (ISS-08); FR-055/NFR-018 vs BR-005 reconciled with honest narrowing (ISS-09);
               Change-9 trace added to §12/§13 (ISS-10); 5 RFC 2119 negation errors fixed (ISS-11);
               Approvers named individually (ISS-12); OI-12 marked resolved by ADR-016 (ISS-13).
               v1.1.0 — Nine-requirement change request (CR-v1.1.0) directed by Rathish
               2026-08-09; re-affirmation of Gate 1 required at this version.
               Source: artifacts/status/GATE1-DECISION-2026-08-09.md §7 (CR-v1.1.0).
```

> **Based on:** ISO/IEC/IEEE 29148:2018 + IEEE 830. **Produced in:** Define. **Approved at:** Gate 1.
> Every requirement is uniquely indexed, MoSCoW-prioritized, independently verifiable, owned by a
> **named person**, and traceable. This is the source of truth for scope.
> **RFC 2119** keywords MUST / MUST NOT / SHOULD / MAY are used with their normative meaning.
> **This document states WHAT and HOW WELL. It states no HOW.** No technology, protocol, chain,
> library, algorithm or schema is named anywhere in general; FR-070 names three regulatory-framework
> adapter categories by human-approver direction (CR-v1.1.0 Change 6) — this is a deliberate
> exception to the general rule.

---

## 1. Introduction

### 1.1 Purpose
To specify, at a level sufficient for architecture and test design, the business, functional and
non-functional requirements of **Trumocracy** — a platform that enables any group of verified
citizens to create, constitute, operate and hold to account a **self-governing political party**,
demonstrating fitness to govern publicly and transparently before seeking public power. Citizens
participate continuously: in creation, operation, decision-making, candidate selection, policy
development and performance evaluation. The platform is multi-country from the outset; v2.0.0
targets one pilot deployment. Every institutional operation is executed by code; human discretion
is voting alone.

### 1.2 Scope

**In scope.** Verified personhood and regional-residency enrolment; country selection and the
platform-creation vs legal-registration boundary; party constitution drafting and ratification;
eight mandatory policy pillars; a petition lifecycle with a population-proportional activation
threshold; three self-assigned descriptive participation tiers (Supporter / Worker / Candidate)
with three-tier privacy; committee formation that deliberates and drafts but holds no decisional
weight; the eight-stage proposal lifecycle with a permanent decision trail; measurable manifesto
commitments with 1/3/5/10/30-year horizons; financial transparency with anomaly detection;
conflict-of-interest disclosure and recusal; independent internal audit; dispute resolution with
per-case sortition appeal panels; explicit member rights; conduct votes, removal and expulsion by
affirmative quorum; three-level data classification; transparency dashboard and factual performance
scorecard; open, equal membership; tiered charter amendment with timelocks; anonymous, receipt-free
voting; region-and-office-scoped candidate nomination and internal party elections; mid-term recall;
public manifestos and immutable version history; public verifiability and audit; moderation-by-code
boundaries; account recovery; and platform-sponsored, zero-cost citizen actions.

**Explicitly not in scope.** Conducting, certifying, tabulating or replacing any binding **state**
election or referendum (`CON-001`); any transferable token or platform fundraising instrument
(`CON-006`); vote delegation, proxy or liquid democracy; cross-jurisdiction/federated parties;
social features (feeds, messaging, forums); staff-operated moderation of political speech;
integration with an official electoral roll as a system of record; and **per-user behavioural
tracking of any kind** — clicks, page views, section views, dwell time, reading trails or any
derivative thereof — excluded by approver decision (Rathish, 2026-08-10) on the grounds that
such data constitutes a political-intelligence database. See Doc 01 §D and §E.

### 1.3 Definitions, acronyms, abbreviations
See §14 Glossary.

### 1.4 References
- `docs/01-press-release-prfaq.md` — PR-FAQ (PR-TRUMOCRACY v2.0.0).
- `docs/05-product-backlog.md` — Backlog (BKLG-TRUMOCRACY v1.1.2).
- `CLAUDE.md` — VEKTOR org handbook (gates, ID scheme, traceability rule).
- RFC 2119; ISO 8601; ISO/IEC/IEEE 29148:2018; WCAG 2.2 Level AA.
- `artifacts/status/GATE1-DECISION-2026-08-09.md` — Gate 1 decision record (nine-requirement CR-v1.1.0).

### 1.5 Document overview
§2 context and constraints · §3 business requirements · §4 functional requirements · §5 external
interfaces · §6 non-functional requirements · §7 data · §8 Gherkin acceptance criteria for every
Must requirement · §9 constraints, assumptions and recorded trade-offs · §10 risks · §11 MoSCoW
release plan · §12 traceability · §13 open issues · §14 glossary · §15 approvals.

---

## 2. Overall description

### 2.1 Product perspective
Trumocracy sits between three external worlds and owns the governance logic in the middle.

```
  [ Identity attestors ]        [ Population-statistics sources ]     [ Region authorities ]
   (>=2 independent,             (>=2 independent per region,          (boundary definitions,
    per launch region)            reference data only)                  versioned)
            |                                |                                   |
            v                                v                                   v
  +---------------------------------------------------------------------------------------+
  |                              T R U M O C R A C Y                                       |
  |  personhood & residency  |  party incubation  |  membership  |  governance & ballots   |
  |  (no identity data at rest, no operator override anywhere in the governance path)      |
  +---------------------------------------------------------------------------------------+
            |                                |                                   |
            v                                v                                   v
   [ Citizen client:            [ Public verifiable record:         [ Independent verifier:
     mobile web + light          counts, rolls, tallies,              anyone may re-run and
     Android app ]               charters, version history ]          reproduce every result ]
```

Trumocracy is **not** an authority. It consumes attestations and statistics as reference data and
emits a publicly verifiable record. No external system, and no internal role, holds an override.

### 2.2 Product functions (high level)
1. Prove unique personhood and regional residency without revealing identity or address.
2. Draft, publish and petition for a party across eight mandatory policy pillars.
3. Compute an activation threshold from the declared jurisdiction's eligible population and activate
   the party automatically when it is met and sustained.
4. Admit any verified citizen to any active party with identical standing and exactly one vote.
5. Accept member proposals; enforce tiered quorums, supermajorities and timelocks for amendment.
6. Run anonymous, receipt-free ballots with an invisible re-vote override and a publicly
   reproducible tally.
7. Scope candidate nomination and voting to the region and office where the person resides.
8. Publish manifestos and commitments with immutable version history; attribute office-holders'
   governance votes; run mid-term recall.
9. Emit a publicly verifiable record of every governance action; ship an independent verifier.
10. Sponsor all citizen action costs so the citizen holds no token and pays nothing.
11. Assign verified citizens to a self-declared participation tier (Supporter / Worker / Candidate),
    apply three-tier privacy, and enforce tier-scoped eligibility without conferring voting weight.
12. Enable party constitution drafting, ratification and amendment under tiered member vote.
13. Run the eight-stage proposal lifecycle end-to-end with a permanent, append-only decision trail.
14. Track and publish measurable manifesto commitments across 1/3/5/10/30-year horizons.
15. Publish party finances in real time with anomaly detection; enforce contribution caps by code.
16. Record and publish conflict-of-interest disclosures; enforce recusal from affected decisions.
17. Produce independent internal-audit reports and publish them append-only.
18. Administer dispute resolution with per-case sortition appeal panels; publish records.
19. Run conduct votes and removal/expulsion ballots; require affirmative quorum to remove.
20. Publish a real-time transparency dashboard and a factual performance scorecard.
21. Support multi-country operation: verified identity → select legally eligible country →
    create or join a party; distinguish platform party-creation from legal registration.
22. Platform-level stewardship: an elected, recallable, powers-enumerated steward body that
    coordinates but cannot control (§4.39).

### 2.3 User classes & characteristics

| Class | Description | Expertise | Frequency | Privacy posture |
|-------|-------------|-----------|-----------|-----------------|
| **Citizen (unenrolled)** | Adult resident of a pilot jurisdiction, not yet verified | Low; non-technical | Once (enrolment) | Anonymous |
| **Verified Citizen** | Holds a personhood credential + residency scope | Low | Occasional | Anonymous |
| **Drafter** | Authors a party charter and its eight pillars | Low–medium; motivated | Bursty | Pseudonymous until they choose otherwise |
| **Endorser** | Backs a petition in their own jurisdiction | Low | Rare | Anonymous |
| **Member** | Belongs to an active party; proposes and votes | Low | Weekly–monthly | Tier-dependent — see three-tier model: Supporter-tier: anonymous, never disclosed; Worker/Candidate tiers: public by explicit informed consent at role-taking |
| **Supporter (tier)** | Self-declared entry tier; participates in ordinary member votes; anonymous unconditionally | Low | Weekly–monthly | **Anonymous — unconditionally; no participation record exists or is published; nullifier-only on the verifiable record** |
| **Worker (tier)** | Self-declared active contributor tier; may serve on committees (deliberative only); public by consent | Low–medium | Weekly | **Public by explicit informed consent given at self-declaration; prior Supporter-period activity never retroactively linked** |
| **Committee member** | Member (any tier) serving on a deliberative body; produces proposals and drafts only; holds no decisional power | Low–medium | Weekly | Public where the member is Worker- or Candidate-tier; **committee output goes to ordinary member vote — committee holds zero outcome power** |
| **Candidate (tier)** | Self-nominated, code-checked, member-voted; stands for a region+office | Medium | Seasonal | **Publicly identified by explicit informed consent at self-nomination; disclosure scaled to power sought; irrevocable for the term; prior Supporter-period activity never retroactively linked** |
| **Office-holder** | Elected representative of a region+office | Medium | Ongoing | Publicly identified; governance votes attributable |
| **Independent Auditor / Journalist / Researcher** | Runs the verifier, re-computes tallies | High | Ad hoc | External; no account required |
| **Trumocracy Operator (sre)** | Runs infrastructure | High | Continuous | **Holds no governance power by design** |
| **Steward** | Elected platform-level coordinator; powers enumerated and exhaustive; no outcome power | Medium | Ongoing | Publicly identified by explicit informed consent at candidacy (three-tier model; stewards are a public-tier role) |

### 2.4 Operating environment
Mobile web (evergreen mobile browsers) and a lightweight Android application; device floor **2 GB
RAM, Android 9**; network floor **2G-class (64 kbit/s), intermittent**; eight launch languages
including at least one right-to-left script; one pilot jurisdiction at launch (one additional
jurisdiction planned post-launch once month-6 metrics are confirmed, per Gate 1 Lever L2 decision;
Phase-1 pilot jurisdiction: **India** — Aadhaar offline paperless KYC; FR-070 adapter class (c);
OI-04-PILOT resolved 2026-08-20 — see DECISIONS-2026-08-20-PILOT-VERIFICATION.md and §4.40).

### 2.5 Design & implementation constraints
See §9 (`CON-001` … `CON-015`). _(v2.3.1 ISS-01: range updated to reflect CON-015 minted at v2.3.0.)_

### 2.6 Assumptions & dependencies
See §9.2.

### 2.7 Stakeholders & responsibilities

| Name | Role | Accountable for |
|------|------|-----------------|
| Priya Raghunathan | Product Owner | Docs 01/02/05; Gate-1 direction |
| Marcus Adeyemi | Principal PM, Identity & Personhood | Enrolment, nullifiers, attestor plurality |
| Dr. Lena Kowalczyk | Privacy Lead | Anonymity, unlinkability, data minimisation |
| Tomás Ferreira | PM, Party Formation & Governance | Drafting, petition, threshold, proposals, amendment |
| Aisha Nkemdirim | PM, Elections & Voting | Ballots, coercion resistance, nomination, election, recall |
| Erik Lindqvist | PM, Transparency & Treasury | Manifestos, version history, ledger, contribution rules |
| Hiroshi Tanaka | PM, Platform Economics & Access | Cost per action, fee sponsorship, performance |
| Nadia Hassan | Accessibility & Localisation Lead | WCAG 2.2 AA, i18n/RTL, low-bandwidth, plain language |
| Rafael Duarte | Head of Security | Sybil resistance, governance-attack resistance, audits |
| Sofia Marchetti | Head of Legal & Regulatory | Jurisdiction boundary, compliance posture, transparency reporting |
| Daniel Okonkwo | Head of Trust & Safety | Moderation-by-code boundary, abuse metrics, harassment |
| Grace Mbeki | Head of Community & Field Operations | Membership, onboarding, field enrolment |
| Amara Diallo | Support & Account Recovery Lead | Recovery, appeals, support |
| Yuki Sato | Data & Measurement Lead | Metrics, denominators, dispute process |
| Chen Wei | Reliability Lead | Availability, liveness, censorship resistance |
| Ingrid Bergqvist | Party Accountability Lead | Internal audit, disputes, conduct votes, removal & expulsion |

---

## 3. Business Requirements (BR)

| ID | Requirement | Priority | Success measure | Owner | Source |
|----|-------------|----------|-----------------|-------|--------|
| BR-001 | Any verified citizen MUST be able to originate a complete party programme covering all eight mandatory pillars without permission from any incumbent, elite or platform employee. | Must | ≥ 50 fully-pillared petitions drafted in month 1; 0 drafts requiring any human approval to publish | Tomás Ferreira | PR-FAQ §B, Obj. 1 |
| BR-002 | A proposed party MUST gain full party status only by demonstrated support from a defined percentage of the eligible population of its declared jurisdiction, computed and applied by code. | Must | ≥ 12 parties activated in 12 months; 100% of activations traceable to a reproducible threshold computation | Tomás Ferreira | PR-FAQ §B, Obj. 2 |
| BR-003 | Any verified citizen MUST be able to join any active party directly, with standing and voting rights identical to every other member. | Must | 0 joins requiring approval; 0 members holding >1 vote; ≥ 1 party where the founding drafter is outvoted by month 12 | Grace Mbeki | PR-FAQ §B, Obj. 3 |
| BR-004 | Candidate nomination and voting MUST be scoped to the geographic region and office where the person actually resides. | Must | 100% of nominations and internal-election ballots scope-checked; 0 out-of-region votes counted | Aisha Nkemdirim | PR-FAQ §B, Obj. 4 |
| BR-005 | Manifestos, commitments and office-holders' governance votes MUST be publicly verifiable, and members MUST be able to remove a non-performing representative mid-term. | Must | 100% of closed ballots independently reproducible from published raw data alone — any third party can re-compute the tally by hand without Trumocracy's cooperation (FR-033, FR-054); the open-source verifier tool that makes this convenient (FR-055) is a Should enhancement to the Must-level raw-data guarantee; ≥ 1 recall reaching a vote per 20 offices per year | Erik Lindqvist | PR-FAQ §B, Obj. 5 |
| BR-006 | Every participant MUST be a real, unique human eligible in a specific region, such that duplicate or synthetic accounts cannot profitably influence any count. | Must | Audited duplicate/synthetic-person rate ≤ 0.1% of credentials per region, measured by independent out-of-band sampling (consented random sample of ≥ 5,000 credentials per region per quarterly audit, 95% confidence interval; audit body and consent framework confirmed before Gate 2; methodology: independent auditor draws sample, matches against external reference cohort, publishes protocol and confidence interval). | Marcus Adeyemi | PR-FAQ §E2 |
| BR-007 | The platform MUST be usable by a non-technical citizen on a low-end phone at zero monetary cost and with no custodial or cryptographic concepts exposed in primary flows. | Must | ≥ 80% unaided enrol→endorse completion in ≤ 10 min; SUS ≥ 75; USD 0.00 charged to citizens; median platform cost < USD 0.01/action | Hiroshi Tanaka | PR-FAQ §B, §C |
| BR-008 | Governance logic — membership rights, thresholds, quorums, timelocks, office assignment and recall — MUST execute automatically in code, with no human discretion available to any actor including Trumocracy. | Must | 0 privileged override paths present at security audit; 100% of state transitions attributable to a published rule | Tomás Ferreira | PR-FAQ §A.1 |
| BR-009 | Proving personhood and residency MUST NOT expose a member's real-world identity or make them targetable; candidates for office publicly disclose identity by explicit choice. | Must | 0 confirmed deanonymisations of an ordinary member; 100% of candidate disclosures preceded by recorded informed consent | Dr. Lena Kowalczyk | PR-FAQ §A.2, §E3 |
| BR-010 | Wealth MUST NOT be convertible into governance influence: no transferable voting instrument, no token-weighted vote, no purchasable membership, no vote-inflating fake members. | Must | 0 transferable governance instruments in the system; 0 governance outcomes correlated with contribution volume at audit | Erik Lindqvist | PR-FAQ §A.3, §E3 |
| BR-011 | Voting MUST be receipt-free and coercion-resistant: a voter MUST be unable to prove to a third party how they voted, and MUST be able to invisibly override a coerced vote. | Must | (a) Adversarial audit (PPT adversary with λ ≥ 128 bits, N ≥ 10,000 ballot observations, 95% confidence) finds no receipt construction — no cryptographic or operational artefact enables a voter to prove their choice to a third party; (b) 0 externally detectable override events — an adversary holding full operator logs, public record and network timing data cannot detect that a re-vote occurred; (c) coercion incident rate published as an upper bound from independent incident reports with a stated methodology — not as an operational observation rate, since re-voting is by design invisible (TD-06, FR-032) | Aisha Nkemdirim | PR-FAQ §A.4, §E3 |
| BR-012 | The platform MUST resist governance attacks — instantaneous voting-power acquisition and mob capture of an existing party's founding charter by a sudden membership flood. | Must | 0 successful takeovers; simulated flash-flood and flood-capture attacks fail in red-team exercise before Gate 2 | Rafael Duarte | PR-FAQ §E2 |
| BR-013 | Every candidate seeking election to a party office MUST complete a structured, member-visible debate process before their name appears on an election ballot; candidacy MUST be determined by a member vote following those debates, and incumbency MUST NOT confer any automatic right to candidacy or renomination. | Must | 100% of major-election ballots preceded by three completed debates per candidate; 0 automatic renominations detected at launch audit | Aisha Nkemdirim | CR-v1.1.0; GATE1-DECISION-2026-08-09.md (Change 4) |
| BR-014 | A party MUST be able to conduct its entire institutional life — creation, constitution, operation, decision-making, candidate selection, policy development, performance evaluation — transparently on the platform, so that its fitness to govern itself is publicly demonstrable before it asks for public power. | Must | ≥ 1 party completes full lifecycle (constitution → operation → candidate selection → performance report) on-platform with 100% public auditability; 0 institutional actions requiring off-platform records | Tomás Ferreira | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-015 | No committee, working group or human role may hold any capability that can change who wins, who votes, or who is a member; deliberative bodies produce proposals only; election administration, membership verification, vote counting, eligibility determination and data integrity MUST be executed by code. | Must | 0 non-code outcome-determinative paths present at security audit; 100% of committee outputs confirmed as proposals awaiting member vote; 0 human-discretion overrides on any vote count or eligibility result | Rafael Duarte | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-016 | Participation tiers (Supporter / Worker / Candidate) MUST be self-assigned and descriptive, never permissive — no human approves entry to any tier; tiers MUST NOT confer voting weight; differentiated eligibility per vote type is permitted, differentiated weight is not. | Must | 0 human-approval steps on any tier entry flow; verified by inspection that no tier attribute is used as a weight multiplier; ≥ 10 test scenarios confirm equal vote weight across all tiers | Grace Mbeki | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-017 | Supporter-tier participants MUST remain anonymous unconditionally under the existing anonymity guarantees; Worker- and Candidate-tier participants are public by explicit informed consent given at role-taking, with disclosure scaled to the power sought and published in advance. | Must | 0 confirmed deanonymisations of any Supporter-tier participant; 100% of Worker/Candidate role-takings preceded by recorded explicit informed consent; prior Supporter-period activity confirmed never retroactively linked in 100% of role-transition audit samples | Dr. Lena Kowalczyk | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0; resolves OI-13 |
| BR-018 | All removal and expulsion outcomes MUST require an affirmative quorum of members actively voting for the outcome — never silence, absence of a defender, or a human official's finding; investigation and recommendation functions publish records but hold no outcome power. | Must | 0 removal or expulsion outcomes that do not satisfy an affirmative quorum threshold; 100% of investigation/recommendation records published; 0 human-official unilateral removal or expulsion events | Daniel Okonkwo | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-019 | A party's constitution, manifesto commitments, finances, conflict-of-interest disclosures, audit reports, dispute records and performance scorecard MUST be public, append-only, and factual — informing members rather than concluding for them. | Must | 100% of required institutional records confirmed public and append-only at launch audit; 0 concluded verdicts substituted for factual records; scorecard data independently reproducible from source events | Erik Lindqvist | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-020 | The platform MUST support multiple countries from the outset (verified identity → select legally eligible country → create/join a party), deployed to one pilot jurisdiction first per the Gate-1 disposition; platform party-creation MUST be distinct from legal registration, which the platform cannot grant or override. | Must | Multi-country architecture confirmed in Doc 03; ≥ 1 test scenario validates country-eligibility scoping; platform registration flow confirmed to include explicit boundary statement that platform creation ≠ legal registration in 100% of country-creation flows | Sofia Marchetti | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0; OI-04 |
| BR-021 | The platform MAY have a steward organisation for coordination — and MUST NOT need one: every citizen-facing capability (enrolment, party creation, voting, proposal submission, forking) MUST operate with zero dependency on any steward action, signature or liveness, so that the total disappearance of the steward body leaves the protocol operating unchanged. Steward powers are enumerated and exhaustive, bounded by the same test as every other body: nothing that changes who wins, who votes, or who is a member. | Must | 0 steward-dependency paths found by capability-absence testing in any citizen flow; steward-body vacancy (simulated) causes zero citizen-facing degradation | Rafael Duarte | GATE1-DECISION-2026-08-11.md Part B; design intent: the Bitcoin Foundation lesson (see §4.39 preamble) |

---

## 4. Functional Requirements (FR)

> Every FR traces up to a BR, carries a MoSCoW priority, a **named individual owner**, and a
> verification method. **Must** rows are the RTM's gating rows (Doc 08). `Verify by` values:
> **T** = Test, **D** = Demo, **I** = Inspection, **A** = Analysis (incl. independent audit).

### 4.1 Personhood & enrolment

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-001 | Issue at most one active personhood credential per real human being, and reject a second enrolment attempt by the same human with an explanatory, non-identifying result. | BR-006 | Must | Marcus Adeyemi | T, A |
| FR-002 | Enforce, for every action scope (petition, membership, proposal, ballot, nomination, recall), that a given person may act at most once, while making two actions by the same person in two different scopes indistinguishable from actions by two different people. | BR-006, BR-009 | Must | Marcus Adeyemi | T, A |
| FR-003 | MUST NOT persist, transmit onward, or make retrievable any identity document image, document number, biometric template, date of birth, or residential address after an enrolment check completes; only a non-identifying eligibility result may be retained. _(v2.3.0: FR-126 (§4.42) strengthens this requirement by specifying that raw credential material MUST be processed exclusively on the user's device and discarded before any network transmission — see §4.42 for the on-device posture; FR-003 continues to govern the prohibition on persistent storage.)_ | BR-009 | Must | Dr. Lena Kowalczyk | I, A |
| FR-004 | Support at least two mutually independent identity-attestation paths per launch region, publish each attestor's share of credentials issued per region, and refuse further issuance from any attestor whose share would exceed 50% in that region. _(✅ OI-20 DECIDED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md). Ruling verbatim: "the design stays plural; the pilot deploys one rail (Aadhaar); the gap is a dated Phase-1 limitation, never a Charter amendment. FR-004's plural-pluggable-issuer requirement is satisfied at the ARCHITECTURE level — Aadhaar is one implementation of the pluggable adapter interface, not a hardcoded dependency. Record the single-rail pilot as a Phase-1 DEPLOYMENT limitation with an explicit exit condition: Phase 2 adds eIDAS. No Charter guarantee is amended. State honestly, as an accepted pilot limitation: in Phase 1 a person without Aadhaar cannot enrol in the pilot region. MUST: making single-issuer operation permanent would be a Charter-layer change requiring re-entry, never a deployment default. Record it. Close OI-20." **FR-004 normative text is NOT amended.** Phase-1 deployment limitation recorded honestly: (a) in Phase 1 a person without Aadhaar cannot enrol in the pilot region — accepted exclusion per TD-05/ADR-016; (b) FR-004's 50% attestor-share cap is inoperative during the Phase-1 single-rail deployment — the sole rail carries 100% share for the pilot's duration; this is a dated, accepted, findable limitation recorded not hidden. Exit condition: Phase 2 adds eIDAS 2.0 as the second rail (FR-121). Charter guard: making single-issuer operation permanent requires Charter-layer amendment process — see FR-129 (§4.43) and OI-20 resolution in §13.)_ | BR-006, BR-012 | Must | Marcus Adeyemi | T, I |
| FR-005 | Revoke a personhood credential proven fraudulent, invalidate its future actions without altering the historical record, and provide a rejected or revoked applicant an appeal that requires no more personal data than the original check. | BR-006 | Should | Amara Diallo | T, D |
| FR-069 | Derive a deterministic nullifier from a stable personal identifier within the enrolment credential using a published derivation, such that the nullifier is computed without revealing the underlying identifier; store only the derived nullifier on the verifiable record; and MUST reject any enrolment attempt whose derived nullifier matches an existing record. The derivation MUST verify: (a) the credential was signed by a recognised issuer, (b) the credential has not expired, (c) the region attribute establishes the person's residency in the claimed region tree, (d) the nullifier was correctly derived. No name matching, biometric data storage, or administrative review is used for duplicate detection. _(Extends the enrolment circuit addressed in the C-03 security finding. Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 6.)_ | BR-006, BR-009 | Must | Marcus Adeyemi | T, A |
| FR-070 | Present the credential source as a pluggable adapter interface with no single implementation hardcoded. The platform MUST support at minimum the following three CANDIDATE adapter types (non-exhaustive; none is hardcoded as the only supported path; region-level adapter selection is a configuration decision; Doc 03 confirms final specifications): **(a) eIDAS 2.0 wallet adapters** — government-issued digital-identity wallets conforming to the eIDAS 2.0 EUDI wallet framework or any equivalent national digital-identity regulation. The adapter MUST supply to the FR-069 derivation: (i) a qualified electronic attestation of attributes bearing a valid qualified trust-anchor signature, verified against the issuing member-state's trust anchor published in the applicable national or supra-national trust list; (ii) the stable personal identifier designated by the issuing state (e.g. the natural-person identifier in the Personal Identification Data attestation); (iii) a residency attribute placing the person in the claimed region tree. The derivation operates on field (ii). **(b) ICAO Doc 9303 NFC chip adapters** — biometric passports and NFC-enabled identity cards conforming to ICAO Doc 9303. The adapter MUST supply to the FR-069 derivation: (i) the Document Security Object (SOD) verifiable against the issuing state's Document Signer Certificate obtained from the ICAO public key directory; (ii) the stable identifier field — MRZ DocumentNumber or chip-resident pseudonymous identifier as designated by the issuing state; (iii) an attested residency claim from a recognised attestor. The derivation operates on field (ii). **(c) Offline paper KYC adapters** — government-signed offline identity verification flows for jurisdictions where digital wallets are not yet available (e.g. Aadhaar offline XML, Aadhaar paperless eKYC, or any equivalent government-signed offline assertion scheme). The adapter MUST supply to the FR-069 derivation: (i) a digitally signed or verifier-attested assertion carrying a government-assigned stable identifier; (ii) a residency attribute established by the attestor; (iii) evidence of the attestor's authorisation to operate in the region. The derivation operates on the stable identifier in field (i); no biometric data is retained after the attestor check. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 6.)_ | BR-006, CON-005 | Must | Marcus Adeyemi | I, A |
| FR-073 | Designate, within each region, the government eID credential rail as the sole issuer class permitted to mint enrolment nullifiers; all other credential classes (liveness attestors, alternative identity providers) MUST be availability-only and MUST NOT create enrolment nullifiers; availability-only classes MAY attest liveness or authorise slow recovery as permitted by FR-071 and FR-072, but any such action MUST NOT grant membership or governance rights. _(Aligns with OI-03 Gate 1 disposition: government eID as sole Phase-1 uniqueness anchor per region. Relationship with ADR-003 issuer-plurality model requires architect review in Doc 03 — see §13 OI-12. Accepted exclusion per TD-05. Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 8.)_ | BR-006, BR-012 | Must | Marcus Adeyemi | I, A |

> ✅ v1.1.1 RESOLUTION (OI-12) — Resolved by ADR-016 (docs/adr/ADR-016-enrolment-issuer-hierarchy.md; Doc 03 §16): ADR-003 is amended for Phase 1; the Phase-1 single-issuer-class policy is reconcilable with the issuer-plurality model. OI-12 is closed.

### 4.2 Residency attestation & geographic hierarchy

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-006 | Establish that a person is resident in a named region without revealing their residential address to Trumocracy, to any party, or to any other member. | BR-004, BR-009 | Must | Marcus Adeyemi | T, A |
| FR-007 | Maintain a versioned hierarchical region registry (nation ▸ state/province ▸ district ▸ ward) with stable region identifiers, such that a boundary change creates a new registry version and MUST NOT retroactively alter the eligibility, counts or results of any ballot, petition or election already closed. | BR-004, BR-002 | Must | Yuki Sato | T, I |
| FR-008 | Permit each person exactly one active residency scope at a time, derive every scope-restricted right from it, and require a minimum of 180 days between residency changes. | BR-004, BR-012 | Must | Marcus Adeyemi | T |
| FR-009 | Derive each region's eligible-population denominator from at least two mutually independent published sources, refuse to compute a threshold when those sources disagree by more than a published tolerance, and expose a dispute window during which a denominator may be challenged before it is used. | BR-002, BR-012 | Must | Yuki Sato | T, A |

### 4.3 Party drafting and the eight mandatory pillars

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-010 | Allow any verified citizen to create a party draft comprising a name, an emblem, exactly one declared jurisdiction (a region identifier from the registry), and a charter, with the drafter identified only pseudonymously; and reject a name or emblem that collides with an existing petition or active party in the same jurisdiction. | BR-001 | Must | Tomás Ferreira | T, D |
| FR-011 | Require content meeting a published minimum-substance standard in **all eight** pillars — Finance, Society, Governance, Law, Education, Healthcare, Security, Regional Plans — and MUST refuse publication of a draft in which any pillar is absent or below that standard, naming each deficient pillar. | BR-001 | Must | Tomás Ferreira | T, D |
| FR-012 | Allow a charter to declare its own amendment tiers, thresholds and timelocks, accept them only within published platform-wide bounds, and apply platform default values where the charter is silent. | BR-001, BR-008 | Should | Tomás Ferreira | T |

### 4.4 Petition lifecycle & threshold computation

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-013 | Place a published draft into a Petition state with a fixed expiry, archive an expired petition immutably, and impose a cooldown before the same drafter may re-petition with a substantially identical charter in the same jurisdiction. _(v2.14.0 — Re-petition cooldown decided policy value: **30 days** (Rathish Kumar, 2026-08-26; DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md, Ruling 3; closes COOLDOWN-01). Implemented as `REPETITION_COOLDOWN_SECONDS = 30 × 86400 s` in `packages/protocol/src/constants.js` line 186 (verified). "Substantially identical" is determined by the normalized charter fingerprint (the built D4 definition — fingerprint comparison is the normative test for re-petition identity).)_ | BR-002 | Should | Tomás Ferreira | T |
| FR-014 | Accept at most one endorsement per person per petition, accept it only from a person whose active residency scope lies within the petition's declared jurisdiction, and make endorsements non-transferable, non-purchasable and non-delegable. | BR-002, BR-006, BR-010 | Must | Tomás Ferreira | T, A |
| FR-015 | Allow an endorser to withdraw an endorsement at any time before activation and decrement the count accordingly, without revealing who withdrew. | BR-002 | Should | Tomás Ferreira | T |
| FR-016 | Compute the activation threshold entirely in code as a published percentage of the declared jurisdiction's eligible-population denominator, and MUST NOT permit any actor to set, waive, lower or override a threshold for an individual party. | BR-002, BR-008 | Must | Tomás Ferreira | T, I |
| FR-017 | Display live petition progress (current count, threshold, percentage, time remaining) publicly, without revealing the identity of any endorser and without revealing which persons have not endorsed. | BR-002, BR-009 | Should | Erik Lindqvist | T, D |

### 4.5 Party activation

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-018 | Activate a party automatically, with no human approval step available to anyone, when its endorsement count has met or exceeded the threshold continuously for a published dwell period; and record immutably at activation the charter version, the endorsement count, the denominator value and the identity of the denominator sources used. | BR-002, BR-008 | Must | Tomás Ferreira | T, I, A |
| FR-019 | Prevent any change to a party's declared jurisdiction after activation; expansion into another jurisdiction MUST require a fresh petition meeting that jurisdiction's own threshold. | BR-002, BR-012 | Should | Tomás Ferreira | T |

### 4.6 Membership: open onboarding and equal standing

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-020 | Admit any verified citizen to any active party on request, with no approval, sponsorship, interview, invitation, fee or veto available to any existing member, office-holder, drafter or platform actor. _(v2.3.0 per Decision 2 (DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Rathish, 2026-08-20); v2.3.1 ISS-03: scoping sentence added. **Scope of this annotation: open-tier (non-counted) joining only.** The normative text of FR-020 — 'Admit any verified citizen to any active party on request, with no approval, sponsorship, interview, invitation, fee or veto' — applies in full and without amendment to COUNTED membership. This annotation records the Decision 2 extension to open-tier joining only: a citizen may join the platform for non-counted (open-tier) participation (FR-122) without first completing personhood verification. The no-approval / no-sponsorship / no-interview / no-invitation / no-fee / no-veto properties are retained in full and extended to open-tier entry; these admission properties apply without exception to COUNTED membership. Verified personhood is required only for counted actions (FR-123); it is not a gate on open-tier joining. _(v2.4.0 per OI-19 ruling (Rathish, 2026-08-20; DECISIONS-2026-08-20-OI19-OI20.md): composition confirmed — invite-gating in FR-125 is a rate-limiter on the default open-tier path, never an admission condition; FR-020's admission guarantee is discharged by the always-open non-invite fallback mandated in FR-125; FR-020 is unamended and absolute.)_ | BR-003, BR-008 | Must | Grace Mbeki | T, D |
| FR-021 | Grant every member of a party exactly one vote of identical weight in every party ballot, and MUST NOT expose any mechanism by which standing, weight, precedence or privilege can differ between members on grounds of seniority, office, tenure, contribution or any other attribute. _(v2.3.0 per Decision 2 (DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Rathish, 2026-08-20): one-member-one-vote applies to binding ballots, which are personhood-gated under FR-123 (counted actions require verified personhood, also FR-002 per-scope nullifier). Verification gates whether an action COUNTS; it does NOT create weight differences among verified members. FR-021 applies in full to all verified (counted) members — no tier multiplier, no seniority weight, no other differentiation.)_ | BR-003, BR-010 | Must | Grace Mbeki | T, I, A |
| FR-022 | Allow a member to leave a party at any time, taking immediate effect on their rights, with no exit approval, penalty or notice period. | BR-003 | Must | Grace Mbeki | T |
| FR-023 | Withhold governance rights (proposing, voting, nominating, endorsing a nomination, initiating or signing a recall) from a new member until a published maturation period has elapsed since joining; and rate-limit each person's join/leave transitions per party and in aggregate per period. | BR-012 | Must | Rafael Duarte | T, A |
| FR-064 | Enforce that a verified person holds active membership in at most one party at a time; switching parties MUST reset the membership tenure clock to zero. **v1 semantics (EXPLICIT-LEAVE — amended v2.15.0 per the FR-064-SEMANTICS ruling, option (a); Rathish, Human Approver, 2026-08-29):** a request to join a second party while any active membership exists MUST be refused, naming the current party; membership ends ONLY by the member's explicit, recorded leave action (FR-022), after which a new join proceeds. Nothing consequential happens by silence — auto-void would be a silent, costly state change to a membership the member cares about, against the platform's affirmative-action pattern. **v2 (deferred):** automatic voidance, and enforcement by a global membership-scope nullifier that cannot be bypassed by leaving and re-joining within the same session, are DEFERRED to DES-065 at the v2 seam swap, where one-active-membership is enforced cryptographically — the v1 explicit-leave behaviour is the subset the v2 mechanism formalises. _(SUPERSEDED wording, retained for the record, not deleted: "joining a new party MUST automatically void membership in the current party; … enforced by a global membership-scope nullifier" — superseded by this amendment. Original Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 2. Amendment source: FR-064-SEMANTICS ruling (a) — flag raised Doc 06 v2.3.0 §7 #20, closed Doc 06 v2.3.3. RTM note: the FR-064 Must row REMAINS OPEN pending the DES-065 build (v2); this ruling resolves the semantics, not the row.)_ | BR-003, BR-012 | Must | Rafael Duarte | T, A |
| FR-068 | Apply a maturation requirement of at least one month of continuous membership at the eligibility snapshot for any vote or governance action; MUST waive this requirement for all members of a party during that party's first three calendar months of active status; during any such waiver the growth-surge defence controls mandated by FR-023 and FR-028 MUST remain fully active — the waiver relaxes tenure only and MUST NOT relax anti-capture mechanisms. _(Growth-surge defence verified by UT-0220. Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 5.)_ | BR-003, BR-012 | Must | Rafael Duarte | T, A |

### 4.7 Proposals, charter amendment, tiers and timelocks

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-024 | Allow any matured member to submit a proposal, declaring its tier, with no pre-screening, moderation or approval by any member, office-holder or platform actor. _(v2.1.0 per OI-14 decision: submitting a proposal — original or competing — requires Worker tier or above, because authorship is public (FR-090) and an anonymous Supporter cannot author without breaking their own anonymity. This is not a gate: Worker tier is self-declared (FR-080), so any member who wishes to author simply declares. Supporters retain full voting rights.)_ _(**v2.16.0 — CONFIRMED, not amended (PROPOSING-NOT-COUNTING-GATED ruling; Rathish, Human Approver, 2026-08-30; artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md §1):** submitting a proposal is **OPEN participation — NOT an FR-123 counting action**. No verification gate, no government-ID check and no `IEligibilityVerifier` call stands on the authoring path; only **voting** on a proposal is the FR-123 counting action. Gating authorship on verification status would be a participation restriction, which **FR-020 prohibits**. **The OI-14 Worker-tier requirement above is UNCHANGED and is not a verification gate** — the two sit on orthogonal axes (§4.41 TWO-AXIS NOTE): Worker tier is the self-declared *privacy-disclosure* step (FR-080, nobody approves it), required because authorship is public and a Supporter is anonymous unconditionally; the *verification* axis imposes nothing here. The commissioning brief for the proposals drop had stated that proposing was a counting action; **that instruction is SUPERSEDED by the FR-020 constraint** and the FR-conformant reading — which is what was built — is confirmed. Recorded so that no future increment re-gates authorship: adding a verifier call to the authoring path violates this ruling; deleting the Worker-tier rule misreads it.)_ | BR-003, BR-008 | Must | Tomás Ferreira | T, D |
| FR-025 | Enforce distinct, monotonically escalating quorum and supermajority requirements across at least four proposal tiers — ordinary, policy, charter, entrenched — and MUST reject the enactment of any proposal that fails either the quorum or the supermajority for its declared tier. | BR-008, BR-012 | Must | Tomás Ferreira | T |
| FR-026 | Impose a mandatory timelock between a proposal passing and taking effect, of a duration that increases with tier, during which the pending change is public and no actor can shorten, waive or bypass it. | BR-008, BR-012 | Must | Tomás Ferreira | T, I |
| FR-027 | Permit a charter to designate specific founding clauses as **entrenched**, and enforce for those clauses the highest tier, the longest timelock, and a quorum satisfiable only by members whose membership predates the proposal by a published minimum age. | BR-012 | Must | Rafael Duarte | T, A |
| FR-028 | Fix the set of eligible voters for a proposal at the instant the proposal opens, and exclude from that proposal every person who joins, matures into rights, or changes residency after that instant. | BR-012 | Must | Rafael Duarte | T |
| FR-029 | Allow a proposer to withdraw or amend a proposal before voting opens (and not after), and rate-limit proposal submission per person per period to prevent flooding. | BR-008 | Should | Tomás Ferreira | T |

### 4.8 Anonymous, receipt-free voting

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-030 | Record each ballot such that no actor — including Trumocracy, an infrastructure operator, a party, an office-holder, or a colluding subset of them — can link a cast ballot to the person who cast it, while still proving that the ballot came from exactly one eligible, not-yet-counted voter. | BR-009, BR-011 | Must | Dr. Lena Kowalczyk | T, A |
| FR-031 | Ensure a voter cannot produce, export, screenshot, reconstruct or be issued any artefact that proves to a third party how they voted, including under voluntary cooperation by the voter. | BR-011 | Must | Aisha Nkemdirim | T, A |
| FR-032 | Allow a voter to cast a replacement ballot at any time before the ballot closes, count only the last ballot cast, and ensure that neither the public record, the client device, nor any notification reveals that a replacement occurred or how many were cast. | BR-011 | Must | Aisha Nkemdirim | T, A |
| FR-033 | Produce for every closed ballot a publicly published result that any third party can independently re-compute from public data and confirm to be correct, without trusting Trumocracy or any operator, and without learning any individual vote. | BR-005, BR-008 | Must | Erik Lindqvist | T, D, A |
| FR-034 | Withhold all interim tallies, partial counts, turnout-by-option figures and exit-style projections until a ballot closes. | BR-011 | Should | Aisha Nkemdirim | T |
| FR-035 | MUST NOT provide any mechanism to transfer, sell, lend, delegate, proxy, assign or inherit a vote, an endorsement or a nomination right, and MUST reject any attempt to do so. | BR-010, BR-011 | Must | Erik Lindqvist | T, I, A |

### 4.9 Candidate nomination scoped to region and office

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-036 | Allow a matured member to nominate **only themselves**, only for an office whose region equals or contains the member's active residency scope, subject to a published minimum number of nomination endorsements from matured members resident in that region; and allow withdrawal of a candidacy at any time before the ballot locks. | BR-004 | Must | Aisha Nkemdirim | T, D |
| FR-037 | Require, before a candidacy is published, an explicit, separately recorded, informed consent in which the member acknowledges that their real-world identity becomes public; and MUST NOT disclose the identity of any person who is not a consenting candidate or office-holder under any circumstance. | BR-009 | Must | Dr. Lena Kowalczyk | T, I, A |
| FR-038 | State in that consent, before it is given, that disclosure is irreversible for the duration of the candidacy and any resulting term of office, and that consent may be revoked only by withdrawing the candidacy before the ballot locks. | BR-009 | Should | Sofia Marchetti | I, D |
| FR-065 | Allow each matured party member to cast at most one feedback vote per candidate per election, where an upvote scores +3 and a downvote scores −1; the one-vote-per-member constraint MUST be enforced by the same nullifier mechanism as scope-action limits; individual votes MUST remain private and unlinkable to their caster; only the aggregate tally MUST be publicly visible. An ADR (architect's responsibility, Doc 03) will record the deliberate asymmetry rationale; this requirement states only the scoring rule, privacy asymmetry, and single-vote enforcement. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 3.)_ | BR-004, BR-005 | Must | Aisha Nkemdirim | T, A |

### 4.10 Internal party elections

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-039 | Run each internal election for one (region, office) pair, admit as voters only matured members whose active residency scope lies within that region, publish the full timetable before opening, and prevent any change to the timetable, candidate set or tie-break rule after opening. | BR-004, BR-008 | Must | Aisha Nkemdirim | T, I |
| FR-040 | Publish the election result and assign the office role automatically in code on close, with no confirmation, ratification, veto or appointment step available to any member, drafter, office-holder or platform actor. | BR-004, BR-008 | Must | Aisha Nkemdirim | T, D |
| FR-041 | Enforce the fixed term length declared in the charter, expiring the office automatically at term end and requiring a fresh election to continue. | BR-005 | Should | Aisha Nkemdirim | T |

### 4.11 Recall of representatives

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-042 | Allow any matured member resident in an office's region to initiate a recall of that office's holder at any point during the term, without approval from the office-holder, any other office-holder, the drafter, or any platform actor. | BR-005 | Must | Aisha Nkemdirim | T, D |
| FR-043 | Require recall to pass two stages — an initiation-signature threshold followed by a recall ballot whose approval bar is strictly higher than the bar that elected the office-holder — with both bars published before initiation opens. | BR-005, BR-012 | Must | Aisha Nkemdirim | T |
| FR-044 | Impose a published grace window after an election during which no recall may be initiated, and a cooldown after a failed recall before the same office may be targeted again. | BR-005, BR-012 | Should | Daniel Okonkwo | T |
| FR-045 | Revoke the office role automatically in code upon a successful recall, and open a by-election for that (region, office) pair within a published number of days. | BR-005, BR-008 | Must | Aisha Nkemdirim | T, D |

### 4.12 Manifestos, commitments and immutable version history

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-046 | Publish, for every active party, a public, machine-readable manifesto and a set of dated commitments, each carrying a status (in progress / met / not met) and links to supporting evidence. _(v2.0.0: SUPERSEDED — absorbed and strengthened by the manifesto-commitment requirements in §4.28; superseded by FR-094 and FR-095. Retained for traceability; do not implement separately.)_ | BR-005 | Should | Erik Lindqvist | T, D |
| FR-047 | Preserve every published charter, pillar and manifesto version immutably: an edit MUST create a new version that supersedes but never overwrites, every prior version MUST remain publicly retrievable, and a diff between any two versions MUST be viewable. | BR-005, BR-008 | Must | Erik Lindqvist | T, I |
| FR-048 | Attribute publicly to the office-holder every governance vote they cast in their capacity as office-holder, while continuing to keep their votes as an ordinary member anonymous. | BR-005, BR-009 | Should | Erik Lindqvist | T, A |

### 4.13 Treasury: transparency and anti-corruption

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-049 | Enforce in code a per-person cap on contributions to any one party within a rolling period, and reject a contribution that would exceed it. | BR-010 | Should | Erik Lindqvist | T |
| FR-050 | Publish every treasury inflow and outflow as an itemised, publicly readable, independently verifiable record. _(v2.0.0: raised to Must per BR-019 — financial transparency is now a business requirement, not an enhancement.)_ | BR-005, BR-010 | **Must** | Erik Lindqvist | T, D |
| FR-051 | Ensure that no payment, contribution, donation, sponsorship or in-kind transfer of any size grants or influences membership, standing, vote weight, proposal precedence, candidacy eligibility, ballot ordering, visibility or any other governance advantage; and MUST reject any configuration that would create such a link. | BR-010 | Must | Erik Lindqvist | T, I, A |
| FR-052 | Require an approved member proposal for any outflow above a charter-declared amount, and rate-cap outflows below it. | BR-005, BR-010 | Could | Erik Lindqvist | T |

### 4.14 Party fork and split

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-053 | Allow any member to fork an active party's charter and manifesto into a new draft that records its lineage (source party and exact source versions), and require the fork to enter the Petition state and meet the full activation threshold on its own. | BR-001, BR-003 | Could | Tomás Ferreira | T, D |

### 4.15 Audit and public verifiability

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-054 | Emit for every governance action — enrolment issuance count, endorsement, activation, join, leave, proposal, ballot cast, tally, nomination, election result, recall, charter amendment, treasury movement, display-filtering action — a publicly readable, tamper-evident record sufficient to reconstruct the outcome, and containing no personal data. | BR-005, BR-008, BR-009 | Must | Erik Lindqvist | T, I, A |
| FR-055 | Provide an open-source verifier that any third party can obtain and run without an account or Trumocracy cooperation, which re-computes every published count, threshold and tally from public data and reports agreement or disagreement; and provide a complete public-history export for any party. | BR-005, BR-008 | Should | Erik Lindqvist | T, D |

### 4.16 Moderation-by-code boundaries

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-056 | MUST NOT expose to any Trumocracy employee, operator, funder, office-holder, drafter or other privileged actor any capability to delete or edit published party content, remove or suspend a member, alter a count or tally, block a lawful governance action, or reorder a candidate set. The **only** permitted intervention is jurisdiction-scoped filtering of the *display* of content unlawful in the jurisdiction where it is displayed, which MUST be recorded in a public log identifying the jurisdiction, the legal basis and the affected item, and MUST NOT remove or alter the underlying record. | BR-008, BR-009 | Must | Daniel Okonkwo | I, A, T |
| FR-057 | Provide a public register of every display-filtering action with an appeal route, and publish a periodic transparency report of all legal demands received and the response given. | BR-005 | Could | Sofia Marchetti | I, D |

### 4.17 Account recovery

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-058 | Allow a citizen who has lost access to regain control of their personhood credential and residency scope without ever having been shown, stored or required to memorise a seed phrase or key material, subject to a published timelock, a notification to the account's registered channel, and a cancellation window during which the legitimate holder can abort the recovery. | BR-007 | Must | Amara Diallo | T, D |
| FR-059 | Ensure that recovery re-keys access only, and that no participant in a recovery — helper, guardian, attestor, support agent or operator — can thereby learn the subject's party memberships, past ballots, endorsements or governance history. | BR-009 | Must | Dr. Lena Kowalczyk | T, A |
| FR-071 | When an enrolment attempt produces a nullifier that matches an existing record, treat it as a recovery flow: the user MUST re-authenticate with their credential, re-derive the same nullifier, prove current key ownership, and rotate keys; membership, tenure and governance history MUST survive intact; no second identity MUST be created. This is the exclusive path for a person who has lost key material but retains their credential. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | BR-006, BR-007, BR-009 | Must | Amara Diallo | T, A |
| FR-072 | The nullifier-collision recovery flow (FR-071) MUST impose a minimum seven-day delay before key rotation completes; during the delay the active key MUST be able to veto the recovery by submitting a veto signal; the recovering credential MUST be barred from casting any vote during the delay; a notification MUST be sent to the registered channel at recovery initiation; and the veto window MUST be at least equal to the full seven-day delay. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | BR-007, BR-009, BR-012 | Must | Rafael Duarte | T, A |

### 4.18 Cost abstraction and fee sponsorship

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-060 | Complete every primary citizen flow (enrol, draft, endorse, join, propose, vote, nominate, stand, recall, recover) without the citizen holding, acquiring, funding or spending any token, cryptocurrency, balance or payment instrument, and without exposing the words for such concepts in any primary flow. | BR-007 | Must | Hiroshi Tanaka | T, D, I |
| FR-061 | Meter each person's platform-sponsored actions against a published per-person periodic budget, and when a budget or the global sponsorship pool is exhausted, degrade by delaying or queueing the action with a clear explanation and an expected time — and MUST NOT reject, charge for, or permanently deny a legitimate governance action. | BR-007, BR-012 | Must | Hiroshi Tanaka | T |

### 4.19 Public participation profile

> ✅ v2.0.0 RESOLUTION — OI-13 is resolved by the three-tier privacy ruling (BR-017): FR-062's universal public profile is SUPERSEDED by FR-082..FR-086 (the tier-scoped participation-record requirements in §4.24). Supporters have no public profile, unconditionally; Workers and Candidates have a public participation record by explicit informed consent at role-taking. FR-063 (ballot-direction MUST NOT) continues to apply to every tier and is NOT superseded.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-062 | Expose on each verified-citizen profile the following participation record, visible to any actor: (a) the list of ballots and elections in which they participated, without revealing their ballot direction on any contested vote; (b) their current and historical party memberships; (c) the petitions they have endorsed; (d) the proposals they have authored; (e) the debates they have attended (per FR-066). Exception: votes cast by an elected representative in their official office capacity MUST be publicly attributed per FR-048. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 1.)_ _(v2.0.0: SUPERSEDED by FR-082..FR-086 (three-tier participation-record requirements in §4.24) per BR-017; see OI-13 resolution. Retained for traceability; do not implement.)_ | BR-005, BR-009 | Must | Erik Lindqvist | T, I, A |
| FR-063 | MUST NOT disclose a member's ballot direction on any contested vote through any interface, export, log, inference or combination of public data; the prohibition applies to profile views, public records, and any derived dataset. Exception: the direction of a vote cast by an elected representative in their office capacity is public as required by FR-048. **Test obligation: UT-0700 and UT-0701 MUST verify the absence of any ballot-direction disclosure path.** _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 1.)_ | BR-009, BR-011 | Must | Dr. Lena Kowalczyk | T, I, A |

### 4.20 Mandatory pre-election debates

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-066 | Schedule and require three debates per candidate before every major election; each debate MUST cover one of the following topic areas: (a) local conditions, (b) local problems, and (c) the work required for the office; debate content MUST be stored via a publicly verifiable external reference address recorded on the verifiable record; scheduling, attendance attestation, and the post-debate member vote on each candidate MUST be recorded on the verifiable record. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 4.)_ | BR-013, BR-004 | Must | Aisha Nkemdirim | T, I, A |
| FR-067 | Determine candidacy from the post-debate member vote on each candidate's suitability; incumbency MUST NOT confer any automatic advancement to a ballot; no candidate MUST be renominated automatically without completing the full debate and post-debate vote process for the current election cycle. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 4.)_ | BR-013, BR-004, BR-012 | Must | Aisha Nkemdirim | T, I |

### 4.21 Country selection & the legal-registration boundary

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-074 | After personhood enrolment, the system MUST require the user to select exactly one country in which they are legally eligible to participate in party politics; legal eligibility MUST be checked by code against published per-country rules; the selected country scopes the region tree (FR-007) and all residency-derived rights; a user MUST NOT hold more than one active country selection at a time; any change of country selection MUST be governed by the residency-change discipline in FR-008. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-020, BR-006 | Must | Marcus Adeyemi | T, I |
| FR-075 | The system MUST distinguish platform party creation from legal party registration; the system MUST record and display a party's legal-registration status per jurisdiction as an externally attested fact; the system MUST NOT represent platform activation as legal registration; the system MUST NOT grant, deny, or override a party's legal registration in any jurisdiction; every party-facing surface MUST state the distinction between platform activation and legal registration in terms visible to the user. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-020 | Must | Sofia Marchetti | I, D |

### 4.22 Party founding & the public digital constitution

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-076 | Party creation requires a published founding-member set meeting the count set in the published platform rule for the relevant jurisdiction and a public digital constitution; the constitution MUST contain all mandatory sections with machine-checkable presence — governance rules, membership rules, financial rules, conflict-of-interest rules, candidate-selection rules, leadership and term rules, and the manifesto; the system MUST refuse publication and MUST name every missing section before party creation may proceed, following the same pattern as FR-011's mandatory policy pillars. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-014, BR-019 | Must | Tomás Ferreira | T, D |
| FR-077 | Every party constitution MUST contain the platform's standard non-violence clause (the text published by the platform); the system MUST refuse publication of any new constitution and MUST refuse every subsequent amendment if the non-violence clause is absent or has been altered from the standard text; the presence and integrity of the non-violence clause MUST be verified by code with no human judgment in the path. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-014 | Must | Daniel Okonkwo | I, T |
| FR-078 | Every party constitution MUST be versioned immutably following the discipline of FR-047 and MUST be amendable only through the tiered proposal process defined in FR-025 and FR-026; any section of the constitution MAY declare entrenchment per FR-027. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-008 | Must | Tomás Ferreira | T, I |

> **Normative standard clause — FR-077 (v2.14.0; ratified 2026-08-26, Rathish Kumar; DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md, Ruling 2; closes CLAUSE-TEXT-01).** The platform's standard non-violence clause text — which FR-077 MUST require verbatim in every party constitution — is:
>
> > "This party will act through peaceful and lawful means only. No member may use, encourage, or support any form of violence in any activity connected to this party."
>
> **Normative notes (RFC 2119):** (i) This IS the standard non-violence clause that FR-077 requires; (ii) the clause MUST appear verbatim and non-removable in every party constitution; no platform actor, operator, founding member, or amendment process may remove or alter it; (iii) the clause is **frozen before first-party-adoption** — any later change is a breaking amendment requiring its own process (FR-119 super-process governs Tier-2 named absolutes; CON-013 is a named absolute — see §14 glossary and §4.39); (iv) implemented as the frozen `NON_VIOLENCE_CLAUSE` constant (`packages/protocol/src/constants.js` lines 165-168; verbatim match to the ratified text verified — DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md §3.2); (v) cross-reference: CON-013 (§9.1) records this as the platform's single deliberate exception to political-content neutrality.

### 4.23 Participation tiers — self-assigned, descriptive, never permissive

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-079 | The system MUST define exactly three participation tiers per party: Supporter, Worker, and Candidate; a user MUST be automatically assigned to the Supporter tier upon joining a party; tier assignment is descriptive metadata only; tiers MUST NOT confer voting weight, standing, or precedence (FR-021 is unchanged and applies in full); differentiated eligibility per vote type is permitted only where a published, code-checked rule defines it; differentiated weight between tiers MUST NOT exist under any configuration. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-016 | Must | Grace Mbeki | T, I, A |
| FR-080 | Worker tier MUST be self-declared with no approval required from any human; the recorded work is the sole credential for the tier; before a Worker declaration is confirmed the user interface MUST state plainly that becoming a Worker is permanent for the term and makes the user's participation record public for the duration of the term; the act of declaration constitutes the informed-consent event referenced in §4.24. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-016, BR-017 | Must | Grace Mbeki | T, D, I |
| FR-081 | Candidate tier MUST be self-nominated following FR-036, with eligibility checked by code against published rules; candidacy MUST be decided by the post-debate member vote per FR-067; no human MAY approve, reject, or rank a candidacy at any point in the path; every tier transition MUST be recorded append-only with its state (active/inactive) and MUST NOT be deleted. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-016, BR-013 | Must | Aisha Nkemdirim | T, I |

### 4.24 Three-tier privacy & the tier-scoped participation record _(supersedes FR-062)_

> **NOTE (v2.13.0 — cross-reference to verification axis):** The Supporter / Worker / Candidate
> tiers in this section are the **privacy-disclosure axis** — a self-declared tier governing
> identity visibility (who can see the participant's activity and in what form). This axis is
> **orthogonal** to the **verification axis** in §4.41: the open/unverified tier (FR-122 — phone
> verification only; COUNTING actions unavailable) vs the verified/counting tier (FR-123 —
> government-ID-checked in v1 / ZK-enrolled in v2; COUNTING actions available). A verified
> Supporter-tier member holds COUNTING-action eligibility and DOES vote; an unverified open-tier
> participant cannot take COUNTING actions regardless of their privacy-tier self-declaration. The
> two axes are orthogonal: the verification axis controls whether actions count; the privacy axis
> controls identity disclosure. See §4.41 TWO-AXIS NOTE. _(Added v2.13.0 per ISS-02; decision
> record §5.1 DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md required cross-reference in both
> §4.24 and §4.41.)_

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-082 | Supporter-tier participants MUST be anonymous unconditionally: the system MUST store only a nullifier for a Supporter; no attributable record MUST exist for them; no profile surface MUST exist for a Supporter; NFR-001, NFR-002, and NFR-024 apply to the Supporter tier without exception. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-009 | Must | Dr. Lena Kowalczyk | T, I, A |
| FR-083 | Worker- and Candidate-tier participants MUST have a public participation record beginning from the informed-consent event: the record MUST include role-relevant activity (work recorded, proposals authored in role, debates attended, candidacies held, and committee memberships); the record MUST NOT disclose ballot direction on any contested vote (FR-063 applies to every tier); votes cast by a holder of elected office in their office capacity MUST be attributed per FR-048. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-005 | Must | Erik Lindqvist | T, I, A |
| FR-084 | The system MUST ensure that disclosure scales with the power sought; the platform MUST publish, before any declaration or nomination window opens, the exact disclosure schedule per role (Worker, Candidate, and Office-holder in ascending disclosure scope); no category of information not listed in the published disclosure schedule for a role MAY be demanded of a person in that role after their declaration or nomination event. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017 | Must | Dr. Lena Kowalczyk | I, D |
| FR-085 | The informed-consent event MUST cover the entire campaign and any resulting term and is irrevocable for that term; withdrawal from candidacy before the nomination window closes is permitted and MUST cause the system to destroy the disclosure data submitted for that withdrawn candidacy. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ _(v2.1.0 per OI-16 decision: the confidential-class carve-out is ADOPTED — pre-nomination disclosure data is confidential-class (FR-106), never enters the append-only governance record, and is destroyed on withdrawal; the withdrawal right is honoured rather than excepted. Public records of completed actions remain append-only without exception (FR-107).)_ | BR-017, BR-009 | Must | Sofia Marchetti | I, T |

> **✅ v2.1.0 — OI-16 DECIDED (Rathish, 2026-08-11):** confidential-class carve-out adopted. A withdrawn candidate's disclosures were submitted under a consent that never completed; destroying them honours the withdrawal right rather than excepting the append-only rule. See GATE1-DECISION-2026-08-11.md §3.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-086 | A Supporter who subsequently takes a public role (Worker or Candidate) MUST have their prior supporter-period activity remain anonymous permanently; the system MUST NOT link the anonymous Supporter identity to the public Worker or Candidate identity retroactively through any data the system holds or emits, or through any combination of public data outputs; the test obligation is in the style of UT-0700/UT-0701 (absence-of-path verification). _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-009 | Must | Dr. Lena Kowalczyk | T, A |

### 4.25 Committees — deliberation without decisional power

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-087 | Parties MAY form committees, including a steering committee capped at 30 members and working groups; a committee's only permitted output is a proposal that enters the ordinary proposal lifecycle defined in §4.26 with no special status, precedence, or extra weight; committee composition and meeting minutes MUST be public. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015, BR-014 | Must | Tomás Ferreira | T, I |
| FR-088 | Committees MAY hold only capabilities that cannot change who wins, who votes, or who is a member — specifically: event organisation, campaign coordination, facilitation, vendor management, and publishing; election administration, membership verification, vote counting, eligibility determination, and data-integrity operations MUST be executed by code with no committee or human path available; any configuration that grants a committee a capability that touches an election or membership outcome MUST be rejected by the system. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015, BR-008 | Must | Rafael Duarte | I, A, T |
| FR-089 | Committee membership MUST expire mechanically at term end (contract expiry) with no human renewal path; continuation of a committee into a new term requires a fresh member vote; expiry MUST be code-enforced following the same discipline as office terms in FR-041. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015 | Must | Rafael Duarte | T, I |
| FR-090 | Proposal authorship MUST be public; any member MAY submit a competing proposal on the same question; every competing proposal MUST be presented with equal standing and voted in the same decision window as the original proposal. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ _(v2.1.0 per OI-14 decision: authorship is public; authoring — original or competing — requires Worker tier or above; the right to submit a competing proposal is unchanged for any Worker-tier-or-above member; Supporters retain full voting rights on every proposal and may self-declare Worker at any time to author.)_ _(**v2.16.0 — CONFIRMED, not amended (PROPOSING-NOT-COUNTING-GATED ruling; Rathish, Human Approver, 2026-08-30):** the right to submit an original or competing proposal is **OPEN participation**, not an FR-123 counting action — no verification gate stands on it (FR-020). The OI-14 Worker-tier condition is unchanged and is a self-declared disclosure step on a different axis; see the fuller annotation on FR-024 (§4.7) and the decision record. Built and closed as written: **DES-104**, TC-3543/TC-3545/TC-3546/TC-3548..TC-3551, UT-0089/UT-0095, UT-0832..UT-0838, UT-0874..UT-0877.)_ _(**v2.16.2 — OPEN ITEM NAMED ON THIS ROW: §13 tracked routing (i) / Doc 03 §16 Q16.** What this requirement guarantees is built and its RTM row is COMPLETE. What it does **not** say is what the party gets when **two competing proposals in one window BOTH PASS** — the ballot model gives each proposal an independent binary ballot, and DES-104 deliberately exposes no window-closing, merging or ranking capability. Post-vote window resolution is outside this requirement's stated guarantee and outside what v1 holds, which is why the row closes honestly; it is named here so a reader of FR-090 meets the open question rather than only a reader of §13. **The answer MUST NOT be a window-closing capability** — that absence is a deliberate anti-capture control.)_ | BR-015, BR-003 | Must | Tomás Ferreira | T, D |

> **✅ v2.1.0 — OI-14 DECIDED (Rathish, 2026-08-11):** Worker tier and above may author; authorship stays public; Supporters retain full voting rights and may self-declare Worker at any time to author. See GATE1-DECISION-2026-08-11.md §3.

### 4.26 Proposal lifecycle & the permanent decision trail

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-091 | Every proposal MUST move through the published lifecycle stages in sequence — proposal → review → discussion → debate → vote → decision → implementation → measurement — with stage transitions executed by code per published timelines; no stage MAY be skipped, reordered, or human-vetoed; the review, discussion, and debate stages are deliberative and produce records, never outcomes. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-014, BR-008 | Must | Tomás Ferreira | T, I |
| FR-092 | The system MUST maintain a permanent decision trail for every decision, comprising: the proposal and any competing proposals, authorship (per FR-090; OI-14 decided 2026-08-11 — Worker tier and above), deliberation records, the vote result, the enacted consequence, implementation status, and measured outcome; the complete trail MUST be reconstructable end-to-end by any third party from public data alone. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-014, BR-019 | Must | Erik Lindqvist | T, I, A |

### 4.27 Candidate selection — schedule and member questions

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-093 | Candidate selection MUST run on a published schedule comprising: nomination window, question phase, debates per FR-066, post-debate member vote per FR-067, and election; during the question phase any matured member MAY submit questions to any candidate; questions and answers MUST be placed on the public record; unanswered questions MUST be visibly recorded as unanswered. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-013, BR-004 | Must | Aisha Nkemdirim | T, D, I |

### 4.28 The manifesto as a living, measurable commitment set

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-094 | The manifesto MUST be a structured, machine-readable commitment set with explicit time horizons of 1, 3, 5, 10, and 30 years and per-sector plans; every sector plan MUST carry a baseline, target, budget, timeline, measurement method, and a named owner; the system MUST refuse publication and MUST name every missing field, following the same pattern as FR-011. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-014 | Must | Erik Lindqvist | T, I |
| FR-095 | Every manifesto commitment MUST carry a stable per-commitment ID with a progress status and linked evidence; status updates MUST be append-only (status transitions recorded, history never rewritten); the manifesto commitment set supersedes and absorbs FR-046 (already marked superseded). _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-005 | Must | Erik Lindqvist | T, I, A |

### 4.29 Financial transparency & anomaly detection

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-096 | Run mechanical anomaly detection over the public treasury record against a published rule set comprising at minimum: velocity anomalies, structuring and threshold-splitting patterns, counterparty concentration, and round-tripping patterns; publish every flag on the party's transparency dashboard; a flag is information for members and auditors — it MUST NOT freeze funds, block any governance action, or trigger any human enforcement pathway; consequences of a flag flow only from member votes or code rules the charter declares in advance. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-010 | Must | Erik Lindqvist | T, A |

### 4.30 Conflict-of-interest disclosure & recusal

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-097 | Require every public-tier role-taker (Worker, Candidate, Office-holder, committee member) to file a conflict-of-interest disclosure on the published schedule and on any material change; disclosures are public-class data; a missing or overdue disclosure MUST be visibly flagged by code on the participation record. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-019 | Must | Ingrid Bergqvist | I, T |
| FR-098 | Ensure COI review is investigation-and-recommendation only: per-case sortition reviewers (per FR-101 mechanics) publish findings and MAY recommend recusal; a recusal takes effect only by the subject's recorded voluntary compliance, a member vote, or a code rule declared in the charter; no reviewer, panel or investigation body holds any outcome power. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-015 | Must | Ingrid Bergqvist | I, D |

### 4.31 Independent internal audit

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-099 | Provide every active party with an independent internal audit function — auditors selected per-case by sortition from eligible members, never forming a standing body; auditors MUST have read-only access to all party records including restricted-class; reports MUST be published on a published schedule; audit findings inform but carry no enforcement power. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-015 | Must | Ingrid Bergqvist | I, A |

### 4.32 Dispute resolution with defined timelines

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-100 | Enforce published maximum timelines per dispute stage — intake acknowledgment, evidence window, panel formation, recommendation publication, and the deciding member vote or code execution; MUST record every stage transition on the decision trail; a breached timeline MUST itself be visibly recorded on the decision trail. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018 | Must | Ingrid Bergqvist | T, I |
| FR-101 | Draw appeal and review panels per case by verifiable random selection (sortition) from the eligible member set, with published eligibility criteria and a selection proof reproducible by any third party; no standing panel body may exist anywhere; panel outputs are recommendations to the membership or inputs to code rules — never binding rulings. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-015 | Must | Rafael Duarte | T, A |

### 4.33 Explicit member rights

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-102 | Publish a machine-readable member-rights charter comprising at minimum: join/leave at will (FR-020/FR-022), equal vote (FR-021), propose (FR-024), compete (FR-090), stand (FR-036), appeal (FR-100/FR-101), fork (FR-053), records access (FR-054/FR-055), anonymity per tier (BR-017); every right MUST map to a code-enforced capability; no party charter may reduce any right below the platform floor and any such configuration MUST be rejected by the system. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ _(The fork right listed here tracks FR-053's priority and flag status; fork initiation remains an open critical with the flag OFF above dev — see §13.)_ | BR-016, BR-003 | Must | Grace Mbeki | I, T |

### 4.34 Conduct votes, removal from role, and expulsion from party

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-103 | Allow matured members to cast conduct votes (up/down) on public-tier participants using the same nullifier, privacy, and anti-capture mechanics as policy votes; individual conduct votes MUST be private, aggregates public; conduct votes on Supporter-tier participants MUST be impossible by construction — no addressable identity exists in that tier. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-012 | Must | Daniel Okonkwo | T, A |
| FR-104 | Require removal from a role, team or committee to pass an affirmative quorum of members actively voting to remove, at a published bar; silence or absence MUST NOT remove; the accused MUST have a published statement on the record before the vote window closes — or the expiry with no statement MUST itself be recorded; the growth-surge defence (FR-023/FR-028 discipline; UT-0220) MUST apply to removal votes so that an influx cannot drive one. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-012 | Must | Daniel Okonkwo | T, I, A |
| FR-105 | Treat expulsion from a party as a distinct action with a strictly higher bar than removal from any role, requiring its own published affirmative quorum and supermajority; the same statement right and surge defence MUST apply; expulsion MUST revoke membership with a state transition recorded, but MUST NOT alter any historical records. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ _(v2.1.0 per OI-15 decision: expulsion applies to public-tier participants (Worker, Candidate, Office-holder, committee member) ONLY. Supporters are anonymous by design and cannot be expelled — building that capability would require deanonymising them, which is refused. Supporter-tier fraudulent enrolment is addressed by FR-005 credential revocation, which acts on the credential rather than the person.)_ | BR-018, BR-012 | Must | Daniel Okonkwo | T, I, A |

> **✅ v2.1.0 — OI-15 DECIDED (Rathish, 2026-08-11):** public-tiers-only expulsion; FR-005 credential revocation for supporter-tier fraud. See GATE1-DECISION-2026-08-11.md §3.

### 4.35 Data classification & the append-only lifecycle

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-106 | Ensure every data entity carries exactly one of three classifications — public, restricted, or confidential — assigned in the §7 inventory; classification governs storage, access, and publication; an unclassified entity MUST NOT be storable. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-009 | Must | Dr. Lena Kowalczyk | I, A |
| FR-107 | Ensure nothing is deleted — every governed entity is active or inactive; state transitions MUST be appended with timestamp and cause; history MUST NOT be rewritten; the sole recorded exception is pre-nomination disclosure data (FR-085), which is confidential-class and never enters the governance record — carve-out ADOPTED per OI-16 (2026-08-11). _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-008 | Must | Erik Lindqvist | T, I |
| FR-108 | Ensure the public verifiable record carries only proofs, timestamps, counts, and governance events; it MUST NOT be used as the application data store; restricted- and confidential-class data MUST NOT be written to any public chain in any form (CON-002/CON-008/NFR-010 discipline). _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-009 | Must | Rafael Duarte | I, A |

### 4.36 Transparency dashboard & performance scorecard

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-109 | Provide each party with a public transparency dashboard presenting: governance activity, treasury summary with anomaly flags (FR-096), participation aggregates, commitment progress (FR-095), and dispute-timeline compliance — aggregate-only, no per-member drill-down anywhere. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-005 | Must | Yuki Sato | T, D |
| FR-110 | Present the performance scorecard with commitments versus measured progress factually, with published methodology, baselines, and evidence links; it MUST NOT rank parties, score them against each other, or emit editorial conclusions; the scorecard informs, it does not conclude. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-005 | Must | Yuki Sato | I, D, A |

### 4.37 Behavioural-analytics prohibition (approver decision)

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-111 | NOT implement per-user behavioural tracking of any kind — clicks, page views, section views, dwell time, reading trails, or any equivalent event tied to a person, credential, nullifier, session, or device; analytics MUST be aggregate-only with no per-user attribution path; personalisation MUST be client-side and user-held, never transmitted or stored server-side; the existing guarantees UT-0525 (indexer records no reader, query or IP) and UT-0740 (client carries no beacon, analytics global or tracking attribute) are preserved and extended to every new v2 surface. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-009 | Must | Dr. Lena Kowalczyk | I, T, A |

### 4.38 Trust-anchor lifecycle governance (ruling 4 applied to SC-13/SC-14)

> The SC-01 re-scan (artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md) raised SC-13 (HIGH — no trust-anchor revocation/emergency-update path) and SC-14 (MEDIUM — unspecified governance tier for rotation). Ruling 4 answers both in principle: these are governance actions decided by member vote and executed by code — never by an operator. FR-112/FR-113 specify the requirement; the design change in Doc 03 is owed after Gate 1.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-112 | Treat revocation of a compromised trust anchor as a platform-governance action decided by member vote through the platform-wide tiered process (NFR-017) at its highest tier, with a published expedited emergency variant (shortened but non-zero timelock, published duration); on enactment, code MUST suspend new enrolments against the revoked anchor; no operator, funder or employee path MUST exist for revocation; already-enrolled credentials are unaffected except as a separately voted decision. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015, BR-006, BR-012 | Must | Rafael Duarte | T, I, A |
| FR-113 | Require legitimate rotation of a trust anchor (issuer key lifecycle) to follow the same member-vote governance at a published tier; the platform MUST publish the rotation schedule constraint such that a compliant rotation never blocks new enrolments beyond a published maximum window; enrolments under the outgoing anchor MUST remain valid; tier values and windows are governance constants recorded in OI-17. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015, BR-006 | Must | Rafael Duarte | T, I |

---

### 4.39 The steward organisation — coordination without control

> **Design intent — the Bitcoin Foundation lesson (recorded per the approver's direction, 2026-08-11):** The Bitcoin Foundation was founded in 2012 to be Bitcoin's official face and was effectively defunct within a few years — funding collapse, board departures, and a community that never accepted its authority. Bitcoin was unaffected, because the Foundation never controlled the protocol. The lesson is not 'have a foundation'; it is that Bitcoin survived because its foundation did not matter. The steward organisation below is designed to not matter in exactly that sense: it coordinates audits, ceremonies, funds and proposals because somebody must, and it is convenience infrastructure rather than a control point because the protocol MUST NOT need it (BR-021, FR-117). If the steward body collapses tomorrow, the record of that collapse will read like the Foundation's: the protocol did not notice.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-114 | Elect a standing platform-level steward body by all enrolled citizens (platform scope, not party scope) using the existing anonymous one-person-one-vote ballot mechanics (FR-030..FR-035 discipline; scope-bound nullifiers); enforce fixed terms by contract expiry with no renewal path except a fresh election (FR-089/FR-041 discipline); make the body recallable mid-term by the same affirmative-quorum mechanism that governs any other removal (FR-104 discipline: published bar, active votes to remove, never silence; statement right; surge defence); treat steward candidacy as a public-tier role-taking event (BR-017, FR-084/FR-085 consent mechanics). _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021, BR-015 | Must | Aisha Nkemdirim | T, I, A |
| FR-115 | Grant stewards ONLY the following enumerated and exhaustive powers: (a) draft and publish protocol proposals with rationale; (b) coordinate independent audits, trusted-setup ceremonies, and credential-issuer onboarding; (c) hold funds and sign vendor contracts; (d) publish operational reports. The list is EXHAUSTIVE: anything not listed is not a steward capability, and any configuration granting a steward capability beyond the list MUST be rejected (FR-088 pattern at platform level). _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021, BR-015 | Must | Rafael Duarte | I, A, T |
| FR-116 | Prohibit stewards from exercising any power that can change who wins, who votes, or who is a member (the same test as every other body, BR-015); stewards MUST NOT approve, enact or veto a protocol change — they propose, and every enrolled citizen votes (FR-119); any citizen may submit a competing proposal on the same question with equal standing (FR-090 discipline at platform level), so stewards never hold a monopoly on the ballot; there is NO emergency override for stewards or anyone else (CON-003 reaffirmed; issuer onboarding they coordinate still executes only through the timelocked governance path — coordination is not enactment). _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021, BR-015, BR-008 | Must | Rafael Duarte | I, A, T |
| FR-117 | Guarantee that the protocol survives its stewards: no steward signature, action, approval or liveness MAY be required for enrolment, party creation, voting, proposal submission, or forking; the total absence of every steward MUST leave protocol operation unchanged for every citizen-facing capability. A dedicated capability-absence suite MUST verify zero steward-dependency paths in every citizen flow (the UT-0700/UT-0701 absence-verification pattern; TC seeded in Doc 07 at catch-up, UT IDs assigned by the engineer), and a steward-vacancy simulation MUST show zero citizen-facing degradation before Gate 2. _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021 | Must | Chen Wei | T, A, I |
| FR-118 | Entrench the following **seven** charter rules as unamendable by ANY vote at ANY tier and changeable only by fork: (1) one human one vote; (2) no transferable power; (3) no privileged role over outcomes; (4) the unconditional right to fork; (5) no behavioural surveillance; (6) anonymity by default with disclosure only by voluntary role-taking; (7) **CON-001 — parties only, never state elections** (promoted into the Tier-1 charter per OI-18: this is a scope boundary rather than an implementation commitment — a platform that could vote itself into running state elections becomes a categorically different and more dangerous system). Entrenchment reuses the existing mechanism (FR-027 discipline elevated to the platform charter; NFR-017 governs the process) — cited, not restated. Amendment proposals targeting ANY Tier-1 entrenched charter rule — including a proposal to permit the platform to conduct a state, municipal, or any binding government election — MUST be rejected by code at submission, regardless of the proposer's tier or the level of claimed support. _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ _(v2.2.0: amended per OI-18 decision, 2026-08-11.)_ | BR-021, BR-015 | Must | Rafael Duarte | I, A |

> **✅ v2.2.0 — OI-18 DECIDED (Rathish, 2026-08-11): two-tier core.** Tier 1 (FR-118): seven entrenched rules incl. the promoted CON-001 — fork-only. Tier 2 (FR-119): the named absolutes — receipt-freeness & coercion resistance (BR-011, NFR-003), data minimisation (CON-002, CON-008, NFR-010), no bespoke unaudited cryptography (CON-012), non-violence (CON-013) — amendable only via the Doc 03 super-process (supermajority materially above the structural tier; fork-exercisable timelock; two consecutive affirmative votes separated by that window; growth-surge defence active throughout; independent audit published before the second vote; numbers set by the architect with rationale). Tier 3: everything else at its ordinary tier. Rationale preserved in OI-18-DECISION-2026-08-11.md: receipt-freeness must survive an ordinary majority — a majority voting it away votes to make everyone coercible — yet remain evolvable if a better coercion-resistance technique emerges. Tier 1 defines what the system is; Tier 2 protects people from a majority while remaining evolvable.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-119 | Implement a three-tier amendment structure. **Tier 1** (FR-118 entrenched charter): not amendable by this or any process — code rejects proposals at submission. **Tier 2 — named absolutes**: receipt-freeness & coercion resistance (BR-011, NFR-003); data minimisation (CON-002, CON-008, NFR-010); no bespoke unaudited cryptography (CON-012); non-violence clause (CON-013) — amendable ONLY via the super-process specified in Doc 03, which MUST require at minimum: (a) a supermajority materially above the ordinary structural tier; (b) a timelock long enough that the fork right is genuinely exercisable before the change takes effect; (c) two consecutive affirmative votes separated by that window so no transient majority can carry it; (d) the growth-surge defence active throughout; (e) an independent audit of the proposed change published before the second vote — specific numbers set by the architect with rationale (OI-17 family). **Tier 3** — every other platform rule NOT enumerated in Tier 1 or Tier 2 — amendable by platform-wide citizen vote at its ordinary tier: quorum and supermajority per published constants (OI-08/OI-17 family), timelock at least as long as the highest party tier (NFR-017), the proposal channel open equally to stewards and any enrolled citizen; enactment is by code on close of the timelock, with no ratification step. _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ _(v2.2.0: amended per OI-18 decision, 2026-08-11.)_ | BR-021, BR-008 | Must | Tomás Ferreira | T, I |
| FR-120 | Preserve the unconditional right to fork (FR-053 lineage mechanics; NFR-018 full-history export) as the capture backstop: even a captured citizen vote cannot trap anyone, because leaving is free and carries history intact; the fork right is entrenched (FR-118) and MUST remain available regardless of any steward action or protocol vote. Note: fork initiation is currently an open critical with the `fork` flag OFF above dev (§13); this requirement records the design posture, not a new capability. _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021, BR-003 | Must | Erik Lindqvist | I, D |

---

### 4.40 Pilot jurisdiction sequence and enrolment adapter schedule

> **Ordering criterion: technical readiness of the identity rail, not market size.**
> Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 1 (Rathish, 2026-08-20).
> OI-04-PILOT is closed by this section — see §13.
> **Hard dependency:** CON-015 must be satisfied before the Phase-1 adapter is marked implementation-ready.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-121 | Deploy enrolment adapters in the following sequence, determined by technical readiness of the identity rail and not by market size. **Phase 1 — India (Aadhaar offline paperless KYC):** the FR-070 adapter class (c) (offline paper KYC) is the first and only enrolment adapter at Gate 2; Aadhaar provides a single national issuer, near-universal coverage, and a government-signed XML that is provable in-circuit, satisfying all four FR-069 universal in-circuit checks (issuer authenticity, credential freshness, region membership, correct derivation); Phase-1 uses ADR-016's single-issuer-class posture (GOV_EID class only) and ADR-017's on-device derivation. **Phase 2 — EU (eIDAS 2.0 wallets):** the FR-070 adapter class (a) (eIDAS 2.0 wallet adapters); first targets France and the Nordic countries, whose national implementations are privacy-preserving by design; Phase 2 does not require a separate Gate 2 and follows the adapter-certification process governed by CON-005. **Phase 3 — USA (deferred):** the USA has no national digital identity; the state-by-state mobile-driver's-licence (mDL) landscape is fragmented, activation is low, and an optional "phone-home" privacy default conflicts with the non-correlation guarantee (FR-002, FR-069); the USA is deferred to Phase 3 and requires its own ADR with a threat model and independent audit before any mDL adapter mints enrolment nullifiers. **Hard dependency:** CON-015 must be satisfied (legal opinion obtained and recorded) before the Phase-1 adapter is marked implementation-ready. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 1; Rathish, 2026-08-20.)_ | BR-020, BR-006 | Must | Marcus Adeyemi | I, A |

---

### 4.41 Tiered participation — verification gates counting, never joining

> **Design rule (Decision 2, Rathish, 2026-08-20):** Verification is a distinct optional step,
> not a precondition for joining. **Verification gates COUNTING, never joining.** This
> reconciles open participation with a truthful strength number — the open (unverified) tier
> cannot inflate any count because it does not count toward anything that matters.
> Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 2.
> FR-020 is annotated (not superseded) to record the open-tier extension — see §4.6.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-122 | Allow any citizen — without completing personhood verification — to access the platform for open-tier participation: reading, following, watching, and other low-stakes actions that do not count toward any official total; no verification requirement may be imposed as a condition of open-tier access; the open tier MUST NOT be counted toward any party's official strength number, any binding ballot eligibility, or any candidacy eligibility under any configuration. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 2; Rathish, 2026-08-20.)_ | BR-003, BR-016 | Must | Grace Mbeki | T, I |
| FR-123 | Require proof of unique personhood (the FR-069 enrolment nullifier) for every action that COUNTS: (a) contributing to a party's official strength number; (b) voting in a binding decision; (c) standing as a candidate. A party's published strength number MUST count verified persons only; open-tier (unverified) participation MUST NOT be added to or used to inflate the strength number by any path or configuration. This is the normative boundary of Decision 2: verification gates COUNTING, never joining. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 2; Rathish, 2026-08-20.)_ _(**v2.16.0 — the counting-action set is CONFIRMED CLOSED at the three clauses above (Rathish, Human Approver, 2026-08-30; DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md §1).** **PROPOSING is NOT a counting action** and MUST NOT be added to the set: authoring is open participation, gated only by the self-declared Worker tier on the orthogonal privacy axis. Rationale: gating authorship on verification status is a participation restriction prohibited by FR-020, and would invert this section's own design rule — an unverified member could join, deliberate and vote-but-not-count, yet not *speak* by proposing. The design-layer expression of clauses (a)–(c) is the approver-ratified three-value `COUNTING_ACTION` allowlist (DES-100, ratified 2026-08-24: `STRENGTH_CONTRIBUTION`, `BINDING_VOTE`, `CANDIDACY`), whose seam throws `NotACountingAction` on anything else; **adding a fourth member requires an amendment to this requirement and to DES-100, never a code change alone.** FR-123 is unamended.)_ | BR-006, BR-010, BR-016 | Must | Marcus Adeyemi | T, A |

> **v1 BACKING ANNOTATION (v2.12.0, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md):**
> FR-122 and FR-123 are **unamended**. The 2026-08-24 ruling names the government-ID document
> check (FR-132 §(b)) as the **v1 conventional backing** of FR-123's verification requirement,
> delivered behind the `IEligibilityVerifier` seam (DES-095). FR-122's open tier is reachable
> in v1 with **phone verification alone** (FR-020 absolute; no government-ID document required to
> create an account or join a party). The participation model is **identical in v1 and v2** —
> verification gates COUNTING, never joining, under both definitions; only the verification backing
> differs (conventional government-ID check in v1; ZK nullifier enrolment in v2). Implementation:
> see §4.46 (FR-132) for the two-layer gating: phone-only for account creation and open-tier
> access; government-ID for FR-123 counting actions.
>
> **TWO-AXIS NOTE (v2.12.0 — surfaced to approver for naming confirmation; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §6):**
> Two orthogonal axes govern participation. Implementers MUST NOT conflate them.
> **(1) Verification axis (§4.41 — this section):** Open/unverified tier (FR-122 — phone
> verification only; COUNTING actions unavailable) vs Verified/counting tier (FR-123 — government-
> ID-checked in v1 / ZK-enrolled in v2; COUNTING actions available). This axis determines whether
> a participant's actions COUNT.
> **(2) Privacy-disclosure axis (§4.24):** Supporter / Worker / Candidate — a self-declared
> disclosure tier governing how the participant's identity is revealed to others. A *verified*
> Supporter-tier member holds COUNTING-action eligibility and DOES vote. An unverified open-tier
> participant cannot take COUNTING actions regardless of their self-declared privacy preference.
> These two axes are **orthogonal**: the verification axis controls whether actions count; the
> privacy axis controls identity disclosure. The ruling's phrase "participate fully at the
> supporter level" (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §2) means the FR-122
> **open/unverified tier** — NOT the §4.24 Supporter privacy tier (which is a distinct axis;
> verified Supporter-tier members vote). The operative interpretation adopted for all downstream
> amendments: "supporter level" = FR-122 open/unverified tier — the only reading consistent with
> FR-123. **Naming collision surfaced to the approver for terminology clarification** (see decision
> record §6); the operative interpretation is not in doubt. Cross-referenced to §4.24 and §4.46.

> ✅ **FR-124 RULING — Verified-status visibility (Rathish, 2026-08-20; recorded here per approver ruling transmitted via coordinator, 2026-08-20):**
> "RULING: verified status is PRIVATE TO THE HOLDER, expressed as eligibility, never a public marker on a supporter.
> - A verified user sees their own verified status and knows their counting/voting eligibility.
> - The public sees only AGGREGATE verified counts (e.g. 'N verified members'), never a per-supporter badge.
> - For workers and candidates — already public by voluntary role-taking — a visible verified badge is permitted, because they have already crossed the disclosure line.
> - MUST-NOT: no persistent public attribute may reveal that a specific supporter is verified. This is consistent with NFR-001/002 and TD-02, and with the rule that disclosure follows voluntary role-taking, which verification is not."
>
> **Composition check (v2.3.1):** consistent with FR-082 (no public Supporter profile surface — the self-view is the member's own authenticated-session view, not a public profile; FR-082 prohibits public surfaces, not the holder's own session view), FR-083 (Worker/Candidate public participation record begins at the FR-080 informed-consent event; role-taking already crosses the disclosure line), FR-086 (no retroactive linkage — the self-view is visible only to the authenticated session holder and does not expose any Supporter to any other actor), NFR-001 (no actor other than the holder can determine a Supporter's verified status from any data the system holds, emits, or logs), NFR-002 (Supporter-tier anonymity set floor holds unconditionally; no per-participant signal is derivable from aggregate counts), TD-02 (members anonymous publicly; disclosure follows voluntary role-taking; verification is not role-taking and therefore does not cross the disclosure line for public visibility). **No genuine conflict found.** FR-124 normative text amended at v2.3.1 — original v2.3.0 clause (b) annotated as superseded in the row below with pointer; remaining clauses retained and restated.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-124 | Completing personhood verification (FR-069 nullifier enrolment) grants a **"verified" status** that is PRIVATE TO THE HOLDER and expressed as eligibility — never a persistent public marker on a Supporter. _(v2.3.1 per approver ruling, Rathish, 2026-08-20, quoted verbatim in banner above; original v2.3.0 clause (b) superseded — see supersession note below.)_ The composition of verified status with the three-tier privacy model (§4.24) is as follows and MUST be enforced without exception: **(a) Private self-view for all verified participants including Supporters:** every verified participant — Supporter, Worker, and Candidate — MUST be able to see their own verified status and know their counting/voting eligibility in their own authenticated session; this self-view is the member's own authenticated-session view only and MUST NOT be accessible to any other actor; it is NOT a public profile surface and is consistent with FR-082 (which prohibits public Supporter profile surfaces, not the authenticated holder's own session view); **(b) Public sees only aggregate verified counts:** the public MUST see only aggregate verified counts for a party (e.g. 'N verified members'); no per-participant 'verified' badge, field, or derivable signal MUST appear on any public surface, log, or export that would reveal whether a specific Supporter is verified; **(c) Worker/Candidate visible badge permitted:** for Worker- and Candidate-tier participants (FR-083), a visible verified marker is permitted on the public participation record and on their own private account view — they have already crossed the disclosure line by voluntary role-taking (FR-080 informed-consent event; FR-083); **(d) MUST-NOT — no persistent public attribute:** no persistent public attribute, field, tag, or derivable signal MUST reveal that a specific Supporter is verified; **(e) No retroactive linkage:** no retroactive linkage between an anonymous Supporter's verified status and their identity is permitted through any data the system holds or emits (FR-086 applies); **(f) Absence-test obligation:** a test in the style of UT-0700/UT-0701 (absence-of-path verification per FR-086) MUST verify that a verified Supporter's verified status is absent from every public view, log, export, and derivable system output with no path available to any actor other than the authenticated holder. Rationale: disclosure follows voluntary role-taking; verification is not role-taking (NFR-001, NFR-002, TD-02). _(v2.3.0 ORIGINAL TEXT — clause (b) SUPERSEDED at v2.3.1: the v2.3.0 formulation 'the verified status exists ONLY as the Supporter's nullifier being counted in the aggregate strength number' is replaced by clause (a) above, which grants every verified participant including Supporters a private self-view in their own authenticated session. Clauses (c) and (d) of the original are retained and restated as points (e) and (f). Original v2.3.0 clause (b) verbatim for traceability: 'for Supporter-tier participants (FR-082), no profile surface exists for a Supporter by design — the verified status exists ONLY as the Supporter's nullifier being counted in the aggregate strength number; no per-person public verified marker MUST exist for a Supporter on any surface.' Original v2.3.0 clause (c): 'no retroactive linkage between an anonymous Supporter's verified status and their identity is permitted through any data the system holds or emits (FR-086 applies).' Original v2.3.0 clause (d): 'no verified-status marker MUST appear on any public surface that would allow association of a Supporter's nullifier with any attributable record.' Retained per CLAUDE.md ID-scheme rule — do not delete.)_ _(Sources: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 2 (v2.3.0 basis); approver ruling, Rathish, 2026-08-20 (v2.3.1 amendment).)_ | BR-009, BR-017, BR-006 | Must | Dr. Lena Kowalczyk | T, I, A |

> ✅ **OI-19 DECIDED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md).**
> Ruling verbatim: "invite-gating is a spam-control RATE-LIMITER, never an admission condition,
> and the two compose only if a non-invite path always remains open.
> - FR-020 stays absolute: no person may be refused membership for lack of an invite.
> - Finalise FR-125 so invite-based onboarding is the fast default path, with a non-invite
>   fallback that is ALWAYS available — slower and higher-friction is fine, closed is not.
> - MUST: the non-invite fallback exists. Without it FR-125 violates FR-020. Add a test
>   obligation that a person with no invite can still complete membership.
> - The test that separates the two: a determined real person can always join without an
>   invite. Record it. Close OI-19."
> FR-020 unamended and absolute. FR-125 finalised below (no longer draft). OI-19 RESOLVED in §13.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-125 | Permit spam-control invite-gating **only** at the open (unverified) tier entry, with the following invariants: **(a) Rate-limiter, never admission condition:** invite-based onboarding MAY be the default fast path for open-tier entry; a referral token from an existing participant MAY be required on the fast path; invite-gating is a spam-control RATE-LIMITER only — never an admission condition and never the sole door; **(b) Non-invite fallback ALWAYS available:** a non-invite fallback path MUST ALWAYS be available for open-tier registration; the fallback MAY be slower or higher-friction than the invite path and MAY impose additional verification steps; the fallback MUST remain permanently open and MUST NOT be closeable by any operator configuration or deployment default; the fallback MUST charge no fee (FR-020's no-fee admission property is absolute and applies to this fallback without exception); **(c) No refusal for lack of invite:** a person MUST NOT be refused open-tier or counted membership for lack of an invite token — FR-020 stays absolute and unamended; **(d) Test obligation — the separating test:** a determined real person can always join without an invite; this is the mandatory acceptance criterion: the non-invite fallback MUST successfully lead to full counted membership (FR-069 enrolment nullifier + FR-123 counted-action eligibility) for any person who completes it; **(e) Referral edge verified and discarded:** the referral edge MUST be verified for authenticity and MUST be discarded immediately after the gate-check completes — it MUST NOT be stored, recorded, or associated with either the referrer or the new entrant in any form; the referral relationship MUST NOT be available to any actor at any time after gate-check completes (Decision 4 persistent-referral-graph rejection; TD-12); **(f) Counted-membership path ungated:** invite-gating MUST apply only to open-tier (unverified) entry fast path and MUST NOT apply to any path toward counted membership (counted actions under FR-123); the admissions properties of FR-020 — no approval, sponsorship, interview, invitation, fee or veto — apply in full to counted membership regardless of this open-tier spam-control mechanism. _(Sources: OI-19 ruling, Rathish, 2026-08-20, DECISIONS-2026-08-20-OI19-OI20.md §2; DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decisions 2 and 4, Rathish, 2026-08-20.)_ | BR-003, BR-006 | Must | Grace Mbeki | T, I |

---

### 4.42 On-device proof, nullifier-only identity posture (Decision 3)

> **Design principle (Decision 3, Rathish, 2026-08-20):** The credential is read and proven ON
> THE USER'S DEVICE. Only a zero-knowledge proof and a one-way uniqueness nullifier are
> transmitted. This is the EXISTING enrolment circuit (C-03 design with the SC-01 trust-anchor
> binding, per ADR-017; confirmed by artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md) —
> not a new component. FR-126..128 record the confirmed design posture as normative requirements
> and add the subpoena test as a verifiable acceptance criterion.
> Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 3.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-126 | Read and prove the enrolment credential exclusively ON the user's device: raw credential material — Aadhaar offline XML, eIDAS 2.0 wallet attributes, ICAO Doc 9303 chip data, mDL data — MUST be used locally on the device to generate the zero-knowledge proof and to derive the enrolment nullifier (per ADR-017: `prepareWitness` runs in the on-device WASM prover; the `stable_id_secret` is a private input that never crosses the device boundary); the raw credential material MUST then be discarded; it MUST NOT be transmitted to the platform or to any intermediary, in any encoding, at any point in the enrolment flow; only the generated ZK proof and the derived nullifier are transmitted. This requirement strengthens FR-003 (pointer: §4.1) without superseding it; FR-003 governs the prohibition on persistent storage and FR-126 governs the on-device-only processing boundary. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 3; Rathish, 2026-08-20.)_ | BR-009, BR-006 | Must | Dr. Lena Kowalczyk | I, A |
| FR-127 | Detect duplicate enrolment by NULLIFIER COLLISION ONLY: a second enrolment attempt by the same person produces the same deterministic nullifier (FR-069), which collides with the existing on-chain record and is rejected; the platform MUST NOT compare, store, or process identity records to detect duplicates; no name-matching, biometric comparison, document-number lookup, or administrative review MUST exist in any duplicate-detection path under any configuration. This is the existing enrolment circuit — the C-03 design with the SC-01 trust-anchor binding confirmed by ADR-017 and by artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md — not a new component; this FR records the confirmed design posture as a normative requirement. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 3; Rathish, 2026-08-20.)_ | BR-006, BR-009 | Must | Marcus Adeyemi | T, A |
| FR-128 | MUST NOT store any raw or reversible identity data in any form — not in any database, cache, log, message queue, backup, or ephemeral store, and not even in encrypted form. The acceptance test is the **subpoena test**: if a court orders the platform to disclose who belongs to a party, the platform MUST be technically unable to comply — not merely legally entitled to decline. Encrypted-but-decryptable identity storage FAILS this test because it creates a data-set that can be produced under sufficient legal compulsion, converting "we cannot deanonymise you" into "we promise not to" (this is the second rejected design in Decision 4; see TD-12 in §9.3). The Gherkin block in §8 for this requirement includes an adversarial subpoena scenario. **Verify-by includes A (independent audit) and T (automated absence-of-data test).** _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 3; Rathish, 2026-08-20.)_ | BR-009, BR-006 | Must | Dr. Lena Kowalczyk | T, I, A |

---

### 4.43 Attestor-plurality Charter guard (OI-20 ruling)

> **Context (OI-20 DECIDED, Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md):**
> FR-004's plural-pluggable-issuer requirement is satisfied at the architecture level — Aadhaar is
> one implementation of the pluggable adapter interface (FR-070), not a hardcoded dependency. The
> Phase-1 single-rail deployment is a dated, explicit pilot limitation (Phase-1 limitation recorded
> on FR-004 annotation in §4.1 and in FR-121 in §4.40); the exit condition is Phase 2 (eIDAS 2.0).
> FR-129 closes the governance loop against normalising the Phase-1 limitation without re-entry.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-129 | Making single-issuer operation permanent — or extending it beyond the published, dated Phase-1 scope (FR-121) — MUST NOT be achievable as a deployment or configuration default; it MUST require the Charter-layer amendment process with re-entry through the two human gates (CLAUDE.md re-entry rule). Amendment machinery reference: FR-118 (entrenched-charter Tier 1, unamendable by any vote, changeable only by fork) and FR-119 (named-absolutes Tier 2, amendable only via the Doc 03 super-process) define the two-tier amendment system; the question of WHICH tier governs issuer-plurality requirements is not answered in this version and MUST NOT be assumed — that determination is owed to the architect in the next Doc 03 increment and MUST be recorded in the RTM when settled. What is normative here regardless of tier: (a) any path that makes single-rail operation permanent without going through the Charter-level amendment process and the two gates MUST be rejected by the system; (b) an attempt to extend the single-issuer deployment via configuration flag or deployment default MUST be blocked; (c) only the Amendment path (re-entry through Gate 1 and Gate 2 per CLAUDE.md) can modify the scope of the Phase-1 deployment limitation. Phase-1 accepted limitation: in Phase 1 a person without Aadhaar cannot enrol in the pilot region (accepted exclusion per TD-05/ADR-016; FR-004's 50% attestor-share cap is inoperative for the Phase-1 single-rail duration); exit condition is Phase 2 / eIDAS 2.0 (FR-121). _(Source: OI-20 ruling, Rathish, 2026-08-20, DECISIONS-2026-08-20-OI19-OI20.md §2.)_ | BR-006, BR-012, BR-021 | Must | Marcus Adeyemi | T, A |

### 4.44 Provisional-party membership cap (C-02 anti-capture ruling)

> **✅ C-02 DECIDED (Rathish, 2026-08-22; artifacts/status/DECISIONS-2026-08-22-WIREFRAME-C01-C02.md):**
> The "Membership caps at 100 until legal verification completes" notice on wireframe screen 2.3
> (Petition — live onboarding; Doc 03 §10.12.6 C-02) is an anti-capture control, not display copy.
> Doc 03 §10.12.6 C-02 recorded the gap ("No backing FR, DES, or US exists") and required the
> product-owner to decide: accept and mint an FR, or reject and revise the copy. The approver's
> ruling is: **accept — mint the FR**. The cap is rationale-grounded: it prevents an unverified
> party accumulating membership strength ("false strength") before it is legally real. It is not
> display copy; it is a code-enforced anti-capture invariant. FR-130 minted below.
>
> **Distinction from endorsement-floor constants (MUST NOT be conflated):** FR-130's cap is a
> MEMBERSHIP cap on a provisional party (post-activation, pre-legal-registration). It is wholly
> distinct from the endorsement threshold (FR-014, FR-016) and from the endorsement-floor
> constants in DES-010 (max(byPopulation, byVerified, 500)) — those govern petition legitimacy
> and are set by population formula; FR-130 governs post-activation provisional membership and
> is a fixed anti-capture invariant. No endorsement-floor constant is altered by this ruling.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-130 | A provisional party — one that has been platform-activated per FR-018 but whose legal registration has not yet been externally verified and recorded per FR-075 — MUST be capped at 100 members; the cap MUST lift automatically, by code, on verified legal registration being recorded on the platform per FR-075; no operator or manual path may lift the cap before that event. This requirement is an anti-capture control: it prevents an unverified party accumulating membership strength before it is legally real. **Distinction:** this cap is wholly distinct from the endorsement threshold (FR-014, FR-016) and from the endorsement-floor constants (DES-010: max(byPopulation, byVerified, 500)) — those govern petition legitimacy; FR-130 governs post-activation provisional membership, a separate anti-capture layer. _(Source: C-02 ruling, Rathish, 2026-08-22; Doc 03 §10.12.6 C-02; artifacts/status/DECISIONS-2026-08-22-WIREFRAME-C01-C02.md. DES owed at next Doc 03 increment — same recorded-phasing posture as FR-121..FR-129. _TC note updated v2.14.0:_ TC-3511..TC-3516 now exist and pass (Doc 07 v2.2.2 Approved; implementation IS_INSECURE_MOCK=true); RTM row 125 remains OPEN (G-TRACE gap — no DES assigned in Doc 03 §5.2; production store pending DES-097). **Approver ruling 2026-08-26 (DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md, Ruling 1):** the cap is UNCONDITIONAL — no grace period applies; the "60-day grace" raised in the scoping discussion was NEVER adopted into this requirement and is explicitly NOT part of v1; the built code (`PROVISIONAL_MEMBER_CAP = 100`; lift via `recordLegalRegistration()` only; no operator or manual path) is the ruled behaviour. No amendment to the normative text is required — the requirement as written already reflects the unconditional ruling.)_ | BR-002, BR-012 | Must | Sofia Marchetti | T, I |

### 4.45 v1 honesty notice and honesty-of-claim duty — participation-act posture (DES-098)

> **Rationale:** The Definition-A (v1) deployment uses conventional database-backed
> authentication for ballot casting. The Definition-B (v2) private receipt-free ballot
> (MACI, FR-030, FR-031, NFR-003) is deferred. A member voting in v1 cannot be assumed
> to know this; the UI MUST state it plainly before they vote. This requirement follows
> the disclosed-limitation pattern established in Doc 03 §13 ("Public tallies in Phase 1")
> and DES-063 (the v2 coercion-safe confirmation surface is its successor). DES-098 was
> minted by the architect in Doc 03 v2.3.0 §10.13.6 and awaited its backing FR — that FR
> is FR-131.
>
> **Scope, from v2.17.0 (do not read this section as ballot-only).** The paragraph above
> states the origin of FR-131 and remains correct for clauses (a)–(d), which govern the
> pre-ballot and open-tier notices. From v2.17.0 FR-131 **also** governs the honesty of
> **claims** about **any** v1 participation act — casting a vote, endorsing or backing a
> petition, joining or belonging to a party, or supporting a party — across every
> public-facing surface in every language, and is **not confined to the ballot**: see
> clause (e) and §8 FR-131 Scenario 8. This widening exists because a ballot-scoped scope
> statement, read literally, is precisely what allowed two false landing strings to ship on
> 2026-09-05 (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §1, §6); a reader who stops at the
> paragraph above would repeat that reasoning.
>
> _(Source: approver directive 2026-08-23, Rathish; decision record
> artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md; Design: DES-098, Doc 03
> §10.13.6, v2.3.0 session. Note: Doc 03 v2.3.0 §12 trace table references "FR-130"
> for DES-098 — pre-allocation error; FR-130 was minted at v2.5.0 for the
> provisional-party membership cap; the honesty-notice FR is FR-131. Cascade
> annotation owed to Doc 03 at the next architect increment. DES-098 minted;
> US/TC/RTM owed at the next catch-up — same recorded-phasing posture as
> FR-121..FR-130 (FR-130 exception: TC-3511..TC-3516 now pass per Doc 07 v2.2.2
> Approved; FR-130 RTM Must row remains OPEN for G-TRACE — no DES assigned in
> Doc 03 §5.2). TC OPEN — Phase 3 applies to FR-121..FR-129.)_

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-131 | Wherever a vote is cast in a Definition-A (v1) deployment, the UI MUST display a plain-language honesty notice (designed as DES-098) before the ballot is confirmed. The notice MUST state: **(a)** this ballot uses conventional authentication and is NOT anonymous, NOT receipt-free, and NOT coercion-resistant; **(b)** the platform database CAN see vote direction and party membership in v1; **(c)** the cryptographic private ballot — where the platform is technically unable to see vote direction or party membership — is available when the platform upgrades to the Definition-B (v2) privacy layer. **(d) Open-tier non-counting disclosure (v2.12.0, Rathish, 2026-08-24):** in any v1 deployment using the FR-132/FR-123 counting-gate model, wherever an open-tier (phone-verified but not ID-verified) participant attempts a FR-123 counting action — contributing to official party strength, casting a binding vote, or standing as a candidate — the UI MUST display a plain-language notice stating: (i) their current participation is open-tier only; (ii) that specific action requires government-ID verification (FR-123); (iii) what specifically does not count for them (official strength contribution, binding vote, candidacy); and (iv) how to become a counting member by completing the government-ID check (FR-132 §(b)). This notice MUST be shown before the action is refused and MUST be non-dismissable. The notice MUST be: visible before confirmation; non-dismissable (the voter MUST acknowledge the notice to proceed); WCAG 2.2 AA compliant (DES-081); screen-reader accessible. The notice MUST appear on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation). **(e) Honesty-of-claim across every v1 participation act (v2.17.0; product-owner ruling 2026-09-06, CONFIRMED by the approver (Rathish Kumar) 2026-09-06; DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11):** the disclosure duty in this requirement is a duty about **claims**, not about a list of words, and it is **not confined to the ballot**. In a Definition-A (v1) deployment, public-facing strings, screens, READMEs and other materials — **in any language** — MUST NOT assert that a **participation act** is unknowable to Trumocracy, where a *participation act* means casting a vote, endorsing or backing a petition, joining or belonging to a party, or supporting a party. **The test is what an ordinary reader at the grade-8 reading level (NFR-023) would take the claim to mean, not whether a banned word appears:** a claim FAILS this clause if such a reader would conclude from it that Trumocracy itself cannot link them to the act, because under conventional authentication (ADR-024, ADR-025) the v1 operator database CAN — and for endorsement necessarily does, since FR-014 ("at most one endorsement per person per petition") and FR-015 (withdrawing one's own endorsement) cannot be satisfied in v1 without that link. Where a v1 participation act is additionally **public by design** — petition endorsement is (Doc 14 §2.2: "a public act, on purpose"; the fully private alternative is the `private_endorsement` charter option, a Phase-4 flag that is OFF in every v1 deployment) — the copy MUST say so plainly and MUST NOT describe that act as kept private, secret or hidden. Copy that states what the platform does **not publish**, and separately states what the platform's **own records can see**, **and makes no contrary claim elsewhere in the same string**, SATISFIES this clause; the approved pattern is `apps/web/src/i18n/en.ts` `parties.joinPrivate`, guarded by UT-0869. **Where the safe-harbour and the reader test above appear to disagree, the reader test governs.** This clause governs **participation acts only**: claims about personhood enrolment and identity verification are addressed by FR-132 §(d) and by §16.4 H-16/H-17/H-18 and are expressly outside this clause; whether those provisions fully reach the enrolment landing copy is the open question tracked at §13 tracked routing (j). The v1 product — its UI, README, and all public-facing materials, in every language — MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour **or any other v1 participation act as defined in clause (e)**, and MUST NOT present itself as providing the Definition-B (v2) cryptographic guarantees; where clause (a) mandates those words, they MUST appear only in the negated form clause (a) requires. _(Source: approver directive 2026-08-23, Rathish; DECISIONS-2026-08-23-V1-V2-SPLIT.md; approver ruling 2026-08-24, Rathish; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md (clause (d) added — open-tier non-counting disclosure obligation). **Clause (e) and the widened closing sentence added at v2.17.0** by the product-owner ruling of 2026-09-06 (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md, Ruling B), **CONFIRMED by the approver (Rathish Kumar) on 2026-09-06 — DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11**; the class had by then been litigated twice string-by-string (party membership, 2026-09-05, UT-0869; petition endorsement, 2026-09-06) and clause (e) exists so it need not be litigated a third time. **SUPERSEDED closing-sentence wording, retained for the record, not deleted:** "The v1 product — its UI, README, and all public-facing materials — MUST NOT use the words 'private', 'anonymous', 'receipt-free', or 'secure' to describe v1 voting behaviour, and MUST NOT present itself as providing the Definition-B (v2) cryptographic guarantees." Clause (e) does not weaken clause (a): the mandated "NOT anonymous / NOT receipt-free / NOT coercion-resistant" text and its UT-0887 negation-aware guard are preserved by the carve-out. Follows the disclosed-limitation pattern: Doc 03 §13 Phase-1 public-tally disclosure; DES-063 (v2 coercion-safe confirmation surface is the v2 successor to DES-098). DES-098 minted; US/TC/RTM owed at next catch-up — same recorded-phasing posture as FR-121..FR-130 (FR-130 exception: TC-3511..TC-3516 now pass per Doc 07 v2.2.2 Approved; FR-130 RTM Must row remains OPEN for G-TRACE — no DES assigned in Doc 03 §5.2). TC OPEN — Phase 3 applies to FR-121..FR-129. **Clause (e) acceptance criterion: §8 FR-131 Scenario 8 (added at v2.17.1 per the cycle-1 review, ISS-01).** Clause (e) TC still owed: a UT-0869-pattern guard on the landing copy is routed to the engineer (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §5.4, R-3); until that TC lands the clause is additionally verified by inspection (I).)_ | BR-005, BR-009 | Must | Nadia Hassan | T, I |

_BR trace rationale: **BR-005** — "Manifestos, commitments and office-holders' governance votes MUST be publicly verifiable." Platform honesty about the properties of the voting mechanism is the complement of verifiability; in v1 the tally result IS on the audit record (FR-033/FR-054) but the mechanism is not private, and FR-131 ensures that distinction is stated plainly. **BR-009** — "Proving personhood and residency MUST NOT expose a member's real-world identity or make them targetable." The honesty notice protects members by ensuring informed consent about what v1 cannot guarantee before they vote, enabling them to make an informed decision about their exposure._

---

### 4.46 v1 identity verification — IEligibilityVerifier backing (DES-095 amended, DES-100, ADR-025)

> **Rationale (v2.12.0 — counting-gate clarification, Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md).** The v1 `IEligibilityVerifier` backing (DES-095) operates at TWO distinct gating points, reflecting the FR-122/FR-123 participation model established in §4.41:
>
> **(1) Account creation and open-tier access — phone verification alone (FR-020/FR-122 absolute):**
> Anyone may create an account, join a party, read, discuss, support and organise with phone
> verification alone. The system MUST NOT require a government-ID document to create an account or
> join a party. FR-020 is absolute and unamended.
>
> **(2) COUNTING-tier eligibility — government-ID document check (FR-123 counting actions only):**
> The government-ID document check (directed by the approver, 2026-08-23) is required before a
> participant may take any of the three FR-123 counting actions: contributing to a party's official
> strength number, casting a vote in a binding decision, or standing as a candidate. This is the v1
> conventional backing of the §4.41 verification-gates-counting rule — the same boundary in both v1
> and v2, with different verification implementations. The verify-and-discard model applies to the
> document check: only the enumerated allowlist fields from DES-100 may be retained; the document,
> biometrics, and all reversible identity data MUST be discarded. The resulting posture is
> "real-person verified" for the COUNTING tier — not "anonymous" and not "one-person-one-vote".
> The same-document deduplication via `subject_id_hash` is a significant improvement over phone-only
> Sybil resistance but does NOT close the one-person-one-vote gap (a person with multiple legitimate
> government IDs can still hold multiple counting accounts). The FR-131 honesty notice (DES-098)
> MUST carry the "real-person-verified-not-unique-personhood" caveat and the open-tier disclosure
> (FR-131 clause (d)).
>
> _(Source: approver ruling 2026-08-23, Rathish; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §2 (amends v1 identity design); DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §2 Ruling 1; approver ruling 2026-08-24, Rathish; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md (counting-gate clarification — government-ID check gates FR-123 counting actions only, never account creation or joining). Design: DES-095 (v1 backing amended in Doc 03 v2.4.1 (Approved)), DES-100 (field-level disposition — Doc 03 v2.5.1 (Approved) §10.13.9), ADR-025 §(e) (government-ID check amendment). US/TC/RTM owed at next catch-up — same recorded-phasing posture as FR-131. TC OPEN — Phase 3.)_

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-132 | In a Definition-A (v1) deployment, the `IEligibilityVerifier` backing MUST implement two sequential layers: phone-based SMS verification for account creation and open-tier access; and a government-ID document check for COUNTING-tier eligibility (FR-123 actions only). **(a) Phone verification — account creation and open-tier access:** account creation, joining a party, reading, discussing, supporting and organising MUST require phone verification alone (FR-020 absolute; FR-122 open tier). Each verified phone number creates at most one member account; the phone number MUST be stored one-way hashed (HMAC-SHA-256 with KMS-managed pepper — `phone_hash`), never as reversible plaintext. The system MUST NOT refuse account creation or party membership for absence of a government-ID document. **(b) Government-ID document check — COUNTING-tier eligibility (FR-123 counting actions only):** the system MUST perform a government-ID document check before a participant may take any of the three FR-123 counting actions: (i) contributing to a party's official strength number; (ii) casting a vote that counts in a binding decision; (iii) standing as a candidate. The verify-and-discard rule applies: the platform MUST NOT store the document image, biometric template, selfie, name, date of birth, document number, expiry date, raw subject ID, or verification session ID (denylist). Only the following enumerated allowlist fields MAY be retained, all restricted-class: `id_verified_flag` (boolean), `age_verified` (boolean — legal-age threshold, not precise age), `issuing_region` (country-code only), `subject_id_hash` (HMAC-SHA-256/KMS-pepper of the issuing authority's subject ID — retained SOLELY for one-counting-membership-per-document deduplication), `phone_hash` (as above), `verified_at` (timestamp). **(c) Subject-ID deduplication — at counting-verification, not at account creation:** a participant who completes the counting-tier government-ID check and whose `subject_id_hash` matches an existing counting-verified account MUST be refused COUNTING-tier eligibility as a duplicate, regardless of phone number; the participant's open-tier account is NOT refused and they may continue as an open-tier member; this ensures one counting membership per document. **(d) Honesty posture:** the system MUST record and present the v1 identity check as establishing "a real, legal-age person" for the COUNTING tier — NOT as establishing unique personhood, anonymity, or one-person-one-vote. v1 MUST NOT claim, in its UI, README, or any public-facing material, that one-person-one-vote is guaranteed or that the platform is anonymous; those properties require the v2 ZK enrolment swap-in per ADR-024/ADR-025/DES-095. The FR-131 honesty notice (DES-098) MUST carry a plain-language statement that same-document deduplication via `subject_id_hash` prevents the same government ID from creating two counting accounts, but does not prevent a person with multiple legitimate government IDs from creating multiple counting accounts in v1. v1 MUST state plainly (per FR-131 clause (d)) that an unverified open-tier participant may join and participate fully in the open tier, and that only the three FR-123 counting actions — contributing to official strength, casting a binding vote, standing as a candidate — require government-ID verification. **(e) Vendor non-retention:** the procurement of the ID-check provider MUST include a contractual no-retention clause binding the provider not to retain document images, biometric templates, or personal data beyond the verification session. _(Source: approver ruling 2026-08-23, Rathish; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §2; DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §2 Ruling 1; approver ruling 2026-08-24, Rathish; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md (government-ID check gates FR-123 counting actions only, never account creation or joining). Design: DES-095 amended, DES-100, ADR-025 §(e). CON-015 governs legal classification of retained fields (India/Aadhaar Act 2016/DPDP/GDPR) — no enrolment sprint begins without CON-015 cleared. US/TC/RTM owed at next catch-up. TC OPEN — Phase 3.)_ | BR-006, BR-012 | Must | Marcus Adeyemi | T, I |

_BR trace rationale: **BR-006** — "Membership MUST be verifiable as a real human resident... one person one vote is a foundational rule." The phone+ID document check is the v1 degraded form of this guarantee — it establishes a real, legal-age person (an improvement over phone-only), honestly recorded as not equivalent to unique personhood proof. **BR-012** — "The platform MUST resist governance attacks: sockpuppet, astroturf and Sybil actors MUST NOT be able to capture a party." The government-ID check with `subject_id_hash` deduplication is the v1 Sybil-resistance mechanism, directly serving the anti-capture goal of BR-012; same-document deduplication closes the same-ID-multiple-phones vector but does not close the multiple-IDs vector._

---

### 4.47 v1 spam-resistance layer — flag-don't-block (DES-099)

> **Rationale.** The approver (Rathish, 2026-08-23) directed a conventional spam-resistance layer for v1: VoIP/virtual-number detection via a phone-intelligence API, plus velocity and device anti-fraud checks. The ruling is explicit on the flag-don't-block rule: legitimate people use VoIP and eSIMs, and wrongly excluding a citizen from a political platform is a serious failure; the false-positive risk MUST be recorded explicitly and the false-positive path MUST be first-class.
>
> **Critical asymmetry (v2.12.0 correction, Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md):** The flag-don't-block rule in FR-133 governs the **spam-resistance layer only** — VoIP/virtual-number signals, velocity checks, and device anti-fraud. The spam layer MUST flag and rate-limit, never deny. It does NOT apply to the government-ID document check (FR-132 §(b)). The ID check is a hard gate on **COUNTING-tier eligibility only** (FR-123): contributing to official party strength, casting a binding vote, standing as a candidate. It is NOT a gate on account creation or party membership (FR-020/FR-122 absolute; BR-003 holds unamended). These two mechanisms are distinct: the spam layer operates on phone-number signals and MUST flag-not-block on all participation; the ID check operates on document validity and IS a hard gate on FR-123 counting actions only. The false-positive path (FR-133) handles a legitimate VoIP user at the phone-screening layer — it does not interact with the ID check; a person without a government ID may create an account and participate fully in the open tier (FR-122), but cannot take COUNTING actions (FR-123) until the ID check is completed. H-19 (§16.4) records the counting exclusion as a platform limitation. The §16.5 contradiction row "Government-ID eligibility gate vs BR-003/FR-020" is **RESOLVED** (Rathish, 2026-08-24): the gate applies to COUNTING actions only; BR-003 and FR-020 hold unamended.
>
> This requirement follows established design precedents: FR-061 (degrade, never deny — for the spam layer), FR-125/OI-19 (spam-control rate-limiter never an admission condition), and FR-020 (non-invite fallback always open — for the join flow after eligibility is satisfied).
>
> _(Source: approver directive 2026-08-23, Rathish; DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §2 Ruling 2; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §2 (ID-check asymmetry). Design: DES-099 (minted by architect, Doc 03 v2.4.1 (Approved)). US/TC/RTM owed at next catch-up — same recorded-phasing posture as FR-132. TC OPEN — Phase 3.)_

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-133 | In a Definition-A (v1) deployment, phone numbers submitted at enrolment MUST be screened via: **(a)** a phone-intelligence API for VoIP/virtual-number detection (flagging cloud-farm, burner-number, and known non-personal-use indicators); **(b)** velocity checks (enrolment rate per IP, device fingerprint, and network segment within configurable windows); **(c)** device anti-fraud signals. A number flagged by any of these checks MUST be rate-limited and MAY be queued for additional verification; it MUST NOT be hard-blocked; it MUST NOT be denied a governance action solely on the basis of the flag. The false-positive path (a legitimate VoIP/eSIM user) MUST be first-class: that user MUST be able to complete every primary flow — enrol, join, petition-sign, vote — subject only to rate-limiting, never outright denial (FR-061, FR-020). Flag events are restricted-class data (NFR-027) and MUST NOT be exposed on any public record or governance-path surface. **Scope of flag-don't-block:** the flag-don't-block rule in this requirement applies ONLY to the spam-resistance layer signals enumerated above; it does NOT apply to the government-ID eligibility gate (FR-132 §(b)). The ID check is a hard gate on COUNTING-tier eligibility (FR-123 actions) only — a person who cannot present a valid government ID is excluded from COUNTING actions by FR-132, but they are NOT excluded from the platform; they may create an account and participate in the open tier (FR-122/FR-020), and they cannot take the FR-123 counting actions until the ID check is completed. _(Source: approver directive 2026-08-23, Rathish; DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §2 Ruling 2; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §2; approver ruling 2026-08-24, Rathish; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md (scope correction — ID check gates counting, not joining). Design: DES-099. Note: FR-020 (open join) is unamended and absolute — FR-133 operates within the enrolment flow; a flagged phone is rate-limited at screening, never excluded from the membership path. Follows FR-061 degrade-never-deny and FR-125/OI-19 rate-limiter-not-admission-condition precedents. US/TC/RTM owed — same recorded-phasing posture as FR-132. TC OPEN — Phase 3.)_ | BR-012, BR-003 | Must | Rafael Duarte | T, I |

_BR trace rationale: **BR-012** — "The platform MUST resist governance attacks: sockpuppet, astroturf and Sybil actors MUST NOT be able to capture a party." The spam-resistance layer is the v1 mechanism for this, screening at enrolment without excluding legitimate users. **BR-003** — "Joining a party MUST be frictionless... MUST NOT require approval, endorsement, payment, or invitation." The flag-don't-block rule protects this guarantee by ensuring the spam-resistance layer (phone signals) never becomes an exclusion gate — it rate-limits, never denies; FR-020 remains absolute for all users regardless of ID-check status. Note: the government-ID gate (FR-132) gates COUNTING actions (FR-123) only, not membership; BR-003/FR-020 hold unamended — the §16.5 contradiction row is RESOLVED (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md)._

---

## 5. External interface requirements

### 5.1 User interfaces
Primary surfaces are provisionally inventoried in Doc 05 §7 as `SCR-01` … `SCR-23`. **The screen
inventory is provisional and non-binding**; the architect confirms, splits or merges surfaces in
Doc 03, and the tester reconciles the `SCR` links in the RTM (Doc 08). All surfaces MUST meet
`NFR-011` (WCAG 2.2 AA), `NFR-012` (device/bandwidth floor), `NFR-013` (i18n/RTL) and `NFR-023`
(plain language, no jargon). Every surface MUST have defined empty, loading, offline, degraded
(sponsorship-queued), error and success states.

### 5.2 Hardware interfaces
Camera and secure local storage may be used by the client during enrolment. Trumocracy MUST NOT
require any dedicated hardware token, and MUST NOT make possession of a specific device a
precondition for retaining rights (see `FR-058`).

### 5.3 Software interfaces
- **Identity attestation providers** — at least two independent per launch region; interface returns
  a non-identifying eligibility result only (`FR-003`, `FR-004`).
- **Population-statistics sources** — at least two independent published sources per region,
  consumed as versioned reference data with provenance recorded (`FR-009`).
- **Region boundary sources** — versioned registry input (`FR-007`).
- **Public read interface** — an unauthenticated, rate-limited public interface exposing all
  verifiable records for third-party verification and export (`FR-054`, `FR-055`).
All external content MUST be treated as untrusted data and MUST NOT be able to alter platform
behaviour. Contracts, protocols and formats are the architect's to define in Doc 03.

### 5.4 Communications interfaces
All communication MUST be encrypted in transit. The client MUST function over intermittent,
high-latency, low-bandwidth links (`NFR-012`) and MUST remain usable where the primary domain is
blocked (`NFR-014`). Notification channels used for recovery MUST NOT reveal party membership or
governance activity in their content or metadata (`NFR-001`).

---

## 6. Non-Functional / Quality Requirements (NFR)

| ID | Category | Requirement | Target | Traces to | Priority | Owner |
|----|----------|-------------|--------|-----------|----------|-------|
| NFR-001 | Privacy | The system MUST ensure that no actor — Trumocracy, an operator, an attestor, a party, an office-holder, or any colluding subset short of the published collusion bound — can determine which party a given person belongs to, or how they voted, from any data the system holds, emits or logs. The adversary model for audit purposes is: an adversary holding all operator logs, all attestor-issued credential hashes, the full public verifiable record, and network timing data at one-second granularity. The maximum advantage bound ε and the collusion bound (how many colluding parties privacy must survive) are set when OI-10 closes (Design phase, owner: Dr. Lena Kowalczyk). _(v2.0.0 tier scoping per BR-017: this guarantee holds unconditionally for Supporter-tier participants and for every member's ballot content and ballot direction in every tier. Worker- and Candidate-tier participants' role-relevant participation records are public by the explicit informed consent given at role-taking (§4.24) and are excluded from this guarantee to exactly that extent — and no further. Prior supporter-period activity of a person who later takes a public role remains under this guarantee permanently.)_ | 0 confirmed linkages at advantage > ε over random guessing (ε and collusion bound set at OI-10 closure; provisional test value ε = 0.02) across N ≥ 10,000 independently drawn action pairs at 95% confidence in an independent adversarial audit; independent privacy audit passes with 0 critical/high findings | BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-002 | Privacy — anonymity set | Every published action MUST be indistinguishable among at least **k = 1,000** eligible actors in the same scope; where fewer than k eligible actors exist or have acted, the action MUST be withheld from publication or aggregated until k is reached, with the delay disclosed to the user. _(v2.0.0 tier scoping per BR-017: this guarantee holds unconditionally for Supporter-tier participants and for every member's ballot content and ballot direction in every tier. Worker- and Candidate-tier participants' role-relevant participation records are public by the explicit informed consent given at role-taking (§4.24) and are excluded from this guarantee to exactly that extent — and no further. Prior supporter-period activity of a person who later takes a public role remains under this guarantee permanently.)_ | k ≥ 1,000 for 100% of published actions | BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-003 | Coercion resistance | Voting MUST be receipt-free: no probabilistic polynomial-time (PPT) adversary with security parameter λ ≥ 128 bits, even with the voter's full voluntary cooperation and device access after the fact, can distinguish the voter's actual choice from any other admissible choice with advantage greater than negligible in λ; and re-voting MUST be indistinguishable from not re-voting. | Formal security argument reviewed by independent cryptographer; independent adversarial audit (PPT adversary, λ ≥ 128 bits) finds no receipt construction and no re-vote distinguisher | BR-011 | Must | Aisha Nkemdirim |
| NFR-004 | Sybil resistance | Duplicate or synthetic persons MUST NOT exceed 0.1% of issued credentials in any region; the system MUST ensure that no single attestor holds > 50% of credentials in a region. | ≤ 0.1% duplicates (audited quarterly); attestor share ≤ 50% enforced, ≤ 40% targeted | BR-006, BR-012 | Must | Marcus Adeyemi |
| NFR-005 | Cost / Efficiency | Platform-borne cost of a median citizen governance action MUST be under **USD 0.01**, p99 under USD 0.05; the citizen MUST be charged **USD 0.00** in all cases. | median < USD 0.01; p99 < USD 0.05; citizen cost = 0 | BR-007 | Must | Hiroshi Tanaka |
| NFR-006 | Performance | On the reference device (2 GB RAM, Android 9) over a 64 kbit/s link: primary screen interactive ≤ 5 s p95; an action acknowledged ≤ 5 s p95 and finalised on the verifiable record ≤ 120 s p95; full enrol→endorse journey completable in ≤ 10 minutes. | as stated | BR-007 | Must | Hiroshi Tanaka |
| NFR-007 | Reliability / Availability | Citizen write path ≥ 99.5% monthly; public read/verification path ≥ 99.9% monthly; the system MUST ensure that no single operator failure blocks a citizen governance action for more than 60 minutes. | as stated | BR-007, BR-008 | Must | Chen Wei |
| NFR-008 | Scalability / Capacity | Sustain 50,000,000 enrolled persons, 10,000,000 eligible voters within a single ballot window, and a peak of 5,000 governance actions per second without violating NFR-006. | verified by load test before Gate 2 | BR-002 | Should | Chen Wei |
| NFR-009 | Security | Independent third-party security and cryptography audit completed before launch with **zero** critical or high findings open at Gate 2; no privileged administrative override present in any governance path. | 0 critical/high open | BR-008, BR-012 | Must | Rafael Duarte |
| NFR-010 | Privacy & Data protection | Data minimisation by construction: no identity document, biometric template, address, date of birth or other direct identifier at rest on the verifiable public record or in any governance-path store; no personal data on any immutable public record. Restricted operational stores enumerated in §7 — (a) Recovery requests & notification channel (90-day retention, access-controlled, region-local) and (b) Support & appeal records (24-month retention, access-controlled, region-local) — are outside the scope of this requirement; each holds only the minimal personal data necessary for its stated operational purpose, subject to the controls and retention windows in §7. | 0 direct-identifier fields present on the verifiable public record or in governance-path stores at data-inventory inspection; the two enumerated restricted stores hold only the fields and retention durations stated in §7 | BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-011 | Accessibility | All primary flows MUST conform to **WCAG 2.2 Level AA**, be fully operable by screen reader and keyboard/switch, and remain usable at 200% text scaling. | 0 Level A/AA failures at Gate 2 | BR-007 | Must | Nadia Hassan |
| NFR-012 | Portability / device & bandwidth floor | The client MUST function on 2 GB RAM / Android 9 and equivalent mobile browsers, install in ≤ 15 MB, and complete every primary flow at 64 kbit/s with intermittent connectivity, including offline draft composition with deferred submission. | 100% of primary flows pass on the reference device profile | BR-007 | Must | Nadia Hassan |
| NFR-013 | Localization / i18n | At least 8 launch languages including at least one right-to-left script; no primary flow may present untranslated strings; date, number and name formats localised. | 100% primary-flow string coverage in all 8 locales | BR-007 | Must | Nadia Hassan |
| NFR-014 | Censorship resistance | A citizen MUST be able to reach and use the platform when the primary domain or application distribution channel is blocked; the system MUST ensure that no single operator, host, domain or app store can prevent governance actions network-wide. | ≥ 2 independent access paths verified in a blocking simulation before Gate 2 | BR-008 | Must | Chen Wei |
| NFR-015 | Compliance / Legal / Regulatory | The system MUST satisfy erasure and rectification rights **by holding no personal data** rather than by deleting from an immutable record; where a user requests erasure, the system MUST demonstrate that no personal data exists to erase and MUST provide credential deactivation instead. The residual conflict between immutability and erasure MUST be documented, legally reviewed per jurisdiction, and disclosed to users before enrolment. | Legal sign-off per pilot jurisdiction before launch; disclosure present in enrolment flow | BR-009 | Must | Sofia Marchetti |
| NFR-016 | Key recovery | ≥ 99% of legitimate recovery attempts MUST succeed within 14 days; recovery MUST NOT be usable to silently impersonate (notification + cancellation window mandatory); ≤ 0.01% of recoveries may be fraudulent. | as stated | BR-007 | Must | Amara Diallo |
| NFR-017 | Upgradeability | Any change to platform-wide governance rules, thresholds or bounds MUST itself pass a tiered-threshold process with a timelock at least as long as the highest party tier, and MUST NOT be enactable unilaterally by Trumocracy, a funder or an operator. | 0 unilateral rule-change paths at audit | BR-008 | Must | Rafael Duarte |
| NFR-018 | Exit rights | Any party MUST be able to export its complete public history in an open, documented format sufficient to reconstitute it on an independent deployment; any member MUST be able to leave and deactivate their credential at any time. | export verified to reconstitute on an independent deployment before Gate 2 | BR-003, BR-008 | Should | Erik Lindqvist |
| NFR-019 | Observability | Governance health metrics (activation counts, turnout, quorum near-misses, recall rates, attestor concentration, duplicate rate, sponsorship exhaustion, anonymity-set delays) MUST be published publicly, and MUST NOT expose any individual's activity. | dashboard live at launch; 0 individually identifying fields | BR-005 | Should | Yuki Sato |
| NFR-020 | Operability (deploy / rollback) | Any release MUST be reversible within 15 minutes; feature flags MUST be kill-switchable independently; a flag governing an open ballot's rules MUST NOT be changeable while that ballot is open. | rollback < 15 min proven before Gate 2 | BR-008 | Must | Chen Wei |
| NFR-021 | Maintainability / openness | 100% of governance-critical logic MUST be published under an OSI-approved licence with reproducible builds, so a third party can verify that the running system corresponds to the published source. | build reproducibility verified by ≥ 1 independent party | BR-008 | Must | Rafael Duarte |
| NFR-022 | Usability | ≥ 80% of first-time, non-technical users MUST complete enrol→endorse unaided within 10 minutes; System Usability Scale ≥ 75; support-contact rate ≤ 5% of enrolments. | as stated, measured on ≥ 200 users per launch locale | BR-007 | Must | Grace Mbeki |
| NFR-023 | Content / UX writing & notifications | Primary flows MUST be written at or below a grade-8 reading level and MUST NOT contain the terms wallet, seed phrase, private key, gas, token, mint, chain, block, hash or equivalent jargon; error messages MUST state cause and next action; notifications MUST NOT reveal party membership or governance activity. | 0 jargon occurrences in primary flows; readability verified per locale | BR-007, BR-009 | Must | Nadia Hassan |
| NFR-024 | Safety / anti-harassment | The system MUST ensure that no feature exposes a member's identity, contact details, location precision below their declared region, or activity pattern to another member; recall and nomination flows MUST NOT enable targeted harassment of an individual member. The **harassment-rate metric** is defined as: the count of recall-initiation or nomination-initiation events directed at a single office-holder from distinct member nullifiers within any rolling 90-day window, normalised per 1,000 active members of that party, computed mechanically with no Trumocracy employee exercising discretion over political speech content. Where jurisdiction-scoped display filtering under FR-056/FR-057 is the applicable lever, its use is governed exclusively by FR-056 (legal basis, public log, no discretionary content judgement by Trumocracy). _(v2.0.0 tier scoping per BR-017: this guarantee holds unconditionally for Supporter-tier participants and for every member's ballot content and ballot direction in every tier. Worker- and Candidate-tier participants' role-relevant participation records are public by the explicit informed consent given at role-taking (§4.24) and are excluded from this guarantee to exactly that extent — and no further. Prior supporter-period activity of a person who later takes a public role remains under this guarantee permanently.)_ | 0 identity-exposing surfaces at inspection (I); harassment-rate metric computed mechanically and published monthly on the governance dashboard (NFR-019) within 72 hours of each month close | BR-009 | Must | Daniel Okonkwo |
| NFR-025 | Liveness / operator independence | The system MUST ensure that no single operator, sequencer, host or ordering service can censor or indefinitely delay an individual citizen's governance action; a delayed action MUST be includable through an alternative path within 60 minutes. | verified in an operator-censorship simulation before Gate 2 | BR-008 | Must | Chen Wei |
| NFR-026 | Compatibility | Supported: evergreen mobile browsers ≤ 24 months old and Android 9+. Unsupported combinations MUST fail with a clear, actionable message rather than a broken screen. | 100% of the supported matrix passes primary flows | BR-007 | Should | Nadia Hassan |
| NFR-027 | Privacy — no behavioural telemetry | The system MUST produce zero per-user behavioural events in any store, log, or export; analytics MUST be aggregate-only with no per-user attribution path; UT-0525 and UT-0740 MUST remain green on every release; mirrors FR-111 as a quality attribute. | 0 per-user behavioural events confirmed by inspection and automated test on every release | BR-017, BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-028 | Data lifecycle — append-only | No hard-delete or overwrite path MUST exist in any governance-path store; every state transition MUST be appended with timestamp and cause; verified by audit inspection. | 0 hard-delete or overwrite operations detectable in any governance-path store at audit | BR-019, BR-008 | Must | Erik Lindqvist |

> ✅ v2.0.0: the FR-062 contradiction is resolved by tier scoping per BR-017 — see §4.19 and §4.24.

### 6.1 Regulatory & standards applicability

| Standard / regulation | Applies? | Why / scope | Owner |
|-----------------------|----------|-------------|-------|
| GDPR / equivalent data-protection law | **Partial** | Applies to the minimal operational data we hold: (a) the notification channel in Recovery requests (90-day retention) and (b) Support & appeal records (24-month retention), both enumerated in §7 (`NFR-010`). Does **not** bite on the public governance record, which contains no personal data. Erasure for those two restricted stores is satisfied by the stated retention windows and access controls; erasure for the public record is satisfied by holding no personal data there at all (`NFR-010`, `NFR-015`). The claim "erasure is satisfied by holding nothing" applies to the public record only; the two restricted stores are the exception — this is a legal posture, not a certainty; see `TD-03`. | Sofia Marchetti |
| WCAG 2.2 Level AA | **Yes** | Binding on all primary flows (`NFR-011`). | Nadia Hassan |
| National electoral law (per pilot jurisdiction) | **Partial** | Applies to party formation, registration and internal-democracy rules. Does **not** apply to us as an electoral authority because `CON-001` forbids conducting binding state elections. | Sofia Marchetti |
| Political-finance / party-funding law | **Partial** | Applies only where treasury features are enabled (`FR-049`–`FR-052`); features are jurisdiction-gated and off by default. | Sofia Marchetti |
| EU Digital Services Act (or local intermediary-liability regime) | **Partial** | Applies to hosting user-published political content; drives `FR-056`/`FR-057` display-filtering and transparency-reporting posture. | Sofia Marchetti |
| eIDAS / national digital-identity regulation | **Partial** | Applies to identity attestors we consume from, not to Trumocracy as an issuer — we issue no identity, only a non-identifying eligibility result. | Marcus Adeyemi |
| AML / KYC regulation | **No — N/A** | We move no funds in v1 and hold no customer accounts; if treasury features are enabled in a jurisdiction, this MUST be re-assessed before that feature flag is turned on. | Sofia Marchetti |
| PCI-DSS | **No — N/A** | No cardholder data is processed, stored or transmitted; the citizen is never charged (`NFR-005`). | Hiroshi Tanaka |
| HIPAA | **No — N/A** | No health data is processed. The Healthcare *policy pillar* contains political programme text, not patient data. | Dr. Lena Kowalczyk |
| ISO/IEC 27001 / SOC 2 | **Partial** | Not certified for v1 (cost/appetite). Controls mapped and gaps documented; independent security audit (`NFR-009`) substitutes for launch. Open item `OI-07`. | Rafael Duarte |
| Accessibility procurement law (e.g. EN 301 549 / Section 508) | **Partial** | Satisfied by `NFR-011` conformance; formal statements published per jurisdiction. | Nadia Hassan |

---

## 7. Data requirements

| Data entity | Classification | System of record | Retention | Residency | PII? |
|-------------|----------------|------------------|-----------|-----------|------|
| Enrolment check result (eligibility, region, pass/fail) | Restricted | Trumocracy (non-identifying) | Until credential revoked | Region-local | **No** (by `FR-003`) |
| Identity documents / biometric templates | **Never stored** | Attestor only, transiently | **0 — not persisted** | n/a | Would be — hence prohibited |
| Personhood credential (holder-held) | Restricted | Holder's device + recovery mechanism | Life of credential | Holder | No |
| Enrolment nullifier (derived, not reversible) | Public (verifiable record) | Verifiable public record | Permanent | Global | No (non-reversible derivation per FR-069) |
| Per-scope action markers ("this scope already acted") | Restricted | Verifiable public record | Permanent | Global | No (unlinkable by `FR-002`) |
| Residency scope (region identifier only) | Restricted | Trumocracy | Until changed (min 180 days) | Region-local | No — region, never address |
| Region registry (versioned) | Public | Trumocracy, from external sources | Permanent, versioned | Global | No |
| Population denominator + provenance | Public | Trumocracy, from ≥2 external sources | Permanent, versioned | Global | No |
| Party draft / charter / eight pillars | Public (after publication) | Verifiable public record | Permanent, versioned | Global | Author pseudonymous |
| Endorsement records | Public (aggregate); unlinkable individually | Verifiable public record | Permanent | Global | No |
| Membership records | **Aggregate public, individual never disclosed** | Verifiable public record | Permanent (aggregate) | Global | No |
| Participation record (Worker/Candidate tiers only; §4.24) | Public by explicit informed consent — Worker/Candidate tiers only; Supporters: no such record exists | Verifiable public record | Permanent | Global | ✅ tier-scoped per BR-017 |
| Proposals & eligibility snapshots | Public | Verifiable public record | Permanent | Global | No |
| Ballots | Unlinkable; content secret until close; direction never disclosed (FR-063) | Verifiable public record | Permanent | Global | No |
| Tallies & results | Public | Verifiable public record | Permanent | Global | No |
| Candidate feedback votes (FR-065) | Individual votes private; aggregate tally public | Verifiable public record | Permanent | Global | No |
| Candidacies & consent records | **Public by explicit consent** | Verifiable public record | Permanent | Global | **Yes — by informed consent only** |
| Office-holder governance votes | Public | Verifiable public record | Permanent | Global | **Yes — by consent, office-scoped** |
| Manifestos, commitments, version history | Public | Verifiable public record | Permanent, versioned | Global | No |
| Debate attendance records (FR-066) | Public | Verifiable public record | Permanent | Global | No |
| Treasury entries | Public | Verifiable public record | Permanent | Region-gated | Contributor identity only where law requires |
| Display-filtering log | Public | Trumocracy | Permanent | Global | No |
| Recovery requests & notification channel | Restricted | Trumocracy | 90 days after completion | Region-local | **Yes — minimal, off the public record** |
| Sponsorship budget counters | Internal | Trumocracy | 12 months | Global | No (per-credential, unlinkable) |
| Support & appeal records | Restricted | Trumocracy | 24 months | Region-local | Minimal |

**Data rule (binding):** no entity classified as containing personal data may ever be written to the
immutable public record. Enforcement is verified at Gate 2 by data-inventory inspection (`NFR-010`).

---

## 8. Acceptance criteria (Gherkin) — one block per Must requirement

> These seed the test cases in Doc 07. Every Must FR has at least one positive and, where the
> requirement is a guardrail, at least one adversarial scenario. Must NFRs with Gherkin blocks in
> the second code block below (24 of 24 Must NFRs): NFR-001, NFR-002, NFR-003, NFR-004, NFR-005,
> NFR-006, NFR-007, NFR-009, NFR-010, NFR-011, NFR-012, NFR-013, NFR-014, NFR-015, NFR-016,
> NFR-017, NFR-020, NFR-021, NFR-022, NFR-023, NFR-024, NFR-025, NFR-027, NFR-028. NFR-001 and
> NFR-003 Gherkin references the adversary-game parameters defined in §6; the collusion bound
> (OI-10) and the ε value are provisional until OI-10 closes in Design. Governance-constant values
> used in several Must-FR Gherkin blocks are illustrative examples only — see the
> `(example — non-normative)` markers; normative values are set when OI-08 closes (Design phase,
> owner: Tomás Ferreira). v2.0.0 governance constants introduced in §4.29–§4.38 (trust-anchor
> lifecycle tiers and windows, conduct-vote/removal/expulsion bars, founding-member count,
> disclosure schedule per role, dispute stage timelines) are likewise non-normative until OI-17
> closes (Design phase, owner: Tomás Ferreira) — parallel to the OI-08 convention established at
> v1.1.1.

```gherkin
# FR-001 — one credential per human
Given a human who already holds an active personhood credential
When that same human completes enrolment again through any attestor
Then no second active credential is issued
And the result explains the refusal without revealing which existing credential matched

# FR-002 — per-scope single action, cross-scope unlinkability
Given a verified person who has already acted in scope S
When they attempt a second action in scope S
Then the action is rejected as already-acted
Given the same person acts once in scope S and once in scope T
When an adversary holding {all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity} analyses both actions across N ≥ 10,000 independently drawn same-person action pairs
Then the adversary's advantage in correctly identifying that any given pair came from one person rather than two is ≤ ε over 1/2 at 95% confidence (ε set at OI-10 closure; provisional test value ε = 0.02)

# FR-003 — no identity data at rest
Given an enrolment check that has completed
When the complete data inventory of every Trumocracy store, log, backup and message queue is inspected
Then no identity document image, document number, biometric template, date of birth or residential address is present
And only a non-identifying eligibility result is retained

# FR-004 — attestor plurality and concentration cap
Given a launch region served by two independent attestors
When one attestor has issued 50% of the credentials in that region
Then further issuance requests to that attestor in that region are refused
And each attestor's share is published

# FR-006 — residency without address
Given a citizen resident at a specific street address
When they complete residency attestation for their region
Then the system holds the region identifier and no address, postcode or coordinate
And no party, member or operator can retrieve an address for that person

# FR-007 — versioned registry, non-retroactive boundaries
Given a closed election held under region registry version N
When the registry advances to version N+1 with changed boundaries
Then the closed election's eligibility set, counts and result are unchanged
And the election records which registry version it used

# FR-008 — one residency, change cooldown
Given a person who changed residency scope 30 days ago
When they request another residency change
Then the request is refused with the date the change becomes permitted
And their scope-restricted rights remain bound to the current region

# FR-009 — denominator from independent sources
Given two independent population sources for a region that disagree by more than the published tolerance
When a threshold computation is attempted for that region
Then the computation is refused and the discrepancy is published
Given the sources agree within tolerance and the dispute window has closed
When a threshold is computed
Then the denominator value and both source identities are recorded with the computation

# FR-010 — party draft creation and name collision
Given a verified citizen
When they create a draft with a name, emblem, one declared jurisdiction and a charter
Then the draft is created and the drafter is shown only pseudonymously
When they attempt a name or emblem that collides with an existing petition or active party in that jurisdiction
Then publication is refused and the colliding entity is named

# FR-011 — eight mandatory pillars
Given a draft in which the Healthcare and Security pillars are empty
When the drafter attempts to publish
Then publication is refused and both Healthcare and Security are named as deficient
Given a draft in which all eight pillars meet the published minimum-substance standard
When the drafter publishes
Then the draft is published with no human approval step

# FR-014 — one endorsement per person, resident-only, non-transferable
Given a verified person resident outside a petition's declared jurisdiction
When they attempt to endorse it
Then the endorsement is refused as out-of-jurisdiction
Given a resident person who has already endorsed the petition
When they endorse again
Then the count does not increase
When any actor attempts to transfer, sell or assign an endorsement
Then no such operation exists and the attempt fails

# FR-016 — code-computed threshold, no override
Given an active petition
When the threshold is computed
Then it equals the published percentage of the declared jurisdiction's denominator, reproducible by a third party
When any operator, employee or office-holder attempts to set, waive or lower that party's threshold
Then no such capability exists and the attempt is refused and logged

# FR-018 — automatic activation
Given a petition whose count has met or exceeded its threshold continuously for the published dwell period
When the dwell period elapses
Then the party activates automatically with no human approval step anywhere in the path
And the activation record immutably contains the charter version, the count, the denominator and its sources
Given a petition that met the threshold but dropped below it during the dwell period
When the dwell period elapses
Then the party does not activate

# FR-020 — join without approval
Given an active party and a verified citizen who is not a member
When the citizen requests to join
Then membership takes effect without approval, sponsorship, interview, invitation or fee
When a drafter, office-holder or operator attempts to reject, veto or expel that member
Then no such capability exists and the attempt is refused

# FR-021 — one member, one equal vote
Given a party with members of differing tenure, office and contribution history
When any party ballot is tallied
Then every member's vote counted exactly once with identical weight
When a configuration is attempted that would weight a vote by any attribute
Then the configuration is rejected

# FR-022 — leave at will
Given a member of an active party
When they choose to leave
Then membership ends immediately with no approval, penalty or notice period
And their governance rights in that party cease immediately

# FR-023 — maturation and churn rate limit
Given a citizen who joined a party 1 hour ago and the maturation period is not yet elapsed
When they attempt to vote, propose, nominate or sign a recall
Then the action is refused with the date rights begin
Given 100,000 accounts joining a party within one hour
When an open proposal is tallied
Then none of those accounts is counted, because none had matured before the proposal's snapshot

# FR-024 — any matured member may propose
# v2.1.0 per OI-14: submitting requires Worker tier or above; a Supporter attempting to submit is prompted to self-declare Worker (public) first — voting rights unaffected
Given a matured member
When they submit a proposal with a declared tier
Then it is accepted with no pre-screening, moderation or approval by any actor

Given a Supporter-tier matured member who has not declared Worker tier
When they attempt to submit a proposal
Then the submission is refused and they are prompted to self-declare Worker tier (public) first; their voting rights are unaffected

# FR-025 — tiered quorum and supermajority
# (example — non-normative; quorum and supermajority values unset; story not Ready until OI-08 closes; owner: Tomás Ferreira)
Given a charter-tier proposal requiring a published quorum Q% and supermajority S% (example values used below: Q=40%, S=66%; normative values set at OI-08 closure)
When it closes with turnout below Q% regardless of approval
Then it does not pass and the failing condition is published
When it closes with turnout meeting Q% but approval below S%
Then it does not pass and the failing condition is published
When it closes with turnout meeting Q% and approval meeting S%
Then it passes and enters its timelock

# FR-026 — timelock
# (example — non-normative; timelock durations unset; story not Ready until OI-08 closes; owner: Tomás Ferreira)
Given a passed charter-tier proposal with the published timelock duration for its tier (example: 14 days — not normative; normative value set at OI-08 closure)
When one day less than the full timelock has elapsed
Then the change has not taken effect and is publicly visible as pending
When any actor attempts to shorten, waive or bypass the timelock
Then no such capability exists and the attempt is refused

# FR-027 — entrenched founding clauses
Given a charter clause designated entrenched
When a proposal to amend it is opened
Then it is assigned the highest tier and the longest timelock
And only members whose membership predates the proposal by the published minimum age count toward its quorum
Given a party of 10,000 members of whom 9,000 joined last week
When they vote to amend an entrenched founding clause
Then the quorum is not met and the amendment fails

# FR-028 — eligibility snapshot
Given a proposal opened at time T
When a person joins the party, matures, or changes residency after T
Then that person is not eligible to vote on that proposal
And the eligible set for that proposal is published and reproducible

# FR-030 — ballot unlinkability
Given a closed ballot with 5,000 cast votes
When an adversary holding {all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity} attempts to link any cast ballot to the person who cast it, across N ≥ 10,000 independently drawn ballot-person pairs
Then the adversary's advantage in correctly linking any ballot to its voter is ≤ ε over 1/2 at 95% confidence (ε set at OI-10 closure; provisional test value ε = 0.02)
And the tally still proves every counted ballot came from exactly one eligible, not-yet-counted voter

# FR-031 — receipt-freeness
Given a voter who has cast a ballot and wishes to prove their choice to a buyer
When they use every function, export, screenshot and stored artefact available to them
Then they cannot produce anything that distinguishes their actual choice from any other admissible choice

# FR-032 — invisible coerced-vote override
Given a voter who cast a ballot under coercion while observed
When they later cast a replacement ballot before the ballot closes
Then only the last ballot is counted
And neither the public record, the device, nor any notification indicates that a replacement occurred or how many ballots were cast

# FR-033 — independently reproducible tally
Given a closed ballot
When an independent third party re-computes the result from public data alone, with no cooperation from Trumocracy
Then their result matches the published result exactly
And they learn no individual vote in the process

# FR-035 — no transfer or delegation of a vote
Given any member, ballot, endorsement or nomination right
When any actor attempts to transfer, sell, lend, delegate, proxy, assign or inherit it
Then no such operation exists in the system and the attempt fails
And an inspection of the system finds no delegation, proxy or transfer capability

# FR-036 — self-nomination scoped to region and office
Given a matured member resident in ward W
When they nominate themselves for an office whose region is ward W and obtain the required nomination endorsements from matured members resident in W
Then the candidacy is accepted
When they nominate themselves for an office in ward X where they do not reside
Then the nomination is refused as out-of-scope
When any member attempts to nominate a different person
Then the action is refused

# FR-037 — informed consent to public identity; members never disclosed
Given a member about to publish a candidacy
When they proceed
Then they must give an explicit, separately recorded consent acknowledging that their real-world identity becomes public
And the candidacy is not published until that consent is recorded
Given any person who is not a consenting candidate or office-holder
When any interface, export, log or public record is examined
Then their real-world identity is not disclosed by any path

# FR-039 — election scoped, timetable immutable
Given an internal election for (region R, office O) that has opened
When a member resident outside R attempts to vote
Then the vote is refused as out-of-scope
When any actor attempts to change the timetable, candidate set or tie-break rule after opening
Then the change is refused and the attempt is logged

# FR-040 — automatic office assignment
Given an internal election that has closed with a determined winner
When the close is processed
Then the result is published and the office role is assigned automatically in code
And no confirmation, ratification, veto or appointment step is available to any actor

# FR-042 — member-initiated recall
Given a matured member resident in the region of an office
When they initiate a recall of that office's holder during the term
Then the recall initiation opens without approval from the office-holder, any other office-holder, the drafter or any platform actor

# FR-043 — two-stage recall with a higher bar
# (example — non-normative; recall bar and election-approval values unset; story not Ready until OI-08 closes; owner: Tomás Ferreira)
Given an office-holder elected with some approval share and a published recall bar R% (example: elected at 55%, recall bar 60% — not normative; normative value set at OI-08 closure)
When a recall initiation reaches its signature threshold and the recall ballot closes below R%
Then the recall fails and the office-holder remains
When a subsequent valid recall ballot closes at or above R%
Then the recall succeeds

# FR-045 — automatic revocation and by-election
Given a successful recall
When the recall ballot closes
Then the office role is revoked automatically in code with no ratification step
And a by-election for that (region, office) pair opens within the published number of days

# FR-047 — immutable version history
Given a published charter at version 3
When the party amends it
Then version 4 is created, version 3 remains publicly retrievable unchanged, and a diff between 3 and 4 is viewable
When any actor attempts to edit or delete version 3
Then no such capability exists and the attempt is refused

# FR-051 — money buys no governance advantage
Given a contributor who has given the maximum permitted amount to a party
When they act in any governance capacity
Then their membership, standing, vote weight, proposal precedence, candidacy eligibility, ballot ordering and visibility are identical to a member who has contributed nothing
When a configuration is attempted that links any payment to any governance advantage
Then the configuration is rejected

# FR-054 — publicly verifiable record of every governance action
Given any governance action of any listed type
When it completes
Then a tamper-evident, publicly readable record is emitted that is sufficient to reconstruct the outcome
And that record contains no personal data
When the record is altered after emission
Then the alteration is detectable by any third party

# FR-056 — no operator discretion
Given a Trumocracy employee, operator, funder, office-holder or drafter with maximum available privilege
When they attempt to delete or edit published content, remove or suspend a member, alter a count or tally, block a lawful governance action, or reorder a candidate set
Then no such capability exists and the attempt is refused and logged
Given content unlawful in jurisdiction J
When display filtering is applied for J
Then the filtering is recorded publicly with jurisdiction, legal basis and affected item
And the underlying record is unaltered and remains retrievable outside J

# FR-058 — recovery without seed phrases
Given a citizen who has lost their device and was never shown a seed phrase or key material
When they complete the recovery process
Then control of their credential and residency scope is restored after the published timelock
And a notification is sent to the registered channel with a cancellation window
Given a thief attempting recovery
When the legitimate holder cancels during the window
Then the recovery is aborted and access is not transferred

# FR-059 — recovery reveals nothing
Given a completed recovery
When every participant in it (helper, guardian, attestor, support agent, operator) examines everything they observed
Then none of them can determine the subject's party memberships, past ballots, endorsements or governance history

# FR-060 — no token, no gas, no jargon
Given a non-technical citizen with no cryptocurrency, wallet or balance
When they complete each primary flow end to end
Then every flow completes without acquiring, holding or spending any token or payment instrument
And no primary-flow screen contains the words wallet, seed phrase, private key, gas, token, mint, chain, block or hash

# FR-061 — sponsorship degrades, never denies
Given a person who has exhausted their periodic sponsored-action budget
When they attempt a legitimate governance action
Then the action is queued with a clear explanation and an expected time
And the action is neither rejected, charged for, nor permanently denied

# FR-062 — public participation profile (v2.0.0: SUPERSEDED by FR-082..FR-086 — retained for history; DO NOT derive test cases from this block; see §4.24)
# ⚠ FR-062 SUPERSEDED — do not seed test cases from this block. The three-tier model in
# FR-082..FR-086 governs participation records. This block is retained for traceability only.
Given a verified citizen's profile viewed by any actor (authenticated or not)
When the profile loads
Then it shows: the list of elections and ballots in which they participated (without ballot direction), their current and past party memberships, petitions they endorsed, proposals they authored, and debates they attended
And it does not reveal the direction of any ballot cast in a contested vote
Given an elected representative whose office-capacity governance vote is examined on their profile
When the vote record is displayed
Then the direction is publicly attributed to them per FR-048

# FR-063 — ballot-direction prohibition (MUST NOT; test obligation UT-0700, UT-0701)
Given any member's ballot direction on any contested vote
When any interface, log, export, public record, profile view or combination of them is examined by any actor
Then no ballot direction for that member is discoverable
And UT-0700 confirms no ballot-direction field is reachable through any client surface
And UT-0701 confirms no ballot-direction field is present in any public-record export
Given an elected office-holder who voted in their official office capacity
When that specific vote is examined
Then the direction is publicly attributed — this is the sole permitted exception, governed by FR-048

# FR-064 — single party membership constraint (v1 EXPLICIT-LEAVE; amended v2.15.0, FR-064-SEMANTICS ruling (a))
Given a member of party A who requests to join party B
When the join request is processed
Then the join is refused naming party A as the current membership, and membership in party A is unchanged
Given a member of party A who has explicitly left party A (a recorded action, FR-022)
When they request to join party B
Then membership in party B takes effect and the membership tenure clock resets to zero
When a member attempts to hold membership in two parties simultaneously through any mechanism
Then no such dual-membership state exists and the attempt fails
Given a member who left party A less than one month ago and joins party B
When they attempt to vote in party B before one month of membership has elapsed
Then the vote is rejected as tenure not yet met

# FR-065 — candidate feedback scoring
Given a matured party member who has not yet voted on candidate C in election E
When they cast an upvote on candidate C
Then C's tally increases by 3 and the member cannot vote on C again in E
When they cast a downvote on candidate C
Then C's tally decreases by 1 and the member cannot vote on C again in E
When any actor inspects individual feedback votes
Then no vote is linkable to its caster; only the aggregate tally is visible
Given a member who has already cast a feedback vote on candidate C in election E
When they attempt another feedback vote on C in E
Then the attempt is refused

# FR-066 — mandatory pre-election debates
Given a major election is approaching for office O
When the debate schedule is confirmed
Then three debates are scheduled per candidate, covering local conditions, local problems, and the work required respectively
When a debate is completed
Then attendance attestation and any post-debate content reference are recorded on the verifiable record
When a candidate fails to attend a scheduled debate
Then their absence is recorded and visible in their participation record

# FR-067 — candidacy from member vote; no automatic renomination
Given three debates have been completed per candidate
When the post-debate member vote closes
Then only candidates who receive a net positive member-vote result advance to the election ballot
Given a sitting office-holder whose term is expiring
When the next election cycle opens
Then they receive no automatic candidacy; they must complete the full debate and post-debate vote process
When any actor attempts to place an incumbent on a ballot without a completed debate cycle
Then the attempt is refused and logged

# FR-068 — tenure waiver for new parties (growth-surge defence remains active)
Given a party in its first three calendar months of active status
When a member who joined before the party activated attempts to vote
Then the one-month tenure requirement is waived and the vote is accepted
And UT-0220 confirms that growth-surge defence controls remain fully enforced during the waiver
Given a party in its first three calendar months and a sudden flood of 10,000 new members
When a proposal snapshot is taken
Then the snapshot mechanism (FR-028) and churn rate limits (FR-023) apply unchanged
And no waiver of any anti-capture control is in effect

# FR-069 — deterministic enrolment nullifier
Given a credential with a stable personal identifier and a valid issuer signature
When an enrolment attempt is submitted
Then the system derives the nullifier without storing the underlying identifier, verifies the issuer signature, credential freshness, region attribute, and correct derivation, and stores only the nullifier
Given the same credential re-used in a second enrolment attempt
When the nullifier derivation is completed
Then the derived nullifier matches the existing record and the enrolment is rejected as a duplicate
Given a credential with a tampered region attribute
When the derivation verification runs
Then the enrolment is rejected and the reason (region-attribute invalid) is returned

# FR-070 — pluggable credential adapter (eIDAS 2.0 wallet · ICAO Doc 9303 NFC chip · offline paper KYC e.g. Aadhaar)
Given a region where an eIDAS 2.0 wallet adapter is configured
When a citizen presents a qualified eID wallet attestation
Then the adapter verifies the trust-anchor signature against the applicable national or supra-national trust list, extracts the designated stable personal identifier field and the residency attribute, and passes them to the FR-069 derivation
Given a region where an ICAO Doc 9303 NFC chip adapter is configured
When a citizen presents a biometric passport or NFC identity card
Then the adapter verifies the Document Security Object against the ICAO public key directory, extracts the stable identifier field (MRZ DocumentNumber or chip pseudonym) and an attested residency claim, and passes them to the FR-069 derivation
Given a region where an offline paper KYC adapter is configured (e.g. Aadhaar offline XML, Aadhaar paperless eKYC, or equivalent)
When a citizen presents a verifier-attested identity assertion
Then the adapter extracts the government-assigned stable identifier, the residency attribute, and attestor-authorisation evidence, and passes them to the FR-069 derivation; no biometric data is retained
When any actor attempts to hard-code a single credential type as the only supported path
Then the adapter interface prevents it; the platform architecture enforces the pluggable pattern

# FR-071 — enrolment-collision recovery
Given a citizen who has lost their key material but still holds their original credential
When they attempt enrolment and the derived nullifier matches an existing record
Then the system routes them to the recovery flow rather than rejecting them as a duplicate
When the citizen re-authenticates, re-derives the same nullifier, and proves current key ownership
Then their keys are scheduled for rotation, and membership, tenure and history are confirmed intact
And no second identity is created

# FR-072 — recovery delay and veto guard
Given a nullifier-collision recovery initiated by a citizen
When the recovery is submitted
Then a seven-day delay is imposed before key rotation completes
And the active key receives a veto window equal to the full seven-day delay
And the recovering credential is barred from casting any vote during the delay
And a notification is sent to the registered channel at initiation
Given the active-key holder submitting a veto signal during the delay
When the veto is received
Then the recovery is aborted and the existing key remains in control

# FR-073 — government eID issuer hierarchy
Given an enrolment attempt using a government eID credential in a region where that rail is designated
When the credential is verified
Then the enrolment nullifier is minted and the record is accepted
Given an enrolment attempt using an availability-only credential class (liveness attestor or non-eID provider)
When the attempt is submitted
Then no enrolment nullifier is minted and the attempt is refused with the reason (non-eID class, availability-only)
And the availability-only credential may only be used for liveness attestation or slow recovery, not enrolment

# FR-050 — treasury record: every inflow and outflow published
Given any treasury inflow or outflow for an active party
When the event completes
Then an itemised, publicly readable, independently verifiable record is published for it
And any third party can independently reproduce the treasury state from the public record alone

# FR-074 — country selection: single active selection; FR-008 governs changes
Given a user who already holds one active country selection
When they attempt to add a second active country selection by any mechanism
Then no dual-selection state exists and the attempt fails
Given a user who requests a change of country selection
When the request is processed
Then the residency-change discipline of FR-008 is applied; legal eligibility is checked by code

# FR-075 — platform activation ≠ legal registration; boundary stated on every surface
Given a party that has reached platform activation status
When any surface, notification, export, or log is examined
Then no surface represents platform activation as legal registration in any jurisdiction
When an operator attempts to configure the platform to grant, deny, or override a party's legal registration
Then no such capability exists and the attempt is refused and logged

# FR-076 — party founding: complete digital constitution required; missing sections named
Given a party founding attempt where the financial-rules mandatory section is absent
When publication is attempted
Then publication is refused and the financial-rules section is named as the missing element
Given a founding attempt where all mandatory sections are present
When publication proceeds
Then the party is created with no human approval step

# FR-077 — non-violence clause: mandatory, integrity-checked; altered clause refused
Given a new or amended constitution where the non-violence clause has been altered from the platform-standard text
When publication is attempted
Then publication is refused and the altered clause is named as the cause
Given a valid constitution where the non-violence clause is intact and unaltered
When clause integrity is verified by code
Then the check passes with no human judgment in the path

# FR-078 — constitution versioned immutably; amendable only through tiered process
Given a party constitution at version N
When a passed proposal completes its timelock per FR-026
Then version N+1 is created; version N remains publicly retrievable unchanged
When any actor attempts to amend the constitution outside the tiered process
Then no such path exists and the attempt is refused

# FR-079 — participation tiers: self-assigned, no weight differential under any configuration
Given a party with members across all three tiers
When any ballot is tallied
Then every member's vote is counted with identical weight regardless of tier
When a configuration is attempted that grants any governance weight advantage to a higher tier
Then the configuration is rejected

# FR-080 — Worker tier: self-declared; no human approval; informed consent required first
Given a Supporter about to declare Worker tier
When the declaration flow opens
Then the interface states plainly that Worker status is permanent for the term and makes the participation record public for its duration
When the user confirms
Then Worker tier is recorded as the informed-consent event; no human approval step is required or available

# FR-081 — Candidate tier: self-nominated, code-checked, no human approval or ranking
Given a matured member who meets published candidacy eligibility
When they self-nominate
Then eligibility is checked by code; no human actor may approve, reject, or rank the candidacy at any point
Given the post-debate member vote
When the result is processed
Then candidacy is decided by the vote; every tier transition is recorded append-only

# FR-082 — Supporter: unconditionally anonymous; no profile surface exists for a Supporter
Given any Supporter-tier participant
When any interface, log, export, or public record is examined by any actor
Then no attributable record exists for that Supporter; only a nullifier appears on any record
When any actor attempts to construct or view a profile surface for a Supporter
Then no such surface exists; the attempt finds nothing by design

# FR-083 — Worker/Candidate participation record: starts at consent; no ballot direction disclosed
Given a Worker-tier participant whose consent event was recorded at declaration
When their participation record is viewed
Then it shows role-relevant activity from the consent event onward; it does not disclose ballot direction on any contested vote
Given the same participant's prior Supporter-period activity
When any record or export is examined
Then no prior Supporter-period activity appears or is attributable to them

# FR-084 — disclosure schedule published before window opens; no extra demands after role-taking
Given a published disclosure schedule for the Worker role
When a Worker declaration is confirmed
Then only information categories listed in the published schedule may be demanded from that person
When any actor or system attempts to demand a category not listed in the disclosure schedule for a role
Then the demand is refused

# FR-085 — consent irrevocable for the term; withdrawal before close destroys pre-nomination data
# v2.1.0 per OI-16: confidential-class carve-out adopted — pre-nomination disclosure data never enters the governance record; destroyed on withdrawal; completed-action records append-only without exception
Given a candidate who withdraws before the nomination window closes
When the withdrawal is processed
Then the system destroys the disclosure data submitted for that withdrawn candidacy
Given a candidate who remains past the nomination window close and later seeks to revoke consent during the term
When the revocation is attempted
Then no revocation path exists for the term in progress

# FR-086 — prior Supporter-period activity permanently anonymous after role transition
Given a person who held Supporter tier and subsequently takes Worker tier with consent
When an adversary holding all operator logs, all public data outputs, and network timing analyses all available combinations
Then no linkage between the anonymous Supporter identity and the public Worker identity is derivable from any system output
And absence-of-path verification in the style of UT-0700/UT-0701 confirms zero linkage paths exist

# FR-087 — committees: deliberative only; composition and minutes public
Given a committee that has produced a proposal
When the proposal enters the lifecycle
Then it enters with no special status or precedence over other proposals on the same question
Given committee composition and meeting minutes
When any member or third party requests them
Then they are publicly accessible

# FR-088 — committee capability limits; configuration granting outcome capability rejected
Given a configuration that would grant a committee the ability to affect election outcomes, membership status, or eligibility determination
When the configuration is submitted
Then the system rejects it with the reason (committee capability limit exceeded)
Given a committee exercising only permitted capabilities (event organisation, campaign coordination, facilitation, vendor management, publishing)
When it acts
Then no election, membership, or eligibility outcome is touched

# FR-089 — committee membership expires mechanically at term end; human renewal attempt has no path
Given a committee whose term has elapsed
When the expiry event is processed
Then committee membership is revoked by code with no human renewal step available
Given the party wishing to continue the committee into a new term without a member vote
When a direct renewal is attempted
Then no such path exists; continuation requires a fresh member vote

# FR-090 — proposal authorship public; competing proposals have equal standing
# v2.1.0 per OI-14: submitting requires Worker tier or above; a Supporter attempting to submit is prompted to self-declare Worker (public) first — voting rights unaffected
Given two proposals on the same question submitted by different members
When both are presented in the decision window
Then both appear with equal standing and are voted in the same window
When any actor attempts to suppress, delay, or deprioritise a competing proposal
Then no such capability exists and the attempt is refused
# NOTE (v2.16.2): every scenario above is built and passing. What this requirement does NOT
# specify is the case where BOTH competing proposals pass: each proposal carries an independent
# binary ballot and no window-closing, merging or ranking capability exists (deliberately — see
# the last scenario above, which is the anti-capture control). See §13 tracked routing (i) /
# Doc 03 §16 Q16. Answering it MUST NOT introduce the capability the scenario above forbids.

# FR-091 — eight-stage proposal lifecycle; stage-skip attempt refused
Given a proposal at the review stage
When any actor attempts to move it directly to the vote stage skipping discussion and debate
Then the transition is refused; the proposal stays at its current stage
Given a proposal that has completed all prior stages correctly
When each stage transition is executed by code per published timelines
Then the transition is recorded append-only with a timestamp and cause
# NOTE (v2.16.1): the FIRST scenario above (order / no-skip) is built and passing. The SECOND
# ("per published timelines") is NOT built — `schedule()` exists in packages/protocol but the
# proposal service never calls it, and the demo advances by a button. FR-091's RTM Must row is
# OPEN (G-NOMECH) on that clause alone; see §13 tracked routing (f). Recorded here so this
# Gherkin is not read as a statement of current behaviour.
# See also §13 (h) / Doc 03 §16 Q15: this requirement does not yet say what becomes of a
# DEFEATED or CANCELLED decision, which cannot be implemented or measured.

# FR-092 — permanent decision trail reconstructable from public data alone
Given any completed decision
When an independent third party attempts to reconstruct the full decision trail from public data alone
Then they can reproduce the proposal, deliberation records, vote result, enacted consequence, implementation status, and measured outcome
And no cooperation from Trumocracy is required for reconstruction

# FR-093 — candidate selection schedule; unanswered questions visibly recorded
# (example — non-normative; schedule durations set at OI-17 closure)
Given a candidate selection process with an open question phase
When a matured member submits a question to a candidate
Then the question is placed on the public record
When the candidate does not answer before the question phase closes
Then the question is visibly recorded as unanswered on the candidate's public record

# FR-094 — manifesto: structured, machine-readable, complete-or-refused
Given a manifesto commitment where the measurement-method field is absent
When publication is attempted
Then publication is refused and the missing field is named
Given a manifesto with all mandatory fields present for all time-horizon entries
When it is published
Then it is accepted with no human approval step

# FR-095 — manifesto commitment: stable ID, append-only status history
Given a manifesto commitment whose status transitions from on-track to delayed
When the transition is recorded
Then the new status is appended; the prior status remains in history unchanged
When any actor attempts to overwrite or delete a prior status entry
Then no such capability exists and the attempt is refused

# FR-096 — financial anomaly flag is information only; flag does not freeze funds
Given a treasury event that matches a published anomaly rule (e.g., velocity threshold exceeded)
When mechanical detection runs
Then a flag is published on the party's transparency dashboard
And the flag does not freeze funds, block any governance action, or trigger any enforcement pathway
When any actor attempts to configure an anomaly flag to freeze funds automatically
Then the configuration is rejected

# FR-097 — COI disclosure: mandatory for public-tier roles; overdue flag by code
# (example — non-normative; schedule constants set at OI-17 closure)
Given a Worker-tier participant whose COI disclosure is overdue on the published schedule
When the overdue threshold is crossed
Then the system flags the disclosure as overdue visibly on the participant's participation record by code with no human decision in the path

# FR-098 — COI review: investigation-and-recommendation only; panel attempts binding ruling — no such capability
Given a sortition-selected review panel that has completed a COI investigation
When the panel publishes its findings
Then the findings are a recommendation only; no recusal takes effect automatically from a panel finding alone
When the panel attempts to impose a binding ruling on any actor
Then no such capability exists in the panel interface

# FR-099 — internal audit: sortition-selected, read-only access, no enforcement power
Given an active party requesting an internal audit
When auditors are selected
Then they are drawn per-case by verifiable sortition from eligible members; no standing audit body exists
Given an audit report published
When the report's powers are examined
Then findings inform but carry no enforcement capability

# FR-100 — dispute timelines: stage maximum enforced; breach recorded on decision trail
# (example — non-normative; stage timelines set at OI-17 closure)
Given a dispute where the panel formation stage has exceeded the published maximum timeline
When the breach event is detected
Then the breach is visibly recorded on the decision trail
And the dispute process continues; the breach does not void the stage

# FR-101 — sortition panels: verifiable random selection; no standing body; output is recommendation only
Given a dispute requiring an appeal panel
When the panel is formed
Then members are drawn by verifiable random selection with a publicly reproducible selection proof
When any actor attempts to form a standing panel body persisting across cases
Then no such configuration exists and the attempt is refused

# FR-102 — member rights charter: machine-readable, code-enforced; charter may not reduce platform floor
Given a party charter that attempts to reduce a member's propose right below the platform floor
When the charter is submitted
Then the system rejects it with the reason (charter may not reduce platform-floor rights)
Given the member-rights charter
When any member or third party examines it
Then every listed right maps to a code-enforced capability with no human discretion gap

# FR-103 — conduct votes: individual private, aggregate public; Supporter unconditionally excluded by construction
Given a matured member casting a conduct vote on a public-tier participant
When the window closes
Then only the aggregate is public; the individual vote is not linkable to its caster
When any actor attempts to cast a conduct vote on a Supporter-tier participant
Then no such action exists by construction — no addressable Supporter identity is present

# FR-104 — removal: affirmative quorum; silence does not remove; surge influx cannot drive removal
Given a removal vote where active-votes-to-remove is below the published affirmative bar
When the vote closes
Then the removal does not succeed; silence and abstention are not counted as votes to remove
Given a surge of members joining during an active removal window
When the removal vote closes
Then the growth-surge defence (FR-023/FR-028; UT-0220) is applied; the influx cannot drive the removal outcome

# FR-105 — expulsion bar strictly higher than removal bar; separate vote required
# v2.1.0 per OI-15: expulsion targets public-tier participants only; no expulsion path exists for a Supporter — supporter-tier fraud is handled by FR-005 credential revocation
Given a removal vote that passed its published bar
When an expulsion vote on the same person is opened
Then the expulsion requires its own affirmative quorum and supermajority strictly higher than the removal bar
Given an expulsion vote that passes
When the result is processed
Then membership is revoked with a state transition recorded; no historical records are altered

Given a Supporter-tier member accused of misconduct
When any actor attempts to open an expulsion vote against them
Then no expulsion path exists for a Supporter and the attempt is refused; FR-005 credential revocation is the only fraud remedy available

# FR-106 — every data entity classified; unclassified entity not storable
Given an entity with no assigned data classification
When the system attempts to store it
Then the store operation is refused and the reason (missing classification) is logged
Given an entity with a valid classification
When it is stored
Then only operations permitted by that classification succeed

# FR-107 — append-only: hard-delete and overwrite attempts fail; transition appended with cause
# v2.1.0 per OI-16: confidential-class carve-out adopted — pre-nomination disclosure data never enters the governance record; destroyed on withdrawal; completed-action records append-only without exception
Given any governed entity whose state changes
When the transition is processed
Then the new state is appended with timestamp and cause; the prior state remains retrievable unchanged
When any actor attempts to hard-delete or overwrite any governance-path entity
Then no such capability exists and the attempt is refused and logged

# FR-108 — public record: proofs, timestamps, counts only; restricted-class write refused
Given a write operation that would place restricted-class data onto the public verifiable record
When the write is submitted
Then it is refused with the reason (restricted-class data not permitted on public record)
Given a write of a governance event (count, tally, proof, or timestamp)
When submitted
Then it is accepted and placed on the public record

# FR-109 — transparency dashboard: aggregate-only, no per-member drill-down
Given a transparency dashboard view
When any member or third party loads it
Then it presents aggregate data only; no query or path yields individual member activity
When every interface and export is tested for per-member drill-down capability
Then zero per-member drill-down paths exist

# FR-110 — scorecard: factual, informs but never concludes; rankings and verdicts refused
Given a performance scorecard view
When it is displayed
Then it presents factual commitment progress with published methodology, baselines, and evidence links
And it does not rank parties against each other or emit editorial conclusions
When any actor configures the scorecard to produce a ranking or a verdict
Then the configuration is rejected

# FR-111 — no per-user behavioural event recorded anywhere; UT-0525 and UT-0740 pass
Given any user interaction with the platform
When all stores, logs, and exports are inspected
Then zero per-user behavioural events (click, page view, dwell, reading trail, or equivalent) are present anywhere
And UT-0525 (indexer records no reader, query, or IP) and UT-0740 (client carries no beacon or tracking attribute) pass on every release

# FR-112 — trust-anchor revocation: member-vote only; operator revocation attempt — no path exists
Given a compromised trust anchor requiring revocation
When an operator, funder, or employee attempts to revoke the anchor directly
Then no operator revocation path exists; the attempt is refused and logged
Given a member vote at the highest governance tier enacting revocation
When the vote result is processed
Then code suspends new enrolments against the revoked anchor; already-enrolled credentials are unaffected unless separately voted

# FR-113 — trust-anchor rotation: compliant rotation never blocks enrolment beyond published window
# (example — non-normative; window duration set at OI-17 closure)
Given a legitimate trust-anchor rotation following member-vote governance at the published tier
When the rotation completes
Then new enrolments are unblocked within the published maximum window; credentials under the outgoing anchor remain valid
Given a rotation attempt that would block new enrolments beyond the published maximum window
When submitted
Then the system refuses the configuration until the window constraint is satisfied

# FR-114 — steward body elected by all-enrolled ballot; fixed terms; recall by affirmative quorum
# (term length, election cadence, recall bar are governance constants; values set at OI-17 closure)
Given all enrolled citizens are eligible to vote in a platform-wide steward election
When a steward election ballot closes with valid quorum and a candidate reaches the winning threshold
Then the candidate is elected to the steward body with a fixed-term contract recorded on the verifiable record

Given a steward seat whose published term has elapsed
When the term-expiry event is processed by code
Then the office is vacated automatically; no action by any actor is required; no renewal or extension path exists
When any actor attempts to extend or renew a steward term without holding a fresh election
Then no such capability exists and the attempt is refused

Given an active recall petition against a sitting steward that closes with approval meeting the published affirmative quorum and supermajority
When the result is processed
Then the steward is recalled and the seat is vacated; a fresh election opens per the published schedule
Given an active recall petition that closes below the published affirmative quorum
When the result is processed
Then the steward remains in office; the failing condition (quorum not met) is published

Given any actor who attempts to renew or extend a steward term by direct action outside the election process
When the attempt is submitted
Then no such capability exists and no renewal is recorded

# FR-115 — steward powers enumerated and exhaustive; unlisted action refused; extra capability configuration rejected
Given a steward who performs one of the four listed powers: (a) drafting and publishing a protocol proposal; (b) coordinating an independent audit, trusted-setup ceremony, or credential-issuer onboarding; (c) holding funds and signing a vendor contract; (d) publishing an operational report
When the action is submitted
Then it is accepted and recorded

Given a steward who attempts an action outside the four listed powers — for example flagging a ballot, reordering candidates on a live ballot, touching a vote count, or modifying any governance record
When the attempt is submitted
Then no such capability exists; the attempt is refused with the reason (action not in enumerated steward power list)

Given a configuration that would grant a steward a capability beyond the four listed powers
When the configuration is submitted for application
Then it is rejected and the rejection is logged with the reason (steward capability configuration beyond enumerated list not permitted)

# FR-116 — stewards propose; citizens decide; no emergency override; competing citizen proposals have equal standing
Given a steward who attempts to directly enact a protocol change without a citizen vote — for example by writing the change to the governance record or activating a protocol-change transaction
When the attempt is submitted
Then no such capability exists; the attempt is refused; no protocol change is recorded

Given a protocol-change proposal published by the steward body
When it enters the governance process
Then it is placed on the platform-wide citizen ballot with no special priority or pre-clearance; all enrolled citizens vote

Given a citizen (non-steward) who submits a competing protocol-change proposal on the same question in the same decision window
When both proposals are placed on the ballot
Then both appear with equal standing; both are voted in the same window; neither receives priority over the other

Given any actor — steward, operator, or Trumocracy staff — who attempts to invoke an emergency override to enact a protocol change without a citizen vote
When the attempt is submitted
Then no such path exists; CON-003 is reaffirmed; the attempt is refused and logged

# FR-117 — zero steward dependency; all citizen-facing flows succeed with every steward seat vacant
Given a platform simulation in which every steward seat is vacant (no steward holds office)
When a citizen completes the enrolment flow
Then enrolment succeeds with no steward action, signature, or liveness required

Given the same steward-vacancy simulation
When a citizen creates a new party, submits a petition endorsement, and activates a party
Then the flow succeeds with no steward action, signature, or liveness required

Given the same steward-vacancy simulation
When a citizen casts a vote in any open ballot
Then the vote is recorded and tallied with no steward action, signature, or liveness required

Given the same steward-vacancy simulation
When a citizen submits a proposal (Worker tier or above per FR-024)
Then the proposal is accepted and enters the lifecycle with no steward action, signature, or liveness required

Given the capability-absence test suite (UT-0700/UT-0701 pattern) run against all citizen flows in the steward-vacancy simulation
When the suite completes
Then zero steward-dependency paths are found in any citizen flow; the suite passes with zero violations; citizen-facing degradation is zero

# FR-118 — entrenched charter rules (seven) unamendable; amendment proposals rejected by code at submission
# v2.2.0 per OI-18: seven entrenched rules (CON-001 added); adversarial scenario for CON-001 added
Given an enrolled citizen who submits a proposal to amend one of the seven entrenched charter rules — for example introducing vote weighting (violates one human one vote), making ballot direction transferable (violates no transferable power), restricting the unconditional right to fork, or permitting the platform to conduct a municipal or state election (violates CON-001 — parties only, never state elections)
When the proposal is submitted regardless of the proposer's tier or the level of claimed support
Then the system rejects the proposal at submission with the reason (targets an entrenched charter rule — not amendable); no governance record for this proposal is created

Given an enrolled citizen who submits a proposal to amend a non-entrenched protocol rule
When the proposal is submitted
Then it is accepted and enters the amendment process per FR-119

Given any actor — steward, operator, or citizen with supermajority support — who submits an amendment targeting an entrenched charter rule
When the attempt is submitted
Then it is rejected by code at submission; no path exists to place an entrenched-rule amendment on any ballot

Given an adversarial actor who submits a proposal worded as "permit the platform to conduct a municipal election" (a CON-001 Tier-1 rule — scope boundary)
When the proposal is submitted regardless of the claimed rationale or level of support
Then the system recognises it as targeting the CON-001 entrenched charter rule and rejects it at submission; no ballot is opened; the proposer receives the reason (targets an entrenched charter rule — not amendable)

# FR-119 — three-tier amendment structure: Tier-1 fork-only; Tier-2 named-absolutes super-process; Tier-3 ordinary citizen vote
# v2.2.0 per OI-18: Tier-2 scenario added; Tier-3 ordinary scenario retained; Tier-1 handled by FR-118 block above
# (example — non-normative; quorum Q%, supermajority S%, timelock T, super-supermajority SS% are governance constants set at OI-17 / Doc 03)

# Tier-2: proposal to weaken a named absolute (receipt-freeness) — requires full super-process
Given a proposal to weaken receipt-freeness (a Tier-2 named absolute, BR-011/NFR-003)
When the proposal is submitted and the first vote closes with the required super-supermajority SS% and quorum
Then the proposal enters the fork-exercisable timelock of duration T_super (set in Doc 03 with rationale)
And during T_super the fork right remains fully available to every citizen
And an independent audit of the proposed change must be published before the second vote window opens
And the growth-surge defence is active throughout both votes and the timelock window
When the second affirmative vote closes with the required super-supermajority SS%
Then the change is enacted by code; if ANY of the five properties (super-supermajority on either vote, fork-exercisable timelock, published independent audit before second vote, growth-surge defence throughout) is absent, the change is NOT enacted

Given a proposal to weaken receipt-freeness where the first vote closes above SS% but the independent audit is not published before the second vote window opens
When the second vote window opens without the audit published
Then the second vote does not proceed; the proposal lapses; no enactment occurs

# Tier-3: ordinary citizen vote on a non-entrenched, non-named-absolute platform rule
# (example — non-normative; quorum Q%, supermajority S%, and timelock T are governance constants set at OI-17 closure)
Given a proposed platform rule change that is not in the FR-118 entrenched charter and not a Tier-2 named absolute
When the proposal closes with turnout meeting the published highest-tier quorum Q% and approval meeting the published supermajority S%
Then the proposal enters a timelock of duration at least as long as the highest party-tier timelock T
And on timelock expiry the change is enacted by code with no ratification step required from any actor

Given the same Tier-3 proposal type that closes below the published quorum Q% or below the supermajority S%
When the result is processed
Then the proposal fails; the specific failing condition (quorum shortfall or supermajority shortfall) is published on the governance record

Given any actor who attempts to ratify, approve, block, or modify the enactment of a passed and timelocked Tier-3 protocol change
When the attempt is submitted
Then no such capability exists; enactment is by code on timelock close with no human ratification step

# FR-120 — unconditional fork right regardless of steward action or protocol vote; fork flag OFF above dev (open critical)
# Note: fork initiation is an open critical with the fork flag OFF above dev (§13); this Gherkin block records the design obligation.
# When the flag is ON in the test environment the scenarios below must pass; in staging/production the flag status is the blocking item.
Given any enrolled citizen or party in the test environment (fork flag ON)
When they initiate a fork
Then the fork proceeds with full history export regardless of any steward action or any outcome of any protocol vote; no steward consent or signature is required

Given a scenario in which every steward opposes a fork initiated by a citizen (fork flag ON in the test environment)
When the fork initiation is submitted
Then it succeeds; steward opposition has no effect; the unconditional right to fork is preserved

Given a scenario in which a passed protocol vote purports to restrict fork rights (an entrenched-rule violation per FR-118)
When a citizen attempts to initiate a fork after that vote (fork flag ON in the test environment)
Then the fork proceeds; the fork-restriction enactment is refused by code at the vote-closure step because the fork right is entrenched (FR-118) and cannot be amended

# FR-121 — pilot jurisdiction sequence; Phase-1 India/Aadhaar; Phase-3 USA deferred
Given the Phase-1 India pilot with the Aadhaar offline paperless KYC adapter (FR-070 class (c)) deployed
When a citizen presents a valid Aadhaar offline XML credential
Then the adapter verifies the government-signed document, derives the enrolment nullifier on-device (FR-126), and processes enrolment per FR-069; all four universal in-circuit checks pass; no credential data is transmitted

Given a USA mDL credential presented to the Phase-1 enrolment system
When the adapter checks the credential class and jurisdiction configuration
Then the enrolment is refused; the Phase-3 USA mDL adapter is not live; the refusal message cites the deferred Phase-3 status and exposes no identity data from the credential

# FR-122 — open-tier access without verification; open tier never counted in strength number
Given a citizen who has not completed personhood verification (no nullifier enrolled)
When they access the platform for open-tier participation — reading party information, following a petition, watching governance updates
Then access is granted; no verification gate is in the path; no count, ballot eligibility, or candidacy right is acquired

Given the same citizen's open-tier activity recorded in any store or log
When the party's official strength number is computed
Then the open-tier citizen is not counted; only verified (nullifier-enrolled) members contribute to the strength number; no open-tier activity inflates any official count by any path

# FR-123 — verified personhood required for counted actions; party strength counts verified persons only; adversarial inflation attempt refused
Given a citizen who has not completed personhood verification (no nullifier enrolled)
When they attempt to contribute to a party's official strength number, cast a ballot in a binding decision, or stand as a candidate
Then the action is refused with the reason (verification required for counted actions); no counted-action record is created

Given a party with 500 verified members and 200 open-tier (unverified) participants
When the party's official strength number is published
Then the strength number is 500; the 200 open-tier participants are not added to the total by any path or configuration

Given an adversary who attempts to inflate a party's strength number by registering 10,000 open-tier (unverified) accounts
When the strength computation runs
Then the 10,000 open-tier accounts are not counted; the strength number reflects only verified (nullifier-enrolled) members; the attack produces zero numerical benefit

# FR-124 (v2.3.1) — verified status private to holder; Supporter self-view in authenticated session only; aggregate-only public; absence-test obligation
# Scenario 1: Supporter private self-view (new in v2.3.1 per ruling clause (a))
Given a Supporter-tier participant who has completed personhood verification (nullifier enrolled)
When that Supporter views their own authenticated-session account view
Then they see their own verified status and know their counting/voting eligibility; the verified status is visible to that participant in their own authenticated session only; no other actor has access to this view

# Scenario 2: absence from all public surfaces and other-actor views (FR-082, FR-124 clause (b) and (d))
Given a Supporter-tier participant who has completed personhood verification (nullifier enrolled)
When any interface, log, export, or public record is examined by any actor OTHER THAN the authenticated Supporter themselves
Then no per-person "verified" marker is visible for that Supporter on any public surface; the absence-of-path test passes: no path exists for any actor to determine this Supporter's verified status; the verification manifests only as the Supporter's nullifier being counted in the aggregate strength number; no retroactive linkage to their identity exists (FR-086 applies)

# Scenario 3: Worker/Candidate verified badge permitted (FR-124 clause (c))
Given a Worker-tier participant who has completed personhood verification and whose participation record is public by consent (FR-080 role-taking event)
When their public participation record is viewed by any actor
Then a "verified" marker is visible on their participation record and on their own private account view; no ballot direction is disclosed on any contested vote (FR-063 applies)

# Scenario 4: adversarial aggregate-inference attempt (FR-124 clause (b), NFR-001, NFR-002)
Given an adversary attempting to derive a Supporter's identity from the "verified" count change in the aggregate strength number
When the strength number is examined before and after a Supporter completes verification
Then the aggregation provides no per-person marker; the adversary cannot determine which Supporter verified nor link the verification event to any identity, pseudonym, or nullifier; the aggregate count changes but no Supporter-to-count association is derivable by any actor from any system output

# FR-125 (v2.4.0 FINALISED — OI-19 DECIDED, Rathish, 2026-08-20) — open-tier invite-gating; rate-limiter only; non-invite fallback ALWAYS open; referral edge verified then discarded
# Scenario 1: invite fast-path — referral edge verified and discarded
Given an open-tier registration flow where invite-gating is enabled for spam control
When a new citizen submits a valid referral token from an existing participant
Then the token is verified for authenticity, the gate-check passes, and the referral edge is immediately discarded with no record retained
When the complete store, log, cache, and export are inspected after gate-check completes
Then no referral relationship data exists anywhere; no referrer identity is associated with the new entrant; no referral graph node is persisted

# Scenario 2: adversarial referral-data persistence attempt
Given an adversary who requests all stored data after the gate-check
When the platform responds
Then no referral relationship, referrer identity, or referral token is retrievable; the discard is architectural, not a deletion from a store

# Scenario 3: person with no invite completes full path to counted membership via non-invite fallback (the separating test — OI-19 ruling)
Given a citizen who has no referral token from any existing participant
When they attempt to register for the platform and proceed through the non-invite fallback path to full counted membership
Then the non-invite fallback path is available and open; it may be slower or higher-friction than the invite path but is not closed or refused; no fee is charged at any step on the fallback path (FR-020 no-fee property applies without exception); the citizen successfully completes enrolment (FR-069 nullifier minted) and gains counted-action eligibility (FR-123); they are not refused membership for lack of an invite

# Scenario 4: adversarial — operator attempts to close the non-invite fallback
Given an operator who attempts to configure the platform so that the non-invite fallback path is disabled, closed, or redirected to a dead end
When the configuration is applied
Then the system rejects the configuration; the non-invite fallback path cannot be closed by any operator configuration, deployment flag, or default; only the Charter-layer amendment process (FR-129; FR-118/FR-119; re-entry through both gates) can modify this requirement

# Scenario 5: counted-membership path is ungated — no invite required
Given a citizen attempting to register for COUNTED membership (verified personhood path) who does not have a referral token
When the path toward counted membership is examined
Then no invite-gate applies to the counted-membership path; FR-020 and FR-123 govern that path without exception; the referral token fast-path requirement applies only to the open-tier entry gate

# FR-126 — on-device credential processing; raw credential never transmitted to platform
Given a citizen completing the enrolment flow using an Aadhaar offline XML credential (Phase-1 adapter)
When the WASM prover generates the ZK proof and derives the enrolment nullifier on-device
Then the raw Aadhaar XML, stable identifier, and all intermediate credential material are discarded on-device before any data leaves the device

Given an adversary intercepting all network traffic during and after the enrolment flow
When the intercepted traffic is fully inspected
Then only the ZK proof and the derived nullifier are transmitted; no Aadhaar XML, eIDAS attribute, ICAO chip data, mDL data, or stable identifier is present in any network payload

Given the complete data inventory of every Trumocracy store, log, cache, queue, and backup inspected at any point during or after enrolment
When every field is examined
Then no raw credential material — Aadhaar XML, eIDAS attributes, ICAO chip data, mDL data — is present in any form; only the derived nullifier appears on any record

# FR-127 — duplicate detection by nullifier collision only; no identity record comparison
Given a person who has already enrolled (nullifier N exists on the verifiable record)
When they attempt a second enrolment using the same physical credential
Then the same nullifier N is derived on-device, the collision is detected on-chain by matching against the existing record, and the enrolment is rejected as duplicate

Given an inspection of all duplicate-detection code paths in the system
When every path is examined
Then no name-matching, biometric comparison, document-number lookup, administrative review, or identity-record comparison exists in any path; all duplicate detection operates exclusively by nullifier collision

# FR-128 — no stored identity data in any form; subpoena test as the acceptance criterion
Given the complete data inventory of every Trumocracy store, log, cache, message queue, backup, and ephemeral store
When inspected for raw or reversible identity data
Then zero identity documents, raw stable identifiers, biometric templates, date-of-birth fields, address fields, or any data from which the underlying stable identifier could be recovered are present — whether in plaintext or in encrypted form

Given a court order requiring the platform to disclose who belongs to a named political party (the subpoena test)
When a technically capable actor with full platform access attempts to comply with the order
Then the platform is technically unable to produce any identity-to-member mapping; no such mapping can be assembled from any combination of stored data; the enforcement is architectural and not a policy promise

Given an adversarial scenario in which an operator has stored identity data in encrypted form (a rejected design per Decision 4 / TD-12)
When the subpoena test is applied to that configuration
Then the encrypted store can be produced in response to legal compulsion; this configuration FAILS the subpoena test; the system MUST reject any configuration that stores raw or reversible identity data, even in encrypted form
```

```gherkin
# FR-129 — Charter-layer guard: making single-issuer operation permanent requires Charter-level amendment process, not a deployment default
# Adversarial: attempt to extend single-rail deployment via configuration flag
Given an operator or maintainer who attempts to extend the Phase-1 single-rail (Aadhaar-only) deployment beyond the published dated Phase-1 scope by applying a configuration flag, environment variable, or deployment default
When the configuration is applied
Then the system rejects the configuration; no deployment flag or default may make single-issuer operation permanent or extend it beyond Phase-1 scope; only the Charter-layer amendment process (FR-118/FR-119 — tier determination owed to the architect; re-entry through Gate 1 and Gate 2 per CLAUDE.md) can do so

Given a valid Charter-layer amendment that has re-entered through Gate 1 (direction approved) and Gate 2 (launch readiness confirmed) per CLAUDE.md, and whose approved scope includes modifying the Phase-1 issuer-plurality limitation
When the amendment is applied
Then the issuer-plurality scope restriction may be extended or modified per the amendment's approved outcome
```

```gherkin
# FR-130 — provisional-party membership cap: 100-member limit until verified legal registration (anti-capture control)
# NOTE: this cap is wholly distinct from the endorsement threshold (FR-014/FR-016) and the endorsement-floor
# constants (DES-010: max(byPopulation, byVerified, 500)). Do not conflate the two.

# Scenario 1: 101st join attempt on an unverified provisional party is refused with a stated reason
Given a provisional party (platform-activated per FR-018; legal registration not yet verified and recorded per FR-075) that already has 100 members
When a 101st citizen attempts to join
Then the join is refused
And the reason stated is that the party has reached the 100-member provisional cap
And the citizen is informed that the cap lifts automatically on the party's verified legal registration

# Scenario 2: cap lifts automatically on verified legal registration — no human action in the path
Given the same provisional party at 100 members
When the party's legal registration is verified and recorded on the platform per FR-075 (code-executed; no operator action in the path)
Then the membership cap lifts automatically by code
And a subsequent 101st join attempt by any citizen succeeds without a cap refusal

# Scenario 3: no operator or manual lift path exists before legal registration is verified
Given a provisional party whose legal registration has not yet been verified
When any operator, employee, platform administrator, or human actor attempts to lift the membership cap by any mechanism (configuration flag, administrative action, deployment default, or direct state mutation)
Then no such capability exists
And the attempt is refused
And the cap remains in place until legal registration is code-verified
```

```gherkin
# FR-131 — v1 honesty notice AND honesty-of-claim duty. Clauses (a)-(c): UI MUST state voting is NOT anonymous/receipt-free/coercion-resistant before ballot confirmation. Clause (d): open-tier non-counting disclosure. Clause (e), from v2.17.0: honesty of claims about EVERY v1 participation act, on every public-facing surface, in every language — not confined to the ballot.
# Design: DES-098 (Doc 03 §10.13.6). Follows disclosed-limitation pattern: Doc 03 §13 Phase-1 public-tally disclosure.

# Scenario 1: Honesty notice displayed before ballot confirmation (SCR-13 ballot booth)
Given a Definition-A (v1) deployment of Trumocracy
And a member who has navigated to the ballot booth (SCR-13) and is about to cast a vote
When the member is presented with the ballot before confirming their choice
Then a plain-language honesty notice is displayed
And the notice states that this ballot uses conventional authentication and is NOT anonymous, NOT receipt-free, and NOT coercion-resistant
And the notice states that the platform database CAN see vote direction and party membership
And the notice states that the cryptographic private ballot (where the platform is technically unable to see direction or membership) is available in the v2 upgrade
And the notice is non-dismissable: the member MUST acknowledge the notice before the ballot can be submitted
And the notice is accessible to screen-readers and meets WCAG 2.2 Level AA

# Scenario 2: Post-vote confirmation screen (SCR-14) also carries the honesty notice
Given the same member in a v1 deployment who has successfully cast a ballot
When the post-vote confirmation screen (SCR-14) is displayed
Then the honesty notice is present on that screen as well

# Scenario 3: v1 product materials do not present voting as anonymous or receipt-free
Given any surface of a v1 deployment — UI, README, public documentation, or marketing material
When the text is searched for any claim that v1 voting is "private", "anonymous", "receipt-free", "secure" (in the context of ballot privacy), or equivalent descriptions of Definition-B guarantees
Then zero such claims are found describing v1 voting behaviour

# Scenario 4: Absence test — no path around the honesty notice (UT-style)
Given a member in a v1 deployment who has navigated to the ballot booth
When any code path is tested for a route that submits a ballot without the honesty notice acknowledgement
Then no such path exists; every ballot submission code path requires prior notice acknowledgement

# Scenario 5: FR-131 clause (d) — open-tier non-counting disclosure notice (v2.13.0 ISS-03)
Given a Definition-A (v1) deployment of Trumocracy
And a participant who has completed phone-only verification (open tier) and has NOT completed the government-ID document check
When that participant attempts a FR-123 counting action — contributing to a party's official strength number, casting a vote that counts in a binding decision, or standing as a candidate
Then the FR-131 clause (d) notice is displayed before the action is refused
And the notice states in plain language: (i) the participant's current participation is open-tier only; (ii) that specific action requires government-ID verification per FR-123; (iii) what specifically does not count — official strength contribution, binding vote, and candidacy; (iv) how to become a counting member by completing the government-ID document check (FR-132 §(b))
And the notice is non-dismissable: the participant cannot proceed with the counting action without the notice being presented
And the counting action is refused
And the participant's account and all open-tier access are unaffected by the refusal of the counting action

# Scenario 8: FR-131 clause (e) — honesty of claims about any v1 participation act (v2.17.1, cycle-1 ISS-01)
Given a Definition-A (v1) deployment of Trumocracy
And any public-facing string, screen, README or other material, in any language, that describes a participation act — casting a vote, endorsing or backing a petition, joining or belonging to a party, or supporting a party
When an ordinary reader at the grade-8 reading level (NFR-023) reads it
Then the material does not lead that reader to conclude that Trumocracy itself cannot link them to the act
And where the participation act is public by design — petition endorsement is, per Doc 14 §2.2, while the private_endorsement charter option is OFF in every v1 deployment — the material says so plainly and does not describe the act as kept private, secret or hidden
And the material does not use "private", "anonymous", "receipt-free" or "secure" of any v1 participation act, except in the negated form clause (a) requires
And material that instead states separately what the platform does not publish and what the platform's own records can see, and makes no contrary claim elsewhere in the same string, passes — the approved pattern being apps/web/src/i18n/en.ts parties.joinPrivate, guarded by UT-0869
And where the safe-harbour and the reader test disagree, the reader test governs

# Scenario 9: Absence test — the claim class does not survive anywhere in a v1 surface (clause (e), UT-0869 pattern)
Given every public-facing surface of a v1 deployment, in every language, including the README and the landing copy
When each surface is read against the clause (e) reader test rather than searched for a list of banned words
Then zero materials assert or imply that a v1 participation act is unknowable to Trumocracy
And a claim that contains none of the four banned words still FAILS if an ordinary grade-8 reader would take it to mean the act is unknowable to Trumocracy
```

```gherkin
# FR-132 — v1 phone-based authentication: one account per verified phone; MUST NOT claim one-person-one-vote
# Design: DES-095 (v1 backing amended), ADR-025. Source: DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md Ruling 1.

# Scenario 1: Enrolment creates exactly one account per verified phone number
Given a Definition-A (v1) deployment of Trumocracy
When a person completes SMS verification with a valid phone number and submits their enrolment
Then exactly one member account is created linked to that phone number
And a second enrolment attempt using the same phone number is rejected with a duplicate-phone error

# Scenario 2: v1 MUST NOT claim one-person-one-vote in any product surface
Given any surface of a v1 deployment — UI, README, public documentation, or marketing material
When those surfaces are searched for any claim that v1 guarantees one-person-one-vote, unique personhood, or equivalent
Then zero such claims are found in v1 product surfaces

# Scenario 3: FR-131 honesty notice carries the real-person-verified-not-unique-personhood caveat
Given a member in a v1 deployment viewing the FR-131 honesty notice (DES-098) before casting a vote
When the notice is read
Then the notice states plainly that the v1 identity check establishes a real, legal-age person — not unique personhood
And the notice states that same-document deduplication (subject_id_hash) prevents the same ID from creating two accounts
And the notice states that a person with multiple legitimate government IDs can still create multiple accounts in v1
And the notice states that the one-person-one-vote guarantee is provided by the v2 ZK enrolment, not v1

# Scenario 4: Verify-and-discard — only allowlist fields persist after ID check
Given a Definition-A (v1) deployment of Trumocracy
And a person who completes a government-ID document check at signup
When the check completes successfully and the enrolment is finalised
Then the following allowlist fields are stored (restricted-class): id_verified_flag, age_verified, issuing_region, subject_id_hash, phone_hash, verified_at
And the following denylist data is NOT stored: document image, biometric template, selfie, name, date of birth, document number, expiry date, raw subject ID, verification session ID
And no denylist field is retrievable from any platform store after the check completes

# Scenario 5: Duplicate government ID refused via subject_id_hash
Given a Definition-A (v1) deployment of Trumocracy
And an existing member account whose subject_id_hash was set during enrolment
When a second enrolment attempt is made using a government-ID document that produces the same subject_id_hash
Then the second enrolment is refused with a duplicate-document error
And the refusal does not reveal which existing account is the duplicate
And the refusal message states that a government ID may only be associated with one account

# Scenario 6: Phone-only registration — account created without any government-ID document (v2.13.0 ISS-01/ISS-04 positive path)
# This scenario replaces the pre-ruling Scenario 6 ("enrolment denied"). Post-ruling behaviour per
# DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md: government-ID check gates COUNTING actions only,
# never account creation. FR-132(a): "The system MUST NOT refuse account creation or party
# membership for absence of a government-ID document."
Given a Definition-A (v1) deployment of Trumocracy
And a person who has no government-ID document and completes SMS verification with a valid phone number
When they submit their account registration
Then the account is created successfully
And no government-ID document is required or requested during account creation
And the member has open-tier access — reading, following, watching, discussing, supporting, and organising — with no further steps required
And the phone number is stored as a one-way hash (phone_hash) per FR-132(a); the plaintext phone number is not retained

# Scenario 7: Open-tier member's counting action refused with FR-131 clause (d) notice (v2.13.0 ISS-01 counting-blocked path)
Given a Definition-A (v1) deployment of Trumocracy
And a member who has completed phone-only verification (open tier) and has NOT completed the government-ID document check
When that member attempts a FR-123 counting action — contributing to a party's official strength number, casting a binding vote in a decision, or standing as a candidate
Then the FR-131 clause (d) notice is displayed before the action is refused
And the notice states in plain language: (i) the participant's current participation is open-tier only; (ii) that specific action requires government-ID verification per FR-123; (iii) what specifically does not count — official strength contribution, binding vote, and candidacy; (iv) how to become a counting member by completing the government-ID document check (FR-132 §(b))
And the notice is non-dismissable
And the counting action is refused
And the participant's account and all open-tier access are unaffected by the refusal of the counting action
```

```gherkin
# FR-133 — v1 spam-resistance layer: flag-don't-block; false-positive path is first-class
# Design: DES-099. Source: DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md Ruling 2.
# Precedents: FR-061 (degrade never deny), FR-125/OI-19 (rate-limiter not admission condition), FR-020 (absolute open join).

# Scenario 1: VoIP/virtual-number flagged phone is rate-limited, not hard-blocked
Given a Definition-A (v1) deployment of Trumocracy
And an enrolment attempt with a phone number the spam-resistance layer flags as VoIP or virtual-number
When the spam-resistance layer processes the enrolment request
Then the enrolment is rate-limited (delayed or queued for additional verification)
And the enrolment is NOT hard-blocked
And the response never states the user is permanently denied due to the flag

# Scenario 2: Flagged legitimate VoIP/eSIM user completes every primary flow
Given a member in a v1 deployment whose phone number triggered a spam-resistance flag
But whose enrolment completed (rate-limited path)
When that member attempts to join a party, sign a petition, or cast a vote
Then each of those governance actions is available to the member (subject only to rate-limit constraints)
And no governance action is denied solely on the basis of the spam-resistance flag
And FR-020 non-invite fallback join path remains available and unaffected

# Scenario 3: Flag events do not appear on any public record or governance-path surface
Given a member whose phone number triggered a spam-resistance flag during enrolment
When the public verifiable record, the governance-path surface, and any member-facing data are inspected
Then zero flag events, VoIP indicators, device scores, or spam-resistance signals appear in any of those surfaces

# Scenario 4: Hard-block path does not exist (absence test)
Given any code path in a v1 deployment
When that path is tested for a route that permanently denies a phone number flagged by the spam-resistance layer
Then no such hard-block path exists; every flagged number either passes rate-limiting or enters an additional-verification queue
```

```gherkin
# NFR-001 — privacy: no actor determines party membership or vote from system data
# Adversary model per §6 NFR-001: holds all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity
# ε and collusion bound provisional until OI-10 closes (Design, owner: Dr. Lena Kowalczyk)
Given an adversary with the capability set defined in NFR-001
And the adversary selects N ≥ 10,000 independently drawn target members
When the adversary attempts to determine which party each member belongs to or how they voted
Then the adversary's advantage over random guessing is ≤ ε (provisional: 0.02) at 95% confidence across the N trials
And an independent privacy audit finds zero critical or high linkage findings
# v2.0.0: this guarantee is tier-scoped per BR-017 — unconditional for Supporter-tier and for ballot content/direction in every tier; Worker/Candidate role-relevant records are public by consent (§4.24)

# NFR-002 — anonymity set floor
Given a scope in which only 40 eligible actors exist
When a person acts in that scope
Then the action is withheld from publication or aggregated until at least 1,000 indistinguishable actors are present
And the user is told that publication is delayed and why
# v2.0.0: this guarantee is tier-scoped per BR-017 — unconditional for Supporter-tier and for ballot content/direction in every tier; Worker/Candidate role-relevant records are public by consent (§4.24)

# NFR-003 — coercion resistance: receipt-freeness with PPT security parameter λ ≥ 128 bits
Given a voter who has cast a ballot
And the voter cooperates fully with a coercer, sharing device, credentials, and all stored artefacts after the fact
When the coercer (modelled as a PPT adversary with security parameter λ ≥ 128 bits) attempts to determine the voter's actual choice
Then the coercer's advantage over random guessing across the candidate set is negligible in λ
Given a voter who cast a ballot at time T1 and cast a replacement ballot at time T2 before close
When any observer examines the full public record, operator logs and network timing data
Then the observer cannot distinguish "this voter re-voted" from "this voter voted exactly once at T1"

# NFR-004 — sybil resistance: duplicate rate and attestor concentration cap
Given an independent quarterly audit using a consented random sample of ≥ 5,000 credentials per region
When the audit tests for duplicate or synthetic persons
Then the detected duplicate/synthetic rate is ≤ 0.1% at 95% confidence
Given an attestor that would reach 50% of credentials in a region with a new issuance
When they attempt to issue that credential
Then further issuance in that region is refused and the current share of each attestor is published

# NFR-005 — cost ceiling
Given a representative month of production traffic
When platform-borne cost per citizen governance action is measured
Then the median is below USD 0.01 and the 99th percentile is below USD 0.05
And the amount charged to citizens is USD 0.00 in 100% of cases

# NFR-006 — performance on the reference device profile
Given the reference device (2 GB RAM, Android 9) connected at 64 kbit/s with intermittent connectivity
When a user navigates to any primary screen
Then the screen is interactive within 5 seconds at the 95th percentile
When a user submits any governance action
Then it is acknowledged within 5 seconds p95 and finalised on the verifiable record within 120 seconds p95
When a new citizen completes the full enrol→endorse journey
Then the journey is completable within 10 minutes

# NFR-007 — reliability and availability SLOs
Given a representative calendar month of production traffic
When the citizen write-path availability is measured
Then it is ≥ 99.5% across the month
When the public read and verification path availability is measured
Then it is ≥ 99.9% across the month
Given a single operator node taken offline (single-operator failure)
When a citizen attempts a governance action within 60 minutes of the failure
Then the action completes through an alternative path and no governance action is permanently blocked

# NFR-009 — security audit: zero open critical/high at Gate 2
Given an independent third-party security and cryptography audit completed before launch
When the audit report is examined at Gate 2
Then zero critical or high findings remain open
And no privileged administrative override is present in any governance path, confirmed by audit inspection

# NFR-010 — data minimisation: no direct identifier in public or governance-path stores
Given a complete data-inventory inspection of the verifiable public record and all governance-path stores
When every field of every stored entity is examined
Then no identity document, biometric template, address, date of birth or other direct identifier is present
And no personal data is present on any immutable public record
Given the two restricted operational stores enumerated in §7 (Recovery requests & notification channel; Support & appeal records)
When those stores are inspected
Then each holds only the minimal personal data fields and retention durations stated in §7 (90 days; 24 months)

# NFR-011 — accessibility
Given each primary flow
When it is audited against WCAG 2.2 Level AA and operated by screen reader and keyboard/switch at 200% text scale
Then zero Level A or Level AA failures are found and every task is completable

# NFR-012 — portability: reference device and bandwidth floor
Given the reference device profile (2 GB RAM, Android 9 or equivalent mobile browser) at 64 kbit/s
When the client is installed
Then the install package is ≤ 15 MB
When a user completes any primary flow including offline draft composition with deferred submission
Then the flow completes successfully on the reference device profile

# NFR-013 — localisation: 8 launch languages, no untranslated strings
Given the platform deployed with all 8 launch languages configured, including at least one right-to-left locale
When any primary flow is exercised in each language
Then zero untranslated strings are displayed
And dates, numbers and names are formatted according to each locale's conventions

# NFR-014 — censorship resistance
Given the primary domain and the app store listing are both blocked in a region
When a citizen attempts a governance action
Then at least one alternative access path succeeds

# NFR-015 — compliance: erasure by design, legal review, pre-enrolment disclosure
Given a user who requests erasure of their personal data
When the system processes the request
Then it demonstrates that no personal data exists to erase in the governance-path stores or on the public record
And it offers credential deactivation as the available alternative
And the enrolment flow has disclosed this limitation before the user enrolled
Given a pilot jurisdiction before enablement
When legal review is conducted
Then legal sign-off is obtained per that jurisdiction before launch

# NFR-016 — key recovery: success rate and fraud rate
Given ≥ 500 legitimate recovery attempts measured
When recovery outcomes are assessed
Then ≥ 99% succeed within 14 days
Given a completed recovery
When the system is inspected for silent impersonation risk
Then the registered channel received a notification with a cancellation window active during the recovery delay
Given ≥ 10,000 recovery events audited
When fraudulent recoveries are counted (attacker rotates a key without the legitimate holder's knowledge or veto)
Then the fraud rate is ≤ 0.01%

# NFR-017 — upgradeability without unilateral control
Given a proposed change to a platform-wide governance rule
When Trumocracy, a funder or an operator attempts to enact it unilaterally
Then no such path exists and the change can only proceed through the tiered process and its timelock

# NFR-020 — rollback
Given a release in production
When a rollback is initiated
Then the previous version is fully restored within 15 minutes
Given a ballot that is currently open
When a flag governing that ballot's rules is changed
Then the change is refused until the ballot closes

# NFR-021 — open source and reproducible builds
Given the platform's governance-critical logic
When any third party obtains the published source repository
Then 100% of governance-critical logic is present under an OSI-approved licence
When that third party builds from source and compares the result to the running system
Then the build is byte-for-byte reproducible and matches the published artefact
And ≥ 1 independent party has verified build reproducibility before Gate 2

# NFR-022 — usability: unaided completion, SUS score, support rate
Given a usability study of ≥ 200 first-time non-technical users per launch locale
When they attempt the enrol→endorse journey unaided
Then ≥ 80% complete it within 10 minutes
And the System Usability Scale score is ≥ 75
And the support-contact rate for enrolment is ≤ 5%

# NFR-023 — content: grade-8 reading level, no jargon, notifications reveal nothing
Given any primary flow in any of the 8 launch locales
When the text is analysed for reading level
Then it is at or below grade-8 reading level per the locale's equivalent measure
When the text is searched for: wallet, seed phrase, private key, gas, token, mint, chain, block, hash, or equivalent jargon
Then zero occurrences are found in primary flows
Given a notification generated by any governance action
When the notification content is examined
Then it does not reveal party membership, party name, governance action type, or voting behaviour of the recipient

# NFR-024 — anti-harassment: no identity exposure, mechanical harassment metric
Given any member's profile or activity as viewable by any other member or unauthenticated actor
When all surfaces, exports and logs are examined
Then no identity, contact details, location precision below the member's declared region, or individual activity pattern is exposed
Given the harassment-rate metric computed per NFR-024 (repeat recall/nomination initiations against a single office-holder per 1,000 members in 90 days)
When this metric is computed for a production month
Then it is published on the governance dashboard (NFR-019) within 72 hours of month close
And the computation is performed mechanically, with no Trumocracy employee exercising discretion over political speech content
# v2.0.0: this guarantee is tier-scoped per BR-017 — unconditional for Supporter-tier and for ballot content/direction in every tier; Worker/Candidate role-relevant records are public by consent (§4.24)

# NFR-025 — operator cannot censor an individual
Given an operator deliberately withholding one citizen's governance action
When 60 minutes have elapsed
Then the action has been included through an alternative path

# NFR-027 — no per-user behavioural telemetry; inspection of every store/log/export finds zero events; UT-0525/UT-0740 pass
Given the full data inventory of every store, log, and export in the system
When inspected for per-user behavioural events
Then zero per-user behavioural events (clicks, page views, dwell time, reading trails, or equivalents tied to a person, credential, nullifier, session, or device) are present anywhere
And UT-0525 and UT-0740 pass on every release, confirming absence of tracking

# NFR-028 — append-only data lifecycle; hard-delete and overwrite attempts fail; state transition appended with cause
Given any governance-path entity in any state
When any actor attempts to hard-delete or overwrite it
Then the operation is refused; no hard-delete or overwrite path exists in any governance-path store
Given any state transition for any governance-path entity
When it is processed
Then the transition is appended with timestamp and cause; the prior state is preserved unchanged
```

---

## 9. Constraints (CON) & Assumptions

### 9.1 Constraints

| ID | Constraint | Type | Owner |
|----|-----------|------|-------|
| CON-001 | Trumocracy organises **political parties only**. It MUST NOT conduct, tabulate, certify, replace or hold itself out as conducting any binding state election, referendum or plebiscite. Every public surface MUST state this boundary. **This is absolute and not negotiable at any gate.** _(v2.2.0 per OI-18: promoted into the Tier-1 entrenched charter (FR-118) — unamendable by any vote, changeable only by fork.)_ | Legal / product | Sofia Marchetti |
| CON-002 | Trumocracy MUST NOT take custody of personal identity documents, biometric templates, or residential addresses at any point in any flow. | Legal / privacy | Dr. Lena Kowalczyk |
| CON-003 | There MUST be no single trusted operator, administrative key, privileged role, pause switch or emergency override in any governance path — including for Trumocracy itself. | Architectural | Rafael Duarte |
| CON-004 | All governance-critical logic MUST be open source under an OSI-approved licence with reproducible builds. | Openness | Rafael Duarte |
| CON-005 | Electoral, party-registration, political-finance and association law differ per jurisdiction. Each launch jurisdiction MUST pass legal review before enablement, and features MUST be independently gateable per jurisdiction. | Legal | Sofia Marchetti |
| CON-006 | No transferable token, coin, security, membership sale, subscription or fundraising instrument for the platform may exist. Governance rights MUST NOT be represented by anything transferable. | Anti-corruption | Erik Lindqvist |
| CON-007 | Appetite: **USD 4.2M** (accepted budget ≈ USD 4.03M on the accepted L2 basis — record-derived figure; Ruling 1 cascade 2026-08-21, DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.2; ≈ USD 175K held as explicit audit-remediation contingency; appetite unchanged at USD 4.2M; supersedes the stale ~USD 4.13M figure from Doc 13 v1.0.0 / Gate-1 decision B-01 — Lever L2: one pilot at launch; see Doc 01 §E2) and a team of **18** through launch. Gate 1 re-entry target 2026-08-15 (this packet); Gate 2 target 2027-05-14 (per S-01); launch **2027-06-01** (fictional press-release dateline per Doc 01 v2.0.0; actual launch follows Gate 2 readiness 2027-05-14). Scope, not date, absorbs overrun. _(v2.0.1: launch re-dated per S-01; v2 scope schedule/appetite re-estimated in Doc 13 after Gate 1 — open item.)_ | Budget / schedule | Priya Raghunathan |
| CON-008 | The public record is immutable, which is irreconcilable with an unrestricted right of erasure. The constraint therefore is: **no personal data may ever be written to it.** | Legal / architectural | Sofia Marchetti |
| CON-009 | Threshold denominators depend on third-party population statistics whose accuracy, granularity and update cadence Trumocracy does not control and MUST NOT modify. | External dependency | Yuki Sato |
| CON-010 | Mobile application-store policies restrict political and election-related applications; distribution MUST NOT depend on a single store or domain. | Distribution | Hiroshi Tanaka |
| CON-011 | Device floor 2 GB RAM / Android 9; bandwidth floor 64 kbit/s intermittent. Any feature that cannot meet this floor MUST be cut, not degraded silently. | Product | Nadia Hassan |
| CON-012 | No bespoke, unaudited cryptographic construction may be used for any privacy, personhood or ballot property; every such property MUST rest on independently audited work. | Security | Rafael Duarte |
| CON-013 | Non-violence is a founding principle of the platform: the standard non-violence clause is mandatory in every party constitution (FR-077); this is the platform's single deliberate exception to political-content neutrality, recorded as such. | Values / product | Daniel Okonkwo |
| CON-014 | The platform cannot grant, deny or override legal party registration; platform status and legal status are distinct on every surface (FR-075). | Legal | Sofia Marchetti |
| CON-015 | A **legal opinion** for the Phase-1 lead jurisdiction (India) MUST be obtained and recorded before the enrolment requirement (FR-069/FR-070/FR-121) is finalised against the Aadhaar rail and before the Phase-1 adapter is marked implementation-ready. Aadhaar's use for anything resembling political or voter identification is legally sensitive in India; the legal opinion MUST address this specifically and MUST be on record before Gate 2. This is a **Gate-2 line item** — no Gate-2 checklist may show the Phase-1 enrolment adapter as ready without a recorded legal sign-off. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 1; Rathish, 2026-08-20.)_ **⚠ CRITICAL PATH — v2.11.0 annotation (2026-08-23):** The government-ID document check (FR-132 §(b), DES-100) adds eight new questions to the scope of this legal opinion, all routed to CON-015: (1) Does `id_verified_flag` (boolean) constitute personal data under India's DPDP Act or the Aadhaar Act 2016? (2) Does `age_verified` (boolean)? (3) Does `issuing_region` (country-code)? (4) Does `subject_id_hash` (HMAC-SHA-256/KMS-pepper of the government-ID subject ID) constitute personal data or Aadhaar-derived data under the Aadhaar Act? (5) Does `phone_hash`? (6) Does `verified_at` (timestamp)? (7) Is the verify-and-discard model (retain allowlist, discard document and PII) sufficient to satisfy DPDP/GDPR/Aadhaar Act retention minimisation obligations, given a third-party vendor performs the check? (8) Does the vendor no-retention contractual clause (FR-132 §(e)) satisfy Indian law obligations, or must the legal opinion address specific contractual requirements? **No enrolment sprint begins until CON-015 is cleared for the government-ID check path.** The legal opinion MUST address all eight questions above in addition to the original Aadhaar political-use sensitivity question. | Legal / regulatory | Sofia Marchetti |

### 9.2 Assumptions & dependencies

| ID | Assumption / dependency | If false |
|----|------------------------|----------|
| A-01 | At least two mutually independent identity attestors are available and willing in each pilot jurisdiction. | `RISK-05` materialises; that jurisdiction cannot launch. |
| A-02 | At least two independent published population sources exist per region at the required granularity. | `RISK-12`; thresholds cannot be computed; re-scope to coarser regions. |
| A-03 | Anonymous political association is lawful in each pilot jurisdiction. | `CON-005` blocks that jurisdiction. |
| A-04 | Citizens will accept a slower, less convenient voting experience in exchange for coercion resistance. | `TD-06` must be re-decided; usability targets at risk. |
| A-05 | Grant funding of USD 4.2M is committed through launch, with no governance strings attached. | `CON-007` and `BR-008` conflict; escalate to Gate 1. |
| A-06 | Infrastructure exists that provides tamper-evident, independently verifiable records without a single controlling operator, at the cost target. | `NFR-005` or `CON-003` is unachievable; the product thesis is at risk. |

### 9.3 Recorded trade-offs (tensions we are NOT pretending we resolved)

| ID | Tension | Decision taken | What we give up | Owner |
|----|---------|----------------|-----------------|-------|
| TD-01 | **Transparency vs privacy.** Total verifiability implies a public record; privacy implies publishing nothing about a person. | Publish *outcomes, counts, charters and tallies* in full; publish *nothing* that identifies a person. Verifiability is achieved over aggregates and proofs, never over identified individuals. | Researchers cannot study individual-level participation; some legitimate audit questions ("did person X vote twice?") are unanswerable by anyone, including us. We accept that. | Dr. Lena Kowalczyk |
| TD-02 | **Accountability vs anonymity.** You cannot hold someone accountable for a vote you cannot attribute. | Deliberate asymmetry: ordinary members anonymous; candidates and office-holders publicly identified **by their own informed consent**, with their office-capacity governance votes attributable. _(v2.0.0: extended to the three-tier model — Supporters anonymous unconditionally; Workers AND Candidates public by explicit informed consent at role-taking; disclosure scales with power sought; consent irrevocable for the term; prior supporter-period activity never retroactively linked.)_ | Office-holders lose privacy permanently for the term — irreversibly. Some good people will not stand because of it. Members' *ordinary* votes remain unaccountable, so a member cannot be praised or blamed for them. | Erik Lindqvist |
| TD-03 | **Immutability vs erasure rights.** An immutable record cannot honour "delete my data". | Hold no personal data anywhere, so erasure has nothing to bite on; offer credential deactivation instead of deletion; disclose the limitation *before* enrolment. | This is a legal posture, not a legal certainty. A regulator may disagree, and pseudonymous-but-immutable records may still be deemed personal data in some jurisdictions. Legal review per jurisdiction is a launch condition (`NFR-015`). | Sofia Marchetti |
| TD-04 | **Code-only governance vs no recourse.** No override means no fix when something goes genuinely wrong. | Accept it. No override button exists, including for demonstrable error. Recourse is limited to what the charter's own tiered amendment process and the right to leave/fork provide. | A party can make a decision that is stupid, self-harming or the result of a bug, and nobody can undo it outside the charter's own process. Every operational instinct will push against this; the tenets say hold. | Tomás Ferreira |
| TD-05 | **Sybil resistance vs inclusion.** Strong personhood proof excludes people without documents. | Require plural attestation paths including at least one non-document-based path per region, and publish exclusion rates as a launch metric. Phase 1 (per OI-03) uses government eID as the sole uniqueness anchor; FR-070 adds a pluggable adapter interface and FR-073 codifies the Phase-1 hierarchy. | Some eligible people will still be excluded — disproportionately the marginalised, which is precisely the population the product claims to serve. We measure it and publish it rather than claim it away. Open item `OI-03`. | Marcus Adeyemi |
| TD-06 | **Coercion resistance vs verifiability and usability.** Letting a voter verify their own vote gives them a receipt; hiding it costs confidence and adds friction. | Choose receipt-freeness. The voter verifies that the *tally* is correct, not that *their* ballot is in it. | Voters cannot personally confirm their vote was counted, which is a genuine loss of individual confidence, and re-voting adds UX complexity. Mitigated by universal verifiability (`FR-033`), not eliminated. | Aisha Nkemdirim |
| TD-07 | **Candidate feedback asymmetry.** Simple +1/−1 scoring treats upvotes and downvotes symmetrically; but casting a visible downvote against a local incumbent creates a retaliation risk that an upvote does not. | Accept deliberate asymmetry: upvote = +3, downvote = −1 (FR-065). Individual votes private; only aggregate tally public. An ADR (architect's, Doc 03) will document the full rationale and the equilibrium (net positive above ~25% of feedback casters). | Critics will note the scoring flatters incumbents by demanding more upvotes than downvotes to show a negative result; the asymmetry is the deliberate risk accepted to protect downvoters. | Aisha Nkemdirim |
| TD-08 | **No behavioural telemetry vs product observability.** Aggregate-only analytics forfeits funnel visibility, individual A/B testing, and per-user UX research. | Accept: behavioural data deanonymises supporters and is a ready-made political-intelligence database for a hostile actor; aggregate-only analytics accepted as strictly worse for product iteration (FR-111, NFR-027). | We give up funnel analytics, individual A/B testing, and per-user UX research. Aggregate dashboards and consenting-panel usability studies (NFR-022) are the only permitted substitutes. | Dr. Lena Kowalczyk |
| TD-09 | **Worker permanence vs recruitment.** Irrevocable-for-term public identity will deter some capable people from the Worker tier. | Accept: the alternative, revocable disclosure, would allow power to be sought without accountability; the deterrent effect is the deliberate price (FR-080/FR-084). | Some good people will not take the Worker tier because of it. We accept that and publish the participation rate rather than claim it away. | Grace Mbeki |
| TD-10 | **Political neutrality vs the non-violence clause.** The platform imposes exactly one substantive political value on every party constitution. | Accept knowingly as a founding principle; code enforces presence-check only (FR-077); enforcement beyond presence is for members and law; disclosed on every party-creation surface (CON-013). | Critics will assert any mandatory clause is a political position; we accept this characterisation and defend it as the narrowest possible exception, disclosed in full. | Daniel Okonkwo |
| TD-11 | **Standing steward body vs the no-standing-body instinct.** | Ruling 4 and FR-099/FR-101 deliberately use per-case sortition and forbid standing panels wherever a body could touch outcomes. The steward organisation IS a standing body — accepted because coordination work (audits, ceremonies, vendor contracts, fund custody) needs continuity and a legal counterparty, and because the body is stripped of outcome power (FR-115/FR-116), mechanically term-limited and recallable (FR-114), and structurally unnecessary (FR-117). | A standing body accretes soft authority even without formal power (RISK-31); the mitigation is that its irrelevance is a tested property, not a promise. | Rafael Duarte |
| TD-12 | **Two rejected identity-posture designs (Decision 4, Rathish, 2026-08-20).** Two designs were considered and explicitly rejected: (1) **Persistent referral graph / referrer-liability / association-based tracing** — rejected because it deanonymises Supporters through the social graph, enables guilt-by-association purges, and contradicts the non-behavioural-surveillance and sacred-user-space guarantees (FR-111, NFR-027). Referral MAY gate open-tier entry, but the referral edge is verified and then discarded, never stored (FR-125 — finalised at v2.4.0; OI-19 RESOLVED). (2) **Encrypted identity registry for later comparison** — rejected because a decryptable identity registry recreates the subpoena, operator-override, and capture risks the platform exists to eliminate; it converts "we cannot deanonymise you" into "we promise not to" (FR-128, subpoena test). Both rejected designs are the architect's to record in a new ADR as considered-and-rejected with rationale; this note provides the Doc 02 reference trail. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 4; Rathish, 2026-08-20.)_ | Decision 2/3 preserve the guarantee while accepting that referral-edge spam control and on-device-only processing impose UX and operational costs. | Dr. Lena Kowalczyk |

> ✅ v2.0.0: the TD-02 vs FR-062 contradiction is resolved by the three-tier privacy ruling per BR-017 — see §4.19 and §4.24.

---

## 10. Risks (RISK)

> The **living risk register of record is Project Plan (Doc 13) §6**. Listed here are the
> requirement-level risks using the shared `RISK-##` IDs. L/I scale: 1 (low) – 5 (high).

| ID | Risk | L | I | Mitigation (requirement refs) | Owner |
|----|------|---|---|-------------------------------|-------|
| RISK-01 | **Sybil inflation of a threshold** — fake or duplicated persons manufacture endorsements to activate a party or carry a vote. | 4 | 5 | `FR-001`, `FR-002`, `FR-004`, `FR-014`, `NFR-004`; published duplicate-rate audit; attestor concentration cap; activation dwell period (`FR-018`). | Marcus Adeyemi |
| RISK-02 | **Coercion and vote-buying** — an employer, spouse, clan leader or broker compels or purchases votes. | 4 | 5 | `FR-031`, `FR-032`, `FR-034`, `FR-035`, `NFR-003`; no interim results; adversarial audit; user education in-flow. | Aisha Nkemdirim |
| RISK-03 | **Flash governance takeover** — voting power acquired instantaneously immediately before or during a vote. | 3 | 5 | `FR-023` maturation, `FR-028` open-time snapshot, `FR-026` timelock, `FR-035` non-transferability; red-team simulation before Gate 2. | Rafael Duarte |
| RISK-04 | **Mob capture of a founding charter** — a coordinated flood of new members rewrites the party's founding clauses. | 4 | 5 | `FR-027` entrenched clauses with membership-age quorum, `FR-023`, `FR-025` escalating tiers, `FR-026` long timelock, `FR-053` fork as the minority's exit. | Rafael Duarte |
| RISK-05 | **Identity-provider single point of failure or compromise** — one attestor fails, is captured, is compelled, or mass-issues credentials. | 3 | 5 | `FR-004` ≥2 independent attestors + 50% cap + published shares; `FR-005` revocation; jurisdiction cannot launch with one attestor (`A-01`). | Marcus Adeyemi |
| RISK-06 | **Deanonymisation via correlation or timing** — traffic patterns, action timing or small scopes re-identify a member. | 4 | 5 | `NFR-001`, `NFR-002` k≥1000 anonymity floor with withholding, `NFR-010` no personal data, `NFR-023` notification metadata rules; adversarial privacy audit at Gate 2. | Dr. Lena Kowalczyk |
| RISK-07 | **State compulsion** — a government orders disclosure of the member list or a voter's ballot. | 3 | 5 | `FR-003`, `NFR-010`, `FR-030` — the data does not exist to disclose; `FR-057` transparency reporting; pre-enrolment disclosure of residual exposure via attestors. **Residual risk accepted and disclosed** (Doc 01 §E3). | Sofia Marchetti |
| RISK-08 | **State-level blocking** — the platform is blocked at the network or app-store level. | 4 | 4 | `NFR-014` ≥2 independent access paths verified under blocking simulation; `CON-010` no single-store dependency. | Chen Wei |
| RISK-09 | **Ordering/settlement infrastructure liveness failure** — the infrastructure that finalises the verifiable record stalls or censors. | 3 | 4 | `NFR-025` alternative inclusion path within 60 min; `NFR-007` availability; `FR-061` degrade-by-delay not denial. | Chen Wei |
| RISK-10 | **Compromise of the privacy-proving system or its setup ceremony** — a flaw or a compromised setup silently breaks anonymity or allows forged eligibility. | 2 | 5 | `CON-012` no bespoke unaudited constructions; `NFR-009` independent cryptography audit with 0 critical/high; `NFR-021` reproducible open-source builds; ceremony transparency requirements set by the architect in Doc 03. | Rafael Duarte |
| RISK-11 | **Key loss at population scale** — hundreds of thousands of citizens lose access and cannot participate. | 4 | 4 | `FR-058` seedless recovery with timelock/notify/cancel, `FR-059` privacy-preserving recovery, `NFR-016` ≥99% success within 14 days; recovery-rate monitoring as a launch SLO. | Amara Diallo |
| RISK-12 | **Oracle manipulation of the population denominator** — the number thresholds are computed against is wrong, stale or manipulated, making activation trivially easy or impossible. | 3 | 5 | `FR-009` ≥2 independent sources + disagreement tolerance + dispute window; `FR-018` denominator and sources recorded immutably at activation; public denominator dashboard (`NFR-019`). | Yuki Sato |
| RISK-13 | **Reputational and misuse risk** — parties formed for unlawful, violent or extremist purposes are hosted on the platform and attributed to us. | 4 | 4 | `FR-056` display filtering scoped strictly to the jurisdiction where content is unlawful, publicly logged, never a deletion; `FR-057` transparency register; explicit public position (Doc 01 §E3); residency-scoped thresholds prevent manufactured distributed support. **Residual risk accepted.** | Daniel Okonkwo |
| RISK-14 | **Regulatory reclassification** — a regulator deems the platform an electoral body, a political-finance vehicle, or a data controller of political-opinion data. | 3 | 5 | `CON-001` absolute boundary stated on every public surface; `CON-005` per-jurisdiction legal review and feature gating; treasury features off by default; `NFR-015` documented posture. | Sofia Marchetti |
| RISK-15 | **Adoption failure** — thresholds are never reached because too few citizens enrol, and the platform looks like a graveyard of dead petitions. | 4 | 4 | Field enrolment programme; threshold calibration reviewed against month-3 enrolment; petition expiry and archiving (`FR-013`) to avoid a visible graveyard; kill criteria 3 and 4 in Doc 01 §E2. | Grace Mbeki |
| RISK-16 | **Trumocracy itself becomes the gatekeeper** — through code authorship, funding conditions, or an operational lever added under pressure. | 3 | 5 | `CON-003` no override, `CON-004` open source, `NFR-017` governed upgrades with timelock, `NFR-018` party exit/export rights, `NFR-021` reproducible builds; Gate-2 audit assertion that zero privileged governance paths exist. | Rafael Duarte |
| RISK-22 | **Stolen-credential takeover (Change 7)** — an attacker who obtains a victim's credential (e.g., a stolen document or cloned eID) initiates the nullifier-collision recovery flow (FR-071) to seize the victim's party membership and voting rights. | 3 | 5 | `FR-072` seven-day delay + active-key veto; `NFR-016` ≥99% legitimate recovery success within 14 days; notification to registered channel at initiation; veto window equal to delay. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | Rafael Duarte |
| RISK-23 | **Veto suppression (Change 7)** — an attacker simultaneously compromises the victim's registered notification channel (e.g., email or phone) to suppress the recovery veto notification, preventing the legitimate holder from cancelling before key rotation completes. | 2 | 5 | `FR-072` active-key veto independent of notification channel where feasible; secondary out-of-band notification required; `NFR-016` fraud rate ≤ 0.01%. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | Rafael Duarte |
| RISK-24 | **Recovery raced against a live ballot (Change 7)** — an attacker initiates recovery during an active ballot window, briefly holding dual control of an active credential, and attempts to cast a replacement ballot under the original key before rotation completes. | 2 | 5 | `FR-072` voting barred for the recovering credential during the seven-day delay; active-key veto; `FR-032` only the last valid ballot counted; ballot-scope nullifiers prevent double-counting. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | Rafael Duarte |
| RISK-25 | **Public-tier disclosure enables targeting and harassment** — workers, candidates, and office-holders whose identities are public may be targeted in the physical world. | 3 | 4 | `FR-084` disclosure schedule limits what is demanded; `FR-063` ballot direction never disclosed; `NFR-024` harassment-rate metric (mechanical, no human discretion); `FR-103` individual conduct votes private. | Daniel Okonkwo |
| RISK-26 | **Analytics prohibition slows UX iteration and masks funnel failures** — with no per-user telemetry, product teams cannot detect individual drop-off points or run A/B tests. | 4 | 2 | `NFR-019` aggregate-only governance dashboards; `NFR-022` usability studies on consenting panels; TD-08 records the deliberate trade-off. | Yuki Sato |
| RISK-27 | **Committee soft power — agenda capture despite no formal power** — a steering committee that sets meeting agendas and controls facilitation can steer outcomes without holding decisional power. | 3 | 3 | `FR-090` public proposal authorship with equal standing for competing proposals; `FR-087` public committee composition and minutes; `FR-089` mechanical expiry with no standing renewal path. | Tomás Ferreira |
| RISK-28 | **Conduct and removal votes weaponised for harassment campaigns** — coordinated members flood conduct votes or removal votes against a targeted individual. | 3 | 4 | `FR-104` affirmative quorum with UT-0220 growth-surge defence; statement right mandatory before window closes; `NFR-024` harassment-rate metric; `FR-044`-style cooldowns as governance constants (OI-17). | Daniel Okonkwo |
| RISK-29 | **Non-violence clause drags the platform toward content judgment** — enforcing one mandatory political value creates pressure to enforce others. | 2 | 4 | Code enforces presence-check only (`FR-077`); enforcement beyond presence belongs to members and law; `FR-056` jurisdiction-scoped display filtering boundary unchanged; TD-10 records the accepted tension. | Sofia Marchetti |
| RISK-30 | **Trust-anchor governance latency** — member-vote revocation is slower than an operator kill-switch; a compromised anchor can mint Sybils during the emergency-variant timelock. | 2 | 5 | `FR-112` expedited emergency variant with published (shortened but non-zero) duration; `FR-004` attestor concentration cap limits Sybil yield per compromised anchor; `NFR-004` quarterly audit; residual accepted — cites SC-13/SC-14 from artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md. | Rafael Duarte |
| RISK-31 | **Steward soft-power accretion** — the community treats steward proposals as canonical, vendors treat steward signatures as authority, and de facto control accretes without any formal power changing. | 3 | 4 | `FR-115` exhaustive powers; `FR-116` competing proposals with equal standing; `FR-117` zero-dependency property tested; `FR-114` recall + term expiry; `FR-120` fork backstop; `NFR-019` operational reports public. | Rafael Duarte |
| RISK-32 | **Steward-body collapse** — funding collapse, mass resignation or vacancy (the Bitcoin Foundation scenario) degrades coordination: audits and ceremonies slow, vendor contracts lapse. | 3 | 2 | `FR-117` guarantees zero citizen-facing impact; fresh election per `FR-114`; operational reports expose runway early. Residual accepted: coordination latency during vacancy — deliberately low impact BY DESIGN. | Chen Wei |

---

## 11. Requirements prioritization & release plan (MoSCoW)

**Counts (v2.15.0).** _(Maintenance rule: update this label on every version bump — it MUST match the document version number.)_ 21 BR · 133 FR minted (131 active + 2 superseded: FR-046, FR-062) · 28 NFR · 15 CON · 27 requirement-level RISK rows in §10 (RISK-01..16 + RISK-22..32; RISK-17..21 live in Doc 13) · 12 TDs.
_(v1.1.0 baseline: 13 BR · 73 FR · 26 NFR · 12 CON · 19 RISK · 7 TDs. v1.0.0 baseline: 12 BR · 61 FR · 26 NFR · 12 CON · 16 RISK · 6 TDs. Added by CR-v1.1.0: 1 BR, 12 FR, 3 RISK, 1 TD. Added by v2.0.0 re-entry: 7 BR, 40 FR, 2 NFR, 2 CON, 9 RISK, 3 TDs; 2 FRs superseded. Added by v2.1.0: 1 BR (BR-021), 7 FR (FR-114..FR-120), 2 RISK (RISK-31..32), 1 TD (TD-11). Added by v2.3.0: 8 FR (FR-121..FR-128, all Must), 1 CON (CON-015), 1 TD (TD-12); OI-19/OI-20 minted. No new BR or NFR. Added by v2.4.0: 1 FR (FR-129, Must — Charter-layer guard); OI-19 and OI-20 CLOSED; FR-125 finalised (no longer draft). New FRs have no DES/US yet — recorded-phasing posture, RTM catches up. Added by v2.5.0: 1 FR (FR-130, Must — provisional-party membership cap, anti-capture control; C-02 ruling, Rathish, 2026-08-22; US-0131 minted in Doc 05 v2.1.0; DES owed — same recorded-phasing posture; TC OPEN — Phase 3). Added by v2.6.0: 1 FR (FR-131, Must — v1 honesty notice; approver directive 2026-08-23; DES-098 minted by architect in Doc 03 v2.3.0 §10.13.6; US/TC/RTM owed at next catch-up; same recorded-phasing posture as FR-121..FR-130; TC OPEN — Phase 3). Added by v2.8.0: 2 FR (FR-132, Must — v1 phone-based SMS auth, DES-095 amended, ADR-025; FR-133, Must — v1 spam-resistance flag-don't-block, DES-099; approver directive 2026-08-23; both in recorded-phasing posture; TC OPEN — Phase 3). v2.11.0 amendment: FR-132 amended to add government-ID document check, verify-and-discard, DES-100 allowlist/denylist normative text, subject_id_hash deduplication (no new mint; Must count unchanged at 114); FR-133 amended to clarify ID-check/spam-layer scope asymmetry.)_

| Priority | FR count | FR IDs |
|----------|----------|--------|
| **Must** | **114** | FR-001, 002, 003, 004, 006, 007, 008, 009, 010, 011, 014, 016, 018, 020, 021, 022, 023, 024, 025, 026, 027, 028, 030, 031, 032, 033, 035, 036, 037, 039, 040, 042, 043, 045, 047, 050, 051, 054, 056, 058, 059, 060, 061, 063, 064, 065, 066, 067, 068, 069, 070, 071, 072, 073, 074, 075, 076, 077, 078, 079, 080, 081, 082, 083, 084, 085, 086, 087, 088, 089, 090, 091, 092, 093, 094, 095, 096, 097, 098, 099, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133 |
| **Should** | 14 | FR-005, 012, 013, 015, 017, 019, 029, 034, 038, 041, 044, 048, 049, 055 |
| **Could** | 3 | FR-052, 053, 057 |
| **Won't (this release)** | — | Vote delegation; state elections; cross-jurisdiction parties; social features; staff moderation of political speech |
| **Could (non-FR features, v2 candidates)** | — | Party dormancy/deactivation lifecycle; treasury splitting on fork; personal blocklists — deferred to v2, contingent on month-6 metrics per Doc 01 §D and FAQ §E3. Classified as Could in Doc 01 §D; not permanently excluded. _(ISS-08: aligned with Doc 01 §D.)_ |

_Convention: superseded rows (FR-046, FR-062) are excluded from the active Must set and from implementation; they are retained for traceability only. FR-125 is a finalised Must requirement (OI-19 RESOLVED at v2.4.0; no longer draft; implementation-ready)._

NFR priorities: **Must** — NFR-001…007, 009…017, 020…025, 027…028 (24). **Should** — NFR-008, 018, 019, 026 (4).

**On the size of the Must set.** The Must set grows from 54 to 94 with the v2.0.0 vision re-entry directed by the approver (Rathish, 2026-08-10). The 40 new Must FRs (FR-074..FR-113) cover party self-governance, participation tiers and privacy, committees, proposal lifecycle, candidate selection, manifesto, financial transparency, COI, audit, disputes, member rights, conduct votes, data classification, transparency dashboard, scorecard, and trust-anchor lifecycle governance. FR-050 is raised from Should to Must (financial transparency is now a business requirement, BR-019). FR-062 is superseded by §4.24 (FR-082..FR-086) and excluded from the active Must count. All v2.0.0 FRs are Must per the approver's direction. Gate 1 re-entry approves direction; Gate 2 still governs launch readiness. _v2.1.0: the Must set grows from 94 to 101 with seven steward-organisation FRs (FR-114..FR-120), all Must per the conditional Gate-1 approval directed by Rathish (2026-08-11); the condition is fulfilled by this version landing before Design. v2.3.0: the Must set grows from 101 to 109 with eight FRs (FR-121..FR-128) covering pilot jurisdiction sequence, tiered participation (verification gates counting, never joining), and on-device proof / nullifier-only identity posture — all Must per Decision 1–3 (Rathish, 2026-08-20). New FRs have no DES/US yet — same recorded-phasing posture as FR-074..FR-111; tester's next RTM catch-up covers FR-121..128. v2.4.0: the Must set grows from 109 to 110 with FR-129 (Charter-layer guard — making single-issuer operation permanent requires Charter-level re-entry, never a deployment default; OI-20 ruling, Rathish, 2026-08-20). FR-125 finalised (OI-19 RESOLVED). FR-129 has no DES/US yet — same recorded-phasing posture. v2.5.0: the Must set grows from 110 to 111 with FR-130 (provisional-party membership cap — a provisional party is capped at 100 members until verified legal registration; the cap lifts automatically by code; anti-capture control; C-02 ruling, Rathish, 2026-08-22). FR-130 has no DES yet — same recorded-phasing posture; US-0131 minted in Doc 05 v2.1.0; TC OPEN — Phase 3. v2.6.0: the Must set grows from 111 to 112 with FR-131 (v1 honesty notice — wherever a vote is cast in a v1 deployment the UI MUST state plainly that voting is NOT anonymous, NOT receipt-free, and NOT coercion-resistant; approver directive 2026-08-23; design DES-098). FR-131 has no US yet — same recorded-phasing posture as FR-121..FR-130; TC OPEN — Phase 3. v2.8.0: the Must set grows from 112 to 114 with FR-132 (v1 phone-based SMS authentication — one account per verified phone number; MUST NOT claim one-person-one-vote; IEligibilityVerifier v1 backing; DES-095 amended, ADR-025; approver directive 2026-08-23) and FR-133 (v1 spam-resistance flag-don't-block layer — VoIP/virtual-number intelligence + velocity/device anti-fraud; flagged numbers rate-limited, never hard-blocked; false-positive path first-class; DES-099). Both FR-132 and FR-133 have no US yet — same recorded-phasing posture as FR-131; TC OPEN — Phase 3._

**Release shape.** One release at 2027-06-01 (following Gate 2 readiness 2027-05-14), delivered
on trunk behind flags, rolled out 1 → 10 → 50 → 100% in the one approved pilot jurisdiction; a
second jurisdiction is planned post-launch once month-6 metrics are confirmed (Lever L2). Should
items land inside the same release window where they fit; Could items are explicitly post-launch.

---

## 12. Traceability

Every FR and NFR in this document traces **up** to at least one BR (see the `Traces to` column) and
will trace **down** to a `DES` (Doc 03), a `US` (Doc 05) and a `TC` (Doc 07). The RTM (Doc 08),
authored by the tester and verified by reviewer-qa, is the system of record for that chain. **A gap
in any Must row blocks Gate 2.** Backlog stories are seeded in `docs/05-product-backlog.md` and each
declares its `FR`/`NFR`; `DES` and `SCR` links are attached after Design and reconciled in the RTM.

**v1.1.0 additions (CR-v1.1.0):** BR-013 → FR-066, FR-067. FR-062, FR-063 → BR-005, BR-009. FR-064, FR-068 → BR-003, BR-012. FR-065 → BR-004, BR-005. FR-069, FR-070, FR-073 → BR-006 (FR-070 also CON-005; FR-073 also BR-012). FR-071, FR-072 → BR-006/007/009/012. All 12 new Must FRs have been seeded with at least one US in Doc 05 v1.1.0.

**CR-v1.1.0 Change 9 ('party operation / no boss roles'):** No new requirement minted. Analysis confirms coverage by FR-020 (join without approval), FR-021 (equal standing, no weight advantage by office), FR-024 (any matured member may propose), FR-056 (no operator override in governance path), BR-003 (equal standing). Detail: artifacts/product-owner-2026-08-09T2200.md. _(ISS-10.)_

Requirements arising from production learnings will carry a `Source = REF-##` value in §3/§4
per the refine loop; none exist at v1.0.0 or v1.1.0 (all v1.1.0 requirements source from CR-v1.1.0).

**v2.0.0 additions (BR-014..BR-020; vision re-entry directed by Rathish, 2026-08-10):**
- BR-013 (extended) → FR-081, FR-093 _(adds to existing FR-066, FR-067)_
- BR-014 → FR-076, FR-077, FR-087, FR-091, FR-092, FR-094
- BR-015 → FR-087, FR-088, FR-089, FR-090, FR-098, FR-099, FR-101, FR-112, FR-113
- BR-016 → FR-079, FR-080, FR-081, FR-102
- BR-017 → FR-080, FR-082, FR-083, FR-084, FR-085, FR-086, FR-106, FR-111
- BR-018 → FR-097, FR-098, FR-100, FR-101, FR-103, FR-104, FR-105
- BR-019 → FR-076, FR-078, FR-092, FR-094, FR-095, FR-096, FR-097, FR-099, FR-107, FR-108, FR-109, FR-110
- BR-020 → FR-074, FR-075
- FR-050 _(raised Must)_ → BR-005, BR-010 _(existing traces; priority change only)_

**Session scope (approver instruction, 2026-08-10):** this session produces Docs 01 and 02 only and stops at Gate 1. US seeding (Doc 05) and TC design (Doc 07) for FR-074..FR-113 follow after the Gate 1 re-entry decision; until then the downstream columns for v2.0.0 FRs are OPEN by design — recorded here, not hidden. The RTM (Doc 08) closes the chains when Docs 05/07 catch up.

**v2.1.0 additions (BR-021; steward organisation; Rathish, 2026-08-11):**
- BR-021 → FR-114, FR-115, FR-116, FR-117, FR-118, FR-119, FR-120
- BR-015 (equal standing, no outcome power) → FR-114, FR-115, FR-116, FR-118 _(existing BR; steward FRs add to its downstream set)_
- BR-008 (no unilateral protocol change) → FR-116, FR-119 _(existing BR; steward FRs add to its downstream set)_
- BR-003 (unconditional exit) → FR-120 _(existing BR; fork backstop adds to its downstream set)_

**Part B requirement-7 check (non-violence, v2.1.0):** Part B item 7 (non-violence) minted no new requirement — confirmed already covered by CON-013 and FR-077 (v2.0.0); recorded here per the Change-9 precedent.

**Session scope (v2.1.0 extension):** US (Doc 05) and TC (Doc 07) seeding for FR-114..FR-120 joins the existing v2.0.0 catch-up owed after this version lands (the RTM closes the chains); downstream columns are OPEN by design — recorded not hidden. The RTM will close the full chain BR-021 → FR-114..FR-120 → DES → US → TC when Docs 03/05/07 catch up post-Gate-1.

**v2.3.0 additions (Decision 1–3, Rathish, 2026-08-20; DECISIONS-2026-08-20-PILOT-VERIFICATION.md):**
- BR-020 (multi-country, pilot jurisdiction) → FR-121 _(pilot sequence; extends existing BR-020 downstream set)_
- BR-003 (open membership), BR-016 (tiers self-assigned) → FR-122 _(open-tier access without verification)_
- BR-006 (unique personhood), BR-010 (wealth not convertible to influence), BR-016 → FR-123 _(personhood required for counted actions)_
- BR-009 (no identity exposure), BR-017 (tier-scoped anonymity), BR-006 → FR-124 _(verified status and privacy composition)_
- BR-003, BR-006 → FR-125 _(open-tier invite-gating; finalised at v2.4.0 — OI-19 RESOLVED; story now Ready per DoR once DES/US assigned)_
- BR-009, BR-006 → FR-126 _(on-device credential processing; strengthens FR-003)_
- BR-006, BR-009 → FR-127 _(nullifier-collision duplicate detection only)_
- BR-009, BR-006 → FR-128 _(no stored identity data; subpoena test)_

**Session scope (v2.3.0/v2.4.0):** DES (Doc 03) and US (Doc 05) seeding for FR-121..FR-129 is owed after the next Design/Backlog catch-up. Downstream columns are OPEN by design — recorded not hidden. The RTM will close the chains when Docs 03/05/07 catch up. FR-125 is now implementation-ready (OI-19 RESOLVED at v2.4.0); its story may be marked Ready in Doc 05 once DES/US are assigned. FR-129 joins the recorded-phasing set awaiting DES/US; the architect MUST determine which amendment tier (FR-118 Tier 1 or FR-119 Tier 2) governs issuer-plurality requirements in the next Doc 03 increment.

- BR-006, BR-012, BR-021 → FR-129 _(Charter-layer guard — single-issuer permanence requires Charter-level re-entry; OI-20 ruling, Rathish, 2026-08-20; DES/US owed at next Design increment)_

**v2.5.0 addition (C-02 ruling, Rathish, 2026-08-22; artifacts/status/DECISIONS-2026-08-22-WIREFRAME-C01-C02.md):**
- BR-002 (party gains full party status only by demonstrated support — a provisional / not-yet-legal party MUST NOT accumulate disproportionate strength before legal legitimacy is established), BR-012 (platform MUST resist governance attacks — mob capture of an existing party's founding charter by a sudden membership flood) → FR-130 _(provisional-party membership cap — 100-member anti-capture invariant until verified legal registration; US-0131 minted in Doc 05 v2.1.0; DES owed at next Doc 03 increment; TC OPEN — Phase 3)_

**v2.5.0 session scope:** FR-130 is in the recorded-phasing posture. US-0131 (Doc 05 v2.1.0) is NOT Ready per DoR until a DES is assigned by the architect in the next Doc 03 increment. TC to be minted in Phase 3. The RTM (Doc 08) will close the chain BR-002/BR-012 → FR-130 → DES → US-0131 → TC when Docs 03 and 07 catch up. Open cascade item: Doc 03 §18/§10.12.6 C-02 entry currently shows "PO must decide — accept (mint FR) or reject" — closure annotation is owed at the next Doc 03 version (architect-owned; no Doc 03 edit made in this session per the approver's directive). The DECISIONS-2026-08-22-WIREFRAME-C01-C02.md record is the bridge until that annotation lands.

**v2.6.0 addition (approver directive 2026-08-23; DECISIONS-2026-08-23-V1-V2-SPLIT.md):**
- BR-005 (publicly verifiable platform; honest reporting of mechanism properties), BR-009 (member identity not exposed; informed disclosure of privacy limits) → FR-131 _(v1 honesty notice — DES-098; non-dismissable ballot-confirmation UI notice in v1 deployments; US/TC owed at next catch-up; TC OPEN — Phase 3)_

**v2.6.0 session scope:** FR-131 is in the recorded-phasing posture. DES-098 was minted by the architect in Doc 03 v2.3.0 §10.13.6 and awaited its backing FR (now FR-131). US and TC are OWED at the next catch-up session. Note: Doc 03 v2.3.0 §12 trace table cites "FR-130" for DES-098 — this is a pre-allocation error (FR-130 was already minted at v2.5.0 for the provisional-party membership cap); the honesty-notice FR is FR-131. Cascade annotation owed to Doc 03 at the next architect increment. The RTM (Doc 08) will close the chain BR-005/BR-009 → FR-131 → DES-098 → US → TC when Docs 05 and 07 catch up. The v1/v2 phasing classification (§16) is the comprehensive record of which FRs and NFRs are IN-v1, PARTIAL, DEFERRED-v2, or SUPERSEDED; that section is the canonical reference for the architect, engineer, and tester when scoping v1 deliverables.

**v2.8.0 addition (approver directive 2026-08-23; DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md):**
- BR-006 (verified personhood, one person one vote — phone auth is the v1 degraded form), BR-012 (anti-capture/Sybil resistance) → FR-132 _(v1 phone-based SMS authentication — one account per verified phone number; MUST NOT claim one-person-one-vote; FR-131 honesty notice carries the caveat; DES-095 v1 backing amended, ADR-025; US/TC owed at next catch-up; TC OPEN — Phase 3)_
- BR-012 (anti-capture/Sybil resistance), BR-003 (frictionless join; non-exclusion) → FR-133 _(v1 spam-resistance layer — VoIP/virtual-number intelligence + velocity/device anti-fraud; flag-don't-block; false-positive path first-class; DES-099; follows FR-061/FR-125/FR-020 precedents; US/TC owed at next catch-up; TC OPEN — Phase 3)_

**v2.8.0 session scope:** FR-132 and FR-133 are in the recorded-phasing posture. DES-095 (v1 backing amended to specify phone auth) and DES-099 (new spam-resistance layer design) were produced by the architect in Doc 03 v2.4.1 (Approved). US/TC/RTM rows owed at the next catch-up. FR-003 reclassified from IN-v1 to PARTIAL: v1 stores the verified phone number as the account credential (identity data, restricted-class, not on public record); v2 eliminates storage via ZK on-device processing (FR-126). FR-003's reclassification does not add a new trace (existing BR-009 trace is unchanged); the v1-form note is updated in §16.3.1. NFR-010 v1-form annotated in §16.3.1 to note that the phone number falls under the restricted-store carve-out ("restricted stores enumerated in §7"). Contradiction surface updated: T-06 (Charter Rule 1 — one human one vote — vs v1 phone auth) and T-07 (FR-003 — no identity at rest — vs phone number storage) added to §16.5. Blockchain Ruling 3 ratifies DES-097 stack recommendation (item (a) from DECISIONS-2026-08-23-V1-V2-SPLIT.md §4 is now CLOSED as DECIDED); recorded in §16 Source note.

**v2.11.0 amendment (approver ruling 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md):**
- FR-132 amended: phone SMS + government-ID document check at signup; verify-and-discard normative (DES-100 allowlist/denylist); `phone_hash` (HMAC-SHA-256/KMS-pepper) and `subject_id_hash` (HMAC-SHA-256/KMS-pepper) stored restricted-class; same-document deduplication via `subject_id_hash`; "real-person verified, not anonymous" posture; MUST NOT claim unique personhood or one-person-one-vote; vendor no-retention contract required. Sources: DES-095 amended, DES-100, ADR-025 §(e).
- FR-133 amended: flag-don't-block scope explicitly limited to spam-resistance layer signals only; government-ID eligibility gate (FR-132 §(b)) is a hard gate, not subject to flag-don't-block.
- FR-003 v1-form deepened: `phone_hash` + `subject_id_hash` stored (hashed improvement over plaintext; both are derived identity data; CON-015 governs legal classification).
- §16 updates: FR-001/FR-002/FR-003/FR-132 rows reshaped; NFR-004/NFR-010 rows annotated; H-15/H-16 updated; H-17/H-18/H-19 minted.
- §16.5 updates: T-01..T-05 CONFIRMED; T-06 IMPROVED/gap-acknowledged; T-07 RESHAPED/CON-015 governs; T-08 ARCHITECT-RESOLVED; government-ID-gate vs BR-003/FR-020 tension AWAITING APPROVER CONFIRMATION.
- CON-015 annotated as CRITICAL PATH — no enrolment sprint begins without legal opinion covering all eight DES-100 retention questions.

**v2.11.0 session scope:** FR-132 and FR-133 amendments are in the recorded-phasing posture — amendments to existing minted FRs, not new mints (Must count stays at 114). DES-100 was minted by the architect in Doc 03 v2.5.1 (Approved) §10.13.9 and provides the normative field-level allowlist/denylist. ADR-025 §(e) records the government-ID check amendment. US/TC/RTM rows owed at the next catch-up — same recorded-phasing posture as FR-131..FR-133. CON-015 is CRITICAL PATH: no enrolment sprint begins without the legal opinion covering all eight DES-100 retention questions (see §9 CON-015 annotation). T-01..T-05 confirmed by the approver (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4); T-06 IMPROVED at v2.11.0 (gap-acknowledged; same-document dedupe closes one vector, multiple-IDs vector stands); T-07 RESHAPED (hashed fields accepted, CON-015 governs classification); T-08 ARCHITECT-RESOLVED (Phase-1 single-vendor is an operational limitation, not a Charter conflict). New tension (government-ID gate vs BR-003/FR-020) AWAITING APPROVER CONFIRMATION at v2.11.0. Doc 03 was v2.5.0 (In Review) at time of v2.11.0 session; corrected to v2.5.1 (Approved) at v2.12.0.

**v2.12.0 amendment (approver ruling 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md):**
- FR-131 amended: clause (d) added (open-tier non-counting disclosure obligation — UI MUST inform unverified participants of non-counting status and path to counting membership at the point of a blocked FR-123 counting action).
- FR-132 amended: counting-gate clarification — account creation, joining, reading, discussing, supporting and organising require phone verification alone (FR-020/FR-122 absolute; MUST NOT refuse membership for absence of ID); government-ID check required only for FR-123 counting actions; subject_id_hash deduplication moved to counting-verification (not account creation).
- FR-133 amended: "Scope of flag-don't-block" sentence corrected — ID check excluded from counting tier (not from platform membership); BR trace note corrected.
- §4.41 annotated: v1 backing annotation + TWO-AXIS NOTE (verification axis vs privacy-disclosure axis are orthogonal; naming collision surfaced to approver for confirmation).
- §16.4 H-19 rewritten (exclusion from counting, not from platform); H-15 updated (T-06 ACCEPTED — deferred with disclosure, Rathish, 2026-08-24).
- §16.5: government-ID gate vs BR-003/FR-020 tension RESOLVED; T-06 ACCEPTED — deferred with disclosure; T-07 reaffirmed RESHAPED/CON-015 (unchanged); trailing note updated.
- Stale Doc 03 v2.5.0 (In Review) pins corrected to v2.5.1 (Approved) throughout.

**v2.12.0 session scope:** No new FRs minted (FR-131 clause (d) carries the open-tier disclosure obligation; no normative gap requiring a new ID). Must count stays at 114. US/TC/RTM rows for FR-131..FR-133 remain OPEN — same recorded-phasing posture as v2.11.0. ADR-025 §(c-viii) update owed to architect (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §5.2 — counting-gate clarification). Doc 03 v2.5.1 (Approved) is the current APPROVED architect baseline; Doc 03 v2.6.0 (In Review) exists and carries the 2026-08-24 counting-gate architecture increment (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md) — it may supersede some references on approval; §16 Source block updated.

**v2.13.0 rework (rework cycle 1; review FAIL artifacts/reviews/02-requirements-srs-v2.12.0-business-cycle1.md; 87%, 0C/1H/3M/1L):**
- §8 Gherkin FR-132: Scenario 6 ("No government ID — enrolment denied") deleted and replaced with two post-ruling scenarios — Scenario 6 (positive path: phone-only registration succeeds with no government-ID document; open-tier access granted immediately) and Scenario 7 (counting-blocked path: open-tier member's FR-123 counting action refused with FR-131 clause (d) notice; account and open-tier access unaffected). (ISS-01 High; ISS-04 Medium integrated.)
- §8 Gherkin FR-131: Scenario 5 added covering FR-131 clause (d) — open-tier participant attempts a FR-123 counting action; clause (d) notice displayed before refusal (all four plain-language elements, non-dismissable); counting action refused; account and open-tier access unaffected. (ISS-03 Medium.)
- §4.24: Cross-reference note added before FR-082 table — Supporter/Worker/Candidate tiers are the privacy-disclosure axis, orthogonal to the verification axis in §4.41; see §4.41 TWO-AXIS NOTE. (ISS-02 Medium.)
- §4.41 TWO-AXIS NOTE: closing line corrected from "Cross-referenced from §4.46 and §4.24" to "Cross-referenced to §4.24 and §4.46." (ISS-02 Medium.)
- §12 v2.12.0 scope note updated: "Doc 03 v2.5.1 (Approved) is the current APPROVED architect baseline; Doc 03 v2.6.0 (In Review) exists and carries the 2026-08-24 counting-gate architecture increment." (ISS-05 Low.)
- §11 Counts label → v2.13.0 (maintenance rule).

**v2.13.0 session scope:** No new FRs minted. Must count stays at 114. §8 Gherkin sweep (grep for `denied`, `enrol`, `refus`, `government ID` across §8, lines 1141–2490) found only the pre-ruling Scenario 6 as a stale hit; all other Gherkin occurrences of those terms relate to FR-001 personhood enrolment (ZK-based, separate from government-ID gating) or correct post-ruling FR-132/FR-133 behaviours. No additional stale Gherkin survivors found beyond the replaced Scenario 6. ISS-04 addressed via integration with ISS-01 replacement (Scenario 6 is the explicit positive-path scenario). US/TC/RTM rows for FR-131..FR-133 remain OPEN — same recorded-phasing posture as v2.12.0.

**v2.14.0 amendments (approver rulings 2026-08-26; DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md):**
- FR-130 annotated (§4.44): cap UNCONDITIONAL confirmed (Ruling 1); 60-day grace never adopted and NOT part of v1; TC note corrected (TC-3511..3516 pass Doc 07 v2.2.2 Approved; RTM row 125 OPEN G-TRACE pending DES-097 and DES assignment in Doc 03 §5.2).
- FR-077 normative home established (§4.22): ratified clause text inserted as the standard — verbatim, non-removable, frozen before first-party-adoption (Ruling 2; closes CLAUSE-TEXT-01); CON-013 cross-reference.
- FR-013 annotated (§4.4): re-petition cooldown decided policy value 30 days (Ruling 3; closes COOLDOWN-01); `REPETITION_COOLDOWN_SECONDS` verified; "substantially identical" = normalized charter fingerprint.
- §13 tracked deferrals added: (a) jurisdiction seed list pending OI-04/registry; (b) Arabic native-speaker string review (technical-writer, pre-launch); (c) image-emblem DES (architect, v2 scope); (d) DES-073 v2-contract collision check gap (architect, v2 gap) — per Ruling 4 (DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md).

**v2.14.0 session scope:** No new FRs minted. No IDs minted. Must count stays at 114. All edits are annotations and normative-home additions; no normative text deleted or renumbered. §16.3 rows for FR-010/011/012/013/130 verified accurate — no changes required. §8 Gherkin not touched (no Gherkin change required by any ruling).

**v2.14.1 rework (rework cycle 1; review FAIL artifacts/reviews/02-requirements-srs-v2.14.0-business-cycle1.md; 94%, 0C/0H/1M/0L):**
- §4.45 FR-131 preamble (rationale block, italic annotation): "same recorded-phasing posture as FR-121..FR-130. TC OPEN — Phase 3." replaced with parenthetical variant — FR-130 exception added (TC-3511..TC-3516 now pass per Doc 07 v2.2.2 Approved; FR-130 RTM Must row remains OPEN for G-TRACE — no DES assigned in Doc 03 §5.2); "TC OPEN — Phase 3 applies to FR-121..FR-129" stated explicitly. (ISS-01 Medium, site 1.)
- §4.45 FR-131 requirement text (table row inline citation): identical fix — "same recorded-phasing posture as FR-121..FR-130. TC OPEN — Phase 3." → parenthetical variant. (ISS-01 Medium, site 2.)

**v2.14.1 session scope:** No new FRs minted. No IDs minted. Must count stays at 114. ISS-01 sweep (grep `FR-121..FR-130` across doc, 4 total occurrences): sites at preamble and requirement text fixed above; 2 additional occurrences are in §11 (Counts para. "Added by v2.6.0" and Must-set para. "v2.6.0: the Must set grows...") — both are contextually labelled historical changelog entries describing the v2.6.0 state (FR-130's TCs did not exist at v2.6.0 and the phrase was accurate then); retroactive amendment of historical records not appropriate. Line 153 (Change: block v2.6.0 entry) contains "same posture as FR-121..FR-130)" without adjacent "TC OPEN" phrase and was not enumerated as a defect site.

**v2.15.0 amendment (approver ruling 2026-08-29; FR-064-SEMANTICS, option (a); Rathish, Human Approver):**
- §4.6 FR-064 amended to the v1 EXPLICIT-LEAVE posture: a join request while any active membership exists is refused naming the current party; membership ends only by the member's explicit, recorded leave (FR-022); the tenure-clock reset on switching is unchanged. Automatic voidance and the bypass-proof nullifier enforcement are DEFERRED to DES-065 at the v2 seam swap (cryptographic one-active-membership; the v1 behaviour is the subset v2 formalises). Superseded auto-void wording annotated in place, retained for the record.
- §8 FR-064 Gherkin replaced with explicit-leave scenarios: refusal naming the current party; leave-then-join success with tenure reset; dual-membership impossibility; the tenure gate unchanged.
- §16.3 FR-064 row: v1 mechanism cell updated (explicit recorded leave, then join); v2 cell names DES-065.
- §13 tracked routing (e) added: FR-130's RTM Must row (Doc 08 gap-log entry 125) is blocked by a missing DES in Doc 03 §5.2 — an architect-owed on-chain design for the provisional cap; no test can close it (the cap logic already passes TC-3511..TC-3516); routed to the architect, next Doc 03 increment.

**v2.15.0 session scope:** No new FRs minted. No IDs minted. Must count stays at 114. Alignment note: the implemented drop (Doc 06 v2.3.2 Approved; UT-0821/UT-0822/UT-0859; TC-3523..TC-3525) already enforces the explicit-leave form — this amendment brings FR-064's text to the built-and-ruled semantics; no code change follows from it. The RTM's FR-064 Must row REMAINS OPEN pending DES-065 (v2): the ruling resolves the semantics half of Doc 08 gap-log entry 55 only; the tester's next Doc 08 version records that and retains the DES-065 half.

**v2.17.0 session scope:** No new FRs minted (FR-131 clause (e) carries the honesty-of-claim duty across every v1 participation act; no normative gap requiring a new ID). No IDs minted, reused or renumbered. Must count stays at 114. FR-131 amended with clause (e) and a widened closing sentence; §13 tracked routing (j) added (enrolment / verification landing copy — not ruled). The superseded closing sentence is quoted in place per annotate-don't-delete. US/TC/RTM rows for FR-131 remain OPEN — same recorded-phasing posture as v2.12.0/v2.13.0; the clause (e) TC (a UT-0869-pattern guard on the landing copy) is routed to the engineer, and Doc 07/08 re-cut FR-131's chain in the same session.

**v2.17.1 session scope:** No new FRs minted. No IDs minted, reused or renumbered. Must count stays at 114. No normative meaning changed — this is the cycle-2 rework of v2.17.0 against artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md (FAIL 86%, 0C/0H/3M/7L), completing the cascade the amendment obliged: §8 FR-131 Scenarios 8 and 9 added for clause (e) and the block header de-scoped from the ballot (ISS-01); §4.45's heading and rationale widened to the participation-act posture with the ballot rationale retained (ISS-02); clause (e)'s operative prohibition recast under RFC 2119 with a positive subject and MUST NOT (ISS-03); the approver confirmation of 2026-09-06 recorded at all live sites (ISS-04); the clause (e) safe-harbour subordinated to its reader test (ISS-05); "governed by" softened to "addressed by" for enrolment claims (ISS-06); this entry and the v2.17.0 entry added (ISS-07); §16.3's FR-131 and FR-132 rows corrected (ISS-08, ISS-10); §13 (j)'s bare "§2.5" qualified to Doc 06 §2.5 (ISS-09). The three Lows carried from v2.16.3 (FR-064's missing cross-reference; the v2.16.0 changelog echo; the §13 (h) wording nit) are carried again — v2.17.1 touches none of those sites.

**v2.17.2 session scope:** No new FRs minted. No IDs minted, reused or renumbered. Must count stays at 114. No normative text touched — the header and the §13 tracked-routing block only, verified byte-for-byte by the cycle-1 reviewer. Records **approver decision 1** of 2026-09-08 (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §1: the `/verify` page states an unbuilt enrolment guarantee as current fact; a public surface MUST NOT do so; the (a)/(b) remedy choice delegated to the product-owner) and the **product-owner's choice** under that delegation (ibid. §5: remedy **(a)** — flag-gate `/verify` behind `enrolment_ui`, dev on / staging and prod off, with an honesty placeholder whose normative English text is fixed at §5.3 and Arabic draft at §5.4, the latter subject to §13 tracked deferral (b)). Widens **§13 tracked routing (j)** from the two landing strings to a three-item register that also carries the `/verify` page copy; items (1) and (2) remain **un-ruled** and are expressly not resolved by the (3) ruling. **No BR/FR is minted for (3):** the duty already exists at FR-132 §(d) (honesty posture) and §(e) (vendor non-retention), and the phasing truths are already recorded at §16.4 H-15/H-16/H-17/H-18 — the gap was routing, not requirements. The application of remedy (a) is routed to the engineer; the guard's TC row is owed to the tester at the next Doc 07/08 touch.

**v2.17.3 session scope:** No new FRs minted. No IDs minted, reused or renumbered. Must count stays at 114. No normative meaning changed — this is the **cycle-2 rework** of v2.17.2 against artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md (FAIL 92%, 0C/0H/1M/9L). **ISS-01 (Medium):** §13 (j)(3) is separated into the **RULING** (approver decision 1 + the product-owner's remedy (a); closed 2026-09-08) and the **APPLICATION** (routed to the engineer; status reported in Doc 06 §7 and the UT registry — Doc 06 v2.8.0, Status **In Review**, tester's technical review pending — and not certified here); the present-indicative build claims are recast as the decided remedy; the correction is mirrored in the header Status block, the v2.17.3 Change entry, the v2.17.2 Change entry and the (j) row. The convention adopted: a document records the decision it owns and routes the application; only the applying role's document reports that the application happened. **ISS-02 (Low):** the H-set citations are distinguished — clause (e)'s carve-out set is §16.4 H-16/H-17/H-18, with H-15 cited additionally for the one-person-one-vote point — at all three occurrences including the spaced variant in the v2.17.2 change entry, and H-16 is added to the (j)(3) evidence list. **ISS-03 (Low):** this entry and the v2.17.2 entry added. The seven Lows carried from the cycle-1 report (ISS-04..ISS-10) are carried again and remain open — v2.17.3 touches none of §8, §4.6 or the dated changelog narration beyond the two marked corrections.

---

## 13. Open issues / TBD

| ID | Open issue | Needed by | Owner |
|----|-----------|-----------|-------|
| **OI-01** | **What activation threshold percentage is right?** The whole product hinges on this number and we do not have it. Too high and no party ever activates (kill criterion 4); too low and the network fills with noise. It must also survive `RISK-12` denominator error. Proposal: a jurisdiction-specific range calibrated against month-3 enrolment, fixed publicly before any petition opens. **Requires a Gate-1 decision on the calibration method, not the number.** | Gate 1 | Tomás Ferreira |
| **OI-02** | **Is the Must set of 42 FRs accepted, or must a walking-skeleton capability be deferred?** See §11. Recall (FR-042/043/045) is the only coherent deferral candidate. Guardrails are not offered for deferral. _(Decided at Gate 1: Must set accepted in full; recall kept.)_ | Gate 1 ✓ | Priya Raghunathan |
| **OI-03** | **What exclusion rate from personhood enrolment is acceptable, and what is the non-document-based attestation path?** `TD-05` — the people most likely to fail a document check are the people the product exists to serve. Needs a target and a named alternative path per pilot jurisdiction. _(Decided at Gate 1: Phase 1 = government eID sole anchor, exclusion accepted and documented. Phase 3 = non-document path needs own ADR, threat model, and audit.)_ | Gate 1 ✓ | Marcus Adeyemi |
| **OI-04** | ~~**Which pilot jurisdictions?**~~ **✅ OI-04-PILOT RESOLVED (Rathish, 2026-08-20; DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 1).** Phase-1 pilot: **India** — Aadhaar offline paperless KYC; FR-070 adapter class (c); first and only enrolment adapter at Gate 2. Phase-2: EU — eIDAS 2.0 wallets; first targets France and the Nordic countries. Phase-3: USA — deferred; fragmented state-by-state mDL patchwork; low activation; optional phone-home privacy default conflicts with the non-correlation guarantee (FR-002, FR-069); requires own ADR, threat model and audit. Pilot sequence recorded in §4.40 (FR-121). Hard dependency: **CON-015** — legal-opinion Gate-2 line item; Phase-1 adapter not implementation-ready until legal opinion obtained and recorded. §2.4 updated to name the pilot. _(Decision applied at v2.3.0.)_ | ✓ Resolved 2026-08-20 | Sofia Marchetti |
| **OI-05** | **Does `NFR-002` (k ≥ 1,000 anonymity floor) make small-region governance impossible?** _(Resolved at Gate 1: confirmed as designed per ADR-004 §2.)_ | Gate 1 ✓ | Dr. Lena Kowalczyk |
| OI-06 | Funding sustainability beyond month 18, given `NFR-005` (citizen pays nothing) and `CON-006` (no fundraising instrument). | Gate 2 | Priya Raghunathan |
| OI-07 | Whether ISO 27001 / SOC 2 certification is required by any pilot jurisdiction or major partner, or whether the independent audit suffices. | Design | Rafael Duarte |
| OI-08 | Maturation period, dwell period, timelock durations, recall bars, grace windows and cooldown values — all currently "published" but unset. Each is a governance-sensitive constant. | Design | Tomás Ferreira |
| OI-09 | Definition of the "published minimum-substance standard" for a policy pillar (`FR-011`) that is machine-checkable without becoming editorial judgement — dangerously close to the gatekeeping we forbid. | Design | Tomás Ferreira |
| OI-10 | The published collusion bound referenced in `NFR-001` and the advantage bound ε — how many colluding parties must privacy survive, and what is the maximum acceptable advantage over random guessing? These values are required to make the §8 NFR-001/FR-002/FR-030 Gherkin normative. The provisional test value ε = 0.02 is used in §8 Gherkin blocks until OI-10 closes. **Escalated for Gate 1 re-affirmation confirmation: the approver should record agreement that the provisional value ε = 0.02 is acceptable for the test-design phase, with the final bound to close no later than Doc 03 baseline.** | Gate 1 re-affirmation (escalated) / Design | Dr. Lena Kowalczyk |
| OI-11 | Whether office-holders' *ordinary member* votes must be separable in practice from their office-capacity votes (`FR-048`) without leaking either. | Design | Erik Lindqvist |
| **OI-12** | **FR-073 vs ADR-003 issuer-plurality model.** ~~FR-073 mandates the government eID credential rail as the sole enrolment-nullifier-issuing class per region (aligning with OI-03 Phase-1 decision). ADR-003 describes an issuer-plurality model. The architect MUST confirm in Doc 03 whether these are reconcilable or whether ADR-003 requires amendment.~~ **Resolved by ADR-016 (amends ADR-003 for Phase 1; see Doc 03 §16 and docs/adr/ADR-016-enrolment-issuer-hierarchy.md). OI-12 is closed.** _(ISS-13.)_ | Design ✓ | Marcus Adeyemi |
| **OI-13** | ~~**FR-062 (public participation profile) vs NFR-001, NFR-024, TD-02 (anonymity-always for ordinary members).** FR-062 makes party membership and participation records publicly visible on a user profile. NFR-001 and NFR-024 prohibit exactly this. TD-02 records the asymmetry as "members anonymous always." The conflict is flagged inline in §4.19 and §6. Resolution required at Gate 1 re-affirmation by the human approver (Rathish).~~ **RESOLVED at v2.0.0 by the approver's three-tier privacy ruling (BR-017, 2026-08-10): supporters anonymous unconditionally; workers/candidates public by informed consent at role-taking. FR-062 superseded by §4.24 requirements; NFR-001/002/024 tier-scoped; TD-02 extended. Decision recorded in the Gate 1 re-entry packet.** | Gate 1 re-entry ✓ | Priya Raghunathan |
| **OI-14** | ~~**Proposal authorship (FR-090, ruling 1) vs Supporter anonymity (BR-017/FR-082):** ruling 1 makes proposal authorship public as the agenda-setting counterweight; ruling 3 makes Supporters anonymous with nothing attributable. A Supporter who authors a proposal cannot satisfy both. Candidate resolutions — (a) proposing requires Worker tier or above; (b) supporter authorship is attributed to a stable per-party pseudonym; (c) supporter proposals are unattributed — each sacrifices something different. DECISION for the approver at Gate 1; story not Ready until decided. See ⚠ banner at §4.25.~~ **DECIDED at Gate 1 (Rathish, 2026-08-11): Worker tier and above may author; authorship stays public; Supporters retain full voting rights and may self-declare Worker at any time to author. Recorded in GATE1-DECISION-2026-08-11.md §3; applied at v2.1.0 to FR-024, FR-090.** | Gate 1 ✓ | Priya Raghunathan |
| **OI-15** | ~~**Expulsion of an anonymous Supporter is impossible without deanonymisation (FR-105 banner):** expulsion requires an addressable subject; a Supporter is anonymous by construction. Candidate resolutions — (a) scope expulsion to public-tier participants only, with FR-005 fraud-revocation as the sole mechanism for Supporters; (b) build a pseudonymous expulsion mechanism (expels a nullifier, no identity revealed). Each has different consequences for accountability and for privacy. DECISION for the approver at Gate 1; story not Ready until decided. See ⚠ banner at §4.34.~~ **DECIDED at Gate 1 (Rathish, 2026-08-11): expulsion scoped to public-tier participants only; FR-005 credential revocation handles supporter-tier fraudulent enrolment. Recorded in GATE1-DECISION-2026-08-11.md §3; applied at v2.1.0 to FR-105.** | Gate 1 ✓ | Priya Raghunathan |
| **OI-16** | ~~**Append-only rule (FR-107) vs withdrawal-destroys-data (FR-085):** the vision states both 'nothing is ever deleted; history is append-only' and 'withdrawal before nomination closes destroys submitted disclosure data.' The proposed resolution — pre-nomination disclosure data is confidential-class, held off the governance record, and destroyable precisely because it never entered the append-only record — is NOT adopted silently. Candidate resolutions — (a) adopt the confidential-class carve-out; (b) weaken destruction to deactivation (data retained confidential, never published). DECISION for the approver at Gate 1. See ⚠ banner at §4.24.~~ **DECIDED at Gate 1 (Rathish, 2026-08-11): confidential-class carve-out adopted — pre-nomination disclosure data is confidential-class and never enters the governance record; destroyed on withdrawal; public records of completed actions remain append-only without exception. Recorded in GATE1-DECISION-2026-08-11.md §3; applied at v2.1.0 to FR-085, FR-107.** | Gate 1 ✓ | Priya Raghunathan |
| **OI-17** | **Governance constants minted by v2.0.0:** trust-anchor revocation and rotation governance tiers and maximum blocking windows (FR-112/FR-113); conduct-vote, removal, and expulsion affirmative quorum bars, supermajority thresholds, and cooldowns (FR-103..FR-105); founding-member count (FR-076); disclosure schedule per role (FR-084); dispute stage maximum timelines (FR-100) — all to be set in Design, analogous to OI-08. _(v2.1.0: + steward term length, election cadence and recall bar (FR-114); protocol-tier quorum, supermajority and timelock (FR-119).)_ | Design | Tomás Ferreira |
| **OI-18** | ~~**Entrenched-charter scope vs previously-absolute guarantees (FR-118/FR-119).** The approver's entrenched list has six rules; CON-001 (party-only boundary), BR-011/NFR-003 (receipt-freeness, coercion resistance), CON-002/CON-008/NFR-010 (data minimisation, no personal data on the record), CON-012 (no unaudited crypto) and CON-013 (non-violence) are not on it, and FR-119 makes everything off-list votable. Options: (a) extend the entrenched charter to include these named absolutes; (b) accept that they become amendable at the highest tier (a recorded weakening of guarantees this document currently states as absolute); (c) a two-tier core: the six charter rules unamendable, the named absolutes amendable only by a stricter super-process defined in Design. DECISION for the approver before the architect fixes the amendment boundary in Doc 03. See ⚠ banner at §4.39.~~ **DECIDED (Rathish, 2026-08-11): option (c) two-tier core, CON-001 promoted to Tier 1. Recorded in OI-18-DECISION-2026-08-11.md; applied at v2.2.0 to FR-118, FR-119, CON-001. Doc 03 v2 specifies the super-process numbers with rationale (OI-17 family).** | Gate 1 follow-up ✓ | Priya Raghunathan |

| **OI-19** | ~~**Invite-gating vs FR-020 admission ban — PENDING APPROVER DECISION (Rathish).**~~ **✅ OI-19 RESOLVED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md).** Ruling: invite-gating is a spam-control RATE-LIMITER, never an admission condition; the two compose only if a non-invite path always remains open. FR-020 stays absolute: no person may be refused membership for lack of an invite. FR-125 finalised: invite-based onboarding is the fast default path; a non-invite fallback is ALWAYS available — slower and higher-friction is fine, closed is not; test obligation recorded — "a determined real person can always join without an invite." FR-020 unamended. See ✅ banner at §4.41. _(Decision applied at v2.4.0.)_ | ✓ Resolved 2026-08-20 | Grace Mbeki |
| **OI-20** | ~~**Single-rail pilot vs FR-004 attestor-plurality requirement — PENDING APPROVER DECISION (Rathish).**~~ **✅ OI-20 RESOLVED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md).** Ruling: the design stays plural; the pilot deploys one rail (Aadhaar); the gap is a dated Phase-1 limitation, never a Charter amendment. FR-004's plural-pluggable-issuer requirement is satisfied at the ARCHITECTURE level (Aadhaar is one implementation of the pluggable adapter interface, not a hardcoded dependency). Phase-1 deployment limitation recorded honestly: in Phase 1 a person without Aadhaar cannot enrol in the pilot region (TD-05/ADR-016); FR-004's 50% attestor-share cap is inoperative during the single-rail Phase-1 deployment. Exit condition: Phase 2 adds eIDAS 2.0 (FR-121). FR-129 minted (§4.43) — Charter-layer guard: making single-issuer operation permanent requires Charter-level re-entry, never a deployment default. FR-004 unamended. See ✅ banner on FR-004 in §4.1. _(Decision applied at v2.4.0.)_ | ✓ Resolved 2026-08-20 | Marcus Adeyemi |

**SC-13/SC-14 carry-forward status:** SC-13 (HIGH) and SC-14 (MEDIUM) from the SC-01 re-scan (artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md §4): resolved IN PRINCIPLE at requirements level by FR-112/FR-113 under ruling 4 (trust-anchor lifecycle governance is a member-vote action executed by code). The Doc 03 design change implementing FR-112/FR-113 is owed after Gate 1 and remains open against the architect until then.

**Fork-initiation carry-forward status:** Fork initiation calldata vulnerability is still open; `fork` flag is OFF above dev (Gate 1 decision §6). Unchanged by v2.0.0; FR-053 and the member-rights fork entry in FR-102 inherit this status.

**Tracked deferrals (2026-08-26; DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md, Ruling 4):**

| Deferral | Description | Owner | Status |
|----------|-------------|-------|--------|
| (a) Jurisdiction seed list (OI-04 sub-item) | 5-region jurisdiction seed list pending OI-04 / registry-service backing. OI-04-PILOT (India/Aadhaar) is resolved (§13 OI-04 above); the broader seed-list design for the 5-region set remains open pending the registry-service design decision. | product-owner / architect | OPEN — pending registry-service backing |
| (b) Arabic native-speaker string review | UI strings require a native Arabic speaker review before launch; Doc 14 / technical-writer territory — pre-Gate 2 condition. | technical-writer | OPEN — pre-launch |
| (c) Image-emblem DES (v1 is text-only) | v1 emblem is text-only (1–8 characters; `EMBLEM = { MIN_CHARS: 1, MAX_CHARS: 8 }` constant in `packages/protocol/src/constants.js` lines 144-147); an image-emblem DES is owed for v2 scope. Routed to architect — next Doc 03 increment. | architect | OPEN — v2 scope |
| (d) DES-073 collision check — v2 on-chain contract gap | DES-073 collision check is implemented app-side in v1; absent from the v2 on-chain contract path (`PartyRegistry.openPetition`). Tracked v2 gap; routed to architect — next Doc 03 increment. | architect | OPEN — v2 gap |

**Tracked routing (2026-08-29; recorded with the FR-064-SEMANTICS ruling, Rathish):**

| Item | Description | Owner | Status |
|------|-------------|-------|--------|
| (e) FR-130 provisional-cap DES | FR-130's RTM Must row (Doc 08 gap-log entry 125) is blocked by a **missing DES in Doc 03 §5.2** — an architect-owed on-chain design for the provisional membership cap. **No test can close it:** the cap logic already passes (TC-3511..TC-3516; UT-0802..UT-0811, UT-0852..UT-0856; Doc 06 v2.3.2 Approved) — the broken link is the traceability CHAIN (no DES), not the evidence. Routed to the architect — next Doc 03 increment, together with the DES-097 production-store wiring. **CLOSED 2026-08-29** by **DES-102** (Doc 03 v2.8.0 §10.13.11); the FR-130 row CLOSED at Doc 08 v2.4.0. | architect | ✓ Closed 2026-08-29 |

**Tracked routing (2026-08-30; recorded with the PROPOSING / STAGE-TAXONOMY rulings, Rathish; artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md):**

| Item | Description | Owner | Status |
|------|-------------|-------|--------|
| (f) FR-091 "per published timelines" — automation half unwired | FR-091's **order** guarantees are complete and fully tested (no skip, no reversal, no veto; the capability absence holds at all three layers). The clause "stage transitions executed by code **per published timelines**" is **not built**: `schedule()` exists in `packages/protocol/src/governance.js` but the proposal service never calls it, and the demo advances by a button. **No ruling sought — recorded as honestly OPEN (G-NOMECH).** A row does not close on a fragment: the anti-capture half is done, the automation half is not. Neither 2026-08-30 ruling changes the published stage set, so nothing about this row's test obligation changes. | engineer (wiring) / architect (schedule seam) | OPEN — blocks the FR-091 Must row |
| (g) FR-092 permanent decision trail — two missing halves | **No ruling sought — recorded as honestly OPEN (G-NOMECH)**, failing on two independent counts. **(1)** The trail records none of the *vote result*, *enacted consequence*, *implementation status* or *measured outcome* this requirement enumerates — correctly, because the layer built holds no vote; the **ballot layer** is owed. **(2)** "Reconstructable end-to-end by any third party from **public data alone**" additionally requires the **DES-097 audit-record anchoring** (Doc 13 stage S-8), which is not built — the trail today is complete but held in the application store, which makes it authoritative to us and not independently checkable by anyone else. The surface states this in plain words rather than implying more. | engineer (ballot layer) / architect + engineer (DES-097 anchoring) | OPEN — blocks the FR-092 Must row |
| (h) FR-091 text — terminal outcomes are unaddressed | **Surfaced 2026-08-30 while mapping FR-091 to `PROPOSAL_STATE` (Doc 03 §10.13.13); a requirement clarification owed to the product-owner, not an architect's call.** FR-091 says every proposal MUST move through all eight stages in sequence and **no stage MAY be skipped**. A **defeated** or **cancelled** decision cannot be implemented or measured: under the recorded mapping such a window **terminates at `decision`** and does not advance. Terminating is not skipping — but FR-091's text does not say so, so a future implementer could read it as obliging an implementation stage for a proposal the members rejected. **Not a defect in what is built:** the **proposals and debate layer** holds no vote — it stops at `admitToBallot()` and hands off to `IBallotService` — so no window can yet reach a defeated state. _(v2.16.3: this read "v1 holds no vote (ADR-024 §(b))". That **mis-cites**: ADR-024 §(b) removes on-chain **execution** in v1 and puts votes in Postgres; **DES-096 specifies a v1 ballot backing outright**, so v1 does hold a vote. Corrected in Doc 03 at v2.11.0 and carried here verbatim until the v2.11.1 review flagged this copy.)_ Needed before the ballot layer is built. | product-owner | OPEN — clarification owed; does not block v1 |
| (i) FR-090 — nothing says how a window with several competing proposals RESOLVES | **Surfaced 2026-08-30 at the Doc 03 v2.10.0 review** (Doc 03 §16 **Q16**), while checking the FR-091/`Governor.State` cardinality argument. FR-090 requires competing proposals to be presented with equal standing and voted **in the same decision window**; the ballot model gives each proposal an **independent binary ballot**; and DES-104 deliberately exposes **no** window-closing, merging, ranking or primary-selection capability — that absence is a first-class anti-capture control (the author never owns the ballot alone) and **MUST NOT be quietly removed to answer this**. Consequence: **two competing proposals answering one question can both pass, and no rule says what the party then gets.** This is a gap between FR-090's text and the ballot model, not an implementation detail. **Not a v1 defect** — the proposals layer holds no vote — but it MUST be answered before the ballot layer is built, and it is a **requirement decision first**: what does the party get when both options win? | product-owner (decision) + architect (mechanism) | OPEN — needed before the ballot layer |

**Tracked routing (2026-09-06; recorded with the ENDORSEMENT-COPY ruling, product-owner, CONFIRMED by the approver (Rathish Kumar) 2026-09-06; artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11; item (j) WIDENED 2026-09-08 — see the note below the table):**

| Item | Description | Owner | Status |
|------|-------------|-------|--------|
| (j) Enrolment / verification copy — **three items; (3) RULED 2026-09-08 and its application ROUTED, (1) and (2) still un-ruled** | The 2026-09-06 endorsement-copy ruling amended FR-131 with clause (e), which is scoped to **participation acts** (vote, endorse/back, join/belong, support) and expressly **not** to enrolment or identity-verification claims. Two landing strings make enrolment claims and are left **un-ruled on the evidence available**, rather than swept in silently. **(1)** `apps/web/src/i18n/en.ts` `home.steps[0].body` — "We never see your documents, your name or your address, and we do not keep them" — against **§16.4 H-17**: the third-party ID-check vendor **does** see the government-ID document, and FR-132 §(e)'s non-retention clause is a **legal and contractual** control, not a technical guarantee. Whether "we" honestly excludes a vendor the citizen never chose is a genuine question; the answer may be a wording change, a Doc 14 cross-reference, or nothing. **(2)** `home.promises[3]` — "We do not count your visits, and we do not keep a record of what you read here" — believed true (the **Doc 06 §2.5** absence-test pattern; UT-0870) but **not verified against a deployed build**; it asserts a fact about production, so the **sre** is consulted before it is ruled. Neither is a v1 blocker and neither is part of the endorsement ruling. **(3) Added 2026-09-08 — the `/verify` page copy:** `apps/web/src/app/verify/page.tsx` and the `verify.*` block of `en.ts` / `ar.ts` state the verify-and-discard enrolment design as **current fact** — "The document never leaves your phone", "a short proof … and nothing else", "a short code … which cannot be traced back to you", plus an issuer chooser offering a plural, at-least-one-non-government choice. The design is true by design (FR-132 §(b), DES-100, ADR-003) and **not yet true in code**: enrolment is unbuilt (`StubIdDocumentChecker.IS_INSECURE_MOCK()` = true, Doc 06 §7), the v1 check is a third-party vendor document check the vendor **does** see (H-17), non-retention is contractual not technical (FR-132 §(e)), same-document deduplication is not one-person-one-vote (H-15), `subject_id_hash` is a retained derived identifier (H-18) and the operator database holds it and `phone_hash` as derived identity data — so "cannot be traced back to you" is not true of Trumocracy's own records (H-16), issuer plurality is **not in effect** in the single-rail Phase-1 pilot (OI-20, Doc 14 §1.2), and no enrolment sprint may begin until **CON-015** clears. **(3) — THE RULING (closed 2026-09-08):** approver decision 1 of 2026-09-08 (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §1) held that a public surface MUST NOT state an unbuilt guarantee as current fact and delegated the remedy choice to the product-owner; the product-owner chose **remedy (a)** (ibid. §5). **The decided remedy is:** the route is flag-gated out of the public v1 build behind an `enrolment_ui` feature flag (dev on; staging and prod off; `removeBy` = the enrolment sprint); the header nav link is not rendered when the flag is off; and the route serves a short honesty placeholder whose **normative** English text is fixed at that record §5.3 (Arabic draft §5.4, subject to tracked deferral (b) native-speaker review). No string is deleted — the design copy is retained for the enrolment sprint and renders in `dev` only. **(3) — THE APPLICATION (routed, not certified here):** building the remedy is routed to the **engineer**, together with the 15-assertion guard specified at that record §5.5–§5.6; **its status is reported in Doc 06 §7 and the UT registry — Doc 06 v2.8.0, Status: In Review (the tester's technical review is pending) — and is not certified by this document.** Doc 02 records the decision it owns and routes the application; only the applying role's document reports that the application happened. The guard's TC row is owed to the tester at the next Doc 07 / Doc 08 touch. | product-owner (decision); sre (consulted on (2)); engineer (applies (3)) | **PARTIAL** — (1) OPEN, not ruled; (2) OPEN, not ruled, sre consulted; (3) **RULED 2026-09-08** (approver decision 1 + product-owner remedy (a)) — **application routed to the engineer; its status is recorded in Doc 06 §7 and the UT registry, not here**. None of the three is a v1 blocker. |

> **Widening note (2026-09-08).** Item (j) was recorded on 2026-09-06 as "the two landing
> strings". It is widened here to a **three-item** register because the defect class is the same
> one — a v1 surface asserting an enrolment property that FR-131 clause (e) expressly does not
> reach. **Clause (e) enumerates that carve-out set as FR-132 §(d) and §16.4 H-16/H-17/H-18**;
> **H-15** is cited **additionally** in this item, for the one-person-one-vote point, which
> clause (e)'s list does not carry. Those provisions, together with FR-132 §(d)/(e), record the
> claims in question as untrue in code. The register also widens because
> the 2026-09-06/07 qualification of the README/CONTRIBUTING `/verify` citation ("the page's own
> copy is in no register") was **confirmed** by the approver on 2026-09-08
> (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §2) with the direction that §13 (j) be
> updated by the product-owner to record the page ruling. This is that register entry.
> **No requirement is minted for (3):** the duty it discharges already exists (FR-132 §(d)
> honesty posture, §(e) vendor non-retention) and the phasing truths are already recorded
> (§16.4 H-15/H-16/H-17/H-18 — the carve-out set plus the one-person-one-vote provision) — the
> gap was routing, not requirements. Items (1) and (2) remain open
> on the evidence available and are **not** resolved by the (3) ruling; a future ruling on either
> must be recorded here, not inferred from this one.
> **Recorded at v2.17.3 (cycle-1 ISS-01):** this item records a **ruling** and **routes** its
> application. The application's status belongs to the applying role's document (Doc 06 §7 and
> the UT registry), never to this register.

---

## 14. Glossary

| Term | Meaning in this document |
|------|--------------------------|
| **Activation** | The automatic transition of a petition to an active party when the threshold is met and sustained (`FR-018`). |
| **Anonymity set** | The number of eligible actors among whom a published action is indistinguishable (`NFR-002`). |
| **Charter** | A party's founding document, containing the eight pillars and its amendment rules. |
| **Debate** | A structured public event in which a candidate addresses members on one of three topic areas (local conditions, local problems, work required), required three times per candidate before a major election (`FR-066`). |
| **Denominator** | The eligible-population figure of a region used to compute a threshold (`FR-009`). |
| **Dwell period** | The continuous time a petition must remain at or above threshold before activating. |
| **Entrenched clause** | A charter clause requiring the highest amendment tier, longest timelock and an age-qualified quorum (`FR-027`). |
| **Jurisdiction** | The single region identifier a party declares and within which its threshold is computed. |
| **Major election** | An election filling an office or position within a party — including by-elections (mid-term vacancies), elections following a successful recall (`FR-042`–`FR-045`), and scheduled end-of-term elections. Excludes internal non-office administrative votes (e.g., procedural motions, informal straw polls, and internal rule confirmations that do not place a named person in an office). The three-debate requirement (`FR-066`) and the post-debate candidacy-vote requirement (`FR-067`) apply to every major election; the scope of "major election" does not extend to sub-party administrative resolutions that do not fill a defined office. _(Added v1.1.1 — ISS-07.)_ |
| **Maturation period** | The delay between joining a party and acquiring governance rights (`FR-023`). |
| **Nullifier** | A deterministic, non-reversible token derived from a stable personal identifier; stored on the verifiable record instead of the identifier (`FR-069`). |
| **Office** | An elected position within a party, bound to exactly one region. |
| **Participation profile** | _(Superseded at v2.0.0 by **Participation record** below; the undifferentiated public-profile concept in `FR-062` is superseded by the three-tier model in §4.24.)_ |
| **Personhood credential** | Non-transferable proof that the holder is a unique, eligible human — not an identity. |
| **Petition** | The state a published party draft occupies while gathering endorsements. |
| **Pillar** | One of the eight mandatory policy areas: Finance, Society, Governance, Law, Education, Healthcare, Security, Regional Plans. |
| **Pluggable adapter** | An interchangeable credential-source integration conforming to a published interface (`FR-070`). Candidate types: eIDAS 2.0 wallet, ICAO Doc 9303 NFC chip, offline paper KYC (e.g. Aadhaar). |
| **Receipt-freeness** | The property that a voter cannot prove their choice to a third party (`NFR-003`). |
| **Recall** | Member-initiated removal of an office-holder mid-term (`FR-042`–`FR-045`). |
| **Scope** | A context in which a person may act at most once (a petition, a ballot, an election). |
| **Threshold** | The published percentage of a jurisdiction's denominator required for activation (`FR-016`). |
| **Verifiable record** | The tamper-evident public record any third party can independently re-compute (`FR-054`, `FR-055`). |
| **Append-only lifecycle** | The rule that no governance-path entity is ever hard-deleted or overwritten; state transitions are appended with timestamp and cause; history is never rewritten (`FR-107`, `NFR-028`). |
| **Committee** | A deliberative body formed by a party; its only permitted output is a proposal entering the ordinary lifecycle with no special status; holds zero decisional, eligibility, or vote-counting power (`FR-087`, `FR-088`). |
| **Conduct vote** | A member vote (up/down) on a public-tier participant using the same nullifier, privacy, and anti-capture mechanics as policy votes; individual votes private, aggregates public; not available against Supporter-tier participants by construction (`FR-103`). |
| **Constitution** | A party's public digital founding document; must contain all mandatory sections and the unaltered non-violence clause; completeness and clause integrity verified by code (`FR-076`, `FR-077`). |
| **Country selection** | The single country in which a verified citizen declares legal eligibility to participate in party politics; scopes the region tree and all residency-derived rights; governed by the residency-change discipline of FR-008 (`FR-074`). |
| **Decision trail** | The permanent, publicly reconstructable record comprising: the proposal(s), authorship, deliberation records, vote result, enacted consequence, implementation status, and measured outcome for every decision (`FR-092`). |
| **Disclosure schedule** | The platform-published list of information categories that may be demanded of a Worker, Candidate, or Office-holder at or after their declaration or nomination event; no unlisted category may be demanded after role-taking (`FR-084`). |
| **Expulsion** | Removal from party membership entirely; requires a distinct, strictly higher affirmative quorum and supermajority than removal from any role; does not alter historical records (`FR-105`). Contrast: **Removal**. |
| **Non-violence clause** | The platform's standard text that must appear verbatim in every party constitution; the single deliberate exception to political-content neutrality; presence and integrity verified by code, never by human judgment (`CON-013`, `FR-077`). |
| **Participation record** | The tier-scoped per-citizen record of role-relevant activity: for Worker/Candidate tiers, begins at the informed-consent event and includes work recorded, proposals authored, debates attended, candidacies held, and committee memberships — never ballot direction; for Supporter tier, no such record exists (`FR-083`). _Replaces the v1.1.x "Participation profile" concept (`FR-062` superseded)._ |
| **Removal** | Removal from a role, team, or committee only — not from party membership; requires an affirmative quorum of actively voting members at a published bar; silence does not remove (`FR-104`). Contrast: **Expulsion**. |
| **Scorecard** | A public, factual presentation of a party's manifesto commitment progress versus its own baselines with published methodology and evidence links; informs members and the public — does not rank parties or emit editorial conclusions (`FR-110`). |
| **Sortition** | Verifiable random selection of members to serve on a per-case appeal, review, or audit panel; no standing panel body exists; selection proof is publicly reproducible (`FR-101`). |
| **Steering committee** | A party committee capped at 30 members operating under the same deliberative-only constraints as all committees — no decisional power (`FR-087`). |
| **Tier** | One of three self-assigned, descriptive participation labels per party — Supporter, Worker, Candidate — that record contribution context but confer no voting weight (`FR-079`). |
| **Trust-anchor lifecycle** | The governance process for revoking or rotating an identity-issuer key; decided by member vote through the tiered process, with a published expedited emergency variant for revocation and a rotation-schedule constraint preventing enrolment blocking (`FR-112`, `FR-113`). |
| **Steward** | Elected platform-level coordinator; powers are enumerated and exhaustive (four listed powers only); holds no outcome power — cannot change who wins, who votes, or who is a member (`FR-114`, `FR-115`). |
| **Entrenched charter** | The **seven** platform rules that are unamendable by any vote at any tier and changeable only by fork: one human one vote; no transferable power; no privileged role over outcomes; the unconditional right to fork; no behavioural surveillance; anonymity by default with disclosure only by voluntary role-taking; and CON-001 (parties only, never state elections — promoted at v2.2.0 per OI-18 as a scope boundary rather than an implementation commitment). Amendment proposals targeting any of these seven rules are rejected by code at submission (`FR-118`). |
| **Named absolutes (Tier 2)** | The four groups of platform guarantees that are amendable only via the Doc 03 super-process — not by ordinary citizen vote: receipt-freeness & coercion resistance (`BR-011`, `NFR-003`); data minimisation (`CON-002`, `CON-008`, `NFR-010`); no bespoke unaudited cryptography (`CON-012`); non-violence clause (`CON-013`). Distinct from the Tier-1 entrenched charter (fork-only) and from Tier-3 ordinary rules (`FR-119`). |
| **Super-process** | The five-property amendment path required to change a Tier-2 named absolute. Must include at minimum: (1) a supermajority materially above the ordinary structural tier; (2) a timelock long enough that the fork right is genuinely exercisable before the change takes effect; (3) two consecutive affirmative votes separated by that window; (4) the growth-surge defence active throughout; (5) an independent audit of the proposed change published before the second vote. Specific numbers are set by the architect in Doc 03 with rationale (`FR-119`). |
| **Amendable protocol** | Every platform rule that is NOT in the Tier-1 entrenched charter or the Tier-2 named absolutes (Tier 3); amendable by platform-wide citizen vote at the highest governance tier with published quorum, supermajority, and timelock — and enacted by code with no ratification step (`FR-119`). |
| **Steward vacancy** | The tested state in which no steward holds office; the platform guarantee is that a complete steward vacancy causes zero citizen-facing degradation — enrolment, party creation, voting, proposal submission, and forking all proceed unchanged (`FR-117`). |
| **Counted action** | An action that contributes to an official count or eligibility outcome: contributing to a party's strength number, voting in a binding decision, or standing as a candidate. Requires proof of unique personhood (the FR-069 enrolment nullifier) per `FR-123`. Contrast: open-tier participation. |
| **mDL** | Mobile Driver's Licence; a state-issued digital driving licence in mobile-credential format (ISO 18013-5). Referenced in `FR-121` as the fragmented credential landscape that defers the USA to Phase 3 of the pilot sequence; an optional "phone-home" privacy default in current mDL specifications conflicts with the platform's non-correlation guarantee (`FR-002`, `FR-069`). |
| **Open tier** | The unverified participation tier available to any citizen without completing personhood verification; permits reading, following, watching, and other low-stakes actions but excludes all counted actions (`FR-122`). Contrast: counted action. |
| **Subpoena test** | The acceptance criterion for `FR-128`: if a court orders the platform to disclose who belongs to a party, the platform must be technically unable to comply — not merely legally entitled to decline. Encrypted-but-decryptable identity storage fails this test. The test is the architecturally enforced form of the non-correlation guarantee. |
| **Verified status** | The marker indicating that a participant has completed personhood verification (FR-069 nullifier enrolment). Verified status is PRIVATE TO THE HOLDER, expressed as eligibility (`FR-124` v2.3.1 per approver ruling, Rathish, 2026-08-20): **(a)** every verified participant — including Supporters — sees their own verified status and knows their counting/voting eligibility in their own authenticated session only; **(b)** the public sees only aggregate verified counts (e.g. 'N verified members'), never a per-participant badge for Supporters; **(c)** Worker/Candidate verified badge is visible on the public participation record — voluntary role-taking (FR-080) already crossed the disclosure line (`FR-083`); **(d)** MUST-NOT: no persistent public attribute may reveal that a specific Supporter is verified; absence-test obligation applies (UT-0700/UT-0701 style). No retroactive linkage is permitted (`FR-086`). Rationale: disclosure follows voluntary role-taking; verification is not role-taking (NFR-001, NFR-002, TD-02). |

---

## 15. Approvals (Gate 1 sign-off)

| Role | Name | Decision | Date | Notes |
|------|------|----------|------|-------|
| Product Owner (Accountable) | Priya Raghunathan | Approved v1.0.0; v1.1.0 submitted for re-affirmation | 2026-08-09 | v1.1.0 CR-v1.1.0 nine changes, Status: In Review |
| Project Manager (Responsible) | Ana-Maria Petrescu | Approved v1.0.0 at Gate 1 | 2026-08-09 | Re-affirmation packet to be assembled for v1.1.0 |
| **Human approver — Gate 1 re-affirmation** | Rathish | ~~**Pending re-affirmation at v1.1.0**~~ _(superseded)_ | 2026-08-11 | ~~Must confirm or revise OI-13 (profile vs anonymity)~~ Superseded by the v2.0.0 re-entry (Gate 1 approved 2026-08-11; OI-13 resolved at v2.0.0) |
| Human approver — Gate 1 (v2.0.0 re-entry) | Rathish | **Gate 1 APPROVED** | 2026-08-11 | Approved Doc 01 v2.0.0 + Doc 02 v2.0.1; conditional on steward requirements (Doc 02 v2.1.0) landing before Design; condition fulfilled by this version |
| Human approver — v2.1.0 condition | Rathish | Steward requirements landed this version; review loop pending | 2026-08-11 | ~~OI-18 open~~ **OI-18 RESOLVED at v2.2.0** (two-tier entrenched-charter scope decided; OI-18-DECISION-2026-08-11.md applied at v2.2.0). _(v2.3.1 ISS-02: stale 'OI-18 open' note corrected.)_ |

---

### Downstream
Design (Doc 03) MUST address **every** FR and NFR and **every** RISK in this document. Coverage is
verified in the RTM (Doc 08). Gate 1 was approved 2026-08-11 at Doc 01 v2.0.0 + Doc 02 v2.0.1, conditional on Doc 02 v2.1.0 (steward requirements) passing its business-mode review. Nothing is designed until the project-manager records that condition satisfied (GATE1-DECISION-2026-08-11.md §2). Once recorded, design proceeds per GATE1-DECISION-2026-08-11.md §5.

---

## 16. Delivery phasing — Definition A (v1) and Definition B (v2)

> **Source:** Approver directive 2026-08-23, Rathish — transmitted via coordinator.
> Decision records: `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` (v1/v2 split);
> `artifacts/status/DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md` (phone auth, spam
> resistance, blockchain ratification — Ruling 3 ratifies DES-097; item (a) from V1-V2-SPLIT
> §4 CLOSED as DECIDED); `artifacts/status/DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md`
> (government-ID document check; verify-and-discard; confirmations §4 T-01..T-05 CONFIRMED,
> DEFERRED-v2 Musts CONFIRMED, NFR-009 CONFIRMED, 2027-05-14 CONFIRMED; CON-015 CRITICAL PATH).
> Architect alignment: Doc 03 v2.3.1 (Approved) §10.13 (DES-095..DES-098) + ADR-024;
> Doc 03 v2.4.1 (Approved) §10.13 (DES-095 amended, DES-099) + ADR-025; Doc 03 v2.5.1
> (Approved) §10.13.7 (T-01..T-05 CONFIRMED, T-06 ACCEPTED-deferred-with-disclosure,
> T-07 RESHAPED-CON-015, T-08 ARCHITECT-RESOLVED) + §10.13.9 (DES-100 field-level
> disposition, allowlist/denylist, HMAC design, Q-1/Q-2/Q-3) + ADR-025 §(e)
> (government-ID check amendment). ADR-025 §(c-viii) update owed: counting-gate
> clarification (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §5.2 — architect to amend).
> This section is the canonical reference for the engineer, tester, and architect when
> scoping v1 deliverables.

### 16.1 Definitions

#### 16.1.1 Definition A — v1 (transparent party platform)

A real, production-grade, shareable application: create a party (eight-pillar vision, constitution, non-violence clause), petition → threshold → activation, join freely with no approval (one party at a time), propose / discuss / debate, self-nominate and select candidates by member vote, manifesto with tracked commitments and evidence, and public dashboards for finances, promises and performance. **Voting WORKS in v1** but uses conventional authentication, NOT the zero-knowledge private ballot. v1 is built in months, shared on GitHub, and open to community contribution.

Identity backing: `IEligibilityVerifier` conventional implementation — account lookup, database duplicate-prevention, conventional session auth (DES-095). No ZK proof verified.

Ballot backing: `IBallotService` conventional implementation — authenticated write to database; `computeTally()` = SQL COUNT aggregate; tally result hash published to the lightweight on-chain audit contract (DES-096, DES-097). `getTallyProperties()` returns `{ receiptFree: false, coercionOverride: false, zeroKnowledge: false, publiclyVerifiable: true }`.

Blockchain role in v1: public transparent-audit record ONLY. The `packages/contracts` subset deployed is the lightweight audit-record contract; full on-chain governance contracts are v2-only (DES-097, ADR-024).

Guardrail: **nothing built in the Design phase is discarded**. v1 reuses requirements, flows, design system, and wireframes. v2 is an implementation swap behind the stable seam interfaces (DES-095, DES-096), never a rewrite.

#### 16.1.2 Definition B — v2 (full cryptographic guarantees)

The same platform PLUS the hard cryptographic guarantees: ZK anonymous enrolment, private receipt-free ballots (MACI, ADR-006), the trusted-setup ceremony (ADR-022), the coordinator committee (DES-024), and the heavy external audits. Deferred — to be built later, in the open, with the community, after v1 is live and the community can contribute. v2 is an implementation swap behind the DES-095 (`IEligibilityVerifier`) and DES-096 (`IBallotService`) seam interfaces; it never requires a rewrite of the application layer, design system, or package topology above those seams.

### 16.2 Classification test (normative)

A requirement's delivery-phase disposition is determined by this test, applied to its normative text:

| Disposition | Rule |
|---|---|
| **IN-v1** | The requirement is fully deliverable in Definition A using conventional authentication and the v1 package disposition. Nothing cryptographic is required to satisfy it. |
| **PARTIAL** | The requirement has both a conventional-auth v1 form (satisfying the core purpose with conventional enforcement) and a cryptographic v2 form (providing the full guarantee). The v1 form is the implementation scope for Definition A; the v2 form is the upgrade. |
| **DEFERRED-v2** | The requirement exists ONLY to provide anonymity, private ballots, coercion-resistance, or hostile-state safety. It cannot be meaningfully satisfied in conventional-auth v1. |
| **SUPERSEDED-n/a** | The requirement has been superseded by a later requirement; retained for traceability only. |

**Examples of the intended pattern:** FR-001 (one credential per human) is PARTIAL — v1: one account per verified phone number (SMS verification is a spam speed-bump, NOT a personhood proof; FR-132; MUST NOT claim one-person-one-vote); v2: ZK nullifier-based credential with on-chain uniqueness guarantee. FR-030 (ballot unlinkability) is DEFERRED-v2 — it exists only to provide anonymity. FR-018 (automatic activation) is IN-v1 — nothing cryptographic about code-executing a party-state transition.

**Standing Musts:** requirements classified PARTIAL or DEFERRED-v2 remain **Must FOR DEFINITION B**. They are NOT weakened or deleted — they are phased, with the v1 posture disclosed under FR-131 (§4.45, DES-098). The honesty register (§16.4) and the contradiction surface (§16.5) document what this means for v1 users.

### 16.3 Classification table

#### 16.3.1 Functional Requirements (FR-001..FR-133)

Columns: **ID** · **Short name** · **Priority** · **v1 disposition** · **v1 form** (for PARTIAL rows and IN-v1 rows whose mechanism changes; "—" where the normative text applies identically) · **v2 form** (for PARTIAL and DEFERRED rows) · **Honesty item** (Y = a v1 user might assume the v2 guarantee; the absence MUST be disclosed).

| ID | Short name | Pri | Disposition | v1 form | v2 form | H? |
|----|-----------|-----|-------------|---------|---------|-----|
| FR-001 | One credential per human | Must | PARTIAL | One account per verified phone number + government-ID document check; DB duplicate prevention by `phone_hash` AND `subject_id_hash` (same-document deduplication, DES-100); "real-person verified" posture; MUST NOT claim one-person-one-vote in v1 (multiple legitimate IDs defeat same-document guard) | ZK nullifier-based credential; on-chain nullifier uniqueness; one-person-one-vote guaranteed by construction | N |
| FR-002 | Per-scope single action, cross-scope unlinkability | Must | PARTIAL | DB-enforced one-action-per-scope; cross-scope linkability NOT prevented (same phone+ID-verified account used across scopes; `subject_id_hash` improves same-document deduplication across scopes but does not provide cross-scope unlinkability; cite FR-132) | ZK scope-bound nullifiers; cross-scope unlinkability technical guarantee | Y |
| FR-003 | No identity data at rest | Must | PARTIAL | v1: `phone_hash` (HMAC-SHA-256/KMS-pepper) and `subject_id_hash` (HMAC-SHA-256/KMS-pepper) stored as restricted-class credential fields (DES-100 allowlist); document image, biometrics, name, DOB, document number, raw subject ID discarded (DES-100 denylist); hashed storage is an improvement over plaintext but both hashes ARE derived identity data; `subject_id_hash` deepens the identity surface relative to phone-only v1; CON-015 governs legal classification of retained fields (India/Aadhaar Act 2016, DPDP, GDPR) — see §9 CON-015 annotation | v2: no identity data at rest by construction; ZK circuit checks and discards credential on-device (FR-126); phone_hash and subject_id_hash storage eliminated; ZK nullifier only | Y |
| FR-004 | Attestor plurality and concentration cap | Must | IN-v1 | Plural adapter interface; Phase-1 single-rail limitation dated and recorded (OI-20, FR-121, FR-129) | Same; pluggable adapter interface unchanged | N |
| FR-005 | Revoke fraudulent credential | Should | IN-v1 | Conventional revocation; DB invalidates future actions | Same | N |
| FR-006 | Residency without address | Must | IN-v1 | Region-level attested claim; no address stored at any stage | Same | N |
| FR-007 | Versioned region registry, non-retroactive | Must | IN-v1 | Registry versioned in DB; boundary change creates new version | Same | N |
| FR-008 | One residency, 180-day cooldown | Must | IN-v1 | DB constraint | Same | N |
| FR-009 | Denominator from independent sources | Must | IN-v1 | Two-source oracle with disagreement tolerance and dispute window | Same | N |
| FR-010 | Party draft creation, name collision check | Must | IN-v1 | Conventional draft creation in DB | Same | N |
| FR-011 | Eight mandatory pillars | Must | IN-v1 | Code-checked field completeness | Same | N |
| FR-012 | Charter amendment tiers accepted within bounds | Should | IN-v1 | DB-enforced tier rules | Same | N |
| FR-013 | Petition lifecycle with expiry and cooldown | Should | IN-v1 | Conventional petition state machine | Same | N |
| FR-014 | One endorsement per person, non-transferable | Must | PARTIAL | DB-enforced one endorsement per petition scope | ZK nullifier per petition scope | N |
| FR-015 | Withdraw endorsement, count decrements | Should | IN-v1 | DB decrement; no endorser identity revealed | Same | N |
| FR-016 | Code-computed threshold, no override | Must | IN-v1 | Code-computed (protocol package or smart contract); no override path | Same | N |
| FR-017 | Live petition progress, no endorser identity | Should | IN-v1 | Aggregate count; no endorser identity published | Same | N |
| FR-018 | Automatic activation | Must | IN-v1 | Code-executed state transition; permissionless call | Same | N |
| FR-019 | Jurisdiction lock post-activation | Should | IN-v1 | DB constraint on party jurisdiction after activation | Same | N |
| FR-020 | Join without approval | Must | IN-v1 | Open membership; no gate, no invite required | Same | N |
| FR-021 | One member, one equal vote | Must | PARTIAL | DB constraint: one ballot entry per member per election | ZK nullifier per election scope; on-chain weight equality | N |
| FR-022 | Leave at will | Must | IN-v1 | Conventional membership removal; DB update | Same | N |
| FR-023 | Maturation and churn rate limit | Must | IN-v1 | Tenure clock and churn-rate checks enforced in DB | Same | N |
| FR-024 | Any matured Worker+ may propose | Must | IN-v1 | Tier check in DB; Supporter prompted to declare Worker | Same | N |
| FR-025 | Tiered quorum and supermajority | Must | IN-v1 | Code-computed vote tallying with tier and quorum rules | Same | N |
| FR-026 | Timelock | Must | IN-v1 | Smart contract or DB-enforced delay before execution | Same | N |
| FR-027 | Entrenched founding clauses | Must | IN-v1 | Code-enforced charter amendment tiers | Same | N |
| FR-028 | Eligibility snapshot at proposal open | Must | IN-v1 | DB snapshot captured at proposal open time | Same | N |
| FR-029 | (amendment prerequisites / charter state) | Should | IN-v1 | Conventional charter-state enforcement | Same | N |
| FR-030 | Ballot unlinkability | Must | DEFERRED-v2 | — | ZK encrypted ballots (MACI); no linkability between voter and ballot mathematically | Y |
| FR-031 | Receipt-freeness | Must | DEFERRED-v2 | — | MACI receipt-free ballots; PPT adversary cannot distinguish vote | Y |
| FR-032 | Invisible coerced-vote override | Must | PARTIAL | Last-ballot-counts (DB overwrite); re-vote is visible in DB and operator logs | MACI: re-vote indistinguishable from original; coercion-resistance per NFR-003 | Y |
| FR-033 | Independently reproducible tally | Must | PARTIAL | SQL COUNT aggregate; tally result hash published to on-chain audit contract; verifier trusts DB count | ZK tally proof (MACI + DKG); independently verifiable by anyone from public data alone | N |
| FR-034 | No interim tallies published | Should | PARTIAL | Platform API never serves interim tallies; DB operator can see ballot DB at any time | Technically impossible: MACI encrypted ballots make interim tallies computationally infeasible | Y |
| FR-035 | No transfer or delegation of a vote | Must | IN-v1 | DB constraint; no transfer path exists in the schema | ZK nullifier non-transferable by construction | N |
| FR-036 | Self-nomination scoped to region and office | Must | IN-v1 | DB-enforced region and office scope check | Same | N |
| FR-037 | Informed consent to public identity | Must | IN-v1 | Explicit consent flow before Worker/Candidate declaration | Same | N |
| FR-038 | (election timetable / nomination process) | Should | IN-v1 | Conventional timetable and process constraints | Same | N |
| FR-039 | Election scoped, timetable immutable post-open | Must | IN-v1 | Smart contract or DB immutable timetable after open | Same | N |
| FR-040 | Automatic office assignment | Must | IN-v1 | Code-executed assignment on election result | Same | N |
| FR-041 | (ballot window / election timing constraints) | Should | IN-v1 | Conventional constraints | Same | N |
| FR-042 | Member-initiated recall | Must | IN-v1 | Conventional recall petition in DB | Same | N |
| FR-043 | Two-stage recall with higher bar | Must | IN-v1 | Two-stage voting logic with affirmative quorum | Same | N |
| FR-044 | (recall cooldown / grace window) | Should | IN-v1 | Conventional cooldown after failed recall | Same | N |
| FR-045 | Automatic revocation and by-election | Must | IN-v1 | Code-executed revocation and election trigger | Same | N |
| FR-046 | SUPERSEDED | — | SUPERSEDED-n/a | — | — | — |
| FR-047 | Immutable version history | Must | IN-v1 | Append-only on-chain audit record | Same; stronger in v2 (ZK-proof anchored) | N |
| FR-048 | (office-holder vote separation) | Should | PARTIAL | Policy separation: DB records role votes separately; API does not link role-capacity and member votes for same person | ZK: separate nullifier derivations make mathematical linkage impossible | Y |
| FR-049 | (treasury contribution cap) | Should | IN-v1 | DB-enforced cap per account | ZK: cap enforced per nullifier | N |
| FR-050 | Treasury: every inflow and outflow published | Must | IN-v1 | Append-only public audit record | Same | N |
| FR-051 | Money buys no governance advantage | Must | IN-v1 | Platform rule: no token weighting, no purchasable votes | Same | N |
| FR-052 | (treasury / contribution related) | Could | IN-v1 | Conventional | Same | N |
| FR-053 | Party fork and split | Could | IN-v1 | Fork right; conventional fork petition; threshold enforced by code | Same; ZK proofs for on-chain fork count in v2 | N |
| FR-054 | Publicly verifiable record of every governance action | Must | IN-v1 | On-chain audit contract publishes petition milestones, tally hashes, manifesto hashes, activation events (DES-097) | Full ZK-proof-based governance record in v2 | N |
| FR-055 | (unauthenticated public read interface) | Should | IN-v1 | Unauthenticated rate-limited public API for third-party verification | Same | N |
| FR-056 | No operator discretion | Must | IN-v1 | Code-only governance; no override path; no pause switch | Same | N |
| FR-057 | (transparency reporting) | Could | IN-v1 | Transparency register | Same | N |
| FR-058 | Recovery without seed phrases | Must | IN-v1 | Passkey + social guardian recovery with delay and veto | Same | N |
| FR-059 | Recovery reveals nothing about identity | Must | PARTIAL | Conventional recovery with privacy constraints on the notification channel | ZK-based recovery: no link between recovery event and nullifier | Y |
| FR-060 | No token, no gas, no jargon | Must | IN-v1 | UI/UX policy; platform-borne cost; no crypto jargon in primary flows | Same | N |
| FR-061 | Sponsorship degrades, never denies | Must | IN-v1 | Queue-with-explanation mechanism; never charge, never deny | Same | N |
| FR-062 | SUPERSEDED | — | SUPERSEDED-n/a | — | — | — |
| FR-063 | Ballot-direction prohibition | Must | PARTIAL | Platform API never exposes ballot direction; DB holds direction (operator CAN see it); UT-0700/UT-0701 absence tests apply | MACI: ballot direction technically unavailable to any actor including operator | Y |
| FR-064 | Single party membership constraint | Must | IN-v1 | DB constraint: one active party per account; switch only by explicit recorded leave, then join (v2.15.0 ruling (a)) | Same; DES-065 on-chain nullifier in v2 — auto-void deferred there | N |
| FR-065 | Candidate feedback scoring | Must | IN-v1 | DB aggregate (asymmetric +3/−1); aggregate public | Same | N |
| FR-066 | Mandatory pre-election debates | Must | IN-v1 | On-chain CID attestation; attendance attestation preserved | Same | N |
| FR-067 | Candidacy from post-debate member vote | Must | IN-v1 | Post-debate vote determines candidacy eligibility | Same | N |
| FR-068 | Tenure waiver for new parties | Must | IN-v1 | Tenure-waiver logic; FR-023 churn limits remain active | Same | N |
| FR-069 | Deterministic enrolment nullifier | Must | PARTIAL | Conventional duplicate prevention via DB; hash of stable ID as DB key | ZK in-circuit nullifier derivation (ADR-017, DES-069); on-chain nullifier uniqueness | N |
| FR-070 | Pluggable credential adapter | Must | IN-v1 | Adapter interface for conventional credential validation (three adapter classes); DES-070 region-level config | Same interface; v2 adds ZK circuit per adapter class | N |
| FR-071 | Enrolment-collision recovery | Must | PARTIAL | DB-based collision detection and recovery with delay + veto | ZK nullifier collision recovery on-chain; recovery state machine (DES-071) | N |
| FR-072 | Recovery delay (7-day) and veto guard | Must | IN-v1 | 7-day timelock + active-key veto; notification on initiation | Same | N |
| FR-073 | Government eID issuer hierarchy | Must | IN-v1 | Issuer-class policy applied at adapter validation layer | Same | N |
| FR-074 | Country selection: single active, FR-008 governs changes | Must | IN-v1 | Conventional country selection with cooldown | Same | N |
| FR-075 | Platform activation ≠ legal registration; boundary stated | Must | IN-v1 | State machine boundary; stated on every surface | Same | N |
| FR-076 | Party founding: complete digital constitution required | Must | IN-v1 | Code-checked field completeness and minimum substance | Same | N |
| FR-077 | Non-violence clause mandatory, integrity-checked | Must | IN-v1 | Hash-verified presence check; altered clause refused | Same | N |
| FR-078 | Constitution versioned immutably | Must | IN-v1 | Append-only versioned record | Same | N |
| FR-079 | Participation tiers: self-assigned, no weight differential | Must | IN-v1 | No admin approval; tier stored in DB; no weight multiplication | Same | N |
| FR-080 | Worker tier: self-declared, informed consent required | Must | IN-v1 | Explicit consent flow; DB stores declaration | Same | N |
| FR-081 | Candidate tier: self-nominated, code-checked | Must | IN-v1 | Code-checked eligibility; no human approval | Same | N |
| FR-082 | Supporter: unconditionally anonymous | Must | DEFERRED-v2 | — | ZK nullifier-only identity; no account↔party link exists anywhere; FR-082 cannot be technically satisfied in v1 where DB holds member↔party mapping | Y |
| FR-083 | Worker/Candidate participation record: starts at consent | Must | IN-v1 | Consent-based public record begins at role-taking | Same | N |
| FR-084 | Disclosure schedule published before window opens | Must | IN-v1 | Immutable schedule; no extra demands post role-taking | Same | N |
| FR-085 | Consent irrevocable for term; withdrawal destroys pre-nomination data | Must | IN-v1 | DB-enforced irrevocability; confidential-class carve-out (OI-16) | Same | N |
| FR-086 | Prior Supporter-period activity permanently anonymous post role-transition | Must | DEFERRED-v2 | — | ZK: no period-link exists; role-transition cannot retrospectively link prior activity to an identity | Y |
| FR-087 | Committees: deliberative only; minutes public | Must | IN-v1 | Power restrictions in code; minutes append-only | Same | N |
| FR-088 | Committee capability limits; outcome capability rejected | Must | IN-v1 | Code-enforced capability limits | Same | N |
| FR-089 | Committee membership expires mechanically | Must | IN-v1 | Mechanical expiry; no human renewal path | Same | N |
| FR-090 | Proposal authorship public; equal standing | Must | IN-v1 | Authorship stored and displayed; no ranking of proposals | Same | N |
| FR-091 | Eight-stage proposal lifecycle; stage-skip refused | Must | IN-v1 | State machine in code; stage-skip rejected | Same | N |
| FR-092 | Permanent decision trail reconstructable from public data | Must | IN-v1 | Blockchain-anchored audit record (DES-097); public data only | Same; ZK-proof trail in v2 | N |
| FR-093 | Candidate selection schedule; unanswered questions recorded | Must | IN-v1 | Immutable schedule; unanswered Qs visibly recorded | Same | N |
| FR-094 | Manifesto: structured, machine-readable, complete-or-refused | Must | IN-v1 | Conventional structured format; incomplete refused | Same | N |
| FR-095 | Manifesto commitment: stable ID, append-only status history | Must | IN-v1 | DB append-only status history per commitment | Same | N |
| FR-096 | Financial anomaly flag: information only; no fund freeze | Must | IN-v1 | Flag published; no freeze capability by construction | Same | N |
| FR-097 | COI disclosure: mandatory for public-tier roles; overdue flag | Must | IN-v1 | Mandatory disclosure with overdue flag | Same | N |
| FR-098 | COI review: investigation-and-recommendation only | Must | IN-v1 | Investigation panel; no binding power | Same | N |
| FR-099 | Internal audit: sortition, read-only, no enforcement | Must | IN-v1 | Sortition selection; read-only access; no enforcement | Same | N |
| FR-100 | Dispute timelines: stage max enforced | Must | IN-v1 | Stage maximums code-enforced | Same | N |
| FR-101 | Sortition panels: verifiable random; no standing body | Must | IN-v1 | Verifiable random selection; per-case only | Same | N |
| FR-102 | Member rights charter: machine-readable, code-enforced | Must | IN-v1 | Code-enforced floor; charter may not reduce it | Same | N |
| FR-103 | Conduct votes: individual private, aggregate public | Must | PARTIAL | DB: individual votes not exposed through platform API; aggregate published; DB operator can see individual votes | ZK: individual conduct votes cryptographically private | Y |
| FR-104 | Removal: affirmative quorum; silence does not remove | Must | IN-v1 | Code-computed affirmative quorum requirement | Same | N |
| FR-105 | Expulsion bar strictly higher than removal | Must | IN-v1 | Separate vote required; higher quorum | Same | N |
| FR-106 | Every data entity classified; unclassified not storable | Must | IN-v1 | Classification system in DB schema; write rejected if unclassified | Same | N |
| FR-107 | Append-only: hard-delete and overwrite refused | Must | IN-v1 | DB append-only constraints; confidential-class carve-out (OI-16) | Same | N |
| FR-108 | Public record: proofs, timestamps, counts only | Must | IN-v1 | On-chain audit contract publishes only permitted fields per DES-097 | Same; broader ZK-proof set in v2 | N |
| FR-109 | Transparency dashboard: aggregate-only, no per-member drill-down | Must | IN-v1 | Aggregate-only UI; per-member drill-down refused | Same | N |
| FR-110 | Scorecard: factual, informs but never concludes | Must | IN-v1 | Factual scorecard; verdicts and rankings refused | Same | N |
| FR-111 | No per-user behavioural event recorded anywhere | Must | IN-v1 | No telemetry; UT-0525/UT-0740 absence tests | Same | N |
| FR-112 | Trust-anchor revocation: member-vote only | Must | IN-v1 | Governance vote executes revocation; operator revocation refused | Same | N |
| FR-113 | Trust-anchor rotation: compliant rotation never blocks enrolment | Must | IN-v1 | Overlap-window governance; 60-day SLA | Same | N |
| FR-114 | Steward body elected by all-enrolled ballot; fixed terms | Must | PARTIAL | Conventional election with conventional auth; DB ballot | ZK anonymous ballot for steward election | N |
| FR-115 | Steward powers enumerated and exhaustive | Must | IN-v1 | Exhaustive enumeration; unlisted action refused | Same | N |
| FR-116 | Stewards propose; citizens decide; no emergency override | Must | IN-v1 | Equal-standing competing proposals; no override path | Same | N |
| FR-117 | Zero steward dependency | Must | IN-v1 | Zero-dependency property; citizen flows independent | Same | N |
| FR-118 | Seven entrenched charter rules; amendment refused by code | Must | IN-v1 | Code checks at proposal submission; reverts EntrenchedRule | Same | N |
| FR-119 | Three-tier amendment structure | Must | IN-v1 | Amendment tier logic in code | Same | N |
| FR-120 | Unconditional fork right (flag OFF above dev — open critical) | Must | IN-v1 | Fork right; flag carry-forward | Same | N |
| FR-121 | Pilot jurisdiction sequence and enrolment adapter schedule | Must | IN-v1 | Phase-1 India/Aadhaar adapter; Phase-2 EU/eIDAS 2.0 | Same | N |
| FR-122 | Open-tier access without verification; counting requires verification | Must | IN-v1 | Open join; verification gates counting only | Same | N |
| FR-123 | Verified personhood required for counted actions | Must | PARTIAL | Conventional verification (adapter) gates counting; DB-enforced | ZK personhood proof gates counting; on-chain nullifier | N |
| FR-124 | Verified status private to holder; aggregate-only public | Must | PARTIAL | DB holds verified status; private by policy (API does not expose); aggregate-only public | ZK proves personhood without revealing status attribute | Y |
| FR-125 | Non-invite fallback always open; FR-020 absolute | Must | IN-v1 | Non-invite join always available; invite is fast path only | Same | N |
| FR-126 | On-device credential processing; raw credential discarded | Must | PARTIAL | On-device conventional verification; discard before transmission enforced by app design and API contract | ZK on-device circuit; credential never leaves device by cryptographic construction | N |
| FR-127 | Nullifier-collision duplicate detection only | Must | PARTIAL | DB-based duplicate detection by hash of stable ID; no name-match or biometric | On-chain nullifier collision detection | N |
| FR-128 | No stored identity; subpoena test | Must | PARTIAL | No identity documents stored in any form; operator DB CAN be compelled to disclose member↔party mapping and vote direction — subpoena test NOT met in v1 | ZK: operator technically cannot comply; no mapping exists | Y |
| FR-129 | Attestor-plurality Charter guard | Must | IN-v1 | Single-issuer permanence requires Charter-level re-entry; config flag attempt refused | Same | N |
| FR-130 | Provisional-party membership cap (100; anti-capture) | Must | IN-v1 | 100-member cap code-enforced; lifts automatically on verified legal registration | Same | N |
| FR-131 | v1 honesty notice and honesty-of-claim duty (DES-098) | Must | IN-v1 | Non-dismissable plain-language UI notice before each ballot in v1; states NOT anonymous, NOT receipt-free, NOT coercion-resistant; carries one-account-per-phone caveat (FR-132); from v2.17.0 also the honesty-of-claim duty across every v1 participation act on every public-facing surface in every language (clause (e); §8 Scenarios 8-9) | — (v1-only requirement; v2 replaces with FR-030/031/NFR-003 cryptographic guarantees + DES-063 coercion-safe confirmation surface) | N |
| FR-132 | v1 identity verification — two-layer gating: phone for account creation/open-tier; government-ID check for FR-123 counting actions only (DES-095 amended, DES-100, ADR-025) | Must | IN-v1 | Phone SMS for account creation and open-tier access (FR-020/FR-122 absolute; MUST NOT refuse membership for absence of ID); government-ID document check required only for FR-123 counting actions (official strength contribution, binding vote, candidacy); verify-and-discard (allowlist: id_verified_flag, age_verified, issuing_region, subject_id_hash, phone_hash, verified_at; all else discarded); subject_id_hash deduplication at counting-verification (not account creation); "real-person verified" posture for counting tier; MUST NOT claim anonymity or one-person-one-vote; honesty caveat carried by the FR-131 notice (DES-098) clause (d), and by FR-132 §(d)/§(e); vendor no-retention contract required; CON-015 governs legal classification | RETIRED on v2 ZK-enrolment swap-in (DES-095 backing switches to ZK nullifier per ADR-024/ADR-025; one-person-one-vote guarantee becomes true by construction; phone_hash and subject_id_hash storage eliminated) | Y |
| FR-133 | v1 spam-resistance layer — flag-don't-block (DES-099); scope: spam layer only, not the FR-123 counting gate | Must | IN-v1 | VoIP/virtual-number intelligence + velocity/device anti-fraud; flagged numbers rate-limited, not hard-blocked; false-positive path first-class; flag events restricted-class; scope explicitly excludes FR-132 counting-gate (ID check gates FR-123 counting actions; spam layer never excludes from platform membership) | Becomes defence-in-depth in v2 (ZK nullifier provides uniqueness guarantee; spam layer may be retained or retired by architect decision at v2 design increment) | N |

#### 16.3.2 Non-Functional Requirements (NFR-001..NFR-028)

| ID | Category | Priority | Disposition | v1 form | v2 form | H? |
|----|----------|----------|-------------|---------|---------|-----|
| NFR-001 | Privacy: no actor determines party membership or vote | Must | PARTIAL | Platform API does not expose member↔party or vote direction; DB operator CAN determine these by direct DB access; ε-advantage guarantee NOT met in v1 | ZK: no mapping exists; ε-advantage guarantee met by construction | Y |
| NFR-002 | Anonymity set floor k≥1000 | Must | PARTIAL | Aggregate-only publication with k threshold enforced; DB operator can see individual-level data; indistinguishability within anonymity set NOT technically guaranteed | ZK: indistinguishability within k-anonymity set technically enforced | Y |
| NFR-003 | Coercion resistance / receipt-freeness (PPT security) | Must | DEFERRED-v2 | — | MACI receipt-free ballot; PPT adversary with λ≥128 bits cannot distinguish vote; re-vote indistinguishable | Y |
| NFR-004 | Sybil resistance: ≤0.1% duplicates, ≤50% attestor share | Must | IN-v1 | Conventional duplicate rate audited quarterly; attestor concentration cap enforced by adapter; `subject_id_hash` same-document deduplication (DES-100) improves Sybil resistance over phone-only — same-document multi-counting-account vector is closed (v2.12.0: deduplication applies at counting-verification, not at account creation — an unverified open-tier account exists before ID check completes; the deduplication blocks two counting accounts from the same document, not two platform accounts); multiple-legitimate-IDs vector remains (disclosed in H-15, H-18) | Same; ZK adds on-chain nullifier uniqueness guarantee | N |
| NFR-005 | Cost: median < USD 0.01; citizen charged USD 0.00 | Must | IN-v1 | Same cost targets; ZK proving excluded from v1 | Same | N |
| NFR-006 | Performance on reference device | Must | IN-v1 | Same targets; no ZK proving latency in v1 | Same | N |
| NFR-007 | Reliability / availability SLOs | Must | IN-v1 | Same SLOs | Same | N |
| NFR-008 | Scalability / capacity | Should | IN-v1 | Same targets | Same | N |
| NFR-009 | Security audit: zero open critical/high at Gate 2 | Must | IN-v1 | Audits required in both; v1 audit scope excludes ZK circuits and ceremony | Same; broader scope in v2 covers ZK circuits and trusted setup | N |
| NFR-010 | Data minimisation by construction | Must | IN-v1 | No identity on public record or governance-path stores; restricted stores enumerated in §7 (v1 note: `phone_hash` and `subject_id_hash` are restricted-class credential storage under the DES-100 allowlist — enumerated in §7 carve-out; see FR-003 partial, FR-132; CON-015 governs legal classification of these fields) | Same | N |
| NFR-011 | Accessibility: WCAG 2.2 AA | Must | IN-v1 | Same in both; FR-131 notice also WCAG AA per DES-081 | Same | N |
| NFR-012 | Portability: reference device / bandwidth floor | Must | IN-v1 | Same floor; v1 omits ZK proving from install and latency budget | Same | N |
| NFR-013 | Localisation: 8 launch languages | Must | IN-v1 | Same in both | Same | N |
| NFR-014 | Censorship resistance: ≥2 independent access paths | Must | IN-v1 | Same in both | Same | N |
| NFR-015 | Compliance / legal: erasure by design, legal review | Must | IN-v1 | Legal review per jurisdiction required in both; erasure-by-design posture same | Same | N |
| NFR-016 | Key recovery: ≥99% success, ≤0.01% fraud | Must | IN-v1 | Same SLOs in both | Same | N |
| NFR-017 | Upgradeability without unilateral control | Must | IN-v1 | Governed upgrades with timelock in both | Same | N |
| NFR-018 | (party export / exit rights) | Should | IN-v1 | Same in both | Same | N |
| NFR-019 | (operational transparency reporting) | Should | IN-v1 | Same in both | Same | N |
| NFR-020 | Rollback: 15-minute restore | Must | IN-v1 | Same in both | Same | N |
| NFR-021 | Open source and reproducible builds | Must | IN-v1 | Same in both | Same | N |
| NFR-022 | Usability: ≥80% unaided completion, SUS ≥75 | Must | IN-v1 | Same targets | Same | N |
| NFR-023 | Content: grade-8 reading level, no jargon | Must | IN-v1 | Same; v1 also avoids ZK jargon in primary flows | Same | N |
| NFR-024 | Anti-harassment: no identity exposure, mechanical metric | Must | PARTIAL | Policy constraint: platform API does not expose identity; DB operator can access data that could enable targeted harassment | ZK anonymity: even aggregate extraction is privacy-preserving; no individual-level data exists | Y |
| NFR-025 | Operator cannot censor individual within 60 min | Must | IN-v1 | Alternative inclusion paths required | Same | N |
| NFR-026 | (accessibility reporting / other) | Should | IN-v1 | Same in both | Same | N |
| NFR-027 | No per-user behavioural telemetry | Must | IN-v1 | No telemetry in both; UT-0525/UT-0740 absence tests | Same | N |
| NFR-028 | Append-only data lifecycle | Must | IN-v1 | DB append-only constraints; confidential-class carve-out (OI-16) | Same | N |

**Tally — FRs (FR-001..FR-133, excluding superseded):** 131 active FRs classified: **IN-v1 107** · **PARTIAL 20** · **DEFERRED-v2 4** · **SUPERSEDED-n/a 2** (FR-046, FR-062).

**Tally — NFRs (NFR-001..NFR-028):** 28 NFRs classified: **IN-v1 24** · **PARTIAL 3** · **DEFERRED-v2 1**.

### 16.4 Honesty register for the v1 README

The following guarantees are ones that v1 users might reasonably assume the transparent party platform provides. Each item that v1 DOES NOT provide MUST be stated plainly in the v1 README, in the onboarding documentation, and — for items marked in FR-131 — in the UI at the point of action. These are disclosures, not bugs.

| ID | Guarantee v1 users might assume | v1 reality | Deferred FRs / NFRs | Architect tensions |
|----|-------------------------------|------------|--------------------|--------------------|
| H-01 | **Votes are secret ballots** | v1 voting is conventionally authenticated. The platform database records vote direction linked to the member's account. The platform API does not expose this, but the database operator CAN determine who voted how. This is disclosed via FR-131 (DES-098) at every ballot. | FR-030, FR-031, FR-032 (partial), NFR-003 | T-02, T-04 |
| H-02 | **Party membership is anonymous** | v1 has a database. The operator database links member accounts to parties. FR-082 (Supporter unconditional anonymity) and FR-086 (prior Supporter-period activity permanently anonymous) cannot be technically satisfied in v1; the "membership list the v2 design exists to make impossible" DOES exist in v1 as database records. | FR-082, FR-086, NFR-001, NFR-002 | T-01, T-03 |
| H-03 | **No receipt-freeness; no coercion resistance** | There is no coercion-resistant re-vote in v1. A coercer with access to a voter's session or device after the fact CAN determine how they voted. Re-voting (last-ballot-counts, FR-032 partial form) overwrites the DB record but the original choice may be recoverable from logs or direct DB access. NFR-003 (PPT security parameter λ≥128 bits) is not met. | FR-031, FR-032 (partial), NFR-003 | T-04 |
| H-04 | **Cryptographic subpoena-proofness** | FR-128's "we do not have it" subpoena test is a v2-only property. In v1, the operator holds member↔party mapping and vote direction in a conventional database and CAN be legally compelled to disclose them. v1's posture is "we do not store identity documents" — not "we cannot disclose membership or vote direction." | FR-128, NFR-001 | T-02 |
| H-05 | **Tallies are independently verifiable without trusting the operator** | In v1, tally result hashes are published to the on-chain audit contract (FR-033 partial form, FR-054, DES-097). Verifying the tally requires trusting that the SQL COUNT aggregate matches the DB state — the operator is the source of truth. In v2, MACI ZK tally proofs are independently verifiable by anyone from public data alone without trusting the operator. | FR-033 (partial) | DES-097 |
| H-06 | **Anonymity set floor (k≥1000) is technically enforced** | NFR-002's k≥1000 indistinguishability guarantee is a PARTIAL in v1. The platform enforces aggregate-only publication (actions withheld until k actors present), but the underlying DB holds individual-level associations that make the mathematical indistinguishability guarantee (not just policy) unachievable in v1. | NFR-002 | T-01 |
| H-07 | **Cross-scope activity is unlinkable** | In v1 the same account is used across party, petition, and governance scopes. The DB operator CAN correlate a member's activity across those scopes via the common account record. v2 ZK nullifiers are derived per-scope, making cross-scope linkage mathematically impossible. | FR-002 (partial) | T-01, T-03 |
| H-08 | **Interim tallies are technically suppressed for all actors** | In v1 the platform API never serves interim tallies (policy constraint), but the DB operator CAN observe the ballot table at any time and compute a running count. v2 MACI encrypted ballots make interim tallies computationally infeasible for all actors, including the operator. | FR-034 (partial) | T-02 |
| H-09 | **Office-holder votes and member votes for the same person are mathematically unlinkable** | In v1 role-capacity votes and member votes for the same account are stored separately by policy; the DB operator CAN link them via the common account identifier. v2 ZK separate-nullifier derivation makes the linkage mathematically impossible. | FR-048 (partial) | T-02 |
| H-10 | **Account recovery reveals nothing about identity or membership** | In v1 conventional recovery (e.g. email/phone notification) is used with privacy constraints on the channel; the recovery event is associated with the account in the DB and can be correlated with membership. v2 ZK-based recovery produces no link between the recovery event and the member's nullifier. | FR-059 (partial) | T-01, T-03 |
| H-11 | **Ballot direction is unavailable even to the operator** | In v1 the platform API never exposes ballot direction (policy constraint); the DB operator CAN read individual ballot direction by direct DB access. v2 MACI encrypted ballots make ballot direction technically unavailable to all actors, including the operator. | FR-063 (partial) | T-02 |
| H-12 | **Individual conduct votes are cryptographically private** | In v1 individual conduct votes are not exposed through the platform API (policy); the DB operator CAN read individual conduct vote records. v2 ZK conduct-vote proofs make individual votes cryptographically private even from the operator. | FR-103 (partial) | T-02 |
| H-13 | **Verified status is private even from the operator** | In v1 verified status is stored in the DB and kept private by policy (API returns aggregate-only); the DB operator CAN read individual verified-status records. v2 ZK proof-of-personhood reveals only that a valid credential exists, nothing about the underlying status attribute. | FR-124 (partial) | T-01, T-03 |
| H-14 | **No individual-level identity data is available even to the operator (anti-harassment)** | In v1 the platform API does not expose identity; however individual-level data (membership, activity, verified status) exists in the DB and COULD enable targeted harassment by a malicious operator or under legal compulsion. v2 ZK anonymity means no individual-level data exists anywhere in the system. | NFR-024 (partial) | T-01, T-03 |
| H-15 | **v1 guarantees one-person-one-vote** | v1 phone+ID check with `subject_id_hash` same-document deduplication is a significant improvement over phone-only: the same government ID cannot create two counting accounts. However, one-person-one-vote is NOT guaranteed: a person holding multiple legitimate government IDs (e.g. multiple passports, dual nationals) CAN still hold multiple counting accounts in v1. The one-person-one-vote guarantee requires the v2 ZK nullifier enrolment to be swapped in (ADR-024/ADR-025/DES-095). The FR-131 honesty notice (DES-098) and FR-132 §(d) both require this improved-but-not-closed caveat to be stated explicitly in the UI and all product materials. Charter Rule 1 (one human, one vote) is IMPROVED but NOT technically enforced in v1 — see T-06 (ACCEPTED — DEFERRED WITH DISCLOSURE, Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3; `getProperties().onePersonOneVote = false` unchanged; multiple-legitimate-IDs vector remains; same-document deduplication materially improves Sybil resistance; per Doc 03 v2.5.1 (Approved) §10.13.7). | FR-132 | T-06 |
| H-16 | **v1 stores no identity data (no identity at rest)** | v1 stores `phone_hash` (HMAC-SHA-256/KMS-pepper of the phone number) and `subject_id_hash` (HMAC-SHA-256/KMS-pepper of the government-ID subject ID) as restricted-class credential fields. Hashed storage is a significant improvement over plaintext storage of the phone number (previous v1 posture) and over storing any reversible document data. However, both hashes ARE derived identity data — they are one-way-transformed references to real identity attributes. They are restricted-class (never on the public record, never in governance-path stores) but they EXIST in the v1 operator database. The v2 ZK design eliminates both hashes entirely. FR-003 is reclassified PARTIAL for this reason — see T-07 (RESHAPED status per Doc 03 v2.5.1 (Approved) §10.13.7). | FR-003 (partial) | T-07 |
| H-17 | **The ID-check vendor sees no document data** | The ID-check provider (third-party vendor) sees the government-ID document during the verification session. Even with a verify-and-discard design and a contractual no-retention clause, the platform relies on the vendor honouring that contract. The vendor non-retention clause (FR-132 §(e)) is a legal and contractual control, not a technical guarantee. A vendor that breaches it or is subject to a separate legal obligation in its jurisdiction may retain data the platform intended to be discarded. This risk is recorded in Doc 01 §E3 and is a known v1 limitation — see DES-100 §Q-2 (Doc 03 v2.5.1 (Approved) §10.13.9). | FR-132 | — |
| H-18 | **v1 retains no derived identifier for the government ID** | `subject_id_hash` (HMAC-SHA-256/KMS-pepper of the government-ID subject ID) is retained in v1 as the deduplication key. It is a derived identifier — not the raw subject ID, but a hash that is stable across time for the same document. It cannot be reversed to the original subject ID without the KMS-managed pepper, but it IS linkable: if the same document is used in two enrolment attempts, the hashes match and the duplicate is detected. The existence of `subject_id_hash` in the operator database deepens the identity surface compared to phone-only v1. CON-015 governs whether this constitutes personal data under India's DPDP Act, Aadhaar Act 2016, and GDPR, and what retention and access controls are required. | FR-132, FR-003 (partial) | T-07 |
| H-19 | **A person without a government ID is excluded from vote-counting, not from the platform** _(v2.12.0 correction, Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md)_ | In v1, a person without an accepted government-ID document cannot take COUNTING actions (FR-123): they cannot contribute to a party's official strength number, cast a vote that counts in a binding decision, or stand as a candidate. Open-tier participation (FR-122) remains fully available with phone verification alone — they may create an account, join a party, read, discuss, support, and organise. The honesty notice (FR-131 clause (d)) MUST state these limitations and the path to counting membership at the point of a blocked counting action. This exclusion from counting is a real limitation on a political platform: people who are most underserved by the existing political system — refugees, stateless persons, people with expired documents, undocumented persons — are the same population most likely to lack a valid government ID and the same population the platform's stated mission (Doc 01) is designed to serve. A person in this situation is NOT excluded from the platform (BR-003/FR-020 hold unamended) but IS excluded from a permanent counting class: they cannot have their party membership counted toward official strength, and their votes do not count in binding decisions. This is a meaningful limitation on political participation. It is analogous to — though narrower than — the ADR-016 Aadhaar exclusion recorded for Phase-1 single-rail deployment. v2 ZK enrolment (FR-069, ADR-016/FR-121 Phase-1 → Phase-2 sequence) is the commitment to a more inclusive path to COUNTING membership. The §16.5 contradiction row "Government-ID eligibility gate vs BR-003/FR-020" is RESOLVED (Rathish, 2026-08-24): the gate applies to COUNTING only; BR-003 and FR-020 hold. | FR-132, FR-123 | §16.5 RESOLVED |

### 16.5 Contradiction surface — for approver decision, not reconciled

The following existing Must / BR / NFR / Charter-tenet statements in this document and the broader project record are directly contradicted by the v1/v2 delivery split directed by the approver (Rathish, 2026-08-23). These contradictions are surfaced for the approver's decision and are recorded here in full. They are NOT reconciled silently.

**Standing statement:** Requirements in the DEFERRED-v2 or PARTIAL rows of §16.3 remain **Must FOR DEFINITION B**. They are NOT weakened, removed, or demoted. They are phased. Definition-A (v1) products are governed by FR-131 (the honesty notice) and the v1 README (§16.4) rather than by the deferred requirements — which is the approver's stated intent. The architect's seam design (DES-095, DES-096) ensures v2 fulfils them without a rewrite.

| ID | What it says | What the split does to it | Status |
|----|-------------|--------------------------|--------|
| BR-009 | "Proving personhood and residency MUST NOT expose a member's real-world identity or make them targetable; candidates for office publicly disclose identity by explicit choice." Success measure: "0 confirmed deanonymisations of an ordinary member." | In v1, the operator DB links member account to party membership. An operator-side breach or legal compulsion could expose party membership of ordinary members (Supporters). The "0 confirmed deanonymisations" success measure is aspirational in v1, not technically enforced. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): deferred-with-disclosure accepted; v1 ships as a disclosed non-anonymous product under FR-131 + §16.4. |
| BR-011 | "Voting MUST be receipt-free and coercion-resistant: a voter MUST be unable to prove to a third party how they voted, and MUST be able to invisibly override a coerced vote." Success measure: "(a) Adversarial audit... finds no receipt construction; (b) 0 externally detectable override events." | Neither (a) nor (b) can be technically satisfied in v1. The v1 DB holds vote direction linked to member account; re-voting (FR-032 partial) is visible in operator logs. This is the exact property BR-011 was written to prevent. Cite: T-04. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): deferral-with-disclosure (FR-131 + §16.4) accepted for v1; BR-011/NFR-003 remain named absolutes for Definition B. |
| NFR-001 | "no actor... can determine which party a given person belongs to, or how they voted, from any data the system holds, emits or logs... 0 confirmed linkages at advantage > ε over random guessing." | In v1 the DB operator CAN determine both. The ε-advantage guarantee cannot be met. The normative text of NFR-001 (a Must) is technically unsatisfiable in a v1 conventional-auth deployment. Cite: T-01, T-03. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): v1 ships as a disclosed non-anonymous product; NFR-001 remains Must for Definition B. |
| NFR-002 | "Every published action MUST be indistinguishable among at least k=1,000 eligible actors." | v1 enforces aggregate-only publication (k threshold on the API); the k=1,000 mathematical indistinguishability guarantee is not technically enforced (DB holds individual-level data). Cite: T-01. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): same; NFR-002 remains Must for Definition B. |
| NFR-003 | "Voting MUST be receipt-free: no PPT adversary... can distinguish the voter's actual choice from any other admissible choice with advantage greater than negligible in λ." | NFR-003 is technically unsatisfiable in v1 (no MACI, no ZK ballot). This is a Must in the current document. Cite: T-04. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): deferral-with-disclosure accepted; NFR-003 remains a named absolute for Definition B per FR-119. |
| FR-030 | Must. "Ensure that no information derivable from the public record can link a given member's nullifier to their ballot in a specific election." | FR-030 is DEFERRED-v2. In v1, the DB holds vote direction linked to member account. This Must requirement cannot be satisfied in v1. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): DEFERRED-v2 Musts (FR-030, FR-031, FR-082, FR-086) confirmed as Definition-B-only. |
| FR-031 | Must. "Ensure that receipt-free ballots are used, such that no PPT adversary can construct a receipt." | FR-031 is DEFERRED-v2. In v1 there is no ZK ballot and no MACI; this Must cannot be satisfied. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): Definition-B-only. |
| FR-082 | Must. "Supporter: unconditionally anonymous; no profile surface exists for a Supporter." | FR-082 is DEFERRED-v2. In v1, the operator DB links member account to party. A Supporter's party membership IS knowable by the operator and is NOT unconditionally anonymous. Cite: T-01, T-03. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): Definition-B-only. |
| FR-128 | Must. "No stored identity... subpoena test as the acceptance criterion... the platform is technically unable to produce any identity-to-member mapping." | FR-128 is PARTIAL. In v1, the "technically unable to comply" part fails: the operator holds member↔party mapping and vote direction in a conventional DB and CAN be compelled to produce it. The "no stored identity documents" part holds. Cite: T-02. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): subpoena test deferred in full to v2; v1 posture is "no stored identity documents" only. |
| Doc 01 §C kill-criterion metrics | Kill criteria include "zero deanonymisation events" and Doc 01 §C references "receipt-free override" metrics. | In a v1 deployment with conventional auth, "zero deanonymisation events" is a policy aspiration (platform does not expose) rather than a technical guarantee (operator cannot expose). The kill criterion reads against the technical guarantee; in v1 it applies only to platform-initiated exposure, not operator-side access. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): v1 kill criterion applies to platform-initiated exposure only; disclosed under FR-131 + §16.4. |
| Doc 13 §3.1 recorded argument | The project plan records: "a production rollout with MACI OFF is a product the Doc 02 Must set does not permit" (as the basis for Gate-2 sequencing before Phase-3 launch). | The v1/v2 split directed by the approver (2026-08-23) supersedes this constraint at the approver's direction. The PM re-plans Doc 13 as a separate session deliverable. Cite: This record is not editing Doc 13 — the PM does that. | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4): v1/v2 split accepted; PM to re-plan Doc 13. |
| Charter Rule 6 — anonymity by default (T-01) | The Charter layer records anonymity by default as an entrenched value. | In v1, the conventional DB links account to party; operator can comply with a subpoena; anonymity by default is not technically enforced. Architect tension T-01 in Doc 03 §10.13.7 documents this conflict. Does the approver accept v1 as a disclosed non-anonymous product? | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4; Doc 03 v2.5.1 (Approved) §10.13.7 T-01 CONFIRMED): v1 accepted as a disclosed non-anonymous product under FR-131 + §16.4. |
| Charter Rule 3 — no privileged role over outcomes (T-05) | The Charter layer records that no party holds a privileged role over outcomes. | In v1, the platform operator's database IS the source of truth for vote tallies; tamper-evidence (on-chain hash) is detectable but not tamper-prevention. The operator can in principle alter the DB before publishing the hash. MACI in v2 eliminates this. Architect tension T-05 in Doc 03 §10.13.7 documents this conflict. Is Charter Rule 3 accepted as a v2-only property? | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4; Doc 03 v2.5.1 (Approved) §10.13.7 T-05 CONFIRMED): Charter Rule 3 accepted as v2-only property for the operator-cannot-alter guarantee; tamper-evidence (on-chain hash) is the v1 form. |
| FR-128 subpoena test — Charter tension (T-02) | FR-128 states the platform is "technically unable" to comply with a member-list subpoena. In v1 the operator CAN comply. Architect tension T-02 in Doc 03 §10.13.7 documents this. | Is the subpoena test deferred in full to v2? | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4; Doc 03 v2.5.1 (Approved) §10.13.7 T-02 CONFIRMED): subpoena test deferred in full to v2. |
| BR-009/FR-082 anonymity guarantee (T-03) | FR-082 and BR-009 state anonymity for Supporters unconditionally. In v1 the DB holds member↔party. Architect tension T-03 in Doc 03 §10.13.7. | Are FR-082 and BR-009 accepted as v2-only properties whose v1 equivalent is "policy + honest disclosure"? | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4; Doc 03 v2.5.1 (Approved) §10.13.7 T-03 CONFIRMED): FR-082 and BR-009 accepted as v2-only technical guarantees; v1 equivalent is policy + FR-131 honest disclosure. |
| NFR-003 receipt-freeness — named absolute in the Guarded Layer (T-04) | NFR-003 is a Guarded-Layer named absolute (BR-011, amendable only via the Doc 03 super-process per FR-119). It cannot be waived in v1 unilaterally. Architect tension T-04 in Doc 03 §10.13.7. | Is deferral-with-disclosure (FR-131 + §16.4) acceptable for v1, with NFR-003 remaining a named absolute for Definition B? | **CONFIRMED** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4; Doc 03 v2.5.1 (Approved) §10.13.7 T-04 CONFIRMED): deferral-with-disclosure accepted; NFR-003 remains a named absolute for Definition B. |

| Charter Rule 1 — one human, one vote (T-06) | The Charter layer records one human, one vote as a foundational guarantee of the platform (cited in BR-006 success measure). | v1 phone+ID check with `subject_id_hash` same-document deduplication IMPROVES Charter Rule 1 enforcement compared to phone-only v1: the same government ID cannot create two counting accounts. However, the charter guarantee is NOT technically enforced: a person with multiple legitimate government IDs can still hold multiple counting accounts. The one-person-one-vote guarantee requires the v2 ZK nullifier enrolment (ADR-024/ADR-025/DES-095). FR-132 §(d) and H-15 require the improved-but-not-closed status to be disclosed. Cite: DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §2; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3; Doc 03 v2.5.1 (Approved) §10.13.7 T-06. | **T-06 ACCEPTED — DEFERRED WITH DISCLOSURE** (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3; Doc 03 v2.5.1 (Approved) §10.13.7 T-06): same-document deduplication materially improves Sybil resistance; multiple-legitimate-IDs vector remains and is not closed; disclosed via H-15 and FR-132 §(d); `getProperties().onePersonOneVote = false` unchanged. |
| FR-003 identity data at rest (T-07) | FR-003 states: "no identity data stored at rest" (a Must, IN-v1). | v1 stores `phone_hash` (HMAC-SHA-256/KMS-pepper) and `subject_id_hash` (HMAC-SHA-256/KMS-pepper) as restricted-class credential fields. Hashed storage is a significant improvement over plaintext phone storage (previous v1 posture): neither hash can be reversed without the KMS-managed pepper. However, both hashes ARE derived identity data — they constitute a reshaped (not resolved) identity surface. CON-015 governs whether these constitute personal data under India's DPDP Act, Aadhaar Act 2016, and GDPR. H-16 and H-18 require explicit disclosure. Cite: DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §2; Doc 03 v2.5.1 (Approved) §10.13.7 T-07 (RESHAPED). | **T-07 RESHAPED — PENDING CON-015** (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4; Doc 03 v2.5.1 (Approved) §10.13.7 T-07; reaffirmed 2026-08-24, DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.4): hashed storage accepted; legal classification of retained fields to be resolved by CON-015 — no enrolment sprint begins until CON-015 is cleared. Unchanged from 2026-08-23. |
| FR-004 plurality vs single-vendor ID-check provider (T-08) | FR-004 requires at least two mutually independent attestors; the v1 ID-check provider is a single third-party vendor. | In v1, the government-ID document check is provided by a single vendor. This is a Phase-1 dated limitation analogous to OI-20 (single-rail Aadhaar pilot). It does not permanently violate FR-004 — the architecture (DES-095/DES-100) is provider-agnostic and swappable; Phase 2 adds a second provider. The tension is recorded as a Phase-1 single-vendor operational constraint, not a Charter-level conflict. Cite: Doc 03 v2.5.1 (Approved) §10.13.9 Q-3; ADR-025 §(e). | **T-08 ARCHITECT-RESOLVED** (Doc 03 v2.5.1 (Approved) §10.13.7 T-08; ADR-025 §(e)): Phase-1 single-vendor constraint is an operational limitation, not a permanent Charter conflict; provider-agnostic architecture maintained; Phase 2 adds second provider; no Doc 02 change required beyond this record. |
| Government-ID eligibility gate vs BR-003 / FR-020 | BR-003 states joining MUST be frictionless with no gatekeeper. FR-020 states joining MUST be open with no approval, endorsement, payment, or invitation required. | The government-ID document check (FR-132 §(b)) was previously recorded as a hard eligibility gate on joining, creating a direct tension with BR-003/FR-020. The 2026-08-24 ruling resolves this: the government-ID check is a gate on **COUNTING-tier eligibility** (FR-123 actions: official strength contribution, binding vote, candidacy), NOT on joining. BR-003 and FR-020 hold unamended and absolute — anyone may create an account, join a party, read, discuss, support and organise with phone verification alone. The exclusion is from counting, not from membership. H-19 has been corrected accordingly. | **RESOLVED** (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §3.2 and §4.5): the government-ID check gates COUNTING-tier eligibility (FR-123), never joining; BR-003 and FR-020 hold unamended; exclusion from counting is a real limitation (disclosed under H-19 and FR-131 clause (d)) but is NOT an exclusion from the platform or from membership. |

_Note on architect tensions (T-01..T-08): T-01..T-05 are documented in Doc 03 v2.5.1 (Approved) §10.13.7 / ADR-024 §(c) and are **CONFIRMED** per DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4. T-06 is **ACCEPTED — DEFERRED WITH DISCLOSURE** (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3; same-document deduplication materially improves Sybil resistance; multiple-legitimate-IDs vector stands; `getProperties().onePersonOneVote = false`). T-07 is **RESHAPED — PENDING CON-015** (hashed storage accepted; CON-015 governs legal classification; no enrolment sprint begins without it; unchanged from 2026-08-23). T-08 is **ARCHITECT-RESOLVED** (Phase-1 single-vendor operational limitation; provider-agnostic architecture maintained). The government-ID vs BR-003/FR-020 tension is **RESOLVED** (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.5): gate applies to COUNTING only; BR-003/FR-020 hold. The above contradiction-surface table cross-references tensions by ID; the architect's analysis in Doc 03 v2.5.1 (Approved) §10.13.7 is the primary source. This table does not duplicate or contradict that analysis — it applies it at the requirements level._
