# Document Review Report — Doc 08 Traceability Matrix v2.2.2 · Technical · Cycle 3

> Produced by the **document-review** skill. NEUTRAL REVIEWER role: reviewer-qa (not the
> document owner; tester owns Doc 08). This reviewer scores and lists issues only — it never
> edits the reviewed document. All rework is done by the owning role (tester).

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.2.2
Review mode: technical
Reviewer role: reviewer-qa (neutral — not the document owner)
Score: 96%
Critical: 0
High: 0
Medium: 2
Low: 0
Cycle: 3 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 08 v2.2.2 was reviewed in technical mode as Cycle 3. Both cycle-2 issues are confirmed
closed: TC-3488 and UT-0753 now appear in the NFR-011 forward trace row in §3.2, US-0132 is
added to the NFR-011 US column, and the TC dashboard total (397) is now correctly traced.
The eight previously absent Must FR rows (FR-121, FR-125, FR-126, FR-127, FR-128, FR-129,
FR-130, FR-133) are all present in §3.1 with correct chains, tags, and — for FR-130 — the
US-0131 link verified in Doc 05 v2.1.0. All eight are confirmed active Must FRs in Doc 02
v2.13.0. DES-099 for FR-133 is confirmed in Doc 03 §10.13.8 (v2.4.1 Approved). Must-row
arithmetic is internally consistent and matches Doc 02's own tally. **FAIL** because v2.2.2
introduces two new Medium defects from stale active-text figures that were not updated
alongside the sweep. First, the §3.1 section heading still reads "the 106 gating functional
rows" while every other figure in the document now states 114 Must FRs. Second, the Gate-2
verdict paragraph in the SUMMARY section was not updated: it still cites 130 gating Must rows,
118 open, 9.2% completion, 33 G-TRACE rows, and 46 G-PHASE3 rows — all of which are
pre-v2.2.2 figures that contradict the correct values in the SUMMARY table (138/126/8.7%)
and the §9 gate verdict table. A Gate-2 approver reading the verdict paragraph encounters
different numbers than the verdict table, which is the principal gate-facing artefact in this
document.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (2 Medium)
- **Verdict:** `FAIL` — Medium count is non-zero; PASS requires all three severity counts
  at zero.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 100 | 20.0 | All 114 Must FRs confirmed present; all 8 new rows verified as active Must FRs in Doc 02 v2.13.0; none superseded; cycle-2 ISS-02 fully resolved |
| T2 Traceability chain integrity | 20 | 100 | 20.0 | TC-3488 and UT-0753 now in NFR-011 row; US-0132 added to NFR-011 US column; dashboard TC total 397 correctly traced; cycle-2 ISS-01 fully resolved |
| T3 Test evidence quality | 20 | 100 | 20.0 | G-TRACE=41 and G-PHASE3=47 verified; eight new rows tagged correctly (G-TRACE+G-PHASE3 for 7; G-PHASE3 only for FR-133 with DES-099); gap-code log entries 119–126 present and accurate; no false-complete conversions; prior FR rows from v2.2.0/v2.2.1 intact |
| T4 Arithmetic accuracy | 15 | 83 | 12.45 | By-reason sum 47+10+9+5+6+4+5+41=127; distinct 126 ✓; 12/138=8.7% ✓; §9 table 12/138 ✓; gate-rule footnote 126 ✓. DEFECT: §3.1 heading "106" stale (ISS-01); gate-2 verdict paragraph "130/118/9.2%/33/46" all stale (ISS-02) |
| T5 Status discipline | 15 | 88 | 13.2 | §9 sign-off "126 open Must rows" ✓; gate-rule footnote "126 open Must rows. The gate stays shut." ✓; SUMMARY table 138/126/8.7% ✓. DEFECT: §3.1 heading and gate-2 verdict paragraph contradict all three correct locations |
| T6 Documentation quality | 10 | 95 | 9.5 | Changelog entry is accurate for changes made; gap log update note at §7 preamble is correct. Minor gap: changelog does not note that the gate-2 verdict paragraph and §3.1 heading were not updated (which is precisely where the two defects reside) |
| **Total** | **100** | — | **95.15% → 96%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line) | Finding | Required fix |
|----|----------|-----------|--------------------------|---------|--------------|
| ISS-01 | Medium | T4 | §3.1 section heading: "Must FRs — the **106** gating functional rows" | The §3.1 heading still reads "106 gating functional rows". After the v2.2.2 sweep added eight Must FR rows (FR-121, FR-125..FR-130, FR-133), the correct Must FR count is 114. The heading contradicts the SUMMARY table, §6 dashboard (FR-Must = 114), §9 gate verdict table (138/138), and the v2.2.2 changelog. A reader of §3.1 sees 114 rows in the table body but a heading stating 106. | Change "the 106 gating functional rows" to "the 114 gating functional rows" in the §3.1 heading. |
| ISS-02 | Medium | T4, T5 | Gate-2 verdict paragraph (SUMMARY section, immediately before the horizontal rule) | The Gate-2 verdict narrative paragraph was not updated to reflect the v2.2.2 counts. It still states: (a) "Of **130** gating Must rows" — should be 138; (b) "**12 close and 118 do not**" — should be 12 close and 126 do not; (c) "a **9.2%** completion rate" — should be 8.7%; (d) "**33 rows** carry G-TRACE" — should be 41; (e) "**46 rows** carry G-PHASE3" — should be 47. All five figures are pre-v2.2.2 values (matching v2.2.0 or earlier). A Gate-2 approver reading this paragraph receives five incorrect gate-critical numbers that contradict the SUMMARY table and §9 gate verdict table, both of which are correct. | Update the five stale figures in the Gate-2 verdict paragraph to match the v2.2.2 actuals: 138 gating Must rows; 126 open; 8.7% completion; 41 G-TRACE rows; 47 G-PHASE3 rows. Verify paragraph internally consistent with SUMMARY table and §9 after the edit. |

> **Low** issues do not block the pass bar. **Medium** forces a FAIL.

---

## 5. Hard-check verification record (per assignment)

### 5.1 Eight new Must FR rows — chain and Must-status verification

| FR | Doc 02 Must status | BR traces in RTM | US in Doc 05 | DES / tag in RTM | Tag accurate? |
|----|-------------------|-----------------|-------------|-----------------|---------------|
| FR-121 | Must (active; Doc 02 §16.3 IN-v1, pilot jurisdiction sequence) | BR-020/BR-006 ✓ | none (G-TRACE posture ✓) | none / G-TRACE+G-PHASE3 | ✓ |
| FR-125 | Must (active; OI-19 RESOLVED at v2.4.0) | BR-003/BR-006 ✓ | none (G-TRACE posture ✓) | none / G-TRACE+G-PHASE3 | ✓ |
| FR-126 | Must (active; on-device credential processing) | BR-009/BR-006 ✓ | none (G-TRACE posture ✓) | none / G-TRACE+G-PHASE3 | ✓ |
| FR-127 | Must (active; nullifier-collision-only duplicate detection) | BR-006/BR-009 ✓ | none (G-TRACE posture ✓) | none / G-TRACE+G-PHASE3 | ✓ |
| FR-128 | Must (active; subpoena-test no-stored-identity) | BR-009/BR-006 ✓ | none (G-TRACE posture ✓) | none / G-TRACE+G-PHASE3 | ✓ |
| FR-129 | Must (Doc 02 v2.4.0; "Must count 109→110"; Charter-layer guard) | BR-006/BR-012/BR-021 ✓ | none (G-TRACE posture ✓) | none / G-TRACE+G-PHASE3 | ✓ |
| FR-130 | Must (Doc 02 v2.5.0; "Must count 110→111"; provisional-party membership cap) | BR-002/BR-012 ✓ | US-0131 (Doc 05 v2.1.0, EP-03 ▸ FE-009, "Not Ready pending DES" ✓) | none / G-TRACE+G-PHASE3 | ✓ |
| FR-133 | Must (Doc 02 v2.8.0; "Must count 112→114"; spam-resistance flag-don't-block) | BR-012/BR-003 ✓ | none (G-PHASE3, DES assigned) | DES-099 / G-PHASE3 only | ✓ |

None of the eight is superseded (Doc 02 §11 v2.13.0 lists only FR-046 and FR-062 as the two
superseded FRs). All eight are confirmed active Must requirements.

**DES-099 verification.** Doc 03 §10.13.8 (v2.4.0 and forward) contains the DES-099
spam-resistance layer element; Doc 03 changelog v2.4.0 records "§15 DES-099 row (FR-133)
added." Doc 03 v2.4.1 is the Approved baseline. By the project's established convention
(DES-093..DES-098 similarly housed in §10.13.x; cycle-2 review accepted G-TRACE removal for
FR-082..086, FR-122..124, FR-131..132 on this basis), DES-099 in §10.13.8 is sufficient to
classify FR-133 as G-PHASE3 only (not G-TRACE). No defect on this point.

**US-0131 verification.** Doc 05 v2.1.0 changelog confirms: "US-0131 minted under FE-009
(EP-03) implementing FR-130 (provisional-party membership cap, Must — Doc 02 v2.5.0 §4.44).
Status: Backlog (Not Ready pending DES)." RTM row correctly shows US-0131 and notes "Not
Ready pending DES." ✓

### 5.2 Must-accounting consistency (Doc 02 v2.13.0 vs Doc 08 v2.2.2)

| Source | FR Must count | NFR Must count | Total Must |
|--------|--------------|---------------|-----------|
| Doc 02 v2.13.0 §11 | 114 (changelog: "Must count stays at 114" at v2.13.0; 112→114 at v2.8.0 when FR-132/FR-133 minted) | 24 (NFR-001..007, 009..017, 020..025, 027..028 per §11) | 138 |
| Doc 08 v2.2.2 SUMMARY | 114 ("114 Must FR") | 24 ("24 Must NFR") | 138 |
| **Match?** | ✓ | ✓ | ✓ |

Doc 02's "Must count 114" refers to FR Must only (the NFR Must count is listed separately).
Doc 08's "114 FR + 24 NFR = 138 Must rows" is arithmetically and semantically consistent with
Doc 02. **No discrepancy.**

### 5.3 Arithmetic reproduction

| Check | Claimed | Recomputed | Match? |
|-------|---------|------------|--------|
| Total rows | 161 | 153 (pre-v2.2.2) + 8 new = 161 | ✓ |
| Must rows | 138 | 130 + 8 = 138 | ✓ |
| Open Must rows | 126 | 118 + 8 = 126 | ✓ |
| G-PHASE3 count | 47 | 46 (v2.2.1) + 1 (FR-133) = 47 | ✓ |
| G-TRACE count | 41 | 34 (v2.2.1) + 7 (FR-121, FR-125..FR-130) = 41 | ✓ |
| G-TRACE member count | 40 FRs + 1 NFR | FR-074..081 (8) + FR-087..111 (25) + FR-121 (1) + FR-125..130 (6) = 40 FRs; + NFR-007 = 41 | ✓ |
| By-reason sum | 127 | 47+10+9+5+6+4+5+41 = 127 | ✓ |
| NFR-007 double-count | 1 | 1 (G-TRACE + G-NOENV) | ✓ |
| Distinct open Must rows | 126 | 127 − 1 = 126 | ✓ |
| Completion rate | 8.7% | 12/138 = 8.696% ≈ 8.7% | ✓ |
| §6 FR-Must | 114 | 114 | ✓ |
| §9 gate verdict row | 12/138 | 12/138 | ✓ |
| §9 sign-off open Must | 126 | 126 | ✓ |
| Gate-rule footnote | 126 | 126 | ✓ |
| **§3.1 heading FR count** | **106** | **114** | **✗ (ISS-01)** |
| **Gate-2 verdict: Must rows** | **130** | **138** | **✗ (ISS-02)** |
| **Gate-2 verdict: open** | **118** | **126** | **✗ (ISS-02)** |
| **Gate-2 verdict: completion** | **9.2%** | **8.7%** | **✗ (ISS-02)** |
| **Gate-2 verdict: G-TRACE** | **33** | **41** | **✗ (ISS-02)** |
| **Gate-2 verdict: G-PHASE3** | **46** | **47** | **✗ (ISS-02)** |
| TC total (dashboard) | 397 | 397 (expanded: 388 anchors − 1 + 10) | ✓ |
| TC traced to NFR-011 | TC-2250..TC-2255 + TC-3488 | All listed in NFR-011 row ✓ | ✓ |
| Passing evidence | 143 (55 inh. + 88 obs.) | 55+88=143 | ✓ |
| Not executed | 254 | 397 − 143 = 254 | ✓ |

### 5.4 ISS-01 (cycle-2) closure — TC-3488 in NFR-011

NFR-011 forward trace row in §3.2 now reads: "TC-2250–TC-2255, TC-3488 | UT-0704, UT-0721
(two components, not executed); TC-3488 Pass (obs.) · UT-0753 (accessible-name aria-label,
packages/ui/test/PrivacyStatus.test.tsx line 46)". US-0132 is present in the US column ("US-0045,
US-0132"). The dashboard TC total 397 is consistent with this addition. **Closed.** ✓

### 5.5 ISS-02 (cycle-2) closure — absent Must FR rows

All eight previously absent Must FR rows are now present in §3.1 with complete chains and
correct gap codes. §6 FR-Must corrected from 106 to 114. §9 and gap-log preamble updated
to 126 open Must rows. Gap-log entries 119–126 added correctly. §7 v2.2.2 update note
present and accurate. **Closed.** ✓

### 5.6 Patch narrowness — v2.2.0 rows and prior content intact

All five v2.2.0 Must FR rows (FR-122, FR-123, FR-124, FR-131, FR-132) and their chains are
intact. Gap-log entries 114–118 from v2.2.0 unchanged. G-tag legend in SUMMARY intact. §9
dates and versions consistent. Backward-trace orphan check (§4) figures unchanged. ✓

### 5.7 Stale-figure survivorship check

Active-text grep for figures that should be zero in v2.2.2:

| Figure | Surviving occurrence | Defect? |
|--------|---------------------|---------|
| "106" in §3.1 heading | "Must FRs — the 106 gating functional rows" | **Yes — ISS-01** |
| "118" in gate-2 verdict paragraph | "12 close and 118 do not" | **Yes — ISS-02** |
| "130" in gate-2 verdict paragraph | "Of 130 gating Must rows" | **Yes — ISS-02** |
| "9.2%" in gate-2 verdict paragraph | "a 9.2% completion rate" | **Yes — ISS-02** |
| "33 rows" G-TRACE in gate-2 verdict | "33 rows carry G-TRACE" | **Yes — ISS-02** |
| "46 rows" G-PHASE3 in gate-2 verdict | "46 rows carry G-PHASE3" | **Yes — ISS-02** |
| "113" in §7 v2.0.0 update note | "Total open Must rows: 113" | No — historical record for v2.0.0 state |
| "113" as gap-log row number | Gap-log entry row number column | No — sequential entry ID, not a count |
| "118" in tester sign-off (§9) | Not found — reads "126 open Must rows" | No — correctly updated |
| "130" in §9 gate verdict table | Not found — reads "12/138" | No — correctly updated |

---

## 6. Closure confirmation — cycle-2 issues

| Cycle-2 Issue | Original finding | Closed? | Evidence |
|---------------|-----------------|---------|----------|
| ISS-01 (Medium, T2) | TC-3488 listed in dashboard/changelog but absent from NFR-011 forward trace row | **Yes** | NFR-011 row in §3.2 now reads "TC-2250–TC-2255, TC-3488" with evidence "TC-3488 Pass (obs.) · UT-0753". US-0132 added. Dashboard TC=397 consistent. |
| ISS-02 (Medium, T1) | FR-129 and FR-130 entirely absent from §3.1; Must FR count understated by ≥2 | **Yes (and swept)** | Eight rows added: FR-121, FR-125..FR-130, FR-133. Must FR 106→114; open Must 118→126; all chain elements verified against Doc 02, Doc 03, and Doc 05. |

---

## 7. Routing instruction

**FAIL — route to the owning role: tester.**

Required fixes (two Medium issues):

1. **(Medium — ISS-01)** Update the §3.1 section heading from "Must FRs — the **106** gating
   functional rows" to "the **114** gating functional rows."

2. **(Medium — ISS-02)** Update the Gate-2 verdict paragraph in the SUMMARY section to reflect
   v2.2.2 actuals: replace "Of 130 gating Must rows" → "Of 138 gating Must rows"; "12 close
   and 118 do not" → "12 close and 126 do not"; "9.2% completion rate" → "8.7% completion
   rate"; "33 rows carry G-TRACE" → "41 rows carry G-TRACE"; "46 rows carry G-PHASE3" → "47
   rows carry G-PHASE3." Verify the paragraph is internally consistent with the SUMMARY table
   and §9 gate verdict table after the edit.

The rework MUST produce a **new version** (bump `Version:` semver, set `Status: In Review`),
after which this review loop re-reviews at Cycle 4.

**Note for Cycle 4.** Both defects are narrow, cosmetic fixes (section heading count and
prose paragraph figures). If Cycle 4 confirms only these two changes were made and no new
issues were introduced, a PASS is achievable. 2 cycles remain (of 5).
