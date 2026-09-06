# Document Review Report — Doc 02 Requirements Specification v2.16.0 — business, cycle 1

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **technical-writer**, acting as neutral reviewer — **NOT** the document owner (the
> product-owner owns Doc 02). The reviewer scores and lists issues only; it never edits the
> document. All rework is done by the **owning role** (product-owner) as a new version.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.16.0
Review mode: business
Reviewer role: technical-writer (neutral — product-owner owns Doc 02)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 1 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 02 v2.16.0 applies the **PROPOSING-NOT-COUNTING-GATED** ruling (Rathish, Human Approver,
2026-08-30; `artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md`). I read the
ruling record in full, then independently checked every claim the version makes against it, against
the current text of FR-020, FR-024, FR-090, FR-123, the §4.24/§4.41 axis notes, and the OI-14 entry,
and against the shipped artefacts the version cites (Doc 03 §10.13.11 DES-102, Doc 08's FR-130 row,
`packages/sdk/src/eligibility.js`'s `COUNTING_ACTION` enum, and `packages/sdk/src/proposals.js`'s
`advanceStage()`). **Every claim checked out.** No normative text was amended (confirmed by diff-free
inspection of FR-024/FR-090/FR-123's operative sentences); the three confirming annotations are
present exactly where the changelog says; the two-axis reading is not just consistent with the
ruling's headline sentence but reproduces the ruling's own internal disambiguation of that sentence
(§1.3), so a future session reading only Doc 02 gets the same guard the ruling itself states; item
(e) is genuinely closed (DES-102 exists at Doc 03 §10.13.11, minted at v2.8.0, and Doc 08's FR-130
row reads COMPLETE since v2.4.0); item (h) is a real, previously-unaddressed textual gap in FR-091,
not an invented one; and items (f)/(g) accurately describe what is and is not built — I confirmed
directly in code that `proposals.js` never calls `schedule()` and that `advanceStage()` takes no
timeline input, so "the automation half is not built" is literally true.

Two **Low** issues, neither new to this delta in a way that reflects poorly on it: one is the
FR-064 cross-reference gap this document's own changelog says it is carrying forward from the
v2.15.0 review (`ISS-B1`, unrelated to this version's actual changes); the other is a small,
genuinely new observation — §8's FR-091 Gherkin block still reads as if timeline-driven automation
is exercised, with no pointer to the newly-honest §13(f) admission that it is not wired. Neither
issue is Critical/High/Medium and neither blocks the pass bar.

**Verdict: PASS** — 97%, zero Critical/High/Medium. The product-owner should set
`Status: Approved`; the SOP advances.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (`97%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — both rows are all "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 97 | 19.40 | The version states plainly what changed for the reader (nothing normative) and why (the built reading was already FR-conformant; the commissioning brief, not the requirement, was wrong). The FR-024 annotation closes with an explicit two-directional guard — "adding a verifier call to the authoring path violates this ruling; deleting the Worker-tier rule misreads it" — which is exactly the failure mode a future session would need warned against, and matches the ruling record's own closing warning almost verbatim. |
| B2 Completeness | 15 | 98 | 14.70 | All declared change sites present and verified individually: header Change block; FR-024 (§4.7); FR-090 (§4.25); FR-123 (§4.41); §13 items (e) closed, (f)/(g)/(h) added. No placeholders found anywhere in the document (full-text scan for `TBD`/`[FILL`/`PLACEHOLDER`/`XXX` returns only the §13 section title itself). |
| B3 Traceability & IDs | 20 | 98 | 19.60 | Every ID citation checked resolves correctly: DES-100 in FR-123's annotation matches the `COUNTING_ACTION` enum actually shipped in `packages/sdk/src/eligibility.js` (three values, `NotACountingAction` thrown otherwise) — the annotation's characterisation is accurate, not approximate. DES-102 in item (e) resolves to Doc 03 §10.13.11 (minted v2.8.0) and Doc 08's FR-130 row (COMPLETE since v2.4.0) — item (e)'s "CLOSED" claim is **verified true**, not merely asserted. No new BR/FR/NFR/CON/RISK ID minted; §13 items (f)/(g)/(h) are correctly lettered routing rows, not IDs. |
| B4 Correctness & consistency | 15 | 95 | 14.25 | **The highest-risk claim in the version — the two-axis reading — is defensible and precisely stated.** The ruling's headline sentence ("OPEN participation … no ID gate") is, read alone, ambiguous about whether it also lifts the Worker-tier condition; but the ruling record's own §1.3 explicitly forecloses that misreading ("It does NOT remove the OI-14 requirement..."), and Doc 02's FR-024 annotation reproduces that same disambiguation in its own words, cross-referenced to the §4.41 TWO-AXIS NOTE. I checked all four places CLAUDE.md's task flagged for contradiction risk (§4.41 TWO-AXIS NOTE, §4.24, FR-020 in §4.6, the §13 OI-14 entry) and found no site that a future reader could use to justify either mis-reading (re-gating authorship or deleting the Worker-tier rule). Item (h) is a genuine gap, not invented: FR-091's text (§4.26) says "no stage MAY be skipped" without excluding early termination at `decision` for a defeated/cancelled proposal, and the routing correctly scopes it as non-blocking for v1 (which holds no vote). Items (f)/(g) are honest, not overclaiming — I confirmed in `packages/sdk/src/proposals.js` that `advanceStage()` takes no timeline argument and that `schedule()` (in `governance.js`) is never called by the proposal service, matching (f)'s claim precisely. Small deduction for the two Low issues below, one carried and one new, both touching this criterion. |
| B5 Testability | 15 | 96 | 14.40 | No Gherkin change was needed or made, correctly — confirming annotations carry no new normative obligation. Minor deduction: §8's existing FR-091 scenario ("When each stage transition is executed by code per published timelines / Then the transition is recorded...") is not cross-referenced to §13(f)'s new, honest admission that this clause is unwired; see ISS-02. |
| B6 Convention compliance | 15 | 98 | 14.70 | RFC 2119 usage, ISO-8601 dates (2026-08-30 throughout), and the named-owner rule are all correctly followed (item (h) is owned by "product-owner" — Priya Raghunathan is the named Doc 02 owner of record, consistent with house style for routing rows elsewhere in §13). Annotation style (confirming, non-destructive, dated, sourced to the decision record) matches this document's own established precedent for prior rulings (OI-14, OI-19, OI-20, the 2026-08-24 counting-gate clarification). |
| **Total** | **100** | — | **97.05% ≈ 97%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | B4 | §4.6 FR-064, the "**v2 (deferred):**" clause — **carried forward from `artifacts/reviews/02-requirements-srs-v2.15.0-business-cycle1.md` ISS-B1** | Untouched by v2.16.0 (this version does not amend FR-064), so the previously-identified gap is still present in the current text: the deferred anti-abuse property ("cannot be bypassed by leaving and re-joining within the same session") is not cross-referenced to the v1 controls that actually bound it (FR-023 rate-limiting, FR-068 maturation gate). The v2.16.0 Change block itself acknowledges this is carried ("ISS-B1 Low carried"). | Same fix as previously recorded: add a short v1 cross-reference to FR-023/FR-068 in the "v2 (deferred):" clause. Non-blocking; may be folded into the next version whenever FR-064 is next touched rather than triggering a dedicated rework cycle. |
| ISS-02 | Low | B5 | §8 Gherkin, `# FR-091` block (the "per published timelines" scenario) vs §13 tracked routing item (f) | §8's FR-091 acceptance scenario reads as though timeline-driven stage advancement is an exercised behaviour ("When each stage transition is executed by code per published timelines / Then the transition is recorded..."), with no pointer to item (f)'s new, honest admission that this exact clause is **not built** (`schedule()` exists in `governance.js` but the proposal service never calls it; the demo advances by a button — verified directly in `packages/sdk/src/proposals.js`). A reader of §8 alone, without also reading §13, could believe the automation clause is demonstrated. This is a documentation-consistency gap the new item (f) creates by contrast, not a defect item (f) itself has. | Add a short parenthetical to the FR-091 Gherkin block's second scenario pointing to §13(f) — e.g. "(automation clause tracked OPEN — §13(f))" — so the acceptance criterion and the honest build-status note are co-located for a reader landing on either one first. Non-blocking; low cost, can ship with the next version that touches FR-091 or §8. |

> **Low** issues do not block the pass bar. There are **no** Critical, High, or Medium issues.

### 4.1 Verification performed (what I checked, and how)

| Claim in the version / hand-off | How I verified it | Result |
|---|---|---|
| No normative requirement text amended in FR-024/FR-090/FR-123 | Read each row's base operative sentence (pre-2026-08-30 wording) against the current text; only trailing parenthetical annotations were added | ✅ confirmed |
| Confirming annotations added at FR-024 (§4.7), FR-090 (§4.25), FR-123 (§4.41) | Read all three rows in full (lines ~609, ~786, ~930) | ✅ present, each dated 2026-08-30 and sourced to the decision record |
| Two-axis reading matches the ruling's own words, including its self-disambiguation | Read `DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md` §1.2–§1.3 verbatim; compared to the FR-024 annotation and the §4.41 TWO-AXIS NOTE | ✅ Doc 02's reading reproduces the ruling's own guard against both mis-readings |
| FR-123's DES-100 `COUNTING_ACTION` characterisation is accurate | Read `packages/sdk/src/eligibility.js` lines 68–90, 353–389 — three-value frozen enum, `NotACountingAction` thrown on any other scope | ✅ accurate; "a fourth member requires an amendment to FR-123 and DES-100" is a sound implication, not overreach |
| Item (e) "CLOSED" — DES-102 exists at Doc 03 §10.13.11 | Read Doc 03 §10.13.11 (line 2006) and the v2.8.0 changelog entry minting DES-102 | ✅ confirmed |
| Item (e) "row closed Doc 08 v2.4.0" | Read Doc 08 changelog v2.4.0 entry ("FR-130 CLOSES → COMPLETE") and the current FR-130 row state re-verified at v2.5.2/v2.5.3 | ✅ confirmed, still COMPLETE at the doc's current version |
| Item (h) is a genuine FR-091 text gap | Read FR-091's full text (§4.26); confirmed it says "no stage MAY be skipped" with no exception carved for early termination on DEFEATED/CANCELLED | ✅ genuine gap, correctly scoped as non-blocking for v1 |
| Item (f) "schedule() exists but the proposal service never calls it" | Grepped `schedule(` across `packages/`; confirmed the only caller is `packages/sdk/src/predict.js`, not `proposals.js`; read `advanceStage()` in `proposals.js` (no timeline parameter) | ✅ confirmed accurate |
| Internal consistency: §4.24, §4.41 TWO-AXIS NOTE, FR-020 (§4.6), OI-14 entry (§13) | Read all four locations in full | ✅ no contradiction with the new annotations in either direction |
| No placeholder / TBD text introduced | Full-document grep for `TBD`/`[FILL`/`PLACEHOLDER`/`XXX` | ✅ only the §13 section title itself ("Open issues / TBD"), pre-existing |
| §16.3 phasing-table rows for FR-090/091/123 need no update | Read §16.3 rows for FR-090, FR-091, FR-123 | ✅ correctly unchanged — nothing normative moved, so the phasing table is untouched by design |

---

## 5. Routing instruction (to the owning role)

**PASS — the product-owner sets Doc 02 `Status: Approved` and the SOP advances.** No new version is
required. Cycle 1 of 5; the loop closes here.

**ISS-01 and ISS-02 are both Low and non-blocking** — fold both cross-reference additions into
whichever future Doc 02 version next touches FR-064 or FR-091/§8, rather than cutting a dedicated
version for either.

**Downstream consequences of this ruling (not defects in this document):**

- Doc 03 (architect) and Doc 08 (tester) already reflect the same ruling at v2.10.0 and v2.5.3
  respectively, per the decision record's Application table — I independently confirmed both, so
  Doc 02's account of them is accurate, not just internally self-consistent.
- Item (h) remains genuinely open and owned by the **product-owner** — it is a clarification the
  product-owner still owes (what happens textually to a DEFEATED/CANCELLED proposal in FR-091),
  separate from and not resolved by this version.
- Items (f) and (g) remain OPEN Must-row blockers in Doc 08 (G-NOMECH) and are correctly not
  described as closed anywhere in this version.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — verdict is PASS at cycle 1 of 5. The cap was not reached and no human decision is
required or recorded here.
