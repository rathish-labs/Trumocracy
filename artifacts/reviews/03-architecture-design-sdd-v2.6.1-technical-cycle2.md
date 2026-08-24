# Document Review Report — Doc 03 Architecture & Design (SDD) v2.6.1

> Produced by the **document-review** skill (shared capability, neutral reviewer — not the document owner).
> Reviewer: **neutral role** (document-review skill — NOT the architect who owns Doc 03; NOT the product-owner).

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.6.1
Review mode: technical
Reviewer role: neutral (document-review skill; sre role assigned as neutral reviewer — not the architect; not the product-owner)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 03 v2.6.1 closes all six issues from the cycle-1 FAIL (84%/0C/0H/3M/3L). The three
Medium defects are independently verified as resolved: the `status` field row in the DES-100
field table now says "used to determine COUNTING-tier eligibility (FR-123 actions)" (ISS-01);
the T-06 parenthetical in §10.13.7 correctly describes the `subject_id_hash` check as running
"at COUNTING-tier verification time across all sessions, not at account creation" and frames
the consequence as "cannot gain COUNTING-tier eligibility in two accounts using one government
ID" (ISS-02); and ADR-024 now carries the explicit "MUST NOT gate account creation or
party-join" invariant in its invariants table, a dated [AMENDMENT 2026-08-24] block
disambiguating the v1 "live session" backing, and the §12 ADR-024 row is annotated with the
2026-08-24 call-site placement amendment parallel to the ADR-025 treatment (ISS-03). All three
Low defects are also closed: `age_verified` in Doc 03 §10.13.9 now reads "at COUNTING-tier
government-ID verification" (ISS-04); the header source pin is v2.13.0 (ISS-05); and three
v2.6.x amendment trace rows are present in §15 for DES-095 amendment 3, DES-098 FR-131(d),
and DES-100 (ISS-06).

Two new Low findings are raised. ISS-A: the ADR-025 §(e) Q-1 allowlist table retains "Confirms
≥ 18 at signup" in the `age_verified` row — the same temporal label corrected in Doc 03
§10.13.9 by ISS-04, but not updated in ADR-025 by the [AMENDMENT 2026-08-24] block. ISS-B:
the §1.1 body prose still says "The SRS v2.12.0 defines..." while the header source pin
(ISS-05's fix target) was correctly updated to v2.13.0. Neither new finding is Medium or
above; neither blocks the pass bar. Honesty is fully preserved, `onePersonOneVote = false`
survived, the §(c-vi)/§(c-viii) distinction is uncorrupted, no IDs were deleted or
renumbered, and the surfaced items (v1 gate-date not yet set, naming-collision disambiguation
in §17) remain in place.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (`97%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — score above floor, zero critical/high/medium.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | ISS-01/02/04 fixes correct the DES-100 field table; ISS-06 §15 v2.6.x rows added (DES-095 amendment 3 + DES-098 FR-131(d) + DES-100); ISS-03 ADR-024 §12 annotation closes the traceability gap. New Low ISS-B (§1.1 prose v2.12.0) is a minor label residual only — counts are unchanged. |
| T2 Technical accuracy | 20 | 97 | 19.4 | All three pre-ruling temporal/framing errors fixed. New Low ISS-A (ADR-025 §(e) Q-1 `age_verified` "at signup") is a minor residual; the ADR-025 [AMENDMENT 2026-08-24] block correctly states call-site placement, so an implementer reading the amendment is not misled. |
| T3 Traceability completeness | 15 | 97 | 14.55 | ISS-03 §12 ADR-024 annotation present; ISS-05 header pin v2.13.0; ISS-06 §15 rows added. New Low ISS-B (§1.1 prose) is a minor residual — no functional traceability gap. |
| T4 Internal consistency | 20 | 96 | 19.2 | ISS-01/02/03 contradictions resolved. ADR-024 invariants table now matches Doc 03 §10.13.2. Minor residuals: ADR-025 Q-1 `age_verified` "at signup" inconsistent with Doc 03 §10.13.9 corrected label (ISS-A); §1.1 prose v2.12.0 vs header v2.13.0 (ISS-B). |
| T5 Implementation guidance adequacy | 15 | 97 | 14.55 | ADR-024 now carries the explicit normative invariant prohibiting call at account creation or party-join. ISS-01/02 fixes remove the misdirecting field-table label and T-06 framing. ISS-A residual is minor — the amendment block itself is normative and unambiguous. |
| T6 Risk and limitation disclosure | 10 | 99 | 9.9 | Exclusion residual in §10.13.9 is plain and names the affected populations. ADR-025 §(c-viii) pre-amendment text preserved in strikethrough. §(c-vi)/§(c-viii) distinction intact and uncorrupted. Gate-date incoherence (v1 gate date not yet set, §16) still surfaced. Naming-collision disambiguation (§17 Glossary layer vs party-tier notation) still present. |
| **Total** | **100** | — | **97.0% → 97%** | — |

---

## 4. Issues

### Cycle-1 closure verification (ISS-01..ISS-06)

| Prior ID | Cycle-1 severity | Closure status | Evidence |
|----------|-----------------|----------------|---------|
| ISS-01 | Medium | **CLOSED** | §10.13.9 field-level disposition table `status` row now reads: "Read; used to determine COUNTING-tier eligibility (FR-123 actions); not persisted." Sibling rows swept — no additional pre-ruling residuals found. |
| ISS-02 | Medium | **CLOSED** | §10.13.7 T-06 "Decision owed" column now reads: "cannot gain COUNTING-tier eligibility (FR-123) in two accounts using one government ID — the `subject_id_hash` check runs at COUNTING-tier verification time across all sessions, not at account creation." ACCEPTED — DEFERRED WITH DISCLOSURE status unchanged; multiple-legitimate-IDs residual intact; `getProperties().onePersonOneVote = false` unchanged. |
| ISS-03 | Medium | **CLOSED** | (a) ADR-024 invariants table: new row "verifyEligibility call-site placement (both backings — MUST NOT gate account creation or party-join)" with full normative statement for v1 and v2. (b) ADR-024 [AMENDMENT — 2026-08-24] block: present, dated, includes call-site placement rule, v1 "live session" disambiguation, v2 mirror, and explicit "MUST NOT" prohibition. (c) §12 ADR-024 row: annotated "amended 2026-08-24 (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md): verifyEligibility MUST be invoked at FR-123 COUNTING-action call sites; MUST NOT be called as a precondition of account creation or party-join; call-site placement is identical in v1 and v2; invariants table updated; v1 'live session' backing description disambiguated; [AMENDMENT 2026-08-24] block added — see ADR-024." Matches ADR-025 §12 annotation pattern. |
| ISS-04 | Low | **CLOSED** | §10.13.9 DES-100 allowlist table `age_verified` row now reads: "Confirms ≥ 18 at COUNTING-tier government-ID verification." |
| ISS-05 | Low | **CLOSED (header)** | Header source pin now reads "Source: SRS-TRUMOCRACY v2.13.0". Note: §1.1 body prose still says "The SRS v2.12.0 defines..." — a minor residual captured as new ISS-B (Low) below. |
| ISS-06 | Low | **CLOSED** | §15 "v2.6.x amendment trace rows" section added with three rows: DES-095 amendment 3 (FR-020, FR-122, FR-123; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md; ADR-024 [AMENDMENT 2026-08-24]); DES-098 amended (FR-131 clause (d) cross-reference); DES-100 amended (counting-gate correction; FR-020, FR-122, FR-123, FR-124 composition). All three trace rows are in house format consistent with prior v2.x sections. |

### New findings

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-A | **Low** | T2, T4 | ADR-025 §(e) Q-1 allowlist table, `age_verified` row | The allowlist table in ADR-025 §(e) Q-1 ("Stored fields — allowlist") retains: `age_verified | From provider checks.age_verified | Confirms ≥ 18 at signup`. Under the 2026-08-24 ruling, the government-ID document check runs at the COUNTING-action call site, not at account signup. Doc 03 §10.13.9 corrected the parallel row as ISS-04 (now reads "at COUNTING-tier government-ID verification"). The ADR-025 [AMENDMENT 2026-08-24] block correctly states the call-site placement rule and §(c-viii) is correctly rewritten; an implementer reading those sections will not be misled. However, the Q-1 table (operational design specification, not a verbatim ruling quote) retains the pre-ruling temporal label. This is inconsistent with the corrected Doc 03 allowlist and with the 2026-08-24 ruling. Classified Low because the amendment block is normative and unambiguous; the Q-1 table residual is a label inconsistency, not a normative requirement error. | Change `age_verified` Purpose cell from "Confirms ≥ 18 at signup" to "Confirms ≥ 18 at COUNTING-tier government-ID verification" to match the Doc 03 §10.13.9 corrected label and the 2026-08-24 ruling. |
| ISS-B | **Low** | T1, T3, T4 | §1.1 Requirements overview, body prose | The §1.1 body prose reads: "The SRS v2.12.0 defines 21 `BR`, 133 `FR` (131 active + 2 superseded; 114 Must), 28 `NFR` (24 Must), 15 `CON`, and 27 `RISK`." The header source pin (the ISS-05 fix target) was correctly updated to v2.13.0. The §1.1 body reference was not updated. No count change is needed (v2.13.0 adds Gherkin scenarios only, per the cycle-1 ISS-05 note and the changelog), so this is a version-label residual only. Classified Low — functionally harmless but inconsistent with the header. | Change "The SRS v2.12.0 defines" to "The SRS v2.13.0 defines" in §1.1 body prose. |

> **Low** issues (ISS-A, ISS-B) do not block the pass bar. There are zero Critical, High, or Medium issues.

---

## 5. Additional verification — rework-introduced-defect checks

### 5.1 Residual pre-ruling scan

Grep terms checked across full Doc 03 v2.6.1 and both ADRs post-rework:

- **`signup` / `sign-up`:** ADR-025 §(e) verbatim ruling quote ("phone (SMS) PLUS a government-ID document check at signup") — historical verbatim of the 2026-08-23 ruling, predates the 2026-08-24 correction; not a defect as quoted ruling text. ADR-025 §(e) Q-1 `age_verified` row "at signup" — ISS-A above. Doc 03: ISS-04 fix confirmed; no remaining normative "at signup" hits. ✓
- **`account creation`:** Doc 03 §10.13.9 pre-amendment marker at line 1452 ("this element previously described the check as 'before account creation'") — historical correction note, correctly marked `[Pre-amendment text — superseded 2026-08-24]`. All other `account creation` hits in Doc 03 body are either in the changelog (historical) or in normative corrected text explicitly saying "does NOT gate account creation" or "MUST NOT be called as a precondition of account creation". No problematic normative hits. ✓
- **`in one session`:** Not present in the T-06 "Decision owed" column. ISS-02 fix confirmed. ✓
- **`enrol` / `cannot enrol`:** All hits in Doc 03 body are in the ZK enrolment path context (which IS at account creation for the ZK path — correct) or in historical changelog entries correctly describing the pre-amendment scoping. ADR-025 §(c-viii) pre-amendment strikethrough text: "cannot enrol in v1" preserved in strikethrough for the public record — correct. No normative use of "cannot enrol" as a current exclusion outside the strikethrough notation. ✓
- **`gate account`:** No normative hits. ✓

### 5.2 Structural integrity checks

- **`onePersonOneVote = false` for v1:** Confirmed present in ADR-024 invariants table ("does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`)"), §10.13.7 T-06 row ("`getProperties().onePersonOneVote = false` unchanged"), and ADR-025 §(d) T-06 table. ✓
- **§(c-vi)/§(c-viii) distinction:** §(c-vi) carries "[UNCHANGED — 2026-08-24]" label with clarifying sentence distinguishing the two exclusions. §(c-viii) carries "[AMENDED — 2026-08-24]" with corrected text and pre-amendment strikethrough preserved. Distinction is intact and uncorrupted. ✓
- **No IDs deleted or renumbered:** DES-095, DES-096, DES-097, DES-098, DES-099, DES-100, ADR-024, ADR-025, T-06, T-07, T-08 all present and consistently numbered. ✓
- **Header/changelog coherence:** Version 2.6.1 at line 4; Status: In Review at line 6; v2.6.1 change entry present (lines 12–41); v2.6.0 history intact (lines 42–66); source pin v2.13.0 at line 10. ✓
- **ADR-024 ISS-03 sub-items verification:**
  - (a) Call-site invariant row in ADR-024 invariants table: present, with both v1 and v2 backing descriptions, citing DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md. ✓
  - (b) [AMENDMENT — 2026-08-24] block in ADR-024 body: present, includes call-site rule, "live session" disambiguation, v2 mirror, and "What is NOT changed" section. ✓
  - (c) §12 ADR-024 row annotation: present and parallel to ADR-025 annotation in format and dating. ✓

### 5.3 Honesty check

- §10.13.9 exclusion residual: "This is still a real and sharp limitation. The populations most likely to lack accepted government-issued ID documents — migrants, people in poverty, youth below document-issuance age, and those already marginalised from formal institutions — are the populations Trumocracy's mission specifically targets. A permanent non-counting class that disproportionately includes these populations is a genuine cost, not a hidden one." Honesty fully preserved. ✓
- ADR-025 §(c-viii): "What the government-ID gate does is create a permanent non-COUNTING class..." — populations named. ✓

### 5.4 Surfaced items still present

- **Gate-date incoherence:** §16 confirmations table: "v1 gate date | The existence of MS-V1-LRG as a separate v1 launch-readiness gate is confirmed as the mechanism; the date is NOT SET — an explicit approver value is still required." ✓ Still surfaced; not hidden.
- **Naming collision:** §17 Glossary distinguishes party T0..T3 tiers from Charter/Guarded/Open platform amendment layers (added v2.0.1 ISS-04). Still present per changelog. ✓

---

## 6. Routing instruction

**PASS — the architect (Ravi Deshmukh) SHOULD set `Status: Approved` on Doc 03 v2.6.1.**

The two Low issues (ISS-A and ISS-B) do not block the pass bar but SHOULD be corrected in the
next natural document revision:

1. **ISS-A (Low):** ADR-025 §(e) Q-1 allowlist table, `age_verified` Purpose cell — change "at signup" to "at COUNTING-tier government-ID verification."
2. **ISS-B (Low):** §1.1 body prose — change "The SRS v2.12.0 defines" to "The SRS v2.13.0 defines."

Neither requires a new version cycle before the SOP advances; they are SHOULD-fix items for
the next increment. The architect may address them in the next v2.6.x or v2.7.0 increment.

The SOP **advances** from the review-and-rework loop to the next phase.

---

## Appendix A — ISS-02 parenthetical — full verification

Cycle-1 ISS-02 required the T-06 parenthetical to be rewritten so that:
1. "Cannot create two accounts" → "cannot gain COUNTING-tier eligibility in two accounts" — corrects the implication that deduplication runs at account creation.
2. "In one session" removed — corrects the spurious session-scope qualifier.
3. Framing specifies COUNTING-tier verification time and cross-session persistence.

v2.6.1 T-06 "Decision owed" column text (independently read, line 1423):
> "Same-document deduplication (`subject_id_hash`) IMPROVES Charter Rule 1 enforcement
> (cannot gain COUNTING-tier eligibility (FR-123) in two accounts using one government ID —
> the `subject_id_hash` check runs at COUNTING-tier verification time across all sessions,
> not at account creation)."

All three requirements are satisfied. The ACCEPTED — DEFERRED WITH DISCLOSURE status label
in the "v1 status" column is unchanged. The multiple-legitimate-IDs residual ("Same-person-
with-multiple-government-IDs is not prevented") is intact. `getProperties().onePersonOneVote
= false` is unchanged. Deferred-with-disclosure reference to H-15/FR-132 §(d) is intact.
CONFIRMED CLOSED. ✓

---

## Appendix B — ADR-024 call-site invariant row — full text

ADR-024 invariants table (independently read), new row added by ISS-03 fix:

> | **`verifyEligibility` call-site placement (both backings — MUST NOT gate account creation
> or party-join)** | `verifyEligibility` MUST be invoked at the three FR-123 COUNTING-action
> call sites (strength-number contribution, binding-ballot admission, candidacy nomination);
> MUST NOT be called as a precondition of account creation or party-join. The "live session"
> in the v1 backing description means a session active at the time of the COUNTING action,
> not a session-establishment check at login. Account creation and party-join use FR-020 /
> FR-122 (phone verification only) — `verifyEligibility` is not called on those paths.
> (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md; see [AMENDMENT 2026-08-24] below.) |
> `verifyEligibility` MUST be invoked at the three FR-123 COUNTING-action call sites; MUST
> NOT be called as a precondition of account creation or party-join. The v2 backing routes
> through `ICredentialAdapter` → `PersonhoodRegistry` at COUNTING-action scope (DES-069,
> DES-070) — identical call-site placement to v1. (DECISIONS-2026-08-24-V1-ID-GATES-
> COUNTING.md.) |

This is the explicit normative invariant the cycle-1 ISS-03 finding required. Confirmed
present and accurate. ✓
