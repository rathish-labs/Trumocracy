# reviewer-qa session note — 2026-09-06T14:00 — Doc 07 v2.5.0 + Doc 08 v2.8.0 neutral technical review

```
Role:        reviewer-qa (Rafael Duarte) — NEUTRAL REVIEWER, document-review skill, technical mode
Assigned by: artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md (project-manager)
Scope:       Doc 07 v2.5.0 and Doc 08 v2.8.0 ONLY. Docs 03/04 are another reviewer-qa instance.
Date:        2026-09-06
Wrote:       artifacts/reviews/07-test-cases-suites-v2.5.0-technical-cycle1.md
             artifacts/reviews/08-traceability-matrix-v2.8.0-technical-cycle1.md
             this note
Edited:      NOTHING in docs/ or in product code. Read-only by design. memory-index.json NOT touched
             (pre-registered by the PM). Nothing committed.
```

## What I did

1. Read `CLAUDE.md`, the review assignment (including the 2026-09-06 01:23 incident section), the
   `document-review` skill, `docs/templates/document-review.template.md`, Doc 07 v2.5.0 and Doc 08
   v2.8.0 end to end, and the `git diff` of both against `HEAD`.
2. **Ran `npm test` from the repo root myself** — **619 passed / 619, 0 failed, exit 0**;
   contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95. Matches Doc 07 §0.2 and §9
   run **R-17** package for package. `apps/web/tsconfig.tsbuildinfo` was **not** dirtied, so no
   `git checkout` was needed.
3. Read the three new UT blocks assertion by assertion — `UT-0887`
   (`apps/web/test/safety-surfaces.test.tsx:112`, 4 its), `UT-0759`
   (`packages/ui/test/PrivacyStatus.test.tsx:198`, 4 its), `UT-0888`
   (`packages/protocol/test/party-and-regions.test.js:302`, 1 it) — and checked every new TC row
   (TC-3564..TC-3569) against what the test actually asserts.
4. Read FR-131 at `docs/02-requirements-srs.md` §4.45 and re-derived the closure ruling against the
   shipped code (`apps/web/src/components/ReceiptFreedomBanner.tsx`, mounted at
   `apps/web/src/components/ProposalsAndDebate.tsx:489`).
5. Re-derived every count both documents move, summing Doc 07 §2's suite table row-wise.
6. Ran `node hooks/run_gates.cjs --audit` afterwards; both reports are matched by the hook.

## Verdicts

| Document | Version | Score | C / H / M / L | Verdict |
|---|---|---|---|---|
| `docs/07-test-cases-suites.md` | 2.5.0 | **92%** | 0 / 0 / **3** / 4 | **FAIL** — cycle 1 of 5 |
| `docs/08-traceability-matrix.md` | 2.8.0 | **85%** | 0 / **2** / **3** / 3 | **FAIL** — cycle 1 of 5 |

**Doc 07 issues.** ISS-01 M — TC-3568's expected result over-claims UT-0759 on paths (b) and (d)
(aria-label and banned-word checks exist only on path (a)). ISS-02 M — TC-3567 claims to verify
NFR-013; the test does not, and the RTM carries no such link. ISS-03 M — DES-094 clause 9 called an
"approved design element" and the Doc 06 §4a deviation "DISCHARGED", while Doc 03 v2.12.0 is
`In Review` and has since FAILED cycle 1. ISS-04 L — TC-3564 mis-cites DES-094. ISS-05 L — §4.3 and
§5 headings not extended for TC-3569 / TC-3564-3567. ISS-06 L — §10 overlap paragraph says 187 in
prose and 193 in the formula. ISS-07 L — §6 accessibility checklist row stale after R-17.

**Doc 08 issues.** ISS-01 **High** — four v2.8.0 additions are written as extra table cells beyond
the header width (§3.1 FR-124 line 818, §3.1 FR-131 line 825, §3.2 NFR-011 line 844, §4 line 926), so
a Markdown renderer discards them, including the entire FR-131 rule-by-rule ruling. ISS-02 **High** —
`DES-098` appears **zero** times in Doc 08 although Doc 02 §4.45 names it as FR-131's design element
and six new TCs cite it; the FR-131 row states the requirement as a DES-096 seam capability, its SCR
cell reads "none" against a requirement naming SCR-13/SCR-14, and "eleven obligations" counts the
seam half as an FR-131 clause. ISS-03 M — the §6 Gate-2 verdict sentence is split mid-clause by the
addendum (lines 643-646). ISS-04 M — §6 and the changelog misattribute content to §10's stale
`TD-RTM-02` entry. ISS-05 M — the "approved design element" claim, as Doc 07 ISS-03. ISS-06 L — §7
entry 117 boundary reads "production ZK ballot pending v2.8.0". ISS-07 L — sign-off row doubled
italic close. ISS-08 L — §3.2 NFR-013 still says "no locale files" although `en.ts` / `ar.ts` ship
and TC-3567 asserts against them.

## My own FR-131 ruling (reviewer-qa is A for "RTM complete (zero gaps)")

**I CONCUR with the tester: FR-131 stays OPEN. Must 16 / 138 unchanged; open Must 122; US-0134 does
NOT meet DoD; stories 17 / 134 unchanged.** Decisive evidence, checked at source:
`ReceiptFreedomBanner.tsx` renders an `aside role="note"` containing a decorative span, an `h2` and a
`p` — **no button, no checkbox, no form control, nothing gating navigation**. FR-131's "the voter
MUST acknowledge the notice to proceed" is **unbuilt**, and that clause alone holds the row open even
if every surface existed. SCR-13/SCR-14 do not exist; the banner is mounted at one non-ballot site.
"Visible before confirmation" has no confirmation step to precede. WCAG 2.2 AA and screen-reader
access are unevidenced (`role="note"` is not conformance). The closing-sentence word ban IS met and
regression-guarded for the swept code (all nine assertions verified) but is untested for README and
public-facing materials. The counts are stated unchanged in the Must FR subtotal (114 · 16 · 98), the
§6 dashboard, the §9 gate-verdict table and the §9 sign-off row; the hook's independent derivation
agrees (138 Must / 16 COMPLETE / 122 OPEN).

## Other rulings recorded

- **`TD-RTM-01`** (duplicate `UT-0841`..`UT-0848`) — **still recorded, still OPEN, still engineer
  scope** in Doc 08 §10 and the §4 blockquote, and correctly stated as not affecting this drop's
  orphan zero. It has not been silently dropped.
- **Accepted Lows.** **L-13 and L-2 are PAID** (both verified in place). **The other twelve,
  including L-3, remain accepted-and-carried** and were **not** counted against v2.8.0. One caveat:
  the L-2 fix and ISS-01's third overflow cell are the same edit (§4 line 926).
- **Docs 03 / 04 / 09 citation posture is correct** — cited as current corrected text, In Review, not
  as approved sources — with the single exception recorded as Doc 08 ISS-05 / Doc 07 ISS-03.
- **TC-2614 is correctly corrected**: the retired framing is gone from its expected result, the
  "disclosure, not a satisfaction of FR-031/FR-032/NFR-003" note is kept, and every remaining
  `anonymous but` hit in Docs 07/08 is a quotation inside a correction record, per the
  annotate-don't-delete convention.
- **Transcription residue.** Doc 07 has **none** — no leaked `FIND:` / `REPLACE WITH:` markers, no
  four-backtick fences, no malformed rows, no eaten boundary words. Doc 08 has four overflow cells,
  one split sentence, one missing sentence terminator and one doubled italic close — all recorded as
  findings against v2.8.0.
- **Counts I re-derived and found correct.** Doc 07 §2 sums row-wise to 471 / 239 / 232 with no
  per-row mismatch; §10 identity 88 + 136 + 15 = 239; 136 = 55 + 28 + 24 + 22 + 7. Doc 08: 469 − 1 +
  10 = 478; 217 + 6 + 1 = 224; 129 + 7 = 136; 478 − 224 = 254; 224 + 15 + 232 = 471.

## Open items / routing

- **Doc 07 → tester (Ji-woo Park):** rework to **v2.6.0**, `Status: In Review`, re-review as cycle 2.
- **Doc 08 → tester (Ji-woo Park):** rework to **v2.9.0**, `Status: In Review`, re-review as cycle 2.
  ISS-02 may need an **architect** referral to bind DES-098 / SCR-13 / SCR-14 to FR-131 — the tester
  must not invent a design link.
- **No merge sign-off is offered.** Gate 2 cannot be approved: 122 open Must rows, rollback never
  drilled, no independent security audit.
- `node hooks/run_gates.cjs --audit` reports 4 documents blocking the review loop: **03** and **04**
  (another reviewer-qa instance — expected, not mine to clear) and **07** and **08** (mine, correctly
  blocking on the FAILs above).

## IDs touched (read and verified only — nothing authored)

FR-131 · FR-124 · FR-122 · FR-123 · NFR-011 · NFR-013 · NFR-003 · DES-094 (clause 9) · DES-096 ·
DES-098 · DES-081 · SCR-13 · SCR-14 · US-0132 · US-0133 · US-0134 · UT-0751 · UT-0753 · UT-0758 ·
UT-0759 · UT-0887 · UT-0888 · UT-0841..UT-0848 (TD-RTM-01) · TC-2614 · TC-3471 · TC-3481 · TC-3488 ·
TC-3534 · TC-3535 · TC-3564..TC-3569 · TD-07-01 · TD-07-02 · TD-07-03 · TD-RTM-01 · TD-RTM-02 ·
RISK-02 · REL-LIM-18 · run R-17.
