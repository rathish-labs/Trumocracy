# Test Cases & Suites — Trumocracy

```
Document ID:   TC-TRUMOCRACY
Version:       2.12.0
Status:        Approved — 07-test-cases-suites-v2.12.0-technical-cycle3.md (PASS 97%, 0C/0H/0M/2L; reviewer: reviewer-qa; two Lows carried, non-blocking, to fold at the next touch: ISS-01 an orphaned bold-close marker at the header's OP-6 site (the header block's ** count is now odd; harmless inside the fence); ISS-02 the v2.12.0 change record says '6 sites' against 7 diff hunks and uses 'site' at two granularities in one list — plus the v2.9.0 ISS-02/ISS-04 Lows still carried explicitly by id). Previously: In Review — v2.12.0 (2026-09-21). **Rework cycle 3 of 5** against
               `artifacts/reviews/07-test-cases-suites-v2.11.0-technical-cycle2.md` (**FAIL 94%,
               0C/0H/1M/3L**; reviewer: **reviewer-qa**, Rafael Duarte — neutral, PM-assigned and recorded
               before dispatch). **All four issues taken.** **MINOR bump per the house rule** (a
               Medium-or-worse FAIL takes at least a MINOR), **not** earned by a mint.
               **NO CASE, COUNT, STATUS OR RULING MOVES.** designed **521** · automated **290** · observed
               **139** · inherited **136** · not executed **15** · Blocked **177** · No mechanism **46** ·
               Manual **12** · failures **0** — identical to v2.11.0 and to v2.10.0. Doc 08's Must figures
               are untouched: **138 · 19 · 119**, both hook signals agreeing.
               **ISS-01 (Medium) — the sweep miscounted its own diff, which is the defect class this
               document keeps naming.** v2.11.0's Changelog published "**Every site changed, enumerated so
               the sweep is falsifiable — thirteen sites, and these are they**" over a diff of
               **FOURTEEN**. The unenumerated fourteenth is **§5.7's `TC-3605`**, whose *Verifies* cell
               gained **FR-036**, **US-0046** and **DES-027 rule 6** — and that is not a cosmetic edit: it
               is the **cross-document fold of Doc 08 v2.13.0 cycle-1 ISS-02 (High)**, the row on which
               **Doc 08's FR-036 closure rests its withdrawal clause**. **Why it was missed is worth
               recording, because the cause is structural rather than careless:** the v2.11.0 Status framed
               the version's scope as "All eight issues are taken … Nothing is carried", so the
               enumeration was written from **the cycle-1 issue list** instead of **from the operation
               list**, and the one edit that answered no Doc 07 issue fell outside the frame. **A sweep
               enumerated from the brief rather than from the diff cannot be falsifiable** — the document
               makes exactly this argument about the §8 orphan check in the same version. Corrected: the
               v2.11.0 entry now reads **fourteen** with the fourteenth named and attributed, and **this
               version's own enumeration is counted from its operation list** — **8 operations over 6
               sites**, both figures published, because they are different things.
               **A CROSS-DOCUMENT FOLD RIDES IN v2.11.0, and it is stated here so no reader has to
               reconstruct it from two changelogs:** `TC-3605`'s attribution is Doc 07's half of Doc 08
               ISS-02; Doc 08 **v2.14.0** carries the other half (FR-036's row gains `TC-3605`, `TC-3606`,
               `UT-0897`, `UT-0898` and a clause→case map). **Neither half is complete alone**, which is
               why the fold is named in both documents' Status blocks rather than only in the spec that
               made it.
               **The three Lows, each taken and each made derivable.** **ISS-02:** `TC-3540`'s *Verifies*
               cell named **three** design elements (DES-097 party · DES-104 proposals · §10.13.14
               candidates) but only **two** FRs and **two** USs, leaving the `IProposalStore` seam with a
               `DES` and no `FR`/`US` — the same attribution-gap class as cycle-1's ISS-06. The cell now
               carries a **per-seam map**, so each of the three seams names its own `FR`, `US` and `DES`.
               **ISS-03:** §0.1's **Pass (obs.)** row — amended at v2.11.0 precisely *because it had not
               aged* — was **already one run short at publication**: it said the series "reaches **R-21**"
               while **R-22** was minted in the same version. Re-worded to "**the runs behind the 139**"
               with **R-22 listed and marked "earns nothing — promotion deferred"**, so a reader cannot
               read the list as the series' end. **ISS-04:** "this is their **second** deferral" was said of
               **v2.11.0** by this document and of **v2.10.0** by the cycle-1 report; both cannot hold and
               **the counter was never derivable**. **The ordinal is dropped and replaced by the touches
               themselves** — carried at **v2.10.0**, at **v2.11.0** and again **here** — at both sites
               that carried it. A named list can be checked; an ordinal in prose cannot.
               **Still carried, and now named by touch rather than counted:** v2.9.0 **ISS-02** (the missing
               separator in §10) and **ISS-04** (the clause-(e) surface-vs-claim framing). Neither is
               touched by this rework's edits; both are owed at the next touch.
               _(v2.11.0 record, retained — the version this one supersedes:)_ In Review — v2.11.0 (2026-09-21). **Rework cycle 2 of 5** against
               `artifacts/reviews/07-test-cases-suites-v2.10.0-technical-cycle1.md` (**FAIL 91%,
               0C/0H/2M/6L**; reviewer: **reviewer-qa**, Rafael Duarte — neutral, PM-assigned and recorded
               before dispatch). **All eight issues are taken at this version. Nothing is carried.**
               **MINOR bump, and it is NOT earned by a mint — it is earned by the rule:** a Medium-or-worse
               FAIL takes at least a MINOR on rework. **Not one case is minted, retired, reused, renumbered
               or re-statused here, and not one count moves:** designed **521** · automated **290** ·
               observed **139** · inherited **136** · not executed **15** · Blocked **177** · No mechanism
               **46** · Manual **12** · failures **0**, every one unchanged from v2.10.0. What changes is
               that three things this document asserted are now true.
               **ISS-01 (Medium) — the eighteenth block, and an arithmetic claim that did not add up.**
               §5.7 said the 97 `it`s of the candidate blocks take the suite "640 → 739". **640 + 97 = 737.**
               The missing **two** are `UT-0871` extended to `IProposalStore` **and `ICandidateStore`** at
               Doc 06 **v2.10.0** (§3's web addend, "+ 2 (UT-0871 extended to two more seams, v2.10.0)";
               §7 item 23), in a **fifth file** — `apps/web/test/sdk-types-sync.test.ts`, which went
               **1 `it` → 3**. §9's R-21 row located them in the wrong block and the wrong version ("added
               at Doc 06 v2.11.0/v2.11.1 that landed inside them" — that pair is the UT-0905 flag-off and
               UT-0906 sign `it`s, and those are already **inside** the 20 web `it`s this suite maps). The
               drop's `UT` footprint is **eighteen** blocks, not seventeen, and one of the two unswept
               assertions guards **`ICandidateStore` — this suite's own seam**. Corrected at every site:
               §5.7's arithmetic is restated as **640 + 97 + 2 = 739** with the two named; §9's
               reconciliation names the right file, block and version; the v2.10.0 orphan check is widened
               to **eighteen** blocks and **rules on the two assertions**; §8's row for that file no longer
               says "1 test, green"; §0.2's row is refreshed; and **`TC-3540` — the only case mapping
               `UT-0871` — is re-scoped from `IPartyStore` alone to all three seams.** **The ruling on the
               two assertions: no case is minted.** `UT-0871` is one parameterised `it` over a seam list,
               so the drop added **two more instances of a guarantee `TC-3540` already states**, not a new
               guarantee; extending the case's scope is the honest record and minting two cases for a
               widened loop would inflate the designed count for no new coverage.
               **ISS-02 (Medium) — a disclosure defect, and the one that mattered most.** §8's reverse
               sweep claimed each of four un-instrumented acceptance criteria "is carried by an existing
               **Blocked** case" and cited `TC-3320` / `TC-3612` for FR-039. **Both ids are wrong and the
               claim is wrong.** `TC-3612` carries no FR-039 note; `TC-3611` does and it is **Pass (obs.)**,
               not Blocked; `TC-3320` is an FR-067 case blocked on an on-chain advancement guard. A grep of
               every FR-039 mention in this document returns only `TC-1024` (Pass) and `TC-3611` (Pass), so
               **FR-039's voter-scope and tie-break clauses are carried by NO case at all** — the exact
               condition this document states plainly for FR-081 one sentence later. Restated on the FR-081
               pattern, with the ids dropped rather than corrected, because there was no correct id to
               substitute. **Propagation checked, as the report asked:** **Doc 08 v2.13.0's §3.1 FR-039 row
               and its §7 entry 19 are CLEAN** — they cite `TC-0030`, `TC-1024`, `TC-3611` and make no
               Blocked-carrier claim. **Doc 08's v2.13.0 Changelog entry is NOT clean:** it carries the same
               sentence with `TC-3320/TC-3611`. That is one line in Doc 08, it is recorded here and in
               `artifacts/tester-2026-09-21T0700-doc07-doc08-candidate-rework.md`, and it is fixed in the
               Doc 08 rework — **not from here**, because Doc 08 v2.13.0 is mid-review and editing a
               document out from under its reviewer is how a cycle stops meaning anything.
               **The six Lows, each taken at its site.** **ISS-03** §10's Blocked measure said "**Ten**
               cases keep their Blocked status with a corrected reason" and then enumerated **twelve**
               (2 + 4 + 6) — corrected to twelve. **ISS-04** §2 and §10 count `TC-3407` and `TC-3411` as
               automated but §8 mapped neither, so §8 no longer reconciled with the 290 — both are added to
               the protocol, sdk and web rows and "Cases mapped" is re-derived. **ISS-05** `TC-3470` maps
               `UT-0750`, whose anon assertion this drop **FLIPPED** (Doc 06 v2.11.1: it had pinned the
               superseded pair, so a green test was guarding the non-compliant string) — annotated on the
               `TC-3471`/v2.5.0 precedent, and the stale "14/14, 2026-08-25" evidence refreshed to R-21's
               25/25. **ISS-06** `TC-3407`'s third clause is "eligibility checked by code" and none of its
               three cited blocks asserts it — `UT-0894` and `UT-0896` do, and Doc 03's own FR-081 evidence
               row cites `UT-0896`; both added. **ISS-07** §0.1's **Pass (obs.)** definition still read
               "this session (2026-08-09 or 2026-08-25)" while §10 now rests **139** cases on that label
               across R-18..R-21 — amended in place to name the run series and the case-by-case bar it
               encodes, as the *Not run* row was amended as it aged. **ISS-08** `TC-3612`'s expected result
               claimed every read "**structurally cannot reach a counting gate**"; the implementing `it`
               asserts three **named** fields are `undefined` rather than enumerating own properties —
               softened to what the check establishes, with the inference marked.
               **`TC-3540` gains observed evidence and is deliberately NOT promoted, which is stated rather
               than left to look like an oversight.** The tester ran `apps/web/test/sdk-types-sync.test.ts`
               `--reporter=verbose` for this rework: **3 passed / 3**, each `it` green individually
               (**run R-22**). That meets this document's Pass (obs.) bar. It is held at **Pass (inh.)**
               anyway, because promoting it moves the observed/inherited buckets in §2 and §10 **and** in
               Doc 08 §6 and §9 — and **Doc 08 v2.13.0 is mid-review**. Moving half of a synchronised pair
               is the drift already tracked as `TD-RTM-02`. **Registered as owed at the next Doc 07/08
               touch, when both can move together.**
               **The two Lows carried from v2.9.0 are STILL carried — at v2.10.0, at v2.11.0 and again at v2.12.0, named by touch rather than by ordinal** _(v2.12.0, ISS-04: this read "this is their **second** deferral"; the cycle-1 report said the same of v2.10.0, so the two statements contradict and neither was derivable. The touches are listed instead — they can be checked against the changelog)_ —
               named again rather than allowed to go quiet:** ISS-02 (the missing separator in §10) and
               ISS-04 (the clause-(e) surface-vs-claim framing). Neither is touched by this rework's edits.
               The cycle-1 report records the same and calls them owed at the next touch; they are.
               _(v2.10.0 record, retained — the version this one supersedes:)_ In Review — v2.10.0 (2026-09-21). **Candidate-selection traceability session**, per
               `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md` ("Ownership and rework"):
               **the `TC` rows for `UT-0891`..`UT-0907`**, owed since Doc 06 v2.10.0 §7 item 30 and deferred
               by the TRUMO-P02 assignment to "the next Doc 07/08 touch". **This is that touch.** Neutral
               technical reviewer, PM-assigned and recorded BEFORE dispatch: **reviewer-qa** (Rafael Duarte,
               new instance) — the tester owns this document and does not review it. **Cycle 1 of a fresh
               loop:** v2.9.0 PASSed and closed its own lineage. **MINOR bump, and it is earned by a mint:
               twenty-eight cases, `TC-3592`..`TC-3619`**, into a new suite **§5.7 `TS-CANDIDATE`** — one
               case per guarantee over the **97 `it`s** of the seventeen `UT-0891`..`UT-0907` blocks, with
               every `it` named in exactly one case.
               **The id band, and what drawing from it costs — stated, not left for a reader to find.**
               `TC-3592`–`TC-3699` is the free band this document's own v2.9.0 ISS-01 restated, and **Doc 04
               v1.7.1 §14 still reserves it for the six `TS-V1-*` suites**. Taking `TC-3592`..`TC-3619` from
               it means **Doc 04 §14 MUST re-narrow the `TS-V1-*` floor to `TC-3620` at its next touch** —
               the OPEN-30 pattern, and the architect is already routed for it by the assignment record. The
               alternative — holding the mint until Doc 04 moves — would leave seventeen tested `UT` blocks
               without a `TC` for a second session, which is the debt this session exists to close.
               **Three cases are re-statused and one link is removed, each on a stated ground, and none of
               it is a renumbering.** `TC-3407` and `TC-3411` move **No mechanism → Pass (obs.)**, because
               DES-107 and DES-028 rule 6 and the shipped code give them a mechanism to test. `TC-3419`
               moves **No mechanism → Blocked**: DES-108 now designs the schedule, but its question phase is
               unbuilt, so the case has a design to test against and no product. **`TC-3476` loses its
               `FR-085` link** — it is an FR-131 clause-8 case about the **enrolment** screen, and FR-085
               governs **candidacy** consent and disclosure destruction; it keeps its FR-131 clause 8 and
               US-0132 links and its **Blocked** status, and it stays on Doc 08's FR-131 row, where it
               already sits. **No `TC` is retired, reused or renumbered.**
               Counts move only by the mint and those four rulings: designed **493 → 521**, automated
               **260 → 290**, observed **109 → 139**, Blocked **176 → 177**, No mechanism **49 → 46**;
               inherited **136**, not executed **15**, Manual **12**, failures **0** — all unchanged.
               **Run R-21 recorded.** `npm test` from the repo root: **739 / 739 pass, 0 failed, exit 0** —
               contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138. Then all four candidate
               and PrivacyStatus files case by case: **97 `it`s reported green individually** (protocol
               27/27 · sdk 43/43 · ui 7 passed and 18 skipped for `-t "UT-0903"` · web 20/20). **Tree state
               at the run, stated rather than claimed:** `git status --porcelain` returned **nine** paths —
               seven untracked session records under `artifacts/`, `artifacts/memory-index.json`, and
               **`docs/03-architecture-design-sdd.md`**, the architect's in-flight v2.16.0 document. **No
               product, test or configuration path is modified or untracked**, so no test input differs from
               `HEAD` `12fe4a6`, and the one modified non-`artifacts/` path is a document no test reads. The
               R-20 clean-tree standard holds and **nothing is owed on this run**.
               **Doc 08's Must count MOVES — for the first time since v2.4.0 — and it is RULED, not assumed:
               138 Must · 16 → 19 COMPLETE · 122 → 119 OPEN.** **FR-036, FR-037 and FR-085 close**, and the
               non-gating **FR-038** Should row closes beside them. **Six rows stay OPEN and are
               reclassified honestly to `G-NOMECH`** — FR-039, FR-065, FR-066, FR-067, FR-081 and FR-093 —
               and **FR-081 and FR-093 leave `G-TRACE`**, because DES-107 and DES-108 close their chain gaps
               without closing their rows. Each ruling is argued clause by clause in Doc 08 v2.13.0 §3.1 and
               §7; §5.7's "What this suite does NOT claim" block states the six open clauses in test terms.
               **Two of the four Lows carried from the v2.9.0 PASS are folded here; two are carried
               explicitly by id rather than silently.** **Folded — ISS-01:** the free band is restated above,
               together with the Doc 04 §14 collision and the routing that answers it. **Folded — ISS-03:**
               §2's enumeration paragraph is extended for this drop. **Carried — ISS-02** (the missing
               separator in §10) and **ISS-04** (the clause-(e) surface-vs-claim framing): neither is
               touched by this drop's edits, and folding a wording Low into a version that mints 28 cases
               mixes two kinds of change in one diff. Both are owed at the next touch.
               _(v2.9.0 record, retained — the version this one supersedes:)_ Approved — 07-test-cases-suites-v2.9.0-technical-cycle1.md (PASS 97%, 0C/0H/0M/4L; reviewer: reviewer-qa; four Lows carried, non-blocking, to fold at the next touch: ISS-01 the free TC band is not restated (now TC-3592-TC-3699, and Doc 04 v1.6.0 S14 still reserves TC-3570-TC-3699 - routed to the architect as OPEN-30's trigger, now fired); missing separator in S10; S2's enumeration paragraph not extended; the clause-(e) surface-vs-claim framing). Previously: In Review — v2.9.0 (2026-09-20). **Debt-closure session**, per
               `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md` item 1: **the `TC` rows for
               `UT-0890`, the sole `TC` row owed at entry** (Doc 06 v2.8.1 §3 and §7 item 28, and
               `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`, which deferred them to "the next
               Doc 07/08 touch"). **This is that touch.** Neutral technical reviewer, PM-assigned and recorded
               BEFORE dispatch: **reviewer-qa** (Rafael Duarte, new instance) — the tester owns this document
               and does not review it. **Cycle 1 of a fresh loop:** v2.8.1 PASSed and closed its own lineage.
               **MINOR bump, and it is earned by a mint: fifteen cases, `TC-3577`..`TC-3591`**, one per `it` of
               the UT-0890 block, into **§5 `TS-ADV-01…16`** (the TC-3564..TC-3576 precedent). **No `TC` is
               retired, reused, renumbered or re-statused.** Every id falls inside the free `TS-V1-*` band
               **TC-3577–TC-3699** that v2.8.1 ISS-03 restated (Doc 04 v1.6.0 §14). Counts move only by the
               mint and its observation: designed **478 → 493**, automated **245 → 260**, observed
               **94 → 109**; inherited **136**, not executed **15**, Blocked **176**, No mechanism **49**,
               Manual **12**, failures **0** — all unchanged.
               **Run R-20 recorded, and it discharges a standing debt:** `npm test` from the repo root,
               **640 / 640 pass, 0 failed, exit 0**, then the UT-0890 block case by case (**15 passed, 26
               skipped**). R-18 and R-19 were both qualified as run against an **uncommitted 76-path working
               tree**, with a post-merge re-run owed. **R-20 is not:** `git status --porcelain` at the run
               returned **three paths, all of them session-governance records under `artifacts/`** (the two
               review-assignment records and `memory-index.json`) and **no modified product, test or document
               path at all**. **The post-merge re-run owed since R-18 is DISCHARGED at this version.**
               **Doc 08's Must count does not move, and this was ruled rather than assumed: 138 Must · 16
               COMPLETE · 122 OPEN.** `FR-131` stays **OPEN (G-PHASE3)** — untouched here, because clause (e)
               expressly excludes enrolment and identity-verification claims (Doc 02 §4.45), so **not one of
               the fifteen cases carries an FR-131 link**. `FR-132` stays **OPEN (G-PHASE3)** — §(b) verify-
               and-discard, §(c) subject-ID dedup and §(e) vendor procurement are unbuilt, and §(d)'s own
               notice duty names **DES-098**, which does not exist (Doc 06 §7 item 26(d)). See Doc 08 v2.12.0
               §3.1 and §7 entry 118.
               **The one Low carried from the v2.8.1 PASS is folded here, not carried a second cycle**
               (ISS-01, T3: the `Source:` block's SDD and SRS pins each carried a scoped-read annotation and
               an unlabelled legacy section list side by side, so a reader could take the trailing list as the
               scope read). Both trailing lists are now labelled **"sections this document cites:"**, the shape
               Doc 08's own SDD pin already uses.
               _(v2.8.1 record, retained — the version this one supersedes:)_ Approved — 07-test-cases-suites-v2.8.1-technical-cycle3.md (PASS 98%, 0C/0H/0M/1L; reviewer: reviewer-qa, neutral,
               PM-assigned; one Low carried, non-blocking, to fold at the next touch (see the report)). Previously: In Review — v2.8.1 (2026-09-07). **Rework cycle 3 of 5 against
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
               artifacts/reviews/07-test-cases-suites-v2.7.0-technical-cycle1.md (FAIL 94%, 0C/0H/2M/3L;
               reviewer: reviewer-qa, Rafael Duarte — neutral, PM-assigned). All five issues addressed;
               none carried.** Minor bump per the review-loop rule: a Medium-or-worse FAIL earns at least
               a minor bump.
               **ISS-01 (Medium 1 of 2) — the changelog cited a Doc 04 register that does not exist yet.**
               It said "Doc 04 §14 records TC-3564..TC-3569 as minted and reserves TC-3570–TC-3699".
               **Doc 04 v1.5.0 — the version pinned when that was written — says neither half:** §14
               reserved TC-3564–TC-3699 annotated "**none minted**", and the strings TC-3569 and TC-3570
               occur nowhere in that file. **The mint is sound and unchanged; the citation was not**, and it
               erred in the direction that matters — it read as though the architect's register had
               already ratified the mint. **Doc 04 v1.6.0 is now Approved and does record it**, so the
               sentence is re-attributed to v1.6.0 with what v1.5.0 actually said quoted beside it.
               **ISS-02 (Medium 2 of 2) — TC-3573 described a broader guard than UT-0889 has.** Its expected
               result banned the bare Arabic substring "سري"; Doc 06 **v2.7.0 (now Approved)** deliberately
               narrowed that assertion to the exact retired phrase **"اسمك سريًا"** because a bare ban also
               matches "سريعًا" ("quickly") and "تسري" ("takes effect" — already shipping at `ar.ts`
               `parties.leaveHelp`). The cell is re-cut to what the test asserts now, with the
               false-positive rationale recorded as a third stated scope limit. **Same fix as TC-3567
               (v2.6.0 ISS-02) and TC-3543 (v2.7.0): state less, do not claim more.** Status unchanged —
               the case is green and was re-observed case by case in run **R-19**.
               **One TC minted — TC-3576** (the sixth UT-0889 `it`, a DES-085 jargon scan added at Doc 06
               v2.7.0). **No TC is retired, reused, renumbered or re-statused.** Counts move only by that
               mint and its observation: designed **477 → 478**, automated **244 → 245**, observed
               **93 → 94**. Run **R-19** recorded (`npm test` **625/625**, then the UT-0889 block case by
               case, **6 passed**).
               **All three Lows discharged, none carried:** ISS-03 (the `it` count 5 → 6
               and the orphan sweep re-run), ISS-04 (CODE pin advanced to **v2.7.0 Approved**, and with it
               TC-3568's conditional discharge converted to unconditional now that Doc 03 v2.13.0 is
               Approved), ISS-05 (§0.2 gains the R-18 and R-19 rows it lacked).
               _(v2.7.0 record, retained:)_ In Review — v2.7.0 (2026-09-06). **FR-131 clause (e) TC re-cut.** Doc 02
               **v2.17.1 (Approved)** §4.45 adds clause (e) — the honesty-of-claim duty over every v1
               participation act, approver-confirmed 2026-09-06 — and, at v2.17.1, the acceptance
               criteria this version actually derives from: **§8 FR-131 Scenario 8** (the grade-8 reader
               test, the public-by-design rule, the safe harbour, and the rule that where safe harbour
               and reader test disagree **the reader test governs**) and **§8 FR-131 Scenario 9** (the
               absence test over **every** v1 surface in **every** language, including the case where a
               claim carrying none of the four banned words still fails). The engineer landed **UT-0889**
               at Doc 06 v2.6.0. This version mints **six cases, TC-3570..TC-3575**; records run **R-18**
               (`npm test` from the repo root, **624/624**, tester-executed, exit 0) together with a
               **case-by-case** verbose re-run of the UT-0889 block, which is why TC-3570..TC-3574 are
               the first FR-131 cases to carry **Pass (obs.)** rather than Pass (inh.); and corrects
               **TC-3543**, whose expected result paraphrased a refusal message this drop rewrote.
               **TC-3575 is minted Blocked, deliberately** — Scenario 9 is a population sweep and the
               only instrument specified for it (Doc 04 §0.5 S5) is not built. **No existing TC is
               retired, reused, renumbered or re-statused.** Neutral technical review owed (reviewer-qa,
               per artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md).
               **All three v2.6.0 Lows are DISCHARGED at this version, not carried** — **ISS-C2-01**
               (TC-3519's inline-code regex pipes are escaped, so the row is 7 cells against a 7-column
               header), **ISS-C2-02** (§10 prose "Forty-eight" corrected to "Forty-nine", matching the
               table's 49, with the forty-ninth case named), **ISS-C2-03** (the pin note is re-cut to the
               versions current on 2026-09-06 and the CODE pin advances to v2.6.0 — see Source).
               _(v2.6.0 record, retained — the three Lows it carried, and its "fix first on any future
               touch" instruction, are executed above rather than inherited:)_ Approved — 07-test-cases-suites-v2.6.0-technical-cycle2.md (PASS 97%, 0C/0H/0M/3L;
               reviewer: reviewer-qa, neutral, PM-assigned). Three Lows carried — **fix first on
               any future touch:** ISS-C2-01 (TC-3519 row has 10 cells against a 7-column header —
               unescaped pipes in an inline-code regex; pre-existing since v2.3.0), ISS-C2-02 (§10
               prose "Forty-eight" vs the table's 49; pre-existing), ISS-C2-03 (In-Review pins of
               Docs 03/04/09 now superseded — Doc 03 v2.13.0 and Doc 04 v1.4.0 are Approved; refresh
               at the owed pin-sync). This was v2.6.0 (rework cycle 2 against
               artifacts/reviews/07-test-cases-suites-v2.5.0-technical-cycle1.md, FAIL 92%,
               0C/0H/3M/4L). Minor bump per the review-loop rule: a Medium-or-worse FAIL earns at
               least a minor bump. **No TC is minted, retired, reused, renumbered or re-statused at
               this version and NO count moves.** All three Mediums are the same defect — a claim
               that outruns the evidence under it — so the fix is to state less, not to test more.
               _(v2.5.0 record, retained:)_ In Review — v2.5.0 (FR-131 honesty-drop traceability;
               Doc 06 v2.5.1 sync).
               _(v2.4.4 record, retained:)_ Approved — 07-test-cases-suites-v2.4.4-technical-cycle2.md (PASS 99%, 0C/0H/0M/1L; ISS-01 Low **DISCHARGED at v2.5.0** — §9 now carries the confirmatory full-suite re-run row it lacked, as R-17)
Owner:         Ji-woo Park — Test Lead (tester)
Source:        MTP-TRUMOCRACY v1.6.0 (**Approved** — PASS 96%; **scoped read**: §0.5 S4/S5 and the §14 register) (docs/04-test-strategy-master-plan.md) · BKLG-TRUMOCRACY v2.5.0 (**Approved** — **version-only advance, NOT re-read for this version**; see the v2.8.1 pin note) (docs/05-product-backlog.md)
               SRS-TRUMOCRACY v2.17.3 (**Approved** — 02-requirements-srs-v2.17.3-business-cycle2.md; **scoped read**: §4.45 FR-131 and §8 FR-131 Scenarios 8 and 9, unchanged since v2.8.1, **plus §4.46 FR-132 clauses (a)–(e), read line by line for this version** — it is the requirement TC-3577..TC-3591 verify; **plus, for v2.10.0, the §4 normative text AND the §8 Gherkin of FR-036, FR-037, FR-038, FR-039, FR-065, FR-066, FR-067, FR-081, FR-085 and FR-093, together with the §16.3.1 v1/v2 mechanism rows for the same ten** — they are what TC-3592..TC-3619 verify and what Doc 08 v2.13.0 rules on; **sections this document cites:** §8 Gherkin) (docs/02-requirements-srs.md) · SDD-TRUMOCRACY v2.16.0 (**Approved** — 03-architecture-design-sdd-v2.16.0-technical-cycle2.md, PASS 97%, 0C/0H/0M/2L, two Lows carried in its Status line; **scoped read for v2.10.0**: §10.13.14 in full — the `ICandidateStore` seam table, DES-027/028/066/067/076 as amended, DES-107, DES-108 and the evidence map at its end — plus §15's "v2.15.0 candidate selection — Definition-A trace rows" sub-table, §10.11's ratified constants, §10.12.4's SCR-15/16/22/23 rows and §13's owed-build rows; **version-only** for the earlier pin's scope, §10.12.3 / DES-094 clause 9, which was **not** re-read here; **sections this document cites:** §5.2, §10.11, §10.12.3, §10.12.4, §10.13.10, §10.13.10.1, §10.13.13, §10.13.14, §11, §13, §14, §15) (docs/03-architecture-design-sdd.md)
               CODE-TRUMOCRACY v2.11.1 (**Approved**; **scoped read for v2.10.0**: §3's `UT-0891`..`UT-0907` registry rows and the **739** total with its per-package addends, and §7 item **30** — the item that records these `TC` rows as owed; **carried from the v2.8.1 pin and NOT re-read**: §3's `UT-0890` row and the **640** total, §6's `enrolment_ui` flag row, and §7 items **26(d)** and **28**) (docs/06-coding-and-ut.md) · SECURITY-RESCAN-SC15-21-2026-08-11.md
               _(v2.5.0 pin note — read this before trusting a pin. Only the CODE pin was advanced
               (v2.4.3 → **v2.5.1**), because only Doc 06 was re-read for this version. The other
               four pins are **stale against the current versions** — SRS is now **v2.16.3**
               (Approved), SDD **v2.12.0** and MTP **v1.3.0** (both **In Review**, both bumped on
               2026-09-06 by the same FR-131 cascade that produced this version), BKLG **v2.5.0**
               (Approved) — and are deliberately
               NOT advanced here: a pin asserts "this document was written against that version",
               and advancing one without reading its delta would be a false claim of review.
               **One exception, stated so it is not ambiguous:** FR-131 was read for this version
               at **SRS v2.16.3 §4.45**, the current Approved text. A full pin-sync of
               SRS/SDD/BKLG/MTP is owed at the next version.)_
               _(v2.6.0 pin note — **no pin is advanced at this version**; this is a wording
               rework and no source document was re-read end to end. Two of the "current versions"
               named above have themselves moved since the morning of 2026-09-06: SDD is now
               **v2.13.0** and MTP **v1.4.0**, both **In Review** and both in cycle 2 of their
               neutral technical review; Doc 09 is now **v1.6.0 (In Review)**. SRS **v2.16.3
               (Approved)**, BKLG **v2.5.0 (Approved)** and CODE **v2.5.1 (Approved)** are
               unchanged. Named so the citations in the changelog and §5.3 can be read against the
               right versions. The full pin-sync is still owed.)_
               _(v2.7.0 pin note — **one pin advances, and ISS-C2-03 is discharged.** **CODE advances
               v2.5.1 → v2.6.0 (In Review)**: the Doc 06 v2.6.0 delta was read for this version — its
               changelog, its §3 `UT-0889` row and its 624 total, and its §7 item 26 rewrite — together
               with the UT-0889 block itself in `apps/web/test/safety-surfaces.test.tsx`. **The pin is
               annotated with the fact that matters rather than left bare: Doc 06 v2.6.0 FAILED cycle 1
               of its neutral technical review (94%, 0C/0H/1M/5L) and a **v2.7.0** rework is in progress.**
               The Medium (ISS-01) is about stale "owed" statements in §7 item 26 and the change history
               — **not about UT-0889**, whose five assertions the same reviewer scored as satisfying all
               five §5.4 requirements and as genuinely failing on the old strings. The cases below
               therefore rest on the test as read in the repository, not on the document pin.
               **No other pin advances.** The versions current on 2026-09-06, stated so no reader is
               misled either way: SRS **v2.17.1 — Approved**: clause (e) plus its §8 Scenarios 8 and 9,
               which **PASSED cycle 2 of its neutral business review on 2026-09-06**
               (artifacts/reviews/02-requirements-srs-v2.17.1-business-cycle2.md), so the acceptance
               criteria these six cases derive from are **settled, not provisional**; SDD **v2.13.0
               (Approved** — it left In Review after the v2.6.0 note above was written**)**; MTP
               **v1.5.0 (In Review**, v1.6.0 rework in progress**)**; BKLG **v2.5.0 (Approved)**; Doc 09
               is `docs/09-release-notes.md` at **v1.9.0 (Approved)**. **The SRS pin on the Source line
               above is NOT advanced even though SRS is now Approved** — advancing a pin asserts the whole
               delta was read, and what was read for this version is §4.45 and §8 FR-131 Scenarios 8/9,
               which is precisely what the six new cases cite, line by line, in their own rows. **MTP
               v1.5.0 §0.5 S4/S5 is read and cited as *current In-Review text*, not as settled evidence**
               — a v1.6.0 rework is in progress and S5 may still move, and **TC-3575 is Blocked on S5**,
               so that caveat is load-bearing rather than decorative. The full SRS/SDD/BKLG/MTP pin-sync
               is still owed.)_
               _(v2.8.0 pin note — **two pins advance and both were earned; ISS-01 and ISS-04
               discharged.** **CODE v2.6.0 → v2.7.0 (Approved)** — Doc 06 cleared its neutral technical
               review on 2026-09-06 (PASS 96%, 0C/0H/0M/3L), and its v2.7.0 delta was read here for two
               specific reasons that change this document: its **ISS-06** narrowed the UT-0889 Arabic
               assertion (TC-3573 is re-cut for it) and its **ISS-03** added a sixth `it`, the DES-085
               jargon scan (TC-3576 is minted for it). The pin no longer carries a FAIL annotation because
               there is no longer a FAIL to annotate. **MTP v1.0.1 → v1.6.0 (Approved)** — a **scoped**
               advance, and the word is meant: **§0.5 S4/S5 and §14 were read; the rest of the v1.6.0
               delta was not**, so this pin asserts those sections and no more, and the standing full
               pin-sync debt below is not discharged by it. It advances at all because Doc 04 v1.6.0 is
               what makes this document's own register sentence true — see the changelog, ISS-01.
               **SRS, SDD and BKLG do not advance.** Current versions, stated so no reader is misled:
               SRS **v2.17.1 (Approved)**, SDD **v2.13.0 (Approved)**, BKLG **v2.5.0 (Approved)**, Doc 09
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
               _(v2.9.0 pin note — **two pins advance, both scoped, both earned; and the v2.8.1 carried Low
               is folded in the same edit.** **SRS v2.17.1 → v2.17.3 (Approved)** — *scoped*: **§4.46 FR-132**
               was read clause by clause for this version, because §(d) (the honesty posture over enrolment and
               identity-verification claims) is the requirement the fifteen new cases verify and §(a)/(b)/(c)/(e)
               are what keeps its row OPEN. §4.45 FR-131 and §8 Scenarios 8/9 were **not** re-read; they are
               carried from the v2.8.1 read and nothing in this version rests on a change to them. **CODE
               v2.7.0 → v2.8.1 (Approved)** — *scoped*: §3's `UT-0890` registry row (Count **15**, suite total
               **640**), §6's `enrolment_ui` row, and §7 items **26(d)** (the unbuilt DES-098 acknowledge
               control) and **28** (the flag-gating record). **Each was verified against the repository rather
               than taken from the document:** the UT-0890 `describe` block at `apps/web/test/safety-surfaces.test.tsx`
               line 430 was read `it` by `it` (**15**, in five lettered groups), `packages/protocol/src/flags.js`
               was read for the `ENROLMENT_UI` defaults and `permanentFlags()`, and `apps/web/src/app/verify/page.tsx`
               for the flag branch. **SDD stays v2.13.0, BKLG stays v2.5.0, MTP stays v1.6.0** — all three are
               Approved and current; none was re-read for this version. **The story-by-story BKLG re-read that
               v2.8.1 recorded as owed is still owed**, and this version does not touch it. **The v2.8.1 Low
               (ISS-01) is folded above:** the SDD and SRS pins each carried a scoped-read annotation and an
               unlabelled trailing section list; both lists are now labelled "sections this document cites:",
               so one pin names one scope.)_
Last updated:  2026-09-21
Changelog:     v2.12.0 (2026-09-21) — **Rework cycle 3 of 5: the sweep that miscounted its own diff.**
               Against `artifacts/reviews/07-test-cases-suites-v2.11.0-technical-cycle2.md` (FAIL 94%,
               0C/0H/1M/3L, reviewer-qa). **All four issues taken.** **MINOR bump per the house rule.**
               **NOT ONE CASE, COUNT, STATUS OR RULING MOVES:** designed **521** · automated **290** ·
               observed **139** · inherited **136** · not executed **15** · Blocked **177** · No mechanism
               **46** · Manual **12** · failures **0**. §2 still sums to **521 / 290 / 231**; the identities
               still hold (139 + 136 + 15 = 290; 290 + 177 + 46 + 12 − 4 = 521). Doc 08 is untouched:
               **138 · 19 · 119**, both signals agreeing.
               **Every site changed at THIS version, counted from the operation list and not from the issue
               list — 8 operations over 6 sites, and these are they:** (1) **the header** — `Version`,
               `Status` and this entry [ops 1–3]; (2) **the v2.11.0 Changelog entry's site enumeration** —
               "thirteen" → **"fourteen"**, with the fourteenth named [op 4]; (3) **the v2.11.0 Changelog
               entry's carried-Lows line** — the ordinal dropped [op 5]; (4) **the v2.11.0 Status record's
               carried-Lows line** — same [op 6]; (5) **§0.1's Pass (obs.) vocabulary row** — R-22 added
               [op 7]; (6) **§5.5's `TC-3540` *Verifies* cell** — the per-seam map [op 8]. **6 sites, 8
               operations. The two numbers are published separately on purpose:** v2.11.0's Medium was a
               site count that did not match its diff, and the surest way to repeat it is to let "sites"
               and "operations" mean each other.
               **ISS-01 (Medium) — what was wrong and why.** v2.11.0's enumeration claimed **thirteen**
               sites over a **fourteen**-site diff. The missing one is **§5.7's `TC-3605`** (*Verifies*
               gains **FR-036**, **US-0046**, **DES-027 rule 6**) — the **cross-document fold of Doc 08
               v2.13.0 cycle-1 ISS-02 (High)**, and the row **Doc 08's FR-036 closure rests its withdrawal
               clause on**. **Root cause, recorded rather than apologised for:** the enumeration was
               written from **the cycle-1 issue list**, which the Status had just framed as the version's
               whole scope ("All eight issues are taken … Nothing is carried"); the one edit answering **no
               Doc 07 issue** therefore fell outside the frame. **An enumeration derived from the brief
               instead of from the diff is not falsifiable** — the identical argument this document makes
               about the §8 orphan check's basis, in the very same version. **Fix:** the v2.11.0 entry now
               reads **fourteen**, names the fourteenth and attributes it to the Doc 08 fold; this entry's
               own enumeration is derived from the ops above; and **the fold is named in the Status block**
               so it is visible without reading two changelogs.
               **The three Lows.** **ISS-02** — `TC-3540` named **three** DES (DES-097 · DES-104 ·
               §10.13.14) but only **two** FR and **two** US, so the `IProposalStore` seam had a design
               element and no requirement or story: the cell now carries a **per-seam map** —
               `IPartyStore` → **FR-013 · US-0021 · DES-097**; `IProposalStore` → **FR-090 · US-0100 ·
               DES-104**; `ICandidateStore` → **FR-036, FR-122 · US-0046, US-0133 · §10.13.14 seam** —
               and states that the **guarantee is one shim-sync property instanced three times**, not three
               guarantees. **ISS-03** — §0.1's Pass (obs.) row said the run series "reaches **R-21**" while
               **R-22** was minted in the same version, so the row amended *because it had not aged* was one
               run short at publication; re-worded to "**the runs behind the 139**", with R-22 listed and
               explicitly marked **"earns nothing — promotion deferred"** (`TC-3540` is held at Pass (inh.)
               to keep Doc 07 and Doc 08's evidence buckets in step). **ISS-04** — "their **second**
               deferral" was said of v2.11.0 here and of v2.10.0 by the cycle-1 report; **both cannot hold
               and the counter was never derivable.** The ordinal is **dropped at both sites** and replaced
               by the touches: **carried at v2.10.0, at v2.11.0 and again here.** A named list can be
               checked against the changelog; an ordinal cannot.
               **Still carried, named by touch rather than counted:** v2.9.0 ISS-02 (missing §10 separator)
               and ISS-04 (clause-(e) surface-vs-claim framing).
               v2.11.0 (2026-09-21) — **Rework cycle 2 of 5: the eighteenth block, and the FR-039
               carrier that did not exist.** Against
               `artifacts/reviews/07-test-cases-suites-v2.10.0-technical-cycle1.md` (FAIL 91%, 0C/0H/2M/6L,
               reviewer-qa). **All eight issues taken; none carried.** **MINOR bump earned by the
               Medium-or-worse rework rule, NOT by a mint.**
               **NOT ONE COUNT MOVES AT THIS VERSION, and that is the headline:** designed **521** ·
               automated **290** · observed **139** · inherited **136** · not executed **15** · Blocked
               **177** · No mechanism **46** · Manual **12** · failures **0** — every figure identical to
               v2.10.0. **No case is minted, retired, reused, renumbered or re-statused.** The identities
               still hold unchanged: 139 + 136 + 15 = **290**; 290 + 177 + 46 + 12 − 4 = **521**; §2's table
               still sums to **521 / 290 / 231**. **Both Mediums were defects of statement, not of
               counting** — which is precisely why they were worth a FAIL: a document whose numbers are
               right and whose sentences are wrong teaches a reader to trust the sentences.
               **Every site changed, enumerated so the sweep is falsifiable — fourteen sites, and these are
               they:** (1) the header Version, Status and this entry; (2) §0.1's **Pass (obs.)** vocabulary
               row (ISS-07); (3) §0.2's `test/sdk-types-sync.test.ts` execution row (ISS-01); (4) §5.1's
               `TC-3407` automation cell (ISS-06); (5) §5.3's `TC-3470` (ISS-05); (6) §5.5's `TC-3540`
               (ISS-01); (7) §5.7's Context paragraph (ISS-01); (8) §5.7's `TC-3612` expected result
               (ISS-08); (9) §8's three candidate-file rows (ISS-04); (10) §8's `test/sdk-types-sync.test.ts`
               row (ISS-01); (11) §8's v2.10.0 orphan check (ISS-01 **and** ISS-02); (12) §9's `R-21` row
               plus a new **`R-22`** row (ISS-01); (13) §10's **Cases Blocked** measure (ISS-03); **(14) §5.7's `TC-3605` *Verifies* cell** — gaining **FR-036**, **US-0046** and **DES-027 rule 6**. _(**v2.12.0, ISS-01 (Medium) — this enumeration read "thirteen" over a FOURTEEN-site diff, and site (14) is the one that mattered most.** `TC-3605`'s attribution is the **cross-document fold of Doc 08 v2.13.0 cycle-1 ISS-02 (High)** — the row **Doc 08's FR-036 closure rests its withdrawal clause on** — so a reader auditing FR-036 end to end would have found the edit and not found it declared. **Root cause:** the list was written from **the cycle-1 issue list**, which this version's Status framed as its whole scope ("All eight issues are taken … Nothing is carried"); the single edit that answered **no Doc 07 issue** fell outside that frame. **A sweep enumerated from the brief rather than from the diff cannot be falsifiable** — which is the argument this same version makes about the §8 orphan check's basis. **The figure is corrected here rather than only in the v2.12.0 entry, because this is the sentence a reader checks the diff against.** v2.12.0 counts its own sites from its operation list and publishes operations and sites as two separate figures.)_
               **ISS-01 — the arithmetic, old → new.** §5.7 read "97 `it`s, taking the suite 640 → 739";
               **640 + 97 = 737**, not 739. Restated as **640 + 97 + 2 = 739**, the **+2** being `UT-0871`
               extended to `IProposalStore` **and `ICandidateStore`** at Doc 06 **v2.10.0** in a **fifth
               file**, `apps/web/test/sdk-types-sync.test.ts`, which goes **1 `it` → 3**. §9's R-21 row had
               placed the pair in the candidate blocks at v2.11.0/v2.11.1; that pair is the UT-0905 flag-off
               and UT-0906 sign `it`s and is **already inside** the 20 web `it`s this suite maps. Orphan
               sweep basis **seventeen → eighteen** blocks. **Ruling on the two assertions: no case minted**
               — `UT-0871` is one parameterised `it` over a seam list, so the drop added two more instances
               of a guarantee `TC-3540` already states; `TC-3540`'s scope moves from **`IPartyStore`** to
               **all three seams**, which records the coverage without inflating the designed count.
               **ISS-02 — the correction, and what it cost.** §8's reverse sweep asserted a **Blocked**
               carrier for each of four un-instrumented criteria and cited `TC-3320`/`TC-3612` for FR-039.
               `TC-3612` has no FR-039 note; `TC-3611` does and is **Pass (obs.)**; `TC-3320` is an FR-067
               case. **FR-039's voter-scope and tie-break clauses have NO case at all** — the ids are
               dropped rather than corrected, because no correct id exists — and the fact is now stated on
               the same pattern this document already uses for FR-081. **The carrier list goes from four
               claimed to three real, plus two case-less clauses (FR-039, FR-081) named as such.**
               **Propagation checked in Doc 08 v2.13.0, as the report required:** §3.1's FR-039 row and §7
               entry 19 are **CLEAN**; **the v2.13.0 Changelog entry is NOT** — it repeats the claim as
               "`TC-3320/TC-3611`'s note". Recorded here and in the session note; **fixed in the Doc 08
               rework, not from here**, because Doc 08 is mid-review.
               **The six Lows.** ISS-03: §10's Blocked measure said "Ten cases" over an enumeration of
               **twelve** (TC-0028, TC-0029 · TC-3313..TC-3316 · TC-3317..TC-3322 = 2 + 4 + 6) — now
               **twelve**. ISS-04: `TC-3407` and `TC-3411` are counted automated in §2 and §10 but were
               mapped in neither §8 row — added, and "Cases mapped" re-derived **8 → 10** (protocol),
               **13 → 15** (sdk), **6 → 7** (web). ISS-05: `TC-3470` annotated on the `TC-3471`/v2.5.0
               precedent — `UT-0750`'s anon assertion was **FLIPPED** by this drop and the row's "anonymous
               copy" wording described the string the component must now **refuse** to render; evidence cite
               "14/14, 2026-08-25" → R-21's **25/25**. ISS-06: `UT-0894` and `UT-0896` added to `TC-3407`
               — they, not `UT-0891`/`UT-0899`/`UT-0901`, assert "eligibility checked by code", and Doc 03's
               FR-081 evidence row cites `UT-0896`. ISS-07: §0.1's Pass (obs.) row named only
               "2026-08-09 or 2026-08-25" while 139 cases now rest on it across R-18..R-21 — amended to name
               the run series and the case-by-case bar. ISS-08: `TC-3612`'s "structurally cannot reach a
               counting gate" softened to the three named `undefined` fields the `it` actually asserts, with
               the stronger property marked as inferred.
               **New run R-22**, and it deliberately promotes nothing: `npx vitest run
               test/sdk-types-sync.test.ts --reporter=verbose` in `apps/web` — **3 passed / 3**, each `it`
               green individually. That meets the Pass (obs.) bar, and `TC-3540` is **held at Pass (inh.)**
               anyway, because promoting it moves the observed/inherited buckets here **and** in Doc 08 §6
               and §9 while **Doc 08 v2.13.0 is mid-review**. **Promotion deferred, not denied**, and
               registered as owed at the next synchronised Doc 07/08 touch.
               **Still carried, and named by touch rather than counted — carried at v2.10.0, at v2.11.0 and again at v2.12.0:** _(v2.12.0, ISS-04: this read "**second deferral**", and the cycle-1 report said the same words of **v2.10.0**. Both cannot hold, and the counter was never derivable from anything a reader could check. The ordinal is dropped in favour of the touches, which are in the changelog above.)_ v2.9.0 ISS-02 (missing §10 separator)
               and ISS-04 (clause-(e) surface-vs-claim framing).
               v2.10.0 (2026-09-21) — **The `TC` rows for `UT-0891`..`UT-0907`: the candidate-selection
               gets its cases.** Twenty-eight cases minted, **TC-3592..TC-3619**, into a new suite
               **§5.7 `TS-CANDIDATE`**, one per guarantee over the blocks' **97 `it`s**. **MINOR bump** (new
               content minted). **Every site changed, enumerated so the sweep is falsifiable — fourteen
               sites, and these are they:** (1) the header — Version, Status, the SDD pin, the CODE pin,
               Last updated and this entry; (2) §0.2, one new execution row (R-21); (3) §2's suite table —
               the `TS-GOV2` row (automated 0 → 2, Blocked/no-mechanism 70 → 68), one new `TS-CANDIDATE`
               row, and the Total row (493 → **521** / 260 → **290** / 233 → **231**); (4) §2's enumeration
               paragraph, extended for this drop (v2.9.0 ISS-03, folded); (5) §3.1's `TC-0028` and `TC-0029`
               rows, re-worded — still **Blocked**, but on **no environment**, not on "Elections not
               implemented", which stopped being true at Doc 06 v2.11.1; (6) §5.2's `TC-3313`..`TC-3316`
               rows; (7) §5.2's `TC-3317`..`TC-3322` rows — both groups keep **Blocked** and now say which
               half v1 delivers, which new `TC` carries it, and which clause keeps them blocked; (8) §5.1's
               `TC-3407` (No mechanism → **Pass (obs.)**); (9) §5.1's `TC-3411` (No mechanism → **Pass
               (obs.)**); (10) §5.1's `TC-3419` (No mechanism → **Blocked**); (11) §5.3's `TC-3476` — the
               **FR-085** link removed, FR-131 clause 8 and US-0132 kept, status **Blocked** unchanged;
               (12) the new §5.7; (13) §8's table (three rows added, one extended) and a new orphan check;
               (14) §9 (R-21), §10 (five measures) and §11.
               **Count arithmetic, old → new.** Cases designed **493 → 521** (+28 minted; nothing retired).
               Automated **260 → 290** (+28 minted, +2 because `TC-3407` and `TC-3411` now have implementing
               tests). Observed **109 → 139** (+28, +2 — the same two). Blocked **176 → 177** (+1:
               `TC-3419`, arriving from No mechanism). No mechanism **49 → 46** (−3: `TC-3407`, `TC-3411`,
               `TC-3419`). Inherited **136**, not executed **15**, Manual **12**, failures **0** — all
               unchanged. Identity holds: 139 + 136 + 15 = **290**. Distinct total: 290 + 177 + 46 + 12
               − 4 overlap = **521**.
               **Run R-21.** `npm test` from the repo root: **739 / 739 pass, 0 failed**, exit 0 — contracts
               **95** · protocol **178** · sdk **287** · ui **25** · indexer **16** · web **138**. Then the
               four files case by case: `npx vitest run test/candidates.test.js --reporter=verbose` in
               `packages/protocol` (**27/27**) and in `packages/sdk` (**43/43**); `npx vitest run
               test/PrivacyStatus.test.tsx --reporter=verbose -t "UT-0903"` in `packages/ui` (**7 passed,
               18 skipped, of 25**); `npx vitest run test/candidates.test.tsx --reporter=verbose` in
               `apps/web` (**20/20**). **97 `it`s green individually**, which is what earns all 28 cases
               **Pass (obs.)** rather than Pass (inh.).
               **The band collision is recorded as a consequence, not as a note.** `TC-3592`..`TC-3619` is
               drawn from the free band `TC-3592`–`TC-3699` that Doc 04 **v1.7.1 §14** reserves for the six
               `TS-V1-*` suites. **Doc 04 §14 MUST re-narrow the `TS-V1-*` floor to `TC-3620` at its next
               touch.** That is the OPEN-30 pattern, and the architect is routed for it by
               `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`. Until that touch lands the
               two documents disagree about who owns `TC-3592`..`TC-3619`; the disagreement is **recorded
               here and owned**, not resolved by a document that does not own Doc 04 §14.
               **Doc 08 v2.13.0 moves on this version, and the ruling is the tester's:** Must **16 → 19**
               COMPLETE and **122 → 119** OPEN, with FR-036 / FR-037 / FR-085 closing and FR-038 (Should)
               closing beside them; FR-039, FR-065, FR-066, FR-067, FR-081 and FR-093 staying OPEN and
               reclassified to **G-NOMECH**, FR-081 and FR-093 leaving **G-TRACE**. Six stories newly meet
               the Definition of Done — US-0046, US-0047, US-0048, US-0049, US-0050, US-0095: **17 → 23**.
               **Two Lows folded (v2.9.0 ISS-01, ISS-03); two carried by id (ISS-02, ISS-04).**
               v2.9.0 (2026-09-20) — **Debt closure: the `TC` rows for `UT-0890`.** Fifteen cases minted,
               **TC-3577..TC-3591**, one per `it` of the UT-0890 block, all into **§5 `TS-ADV-01…16`** under
               **ADV-02 · RISK-02**. **MINOR bump** (new content minted). **No `TC` is retired, reused,
               renumbered or re-statused.** Cases designed **478 → 493** · automated **245 → 260** · observed
               **94 → 109** · inherited **136** · not executed **15** · Blocked **176** · No mechanism **49** ·
               Manual **12** · failures **0**. Identity holds: 109 + 136 + 15 = **260**.
               **Run R-20 — and it is a clean-tree run, which is the point.** `npm test` from the repo root:
               **640 / 640 pass, 0 failed**, exit 0 — contracts **95** · protocol **151** · sdk **244** · ui
               **18** · indexer **16** · web **116**. Then `npx vitest run test/safety-surfaces.test.tsx
               --reporter=verbose -t "UT-0890"` in `apps/web`: **15 passed, 26 skipped (41)**, every `it` name
               reported green individually — which is why all fifteen are **Pass (obs.)** and not Pass (inh.).
               **R-18 and R-19 were both qualified as run against an uncommitted 76-path working tree, with a
               post-merge re-run owed. R-20 discharges that debt.** At the run, `git status --porcelain`
               returned **three** paths, **all** of them session-governance records under `artifacts/`
               (`REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`, `REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md`,
               `memory-index.json`) — **no modified product, test, configuration or document path**, and
               `HEAD` at `18244e8`. The suite reads none of those three. **The post-merge re-run this document
               has owed since R-18 is DISCHARGED at this version, and Doc 08 v2.12.0 records the same.**
               **Suite placement, and why §5 rather than a new suite.** TC-3564..TC-3567 (UT-0887) and
               TC-3570..TC-3576 (UT-0889) are the FR-131/FR-132 honesty family and all sit in §5 under
               **ADV-02 · RISK-02**; the fifteen new cases are the same family (a public surface that claimed a
               property the product does not have) and are filed with it rather than fragmenting it. **The
               caveat is stated rather than buried:** `RISK-02` is *coercion and vote-buying*, and in substance
               a false enrolment claim sits closer to `RISK-06` (deanonymisation) and `RISK-07` (state
               compulsion) — a citizen who believes "the document never leaves your phone" enrols under a threat
               model that does not hold. The family is kept in one place for traceability; **no case here is
               offered as evidence about coercion**, and §5's RISK-02 verdict is untouched. **Doc 04 §14's
               `TS-V1-ID` suite is deliberately NOT opened**: it is reserved for the *built* verify-and-discard
               mechanics (FR-126/FR-128/FR-132, DES-100), and populating it with cases that verify the
               capability's **absence** would misrepresent the enrolment sprint's starting position.
               **The Must count does not move, and it was ruled clause by clause rather than assumed.**
               **FR-131 is untouched by this mint — no new case carries an FR-131 link.** Doc 02 §4.45 states
               that personhood-enrolment and identity-verification claims are **expressly outside** clause (e)
               (FR-132 §(d); §16.4 H-16/H-17/H-18; Doc 02 §13 routing (j)), and the `/verify` copy is enrolment
               copy. TC-3585 and TC-3591 do apply FR-131's four-word list, but as an **instrument** over copy
               that clause (e) does not govern; each row says so in terms. FR-131 stays **OPEN (G-PHASE3)** on
               what it was already open on: the **DES-098 acknowledge-to-proceed control does not exist** (Doc
               06 §7 item 26(d)), SCR-13/SCR-14 are unbuilt, and Scenario 9's instrument is absent (TC-3575,
               Blocked). **FR-132 stays OPEN (G-PHASE3):** §(a) phone layer, §(b) government-ID check and its
               verify-and-discard allowlist, §(c) `subject_id_hash` deduplication and §(e) the vendor
               no-retention procurement are **all unbuilt** (`StubIdDocumentChecker.IS_INSECURE_MOCK()` = true,
               CON-015 uncleared), and §(d)'s own notice duty names **DES-098**, which does not exist — so
               TC-3587 states the right fact on a surface that is not the one §(d) names. **`/verify` is
               flag-gated OFF above `dev`, so nothing these fifteen cases guard is a shipped capability.**
               **What this mint does NOT repair, named rather than half-done.** **`TD-RTM-01`** (UT-0841..UT-0848
               defined twice) — untouched; **no new case cites one of those eight ids**, so this drop's orphan
               zero is unaffected by it. **`TD-RTM-02`** (three irreconcilable test-case denominators) — the
               figures here move by **+15 inside each existing convention** (Doc 07 §2/§10: 478 → 493; Doc 08 §6:
               485 → 500; Doc 08 §9: 478 → 493) and **the three-way disagreement is unchanged in character and
               NOT reconciled**; that is a recount, not a mint. **`TD-RTM-03`** (Doc 08's NFR-023 row cites
               neither TC-3538 nor TC-3561) — TC-3586 is **added** to that row in Doc 08 v2.12.0 and the older
               two are **still** absent, so the debt stands. **`TD-RTM-04`** (US-0135..US-0142 untraced) —
               untouched; every new case cites `US-0133`, which is traced. **`TD-07-01`/`TD-07-02`/`TD-07-03`**
               — unchanged and still open; the §8 `Cases mapped` figure **14** is again **not** advanced, for the
               reason v2.8.0 recorded (see §8).
               **One chain observation, routed rather than acted on.** `/verify/` is a real UI surface and Doc
               03 §10.12 maps the enrolment flow to **SCR-01** (pre-enrolment disclosure) and **SCR-02**
               (attestor choice & enrolment), yet Doc 08 §3.1's `SCR` cell for FR-132 reads **none**. Assigning
               a screen is the **architect's** (Doc 03 §5.2), not the tester's, so **no SCR link is asserted
               here or in Doc 08 v2.12.0**. It changes no status either way: FR-132 is OPEN on four unbuilt
               clauses, not on a missing screen id. Routed to Ravi Deshmukh.
               _(v2.8.1 record, retained:)_ v2.8.1 (2026-09-07) — **Rework cycle 3 of 5 against
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
               artifacts/reviews/07-test-cases-suites-v2.7.0-technical-cycle1.md (FAIL 94%, 0C/0H/2M/3L).
               All five issues addressed, none carried.** Cases designed **477 → 478** · with an
               implementing automated test **244 → 245** · executed and observed **93 → 94** · inherited
               green **136** (unchanged) · automated but not executed **15** (unchanged) · Blocked **176**
               (unchanged) · No mechanism **49** (unchanged) · Manual **12** (unchanged) · observed
               failures **0**. **No Must row of Doc 08 moves and no ruling changes: FR-131 stays OPEN.**
               **ISS-02 (Medium) FIXED — TC-3573 claimed a guard UT-0889 does not have.** The expected
               result read that "neither سريًا nor سري (secret) appears in the endorsement step". The
               shipped assertion is now **only** the exact retired phrase — `ar.home.steps[1].body` is
               asserted not to contain **"اسمك سريًا"** — plus "لا نعرف" on the promise. The bare "سري"
               ban was **removed on purpose** at Doc 06 v2.7.0 (its ISS-06): a bare substring ban also
               matches **"سريعًا"** ("quickly") and **"تسري"** ("takes effect"), the latter already
               shipping at `ar.ts` `parties.leaveHelp`, so the wide ban would have failed the build on
               honest copy. **A narrower assertion is the correct engineering choice and a wider claim in
               this document is a defect regardless** — the row carried this document's strongest status
               (Pass (obs.)) and fed Doc 08's FR-131 evidence cell, so a reader could have shipped an
               Arabic string containing "سري" believing TC-3573 would catch it. The cell now states the
               assertion actually made and carries the false-positive rationale as a **third scope
               limit**, beside the two it already had. **Status unchanged and never in doubt:** the case
               is green and was re-observed `it` by `it` in run **R-19**. Third instance of the same
               defect class corrected in three consecutive versions — TC-3567 (v2.6.0), TC-3543 (v2.7.0),
               TC-3573 (here) — and the pattern is worth naming: **every one was an expected-result cell
               that outran its test, and every one was found by re-reading the test rather than the cell.**
               **ISS-01 (Medium) FIXED — a register claim attributed to a version of Doc 04 that does not
               carry it.** This
               changelog said "Doc 04 §14 records TC-3564..TC-3569 as minted and reserves TC-3570–TC-3699".
               **Doc 04 v1.5.0 — the version pinned when that was written — said neither half:** §14
               reserved TC-3564–TC-3699 annotated "none minted", and TC-3569 and TC-3570 appeared nowhere
               in it. **Doc 04 v1.6.0, now Approved (PASS 96%), says exactly what the sentence claimed:**
               §14 records TC-3564–TC-3567 in `TS-ADV-01…16`, TC-3568 in `TS-SCAFFOLD`, TC-3569 in
               `TS-ABSENCE`, and narrows the `TS-V1-*` reservation to **TC-3570–TC-3699**, noting that band
               "is itself being drawn on by **Doc 07 v2.7.0, in progress**". The sentence is re-attributed
               to v1.6.0 and dated. **The mint was never in question** — ids continue from TC-3569, none
               reused, the band otherwise free — so no id, suite assignment or count changes. **Recorded
               rather than quietly corrected, because the direction of the original error was the harmful
               one:** it read as though the architect's register had already ratified the mint and
               narrowed the band, when at that moment the register was stale and the reconciliation was
               owed. **The reviewer scored this a Medium on exactly that ground** — it is wrong on its
               own terms, independent of any later drop, and it is the same over-claim class Doc 04
               itself was marked down for on 2026-09-06. It has since been ratified: v1.6.0 is Approved.
               **ISS-03 (Low) FIXED — UT-0889 has SIX `it`s, not five, and the sixth is now a case.**
               Doc 06 v2.7.0 added a **DES-085 jargon scan** ahead of the five mapped ones, asserting that
               both corrected landing strings carry none of the eleven banned blockchain words. **TC-3576
               is minted for it** rather than recorded as deliberately unmapped, because this document has
               given every previous per-drop jargon scan its own row — **TC-3538** (UT-0868, membership)
               and **TC-3561** (UT-0884, proposals) — and an unmapped guard on shipped copy is a guard no
               RTM reader can see. **The free `TS-V1-*` band after this mint is TC-3577–TC-3699** _(v2.8.1, ISS-03 — v2.8.0 minted TC-3576 without restating it, leaving the v2.7.0 entry's "TC-3576–TC-3699" as the document's only statement of the band and one id out of date)_: Doc 04 v1.6.0 §14 reserves TC-3570–TC-3699, Doc 07 has drawn **TC-3570..TC-3576**, and **123 of those 130 ids remain free**. §8's automation row and orphan sweep are corrected 5 → 6 and the sweep
               re-run against the settled file; **material orphan count for this drop is 0 again, and now
               truly**. TC-3576 is **Pass (obs.)** on R-19 (observed `it` by `it`), and it verifies
               **NFR-023 · DES-085**, which is a link Doc 08 must carry too — recorded there at v2.11.0,
               together with a new debt, **`TD-RTM-03`**, for the pre-existing fact that Doc 08's NFR-023
               row cites neither TC-3538 nor TC-3561 and reads "none" for evidence. **That debt is named,
               not paid here:** paying it means re-deriving two other drops' evidence, which is a recount,
               not a side-effect of this rework.
               **ISS-04 (Low) FIXED — CODE pin advanced, and its rider executed.** Doc 06 is **v2.7.0,
               Approved** (PASS 96%, 0C/0H/0M/3L); the pin advances and drops the FAIL annotation it
               correctly carried while there was a FAIL. The rider the reviewer attached: **TC-3568's
               conditional discharge is now unconditional.** The v2.6.0 text discharged the Doc 06 §4a
               recorded deviation "CONDITIONALLY, on Doc 03 reaching Approved", because DES-094 clause 9
               was then In Review and could still move. **Doc 03 v2.13.0 is Approved**, so the condition
               is met and the discharge is unconditional — recorded as the condition being **satisfied**,
               with the conditional wording retained, not deleted.
               **ISS-05 (Low) FIXED — §0.2 gains the runs it was missing.** Every previous full-suite run
               has a row in §0.2 (542/542, 619/619 R-17) but **R-18 had none**, although §9 recorded it in
               full. R-18 **and** R-19 are both added there, each carrying the qualifications §9 states
               rather than a bare green number.
               **Run R-19 (2026-09-07).** `npm test` from the repo root: **625 / 625 pass, 0 failed**, exit
               0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web **101**. Then the
               UT-0889 block case by case: **6 passed, 20 skipped (26)**, every `it` name green
               individually. **619 → 624 → 625:** the +5 was UT-0889 at Doc 06 v2.6.0, the +1 is its sixth
               `it` at v2.7.0. **Still an uncommitted working tree** (76 dirty paths) — reviewer-qa has not
               signed the merge, so the post-merge re-run stays owed, exactly as R-18 said.
               **Unchanged and still open:** `TD-07-01`, `TD-07-02`, `TD-07-03`, `TD-RTM-02`, and the
               FR-131 ruling in Doc 08 — **Must COMPLETE stays 16 of 138.**
               v2.7.0 (2026-09-06) — **FR-131 clause (e) re-cut: six TC minted, one TC
               corrected, one run recorded, three Lows discharged.** Cases designed **471 → 477** · with
               an implementing automated test **239 → 244** · executed and observed **88 → 93** ·
               inherited green **136** (unchanged) · automated but not executed **15** (unchanged) ·
               Blocked **175 → 176** · No mechanism **49** (unchanged) · Manual **12** (unchanged) ·
               observed failures **0**.
               **Derived from acceptance criteria, not from the requirement prose.** Doc 02 **v2.17.1**
               added §8 FR-131 **Scenario 8** and **Scenario 9** for clause (e) at its own cycle-1 review
               (ISS-01), which is what makes these cases derivable at all: v2.17.0 stated clause (e) in
               §4.45 but gave it no Gherkin, and CLAUDE.md derives `TC` from acceptance criteria. **Every
               row below names the scenario line it tests.**
               **Six TC minted — TC-3570..TC-3575**, continuing from the last minted id **TC-3569**. No id
               is reused. Doc 04 **v1.6.0 (Approved)** §14 records TC-3564..TC-3569 as minted and reserves **TC-3570–TC-3699** _(v2.8.0, ISS-01: this read "Doc 04 §14" while this document pinned MTP **v1.5.0**, which said neither half — v1.5.0 reserved TC-3564–TC-3699 "none minted". v1.6.0, which landed after, records the six and narrows the band exactly as described. Re-attributed, not deleted; the mint never depended on it)_
               for the `TS-V1-*` band, so these six are minted from the bottom of that reserved range,
               in order, and the band still holds TC-3576–TC-3699. _(v2.8.1, ISS-03: **superseded, not wrong when written.** v2.8.0 minted TC-3576, so the free band is now **TC-3577–TC-3699** — restated in the v2.8.0 entry below. Doc 04 v1.6.0 §14 reserves TC-3570–TC-3699 for the `TS-V1-*` suites; Doc 07 has drawn TC-3570..TC-3576, leaving **123 of 130** ids free.)_
               **TC-3570..TC-3574 — Scenario 8, one TC per `it` of UT-0889.** All five map **UT-0889**
               (`apps/web/test/safety-surfaces.test.tsx`), one TC per `it`, because each is an
               independently defeatable guard — the TC-3564..TC-3567/UT-0887 precedent rather than the
               TC-3568/UT-0759 single-row precedent, because these assert five different strings on three
               different surfaces rather than four paths of one rule. **TC-3570** en `home.steps[1].body`;
               **TC-3571** en `home.promises[0]`; **TC-3572** the rendered landing page is bound to those
               two shipped source strings; **TC-3573** the Arabic mirror; **TC-3574** the sdk
               authorship-refusal message. They are placed in **`TS-ADV-02` (RISK-02)** beside TC-2614 and
               TC-3564..TC-3567, because what they guard is what those guard — a v1 surface reclaiming a
               v2 privacy property — and not split across `TS-I18N` and `TS-PRIV`, which would put one
               guard in three suites.
               **TC-3575 — Scenario 9, and it is minted BLOCKED on purpose.** Scenario 9 is not a
               restatement of Scenario 8: it quantifies over **every public-facing surface of a v1
               deployment, in every language, including the README and the landing copy**, and requires
               that **zero** materials assert or imply a participation act is unknowable — including
               claims carrying **none** of the four banned words. That is a **population** obligation and
               the only instrument specified for it is **Doc 04 §0.5 S5**, the build-failing FR-131
               denylist over `apps/web` and `packages/ui`, widened at MTP v1.5.0 to every participation
               act, every language, and to claims as well as words. **S5 is not implemented.** The scans
               that exist — UT-0857, UT-0868, UT-0884 — are **DES-085 jargon** lists ("wallet", "seed
               phrase", "blockchain"…) over enumerated per-drop strings; they are not the FR-131 denylist
               and would have caught **neither** string this drop fixed. Minting TC-3575 Blocked is the
               honest record: the acceptance criterion exists, no instrument executes it, and the gap is
               now a **named case** in Doc 08 rather than a paragraph of prose. Recording Scenario 9 as
               covered by TC-3570..TC-3574 would have been the single easiest false pass available at
               this version — five guarded strings are not "every surface in every language".
               **TC-3570..TC-3574 are the first FR-131 cases recorded Pass (obs.), and the reason is
               stated so the convention does not blur.** Run **R-18** is a full-suite `npm test`
               (624/624, tester-executed, exit 0); that alone is **file** granularity and, under the §2
               corroboration convention, would earn only Pass (inh.). The tester additionally ran the
               UT-0889 block **case by case** — `npx vitest run test/safety-surfaces.test.tsx
               --reporter=verbose -t "UT-0889"` in `apps/web` — and read all **five** `it` names reported
               individually green (5 passed, 20 skipped of 25). That is case-by-case observation, which is
               what Pass (obs.) has always meant here, so the observed count moves 88 → **93** on evidence
               rather than by relaxing the bar. **TC-3564..TC-3569 are NOT promoted** — no case-by-case
               run of UT-0887, UT-0759 or UT-0888 was performed at this version.
               **TC-3543 corrected — an expected result that described copy the product no longer ships.**
               Its cell read that the Supporter refusal's "stated reason is *anonymity*". Doc 06 v2.6.0
               rewrote that message under clause (e) — it now reads "…authorship is public and a
               Supporter's participation is never published". **The case still passes and its status does
               not change**: UT-0089 asserts a boolean and UT-0832 asserts the error code plus the
               substring "self-declared", and neither moved. This is a description defect, corrected the
               way v2.6.0 corrected TC-3568 — by making the cell say what the test asserts. **No other TC
               quoted or paraphrased any of the five changed strings**: grep over "kept private", "never
               learn" and "Supporters are anonymous" across Docs 07 and 08 returned nothing else.
               **Two scope limits recorded rather than glossed.** **(1)** Scenario 8 gained a v2.17.1
               qualifier the safe harbour did not previously carry — copy passes only if it states what is
               not published, states what our own records can see, **and makes no contrary claim elsewhere
               in the same string** — and Scenario 8's closing line makes the **reader test govern** where
               the two disagree. **UT-0889 tests neither of those**: it asserts substrings, and no
               automated test in this repository applies a grade-8 reader test. TC-3570/TC-3571 record
               that limit in terms. **(2)** TC-3573 asserts only **absence** in Arabic; it makes no
               positive assertion that the mirror states the three facts the English does. Extending
               either is owed UT scope for the engineer (Samuel Oyelaran) and neither is recorded as
               covered.
               **Three v2.6.0 Lows discharged, none carried:** ISS-C2-01 (TC-3519 regex pipes escaped),
               ISS-C2-02 ("Forty-eight" → "Forty-nine", forty-ninth case named), ISS-C2-03 (pin note
               re-cut, CODE advanced). `TD-07-01`, `TD-07-02`, `TD-07-03` and `TD-RTM-02` are unchanged
               and still open.
               v2.6.0 (2026-09-06) — **Rework cycle 2 against
               artifacts/reviews/07-test-cases-suites-v2.5.0-technical-cycle1.md (FAIL 92%,
               0C/0H/3M/4L). All seven issues addressed. No TC minted, retired, re-statused or
               re-scoped; NO count moves.** Cases designed **471** · with an implementing automated
               test **239** · observed **88** · inherited green **136** · automated but not executed
               **15** · Blocked **175** · No mechanism **49** · Manual **12** · observed failures
               **0** — every figure unchanged from v2.5.0, and stated here rather than left to
               inference.
               **ISS-01 (Medium) FIXED — TC-3568's expected result claimed evidence UT-0759 does
               not produce.** It read that paths (a), (b) and (d) render the title "with a matching
               `aria-label` and no FR-131 banned word anywhere in the rendered text". Read against
               the four `it`s of UT-0759 in `packages/ui/test/PrivacyStatus.test.tsx`: only path
               (a) asserts the `aria-label` **and** the banned-word regex; paths (b)
               (`unlinkable: false`) and (d) (malformed prop) assert **title selection only** —
               "Verified" present, "Verified — private" absent; path (c) asserts the title and its
               `aria-label`. The cell now states, path by path, exactly what is asserted. This is
               the defect class this document corrected on TC-2614 at v2.5.0 — an expected result
               no regression could falsify — and it is corrected the same way, by narrowing the
               claim. Extending the banned-word and accessible-name assertions to paths (b) and (d)
               is **owed UT scope routed to the engineer (Samuel Oyelaran)** if the wider guarantee
               is wanted; it is not recorded here as already covered.
               **ISS-02 (Medium) FIXED — fabricated NFR-013 coverage removed.** TC-3567's Verifies
               cell read "US-0134 · FR-131 · DES-098 · **NFR-013**". What UT-0887 asserts is the
               content of two `ar.banner.*` string constants; NFR-013's guarantee is "8 locales
               incl. RTL", and neither locale coverage nor RTL rendering is exercised — nor does
               Doc 08 §3.2 carry any NFR-013 → TC-3567 link. `NFR-013` is dropped from the cell
               (FR-131 and DES-098 already carry the case) and the row now states in terms what it
               does **not** verify. The two documents no longer disagree about a requirement link.
               **ISS-03 (Medium) FIXED — the "approved design element" claim is retracted in all
               three places** (this changelog, and both halves of the TC-3568 row). Doc 03 is
               `Status: In Review`: **v2.12.0** minted DES-094 clause 9 and then FAILED cycle 1 of
               its neutral technical review (89%, 0C/1H/2M/2L), and **v2.13.0** (2026-09-06) is the
               rework, itself under cycle-2 review — clause 9's text may still move. TC-3568 is now
               recorded as verifying the **current corrected text** of DES-094 clause 9, and the
               Doc 06 §4a recorded deviation is **discharged CONDITIONALLY, on Doc 03 reaching
               Approved**, not "DISCHARGED". This is the discipline the v2.5.0 changelog stated for
               itself three paragraphs earlier and then broke in one place.
               **ISS-04 (Low) FIXED:** `DES-094` removed from TC-3564's Verifies cell. TC-3564
               renders `ReceiptFreedomBanner` (DES-098); DES-094 is the `PrivacyStatus` component
               and has no part in that case, as TC-3565..TC-3567 already record by citing DES-098
               alone.
               **ISS-05 (Low) FIXED:** the §4.3 and §5 suite headings now name the cases they
               actually contain — "(TC-1600–TC-1614, TC-3569)" and "(TC-2600–TC-2752,
               TC-3564–TC-3567)" — as §5.3's heading and the §2 suite table already did. v2.5.0
               applied that fix in one place of three.
               **ISS-06 (Low) FIXED:** §10's overlap paragraph introduced its formula as "the
               187-case 'implementing automated test' count" and then computed with **193**;
               v2.5.0 moved the figure in the formula and left the label in the prose. The prose now
               reads 193 (187 before v2.5.0). No arithmetic changes: 193 + 171 + 48 + 12 = 424, and
               equivalently 193 + 175 + 48 + 12 − 4 = 424.
               **ISS-07 (Low) FIXED:** §6's Accessibility row still said the two component-level
               cases "were not executed". Run R-17 executed `apps/web` **95/95** green, which
               covers both; what has **not** been made is a case-by-case accessibility pass. The row
               now says exactly that and points at TD-07-03 — the same distinction §0.1's v2.5.0
               amendment exists to protect. The verdict is unchanged: still **No**.
               **Suite re-executed during this rework, and nothing moved.** `npm test` from the
               repo root, 2026-09-06: **619 / 619 pass, 0 failed**, exit 0 — contracts 95 ·
               protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95, identical to **R-17** package
               for package. **No new run id is minted:** an identical re-run of the same commit
               confirms R-17 rather than adding an observation, so §9 records the re-confirmation
               inside the R-17 row and no case is promoted on it.
               **Sources as read at this version:** Doc 06 **v2.5.1 (Approved)**, Doc 02 **v2.16.3
               (Approved)**, Doc 05 **v2.5.0 (Approved)**, Doc 03 **v2.13.0 (In Review)**, Doc 04
               **v1.4.0 (In Review)**, Doc 09 **v1.6.0 (In Review)**. The three In-Review documents
               are cited as current corrected text and never as approved sources.
               Changelog:     v2.5.0 (2026-09-06) — **FR-131 honesty-drop traceability. Suite re-run, 6 TC minted,
               1 TC corrected; no TC retired, reused or renumbered.** Doc 06 **v2.5.1** (Approved)
               closed Doc 09 `REL-LIM-18` in code at commit `0a5c542` (PR #19, merged to `main`)
               under **US-0134**: five shipped strings and one component title that asserted the
               retired "votes are anonymous but not receipt-free" framing now state the **FR-131**
               (SRS v2.16.3 §4.45) v1 truth, and three new UT blocks guard them against regression.
               **Run R-17 (2026-09-06) — executed by the tester, not inherited:** `npm test` from
               the repo root, **619 / 619 pass, 0 failed**, exit 0 (contracts 95 · protocol 151 ·
               sdk 244 · ui 18 · indexer 16 · web 95). Recorded in §0.2 and §9.
               **Six TC minted — TC-3564..TC-3569**, continuing from the last minted id TC-3563.
               **TC-3564..TC-3567** map **UT-0887** (`apps/web/test/safety-surfaces.test.tsx`, four
               assertions) into `TS-ADV-02`, beside TC-2614, the disclosure case they defend:
               banned words only where immediately negated and never "private"/"secure"; FR-131
               (a)/(b)/(c) positively stated and the retired claims absent; the guard bound to the
               shipped `en.ts` strings rather than a test-local copy; the Arabic mirror carrying
               the same truth. **TC-3568** maps **UT-0759** (`packages/ui/test/PrivacyStatus.test.tsx`,
               the `ver` TITLE four-path) into `TS-SCAFFOLD` beside TC-3488/UT-0753, as **one** TC,
               following the TC-3475/UT-0758 precedent that already covers the **subtitle** half of
               the same backing-aware rule (Doc 03 minted **DES-094 clause 9** for the title the
               same day, at v2.12.0, and carried it into **v2.13.0** — both **In Review**, so this
               case verifies the current corrected text of a design element, **not an approved
               one**; corrected at v2.6.0, ISS-03). **TC-3569** maps **UT-0888**
               (`packages/protocol/test/party-and-regions.test.js`) into `TS-ABSENCE` with the other
               protocol flag cases TC-1611/TC-1612, because what it asserts is the **absence of a
               claim** from a shipped string.
               **TC-2614 CORRECTED — its expected result was false.** It read "The UI states votes
               are anonymous but **not** receipt-free", which is the exact framing FR-131’s closing
               sentence bans and which the code stopped asserting at Doc 06 v2.5.0. What the case
               exercises is unchanged (UT-0710/0711/0712, now joined by UT-0887); the sentence
               describing it was wrong. Its note that this is **a disclosure, not a satisfaction of
               FR-031/FR-032/NFR-003** is kept, and its status moves **Not run → Pass (inh.)** on
               the R-17 `apps/web` 95/95 result.
               **Counts moved (arithmetic stated, not asserted).** Cases designed 465 → **471**
               (+6). With an implementing automated test 233 → **239** (+6). Inherited green
               129 → **136** (+6 new, +1 TC-2614 re-statused; 55 + 28 + 24 + 22 + 7 = 136).
               Automated but not executed 16 → **15** (−1, TC-2614). **Observed 88 — UNCHANGED**,
               and deliberately so: R-17 is a full-suite run observed at **file** granularity, so
               under the v2.3.0 corroboration convention its cases are recorded Pass (inh.), not
               promoted to Pass (obs.). Identity holds: 88 + 136 + 15 = **239**. Blocked **175**,
               No mechanism **49**, Manual **12**, observed failures **0** — all unchanged, because
               none of the six new cases is blocked and no blocked case was re-statused. §2 suite
               table: `TS-ABSENCE` 15 → **16** cases / 12 → **13** automated; `TS-ADV-01…16`
               43 → **47** / 24 → **28**; `TS-SCAFFOLD` 19 → **20** / 16 → **17**; totals
               465 → **471** / 233 → **239** / Blocked-or-no-mechanism **232** unchanged.
               **Two stale figures fixed while passing through them, both pre-existing:** §2’s
               post-table paragraph read "Of those 211 … **107** are inherited-green cases" against
               its own "233 of 465" headline (v2.4.0-era leftovers); §5.3’s heading and context
               read "(TC-3470–TC-3487)" and "15 of 18 cases", both pre-TC-3488.
               **TD-07-03 RAISED (Low).** R-17 executed the `apps/web` suite green, so the 15 rows
               still marked *Not run* in the `UT-0700…UT-0742` group are now corroborated at file
               granularity. They are **not** promoted, because no case-by-case pass was made; the
               §0.1 vocabulary row is amended to say exactly that, so *Not run* is not read as
               "never executed" for a suite the tester just ran green.
               **Sweep for the retired wording across `docs/`, run 2026-09-06, whitespace-normalised
               so that line-broken occurrences are caught — a plain `grep` misses those and would
               have reported a clean sweep that was not clean. Result: ZERO live assertions of the
               retired framing survive anywhere in the document set.** Every remaining occurrence is
               a **quotation of superseded text inside a correction record**, which is the v2.4.4
               precedent this document set for itself: quote the superseded sentence rather than
               delete it, so the trail survives. Occurrence counts and dispositions — **Doc 03** (4):
               corrected the same day at **v2.12.0** (In Review); §13’s "Public tallies in Phase 1"
               repayment cell now states the FR-131 truth, and §10.12.3 gained **clause 9**, the
               backing-aware `ver` **title** rule, overruling the v2.7.0 "Verified — private is
               compliant" analysis. **Doc 04** (6): corrected the same day at **v1.3.0** (In Review);
               `TS-ADV-02` case **A-02.6** and **OPEN-01** both restated off the retired framing —
               A-02.6 is the strategy-level source of TC-2614, which is why that correction and this
               one agree rather than one lagging the other. **Doc 09** (3): historical defect record,
               and `REL-LIM-18` is now **CLOSED** at Doc 09 **v1.5.0** against commit `0a5c542`.
               **Doc 06** (2): its own change history, describing the defect it fixed. **Doc 07** (1):
               TC-2614’s correction note below, quoted for the record. **Doc 02, Doc 05, Doc 08:
               zero.** **Nothing is owed to another role on the retired wording as of 2026-09-06 —
               but read the cascade as MADE, not SETTLED:** Doc 03 v2.12.0, Doc 04 v1.3.0 and Doc 09
               v1.5.0 are all **In Review**, not Approved. None has a passing neutral technical review
               yet (the assigned reviewer is reviewer-qa per
               `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md`), so any of the three
               may still move under rework. This document cites them as the current corrected text,
               not as approved sources, and the pin note above says the same. FR-131’s ban binds the
               v1 **product** (UI, README, public-facing
               materials); a test document recording that a false sentence was corrected is not a
               product surface, and deleting the quotation would destroy the only evidence that the
               correction happened.
               v2.4.4 (2026-08-30) — **Rework cycle 1 against
               artifacts/reviews/07-test-cases-suites-v2.4.3-technical-cycle1.md (FAIL 92%,
               0C/1H/0M/1L). No TC added, changed, re-statused or re-run; no count moved; the
               suite is unchanged at 610 green.**
               **ISS-01 (High) FIXED — the fourth and most load-bearing place was missed.**
               v2.4.3 claimed "the revisit note on TC-3545 is DISCHARGED" while **TC-3545's own
               row text was left unedited**, still reading "is flagged for an approver ruling; if
               it is ruled a counting action this case and FR-090's row must be revisited" — a
               statement made false by the 2026-08-30 ruling, and a self-contradiction inside the
               very version whose purpose was to remove exactly that staleness. v2.4.3 corrected
               the narrative notes that DESCRIBE the case and missed the case itself, which is the
               text the RTM cites. TC-3545's Expected-result cell now records the ruling, quotes
               the superseded sentence for the record rather than deleting it, and states that
               **the condition never triggered** — the approver ruled PROPOSING is NOT a counting
               action, so neither this case nor FR-090's row needs revisiting.
               **ISS-02 (Low) FIXED:** provenance corrected — the two open questions were first
               recorded in this document at **v2.4.0** (the TS-PROPOSALS drop), not v2.4.1/v2.4.2.
               v2.4.3 (2026-08-30) — **Ruling sync only. No TC added, changed, re-statused or
               re-run; no count moved; the suite is unchanged at 610 green.** Doc 03 §10.13.13's
               two open questions — recorded in this document at v2.4.0 as owed, and
               written into the TS-PROPOSALS notes where they bore on status — were both RULED by
               the human approver on 2026-08-30
               (artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md; applied at
               Doc 02 v2.16.0 and Doc 03 v2.10.0). This version corrects the three places where
               this document asserted a ruling was OWED, which is no longer true. **(a) FR-091's
               eight stages vs ADR-008's PROPOSAL_STATE: COMPLEMENTARY, each canonical at its own
               layer** — not competing, so no reconciliation is owed. Critically for this document,
               **the published stage set is UNCHANGED**, so TC-3552..TC-3555 are unaffected and
               stand exactly as written; the note that this reconciliation "bears directly on what
               the row must test" is corrected — it does not. **(b) PROPOSING is NOT an FR-123
               counting action; the built reading is confirmed** (gating authorship on verification
               status is a participation restriction FR-020 prohibits), so **TC-3543/TC-3545 stand
               unchanged and the revisit note on TC-3545 is DISCHARGED.** Neither FR-091's nor
               FR-092's row status moves: both stay honestly OPEN (G-NOMECH) for the same reasons
               as before — FR-091 on the unwired "per published timelines" clause, FR-092 on the
               absent ballot layer and the unbuilt DES-097 anchoring. Source pins advanced
               (SRS v2.15.0→v2.16.0, SDD v2.9.3→v2.10.0). Housekeeping: v2.4.2 technical cycle-1
               review PASSED (98%, 0C/0H/0M/1L; ISS-01 Low carried — §9 lacks an R-17 confirmatory
               re-run row, per the R-14 precedent; carried again here, as this version runs
               nothing).
               v2.4.2 (2026-08-29) — **Source-pin sync only. No TC added, changed or re-statused; no
               count moved.** Both upstream documents took a further rework cycle after Doc 07
               v2.4.1 was authored and are now **Approved at 100%**: SDD v2.9.2→**v2.9.3** and
               CODE v2.4.2→**v2.4.3**. Neither delta bears on a test case.
               Doc 03 v2.9.3 (cycle-1 FAIL 95%, Medium) closed the stale §10.12.5 class (i) debt
               row that still listed FR-080 as having "no dedicated SCR, no DES surface element",
               and aligned the Wireframe→SCR 3.6 row with the SCR→Wireframe SCR-15 row it had
               been contradicting. That is the **same stale entry the tester routed to the
               architect while closing FR-080 at Doc 08 v2.5.1** — found independently by two
               roles, and now discharged. Cross-reference tidying: no TC implication.
               Doc 06 v2.4.3 (cycle-1 PASS 98%, one Low reworked rather than carried) widened
               `workerGateHow` — the step-1 gate line, which is also the standing reminder
               existing Workers see — from the narrower "makes what you put forward public" to
               state **both** FR-080 facts ("It lasts for the term, and it makes your record of
               taking part in this party public for that time"), in en and ar. **UT-0872 gained
               two assertions** inside its existing block; **no new UT id, no behaviour change,
               and the suite is unchanged at 610** (web 91/91, re-verified by the tester).
               EFFECT ON TC-3544: its evidence is **strengthened, not altered** — every assertion
               its Expected column describes still holds, and the gate now states at step 1 what
               step 2 already required before confirmation. Status stays **Pass (inh.)**; the row
               text remains accurate and was deliberately left unedited, this being a pin sync.
               EFFECT ON ROW DECISIONS: none. FR-080's closure at Doc 08 v2.5.1 rested on the
               **consent panel**, which is the clause-bearing surface ("before a declaration is
               confirmed"); the gate is step 1 and was never the basis. The change removes a
               narrower first impression — a real honesty improvement below the normative line —
               without moving the basis of the decision.
               v2.4.1 (2026-08-29) — FR-080 informed-consent event: the v2.4.0 gap was BUILT, not recorded.
               TC-3562 and TC-3563 minted (next free ids) for the two-step consent event
               (Doc 06 v2.4.2, Doc 03 v2.9.2 DES-103, now binding SCR-15 + SCR-12). The tester
               verified the mechanism IN THE COMPONENT, not from a description: 'declare-worker'
               sets consent-pending state ONLY — it does not declare; the SOLE call to
               onDeclareWorker is 'confirm-worker' inside the panel; 'cancel-worker' returns to
               the gate and records nothing. TC-3562 — both FR-080 facts stated BEFORE
               confirmation, with the filing form unreachable at that moment (UT-0885), which is
               what gives "before … confirmed" a moment to attach to; the copy states permanence
               ("This lasts for the whole term. You cannot undo it partway through.") and the
               participation record ("Your record of taking part in this party becomes public for
               the term — not only the proposals you put forward, but what you take part in"),
               the trailing clause closing exactly the narrow reading v2.4.0 flagged. TC-3563 —
               declining leaves the member a Supporter with nothing recorded (UT-0886), which is
               what makes this consent rather than an unavoidable notice.
               TC-3544's scope note REWRITTEN: it previously recorded FR-080's consent clause as
               unimplemented and the row as staying OPEN; it now scopes TC-3544 to step 1 and
               points at TC-3562/TC-3563. The suite preamble's FR-080 exclusion bullet is struck
               through and marked RESOLVED. **No existing TC status changed.**
               §2: TS-PROPOSALS 20→22 cases / 20→22 automated; Total 463→**465**, automated
               231→**233**, Blocked-or-no-mechanism **232 unchanged**. Convention: anchors
               461→**463**, expanded 470→**472**. §8: web proposals row UT-0872…**UT-0886** (20
               tests); orphan addendum UT-0885→TC-3562, UT-0886→TC-3563 — count remains **0**.
               §9: **R-16** (web 91/91; suite 608→**610**). §10: designed 465, automated 233,
               inherited green 127→**129**. Pins SDD v2.9.1→**v2.9.2**, CODE v2.4.1→**v2.4.2**.
               v2.4.0 (2026-08-29) — TS-PROPOSALS suite added (TC-3542..TC-3561, 20 cases) covering the v1
               proposals-and-debate drop (Doc 06 v2.4.1, commit c04b4f2, branch build/v1-proposals;
               Doc 03 v2.9.1 DES-103 tiers / DES-104 authorship & competing proposals / DES-105
               deliberative lifecycle / DES-106 permanent decision trail, §10.13.13). Every UT id
               was read in its test file before a TC was written — none is cited from a summary.
               FR-079 three tiers, auto-Supporter, no weight under any configuration (TC-3542);
               FR-024/FR-090 Worker authoring gate as a PURE FUNCTION OF TIER — no approver, no
               reviewer, no reason — and the Supporter refusal reading as a disclosure with a
               self-declarable tier (TC-3543, TC-3544); authoring NEVER calls the eligibility seam
               and takes no verifier parameter (TC-3545); non-member refused whatever tier claimed
               (TC-3546); drafts checked against published floors with (field, code) deficiencies
               and every declared tier accepted — content never judged (TC-3547); FR-090 competing
               proposals joining ONE decision window incl. differently-phrased grouping (TC-3548),
               the capability-absence set — first author holds no power, isOriginal is provenance
               only (TC-3549), the web equal-standing surface with both authors named (TC-3550),
               and entry closing when the ballot opens (TC-3551); FR-091 the eight published
               stages in order one step at a time (TC-3552), skip/reverse/no-op refusals naming
               what was skipped (TC-3553), the capability-absence set at all three layers
               (TC-3554), and deliberative-stages-are-records-never-outcomes incl. open-tier
               deliberation (TC-3555); FR-122/FR-123 the BINDING_VOTE admission gate as the only
               seam call site with the refusal carrying stillAMember/mayStillDeliberate (TC-3556),
               the non-dismissable coercion notice rendered BEFORE the ask (TC-3557), and the
               service never casting, storing or counting a vote (TC-3558); FR-092 the append-only
               trail with copies-out and no delete path (TC-3559) and the surface admitting what
               v1 does not do (TC-3560); jargon + surveillance-metadata absence scan (TC-3561).
               All 20 Automated — Pass (inh.) from Doc 06 v2.4.1, per the TS-PARTY/TS-MEMBERSHIP
               precedent. Suite re-run by the tester 2026-08-29 (§9 R-15): **608/608 green**
               (contracts 95 / protocol 150 / sdk 244 / ui 14 / indexer 16 / web 89), i.e. 542 +
               66 new (protocol 24, sdk 24, web 18); the contracts consensus lifecycle was not
               modified by this drop.
               THREE ROWS THIS SUITE DOES NOT CLOSE, said plainly in the suite preamble and in the
               relevant case notes rather than left for a reader to infer: **FR-080** — TC-3544
               covers the no-approval and not-a-judgement halves, but FR-080's informed-consent
               clause (the UI stating plainly, BEFORE confirmation, that Worker status is
               PERMANENT FOR THE TERM and makes the participation record public for the term) is
               not covered, because the shipped copy states publicity of what is put forward and
               states permanence NOWHERE; **FR-091** — the ORDER guarantees are covered completely,
               the "executed by code per published timelines" clause is not (governance.js
               schedule() is unwired, Doc 06 §7 #25); **FR-092** — the trail is append-only and
               complete for the events this layer sees, but FR-092 also names the vote result,
               enacted consequence, implementation status and measured outcome (none recorded here
               — TC-3558 confirms the layer holds no vote) and requires third-party reconstruction
               from public data alone, which needs DES-097 anchoring (Doc 06 §7 #24).
               Doc 03 §10.13.13's two open questions are recorded where they bear: (a) the eight
               FR-091 stages are a DIFFERENT TAXONOMY from ADR-008's PROPOSAL_STATE; (b) whether
               PROPOSING should be an FR-123 counting action — COUNTING_ACTION is an
               approver-ratified 3-value allowlist and FR-024/FR-090/OI-14 gate authoring on
               self-declared Worker tier, so the FR-conformant reading was built and the
               divergence flagged; TC-3545 carries the revisit note.
               [SUPERSEDED at v2.4.3/v2.4.4 — both questions RULED 2026-08-30; see those entries.]
               §2 suite table: TS-PROPOSALS row added; Total 443→**463**, automated 211→**231**,
               Blocked-or-no-mechanism **232 unchanged** (this drop adds none). Convention note:
               anchors 441→**461**, expanded 450→**470**. §8: 3 mapping rows added + a fresh
               orphan sweep (0 material orphans across all 27 drop UT ids). §9: **R-15** added.
               §10: designed 443→463, automated 211→231, inherited green 107→**127**. Pins:
               SDD v2.8.3→**v2.9.1** (+ §10.13.13), CODE v2.3.3→**v2.4.1**. No existing TC status
               changed.
               v2.3.2 (2026-08-29) — Upstream refresh for Doc 03 v2.8.2/v2.8.3 and the `PREREQ-01` approver
               ruling (Rathish, 2026-08-29; artifacts/status/DECISIONS-2026-08-29-NONVIOLENCE-ENTRENCHMENT.md).
               Source pin SDD v2.8.1 → **v2.8.3**, adding §10.13.10.1.
               CONTEXT: the FR-077 amendment gap this document surfaced at v2.3.1 (and Doc 08
               v2.4.0 acted on) has since been (a) independently reproduced by reviewer-qa against
               Party.sol — both failure modes, zero non-violence checks in any contract; (b)
               DESIGNED by the architect in Doc 03 v2.8.2 §10.13.10.1 — charter becomes a CLAUSE
               MAP so amendCharter can only reach the clause it names instead of replacing the
               whole document hash; the non-violence clauseId is PLATFORM-IMMUTABLE at
               construction for every party rather than a founder choice; and amendments MUST
               carry the text they change so the contract verifies rather than trusts; and (c)
               ruled by the approver at Doc 03 v2.8.3 to be its own tracked work item
               **PREREQ-01**, a BLOCKING PREREQUISITE to the on-chain governance increment rather
               than a line item inside it, with DES-101 §10.13.10.1 rule 6's adversarial
               amendment test as the closing evidence.
               **NEW: TC-3541 minted** (next free id) — the adversarial amendment case: an
               amendment naming an UNRELATED clause must not install a charter whose non-violence
               clause has been stripped, plus the direct variant on a party that never entrenched
               the clause. Status **No mechanism** (not Blocked): the instrument exists and the
               case is executable today — it would FAIL — so the defect is against the
               REQUIREMENT, not against the case (§0.1 vocabulary). Minted deliberately, not for
               completeness: PREREQ-01's exit criterion IS this test, and an exit criterion that
               lives only in a design document is untracked in the suite meant to prove it;
               FR-077's RTM row also needed a TC covering the very clause that keeps it open.
               TC-3403 reason note updated: the amendment half moves from *undesigned* to
               **designed-and-unbuilt**, cross-referencing §10.13.10.1 and TC-3541, and stating
               that PREREQ-01 governs WHEN the fix lands, not whether the case passes.
               FR-077 section note (§5.4) updated with the same framing, and records that the fix
               is **not exploitable in v1** (no on-chain governance, ADR-024 §(b)) — no v1 work is
               blocked.
               **NO TC STATUS CHANGED.** TC-3508..TC-3510 remain Pass (inh.) with the v2.3.1
               corrections intact; TC-3403 remains No mechanism; every other case is untouched.
               Counts (TC-3541 is the only movement): §2 suite table TS-PARTY 28→29 cases
               (range TC-3489–TC-3516, TC-3541; automated 28 unchanged; Blocked/no-mechanism
               0→1); Total 442→**443**, automated **211 unchanged**, Blocked-or-no-mechanism
               231→**232**. Convention note: anchors 440→**441**, expanded 449→**450**.
               §10: cases designed 442→443; **No mechanism 48→49**; every other exit figure
               unchanged. No suite was re-run for this version — it is a documentation refresh
               over unchanged code (last verified 542/542 green at v2.3.1, §9 R-14).
               v2.3.1 (2026-08-29) — Accuracy rework of TC-3508..TC-3510 (FR-077 non-violence clause) plus
               the two cycle-1 Lows from artifacts/reviews/07-test-cases-suites-v2.3.0-technical-cycle1.md
               (PASS 98%, 0C/0H/0M/2L). The FR-077 rows described a contract that DOES NOT EXIST
               in the code. Surfaced while the architect was writing DES-101 (Doc 03 v2.8.1) —
               its cycle-1 High was that DES-101 named the same non-existent error codes; the
               same wrong names were sitting in this document. Four corrections, all verified
               against packages/protocol/src/party.js (~lines 363-380) by reading it:
               (a) ERROR CODES: there is no CLAUSE_MISSING / CLAUSE_ALTERED. validateDraft
               returns { valid, errors } where each error is a (field, code, message) triple;
               this gate pushes field: 'charter.nonViolenceClause' with code 'REQUIRED' (absent
               or empty, line 369) or 'ALTERED' (any byte mismatch, line 375). 'REQUIRED' is
               platform-wide (also name line 66, pillars line 81, line 339) so the FIELD scopes
               it; 'ALTERED' is unique to this gate (verified: single occurrence across
               packages/protocol/src and packages/sdk/src).
               (b) PATH: packages/protocol/src/clauses.js DOES NOT EXIST. The canonical text is
               the NON_VIOLENCE_CLAUSE constant in packages/protocol/src/constants.js (~line 165).
               (c) FIELD NAME: charter.clause_nonviolence -> charter.nonViolenceClause.
               (d) RETURN SHAPE: { error: 'CLAUSE_ALTERED' } -> { valid: false, errors: [{field,
               code, message}] }.
               UT citations also corrected to the real per-case mapping (UT-0071 verbatim-passes;
               UT-0072/0073 REQUIRED absent/null; UT-0074/0075 ALTERED rewrite/one-character).
               **NO TC STATUS CHANGES.** All three remain Pass (inh.). The tests always asserted
               the real behaviour — the document misdescribed it. This was a documentation
               defect, not a test or code defect, and no evidence moved.
               NEW FINDING recorded in the TC-3508..TC-3510 section note and routed to Doc 08:
               FR-077 requires refusal at publication AND at "every subsequent amendment". These
               cases cover PUBLICATION only, and nothing implements the amendment half — there
               is no application charter-amendment path (validateDraft runs at createDraft and
               publishDraft only), and on-chain Party.amendCharter
               (packages/contracts/src/core/Party.sol ~line 350) overwrites charterHash/charterCID
               after checking only immutableClause[clauseId]; it never sees the charter text.
               Doc 08 v2.4.0 reclassifies FR-077 G-TRACE -> G-NOMECH on this finding and the row
               stays OPEN. A dedicated amendment-path TC is owed once a mechanism exists.
               DES-101 (Doc 03 v2.8.1 §10.13.10) now supplies FR-077's design link with SCR-04/
               SCR-05 bound, so the section heading and Verifies columns cite it.
               TC-3403 status note updated: its "verifier not designed" reason is superseded by
               DES-101; it stays **No mechanism** for the amendment half only.
               Cycle-1 ISS-01 (Low) absorbed: source pins CODE v2.3.2 -> v2.3.3, SRS v2.13.0 ->
               v2.15.0, SDD v2.7.1 -> v2.8.1 (+ §10.13.10); §5.5 TS-MEMBERSHIP preamble note
               updated — the FR-064-SEMANTICS product-owner ruling HAS been received (option (a)
               EXPLICIT-LEAVE, SRS v2.15.0 Approved); FR-064 stays OPEN because DES-065 remains
               unbuilt, not because a ruling is awaited.
               Cycle-1 ISS-02 (Low) absorbed: §9 gains R-13 for packages/sdk/test/party-creation.test.js
               (38/38), matching the per-file pattern R-06/R-07/R-08 set at v2.2.2.
               Suite re-run 2026-08-29: 542/542 green, unchanged. Counts unchanged: 442 cases /
               211 automated / 231 Blocked-or-no-mechanism; 440 anchors; 449 expanded.
               v2.3.0 (2026-08-29) — TS-MEMBERSHIP suite added (TC-3517..TC-3540, 24 cases) covering the
               join/membership drop (Doc 06 v2.3.2 Approved, cycle-3 PASS 97%): FR-020 join without
               approval at service + web and the structural no-verifier guarantee (TC-3517..TC-3520);
               FR-022 leave-at-will, immediate, no exit approval (TC-3521..TC-3522); FR-064
               one-active-party in the EXPLICIT-LEAVE form — ALREADY_MEMBER_ELSEWHERE naming the current
               party, and same-party ALREADY_MEMBER (TC-3523..TC-3525); append-only membership history,
               leaving is never deletion (TC-3526..TC-3527); FR-130 cap at join on ACTIVE members,
               100/101 boundary, a leave frees exactly one slot (TC-3528..TC-3529); FR-122/FR-123
               join is not counting — verified-members-only official strength, counted-member leave,
               seam called once with scope STRENGTH_CONTRIBUTION (TC-3530..TC-3533); FR-131(d)
               four-clause non-dismissable notice and FR-131(b) v1-honest join copy
               (TC-3534..TC-3535); clock determinism, ship-dark flag gating, jargon + absence scans
               (TC-3536..TC-3538); and the two seam guards — UT-0831 expirePetitions interface-only
               (FR-013 expiry path · DES-097) and UT-0871 .d.ts shim sync (DES-097)
               (TC-3539..TC-3540). All 24 cases Automated — Pass (inh.) from Doc 06 v2.3.2 Approved
               (sdk UT-0819..0830 membership 22 tests; sdk UT-0831 inside party-creation.test.js
               38 tests; web UT-0858..0870 27 tests; web UT-0871 1 test; all green). The tester ALSO
               executed the full suite on 2026-08-29 while running the Doc 06 cycle-3 review and
               observed 542/542 green — recorded in §0.2 and §9 (R-12) as corroboration; the TC status
               stays Pass (inh.) against the Doc 06 pin, per the TS-PARTY precedent. TC-3481 (FR-131
               clause (d) notice) status note AMENDED: the obligation is now met at the
               parties-directory counting surface (TC-3534), but TC-3481 stays **Blocked** for the
               SCR-13/SCR-14 ballot surfaces, which remain unbuilt (Doc 06 §7 #21). NOT extended:
               FR-021 (one-member-one-equal-vote) — this drop adds no vote-weight or tally evidence,
               so no TC claims it. §0.2 execution evidence: 5 rows added. §2 suite table:
               TS-MEMBERSHIP row added; Total 418→442, automated 187→211; Blocked/no-mechanism
               unchanged 231. §2 convention note: anchors 416→440, expanded 425→449. §8 automation
               mapping: 3 rows added, 1 updated (sdk party-creation.test.js → UT-0780..0818 + UT-0831,
               38 tests). §9 execution log: R-09..R-12 added. §10 exit summary updated. Source pin:
               CODE v2.2.0→v2.3.2.
               v2.2.2 (2026-08-25) — TS-PARTY suite added (TC-3489..TC-3516, 28 cases) covering the
               party-creation drop (Doc 06 v2.2.0 Approved): FR-010 collision + emblem UI
               (TC-3489..TC-3493); FR-011 eight-pillar refusal at protocol+sdk+web (TC-3494..TC-3496);
               FR-012 defaults+bounds (TC-3497..TC-3498); FR-013 expiry/archive/cooldown
               (TC-3499..TC-3503); FR-018 threshold gate (TC-3504..TC-3506); FR-020 join-no-verifier
               (TC-3507); FR-077 non-violence clause (TC-3508..TC-3510); FR-130 cap boundary+code-only
               lift (TC-3511..TC-3514); BR-020 disclosure (TC-3515..TC-3516). All 28 cases
               Automated — Pass (inh.) from Doc 06 v2.2.0 Approved (protocol UT-0060..0086:
               44 tests; sdk UT-0780..0818: 37 tests; web UT-0841..0857: 27 tests; all green).
               §0.2 execution evidence: 3 rows added (inherited). §2 suite table: TS-PARTY row
               added; Total 390→418, automated 159→187; Blocked/no-mechanism unchanged 231.
               §8 automation mapping: 3 rows added. §9 execution log: R-06/R-07/R-08 added.
               §10 exit summary updated. Source pins: BKLG v2.3.0, CODE v2.2.0.
               v2.2.1 (2026-08-25) — cycle-1 rework (07-test-cases-suites-v2.2.0-technical-cycle1.md). ISS-01 (Medium): TC-3488 minted for UT-0753 (packages/ui/test/PrivacyStatus.test.tsx — accessible-name check, US-0132 · NFR-011 · DES-094); orphan check re-run over UT-0750..0758 and UT-0760..0779 — 0 material orphans after TC-3488. §8 packages/ui cases mapped updated 6→7. §2 suite table: TS-SCAFFOLD row TC-3470–TC-3487→TC-3470–TC-3488, cases 18→19, automated 15→16; Total 389→390, automated 158→159. §10 exit summary updated (cases designed 389→390, automated 158→159, observed passing 87→88). ISS-02 (Low): §2 convention note "2-row counting difference" corrected to "7-row"; anchor count 387→388, expanded 396→397.
               v2.2.0 (2026-08-25) — TS-SCAFFOLD suite added (TC-3470..TC-3487, 18 cases): US-0132 PrivacyStatus tier display + self-view refusal + backing-aware 'ver' copy + absence/no-leak (FR-082..FR-086 · FR-124 · DES-093/DES-094 · UT-0750..UT-0758); US-0133 counting-gate pass/refuse + JOIN/LEAVE/account-creation allowlist throw + IS_INSECURE_MOCK delegation (FR-122 · FR-123 · FR-132 · DES-095/DES-100 · ADR-024/ADR-025 · UT-0760..UT-0769); US-0134 IBallotService cast/change/tally/refuse/embargo (FR-131 · DES-096 · ADR-024 · UT-0770..UT-0776). 15 of 18 cases automated Pass (obs.) — npm test -w @trumocracy/ui (14/14) and npm test -w @trumocracy/sdk (160/160 including seams) both green 2026-08-25. 3 cases Blocked: TC-3476 (enrolment disclosure affordance — screen wiring pending), TC-3481 (FR-131 clause (d) notice — seam refuses correctly but UI notice DES-098 not wired), TC-3487 (audit-contract publication — IS_INSECURE_MOCK=true; wiring pending). §2 suite table: TS-SCAFFOLD row added; Total 371→389, automated 143→158, Blocked/no-mech 228→231. §2 convention note updated (anchor count 369→387). §0.2 execution evidence updated. §8 automation mapping: UT-0750..UT-0758 packages/ui and UT-0760..UT-0779 packages/sdk seams rows added. §9 execution log R-04 and R-05 added. §10 exit summary updated. Source pins: BKLG v2.2.0, SRS v2.13.0, SDD v2.7.1, CODE v2.0.1.
               v2.1.0 (2026-08-12) — 2026-08-12 follow-up audit rework (source: SECURITY-RESCAN-SC15-21-2026-08-11.md §3/§4/§6; ADR-019 amendment; cycle-2 ISS-01 Low — 07-test-cases-suites-v2.0.1-technical-cycle2.md §6). Fix 1 (vacancy-immediate under-tested): TC-3451 amended — 60-day inaction window now tested with stewards SEATED but inactive, removing vacancy conflation; revokeTrustAnchor vacancy-immediate coverage preserved in TC-3451. TC-3453 amended — issuer-onboarding window path now tests stewards seated-but-inactive (corrects wrong "60-day vacancy" precondition). TC-3467 minted — publishAuditRef() citizen fallback immediate on steward vacancy (zero registered stewards; no STEWARD_INACTION_WINDOW wait; US-0127 · FR-117 · DES-092; ADR-019 amendment; rescan SC-17 re-attack #2; Blocked — Phase 3). TC-3468 minted — issuer-onboarding coordination citizen fallback immediate on steward vacancy (US-0127 · FR-117 · DES-092; rescan SC-19; Blocked — Phase 3). Fix 2 (cycle-2 ISS-01 Low — §10 arithmetic): total 368→371, Blocked 169→172; four-case automated-and-Blocked overlap stated explicitly with convention note; §2 TS-GOV2 suite-table row updated (67→70 cases, TC-3400–TC-3469, not-automated 67→70); §2 total row updated (368→371, 225→228); §5.1 heading range updated (TC-3400–TC-3466→TC-3400–TC-3469); §2 convention note updated (368/375→371/378). Fix 3 (anti-circularity direct attack): TC-3469 minted — Open Layer vote (60%/15%) attempts GovernanceConstants setter to lower Guarded Layer constant (Tier-2 quorum 25%→16%, supermajority 80%→61%); call reverts at onlyGovernor / permittedActionClass / Amendment Layer classification check (US-0129 · FR-119 · DES-091 · DES-087; rescan §3 re-attack #1; Blocked — Phase 3).
               v2.0.0 (2026-08-11) — TC-3400..TC-3466 minted (67 cases): TS-GOV2 suite added covering FR-074..FR-120 (SRS v2.2.0), NFR-027/NFR-028, mandatory SC-15..SC-21 security-closure cases (SECURITY-RESCAN-SC15-21-2026-08-11.md), Guarded Layer property tests P1..P5 (Doc 03 §14 named reverts), and FR-117 capability-absence suite (static dep-guard TC-3465 + dynamic vacancy simulation TC-3466). Source pins updated: SRS v2.2.0, BKLG v2.0.1, SDD v2.1.1. Header bumped to In Review pending document-review cycle.
               v2.0.1 (2026-08-12) — cycle-1 technical review rework (07-test-cases-suites-v2.0.0-technical-cycle1.md): ISS-01 Critical: TC-3456..TC-3464 Verifies corrected to US-0129 · FR-119 · DES-087 (DES-091 where GovernanceConstants exercised); ISS-02 High: TC-3454 Verifies corrected to US-0129 · FR-119 · DES-087; ISS-03 High: TC-3450 Verifies corrected to US-0129 · FR-119 · DES-091; ISS-04 Medium: Doc 04 source pin bumped to v1.0.1 (RESOLVED AT SOURCE — Doc 04 v1.0.1 reserves TS-CR1 and TS-GOV2 ranges); ISS-05 Medium: §10 exit summary counts updated (298→368, Blocked 140→169, No mechanism 10→48); ISS-06 Low: TC-3456 amended to match SDD §14 spec (firstVote at 75%); ISS-07 Low: TC-count convention note added to §2. Context paragraph for TC-3456..TC-3464 corrected from FR-109..FR-111 to FR-119.
               v1.1.2 (2026-08-10) — TC-3343..TC-3345 added (SC-01 trust-anchor binding negatives for FR-069/070); TC-3323 updated to 5-signal arity (Doc 03 v1.1.2 SC-01 fix).
               v1.1.1 (2026-08-10) — TC-3309 expected result updated to cite DES-068 party-switch exclusion (cycle-1 ISS-01); TS-CR1 Covers column corrected to include RISK-22..24 (ISS-02).
               v1.1.0 (2026-08-10) — TC-3300..TC-3342 minted for FR-062..073 (CR-v1.1.0); TS-CR1 suite added; RTM rows added in Doc 08.
```

> **Based on:** IEEE 829 test-case specification. **Produced in:** Verify. **Approved at:** Gate 2.
> Cases are grouped into the suites reserved in Doc 04 §14 and numbered inside the `TC` ranges that
> document reserved. Every case derives from a **Gherkin acceptance criterion** in Doc 02 §8 or
> Doc 05 §6, or from a **failure mode** in SDD §11. Traceability closes in the RTM (Doc 08).

---

## 0. Reading this document honestly

This is a **Phase-1 drop**. Three facts shape every status in it, and none of them is hidden:

1. **The ZK verifiers are mocks** (Doc 06 §7.1). Any guarantee whose strength comes from a proof —
   "this endorsement came from a resident", "this credential belongs to a unique human" — is
   currently enforced by `MockVerifierAlwaysTrue`. The *contract logic around* the proof is real and
   tested; the proof itself is not. Doc 04 §7.4 forbids presenting circuit or mock-verifier results
   as evidence of soundness, and this document obeys that.
2. **Circuits are written but not compiled** (Doc 06 §7.2). The whole `TS-ZK` suite is designed here
   and **cannot execute** until the Phase-2 `circom` CI job and the ceremonies exist.
3. **MACI, Elections, Recall, Treasury and the recovery/relayer services are not implemented**
   (Doc 06 §7.3). Cases against them are written, and marked **Blocked — Phase 3**.

### 0.1 Status vocabulary (used in every suite table)

| Status | Means exactly |
|---|---|
| **Pass (obs.)** | The implementing test was **executed case-by-case by the tester** — each `it` read green **individually**, not inferred from a file- or suite-level total — and passed. _(**v2.11.0 amendment, ISS-07. This row had not been amended as it aged, while the *Not run* row below was.** It still read "executed by the tester in this session (**2026-08-09 or 2026-08-25**)", naming two dates, when **139** cases now rest on this label across a run series that by v2.12.0 runs through **R-22**. The definition was never the two dates; it is the **case-by-case bar**, and that bar has not moved once — what moved is how many runs have met it.)_ **The runs behind the 139** _(v2.12.0, ISS-03: this read "across a run series that **reaches R-21**", and the row amended at v2.11.0 **precisely because it had not aged** was already one run short at publication — **R-22** is minted in that same version. "Reaches" read as the series' end; it is not. The list below is **the runs the 139 rests on**, and a run that earns nothing is listed and marked as such rather than omitted, because omitting it is what made the sentence stale in the first place)_**:** 2026-08-09 `packages/protocol` (82), `services/indexer` (16), `packages/sdk` (124); 2026-08-25 `packages/ui` (14), `packages/sdk` full re-run (160, 36 new seams); **R-18** (2026-09-06) the `UT-0889` block, 5 `it`s; **R-19** (2026-09-07) the sixth `UT-0889` `it`; **R-20** (2026-09-20) the `UT-0890` block, 15 `it`s; **R-21** (2026-09-21) the `UT-0891`..`UT-0907` blocks over four files, **97** `it`s; **R-22** (2026-09-21) the `UT-0871` block, **3** `it`s — **and R-22 EARNS NOTHING: promotion deferred, not denied.** It meets this bar, and `TC-3540` is nevertheless held at **Pass (inh.)** because promoting it moves the observed/inherited buckets in §2 and §10 **and** in Doc 08 §6/§9 while Doc 08 is mid-review; moving half of a synchronised pair is the `TD-RTM-02` drift. **The 139 therefore does not include it**, which is why it is listed here with its effect stated rather than left out. **A full-suite green run alone has never earned this label and does not now** — that is the §2 corroboration convention, and it is why `TC-3564`..`TC-3569` and `TD-07-03`'s 15 rows are still not promoted. |
| **Pass (inh.)** | The implementing test exists and is recorded green in **Doc 06 §3/§5**. The contract suite (`packages/contracts`, in-process EVM harness) takes ~5 minutes and was **not executed in this session**; its result is inherited from Doc 06, not observed by the tester. |
| **Not run** | An automated test exists and has **not** been executed case-by-case by the tester (`apps/web`, `UT-0700…UT-0742`). **v2.5.0 amendment — read this before treating the label as "never run".** Run **R-17** (2026-09-06, full-repo `npm test`, 619/619 green) executed the `apps/web` suite **95/95 green**, so every row still marked *Not run* in the `UT-0700…UT-0742` group is corroborated green at **file** granularity. Those rows are deliberately **not** promoted here, because no case-by-case pass against each `TC` was made; the promotion is owed and is recorded as **TD-07-03** in §0.3. *Not run* therefore means "no case-level observation recorded", **not** "the test did not run and may be failing". |
| **Blocked** | The case is designed and cannot execute: the code, circuit, environment or instrument it needs does not exist. The blocking reason is stated in the row. |
| **No mechanism** | The case is designed and the **product has no implementation to test**. This is a defect against the requirement, not against the case. |
| **Manual — not run** | The case is by nature manual (audit, screen-reader pass, legal review, usability study) and has not been performed. |

**No case in this document is marked Pass on the strength of a mock verifier alone.** Where the
contract logic passes but the guarantee depends on a real proof, the row says so.

### 0.2 Execution evidence for this session

| Suite executed | Command | Result |
|---|---|---|
| `packages/protocol` (L0 reference rules) | `npx vitest run --root packages/protocol` | **82 passed / 82**, 2 files, 494 ms |
| `services/indexer` (projection) | `npx vitest run --root services/indexer` | **16 passed / 16**, 1 file, 467 ms |
| `packages/sdk` (client, proofs, transports, scopes) | `npx vitest run --root packages/sdk` | **124 passed / 124**, 8 files, 2.35 s |
| `packages/ui` (PrivacyStatus component, 2026-08-25) | `npm test -w @trumocracy/ui` | **14 passed / 14**, 1 file |
| `packages/sdk` (full suite incl. seams, 2026-08-25) | `npm test -w @trumocracy/sdk` | **160 passed / 160** (124 existing + 36 new seam tests) |
| `packages/sdk` `test/membership.test.js` (UT-0819..0830, 2026-08-29) | `npm test` (full suite, cycle-3 review run) | **22 passed / 22** — file-level result observed; TC status recorded Pass (inh.) against the Doc 06 v2.3.2 pin |
| `packages/sdk` `test/party-creation.test.js` (UT-0780..0818 + UT-0831, 2026-08-29) | `npm test` (full suite) | **38 passed / 38** — includes the UT-0831 interface-only seam guard |
| `apps/web` `test/join-membership.test.tsx` (UT-0858..0870, 2026-08-29) | `npm test` (full suite) | **27 passed / 27** |
| `apps/web` `test/sdk-types-sync.test.ts` (UT-0871, 2026-08-29) | `npm test` (full suite) | **1 passed / 1** — .d.ts shim drift guard. _(**v2.11.0, ISS-01: this row is a dated record of the 2026-08-29 run and is NOT rewritten — but it is no longer the current shape of the file.** `UT-0871` is one **parameterised** `it` over a seam list, and the candidate-selection drop added two more seams to that list at Doc 06 **v2.10.0** — `IProposalStore` and **`ICandidateStore`** — so the file is now **3 `it`s**, not 1. See the R-22 row in §9 and `TC-3540`, whose scope is widened to match. This is the pair that made v2.10.0's "640 → 739" arithmetic false: 640 + 97 + **2** = 739.)_ |
| **Whole repository (2026-08-29, Doc 06 cycle-3 review run)** | `npm test` from the repo root | **542 passed / 542, 0 failed** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 · web 71 |
| **Whole repository (2026-09-06, run R-17 — FR-131 honesty drop)** | `npm test` from the repo root | **619 passed / 619, 0 failed**, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95. Per-package durations: contracts 34.29 s, protocol 505 ms, sdk 1.10 s, ui 767 ms, indexer 571 ms, web 2.81 s. Includes the three FR-131 guard blocks UT-0887 (web), UT-0759 (ui) and UT-0888 (protocol). Observed at **file** granularity, so the cases it covers are recorded **Pass (inh.)** against the Doc 06 v2.5.1 pin rather than promoted to Pass (obs.) — see the §2 corroboration note |
| **Whole repository (2026-09-06, run R-18 — FR-131 clause (e) drop)** | `npm test` from the repo root, then `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web` | **624 passed / 624, 0 failed**, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 100. Case-by-case second half: **5 passed, 20 skipped (25)**. **Qualified, as §9 states:** run against an **uncommitted working tree** (reviewer-qa has not signed the merge), so a post-merge re-run is owed |
| **Whole repository (2026-09-07, run R-19 — cycle-2 rework)** | same two commands | **625 passed / 625, 0 failed**, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web **101**. Case-by-case second half: **6 passed, 20 skipped (26)** — the sixth `it` is the DES-085 jargon scan added at Doc 06 v2.7.0, mapped here to **TC-3576**. **Same qualification: still an uncommitted tree** (76 dirty paths); the post-merge re-run stays owed _(v2.8.0, ISS-05: §0.2 carried every earlier full-suite run but neither R-18 nor R-19; both are added here rather than left to §9 alone, because §0.2 is the section a reader opens first for execution evidence)_ |
| **Whole repository (2026-09-20, run R-20 — UT-0890 debt closure; CLEAN TREE)** | same two commands, the second scoped to `-t "UT-0890"` | **640 passed / 640, 0 failed**, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web **116**. Case-by-case second half: **15 passed, 26 skipped (41)** — the fifteen `it`s of the UT-0890 block, mapped here to **TC-3577..TC-3591**. **The qualification R-18 and R-19 both carried is GONE:** `git status --porcelain` at the run returned **three** paths, all session-governance records under `artifacts/`, and **no modified product, test, configuration or document path**; `HEAD` = `18244e8` |
| **Whole repository (2026-09-21, run R-21 — candidate-selection `TC` mint)** | `npm test` from the repo root, then **four** case-by-case runs, all `--reporter=verbose`: `test/candidates.test.js` in `packages/protocol` and in `packages/sdk`; `test/PrivacyStatus.test.tsx -t "UT-0903"` in `packages/ui`; `test/candidates.test.tsx` in `apps/web` | **739 passed / 739, 0 failed**, exit 0 — contracts 95 · protocol **178** · sdk **287** · ui **25** · indexer 16 · web **138**. Per-package duration: contracts 70.73 s · protocol 580 ms · sdk 1.69 s · ui 999 ms · indexer 425 ms · web 3.26 s. Case by case: protocol **27/27**, sdk **43/43**, ui **7 passed / 18 skipped (25)**, web **20/20** — **97 `it`s reported green individually**, which is what earns TC-3592..TC-3619 their **Pass (obs.)**. **Tree state stated, not claimed:** `git status --porcelain` returned **nine** paths — seven untracked `artifacts/` session records, `artifacts/memory-index.json`, and `docs/03-architecture-design-sdd.md` (the architect's in-flight v2.16.0). **No product, test or configuration path modified or untracked**; `HEAD` = `12fe4a6`. The R-20 standard holds and **no re-run is owed** |
| `packages/contracts` (L1/L2/L3) | *not executed — ~5 min runtime* | Inherited from Doc 06 §3/§5 |
| `apps/web` (component) | *not executed* | Suite exists: `UT-0700…UT-0742` |

**Observed total (2026-08-09): 222** (protocol 82 + indexer 16 + sdk 124). **Additionally observed (2026-08-25): 50 new** (packages/ui 14 + packages/sdk seams 36). **Running unique total: 272 observed passing.** Inherited from Doc 06: 66 contract tests
(`UT-0100…0125`, `UT-0200…0230`, `UT-0300…0361`, `UT-0400…0420`) plus the deployment-safety
group (`UT-0600…0612`).

### 0.3 Three inventory / evidence defects found while writing this document

Recorded here and routed to the owning role; none is fabricated coverage and none is closed by me. _(v2.5.0: TD-07-03 added — it is the tester’s own debt, not the engineer’s.)_

| # | Finding | Severity | Owner |
|---|---|---|---|
| TD-07-01 | **Doc 06 §3's `UT-####` inventory omits two real test groups.** `packages/contracts/test/deployment-safety.test.mjs` uses `UT-0600…UT-0612` (13 tests) and `apps/web/test/safety-surfaces.test.tsx` uses `UT-0700…UT-0742` (16 tests). Neither range appears in the Doc 06 §3 table, and the table's stated counts (e.g. "UT-0100..0125 … 25") therefore under-report the drop. | Medium — the RTM cites tests the inventory does not list | Engineer (Doc 06) |
| TD-07-02 | **Doc 06 §3 declares "UT-0001..0028 … 41" and "UT-0030..0055 … 41"**, i.e. 82 tests over two ranges of 28 and 26 identifiers. The identifiers are `describe`/`it` group anchors, not one-per-test. The count is right (82 observed); the range labelling implies a 1:1 mapping that does not hold. | Low — cosmetic, but it makes ID-level traceability ambiguous | Engineer (Doc 06) |
| TD-07-03 | **15 rows still read *Not run* for a suite the tester has now run green.** Run R-17 (2026-09-06) executed `apps/web` **95/95**, covering every `UT-0700…UT-0742` row (TC-1209, TC-1959, TC-2253, TC-2254, TC-2612, TC-2613 and the rest of the group). Only TC-2614 is re-statused in this version, because only TC-2614 was independently re-derived against its assertions while correcting its expected result. The remaining 15 are corroborated at **file** granularity and are held at *Not run* rather than promoted on a run that was not case-by-case — the same discipline the v2.3.0 corroboration note applied to TS-PARTY/TS-MEMBERSHIP. | Low — the label understates real evidence; it never overstates it | **Tester** (Ji-woo Park, Doc 07) — clear by a case-by-case pass over `UT-0700…UT-0742` at the next version |

---

## 1. Test case template (the reusable atom)

Every row in §3–§5 expands to this atom. Preconditions and fixtures are stated **per suite** in
§3 where they are shared, and **per case** where they differ.

```
TC-####  <title>
Suite:        TS-<…>            Type: functional | edge | differential | perf | sec | a11y | resilience
Priority:     P1 | P2 | P3
Verifies:     US-#### · FR-### / NFR-###          Failure mode: SDD §11 row (where applicable)
Preconditions:<state, fixtures, flag state>
Test data:    <inputs / fixture id>
Steps:        1. <…>  2. <…>
Expected:     <observable result, incl. the named custom error where a revert is expected>
Automation:   Automated (path · UT-####) | Designed, not automatable yet (reason) | Manual
Environment:  Local CI (in-process EVM / vitest) | Devnet | Testnet | Staging | Prod-canary | Lab
Status:       Pass (obs.) | Pass (inh.) | Not run | Blocked | No mechanism | Manual — not run
```

**Worked example (the highest-value negative case in the drop):**

```
TC-2603  A nullifier cannot be burned by an unauthorised caller
Suite:        TS-SEC / TS-ADV-01      Type: sec
Priority:     P1
Verifies:     US-0006 · FR-002, NFR-004     Risk: RISK-01     Origin: Doc 04 OPEN-05 (Sev-1)
Preconditions:PersonhoodRegistry deployed by the harness; spenderAuthoriser set by the timelock;
              one enrolled identity with a known scope nullifier.
Test data:    scope = ENDORSE_SCOPE(petitionId), nullifier = poseidon2([secret, scope])
Steps:        1. From an EOA that is not a registry-deployed module, call
                 spendNullifier(scope, nullifier).
              2. From the legitimate party module, perform the citizen's endorsement.
Expected:     Step 1 reverts with the caller-restriction error; step 2 succeeds — the citizen is
              not disenfranchised. No de-authorisation path exists for an already-authorised module.
Automation:   Automated — packages/contracts/test/adversarial.test.mjs · UT-0325, UT-0326
Environment:  Local CI (in-process EVM harness)
Status:       Pass (inh.)  — regression test for Doc 06 §5 defect #1 (Critical)
```

---

## 2. Suite organization

TC ranges are the ones **reserved in Doc 04 §14**; the tester assigns the actual IDs below.

| Suite ID | Group | Level | Covers | Assigned range | Cases | Automated | Blocked / no mechanism |
|---|---|---|---|---|---|---|---|
| `TS-FUNC` | Functional / E2E (positive) | L0–L6 | Must FR happy paths | TC-0001–TC-0040 | 40 | 24 | 16 |
| `TS-EDGE` | Negative / edge / boundary | L0–L2 | SDD §11 failure modes; every custom error by name | TC-1001–TC-1048 | 48 | 41 | 7 |
| `TS-DIFF` | **Differential** | L3 | `@trumocracy/protocol` vs chain vs SDK vs indexer | TC-1200–TC-1209 | 10 | 10 | 0 |
| `TS-ZK` | Circuits | L4 | `residency_member`, `tenure_member` | TC-1400–TC-1406 | 7 | 1 | 6 |
| `TS-ABSENCE` | **Capability-absence** | L1/L2 + artifact scan | CON-003, CON-006, FR-021/035/047/051/056, FR-131 closing sentence, NFR-017 | TC-1600–TC-1614, TC-3569 | 16 | 13 | 3 |
| `TS-ABI` | Contract / API | L1/L5 | ABI allowlist, schema snapshot, SDK drift, size limit | TC-1800–TC-1803 | 4 | 2 | 2 |
| `TS-SEC` | Security / authZ / negative authority | L1–L6 | NFR-009, FR-056, verifier & deployment safety | TC-1850–TC-1863 | 14 | 12 | 2 |
| `TS-PRIV` | Privacy & anonymity | L1–L6 | NFR-001/002/010/024, FR-003 | TC-1950–TC-1963 | 14 | 11 | 3 |
| `TS-DATA` | Data inventory (build-failing) | CI | NFR-010, CON-002, FR-003 | TC-2050–TC-2053 | 4 | 1 | 3 |
| `TS-PERF` | Performance on the reference device | L6 | NFR-006, NFR-012 | TC-2080–TC-2084 | 5 | 0 | 5 |
| `TS-LOAD` | Load / stress / scalability | staging | NFR-007, NFR-008 | TC-2150–TC-2153 | 4 | 0 | 4 |
| `TS-COST` | Cost per action | testnet + prod | NFR-005 | TC-2200–TC-2203 | 4 | 1 | 3 |
| `TS-A11Y` | Accessibility | L5–L7 | NFR-011 | TC-2250–TC-2255 | 6 | 2 | 4 |
| `TS-I18N` | Localisation & plain language | L5/L6 | NFR-013, NFR-023 | TC-2330–TC-2333 | 4 | 0 | 4 |
| `TS-COMPAT` | Compatibility matrix | L6 | NFR-026 | TC-2380–TC-2382 | 3 | 0 | 3 |
| `TS-RES` | Resilience / chaos / DR | staging | NFR-007, NFR-020, RISK-09 | TC-2420–TC-2426 | 7 | 1 | 6 |
| `TS-EXIT` | Export / reconstitute | CI + devnet | NFR-018, FR-055 | TC-2480–TC-2482 | 3 | 0 | 3 |
| `TS-UPG` | Upgrade / migration | testnet | NFR-017, FR-007 | TC-2520–TC-2523 | 4 | 1 | 3 |
| `TS-SMOKE` | Post-deploy smoke | all envs | walking skeleton < 5 min | TC-2560–TC-2561 | 2 | 0 | 2 |
| `TS-ADV-01…16` | **Adversarial, one per RISK** | mixed | RISK-01…RISK-16 | TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576, **TC-3577–TC-3591** | 69 | 49 | 20 |
| `TS-EXPL` | Exploratory charters | L7 | one per EP-01…EP-10 | TC-3200–TC-3209 | 10 | 0 | 10 |
| `TS-UAT` | User acceptance & usability | L7 | NFR-022, Doc 01 §B journey | TC-3250–TC-3253 | 4 | 0 | 4 |
| `TS-CR1` | CR-v1.1.0 — FR-062..073; RISK-22..24 | L3–L6 | FR-062..073 · BR-013 · RISK-22..24 | TC-3300–TC-3345 | 46 | 0 | 46 |
| `TS-GOV2` | Governance v2.0 — FR-074..FR-120 · NFR-027/028 · SC-15..21 security closure · Guarded Layer P1..P5 · FR-117 capability-absence · vacancy-immediate fallbacks · anti-circularity direct attack | L1–L6 | FR-074..FR-120 · NFR-027 · NFR-028 · SC-15..SC-21 · DES-087..DES-092 | TC-3400–TC-3469 | 70 | 2 | 68 |
| `TS-SCAFFOLD` | Scaffold seam & design-system seed | L1–L5 | FR-082..086 · FR-122..124 · FR-131..132 · DES-093..096 · DES-100 · ADR-023..025 | TC-3470–TC-3488, TC-3568 | 20 | 17 | 3 |
| `TS-PARTY` | Party creation protocol, service & web | L1–L5 | FR-010 · FR-011 · FR-012 · FR-013 · FR-018 · FR-020 · FR-077 · FR-130 · BR-020 · DES-073 · DES-074 · DES-097 · DES-101 | TC-3489–TC-3516, TC-3541 | 29 | 28 | 1 |
| `TS-MEMBERSHIP` | Join / leave / membership history & counting | L1–L5 | FR-020 · FR-022 · FR-064 · FR-122 · FR-123 · FR-130 · FR-131(b)(d) · FR-013 expiry seam · NFR-023 · DES-013 · DES-065 · DES-095 · DES-097 · ADR-007 · ADR-024/025 | TC-3517–TC-3540 | 24 | 24 | 0 |
| `TS-PROPOSALS` | Proposals & debate: tiers, authorship, lifecycle, trail | L0–L5 | FR-024 · FR-079 · FR-080 · FR-090 · FR-091 · FR-092 · FR-122 · FR-123 · NFR-003 · NFR-023 · DES-103 · DES-104 · DES-105 · DES-106 · DES-095 · DES-085 | TC-3542–TC-3563 | 22 | 22 | 0 |
| `TS-CANDIDATE` | Candidate selection: nomination, consent, endorsements, debates, post-debate vote, feedback, schedule | L0–L5 | FR-023 · FR-036 · FR-037 · FR-038 · FR-039 · FR-065 · FR-066 · FR-067 · FR-081 · FR-085 · FR-093 · FR-107 · FR-122 · FR-123 · FR-124 · FR-131 · NFR-020 · NFR-023 · DES-027 · DES-028 · DES-066 · DES-067 · DES-076 · DES-085 · DES-094 · DES-095 · DES-096 · DES-107 · DES-108 | TC-3592–TC-3619 | 28 | 28 | 0 |
| | | | **Total** | | **521** | **290** | **231** |

**290 of 521 cases have an implementing automated test.** (43 new TC-3300..TC-3342 are all Blocked; of the 70 TC-3400..TC-3469 TS-GOV2 cases **68 are Blocked or No mechanism and 2 are now automated** — `TC-3407` and `TC-3411`, re-statused at v2.10.0 because DES-107 and DES-028 rule 6 plus the shipped candidate-selection code gave them a mechanism to test; see §5.1; 17 of 20 TC-3470..TC-3488 plus TC-3568 have passing automated tests — see §9 R-04/R-05, TC-3488 v2.2.1 and TC-3568 v2.5.0; 3 are Blocked; all 28 new TC-3489..TC-3516 TS-PARTY cases are inherited Pass from Doc 06 v2.2.0; all 24 new TC-3517..TC-3540 TS-MEMBERSHIP cases are inherited Pass from Doc 06 v2.3.2; the 6 new TC-3564..TC-3569 FR-131 honesty cases are inherited Pass from Doc 06 v2.5.1 and were observed green at file granularity in R-17; of the 7 TC-3570..TC-3576 FR-131 clause-(e) cases, **6 are Pass (obs.)** — the whole suite ran green in R-18 **and** the UT-0889 block was re-run case by case, `it` by `it` — while **TC-3575 has no implementing automated test at all** and is Blocked, because the Doc 04 §0.5 S5 population scan its acceptance criterion (Doc 02 §8 FR-131 Scenario 9) requires is not built; **all 15 TC-3577..TC-3591 `/verify` flag-gate cases are Pass (obs.)**, observed `it` by `it` in R-20; and **all 28 new TC-3592..TC-3619 `TS-CANDIDATE` cases are Pass (obs.)**, observed `it` by `it` in **R-21** across four files — **this drop adds no Blocked case and no case without an implementing test**, and the one Blocked movement at this version is `TC-3419`, which arrives from No mechanism and not from this suite.) Of those 290, **139 were executed and
observed passing by the tester in the 2026-08-09 / 2026-08-25 / 2026-09-06 sessions** under the Pass (obs.) convention; **136** are inherited-green cases (55 contract suite
+ 28 TS-PARTY + 24 TS-MEMBERSHIP + 22 TS-PROPOSALS + 7 from the FR-131 honesty drop); **15** are `apps/web` component
cases that exist but were not executed case-by-case (TD-07-03). Identity: 109 + 136 + 15 = **260**. _(v2.7.0: 88 → 93 and 239 → 244 for TC-3570..TC-3574; the inherited and not-executed buckets do not move, and TC-3575 enters none of them — it is Blocked.)_ _(v2.9.0: 94 → 109 and 245 → 260 for the fifteen UT-0890 cases TC-3577..TC-3591. **All fifteen enter the observed bucket, none the inherited or not-executed buckets** — run **R-20** was a full-suite 640/640 **and** a case-by-case verbose re-run of the UT-0890 block in which each of the fifteen `it` names was reported green individually, which is the same bar TC-3570..TC-3574 met on R-18 and TC-3576 on R-19. The inherited (**136**) and not-executed (**15**) buckets do not move. **Nothing is promoted on file granularity at this version**, and TC-3564..TC-3569 are still **not** promoted — no case-by-case run of UT-0887, UT-0759 or UT-0888 was performed here either.)_

_(v2.5.0 correction, pre-existing and load-bearing enough to name: this paragraph opened "Of those 211 … **107** are inherited-green cases … **16**" — 211 + 107 are v2.4.0-era figures left standing under a "233 of 465" headline in the same sentence, and 88 + 107 + 16 = 211 ≠ 233. The bucket totals in §10 were right throughout; only this paragraph was stale. It is now stated as an identity so it cannot drift again.)_

**Corroboration note (v2.3.0, and it cuts against the accounting above).** The tester executed `npm test` from the repo root on 2026-08-29 while running the Doc 06 v2.3.2 cycle-3 document review, and observed **542/542 green** including every file behind TS-PARTY and TS-MEMBERSHIP. Those 24 TS-MEMBERSHIP cases are therefore stronger than a bare inheritance — the tester saw the files pass. They are nevertheless recorded **Pass (inh.)** against the Doc 06 v2.3.2 pin, because the observation was made at file granularity during a review run rather than case-by-case against each TC, and because it keeps the TS-PARTY precedent and the Doc 08 dashboard buckets consistent. The stronger evidence is recorded in §0.2 and §9 (R-12) rather than used to upgrade the status. **v2.5.0 extension — the same discipline, applied to the tester’s own run.** On 2026-09-06 the tester executed `npm test` from the repo root and observed **619/619 green** (run R-17), which covers every file behind the six new FR-131 honesty cases (TC-3564..TC-3569) and the whole `apps/web` suite. Those six cases are nevertheless recorded **Pass (inh.)** against the Doc 06 v2.5.1 pin, and the Pass (obs.) count is held at **88**, for the identical reason: the observation was at **file** granularity, not case-by-case against each `TC`. Promoting a tester-executed run to Pass (obs.) on that basis would make the strongest status in this document mean two different things depending on which drop minted the row. **v2.7.0 extension — the same discipline, and this time it lets a case through.** On 2026-09-06 the tester executed `npm test` from the repo root and observed **624/624 green** (run **R-18**) — file granularity again, and on its own that would have made TC-3570..TC-3574 Pass (inh.) exactly as R-17 did for TC-3564..TC-3569. The tester then ran the UT-0889 block **case by case** (`npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web`; 5 passed, 20 skipped, each `it` name reported green individually) and mapped each `it` to exactly one `TC`. **That is case-by-case observation, so those five are recorded Pass (obs.) and the figure moves 88 → 93.** The rule has not changed and the bar has not moved: what changed is that the tester did the second run. **TC-3564..TC-3569 are deliberately not promoted on R-18** — no case-by-case run of UT-0887, UT-0759 or UT-0888 was performed at this version, and promoting them on a file-granularity result is the very thing the paragraph above refuses.

**TC-count conventions (ISS-07 resolution; updated v2.2.2).** This suite table uses the **expanded row count** (465 total): the TS-EXPL suite rows TC-3200..TC-3209 are listed as 10 individual cases here. Doc 08 §6 uses the **anchor count** (463 anchors = 299 pre-TS-GOV2 + 70 TS-GOV2 + 19 TS-SCAFFOLD + 29 TS-PARTY incl. TC-3541 + 24 TS-MEMBERSHIP + 22 TS-PROPOSALS), treating TC-3200..TC-3209 as one collapsed anchor, then applies the expanded convention (463 − 1 + 10 = **472 designed test cases**). A 7-row counting difference between the two documents is expected and pre-existing (Doc 07 = 465 row-anchors; Doc 08 = 472 expanded TCs because the TS-EXPL collapsed range TC-3200–TC-3209 is expanded to 10 individual cells); the 472 expanded total is used in the Doc 08 §6 coverage dashboard.

---

## 3. Functional suites

### 3.1 `TS-FUNC` — Functional / E2E positive paths (TC-0001–TC-0040)

**Shared preconditions.** In-process EVM harness (`tools/evm-harness`, solc 0.8.28 / cancun),
deterministic genesis timestamp, fixed accounts, full protocol deployed by
`packages/contracts/test/fixture.mjs`; `petitions` and `party_governance` flags on;
`MockVerifierAlwaysTrue` wired (environment = devnet, where mocks are permitted by `UT-0602`).
Test data comes from the fixture's synthetic identities — **no real personal data in any
environment** (Doc 04 §11, CON-002).

| TC | Title | Verifies (US · FR/NFR) | Level | Expected result | Implementing test | Status |
|---|---|---|---|---|---|---|
| TC-0001 | First enrolment issues exactly one active credential | US-0001 · FR-001 | contract-integration | Credential issued; no key material shown to the citizen | `packages/contracts/test/lifecycle.test.mjs` · UT-0104 | Pass (inh.) — proof is a mock |
| TC-0002 | Enrolment through a deactivated issuer is refused | US-0004 · FR-004, FR-005 | contract-integration | Reverts with the deactivated-issuer error | lifecycle · UT-0106 | Pass (inh.) |
| TC-0003 | A region with ≥2 issuers including ≥1 non-state accepts enrolment | US-0004 · FR-004 | contract-integration | ADR-003 invariant satisfied; enrolment proceeds | lifecycle · UT-0102 | Pass (inh.) |
| TC-0004 | A residency scope is a region identifier no finer than a ward | US-0008 · FR-006, NFR-010 | unit | Region path accepted at ward granularity; finer path refused | `packages/protocol/test/party-and-regions.test.js` · UT-0044, UT-0045 | **Pass (obs.)** |
| TC-0005 | A boundary redraw creates a new registry version, not a rewrite | US-0010 · FR-007 | unit | `schemeVersion` advances; prior version retained | protocol · UT-0047 | **Pass (obs.)** |
| TC-0006 | Region ids agree between the reference implementation and the chain | US-0010 · FR-007, NFR-021 | differential | `regionIdOf == keccak256(regionPreimage(path, v))` | `packages/contracts/test/differential.test.mjs` · UT-0415 | Pass (inh.) |
| TC-0007 | A denominator is accepted only as the median of ≥5 sources after the dispute window | US-0019, US-0020 · FR-009 | contract-integration | Accepted; source identities recorded | lifecycle · UT-0101; adversarial · UT-0333 | Pass (inh.) |
| TC-0008 | The threshold equals the published percentage of the denominator and is reproducible | US-0019 · FR-016 | unit + differential | Identical value from protocol reference and chain | protocol · UT-0023; differential · UT-0410 | **Pass (obs.)** / Pass (inh.) |
| TC-0009 | A draft meeting the standard in all eight pillars publishes with no approval step | US-0014 · FR-011 | unit + component | Published; no human step anywhere in the path | protocol · UT-0033, UT-0034; `apps/web` · UT-0730 | **Pass (obs.)** / Not run |
| TC-0010 | A party draft is created pseudonymously with exactly one declared jurisdiction | US-0011 · FR-010 | contract-integration | Draft created; drafter shown pseudonymously | `PartyRegistry.openPetition` — no dedicated UT | **No mechanism** (partial): the contract has no emblem field and no name/emblem collision check — see TC-1041 |
| TC-0011 | A resident endorses once and the count increments by exactly one | US-0016 · FR-014 | contract-integration | Count +1; endorser identity not published | lifecycle · UT-0112 | Pass (inh.) — residency binding is a mock |
| TC-0012 | An endorser may withdraw before activation and the count decrements | US-0017 · FR-015 | contract-integration + indexer | Count −1; no identity revealed | lifecycle · UT-0114; indexer · UT-0503; sdk · UT-2598 | Pass (inh.) / **Pass (obs.)** |
| TC-0013 | A petition at or above threshold activates automatically with no approval step | US-0022 · FR-018 | contract-integration | Party activates; activation record holds charter version, count, denominator, sources | lifecycle · UT-0115 | Pass (inh.) — **partial: no dwell period exists**, see TC-1042 |
| TC-0014 | Activation is permissionless — any citizen, indexer or observer may call it | US-0022 · FR-018 | contract-integration | Call from an arbitrary EOA succeeds | lifecycle · UT-0115 | Pass (inh.) |
| TC-0015 | A verified citizen joins an active party immediately, with no approval | US-0024 · FR-020 | contract-integration | Membership effective; no sponsor/interview/fee path exists | lifecycle · UT-0120; protocol · UT-0039 | Pass (inh.) / **Pass (obs.)** |
| TC-0016 | A member leaves immediately and all rights in that party cease | US-0025 · FR-022 | contract-integration | `leftAt` set same block; nobody can block it | lifecycle · UT-0124 | Pass (inh.) |
| TC-0017 | Membership is public in aggregate and never individually | US-0026 · FR-020, NFR-001, NFR-024 | indexer | Totals and regional breakdown project; no roster exists | `services/indexer/test/projection.test.js` · UT-0520 | **Pass (obs.)** |
| TC-0018 | A matured member submits a proposal with a declared tier, unscreened | US-0031 · FR-024 | contract-integration | Accepted; no moderation hook exists | `packages/contracts/test/governance.test.mjs` · UT-0200 | Pass (inh.) |
| TC-0019 | A charter-tier proposal closing at 45% quorum / 70% approval passes into its timelock | US-0033 · FR-025 | contract-integration | Passes; timelock begins | governance · UT-0203, UT-0210 | Pass (inh.) |
| TC-0020 | A passed proposal executes only after the timelock, by any caller | US-0035 · FR-026 | contract-integration | Executes post-timelock from a non-privileged EOA | governance · UT-0203 | Pass (inh.) |
| TC-0021 | An entrenched clause takes the highest tier and the longest timelock | US-0036 · FR-027 | unit + contract | Highest tier applied; age-qualified quorum enforced | protocol · UT-0041, UT-0003; governance · UT-0230 | **Pass (obs.)** / Pass (inh.) |
| TC-0022 | The eligible-voter set is fixed at proposal open and is reproducible | US-0037 · FR-028 | unit + contract | Snapshot root + tenure fixed at T; publicly reproducible | protocol · UT-0014; governance · UT-0200 | **Pass (obs.)** / Pass (inh.) |
| TC-0023 | Every member's vote counts exactly once with identical weight | US-0027 · FR-021 | unit + contract + indexer | 20-year founder == 181-day member; tally increments by 1 only | protocol · UT-0017; adversarial · UT-0302; indexer · UT-0521 | **Pass (obs.)** / Pass (inh.) |
| TC-0024 | A closed ballot's result is re-computable from public events alone | US-0044 · FR-033 | indexer | Deterministic re-projection reproduces the published result | indexer · UT-0500, UT-0515 | **Pass (obs.)** — **partial**: Phase-1 tallies expose individual votes (Doc 06 §7.5), so "learns no individual vote" fails |
| TC-0025 | Petition progress renders from the protocol's own arithmetic | US-0018 · FR-017 | component + indexer | Count/threshold/percentage/time remaining agree with the reference | `apps/web` · UT-0720, UT-0722, UT-0723; indexer · UT-0502 | Not run / **Pass (obs.)** |
| TC-0026 | Manifesto versions supersede and never overwrite | US-0055 · FR-047 | contract + indexer | Version N+1 appended; N retrievable unchanged | `Party.publishManifesto`; indexer · UT-0523 | **Pass (obs.)** — **partial**: no test proves prior **charter** versions stay retrievable, and no diff view exists |
| TC-0027 | Every governance action emits a public record sufficient to reconstruct the outcome | US-0061 · FR-054 | indexer | Event stream replays to identical state | indexer · UT-0500, UT-0510 | **Pass (obs.)** — **partial**: nomination, election, recall, treasury and filtering actions do not exist yet |
| TC-0028 | A matured member self-nominates for an office in their own region | US-0046 · FR-036 | E2E | Candidacy accepted pending endorsements | — | **Blocked — no environment.** _(v2.10.0: the **reason changed and the status did not**. This row read "Elections not implemented", which stopped being true at Doc 06 v2.11.1 — the Definition-A backing of DES-027 is built and tested, and `TC-3597`, `TC-3600`, `TC-3602` and `TC-3615` carry the guarantee at protocol, service and surface level. What this case adds beyond them is **end-to-end**, and there is no devnet, testnet or staging to run it on; the `elections` flag is also off above dev. It is Blocked on the environment, not on the product, and **FR-036's closure rests on the new cases**, not on this one — the TC-3542 / FR-079 precedent.)_ |
| TC-0029 | Candidate consent is separately recorded before any candidacy is published | US-0049 · FR-037, FR-038 | E2E | Nothing published until consent is recorded | — | **Blocked — no environment.** _(v2.10.0: same correction, same stated ground. The consent record is built and tested — `TC-3599`, `TC-3603`, `TC-3604` and `TC-3614` — so "Phase 3, Elections not implemented" is no longer the reason. This case is the **end-to-end** form of the guarantee and has no environment to run in. FR-037's and FR-038's closures rest on the new cases.)_ |
| TC-0030 | An election assigns the office automatically in code on close | US-0053 · FR-040, FR-041 | E2E | Role assigned; no ratification step exists | — | **Blocked — Phase 3** |
| TC-0031 | A recall initiation opens without anyone's approval | US-0057 · FR-042 | E2E | Initiation opens; no veto path | — | **Blocked — Phase 3** (`recall` flag off above dev) |
| TC-0032 | A successful recall revokes the office and opens a by-election | US-0060 · FR-045 | E2E | Role revoked in code; by-election scheduled | — | **Blocked — Phase 3** |
| TC-0033 | A ballot is cast anonymously and counted exactly once | US-0038 · FR-030 | E2E | Encrypted ballot accepted; tally proves one-eligible-one-ballot | — | **Blocked — Phase 3** (MACI; `maci_voting` off in staging/prod) |
| TC-0034 | Recovery restores control after the published timelock, with notification and cancellation | US-0068 · FR-058, NFR-016 | E2E | Control restored; notification sent; cancel window honoured | — | **Blocked** — social-recovery/4337 path not implemented in this drop |
| TC-0035 | A full primary journey completes with no token, no wallet and no fee | US-0066 · FR-060, NFR-005 | E2E | Every flow completes; USD 0.00 charged | — | **Blocked** — no deployed environment; relayer/paymaster not built |
| TC-0036 | Sponsorship exhaustion queues the action with an explanation and an expected time | US-0067 · FR-061 | E2E | Queued, never rejected, never charged | — | **Blocked** — paymaster/relayer service not built |
| TC-0037 | A person holds exactly one active residency scope, with a 180-day change cooldown | US-0009 · FR-008 | contract-integration | Second change inside 180 days refused with the permitted date | — | **No mechanism** — no residency-change function or cooldown exists |
| TC-0038 | Endorsement is accepted only from a person resident inside the declared jurisdiction | US-0016 · FR-014 | contract-integration | Out-of-jurisdiction endorsement refused | region binding in public signals | **Blocked** — enforcement rests entirely on the mocked residency proof |
| TC-0039 | Display filtering is recorded in a public register with jurisdiction and legal basis | US-0065 · FR-056, FR-057 | E2E | Register entry created; underlying record unaltered | — | **No mechanism** — no filtering register exists |
| TC-0040 | A party's public-history export reconstitutes on an independent deployment | US-0063 · FR-055, NFR-018 | E2E | Identical roots, tallies and history | — | **Blocked** — `apps/verifier` and the export path do not exist |

### 3.2 `TS-EDGE` — Negative, edge and boundary cases (TC-1001–TC-1048)

Seeded from **SDD §11** (failure-mode analysis) and Doc 04 §5.2 (every custom error provoked **by
name**). Shared preconditions as §3.1. **Every case asserts the specific custom error**, never
merely "it reverted" (Doc 06 §2.2).

| TC | Title / provoked condition | Verifies | SDD §11 row | Expected | Implementing test | Status |
|---|---|---|---|---|---|---|
| TC-1001 | Duplicate enrolment nullifier from the same human | FR-001 · US-0001 | FR-001/DES-001 | Reject — nullifier already spent | lifecycle · UT-0105 | Pass (inh.) |
| TC-1002 | **Cross-issuer double enrolment** in one identifier namespace | FR-001 · US-0001 | FR-001/DES-001 | Reject — namespace collision (Doc 06 §5 defect #2 regression) | lifecycle · UT-0109 | Pass (inh.) |
| TC-1003 | Enrolment whose namespace does not match its issuer | FR-001 · US-0001 | — | Reject | lifecycle · UT-0109b | Pass (inh.) |
| TC-1004 | Region falls to a single state issuer, enrolment attempted | FR-004 · US-0004 | FR-004/DES-002 | **Fail closed** on `issuerSetValid()` (Doc 06 §5 defect #3 regression) | lifecycle · UT-0109c, UT-0103; protocol · UT-0052 | Pass (inh.) / **Pass (obs.)** |
| TC-1005 | Compromised issuer mass-issues within one epoch | FR-005 · US-0005 | FR-005/DES-003 | Per-epoch cap throttles it | lifecycle · UT-0107; adversarial · UT-0321 | Pass (inh.) |
| TC-1006 | Issuer is deactivated after issuing credentials | FR-005 · US-0005 | FR-005/DES-003 | Existing credentials survive — users are not punished for their issuer | adversarial · UT-0322 | Pass (inh.) |
| TC-1007 | **Endorsement replayed from another address** | FR-014 · US-0016 | FR-014/DES-011 | Reject — nullifier already spent, address is irrelevant | lifecycle · UT-0112 | Pass (inh.) |
| TC-1008 | Endorsement proof scoped to a different petition | FR-014 · US-0016 | FR-014/DES-011 | Reject — wrong scope | lifecycle · UT-0113 | Pass (inh.) |
| TC-1009 | Activation attempted below the threshold | FR-016, FR-018 · US-0022 | FR-016/DES-009 | `ThresholdNotMet(have, need)` — no override exists | lifecycle · UT-0111 | Pass (inh.) |
| TC-1010 | Denominator moves while a petition is open | FR-016 · US-0019 | FR-016/DES-009 | Requirement frozen at open — unaffected | protocol · UT-0023; differential · UT-0410 | **Pass (obs.)** / Pass (inh.) |
| TC-1011 | **Population oracle deflated toward zero** | FR-009, FR-016 · US-0019 | FR-009/DES-010 | Verified-resident and 500-endorsement floors bind — attacker gains nothing | protocol · UT-0024, UT-0025; adversarial · UT-0334 | **Pass (obs.)** / Pass (inh.) |
| TC-1012 | **Denominator drift beyond ±5% per quarter** | FR-009 · US-0019 | FR-009/DES-007 | `DriftTooLarge` | adversarial · UT-0331 | Pass (inh.) |
| TC-1013 | Fewer than five population sources submitted | FR-009 · US-0019 | FR-009/DES-007 | `TooFewSources` | adversarial · UT-0333 | Pass (inh.) |
| TC-1014 | New denominator used while its dispute window is open | FR-009 · US-0020 | FR-009/DES-007 | `DisputeWindowOpen` | adversarial · UT-0332 | Pass (inh.) |
| TC-1015 | **Wrong-jurisdiction join** | FR-020 · US-0024 | FR-020/DES-013 | Reject — citizen's region outside the party's jurisdiction | lifecycle · UT-0123 | Pass (inh.) |
| TC-1016 | Second join from the same person (new device, new address) | FR-002, FR-020 · US-0006 | FR-020/DES-013 | `AlreadyMember` | lifecycle · UT-0122 | Pass (inh.) |
| TC-1017 | Join into a region below the k ≥ 1,000 anonymity floor | NFR-002 · US-0039 | FR-020/DES-013 | `AnonymitySetTooSmall(regionId, have, need)` — refuse to publish | lifecycle · UT-0116 | Pass (inh.) |
| TC-1018 | **A charter weaker than the protocol floor** | FR-012, FR-025 · US-0013 | FR-025/DES-016 | `CharterWeakerThanFloor` | protocol · UT-0002, UT-0037; differential · UT-0401 | **Pass (obs.)** / Pass (inh.) |
| TC-1019 | Constitutional tenure set below the 90-day absolute floor | FR-027 · US-0036 | FR-025/DES-016 | Reject | protocol · UT-0003, UT-0038 | **Pass (obs.)** |
| TC-1020 | A charter configuring gated membership | FR-020 · US-0024 | — | Reject — no party may re-invent the gatekeeper | protocol · UT-0039 | **Pass (obs.)** |
| TC-1021 | A configuration weighting a vote by any attribute | FR-021 · US-0027 | FR-021 | Reject — only 1p1v is expressible | protocol · UT-0040 | **Pass (obs.)** |
| TC-1022 | **A proposal targeting an immutable / entrenched clause** | FR-027 · US-0036 | FR-027/DES-022 | Revert **at proposal time**, not at execution | protocol · UT-0041; governance · UT-0230 | **Pass (obs.)** / Pass (inh.) |
| TC-1023 | Proposer whose tenure is short of the tier minimum | FR-023, FR-024 · US-0029 | — | Reject with the tenure error | governance · UT-0201 | Pass (inh.) |
| TC-1024 | Vote cast during the discussion period | FR-026, FR-039 · US-0034 | — | Reject — discussion always precedes voting | governance · UT-0202; protocol · UT-0021 | Pass (inh.) / **Pass (obs.)** |
| TC-1025 | Double vote from the same person in one ballot | FR-002, FR-021 · US-0006 | — | Reject — scope nullifier already spent | governance · UT-0204 | Pass (inh.) |
| TC-1026 | **Quorum near-miss**: 39% quorum, 90% approval | FR-025 · US-0033 | — | Fails; the failing condition is published | protocol · UT-0011; governance · UT-0210 | **Pass (obs.)** / Pass (inh.) |
| TC-1027 | Supermajority near-miss: 45% quorum, 60% approval | FR-025 · US-0033 | — | Fails; the failing condition is published | governance · UT-0210 | Pass (inh.) |
| TC-1028 | **Exact tie** on approval | FR-025 · US-0033 | — | Fails — a strict majority is required | protocol · UT-0013 | **Pass (obs.)** |
| TC-1029 | Abstentions at the quorum boundary | FR-025 · US-0033 | — | Count toward quorum, not toward approval | protocol · UT-0012; governance · UT-0211 | **Pass (obs.)** / Pass (inh.) |
| TC-1030 | **Member joins after the snapshot instant** | FR-028 · US-0037 | FR-028/DES-019 | Excluded from that proposal; quorum measured on the snapshot | protocol · UT-0018, UT-0014 | **Pass (obs.)** |
| TC-1031 | Tenure one second short of the tier minimum | FR-023 · US-0029 | — | Excluded — boundary is exact | protocol · UT-0019 | **Pass (obs.)** |
| TC-1032 | **Execution attempted before the timelock elapses** | FR-026 · US-0035 | FR-026/DES-021 | Refused; the change stays publicly pending | governance · UT-0203 | Pass (inh.) |
| TC-1033 | The execution call itself reverts after the timelock | FR-026 · US-0035 | FR-026/DES-021 | Proposal stays executable; retryable, permissionless | — | **Blocked** — designed, no implementing test exists |
| TC-1034 | Attempt to skip the petition stage | FR-013, FR-018 · US-0022 | — | Reject | protocol · UT-0031 | **Pass (obs.)** |
| TC-1035 | Attempt to resurrect an expired or dissolved party | FR-013 · US-0021 | — | Reject | protocol · UT-0032 | **Pass (obs.)** |
| TC-1036 | Negative or fractional tally inputs | FR-025 · US-0033 | — | Refuse, never silently coerce | protocol · UT-0015 | **Pass (obs.)** |
| TC-1037 | Growth spread just beyond the surge window | BR-012 · US-0036 | — | No surge raised | protocol · UT-0007 | **Pass (obs.)** |
| TC-1038 | Surge decay after 90 days | BR-012 · US-0036 | — | Party is not frozen forever | protocol · UT-0008 | **Pass (obs.)** |
| TC-1039 | Voting window shorter than the coercion re-vote window | FR-032 · US-0042 | FR-032 | Refuse the schedule | protocol · UT-0022 | **Pass (obs.)** |
| TC-1040 | Region path finer than a ward, or carrying coordinates | FR-006, NFR-010 · US-0008 | FR-006/DES-005 | Refuse — the type cannot express an address | protocol · UT-0045, UT-0046 | **Pass (obs.)** |
| TC-1041 | **Name or emblem collides with an existing petition or party in the jurisdiction** | FR-010 · US-0011 | — | Publication refused, colliding entity named | — | **No mechanism** — `PartyRegistry` has no emblem field and no name-collision check |
| TC-1042 | **Petition drops below threshold during the dwell period** | FR-018 · US-0022 | — | Party does not activate; petition stays open | — | **No mechanism** — no dwell period is implemented (OI-08 unset) |
| TC-1043 | Residency change requested inside the 180-day cooldown | FR-008 · US-0009 | — | Refuse with the earliest permitted date | — | **No mechanism** |
| TC-1044 | Third join/leave transition inside the published churn window | FR-023 · US-0030 | — | Refuse with the earliest permitted date | — | **No mechanism** — `Party.join` permits unlimited rejoin |
| TC-1045 | Attempt to edit or delete charter version 3 | FR-047 · US-0055 | — | No capability exists; refused and logged | absence scan (TC-1600) | **Blocked** — no charter-version retrieval test exists |
| TC-1046 | Indexer receives an unknown event type from a newer contract | NFR-007 · US-0061 | — | Tolerated; older reader does not crash | indexer · UT-0517 | **Pass (obs.)** |
| TC-1047 | Duplicate delivery of the same log entry | FR-054 · US-0061 | — | Idempotent — rejected as a duplicate | indexer · UT-0511 | **Pass (obs.)** |
| TC-1048 | Event arrives from an address the indexer does not know | FR-054 · US-0061 | — | Refused | indexer · UT-0524 | **Pass (obs.)** |

---

## 4. Cross-cutting and quality suites

### 4.1 `TS-DIFF` — Differential (TC-1200–TC-1209) · **the load-bearing suite**

Doc 04 §5.4: a divergence between what the client predicts and what the chain does is how a citizen
gets falsely told their vote counted. **Any divergence is automatically Sev-1 and merge-blocking.**

| TC | Title | Verifies | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-1200 | Tier rules: reference vs chain, all 4 tiers | FR-025, NFR-021 | Identical `Rules` tuple | differential · UT-0400 | Pass (inh.) |
| TC-1201 | Charter-floor ratchet agreement | FR-012, FR-025 | Both reject a weaker charter identically | differential · UT-0401 | Pass (inh.) |
| TC-1202 | Tally outcomes across a matrix of vote splits | FR-025 | Identical pass/fail and failing condition | differential · UT-0402 | Pass (inh.) |
| TC-1203 | Petition threshold: reference vs chain | FR-016 | Identical required count | differential · UT-0410 | Pass (inh.) |
| TC-1204 | Region ids: reference vs chain | FR-007 | `regionIdOf == keccak256(regionPreimage(path,v))` | differential · UT-0415 | Pass (inh.) |
| TC-1205 | Growth surge: reference vs chain | BR-012 | Identical surge state and adjusted bar | differential · UT-0420 | Pass (inh.) |
| TC-1206 | SDK outcome prediction vs protocol reference | NFR-021, FR-017 | SDK delegates; never re-implements | sdk · UT-2577, UT-2583 | **Pass (obs.)** |
| TC-1207 | Indexer projection determinism and divergence detection | FR-054 | Same events ⇒ same fingerprint; one changed event ⇒ different fingerprint | indexer · UT-0515, UT-0516 | **Pass (obs.)** |
| TC-1208 | On-chain vs off-chain Merkle root parity | FR-002, NFR-021 | Identical LeanIMT/Poseidon roots | harness fact, Doc 06 §1.2 | Pass (inh.) |
| TC-1209 | Web petition-progress component vs protocol arithmetic | FR-017 | UI performs no arithmetic of its own | `apps/web` · UT-0720 | Not run |

### 4.2 `TS-ZK` — Circuits (TC-1400–TC-1406)

**Doctrine (Doc 04 §7): positive tests prove nothing.** Six mandatory classes per circuit. The
`circom` binary is a Phase-2 CI job (Doc 06 §7.2); **nothing in this drop claims a proof has been
verified.**

| TC | Title | Verifies | Expected | Status |
|---|---|---|---|---|
| TC-1400 | `residency_member`: a valid witness produces an accepting proof | FR-006 | Proof verifies | **Blocked — circuits not compiled (Phase 2)** |
| TC-1401 | `residency_member`: malformed / out-of-range witness is rejected | FR-006, RISK-10 | Witness generation or verification fails | **Blocked — Phase 2** |
| TC-1402 | `tenure_member`: tenure below the tier floor produces no accepting proof | FR-023, FR-027 | Rejected | **Blocked — Phase 2** |
| TC-1403 | `circomspect` reports no finding at or above Warning | RISK-10, NFR-009 | Clean run; build fails otherwise | **Blocked — toolchain not stood up** |
| TC-1404 | Witness generation is differentially tested against `@trumocracy/protocol` | NFR-021 | Identical public signals | **Blocked — Phase 2** |
| TC-1405 | A proof against an unregistered circuit / proving key is refused on-chain | RISK-10 | `VerifierRegistry` rejects it | Pass (inh.) — adversarial · UT-0342, UT-0343 (**contract-level surrogate only**) |
| TC-1406 | Nullifier soundness: one witness cannot yield two distinct valid nullifiers in one scope | FR-002 | Impossible | **Blocked — Phase 2** |

### 4.3 `TS-ABSENCE` — Capability-absence (TC-1600–TC-1614, TC-3569)

Several guarantees here **are the absence of a function**. Doc 04 §6.5 and Doc 06 §4 both state the
limits of this technique: it proves no *named* capability exists at the ABI/bytecode boundary; it
does **not** prove there is no unnamed backdoor. These cases are written to claim only the former.

| TC | Title | Verifies | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-1600 | No pause, admin, upgrade or ownership surface in the core ABI | FR-056, CON-003, NFR-017 | Denylist empty across all core ABIs | adversarial · UT-0310 | Pass (inh.) |
| TC-1601 | No proxy pattern and no `SELFDESTRUCT` in the core | FR-056, CON-003 | No `DELEGATECALL` (0xf4) outside the library link | adversarial · UT-0311 | Pass (inh.) |
| TC-1602 | The only delegatecall target is the immutable Poseidon library | CON-003 | Single, immutable target | adversarial · UT-0311c | Pass (inh.) |
| TC-1603 | **Control test:** the opcode scanner detects `DELEGATECALL` when it is present | NFR-009 | Scanner fails a deliberately-planted contract | adversarial · UT-0311b | Pass (inh.) |
| TC-1604 | No ERC-20/721 transfer selector in the deployed bytecode | FR-035, CON-006 | Selector scan empty | adversarial · UT-0301 | Pass (inh.) |
| TC-1605 | No transferable governance power exists to acquire | FR-035, BR-010 | Structurally impossible | adversarial · UT-0300 | Pass (inh.) |
| TC-1606 | Emergency flag control can only **disable**, never add power | NFR-017, CON-003 | `enable` unavailable to the disabler | adversarial · UT-0312 | Pass (inh.) |
| TC-1607 | **No function maps a nullifier back to a person** | FR-002, NFR-001, RISK-07 | No such selector exists | lifecycle · UT-0108 | Pass (inh.) |
| TC-1608 | No member weight field exists anywhere | FR-021, BR-010 | Struct carries no weight | lifecycle · UT-0121 | Pass (inh.) |
| TC-1609 | No type in the system can express coordinates or an address | FR-006, NFR-010 | Region path only | protocol · UT-0046 | **Pass (obs.)** |
| TC-1610 | Flags gate **starting** a capability, never **completing** one already under way | NFR-020, CON-003 | `propose` gated; `vote`/`finalize`/`execute` not | adversarial · UT-0360, UT-0361 | Pass (inh.) — Doc 06 §5 defect #4 regression |
| TC-1611 | `permanentFlags()` is empty — every flag carries a removal target | NFR-020 | Empty set asserted | protocol · UT-0053, UT-0055 | **Pass (obs.)** |
| TC-1612 | The censorship escape hatch and gas sponsorship cannot be switched off | NFR-014, FR-061 | Permanently on | protocol · UT-0054 | **Pass (obs.)** |
| TC-3569 | The `maci_voting` flag description carries no affirmative FR-131 banned claim | FR-131 closing sentence · US-0134 · DES-098 | `FLAGS.MACI_VOTING.description` matches neither `/votes are anonymous/i` nor `/\bis anonymous\b/i`; it does contain "NOT anonymous", "CAN see vote direction", and a citation of `FR-131` as the normative wording, so the flag ledger cannot drift back to the retired framing | protocol · UT-0888 (`packages/protocol/test/party-and-regions.test.js`) | **Pass (inh.)** — Doc 06 v2.5.1, REL-LIM-18 site 1; `packages/protocol` **151/151** green in run R-17 (2026-09-06). _Placed in `TS-ABSENCE` deliberately: what it guarantees is the **absence of a claim** from a shipped string — the same shape as TC-1600..TC-1614 — and it sits with the other protocol flag cases TC-1611/TC-1612. It does **not** test flag behaviour; a passing TC-3569 says nothing about whether MACI works._ |
| TC-1613 | Storage-layout snapshot detects an unexpected slot | NFR-017 | Snapshot diff fails the build | — | **Blocked** — the harness `storageLayout` output selection (Doc 04 §6.3) was not added |
| TC-1614 | No deletion or edit path for any published record | FR-047, FR-056, RISK-13 | No selector, no bytecode path, no endpoint | adversarial · UT-0310, UT-0301 | Pass (inh.) — **partial**: the service-endpoint half has no test |

### 4.4 `TS-ABI` (TC-1800–TC-1803)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-1800 | Per-contract **ABI allowlist** snapshot (primary control, Doc 04 §6.1) | NFR-009 | **Blocked** — only the denylist (TC-1600) is implemented; no allowlist snapshot exists |
| TC-1801 | Indexer read-schema snapshot | FR-054, FR-055 | **Blocked** — not built |
| TC-1802 | SDK ↔ contract ABI drift check | NFR-021 | Pass (inh.) — partial, via sdk decode tests · UT-2613 |
| TC-1803 | Every contract is under the EIP-170 24,576-byte limit | NFR-021 | Pass (inh.) — `script/compile.mjs`, Doc 06 §1.2 (largest 13,185) |

### 4.5 `TS-SEC` — Security and negative authority (TC-1850–TC-1863)

| TC | Title | Verifies | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-1850 | **A nullifier cannot be burned by an unauthorised caller** | FR-002, NFR-004 | Revert; the citizen keeps the action | adversarial · UT-0325 | Pass (inh.) — defect #1 regression |
| TC-1851 | Spender authority is exactly the modules the registry deployed, and nothing else | CON-003 | Set equality asserted; no de-authorisation path | adversarial · UT-0326 | Pass (inh.) |
| TC-1852 | **A rejecting verifier refuses the action** | RISK-10, NFR-009 | `InvalidProof` | adversarial · UT-0340 | Pass (inh.) |
| TC-1853 | Proof with the wrong number of public signals | RISK-10 | Refused | adversarial · UT-0341 | Pass (inh.) |
| TC-1854 | Unregistered circuit refused | RISK-10 | Refused | adversarial · UT-0342 | Pass (inh.) |
| TC-1855 | Circuit registered without a published ceremony URI | RISK-10 | Registration refused | adversarial · UT-0343 | Pass (inh.) |
| TC-1856 | A superseded verifier stays valid through its grace window | NFR-017 | In-flight proofs are not invalidated | adversarial · UT-0344 | Pass (inh.) |
| TC-1857 | **An insecure mock is detected in the verifier registry** | RISK-10 | `IS_INSECURE_MOCK()` found | adversarial · UT-0350 | Pass (inh.) |
| TC-1858 | **A mock verifier reaching a promoted environment is refused** | RISK-10, NFR-009 | Promotion to staging/prod fails | deployment-safety · UT-0601 | Pass (inh.) |
| TC-1859 | A mock is permitted on devnet and below | — | Allowed, so the governance layer can be built first | deployment-safety · UT-0602 | Pass (inh.) |
| TC-1860 | An unknown environment name is rejected, not defaulted to permissive | NFR-009 | Reject | deployment-safety · UT-0606 | Pass (inh.) |
| TC-1861 | Deployment wires the nullifier-spender authority, without which every action reverts | CON-003 | Wired at deploy time | deployment-safety · UT-0611 | Pass (inh.) |
| TC-1862 | Proposal flooding is rate-limited per person per period | FR-029 | `ProposalCooldown(until)` | — | **Blocked** — `PROPOSAL_COOLDOWN` exists in `Governor`; no test provokes it |
| TC-1863 | Independent penetration test and security/cryptography audit, zero critical/high open | NFR-009, CON-012 | 0 critical/high | NF-02 | **Manual — not run** (MS-09, 2027-03-12) |

### 4.6 `TS-PRIV` — Privacy and anonymity (TC-1950–TC-1963)

| TC | Title | Verifies | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-1950 | The anonymity-set guard refuses publication below k = 1,000 | NFR-002 · US-0039 | Withheld with a stated reason | protocol · UT-0048 | **Pass (obs.)** |
| TC-1951 | A thin ward escalates to the nearest safe ancestor region | NFR-002 · US-0039 | Escalation applied to publication | protocol · UT-0049 | **Pass (obs.)** |
| TC-1952 | Publication refused when even the country is too thin | NFR-002 | Refuse rather than expose | protocol · UT-0050 | **Pass (obs.)** |
| TC-1953 | **A region below the k ≥ 1,000 floor cannot host a published action on-chain** | NFR-002 | `AnonymitySetTooSmall` | lifecycle · UT-0116 | Pass (inh.) |
| TC-1954 | The SDK refuses to endorse in a region below the floor | NFR-002 | Client-side refusal with an explanation | sdk · UT-2607 | **Pass (obs.)** |
| TC-1955 | The SDK refuses to join a party whose region is too thin | NFR-002 | Refusal | sdk · UT-2608 | **Pass (obs.)** |
| TC-1956 | One person acting in N scopes produces N unrelated nullifiers | FR-002 · US-0007 | No shared structure between them | sdk · UT-2521 | **Pass (obs.)** |
| TC-1957 | The same person in the same scope is stable — that is what "once" means | FR-002 · US-0006 | Deterministic | sdk · UT-2522 | **Pass (obs.)** |
| TC-1958 | The private witness never enters the public signals | FR-030, NFR-001 | Public signal array excludes the secret | sdk · UT-2601 | **Pass (obs.)** |
| TC-1959 | The client collects nothing about its reader | NFR-001, NFR-010 | No beacon, analytics global or tracking attribute | `apps/web` · UT-0740 | Not run |
| TC-1960 | The indexer records no reader | NFR-001 | No reader identity persisted | indexer · UT-0525 | **Pass (obs.)** |
| TC-1961 | **Cross-scope correlation battery** over a production-scale synthetic dataset | FR-002, NFR-001 | Adversary advantage ≤ ε at a stated confidence | — | **Blocked — OPEN-08**: "better than chance" is not falsifiable by a finite suite as written; no pass line exists |
| TC-1962 | Anonymity escalation applies to **publication**, never to **eligibility** | NFR-002, BR-004 | A ward election's electorate never silently changes | — | **Blocked — OPEN-10 / OI-05** undecided |
| TC-1963 | Independent adversarial privacy audit | NFR-001 | 0 confirmed linkages, 0 critical/high | NF-01 | **Manual — not run** |

### 4.7 `TS-DATA` — Data inventory (TC-2050–TC-2053)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-2050 | Full data-inventory scan of every store, log, backup, cache and message queue | FR-003, NFR-010, CON-002 | **Blocked** — no scanner exists in this drop |
| TC-2051 | A change that would persist a date of birth **fails the build** | FR-003, NFR-010 · US-0002 | **Blocked** — build-failing check not implemented |
| TC-2052 | No personal data is expressible on the public record | NFR-010 | Pass (inh.)/**Pass (obs.)** — partial, via TC-1607 (UT-0108) and TC-1609 (UT-0046) |
| TC-2053 | No real personal data exists in any environment, including a developer laptop | CON-002 | **Blocked** — the three CI scanners of Doc 04 §11 are not built |

### 4.8 `TS-PERF`, `TS-LOAD`, `TS-COST` (TC-2080–TC-2203)

Every case here needs an environment or an instrument that does not exist in this drop.

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-2080 | Primary screen interactive ≤ 5 s p95 on the reference device (2 GB RAM, Android 9) at 64 kbit/s | NFR-006, NFR-012 | **Blocked** — no reference-device harness (NF-05) |
| TC-2081 | Action acknowledged ≤ 5 s p95, finalised on the record ≤ 120 s p95 | NFR-006 | **Blocked** — no testnet |
| TC-2082 | Full enrol → endorse journey completes in ≤ 10 minutes unaided | NFR-006, NFR-022 | **Blocked** |
| TC-2083 | Client install ≤ 15 MB | NFR-012 | **Blocked** — no build-size gate |
| TC-2084 | On-device proving completes on the reference device | NFR-006, NFR-012 | **Blocked** — circuits not compiled |
| TC-2150 | 5,000 governance actions/second sustained | NFR-008 | **Blocked** — no load rig |
| TC-2151 | LeanIMT insert cost measured to 50 M leaves | NFR-008 | **Blocked** |
| TC-2152 | Sponsorship-pool exhaustion and circuit-breaker trip | NFR-007, FR-061 | **Blocked** — relayer not built |
| TC-2153 | Soak: 72 h with no state divergence | NFR-007 | **Blocked** |
| TC-2200 | Gas-per-citizen-action regression detector (> 10% fails CI) | NFR-005 | Pass (inh.) — harness measures execution gas (Doc 06 §1.2); **this is a regression detector, not a price** |
| TC-2201 | Real price per action = execution + 21,000 intrinsic + calldata + ADR-001 blob fee, on testnet | NFR-005 | **Blocked** — no testnet |
| TC-2202 | Median < USD 0.01, p99 < USD 0.05 across the enumerated action set | NFR-005 | **Blocked — OPEN-15**: the action set is not enumerated, so the metric is unfalsifiable |
| TC-2203 | Citizen charged USD 0.00 in 100% of cases | NFR-005, FR-060 | **Blocked** — no production instrumentation (NF-04) |

### 4.9 `TS-A11Y`, `TS-I18N`, `TS-COMPAT` (TC-2250–TC-2382)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-2250 | Automated WCAG 2.2 AA rule engine over **every** primary flow in CI | NFR-011 | **Blocked** — not built |
| TC-2251 | **Manual screen-reader pass** over every primary flow, per release candidate | NFR-011 | **Manual — not run** (by nature manual; no substitute exists) |
| TC-2252 | Every primary flow remains usable and completable at 200% text scale | NFR-011 | **Manual — not run** |
| TC-2253 | The vote confirmation has an accessible name and a heading | NFR-011 · US-0045 | Not run — `apps/web` · UT-0704 exists |
| TC-2254 | Petition progress is exposed to assistive technology, not only as a bar | NFR-011 · US-0018 | Not run — `apps/web` · UT-0721 exists |
| TC-2255 | Keyboard/switch operation of every primary flow | NFR-011 | **Manual — not run** |
| TC-2330 | 100% string coverage across 8 launch locales including ≥1 RTL | NFR-013 | **Blocked** — no locale files, no coverage gate |
| TC-2331 | **Jargon scan**: no wallet / seed phrase / private key / gas / token / mint / chain / block / hash in any primary flow | NFR-023, FR-060 · US-0066 | **Blocked** — scanner not built |
| TC-2332 | Grade-8 readability verified per locale | NFR-023 | **Manual — not run** |
| TC-2333 | RTL layout, date, number and name formatting | NFR-013 | **Blocked** |
| TC-2380 | Pairwise supported matrix: evergreen mobile browsers ≤ 24 months, Android 9+ | NFR-026 | **Blocked** — no device lab |
| TC-2381 | An unsupported device shows a clear, actionable message, not a broken screen | NFR-026 · US-0070 | **Blocked** |
| TC-2382 | Offline draft composition with deferred, exactly-once submission | NFR-012 · US-0012 | **Blocked** — no implementing code or test |

### 4.10 `TS-RES`, `TS-EXIT`, `TS-UPG`, `TS-SMOKE` (TC-2420–TC-2561)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-2420 | Sequencer stall — citizen action still lands via L1 force inclusion | NFR-025, NFR-014, RISK-09 | **Blocked** — testnet only; see TC-2680 and OPEN-11 |
| TC-2421 | The indexer lies; a client detects the divergence | FR-054, NFR-021 | **Pass (obs.)** — unit-level surrogate only: indexer · UT-0516, UT-0501 |
| TC-2422 | Relayer outage — the multi-transport client falls through to the next path | NFR-007 | Pass (obs.) — sdk transport tests only; no live failover test |
| TC-2423 | Gateway/domain block — an alternative access path succeeds | NFR-014 | **Blocked** — no isolated network lab |
| TC-2424 | IPFS pin loss — manifesto content still retrievable | FR-047 | **Blocked** |
| TC-2425 | **Rollback drill: previous version fully restored within 15 minutes** | NFR-020 | **Blocked** — no staging environment; drill not run (NF-07) |
| TC-2426 | **A flag governing an open ballot cannot be changed while that ballot is open** | NFR-020 · Doc 02 §8 | **No mechanism — OPEN-03**: `FeatureFlags` has no notion of an in-flight ballot. TC-1610 covers the adjacent guarantee (flags cannot stop a vote already under way) but not this one |
| TC-2480 | Complete party public-history export in an open, documented format | NFR-018, FR-055 | **Blocked** — export path not built |
| TC-2481 | The export reconstitutes on an independent deployment with identical roots and tallies | NFR-018 | **Blocked** |
| TC-2482 | The verifier re-computes every published count and reports agreement | FR-055 · US-0062 | **Blocked** — `apps/verifier` does not exist |
| TC-2520 | Core v1 → v2 party migration preserves meaning | NFR-017 | **Blocked** — no testnet |
| TC-2521 | Circuit supersede honours the 30-day grace window | NFR-017 | Pass (inh.) — adversarial · UT-0344 (contract level) |
| TC-2522 | A region `schemeVersion` advance does not alter a **closed** contest's eligibility, counts or result | FR-007 · US-0010 | **Blocked** — the reference rule is tested (UT-0047) but no contract/E2E case exercises a closed contest across a version bump |
| TC-2523 | Registry timelock ≥ the highest party tier (30 days) | NFR-017 | **Blocked** — assertion not written |
| TC-2560 | Post-deploy smoke: enrol → endorse → activate → join → propose → vote → tally in < 5 min | walking skeleton | **Blocked** — no devnet deployment |
| TC-2561 | Smoke runs after every deployment to every environment | NFR-020 | **Blocked** |

---

## 5. `TS-ADV-01…16` — Adversarial suites, one per RISK (TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576, TC-3577–TC-3591)

The attack trees are Doc 04 §8; each leaf below is a `TC`. **Any defect found here against a
guardrail FR is automatically Sev-1** (Doc 04), because TD-04 leaves no override to fix the
consequence.

| TC | Suite / RISK | Attack | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-2600 | ADV-01 · RISK-01 | **Same human enrols through two accepted issuers** reading the same document | Second enrolment collides on the namespace and is refused | lifecycle · UT-0109, UT-0109b | Pass (inh.) — defect #2 regression |
| TC-2601 | ADV-01 · RISK-01 | Same human enrols through two **different identifier types** (e-passport + social graph) | Exactly one active credential | — | **No mechanism** — ADR-003 bounds and documents this cross-*type* residual; `FR-001`/`BR-006` are not fully satisfied |
| TC-2602 | ADV-01 · RISK-01 | Attacker controls many addresses | Gains nothing — power is bound to nullifiers, not addresses | adversarial · UT-0320 | Pass (inh.) |
| TC-2603 | ADV-01 · RISK-01 | **Unauthorised nullifier burn** (targeted disenfranchisement) | Reverts; the citizen keeps the action | adversarial · UT-0325, UT-0326 | Pass (inh.) — defect #1 regression |
| TC-2604 | ADV-01 · RISK-01 | Endorsement inflation on a live petition | Threshold floors `max(byPopulation, byVerified, 500)` bind | protocol · UT-0025; adversarial · UT-0334 | **Pass (obs.)** / Pass (inh.) |
| TC-2605 | ADV-01 · RISK-01 | Sybil economics: sell the resulting votes | No transferable instrument exists | adversarial · UT-0300, UT-0301 | Pass (inh.) |
| TC-2610 | ADV-02 · RISK-02 | **Receipt construction** from every function, export, screenshot and stored artefact | Nothing distinguishes the actual choice | — | **Blocked — Phase 3 (MACI)**; OPEN-01 |
| TC-2611 | ADV-02 · RISK-02 | Re-vote indistinguishability classifier | Advantage ≤ chance | — | **Blocked — Phase 3** |
| TC-2612 | ADV-02 · RISK-02 | Coercer is shown the confirmation screen | Screen renders identically for every choice and never names it | `apps/web` · UT-0700, UT-0701 | Not run |
| TC-2613 | ADV-02 · RISK-02 | Coercer checks whether a change-my-vote path exists | Path is offered for the whole window and hidden only after close | `apps/web` · UT-0702, UT-0703 | Not run |
| TC-2614 | ADV-02 · RISK-02 | Flag-state disclosure while MACI is off | The vote-surface banner states the **FR-131 v1 truth** — this ballot uses conventional authentication and is **not** anonymous, **not** receipt-free and **not** coercion-resistant; the platform database **can** see how you voted and which party you belong to; the ballot the platform cannot see arrives with the v2 privacy layer and is **not switched on yet** — and the banner appears whenever coercion-resistant voting is off, disappears only once it is on, and **defaults to showing the warning when the flag is unknown** | `apps/web` · UT-0710, UT-0711, UT-0712, UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; `apps/web` 95/95 green in R-17 (2026-09-06). **This is a disclosure, not a satisfaction of FR-031/FR-032/NFR-003.** _(v2.5.0 correction: this cell read "The UI states votes are anonymous but **not** receipt-free" — the retired framing FR-131’s closing sentence bans, and which the code stopped asserting at Doc 06 v2.5.0 / commit `0a5c542`. What the case exercises never changed; the sentence describing it was false, and a false expected result is a test that cannot fail when the product regresses. Status also moves Not run → Pass (inh.) on R-17. The same false clause was corrected at the strategy layer the same day: **Doc 04 v1.3.0** restated `TS-ADV-02` case **A-02.6** and **OPEN-01** off the retired framing, A-02.6 being the pass criterion this case implements — so the case and its source now agree.)_ |
| TC-3564 | ADV-02 · RISK-02 | **Regression: a banned word returns to the rendered vote-surface banner.** Render `ReceiptFreedomBanner` with MACI off and scan the banner’s rendered text for "private", "anonymous", "receipt-free", "secure" | Every occurrence is **immediately negated** ("not anonymous", "not receipt-free"); "private" and "secure" do not appear at all, negated or otherwise — neither has a mandated use in this notice. Verifies US-0134 · FR-131 closing sentence · DES-098 | `apps/web` · UT-0887 (`test/safety-surfaces.test.tsx`) | **Pass (inh.)** — Doc 06 v2.5.1; `apps/web` 95/95 green in R-17 (2026-09-06) |
| TC-3565 | ADV-02 · RISK-02 | **Regression: the retired framing returns as positive copy.** Read the rendered banner for the three facts FR-131 mandates | (a) "not anonymous", "not receipt-free" and "not coercion-resistant" are all present; (b) "can see how you voted" and "which party you belong to" are present; (c) "not switched on yet" is present; and the retired claims "your vote is private" and "nobody can see that a vote was yours" are **absent**. Verifies US-0134 · FR-131 (a)(b)(c) · DES-098 | `apps/web` · UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; R-17. **TC-3564 and TC-3565 are the guard together and neither is the guard alone:** the retired body ("Nobody can see that a vote was yours") carried **no** banned word, so a word ban would have passed it — only TC-3565’s positive assertions catch it (Doc 06 v2.5.1, decision 2) |
| TC-3566 | ADV-02 · RISK-02 | **The guard is on the shipped copy, not on a test-local string.** Assert the rendered banner contains `en.banner.notReceiptFreeTitle` and `en.banner.notReceiptFreeBody` imported from `apps/web/src/i18n/en.ts` | Both source strings appear verbatim in the rendered output, so editing the shipped en copy back toward a banned claim **fails** TC-3564/TC-3565 instead of passing them against a copy of the text that lives only in the test. Verifies US-0134 · FR-131 · DES-098 | `apps/web` · UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; R-17 |
| TC-3567 | ADV-02 · RISK-02 | **The Arabic locale is not left telling the retired lie.** Read `ar.banner.notReceiptFreeTitle` / `notReceiptFreeBody` | The retired Arabic claims "صوتك سري" (your vote is secret) and "لا يستطيع أحد أن يرى أن هذا الصوت صوتك" are absent; the mandated "ليس مجهول الهوية" (not anonymous) and "تستطيع أن ترى كيف صوّتّ" (can see how you voted) are present. Verifies US-0134 · FR-131 · DES-098 | `apps/web` · UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; R-17. **Scope limit stated:** this case guards the *claim*, not the *fluency*. The Arabic strings are an engineer draft and native-speaker review is owed before any Arabic-locale deployment (Doc 06 §7 item 17) — a mistranslated coercion warning is a safety defect that a passing TC-3567 would not catch. **NFR-013 is NOT verified by this case** _(v2.6.0, ISS-02: the Verifies cell claimed it, and the claim was not supported)_ — UT-0887 reads the content of two `ar.banner.*` constants; it exercises neither the eight-locale coverage nor the RTL rendering NFR-013 requires, and Doc 08 §3.2 carries no NFR-013 → TC-3567 link. What this case is evidence of is FR-131 copy content in the Arabic locale, and nothing wider |
| TC-3570 | ADV-02 · RISK-02 | **Regression: the landing page reclaims a v2 privacy property for backing a party.** _(Doc 02 v2.17.1 §8 FR-131 **Scenario 8**, lines 2–5: a public-facing string describing a participation act; the reader must not conclude Trumocracy cannot link them to the act; a **public-by-design** act must be described as such and not as kept private, secret or hidden.)_ Read the shipped source string `en.home.steps[1].body` — the body of the "Back the parties you believe in" step on the public landing page | "kept private" is **absent**; "public act", "name is not shown" and "our own records can link" are all **present**; and none of the four FR-131 banned words ("private", "anonymous", "receipt-free", "secure") appears anywhere in the string, case-insensitively. **The plain substring ban is safe here and negation-aware matching is not required** — unlike the clause-(a) ballot banner TC-3564 guards, no mandated negated form applies to this copy (Scenario 8 line 6; Doc 04 §0.5 S5 carve-out (i)). Verifies US-0134 · **FR-131 clause (e)** · DES-098 | `apps/web` · UT-0889 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-18** (2026-09-06, 624/624) plus the case-by-case verbose re-run of the UT-0889 block; see §2 corroboration note, v2.7.0 extension. **Scope limit, because Scenario 8 asks for more than substrings:** the scenario's operative test is what an **ordinary grade-8 reader (NFR-023)** would take the claim to mean, and its closing line makes that reader test **govern** where it disagrees with the safe harbour. UT-0889 asserts **substrings**; no automated test in this repository applies a reader test. This case is therefore evidence that the **approved wording is the wording that ships and cannot silently revert** — which is exactly what a regression guard is for — and is **not** evidence that Scenario 8 is satisfied as a whole. The reader-test half is verified by **inspection (I)**, FR-131's own recorded Verify-by |
| TC-3571 | ADV-02 · RISK-02 | **Regression: the "What we promise" list reclaims unlinkability of party membership.** _(Doc 02 v2.17.1 §8 FR-131 **Scenario 8**, line 4 and the safe-harbour line 7; also **Scenario 9** line 4 — "a claim that contains none of the four banned words still FAILS".)_ Read the shipped source string `en.home.promises[0]` | "never learn" is **absent**; "never publish" is **present**; the four banned words are absent. **This is the case that shows why clause (e) is a claims test and not a word list:** the retired string was "We never learn which party you support", which contains **none** of the four banned words and would have passed any word ban — it was false against FR-131(b) ("the platform database CAN see vote direction and party membership in v1") and was found by reading, not by scanning (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §5). What replaces it is the **safe-harbour pattern** Scenario 8 names — state what the platform does not **publish**, then state what its **own records can see**. Verifies US-0134 · **FR-131 clause (e)**, FR-131(b) · DES-098 | `apps/web` · UT-0889 | **Pass (obs.)** — R-18 + case-by-case re-run. **Two limits, both from the v2.17.1 wording.** **(1)** The safe harbour applies only to copy that "makes **no contrary claim elsewhere in the same string**" — a single-string coherence test UT-0889 does not perform; it checks two substrings independently. **(2)** Where safe harbour and reader test disagree, **the reader test governs**, and no automated test applies it. Both halves rest on **inspection (I)** |
| TC-3572 | ADV-02 · RISK-02 | **The guard is on the shipped page, not on a test-local string.** _(Doc 02 v2.17.1 §8 FR-131 Scenario 8 line 2 — the duty attaches to the **public-facing screen**, not to a constant.)_ Render `HomePage` (`apps/web/src/app/page`) inside the file's `wrap()` helper (LocaleProvider + FlagProvider) and look for the exact `en.home.steps[1].body` and `en.home.promises[0]` source strings in the DOM | Both source strings are found in the rendered output, so editing the shipped `en.ts` copy back toward a claim **fails** TC-3570/TC-3571 instead of passing them against a copy of the text that lives only in the test. Same shape as TC-3566 for the ballot banner, and the reason a copy fix is a *regression* fix rather than a one-off edit. Verifies US-0134 · **FR-131 clause (e)** · DES-098 | `apps/web` · UT-0889 | **Pass (obs.)** — R-18 + case-by-case re-run. **Binding, not coverage:** this case proves the two guarded strings reach the page. It asserts nothing about **any other string on that page**, and Scenario 9 is where that obligation lives — see TC-3575 |
| TC-3573 | ADV-02 · RISK-02 | **The Arabic mirror is not left telling the retired claim.** _(Doc 02 v2.17.1 §8 FR-131 Scenario 8 line 2 — "**in any language**"; Scenario 9 line 1 — "in every language".)_ Read `ar.home.steps[1].body` and `ar.home.promises[0]` | The retired Arabic wording is **absent**: `ar.home.steps[1].body` does not contain the exact retired phrase **"اسمك سريًا"** ("your name kept secret"), and `ar.home.promises[0]` does not contain **"لا نعرف"** ("we never know"). A locale mirror left behind is a live clause-(e) violation, not a translation backlog item. Verifies US-0134 · **FR-131 clause (e)** · DES-098 | `apps/web` · UT-0889 | **Pass (obs.)** — R-18, re-observed `it` by `it` in **R-19** (2026-09-07). **Three scope limits, stated rather than implied.** **(1) This case asserts ABSENCE only** — it makes no positive assertion that the Arabic strings state the three facts TC-3570 requires of the English ("public act", "name is not shown", "our own records can link"), so an Arabic mirror that said nothing at all would still pass it; extending it is owed UT scope for the engineer (Samuel Oyelaran) and is not recorded here as covered. **(2) It guards the *claim*, not the *fluency*** — both Arabic strings are an engineer working draft and native-speaker review is owed before any Arabic-locale deployment (ARABIC-I18N; Doc 06 §7 item 17). **NFR-013 is NOT verified by this case**, on the same ground recorded for TC-3567 at v2.6.0: neither eight-locale coverage nor RTL rendering is exercised, and Doc 08 §3.2 carries no NFR-013 → TC-3573 link. **(3) The Arabic ban is on the exact retired phrase, NOT on the word "secret"** _(v2.8.0, ISS-02 — this cell previously claimed the wider guard)_. This row read "neither سريًا nor **سري** appears". Doc 06 **v2.7.0 (Approved)** removed the bare "سري" ban **on purpose** (its ISS-06): a bare substring also matches **"سريعًا"** ("quickly") and **"تسري"** ("takes effect"), the latter already shipping at `ar.ts` `parties.leaveHelp`, so the wide ban would have failed the build on honest copy. **The narrower assertion is the right engineering call; the wider claim here was the defect** — an Arabic string containing "سري" in some other construction would ship and this case would **not** catch it, which is now said in terms rather than left for a reader to discover. What TC-3573 guards is the **return of the specific retired phrase**, which is what a regression guard is for. Extending it to a linguistically-aware claims check is owed scope for the engineer (Samuel Oyelaran), and is not recorded here as covered |
| TC-3574 | ADV-02 · RISK-02 | **The refusal message a Supporter is shown no longer claims Supporters are anonymous.** _(Doc 02 v2.17.1 §8 FR-131 Scenario 8 line 2 — "any public-facing string … that describes a participation act"; the act here is **joining or belonging to a party** at Supporter tier.)_ Build a minimal `ProposalService` fixture (InMemoryPartyStore → PartyCreationService → petition over threshold → activate → join → InMemoryProposalStore) and file a proposal as `PARTICIPATION_TIER.SUPPORTER` | The call throws with code `AUTHORSHIP_REQUIRES_WORKER_TIER`; the thrown **message** does **not** contain "Supporters are anonymous" and **does** contain "a Supporter's participation is never published". This is the third finding of the same class (DECISIONS §5.3), reached by clause (e) rather than severed by the approver (§11), and it is a **user-facing** string, not a doc comment. Verifies US-0134 · **FR-131 clause (e)** · DES-098 | `packages/sdk` exercised from `apps/web` · UT-0889 | **Pass (obs.)** — R-18 + case-by-case re-run. **This case does NOT verify FR-082.** FR-082 is a Definition-B property (Doc 02 §16.3, DEFERRED-v2) and a Supporter's membership **is** knowable to the v1 operator; what is asserted here is only that the v1 refusal **copy** stopped claiming otherwise. Doc 08 carries no FR-082 → TC-3574 link and none should be added on this evidence — the same discipline v2.6.0 applied when it removed the unsupported NFR-013 claim from TC-3567 |
| TC-3575 | ADV-02 · RISK-02 | **The population sweep: no v1 surface, in any language, asserts or implies that a participation act is unknowable to Trumocracy.** _(Doc 02 v2.17.1 §8 FR-131 **Scenario 9** in full: "**every** public-facing surface of a v1 deployment, in every language, including the README and the landing copy" · read "against the clause (e) reader test rather than searched for a list of banned words" · "**zero** materials assert or imply" · "a claim that contains **none** of the four banned words still FAILS".)_ Enumerate every public-facing string in `apps/web` and `packages/ui` (both locale dictionaries and every rendered surface), the README and every other public-facing material, and evaluate each against the grade-8 reader test (NFR-023) | **Zero** materials would lead an ordinary grade-8 reader to conclude that Trumocracy cannot link them to casting a vote, endorsing or backing a petition, joining or belonging to a party, or supporting a party — **including materials that contain none of the four banned words**. Two carve-outs and only two: clause (a)'s mandated negated forms inside a DES-098 notice, and the named `anon`-badge exception (Doc 04 §0.5 S5). Verifies US-0134 · **FR-131 clause (e), Scenario 9** · DES-098 | **None — no implementing instrument exists.** The instrument this criterion requires is **Doc 04 §0.5 S5**, the build-failing FR-131 denylist over `apps/web` and `packages/ui`, widened at MTP v1.5.0 to every participation act, every language, and to claims as well as words. It is **specified and not built** | **Blocked — instrument absent.** _(Doc 07 §10 counts "instrument absent" as Blocked, not as No mechanism: the product has plenty to test — it is the test that does not exist.)_ **Minted Blocked deliberately, and this is the load-bearing row of the drop.** The five cases above guard **five strings on three surfaces**; TC-3535/UT-0869 guards the party-join copy and TC-3564..TC-3567/UT-0887 the ballot banner — **eleven strings in total**. Scenario 9 quantifies over **all** of them and everything else. Recording it as covered by TC-3570..TC-3574 would have been the easiest false pass available at this version. **What exists instead:** UT-0857, UT-0868 and UT-0884 are **DES-085 jargon** scans ("wallet", "seed phrase", "blockchain"…) over enumerated per-drop strings — they are not the FR-131 denylist and would have caught **neither** string this drop fixed, which is precisely how "we never learn which party you support" survived the 2026-09-05 sweep. **Two live questions sit inside this case's scope and neither is the tester's to answer:** **OPEN-27** (Doc 04 §13 → Ravi Deshmukh — the S5 `anon`-badge carve-out was reasoned against a **voting-scoped** FR-131, and party-joining and endorsing are now participation acts) and **ENROL-COPY (j)** (Doc 02 §13 → Priya Raghunathan — enrolment/verification claims are expressly outside clause (e) and unruled). **Unblocks when** the engineer builds the S5 scan; until then the remainder of clause (e) rests on **inspection (I)**, which is FR-131's own recorded Verify-by and is legitimate evidence, but is point-in-time and cannot hold a Must row against silent regression |
| TC-3576 | ADV-02 · RISK-02 | **The corrected landing copy carries no blockchain jargon.** _(DES-085 jargon filter · NFR-023 plain language, Doc 02 §2.2. Not a clause-(e) criterion — clause (e) governs honesty of **claims**; this governs **comprehensibility**, and the two corrected strings arrived at Doc 06 v2.6.0 with no jargon scan of their own.)_ Read `en.home.steps[1].body` and `en.home.promises[0]` case-insensitively against the house jargon list | Neither string contains any of the eleven banned words — "wallet", "seed phrase", "private key", "gas", "token", "mint", "on-chain", "blockchain", "crypto", "nullifier", "hash". Verifies US-0134 · **NFR-023 · DES-085** | `apps/web` · UT-0889 (`test/safety-surfaces.test.tsx`, the jargon `it`) | **Pass (obs.)** — run **R-19** (2026-09-07, 625/625) plus the case-by-case verbose re-run of the UT-0889 block, 6 `it`s green individually. **Minted rather than left as an unmapped guard** _(v2.8.0, ISS-03)_: this document gives every per-drop jargon scan its own row — **TC-3538** (UT-0868, membership strings) and **TC-3561** (UT-0884, the proposals surface) — and a guard on shipped copy that no `TC` names is a guard no RTM reader can see. **Scope limit, and it is the same one NFR-023 has carried since v1.1.0:** this is an **enumerated** scan over **two** strings, not a readability check and not a repository-wide jargon scanner. **It does not close NFR-023**, whose Doc 08 row stays `G-UI` for exactly that reason — the same instrument-versus-enumeration distinction TC-3575 draws for FR-131 Scenario 9. Doc 08 v2.11.0 records the NFR-023 → TC-3576 link and raises **`TD-RTM-03`** for the pre-existing fact that the same row cites neither TC-3538 nor TC-3561 |
| TC-3577 | ADV-02 · RISK-02 | **The `/verify` route ships dark — the flag that gates it is off above `dev`.** _(Doc 02 v2.17.3 §4.46 **FR-132 §(d)**: v1 MUST NOT claim, "in its UI, README, or any public-facing material", that one-person-one-vote is guaranteed or that the platform is anonymous. `DECISIONS-2026-09-08-VERIFY-PAGE.md` §1 — approver ruling — and §5 remedy (a), the product-owner's choice.)_ Read `isEnabled('enrolment_ui', env)` from `@trumocracy/protocol` for `prod`, `staging` and `dev` | `prod` → `false`, `staging` → `false`, `dev` → `true`. The enrolment screen — whose eleven `verify.*` strings state the **unbuilt** verify-and-discard design (FR-132 §(b), ADR-003, DES-100) as current fact while `StubIdDocumentChecker.IS_INSECURE_MOCK()` returns `true` and CON-015 is uncleared — therefore cannot render in any environment above `dev`. Verifies US-0133 · **FR-132 §(d)** · DES-100 · CON-015 | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit, stated because the row would otherwise read as a deployment guarantee:** this asserts the **default** recorded in the flag registry (`packages/protocol/src/flags.js`), not the state of any deployed environment. A deployment that overrides `enrolment_ui` at runtime would defeat the gate and **no test in this repository would see it**; the deployed-state check is the sre's (Doc 10) and is **not** recorded here as covered |
| TC-3578 | ADV-02 · RISK-02 | **The dark flag is not a permanent branch — `permanentFlags()` stays empty.** _(Doc 06 §6 flag register; the `UT-0888`/TC-3569 precedent. A ship-dark flag with no `removeBy` is how a temporary gate becomes permanent architecture.)_ Call `permanentFlags()` from `@trumocracy/protocol` with `ENROLMENT_UI` now in the registry | Returns `[]` — no flag in the registry lacks a `removeBy`, `enrolment_ui` included. Its `removeBy` names the retirement condition and the blocker: "retires when FR-132 §(b) ships behind a real `IEligibilityVerifier` backing; blocked on CON-015". Verifies US-0133 · **FR-132 §(d)** · DES-100 · CON-015 | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit, and it is a real one:** `permanentFlags()` filters on `!f.removeBy`, so the guard is that a `removeBy` **exists**, not that it ever expires — `L1_FORCE_INCLUSION` carries `removeBy: 'never — permanent escape hatch'` and passes the same predicate. A `removeBy` naming a milestone that never arrives would also pass. What this case proves is that the new flag was **not** added without a stated exit |
| TC-3579 | ADV-02 · RISK-02 | **The flag explains itself to the next reader: its description names the blocker and the requirement.** _(Doc 06 §6; `DECISIONS-2026-09-08-VERIFY-PAGE.md` §5 — the gate is only safe if whoever finds it later knows why it is closed.)_ Read `FLAGS.ENROLMENT_UI.description` and scan for the constraint and requirement ids | The description contains **"CON-015"** and **"FR-132"**. In the shipped string both appear in their governing sentence — the screen "describes the verify-and-discard enrolment design (FR-132 §(b), DES-100, ADR-003) as current fact", enrolment "is unbuilt … and blocked on CON-015". Verifies US-0133 · **FR-132 §(d)** · CON-015 | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit:** the assertion is a **substring** check on two ids. It does not read the sentence around them, so a description that named CON-015 and FR-132 in a false or garbled claim would still pass. The normative wording is `DECISIONS-2026-09-08-VERIFY-PAGE.md` §5.3, not this string — which the description itself says |
| TC-3580 | ADV-02 · RISK-02 | **With the flag off, the honesty placeholder is what a citizen actually gets.** _(`DECISIONS-2026-09-08-VERIFY-PAGE.md` §5.3, **NORMATIVE text**, and §5.5 item 3, the markup contract. FR-132 §(d) — the honest record of what the v1 check is and is not.)_ Render `VerifyPage` inside the file's `wrap()` helper (LocaleProvider + FlagProvider) with `{ enrolment_ui: false }` and read the DOM | `data-testid="verify-unavailable"` is present, and the rendered output contains `en.verify.unavailableTitle`, `en.verify.unavailableBody`, `en.verify.unavailablePlannedTitle` and **all four** `en.verify.unavailablePlanned` items — the placeholder is complete, not truncated to a title. Verifies US-0133 · **FR-132 §(d)** · DES-100 | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Binding, not coverage** — the same distinction TC-3572 draws for the landing page: this proves the four **source** strings reach the page, so editing `en.ts` back toward a claim fails TC-3585/TC-3587 rather than passing them against a test-local copy. It asserts nothing about **any other string** on the route, and nothing about how the placeholder reads to a grade-8 reader (NFR-023); that half rests on **inspection (I)** |
| TC-3581 | ADV-02 · RISK-02 | **Regression: the retired enrolment guarantees return to the rendered page.** _(FR-132 §(d); Doc 02 §16.4 **H-17** — the ID-check vendor **does** see the document — and **H-18** — `subject_id_hash` is a stable linkable id. The five retired claims asserted the opposite of both.)_ Render `VerifyPage` with `{ enrolment_ui: false }` and scan `container.textContent` for each retired claim | None of the five appears anywhere in the rendered text: **"never leaves your phone"**, **"and nothing else"**, **"cannot be traced back to you"**, **"never run by a government"**, **"Everything happens on your phone"**. Verifies US-0133 · **FR-132 §(d)** · DES-100 | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Three scope limits, stated rather than implied.** **(1) This is an ABSENCE assertion over an enumerated list of five phrases** — a sixth false enrolment guarantee, or a paraphrase of any of the five, would pass it. **(2) It is bound to the flag-OFF branch**: with `enrolment_ui` on, all five strings still render in `dev` by design (they are the enrolment sprint's starting copy, deliberately not deleted — Doc 06 §7 item 28), so this case is evidence about the **public** build only. **(3) The claims are enrolment claims, which FR-131 clause (e) expressly does NOT govern** (Doc 02 §4.45 closing: personhood-enrolment and identity-verification claims are outside clause (e); FR-132 §(d); §16.4 H-16/H-17/H-18). This row is FR-132 evidence and **no FR-131 link is added for it** |
| TC-3582 | ADV-02 · RISK-02 | **With the flag off the controls are gone, not merely hidden.** _(`DECISIONS-2026-09-08-VERIFY-PAGE.md` §5 remedy (a) — a dark route must not leave an actionable enrolment affordance a citizen can reach.)_ Render `VerifyPage` with `{ enrolment_ui: false }` and query for the enrolment test ids | `start-verification`, `kept-list` and `not-kept-list` all return `null` — there is no start button, no "what is kept" list and no "what is not kept" list in the DOM. Verifies US-0133 · **FR-132 §(d)** · DES-100 | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit:** this is capability-absence over **three named test ids**, not the `TS-ABSENCE` kind of scan over a built artefact (contrast TC-1600..TC-1614, which assert absence at the ABI/bytecode boundary). A new enrolment control added under a fourth test id would not be caught |
| TC-3583 | ADV-02 · RISK-02 | **The dark route is unreachable from the site's own navigation.** _(`DECISIONS-2026-09-08-VERIFY-PAGE.md` §5 — gating the page but linking to it would leave the claim one click away in the nav.)_ Render `SiteHeader` with `{ enrolment_ui: false }` and read every `<a>` in the container | No anchor has an `href` beginning `/verify`. Verifies US-0133 · **FR-132 §(d)** | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit, and it is the sharpest one in this block:** `SiteHeader` is **one** surface. Doc 06 §7 item 28 records that **the home CTA still links to `/verify/`**, and this case does not assert otherwise — a citizen who follows that CTA reaches the route and gets the placeholder (TC-3580), which is the designed behaviour, not a defect. What is **not** covered is a repository-wide sweep for `/verify` links; no such instrument exists and none is claimed |
| TC-3584 | ADV-02 · RISK-02 | **The copy is gated, not deleted — the `dev` posture still works.** _(Doc 06 §7 item 28: the eleven `verify.*` strings "are **not deleted** — they remain the enrolment sprint's starting copy and render only in `dev`". A gate that quietly destroyed the design copy would cost the enrolment sprint its starting point.)_ Render `VerifyPage` and `SiteHeader` with `{ enrolment_ui: true }` | `en.verify.onDeviceBody` renders; `start-verification` is present; and `SiteHeader` emits an anchor whose `href` starts `/verify`. Verifies US-0133 · **FR-132 §(d)** · DES-100 | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **This case is the reason TC-3581 is not over-read.** It records in terms that the five retired claims **do** still render with the flag on — which is safe only because `enrolment_ui` is off above `dev` (TC-3577). **If that default ever flips, this case still passes and the product becomes dishonest**; TC-3577 is the guard that matters and this one is its complement. Stated here so no reader takes a green row as a claim that the retired copy is gone from the codebase — it is not |
| TC-3585 | ADV-02 · RISK-02 | **The replacement copy does not repeat the offence it was written to fix.** _(The four-word list is FR-131's, used here as an **instrument**; the governing requirement is FR-132 §(d) — see the scope limit.)_ Read the four new values (`unavailableTitle`, `unavailableBody`, `unavailablePlannedTitle` and the four `unavailablePlanned` items) case-insensitively against "private", "anonymous", "receipt-free", "secure" | No value contains any of the four, in any case. Verifies US-0133 · **FR-132 §(d)** | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit — this row must NOT be read as FR-131 evidence, and Doc 08 carries no FR-131 link for it.** FR-131 clause (e) and its closing sentence govern **participation acts** (casting a vote, endorsing or backing a petition, joining or belonging to a party, supporting a party); Doc 02 §4.45 states that personhood-enrolment and identity-verification claims are **expressly outside** clause (e) and routes them to FR-132 §(d). The `/verify` copy is enrolment copy. The word list is applied here as a **defensive convention** — the same words, a different requirement — and applying it earns FR-132 §(d) evidence, not an FR-131 obligation. **The plain substring ban is safe on this copy** because no mandated negated form applies to it (contrast TC-3564, where "not anonymous" must be allowed) |
| TC-3586 | ADV-02 · RISK-02 | **The replacement copy is readable — no blockchain jargon.** _(DES-085 jargon filter · NFR-023 plain language, Doc 02 §2.2. Same shape as TC-3538 (membership strings), TC-3561 (proposals surface) and TC-3576 (the corrected landing strings): every per-drop jargon scan gets its own row, because a guard no `TC` names is a guard no RTM reader can see.)_ Read the same four new values case-insensitively against the house jargon list | None contains any of the eleven banned words — "wallet", "seed phrase", "private key", "gas", "token", "mint", "on-chain", "blockchain", "crypto", "nullifier", "hash". Verifies US-0133 · **NFR-023 · DES-085** | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit, identical to the one NFR-023 has carried since v1.1.0:** this is an **enumerated** scan over **four** strings — not a readability check and not a repository-wide jargon scanner. **It does not close NFR-023**, whose Doc 08 row stays `G-UI` for exactly that reason. Doc 08 **v2.12.0** records the NFR-023 → TC-3586 link; **`TD-RTM-03` is NOT repaired by it** — that row still cites neither TC-3538 nor TC-3561, and re-deriving those two drops' evidence is the debt, not a side-effect of this mint |
| TC-3587 | ADV-02 · RISK-02 | **The placeholder tells the unflattering half of the story, not a rosier one.** _(FR-132 §(d) — the honesty posture, including its duty to state that same-document deduplication "does not prevent a person with multiple legitimate government IDs from creating multiple counting accounts". Doc 02 §16.4 **H-17** (the vendor sees the document), **H-15** (same-document dedup is not one-person-one-vote), CON-015.)_ Join the four `en.verify.unavailablePlanned` items and read them for the four load-bearing admissions | The joined text contains **"will see your document"** (H-17), **"promise written into a contract"** (the FR-132 §(e) vendor no-retention clause stated as contractual, not cryptographic), **"will not prove that each person has only one account"** (H-15), **"None of this is built"** and **"legal opinion"** (CON-015). Verifies US-0133 · **FR-132 §(d)**, §(e) as disclosed · DES-100 · CON-015 | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Two scope limits, and the first is the one a Gate-2 reader needs.** **(1) This is the right statement on the WRONG surface for FR-132 §(d)'s own wording.** §(d) requires that "**the FR-131 honesty notice (DES-098)** MUST carry" the same-document-deduplication statement. **DES-098 is unbuilt** (Doc 06 §7 item 26(d); the acknowledge-to-proceed control does not exist and SCR-13/SCR-14 are not built), so this case proves the fact is stated **honestly somewhere a citizen can reach**, and **not** that the §(d) notice duty is discharged. The FR-132 row stays OPEN partly for this reason. **(2) The assertion is five substrings**, not a reader test; whether an ordinary grade-8 reader takes the passage to mean what it says rests on **inspection (I)** |
| TC-3588 | ADV-02 · RISK-02 | **The v1 truth is stated positively, not as an absence of text.** _(FR-132 §(a)/§(d) — account creation, joining, reading, discussing and supporting require **no** government-ID check in v1, and the honest record of that is a statement, not silence.)_ Read `en.verify.unavailableBody` | It contains **"nobody is checked at all"** — the placeholder says what is true today rather than only what is missing. The surrounding shipped sentence is "Today anyone can make an account, join a party, read, discuss and support one, and nobody is checked at all." Verifies US-0133 · **FR-132 §(a)**, §(d) | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit:** a single substring assertion on one string. It is the **TC-3565 pattern** — a positive assertion paired with an absence assertion (TC-3581), because the retired copy carried claims that a word ban alone would not catch. It does not verify FR-132 §(a) as a whole: §(a) is a duty on the **system** (never refuse account creation or membership for want of a document, one account per verified phone, `phone_hash` one-way), and **none of that is built**. What is verified is that the copy describing it is true |
| TC-3589 | ADV-02 · RISK-02 | **The Arabic locale is not left a version behind.** _(FR-132 §(d) — "in its UI, README, or any public-facing material"; the `en`/`ar` key-set discipline that Doc 06 keeps so a locale cannot silently fall back to English or to nothing.)_ Compare `Object.keys(ar.verify)` with `Object.keys(en.verify)` as sets | The two key sets are equal — every new `verify.*` key added for the placeholder exists in `ar` as well as `en`. Verifies US-0133 · **FR-132 §(d)** | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit:** this is a **structural** assertion about keys. It says nothing about the values, and an `ar` mirror of correct shape but wrong content would pass it — which is why TC-3590 and TC-3591 exist beside it |
| TC-3590 | ADV-02 · RISK-02 | **The Arabic mirror is a translation, not a copy-paste of the English.** _(FR-132 §(d) "any public-facing material"; the TC-3573/TC-3567 precedent — a locale left behind is a live dishonesty, not a translation backlog item.)_ Assert `ar.verify.unavailablePlanned` has four items, then pair each of the seven new Arabic values with its English counterpart | Every Arabic value is non-empty **and** differs from its English counterpart — so an untranslated placeholder (English text copied into `ar.ts`) fails, and so does an empty string. Verifies US-0133 · **FR-132 §(d)** | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Two scope limits, the second inherited and not resolved here.** **(1) This asserts "not identical and not empty" — it does NOT assert that the Arabic says what the English says.** An Arabic value that is fluent, non-empty and about something else entirely would pass. No automated test in this repository compares meaning across locales. **(2) It guards the *claim shape*, not the *fluency*:** both Arabic strings are an **engineer working draft** and **native-speaker review is owed before any Arabic-locale deployment** (`ARABIC-I18N`; Doc 06 §7 item 17; a packet was prepared but not closed at the 2026-09-20 debt-closure session, which is human-gated). A mistranslated honesty notice is a safety defect a passing TC-3590 would not catch. **NFR-013 is NOT verified by this case**, on the same ground recorded for TC-3567 (v2.6.0) and TC-3573 (v2.7.0): neither eight-locale coverage nor RTL rendering is exercised, and Doc 08 §3.2 carries no NFR-013 → TC-3590 link |
| TC-3591 | ADV-02 · RISK-02 | **The banned words are not smuggled into the Arabic file in Latin script.** _(FR-132 §(d); the four-word list used again as an instrument, not as an FR-131 obligation — see TC-3585.)_ Read all seven Arabic values case-insensitively against "private", "anonymous", "receipt-free", "secure" | No Arabic value contains any of the four Latin-script words. Verifies US-0133 · **FR-132 §(d)** | `apps/web` · UT-0890 (`test/safety-surfaces.test.tsx`) | **Pass (obs.)** — run **R-20** (2026-09-20, `npm test` **640/640**, exit 0, clean tree) plus the case-by-case verbose re-run of the UT-0890 block (**15 passed, 26 skipped**), every `it` name reported green individually. **Scope limit, and it is the same one Doc 06 v2.7.0 taught at TC-3573:** the guard is over **Latin-script** substrings only. **No Arabic-script claim is banned by this case** — the Arabic equivalents of "private", "anonymous" or "secret" would pass it untouched, and a bare Arabic substring ban is precisely what Doc 06 v2.7.0 removed on purpose (ISS-06: "سري" also matches "سريعًا" and "تسري", the latter already shipping at `ar.ts` `parties.leaveHelp`). What this case catches is an English banned word left in the Arabic file; **extending it to a linguistically-aware claims check is owed scope for the engineer (Samuel Oyelaran) and is not recorded here as covered** |
| TC-2620 | ADV-03 · RISK-03 | **100,000 accounts join while a proposal is open** | Zero effect on that proposal | protocol · UT-0018, UT-0014 | **Pass (obs.)** |
| TC-2621 | ADV-03 · RISK-03 | Look for a transferable surface to buy voting power | None in ABI or bytecode | adversarial · UT-0300, UT-0301 | Pass (inh.) |
| TC-2622 | ADV-03 · RISK-03 | Mid-vote quorum grief by flooding | Quorum is measured on `snapshotMembers` — flood has no effect | protocol · UT-0014 | **Pass (obs.)** |
| TC-2630 | ADV-04 · RISK-04 | **Mob capture**: 9,000 of 10,000 members joined last week and vote to amend a founding clause | Quorum not met; amendment fails | protocol · UT-0041, UT-0003; governance · UT-0230 | **Pass (obs.)** / Pass (inh.) |
| TC-2631 | ADV-04 · RISK-04 | Growth surge during a constitutional vote | Surge raises the bar (+5 pts, ×2 window) on T2/T3 only | protocol · UT-0004; governance · UT-0220 | **Pass (obs.)** / Pass (inh.) |
| TC-2632 | ADV-04 · RISK-04 | Surge used to freeze ordinary party business | Everyday tiers untouched | protocol · UT-0005; governance · UT-0221 | **Pass (obs.)** / Pass (inh.) |
| TC-2633 | ADV-04 · RISK-04 | The captured minority forks | Fork proceeds; parent cannot block; lineage recorded | protocol · UT-0042, UT-0043 | **Pass (obs.)** — FR-053 has **no story** (Doc 05 §12 gap) |
| TC-2640 | ADV-05 · RISK-05 | Compromised issuer floods a region | Per-epoch cap throttles | adversarial · UT-0321 | Pass (inh.) |
| TC-2641 | ADV-05 · RISK-05 | Issuer set drops below the ADR-003 invariant | `enrol()` fails closed | lifecycle · UT-0109c | Pass (inh.) — defect #3 regression |
| TC-2642 | ADV-05 · RISK-05 | **One attestor exceeds 50% of a region's credentials** | Further issuance refused; share published | — | **No mechanism — OPEN-02**: `PersonhoodRegistry` has a per-issuer epoch cap and **no region dimension**. `FR-004` is untestable as written |
| TC-2650 | ADV-06 · RISK-06 | Colluding operator + attestor + party correlate all held data | Advantage ≤ ε | — | **Blocked — OPEN-08 / OPEN-13** (no adversary model, no collusion bound) |
| TC-2651 | ADV-06 · RISK-06 | Attempt to lower `MIN_ANONYMITY_SET` for one scope | No configuration, charter option, flag or privileged call can | protocol · UT-0048, UT-0049, UT-0050 + TC-1600 | **Pass (obs.)** |
| TC-2652 | ADV-06 · RISK-06 | Escalation changes a ward election's electorate | Escalation must touch publication only | — | **Blocked — OPEN-10 / OI-05** |
| TC-2653 | ADV-06 · RISK-06 | Timing/metadata correlation of submissions | Indistinguishable | — | **Blocked** — global passive adversary is explicitly out of scope (SDD §16 Q4) |
| TC-2660 | ADV-07 · RISK-07 | State orders disclosure of the member list or a voter's ballot | The data does not exist to disclose | lifecycle · UT-0108; protocol · UT-0046 | Pass (inh.) / **Pass (obs.)** |
| TC-2661 | ADV-07 · RISK-07 | "Take down party Y" | No pause, no admin, no deletion path in the core | adversarial · UT-0310, UT-0311 | Pass (inh.) |
| TC-2662 | ADV-07 · RISK-07 | Compel the attestor instead | Residual exposure — **accepted and disclosed**, not mitigated (Doc 01 §E3) | — | **Out of scope by decision**, recorded not tested |
| TC-2670 | ADV-08 · RISK-08 | Primary domain **and** app-store listing both blocked | ≥ 2 independent access paths succeed end to end | — | **Blocked** — no isolated network lab (NF-06) |
| TC-2671 | ADV-08 · RISK-08 | Served bundle is tampered with | Reproducible static bundle hash mismatch detected | — | **Blocked** — reproducible-build job not run by an independent party |
| TC-2680 | ADV-09 · RISK-09 | Sequencer censors one citizen's action | Included by an alternative path **within 60 minutes** | — | **Blocked — OPEN-11**: `NFR-025` says 60 min; ADR-001 says force inclusion is 12–24 h. The suite could only measure and report; it cannot pass a criterion the design contradicts |
| TC-2690 | ADV-10 · RISK-10 | A mock verifier reaches a promoted environment | Promotion refused | deployment-safety · UT-0601; adversarial · UT-0350 | Pass (inh.) |
| TC-2691 | ADV-10 · RISK-10 | A circuit is registered without a published ceremony | Registration refused; `zkeyHash` mandatory | adversarial · UT-0342, UT-0343 | Pass (inh.) |
| TC-2692 | ADV-10 · RISK-10 | Client is fed a swapped proving key | Client refuses to prove with an unregistered key (DES-052) | — | **Blocked** — no test evidences client-side zkey pinning |
| TC-2693 | ADV-10 · RISK-10 | Ceremony transcript is incomplete or unverifiable | Detected before promotion | — | **Blocked — Phase 2** |
| TC-2700 | ADV-11 · RISK-11 | Recovery at n = 1,000 synthetic subjects across guardian topologies | ≥ 99% succeed ≤ 14 days; ≤ 0.01% fraudulent | — | **Blocked** — recovery not implemented |
| TC-2701 | ADV-11 · RISK-11 | Guardians collude to seize an account | 7-day timelock + owner veto + public notice defeat it | — | **Blocked** |
| TC-2710 | ADV-12 · RISK-12 | One corrupt population source | Median absorbs it | adversarial · UT-0330 | Pass (inh.) |
| TC-2711 | ADV-12 · RISK-12 | **Denominator swung under a live petition** | Drift limit rejects it | adversarial · UT-0331 | Pass (inh.) |
| TC-2712 | ADV-12 · RISK-12 | New denominator pushed inside its dispute window | Refused | adversarial · UT-0332 | Pass (inh.) |
| TC-2713 | ADV-12 · RISK-12 | Fewer than five sources supplied | Refused | adversarial · UT-0333 | Pass (inh.) |
| TC-2714 | ADV-12 · RISK-12 | **Oracle deflated to zero** to make activation trivial | Verified-resident and 500 floors bind | protocol · UT-0024; adversarial · UT-0334 | **Pass (obs.)** / Pass (inh.) |
| TC-2715 | ADV-12 · RISK-12 | All "independent" sources are supplied by one authority | Independence enforced | — | **No mechanism — OPEN-12**: `submitPopulation` is `onlyTimelock`. Only source *identity recording* is testable |
| TC-2720 | ADV-13 · RISK-13 | Demand to delete a published record | No selector, no bytecode path, no endpoint deletes it | adversarial · UT-0310, UT-0301 | Pass (inh.) |
| TC-2721 | ADV-13 · RISK-13 | Content filtered without a public log entry | Refused | — | **No mechanism** — the filtering register does not exist |
| TC-2730 | ADV-14 · RISK-14 | Product presented as conducting a binding state election | CON-001 boundary stated on every public surface | — | **Manual — not run** |
| TC-2740 | ADV-15 · RISK-15 | Threshold set so high no party ever activates | Calibration reviewed against month-3 enrolment | — | **Blocked — OI-01** undecided (calibration method, not the number) |
| TC-2750 | ADV-16 · RISK-16 | **`FeatureFlags` blast radius**: disable a flag governing an open ballot / a passed proposal awaiting execution | Disable MUST NOT stop an in-flight ballot, block execution of a passed proposal, alter a result, or enable anything | adversarial · UT-0360, UT-0361 | Pass (inh.) — **partial**: (c) and (d) and the "cannot stop a vote already under way" half are covered; **the prevention `NFR-020` requires is still absent (OPEN-03)** |
| TC-2751 | ADV-16 · RISK-16 | Emergency control used to *add* power | Only `disable` exists | adversarial · UT-0312 | Pass (inh.) |
| TC-2752 | ADV-16 · RISK-16 | Exit works: full export → reconstitute → identical roots | Exit is a real path, exercised in CI | — | **Blocked** — not built |

### 5.1 `TS-EXPL` and `TS-UAT` (TC-3200–TC-3253)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-3200–TC-3209 | One time-boxed exploratory charter per epic `EP-01`…`EP-10`, focused on interrupted flows, clock skew, back-button and multi-device state | all | **Blocked** — needs a deployed environment; no charter has been run |
| TC-3250 | ≥ 80% of first-time non-technical users complete enrol → endorse unaided in ≤ 10 min | NFR-022 | **Manual — not run** (n ≥ 200 per launch locale) |
| TC-3251 | System Usability Scale ≥ 75 | NFR-022 | **Manual — not run** |
| TC-3252 | Support-contact rate ≤ 5% of enrolments | NFR-022 | **Manual — not run** |
| TC-3253 | Doc 01 §B end-to-end citizen journey walkthrough | BR-007 | **Manual — not run** |

---

## 6. Coverage checklist (Doc 07 template §3)

| Check | Verdict |
|---|---|
| Every Must FR has ≥ 1 functional case | **Yes** — all 54 Must FRs have at least one `TC`. The 12 new Must FRs (FR-062..073) are covered by TC-3300..TC-3342 in `TS-CR1`; all are Blocked (capabilities not yet implemented in this drop). The original 14 Blocked/No-mechanism cases are unchanged. |
| Every NFR has a measuring case | **Yes for all 26** — but 22 of the 26 measuring cases cannot execute today. |
| Every SDD §11 failure mode has a negative/edge case | **Yes** — all 26 §11 rows map to a `TS-EDGE` or `TS-ADV` case (TC-1001…TC-1048, TC-2600…TC-2752). |
| Boundary values covered (min, max, just-over, empty, null) | **Yes** — exact tie (TC-1028), 999/1000 anonymity (TC-1950/1953), tenure ±1 s (TC-1031), ±5% drift (TC-1012), 5-source minimum (TC-1013), 100% overshoot (TC-0025). |
| Error & timeout paths covered | **Partial** — every contract custom error is provoked by name; network/timeout paths need an environment (Blocked). |
| Idempotency / retry / concurrency covered | **Partial** — TC-1047 (duplicate log), TC-1033 (execution retry) is Blocked, TC-2382 (exactly-once offline submit) is Blocked. |
| Security: authN, authZ/IDOR, injection, encryption | **Partial** — negative-authority and capability-absence are strong (TC-1600–1614, TC-1850–1861); penetration test not run (TC-1863). |
| Accessibility: automated scan + screen-reader/focus | **No** — TC-2250/2251/2252/2255 all Blocked or Manual-not-run. Two component-level cases exist and **were executed green at file granularity** in run R-17 (`apps/web` 95/95, 2026-09-06); no case-by-case accessibility pass has been made, so neither is promoted (**TD-07-03**). The verdict is unchanged — there is still no automated a11y scan and no screen-reader/focus pass. _(v2.6.0, ISS-07: this row read "were not executed", which is exactly the reading §0.1’s v2.5.0 amendment exists to prevent.)_ |
| Rollback / kill-switch covered | **Partial** — the kill-switch *blast radius* is partly pinned (TC-1610, TC-2751); the rollback drill (TC-2425) and the open-ballot freeze (TC-2426) are not. |

---

## 7. Test data management

- **No real personal data in any environment, including a developer laptop** (CON-002, Doc 04 §11).
  All identities in every suite are synthetic and generated deterministically from a fixed seed.
- **Fixtures.** `packages/contracts/test/fixture.mjs` deploys the whole protocol in-process per test
  (a fresh `Chain` per test — Doc 04 does not rely on snapshot/revert for isolation).
  `packages/contracts/test/support/` holds the shared builders.
- **Determinism.** Fixed genesis timestamp, deterministic accounts, no wall clock, no randomness
  (Doc 06 §2.6). Time is advanced with `Chain.warp()`; assertions are on **timestamp**, never block
  number.
- **Generation.** Population, region and membership fixtures are generated from the ranges in
  `packages/protocol/src/constants.js`, so a change to a governance constant changes the fixtures
  rather than silently invalidating them.
- **Refresh.** Fixtures are rebuilt on every run; there is no persisted test database to drift.
- **Masking.** Not applicable — there is nothing to mask, which is the point of `FR-003`/`NFR-010`.

---

## 8. Automation mapping (case → implementing test)

| Package / app | File(s) | `UT` range | Cases mapped | Executed this session |
|---|---|---|---|---|
| `packages/protocol` | `test/governance.test.js`, `test/party-and-regions.test.js` | UT-0001…UT-0055, **UT-0888** | 39 | **Yes — 82/82 pass** (2026-08-09); **151/151 protocol pass in R-17** (2026-09-06), including UT-0888 |
| `packages/contracts` | `test/lifecycle.test.mjs` | UT-0100…UT-0125 | 21 | No — inherited (Doc 06) |
| `packages/contracts` | `test/governance.test.mjs` | UT-0200…UT-0230 | 10 | No — inherited |
| `packages/contracts` | `test/adversarial.test.mjs` | UT-0300…UT-0361 | 27 | No — inherited |
| `packages/contracts` | `test/differential.test.mjs` | UT-0400…UT-0420 | 6 | No — inherited |
| `packages/contracts` | `test/deployment-safety.test.mjs` | UT-0600…UT-0612 | 6 | No — inherited (**absent from the Doc 06 §3 inventory — TD-07-01**) |
| `apps/web` | `test/safety-surfaces.test.tsx` | UT-0700…UT-0742, **UT-0887**, **UT-0889**, **UT-0890** | 14 | **Yes at file granularity — `apps/web` 95/95 pass in R-17** (2026-09-06), which is the first tester-executed run of this file. UT-0887 → TC-3564..TC-3567 recorded **Pass (inh.)**; the 15 pre-existing rows stay *Not run* pending a case-by-case pass (**TD-07-03**). (**Range absent from the Doc 06 §3 inventory until v2.5.0 — TD-07-01**; UT-0887 IS listed there) _(v2.7.0: **UT-0889** added — 5 `it`s → TC-3570..TC-3574, recorded **Pass (obs.)** on run **R-18** plus a case-by-case verbose re-run of that block; it IS listed in the Doc 06 v2.6.0 §3 inventory. **v2.8.0, ISS-03: the block has SIX `it`s, not five.** Doc 06 **v2.7.0 (Approved)** added a DES-085 jargon scan ahead of the five mapped ones and records the change in terms ("UT-0889 row and Total updated (5 → 6; 624 → 625)"). The sixth is mapped to **TC-3576** at this version, so "one TC per `it`" describes the block again; all six were observed green `it` by `it` in run **R-19**. **TC-3575 maps to no test in this table, by design** — its instrument does not exist. **The `14` in the Cases-mapped column is NOT advanced, and that is a decision, not an oversight:** it is a pre-UT-0887 figure that was already left unadvanced when TC-3564..TC-3567 were minted at v2.5.0, and adding to a base that does not reconcile would replace one unexplained number with another. It is named here as stale and belongs to the `TD-RTM-02` recount, which is owed and not attempted at this version.)_ _(v2.9.0: **UT-0890** added — **15** `it`s in five lettered groups (A flag posture, B flag-off DOM, C flag-on intact, D the new copy is itself honest, E the Arabic mirror) → **TC-3577..TC-3591**, one TC per `it`, all **Pass (obs.)** on run **R-20** (2026-09-20, 640/640 on a clean tree) plus the case-by-case verbose re-run, 15 green individually. It IS listed in the Doc 06 **v2.8.1** §3 inventory, Count **15**, suite total **640** — read against the repository, not taken from the document: the `describe` block begins at `apps/web/test/safety-surfaces.test.tsx` line **430** and its fifteen `it`s were counted there. **The `14` in the Cases-mapped column is AGAIN not advanced, and for the reason v2.8.0 gave, not a new one:** it is a pre-UT-0887 figure on a base that does not reconcile, it was already left unadvanced when TC-3564..TC-3567 and TC-3570..TC-3576 were minted, and adding 15 to a number nobody can derive would replace one unexplained figure with a larger one. It stays named as stale and belongs to the `TD-RTM-02` recount, which is owed and again not attempted here.)_ |
| `services/indexer` | `test/projection.test.js` | UT-0500…UT-0525 | 12 | **Yes — 16/16 pass** |
| `packages/sdk` | 8 files | UT-2500…UT-2623 | 13 | **Yes — 124/124 pass** |
| `packages/ui` | `test/PrivacyStatus.test.tsx` | UT-0750…UT-0759, **UT-0903** | 9 | **Yes — 14/14 pass** (2026-08-25); **18/18 pass in R-17** (2026-09-06) after UT-0759 added 4 tests at Doc 06 v2.5.1; **25/25 pass in R-21** (2026-09-21) after UT-0903 added 7 at Doc 06 v2.10.0, and the UT-0903 block was re-run `it` by `it` (**7 passed, 18 skipped**) → TC-3613 |
| `packages/sdk` | `test/seams.test.js` | UT-0760…UT-0779 | 9 | **Yes — 36/36 pass** (sdk total 160/160; 2026-08-25) |
| `packages/protocol` | `test/party-creation.test.js` | UT-0060…UT-0086 | 27 | **No — inherited from Doc 06 v2.2.0 Approved** (44 tests, all green) |
| `packages/sdk` | `test/party-creation.test.js` | UT-0780…UT-0818, UT-0831 | 29 | **Inherited from Doc 06 v2.3.2 Approved** (38 tests, all green); file observed 38/38 in the 2026-08-29 full-suite run (R-12) |
| `apps/web` | `test/party-creation.test.tsx` | UT-0841…UT-0857 | 28 | **No — inherited from Doc 06 v2.2.0 Approved** (27 tests, all green) |
| `packages/sdk` | `test/membership.test.js` | UT-0819…UT-0830 | 12 | **Inherited from Doc 06 v2.3.2 Approved** (22 tests, all green); file observed 22/22 in the 2026-08-29 full-suite run (R-12) |
| `apps/web` | `test/join-membership.test.tsx` | UT-0858…UT-0870 | 13 | **Inherited from Doc 06 v2.3.2 Approved** (27 tests, all green); file observed 27/27 in the 2026-08-29 full-suite run (R-12) |
| `apps/web` | `test/sdk-types-sync.test.ts` | UT-0871 | 1 | **3 / 3 pass, `it` by `it`** in **R-22** (2026-09-21) — **the file is 3 `it`s, not 1**. `UT-0871` is one **parameterised** `it` over a seam list, and Doc 06 **v2.10.0** added `IProposalStore` and **`ICandidateStore`** to it (§7 item 23) — **this is the eighteenth block of the candidate-selection drop and the +2 in 640 + 97 + 2 = 739**. Previously: inherited from Doc 06 v2.3.2 Approved (1 test, green), file observed 1/1 in R-12. Cased by **`TC-3540`**, whose scope is widened to all three seams at v2.11.0 _(ISS-01)_ |
| `packages/protocol` | `test/proposals.test.js` | UT-0087…UT-0095 | 9 | **Inherited from Doc 06 v2.4.1** (24 tests, all green); observed 150/150 protocol in the 2026-08-29 full-suite run (R-15) |
| `packages/sdk` | `test/proposals.test.js` | UT-0832…UT-0848 | 17 | **Inherited from Doc 06 v2.4.1** (24 tests, all green); observed 244/244 sdk in R-15 |
| `apps/web` | `test/proposals.test.tsx` | UT-0872…UT-0886 | 15 | **Inherited from Doc 06 v2.4.2** (20 tests, all green); observed 91/91 web in R-16 |
| `packages/protocol` | `test/candidates.test.js` | UT-0891…UT-0895 | 10 | **Yes — 27/27 pass, `it` by `it`** in R-21 (2026-09-21); protocol **178/178** in the same run → TC-3592..TC-3599, **TC-3407** (UT-0891, UT-0894), **TC-3411** (UT-0895) _(v2.11.0, ISS-04: the two re-statused TS-GOV2 cases are counted automated in §2 and §10 and were mapped in no §8 row, so §8 no longer reconciled with the 290; mapped here, "Cases mapped" 8 → **10**)_ |
| `packages/sdk` | `test/candidates.test.js` | UT-0896…UT-0902 | 15 | **Yes — 43/43 pass, `it` by `it`** in R-21; sdk **287/287** in the same run → TC-3600..TC-3612, **TC-3407** (UT-0896, UT-0899, UT-0901), **TC-3411** (UT-0897) _(v2.11.0, ISS-04: "Cases mapped" 13 → **15**)_ |
| `apps/web` | `test/candidates.test.tsx` | UT-0904…UT-0907 | 7 | **Yes — 20/20 pass, `it` by `it`** in R-21; web **138/138** in the same run → TC-3614..TC-3619, **TC-3411** (UT-0904) _(v2.11.0, ISS-04: "Cases mapped" 6 → **7**)_ |
| `packages/circuits` | — | UT-2000…UT-2499 (reserved) | 0 | **No suite exists — circuits uncompiled** |

**Orphan check (v2.2.1 — re-run after 07-test-cases-suites-v2.2.0-technical-cycle1.md ISS-01 rework).** The cycle-1 review found UT-0753 (`packages/ui/test/PrivacyStatus.test.tsx` — accessible-name check) was a material orphan: it executed in the 14/14 UI run but had no TC mapping. TC-3488 is added in this rework (v2.2.1) to close that gap. **Sweep result (UT-0750..0758 and UT-0760..0779):** after TC-3488 maps UT-0753, all UTs in UT-0750..0758 are covered: UT-0750→TC-3470, UT-0751→TC-3471, UT-0752→TC-3472, UT-0753→TC-3488, UT-0754/0755/0756→TC-3473, UT-0757→TC-3474, UT-0758→TC-3475. All UTs in UT-0760..0779 are covered by TC-3477..TC-3486 as a group (9 TCs, 36 seam tests). **Material orphan count after TC-3488: 0.**

**Orphan check (v2.4.0 — proposals & debate drop).** Every UT in the drop is mapped: UT-0087/0088→TC-3542; UT-0089→TC-3543; UT-0090→TC-3552; UT-0091/0092→TC-3553; UT-0093→TC-3554; UT-0094→TC-3551, TC-3555; UT-0095→TC-3547, TC-3548; UT-0832→TC-3543, TC-3547; UT-0833→TC-3546; UT-0834→TC-3545; UT-0835→TC-3548; UT-0836/0837→TC-3549; UT-0838→TC-3551; UT-0839/0840→TC-3555; UT-0841→TC-3552; UT-0842→TC-3554; UT-0843/0844→TC-3556; UT-0845→TC-3558; UT-0846/0847/0848→TC-3559; UT-0872/0873→TC-3544; UT-0874..0877→TC-3550; UT-0878→TC-3552; UT-0879→TC-3554; UT-0880→TC-3555; UT-0881/0882→TC-3557; UT-0883→TC-3560; UT-0884→TC-3561. **Material orphan count for this drop: 0.** Every id was read in its test file and its assertions checked against the TC text. **v2.4.1 addendum:** UT-0885→TC-3562, UT-0886→TC-3563 — both read in file; orphan count remains **0**.

**Orphan check (v2.3.0 — join/membership drop).** Sweep over the drop's full UT set. Every one is mapped: UT-0819→TC-3517, UT-0820→TC-3518, UT-0821→TC-3523, UT-0822→TC-3524, UT-0823→TC-3521, UT-0824→TC-3526, UT-0825→TC-3528, UT-0826→TC-3530, UT-0827→TC-3531, UT-0828→TC-3532, UT-0829→TC-3536, UT-0830→TC-3532, UT-0831→TC-3539, UT-0858→TC-3519, UT-0859→TC-3525, UT-0860→TC-3522, UT-0861→TC-3527, UT-0862→TC-3529, UT-0863→TC-3533, UT-0864→TC-3534, UT-0865→TC-3533, UT-0866→TC-3520, UT-0867→TC-3537, UT-0868→TC-3538, UT-0869→TC-3535, UT-0870→TC-3538, UT-0871→TC-3540. **Material orphan count for the join/membership drop: 0.** Every UT id above was read in its test file and its assertions checked against the TC text — none was taken from a summary. No `TC` in this document cites a `UT-####` that does not exist in the repository; every `UT` cited above was located by identifier in a real test file. Conversely, the `UT` inventory in Doc 06 §3 omits two real ranges — recorded as TD-07-01, not silently absorbed.

**Orphan check (v2.5.0 — FR-131 honesty drop, Doc 06 v2.5.1 / commit `0a5c542`).** Sweep over the drop’s full UT set, every id read in its test file rather than taken from a summary. **`UT-0887`** (`apps/web/test/safety-surfaces.test.tsx`, 4 assertions) → **TC-3564** (banned words only when negated; never "private"/"secure"), **TC-3565** (FR-131 (a)/(b)/(c) stated; retired claims absent), **TC-3566** (the guard is bound to the shipped `en.ts` strings), **TC-3567** (the Arabic mirror carries the same truth) — one TC per assertion, because each is an independently defeatable guard. **`UT-0759`** (`packages/ui/test/PrivacyStatus.test.tsx`, 4 assertions over the `ver` **title** four-path) → **TC-3568**, one TC for the block, matching the TC-3475/UT-0758 treatment of the **subtitle** four-path in the same component. **`UT-0888`** (`packages/protocol/test/party-and-regions.test.js`, 1 assertion) → **TC-3569**. **Material orphan count for this drop: 0.** Two pre-existing mappings were also re-checked because the drop changed what their tests assert, and neither became stale: **`UT-0751`** → TC-3471 and **`UT-0753`** → TC-3488 both changed their expected `ver` title from "Verified — private" to "Verified"; both TC rows are written at a level the change does not falsify, and both now carry a v2.5.0 note saying so rather than relying on a reader to notice. No `TC` in this document cites a `UT-####` that does not exist in the repository. **Caveat inherited, not resolved here:** Doc 08 §10 `TD-RTM-01` records that `UT-0841`..`UT-0848` are each **defined twice** (`apps/web/test/party-creation.test.tsx` and `packages/sdk/test/proposals.test.js`), so any id-matching sweep is unsound for those eight. None of the six new cases cites one of them, so this drop’s zero is unaffected; renumbering is **engineer** scope and the defect stays open.

**Orphan check (v2.7.0 — FR-131 clause (e) drop, Doc 06 v2.6.0 / branch `build/v1-cascade-and-release-prep`).** One new `UT` in the drop, read `it` by `it` in its test file rather than taken from the engineer's note. **`UT-0889`** (`apps/web/test/safety-surfaces.test.tsx`, **5** `it`s) → **TC-3570** (en `home.steps[1].body`), **TC-3571** (en `home.promises[0]`), **TC-3572** (both strings bound to the rendered landing page), **TC-3573** (the Arabic mirror), **TC-3574** (the sdk authorship-refusal message) — **one TC per `it`**, following the UT-0887/TC-3564..TC-3567 precedent, because each `it` is an independently defeatable guard over a different string on a different surface. **Material orphan count for this drop: 0.** **The converse is also recorded, because it is the finding that matters: TC-3575 is an intentional reverse-orphan** — an acceptance criterion (Doc 02 §8 FR-131 Scenario 9) with **no** `UT`, because the instrument it needs (Doc 04 §0.5 S5) is not built. A `TC` with no `UT` is not an orphan defect in this document's sense; it is a Blocked case, and it is the only honest way to carry a criterion that no test executes. **Reverse sweep over the strings the drop changed, because a copy change can stale a `TC` that never cites the `UT`:** `apps/web/src/i18n/en.ts` (`home.steps[1].body`, `home.promises[0]`), `apps/web/src/i18n/ar.ts` (the two mirrors), `packages/sdk/src/proposals.js` (`AUTHORSHIP_REQUIRES_WORKER_TIER`), `apps/web/src/components/ProposalsAndDebate.tsx` (doc comment) and `packages/protocol/src/proposals.js` (FR-082 markers) were each grepped across this document and Doc 08 in their retired wording — "kept private", "never learn", "Supporters are anonymous". **One hit, corrected at this version: TC-3543**, whose expected result said the Supporter refusal's "stated reason is *anonymity*". It cites UT-0089 and UT-0832, neither of which asserts the message clause that changed (UT-0089 asserts `canAuthorProposal(SUPPORTER) === false`; UT-0832 asserts the error `code` and that the message contains "self-declared"), **so the case still passes and its status is unchanged** — the defect was in the description and it is fixed in §5.5 rather than left for a reader to trip over. No other row in either document quoted or paraphrased a changed string. **v2.8.0 re-sweep, ISS-03 — the paragraph above was written against Doc 06 v2.6.0 and the file has since settled.** `UT-0889` now has **6** `it`s: Doc 06 **v2.7.0 (Approved)** added a **DES-085 jargon scan** as the first `it`, asserting that both corrected landing strings carry none of the eleven banned blockchain words. It is mapped to **TC-3576** at this version, so the mapping is `UT-0889` → **TC-3570..TC-3574 + TC-3576**, six `it`s to six cases, and **"one TC per `it`" is true of the block again**. **Material orphan count for this drop: 0 — and now truly**; between v2.7.0 and this version it was **1**, and saying so is cheaper than implying the zero was always right. The v2.7.0 sweep was not wrong when written — it was scoped and dated to the v2.6.0 drop — but a sweep that stops being true of the file is a sweep worth re-running, which is the whole point of ISS-03. **The reverse-orphan note stands unchanged:** `TC-3575` still deliberately cites no `UT`. **Caveat inherited, not resolved here:** Doc 08 §10 `TD-RTM-01` (the `UT-0841`..`UT-0848` double definition) still makes id-matching unsound for those eight; none of the six new cases cites one of them, so this drop's zero is unaffected.

**Orphan check (v2.9.0 — the `/verify` flag-gate drop, Doc 06 v2.8.1 / `HEAD` `18244e8`).** One new `UT` in the drop, read `it` by `it` in its test file rather than taken from the engineer's note or from Doc 06 §3. **`UT-0890`** (`apps/web/test/safety-surfaces.test.tsx`, `describe` opening at line **430**, **15** `it`s) → **TC-3577** (`isEnabled('enrolment_ui', …)` defaults), **TC-3578** (`permanentFlags()` stays empty), **TC-3579** (the description cites CON-015 and FR-132), **TC-3580** (the flag-off placeholder renders all four new strings), **TC-3581** (the five retired enrolment claims are absent from the DOM), **TC-3582** (the enrolment controls are absent), **TC-3583** (`SiteHeader` emits no `/verify` anchor), **TC-3584** (flag-on, the screen and nav link are intact), **TC-3585** (no FR-131 banned word in the four new `en.verify.*` values), **TC-3586** (no DES-085 jargon in them), **TC-3587** (the H-17/H-15/CON-015 facts are stated), **TC-3588** ("nobody is checked at all"), **TC-3589** (`ar.verify` and `en.verify` share a key set), **TC-3590** (the Arabic mirror is complete and is not a copy-paste), **TC-3591** (no Latin-script banned word in the Arabic values) — **one TC per `it`**, the UT-0887/TC-3564..TC-3567 and UT-0889/TC-3570..TC-3576 precedent, because each `it` is an independently defeatable guard. **The count was verified twice and by two methods**: fifteen `it(` occurrences inside the `describe`, and **15 passed / 26 skipped (41)** from the verbose run. **Material orphan count for this drop: 0.** **No reverse-orphan this time** — unlike TC-3575, every one of the fifteen cites a real `it`, and no acceptance criterion in this drop lacks an instrument. **Reverse sweep over the strings the drop changed, because a copy change can stale a `TC` that never cites the changed `UT`:** the five retired `/verify` claims ("never leaves your phone", "and nothing else", "cannot be traced back to you", "never run by a government", "Everything happens on your phone") were grepped across this document and Doc 08 in their retired wording. **Zero hits in either document** — no existing `TC` or RTM row ever quoted or paraphrased the `/verify` copy, which is itself the finding: the route carried an unbuilt guarantee on a public surface for the whole life of both documents and **no case named it** until now. **Caveat inherited, not resolved here:** Doc 08 §10 `TD-RTM-01` (the `UT-0841`..`UT-0848` double definition) still makes id-matching unsound for those eight ids; **none of the fifteen new cases cites one of them**, so this drop's zero is unaffected.

**Orphan check (v2.10.0, re-run and CORRECTED at v2.11.0 — the candidate-selection drop, Doc 06 v2.11.1 / `HEAD` `12fe4a6`).** **Eighteen** new or extended `UT` blocks _(v2.11.0, **ISS-01**: **this sweep said seventeen and was computed over seventeen.** The drop's footprint is eighteen blocks in **five** files; the eighteenth is `UT-0871`, extended to `IProposalStore` and **`ICandidateStore`** at Doc 06 **v2.10.0** in `apps/web/test/sdk-types-sync.test.ts`. **A sweep that reports "material orphan count 0" over an incomplete basis is worth less than no sweep**, because it buys confidence it has not earned — which is why the correction is made here, at the sweep, and not only in the changelog.)_ — every one read `it` by `it` in its test file rather than taken from Doc 06 §3 or from the architect's evidence map. **The sweep is stated as a falsifiable enumeration, not as a count of files opened.** **Forward sweep — `UT` → `TC`, all eighteen mapped, none orphaned:** `UT-0891` → **TC-3592, TC-3593** _(and **TC-3407**)_ · `UT-0892` → **TC-3594** · `UT-0893` → **TC-3595, TC-3596** · `UT-0894` → **TC-3597, TC-3598** _(and **TC-3407**, v2.11.0 ISS-06)_ · `UT-0895` → **TC-3599** _(and **TC-3411**)_ · `UT-0896` → **TC-3600, TC-3601, TC-3602** _(and **TC-3407**)_ · `UT-0897` → **TC-3603, TC-3604, TC-3605** _(and **TC-3411**)_ · `UT-0898` → **TC-3606** · `UT-0899` → **TC-3607** _(and **TC-3407**)_ · `UT-0900` → **TC-3608, TC-3609** · `UT-0901` → **TC-3610, TC-3611** _(and **TC-3407**)_ · `UT-0902` → **TC-3612** · `UT-0903` → **TC-3613** · `UT-0904` → **TC-3614** _(and **TC-3411**)_ · `UT-0905` → **TC-3615, TC-3616** · `UT-0906` → **TC-3617, TC-3618** · `UT-0907` → **TC-3619** · **`UT-0871` (the eighteenth) → `TC-3540`**, whose scope is widened at v2.11.0 from `IPartyStore` alone to **all three seams**. **Material orphan count for this drop: 0 — now over the full basis.** **Ruling on the eighteenth block, stated rather than absorbed:** `UT-0871` is **one parameterised `it` over a seam list**, so the drop added **two more instances of a guarantee `TC-3540` already states**, not a new guarantee. **No case is minted**, the designed count stays **521**, and widening the existing case is the honest record — minting two cases for a widened loop would inflate coverage that did not grow. **`it`-level sweep, because a block-level zero can hide a lost assertion.** The 97 `it`s of the seventeen candidate blocks partition across the 28 `TS-CANDIDATE` cases with **no `it` cited twice and none omitted**: 6 = 5 + 1 · 5 · 4 = 2 + 2 · 7 = 5 + 2 · 5 · 10 = 8 + 1 + 1 · 9 = 4 + 1 + 4 · 6 · 4 · 5 = 3 + 2 · 6 = 4 + 2 · 3 · 7 · 4 · 5 = 4 + 1 · 7 = 4 + 3 · 4. Sub-totals **27 + 43 + 7 + 20 = 97**, matching the four case-by-case runs in R-21. **`UT-0871`'s 3 `it`s are the +2 over the previous 1**, verified case by case in **R-22** (3 passed / 3), so the drop's full `it` arithmetic closes: **640 + 97 + 2 = 739**. **Reverse sweep — acceptance criteria with no instrument.** Doc 02 §8's Gherkin for the nine candidate FRs was read scenario by scenario against the 28 cases. **Five criteria have no executing test. TWO of the five are carried by NO case at all, and that is stated plainly rather than assigned a carrier that does not exist** _(v2.11.0, **ISS-02** — the correction that mattered most. The previous sweep asserted "each is carried by an existing **Blocked** case" for all four it then listed, and cited `TC-3320`/`TC-3612` for FR-039. **Both ids were wrong and the claim was wrong:** `TC-3612` carries no FR-039 note; `TC-3611` does and it is **Pass (obs.)**, not Blocked; `TC-3320` is an FR-067 case blocked on an on-chain advancement guard. A grep of every FR-039 mention in this document returns only `TC-1024` (Pass) and `TC-3611` (Pass). **The ids are dropped rather than corrected, because no correct id exists** — and the document already knew how to say this: it says it, correctly, for FR-081.)_: **(1) FR-039's "a member resident outside R attempts to vote → refused as out-of-scope" and its tie-break immutability — NO CASE.** The office ballot is unbuilt (DES-076 rule 2) and **there is no tie-break field in the election record at all**; `TC-3611` covers the timetable-and-lock half, says so, and **passes** — a passing case is not a carrier for an unbuilt clause. **(2) FR-081's "every tier transition … with its state (active/inactive)" — NO CASE**, on the same footing: no field, no read, no `it`, and **no case is minted**, because minting one Pass would fabricate coverage and minting one Blocked would imply the missing thing is an instrument when it is the product. **(3) FR-065's "no vote is linkable to its caster"** (Definition-B) — carried by **`TC-3316`**, Blocked. **(4) FR-067's "the attempt is refused *and logged*", the logging half** (DES-067 rule 6) — carried by **`TC-3322`**, Blocked. **(5) FR-093's question-phase scenarios** (DES-108 rule 3(a) unbuilt) — carried by **`TC-3419`**, Blocked. **Three real carriers, two case-less clauses.** Each of the five is the named blocker on its Must row in Doc 08 **v2.13.0**, and **Doc 08's §3.1 FR-039 row and §7 entry 19 were checked for this defect and are CLEAN** — they cite `TC-0030`, `TC-1024`, `TC-3611` and make no Blocked-carrier claim. **Doc 08's v2.13.0 Changelog entry DOES repeat the claim** (as "`TC-3320`/`TC-3611`'s note") and is corrected in the Doc 08 rework, **not from here**, because Doc 08 is mid-review. **Caveat inherited, not resolved here:** Doc 08 §10 `TD-RTM-01` (the `UT-0841`..`UT-0848` double definition) still makes id-matching unsound for those eight ids; **none of the eighteen blocks is one of them**, so this drop's zero is unaffected.

---

## 9. Execution log

| Run | Date | Build / commit ref | Suite | Result | Defects raised |
|---|---|---|---|---|---|
| R-01 | 2026-08-09 | trunk `claude/decentralized-political-party-fy8b1k` | `packages/protocol` (L0) | **82 / 82 pass**, 494 ms | none |
| R-02 | 2026-08-09 | same | `services/indexer` | **16 / 16 pass**, 467 ms | none |
| R-03 | 2026-08-09 | same | `packages/sdk` | **124 / 124 pass**, 2.35 s | none |
| R-04 | 2026-08-25 | trunk `design/formalize-design-system` | `packages/ui` | **14 / 14 pass** | none |
| R-05 | 2026-08-25 | same | `packages/sdk` | **160 / 160 pass** (124 existing + 36 new seam tests) | none |
| R-06 | 2026-08-25 | Doc 06 v2.2.0 Approved | `packages/protocol/test/party-creation.test.js` | **44 / 44 pass** — not executed this session; inherited from Doc 06 v2.2.0 Approved (all green) | — |
| R-07 | 2026-08-25 | Doc 06 v2.2.0 Approved | `packages/sdk/test/party-creation.test.js` | **37 / 37 pass** — not executed this session; inherited from Doc 06 v2.2.0 Approved (all green) | — |
| R-08 | 2026-08-25 | Doc 06 v2.2.0 Approved | `apps/web/test/party-creation.test.tsx` | **27 / 27 pass** — not executed this session; inherited from Doc 06 v2.2.0 Approved (all green) | — |
| R-09 | 2026-08-29 | Doc 06 v2.3.2 Approved (f70292a) | `packages/sdk/test/membership.test.js` | **22 / 22 pass** — observed in the full-suite run (R-12); TC status recorded Pass (inh.) against the Doc 06 pin | none |
| R-10 | 2026-08-29 | same | `apps/web/test/join-membership.test.tsx` | **27 / 27 pass** — observed in R-12 | none |
| R-11 | 2026-08-29 | same | `apps/web/test/sdk-types-sync.test.ts` (UT-0871 shim guard) | **1 / 1 pass** — observed in R-12 | none |
| R-13 | 2026-08-29 | Doc 06 v2.3.2/v2.3.3 Approved | `packages/sdk/test/party-creation.test.js` (UT-0780..0818 + UT-0831) | **38 / 38 pass** — inherited from Doc 06 Approved; confirmed green in R-12 and again in R-14. _(Added v2.3.1 — cycle-1 ISS-02: the file was covered by §0.2 and the R-12 aggregate but lacked the per-file row the v2.2.2 R-06/R-07/R-08 pattern sets.)_ | none |
| **R-12** | 2026-08-29 | same | **whole repository — `npm test` from the repo root** | **542 / 542 pass, 0 failed** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 · web 71. Run by the tester while performing the Doc 06 v2.3.2 cycle-3 document review; dep-guard clean; `tsc --noEmit` exit 0 in `apps/web` and `packages/ui` | none |
| **R-16** | 2026-08-29 | Doc 06 v2.4.2 (In Review) | `apps/web` (proposals consent rework) | **91 / 91 pass** — web 89→91 with UT-0885/UT-0886; suite total 608→**610**. Run by the tester while re-assessing FR-080 | none |
| **R-15** | 2026-08-29 | Doc 06 v2.4.1 (In Review) · commit c04b4f2 | **whole repository — `npm test` from the repo root** | **608 / 608 pass, 0 failed** — contracts 95 · protocol **150** · sdk **244** · ui 14 · indexer 16 · web **89**. Executed by the tester while authoring TS-PROPOSALS; per-file: protocol `proposals.test.js` 24/24, sdk `proposals.test.js` 24/24, web `proposals.test.tsx` 18/18 | none |
| **R-14** | 2026-08-29 | Doc 03 v2.8.1 Approved · Doc 07 v2.3.1 rework | **whole repository — `npm test` from the repo root** | **542 / 542 pass, 0 failed** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 · web 71. Re-run to confirm the v2.3.1 documentation corrections changed no behaviour: the FR-077 rows were misdescribed, not mis-tested | none |
| **R-17** | 2026-09-06 | Doc 06 v2.5.1 Approved · commit `0a5c542` (PR #19, merged to `main`; repo `HEAD` `84e2203`) | **whole repository — `npm test` from the repo root** | **619 / 619 pass, 0 failed**, process exit 0 — contracts 95 · protocol **151** · sdk 244 · ui **18** · indexer 16 · web **95**. Suite total 610 → **619** (+9: UT-0887 4 web, UT-0759 4 ui, UT-0888 1 protocol). Per-package duration: contracts 34.29 s · protocol 505 ms · sdk 1.10 s · ui 767 ms · indexer 571 ms · web 2.81 s. **Executed by the tester** while authoring the FR-131 honesty TC rows; this is the confirmatory full-suite re-run the v2.4.2/v2.4.4 reviews recorded as missing (ISS-01 Low, now discharged). Working tree clean apart from `artifacts/memory-index.json`; `apps/web/tsconfig.tsbuildinfo` is untracked as of the Doc 06 v2.5.1 `chore(infra)` commit and was **not** dirtied by this run. **Re-confirmed at v2.6.0 (2026-09-06, cycle-2 rework):** the tester re-ran `npm test` from the repo root and got the identical result — **619 / 619 pass, 0 failed**, exit 0, same package split. **No new run id is minted** — an identical re-run of the same commit confirms R-17 rather than adding an observation — and no case is promoted on it | none |
| **R-18** | 2026-09-06 | Doc 06 **v2.6.0 (In Review** — cycle-1 FAIL 94%, 0C/0H/1M/5L; **v2.7.0** rework in progress**)** · branch `build/v1-cascade-and-release-prep`, working tree at `d526910` **plus the uncommitted engineer change set** of artifacts/engineer-2026-09-06T1530-endorsement-copy.md (`en.ts`, `ar.ts`, `sdk/proposals.js`, `ProposalsAndDebate.tsx`, `protocol/proposals.js`, `safety-surfaces.test.tsx`) | **whole repository — `npm test` from the repo root**, then the UT-0889 block **case by case** | **624 / 624 pass, 0 failed**, process exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web **100**. Suite total 619 → **624** (+5: UT-0889, all in `apps/web/test/safety-surfaces.test.tsx`, which goes 20 → 25 tests). Per-package duration: contracts 46.83 s · protocol 432 ms · sdk 1.27 s · ui 796 ms · indexer 386 ms · web 2.79 s. **Second, case-by-case run:** `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web` — **5 passed, 20 skipped (25)**, every `it` name in the UT-0889 block reported green individually. **This is the run that earns TC-3570..TC-3574 their Pass (obs.)**; the full-suite half alone would have earned only Pass (inh.), per the §2 corroboration convention. **Executed by the tester.** **Three honest qualifications.** (1) The run is against an **uncommitted working tree** — 40 dirty paths per `git status --porcelain`, product code among them — not against a merged commit, because reviewer-qa has not signed the merge; R-17 by contrast ran against merged `0a5c542`. A re-run after merge should confirm the same 624, and this row will be re-derived if it does not. (2) The Doc 06 version this run pins is **In Review with an open Medium**; that Medium (ISS-01) is about stale "owed" statements in Doc 06 §7, not about UT-0889, whose assertions were read directly in the file for this version. (3) No case outside the UT-0889 block is promoted on this run: TC-3564..TC-3569 stay **Pass (inh.)**, and **TC-3575 executes nothing** — it has no instrument | none |
| **R-19** | 2026-09-07 | Doc 06 **v2.7.0 (Approved** — 06-coding-and-ut-v2.7.0-technical-cycle2.md, PASS 96%, 0C/0H/0M/3L**)** · branch `build/v1-cascade-and-release-prep`, working tree at `d526910` **plus the still-uncommitted change set** | **whole repository — `npm test` from the repo root**, then the UT-0889 block **case by case** | **625 / 625 pass, 0 failed**, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web **101**. Suite total 624 → **625** (+1: the sixth UT-0889 `it`, the DES-085 jargon scan added at Doc 06 v2.7.0; `safety-surfaces.test.tsx` goes 25 → 26 tests). Per-package duration: contracts 55.84 s · protocol 471 ms · sdk 1.35 s · ui 13.11 s · indexer 459 ms · web 3.79 s. **Second, case-by-case run:** `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web` — **6 passed, 20 skipped (26)**, every `it` name green individually. **This run re-observes TC-3570..TC-3574 after the Doc 06 v2.7.0 narrowing of the Arabic assertion — which is why TC-3573 can be re-cut without a status change — and earns TC-3576 its Pass (obs.)** **Executed by the tester.** **Qualification, unchanged from R-18 and not softened by repetition:** still an **uncommitted working tree** (76 dirty paths per `git status --porcelain`, product code among them) because reviewer-qa has not signed the merge. The post-merge re-run stays owed; two runs against the same unmerged tree are one piece of evidence, not two | none |
| **R-20** | 2026-09-20 | Doc 06 **v2.8.1 (Approved** — 06-coding-and-ut-v2.8.1-technical-cycle2.md, PASS 97%, 0C/0H/0M/3L**)** · `HEAD` `18244e8` ("build/v1 cascade and release prep (#20)"), **and this time the tree is clean**: `git status --porcelain` returns **three** paths — `artifacts/memory-index.json`, `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`, `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md` — **all three session-governance records under `artifacts/`, none of them read by any test, and no product, test, configuration or document path modified** | **whole repository — `npm test` from the repo root**, then the UT-0890 block **case by case** | **640 / 640 pass, 0 failed**, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web **116**. Suite total 625 → **640** (+15: the UT-0890 `/verify` flag-gate guard added at Doc 06 v2.8.0; `safety-surfaces.test.tsx` goes 26 → **41** tests). Per-package duration: contracts 48.14 s · protocol 514 ms · sdk 1.29 s · ui 942 ms · indexer 431 ms · web 2.79 s. **Second, case-by-case run:** `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0890"` in `apps/web` — **15 passed, 26 skipped (41)**, every `it` name green individually, which is what earns TC-3577..TC-3591 their **Pass (obs.)**. **Executed by the tester.** **THE STANDING QUALIFICATION IS DISCHARGED:** R-18 and R-19 were each run against an **uncommitted 76-path working tree** and each recorded a post-merge re-run as owed. That work is now merged at `18244e8` and this run is against it. **The debt R-18 opened and R-19 carried is closed here** — and the figure it closes on is **640**, not the 625 R-19 saw, because the drop under test landed in between | none |
| **R-21** | 2026-09-21 | Doc 06 **v2.11.1 (Approved)** · Doc 03 **v2.16.0 (Approved** — 03-architecture-design-sdd-v2.16.0-technical-cycle2.md, PASS 97%, 0C/0H/0M/2L**)** · `HEAD` `12fe4a6` ("feat(candidates): candidate selection v1 + OPEN-27 PrivacyStatus context-aware anon copy (US-0046..0052, US-0074..0077, US-0091, US-0134) (#22)"), branch `design/candidate-des-definition-a`. **Tree state, enumerated rather than summarised:** `git status --porcelain` returns **nine** paths — `artifacts/memory-index.json` (M), `docs/03-architecture-design-sdd.md` (M, the architect's in-flight v2.16.0), and **seven untracked session records** under `artifacts/` (`architect-2026-09-21T0100-…`, two `reviews/03-architecture-design-sdd-…`, `status/DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md`, `status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`, two `tester-2026-09-21…`). **No product, test or configuration path is modified or untracked**, so every test input is identical to `HEAD`; the single modified non-`artifacts/` path is a **document**, read by no test | **whole repository — `npm test` from the repo root**, then **four** case-by-case runs with `--reporter=verbose`: `test/candidates.test.js` in `packages/protocol`, `test/candidates.test.js` in `packages/sdk`, `test/PrivacyStatus.test.tsx -t "UT-0903"` in `packages/ui`, `test/candidates.test.tsx` in `apps/web` | **739 / 739 pass, 0 failed**, exit 0 — contracts **95** · protocol **178** · sdk **287** · ui **25** · indexer **16** · web **138**. Suite total 640 → **739** (+99, and the arithmetic is spelled out because v2.10.0 got it wrong: **97 + 2 = 99**. The **97** are the candidate blocks `UT-0891`..`UT-0907` in four files. The **2** are `UT-0871` extended to `IProposalStore` and **`ICandidateStore`** at Doc 06 **v2.10.0**, in a **fifth** file — `apps/web/test/sdk-types-sync.test.ts`, 1 `it` → 3. _(**v2.11.0, ISS-01 — corrected.** This cell read "plus the 2 added at Doc 06 **v2.11.0/v2.11.1 that landed inside them**". That pair is the UT-0905 flag-off and UT-0906 sign `it`s, and they are **already inside the 20 web `it`s** of `UT-0904`..`UT-0907` — so the sentence counted the same two `it`s twice and left the real pair unaccounted for. Doc 06 v2.11.1 §3 spends the web addend explicitly: "+ **2 (UT-0871 extended to two more seams, v2.10.0)** + 18 (UT-0904..UT-0907 candidate web flow, v2.10.0) + 2 (UT-0905 flag-off, UT-0906 sign — one each, v2.11.0)". Wrong file, wrong block, wrong version — all three named here, and **R-22** below verifies the pair against the file.)_). Per-package duration: contracts 70.73 s · protocol 580 ms · sdk 1.69 s · ui 999 ms · indexer 425 ms · web 3.26 s. **Second half, four case-by-case runs:** protocol **27 / 27**, sdk **43 / 43**, ui **7 passed / 18 skipped (25)** under `-t "UT-0903"`, web **20 / 20** — **97 `it` names reported green individually**, which is what earns **TC-3592..TC-3619** their **Pass (obs.)** and what promotes **TC-3407** and **TC-3411** from No mechanism. The full-suite half alone would have earned only Pass (inh.), per the §2 corroboration convention, and the convention has not been relaxed for this drop. **Executed by the tester.** **No qualification is carried and none is owed:** unlike R-18 and R-19, this run is not against an uncommitted product tree — the drop under test is **merged at `12fe4a6`** (PR #22) and the nine dirty paths are documents and session records. **TC-3564..TC-3569 are STILL not promoted** — no case-by-case run of UT-0887, UT-0759 or UT-0888 has ever been made, and R-21 did not make one either; **`TD-07-03`'s 15 rows are still not promoted**, for the identical reason | none |
| **R-22** | 2026-09-21 | Doc 06 **v2.11.1 (Approved)** · `HEAD` `12fe4a6` · **Doc 07 rework cycle 2** against 07-test-cases-suites-v2.10.0-technical-cycle1.md (FAIL 91%, 0C/0H/2M/6L, reviewer-qa). Tree state unchanged in kind from R-21: no product, test or configuration path modified or untracked | `npx vitest run test/sdk-types-sync.test.ts --reporter=verbose` in `apps/web` — **the eighteenth block of the candidate-selection drop**, which R-21 did not run case by case because v2.10.0 did not know it was in the drop | **3 passed / 3**, each `it` green individually: `IPartyStore`, `IProposalStore` and **`ICandidateStore`** — the three instances of `UT-0871`'s single parameterised `it`. **This is the run that closes the +2 in 640 + 97 + 2 = 739**, and it confirms the ISS-01 finding **against the file** rather than against Doc 06's summary: the file was **1** `it` at R-20 and is **3** now. **Executed by the tester.** **It deliberately promotes nothing.** `TC-3540` — the only case mapping `UT-0871` — meets this document's Pass (obs.) bar on this run and is **held at Pass (inh.)** anyway, because promoting it moves the observed/inherited buckets in §2 and §10 **and** in Doc 08 §6 and §9, and **Doc 08 v2.13.0 is mid-review**. Moving half of a synchronised pair is the `TD-RTM-02` drift this document already tracks. **Promotion deferred, not denied; owed at the next synchronised Doc 07/08 touch** | none |
| — | 2026-08-09 | same | `packages/contracts` (L1/L2/L3) | **not executed this session** (~5 min); result inherited from Doc 06 §3/§5 | — |
| — | 2026-08-09 | same | `apps/web` (non-party-creation suite) | **not executed this session** | — |
| — | — | — | `packages/circuits` (L4) | **no suite — circuits not compiled** | Blocked by Phase-2 ceremonies |
| — | — | — | every environment-dependent suite (`TS-PERF`, `TS-LOAD`, `TS-COST`, `TS-RES`, `TS-EXIT`, `TS-SMOKE`, `TS-ADV-08/09/11`) | **not run — no devnet, testnet or staging exists** | — |

**Prior defects, closed.** Doc 06 §5 records four defects found by the Doc 04 review of this code
drop — two Critical, two High — all fixed with a named regression test. Those regression tests are
carried here as first-class cases: TC-2603 (`UT-0325/0326`), TC-2600 (`UT-0109/0109b`), TC-2641
(`UT-0109c`), TC-1610 (`UT-0360/0361`). **A regression test whose case is not in the suite is a
defect waiting to come back.**

---

## 10. Exit summary

| Measure | Value |
|---|---|
| Cases designed | **521** (row-anchor count; see §2 convention note and Doc 08 §10 `TD-RTM-02` for the **528** expanded total. +6 at v2.5.0: TC-3564..TC-3569; +6 at v2.7.0: TC-3570..TC-3575; +1 at v2.8.0: TC-3576; +15 at v2.9.0: TC-3577..TC-3591, the UT-0890 block; **+28 at v2.10.0: TC-3592..TC-3619**, the new §5.7 `TS-CANDIDATE` suite over the `UT-0891`..`UT-0907` blocks. _(The expanded total moves 500 → **528** by the same +28 at Doc 08 v2.13.0 §6. **The two conventions still do not reconcile — `TD-RTM-02` is disclosed, not repaired, at this version either**, and advancing both sides by 28 keeps each internally consistent without making them agree.)_ **The ids are drawn from `TC-3592`–`TC-3699`, which Doc 04 v1.7.1 §14 still reserves for the six `TS-V1-*` suites; Doc 04 §14 MUST re-narrow that floor to `TC-3620` at its next touch** — routed to the architect, OPEN-30 pattern.) |
| Cases with an implementing automated test | **290** (56%) — TS-CR1 adds zero automated tests and **TS-GOV2 now adds 2, not 0** (`TC-3407` and `TC-3411`, re-statused at v2.10.0 — DES-107 and DES-028 rule 6 plus the Doc 06 v2.11.1 code gave them a mechanism to test); TS-SCAFFOLD adds 16 (R-04/R-05; TC-3488 added v2.2.1); TS-PARTY adds 28 (R-06/R-07/R-08; inherited from Doc 06 v2.2.0 Approved); TS-MEMBERSHIP adds 24 (R-09..R-12; inherited from Doc 06 v2.3.2 Approved, files observed green in R-12); the FR-131 honesty drop adds 6 (TC-3564..TC-3569; inherited from Doc 06 v2.5.1, files observed green in R-17); **the FR-131 clause-(e) drop adds 5 of its 6** (TC-3570..TC-3574; Doc 06 v2.6.0, observed **case by case** in R-18 — **TC-3575 adds none**, its instrument being unbuilt); **v2.8.0 adds 1** (TC-3576, the sixth UT-0889 `it`, observed case by case in R-19); **v2.9.0 adds 15** (TC-3577..TC-3591, every `it` of the UT-0890 block; Doc 06 v2.8.1, observed **case by case** in R-20); **v2.10.0 adds 30 — 28 minted and 2 re-statused** (TC-3592..TC-3619 over the 97 `it`s of `UT-0891`..`UT-0907`, Doc 06 v2.11.1, observed **case by case** in R-21, **plus** TC-3407 and TC-3411 arriving from No mechanism. This drop adds **no** case without an implementing test and **no** new Blocked case of its own; the single Blocked movement is TC-3419, which arrives from No mechanism) |
| Cases executed and observed passing this session | **139 — 88 + 5 at v2.7.0 + 1 at v2.8.0 + 15 at v2.9.0 + 30 at v2.10.0** (72 from 2026-08-09 + 16 from TS-SCAFFOLD on 2026-08-25 + 5 from the FR-131 clause-(e) drop on 2026-09-06 + TC-3576 on 2026-09-07 + 15 from the `/verify` flag-gate drop on 2026-09-20 + **28 from the candidate-selection drop on 2026-09-21, plus TC-3407 and TC-3411**; TC-3488 maps UT-0753 already in the 14/14 run). TS-PARTY and TS-MEMBERSHIP are **not** counted here — see the §2 corroboration note: their files were observed green in R-12 (2026-08-29, 542/542) but their status is held at Pass (inh.) against the Doc 06 pin. **The same rule is applied to run R-17 (2026-09-06, 619/619 green, tester-executed): file granularity, so the six new TC-3564..TC-3569 are Pass (inh.) and this figure does not move.** Promoting it would make Pass (obs.) mean two different things. **v2.7.0 — the figure moves, and it moves for the opposite reason.** TC-3570..TC-3574 are counted here because run **R-18** had a **second half**: after the 624/624 full-suite run the tester re-ran the UT-0889 block with `--reporter=verbose -t "UT-0889"` and read each of its five `it`s reported green **individually**. That is case-by-case observation — the same bar every other case in this bucket met. **TC-3564..TC-3569 are still not promoted**; no such second run was done for UT-0887, UT-0759 or UT-0888, and **R-19 did not change that** — it re-ran the UT-0889 block only. **v2.9.0 — the figure moves for the same reason and on the same bar.** Run **R-20** had a second half: the tester re-ran the UT-0890 block `-t "UT-0890"` and read each of its **fifteen** `it`s green individually (15 passed, 26 skipped). **v2.10.0 — the figure moves furthest, and on the same bar, four times over.** Run **R-21** had **four** case-by-case halves — `packages/protocol` 27/27, `packages/sdk` 43/43, `packages/ui` 7 passed / 18 skipped under `-t "UT-0903"`, `apps/web` 20/20 — **97 `it` names read green individually**, and the 28 cases that partition them enter this bucket. **TC-3407 and TC-3411 enter it too**, on the same evidence: each names the `UT`s that assert its clauses and each of those `it`s was read green in R-21. **TC-3564..TC-3569 are STILL not promoted** — R-21 ran no UT-0887 / UT-0759 / UT-0888 block, and five sessions of not doing that second run have not made a file-granularity result into a case-level one. **`TD-07-03`'s 15 rows are still not promoted either**, for the identical reason, and that debt is unchanged at this version. |
| Cases inherited green from Doc 06 (contract suite, party-creation, membership, proposals and FR-131 honesty suites) | **136** (55 from Doc 06 contract suite + 28 from TS-PARTY Doc 06 v2.2.0 Approved + 24 from TS-MEMBERSHIP Doc 06 v2.3.2 Approved + **22 from TS-PROPOSALS Doc 06 v2.4.1/v2.4.2** + **7 from the FR-131 honesty drop, Doc 06 v2.5.1** — the 6 new TC-3564..TC-3569 plus TC-2614, re-statused Not run → Pass (inh.) on R-17). 55 + 28 + 24 + 22 + 7 = 136. _(v2.7.0: unchanged — the five new clause-(e) cases with evidence are **Pass (obs.)**, not inherited, and TC-3575 has no evidence at all.)_ |
| Cases automated but not executed case-by-case (`apps/web` non-party-creation suite) | **15** (was 16; TC-2614 re-statused Pass (inh.) at v2.5.0). All 15 were executed **green** at file granularity in R-17 and are held at *Not run* pending a case-by-case pass — **TD-07-03** |
| Cases **Blocked** (code, circuit, environment or instrument absent) | **177** (140 pre-TS-GOV2 + 32 from TS-GOV2 + 3 from TS-SCAFFOLD: TC-3476 enrolment disclosure affordance, TC-3481 FR-131 clause (d) notice — **now partially delivered at the parties-directory surface (TC-3534) but still Blocked for the SCR-13/SCR-14 ballot surfaces**, TC-3487 audit-contract publication). TS-MEMBERSHIP adds **0** Blocked cases. **+1 at v2.7.0: TC-3575** — the FR-131 clause (e) **Scenario 9** population sweep. It is Blocked on an **absent instrument**, not on absent product: Doc 04 §0.5 S5 (the build-failing FR-131 claims denylist over `apps/web` and `packages/ui`, in every language) is specified and unbuilt, so the criterion cannot execute. It is **not** classed *No mechanism* — the product has abundant surface to test; the test is what is missing. **+1 at v2.10.0: TC-3419**, and it arrives from **No mechanism**, not from the new suite, which adds **zero** Blocked cases. The distinction §10 keeps between the two buckets is exactly what moved it: at v2.9.0 FR-093's schedule had **no design and no product**; at Doc 03 v2.16.0 **DES-108 designs it** and Doc 06 v2.11.1 builds the nomination window, the debates, the post-debate vote and the ballot lock, so the case now has something to test against — and it still cannot execute, because the **question phase** it also asserts (DES-108 rule 3(a)) is unbuilt. Product-absent for one clause, not design-absent for all of them. **Twelve cases** keep their Blocked status with a corrected reason rather than a corrected status — **TC-0028, TC-0029** (2, E2E with no environment) · **TC-3313..TC-3316** (4, FR-065) · **TC-3317..TC-3322** (6, FR-066/FR-067); 2 + 4 + 6 = **12** (see §3.1 and §5.2) _(v2.11.0, **ISS-03**: this read "**Ten**" over an enumeration of **twelve**. The enumeration was right and the word was wrong; the figure is now **derived from the enumeration beside it**, so the two cannot drift apart again)_: each states an **on-chain, E2E or Definition-B** expectation that v1 does not deliver, and promoting any of them on a v1 test would erase the gap its Must row is open on. |
| Cases **No mechanism** (the product has nothing to test) | **46** (was 49; **−3 at v2.10.0**, each named: **TC-3407** and **TC-3411** leave for **Pass (obs.)** — DES-107 and DES-028 rule 6 designed what they assert and Doc 06 v2.11.1 built it — and **TC-3419** leaves for **Blocked**, because DES-108 designs its schedule while its question phase stays unbuilt. Composition after the move: 10 pre-TS-GOV2 + 35 from TS-GOV2 + TC-3541. The 35 are the 38 TS-GOV2 cases covering FR-074..FR-111 minus these three; the remaining requirements in that range still have no DES, Doc 03 §16 deliberate next-increment phasing. 10 + 35 + 1 = **46**) |
| Cases **Manual — not run** | **12** |
| Observed test failures | **0** |
| Open defects raised by this document | **3** (TD-07-01 Medium, TD-07-02 Low, TD-07-03 Low — all documentation / evidence-labelling; none is a product defect) |

**Counting convention — four-case automated-and-Blocked overlap (v2.1.0 fix; cycle-2 ISS-01 Low).** Four cases appear in both the 199-case 'implementing automated test' count (187 before v2.5.0, 193 before v2.7.0) and the 175-case 'Blocked' count: an implementing test harness exists for these cases but the required contracts or environment are not deployed in this drop, so they cannot execute. These 4 overlap cases are not individually identifiable by inspection of the suite-table summary (automated-test attribution and Blocked-status are not cross-referenced at case level in this document). Convention: **Distinct total = 199 (automated) + 172 (Blocked-only, i.e. 176 minus the 4 also in automated) + 48 (No mechanism) + 12 (Manual) = 431.** Equivalently: 199 + 176 + 48 + 12 − 4 = 431. _(v2.5.0: the +6 from TC-3564..TC-3569 is applied to the automated term (187 → 193, total 418 → 424) so the paragraph stays internally consistent, and **the pre-existing staleness is named rather than inherited silently**: this paragraph’s base figures (187 automated, 48 No mechanism) are v2.1.0-era and already disagree with §2’s 239 and §10’s 49. It is a *third* convention alongside Doc 07 §2’s 471 and Doc 08 §6’s 478. Reconciling all three to one stated definition is the tester’s own owed work, tracked as **`TD-RTM-02`** in Doc 08 §10; it is not attempted in this version because it is a document-wide recount, not a side-effect of an FR-131 drop.)_ _(v2.7.0: the same treatment applied again — the +5 automated from TC-3570..TC-3574 moves that term 193 → **198**, and TC-3575 moves the Blocked term 175 → **176**, so the total goes 424 → **430**. The base is still the v2.1.0-era one, it still disagrees with §2's **244** and §10's **49**, and `TD-RTM-02` is still the entry that is owed the recount. Advancing the addends keeps this paragraph consistent **with itself**; it does not make it agree with the two tables above it, and it is not offered as if it did.)_ _(v2.8.0: +1 automated from TC-3576 → **199**, total → **431**. Same base, same disagreement, same owed recount under `TD-RTM-02`.)_

_(v2.10.0: the same treatment, applied once more and with the same disclaimer. The automated term moves 199 → **229** (+28 minted, +2 re-statused); the Blocked term 176 → **177** (TC-3419 in); the No-mechanism term 48 → **45** (TC-3407, TC-3411, TC-3419 out — the v2.1.0-era base is 48, one below §10's 49, and it moves by the same −3). Total: 229 + 177 + 45 + 12 − 4 = **459**. **The base is still the v2.1.0-era one and it still disagrees with §2's 290 and §10's 46.** This paragraph is now the third of three conventions in this document alone, beside §2's **521** and §10's row-anchor count, and Doc 08 §6's **528** is a fourth. Advancing the addends keeps it consistent **with itself** and nothing more; `TD-RTM-02` remains the entry that owes the document-wide recount, and a version that mints 28 cases is the wrong place to attempt it.)_

**Forty-six cases are "No mechanism". Each one is a requirement defect, not a testing defect**, and each
is carried into the RTM gap log (Doc 08 §7). The original 10 (pre-TS-GOV2): TC-0010/TC-1041 (`FR-010` name-collision), TC-0037/
TC-1043 (`FR-008` residency cooldown), TC-1042 (`FR-018` dwell period), TC-1044 (`FR-023` churn
limit), TC-0039/TC-2721 (`FR-056` filtering register), TC-2601 (`FR-001` cross-type residual),
TC-2642 (`FR-004` per-region attestor cap, OPEN-02), TC-2715 (`FR-009` source independence,
OPEN-12), TC-2426 (`NFR-020` open-ballot flag freeze, OPEN-03). **The TS-GOV2 contribution is now 35, not 38** (TC-3400..TC-3437 cover FR-074..FR-111; **TC-3407, TC-3411 and TC-3419 left this bucket at v2.10.0** — the first two to **Pass (obs.)**, the third to **Blocked**, each because Doc 03 v2.16.0 §10.13.14 designed what it asserts and Doc 06 v2.11.1 built some or all of it). For the remaining 35, no DES has been assigned to the requirement (Doc 03 §16 deliberate next-increment phasing); there is nothing to test until the design is produced. **The forty-sixth is TC-3541** — the `FR-077` adversarial amendment case, minted at v2.3.2 and already named in the §10 table's own No-mechanism cell: 10 + 35 + 1 = **46**. _(v2.7.0, **ISS-C2-02 DISCHARGED**: this paragraph had opened "Forty-eight" against a §10 table reading 49 ever since TC-3541 was minted, and enumerated only the 10 + 38. Prose and table now agree, and the missing case is **named** rather than absorbed into a corrected total. Note for the reader arriving from TC-3575: that case is **Blocked**, not No mechanism, and does not belong to this bucket — the distinction is instrument-absent versus product-absent, and §10 keeps them in different buckets.)_ _(v2.10.0: the three departures are named individually above rather than subtracted silently, and the same instrument-versus-product distinction is what decided each of them. **TC-3419 is the instructive one:** it moved from "the product has nothing to test" to "the product has something to test and one clause of it is unbuilt", which is a real improvement in FR-093's position and **still not a closure** — its Must row stays OPEN.)_
**What a green run of the executable subset does establish** (Doc 04 §5.5): the governance
arithmetic is right, the reference implementation and the chain agree, the named capabilities are
absent from the named surfaces, and the four defects Doc 04 found stay fixed. **What it does not
establish:** that a proof is sound, that a vote is receipt-free, that a member cannot be
de-anonymised, that the product is usable on a cheap phone, or that any of it survives contact with
a production environment. This document does not let a green check imply more than it earns.

---

## 11. Traceability

Every `TC` above names the `US` and the `FR`/`NFR` it verifies. The forward and backward chains —
`BR → FR/NFR → DES (+ADR) → SCR → EP/FE/US → UT/TC → Status` — are closed and audited in
**Doc 08, the RTM**. Doc 08 is the gate-blocking artifact; this document is its evidence base.

**Pins for this version (v2.10.0).** The `DES` and `UT` ids cited in §5.7 are read against **Doc 03
v2.16.0 §10.13.14** (DES-027/028/066/067/076 as amended, DES-107, DES-108, the `ICandidateStore` seam
table and the evidence map) and **Doc 06 v2.11.1 §3** (the `UT-0891`..`UT-0907` registry rows and the
**739** total). Screen ids follow **Doc 03 §10.12.4**, the screen inventory of record: **SCR-15**
nomination and disclosure consent, **SCR-22** the candidate-feedback widget, **SCR-23** the debate
schedule, attendance and post-debate vote. **Doc 03 §5.2's DES-066/DES-067 rows and Doc 08 carry
SCR-22 and SCR-23 the other way round**; Doc 03 v2.15.0 annotated that inversion in place rather than
swapping it silently, and this document follows §10.12.4 and says so at every affected case. The
rulings these cases feed — which Must rows close and which stay open, and on which clause — are made
in **Doc 08 v2.13.0**, not here.

**Read Doc 08 before drawing any conclusion about Gate 2 from the pass counts above.** A high pass
rate over an executable subset is not coverage of the requirement set, and Doc 08 says so in
numbers.

---
### Downstream
Pass/fail rolls into release readiness (Doc 04 §10.2, Docs 09–10) and the RTM (Doc 08).
`reviewer-qa` independently verifies the RTM and signs the merge; the tester does not.


---

## 5.2 `TS-CR1` — CR-v1.1.0 cases: FR-062..073 (TC-3300–TC-3342)

**Context.** These 43 cases derive from the twelve new Must FRs introduced by the CR-v1.1.0 nine-requirement change request (Doc 02 v1.1.0) and their corresponding DES elements (DES-064..072, Doc 03 v1.1.0). **None of the underlying capabilities exists in deployed code in this Phase-1 drop.** Every case is Blocked with the phase and reason stated per row, consistent with the §0.1 vocabulary. The two approver-mandated composition cases are marked **[MANDATED]** in their titles.

**Shared preconditions.** Same fixture infrastructure as §3.1. Feature flags `participation_profile`, `single_party_membership`, `candidate_feedback`, `elections`, `debates`, `recovery` all off above dev (Doc 03 §15; DES-064..072 designed, not shipped).

### TC-3300..TC-3302 — FR-062 public participation profile (DES-064 · US-0071 · SCR-21)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3300 | Participation profile loads all five field groups: elections participated in (no direction), party memberships, endorsed petitions, authored proposals, attended debates | US-0071 · FR-062 | All five field groups present; ballot direction absent from every record | **Blocked — OI-13 unresolved; participation_profile flag off above dev (DES-064)** |
| TC-3301 | Profile for a contested-ballot voter reveals no ballot direction | US-0071 · FR-062, FR-063 | No direction field or inferred direction signal in any profile view | **Blocked — OI-13 unresolved (DES-064)** |
| TC-3302 | Elected representative office-capacity vote publicly attributed on their profile (FR-048 exception) | US-0071 · FR-062, FR-048 | Direction visible only for office-capacity votes; ordinary member ballot directions hidden | **Blocked — Phase 3 (Elections not implemented; DES-067 not shipped)** |

### TC-3303..TC-3306 — FR-063 ballot-direction MUST-NOT prohibition (DES-064 · US-0072)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3303 | Ballot direction not reachable through any client surface — consistent with UT-0700 | US-0072 · FR-063 | No ballot-direction field in any client-accessible endpoint or rendered view | **Not run** — apps/web · UT-0700 exists; suite not executed this session |
| TC-3304 | Ballot direction absent from any public-record export — consistent with UT-0701 | US-0072 · FR-063 | No ballot-direction field in any event log, export or indexed record | **Not run** — apps/web · UT-0701 exists; suite not executed this session |
| TC-3305 | Ballot direction not inferrable from any combination of public data (profile views, public records, derived datasets) | US-0072 · FR-063 | Adversarial union of all public fields yields no directional signal per the MUST-NOT prohibition | **Blocked — G-UI/G-PHASE3: full no-inference audit requires a deployed system with real ballots** |
| TC-3306 | Elected office-holder office-capacity vote is the sole permitted ballot-direction disclosure (FR-048 exception boundary) | US-0072 · FR-063, FR-048 | Office-capacity vote direction attributable; all ordinary member ballot directions hidden; boundary enforced | **Blocked — Phase 3 (Elections not implemented; exception boundary requires office-holder state)** |

### TC-3307..TC-3309 — FR-064 single party membership constraint (DES-065 · US-0073)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3307 | Joining party B voids party A membership automatically; tenure clock resets to zero | US-0073 · FR-064 | Party A membership-scope nullifier revoked; party B active; tenure = 0 | **Blocked — Phase 3 (DES-065 global membership-scope nullifier not yet coded)** |
| TC-3308 | Simultaneous membership in two parties via any mechanism (same session, different device, different address) fails | US-0073 · FR-064 | No dual-membership state; every bypass path rejected | **Blocked — Phase 3 (DES-065 not coded)** |
| TC-3309 | **[MANDATED (a)]** Leave party A, join party B, attempt to vote in party B before one month elapses: vote rejected as tenure not yet met; FR-068 waiver is inapplicable because the tenure clock reset to 0 on party switch | US-0073, US-0078 · FR-064, FR-068 | Join-B sets tenure = 0; vote at day 15 rejected with tenure-not-met; FR-068 waiver does NOT apply — DES-068 (Doc 03 v1.1.1) explicitly excludes party-switchers: a tenure clock reset by a party switch is not excused by the destination party's waiver; rejection holds unconditionally regardless of party B's age | **Blocked — Phase 3 (DES-065 + DES-068; cross-FR interaction; no implementing code in this drop)** |

### TC-3310..TC-3312 — FR-068 tenure waiver for new parties (DES-068 · US-0078)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3310 | Member who joined before party activation votes in the party first 3 calendar months; waiver applies; vote accepted without one-month tenure | US-0078 · FR-068 | Vote accepted; newPartyWaiverActive(partyId) = true; one-month tenure check bypassed | **Blocked — Phase 3 (DES-068 not coded)** |
| TC-3311 | **[MANDATED (b)]** Growth surge of 10,000 new members in month 2 while waiver is active; snapshot mechanism (FR-028) and churn-rate limits (FR-023) raise the quorum bar identically to a non-waivered party; UT-0220 growth-surge defence confirmed active | US-0078 · FR-068, FR-023, FR-028 | newPartyWaiverActive = true; proposal snapshot locked; surge-adjusted quorum bar raised per UT-0220 logic; waiver touches ONLY the tenure check, never anti-capture parameters | **Blocked — Phase 3 (DES-068 + DES-014/DES-019 anti-capture interaction; no cross-contract integration test in this drop)** |
| TC-3312 | Anti-capture controls (FR-023 churn limit, FR-028 eligibility snapshot) remain fully enforced while new-party tenure waiver is active | US-0078 · FR-068, FR-023, FR-028 | Waiver relaxes only the one-month tenure check; churn limits and snapshot eligibility rules apply identically to waivered and non-waivered parties | **Blocked — Phase 3** |

### TC-3313..TC-3316 — FR-065 candidate feedback scoring (DES-066 · US-0074, US-0075 · SCR-23)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3313 | Upvote on candidate C in election E: tally +3; scope nullifier keccak(feedback, electionId, candidateId) spent | US-0074 · FR-065 | Tally += 3; nullifier spent; member cannot cast another feedback vote on C in E | **Blocked — the stated mechanism is Definition-B.** _(v2.10.0: the **+3 and the refusal are delivered in v1** and are carried by `TC-3595`, `TC-3608` and `TC-3618`. This case is **not** promoted on them, because what it asserts is a **spent scope nullifier `keccak(feedback, electionId, candidateId)`** — the v2 backing behind `ICandidateStore` (Doc 03 §10.13.14 DES-066 rule 2 / the seam table). v1 refuses through a store-local caster record instead, which is the recorded **DIVERGENCE** that keeps FR-065's row OPEN. Passing this case on a v1 test would erase exactly the gap the row is open on.)_ |
| TC-3314 | Downvote on candidate C in election E: tally -1; same nullifier spent | US-0074 · FR-065 | Tally -= 1; nullifier spent | **Blocked — the stated mechanism is Definition-B** (as TC-3313; the −1 itself is carried by `TC-3595` and the rendered −1 by `TC-3618`) |
| TC-3315 | Second feedback vote on same candidate C in same election E: nullifier already spent; attempt refused | US-0074 · FR-065 | Attempt refused; first vote unchanged | **Blocked — the stated mechanism is Definition-B.** _(v2.10.0: the **refusal half is delivered and asserted** — `ALREADY_GAVE_FEEDBACK`, first vote unchanged, `TC-3608`. The clause this case states is that the refusal comes from an **already-spent nullifier**; in v1 it comes from `hasGivenFeedback` against the candidate store, not from DES-095's `isUniqueInScope`. FR-065's "enforced by the same nullifier mechanism as scope-action limits" is the clause that fails, and this is the case that will close it.)_ |
| TC-3316 | Individual feedback votes not linkable to caster; only aggregate tally publicly visible | US-0075 · FR-065 | No per-member vote record in public output; tally integer only | **Blocked — Definition-B.** _(v2.10.0: the **aggregate-only publication half is delivered and asserted** — no read returns a caster, `TC-3609`. "**Unlinkable to its caster**" is not: the operator database CAN see the direction of an individual feedback vote, the surface says so under FR-131(b), and `TC-3618` asserts that it says so. Unlinkability arrives with the v2 nullifier (Doc 03 DES-066 rule 4). This case stays Blocked, and it is one of the two clauses on which FR-065's Must row stays OPEN.)_ |

### TC-3317..TC-3322 — FR-066, FR-067 mandatory debates and candidacy (DES-067 · US-0076, US-0077 · SCR-22)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3317 | Three debates scheduled per candidate before major election; each covers one required topic (local conditions, local problems, work required) | US-0076 · FR-066 | Three debate records with distinct topic codes on verifiable record | **Blocked — the "verifiable record" clause.** _(v2.10.0: the **three-debates-by-topic half is delivered and asserted** — `TC-3594` and `TC-3606`. What keeps this case blocked is "**on verifiable record**": the v1 trail is application-held and is not independently checkable until the DES-097 audit-record anchoring (Doc 13 stage S-8), which is unbuilt. FR-066's Must row stays OPEN on exactly this clause.)_ |
| TC-3318 | Debate completion: attendance attestation and content CID recorded on-chain; off-chain pin loss does not erase on-chain attestation | US-0076 · FR-066 | On-chain CID and attestation present; record survives content-host failure | **Blocked — on-chain, Definition-B.** _(v2.10.0: v1 records a boolean attestation and a `contentRef` in the trail (`TC-3606`); a CID **on-chain** and survival of content-host failure are the v2 backing. Not promoted.)_ |
| TC-3319 | Candidate absence from scheduled debate recorded in their participation record | US-0076 · FR-066 | Absence entry present; no silent skip | **Blocked — the "verifiable record" clause.** _(v2.10.0: the absence **is** recorded, visible and blocking in v1, and `TC-3594` and `TC-3606` assert it — including that an unheld debate is not an absence. This case is held Blocked with TC-3317 because it is the same record that is not yet verifiable, and promoting it alone would let FR-066 look better than it is.)_ |
| TC-3320 | Only net-positive post-debate member-vote candidates advance to the election ballot | US-0077 · FR-067 | Non-positive-score candidate excluded; on-chain guard rejects inclusion | **Blocked — the guard it names is on-chain.** _(v2.10.0: **strictly net-positive advancement is delivered and asserted** — a tie does not advance, zero votes does not advance, and the candidate set stays empty until a net-positive close (`TC-3596`, `TC-3607`, `TC-3610`, `TC-3617`). The **on-chain guard** this case names is the v2 backing. FR-067's closure does not rest here.)_ |
| TC-3321 | Sitting incumbent receives no automatic candidacy; must complete full debate-and-post-debate-vote cycle | US-0077 · FR-067 | Incumbent not placed on ballot without completed cycle; no privileged path | **Blocked — Elections-contract case.** _(v2.10.0: the guarantee **is delivered and asserted in v1** — the incumbent takes the identical path, `officeHolder` is never read on the nomination or publication path (spy), and no method or parameter is named incumbent / renominate / override / skip (`TC-3607`, `TC-3593`, `TC-3617`). This case is kept Blocked as the on-chain form; **FR-067's evidence is the new cases**, the TC-3542 / FR-079 precedent.)_ |
| TC-3322 | Attempt to place incumbent on ballot without completed debate cycle: refused and logged | US-0077 · FR-067 | On-chain guard refuses; event logged with candidate ID and reason | **Blocked — and it is the case FR-067's row stays OPEN on.** _(v2.10.0, the sharpest row in this group. **"Refused" is delivered by construction**: no call places a candidacy on a ballot, publication is the sole effect of a closed net-positive vote, and every other edge throws `ILLEGAL_TRANSITION` naming `from` and `to` (`TC-3592`). **"And logged" is not delivered**: v1 appends **no trail event for a refused attempt** (Doc 03 §10.13.14 DES-067 rule 6, which states it plainly and leaves the ruling here). The tester's ruling, recorded in Doc 08 v2.13.0: **a capability-absence argument can discharge "refused"; it cannot discharge "logged"**, because logging is a positive obligation to produce a record and an absence produces none. **No case is minted Pass for this clause** — there is nothing to assert — so this case stays Blocked and is the one that will close it when the refusal event is built (Doc 03 §13, a small engineer touch).)_ |

### TC-3323..TC-3325 — FR-069 deterministic enrolment nullifier (DES-069 · US-0079)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3323 | First enrolment: Poseidon(stable_id_secret, enrolment_scope) derived in-circuit; five universal checks pass (issuer sig, freshness, region, correct derivation, trust-anchor hash: publicSignals[4] ≡ issuers[issuerId].trustAnchorHash per SC-01); only nullifier stored; identifier never leaves the circuit | US-0079 · FR-069 | Nullifier on record; no identifier in any store; all five in-circuit checks verified (including on-chain trust-anchor hash binding per DES-069 / SC-01) | **Blocked — Phase 2 (DES-069; personhood_enrol circuit not compiled, Doc 06 §7.2)** |
| TC-3324 | Same credential re-used in second enrolment: derived nullifier matches existing record; enrolment rejected as duplicate | US-0079 · FR-069 | Refused with duplicate-nullifier reason; first record intact; no second identity | **Blocked — Phase 2** |
| TC-3325 | Credential with tampered region attribute: in-circuit region check fails; rejected with region-attribute-invalid reason | US-0079 · FR-069 | Rejected; correct reason returned; no partial record created | **Blocked — Phase 2** |

### TC-3326..TC-3329 — FR-070 pluggable credential adapter (DES-070 · US-0080)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3326 | eIDAS 2.0 wallet adapter: QeAA trust-anchor signature verified vs national/supra-national trust list; stable personal identifier and residency attribute extracted and passed to FR-069 derivation | US-0080 · FR-070 | Adapter verifies QeAA; (stable_id, region) tuple passed to derivation; nullifier minted | **Blocked — Phase 2 (DES-070; circuit and adapter infrastructure not deployed)** |
| TC-3327 | ICAO Doc 9303 NFC chip adapter: Document Security Object verified vs ICAO public key directory; stable identifier (MRZ DocumentNumber or chip pseudonym) and attested residency extracted | US-0080 · FR-070 | Adapter verifies SOD; (stable_id, residency) passed to derivation; nullifier minted | **Blocked — Phase 2** |
| TC-3328 | Offline paper KYC adapter (e.g. Aadhaar offline XML or equivalent): government-signed assertion verified; stable identifier and residency extracted; no biometric retained after attestor check | US-0080 · FR-070 | Assertion processed; no biometric in any store; nullifier minted | **Blocked — Phase 2** |
| TC-3329 | Adapter interface enforces pluggable pattern: no single credential type hard-coded; region-level config governs adapter selection | US-0080 · FR-070 | ICredentialAdapter interface prevents bypass; region config governs | **Blocked — Phase 2** |

### TC-3330..TC-3332 — FR-073 government eID issuer hierarchy (DES-072 · US-0083)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3330 | Government eID credential in designated region: enrolment nullifier minted; record accepted | US-0083 · FR-073 | credentialClass == GOV_EID passes; nullifier minted and accepted | **Blocked — Phase 2 (DES-072; PersonhoodRegistry issuer-class enforcement not deployed)** |
| TC-3331 | Availability-only credential class attempts enrolment: no nullifier minted; refused with NotEnrolmentClass | US-0083 · FR-073, FR-069 | Revert NotEnrolmentClass; no nullifier created; event logged | **Blocked — Phase 2 (DES-072)** |
| TC-3332 | Availability-only credential used for liveness attestation only: no enrolment nullifier; no membership or governance rights granted | US-0083 · FR-073 | Liveness confirmed; no enrolment record; no party membership; no governance power | **Blocked — Phase 2 (DES-072)** |

### TC-3333..TC-3339 — FR-071, FR-072 nullifier-collision recovery and delay/veto guard (DES-071 · US-0081, US-0082)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3333 | Nullifier collision on second enrolment: system routes to RECOVERY_PENDING state; does not reject as duplicate | US-0081 · FR-071 | State = RECOVERY_PENDING; user prompted for re-authentication | **Blocked — Phase 3 (DES-071 recovery state machine not implemented, Doc 06 §7.3)** |
| TC-3334 | Recovery completes: state to KEY_ROTATED; membership, tenure and governance history survive intact; no second identity | US-0081 · FR-071 | Same nullifier; tenure unchanged; history intact; no additional nullifier entry | **Blocked — Phase 3** |
| TC-3335 | Seven-day delay imposed before key rotation: KEY_ROTATED not reachable before delay elapses | US-0082 · FR-072 | rotationEffectiveAt = block.timestamp + 7 days; transition blocked | **Blocked — Phase 3** |
| TC-3336 | Active-key veto window equals the full seven-day delay; veto accepted throughout the entire window (veto window >= delay) | US-0082 · FR-072 | Veto at day 6 of 7-day delay results in RECOVERY_ABORTED; veto threshold = delay threshold | **Blocked — Phase 3** |
| TC-3337 | Recovering credential barred from casting any vote during the delay (isInRecovery check in vote()) | US-0082 · FR-072 | vote() reverts for recovering nullifier while state = RECOVERY_PENDING; active key votes normally | **Blocked — Phase 3** |
| TC-3338 | Notification sent to registered channel at recovery initiation | US-0082 · FR-072 | Notification event emitted on-chain at RECOVERY_PENDING entry | **Blocked — Phase 3** |
| TC-3339 | Active-key holder submits veto during delay: recovery aborted; existing key in full control | US-0082 · FR-072 | State to RECOVERY_ABORTED; original key operational; rotation cancelled | **Blocked — Phase 3** |

### TC-3340..TC-3342 — ADV-17..19 · RISK-22, RISK-23, RISK-24 recovery attack scenarios

| TC | Suite / RISK | Attack | Expected | Status |
|---|---|---|---|---|
| TC-3340 | ADV-17 · RISK-22 | Stolen credential: attacker initiates recovery to seize victim party membership; victim vetoes via on-chain active-key path within 7-day window | State to RECOVERY_ABORTED; victim key and membership preserved | **Blocked — Phase 3 (DES-071 not implemented)** |
| TC-3341 | ADV-18 · RISK-23 | Attacker suppresses victim notification channel; victim retains independent on-chain veto path via active key (no channel dependency) | On-chain veto succeeds even with channel suppressed; RECOVERY_ABORTED; accepted residual = complete device + channel compromise | **Blocked — Phase 3** |
| TC-3342 | ADV-19 · RISK-24 | Attacker initiates recovery during active ballot; recovering credential attempts to vote; isInRecovery(nullifier) in vote() blocks it; active key votes normally | Recovering credential vote() reverts; active-key vote proceeds; no double-counting; FR-032 last-valid-ballot rule applies | **Blocked — Phase 3** |

### TC-3343..TC-3345 — SC-01 trust-anchor binding negative cases (DES-069 · DES-070 · FR-069, FR-070)

**Context.** Doc 03 v1.1.2 (SC-01 fix) requires: (1) `trustAnchorHash` as the fifth public signal
in every enrolment proof, checked on-chain against `issuers[issuerId].trustAnchorHash`; (2) per-adapter-class
verifier dispatch via `issuers[issuerId].verifierAddress`. These three cases verify rejection of attack paths
identified in the security scan (SECURITY-SCAN-CR-v1.1.0-2026-08-10 §1 SC-01).

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3343 | **[SC-01 attack path A]** Enrolment proof carries a `trustAnchorHash` value that does not match `issuers[issuerId].trustAnchorHash`; prover substitutes an attacker-chosen key | US-0079 · FR-069 | `enrol()` reverts: `publicSignals[4] != issuers[issuerId].trustAnchorHash` check fails on-chain; no nullifier minted; no identity registered | **Blocked — Phase 2 (DES-069; personhood_enrol_[class] circuit not compiled; no on-chain contract in this drop)** |
| TC-3344 | **[SC-01 attack path B]** Proof generated for adapter class X (e.g. ICAO Doc 9303) submitted under an `issuerId` whose `credentialClass` is class Z (e.g. eIDAS 2.0); `verifierAddress` routes proof to class Z verifier | US-0080 · FR-070 | `enrol()` dispatches via `issuers[issuerId].verifierAddress`; proof generated for class X fails verification under class Z verifier; enrolment rejected; no nullifier minted | **Blocked — Phase 2 (DES-070; per-adapter-class verifier dispatch not deployed in this drop)** |
| TC-3345 | **[SC-01 arity]** Legacy 4-signal enrolment proof `[Nᵢ, C, issuerId, namespaceId]` submitted to upgraded `enrol()` expecting five signals; `publicSignals[4]` is absent or zero | US-0079 · FR-069 | `enrol()` reverts on arity mismatch or `trustAnchorHash` check against zero/missing fifth signal; proof rejected; no nullifier minted; consistent with C-03 arity discipline | **Blocked — Phase 2 (DES-069; no circuit or contract in this drop)** |

---

## 5. Governance v2.0 suite

### 5.1 `TS-GOV2` — FR-074..FR-120 · NFR-027/028 · SC-15..SC-21 · Guarded Layer properties · FR-117 capability-absence (TC-3400–TC-3469)

**Context.** This suite covers all requirements introduced in SRS v2.2.0 (Vision re-entry, Gate 1 re-entry 2026-08-11) and the security-closure rescan findings SC-15..SC-21 (SECURITY-RESCAN-SC15-21-2026-08-11.md). The trust-anchor lifecycle (FR-112/113, DES-090), StewardRegistry (FR-114, DES-088), steward powers boundary (FR-115..117, DES-089), ProtocolGovernance / GovernanceConstants (FR-118/119, DES-087/DES-091), and citizen fallback (DES-092) are all designed but **not deployed in this drop**. The 38 requirements FR-074..FR-111 have **no DES yet** (Doc 03 §16 records this as deliberate phasing — the chain link `FR → DES` is broken by design, not by error). **Nothing in this suite may be marked Pass.**

**Shared precondition.** `governance_v2` flag OFF. ProtocolGovernance, StewardRegistry, GovernanceConstants, TrustAnchorLifecycle contracts are not deployed. No Phase-3 capability is active above dev in this drop.

---

#### TC-3400..TC-3437 — FR-074..FR-111 (no DES assigned — Doc 03 §16 deliberate phasing)

Each row status: **No mechanism** — the FR has no DES in Doc 03 §5.2 (deliberate; see §16), and no implementation exists in this drop. The G-TRACE + G-PHASE3 gap is recorded in Doc 08 §3.1 and §7.

| TC | Title | Verifies (US · FR) | Expected result | Status |
|---|---|---|---|---|
| TC-3400 | Country selection scopes party-political participation to exactly one jurisdiction | US-0084 · FR-074 | Exactly one country record accepted; second country refused; region tree and all residency-derived rights scoped to selection; change governed by FR-008 discipline | **No mechanism** — country-selection module and per-country eligibility rules not designed (Doc 03 §16) |
| TC-3401 | Platform activation displayed as distinct from legal registration on every party-facing surface | US-0085 · FR-075 | Every party-facing surface states the distinction; no surface represents activation as legal registration; distinction displayed before any party action | **No mechanism** — legal-registration-status attestation and display surface not designed (Doc 03 §16) |
| TC-3402 | Party creation refused when any mandatory constitution section is missing; every missing section named | US-0086 · FR-076 | Publication refused; every missing section named; no partial party record created; follows FR-011 pattern | **No mechanism** — digital constitution upload and machine-checkable section validation not designed (Doc 03 §16) |
| TC-3403 | Non-violence clause verified by code; publication refused if absent or altered | US-0087 · FR-077 | Non-violence clause present and byte-identical to platform standard; alteration refused at submission; no human judgment in path | **No mechanism** — _(reason updated v2.3.2)_ the publication half is implemented and passing (TC-3508..TC-3510). This case stays **No mechanism** for the **amendment** half of FR-077, but the reason has moved from *undesigned* to **designed-and-unbuilt**: **Doc 03 v2.8.3 §10.13.10.1** now specifies the mechanism — the charter becomes a **clause map** (so `amendCharter` can only reach the clause it names, instead of replacing the whole document hash), the non-violence `clauseId` is **platform-immutable** at construction for every party rather than a founder choice, and **amendments must carry the text** they change so the contract verifies rather than trusts. Its **closing evidence is DES-101 rule 6's adversarial amendment test** — now minted as **TC-3541**. The build is governed by **`PREREQ-01`** (approver ruling, Rathish, 2026-08-29), a blocking prerequisite to the on-chain governance increment. **PREREQ-01 governs WHEN the fix lands, not whether this case passes:** the product still has no amendment-time verification, so the status is unchanged |
| TC-3404 | Party constitution amendable only through tiered proposal process; direct overwrite refused | US-0088 · FR-078 | Amendment accepted only via FR-025/FR-026 tiered process; direct overwrite reverts; entrenchment per FR-027 honoured | **No mechanism** — constitution-amendment integration not designed (Doc 03 §16) |
| TC-3405 | Exactly three participation tiers (Supporter, Worker, Candidate); none changes voting weight | US-0089 · FR-079 | Tier set on join; weight unchanged at all tiers; no tier carries extra vote, standing, or precedence | **No mechanism** — participation tier metadata model not designed (Doc 03 §16) |
| TC-3406 | Worker declaration accepted with no human approval; informed-consent event recorded append-only | US-0090 · FR-080 | Worker tier set without approval; consent event appended with timestamp; no approval path exists | **No mechanism** — Worker self-declaration and consent recording not designed (Doc 03 §16) |
| TC-3407 | Candidate tier determined solely by post-debate member vote; no auto-renomination of incumbents | US-0091 · FR-081 | Candidacy confirmed by vote result only; incumbency confers no automatic advancement; eligibility checked by code | **Pass (obs.)** — `packages/protocol/test/candidates.test.js` · **UT-0891**, **UT-0894**; `packages/sdk/test/candidates.test.js` · **UT-0896**, **UT-0899**, **UT-0901**; run **R-21**, 2026-09-21. _(v2.10.0: **No mechanism → Pass (obs.)**, and the change is in the product, not in the case. This row read "candidacy-from-vote flow not designed (Doc 03 §16)"; **DES-107** now designs it (Doc 03 v2.16.0 §10.13.14) and Doc 06 v2.11.1 builds it. All three clauses this case states are asserted: candidacy is confirmed by the tally alone and PUBLISHED is reachable only from VOTE_OPEN (UT-0891, UT-0901); the office-holder record is never read on the nomination or publication path and no method or parameter is named incumbent / renominate / override / skip (UT-0899); **eligibility is a chain of named constants and functions — maturation, `inScopeForOffice`, the DES-095 counting gate, the endorsement minimum (UT-0894, UT-0896)**. **This case does NOT cover FR-081's "with its state (active/inactive)" clause, and no case does** — which is why FR-081's Must row stays OPEN at Doc 08 v2.13.0 even though this row now passes.)_ _(**v2.11.0, ISS-06: `UT-0894` and `UT-0896` were missing from this cell.** The row's third clause is "eligibility checked by code" and **none** of the three originally cited blocks asserts it — `UT-0891` is the transition machine, `UT-0899` incumbency, `UT-0901` the ballot. `UT-0894` (region scope, maturation, the constants) and `UT-0896` (the seam asked with scope CANDIDACY, `NOT_MATURED` before the seam, `ALREADY_NOMINATED`) do, and **Doc 03 v2.16.0's own FR-081 evidence row cites `UT-0896`**. The status does not change and the case was never failing; what was wrong was the attribution, which is the `TD-RTM-03` defect class and is not added to here.)_ |
| TC-3408 | Supporter tier: only nullifier stored; no profile surface; no attributable record; NFR-001/002/024 apply unconditionally | US-0092 · FR-082 | No profile surface for Supporter; no attributable record under any query path; unlinkability invariants hold | **No mechanism** — Supporter-tier anonymity enforcement not designed (Doc 03 §16) |
| TC-3409 | Worker/Candidate public participation record begins from consent event; ballot direction never disclosed for any tier | US-0093 · FR-083 | Role-relevant activity (work, proposals, debates, candidacies, committees) visible from consent event; ballot direction absent from every surface; FR-048 elected-representative exception applies | **No mechanism** — public participation record for public-tier roles not designed (Doc 03 §16) |
| TC-3410 | Full disclosure schedule published before declaration window; no post-declaration demand outside the schedule | US-0094 · FR-084 | Disclosure schedule available before any declaration or nomination window opens; no undeclared information category added after declaration | **No mechanism** — disclosure schedule publication surface not designed (Doc 03 §16) |
| TC-3411 | Informed consent covers full campaign and term; pre-nomination disclosures destroyed on withdrawal (OI-16 adopted) | US-0095 · FR-085 | Consent irrevocable for term; withdrawal before nomination-window close permitted; pre-nomination disclosure data (confidential-class) destroyed on withdrawal; no destruction of public governance records | **Pass (obs.)** — `packages/protocol/test/candidates.test.js` · **UT-0895**; `packages/sdk/test/candidates.test.js` · **UT-0897**; `apps/web/test/candidates.test.tsx` · **UT-0904**; run **R-21**, 2026-09-21. _(v2.10.0: **No mechanism → Pass (obs.)**. This row read "consent lifecycle and confidential-class data destruction not designed"; **DES-028 rule 6** now designs the lifecycle (Doc 03 v2.16.0 §10.13.14) and Doc 06 v2.11.1 builds it. Every clause is asserted: `irreversibleForTerm` must be the literal `true` and no revocation method exists for the term; withdrawal **before** `nominationClosesAt` calls `destroyDisclosures` — **the store's only delete** — and the trail says so without ever having held the disclosures; withdrawal **after** the window leaves them standing; **no public governance record is destroyed**, the FR-107/OI-16 carve-out. See also `TC-3599`, `TC-3605` and `TC-3614`.)_ |
| TC-3412 | Prior Supporter-period activity remains anonymous permanently after public role is taken; no linkage path through any data or combination | US-0096 · FR-086 | No linkage between anonymous Supporter identity and subsequent public Worker/Candidate identity detectable through any data the system holds or emits, or through any combination of public outputs | **No mechanism** — cross-tier unlinkability guarantee for role-changers not designed (Doc 03 §16) |
| TC-3413 | Committee output is proposals only; committee cannot directly change election, vote, or membership outcomes | US-0097 · FR-087 | Committee action produces only an ordinary-lifecycle proposal; no direct outcome effect; composition and minutes public | **No mechanism** — committee formation and capability-restriction model not designed (Doc 03 §16) |
| TC-3414 | Committee configuration granting election- or membership-touching capability rejected by code | US-0098 · FR-088 | Configuration rejected at submission; allowlist confined to event organisation, coordination, facilitation, vendor management, publishing | **No mechanism** — committee ABI allowlist and configuration-rejection not designed (Doc 03 §16) |
| TC-3415 | Committee membership expires at term end by code; continuation requires fresh member vote | US-0099 · FR-089 | Term expiry code-enforced; no human renewal path; continuation needs a new vote | **No mechanism** — committee term-expiry mechanics not designed (Doc 03 §16) |
| TC-3416 | Proposal authorship public; competing proposal accepted with equal standing in same decision window (Worker+ per OI-14) | US-0100 · FR-090 | Author identity published; competing proposal in same window; equal standing confirmed; Supporters retain full voting rights | **No mechanism** — competing-proposal equal-standing enforcement not designed (Doc 03 §16) |
| TC-3417 | Proposal advances through all lifecycle stages in sequence by code; no stage skipped or human-vetoed | US-0101 · FR-091 | Stage transitions code-enforced; no skip, reorder, or veto path; review/discussion/debate are deliberative only | **No mechanism** — proposal lifecycle stage machine not designed (Doc 03 §16) |
| TC-3418 | Permanent decision trail reconstructable end-to-end from public data alone; trail includes all competing proposals | US-0102 · FR-092 | Trail contains proposal(s), authorship, deliberation records, vote result, enacted consequence, implementation status, measured outcome; reproducible by any third party | **No mechanism** — permanent decision trail data model not designed (Doc 03 §16) |
| TC-3419 | Candidate selection runs on published code-enforced schedule; unanswered member questions visibly recorded | US-0103 · FR-093 | Nomination, question phase, debates (FR-066), post-debate vote (FR-067), and election on code-enforced clock; unanswered questions recorded as unanswered | **Blocked** — the question phase and the office election are designed and unbuilt. _(v2.10.0: **No mechanism → Blocked**, which is a change of kind, not of degree. This row read "candidate selection schedule and Q&A public record not designed"; **DES-108** now designs both (Doc 03 v2.16.0 §10.13.14), so there is a design to test against — the case is no longer testing nothing. The **nomination window, debates, post-debate vote and ballot lock are built** and `TC-3611` asserts the published, immutable timetable. **`askQuestion`, `recordAnswer` and `closeQuestionPhase` (DES-108 rule 3(a)) and the office election (DES-076 rule 2) are not built**, so "questions and answers on the public record" and "unanswered questions visibly recorded" have no product to execute against. **No case is minted Pass for those clauses**, and FR-093's Must row stays OPEN with them as the named blocker.)_ |
| TC-3420 | Manifesto is structured and machine-readable; publication refused when any mandatory field is missing | US-0104 · FR-094 | Every sector plan has baseline, target, budget, timeline, method, and named owner; missing field named and publication refused; follows FR-011 pattern | **No mechanism** — structured manifesto schema and publication gate not designed (Doc 03 §16) |
| TC-3421 | Every manifesto commitment has a stable per-commitment ID; status updates are append-only; supersedes FR-046 | US-0105 · FR-095 | Commitment ID stable across versions; status transitions appended; history not rewritten; FR-046 traceability absorbed | **No mechanism** — manifesto commitment ID model and append-only status transitions not designed (Doc 03 §16) |
| TC-3422 | Mechanical anomaly detection flags published on transparency dashboard; flags do not freeze funds or block governance | US-0106 · FR-096 | Velocity, structuring, concentration, round-trip flags published; no fund freeze; no governance action blocked by a flag | **No mechanism** — treasury anomaly detection and transparency dashboard not designed (Doc 03 §16) |
| TC-3423 | Public-tier role-takers file COI disclosure on schedule; overdue disclosure flagged by code on participation record | US-0107 · FR-097 | Disclosure record created; overdue disclosure flagged visibly by code; no human discretion in flagging | **No mechanism** — COI disclosure filing and code-driven flag mechanism not designed (Doc 03 §16) |
| TC-3424 | COI review is investigation-and-recommendation only; no reviewer holds outcome power; recusal voluntary or code-ruled | US-0108 · FR-098 | Sortition-selected reviewers publish findings only; recusal takes effect by voluntary compliance, member vote, or charter code rule; no enforcement outcome from reviewers | **No mechanism** — COI review mechanics (sortition, publication, recusal path) not designed (Doc 03 §16) |
| TC-3425 | Independent internal audit by sortition; read-only access to all records; findings inform only; no enforcement power | US-0109 · FR-099 | Auditors drawn per-case from eligible members; read-only access confirmed; no standing body; reports on published schedule; no enforcement action path | **No mechanism** — sortition audit selection and record-access mechanism not designed (Doc 03 §16) |
| TC-3426 | Dispute stage transitions enforced by code within published maximum timelines; timeline breach recorded on decision trail | US-0110 · FR-100 | Stage transitions within maxima; breach appended to decision trail; no human hold on transitions | **No mechanism** — dispute timeline enforcement not designed (Doc 03 §16) |
| TC-3427 | Per-case appeal/review panels drawn by verifiable sortition from eligible members; no standing panel body; outputs are recommendations | US-0111 · FR-101 | Sortition selection reproducible by third party; no standing body; panel outputs go to member vote or code rules | **No mechanism** — verifiable sortition panel selection not designed (Doc 03 §16) |
| TC-3428 | Machine-readable member-rights charter published; party charter reducing any right below platform floor rejected by code | US-0112 · FR-102 | Rights machine-readable; every right maps to a code-enforced capability; configuration reducing any right below floor rejected | **No mechanism** — member-rights charter schema and floor-enforcement not designed (Doc 03 §16) |
| TC-3429 | Conduct votes use nullifier + privacy mechanics; individual votes private; Supporter-tier conduct vote impossible by construction | US-0113 · FR-103 | Conduct vote uses same nullifier scheme as policy votes; no individual vote revealed; Supporter has no addressable identity — conduct vote is impossible | **No mechanism** — conduct vote mechanics not designed (Doc 03 §16) |
| TC-3430 | Removal requires affirmative active-vote quorum; silence does not remove; subject's statement right honoured; surge defence active | US-0114 · FR-104 | Removal passes only on active-vote quorum at published bar; no removal by default or silence; statement recorded before window closes; FR-023/FR-028 surge defence applies | **No mechanism** — removal vote mechanics not designed (Doc 03 §16) |
| TC-3431 | Expulsion has strictly higher quorum+supermajority than removal; public-tier only (Supporter expulsion impossible); historical records unaltered | US-0115 · FR-105 | Expulsion bar higher than removal; Supporter expulsion impossible by construction (no addressable identity); membership state transitions appended, no overwrite; OI-15 adopted | **No mechanism** — expulsion mechanics not designed (Doc 03 §16) |
| TC-3432 | Every data entity carries exactly one classification (public/restricted/confidential); unclassified entity not storable | US-0116 · FR-106 | Public / restricted / confidential classification enforced at write; unclassified entity rejected; classification governs storage, access, and publication | **No mechanism** — data classification enforcement model not designed (Doc 03 §16) |
| TC-3433 | No hard-delete or overwrite in any governance store; state transitions appended with timestamp and cause; confidential-class carve-out honoured | US-0117 · FR-107 | Delete/overwrite reverts; every transition adds a record; pre-nomination disclosure data (confidential-class per OI-16) never enters the governance record; public records never overwritten | **No mechanism** — append-only governance store for v2.0 entities not designed (Doc 03 §16) |
| TC-3434 | Public verifiable record contains only proofs, timestamps, counts, governance events; no restricted or confidential data in any form | US-0118 · FR-108 | Write of restricted/confidential entity to public chain rejected; chain inspection reveals only permitted classes; CON-002/CON-008/NFR-010 discipline maintained | **No mechanism** — public-record write discipline for v2.0 entities not designed (Doc 03 §16) |
| TC-3435 | Transparency dashboard presents aggregate governance data with anomaly flags; no per-member drill-down | US-0119 · FR-109 | Dashboard shows governance activity, treasury summary with flags, participation aggregates, commitment progress, dispute-timeline compliance; no individual drill-down path exists | **No mechanism** — transparency dashboard aggregation not designed (Doc 03 §16) |
| TC-3436 | Performance scorecard presents commitments vs measured progress factually; no ranking or editorial conclusion | US-0120 · FR-110 | Baselines, targets, evidence links displayed; no party-vs-party ranking; no editorial score or conclusion; methodology published | **No mechanism** — performance scorecard display not designed (Doc 03 §16) |
| TC-3437 | Zero per-user behavioural events in any store or log for any v2.0 surface; UT-0525 and UT-0740 remain green on every release | US-0121 · FR-111 | No per-user click/view/dwell/session event in any log or export; UT-0525 (indexer) and UT-0740 (client beacon) pass on every release; guarantee extended to all v2.0 governance surfaces | **No mechanism** — extension of no-telemetry guarantee to v2.0 surfaces not yet implemented; UT-0525/UT-0740 cover existing surfaces only; new v2.0 surfaces (committee portal, proposal lifecycle, conduct vote UI, dashboard) not yet built (Doc 03 §16) |

---

#### TC-3438..TC-3446 — FR-112..FR-120 (DES assigned — not yet implemented in this drop)

Each row status: **Blocked — Phase 3** — DES assigned in Doc 03 §5.2 (see column), but the implementing contracts (ProtocolGovernance, StewardRegistry, GovernanceConstants, TrustAnchorLifecycle) are not deployed in this drop.

| TC | Title | Verifies (US · FR · DES) | Expected result | Status |
|---|---|---|---|---|
| TC-3438 | Trust-anchor revocation enacted through member vote at highest tier; no operator or unilateral path | US-0122 · FR-112 · DES-090 | Operator EOA call to revoke trust anchor reverts; revocation reachable only through an enacted highest-tier proposal; on enactment, new enrolments against revoked anchor suspended; already-enrolled credentials unaffected unless separately voted | **Blocked — Phase 3** (DES-090; TrustAnchorLifecycle contract not deployed in this drop) |
| TC-3439 | After `abortRotation()`, pending anchor rejected for new enrolments; TrustAnchorLifecycle enters ROTATION_ABORTED state; incumbent hash restored | US-0123 · FR-113 · DES-090 | `abortRotation()` sets state ROTATION_ABORTED; enrolment call citing the pending anchor reverts; incumbent anchor hash restored; no retroactive invalidation of existing enrolments | **Blocked — Phase 3** (DES-090; TrustAnchorLifecycle state machine not deployed in this drop) |
| TC-3440 | StewardRegistry IMMUTABLE CORE: ABI contains no upgrade proxy, no admin key, no self-destruct, no delegatecall to external address | US-0124 · FR-114 · DES-088 | ABI inspection finds no upgrade/proxy/self-destruct/external-delegatecall surface; CI build-fails on any such addition; SC-15 general rule satisfied for StewardRegistry | **Blocked — Phase 3** (DES-088; StewardRegistry not deployed; CI assertion not yet wired) |
| TC-3441 | Steward powers ABI-allowlisted to exactly four categories; configuration beyond the list rejected by code | US-0125 · FR-115 · DES-089 | ABI allowlist covers: (a) draft/publish proposals, (b) coordinate audits/ceremonies/issuer-onboarding, (c) hold funds/sign vendor contracts, (d) publish operational reports; any additional capability configuration rejected at submission | **Blocked — Phase 3** (DES-089; steward powers ABI allowlist not implemented) |
| TC-3442 | CI assertion build-fails when any new steward-facing function is added outside the ABI allowlist | US-0126 · FR-116 · DES-089 | CI dep-guard assertion triggers build failure on PR if steward ABI allowlist is violated; merge is blocked | **Blocked — Phase 3** (DES-089; CI assertion for steward ABI allowlist not yet wired) |
| TC-3443 | No citizen-path module imports or references any steward-facing symbol from StewardRegistry | US-0127 · FR-117 · DES-089 | Static analysis confirms: no module in enrol, join, endorse, vote, propose, or fork citizen flows imports or calls StewardRegistry by any import path | **Blocked — Phase 3** (DES-089; StewardRegistry and citizen-path dep-guard not implemented) |
| TC-3444 | GovernanceConstants per-constant Amendment Layer enforced; STEWARD_INACTION_WINDOW setter accessible only via `onlyGovernor`; no external setter | US-0128 · FR-118 · DES-087 | Call to `setGovernanceConstant(STEWARD_INACTION_WINDOW, …)` from non-Governor address reverts; constant change requires enacted proposal; each constant classified and floor/ceiling-guarded per DES-091 | **Blocked — Phase 3** (DES-087, DES-091; GovernanceConstants and ProtocolGovernance not deployed) |
| TC-3445 | No bespoke unaudited cryptographic primitive in any governance path; only reviewed standard-library primitives | US-0129 · FR-119 · DES-087 | Code inspection and CI linter confirm zero custom cryptographic functions; all crypto primitives are from reviewed standard libraries (CON-012 discipline) | **Blocked — Phase 3** (DES-087; governance contracts not deployed; bespoke-crypto linter not yet wired to CI) |
| TC-3446 | Fork right entrenched and exercisable regardless of steward action or protocol vote; full lineage preserved | US-0130 · FR-120 · DES-034 | Fork initiation succeeds; complete public history exported; fork right not removable by any proposal, vote, or steward action; entrenched by FR-118 | **Blocked — Phase 3** (DES-034; `fork` flag OFF above dev; FR-053 open critical; Phase-3 only) |

---

#### TC-3447..TC-3448 — NFR-027 and NFR-028

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3447 | Every v2.0 governance surface produces zero per-user behavioural events; UT-0525 and UT-0740 remain green | NFR-027 (BR-017, BR-009) | Zero per-user behavioural events in any store, log, or export for all v2.0 surfaces (committee, proposal lifecycle, conduct vote, transparency dashboard, scorecard); UT-0525 and UT-0740 pass on every release | **Blocked — Phase 3** — UT-0525/UT-0740 cover existing surfaces and remain green; v2.0 governance surfaces not yet built; full guarantee requires all v2.0 surfaces deployed and verified |
| TC-3448 | Zero hard-delete or overwrite operations in any v2.0 governance store; every state transition appended with timestamp and cause; verified by audit inspection | NFR-028 (BR-019, BR-008) | Audit inspection of every v2.0 governance store (committee records, dispute trail, COI disclosures, manifesto commitments, conduct votes) finds 0 hard-delete or overwrite operations; all transitions append-only | **Blocked — Phase 3** — v2.0 governance stores not yet implemented; no audit mechanism exists in this drop |

---

#### TC-3449..TC-3455 — SC-15..SC-21 mandatory security-closure cases

**Context.** Findings SC-15..SC-21 were identified in the directed security scan SECURITY-SCAN-DOC03-V2-2026-08-11.md and all closed by the architect in SECURITY-RESCAN-SC15-21-2026-08-11.md. Each case below verifies the specific closure described in that rescan. All are blocked because the implementing contracts are not deployed in this drop.

| TC | Title | SC finding (severity — status) | Verifies | Expected result | Status |
|---|---|---|---|---|---|
| TC-3449 | **[SC-15 closure]** ProtocolGovernance IMMUTABLE CORE enforced: no competitor governance contract accepted at any routing surface; no upgrade proxy; no admin setter | SC-15 (CRITICAL — CLOSED) | FR-118 · DES-087 | ABI contains no upgrade/proxy/admin-key/self-destruct surface; CI build-fails on any violation; routing surfaces (electSteward, recallSteward, proposeAmendment, publishAuditRef, enact) refuse any externally-supplied governance contract address | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed in this drop) |
| TC-3450 | **[SC-16 closure]** STEWARD_INACTION_WINDOW guarded by `onlyGovernor`; no external setter; constant guarded in both directions by Amendment Layer | SC-16 (HIGH — CLOSED) | US-0129 · FR-119 · DES-091 | `setGovernanceConstant(STEWARD_INACTION_WINDOW, …)` from non-Governor address reverts; `onlyGovernor` modifier present; constant classifiable under Amendment Layer; both floor- and ceiling-guarded | **Blocked — Phase 3** (DES-091, DES-087; GovernanceConstants and ProtocolGovernance not deployed) |
| TC-3451 | **[SC-17 closure]** Citizen fallback for `publishAuditRef` activates after STEWARD_INACTION_WINDOW (60 days) with stewards SEATED but inactive (rescan re-attack #1); vacancy-immediate fallback for `revokeTrustAnchor` | SC-17 (HIGH — CLOSED) | FR-117 · DES-092 | `publishAuditRef()` call from enrolled citizen succeeds after 60-day inaction window with at least one steward registered in StewardRegistry but none having acted within STEWARD_INACTION_WINDOW (stewards present, not absent); `revokeTrustAnchor()` citizen fallback activates immediately on vacancy; audit substance unchanged by who published | **Blocked — Phase 3** (DES-092; ProtocolGovernance citizen-fallback path not deployed) |
| TC-3452 | **[SC-18 closure]** `abortRotation()` passes at Open Layer bar; state transitions to ROTATION_ABORTED; incumbent hash restored; pending anchor rejected for NEW enrolments post-abort; no retroactive invalidation | SC-18 (HIGH — CLOSED) | FR-113 · DES-090 | `abortRotation()` meets Open Layer quorum/supermajority; TrustAnchorLifecycle state = ROTATION_ABORTED; incumbent hash restored; new enrolment citing the aborted pending anchor reverts; already-enrolled credentials unaffected | **Blocked — Phase 3** (DES-090; TrustAnchorLifecycle state machine not deployed) |
| TC-3453 | **[SC-19 closure]** Citizen fallback for issuer-onboarding coordination after 60-day steward INACTION with stewards seated but inactive (rescan SC-19); steward coordination is convenience, not a control point | SC-19 (MEDIUM — CLOSED) | FR-117 · DES-092 | Issuer-onboarding coordination call from enrolled citizen succeeds after STEWARD_INACTION_WINDOW with at least one steward registered in StewardRegistry but none having triggered the coordination step within the window (stewards present, not absent); steward action is convenience infrastructure, never a required control point | **Blocked — Phase 3** (DES-092; citizen fallback for issuer-onboarding not deployed) |
| TC-3454 | **[SC-20 closure]** Quorum denominator = enrolled-citizen count fixed at `snapshotRoot`; any update to `snapshotRoot` between `firstVote` and `enact()` reverts `SnapshotImmutable` | SC-20 (MEDIUM — CLOSED) | US-0129 · FR-119 · DES-087 | `proposeAmendment()` fixes `snapshotRoot` and enrolled count at that block; call attempting to update `snapshotRoot` between `firstVote` open and `enact()` reverts with `SnapshotImmutable`; quorum computed from original enrolled count throughout | **Blocked — Phase 3** (DES-087; ProtocolGovernance `proposeAmendment/firstVote/secondVote/enact` not deployed) |
| TC-3455 | **[SC-21 closure]** STRIDE general rule satisfied: no routing surface accepts an externally-supplied address that could act as an alternative governance contract | SC-21 (LOW — CLOSED) | FR-118 · DES-087 | ABI inspection and STRIDE review confirm SC-15 general rule covers all routing surfaces; no externally-supplied governance-contract address accepted at any surface | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed; STRIDE review is design-only in this drop) |

---

#### TC-3456..TC-3464 — Guarded Layer property tests P1..P5 (Doc 03 §14)

**Context.** Doc 03 §14 specifies these property-based test cases with named revert conditions. They verify the invariants of the Guarded Layer super-process (FR-119, DES-087, DES-091). All constants: STEWARD_INACTION_WINDOW = 60 days, AUDIT_LEAD_TIME = 30 days, inter-vote window = 180 days, Tier-2 quorum = 25% of enrolled citizens at snapshotRoot, Tier-2 supermajority = 80% of votes cast (Doc 03 §10.11). All cases blocked until ProtocolGovernance deploys.

| TC | Property | Title | Verifies (US · FR · DES) | Expected result (named revert) | Status |
|---|---|---|---|---|---|
| TC-3456 | **P1** | `firstVote` closed with 75% YES (below 80% Tier-2 supermajority bar); `enact()` reverts `SupermajorityNotMet` | US-0129 · FR-119 · DES-087, DES-091 | Vote tally = 75% YES at `firstVote` close; `enact()` reverts `SupermajorityNotMet`; confirms supermajority check fires at first-vote stage | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3457 | **P2** | `secondVote` called before 180-day inter-vote window elapses reverts `WindowNotElapsed` | US-0129 · FR-119 · DES-087, DES-091 | `secondVote()` submitted at day 179 since `firstVote` reverts `WindowNotElapsed` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3458 | **P3a** | `enact()` before `firstVote` closes reverts `VoteNotComplete` | US-0129 · FR-119 · DES-087 | `enact()` called before `firstVote` window closes reverts `VoteNotComplete` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3459 | **P3b** | `enact()` before `secondVote` closes reverts `VoteNotComplete` | US-0129 · FR-119 · DES-087 | `enact()` called before `secondVote` window closes reverts `VoteNotComplete` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3460 | **P4a** | Post-snapshot-join has zero effect on eligibility for the in-flight proposal | US-0129 · FR-119 · DES-087 | Citizen enrolled after `snapshotRoot` is set for the in-flight proposal has no voting rights in that proposal; existing eligible-voter set unchanged | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3461 | **P4b** | Any call updating `snapshotRoot` between `firstVote` and `enact()` reverts `SnapshotImmutable` | US-0129 · FR-119 · DES-087 | State-modifying call that would update `snapshotRoot` between `firstVote` open and `enact()` reverts `SnapshotImmutable` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3462 | **P4c** | Churn-rate violation between first and second vote causes `enact()` to revert | US-0129 · FR-119 · DES-087 | Voter-set churn beyond the published limit between first and second vote causes `enact()` to revert with the churn-violation error | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3463 | **P5a** | Tier-2 `enact()` without a published audit reference reverts `AuditNotPublished` | US-0129 · FR-119 · DES-087 | `enact()` on a Tier-2 amendment without a prior `publishAuditRef()` call reverts `AuditNotPublished` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3464 | **P5b** | `enact()` when `publishAuditRef` timestamp is within AUDIT_LEAD_TIME (30 days) of `secondVote` open reverts `AuditLeadTimeNotSatisfied` | US-0129 · FR-119 · DES-087, DES-091 | `enact()` called when audit reference was published within 30 days before `secondVote` opened reverts `AuditLeadTimeNotSatisfied` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |

---

#### TC-3465..TC-3466 — FR-117 capability-absence suite (Doc 03 §14 hooks)

**Context.** Doc 03 §14 mandates a two-part capability-absence test for FR-117: (a) a static dep-guard that CI build-fails if any citizen-path module imports StewardRegistry, and (b) a dynamic vacancy simulation running the full citizen E2E with all steward seats vacant and verifying zero citizen-facing degradation. Both are blocked because StewardRegistry is not deployed and the citizen E2E flows are not yet complete for a vacancy simulation.

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3465 | **[FR-117 static dep-guard]** CI build-fails if any citizen-path module imports or references StewardRegistry | US-0127 · FR-117 · DES-089 | CI dep-guard assertion confirms: enrol, join, endorse, vote, propose, and fork citizen-path modules import zero steward-facing symbols from StewardRegistry; any violation causes build failure before merge | **Blocked — Phase 3** (DES-089; StewardRegistry contract not yet implemented; dep-guard CI assertion not yet written; Doc 04 §9 capability-absence pattern) |
| TC-3466 | **[FR-117 dynamic vacancy simulation]** Full citizen E2E (enrol → join → endorse → vote → propose → fork-petition) with 0 of N steward seats filled; zero citizen-facing degradation | US-0127 · FR-117 · DES-089, DES-092 | All six citizen flows complete successfully with all steward seats vacant; no citizen-facing degradation; no action requires steward liveness; mirrors UT-0700/UT-0701 absence-verification pattern at E2E scope | **Blocked — Phase 3** (DES-089, DES-092; steward election, multi-seat vacancy simulation, and fork-petition citizen path not implemented; E2E harness for vacancy simulation not yet built) |

---

#### TC-3467..TC-3469 — Follow-up audit 2026-08-12: vacancy-immediate fallbacks and anti-circularity direct attack

**Context.** These three cases address defects identified in the 2026-08-12 follow-up audit of TC-3451, TC-3453, and TC-3450. TC-3467 and TC-3468 exercise the vacancy-immediate citizen-fallback path that TC-3451 and TC-3453 under-tested (DES-092 steward-vacancy clause; ADR-019 amendment 2026-08-11). TC-3469 exercises the anti-circularity rule attack path that TC-3450 proves only on the constant classification mechanism. All three cases are inside the TS-GOV2 reservation TC-3400–TC-3499 (Doc 04 §14 v1.0.1). All are Blocked — Phase 3 with the concrete missing mechanism named.

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3467 | **[FR-117 vacancy-immediate: publishAuditRef]** `publishAuditRef()` citizen fallback activates IMMEDIATELY with no STEWARD_INACTION_WINDOW wait when `StewardRegistry` has zero registered stewards | US-0127 · FR-117 · DES-092 (ADR-019 amendment 2026-08-11; rescan SC-17 re-attack #2) | `StewardRegistry.registeredStewardCount() == 0`; enrolled citizen calls `publishAuditRef()` with zero delay from `firstVoteClosedAt`; call succeeds immediately — no 60-day wait applied; `auditPublishedAt` recorded; audit substance requirements (independence, scope, 30-day lead time before `secondVote`) unchanged; asserts `STEWARD_INACTION_WINDOW` is NOT required when vacancy is detected | **Blocked — Phase 3** (DES-092 vacancy-immediate fallback; StewardRegistry and ProtocolGovernance `publishAuditRef()` citizen path not deployed; no vacancy-detection mechanism in this drop) |
| TC-3468 | **[FR-117 vacancy-immediate: issuer-onboarding coordination]** Issuer-onboarding coordination citizen fallback activates IMMEDIATELY with no STEWARD_INACTION_WINDOW wait when `StewardRegistry` has zero registered stewards | US-0127 · FR-117 · DES-092 (ADR-019 amendment 2026-08-11 — same vacancy-immediate rule as SC-17; rescan SC-19) | `StewardRegistry.registeredStewardCount() == 0`; enrolled citizen triggers the issuer-onboarding coordination step with zero delay; call succeeds immediately — no 60-day wait applied; steward coordination step is convenience infrastructure, not a control point; confirmed by rescan SC-19: "same vacancy-immediate rule as SC-17. No 60-day wait on vacancy" | **Blocked — Phase 3** (DES-092 vacancy-immediate fallback for issuer-onboarding coordination; StewardRegistry and citizen-onboarding-coordination path not deployed; no vacancy-detection mechanism in this drop) |
| TC-3469 | **[SC-16 anti-circularity direct attack]** Open Layer vote (60%/15%) attempts `GovernanceConstants` setter to LOWER a Guarded Layer constant — Tier-2 quorum 25%→16% and Tier-2 supermajority 80%→61% — and the call reverts | US-0129 · FR-119 · DES-091 · DES-087 (rescan §3 re-attack #1) | Open Layer vote passes (60% supermajority, 15% quorum); `Governor.execute()` invokes `GovernanceConstants` setter for `TIER2_QUORUM` with value 16 and `TIER2_SUPERMAJORITY` with value 61; call reverts at `onlyGovernor` guard / `permittedActionClass` / Amendment Layer classification check — the Governor recognises that the target constants are classified "Guarded Layer (anti-circularity: SC-16)" per DES-091 and refuses an Open Layer vote's setter call; no constant mutated; this is the attack the anti-circularity rule exists to stop, exercised directly | **Blocked — Phase 3** (DES-091 Amendment Layer classification; DES-087 `onlyGovernor` guard and `permittedActionClass` binding; `GovernanceConstants` and `ProtocolGovernance` not deployed in this drop) |

---

## 5.3 `TS-SCAFFOLD` — scaffold seam & design-system seed (TC-3470–TC-3488, TC-3568)

**Context.** This suite covers the three user stories minted in Doc 05 v2.2.0 that complete the v1 scaffold seam and design-system seed (DES-093 token set, DES-094 PrivacyStatus, DES-095 IEligibilityVerifier, DES-096 IBallotService, DES-100 allowlist-only shape; ADR-023/024/025). **17 of 20 cases are automated and green** _(v2.5.0: this read "15 of 18", a pre-TC-3488 figure left standing after TC-3488 was minted at v2.2.1 and now stale again after TC-3568; §2 has said 16 of 19 since v2.2.1 and 17 of 20 since v2.5.0)_ — `npm test -w @trumocracy/ui` (14/14, packages/ui, UT-0750..UT-0758) and `npm test -w @trumocracy/sdk` (160/160 including 36 seam tests, UT-0760..UT-0779) both green 2026-08-25. The suite now also carries **TC-3568** (UT-0759, the backing-aware `ver` **title** four-path, Doc 06 v2.5.1), green in run R-17. 3 cases are Blocked: screen wiring is pending for the enrolment disclosure affordance (TC-3476), the FR-131 clause (d) notice surface (TC-3481), and the audit-contract publication endpoint (TC-3487). The seam contracts are IS_INSECURE_MOCK=true in this drop (ADR-024 §3); the seam interface and its guard behaviour are real; the ZK-backed production implementation is Phase 3.

**Shared preconditions.** `design_system` flag ON (DES-093/DES-094 token set deployed to packages/ui); `sdk_seams` flag ON (DES-095/DES-096 stubs deployed to packages/sdk); IS_INSECURE_MOCK=true (stub-backed; ADR-024 §3).

---

### TC-3470..TC-3476 — US-0132 PrivacyStatus tier display, self-view refusal, backing-aware copy, absence (DES-093/DES-094 · FR-082..FR-086 · FR-124)

**Context.** PrivacyStatus is a pure display component (DES-094) built on the design-system token set (DES-093). It renders the anonymity tier (Supporter / Worker / Candidate) and, where applicable, a backing-aware 'ver' copy based on `backing.isVerified`. The component refuses to render verified-status for the viewing user themselves (self-view contract). TC-3470..TC-3475 are automated (UT-0750..UT-0758, packages/ui/test/PrivacyStatus.test.tsx); TC-3476 is Blocked pending enrolment-screen wiring.

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3470 | Supporter-tier: component renders the **clause-10 v1** `anon` copy; the superseded pair does not render; no attributable record surface | US-0132 · FR-082, FR-131(e) · DES-093/DES-094 clause 10 | `tier = 'SUPPORTER'`; no profile prop | Component renders **"Open tier"** and the fail-honest default **"Our own records can link what you do here to your account."**; the superseded pair — **"Anonymous"** and **"Nothing you do here is linked to you"** — is **absent from the DOM**; no attribution signal in DOM | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0750 | **Pass (obs.)** — `packages/ui` **25/25** in run **R-21**, 2026-09-21. _(**v2.11.0 note, ISS-05 — `UT-0750`'s anon assertion was FLIPPED by this drop, and this row described the string the component must now REFUSE to render.** Doc 06 **v2.11.1**: "**UT-0750's anon assertion FLIPPED** — it had pinned the superseded pair, so a **green test guarded the non-compliant string** (§7 item 26 ISS-05(i))". The old expectation was the Supporter-tier "anonymous copy"; under Doc 03 §10.12.3 **clause 10** (OPEN-27) the v1 `anon` state renders "Open tier" plus a context-selected subtitle, and **"Anonymous" is an FR-131(e) overclaim**. Title, Verifies and Expected are restated to what the `it` now asserts; **the status does not change and the case was never failing** — it was passing against a superseded expectation, which is worse than failing and is why it is annotated rather than quietly edited. This is exactly the treatment `TC-3471`/`UT-0751` received at v2.5.0. The evidence cite also read "npm test -w @trumocracy/ui **14/14**, 2026-08-25" — a run this file **no longer produces**: `packages/ui` is **25** tests since `UT-0903` landed. Refreshed to R-21. `TC-3613` is the case that carries clause 10's own four-path guarantee.)_ |
| TC-3471 | Worker-tier: component renders public-from-consent copy | US-0132 · FR-083 · DES-093/DES-094 | `tier = 'WORKER'` | Component renders Worker-tier copy indicating participation record is public from consent event; ballot direction copy absent | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0751 | **Pass (obs.)** — re-confirmed green in R-17 (`packages/ui` 18/18, 2026-09-06). _(v2.5.0 note: **UT-0751’s expectation changed** at Doc 06 v2.5.1 — the `ver`-state default title it asserts moved from "Verified — private" to **"Verified"** so the v1 default carries no FR-131 banned word. This row’s expected result is written at the level of *which copy block renders*, not the exact title string, so it stands unaltered; the title assertion itself is now covered explicitly by **TC-3568**. Recorded rather than left silent, because a reader who follows TC-3471 to UT-0751 will find an assertion this cell does not quote.)_ |
| TC-3472 | Candidate-tier: component renders permanent-disclosure copy | US-0132 · FR-084 · DES-093/DES-094 | `tier = 'CANDIDATE'` | Component renders Candidate-tier copy indicating full permanent disclosure schedule; disclosure schedule surface present | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0752 | **Pass (obs.)** |
| TC-3473 | Self-view refusal: component returns null for null holder token, wrong-holder token, and empty token | US-0132 · FR-124 · DES-094 | (a) `viewerToken = null`; (b) `viewerToken ≠ holderToken`; (c) `viewerToken = ''` | Component returns null for all three cases; no verified-status leaks to the viewing user's own surface | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0754, UT-0755, UT-0756 | **Pass (obs.)** |
| TC-3474 | DOM absence: only approved tier strings present; zero surveillance metadata in any DOM node | US-0132 · FR-082, FR-083, FR-084, FR-085, FR-086, FR-124 · DES-093/DES-094 | Rendered DOM of PrivacyStatus at each tier | DOM contains only the approved tier copy strings; zero tracking attributes, user-identifiable tokens, or surveillance metadata in any DOM node | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0757 | **Pass (obs.)** |
| TC-3475 | Backing-aware 'ver' copy: four-path coverage (absent / false / true / malformed `backing.isVerified`) | US-0132 · FR-124 clause 7 · DES-094 | (a) no backing prop; (b) `backing.isVerified = false`; (c) `backing.isVerified = true`; (d) `backing = { isVerified: null }` | (a)+(b)+(d) → fail-honest default copy (no upgrade claim); (c) → upgraded 'ver' claim in copy; malformed/partial prop treated as absent (Doc 06 §2 clause 7) | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0758 | **Pass (obs.)** |
| TC-3476 | Clause-8 disclosure affordance rendered at enrolment screen | US-0132 · FR-131 clause 8 · DES-094 | Enrolment screen wired with PrivacyStatus component | Disclosure affordance renders the full clause-8 disclosure text before any consent button is active; no consent is recordable before affordance is visible | Designed, not automatable yet — enrolment screen (DES-098) not yet wired with PrivacyStatus; component unit tests pass | **Blocked** — enrolment screen integration pending. _(v2.10.0 — **the `FR-085` link is REMOVED from this row's Verifies cell, and the removal is a subject-matter ruling, not a convenience.** Doc 03 v2.16.0 §15 surfaced this case for the tester's ruling because it sat on Doc 08's FR-085 row. **It does not belong there.** This case tests the **clause-8 disclosure affordance on the ENROLMENT screen**; FR-085 governs the **candidacy** informed-consent event and the destruction of pre-nomination disclosure data. They are different acts on different surfaces, and Doc 02 §4.45 already places personhood-enrolment and identity-verification claims **expressly outside** the FR-131 clause (e) route and inside FR-132 §(d) — the same boundary Doc 08 v2.12.0 used to keep the fifteen `UT-0890` cases off FR-131. **Nothing is lost by the removal:** this case keeps its `FR-131 clause 8`, `US-0132` and `DES-094` links, keeps its **Blocked** status, and keeps its place on Doc 08's FR-131 row, where it already sits and where it is already counted. **The removal is not what closes FR-085** — FR-085 closes on `TC-3411`, `TC-3599`, `TC-3605` and `TC-3614`, each with a passing test for a named clause, and it would close with or without this row. Recorded here so a reader checking whether a Blocked case was moved out of the way can see the argument rather than infer a motive.)_ |

---

### TC-3477..TC-3481 — US-0133 counting-gate pass/refuse, allowlist-only shape, IS_INSECURE_MOCK delegation (DES-095/DES-100 · FR-122 · FR-123 · FR-132)

**Context.** IEligibilityVerifier (DES-095) gates all counting-tier actions. DES-100 defines the allowlist-only action-type shape: only counting actions are permitted; JOIN, LEAVE, and account-creation are NOT in the allowlist and MUST throw `IllegalActionType`. IS_INSECURE_MOCK=true delegates to the stub (ADR-024 §3, ADR-025). TC-3477..TC-3480 are automated (UT-0760..UT-0769, packages/sdk/test/seams.test.js); TC-3481 is Blocked (FR-131 clause (d) UI notice pending — the seam refuses correctly at the SDK layer but the client notice surface is not wired).

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3477 | Verified participant (verificationLevel=COUNTING) passes counting gate | US-0133 · FR-123 · DES-095 · ADR-025 | `participant.verificationLevel = 'COUNTING'`; IS_INSECURE_MOCK=true | `IEligibilityVerifier.verify()` returns true; counting action proceeds | Automated — `packages/sdk/test/seams.test.js` · UT-0760, UT-0761, UT-0762 | **Pass (obs.)** — npm test -w @trumocracy/sdk 160/160, 2026-08-25 |
| TC-3478 | Open-tier participant (verificationLevel=OPEN) refused at counting gate | US-0133 · FR-122 · DES-095 · ADR-025 | `participant.verificationLevel = 'OPEN'` | `IEligibilityVerifier.verify()` returns false; counting action refused; refusal reason emitted | Automated — `packages/sdk/test/seams.test.js` · UT-0763, UT-0764 | **Pass (obs.)** |
| TC-3479 | JOIN, LEAVE, and account-creation action types throw `IllegalActionType` (DES-100 allowlist-only shape) | US-0133 · FR-132 · DES-095, DES-100 · ADR-025 | Action types: JOIN, LEAVE, ACCOUNT_CREATION | Each call throws `IllegalActionType`; no silent pass; allowlist contains only counting actions | Automated — `packages/sdk/test/seams.test.js` · UT-0765 | **Pass (obs.)** |
| TC-3480 | IS_INSECURE_MOCK=false with no vendor bound → `VendorNotBound`; no silent pass for any verification level | US-0133 · FR-132 · DES-095 · ADR-024 | IS_INSECURE_MOCK=false; no vendor injected | `IEligibilityVerifier.verify()` throws `VendorNotBound`; no action proceeds; no silent pass for any verification level | Automated — `packages/sdk/test/seams.test.js` · UT-0766, UT-0767, UT-0768, UT-0769 | **Pass (obs.)** |
| TC-3481 | FR-131 clause (d) open-tier notice displayed on client surface before counting action is refused | US-0133 · FR-131 · DES-095 | Client surface with counting action gate; `participant.verificationLevel = 'OPEN'` | UI renders the clause (d) notice informing the open-tier participant that counting actions require verified status before refusing; seam refuses correctly at the SDK layer (TC-3478) | Designed, not automatable yet — UI notice surface DES-098 not wired; SDK refusal itself passes | **Blocked** — *(amended v2.3.0)* the clause (d) notice IS now built and tested at the **parties-directory counting surface** (TC-3534 · UT-0864: four clauses, rendered before the refusal, no dismiss control). TC-3481 nevertheless stays **Blocked**, because it is written against the **ballot** counting surfaces (SCR-13/SCR-14), which are not built in this drop (Doc 06 §7 #21). Partial delivery is recorded, not promoted to a pass. |

---

### TC-3482..TC-3487 — US-0134 IBallotService cast, ballot-change, tally, refusal, embargo, audit-contract publication (DES-096 · FR-131)

**Context.** IBallotService (DES-096) exposes cast, ballot-change, tally, and refusal-without-ref operations. IS_INSECURE_MOCK=true (ADR-024 §3). TC-3482..TC-3486 are automated (UT-0770..UT-0776, packages/sdk/test/seams.test.js); TC-3487 is Blocked (audit-contract publication endpoint not wired — the seam produces a tally-hash but no public audit endpoint exists in this drop).

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3482 | Cast recorded, receipt returned, ballot direction never revealed | US-0134 · FR-131 · DES-096 · ADR-024 | Valid `eligibilityRef` from IEligibilityVerifier; IS_INSECURE_MOCK=true | `IBallotService.cast()` returns a receipt; ballot recorded; no direction signal in any output; no party or candidate attribution observable from receipt | Automated — `packages/sdk/test/seams.test.js` · UT-0770, UT-0771 | **Pass (obs.)** — npm test -w @trumocracy/sdk 160/160, 2026-08-25 |
| TC-3483 | Silent ballot-change: only last cast counts; no distinguishing signal between first cast and subsequent change | US-0134 · FR-131 · DES-096 | Two sequential casts by same participant | Second cast silently supersedes first; tally reflects only second cast; no observable difference in receipt between first cast and change | Automated — `packages/sdk/test/seams.test.js` · UT-0772 | **Pass (obs.)** |
| TC-3484 | Tally emits deterministic tally-hash; hash matches independent re-computation from same inputs | US-0134 · FR-131 · DES-096 | Closed ballot with known cast set | `IBallotService.tally()` returns tally-hash; independent re-computation from same inputs reproduces identical hash; individual ballot directions not recoverable from hash | Automated — `packages/sdk/test/seams.test.js` · UT-0773, UT-0774 | **Pass (obs.)** |
| TC-3485 | Cast refused without valid eligibilityRef; clause (d) notice emitted; no ballot record created | US-0134 · FR-131 · DES-096 | `eligibilityRef` absent or invalid | `IBallotService.cast()` refuses; clause (d) notice emitted by seam; no ballot record persisted | Automated — `packages/sdk/test/seams.test.js` · UT-0775 | **Pass (obs.)** |
| TC-3486 | Tally refused while ballot open — results embargo maintained | US-0134 · FR-131 · DES-096 | Ballot state = OPEN | `IBallotService.tally()` refuses with embargo error; no results data emitted; embargo maintained until ballot state transitions to CLOSED | Automated — `packages/sdk/test/seams.test.js` · UT-0776 | **Pass (obs.)** |
| TC-3487 | Audit-contract publication: tally-hash endpoint wired and publicly accessible | US-0134 · FR-131, BR-005 · DES-096 | Closed ballot with published tally-hash; audit-contract endpoint configured | Tally-hash reachable at the declared audit-contract endpoint; any third party can independently retrieve and verify the hash | Designed, not automatable yet — IS_INSECURE_MOCK=true; audit-contract endpoint wiring pending; stub produces a hash (TC-3484) but no public endpoint exists in this drop | **Blocked** — audit-contract wiring pending |

---

### TC-3488, TC-3568 — US-0132 / US-0134 PrivacyStatus accessible name and backing-aware `ver` title (NFR-011 · FR-131 · FR-124 · DES-094)

**Context (v2.2.1 rework — 07-test-cases-suites-v2.2.0-technical-cycle1.md ISS-01).** UT-0753 (`it('UT-0753 the component carries an accessible name matching the state title', ...)` in `packages/ui/test/PrivacyStatus.test.tsx`) existed in the repository and executed in the 14-test UI suite at v2.2.0 but was not mapped to any TC, making it a material orphan. This row closes that gap. Type: a11y.

**Context (v2.5.0 — FR-131 honesty drop, Doc 06 v2.5.1).** `UT-0759` was added to the same file at commit `0a5c542`, giving the `ver`-state **title** the four-path backing-aware treatment `UT-0758`/TC-3475 already gave the **subtitle**. The v1 default title moved from "Verified — private" to "Verified", because FR-131’s closing sentence bans "private" as a description of v1 voting and the v1 backing is conventional. `UT-0753`’s assertion changed with it (it now expects `aria-label` "Verified"), which is why TC-3488’s status carries an R-17 re-confirmation below. **TC-3568 is one TC for the whole four-path block**, following the TC-3475/UT-0758 precedent rather than minting four rows for four `it`s.

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3488 | Accessible name: component root carries an accessible name matching the displayed tier state title | US-0132 · NFR-011 · DES-094 | `PrivacyStatus` rendered at each tier (Supporter, Worker, Candidate, and refused/null states); accessibility tree inspected | Component root element carries an accessible name that matches the displayed tier state title; assistive technology can identify the component's current tier state without visual inspection | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0753 | **Pass (obs.)** — npm test -w @trumocracy/ui 14/14, 2026-08-25 (UT-0753 was already in the 14/14 run at v2.2.0; TC mapping added v2.2.1); **re-confirmed green in R-17** (`packages/ui` 18/18, 2026-09-06) after UT-0753’s expected `aria-label` changed from "Verified — private" to "Verified" at Doc 06 v2.5.1. The case is unchanged — the accessible name still matches the displayed state title; what the title *is* changed |
| TC-3568 | Backing-aware `ver` **title**: four-path coverage (absent / `false` / `true` / malformed `backingProperties.unlinkable`), with no FR-131 banned word on the v1 default | US-0134 · FR-131 closing sentence, FR-124 · **DES-094 clause 9** (the title rule, minted Doc 03 v2.12.0 and carried into **v2.13.0** — **In Review**; clause 7 governs the subtitle) | `state = "ver"`, valid self-view; (a) no `backingProperties`; (b) `{ unlinkable: false }`; (c) `{ unlinkable: true }`; (d) `{ onePersonOneVote: false }` — a partial prop with no `unlinkable` field | **Stated path by path, because this cell previously claimed more than the test asserts (v2.6.0, ISS-01).** **(a)** absent `backingProperties` — the full four-assertion path: title **"Verified"** present, "Verified — private" absent, the `status` element’s `aria-label` exactly **"Verified"**, and the rendered `textContent` matching **no** FR-131 banned word (the test’s case-insensitive `BANNED` regex covers "private", "anonymous", "receipt-free" and "secure"). **(b)** `{ unlinkable: false }` and **(d)** `{ onePersonOneVote: false }` (a partial prop with no `unlinkable` field) — **title selection only**: "Verified" present and "Verified — private" absent, the fail-honest v1 default with malformed treated as absent. **Neither (b) nor (d) asserts the `aria-label`, and neither asserts the banned-word regex.** **(c)** `{ unlinkable: true }` — **alone** renders **"Verified — private"** with a matching `aria-label`, the one case in which the word is true of the ballot; it makes no banned-word assertion, correctly, since "private" is present and true there. **Scope limit:** the accessible-name and banned-word guarantees are evidence on path (a) only; extending them to (b) and (d) is owed UT scope for the engineer (Samuel Oyelaran) if the wider guarantee is wanted, and is not recorded here as covered | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0759 | **Pass (inh.)** — Doc 06 v2.5.1; `packages/ui` **18/18** green in run R-17 (2026-09-06). **The Doc 06 §4a recorded deviation is discharged CONDITIONALLY — on Doc 03 reaching Approved** _(v2.6.0, ISS-03: v2.5.0 wrote "DISCHARGED, 2026-09-06" unqualified, on a source that is In Review)_. It read: the Doc 03 §10.12.3 sub-table listed "Verified — private" for the **v1** row, FR-131 was normative over that copy table (Doc 09 v1.3.0 ISS-03; approver, 2026-09-05), and the SDD cascade was owed — so UT-0759 was standing in as the only record of the intended copy. Doc 03 **v2.12.0** landed that cascade the same day: the v1 row now reads "Verified", the v2.7.0 banned-words analysis is **overruled**, and §10.12.3 gained **clause 9** stating the title rule normatively. This case therefore verifies **the current corrected text** of DES-094 clause 9 rather than substituting for a design element — but **not an approved one**: Doc 03 reads `Status: In Review`, v2.12.0 FAILED cycle 1 of its neutral technical review (89%, 0C/1H/2M/2L) and **v2.13.0** (2026-09-06) is the rework, itself under cycle-2 review, so clause 9 may still move. Until Doc 03 is Approved, UT-0759 and this case remain the operative record of the intended copy. **v2.8.0 — THE CONDITION IS SATISFIED; the discharge is now UNCONDITIONAL** _(ISS-04 rider; the conditional wording above is retained, not deleted, because it records why the caveat existed)_. **Doc 03 v2.13.0 is Approved** (03-architecture-design-sdd-v2.13.0-technical-cycle2.md, PASS 97%), so DES-094 **clause 9** is settled text and can no longer move under this case. TC-3568 therefore verifies an **approved** design element, the Doc 06 §4a recorded deviation is **DISCHARGED** without qualification, and UT-0759 is no longer standing in as the operative record of the intended copy — the SDD is. **Nothing about what the case asserts changes**, and its status does not move: this is the caveat expiring on its own stated terms, which is what a well-formed conditional discharge is supposed to do |

---

## 5.4 `TS-PARTY` — Party-creation flow: FR-010/011/012/013/018/020/077/130 · BR-020 (TC-3489–TC-3516)

**Context.** These 28 cases cover the party-creation drop delivered in Doc 06 v2.2.0 (Approved, PASS 97%, suite 491 tests green: 95/126/197/14/16/43). The protocol, service, and web layers implement all referenced FRs at `IS_INSECURE_MOCK=true` (in-memory store); production-persistent store is pending DES-097 wiring. All TCs inherit their green status from Doc 06 v2.2.0 Approved: `packages/protocol/test/party-creation.test.js` 44/44, `packages/sdk/test/party-creation.test.js` 37/37, `apps/web/test/party-creation.test.tsx` 27/27. **None of these TCs were executed by the tester this session.** FR-077 and FR-130 carry G-TRACE (no DES assigned in Doc 03 §5.2); the TC evidence is recorded honestly — the code exists, but the traceability chain is broken at the DES link.

**Shared preconditions.** `IS_INSECURE_MOCK=true`; `packages/protocol/src/` exports `validateDraft`, `applyCharterDefaults`, `normalizeCollisionKey`, `charterFingerprint`; `packages/sdk/src/party-creation/` exports `PartyCreationService` and `InMemoryPartyStore`; `apps/web/src/party-creation/` provides the party-creation web flow. All time-sensitive assertions use deterministic timestamps — no `Date.now()` randomness.

### TC-3489..TC-3493 — FR-010 draft creation / collision (DES-073 · US-0011)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3489 | Duplicate normalised party name rejected with COLLISION error | US-0011 · FR-010 · DES-073 | First party with name "Non-Violence Party" created; `normalizeCollisionKey` produces "nonviolenceparty"; second draft submitted with same normalised key; IS_INSECURE_MOCK=true | `PartyCreationService.submit()` returns `{ error: 'COLLISION' }` on second submission; membership count of first party unaffected; no duplicate record persisted | Automated — `packages/sdk/test/party-creation.test.js` · UT-0787, UT-0788, UT-0789 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3490 | Emblem URI exceeding maximum allowed length rejected at protocol validation | US-0011 · FR-010 · DES-073 | Draft with `charter.emblemUri` of length > `MAX_EMBLEM_URI_LENGTH` (constant from `packages/protocol/src/constants.js`); valid in all other fields | `validateDraft` returns error citing emblem-URI length violation; draft not persisted; exact error key matches the constant boundary | Automated — `packages/protocol/test/party-creation.test.js` · UT-0064, UT-0065 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3491 | Same normalised name in a different jurisdiction is not a collision — cross-jurisdiction boundary | US-0011 · FR-010 · DES-073 | Party "Labour Party" exists in jurisdiction "GB"; second draft "Labour Party" with jurisdiction "IE"; `normalizeCollisionKey` embeds jurisdiction | `normalizeCollisionKey` produces distinct keys; no COLLISION raised; both drafts accepted independently; collision key derivation verified by inspection | Automated — `packages/protocol/test/party-creation.test.js` · UT-0086 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3492 | Draft with all required fields present passes the protocol validation gate | US-0011 · FR-010 · DES-073 | Complete draft: name, emblem, jurisdiction, constituency, values, manifesto, charter, contact — all non-empty and within declared bounds | `validateDraft` returns no errors; all pillar checks pass; draft eligible for service submission | Automated — `packages/protocol/test/party-creation.test.js` · UT-0060 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3493 | TOCTOU collision re-check: second submission with same key refused after first commits | US-0011 · US-0131 · FR-010 · FR-130 · DES-073 | Two concurrent `PartyCreationService.submit()` calls with same normalised key; service acquires a per-key lock; first call commits; second call re-checks after acquiring lock | Second submission detects collision on TOCTOU re-check and returns `{ error: 'COLLISION' }`; no duplicate record written; lock released after second call | Automated — `packages/sdk/test/party-creation.test.js` · UT-0818 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3494..TC-3496 — FR-011 eight mandatory pillars gate (DES-074 · US-0014 · US-0015)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3494 | Draft missing any pillar rejected with INCOMPLETE_DRAFT naming absent fields | US-0014 · FR-011 · DES-074 | Seven separate drafts, each omitting exactly one of the eight required pillars (name, emblem, jurisdiction, constituency, values, manifesto, charter, contact) | Each single-pillar-absent draft returns `{ error: 'INCOMPLETE_DRAFT', missingPillars: [<pillarName>] }` naming the absent pillar; draft not persisted in any case | Automated — `packages/protocol/test/party-creation.test.js` · UT-0060, UT-0061, UT-0062, UT-0063 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3495 | Service layer enforces eight-pillar gate before persisting; all four SDK-level pillar checks pass | US-0014 · FR-011 · DES-074 | Parameterised drafts with one, two, and zero missing pillars submitted to `PartyCreationService`; IS_INSECURE_MOCK=true | Service refuses single- and multi-pillar-absent drafts; correct `missingPillars` array in each response; a complete draft proceeds to TOCTOU collision check | Automated — `packages/sdk/test/party-creation.test.js` · UT-0783, UT-0784, UT-0785, UT-0786 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3496 | Web form displays deficiency notice naming missing pillars; submission blocked | US-0015 · FR-011 · DES-074 | Party-creation web form rendered; user attempts submission with required fields missing; IS_INSECURE_MOCK=true | Form validation surfaces INCOMPLETE_DRAFT notice; each missing pillar named; submit button disabled or submission blocked; no draft reaches the service layer | Automated — `apps/web/test/party-creation.test.tsx` · UT-0845 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3497..TC-3498 — FR-012 charter bounds and defaults (DES-017 · US-0013)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3497 | `applyCharterDefaults` populates all missing optional charter fields from governance constants | US-0013 · FR-012 · DES-017 | Draft with charter object missing optional tier-bound fields; `CHARTER_DEFAULTS` constants defined in `packages/protocol/src/constants.js` | `applyCharterDefaults(draft)` returns draft with every charter field populated at its governance-constant default; no field left `undefined`; idempotent on a fully specified charter | Automated — `packages/protocol/test/party-creation.test.js` · UT-0076, UT-0077, UT-0078, UT-0079, UT-0080, UT-0081, UT-0082 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3498 | Charter tier bounds validated: min/max boundary values honoured; additive chain (Supporter ≤ Worker ≤ Candidate) enforced | US-0013 · FR-012 · DES-017 | Boundary-value sweep: tier bounds at exact min, exact max, min − 1, max + 1; additive-chain violations (e.g. Worker floor < Supporter floor); all within one parameterised `validateCharter` call set | Bounds at exact min and max accepted; bounds outside range yield `CHARTER_BOUNDS_VIOLATION`; additive-chain inversions yield `CHARTER_CHAIN_VIOLATION`; no edge case silently passes | Automated — `packages/protocol/test/party-creation.test.js` · UT-0066, UT-0067, UT-0068, UT-0069, UT-0070 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3499..TC-3503 — FR-013 petition expiry, immutable archive, cooldown (DES-009 · US-0021)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3499 | Petition expires at `expiresAt` timestamp; state transitions to EXPIRED; no further endorsements accepted | US-0021 · FR-013 · DES-009 | Petition created with `expiresAt = now + PETITION_EXPIRY_SECONDS`; `Chain.warp()` advances time past `expiresAt` | `partyStatus(partyId)` returns EXPIRED; subsequent `endorse()` call refused with `PETITION_EXPIRED`; expiry is deterministic on the `expiresAt` value, not wall clock | Automated — `packages/sdk/test/party-creation.test.js` · UT-0795, UT-0796 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3500 | Expired petition archived with immutable `archivedAt` timestamp; no endorsement mutation after archival | US-0021 · FR-013 · DES-009 | Petition in EXPIRED state; archive triggered; subsequent `endorse()` attempted | `archivedAt` field set and immutable (second archive call returns same value); `endorse()` post-archive refused; archive record contains deterministic fingerprint | Automated — `packages/sdk/test/party-creation.test.js` · UT-0797, UT-0800 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3501 | `charterFingerprint` is deterministic — identical charter inputs always produce the same hash; single-character change changes hash | US-0021 · FR-013 · DES-009 | Two independent calls to `charterFingerprint` with identical charter objects; then one field changed by a single character | Both identical-input calls return the same hash; changed-input call returns a different hash; field-ordering does not affect the hash value | Automated — `packages/protocol/test/party-creation.test.js` · UT-0083, UT-0084, UT-0085 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3502 | `archivedAt` is deterministic — same petition state always produces the same archive timestamp; no `Date.now()` in archive path | US-0021 · FR-013 · DES-009 | Petition archived with known state; `archivedAt` computation invoked twice on identical state inputs | Both calls return identical `archivedAt` value; grep confirms no `Date.now()` call in the `archive` code path | Automated — `packages/sdk/test/party-creation.test.js` · UT-0817 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3503 | Re-petition cooldown enforced: originator re-submits within `COOLDOWN_SECONDS` → refused; after cooldown → permitted | US-0021 · FR-013 · DES-009 | Petition archived (expired); originator submits new petition within `COOLDOWN_SECONDS` (`Chain.warp()` keeps time inside window); then `Chain.warp()` advances past cooldown for a third submission | Second petition returns `{ error: 'COOLDOWN_ACTIVE', unlocksAt: <timestamp> }`; third petition (past cooldown) accepted; cooldown boundary is inclusive on the unlock timestamp | Automated — `packages/sdk/test/party-creation.test.js` · UT-0798, UT-0799 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3504..TC-3506 — FR-018 automatic activation threshold gate (DES-009 · US-0022)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3504 | Activation refused when endorsement count is one below the configured threshold | US-0022 · FR-018 · DES-009 | Petition with endorsement count = `ACTIVATION_THRESHOLD − 1`; activation attempted | Activation refused; `partyStatus` remains PETITIONING; response includes `{ error: 'BELOW_THRESHOLD', required: <threshold>, current: <count> }` | Automated — `packages/sdk/test/party-creation.test.js` · UT-0814 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3505 | Activation passes when endorsement count meets the threshold exactly | US-0022 · FR-018 · DES-009 | Petition with endorsement count = `ACTIVATION_THRESHOLD` exactly; activation attempted | Activation succeeds; `partyStatus` transitions to PROVISIONAL (active but capped); no approval step required beyond the code threshold | Automated — `packages/sdk/test/party-creation.test.js` · UT-0815 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3506 | 500-member floor: `ACTIVATION_THRESHOLD` cannot be configured below 500 | US-0022 · FR-018 · DES-009 | Attempt to initialise `PartyCreationService` with `activationThreshold < 500` | Constructor or configuration validation throws `THRESHOLD_BELOW_FLOOR`; `MIN_ACTIVATION_THRESHOLD = 500` constant enforced in code; no runtime path bypasses this floor | Automated — `packages/sdk/test/party-creation.test.js` · UT-0816 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3507 — FR-020 join without approval (DES-013 · ADR-007 · US-0024)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3507 | Member joins a provisional party without any approval step, verifier, or invitation; join accepted on identity proof alone | US-0024 · FR-020 · DES-013 · ADR-007 | Active provisional party below cap; member with valid identity proof (`IS_INSECURE_MOCK=true`; mock eligibility reference) | `joinParty()` succeeds immediately; no approval, sponsorship, interview, invitation, fee, or veto path exists in the code; membership record created; `partyStatus` member count increments | Automated — `packages/sdk/test/party-creation.test.js` · UT-0807 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3508..TC-3510 — FR-077 non-violence clause verbatim / non-removable (DES-101 · SCR-04, SCR-05 · US-0087)

_Note (v2.3.1): **DES-101** (Doc 03 v2.8.1 §10.13.10) now supplies the design link FR-077 previously lacked, with SCR-04/SCR-05 bound; the G-TRACE chain gap is closed. **The FR-077 Must row in Doc 08 nevertheless stays OPEN, for a different and newly-identified reason.** FR-077 requires refusal at publication **and** at "every subsequent amendment". These three cases cover the **publication** half only. No case covers the amendment half, because nothing implements it: there is no charter-amendment path in the application (`validateDraft` runs at `createDraft` and `publishDraft` only), and on-chain `Party.amendCharter` (`packages/contracts/src/core/Party.sol` ~line 350) overwrites `charter.charterHash`/`charterCID` after checking only `immutableClause[clauseId]` — it never sees the charter text and performs no clause verification. Doc 08 reclassifies FR-077 **G-TRACE → G-NOMECH** on this finding._

_Update (v2.3.2): the mechanism is now **designed** — Doc 03 v2.8.3 **§10.13.10.1** (clause-map charter; platform-immutable non-violence `clauseId`; amendments carry their text; whole-document replacement, if ever reintroduced, must re-verify). It is **not built**, so FR-077's Must row stays **OPEN (G-NOMECH)** and these three cases still cover the publication half only. The amendment-path TC owed at v2.3.1 is **minted at v2.3.2 as TC-3541**, and its build is governed by **`PREREQ-01`** — a blocking prerequisite to the on-chain governance increment (approver ruling, Rathish, 2026-08-29). Reviewer-qa independently reproduced both failure modes against `Party.sol` and found zero non-violence checks in any contract. **Not exploitable in v1** — v1 runs no on-chain governance (ADR-024 §(b)) — so no v1 work is blocked._

_Correction note (v2.3.1): these three rows previously named error codes `CLAUSE_MISSING`/`CLAUSE_ALTERED`, a source file `packages/protocol/src/clauses.js`, a field `charter.clause_nonviolence`, and a return shape `{ error: ... }` — **none of which exist in the code**. Corrected against `packages/protocol/src/party.js` (~lines 363–380). **No TC status changes:** the tests always asserted the real contract; the document misdescribed it._

| TC | Title | Verifies (US · FR) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3508 | Non-violence clause verbatim text required — exact clause text accepted at protocol validation | US-0087 · FR-077 · DES-101 | Draft with `charter.nonViolenceClause` equal to the canonical constant `NON_VIOLENCE_CLAUSE` exported from `packages/protocol/src/constants.js` (~line 165) | `validateDraft(draft)` returns `{ valid: true, errors: [] }` for the clause gate — no error object carries `field: 'charter.nonViolenceClause'`; draft eligible for service submission | Automated — `packages/protocol/test/party-creation.test.js` · UT-0071 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3509 | Non-violence clause altered — any byte difference from the published text causes refusal | US-0087 · FR-077 · DES-101 | Draft with `charter.nonViolenceClause` materially rewritten ("This party may use violence."); second variant differing by a **single character** (the canonical text with its final period removed) | Both variants return `valid: false` and push an error object `{ field: 'charter.nonViolenceClause', code: 'ALTERED', message }`; byte-exact comparison — no fuzzy, normalised or semantic match, and a one-character delta is refused identically to a full rewrite | Automated — `packages/protocol/test/party-creation.test.js` · UT-0074, UT-0075 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3510 | Non-violence clause absent — draft refused at protocol and service; web displays it verbatim and non-editable | US-0087 · FR-077 · DES-101 · SCR-04, SCR-05 | Protocol layer: two drafts, one with `charter.nonViolenceClause` **deleted**, one with it **null**; service layer: draft missing the clause submitted to `PartyCreationService`; web layer: party-creation form rendered | Protocol: both return `valid: false` with an error `{ field: 'charter.nonViolenceClause', code: 'REQUIRED', message }`; draft not persisted. _(`REQUIRED` is a platform-wide code — also used for `name` and `pillars.*` — so the **field** is what scopes it to this gate; `ALTERED` is unique to this gate.)_ Service: `PartyCreationService.createDraft` refuses (UT-0786). Web: clause rendered verbatim (UT-0849), not an editable form control (UT-0850), and present verbatim in the submitted charter (UT-0851) | Automated — `packages/protocol/test/party-creation.test.js` · UT-0072, UT-0073; `packages/sdk/test/party-creation.test.js` · UT-0786; `apps/web/test/party-creation.test.tsx` · UT-0849, UT-0850, UT-0851 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3541 — FR-077 amendment half: adversarial amendment must not strip the non-violence clause (DES-101 §10.13.10.1 rule 6 · US-0087 · PREREQ-01)

**Why this case exists, and why it is minted before it can pass.** DES-101 §10.13.10.1 rule 6 names
*this* test as the **closing evidence** for FR-077's amendment half, and the approver's
`PREREQ-01` ruling (Rathish, 2026-08-29) makes that evidence the **exit criterion of a blocking
prerequisite**: the on-chain governance increment MUST NOT ship until this case passes. An exit
criterion for a gate cannot live only in a design document — if it is not a first-class case here,
the prerequisite is untracked in the suite that is supposed to prove it. Doc 07 §9's standing rule
applies with unusual force: *a regression test whose case is not in the suite is a defect waiting to
come back* — except this defect has not gone away yet.

**Not exploitable in v1.** v1 runs no on-chain governance (ADR-024 §(b)), so no v1 work is blocked
by this case. The exposure arrives with the on-chain governance increment.

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3541 | An amendment naming an **unrelated** clause cannot install a charter whose non-violence clause has been stripped | US-0087 · FR-077 · CON-013 · DES-101 §10.13.10.1 (rules 1–3, 6) · ADR-010 | A deployed party whose charter contains the verbatim `NON_VIOLENCE_CLAUSE`; a passed constitutional-tier proposal calling `Party.amendCharter(clauseId, newCharterHash, newCharterCID)` where `clauseId` names some **other** clause and the replacement document **omits or alters** the non-violence clause; a second variant that names the non-violence `clauseId` directly on a party whose founders did **not** entrench it | The amendment is **refused**. Naming the non-violence clause reverts `ClauseIsImmutable` because that `clauseId` is platform-immutable at construction for **every** party, independent of founder choice (rule 2); naming any other clause cannot reach the non-violence clause at all, because the charter is a **clause map** whose document hash is derived from the map rather than a single overwritable blob (rule 1); and the amendment is verified against the **text it carries** rather than trusted (rule 3). The party's non-violence clause is unchanged after both attempts | Designed, not automatable yet — the mechanism (clause-map charter, platform-immutable clauseId, amendments-carry-text) is **specified but not built**. The case is **executable today and would FAIL**, which is exactly its value: it is the regression test for a live hole in shipped contract code | **No mechanism** — the product has no amendment-time clause verification at either tier. This is a **defect against the requirement, not against the case** (§0.1). **Closing evidence for `PREREQ-01`**; FR-077's Must row (Doc 08) stays OPEN until this passes |

---

### TC-3511..TC-3516 — FR-130 provisional membership cap · BR-020 disclosure (no DES — G-TRACE · US-0131)

_Note: FR-130 has no DES assigned in Doc 03 §5.2 (G-TRACE); the Must row stays OPEN until DES is assigned. BR-020 disclosure is verified at the web layer. TC-3493 and TC-3515 also verify cross-cutting aspects of FR-010 (collision / jurisdiction)._

| TC | Title | Verifies (US · FR / BR) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3511 | Provisional party capped at 100 members — 101st join attempt refused | US-0131 · FR-130 | Provisional party with exactly 100 existing members; IS_INSECURE_MOCK=true; 101st member attempts `joinParty()` | `joinParty()` returns `{ error: 'PROVISIONAL_CAP_REACHED', cap: 100 }`; member count remains 100; no membership record for the 101st member | Automated — `packages/sdk/test/party-creation.test.js` · UT-0802, UT-0803 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3512 | Provisional cap boundary: 100th join succeeds; 101st refused; exact boundary enforced | US-0131 · FR-130 | Provisional party with 99 existing members; two sequential `joinParty()` calls | First call (to 100) succeeds; second call (to 101) returns `PROVISIONAL_CAP_REACHED`; count remains 100; boundary is inclusive (100 is the last permitted member) | Automated — `packages/sdk/test/party-creation.test.js` · UT-0804, UT-0805 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3513 | `ProvisionalStatus` web component displays member count / cap in all membership states | US-0131 · FR-130 | Provisional party rendered at 0, 50, 99, and 100 members; `ProvisionalStatus` component mounted with each state | Component shows current count and cap; approaches-cap warning displayed at ≥ 90 members; cap-reached state displayed at 100; displayed count matches service state | Automated — `apps/web/test/party-creation.test.tsx` · UT-0852, UT-0853, UT-0854 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3514 | No operator or manual path exists to lift the provisional cap before verified legal registration | US-0131 · FR-130 | Provisional party at cap (100 members); no verified legal registration event; attempt to access any admin or configuration bypass path | No administrative API, configuration flag, environment variable, or code path raises the cap without the registration event; `partyStatus()` shows PROVISIONAL_CAPPED; the only cap-lift path is FR-075 registration verification (not implemented in this drop) | Automated — `packages/sdk/test/party-creation.test.js` · UT-0806 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3515 | Cap lifts automatically by code on verified legal registration — no operator action; anti-capture invariant C-02 confirmed | US-0011 · US-0131 · FR-010 · FR-130 | Provisional party at cap (100 members); verified legal registration event emitted (IS_INSECURE_MOCK=true; simulated oracle event); no operator action taken | `partyStatus()` transitions to REGISTERED; cap lifted automatically; member count now unconstrained; no admin call or manual step in the lift path; anti-capture invariant C-02 confirmed by code inspection | Automated — `packages/sdk/test/party-creation.test.js` · UT-0809, UT-0810, UT-0811 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3516 | BR-020 disclosure: party-creation form displays required disclosure; submission blocked until user acknowledges | US-0131 · BR-020 · FR-130 | Party-creation web form rendered (IS_INSECURE_MOCK=true); user attempts submission without acknowledging disclosure | Disclosure statement required under BR-020 displayed verbatim on form (UT-0848); form submission blocked until acknowledgement; `ProvisionalStatus` component displays disclosure badge in all provisional states (UT-0855, UT-0856); SDK `partyStatus` includes disclosure-required flag (UT-0808) | Automated — `apps/web/test/party-creation.test.tsx` · UT-0848, UT-0855, UT-0856; `packages/sdk/test/party-creation.test.js` · UT-0808 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

---

## 5.5 `TS-MEMBERSHIP` — Join / leave / membership history & counting: FR-020/022/064/122/123/130/131 · DES-097 seam guards (TC-3517–TC-3540)

**Context.** These 24 cases cover the join/membership drop delivered in Doc 06 **v2.3.2** (Approved, technical cycle-3 PASS 97%; suite 542 tests green: contracts 95 / protocol 126 / sdk 220 / ui 14 / indexer 16 / web 71). The service and web layers implement the referenced FRs at `IS_INSECURE_MOCK=true` (in-memory store); the production-persistent store is pending DES-097 wiring. All 24 TCs inherit their green status from Doc 06 v2.3.2 Approved: `packages/sdk/test/membership.test.js` 22/22, `packages/sdk/test/party-creation.test.js` 38/38 (includes UT-0831), `apps/web/test/join-membership.test.tsx` 27/27, `apps/web/test/sdk-types-sync.test.ts` 1/1.

**Two things this suite does not claim.**

1. **FR-064 is NOT closed by these cases.** The invariant is implemented in the **explicit-leave** form (a second join is *refused* until the member explicitly leaves), while FR-064's normative text in Doc 02 §4.6 reads **auto-void-on-join**. the product-owner ruling **has since been received** — option (a), v1 EXPLICIT-LEAVE (Rathish, Human Approver, 2026-08-29; Doc 02 **v2.15.0** §4.6 Approved, Doc 06 §7 #20 closed at v2.3.3), which ratifies the form these cases test. **FR-064 nevertheless stays OPEN**, and now for one reason only: the assigned design element **DES-065** is a v2/Phase-3 membership-scope nullifier that is not built. _(Updated v2.3.1 — the earlier wording said a ruling was "awaited"; cycle-1 ISS-01(c).)_ TC-3523..TC-3525 therefore evidence *the behaviour that exists*; the FR-064 Must row in Doc 08 stays **OPEN**. Testing the stricter form does not license closing a row whose requirement text says something else.
2. **FR-021 gets nothing from this drop.** One-member-one-equal-vote is about tally weight; this drop adds no vote-weight or tally evidence, so no case here cites FR-021 and its RTM row is left untouched.

**Shared preconditions.** `IS_INSECURE_MOCK=true`; `packages/sdk/src/party-creation.js` exports `PartyCreationService` and `InMemoryPartyStore`; the service is constructed with an **injected clock** (fixed `T0`) — no `Date.now()` on any asserted path (Doc 06 §2.6); the web cases render the parties directory at `apps/web/src/app/parties/page.tsx` behind the `party_governance` flag with a **stub-backed verifier over an EMPTY credential store**, so the demo visitor is honestly open-tier and no control can fake ID verification (Doc 06 §7 #22). Membership is an **append-only JOIN/LEAVE event log**; "leaving" is a recorded event, never a deletion.

### TC-3517..TC-3520 — FR-020 join without approval, and the structural no-verifier guarantee (DES-013 · ADR-007 · US-0024)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3517 | Any account joins an active party on request; membership is immediate and the API exposes no gatekeeping parameter | US-0024 · FR-020 · DES-013 · ADR-007 | Activated party; injected clock at `T0`; `IS_INSECURE_MOCK=true` | `joinParty(partyId, 'member-1')` returns `{ memberCount: 1, joinedAt: T0 }`; `activeMembership('member-1')` equals `{ partyId, joinedAt: T0 }`; **`joinParty.length === 2`** — the method arity *is* the contract, so no approval, sponsorship, fee or veto parameter can exist | Automated — `packages/sdk/test/membership.test.js` · UT-0819 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3518 | Join and leave never reach the eligibility seam — and the service structurally cannot reach one | US-0024 · FR-020 · DES-095 · ADR-025 | Activated party; a verifier constructed **in scope** with `vi.spyOn(verifier, 'verifyEligibility')`; the verifier is *not* passed to the service | After `joinParty` then `leaveParty`, the spy has **zero** calls; additionally `service.verifyEligibility`, `service._verifier` and `service._store.verifyEligibility` are all `undefined` — the guarantee is structural (the service never holds a verifier), not merely behavioural | Automated — `packages/sdk/test/membership.test.js` · UT-0820 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3519 | Web: one click joins; no approval, request, application or invitation control exists anywhere on the surface | US-0024 · FR-020 · DES-013 · SCR-10, SCR-11 | Parties directory rendered, `party_governance` flag on; demo visitor open-tier | Clicking the single join control produces immediate membership (`membership-joined` and the party's member badge render; `activeMembership(visitor)` is the joined party). Capability-absence sweep: **every** button on the surface is asserted not to match `/approve\|request\|apply\|invite/i` | Automated — `apps/web/test/join-membership.test.tsx` · UT-0858 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3520 | Web seam spy across the whole flow: zero verifier calls on join/leave/rejoin; exactly one on the counting action, with the counting scope | US-0024 · US-0133 · FR-020, FR-123 · DES-095 · ADR-025 | Parties directory with a spied demo verifier; visitor open-tier | After join → leave → rejoin the spy has **zero** calls. After the counting action the spy has **exactly one** call, with `(visitor, 'IN/KA', 'STRENGTH_CONTRIBUTION')`. Joining is free; only counting touches the seam | Automated — `apps/web/test/join-membership.test.tsx` · UT-0866 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3521..TC-3522 — FR-022 leave at will (DES-013 · US-0025)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3521 | Leaving takes immediate effect with no exit approval; only a non-member is refused | US-0025 · FR-022 · DES-013 | Member joined at `T0`; clock advanced to `T0+100` | `leaveParty` returns `{ leftAt: T0+100, memberCount: 0 }`; `activeMembership` becomes `null`. **`leaveParty.length === 2`** — no approval parameter. A stranger's leave throws `NOT_A_MEMBER`; that is the *only* refusal path | Automated — `packages/sdk/test/membership.test.js` · UT-0823 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3522 | Web: leaving is one action, immediate, and the surface returns to the pre-join state | US-0025 · FR-022 · DES-013 · SCR-11 | Visitor joined to a party on the parties directory | One click on leave: `membership-left` renders; `activeMembership(visitor)` is `null`; the member badge is gone and the join panel is back. No confirmation-of-approval step, no pending state | Automated — `apps/web/test/join-membership.test.tsx` · UT-0860 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3523..TC-3525 — FR-064 one active party, EXPLICIT-LEAVE form (DES-065 · US-0073) — **row stays OPEN**

_Note: these cases evidence the behaviour that exists, not the requirement as written. FR-064's text reads auto-void-on-join; this drop refuses the second join instead. Both preserve at-most-one-active-membership, and the explicit-leave form is the stricter of the two — but they are different semantics, and Doc 02 is product-owner-owned. Doc 06 §7 #20 tracks the decision (Flag: `FR-064-SEMANTICS`); DES-065 (membership-scope nullifier) is v2/Phase-3 and unbuilt. **The FR-064 Must row in Doc 08 stays OPEN on both counts.**_

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3523 | Joining a second party while a member of the first is refused, naming the current party; after an explicit recorded leave the second join succeeds | US-0073 · FR-064 · DES-065 | Two activated parties A and B; member joined to A | The join to B throws with `code === 'ALREADY_MEMBER_ELSEWHERE'`, `currentPartyId === partyA`, and a message containing **"explicit, recorded action"** — the refusal names what the member must do. After `leaveParty(A)`, `joinParty(B)` succeeds and `activeMembership` points at B | Automated — `packages/sdk/test/membership.test.js` · UT-0821 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3524 | A double join of the *same* party is refused and does not inflate the member count | US-0073 · FR-064 · DES-065 | Activated party; member already joined | Second `joinParty` for the same member throws `code === 'ALREADY_MEMBER'` (distinct from `ALREADY_MEMBER_ELSEWHERE`); `partyStatus(partyId).memberCount` remains **1** — the refusal is not a silent no-op that leaves a duplicate row | Automated — `packages/sdk/test/membership.test.js` · UT-0822 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3525 | Web: the second-join refusal is surfaced honestly, naming the current party; leaving then joining succeeds | US-0073 · FR-064 · DES-065 · SCR-10 | Parties directory with two parties; visitor joined to the first ("Commons Forward") | The `membership-error` element text equals the localised `alreadyMemberElsewhere('Commons Forward')` string — the *name* of the blocking party is shown, not a generic error; the visitor remains a member of the first party only. After leave, joining the second succeeds and its member badge renders | Automated — `apps/web/test/join-membership.test.tsx` · UT-0859 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3526..TC-3527 — Append-only membership history: leaving is never deletion (DES-013 · US-0024, US-0025)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3526 | History is append-only across parties, and the store exposes no way to delete or rewrite an event | US-0024, US-0025 · FR-020, FR-022 · DES-013 | Join at `T0`, leave at `T0+100`, rejoin at `T0+200`; a second scenario joining party A then party B | `membershipHistory` returns exactly two rows: `{joinedAt: T0, leftAt: T0+100, active: false}` then `{joinedAt: T0+200, leftAt: null, active: true}`. Across parties, two rows survive with A inactive and B active — history is never trimmed by later actions. **Capability-absence:** the store prototype exposes **no** method matching `/delete\|remove\|clear\|rewrite/i` (asserted to be the empty list). **Immutability:** `getMembershipEvents` returns copies — mutating a returned event does not change the log | Automated — `packages/sdk/test/membership.test.js` · UT-0824 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3527 | Web: the history panel renders every join and leave, marked inactive then active | US-0024, US-0025 · FR-020, FR-022 · SCR-11 | Visitor performs join → leave → rejoin on the parties directory | The membership-history region renders with its lead copy; `history-state-0` reads the localised **inactive** label and `history-state-1` the **active** label — the past membership is shown, not erased | Automated — `apps/web/test/join-membership.test.tsx` · UT-0861 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3528..TC-3529 — FR-130 provisional cap at join, on ACTIVE members (no DES — G-TRACE · US-0131)

_Note: FR-130 has no DES assigned in Doc 03 §5.2 (G-TRACE). The code exists and is tested; the chain is broken at the DES link, so the Must row in Doc 08 stays OPEN. Recorded honestly, not closed._

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3528 | The cap binds at the 100/101 boundary of **active** members, and a leave frees exactly one slot | US-0131 · FR-130 | Activated provisional party; members 1..99 joined; `PROVISIONAL_MEMBER_CAP = 100` | Member 100 joins and `memberCount === 100`. Member 101 throws `PROVISIONAL_CAP_REACHED` — unconditional, no grace (Ruling 1, 2026-08-26). After `leaveParty` for one existing member, member 101's join **succeeds** and the count returns to exactly 100: the cap counts ACTIVE membership, so departure frees a slot rather than permanently consuming it | Automated — `packages/sdk/test/membership.test.js` · UT-0825 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3529 | Web: the 100th member joins; the 101st is refused with the honest cap message at the join surface | US-0131 · FR-130 · SCR-10 | Parties directory demo seeded at 99 active members, then at 100 | The join at 99→100 succeeds. The join attempt at 100 is refused and the surface shows the localised cap message naming the cap — the refusal is explained, not a dead control | Automated — `apps/web/test/join-membership.test.tsx` · UT-0862 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3530..TC-3533 — FR-122 / FR-123 joining is not counting (DES-095 · ADR-025 · US-0133)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3530 | Official strength counts verified members only — and a refused open-tier member remains a full member | US-0133 · FR-122, FR-123 · DES-095 · ADR-025 | Activated party; an open-tier member (empty credential store); separately a verified member (DES-100 allowlist credential injected) | Open tier: `contributeToStrength` throws `NOT_COUNTING_ELIGIBLE` with a `reason` naming **government-ID** verification; crucially the member is **still a member** — `countingStatus` is `{member: true, counted: false}`, `memberCount` 1, `officialStrength` 0. Verified: counted once (`officialStrength` 1), a repeat throws `ALREADY_COUNTED`. A verified **non-member** throws `NOT_A_MEMBER` — strength counts members. Divergence is honest: 3 joined / 1 counted | Automated — `packages/sdk/test/membership.test.js` · UT-0826 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3531 | A counted member who leaves stops counting; a rejoin does not silently restore the count; history survives both | US-0133 · FR-123 · DES-095 | Verified member joined and counted (`officialStrength` 1); then leaves at `T0+100`; then rejoins at `T0+200` | On leave `officialStrength` drops to **0**. On rejoin `countingStatus` is `{member: true, counted: false}` — rejoining restores membership, **not** counted status, so strength cannot be inflated by a leave/rejoin cycle. `membershipHistory` still has 2 rows | Automated — `packages/sdk/test/membership.test.js` · UT-0827 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3532 | The seam is called exactly once, with the normative counting scope; the status read never calls it | US-0133 · FR-122, FR-123 · DES-095 · ADR-025 | Verified member joined; spy on `verifyEligibility` | `contributeToStrength` calls the verifier **exactly once**, with `('member-1', 'IN/KA', COUNTING_ACTION.STRENGTH_CONTRIBUTION)` — the member id, the party's jurisdiction, and the normative scope (Doc 03 §10.13.2(a)). `countingStatus` reports non-member / open-tier member / counted member from recorded state only, and **`countingStatus.length === 2`** — it takes no verifier parameter, so a read can never trigger verification | Automated — `packages/sdk/test/membership.test.js` · UT-0828, UT-0830 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3533 | Web: a joined open-tier member is displayed as a real member who does not yet count; a verified member's counting action updates both figures | US-0133 · FR-122, FR-123 · DES-095 · SCR-10 | Parties directory; (a) demo visitor open-tier; (b) demo visitor with an injected DES-100 allowlist credential | (a) After joining: member count reads 1, official strength reads **0**, and the counting-status region shows the honest open-tier body copy — the two figures are shown side by side rather than conflated. (b) For a verified visitor the counting action succeeds: the counted body copy renders, official strength reads **1**, and **no** open-tier notice is present | Automated — `apps/web/test/join-membership.test.tsx` · UT-0863, UT-0865 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3534..TC-3535 — FR-131(d) four-clause notice · FR-131(b) v1-honest join copy (DES-096/DES-098 · US-0133, US-0134)

_Note: TC-3534 delivers, at the **parties-directory** counting surface, the clause (d) obligation that TC-3481 was Blocked on. TC-3481 remains Blocked for the **ballot** surfaces (SCR-13/SCR-14), which are not built in this drop (Doc 06 §7 #21). FR-131's Must row stays OPEN (G-PHASE3)._

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3534 | FR-131(d): the open-tier notice carries all four clauses, precedes the refusal, and cannot be dismissed | US-0133 · FR-131 · DES-098 · DES-095 | Parties directory; open-tier visitor joined; visitor attempts the strength-contribution counting action | The notice region renders **all four clauses**: (i) current participation is open-tier only, (ii) the action requires government-ID verification, (iii) what specifically does not count, (iv) how to become a counting member. The refusal statement renders **after** the four clauses, inside the notice. **Non-dismissable:** `queryAllByRole('button')` inside the notice is the **empty list** — there is no close or dismiss control. The refused action changed nothing: official strength stays 0 and `countingStatus` stays `{member: true, counted: false}` | Automated — `apps/web/test/join-membership.test.tsx` · UT-0864 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3535 | FR-131(b): the join copy makes no v2 privacy claim against the v1 backing | US-0133 · FR-131 · BR-020 | Parties directory rendered; `en.parties.joinPrivate` string inspected and rendered | The copy **does not** contain the old v2-only claim *"Nobody gets that list"*; it **does** disclose that *"our own records can link your account"* and that membership is *"never published"*. The disclosure renders on **every** join panel, not just the first. This is a regression guard on an honesty defect: v1's platform database can link account↔party, and the copy must say so | Automated — `apps/web/test/join-membership.test.tsx` · UT-0869 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3536..TC-3538 — Determinism, ship-dark gating, jargon and absence scans (NFR-023 · DES-085 · §2.5, §2.6)

| TC | Title | Verifies (US · FR / NFR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3536 | `joinedAt` / `leftAt` come from the injected clock — the same clock produces byte-identical history | US-0024, US-0025 · FR-020, FR-022 | Two independent runs of the same join/leave scenario with the same injected clock | Both runs produce **deeply equal** `membershipHistory` output. No wall clock on any membership path (Doc 06 §2.6) — a flaky membership timestamp would be a governance bug, not a test nuisance | Automated — `packages/sdk/test/membership.test.js` · UT-0829 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3537 | Ship-dark: the parties directory is gated on the `party_governance` flag | US-0131 · FR-056 · NFR-020 | Page rendered with the flag off, then on | Flag **off**: only the flag-off message renders and the directory title is absent. Flag **on**: the directory renders. The capability is gated at the surface, not merely hidden by styling | Automated — `apps/web/test/join-membership.test.tsx` · UT-0867 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3538 | Jargon filter over every new membership string, and an absence test for surveillance metadata | US-0133 · NFR-023 · DES-085 · §2.5 | All new `en`/`ar` membership strings collected; then the full membership surface rendered through join and a counting attempt | **Jargon:** no new user-facing membership string contains banned blockchain vocabulary (DES-085). **Absence:** the rendered markup contains none of `gtag`, `analytics`, `data-track`, `beacon`, `pixel`, `sentry` — the absence *is* the privacy property, per the §2.5 absence-test pattern | Automated — `apps/web/test/join-membership.test.tsx` · UT-0868, UT-0870 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3539..TC-3540 — DES-097 persistence-seam integrity guards (FR-013 expiry path · US-0021)

_Note: both cases are **guards**, not feature tests. Each was minted from a defect the Doc 06 review loop found: TC-3539 from cycle-1 ISS-01 (the service reached into the store's private state, which would have silently no-op'd against any production store) and TC-3540 from cycle-2 ISS-C2-01 (the fix landed in the JS but not in the TypeScript shim `apps/web` compiles against). They protect the FR-013 petition-expiry path across the DES-097 seam. A regression test whose case is not in the suite is a defect waiting to come back._

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3539 | `expirePetitions` reaches only the declared `IPartyStore` interface — no private-state access | US-0021 · FR-013 · DES-097 | A facade exposing **exactly** the 22 methods declared on the `IPartyStore` JSDoc typedef, each delegating to a real `InMemoryPartyStore`, injected into `PartyCreationService`; a petition published and the clock advanced past `closesAt` | The past-close petition is still expired **through the facade**: the returned id list contains it, and the backing store shows `state === EXPIRED` with `archivedAt` equal to the injected expiry time. Any renewed reach into private state (e.g. `_petitions`) finds `undefined` on the facade and the case fails — so the seam break cannot silently return | Automated — `packages/sdk/test/party-creation.test.js` · UT-0831 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3540 | The `trumocracy-sdk.d.ts` store shims stay in sync with the SDK JSDoc typedefs, both directions — **`IPartyStore`, `IProposalStore` and `ICandidateStore`** | **Per seam, because the guarantee is ONE shim-sync property instanced three times, not three guarantees** — `IPartyStore` → **FR-013 · US-0021 · DES-097** · `IProposalStore` → **FR-090 · US-0100 · DES-104** · `ICandidateStore` → **FR-036, FR-122 · US-0046, US-0133 · §10.13.14 seam table** | For **each** of the three seams, the SDK source `@typedef` and the ambient shim `apps/web/types/trumocracy-sdk.d.ts` are parsed for member names | For **every** seam in the list: the member set of the **interface** and the member set of the **class** declaration each equal the JSDoc typedef member set **exactly** (set equality asserted both ways). A member missing from the shim is the silent-crash drift (a TS store typechecks clean, then throws at runtime); a member missing from the JSDoc means the shim promises an API the SDK does not have. Verified by the tester to fail under injected drift, per block and in both directions | Automated — `apps/web/test/sdk-types-sync.test.ts` · UT-0871, `it` (parameterised over the seam list): "`<typedef>`: interface and class member sets equal the JSDoc typedef member set exactly" — **three instances**: `IPartyStore`, `IProposalStore`, `ICandidateStore` | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved for the `IPartyStore` instance. _(**v2.11.0, ISS-01 — this case was scoped to `IPartyStore` alone and the candidate-selection drop left two assertions cased by nothing.** `UT-0871` is **one parameterised `it` over a seam list**, and Doc 06 **v2.10.0** added `IProposalStore` and **`ICandidateStore`** to that list (§3's web addend "+ 2 (UT-0871 extended to two more seams, v2.10.0)"; §7 item 23, closing the standing ISS-C3-01). The file went **1 `it` → 3**. **Ruling: the scope of this case is widened; no case is minted.** Two more instances of a guarantee this case already states are not two new guarantees, and minting `TC`s for a widened loop would inflate the designed count for no new coverage — so **521 does not move**. The `ICandidateStore` instance is the one that matters most here: it guards **this drop's own seam**, the `§10.13.14 ICandidateStore` the whole `TS-CANDIDATE` suite is about. **Evidence, and a promotion deliberately NOT taken:** the tester ran this file `--reporter=verbose` for the rework — **3 passed / 3, each `it` green individually** (**run R-22**, §9), which meets this document's Pass (obs.) bar. The status is **held at Pass (inh.)** anyway, because promoting it moves the observed/inherited buckets in §2 and §10 **and** in Doc 08 §6/§9, and **Doc 08 v2.13.0 is mid-review**; moving half of a synchronised pair is the `TD-RTM-02` drift. **Promotion deferred, not denied — owed at the next synchronised Doc 07/08 touch.**)_ _(**v2.12.0, ISS-02** — when this case was widened to three seams at v2.11.0 its *Verifies* cell gained a **third DES** but no third `FR` or `US`, so **`IProposalStore` carried a design element with no requirement and no story** — the same attribution-gap class as cycle-1's ISS-06, which this document had just fixed elsewhere. **Resolved by naming them rather than by waiving them:** the proposals seam is **DES-104**'s, whose requirement is **FR-090** and whose story is **US-0100**; the candidate seam is the **§10.13.14** seam table's, entered at nomination (**FR-036 · US-0046**) and gated for counting through **FR-122 · US-0133**. **What the case asserts is unchanged** — one parameterised `it` over a seam list, three instances, set equality both ways — and **no status, count or ruling moves**; what changes is that each seam's row in the chain now resolves. The seam table's remaining members serve FR-037, FR-039, FR-065, FR-066, FR-067, FR-081, FR-085 and FR-093 collectively; they are not listed individually here because **this case tests the type shim, not those guarantees**.)_ |

---

## 5.6 `TS-PROPOSALS` — Proposals & debate: FR-024/079/080/090/091/092 · FR-122/123 counting gate (TC-3542–TC-3561)

**Context.** These 20 cases cover the v1 proposals-and-debate drop recorded in Doc 06 **v2.4.1** (commit `c04b4f2`, branch `build/v1-proposals`), designed by **DES-103** (participation tiers), **DES-104** (authorship & competing proposals), **DES-105** (deliberative lifecycle), **DES-106** (permanent decision trail) — Doc 03 v2.9.1 §10.13.13. New tests: `packages/protocol/test/proposals.test.js` **UT-0087..UT-0095** (24), `packages/sdk/test/proposals.test.js` **UT-0832..UT-0848** (24), `apps/web/test/proposals.test.tsx` **UT-0872..UT-0884** (18) — 66 tests, taking the suite 542 → **608**. The contracts consensus lifecycle (`Governor`, UT-0200..0230) was **not modified** by this drop.

**What this suite does NOT claim.** Three of the six requirements it touches do **not** close on it, and the cases say so rather than implying otherwise:

- ~~**FR-080**~~ — **RESOLVED at v2.4.1.** The v2.4.0 exclusion recorded that the informed-consent disclosure was absent. The engineer built it rather than recording it: the declaration is now a **two-step consent event**, and **TC-3562/TC-3563** cover it. FR-080's Must row **closes** at Doc 08 v2.5.1.
- **FR-091** — the **order** half is fully covered (TC-3552..TC-3554). The clause "stage transitions executed by code **per published timelines**" is not: `governance.js` `schedule()` is not wired into the service (Doc 06 §7 #25), and the demo advances by a button that can only ever move one step.
- **FR-092** — the trail is append-only and complete *for the events the service sees* (TC-3559), but FR-092 also names the **vote result, enacted consequence, implementation status and measured outcome** — none of which this layer records — and requires end-to-end reconstruction **by any third party from public data alone**, which needs DES-097 audit anchoring (Doc 06 §7 #24). TC-3560 asserts the surface says so honestly rather than implying the record is already independently checkable.

**Both upstream open questions are now RULED (Rathish, Human Approver, 2026-08-30; `artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md`; applied at Doc 03 v2.10.0 §10.13.13).** _(Recorded here at v2.4.0 as owed; updated v2.4.4 — no test case changes either way.)_ **(a) FR-091's stages vs ADR-008's `PROPOSAL_STATE` — COMPLEMENTARY, both canonical at their own layer**, with the mapping recorded as the bridge and a normative seam rule (at v2 the chain owns ballot state; `VOTE`/`DECISION`/`IMPLEMENTATION` derive from it). **The published stage set is unchanged, so nothing about TC-3552..TC-3555 changes** — the reconciliation this note previously called owed is discharged, and it never bore on what these cases assert. **(b) PROPOSING is NOT an FR-123 counting action** — the built reading is confirmed; gating authorship on verification status would be a participation restriction FR-020 prohibits. **TC-3543/TC-3545 test what FR-090 as written requires and stand unchanged; FR-090's RTM revisit flag is discharged.**

**Shared preconditions.** `IS_INSECURE_MOCK=true`; the service is constructed with an **injected clock** (no `Date.now()` on any asserted path); `packages/protocol/src/proposals.js` exports `PARTICIPATION_TIER`, `PROPOSAL_STAGE`, `STAGE_ORDER`; `packages/sdk/src/proposals.js` exports `ProposalService` and `InMemoryProposalStore`; web cases render the proposals-and-debate surface with a stub-backed verifier over an empty credential store, so the demo member is honestly open-tier.

### TC-3542..TC-3547 — FR-079 tiers · FR-024/FR-090 authoring gate (DES-103, DES-104 · US-0089, US-0031, US-0100)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3542 | Exactly three participation tiers exist; a joiner is a Supporter by default; **no tier confers weight under any configuration** | US-0089 · FR-079, FR-021 · DES-103 | A member joins a party without declaring anything; tier constants inspected | Exactly **three** tiers are named and no privileged fourth can be named (UT-0088). A joiner is a **Supporter** without declaring anything. `votingWeightForTier()` returns **1 for every tier** — no multiplier exists, so tier cannot confer weight, standing or precedence (FR-021 unchanged). An **unknown** tier is refused rather than silently weighted — the failure is loud, not a default-to-zero | Automated — `packages/protocol/test/proposals.test.js` · UT-0087, UT-0088 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3543 | Authoring requires Worker tier or above, and the rule is a **pure function of tier** — it takes no approver, reviewer or reason | US-0031, US-0100 · FR-024, FR-090 · DES-104 | Draft authored at each tier | Worker and Candidate may author; a **Supporter may not**, and the stated reason is *non-publication*, not merit — authorship is public (FR-090) and a Supporter's participation is never published. The rule's signature accepts **no approver, no reviewer and no reason**, so there is nothing for a gatekeeper to hold (UT-0089). At the service layer a Worker's authorship is **recorded publicly**, and the Supporter refusal says the tier is **self-declarable** — a disclosure step, never an approval step (UT-0832) | Automated — `packages/protocol/test/proposals.test.js` · UT-0089; `packages/sdk/test/proposals.test.js` · UT-0832 | **Pass (inh.)** — inherited from Doc 06 v2.4.1. **v2.7.0 correction — the cell described copy the product no longer ships.** It read that the stated reason is *anonymity*, paraphrasing the pre-v2.6.0 refusal message "…because authorship is public and Supporters are anonymous". Doc 06 v2.6.0 rewrote that message under **FR-131 clause (e)**: FR-082 is a Definition-B property (Doc 02 §16.3, DEFERRED-v2) and a Supporter's membership **is** knowable to the v1 operator, so claiming anonymity was an overclaim of the `joinPrivate` class (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §5.3, approver-confirmed §11). The shipped message now reads "…authorship is public and a Supporter's participation is never published", which is true in v1. **The status does not change and the case was never failing:** UT-0089 asserts `canAuthorProposal(SUPPORTER) === false` and UT-0832 asserts the error `code` plus the substring "self-declared" — neither asserts the clause that changed. **The new message text is guarded by TC-3574/UT-0889**, so this row keeps describing the *rule* and TC-3574 keeps the *copy*. _(Note for the reader who follows this row to the file: `packages/protocol/test/proposals.test.js` still carries "…because authorship is public and Supporters are anonymous" as an `it()` **title**. It asserts nothing about any message and does not fail; it is a describe-text nit, raised here for the engineer rather than corrected by the tester, who does not edit product or unit-test code.)_ |
| TC-3544 | Web: the Worker gate reads as a **disclosure**, never a judgement; a Supporter is not offered the form; declaring opens it with no approval control anywhere | US-0090, US-0031 · FR-024, FR-080 · DES-103 · SCR-12 | Proposals surface rendered for a Supporter | The gate states that authorship is public / done in the open, that **"Nobody approves it"**, and — as its own assertion — that this is **"not about whether your idea is good… only about whether your name is public"**. A Supporter is **not offered the filing form at all** (UT-0873). On declaring Worker the form opens and **no button anywhere** matches `/approve\|request\|permission\|await\|pending review/` (UT-0872). _**Scope (updated v2.4.1):** this case covers the no-approval and not-a-judgement halves of FR-080 at **step 1** of the declaration. FR-080's **informed-consent clause** — the disclosure that must be stated *before confirmation* — is covered by **TC-3562**, and the right to decline by **TC-3563**. The v2.4.0 note recorded that clause as unimplemented; it was **built, not recorded** (Doc 06 v2.4.2 / Doc 03 v2.9.2 DES-103), and FR-080's Must row **closes** at Doc 08 v2.5.1._ | Automated — `apps/web/test/proposals.test.tsx` · UT-0872, UT-0873 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3545 | Authoring **never** calls the eligibility seam — it is not a counting action | US-0100 · FR-020, FR-090, FR-123 · DES-104 · ADR-025 | A spied verifier in scope; a Worker files a proposal | The verifier is **not called**, and the authoring entry point **takes no verifier parameter** — the guarantee is structural, not merely behavioural. This is the FR-conformant reading of the OI-14 gate: authoring is gated on self-declared tier, not on ID verification. _(**RULED 2026-08-30** — Rathish, Human Approver; artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md §1; Doc 03 v2.10.0 §10.13.13(b). This case previously carried: "Doc 03 §10.13.13 open question (b) — whether PROPOSING should instead be an FR-123 counting action — is flagged for an approver ruling; if it is ruled a counting action this case and FR-090's row must be revisited." **The approver ruled that PROPOSING is NOT a counting action** — gating authorship on verification status would be a participation restriction FR-020 prohibits — **so the condition never triggers: this case and FR-090's row stand unchanged and need no revisit.** The FR-conformant reading this case asserts is confirmed correct.)_ | Automated — `packages/sdk/test/proposals.test.js` · UT-0834 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3546 | A non-member cannot author, **whatever tier they claim** | US-0100 · FR-090 · DES-104 | A non-member submits a draft declaring Worker, then Candidate | Refused in both cases — a self-declared tier is not a membership claim, so tier self-declaration cannot be used to bypass membership | Automated — `packages/sdk/test/proposals.test.js` · UT-0833 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3547 | Drafts are checked against **published floors**, never judged on content, and each deficiency is named as a (field, code) pair | US-0031 · FR-024 · DES-104 | Complete draft; drafts missing fields; body below the substance floor and above the ceiling; unknown tier; every declared tier | A complete draft is accepted. Missing fields are named individually as **(field, code)** pairs, matching the party-draft convention already used by `validateDraft`. A body **below the substance floor** and one **above the ceiling** are both refused; an **unknown tier** is refused; and **every declared tier is accepted** — the platform never judges which tier a proposal claims, only that it is one of the published three (UT-0095). The service names each deficiency on the same contract (UT-0832) | Automated — `packages/protocol/test/proposals.test.js` · UT-0095; `packages/sdk/test/proposals.test.js` · UT-0832 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |

### TC-3562..TC-3563 — FR-080 the two-step informed-consent event (DES-103 · US-0090 · SCR-15, SCR-12)

**Why these two cases exist.** At v2.4.0 this suite recorded that FR-080's informed-consent clause had **no implementation**: the copy stated publicity of *what you put forward*, stated **permanence nowhere**, and a one-click control left "before … confirmed" with no moment to attach to. The engineer **built the mechanism** rather than documenting the gap. Step 1 remains the gate explaining why the tier exists; **step 2 is a consent panel** that states what the member is about to accept and asks them to confirm it.

**Verified by the tester in the component, not from a description:** `declare-worker` sets consent-pending state **only** — it does not declare; the **sole** call to `onDeclareWorker` is `confirm-worker`, inside the panel; `cancel-worker` returns to the gate and records nothing.

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3562 | **Both** FR-080 facts are stated **before** the declaration is confirmed, and the filing form is unreachable at that moment | US-0090 · FR-080 · DES-103 · SCR-15, SCR-12 | Supporter clicks the step-1 declare control; the consent panel is displayed and nothing has been declared yet | The filing form is **absent** (`file-proposal` is null) — establishing that a real "before" exists, which a one-click declaration could not. The panel states **(i) permanence**: *"This lasts for the whole term. You cannot undo it partway through."* — duration **and** irrevocability; **(ii) the participation record**: *"Your record of taking part in this party becomes public for the term — **not only the proposals you put forward, but what you take part in**"* — the trailing clause closes exactly the narrow reading the v2.4.0 review flagged; and **(iii) no approval**: *"Nobody reviews this. When you confirm, it is done."* Confirming then opens the filing form, with **no** control matching /approve\|request\|permission\|await\|pending review/ | Automated — `apps/web/test/proposals.test.tsx` · UT-0885 | **Pass (inh.)** — inherited from Doc 06 v2.4.2 |
| TC-3563 | **Declining changes nothing** — the member remains a Supporter with nothing recorded | US-0090 · FR-080 · DES-103 · SCR-15 | Supporter opens the consent panel, then declines | The surface returns to the step-1 gate, the filing form is **not** reachable, and the member is still a Supporter. This is what makes the panel a **consent event** rather than an unavoidable notice: a disclosure a member cannot refuse is not consent, and FR-080 calls the act of declaration *the informed-consent event* | Automated — `apps/web/test/proposals.test.tsx` · UT-0886 | **Pass (inh.)** — inherited from Doc 06 v2.4.2 |

_Note: UT-0885 and UT-0886 are `it()` labels within the `UT-0872` describe block, the same pattern as UT-0873 which this suite already cites individually (Doc 07 §3: "UT-#### IDs may each cover a describe-block with multiple `it()` assertions; ID ranges mark RTM block boundaries only")._

---

### TC-3548..TC-3551 — FR-090 competing proposals and equal standing (DES-104 · US-0100 · SCR-12)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3548 | A competing proposal joins the **same decision window**, and differently-phrased spellings of one question group into **one** window | US-0100 · FR-090 · DES-104 | A second Worker files on the same question; then the same question phrased differently | The second proposal joins the first author's window rather than opening a rival one (UT-0835), and differently-phrased spellings of one question land in **ONE** decision window keyed by a normalised question string (UT-0835, UT-0095). Without this, "equal standing in the same window" would be defeated by rephrasing | Automated — `packages/sdk/test/proposals.test.js` · UT-0835; `packages/protocol/test/proposals.test.js` · UT-0095 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3549 | **Capability-absence:** the first author holds no power over a competing proposal, and no proposal carries a standing privilege | US-0100 · FR-090 · DES-104 | Two proposals in one window, filed by different authors | The first author has **no** withdraw, reject, reorder, demote, merge or veto path over another author's proposal — asserted as an absence, which is the security property (UT-0836). No proposal carries a weight, rank or priority field; `isOriginal` is **provenance only** and confers no precedence (UT-0837) | Automated — `packages/sdk/test/proposals.test.js` · UT-0836, UT-0837 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3550 | Web: both proposals render in one window with the **same affordances**, both authors are named, and the "asked the question" tag is provenance, not precedence | US-0100 · FR-090, FR-092 · DES-104 · SCR-12 | Window containing an original and a competing proposal | Both render in **one** window in submission order with the **same affordances** (UT-0874). **Both authors are named** — agenda-setting is visible, which is the point of public authorship (UT-0875). **No control** is offered that lets one author act on another's proposal (UT-0876). The "asked the question" tag is explicitly provenance, not precedence (UT-0877) | Automated — `apps/web/test/proposals.test.tsx` · UT-0874, UT-0875, UT-0876, UT-0877 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3551 | Entry to a decision window **closes when deliberation ends** — a competing proposal is refused once the ballot has opened, naming the stage | US-0100 · FR-090, FR-091 · DES-104, DES-105 | Window advanced to the vote stage; a third Worker attempts to file on the same question | The competing proposal is **refused, naming the stage** — a proposal cannot be introduced after members have begun voting on the set (UT-0838). While deliberation is still open, a competing proposal may **still join** (UT-0094) — the window is open, then closed, and the boundary is exactly the start of voting | Automated — `packages/sdk/test/proposals.test.js` · UT-0838; `packages/protocol/test/proposals.test.js` · UT-0094 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |

### TC-3552..TC-3555 — FR-091 lifecycle order and deliberation (DES-105 · US-0101 · SCR-12) — **row stays OPEN**

_Note: these four cases cover FR-091's **order** guarantees, which they cover completely. They do **not** cover the clause "stage transitions executed by code **per published timelines**": `governance.js` `schedule()` exists but is **not wired** into the proposal service, and the demo advances by a button (Doc 06 §7 #25). FR-091's Must row stays **OPEN (G-NOMECH)** on that clause. The taxonomy question Doc 03 §10.13.13 recorded against these eight stages was **RULED 2026-08-30** — FR-091's stages and ADR-008's `PROPOSAL_STATE` are **complementary, each canonical at its own layer**, not competing — and the **published stage set is unchanged**, so these four cases are unaffected and stay as written. The row stays open on the timelines clause alone._

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3552 | The lifecycle publishes exactly the **eight FR-091 stages in that order** and advances **one step at a time**, ending at MEASUREMENT | US-0101 · FR-091 · DES-105 | A new decision window walked stage by stage | The published order is exactly proposal → review → discussion → debate → vote → decision → implementation → measurement, and advancing walks it one stage at a time to MEASUREMENT and then **refuses to go further** (UT-0090, UT-0841). At every position, exactly the single legal step forward is accepted | Automated — `packages/protocol/test/proposals.test.js` · UT-0090; `packages/sdk/test/proposals.test.js` · UT-0841 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3553 | A **skipped**, **reversed** or **no-op** transition is refused, and the skip refusal names what was skipped | US-0101 · FR-091 · DES-105 | Transitions attempted from each position | A skipped stage is refused **naming what was skipped** (UT-0091). A reversed transition is refused — deliberation cannot be re-run to get a better answer (UT-0092). A no-op is refused rather than silently accepted. An **unknown** stage is rejected rather than treated as position zero, so a malformed input cannot restart the machine | Automated — `packages/protocol/test/proposals.test.js` · UT-0091, UT-0092 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3554 | **Capability-absence:** no override, force or skip-to capability exists, at either layer or on the surface | US-0101 · FR-091 · DES-105 · SCR-12 | Stage-machine API and rendered surface inspected | The protocol exposes **no** override, force or skip-to capability (UT-0093). `advanceStage()` takes **no target, no force, no skip and no actor** parameter — there is nothing for a human veto to attach to, which is the anti-capture property (UT-0842). The surface offers **no control that skips a stage** (UT-0879) | Automated — `packages/protocol/test/proposals.test.js` · UT-0093; `packages/sdk/test/proposals.test.js` · UT-0842; `apps/web/test/proposals.test.tsx` · UT-0879 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3555 | Review, discussion and debate are **deliberative — records, never outcomes** — and deliberation is open to **every** member including open-tier | US-0101, US-0133 · FR-091, FR-122 · DES-105 · SCR-12 | Window at DISCUSSION; an open-tier Supporter posts a record | Exactly **three** stages are named deliberative; the vote and decision stages are **not** (UT-0094). An **open-tier Supporter may post without any verification** — the verifier is not called and the entry point takes no verifier parameter (UT-0839). Deliberation **changes no outcome**: the stage and the proposal set are untouched afterwards (UT-0840); deliberation outside a deliberative stage is refused naming the stage; a non-member and an empty record are refused. The surface **states plainly** that members without an ID check can take part, and an open-tier member's record is kept and attributed (UT-0880) | Automated — `packages/protocol/test/proposals.test.js` · UT-0094; `packages/sdk/test/proposals.test.js` · UT-0839, UT-0840; `apps/web/test/proposals.test.tsx` · UT-0880 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |

### TC-3556..TC-3558 — FR-122/FR-123 the counting gate at the ballot (DES-095 · US-0133 · ADR-025)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3556 | Ballot admission is the **counting gate** and the **only** seam call site; the open-tier refusal says plainly what the member **keeps** | US-0133 · FR-122, FR-123 · DES-095 · ADR-025 | Window at the vote stage; a verified member and an open-tier member | A verified member is admitted, calling the seam **exactly once** with scope **`BINDING_VOTE`** (UT-0843). An open-tier member is refused `NOT_COUNTING_ELIGIBLE` with reason `ID_VERIFICATION_REQUIRED`, and the refusal carries **`stillAMember: true`** and **`mayStillDeliberate: true`** — verification gates *counting*, never *participation* — with membership verified intact afterwards (UT-0844). Admission **before** the ballot opens is refused, and a **repeat** admission is refused | Automated — `packages/sdk/test/proposals.test.js` · UT-0843, UT-0844 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3557 | Web: the **coercion notice** renders **before** the member is asked to act and **cannot be dismissed**; the ballot is not offered before the vote stage; the open-tier refusal states what they keep | US-0133 · FR-123, NFR-003 · DES-095 · SCR-12 | Surface at the vote stage, open-tier member | The not-receipt-free banner is shown **BEFORE** the member is asked to act and **cannot be dismissed** — the honesty notice precedes the action rather than following it (UT-0881). An open-tier member is refused **honestly, with the refusal saying what they keep** (UT-0882). The ballot is **not offered before the vote stage** (UT-0881) | Automated — `apps/web/test/proposals.test.tsx` · UT-0881, UT-0882 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3558 | The proposal service **never casts, stores or counts a vote** — that is the ballot layer | US-0133 · FR-123, FR-131 · DES-095, DES-096 | Full window walked through admission | No vote is cast, stored or counted anywhere in this service; admission records *eligibility to vote*, not a vote. The absence is the property — a proposals layer that quietly held votes would put ballot secrecy in the wrong component (UT-0845) | Automated — `packages/sdk/test/proposals.test.js` · UT-0845 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |

### TC-3559..TC-3561 — FR-092 decision trail · jargon and absence scans (DES-106 · US-0102) — **FR-092 row stays OPEN**

_Note: TC-3559 covers the trail's **append-only** and **completeness-for-what-this-layer-sees** properties, which hold. FR-092's Must row nevertheless stays **OPEN (G-NOMECH)**: the requirement also names the **vote result, enacted consequence, implementation status and measured outcome** — none of which this layer records (TC-3558 confirms it holds no vote) — and requires reconstruction **end-to-end by any third party from public data alone**, which needs DES-097 audit anchoring (Doc 06 §7 #24). TC-3560 is the honesty case: the surface must **admit** that limit rather than imply the record is already independently checkable._

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3559 | The decision trail is **append-only**, records the whole deliberation in order, returns **copies**, and exposes **no delete path**; timestamps come from the injected clock | US-0102 · FR-092, FR-107 · DES-106 | A window walked through opening, filing, deliberation, stage changes and admission | The trail records window opening, **every** proposal, deliberation, stage change and admission **in order** (UT-0846). It **cannot be rewritten by a caller** and the store exposes **no delete path** — a caller mutating what it received changes nothing, because reads return copies (UT-0847). Timestamps come from the **injected clock**, so the same run is reproducible (UT-0848), and `IS_INSECURE_MOCK` delegates from the service to its store | Automated — `packages/sdk/test/proposals.test.js` · UT-0846, UT-0847, UT-0848 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3560 | Web: the trail is shown **in order** and **admits what v1 does not do** — it states the record is not yet independently checkable | US-0102 · FR-092 · DES-106 · SCR-12 | Surface rendering a completed window's trail | Every event is listed **in order, including who filed what**. The surface **states honestly that the record is not yet independently checkable in v1** (`trail-v1-note`) — the disclosure is the deliverable here, because a trail presented as auditable when its anchoring is unbuilt would claim a property FR-092 does not yet have (UT-0883) | Automated — `apps/web/test/proposals.test.tsx` · UT-0883 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |
| TC-3561 | The proposals surface carries **no banned vocabulary** and **no surveillance metadata** | US-0102 · NFR-023 · DES-085 · §2.5 | Full proposals surface rendered | The markup contains **none** of the banned blockchain words (DES-085 jargon filter), and records **no member identifier in a data attribute** beyond the proposal and window ids it needs — the absence is the privacy property, per the §2.5 absence-test pattern (UT-0884) | Automated — `apps/web/test/proposals.test.tsx` · UT-0884 | **Pass (inh.)** — inherited from Doc 06 v2.4.1 |

---

## 5.7 `TS-CANDIDATE` — Candidate selection: nomination, consent, endorsements, debates, post-debate vote, feedback, schedule (TC-3592–TC-3619)

**Context.** These 28 cases cover the v1 candidate-selection drop recorded in Doc 06 **v2.11.1** (merged at `12fe4a6`, PR #22), designed by **DES-027**, **DES-028**, **DES-066**, **DES-067** and **DES-076** as amended to their Definition-A backing, and by the two elements minted with it, **DES-107** (FR-081) and **DES-108** (FR-093) — Doc 03 **v2.16.0** §10.13.14. New tests: `packages/protocol/test/candidates.test.js` **UT-0891..UT-0895** (27 `it`s), `packages/sdk/test/candidates.test.js` **UT-0896..UT-0902** (43), `packages/ui/test/PrivacyStatus.test.tsx` **UT-0903** (7), `apps/web/test/candidates.test.tsx` **UT-0904..UT-0907** (20) — **97 `it`s** over **seventeen** blocks in **four** files, which this suite cases. **The drop's full `UT` footprint is EIGHTEEN blocks in FIVE files, and the arithmetic is stated so it adds up: 640 + 97 + 2 = 739.** _(**v2.11.0, ISS-01 — corrected.** This paragraph read "97 `it`s, taking the suite 640 → **739**". **640 + 97 = 737.** The **+2** are `UT-0871` extended to `IProposalStore` and **`ICandidateStore`** at Doc 06 **v2.10.0** — a **fifth file**, `apps/web/test/sdk-types-sync.test.ts`, which goes **1 `it` → 3** (Doc 06 v2.11.1 §3's web addend, "+ 2 (UT-0871 extended to two more seams, v2.10.0)"; §7 item 23). They are **not** the UT-0905 flag-off and UT-0906 sign `it`s added at v2.11.0/v2.11.1 — **that pair is already inside the 20 web `it`s above**, which is what §9's R-21 row got wrong. The eighteenth block is **cased by `TC-3540`**, whose scope is widened to all three seams in §5.5; **no case is minted for it and no count moves.** It is called out here rather than left in §5.5 because one of the two assertions guards **`ICandidateStore` — the seam this entire suite is about**.)_ The contracts suite was **not modified** by this drop.

**The id band, and the cost of drawing from it.** `TC-3592`–`TC-3699` is the free band this document restated at v2.9.0 (ISS-01). **Doc 04 v1.7.1 §14 reserves it for the six `TS-V1-*` suites.** These 28 ids are drawn from its floor, so **Doc 04 §14 MUST re-narrow the `TS-V1-*` floor to `TC-3620` at its next touch** — the OPEN-30 pattern; the architect is routed for it by `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`. Until that lands the two documents disagree about who owns `TC-3592`..`TC-3619`, and that disagreement is recorded here rather than discovered later.

**One case per guarantee, not one per `it` — and the mapping is stated so it can be checked.** The TC-3577..TC-3591 precedent is one case per `it`; at **97** `it`s that would put a hundred rows in this document for one drop. Instead each case covers one guarantee and **names every `it` that implements it, verbatim as it reads in the test file**. The arithmetic, block by block: UT-0891 6 = 5 + 1 · UT-0892 5 · UT-0893 4 = 2 + 2 · UT-0894 7 = 5 + 2 · UT-0895 5 · UT-0896 10 = 8 + 1 + 1 · UT-0897 9 = 4 + 1 + 4 · UT-0898 6 · UT-0899 4 · UT-0900 5 = 3 + 2 · UT-0901 6 = 4 + 2 · UT-0902 3 · UT-0903 7 · UT-0904 4 · UT-0905 5 = 4 + 1 · UT-0906 7 = 4 + 3 · UT-0907 4. Totals: **27 + 43 + 7 + 20 = 97 `it`s over 28 cases**, and **every `it` appears in exactly one case** — no `it` is cited twice and none is left out. The orphan sweep in §8 states the same fact from the `UT` side.

**What this suite does NOT claim.** Six of the nine gating FRs it touches do **not** close on it, and the cases say so rather than implying otherwise. Each gap below is a clause of a stated guarantee with **no passing test, because it has no implementation** — and **no case is minted Pass for any of them**.

- **FR-039** — the immutable-timetable and ballot-lock half is covered (**TC-3611**). The office ballot is not: DES-076 rule 2's **voter-scope guard** and its **tie-break field fixed at open** are designed and unbuilt (Doc 03 §13). The Must row stays **OPEN (`G-NOMECH`)**.
- **FR-065** — scoring, refusal-not-overwrite and aggregate-only publication are covered (**TC-3595, TC-3608, TC-3609, TC-3618**). **Two clauses are not.** (i) "enforced by **the same nullifier mechanism as scope-action limits**": v1 refuses through a store-local `hasGivenFeedback` / `recordFeedback` check-then-write against `ICandidateStore`, **not** through DES-095's `isUniqueInScope` — the mechanism `nominate` itself uses — and Doc 03 DES-066 rule 2 records that as a v1 **DIVERGENCE** whose atomicity is only as good as a backing that is still `InMemoryCandidateStore`. (ii) "individual votes … **unlinkable to their caster**": the operator database CAN see the direction of an individual feedback vote; the surface says so under FR-131(b) and **TC-3618** asserts that it says so. The Must row stays **OPEN (`G-NOMECH`)**; `TC-3315` and `TC-3316` are the cases that will close it.
- **FR-066** — three debates by topic, boolean attestation, `contentRef`, visible blocking absence and unheld-is-not-absent are all covered (**TC-3594, TC-3606**). "**Recorded on the verifiable record**" is not: the trail is application-held and is not independently checkable until the **DES-097 audit-record anchoring** (Doc 13 stage S-8), which is unbuilt. The Must row stays **OPEN (`G-NOMECH`)**; `TC-3317` is the case that will close it.
- **FR-067** — every clause but one is covered (**TC-3592, TC-3596, TC-3607, TC-3610, TC-3617**). The exception is the §8 Gherkin's "the attempt is **refused and logged**". Refusal is delivered **by construction** — no call places a candidacy on a ballot, and every out-of-order edge throws `ILLEGAL_TRANSITION` naming `from` and `to`. **Logging is not:** v1 appends no trail event for a refused attempt (Doc 03 DES-067 rule 6). **A capability-absence argument discharges "refused"; it cannot discharge "logged"**, because logging is a positive obligation to produce a record and an absence produces none. The Must row stays **OPEN (`G-NOMECH`)**; `TC-3322` is the case that will close it, and the fix is a small engineer touch already in Doc 03 §13.
- **FR-081** — self-nomination, code-checked eligibility, decision by the tally alone, the absence of any approve / reject / rank / renominate capability, and append-only transitions with exactly one delete are all covered (**TC-3593, TC-3597, TC-3598, TC-3600, TC-3601, TC-3605, TC-3607, TC-3610**, and `TC-3407` re-statused). "**with its state (active/inactive)**" is not: **no field records it, no read exposes it, and no `it` asserts the published stage→state mapping**. Doc 03 DES-107 rule 4 publishes the mapping (NOMINATED, CONSENTED, DEBATING, DEBATES_COMPLETE, VOTE_OPEN, PUBLISHED **active**; NOT_ADVANCED, WITHDRAWN **inactive**) and records the architect's view that derivation satisfies the clause, while leaving the ruling here. **A document-level derivation is not a test:** if a ninth stage were added, nothing would fail and the mapping would silently go partial. The Must row stays **OPEN (`G-NOMECH`)**. **One `it` closes it**, and this suite is one `it` short.
- **FR-093** — the published, immutable timetable is covered (**TC-3611**). The **question phase** (`askQuestion` / `recordAnswer` / `closeQuestionPhase`, DES-108 rule 3(a)) and the **office election** (DES-076 rule 2) are designed and unbuilt, so "questions and answers on the public record" and "unanswered questions visibly recorded" have nothing to execute against. The Must row stays **OPEN (`G-NOMECH`)**; `TC-3419` is re-statused No mechanism → **Blocked** and is the case that will close it.

**What it does close.** **FR-036**, **FR-037** and **FR-085** close on this suite, and the non-gating **FR-038** Should row closes beside them. Each closure is argued clause by clause in Doc 08 **v2.13.0** §3.1; this suite is its evidence base. Two residuals are recorded rather than hidden, both as revisit flags on the closing rows: **FR-036** closes on a **self-declared** residency (no attestation exists in v1 — DES-027 rule 2; the surface says so, **TC-3615**) and on an endorsement minimum a test pins only as **non-zero**, not as the ratified **5**; **FR-037**'s "under any circumstance" is closed against the only holding of real-world identity v1 has — the candidacy disclosure holding — because the `/verify` enrolment surface is flag-gated off above dev and its verify-and-discard mechanism is unbuilt (FR-132 §(b), CON-015).

**Shared preconditions.** `IS_INSECURE_MOCK = true` — the backing is `InMemoryCandidateStore` (**TC-3612**); the service is constructed with an **injected clock** (no `Date.now()` on any asserted path); the verifier and the ballot service are passed **per call and never held**, so no read can reach a gate (**TC-3612**); `packages/protocol/src/candidates.js` exports `CANDIDACY_STAGE`, `TRANSITIONS`, `REQUIRED_DEBATE_TOPICS`, `FEEDBACK_SCORE`, `CONSENT_ACKNOWLEDGEMENTS`, `NOMINATION_ENDORSEMENTS_MIN` and `NOMINATION_MATURATION_SECONDS`; `packages/sdk/src/candidates.js` exports `CandidateService`, `ICandidateStore` and `InMemoryCandidateStore`; web cases render `/candidates/` with the `elections` flag **on**, except `TC-3616`, which renders it off. **Screen ids follow Doc 03 §10.12.4, the screen inventory of record** — **SCR-15** nomination and disclosure consent, **SCR-22** the candidate-feedback widget, **SCR-23** the debate schedule, attendance and post-debate vote. Doc 03 §5.2's DES-066/DES-067 rows and Doc 08 carry **SCR-22 and SCR-23 the other way round**; Doc 03 v2.15.0 annotated the inversion in place rather than swapping it silently (§10.12.4 and the §5.2 note at DES-066), and this suite follows §10.12.4.

### TC-3592..TC-3599 — protocol reference rules: lifecycle, debates, scoring, region scope, consent (UT-0891..UT-0895)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3592 | A candidacy reaches PUBLISHED **only** through DEBATES_COMPLETE → VOTE_OPEN, and a decided candidacy is never edited | US-0077, US-0091 · FR-067, FR-081, FR-107 · DES-067 rule 3, DES-107 rule 4 | `TRANSITIONS` and `assertCandidacyTransition` inspected; every stage pair walked | The happy path NOMINATED → CONSENTED → DEBATING → DEBATES_COMPLETE → VOTE_OPEN → PUBLISHED is the **only** path; **no stage other than VOTE_OPEN reaches PUBLISHED** — there is no shortcut for anyone, incumbent or not; skipping the debates is refused with the specific code; **PUBLISHED, NOT_ADVANCED and WITHDRAWN are terminal**, so a decided candidacy is recorded and never edited (FR-107); an **unknown** stage is refused rather than silently allowed, so a malformed input cannot restart the machine | Automated — `packages/protocol/test/candidates.test.js` · **UT-0891**, `it`s: "the happy path is the only path: NOMINATED → CONSENTED → DEBATING → DEBATES_COMPLETE → VOTE_OPEN → PUBLISHED"; "no stage other than VOTE_OPEN can transition to PUBLISHED — there is no shortcut for anyone, incumbent or not"; "skipping the debates is refused with the specific code"; "PUBLISHED, NOT_ADVANCED and WITHDRAWN are terminal — a decided candidacy is never edited, only recorded (FR-107)"; "an unknown stage is refused, not silently allowed" | **Pass (obs.)** — run **R-21**, 2026-09-21 |
| TC-3593 | **Capability-absence:** the protocol module exports nothing that approves, rejects, ranks or renominates | US-0091 · FR-081, FR-067 · DES-107 rule 3 | The `packages/protocol/src/candidates.js` export surface scanned | **No export** of the module approves, rejects, ranks or renominates a candidacy. The absence **is** the guarantee — FR-081's "no human MAY approve, reject, or rank a candidacy at any point in the path" cannot be enforced by a check that a caller could route around; it is enforced by there being nothing to call | Automated — `packages/protocol/test/candidates.test.js` · **UT-0891**, `it`: "capability absence: the module exports nothing that approves, rejects, ranks or renominates (FR-081, BR-016)" | **Pass (obs.)** — run **R-21** |
| TC-3594 | Three debates, one per required topic; an absence blocks and stays visible; **unheld is not absent** | US-0076 · FR-066 · DES-067 rules 1–2 | `REQUIRED_DEBATE_TOPICS` and `debatesComplete()` inspected against constructed debate sets | Exactly **three** topics are required and they are the three FR-066 names (local conditions, local problems, work required); three attended debates are complete; two are not, and **the missing topic is named**; a **recorded absence** keeps the candidacy from proceeding **and stays visible on the record**; a scheduled-but-not-yet-held debate (`attended: null`) is **missing, not absent** — the distinction matters because only an absence blocks | Automated — `packages/protocol/test/candidates.test.js` · **UT-0892**, `it`s: "exactly three topics are required and they are the three FR-066 names"; "three attended debates on the three topics are complete"; "two debates are not complete and the missing topic is named"; "a recorded absence keeps the candidacy from proceeding AND stays visible on the record"; "a scheduled-but-not-yet-held debate (attended: null) is missing, not absent" | **Pass (obs.)** — run **R-21**. _Covers FR-066's scheduling, topic and attendance clauses only; the "verifiable record" clause is unbuilt — see this suite's "What this suite does NOT claim"_ |
| TC-3595 | Feedback scores **exactly** +3 per upvote and −1 per downvote, and the score is 3·up − down | US-0074 · FR-065 · DES-066 rule 1 · ADR-015 | `FEEDBACK_SCORE` and `feedbackScore(tally)` inspected | The asymmetry is **exactly** the ADR-015 values — +3 and −1, not a configurable pair — and `feedbackScore` is 3·up − down. The asymmetry is deliberate (Doc 02 §11 TD-07: a visible downvote against a local incumbent carries a retaliation risk an upvote does not), so a test that accepted any asymmetry would not be testing the decision | Automated — `packages/protocol/test/candidates.test.js` · **UT-0893**, `it`s: "the asymmetry is exactly the ADR-015 values"; "feedbackScore is 3·up − down" | **Pass (obs.)** — run **R-21** |
| TC-3596 | The post-debate vote must be **strictly** net positive — a tie does not advance, and neither does silence | US-0077 · FR-067 · DES-067 rule 4 | `isNetPositive(tally)` inspected at the tie, at +1 and at zero votes | A **tie does NOT advance** the candidate; one more SUITABLE than NOT_SUITABLE does; **zero votes does not**. "Net positive" is read strictly, so an unopposed candidacy nobody votes on is not published by default — the failure mode is refusal, not advancement | Automated — `packages/protocol/test/candidates.test.js` · **UT-0893**, `it`s: "a tie in the post-debate vote does NOT advance the candidate"; "one more SUITABLE than NOT_SUITABLE advances; zero votes does not" | **Pass (obs.)** — run **R-21** |
| TC-3597 | **You may stand only where you live** — the office region must equal or contain the residency, never the reverse | US-0046 · FR-036, FR-081 · DES-027 rule 2 | `inScopeForOffice` / `isWithin` inspected across ward, containing district, other ward, contained ward and a malformed path | A ward resident may stand for that ward and for a **district office containing** it; a resident of **another** ward may not — nobody parachutes in; a **district** resident may **not** stand for a single ward inside it, because the office region must contain the residency and not the reverse; a **malformed region path is a `RegionError`, never a silent pass** — a scope check that fails open is worse than no scope check | Automated — `packages/protocol/test/candidates.test.js` · **UT-0894**, `it`s: "a ward resident may stand for that ward"; "a ward resident may stand for an office covering the whole district that contains the ward"; "a resident of one ward may NOT stand for a different ward — nobody parachutes in"; "a district resident may NOT stand for a single ward inside it — the office region must contain the residency, not the reverse"; "a malformed region path is a RegionError, never a silent pass" | **Pass (obs.)** — run **R-21**. _v1 residency is **self-declared**; no attestation exists (DES-027 rule 2). The scope rule is what FR-036 states and what this case proves; the strength of the claim behind it is FR-006/DES-007's, and the surface discloses the limit (TC-3615)_ |
| TC-3598 | Maturation is checked to the second against the published period, and both published constants are real | US-0046 · FR-036, FR-023 · DES-027 rules 3 and 5 · Doc 03 §10.11 | `isMatured({joinedAt, now})` at the boundary and one second inside it; `NOMINATION_ENDORSEMENTS_MIN` and `NOMINATION_MATURATION_SECONDS` inspected | A member is matured **only once the published period has elapsed** — true at exactly `NOMINATION_MATURATION_SECONDS`, false one second earlier, false for a null `joinedAt`, so the boundary is closed and an absent join date does not read as matured. `NOMINATION_MATURATION_SECONDS` is pinned to **30 days** exactly; `NOMINATION_ENDORSEMENTS_MIN` is asserted **greater than zero** | Automated — `packages/protocol/test/candidates.test.js` · **UT-0894**, `it`s: "maturation: a member is matured only once the published period has elapsed since joining (FR-023)"; "the two engineer-chosen constants are flagged for ratification and are not zero" | **Pass (obs.)** — run **R-21**. **Residual, stated rather than absorbed:** both constants were **APPROVER-RULED on 2026-09-21** (`artifacts/status/DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md`; Doc 03 §10.11) — `NOMINATION_ENDORSEMENTS_MIN` = **5**, maturation = **30 days**. The maturation value **is** pinned by this `it`; **the value 5 is not** — it is asserted only as non-zero, and the `it` title still reads "flagged for ratification". Neither is a defect against FR-036, whose guarantee is that **a published minimum gates the candidacy** (asserted: `ENDORSEMENTS_SHORT` carries `required`, and `endorseNomination` returns `{endorsements, required, met}` — TC-3602, TC-3606). Pinning the ratified 5 and re-titling the `it` is an **engineer** touch, already routed by the assignment record alongside Doc 06 §7 item 30(iii) |
| TC-3599 | Consent is valid **only** when every FR-038 fact is the literal `true` — silence is not consent, and neither is "yes" | US-0049 · FR-037, FR-038, FR-085 · DES-028 rule 1 | `CONSENT_ACKNOWLEDGEMENTS` and `validateConsent` inspected across complete, partial, truthy-not-true and empty records | The three acknowledgements are exactly **identity-public**, **irreversible-for-term** and **revocable-only-by-withdrawal-before-lock**; all three `true` is valid; a **missing key is a missing acknowledgement** — silence is not consent; a **truthy-but-not-`true`** value (`"yes"`, `1`) does not count, so a client that posts a loose truthy value cannot manufacture consent; an empty or absent record is missing all three and says so | Automated — `packages/protocol/test/candidates.test.js` · **UT-0895**, `it`s: "the three acknowledgements are identity-public, irreversible-for-term, revocable-only-by-withdrawal-before-lock"; "all three true is valid"; "a missing key is a missing acknowledgement — silence is not consent"; "a truthy-but-not-true value (\"yes\", 1) does not count — the acknowledgement must be the literal true"; "an empty or absent record is missing all three" | **Pass (obs.)** — run **R-21** |

### TC-3600..TC-3612 — the service: nomination, consent, the one-way door, debates, the vote, feedback, the seam (UT-0896..UT-0902)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3600 | A member may nominate **only where they live, only if they count, only once, only in the window** — and the gate is asked with scope CANDIDACY | US-0046, US-0047 · FR-036, FR-023, FR-123(c), FR-131(d) · DES-027 rules 2–4, 6 · DES-095 | `CandidateService` over `InMemoryCandidateStore`; a spied `IEligibilityVerifier`; an open election with a ward office | A matured, counting-eligible ward resident **stands**, and the trail records it **without disclosures**; a ward resident may stand for a **district office containing** the ward; a resident of **another ward** is refused `OUT_OF_SCOPE`; a residency **outside the party jurisdiction** is refused; an **open-tier** member is refused `NOT_COUNTING_ELIGIBLE`, **told they are still a member**, and the seam is confirmed to have been asked with scope **`CANDIDACY`**; a **fresh joiner** is refused `NOT_MATURED` **before the seam is even asked** — nobody is sent to verify for an act they cannot yet perform; a **second** nomination is refused `ALREADY_NOMINATED`; after the window closes, nominating is refused | Automated — `packages/sdk/test/candidates.test.js` · **UT-0896**, `it`s: "a matured, verified ward resident stands for the ward office and the trail records it without disclosures"; "a ward resident may stand for a district office that contains the ward"; "a resident of another ward is refused with OUT_OF_SCOPE — nobody parachutes in"; "a declared residency outside the party jurisdiction is refused"; "an open-tier member (no ID check) is refused with NOT_COUNTING_ELIGIBLE and told they are still a member — the seam was asked with scope CANDIDACY"; "a fresh joiner is refused with NOT_MATURED before the seam is even asked (FR-023)"; "one candidacy per member per election: a second nomination is refused with ALREADY_NOMINATED"; "after the nomination window closes, nominating is refused" | **Pass (obs.)** — run **R-21** |
| TC-3601 | **Capability-absence:** `nominate()` has no parameter naming anyone but the caller — one member cannot put another on the record | US-0046, US-0091 · FR-036, FR-081 · DES-027 rule 1 | `CandidateService.prototype.nominate` signature inspected | The parameter list names **nobody but the caller** — there is no nominee, no on-behalf-of, no sponsor. FR-036's "nominate **only themselves**" and its Gherkin "any member attempts to nominate a different person → the action is refused" are satisfied **by construction**: there is no call to refuse, which is the stronger form | Automated — `packages/sdk/test/candidates.test.js` · **UT-0896**, `it`: "capability absence: nominate() has no parameter naming anyone but the caller" | **Pass (obs.)** — run **R-21** |
| TC-3602 | Nomination endorsements come only from **matured residents of the office region**, once each, and never from the candidate | US-0048 · FR-036, FR-023 · DES-027 rule 5 · Doc 03 §10.11 | A standing candidacy; endorsers constructed matured, fresh, in-ward and out-of-ward | The first endorsement returns `{endorsements: 1, required: NOMINATION_ENDORSEMENTS_MIN, met: false}` — **the published minimum is returned to the caller on every endorsement**, which is how it is published; a second from the same endorser is `ALREADY_ENDORSED`; the **candidate endorsing themselves** is `SELF_ENDORSEMENT`; an endorser resident in another ward is `OUT_OF_SCOPE`; a fresh joiner is `NOT_MATURED` | Automated — `packages/sdk/test/candidates.test.js` · **UT-0896**, `it`: "endorsements come only from matured ward residents, once each, never from the candidate" | **Pass (obs.)** — run **R-21** |
| TC-3603 | **Nothing is published and nobody is named before consent**, and consent is a disclosure step, not a counting action | US-0049, US-0050 · FR-037, FR-122 · DES-028 rules 1, 3, 4 | A standing candidacy at NOMINATED; a spied verifier in scope | Before consent the public view shows **no member and no disclosures**; after consent it shows both — so the one-way door has a demonstrable "before". Consent with any FR-038 fact missing is refused `CONSENT_INCOMPLETE` **naming the gap**. Consent **takes no verifier and calls no seam** — asserted behaviourally *and* structurally, the entry point's parameter list matching no `/verifier/i` — so it is a disclosure step and not an FR-123 counting action. Consent is **recorded once**; a second attempt is refused | Automated — `packages/sdk/test/candidates.test.js` · **UT-0897**, `it`s: "before consent the public view shows no member and no disclosures; after consent it shows both"; "consent with any FR-038 fact missing is refused with CONSENT_INCOMPLETE naming the gap"; "consent takes no verifier and calls no seam — it is a disclosure step, not a counting action"; "consent is recorded once — a second attempt is refused" | **Pass (obs.)** — run **R-21** |
| TC-3604 | **Only the candidate** can cross their own door or withdraw — a stranger and an absent actor are both refused, and nothing changes | US-0050 · FR-037 · DES-028 rule 2 | A standing candidacy; calls made as a stranger and with no actor at all | Both `recordConsent` and `withdraw` refuse any other or absent caller with **`NOT_YOUR_CANDIDACY`**, **before any read or write**, and the candidacy's state is verified **unchanged** afterwards. This is the TRUMO-P02 cycle-1 High closed at Doc 06 v2.11.0: a leaked candidacy id must not be a route into someone else's consent record | Automated — `packages/sdk/test/candidates.test.js` · **UT-0897**, `it`: "only the candidate can cross their own door or withdraw — any other caller is refused with NOT_YOUR_CANDIDACY and nothing changes (ISS-01)" | **Pass (obs.)** — run **R-21** |
| TC-3605 | The FR-085 lifecycle: withdrawal **before** the window destroys the disclosures; **after** it they stand; after the lock nothing moves — and the store has **exactly one** delete | US-0095, **US-0046** · FR-085, FR-107, FR-081, **FR-036** · DES-028 rule 6 · **DES-027 rule 6** · OI-16 | A consented candidacy; withdrawals attempted before `nominationClosesAt`, after it, and after `lockBallot` | Withdrawing **before** the nomination window closes **destroys the disclosures**, and the trail records `disclosuresDestroyed` **without ever having contained them** — the confidential-class carve-out, which works only because the disclosure holding never entered the append-only record. Withdrawing **after** the window closes but before the ballot locks is **permitted and the disclosures STAND** — consent is irrevocable for the term. After the ballot locks, withdrawal is refused `BALLOT_LOCKED`. The store exposes **exactly one delete**, and it is `destroyDisclosures` — asserted as a prototype scan, so no second delete can appear unnoticed | Automated — `packages/sdk/test/candidates.test.js` · **UT-0897**, `it`s: "withdrawing BEFORE the nomination window closes destroys the disclosures, and the trail says so without ever containing them"; "withdrawing AFTER the window closes but before the ballot locks is allowed, and the disclosures STAND — consent is irrevocable for the term"; "after the ballot locks, withdrawal is refused with BALLOT_LOCKED"; "the store has exactly one delete, and it is the confidential-class carve-out (FR-107, OI-16)" | **Pass (obs.)** — run **R-21**. _(**v2.11.0 — `FR-036` and `US-0046` added to the Verifies cell, on the Doc 08 v2.13.0 cycle-1 ISS-02 (High) finding.** FR-036's stated guarantee ends "**and allow withdrawal of a candidacy at any time before the ballot locks**", and Doc 08 closes FR-036 partly on that clause — but the clause was cased **only here**, on a row that named FR-085 and not FR-036, so the RTM cited a closure whose evidence row did not admit to carrying it. The `it`s are unchanged and the status is unchanged; what was wrong was the attribution, and an unattributed clause is how a Must row comes to rest on evidence nobody can find. **DES-027 rule 6** is added beside DES-028 rule 6 for the same reason: the window-and-withdrawal rule lives in both elements.)_ |
| TC-3606 | Debates are gated on consent **then** the published endorsement minimum; three topics are created unheld; an absence blocks; attendance must be a boolean | US-0076, US-0048 · FR-066, FR-036 · DES-067 rules 1–3 · DES-027 rule 5 | A candidacy walked from NOMINATED through consent, endorsement and attestation | Scheduling is refused `CONSENT_REQUIRED` before consent and `ENDORSEMENTS_SHORT` before the minimum, **with `required` naming the shortfall**; scheduling creates **exactly the three FR-066 topics, unheld**; two attended leave the candidacy DEBATING and **the vote cannot open**; an **absence** is on the trail, visible in the public view, and keeps the vote from opening; all three attended **with content references** moves it to DEBATES_COMPLETE; attendance **must be a boolean** (`ATTENDANCE_REQUIRED`) and an **unknown topic is refused** — a missing attestation cannot be laundered into an attendance | Automated — `packages/sdk/test/candidates.test.js` · **UT-0898**, `it`s: "debates cannot be scheduled before consent, nor before the published minimum of endorsements"; "scheduling creates exactly the three FR-066 topics, unheld"; "two attended debates leave the candidacy DEBATING and the vote cannot open"; "an absence is recorded on the trail, visible in the public view, and keeps the vote from opening"; "all three attended, with content references, moves the candidacy to DEBATES_COMPLETE"; "attendance must be attested as a boolean, and an unknown topic is refused" | **Pass (obs.)** — run **R-21**. _As TC-3594: the "verifiable record" clause of FR-066 is unbuilt and is not claimed here_ |
| TC-3607 | **Incumbency confers nothing** — the identical path, the office-holder record never read, no method or parameter that skips, and an empty ballot until a net-positive close | US-0077, US-0091 · FR-067, FR-081, FR-083 · DES-067 rule 5 · DES-107 rule 3 | A sitting office-holder recorded; a spy installed on the store's `officeHolder` reader; a full cycle walked | The incumbent nominates through the **identical** path and is **NOMINATED, not PUBLISHED**. `nominate()` **and `closePostDebateVote()`** never read the office-holder record — asserted **by spy**, over the publication path, not merely over nomination. **No method or parameter** on the service mentions incumbent, renominate, override or skip. The **candidate set is empty until a net-positive vote closes** — there is no other way onto the ballot, which is what makes the first three assertions load-bearing rather than decorative | Automated — `packages/sdk/test/candidates.test.js` · **UT-0899**, `it`s: "the incumbent nominates through the identical path and is NOMINATED, not PUBLISHED"; "nominate() and closePostDebateVote() never read the office-holder record — asserted by spy"; "capability absence: no method or parameter mentions incumbent, renominate, override or skip"; "the candidate set is empty until a net-positive vote closes — there is no other way onto the ballot" | **Pass (obs.)** — run **R-21** |
| TC-3608 | One feedback vote per member per candidate per election — a second is **REFUSED, not overwritten** — and self, open-tier and fresh are each refused with their own code | US-0074 · FR-065, FR-123 · DES-066 rules 2–3 · ADR-015 | A consented candidacy with feedback open; members constructed as candidate, open-tier and fresh | An upvote adds **3** and a downvote subtracts **1** at the service layer. A **second** feedback vote from the same member is **REFUSED** (`ALREADY_GAVE_FEEDBACK`) and the first vote is unchanged — this is why feedback does **not** ride the DES-096 last-ballot-counts seam. The **candidate cannot give feedback on themselves** (`SELF_VOTE`); an **open-tier** member is refused; a **fresh joiner** is refused — each with its own code rather than one generic denial | Automated — `packages/sdk/test/candidates.test.js` · **UT-0900**, `it`s: "an upvote adds 3 and a downvote subtracts 1"; "a second feedback vote from the same member is REFUSED, not overwritten"; "the candidate cannot give feedback on themselves; an open-tier member is refused; a fresh joiner is refused" | **Pass (obs.)** — run **R-21**. _Covers the refusal **outcome**. FR-065's clause that the refusal be "enforced by the same nullifier mechanism as scope-action limits" is **not** covered and is not claimed — see TC-3315 and this suite's "What this suite does NOT claim"_ |
| TC-3609 | Publication is **aggregate-only**: no read returns a caster, and the tally takes no verifier | US-0075 · FR-065, FR-122 · DES-066 rule 4 | Feedback cast by several members; the aggregate, the public view and the trail all read | **No read returns a caster** — the aggregate, the public candidacy view and the trail carry **no pseudonym of anyone who gave feedback**. `feedbackTally()` **takes no verifier and calls no seam**, asserted structurally as well as behaviourally, so reading a tally is not a counting action and cannot be turned into one | Automated — `packages/sdk/test/candidates.test.js` · **UT-0900**, `it`s: "no read returns a caster: the aggregate, the public view and the trail carry no pseudonym of anyone who gave feedback"; "feedbackTally() takes no verifier and calls no seam" | **Pass (obs.)** — run **R-21**. _Covers "only the aggregate tally is publicly visible". It does **NOT** cover "unlinkable to their caster": the store keeps a caster record to refuse a second vote and the operator database can read it (FR-131(b), disclosed on the surface — TC-3618). Unlinkability is Definition-B; see TC-3316_ |
| TC-3610 | The post-debate vote is a **ballot in the ballot service** — this service stores none — and the tally **alone** decides | US-0077, US-0091 · FR-067, FR-081, FR-123 · DES-067 rule 4 · DES-096 · DES-095 | A DEBATES_COMPLETE candidacy; a spied verifier; an `IBallotService`; Maps and Sets walked structurally | A vote asks the seam with scope **`BINDING_VOTE`** and then casts **through `IBallotService`**, and **this service stores no ballot** — asserted **structurally**, by walking the service's Maps and Sets and proving the ballot present in the ballot service, which is what makes the claim non-vacuous. **Net positive → PUBLISHED** and on the candidate set, with the **tally and the result hash on the trail**; a **tie → NOT_ADVANCED**, the record stands and the candidate is **not** on the ballot. The candidate cannot vote on their own suitability, and an **open-tier** member is refused **before the ballot service is reached** | Automated — `packages/sdk/test/candidates.test.js` · **UT-0901**, `it`s: "a vote asks the seam with scope BINDING_VOTE and then casts through the ballot service — this service stores no ballot"; "net positive → PUBLISHED and on the candidate set; the trail records the tally and result hash"; "a tie → NOT_ADVANCED; the record stands and the candidate is not on the ballot"; "the candidate cannot vote on their own suitability; an open-tier member is refused before the ballot service is reached" | **Pass (obs.)** — run **R-21** |
| TC-3611 | The timetable is published before the election opens and **cannot be changed afterwards** — there is no update method — and the lock freezes the candidate set | US-0051, US-0052, US-0103 · FR-039, FR-093 · DES-076 rule 1 · DES-108 rules 1–2 | An election opened with an ordered future timetable; `lockBallot` exercised before and after `ballotLocksAt` | The full timetable is **published at `openElection`** and **cannot be changed afterwards — the service exposes no update method**, which is the capability-absence form of immutability rather than a guard a caller could route around. An invalid or out-of-jurisdiction timetable is refused at open. `lockBallot` refuses before `ballotLocksAt` (`TOO_EARLY`); **once the ballot has locked the candidate set cannot change** and closing a vote is refused | Automated — `packages/sdk/test/candidates.test.js` · **UT-0901**, `it`s: "once the ballot has locked the candidate set cannot change: closing a vote is refused (FR-039)"; "the timetable is published before the election opens and cannot be changed afterwards — there is no update method (FR-039)" | **Pass (obs.)** — run **R-21**. **This case does not close FR-039 or FR-093, and does not claim to.** FR-039 also requires a **voter-scope guard on the office ballot** and a **tie-break rule** immutable after opening — DES-076 rule 2, designed and unbuilt, with **no tie-break field in the election record at all**. FR-093 also requires a **question phase** on the public record — DES-108 rule 3(a), designed and unbuilt. Both rows stay OPEN |
| TC-3612 | `IS_INSECURE_MOCK` discipline, and the per-call construction that keeps a read away from a counting gate | US-0133 · FR-122, FR-123 · DES-095 · Doc 03 §10.13.4 | The in-memory store, an honest stub store, and the service's own fields inspected | `InMemoryCandidateStore.IS_INSECURE_MOCK()` returns **true** and the service **delegates** to its store; a store that is **not** a mock makes the service **not** a mock — **the service adds no trust of its own**, so the honesty of the deployment is a property of the backing and cannot be asserted by the layer above it. **Asserted:** the service holds **no `_verifier`, no `_ballots` and no `_ballotService`** — three **named** fields, each checked `undefined`. **Inferred from that, and marked as inference rather than stated as asserted:** because the verifier and the ballot service are passed **per call**, consent, withdrawal, endorsement, attestation and every read cannot reach a counting gate. _(**v2.11.0, ISS-08.** This cell read "every read **structurally cannot reach a counting gate**" as though the `it` established it. The `it` checks **three named fields**, not an enumeration of own properties, so a fourth differently-named holder would pass it. The property is true of the code today — the tester read `CandidateService`'s constructor — but this suite separates **asserted** from **inferred** at `TC-3598`, `TC-3609`, `TC-3611` and `TC-3618`, and this row now does the same. A stronger `it` — enumerating own properties and refusing any verifier-like or ballot-like holder — would convert the inference into an assertion; that is an engineer touch, not a status change, and **the status does not move**.)_ | Automated — `packages/sdk/test/candidates.test.js` · **UT-0902**, `it`s: "the in-memory store returns true and the service delegates to it"; "a store that is not a mock makes the service not a mock — the service adds no trust of its own"; "the service holds no verifier and no ballot service — both are per-call, so reads cannot reach them" | **Pass (obs.)** — run **R-21** |

### TC-3613 — the component: PrivacyStatus `anon` copy is context-selected, never inferred (UT-0903)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3613 | The `anon` state's copy is **selected by context, never inferred**, and no path through it carries an FR-131 banned word | US-0132 · FR-131(e), FR-124 · DES-094 clause 10 · OPEN-27 | `PrivacyStatus` rendered in the `anon` state with `anonContext` absent, set to each of `browse` / `join` / `endorse`, and set to an unrecognised value | With **no context** the component renders the v1 title and the **fail-honest default** subtitle, and the `aria-label` carries the selected title. `browse`, `join` and `endorse` render their subtitles **verbatim** — and the `endorse` subtitle **asserts NO non-publication**, because endorsing is public by design and a shared "you are not published" string would have been false there. An **unrecognised** context is **not inferred or guessed**: it renders the fail-honest default (clause 10(c)). The **superseded pair never renders in any context**. `anonContext` has **no effect on the `ver` and `pub` states** | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · **UT-0903**, `it`s: "context absent → the v1 title and the fail-honest default; aria-label carries the selected title"; "'browse' → the browse subtitle, verbatim"; "'join' → the join subtitle, verbatim — the badge-length form of parties.joinPrivate"; "'endorse' → the endorse subtitle, which asserts NO non-publication — endorsing is public by design"; "an unrecognised context is NOT inferred or guessed — it renders the fail-honest default (clause 10(c))"; "the superseded pair never renders in any context"; "anonContext has no effect on the ver and pub states" | **Pass (obs.)** — run **R-21**, `-t "UT-0903"`: 7 passed, 18 skipped (25) |

### TC-3614..TC-3619 — the surface: consent crossing, standing, ship-dark, the vote, feedback, honesty (UT-0904..UT-0907)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3614 | Going public is a **two-step consent** that states all three FR-038 facts **before** the confirm control — and declining records nothing | US-0049, US-0095 · FR-037, FR-038, FR-085 · DES-028 rules 5–6 · DES-103 · SCR-15 | `/candidates/` rendered with `elections` on; a standing candidacy at NOMINATED | After standing, **nothing is public** and the gate names the one-way door; the three facts appear **only in step 2**, so there is a real "before". **Step 2 states identity-public, irreversible-for-term and withdraw-only-before-lock, plus no-approval, BEFORE the confirm control** — asserted as **document order**, not merely as presence, which is the difference between a disclosure and a disclaimer. **Cancel returns to the gate with nothing recorded** — a disclosure a member cannot refuse is not consent. Confirm records consent, the candidacy becomes public, and **the trail carries no disclosure**. Withdrawing before nominations close **says the submission was destroyed** | Automated — `apps/web/test/candidates.test.tsx` · **UT-0904**, `it`s: "after standing, nothing is public and the gate names the one-way door; the facts are shown only in step 2"; "step 2 states identity-public, irreversible-for-term and withdraw-only-before-lock, plus no-approval, BEFORE the confirm control"; "cancel returns to the gate with nothing recorded; confirm records consent and the candidacy becomes public"; "withdrawing before nominations close says the submission was destroyed" | **Pass (obs.)** — run **R-21**. _This is the case that carries **FR-038**'s whole stated guarantee: the two facts, stated **before** consent is given_ |
| TC-3615 | An open-tier visitor who tries to stand gets the **FR-131 clause (d) notice, never a fake check** — and the residency field admits what v1 does not do | US-0046 · FR-036, FR-123, FR-131(d), NFR-020 · DES-027 rules 2 and 4 · DES-098 · SCR-15 | `/candidates/` rendered with `elections` on, for an open-tier visitor, a counted resident of another ward, and a counted ward resident | The open-tier visitor sees **what is not counted, why, that membership still works, and that the request was not counted** — and **no control pretends to verify**. A counted resident of **another ward** is told they can stand **only where they live**. The residency field **says plainly that v1 takes the member at their word** — the self-declared-residency limit is disclosed on the surface rather than left in the design. A counted ward resident **stands**, and the timetable **reads as fixed** | Automated — `apps/web/test/candidates.test.tsx` · **UT-0905**, `it`s: "the open-tier visitor sees what is not counted, why, that membership still works, and that the request was not counted"; "a counted resident of another ward is told they can stand only where they live"; "the residency field says plainly that v1 takes the member at their word"; "a counted ward resident stands, and the timetable is shown as fixed" | **Pass (obs.)** — run **R-21** |
| TC-3616 | **Ship-dark:** with the `elections` flag off, `/candidates/` renders **only** the flag-off line | US-0046 · NFR-020, FR-036 · DES-085 · Doc 03 §10.13.4 | `/candidates/` rendered with the `elections` flag **off** | The page renders **only** the flag-off line — no nomination control, no timetable, no candidate list. The whole surface **ships dark**, so nothing in this drop is reachable above dev until the flag is turned on, and the absence is asserted rather than assumed | Automated — `apps/web/test/candidates.test.tsx` · **UT-0905**, `it`: "with the elections flag off, /candidates/ renders only the flag-off line — the surface ships dark (ISS-L1)" | **Pass (obs.)** — run **R-21** |
| TC-3617 | The post-debate vote surface renders the **FR-131 notice BEFORE its controls**, disclaims incumbency, and fills the ballot **only** when the members say yes | US-0077 · FR-067, FR-131, FR-123 · DES-067 rules 4 and 8 · DES-098 · SCR-23 | `/candidates/` at VOTE_OPEN with a sitting office-holder also standing; a counted member and an open-tier visitor | The **sitting office-holder is named and told the office gives them nothing here** — incumbency is disclaimed on the surface, not only in the service. **Opening the vote renders the FR-131 notice BEFORE the suitable / not-suitable controls** — document order asserted, the same bar TC-3557 set for the proposals ballot. A counted member votes yes and **closing the vote puts the candidate on the ballot**; **with no votes, closing does NOT advance them and the ballot stays empty**. An open-tier visitor who tries to vote gets the **clause (d) notice** | Automated — `apps/web/test/candidates.test.tsx` · **UT-0906**, `it`s: "the sitting office-holder is named and told the office gives them nothing here"; "opening the vote renders the FR-131 notice BEFORE the suitable/not-suitable controls"; "a counted member votes yes; closing the vote puts the neighbour on the ballot"; "with no votes, closing does NOT advance the neighbour and the ballot stays empty" | **Pass (obs.)** — run **R-21** |
| TC-3618 | The feedback surface **states the FR-131(b) truth** — our own records can see the direction — states the sign of a downvote, and takes one signal only | US-0074, US-0075 · FR-065, FR-131(b) · DES-066 rules 2 and 4 · SCR-22 | `/candidates/` feedback widget rendered for a counted member and for an open-tier visitor | An open-tier visitor who tries to vote gets the clause (d) notice, and **feedback direction visibility is stated** — the surface says the operator **can** see which way an individual feedback vote went, which is the FR-131(b) obligation and the reason FR-065's "unlinkable" clause is **not** claimed for v1. The lead **states the sign**: a thumbs-down **takes one away**, and the rendered score beside it goes to **−1** — copy and arithmetic asserted to agree, so the surface cannot describe a scoring rule the product does not implement. One feedback signal, then **the controls are gone** and the aggregate has moved by **+3** | Automated — `apps/web/test/candidates.test.tsx` · **UT-0906**, `it`s: "an open-tier visitor who tries to vote gets the clause (d) notice; feedback direction visibility is stated (FR-131(b))"; "the feedback lead states the sign: a thumbs-down takes one away, and the score beside it goes to -1 (ISS-05)"; "feedback: one signal, then the controls are gone and the aggregate moved by +3" | **Pass (obs.)** — run **R-21**. _Doc 03 DES-066 rule 4 records that the FR-131(b) sentence currently renders **after** the feedback controls, and that rendering it **before** them — with a document-order assertion, as TC-3617 has for the vote — is **owed** (Doc 03 §13). This case asserts the sentence is **present**, not that it precedes the controls, and says so rather than implying the stronger property_ |
| TC-3619 | Every new candidate-selection string is free of FR-131 banned words and DES-085 jargon **in both locales**, and the Arabic is a mirror that is **not claimed reviewed** | US-0134, US-0046 · FR-131(e), NFR-023, NFR-013 · DES-085 · ARABIC-I18N | `en.candidates` and `ar.candidates` read from `apps/web/src/i18n/`, templates rendered | **No `en.candidates` string** carries a banned word or jargon — templates rendered, not merely scanned as raw strings, so an interpolated banned word cannot hide. `ar.candidates` **mirrors `en.candidates` key-for-key**, and `nav.candidates` exists in both. The Arabic is **not a copy-paste** of the English and carries **no Latin-script banned word**. The Arabic section is **flagged as an engineer draft awaiting native review — it is not claimed reviewed**, which is the honesty property: an unreviewed translation presented as reviewed is the same class of overclaim FR-131 exists to prevent | Automated — `apps/web/test/candidates.test.tsx` · **UT-0907**, `it`s: "no en.candidates string carries a banned word or jargon"; "ar.candidates mirrors en.candidates key-for-key (and nav.candidates exists in both)"; "the Arabic is not a copy-paste of the English and carries no Latin-script banned word"; "the Arabic section is flagged as an engineer draft awaiting native review — it is not claimed reviewed" | **Pass (obs.)** — run **R-21** |
