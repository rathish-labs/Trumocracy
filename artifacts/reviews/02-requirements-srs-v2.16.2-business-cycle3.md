# Document Review Report — Doc 02 Requirements Specification v2.16.2 — business, cycle 3

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **technical-writer**, acting as neutral reviewer — **NOT** the document owner (the
> product-owner owns Doc 02). The reviewer scores and lists issues only; it never edits the
> document. All rework is done by the **owning role** (product-owner) as a new version.
>
> **Cycle numbering note:** continues the v2.16.x lineage. v2.16.0 PASSED at cycle 1 (97%,
> 0C/0H/0M/2L) and v2.16.1 PASSED at cycle 2 (97%, 0C/0H/0M/4L;
> `artifacts/reviews/02-requirements-srs-v2.16.1-business-cycle2.md`). v2.16.2 is **not** a
> rework-from-FAIL cycle — both cycle-2 Lows it fixes (ISS-03, ISS-04) were non-blocking and the
> loop had already closed at PASS. Per the product-owner's own changelog, neither fix was
> *required*; both were made because ISS-03 matches a defect class ("the correction applied one
> location short") that produced two **High**-severity findings elsewhere in this session's
> review round. This report is **cycle 3 of 5**, scoped to **the delta plus a check that the
> delta did not disturb the passed body** — not a full re-derivation of v2.16.0/v2.16.1.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.16.2
Review mode: business
Reviewer role: technical-writer (neutral — product-owner owns Doc 02)
Score: 98%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 3 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 02 v2.16.2 is a **small, honest, and — on independent verification — fully accurate** patch on
top of the already-PASSED v2.16.1. It fixes the two Lows I raised at cycle 2 (ISS-03, ISS-04), and
the changelog is explicit that **neither fix was required to pass** — the pass bar tolerates carried
Lows and v2.16.1 already cleared it at 97%. The stated reason for fixing anyway — "ISS-03 is the
exact defect class that produced two Highs elsewhere in this session's review round ('the correction
applied one location short')" — is not a rhetorical flourish. I independently traced it: **Doc 08
v2.5.3 cycle-1 ISS-01 (High)** — a ruling-sync fix applied at §3.1 that stopped short of its twin at
§7 entry 82 — and **Doc 07 v2.4.3 cycle-1 ISS-01 (High)** — a ruling-correction applied at three
places (plus the TC-3552..3555 heading) that stopped short of TC-3545's own row text — are both,
independently, exactly this pattern, both rated **High** by the reviewer of those documents, and
both are visible in `artifacts/reviews/`. The changelog's claim checks out.

**ISS-03 fixed at both locations, correctly and non-redundantly.** FR-090's §4.25 confirming
annotation and its §8 Gherkin block both now name §13 (i) / Doc 03 §16 Q16. I read FR-090's
normative text directly: it requires only that a competing proposal be *presented with equal
standing* and *voted in the same decision window* — it says nothing about what happens after the
vote. The new note's central claim — "post-vote window resolution is outside this requirement's
stated guarantee and outside what v1 holds, which is why the row closes honestly" — is therefore
literally true, not a stretch, and I found independent corroboration in **Doc 08** (v2.5.3 and
v2.5.4), which reached the identical conclusion by its own route: "Q16... concerns post-vote window
resolution, which FR-090's stated guarantee does not require and this layer does not hold — so all
four completion rules still close and the row stays ✅ COMPLETE, correctly." Two independently
authored documents converge on the same reading of FR-090's scope — that is strong evidence the
claim is right, not merely asserted. The note also correctly forbids the one wrong answer: "The
answer MUST NOT be a window-closing capability," tying this to FR-090's own last Gherkin scenario
("no such capability exists and the attempt is refused"). That connection is a reasonable, DES-104
-grounded generalisation (deprioritising/suppressing a competing proposal pre-vote and closing/
merging a window post-vote are both instances of the single anti-capture absence DES-104 asserts by
test) rather than a literal one-to-one restatement of the tested scenario — a nuance worth naming
but not a defect. The `#`-comment placement inside the `gherkin` fence matches the FR-091/FR-130
convention already confirmed at cycle 2.

**Is this the same treatment ISS-02 received for FR-091? Structurally yes, substantively no — and
the document gets the difference right rather than papering over it.** FR-091's NOTE (unchanged
this cycle) flags an **incomplete build**: one Gherkin scenario is not built and FR-091's RTM row is
OPEN on that clause. FR-090's new NOTE flags a **specification gap on a fully-built requirement**:
"every scenario above is built and passing… What this requirement does NOT specify is the case
where BOTH competing proposals pass," and its §4.25 counterpart states plainly "its RTM row is
COMPLETE." Had the product-owner mechanically copied FR-091's wording onto FR-090, it would have
been wrong — FR-090's Must row is not open on anything. It is not; the two notes are worded to fit
their own facts, and I verified both facts independently.

**ISS-04 fixed exactly as described** — the §13 tracked-routing rows now read (f), (g), (h), (i) in
order, matching both the alphabetical convention and the chronological-of-introduction order.

**ISS-01 (the FR-064 §4.6 cross-reference gap) is correctly carried, not silently dropped** — the
changelog states it plainly and I re-read §4.6's "v2 (deferred):" clause directly: it still does not
cross-reference FR-023/FR-068.

**Did the delta disturb the passed body?** No. I re-read FR-024 (§4.7), FR-090 (§4.25), FR-123
(§4.41 TWO-AXIS NOTE) and §13 (f)/(g)/(h) together with the new material: the FR-090 v2.16.2
annotation addresses a disjoint axis (post-vote multi-winner resolution) from the
counting-vs-participation axis those other annotations settle, and does not reopen, contradict, or
blur any of them. Naming an OPEN item on a row whose RTM status is COMPLETE does not create status
confusion — the note itself states the completeness plainly ("What this requirement guarantees is
built and its RTM row is COMPLETE"), and Doc 08 independently records the identical position. I
found nothing new that is wrong in the added text.

**Verdict: PASS** — 98%, zero Critical/High/Medium, one Low (ISS-01, carried and disclosed). The
product-owner should set `Status: Approved`; the SOP advances.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (`98%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — both rows are all "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | The changelog states, with unusual precision, exactly *why* a non-required fix was made — naming a specific defect class and claiming it produced two High findings elsewhere in the session. I independently traced both (Doc 08 v2.5.3 ISS-01, Doc 07 v2.4.3 ISS-01) and the claim is accurate, not decorative. This is the kind of self-auditing transparency the review-loop principle rewards. |
| B2 Completeness | 15 | 98 | 14.70 | Both declared change sites present and independently verified: FR-090's §4.25 annotation; FR-090's §8 Gherkin NOTE; §13 row reorder. No placeholders. ISS-01 remains the one disclosed, carried gap. |
| B3 Traceability & IDs | 20 | 99 | 19.80 | §13 (i) / Doc 03 §16 Q16 cited identically and correctly at both new FR-090 locations; §13 table order now (f),(g),(h),(i) — alphabetical and chronological. Cross-checked against Doc 03 §16 Q16 and Doc 08's independent FR-090 revisit-flag treatment — all three agree. No ID minted or misused. |
| B4 Correctness & consistency | 15 | 97 | 14.55 | FR-090's normative text read directly and confirmed to say nothing about post-vote resolution — the note's central claim is literally true, and independently corroborated by Doc 08 v2.5.3/v2.5.4's own (separately authored) reasoning. Swept for contradiction against FR-024 (§4.7), FR-123 (§4.41 TWO-AXIS NOTE), and §13 (f)/(g)/(h) — none found; the new material sits on a disjoint axis (post-vote multi-winner resolution) from the counting-vs-privacy axis those settle. ISS-01 (FR-064 cross-reference gap) remains open — small, disclosed, carried deduction. |
| B5 Testability | 15 | 98 | 14.70 | The FR-090 Gherkin NOTE is a well-formed `#`-comment block, touches no `Given/When/Then` line, and follows the identical convention already verified at FR-091 and FR-130. It correctly does not claim any scenario is unbuilt (unlike FR-091's NOTE) because none is — every FR-090 scenario is in fact built and passing, which I did not take on faith: it matches Doc 08's independent test-evidence citation (UT-0832/0833/0835/0836/0837, UT-0874..0877, UT-0089, UT-0095). |
| B6 Convention compliance | 15 | 99 | 14.85 | Patch-level semver bump (2.16.1→2.16.2) is correct for a Low-only, non-normative fix per the `document-review` skill's bump rule. `Status: In Review` correct. ISO-8601, RFC 2119 and the named-owner rule undisturbed. §13 table ordering nit (ISS-04) is fixed. |
| **Total** | **100** | — | **98.20% ≈ 98%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | B4 | §4.6 FR-064, the "**v2 (deferred):**" clause (line 643) — carried since `02-requirements-srs-v2.15.0-business-cycle1.md` (ISS-B1) | **Confirmed still present, correctly disclosed, not silently dropped.** The v2.16.2 changelog restates: "ISS-01 (the FR-064 cross-reference gap, carried from v2.15.0) is carried again." I re-read the clause directly: it still does not cross-reference the v1 anti-abuse controls (FR-023 rate-limiting, FR-068 maturation gate) that actually bound "cannot be bypassed by leaving and re-joining within the same session." | Unchanged from prior cycles: add a short v1 cross-reference to FR-023/FR-068 in the "v2 (deferred):" clause. Non-blocking; may be folded into the next version that touches FR-064. |

> **Low** issues do not block the pass bar. There are **no** Critical, High, or Medium issues.

**ISS-03 — CLOSED this cycle (was Low at cycle 2).** FR-090's §4.25 row (line 827) and its §8
Gherkin block (lines 1870–1874) both now carry a pointer to §13 tracked routing (i) / Doc 03 §16
Q16, worded to fit FR-090's actual facts (built, RTM COMPLETE, gap is in what the requirement does
**not** say) rather than copied from FR-091's differently-shaped NOTE. Verified independently — see
§4.1 below.

**ISS-04 — CLOSED this cycle (was Low at cycle 2).** §13's tracked-routing table (lines 2969–2972)
now orders rows (f), (g), (h), (i). Verified by direct read.

### 4.1 Verification performed (what I checked, and how)

| Claim in the version / changelog | How I verified it | Result |
|---|---|---|
| FR-090's §4.25 row now names §13 (i) / Doc 03 §16 Q16 | Read §4.25, line 827, in full | ✅ present: "v2.16.2 — OPEN ITEM NAMED ON THIS ROW: §13 tracked routing (i) / Doc 03 §16 Q16" |
| FR-090's §8 Gherkin block now names §13 (i) / Doc 03 §16 Q16 | Read lines 1863–1874 in full | ✅ present, as a trailing `# NOTE (v2.16.2):` block after both existing scenarios |
| The RTM-closure claim ("post-vote window resolution is outside FR-090's stated guarantee") is accurate | Read FR-090's normative sentence (line 827, pre-annotation text) verbatim: "…every competing proposal MUST be presented with equal standing and voted in the same decision window as the original proposal." No clause addresses post-vote outcomes. | ✅ accurate — the requirement's stated guarantee stops at presentation + same-window voting |
| The RTM-closure claim is independently corroborated, not just self-asserted | Read `docs/08-traceability-matrix.md` lines 51–58 and 122–141: Doc 08 (a document neither of us authored together) reaches the identical conclusion via its own analysis — "Q16... concerns post-vote window resolution, which FR-090's stated guarantee does not require and this layer does not hold — so all four completion rules still close and the row stays ✅ COMPLETE, correctly" | ✅ two independently-authored documents converge on the same reading |
| The note correctly forbids a window-closing capability as the answer to Q16 | Read the FR-090 §4.25 annotation and §8 NOTE; compared against DES-104's capability-absence obligation (already verified at cycle 2 from Doc 03 §10.13.13 point 3 and `Governor.sol`) | ✅ both notes state "MUST NOT... a window-closing capability... deliberate anti-capture control," consistent with DES-104 |
| The tie to FR-090's "last Gherkin scenario" is accurate | Read the FR-090 Gherkin block (lines 1863–1869): the final When/Then is "any actor attempts to suppress, delay, or deprioritise a competing proposal... no such capability exists and the attempt is refused" | ✅ accurate as a generalisation of the same DES-104 anti-capture absence (pre-vote suppression and post-vote window-closing are both instances of "no actor may determine which proposal prevails other than the ballot"), not a literal restatement — a nuance, not a defect |
| Gherkin `#`-comment placement matches house convention | Compared against the FR-091 NOTE (lines 1883–1889, unchanged this cycle) and the FR-130 precedent (confirmed at cycle 2) | ✅ consistent form: `#`-prefixed lines inside the `gherkin` fence, no `Given/When/Then` touched |
| Is FR-090's treatment identical to FR-091's ISS-02 fix, or does it differ in a way that matters | Compared the two NOTEs clause by clause: FR-091's says one scenario "is NOT built" and the RTM row "is OPEN"; FR-090's says "every scenario above is built and passing" and the RTM row "is COMPLETE" | ✅ structurally parallel (same pointer pattern), substantively different (build-completeness gap vs. specification-scope gap) — and the document states the difference correctly rather than conflating the two |
| §13 table now orders (f), (g), (h), (i) | Read lines 2969–2972 directly | ✅ confirmed — matches both alphabetical and chronological-of-introduction order |
| ISS-01 correctly carried, not silently dropped | Re-read §4.6 FR-064's "v2 (deferred):" clause (line 643) in full; compared against the changelog's carry-forward statement (line 29) | ✅ confirmed carried and disclosed |
| Changelog's "two Highs" claim is accurate, not rhetorical | Read `artifacts/reviews/08-traceability-matrix-v2.5.3-technical-cycle1.md` (High: 1, ISS-01: a §3.1 ruling-sync fix that "stopped at §3.1" and left §7 entry 82 stale) and `artifacts/reviews/07-test-cases-suites-v2.4.3-technical-cycle1.md` (High: 1, ISS-01: a ruling correction applied at "the three places" plus the TC-3552..3555 heading, but not to TC-3545's own row text) | ✅ both are genuine, independently-reviewed High findings matching the exact "correction applied one location short" pattern the changelog names |
| The delta does not contradict FR-024 (§4.7), FR-123 (§4.41 TWO-AXIS NOTE), or §13 (f)/(g)/(h) | Re-read all four passages together with the new FR-090 material | ✅ no contradiction — FR-090's v2.16.2 material addresses post-vote multi-winner resolution, a disjoint axis from the verification-vs-privacy-disclosure axis FR-024/FR-123/TWO-AXIS NOTE settle |
| Naming an OPEN item on a COMPLETE row does not create status confusion | Read the exact wording at both new FR-090 locations | ✅ both explicitly state the row is COMPLETE / every scenario is built before naming the open item — no reasonable reader would conclude the row reopened |
| No placeholder / TBD text introduced by the delta | Read both new text blocks in full | ✅ none found |
| Nothing new is wrong in the added text | Read the full delta (changelog block, §4.25 annotation, §8 NOTE, §13 reorder) end to end a second time, independent of the changelog's own self-description | ✅ no new defect found |

---

## 5. Routing instruction (to the owning role)

**PASS — the product-owner sets Doc 02 `Status: Approved` and the SOP advances.** No new version is
required. Cycle 3 of 5 (continuing the v2.16.x lineage); the loop closes here.

**ISS-01 remains Low and non-blocking** — fold it into whichever future Doc 02 version next touches
FR-064 / §4.6, rather than cutting a dedicated version for it alone.

**Downstream consistency (not a defect in this document):** Doc 02's new FR-090 material and Doc
08's independent FR-090 revisit-flag treatment (Doc 08 v2.5.3/v2.5.4) now say the same thing about
Q16 by two separate routes — this is a genuine cross-document consistency strength worth preserving
if either document is revised again.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — verdict is PASS at cycle 3 of 5. The cap was not reached and no human decision is
required or recorded here.
