# Document Review Report

```
Reviewed document: 13-project-plan.md
Document version: 2.5.0
Review mode: business
Reviewer role: sre
Score: 91%
Critical: 0
High: 0
Medium: 2
Low: 0
Cycle: 1 of 5
Verdict: FAIL
```

**Reviewer:** sre (Chen Wei — Reliability Lead; neutral, non-owner; owner is project-manager)
**Review date:** 2026-08-23
**Upstream sources consulted:**
- `artifacts/status/DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md` — full read (§2 ruling, §3 architect deliverables, §4 confirmations table, §5 downstream changes, §6 open items)
- `docs/02-requirements-srs.md` v2.11.0 — Must count §11 (114); H-01..H-19 §16.4 (coordinator-confirmed)
- `artifacts/reviews/13-project-plan-v2.4.0-business-cycle2.md` — PASS 96%, 0C/0H/0M/0L (Approved)

---

## Issue table

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|-------------|
| ISS-01 | Medium | B4 | §6 RISK-31 (line 618); §6 RISK-33 (line 620) | Both rows cite `H-01`..`H-16` — stale since Doc 02 v2.11.0 expanded the honesty register to H-01..H-19. H-17 (vendor sees the document), H-18 (derived identifier retained), and H-19 (no government ID = no enrolment) are all directly relevant: H-18 covers the `subject_id_hash` / `phone_hash` at rest that RISK-31 governs; H-17/H-18/H-19 are the principal new honesty disclosures for the v1 identity-check layer that RISK-33 (mistaken-guarantee risk) mitigates. RISK-33's body text names "H-15 explicitly states no one-person-one-vote guarantee in v1; H-16 states phone number is stored" without mentioning H-17/H-18/H-19. The banner (line 68) and MS-V1-09 (line 390), PR-6 (line 473), PR-7 (line 474) were correctly updated to H-01..H-19; RISK-31 and RISK-33 were not. | Update RISK-31 H-register citation to `H-01`..`H-19`. Update RISK-33 H-register citation to `H-01`..`H-19`; update narrative to also name H-17/H-18/H-19 alongside H-15/H-16. |
| ISS-02 | Medium | B4 | §13.1 line 912 | The review-row evidence column shows "Doc 02 v2.10.0: ✅ PASS 100% — business mode, cycle 3 (Approved 2026-08-23)" as the most recent approved Doc 02 review. The current approved version is Doc 02 v2.11.0 (biz c1 PASS 99%, Approved 2026-08-23), correctly recorded in the §11 v2.5.0 re-plan log entry (line 856: "Upstream Approved: Doc 02 v2.11.0 (business c1 PASS 99%)"). The §11 entry also claims "§13.1 review row updated" — the row was partially updated (Doc 13 v2.4.0 PASS 96% and v2.5.0 In Review are correctly shown) but Doc 02's approved version was not refreshed. This creates a direct §11 ↔ §13.1 inconsistency. | Update §13.1 evidence column for the document-review row: change "Doc 02 v2.10.0: ✅ PASS 100% — business mode, cycle 3" to "Doc 02 v2.11.0: ✅ PASS 99% — business mode, cycle 1 (Approved 2026-08-23)". |

---

## Spot-check log (all checks passed)

### 1. Confirmations must match the decision record exactly (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4)

| Confirmation | Decision record §4 disposition | Doc 13 v2.5.0 location | Match? |
|---|---|---|---|
| T-01..T-05 Charter tensions | CONFIRMED — deferred-with-disclosure accepted | §3.5.5 line 501: "CONFIRMED by approver (2026-08-23)" | ✓ |
| FR-030/031/082/086 DEFERRED-v2 Musts | CONFIRMED — Definition-B-only; remain Must for v2 | §3.5.1 lines 346–348: "CONFIRMED by approver (2026-08-23)" | ✓ |
| NFR-009 v1 re-reading | CONFIRMED — one OWASP-class pen test for v1; two crypto audits stay for v2 | §3.5.4 lines 479–483: "CONFIRMED by approver (2026-08-23). NFR-009 specifies two independent audits for Definition B. For Definition A (v1), one OWASP-class pen test (PR-1) suffices" | ✓ |
| 2027-05-14 | CONFIRMED — Gate-2 referent for Definition B; closes "2027-03-15" carry-forward | §3.5.5 line 499: "CONFIRMED by approver (2026-08-23). Also closes the '2027-03-15' carry-forward" | ✓ |
| v1 gate date | NOT CLOSED — mechanism confirmed; date NOT SET | §3.5.5 line 500: "The specific date remains NOT SET — the approver listed this item but supplied no date. An explicit approver value is still required." | ✓ |

No inferred date for the v1 gate found anywhere in §3.5, §13.1, or §11. ✓

### 2. CON-015 critical-path reasoning

Decision record §6 states CON-015 is "more load-bearing" and "must be in hand ≥ 8 weeks before Gate 2" (= 2027-03-19 absolute). Gate 2 = 2027-05-14.

Doc 13 §3.5.3 (lines 427–434) states: CON-015 carries "≥ 8 weeks before Gate 2" (2027-03-19 absolute), status NOT STARTED. MS-V1-02 is the second build stage. If CON-015 is not started immediately, the legal opinion cannot clear in time to unblock S-2 before the 6-month left-end window closes. The document explicitly says: "CON-015 must start now; its 8-week lead time is no longer relative to Gate 2 — it is relative to the start of S-2 which is needed to meet even the 6-month left end."

**Reasoning is sound and significant.** CON-015's 8-week lead time initiated 2026-08-23 would clear ~2026-10-18 — before S-2 needs to begin (S-1 ~1 month, so S-2 starts ~2026-10-14 at best case). This makes the "start immediately" call correct. If CON-015 slips, the left end of the 6–10 month range slips with it; the right end is unaffected (legal opinion does not gate Definition-B's crypto critical path). This is a correct and significant finding, honestly stated. ✓

### 3. Effort-range change: 5–9 → 6–10 months

§3.5.3 (lines 419–442) reasoning:
- "+3–6 weeks of engineering in S-2" — characterised as first-principles estimate, not a structured re-estimate ✓
- Left end shifts right by one month; both ends widen by one month ✓
- Three drivers: DEP-13 (second vendor integration), DES-100 (retention/KMS discipline, allowlist/denylist, audit-log wiring), `subject_id_hash` dedup path ✓
- CON-015 gating — hard pre-condition for MS-V1-02 ✓
- Phone auth net-neutral (unchanged from prior reasoning) ✓
- Database vendor still open (no change) ✓
- "No formal v1 re-estimate artifact exists; this range revision is first-principles; it is not a plan commitment. Any appetite change is for the approver." ✓

No implied appetite change (CON-007 still the authority). Honest framing. ✓

### 4. RISK-40..43 — no ID collision; owner, scoring, mitigation; RISK-41 vs Doc 01 §E1

Prior register ran to RISK-39. RISK-40..43 are new at v2.5.0; no collision. ✓

| RISK | Description | L | I | Exp | Owner | §E1 / mitigation |
|------|-------------|---|---|-----|-------|------------------|
| RISK-40 | Vendor concentration / state-compulsion | 3 | 5 | 15 | Marcus Adeyemi | — |
| RISK-41 | No-retention clause failure vs Doc 01 §E1 | 3 | 5 | 15 | Sofia Marchetti | ✓ — "Doc 01 §E1 promise ('we do not keep your identity documents') is only delivered if the DEP-13 provider's contractual no-retention clause holds." Contractual no-retention clause framed as hard pre-condition. |
| RISK-42 | No-ID exclusion adoption impact on O-1 / KC-3 | 3 | 4 | 12 | Marcus Adeyemi | — |
| RISK-43 | Pepper/KMS compromise enabling brute-force | 3 | 5 | 15 | Rafael Duarte | — |

All four: owners named, L/I/exposure scored, mitigations present. RISK-41 §E1 framing accurate. ✓

### 5. H-01..H-19 consistency sweep (all citation sites in Doc 13)

| Location | Citation | Current? |
|----------|----------|---------|
| Banner (line 68) | "Honesty register H-01..H-19" | ✓ |
| MS-V1-09 (line 390) | "H-01..H-19 — includes H-17/H-18/H-19" | ✓ |
| PR-6 (line 473) | "H-01..H-19" | ✓ |
| PR-7 (line 474) | "H-01..H-19 from Doc 02 §16.4" | ✓ |
| RISK-31 (line 618) | "H-01..H-16" | ✗ STALE — ISS-01 |
| RISK-33 (line 620) | "H-01..H-16" | ✗ STALE — ISS-01 |
| RISK-39 (line 626) | "H-16" (specific item — phone-number requirement) | ✓ (specific reference, not range; H-16 still valid) |
| §3.5.6 T-06/T-07/T-08 | H-15/H-16/H-17/H-18/H-19 cited by specific ID | ✓ |

Two stale citations: RISK-31 and RISK-33 (ISS-01 above). All others current.

### 6. Standard regression checks

| Check | Location | Result |
|-------|----------|--------|
| v1 Must set = 110 (114 − 4 DEFERRED-v2) | §3.5.1 lines 343–348; PR-10 line 477 | ✓ 110 = 114 − 4; FR-030/031/082/086 named; FR-132/133 Must/IN-v1 confirmed |
| ADR range ADR-001..ADR-025 (ADR-025 amended, not replaced) | §2.1 line 122; header line 12 | ✓ "ADR-001…ADR-025" in both |
| DEP-13 numbering (sequential after DEP-11/DEP-12) | §3.5.3 line 415; MS-V1-02 line 383; RISK-40-43 | ✓ DEP-11/DEP-12/DEP-13 sequential, no gap |
| Gate-2 date 2027-05-14 CONFIRMED; v1 gate NOT SET | §3.5.5 lines 499–500 | ✓ Both correct; v1 date NOT SET with explicit "approver value still required" |
| RISK-32 auth description (phone SMS, no PKCE) | §6 RISK-32 line 619 | ✓ Unchanged from v2.4.0 (phone SMS OTP, PKCE absent) |
| T-06/T-07 status | §3.5.6 lines 509–510 | ✓ T-06 IMPROVED-not-closed; T-07 reshaped pending CON-015 — consistent with decision record §6 |
| T-08 (new tension: gov-ID vs BR-003/FR-020) | §3.5.6 line 511 | ✓ AWAITING APPROVER CONFIRMATION — correctly new and unconfirmed |
| T-01..T-05 CONFIRMED; DEFERRED-v2 Musts CONFIRMED; NFR-009 CONFIRMED | §3.5.1, §3.5.4, §3.5.5 | ✓ All five confirmations recorded; wording matches decision record §4 |
| "2027-03-15" carry-forward closed | §3.5.5 line 499 | ✓ "Also closes the '2027-03-15' carry-forward from the 2026-08-21 budget ruling" |
| PR-1 extended (ID-check flow, verify-and-discard audit, pepper/KMS) | §3.5.4 PR-1 line 468 | ✓ |
| PR-6 extended (H-17/18/19 disclosures, H-19 prominence) | §3.5.4 PR-6 line 473 | ✓ |
| PR-7 updated (H-01..H-19) | §3.5.4 PR-7 line 474 | ✓ |
| §11 v2.5.0 re-plan log entry accuracy | §11 line 856 | ✓ Entry comprehensive; all claimed changes traceable to document body; "§13.1 review row updated" partially correct (Doc 13 v2.4.0 and v2.5.0 In Review updated; Doc 02 v2.11.0 NOT updated — ISS-02) |
| RISK-35..39 unchanged (no regression) | §6 lines 622–626 | ✓ Unchanged from v2.4.0-approved content |
| RISK-32 (no regression) | §6 line 619 | ✓ Unchanged from v2.4.0-approved content |

---

## Per-criterion scores

| Criterion | Score | Weighted |
|-----------|-------|---------|
| B1 — Outcome & problem clarity (wt 20) | 93% | 18.60 |
| B2 — Completeness (wt 15) | 95% | 14.25 |
| B3 — Traceability & IDs (wt 20) | 97% | 19.40 |
| B4 — Correctness & consistency (wt 15) | 72% | 10.80 |
| B5 — Testability (wt 15) | 92% | 13.80 |
| B6 — Convention compliance (wt 15) | 97% | 14.55 |
| **Total** | | **91.40% ≈ 91%** |

**Score rationale:**
- **B1 93%:** Strong outcome metrics (11 O-metrics). O-1 adoption impact addressed in RISK-42. AWAITING items (T-06/T-07/T-08, v1 gate date NOT SET) properly disclosed.
- **B2 95%:** All sections present and filled. §3.5.6 extended for T-08. §5 DEP-13 added. §6 RISK-40..43 added. Minor: §13.1 partially stale (ISS-02 under B4 — not double-counted here).
- **B3 97%:** RISK-01..RISK-43 sequential, no gaps. ADR range correct. DEP-13 sequential. Named owners on all new RISK rows. FR/NFR/ADR/DES IDs properly cited throughout.
- **B4 72%:** Two Medium defects. ISS-01: RISK-31/33 cite stale H-01..H-16 — H-17/H-18/H-19 are directly relevant to both risk mitigations (derived-identifier storage for RISK-31; vendor disclosure and no-ID-exclusion for RISK-33's guarantee-mismatch risk). ISS-02: §13.1 evidence column shows Doc 02 v2.10.0 approved; current upstream-approved version is v2.11.0. Both are correctness/consistency defects against verified upstream artifacts.
- **B5 92%:** PR-1..PR-10 correctly updated. CON-015 critical-path reasoning sound. Effort-range change honest and first-principles. Kill criteria intact. T-08 documented. AWAITING items reduce testability completeness for the v1 gate path.
- **B6 97%:** ISO-8601 dates throughout. RFC 2119 applied. Named owners present. Re-plan log in correct descending order. House style consistent.

---

## Verdict

**FAIL** — Score 91% < 95% threshold; Critical: 0; High: 0; Medium: 2; Low: 0.

Two Medium defects both in B4 (correctness & consistency):
- **ISS-01:** RISK-31 and RISK-33 H-register citations stale (H-01..H-16 → H-01..H-19 required)
- **ISS-02:** §13.1 evidence column cites Doc 02 v2.10.0 as most recent approved; must be updated to Doc 02 v2.11.0 PASS 99% c1 (Approved 2026-08-23)

**Routing:** Project-manager (Ana-Maria Petrescu) to rework v2.5.0 → v2.6.0 (minor bump — two Medium defects). Mandatory: fix ISS-01 (RISK-31 and RISK-33 H-register range update + RISK-33 narrative mention of H-17/H-18/H-19) and fix ISS-02 (§13.1 Doc 02 version update). Set Status: In Review. Assign neutral reviewer for cycle 2.
