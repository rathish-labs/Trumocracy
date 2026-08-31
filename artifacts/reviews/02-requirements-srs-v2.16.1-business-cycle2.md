# Document Review Report — Doc 02 Requirements Specification v2.16.1 — business, cycle 2

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **technical-writer**, acting as neutral reviewer — **NOT** the document owner (the
> product-owner owns Doc 02). The reviewer scores and lists issues only; it never edits the
> document. All rework is done by the **owning role** (product-owner) as a new version.
>
> **Cycle numbering note:** v2.16.0 PASSED at cycle 1 (97%, 0C/0H/0M/2L;
> `artifacts/reviews/02-requirements-srs-v2.16.0-business-cycle1.md`) and the loop closed. This is
> **not** a rework-from-FAIL cycle — v2.16.1 records two additions made *after* the v2.16.0 review
> had already begun (so the PASS no longer covers the current text). Per the task's instruction this
> report continues the v2.16.x review lineage as **cycle 2 of 5** rather than resetting to cycle 1,
> and scopes itself to **the delta plus a check that the delta did not disturb the passed body**,
> not a full re-derivation of v2.16.0.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.16.1
Review mode: business
Reviewer role: technical-writer (neutral — product-owner owns Doc 02)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 4
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 02 v2.16.1 is a **patch-level delta** on top of the already-PASSED v2.16.0: (1) a new §13
tracked-routing item **(i)** recording a genuine, previously-unspecified gap — FR-090 requires
competing proposals to be voted in the **same decision window** with equal standing, the ballot
model (`Governor.sol`) gives each proposal an **independent binary ballot**, and DES-104
deliberately exposes **no** window-closing/merging/ranking/primary-selection capability, so two
competing proposals can **both pass** with no rule for what the party then gets; and (2) a fix to
cycle-1's **ISS-02** (Low): §8's FR-091 Gherkin block now carries a `# NOTE` distinguishing the
built order/no-skip scenario from the unwired "per published timelines" scenario, pointing at
§13(f) and cross-referencing §13(h)/Doc 03 §16 Q15.

**Both changes check out.** Item (i) is a real gap, not invented: I independently read
`packages/contracts/src/core/Governor.sol` and `packages/sdk/src/proposals.js` — the Solidity
contract finalizes and executes each proposal entirely independently (no `window`/merge/rank
concept exists in the contract at all), and the SDK's own docstring states outright "there is no
withdraw-someone-else's-proposal, no merge, no accept-as-amendment, no priority flag. The author
never owns the ballot alone" — confirming both DES-104's capability-absence claim and the
resulting gap. It is correctly scoped as a **requirement decision first** (owner: product-owner,
mechanism: architect), correctly flags that the fix **must not** be a quietly-added
window-closing capability (that absence is DES-104's own anti-capture control, asserted by test),
correctly states **"not a v1 defect"** (the proposals/debate layer in this drop stops at
`admitToBallot()` and casts no vote — confirmed in code), and correctly cross-references Doc 03
§16 **Q16**, whose text I read verbatim and which matches item (i) almost word for word, including
the same owner pair (Priya Raghunathan (PO) + Ravi Deshmukh (architect)).

ISS-02's fix is also verified, not merely asserted. I independently grepped `schedule(` across
`packages/` and confirmed its only callers are `packages/sdk/src/predict.js` and the protocol test
suite — **never** `packages/sdk/src/proposals.js`'s `advanceStage()`, which takes no timeline
argument at all — so the NOTE's factual claim is literally true. Placing the caveat as a `#`-prefixed
comment line inside the Gherkin code block is not a house-convention departure: the identical
pattern (a `# NOTE:` comment disambiguating scope, positioned inside the `gherkin` fence) already
exists verbatim at FR-130's block (line 2308), and non-normative `#`-comment lines are used
throughout §8 for OI-17 placeholders. The fix **genuinely resolves** ISS-02's concern — the
co-location the required fix asked for is achieved, even though the note sits after both scenarios
rather than as a same-line parenthetical on scenario two — rather than merely relocating it.

Two things keep this from a clean pass-through of the delta. First, **ISS-01** (Low, the FR-064
§4.6 cross-reference gap) is correctly carried forward and disclosed in the changelog, not
silently dropped — I re-read §4.6's "v2 (deferred):" clause and confirmed it still lacks the
FR-023/FR-068 cross-reference. Second, and new this cycle: **FR-090's own entries — its §4.25
normative row and its §8 Gherkin block — do not point to the new §13(i) gap**, even though the
identical class of gap was just fixed for FR-091 (§13(f)/(h)) via the ISS-02 note. FR-090's
confirming annotation reads "**Built and closed as written**", which is true of FR-090's literal
text (presentation + same-window voting) but, without a pointer, risks a reader concluding the
competing-proposal story is fully closed. This is the same failure mode ISS-02 already named,
just not yet applied to the row that most needs it. I also note a minor cosmetic ordering issue in
the §13 table (item order is (f), (g), (i), (h) — neither alphabetical nor chronological-of-
introduction). Both are Low, non-blocking, and do not touch the substance the delta was reviewed
for.

**Verdict: PASS** — 97%, zero Critical/High/Medium. The product-owner should set
`Status: Approved`; the SOP advances.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (`97%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — both rows are all "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 97 | 19.40 | The changelog states plainly and honestly *why* this version exists at all — "Two additions made AFTER v2.16.0's review had already begun, recorded as their own version rather than folded silently into a reviewed text" — which is exactly the transparency the org's review-loop principle (detector ≠ author; a PASS must not silently diverge) requires. Item (i)'s problem statement ("two competing proposals answering one question can both pass, and no rule says what the party then gets") is concrete and consequential, not abstract. |
| B2 Completeness | 15 | 97 | 14.55 | Both declared change sites present and verified: §13 item (i) row; §8 FR-091 NOTE. No placeholders introduced. Minor completeness gap: item (i)'s own cross-reference is one-directional — §13(i) points at FR-090 and Doc 03 §16 Q16, but neither FR-090's §4.25 row nor its §8 Gherkin block points back (ISS-03). |
| B3 Traceability & IDs | 20 | 97 | 19.40 | DES-104 and Doc 03 §16 Q16 citations both verified accurate against the current Doc 03 v2.11.0 text and against code (Governor.sol, DES-104 §10.13.13 point 3). Owner pair (product-owner + architect) matches Q16's owner pair exactly. No new BR/FR/NFR ID minted — correctly scoped as a routing row, not an amendment. Small deduction for the missing back-reference (ISS-03) and the (f)/(g)/(i)/(h) table-order inconsistency (ISS-04). |
| B4 Correctness & consistency | 15 | 97 | 14.55 | Every factual claim in the delta was checked against the actual artifacts it cites, not taken on faith: `Governor.sol` has no window/merge/rank concept and finalizes each proposal independently (confirms DES-104's capability-absence claim); `schedule()` in `governance.js` is called only by `predict.js` and tests, never by `proposals.js` (confirms the ISS-02 NOTE's central factual claim). Swept for contradiction between (i) and (f)/(g)/(h) and the FR-024/090/123 annotations added at v2.16.0 — found none; they address disjoint aspects (timeline automation; decision-trail anchoring; terminal-state text; multi-winner resolution) and FR-090's "closed as written" annotation is compatible with item (i) once read literally (closed against FR-090's own text, not against every future ballot-layer question). That compatibility is real but relies on a careful reading the document does not yet make easy for a reader who only sees one of the two locations — hence ISS-03. |
| B5 Testability | 15 | 97 | 14.55 | No Gherkin change was needed for item (i) (it names no new testable behaviour — it names an absence and a decision owed). The FR-091 Gherkin NOTE is well-formed, uses the document's own established `#`-comment convention (identical in form to the pre-existing FR-130 NOTE at line 2308), and does not touch any `Given/When/Then` line, so Gherkin machine-readability is undamaged. Minor deduction: FR-090's Gherkin block (§8, "two proposals... equal standing... voted in the same window") has no equivalent caveat, so on its own it could be read as covering the full competing-proposal story, including resolution — it does not. |
| B6 Convention compliance | 15 | 96 | 14.40 | ISO-8601 dates, RFC 2119 usage and the named-owner rule are followed correctly throughout the delta. The version bump itself is convention-consistent: a patch bump for a non-normative addition (a routing row + a documentation NOTE), matching how (h) was added within v2.16.0 without touching normative FR text. Deduction for the §13 table's item ordering, (f)/(g)/(i)/(h): item (i) — added chronologically last — is table-ordered before (h), breaking both the alphabetical convention every other tracked-routing table in this document follows and the chronological-of-introduction order (ISS-04, cosmetic only). |
| **Total** | **100** | — | **96.85% ≈ 97%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | B4 | §4.6 FR-064, the "**v2 (deferred):**" clause — carried forward from `02-requirements-srs-v2.15.0-business-cycle1.md` (ISS-B1) and `02-requirements-srs-v2.16.0-business-cycle1.md` (ISS-01) | **Confirmed still present, correctly disclosed, not silently dropped.** The changelog states plainly: "ISS-01 (Low, the FR-064 cross-reference gap) is carried unchanged from v2.15.0." I re-read the clause directly: it still does not cross-reference the v1 anti-abuse controls (FR-023 rate-limiting, FR-068 maturation gate) that actually bound "cannot be bypassed by leaving and re-joining within the same session." | Unchanged from prior cycles: add a short v1 cross-reference to FR-023/FR-068 in the "v2 (deferred):" clause. Non-blocking; may be folded into the next version that touches FR-064. |
| ISS-03 | Low | B3 / B5 | §4.25 FR-090 row (line 809) and §8 FR-090 Gherkin block (lines 1845–1851) vs the new §13 tracked routing item (i) | **New this cycle.** FR-090's confirming annotation states "**Built and closed as written**", and its §8 Gherkin scenario ("both appear with equal standing and are voted in the same window") is not, on its own, distinguishable from a claim that the full competing-proposal story — including what happens when two proposals both pass — is settled. It is not: that is exactly what the new §13(i) records as OPEN. This is the identical documentation-consistency failure mode ISS-02 named and fixed for FR-091 (§13(f)/(h)), just not yet applied to the row that most needs it now that (i) exists. Not a contradiction (FR-090's literal text is genuinely satisfied — "closed as written" is a defensible, narrow claim), but a reader landing on §4.25 or §8 alone, without also reading §13, could reasonably miss that a real open question hangs over multi-proposal resolution. | Add a short pointer to §13(i) / Doc 03 §16 Q16 at FR-090's §4.25 row and/or its §8 Gherkin block, mirroring the NOTE pattern just used for FR-091. Non-blocking; low cost; can ship with the next version that touches FR-090, §4.25, or §8. |
| ISS-04 | Low | B3 / B6 | §13 tracked-routing table, row order: (f), (g), (i), (h) (lines 2946–2949) | **New this cycle, cosmetic only.** Item (i) — surfaced and added at v2.16.1, chronologically after (h) (added at v2.16.0) — is table-ordered *before* (h). This matches neither the alphabetical letter order every other part of this table implies nor the chronological order of introduction the changelog narrates. No content is affected; purely a table-ordering nit. | Reorder the row to (f), (g), (h), (i) the next time this table is touched. Non-blocking; cosmetic. |

> **Low** issues do not block the pass bar. There are **no** Critical, High, or Medium issues.

**ISS-02 — CLOSED this cycle (was Low at cycle 1).** §8's FR-091 Gherkin block (~line 1837) now
carries a `# NOTE (v2.16.1):` distinguishing the built order/no-skip scenario from the unwired
"per published timelines" scenario, pointing at §13(f), and a `# See also` line cross-referencing
§13(h)/Doc 03 §16 Q15. Verified independently (see §4.1 below) — not merely re-stated from the
changelog.

### 4.1 Verification performed (what I checked, and how)

| Claim in the version / hand-off | How I verified it | Result |
|---|---|---|
| Item (i) is a real gap, not invented | Read FR-090's normative text (§4.25, line 809) and its §8 Gherkin (lines 1845–1851): neither says anything about what happens when multiple proposals in one window pass | ✅ genuine gap, correctly identified |
| Governor gives each proposal an independent binary ballot; DES-104 exposes no window-closing/merge/rank capability | Read `packages/contracts/src/core/Governor.sol` in full: `propose()`, `vote()`, `finalize()`, `execute()`, `cancelDuringDiscussion()` all operate on one `Proposal` at a time; the contract has **no** concept of a "window" grouping proposals at all, no merge/rank/close-window function anywhere. Read `packages/sdk/src/proposals.js`'s own docstring (lines 18–24): "no withdraw-someone-else's-proposal, no merge, no accept-as-amendment, no priority flag... The author never owns the ballot alone." Read Doc 03 §10.13.13 DES-104 point 3, which lists the exact absent method names (`withdrawProposal`, `mergeProposal`, `closeWindow`, etc.) | ✅ confirmed accurate at both the contract and service layer |
| Item (i) correctly scoped as a requirement decision first (product-owner), mechanism second (architect) | Compared item (i)'s owner field ("product-owner (decision) + architect (mechanism)") and text against Doc 03 §16 Q16's owner field and text | ✅ matches almost verbatim, including the "requirement decision before an architecture one" framing |
| The caution against adding a window-closing capability is correct and important | Read DES-104 point 3 ("capability-absence obligation... asserted by test") and the SDK docstring's explicit anti-capture rationale | ✅ correct; the absence is a first-class, tested anti-capture control, not an oversight |
| "Not a v1 defect" is accurate | Read `proposals.js`: the service stops at `admitToBallot()` (asks whether a ballot *would* count) and never casts, stores, counts or tallies a vote; `Governor.sol` is the (not-yet-wired-into-v1) on-chain ballot layer | ✅ accurate — no vote is cast anywhere in this drop, so no window can yet resolve to "both pass" |
| Doc 03 §16 Q16 cross-reference is accurate | Read Doc 03 v2.11.0 §16, row Q16 (line 2770) in full | ✅ present, text and owners match Doc 02's item (i) closely |
| `schedule()` is never called by the proposal service (ISS-02 NOTE's factual claim) | Grepped `schedule(` across `packages/`: only callers are `packages/sdk/src/predict.js:160` and `packages/protocol/test/governance.test.js` (three call sites, all test code) | ✅ confirmed — `packages/sdk/src/proposals.js` never calls it; `advanceStage()` (line 458) takes only a `windowId` |
| Gherkin NOTE placement matches house convention | Grepped `^# NOTE` and `^# (example` across the whole document: the identical `# NOTE:` comment-line pattern already exists at FR-130's block (line 2308), placed directly under the block header; OI-17 placeholder comments use the same `#`-comment style throughout §8 | ✅ consistent with established convention; does not damage Gherkin machine-readability (comment lines, no `Given/When/Then` touched) |
| ISS-02's fix resolves rather than relocates the concern | Compared the required fix ("co-locate the acceptance criterion and the honest build-status note") against the actual fix (NOTE placed inside the same `gherkin` fenced block, directly below both scenarios, naming §13(f) and §13(h)/Q15) | ✅ genuinely resolves — a reader landing on §8 alone now sees the caveat without needing §13 |
| ISS-01 correctly carried, not silently dropped | Re-read §4.6 FR-064's "v2 (deferred):" clause in full; compared against the changelog's explicit carry-forward statement | ✅ confirmed carried and disclosed |
| Changelog honestly describes both changes and the version-bump reason | Read the full `Change:` block (lines 12–27) | ✅ accurate and unusually transparent — explicitly states the changes were made "AFTER v2.16.0's review had already begun" and were "recorded as their own version rather than folded silently into a reviewed text" |
| Item (i) does not contradict (f), (g), (h), or the FR-090/FR-024/FR-123 v2.16.0 annotations | Read all four §13 items together (lines 2946–2949) and re-read the FR-024 (§4.7), FR-090 (§4.25), FR-123 (§4.41) confirming annotations in full | ✅ no contradiction — each addresses a disjoint aspect (timeline automation / decision-trail anchoring / terminal-state text / multi-winner resolution / verification-vs-participation axis); see ISS-03 for the one real (documentation-completeness, not correctness) gap this sweep found |
| FR-090's Doc 08 RTM status is undisturbed by item (i) | Grepped `FR-090` in `docs/08-traceability-matrix.md` | ✅ still recorded COMPLETE; item (i) correctly does not reopen it, consistent with "not a v1 defect" |
| No placeholder / TBD text introduced by the delta | Read both new text blocks (item (i), the FR-091 NOTE) in full | ✅ none found |

---

## 5. Routing instruction (to the owning role)

**PASS — the product-owner sets Doc 02 `Status: Approved` and the SOP advances.** No new version
is required. Cycle 2 of 5 (continuing the v2.16.x lineage); the loop closes here.

**ISS-01, ISS-03, and ISS-04 are all Low and non-blocking** — fold all three into whichever future
Doc 02 version next touches FR-064, FR-090/§13, or the §13 table, rather than cutting a dedicated
version for any of them. ISS-03 is the one worth prioritising among the three: it is the same
class of gap ISS-02 just fixed, on the row that now most needs the same treatment.

**Downstream consequences of this delta (not defects in this document):**

- Doc 03 already reflects the matching Q16 entry at v2.11.0 (currently `Status: In Review`,
  undergoing its own technical-mode review cycle) — Doc 02's cross-reference to it is accurate as
  of the version checked.
- Item (i) remains genuinely open and is correctly **not** a v1 RTM blocker: FR-090's Must row
  stays COMPLETE (confirmed in Doc 08); item (i) is a forward-looking requirement decision owed
  before the ballot layer (v1 database-backed or v2 on-chain) is built, not a defect in what
  shipped.
- Items (f), (g), and (h) remain OPEN exactly as recorded at v2.16.0 — this delta does not touch,
  close, or reopen any of them.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — verdict is PASS at cycle 2 of 5. The cap was not reached and no human decision is
required or recorded here.
