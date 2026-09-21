# reviewer-qa session note — 2026-09-21T1200 — Doc 08 RTM v2.16.0, review cycle 4 of 5

```
Role:       reviewer-qa (Rafael Duarte) — NEUTRAL REVIEWER (document-review skill, technical mode)
            and independent merge signer. I do NOT own Doc 08; the tester (Ji-woo Park) does.
Session:    Independent review of docs/08-traceability-matrix.md v2.16.0 (rework cycle 4 of 5)
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md (recorded before dispatch)
Verdict:    PASS — Score 98%, 0 Critical / 0 High / 0 Medium / 2 Low. The loop CLOSES at cycle 4;
            one cycle of the budget is left unspent and the cap is not reached.
Wrote:      artifacts/reviews/08-traceability-matrix-v2.16.0-technical-cycle4.md
            this note
Did NOT:    edit any document, any product code, any test, or artifacts/memory-index.json
            (pre-registered by the PM). I wrote nothing to docs/ — I am the independent check.
```

## 1. What I did

Verified the three cycle-3 issues as **all FIXED**, re-derived every invariant from the instrument
rather than the prose, re-ran the suites and the security scan, diffed the live file against the
PM's v2.15.0 backup, and re-stated merge sign-off on the three closures.

## 2. The finding that mattered — ISS-C3-01 is FIXED, and I proved the fix rather than read it

The sweep paragraph had failed three consecutive versions because it published a count **about the
file it lived in**: writing the classification changed what the classification measured. v2.16.0
replaces the **device**, not the number, in three separated parts, and I tested each:

1. **THE CLAIM, anchored to a frozen reference.** The document says the v2.14.0 text is
   "reconstructible from `HEAD` `12fe4a6` plus the applied v2.13.0 and v2.14.0 specs". **I ran that
   route** — `git show 12fe4a6:docs/08-traceability-matrix.md` (v2.12.3), then the v2.13.0 spec's
   **43** ops, then the v2.14.0 spec's **17** — **60 operations, each matching exactly once, zero
   failures** — and the result is **byte-identical** to `scratchpad/08.v2140.bak` (`diff -q` clean).
   The published command on it returns **14 lines / 21 occurrences** at lines 19, 709, 712, 716,
   789, 1270, 1314, 1802, 2326, 2329, 2537, 2539, 2541, 2747. **The frozen reference is real and a
   reader can build it from the repo alone.**
2. **The classes now close.** Per-line occurrence counts derived mechanically: (a) 1+3+1+1+6 = **12**
   over 5 lines (the 11 → 12 correction is right); (b) 7/7; (c) 1/1; (d) 1/1. **12+7+1+1 = 21 over
   14 lines.** I read all fourteen and confirmed each class assignment.
3. **THE LIVE FIGURE is an observation, is exact, and is a fixed point.** Live → **23 lines / 41
   occurrences**, precisely as published; the sentence carrying it (lines 847–849) is **not** among
   the 23 hit lines and contains none of the three search strings.
4. **THE INVARIANT holds** — I classified all 23 live hits myself: 12 quotations inside corrections,
   2 published commands, 7 dated records, 1 transition *from* side, 1 FR-132 false positive.
   **Zero live stale figures.**

## 3. The two Lows fixed, and the two new Lows raised

- **ISS-C3-02 FIXED** — the v2.15.0 record now enumerates **its own six sites** (matching exactly
  the six-region set I established by diff at cycle 3) and the absolute is narrowed to what is true.
- **ISS-C3-03 FIXED** — the Doc 07 pin reads **v2.12.0 APPROVED, PASS 97%, 0C/0H/0M**, checked
  against both the report metadata and Doc 07's own header. The pin line stays paren-balanced
  (10/10 raw, 9/9 stripped, depth 0, min 0, ending `) ·`) — ISS-C2-01's repair survived the edit.
- **ISS-C4-01 (Low, new)** — line **65** lost its 15-space continuation indent inside the header
  metadata fence; it is the **only** such line, and the origin is OP 3's `REPLACE WITH` block in the
  tester's spec, faithfully transcribed. Cosmetic; no figure, marker or ruling affected.
- **ISS-C4-02 (Low, new)** — the spec tail's item 3, headed "all run against the post-application
  text, none predicted", publishes `grep -c "Nothing in this version touches a row, a"` → **1**; the
  true value is **2** (lines 47 and 67). Both are quotations inside corrections, so **no document
  claim is wrong**; the author anticipated their own OP 3's quoting site but not OP 2's. Raised
  against the **spec artifact**, not the document — same class as cycle 2's ISS-C2-04.

## 4. Invariants re-derived (not read)

§3.1 **114 / 19 / 95** · pre-v2.0.0 block **54 / 14 / 40** · v2.0.0+ block **60 / 5 / 55** · §3.2
**24 / 0 / 24** · §3.3 **23 / 5 / 18** · both-marker rows **0** · Must total **138 / 19 / 119** ·
non-Must **5 / 18** · combined **24 / 137**. `--audit`: derived **138/19/119** vs published §9
**19/119** — **the two independent signals AGREE**. Diff vs `08.v2150.bak`: **exactly four hunks**
(`@@ -2,8 +2,58` · `@@ -12,8 +62,23` · `@@ -615,7 +680,7` · `@@ -758,6 +823,49`), **113 + / 5 -**,
everything from live line **872** to EOF byte-identical. Marker-row column histogram identical
before and after; FR-036 (L2427), FR-037 (L2428) and FR-085 (L2479) each **8 columns / one ✅**.
**0** CRLF · **0** trailing whitespace · **0** duplicated adjacent lines · no FIND/REPLACE or
conflict marker · fences **2**, balanced.

## 5. Suites, security and reversibility

`npm test` **739 / 739, exit 0** (contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 ·
web 138). `npm run lint:deps` clean, 7 workspaces, layering OK. `npm audit` **11** dependency-tree
findings (1 critical / 4 high / 5 moderate / 1 low) — **unchanged, none introduced**;
`package-lock.json` unmodified and this version touches **no code**. `ELECTIONS` `prod: false` and
`ENROLMENT_UI` `{dev: true, staging: false, prod: false}` — **the drop still ships dark**. Rollback
is a four-hunk document revert restoring v2.15.0 exactly.

## 6. Merge sign-off and Gate-2 readiness

**MERGE SIGNED for the three closures — FR-036, FR-037 (under rule 4a) and FR-085.** All three rows
are untouched by this version's diff and re-verified 8-column / one-✅; the Doc 07 source they rest
on is now **Approved at v2.12.0**, so the cycle-2 In-Review qualification is spent in the right
direction.

**GATE 2 READINESS: NOT MET, and unrelated to this review.** **119 of 138 Must rows are OPEN**
(13.8% complete). The RTM's zero-gap criterion is a **Gate-2 readiness condition certified by the
project-manager** with `node hooks/run_gates.cjs --gate2`. Doc 08 is an **accurate record of a gate
that is shut**. **I withhold Gate-2 sign-off on that basis and on that basis only.**

## 7. Open items / routing

1. **Tester (owning role):** set `Status: Approved` on Doc 08 v2.16.0 citing this report. Carry
   ISS-C4-01 (line-65 indent) and ISS-C4-02 (spec-tail grep discipline) to the next touch. Also
   still owed at the next synchronised Doc 07/08 touch: `TC-3540` → Pass (obs.) on R-22 evidence,
   and the `TD-RTM-02` denominator recount (521 vs 528).
2. **Engineer (unchanged, standing):** the FR-037 absence-scan `it` (owed hardening under rule 4a),
   the `NOMINATION_ENDORSEMENTS_MIN` value pin and its stale "flagged for ratification" `it` title,
   the `UT-0902` own-property enumeration.
3. **Project-manager:** Doc 07 (v2.12.0) and Doc 08 (v2.16.0) are both now PASSed by review; the
   candidate-selection review loop for this session is closed on both documents.

## 8. IDs touched (reviewed, never edited)

`FR-036` · `FR-037` · `FR-085` (closures signed) · `FR-038` · `FR-039` · `FR-065` · `FR-066` ·
`FR-067` · `FR-081` · `FR-093` · `FR-131` · `FR-132` · `DES-027` · `DES-028` · `DES-094` ·
`TC-3411` · `TC-3476` · `TC-3599` · `TC-3605` · `TC-3614` · `UT-0897` · `UT-0900` · `UT-0901` ·
`UT-0904` · `TD-RTM-02` · `TD-RTM-05` · `US-0132`. **I changed none of them — I am read-only by
design.**
