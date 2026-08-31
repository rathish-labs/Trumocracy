# Document Review Report — Doc 07 Test Cases & Suites v2.4.3 (technical, cycle 1)

> Produced by the **document-review** skill. Reviewer is **engineer** (neutral — the **tester**
> owns Doc 07; the engineer role never edits this document and made no edits in this session).

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.4.3
Review mode: technical
Reviewer role: engineer
Score: 92%
Critical: 0
High: 1
Medium: 0
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 07 v2.4.3 is billed as a **"ruling sync only"** version: it claims to correct three places
where the document asserted a ruling was still *owed* on the two Doc 03 §10.13.13 open questions,
now that the human approver ruled both on 2026-08-30. I verified every substantive claim in the
changelog against the primary sources (`git diff` against HEAD, Doc 03 v2.10.0 §10.13.13, Doc 02
v2.16.0, `packages/protocol/src/proposals.js`, `packages/protocol/src/governance.js`, and a live
`npm test` run) and **all of them hold**: no count moved, the published FR-091 stage set is
genuinely unchanged, FR-091/FR-092 correctly stay OPEN (G-NOMECH), the source pins exist as cited,
and the suite is genuinely 610/610 green. However, the document's own central claim — that "**the
revisit note on TC-3545 is DISCHARGED**" — is **false on inspection of TC-3545's own row**: the
exact parenthetical the changelog describes as discharged is still sitting, word-for-word
unedited, inside TC-3545's Expected-result column, still asserting that a ruling is "flagged for
an approver ruling" and that the case "must be revisited" if it goes the other way — the ruling
that already happened. This is a self-contradiction within the very version whose stated purpose
was to fix exactly this class of staleness, so it is a **High** finding that caps the verdict at
**FAIL** regardless of the otherwise-clean numeric score.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`92%`)
- Critical = 0? **yes** · High = 0? **no** (1) · Medium = 0? **yes**
- **Verdict:** `FAIL` — one High issue is present; the score is also below the 95% bar.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | FR-091/FR-092 correctly kept OPEN (G-NOMECH) for the same unwired-`schedule()` / unbuilt-DES-097 reasons as before; matches Doc 02 v2.16.0 §13 tracked routing (f)/(g) verbatim. |
| T2 Soundness | 20 | 92 | 18.4 | The ruling-sync reasoning itself is sound and accurately mirrors Doc 03 v2.10.0 §10.13.13 and the DECISIONS memo; docked for shipping a version whose own "discharged" claim is contradicted by unedited content it was meant to fix. |
| T3 Traceability & IDs | 20 | 80 | 16.0 | TC-3545's row (the actual traceable unit the RTM cites) still carries stale, now-false "ruling owed / must be revisited" text — see ISS-01. This is the criterion most directly hit. |
| T4 Security & failure modes | 15 | 100 | 15.0 | Not touched by this version; no regression versus the already-PASSED v2.4.2 baseline. |
| T5 Completeness & testability | 15 | 88 | 13.2 | The version explicitly enumerates "three places" it corrects; a fourth place (TC-3545's own row) needed the identical correction and was missed, so the stated scope of the fix is incomplete on its own terms. |
| T6 Convention compliance | 10 | 98 | 9.8 | Version/changelog/status conventions, semver bump, and source-pin discipline are all followed correctly; minor changelog-provenance imprecision (ISS-02). |
| **Total** | **100** | — | **92.0%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **High** | T3 / T5 | §5.6, TC-3545 row (Expected-result column, under "### TC-3542..TC-3547") | The changelog and the §5.6 narrative note both claim "**the revisit note on TC-3545 is DISCHARGED**" / "**FR-090's RTM revisit flag is discharged**". But TC-3545's own row text is **unedited** and still reads: *"(Doc 03 §10.13.13 open question (b) — whether PROPOSING should instead be an FR-123 counting action — is flagged for an approver ruling; if it is ruled a counting action this case and FR-090's row must be revisited.)"* This is now **factually false** — the ruling happened 2026-08-30 and went the *other* way (NOT a counting action) — yet a reader consulting TC-3545 directly (e.g. during Gate-2 RTM verification) sees an assertion that a ruling is still pending. This is a self-contradiction within v2.4.3 itself: the very version whose stated purpose is "correcting the three places this document asserted a ruling was OWED" left a fourth, more load-bearing place (the TC's own text, which is what the RTM actually cites) uncorrected. Contrast with the TC-3552..TC-3555 heading note (line ~1517), which *was* correctly updated to say "RULED 2026-08-30" — the same treatment was not applied to TC-3545. | Tester (Doc 07 owner) MUST edit TC-3545's Expected-result column to reflect the ruling — e.g. replace or annotate the parenthetical with something matching the TC-3552..3555 treatment: `[DISCHARGED at v2.4.3 — ruled 2026-08-30: PROPOSING is NOT an FR-123 counting action; TC-3545 confirmed correct as written; no revisit needed]`. This is a textual/documentation-only fix (no automation, status, or count change) — bump to v2.4.4 (patch) and re-review. |
| ISS-02 | Low | T6 | Header changelog, v2.4.3 entry, line "recorded in this document at v2.4.1/v2.4.2 as owed" | Minor provenance imprecision: the two Doc 03 §10.13.13 open questions were **first** recorded in this document at **v2.4.0** (2026-08-29, when TC-3542..TC-3561 were minted and the note "Doc 03 §10.13.13's two open questions are recorded where they bear…" was written), not first at v2.4.1. v2.4.1/v2.4.2 merely left the text untouched. Does not affect any TC status, count, or the correctness of the ruling application — cosmetic only. | Tester MAY amend "recorded in this document at v2.4.1/v2.4.2 as owed" to "recorded in this document from v2.4.0 as owed" on the next version touching this changelog entry; does not block PASS on its own (Low). |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL — ISS-01 (High) is why this cycle is a FAIL.

## 5. Verification notes (what was independently checked and confirmed correct)

For the record, and so rework is scoped precisely — the following claims in v2.4.3 were checked
against primary sources and are **accurate**, so they should NOT be touched in rework:

- **(a) "No count moved."** `git diff HEAD -- docs/07-test-cases-suites.md` shows the only content
  changes are: the header version/status/pins, the changelog's new v2.4.3 entry, a
  `[SUPERSEDED at v2.4.3]` pointer appended to the v2.4.0 entry, the §5.6 narrative note, and the
  TC-3552..3555 heading note. §2's suite table (line 422-423: Total **465**, automated **233**,
  Blocked-or-no-mechanism **232**), §8's orphan/mapping tables, §9's execution log (still ends at
  **R-16**, no R-17), and §10's exit summary are byte-identical to v2.4.2. Confirmed true.
- **(b) "Published stage set is unchanged."** Doc 03 v2.10.0 §10.13.13(a)'s ruling ("both are
  canonical at their own layer") changes no stage *names* — the mapping table it adds still lists
  the same eight stages `PROPOSAL/REVIEW/DISCUSSION/DEBATE/VOTE/DECISION/IMPLEMENTATION/MEASUREMENT`.
  `packages/protocol/src/proposals.js` `STAGE_ORDER` (lines 122-130) exports exactly this
  unmodified eight-entry array. TC-3552..TC-3555's Expected columns are therefore genuinely
  unaffected. Confirmed true.
- **(c) TC-3543 vs TC-3545.** TC-3543 (line 1485) carries no ruling-pending note in its own text
  and needed no rework. TC-3545 (line 1487) does — this is ISS-01 above.
- **(d) Staleness sweep.** Grepped the whole document for `flagged for an approver ruling`,
  `must be revisited`, `reconciliation is owed`, `bears directly on what`, `open question`,
  `approver ruling`. The only surviving stale hit outside the three corrected places is TC-3545's
  row (ISS-01); all other hits (e.g. TC-3541/PREREQ-01, TC-3403/TC-3508..3510 FR-077 amendment-path
  notes) are unrelated to the PROPOSING/stage-taxonomy ruling and are not stale.
- **(e) FR-091/FR-092 stay OPEN.** Doc 02 v2.16.0 §13 explicitly records "(f) FR-091 'per published
  timelines' unwired and (g) FR-092 ballot layer + DES-097 anchoring — both recorded as honestly
  OPEN (G-NOMECH), no ruling sought" — matches Doc 07 exactly. `packages/protocol/src/governance.js`
  exports `schedule()` (line 202); grepped both `packages/protocol/src/proposals.js` and
  `packages/sdk/src/proposals.js` for any call to `schedule` — none exists. The "unwired" claim is
  confirmed true.
- **(f) Source pins.** Doc 02 header confirms `Version: 2.16.0` (docs/02-requirements-srs.md line
  5); Doc 03 header confirms `Version: 2.10.0` (docs/03-architecture-design-sdd.md line 5). Both
  match Doc 07's header pins exactly. CODE pin (v2.4.3) matches Doc 06's current header version.
- **(g) `npm test` from repo root:** contracts 95 + protocol 150 + sdk 244 + ui 14 + indexer 16 +
  web 91 = **610/610 green**, matching the changelog's claim exactly.
- The v2.4.2 cycle-1 review this changelog cites as "PASSED (98%, 0C/0H/0M/1L)" is real and matches
  `artifacts/reviews/07-test-cases-suites-v2.4.2-technical-cycle1.md` (Score 98%, Verdict PASS).

## 6. Routing instruction (to the owning role)

**FAIL.** Route to the **tester** (Ji-woo Park, Doc 07 owner). Required fix: resolve **ISS-01**
(High) by editing TC-3545's own Expected-result text to reflect the 2026-08-30 ruling, the same way
the TC-3552..TC-3555 heading note already was. ISS-02 (Low) may be picked up in the same pass but
does not block PASS on its own. This is a **textual-only** fix — no TC status, automation mapping,
or count changes are implied or required. Bump `Version:` to **2.4.4** (patch — Low/High-but-purely-
documentary fix, no test case added/changed/re-statused/re-run), set `Status: In Review`, and
resubmit for cycle 2.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5; the cap has not been reached.
