# Anchored spec — Doc 08 v2.11.2 (rework cycle 4 of 5)

```
Prepared by:  tester (Ji-woo Park) — owner of Doc 08 (RTM, author)
Date:         2026-09-07
For:          project-manager (mechanical applier)
Target:       docs/08-traceability-matrix.md  v2.11.1 -> v2.11.2 (In Review, cycle 4 of 5)
Against:      artifacts/reviews/08-traceability-matrix-v2.11.1-technical-cycle3.md
                FAIL 96%, 0C/0H/1M/1L. Reviewer: reviewer-qa (Rafael Duarte), neutral.
                Medium = ISS-01, a 142-story backlog pinned against a 134-story census.
                Route taken: the reviewer's disclose-and-register option.
Doc 07:       NOT touched. v2.8.1 PASSED cycle 3 (98%, 1 Low) and is Approved; its
              reviewer routed that Low to "the next touch of the header block".
              Bumping an Approved document to clear a non-blocking Low would restart
              its review loop and buy nothing.
Nature:       PATCH bump, and a DISCLOSURE. Nothing normative moves:
              Must 138 / COMPLETE 16 / OPEN 122 / G-PHASE3 47 / FR-131 OPEN,
              test cases 485 / 230 / gaps 255, suite 625/625 (R-19) — all unchanged.
              Stories restated 134 -> 142 population; numerator 17 unchanged.
Rules:        FOUR-backtick fences. Each FIND matches EXACTLY ONCE (verified below).
              File is CRLF on disk; this spec is LF — the applier converts.
              No FIND line is dropped except where an OP header names the change.
Do NOT touch: any other document, any product code, any unit test.
```

---

### OP 1 — docs/08-traceability-matrix.md — bump to v2.11.2 / In Review (rework cycle 4 of 5); the v2.11.1 Status line is re-labelled as a retained record and its text continues unchanged on the untouched lines below
FIND:
````
Version:       2.11.1
Status:        In Review — v2.11.1 (2026-09-07). **Rework cycle 3 of 5 against
````
REPLACE WITH:
````
Version:       2.11.2
Status:        In Review — v2.11.2 (2026-09-07). **Rework cycle 4 of 5 against
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
````

### OP 2 — docs/08-traceability-matrix.md — Source — ISS-02: label the trailing legacy section lists so one pin names one scope; and add the census clause to the BKLG "version-only" annotation (ISS-01)
FIND:
````
Source:        SRS-TRUMOCRACY v2.17.1 (**Approved** — §4.45 and §8 FR-131 Scenarios 8/9 read for this version) · SDD-TRUMOCRACY v2.13.0 (**Approved** — **scoped read**: §15 the FR-131 DES assignment, and §10.12.3 / DES-094 clause 9) §5.2, §10.13.10.1, §10.13.13, §15, §16 · BKLG-TRUMOCRACY v2.5.0 (**Approved** — **version-only advance, NOT re-read for this version**; see the v2.11.1 pin note) ·
````
REPLACE WITH:
````
Source:        SRS-TRUMOCRACY v2.17.1 (**Approved** — **scoped read**: §4.45 and §8 FR-131 Scenarios 8/9) · SDD-TRUMOCRACY v2.13.0 (**Approved** — **scoped read**: §15 the FR-131 DES assignment, and §10.12.3 / DES-094 clause 9; **sections this matrix cites:** §5.2, §10.13.10.1, §10.13.13, §15, §16) · BKLG-TRUMOCRACY v2.5.0 (**Approved** — **version-only advance, NOT re-read for this version, and the story census was NOT re-derived from it**: Doc 05 v2.5.0 carries **142** stories and this matrix traces **134** — `TD-RTM-04`, disclosed at §6; see the v2.11.1 and v2.11.2 pin notes) ·
````

### OP 3 — docs/08-traceability-matrix.md — Source, v2.11.1 pin note — ISS-01: record what the version-only BKLG advance did NOT buy, now that the reviewer has found the concrete instance
FIND:
````
               `US-####` chains in §3.1/§3.2 are **not** re-verified against v2.5.0 by it. **That re-read
               is still owed**, as plainly as before. **TC v2.7.0 → v2.8.1 (In Review)** — Doc 07 is this
````
REPLACE WITH:
````
               `US-####` chains in §3.1/§3.2 are **not** re-verified against v2.5.0 by it, **and neither was the story census** _(v2.11.2, ISS-01: that omission is exactly what the cycle-3 reviewer found — Doc 05 v2.5.0 carries **142** stories and §6 was still publishing the 134-story census derived from BKLG v2.3.0, with **US-0135..US-0142** appearing nowhere in this matrix. **An accurate disclaimer does not make an inaccurate number accurate**; §6 now states the 142 population, names the eight untraced ids and registers `TD-RTM-04`)_. **That re-read
               is still owed**, as plainly as before. **TC v2.7.0 → v2.8.1 (In Review)** — Doc 07 is this
````

### OP 4 — docs/08-traceability-matrix.md — insert the v2.11.2 changelog entry above the v2.11.1 entry
FIND:
````
Changelog:     v2.11.1 (2026-09-07) — **Rework cycle 3 of 5 against
````
REPLACE WITH:
````
Changelog:     v2.11.2 (2026-09-07) — **Rework cycle 4 of 5 against
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
               **"17 of 142"** — the §6 DoD lead-in and the §9 sign-off. **Historical changelog entries and
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
               **The sharpest instance, named because it is the one a reader will hit.** §3.2's **FR-050**
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
````

### OP 5 — docs/08-traceability-matrix.md — §6 coverage dashboard — ISS-01: restate the Stories row against the 142-story population this matrix pins, with the eight untraced ids named
FIND:
````
| Stories | 134 | 134 (all carry Gherkin AC) | 17 meet the Definition of Done | 117 |
````
REPLACE WITH:
````
| Stories | **142** | **134** (all 134 carry Gherkin AC; **8 untraced — see below**) | 17 meet the Definition of Done | **125** |
````

### OP 6 — docs/08-traceability-matrix.md — §6 — ISS-01: add the story-census disclosure directly beneath the dashboard, naming the eight untraced ids
FIND:
````
**Definition of Done check (CLAUDE.md).** A story is done only when its RTM row is complete.
````
REPLACE WITH:
````
**Story-census disclosure (v2.11.2, cycle-3 ISS-01) — the population is 142, this matrix traces 134, and the eight it does not trace are named here.** Doc 05 **v2.5.0** — the BKLG version this matrix pins — states **142 stories** (§12 census; "12 epics · 62 features · 142 stories"). This matrix carries rows for **134**. A mechanical id diff of every `US-####` in Doc 05 against every `US-####` in this file returns **eight that appear nowhere here**, together with the requirement each was minted for (Doc 05 v2.4.0 mint line): **US-0135** (FR-121, pilot jurisdiction sequence) · **US-0136** (FR-125) · **US-0137** (FR-133) · **US-0138** (FR-126) · **US-0139** (FR-127) · **US-0140** (FR-128) · **US-0141** (FR-129) · **US-0142** (FR-050). **They are disclosed, not traced.** Tracing them means deriving eight `BR → FR → DES → US → TC` chains from a backlog this matrix has not re-read end to end; that is the next backlog sync, registered as **`TD-RTM-04`** (§10). **No Must row can move on it** — every one of those FRs already has a row and is already OPEN (FR-121, FR-125..FR-129 are `G-TRACE + G-PHASE3`, FR-133 is `G-PHASE3`, and **FR-050 is a Should row**), so a missing `US` link cannot close a row blocked on a missing `DES` and a missing implementation. **Sharpest instance, stated so it is not rediscovered:** §3.2's **FR-050** row reads "**none**" for its story while Doc 05 has minted **US-0142** for it — the cell is left alone here on purpose, because re-deriving it belongs to the same re-read. **How the gap arose:** v2.11.1 advanced the BKLG pin v2.3.0 → v2.5.0 as a **version-only** advance and disclosed that the `US-####` chains were not re-verified — but left the census derived from the old backlog standing beside the new pin. **A pin advance is a change to a denominator**, and this disclosure exists so the denominator is never again quieter than the pin.

**Definition of Done check (CLAUDE.md).** A story is done only when its RTM row is complete.
````

### OP 7 — docs/08-traceability-matrix.md — §6 — ISS-01: restate the live Definition-of-Done figure against the 142-story population
FIND:
````
**The current figure is 17 of 134** — see the running per-drop checks below, which are authoritative;
````
REPLACE WITH:
````
**The current figure is 17 of 142** _(v2.11.2, ISS-01: was "17 of 134"; the numerator is unchanged and the denominator is now the population Doc 05 v2.5.0 actually carries — see the story-census disclosure above)_ — see the running per-drop checks below, which are authoritative;
````

### OP 8 — docs/08-traceability-matrix.md — §6 — ISS-01: annotate the per-drop DoD checks once, as a class, rather than rewriting twelve dated records
FIND:
````
**v2.10.0 DoD check (FR-131 clause (e) drop) — no story newly meets the bar; the count stays 17 of 134.** Checked story by story, and checked harder than usual because this drop removed a **false anonymity claim from the public landing page** — the kind of fix that invites a status it has not earned. **US-0134** (ballot seam and honest pre-action notices) is the story the work lands under — DECISIONS §5.5 mints no new `US` and places it here explicitly — and it is **NOT done**: CLAUDE.md makes a story done only when its RTM row completes, and FR-131 stays OPEN on six of its **eleven** obligations plus a clause (e) whose **Scenario 9 has no executing test at all (TC-3575, Blocked)**. Most sharply, the **DES-098 acknowledge-to-proceed control does not exist**, and DECISIONS §10 lists it as *unchanged by this record*. **US-0132** (PrivacyStatus) is **not done** — FR-124 stays OPEN and the drop did not touch `packages/ui`; note that **OPEN-27** now asks whether that component's own `anon` copy still passes clause (e), which is a question about US-0132's surface, not an answer for it. **US-0133** is **not done** — FR-122/FR-123 remain stub-gated at `IS_INSECURE_MOCK=true`, untouched. **US-0031 / US-0100** (proposals authorship) were already done via FR-024/FR-090 and are unaffected: the TC-3543 correction is a description fix on a passing case, not a status change. No other story cites `UT-0889`. **Stories meeting DoD: 17 of 134 — unchanged.**
````
REPLACE WITH:
````
**v2.10.0 DoD check (FR-131 clause (e) drop) — no story newly meets the bar; the count stays 17 of 134.** Checked story by story, and checked harder than usual because this drop removed a **false anonymity claim from the public landing page** — the kind of fix that invites a status it has not earned. **US-0134** (ballot seam and honest pre-action notices) is the story the work lands under — DECISIONS §5.5 mints no new `US` and places it here explicitly — and it is **NOT done**: CLAUDE.md makes a story done only when its RTM row completes, and FR-131 stays OPEN on six of its **eleven** obligations plus a clause (e) whose **Scenario 9 has no executing test at all (TC-3575, Blocked)**. Most sharply, the **DES-098 acknowledge-to-proceed control does not exist**, and DECISIONS §10 lists it as *unchanged by this record*. **US-0132** (PrivacyStatus) is **not done** — FR-124 stays OPEN and the drop did not touch `packages/ui`; note that **OPEN-27** now asks whether that component's own `anon` copy still passes clause (e), which is a question about US-0132's surface, not an answer for it. **US-0133** is **not done** — FR-122/FR-123 remain stub-gated at `IS_INSECURE_MOCK=true`, untouched. **US-0031 / US-0100** (proposals authorship) were already done via FR-024/FR-090 and are unaffected: the TC-3543 correction is a description fix on a passing case, not a status change. No other story cites `UT-0889`. **Stories meeting DoD: 17 of 134 — unchanged.**

**Denominator note on every check above (v2.11.2, cycle-3 ISS-01).** Each per-drop check, and each historical changelog entry, states its result as "**17 of 134**". **Every one was true of the population known when it was written** — this matrix pinned BKLG v2.3.0 until v2.11.1 — and none is edited, because rewriting a dated record to a denominator it never used destroys the trail this document exists to keep. **The current figure is 17 of 142**, per the story-census disclosure above. **The numerator has never moved:** 17 stories meet the Definition of Done, before and after this correction, and no per-drop check's finding changes. What changed is the honesty of the fraction, and it changed once, here.
````

### OP 9 — docs/08-traceability-matrix.md — §9 — tester sign-off row for v2.11.2
FIND:
````
| Tester (author, **R**) | Ji-woo Park | **Submitted — 122 open Must rows recorded; 0 Must rows CLOSED, 0 reclassified, 0 opened. Must 16/138 · stories 17/134 · both UNCHANGED.** | 2026-09-07 | **v2.11.0, Status In Review — rework cycle 2 of 5 against the v2.10.0 neutral technical review (FAIL 95%, 0C/0H/1M/2L).** All three issues taken; none carried. **Nothing in that report asked a status, a count or a verdict to move, and nothing moved: Must 138 · COMPLETE 16 · OPEN 122 · stories 17 of 134 — all unchanged; FR-131 stays OPEN (G-PHASE3).** The reviewer re-derived the FR-131 ruling independently — no acknowledge affordance anywhere in `apps/` or `packages/`, no FR-131 denylist anywhere in the repository, SCR-13/SCR-14 absent from the route inventory — and concurred; I have not disturbed it. **Fixed:** the pin-note sentence attributing a register to **Doc 04 v1.5.0** that only **v1.6.0** carries (**the Medium** — it was the stated justification for a pin advance, and the mint it appeared to ratify was sound throughout); the UT-0889 `it` count **5 → 6**, with the sixth minted as **TC-3576** at Doc 07 v2.8.0 and linked here at the **NFR-023** row, which **stays `G-UI` and Complete 0** because an enumerated two-string scan is not the scanner that row waits for; and the **CODE pin → v2.7.0 (Approved)**, which makes every source this matrix pins Approved for the first time since the cascade opened — and changes no ruling, because the row was never open on account of provisional sources. **Raised: `TD-RTM-03`** — this matrix's NFR-023 row cites neither TC-3538 nor TC-3561 while Doc 07 records both as verifying NFR-023; named and routed to me, not paid here. Test-case figures move only: 484 → **485** designed, 229 → **230** with passing evidence (136 inh. · **94** obs.), gaps **255** unchanged; suite **625/625** on run R-19, still against an uncommitted tree. _(v2.10.0 record, retained:)_ **v2.10.0, Status In Review — a requirement cascade, not a rework cycle.** The approver confirmed FR-131 **clause (e)** on 2026-09-06 and instructed this matrix to reopen and re-close through its loop. **It re-closes OPEN.** FR-131 now carries **eleven** obligations (ten + clause (e); the DES-096 seam half is still not one — the v2.9.0 correction stands). Doc 02 **v2.17.1** supplied the acceptance criteria this matrix traces to: **§8 Scenario 8** (grade-8 reader test; public-by-design rule; safe harbour; **reader test governs**) and **§8 Scenario 9** (every surface, every language, zero claims, banned words irrelevant). **Scenario 8 is guarded at eleven strings** — UT-0869/TC-3535, UT-0887/TC-3564..TC-3567 and the new **UT-0889 → TC-3570..TC-3574**, the first FR-131 cases at **Pass (obs.)**, earned by run **R-18** (624/624 plus a case-by-case re-run of the block). **Scenario 9 is BLOCKED at TC-3575** — it is a population duty and the only instrument specified for it, **Doc 04 §0.5 S5, is not built**; the existing UT-0857/UT-0868/UT-0884 scans are DES-085 jargon lists and would have caught neither string this drop fixed. **Clause (e) is therefore PARTIALLY EVIDENCED, not met**, and the six obligations that kept this row open are untouched — SCR-13/SCR-14 unbuilt, and the **DES-098 acknowledge-to-proceed control still does not exist**. **Must COMPLETE 16 of 138 · open Must 122 · stories 17 of 134 — none moves. US-0134 does not meet the Definition of Done.** Test-case figures move only: 478 → **484** designed, 224 → **229** with passing evidence (136 inh. · **93** obs.), gaps 254 → **255**. The v2.9.0 Low (ISS-C2-01, stale pins) is **DISCHARGED** — SRS, CODE, MTP and TC advance on deltas actually read; SDD and BKLG deliberately do not. **Two items handed to the verifier rather than absorbed: OPEN-27** (the S5 `anon`-badge carve-out, reasoned against a voting-scoped FR-131 that no longer exists — Doc 03's copy call, routed) and **ENROL-COPY (j)** (expressly outside clause (e), unruled by the product-owner). _(v2.9.0 record, retained:)_ **v2.9.0, Status In Review — rework cycle 2 against the v2.8.0 neutral technical review (FAIL 85%, 0C/2H/3M/3L).** Nothing in that report asked a status, a count or a verdict to move, and nothing moved: **Must 138 · COMPLETE 16 · OPEN 122 · stories 17/134, all unchanged; FR-131 stays OPEN.** Fixed: four rows whose v2.8.0 additions were written as extra cells beyond their table header — invisible when rendered, including the whole FR-131 ruling — folded into their final cells and closed with pipes; **`DES-098` recorded against FR-131 for the first time**, with DES-094 for the status-badge reach and SCR-13/SCR-14 marked UNBUILT instead of "none"; the FR-131 summary restated from Doc 02 §4.45 and its obligation count corrected from eleven to **ten** plus the DES-096 seam half; the split Gate-2 sentence restored and the addendum moved below the verdict; §10’s `TD-RTM-02` entry updated to the figures §6 already attributed to it; the FR-124 "approved design element" claim retracted to current corrected text (Doc 03 v2.13.0, **In Review**); NFR-013’s "no locale files" reason corrected (`en.ts`/`ar.ts` exist — the G-UI verdict stands); gap-log entry 117’s sentence break and this row’s doubled italic close repaired. Suite re-executed at rework time: **619/619, exit 0**, identical to R-17. _(v2.8.0 record, retained:)_ **v2.8.0, Status In Review. FR-131 honesty-drop traceability (Doc 06 v2.5.1 Approved; Doc 07 v2.5.0 sync; commit `0a5c542`, PR #19).** Suite re-run by the tester: **619/619 green, exit 0** (run R-17). Evidence extended on four rows — FR-131 (+TC-3564..TC-3569), FR-124 (+TC-3568), NFR-011 (citation corrected), RISK-02 (+TC-3564..TC-3567) — and **not one status moved**. **The FR-131 Must row was ruled clause by clause and does NOT close: six of its ten obligations (Doc 02 §4.45) are unmet or unevidenced, and the two that matter most are unmet because the thing itself does not exist — there is no acknowledge-to-proceed control (Doc 06 §7 item 26(d)) and SCR-13/SCR-14 are unbuilt (Doc 06 §7 #21).** 16 does not become 17. **US-0134 does not meet DoD.** The drop is good work and closes FR-131’s banned-words clause properly; recording that as a row closure would teach every downstream reader that the hard clauses of a requirement are optional. Two accepted Lows paid in passing (L-13 §6 `TD-RTM-02` pointer; L-2 §4 blockquote moved out of the table); the other twelve, including L-3, sit in lines this version does not touch and remain accepted-and-carried. `TD-RTM-01` (duplicate `UT-0841`..`UT-0848`) stays OPEN — engineer scope. `TD-RTM-02` stays OPEN and is widened by 6 on both sides. _(Prior v2.5.0: **v2.5.0, Status In Review. Proposals & debate drop (Doc 06 v2.4.1; Doc 03 v2.9.1 DES-103..DES-106; TC v2.4.0 sync).** Five chain gaps paid; **two** rows close on rule 4 and three do not: FR-080 (informed-consent disclosure states permanence nowhere, and no confirm step exists; DES-103 binds no SCR though FR-080 has a UI obligation), FR-091 (`schedule()` unwired — the "per published timelines" clause), FR-092 (four of seven enumerated trail elements unrecorded + third-party reconstruction unbuilt). FR-024 evidence extended, status unchanged. FR-122/FR-123 evidence extended, both stay G-PHASE3. Suite 542 → **608** green. Must 15/123; stories 16/134.)_ _(Prior v2.4.1: **v2.4.0, Status In Review. DES paydown traceability (Doc 03 v2.8.1 Approved; TC v2.3.1 sync).** FR-130 **CLOSES** on DES-102 + SCR-09/SCR-11 — all four rules hold, every clause separately tested, v1 tamper-evidence residual disclosed in the row and the row flagged for revisit when on-chain membership goes live. FR-077 does **NOT** close despite DES-101: rule 4 fails because its amendment-refusal clause has no mechanism at either tier (`Party.amendCharter` never sees the charter text) — reclassified G-NOMECH and routed to the architect. DES-097(b) closes nothing by design. Must 13/125; stories 14/134 (US-0131 newly done; US-0087 stays Partial). _(Prior v2.3.0: **v2.3.1, Status In Review (cycle-1 rework of v2.3.0). Join/membership drop traceability (Doc 06 v2.3.2 Approved, cycle-3 PASS 97%, since v2.3.3 Approved; TC v2.3.0 sync).** Evidence extended on 7 forward-trace rows with TS-MEMBERSHIP (TC-3517..TC-3540, 24 cases): FR-020 and FR-022 (already COMPLETE — strengthened, incl. the *structural* no-verifier guarantee); FR-064, FR-122, FR-123, FR-130, FR-131 (all **stay OPEN**); FR-013 Should row evidence strengthened with the two DES-097 seam guards. **FR-021 deliberately NOT extended** — this drop produces no vote-weight or tally evidence, and claiming it would be fabricated coverage. **FR-064's semantics blocker was RESOLVED after v2.3.0 was authored** by the `FR-064-SEMANTICS` ruling (option (a) EXPLICIT-LEAVE; Rathish, 2026-08-29; Doc 02 v2.15.0 Approved; Doc 06 v2.3.3 Approved) — gap-log entry 55 now records a **SPLIT** (semantics resolved / DES-065 open), and the row stays OPEN on DES-065 alone. Summary counts unchanged (12/126 Must; 16/145 total); **no story newly meets DoD** (13/134, checked story by story). Dashboard TC 425→449; passing evidence 171→195 (107 inh. + 88 obs.).)_ _(Prior v2.2.4:_ Party-creation drop traceability (Doc 06 v2.2.0 Approved; TC v2.2.2 sync): FR-010/011/018/020/077/130 forward-trace rows updated with TC-3489..TC-3516 and UT evidence (all pass inh.); FR-012/013 Should rows updated — FR-013 **CLOSED** — cooldown tested; US-0021 met DoD; dashboard TC 397→425.)_ |
````
REPLACE WITH:
````
| Tester (author, **R**) | Ji-woo Park | **Submitted — 122 open Must rows recorded; 0 Must rows CLOSED, 0 reclassified, 0 opened. Must 16/138 · stories 17/134 · both UNCHANGED.** | 2026-09-07 | **v2.11.2, Status In Review — rework cycle 4 of 5 against the v2.11.1 neutral technical review (FAIL 96%, 0C/0H/1M/1L). Cycle 5 is the cap.** **The Medium was mine and it was a real reporting defect:** v2.11.1 advanced the BKLG pin to v2.5.0 as a **version-only** advance, correctly disclosing that the `US-####` chains were not re-verified — and left §6 publishing a **134**-story census against a **142**-story backlog, so "134 traced of 134" read as a complete population. **US-0135..US-0142 appear nowhere in this matrix**; I re-derived that independently by id diff before accepting it. **An accurate disclaimer does not make an inaccurate number accurate, and a pin advance is a change to a denominator.** **Taken by the disclose-and-register route: the population is restated at 142, the Stories row reads 142 \| 134 \| 17 \| 125, the eight ids are named with the FR each was minted for, and `TD-RTM-04` registers the owed re-read. They are disclosed, NOT traced** — deriving eight chains from a backlog I have not re-read would repeat the original error in the opposite direction. **NOTHING NORMATIVE MOVES, and it is verified rather than assumed: Must 138 · COMPLETE 16 · OPEN 122 · G-PHASE3 47 · FR-131 OPEN.** All eight map to FR rows that already exist and are already OPEN — FR-121/125/126/127/128/129 `G-TRACE + G-PHASE3`, FR-133 `G-PHASE3`, **FR-050 a Should row** — and a missing `US` link cannot close a row blocked on a missing `DES`. **Stories meeting the Definition of Done: 17 of 142** — numerator unchanged. ISS-02 (Low) fixed: the SRS and SDD pins no longer carry a scoped-read annotation and an unlabelled legacy section list side by side. _(v2.11.1 was a header-only cycle-3 patch and never reached this row; its record is the changelog entry. v2.11.0 record, retained:)_ **v2.11.0, Status In Review — rework cycle 2 of 5 against the v2.10.0 neutral technical review (FAIL 95%, 0C/0H/1M/2L).** All three issues taken; none carried. **Nothing in that report asked a status, a count or a verdict to move, and nothing moved: Must 138 · COMPLETE 16 · OPEN 122 · stories 17 of 134 — all unchanged; FR-131 stays OPEN (G-PHASE3).** The reviewer re-derived the FR-131 ruling independently — no acknowledge affordance anywhere in `apps/` or `packages/`, no FR-131 denylist anywhere in the repository, SCR-13/SCR-14 absent from the route inventory — and concurred; I have not disturbed it. **Fixed:** the pin-note sentence attributing a register to **Doc 04 v1.5.0** that only **v1.6.0** carries (**the Medium** — it was the stated justification for a pin advance, and the mint it appeared to ratify was sound throughout); the UT-0889 `it` count **5 → 6**, with the sixth minted as **TC-3576** at Doc 07 v2.8.0 and linked here at the **NFR-023** row, which **stays `G-UI` and Complete 0** because an enumerated two-string scan is not the scanner that row waits for; and the **CODE pin → v2.7.0 (Approved)**, which makes every source this matrix pins Approved for the first time since the cascade opened — and changes no ruling, because the row was never open on account of provisional sources. **Raised: `TD-RTM-03`** — this matrix's NFR-023 row cites neither TC-3538 nor TC-3561 while Doc 07 records both as verifying NFR-023; named and routed to me, not paid here. Test-case figures move only: 484 → **485** designed, 229 → **230** with passing evidence (136 inh. · **94** obs.), gaps **255** unchanged; suite **625/625** on run R-19, still against an uncommitted tree. _(v2.10.0 record, retained:)_ **v2.10.0, Status In Review — a requirement cascade, not a rework cycle.** The approver confirmed FR-131 **clause (e)** on 2026-09-06 and instructed this matrix to reopen and re-close through its loop. **It re-closes OPEN.** FR-131 now carries **eleven** obligations (ten + clause (e); the DES-096 seam half is still not one — the v2.9.0 correction stands). Doc 02 **v2.17.1** supplied the acceptance criteria this matrix traces to: **§8 Scenario 8** (grade-8 reader test; public-by-design rule; safe harbour; **reader test governs**) and **§8 Scenario 9** (every surface, every language, zero claims, banned words irrelevant). **Scenario 8 is guarded at eleven strings** — UT-0869/TC-3535, UT-0887/TC-3564..TC-3567 and the new **UT-0889 → TC-3570..TC-3574**, the first FR-131 cases at **Pass (obs.)**, earned by run **R-18** (624/624 plus a case-by-case re-run of the block). **Scenario 9 is BLOCKED at TC-3575** — it is a population duty and the only instrument specified for it, **Doc 04 §0.5 S5, is not built**; the existing UT-0857/UT-0868/UT-0884 scans are DES-085 jargon lists and would have caught neither string this drop fixed. **Clause (e) is therefore PARTIALLY EVIDENCED, not met**, and the six obligations that kept this row open are untouched — SCR-13/SCR-14 unbuilt, and the **DES-098 acknowledge-to-proceed control still does not exist**. **Must COMPLETE 16 of 138 · open Must 122 · stories 17 of 134 — none moves. US-0134 does not meet the Definition of Done.** Test-case figures move only: 478 → **484** designed, 224 → **229** with passing evidence (136 inh. · **93** obs.), gaps 254 → **255**. The v2.9.0 Low (ISS-C2-01, stale pins) is **DISCHARGED** — SRS, CODE, MTP and TC advance on deltas actually read; SDD and BKLG deliberately do not. **Two items handed to the verifier rather than absorbed: OPEN-27** (the S5 `anon`-badge carve-out, reasoned against a voting-scoped FR-131 that no longer exists — Doc 03's copy call, routed) and **ENROL-COPY (j)** (expressly outside clause (e), unruled by the product-owner). _(v2.9.0 record, retained:)_ **v2.9.0, Status In Review — rework cycle 2 against the v2.8.0 neutral technical review (FAIL 85%, 0C/2H/3M/3L).** Nothing in that report asked a status, a count or a verdict to move, and nothing moved: **Must 138 · COMPLETE 16 · OPEN 122 · stories 17/134, all unchanged; FR-131 stays OPEN.** Fixed: four rows whose v2.8.0 additions were written as extra cells beyond their table header — invisible when rendered, including the whole FR-131 ruling — folded into their final cells and closed with pipes; **`DES-098` recorded against FR-131 for the first time**, with DES-094 for the status-badge reach and SCR-13/SCR-14 marked UNBUILT instead of "none"; the FR-131 summary restated from Doc 02 §4.45 and its obligation count corrected from eleven to **ten** plus the DES-096 seam half; the split Gate-2 sentence restored and the addendum moved below the verdict; §10’s `TD-RTM-02` entry updated to the figures §6 already attributed to it; the FR-124 "approved design element" claim retracted to current corrected text (Doc 03 v2.13.0, **In Review**); NFR-013’s "no locale files" reason corrected (`en.ts`/`ar.ts` exist — the G-UI verdict stands); gap-log entry 117’s sentence break and this row’s doubled italic close repaired. Suite re-executed at rework time: **619/619, exit 0**, identical to R-17. _(v2.8.0 record, retained:)_ **v2.8.0, Status In Review. FR-131 honesty-drop traceability (Doc 06 v2.5.1 Approved; Doc 07 v2.5.0 sync; commit `0a5c542`, PR #19).** Suite re-run by the tester: **619/619 green, exit 0** (run R-17). Evidence extended on four rows — FR-131 (+TC-3564..TC-3569), FR-124 (+TC-3568), NFR-011 (citation corrected), RISK-02 (+TC-3564..TC-3567) — and **not one status moved**. **The FR-131 Must row was ruled clause by clause and does NOT close: six of its ten obligations (Doc 02 §4.45) are unmet or unevidenced, and the two that matter most are unmet because the thing itself does not exist — there is no acknowledge-to-proceed control (Doc 06 §7 item 26(d)) and SCR-13/SCR-14 are unbuilt (Doc 06 §7 #21).** 16 does not become 17. **US-0134 does not meet DoD.** The drop is good work and closes FR-131’s banned-words clause properly; recording that as a row closure would teach every downstream reader that the hard clauses of a requirement are optional. Two accepted Lows paid in passing (L-13 §6 `TD-RTM-02` pointer; L-2 §4 blockquote moved out of the table); the other twelve, including L-3, sit in lines this version does not touch and remain accepted-and-carried. `TD-RTM-01` (duplicate `UT-0841`..`UT-0848`) stays OPEN — engineer scope. `TD-RTM-02` stays OPEN and is widened by 6 on both sides. _(Prior v2.5.0: **v2.5.0, Status In Review. Proposals & debate drop (Doc 06 v2.4.1; Doc 03 v2.9.1 DES-103..DES-106; TC v2.4.0 sync).** Five chain gaps paid; **two** rows close on rule 4 and three do not: FR-080 (informed-consent disclosure states permanence nowhere, and no confirm step exists; DES-103 binds no SCR though FR-080 has a UI obligation), FR-091 (`schedule()` unwired — the "per published timelines" clause), FR-092 (four of seven enumerated trail elements unrecorded + third-party reconstruction unbuilt). FR-024 evidence extended, status unchanged. FR-122/FR-123 evidence extended, both stay G-PHASE3. Suite 542 → **608** green. Must 15/123; stories 16/134.)_ _(Prior v2.4.1: **v2.4.0, Status In Review. DES paydown traceability (Doc 03 v2.8.1 Approved; TC v2.3.1 sync).** FR-130 **CLOSES** on DES-102 + SCR-09/SCR-11 — all four rules hold, every clause separately tested, v1 tamper-evidence residual disclosed in the row and the row flagged for revisit when on-chain membership goes live. FR-077 does **NOT** close despite DES-101: rule 4 fails because its amendment-refusal clause has no mechanism at either tier (`Party.amendCharter` never sees the charter text) — reclassified G-NOMECH and routed to the architect. DES-097(b) closes nothing by design. Must 13/125; stories 14/134 (US-0131 newly done; US-0087 stays Partial). _(Prior v2.3.0: **v2.3.1, Status In Review (cycle-1 rework of v2.3.0). Join/membership drop traceability (Doc 06 v2.3.2 Approved, cycle-3 PASS 97%, since v2.3.3 Approved; TC v2.3.0 sync).** Evidence extended on 7 forward-trace rows with TS-MEMBERSHIP (TC-3517..TC-3540, 24 cases): FR-020 and FR-022 (already COMPLETE — strengthened, incl. the *structural* no-verifier guarantee); FR-064, FR-122, FR-123, FR-130, FR-131 (all **stay OPEN**); FR-013 Should row evidence strengthened with the two DES-097 seam guards. **FR-021 deliberately NOT extended** — this drop produces no vote-weight or tally evidence, and claiming it would be fabricated coverage. **FR-064's semantics blocker was RESOLVED after v2.3.0 was authored** by the `FR-064-SEMANTICS` ruling (option (a) EXPLICIT-LEAVE; Rathish, 2026-08-29; Doc 02 v2.15.0 Approved; Doc 06 v2.3.3 Approved) — gap-log entry 55 now records a **SPLIT** (semantics resolved / DES-065 open), and the row stays OPEN on DES-065 alone. Summary counts unchanged (12/126 Must; 16/145 total); **no story newly meets DoD** (13/134, checked story by story). Dashboard TC 425→449; passing evidence 171→195 (107 inh. + 88 obs.).)_ _(Prior v2.2.4:_ Party-creation drop traceability (Doc 06 v2.2.0 Approved; TC v2.2.2 sync): FR-010/011/018/020/077/130 forward-trace rows updated with TC-3489..TC-3516 and UT evidence (all pass inh.); FR-012/013 Should rows updated — FR-013 **CLOSED** — cooldown tested; US-0021 met DoD; dashboard TC 397→425.)_ |
````

### OP 10 — docs/08-traceability-matrix.md — §10 — raise TD-RTM-04, the story-census debt this version discloses
FIND:
````
| **TD-RTM-03** _(new, v2.11.0)_ | **Doc 07 and Doc 08 do not agree on which cases verify `NFR-023`.** This matrix's §3.2 NFR-023 row cited **TC-2331, TC-2332** and read "**none**" for evidence. Doc 07 has recorded **TC-3538** (UT-0868 — jargon filter over every new membership string, `US-0133 · NFR-023 · DES-085`, Pass (inh.)) since **v2.3.0**, and **TC-3561** (UT-0884 — the proposals surface carries no banned vocabulary, `US-0102 · NFR-023 · DES-085`, Pass (inh.)) since **v2.4.0**. Neither has ever appeared in this row. Found while adding **TC-3576** for the same requirement at v2.11.0 — i.e. found by doing the link properly once and noticing the two that were never done. | **No status, count or gap classification changes, and NFR-023 is OPEN either way** — the row is `G-UI` because no jargon **scanner** and no readability check exist, and three enumerated per-drop scans do not make one. The defect is in the **evidence trail**: a Gate-2 verifier reading "none" against NFR-023 would conclude nothing tests it, when three cases partially do. It is the mirror image of Doc 07 v2.6.0 ISS-02, where a Doc 07 cell claimed an NFR-013 link this matrix did not carry — same class, opposite direction. **Not repaired in passing:** adding the two rows means re-deriving two other drops' evidence and re-checking whether either bears on the `G-UI` classification, which is a recount, not a side-effect of a cycle-2 rework. | Ji-woo Park (tester) | **OPEN** — raised 2026-09-07 |
````
REPLACE WITH:
````
| **TD-RTM-04** _(new, v2.11.2)_ | **The story census is derived from a backlog version this matrix no longer pins.** The `Source:` block pins **BKLG v2.5.0**, which carries **142** stories; this matrix carries rows for **134**. **US-0135** (FR-121) · **US-0136** (FR-125) · **US-0137** (FR-133) · **US-0138** (FR-126) · **US-0139** (FR-127) · **US-0140** (FR-128) · **US-0141** (FR-129) · **US-0142** (FR-050) appear **nowhere** in this file — verified by id diff, not inferred. Raised by the cycle-3 reviewer against v2.11.1, whose **version-only** BKLG pin advance changed the population without re-deriving the counts that rest on it. | **Disclosed, so no figure now over-reads; nothing normative moves.** §6 states the **142** population, the Stories row reads **142 \| 134 \| 17 \| 125**, and the eight are named there and here. **No Must row can move on it:** all eight map to FR rows that already exist and are already OPEN (FR-121/125/126/127/128/129 `G-TRACE + G-PHASE3`; FR-133 `G-PHASE3`; **FR-050 is a Should row**), and a missing `US` link cannot close a row blocked on a missing `DES` and a missing implementation. **The live residue is one concrete cell:** §3.2's **FR-050** row reads "**none**" for its story while **US-0142** exists — deliberately left, because re-deriving it belongs to this debt, not to a cycle-4 rework. **Closes when** the next backlog sync gives the eight their rows, re-derives the FR-050 story cell, and re-checks §6's Stories row against a re-read Doc 05. **Does NOT close** by editing the eight rows in isolation. | Ji-woo Park (tester) | **OPEN** — raised 2026-09-07 |
| **TD-RTM-03** _(new, v2.11.0)_ | **Doc 07 and Doc 08 do not agree on which cases verify `NFR-023`.** This matrix's §3.2 NFR-023 row cited **TC-2331, TC-2332** and read "**none**" for evidence. Doc 07 has recorded **TC-3538** (UT-0868 — jargon filter over every new membership string, `US-0133 · NFR-023 · DES-085`, Pass (inh.)) since **v2.3.0**, and **TC-3561** (UT-0884 — the proposals surface carries no banned vocabulary, `US-0102 · NFR-023 · DES-085`, Pass (inh.)) since **v2.4.0**. Neither has ever appeared in this row. Found while adding **TC-3576** for the same requirement at v2.11.0 — i.e. found by doing the link properly once and noticing the two that were never done. | **No status, count or gap classification changes, and NFR-023 is OPEN either way** — the row is `G-UI` because no jargon **scanner** and no readability check exist, and three enumerated per-drop scans do not make one. The defect is in the **evidence trail**: a Gate-2 verifier reading "none" against NFR-023 would conclude nothing tests it, when three cases partially do. It is the mirror image of Doc 07 v2.6.0 ISS-02, where a Doc 07 cell claimed an NFR-013 link this matrix did not carry — same class, opposite direction. **Not repaired in passing:** adding the two rows means re-deriving two other drops' evidence and re-checking whether either bears on the `G-UI` classification, which is a recount, not a side-effect of a cycle-2 rework. | Ji-woo Park (tester) | **OPEN** — raised 2026-09-07 |
````

---

## Verification (run by the tester before emitting)

| OP | File | FIND lines | Occurrences in file |
|---|---|---|---|
| 1 | docs/08-traceability-matrix.md | 2 | 1 |
| 2 | docs/08-traceability-matrix.md | 1 | 1 |
| 3 | docs/08-traceability-matrix.md | 2 | 1 |
| 4 | docs/08-traceability-matrix.md | 1 | 1 |
| 5 | docs/08-traceability-matrix.md | 1 | 1 |
| 6 | docs/08-traceability-matrix.md | 1 | 1 |
| 7 | docs/08-traceability-matrix.md | 1 | 1 |
| 8 | docs/08-traceability-matrix.md | 1 | 1 |
| 9 | docs/08-traceability-matrix.md | 1 | 1 |
| 10 | docs/08-traceability-matrix.md | 1 | 1 |

Every FIND was matched against the on-disk file with line endings normalised to LF and occurs **exactly once**. Every non-blank FIND line reappears verbatim in its REPLACE except where an OP header names the change (OP 1 re-labels the `Status:` gutter as a retained-record marker; OP 5 replaces the Stories row by design).
