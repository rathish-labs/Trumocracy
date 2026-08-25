# Document Review Report — Doc 03 Architecture & Design SDD v2.3.0

> Produced by the **document-review** skill (shared capability — not a ninth agent). Reviewer:
> tester role (Ji-woo Park), acting as PM-assigned neutral reviewer. The architect (Ravi
> Deshmukh) is the document owner and did NOT conduct this review. Cycle 1.
>
> Scope: v2.3.0 increment only — §10.13 (full), §12 (ADR-024 row + preamble count), §15
> (DES-095..DES-098 traceability rows), §18 C-02 closure annotation; ADR-024 (full);
> ADR-016 amendment-block item (c) cascade fix. Sources cross-checked: Doc 02 v2.5.0,
> ADR-017/DES-070 (ICredentialAdapter composition), ADR-022 (IProofVerifier seam), §9 CI
> topology (IS_INSECURE_MOCK deployment-safety), §13 debt table, Charter rules per
> OI-18-DECISION-2026-08-11.md.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.3.0
Review mode: technical
Reviewer role: tester
Score: 90%
Critical: 0
High: 1
Medium: 1
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v2.3.0 delivers the v1/v2 delivery-architecture split as directed by the approver
(Rathish, 2026-08-23). The core design work — §10.13, ADR-024, the two seam interfaces
(DES-095/DES-096), the v1 package disposition (DES-097), the IS_INSECURE_MOCK promotion-gate
distinction, the Charter-layer conflict table (T-01..T-05), the §12/§15 additions, and the
ADR-016 cascade fix — is architecturally sound, internally coherent with prior sections (§5,
§9, §10.12), and correctly surfacing rather than silently reconciling the Charter-layer
tensions. The review finds **one High issue and one Medium issue**, both caused by the same
root defect: the §15 traceability row for DES-098 labels FR-130 as the "v1 honesty notice
MUST" but Doc 02 v2.5.0 shows FR-130 is the "provisional-party membership cap: 100-member
limit until verified legal registration" — a different requirement. The honesty-notice
backing FR that DES-098 needs has not been minted. This mislabeling propagates into an
internal inconsistency between §10.13.6 ("FR — to be minted by PO this session") and §15
("FR-130 minted by PO this session"), and an incorrect claim in the §18 C-02 closure note.
One Low issue (undefined shorthand notation in §10.13.7) is also raised.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`90%`)
- Critical = 0? **Yes** · High = 0? **No** (1) · Medium = 0? **No** (1)
- **Verdict:** `FAIL` — 1 High issue and 1 Medium issue; score below the 95% threshold.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 90 | 18.0 | DES-095/096/097 all have appropriate FR-level backing; DES-098 honesty-notice FR is not correctly cited (§15 labels FR-130 as honesty notice but FR-130 in Doc 02 is the provisional cap); the intended honesty-notice FR was not minted in Doc 02 v2.5.0 |
| T2 Soundness | 20 | 97 | 19.4 | ADR-024 is well-structured and justified; seam interfaces are logically coherent; IS_INSECURE_MOCK distinction is correctly reasoned; conflict table honestly surfaces T-01..T-05 without silent reconciliation; alternatives in ADR-024 are recorded |
| T3 Traceability & IDs | 20 | 80 | 16.0 | ISS-01 (High): §15 DES-098 row labels FR-130 as "v1 honesty notice MUST" — factually wrong per Doc 02 v2.5.0 (FR-130 = provisional cap); DES-098 has no correctly-cited backing FR; FR-121..130 in DES-095 row carries the same mislabeled FR-130; ADR count (twenty-four, ADR-001..ADR-024) is correct everywhere; DES IDs (095-098) are sequential with no gaps |
| T4 Security & failure modes | 15 | 91 | 13.65 | T-01..T-05 correctly surfaced as requiring approver decision; IS_INSECURE_MOCK gate analysis is correct; §18 C-02 closure note contains incorrect claim ("the SCR-13/SCR-14 disclosure obligation that FR-130 backs" — FR-130 is the cap, not a disclosure obligation); §10.13.6 and §15 internally contradict each other on whether the honesty-notice FR has been minted (ISS-02 Medium) |
| T5 Completeness & testability | 15 | 93 | 13.95 | DES-095/096 interfaces are complete with method-level semantics table; DES-097 package disposition table covers all repo packages; DES-098 notice requirements are detailed; conflict table is complete (T-01..T-05); no placeholders in new sections; one gap: DES-098 has no verified backing FR |
| T6 Convention compliance | 10 | 88 | 8.8 | ISS-03 (Low): §10.13.7 conflict table uses "(i)/(ii)/(iii)" shorthand in the "v1 status" column without a legend or key; ADR-016 amendment-block item (c) cascade fix confirmed present; version 2.3.0 / Status: In Review / Date: 2026-08-23 header correct; RFC 2119 usage sound; no stale ID references |
| **Total** | **100** | — | **90%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **High** | T3 | §15 DES-098 traceability row; also §15 DES-095 traceability row (FR-121..130 range) | §15 labels FR-130 as "v1 honesty notice MUST — minted by PO this session; Doc 02 v2.5.0". Doc 02 v2.5.0 shows FR-130 is the "provisional-party membership cap: 100-member limit until verified legal registration (anti-capture control)" — a distinct requirement unrelated to the honesty notice. The honesty-notice backing FR that DES-098 depends on (described in §10.13.6 and ADR-024 §(d) as "FR — to be minted by PO this session") was not minted in Doc 02 v2.5.0. As a result, DES-098's traceability chain is broken: no valid FR backs the honesty-notice design element. Additionally, the DES-095 traceability row cites FR-121..130, which includes FR-130 (provisional cap) — a provisional-membership-cap requirement has no logical connection to the IEligibilityVerifier seam. | The architect must coordinate with the product-owner to mint the missing honesty-notice FR (which would become FR-131 or the next available ID) in Doc 02, and then update: (a) §15 DES-098 row to cite the correct honesty-notice FR number and description; (b) §15 DES-095 row to remove or correct the FR-130 inclusion in the FR-121..130 range; (c) ADR-024 Traces section to cite the correct honesty-notice FR. If the PO determines that FR-130 (the cap) is intended to serve double duty (both cap and honesty-notice obligation), Doc 02 must be updated to make that explicit, and Doc 03 §15 must reflect the actual FR-130 scope accurately — it cannot be described as "v1 honesty notice MUST" when the requirement in Doc 02 is the provisional membership cap. |
| ISS-02 | **Medium** | T4 | §10.13.6 DES-098 component description; §18 C-02 closure annotation | Two internal inconsistencies caused by the same root error as ISS-01: (1) §10.13.6 states the honesty-notice FR is "to be minted by PO this session (v1 honesty MUST)" — this leaves the FR as unresolved/future — while §15 contradicts this by claiming FR-130 "was minted by PO this session." Both cannot be simultaneously true as written; (2) the §18 C-02 closure note states "DES-098 (v1 honesty notice) was minted in this session and covers the SCR-13/SCR-14 disclosure obligation that FR-130 backs" — FR-130 per Doc 02 is the provisional membership cap and does not back any SCR-13/SCR-14 disclosure obligation; this claim is factually incorrect and internally inconsistent with the actual C-02 closure rationale (FR-130 closes C-02 because it backs the 100-member cap concept, not the honesty notice). | After ISS-01 is resolved (correct FR for honesty notice is minted): (a) Update §10.13.6 to replace the "FR — to be minted by PO this session" placeholder with the actual minted FR number; (b) Correct the §18 C-02 closure note to accurately describe what DES-098 and FR-130 each back — they are separate obligations; C-02 is closed by FR-130 (the cap); the honesty-notice FR is a separate minting that closes the §10.13.6 forward reference. |
| ISS-03 | **Low** | T6 | §10.13.7 Charter-layer conflict check, "v1 status" column | The "(i)/(ii)/(iii)" shorthand classification system used throughout the v1 status column (e.g., T-01: "(ii)/(iii)", T-02: "(iii)", T-03: "(ii) DEFERRED") is not defined anywhere in Doc 03 or in ADR-024. A reader of Doc 03 without cross-referencing ADR-024's Charter Layer table cannot decode what the three classes mean. ADR-024 uses similar notation but also without a formal legend. The descriptive text that follows the notation provides partial context, but the classification system itself is opaque. | Add a legend to §10.13.7 before or below the table heading: "(i) SATISFIED — v1 meets this rule fully by application design; (ii) DEFERRED — absent in v1, honest disclosure via DES-098 applies, no v1 claim; (iii) TENSION FOR APPROVER'S DECISION — the v1 implementation and the Charter/Guarded layer rule are in active tension requiring an explicit approver ruling before v1 implementation begins." Alternatively, expand the v1 status cell text to be fully self-describing and drop the parenthetical shorthand. |

> **Low** issues do not block the pass bar. **ISS-01 (High)** and **ISS-02 (Medium)** each force FAIL.

---

## 5. Confirmed-sound items (for completeness)

The following increment claims were verified against source documents and found correct:

| Claim | Verified | How |
|-------|----------|-----|
| ADR count "twenty-four" and "ADR-001..ADR-024" in §1.1 preamble | Confirmed | Line 176: "The twenty-four decision records in `docs/adr/ADR-001..ADR-024`" |
| ADR count "twenty-four" in §12 preamble | Confirmed | Line 1363: "Status of all twenty-four ADRs: **Accepted**." |
| ADR-024 row present in §12 | Confirmed | Line 1390: complete ADR-024 row with decision summary and chief consequence |
| ADR-024 Status: Accepted | Confirmed | ADR-024 file header: "Status: Accepted" |
| DES-095..DES-098 rows present in §15 | Confirmed | Lines 1454-1458: four traceability rows with FR/NFR citations and DES descriptions |
| §1.1 counts match Doc 02 v2.5.0 | Confirmed | Doc 03 §1.1: "21 BR, 130 FR (128 active + 2 superseded; 111 Must), 28 NFR (24 Must), 15 CON, 27 RISK"; Doc 02 v2.5.0 §11 header: same counts |
| IS_INSECURE_MOCK distinction consistent with §9 CI topology and §7.1 | Confirmed | §9: "deployment-safety: IS_INSECURE_MOCK() scan — blocks promotion past devnet"; §7.1: "A deployment whose VerifierRegistry contains a MockVerifier cannot be promoted past devnet"; §10.13.4 table consistent |
| §10.13 does not contradict §10.12 design system | Confirmed | §10.13.5 packages/ui row: "As-is — DES-093 token set, DES-094 privacy-status component apply unchanged"; consistent with ADR-023 and §10.12 |
| §10.13 does not contradict §5 data model | Confirmed | The seam interfaces (DES-095/096) do not introduce new on-chain fields; the v1 backing is application-layer only; §5.3 schema is unchanged |
| §10.13 does not contradict §9 repo structure | Confirmed | DES-097 package disposition table covers all 11 packages in the §9 monorepo; dispositions are consistent with §9 ADR-011 dependency direction |
| T-01..T-05 conflict table honestly surfaces tensions without silent reconciliation | Confirmed | All five tensions listed as "Decision owed" or "Decision needed"; none claim resolution; "Resolved items" section correctly limits to Charter Rules 2/5/7, CON-012, CON-013 which are genuinely satisfied by application design; consistent with ADR-024 §(c) |
| Charter Rule 6 / FR-082 / FR-128 / NFR-003 tensions surfaced, not reconciled | Confirmed | T-01 (Charter Rule 6), T-02 (FR-128 subpoena test), T-03 (BR-009/FR-082), T-04 (NFR-003 receipt-freeness) all listed under "Decision owed"; no claim of resolution without approver decision |
| IEligibilityVerifier (DES-095) correctly composes with ADR-017/DES-070 | Confirmed | §10.13.2: "v2 routes through ICredentialAdapter (ADR-017, DES-070); v1 bypasses it honestly (declared in getProperties())"; consistent with ADR-017 and ADR-024 Composition check section |
| IBallotService (DES-096) correctly composes with ADR-022 IProofVerifier | Confirmed | §10.13.3: "v2 computeTally() produces a ZK proof verified through IProofVerifier; v1 computeTally() produces a conventional aggregate and does not call IProofVerifier (honest bypass, not hidden)"; consistent with ADR-022 |
| ADR-016 amendment-block item (c) citizen-exclusion sentence present | Confirmed | ADR-016 file, amendment block item (c): "In Phase 1, a person without Aadhaar cannot enrol in the pilot region." sentence is present |
| §18 C-02 closure: FR-130 minted in Doc 02 v2.5.0 for the provisional cap | Confirmed | Doc 02 v2.5.0 §4.44: "FR-130 — provisional-party membership cap: 100-member limit until verified legal registration (anti-capture control)" — minting confirmed; C-02 is correctly closed |
| DES-098 notice requirements consistent with ADR-024 §(d) | Confirmed | §10.13.6 and ADR-024 §(d) both require: SCR-13 + SCR-14 placement, non-dismissable, WCAG 2.2 AA, MUST NOT use "anonymous"/"receipt-free" to describe v1 voting; Doc 03 also adds "private" and "secure" to the prohibited list, which is a stricter (not contradictory) extension |
| Source updated to SRS-TRUMOCRACY v2.5.0 | Confirmed | Doc 03 header line: "Source: SRS-TRUMOCRACY v2.5.0" |

---

## 6. Regression check — prior passing sections

Sections outside the stated increment scope were spot-checked for unintended changes:

| Section | Checked | Finding |
|---------|---------|---------|
| §10.12 (design system — DES-093, DES-094, ADR-023) | Grep DES-093/DES-094 in Doc 03 | Unchanged from v2.2.1 PASS verdict; §15 rows for DES-093/094 unmodified |
| §12 ADR-023 row | Grep ADR-023 in §12 | Unchanged; only ADR-024 row appended |
| §5.1 IMMUTABLE CORE box | Read §5.1 | ProtocolGovernance and StewardRegistry still listed; unchanged |
| §5.2 component table (DES-001..DES-092) | Grep DES-092 | Unchanged; no existing DES renumbered |
| §9 CI topology | Read §9 | Unchanged; IS_INSECURE_MOCK scan entry confirmed present |
| §13 debt table | Read §13 | Unchanged; no new entries (§13 debt register is not part of this increment) |
| §16 open questions (Q11–Q14) | Read §16 | Unchanged; no new open questions added in v2.3.0 |
| §18 SC-15..SC-21 entries | Read §18 SC-15..SC-21 | Unchanged from v2.1.0/v2.1.1 |
| §18 OI-13 entry | Read §18 OI-13 | Unchanged; C-02 closure is a new separate sub-section |

No regressions found in sections outside the stated increment scope.

---

## 7. Routing instruction

**FAIL.** Route to the **owning role (architect, Ravi Deshmukh)** for rework.

**Rework required before re-review:**

1. **(ISS-01 — High, T3)** Resolve the FR-130 mislabeling. Coordinate with the product-owner
   (Priya Raghunathan) to mint the honesty-notice FR in Doc 02 as a new requirement (FR-131 or
   next available ID), then update §15 DES-098 row to cite the correct FR number and description.
   Also correct the DES-095 traceability row to remove FR-130 (provisional cap) from the
   FR-121..130 citation if FR-130 has no logical connection to the IEligibilityVerifier seam.
   ADR-024 Traces section must also be updated.

2. **(ISS-02 — Medium, T4)** After ISS-01 is resolved: (a) update §10.13.6 to replace "FR — to
   be minted by PO this session (v1 honesty MUST)" with the actual minted FR number; (b) correct
   the §18 C-02 closure note to accurately state that C-02 is closed by FR-130 (the provisional
   cap) and that the honesty-notice FR is a separate item — remove the incorrect claim that
   "FR-130 backs the SCR-13/SCR-14 disclosure obligation."

3. **(ISS-03 — Low)** Add a legend to §10.13.7 defining the "(i)/(ii)/(iii)" status
   classification, or expand the status cell text to be self-describing.

The rework MUST produce a **new version** (bump `Version:` semver — at least a minor bump for
the High/Medium issues — and set `Status: In Review`). After rework this loop re-reviews at
Cycle 2.
