# Document Review Report — 02 Requirements Specification / SRS v1.1.0 (Trumocracy)

> Produced by the **document-review** skill. The reviewer **scores and lists issues only — it never
> edits the reviewed document**. All rework is done by the owning role (**product-owner —
> Priya Raghunathan**) as a new version.

```
Reviewed document: 02-requirements-srs.md
Document version: 1.1.0
Review mode: business
Reviewer role: technical-writer (neutral — not the owning role for Doc 02)
Score: 78%
Critical: 0
High: 4
Medium: 5
Low: 4
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 02 v1.1.0 faithfully implements all nine items of CR-v1.1.0: BR-013, FR-062..FR-073, RISK-22..24, TD-07, OI-12 and OI-13 are all present, correctly sequenced, source-cited, and named-owner-assigned. The two explicitly directed open contradictions (OI-13: FR-062 vs NFR-001/NFR-024/TD-02; OI-12: FR-073 vs ADR-003, since resolved by ADR-016) are recorded with appropriate depth — OI-13 appears in six distinct locations (§4.19, §6, §7, §9.3, §13, §15) and is honestly routed to the human approver rather than silently reconciled. That recording quality is a strength, not a defect. The document **fails** this cycle for the same structural reasons it failed v1.0.0 cycle 1: four High issues carried forward without rework. The most serious is the §8 preamble, which still claims Gherkin exists for every Must NFR when 15 of 22 are uncovered; the three companion Highs — an absolute NFR-010 contradicted by §7's two personal-data stores, unfalsifiable adversary phrasing in FR-002/FR-030/NFR-001/NFR-003, and structurally unmeasurable BR-006/BR-011 success measures — are also unchanged from cycle 1. One new Medium is introduced: the term "major election," used in the new BR-013 and FR-066, is not defined in §14's Glossary, leaving the Gherkin for FR-066 and the BR-013 success measure unverifiable by scope.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`78%`)
- Critical = 0? **yes** · High = 0? **no** (4) · Medium = 0? **no** (5)
- **Verdict:** `FAIL`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 80 | 16.00 | BR-013 is well-formed with a testable success measure. Nine BRs are unchanged from the passing v1.0.0 portion. Docked for ISS-04: BR-006/BR-011 success measures remain structurally unmeasurable. |
| B2 Completeness | 15 | 70 | 10.50 | All 12 new Must FRs have Gherkin. The §8 preamble continues to assert coverage for every Must NFR while 15 of 22 have none (ISS-01). |
| B3 Traceability & IDs | 20 | 92 | 18.40 | All 12 new FRs trace up correctly. ID sequence (BR-013, FR-062..073, RISK-22..24, TD-07, OI-12..13) is clean. SCR range corrected to SCR-23 (prior ISS-07 fixed). OI-05 documented as Gate-1-resolved (prior ISS-08 fixed). Minor docks for Change 9 absent from §12 (ISS-10) and stale OI-12 status in §13 (ISS-13). |
| B4 Correctness & consistency | 15 | 71 | 10.65 | NFR-010 vs §7 personal-data table persists (ISS-02). Won't vs Could mismatch with Doc 01 §D persists (ISS-08). FR-055 Should vs BR-005 Must persists (ISS-09). "Major election" undefined introduces a new consistency gap (ISS-07). SCR range fix and OI-05 documentation are positive changes. |
| B5 Testability | 15 | 62 | 9.30 | "Better than chance" / "computationally bounded adversary" without parameters persists (ISS-03). Unmeasurable success measures persist (ISS-04). Six unset-constant Gherkin blocks persist (ISS-05). Harassment metric undefined (ISS-06). FR-066 Gherkin uses "major election" without a definition, making scope unverifiable (ISS-07). New FRs (FR-062..073) all have clear, adversarially-tested Gherkin; FR-063 and FR-068 cite specific UT numbers — positive. |
| B6 Convention compliance | 15 | 85 | 12.75 | RFC 2119 negation errors in 5 NFRs persist (ISS-11). Header Approvers line still names teams (ISS-12). Source citations on all 12 new FRs are consistently formatted. The FR-070 "no technology named" exception is correctly documented in the preamble. |
| **Total** | **100** | — | **78%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **High** | B2/B5 | §8 preamble ("Every Must FR and every Must NFR below has at least one positive and, where the requirement is a guardrail, at least one adversarial scenario") vs the NFR Gherkin block (lines covering NFR-002, -005, -011, -014, -017, -020, -025 only) | 15 of 22 Must NFRs have no Gherkin in §8 — NFR-001, NFR-003, NFR-004, NFR-006, NFR-007, NFR-009, NFR-010, NFR-012, NFR-013, NFR-015, NFR-016, NFR-021, NFR-022, NFR-023, NFR-024 — unchanged from v1.0.0 cycle 1. The §8 preamble still makes the opposite claim. The RTM (Doc 08) shows 76 Must rows, 64 open; without AC there is nothing to derive a TC from, and each becomes a guaranteed open row at Gate 2. Carried from v1.0.0. | Write at least one positive and one adversarial Gherkin block for each of the 15 missing Must NFRs, **or** narrow the §8 preamble to match what the section actually delivers and register the 15 as an explicit, owned gap with a closing-date owner. The second option is weaker but honest; the current false claim is not. |
| ISS-02 | **High** | B4 | NFR-010 ("no identity document, biometric template, address, date of birth or other direct identifier at rest **anywhere in the system**") vs §7 rows "Recovery requests & notification channel — Restricted — Trumocracy — 90 days — Yes, minimal" and "Support & appeal records — Restricted — Trumocracy — 24 months — Minimal"; §6.1 GDPR row ("Erasure is satisfied by holding nothing") | NFR-010's absolute claim is contradicted by two enumerated restricted stores in §7. A registered notification channel (phone/email) is a direct identifier; support records contain minimal personal data. The §6.1 GDPR erasure claim is therefore overstated. The §7 table correctly lists these stores; NFR-010 and §6.1 are simply wrong about the absolute. Carried from v1.0.0. | Re-scope NFR-010 to exclude the two explicitly enumerated restricted stores (e.g. "no direct identifier at rest on the verifiable public record or in any governance-path store; restricted operational stores enumerated in §7 are out of scope"). Propagate the correction to TD-03 and §6.1. |
| ISS-03 | **High** | B5 | FR-002 Gherkin ("cannot determine, **better than chance**, whether the two actions came from one person or two"); FR-030 Gherkin ("cannot link any cast ballot to its voter **better than chance**"); NFR-001 target ("0 confirmed linkages under adversarial audit"); NFR-003 target ("no **computationally bounded** adversary…") | None of these state an adversary capability set, a trial count N, an advantage bound ε, a confidence 1−δ, or a security parameter for "computationally bounded." "Better than chance" is a statistical claim with no statistic attached; two auditors testing the same system would reach different verdicts. OI-10 (collusion bound for NFR-001) is still deferred to Design. Carried from v1.0.0. | Restate each as a distinguishing game: name the adversary's capability set, N, ε and 1−δ (e.g., "an adversary holding {operator logs, attestor records, party records, full public record, network timing at 1 s granularity} achieves advantage ≤ 0.02 over 1/2 across N ≥ 10,000 trials at 95% confidence"). Set a security parameter for NFR-003. Pull OI-10's collusion bound forward to Gate 1 re-affirmation. |
| ISS-04 | **High** | B1/B5 | BR-006 success measure ("Audited duplicate/synthetic-person rate ≤ 0.1% of credentials"); BR-011 success measure ("≥ 95% of reported coercion cases successfully overridden; 0 externally detectable overrides") | Both are structurally unmeasurable by the system's own design. FR-002/FR-003 make duplicate detection internally impossible (same-person actions are indistinguishable and no identity is retained); no sampling design, audit body, consent basis or confidence interval is named. FR-032 requires the coercion override to be invisible to everyone including Trumocracy, so the "≥ 95% of reported cases" rate cannot be observed; "0 externally detectable overrides" has no adversary definition. Carried from v1.0.0. | For BR-006: specify an out-of-band, consented, independently audited sampling design (sample size, confidence interval, audit body, cadence). For BR-011: replace the operational rate with an adversarial-audit property that can be verified. Mirror both corrections into Doc 01 §C and Doc 13 §1. |
| ISS-05 | **Medium** | B5 | FR-018 (dwell period), FR-023 (maturation period), FR-026 (timelock durations), FR-027 (minimum membership age), FR-043 (recall bars), FR-044 (grace/cooldown); OI-08 in §13 | Six Must requirements carry acceptance criteria that depend on governance constants that OI-08 records as unset. Illustrative numbers in §8 Gherkin (14-day timelock, 40%/66%, 55%/60%) are not labelled as non-normative examples. A tester deriving a TC cannot distinguish a specification from an anecdote. Carried from v1.0.0. | State for each constant either a value or a bounded range plus the party responsible for setting it and the date by which it must close. Mark every illustrative number in §8 as "(example — not yet set; normative value closes when OI-08 closes)". |
| ISS-06 | **Medium** | B5/B4 | NFR-024 target ("harassment-rate metric published"); §6 NFR-024 definition ("recall and nomination flows MUST NOT enable targeted harassment") | The harassment-rate metric is referenced as if it exists and is defined nowhere. "Targeted harassment" implies an adjudicator making a discretionary judgement about political conduct — precisely the human discretion FR-056, BR-008 and CON-003 forbid. The mechanism is not stated; the owner (Daniel Okonkwo) is named but what he is to do is not. Carried from v1.0.0. | Define the metric and, crucially, state who or what produces the "harassment" judgement and how that is compatible with FR-056. If it requires a human Trumocracy employee to judge political speech, record it as a new TD trade-off and acknowledge the tension with CON-003. If it is a mechanical proxy (e.g., repeat-initiation rate against the same office-holder), state the formula. |
| ISS-07 | **Medium** | B5/B3 | BR-013 success measure ("100% of **major-election** ballots preceded by three completed debates per candidate"); FR-066 ("Schedule and require three debates per candidate before every **major election**"); §8 Gherkin for FR-066 ("Given a major election is approaching for office O"); §14 Glossary (no entry for "major election") | The term "major election" is introduced by CR-v1.1.0 Change 4 but is never defined in §14's Glossary. It is not clear whether by-elections, recall replacement elections, internal selection elections and ward-level elections are included. Without a definition, the FR-066 Gherkin, the BR-013 success measure and any derived TC are ambiguous in scope. New issue in v1.1.0. | Add "Major election" to §14 Glossary, defining precisely which election types require the three-debate cycle and which (if any) are exempt. |
| ISS-08 | **Medium** | B4 | §11 "Won't (this release)" list vs Doc 01 §D | Party dormancy lifecycle, treasury splitting on fork and personal blocklists appear as "Won't" in §11 but as "Could" in Doc 01 §D. Doc 01 was not updated in v1.1.0. Different commitments are made about the same three scope items across the two source-of-truth documents. Carried from v1.0.0. | Align §11 and Doc 01 §D on the same status for these three items in the same rework cycle. |
| ISS-09 | **Medium** | B4 | FR-055 priority (Should); NFR-018 priority (Should) vs BR-005 success measure (Must: "100% of closed ballots independently reproducible") and Doc 01 §E3 | The platform's central trust claim rests on FR-055 and NFR-018, both Should, which can be dropped without blocking Gate 2. BR-005 states their deliverable — a reproducible tally — as a Must. A Should requirement cannot deliver a Must promise. Carried from v1.0.0. | Either raise FR-055 and NFR-018 to Must (the honest reading of BR-005 and Doc 01 §E3), or narrow BR-005 and Doc 01 §E3 to make clear that tool-assisted reproducibility is a Should and that hand-reproduction from raw data is the Must-level guarantee. |
| ISS-10 | Low | B3 | §12 Traceability; §13 Open issues | CR-v1.1.0 Change 9 ("party operation / no boss roles") was analysed and found covered by existing requirements (FR-020, FR-021, FR-024, FR-056, BR-003). This analysis is captured only in the product-owner memory note (`artifacts/product-owner-2026-08-09T2200.md`). Neither §12 nor §13 contains any trace of the analysis. A reader examining change-request coverage inside the document finds no audit trail for Change 9. New issue in v1.1.0. | Add a note in §12 or §13: "CR-v1.1.0 Change 9 ('party operation / no boss roles') — no new requirement minted; covered by FR-020, FR-021, FR-024, FR-056, BR-003 (analysis: artifacts/product-owner-2026-08-09T2200.md)." |
| ISS-11 | Low | B6 | NFR-004 ("no single attestor MUST hold > 50%"), NFR-007 ("no single operator failure MUST block…"), NFR-014 ("no single operator… MUST be able to prevent"), NFR-024 ("No feature MUST expose"), NFR-025 ("No single operator… MUST be able to censor") | RFC 2119 negation error on five Must NFRs. "No X MUST Y" means "there is no X for which Y is required" — the intended meaning is "the system MUST ensure that no X can Y" or "X MUST NOT be able to Y". Doc 02 declares RFC 2119 normative in its header. Carried from v1.0.0. | Rewrite each as "The system MUST ensure that no …" or "… MUST NOT be able to …". |
| ISS-12 | Low | B6 | Document header: "Approvers: Gate 1 — Product, Engineering, Design, QA" | Teams named, not individuals. §15 and Doc 13 §12 name the individuals correctly. Violates the named-owner convention. Carried from v1.0.0. | Replace with the individual names from §15. |
| ISS-13 | Low | B3 | §13 OI-12: "architect MUST confirm in Doc 03 whether these are reconcilable or whether ADR-003 requires amendment" | OI-12 was resolved by ADR-016 (minted by the architect in Doc 03 v1.1.0, session 2026-08-10T0900), but §13's OI-12 entry still reads as open. The resolution is recorded in the memory index and in Doc 03 §16 but not in Doc 02 §13. A reader of Doc 02 alone believes OI-12 is still open. New (post-writing) issue; arose because Doc 03 v1.1.0 was produced after Doc 02 v1.1.0. | Update OI-12 in §13 to read "Resolved by ADR-016 (amends ADR-003 for Phase 1; see Doc 03 §16)." |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

---

## 5. Routing instruction (to the owning role)

**FAIL → route to the product-owner (Priya Raghunathan).**

Required to reach a PASS, in priority order:

1. **ISS-01** — close the 15 missing Must-NFR acceptance criteria, or narrow the §8 preamble to what the section actually delivers and record the gap with owner and date. This is the longest-standing defect in the suite and is now entering cycle 2.
2. **ISS-03** and **ISS-04** — make the four guardrail requirements falsifiable and the two BR success measures measurable. These are preconditions for the tester to write TCs for the highest-value privacy and coercion-resistance rows. Pull OI-10 (collusion bound) to Gate 1 re-affirmation.
3. **ISS-02** — re-scope NFR-010 to exclude the two restricted stores enumerated in §7; propagate to TD-03 and §6.1.
4. **ISS-05** — bound or escalate the six unset governance constants; mark illustrative §8 numbers as non-normative.
5. **ISS-06** and **ISS-07** — define the harassment metric (mechanism and adjudicator) and the term "major election" in §14.
6. **ISS-08** and **ISS-09** — align §11/Doc 01 on Won't vs Could; decide FR-055/NFR-018 priority relative to BR-005.
7. **ISS-10** through **ISS-13** as described above.

Rework MUST produce a **new version** — bump `Version:` to at least **1.2.0** and set `Status: In Review`. This loop then re-reviews as cycle 2.

**Calibration note on OI-13 (FR-062 vs NFR-001/NFR-024/TD-02):** The recording quality of this contradiction is strong — it appears in six locations (§4.19, §6, §7, §9.3, §13, §15), is honestly not silently reconciled, and is correctly routed to the human approver at Gate 1 re-affirmation. OI-13 is not a document defect. The contradiction flag in §8 Gherkin is unnecessary; the conflict is adequately documented at the requirement and open-issue levels.

The reviewer has made no edit to `docs/02-requirements-srs.md`.

---

## 6. Human decision at the cap (ESCALATED only)

Not applicable — cycle 1 of 5.
