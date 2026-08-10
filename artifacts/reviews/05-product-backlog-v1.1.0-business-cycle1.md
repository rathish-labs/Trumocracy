# Document Review Report — 05 Product Backlog v1.1.0 (Trumocracy)

> Produced by the **document-review** skill. The reviewer **scores and lists issues only — it never
> edits the reviewed document**. All rework is done by the owning role (**product-owner —
> Priya Raghunathan**) as a new version.

```
Reviewed document: 05-product-backlog.md
Document version: 1.1.0
Review mode: business
Reviewer role: technical-writer (neutral — not the owning role for Doc 05)
Score: 82%
Critical: 0
High: 1
Medium: 5
Low: 5
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 05 v1.1.0 adds 8 features (FE-029..036), 13 stories (US-0071..0083) and 3 screens (SCR-21..23) faithfully implementing CR-v1.1.0 Changes 1–9. Every new story carries a named individual, correct FR traces, a well-structured adversarial or negative scenario, and correct dependencies. The SCR range conflict with Doc 02 is fixed (both now agree on SCR-23). The §12 Must-FR coverage map is correctly extended to FR-062..073. The document **fails** this cycle primarily because the one High defect from v1.0.0 cycle 1 — NFR-007 (availability ≥ 99.5%) uncovered by any story or non-functional backlog item — is still unresolved. Five Medium issues persist or are newly introduced: the FE-002/FR-005 internal contradiction; the wrong FR-026 on SCR-10; inherited unfalsifiable "better than chance" phrasing in US-0007 and US-0038; unset OI-08 constants used as specifications in six story ACs; and a new scope inconsistency introduced in v1.1.0 between FR-066's "major election" restriction and EP-07/US-0076's "every/any election" language.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`82%`)
- Critical = 0? **yes** · High = 0? **no** (1) · Medium = 0? **no** (5)
- **Verdict:** `FAIL`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 88 | 17.60 | Walking-skeleton definition is excellent. EP-07 outcome hypothesis updated for debates and no-auto-renomination. Minor dock for the "every vs major election" ambiguity in EP-07's success metric (ISS-06). |
| B2 Completeness | 15 | 85 | 12.75 | All 54 Must FRs now covered. 13 new stories all filled with owners, ACs and dependencies. §8 NF items unchanged; NFR-007 still has no story or NF item (ISS-01). |
| B3 Traceability & IDs | 20 | 75 | 15.00 | New FRs all correctly mapped. SCR range aligned with Doc 02 (prior ISS-05 fixed). §12 FR coverage map properly extended. ISS-02 (FE-002 claims FR-005 while §12 declares it unstoried) and ISS-03 (SCR-10 still lists FR-026) persist. ISS-09 (SCR-18 missing FR-044) persists. |
| B4 Correctness & consistency | 15 | 70 | 10.50 | ISS-06 (new scope inconsistency: FR-066 "major election" vs EP-07/US-0076 "every/any election"). ISS-08 (refinement cadence) persists. ISS-07 (point-total base) partially addressed by "approximately" qualifier but still incorrect. |
| B5 Testability | 15 | 80 | 12.00 | ISS-04 (unfalsifiable "better than chance" inherited from Doc 02). ISS-05 (unset OI-08 constants in six ACs) persist. New stories have strong adversarial ACs; FR-063 mandates UT-0700/UT-0701 in the AC; FR-068 cites UT-0220. ISS-11 (US-0080 missing ICAO Doc 9303 scenario) is new. |
| B6 Convention compliance | 15 | 93 | 13.95 | Named individual owners on every new story. ID sequence clean. No design decisions leaked into stories. "Approximately" qualifier on total points is more honest than the prior exact-but-wrong figure. ISS-10 (WSJF sequencing rationale) persists at Low. |
| **Total** | **100** | — | **82%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **High** | B2/B3 | §8 NF items (NF-01..NF-08); §2 coverage assertion; §12 Must-FR map | NFR-007 (Reliability/Availability: citizen write path ≥ 99.5% monthly, public read ≥ 99.9%, no single operator failure blocking a citizen governance action for more than 60 min) still appears in no story, no FE mapping and no NF item. §2 asserts "All 54 Must FRs in Doc 02 v1.1.0 are covered by at least one story" but makes no Must-NFR coverage claim; no Must-NFR → story/NF coverage map has been added to §12. NFR-007 is a Must with a customer-visible promise in Doc 01 §C and an outcome row in Doc 13 §1; an uncovered Must NFR is a guaranteed open Must row at Gate 2. Confirmed by tester memory note (artifacts/tester-2026-08-10T1000.md): "NFR-007 gap retains G-NOENV + G-TRACE (no backlog item — not a DES gap)." Carried from v1.0.0. | Add a story or NF item for NFR-007 (availability SLO instrumentation, error budget, single-operator-failure drill) with a named owner and priority Must. Add a Must-NFR → story/NF coverage map to §12 mirroring the Must-FR map. |
| ISS-02 | **Medium** | B3 | §5 FE-002 row ("Maps to: FR-004, **FR-005**, NFR-004 — Stories US-0004–0005") vs §12 "Known gaps: **FR-005** (credential revocation and appeal)… have no story yet" | Internal contradiction carried from v1.0.0: FE-002 claims FR-005 (credential revocation, invalidation and appeal) in its Maps-to column; §12 explicitly declares FR-005 unstoried. Neither US-0004 nor US-0005 mentions revocation or appeal. A reader taking §5 at face value believes FR-005 is delivered; §12 says the opposite. | Remove FR-005 from FE-002's Maps-to column until a story exists. Verify every other FE Maps-to column against §12's known-gaps list. |
| ISS-03 | **Medium** | B3/B4 | §7 SCR-10: "Party home & aggregate membership — FE-010 — Implements FR-020, **FR-026**" | SCR-10 still lists FR-026 (mandatory timelock between a proposal passing and taking effect). FR-026 is a proposal-governance requirement; it belongs on SCR-12 (Proposal list & detail), which already cites it. The party-home/aggregate-membership screen plausibly implements FR-020 (join without approval) or FR-021 (equal standing), not a timelock. A wrong FR on a screen propagates into the RTM's SCR reconciliation. Carried from v1.0.0. | Remove FR-026 from SCR-10's Implements column; verify all §7 Implements columns against §5 and §6. |
| ISS-04 | **Medium** | B5 | US-0007 AC ("cannot determine, **better than chance**, whether the two actions came from one person or two"); US-0038 AC ("no cast ballot can be linked to its voter **better than chance**") | Both inherit Doc 02's unfalsifiable phrasing (Doc 02 ISS-03). No adversary capability set, trial count N, advantage bound ε, or confidence 1−δ is defined. These are the backlog's two highest-weight privacy stories (21 points combined) and neither AC can be passed or failed by a tester as written. Carried from v1.0.0. | Once Doc 02 restates FR-002/FR-030/NFR-001 with defined adversary-game parameters, mirror the parameters into these two ACs. Do not leave the stories vaguer than the requirement they implement. |
| ISS-05 | **Medium** | B5 | US-0022 ("the published dwell period"), US-0029 ("a maturation period that has not elapsed"), US-0035 ("a 14-day timelock"), US-0036 ("the published minimum age"), US-0058 ("a published recall bar of 60%"), US-0059 ("a published 30-day grace window") | Six stories use unset OI-08 constants as if they were specifications. The numbers 14 days, 60%, 30 days appear in Gherkin ACs without being marked as non-normative examples. A story cannot satisfy the Definition of Ready — "Gherkin AC written" — if the AC's threshold is an anecdote. Carried from v1.0.0. | Mark all illustrative numbers as "(example — non-normative; story not Ready until OI-08 closes)". Add a "Blocked pending OI-08" note to each affected story. |
| ISS-06 | **Medium** | B5/B3 | EP-07 success metric (§4: "every election is preceded by three completed debates per candidate"); US-0076 AC ("before appearing on **any election ballot**"); FR-066 in Doc 02 ("before every **major election**") | Scope inconsistency introduced in v1.1.0. FR-066 specifies the debate requirement only for "major elections," a term Doc 02 §14 does not define. EP-07's success metric generalises this to "every election"; US-0076's AC further widens it to "any election ballot." A TC derived from US-0076 would test a scope broader than FR-066 requires, potentially failing implementations that are correct against the source requirement. Conversely, if the intent is truly "every election," FR-066 must be broadened. New issue in v1.1.0. | Align EP-07's success metric and US-0076's AC with the scope in FR-066 once "major election" is defined in Doc 02 §14 (see Doc 02 ISS-07). If the intent is "every election," request that Doc 02 broadens FR-066 accordingly. Until resolved, mark US-0076 as not Ready on this dependency. |
| ISS-07 | Low | B4 | §9 Estimation: "Total (v1.1.0): 83 stories, **approximately 484 points** (v1.0.0 was 70 stories at 396 points; 13 new stories from CR-v1.1.0 add approximately 88 points)" | Prior v1.0.0 ISS-03 found the stated 396 total was actually 415 (a 4.8% understatement). The v1.1.0 text still cites 396 as the v1.0.0 base and adds "approximately 88 points" from 13 new stories (actual sum of new story points is 84). The "approximately" qualifier is an improvement over the prior exact-but-wrong claim, but the underlying base figure remains incorrect, making the ~484 total ~499. This affects capacity planning (Doc 13 §8.3). | Correct the v1.0.0 base to the actual point sum; recompute the v1.1.0 total; publish per-epic subtotals so the arithmetic is checkable. |
| ISS-08 | Low | B4 | §10: "Refinement: **weekly**, 60 minutes, product-owner-led; architect and engineer consulted" vs Doc 13 §8.2 ("Backlog refinement — **Fortnightly** — PO + Eng + Test") | Cross-document contradiction on cadence and attendees, unchanged from v1.0.0 ISS-08. | Align §10 with Doc 13 §8.2, or have the PM align Doc 13 to this; one must move. |
| ISS-09 | Low | B3 | §7 SCR-18: "Recall initiation & ballot — FE-024 — Implements FR-042, FR-043, FR-045" | FR-044 (published grace window and post-failure cooldown) is implemented by US-0059 under FE-024 and surfaces on this screen, but is absent from SCR-18's Implements column. Unchanged from v1.0.0 ISS-09. | Add FR-044 to SCR-18's Implements column. |
| ISS-10 | Low | B1/B4 | §3 WSJF table — EP-04 (WSJF 5.00, highest score) sequenced 4th; EP-09 (WSJF 4.80) sequenced 9th; no dependency rationale for EP-04 vs EP-02/EP-03 | WSJF scores value density; the text explains EP-09/EP-10 are cross-cutting and pulled forward but does not state the general sequencing principle (walking-skeleton dependency chain dominates WSJF). A reader who takes the table at face value sees what looks like an ordering error. Unchanged from v1.0.0 ISS-10. | State the sequencing rule explicitly: "WSJF ranks value density; the walking-skeleton dependency chain determines the actual start sequence and overrides WSJF where dependency order requires it." |
| ISS-11 | Low | B5 | US-0080 AC: two scenarios cover eIDAS 2.0 wallet adapter and offline paper KYC adapter; no scenario for the ICAO Doc 9303 NFC chip adapter | FR-070 section (b) specifies the ICAO Doc 9303 NFC chip adapter (biometric passport/NFC-enabled identity card path) as a candidate adapter type with specific supply requirements to the FR-069 derivation. US-0080 tests the eIDAS 2.0 wallet path and the offline paper KYC path but has no positive scenario for the ICAO NFC chip path. The negative scenario ("Hard-coded single adapter") provides some coverage but is not specific to the ICAO path. New issue in v1.1.0. | Add an explicit AC scenario to US-0080 for the ICAO Doc 9303 NFC chip adapter path (SOD verification, stable identifier extraction, attested residency claim, no biometric retained). |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

---

## 5. Routing instruction (to the owning role)

**FAIL → route to the product-owner (Priya Raghunathan).**

Required to reach a PASS:

1. **ISS-01** — add a story or NF item covering NFR-007 (availability SLO, error budget, single-operator-failure drill) and add a Must-NFR → story/NF coverage map to §12. This is the only High defect; removing it and the five Mediums reaches the pass bar.
2. **ISS-02** — remove FR-005 from FE-002's Maps-to column until a story exists; re-verify all FE Maps-to columns against §12 gaps.
3. **ISS-03** — remove FR-026 from SCR-10 and verify all §7 Implements columns.
4. **ISS-04** — once Doc 02 ISS-03 is resolved and FR-002/FR-030/NFR-001 carry defined adversary-game parameters, mirror them into US-0007 and US-0038 ACs.
5. **ISS-05** — mark OI-08-dependent constants as non-normative and block affected stories until OI-08 closes.
6. **ISS-06** — align EP-07 success metric and US-0076 AC with FR-066's scope once "major election" is defined in Doc 02 §14 (Doc 02 ISS-07). This is a cross-document dependency: resolve Doc 02 first.

Note for sequencing: **ISS-04 and ISS-06 cannot be closed inside Doc 05 alone** — they depend on the Doc 02 rework (ISS-03 for ISS-04; ISS-07 for ISS-06). Rework Doc 02 first, then Doc 05.

Rework MUST produce a **new version** — bump `Version:` to at least **1.2.0** and set `Status: In Review`. This loop then re-reviews as cycle 2.

The reviewer has made no edit to `docs/05-product-backlog.md`.

---

## 6. Human decision at the cap (ESCALATED only)

Not applicable — cycle 1 of 5.
