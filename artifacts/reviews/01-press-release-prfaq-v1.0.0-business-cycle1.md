# Document Review Report — 01 PR-FAQ (Trumocracy)

> Produced by the **document-review** skill. The reviewer **scores and lists issues only — it never
> edits the reviewed document**. All rework is done by the owning role (**product-owner —
> Priya Raghunathan**) as a new version.

```
Reviewed document: 01-press-release-prfaq.md
Document version: 1.0.0
Review mode: business
Reviewer role: architect (neutral — not the owning role for Doc 01)
Score: 81%
Critical: 0
High: 4
Medium: 4
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 01 is a genuinely strong PR-FAQ: the tenets are load-bearing rather than decorative, §E3 answers
the hostile questions (extremist organising, the billionaire, the state demand, "why blockchain",
"aren't you the gatekeeper") with real concessions instead of evasion, and §D and the seven kill
criteria are unusually explicit. It **fails** this cycle for one dominant reason: **three of the
eleven success metrics in §C cannot be measured by a system built to the privacy promises made two
pages earlier**, and one hostile-question answer (§E3, state compulsion) makes a factual claim —
"a compelled disclosure yields the same public information anyone can already download" — that
Doc 02 §7 contradicts, because Trumocracy does retain recovery notification channels and support
records classified as personal data. A Gate-1 approver committing USD 4.2M is being shown promises
that are partly unfalsifiable and one privacy answer that is stronger than the design supports.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`81%`)
- Critical = 0? **yes** · High = 0? **no** (4) · Medium = 0? **no** (4)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 80 | 16.00 | Problem statement and solution are excellent and non-generic. Docked because three headline metrics are structurally unmeasurable (ISS-01, ISS-02). |
| B2 Completeness | 15 | 92 | 13.80 | Every template section present and filled; no placeholders. One genuinely hostile question is missing (ISS-06). |
| B3 Traceability & IDs | 20 | 85 | 17.00 | `CON`/`RISK`/`NFR`/`FR` IDs used correctly and consistently with Doc 02; §C names a measurement owner. Approvers are teams, not individuals (ISS-08). |
| B4 Correctness & consistency | 15 | 65 | 9.75 | Four cross-document contradictions: the §E3 compulsion claim vs Doc 02 §7 (ISS-03); launch date and three-pilot promise vs Doc 13 (ISS-04); Could vs Won't (ISS-05); RTL wording (ISS-10). |
| B5 Testability | 15 | 75 | 11.25 | Kill criteria are exemplary — trigger, threshold and action each stated. Docked for the unmeasurable metrics and a mislabelled guardrail (ISS-07). |
| B6 Convention compliance | 15 | 88 | 13.20 | ISO-8601 throughout, plain-language style, RFC 2119 not required in a PR-FAQ. Team-named approvers (ISS-08); "Approvers" block inconsistent with Doc 13 §7.1 which names individuals. |
| **Total** | **100** | — | **81.0%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **High** | B1/B5 | §C, row "Reported coercion cases where the voter's silent override took effect" (target ≥ 95%; guardrail "0 cases where the override was externally detectable") | The metric is **structurally unmeasurable by the system that promises it**. `FR-032`/`NFR-003` require that *neither the public record, the client device, nor any notification* reveals that a replacement ballot occurred — including to Trumocracy. There is therefore no mechanism by which Trumocracy can determine, for a given reported coercion case, whether an override "took effect". No measurement method, data source, sampling frame or adjudicator is named anywhere in Docs 01, 02 or 13. The second half ("0 externally detectable overrides") likewise has no adversary model. | Either (a) replace the metric with one that is measurable without breaking receipt-freeness — e.g. *"an independent adversarial audit, given N ballots, a stated adversary capability set and a margin ε, fails to distinguish re-voted from non-re-voted ballots at confidence ≥ 1−δ"* — stating N, ε and δ; or (b) state explicitly that this promise is verified only by adversarial audit and cannot be reported as an operational rate, and remove the "≥ 95% of reported cases" figure. Do not carry an unmeasurable number into Gate 1. |
| ISS-02 | **High** | B1/B5 | §C, guardrail "Duplicate/synthetic-person rate ≤ 0.1% of credentials, independently audited"; repeated in §E2 | Same defect. `FR-002` requires that two actions by one person be indistinguishable from actions by two people, and `FR-003` forbids retaining any identity data after the enrolment check. Nothing in the system can therefore compute a duplicate rate. "Independently audited" names no auditor, no sample frame, no consent basis for the out-of-band sample the audit would need, and no confidence interval. The architect independently reached the same conclusion (`artifacts/architect-teststrategy-2026-08-09T0100.md`, OPEN-14). | Specify the measurement design in §C or delegate it explicitly: out-of-band, consented, audited sample of size N per region, stated confidence interval, named audit body and cadence — or restate the guardrail as a design assertion ("no mechanism exists by which a duplicate credential can be issued, verified by capability-absence testing") rather than a measured rate. |
| ISS-03 | **High** | B4 | §E3, "What happens if a government orders you to hand over the member list?" — sentence: *"A compelled disclosure therefore yields the same public information anyone can already download."* | **Factually contradicted by Doc 02 §7**, which retains "Recovery requests & notification channel — Restricted — **Yes, PII** — 90 days after completion" and "Support & appeal records — Restricted — 24 months". A compelled disclosure would therefore yield a set of notification identifiers and support records that the public cannot download, and which are correlatable with enrolment timing. The answer discloses attestor exposure, network correlation and blocking — good — but omits the personal data Trumocracy itself holds. This is the single most consequential hostile question in the document and the answer overstates the protection. | Add the omitted category explicitly: state that Trumocracy holds a recovery notification channel and support/appeal records containing personal data, for how long, what a compelled disclosure of *those* would reveal, and why they cannot be eliminated. Then re-word the "same public information" sentence. Consistency with Doc 02 §7 and `NFR-010` must be resolved in the same rework cycle (see the Doc 02 report, ISS-02 there). |
| ISS-04 | **High** | B4 | §B dateline ("2027-03-01"), §C ("≥ 250,000 by 2027-09-01"; "across the 3 pilot jurisdictions"), §E2 ("Gate 2 target 2027-02-15, launch 2027-03-01"), §A/§B "three pilot jurisdictions" | Contradicted by **Doc 13 §3.4 and §13.3**, which state that the evidence-based Gate 2 is **2027-05-14** (+13 weeks) and 100% rollout **2027-07-09**, and which **recommend launching in one pilot jurisdiction, not three** (lever L2, §8.3). Doc 01 v1.0.0 carries no flag that its dated promises are contested by the plan presented in the same Gate-1 packet. The §C targets are keyed to the superseded date: "250,000 by 2027-09-01" was ~6 months post-launch and becomes <2 months post-100%-rollout. | Do not silently adopt Doc 13's dates (that is the approver's decision). Instead: add an explicit note in §C and §E2 that the launch date, the Gate-2 date and the pilot count are **subject to the Gate-1 appetite decision recorded in Doc 13 §13.3**, restate every time-boxed metric as *"month N post-100%-rollout"* rather than a fixed calendar date, and state which §C targets change under the single-pilot lever. |
| ISS-05 | **Medium** | B4 | §D, final bullet group: *"Party dormancy/deactivation lifecycle, treasury splitting on a fork, and personal blocklists. Deferred; tracked as **Could** items."* | Doc 02 §11 places these three under **Won't (this release)**, not Could. Could and Won't are different MoSCoW commitments and the difference is material to a Gate-1 approver sizing the release. | Align to one classification. If they are Won't, say Won't in §D; if Could, correct Doc 02 §11 in the same cycle. |
| ISS-06 | **Medium** | B2 | §E3 (the hard questions) | One genuinely hostile question is unasked and unanswered: **"What happens to my party, and to the permanent record, if Trumocracy runs out of money or shuts down?"** The document promises records that are "published and versioned **forever**" (§B), a permanent public record, and no override — while §E2 concedes there is no revenue, an 18-month runway and that sustainability beyond month 18 is an open question (`OI-06`). §E3 answers the exit question only from the *party's* side ("export your history"). A reader is entitled to ask who pays for permanence and what happens to citizens mid-ballot if funding stops. | Add an §E3 entry answering it honestly: who holds the archive, what is guaranteed to survive operator death, what is not, and what the export/reconstitution path costs a party in practice. Cross-reference `OI-06`. |
| ISS-07 | **Medium** | B5 | §C, row "Independently reproducible tallies", guardrail column: "≥ 25 distinct third-party organisations running the verifier by month 6" | This is an **adoption target**, not a must-not-regress guardrail. Placing it in the guardrail column means the table's own semantics ("guardrail = must-not-regress") do not hold, and a reader cannot tell which cells are commitments and which are aspirations. Note also that `FR-055` (the verifier itself) is **Should**, not Must — so a Must-level guardrail depends on a Should-level requirement. | Move the 25-organisation figure to the Target column as a second target, or restate the guardrail as something that can regress (e.g. "0 closed ballots whose published result fails third-party reproduction"). Separately, reconcile the Must/Should mismatch with `FR-055` in Doc 02. |
| ISS-08 | **Medium** | B3/B6 | Header block: `Approvers: Gate 1 — Product, Engineering, Design` | Names **teams**, not people, against the handbook's named-owner rule and inconsistent with Doc 13 §7.1/§12, which names every Gate-1 signatory individually (Priya Raghunathan, Ana-Maria Petrescu, Samuel Oyelaran, Rafael Duarte, plus the human approver). | Replace with the named individuals from Doc 13 §12, including the human approver row. |
| ISS-09 | Low | B1 | §E2, "top 3 risks" | Lists `RISK-01`, `RISK-02`, `RISK-06`. Doc 13 §6 — the register of record — ranks the top five by exposure as `RISK-01`, `RISK-02`, `RISK-04`, `RISK-06`, `RISK-20`. `RISK-04` (mob capture of a founding charter) is at the same exposure of 20 and is omitted. | Either align to the register of record or state the selection basis ("top 3 *product* risks; delivery risks in Doc 13 §6"). |
| ISS-10 | Low | B4 | §B "in eight languages including right-to-left script**s**"; §E1 same | Doc 02 `NFR-013` requires "at least **one** right-to-left script". The plural over-promises against the requirement. | Use "including at least one right-to-left script", or raise `NFR-013`. |
| ISS-11 | Low | B6 | §E2, "What is the estimated cost and timeline (appetite)?" | States the timeline as settled fact ("design and build through 2027-01") with no reference to `CON-007`'s "scope, not date, absorbs overrun" or to the variance. Compounds ISS-04. | Cross-reference `CON-007` and Doc 13 §13.3 in this answer. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Routing instruction (to the owning role)

**FAIL → route to the product-owner (Priya Raghunathan).**

Required to reach a PASS:
1. Fix **ISS-01** and **ISS-02** by giving each unmeasurable metric a stated measurement design (method, data source, sample size, confidence, adjudicator) **or** by demoting it from a measured rate to an audit-verified property. These two changes must be mirrored in Doc 02 (`BR-006`/`NFR-004`, `BR-011`/`NFR-003`) and Doc 13 §1 (O-1, O-7) so the three documents state the same thing.
2. Fix **ISS-03** by disclosing the personal data Trumocracy actually retains (Doc 02 §7) inside the state-compulsion answer, and by reconciling `NFR-010` in the same cycle.
3. Fix **ISS-04** by making every dated promise conditional on the Gate-1 appetite decision, and by re-expressing time-boxed metrics relative to rollout rather than to a superseded calendar date.
4. Fix **ISS-05**, **ISS-06**, **ISS-07**, **ISS-08** as described above.
5. Rework MUST produce a **new version** — bump `Version:` to at least **1.1.0** (Medium+ issues → minor bump) and set `Status: In Review`. This loop then re-reviews as cycle 2.

The reviewer has made no edit to `docs/01-press-release-prfaq.md`.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — cycle 1 of 5.
