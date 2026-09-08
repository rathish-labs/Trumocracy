# reviewer-qa session note — cycle 3 — Doc 07 v2.8.1 (PASS) and Doc 08 v2.11.1 (FAIL)

```
Role:     reviewer-qa (Rafael Duarte) — PM-assigned neutral reviewer (document-review skill);
          also A for "RTM complete (zero gaps)" under the CLAUDE.md RACI.
Date:     2026-09-07T10:00.
Assigned: artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md
Scope:    ONLY docs/07-test-cases-suites.md v2.8.1 and docs/08-traceability-matrix.md v2.11.1,
          technical mode, cycle 3 of 5 each.
Wrote:    artifacts/reviews/07-test-cases-suites-v2.8.1-technical-cycle3.md
          artifacts/reviews/08-traceability-matrix-v2.11.1-technical-cycle3.md
          (this note). I edited NO document, NO test and NO product code, and did not open
          artifacts/memory-index.json — the PM pre-registered this note's path.
```

## Verdicts

| Document | Version | Cycle | Score | C / H / M / L | Verdict |
|---|---|---|---|---|---|
| `docs/07-test-cases-suites.md` | 2.8.1 | 3 of 5 | **98%** | 0 / 0 / 0 / 1 | **PASS** |
| `docs/08-traceability-matrix.md` | 2.11.1 | 3 of 5 | **96%** | 0 / 0 / **1** / 1 | **FAIL** |

**Doc 07 is the first PASS of this sequence** — the owner should set `Status: Approved`. Doc 08
returns for cycle 4 on one Medium that its own pin advance created.

## Cycle-2 closures — all verified at source

Both documents fixed their Medium the harder way: **advancing the stale pins** so the `Source:`
blocks say what the pin notes claimed, rather than softening the sentences. Doc 07: MTP → v1.6.0,
SRS → v2.17.1, SDD → v2.13.0, BKLG → v2.5.0 (CODE already v2.7.0). Doc 08: SDD → v2.13.0, BKLG →
v2.5.0, TC → v2.8.1. **I checked every pin against its live header — all correct.** Lows closed
too: free band restated as **TC-3577–TC-3699** (I re-derived it from Doc 04 v1.6.0 §14 — 123 of 130
ids free), `Last updated: 2026-09-07` in both, both false-claim sites annotated in place rather
than rewritten.

## The question I was asked to settle: is "version-only, NOT re-read" honest?

**It depends on what the document publishes, and the two answers differ — which is exactly why one
passed and one did not.**

- **Doc 07 — honest, and I corroborated it beyond what the note claims.** The BKLG annotation
  states precisely what it buys (removing a false *In Review* status) and what it does not (a
  story-by-story read, still owed). Its stated justification — "the `US-####` ids cited here resolve
  in v2.5.0; `US-0134` was checked" — I tested exhaustively: **Doc 07 cites 116 `US` ids and all 116
  resolve** in Doc 05 v2.5.0. Doc 07 also publishes **no story census**, so a version-only pin
  cannot silently change a figure there.
- **Doc 08 — the same annotation is candid about the *reading* but silent about the *population*,
  and the population is what moved.** Doc 05 v2.5.0 states "Total (v2.5.0): **142 stories** — an
  exact sum"; this matrix's §6 Stories row still reads **134 | 134 traced | 17 DoD | 117**. I
  diffed the ids: the matrix cites **134**, all resolve, and **8 more exist in the pinned backlog
  and appear nowhere in the matrix — US-0135…US-0142**. So it traces 134 of 142 while publishing
  134 as the population, and §10 carries no debt entry for it.

## Doc 08 ISS-01 (Medium) — and why that severity

**Not High:** no Must row, gap code, owner, phase or ruling changes; the Gate-2 criterion is
Must-row-based (FR/NFR) and is unaffected; and the substantive gap predates this version (it dates
from Doc 05 v2.4.0, while the matrix pinned v2.3.0 until today). **Not a carried Low:** this
version's own pin advance is what converts a stale pin into a **false alignment** — until v2.11.1
the matrix said "written against a 134-story backlog" and was right. Fix is cheap and
non-normative: disclose in the §6 Stories row, register a `TD-RTM-04`, and note the consequence
beside the "version-only" annotation — or add the eight rows.

## Doc 07 ISS-01 (Low) and Doc 08 ISS-02 (Low)

Same shape in both: the new **scoped-read** annotation and the **legacy section list** now sit on
the same pin, naming two different section sets, so a reader can take the trailing list as the
scope read. Cosmetic; one convention fixes both.

## The FR-131 ruling — re-derived again, and I CONCUR

**FR-131 stays OPEN (G-PHASE3).** Premises re-checked at source this cycle: **no
acknowledge-to-proceed affordance** in `apps/` or `packages/` product source; **no ballot route** in
`apps/web/src/app`, so SCR-13/SCR-14 remain unbuilt; **no FR-131 denylist scan** anywhere in the
repository, so **TC-3575 stays correctly Blocked — instrument absent**. Doc 08 states the
consequence of the SDD advance correctly: the "cited as current corrected text, not an approved
source" caveat is **spent**, and it closes nothing — a settled source and a built control are
different things, and only the second closes a Must row.

## Must count

**138 Must rows · 16 COMPLETE · 122 OPEN · stories meeting DoD 17 · US-0134 not done · Gate-2
traceability criterion NOT MET.** Two independent signals agree (the hook's derivation from row
status markers, and my own recomputation from §6: 114/16/98 plus 24/23/0/24). **No merge sign-off
is offered.**

## Independent verification

- **US-id diff** — Doc 07 cites **116** ids, all resolve in Doc 05 v2.5.0; Doc 08 cites **134**, all
  resolve, with **8** ids (US-0135…US-0142) in the pinned backlog uncited → Doc 08 ISS-01.
- **Pins** — every pin in both blocks checked against live headers: SRS v2.17.1 Approved, SDD
  v2.13.0 Approved, BKLG v2.5.0 Approved, CODE v2.7.0 Approved, MTP v1.6.0 Approved, TC v2.8.1
  (sibling, In Review, labelled). Scoped-read sections opened and confirmed to exist.
- **Nothing normative moved** — Doc 07 §2 re-summed row-wise **478 / 245 / 233** over 28 rows with
  per-row identity; §10 **94 + 136 + 15 = 245**; Doc 08 §6 **485 / 230 / 255** and §9 **230 + 15 +
  233 = 478**. Every figure identical to the previous version, as both patches claim.
- **Free band** re-derived from Doc 04 v1.6.0 §14: reserved TC-3570–TC-3699, drawn TC-3570..TC-3576,
  free **TC-3577–TC-3699**.
- **476** unique TC anchors, zero duplicates; **zero** transcription residue at all 14 OP
  boundaries; **69 tables (Doc 07) and 17 (Doc 08), zero cell-count mismatches, zero missing
  trailing pipes**.
- **Suite** — not re-run by the tester, correctly: nothing testable changed, so R-19 (625/625, exit
  0) stands. I reproduced 625/625 exit 0 myself at cycle 2. The **post-merge re-run is still owed**;
  the tree remains uncommitted.

## Routing

- **Doc 07 v2.8.1 → the tester sets `Status: Approved`.** Its one Low folds at the next header
  touch.
- **Doc 08 v2.11.1 → the tester, cycle 4 of 5.** New version required: **v2.11.2** for the
  disclose-and-register route (a §6 row note, a `TD-RTM-04` entry, a clause in the pin note —
  nothing normative moves), or **v2.12.0** if the owner adds the eight story rows. **One cycle of
  headroom remains after cycle 4** before the cap forces a recorded human decision; the surviving
  defect is a disclosure and a debt entry, not a recount, and should not consume it.

## IDs touched

None minted. Referenced: `FR-131` (clause (e), Scenarios 8/9), `NFR-023`, `DES-085`, `DES-094`,
`DES-096`, `DES-098`, `US-0134`, **`US-0135`…`US-0142`** (the eight untraced stories), `UT-0889`,
`TC-3568`, `TC-3570`..`TC-3576`, the free band `TC-3577–TC-3699`, `TC-3575`, runs `R-18`/`R-19`,
`TD-RTM-01/02/03` (and the proposed `TD-RTM-04`), `TD-07-01/02/03`, `OPEN-27`.

## Open items (not mine to close)

- **Doc 08 ISS-01** (story population) and the two scoped-read Lows — tester, cycle 4.
- **BKLG story-by-story re-read** — named by both documents as the thing the version-only pin
  advance does not buy; my US-id diff is a population check, not a chain re-verification.
- **TC-3575 unblocks only when the engineer builds the Doc 04 §0.5 S5 scan** — still the cheapest
  available strengthening of the FR-131 row.
- **`TD-RTM-02`**, **`TD-RTM-03`**, `TD-07-01/02/03` — tester's, all open.
- **Post-merge re-run of the suite** — owed since R-18.
- **`OPEN-27`** (architect) and **`ENROL-COPY (j)`** (product-owner) — unchanged, routed.

## Hook state at exit

The review-loop gate now blocks on **Doc 08 v2.11.1 only** — because my report exists and correctly
FAILs. Doc 07 v2.8.1 **passes** and every other governed document passes. I did not self-appoint to
any other document and reworked nothing.
