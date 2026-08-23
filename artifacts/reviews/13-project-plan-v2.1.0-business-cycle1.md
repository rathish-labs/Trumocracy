# Document Review — Doc 13 Project Plan v2.1.0 — Business Mode — Cycle 1

```
Reviewed document: docs/13-project-plan.md
Document version: 2.1.0
Review mode: business
Reviewer role: sre (acting as neutral reviewer; document-review skill)
Score: 84%
Critical: 0
High: 1
Medium: 2
Low: 2
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 13 v2.1.0 applies the 2026-08-23 v1/v2 delivery-split directive (Rathish, transmitted via
coordinator) and records the Definition A (v1) delivery plan in a new §3.5, additive §3.1 and §3.3
annotations, RISK-31..RISK-34, and a §11 re-plan log entry. The increment is well-structured and
honest: AWAITING APPROVER CONFIRMATION is correctly applied to the v1 gate date, Gate-2 re-scoping,
and NFR-009 re-reading; the §3.1 original text is preserved intact; the 2027-05-14 Definition-B
Gate-2 date is not changed. **Verdict: FAIL.** Three blocking issues were found:

1. **High** — RISK-22..RISK-30 are entirely absent from the §6 risk register table. The register
   claims to be the "single living risk register of record" and the final paragraph of §14 states
   "Doc 02 §10 and Doc 03 §13 reference these IDs and keep no competing copy." Grep confirms these
   nine IDs do not appear anywhere in Doc 13; the table jumps directly from RISK-21 to RISK-31.
2. **Medium** — The v1 Must set arithmetic in §3.5.1 and PR-10 does not balance: "106 IN-v1 FRs +
   19 PARTIAL FRs + FR-131 = 112 Must requirements" evaluates to 126, not 112.
3. **Medium** — PR-7 and MS-V1-09 explicitly name only H-01..H-06 but Doc 02 v2.7.0 (Approved
   2026-08-23) §16.4 now contains H-01..H-14; the v1 readiness bar understates the honesty-register
   requirement by eight items.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (84%)
- Critical = 0? **Yes** · High = 0? **No** · Medium = 0? **No**
- **Verdict:** `FAIL` — the score is below the 95% threshold AND there are one High and two Medium
  issues. Either condition alone would force a FAIL.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1 Outcome & problem clarity** | 20 | 92 | 18.4 | Re-plan purpose clearly stated; effort range correctly presented as a range with explicit assumptions and a "not a plan commitment" label; AWAITING APPROVER CONFIRMATION items properly flagged; 2027-05-14 Gate-2 date retained for Definition B. Minor deduction: the v1 Must set arithmetic confusion (ISS-M1) partially obscures the actual v1 delivery scope that feeds the outcomes in §1. |
| **B2 Completeness** | 15 | 70 | 10.5 | All required v2.1.0 additions present: header/banner, §3.5 sub-sections, §3.1 and §3.3 annotations, RISK-31..34, §11 entry. Major gap: RISK-22..RISK-30 absent from §6 register table (ISS-H1). Medium gap: PR-7/MS-V1-09 honesty-register range incomplete (ISS-M2). Low gap: §13.1 review-status row not updated for v2.1.0 pending status (ISS-L2). |
| **B3 Traceability & IDs** | 20 | 78 | 15.6 | New IDs (MS-V1-01..MS-V1-09, MS-V1-LRG, RISK-31..RISK-34, PR-1..PR-10) are correctly structured and non-colliding with existing IDs; all new IDs carry named owners. ISS-H1 (missing RISK-22..30) breaks the register-of-record claim that downstream documents use as their normative source. ISS-M1 makes the v1 RTM-gap scope ambiguous. ISS-M2 means H-07..H-14 are not traceable to the v1 readiness bar. |
| **B4 Correctness & consistency** | 15 | 80 | 12.0 | Classification tallies (106/19/4/2 FRs; 24/3/1 NFRs) match DECISIONS-2026-08-23-V1-V2-SPLIT.md §3. §3.1 original text preserved intact with additive annotation. §3.3 correctly enumerates which Gate-2 conditions are replaced for v1 (items 3, 4, 9) and which carry forward. Honesty discipline: no silent Gate-2 date change; all three AWAITING APPROVER CONFIRMATION items correctly marked. ISS-M1 (arithmetic inconsistency in §3.5.1 and PR-10). ISS-L1: source block cites SRS v2.6.0; approved version is v2.7.0. |
| **B5 Testability** | 15 | 90 | 13.5 | Kill criteria (KC-1..KC-7, KC-P1..KC-P3) unchanged. PR-1..PR-10 readiness items are specific, owner-named, and verifiable. Pre-existing Gate-2 blockers (CON-015, Doc 04 review debt, RTM catch-up) are carried forward as PR-8, PR-9, PR-10 and confirmed in the §3.3 annotation. Build-order dependency logic is sound (S-1..S-3 sequential; S-4/S-5 parallel after S-3; S-6/S-7 parallel after S-4/S-5; S-8 concurrent from S-3; S-9 final). ISS-M1 (the ambiguous v1 Must set count of 112 vs the arithmetic-correct 108) affects the precise definition of what PR-10 RTM-zero-gaps requires. |
| **B6 Convention compliance** | 15 | 91 | 13.65 | Header: v2.1.0 / In Review / 2026-08-23 correct. Source: DECISIONS-2026-08-23-V1-V2-SPLIT.md added. §11 re-plan log: v2.1.0 entry present at top of table, dated, with change description and all source citations. RISK-31..34 carry named individual owners. RFC 2119 and ISO-8601 usage throughout. ISS-L1: header Source cites "SRS-TRUMOCRACY v2.6.0" and §2.1 cites "SRS v2.6.0 §11"; approved version is v2.7.0. |
| **Total** | **100** | — | **84%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-H1 | **High** | B2, B3 | §6 Risk register table (the entire section) | RISK-22..RISK-30 (9 entries) are completely absent from the Doc 13 §6 risk register table. Grep confirms no instance of RISK-22 through RISK-30 appears anywhere in Doc 13. The table jumps directly from RISK-21 (line 525) to RISK-31 (line 527). RISK-22..RISK-24 were minted in Doc 02 v1.1.0 (recovery-flow risks) and RISK-25..RISK-30 in Doc 02 v2.0.0 (steward/governance risks). Section §6 claims to be the "single living risk register of record" and §14 states that "Doc 02 §10 and Doc 03 §13 reference these IDs and keep no competing copy." With 9 entries absent from the canonical register, (a) the register-of-record claim is false, (b) the downstream documents reference IDs that have no owner, exposure, or mitigation entry in the plan, and (c) RISK-31..34 are being added on top of an incomplete register. | Project-manager must add RISK-22..RISK-30 to the §6 table in the correct ordinal position (between RISK-21 and RISK-31). Each entry must include the ID, risk description, L, I, Exposure, Mitigation/trigger, Carried-by, Owner, and Status fields consistent with the existing format. The source definitions in Doc 02 §10 (v1.1.0 for RISK-22..24; v2.0.0 for RISK-25..30) provide the content to migrate. The §6 header note "RISK-17…RISK-21 are new at Doc 13 v1.0.0" should also be updated to acknowledge the subsequent additions. |
| ISS-M1 | **Medium** | B4, B3 | §3.5.1 ("In scope for v1" bullet), §3.5.4 PR-10 | The v1 Must set arithmetic is internally inconsistent. §3.5.1 states "106 IN-v1 FRs + 19 PARTIAL FRs (v1 forms) + FR-131 (honesty notice, Must) = 112 Must requirements in the v1 Must set." The arithmetic 106 + 19 + 1 = 126, not 112. PR-10 in §3.5.4 repeats the claim: "(IN-v1 106 + PARTIAL v1 forms 19 + FR-131 = 112)." Neither instance can produce 112 from those addends. Additionally, §3.5.1 lists 4 DEFERRED-v2 FRs as "Not in scope for v1" — if those 4 FRs were Must-priority in Doc 02 (FR-030, FR-031, FR-082, FR-086 were all minted as Must), the v1 Must set would be 112 − 4 = 108, not 112. No consistent arithmetic interpretation of the stated numbers produces 112. The DECISIONS-2026-08-23-V1-V2-SPLIT.md §3 gives the classification tallies (106/19/4/2 for all 131 FRs) but does not state the Must-only subset for each category, leaving the arithmetic unverifiable. | Project-manager must determine the correct v1 Must set count (the number of Must-priority FRs that are IN-v1 or PARTIAL v1-form, explicitly excluding the 4 DEFERRED-v2 Must FRs) and correct the stated count in §3.5.1 and PR-10 to reflect the verified number. If the intent is that the v1 Must set = 108 (112 total Must minus 4 DEFERRED Must), state "108 Must requirements in the v1 Must set" and explain the derivation: 112 (total Must, Doc 02 v2.7.0 §11) minus 4 DEFERRED-v2 Must FRs (FR-030, FR-031, FR-082, FR-086) = 108. PR-10 should use the same corrected count. The description of the classification breakdown (106 IN-v1 / 19 PARTIAL / 4 DEFERRED / 2 SUPERSEDED) correctly reflects all 131 FRs and should be kept; the arithmetic claim about the Must subset is what needs to be fixed. |
| ISS-M2 | **Medium** | B2, B4 | §3.5.2 MS-V1-09 ("open-source readiness items (README honesty register H-01..H-06, contribution docs, licence)"); §3.5.4 PR-7 ("README honesty register (H-01..H-06 from Doc 02 §16.4)") | Both locations explicitly name only H-01..H-06. Doc 02 v2.7.0 (Approved 2026-08-23, the Approved version as of this review) §16.4 contains H-01..H-14 — H-07..H-14 were added in v2.7.0 (ISS-02 rework from the v2.6.0 cycle-1 FAIL) to close the H?=Y gaps for FR-002, FR-034, FR-048, FR-059, FR-063, FR-103, FR-124, and NFR-024. An engineer following Doc 13 as the standard for open-source readiness will implement H-01..H-06 and miss H-07..H-14. The omission is in the body of both items — the "(H-01..H-06 from Doc 02 §16.4)" reference in PR-7 does cite the source section, but the explicit enumeration to H-06 overrides the intent of the reference in practice. | Update §3.5.2 MS-V1-09 and §3.5.4 PR-7 to reference the full honesty register H-01..H-14 as defined in Doc 02 v2.7.0 §16.4. Specifically: in MS-V1-09 change "README honesty register H-01..H-06" to "README honesty register H-01..H-14"; in PR-7 change "(H-01..H-06 from Doc 02 §16.4)" to "(H-01..H-14 from Doc 02 §16.4, current approved version v2.7.0)". |
| ISS-L1 | Low | B6 | Header Source block; §2.1 | The header Source block cites "SRS-TRUMOCRACY v2.6.0 (docs/02-requirements-srs.md)" and §2.1 cites "SRS v2.6.0 §11". The Approved version of Doc 02 is v2.7.0 (Status: Approved, 2026-08-23). The Must count (112) is identical in v2.6.0 and v2.7.0, so the stale reference is functionally low-risk. Doc 13 v2.1.0 and Doc 02 v2.6.0/v2.7.0 were produced on the same date; the version in the Source block reflects the state at authoring time. | Update header Source to "SRS-TRUMOCRACY v2.7.0 (docs/02-requirements-srs.md)" and §2.1 to reference "SRS v2.7.0 §11". |
| ISS-L2 | Low | B2 | §13.1 "Passing document-review reports for Docs 01, 02, 05, 13" row | The §13.1 document-review status row still references "Doc 13 v2.0.3: ✅ PASS 97%" as the most recent passing review. Since v2.1.0 is now In Review (pending cycle 1), the row should note that v2.1.0's cycle-1 review is outstanding. The "Docs 01, 02, 05: ❌ passing business-mode review reports not yet produced" sub-note is also stale — all three now have passing reviews (Doc 01 v2.0.0 PASS 97%, Doc 02 v2.7.0 Approved, Doc 05 v2.1.0 pending) — though updating the gate packet contents is a broader pre-existing housekeeping issue. | In §13.1 update the Doc 13 document-review row to note "v2.1.0: cycle-1 business-mode review pending" and update the Docs 01/02/05 note to reflect their current review status. |

> **Low issues do not block the pass bar.** The two Low issues above do not force a FAIL. The one High
> and two Medium issues each independently force a FAIL.

---

## 5. Specific checks (as briefed)

### 5.1 Source fidelity — key figures verified against reference artifacts

| Claim in Doc 13 v2.1.0 | Expected (from reference artifact) | Status |
|---|---|---|
| Classification: IN-v1 106 / PARTIAL 19 / DEFERRED-v2 4 / SUPERSEDED 2 FRs | DECISIONS-2026-08-23-V1-V2-SPLIT.md §3: identical | ✓ |
| Classification: NFR IN-v1 24 / PARTIAL 3 / DEFERRED-v2 1 (NFR-003) | DECISIONS-2026-08-23-V1-V2-SPLIT.md §3: identical | ✓ |
| FR-131 as honesty notice, Must, SCR-13/SCR-14, DES-098 | Doc 02 v2.7.0 §4.45; Doc 03 v2.3.1 §10.13.6 | ✓ |
| DES-095 IEligibilityVerifier, DES-096 IBallotService, DES-097 package disposition, DES-098 honesty notice | Doc 03 v2.3.1 §10.13 / ADR-024 | ✓ |
| ADR-024 — v1/v2 delivery split: seam interfaces | docs/adr/ADR-024-v1v2-delivery-split-voting-identity-seams.md (Accepted) | ✓ |
| T-01..T-05 Charter-layer tensions cited but not resolved | DECISIONS-2026-08-23-V1-V2-SPLIT.md §4(c) | ✓ |
| v1 Must set = 112 | 106+19+1 = 126; DEFERRED-v2 (4 Must FRs) excluded → 112−4=108 | ✗ ISS-M1 |
| H-01..H-06 in PR-7 and MS-V1-09 | Doc 02 v2.7.0 §16.4 has H-01..H-14 | ✗ ISS-M2 |
| RISK-31..34 new — register ran to RISK-30 | RISK-22..RISK-30 absent from §6 table (grep confirms) | ✗ ISS-H1 |
| Gate-2 date 2027-05-14 UNCHANGED | GATE-STATUS-2026-08-09.md (2026-08-23 section); DECISIONS record §4(d) | ✓ |
| v1 gate date NOT SET — AWAITING APPROVER CONFIRMATION | DECISIONS-2026-08-23-V1-V2-SPLIT.md §4(d) | ✓ |
| NFR-009 re-reading AWAITING APPROVER CONFIRMATION | DECISIONS-2026-08-23-V1-V2-SPLIT.md §4(e) | ✓ |

### 5.2 Honesty discipline

| Check | Status |
|---|---|
| §3.1 "Why Phase 3 is the launch" original text preserved intact | ✓ — text begins "BR-011 and NFR-003 (receipt-freeness) are Must..."; additive annotation immediately follows |
| §3.1 annotation correctly attributes to Rathish directive and DECISIONS record | ✓ |
| §3.3 Gate-2 annotation: items 3, 4, 9 replaced for v1; all others apply to both Definitions | ✓ — replaces items 3 (ZK audits), 4 (ceremony transcripts), 9 (MACI committee); "all other items… apply to both Definitions" ✓ |
| §3.5.3 effort range: presented as range with stated assumptions, not as plan commitment | ✓ — "No formal v1 re-estimate has been produced... This is a reasoning-from-record range; it is not a plan commitment." Assumptions table includes explicit N/A entries for tech-stack and security-review scheduling |
| §3.5.4 PR-1..PR-10 pre-existing Gate-2 blockers carried forward | ✓ — CON-015 in PR-8; Doc 04 review debt in PR-9; RTM catch-up in PR-10; §3.3 annotation confirms both Definitions |
| §3.5.4 NFR-009 lighter-bar claim appropriately marked as recommendation | ✓ — "plan recommendation; only the approver can ratify the re-reading. AWAITING APPROVER CONFIRMATION." |
| §3.5.5 v2 re-entry: Gate-2 2027-05-14 attaches to Definition B; date not changed | ✓ |
| No silent Gate-2 date change | ✓ — §11 re-plan log explicitly states "Gate-2 date 2027-05-14: UNCHANGED" |
| 16 contradiction-surface items not silently reconciled | ✓ — "T-01..T-05 Charter-layer tensions surfaced for the approver, not reconciled" |

### 5.3 Build-order dependency logic (§3.5.2)

| Check | Status |
|---|---|
| S-1..S-3 sequential (foundations → identity → party lifecycle) | ✓ — Sequencing note explicit |
| S-4 (membership) and S-5 (voting + FR-131) parallel after S-3 | ✓ |
| S-6 (candidate) and S-7 (manifesto + dashboards) parallel after S-4/S-5 | ✓ |
| S-8 (audit-record anchoring) concurrent from S-3 onward | ✓ |
| S-9 (hardening + beta) as final pass | ✓ |
| DES-095/DES-096 seam interfaces committed before v1 auth/ballot code (RISK-34) | ✓ — MS-V1-01 explicitly requires interface definitions committed before any v1 implementation code |

### 5.4 RISK-31..RISK-34 spot-check

| Check | Status |
|---|---|
| RISK-31 owner named | ✓ Rafael Duarte |
| RISK-32 owner named | ✓ Rafael Duarte |
| RISK-33 owner named | ✓ Nadia Hassan |
| RISK-34 owner named | ✓ Samuel Oyelaran |
| All four carry L/I/Exposure scores | ✓ |
| All four carry Mitigation/trigger entries | ✓ |
| Top v1 risks by exposure identified in narrative | ✓ (RISK-31 and RISK-33 at 16; RISK-32 and RISK-34 at 15) |
| IDs non-colliding with RISK-01..RISK-21 (the extent of the Doc 13 register) | ✓ — No collision with entries present; note RISK-22..RISK-30 absent from register (ISS-H1) |

### 5.5 §11 re-plan log

| Check | Status |
|---|---|
| v2.1.0 entry present as first row | ✓ |
| Dated 2026-08-23, authored by Ana-Maria Petrescu | ✓ |
| All material changes listed: header, §2.1, §3.1, §3.3, §3.5, §6 RISK-31..34, §11 | ✓ |
| Key AWAITING APPROVER CONFIRMATION items named | ✓ (v1 stack, 16 contradictions, T-01..T-05, v1 gate date, NFR-009 re-reading) |
| Gate-2 date 2027-05-14 UNCHANGED noted | ✓ |
| Source cited (DECISIONS-2026-08-23-V1-V2-SPLIT.md, Doc 03 v2.3.1, Doc 02 v2.6.0) | ✓ |
| §11 entry notes Doc 02 v2.6.0 "In Review" correctly at time of writing | ✓ (Doc 02 became v2.7.0 Approved subsequently) |

### 5.6 Prior-strength spot-check

| Check | Status |
|---|---|
| Gate-2 date MS-13 = 2027-05-14 | ✓ Unchanged throughout |
| MS-08 = 2027-01-25 (batched ceremony, off critical path) | ✓ Unchanged |
| §3.4 critical path dates and long-lead table | ✓ Unchanged from v2.0.3 |
| §8.3 budget figures (≈ USD 4,025,000 / ≈ USD 175K contingency) | ✓ Unchanged from v2.0.3 |
| §13.3 L2 lever "≈ USD 4.03M; ≈ USD 175K (~4%)" | ✓ Unchanged from v2.0.3 |
| RISK-01..RISK-21 content | ✓ Unchanged |
| RISK-18, RISK-19 cross-references | ✓ Unchanged |
| CON-007 appetite at USD 4.2M | ✓ |
| KC-1..KC-7, KC-P1..KC-P3 | ✓ Unchanged |
| Endorsed-floor constants and UT-05xx IDs (not in Doc 13) | ✓ Not present — not touched |

---

## 6. Routing instruction

**FAIL — route to the owning role (project-manager, Ana-Maria Petrescu) for rework.**

The rework MUST produce a new version (bump Version semver by at least a minor increment: v2.1.0 →
v2.2.0; set Status: In Review). This review loop then re-reviews the new version as cycle 2 of 5.

**Mandatory fixes (must resolve ISS-H1, ISS-M1, ISS-M2 before a PASS verdict is possible):**

1. **ISS-H1 (High):** Add RISK-22 through RISK-30 to the §6 risk register table in the correct
   ordinal position between RISK-21 and RISK-31. Source content from Doc 02 §10 (v1.1.0 entries
   RISK-22..24; v2.0.0 entries RISK-25..30). Each entry must include ID, description, L, I, Exposure,
   Mitigation/trigger, Carried-by, Owner, Status. Update the §6 header note to acknowledge these
   additions.

2. **ISS-M1 (Medium):** Determine and state the correct v1 Must set count in §3.5.1 and PR-10.
   Derivation: 112 total Must FRs (Doc 02 v2.7.0 §11) minus 4 DEFERRED-v2 Must FRs (FR-030,
   FR-031, FR-082, FR-086) = 108 Must FRs in the v1 Must set. Replace "= 112 Must requirements" with
   the correct count and show the derivation explicitly. Verify consistency between §3.5.1 and PR-10.

3. **ISS-M2 (Medium):** In §3.5.2 MS-V1-09 change "README honesty register H-01..H-06" to
   "README honesty register H-01..H-14"; in §3.5.4 PR-7 change "(H-01..H-06 from Doc 02 §16.4)" to
   "(H-01..H-14 from Doc 02§16.4, v2.7.0 Approved)".

**Recommended fixes (Low issues — do not block the pass bar, may be folded into the above rework):**

4. **ISS-L1:** Update header Source to "SRS-TRUMOCRACY v2.7.0" and §2.1 to reference "SRS v2.7.0 §11".

5. **ISS-L2:** Update §13.1 document-review row to note v2.1.0 cycle-1 pending status and update
   Docs 01/02/05 note to reflect current approved/passing review states.

The project-manager does not approve this document. Once reworked, the PM assigns a neutral reviewer
to run cycle 2.

---

*Reviewed by: sre (acting as neutral reviewer, document-review skill; the project-manager (Ana-Maria
Petrescu) owns Doc 13 and was not involved in this review)*
*Date: 2026-08-23*
*Cycle: 1 of 5 — FAIL*
