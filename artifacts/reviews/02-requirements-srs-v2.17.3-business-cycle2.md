# Document Review Report — Doc 02 Requirements Specification v2.17.3 — business, cycle 2

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **reviewer-qa**, the PM-assigned neutral reviewer — **NOT** the document owner (the
> product-owner owns Doc 02). The reviewer scores and lists issues only; it never edits the
> document. All rework is done by the **owning role** (product-owner, Priya Raghunathan).
>
> **Reviewer assigned BEFORE dispatch**, per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`
> ("Neutral reviewers (recorded BEFORE dispatch)" — Doc 02, business, **reviewer-qa**; excluded:
> product-owner (owner), tester (Doc 08 rows)). I did not self-appoint and I authored no other
> report this session.
>
> **Cycle:** 2 of 5. Predecessor: v2.17.2 **FAIL 92%**, 0C / 0H / **1M** / 9L —
> `artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md` (same reviewer role).
> v2.17.3 is a **PATCH** rework by the product-owner. Rework spec:
> `artifacts/product-owner-2026-09-08T1500-doc02-spec-c2.md` (6 OPs, all targeting Doc 02);
> owner's note: `artifacts/product-owner-2026-09-08T1500-doc02-rework.md`.
>
> **Issue numbering.** New findings in this cycle are **ISS-C2-01..ISS-C2-03** (repo precedent:
> Doc 06 v2.7.0). The seven carried Lows keep their **cycle-1 ids ISS-04..ISS-10** unchanged, so a
> reader can follow one item across cycles without renumbering.

<!-- MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.17.3
Review mode: business
Reviewer role: reviewer-qa (neutral — product-owner owns Doc 02)
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 10
Cycle: 2 of 5
Verdict: PASS
Assignment record: artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md
```

---

## 1. Summary (BLUF)

**The cycle-1 Medium is closed, properly and at every site I named. The three folded issues
(ISS-01 Medium, ISS-02/ISS-03 Low) are each verified fixed against the document on disk, and the
"no normative change" claim is again proven mechanically rather than asserted — I reconstructed
v2.17.3 byte-for-byte from the committed v2.17.1 baseline plus the two rework specs. PASS at 96%,
0C / 0H / 0M / 10L (three new Lows, seven carried).**

**The whole v2.17.1 → v2.17.3 delta, proven by byte-for-byte reconstruction.** I took the
committed baseline (`git show HEAD:docs/02-requirements-srs.md` — **v2.17.1**), applied the **4
Doc 02 operations** of the v2.17.2 spec and then the **6 operations** of the v2.17.3 spec, each
`FIND` required to match **exactly once** at its step, and compared with the file on disk:

```
Doc 02 ops applied: 10  (4 from the v2.17.2 spec + 6 from the v2.17.3 spec)
each FIND matched exactly once: yes (10/10)
baseline v2.17.1   473,754 bytes
-> reconstructed v2.17.2  480,660 bytes   (matches the cycle-1 figure exactly)
-> reconstructed v2.17.3  492,743 bytes
actual on disk            492,743 bytes
BYTE-IDENTICAL: true
```

That single result discharges the brief's whole verification demand and is stronger than reading a
diff. Because the reconstruction is byte-identical, **everything outside those ten op boundaries is
unchanged from v2.17.1 by construction**, and there are **zero collateral edits** anywhere in the
492,743-byte file and **zero transcription residue** at any of the ten boundaries. I did not stop
there — I also compared the sections directly, by hash:

| Region | HEAD (v2.17.1) lines | disk (v2.17.3) lines | sha256-16 | identical |
|---|---|---|---|---|
| **§4.45 FR-131** (incl. clause (e)) | 1186–1226 | 1309–1349 | `9226d7f6ca46fd53` | **yes** |
| **§4.46 FR-132** (incl. §(b)/(d)/(e)) | 1227–1260 | 1350–1383 | `352f6d5e4b9b9edc` | **yes** |
| **§8** (all Gherkin) | 1401–2805 | 1524–2928 | `d3ebe93bd93db237` | **yes** |
| **§16** (all rows, incl. §16.3/§16.4) | 3186–3474 | 3334–3622 | `841e09241d9fbd4f` | **yes** |
| **whole body §1 → end of §11** | 484–2922 | 607–3045 | `603567f673bc4bd6` | **yes** |
| **§14 → end of document** | 3112–3474 | 3260–3622 | `9083fba7043f1e3e` | **yes** |

`git diff -U0 HEAD` agrees and localises the delta to **five hunks** — two in the header
(`Version:`/`Status:`, then `Change:`), one insert before `## 13.` (the §12 entries), and two in
§13 (the (j) row, the widening note) — **154 insertions, 6 deletions**, the six being the replaced
`FIND` lines. **No BR/FR/NFR/CON/RISK text, no §8 scenario and no §16 row is touched. No ID is
minted, reused or renumbered. The Must count is untouched at 114.** The change entry's central
claim is **verified TRUE**.

**The Medium is closed at all four sites, and I checked each rather than taking the change entry's
word for it.**

| Cycle-1 required fix | State on disk | Verdict |
|---|---|---|
| (a) **Status column** — state the ruling as closed and the application as its own tracked fact | §13 (j) Status now reads "(3) **RULED 2026-09-08** (approver decision 1 + product-owner remedy (a)) — **application routed to the engineer; its status is recorded in Doc 06 §7 and the UT registry, not here**". The string "CLOSED — ruled and applied" is **gone from the live status field** (its only surviving occurrence is the dated v2.17.2 narration, immediately followed by a marked correction). | **fixed** |
| (b) **Body** — recast the present-indicative build claims into the decided posture | The row is split into "**(3) — THE RULING (closed 2026-09-08)**" and "**(3) — THE APPLICATION (routed, not certified here)**". The three claims the cycle-1 report named are now governed by "**The decided remedy is:** the route is flag-gated … the header nav link is not rendered … the route serves a short honesty placeholder …" — the construction the required fix asked for. | **fixed** (one residual sentence → ISS-C2-02, Low) |
| (c) **Doc 06 pin** — pin only once v2.8.0 exists **and** state its status | "**Doc 06 v2.8.0, Status: In Review (the tester's technical review is pending)**". I verified independently: `docs/06-coding-and-ut.md` line 5 is `Version: 2.8.0`, line 6 `Status: In Review`; `artifacts/reviews/` contains reports up to `06-coding-and-ut-v2.7.0-technical-cycle2.md` and **none for v2.8.0**; the gate audit lists Doc 06 v2.8.0 as blocking. The pin now resolves **and** its status claim is true. | **fixed** |
| (d) **Mirror at all sites so all three agree** | Four sites agree: header `Status:` block (lines 19–35), new v2.17.3 `Change:` entry (lines 111–126), marked correction inside the v2.17.2 `Change:` entry (lines 157–163), §13 (j) row and its Status column (line 3235). The header adds an explicit precedence rule for the retained narration: "Where it … reads as asserting that the remedy was **applied**, this block, the v2.17.3 Change entry and §13 (j) govern." | **fixed** |

**The two folded Lows are closed too.** *ISS-02 (H-set drift):* I counted every H-set group in the
file. The bare erroneous set `H-15/H-17/H-18` is now **0 occurrences**; the one surviving
`H-15 / H-17 / H-18` string is the **quotation of the original inside the correction marker** at
line 170 — annotate-don't-delete working exactly as intended. Clause (e)'s carve-out set is stated
as **H-16/H-17/H-18** at lines 30, 127, 167, 3173, 3240, matching FR-131 clause (e)'s own
enumeration verbatim (line 1344: "addressed by FR-132 §(d) and by §16.4 H-16/H-17/H-18"), with
**H-15 cited additionally** for the one-person-one-vote point; the union with a gloss is used at
lines 3171 and 3250, which was the alternative the cycle-1 fix expressly allowed. **H-16 is added
to the (j)(3) evidence list** with an accurate paraphrase — I checked §16.4 H-16, which records
`subject_id_hash` and `phone_hash` as derived identity data that "EXIST in the v1 operator
database", so "cannot be traced back to you" is indeed not true of Trumocracy's own records.
*ISS-03 (§12 continuity):* entries now exist for **both v2.17.2 (line 3171) and v2.17.3 (line
3173)**; the series no longer stops behind the header.

**Every new outward citation resolves.** I checked each against its source, not against the owner's
summary: Doc 06 v2.8.0 exists and is In Review; **UT-0890 is registered in Doc 06's UT registry
with 15 assertions** (line 797) and in §7; the decision record's **§5.6 does contain exactly 15
numbered assertions**, so "the 15-assertion guard specified at that record §5.5–§5.6" is exact;
§16.4 **H-15** (one-person-one-vote not guaranteed), **H-17** (the vendor does see the document),
**H-18** (`subject_id_hash` retained derived identifier) all say what the row claims; FR-131 clause
(e)'s carve-out enumeration matches; approver decision 1 is at
`DECISIONS-2026-09-08-VERIFY-PAGE.md` §1 and remedy (a) at §5.

**The judgement calls are right and worth recording.** Three in particular. (i) The owner did
**not** import the engineer's verifiable facts — `UT-0890`, the 625 → 640 test count — into Doc 02,
even though they would have made the row look stronger; importing them would have repeated the
defect in a politer register, and the owner's note says so in terms. (ii) The correction to the
dated v2.17.2 entry **quotes the erroneous H-set verbatim** inside the marker rather than silently
swapping it, so the record of what was authored survives. (iii) The fix is generalised into a
stated convention — *a document records the decision it owns and routes the application; only the
applying role's document reports that the application happened* — written into the document at four
sites rather than left as a one-off wording patch. That is the durable form of the fix, not the
cosmetic one.

**Ten Lows — three new, seven carried.** The three new ones are all in the same small family
(residual present-indicative narration and one citation that outruns its source); none is close to
Medium and I explain below why for each. The seven carried (cycle-1 ISS-04..ISS-10) are
re-confirmed present, correctly disclosed in the header, and none is raised above Low; byte-identity
proves none of their sites moved. I verified they did not **worsen**: the apparent increases in
`Scenario 8` (6 → 7) and `Grade-8` (2 → 3) are both the **new Status block's disclosure text**
naming the defects (lines 39 and 40), not new defect sites.

**Verdict: PASS at 96%, 0C / 0H / 0M / 10L.** The product-owner should set `Status: Approved` on
**v2.17.3**. **No bump to v2.17.4 is required** — the brief asked me to rule on this: the pass bar
is met on both limbs, and Low issues never force a version.

---

## 2. Pass-bar check

- Score >= 95%? **Yes** (`96%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — both limbs met.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0-100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 97 | 19.40 | Up from 96. The rework does not merely correct a sentence — it names the failure mode ("a **build-state assertion**"), states the general convention that prevents it, and applies that convention at four sites. The §13 (j) row is now legible in one pass: what was **ruled**, by whom, on what date; what was **decided** as the remedy; and where the **application** is reported. The Status block explains why a PATCH is the right increment instead of asserting it. Small deduction: one sentence in the (j) body (ISS-C2-02) sits outside the "The decided remedy is:" scope and reverts to bare present indicative, which slightly blurs decision and build inside the very paragraph the version exists to un-blur. |
| B2 Completeness | 15 | 96 | 14.40 | Up from 92. All three folded issues are closed with nothing left owed: §12 now carries entries for **both** v2.17.2 and v2.17.3 (ISS-03 closed, the continuity break repaired in both directions); the row's supporting artifact **exists** and its status is stated, so the record is self-supporting for the first time in this lineage; the TC owed to the tester and the guard's specification pointer both survive the rewrite. Deduction: ISS-C2-01 — the one remaining "applied by the engineer" phrase in the retained v2.17.2 entry (line 152) carries no inline marker and relies on a precedence clause 100 lines above it. |
| B3 Traceability & IDs | 20 | 97 | 19.40 | Up from 88 — the two deductions that drove the cycle-1 score are both gone. **No ID minted, reused or renumbered** and **Must count unchanged at 114**, proven by byte-identity of §4, §8, §11 and §16 rather than asserted. The **Doc 06 v2.8.0 pin now resolves** and states its status, which I verified against the document and against the absence of any v2.8.0 review report. The **H-set drift is closed at every occurrence** (bare `H-15/H-17/H-18` now 0; clause (e)'s set quoted correctly at five sites; the erroneous original preserved as a labelled quotation), and **H-16 is added** to the evidence list with a paraphrase that matches §16.4 H-16 exactly. Every outward citation I re-checked resolves and says what is claimed. Deduction: ISS-C2-03 — the header's cycle-2 reviewer-assignment claim outruns the source it cites in the same sentence. |
| B4 Correctness & consistency | 15 | 96 | 14.40 | Up from 86. The contradiction that produced the Medium — a governed document asserting a build state its own author's session note recorded as pending — is gone. All four sites now agree, and where dated narration cannot agree without being rewritten, the document states an **explicit precedence rule** instead of leaving the reader to guess. Internal consistency with the owner's own note is restored: the note says "Doc 06 v2.8.0, Status In Review, tester's review pending" and the document says the same. Every factual claim in the changed text checks out against its primary source. Deduction: ISS-C2-02. |
| B5 Testability | 15 | 95 | 14.25 | Up from 94, marginally. Not a testability-bearing change: no acceptance criterion, scenario or MoSCoW value is touched (proven — §8 is byte-identical). The row does its testability job slightly better than before: the guard is now described by its **size and specification pointer** ("the 15-assertion guard specified at that record §5.5–§5.6", which I verified is exactly 15 numbered assertions) and the **TC row is still recorded as owed to the tester** rather than quietly dropped. Deduction: carried ISS-06 (two Scenario-8 steps restate rules rather than assert outcomes) remains open and unaddressed, as disclosed. |
| B6 Convention compliance | 15 | 96 | 14.40 | Held at 96. ISO-8601 dates throughout the delta. **PATCH bump correct** on the document's own declared convention and on my predecessor's routing. **Annotate-don't-delete honoured rigorously** — the reconstruction proves **zero deletions of prior text**: the prior `Status:` is retained verbatim under an explicit label (now two nested levels, each labelled), the v2.17.2 `Change:` entry is retained and annotated rather than rewritten, and even the **erroneous H-set is preserved as a quotation** inside its own correction. RFC 2119 usage in the delta is narration of a ruling, correctly cast. The §13 Owner column names roles rather than persons — as at cycle 1, **not raised**: it is the pre-existing pattern of every row in this routing table, and the table holds routing items, not requirements. Deduction: carried ISS-07 (capitalised "Grade-8") still open at its single live site (line 207), verified not worsened. |
| **Total** | **100** | — | **96.25% = 96%** | — |

---

## 4. Issues (every issue severity-classified and located)

> **No Critical, no High, no Medium. Ten Lows: three new (ISS-C2-01..03) and seven carried
> (ISS-04..ISS-10 of the cycle-1 report), which per the dispatch are recorded, not re-argued, and
> none of which is raised above Low. No Low blocks the pass bar; all are routed for folding at the
> next version that touches their site.**

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-C2-01** | Low | B2 / B4 | Header `Change:` block, retained **v2.17.2** entry, **line 152** — "…subject to §13 tracked deferral (b)); **applied by the engineer** with a UT guard specified at §5.5–§5.6." | **One "applied by the engineer" phrase in the retained v2.17.2 narration carries no inline correction marker.** The marked correction the owner appended (lines 157–163) is attached to the *later* sentence — "(3) the `/verify` page copy **CLOSED — ruled and applied 2026-09-08**" — and says nothing about this earlier phrase five lines above it. A reader working down the entry meets the uncorrected claim first. **Low, not Medium, for three independent reasons:** (i) it is **dated historical narration**, not a live status field — exactly the class this document has consistently graded Low (carried ISS-07, ISS-09); (ii) the header **explicitly governs it**: "Where it, or the v2.17.2 Change entry, reads as asserting that the remedy was **applied**, this block, the v2.17.3 Change entry and §13 (j) govern" (lines 44–46) — the owner foresaw this and stated a precedence rule rather than leaving it ambiguous; (iii) every live site reads correctly, so nothing a downstream reader is directed to consult is wrong. | On the next version that touches the header, extend the existing marked correction to name this phrase too, or move the marker to the head of the v2.17.2 entry so it governs the whole entry rather than one sentence. Non-blocking. |
| **ISS-C2-02** | Low | B1 / B4 | §13 (j) row, line 3235, inside the "**(3) — THE RULING**" paragraph — "No string is deleted — the design copy is retained for the enrolment sprint and **renders in `dev` only**." | **One sentence in the (j) body reverts to bare present indicative about build behaviour.** The three claims the cycle-1 report named are correctly subordinated to "**The decided remedy is:**", but this sentence follows a full stop and so falls outside that scope, describing what the codebase does rather than what was decided. **Low, not Medium:** it was present in v2.17.2 and the cycle-1 report did not name it, so it is not a failure to apply the required fix; read in context it plainly continues the remedy's description (the remedy is one that deletes no string); and unlike the cycle-1 defect it is **not in a Status field**, makes no dated completion claim, and pins no artifact. I record it because it is the same family as the closed Medium and a reader auditing the ruling/application split will notice it. | On the next version that touches §13 (j), pull it inside the remedy scope — e.g. "…and the remedy **deletes no string**: the design copy is retained for the enrolment sprint and is to render in `dev` only." Non-blocking. |
| **ISS-C2-03** | Low | B3 | Header `Status:` block, **lines 9–11** — "reviewer-qa, neutral, PM-assigned **before dispatch** per artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md; **the same neutral reviewer is assigned for cycle 2**" | **The cycle-2 assignment claim outruns the source cited in the same sentence.** The assignment record's "Neutral reviewers (recorded BEFORE dispatch)" table scopes its Doc 02 row to "**Doc 02 v2.17.2**"; it records no cycle-2 assignment. **The claim is true in fact** — I am that reviewer, dispatched for cycle 2 — but a reader following the citation to verify it will not find it there, and the PM's assignment is the PM's fact to record, not the owner's. **Low:** it is accurate, harmless, and self-correcting the moment the PM records the cycle-2 outcome in the same file; it corrupts no requirement, ID or trace chain. I raise it only because it is the mildest possible echo of the convention this very version adopts — a document recording a fact that belongs to another role's artifact. | Either attribute it ("the project-manager has assigned the same neutral reviewer for cycle 2") or drop the clause; **alternatively the project-manager** extends the assignment record's Doc 02 row to name the cycle-2 reviewer, which makes the citation resolve. Routed to the owner (wording) or the PM (record) — either closes it. Non-blocking. |
| ISS-04 | Low | B3 | §8, FR-131 Gherkin block — scenarios numbered 1,2,3,4,5,**8**,9 — **carried**; cycle-1 ISS-04 | **Confirmed still present and unchanged** — §8 is byte-identical to HEAD (`d3ebe93bd93db237`). Correctly disclosed in the new `Status:` block. Per the standing routing, **do not renumber** now that Doc 07/08 reference these labels. | Unchanged: a one-line block comment noting numbering continues at 8 and that 6/7 were never used. Fold into the next version that touches §8. |
| ISS-05 | Low | B2 / B4 | Three pointers cite "Scenario 8" alone where Scenario 9 also applies — **carried**; cycle-1 ISS-05 | **Confirmed still present and unchanged.** Counts: `Scenario 8` 6 to 7 and `Scenarios 8 and 9` 1 to 1, and I located the seventh occurrence — it is **line 39, the new Status block disclosing this very Low**, not a new pointer site. Still the carried Low that matters most: the FR-131 Source annotation is the tester's natural path and Scenario 9 is the absence test. | Unchanged: "Scenario 8" to "Scenarios 8 and 9" at the three pointer sites, prioritising the FR-131 Source annotation. **Remains the one worth doing first.** |
| ISS-06 | Low | B5 | §8, Scenario 8, last two steps — **carried**; cycle-1 ISS-06 | **Confirmed still present and unchanged** (§8 byte-identical). Two steps restate rules rather than assert observable outcomes. | Unchanged: move to a `# Note:` comment or recast as assertions. Fold into the next version touching §8. |
| ISS-07 | Low (record-only) | B6 | Header `Change:` block, **v2.17.0** entry, line 207 — one capitalised "Grade-8" — **carried**; cycle-1 ISS-07 | **Confirmed unchanged, and verified not worsened:** `Grade-8` counts 2 to 3, and the third occurrence is **line 40, the new Status block naming this Low in quotation marks** — a description of the defect, not a new instance of the miscasing. The single live site is unchanged at line 207. Dated historical narration is not rewritten in this document. | **No fix required.** Record-only, as before. |
| ISS-08 | Low | B4 | §4.6 FR-064, the "v2 (deferred):" clause — **carried**; cycle-1 ISS-08 | **Confirmed still present and unchanged** — §4 is byte-identical to HEAD (`99e272c717bed2a3`); the `Status:` block accurately states this version does not touch §4.6. | Unchanged: add a v1 cross-reference to FR-023/FR-068 on the next version that touches FR-064. |
| ISS-09 | Low | B2 / B4 | Header `Change:` block, **v2.16.0** entry — "(not a defect in v1, which holds no vote)" (1 occurrence, unchanged) — **carried**; cycle-1 ISS-09 | **Confirmed still present and unchanged.** Dated changelog narration; contradicts no governing text. | Unchanged: optional cleanup on a version that rewrites the changelog narration. |
| ISS-10 | Low | B4 | §13 tracked routing **(h)** — the "v1 does hold a vote" wording (1 occurrence, unchanged) — **carried**; cycle-1 ISS-10 | **Confirmed still present and unchanged.** Worth restating precisely, as at cycle 1: v2.17.3 **does** touch §13, but its two op boundaries there are the **(j) row** and the **widening note** only — row (h) lies outside both, and byte-identity proves it did not move. The `Status:` block's claim to that effect is accurate. | Unchanged: qualify to "so v1's **design** does hold a vote (the ballot layer itself, tracked separately at §13 (g))". |

---

### 4.1 Independent verification performed

| Property | Method | Result |
|---|---|---|
| **All 10 ops applied exactly; zero collateral edits; zero residue** | Reconstructed v2.17.3 from `git show HEAD:docs/02-requirements-srs.md` (v2.17.1) by applying the 4 Doc 02 ops of `artifacts/product-owner-2026-09-08T1000-doc02-spec.md` then the 6 ops of `artifacts/product-owner-2026-09-08T1500-doc02-spec-c2.md`, each `FIND` required to match **exactly once**, then compared with the file on disk | **BYTE-IDENTICAL** — 492,743 bytes both sides; 10/10 FINDs matched exactly once; the intermediate v2.17.2 reconstruction hit **480,660 bytes**, reproducing the cycle-1 figure exactly |
| **"No normative meaning changed"** — the change entry's central claim | Direct section hashing, HEAD vs disk (table in §1), **plus** byte-identity | **CLAIM VERIFIED — TRUE.** FR-131, FR-132, §8, §16, the whole body §1 to §11 and §14 to end are byte-identical |
| Delta is confined to header + §12 + §13 | `git diff -U0 HEAD` hunk headers: `@@ -5,2 +5,58 @@`, `@@ -49,2 +105,69 @@`, `@@ -3047,0 +3171,4 @@`, `@@ -3104 +3231 @@`, `@@ -3108 +3235,22 @@`; `--stat` = 154 insertions, 6 deletions | PASS — five hunks, all inside the six declared sites |
| No BR/FR/NFR/CON/RISK/DES/ADR/SCR/US/TC/UT id minted, reused or renumbered; Must count 114 | Byte-identity of §4, §8, §11 and §16 (every ID-bearing section) | PASS |
| Transcription residue | `FIND:` 0; `REPLACE WITH:` 0; conflict markers 0; three-backtick fence lines **18** (even, balanced, unchanged from v2.17.1) | PASS |
| **ISS-01 (Medium) site (a) — Status column** | Read §13 (j) Status cell, line 3235 | **CLOSED** — reads "(3) **RULED 2026-09-08** … **application routed to the engineer; its status is recorded in Doc 06 §7 and the UT registry, not here**"; "CLOSED — ruled and applied" no longer appears in any live status field |
| **ISS-01 site (b) — body recast** | Read the (j) body; located the "**THE RULING**" / "**THE APPLICATION**" split and the "**The decided remedy is:**" construction | **CLOSED** — all three named claims subordinated; one residual sentence to ISS-C2-02 (Low) |
| **ISS-01 site (c) — Doc 06 pin** | `docs/06-coding-and-ut.md` header (`Version: 2.8.0`, `Status: In Review`); `artifacts/reviews/` contains 06-coding reports up to **v2.7.0** and none for v2.8.0; the gate audit lists Doc 06 v2.8.0 as blocking | **CLOSED** — the pin resolves **and** its stated status ("In Review, the tester's technical review is pending") is independently true |
| **ISS-01 site (d) — all sites agree** | Compared header `Status:` (19-35), v2.17.3 `Change:` (111-126), the marked correction in the v2.17.2 `Change:` (157-163) and §13 (j) (3235) | **CLOSED** — four sites agree; a precedence rule (44-46) governs the retained narration. One phrase not inline-marked to ISS-C2-01 (Low) |
| **ISS-02 (Low) — H-set citations** | Counted every H-set group in the file: bare `H-15/H-17/H-18` 0; `H-16/H-17/H-18` at lines 30, 127, 167, 3173, 3240; union `H-15/H-16/H-17/H-18` (an expressly allowed alternative) at 3171, 3250; the single `H-15 / H-17 / H-18` at line 170 is the **quoted original inside the correction marker**. Compared against FR-131 clause (e)'s own enumeration at line 1344 | **CLOSED** — matches clause (e) verbatim; **H-16 added** to the (j)(3) evidence list and its paraphrase checked against §16.4 H-16 |
| **ISS-03 (Low) — §12 continuity** | Read §12's tail: **v2.17.2 entry at line 3171**, **v2.17.3 entry at line 3173**, both before `## 13.` | **CLOSED** — the series now reaches the header version |
| Every new outward citation resolves and says what is claimed | Doc 06 header + §7 + UT registry (UT-0890, line 797, **15 assertions**); `DECISIONS-2026-09-08-VERIFY-PAGE.md` §1, §5, §5.5, **§5.6 counted = exactly 15 numbered assertions**; §16.4 **H-15 / H-16 / H-17 / H-18** row texts; FR-131 clause (e) carve-out enumeration | PASS on all — including the precise "15-assertion" claim |
| Carried Lows still present, unchanged, correctly disclosed | Byte-identity (all seven sites lie outside the ten op boundaries) plus targeted counts **with every increase traced**: `Scenario 8` 6 to 7 (the 7th is line 39, disclosure text), `Grade-8` 2 to 3 (the 3rd is line 40, disclosure text), `Scenarios 8 and 9` 1 to 1, `v2 (deferred):` 1 to 1, the v2.16.0 echo 1 to 1, §13 (h) wording 1 to 1 | PASS — all seven carried, none worsened; the header's disclosure is accurate |
| Header parses for the gate; the nested retained "Approved" cannot spoof it | `node hooks/run_gates.cjs --audit` identified the document as **v2.17.3** (`hooks/check_gates.py::doc_current_version` takes the **first** `Version:` in the first 40 lines, line 5 = `2.17.3`; `Status:` is never parsed) | PASS — no gate hazard from the now two-level nested `Status:` block |
| Gate audit identifies this version, and names the other blocker as not mine | `node hooks/run_gates.cjs --audit` exit **0**; `BLOCK 02-requirements-srs.md v2.17.3 (business) - no report for this version`; `BLOCK 06-coding-and-ut.md v2.8.0 (technical)`; the eight other gated docs **PASS**; "Documents blocking the review loop: 2" | PASS — see the Scope note in §5; Doc 06 is the **tester's** assignment and I did not self-appoint |
| The recorded remedy is genuinely reversible (the reversibility principle) | The row records a feature flag with `dev: true, staging: false, prod: false` and a `removeBy`; reversal is a flag flip | PASS **as recorded** — I make no finding on the implementation |

### 4.2 On the moving target, and what I did not review

The cycle-1 report recorded a repository that changed under the reviewer mid-review. That problem
did not recur: **Doc 02 was static throughout this review** (byte-identical reconstruction at open
and the same 492,743-byte file at close), and the one cross-document fact the row depends on —
Doc 06 v2.8.0, In Review — was already settled before I began.

I did **not** review the code, the flag, the guard, `hooks/check_gates.py` or Doc 06. Doc 06 v2.8.0
and the code drop are assigned to the **tester** (technical mode) by the same assignment record. The
Doc 06 facts above are cited only as evidence about **Doc 02's claims** and are not a code or Doc 06
review. I make no finding on whether the engineer's implementation is correct, and **this report
signs no merge and makes no Gate-2 finding**.

**One observation passed on, deliberately not scored.** While verifying Doc 02's H-set correction I
noticed that **Doc 06 v2.8.0's UT-0890 registry row (line 797) cites "§16.4 H-15/H-17/H-18"** — the
same citation drift Doc 02 has just corrected, and it likewise omits H-16, the provision most
directly answering the retired string "cannot be traced back to you" that UT-0890 asserts is absent
from the DOM. **This is not a Doc 02 issue and I have not scored it here.** It is routed to the
**project-manager** for the **tester**, who holds the Doc 06 v2.8.0 technical review. Recording it
rather than acting on it is the point: I am not Doc 06's reviewer.

---

## 5. Routing instruction (to the owning role)

**PASS — the product-owner (Priya Raghunathan) sets `Status: Approved` on v2.17.3 and the SOP
advances.** The cycle-2 loop closes here.

**Explicit answer to the dispatch's question:** the brief asked me to say, *on a Medium FAIL*,
whether the owner should bump to v2.17.4. There is **no Medium and no FAIL**, so **no bump is
required or warranted**. v2.17.3 is the final version of this lineage; the ten Lows ride with the
sections they touch, as routed below. Changing the version number now would only cost the document
another review cycle for no correctness gain.

**Carry forward (ten Lows, none blocking):**

- **ISS-C2-01** — extend the marked correction in the v2.17.2 `Change:` entry to cover the
  "applied by the engineer" phrase at line 152, or move the marker to govern the whole entry.
- **ISS-C2-02** — pull "No string is deleted … renders in `dev` only" inside the
  "The decided remedy is:" scope, on the next version that touches §13 (j).
- **ISS-C2-03** — attribute or drop "the same neutral reviewer is assigned for cycle 2";
  **alternatively the project-manager** extends the assignment record's Doc 02 row to name the
  cycle-2 reviewer, which makes the citation resolve and closes it without touching Doc 02.
- **ISS-04 / ISS-05 / ISS-06** — ride with the next version that touches §8. **ISS-05 remains the
  one worth doing first** (the FR-131 Source annotation is the tester's natural path and Scenario 9
  is the absence test).
- **ISS-07** — record-only; no fix required.
- **ISS-08 / ISS-09 / ISS-10** — ride with FR-064, the changelog narration and §13 (h)
  respectively.

The header's disclosure of the carried set is accurate and should be carried forward again in the
next version's `Status:` block, with ISS-C2-01..03 added to it.

**Note for the project-manager.** Three observations, offered as evidence rather than opinion.
(1) The **byte-identical reconstruction worked again**, this time across a two-version, ten-op chain
from the committed baseline — the applier discipline is holding, and this remains the cheapest
strong evidence available for anchored-spec application; it is what let me verify the "no normative
change" claim in one command instead of reading a 154-line diff and hoping.
(2) The cycle-1 `AL-CANDIDATE` is **strengthened, not weakened, by this PASS**: the owner adopted
the convention *a document records the decision it owns and routes the application* and wrote it
into the document, and the same defect shape has now been seen three times (Doc 02 v2.17.2's
Medium; Doc 06 v2.7.0's ISS-C2-01/ISS-C2-02 stale pins; and the Doc 06 UT-0890 citation noted at
§4.2). The owner's proposed wording — *a role's document may record only facts that role can verify
from the artifacts it owns; anything else is routed with a named owner and a named reporting
artifact* — is the right shape; adopting it is a human decision, not mine and not the PM's.
(3) **ISS-C2-03 is cheapest to close on the PM's side**, by recording cycle-2 reviewer assignments
in the assignment record as they are made — which also strengthens the "assigned BEFORE dispatch"
invariant that record exists to protect.

**Scope note.** I reviewed **only Doc 02 v2.17.3**, per
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`, which named me before dispatch. The
audit shows **two** blocking documents; the second, **Doc 06 v2.8.0 (technical)**, is assigned to
the **tester** and I neither reviewed it nor authored any report for it. **This report makes no
Gate-2 finding and signs no merge** — the RTM zero-gap certification and the merge sign-off are
separate acts on separate evidence, and the audit still reports "Gate 2 traceability criterion: NOT
MET" (138 Must rows, 16 COMPLETE, 122 OPEN).

## 6. Human decision at the cap (ESCALATED only)

Not applicable — the verdict is **PASS at cycle 2 of 5**. The cap was not reached and no human
decision is required or recorded here.
