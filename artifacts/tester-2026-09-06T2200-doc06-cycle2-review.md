# Tester session note — 2026-09-06T22:00 — Doc 06 v2.7.0 + code drop, neutral review (cycle 2)

```
Role:     tester (Ji-woo Park) — acting ONLY as the PM-assigned NEUTRAL REVIEWER
          (document-review skill, technical mode), the same reviewer as cycle 1.
          Not authoring Doc 07/08 in this instance — a separate tester instance owns those.
Branch:   build/v1-cascade-and-release-prep
Assigned: artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md
Reworked: artifacts/engineer-2026-09-06T2100-doc06-cycle2.md (v2.6.0 -> v2.7.0)
Output:   artifacts/reviews/06-coding-and-ut-v2.7.0-technical-cycle2.md
Verdict:  PASS — 96%, 0 Critical / 0 High / 0 Medium / 3 Low, cycle 2 of 5
Prior:    artifacts/reviews/06-coding-and-ut-v2.6.0-technical-cycle1.md (FAIL 94%, 1M/5L)
```

## What I did

Reviewed **`docs/06-coding-and-ut.md` v2.7.0** end to end plus its code drop, verifying every
cycle-1 closure **against the primary source** rather than against the engineer's note, then
re-swept for defects introduced by the rework. Scored and listed issues only. **I edited no
document and no product code.**

## Closure verification — all six cycle-1 issues CLOSED

- **ISS-01 (Medium) — closed at all four locations.** §7 item 26 header rewritten; (a), (b), (c)
  each carry a dated `~~OWED~~ — CLOSED (v2.7.0)` block citing the closing document, version,
  approval status and line — **Doc 03 v2.13.0 Approved** (lines 1766/1753/2955), **Doc 09 v1.9.0
  Approved** (line 909, `~~REL-LIM-18~~ CLOSED` with `0a5c542`/`84e2203`), **Doc 07 v2.6.0 / Doc 08
  v2.9.0 Approved** (`TC-3564`..`TC-3569` mapped to UT-0887/UT-0759/UT-0888). The FR-131 Must row is
  correctly reframed as **OPEN (G-PHASE3)** — a requirement-completeness gap on the unbuilt DES-098
  control, not owed TC authorship — which Doc 08's own header (line 15) confirms. **26(d) is
  correctly left as the only open item under that list.** The change history, the §3 closing note
  and the §4a deviation paragraph each carry their dated correction. Header `Source:` advanced
  SDD v2.7.1 → v2.13.0 (the advisory I attached to ISS-01).
- **ISS-02** — §5.0 now carries both the missing **v2.5.1 cycle-2 PASS** and the **v2.6.0 cycle-1
  FAIL** entries. The review log is current for the first time in three versions.
- **ISS-03** — a new `it()` inside the UT-0889 block scans **both** landing strings against the
  eleven-word §2.2 jargon list. The bar is now enforced, not asserted.
- **ISS-04** — §2.2 and §4a corrected to name the real enforcement (per-story jargon-scan tests),
  stating plainly that the CI scan "was aspirational, not built".
- **ISS-05** — the clause-(e) residue inventory is now exhaustive: `PrivacyStatus.tsx` `anon` state
  added with a re-review-before-first-mount flag, and the `private_endorsement` reasoning corrected
  (developer-facing configuration; the description string names no phase).
- **ISS-06** — the brittle bare `'سري'` assertion replaced by the exact retired phrase
  `اسمك سريًا`, with an inline comment naming the false-positive words. Closed, with a residual
  observation carried as ISS-C2-03.

**Annotate-don't-delete was respected throughout** — every correction is a dated addition after the
text it corrects; no historical text was rewritten, and the historical `v2.7.1` citations inside
dated entries were correctly left alone.

## Test counts observed (my own run)

- `npm test` — **625 passed, 0 failed**: contracts **95** · protocol **151** · sdk **244** · ui
  **18** · indexer **16** · **web 101**. The `+1` over v2.6.0's 624 is the ISS-03 jargon assertion,
  as claimed. I machine-summed the §3 table: **625**, with every per-workspace subtotal matching the
  run and the web addend sentence (16+27+27+1+18+2+4+6) = 101 correct.
- `npm run typecheck` — exit **0**. `npm run lint:deps` — "7 workspace package(s) checked —
  layering OK", exit **0**.

## Sweep result

Re-ran the FR-131(e) sweep (English + Arabic) over `apps/web/src/i18n/*.ts` and
`packages/*/src/**`: **hit set identical to cycle 1, no new residue, no regression.** Every hit keeps
its cycle-1 disposition. I also re-ran my byte-exact extraction-and-diff: all four normative strings
(DECISIONS §4.1/§4.2/§5.1/§5.2) are **still EXACT MATCH**, and `git diff --stat HEAD` over
`apps/web/src` and `packages/*/src` returns the identical footprint I measured at cycle 1 —
confirming no product source changed this cycle; the only code edit is the test file.

## Upstream re-checked at HEAD

Doc 02 is **v2.17.1, Approved** (PASS 96%): clause (e) survives its RFC-2119 recast with substance
intact, and **Scenarios 8 and 9** are present (Scenario 9 being the absence test across every v1
surface in every language, including the README). Doc 03 v2.13.0 Approved and Doc 09 v1.9.0 Approved
both confirmed. Doc 07 has since moved to **v2.7.0** and Doc 08 to **v2.10.0** (both In Review) under
the concurrent tester instance — which is what ISS-C2-01 records.

## Issues raised this cycle (all Low, none blocking)

- **ISS-C2-01 (Low)** — the ISS-01 closure pins Doc 07/Doc 08 at "is now v2.6.0/v2.9.0" and calls
  UT-0889's TC row the only one owed; both moved this session (Doc 07 v2.7.0 mints
  `TC-3570`..`TC-3575`, covering UT-0889). The substantive closure holds a fortiori. The
  "(Doc 08 line 16, 81-82)" pin does not resolve — the OPEN (G-PHASE3) statement is at line 15.
- **ISS-C2-02 (Low)** — new v2.7.0 prose still names Doc 02 at v2.17.0 with its loop pending;
  Doc 02 is v2.17.1 Approved. No normative consequence (the recast was a patch).
- **ISS-C2-03 (Low)** — the ISS-06 fix narrowed the Arabic negative to one exact historical phrase
  and the Arabic `it()` now asserts no positive facts, so a *paraphrased* secrecy claim would pass.
  Matters because the ARABIC-I18N native-speaker rewrite is owed pre-Gate 2. Recommended fix: add
  the three positive Arabic facts mirroring the en assertions, landed **with** that rewrite.

## Decisions made

- **Graded ISS-C2-01/02 Low, not Medium, and recorded the calibration in the report** so it is
  auditable: the cycle-1 Medium was three cascades across four locations misrepresenting the
  owed-work register in a Gate-2-prep document; these are version pins whose underlying facts remain
  true, on sibling documents that moved under concurrent authorship *after* v2.7.0 was written.
  Grading them Medium would make it impossible for any document to pass while its siblings are being
  reworked hourly.
- **Raised ISS-C2-03 even though the engineer implemented the direction given**, because the fix
  landed narrower than both DECISIONS §5.4 and my own cycle-1 recommendation — and said so
  explicitly in the report, crediting the inline reasoning.
- Did **not** re-litigate anything the approver ruled (DECISIONS §5.3's "both stand"), and did not
  treat the unmounted `PrivacyStatus` `anon` string as reached by clause (e) — it is not
  public-facing today.

## Post-review audit

`node hooks/run_gates.cjs --audit` now reports
`PASS   06-coding-and-ut.md v2.7.0 (technical) <- 06-coding-and-ut-v2.7.0-technical-cycle2.md`.
Three documents still block — **Doc 04 v1.5.0** (report exists, FAIL), **Doc 07 v2.7.0** and
**Doc 08 v2.10.0** (no report for the current version). **I did not self-appoint for any of them**,
and must never review Doc 07/08: I am their owning role. Per the assignment record they go to
reviewer-qa; the PM sequences.

## IDs touched

- **Minted:** none. (`ISS-C2-01`..`ISS-C2-03` are local to the review report.)
- **Referenced, not minted:** `UT-0889` (verified; gained assertions under the same ID — correctly
  not renumbered), `UT-0887`, `UT-0888`, `UT-0869`, `UT-0759`, `UT-0740`/`UT-0857`/`UT-0868`/
  `UT-0884` (jargon pattern), `TC-3564`..`TC-3569`, `TC-3570`..`TC-3575` (cited from Doc 07 v2.7.0,
  not authored here), `FR-131` (clause (e), Must row OPEN G-PHASE3), `FR-082`, `DES-098`, `US-0134`,
  `ISS-01`..`ISS-06` (cycle-1 findings, all closed).

## Open items (not mine to close)

- Doc 06 v2.7.0 → the engineer sets **`Status: Approved`**; the three Lows carry to the next touch.
- **ISS-C2-03** to land with the **ARABIC-I18N** native-speaker rewrite (technical-writer, pre-Gate 2).
- **DES-098 acknowledge-to-proceed control** — item 26(d), the one genuinely open item under §7
  item 26, unbuilt, SCR-13 story scope, US-0134.
- Doc 04 v1.5.0, Doc 07 v2.7.0, Doc 08 v2.10.0 reviews — reviewer-qa, PM to dispatch.
- FR-131 remains an **OPEN** Must row (G-PHASE3); Gate-2 traceability criterion NOT MET
  (122 of 138 Must rows OPEN) per the audit — a requirement-phasing fact, not a documentation gap.

## Handoff

Doc 06 v2.7.0 **PASSES** the quality loop and the SOP advances. This is a review verdict, not a
merge sign-off — `reviewer-qa` remains the independent Gate-2 signer. Stopping here.
