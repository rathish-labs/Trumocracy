# reviewer-qa session note — cycle 4 of 5 — Doc 08 v2.11.2 (FAIL; cycle 5 is the cap)

```
Role:     reviewer-qa (Rafael Duarte) — PM-assigned neutral reviewer (document-review skill);
          also A for "RTM complete (zero gaps)" under the CLAUDE.md RACI.
Date:     2026-09-07T11:30 (report finalised 2026-09-08 after an API session limit interrupted
          the write — see "Report state" below).
Assigned: artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md
Scope:    ONLY docs/08-traceability-matrix.md v2.11.2, technical mode, cycle 4 of 5.
          Doc 07 v2.8.1 is Approved (PASS at cycle 3) and out of the loop.
Wrote:    artifacts/reviews/08-traceability-matrix-v2.11.2-technical-cycle4.md
          (this note). I edited NO document, NO test and NO product code, and did not open
          artifacts/memory-index.json — the PM pre-registered this note's path.
```

## Verdict

| Document | Version | Cycle | Score | C / H / M / L | Verdict |
|---|---|---|---|---|---|
| `docs/08-traceability-matrix.md` | 2.11.2 | **4 of 5** | **96%** | 0 / 0 / **1** / 1 | **FAIL** |

## What I verified, and how

- **The cycle-3 Medium is substantively closed.** §6's Stories row reads **142 | 134 (all 134 carry
  Gherkin AC; 8 untraced) | 17 | 125** — 142 − 17 = 125, the table's own convention; a story-census
  disclosure names all eight ids beneath the dashboard; **`TD-RTM-04`** is raised with owner,
  effect, "closes when" and an explicit "does NOT close by editing the eight rows in isolation";
  the BKLG pin annotation now carries the census consequence.
- **I re-ran the id diff that produced the cycle-3 finding.** The matrix now cites **all 142** `US`
  ids; **zero** Doc 05 v2.5.0 ids are uncited (was 8). The population gap is closed as a disclosure.
- **I verified the eight FR attributions against Doc 05's own v2.4.0 mint line**, not against the
  document under review: US-0135 (FR-121) · US-0136 (FR-125) · US-0137 (FR-133) · US-0138 (FR-126) ·
  US-0139 (FR-127) · US-0140 (FR-128) · US-0141 (FR-129) · US-0142 (FR-050) — **all eight exact**.
- **"Disclosed, NOT traced" is the right call**, and the reasoning is right: deriving eight chains
  from a backlog not re-read would repeat the original error inverted.
- **"No Must row can move on it" checked row by row**: FR-121/125/126/127/128/129 `G-TRACE +
  G-PHASE3`, FR-133 `G-PHASE3`, FR-050 a **Should** row — a missing `US` cannot close a row blocked
  on a missing `DES` and a missing implementation.
- **Denominator sweep over the whole file**: 26 `of 134` occurrences, all either this version's own
  description of the defect or historical entries covered by the blanket note; `17/134` at three
  sites, two historical and **one live** (the issue below); **no `17/142` in slash form anywhere**.
- **Nothing normative moved** — FR-Must 114/16/98, NFR-Must 24/23/0/24, Test cases 485/230/255, §9
  230 + 15 + 233 = 478 — all identical to v2.11.1. **Zero** transcription residue at the 10 OP
  boundaries; **17 tables, zero cell-count mismatches**, including the sign-off row whose escaped
  pipes render correctly.
- **The cycle-3 Low is closed**: the SRS and SDD pins now separate "**scoped read:**" from
  "**sections this matrix cites:**", so one pin names one scope.

## The two issues

- **ISS-01 (Medium)** — the §9 sign-off **Decision cell** still reads "Must 16/138 · **stories
  17/134** · both UNCHANGED". That is the live Gate-2 sign-off for this version, dated 2026-09-07;
  it contradicts §6 and its own row's Notes cell ("**17 of 142**") two cells later, and the
  changelog claims twice that the sign-off was converted. One cell, but the one a Gate-2 packet
  quotes, and the claim to have fixed it is false as written.
- **ISS-02 (Low)** — `TD-RTM-04` says "the live residue is **one concrete cell**" (FR-050). It is
  **eight**: FR-121, FR-125, FR-126, FR-127, FR-128, FR-129 and FR-133 all carry a "none" story
  cell against the pinned backlog, plus FR-050. The substance is not misstated — the disclosure
  names all eight ids and the debt's scope already covers them — but a debt entry that mis-sizes
  its own repair mis-scopes the next backlog sync.

## Must count and the ruling

**138 Must rows · 16 COMPLETE · 122 OPEN**, two independent signals agreeing (hook derivation from
row markers; my recomputation from §6). **Stories meeting the DoD: 17, now correctly stated against
142.** **FR-131 stays OPEN (G-PHASE3)** — unchanged and not re-opened by this version. **Gate-2
traceability criterion NOT MET. No merge sign-off offered.**

## Cap warning — cycle 5 is next

**Cycle 5 is the last cycle.** If a cycle-5 version still fails the bar, the verdict becomes
**ESCALATED** and the document requires a **recorded human decision** (approve-as-is with the open
issues accepted, by name and date / rework / reject), presented by the project-manager. **It should
not come to that:** ISS-01 is a single cell edit and ISS-02 is one clause in two places; neither has
a derivation behind it, and every substantive finding of cycles 1–4 — the FR-131 chain, the Must
count, the pins, the census, the debts — is closed. I recorded that assessment inside the report so
a human, if it reaches them, can see that what survives is copy-editing, not disagreement about the
matrix.

## Report state (disclosed, because the write was interrupted)

An API session limit killed the session mid-write. The report existed through §4 — metadata block,
BLUF, pass-bar, per-criterion scores and both issues — but had **no routing instruction**. On
resuming I **appended only the missing tail** (the cycle-3 closure table, the verification table,
§5 routing and §6). **I changed nothing that was already written**: the verdict, score, severity
counts and both issue rows stand exactly as first recorded — **FAIL 96%, 0C/0H/1M/1L, Cycle 4 of
5** — and the hook parses the report and reports it as failing the bar, which is correct.

## Routing and IDs

**Doc 08 → tester (Ji-woo Park), cycle 5 (the cap): v2.11.3**, `Status: In Review`. Doc 07 v2.8.1
stays Approved; its one carried Low rides to its next header touch, as routed at cycle 3.

**Cross-document observation, routed not charged:** Doc 05 v2.5.0 (**Approved**) quotes this
matrix's superseded dashboard ("17 of 134 … 134/134/17/117"). That is the product-owner's to fold
at Doc 05's next touch; it is not a defect in Doc 08 and I did not score it. Doc 07 carries the
story figure nowhere, so its Approved status is unaffected.

IDs referenced, none minted: `US-0135`…`US-0142`, `FR-121`, `FR-125`…`FR-129`, `FR-133`, `FR-050`,
`FR-131`, `DES-033`, `DES-099`, `TD-RTM-01/02/03/04`, `TC-3575`, `R-19`, `OPEN-27`.

## Open items (not mine to close)

- ISS-01 and ISS-02 above — tester, cycle 5.
- **`TD-RTM-04`** (the backlog re-read that gives the eight stories rows and re-derives the FR-050
  story cell), `TD-RTM-01/02/03`, `TD-07-01/02/03` — all the tester's, all open.
- **TC-3575 unblocks only when the engineer builds the Doc 04 §0.5 S5 scan.**
- **Post-merge re-run of the suite** — owed since R-18; R-19 ran against the same unmerged tree.
- **`OPEN-27`** (architect) and **`ENROL-COPY (j)`** (product-owner) — unchanged, routed.
- Doc 05's stale quotation of this dashboard — product-owner.

## Hook state at exit

The review-loop gate blocks on **Doc 08 v2.11.2 only**, because my report exists and correctly
FAILs. Every other governed document passes, Doc 07 v2.8.1 included. I did not self-appoint to any
other document and reworked nothing.
