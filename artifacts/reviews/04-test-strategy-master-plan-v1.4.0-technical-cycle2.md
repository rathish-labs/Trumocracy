# Document Review Report — Doc 04 Test Strategy & Master Test Plan v1.4.0

<!-- Produced by the document-review skill (a shared capability, not a ninth agent).
     The reviewer scores and lists issues only; it never edits the document. -->

```
Reviewed document: 04-test-strategy-master-plan.md
Document version: 1.4.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — architect Ravi Deshmukh owns Doc 04)
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 2 of 5
Verdict: PASS
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)
Assignment: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md`

> **Independence note (disclosed).** Doc 04's `Approvers:` row list includes `reviewer-qa`
> (pending). Reviewing a version is not approving it, and the owning role is the architect.
> Disclosed for completeness, as at cycle 1.

---

## 1. Summary (BLUF)

Doc 04 v1.4.0 closes both Mediums and all six Lows, and it closes the Mediums in the form the
finding actually required rather than the cheapest one. §0.5 **S4** now reads "the required
clauses **(a)–(d)**" — matching FR-131 at Doc 02 §4.45 (Approved v2.16.3), which enumerates four
lettered clauses and no (e) — and it carries an in-place annotation that names the discrepancy,
cites the authority, names the owner (Priya Raghunathan), and states what governs meanwhile. The
part I checked hardest is the clause-(e) proposal: the annotation says a product-owner
**proposal** for a clause (e) "exists but is **NOT applied and awaits the approver** — this plan
does not assume it, and this note MUST NOT be read as pre-committing to it", and I confirmed
against Doc 02 v2.16.3 that FR-131 still has only (a)–(d). The plan tests what the requirement
says, not what a pending proposal might make it say. A tester note is attached at the same
criterion telling Ji-woo Park not to derive FR-131 TC rows from a five-clause reading — which is
the live risk, since the FR-131 Must row is OPEN with TC mints owed.

The ISS-01 half is handled honestly in both halves. The false correctness claim
("§0.5 S4/S5 needed no change — the honesty doctrine was already stated correctly there") is
**removed from the live Status field** and replaced with the true split (S5 unchanged and correct;
S4 unchanged in substance but carrying a known, now-annotated discrepancy). The v1.3.0 changelog
sentence "Neither S4 nor S5 is changed" is **left standing as history** with a correction
annotation conceding the sharpest version of the finding — that the author knew when he wrote it,
and that the session note proves it. Deleting that sentence would have been the easier and worse
choice; annotating it is the house convention and the honest form.

S5's `anon`-title carve-out is the other thing worth crediting. It is narrow (two strings, one
component), it **cites Doc 03 v2.13.0 §10.12.3 rather than ruling**, it lapses automatically on
any of Doc 03's four re-open triggers, it keeps the `ver` title in scope in both directions, and
it repeats Doc 03's concession that the `anon` subtitle is not literally true of the operator in
v1. Sequencing was honoured: Doc 03 ruled first (its ISS-03), this plan cites. Transcription is
clean — no leaked markers, no duplicated tails, no words eaten at either splice point.

Three Lows remain, all of one class: **header pin currency**. Doc 07 is pinned "v2.4.4, Approved"
in two places while Doc 07 is **v2.5.0, In Review** at HEAD; §1.3's no-story-list annotation still
says Doc 05 "is now at v2.3.0 (In Review)" — a third location of the pin the version fixed in two;
and the Doc 09 pin, accurate when written, has been overtaken within the same day (Doc 09 is now
**v1.6.0, In Review**). None changes a conclusion; all three are one-token edits. **PASS at 96%.**

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — both rows are all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.40 | S4 now cites FR-131's actual four clauses; the fifth scanned word is labelled as this plan's own extension; the tester note prevents a fabricated fifth TC row; the pending clause (e) is explicitly not assumed. |
| T2 Soundness | 20 | 98 | 19.60 | The S5 carve-out cites the copy authority instead of inventing a ruling, is keyed to Doc 03's re-open triggers, and preserves the `ver` constraint in both directions. `A-02.6` and `OPEN-01` keep their substantive findings. |
| T3 Traceability & IDs | 20 | 90 | 18.00 | All cycle-1 pin findings fixed and verified; three new pin-currency Lows survive in the same header/reference apparatus (ISS-C2-01, -02, -03). No `OPEN-##`, `TS-`, `UT-`, `TC-` or `ISS-` identifier renumbered or reused. |
| T4 Security & failure modes | 15 | 98 | 14.70 | `OPEN-01` intact as a Definition-B Gate-2 blocker with unchanged owners; S5 still **build-failing**; the carve-out lapses automatically on trigger rather than persisting silently. |
| T5 Completeness & testability | 15 | 97 | 14.55 | `A-02.6`'s enforced-today / owed split is accurate — verified against Doc 06 §7 item 21, Doc 08's Blocked `TC-3481`, and Doc 03 v2.13.0 §15. |
| T6 Convention compliance | 10 | 94 | 9.40 | 1.3.0 → 1.4.0 (minor — correct floor), `Status: In Review`, `Last updated: 2026-09-06`, changelog describes only what changed and annotates the over-claim rather than deleting it, §22 row current. Deduction: "No Low is carried forward" reads slightly broader than the surviving pin Lows warrant. |
| **Total** | **100** | — | **95.65 → 96%** | — |

## 4. Cycle-1 closure table (verified at source, not taken from the changelog)

| Cycle-1 ID | Sev | Closed? | Evidence in v1.4.0 |
|---|---|---|---|
| ISS-01 | Medium | **YES** | The Status block no longer contains "§0.5 S4/S5 needed no change"; it now states "**S5 is unchanged and correct. S4 is unchanged in substance but carries a known discrepancy** — now annotated in place, routed to **Priya Raghunathan (product-owner)**". The v1.3.0 changelog sentence "Neither S4 nor S5 is changed" stands as history with a v1.4.0 correction annotation (line 162) conceding "**the claim about S4 was an over-claim and the author knew it when it was written**". |
| ISS-02 | Medium | **YES** | §0.5 S4 (line 421) now reads "the required clauses **(a)–(d)**", with an annotated blockquote naming the discrepancy, citing Doc 02 §4.45 (Approved v2.16.3), routing to the PO, stating that a clause-(e) **proposal** is **NOT applied and awaits the approver**, and attaching a tester note. Verified against Doc 02 v2.16.3: FR-131 has (a), (b), (c), (d). |
| ISS-03 | Low | **YES** | Same S4 annotation: "FR-131's closing sentence bans **four** words … This plan's scan adds a fifth, ***secret***, as **its own deliberate extension**", explicitly reconciling S4's five with §8 `A-02.6`'s "four banned words". |
| ISS-04 | Low | **YES** | §8 `A-02.6` (line 1317) now splits "**Enforced today — the content and word-ban halves only**" from "**Owed, NOT enforced today — the placement half**", citing Doc 06 §7 item 21, the component-level `ReceiptFreedomBanner` render, Doc 08's Blocked `TC-3481` and Doc 03 v2.13.0 §15. All four checked and true. |
| ISS-05 | Low | **YES (two of three locations)** | `Source:` block: Doc 05 re-pinned to "**v2.5.0**, Approved". `OPEN-21` body (line 1870): "Doc 05 is now at **v2.5.0 (Approved)**", with the correct observation that the staleness makes the finding *more* live. A third location survives — recorded as ISS-C2-02. |
| ISS-06 | Low | **YES (as written)** | The Doc 09 line now states last **Approved v1.4.0**, **v1.5.0** In Review with its cycle-1 FAIL, and identifies v1.3.0 as *where* `REL-LIM-18` / `ISS-03` was recorded rather than as a pin — which also disarms every other v1.3.0 citation in the document. Overtaken by events; see ISS-C2-03. |
| ISS-07 | Low | **YES** | `Owner:` parenthetical (line 52): "Doc 03 — cited as v2.11.2 (Approved) when this line was written at v1.1.0, and **now v2.13.0 (In Review)**; the citation is the historical provenance of the owner name, not a version pin". |
| ISS-08 | Low | **YES** | §0.5 S5 (line 454) carries the **Named carve-out — the `anon` participation-tier badge**, citing Doc 03 **v2.13.0 §10.12.3** as the basis, stating "**This plan cites that disposition; it does not make one**", keying the exception to Doc 03's four re-open triggers, and keeping the `ver` title in scope in both directions. Sequencing honoured. |

**All eight cycle-1 issues closed.** ISS-05 is closed at both locations the cycle-1 report named;
the third location it did not name is recorded fresh below rather than as a carry.

## 5. New issues (cycle 2)

| ID | Severity | Criterion | Location (line) | Finding | Required fix |
|----|----------|-----------|-----------------|---------|--------------|
| ISS-C2-01 | Low | T3 | `Source:` block, line 72; §1.4 References, line 734 | Doc 07 is pinned "**v2.4.4**, Approved" in both places. At HEAD `docs/07-test-cases-suites.md` is **v2.5.0, In Review** (its cycle-1 review FAILed; rework to v2.6.0 is in progress). This is the mirror of cycle-1 ISS-05/ISS-06 — a live status field asserting an Approved state a downstream document no longer holds — and it sits in the very header block this version reworked for pin currency. | Re-pin Doc 07 to **v2.5.0 (In Review)** in both places, or state last-Approved v2.4.4 plus the In Review version, as the Doc 09 line already does. |
| ISS-C2-02 | Low | T3 | §1.3, line 723 | The no-story-list annotation still reads "this no-story list is derived from Doc 05 **v1.0.0** and Doc 05 is now at **v2.3.0 (In Review)**" — a **third** location of the ISS-05 pin, and the one that carries the live instruction "The list MUST be re-derived … **OPEN-21**", which `OPEN-21` cross-references. The two locations cycle 1 named were fixed; this one was not. | Re-pin to **v2.5.0 (Approved)** here too, as `OPEN-21`'s body already is. Mitigating: the annotation is dated *(v1.1.0: …)*, so "now" is arguably read as "at v1.1.0" — which is why this is Low, not Medium. |
| ISS-C2-03 | Low | T3 | `Source:` block, lines 76–80 | The Doc 09 line says "**v1.5.0** is In Review at this date … with rework to v1.6.0 in progress". At HEAD Doc 09 is **v1.6.0, In Review** (rework cycle 2). The line was accurate when written and is explicitly hedged, and its load-bearing facts (last Approved v1.4.0; v1.3.0 is where `REL-LIM-18` was recorded) remain true — but the version it names as In Review has been superseded within the same day. | Say "last Approved **v1.4.0**; **v1.6.0** In Review", or drop the in-flight version number and keep only the last-Approved pin plus the `REL-LIM-18` provenance. |

> None of the three blocks the pass bar. All three are one-token edits in the header apparatus.

### 5.1 Issue detail

**Why all three are Low and not Medium.** Cycle 1 graded the identical defect class — a `Source:`
pin naming a stale version, including one asserting "In Review" for a document that was Approved —
as **Low** (ISS-05, ISS-06, ISS-07), on the reasoning that "none changes a conclusion" and the
citation is right even where the pin is stale. That reasoning holds symmetrically here: v2.4.4
**was** Approved and is Doc 07's last Approved version, so the pin is stale rather than false; the
§1.3 annotation is explicitly dated to v1.1.0; and the Doc 09 line is hedged and correct on the
facts it is actually used for. Grading them Medium now would be inconsistent with the precedent
this same reviewer set one cycle ago on the same document.

**The one thing worth flagging to the PM rather than the owner.** Three of these four pin findings
across two cycles exist because **downstream documents moved during the same session** — Docs 05,
07, 08 and 09 all changed on 2026-09-06. The architect's session note explicitly says he verified
only the pins he had evidence for, and he re-pinned three of them correctly. This is a coordination
artefact, not an authoring defect, and the standing **pin-currency sweep** the cycle-1 report
recommended to the project-manager is the right place to fix it permanently.

**Not a defect — `OPEN-09`'s Doc 03 citation (line 1858).** It reads "Doc 03 v2.11.2 (Approved)"
while Doc 03 is v2.13.0. Checked and dismissed: the row is marked *(re-scoped v1.1.0)*, records a
finding it declares **CLOSED**, and is a historical account of why the ownership question was
settled. It is the same category the ISS-07 fix explicitly re-labelled as provenance rather than
a pin, and reading it as a live pin would be uncharitable.

### 5.2 Verified NOT defects (recorded so a cycle 3, if any, need not re-litigate them)

- **The clause-(e) proposal is genuinely not assumed.** The S4 annotation names it, states it is
  "**NOT applied and awaits the approver**", and instructs that the note "MUST NOT be read as
  pre-committing to it". FR-131 at Doc 02 §4.45 (Approved v2.16.3) has (a)–(d) at HEAD. The plan
  tests the requirement, not the proposal. This is the correct posture for a test plan whose owner
  is not the requirement's owner.
- **S5's carve-out cites rather than rules, and I checked the citation resolves.** Doc 03 v2.13.0
  §10.12.3 does now contain an "`anon` TITLE banned-word disposition" ruling the title COMPLIANT in
  v1 on the FR-122/FR-123 basis, with four re-open triggers — exactly what S5 says it cites. The
  carve-out also repeats Doc 03's concession that the `anon` subtitle "is not literally true of the
  operator in v1 — that is a clause-8 disclosure obligation with an unbuilt link, tracked there and
  not answered by this carve-out". Both strings match `STATE_CONFIG.anon` in
  `packages/ui/src/PrivacyStatus.tsx` at HEAD.
- **`A-02.6`'s split is factually right.** SCR-13/SCR-14 are unbuilt per Doc 06 §7 item 21, which I
  opened: "The FR-131 clause (d) notice surface is built at the parties directory; the SCR-13/SCR-14
  ballot surfaces remain owed (voting is a later session)." Doc 08 line 825 records `TC-3481` as
  Blocked. The three cited unit tests remain the enforcement of the content and word-ban halves only.
- **`OPEN-01` and `TS-ADV-02` are unweakened.** `OPEN-01` (line 1850) still records `FR-031`,
  `FR-032` and `NFR-003` as **Must** guardrails v1 does not deliver, still a Definition-B Gate-2
  blocker, owners unchanged. §22's Approvals row (line 2156) describes the v1.4.0 submission and
  folds the v1.3.0 / v1.2.0 / v1.1.0 / v1.0.0 history into a parenthetical rather than deleting it —
  keeping ISS-10 discharged.
- **Survivor sweep clean.** "anonymous but" (6), "votes are anonymous" (5), "vote is anonymous" (0),
  "Verified — private" (2), "(a)–(e)" (4), "status visibility" (0) — every hit opened. Each is a
  retired phrase quoted inside a correction annotation, the changelog narrating the correction, the
  legitimate v2-only `unlinkable === true` case, or — for all four "(a)–(e)" hits — the *finding
  text itself* recording what S4 used to say. **The criterion no longer asserts a five-clause
  range.** No affirmative claim that v1 voting is anonymous, private, receipt-free or secure
  survives anywhere in the document, and a bare-word proximity sweep for vote-adjacent
  "private"/"anonymous"/"secure" returned only legitimate Definition-B (v2) descriptions.
- **Transcription residue: none.** Leaked-marker grep: 0 hits. Duplicated-tail scan at 60
  characters: 0 (the 32-character pass flagged only line 1850, where `OPEN-01` legitimately quotes
  its own retired clause). Both changelog splice points (line 140) re-read: the v1.3.0 entry resumes
  intact, no word eaten at the boundary.
- **Cross-document pins that ARE true now.** Doc 02 v2.16.3 Approved · Doc 05 v2.5.0 Approved ·
  Doc 06 v2.5.1 Approved · Doc 03 v2.13.0 In Review — all verified against the documents' headers
  at HEAD.

## 6. Routing instruction (to the owning role)

**PASS → the architect (Ravi Deshmukh) sets `Status: Approved` on v1.4.0.** The SOP advances.

The three Lows do **not** require a new version. Take them at the next touch of the header block;
all three are one-token edits and should be done together with a single pass over every version
pin in the `Source:` block, §1.3 and §1.4.

**Routed elsewhere (reported, not scored against Doc 04):**

- **Product-owner (Priya Raghunathan)** — the standing question is unchanged and now correctly
  parked: does FR-131 have, or need, a clause **(e)**, or was S4's "(a)–(e)" a typo for (d)? A
  clause-(e) proposal is in flight and **not applied**. Until it is ruled, S4 correctly tests
  (a)–(d).
- **Tester (Ji-woo Park)** — S4 now carries a tester note in terms: **do not derive FR-131 TC rows
  from a five-clause reading**. TC mints for `UT-0759` / `UT-0887` / `UT-0888` remain owed per
  Doc 06 v2.5.1 §7 item 26(c); the FR-131 Doc 08 Must row is **OPEN (G-PHASE3)**.
- **Project-manager** — the pin-currency sweep recommended at cycle 1 is now evidenced twice.
  Docs 05, 07, 08 and 09 all moved on 2026-09-06; three of this cycle's four pin observations are
  a consequence of parallel rework rather than of authoring.

## 7. Evidence (what was actually run and read)

- `git diff --stat` on `docs/04-test-strategy-master-plan.md`; every changed region opened in the
  **current file**, not only in the diff.
- `artifacts/architect-2026-09-06T1500-doc03-04-cycle2-spec.md` (OPs 9–18) and
  `artifacts/architect-2026-09-06T1500-doc03-04-cycle2.md` read in full; every claimed closure
  re-verified at its location.
- `artifacts/reviews/04-test-strategy-master-plan-v1.3.0-technical-cycle1.md` — full ISS table.
- Normative source: `docs/02-requirements-srs.md` §4.45 (Approved **v2.16.3**) — FR-131 has four
  lettered clauses.
- Code at HEAD: `packages/ui/src/PrivacyStatus.tsx` (`STATE_CONFIG.anon` title and subtitle,
  `VER_TITLE_V1`/`V2`).
- Cross-documents at HEAD, headers read directly: Doc 02 v2.16.3 Approved · Doc 05 v2.5.0
  Approved · Doc 06 v2.5.1 Approved (§7 items 21, 26(d)) · Doc 07 **v2.5.0 In Review** · Doc 08
  **v2.8.0 In Review** (FR-131 row line 825) · Doc 09 **v1.6.0 In Review** · Doc 03 v2.13.0
  (reviewed in parallel; its `anon` disposition opened to confirm S5's citation resolves).
- Sweeps: leaked-marker grep; a 60/40/32-character duplicated-substring scan (Node); the five
  assignment greps; a bare-word proximity sweep for vote-adjacent "private"/"anonymous"/"secure".
- `node hooks/run_gates.cjs --audit`.

## 8. Human decision at the cap (ESCALATED only)

Not applicable — cycle 2 of 5, verdict PASS.
