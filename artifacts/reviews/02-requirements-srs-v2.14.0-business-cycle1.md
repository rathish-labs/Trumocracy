# Document Review Report — Doc 02 Requirements Specification v2.14.0

> Produced by the **document-review** skill (shared capability — not a ninth agent). Neutral
> reviewer: **architect** (independent of Doc 02, which is owned by the product-owner). The
> reviewer scores and lists issues only; the owning role (product-owner) does all rework.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.14.0
Review mode: business
Reviewer role: architect
Score: 94%
Critical: 0
High: 0
Medium: 1
Low: 0
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 02 v2.14.0 is a pure annotation-and-normative-home pass applying four approver rulings
(Rathish Kumar, 2026-08-26; DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md). All four rulings
are applied faithfully: FR-130's cap annotated UNCONDITIONAL, the non-violence clause text
established as a verbatim normative home in §4.22, the FR-013 re-petition cooldown given its
30-day policy value, and all four lesser deferrals recorded in §13. The three-way clause text
comparison (decision record §2, constants.js lines 165-168, Doc 02 §4.22) yields a verbatim
match. The FR-119 citation in the §4.22 normative block is judged faithful. One Medium defect
remains: the v2.14.0 increment updated FR-130's own TC status annotation but left two
cross-references inside FR-131's text that still group FR-130 with the "TC OPEN — Phase 3"
set, creating an internal contradiction the product-owner must resolve before this version
can be approved.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`94%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No** (1 Medium)
- **Verdict:** `FAIL` — score below 95% and 1 Medium finding.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 97 | 19.40 | No regression; outcome, metrics, and problem statement intact and unchanged |
| B2 Completeness | 15 | 93 | 13.95 | All four ruling sites present; §11/§12/§13 header updated; minor miss: FR-131 cross-ref not updated |
| B3 Traceability & IDs | 20 | 96 | 19.20 | No new IDs minted; counts verified (Must 114, FR 133, BR 21, NFR 28); all citations trace to real artifacts |
| B4 Correctness & consistency | 15 | 82 | 12.30 | Internal contradiction: FR-131 groups FR-130 with TC OPEN — Phase 3 while FR-130's own updated annotation says TC-3511..3516 pass |
| B5 Testability | 15 | 96 | 14.40 | No Gherkin change required; normative RFC 2119 language correct; cooldown value explicit |
| B6 Convention compliance | 15 | 97 | 14.55 | RFC 2119 throughout; ISO-8601 dates correct; named owners on all requirements; house annotation style followed |
| **Total** | **100** | — | **93.80% → 94%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Medium | B4 | §4.45 FR-131 annotation preamble (line ~1006) and §4.46 FR-131 requirement text (line ~1010): phrases "same recorded-phasing posture as FR-121..FR-130. TC OPEN — Phase 3" | The v2.14.0 increment correctly updated FR-130's own annotation to note "TC-3511..TC-3516 now exist and pass (Doc 07 v2.2.2 Approved; implementation IS_INSECURE_MOCK=true)." However two companion phrases in FR-131's annotation and requirement text still group FR-130 in the "TC OPEN — Phase 3" set, which implies FR-130's test cases do not yet exist. This is false — they exist and pass. The RTM Must row for FR-130 remains OPEN, but for a G-TRACE/DES-gap reason, not TC absence. The contradiction misleads a reader about FR-130's test coverage. | In both locations replace "FR-121..FR-130. TC OPEN — Phase 3" with "FR-121..FR-129. TC OPEN — Phase 3" (removing FR-130 from the group), or add a parenthetical noting that FR-130's TCs now pass while its RTM Must row remains OPEN for a G-TRACE reason (no DES in Doc 03 §5.2; production store pending DES-097). |

---

## 5. Hard-check results (per review assignment)

### 5.1 Ruling fidelity

| Ruling | Applied faithfully? | Notes |
|--------|-------------------|-------|
| Ruling 1 — FR-130 cap UNCONDITIONAL | Yes | FR-130 normative MUST text is UNAMENDED (annotation only); 60-day grace explicitly stated as "NEVER adopted into this requirement and is explicitly NOT part of v1"; built code cited (`PROVISIONAL_MEMBER_CAP = 100`, lift via `recordLegalRegistration()` only). |
| Ruling 2 — Non-violence clause ratified as-is | Yes (see §5.2 for clause-text comparison and §5.3 for FR-119 judgment) | Verbatim text established as normative block in §4.22; frozen-before-first-party-adoption note present; CLAUSE-TEXT-01 closed. |
| Ruling 3 — Re-petition cooldown 30 days | Yes | 30-day value explicitly stated in FR-013's annotation; constants.js line 186 cited and verified (`REPETITION_COOLDOWN_SECONDS = 30 × 86 400 s`); fingerprint definition stated; COOLDOWN-01 closed. |
| Ruling 4 — Lesser deferrals tracked | Yes | All four sub-items (a)–(d) present in new §13 table; descriptions match Ruling 4 verbatim; owners assigned; statuses correct (OPEN). |

### 5.2 Three-way clause text comparison

Three sources compared character-by-character:

**Decision record §2 (Ruling 2 verbatim, DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md):**
> "This party will act through peaceful and lawful means only. No member may use, encourage, or support any form of violence in any activity connected to this party."

**constants.js lines 165-168 (assembled string):**
> "This party will act through peaceful and lawful means only. No member may use, encourage, or support any form of violence in any activity connected to this party."

**Doc 02 §4.22 normative block (v2.14.0):**
> "This party will act through peaceful and lawful means only. No member may use, encourage, or support any form of violence in any activity connected to this party."

**Result: MATCH — all three sources carry the identical text verbatim.**

### 5.3 FR-119 citation judgment

The §4.22 normative block states: "any later change is a breaking amendment requiring its own
process (FR-119 super-process governs Tier-2 named absolutes; CON-013 is a named absolute —
see §14 glossary and §4.39)."

The ruling text (Ruling 2 verbatim) says: "any later change is a breaking amendment requiring
its own process." The decision record §3.2 analysis says: "Any subsequent change is a breaking
amendment requiring its own process (ADR-010 protocol governance action and a new frozen
constant)."

**Judgment: FAITHFUL — the FR-119 citation is not an unauthorized strengthening.**

Reasoning: CON-013 was classified as a Tier-2 named absolute by the approver (OI-18 decision,
Rathish, 2026-08-11; memory note project-manager-2026-08-11T1500; "Tier 2 (super-process):
BR-011/NFR-003, CON-002/CON-008/NFR-010, CON-012, CON-013"). FR-119 explicitly lists
"non-violence clause (CON-013)" as a Tier-2 named absolute, amendable only via the super-
process specified in Doc 03. The PO's annotation therefore cross-references an existing,
approver-ratified governance classification — it adds no new restriction not already established
at OI-18. The ruling's "its own process" is already defined in Doc 02 as FR-119 Tier-2 super-
process for CON-013. The §3.2 analysis's reference to "ADR-010" addresses the code-layer
governance action (changing the frozen constant); the PO's annotation addresses the platform-
rule governance layer (changing the requirement that the clause appear verbatim). Both are
required to change the clause; the annotation accurately describes the platform-governance
process. No defect.

### 5.4 Citation integrity

| Claim | Verified? | Evidence |
|-------|-----------|---------|
| Decision record path `DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md` | Yes | File exists at `artifacts/status/DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md`; read in full |
| TC-3511..TC-3516 exist and pass in Doc 07 v2.2.2 | Yes | Doc 07 v2.2.2 §5.4 and row TC-3511..TC-3516 confirm: "inherited Pass from Doc 06 v2.2.0"; Doc 07 header: v2.2.2, Status: Approved |
| RTM row for FR-130 OPEN G-TRACE / no DES assigned | Yes | Doc 07 v2.2.2 TC-3511 note: "FR-130 has no DES assigned in Doc 03 §5.2 (G-TRACE); the Must row stays OPEN until DES is assigned" — consistent with annotation |
| Doc 07 v2.2.2 Approved | Yes | Tester note `tester-2026-08-26T1000.md`: "Doc 07 v2.2.2 Status flipped to Approved" |
| Doc 08 v2.2.5 Approved | Yes | `document-reviewer-2026-08-26T1000.md` PASS, 98%, 0C/0H/0M/1L; PM note `project-manager-2026-08-26T1600.md` confirms Status: Approved |
| CON-013 in §9.1 | Yes | Line 2582 of Doc 02 shows CON-013 in the constraints table; §16 references confirm §9.x is the constraints section |
| OI-04 tracked in §13 | Yes | §13 table row (a) references OI-04 and notes OI-04-PILOT (India/Aadhaar) resolved while seed-list design remains open |
| DES-073 v2 gap in §13 | Yes | §13 table row (d) describes absence of collision check in `PartyRegistry.openPetition`; consistent with Ruling 4 (d) |
| `REPETITION_COOLDOWN_SECONDS` at constants.js line 186 | Yes | Read directly: `export const REPETITION_COOLDOWN_SECONDS = 30 * DAY;` at line 186; DAY = 86_400 → 2 592 000 s = 30 days |

### 5.5 Stale-pin sweep

| Check | Result |
|-------|--------|
| §11 count label | PASS — updated from "v2.13.0" to "v2.14.0" |
| Active text `2.13.0` pins | PASS — all remaining v2.13.0 occurrences are in historical changelog records, Gherkin scenario provenance labels (e.g. "# Scenario 5: FR-131 clause (d) — open-tier non-counting disclosure notice (v2.13.0 ISS-03)"), or version-provenance annotations on individual requirements — none require updating |
| FR-130 "TC OPEN — Phase 3" everywhere | FAIL — two locations in FR-131's text still carry the now-stale grouping that includes FR-130 in the Phase-3-pending TC set (ISS-01) |
| Doc 07 / Doc 08 version citations | PASS — v2.2.2 / v2.2.5 both confirmed Approved |

### 5.6 Count verification

| Metric | Doc 02 §11 claim | Verified against |
|--------|-----------------|-----------------|
| Must FR count | 114 | §12 session scope note, v2.14.0 PO memory note; consistent at all sites |
| FR minted total | 133 (131 active + 2 superseded) | §11 table and §12 base; consistent |
| BR | 21 | §12 and PO memory note |
| NFR | 28 | §12 and PO memory note |
| New FRs minted v2.14.0 | 0 | Confirmed; annotation only pass |

### 5.7 Silent normative-change check

Diff of `docs/02-requirements-srs.md` (working tree uncommitted) reviewed hunk by hunk:

- Header: version/status/dates/changelog updated — no normative text
- FR-013 (§4.4): the MUST-language sentence is unchanged; a new italic annotation appended in parentheses
- FR-077 (§4.22): the two table rows (FR-077, FR-078) are unchanged; a new normative block added AFTER the table — the normative block is an ADDITION, not a rewrite of existing text
- FR-130 (§4.44): MUST-language is character-identical to v2.13.0; only the inline italic annotation was replaced
- §11 count label: prose sentence updated (label only, no requirement change)
- §12 changelog: new session-scope entry added at the bottom of the existing entries
- §13: new "Tracked deferrals" table appended after existing §13 content

**Result: PASS — no silent rewrite of normative MUST/SHALL/SHOULD text outside the commissioned edits.**

---

## 6. Routing instruction

**FAIL** — route to the **product-owner** (Priya Raghunathan) for rework.

Required action for v2.14.1:
1. Fix ISS-01: In both FR-131's preamble annotation (~line 1006) and FR-131's requirement text (~line 1010), replace the phrase "same recorded-phasing posture as FR-121..FR-130. TC OPEN — Phase 3" with either:
   - "same recorded-phasing posture as FR-121..FR-129. TC OPEN — Phase 3" (removing FR-130 from the group, since FR-130's TCs now pass), or
   - "same recorded-phasing posture as FR-121..FR-129. TC OPEN — Phase 3. (Note: FR-130 TCs — TC-3511..TC-3516 — now pass per Doc 07 v2.2.2; FR-130's RTM Must row remains OPEN for G-TRACE reasons — no DES assigned in Doc 03 §5.2.)"
2. Bump version to v2.14.1, set `Status: In Review`, update `Last updated` to rework date.
3. Submit for cycle-2 review.

This is a Low-effort rework (two-line change; no normative text affected). A patch semver bump (v2.14.0 → v2.14.1) is appropriate (Low+ issue only).

---

## 7. Human decision at the cap (ESCALATED only)

_Not applicable — cycle 1 of 5._
