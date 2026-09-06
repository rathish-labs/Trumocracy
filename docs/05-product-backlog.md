# Product Backlog — Epics / Features / Stories — Trumocracy

```
Document ID:   BKLG-TRUMOCRACY
Version:       2.5.0
Status:        Approved — 05-product-backlog-v2.5.0-business-cycle3.md (PASS 96%,
               0C/0H/0M/6L; reviewer: architect, neutral, PM-assigned). Loop trajectory
               69% → 88% → 96% across cycles 1–3. The six surviving Lows are accepted on
               this version and owed on the next touch. The standing "Gate-1 blocker: no
               passing business-mode review" is CLEARED — this is that review.
Owner:         Priya Raghunathan — Product Owner
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md v2.16.3, Approved 2026-08-30) ·
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md v2.11.2, Approved) ·
               TESTCASES-TRUMOCRACY (docs/07-test-cases-suites.md v2.4.4, Approved) ·
               RTM-TRUMOCRACY (docs/08-traceability-matrix.md v2.7.0, Approved) ·
               PR-TRUMOCRACY (docs/01-press-release-prfaq.md)
Last updated:  2026-09-01
Change:        v2.5.0 — Cycle-2 business-review rework (2026-09-01). Addresses NEW-01..NEW-09 of
               artifacts/reviews/05-product-backlog-v2.4.0-business-cycle2.md (FAIL, 88%,
               0 Critical / 2 High / 3 Medium / 4 Low; reviewer: architect, neutral). A MINOR
               bump, not the patch bump the report suggests: the review loop requires a new
               version for any Medium-or-worse finding, and this rework clears two Highs, three
               Mediums and amends a stated convention. Every finding was re-verified against the
               current file and the Approved sources before being applied; three carried a slip,
               corrected here rather than adopted (see NEW-06, NEW-02 and NEW-01 below).
               NEW-01 (High) — transcription residue deleted from §6. A raw change-spec block had
               been published between US-0087's Note and its acceptance criteria: a stray
               four-backtick fence, a horizontal rule, a "## CH-23 …" heading, a "FIND:" label, a
               second four-backtick fence and two lines of find-text. It orphaned US-0087's three
               scenarios from their story atom and put US-0088 onward under a "CH-23" heading
               instead of §6's EP-02 subsection. Deleted; US-0087 now reads header → owner line →
               Note → AC inside its single fence. The underlying edit had been applied correctly
               (US-0089 carries DES-103 and the DoD statement), so this was residue, not a missing
               change. §6 re-read end to end afterwards: no other fence damage, and a full-text
               search for "FIND:", "## CH-", "REPLACE" and four-backtick fences returns nothing
               anywhere in the document. (The report's required fix asked both to close US-0087's
               Note at the stray fence AND to re-attach the AC inside the same fence — mutually
               exclusive; the end state it specifies is what is implemented.)
               NEW-02 (High) — US-0092..US-0096 no longer state their DES status three ways. Each
               carried "Implements: FR-08x · DES-093, DES-094" and, on the next line, "Not Ready
               pending DES — FR-08x has no DES assigned yet". Both Approved sources say the DES IS
               assigned: SDD v2.11.2 records DES-093 and DES-094 as satisfying FR-082..086
               (§10.12.2/§10.12.3 and the §15 traceability rows), and Doc 08 v2.7.0 §7 states
               "Entries 73–77 (FR-082..086) reclassified from G-TRACE to G-PHASE3 — DES-093/094
               now assigned" at RTM v2.2.0. This document's own §12 agreed twice: FR-082..086 are
               absent from its list of the 33 live G-TRACE chains, and its 109 + 33 = 142 census
               only balances if these five carry a DES. The five stale Notes are replaced with the
               pattern used correctly on US-0087/US-0089/US-0100: the DES IS assigned, the note
               was stale, and what actually remains open is scope — Doc 08 records the DES as
               covering the UI display layer only, the per-FR design residue is named story by
               story from gap-log entries 73–77, and every row is G-PHASE3, not done.
               NEW-02 sweep result (the report asked for it and mis-counted the population): there
               are not 33 "has no DES assigned yet" notes but 31 — the 32nd match was the NEW-01
               residue line. Of the 31, exactly the 5 named are wrong and 26 are correct
               (FR-074, 075, 076, 078, 087, 088, 089 and FR-093..FR-111), each verified against
               §12's own list of live chains and against Doc 08 v2.7.0 §7. The 33 stories carrying
               "none (G-TRACE)" are those 26 + US-0091 (bespoke phrasing) + the 6 v2.4.0 stories
               that cite their gap-log entry directly. No sixth defect exists; the 109/33/142
               census is confirmed by count and unchanged.
               NEW-03 (Medium) — TC provenance enforced where this document's own rule required it.
               §6's rule reads "Doc 07 wins where the two disagree", and Doc 07 v2.4.4 §5.3 heads
               TC-3470..TC-3476 to US-0132, TC-3477..TC-3481 to US-0133 and TC-3482..TC-3487 to
               US-0134 — row by row, each "Verifies" cell naming one story. US-0134's TC-3476 and
               TC-3481 are dropped and the observation kept in its Note. Sweeping §6 for the same
               defect, as the report instructed, found a second cluster it had not: US-0092..US-0096
               claimed TC-3470, TC-3471, TC-3472, TC-3474 (five times) and TC-3476 — every one of
               which Doc 07 heads to US-0132 alone. All seven claims are dropped and recorded in
               each story's Note as an RTM-row observation. No evidence is lost: the cases remain
               on US-0132, which sits on the same Doc 08 FR row, and each of the five keeps its own
               case (TC-3408..TC-3412), so §12's "132 of 142 carry at least one TC" is unchanged.
               US-0134's SCR-13/SCR-14 is marked "(§7 prov.)" because Doc 08 v2.7.0 §3.1 records
               FR-131's SCR as none. The double-assignment observation is routed to the tester
               alongside TC-3555.
               NEW-04 (Medium) — the SCR convention is narrowed, and the census corrected. (a) The
               v2.4.0 entry claimed "78 carry an SCR"; the verified figure, counted by matching
               every "Implements:" line carrying an SCR- token, is 75 — corrected in that entry and
               recorded as a new census bullet in §12: 142 stories = 75 carrying an SCR-##, 12
               carrying an explicit "none (…)" statement, 55 carrying no SCR segment. The DES
               census (109/33) and TC census (132/10) were re-counted and are exact. (b) §6's rule
               said the field "never blanks", and 55 stories blanked it — the document stated one
               rule and followed another. RESOLUTION: the rule is narrowed, not the 55 stories
               annotated. "Never blanks" stays categorical for DES and TC — the two fields that
               close a traceability chain, where a blank could be read as "not yet checked" — and
               SCR becomes an explicitly conditional segment whose absence is DEFINED as "this
               document claims no screen for this story", carrying a named maintenance obligation:
               any story whose FR carries an SCR in Doc 08 §3.1/§3.2 MUST carry the segment, and a
               silent story against a recorded screen is a defect the tester's RTM reconciliation
               catches. Chosen because the anti-fabrication purpose of the rule is fully served by
               DES and TC; because 55 restatements of "no screen" carry no information; and because
               this very cycle is repairing a High severity defect CAUSED by transcription, so
               trading one edit for 55 is a poor bet. The 12 explicit statements already in place
               are correct and are kept.
               NEW-05 (Medium) — the RTM's DoD figure is quoted as the RTM states it. US-0021's
               Note said "the RTM's current figure of 17 of 142"; Doc 08 v2.7.0 §6 says "The
               current figure is 17 of 134" and its dashboard row reads 134/134/17/117. The clause
               now quotes 17 of 134 and derives the rest explicitly. Grepped for other places a
               derived denominator is attributed upstream: this was the only one — §11 already
               stated it correctly, and §12's 109-of-142 and 132-of-142 are this document's own
               denominators, correctly used.
               NEW-06 (Low) — cross-cycle review-ID collisions closed by convention. Six cycles
               each numbered findings from 1, so a bare "ISS-07" has meant four different things
               and a reader following a citation landed on the wrong finding about half the time.
               A citation convention is stated once in §12 — "<ID> @ v<version>-c<cycle>" — and
               every in-line citation in the body is qualified: ISS-09/ISS-01/ISS-08/ISS-10/ISS-11/
               ISS-13/ISS-05 @ v2.3.0-c1, ISS-06/ISS-07/ISS-08/ISS-10 @ v1.1.0-c1, ISS-D @
               v1.1.1-c2. Cycle-2 findings keep the reviewer's own NEW-nn prefix, which collides
               with nothing. (Location correction: the report placed the stray ISS-06 citation at
               "§6 US-0076 (L2172)"; it is at §4, EP-07's outcome hypothesis. The finding stands;
               the anchor moved.)
               NEW-07 (Low) — the point total is stated exactly. §9 said "approximately 880
               points"; summing every Points: field gives 875 (23 at 3 · 67 at 5 · 41 at 8 · 11 at
               13; 23+67+41+11 = 142, so every story is accounted for). The v2.4.0 delta of +44 was
               exact; the 5-point drift is inherited from the v2.0.0 catch-up line, recorded as
               "approximately 313" at preliminary estimates against a chain that reconciles at 308.
               §9 now states the counted total, the distribution it is counted from, and the
               reconciling chain — with the honest caveat that only the 875 is counted; the
               historical intermediates are pinned, not recounted.
               NEW-08 (Low) — a fifth source disagreement is routed rather than left silent. §7's
               correction asserted "two Approved documents agree" on SCR-22/SCR-23, which is true
               of SDD v2.11.2 §5.2 and Doc 08 v2.7.0 §3.1 — but SDD §10.12.4 and §10.12.2 carry the
               INVERSE, so the SDD disagrees with itself and this document is downstream of the
               disagreement. Added to §7's preamble and to §12's routed-disagreements paragraph,
               which now names three locally and cross-refers to the canonical five-item register
               below. → architect (with tester).
               NEW-09 (Low) — US-0014 and US-0015 no longer pin their status to Doc 08 v1.1.0.
               Both now carry the two-clause ISS-12 pattern with the v2.7.0 pin. The two are NOT
               given the same second clause: Doc 08 v2.7.0 §6 lists US-0015 among the Partial
               stories and does NOT list US-0014, so their story-level statuses genuinely differ
               and are stated separately.
               B5/B1 residual (carried at both cycles, "no kill criteria at epic or story level") —
               answered explicitly rather than left silent: kill criteria exist and are owned
               elsewhere. Doc 01 §E2 states seven kill/pivot criteria and Doc 13 §14 tabulates them
               as KC-1..KC-7 with triggers, measurement owners and actions. §11 now says so, names
               the backlog items that instrument them (NF-08 for KC-3/KC-4, NF-01 for KC-1, NF-04
               for KC-6), and states the backlog-level consequence: if a criterion trips, the
               affected epic's stories stop rather than being re-sequenced. They are deliberately
               NOT restated here — a criterion stated twice drifts.
               Routed OUT of this document — canonical register (this document owns Doc 05 only;
               none of these is the product-owner's to fix, and none blocks Doc 05 from passing,
               because Doc 05 takes the conservative reading in every case):
               (a) Doc 08 v2.7.0 §3.3 still classes FR-050 as Should — that row must move to §3.1
               as a gating Must row; (b) Doc 08 v2.7.0 §3.2 records NFR-007 as having no
               implementing backlog item, though §8 NF-09 has implemented it since v1.1.1 and its
               G-TRACE tag should retire; (c) TC-3555 is double-assigned — Doc 07 v2.4.4 §5.6 heads
               TC-3552..TC-3555 to FR-091 / US-0101 while Doc 08 §3.1 also lists TC-3555 under
               FR-122 (US-0133) — and, added at v2.5.0, the same double-assignment condition holds
               for TC-3470..TC-3476 and TC-3481, which Doc 08 associates with FR-082..086 / FR-131
               rows whose US cells name a second story while Doc 07 heads each case to one;
               (d) SDD v2.11.2 §5.2 lists FR-075 in DES-102's Satisfies while Doc 08 v2.7.0 §3.1
               records FR-075's DES as none; (e) SDD v2.11.2 §10.12.2/§10.12.4 carry SCR-22 and
               SCR-23 inverted relative to its own §5.2 and to Doc 08 v2.7.0 §3.1 — this document
               follows §5.2 and the RTM. (a)–(c) → tester (Ji-woo Park); (d) and (e) → architect
               and tester jointly.
               Counts unchanged at v2.5.0: 12 epics · 62 features · 142 stories · 9 NF items ·
               23 screens. No story, feature, epic or ID was minted, retired or renumbered.
               v2.4.0 — Cycle-1 business-review rework (2026-08-31). Addresses ISS-01..ISS-14 of
               artifacts/reviews/05-product-backlog-v2.3.0-business-cycle1.md (FAIL, 69%,
               1 Critical / 5 High / 4 Medium / 4 Low; reviewer: architect, neutral). Every
               finding was independently re-verified against the Approved upstream documents
               before being applied; none was refuted.
               ISS-08 (Medium) — applied first, because everything else is re-derived from it:
               Source pin advanced SRS v2.13.0 → v2.16.3 (Approved); SDD v2.11.2, Doc 07 v2.4.4
               and Doc 08 v2.7.0 added to the Source block, since §6 and §12 now cite DES and TC
               IDs from all three.
               ISS-01 (Critical): the Must-FR population is 114 (SRS v2.16.3 §11), not the 101
               this document asserted against the superseded Doc 02 v2.2.0. Eight Must FRs had no
               story anywhere in the document — FR-050, FR-121, FR-125, FR-126, FR-127, FR-128,
               FR-129, FR-133 — so real coverage was 106 of 114. Eight stories minted
               (US-0135..US-0142) and four features minted (FE-059 pilot jurisdiction sequence,
               FE-060 open-tier entry spam control, FE-061 on-device proof & nullifier-only
               identity posture, FE-062 public treasury record); FR-129 added to FE-056.
               Coverage is now 114 of 114. §2 and §12 assertions restated against SRS v2.16.3.
               ISS-02 (High): §12 "Known gaps" corrected — FR-050 is Must (raised from Should,
               BR-019; SRS v2.16.3 §11) and is now storied by US-0142. The remaining four gaps
               were re-verified and are correctly classified: FR-005 Should, FR-049 Should,
               FR-052 Could, FR-053 Could.
               ISS-03 (High): US-0073's first AC scenario rewritten to the EXPLICIT-LEAVE
               semantics of the FR-064-SEMANTICS ruling (SRS v2.15.0 ruling (a), Rathish, Human
               Approver, 2026-08-29; SRS v2.16.3 §8 and §16.3.1). The superseded auto-void wording
               is annotated in place, not deleted, per the US-0054 / US-0071 house convention.
               ISS-04 (High): US-0021, US-0089, US-0090, US-0100 and US-0131 reconciled to
               Doc 08 v2.7.0 §6, which records 17 stories meeting the Definition of Done. §11
               adopts the standing convention: the RTM is the authority on DoD and this document
               mirrors it with an explicit version pin, so drift is visible on the next bump.
               ISS-05 (High): the four false "no TC-#### minted" statements corrected against
               Doc 07 v2.4.4 §5.3 — TS-SCAFFOLD is TC-3470..TC-3488 (19 cases; 16 Pass (obs.)
               dated 2026-08-25; 3 Blocked: TC-3476, TC-3481, TC-3487). §12's TC list extended
               past TC-3516 with TS-MEMBERSHIP (TC-3517..TC-3540) and TS-PROPOSALS
               (TC-3542..TC-3563), and the false blanket line "TC-#### links: not yet assigned"
               replaced.
               ISS-06 (High): the template §6 story atom is populated on all 142 stories —
               Implements: FR · DES · SCR, and Verified by: TC-####. The "attached after Design"
               deferral has expired (SDD v2.11.2 and Doc 07 v2.4.4 are both Approved) and is
               replaced by an explicit link-provenance convention in the preamble, §6 and §11.
               109 stories carry a DES; 33 remain "Not Ready pending DES" citing their
               Doc 08 v2.7.0 §7 gap-log chain; 75 carry an `SCR-##` and 12 more carry an explicit
               "none (…)" SCR statement; 132 carry at least one TC. No DES or TC link is claimed
               that an Approved source does not record. (v2.5.0 correction, NEW-04 @ v2.4.0-c2:
               this line read "78 carry an SCR". The verified figure is 75, counted by matching
               every `Implements:` line carrying an `SCR-` token. The DES census (109/33) and the
               TC census (132/10) were re-counted at v2.5.0 and are both exact; this was the one
               figure of the three that had drifted. Full SCR census now in §12.)
               ISS-07 (Medium): the seven stale "no DES assigned yet" notes corrected against
               SDD v2.11.2 §5.2/§15 — FR-077→DES-101 (US-0087) · FR-079→DES-103 (US-0089) ·
               FR-080→DES-103 (US-0090) · FR-090→DES-104 (US-0100) · FR-091→DES-105 (US-0101) ·
               FR-092→DES-106 (US-0102) · FR-130→DES-102 (US-0131). Correction to the review's
               shorthand: DES-103 covers BOTH FR-079 and FR-080; DES-104 covers FR-090. FR-081
               (US-0091) genuinely still has no DES and stays "Not Ready pending DES".
               ISS-09 (Medium): §1's up-trace corrected BR-001…BR-013 → BR-001…BR-021, and the
               three unreachable BRs given an epic home: BR-016 → EP-04, BR-017 → EP-09,
               BR-020 → EP-01. All 21 BRs are now reachable from an epic's Business-value line.
               ISS-10 (Medium): v1/v2 scope note added to §2 pointing at SRS §16; Definition-A /
               Definition-B posture annotated on EP-06, EP-09 and on US-0038, US-0041, US-0042,
               US-0044 (and, at mint, US-0140), each carrying the FR-131 clause (a) honesty
               obligation: in a v1 deployment voting is NOT anonymous, NOT receipt-free and NOT
               coercion-resistant.
               ISS-11 (Low): §7 preamble states that screen-level DES mapping lives in SDD §15 and
               is not duplicated here; §7 rows reconciled to the §6 mapping; and SCR-22 / SCR-23
               un-inverted — SDD v2.11.2 §5.2 and Doc 08 v2.7.0 §3.1 both record SCR-22 = debate
               scheduling and attendance (FR-066, FR-067) and SCR-23 = candidate feedback (FR-065).
               ISS-12 (Low): US-0013's self-contradictory parenthesis rewritten as two clauses.
               ISS-13 (Low): §12 coverage-assertion label advanced to v2.4.0, with the maintenance
               rule stated beside it.
               ISS-14 (Low): the "no passing business-mode review" statements qualified to the
               CURRENT version — v2.0.1 passed at cycle 2 (99%, 0C/0H/0M/0L); v2.1.0 onward are
               unreviewed; the review loop is per-version.
               Counts: §2 features 58 → 62, stories 134 → 142. §9 total 134 stories / ~836 points
               → 142 stories / ~880 points (+44 on the US-0024 = 3 reference scale).
               Routed OUT of this document (found while reworking; I own only Doc 05):
               (a) Doc 08 v2.7.0 §3.3 still classes FR-050 as Should — that row must move to §3.1
               as a gating Must row; (b) Doc 08 v2.7.0 §3.2 records NFR-007 as having no
               implementing backlog item, but §8 NF-09 has implemented it since v1.1.1 and its
               G-TRACE tag should retire; (c) TC-3555 is double-assigned — Doc 07 v2.4.4 §5.6
               heads it to US-0101 (FR-091) while Doc 08 §3.1 also lists it under FR-122
               (US-0133); (d) SDD v2.11.2 §5.2 lists FR-075 in DES-102's Satisfies while
               Doc 08 v2.7.0 §3.1 records FR-075's DES as none. (a)–(c) → tester (Ji-woo Park);
               (d) → architect and tester jointly. This document takes the conservative reading
               in each case and claims nothing the RTM denies.
               v2.3.0 — Party-creation drop traceability update (2026-08-25).
               Existing stories updated to reflect what the Doc 06 v2.2.0 Approved drop delivers:
               US-0011/0013/0021/0022/0087/0131 → Status: Partial (service+UI layer complete,
               IS_INSECURE_MOCK=true; production store pending DES-097 wiring; DoD not satisfied).
               US-0014/0015/0024 → additional UT evidence noted (protocol+sdk+web drop).
               No new stories minted — every flow component has an existing home. Gate-1 blocker
               remains: no passing business-mode review exists for the CURRENT version; full review
               owed before Gate-1 presentation. (v2.4.0 correction, ISS-14: as written this was
               inaccurate — artifacts/reviews/05-product-backlog-v2.0.1-business-cycle2.md is a
               PASS at 99%, 0C/0H/0M/0L. The review loop is per-version: v2.0.1 passed; v2.1.0,
               v2.2.0 and v2.3.0 were unreviewed until the v2.3.0 cycle-1 review of 2026-08-31.)
               UT coverage: protocol UT-0060..0086 · sdk UT-0780..0818 · web UT-0841..0857
               (all confirmed green, Doc 06 v2.2.0 Approved).
               TC ranges minted: TC-3489..TC-3516 (TS-PARTY, Doc 07 v2.2.2).
               v2.2.0 — Scaffold traceability gap closed (Rathish directive, 2026-08-25).
               Three backing stories minted for the design-system code drop (commit 5320342 +
               session fix): US-0132 (FE-040 · EP-09, DES-093 token set + DES-094 PrivacyStatus,
               FR-082..086 / FR-124 / FR-131); US-0133 (new FE-057 · EP-01, IEligibilityVerifier
               seam, FR-122 / FR-123 / FR-132, ADR-024/025); US-0134 (new FE-058 · EP-06,
               IBallotService seam, FR-131 / BR-005, DES-096, ADR-024). All three Status:
               Partial — built and tested (UT-0750..0758 UI; UT-0760..0779 SDK seams); not
               screen-wired; RTM rows OPEN; DoD not satisfied. Two new features minted: FE-057
               (EP-01, counting-tier access control seam), FE-058 (EP-06, ballot service seam).
               §2 feature count: 56 → 58; story count: 131 → 134. §4 EP-01 and EP-06 feature
               lists updated. §5 FE-057/058 rows added. §9 total updated. §12 traceability
               updated; source pin updated to Doc 02 v2.13.0. NOTE: Doc 05 remains Status:
               In Review — no passing business-mode review exists for this version (v2.0.1 passed
               at cycle 2, 99%); the v2.2.0 increment awaits the owed full business review before
               Gate-1 presentation. (v2.4.0: "no passing review exists yet" qualified to
               per-version — ISS-14.)
               v2.1.0 — C-02 ruling applied (Rathish, 2026-08-22;
               artifacts/status/DECISIONS-2026-08-22-WIREFRAME-C01-C02.md). US-0131 minted
               under FE-009 (EP-03) implementing FR-130 (provisional-party membership cap,
               Must — Doc 02 v2.5.0 §4.44). SCR: SCR-06 (Petition browser & detail —
               wireframe screen 2.3). Owner: Sofia Marchetti. Priority: Must. Points: 3.
               Status: Backlog (Not Ready pending DES). TC OPEN — Phase 3. DES owed at next
               Doc 03 increment — same recorded-phasing posture as FR-121..FR-129. §2 story
               count: 130 → 131. §9 total: 130 stories / ~812 pts → 131 stories / ~815 pts.
               §12 traceability updated: FR-130→US-0131 added.
               v2.0.1 — Cycle-1 business-review rework (2026-08-11).
               Addresses ISS-01 and ISS-02 from artifacts/reviews/05-product-backlog-v2.0.0-business-cycle1.md.
               ISS-01 (Medium): Features lines in seven pre-existing §4 epic blocks updated to include features
               added by v2.0.0 — EP-01 += FE-037; EP-02 += FE-038; EP-04 += FE-039; EP-05 += FE-042;
               EP-07 += FE-043; EP-08 += FE-044; EP-09 += FE-040, FE-051, FE-053.
               ISS-02 (Low): US-0129 title corrected — "no bespoke cryptography" → "no bespoke unaudited
               cryptography" to match FR-119/CON-012 language; ACs unchanged.
               v2.0.0 — Gate 1 re-entry backlog catch-up (2026-08-11).
               Seeds US-0084..US-0130 (47 stories) implementing FR-074..FR-120 from SRS v2.2.0.
               Adds EP-11 (Party institutional life & transparency) and EP-12 (Platform governance &
               stewardship); adds FE-037..FE-056 (20 features). Supersession annotations applied to
               US-0054 (FR-046→FR-094/FR-095) and US-0071 (FR-062→FR-082..FR-086). §2 counts,
               §3 WSJF, §4 epics, §5 features, §9 estimation, and §12 traceability updated.
               Source: GATE1-DECISION-2026-08-11.md and SRS v2.2.0 (docs/02-requirements-srs.md).
               v1.1.2 — Cycle-2 business-review rework (2026-08-10).
               Addresses ISS-A..ISS-F from artifacts/reviews/05-product-backlog-v1.1.1-business-cycle2.md.
               ISS-A: EP-06 outcome hypothesis rewritten to align with Doc 02 v1.1.1 BR-011 (adversarial-audit
               properties; coercion rate as upper bound from incident reports, not operational observation);
               ISS-B: §12 Must-NFR map corrected NFR-022→US-0070 (was US-0001);
               ISS-C: §12 Must-NFR map corrected NFR-015→US-0003, SCR-01 (was US-0001, SCR-01);
               ISS-D: §2 NF item count corrected 8→9; ISS-E: §2 source pin updated to Doc 02 v1.1.1;
               ISS-F: US-0076 "Not Ready pending ISS-06" flag removed (ISS-06 resolved in v1.1.1).
               v1.1.1 — Cycle-1 business-review rework (2026-08-10).
               Addresses ISS-01..ISS-11 from artifacts/reviews/05-product-backlog-v1.1.0-business-cycle1.md.
               Key changes: NF-09 added for NFR-007 availability coverage + Must-NFR coverage map added to §12 (ISS-01);
               FR-005 removed from FE-002 Maps-to (ISS-02); FR-026 removed from SCR-10 (ISS-03); US-0007/US-0038
               ACs updated with adversary-game parameters mirroring Doc 02 v1.1.1 (ISS-04); OI-08 constants marked
               non-normative in 6 story ACs (ISS-05); EP-07 success metric and US-0076 AC aligned to FR-066 "major
               election" scope (ISS-06); story point arithmetic corrected (ISS-07); §10 cadence aligned to Doc 13 (ISS-08);
               FR-044 added to SCR-18 (ISS-09); WSJF sequencing rule stated (ISS-10); ICAO NFC scenario added to
               US-0080 (ISS-11).
               v1.1.0 — Nine-requirement change request (CR-v1.1.0) directed by Rathish 2026-08-09.
               Adds BR-013, FR-062..073; FE-029..036; US-0071..0083; SCR-21..23 (provisional).
               Source: artifacts/status/GATE1-DECISION-2026-08-09.md §7 (CR-v1.1.0).
```

> **Based on:** SAFe (Epic → Feature → Story) + Mike Cohn user-story standard. **Produced in:** Define; living through Coding & UT.
> Every story maps to the requirement(s) it implements **and carries its `DES-###`, `SCR-##` and
> `TC-####` links in the story atom**, reconciled in the RTM (Doc 08) by the tester. Design is
> complete and Approved (SDD v2.11.2) and Test Cases are Approved (Doc 07 v2.4.4), so the former
> "attached after Design" deferral **expired and is closed at v2.4.0** (ISS-06). The provenance
> rules for each link are stated once, in §6, and the authority convention in §11. **A story whose
> `DES` field reads `none (G-TRACE)` is not Ready** and says so in its Note — that is a positive
> statement about a live gap-log chain, never a blank.
> **No design decisions appear in this document.** Stories state the capability and its observable
> behaviour, never the mechanism.

---

## 1. Product goal & link to vision

**Goal.** Ship the walking skeleton of citizen-owned party formation — *enrol → draft → endorse →
threshold → activate → join → propose → vote → nominate → debate → elect → recall* — with every
non-negotiable guardrail (anonymity, sybil resistance, receipt-freeness, no-operator-discretion,
zero cost) present from the first line of code rather than retrofitted.

Traces to Doc 01 §B (customer journey) and Doc 02 `BR-001` … `BR-021`. _(ISS-09 @ v2.3.0-c1: the range read
`BR-001` … `BR-013` until v2.4.0 — eight business requirements short. SRS v2.16.3 §11 counts 21 BR,
and §4 of this document already cited BR-014, BR-015, BR-018, BR-019 and BR-021 in its epic
Business-value lines, so §1 contradicted §4. Re-checked at v2.4.0: every one of the 21 BRs is now
reachable from at least one epic's "Business value / link" line — BR-016 was added to EP-04,
BR-017 to EP-09 and BR-020 to EP-01 to close the three that were not.)_

**Walking-skeleton definition of "alive":** one verified citizen can, unaided on a low-end phone,
enrol, draft an eight-pillar party, gather endorsements from other verified residents, watch it
activate automatically at threshold, join it, propose something, vote anonymously, stand for a ward
office, complete the debate cycle, be elected, and be recalled — with a third party able to
independently reproduce every count along the way. Stories are ordered so that this becomes true as
early as possible.

## 2. Backlog structure & hierarchy

`Theme → Epic (EP-##) → Feature (FE-###) → User Story (US-####) → Task`.
Non-functional work appears as **explicit backlog items**, never as an assumption — see §8.

**Contents.** 12 epics · 62 features · 142 user stories · 9 explicit non-functional backlog items. (Counts re-verified at v2.5.0 — nothing was minted, retired or renumbered in that version.) (ISS-D @ v1.1.1-c2: count corrected from 8 to 9 after NF-09 was added at v1.1.1; v2.0.0 adds EP-11, EP-12, FE-037..FE-056, US-0084..US-0130; v2.1.0 adds US-0131; v2.2.0 adds FE-057/058, US-0132..0134; v2.4.0 adds FE-059..FE-062 and US-0135..US-0142.)

**Must-FR coverage — re-derived at v2.4.0 against SRS v2.16.3 §11 (Approved 2026-08-30).** The Must
set is **114 FRs**. This section asserted "all 101 Must FRs in Doc 02 v2.2.0" from v2.0.0 to v2.3.0;
that population was three minor versions and eight amendments out of date, and it concealed a real
gap: **eight Must FRs had no story anywhere in this document** — `FR-050` (public treasury record),
`FR-121` (pilot jurisdiction sequence), `FR-125` (open-tier invite-gating with a mandatory
non-invite fallback), `FR-126` (on-device credential processing), `FR-127` (nullifier-collision-only
duplicate detection), `FR-128` (no stored identity / the subpoena test), `FR-129` (attestor-plurality
Charter guard) and `FR-133` (v1 spam-resistance, flag-don't-block). Real coverage was **106 of 114**.
v2.4.0 mints US-0135 (FR-121) · US-0136 (FR-125) · US-0137 (FR-133) · US-0138 (FR-126) · US-0139
(FR-127) · US-0140 (FR-128) · US-0141 (FR-129) · US-0142 (FR-050), taking coverage to **114 of 114**.
FR-130 (Must) is covered by US-0131; FR-122, FR-123, FR-124, FR-131 and FR-132 (Must) by
US-0132..US-0134. Coverage is asserted in §12 and **independently verified by the tester in the RTM
(Doc 08 v2.7.0)** — this document's assertion is not itself evidence. _(ISS-01, ISS-08 @ v2.3.0-c1.)_

**v1 / v2 scope — read this before reading any epic's success metric (SRS v2.16.3 §16).** SRS
§16.1.1 defines **Definition A (v1 — transparent party platform)** and §16.1.2 **Definition B
(v2 — full cryptographic guarantees)**; §16.3.1 assigns every FR a v1 mechanism, a v2 mechanism and
an honesty flag. Several guarantees this backlog states plainly are **Definition-B (v2)** commitments
and are **not** true of a v1 deployment: FR-030 and FR-031 are classed `DEFERRED-v2`; FR-032, FR-033
and FR-126 are classed `PARTIAL`; FR-128's subpoena test is not met in v1 at all. **FR-131 clause (a)
REQUIRES a v1 deployment to state at every vote-casting surface that voting is NOT anonymous, NOT
receipt-free and NOT coercion-resistant.** EP-06 and EP-09, and stories US-0038, US-0041, US-0042,
US-0044 and US-0140, carry that posture in place. **A v1 deployment MUST NOT be reported as
satisfying a Definition-B guarantee.** _(ISS-10 @ v2.3.0-c1 — the Definition-A/B scope note; not to be confused with ISS-10 @ v1.1.0-c1, the WSJF sequencing rule cited in §3. See the citation convention in §12.)_

## 3. Prioritization framework

**MoSCoW is inherited from Doc 02 and is authoritative for scope.** Sequencing *within* Must uses a
simplified WSJF: `WSJF = (User value + Risk reduction + Time criticality) / Size`, 1–10 per term.
Guardrail epics score high on Risk reduction by construction — this is intentional, because a
guardrail retrofitted after launch is a breach, not a feature.

| Epic | User value | Risk reduction | Time criticality | Size | WSJF | Sequence |
|------|-----------|----------------|------------------|------|------|----------|
| EP-01 Verified personhood & regional eligibility | 8 | 10 | 10 | 13 | 2.15 | 1 |
| EP-02 Party drafting & the eight pillars | 9 | 3 | 8 | 5 | 4.00 | 2 |
| EP-03 Petition, threshold & activation | 10 | 8 | 9 | 8 | 3.38 | 3 |
| EP-04 Open, equal membership | 9 | 8 | 8 | 5 | 5.00 | 4 |
| EP-05 Proposals, amendment & governance stability | 8 | 10 | 7 | 8 | 3.13 | 5 |
| EP-06 Anonymous, receipt-free voting | 10 | 10 | 9 | 13 | 2.23 | 6 |
| EP-07 Localized nomination & election | 9 | 5 | 7 | 8 | 2.63 | 7 |
| EP-08 Accountability: manifestos & recall | 9 | 6 | 6 | 8 | 2.63 | 8 |
| EP-09 Public verifiability & moderation-by-code | 8 | 9 | 7 | 5 | 4.80 | 9 |
| EP-10 Zero-friction access: cost, recovery, accessibility | 10 | 7 | 9 | 8 | 3.25 | 10 |
| EP-11 Party institutional life & transparency | 8 | 9 | 7 | 13 | 1.85 | 11 |
| EP-12 Platform governance & stewardship | 9 | 10 | 8 | 13 | 2.08 | 12 |

> **Sequencing rule:** WSJF scores measure value density; the walking-skeleton dependency chain
> determines the actual start sequence and overrides WSJF where dependency order requires it (e.g.,
> EP-01 must precede EP-02 because party drafting requires personhood). _(ISS-10 @ v1.1.0-c1 — the WSJF sequencing rule; not the Definition-A/B note cited in §2, which is ISS-10 @ v2.3.0-c1.)_
>
> Sequence numbers order *epic start*, not completion. EP-09 and EP-10 are cross-cutting and their
> stories are pulled forward alongside the epics they serve — verifiability (`FR-054`) and fee
> sponsorship (`FR-060`) must be true of the very first action ever taken on the platform, not
> added in month five.

## 4. Epics

```
EP-01  Verified personhood & regional eligibility
Outcome hypothesis: We believe that proving a person is real and locally eligible WITHOUT learning
  who they are will achieve trustworthy counts with anonymous members; we'll know when the audited
  duplicate rate is <=0.1% and 0 member deanonymisations are confirmed.
Business value / link: BR-006, BR-009, BR-004, BR-020
In scope: enrolment, one-credential-per-human, per-scope action limits, cross-scope unlinkability,
  residency scope, versioned region registry, population denominators, deterministic enrolment
  nullifier, pluggable credential adapter, government eID issuer hierarchy, published pilot
  jurisdiction sequence and adapter schedule (FR-121), open-tier entry with a permanently open
  non-invite fallback (FR-125) and flag-don't-block spam resistance (FR-133), on-device credential
  processing (FR-126), nullifier-collision-only duplicate detection (FR-127), no-stored-identity
  posture / the subpoena test (FR-128).
Out of scope: any storage of identity documents; any identity issued by Trumocracy.
Success metric: <=0.1% duplicate credentials; 0 identity fields at data inventory; >=2 attestors live per region.
Features: FE-001, FE-002, FE-003, FE-004, FE-034, FE-036, FE-037, FE-057, FE-059, FE-060, FE-061
Owner: Marcus Adeyemi            Status: Backlog
```
```
EP-02  Party drafting & the eight mandatory pillars
Outcome hypothesis: We believe that letting any citizen publish a complete eight-pillar programme
  with no approval step will achieve genuine open incubation; we'll know when >=50 fully-pillared
  petitions exist in month 1 and 0 required a human approval.
Business value / link: BR-001
In scope: draft creation, name/emblem collision, eight-pillar completeness, charter amendment rules,
  offline drafting.
Out of scope: editorial judgement of political content; collaborative co-authoring.
Success metric: >=50 published petitions in month 1; 0 human approvals in the publish path.
Features: FE-005, FE-006, FE-038
Owner: Tomás Ferreira            Status: Backlog
```
```
EP-03  Petition, threshold & automatic activation
Outcome hypothesis: We believe a population-proportional, code-computed threshold will achieve
  legitimacy without a gatekeeper; we'll know when >=12 parties activate in 12 months and 100% of
  activations are independently reproducible.
Business value / link: BR-002, BR-008
In scope: endorsement, withdrawal, denominator sourcing and disputes, threshold computation, dwell
  period, automatic activation, immutable activation record, petition expiry.
Out of scope: any manual activation, waiver or appeal of a threshold.
Success metric: >=12 activations; 100% reproducible; 0 threshold overrides possible.
Features: FE-007, FE-008, FE-009
Owner: Tomás Ferreira            Status: Backlog
```
```
EP-04  Open, equal membership
Outcome hypothesis: We believe join-without-approval plus strictly equal standing will achieve the
  removal of party elites; we'll know when 0 joins require approval, 0 members hold >1 vote, and at
  least one founding drafter has been outvoted by month 12.
Business value / link: BR-003, BR-010, BR-012, BR-016
In scope: join, leave, equal standing, maturation period, churn rate limits, aggregate-only
  membership visibility, single-party-at-a-time constraint, tenure waiver for new parties
  (with anti-capture active).
Out of scope: membership tiers, dues, invitations, expulsion.
Success metric: 0 approval steps; 0 weighted votes; churn-attack simulation defeated; 0 dual-memberships.
Features: FE-010, FE-011, FE-012, FE-030, FE-033, FE-039
Owner: Grace Mbeki               Status: Backlog
```
```
EP-05  Proposals, charter amendment & governance stability
Outcome hypothesis: We believe tiered thresholds, timelocks, entrenchment and open-time eligibility
  snapshots will achieve resistance to flash takeover and mob charter capture; we'll know when both
  red-team attacks fail before Gate 2.
Business value / link: BR-008, BR-012
In scope: proposal submission, four tiers, quorum + supermajority, timelocks, entrenched clauses,
  eligibility snapshot, proposal rate limits.
Out of scope: proposal moderation or pre-screening of any kind.
Success metric: 0 successful simulated takeovers; 100% of enactments satisfy their tier's rules.
Features: FE-013, FE-014, FE-015, FE-016, FE-042
Owner: Tomás Ferreira            Status: Backlog
```
```
EP-06  Anonymous, receipt-free voting
Outcome hypothesis: We believe unlinkable ballots plus an invisible re-vote override will achieve a
  vote that cannot be bought or coerced; we'll know when (a) an independent adversarial audit (PPT
  adversary, λ ≥ 128 bits, N ≥ 10,000 ballot observations, 95% confidence) finds no receipt
  construction and no re-vote distinguisher, AND (b) the coercion incident rate is published as an
  upper bound derived from independent incident reports with a stated methodology — not as an
  operational observation rate, since re-voting is by design invisible (TD-06, FR-032).
  (ISS-A: "≥95% of reported coercion cases successfully overridden" removed; that metric is
  structurally unobservable per Doc 02 v1.1.1 BR-011(c); replaced with BR-011(a)/(b) proxies.)
Business value / link: BR-011, BR-009, BR-005
In scope: eligible anonymous casting, unlinkability, receipt-freeness, silent re-vote, results
  embargo, non-transferability, publicly reproducible tally.
Out of scope: delegation, proxy voting, individual vote verification (see TD-06).
v1 / v2 posture (SRS v2.16.3 §16.1.1, §16.1.2, §16.3.1 — added at v2.4.0, ISS-10): the guarantees in
  this epic's outcome hypothesis are **Definition-B (v2)** commitments. FR-030 and FR-031 are classed
  DEFERRED-v2; FR-032 and FR-033 are classed PARTIAL, honesty flag Y. In a **Definition-A (v1)**
  deployment voting is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**, and FR-131
  clause (a) REQUIRES every vote-casting surface to say exactly that. **This epic MUST NOT be
  reported as satisfied by a v1 deployment.**
Success metric: **v2 (Definition B):** 0 receipt constructions found in the adversarial audit;
  0 re-vote distinguishers; 100% of tallies independently reproducible.
  **v1 (Definition A):** 100% of vote-casting surfaces carry the FR-131 clause (a) notice, verbatim
  and un-suppressible; 100% of tallies independently reproducible from the published tally-hash
  (US-0134); 0 surfaces using the words "private", "anonymous", "receipt-free" or "secure" of v1
  voting behaviour.
Features: FE-017, FE-018, FE-019, FE-058
Owner: Aisha Nkemdirim           Status: Backlog
```
```
EP-07  Localized nomination & internal election
Outcome hypothesis: We believe binding candidacy and voting to where a person actually lives, and
  requiring debates before every major election (as defined in Doc 02 §14 and FR-066), will achieve
  real local representation with informed voters; we'll know when 100% of nominations are
  scope-checked, 0 out-of-region ballots are counted, and 100% of major-election ballots are preceded
  by three completed debates per candidate. _(ISS-06 @ v1.1.0-c1: aligned to FR-066 "major election" scope — this metric and US-0076's AC were corrected together. Not ISS-06 @ v2.3.0-c1, which is the story-atom link population.)_
Business value / link: BR-004, BR-009, BR-013
In scope: self-nomination scoped to region+office, nomination endorsements, informed consent to
  public identity, candidacy withdrawal, mandatory pre-election debates (three per candidate),
  post-debate member vote determining candidacy, candidate feedback scoring, election timetable
  immutability, automatic office assignment, fixed terms. No automatic renomination.
Out of scope: nomination of others; central candidate lists; appointment of any kind; automatic
  renomination of incumbents.
Success metric: 0 out-of-scope nominations or ballots accepted; 100% consented disclosures;
  100% of major-election ballots preceded by three completed debates per candidate.
Features: FE-020, FE-021, FE-022, FE-031, FE-032, FE-043
Owner: Aisha Nkemdirim           Status: Backlog
```
```
EP-08  Accountability: manifestos, records & mid-term recall
Outcome hypothesis: We believe public versioned commitments plus a real recall power will achieve
  dynamic accountability; we'll know when >=1 recall per 20 offices per year reaches a vote and
  harassment-classified initiations stay <=10%.
Business value / link: BR-005, BR-009
In scope: manifesto publication, dated commitments, immutable version history and diffs,
  office-capacity vote attribution, two-stage recall, grace/cooldown windows, automatic revocation
  and by-election.
Out of scope: performance scoring by Trumocracy; any editorial judgement of a commitment.
Success metric: 100% of versions retrievable; recall exercised at least once by month 6.
Features: FE-023, FE-024, FE-044
Owner: Erik Lindqvist            Status: Backlog
```
```
EP-09  Public verifiability & the moderation-by-code boundary
Outcome hypothesis: We believe emitting a tamper-evident record of every governance action,
  shipping an independent verifier, and making participation profiles public will achieve trust
  without trusting us; we'll know when >=25 distinct third parties reproduce tallies by month 6 and
  the security audit finds 0 privileged governance paths.
Business value / link: BR-005, BR-008, BR-009, BR-017
In scope: verifiable record emission, independent verifier, party history export, absence of
  operator override, jurisdiction-scoped display filtering with a public log, three-tier participation
  records (FR-082..FR-086, superseding FR-062), ballot-direction prohibition (FR-063), data
  classification (FR-106), append-only lifecycle (FR-107, FR-108), behavioural-analytics prohibition (FR-111).
Out of scope: content moderation of political speech; any deletion from the record.
v1 / v2 posture (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10): Supporter-tier unconditional
  anonymity (FR-082) and the tier-privacy guarantees of FE-040 are delivered in **v1** by application
  design, API contract and the FR-131 disclosure — **not** by cryptographic construction. The
  subpoena test (FR-128 / US-0140) is **not met in v1**: the operator database can be compelled to
  disclose member↔party mapping and vote direction. The un-disclosable form of these guarantees is a
  **Definition-B (v2)** commitment. Surfaces in this epic MUST carry the FR-131 disclosure rather
  than claim the v2 property.
Success metric: **v1 and v2:** 0 privileged override paths at audit; 100% of filtering actions
  publicly logged; 100% of tier-privacy surfaces carrying the FR-131 honesty notice.
  **v2 only:** 0 identity-to-member mappings producible under the subpoena test (US-0140).
Features: FE-025, FE-026, FE-029, FE-040, FE-051, FE-053
Owner: Erik Lindqvist            Status: Backlog
```
```
EP-10  Zero-friction access: cost, recovery, accessibility
Outcome hypothesis: We believe removing tokens, fees, seed phrases and jargon will achieve use by
  ordinary citizens on cheap phones; we'll know when >=80% complete enrol->endorse unaided in <=10
  minutes at SUS >=75 and citizen cost is USD 0.00 in 100% of cases.
Business value / link: BR-007
In scope: fee sponsorship and per-person budgets, degrade-by-delay, seedless recovery with timelock
  and cancellation, privacy-preserving recovery, nullifier-collision recovery (FR-071, FR-072),
  WCAG 2.2 AA, low-bandwidth and offline behaviour, i18n/RTL, plain language.
Out of scope: desktop-optimised experience; any charge to a citizen, ever.
Success metric: USD 0.00 citizen cost; >=80% unaided completion; 0 WCAG A/AA failures.
Features: FE-027, FE-028, FE-035
Owner: Hiroshi Tanaka            Status: Backlog
```
```
EP-11  Party institutional life & transparency
Outcome hypothesis: We believe that codifying deliberation bodies, financial transparency, conflict-
  of-interest regimes, independent audit, dispute resolution, member rights, and conduct votes into
  the protocol will achieve genuine accountability within parties without creating new power
  concentrations; we'll know when 0 committee decisions bypass the proposal lifecycle and 0 COI
  flagging events freeze any governance action.
Business value / link: BR-014, BR-015, BR-018, BR-019
In scope: committees (deliberation without decisional power), proposal lifecycle enhancements,
  **public itemised treasury record (FR-050, Must — added at v2.4.0)**, financial
  anomaly detection, COI disclosure and recusal, internal audit by sortition, dispute resolution with
  timelines, member rights charter, conduct votes, removal from role, expulsion (public tier only),
  transparency dashboard, performance scorecard.
Out of scope: any enforcement power for committees, panels or audit bodies; any conduct action against
  Supporter-tier participants (handled by FR-005 credential revocation); editorial scoring of parties.
Success metric: 0 committee votes that change outcomes; 0 COI flags that freeze funds; 100% of dispute
  stages completed within published timelines before Gate 2 red-team.
Features: FE-041, FE-045, FE-046, FE-047, FE-048, FE-049, FE-050, FE-052, FE-062
Owner: Ingrid Bergqvist          Status: Backlog
```
```
EP-12  Platform governance & stewardship
Outcome hypothesis: We believe that electing a steward body with strictly enumerated powers, proving
  zero citizen-flow dependency on that body, entrenching seven fork-only charter rules, and providing
  a three-tier amendment path will achieve a protocol that cannot be captured at any level; we'll
  know when the steward-vacancy simulation shows zero citizen-facing degradation and the entrenched-
  rule suite confirms all seven rules are code-rejected at submission.
Business value / link: BR-021, BR-015, BR-008
In scope: trust-anchor lifecycle governance (revocation, rotation), steward organisation (election,
  enumerated powers, prohibition, zero-dependency proof), three-tier amendment boundary, unconditional
  fork right (FR-120 design posture — fork flag still OFF above dev per §13), **attestor/issuer
  plurality Charter guard — single-issuer operation un-extendable by configuration (FR-129, Must —
  added at v2.4.0)**.
Out of scope: any steward power that can change who wins, who votes, or who is a member; any emergency
  override path for stewards or operators; any modification of the seven Tier-1 entrenched rules.
Success metric: 0 steward-dependency paths in citizen flows; 100% of Tier-1 amendment proposals
  rejected by code; steward-vacancy simulation shows zero degradation before Gate 2.
Features: FE-054, FE-055, FE-056
Owner: Rafael Duarte             Status: Backlog
```

## 5. Features

| ID | Feature (Epic) | Benefit hypothesis | Maps to | Stories | Owner |
|----|----------------|--------------------|---------|---------|-------|
| FE-001 | Personhood enrolment (EP-01) | A citizen proves they are one real human, once, without handing over documents to us | FR-001, FR-003, NFR-004, NFR-010 | US-0001–0003 | Marcus Adeyemi |
| FE-002 | Attestor plurality & concentration control (EP-01) | No single identity provider can capture or halt a region | FR-004, NFR-004 | US-0004–0005 | Marcus Adeyemi |
| FE-003 | Per-scope action limits & cross-scope unlinkability (EP-01) | One action per person per scope, with no way to join the dots between scopes | FR-002, NFR-001, NFR-002 | US-0006–0007 | Dr. Lena Kowalczyk |
| FE-004 | Residency scope & versioned region registry (EP-01) | Rights follow where you actually live, without us learning your address | FR-006, FR-007, FR-008 | US-0008–0010 | Marcus Adeyemi |
| FE-005 | Party draft creation (EP-02) | Anyone can start a party, pseudonymously, with no permission | FR-010, FR-012, NFR-012 | US-0011–0013 | Tomás Ferreira |
| FE-006 | Eight-pillar completeness gate (EP-02) | A party must be a whole programme, not a slogan | FR-011 | US-0014–0015 | Tomás Ferreira |
| FE-007 | Endorsement & withdrawal (EP-03) | Real local people, one each, back a petition — and can change their mind | FR-014, FR-015, FR-017 | US-0016–0018 | Tomás Ferreira |
| FE-008 | Denominator sourcing & threshold computation (EP-03) | The bar is arithmetic nobody can move | FR-009, FR-016, FR-013 | US-0019–0021 | Yuki Sato |
| FE-009 | Automatic activation (EP-03) | The party switches itself on; there is nobody to lobby | FR-018, FR-019 | US-0022–0023 | Tomás Ferreira |
| FE-010 | Join & leave (EP-04) | Membership without a gatekeeper, and exit without a penalty | FR-020, FR-022 | US-0024–0026 | Grace Mbeki |
| FE-011 | Equal standing (EP-04) | One member, one vote, no exceptions that anyone can create | FR-021, FR-051 | US-0027–0028 | Grace Mbeki |
| FE-012 | Maturation & churn limits (EP-04) | You cannot buy a majority overnight | FR-023 | US-0029–0030 | Rafael Duarte |
| FE-013 | Proposal submission (EP-05) | Any matured member sets the agenda, unfiltered | FR-024, FR-029 | US-0031–0032 | Tomás Ferreira |
| FE-014 | Tiered quorum & supermajority (EP-05) | Bigger changes need broader consent | FR-025 | US-0033–0034 | Tomás Ferreira |
| FE-015 | Timelocks & entrenched clauses (EP-05) | Nothing important changes fast or quietly | FR-026, FR-027 | US-0035–0036 | Rafael Duarte |
| FE-016 | Eligibility snapshot (EP-05) | Voting power cannot be acquired mid-vote | FR-028 | US-0037 | Rafael Duarte |
| FE-017 | Anonymous eligible ballot casting (EP-06) | Your vote counts and nobody knows it was yours | FR-030, FR-035, NFR-001, NFR-002 | US-0038–0040 | Dr. Lena Kowalczyk |
| FE-018 | Receipt-freeness & silent override (EP-06) | You cannot sell your vote, and you cannot be forced to keep one | FR-031, FR-032, FR-034, NFR-003 | US-0041–0043 | Aisha Nkemdirim |
| FE-019 | Publicly reproducible tally (EP-06) | Anyone can check the count without trusting us | FR-033 | US-0044–0045 | Erik Lindqvist |
| FE-020 | Self-nomination scoped to region + office (EP-07) | You stand where you live, for what you want, without asking a boss | FR-036 | US-0046–0048 | Aisha Nkemdirim |
| FE-021 | Candidate disclosure consent (EP-07) | Going public is a deliberate, informed, irreversible choice — and only candidates make it | FR-037, FR-038 | US-0049–0050 | Dr. Lena Kowalczyk |
| FE-022 | Internal election & automatic office assignment (EP-07) | The winner takes office by code, with nobody to ratify it | FR-039, FR-040, FR-041 | US-0051–0053 | Aisha Nkemdirim |
| FE-023 | Manifestos, commitments & immutable history (EP-08) | Promises are permanent and their edits are visible | FR-046, FR-047, FR-048 | US-0054–0056 | Erik Lindqvist |
| FE-024 | Two-stage mid-term recall (EP-08) | A representative who stops delivering can be removed now, not in four years | FR-042, FR-043, FR-044, FR-045 | US-0057–0060 | Aisha Nkemdirim |
| FE-025 | Verifiable record & independent verifier (EP-09) | Every action is checkable by a stranger | FR-054, FR-055, NFR-018 | US-0061–0063 | Erik Lindqvist |
| FE-026 | No-operator-discretion boundary (EP-09) | We removed our own power and you can verify it | FR-056, FR-057, NFR-017 | US-0064–0065 | Daniel Okonkwo |
| FE-027 | Fee sponsorship & no-token flows (EP-10) | It is free, and you never meet a wallet | FR-060, FR-061, NFR-005, NFR-023 | US-0066–0067 | Hiroshi Tanaka |
| FE-028 | Recovery & universal access (EP-10) | Losing your phone does not end your citizenship; a cheap phone is enough | FR-058, FR-059, NFR-011, NFR-012, NFR-013, NFR-016 | US-0068–0070 | Amara Diallo |
| FE-029 | Public participation profile (EP-09) | Your participation is visible; your votes are not — and the system proves the difference | FR-062, FR-063 | US-0071–0072 | Erik Lindqvist |
| FE-030 | Single party membership enforcement (EP-04) | One party at a time, enforced — no simultaneous memberships, no tenure arbitrage | FR-064 | US-0073 | Rafael Duarte |
| FE-031 | Candidate feedback scoring (EP-07) | Members signal quality before the ballot; downvotes are private to protect the voter | FR-065 | US-0074–0075 | Aisha Nkemdirim |
| FE-032 | Mandatory pre-election debates (EP-07) | Every candidate faces three debates; incumbency buys no automatic pass | FR-066, FR-067 | US-0076–0077 | Aisha Nkemdirim |
| FE-033 | Tenure waiver for new parties (EP-04) | New parties can mobilise without tenure gating, but anti-capture never switches off | FR-068 | US-0078 | Rafael Duarte |
| FE-034 | Deterministic enrolment nullifier (EP-01) | Duplicate detection by mathematics, not by matching names or faces | FR-069, FR-070 | US-0079–0080 | Marcus Adeyemi |
| FE-035 | Nullifier-collision recovery (EP-10) | Losing your keys does not lose your history; a stolen credential cannot take your seat | FR-071, FR-072 | US-0081–0082 | Amara Diallo |
| FE-036 | Government eID issuer hierarchy (EP-01) | One class of credential mints uniqueness; all others help but never grant new entries | FR-073 | US-0083 | Marcus Adeyemi |
| FE-037 | Country selection & legal-registration boundary (EP-01) | Rights follow the country you chose; the platform never impersonates a registration authority | FR-074, FR-075 | US-0084–0085 | Marcus Adeyemi |
| FE-038 | Party founding & the public digital constitution (EP-02) | A party must have a complete, code-verified constitution before it exists | FR-076, FR-077, FR-078 | US-0086–0088 | Tomás Ferreira |
| FE-039 | Participation tiers — self-assigned, descriptive, never permissive (EP-04) | Tiers describe what you do, not what you're worth — no tier changes voting weight | FR-079, FR-080, FR-081 | US-0089–0091 | Grace Mbeki |
| FE-040 | Three-tier privacy & tier-scoped participation record (EP-09) | Supporters are unconditionally anonymous; Workers and Candidates are public from consent; prior supporter period stays private forever | FR-082, FR-083, FR-084, FR-085, FR-086 | US-0092–0096 | Dr. Lena Kowalczyk |
| FE-041 | Committees — deliberation without decisional power (EP-11) | Committees produce only proposals that enter the ordinary lifecycle; they change nothing directly | FR-087, FR-088, FR-089, FR-090 | US-0097–0100 | Tomás Ferreira |
| FE-042 | Proposal lifecycle & permanent decision trail (EP-05) | Every decision moves through defined stages by code; the complete trail is reconstructable end-to-end | FR-091, FR-092 | US-0101–0102 | Tomás Ferreira |
| FE-043 | Candidate selection schedule (EP-07) | Nomination, questions, debates, post-debate vote and election run on a published code-enforced clock | FR-093 | US-0103 | Aisha Nkemdirim |
| FE-044 | Manifesto as measurable commitment set (EP-08) | A manifesto is structured data with baselines, targets, timelines and owners — not prose | FR-094, FR-095 | US-0104–0105 | Erik Lindqvist |
| FE-045 | Financial anomaly detection (EP-11) | Mechanical flags inform; they never freeze funds or trigger enforcement | FR-096 | US-0106 | Erik Lindqvist |
| FE-046 | Conflict-of-interest disclosure & recusal (EP-11) | Every public-tier role-taker files publicly; COI review is investigation-and-recommendation only | FR-097, FR-098 | US-0107–0108 | Ingrid Bergqvist |
| FE-047 | Independent internal audit by sortition (EP-11) | Auditors drawn per-case, never a standing body; findings inform only | FR-099 | US-0109 | Ingrid Bergqvist |
| FE-048 | Dispute resolution with defined timelines (EP-11) | Every stage has a maximum clock; breaches are themselves recorded on the decision trail | FR-100, FR-101 | US-0110–0111 | Ingrid Bergqvist |
| FE-049 | Explicit member rights charter (EP-11) | Rights are machine-readable, code-enforced, and no party charter may reduce them below the platform floor | FR-102 | US-0112 | Grace Mbeki |
| FE-050 | Conduct votes, removal & expulsion (EP-11) | Conduct votes use the same privacy mechanics as policy votes; expulsion is a higher bar, public-tier only | FR-103, FR-104, FR-105 | US-0113–0115 | Daniel Okonkwo |
| FE-051 | Data classification & append-only lifecycle (EP-09) | Every entity is public, restricted or confidential; nothing is hard-deleted; public record carries only proofs | FR-106, FR-107, FR-108 | US-0116–0118 | Dr. Lena Kowalczyk |
| FE-052 | Transparency dashboard & performance scorecard (EP-11) | Aggregate governance data; commitment progress vs evidence; factual, no editorial ranking | FR-109, FR-110 | US-0119–0120 | Yuki Sato |
| FE-053 | Behavioural-analytics prohibition (EP-09) | Zero per-user events in any store or export; analytics aggregate-only; personalisation is client-side | FR-111 | US-0121 | Dr. Lena Kowalczyk |
| FE-054 | Trust-anchor lifecycle governance (EP-12) | Revocation and rotation are member-voted governance actions; no operator path exists | FR-112, FR-113 | US-0122–0123 | Rafael Duarte |
| FE-055 | Steward organisation (EP-12) | Elected, enumerated-power-only body; zero citizen-flow dependency provable by test suite | FR-114, FR-115, FR-116, FR-117 | US-0124–0127 | Aisha Nkemdirim |
| FE-056 | Amendment boundary & unconditional fork right (EP-12) | Seven rules are fork-only; named absolutes need super-process; fork right is entrenched and always exercisable; a dated pilot compromise cannot quietly become the permanent design | FR-118, FR-119, FR-120, FR-129 | US-0128–0130, US-0141 | Rafael Duarte |
| FE-057 | Counting-tier access control seam (EP-01) | Verify once, count securely — the eligibility seam gates all counting actions on verified personhood and delivers honest refusals to open-tier participants | FR-122, FR-123, FR-132 | US-0133 | Samuel Oyelaran |
| FE-058 | Ballot service seam (EP-06) | The signed ballot contract — cast, change, and tally exposed as a verifiable seam with honest pre-action notices and a deterministic tally-hash for audit publication | FR-131; BR-005 | US-0134 | Samuel Oyelaran |
| FE-059 | Pilot jurisdiction sequence & adapter schedule (EP-01) | A citizen is only ever offered an enrolment rail their jurisdiction has actually reached; a deferred jurisdiction is told so plainly instead of failing silently | FR-121 | US-0135 | Marcus Adeyemi |
| FE-060 | Open-tier entry spam control (EP-01) | Spam control slows a suspicious signup down; it never becomes an admission condition — the non-invite door cannot be closed by any operator, and a flagged number is rate-limited, never hard-blocked | FR-125, FR-133 | US-0136–0137 | Grace Mbeki |
| FE-061 | On-device proof & nullifier-only identity posture (EP-01) | The credential is read and discarded on the phone, duplicates are caught by nullifier collision alone, and the platform holds nothing a court order could turn into a member list | FR-126, FR-127, FR-128 | US-0138–0140 | Dr. Lena Kowalczyk |
| FE-062 | Public treasury record (EP-11) | Every movement in and out of a party treasury is itemised, published and independently reproducible — financial transparency as a property of the record, not a claim by the party | FR-050 | US-0142 | Erik Lindqvist |

## 6. User stories

> Format per Doc 05 template §6: `Implements: FR-### · DES-### · SCR-##` and
> `Verified by: TC-####`. Points use a modified Fibonacci scale; the reference story is
> **US-0024 (join a party) = 3 points**. Every story carries at least one adversarial or negative
> scenario.
>
> **Link provenance (adopted at v2.4.0, ISS-06 — the "attached after Design" deferral has expired:
> SDD v2.11.2 and Doc 07 v2.4.4 are both Approved).**
> · `DES` — from **SDD v2.11.2 §5.2 / §15**, cross-checked against **Doc 08 v2.7.0 §3.1/§3.2**.
> · `SCR` — from **Doc 08 v2.7.0 §3.1/§3.2** where that table carries one. RTM §3.3 (Should/Could
>   rows) has no SCR column, so for those stories the `SCR` is this document's own §7 provisional
>   inventory and is marked `(§7 prov.)`.
> · `TC` — from **Doc 07 v2.4.4 §5.x** where its case register carries a per-story heading; the
>   RTM's per-FR `TC` cell is used only where Doc 07 does not. **Doc 07 wins where the two
>   disagree**, and it wins in the specific case that recurs: where a Doc 08 FR row names two
>   stories, a case Doc 07 heads to one of them is carried on **that** story only. The sibling
>   story records the RTM's association in its Note rather than claiming the case. The evidence is
>   not lost — it sits on the story Doc 07 names, on the same FR row.
>
> **`DES` and `TC` never blank.** Where the Approved sources record none, the field says so and
> names the reason: `none (G-TRACE)` marks a live gap-log chain in Doc 08 v2.7.0 §7 and that story
> is **Not Ready**; `none (deliberate)` and `none — no TC minted (Doc 07 v2.4.4)` are positive
> statements, not omissions. These are the two fields that close a `BR → FR → DES → US → TC` chain,
> so a blank in either could be read as "not yet checked" — which is why the rule is categorical
> here and only here.
>
> **`SCR` is a conditional segment, and its absence is defined** _(narrowed at v2.5.0, NEW-04 @
> v2.4.0-c2)_. A story carries an `SCR` segment when an Approved source records a screen for it —
> Doc 08 v2.7.0 §3.1/§3.2, or this document's §7 for an RTM §3.3 row, marked `(§7 prov.)`. **A
> story with no recorded screen carries no `SCR` segment, and that omission means exactly one
> thing: this document claims no screen for the story.** It is not an open question and not work
> deferred. The v2.4.0 wording made the rule categorical across all three fields, and 55 of 142
> stories did not follow it (75 carry an `SCR-##`, 12 carry an explicit `none (…)` statement, 55
> carry no segment) — a document stating one rule and following another. The rule is narrowed
> rather than the 55 stories annotated: the anti-fabrication purpose is fully served by `DES` and
> `TC`, 55 restatements of "no screen" carry no information, and each restatement is a
> transcription event of exactly the kind that produced the §6 defect repaired at v2.5.0. The 12
> explicit statements already written are correct and are kept. **Maintenance obligation:** any
> story whose FR carries an `SCR` in Doc 08 §3.1/§3.2 MUST carry the segment; a silent story
> against a recorded screen is a defect, caught by the tester's RTM reconciliation and fixed at the
> next bump. Owner: **Priya Raghunathan**.
>
> **No link in this document is asserted that an Approved upstream document does not record** —
> coverage is not manufactured to make a chain look closed.

### EP-01 · Verified personhood & regional eligibility

```
US-0001  Enrol as a verified unique person      (FE-001 · EP-01)
As a citizen, I want to prove once that I am a real adult eligible in my region, so that my
endorsements and votes count and nobody can impersonate or outnumber me with fakes.
Owner: Marcus Adeyemi   Priority: Must   Points: 8   Implements: FR-001 · DES-001 (ADR-003) · SCR-02   Verified by: TC-0001, TC-1001–TC-1003, TC-2600, TC-2601   Depends on: US-0004
AC:
  Scenario: First enrolment succeeds
    Given a citizen who holds no credential
    When they complete an attestor check successfully
    Then an active personhood credential is issued to them
    And they are told they are enrolled without being shown any key material or seed phrase
  Scenario (adversarial): Same human enrols twice
    Given a human who already holds an active credential
    When that same human enrols again through a different attestor
    Then no second active credential is issued
    And the refusal message does not reveal which existing credential matched
```
```
US-0002  Enrolment leaves no identity data behind      (FE-001 · EP-01)
As a citizen, I want my documents and biometrics never to be kept, so that a leak, a sale or a court
order cannot expose me.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-003, NFR-010 · DES-001, DES-080 · SCR-01   Verified by: TC-2050–TC-2053   Depends on: US-0001
AC:
  Scenario: Nothing identifying is retained
    Given a completed enrolment check
    When every store, log, backup, cache and message queue is inspected
    Then no document image, document number, biometric template, date of birth or address is present
    And only a non-identifying eligibility result remains
  Scenario (negative): Attempt to add an identifying field
    Given a change that would persist a date of birth
    When it is proposed
    Then the data-inventory check fails the build
```
```
US-0003  Understand what is and is not kept, before enrolling      (FE-001 · EP-01)
As a cautious citizen, I want to be told plainly what Trumocracy will and will not know about me
before I start, so that my consent is real.
Owner: Nadia Hassan   Priority: Must   Points: 3   Implements: FR-003, NFR-015, NFR-023 · DES-001, DES-084, DES-085 · SCR-01   Verified by: TC-2050–TC-2052, TC-2331, TC-2332, TC-2730, TC-3253   Depends on: US-0002
AC:
  Scenario: Pre-enrolment disclosure
    Given a citizen beginning enrolment
    When the first screen is shown
    Then it states in plain language that no documents, biometrics or address are kept, that records
      are permanent and cannot be deleted, and that an attestor still learns that they enrolled
    And the citizen must acknowledge it before proceeding
  Scenario (negative): Jargon check
    When the disclosure text is scanned
    Then it contains none of: wallet, seed phrase, private key, gas, token, mint, chain, block, hash
```
```
US-0004  Enrol through one of several independent attestors      (FE-002 · EP-01)
As a citizen without conventional documents, I want more than one way to prove I am real, so that a
single provider cannot exclude me.
Owner: Marcus Adeyemi   Priority: Must   Points: 8   Implements: FR-004 · DES-001, DES-002 · SCR-02   Verified by: TC-0002, TC-0003, TC-1004, TC-2640–TC-2642   Depends on: —
AC:
  Scenario: Choice of path
    Given a region with at least two independent attestation paths live
    When a citizen begins enrolment
    Then they can choose any live path and complete enrolment through it
  Scenario (negative): Region with one attestor
    Given a region where only one attestation path is live
    When enrolment is attempted in that region
    Then enrolment is disabled for that region with an explanatory message
```
```
US-0005  Cap and publish attestor concentration      (FE-002 · EP-01)
As an auditor, I want no attestor to issue a majority of a region's credentials, so that capturing
one provider cannot capture the region.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-004, NFR-004 · DES-001, DES-002, DES-011 · SCR-02   Verified by: TC-0002, TC-0003, TC-1004, TC-1850, TC-2600–TC-2603, TC-2640–TC-2642   Depends on: US-0004
AC:
  Scenario: Shares are public
    Given credentials issued in a region
    When the public dashboard is viewed
    Then each attestor's share of that region's credentials is shown
  Scenario (adversarial): Attestor mass-issues
    Given an attestor holding 50% of a region's credentials
    When it attempts a further issuance in that region
    Then the issuance is refused and the event is publicly recorded
```
```
US-0006  Act at most once in any scope      (FE-003 · EP-01)
As a member, I want everyone limited to one action per scope, so that counts mean what they say.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-002 · DES-001, DES-011   Verified by: TC-1016, TC-1025, TC-1607, TC-1956, TC-1957, TC-1961   Depends on: US-0001
AC:
  Scenario: Second action in the same scope is refused
    Given a person who has already acted in scope S
    When they attempt to act again in S
    Then the action is refused as already-acted
    And no information about their earlier action is revealed to anyone else
  Scenario (adversarial): Fresh device, same person
    Given the same person using a new device and a new session
    When they attempt to act again in S
    Then the action is still refused
```
```
US-0007  Be unlinkable across scopes      (FE-003 · EP-01)
As a member, I want my actions in different parties and ballots to be impossible to connect, so that
nobody can build a profile of my politics.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 13   Implements: FR-002, NFR-001, NFR-002 · DES-001, DES-004, DES-008, DES-011   Verified by: TC-1016, TC-1025, TC-1607, TC-1950–TC-1957, TC-1959–TC-1963, TC-2650–TC-2652   Depends on: US-0006
AC:
  Scenario (adversarial): Colluding observers correlate
    Given one person who acted in scope S and scope T
    When an adversary holding {all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity} analyses N ≥ 10,000 independently drawn same-person action pairs
    Then the adversary's advantage in correctly identifying each pair as same-person is ≤ ε over 1/2 at 95% confidence (ε and collusion bound per Doc 02 NFR-001 / OI-10; provisional test value ε = 0.02)
  Scenario: Small-scope protection
    Given a scope with fewer than 1,000 eligible actors
    When a person acts in it
    Then publication is withheld or aggregated until the anonymity floor is met
    And the person is told publication is delayed and why
```
```
US-0008  Establish my region without giving my address      (FE-004 · EP-01)
As a citizen, I want to prove I live in my ward without telling anyone my street, so that I cannot be
found or targeted.
Owner: Marcus Adeyemi   Priority: Must   Points: 8   Implements: FR-006 · DES-005, DES-006 · SCR-03   Verified by: TC-0004, TC-1040, TC-1400, TC-1609   Depends on: US-0001
AC:
  Scenario: Region established
    Given a citizen resident at a specific address
    When they complete residency attestation
    Then the system holds only the region identifier
    And no address, postcode or coordinate exists anywhere in the system for that person
  Scenario (negative): Address lookup attempted
    When any member, party, office-holder or operator queries for a person's address
    Then no interface, export or record returns one
```
```
US-0009  Have my rights follow one region at a time      (FE-004 · EP-01)
As a member, I want my scoped rights bound to exactly one region with a change cooldown, so that
nobody can shop for regions to swing a local vote.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-008 · DES-005 · SCR-03   Verified by: TC-0037, TC-1043   Depends on: US-0008
AC:
  Scenario: Rights follow current region
    Given a person whose active residency scope is ward W
    When they attempt any scope-restricted action outside W
    Then the action is refused as out-of-scope
  Scenario (adversarial): Rapid region hopping
    Given a person who changed region 30 days ago
    When they request another change
    Then the request is refused and the earliest permitted date is shown
```
```
US-0010  Rely on a versioned region registry      (FE-004 · EP-01)
As an auditor, I want boundary changes to be versioned and non-retroactive, so that redistricting
cannot rewrite a finished election.
Owner: Yuki Sato   Priority: Must   Points: 5   Implements: FR-007 · DES-004   Verified by: TC-0005, TC-0006, TC-1204, TC-2522   Depends on: —
AC:
  Scenario: Closed results are frozen
    Given an election closed under registry version N
    When the registry advances to N+1 with changed boundaries
    Then the closed election's eligible set, counts and result are unchanged
    And the election record names the registry version it used
  Scenario (negative): Retroactive edit attempt
    When an attempt is made to apply a new boundary to a closed contest
    Then the attempt is refused and logged
```
```
US-0079  Enrol via deterministic nullifier with duplicate prevention      (FE-034 · EP-01)
As a verified citizen, I want my enrolment to be unduplicated by mathematics rather than by matching
my name or face, so that my identity is never exposed in the deduplication process.
Owner: Marcus Adeyemi   Priority: Must   Points: 8   Implements: FR-069 · DES-069 (ADR-017)   Verified by: TC-3323–TC-3325, TC-3343, TC-3345   Depends on: US-0001
AC:
  Scenario: First enrolment derives and stores nullifier
    Given a credential with a valid issuer signature, unexpired, with a correct region attribute
    When the enrolment derivation runs
    Then only the derived nullifier is stored; no underlying identifier is retained
  Scenario (adversarial): Same credential presented twice
    Given the same credential submitted in a second enrolment attempt
    When the derivation runs
    Then the nullifier matches an existing record and the enrolment is rejected as a duplicate
  Scenario (negative): Tampered credential attribute
    Given a credential with a region attribute that does not place the person in the declared region
    When the derivation verification runs
    Then the enrolment is rejected with the reason (region-attribute invalid)
```
```
US-0080  Enrol via any of the supported adapter types      (FE-034 · EP-01)
As a citizen whose government issues a contactless-chip travel document rather than a digital wallet,
I want to enrol through the appropriate adapter, so that adapter choice does not determine eligibility.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-070 · DES-070 (ADR-017)   Verified by: TC-3326–TC-3329, TC-3344   Depends on: US-0079
AC:
  Scenario: Government eID wallet adapter (eIDAS 2.0 or equivalent)
    Given a region where government eID wallets are the designated adapter
    When a citizen with a government eID wallet presents their credential
    Then the enrolment adapter verifies the trust-anchor signature, extracts the stable personal identifier and residency attribute, and produces a valid nullifier input
  Scenario: ICAO Doc 9303 NFC chip adapter (biometric passport / NFC identity card)
    Given a region where an ICAO Doc 9303 NFC chip adapter is configured
    When a citizen presents a biometric passport or NFC-enabled identity card
    Then the adapter verifies the Document Security Object against the ICAO public key directory, extracts the stable identifier field (MRZ DocumentNumber or chip pseudonym) and an attested residency claim, produces a valid nullifier input, and retains no biometric data
  Scenario: Offline paper KYC adapter (e.g. Aadhaar offline XML or equivalent)
    Given a region where offline paper KYC is the approved adapter
    When a citizen presents the required paper identity evidence
    Then the paper KYC adapter path accepts it and produces a valid nullifier input; no biometric data is retained after the attestor check
  Scenario (negative): Hard-coded single adapter
    When a deployment is inspected for adapter configuration
    Then the adapter layer is pluggable and no single credential type is the only supported path
```
```
US-0083  Only government eID rail mints enrolment nullifiers      (FE-036 · EP-01)
As a member, I want to know that liveness attestors and non-eID providers cannot create new
enrolment records, so that the uniqueness boundary is clear and auditable.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-073 · DES-072 (ADR-016)   Verified by: TC-3330–TC-3332   Depends on: US-0079
AC:
  Scenario: Government eID credential enrols
    Given a credential from the designated government eID rail in a region
    When it is submitted for enrolment
    Then an enrolment nullifier is minted and the record is accepted
  Scenario (adversarial): Availability-only credential attempts enrolment
    Given a liveness attestor credential not designated as a uniqueness-minting class
    When it is submitted for enrolment
    Then no nullifier is minted, the attempt is refused with reason (non-eID class), and the event is logged
  Scenario: Availability-only credential used for liveness only
    Given the same availability-only credential used for a liveness attestation request
    When the request is processed
    Then liveness is confirmed without creating or modifying any enrolment record
```
```
US-0084  Select one country for party-political participation      (FE-037 · EP-01)
As a newly enrolled citizen, I want to nominate exactly one country in which I am legally eligible
to participate in party politics, so that my rights and region tree are scoped correctly.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-074 · none (G-TRACE)   Verified by: TC-3400   Depends on: US-0001
Note: Not Ready pending DES — FR-074 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: First country selection accepted
    Given a citizen who has completed enrolment and holds no active country selection
    When they select a country for which legal eligibility is confirmed by code against published rules
    Then exactly one active country selection is recorded and their region tree is scoped to that country
  Scenario (adversarial): Attempt to hold two active country selections
    Given a citizen with one active country selection
    When they attempt to add a second active country selection by any mechanism
    Then no dual-selection state is created and the attempt is refused
  Scenario: Country change follows residency-change discipline
    Given a citizen who wishes to change their active country selection
    When they submit a change request
    Then the residency-change discipline of FR-008 is applied, legal eligibility is re-checked by code,
      and the prior country selection is voided before the new one activates
```
```
US-0085  See platform activation distinguished from legal registration on every surface      (FE-037 · EP-01)
As a citizen or party founder, I want every platform surface to make clear that creating a party here
is not the same as being legally registered in any jurisdiction, so that no one is misled about legal
standing.
Owner: Sofia Marchetti   Priority: Must   Points: 3   Implements: FR-075 · none (G-TRACE; see F-3)   Verified by: TC-3401   Depends on: US-0084
Note: Not Ready pending DES — FR-075 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Every party-facing surface states the distinction
    Given any party-facing surface, notification, export or log in the system
    When it is examined for language about platform status versus legal registration
    Then it states plainly that platform activation is not legal registration in any jurisdiction
  Scenario (adversarial): Operator attempts to configure legal-registration grant
    Given an operator who attempts to configure the platform to grant, deny or override a party's
      legal registration in any jurisdiction
    When the configuration is submitted
    Then no such capability exists and the attempt is refused and logged
  Scenario (negative): Surface omits the distinction
    When an automated content audit scans all surfaces that display party status
    Then every such surface includes the platform-activation vs legal-registration distinction
```
```
US-0133  Gate every counting action behind the IEligibilityVerifier seam      (FE-057 · EP-01)
As a verified citizen, I want every counting action (binding vote, official-strength petition
contribution, account-status event) to pass through the IEligibilityVerifier seam so that
non-verified open-tier participants are refused with an honest FR-131 clause (d) notice and no
counting action ever executes without a successful eligibility check.
Owner: Samuel Oyelaran   Priority: Must   Points: 8   Implements: FR-122, FR-123, FR-132 · DES-095, DES-100 (ADR-024/025)   Verified by: TC-3477–TC-3481, TC-3520, TC-3530–TC-3534, TC-3556–TC-3558   Depends on: US-0001
DES: DES-095 (IEligibilityVerifier seam).
ADR: ADR-024 (SDK seam contract), ADR-025 (counting-tier gate).
Note: Status Partial — IEligibilityVerifier interface + conventional stub built and tested
  (UT-0760..UT-0779, 36 seam tests green per Doc 06 v2.0.1 §3); IS_INSECURE_MOCK=true while
  stub-backed. Real verifier vendor integration gated on CON-015 / DEP-13. JOIN, LEAVE, and
  account-creation call sites throw on incorrect COUNTING_ACTION invocation as asserted by seam
  tests. **TC is NOT open** — the v2.3.0 claim "no TC-#### minted yet" was false (ISS-05): Doc 07
  **v2.4.4** §5.3 `TS-SCAFFOLD` heads **TC-3477..TC-3481** to this story, and TC-3520,
  TC-3530..TC-3534 (TS-MEMBERSHIP) and TC-3556..TC-3558 (TS-PROPOSALS) exercise the same seam.
  **TC-3481** (FR-131 clause (d) notice) is **Blocked** for the SCR-13/SCR-14 ballot surfaces —
  partially delivered at the parties-directory surface via TC-3534. RTM row not yet complete; DoD
  not satisfied (Doc 08 v2.7.0 §6).
AC:
  Scenario: Verified participant passes counting gate (FR-123)
    Given a participant with verificationLevel=COUNTING and IS_INSECURE_MOCK=true (conventional stub)
    When they attempt a COUNTING_ACTION (binding vote or official-strength petition)
    Then the eligibility check passes and the action proceeds (UT-0760..UT-0762 pass)
  Scenario: Open-tier participant refused at counting gate with honest notice (FR-122, FR-131)
    Given a participant whose verificationLevel=OPEN (phone verification only, FR-122)
    When they attempt a COUNTING_ACTION
    Then the action is refused; an FR-131 clause (d) plain-language notice is delivered stating
      the participant is not verified for counting actions; no partial action is recorded
      (UT-0763..UT-0764 pass)
  Scenario (adversarial): JOIN / LEAVE routed through COUNTING_ACTION call site
    Given any actor
    When they call IEligibilityVerifier.verify with action=JOIN or action=LEAVE
    Then an IllegalActionType exception is thrown and the action is refused (UT-0765 passes)
  Scenario (adversarial): Production deployment with IS_INSECURE_MOCK=false and no vendor bound
    Given IS_INSECURE_MOCK=false and no real vendor connected (CON-015 / DEP-13 unresolved)
    When any COUNTING_ACTION is attempted
    Then the seam throws a VendorNotBound exception and refuses the action; no silent pass-through
      occurs (FR-132 government-ID gate enforced by configuration)
  Scenario (negative): Account-creation flow attempts COUNTING_ACTION invocation
    Given the account-creation path
    When it attempts to invoke IEligibilityVerifier.verify with action=COUNTING_ACTION
    Then a configuration error is thrown at startup; account creation must never be routed through
      a counting gate (FR-132 — government-ID check gates counting, never joining)
```
```
US-0135  Enrol through the adapter my jurisdiction has actually reached      (FE-059 · EP-01)
As a citizen in the pilot jurisdiction, I want enrolment adapters deployed in a published,
technical-readiness-ordered sequence, so that I am never offered a rail that cannot yet prove what it
claims, and a deferred jurisdiction is told so plainly.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-121 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0080
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 119 records FR-121 as G-TRACE + G-PHASE3 ("no DES assigned — Doc 03 §16
  next-increment phasing"), owner Marcus Adeyemi, closing at "Design next increment". Hard
  dependency: **CON-015 MUST be satisfied before the Phase-1 adapter is marked
  implementation-ready** (SRS v2.16.3 §4.40).
AC:
  Scenario: Phase-1 India / Aadhaar offline paperless KYC enrols
    Given the Phase-1 India pilot with the FR-070 class (c) offline paper KYC adapter deployed
    When a citizen presents a valid Aadhaar offline XML credential
    Then the adapter verifies the government-signed document, derives the enrolment nullifier
      on-device per FR-126, and completes enrolment per FR-069
    And all four FR-069 universal in-circuit checks pass and no credential data is transmitted
  Scenario (negative): USA mDL credential presented while Phase 3 is deferred
    Given a USA mobile-driver's-licence credential presented to the Phase-1 enrolment system
    When the adapter checks the credential class and jurisdiction configuration
    Then the enrolment is refused because the Phase-3 USA adapter is not live
    And the refusal names the deferred Phase-3 status and exposes no identity data from the credential
  Scenario (adversarial): Phase-1 adapter marked ready before CON-015 clears
    Given CON-015 (the India legal opinion) is not recorded as satisfied
    When any actor attempts to mark the Phase-1 adapter implementation-ready
    Then the attempt is refused and the unmet CON-015 dependency is named
```
```
US-0136  Join without an invite, always      (FE-060 · EP-01)
As a citizen who knows nobody on the platform, I want a non-invite door that is permanently open,
so that spam control never becomes an admission condition and no one can shut me out by holding
back a referral.
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-125 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0024
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 120 (G-TRACE + G-PHASE3), owner Grace Mbeki. OI-19 was RESOLVED at SRS
  v2.4.0, so the requirement is finalised, not draft. FR-020 (join without asking anyone) stays
  absolute and unamended.
AC:
  Scenario: Determined person with no invite reaches full counted membership (the separating test)
    Given a citizen who holds no referral token from any existing participant
    When they register through the non-invite fallback path and continue to counted membership
    Then the fallback is available and open, may be slower or higher-friction, and charges no fee
    And they complete enrolment (FR-069 nullifier minted) and gain FR-123 counted-action eligibility
  Scenario: Invite fast path verifies the referral edge and then discards it
    Given open-tier registration with invite-gating enabled for spam control
    When a new citizen submits a valid referral token
    Then the token is verified for authenticity and the referral edge is discarded immediately
    And no referral relationship, referrer identity or token is retrievable from any store, log,
      cache or export after the gate-check completes
  Scenario (adversarial): Operator attempts to close the non-invite fallback
    Given an operator who configures the platform so the non-invite fallback is disabled, closed
      or redirected to a dead end
    When the configuration is applied
    Then the system rejects it; the fallback cannot be closed by any operator configuration,
      deployment flag or default; only the Charter-layer amendment process (FR-129) can change this
  Scenario (negative): Refusal for lack of an invite
    When any registration or membership path refuses a person because they hold no invite token
    Then no such refusal exists; FR-020 is absolute and unamended
```
```
US-0137  Be rate-limited, never shut out, when my number looks unusual      (FE-060 · EP-01)
As a legitimate citizen using a VoIP number or an eSIM, I want spam-resistance signals to slow me
down rather than exclude me, so that an anti-fraud heuristic can never disenfranchise a real person.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-133 · DES-099 · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4; Doc 08 v2.7.0 §3.1 records "no US or TC yet"); tester owed a TC   Depends on: US-0136
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). **DES-099 IS
  assigned** (SDD v2.11.2 §15, from v2.4.1), so Doc 08 v2.7.0 §7 entry 126 is G-PHASE3 only — this
  story is **Ready on the DES link** and open on implementation and test. The scope asymmetry is
  normative: flag-don't-block governs the **spam layer only**; the FR-132 §(b) government-ID check
  is a hard gate on FR-123 counting actions and is **NOT** subject to it.
AC:
  Scenario: Flagged number is rate-limited, not hard-blocked
    Given a v1 deployment and an enrolment attempt with a number flagged as VoIP or virtual
    When the spam-resistance layer processes the request
    Then the enrolment is rate-limited or queued for additional verification, is not hard-blocked,
      and the response never states a permanent denial based on the flag
  Scenario: Flagged legitimate user completes every primary flow
    Given a member whose number triggered a flag but whose enrolment completed
    When they attempt to join a party, sign a petition or cast a vote
    Then every governance action is available subject only to rate-limiting
    And no governance action is denied solely on the basis of the flag
  Scenario (negative): Flag events on a public or governance-path surface
    When the public verifiable record, any governance-path surface and any member-facing data
      are inspected
    Then zero flag events, VoIP indicators, device scores or spam-resistance signals appear
  Scenario (adversarial): Hard-block path sought
    When any v1 code path is tested for a route that permanently denies a flagged number
    Then no such path exists; every flagged number is rate-limited or queued
```
```
US-0138  Have my credential read only on my own device      (FE-061 · EP-01)
As a citizen enrolling, I want the raw credential to be read and proven on my phone and then
discarded, so that nothing the platform receives could ever identify me.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-126 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0079
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 121 (G-TRACE + G-PHASE3): "on-device credential-processing boundary not
  separately designed (ADR-017 covers the prover concept; a formal DES is owed)", owner
  Dr. Lena Kowalczyk. **v1 / v2:** SRS v2.16.3 §16.3.1 classes FR-126 `PARTIAL` — v1 enforces the
  discard by app design and API contract; v2 by cryptographic construction.
AC:
  Scenario: Raw credential discarded on-device before anything leaves the phone
    Given a citizen enrolling with an Aadhaar offline XML credential
    When the on-device prover generates the ZK proof and derives the enrolment nullifier
    Then the raw XML, the stable identifier and all intermediate material are discarded on-device
      before any data leaves the device
  Scenario (adversarial): Full network interception
    Given an adversary intercepting all traffic during and after enrolment
    When the captured traffic is fully inspected
    Then only the ZK proof and the derived nullifier are present; no Aadhaar XML, eIDAS attribute,
      ICAO chip datum, mDL datum or stable identifier appears in any payload
  Scenario (negative): Credential material anywhere in the estate
    When every store, log, cache, queue and backup is inspected during and after enrolment
    Then no raw credential material is present in any form; only the derived nullifier appears
```
```
US-0139  Be de-duplicated by mathematics, never by comparing me to a record      (FE-061 · EP-01)
As a citizen, I want duplicate enrolment caught only by nullifier collision, so that no name,
face or document number is ever compared to detect me.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-127 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0079, US-0138
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 122 (G-TRACE + G-PHASE3): the nullifier-collision-only posture is
  recorded as normative (ADR-017 / C-03) but a formal DES is owed.
AC:
  Scenario: Second enrolment with the same credential collides and is rejected
    Given a person who has already enrolled and whose nullifier N exists on the verifiable record
    When they attempt a second enrolment with the same physical credential
    Then the same deterministic nullifier N is derived on-device, the collision is detected against
      the existing record, and the enrolment is rejected as a duplicate
  Scenario (negative): Any identity-comparison path in duplicate detection
    When every duplicate-detection code path is inspected
    Then no name-matching, biometric comparison, document-number lookup, administrative review or
      identity-record comparison exists in any path under any configuration
  Scenario (adversarial): Operator configures a fallback identity match
    When an operator attempts to enable an identity-record comparison as a duplicate-detection
      fallback
    Then no such capability exists and the attempt is refused and logged
```
```
US-0140  Be un-disclosable, not merely undisclosed      (FE-061 · EP-01)
As a member of a political party, I want the platform to be technically unable to say who belongs
to it, so that a court order cannot do what a promise merely declines to do.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-128 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0138, US-0139
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 123 (G-TRACE + G-PHASE3); a formal DES is owed.
  **v1 honesty (SRS v2.16.3 §16.3.1, honesty flag Y): the subpoena test is NOT met in v1** — the
  operator database can be compelled to disclose member↔party mapping and vote direction, and
  FR-131 carries that disclosure. The guarantee is a **Definition-B (v2)** commitment and this
  story **MUST NOT** be reported as satisfied by a v1 deployment.
AC:
  Scenario (adversarial): The subpoena test
    Given a court order requiring disclosure of who belongs to a named political party
    When a technically capable actor with full platform access attempts to comply
    Then the platform is technically unable to produce any identity-to-member mapping, and no such
      mapping can be assembled from any combination of stored data
  Scenario (negative): Reversible identity data anywhere
    When the complete data inventory of every store, cache, log, queue, backup and ephemeral store
      is inspected
    Then zero identity documents, raw stable identifiers, biometric templates, date-of-birth or
      address fields — and nothing from which a stable identifier could be recovered — are present,
      in plaintext or encrypted form
  Scenario (adversarial): Encrypted-but-decryptable identity store proposed
    Given a configuration that stores identity data in encrypted form
    When the subpoena test is applied to it
    Then that configuration FAILS the test and is rejected, because a decryptable store can be
      produced under legal compulsion
  Scenario: v1 posture is disclosed rather than overclaimed
    Given a Definition-A (v1) deployment
    When any surface describes what the platform can and cannot see
    Then it states plainly that v1 does not meet the subpoena test (FR-131), and it does not use
      "private", "anonymous", "receipt-free" or "secure" of v1 behaviour
```

### EP-02 · Party drafting & the eight mandatory pillars

```
US-0011  Create a party draft pseudonymously      (FE-005 · EP-02)
As a citizen with a programme, I want to draft a party without revealing who I am, so that I can
publish ideas before I am ready to be a public figure.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-010 · DES-073, DES-097(b) · SCR-04   Verified by: TC-0010, TC-1041, TC-3489–TC-3493, TC-3515   Depends on: US-0008
Note: Status Partial — name/emblem collision detection + pseudonymous draft creation complete at
  service+UI layer (IS_INSECURE_MOCK=true; production store pending DES-097 wiring). Contract-level
  emblem field and name-collision check not implemented (G-NOMECH persists in RTM). DoD not
  satisfied (RTM row OPEN). TC: TC-3489 (name collision), TC-3490 (emblem collision), TC-3491
  (cross-jurisdiction allowed), TC-3492 (emblem UI validation), TC-3493 (collision UI surfacing),
  TC-3515 (BR-020 disclosure). UT: UT-0064..0070/UT-0086 (protocol), UT-0787..0792 (sdk),
  UT-0841..0847 (web) — Doc 06 v2.2.0 Approved.
AC:
  Scenario: Draft created
    Given a verified citizen
    When they create a draft with a name, emblem, one declared jurisdiction and a charter
    Then the draft is created and the drafter is shown only pseudonymously
  Scenario (negative): Name collision
    Given an existing petition in the same jurisdiction named "Ward Renewal"
    When a drafter attempts the same name or emblem there
    Then publication is refused and the colliding entity is named
```
```
US-0012  Draft offline on a weak connection      (FE-005 · EP-02)
As a drafter on a cheap phone with patchy signal, I want to write my pillars offline and submit when
I reconnect, so that I do not lose hours of work.
Owner: Nadia Hassan   Priority: Must   Points: 5   Implements: FR-010, NFR-012 · DES-073, DES-082 · SCR-04   Verified by: TC-0010, TC-1041, TC-2080, TC-2083, TC-2084, TC-2382   Depends on: US-0011
AC:
  Scenario: Offline composition
    Given a drafter with no connectivity on the reference device
    When they write pillar content and close the app
    Then the content is retained locally and submitted automatically when connectivity returns
  Scenario (negative): Connection lost mid-submit
    Given a submission interrupted by loss of signal
    When connectivity returns
    Then the draft is submitted exactly once, with no duplicate draft created
```
```
US-0013  Declare my charter's own amendment rules      (FE-005 · EP-02)
As a drafter, I want to set my party's amendment tiers, thresholds and timelocks, so that the party
governs itself rather than being governed by our defaults.
Owner: Tomás Ferreira   Priority: Should   Points: 5   Implements: FR-012 · DES-017 · SCR-04   Verified by: TC-1018, TC-1201, TC-3497, TC-3498   Depends on: US-0011
Note: Status Partial — charter bounds validation (floor enforcement) and defaults application
  complete at protocol+service level (IS_INSECURE_MOCK=true; production store pending DES-097
  wiring). Two separate facts, stated separately (ISS-12 — the v2.3.0 wording asserted completion
  and non-completion of the same chain in one parenthesis): **(1) FR-012's Should row is COMPLETE**
  in the RTM (Doc 08 v2.7.0); **(2) the story itself does not meet the Definition of Done** —
  Doc 08 v2.7.0 §6 lists US-0013 among the Partial stories, because the production store is pending
  DES-097 wiring. TC: TC-3497 (charter defaults), TC-3498 (additive tier floor). UT: UT-0076..0082
  (protocol) — Doc 06 v2.2.0 Approved.
AC:
  Scenario: Custom rules within bounds
    Given a drafter setting a charter-tier supermajority of 70% within the platform bounds
    When they publish
    Then the party's charter tier uses 70%
  Scenario (negative): Out-of-bounds rule
    Given a drafter setting a charter-tier supermajority of 20%, below the platform floor
    When they attempt to publish
    Then publication is refused, naming the bound and the permitted range
  Scenario: Silence takes defaults
    Given a charter that declares no amendment rules
    When it is published
    Then documented platform defaults apply and are displayed on the party page
```
```
US-0014  Be blocked from publishing an incomplete programme      (FE-006 · EP-02)
As a citizen deciding whether to endorse, I want every party to have covered all eight pillars, so
that I am backing a programme rather than a slogan.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-011 · DES-074 · SCR-04, SCR-05   Verified by: TC-0009, TC-3494–TC-3496   Depends on: US-0011
Note: Two clauses, which are not the same claim (the ISS-12 @ v2.3.0-c1 pattern, applied here at
  v2.5.0 — NEW-09 @ v2.4.0-c2; this note previously pinned a single status to an RTM three major
  versions behind): **(1)** FR-011's Must row is **COMPLETE** — closed at Doc 08 v1.1.0 and still
  COMPLETE at **Doc 08 v2.7.0**. **(2)** US-0014's own story status is **done**: Doc 08 v2.7.0 §6
  does **not** list US-0014 among the Partial stories (`US-0011/0013/0015/0022/0087/0131`), unlike
  its sibling US-0015. Additional UT coverage added in Doc 06 v2.2.0:
  UT-0060..0063 (protocol validateDraft), UT-0783..0786 (sdk service gate), UT-0845 (web UI
  deficiency error surface). TC: TC-0009 (existing), TC-3494 (protocol), TC-3495 (sdk),
  TC-3496 (web UI).
AC:
  Scenario: Complete draft publishes
    Given a draft in which all eight pillars meet the published minimum-substance standard
    When the drafter publishes
    Then the draft is published with no human approval step anywhere in the path
  Scenario (negative): Missing pillars named
    Given a draft with Healthcare empty and Security below the standard
    When the drafter attempts to publish
    Then publication is refused and both Healthcare and Security are named as deficient
```
```
US-0015  See exactly what each pillar requires before I write it      (FE-006 · EP-02)
As a first-time drafter, I want to know what "sufficient" means for each pillar in advance, so that
the completeness gate feels like a checklist rather than a rejection.
Owner: Nadia Hassan   Priority: Must   Points: 3   Implements: FR-011, NFR-022, NFR-023 · DES-074, DES-040, DES-085 · SCR-04, SCR-05   Verified by: TC-0009, TC-2331, TC-2332, TC-3250–TC-3253, TC-3494–TC-3496   Depends on: US-0014
Note: Two clauses, which are not the same claim (the ISS-12 @ v2.3.0-c1 pattern, applied here at
  v2.5.0 — NEW-09 @ v2.4.0-c2): **(1)** FR-011's Must row is **COMPLETE** — closed at Doc 08
  v1.1.0 and still COMPLETE at **Doc 08 v2.7.0**. **(2)** US-0015's own story status is
  **Partial**, not done: Doc 08 v2.7.0 §6 lists US-0015 among `US-0011/0013/0015/0022/0087/0131`
  — "logic+UI complete and tested (IS_INSECURE_MOCK=true) but their Must RTM rows stay OPEN". An
  FR row closing is not a story reaching DoD, and until v2.5.0 this note read as if it were. Web
  UI confirmation added in Doc 06 v2.2.0:
  UT-0845 (web: pillar names appear in error summary). TC: TC-0009 (existing), TC-3496 (web UI).
AC:
  Scenario: Standard shown up front
    Given a drafter opening any pillar
    When the pillar editor loads
    Then the published minimum-substance standard for that pillar and a live progress indicator are shown
  Scenario (negative): No editorial judgement
    When the standard is inspected
    Then it constrains only structure and substance, and contains no criterion based on the political
      position expressed
```
```
US-0086  Found a party with a complete, code-verified digital constitution      (FE-038 · EP-02)
As a group of citizens who want to form a party, we want the system to require a complete digital
constitution with all mandatory sections before the party is created, so that there is no party
without governance rules from day one.
Owner: Tomás Ferreira   Priority: Must   Points: 8   Implements: FR-076 · none (G-TRACE)   Verified by: TC-3402   Depends on: US-0011
Note: Not Ready pending DES — FR-076 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Complete constitution accepted, party created
    Given a founding-member set that meets the published per-jurisdiction count
    And a constitution containing all mandatory sections: governance rules, membership rules,
      financial rules, COI rules, candidate-selection rules, leadership and term rules, and manifesto
    When publication is attempted
    Then the party is created with no human approval step
  Scenario (negative): Missing section named and blocked
    Given a constitution where the financial-rules section is absent
    When publication is attempted
    Then publication is refused and the financial-rules section is named as the missing element
  Scenario (adversarial): Section present but empty
    Given a constitution where the financial-rules section exists but contains only whitespace
    When the machine-checkable presence test runs
    Then the section is treated as absent and publication is refused
```
```
US-0087  Have the non-violence clause verified by code, not by humans      (FE-038 · EP-02)
As any member, I want to know that every party constitution contains the standard non-violence clause
and that its integrity is checked automatically, so that political commitment to non-violence cannot
be quietly removed.
Owner: Daniel Okonkwo   Priority: Must   Points: 3   Implements: FR-077 · **DES-101** · SCR-04, SCR-05   Verified by: TC-3403, TC-3508–TC-3510, TC-3541   Depends on: US-0086
Note: Status Partial — non-violence clause verbatim-check and absence/alteration refusal complete
  at protocol+service+UI layer (IS_INSECURE_MOCK=true; production store pending DES-097 wiring).
  **DES-101 IS assigned** to FR-077 (SDD v2.11.2 §5.2) — the "Formal DES not yet assigned" note
  carried at v2.3.0 was stale; corrected at v2.4.0 (ISS-07). The story is Ready on its DES link and
  **does not yet meet DoD** — Doc 08 v2.7.0 §6 does not list US-0087 among the 17; the RTM row stays
  open on G-PHASE3. TC: TC-3508 (clause verbatim accepted), TC-3509 (absent/altered refused),
  TC-3510 (UI non-editable + verbatim submission), TC-3541 (TS-PARTY, Doc 07 v2.4.4). UT:
  UT-0071..0075 (protocol), UT-0786 (sdk), UT-0849..0851 (web) — Doc 06 v2.2.0 Approved.
AC:
  Scenario: Standard clause accepted
    Given a new or amended constitution where the non-violence clause matches the platform-standard text exactly
    When publication is attempted
    Then publication succeeds (other conditions permitting)
  Scenario (adversarial): Altered non-violence clause refused
    Given a new or amended constitution where the non-violence clause has been altered from the standard text
    When publication is attempted
    Then publication is refused and the altered clause is named as the cause
  Scenario (negative): Absent non-violence clause refused
    Given a constitution with the non-violence section omitted entirely
    When publication is attempted
    Then publication is refused; no human judgment is in the path at any step
```
```
US-0088  Amend the party constitution only through the tiered proposal process      (FE-038 · EP-02)
As a member, I want the party constitution to be versioned immutably and amendable only by a member
vote, so that the founding agreement cannot be quietly rewritten.
Owner: Tomás Ferreira   Priority: Must   Points: 3   Implements: FR-078 · none (G-TRACE)   Verified by: TC-3404   Depends on: US-0086
Note: Not Ready pending DES — FR-078 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Constitutional amendment goes through tiered proposal
    Given a proposed amendment to any section of the party constitution
    When it is submitted
    Then it enters the proposal lifecycle (FR-025, FR-026) and cannot take effect outside that process
  Scenario: Immutable version history
    Given a constitution at version N
    When a constitutional amendment passes and version N+1 is published
    Then version N remains retrievable unchanged with a diff to version N+1
  Scenario (adversarial): Direct constitution edit refused
    When an actor attempts to modify any constitution section without a passed proposal
    Then the modification is refused and the attempt is logged
```

### EP-03 · Petition, threshold & automatic activation

```
US-0016  Endorse a petition in my own jurisdiction      (FE-007 · EP-03)
As a resident, I want to back a party that claims to serve my area, so that support reflects the
people who actually live there.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-014 · DES-011 · SCR-06, SCR-07   Verified by: TC-0011, TC-0038, TC-1007, TC-1008   Depends on: US-0009, US-0014
AC:
  Scenario: Resident endorses once
    Given a verified person resident inside the petition's declared jurisdiction
    When they endorse
    Then the count increases by exactly one and their identity is not published
  Scenario (negative): Outsider endorses
    Given a person resident outside the declared jurisdiction
    When they attempt to endorse
    Then the endorsement is refused as out-of-jurisdiction
  Scenario (adversarial): Double endorsement
    Given a resident who has already endorsed
    When they endorse again from any device
    Then the count does not change
```
```
US-0017  Withdraw my endorsement      (FE-007 · EP-03)
As an endorser who changed my mind, I want to withdraw before the party activates, so that my support
is not permanent by accident.
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-015 · DES-012 · SCR-07   Verified by: TC-0012   Depends on: US-0016
AC:
  Scenario: Withdrawal before activation
    Given an endorser and a petition that has not activated
    When they withdraw
    Then the count decreases by one and no identity is revealed
  Scenario (negative): Withdrawal after activation
    Given a party that has activated
    When a former endorser attempts to withdraw
    Then the request is refused with an explanation that activation is final
```
```
US-0018  Watch a petition's progress publicly      (FE-007 · EP-03)
As any citizen or journalist, I want to see how close a petition is to its bar, so that the process is
legible without anyone's identity being exposed.
Owner: Erik Lindqvist   Priority: Should   Points: 3   Implements: FR-017 · DES-009 · SCR-06   Verified by: TC-0025, TC-1209   Depends on: US-0016
AC:
  Scenario: Public progress
    Given an active petition
    When anyone views it, with or without an account
    Then the current count, threshold, percentage and time remaining are shown
  Scenario (negative): No identities, no absentees
    When the petition page and every export are examined
    Then no endorser is identified and no list of persons who have not endorsed exists
```
```
US-0019  Compute a threshold from independent population sources      (FE-008 · EP-03)
As an auditor, I want the bar derived from at least two independent sources, so that a single bad or
manipulated statistic cannot make activation trivial or impossible.
Owner: Yuki Sato   Priority: Must   Points: 8   Implements: FR-009, FR-016 · DES-007, DES-009, DES-010 · SCR-08   Verified by: TC-0007, TC-0008, TC-1009–TC-1014, TC-1203, TC-2604, TC-2710–TC-2715   Depends on: US-0010
AC:
  Scenario: Sources agree
    Given two independent sources agreeing within the published tolerance and a closed dispute window
    When a threshold is computed
    Then the threshold, the denominator and both source identities are published and reproducible
  Scenario (negative): Sources disagree
    Given two sources disagreeing beyond the tolerance
    When a threshold computation is attempted
    Then it is refused and the discrepancy is published
```
```
US-0020  Challenge a denominator before it is used      (FE-008 · EP-03)
As a researcher, I want a window to dispute a population figure, so that an error is caught before it
decides whether a party can exist.
Owner: Yuki Sato   Priority: Must   Points: 5   Implements: FR-009 · DES-007 · SCR-08   Verified by: TC-0007, TC-1011–TC-1014, TC-2710–TC-2715   Depends on: US-0019
AC:
  Scenario: Dispute filed in window
    Given a published denominator inside its dispute window
    When a dispute is filed with evidence
    Then the denominator is marked disputed and is not used until resolved
  Scenario (negative): Dispute after window
    Given a denominator whose window has closed and which is in use
    When a dispute is filed
    Then it is recorded for the next revision and does not retroactively alter any activation
```
```
US-0021  Have a petition expire rather than linger forever      (FE-008 · EP-03)
As a citizen browsing petitions, I want stale petitions archived, so that the platform shows live
politics rather than a graveyard.
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-013 · DES-009, DES-097 · SCR-06   Verified by: TC-1034, TC-1035, TC-3499–TC-3503, TC-3539, TC-3540   Depends on: US-0016
Note: **Meets the Definition of Done** — Doc 08 **v2.7.0** §6 records "US-0021 newly meets DoD
  (v2.2.4) — FR-013's Should row closes and the full chain closes", and US-0021 sits inside the
  13-story DoD baseline on which **Doc 08 v2.7.0's figure of 17 of 134** is built. Against this
  document's post-v2.4.0 population of **142** stories that is 17 of 142 — none of the eight
  stories minted at v2.4.0 is at DoD, so the numerator does not move and only the denominator does.
  _(v2.3.0 said "DoD not satisfied (production store pending)"; corrected at v2.4.0, ISS-04 @
  v2.3.0-c1. Corrected again at v2.5.0, NEW-05 @ v2.4.0-c2: this clause attributed "17 of 142" to
  the RTM, which has no such figure — 134 is the RTM's census and 142 is this document's. Quoting
  the pinned figure wrongly defeats the very convention §11 adopted, and it is the kind of number
  the PM's status reporting lifts verbatim. The RTM is the authority on DoD and this document
  mirrors it with the version pin above — see §11.)_ Expiry,
  immutable-archive and re-petition cooldown logic complete at service level. TC: TC-3499
  (expiry→archive), TC-3500 (immutable archive mutation refused), TC-3501 (archivedAt determinism),
  TC-3502 (cooldown refusal), TC-3503 (cooldown allows after window), TC-3539/TC-3540
  (TS-MEMBERSHIP expiry seam, Doc 07 v2.4.4). UT: UT-0795..0801/UT-0817 (sdk) — Doc 06 v2.2.0
  Approved.
AC:
  Scenario: Expiry and archive
    Given a petition that reaches its expiry without meeting the threshold
    When expiry occurs
    Then it moves to an immutable archive and is removed from active listings
  Scenario (negative): Immediate identical re-petition
    Given a drafter whose petition just expired
    When they publish a substantially identical charter in the same jurisdiction inside the cooldown
    Then publication is refused with the earliest permitted date
```
```
US-0022  Watch a party activate itself      (FE-009 · EP-03)
As a drafter, I want the party to switch on automatically when the bar is met and held, so that there
is nobody to lobby, delay or bribe.
Owner: Tomás Ferreira   Priority: Must   Points: 8   Implements: FR-018 · DES-009 · SCR-09   Verified by: TC-0013, TC-0014, TC-1042, TC-3504–TC-3506   Depends on: US-0019
**Blocked pending OI-08** (dwell period unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
Note: Status Partial — threshold gate complete at service level (refusal below threshold naming
  counts; exact-threshold success; 500-endorsement floor — UT-0814..0816 sdk, Doc 06 v2.2.0
  Approved). Dwell-period guarantee remains G-NOMECH (OI-08 unset; RTM row still OPEN). DoD not
  satisfied. TC: TC-3504 (below threshold refused), TC-3505 (exact threshold passes), TC-3506
  (500-floor binds).
AC:
  Scenario: Threshold met and held
    Given a petition at or above threshold continuously for the published dwell period (example — non-normative; normative value set at OI-08 closure)
    When the dwell period elapses
    Then the party activates automatically with no human approval step in the path
    And the activation record immutably holds the charter version, count, denominator and its sources
  Scenario (negative): Threshold not held
    Given a petition that crossed the threshold but fell below it during the dwell period
    When the dwell period elapses
    Then the party does not activate and the petition remains open
  Scenario (adversarial): Override attempt
    When any employee, operator, funder or office-holder attempts to activate, block, waive or lower
      a threshold for a specific party
    Then no such capability exists, and the attempt is refused and publicly logged
```
```
US-0023  Keep a party inside the jurisdiction it earned      (FE-009 · EP-03)
As a resident, I want a party that met my district's bar not to silently become a national party, so
that thresholds cannot be laundered.
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-019 · DES-009 · SCR-09   Verified by: none — no TC minted for FR-019 (Doc 07 v2.4.4; Doc 08 v2.7.0 §3.3); tester owed a TC at the next increment   Depends on: US-0022
AC:
  Scenario (negative): Jurisdiction change refused
    Given an activated party
    When any actor attempts to change its declared jurisdiction
    Then the change is refused
  Scenario: Expansion by fresh petition
    Given the party wishes to operate in another jurisdiction
    When it petitions there
    Then it must meet that jurisdiction's own threshold independently
```
```
US-0131  Have the provisional-party membership cap enforced automatically until legal registration is verified      (FE-009 · EP-03)
As a citizen interested in a newly-activated but not-yet-legally-registered (provisional) party,
I want the platform to enforce a 100-member cap by code and lift it automatically on verified legal
registration — with no operator or manual lift path — so that an unverified party cannot accumulate
false membership strength before it is legally real.
Owner: Sofia Marchetti   Priority: Must   Points: 3   Implements: FR-130 · **DES-102** · SCR-09, SCR-11   Verified by: TC-3511–TC-3516, TC-3528, TC-3529   Depends on: US-0022, US-0085
SCR: SCR-09 and SCR-11 per Doc 08 v2.7.0 §3.1 (carried in the Implements field above); SCR-06
  (Petition browser & detail — wireframe screen 2.3) is this document's own §7 provisional addition
  and is labelled as such, not an RTM link.
Note: **Meets the Definition of Done** — Doc 08 **v2.7.0** §6 (v2.4.0 DoD check): "US-0131 … now
  meets DoD: FR-130 closes at v2.4.0 … It moves from Status: Partial to done"; gap-log entry 125 is
  **RETIRED** and **DES-102 is assigned** to FR-130 (SDD v2.11.2 §5.2). Both v2.3.0 claims — "Formal
  DES not yet assigned" and "DoD not satisfied (RTM row OPEN)" — were stale; corrected at v2.4.0
  (ISS-04, ISS-07). 100-member provisional cap enforcement and code-only lift via
  recordLegalRegistration() complete at service+UI layer. TC: TC-3511 (member 101 refused), TC-3512
  (cap lifts on legal registration), TC-3513 (no other lift path), TC-3514 (cap boundary honest at
  UI), TC-3516 (BR-020 ProvisionalStatus disclosure), TC-3528/TC-3529 (TS-MEMBERSHIP, Doc 07
  v2.4.4). UT: UT-0802..0811 (sdk), UT-0852..0856 (web) — Doc 06 v2.2.0 Approved.
AC:
  Scenario: 100-member cap enforced on provisional party
    Given a provisional party (platform-activated per FR-018; legal registration not yet verified per FR-075)
    And the party already has 100 members
    When a 101st citizen attempts to join
    Then the join is refused
    And the reason states that the party has reached the 100-member provisional cap and that the cap
      lifts automatically on verified legal registration
  Scenario: Cap lifts automatically on verified legal registration — no human action in the path
    Given a provisional party at 100 members
    When the party's legal registration is verified and recorded on the platform per FR-075
      (code-executed; no operator or human action in the path)
    Then the membership cap lifts automatically by code
    And a subsequent join attempt by a 101st citizen succeeds without a cap refusal
  Scenario (adversarial): No operator or manual lift path
    Given a provisional party whose legal registration has not yet been verified
    When any operator, employee, platform administrator, or human actor attempts to lift the
      membership cap by any mechanism
    Then no such capability exists
    And the attempt is refused
    And the cap remains in place until code-verified legal registration
```

### EP-04 · Open, equal membership

```
US-0024  Join a party without asking anyone      (FE-010 · EP-04)     [REFERENCE STORY = 3 points]
As a citizen, I want to join any live party directly, so that no elite decides whether I belong.
Owner: Grace Mbeki   Priority: Must   Points: 3   Implements: FR-020 · DES-013 (ADR-007) · SCR-10, SCR-11   Verified by: TC-0015, TC-0017, TC-1015, TC-1020, TC-3507, TC-3517–TC-3520, TC-3526, TC-3527   Depends on: US-0022
Note: RTM row COMPLETE (Doc 08 v1.1.0). Additional service-layer proof added in Doc 06 v2.2.0:
  UT-0807 (joinParty MUST NOT call verifyEligibility — zero spy calls asserted). TC: TC-0015
  (existing), TC-3507 (join-no-verifier).
AC:
  Scenario: Direct join
    Given an active party and a verified citizen who is not a member
    When the citizen joins
    Then membership takes effect immediately with no approval, sponsorship, interview, invitation or fee
  Scenario (adversarial): Expulsion attempt
    When a drafter, office-holder, funder or operator attempts to reject, remove or suspend that member
    Then no such capability exists and the attempt is refused and logged
```
```
US-0025  Leave a party instantly      (FE-010 · EP-04)
As a member who no longer agrees, I want to leave at once with no penalty, so that exit is a real
check on the party.
Owner: Grace Mbeki   Priority: Must   Points: 3   Implements: FR-022 · DES-013 · SCR-11   Verified by: TC-0016, TC-3521, TC-3522, TC-3526, TC-3527, TC-3536   Depends on: US-0024
AC:
  Scenario: Immediate exit
    Given a member of an active party
    When they leave
    Then membership and all governance rights in that party end immediately
    And no approval, notice period or penalty is applied
  Scenario (negative): Exit blocked
    When any actor attempts to prevent or delay a member's exit
    Then no such capability exists
```
```
US-0026  See membership only in aggregate      (FE-010 · EP-04)
As a member, I want membership numbers public but individuals invisible, so that belonging to a party
never makes me a target.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-020, NFR-001, NFR-024 · DES-013, DES-004, DES-008, DES-086 · SCR-10   Verified by: TC-0015, TC-0017, TC-1015, TC-1020, TC-1607, TC-1959–TC-1961, TC-1963, TC-2650, TC-2652   Depends on: US-0024
AC:
  Scenario: Aggregate visible
    Given an active party
    When anyone views it
    Then total membership and its regional breakdown are shown
  Scenario (adversarial): Roster extraction
    When any member, office-holder, journalist, operator or lawful demand seeks the list of members
    Then no interface, export, log or record yields any individual's membership
```
```
US-0027  Cast exactly one equal vote      (FE-011 · EP-04)
As a member, I want my vote to weigh exactly the same as the founder's, so that "equal standing" is
enforced rather than promised.
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-021 · DES-013, DES-014 · SCR-10   Verified by: TC-0023, TC-1021, TC-1608   Depends on: US-0024
AC:
  Scenario: Equal weight regardless of attributes
    Given members differing in tenure, office, contribution history and region
    When any party ballot is tallied
    Then each member's vote is counted exactly once with identical weight
  Scenario (negative): Weighting configuration
    When a configuration is attempted that weights a vote by any attribute whatsoever
    Then the configuration is rejected and the attempt is logged
```
```
US-0028  Gain nothing by paying      (FE-011 · EP-04)
As an ordinary member, I want a large donor to have exactly my rights, so that money cannot buy the
party.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-051, FR-035 · DES-033, DES-075   Verified by: TC-1021, TC-1604, TC-1605, TC-1608, TC-2605, TC-2621   Depends on: US-0027
AC:
  Scenario: Maximum contributor has ordinary rights
    Given a member who has contributed the maximum permitted amount
    When they act in any governance capacity
    Then their standing, vote weight, proposal precedence, candidacy eligibility, ballot ordering and
      visibility are identical to a member who has contributed nothing
  Scenario (adversarial): Buying or transferring a right
    When any actor attempts to buy, sell, lend, delegate, proxy or assign a vote, endorsement,
      membership or nomination right
    Then no such operation exists in the system and the attempt fails
```
```
US-0029  Wait out a maturation period before governing      (FE-012 · EP-04)
As a long-standing member, I want brand-new members to wait before they can vote, so that a party
cannot be taken over overnight.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-023 · DES-013, DES-014   Verified by: TC-1023, TC-1031, TC-1044   Depends on: US-0024
**Blocked pending OI-08** (maturation period unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
AC:
  Scenario: New member is not yet eligible
    Given a member who joined one hour ago and a maturation period that has not elapsed (example — non-normative; normative value set at OI-08 closure)
    When they attempt to vote, propose, nominate or sign a recall
    Then the action is refused and the date their rights begin is shown
  Scenario (adversarial): Mass flood
    Given 100,000 accounts joining within one hour while a proposal is open
    When that proposal is tallied
    Then none of those accounts is counted
```
```
US-0030  Be protected from churn gaming      (FE-012 · EP-04)
As an auditor, I want join/leave cycling rate-limited, so that a person cannot recycle their single
credential to manufacture apparent support.
Owner: Rafael Duarte   Priority: Must   Points: 3   Implements: FR-023 · DES-013, DES-014   Verified by: TC-1023, TC-1031, TC-1044   Depends on: US-0029
AC:
  Scenario (adversarial): Rapid rejoin
    Given a person who has left and rejoined a party twice within the published window
    When they attempt a further transition
    Then the transition is refused with the earliest permitted date
  Scenario: Legitimate change unaffected
    Given a person making their first move between parties in a year
    When they leave one party and join another
    Then both actions succeed without delay
```
```
US-0073  Be limited to one party at a time      (FE-030 · EP-04)
As a member, I want the platform to enforce a single active membership so that no one can hold sway
in multiple parties simultaneously.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-064 · DES-065 · SCR-11 (§7 prov.)   Verified by: TC-3307–TC-3309, TC-3523–TC-3525   Depends on: US-0024
Note: **AC-1 rewritten at v2.4.0 (ISS-03).** The superseded wording — "Scenario: Switch parties
  voids old membership and resets tenure … Then membership in party A is voided" — specified
  **auto-void on join**, which the `FR-064-SEMANTICS` ruling (SRS **v2.15.0** ruling (a); Rathish,
  Human Approver, 2026-08-29) explicitly superseded. SRS v2.16.3 §8 `# FR-064` and §16.3.1 now make
  the v1 mechanism **explicit leave, then join**: a member MUST explicitly and on the record leave
  their current party before joining another; **automatic voidance is deferred to v2** (DES-065
  global membership-scope nullifier). The superseded wording is annotated here rather than deleted,
  per the house convention already used on US-0054 and US-0071. This also matches what was built —
  Doc 06 v2.3.x "one-active-party, leave-at-will, append-only history".
AC:
  Scenario: Join is refused while an active membership exists, naming the current party
    Given a member of party A who requests to join party B
    When the join request is processed
    Then the join is refused naming party A as the current membership, and membership in party A is
      unchanged
    And party A's membership is not voided, suspended or altered by the refused attempt
    And the tenure clock in party A is not reset by the refused attempt
  Scenario: Explicit recorded leave, then join, takes effect and resets tenure
    Given a member of party A who has explicitly left party A (a recorded action, FR-022)
    When they request to join party B
    Then membership in party B takes effect and the membership tenure clock resets to zero
    And both the leave and the join are recorded append-only in membership history
  Scenario (adversarial): Simultaneous dual membership attempt
    When a member attempts to hold membership in two parties simultaneously through any mechanism
    Then no such dual-membership state exists and the attempt fails
  Scenario (negative): Vote before tenure re-established
    Given a member who joined party B after leaving party A less than one month ago
    When they attempt to vote in party B before one month of membership has elapsed
    Then the vote is rejected as tenure not yet met
```
```
US-0078  Benefit from new-party tenure waiver without losing anti-capture protection      (FE-033 · EP-04)
As a founding member of a brand-new party, I want to vote before the one-month tenure requirement
applies, so that the party can act immediately, while knowing anti-capture controls still protect us.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-068 · DES-068   Verified by: TC-3310–TC-3312   Depends on: US-0029
AC:
  Scenario: Tenure waived in party's first three months
    Given a party in its first three calendar months of active status
    When a founding member who joined before activation attempts to vote
    Then the one-month tenure requirement is waived and the vote is accepted
  Scenario (adversarial): Anti-capture controls remain active during waiver
    Given a sudden flood of 10,000 new members joining the new party within one hour
    When a proposal snapshot is taken
    Then growth-surge defence controls and churn rate limits apply unchanged — UT-0220 confirms this
  Scenario: Waiver ends at three months
    Given a party that has been active for three calendar months
    When a new member who joined during that period attempts to vote before their one-month mark
    Then the standard one-month tenure requirement applies and the action is refused with the date rights begin
```
```
US-0089  See exactly three participation tiers — Supporter, Worker, Candidate — each descriptive, never weighted      (FE-039 · EP-04)
As a member, I want the platform to define exactly three named tiers that describe what I do without
changing what my vote is worth, so that tiers are transparency labels, not power structures.
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-079 · **DES-103** · — (no UI clause)   Verified by: TC-3405, TC-3542   Depends on: US-0024
Note: **DES-103 IS assigned** to FR-079 (SDD v2.11.2 §5.2; the corresponding Doc 08 v2.7.0 §7
  gap-log entry is RETIRED at RTM v2.5.0) — the "no DES assigned" note carried at v2.3.0 was stale;
  corrected at v2.4.0 (ISS-07). **Meets the Definition of Done** — Doc 08 v2.7.0 §6 (v2.5.0 DoD
  check) records US-0089 and US-0100 as now meeting the bar, taking the total from 14 to 16
  (ISS-04). Verified by TC-3405 and TC-3542 (TS-PROPOSALS, Doc 07 v2.4.4).
AC:
  Scenario: New member auto-assigned Supporter
    Given a citizen who has just joined a party
    When their party record is inspected
    Then their tier is Supporter and no further action was required of them
  Scenario (adversarial): Tier cannot alter vote weight
    Given a party with a mix of Supporter, Worker and Candidate tiers
    When any vote is tallied
    Then every ballot carries exactly equal weight regardless of the voter's tier
  Scenario (negative): No fourth tier can be created
    When an actor attempts to configure an additional tier or rename an existing one
    Then the configuration is refused; exactly three tiers exist at all times
```
```
US-0090  Declare myself a Worker without any approval required      (FE-039 · EP-04)
As a member who wants to take a more active public role, I want to self-declare as a Worker with no
human approval in the path, so that taking on responsibility is my choice and my action alone.
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-080 · **DES-103** · SCR-15, SCR-12   Verified by: TC-3406, TC-3544, TC-3562, TC-3563   Depends on: US-0089
Note: **DES-103 IS assigned** to FR-080 (SDD v2.11.2 §5.2 — DES-103 covers **both** FR-079 and
  FR-080; the review's "FR-079/FR-080 → DES-103/DES-104" shorthand is loose and §5.2 is the
  authority). The "no DES assigned" note carried at v2.3.0 was stale; corrected at v2.4.0 (ISS-07).
  **Meets the Definition of Done** — Doc 08 v2.7.0 §6: "US-0090 DOES, as of v2.5.1", taking the RTM
  total to **17** (ISS-04). Verified by TC-3406, TC-3544, TC-3562, TC-3563 (TS-PROPOSALS,
  Doc 07 v2.4.4).
AC:
  Scenario: Worker declaration confirmed with informed consent
    Given a member who initiates a Worker-tier declaration
    When the declaration UI is shown
    Then it states plainly that Worker status is permanent for the term and makes the participation
      record public for the duration; the member must acknowledge before the declaration is confirmed
  Scenario: Declaration confirmed with no human approval
    Given an acknowledged declaration
    When it is submitted
    Then Worker status is recorded immediately with no human approval step anywhere in the path
  Scenario (adversarial): Worker declaration revoked mid-term
    Given a Worker-tier member within their active term
    When any actor attempts to revert them to Supporter mid-term
    Then the reversion is refused; the tier is permanent for the term
```
```
US-0091  Be a Candidate after the post-debate member vote, not by approval      (FE-039 · EP-04)
As a self-nominated member, I want candidacy to be decided by the member vote that follows my
debates, with eligibility checked by code, so that no human can approve, reject or rank me.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-081 · none (G-TRACE)   Verified by: TC-3407   Depends on: US-0046, US-0090
Note: **Not Ready pending DES — FR-081 genuinely still has none.** Doc 08 v2.7.0 §3.1 records
  FR-081's DES as `none` with a live G-TRACE chain, and SDD v2.11.2 §5.2 assigns DES-103 to FR-079
  and FR-080 **only**. US-0091 is therefore the one story in FE-039 that the v2.4.0 ISS-07 sweep
  does **not** clear — recorded explicitly so the exception is visible rather than assumed. It
  satisfies the Definition of Ready only after the architect assigns a DES.
AC:
  Scenario: Candidacy gate is the post-debate member vote
    Given a self-nominated member who has completed all three required debates
    When the post-debate member vote closes with a net positive result
    Then Candidate-tier status is recorded automatically; no human decision is in the path
  Scenario (adversarial): Human attempts to approve or reject candidacy
    When any actor — party officer, committee, steward or operator — attempts to approve, reject or
      rank a candidacy outside the post-debate vote
    Then no such capability exists
  Scenario: Tier transition appended to record
    Given a member who transitions from Supporter → Worker → Candidate
    When their tier history is inspected
    Then every transition is recorded append-only with state (active/inactive) and never deleted
```

### EP-05 · Proposals, charter amendment & governance stability

```
US-0031  Put a proposal to my party      (FE-013 · EP-05)
As a matured member, I want to place any proposal in front of the membership, so that the agenda is
not controlled by whoever holds office.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-024 · DES-018, DES-104 · SCR-12   Verified by: TC-0018, TC-3543, TC-3544, TC-3547   Depends on: US-0029
AC:
  Scenario: Unfiltered submission
    Given a matured member
    When they submit a proposal with a declared tier
    Then it is accepted with no pre-screening, moderation or approval by any actor
  Scenario (adversarial): Suppression attempt
    When an office-holder, drafter or operator attempts to block, hide, delay or reorder that proposal
    Then no such capability exists and the attempt is refused and logged
```
```
US-0032  Withdraw or amend my proposal before voting opens      (FE-013 · EP-05)
As a proposer, I want to fix or retract a proposal before people vote, so that a typo does not become
a permanent charter clause.
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-029 · DES-018 · SCR-12   Verified by: TC-1862   Depends on: US-0031
AC:
  Scenario: Edit before opening
    Given a proposal that has not opened for voting
    When the proposer amends or withdraws it
    Then the change is applied and published
  Scenario (negative): Edit after opening
    Given a proposal that has opened
    When the proposer attempts to amend or withdraw it
    Then the attempt is refused
  Scenario (adversarial): Flooding
    Given a member submitting proposals beyond the published per-period limit
    When they submit another
    Then it is refused with the earliest permitted time
```
```
US-0033  Have bigger changes need broader consent      (FE-014 · EP-05)
As a member, I want charter changes to need far more support than routine decisions, so that a thin
majority cannot rewrite what the party is.
Owner: Tomás Ferreira   Priority: Must   Points: 8   Implements: FR-025 · DES-016 · SCR-12   Verified by: TC-0019, TC-1026–TC-1029, TC-1036, TC-1200, TC-1202   Depends on: US-0031
AC:
  Scenario: Tier rules enforced
    Given a charter-tier proposal requiring 40% quorum and 66% approval
    When it closes at 45% quorum and 70% approval
    Then it passes and enters its timelock
  Scenario (negative): Quorum missed
    When it closes at 39% quorum and 90% approval
    Then it fails and the failing condition is published
  Scenario (negative): Supermajority missed
    When it closes at 45% quorum and 60% approval
    Then it fails and the failing condition is published
```
```
US-0034  See a proposal's exact bar before I vote      (FE-014 · EP-05)
As a member, I want the tier, quorum, supermajority and timelock shown before I vote, so that the
rules cannot be reinterpreted after the result.
Owner: Nadia Hassan   Priority: Must   Points: 3   Implements: FR-025, NFR-023 · DES-016, DES-085 · SCR-12   Verified by: TC-0019, TC-1026–TC-1029, TC-1036, TC-1200, TC-1202, TC-2331, TC-2332   Depends on: US-0033
AC:
  Scenario: Rules displayed
    Given an open proposal
    When a member opens it
    Then its tier, quorum, supermajority, timelock and close time are shown in plain language
  Scenario (negative): Rules changed mid-vote
    When any actor attempts to change any of those values while the proposal is open
    Then the change is refused and logged
```
```
US-0035  Have a timelock between a decision and its effect      (FE-015 · EP-05)
As a member, I want a public waiting period before a passed change takes effect, so that I have time
to react, argue or leave.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-026 · DES-016, DES-021 · SCR-12   Verified by: TC-0020, TC-1024, TC-1032   Depends on: US-0033
**Blocked pending OI-08** (timelock durations unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
AC:
  Scenario: Pending change is visible and not yet effective
    Given a passed charter-tier proposal with its tier's published timelock duration (example — non-normative — 14 days; normative value set at OI-08 closure)
    When one day less than the full timelock has elapsed
    Then the change has not taken effect and is publicly listed as pending with its effective date
  Scenario (adversarial): Bypass attempt
    When any actor attempts to shorten, waive, skip or bypass the timelock
    Then no such capability exists and the attempt is refused and logged
```
```
US-0036  Protect founding clauses from a sudden crowd      (FE-015 · EP-05)
As a founding member, I want entrenched clauses to require the highest bar and long-standing members,
so that a flood of newcomers cannot capture what the party stands for.
Owner: Rafael Duarte   Priority: Must   Points: 8   Implements: FR-027 · DES-022 · SCR-12   Verified by: TC-0021, TC-1019, TC-1022, TC-2630   Depends on: US-0035
AC:
  Scenario: Entrenched rules applied
    Given a charter clause designated entrenched
    When a proposal to amend it opens
    Then it takes the highest tier and the longest timelock
    And only members whose membership predates the proposal by the published minimum age (example — non-normative; normative value set at OI-08 closure) count toward quorum
  Scenario (adversarial): Mob capture
    Given a party of 10,000 members of whom 9,000 joined in the last week
    When they vote to amend an entrenched founding clause
    Then quorum is not met and the amendment fails
```
```
US-0037  Fix the electorate when voting opens      (FE-016 · EP-05)
As a member, I want the eligible set frozen at the moment a proposal opens, so that voting power
cannot be acquired mid-vote.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-028 · DES-018, DES-019   Verified by: TC-0022, TC-1030, TC-2620, TC-2622   Depends on: US-0031
AC:
  Scenario: Snapshot published
    Given a proposal opened at time T
    When it opens
    Then its eligible-voter set is fixed at T and is publicly reproducible
  Scenario (adversarial): Late acquisition
    Given people who join, mature or change residency after T
    When they attempt to vote on that proposal
    Then they are refused as ineligible for that proposal
```
```
US-0101  Move a proposal through defined lifecycle stages, enforced by code      (FE-042 · EP-05)
As a member who submitted a proposal, I want it to move through all published stages — proposal →
review → discussion → debate → vote → decision → implementation → measurement — by code on published
timelines, so that no stage can be skipped, reordered or vetoed by any human.
Owner: Tomás Ferreira   Priority: Must   Points: 8   Implements: FR-091 · **DES-105** · SCR-12   Verified by: TC-3417, TC-3552–TC-3555   Depends on: US-0031
Note: **DES-105 IS assigned** to FR-091 (SDD v2.11.2 §5.2) — the "no DES assigned" note carried at
  v2.3.0 was stale; corrected at v2.4.0 (ISS-07). Ready on the DES link; **not yet at DoD** —
  Doc 08 v2.7.0 §6 does not list US-0101 among the 17. Verified by TC-3417 and TC-3552–TC-3555
  (TS-PROPOSALS, Doc 07 v2.4.4). **Routed to the tester:** TC-3555 is double-assigned — Doc 07
  v2.4.4 §5.6 heads TC-3552..TC-3555 as "FR-091 … US-0101" while Doc 08 v2.7.0 §3.1 also lists
  TC-3555 in FR-122's TC cell (US-0133). This document follows Doc 07's per-case register
  (TC-3555 → US-0101) per the §6 provenance rule.
AC:
  Scenario: All stages traversed in order
    Given a submitted proposal
    When it progresses from submission to decision
    Then every stage — review, discussion, debate, vote, decision — is completed in order on the
      published timelines; no stage is skipped or reordered
  Scenario (adversarial): Human attempts to skip a stage
    Given a proposal in the discussion stage
    When any actor — officer, committee, steward or operator — attempts to advance it directly to
      the vote stage skipping debate
    Then the stage transition is refused; the proposal remains in discussion
  Scenario: Deliberative stages produce records, not outcomes
    Given a completed debate stage
    When the debate record is inspected
    Then it contains a deliberation record only; no outcome, ruling or decision is recorded in that stage
```
```
US-0102  Have a permanent, third-party-reconstructable decision trail for every decision      (FE-042 · EP-05)
As an auditor, I want every decision to have a permanent trail comprising the proposal, competing
proposals, deliberation, vote result, enacted consequence, implementation status and measured outcome,
so that any third party can reconstruct the full decision end-to-end from public data.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-092 · **DES-106** · SCR-12   Verified by: TC-3418, TC-3559, TC-3560   Depends on: US-0101
Note: **DES-106 IS assigned** to FR-092 (SDD v2.11.2 §5.2) — the "no DES assigned" note carried at
  v2.3.0 was stale; corrected at v2.4.0 (ISS-07). Ready on the DES link; **not yet at DoD**
  (Doc 08 v2.7.0 §6). Verified by TC-3418, TC-3559, TC-3560 (TS-PROPOSALS, Doc 07 v2.4.4). Note
  that **DES-106 does NOT discharge FR-107** (SDD v2.11.2 §15) — US-0117 keeps its own live
  G-TRACE chain and its own "Not Ready pending DES" status.
AC:
  Scenario: Complete trail accessible to any third party
    Given a decided proposal
    When any third party downloads the public record
    Then they can reconstruct: the proposal, every competing proposal, authorship, deliberation
      records, vote result, enacted consequence, implementation status and measured outcome
  Scenario (adversarial): Trail element missing
    Given a decided proposal where the competing-proposal records are absent from the public export
    When any third party attempts to reconstruct the trail
    Then the gap is itself detectable as a gap (a present record of an absent entry)
  Scenario: Authorship is attributed per FR-090 (Worker-tier and above)
    Given a proposal authored by a Worker-tier member
    When the decision trail is published
    Then authorship is public and attributed to that member's Worker-tier identity
```

### EP-06 · Anonymous, receipt-free voting

```
US-0038  Vote without anyone knowing it was me      (FE-017 · EP-06)
As a member, I want my ballot untraceable to me, so that my politics cannot cost me my job, my safety
or my family.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 13   Implements: FR-030, NFR-001 · DES-023, DES-024, DES-004, DES-008 · SCR-13   Verified by: TC-0033, TC-1607, TC-1958–TC-1961, TC-1963, TC-2650   Depends on: US-0037
Note: **v1 / v2 (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10).** FR-030 is classed
  **`DEFERRED-v2`**, honesty flag Y. In a **Definition-A (v1)** deployment the ballot is **NOT**
  unlinkable to its voter — the operator database can associate a ballot with its caster — and
  **FR-131 clause (a) REQUIRES the vote-casting surface to state plainly that voting is not
  anonymous, not receipt-free and not coercion-resistant** (US-0134 delivers the notice). The AC
  below states the **Definition-B (v2)** target. **This story MUST NOT be reported as satisfied by a
  v1 deployment.**
AC:
  Scenario: Eligible and unlinkable
    Given a closed ballot with 5,000 cast votes
    When Trumocracy, an operator, an attestor and the party jointly analyse everything they hold
    Then an adversary holding {all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity} cannot link any cast ballot to its voter with advantage > ε over 1/2 at 95% confidence across N ≥ 10,000 drawn ballot-person pairs (ε per Doc 02 NFR-001 / OI-10; provisional test value ε = 0.02)
    And the tally still proves each counted ballot came from exactly one eligible, not-yet-counted voter
  Scenario (adversarial): Ineligible voter
    Given a person who is not in the proposal's eligible set
    When they attempt to cast a ballot
    Then the ballot is refused and no information about the eligible set is leaked
```
```
US-0039  Be protected in a small ballot      (FE-017 · EP-06)
As a member of a tiny ward party, I want anonymity not to collapse because few people voted, so that
small-scale democracy is not a privacy trap.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: NFR-002 · DES-008 · SCR-13   Verified by: TC-1950–TC-1955, TC-1962, TC-2651, TC-2652   Depends on: US-0038
AC:
  Scenario: Anonymity floor enforced
    Given a ballot scope with fewer than 1,000 eligible actors
    When a member casts a ballot
    Then the action is withheld from publication or aggregated until the floor is met
    And the member is shown a plain-language explanation of the delay
  Scenario (negative): Floor cannot be disabled
    When any actor attempts to disable or lower the anonymity floor for a scope
    Then the attempt is refused and logged
```
```
US-0040  Find no way to hand my vote to someone else      (FE-017 · EP-06)
As a member, I want delegation and transfer to be structurally absent, so that vote brokers have
nothing to work with.
Owner: Erik Lindqvist   Priority: Must   Points: 3   Implements: FR-035 · DES-075   Verified by: TC-1604, TC-1605, TC-2605, TC-2621   Depends on: US-0038
AC:
  Scenario (adversarial): Transfer attempted
    When any actor attempts to transfer, sell, lend, delegate, proxy, assign or inherit a vote,
      endorsement or nomination right
    Then no such operation exists and the attempt fails
  Scenario: Inspection confirms absence
    When the system is inspected for delegation, proxy or transfer capability
    Then none is found in any interface, record or configuration
```
```
US-0041  Be unable to prove how I voted      (FE-018 · EP-06)
As a member facing a vote buyer, I want it to be impossible to prove my choice even if I want to, so
that there is nothing to sell.
Owner: Aisha Nkemdirim   Priority: Must   Points: 13   Implements: FR-031, NFR-003 · DES-023, DES-024, DES-063 · SCR-13   Verified by: TC-2610–TC-2612, TC-2614   Depends on: US-0038
Note: **v1 / v2 (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10).** FR-031 is classed
  **`DEFERRED-v2`**, honesty flag Y. Receipt-freeness is a **Definition-B (v2)** guarantee: in v1 a
  voter CAN be shown, and can show, how they voted, and the FR-131 clause (a) notice says so. The AC
  below is the v2 target and **MUST NOT be reported as satisfied by a v1 deployment**.
AC:
  Scenario (adversarial): Voter cooperates fully with a buyer
    Given a voter who has cast a ballot and wants to prove their choice
    When they use every function, export, screenshot and stored artefact available to them
    Then they cannot produce anything that distinguishes their actual choice from any other admissible choice
  Scenario (adversarial): Device seized after the fact
    Given an adversary with full access to the voter's unlocked device after voting
    When they inspect all local state
    Then they cannot determine how the voter voted
```
```
US-0042  Quietly change a vote I was forced to cast      (FE-018 · EP-06)
As a member who was watched while voting, I want to vote again later invisibly, so that coercion buys
nothing.
Owner: Aisha Nkemdirim   Priority: Must   Points: 13   Implements: FR-032 · DES-023, DES-063 · SCR-13   Verified by: TC-1039, TC-2611, TC-2613   Depends on: US-0041
Note: **v1 / v2 (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10).** FR-032 is classed **`PARTIAL`**,
  honesty flag Y. In **v1** the *last-ballot-counts* behaviour is delivered by application logic
  (US-0134, IBallotService); the **invisibility** of the override to an adversary holding operator
  logs is a **Definition-B (v2)** guarantee and is NOT true in v1. The FR-131 clause (a) notice
  states that voting is not coercion-resistant. The second AC scenario below is the v2 target.
AC:
  Scenario: Last ballot counts
    Given a voter who cast a ballot under observation
    When they cast a replacement ballot before the ballot closes
    Then only the last ballot is counted
  Scenario (adversarial): Coercer looks for evidence of the override
    When the coercer inspects the public record, the voter's device and every notification
    Then nothing indicates that a replacement occurred or how many ballots were cast
  Scenario (negative): After close
    Given a ballot that has closed
    When a voter attempts a replacement
    Then it is refused and the original stands
```
```
US-0043  See no results until voting ends      (FE-018 · EP-06)
As a member, I want no running tally, so that nobody can be pressured by, or coordinate around,
partial results.
Owner: Aisha Nkemdirim   Priority: Should   Points: 3   Implements: FR-034 · DES-026 · SCR-13   Verified by: TC-0024   Depends on: US-0038
AC:
  Scenario: Embargo holds
    Given an open ballot
    When anyone — member, office-holder, operator or the public — queries it
    Then no interim tally, partial count, turnout-by-option figure or projection is available
  Scenario: Release on close
    When the ballot closes
    Then the full result is published
```
```
US-0044  Re-count the result myself      (FE-019 · EP-06)
As a journalist with no account, I want to reproduce a tally from public data, so that I do not have
to take Trumocracy's word for it.
Owner: Erik Lindqvist   Priority: Must   Points: 8   Implements: FR-033 · DES-025 · SCR-14   Verified by: TC-0024, TC-2482   Depends on: US-0038
Note: **v1 / v2 (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10).** FR-033 is classed **`PARTIAL`**.
  **v1:** the tally is reproducible from the published canonical ballot state and its deterministic
  tally-hash (US-0134), and reproduction is real — but the ballot state a v1 reproducer works from is
  not anonymised, so "they learn no individual vote in the process" is a **Definition-B (v2)**
  property, not a v1 one. The FR-131 clause (a) notice carries the difference at the surface.
AC:
  Scenario: Independent reproduction
    Given a closed ballot
    When a third party re-computes the result from public data alone with no cooperation from Trumocracy
    Then their result matches the published result exactly
    And they learn no individual vote in the process
  Scenario (adversarial): Tampered result
    Given a published result that does not match the underlying public data
    When any third party runs the reproduction
    Then the mismatch is detected and reported
```
```
US-0045  Understand the result without expertise      (FE-019 · EP-06)
As an ordinary member, I want the result explained in plain language, so that verifiability is not
only for experts.
Owner: Nadia Hassan   Priority: Must   Points: 3   Implements: FR-033, NFR-023, NFR-011 · DES-025, DES-085, DES-081 · SCR-14   Verified by: TC-0024, TC-2250–TC-2255, TC-2331, TC-2332, TC-2482   Depends on: US-0044
AC:
  Scenario: Plain-language result
    Given a closed ballot
    When a member views the result
    Then outcome, turnout, quorum and threshold status are stated in plain language at grade-8 reading level
    And a one-tap route to the independent verification instructions is offered
  Scenario: Accessible result
    When the result screen is audited against WCAG 2.2 AA by screen reader and keyboard/switch at 200% text scale
    Then zero Level A or AA failures are found
```
```
US-0134  Expose cast, change, and tally through the IBallotService seam with honest notices and a verifiable tally-hash      (FE-058 · EP-06)
As a platform engineer, I want the IBallotService seam to implement cast, ballot-change, tally,
and eligibilityRef composition in a single signed contract that emits a deterministic tally-hash
for audit publication and delivers an FR-131 honesty notice before any counting action, so that
every ballot operation is auditable end-to-end and no counting action can proceed without honest
disclosure.
Owner: Samuel Oyelaran   Priority: Must   Points: 8   Implements: FR-131 · DES-096, DES-098 (ADR-024) · SCR-13, SCR-14 (§7 prov.)   Verified by: TC-3482–TC-3487, TC-3534, TC-3535   Depends on: US-0038, US-0133
DES: DES-096 (IBallotService seam).
ADR: ADR-024 (SDK seam contract).
Note: Status Partial — IBallotService interface + conventional stub built and tested
  (UT-0770..UT-0779 within the UT-0760..0779 seam range, Doc 06 v2.0.1 §3); IS_INSECURE_MOCK=true
  while stub-backed. Audit-contract wiring (tally-hash publication endpoint) is owed. **TC is NOT
  open** — the v2.3.0 claim "no TC-#### minted yet" was false (ISS-05 @ v2.3.0-c1): Doc 07
  **v2.4.4** §5.3 `TS-SCAFFOLD` heads **TC-3482..TC-3487** to this story, and §5.5's
  `TC-3534..TC-3535` heading names `US-0133, US-0134`. **TC-3487** (audit-contract publication) is
  **Blocked**, which is exactly the owed wiring named above. **TC provenance (NEW-03 @ v2.4.0-c2):**
  Doc 08 v2.7.0 §3.1's FR-131 TC cell **additionally** lists TC-3476 and TC-3481, and both were
  claimed here until v2.5.0. Doc 07 v2.4.4 §5.3 heads **TC-3476 to US-0132** (`US-0132 · FR-085 ·
  FR-131 clause 8 · DES-094`) and **TC-3481 to US-0133**, and **this document follows Doc 07 per
  the §6 provenance rule** — the rule exists precisely to settle this kind of disagreement. Both
  are dropped from `Verified by:` above. Claiming them here reproduced the very double-assignment
  condition this document routes for TC-3555 without flagging it; **routed to the tester
  (Ji-woo Park) alongside TC-3555** — see §12. Nothing is lost: TC-3481's clause (d) obligation is
  delivered at the parties-directory surface by TC-3534, which this story does carry, and remains
  Blocked for the SCR-13/SCR-14 ballot surfaces (Doc 07 v2.4.4 §5.5 note). **SCR:** Doc 08 v2.7.0
  §3.1 records FR-131's `SCR` as `none`, so SCR-13/SCR-14 above are this document's §7 provisional
  inventory and are marked `(§7 prov.)`. RTM row not yet complete; DoD not satisfied (Doc 08
  v2.7.0 §6). BR-005 (ballot accessible to every eligible citizen) is upstream rationale.
AC:
  Scenario: Cast succeeds for a verified eligible participant
    Given IBallotService.cast called with a valid eligibilityRef from IEligibilityVerifier (US-0133)
    When the ballot is open and the participant is eligible
    Then the cast is recorded and a deterministic ballot receipt (revealing no ballot direction)
      is returned (UT-0770..UT-0771 pass)
  Scenario: Silent ballot-change (re-vote override) leaves no distinguishing signal
    Given a participant who has already cast a ballot
    When they call IBallotService.cast again before ballot close
    Then only the last cast counts; no distinguishing signal appears in any log, receipt, or
      observable state (FR-131 honesty; UT-0772 passes)
  Scenario: Tally emits a deterministic tally-hash for audit publication
    Given a closed ballot
    When IBallotService.tally is called
    Then the result includes a deterministic hash over the canonical ballot state; the hash
      matches on independent re-computation from the same state (audit-publication contract;
      UT-0773..UT-0774 pass)
  Scenario (adversarial): Cast attempted without a valid eligibilityRef
    Given IBallotService.cast called without a successful IEligibilityVerifier result
    When the seam receives the call
    Then the cast is refused; an FR-131 clause (d) honest notice is delivered; no ballot record
      is written (UT-0775 passes)
  Scenario (adversarial): Tally requested while ballot is still open
    Given an open ballot
    When any actor calls IBallotService.tally
    Then the call is refused (results embargo maintained per FR-131 honesty contract; UT-0776
      passes)
```

### EP-07 · Localized nomination & internal election

```
US-0046  Stand for office where I actually live      (FE-020 · EP-07)
As a member, I want to nominate myself for my own ward's office, so that representation is local and
nobody parachutes in.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-036 · DES-027 · SCR-15   Verified by: TC-0028   Depends on: US-0029
AC:
  Scenario: In-scope self-nomination
    Given a matured member resident in ward W
    When they nominate themselves for an office whose region is W
    Then the nomination is accepted pending endorsements
  Scenario (negative): Out-of-scope nomination
    Given the same member nominating for an office in ward X where they do not reside
    Then the nomination is refused as out-of-scope
  Scenario (adversarial): Nominating someone else
    When a member attempts to nominate a different person
    Then the action is refused
```
```
US-0047  Gather local nomination endorsements      (FE-020 · EP-07)
As a candidate, I want to show a minimum of local backing before appearing on a ballot, so that
ballots are not flooded with unserious entries.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-036 · DES-027 · SCR-15   Verified by: TC-0028   Depends on: US-0046
AC:
  Scenario: Threshold reached
    Given a nomination requiring N endorsements from matured members resident in the region
    When N valid endorsements are recorded
    Then the candidacy proceeds
  Scenario (negative): Non-resident endorsement
    Given an endorsement from a matured member resident elsewhere
    Then it is not counted toward N
```
```
US-0048  Withdraw my candidacy before the ballot locks      (FE-020 · EP-07)
As a candidate whose circumstances changed, I want to withdraw before the ballot locks, so that I am
not trapped on a ballot.
Owner: Aisha Nkemdirim   Priority: Should   Points: 3   Implements: FR-036, FR-038 · DES-027, DES-028 · SCR-15   Verified by: TC-0028, TC-0029   Depends on: US-0047
AC:
  Scenario: Withdrawal accepted
    Given a candidacy and a ballot that has not locked
    When the candidate withdraws
    Then they are removed from the candidate set and the removal is published
  Scenario (negative): After lock
    Given a ballot that has locked
    When the candidate attempts to withdraw
    Then the attempt is refused and the disclosure remains in effect as consented
```
```
US-0049  Choose, knowingly, to become public      (FE-021 · EP-07)
As a member becoming a candidate, I want to be told exactly what I am giving up before I give it up,
so that going public is a real choice.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-037, FR-038 · DES-028 · SCR-15   Verified by: TC-0029   Depends on: US-0046
AC:
  Scenario: Separate informed consent
    Given a member about to publish a candidacy
    When they proceed
    Then a separately recorded consent is required, stating that their real-world identity becomes
      public, that disclosure is irreversible for the candidacy and any resulting term, and that it
      can be revoked only by withdrawing before the ballot locks
    And the candidacy is not published until that consent is recorded
  Scenario (negative): No consent, no publication
    Given a candidacy where consent was declined
    Then nothing about that person is published
```
```
US-0050  Stay invisible if I am not a candidate      (FE-021 · EP-07)
As an ordinary member, I want the disclosure asymmetry to hold absolutely, so that being active in a
party never exposes me.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-037, NFR-024 · DES-028, DES-086 · SCR-15   Verified by: TC-0017, TC-0029, TC-1959, TC-2652   Depends on: US-0049
AC:
  Scenario (adversarial): Identity hunt
    Given any person who is not a consenting candidate or office-holder
    When every interface, export, log, notification and public record is examined
    Then their real-world identity is not disclosed by any path
  Scenario (adversarial): Inference from candidate data
    When candidate records are cross-referenced with public party data
    Then no non-candidate member's identity or membership can be inferred
```
```
US-0051  Vote in my ward's election only      (FE-022 · EP-07)
As a resident member, I want only my ward's members choosing my ward's representative, so that local
offices are decided locally.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-039 · DES-076 · SCR-16   Verified by: TC-0030, TC-1024   Depends on: US-0038, US-0047
AC:
  Scenario: In-scope voting
    Given an election for (region R, office O)
    When a matured member resident in R votes
    Then the ballot is accepted
  Scenario (negative): Out-of-scope voting
    Given a matured member resident outside R
    When they attempt to vote
    Then the ballot is refused as out-of-scope
```
```
US-0052  Rely on a timetable nobody can move      (FE-022 · EP-07)
As a candidate, I want the rules fixed once the election opens, so that they cannot be changed to
suit whoever is losing.
Owner: Aisha Nkemdirim   Priority: Must   Points: 3   Implements: FR-039 · DES-076 · SCR-16   Verified by: TC-0030, TC-1024   Depends on: US-0051
AC:
  Scenario: Published before opening
    Given an election about to open
    When it opens
    Then its full timetable, candidate set and tie-break rule are already published
  Scenario (adversarial): Change after opening
    When any actor attempts to change the timetable, candidate set or tie-break rule after opening
    Then the change is refused and the attempt is logged
```
```
US-0053  Take office without anyone confirming it      (FE-022 · EP-07)
As an elected member, I want the office assigned by code on close, so that no committee can decline
to seat me.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-040, FR-041 · DES-029 · SCR-16   Verified by: TC-0030   Depends on: US-0052
AC:
  Scenario: Automatic assignment
    Given a closed election with a determined winner
    When the close is processed
    Then the result is published and the office role is assigned automatically in code
    And no confirmation, ratification, veto or appointment step is available to any actor
  Scenario: Term expiry
    Given an office with a charter-declared fixed term
    When the term ends without a fresh election
    Then the office expires automatically
```
```
US-0074  Cast a feedback vote on a candidate      (FE-031 · EP-07)
As a matured member, I want to signal my view of each candidate with one vote, so that the aggregate
tells the membership something real about suitability.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-065 · DES-066 (ADR-015) · **SCR-23**   Verified by: TC-3313–TC-3316   Depends on: US-0047
AC:
  Scenario: Upvote scores +3
    Given a matured member who has not yet voted on candidate C in election E
    When they cast an upvote
    Then candidate C's tally increases by 3 and the member cannot vote on C again in E
  Scenario: Downvote scores -1
    Given a matured member who has not yet voted on candidate C in election E
    When they cast a downvote
    Then candidate C's tally decreases by 1 and the member cannot vote on C again in E
  Scenario (adversarial): Second feedback vote on same candidate
    Given a member who has already cast a feedback vote on candidate C in election E
    When they attempt another feedback vote on C in E
    Then the attempt is refused as already-voted
```
```
US-0075  See aggregate candidate feedback but not individual votes      (FE-031 · EP-07)
As a member deciding how to vote in a post-debate member vote, I want to see the aggregate feedback
score but not who voted how, so that pressure from local strongmen cannot follow individual votes.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-065 · DES-066 · **SCR-23**   Verified by: TC-3313–TC-3316   Depends on: US-0074
AC:
  Scenario: Aggregate tally is public
    Given feedback votes cast by multiple members on a candidate
    When the public record is viewed
    Then the aggregate tally (sum of +3 upvotes and -1 downvotes) is shown
  Scenario (adversarial): Individual vote inspection
    Given a member who cast a downvote on a local political figure
    When any actor inspects every interface, export, log and public record
    Then no individual feedback vote is linkable to its caster
```
```
US-0076  Complete three debates before a candidacy proceeds to the ballot      (FE-032 · EP-07)
As a member voter, I want every candidate to have addressed local conditions, local problems, and the
work required before appearing on a major election ballot (as defined in Doc 02 §14 Glossary and FR-066),
so that I vote on record rather than on rumour.
Owner: Aisha Nkemdirim   Priority: Must   Points: 8   Implements: FR-066 · DES-067 · **SCR-22**   Verified by: TC-3317–TC-3319   Depends on: US-0047
AC:
  Scenario: Three debates scheduled and completed before a major election
    Given a major election (as defined in Doc 02 §14) approaching for office O with three candidates
    When debates are scheduled
    Then three debates per candidate are scheduled, covering local conditions, local problems, and the
      work required respectively
    And attendance attestation and the post-debate content reference are recorded on the verifiable record
  Scenario (adversarial): Candidate skips a debate
    Given a candidate who fails to attend their scheduled local-conditions debate
    When the absence is recorded
    Then their absence is publicly visible in their participation record and on their profile
  Scenario (negative): Ballot without completed debates
    When the system attempts to place a candidate on a ballot without three completed debates
    Then the action is refused and the missing debates are named
```
```
US-0077  See no automatic renomination of incumbents      (FE-032 · EP-07)
As a member, I want every election cycle to start fresh, so that holding office is not the same as
keeping it without accountability.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-067 · DES-067 · **SCR-22**   Verified by: TC-3320–TC-3322   Depends on: US-0076
AC:
  Scenario: Post-debate member vote determines candidacy
    Given three completed debates and a post-debate member vote that closes with candidate C net positive
    When the election ballot is assembled
    Then candidate C is included because the member vote passed, not because of incumbency
  Scenario (adversarial): Incumbent attempts automatic advance
    Given a sitting office-holder whose term is expiring
    When the next election cycle opens
    Then they receive no automatic placement on the ballot; they must complete the full debate cycle
  Scenario (negative): Ballot assembled without post-debate vote
    When an actor attempts to place any candidate on a ballot without a completed post-debate member vote
    Then the attempt is refused and logged
```
```
US-0103  Run candidate selection on a published code-enforced schedule      (FE-043 · EP-07)
As any member, I want the candidate selection process — nomination, question phase, debates and
post-debate vote — to run on a published, code-enforced schedule, so that no phase can be skipped
or silently moved.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-093 · none (G-TRACE)   Verified by: TC-3419   Depends on: US-0076
Note: Not Ready pending DES — FR-093 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Full schedule published before nomination window opens
    Given a candidate selection cycle starting
    When the nomination window opens
    Then the published schedule — nomination, question phase, debates, post-debate vote, election —
      is visible to any member before nominations are accepted
  Scenario: Members may submit questions to any candidate during question phase
    Given an open question phase
    When any matured member submits a question to any candidate
    Then the question is placed on the public record; the candidate's answer or its absence is
      also recorded publicly
  Scenario (adversarial): Unanswered question buried
    Given a question submitted to a candidate who does not respond before the question phase closes
    When the question phase ends
    Then the question is visibly recorded as unanswered on the public record; it cannot be hidden
```

### EP-08 · Accountability: manifestos, records & mid-term recall

```
US-0054  Publish what my party promises      (FE-023 · EP-08)
⚠ SOURCED FROM SUPERSEDED REQUIREMENT: FR-046 is superseded by FR-094 (structured manifesto) and
FR-095 (commitment IDs with progress); successor stories are US-0104 and US-0105. This story is
retained for traceability; do NOT implement FR-046 — implement FR-094/FR-095 via US-0104/US-0105.
As a party, we want a public, machine-readable manifesto with dated commitments, so that citizens can
hold us to specifics rather than slogans.
Owner: Erik Lindqvist   Priority: Should   Points: 5   Implements: FR-046 (superseded) · DES-031 · SCR-17   Verified by: TC-0026   Depends on: US-0022
AC:
  Scenario: Manifesto published
    Given an active party
    When it publishes a manifesto and dated commitments
    Then each commitment carries a date, a status of in progress / met / not met, and evidence links
    And the whole is retrievable in a machine-readable form without an account
  Scenario (negative): No editorial judgement
    When Trumocracy is asked to rate, score or verify a commitment
    Then no such capability exists; only the party may set a status, and the history of status changes is public
```
```
US-0055  Read every version a party ever published      (FE-023 · EP-08)
As a citizen, I want to see what a party said before it changed its mind, so that quiet rewriting is
impossible.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-047 · DES-031 · SCR-17   Verified by: TC-0026, TC-1045, TC-1614   Depends on: US-0054
AC:
  Scenario: Supersede, never overwrite
    Given a published charter at version 3
    When the party amends it
    Then version 4 is created, version 3 remains publicly retrievable unchanged, and a diff between
      them is viewable
  Scenario (adversarial): Deletion attempt
    When any actor attempts to edit or delete version 3
    Then no such capability exists and the attempt is refused and logged
```
```
US-0056  See how my representative voted, while my own votes stay private      (FE-023 · EP-08)
As a member, I want my representative's office-capacity votes attributable and my own anonymous, so
that power is accountable and I am not.
Owner: Erik Lindqvist   Priority: Should   Points: 8   Implements: FR-048 · DES-032 · SCR-17   Verified by: none — no TC minted for FR-048 (Doc 07 v2.4.4; Doc 08 v2.7.0 §3.3); tester owed a TC at the next increment   Depends on: US-0053
AC:
  Scenario: Office votes attributed
    Given an office-holder voting in their office capacity
    When anyone views the governance record
    Then that vote is publicly attributed to the office-holder
  Scenario (adversarial): Member votes stay hidden
    Given the same person voting as an ordinary member in a party ballot
    When any observer analyses the public record
    Then that ballot cannot be linked to them
```
```
US-0057  Start a recall of my representative      (FE-024 · EP-08)
As a member in a ward, I want to begin removing a representative who has stopped delivering, without
asking permission, so that accountability is not limited to election day.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-042 · DES-030 · SCR-18   Verified by: TC-0031   Depends on: US-0053
AC:
  Scenario: Initiation opens
    Given a matured member resident in the office's region during the term
    When they initiate a recall of that office's holder
    Then the initiation opens without approval from the office-holder, any other office-holder, the
      drafter or any platform actor
  Scenario (adversarial): Suppression attempt
    When the office-holder or any actor attempts to block, hide or delay the initiation
    Then no such capability exists and the attempt is refused and logged
```
```
US-0058  Require a higher bar to remove than to elect      (FE-024 · EP-08)
As a member, I want recall to be genuinely harder than election, so that recall is accountability
rather than a permanent re-run.
Owner: Aisha Nkemdirim   Priority: Must   Points: 8   Implements: FR-043 · DES-030 · SCR-18   Verified by: TC-0031, TC-0032   Depends on: US-0057
**Blocked pending OI-08** (recall bar unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
AC:
  Scenario: Two stages, published in advance
    Given an office-holder and the published recall bar R% (example — non-normative: elected at 55%, recall bar 60%; normative value set at OI-08 closure)
    When a recall initiation reaches its signature threshold and the recall ballot closes below R%
    Then the recall fails and the office-holder remains
  Scenario: Successful recall
    When a later valid recall ballot closes at or above R%
    Then the recall succeeds
  Scenario (negative): Bars changed mid-process
    When any actor attempts to change either bar after initiation opens
    Then the change is refused
```
```
US-0059  Be protected from recall harassment      (FE-024 · EP-08)
As a newly elected representative, I want a grace window and a cooldown after a failed recall, so
that a losing faction cannot grind me down with repeated attempts.
Owner: Daniel Okonkwo   Priority: Should   Points: 3   Implements: FR-044, NFR-024 · DES-030, DES-086 · SCR-18   Verified by: TC-0017, TC-0031, TC-1959, TC-2652   Depends on: US-0058
**Blocked pending OI-08** (grace/cooldown durations unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
AC:
  Scenario (negative): Recall inside the grace window
    Given an office-holder elected 5 days ago and the published grace window duration (example — non-normative: 30 days; normative value set at OI-08 closure)
    When a recall is initiated
    Then it is refused with the earliest permitted date
  Scenario (negative): Immediate re-attempt
    Given a recall that failed yesterday and a published cooldown
    When the same office is targeted again inside the cooldown
    Then the initiation is refused
```
```
US-0060  See a recalled representative removed automatically      (FE-024 · EP-08)
As a member, I want a successful recall to take effect by itself and trigger a by-election, so that
removal is real rather than symbolic.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-045 · DES-030 · SCR-18   Verified by: TC-0032   Depends on: US-0058
AC:
  Scenario: Automatic revocation
    Given a recall ballot that closes successfully
    When the close is processed
    Then the office role is revoked automatically in code with no ratification step
    And a by-election for that (region, office) pair opens within the published number of days
  Scenario (adversarial): Clinging to office
    When the recalled office-holder or any actor attempts to retain, restore or delay revocation
    Then no such capability exists
```
```
US-0104  Publish a structured, machine-readable manifesto with explicit time horizons and named owners      (FE-044 · EP-08)
As a party, we want to publish our manifesto as a structured commitment set with baselines, targets,
budgets, timelines, measurement methods, and named owners per sector, so that every commitment is
measurable and attributable.
Owner: Erik Lindqvist   Priority: Must   Points: 8   Implements: FR-094 · none (G-TRACE)   Verified by: TC-3420   Depends on: US-0022
Note: Not Ready pending DES — FR-094 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Complete manifesto accepted
    Given a manifesto where every sector plan carries baseline, target, budget, timeline, measurement
      method and named owner for each of the 1, 3, 5, 10 and 30-year horizons
    When publication is attempted
    Then publication succeeds with no human approval step
  Scenario (negative): Incomplete sector plan named and blocked
    Given a manifesto where the housing sector plan is missing a measurement method
    When publication is attempted
    Then publication is refused and the housing plan's missing measurement-method field is named
  Scenario (adversarial): Machine-readable structure bypassed
    When an actor attempts to submit an unstructured PDF or prose block as the manifesto
    Then the submission is refused; only structured machine-readable data is accepted
```
```
US-0105  Track every manifesto commitment with a stable ID, status and evidence links      (FE-044 · EP-08)
As a citizen, I want every manifesto commitment to carry a stable ID, a progress status, and linked
evidence, so that I can see exactly what was promised and how it is tracking.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-095 · none (G-TRACE)   Verified by: TC-3421   Depends on: US-0104
Note: Not Ready pending DES — FR-095 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Stable ID and status assigned on publication
    Given a manifesto commitment published in the structured format
    When the commitment is inspected
    Then it carries a stable per-commitment ID, an initial progress status, and at least one evidence link
  Scenario: Status updates are append-only
    Given a commitment with status "in progress"
    When the party publishes an updated status of "met" with linked evidence
    Then the transition is appended to the commitment record; the prior "in progress" status remains
      in history and is not overwritten
  Scenario (adversarial): Status history rewritten
    When any actor attempts to overwrite or delete a prior status entry for any commitment
    Then the operation is refused; the complete status history remains intact
```

### EP-09 · Public verifiability & the moderation-by-code boundary

```
US-0061  Find a public record of every governance action      (FE-025 · EP-09)
As an auditor, I want every governance action recorded tamper-evidently and free of personal data, so
that the whole system can be checked by outsiders.
Owner: Erik Lindqvist   Priority: Must   Points: 8   Implements: FR-054 · DES-035 · SCR-20   Verified by: TC-0027, TC-1047, TC-1048, TC-1207   Depends on: US-0001
AC:
  Scenario: Record emitted
    Given any governance action of any listed type
    When it completes
    Then a publicly readable, tamper-evident record sufficient to reconstruct the outcome is emitted
    And that record contains no personal data
  Scenario (adversarial): Post-hoc alteration
    Given an emitted record
    When it is altered
    Then the alteration is detectable by any third party
```
```
US-0062  Run the verifier myself      (FE-025 · EP-09)
As a researcher, I want an open-source tool that re-checks every count without any cooperation from
Trumocracy, so that trust is unnecessary.
Owner: Erik Lindqvist   Priority: Should   Points: 8   Implements: FR-055, NFR-021 · DES-025, DES-044, DES-045 · SCR-14, SCR-20   Verified by: TC-1206–TC-1208, TC-1803, TC-2480–TC-2482, TC-2671   Depends on: US-0061
AC:
  Scenario: Independent run
    Given the published verifier and public data
    When a third party with no account runs it
    Then it re-computes every published count, threshold and tally and reports agreement
  Scenario (adversarial): Injected discrepancy
    Given public data deliberately inconsistent with a published result
    When the verifier runs
    Then it reports disagreement and identifies the affected record
```
```
US-0063  Take my party's history and leave      (FE-025 · EP-09)
As a party, we want to export our complete public history in an open format, so that our right to
leave is the ultimate check on Trumocracy.
Owner: Erik Lindqvist   Priority: Should   Points: 5   Implements: FR-055, NFR-018 · DES-025, DES-044 · SCR-14   Verified by: TC-2480–TC-2482   Depends on: US-0062
AC:
  Scenario: Complete export
    Given an active party
    When any member requests the public-history export
    Then a complete, documented, open-format export of charters, versions, counts, tallies and results
      is produced
  Scenario: Reconstitution
    When the export is loaded into an independent deployment
    Then the party's public history is reconstituted and verifies identically
```
```
US-0064  Confirm that nobody at Trumocracy has a lever      (FE-026 · EP-09)
As a sceptical citizen, I want to verify that no employee, funder or operator can touch a party, so
that "no gatekeepers" is a fact rather than a promise.
Owner: Daniel Okonkwo   Priority: Must   Points: 8   Implements: FR-056, NFR-017 · DES-077, DES-039 · SCR-20   Verified by: TC-0039, TC-1600, TC-1601, TC-1606, TC-1613, TC-1614, TC-2521, TC-2523, TC-2661, TC-2720, TC-2721, TC-2750   Depends on: US-0061
AC:
  Scenario (adversarial): Maximum privilege attempt
    Given an actor holding the maximum privilege available in the system
    When they attempt to delete or edit published content, remove or suspend a member, alter a count
      or tally, block a lawful governance action, or reorder a candidate set
    Then no such capability exists and the attempt is refused and publicly logged
  Scenario: Unilateral rule change
    When Trumocracy, a funder or an operator attempts to change a platform-wide governance rule alone
    Then no such path exists and the change can proceed only through the tiered process and its timelock
```
```
US-0065  See every display-filtering action in public      (FE-026 · EP-09)
As a journalist, I want every piece of content filtered anywhere to be publicly logged with its legal
basis, so that legal compliance cannot become quiet censorship.
Owner: Sofia Marchetti   Priority: Must   Points: 5   Implements: FR-056, FR-057 · DES-077 · SCR-20   Verified by: TC-0039, TC-1600, TC-1601, TC-1614, TC-2661, TC-2720, TC-2721   Depends on: US-0064
AC:
  Scenario: Filtering is logged, record is intact
    Given content unlawful in jurisdiction J
    When display filtering is applied for J
    Then the public log records the jurisdiction, legal basis and affected item
    And the underlying record is unaltered and remains retrievable outside J
  Scenario (negative): Silent removal
    When any actor attempts to filter content without a public log entry, or to delete the underlying record
    Then the action is refused
```
```
US-0071  View my public participation profile      (FE-029 · EP-09)
⚠ SOURCED FROM SUPERSEDED REQUIREMENT: FR-062 is superseded by FR-082..FR-086 (three-tier
participation-record requirements) per BR-017 and the v2.0.0 vision re-entry; successor stories are
US-0092..US-0096. This story is retained for traceability; do NOT implement FR-062 — implement
FR-082..FR-086 via US-0092..US-0096.
As any citizen or observer, I want to see a member's participation record, so that active engagement
is visible and accountability extends beyond what a person says.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-062 (superseded) · DES-064 · SCR-21   Verified by: TC-3300–TC-3302   Depends on: US-0061
SCR: SCR-21 (provisional)
AC:
  Scenario: Profile shows participation without ballot direction
    Given a verified citizen's profile viewed by any actor
    When the profile loads
    Then it shows: elections and ballots participated in (without ballot direction), current and past
      party memberships, petitions endorsed, proposals authored, and debates attended
    And no ballot direction is shown for any contested vote
  Scenario: Office-holder governance vote is an exception
    Given an elected representative's profile
    When their office-capacity governance vote is displayed
    Then the direction is attributed to them per FR-048
  Scenario (adversarial): No ballot direction findable
    When an actor inspects every profile element, export and public record combination
    Then no contested vote direction is discoverable for any ordinary member
```
```
US-0072  Confirm ballot direction is never shown on any profile or export      (FE-029 · EP-09)
As a privacy-conscious member, I want assurance enforced by test that no platform path reveals how I
voted, so that social or workplace pressure cannot be exerted using platform data.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-063 · DES-064 · SCR-21   Verified by: TC-3303–TC-3306   Depends on: US-0071
SCR: SCR-21 (provisional)
AC:
  Scenario (adversarial): All surfaces inspected for ballot direction
    Given any member's ballot direction on any contested vote
    When every interface, log, export, public record and profile view is examined
    Then no ballot direction for that member is discoverable
    And UT-0700 confirms no ballot-direction field is reachable through any client surface
    And UT-0701 confirms no ballot-direction field is present in any public-record export
  Scenario: Office-holder exception only
    Given an elected representative who voted in official office capacity
    When that specific vote is inspected
    Then direction is publicly attributed — this is the sole permitted exception governed by FR-048
```
```
US-0092  Be unconditionally anonymous as a Supporter — no profile, no attributable record      (FE-040 · EP-09)
As a Supporter-tier member, I want the platform to store only a nullifier for me with no attributable
record and no profile surface, so that supporting a party cannot expose me to any scrutiny.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-082 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3408   Depends on: US-0089
Note: **DES-093 and DES-094 ARE assigned** to FR-082 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 (FR-082..086) from `G-TRACE` to
  `G-PHASE3` at RTM v2.2.0 on exactly that basis. The "no DES assigned yet" note carried from
  v2.3.0 was **stale**; corrected at v2.5.0 (NEW-02 @ v2.4.0-c2) — the v2.4.0 ISS-07 sweep applied
  this correction to seven stories and did not reach these five. **The story is Ready on its DES
  link and is NOT done.** What remains open is scope, not assignment: Doc 08 v2.7.0 §7 entry 73
  records the DES as covering the **UI display layer only**, and full storage, enforcement and
  linkage-prevention design for Supporter-tier anonymity is still owed. FR-082's row is
  `G-PHASE3`, IS_INSECURE_MOCK=true, and DoD is not satisfied (Doc 08 v2.7.0 §6). **TC provenance
  (NEW-03 sweep):** Doc 08 v2.7.0 §3.1's FR-082 row also lists TC-3470 and TC-3474 in its TC cell,
  on a row whose US cell names US-0092 **and** US-0132 — but Doc 07 v2.4.4 §5.3 heads TC-3470 and
  TC-3474 to **US-0132 alone**, row by row, and this document follows Doc 07 per the §6 provenance
  rule. Both cases are carried on US-0132, on this same FR row; TC-3408 (Doc 07: `US-0092 ·
  FR-082`) is this story's own case and is **No mechanism** — Supporter-tier anonymity enforcement
  is not designed.
AC:
  Scenario: Supporter profile surface does not exist
    Given a Supporter-tier member
    When any actor attempts to retrieve a participation profile for them
    Then no profile surface is returned; only aggregate data referencing no individual is available
  Scenario (adversarial): Combine all public data to surface a Supporter
    Given a Supporter-tier member who has participated in ballots and petitions
    When an adversary pools all public records, nullifier sets, timing data and attestor logs
    Then no attributable record links back to the Supporter's identity; NFR-001, NFR-002 and NFR-024 apply
  Scenario (negative): Supporter record stored beyond a nullifier
    When any governance-path store is inspected for data tied to a Supporter beyond a nullifier
    Then no such data exists; the data-inventory check confirms zero attributable Supporter fields
```
```
US-0093  See a Worker's or Candidate's public participation record from their consent event forward      (FE-040 · EP-09)
As any observer, I want to see the public participation record of a Worker or Candidate from the
moment of their informed-consent declaration, so that public accountability is real and complete.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-083 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3409   Depends on: US-0090, US-0092
Note: **DES-093 and DES-094 ARE assigned** to FR-083 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 from `G-TRACE` to `G-PHASE3` at RTM
  v2.2.0. The "no DES assigned yet" note carried from v2.3.0 was **stale**; corrected at v2.5.0
  (NEW-02 @ v2.4.0-c2). **The story is Ready on its DES link and is NOT done.** What remains open
  is scope, not assignment: Doc 08 v2.7.0 §7 entry 74 records the DES as covering the **UI display
  layer only**, and the participation-record data model and ballot-direction enforcement are not
  yet designed. FR-083's row is `G-PHASE3`; DoD not satisfied (Doc 08 v2.7.0 §6). **TC provenance
  (NEW-03 sweep):** Doc 08 v2.7.0 §3.1's FR-083 row also lists TC-3471 and TC-3474, on a row whose
  US cell names US-0093 **and** US-0132; Doc 07 v2.4.4 §5.3 heads both cases to **US-0132 alone**,
  and this document follows Doc 07 per the §6 provenance rule. TC-3409 is this story's own case.
AC:
  Scenario: Public record covers role-relevant activity from consent event
    Given a Worker who declared consent at time T
    When their public participation record is viewed
    Then it includes role-relevant activity from T onward: work recorded, proposals authored in role,
      debates attended, candidacies held, committee memberships
    And no ballot direction appears on any contested vote (FR-063 applies to every tier)
  Scenario: Office-holder vote attribution per FR-048
    Given a holder of elected office who cast a governance vote in their official capacity
    When their record is inspected
    Then that specific vote direction is publicly attributed to them as the FR-048 exception
  Scenario (adversarial): Record truncated before consent event
    Given a Worker whose record is inspected for activity before their consent event
    When any actor attempts to retrieve pre-consent activity attributed to their Worker identity
    Then no pre-consent attributed activity exists for their Worker or Candidate identity
```
```
US-0094  See the full disclosure schedule before I declare — no post-declaration surprises      (FE-040 · EP-09)
As a prospective Worker or Candidate, I want the platform to publish the exact disclosure schedule for
my role before any declaration or nomination window opens, so that I know exactly what I am
committing to and nothing can be demanded of me after the fact.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-084 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3410   Depends on: US-0093
Note: **DES-093 and DES-094 ARE assigned** to FR-084 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 from `G-TRACE` to `G-PHASE3` at RTM
  v2.2.0. The "no DES assigned yet" note carried from v2.3.0 was **stale**; corrected at v2.5.0
  (NEW-02 @ v2.4.0-c2). **The story is Ready on its DES link and is NOT done.** What remains open
  is scope, not assignment: Doc 08 v2.7.0 §7 entry 75 records the DES as covering the **UI display
  layer only**, and disclosure-schedule publication and enforcement are not yet designed. FR-084's
  row is `G-PHASE3`; DoD not satisfied (Doc 08 v2.7.0 §6). **TC provenance (NEW-03 sweep):**
  Doc 08 v2.7.0 §3.1's FR-084 row also lists TC-3472 and TC-3474, on a row whose US cell names
  US-0094 **and** US-0132; Doc 07 v2.4.4 §5.3 heads both cases to **US-0132 alone**, and this
  document follows Doc 07 per the §6 provenance rule. TC-3410 is this story's own case.
AC:
  Scenario: Disclosure schedule published before window opens
    Given a nomination or Worker-declaration window about to open
    When the window opens
    Then the full disclosure schedule for that role (Worker, Candidate, Office-holder) is already
      publicly visible at the platform level
  Scenario (adversarial): Undisclosed category demanded after declaration
    Given a Worker who has declared
    When any actor — officer, committee or platform — demands a category of information not listed
      in the published disclosure schedule for the Worker role
    Then the demand is refused and the attempt is logged
  Scenario: Disclosure scope ascends with power sought
    When the disclosure schedule for Worker, Candidate and Office-holder are compared
    Then each role's schedule is a superset of the role below it — disclosure scales with power
```
```
US-0095  Have my consent cover the full term — and have pre-nomination disclosures destroyed if I withdraw      (FE-040 · EP-09)
As a prospective candidate, I want my consent to cover the entire campaign and any resulting term,
and if I withdraw before the nomination window closes, I want my submitted disclosure data destroyed,
so that withdrawal is a genuine option without permanent consequence.
Owner: Sofia Marchetti   Priority: Must   Points: 8   Implements: FR-085 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3411   Depends on: US-0094
Note: **DES-093 and DES-094 ARE assigned** to FR-085 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 from `G-TRACE` to `G-PHASE3` at RTM
  v2.2.0. The "no DES assigned yet" note carried from v2.3.0 was **stale**; corrected at v2.5.0
  (NEW-02 @ v2.4.0-c2). **The story is Ready on its DES link and is NOT done.** What remains open
  is scope, not assignment: Doc 08 v2.7.0 §7 entry 76 records the DES as covering the **UI display
  layer only**, and the consent lifecycle and data-destruction mechanics are not yet designed.
  FR-085's row is `G-PHASE3`; DoD not satisfied (Doc 08 v2.7.0 §6). **TC provenance (NEW-03
  sweep):** Doc 08 v2.7.0 §3.1's FR-085 row also lists TC-3474 and TC-3476, on a row whose US cell
  names US-0095 **and** US-0132; Doc 07 v2.4.4 §5.3 heads both cases to **US-0132 alone**
  (TC-3476's `Verifies` cell reads `US-0132 · FR-085 · FR-131 clause 8 · DES-094`), and this
  document follows Doc 07 per the §6 provenance rule. **TC-3476 is Blocked** — the enrolment screen
  is not wired with the PrivacyStatus component — which is the same wiring gap named above, and is
  tracked on US-0132. TC-3411 is this story's own case.
AC:
  Scenario: Informed-consent event covers full campaign and term
    Given a candidate who completes the consent event
    When their consent record is inspected
    Then it is recorded as irrevocable for the current campaign and any resulting term
  Scenario: Withdrawal before nomination window close destroys disclosure data
    Given a candidate who submitted pre-nomination disclosure data and withdraws before the nomination
      window closes
    When the withdrawal is confirmed
    Then all disclosure data submitted for that withdrawn candidacy is destroyed; no disclosure data
      for the withdrawn candidacy persists in any store, log or export (OI-16 carve-out)
  Scenario (adversarial): Disclosure data retained after withdrawal
    Given a candidate who has withdrawn within the window
    When any store, log, cache or backup is inspected after the destruction
    Then no pre-nomination disclosure data for that candidacy is present
```
```
US-0096  Have my Supporter-period activity remain anonymous permanently, even after I take a public role      (FE-040 · EP-09)
As a member who moves from Supporter to Worker, I want the platform to never link my anonymous
Supporter history to my public Worker identity, so that taking a public role cannot retroactively
expose my earlier private participation.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-086 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3412   Depends on: US-0092, US-0093
Note: **DES-093 and DES-094 ARE assigned** to FR-086 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 from `G-TRACE` to `G-PHASE3` at RTM
  v2.2.0. The "no DES assigned yet" note carried from v2.3.0 was **stale**; corrected at v2.5.0
  (NEW-02 @ v2.4.0-c2). **The story is Ready on its DES link and is NOT done.** What remains open
  is scope, not assignment: Doc 08 v2.7.0 §7 entry 77 records the DES as covering the **UI display
  layer only**, and the cross-tier unlinkability guarantee for role-changers — the substance of
  this story — is not yet designed. FR-086's row is `G-PHASE3`; DoD not satisfied (Doc 08 v2.7.0
  §6). **TC provenance (NEW-03 sweep):** Doc 08 v2.7.0 §3.1's FR-086 row also lists TC-3474, on a
  row whose US cell names US-0096 **and** US-0132; Doc 07 v2.4.4 §5.3 heads TC-3474 to **US-0132
  alone**, and this document follows Doc 07 per the §6 provenance rule. TC-3412 is this story's
  own case.
AC:
  Scenario (adversarial): Retroactive linking attempt
    Given a member who was a Supporter in party A and is now a Worker in party A
    When an adversary holding all system data — logs, nullifier sets, public records, network timing —
      attempts to link the Supporter-period nullifier to the Worker-tier identity
    Then the adversary cannot establish the link; the test obligation is in the style of UT-0700/UT-0701
  Scenario: Prior supporter activity remains aggregate only
    Given a Worker whose public profile is viewed
    When their profile is examined for any reference to their prior Supporter-period activity
    Then no attributed Supporter-period record appears; their public record begins at the consent event
  Scenario (negative): System emits combined record
    When the system is audited for any data combination or output that joins a Supporter nullifier to a
      Worker or Candidate identity
    Then no such combination or output exists in any store, log or export
```
```
US-0116  Ensure every data entity carries exactly one of three classifications      (FE-051 · EP-09)
As the platform, I want every stored entity classified as public, restricted or confidential — with no
unclassified entity storable — so that classification governs every storage, access and publication
decision from the first write.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-106 · none (G-TRACE)   Verified by: TC-3432   Depends on: US-0002
Note: Not Ready pending DES — FR-106 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Classified entity stored
    Given any governance-path entity submitted for storage
    When it is written
    Then it carries exactly one of: public, restricted, or confidential; the classification is recorded
  Scenario (adversarial): Unclassified entity storage attempt
    Given an entity submitted for storage without a classification tag
    When the storage write is attempted
    Then the write is refused; no unclassified entity exists in any governance-path store
  Scenario: Classification governs access
    Given a restricted-class entity
    When any actor without restricted-access rights attempts to retrieve it
    Then access is denied; the entity is not returned
```
```
US-0117  Nothing is ever deleted — every entity is active or inactive with a timestamped cause      (FE-051 · EP-09)
As an auditor, I want the platform to guarantee that no governance-path entity is ever hard-deleted or
overwritten — only transitioned to inactive with an appended record of cause and timestamp — so that
history is permanent and the OI-16 carve-out is the only recorded exception.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-107, NFR-028 · none (G-TRACE; DES-106 does NOT discharge FR-107 — SDD §15)   Verified by: TC-3433, TC-3448   Depends on: US-0116
Note: Not Ready pending DES — FR-107 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: State transition is appended, not overwritten
    Given any governance-path entity transitioning from active to inactive
    When the transition occurs
    Then a record is appended containing: entity ID, prior state, new state, timestamp, and cause;
      the prior state record is not modified
  Scenario (adversarial): Hard-delete attempted
    Given any actor who attempts to hard-delete a governance-path entity by any mechanism
    When the attempt is made
    Then it is refused; no hard-delete path exists
  Scenario: Pre-nomination disclosure data is the sole exception per OI-16
    Given a withdrawn candidate's pre-nomination disclosure data (confidential-class, FR-085)
    When the withdrawal destruction is executed
    Then the disclosure data is destroyed; this is the sole exception; a record of the destruction event
      (not the data) is appended to the decision trail
```
```
US-0118  Keep the public verifiable record to proofs, timestamps, counts and events only      (FE-051 · EP-09)
As a citizen who values privacy, I want the public verifiable record to contain only cryptographic
proofs, timestamps, counts and governance events — never restricted- or confidential-class data in
any form — so that publishing the record cannot expose private data.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-108 · none (G-TRACE)   Verified by: TC-3434   Depends on: US-0116, US-0117
Note: Not Ready pending DES — FR-108 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Public record contains only permitted data types
    Given the full public verifiable record
    When any third party inspects it
    Then it contains only: cryptographic proofs, timestamps, counts, and governance events;
      no restricted- or confidential-class data is present in any form
  Scenario (adversarial): Restricted-class data written to public record
    Given an actor who attempts to write any restricted- or confidential-class field to the public record
    When the write is attempted
    Then it is refused; the public record remains clean
  Scenario: Public record is not used as the application data store
    When the system architecture is audited
    Then the public record and the application data store are separate; no application-only data
      is stored solely on the public record
```
```
US-0121  Produce zero per-user behavioural events in any store, log or export      (FE-053 · EP-09)
As a citizen who values privacy, I want the platform to never record what pages I view, what sections
I read, or how long I dwell — only aggregate analytics — so that my browsing behaviour cannot be
profiled by anyone.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-111, NFR-027 · none (G-TRACE)   Verified by: TC-3437, TC-3447   Depends on: US-0002
Note: Not Ready pending DES — FR-111 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Per-user behavioural events absent from all stores
    Given the full data inventory of every store, log and export in the system
    When inspected for per-user behavioural events
    Then zero per-user behavioural events (clicks, page views, dwell time, reading trails, or equivalents
      tied to a person, credential, nullifier, session, or device) are present anywhere
    And UT-0525 and UT-0740 pass on every release confirming absence of tracking
  Scenario (adversarial): New surface introduces tracking
    Given a new v2 surface deployed to production
    When the UT-0525 and UT-0740 test suite runs
    Then it fails if any per-user tracking event is introduced, blocking the release
  Scenario: Personalisation is client-side only
    Given any personalisation feature on any surface
    When the personalisation state is inspected on the server side
    Then no personalisation state for any user is stored, transmitted or held server-side
```
```
US-0132  Provide the design-system token set and PrivacyStatus component backing the tier-privacy display      (FE-040 · EP-09)
As a platform engineer, I want a stable token-first component library (DES-093 design tokens +
DES-094 PrivacyStatus with three anonymity states and backing-aware 'ver' copy per FR-131 clause 7),
so that every downstream screen renders honest tier-privacy status without duplicating the anonymity
logic.
Owner: Samuel Oyelaran   Priority: Must   Points: 5   Implements: FR-082–086, FR-124, FR-131 · DES-093, DES-094 (ADR-023) · none (deliberate)   Verified by: TC-3470–TC-3476, TC-3488   Depends on: US-0089, US-0092
SCR: none — PrivacyStatus (DES-094) is a shared UI component in packages/ui, not a screen; no SCR
  is assigned or claimed for this story.
DES: DES-093 (token set), DES-094 (PrivacyStatus component).
Note: Status Partial — token set and PrivacyStatus component built and tested (UT-0750..UT-0758,
  14 unit tests green per Doc 06 v2.0.1 §3); not wired to any screen; clause-8 disclosure
  affordance owed at the enrolment sprint. FR-124 backing-aware 'ver' copy rule (clause 7)
  implemented per UT-0758 four-path pattern (absent / false / true / malformed backing props).
  **TC is NOT open** — the v2.3.0 claim "no TC-#### minted yet" was false (ISS-05): Doc 07 **v2.4.4**
  §5.3 `TS-SCAFFOLD` heads **TC-3470..TC-3476 and TC-3488** to this story, most carrying
  **Pass (obs.)** evidence dated 2026-08-25. **TC-3476** (enrolment disclosure affordance) is
  **Blocked**, which is exactly the clause-8 affordance owed above. Full-stack scenario coverage
  beyond the seam remains owed to the tester. RTM row not yet complete; DoD not satisfied
  (Doc 08 v2.7.0 §6).
AC:
  Scenario: Supporter-tier state renders anonymous copy (FR-082)
    Given PrivacyStatus receives tier="supporter"
    When rendered
    Then copy states the participant is unconditionally anonymous with no public profile and no
      attributable record (FR-082); UT-0750 passes
  Scenario: Worker-tier state renders public-from-consent copy (FR-083)
    Given PrivacyStatus receives tier="worker" and isVerified=true
    When rendered
    Then copy states the record is public from the consent event forward, no pre-consent activity
      is attributable (FR-083); UT-0751 passes
  Scenario: Candidate-tier state renders permanent-disclosure copy (FR-084)
    Given PrivacyStatus receives tier="candidate" and isVerified=true
    When rendered
    Then copy states candidacy is public and disclosures are permanent (FR-084); UT-0752 passes
  Scenario: Backing-aware 'ver' copy — four-path test (FR-124 clause 7 / UT-0758)
    Given backing.isVerified is absent, false, true, and malformed in four separate renders
    When each is rendered
    Then each path produces the correct 'ver' copy or the fail-honest default with no runtime
      error (UT-0758 four-path pattern passes on all paths)
  Scenario (adversarial): Malformed BackingProperties — fail-honest default
    Given the component receives a structurally invalid BackingProperties object
    When it attempts to render
    Then it displays the fail-honest default; it logs a warning; it does not crash or show an
      incorrect tier status (UT-0757..UT-0758 pattern)
  Scenario (negative): Verified status not exposed to third parties (FR-124)
    When the component API is inspected for any interface, prop, or endpoint that reveals
      isVerified to a third-party observer
    Then no such exposure exists; verified status remains private to the holder
```

### EP-10 · Zero-friction access: cost, recovery, accessibility

```
US-0066  Do everything without a token, a wallet or a fee      (FE-027 · EP-10)
As a non-technical citizen, I want to never encounter crypto, so that participating feels like using
any ordinary app.
Owner: Hiroshi Tanaka   Priority: Must   Points: 8   Implements: FR-060, NFR-005, NFR-023 · DES-040, DES-043, DES-085 · all primary   Verified by: TC-0035, TC-2200–TC-2203, TC-2331, TC-2332   Depends on: US-0001
AC:
  Scenario: Full journey with no crypto
    Given a citizen with no cryptocurrency, wallet or balance
    When they complete enrol, draft, endorse, join, propose, vote, nominate, stand, recall and recover
    Then every flow completes without acquiring, holding or spending any token or payment instrument
    And USD 0.00 is charged to them at every step
  Scenario (negative): Jargon scan
    When every primary-flow screen is scanned
    Then none contains the words wallet, seed phrase, private key, gas, token, mint, chain, block or hash
```
```
US-0067  Be delayed, never denied, when sponsorship runs low      (FE-027 · EP-10)
As a heavy user during an election, I want exhaustion of the free budget to slow me down rather than
lock me out, so that funding limits never become disenfranchisement.
Owner: Hiroshi Tanaka   Priority: Must   Points: 5   Implements: FR-061 · DES-043   Verified by: TC-0036, TC-2152   Depends on: US-0066
AC:
  Scenario: Graceful degradation
    Given a person who has exhausted their periodic sponsored-action budget
    When they attempt a legitimate governance action
    Then the action is queued with a plain-language explanation and an expected time
    And it is neither rejected, charged for, nor permanently denied
  Scenario (adversarial): Abuse
    Given an account generating actions far beyond the published budget
    When it continues
    Then its actions are throttled while every other person's actions are unaffected
```
```
US-0068  Get back in after losing my phone      (FE-028 · EP-10)
As a citizen who lost my only device, I want to recover access without ever having had a seed phrase,
so that a lost phone does not end my participation.
Owner: Amara Diallo   Priority: Must   Points: 13   Implements: FR-058, NFR-016 · DES-040, DES-042 · SCR-19   Verified by: TC-0034, TC-2700, TC-2701   Depends on: US-0001
AC:
  Scenario: Successful recovery
    Given a citizen who lost their device and was never shown key material
    When they complete recovery
    Then control of their credential and residency scope is restored after the published timelock
    And a notification is sent to their registered channel with a cancellation window
  Scenario (adversarial): Thief-initiated recovery
    Given a thief who initiates recovery on a stolen device
    When the legitimate holder cancels during the window
    Then the recovery is aborted and access is not transferred
```
```
US-0069  Recover without anyone learning my politics      (FE-028 · EP-10)
As a recovering citizen, I want the people who help me recover to learn nothing about my memberships
or votes, so that recovery is not a privacy back door.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-059 · DES-042 · SCR-19   Verified by: TC-2700   Depends on: US-0068
AC:
  Scenario (adversarial): Helpers pool what they saw
    Given a completed recovery
    When every participant — helper, guardian, attestor, support agent, operator — pools everything
      they observed
    Then none can determine the subject's party memberships, past ballots, endorsements or governance history
  Scenario (negative): Notification leakage
    When recovery notifications and their metadata are inspected
    Then they reveal no party, ballot or governance activity
```
```
US-0070  Use the whole platform on a cheap phone, in my language      (FE-028 · EP-10)
As a citizen with a five-year-old handset, a slow connection and a screen reader, I want every primary
flow to work, so that the platform serves the people it claims to serve.
Owner: Nadia Hassan   Priority: Must   Points: 13   Implements: NFR-006, 011, 012, 013, 022 · DES-078, 081, 082, 083, 040 · all primary   Verified by: TC-2080–TC-2084, TC-2250–TC-2255, TC-2330, TC-2333, TC-2380–TC-2382, TC-3250–TC-3253   Depends on: US-0066
AC:
  Scenario: Reference device and network
    Given the reference device (2 GB RAM, Android 9) on a 64 kbit/s intermittent connection
    When each primary flow is exercised
    Then every flow completes, the primary screen is interactive within 5 s at p95, and the install is <= 15 MB
  Scenario: Accessibility
    When each primary flow is audited against WCAG 2.2 AA by screen reader and keyboard/switch at 200% text
    Then zero Level A or AA failures are found
  Scenario: Localisation
    Given each of the 8 launch locales including a right-to-left script
    When each primary flow is exercised
    Then no untranslated string appears and layout, dates, numbers and names render correctly
  Scenario (negative): Unsupported device
    Given a device below the supported matrix
    When the app is opened
    Then a clear, actionable message is shown rather than a broken screen
```
```
US-0081  Recover from a nullifier collision with a seven-day delay and veto      (FE-035 · EP-10)
As a citizen who has lost their key material but still holds their credential, I want the collision-
detection path to become a recovery rather than a permanent lock-out, so that losing keys is
survivable without creating a second identity.
Owner: Amara Diallo   Priority: Must   Points: 13   Implements: FR-071, FR-072 · DES-071 (ADR-018) · SCR-19   Verified by: TC-3333–TC-3339   Depends on: US-0068
SCR: SCR-19 (provisional — re-confirm with architect)
AC:
  Scenario: Collision routes to recovery
    Given a citizen whose derived nullifier matches an existing record
    When they re-authenticate with their credential and prove current key ownership
    Then the system routes them to the recovery flow; no second identity is created
    And membership, tenure and governance history are confirmed intact
  Scenario: Seven-day delay and notification
    Given a recovery initiated
    When the recovery is submitted
    Then a seven-day delay is imposed, a notification is sent to the registered channel, and the veto window is open for the full delay
  Scenario (adversarial): Active-key holder vetoes
    Given an active-key holder who receives the recovery notification
    When they submit a veto signal during the seven-day window
    Then the recovery is aborted and the existing key remains in control
```
```
US-0082  Be barred from voting while a recovery delay is in progress      (FE-035 · EP-10)
As any member, I want to know that a credential undergoing key rotation cannot vote during the delay,
so that recovery windows cannot be exploited for vote manipulation.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-072 · DES-071 (ADR-018) · SCR-19   Verified by: TC-3335–TC-3339   Depends on: US-0081
AC:
  Scenario: Vote attempt during delay is refused
    Given a credential that has initiated a nullifier-collision recovery and is within the seven-day delay
    When the credential attempts to cast any vote
    Then the vote is refused and the reason (recovery delay active) is returned
  Scenario: Normal voting resumes after delay
    Given the same credential after the seven-day delay has completed and keys have been rotated
    When it attempts to cast a vote
    Then the vote is accepted normally
  Scenario (adversarial): Attacker races recovery against a ballot
    Given a live ballot and an attacker who initiates recovery under the original key during the ballot
    When they attempt to vote under the original key before rotation completes
    Then the vote is refused while recovery is active; the ballot-scope nullifier prevents double-counting
```

### EP-11 · Party institutional life & transparency

```
US-0097  Form a party committee — its only permitted output is a proposal in the ordinary lifecycle      (FE-041 · EP-11)
As a party, we want to form committees including a steering committee (capped at 30 members) and
working groups, so that we can organise deliberation — knowing that any output must enter the
ordinary proposal lifecycle with no special status.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-087 · none (G-TRACE)   Verified by: TC-3413   Depends on: US-0031
Note: Not Ready pending DES — FR-087 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Committee formed; output enters ordinary proposal lifecycle
    Given a party that forms a steering committee with 28 members
    When the committee produces a recommendation
    Then the recommendation enters the proposal lifecycle as an ordinary proposal with no special status,
      precedence or extra weight; committee composition and minutes are publicly visible
  Scenario (adversarial): Committee decides an outcome directly
    Given a committee that attempts to enact a decision without a proposal vote
    When the action is attempted
    Then no such capability exists; the action is refused
  Scenario (negative): Steering committee exceeds 30 members
    Given a steering committee that attempts to add a 31st member
    When the addition is attempted
    Then it is refused; the cap is enforced by code
```
```
US-0098  Guarantee that committees hold only capabilities that cannot change who wins, who votes, or who is a member      (FE-041 · EP-11)
As any member, I want to know that a committee's authority is limited to event organisation,
campaign coordination, facilitation, vendor management and publishing — and that any configuration
granting a committee election or membership power is rejected by the system.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-088 · none (G-TRACE)   Verified by: TC-3414   Depends on: US-0097
Note: Not Ready pending DES — FR-088 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Committee holds only permitted capabilities
    Given a committee and the published exhaustive capability list
    When the committee's configuration is inspected
    Then it holds only capabilities from the permitted list; nothing else is configurable
  Scenario (adversarial): Committee granted election-administration capability
    Given an attempt to configure a committee with election-administration access
    When the configuration is submitted
    Then it is rejected by code; the committee receives no election-administration capability
  Scenario: Eligibility determination remains code-executed with no committee path
    When the eligibility determination path for any election or membership action is audited
    Then no committee or human path exists; every determination is executed by code
```
```
US-0099  Have committee membership expire at term end with no human renewal path      (FE-041 · EP-11)
As a member, I want committee membership to expire mechanically at term end, so that committees
cannot perpetuate themselves without a fresh member vote.
Owner: Rafael Duarte   Priority: Must   Points: 3   Implements: FR-089 · none (G-TRACE)   Verified by: TC-3415   Depends on: US-0097
Note: Not Ready pending DES — FR-089 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Committee expires at term end
    Given a committee whose term end date is reached
    When the term end is processed by code
    Then all committee memberships expire and the committee is inactive — no human renewal path exists
  Scenario: Continuation requires a fresh member vote
    Given a party that wants to continue a committee into a new term
    When a fresh member vote passes to re-form it
    Then the committee is recreated with a new term and new membership set; prior membership confers
      no automatic continuation
  Scenario (adversarial): Committee continues past term without vote
    Given a committee whose term has expired
    When any actor attempts to record an action by that committee after term expiry
    Then the action is refused; the committee is treated as inactive
```
```
US-0100  Author a proposal publicly — and submit a competing proposal with equal standing      (FE-041 · EP-11)
As a Worker-tier member, I want proposal authorship to be public, and I want any other Worker-tier
member to be able to submit a competing proposal on the same question with equal standing and the
same decision window, so that no author holds a monopoly.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-090 · **DES-104** · SCR-12   Verified by: TC-3416, TC-3543, TC-3545, TC-3546, TC-3548–TC-3551   Depends on: US-0031, US-0090
Note: **DES-104 IS assigned** to FR-090 (SDD v2.11.2 §5.2) — the "no DES assigned" note carried at
  v2.3.0 was stale; corrected at v2.4.0 (ISS-07). **Meets the Definition of Done** — Doc 08 v2.7.0
  §6 (v2.5.0 DoD check) records US-0089 and US-0100 as now meeting the bar, total 14 → 16 (ISS-04).
  Verified by TC-3416, TC-3543, TC-3545, TC-3546, TC-3548–TC-3551 (TS-PROPOSALS, Doc 07 v2.4.4).
AC:
  Scenario: Proposal authorship is public
    Given a submitted proposal
    When any member views it
    Then the author's Worker-tier identity is shown publicly alongside the proposal
  Scenario: Competing proposal receives equal standing
    Given an open proposal Q submitted by Worker A
    When Worker B submits a competing proposal on the same question Q
    Then both proposals are presented with equal standing and voted in the same decision window
  Scenario (adversarial): Supporter-tier member attempts to author
    Given a Supporter-tier member who attempts to submit a proposal
    When the submission is processed
    Then it is refused; the member is offered the Worker-declaration path to gain authoring eligibility
    And Supporters retain full voting rights on all proposals
```
```
US-0106  Run mechanical anomaly detection over treasury records and publish every flag — flags inform only      (FE-045 · EP-11)
As a member or auditor, I want the platform to run automated anomaly detection over the public
treasury record and publish every flag on the party's transparency dashboard, so that unusual
patterns are visible without any flag triggering enforcement.
Owner: Erik Lindqvist   Priority: Must   Points: 8   Implements: FR-096 · none (G-TRACE)   Verified by: TC-3422   Depends on: US-0061
Note: Not Ready pending DES — FR-096 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Anomaly flag published on transparency dashboard
    Given a treasury record that triggers the velocity-anomaly rule in the published rule set
    When the detection runs
    Then the flag is published on the party's transparency dashboard and is publicly readable
  Scenario (adversarial): Flag freezes funds or blocks governance
    Given a treasury flag published by the anomaly detector
    When any actor examines what automatic consequences follow
    Then no funds are frozen and no governance action is blocked; consequences flow only from member
      votes or charter-declared code rules
  Scenario: Round-tripping pattern detected and published
    Given a treasury record containing a round-tripping pattern as defined in the published rule set
    When the detection runs
    Then the flag is published; auditors and members can see it; no enforcement pathway is triggered
```
```
US-0107  File a conflict-of-interest disclosure on the published schedule — a missing disclosure is flagged publicly      (FE-046 · EP-11)
As a Worker, Candidate, Office-holder or committee member, I want the platform to require me to file
a COI disclosure on the published schedule and on any material change, so that conflicts are visible
and a missing or overdue disclosure is flagged for members to see.
Owner: Ingrid Bergqvist   Priority: Must   Points: 5   Implements: FR-097 · none (G-TRACE)   Verified by: TC-3423   Depends on: US-0090
Note: Not Ready pending DES — FR-097 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Disclosure filed on schedule
    Given a Worker-tier member at the published filing date
    When they submit a COI disclosure
    Then the disclosure is recorded as public-class data on the participation record
  Scenario: Overdue disclosure visibly flagged
    Given a Worker-tier member who has not filed by the published deadline
    When the deadline passes
    Then a visible flag is added by code to their participation record; no human judgment in the path
  Scenario (adversarial): Material change not disclosed
    Given an Office-holder who incurs a material COI change and does not file an updated disclosure
    When the published material-change deadline passes
    Then the flag is added automatically to their public record
```
```
US-0108  Ensure COI review is investigation and recommendation only — no reviewer holds enforcement power      (FE-046 · EP-11)
As a member, I want to know that COI reviewers can investigate and recommend, but cannot force a
recusal or any outcome — consequences flow only from the subject's voluntary compliance, a member
vote, or a charter rule — so that review cannot be weaponised.
Owner: Ingrid Bergqvist   Priority: Must   Points: 5   Implements: FR-098 · none (G-TRACE)   Verified by: TC-3424   Depends on: US-0107
Note: Not Ready pending DES — FR-098 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Reviewer publishes recommendation only
    Given a sortition-selected COI reviewer who completes their review
    When the review is published
    Then it contains findings and a possible recusal recommendation; no binding ruling is issued
  Scenario (adversarial): Reviewer attempts to enforce recusal
    Given a reviewer panel that attempts to record a binding recusal order against the subject
    When the action is attempted
    Then no such capability exists; only the subject's recorded voluntary compliance, a member vote
      or a charter rule can effect a recusal
  Scenario: Recusal by member vote
    Given a passed member vote to recuse an Office-holder
    When the vote closes
    Then the recusal takes effect by code on the vote result, not on any reviewer authority
```
```
US-0109  Provide every active party with an independent internal audit by sortition — auditors inform, never enforce      (FE-047 · EP-11)
As a member, I want auditors selected per-case by sortition from eligible members, with read-only
access to all records and reports published on schedule, so that the audit function is independent
and carries no enforcement power.
Owner: Ingrid Bergqvist   Priority: Must   Points: 8   Implements: FR-099 · none (G-TRACE)   Verified by: TC-3425   Depends on: US-0061
Note: Not Ready pending DES — FR-099 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Auditors selected by sortition, no standing body
    Given an audit cycle for a party
    When auditors are selected
    Then they are drawn per-case by verifiable random selection from eligible members; no standing
      audit body exists anywhere
  Scenario: Auditors hold read-only access to all party records including restricted-class
    Given an active auditor in their current audit cycle
    When they access party records
    Then they can read all party records including restricted-class; they cannot write, modify or
      delete any record
  Scenario (adversarial): Audit finding used to block governance
    Given an audit finding published by auditors
    When any actor attempts to block a governance action based solely on the finding
    Then no such capability exists; findings inform and are publicly visible, but carry no enforcement power
```
```
US-0110  Enforce published maximum timelines per dispute stage — a breached timeline is itself recorded      (FE-048 · EP-11)
As a member in a dispute, I want every stage — intake acknowledgment, evidence window, panel
formation, recommendation publication, deciding vote — to run within its published maximum timeline,
and I want every breach to be recorded publicly on the decision trail.
Owner: Ingrid Bergqvist   Priority: Must   Points: 5   Implements: FR-100 · none (G-TRACE)   Verified by: TC-3426   Depends on: US-0061
Note: Not Ready pending DES — FR-100 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Stage completed within timeline
    Given a dispute entering the evidence-window stage
    When the evidence window closes on time
    Then the stage completion is recorded on the decision trail with a timestamp
  Scenario: Breached timeline recorded on decision trail
    Given a dispute where the panel-formation stage exceeds its published maximum
    When the breach occurs
    Then the breach is recorded on the decision trail with the expected-by and actual-close timestamps;
      the dispute continues; the breach itself is evidence available to members
  Scenario (adversarial): Timeline breach suppressed
    When any actor attempts to remove a recorded timeline breach from the decision trail
    Then the removal is refused; the record is append-only
```
```
US-0111  Draw appeal and review panels per case by verifiable sortition — panels recommend, never rule      (FE-048 · EP-11)
As a party member involved in any appeal or review, I want the panel to be drawn per-case by
verifiable random selection from the eligible member set, with the selection proof reproducible by
any third party, so that no standing body ever holds panel power.
Owner: Rafael Duarte   Priority: Must   Points: 8   Implements: FR-101 · none (G-TRACE)   Verified by: TC-3427   Depends on: US-0110
Note: Not Ready pending DES — FR-101 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Panel drawn by verifiable sortition
    Given a dispute requiring a review panel
    When the panel is formed
    Then members are drawn by verifiable random selection from the eligible set per the published
      eligibility criteria; the selection proof is publicly reproducible by any third party
  Scenario: No standing panel body exists
    Given the party governance configuration
    When it is inspected for a standing review panel body
    Then no standing panel body is configured anywhere
  Scenario (adversarial): Panel issues a binding ruling
    Given a panel that attempts to record a binding ruling against a party member
    When the ruling is submitted
    Then no binding-ruling capability exists; the panel output is a recommendation to the membership
      or an input to a charter code rule — never a ruling
```
```
US-0112  Publish a machine-readable member-rights charter — no party may reduce rights below the platform floor      (FE-049 · EP-11)
As a member, I want a machine-readable charter of my rights — covering join/leave, equal vote,
propose, compete, stand, appeal, fork, record access and tier-appropriate anonymity — with each
right enforced by code, so that no party charter can reduce any right below the platform floor.
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-102 · none (G-TRACE)   Verified by: TC-3428   Depends on: US-0024, US-0089
Note: Not Ready pending DES — FR-102 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Machine-readable rights charter is published and accessible
    Given the platform
    When a member requests the member-rights charter
    Then they receive a machine-readable document listing every right with its code-enforced capability mapping
  Scenario (adversarial): Party charter reduces a right below the platform floor
    Given a party that attempts to configure a charter rule that reduces the equal-vote right
    When the configuration is submitted
    Then it is rejected by code; no party charter may configure a right below the platform floor
  Scenario: Fork right is listed (subject to flag status per §13)
    Given the member-rights charter
    When the fork right entry is inspected
    Then it is listed and maps to FR-053 and FR-120; the current flag status (OFF above dev) is
      noted inline per §13
```
```
US-0113  Cast a conduct vote (up/down) on any public-tier participant using the same privacy mechanics as policy votes      (FE-050 · EP-11)
As a matured member, I want to cast a conduct vote on a Worker, Candidate, Office-holder or
committee member using the same nullifier, privacy and anti-capture mechanics as policy votes, so
that individual votes are private and only aggregates are public.
Owner: Daniel Okonkwo   Priority: Must   Points: 8   Implements: FR-103 · none (G-TRACE)   Verified by: TC-3429   Depends on: US-0089, US-0031
Note: Not Ready pending DES — FR-103 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Conduct vote cast with full privacy
    Given a matured member casting a conduct vote on a Worker
    When the vote is submitted
    Then it is private to the voter; only the aggregate result is public; the same nullifier and
      anti-capture mechanics as policy votes are applied
  Scenario (adversarial): Conduct vote attempted on Supporter-tier participant
    Given a matured member who attempts to cast a conduct vote on a Supporter-tier participant
    When the attempt is made
    Then it is refused by construction — no addressable identity exists for Supporter-tier participants
  Scenario: Individual vote remains private; aggregate is public
    Given five members who have cast conduct votes on a Worker
    When any actor inspects the record
    Then no individual vote is attributable to any voter; only the aggregate up/down count is visible
```
```
US-0114  Remove someone from a role only when an affirmative quorum actively votes to remove      (FE-050 · EP-11)
As a role-holder, I want to know that removal requires active affirmative votes at the published bar
— silence and absence do not remove — and that I have a right to place a statement on the record
before the vote closes and that a growth-surge defence applies.
Owner: Daniel Okonkwo   Priority: Must   Points: 8   Implements: FR-104 · none (G-TRACE)   Verified by: TC-3430   Depends on: US-0113, US-0089
Note: Not Ready pending DES — FR-104 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Affirmative quorum required for removal
    Given a removal vote that closes without reaching the published affirmative quorum
    When the vote result is processed
    Then the role-holder is not removed; silence and absence do not count as votes to remove
  Scenario: Statement right exercised before vote closes
    Given a role-holder whose removal is being voted on
    When they submit a statement before the vote window closes
    Then the statement is recorded on the public record before the vote closes
  Scenario (adversarial): Growth-surge used to drive removal vote
    Given a sudden flood of new members who join and immediately vote to remove a role-holder
    When the growth-surge defence (FR-023/FR-028 discipline; UT-0220) evaluates the ballot
    Then the removal vote fails the surge-defence check; the role-holder is not removed
```
```
US-0115  Expel a member from a party only at a higher bar than role removal — public tiers only      (FE-050 · EP-11)
As a member, I want to know that expulsion requires a strictly higher affirmative quorum and
supermajority than removal from any role, that Supporter-tier participants cannot be expelled
(Supporter fraud is handled by FR-005 credential revocation), and that expulsion revokes
membership but does not alter any historical record.
Owner: Daniel Okonkwo   Priority: Must   Points: 8   Implements: FR-105 · none (G-TRACE)   Verified by: TC-3431   Depends on: US-0114, US-0092
Note: Not Ready pending DES — FR-105 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Expulsion bar is strictly higher than role-removal bar
    Given a party whose published expulsion bar is compared to its role-removal bar
    When both bars are inspected
    Then the expulsion quorum and supermajority are strictly higher than those for role removal;
      the same statement right and growth-surge defence apply
  Scenario (adversarial): Supporter-tier expulsion attempted
    Given a matured member who attempts to initiate an expulsion vote against a Supporter
    When the attempt is made
    Then it is refused by construction — Supporter-tier participants are anonymous and cannot be expelled;
      Supporter fraud is addressed by FR-005 credential revocation acting on the credential
  Scenario: Expulsion revokes membership without altering historical records
    Given a passed expulsion vote
    When the expulsion is processed
    Then membership is revoked with a state transition recorded; no prior historical record is modified
      or deleted; the expulsion state transition is itself appended append-only
```
```
US-0119  View an aggregate-only party transparency dashboard — no per-member drill-down anywhere      (FE-052 · EP-11)
As any citizen, I want to view a party's transparency dashboard covering governance activity,
treasury summary with anomaly flags, participation aggregates and commitment progress, so that
accountability is real — and I want assurance that no per-member drill-down is possible anywhere.
Owner: Yuki Sato   Priority: Must   Points: 8   Implements: FR-109 · none (G-TRACE)   Verified by: TC-3435   Depends on: US-0061, US-0106, US-0105
Note: Not Ready pending DES — FR-109 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Dashboard shows required aggregate data
    Given any citizen viewing a party's transparency dashboard
    When the dashboard loads
    Then it shows: governance activity, treasury summary with anomaly flags, participation aggregates,
      commitment progress (linked to FR-095 commitment IDs), and dispute-timeline compliance
  Scenario (adversarial): Per-member drill-down attempted
    Given any actor who attempts to drill down from any dashboard aggregate to individual member data
    When the attempt is made
    Then no per-member data surface exists; the drill-down returns only aggregates
  Scenario: Data integrity
    Given the dashboard's treasury summary
    When it is compared against the public treasury record
    Then every figure is derivable from public data; no figure is fabricated or estimated
```
```
US-0120  Present the performance scorecard factually — no ranking, no editorial conclusions      (FE-052 · EP-11)
As a citizen evaluating a party's track record, I want to see commitments versus measured progress
with published methodology, baselines and evidence links — and I want assurance that the scorecard
never ranks parties against each other or emits editorial conclusions.
Owner: Yuki Sato   Priority: Must   Points: 5   Implements: FR-110 · none (G-TRACE)   Verified by: TC-3436   Depends on: US-0105, US-0119
Note: Not Ready pending DES — FR-110 has no DES assigned yet (Doc 03 §16 next-increment scope).
AC:
  Scenario: Scorecard shows factual commitment progress with evidence
    Given a party's performance scorecard
    When any citizen views it
    Then it shows: each commitment, its baseline, target, current status and linked evidence;
      the published measurement methodology is shown alongside every figure
  Scenario (adversarial): Scorecard ranks parties against each other
    Given an operator who attempts to add a cross-party ranking or score to the scorecard
    When the configuration is submitted
    Then no cross-party ranking capability exists; the attempt is refused
  Scenario: Scorecard does not emit editorial conclusions
    When the scorecard content is audited
    Then no editorial conclusion, grade, recommendation or qualitative rating is present;
      the scorecard presents facts and lets viewers conclude
```
```
US-0142  Follow every movement in and out of a party treasury      (FE-062 · EP-11)
As a member or auditor, I want every treasury inflow and outflow published as an itemised,
independently verifiable record, so that financial transparency is a property of the record
rather than a claim by the party.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-050 · DES-033 · none (RTM records no SCR)   Verified by: none — Doc 08 v2.7.0 §3.3 records no TC for FR-050; tester owed a TC at the next increment   Depends on: US-0061
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01/ISS-02). **FR-050 is
  Must**, not Should: SRS v2.16.3 §11 carries 050 in the Must row and states "FR-050 is raised from
  Should to Must (financial transparency is now a business requirement, BR-019)". **DES-033**
  (treasury caps + ledger) is assigned in SDD v2.11.2 §5.2, so this story is **Ready on its DES
  link** and open on implementation and test. Upstream of FR-096 (US-0106), which runs anomaly
  detection over this record. **Routed to the tester:** Doc 08 v2.7.0 §3.3 still classes FR-050 as
  Should and lists it under non-Must rows — that row MUST move to §3.1 as a gating Must row.
AC:
  Scenario: Every movement is published itemised and reproducible
    Given any treasury inflow or outflow for an active party
    When the event completes
    Then an itemised, publicly readable, independently verifiable record is published for it
    And any third party can reproduce the treasury state from the public record alone
  Scenario (negative): Unpublished or aggregated-away movement
    Given a treasury movement that is recorded internally but not published
    When the public treasury record is reconciled against the internal ledger
    Then the discrepancy is detectable by any third party
  Scenario (adversarial): Party or operator attempts to redact a published entry
    When any actor attempts to edit, delete or suppress a published treasury entry
    Then no such capability exists and the attempt is refused and logged
```

### EP-12 · Platform governance & stewardship

```
US-0122  Treat trust-anchor revocation as a member-voted governance action — no operator path exists      (FE-054 · EP-12)
As any enrolled citizen, I want revocation of a compromised trust anchor to be decided by member
vote through the platform-wide tiered process at its highest tier, with a published expedited
emergency variant, so that no operator, funder or employee can unilaterally revoke an anchor.
Owner: Rafael Duarte   Priority: Must   Points: 13   Implements: FR-112 · DES-090 (ADR-020)   Verified by: TC-3438, TC-3449   Depends on: US-0001, US-0038
Note: DES-090 (TrustAnchorLifecycle) is available from Doc 03 v2.x — re-confirm with architect
  after Doc 03 is updated per Gate 1.
AC:
  Scenario: Revocation decided by member vote at highest tier
    Given a trust anchor identified as compromised
    When a revocation proposal enters the platform-wide governance process
    Then it follows the tiered process at its highest tier; on enactment, code suspends new
      enrolments against the revoked anchor; no other path exists
  Scenario: Emergency expedited path exists but has a non-zero timelock
    Given an acute compromise requiring expedited action
    When an emergency revocation variant is initiated
    Then the expedited path is available with a shortened but non-zero, published timelock;
      the emergency variant is not zero-delay; no operator can reduce the timelock to zero
  Scenario (adversarial): Operator unilaterally revokes anchor
    Given an operator who attempts to revoke a trust anchor by any direct mechanism
    When the attempt is made
    Then no operator path exists for revocation; the attempt is refused and logged
```
```
US-0123  Require trust-anchor rotation to follow member-vote governance at a published tier      (FE-054 · EP-12)
As any enrolled citizen, I want legitimate rotation of a trust-anchor issuer key to go through the
same member-vote governance at a published tier, with a rotation schedule that never blocks new
enrolments beyond the published maximum, so that issuer-key lifecycle is governed, not operated.
Owner: Rafael Duarte   Priority: Must   Points: 8   Implements: FR-113 · DES-090 (ADR-020)   Verified by: TC-3439, TC-3452   Depends on: US-0122
Note: DES-090 (TrustAnchorLifecycle) is available from Doc 03 v2.x — re-confirm with architect
  after Doc 03 is updated per Gate 1.
AC:
  Scenario: Rotation follows member-vote governance
    Given a trust-anchor issuer key due for rotation
    When a rotation proposal is submitted
    Then it follows the member-vote governance path at the published tier; enactment is by code on
      vote close; enrolments under the outgoing anchor remain valid
  Scenario: Rotation schedule never blocks new enrolments beyond published maximum
    Given a rotation in progress
    When the rotation window exceeds the published maximum
    Then the platform flags this as a breach of the published rotation constraint; a compliant
      rotation is designed to complete before new enrolments are blocked
  Scenario (adversarial): Operator performs rotation without vote
    Given an operator who attempts to rotate an issuer key directly
    When the attempt is made
    Then no operator rotation path exists; the attempt is refused and logged
```
```
US-0124  Elect a platform-level steward body by all enrolled citizens — fixed terms, recallable mid-term      (FE-055 · EP-12)
As an enrolled citizen, I want to elect a platform-level steward body using the same anonymous
one-person-one-vote ballot mechanics as any other election, with fixed terms enforced by code,
mid-term recall at the same affirmative-quorum bar as any other removal, and steward candidacy
treated as a public-tier role-taking event.
Owner: Aisha Nkemdirim   Priority: Must   Points: 13   Implements: FR-114 · DES-088   Verified by: TC-3440   Depends on: US-0038, US-0091
Note: DES-088 (StewardRegistry) is available from Doc 03 v2.x — re-confirm with architect
  after Doc 03 is updated per Gate 1.
AC:
  Scenario: Steward election uses anonymous one-person-one-vote ballot
    Given the platform-level steward election
    When it runs
    Then it uses the FR-030..FR-035 ballot discipline (scope-bound nullifiers, anonymous eligible
      casting); every enrolled citizen participates regardless of party membership
  Scenario: Fixed term enforced by code; no renewal path except fresh election
    Given a steward body whose term end is reached
    When the term expires
    Then all steward mandates expire by contract-expiry mechanics (FR-089/FR-041 discipline);
      no renewal path exists; continuation requires a fresh election
  Scenario (adversarial): Steward attempts to extend their own term
    Given a steward whose term expires next month
    When any actor — including the steward — attempts to extend the term without a fresh election
    Then no such capability exists
  Scenario: Mid-term recall follows affirmative-quorum discipline
    Given a mid-term recall vote on a steward
    When it closes with an active affirmative quorum at the published bar
    Then the steward's mandate is revoked; the statement right and surge defence apply per FR-104
```
```
US-0125  Grant stewards only an exhaustive enumerated list of powers — anything else is refused      (FE-055 · EP-12)
As any enrolled citizen, I want to know that stewards hold only four enumerated capabilities —
drafting protocol proposals, coordinating audits/ceremonies/issuer-onboarding, holding funds and
signing vendor contracts, and publishing operational reports — and that any configuration granting
anything beyond this list is rejected by the system.
Owner: Rafael Duarte   Priority: Must   Points: 8   Implements: FR-115 · DES-089   Verified by: TC-3441   Depends on: US-0124
Note: DES-088 (StewardRegistry) is available from Doc 03 v2.x — re-confirm with architect
  after Doc 03 is updated per Gate 1.
AC:
  Scenario: Steward configuration inspected — only permitted capabilities present
    Given the platform-level steward configuration
    When it is inspected
    Then it contains only the four exhaustive capabilities; nothing beyond the list is configurable
  Scenario (adversarial): Configuration grants a fifth capability
    Given an actor who attempts to configure a steward with the capability to approve a protocol change
    When the configuration is submitted
    Then it is rejected by code; the FR-088-pattern exhaustive-list enforcement operates at platform level
  Scenario: Issuer onboarding coordination is not enactment
    Given a steward who coordinates issuer onboarding
    When the onboarding process is inspected
    Then the steward's role is coordination only; enactment executes through the timelocked governance
      path — coordination is not enactment
```
```
US-0126  Prohibit stewards from any power that can change who wins, who votes, or who is a member — no emergency override exists      (FE-055 · EP-12)
As any enrolled citizen, I want assurance that stewards cannot approve, enact or veto any protocol
change, cannot monopolise the proposal ballot, and that no emergency override path exists for stewards
or anyone else, so that governance capture at the steward level is provably impossible.
Owner: Rafael Duarte   Priority: Must   Points: 8   Implements: FR-116 · DES-089, DES-087, DES-092   Verified by: TC-3442   Depends on: US-0125
Note: DES-089 (StewardPowers) and DES-092 (StewardCoordination) are available from Doc 03 v2.x —
  re-confirm with architect after Doc 03 is updated per Gate 1.
AC:
  Scenario: Steward submits a protocol proposal; any citizen may submit a competing proposal
    Given a steward who submits a platform governance proposal
    When the proposal is submitted
    Then it enters the ordinary proposal channel with equal standing to any other proposal;
      any enrolled citizen may submit a competing proposal on the same question
  Scenario (adversarial): Steward monopolises the ballot
    Given a steward body that attempts to prevent a citizen's competing proposal from reaching the ballot
    When the attempt is made
    Then no such capability exists; citizens' proposals reach the ballot on equal terms
  Scenario: No emergency override path exists
    Given a steward or operator who claims an emergency requires overriding the governance path
    When they attempt to enact any governance change outside the voted process
    Then no emergency override capability exists; CON-003 is reaffirmed; the attempt is refused and logged
```
```
US-0127  Prove that the protocol operates unchanged when all stewards are absent      (FE-055 · EP-12)
As any enrolled citizen, I want a dedicated test suite to confirm that no citizen-facing capability
depends on any steward signature, action, approval or liveness, so that a steward organisation that
collapses does not affect any citizen's ability to enrol, join a party, vote, propose or fork.
Owner: Chen Wei   Priority: Must   Points: 13   Implements: FR-117 · DES-089, DES-092   Verified by: TC-3443, TC-3451, TC-3453, TC-3465–TC-3468   Depends on: US-0126
Note: DES-092 (StewardCoordination) is available from Doc 03 v2.x — re-confirm with architect
  after Doc 03 is updated per Gate 1.
AC:
  Scenario: Citizen flows operate with all stewards absent
    Given the platform running with every steward seat vacant (steward-vacancy simulation)
    When every citizen-facing capability — enrolment, party creation, voting, proposal submission,
      fork initiation — is exercised
    Then zero citizen-facing capabilities are degraded or unavailable
  Scenario (adversarial): Steward-dependency path introduced in new code
    Given new feature code deployed to a citizen flow
    When the steward-dependency absence suite runs (UT-0700/UT-0701 pattern)
    Then any path that requires a steward signature, action or approval fails the suite and
      blocks the release
  Scenario: Steward-vacancy simulation confirms zero degradation before Gate 2
    Given the full steward-vacancy simulation run before Gate 2
    When results are published
    Then zero citizen-facing degradation is recorded; the simulation output is a Gate 2 artefact
```
```
US-0128  Entrench seven charter rules as unamendable — amendment proposals targeting any of them are rejected by code      (FE-056 · EP-12)
As any enrolled citizen, I want seven rules — one human one vote; no transferable power; no
privileged role over outcomes; unconditional fork right; no behavioural surveillance; anonymity by
default; and CON-001 (parties only, never state elections) — to be entrenched as unamendable by
any vote and changeable only by fork, so that no majority can vote away the foundations of the
platform.
Owner: Rafael Duarte   Priority: Must   Points: 8   Implements: FR-118 · DES-087 (ADR-019)   Verified by: TC-3444, TC-3449, TC-3455   Depends on: US-0038, US-0121
Note: DES-087 (ProtocolGovernance) and DES-091 (GovernanceConstants) are available from Doc 03
  v2.x — re-confirm with architect after Doc 03 is updated per Gate 1.
AC:
  Scenario: Amendment proposal targeting Tier-1 rule rejected at submission
    Given a proposal that targets any of the seven entrenched rules — including a proposal to permit
      the platform to conduct state, municipal or other binding government elections
    When the proposal is submitted
    Then it is rejected by code at submission regardless of the proposer's tier or the level of
      claimed support; no deliberation phase is entered
  Scenario (adversarial): Supermajority attempts to amend an entrenched rule
    Given a proposal supported by 99% of enrolled citizens that targets an entrenched rule
    When the proposal is submitted
    Then code rejects it at submission; citizen support does not override entrenchment
  Scenario: All seven rules confirmed unamendable by the test suite
    Given the entrenched-rule suite
    When it runs against all seven rules including CON-001
    Then all seven rules are confirmed code-rejected at submission; the suite is a Gate 2 artefact
```
```
US-0129  Enforce a three-tier amendment structure — Tier 1 rejected by code, Tier 2 via super-process, Tier 3 ordinary      (FE-056 · EP-12)
As any enrolled citizen, I want the platform to enforce a three-tier amendment structure where Tier 1
proposals are code-rejected, Tier 2 (named absolutes — receipt-freeness, data minimisation, no
bespoke unaudited cryptography, non-violence) require a super-process with at least five defined properties,
and Tier 3 uses an ordinary platform-wide citizen vote, so that no rule can be changed at a lower
level of scrutiny than its risk warrants.
Owner: Tomás Ferreira   Priority: Must   Points: 13   Implements: FR-119 · DES-087, DES-091 (ADR-019)   Verified by: TC-3445, TC-3450, TC-3454, TC-3456–TC-3464, TC-3469   Depends on: US-0128
Note: DES-087 (ProtocolGovernance) is available from Doc 03 v2.x — re-confirm with architect
  after Doc 03 is updated per Gate 1.
AC:
  Scenario: Tier 2 proposal requires super-process
    Given a proposal that targets a Tier-2 named absolute (e.g., a proposal to weaken receipt-freeness)
    When the proposal is admitted as a Tier-2 proposal
    Then it enters the super-process specified in Doc 03; it requires: (a) supermajority materially
      above the ordinary tier, (b) a timelock long enough for the fork right to be exercisable, (c)
      two consecutive affirmative votes separated by that window, (d) growth-surge defence active
      throughout, and (e) an independent audit published before the second vote
  Scenario (adversarial): Tier-2 proposal attempts to use ordinary tier
    Given an actor who submits a proposal to weaken CON-013 (non-violence) through an ordinary vote
    When the proposal is submitted
    Then it is admitted as Tier-2 only; the ordinary proposal path is refused for Tier-2 proposals
  Scenario: Tier 3 proposal uses ordinary citizen vote
    Given a Tier-3 proposal (any platform rule not in Tier 1 or 2)
    When it passes the platform-wide ordinary citizen vote at the published quorum and supermajority
    Then it is enacted by code on close of the published timelock; no ratification step occurs
```
```
US-0130  Have the unconditional right to fork remain always exercisable — the fork right is entrenched      (FE-056 · EP-12)
As any enrolled citizen, I want the unconditional right to fork (export history and leave) to be
entrenched in the Tier-1 charter (FR-118) and to remain available regardless of any steward action
or protocol vote, so that even a captured majority cannot trap anyone.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-120 · DES-034   Verified by: TC-3446   Depends on: US-0128
Note: DES-034 (fork with lineage, from v1.x) and DES-087 (ProtocolGovernance) are available from
  Doc 03 — re-confirm with architect after Doc 03 is updated per Gate 1.
  OPEN CRITICAL: fork initiation flag is currently OFF above dev (§13 of Doc 02); this story
  records the design posture and the entrenched right. Do not implement fork initiation until the
  flag is cleared.
AC:
  Scenario: Fork right is entrenched and listed in member-rights charter
    Given the member-rights charter (FR-102/US-0112)
    When the fork right entry is inspected
    Then it maps to FR-120 and FR-118; it is listed as entrenched (Tier-1) and unamendable
  Scenario (adversarial): Protocol vote attempts to remove fork right
    Given a passed platform-wide vote that proposes to remove the unconditional fork right
    When the vote result is processed
    Then code rejects the enactment; the fork right is code-entrenched and cannot be removed by any vote
  Scenario: Steward action cannot limit fork right
    Given a steward body that attempts to restrict or condition the fork right
    When the attempt is made
    Then no such steward capability exists; the fork right is available regardless of steward action
```
```
US-0141  Keep single-issuer operation temporary by construction      (FE-056 · EP-12)
As any enrolled citizen, I want the Phase-1 single-rail limitation to be un-extendable by a
configuration flag, so that a dated pilot compromise cannot quietly become the permanent design.
Owner: Marcus Adeyemi   Priority: Must   Points: 3   Implements: FR-129 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0128, US-0135
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 124 (G-TRACE + G-PHASE3). **Which amendment tier governs (FR-118 Tier 1
  or FR-119 Tier 2) is deliberately unanswered and MUST NOT be assumed** — SRS v2.16.3 §4.43 owes
  that determination to the architect at the next Doc 03 increment. What is normative regardless of
  tier is tested below.
AC:
  Scenario (adversarial): Configuration flag attempts to extend the single-rail deployment
    Given an operator or maintainer who applies a configuration flag, environment variable or
      deployment default to extend Phase-1 single-rail operation beyond its published dated scope
    When the configuration is applied
    Then the system rejects it; no deployment flag or default may make single-issuer operation
      permanent or extend it
  Scenario: Only the Charter-layer amendment path can change the scope
    Given a Charter-layer amendment that has re-entered through Gate 1 and Gate 2 per CLAUDE.md,
      whose approved scope includes modifying the Phase-1 issuer-plurality limitation
    When the amendment is applied
    Then the issuer-plurality scope restriction may be extended or modified per that outcome
  Scenario (negative): Phase-1 limitation presented as permanent
    When any surface or configuration describes the single-rail deployment
    Then it is presented as a dated Phase-1 pilot limitation with Phase 2 (eIDAS 2.0) as the exit
      condition, and the accepted exclusion (a person without Aadhaar cannot enrol in the pilot
      region) is stated rather than hidden
```

## 7. Screen / UX inventory (provisional)

> **Provisional and non-binding.** The architect confirms, splits or merges these in Doc 03; the
> tester reconciles the final `SCR` links in the RTM (Doc 08). Every surface must satisfy `NFR-011`,
> `NFR-012`, `NFR-013` and `NFR-023`, and must define empty, loading, offline, sponsorship-queued,
> error and success states.
>
> **`DES` mapping for screens is deliberately not duplicated here** _(ISS-11 @ v2.3.0-c1)_: **SDD v2.11.2 §15**
> maps design elements to these screens and is the authority; this table carries the `FR`/`NFR`
> up-trace only, and the `Implements` column heading is read accordingly.
>
> **Corrected at v2.4.0 — SCR-22 and SCR-23 were inverted.** Two Approved documents agree against
> the v2.3.0 rows: SDD v2.11.2 §5.2 states "SCR-22 = Debate scheduling and attendance surface
> (FR-066, FR-067); SCR-23 = Candidate feedback voting surface (FR-065)", and Doc 08 v2.7.0 §3.1
> records FR-065→SCR-23 and FR-066/FR-067→SCR-22. The rows below now match, and §6 assigns
> **SCR-23** to US-0074/US-0075 and **SCR-22** to US-0076/US-0077. The rest of the table was
> reconciled to the §6 link mapping in the same pass.
>
> **Routed, not resolved (added at v2.5.0 — NEW-08 @ v2.4.0-c2): the SDD disagrees with itself.**
> The correction above is right, but it is not a clean two-against-one. **SDD v2.11.2 §10.12.4
> carries the inverse of its own §5.2** — `SCR-22 | Candidate feedback widget` and `SCR-23 | Debate
> schedule, attendance & post-debate vote` — and §10.12.2's row "3.2 Candidate selection" repeats
> the inversion in prose. So the position is: SDD §5.2 (incl. DES-066/DES-067) and Doc 08 v2.7.0
> §3.1 agree with the rows below; SDD §10.12.2/§10.12.4 do not. **This document follows §5.2 and
> the RTM**, and states the conflict rather than presenting the agreement as unanimous. → **architect**
> (with the **tester** for the RTM side). This is item (e) of the routed register in §12; the other
> four upstream conflicts are recorded there.

| Screen | Name | Feature | Implements |
|--------|------|---------|-----------|
| SCR-01 | Pre-enrolment disclosure & consent | FE-001 | FR-003, NFR-015, NFR-023 |
| SCR-02 | Attestor choice & enrolment | FE-001, FE-002, FE-034 | FR-001, FR-004, FR-069, FR-070 |
| SCR-03 | Residency attestation | FE-004 | FR-006, FR-008 |
| SCR-04 | Party draft editor (eight pillars) | FE-005, FE-006, FE-038 | FR-010, FR-011, FR-012, FR-077 |
| SCR-05 | Publish check & deficiency report | FE-006, FE-038 | FR-011, FR-077 |
| SCR-06 | Petition browser & detail | FE-007, FE-008, FE-009 | FR-013, FR-014, FR-017, FR-130 (§7 prov.) |
| SCR-07 | Endorse / withdraw | FE-007 | FR-014, FR-015 |
| SCR-08 | Threshold & denominator explainer | FE-008 | FR-009, FR-016 |
| SCR-09 | Activation record | FE-009 | FR-018, FR-130 |
| SCR-10 | Party home & aggregate membership | FE-010 | FR-020 |
| SCR-11 | Join / leave (single-party enforcement) | FE-009, FE-010, FE-030 | FR-020, FR-022, FR-064, FR-130 |
| SCR-12 | Proposal list & detail (tier, quorum, timelock) | FE-013, FE-014, FE-015, FE-039, FE-041, FE-042 | FR-024, FR-025, FR-026, FR-027, FR-080, FR-090, FR-091, FR-092 |
| SCR-13 | Ballot booth (cast / re-cast) | FE-017, FE-018, FE-058 | FR-030, FR-031, FR-032, FR-131 |
| SCR-14 | Result & verify-it-yourself | FE-019, FE-058 | FR-033, FR-055, FR-131 |
| SCR-15 | Nomination & disclosure consent | FE-020, FE-021, FE-039 | FR-036, FR-037, FR-038, FR-080 |
| SCR-16 | Election & office record | FE-022 | FR-039, FR-040, FR-041 |
| SCR-17 | Manifesto, commitments & version history | FE-023 | FR-046, FR-047, FR-048 |
| SCR-18 | Recall initiation & ballot | FE-024 | FR-042, FR-043, FR-044, FR-045 |
| SCR-19 | Account recovery (seedless + collision recovery) | FE-028, FE-035 | FR-058, FR-059, FR-071, FR-072 |
| SCR-20 | Public transparency dashboard & filtering log | FE-025, FE-026 | FR-054, FR-056, FR-057, NFR-019 |
| SCR-21 | Public participation profile | FE-029 | FR-062, FR-063 |
| SCR-22 | Debate schedule, attendance & post-debate vote | FE-032 | FR-066, FR-067 |
| SCR-23 | Candidate feedback widget | FE-031 | FR-065 |

## 8. Non-functional backlog items

> Explicit backlog items, not assumptions. Each is scheduled work with a named owner.

| ID | Item | Implements | Owner | Priority |
|----|------|-----------|-------|----------|
| NF-01 | Adversarial privacy audit: correlation, timing and metadata deanonymisation attempts against a production-like dataset | NFR-001, NFR-002, RISK-06 | Dr. Lena Kowalczyk | Must |
| NF-02 | Independent security and cryptography audit, zero critical/high open at Gate 2 | NFR-009, CON-012, RISK-10 | Rafael Duarte | Must |
| NF-03 | Red-team exercise: flash governance takeover and mob charter capture simulations | NFR-009, RISK-03, RISK-04 | Rafael Duarte | Must |
| NF-04 | Cost-per-action instrumentation and budget alerting against the USD 0.01 median target | NFR-005 | Hiroshi Tanaka | Must |
| NF-05 | Reference-device and low-bandwidth performance harness in CI | NFR-006, NFR-012 | Nadia Hassan | Must |
| NF-06 | Censorship and operator-censorship simulations (blocked domain; withheld action) | NFR-014, NFR-025, RISK-08, RISK-09 | Chen Wei | Must |
| NF-07 | Rollback drill proving < 15 min restore, plus the open-ballot flag freeze | NFR-020 | Chen Wei | Must |
| NF-08 | Public governance-health dashboard (activation, turnout, attestor concentration, duplicate rate, sponsorship exhaustion, anonymity delays) with zero individually identifying fields | NFR-019 | Yuki Sato | Should |
| NF-09 | Availability SLO instrumentation and error-budget dashboard (citizen write path ≥ 99.5% monthly; public read ≥ 99.9% monthly); single-operator-failure drill confirming no governance action blocked > 60 min; automated alerting when error budget drops below 50% | NFR-007 | Chen Wei | Must |

## 9. Estimation approach

Modified Fibonacci (1, 2, 3, 5, 8, 13). **Reference story: US-0024 "Join a party" = 3 points.**
Anything estimated above 13 must be split before it enters a sprint. Estimates are re-baselined once
the architect publishes Doc 03, because several stories (US-0007, US-0038, US-0041, US-0042, US-0068)
carry the bulk of the technical unknown and are deliberately estimated pessimistically until then.
**Total (v2.5.0): 142 stories, 875 points — an exact sum, not an approximation.** The distribution it is counted from: **23** stories at 3 · **67** at 5 · **41** at 8 · **11** at 13. Every story is accounted for (23 + 67 + 41 + 11 = **142**) and the points reconcile (69 + 335 + 328 + 143 = **875**). The version chain lands on it: v1.1.1 pinned 83 stories at 499 points; the v2.0.0 Gate-1-re-entry catch-up adds 47 stories at **308** points → 807; v2.1.0 adds US-0131 (3) → 810; v2.2.0 adds US-0132 (5), US-0133 (8), US-0134 (8): +21 → 831; **v2.4.0 adds the eight Must-coverage stories on the US-0024 = 3 reference scale — US-0135 5, US-0136 5, US-0137 5, US-0138 8, US-0139 5, US-0140 8, US-0141 3, US-0142 5: +44 → 875**. _(NEW-07 @ v2.4.0-c2: this line read "approximately 880 points". The +44 delta was exact; the drift was inherited from the pre-v2.4.0 total of "~836", whose true value is 831, and it sits in the v2.0.0 catch-up line, recorded as "approximately 313" at preliminary estimates. **Honesty about the chain:** only the **875** is counted — recomputed from the current `Points:` fields, and to be recomputed on every bump. The 308 is **derived** from it (875 − 44 − 21 − 3 − 499), not independently recounted; if the pinned v1.1.1 base of 499 is itself off, the residue moves there and the total is unaffected. A figure that is mechanically checkable should be stated exactly rather than approximately, which is the whole reason for the change.)_ _(ISS-07 @ v1.1.0-c1: v1.0.0 base corrected to actual point sum. v2.0.0 estimates remain subject to revision as DES links are assigned; the six v2.4.0 stories that are "Not Ready pending DES" are estimated pessimistically for the same reason.)_

## 10. Backlog refinement cadence & WIP limits

- **Refinement:** Fortnightly, 60 minutes, product-owner-led; architect, engineer and tester consulted (aligned with Doc 13 §8.2). _(ISS-08 @ v1.1.0-c1: cadence corrected from "weekly" to "fortnightly" to match the project plan. Not to be confused with ISS-08 @ v2.3.0-c1, the `Source:` pin — see the citation convention in §12.)_
- **Entry condition:** a story is pulled only when it satisfies the Definition of Ready below.
- **WIP limits:** 3 stories in progress per engineer pair; **1** guardrail story
  (any story implementing a Must NFR or a guardrail FR) in review at a time — guardrails get
  undivided review attention.
- **Ordering rule:** the walking skeleton (US-0001 → US-0060 along the primary path) is not
  re-ordered for convenience. Cross-cutting stories US-0061, US-0066 and US-0070 are pulled forward
  and must be true of the first action ever taken in production.

## 11. Definition of Ready / Definition of Done (team-wide)

**Ready:** traces to an `FR`/`NFR` in Doc 02 · traces to a `DES-###` in Doc 03 (and a `SCR-##` if it
has UI) · Gherkin AC written, including at least one negative or adversarial scenario · owner named
(a person) · estimated · dependencies identified · privacy and coercion impact considered and stated.

**Done:** merged to trunk behind a flag · `UT-####` unit tests green · `TC-####` passing ·
telemetry emitted · accessibility checked (`NFR-011`) · no new personal data introduced (`NFR-010`
data-inventory check green) · **RTM row (Doc 08) complete** · reviewed and merge signed by
reviewer-qa (the engineer never merges their own work).

**Stop conditions — kill criteria exist, and are deliberately not restated here** _(added at
v2.5.0; answers the B5/B1 residual carried at v2.3.0-c1 and v2.4.0-c2, "no kill criteria at epic or
story level")_. Seven kill/pivot criteria are stated in **Doc 01 §E2** and tabulated with trigger,
measurement owner, escalation path and action in **Doc 13 §14** as **`KC-1`** (privacy failure —
KILL), **`KC-2`** (coercion failure), **`KC-3`** (adoption failure), **`KC-4`** (thesis failure),
**`KC-5`** (legal failure), **`KC-6`** (economic failure) and **`KC-7`** (capture failure); the
plan-level stop conditions sit in the same section. **This backlog does not hold its own kill
criteria, because a criterion stated in two documents drifts** — Doc 13 §14 is the single source,
and the project-manager raises a tripped criterion to the human approver within one business day.
What the backlog does owe is the **instrumentation**, and it is scheduled work with named owners in
§8: **`NF-08`** (public governance-health dashboard, `NFR-019`) carries the live published metrics
for `KC-3` and `KC-4` — the obligation Doc 04 §A-15.3 registers; **`NF-01`** (adversarial privacy
audit) carries the evidence path for `KC-1`; **`NF-04`** (cost-per-action instrumentation) for
`KC-6`. **Backlog-level consequence: if a kill criterion trips, the affected epic's stories stop.
They are not quietly re-sequenced, re-scoped or absorbed into a later increment.** Owner:
**Priya Raghunathan**, with **Ana-Maria Petrescu** (PM) on the raise path.

> **Authority convention (adopted at v2.4.0 — ISS-04, ISS-06).** The **RTM (Doc 08) is the authority
> on the Definition of Done**; this backlog only *mirrors* it, and every place it does MUST carry an
> explicit version pin so the drift becomes visible on the next RTM bump. **The pin in force is
> Doc 08 v2.7.0**, which records **17 stories meeting DoD** (17 of 134 when written; the eight
> stories minted at v2.4.0 are all short of DoD, so the numerator is unchanged and the denominator
> is now 142). Where Doc 05 and the RTM disagree, the RTM wins and Doc 05 is the defect.
> **Doc 07 v2.4.4 is the authority on which `TC` belongs to which `US`** wherever its §5.x case
> register carries a per-story heading; the RTM's per-FR `TC` cell is used only where Doc 07 does
> not. **`SCR`** comes from RTM §3.1/§3.2 where that table carries one; RTM §3.3 (Should/Could) has
> no `SCR` column, so for those stories the `SCR` is this document's §7 provisional inventory and is
> marked `(§7 prov.)`. **`DES: none` and `TC: none` are positive statements that the Approved
> sources record none — never blanks, and never invented to close a chain on paper.** **`SCR` is a
> conditional segment**: present when an Approved source records a screen, absent when none is
> recorded, and its absence is a **defined non-claim** — "this document claims no screen for this
> story" — not a blank _(narrowed at v2.5.0, NEW-04 @ v2.4.0-c2; the full rule, the census that
> forced it, and the maintenance obligation that keeps it honest are in the §6 preamble)_.

## 12. Traceability

Coverage assertion at **v2.5.0** — to be independently verified by the tester in the RTM (Doc 08).
_(ISS-13 @ v2.3.0-c1: advance this label with the document version on every bump — the same
maintenance rule SRS §11 applies to its Counts heading. It was frozen at v2.0.0 through four
versions. Re-checked at v2.5.0: no story, feature, epic or NF item was minted, retired or
renumbered in this version, so every coverage figure below is carried forward by verification, not
by assumption — the DES census (109/33), the TC census (132/10) and the story population (142) were
each re-counted.)_

> **Review-issue citation convention (adopted at v2.5.0 — NEW-06 @ v2.4.0-c2).** This document has
> been through six review cycles and every cycle numbers its findings from 1, so a bare `ISS-07`
> has meant four different things and a reader following a citation landed on the wrong finding
> about half the time. **Every in-line citation of a review finding is now qualified
> `<ID> @ v<document-version>-c<cycle>`** — the version that was reviewed and the cycle number,
> which together name exactly one report in `artifacts/reviews/`. So `ISS-10 @ v1.1.0-c1` is the
> WSJF sequencing rule and `ISS-10 @ v2.3.0-c1` is the Definition-A/B scope note; `ISS-08 @
> v1.1.0-c1` is the refinement cadence and `ISS-08 @ v2.3.0-c1` is the `Source:` pin; `ISS-D @
> v1.1.1-c2` is the NF-item count. Cycle-2 findings on v2.4.0 keep the reviewer's own **`NEW-nn`**
> prefix and are cited `NEW-nn @ v2.4.0-c2`; that prefix collides with no `ISS-` series. An
> unqualified `ISS-nn` appearing inside a `Change:` entry refers to the report named at the head of
> that entry.

- **All 114 Must FRs** in Doc 02 (**SRS v2.16.3 §11**, Approved 2026-08-30) are implemented by at
  least one story, as of v2.4.0 and re-confirmed at v2.5.0 (no requirement or story changed). _(ISS-01 @ v2.3.0-c1: this line read "All 101 Must FRs in Doc 02 v2.2.0" from
  v2.0.0 to v2.3.0. The population was 114, not 101, and eight Must FRs — FR-050, FR-121, FR-125,
  FR-126, FR-127, FR-128, FR-129, FR-133 — had no story anywhere in this document and were not
  declared as gaps, so the true figure at v2.3.0 was **106 of 114**. RTM v2.7.0 §7 gap-log entries
  119–126 corroborate each one. The eight stories minted at v2.4.0 (see the v2.4.0 additions bullet
  below) close all eight chains at this document; the RTM must still verify them downstream.)_
- **Must-NFR → story/NF-item coverage map** (24 Must NFRs; re-confirmed at v2.4.0 against SRS
  v2.16.3 §8, which records Gherkin on 24 of 24 Must NFRs):
  NFR-001→US-0007, US-0038, NF-01 · NFR-002→US-0039, NF-01 · NFR-003→US-0041, US-0042 · NFR-004→US-0005, NF-01 ·
  NFR-005→US-0066, NF-04 · NFR-006→NF-05 · NFR-007→NF-09 · NFR-009→NF-02, NF-03 ·
  NFR-010→US-0002, NF-01 · NFR-011→US-0070, FE-028 · NFR-012→NF-05 · NFR-013→US-0070, FE-028 ·
  NFR-014→NF-06 · NFR-015→US-0003, SCR-01 · NFR-016→US-0068, FE-028 · NFR-017→US-0065 ·
  NFR-020→NF-07 · NFR-021→US-0062 · NFR-022→US-0070 · NFR-023→US-0066, US-0003 ·
  NFR-024→US-0059, NF-08 · NFR-025→NF-06 ·
  **NFR-027→US-0121, NF-01** (v2.0.0 new Must NFR: no per-user behavioural telemetry) ·
  **NFR-028→US-0117** (v2.0.0 new Must NFR: append-only data lifecycle).
- Must FR → story map (v1.0.0 carries forward unchanged, v1.1.x new FRs appended below; v2.0.0 additions follow):
  FR-001→US-0001 · FR-002→US-0006, US-0007 ·
  FR-003→US-0002, US-0003 · FR-004→US-0004, US-0005 · FR-006→US-0008 · FR-007→US-0010 ·
  FR-008→US-0009 · FR-009→US-0019, US-0020 · FR-010→US-0011, US-0012 · FR-011→US-0014, US-0015 ·
  FR-014→US-0016 · FR-016→US-0019 · FR-018→US-0022 · FR-020→US-0024, US-0026 · FR-021→US-0027 ·
  FR-022→US-0025 · FR-023→US-0029, US-0030 · FR-024→US-0031 · FR-025→US-0033, US-0034 ·
  FR-026→US-0035 · FR-027→US-0036 · FR-028→US-0037 · FR-030→US-0038 · FR-031→US-0041 ·
  FR-032→US-0042 · FR-033→US-0044, US-0045 · FR-035→US-0028, US-0040 · FR-036→US-0046, US-0047 ·
  FR-037→US-0049, US-0050 · FR-039→US-0051, US-0052 · FR-040→US-0053 · FR-042→US-0057 ·
  FR-043→US-0058 · FR-045→US-0060 · FR-047→US-0055 · FR-051→US-0028 · FR-054→US-0061 ·
  FR-056→US-0064, US-0065 · FR-058→US-0068 · FR-059→US-0069 · FR-060→US-0066 · FR-061→US-0067.
- **v1.1.0 additions (CR-v1.1.0):** FR-062→US-0071 (superseded — see annotation) · FR-063→US-0072 · FR-064→US-0073 ·
  FR-065→US-0074, US-0075 · FR-066→US-0076 · FR-067→US-0077 · FR-068→US-0078 ·
  FR-069→US-0079 · FR-070→US-0080 · FR-071→US-0081 · FR-072→US-0082 · FR-073→US-0083.
- **v2.0.0 additions (Gate 1 re-entry catch-up):**
  FR-074→US-0084 · FR-075→US-0085 · FR-076→US-0086 · FR-077→US-0087 · FR-078→US-0088 ·
  FR-079→US-0089 · FR-080→US-0090 · FR-081→US-0091 ·
  FR-082→US-0092 · FR-083→US-0093 · FR-084→US-0094 · FR-085→US-0095 · FR-086→US-0096 ·
  FR-087→US-0097 · FR-088→US-0098 · FR-089→US-0099 · FR-090→US-0100 ·
  FR-091→US-0101 · FR-092→US-0102 · FR-093→US-0103 ·
  FR-094→US-0104 · FR-095→US-0105 ·
  FR-096→US-0106 · FR-097→US-0107 · FR-098→US-0108 · FR-099→US-0109 ·
  FR-100→US-0110 · FR-101→US-0111 · FR-102→US-0112 ·
  FR-103→US-0113 · FR-104→US-0114 · FR-105→US-0115 ·
  FR-106→US-0116 · FR-107→US-0117 · FR-108→US-0118 ·
  FR-109→US-0119 · FR-110→US-0120 · FR-111→US-0121 ·
  FR-112→US-0122 · FR-113→US-0123 ·
  FR-114→US-0124 · FR-115→US-0125 · FR-116→US-0126 · FR-117→US-0127 ·
  FR-118→US-0128 · FR-119→US-0129 · FR-120→US-0130.
- **v2.1.0 addition (C-02 ruling, Rathish, 2026-08-22):** FR-130→US-0131. **v2.4.0 correction (ISS-04, ISS-07):** the "DES owed" and "RTM row OPEN" claims are superseded — **DES-102 is assigned** to FR-130 (SDD v2.11.2 §5.2), Doc 08 v2.7.0 §7 entry **125 is RETIRED**, and Doc 08 v2.7.0 §6 records US-0131 as **meeting the Definition of Done** at RTM v2.4.0 ("it moves from Status: Partial to done"). Implementation exists (Doc 06 v2.2.0); TC-3511..TC-3516 (Doc 07 v2.2.2) plus TC-3528/TC-3529 (TS-MEMBERSHIP, Doc 07 v2.4.4).
- **v2.2.0 additions (scaffold traceability gap, Rathish directive, 2026-08-25):**
  FR-082..086→US-0092..0096 (existing) **and** US-0132 (design-system seam; DES-093/094 assigned) ·
  FR-122→US-0133 (IEligibilityVerifier seam; DES-095 assigned; ADR-024/025) ·
  FR-123→US-0133 (same seam) ·
  FR-124→US-0132 (design-system seam; verified-status privacy backing; DES-093/094 assigned) ·
  FR-131→US-0132 (backing-aware 'ver' copy, clause 7), US-0133 (clause d refusal notice),
    US-0134 (honest pre-action notice and results-embargo contract; DES-096 assigned; ADR-024) ·
  FR-132→US-0133 (government-ID check gates counting actions, never joining).
  All three stories Status: Partial — built and tested; RTM rows OPEN; DoD not satisfied
  (Doc 08 v2.7.0 §6). **TC is NOT open** — corrected at v2.4.0 (ISS-05): Doc 07 **v2.4.4** §5.3
  `TS-SCAFFOLD` carries **TC-3470..TC-3488** for exactly these three stories — 19 cases, 16 with
  **Pass (obs.)** evidence dated 2026-08-25, 3 **Blocked** (TC-3476 enrolment disclosure affordance,
  TC-3481 FR-131 clause (d) notice for the SCR-13/SCR-14 ballot surfaces, TC-3487 audit-contract
  publication). Per-story split: US-0132 → TC-3470..TC-3476 + TC-3488 · US-0133 → TC-3477..TC-3481 ·
  US-0134 → TC-3482..TC-3487.
- **DES links available for FR-112..FR-120** (Doc 03 v2.x; re-confirm with architect after Doc 03 updated):
  FR-112, FR-113 → DES-090 (TrustAnchorLifecycle) ·
  FR-114 → DES-088 (StewardRegistry) ·
  FR-115, FR-116 → DES-089 (StewardPowers) + DES-092 (StewardCoordination) ·
  FR-117 → DES-092 (StewardCoordination) ·
  FR-118, FR-119 → DES-087 (ProtocolGovernance) + DES-091 (GovernanceConstants) ·
  FR-120 → DES-034 (fork with lineage, from v1.x) + DES-087 (ProtocolGovernance).
- Should/Could FRs covered: FR-005 (deferred — see gap note), FR-012→US-0013 · FR-013→US-0021 ·
  FR-015→US-0017 · FR-017→US-0018 · FR-019→US-0023 · FR-029→US-0032 · FR-034→US-0043 ·
  FR-038→US-0048, US-0049 · FR-041→US-0053 · FR-044→US-0059 · FR-046→US-0054 (superseded) · FR-048→US-0056 ·
  FR-055→US-0062, US-0063 · FR-057→US-0065.
- **Known gaps (carried from v1.0.0, declared, not hidden — corrected at v2.4.0, ISS-02):**
  `FR-005` (credential revocation and appeal, **Should**), `FR-049` (treasury caps, **Should**),
  `FR-052` (spend approval, **Could**) and `FR-053` (party fork, **Could**) have **no story yet**.
  Those four priorities were re-verified against SRS v2.16.3 §11 while making this edit and are
  correctly classified. They MUST be storied before their target sprint. Owner:
  **Priya Raghunathan**.
  **`FR-050` (public treasury record) has been removed from this list — it was never a Should.**
  SRS v2.16.3 §11 carries 050 in the **Must** row and states: "FR-050 is raised from Should to Must
  (financial transparency is now a business requirement, BR-019)". Presenting an uncovered **Must**
  row as a non-blocking Should/Could gap understated the Gate-2 exposure for three versions, and §3
  of this document declares MoSCoW inherited from Doc 02 to be authoritative — so this was a defect
  against Doc 05's own stated authority. FR-050 is storied at v2.4.0 by **US-0142** (FE-062 · EP-11;
  owner Erik Lindqvist; DES-033 assigned). **Routed to the tester:** Doc 08 v2.7.0 §3.3 still
  classes FR-050 as Should and lists it under non-Must rows — that row MUST move to §3.1 as a
  gating Must row before Gate 2.
- **DES readiness — re-scoped at v2.4.0 against SDD v2.11.2 (Approved) and Doc 08 v2.7.0 §7
  (ISS-07).** The blanket v2.0.0 claim that "FR-074..FR-111 have no DES assigned" and the v2.1.0
  claim that FR-130 has none are **both superseded**. Assigned since: **FR-077 → DES-101** ·
  **FR-079 → DES-103** · **FR-080 → DES-103** · **FR-090 → DES-104** · **FR-091 → DES-105** ·
  **FR-092 → DES-106** · **FR-130 → DES-102** (Doc 08 v2.7.0 §7 records the movements: entries
  70/81 RETIRED at RTM v2.5.0, 71 RETIRED at v2.5.1, 125 RETIRED at v2.4.0, 68 reclassified at
  v2.4.0). Note that **DES-103 covers both FR-079 and FR-080**, and **DES-104 covers FR-090** — the
  review's "FR-079/FR-080 → DES-103/DES-104" shorthand is loose; SDD §5.2 is the authority.
  What actually remains open is **33 live FR-level G-TRACE chains** in Doc 08 v2.7.0 §7:
  FR-074, FR-075, FR-076, FR-078, **FR-081 (US-0091)**, FR-087, FR-088, FR-089, FR-093..FR-111,
  plus the six new-story chains FR-121, FR-125, FR-126, FR-127, FR-128 and FR-129. Every story on a
  live chain carries "Not Ready pending DES" in §6 and names its gap-log entry; those stories
  satisfy the Definition of Ready only after the architect assigns a DES. FR-112..FR-120 keep the
  provisional DES links mapped above, subject to re-confirmation.
  **v2.5.0 — the sweep was completed and the population re-counted (NEW-02 @ v2.4.0-c2).** The
  v2.4.0 ISS-07 sweep corrected seven stale "no DES assigned yet" notes and stopped five short:
  **US-0092..US-0096** carried `DES-093, DES-094` on the owner line and "FR-08x has no DES assigned
  yet" on the next line, contradicting SDD v2.11.2, contradicting Doc 08 v2.7.0 §7 entries 73–77,
  and contradicting this paragraph — which has never listed FR-082..086 among the live chains. All
  five are corrected in §6. The whole population was then re-counted: **33** stories carry
  `none (G-TRACE)` on their `Implements:` line (this is the figure the 109 + 33 = 142 census rests
  on, and it is correct); **31** stories carry the "has no DES assigned yet" note, of which the
  **5** above were wrong and **26** are right — FR-074, FR-075, FR-076, FR-078, FR-087, FR-088,
  FR-089 and the nineteen consecutive chains FR-093..FR-111, each checked against the list above
  and against Doc 08 v2.7.0 §7. The 33 break down as those 26 + **US-0091** (which states its
  exception in bespoke wording) + the **6** stories minted at v2.4.0 that cite their gap-log entry
  directly. _(The cycle-2 report put the population at "33 of them, 28 correct"; the 32nd match was
  the transcription-residue line removed by NEW-01, and the residue after correction is 26, not 28.
  The finding itself was exactly right — only its arithmetic drifted, and it is recorded here so
  the next sweep starts from a true number.)_ **No sixth stale note exists.**
  **Three source disagreements are routed, not resolved here** _(locally lettered; the canonical
  register of all five upstream conflicts this document has found is the "Routed OUT" list in the
  v2.5.0 `Change:` entry, and each is owned by another role)_: (i) SDD v2.11.2 §5.2 lists FR-075 in
  DES-102's `Satisfies` while Doc 08 v2.7.0 §3.1 records FR-075's DES as `none` (G-TRACE) — one of
  the two is wrong; US-0085 keeps the conservative reading ("Not Ready pending DES") until the
  architect and tester agree; (ii) Doc 08 v2.7.0 §3.2 records NFR-007 as having no story and no
  backlog item, although §8 **NF-09** has implemented NFR-007 since v1.1.1 — that row should read
  `NF-09` and its G-TRACE tag should retire; (iii) **added at v2.5.0 (NEW-08 @ v2.4.0-c2)** —
  SDD v2.11.2 §10.12.2 and §10.12.4 carry **SCR-22 and SCR-23 inverted** relative to the same
  document's §5.2 (and its DES-066/DES-067 rows) and relative to Doc 08 v2.7.0 §3.1. The SDD
  disagrees with itself; §6 and §7 of this document follow §5.2 and the RTM, and say so.
  (i) and (ii) → tester (Ji-woo Park), (i) also → architect; (iii) → architect, with the tester on
  the RTM side.
- **v2.3.0 TC assignments (party-creation drop, Doc 07 v2.2.2):**
  US-0011→TC-3489..TC-3493/TC-3515 (FR-010 collision + emblem UI + BR-020) ·
  US-0013→TC-3497..TC-3498 (FR-012 defaults + bounds) ·
  US-0014→TC-3494..TC-3496 (FR-011 protocol+sdk+web) ·
  US-0021→TC-3499..TC-3503 (FR-013 expiry/archive/cooldown) ·
  US-0022→TC-3504..TC-3506 (FR-018 threshold gate) ·
  US-0024→TC-3507 (FR-020 join-no-verifier) ·
  US-0087→TC-3508..TC-3510 (FR-077 non-violence clause) ·
  US-0131→TC-3511..TC-3516 (FR-130 cap + BR-020 ProvisionalStatus).
- **v2.2.0 DES assignments (scaffold drop, Doc 03 v2.7.1):**
  FR-082..086, FR-124, FR-131 (US-0132) → DES-093 (token set), DES-094 (PrivacyStatus) — assigned.
  FR-122, FR-123, FR-132 (US-0133) → DES-095 (IEligibilityVerifier) — assigned; ADR-024/025.
  FR-131 (US-0134) → DES-096 (IBallotService) — assigned; ADR-024.
  US-0132..0134 satisfy the DES readiness condition for their primary DES; downstream screen
  wiring and audit-contract wiring remain owed (clause-8 disclosure affordance; tally-hash
  publication endpoint).
- **v2.4.0 Must-FR additions — the eight uncovered Must chains, closed (ISS-01, ISS-02):**
  FR-121→US-0135 (FE-059) · FR-125→US-0136 (FE-060) · FR-133→US-0137 (FE-060; **DES-099**) ·
  FR-126→US-0138 (FE-061) · FR-127→US-0139 (FE-061) · FR-128→US-0140 (FE-061) ·
  FR-129→US-0141 (FE-056) · FR-050→US-0142 (FE-062; **DES-033**).
  Six of the eight are **Not Ready pending DES**, each citing its Doc 08 v2.7.0 §7 entry
  (119–124); only US-0137 and US-0142 carry an assigned DES. **No DES link was invented to close a
  chain on paper** — honesty over coverage-theatre. None of the eight has a TC; the tester owes
  eight `TC-####` at the next Doc 07 increment.
- **v2.4.0 TC reconciliation against Doc 07 v2.4.4 (Approved) — ISS-05.** `TS-SCAFFOLD` =
  **TC-3470–TC-3488** (19 cases; 16 Pass (obs.) dated 2026-08-25; 3 Blocked). Two suites landed
  after v2.3.0 was written and are recorded here for the first time: `TS-MEMBERSHIP` =
  **TC-3517–TC-3540** (24 cases, 0 Blocked) and `TS-PROPOSALS` = **TC-3542–TC-3563** (22 cases,
  0 Blocked); `TS-PARTY` gained **TC-3541** (29 cases). Per-story `TC` links are carried in each
  story's `Verified by:` field in §6 under the provenance rule stated there. **Routed to the
  tester:** TC-3555 is double-assigned — Doc 07 §5.6 heads TC-3552..TC-3555 to FR-091 / US-0101
  while Doc 08 v2.7.0 §3.1 also lists TC-3555 under FR-122 (US-0133); this document follows Doc 07.
- **v2.5.0 TC provenance sweep — the §6 rule enforced where this document was breaking it
  (NEW-03 @ v2.4.0-c2).** §6 states "Doc 07 wins where the two disagree", and seven claims in §6
  were made against Doc 07's own per-story headings, all of them sourced from a Doc 08 §3.1 FR row
  whose `US` cell names two stories. **Dropped from `Verified by:`:** TC-3476 and TC-3481 from
  **US-0134** (Doc 07 §5.3 heads them to US-0132 and US-0133 respectively); TC-3470 + TC-3474 from
  **US-0092**, TC-3471 + TC-3474 from **US-0093**, TC-3472 + TC-3474 from **US-0094**, TC-3474 +
  TC-3476 from **US-0095**, TC-3474 from **US-0096** — Doc 07 §5.3's `TC-3470..TC-3476` block heads
  every one of those cases to **US-0132 alone**, row by row. Each affected story records the RTM
  association in its Note rather than claiming the case, and **each retains its own case**
  (TC-3408..TC-3412 for US-0092..US-0096; TC-3482..TC-3487 + TC-3534/TC-3535 for US-0134), so the
  **132-of-142 TC census below is unchanged** and no evidence is lost — the dropped cases sit on
  US-0132, on the same FR row. **Routed to the tester (Ji-woo Park) alongside TC-3555:** the same
  double-assignment condition that TC-3555 is routed for holds for TC-3470..TC-3476 and TC-3481,
  and belongs in Doc 07/Doc 08 reconciliation rather than in this document.
- `DES-###` links: **assigned wherever an Approved source records one** — 109 of 142 stories carry a
  DES in their `Implements:` field, from SDD v2.11.2 §5.2/§15 cross-checked against Doc 08 v2.7.0
  §3.1/§3.2. The remaining 33 sit on the live G-TRACE chains listed in the DES-readiness paragraph
  above, say so in the field, and are **Not Ready**.
- `SCR-##` links: **75 of 142** stories carry an `SCR-##` in their `Implements:` field, **12** more
  carry an explicit `none (…)` statement (`none (RTM records no SCR)`, `none (deliberate)`,
  `— (no UI clause)`, `all primary`), and the remaining **55** carry no `SCR` segment — which,
  under the rule narrowed at v2.5.0, is a defined non-claim and not a blank: this document claims
  no screen for those stories. Screens come from Doc 08 v2.7.0 §3.1/§3.2, or from §7 for an RTM
  §3.3 row, marked `(§7 prov.)`. _(NEW-04 @ v2.4.0-c2: the v2.4.0 `Change:` entry asserted "78
  carry an SCR" — the counted figure is 75, and it was the one census of the three that had
  drifted. The convention, the reasoning for narrowing it rather than annotating 55 stories, and
  the maintenance obligation that keeps it honest are in the §6 preamble and §11.)_
- `TC-####` links: **assigned** — 132 of 142 stories carry at least one `TC` in their `Verified by:`
  field. Ten carry none and say so in the field: US-0023, US-0056 and the eight stories minted at
  v2.4.0; the tester owes those ten a `TC` at the next Doc 07 increment. _(ISS-05 @ v2.3.0-c1: the previous
  blanket line "`TC-####` links: not yet assigned — added by the tester in Doc 07" was false for the
  whole document — Doc 07 v2.4.4 carries 465 cases, and §12 itself listed TC-3489..TC-3516 two
  bullets above it.)_

---

### Downstream
Stories are built per Doc 06 (Coding & UT), verified by Doc 07 (Test Cases), and reconciled in
Doc 08 (RTM). No story may be started before Gate 1 direction is confirmed.
