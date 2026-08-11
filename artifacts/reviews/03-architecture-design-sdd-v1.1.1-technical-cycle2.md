# Document Review Report — 03 Architecture & Design (SDD) v1.1.1

> Produced by the **document-review** skill. Reviewer: **engineer** (neutral — does not own Doc 03; the architect owns it). This report scores and lists issues only; it does not edit the document.

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 1.1.1
Review mode: technical
Reviewer role: engineer (neutral — architect is the document owner)
Score: 98%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 03 v1.1.1 passes cycle 2. All four medium findings from cycle-1 (ISS-01..04) are genuinely fixed and verified against the document text. The vote() entry in §5.4 now carries the correct 5-signal arity `[snapshotRoot, snapshotAt, tenure, scope, Nₐ]` with indexed MUST checks; §10.3 is aligned to DES-078 at p95 interactive ≤ 5 s (the contradicting 3 s figure is gone); DES-068 now contains an explicit **Party-switch exclusion (FR-064)** clause that states the rejection rule unconditionally; and §10.3–10.9 all use RFC 2119 MUST/SHOULD/MAY keywords. The 5-signal arity is consistent at every occurrence in the document where signals are enumerated — no stale 4-signal reference was found. No regressions were introduced. One new low-severity observation: §14 uses lowercase "must" in two test-hook bullet points (lines 775–776), which is a style inconsistency but §14 was not in scope of ISS-04 and does not affect normative requirements.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`98%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 100 | 20.0 | All 54 Must FRs + 22 Must NFRs trace to a DES; DES-068 exclusion rule now complete |
| T2 Soundness | 20 | 97 | 19.4 | vote() arity fixed; ISS-01/03 resolved; §14 lowercase "must" (low only) |
| T3 Traceability & IDs | 20 | 100 | 20.0 | §5.3 and §5.4 consistent; no stale signal count; §18 contradiction record intact |
| T4 Security & failure modes | 15 | 100 | 15.0 | STRIDE table unchanged; §11 failure-mode table intact; DES-071 + ADR-018 coherent |
| T5 Completeness & testability | 15 | 97 | 14.6 | §10.3 now testable against DES-078; DES-068 now provides a derivable expected result |
| T6 Convention compliance | 10 | 97 | 9.7 | RFC 2119 in §10.3–§10.9; §14 lowercase "must" (2 bullets) noted as low; v1.1.1 changelog accurate |
| **Total** | **100** | — | **98.7% → 98%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | ~~Medium~~ | T1/T5 | §5.4 vote() row | VERIFIED FIXED. vote() now shows 5-signal arity `[snapshotRoot, snapshotAt, tenure, scope, Nₐ]` with `MUST check publicSignals[0] == proposal.snapshotRoot AND publicSignals[1] == proposal.createdAt`. §5.3 Governor struct annotates both signals with indexed fix labels. No stale 4-signal reference found anywhere in the document. | Closed. |
| ISS-02 | ~~Medium~~ | T2/T5 | §10.3 | VERIFIED FIXED. §10.3 reads: "Systems MUST meet the budgets defined in DES-078: initial JS ≤ 200 KB; p95 interactive ≤ 5 s on 4× throttled mid-range Android over Slow 4G; proof ≤ 10 s worst-case on reference device; finalisation on-chain ≤ 120 s p95." Exactly matches DES-078. The contradicting 3 s figure is absent. | Closed. |
| ISS-03 | ~~Medium~~ | T2/T5 | §5.2 DES-068 | VERIFIED FIXED. DES-068 now contains: "**Party-switch exclusion (FR-064):** a tenure clock reset by a party switch is NOT excused by the destination party's waiver — the waiver covers a party's founding cohort only, not members arriving by switch; a member who leaves party A and joins party B MUST be rejected at `vote()` if fewer than one month has elapsed since joining, unconditionally regardless of party B's age." Derivation of TC-3309 expected result is now fully supported. | Closed. |
| ISS-04 | ~~Medium~~ | T6 | §10.3–§10.9 | VERIFIED FIXED. RFC 2119 keywords (MUST, SHOULD, MAY) used consistently throughout §10.3 ("Systems MUST meet the budgets"), §10.4, §10.5, §10.6 ("No SLI MAY be derived"), §10.7, §10.8 (multiple MUST), §10.9. | Closed. |
| NEW-01 | **Low** | T6 | §14 lines 775–776 | Two test-hook bullet points use lowercase "must": "`snapshotRoot` binding in `vote()` must be tested" and "`isInRecovery` gate in `vote()` must be tested". ISS-04 addressed §10.3–§10.9; §14 was not in scope of that fix and carries forward the pre-existing lowercase usage. No normative RFC 2119 requirement is affected — §14 is descriptive test guidance, not a normative clause. | At the next version, update to uppercase MUST for consistency. Not a blocker. |

**Regression checks:**
- **5-signal vote() arity consistency:** verified at §5.3 (Governor struct comment), §5.4 (API table), and all other `vote()` references (§6.1 voting description, §10.7 fail-closed, §14 test hooks, §11 RISK-24 row). None specify a different arity; all are incidental references that do not conflict. PASS.
- **§18 OI-13 contradiction record:** intact, no regression. PASS.
- **§10.3 performance target:** single figure (5 s) with no contradicting value anywhere in the document. PASS.
- **DES-019 snapshotRoot binding:** unchanged from v1.1.0. PASS.
- **§5.3 "deliberate absence" list / data model:** unchanged. PASS.

---

## 5. Routing instruction

**PASS.** The architect (Ravi Deshmukh) MUST set `Status: Approved` on Doc 03 v1.1.1. The SOP may advance using this version as the authoritative architectural source.

The one Low issue (NEW-01, §14 lowercase "must") may be addressed at the next version opportunity; it does not require an immediate rework cycle.
