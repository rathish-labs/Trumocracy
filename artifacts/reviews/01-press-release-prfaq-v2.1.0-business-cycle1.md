# Document Review Report — 01-press-release-prfaq.md v2.1.0 (business, cycle 1)

> Produced by the **document-review** skill. The reviewer scores and lists issues only — it
> never edits the reviewed document. Independence: reviewer (technical-writer) is not the
> document's owning role (product-owner).

```
Reviewed document: 01-press-release-prfaq.md
Document version: 2.1.0
Review mode: business
Reviewer role: technical-writer
Score: 87%
Critical: 1
High: 2
Medium: 3
Low: 0
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 01 v2.1.0 adds a §0 "read this first" v1/v2 posture banner and six inline
"(v2 target — see §0)" markers, per the approver's ruling of 2026-09-06 (ruling 5) and the
product-owner's anchored spec. The banner itself is accurate, well-sourced (every claim traces
cleanly to Doc 02 §4.45 FR-131 / §16.4, Doc 14 §0.1/§2.2/§2.6, Doc 09 §0, and Doc 06 §7's
`IS_INSECURE_MOCK` discipline), and the six markers are correctly placed and correctly worded.
**However, the banner and the six markers are not sufficient for a reader landing on the document
in isolation.** The document still contains at least five unmarked, present-tense, unqualified
"anonymous" / "no link to identity" claims about v1 participation acts (party membership /
Supporter status) — the exact class of claim FR-131 clause (e) exists to prohibit — most
prominently the very first customer FAQ answer ("Who is this for?"), which is at least as likely
to be read in isolation as the six passages that were marked. This is a completeness/correctness
gap in the PO's inline-marker judgement, not a flaw in the banner's own wording, and it caps the
verdict at **FAIL** regardless of the numeric score. A secondary, lower-severity finding: the
header's own `Status:` field says the version "adds four" markers, while the same header's
change-log entry two lines later — and the document body — show six. No transcription residue
(orphaned `FIND:`/fences, duplicated headings) was found at any of the 8 OP boundaries; tenet
count (9), FAQ counts, §C/§D content and Classification are all internally consistent and
unchanged as claimed.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`87%`)
- Critical = 0? **no** (1) · High = 0? **no** (2) · Medium = 0? **no** (3)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 100 | 20.0 | Unaffected by this version; posture change only. |
| B2 Completeness | 15 | 95 | 14.25 | All required sections present and filled; minor header self-contradiction (ISS-06). |
| B3 Traceability & IDs | 20 | 95 | 19.0 | FR-131/FR-132/H-01..H-04/NFR-023 citations in §0 and the six markers are all correctly identified and accurately quoted. |
| B4 Correctness & consistency | 15 | 40 | 6.0 | Five unmarked passages (ISS-01..ISS-05) restate exactly the claim class §0 was written to negate — internally inconsistent with the banner's own override clause and with Doc 02 §16.4/§4.45(e). |
| B5 Testability | 15 | 100 | 15.0 | Not applicable at PR-FAQ level; no regression in Gherkin/MoSCoW/out-of-scope framing. |
| B6 Convention compliance | 15 | 85 | 12.75 | ISO-8601 dates and named owners correct throughout; ISS-06 (header self-contradicts its own change-log two lines down). |
| **Total** | **100** | — | **87.0%** | Critical/High/Medium present → verdict capped at FAIL independent of the numeric score. |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Critical | B4 | §E1, "Who is this for?" — line 352: *"Once you are in: you are a **Supporter** by default — anonymous, full voting rights."* | This is the **first customer FAQ answer** — at least as likely to be read in isolation as any of the six marked passages — and it makes the exact unqualified, present-tense claim ("anonymous") that Doc 02 §4.45 FR-131 clause (e) prohibits for a v1 participation act (party membership / Supporter status), with **no** `(v2 target — see §0.)` marker and no reference to §16.4 `H-02`. It sits three FAQ entries above the correctly-marked "How is my data used and kept private?" answer, so a reader who stops at the first answer receives the opposite of the disclosed v1 truth. | Add the `(v2 target — see §0.)` marker to this sentence (or fold the Supporter/Worker/Candidate summary here into a forward reference to the already-marked privacy answer), citing `H-02`, in the owning role's next version. |
| ISS-02 | High | B4 | §E3, "Why no analytics or user tracking at all?" — line 567: *"Supporters are anonymous by unconditional guarantee; letting behaviour deanonymise them through the back door would break that guarantee silently and irreversibly."* | Same defect class as ISS-01: an unmarked, present-tense, unqualified "anonymous... unconditional guarantee" claim about the Supporter participation tier, in a section framed as "the hard questions answered honestly" — a section explicitly designed to be quotable and is itself an isolated-read risk. Contradicts §16.4 `H-02` and the (marked) §E1 data-privacy answer three FAQs earlier. | Mark with `(v2 target — see §0.)` and a pointer to `H-02`, or rephrase to state the v2 target vs the v1 reality as OP6/OP7 do. |
| ISS-03 | High | B4 | §E3, "Nothing is ever deleted — what about my right to be forgotten?" — line 577: *"For **Supporters**: there is nothing to delete. ... There is no link between your identity and any action, so there is no personal data to erase..."* | Directly restates the "no link between identity and party membership/action" claim that §16.4 `H-02` and the banner's override clause exist to negate for v1 — unmarked, present tense, in the same "hard questions" section as ISS-02. A reader relying on this answer for a genuine erasure request would be told something false about v1. | Mark with `(v2 target — see §0.)`, citing `H-02`; state the v1 reality (the operator DB can link the account to the party) alongside the v2 target, following the OP8 pattern already used two answers later in the same section. |
| ISS-04 | Medium | B4 | §D, final bullet (behavioural-tracking rationale) — line 338: *"...the analytics capability loss is accepted permanently in exchange for **unconditional anonymity for Supporters**."* | Present-tense capability claim, unmarked, inside a section the PO's session note classified wholesale as "commitments and trade-offs, not present-tense capability claims" (`artifacts/product-owner-2026-09-06T1530-doc01-posture.md`) — this specific clause is an exception to that generalisation. Lower prominence than ISS-01–03 (embedded mid-paragraph, not a standalone question), hence Medium rather than High/Critical. | Add `(v2 target — see §0.)` or rephrase to "unconditional anonymity for Supporters (v2 target)". |
| ISS-05 | Medium | B4 | §E1, "Do I need to understand crypto?" — line 366: *"...the people who help you recover it cannot see how you voted."* Repeated in §E3, "What if someone loses their phone?" (~line 665): *"it never reveals your past votes or governance history to whoever helped you recover."* | An unmarked, present-tense claim that a specific actor (recovery staff) cannot see vote direction, appearing twice. Not sourced in the OP spec's claim→source table and not clearly reconciled with §16.4 `H-01`/`H-03` (the operator database can see vote direction) or with the fact that casting a vote is not yet a working screen (§0, Doc 14 §2.6) — it is unclear whether this is a v1 claim, a v2 claim, or an orthogonal access-control point, and as written a Grade-8 reader would take it as a present-tense guarantee. | Either ground this claim against a specific Doc 02/Doc 03 requirement (and mark it if it is a v2 property) or delete/soften it in both locations; route to the owning role for a sourcing decision. |
| ISS-06 | Medium | B4 / B6 | Header, `Status:` field (line 9) vs the `v2.1.0` change-log entry (lines 28–34) | The `Status:` field states the version "adds **four** '(v2 target — see §0)' markers," while the change-log entry two lines below it — and the document body (OPs 3–8) — list and contain **six** markers (§A tenet 2, §A tenet 4, §B head, §E1 data-privacy, §E1 coercion, §E3 member-list). The header contradicts itself on a plainly countable fact. | Change "four" to "six" in the `Status:` field to match the change-log entry and the document body. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL. (No Low issues recorded this cycle.)

## 5. Routing instruction (to the owning role)

**FAIL.** Route to the **product-owner** (Priya Raghunathan), the owning role for Doc 01. Rework
MUST produce a **new version** (`2.2.0` — a Medium+ issue is present, so at minimum a **minor**
bump; `Status: In Review`) that:

1. Adds the `(v2 target — see §0.)` marker (or equivalent inline v1/v2 disambiguation, citing the
   relevant `H-##` row) to the five passages in ISS-01 through ISS-04, and resolves the sourcing
   question in ISS-05 for both of its occurrences.
2. Corrects the "four" → "six" marker count in the `Status:` field (ISS-06).
3. Re-confirms after the edit: 9 tenets, unchanged §C/§D/§E question sets, no new/removed/renumbered
   requirement or FAQ (the same invariants the v2.0.0 → v2.1.0 spec already certified), and no
   transcription residue at the new edit boundaries.

After rework, re-review at cycle 2 against this same rubric.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5; the cap has not been reached.
