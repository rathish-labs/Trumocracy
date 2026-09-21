# Document Review Report — Doc 08 RTM v2.13.0 (technical, cycle 1 of 5)

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.13.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 87%
Critical: 0
High: 2
Medium: 3
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

I re-ran the evidence rather than reading it: `npm test` from the repo root is **739/739, exit 0**
(contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138 — 95+178+287+25+16+138 = 739),
and `node hooks/run_gates.cjs --audit` reports **derived 138 Must / 19 COMPLETE / 119 OPEN** against
**published by §9: 19 / 119** — the two independent signals **AGREE**. I re-ran the four candidate
test files case-by-case (`protocol` 27/27, `sdk` 43/43, `ui -t "UT-0903"` 7 passed / 18 skipped,
`web` 20/20) and mechanically checked every `it` title Doc 07 §5.7 quotes against the four test
files: **98 of 98 quoted `it` names exist verbatim** (the single regex miss is TC-3599's title, which
contains embedded double quotes — verified by eye). All **43** spec OPs are present **exactly once**;
no double-apply, no leaked FIND/REPLACE marker, no broken table row in §3.1/§3.2/§3.3/§7. I
re-derived every published figure independently and the *headline* arithmetic is right:
19/138 = 13.768% → 13.8%; 40+19+9+5+6+4+5+32 = 120 by-reason with distinct open 119; 24+137 = 161;
275+15+231 = 521; 136 inh. + 139 obs. = 275; 245 + 28 new + 2 re-statused (TC-3407, TC-3411) = 275;
17 + 6 = 23 of 142; the G-TRACE legend enumeration is 1 NFR + 31 FRs = 32 and the reviewer-qa
sign-off enumeration matches it row for row.

**The verdict is FAIL on two Highs.** First, **the recurring defect class recurred, three times**:
§3.1 and §3.3 carry three live subtotal lines that were not moved — `pre-v2.0.0: 54 rows · 12
complete · 42 open`, `v2.5.4: 114 rows · 16 complete · 98 open ... = **122 open** of **138** Must`,
and `Non-Must: 23 rows · 4 complete · 19 open`. The middle one publishes the **gate criterion figure
itself** and an explicit reconciliation that is now false, directly under a table whose rows say 19.
None of the 43 OPs touches them; this is an authoring omission in the tester's spec, not
transcription residue. Second, **FR-036 — a Must row this version CLOSES — does not evidence its own
withdrawal clause**: Doc 02's fourth clause ("allow withdrawal of a candidacy at any time before the
ballot locks") is argued in the status cell from **UT-0897**, cited in the changelog as **TC-3605**
and in §7 entry 17 as UT-0897 — yet **TC-3605 is not on the FR-036 row**, **UT-0897 is not in its UT
evidence cell**, and **Doc 07's TC-3605 names `US-0095 · FR-085, FR-107, FR-081` and not FR-036**, so
there is no TC anywhere attributed to FR-036 for that clause. The same row omits **TC-3606**, which
Doc 07 *does* attribute to FR-036 and which is the only passing test that proves the published
endorsement minimum actually **gates** the candidacy (`ENDORSEMENTS_SHORT`). The underlying tests are
real and green — I ran them — but as published, the chain does not close for two of FR-036's four
clauses, and I would not defend that row at merge in its current form.

The rulings themselves are the strongest part of this version. I independently checked the premise
of every OPEN ruling and **concur with all six** (FR-039, FR-065, FR-066, FR-067, FR-081, FR-093),
including that FR-081 is **not** over-cautious: FR-079's v2.5.0 closure is explicitly on the standard
"each clause of the stated guarantee has its own passing test", and FR-081's "with its state
(active/inactive)" has no field, no read and no assertion, so the architect's derivation view
correctly loses. FR-085's closure and the TC-3476 re-homing are both sound (TC-3476 is `US-0132 ·
FR-131 clause 8 · DES-094`, Blocked, and it retains its FR-131 row here). The `TD-RTM-05` raise
against Doc 02 §16.3.1 is correct and correctly refuses to rest the FR-065 ruling on it.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`87%`)
- Critical = 0? **yes** · High = 0? **no** (2) · Medium = 0? **no** (3)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 88 | 17.6 | All ten requirements ruled clause by clause against Doc 02 §4 **and** §8; FR-067's "refused and logged" and FR-065's "unlinkable" are correctly taken from the Gherkin/normative text I re-read. Loses points for FR-036's two unevidenced clauses (ISS-02) |
| T2 Soundness | 20 | 88 | 17.6 | Six OPEN rulings independently confirmed against the code; FR-081 consistent with the FR-079 v2.5.0 precedent. Loses points for the FR-037 rule asymmetry (ISS-03) |
| T3 Traceability & IDs | 20 | 78 | 15.6 | Hook signals agree; DES assignments match Doc 03 v2.16.0 §15 row for row; SCR-22/23 follows §10.12.4 with the inversion recorded. ISS-01, ISS-02, ISS-06, ISS-07 land here |
| T4 Security & failure modes | 15 | 92 | 13.8 | `ELECTIONS` flag `prod: false` and `ENROLMENT_UI` `staging/prod: false` verified in `packages/protocol/src/flags.js`; `IS_INSECURE_MOCK` discipline carried; FR-131(b) honesty disclosure held against the closure. ISS-08 only |
| T5 Completeness & testability | 15 | 90 | 13.5 | DoD check genuinely story-by-story by id diff; every figure re-derivable. ISS-04 |
| T6 Convention compliance | 10 | 85 | 8.5 | House style intact; ISS-05 truncation in the Source block |
| **Total** | **100** | — | **86.6 → 87%** | — |

## 4. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **High** | T3 | §3.1 line 2110; §3.1 line 2186; §3.3 line 2248 | **Three live subtotal lines still publish the pre-v2.13.0 counts.** (a) "**Must FR subtotal (pre-v2.0.0 rows): 54 rows · 12 complete · 42 open.**" — FR-036 and FR-037 are inside that block and both close, so it must read **14 complete · 40 open**. (b) "**Must FR subtotal (v2.5.4): 114 rows · 16 complete · 98 open.**" with "_Reconciles with §6: 98 open FRs + 24 open NFRs … = **122 open** of **138** Must._" — the changelog's own §6 bullet says "FR — Must complete **16 → 19**, gaps **98 → 95**", so this line publishes the **gate criterion figure** wrong and asserts a reconciliation that is now false; it sits directly beneath a table whose rows show 19. (c) "**Non-Must subtotal (v2.2.4): 23 rows · 4 complete · 19 open.**" — FR-038 closes, so **5 complete · 18 open**. **These are the N+1th, N+2nd and N+3rd sites of the exact defect class the v2.13.0 Status block names** ("publishing a count of sites FIXED as a count of sites CHECKED"), and site (b) is a **known repeat**: its own annotation records that it "had been left at its v2.2.2 values … through four drops that closed rows" and was corrected at v2.5.4, and that v2.8.0 restated it deliberately. None of the 43 spec OPs touches any of the three, so this is an authoring omission in the spec, not transcription residue | Tester: add OPs moving all three subtotals to 14/40, 19/95 (with the reconciliation restated as 95 + 24 = **119** of 138) and 5/18, each annotated in the established `_(vN: …)_` style; and state in the changelog that the three subtotal sites were **checked**, not only that the §6 dashboard was fixed |
| ISS-02 | **High** | T3, T1 | §3.1 FR-036 row (line 2081), TC and UT-evidence cells; cross-ref Doc 07 §5.7 TC-3605 (line 2405) and TC-3606 | **A Must row closes with two of its four Doc 02 clauses evidenced only by TCs that are not on the row.** (i) **Withdrawal.** FR-036's fourth clause is "allow withdrawal of a candidacy at any time before the ballot locks". The status cell proves it — "permitted before the window and after it, refused `BALLOT_LOCKED` after the lock (**UT-0897**)" — and the v2.13.0 changelog cites "**(TC-3605)**". But the row's TC cell reads `TC-0028, TC-3597, TC-3598, TC-3600, TC-3601, TC-3602, TC-3615, TC-3616` (**no TC-3605**) and its UT-evidence cell reads `UT-0894 · UT-0896 · UT-0905` (**no UT-0897**). Worse, **Doc 07's TC-3605 requirement cell reads `US-0095 · FR-085, FR-107, FR-081` — it does not name FR-036 at all**, so no test case in Doc 07 is attributed to FR-036 for that clause. None of the seven TCs the row does cite covers withdrawal (each checked against its Doc 07 row and its `it`s). (ii) **The endorsement-minimum gate.** TC-3602/UT-0896 proves the minimum is *published* (`{endorsements, required: NOMINATION_ENDORSEMENTS_MIN, met}`) and that endorsers must be matured residents; the only passing test that proves the minimum **gates** the candidacy is UT-0898's `it` "debates cannot be scheduled before consent, nor before the published minimum of endorsements" (`ENDORSEMENTS_SHORT`) = **TC-3606**, whose Doc 07 requirement cell **does name `US-0076, US-0048 · FR-066, FR-036`**. The changelog ("TC-3602, TC-3606") and §7 entry 17 ("UT-0896, UT-0898") both rely on it; the row omits it. Doc 07 and Doc 08 therefore disagree about FR-036's evidence set, on the version that closes it. Both tests exist and pass — I ran them — so the substance is sound and the defect is in the matrix's own chain, which is the one thing this document exists to get right | Tester: add **TC-3605** and **TC-3606** to FR-036's TC cell and **UT-0897**, **UT-0898** to its UT-evidence cell (both Pass (obs.), R-21); state in the FR-036 status cell which TC carries the withdrawal clause and which carries the gate. Route to the **tester** for Doc 07: add **FR-036** (and US-0046/US-0047 as applicable) to TC-3605's requirement cell so the backward trace resolves. Until both sides agree, this row's closure is not defensible at merge |
| ISS-03 | **Medium** | T2 | §3.1 FR-037 row (line 2082), the "SCOPE OF 'UNDER ANY CIRCUMSTANCE'" paragraph | **FR-037's platform-wide clause closes on an argument, while FR-081's identically-shaped clause is ruled NOT satisfied for want of an assertion — in the same version, with no recorded rule reconciling them.** Doc 02 FR-037: "MUST NOT disclose the identity of any person who is not a consenting candidate or office-holder **under any circumstance**". The row concedes "the clause is platform-wide; the evidence above is candidacy-flow-local" and closes on the premise that "in v1 the candidacy disclosure holding is the only place the platform holds a real-world identity at all". **I verified that premise and it is true today** — `ENROLMENT_UI` defaults are `{dev: true, staging: false, prod: false}` in `packages/protocol/src/flags.js`, and a repo-wide search for `disclosure`/`realName`/`legalName`/`fullName` across `packages/*/src`, `services/*/src` and `apps/web` returns only the candidate modules plus prose comments. But it is verified by **inspection**, not by a passing test, and completion rules 2 and 3 demand "a real implementing test that passes" for the clause — which is precisely the ground on which this same version refuses FR-081 ("a mapping published in a design document is not a test … three absences, not one") and on which v2.5.0 closed FR-079 ("each clause of the stated guarantee has its own passing test"). The repo already writes exactly this kind of test elsewhere (UT-0891's module export scan, UT-0897's store prototype scan, UT-0899's method/parameter scan), so an absence-of-second-holding scan is available, not hypothetical | Tester: either (a) route an engineer touch for one absence-scan `it` asserting no module outside the candidacy flow holds real-world identity, mint its TC and close FR-037 on it; or (b) record an explicit, named completion ruling — in §1's rules or §10 — that a **verified-by-inspection scope premise** may discharge a platform-wide clause when no product exists to test, and then state in the FR-081 row why that same allowance does not reach it. Do not leave the two rulings side by side unreconciled |
| ISS-04 | **Medium** | T5 | Header/Changelog line 746 vs §6 line 2377 | "**Thirteen stories were checked:** US-0046, US-0047, US-0048, US-0049, US-0050, US-0051, US-0052, US-0074, US-0075, US-0076, US-0077, US-0091, US-0095, US-0103 and US-0132" — the enumeration contains **fifteen** ids, and §6 says "**Fifteen stories were in scope**" over the same list. 6 promoted + 9 not promoted = 15, so "Thirteen" is simply wrong. It appears **in the sentence immediately after** "THE METHOD IS STATED because this is the recurring defect class in this repo — publishing a count of sites FIXED as a count of sites CHECKED" | Tester: change "Thirteen" to "Fifteen" in the Status/Changelog block so it agrees with its own enumeration and with §6 |
| ISS-05 | **Medium** | T6 | Header `Source:` block, line 503 (the `TC-TRUMOCRACY v2.10.0` pin) | **The Doc 07 pin ends mid-word and leaves the Source block structurally broken.** The line terminates "…07-test-cases-suites-v2.8.1-technical-cycle3.md, PASS 98% — **after that annot**" — the word "annotation" is cut, the sentence and the `_(v2.12.0: …)_` italic are unterminated, and the `TC-TRUMOCRACY (` group never closes. The next source line begins an unrelated v2.7.0 parenthetical. The truncation is in **spec OP 5's REPLACE block itself**, so the transcription faithfully reproduced a truncated instruction — but the published document now carries it, and the lost sentence is the one that explains why the v2.12.0 pin was corrected. (Related, non-blocking: the spec's preamble states "The target file is CRLF"; the file is pure LF at `HEAD` and after transcription — 0 CRLF, 2620 LF — so the normalisation claim describes a condition that does not hold) | Tester: restore the truncated tail, close the parenthesis and close the italic |
| ISS-06 | Low | T3 | §4 Backward trace (lines 2274–2306) | **No v2.13.0 orphan sweep.** Every prior drop records one — "v2.8.0 sweep", "v2.10.0 sweep", "v2.12.0 sweep" — each naming the new `UT` ids, their `it` counts and their TC mappings. The largest drop in this document's life (**17 new `UT` ids, `UT-0891`..`UT-0907`, 97 `it`s**) adds none, so §4's assertion that "every `UT` cited in this matrix was located by identifier in a real test file" is unsupported here for 17 ids. Mitigating: Doc 07 v2.10.0 §8 carries the sweep, the "288" population figure is already annotated as not re-derived and deferred to `TD-RTM-02`, and I located all 17 ids myself | Tester: add a "**v2.13.0 sweep**" paragraph to §4 mapping `UT-0891`..`UT-0907` to `TC-3592`..`TC-3619` with the material orphan count |
| ISS-07 | Low | T3 | §7 preamble (lines 2383–2400) | **No "v2.13.0 update" note in the gap log's own change record**, although this version retires **three** entries (17, 18, 76) and rewrites **six** (19, 56, 57, 58, 72, 84) — by far the largest gap-log movement recorded. The convention is honoured by every prior touching version and even by **v2.11.0**, which states "NO entry is retired, added or updated … stated explicitly rather than left to inference." The information is in the changelog, so no figure is wrong | Tester: add a "**v2.13.0 update**" note to the §7 preamble enumerating the three retirements, the six rewrites and the heading move 122 → 119 |
| ISS-08 | Low | T4 | §8 Change-impact view (lines 2555–2570) | **No v2.13.0 row**, although this version creates three explicit revisit triggers and two ratified constants that fit §8's existing patterns exactly: `NOMINATION_ENDORSEMENTS_MIN = 5` / `NOMINATION_MATURATION = 30 days` (approver-ruled 2026-09-21 — the same shape as the existing `COUNTING_ACTION` allowlist row), the `ICandidateStore` v1→v2 seam swap (the same shape as the ADR-024 row), and the three recorded revisit flags (attested residency → FR-036; the FR-132 identity layer → FR-037; a DES-097(b) production store exposing an approve/reject/rank member → FR-081). The flags are recorded in the rows, so a row reader sees them; §8 is where a change owner looks | Tester: add the rows to §8 naming the requirement rows each change forces to be re-verified |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Routing instruction (to the owning role)

**FAIL.** Route to the **tester (Ji-woo Park)**, the owning role for Doc 08. Rework MUST produce a
**new version** — bump the `Version:` semver and set `Status: In Review`, then re-enter this loop at
cycle 2. A **PATCH is not sufficient for ISS-02**, which changes a closed Must row's cited evidence
set: use **v2.13.1** only if ISS-02 is resolved by citation alone and no row status moves, and
**v2.14.0** if any row's status changes.

Two items are **not the tester's to fix inside Doc 08**, and must be routed rather than absorbed:

- **Doc 07 v2.10.0 (tester, as Doc 07's owner):** `TC-3605`'s requirement cell must name **FR-036**
  so ISS-02(i)'s backward trace resolves on both sides. Doc 07 is itself In Review this session
  under a separate report; fix it there, not by editing Doc 08 alone.
- **Engineer (via the project-manager):** ISS-03(a)'s absence-scan `it`, if the tester takes that
  route rather than recording the rule. Separately confirmed by me and already correctly routed by
  the tester: the `NOMINATION_ENDORSEMENTS_MIN` value pin — UT-0894's `it` still reads "the two
  engineer-chosen constants are **flagged for ratification** and are not zero", which I read green
  in the verbose run, so the guarantee is asserted and the approver-ratified value 5 is not pinned.

**What is confirmed and needs no rework** — stated so cycle 2 does not re-litigate it: the suite
(739/739, exit 0) and the two agreeing hook signals (derived 138/19/119, published 19/119); all 43
OPs applied exactly once with no leaked marker, duplicated tail or broken table row; all 98 quoted
`it` names verbatim in their named test files; the six OPEN rulings, each checked against the code
(FR-039's absent tie-break field, FR-065's store-local check-then-write vs `isUniqueInScope` and the
caster record, FR-066's application-held trail, FR-067's absent refusal event, FR-081's three
absences, FR-093's unbuilt question phase); the FR-085 closure and the TC-3476 re-homing (TC-3476 is
`US-0132 · FR-131 clause 8 · DES-094`, still Blocked, still on the FR-131 row here); the DES
assignments against Doc 03 v2.16.0 §15; the SCR-22/SCR-23 handling per §10.12.4 with the
inversion cited rather than swapped silently; `TD-RTM-05`; and every headline figure in the SUMMARY,
the gaps-by-reason table and its arithmetic line, the G-TRACE legend enumeration (1 NFR + 31 FRs =
32), the reviewer-qa and Principal Architect enumerations, §6's dashboard, the story-by-story DoD
check, §9's two hook-parsed rows and the Gate-rule footer.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — `Verdict: FAIL` at cycle 1 of 5.
