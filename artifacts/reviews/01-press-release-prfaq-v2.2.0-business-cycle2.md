# Document Review Report — 01-press-release-prfaq.md v2.2.0 (business, cycle 2)

> Produced by the **document-review** skill. The reviewer scores and lists issues only — it
> never edits the reviewed document. Independence: reviewer (technical-writer) is not the
> document's owning role (product-owner).

```
Reviewed document: 01-press-release-prfaq.md
Document version: 2.2.0
Review mode: business
Reviewer role: technical-writer
Score: 96%
Critical: 0
High: 0
Medium: 1
Low: 0
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 01 v2.2.0 is a clean, well-grounded rework against my cycle-1 report
(`01-press-release-prfaq-v2.1.0-business-cycle1.md`, FAIL 87%). All six cycle-1 issues
(ISS-01 Critical through ISS-06 Medium) are verified **closed**, each accurately sourced against
Doc 02 §4.45/§16.4 and correctly worded. The PO's own additional sentence-level sweep found and
marked three further passages (§E2 "top 3 risks", §E3 "extremists", §E3 "billionaire") plus one
correctly-distinguished `(v1 accuracy note — see §0.)` for a partly-true enrolment claim (§E2
legal/privacy). The marker count is now stated precisely in the header (15 `(v2 target)` + 1
`(v1 accuracy note)`) and I independently counted the body and confirm both figures exactly — the
`ISS-06` miscount cannot recur. No transcription residue at any of the 12 OP boundaries (no
orphaned `FIND:`/fences, no duplicated headings or questions); all structural invariants hold (9
tenets, unchanged §C/§D/§E sets, `Classification: Public` unchanged). My own independent
sentence-level re-sweep of §A–§F found no further unmarked present-tense identity-linkage claim.

**One new finding, as the coordinator specifically asked me to judge:** the PO deliberately left
the *integrity / no-gatekeeper* claim class unmarked (§A tenet 1, and §E3 "Why blockchain at all?"
most directly; tenet 8 more weakly) and asked for an explicit ruling. My judgement: **the §0
banner does not cover this class.** Its only enforcement mechanism — the override sentence — is
scoped exclusively to a reader "believing that Trumocracy cannot today link a person to a vote, to
a party membership or to a petition they backed"; it says nothing about tally or count alteration.
Tenet 1 ("no gatekeeper, ever — not even us... Governance runs in code or it does not run") and the
"Why blockchain at all?" answer ("nobody, including Trumocracy, may be able to alter a threshold
count... a tally") are directly contradicted by the approver-**CONFIRMED** Doc 02 §16.5 finding
(Charter Rule 3 / T-05): in v1 the operator's database **is** the source of truth for tallies, and
the operator **can in principle alter it before publishing the hash** — tamper-evidence, not
tamper-prevention. This is real and contained rather than safety-critical (it lacks the physical-
risk consequence the anonymity gaps carried, and the adjacent "You say 'no gatekeepers'..." FAQ
already partly concedes the tension), so I classify it **Medium**, which caps this cycle at FAIL
despite the otherwise-clean rework.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — a Medium issue caps the verdict regardless of the numeric score.

## 3. Closure verification — cycle-1 issues

| Cycle-1 ID | Severity | Fixed at (v2.2.0) | Verified |
|---|---|---|---|
| ISS-01 | Critical | §E1 "Who is this for?" (line 389) | **Closed.** Both v2 phrases ("anonymous", "unique") named and grounded (`H-01`, `H-02`, `H-15`, `FR-082`, `FR-132`§(d)); v1-true remainder explicitly preserved. |
| ISS-02 | High | §E3 "Why no analytics" (line 629) | **Closed.** Names the exact downstream sentence, grounds it in `H-02`/`FR-082`, preserves the permanent no-tracking commitment. |
| ISS-03 | High | §E3 "right to be forgotten" (line 649) | **Closed.** States the v1 reality alongside the v2 claim (the fix pattern I asked for), grounded in `H-01`/`H-02`/`FR-082`/`FR-086`. |
| ISS-04 | Medium | §D final bullet (line 376) | **Closed.** Grounded in `H-02`/`FR-082`/`FR-086`; the permanent no-tracking scope commitment is explicitly preserved. |
| ISS-05 | Medium | §E1 crypto FAQ (line 414) + §E3 phone-loss (line 756), both sites | **Closed — grounded, not deleted**, as I invited. `FR-059` (PARTIAL) and `H-10` support the v1/v2 distinction accurately at both occurrences. |
| ISS-06 | Medium | Header `Status:` field, fully rewritten | **Closed.** Independently recounted: **15** `(v2 target — see §0.)` + **1** `(v1 accuracy note — see §0.)` in the body (§A–§F), matching the header exactly. |

## 4. Sweep verification (12 OP boundaries + independent re-sweep of §A–§F)

- **Transcription residue:** none found. No orphaned `FIND:`/backtick-fence lines; `## 0.`, `## A.`,
  `## B.`, `## C.`, `## D.`, `## E.`, `## F.` each occur exactly once; no duplicated question or
  changelog line at any of the 12 boundaries.
- **Structural invariants:** 9 tenets (unrenumbered); §C table unchanged (17 rows); §D bullets
  unchanged in count and wording apart from the ISS-04 addition; §E1/§E2/§E3 question sets
  unchanged; `Classification: Public` and `Version`/`Status`/`Last updated` fields internally
  consistent.
- **Independent re-sweep for unmarked present-tense identity-linkage claims:** I re-grepped every
  occurrence of "anonymous/anonymity/private/receipt-free/secret/cannot see/no link/unlinkable" in
  the body. All occurrences outside the 15+1 marked passages are either (a) inside an already-marked
  answer's continuation (e.g. the Supporter/Worker/Candidate detail under the marked "How is my
  data..." answer, or the RISK-01/02/06 detail under the marked "top 3 risks" answer — both
  explicitly named by their marker), (b) describing **other, conventional parties** as the contrast
  case in §B "The problem" (not a Trumocracy capability claim), or (c) the §F pilot-jurisdiction
  selection-criterion "no legal prohibition on anonymous political association" (a legal-environment
  criterion, not a Trumocracy capability claim — unchanged assessment from cycle 1). I found **no**
  further unmarked instance of the clause-(e) claim class.

## 5. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 100 | 20.0 | Unaffected. |
| B2 Completeness | 15 | 100 | 15.0 | All sections present and filled; header now states exact marker counts. |
| B3 Traceability & IDs | 20 | 100 | 20.0 | Every new marker's `FR/H/NFR` citation checked against Doc 02 and is accurate. |
| B4 Correctness & consistency | 15 | 75 | 11.25 | Six cycle-1 issues cleanly closed; one new, contained gap (ISS-01 this cycle) in the integrity/no-gatekeeper claim class. |
| B5 Testability | 15 | 100 | 15.0 | Not applicable at PR-FAQ level; no regression. |
| B6 Convention compliance | 15 | 100 | 15.0 | ISO-8601 dates correct; the ISS-06 header self-contradiction is fully resolved and independently re-verified. |
| **Total** | **100** | — | **96.25% → 96%** | A Medium issue caps the verdict at FAIL independent of the numeric score. |

## 6. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Medium | B4 | §A tenet 1 (lines 141–143): *"No gatekeeper, ever — not even us. If a human being at Trumocracy can approve, reject, promote, demote, delete or reorder anything inside a party, we have rebuilt the thing we set out to abolish. Governance runs in code or it does not run."* and §E3 "Why blockchain at all?" (lines 733–745): *"nobody, including Trumocracy, may be able to alter a threshold count, a membership roll or a tally, and anyone must be able to verify the result themselves without trusting us."* Both unmarked. | Directly contradicted by the approver-**CONFIRMED** finding at Doc 02 §16.5 (Charter Rule 3 / T-05): in v1 the operator's database **is** the source of truth for tallies; the on-chain hash gives tamper-**evidence**, not tamper-**prevention** — "the operator can in principle alter the DB before publishing the hash." The §0 banner's only enforcement mechanism, the override sentence, is scoped exclusively to identity-linkage ("link a person to a vote, to a party membership or to a petition they backed") and says nothing about tally/count alteration, so it does not cover this claim class. Tenet 8 ("nothing is deleted... History is the immune system") is a **weaker** instance of the same class — its core claim (append-only, immutable record) is materially true in v1 under `NFR-028` (Must, IN-v1) so I do not weight it equally with tenet 1. This is the exact claim class the PO flagged as an open scope question rather than a clear miss, and I concur it is real: a reader stopping at Tenet 1 — the first, most quotable tenet, immediately after §0 — would form a false belief the banner's stated override does not correct. Classified **Medium, not Critical/High**, because it lacks the anonymity gaps' physical-safety consequence, and the adjacent §E3 "You say 'no gatekeepers'... Aren't you the gatekeeper?" answer already partly concedes the tension ("Today, partly yes, and that is the most serious unresolved tension in the product") — just not cross-referenced from Tenet 1 or the blockchain answer. | Either (a) add a `(v2 target — see §0.)`-style marker to Tenet 1 and the "Why blockchain at all?" answer, grounded in `T-05`/Charter Rule 3, following the pattern already established for the anonymity class, or (b) obtain an explicit approver ruling (mirroring the 2026-08-23 anonymity ruling) that this claim class is out of scope for the v2.1.0/v2.2.0 posture rework, and record that ruling in the header. Either resolution is acceptable; leaving it un-ruled is not, given the precedent this rework itself just set. |

> **Low** issues do not block the pass bar. No Low issues recorded this cycle.

## 7. Routing instruction (to the owning role)

**FAIL** (Medium present). Route to the **product-owner** (Priya Raghunathan). Rework MUST produce
a **new version** (`2.3.0` — minimum minor bump for a Medium fix; `Status: In Review`) that either
marks the integrity/no-gatekeeper class per ISS-01's option (a), or records an explicit approver
ruling per option (b). No other issue is open — cycles 1's six issues remain verified closed and
need no further work. After rework, re-review at cycle 3 against this rubric.

## 8. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5; the cap has not been reached.
