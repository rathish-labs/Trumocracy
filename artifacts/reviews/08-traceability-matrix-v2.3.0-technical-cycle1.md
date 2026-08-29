# Document Review Report — Doc 08 Traceability Matrix v2.3.0

> Produced by the **document-review** skill. Reviewer is NOT the document owner.
> Reviewer scores and lists issues only — no edits to the reviewed document.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.3.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — not the tester/document owner Ji-woo Park)
Score: 97%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 08 v2.3.0 (RTM-TRUMOCRACY, Status: In Review) was reviewed in technical mode against the
TS-MEMBERSHIP drop (US-0024 US-0025 US-0073 US-0131 US-0133). **Verdict: FAIL.** Despite a
strong score (97%) and correct treatment of every forward-trace row — FR-020/022 correctly
extended to COMPLETE; FR-021 correctly NOT extended; FR-122/123/131 correctly OPEN at G-PHASE3;
FR-130 correctly OPEN at G-TRACE; FR-064 correctly OPEN — the document contains one Medium
issue cluster that prevents PASS: a set of stale references that arose because the FR-064-SEMANTICS
product-owner ruling (Doc 02 v2.15.0 Approved, option (a) EXPLICIT-LEAVE) landed later on the
same day the document was authored. The ruling resolves the semantics half of the FR-064 gap
but leaves the DES-065 half open; the current document still says the ruling is "awaited" in
the gap note, the gap-log, and the §9 tester sign-off. Source pins are also stale (SRS v2.13.0
→ v2.15.0, CODE v2.3.2 → v2.3.3). One pre-existing Low issue (§6 Stories row "12" vs text "13")
persists from the v2.2.5 cycle-2 review and was not fixed in v2.3.0.

Test verification: `npm test -w @trumocracy/sdk` returned **220/220 passed** (vitest v3.2.7,
membership.test.js 22, party-creation.test.js 38) and `npm test -w apps/web` returned **71/71
passed** (join-membership.test.tsx 27, sdk-types-sync.test.ts 1). The §6 TC=449 and passing
evidence=195 (107 inh. + 88 obs.) figures are confirmed correct. The 542/542 full-suite claim
is independently supported by the above sub-suite runs (220 sdk + 71 web = 291 observable;
remainder via R-12 aggregate run documented in Doc 07 §9).

Hard-check results:

| Check | Result |
|-------|--------|
| Summary: 161 rows (138 Must + 23 Should/Could), 12/138 Must complete, 126 open, 8.7% | PASS ✓ |
| FR-020: COMPLETE — extended with TC-3517..3520, UT-0819/0820 sdk, UT-0858/0866 web | PASS ✓ |
| FR-022: COMPLETE — extended with TC-3521/3522/3526/3527/3536, UT-0823/0824/0829 sdk, UT-0860/0861 web | PASS ✓ |
| FR-021: NOT extended (no vote-weight or tally evidence in this drop) | PASS ✓ |
| FR-064: OPEN, G-PHASE3 (DES-065 membership-scope nullifier unbuilt, v2/Phase-3) | PASS ✓ |
| FR-122: OPEN, G-PHASE3 — extended TC-3530/3532/3533/3534; UT-0826/0828/0830 sdk, UT-0863/0864 web | PASS ✓ |
| FR-123: OPEN, G-PHASE3 — extended TC-3530/3531/3532/3533/3520; UT-0826/0827/0828/0830 sdk, UT-0863/0865/0866 web | PASS ✓ |
| FR-130: OPEN, G-TRACE — extended: cap proven binding on ACTIVE members (Ruling 1 2026-08-26 UNCONDITIONAL); leave frees slot; TC-3528/3529; UT-0825 sdk, UT-0862 web | PASS ✓ |
| FR-131: OPEN, G-PHASE3 — clause (d) built at parties-directory surface TC-3534/UT-0864; clause (b) TC-3535/UT-0869; TC-3481 stays Blocked (SCR-13/SCR-14) | PASS ✓ |
| §6 dashboard: TC=449 ✓; passing evidence=195 (107 inh.+88 obs.) ✓ | PASS ✓ |
| §9 gate verdict: 12/138 Must complete, 126 open, Gate 2 FAIL; 542/542 green cited | PASS ✓ |
| Gap-log entry 125 (FR-130): G-TRACE persists, no DES assigned, Must row OPEN — correct | PASS ✓ |
| Source pin SRS v2.13.0: stale; current Approved is v2.15.0 (amends FR-064 text to option (a)) | MEDIUM — ISS-01 |
| Source pin CODE v2.3.2: stale; current Approved is v2.3.3 (closes FR-064-SEMANTICS flag as RESOLVED (a)) | MEDIUM — ISS-01 |
| FR-064 Must row gap note: "a product-owner ruling in Doc 02 is owed" — ruling received | MEDIUM — ISS-01 |
| Gap-log entry 55: "awaiting a product-owner ruling in Doc 02" — ruling received | MEDIUM — ISS-01 |
| §9 tester sign-off: FR-064 "acquires a second blocker" — semantics blocker now resolved | MEDIUM — ISS-01 |
| §6 Stories row: "12 meet the Definition of Done \| 122" vs text "13 of 134 stories" — pre-existing v2.2.5 Low unfixed | LOW — ISS-02 |

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no — 1 Medium issue (ISS-01)**
- **Verdict:** `FAIL` — one Medium issue prevents PASS despite score ≥ 95%.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 100 | 20.0 | All 161 rows present. No requirement omitted or mislabelled. Forward-trace rows for FR-020/022/122/123/130/131 correctly extended; FR-021 correctly restrained. Summary 12/138 Must complete verified. |
| T2 Soundness | 20 | 96 | 19.2 | Row statuses are technically correct (FR-064 stays OPEN for DES-065 reason; FR-130 stays OPEN for G-TRACE). FR-021 restraint is the right call. Deduction: the FR-064 gap note's two-count reasoning is now partially stale — the semantics half was resolved by the product-owner ruling (SRS v2.15.0 Approved, option (a) EXPLICIT-LEAVE); only the DES-065 count remains. §9 tester sign-off saying FR-064 "acquires a second blocker" is now inaccurate (one blocker remains). |
| T3 Traceability & IDs | 20 | 94 | 18.8 | All TC/UT citations in new rows verified against source docs. All BR→FR→DES→US→TC chains intact for the nine join-flow rows. Source pins stale (SRS v2.13.0 / CODE v2.3.2). Gap-log entry 55 text stale: "awaiting a product-owner ruling in Doc 02" when the ruling has been recorded in SRS v2.15.0 Approved. |
| T4 Security & failure modes | 15 | 100 | 15.0 | No regression on security-relevant rows. FR-064/FR-130/FR-122/FR-123/FR-131 correctly remain OPEN. TC-3539 (interface-only seam guard) and TC-3540 (type shim sync) correctly reflected in FR coverage. PROVISIONAL_CAP_REACHED unconditional evidence (TC-3528, UT-0825) correctly cited. |
| T5 Completeness & testability | 15 | 100 | 15.0 | TC=449 ✓; 195 passing evidence (107 inh. + 88 obs.) ✓. §9 verdict table and 542/542 green claim verified. DoD check enumerates exactly 13 stories in text (correct). No placeholder rows. |
| T6 Convention compliance | 10 | 85 | 8.5 | Source pins stale (SRS v2.13.0 → v2.15.0, CODE v2.3.2 → v2.3.3). Gap-log entry 55 owner field and closes-at field partially stale post-ruling. §9 tester sign-off stale on FR-064 blocker count. Pre-existing Low: §6 Stories table cell "12" vs text "13" (v2.2.5 cycle-2 ISS-01, not fixed in v2.3.0). |
| **Total** | **100** | — | **96.5% → 97%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Medium | T2, T3, T6 | Header source pins; §3.1 FR-064 Must row gap note; §7 gap-log entry 55; §9 tester sign-off | **Stale references post-FR-064-SEMANTICS ruling.** The product-owner ruling on FR-064 semantics landed (Doc 02 v2.15.0 Approved, option (a) EXPLICIT-LEAVE, 2026-08-29 morning) after the document was authored. The document is a living governance record and is reviewed against the state of the repo at review time. Five stale references result: (a) Header source pin reads `SRS-TRUMOCRACY v2.13.0` — current Approved is v2.15.0, which amends FR-064's normative text to adopt option (a). (b) Header source pin reads `CODE-TRUMOCRACY v2.3.2` — current Approved is v2.3.3, which closes the `FR-064-SEMANTICS` flag in Doc 06 §7 #20 as `RESOLVED (a)`. (c) FR-064 Must row gap note says "a product-owner ruling in Doc 02 is owed" — the ruling has been received. (d) Gap-log entry 55 says "awaiting a product-owner ruling in Doc 02" and shows owner field as "product-owner (semantics ruling)" — same staleness. (e) §9 tester sign-off says FR-064 "acquires a second blocker" (implying two equal open counts) when the semantics count has been resolved and only the DES-065 count remains. The FR-064 Must row correctly stays OPEN (DES-065 membership-scope nullifier, v2/Phase-3, is still unbuilt) — but the description of WHY is now only half-accurate, which would mislead a reader checking the RTM for FR-064 status into thinking the product-owner ruling is still pending. | Produce Doc 08 v2.3.1 (new version, Status: In Review): (1) Update source pins to `SRS-TRUMOCRACY v2.15.0 Approved` and `CODE-TRUMOCRACY v2.3.3 Approved`. (2) Update FR-064 Must row gap note to record the SPLIT: semantics half RESOLVED by ruling (option (a) EXPLICIT-LEAVE, SRS v2.15.0 §4.6, 2026-08-29); DES-065 half still OPEN (v2/Phase-3 membership-scope nullifier unbuilt). FR-064 Must row stays OPEN pending DES-065. (3) Update gap-log entry 55 to show the SPLIT (close the "awaiting semantics ruling" sub-gap; keep the DES-065 sub-gap open with closes-at "DES-065: Phase 3"). (4) Update §9 tester sign-off to say FR-064 retains one remaining blocker (DES-065), the semantics blocker having been resolved by the product-owner ruling. Do NOT close the FR-064 Must row — the OPEN status is correct for the DES-065 reason. |
| ISS-02 | Low | T6 | §6 dashboard, row "Stories", columns "Complete" and "Gaps" | **Pre-existing Stories DoD count mismatch (v2.2.5 cycle-2 ISS-01 unfixed).** The §6 Stories row reads `12 meet the Definition of Done \| 122` while the text immediately below lists 13 stories by US number (US-0019, US-0021, US-0024, US-0025, US-0026, US-0027, US-0031, US-0033, US-0034, US-0035, US-0036, US-0037, US-0028). The v2.2.5 cycle-2 review (ISS-01 Low) instructed this to be fixed in the next maintenance increment; it was not addressed in v2.3.0. | In §6, update the Stories row to: `\| Stories \| 134 \| 134 (all carry Gherkin AC) \| **13** meet the Definition of Done \| **121** \|`. Must be included in the v2.3.1 rework required for ISS-01. |

> **Low** issues do not block the pass bar independently. However, the **Medium** issue (ISS-01)
> is sufficient to cause **FAIL** regardless of score. Both issues require correction in v2.3.1.

---

## 5. Routing instruction

**Verdict: FAIL.** Route to **Ji-woo Park (tester)** for rework:

1. Produce **Doc 08 v2.3.1** (bump minor version from v2.3.0, set `Status: In Review`).
2. Address ISS-01 (Medium) — update source pins, FR-064 gap note, gap-log entry 55, and §9
   sign-off to reflect the SPLIT: semantics half RESOLVED by ruling, DES-065 half OPEN.
   FR-064 Must row stays OPEN. Do not close the FR-064 row.
3. Address ISS-02 (Low) — update §6 Stories row from "12 \| 122" to "13 \| 121".
4. Submit v2.3.1 for cycle-2 technical-mode review.

This is cycle 1 of 5. Four rework cycles remain before escalation.
