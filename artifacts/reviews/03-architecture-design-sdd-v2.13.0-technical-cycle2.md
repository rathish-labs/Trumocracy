# Document Review Report — Doc 03 Architecture & Design (SDD) v2.13.0

<!-- Produced by the document-review skill (a shared capability, not a ninth agent).
     The reviewer scores and lists issues only; it never edits the document. -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.13.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — architect Ravi Deshmukh owns Doc 03)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 2 of 5
Verdict: PASS
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)
Assignment: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md`

> **Independence note (disclosed, not disqualifying).** Doc 03's `Approvers:` line names Rafael
> Duarte as the Security approver. The independence rule is that the reviewer is not the *owning
> role*; the owning role is the architect. Disclosed for completeness, as at cycle 1.

> **Continuity note.** This instance is fresh — a previous cycle-2 reviewer instance was
> terminated by an API limit before writing anything. Both cycle-1 reports, the architect's
> 18-op spec and its session note were re-read in full, and every closure below was re-verified
> **at source in the current file**, not accepted from the spec or the changelog.

---

## 1. Summary (BLUF)

Doc 03 v2.13.0 closes all five cycle-1 findings, and closes them at the right level. The High —
a §15 register cell publishing "FR-131 has **no `US`/`TC`/RTM row** yet" for a Must requirement
that has an OPEN, evidence-bearing one — is replaced by the true state, read from Doc 08 rather
than asserted: I opened `docs/08-traceability-matrix.md` line 825 and the row is exactly what the
cell now says it is (`BR-005, BR-009 → FR-131 → DES-096 · ADR-024 → EP-06 ▸ FE-058 ▸ US-0134`,
sixteen TCs, `G-PHASE3`, TC-3476/TC-3481/TC-3487 Blocked). The DES half is handled the way the
cycle-1 report asked and the way the ownership rules require: the cell states Doc 08's *actual*
assignment (`DES-096 · ADR-024`), then states the **architect's intended** assignment (DES-098
primary · DES-094 status-badge reach · DES-096 seam) as design intent, routes it to Ji-woo Park,
and says in terms that "Doc 08 is the tester's document and is **NOT edited from here**". It does
not claim Doc 08 already says this. That distinction is the one that mattered and it is drawn
explicitly.

The two Mediums are equally well discharged. ISS-02's "US layer: owed — PO to mint US" is gone
and the genuine residue is *named* (US-0134's DoD unmet; the acknowledge-to-proceed control
unbuilt) instead of being mis-stated as an unminted story. ISS-03 — the `anon` title left
undispositioned under a rule this document had just minted — is closed by a full disposition in
the same form the `ver` and `pub` analyses use, and it is **truthful**: it rules the title
COMPLIANT on the narrow, falsifiable basis that the state renders only for open-tier users who
cannot cast a binding vote (FR-122/FR-123), it distinguishes itself from the overruled
"status visibility" reading in one sentence ("the distinction is the voter, not the word"), it
records four re-open triggers, and — the part that decides the truthfulness question — it carries
a paragraph headed **"What this disposition does NOT claim"** conceding that "Nothing you do here
is linked to you" is not literally true in v1 and that clause 8's disclosure link is still
unbuilt. A "COMPLIANT" with no concession attached would have been the tidier-than-the-record
over-claim this family has been marked down for; this is not that. §10.13.6's status-copy rule now
names its own closed scope (`ver` + `anon`), which I checked against `STATE_CONFIG` at HEAD and
which is correct — `pub`'s two strings contain none of the four words. Both Lows were taken rather
than carried.

Transcription is clean: no leaked FIND / REPLACE-WITH / four-backtick markers, no duplicated
line tails at a 60-character threshold, no words eaten at an insertion boundary (both changelog
splice points re-read). **PASS** at 97%, with two Lows recorded for the next touch.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — both rows are all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 96 | 19.20 | FR-131 (a)–(d) and the closing sentence covered at §10.13.6, §13, §15, §10.12.3; the last undispositioned banned word is now dispositioned. Deduction: ISS-C2-02. |
| T2 Soundness | 20 | 98 | 19.60 | The `anon` disposition is narrower than the reading it must not resemble, says so, and states what falsifies it. §10.13.6's closed-set scope statement checks out against `STATE_CONFIG` at HEAD. |
| T3 Traceability & IDs | 20 | 96 | 19.20 | ISS-01 and ISS-02 verified against Doc 08 line 825 and Doc 05 v2.5.0; DES assignment stated as intent and routed, not asserted as Doc 08's. No ID renumbered or reused. Deduction: ISS-C2-01. |
| T4 Security & failure modes | 15 | 98 | 14.70 | Fail-honest title/subtitle defaults intact; four re-open triggers on a contingent compliance ruling; the clause-8 disclosure gap conceded and its unbuilt link owned (engineer, enrolment sprint). |
| T5 Completeness & testability | 15 | 96 | 14.40 | Every cross-citation opened: Doc 06 §7 item 21 and item 26(d), Doc 08 row 825, Doc 05 v2.5.0, the shipped constants. All hold. |
| T6 Convention compliance | 10 | 97 | 9.70 | 2.12.0 → 2.13.0 (minor — a High and two Mediums make minor the floor), `Status: In Review`, ISO-8601, RFC 2119, annotate-don't-delete throughout, changelog describes only what changed. |
| **Total** | **100** | — | **96.80 → 97%** | — |

## 4. Cycle-1 closure table (verified at source, not taken from the changelog)

| Cycle-1 ID | Sev | Closed? | Evidence in v2.13.0 |
|---|---|---|---|
| ISS-01 | High | **YES** | §15 v2.12.0 sub-table (line 3077) now reads "**The FR-131 chain is NOT absent — it is OPEN.** Doc 08 carries the FR-131 Must row `BR-005, BR-009 → FR-131 → EP-06 ▸ FE-058 ▸ US-0134` with sixteen TCs; the row is **OPEN (`G-PHASE3`)** at Doc 08 **v2.7.0 (Approved)** and remains OPEN at **v2.8.0 (In Review, 2026-09-06)**, which adds `TC-3564`…`TC-3569`… **`TC-3476`, `TC-3481` and `TC-3487` are Blocked**". Checked against Doc 08 line 825 — every element matches. The true first half (acknowledge-to-proceed unbuilt) stands and now cites Doc 06 §7 item 26(d), which I opened and which says exactly that. |
| ISS-02 | Medium | **YES** | §15 v2.4.0 sub-table (line 3021): "**US layer: `US-0134` EXISTS** (EP-06 ▸ FE-058; Doc 05 v2.5.0, Approved) … `TC-3481` … is **Blocked pending those screens, not absent**. Residue — named, rather than asserted as an unminted US: US-0134's **Definition of Done is not met** … and the DES-098 **acknowledge-to-proceed control is still unbuilt**." Doc 05 is Approved at v2.5.0 at HEAD; Doc 08 line 1004 independently records US-0134 as not done. |
| ISS-03 | Medium | **YES** | §10.12.3 line 1793 adds the **"`anon` TITLE banned-word disposition"** with disposition, non-backsliding basis, "What this disposition does NOT claim", four re-open triggers and a downstream note; the Verdict at line 1805 is re-cut cell by cell. §10.13.6 line 2055 now names the scope: "exactly two DES-094 badge states carry copy containing a banned word, and **both are dispositioned in §10.12.3** … these two are the whole set at v2.13.0". |
| ISS-04 | Low | **YES** | §10.11 line 1655: "individual conduct-vote choices are **not published individually**, and the aggregate is public (FR-103)", with the in-place annotation stating that in v1 the DB **CAN** see them (FR-131(b)) and that "private" had meant unpublished, not unseen. |
| ISS-05 | Low | **YES** | §10.12.3 line 1744: the note now states the two annotations are "**not the same string**" and quotes both. Byte-compared against the table row at line 1753 — the subtitle annotation and the longer title annotation both match their cells exactly. |

**Zero cycle-1 issues carried.** The header's claim to that effect is true.

## 5. New issues (cycle 2)

| ID | Severity | Criterion | Location (line) | Finding | Required fix |
|----|----------|-----------|-----------------|---------|--------------|
| ISS-C2-01 | Low | T3 | Header `Status:` block, line 16 | "Doc 08 **has carried** the FR-131 Must row **since v2.2.0 (2026-08-25)** — `EP-06 ▸ FE-058 ▸ US-0134` **with sixteen TCs**". Sixteen is the **v2.8.0** count; six of them (`TC-3564`…`TC-3569`) were minted on 2026-09-06, as the §15 cell itself says. The row has existed since v2.2.0; it has not had sixteen TCs since v2.2.0. | Split the two facts in the Status block as §15 already splits them — the row has existed since v2.2.0; it carries sixteen TCs **at v2.8.0**, ten of them before this drop. |
| ISS-C2-02 | Low | T1/T5 | §5.2 design register, line 1078 (DES-066) | The DES-066 cell reads "per-candidate-per-election nullifier; upvote +3, downvote −1 (ADR-015); **private votes**; public tally" — a bare-word survivor of exactly the class the ISS-04 fix in this same version declares the standing sweep now catches ("the standing FR-131 sweep is **widened** … to a **bare-word scan** of 'private' / 'anonymous' / 'secure' in vote-adjacent prose"). | Apply the widened scan to §5.2 and annotate DES-066 in the §10.11 form, or state that the register describes Phase-3 on-chain design properties and is out of the sweep's scope — either closes it. |

> Neither Low blocks the pass bar. Both are one-line edits and should be taken on the next touch.

### 5.1 Issue detail

**ISS-C2-01 (Low).** This is a precision slip in a *live status field*, which is why it is
recorded rather than waved through, and it is Low because the §15 cell states the same facts
correctly and a reader who follows the pointer recovers the truth immediately. Doc 08's own
v2.2.0 changelog line (line 588) records the FR-131 row being added in a batch whose new TCs were
TC-3470 / TC-3471 / TC-3472 / TC-3474 — not the sixteen now on the row.

**ISS-C2-02 (Low).** The mitigations are real and were weighed: DES-066 is a **Phase-3, on-chain**
element (`FR-065, ADR-015, SCR-23`; Elections / Solidity), so "private votes" is plausibly a
statement about the v2 construction rather than a v1 claim; and like §10.11 it is internal design
rationale, not product copy, so **FR-131 does not bind it**. That is the same reasoning that made
ISS-04 a Low, and parity requires the same grade here. What makes it worth recording at all is
that the version announcing the widened bare-word scan is the version in which the widened scan
would have found this. I checked the whole document for the class — a proximity sweep of
`vote|ballot|tally` within 80 characters of `private|anonymous|secure`, excluding negated,
banned-word-list, superseded and overruled contexts — and **DES-066 is the only survivor**. Every
other hit is the corrected §10.11 cell, the legitimate v2 `unlinkable === true` case, or an
explicitly retired quotation.

### 5.2 Verified NOT defects (recorded so a cycle 3, if any, need not re-litigate them)

- **The `anon` disposition is truthful, not a convenient ruling.** Its compliance finding rests on
  a stated, falsifiable fact (open-tier users cannot cast a binding vote under FR-122/FR-123), it
  expressly distinguishes itself from the v2.7.0 reading it must not resemble, and it concedes in
  its own words that the copy is "**not literally true in v1**" — naming `phone_hash` → phone
  number → the TRAI-registered person in the India pilot, and recording that clause 8's
  data-practices link is **still unbuilt**. Clause 8 (line 1818) independently bears this out: it
  mandates a disclosure that the platform DB associates open-tier actions with the account,
  precisely because the pill "displays the claim 'Nothing you do here is linked to you.'"
- **The copy matches the code at HEAD.** `packages/ui/src/PrivacyStatus.tsx` `STATE_CONFIG.anon`
  is `title: 'Anonymous'`, `subtitle: 'Nothing you do here is linked to you'` — exactly as the
  disposition and the §10.12.3 table state. `VER_TITLE_V1 = 'Verified'`,
  `VER_TITLE_V2 = 'Verified — private'`, `VER_SUBTITLE_V1`/`V2` all as documented; `pub` carries
  "Public" / "You chose a public role. Your record is visible" — **no banned word**, so
  §10.13.6's "exactly two badge states" closed set is correct.
- **§10.13.6 and §10.12.3 do not contradict each other.** The §10.13.6 summary of the `anon`
  ruling ("COMPLIANT in v1 — the state renders only for open-tier users who cannot cast a binding
  vote under FR-122/FR-123 … with four recorded re-open triggers and the clause-8 disclosure gap
  conceded") is a faithful compression of §10.12.3, and it defers to §10.12.3 as the copy
  authority rather than restating a rule of its own.
- **The DES assignment is stated as design intent, not as a claim about Doc 08.** Verbatim: "Doc
  08's row assigns FR-131 → `DES-096 · ADR-024`; **the architect's intended assignment is**
  DES-098 … DES-094 … with DES-096 retained … Routed to **Ji-woo Park (tester)**; **Doc 08 is the
  tester's document and is NOT edited from here**, and nothing in this cell should be read as
  having edited it." Doc 08 at HEAD does still assign `DES-096 · ADR-024`, so the factual half is
  true now.
- **Survivor sweep clean.** "anonymous but" / "votes are anonymous" (3 hits each), "vote is
  anonymous" (0), "Verified — private" (15), "(a)–(e)" (1), "status visibility" (9) — every hit
  opened and classified. All are corrected text, explicitly SUPERSEDED or retired quotations, the
  legitimate v2 case, or the overruling itself. The single "(a)–(e)" hit (line 2539) is an
  unrelated local enumeration in the store-hardening list, whose (a)…(e) items are all present.
- **Cross-document pins are true NOW.** Doc 02 v2.16.3 Approved · Doc 05 v2.5.0 Approved ·
  Doc 06 v2.5.1 Approved · Doc 08 v2.8.0 In Review — all as cited. Doc 03 does not pin Doc 07 or
  Doc 09 by version anywhere this cascade touched.
- **Changelog accuracy.** Every claim in the v2.13.0 entry was checked: the Doc 08 row, the
  Blocked TCs, Doc 06 §7 items 21 and 26(d), Doc 05 v2.5.0, the closed-set scope, and the routing
  paragraph (the engineer's `PrivacyStatus.tsx` header does still read "Doc 03 §10.12.3 v2.7.1"
  and does still attribute the title rule to clause 7, at lines 7 and 242–243). **No over-claim
  found**, with the single exception recorded as ISS-C2-01.
- **Transcription residue: none.** Leaked-marker grep: 0 hits. Duplicated-tail scan at 60
  characters: 0 (the 32-character pass produced only natural repeats inside long cells — e.g.
  line 3021 quoting "the SCR-13/SCR-14 notice surface" twice because it quotes the retired
  sentence it replaces). Both changelog splice points (line 121) re-read: the v2.12.0 entry
  resumes intact, no word eaten at the boundary.

## 6. Routing instruction (to the owning role)

**PASS → the architect (Ravi Deshmukh) sets `Status: Approved` on v2.13.0.** The SOP advances.

The two Lows do **not** require a new version. Per this document's own convention, carry them in
the Status block as **"fix first on any future touch"** — ISS-C2-01 is one sentence in the Status
block, ISS-C2-02 is one cell in §5.2.

**Routed elsewhere (reported, not scored against Doc 03):**

- **Tester (Ji-woo Park)** — Doc 03 §15 now states the intended FR-131 DES assignment
  (**DES-098** primary · **DES-094** status-badge reach · **DES-096** seam) against Doc 08's
  current `DES-096 · ADR-024`. That alignment is the tester's row to make, in Doc 08's own rework.
  The FR-131 Must row stays **OPEN** either way — a Gate-2 input.
- **Engineer** — `packages/ui/src/PrivacyStatus.tsx` still pins "Doc 03 §10.12.3 **v2.7.1**" and
  attributes the title rule to clause 7; v2.13.0 mints clause 9 for it. Behaviour right, citation
  stale. Also still owed: DES-098's acknowledge-to-proceed control (US-0134, SCR-13) and clause
  8's data-practices disclosure link.
- **Approver** — ADR-024 §(d)'s quotation of the retired §13 wording. Unchanged from cycle 1.

## 7. Evidence (what was actually run and read)

- `git diff --stat` and targeted `git diff -U3` on `docs/03-architecture-design-sdd.md`; every
  changed region opened in the **current file**, not only in the diff.
- `artifacts/architect-2026-09-06T1500-doc03-04-cycle2-spec.md` (all 18 ops) and
  `artifacts/architect-2026-09-06T1500-doc03-04-cycle2.md` read in full; **every claimed closure
  re-verified at its location** rather than accepted.
- `artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md` — full ISS table.
- Normative source: `docs/02-requirements-srs.md` §4.45 (Approved **v2.16.3**) — FR-131 (a)–(d).
- Code at HEAD: `packages/ui/src/PrivacyStatus.tsx` (`STATE_CONFIG`, `VER_TITLE_V1`/`V2`,
  `VER_SUBTITLE_V1`/`V2`, the selection logic, and the stale JSDoc pin).
- Cross-documents at HEAD: `docs/08-traceability-matrix.md` v2.8.0 (FR-131 row line 825; DoD
  check line 1004; v2.2.0 changelog line 588); `docs/05-product-backlog.md` v2.5.0 Approved;
  `docs/06-coding-and-ut.md` v2.5.1 Approved (§7 items 21, 22, 26(d)).
- Sweeps: leaked-marker grep; a 60/40/32-character duplicated-substring scan (Node); the five
  assignment greps; a bare-word proximity sweep for vote-adjacent "private"/"anonymous"/"secure".
- `node hooks/run_gates.cjs --audit`.

## 8. Human decision at the cap (ESCALATED only)

Not applicable — cycle 2 of 5, verdict PASS.
