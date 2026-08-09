# Document Review Report — 05 Product Backlog (Trumocracy)

> Produced by the **document-review** skill. The reviewer **scores and lists issues only — it never
> edits the reviewed document**. All rework is done by the owning role (**product-owner —
> Priya Raghunathan**) as a new version.

```
Reviewed document: 05-product-backlog.md
Document version: 1.0.0
Review mode: business
Reviewer role: architect (neutral — not the owning role for Doc 05)
Score: 82%
Critical: 0
High: 1
Medium: 6
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

This is the best-executed document of the four. Every one of the 70 stories carries a named
individual, an `FR`/`NFR` trace, points, dependencies and Gherkin — and, unusually, **almost every
story carries a genuine negative or adversarial scenario** rather than a happy path with a
rubber-stamp "unhappy" case (US-0022's override attempt, US-0029's 100,000-account flood, US-0041's
seized-device scenario, US-0050's inference-from-candidate-data scenario are all real attacks). §12
also declares four coverage gaps instead of hiding them, which is the behaviour the handbook wants.
It **fails** this cycle because **the Must NFRs are not covered the way the Must FRs are**: §2 and
§12 assert coverage of all 42 Must FRs and say nothing about the 22 Must NFRs, and at least one
Must NFR — `NFR-007` (availability) — has **no story and no non-functional backlog item anywhere**.
Alongside that sit five contained defects: a stated point total that does not match the stories, an
internal `FR-005` contradiction, a wrong `FR` on `SCR-10`, and two cross-document mismatches with
Docs 02 and 13.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`82%`)
- Critical = 0? **yes** · High = 0? **no** (1) · Medium = 0? **no** (6)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 90 | 18.00 | §1's walking-skeleton definition of "alive" is concrete and testable; every epic carries an outcome hypothesis with a falsifiable "we'll know when" measure. Genuinely good. |
| B2 Completeness | 15 | 90 | 13.50 | All template sections present and filled; §8 non-functional items are real scheduled work with owners, not assumptions. Docked only for the `NFR-007`/`NFR-008` omission from §8. |
| B3 Traceability & IDs | 20 | 72 | 14.40 | Must-FR map is complete and gaps are declared — but no Must-NFR coverage assertion exists (ISS-01), `FE-002` contradicts §12 on `FR-005` (ISS-02), and `SCR-10` cites the wrong `FR` (ISS-04). |
| B4 Correctness & consistency | 15 | 68 | 10.20 | Stated total of 396 points is wrong (ISS-03); `SCR` range conflicts with Doc 02 §5.1 (ISS-05); refinement cadence conflicts with Doc 13 §8.2 (ISS-08). |
| B5 Testability | 15 | 82 | 12.30 | Gherkin everywhere, adversarial scenarios throughout, MoSCoW inherited, Definition of Ready/Done explicit. Docked for inherited unfalsifiable phrasing (ISS-06) and unset constants used as if published (ISS-07). |
| B6 Convention compliance | 15 | 92 | 13.80 | Named individuals on every story and every `NF` item, correct `EP`/`FE`/`US`/`SCR`/`NF` ID scheme, no reuse, ISO-8601, no design decisions leaked into stories as promised in the header. |
| **Total** | **100** | — | **82.2%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **High** | B3/B2 | §2 ("All 42 Must FRs in Doc 02 are covered by at least one story"), §12 (Must FR → story map), §8 (`NF-01`…`NF-08`) | The backlog asserts and demonstrates coverage of the 42 Must **FRs** and makes **no coverage assertion at all for the 22 Must NFRs** — and at least one of them is genuinely uncovered. **`NFR-007` (Reliability/Availability: citizen write path ≥ 99.5% monthly, public read ≥ 99.9%, no single operator failure blocking a citizen action > 60 min) appears in no story, in no `FE` mapping and in no `NF` item.** `NFR-008` (scalability, Should) and `NFR-026` (compatibility, Should) are likewise absent, though `NFR-026`'s behaviour is partly carried by US-0070's unsupported-device scenario. This matters because `NFR-007` is a **Must** with a customer-visible promise in Doc 01 §C and an outcome row in Doc 13 §1 (O-10), and because Doc 13 §3.3 makes RTM zero-gaps across "42 Must FRs **and 22 Must NFRs**" a Gate-2 condition — so an uncovered Must NFR is a guaranteed open Must row at Gate 2. §8's own preamble ("Explicit backlog items, not assumptions") is exactly the standard being missed. | Add a story or `NF` item for `NFR-007` (availability SLO instrumentation, error budget, single-operator-failure drill) and for `NFR-008`; add an explicit **Must-NFR → story/`NF` coverage map** to §12 mirroring the Must-FR map, and re-assert coverage in §2. Any Must NFR that will genuinely have no backlog item must be declared as a gap in §12 with an owner, as the four `FR` gaps already are. |
| ISS-02 | **Medium** | B3 | §5, `FE-002` "Attestor plurality & concentration control — Maps to `FR-004`, **`FR-005`**, `NFR-004` — Stories US-0004–0005" vs §12 "Known gaps at v1.0.0: **`FR-005`** … have **no story yet**" | Internal contradiction. `FE-002` claims `FR-005` (credential revocation, invalidation and appeal) is delivered by US-0004/US-0005; neither story mentions revocation or appeal, and §12 correctly declares `FR-005` unstoried. A reader taking §5 at face value would believe a requirement is covered when the document elsewhere says it is not. | Remove `FR-005` from `FE-002`'s Maps-to column until a story exists, or write the story. Same check should be run over every `FE` Maps-to column against §12. |
| ISS-03 | **Medium** | B4 | §9 Estimation approach: "**Total: 70 stories, 396 points**" | The 70 stated point values sum to **415**, not 396 — a 19-point (4.8%) understatement. Recounted per epic: EP-01 = 68, EP-02 = 23, EP-03 = 38, EP-04 = 29, EP-05 = 37, EP-06 = 64, EP-07 = 36, EP-08 = 39, EP-09 = 34, EP-10 = 47. This is the backlog's only capacity input, and Doc 13 §8.3 argues a ~4.5 FTE structural engineering gap immediately adjacent to it. | Recount and correct the total, or correct the individual story estimates if the 396 figure is the intended one. State the per-epic subtotals so the arithmetic is checkable. |
| ISS-04 | **Medium** | B3 | §7, `SCR-10` "Party home & aggregate membership — FE-010 — Implements **`FR-020`, `FR-026`**" | `FR-026` is the **mandatory timelock between a proposal passing and taking effect** — it belongs to `SCR-12` (proposal list & detail), which already cites it. A party-home screen showing aggregate membership plausibly implements `FR-021` (equal standing) or `FR-022` (leave at will); it does not implement a timelock. A wrong `FR` on a screen propagates into the RTM's `SCR` reconciliation. | Correct `SCR-10`'s Implements column. Re-verify the whole §7 table against §5 and §6 while doing so. |
| ISS-05 | **Medium** | B4 | §7 (`SCR-01` … **`SCR-20`**) vs Doc 02 §5.1 ("provisionally inventoried in Doc 05 §7 as `SCR-01` … **`SCR-18`**") | Cross-document contradiction on the size of the screen inventory. Two of the surfaces outside Doc 02's declared range — `SCR-19` Account recovery and `SCR-20` Public transparency dashboard & filtering log — carry Must requirements (`FR-058`, `FR-059`, `FR-054`, `FR-056`). | Align with Doc 02 §5.1 in the same rework cycle (the correction belongs in Doc 02, since twenty screens are what actually exist). |
| ISS-06 | **Medium** | B5 | US-0007 AC ("cannot determine **better than chance** whether the two actions came from one person or two"); US-0038 AC ("no cast ballot can be linked to its voter **better than chance**") | Inherits Doc 02's unfalsifiable phrasing into the acceptance criteria a tester will actually derive `TC-####` from. No adversary capability set, no number of trials, no advantage bound ε, no confidence level. These two stories (21 points combined) are the backlog's largest privacy bets and neither can be passed or failed as written. | Once Doc 02 `FR-002`/`FR-030`/`NFR-001` are restated as a distinguishing game with N, ε and δ (see the Doc 02 report, ISS-03), mirror the numbers into these ACs. Do not leave the stories vaguer than the requirement. |
| ISS-07 | **Medium** | B5 | US-0022 ("the published dwell period"), US-0029 ("a maturation period"), US-0035 ("a 14-day timelock"), US-0036 ("the published minimum age"), US-0058 ("a published recall bar of 60%"), US-0059 ("a published 30-day grace window") | Six stories are written against constants that Doc 02 `OI-08` records as **unset**. The numbers that do appear (14 days, 60%, 30 days, 40%/66% in US-0033) read as specifications but are illustrations. A story cannot satisfy the Definition of Ready — "traces to an `FR`… Gherkin AC written" — if the AC's threshold is an example. | Mark the illustrative numbers as non-normative in each AC, and add a blocking note that US-0022/0029/0033/0035/0036/0058/0059 are **not Ready** until `OI-08` closes. Name the date and owner for closing it. |
| ISS-08 | Low | B4 | §10 "Refinement: **weekly**, 60 minutes, product-owner-led" vs Doc 13 §8.2 "Backlog refinement — **Fortnightly** — PO + Eng + Test" | Cross-document contradiction on cadence and on attendees. Low operational impact but it is exactly the kind of drift the artifact-bus rule exists to prevent. | Align with Doc 13 §8.2, or have the PM align Doc 13 to this. One of the two must move. |
| ISS-09 | Low | B3 | §7, `SCR-18` "Recall initiation & ballot — Implements `FR-042`, `FR-043`, `FR-045`" | `FR-044` (grace window and post-failure cooldown) is implemented by US-0059 under `FE-024` and surfaced on this screen, but is not listed. | Add `FR-044` to `SCR-18`. |
| ISS-10 | Low | B1 | §3 WSJF table, EP-04 row | EP-04 scores 5.00 and is the highest WSJF in the table, yet is sequenced 4th; EP-09 scores 4.80 and is sequenced 9th. The note below the table explains that "sequence numbers order *epic start*, not completion" and that EP-09/EP-10 are cross-cutting and pulled forward — which is reasonable — but the table then does not mean what a WSJF table normally means, and no dependency rationale is given for EP-04 vs EP-02/EP-03. | State the sequencing rule explicitly ("WSJF ranks value density; sequence follows the walking-skeleton dependency chain, which dominates"), so a reader does not read the ordering as an error. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Routing instruction (to the owning role)

**FAIL → route to the product-owner (Priya Raghunathan).**

Required to reach a PASS:
1. **ISS-01** — add backlog coverage for `NFR-007` (and `NFR-008`), and add an explicit **Must-NFR → story/`NF` coverage map** to §12 alongside the existing Must-FR map. Declare any residual Must-NFR gap the way the four `FR` gaps are declared.
2. **ISS-02** — remove `FR-005` from `FE-002`, or write the story; then re-verify every `FE` Maps-to column against §12.
3. **ISS-03** — correct the 396/415 point total and publish per-epic subtotals.
4. **ISS-04**, **ISS-05**, **ISS-09** — fix the `SCR` table (`SCR-10`'s `FR-026`, `SCR-18`'s missing `FR-044`) and settle the `SCR-01…18` vs `SCR-01…20` range with Doc 02.
5. **ISS-06**, **ISS-07** — bring the ACs into line once Doc 02's guardrail phrasing and `OI-08` constants are fixed; mark the affected stories as not Ready until then.
6. Rework MUST produce a **new version** — bump `Version:` to at least **1.1.0** and set `Status: In Review`. This loop then re-reviews as cycle 2.

Note for sequencing: **ISS-06 and ISS-07 cannot be closed inside Doc 05 alone** — they depend on the
Doc 02 rework (ISS-03 and ISS-05 in that report). Rework Doc 02 first, then Doc 05, so this loop does
not burn a cycle on a dependency.

The reviewer has made no edit to `docs/05-product-backlog.md`.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — cycle 1 of 5.
