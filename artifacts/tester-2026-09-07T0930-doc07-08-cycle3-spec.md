# Anchored spec — Doc 07 v2.8.1 and Doc 08 v2.11.1 (rework cycle 3 of 5)

```
Prepared by:  tester (Ji-woo Park) — owner of Doc 07 and Doc 08
Date:         2026-09-07
For:          project-manager (mechanical applier)
Targets:      docs/07-test-cases-suites.md   v2.8.0  -> v2.8.1  (In Review, cycle 3 of 5)
              docs/08-traceability-matrix.md v2.11.0 -> v2.11.1 (In Review, cycle 3 of 5)
Against:      artifacts/reviews/07-test-cases-suites-v2.8.0-technical-cycle2.md
                FAIL 95%, 0C/0H/1M/3L   (Medium = ISS-01, the unadvanced MTP Source pin)
              artifacts/reviews/08-traceability-matrix-v2.11.0-technical-cycle2.md
                FAIL 96%, 0C/0H/1M/2L   (Medium = ISS-01, "every source is Approved")
              Reviewer: reviewer-qa (Rafael Duarte), neutral, PM-assigned.
              All cycle-1 issues confirmed CLOSED in both reports.
Nature:       PATCH bumps. Every fix is in the header block of its document.
              NO test case, status, count, link, gap code or ruling changes in either.
              Must COMPLETE stays 16 of 138; FR-131 stays OPEN. No suite re-run:
              R-19 (625/625) stands, and a header-only patch earns no new run id.
Rules:        FOUR-backtick fences. Each FIND matches EXACTLY ONCE (verified below).
              Files are CRLF on disk; this spec is LF — the applier converts.
              No FIND line is dropped except where an OP header names the change.
Do NOT touch: any other document, any product code, any unit test.
```

---

### OP 1 — docs/07-test-cases-suites.md — bump to v2.8.1 / In Review (rework cycle 3 of 5); the v2.8.0 Status line is re-labelled as a retained record and its text continues unchanged on the untouched lines below
FIND:
````
Version:       2.8.0
Status:        In Review — v2.8.0 (2026-09-07). **Rework cycle 2 of 5 against
````
REPLACE WITH:
````
Version:       2.8.1
Status:        In Review — v2.8.1 (2026-09-07). **Rework cycle 3 of 5 against
               artifacts/reviews/07-test-cases-suites-v2.8.0-technical-cycle2.md (FAIL 95%, 0C/0H/1M/3L;
               reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned). All four issues addressed;
               none carried. All five cycle-1 issues were confirmed CLOSED by that report.** Patch bump:
               **not one test case, status, count or ruling changes at this version** — every fix is in the
               header block, and a version that touches no case does not earn a minor.
               **ISS-01 (the Medium) — the pin note announced an advance the `Source:` block never
               received.** v2.8.0's note says "**MTP v1.0.1 → v1.6.0 (Approved)**"; the Source line still
               read **v1.0.1**. **The note was the plan; the block is the pin**, and a reader checking the
               pin found the old one. Advanced, together with the three other stale pins the same note
               named — see ISS-02.
               **ISS-02 (Low) — "Every source this document now leans on is Approved" sat above a block
               pinning SRS v2.16.0, SDD v2.10.0, BKLG v2.3.0 (In Review) and MTP v1.0.1.** True of the
               documents, false of the block underneath it. **Taken the harder of the two offered ways:
               the pins are advanced rather than the sentence weakened**, and each advance is annotated
               with exactly what was read — three **scoped** reads and one **version-only** advance that
               says so in terms. **The standing "full pin-sync owed" debt, carried since v2.5.0, is
               DISCHARGED at this version.**
               **ISS-03 (Low)** — the free `TS-V1-*` band is restated as **TC-3577–TC-3699** in the v2.8.0
               entry, and the v2.7.0 entry's now-superseded "TC-3576–TC-3699" is annotated in place.
               **ISS-04 (Low)** — `Last updated` corrected to **2026-09-07**, the date every other line of
               this version already carries.
               _(v2.8.0 record, retained:)_ In Review — v2.8.0 (2026-09-07). **Rework cycle 2 of 5 against
````

### OP 2 — docs/07-test-cases-suites.md — Source — ISS-01 and ISS-02: advance all four stale pins to the Approved versions this document actually leans on, each annotated with what was read
FIND:
````
Source:        MTP-TRUMOCRACY v1.0.1 (docs/04-test-strategy-master-plan.md) · BKLG-TRUMOCRACY v2.3.0 (docs/05-product-backlog.md)
               SRS-TRUMOCRACY v2.16.0 §8 Gherkin (docs/02-requirements-srs.md) · SDD-TRUMOCRACY v2.10.0 §5.2, §10.13.10, §10.13.10.1, §10.13.13, §11, §14 (docs/03-architecture-design-sdd.md)
````
REPLACE WITH:
````
Source:        MTP-TRUMOCRACY v1.6.0 (**Approved** — PASS 96%; **scoped read**: §0.5 S4/S5 and the §14 register) (docs/04-test-strategy-master-plan.md) · BKLG-TRUMOCRACY v2.5.0 (**Approved** — **version-only advance, NOT re-read for this version**; see the v2.8.1 pin note) (docs/05-product-backlog.md)
               SRS-TRUMOCRACY v2.17.1 (**Approved** — **scoped read**: §4.45 FR-131 and §8 FR-131 Scenarios 8 and 9) §8 Gherkin (docs/02-requirements-srs.md) · SDD-TRUMOCRACY v2.13.0 (**Approved** — **scoped read**: §10.12.3 / DES-094 clause 9) §5.2, §10.13.10, §10.13.10.1, §10.13.13, §11, §14 (docs/03-architecture-design-sdd.md)
````

### OP 3 — docs/07-test-cases-suites.md — Source — ISS-02: qualify the v2.8.0 claim in place and append the v2.8.1 pin note that makes it true of the block
FIND:
````
               **v1.9.0 (Approved)**. **Every source this document now leans on is Approved** — the first
               version of which that has been true since the FR-131 cascade opened, which is why several
               "cited as current In-Review text, not settled evidence" caveats below are now spent and are
               marked as such where they appear. The full SRS/SDD/BKLG pin-sync is still owed.)_
````
REPLACE WITH:
````
               **v1.9.0 (Approved)**. **Every source this document now leans on is Approved** — the first
               version of which that has been true since the FR-131 cascade opened, which is why several
               "cited as current In-Review text, not settled evidence" caveats below are now spent and are
               marked as such where they appear. The full SRS/SDD/BKLG pin-sync is still owed.)_ _(v2.8.1, ISS-02: that sentence was true of the **documents** and false of the **block** — the `Source:` lines above it still read SRS v2.16.0, SDD v2.10.0, BKLG v2.3.0 (In Review) and MTP v1.0.1. Corrected at v2.8.1, below, by advancing the pins rather than softening the sentence.)_
               _(v2.8.1 pin note — **the pin-sync debt this document has carried since v2.5.0 is
               DISCHARGED, and every advance is annotated with what was actually read.** ISS-01 was the
               Medium: v2.8.0's note announced "MTP v1.0.1 → v1.6.0" and the Source line still said
               v1.0.1. **A pin note is a plan; the `Source:` block is the pin.** Four pins advance:
               **MTP v1.0.1 → v1.6.0 (Approved)** — *scoped*: §0.5 S4/S5 (the S4/S5 re-cut for clause (e))
               and the §14 register were read; **SRS v2.16.0 → v2.17.1 (Approved)** — *scoped*: §4.45
               FR-131 and §8 FR-131 **Scenarios 8 and 9**, read line by line, which are the criteria
               TC-3570..TC-3575 derive from; **SDD v2.10.0 → v2.13.0 (Approved)** — *scoped*: §10.12.3 and
               DES-094 **clause 9**, the text TC-3568 and TC-3488 verify and the reason TC-3568's
               conditional discharge could be converted at v2.8.0; **BKLG v2.3.0 → v2.5.0 (Approved)** —
               **version-only, and the distinction is the point of this note.** No section of Doc 05 was
               re-read for this version. It advances because leaving an *In Review* pin on a document
               that reached Approved four versions ago misstates which release this document was written
               against, and because the `US-####` ids cited here resolve in v2.5.0 — `US-0134` was
               checked. **What is still owed on BKLG is a story-by-story re-read**, and it is owed as
               plainly now as before; what is discharged is the *staleness*, not the *reading*.
               **Why "scoped" is used three times and is not a hedge:** a pin asserts "this document was
               written against that version". These three were — for the sections named, which are the
               sections this document cites. Claiming an end-to-end read of three source documents to
               clear a Low would be precisely the class of over-claim the last three cycles were spent
               correcting. **CODE stays v2.7.0 (Approved)**, advanced and read at v2.8.0.)_
````

### OP 4 — docs/07-test-cases-suites.md — header — ISS-04: correct Last updated to 2026-09-07, the date the rest of this version carries
FIND:
````
Last updated:  2026-09-06
````
REPLACE WITH:
````
Last updated:  2026-09-07
````

### OP 5 — docs/07-test-cases-suites.md — insert the v2.8.1 changelog entry above the v2.8.0 entry
FIND:
````
Changelog:     v2.8.0 (2026-09-07) — **Rework cycle 2 of 5 against
````
REPLACE WITH:
````
Changelog:     v2.8.1 (2026-09-07) — **Rework cycle 3 of 5 against
               artifacts/reviews/07-test-cases-suites-v2.8.0-technical-cycle2.md (FAIL 95%, 0C/0H/1M/3L).
               All four issues addressed, none carried. PATCH bump: no TC is minted, retired, reused,
               renumbered or re-statused; NO count, status, suite assignment or ruling moves.** Cases
               designed **478** · automated **245** · observed **94** · inherited **136** · not executed
               **15** · Blocked **176** · No mechanism **49** · Manual **12** · failures **0** — every
               figure identical to v2.8.0. **Doc 08's Must count is untouched: 16 of 138, FR-131 OPEN.**
               Every fix is in the header block, which is why this is a patch and not a minor.
               **ISS-01 (Medium) FIXED — the pin note announced an advance the `Source:` block never
               received.** The v2.8.0 pin note states "**MTP v1.0.1 → v1.6.0 (Approved)** — a **scoped**
               advance"; the `Source:` line still read **MTP-TRUMOCRACY v1.0.1**. **A pin note is a plan;
               the `Source:` block is the pin**, and a reader who did the right thing — checked the pin
               rather than trusting the prose — found the old version and a note claiming otherwise. **The
               defect class is the one this document has now corrected four cycles running** (TC-3567,
               TC-3543, TC-3573, the Doc 04 register citation): **a statement that outran what it sat on.**
               That it recurred in the very version whose changelog named the pattern is worth recording
               rather than quietly fixing — the lesson evidently has to be **mechanical**, not
               resolution-shaped. The pin is advanced, and so are the three others the same note named.
               **ISS-02 (Low) FIXED — "Every source this document now leans on is Approved" was true of
               the documents and false of the block beneath it.** The `Source:` lines read SRS **v2.16.0**,
               SDD **v2.10.0**, BKLG **v2.3.0 (In Review)**, MTP **v1.0.1**. The reviewer offered two ways
               out — advance the pins, or rewrite the sentence. **The pins are advanced**, because the
               sentence was the true one and the block was the stale one, and because this document has
               carried a "full pin-sync owed" debt since **v2.5.0** and had by now genuinely read the
               sources. **That debt is DISCHARGED at this version.** Four advances, each annotated with
               exactly what was read: **MTP → v1.6.0** *(scoped: §0.5 S4/S5, §14 register)*; **SRS →
               v2.17.1** *(scoped: §4.45 and §8 FR-131 Scenarios 8 and 9, read line by line — the criteria
               TC-3570..TC-3575 derive from)*; **SDD → v2.13.0** *(scoped: §10.12.3 / DES-094 clause 9 —
               the text TC-3568 and TC-3488 verify)*; **BKLG → v2.5.0** *(**version-only; NOT re-read**)*.
               **The BKLG advance is deliberately labelled differently from the other three**, because it
               is a different act: it removes a false *In Review* status on a document Approved four
               versions ago and confirms that the `US-####` ids cited here resolve in v2.5.0 (`US-0134`
               checked), and it does **not** claim a story-by-story read, which remains owed. **Three
               "scoped" labels are not a hedge:** a pin asserts the document was written against that
               version, and for the sections cited it was. Claiming an end-to-end read of three source
               documents in order to clear a **Low** would be the same over-claim these cycles keep
               correcting, and would trade a cosmetic defect for a substantive one.
               **ISS-03 (Low) FIXED — the free band is restated.** The v2.7.0 entry said "the band still
               holds TC-3576–TC-3699", true when written; v2.8.0 then minted **TC-3576** without restating
               it, leaving the document's only statement of the free band one id out of date. **The free
               `TS-V1-*` band is TC-3577–TC-3699**, stated in the v2.8.0 entry and annotated at the v2.7.0
               sentence, which is retained rather than edited. Doc 04 v1.6.0 §14 reserves TC-3570–TC-3699;
               Doc 07 has now drawn TC-3570..TC-3576 from it, so **7 of 130 ids are used and 123 remain**.
               **ISS-04 (Low) FIXED — `Last updated: 2026-09-06` → 2026-09-07**, matching the v2.8.0
               changelog date, run R-19, the §0.2 and §9 rows and TC-3576's status cell. A stale
               `Last updated` on a document whose own body is a day newer is small, and it is exactly the
               field a Gate-2 reader uses to decide whether they are holding the current version.
               **Not re-run at this version, and deliberately so:** no test, case or count is touched, so
               **R-19 (2026-09-07, 625/625, plus the UT-0889 block case by case) stands as the current
               run** and no new run id is minted. Re-running the suite to accompany a header-only patch
               would add a run id and no information. **The post-merge re-run owed since R-18 is still
               owed** — the tree is still uncommitted.
               **Unchanged and still open:** `TD-07-01`, `TD-07-02`, `TD-07-03`, `TD-RTM-02`, `TD-RTM-03`,
               and the FR-131 ruling in Doc 08 — **Must COMPLETE stays 16 of 138.**
               v2.8.0 (2026-09-07) — **Rework cycle 2 of 5 against
````

### OP 6 — docs/07-test-cases-suites.md — changelog v2.7.0 entry — ISS-03: annotate the now-superseded free-band sentence in place (the entry stays a historical record)
FIND:
````
               in order, and the band still holds TC-3576–TC-3699.
````
REPLACE WITH:
````
               in order, and the band still holds TC-3576–TC-3699. _(v2.8.1, ISS-03: **superseded, not wrong when written.** v2.8.0 minted TC-3576, so the free band is now **TC-3577–TC-3699** — restated in the v2.8.0 entry below. Doc 04 v1.6.0 §14 reserves TC-3570–TC-3699 for the `TS-V1-*` suites; Doc 07 has drawn TC-3570..TC-3576, leaving **123 of 130** ids free.)_
````

### OP 7 — docs/07-test-cases-suites.md — changelog v2.8.0 entry — ISS-03: restate the free band where TC-3576 is minted
FIND:
````
               RTM reader can see. §8's automation row and orphan sweep are corrected 5 → 6 and the sweep
````
REPLACE WITH:
````
               RTM reader can see. **The free `TS-V1-*` band after this mint is TC-3577–TC-3699** _(v2.8.1, ISS-03 — v2.8.0 minted TC-3576 without restating it, leaving the v2.7.0 entry's "TC-3576–TC-3699" as the document's only statement of the band and one id out of date)_: Doc 04 v1.6.0 §14 reserves TC-3570–TC-3699, Doc 07 has drawn **TC-3570..TC-3576**, and **123 of those 130 ids remain free**. §8's automation row and orphan sweep are corrected 5 → 6 and the sweep
````

### OP 8 — docs/08-traceability-matrix.md — bump to v2.11.1 / In Review (rework cycle 3 of 5); the v2.11.0 Status line is re-labelled as a retained record and its text continues unchanged on the untouched lines below
FIND:
````
Version:       2.11.0
Status:        In Review — v2.11.0 (2026-09-07). **Rework cycle 2 of 5 against
````
REPLACE WITH:
````
Version:       2.11.1
Status:        In Review — v2.11.1 (2026-09-07). **Rework cycle 3 of 5 against
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
````

### OP 9 — docs/08-traceability-matrix.md — Source — ISS-01: advance the SDD and BKLG pins to the Approved versions the pin note already claimed
FIND:
````
Source:        SRS-TRUMOCRACY v2.17.1 (**Approved** — §4.45 and §8 FR-131 Scenarios 8/9 read for this version) · SDD-TRUMOCRACY v2.11.2 (**Approved**) §5.2, §10.13.10.1, §10.13.13, §15, §16 · BKLG-TRUMOCRACY v2.3.0 (In Review) ·
````
REPLACE WITH:
````
Source:        SRS-TRUMOCRACY v2.17.1 (**Approved** — §4.45 and §8 FR-131 Scenarios 8/9 read for this version) · SDD-TRUMOCRACY v2.13.0 (**Approved** — **scoped read**: §15 the FR-131 DES assignment, and §10.12.3 / DES-094 clause 9) §5.2, §10.13.10.1, §10.13.13, §15, §16 · BKLG-TRUMOCRACY v2.5.0 (**Approved** — **version-only advance, NOT re-read for this version**; see the v2.11.1 pin note) ·
````

### OP 10 — docs/08-traceability-matrix.md — Source — ISS-02: advance the TC pin to Doc 07 v2.8.1, the sibling this version actually syncs to
FIND:
````
               TC-TRUMOCRACY v2.7.0 (**In Review** — this version syncs to it; v2.6.0 at the previous version)
````
REPLACE WITH:
````
               TC-TRUMOCRACY v2.8.1 (**In Review** — this version's sibling, reworked in the same cycle-3 touch; v2.7.0 was pinned at v2.10.0 and the body had already moved to v2.8.x by v2.11.0)
````

### OP 11 — docs/08-traceability-matrix.md — Source, v2.11.0 pin note — ISS-01: qualify the claim in place and append the v2.11.1 pin note that makes it true of the block
FIND:
````
               SDD/BKLG pin-sync is still owed, and is still owed in Doc 07 §Source.)_
````
REPLACE WITH:
````
               SDD/BKLG pin-sync is still owed, and is still owed in Doc 07 §Source.)_ _(v2.11.1, ISS-01: **that sentence was false of the block it sat above.** It named SDD v2.13.0, BKLG v2.5.0 and TC v2.8.0 while the `Source:` lines pinned SDD **v2.11.2**, BKLG **v2.3.0 (In Review)** and TC **v2.7.0** — and the same sentence in the v2.11.0 changelog carried the same defect. Corrected at v2.11.1 by advancing the pins, below.)_
               _(v2.11.1 pin note — **the pins now say what the sentence above says, and the SDD/BKLG
               pin-sync debt is DISCHARGED.** Three advances, each annotated with what was read.
               **SDD v2.11.2 → v2.13.0 (Approved)** — *scoped*: **§15**, where the architect states the
               FR-131 DES assignment this matrix records (DES-098 primary, DES-094 for the status-badge
               reach, DES-096 the ballot seam), and **§10.12.3 / DES-094 clause 9**. Those are the two
               places this matrix cites, they were read, and Doc 03 v2.13.0 is now Approved — which is
               why the "cited as current corrected text, not an approved source" caveat in the §3.1 FR-131
               row and §7 entry 117 is **spent**, and is annotated as spent rather than deleted.
               **BKLG v2.3.0 → v2.5.0 (Approved)** — **version-only, NOT re-read**, and labelled
               differently from the SDD advance on purpose. It removes a false *In Review* status on a
               document Approved four versions ago; it does **not** claim a story-by-story read, and the
               `US-####` chains in §3.1/§3.2 are **not** re-verified against v2.5.0 by it. **That re-read
               is still owed**, as plainly as before. **TC v2.7.0 → v2.8.1 (In Review)** — Doc 07 is this
               document's sibling and both are reworked in the same cycle-3 touch; the body has cited
               v2.8.x since v2.11.0 (ISS-02).
               **Every pin in the block above is now either Approved or, for the sibling Doc 07, In Review
               and named as such** — which is what the sentence claimed and, until this version, was not
               true of the block. **It changes no ruling.** The FR-131 row was never open because its
               sources were provisional; it is open because the DES-098 acknowledge-to-proceed control,
               the SCR-13/SCR-14 ballot surfaces and the Scenario 9 instrument do not exist. **Settled
               pins do not close a Must row, and this note must not be read as if they did.**)_
````

### OP 12 — docs/08-traceability-matrix.md — header — ISS-03: correct Last updated to 2026-09-07
FIND:
````
Last updated:  2026-09-06
````
REPLACE WITH:
````
Last updated:  2026-09-07
````

### OP 13 — docs/08-traceability-matrix.md — insert the v2.11.1 changelog entry above the v2.11.0 entry
FIND:
````
Changelog:     v2.11.0 (2026-09-07) — **Rework cycle 2 of 5 against
````
REPLACE WITH:
````
Changelog:     v2.11.1 (2026-09-07) — **Rework cycle 3 of 5 against
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
````

### OP 14 — docs/08-traceability-matrix.md — changelog v2.11.0 entry — ISS-01, second site: annotate the same claim where the changelog makes it (entry retained as a historical record)
FIND:
````
               **ISS-03 (Low) FIXED — CODE pin → v2.7.0 (Approved).** With it, every source this matrix pins
               is now Approved for the first time since the FR-131 cascade opened; several "not settled
````
REPLACE WITH:
````
               **ISS-03 (Low) FIXED — CODE pin → v2.7.0 (Approved).** With it, every source this matrix pins
               is now Approved for the first time since the FR-131 cascade opened _(v2.11.1, ISS-01: **false of the `Source:` block when written** — it still pinned SDD v2.11.2, BKLG v2.3.0 (In Review) and TC v2.7.0. True of the block from v2.11.1, which advances them)_; several "not settled
````

---

## Verification (run by the tester before emitting)

| OP | File | FIND lines | Occurrences in file |
|---|---|---|---|
| 1 | docs/07-test-cases-suites.md | 2 | 1 |
| 2 | docs/07-test-cases-suites.md | 2 | 1 |
| 3 | docs/07-test-cases-suites.md | 4 | 1 |
| 4 | docs/07-test-cases-suites.md | 1 | 1 |
| 5 | docs/07-test-cases-suites.md | 1 | 1 |
| 6 | docs/07-test-cases-suites.md | 1 | 1 |
| 7 | docs/07-test-cases-suites.md | 1 | 1 |
| 8 | docs/08-traceability-matrix.md | 2 | 1 |
| 9 | docs/08-traceability-matrix.md | 1 | 1 |
| 10 | docs/08-traceability-matrix.md | 1 | 1 |
| 11 | docs/08-traceability-matrix.md | 1 | 1 |
| 12 | docs/08-traceability-matrix.md | 1 | 1 |
| 13 | docs/08-traceability-matrix.md | 1 | 1 |
| 14 | docs/08-traceability-matrix.md | 2 | 1 |

Every FIND was matched against the on-disk file with line endings normalised to LF and occurs **exactly once**. Every non-blank FIND line reappears verbatim in its REPLACE except where an OP header names the change (the two header OPs re-label a `Status:` gutter as a retained-record marker; the two `Last updated` OPs and the Doc 07 `Source:` OP replace the line by design).
