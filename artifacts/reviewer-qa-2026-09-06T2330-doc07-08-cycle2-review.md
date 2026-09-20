# reviewer-qa session note — cycle 2 — Doc 07 v2.8.0 and Doc 08 v2.11.0

```
Role:     reviewer-qa (Rafael Duarte) — PM-assigned neutral reviewer (document-review skill);
          also A for "RTM complete (zero gaps)" under the CLAUDE.md RACI.
Date:     session opened 2026-09-06T23:30, executed 2026-09-07.
Assigned: artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md
Scope:    ONLY docs/07-test-cases-suites.md v2.8.0 and docs/08-traceability-matrix.md v2.11.0,
          technical mode, cycle 2 of 5 each.
Wrote:    artifacts/reviews/07-test-cases-suites-v2.8.0-technical-cycle2.md
          artifacts/reviews/08-traceability-matrix-v2.11.0-technical-cycle2.md
          (this note). I edited NO document, NO test and NO product code, and did not open
          artifacts/memory-index.json — the PM pre-registered this note's path.
```

## Verdicts

| Document | Version | Cycle | Score | C / H / M / L | Verdict |
|---|---|---|---|---|---|
| `docs/07-test-cases-suites.md` | 2.8.0 | 2 of 5 | **95%** | 0 / 0 / **1** / 3 | **FAIL** |
| `docs/08-traceability-matrix.md` | 2.11.0 | 2 of 5 | **96%** | 0 / 0 / **1** / 2 | **FAIL** |

Both scores clear 95%; each fails on a single Medium, and **both Mediums are in the pin block** —
the same instrument that carried the cycle-1 Medium. Neither touches a case, a count or a ruling.

## Every cycle-1 issue is closed — verified at source, not against the changelog

- **Doc 07 ISS-01 (M)** — the register sentence is re-attributed to **Doc 04 v1.6.0 (Approved)**
  with v1.5.0's actual text quoted beside it. I read v1.6.0 §14 and §0.4 myself; both say what is
  now attributed to them.
- **Doc 07 ISS-02 (M)** — TC-3573 now asserts exactly what UT-0889 asserts (the exact retired
  phrase; "لا نعرف" on the promise) and adds a **third scope limit** naming the residual gap. I
  confirmed the rationale independently: "تسري" ships today at `ar.ts` line 123
  (`parties.leaveHelp`), so the wide ban would have failed the build on honest copy.
- **Doc 07 ISS-03 / Doc 08 ISS-02 (L)** — `UT-0889` is recorded as **6** `it`s and **TC-3576 is
  minted** for the sixth (the stronger of the two fixes I offered); both sweeps state that the
  orphan count was **1** in between rather than implying the zero was always right.
- **Doc 07 ISS-04 / Doc 08 ISS-03 (L)** — CODE pin advanced to **v2.7.0 (Approved)**; the TC-3568
  rider is executed (conditional discharge to unconditional, conditional wording retained).
- **Doc 07 ISS-05 (L)** — §0.2 gains R-18 and R-19 rows carrying §9's qualifications.
- **Doc 08 ISS-01 (M)** — the pin-note claim is corrected and the original sentence retained.

## New issues (one Medium each; details in the reports)

- **Doc 07 ISS-01 (Medium)** — the v2.8.0 pin note announces an **MTP v1.0.1 to v1.6.0 (Approved)**
  scoped advance, but the `Source:` block still reads **v1.0.1**: an advance announced and never
  applied, leaving two answers five minor versions apart to "which Doc 04 does this rest on?".
  Lows: the "every source this document now leans on is Approved" phrasing (recoverable, because
  the correct list sits beside it); the only live free-band statement names TC-3576, which this
  version minted (the free band now begins at **TC-3577**); `Last updated` a day behind.
- **Doc 08 ISS-01 (Medium)** — "**Every source this matrix now pins is Approved**", asserted twice
  and as a finding, is false of the pinned **BKLG v2.3.0 (In Review**, by the Source block's own
  label**)**, lists three versions the matrix does not pin (SDD v2.13.0, BKLG v2.5.0, TC v2.8.0
  against pinned v2.11.2, v2.3.0, v2.7.0), and contradicts both its neighbouring sentence and
  itself. Lows: the TC pin still reads v2.7.0 while the body derives from Doc 07 **v2.8.0** four
  times; `Last updated` a day behind.

## The FR-131 ruling — re-derived again, and I CONCUR

**FR-131 stays OPEN (G-PHASE3).** Premises re-checked at source this cycle, not carried: **no
acknowledge-to-proceed affordance** anywhere in `apps/` or `packages/` product source; **no ballot
route** in `apps/web/src/app`, so SCR-13/SCR-14 remain unbuilt and TC-3481 stays Blocked; **no
FR-131 denylist scan** anywhere in the repository, so **TC-3575 stays correctly Blocked —
instrument absent**. TC-3576 is correctly kept **out** of the FR-131 chain (a jargon scan governs
comprehensibility, not honesty of claims) and correctly **does not close NFR-023**, which stays
`G-UI` with Complete 0.

## Must count

**138 Must rows · 16 COMPLETE · 122 OPEN · stories 17 of 134 · US-0134 not done · Gate-2
traceability criterion NOT MET.** Two independent signals agree — the hook's derivation from row
status markers and my own recomputation from §6 (114/16/98 plus 24/23/0/24). **No merge sign-off is
offered.**

## Independent verification

- `npm test`: **625 / 625, 0 failed, exit 0** — contracts 95 · protocol 151 · sdk 244 · ui 18 ·
  indexer 16 · web **101**, matching R-19 package for package.
- UT-0889 case by case: **6 passed, 20 skipped (26)** — six `it`s, six mapped cases, all green.
- TC-3576 read against the jargon `it`: eleven words, both `en` strings, case-insensitive — exact.
- Doc 07 §2 re-summed row-wise: **478 / 245 / 233** over 28 rows, per-row identity holding on every
  row; §10 **94 + 136 + 15 = 245**; overlap paragraph **431**.
- Doc 08 §6 **485 / 230 / 255** (derived from the 476 Doc 07 anchors I measured myself) and §9
  **230 + 15 + 233 = 478**.
- **476** unique TC row anchors, **zero** duplicates; TC-3576 continues from TC-3575 and lies
  inside Doc 04 v1.6.0's TC-3570 to TC-3699 band.
- Residue scan over all 32 OP boundaries: **zero** hits. Table sweeps: **69 tables (Doc 07) and 17
  (Doc 08), zero cell-count mismatches, zero missing trailing pipes**.
- Pins checked against live headers: Doc 02 **v2.17.1 Approved**, Doc 04 **v1.6.0**, Doc 06
  **v2.7.0 Approved**, Doc 01 **v2.3.0 Approved**, Doc 03 **v2.13.0 Approved**, Doc 05 **v2.5.0
  Approved**, Doc 09 **v1.9.0 Approved** — all as the documents describe them; the defects are in
  what the pin blocks themselves record.

## Routing and IDs

Both documents route to the **tester (Ji-woo Park)** for **cycle 3 of 5** — Doc 07 to **v2.8.1**,
Doc 08 to **v2.11.1** (patch bumps: one sentence, one pin line, one date each; nothing normative
moves). One pass over both headers closes both. Cap is 5; three cycles of headroom remain.

IDs referenced, none minted: `FR-131` (clause (e), Scenarios 8/9), `NFR-023`, `NFR-013`, `DES-085`,
`DES-094`, `DES-098`, `US-0134`, `UT-0889`, `UT-0868`, `UT-0884`, `TC-3538`, `TC-3561`, `TC-3568`,
`TC-3570` to `TC-3576`, `TC-2331`, `TC-2332`, runs `R-18` and `R-19`, `TD-RTM-01/02/03`,
`TD-07-01/02/03`, `OPEN-27`.

## Open items (not mine to close)

- The two Mediums and four Lows above — tester, cycle 3.
- **TC-3575 unblocks only when the engineer builds the Doc 04 §0.5 S5 scan** — still the cheapest
  available strengthening of the FR-131 row.
- **`TD-RTM-03`** (raised by the tester at this version) and **`TD-RTM-02`** — both OPEN, both the
  tester's recount work.
- **Post-merge re-run of the suite** — owed since R-18; R-18 and R-19 ran against the same
  uncommitted tree.
- **`OPEN-27`** (architect) and **`ENROL-COPY (j)`** (product-owner) — unchanged, routed.
- `packages/protocol/test/proposals.test.js` still carries "…Supporters are anonymous" as an `it()`
  title; it asserts nothing and does not fail. Engineer's call; I do not edit test code.

## Hook state at exit

The review-loop gate blocks on **Doc 07 v2.8.0 and Doc 08 v2.11.0 only** — because my two reports
exist and correctly FAIL, which is the loop working. Every other governed document passes. I did
not self-appoint to any other document and reworked nothing.
