# Document Review Report — Doc 07 Test Cases & Suites v2.8.0 (technical, cycle 2)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. Cycle 2 of 5 against
> `artifacts/reviews/07-test-cases-suites-v2.7.0-technical-cycle1.md` (FAIL 94%, 0C/0H/2M/3L).

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.8.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 07)
Score: 95%
Critical: 0
High: 0
Medium: 1
Low: 3
Cycle: 2 of 5
Verdict: FAIL
```

Review date: 2026-09-07 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

**All five cycle-1 issues are genuinely closed, and I verified every one at source rather than
against the changelog.** Both Mediums are fixed in the strongest available form. **ISS-02**:
TC-3573's expected result now reads exactly what UT-0889 asserts — `ar.home.steps[1].body` does not
contain "اسمك سريًا", `ar.home.promises[0]` does not contain "لا نعرف" — and the row adds a
**third stated scope limit** naming the residual risk in terms ("an Arabic string containing سري in
some other construction would ship and this case would **not** catch it"). It also verifies the
engineering rationale, which I checked independently: "تسري" really does already ship at
`ar.ts` `parties.leaveHelp` (line 123), so the wide ban would have failed the build on honest copy.
**ISS-01**: the register sentence is re-attributed to **Doc 04 v1.6.0 (Approved)** with v1.5.0's
actual text quoted beside it — I confirmed v1.6.0 §14 records TC-3564–TC-3567 in `TS-ADV-01…16`,
TC-3568 in `TS-SCAFFOLD`, TC-3569 in `TS-ABSENCE` and narrows the band to TC-3570–TC-3699.
**ISS-03**: TC-3576 is **minted** for the sixth `it` rather than recorded as unmapped — the better
of the two fixes I offered — and the sweep says plainly that the orphan count "between v2.7.0 and
this version was **1**". **ISS-04**: CODE pin → v2.7.0 (Approved), with the TC-3568 rider executed
(conditional discharge → unconditional, the conditional wording retained). **ISS-05**: §0.2 gains
the R-18 and R-19 rows carrying §9's qualifications.

**The new work is sound.** TC-3576 matches the jargon `it` exactly — eleven words, both `en`
strings, case-insensitive — and its row states the limit that matters: it is an **enumerated** scan
over two strings, not the scanner NFR-023 has waited for since v1.1.0, so it **closes nothing**.
That is the same instrument-versus-enumeration distinction TC-3575 draws for Scenario 9, applied
consistently against the document's own interest. I re-ran everything: `npm test` **625 / 625, 0
failed, exit 0** (contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 101), and the
block case by case — **6 passed, 20 skipped (26)**, every `it` green individually — so R-19's
figure and TC-3576's Pass (obs.) are both corroborated.

**The version nevertheless FAILS cycle 2 on one Medium, and it is in the pin block.** The v2.8.0
pin note announces "**MTP v1.0.1 → v1.6.0 (Approved)** — a **scoped** advance", but the `Source:`
block still reads **`MTP-TRUMOCRACY v1.0.1`**. The note describes an edit that was never made, so
the document states two different answers to "which Doc 04 does this rest on?", five minor versions
apart — in the one instrument this document maintains precisely so a reader knows how much weight a
citation carries, and on the pin that ISS-01's own discharge narrative leans on.

Everything mechanical is clean: **zero transcription residue** across the 18 Doc 07 OP boundaries,
**69 tables with zero cell-count mismatches** and zero missing trailing pipes, **476 unique TC row
anchors with zero duplicates** (475 → 476, exactly the +1 the version claims). Counts re-derived
independently and all reconcile: §2 row-wise **478 / 245 / 233** across 28 rows with the identity
holding on every row and matching the Total; §10's **94 + 136 + 15 = 245**; the overlap paragraph
internally consistent at 199 + 176 + 48 + 12 − 4 = **431**.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`95%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — the score clears the bar; the Medium does not. PASS requires both.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Clause (e) coverage is unchanged and correct; the new TC-3576 extends coverage to `NFR-023 · DES-085` for the two corrected strings **without** claiming to close that requirement, and is explicitly kept out of the FR-131 chain because a jargon scan governs comprehensibility, not honesty of claims. |
| T2 Soundness | 20 | 98 | 19.6 | Every cycle-1 fix took the stronger option: TC-3576 minted rather than left unmapped; the orphan count admitted to have been 1 in between; the TC-3568 conditional wording retained while the condition is recorded as satisfied. The instrument-versus-enumeration limit on TC-3576 is the same reasoning as TC-3575, applied consistently. |
| T3 Traceability & IDs | 20 | 90 | 18.0 | TC-3576 continues from TC-3575, sits inside Doc 04 v1.6.0's TC-3570–TC-3699 band, and maps one-to-one to a real `it` I read. 476 anchors, zero duplicates. Docked for **ISS-01** (the pin the note says advanced did not) and **ISS-03** (the only live free-band statement is now stale by one id). |
| T4 Security & failure modes | 15 | 97 | 14.55 | TC-3575 stays Blocked with its instrument-absent reasoning intact; TC-3573 now names the residual regression risk it does **not** cover; TC-3576 refuses to be read as closing NFR-023. The document keeps describing what it cannot catch, which is the property that makes it usable at Gate 2. |
| T5 Completeness & testability | 15 | 97 | 14.55 | Every figure re-derived from the file and every one reconciles (478 / 245 / 233 with per-row identity; 94 + 136 + 15 = 245; overlap 431). §0.2 now carries R-18 and R-19 with their qualifications rather than bare green numbers. |
| T6 Convention compliance | 10 | 86 | 8.6 | Correct minor bump (2.7.0 → **2.8.0**), `Status: In Review`, cycle 2 of 5 named, prior records retained rather than overwritten, named owners throughout. Docked for **ISS-01**, **ISS-02** (a pin-status sentence a reader can take two ways) and **ISS-04** (`Last updated` a day behind the version's own date). |
| **Total** | **100** | — | **94.9 → 95%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T3 / T6 | `Source:` block line **75** versus the v2.8.0 pin note, line **128** | The pin note states "**MTP v1.0.1 → v1.6.0 (Approved)** — a **scoped** advance, and the word is meant: §0.5 S4/S5 and §14 were read". The `Source:` block still reads "**MTP-TRUMOCRACY v1.0.1** (docs/04-test-strategy-master-plan.md)" — the advance was announced but never applied, so the document answers "which Doc 04 does this rest on?" two ways, **five minor versions apart**. It matters more than a typo for three reasons: the pin block is this document's stated instrument for telling a reader how much weight a citation carries ("advancing a pin asserts the delta was read"); the ISS-01 discharge rests on Doc 04 **v1.6.0** carrying the register sentence, and a reader checking the pin is sent to v1.0.1, which does not; and the note's own "from" version (v1.0.1) shows the author knew where the pin stood. **Direction is the harmful one — it claims an advance that did not happen.** | Apply the advance in the `Source:` block — **MTP-TRUMOCRACY v1.6.0 (Approved — §0.5 S4/S5 and §14 read; scoped)** — so the block and the note agree, keeping the "scoped" qualifier and the standing full pin-sync debt exactly as the note states them. No other pin moves and nothing else changes. |
| ISS-02 | Low | T6 | v2.8.0 pin note, line **135** — "**Every source this document now leans on is Approved**" | True on the intended reading (every *source document* has reached an Approved version — SRS v2.17.1, SDD v2.13.0, BKLG v2.5.0, CODE v2.7.0, MTP v1.6.0, Doc 09 v1.9.0, all of which I verified against live headers), but it sits two lines below a `Source:` block that pins **SRS v2.16.0, SDD v2.10.0, BKLG v2.3.0 and MTP v1.0.1** — of which BKLG v2.3.0 is In Review — and one line below "SRS, SDD and BKLG do not advance". A reader who takes "leans on" to mean "pins" gets the opposite of the truth. **Low, not Medium:** the sentence is immediately preceded by the correct list of current versions and by the explicit statement that three pins do not advance, so the document supplies its own correction. (Doc 08 v2.11.0 carries the same sentence with "**pins**" instead of "leans on", where it is not recoverable — raised there as a Medium.) | Say which claim is being made: "every source document has now reached an Approved version, although this block still pins earlier ones — the full pin-sync is owed". |
| ISS-03 | Low | T3 | v2.7.0 changelog entry, line **229** — "the band still holds **TC-3576**–TC-3699"; the v2.8.0 entry (lines 183–186) mints TC-3576 without restating the band | That sentence was correct for v2.7.0 and remains a legitimate dated record, but it is now the **only live statement of the free band** in the document, and the id it names as free has since been minted. The v2.5.0 and v2.7.0 entries both closed by stating what the band still held; v2.8.0 does not, so a reader minting the next id from the newest available statement would reuse **TC-3576**. | Add one clause to the v2.8.0 entry: TC-3576 is minted from the TC-3570–TC-3699 band (Doc 04 v1.6.0 §14) and the band now holds **TC-3577–TC-3699**. Leave the v2.7.0 sentence untouched as the dated record it is. |
| ISS-04 | Low | T6 | Header, line **139** — `Last updated:  2026-09-06` | This version is dated **2026-09-07** everywhere else: the v2.8.0 changelog entry, run R-19, the §0.2 and §9 rows and TC-3576's status all carry 2026-09-07. ISO-8601 dating is a house convention and this is the one field a reader uses to tell whether a document predates a run it cites. | Set `Last updated: 2026-09-07`. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Cycle-1 issues — closure verified at source, one by one

| Cycle-1 id | Severity | Status | How I verified it |
|---|---|---|---|
| ISS-01 | Medium | **CLOSED** | The changelog sentence now reads "Doc 04 **v1.6.0 (Approved)** §14 records TC-3564..TC-3569 as minted and reserves TC-3570–TC-3699", with a parenthetical quoting what v1.5.0 actually said ("reserved TC-3564–TC-3699, none minted"). I read Doc 04 v1.6.0 §14 (line 2399) and §0.4 (line 702) myself: both say exactly what is now attributed to them. The mint is unchanged, as required. |
| ISS-02 | Medium | **CLOSED, and better than the fix I asked for** | TC-3573's cell now asserts only the exact retired phrase and "لا نعرف", matching `apps/web/test/safety-surfaces.test.tsx` assertion for assertion. A **third scope limit** states the narrowing, its rationale and — decisively — the residual gap it leaves. I independently confirmed the rationale: "تسري" ships today at `ar.ts` line 123 (`parties.leaveHelp`), so a bare "سري" ban would fail the build on honest copy. Status correctly unchanged; I re-observed the `it` green. |
| ISS-03 | Low | **CLOSED** | §8's automation row and orphan sweep both read **6** `it`s, map `UT-0889` → TC-3570..TC-3574 + **TC-3576**, and state that the orphan count "between v2.7.0 and this version" was **1**. I counted the `it`s in the file: six. |
| ISS-04 | Low | **CLOSED** | `Source:` CODE pin now reads v2.7.0 (**Approved** — PASS 96%, 0C/0H/0M/3L), matching Doc 06's live header. The rider was executed: TC-3568's discharge is unconditional, the conditional wording retained as the record of why the caveat existed, citing the Doc 03 v2.13.0 cycle-2 PASS. |
| ISS-05 | Low | **CLOSED** | §0.2 now carries a 2026-09-06 R-18 row and a 2026-09-07 R-19 row, each with the uncommitted-tree qualification rather than a bare green number. |

### Independent verification performed for this review

| Check | Method | Result |
|---|---|---|
| Suite green | `npm test` from the repo root | **625 / 625, 0 failed, exit 0** — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web **101**, matching R-19 package for package |
| TC-3576 against its `it` | read the jargon `it` in `apps/web/test/safety-surfaces.test.tsx` | Eleven words (wallet, seed phrase, private key, gas, token, mint, on-chain, blockchain, crypto, nullifier, hash), both `en` strings, `.toLowerCase()` on both sides — TC-3576's expected result matches exactly, including "case-insensitively" |
| UT-0889 block | `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web` | **6 passed, 20 skipped (26)** — every `it` green individually; TC-3573's re-cut assertion and TC-3576's Pass (obs.) both corroborated |
| TC-3573 rationale | grep `ar.ts` for the words the narrowing cites | "تسري" present at line 123 (`parties.leaveHelp`) — the false-positive claim is true, not rhetorical |
| Pins | each checked against the live document header | CODE **v2.7.0 Approved** ✓ · current SRS **v2.17.1 Approved**, SDD **v2.13.0 Approved**, BKLG **v2.5.0 Approved**, MTP **v1.6.0**, Doc 09 **v1.9.0 Approved**, Doc 01 **v2.3.0 Approved** — all as stated; **the MTP pin line itself was not advanced (ISS-01)** |
| §2 arithmetic | row-wise re-sum from the file | **478 / 245 / 233** over 28 rows; per-row identity holds on **every** row; Total row matches |
| §10 identities | recomputed | 94 + 136 + 15 = **245**; Blocked **176**; No mechanism **49**; overlap 199 + 176 + 48 + 12 − 4 = **431** |
| Id hygiene | duplicate-anchor sweep | **476** unique TC anchors, **zero** duplicates; TC-3576 continues from TC-3575 and lies inside Doc 04 v1.6.0's TC-3570–TC-3699 band |
| Residue over the 18 OP boundaries | scan for FIND / REPLACE-WITH / four-backtick fences / OP headers / adjacent duplicate lines | **zero** hits |
| Table integrity | cell-count and trailing-pipe sweep, all **69** tables | **zero** mismatches, **zero** missing trailing pipes |
| Must count | `node hooks/run_gates.cjs --audit` | **138 Must / 16 COMPLETE / 122 OPEN**; the two independent signals AGREE; Gate-2 traceability criterion **NOT MET** |

## 5. Routing instruction (to the owning role)

**FAIL → route to the tester (Ji-woo Park), the owning role, for cycle 3 of 5.** The rework MUST
produce a **new version** (**v2.8.1** is the right bump — the Medium is a one-line pin correction
and nothing normative moves; use v2.9.0 if the fix grows) with `Status: In Review`, after which
this loop re-reviews. Fix **ISS-01** by applying the MTP advance the note already announces;
ISS-02, ISS-03 and ISS-04 are one sentence, one clause and one date and should ride with it.

**Nothing in this review moves a case, a count or a ruling.** TC-3570..TC-3574 and TC-3576 are
Pass (obs.) — I observed all six green case by case — TC-3575 stays correctly Blocked, and the
FR-131 Must row is untouched at OPEN.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5 and the verdict is FAIL, not ESCALATED. Three cycles of
headroom remain, and the surviving defect is one line in the header.
