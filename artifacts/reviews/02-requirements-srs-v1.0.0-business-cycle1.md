# Document Review Report — 02 Requirements Specification / SRS (Trumocracy)

> Produced by the **document-review** skill. The reviewer **scores and lists issues only — it never
> edits the reviewed document**. All rework is done by the owning role (**product-owner —
> Priya Raghunathan**) as a new version.

```
Reviewed document: 02-requirements-srs.md
Document version: 1.0.0
Review mode: business
Reviewer role: architect (neutral — not the owning role for Doc 02)
Score: 76%
Critical: 0
High: 4
Medium: 6
Low: 2
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 02 is disciplined in the ways that usually fail: every one of the 61 `FR` and 26 `NFR` traces up
to a `BR`, every requirement names an individual rather than a team, the six `TD` trade-offs record
tensions honestly instead of resolving them by assertion, and §13 lists eleven open items including
the two that could sink the product (`OI-01` threshold calibration, `OI-05` k≥1000 vs ward-level
representation). It **fails** this cycle on **testability and one internal contradiction**:
**15 of the 22 Must NFRs have no acceptance criteria at all**, while §8's own preamble asserts that
every Must NFR has them and Doc 13 §13.1 certifies the same to the Gate-1 approver; several Must
requirements (`FR-002`, `FR-030`, `NFR-001`, `NFR-003`, `NFR-004`) are phrased in terms
("better than chance", "no computationally bounded adversary", a duplicate rate the system is
structurally unable to measure) that are not falsifiable as written; and `NFR-010`'s absolute
"no direct identifier at rest **anywhere in the system**" is contradicted by §7's own data table.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`76%`)
- Critical = 0? **yes** · High = 0? **no** (4) · Medium = 0? **no** (6)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 80 | 16.00 | §1–§2 are clear and the BR set is genuinely outcome-shaped with success measures. Docked because three BR success measures are unmeasurable (ISS-03, ISS-04). |
| B2 Completeness | 15 | 70 | 10.50 | All sections present, no placeholders — but §8 is materially incomplete: 15 of 22 Must NFRs carry no Gherkin, against the section's own stated scope (ISS-01). |
| B3 Traceability & IDs | 20 | 90 | 18.00 | The strongest part of the suite: 100% up-trace to a `BR`, correct ID scheme, no reuse, named individual owner on every BR/FR/NFR/RISK/CON. Minor `SCR` range mismatch (ISS-07). |
| B4 Correctness & consistency | 15 | 65 | 9.75 | `NFR-010` vs §7 (ISS-02); Won't/Could vs Doc 01 (ISS-09); `SCR-01…18` vs Doc 05's twenty (ISS-07); `FR-055` Should underneath a Must-level promise (ISS-10). |
| B5 Testability | 15 | 60 | 9.00 | Gherkin on all 42 Must FRs is real work and mostly good, with adversarial scenarios throughout. But the guardrail requirements that matter most are not independently verifiable as written (ISS-03, ISS-04, ISS-05, ISS-06). |
| B6 Convention compliance | 15 | 85 | 12.75 | ISO-8601, MoSCoW, named-owner rule and the "states no HOW" discipline are all honoured. RFC 2119 negation errors (ISS-11); team-named approvers (ISS-12). |
| **Total** | **100** | — | **76.0%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **High** | B2/B5 | §8 preamble ("Every Must FR **and every Must NFR** below has at least one positive and… at least one adversarial scenario") vs the §8 Gherkin blocks | §8 contains acceptance criteria for **7** Must NFRs only — `NFR-002`, `NFR-005`, `NFR-011`, `NFR-014`, `NFR-017`, `NFR-020`, `NFR-025`. **Fifteen Must NFRs have none**: `NFR-001`, `NFR-003`, `NFR-004`, `NFR-006`, `NFR-007`, `NFR-009`, `NFR-010`, `NFR-012`, `NFR-013`, `NFR-015`, `NFR-016`, `NFR-021`, `NFR-022`, `NFR-023`, `NFR-024`. This is not merely a gap — the section **asserts the opposite**, and Doc 13 §13.1 repeats the assertion to the Gate-1 approver as "✅ Ready". Under the handbook's traceability rule each of those 15 must reach a `TC`; with no AC there is nothing to derive one from, and each becomes an open Must row at Gate 2. `NFR-001` and `NFR-003` — the two privacy/coercion guardrails the whole product rests on — are among the fifteen. | Write at least one positive and one adversarial Gherkin block for each of the 15 Must NFRs, **or** narrow the §8 preamble to what the section actually delivers and record the remaining 15 as an explicit, owned gap with a closing date. The second option is weaker but honest; silently claiming coverage is not an option. Notify the project-manager so Doc 13 §13.1 is corrected. |
| ISS-02 | **High** | B4 | `NFR-010` ("no identity document, biometric template, address, date of birth **or other direct identifier at rest anywhere in the system**") vs §7 rows "Recovery requests & notification channel — Restricted — Trumocracy — 90 days — **Yes, minimal**" and "Support & appeal records — Restricted — 24 months — Minimal"; also `FR-058` ("a notification to the account's **registered channel**") | The document states an absolute and then, three sections later, tabulates two exceptions to it. A registered notification channel (phone number / email / equivalent) **is** a direct identifier at rest. The contradiction is not merely editorial: it is the basis of Doc 01 §E3's answer to a state-compulsion demand and of §6.1's GDPR posture ("erasure is satisfied by holding nothing"), both of which are overstated while these two stores exist. This is the transparency-vs-privacy trade-off being resolved by assertion in exactly the place `TD-01`/`TD-03` were careful not to. | Re-scope `NFR-010` to what is actually true — e.g. *"no direct identifier at rest **on the public record or in any governance-path store**; the only personal data held anywhere is the recovery notification channel (`FR-058`, 90 days) and support/appeal records (24 months), each enumerated in §7, each outside the governance path, each excluded from the immutable record"* — and add a matching bounded exception to `TD-03` and to §6.1's GDPR row. Then route the correction to Doc 01 §E3 (see Doc 01 report ISS-03). |
| ISS-03 | **High** | B5 | `FR-002` Gherkin ("cannot determine, **better than chance**"), `FR-030` Gherkin (same phrase), `NFR-001` ("0 confirmed linkages under adversarial audit"), `NFR-003` ("no **computationally bounded** adversary… can distinguish") | Not testable as written. None of these state an **adversary model** (which parties collude, what each holds, whether they have network vantage, whether the attack is offline or adaptive), a **sample size**, an **advantage bound ε**, a **confidence level**, or a **security parameter** for "computationally bounded". "Better than chance" is a statistical claim with no statistic attached; an auditor cannot pass or fail it, and two auditors would reach different verdicts on the same system. `NFR-001` is additionally unbounded because its central parameter — the "published collusion bound" — is undefined and deferred to Design (`OI-10`). The architect reached the same finding independently (`artifacts/architect-teststrategy-2026-08-09T0100.md`, OPEN-08 and OPEN-13). | Restate each as a distinguishing game with numbers: name the adversary's capability set, the number of trials N, the advantage bound ε and the confidence 1−δ (e.g. *"an adversary holding {operator logs, attestor records, party records, full public record, network timing at 1 s granularity} achieves advantage ≤ ε = 0.02 over 1/2 across N ≥ 10,000 trials at 95% confidence"*). Set a security parameter for `NFR-003`. Pull `OI-10`'s collusion bound forward from "Design" to **Gate 1**, because `NFR-001` has no pass threshold without it. |
| ISS-04 | **High** | B1/B5 | `BR-006` success measure and `NFR-004` ("≤ 0.1% duplicates (audited quarterly)"); `BR-011` success measure ("≥ 95% of reported coercion cases successfully overridden; 0 externally detectable overrides") | Two Must-level success measures that the system is **structurally unable to produce**. `FR-002` makes two actions by one person indistinguishable from actions by two people and `FR-003` forbids retaining identity data — so no duplicate rate can be computed internally, and "audited quarterly" names no auditor, no sample frame, no consent basis and no confidence interval. `FR-032` requires the coerced-vote override to be invisible to *everyone including Trumocracy* — so "≥ 95% of reported cases successfully overridden" cannot be observed either, and "0 externally detectable overrides" has no adversary definition. These same figures propagate to Doc 01 §C and Doc 13 §1 (O-1, O-7) and to kill criteria KC-1/KC-2, so the defect is load-bearing across the packet. | For `BR-006`/`NFR-004`: specify an out-of-band, consented, independently audited sampling design — sample size per region, confidence interval, named audit body, cadence — or replace the rate with a capability-absence property that *can* be verified. For `BR-011`: replace the "≥ 95% of reported cases" operational rate with an adversarial-audit property, since receipt-freeness forbids the measurement. Mirror both into Doc 01 §C and Doc 13 §1. |
| ISS-05 | **Medium** | B5 | `FR-018` (dwell period), `FR-023` (maturation period), `FR-026` (timelock durations), `FR-043` (recall bars), `FR-044` (grace/cooldown), `FR-027` (minimum membership age); `OI-08` | Six Must requirements whose acceptance depends on constants described as "published" but which are unset and deferred to Design (`OI-08`). The §8 Gherkin uses illustrative numbers (a 14-day timelock, 40%/66%, 55%/60%) that are **examples, not requirements**, so a tester cannot distinguish a specification from an anecdote. `OI-01` (the activation threshold percentage) is correctly escalated to Gate 1; these are not, though `FR-027`'s membership-age quorum is the sole defence against `RISK-04` (exposure 20). | State for each constant either the value, or a **bounded range plus the party that sets it plus the date it is fixed**, and mark the §8 numbers explicitly as non-normative examples. At minimum, escalate the maturation period and the entrenched-clause membership age to Gate 1 alongside `OI-01`, since `BR-012` and `RISK-03`/`RISK-04` are unverifiable without them. |
| ISS-06 | **Medium** | B5 | `NFR-024` ("harassment-rate metric published"); Doc 01 §C guardrail "≤ 10% of recall initiations judged harassment by the published abuse metric" | The abuse/harassment metric is referenced as if it exists and is defined nowhere in the suite. Worse, "judged harassment" implies an adjudicator making a discretionary call about political conduct — precisely the human discretion `BR-008`, `CON-003` and `FR-056` forbid, and precisely the gatekeeping tenet 1 abolishes. Owner is named (Daniel Okonkwo) but the mechanism is not. | Define the metric and, critically, state **who or what judges** and how that is compatible with `FR-056`. If it can only be judged by a human at Trumocracy, say so and record it as a new `TD` trade-off — or replace it with a mechanical proxy (e.g. repeat-initiation rate against the same office-holder) that requires no judgement. |
| ISS-07 | **Medium** | B4 | §5.1: "Primary surfaces are provisionally inventoried in Doc 05 §7 as `SCR-01` … `SCR-18`" | Doc 05 §7 defines **twenty** screens, `SCR-01` … `SCR-20` (`SCR-19` Account recovery, `SCR-20` Public transparency dashboard & filtering log). Both are recorded in `artifacts/memory-index.json` as `SCR-01..SCR-20`. Two Must-adjacent surfaces (recovery, the transparency dashboard) fall outside the range Doc 02 declares. | Correct §5.1 to `SCR-01` … `SCR-20`, or state a rule rather than a range ("all `SCR-##` in Doc 05 §7"). |
| ISS-08 | **Medium** | B4/B5 | `NFR-002` (k ≥ 1,000) vs `BR-004` (ward-level representation); `OI-05` | Correctly identified as "a direct conflict between `BR-004` and `BR-009`" and escalated to Gate 1 — good. But Doc 02 presents it as **unresolved**, while Doc 13 §13.2 records that it is **already answered** in design (`ADR-004` §2, escalation of the anonymity scope to the nearest ancestor region) and asks the PO only to confirm. A Gate-1 approver reading the two documents in sequence gets two different states for the same open item, and Doc 02 gives no hint that an answer exists. Note also the architect's open point (OPEN-10): escalation must apply to *publication* scope and never to *eligibility*, or a ward election's electorate silently changes — a distinction Doc 02 does not capture at all. | Update `OI-05` to record the proposed answer, the fact that it originates in design produced pre-Gate-1 (see Doc 13 `E-01`), what the PO is being asked to confirm, and the eligibility-vs-publication boundary that must hold. Do not adopt the answer as a requirement change — record it as a pending confirmation. |
| ISS-09 | **Medium** | B4 | §11 "Won't (this release)" list vs Doc 01 §D ("Deferred; tracked as **Could** items") | Party dormancy lifecycle, treasury splitting on fork and personal blocklists are **Won't** here and **Could** in Doc 01. Different commitments, material to release sizing. | Pick one and align both documents in the same cycle. |
| ISS-10 | **Medium** | B4 | `FR-055` (independent verifier + party history export) priority **Should**; vs `BR-005` Must ("100% of closed ballots independently reproducible"), Doc 01 §C ("100% of closed ballots" + "≥ 25 third-party orgs running the verifier"), `NFR-018` **Should**, and Doc 13 §3.3 item 6 / §9 "Guaranteed exit" | The product's central trust claim — "you do not have to trust us, run the verifier yourself" — rests on a **Should** requirement, and the export that Doc 01 §E3 calls "the real guarantee… the only credible check on a platform operator" rests on another **Should** (`NFR-018`). `FR-033` (Must) requires reproducibility *in principle*; `FR-055` (Should) is what makes it usable in practice. A Should can be dropped without blocking Gate 2. | Either raise `FR-055` and `NFR-018` to **Must** (the honest reading of Doc 01 §E3 and of `BR-005`'s success measure), or state plainly in §11 and in Doc 01 §E3 that the shipped guarantee is hand-reproducibility and that a tool is not committed for v1. |
| ISS-11 | Low | B6 | `NFR-004` ("no single attestor **MUST** hold > 50%"), `NFR-007` ("no single operator failure **MUST** block… for more than 60 minutes"), `NFR-014` ("no single operator… **MUST** be able to prevent"), `NFR-025` ("No single operator… **MUST** be able to censor"), `NFR-024` ("No feature **MUST** expose") | RFC 2119 negation error. "No X MUST Y" literally means "there is no X for which Y is required" — the intended meaning is "no X **MUST NOT**…" or, better, "the system MUST ensure that no X can…". Doc 02 declares RFC 2119 normative in its own header, so this matters for five Must NFRs. | Rewrite each as "The system MUST ensure that no …" or "… MUST NOT …". |
| ISS-12 | Low | B6 | Header block: `Approvers: Gate 1 — Product, Engineering, Design, QA` | Teams, not individuals, against the named-owner convention; §15 and Doc 13 §12 name them properly. | Replace with the individuals from §15 / Doc 13 §12. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Routing instruction (to the owning role)

**FAIL → route to the product-owner (Priya Raghunathan).**

Required to reach a PASS, in priority order:
1. **ISS-01** — close the 15 missing Must-NFR acceptance criteria, or narrow the §8 claim and register the gap explicitly with an owner and a date. Then tell the project-manager to correct Doc 13 §13.1, which currently certifies the opposite.
2. **ISS-03** and **ISS-04** — make the four guardrail requirements falsifiable: adversary model, N, ε, δ, security parameter, and a stated measurement design for the duplicate rate and the coercion-override rate. Pull `OI-10` (collusion bound) forward to Gate 1.
3. **ISS-02** — re-scope `NFR-010` to match §7, and propagate to `TD-03`, §6.1 and Doc 01 §E3.
4. **ISS-05** — bound or escalate the six unset governance constants; mark §8's example numbers as non-normative.
5. **ISS-06** to **ISS-10** as described.
6. Rework MUST produce a **new version** — bump `Version:` to at least **1.1.0** and set `Status: In Review`. This loop then re-reviews as cycle 2.

Three items are **cross-document** and must be fixed as a set, or the next cycle will re-open them:
the coercion/duplicate metrics (Docs 01 §C, 02, 13 §1), the `NFR-010`/§7 personal-data statement
(Docs 01 §E3, 02 §7/§6.1), and the `SCR` range (Docs 02 §5.1, 05 §7).

The reviewer has made no edit to `docs/02-requirements-srs.md`.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — cycle 1 of 5.
