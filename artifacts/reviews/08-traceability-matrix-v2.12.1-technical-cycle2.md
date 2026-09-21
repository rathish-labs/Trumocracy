# Document Review Report — Doc 08 Traceability Matrix v2.12.1 (technical, cycle 2)

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.12.1
Review mode: technical
Reviewer role: reviewer-qa
Score: 93%
Critical: 0
High: 0
Medium: 1
Low: 2
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

The rework is good work. **All three cycle-1 Mediums are conceded in substance and fixed correctly**,
both Lows are taken rather than carried, and **every frozen figure genuinely held** — I re-derived
them independently rather than accepting the tester's assertion. `node hooks/run_gates.cjs --audit`:
**138 Must rows · 16 COMPLETE · 122 OPEN, the two independent signals AGREE**. `npm test` from the
repo root: **exit 0**, contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 116 =
**640/640**. §6 publishes 500 / 500 / 245 (136 inh. · 109 obs.) / 255; §9 publishes 245 + 15 + 233 =
493; Must-FR subtotal **114 · 16 · 98**; stories **142 | 134 | 17 | 125**; G-PHASE3 **47**; G-TRACE
**34**; the Gate-2 table is **FAIL on all six rows**; FR-131 and FR-132 both **OPEN (G-PHASE3)**.
Nothing normative moved, and **§6 carries no `v2.12.1` annotation at all** — the thirteen lines that
do are exactly the anchors the spec named.

It **FAILs on one Medium, and it is the same defect it failed on at cycle 1**: the sweep did not
reach every place the claim was made. The document says — three times, in the header, the changelog
and the §9 sign-off — that the correction reaches **"all five places the claim was made."** The five
named sites are all clean. **There is a sixth, and it is live, present-tense and unannotated: the
`Source:` block at line 247**, which still reads *"§(d) is the requirement **TC-3577..TC-3591**
verify."* That is the ISS-01 claim verbatim — all fifteen asserted against FR-132 §(d) — in the block
a Gate-2 reader consults to learn what this version actually read, and it is **two lines above the
Doc 07 pin this version edited** (OP 2). It does not exist at HEAD (the phrase returns zero hits in
`git show HEAD:docs/08-traceability-matrix.md`), so it is this lineage's own claim, introduced at
v2.12.0 and carried through the v2.12.1 sweep.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`93%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — route to the tester for **v2.12.2**, cycle 3 of 5.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.40 | **ISS-03 fully discharged.** I checked the restated Requirement cell clause by clause against Doc 02 v2.17.3 §4.46 itself, not against the tester's account of it: §(a) phone-alone + `phone_hash` HMAC-SHA-256/KMS pepper + the MUST-NOT-refuse rule; §(b) the three FR-123 counting actions, the denylist and the six-field DES-100 allowlist, all restricted-class; §(c) dedup at counting-verification with the open-tier account NOT refused; §(d) "a real, legal-age person", the three banned claims, and the DES-098 statement duty plus the FR-131 clause (d) disclosure; §(e) the procurement no-retention clause. All five are accurate and none is overstated. The DES-100 seam is correctly demoted to "design this row carries, not one of the five clauses" — the same shape FR-131 uses for its DES-096 seam half |
| T2 Soundness | 20 | 96 | 19.20 | Every substantive ruling survives re-derivation. **ISS-02 is now one denominator per measure**: this row 493, §6 500, §6's 255 vs this row's 233, gap 7 UNRECONCILED, superseded series parenthesised, the 465/456/463 sentence explicitly labelled dated v2.6.1-era analysis, and "what is NOT in doubt" now reads 245 / 640/640 / R-20. **The no-re-run ruling is right** (see 6.3). The ISS-05 restatement from the claim rather than the surface is exactly the fix asked for, and it cites the `en.verify.unavailableBody` evidence |
| T3 Traceability & IDs | 20 | 86 | 17.20 | Minus for ISS-01: an FR-132 to TC-3586 link Doc 07 does not carry, still live in the `Source:` block, plus two version-stamped records repeating it unannotated (ISS-02 below). The five named sites are clean and the §3.2 NFR-023 row is genuinely unedited — it still cites four cases, carries two evidence entries, and stays `G-UI` |
| T4 Security & failure modes | 15 | 96 | 14.40 | Untouched and still sound: `/verify` dark above `dev` behind `enrolment_ui`, "nothing these cases guard is a shipped capability", Gate-2 FAIL on all six rows, rollback still "never drilled (TC-2425)". Reversibility of this version is total — it is a document edit with no code, test or config path touched |
| T5 Completeness & testability | 15 | 92 | 13.80 | §10 is now current and honest: `TD-RTM-02` restated to 493 / 500 / Doc 07 §10's third base with 245 and 640/640 on R-20, `TD-RTM-03` restated to four cases cited and two evidence entries — **both raising dates unchanged, both OPEN, and both say in terms that the debt is no closer to paid**. I verified the TD-RTM-02 figures at the source: Doc 07 v2.9.0 §2 footer reads **260 of 493** with **233** that cannot execute. Minus because the version publishes a completeness claim ("all five places") that a sixth site falsifies |
| T6 Convention compliance | 10 | 92 | 9.20 | Patch bump correct (no `TC` minted/retired/re-statused, no status marker, gap code, owner or phase moved), `Status: In Review`, ISO-8601, retained-record convention honoured throughout, the OPEN-30 routing is recorded rather than acted on, and Doc 07 is genuinely not reopened. Minus for the two version-stamped records that carry the superseded claim without the `_(v2.12.1, ISS-01: ...)_` annotation applied at every other site |
| **Total** | **100** | — | **93%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | T3 | **`Source:` block, line 247** — the `SRS-TRUMOCRACY v2.17.3` pin's scoped-read parenthetical | **The sixth site. The FR-132 to TC-3586 link corrected everywhere else is still asserted here, live and in the present tense:** *"**plus §4.46 FR-132 clauses (a)–(e), read clause by clause for this version** — **§(d) is the requirement TC-3577..TC-3591 verify** and §(a)/(b)/(c)/(e) are why its row stays OPEN"*. That is the contiguous range, absorbing **TC-3586**, asserted against **§(d)** — the precise claim ISS-01 removed from the §3.1 `TC` cell, the §3.1 evidence cell, §7 entry 118, the §9 gate row and the changelog. Doc 07 v2.9.0's TC-3586 row verifies `US-0133 · **NFR-023 · DES-085**` and names **no FR**. Three aggravating facts: **(i)** it is **not** a retained record — it is the current version's own Source block, carrying "for this version" in the same breath; **(ii)** it is **two lines above** the Doc 07 pin this version edited (OP 2), so the sweep passed through this block and stopped short; **(iii)** it is this lineage's own claim — the phrase "is the requirement TC-3577" returns **0** hits at HEAD, so it entered at v2.12.0. Its presence falsifies the version's own three-times-repeated assertion that the correction "reaches all five places the claim was made" | Restate the scoped-read note as **§(d) is the requirement fourteen of the fifteen — TC-3577..TC-3585, TC-3587..TC-3591 — verify**, with the same ISS-01 annotation applied at the other sites. Then re-run the sweep **by pattern over the whole file, not by list**, and state in the version record the **count of sites checked**, not the count of sites fixed |
| ISS-02 | Low | T6 | **Line 410** (the v2.12.0 pin note) and **line 1930** (§8, the "v2.12.0 DoD check" paragraph) | **Two version-stamped records repeat the superseded claim with none of the annotation applied everywhere else.** Line 410: *"§(d) is the requirement **the fifteen new cases** verify"*. Line 1930: *"FR-132 — the requirement **the fifteen cases** verify — is implemented by US-0133"*. Both are stamped **v2.12.0**, so the retained-record convention protects them in principle — but every other site of this claim received an explicit v2.12.1 correction note, and a reader who meets line 1930 in §8 (live prose in a live section, not a parenthetical) has nothing telling them the count is now fourteen. This is **not** the Medium: neither is a trace cell and neither is present-tense-current. It is a consistency gap in how this version applied its own annotation discipline | Add the one-clause ISS-01 annotation ("fourteen — TC-3586 enters at NFR-023 only") to both, exactly as the §3.1 row, §7 entry 118, the §9 gate row and the changelog paragraph each received. Do **not** rewrite the dated text |
| ISS-03 | Low | T6 | Changelog, the `v2.12.1` entry (lines 424–503) | **The Doc 07 pin advance is disclosed at the pin but not enumerated in the changelog.** OP 2 advanced the `TC-TRUMOCRACY v2.9.0` pin from **In Review** to **Approved** and annotated it in place with its reason. I rule that disclosure **sufficient** (see 6.4) — but the changelog entry lists five issue fixes and a routing, and says "All five issues addressed" without recording that a source pin's status also moved. This document's own v2.12.0 entry carries an explicit pin note for exactly this class of change, and a pin-advance justification was the **Medium** that FAILed v2.11.2 | At the next touch, add one sentence to the version record: the Doc 07 pin advanced In Review to Approved on `07-test-cases-suites-v2.9.0-technical-cycle1.md` (PASS 97%), version unchanged, status only |

> **Low** issues do not block the pass bar. **The single Medium forces this FAIL.**

## 5. Routing instruction (to the owning role)

**FAIL — route to the owning role, the tester (Ji-woo Park).** Rework **ISS-01** into a new version
(**patch** is again sufficient — nothing normative moves; set `Status: In Review`) and fold ISS-02
and ISS-03 in the same edit rather than carrying them. This loop then re-reviews at **cycle 3 of 5**.

**Nothing may move.** Must **138** · COMPLETE **16** · OPEN **122** · G-PHASE3 **47** · G-TRACE **34** ·
Must-FR subtotal **114 · 16 · 98** · stories **17 of 142** · designed **500** · passing evidence
**245** (136 inh. · 109 obs.) · gaps **255** · §9's 245 + 15 + 233 = **493** · suite **640/640
(R-20)** · Gate-2 verdict **FAIL** on all six rows · FR-131 and FR-132 **OPEN (G-PHASE3)** — all
independently re-derived at this cycle and all correct. ISS-01 is one clause in one parenthetical;
ISS-02 is two annotations; ISS-03 is one sentence. **No suite re-run is required or wanted.**

**Doc 07 v2.9.0 stays Approved and is not reopened.** I re-read its TC-3586 row: it still reads
"Verifies `US-0133 · **NFR-023 · DES-085**`" and its own note still says "Doc 08 **v2.12.0** records
the NFR-023 to TC-3586 link" — singular. The two documents now agree at the five corrected sites and
disagree only at the sixth, which is Doc 08's to fix.

**One process note for the tester, offered as the durable fix rather than a sixth patch.** This
lineage has now failed twice on *sites the correction did not reach*, and both times the version
published a **count of sites fixed** as if it were a **count of sites checked**. The two are not the
same claim. A sweep stated as "corrected in all five places" is unfalsifiable by a reader; a sweep
stated as "the range pattern returns 14 hits; 5 were the claim and are corrected, 9 are
minting/orphan/retained references and are listed here" is falsifiable in one command — and it is
the command that would have caught line 247.

## 6. Reviewer's independent rulings (evidence, not acceptance)

### 6.1 The five named ISS-01 sites — all five clean, verified individually

Not taken from the spec. Read on disk, cell by cell:

1. **§3.1 FR-132 `TC` cell** (line 1740, column 6) — `TC-3479, TC-3480, TC-3577..TC-3585,
   TC-3587..TC-3591 — **fourteen** of the fifteen UT-0890 cases; **TC-3586 is deliberately NOT
   here**, see the status cell`. CLEAN
2. **§3.1 FR-132 evidence cell** (column 7) — the same enumeration, closing "of which these
   **fourteen** are this row's evidence". CLEAN
3. **§7 entry 118** (line 2077) — "minted as TC-3577..TC-3591 ..., **of which fourteen —
   TC-3577..TC-3585 and TC-3587..TC-3591 — are this entry's evidence**", with the v2.12.1 ISS-01
   annotation and the TC-3576 precedent cited. CLEAN
4. **§9 gate row** (line 2133) — the v2.12.0 parenthetical now reads "fourteen ... **enter at the
   §3.1 FR-132 row**, while **TC-3586 enters at the §3.2 NFR-023 row ONLY**", and annotates that it
   previously said "additionally". CLEAN
5. **Changelog** (lines 511–521) — "TC cell gains ... **(fourteen of the fifteen)**" and the NFR-023
   line now says TC-3586 "**and that is the only row it enters**". CLEAN

**And the row that had to stay still, stayed still.** §3.2 NFR-023 (line 1768) carries **no**
`v2.12.1` annotation: it still cites `TC-2331, TC-2332, TC-3576, TC-3586`, still carries two evidence
entries, and is still `G-UI` with Complete **0**. TC-3586 keeps exactly the one link it earns.

### 6.2 The sixth-site sweep — how I looked, and what I found

I did not check the five and stop. I enumerated **every** occurrence of the range and of the word
"fifteen" in the file and classified each:

- The contiguous range `TC-3577..TC-3591` — **14 hits** on 12 lines. Ten are legitimate: minting
  references (lines 249, 1907), the §4 orphan check (1862), Doc 07's suite filing (598), the "touches
  this entry NOT AT ALL" record (2076), the §3.1 status cell's own "minted ... **of which fourteen
  enter this row**" (1740), and the defect descriptions at 19 / 438 / 519 / 2149. Two are
  version-stamped records repeating the superseded claim (**ISS-02**: lines 410, 1930). **One is
  live, present-tense and wrong (ISS-01: line 247).**
- "fifteen" beside FR-132 or §(d) — the same three residues, no others.
- Matrix-wide statements of the form "**fifteen** cases enter the matrix" (lines 68, 503, 2149) are
  **correct as written** and are not instances of the defect: fifteen cases do enter this matrix —
  fourteen at FR-132 and one at NFR-023. I checked each before clearing it.

### 6.3 No suite re-run and no new run id — the tester is right, and I would have objected if it were not

**Ruling: correct, and it is the disciplined call rather than the lazy one.** v2.12.1 touches no
product, test or configuration path — `git status --porcelain` shows only `SECURITY.md`,
`artifacts/*` and Docs 03/04/07/08, and no test in this repository reads any of them. Minting
**R-21** for an unchanged code state would manufacture a second piece of evidence out of one
execution, which is the exact defect this document itself named at R-18/R-19 ("the two runs are one
piece of evidence, not two"). **R-20 stands.** I nevertheless re-ran the full suite myself rather
than take it on assertion: `npm test`, **exit 0**, contracts **95** · protocol **151** · sdk **244** ·
ui **18** · indexer **16** · web **116** = **640**, `apps/web/test/safety-surfaces.test.tsx`
**41/41**. The figure is real today.

### 6.4 The Doc 07 pin advance — disclosure was sufficient

**Ruling: sufficient, and I decline to make it a Medium.** The change is a **status-currency
correction on an unchanged version number** (`v2.9.0 In Review` to `v2.9.0 Approved`), it is
annotated **at the pin itself** — where a reader meets the claim, which is the strongest disclosure
this document has — it names the reason ("it is the source that settles ISS-01"), and it is
independently verifiable: `artifacts/reviews/07-test-cases-suites-v2.9.0-technical-cycle1.md` exists,
carries **PASS 97% 0C/0H/0M/4L**, Doc 07 on disk reads `Status: Approved`, and `--audit` reports
`PASS 07-test-cases-suites.md v2.9.0`. This is the same treatment v2.12.0 gave the stale Doc 07
v2.8.1 status, and it is the opposite of the v2.11.2 Medium, where a pin advance rested on a claim
the cited source did not carry. Here the source carries it. The only residue is that the changelog
does not enumerate it (**ISS-03, Low**).

### 6.5 The frozen figures — re-derived, not accepted

| Figure | Claimed | Independently verified |
|---|---|---|
| Must / COMPLETE / OPEN | 138 · 16 · 122 | `--audit`: derived from row status markers **138 / 16 / 122**; published by §9 **16 / 122**; "the two independent signals **AGREE**" |
| Must-FR subtotal | 114 · 16 · 98 | §6 dashboard row: FR — Must, 114, 114, **16**, **98** |
| Gaps · designed · evidence | 255 · 500 · 245 | §6: Test cases, **500**, **500**, **245** (136 inh. · 109 obs.), **255**; 500 − 245 = 255; 136 + 109 = 245 |
| §9 denominator | 493 | 245 + 15 + 233 = 493; and 493 is Doc 07 v2.9.0 §2's total, read at the source |
| Stories | 17 of 142 | §6: Stories, **142**, 134, **17** meet the DoD, 125 |
| G-PHASE3 · G-TRACE | 47 · 34 | SUMMARY by-reason table, both rows unchanged; 47+13+9+5+6+4+5+34 = 123, distinct open 122 (NFR-007 compound) |
| Suite | 640/640 (R-20) | Re-run by me: exit 0, 95+151+244+18+16+116 = **640** |
| Gate-2 verdict | FAIL on all six rows | §9 table: six criterion rows, **six** FAIL verdicts |
| FR-131 · FR-132 | both OPEN (G-PHASE3) | §3.1 rows and §7 entries 117/118, unchanged |
| §6 untouched | not edited at all | **Zero** `v2.12.1` occurrences anywhere in §6 (lines 1888–1932) |

The thirteen lines carrying a `v2.12.1` marker are 6, 249, 424, 496, 518, 533, 1740, 2076, 2077,
2133, 2149, 2167, 2168 — the header, the Doc 07 pin, the changelog (three annotations), the FR-132
row, §7 entries 117 and 118, the §9 gate row, the §9 sign-off, and the two §10 debt entries.
**No requirement row other than FR-132 is annotated; no status marker, gap code, owner or phase is
touched.** The "eleven anchors and nothing else" claim holds.

### 6.6 ISS-03 verified at the source, not at the summary

I read **Doc 02 v2.17.3 §4.46** (line 1379) in full and compared clause by clause. The restated cell
is faithful on all five, including the six-field allowlist verbatim (`id_verified_flag`,
`age_verified`, `issuing_region`, `subject_id_hash`, `phone_hash`, `verified_at`), the "MUST NOT
refuse an account or party membership" rule, the open-tier-not-refused half of §(c), and §(d)'s two
distinct duties (the dedup statement **and** the FR-131 clause (d) open-tier disclosure). The one
compression — §(c)'s "regardless of phone number" — is a summary loss, not an error. **ISS-03 is
discharged.**

### 6.7 The Lows, and the honesty of the framing

**`TD-RTM-02` and `TD-RTM-03` are made current without any debt being claimed closed, and I checked
that claim rather than reading it.** Both entries retain their original raising dates — `OPEN —
raised 2026-09-07` and `OPEN — raised 2026-08-30`. `TD-RTM-03` states in terms that "**TC-3538 and
TC-3561 are still absent — that omission is the whole of this debt and it is untouched at exactly
two**". `TD-RTM-02` states "**The raising date is unchanged and the debt is no closer to paid** — all
three bases moved by exactly +15 at v2.12.0 and not one was reconciled to the others". Its restated
figures check out at the source: Doc 07 v2.9.0 §2 footer reads **260 of 493** automated and **233**
that cannot execute. **ISS-04 discharged; the framing is accurate and nothing is silently closed.**

**ISS-05 is taken in Doc 08 and honestly carried in Doc 07.** §7 entry 117 and the changelog now
scope clause (e) **by the claim** — "clause (e) reaches a string only where the string asserts that a
participation act ... is unknowable" — and both record my evidence, that
`en.verify.unavailableBody` names two participation acts in one sentence. **Doc 07 is genuinely
unedited on this point**: its TC-3586 row is unchanged and still names no FR, and the clause-(e)
framing Low is disclosed as carried in its `Status:` line ("the clause-(e) surface-vs-claim
framing"). The only Doc 07 change is the In Review to Approved status the PASS earned it, which is
the owning role doing what the skill prescribes.

### 6.8 Cycle-1 affirmations that stand, and scope kept

Not re-litigated and not reopened: the FR-131/FR-132 tracing ruling, the Must-count reasoning,
`TD-RTM-03`'s disclosure-sufficiency, the declined `SCR` link (Conflict C-01 remains the architect's),
R-20's discharge claim, and `TD-RTM-01`/`TD-RTM-02`/`TD-RTM-04` being out of scope. All four §10
debts remain OPEN and correctly named rather than half-done. Docs 03 and 04 are the architect's, at
cycle 2 with another reviewer; the audit's BLOCK on both is **expected** and I did not touch them.

### 6.9 Gate-2 posture (unchanged by this version)

`--audit` reports `Gate 2 traceability criterion: NOT MET` — **122 open Must rows**. This version
moves none of them and does not claim to. Doc 08 cannot support a Gate-2 sign-off at any version
until those rows close; what this loop is settling is whether the matrix **tells the truth about**
the gap, and on that it is now one parenthetical away.
