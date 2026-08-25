# Document Review Report — Doc 08 Traceability Matrix v2.2.1 · Technical · Cycle 2

> Produced by the **document-review** skill. NEUTRAL REVIEWER role: reviewer-qa (not the
> document owner; tester owns Doc 08). This reviewer scores and lists issues only — it never
> edits the reviewed document. All rework is done by the owning role (tester).

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.2.1
Review mode: technical
Reviewer role: reviewer-qa (neutral — not the document owner)
Score: 96%
Critical: 0
High: 0
Medium: 2
Low: 0
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 08 v2.2.1 was reviewed in technical mode as Cycle 2. Both cycle-1 issues are confirmed
closed: §9 now consistently states 118 open Must rows across all three locations (summary
table, sign-off row dated 2026-08-25 citing v2.2.1, and gate-rule footnote), and the
Stories=134 figure is verified correct against Doc 05 (baseline 131 including US-0131 minted
in Doc 05 v2.1.0, plus US-0132/0133/0134 = 134). The five Doc-08 FR rows from v2.2.0, all
TS-SCAFFOLD rows and Blocked statuses, and G-TRACE=34 / G-PHASE3=46 are intact. **FAIL**
because v2.2.1 introduces two new Medium defects. First, TC-3488 is claimed as synced in the
v2.2.1 changelog and dashboard (TC total 396→397), but the NFR-011 forward trace row in §3.2
(line 252) does not list TC-3488 — the actual traced TC count is 396, not 397, making the
dashboard overclaimed by 1. Second, a pre-existing gap first surfaced in this cycle:
FR-129 (Must, Doc 02 v2.4.0) and FR-130 (Must, Doc 02 v2.5.0) are completely absent from
the §3.1 forward trace, yet both are confirmed Must rows in the SRS the RTM pins to (v2.13.0);
the Must FR count is understated by at least 2 (claimed 106, should be ≥108) and the open
Must row count is correspondingly understated (claimed 118, should be ≥120).

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
| T1 Requirement coverage | 20 | 90 | 18.0 | FR-129 and FR-130 (both Must per Doc 02 changelog v2.4.0 and v2.5.0) are absent from §3.1 forward trace; Must FR count understated by ≥2; open Must row count understated by ≥2 (see ISS-02) |
| T2 Traceability chain integrity | 20 | 90 | 18.0 | TC-3488 is stated as synced in the changelog and reflected in the dashboard TC total (397) and sign-off note, but the NFR-011 forward trace row (§3.2, line 252) still shows "TC-2250–TC-2255" only — TC-3488 is absent; actual traced TC count = 396 (see ISS-01) |
| T3 Test evidence quality | 20 | 100 | 20.0 | G-TRACE=34 and G-PHASE3=46 verified; five new FR rows from v2.2.0 (FR-122/123/124/131/132) intact with correct TC ranges; gap-code log entries unchanged; no false-complete conversions |
| T4 Arithmetic accuracy | 15 | 100 | 15.0 | By-reason total 46+10+9+5+6+4+5+34=119; NFR-007 double-counted in G-TRACE+G-NOENV → 118 distinct open ✓; 118 open Must rows in summary table consistent with §9 sign-off and gate-rule footnote ✓; 143 with passing evidence (55 inh. + 88 obs.) ✓; 254 not executed ✓ |
| T5 Status discipline | 15 | 100 | 15.0 | §9 tester sign-off: "118 open Must rows" dated 2026-08-25 v2.2.1 ✓; gate-rule footnote: "There are 118 open Must rows. The gate stays shut." ✓; both stale "113" references from cycle-1 are resolved |
| T6 Documentation quality | 10 | 100 | 10.0 | Well-structured; gap-code log clear; dashboard layout consistent; changelog documents the v2.2.1 changes accurately |
| **Total** | **100** | — | **96%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Medium | T2 | §3.2 NFR-011 forward trace row (line 252); §6 dashboard TC total; v2.2.1 changelog | The v2.2.1 changelog states "TC-3488 synced from Doc 07 v2.2.1" and the §6 dashboard reflects a TC total of 397 (up from 396), but the NFR-011 forward trace row in §3.2 still reads "TC-2250–TC-2255 \| UT-0704, UT-0721 (two components, not executed)" — TC-3488 is not listed. The dashboard TC count is overclaimed by 1: actual forward-traced TC count = 396; claimed = 397. The gap also means NFR-011's traceability is incomplete in the RTM even though Doc 07 correctly traces it. | Add TC-3488 (and its UT mapping UT-0753) to the NFR-011 forward trace row in §3.2. If TC-3488 has passing evidence (14/14 UI run confirmed), update the NFR-011 status accordingly. Ensure the dashboard TC total (397) remains consistent with the corrected row. |
| ISS-02 | Medium | T1 | §3.1 forward trace (absent rows); §6 dashboard Must FR count (106); §9 open Must row count (118) | FR-129 (Must, minted Doc 02 v2.4.0: "§11: Must count 109→110") and FR-130 (Must, minted Doc 02 v2.5.0: "FR-130 minted (Must, §4.44); §11 Must count 110→111") are confirmed Must rows in the SRS version the RTM pins to (Doc 02 v2.13.0) but are entirely absent from the §3.1 forward trace. The claimed Must FR count of 106 is understated by at least 2 (should be ≥108). Every absent Must FR implies at least one open Must row, so the open Must row count of 118 is also understated by at least 2 (should be ≥120). Both are gate-blocking figures. Note: this gap is pre-existing and was not introduced by v2.2.1; it first surfaced in this cycle-2 review. | Add RTM rows for FR-129 and FR-130 to §3.1 with their full forward chains (DES, US, TC, UT, status). Update §6 Must FR count from 106 to at minimum 108. Update §9 open Must row count from 118 to the correct figure (≥120 assuming both new rows are open). Recheck the gate-rule footnote and tester sign-off accordingly. |

> **Low** issues do not block the pass bar. **Medium** forces a FAIL.

---

## 5. Closure confirmation — cycle-1 issues

| Cycle-1 Issue | Original finding | Closed? | Evidence |
|---------------|-----------------|---------|----------|
| ISS-01 (Medium, T5) | §9 sign-off row and gate-rule footnote stated "113 open Must rows" while current version has 118 | **Yes** | §9 tester sign-off row (line 575) now reads "Submitted — 118 open Must rows recorded" dated 2026-08-25, citing v2.2.1. Gate-rule footnote (line 584) now reads "There are 118 open Must rows. The gate stays shut." Both are internally consistent with the summary table and gate-verdict table. |
| ISS-02 (Low, T4) | Stories count shown as 134 but cycle-1 arithmetic 130+3=133 | **Yes — verified correct** | Doc 05 v2.1.0 changelog confirms US-0131 was minted (§2 story count: 130→131), making the Doc 05 baseline at v2.1.0 = 131 stories. 131 + 3 (US-0132, US-0133, US-0134) = 134. Stories=134 is correct; cycle-1 used a stale baseline of 130. The v2.2.1 verification note recording this check is present. |

---

## 6. "113" survivorship check

Active text grep for "113" in Doc 08 v2.2.1:

| Location | Content | Defect? |
|----------|---------|---------|
| Line 460 (§7 historical update note) | "v2.0.0 update… Total open Must rows: 113" | No — historical record, correctly describes the state at v2.0.0 |
| Line 509 (gap log, row number column) | "\| 113 \| NFR-028 \|" — the number 113 is a gap-log entry row number | No — this is a sequential row number in the gap log, not a count |

Both surviving "113" occurrences are non-defects. No stale active-text reference to "113 open Must rows" remains.

---

## 7. Arithmetic reproduced (hard-check verification record)

| Check | Claimed | Recomputed | Match? |
|-------|---------|------------|--------|
| G-TRACE count | 34 | Independently verified | ✓ |
| G-PHASE3 count | 46 | Independently verified | ✓ |
| By-reason sum | 119 (distinct open 118) | 46+10+9+5+6+4+5+34=119; NFR-007 double-counted → 118 | ✓ |
| Must FR rows | 106 | 106 claimed — but FR-129/FR-130 absent; actual ≥108 (ISS-02) | ✗ (understated) |
| Open Must rows | 118 | 118 claimed — understated by ≥2 given ISS-02; actual ≥120 | ✗ (understated) |
| Stories | 134 | 131 (Doc 05 v2.1.0 baseline) + 3 (US-0132/0133/0134) = 134 | ✓ |
| TC total | 397 | Dashboard claims 397 but NFR-011 row omits TC-3488 → actual traced = 396 (ISS-01) | ✗ (overclaimed by 1) |
| Passing evidence | 143 (55 inh. + 88 obs.) | 55+88=143 | ✓ |
| Not executed | 254 | 397−143=254 | ✓ (based on claimed 397; actual 396 would give 253) |
| §9 open Must rows consistency | 118 at all three §9 sites | Sign-off: 118 ✓; footnote: 118 ✓; summary table: 118 ✓ | ✓ |

---

## 8. Routing instruction

**FAIL — route to the owning role: tester.**

Required fixes:
1. **(Medium — ISS-01)** Add TC-3488 (and UT-0753) to the NFR-011 forward trace row in §3.2.
   Verify the dashboard TC total (397) is consistent with the corrected row.
2. **(Medium — ISS-02)** Add FR-129 and FR-130 rows to §3.1 with complete forward chains.
   Update Must FR count, open Must row count, gate-rule footnote, and tester sign-off to
   reflect the corrected figures (≥108 Must FRs, ≥120 open Must rows).

The rework MUST produce a **new version** (bump `Version:` semver, set `Status: In Review`),
after which this review loop re-reviews at Cycle 3.
