# Document Review Report — Doc 02 Requirements Specification v2.17.1 — business, cycle 2

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **reviewer-qa** (Rafael Duarte), the PM-assigned neutral reviewer — **NOT** the document
> owner (the product-owner owns Doc 02). The reviewer scores and lists issues only; it never edits
> the document. All rework was done by the **owning role** (product-owner, Priya Raghunathan).
>
> **Cycle:** 2 of 5, continuing the v2.17.x lineage. Cycle 1 (v2.17.0) was a **FAIL at 86%**,
> 0C / 0H / **3M** / 7L — `artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md`.
> This review verifies **every declared closure**, re-checks the invariants, and sweeps for defects
> introduced by the rework. Rework spec:
> `artifacts/product-owner-2026-09-06T2030-doc02-v2171-spec.md` (12 operations).

<!-- MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.17.1
Review mode: business
Reviewer role: reviewer-qa (neutral — product-owner owns Doc 02)
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 7
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

**All three cycle-1 Mediums are closed, each verified against the text rather than against the
owner's claim, and the rework introduced no defect above Low. PASS at 96%.**

**The strongest evidence I can offer is a byte-for-byte reconstruction.** I took the committed
baseline (`git show HEAD:docs/02-requirements-srs.md` — **v2.16.3**, since neither v2.17.0 nor
v2.17.1 is committed), applied the **4 operations** of the v2.17.0 spec and then the **12
operations** of the v2.17.1 spec, requiring each `FIND` to match **exactly once** at its step, and
compared the result with the file on disk:

```
v2.17.0 ops: 4   v2.17.1 ops: 12
reconstructed length 470132   actual length 470132
BYTE-IDENTICAL: true
```

That single result discharges several checks at once and is stronger than a diff: **all 16
operations applied exactly as specified; zero collateral edits anywhere in the 470,132-byte file;
and zero transcription residue at any of the 16 boundaries** — any orphaned `FIND:`/fence line,
duplicated row, or truncation would have broken byte-identity. Independent greps agree: 0
occurrences of `FIND:`, `REPLACE WITH:`, four-backtick fences or conflict markers; 18 three-backtick
fence lines (even, balanced).

**The three Mediums, verified individually:**

- **ISS-01 (no Gherkin criterion for clause (e)) — CLOSED.** The §8 block header at line 2465 is
  de-scoped from the ballot and now names clauses (a)-(c), (d) and (e) separately. **Two** scenarios
  were added, not one: **Scenario 8** (the reader test, the public-by-design rule, the banned-word
  rule with the clause-(a) carve-out, and the safe-harbour) and **Scenario 9**, an absence test in
  the project's established UT-0700/UT-0869 pattern whose closing step is the point of the whole
  amendment — *"a claim that contains none of the four banned words still FAILS if an ordinary
  grade-8 reader would take it to mean the act is unknowable to Trumocracy."* **The tester now has an
  executable criterion to trace**, which was the live risk I flagged for Doc 07 v2.7.0 / Doc 08
  v2.10.0.
- **ISS-02 (§4.45 still ballot-scoped) — CLOSED, and better than I asked.** The heading (line 1185)
  now reads "*v1 honesty notice and honesty-of-claim duty — participation-act posture (DES-098)*".
  The original ballot rationale is re-emitted **verbatim and undeleted** (correct — it remains true
  for clauses (a)-(d)), followed by a new paragraph headed "**Scope, from v2.17.0 (do not read this
  section as ballot-only)**" which states the widening *and its cause*: "*a ballot-scoped scope
  statement, read literally, is precisely what allowed two false landing strings to ship on
  2026-09-05 … a reader who stops at the paragraph above would repeat that reasoning.*" Recording
  the failure mechanism inside the section is more than the fix required.
- **ISS-03 (RFC 2119 defect) — CLOSED.** The negated-subject `MUST` is gone (`"no public-facing
  string"` → **0 occurrences**) and the prohibition now takes a positive subject with `MUST NOT`
  (`"MUST NOT assert that a **participation act** is unknowable"` → **1 occurrence**). The
  `grade-8` casing is aligned to NFR-023 at the normative site.

**The six actionable cycle-1 Lows are also closed** (ISS-04 confirmation recorded at all five live
sites; ISS-05 safe-harbour subordinated with an explicit precedence sentence, echoed in Scenario 8;
ISS-06 "governed by" → "addressed by FR-132 §(d)" with §13 (j) named; ISS-07 §12 entries for both
versions; ISS-08 and ISS-10 the two §16.3 rows; ISS-09 "**Doc 06 §2.5**"). The three genuinely
unrelated Lows (ISS-11/12/13) are carried and disclosed in the `Status:` block, exactly as routed.

**The FR-131 row moved at exactly the six declared change points and nowhere else.** I ran a
token-level LCS diff of the op's `FIND` against its `REPLACE`; the 31 token hunks cluster into
precisely C1-C6 (RFC 2119 recast; grade-8 casing; safe-harbour qualifier + precedence sentence;
"addressed by" + §13 (j); the confirmation at the clause label; the confirmation + acceptance-
criterion pointer in the Source annotation). Clauses (a)-(d), the FAILS test, the public-by-design
rule, the widened closing sentence, the quoted SUPERSEDED wording, and `BR-005, BR-009 | Must |
Nadia Hassan | T, I` are all re-emitted verbatim.

**Seven Lows remain — three new, one record-only, three carried.** None is blocking. **Verdict:
PASS at 96%, 0C / 0H / 0M / 7L.** The product-owner should set `Status: Approved`; the SOP advances.

**A correction to my own cycle-1 report, recorded for accuracy.** In cycle-1 ISS-07 I wrote that
"every prior version from v2.12.0 onward has [a §12 session-scope entry]". That was imprecise:
§12 runs v2.13.0, v2.14.0, v2.14.1, v2.15.0 and then jumps to the new v2.17.0 entry — **v2.16.0
through v2.16.3 have no entries**. The requested fix was still right and is now applied; only my
justification overstated the pattern. The v2.16.x gap pre-dates this version and I do not raise it
against v2.17.1.

---

## 2. Pass-bar check

- Score >= 95%? **Yes** (`96%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — both rows are all "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0-100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | The rework documents itself unusually well: the `Status:` block and the new §12 entry name **every issue id and its disposition**, and the spec's own coverage table maps issue → op → disposition. The §4.45 scope paragraph goes beyond the fix and records the *causal mechanism* of the original defect, which is the single most useful sentence added by this version. |
| B2 Completeness | 15 | 96 | 14.40 | The cascade is now complete across all nine affected sites: FR-131 row, §4.45 heading + rationale, §8 header + Scenarios 8 and 9, §12 (two entries), §16.3 (two rows), §13 (j), and the five confirmation sites. Every cycle-1 issue is either closed or carried-with-disclosure; none is silently dropped. Deduction: Scenario 9 is omitted from the three pointers a reader is most likely to follow (ISS-02 below). |
| B3 Traceability & IDs | 20 | 95 | 19.00 | Invariants proven, not asserted: the byte-identical reconstruction establishes that **no ID was minted, reused or renumbered** and that nothing outside the 16 operations moved; Must count stays 114 (12 in-document statements, unchanged); FR-131 still traces `BR-005, BR-009`, `Must`, `Nadia Hassan`, `T, I`. **Clause (e) now has the down-link the traceability rule requires** (§8 Scenarios 8-9), which is what drove cycle 1's deduction here. Deductions: the scenario-number discontinuity (ISS-01) and the Scenario 9 under-citation (ISS-02). |
| B4 Correctness & consistency | 15 | 96 | 14.40 | No factual regression anywhere: the six FR-131 change points are exactly as declared; §16.3's FR-131 and FR-132 rows are now consistent with clause (e)'s scope boundary; the ballot rationale is retained rather than deleted; the superseded "presented for approver confirmation" framing is quoted-and-corrected rather than erased, which is the right convention. Deduction: the "Scenario 8" vs "Scenarios 8 and 9" inconsistency across five citation sites (ISS-02). |
| B5 Testability | 15 | 94 | 14.10 | The heart of the fix, and it lands. Clause (e) has two scenarios: one behavioural, one an absence test in the house UT-0700/UT-0869 pattern, naming the approved satisfying pattern (`parties.joinPrivate`) and its existing guard (UT-0869) so the tester has a concrete anchor. Scenario 9's closing step encodes the amendment's whole point (a word-list-clean claim can still fail). Deductions: two of Scenario 8's steps restate rules rather than assert observable outcomes (ISS-03), and the numbering gap slightly complicates TC referencing. |
| B6 Convention compliance | 15 | 97 | 14.55 | RFC 2119 defect closed and verified by grep in both directions. `grade-8` aligned at the normative site. **Annotate-don't-delete honoured throughout** — the ballot rationale retained, the SUPERSEDED closing sentence still quoted exactly once, the superseded confirmation framing quoted rather than erased. PATCH bump correct for a no-normative-meaning rework, matching my cycle-1 routing. ISO-8601 dates; named-owner rule intact. Deduction: one "Grade-8" survives in v2.17.0 changelog narration (ISS-04, record-only). |
| **Total** | **100** | — | **96.05% ~= 96%** | — |

---

## 4. Issues (every issue severity-classified and located)

> **No Critical, no High, no Medium.** All three cycle-1 Mediums are closed and verified in §4.2.
> The seven Lows below do not block the pass bar.

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | B3 | §8, the FR-131 Gherkin block — scenarios at lines 2468, 2479, 2484, 2489, 2494, **2504**, **2514** | **The FR-131 block now numbers its scenarios 1, 2, 3, 4, 5, 8, 9 — a gap at 6 and 7.** Every other §8 block numbers contiguously from 1 (FR-130: 1-3; FR-132: 1-7; FR-133: 1-2). **The cause is my own cycle-1 wording and I record that plainly:** I wrote "Add a **Scenario 8**", having read the "Scenario 7" at what was then line 2509 as belonging to FR-131 when it in fact belongs to the **FR-132** block. The owner followed the instruction literally and correctly. No ID-scheme rule is broken — Gherkin scenario numbers are block-local labels, not `TC-####`/`UT-####` IDs — but a reader of the block will reasonably ask where 6 and 7 went. | **Two acceptable fixes; prefer the cheaper one.** (a) If the tester has **not** yet cut Doc 07 v2.7.0 rows against these labels, renumber to **Scenario 6** and **Scenario 7** and update the five citing sites. (b) Otherwise — and this is the safer default now that Doc 07/08 are being cut — leave the numbers and add one comment line to the block, e.g. `# Note: numbering continues at 8 (v2.17.1); 6 and 7 were never used in this block.` Do **not** renumber after Doc 07/08 have referenced them. |
| ISS-02 | Low | B2 / B4 | Three pointers cite "Scenario 8" alone: the FR-131 **Source annotation** (line 1220, "*Clause (e) acceptance criterion: §8 FR-131 Scenario 8*"), **§4.45's new scope paragraph** (line 1202, "*see clause (e) and §8 FR-131 Scenario 8*"), and the header **`Status:`** block (line 20, "*§8 FR-131 Scenario 8 added*") — while **§12** (line 3045) and **§16.3** (FR-131 row) correctly say "Scenarios 8 and 9" / "Scenarios 8-9" | **Scenario 9 is omitted from the three pointers a reader is most likely to follow.** The FR-131 Source annotation is the canonical statement of clause (e)'s acceptance criterion and the natural path for the tester cutting Doc 07 v2.7.0 — following it yields Scenario 8 only, and **Scenario 9 is the absence test**, the one that encodes the amendment's central holding (a claim containing none of the four banned words can still fail). Losing it would reproduce, in the test layer, exactly the word-list thinking clause (e) exists to end. Low rather than Medium because the criterion is not absent — it is present, correct, and cited accurately at two other sites — so no reader is misinformed, only under-informed. | Change "Scenario 8" to "**Scenarios 8 and 9**" at the three sites, prioritising the FR-131 Source annotation. One-word edits. |
| ISS-03 | Low | B5 | §8, Scenario 8, the last two steps (lines 2511-2512) | **Two steps restate clause (e)'s rules rather than assert an observable outcome.** "*And material that instead states separately what the platform does not publish and what the platform's own records can see … **passes***" and "*And where the safe-harbour and the reader test disagree, the reader test governs*" are precedence and safe-harbour **rules**, not `Then`-clause assertions about the system under test. A tester converting Scenario 8 into a `TC-####` will find the first five steps executable and these two not. The content is right and belongs in the requirement (it is in clause (e)); the question is only whether it belongs inside the Gherkin. | Either move both to a `# Note:` comment beneath the scenario, or recast them as assertions — e.g. "*And a material following the `parties.joinPrivate` pattern (UT-0869) satisfies this scenario*". Non-blocking; fold into whichever version next touches §8. |
| ISS-04 | Low (record-only) | B6 | Header `Change:` block, the **v2.17.0** entry, line 83: "*the test being what an ordinary **Grade-8** reader would take the claim to mean*" | **One capitalised "Grade-8" survives**, in the dated v2.17.0 changelog narration; the normative site (the FR-131 row) is correctly lowercased to match NFR-023. The v2.17.1 applier checklist item 6 asked for zero occurrences, so a mechanical applier would flag this — but the **document is right and the checklist was over-strict**: this document's settled convention, which I endorsed at cycle 1 when keeping ISS-12 (a far more serious narration echo) at Low, is that **dated historical changelog narration is not rewritten**. | **No fix required.** Recorded so the checklist mismatch is explained rather than rediscovered. If §12/the changelog is ever rewritten for another reason, align it then. |
| ISS-05 | Low | B4 | §4.6 FR-064, the "**v2 (deferred):**" clause (line 741) — **carried** since `02-requirements-srs-v2.15.0-business-cycle1.md`; cycle-1 ISS-11 | **Confirmed still present and unchanged.** The clause still does not cross-reference the v1 anti-abuse controls that bound it within v1 (FR-023, FR-068). Correctly disclosed as carried in the new `Status:` block; v2.17.1 does not touch FR-064, so carrying it again matches my own cycle-1 routing. | Unchanged: add a short v1 cross-reference to FR-023/FR-068. Fold into the next version that touches FR-064. |
| ISS-06 | Low | B2 / B4 | Header `Change:` block, the **v2.16.0** entry: "*(not a defect in v1, which holds no vote)*" — **carried**; cycle-1 ISS-12 | **Confirmed still present (1 occurrence), unchanged.** The residual unscoped echo of the mis-citation corrected at v2.16.3 survives in historical changelog narration. Correctly disclosed as carried. Still Low for the reason given at cycle 1 and at v2.16.3: it is dated narration, not a live status field, and contradicts no governing text. | Optional cleanup on a version that rewrites §13 narration: "*the proposals layer, which holds no vote*". Non-blocking. |
| ISS-07 | Low | B4 | §13 tracked routing **(h)**: "*DES-096 specifies a v1 ballot backing outright, so **v1 does hold a vote**.*" — **carried**; cycle-1 ISS-13 | **Confirmed still present (1 occurrence), unchanged.** The precision gap against the adjacent (g) row's "the layer **built** holds no vote" persists. Correctly disclosed: v2.17.1 touches §13 but **edits only block (j)** and its header, never (h) — and the `Status:` block says exactly that, accurately. | Unchanged: qualify to "*so v1's **design** does hold a vote (the ballot layer itself, tracked separately as OPEN at §13 (g))*". Non-blocking. |

---

### 4.1 Closure verification — every cycle-1 issue, checked against the text

| Cycle-1 issue | Sev | Declared fix | How I verified it | Result |
|---|---|---|---|---|
| **ISS-01** no §8 Gherkin criterion for clause (e) | **M** | OP 6 + OP 7 | Read the §8 FR-131 block end to end (lines 2464-2519): header comment now names clauses (a)-(c), (d) and (e) separately and is no longer ballot-scoped; **Scenario 8** (7 steps: reader test, public-by-design, banned words with the clause-(a) carve-out, safe-harbour, precedence) and **Scenario 9** (absence test, 4 steps) present and well-formed Given/And/When/Then | **CLOSED** |
| **ISS-02** §4.45 heading + rationale ballot-scoped | **M** | OP 3 + OP 4 | Read line 1185 (heading) and lines 1187-1205 (rationale). Heading now "…honesty-of-claim duty — participation-act posture". Original ballot rationale re-emitted **verbatim, undeleted**; new paragraph "**Scope, from v2.17.0 (do not read this section as ballot-only)**" added, naming clause (e), §8 Scenario 8, and the causal mechanism | **CLOSED** |
| **ISS-03** RFC 2119 negated-subject MUST | **M** | OP 5 C1 + C2 | Grep both directions: `"no public-facing string"` → **0**; `"MUST NOT assert that a **participation act** is unknowable"` → **1**. Read the recast sentence in full: positive subject ("public-facing strings, screens, READMEs and other materials"), prohibition `MUST NOT`. `"Grade-8"` → 1 (narration only, ISS-04); `"grade-8 reading level"` → 6 | **CLOSED** |
| **ISS-04** stale "presented for approver confirmation" | L | OP 1, 2, 5 (C5, C6), 9 | Grep: the phrase survives **once**, at line 30, and there only as a **quoted, corrected** reference ("*v2.17.0's 'presented for approver confirmation' framing was true when authored at 10:00 and is superseded by that record*") — annotate-don't-delete, not a stale claim. The confirmation is stated as fact at all five live sites: lines 28 (Status), 67 (Change), 1220 ×2 (clause-(e) label + Source annotation), 3103 (§13 header) | **CLOSED** |
| **ISS-05** safe-harbour vs reader test | L | OP 5 C3 | Read the clause: safe-harbour now carries "**and makes no contrary claim elsewhere in the same string**" and is followed by "**Where the safe-harbour and the reader test above appear to disagree, the reader test governs.**" The precedence rule is echoed as Scenario 8's last step (2 occurrences of "the reader test governs") | **CLOSED** |
| **ISS-06** "governed by" overstates FR-132 / §16.4 | L | OP 5 C4 | Grep + read: now "*addressed by FR-132 §(d) and by §16.4 H-16/H-17/H-18 and are expressly outside this clause; whether those provisions fully reach the enrolment landing copy is the open question tracked at §13 tracked routing (j)*" — the open question is named, matching §13 (j)'s OPEN status | **CLOSED** |
| **ISS-07** no §12 session-scope entry | L | OP 8 | Read §12's tail: entries for **v2.17.0** (line 3043) and **v2.17.1** (line 3045) added in order after v2.15.0 and before `## 13.` (line 3049). Both follow the v2.12.0/v2.13.0 template (no new FRs; no IDs minted/reused/renumbered; Must count 114) and the v2.17.1 entry enumerates every issue id closed | **CLOSED** (see §1 for the correction to my cycle-1 justification) |
| **ISS-08** §16.3 FR-131 row under-describes | L | OP 11 | Token diff of OP 11 `FIND` vs `REPLACE`: exactly 3 hunks, all one change point — title gains "and honesty-of-claim duty"; v1 column gains "*from v2.17.0 also the honesty-of-claim duty across every v1 participation act on every public-facing surface in every language (clause (e); §8 Scenarios 8-9)*". v2 column, Must, IN-v1 and the honesty flag unchanged | **CLOSED** |
| **ISS-09** unqualified "§2.5" in §13 (j) | L | OP 10 | Token diff of OP 10: exactly 1 change point, "§2.5" → "**Doc 06 §2.5**". Nothing else in the row moved. 2 occurrences of "**Doc 06 §2.5**" in the file (§13 (j) and the §12 entry) | **CLOSED** |
| **ISS-10** §16.3 FR-132 row "clauses (d)/(e)" ambiguous | L | OP 12 | Token diff of OP 12: exactly 1 change point, "*honesty caveat carried by FR-131 notice (DES-098) clauses (d)/(e)*" → "*…by the FR-131 notice (DES-098) clause (d), and by FR-132 §(d)/§(e)*". The ambiguity against clause (e)'s enrolment carve-out is resolved | **CLOSED** |
| **ISS-11 / ISS-12 / ISS-13** three carried Lows | L×3 | Carried by design | Re-read all three sites: FR-064 line 741 (unchanged); the v2.16.0 changelog echo (1 occurrence); §13 (h) "so v1 does hold a vote" (1 occurrence). All three disclosed in the new `Status:` block, and v2.17.1 genuinely touches none of their sites | **CARRIED — correctly** |

### 4.2 Independent verification performed (beyond the closure table)

| Property | Method | Result |
|---|---|---|
| **All 16 operations applied exactly; zero collateral edits; zero residue** | Reconstructed v2.17.1 from `git show HEAD:…` (v2.16.3) by applying the 4 v2.17.0 ops then the 12 v2.17.1 ops, each `FIND` required to match **exactly once**, then compared with the file on disk | **BYTE-IDENTICAL** — 470,132 bytes both sides. No `FIND` was ambiguous at any step |
| Each op's `REPLACE` present verbatim exactly once | Substring counts for all 12 blocks | PASS — all 12 at `occ=1`; `FIND` at 0 except OP 4 and OP 8, where `FIND` is a subset of `REPLACE` (expected) |
| **FR-131 row changed only at the six declared points** | Token-level LCS diff of OP 5 `FIND` vs `REPLACE` | PASS — 31 token hunks clustering into exactly C1-C6; clauses (a)-(d), the FAILS test, the public-by-design rule, the widened closing sentence, the quoted SUPERSEDED wording, and `BR-005, BR-009 \| Must \| Nadia Hassan \| T, I` all re-emitted verbatim |
| Transcription residue at all 12 (and all 16) boundaries | Grep `FIND:`, `REPLACE WITH:`, four-backtick fences, `<<<<<<<`; three-backtick fence parity; plus the byte-identity result | PASS — 0 / 0 / 0 / 0; 18 fence lines (even); byte-identity independently precludes any residue |
| No ID minted, reused or renumbered; Must count unchanged | Byte-identity + the op diffs + 12 in-document "Must count stays at 114" statements | PASS |
| Un-widened closing sentence not live; SUPERSEDED quote intact | Substring counts | PASS — 0 live, 1 quoted; widened form present exactly once |
| Version / Status / Change fields | Read header lines 4-30 and the `Change:` opening | PASS — `Version: 2.17.1`; `Status: In Review … cycle 2 of 5`; `Change:` opens with the v2.17.1 entry, v2.17.0 entry retained in full below it |
| Scenario numbering across §8 | Listed every `# Scenario` and block header between lines 2400-2600 | FLAG — FR-131 block runs 1,2,3,4,5,**8**,9 → **ISS-01 (Low)**; FR-130 (1-3), FR-132 (1-7), FR-133 (1-2) all contiguous |
| "Scenario 8" vs "Scenarios 8 and 9" citations | Substring counts + read each site | FLAG — 5 sites cite "Scenario 8", 2 cite the pair → **ISS-02 (Low)** |
| Does the new Gherkin give the tester something executable? | Read Scenarios 8 and 9 step by step against clause (e) | PASS with a deduction — 5 of 7 Scenario-8 steps and all 4 Scenario-9 steps are assertable; 2 Scenario-8 steps restate rules → **ISS-03 (Low)** |
| Applier checklist items 3-7 | Ran each grep | PASS on 3, 4, 7; item 5 ("presented for approver confirmation" = 0) and item 6 ("Grade-8" = 0) each return 1, and **both survivors are benign** — a quoted-and-corrected reference and dated narration respectively (see ISS-04 and §4.1 ISS-04 row). The checklist was over-strict; the document is correct |

---

## 5. Routing instruction (to the owning role)

**PASS — the product-owner (Priya Raghunathan) sets Doc 02 `Status: Approved` and the SOP
advances.** No new version is required. Cycle 2 of 5; the cap was not approached.

**All seven remaining issues are Low and non-blocking.** Handling:

- **ISS-01** (scenario-number gap) and **ISS-02** (Scenario 9 under-cited) are worth a look **now
  rather than later**, because Doc 07 v2.7.0 / Doc 08 v2.10.0 are being cut against these labels
  this session. **ISS-02 is the one that matters** — the FR-131 Source annotation is the tester's
  natural path and it currently points at Scenario 8 alone, omitting the absence test. A one-word
  edit closes it. **ISS-01 should NOT be fixed by renumbering** once Doc 07/08 have referenced
  Scenarios 8 and 9; a one-line comment is the safe fix at that point.
- **ISS-03** folds into whichever version next touches §8.
- **ISS-04** is record-only; no fix required.
- **ISS-05 / ISS-06 / ISS-07** continue to ride with the next version that touches FR-064, the
  changelog narration, and §13 (h) respectively — unchanged routing from cycle 1.

**Note for the project-manager.** The cycle-1 → cycle-2 loop worked exactly as designed and is worth
recording as a clean instance: a neutral reviewer FAILed the version on three Mediums, the **owning
role** (not the reviewer) reworked it as an anchored spec, the applier applied it mechanically, and
the same reviewer verified the closures against the text. **The byte-identical reconstruction from
the committed baseline through both specs is the strongest transcription evidence produced in this
project so far** — I recommend it as the standard check for anchored-spec applications, since it
subsumes the residue, duplication, truncation and collateral-edit checks in a single assertion.

**Scope note.** I reviewed **only Doc 02 v2.17.1**, per
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. Other documents blocking in
`node hooks/run_gates.cjs --audit` is expected mid-session; I did not self-appoint for any of them.
**This report makes no Gate-2 finding and signs no merge** — the RTM zero-gap certification and the
merge sign-off are separate acts on separate evidence.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — the verdict is **PASS at cycle 2 of 5**. The cap was not reached and no human
decision is required or recorded here.
