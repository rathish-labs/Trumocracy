# Document Review Report — Doc 02 Requirements Specification v2.16.3 — business, cycle 4

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **technical-writer**, acting as neutral reviewer — **NOT** the document owner (the
> product-owner owns Doc 02). The reviewer scores and lists issues only; it never edits the
> document. All rework is done by the **owning role** (product-owner) as a new version.
>
> **Cycle numbering note:** continues the v2.16.x lineage. v2.16.2 PASSED at cycle 3 (98%,
> 0C/0H/0M/1L; `artifacts/reviews/02-requirements-srs-v2.16.2-business-cycle3.md`). v2.16.3 is
> **not** a rework-from-FAIL cycle — it is a **one-line factual correction routed in from the
> Doc 03 v2.11.1 technical review (cycle 3)**, which found Doc 02 still carrying a mis-citation
> **after** Doc 03 had already corrected its own copy of the identical claim at v2.11.0. This
> report is **cycle 4 of 5**, scoped to **the delta plus a targeted sweep for surviving instances
> of the same defect class elsewhere in the document** — not a full re-derivation of v2.16.0
> through v2.16.2, which cycle 3 already covered.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.16.3
Review mode: business
Reviewer role: technical-writer (neutral — product-owner owns Doc 02)
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 4 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 02 v2.16.3's declared correction is **accurate, well-grounded, and honestly attributed** — and,
on independent verification, it is also a genuine defect worth fixing: three business-mode review
cycles (this reviewer, cycles 1–3) did not catch it, and a **technical** review of a **different**
document (Doc 03 v2.11.1, cycle 3) did. That is worth stating plainly rather than glossing over,
because the changelog itself does so ("this correction was found downstream, not by that review").

**The mis-citation claim is correct.** I read ADR-024 §(b) directly: it removes on-chain
**execution** in v1 and states governance actions are "recorded in the database" — it says nothing
about removing the ballot, and its own package-disposition table and method-semantics table
describe `IBallotService`'s v1 backing (`castBallot` → authenticated DB write, `computeTally` → SQL
COUNT aggregate) in full. I then read DES-096 (Doc 03 §10.13.3) directly: it specifies exactly this
v1 ballot backing, method-by-method. Citing ADR-024 §(b) as authority for "v1 holds no vote" is
therefore a genuine mis-citation — §(b) is about **where governance state lives** (Postgres vs.
chain), not about **whether v1 has a ballot at all**.

**The replacement text is accurate.** I read `packages/sdk/src/proposals.js` directly: its own
header comment states, near-verbatim, what the corrected (h) row now says — "It does not cast,
store, count or tally a vote. The lifecycle runs UP TO the point a ballot opens and hands off at
`admitToBallot()`... The ballot itself is `IBallotService`'s job (DES-096)." The narrowed claim —
**the proposals and debate layer** holds no vote, not "v1" as a whole — is exactly what the code
does and no more.

**The superseded wording is quoted in place, and quoted accurately.** I cross-checked the quote
against an independent source — `artifacts/reviews/03-architecture-design-sdd-v2.11.1-technical-
cycle3.md`, the report that first found this — which itself quotes the flagged Doc 02 sentence
verbatim: *"**Not a defect in what is built:** v1 holds no vote (ADR-024 §(b)), so no window can yet
be defeated."* Doc 02's changelog (line 12–15) and §13 (h)'s own annotation both quote the operative
clause "v1 holds no vote (ADR-024 §(b))" consistently with that independent record. The quote is
**partial** — it drops the trailing ", so no window can yet be defeated" — but that clause survives
unchanged in meaning in the corrected sentence itself ("...so no window can yet reach a defeated
state"), so nothing is lost or misrepresented by the shorter quote.

**(h)'s substance is untouched.** Status remains OPEN, owner remains product-owner, and the row
still states the same requirement clarification (FR-091's text does not say what happens to a
DEFEATED or CANCELLED decision). No priority, owner, or status field changed.

**The sweep found two residual, Low-severity echoes of the same imprecision — not the same
mis-citation, but the same underlying "v1 [broadly] holds no vote" claim, stated live rather than
quoted-and-corrected.** See §4 (ISS-02, ISS-03) below. Neither creates a live contradiction with any
currently governing requirement, RTM row, or the now-corrected §13 (h)/(g)/(i) rows — all three of
which I re-read and confirm are internally consistent with each other and with the source artifacts.
ISS-01 (the long-carried FR-064 cross-reference gap) remains open and correctly disclosed.

**Verdict: PASS** — 96%, zero Critical/High/Medium, three Low (one carried, two new — both
non-blocking, both confined to non-normative text). The product-owner should set `Status: Approved`;
the SOP advances. The two new Lows are worth a look on the next version that touches §13 or FR-091,
but do not warrant a dedicated rework cycle on their own.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (`96%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — both rows are all "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | The changelog states precisely what was wrong, why, and — unusually — that it was caught downstream by a different document's technical review rather than by this business review. That is the correct posture and I found no overstatement or understatement in how it is framed. |
| B2 Completeness | 15 | 96 | 14.40 | The one declared change site (§13 (h)) is present, correctly located, and non-placeholder. Small deduction: the correction is scoped to (h) alone and does not extend to the changelog's own nearby echo of the identical imprecision (ISS-02) — a completeness gap in the *sweep*, not in the declared change itself. |
| B3 Traceability & IDs | 20 | 98 | 19.60 | ADR-024 §(b), DES-096 (Doc 03 §10.13.3), `IBallotService`, and `admitToBallot()` are all cited correctly and I verified each against source (ADR-024 text, Doc 03 §10.13.3, and `packages/sdk/src/proposals.js`). Doc 03's own v2.11.0 correction is cited accurately as the origin of the narrow claim. |
| B4 Correctness & consistency | 15 | 90 | 13.50 | The core correction is accurate and independently verified against three sources (ADR-024, DES-096, `proposals.js`). Two residual precision issues found on sweep, both Low: (1) the v2.16.0 changelog narration (line 81) still asserts the unscoped "v1... holds no vote" claim, live and unquoted; (2) the new (h) text's closing clause "so v1 does hold a vote" omits the design-vs-built distinction that Doc 03's own correction carefully preserves, creating a momentary reading ambiguity against the adjacent §13 (g) row's "the layer **built** holds no vote." |
| B5 Testability | 15 | 98 | 14.70 | Untouched by this delta. No Gherkin scenario is affected; the FR-090/091/092 blocks and their §13 cross-references (already verified at cycle 3) are unchanged and remain internally consistent with (h)'s corrected wording. |
| B6 Convention compliance | 15 | 97 | 14.55 | Annotate-don't-delete convention correctly followed for (h); the quote is accurate against an independently-verified source (see §1). Patch-level semver bump (2.16.2→2.16.3) is correct for a single, Low-classed factual correction, matching the bump rule already applied at 2.16.1→2.16.2. `Status: In Review` correct. |
| **Total** | **100** | — | **96.35% ≈ 96%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | B4 | §4.6 FR-064, the "**v2 (deferred):**" clause (line 656) — carried since `02-requirements-srs-v2.15.0-business-cycle1.md` (ISS-B1) | **Confirmed still present, correctly disclosed, unchanged.** I re-read the clause directly (line 656): "…enforcement by a global membership-scope nullifier that cannot be bypassed by leaving and re-joining within the same session, are DEFERRED to DES-065…" — it still does not cross-reference the v1 anti-abuse controls (FR-023 rate-limiting, FR-068 maturation) that actually bound this within v1. The v2.16.3 changelog does not mention it (this version does not touch FR-064), which is correct — it was already disclosed as carried at v2.16.2 (changelog line 42). | Unchanged from prior cycles: add a short v1 cross-reference to FR-023/FR-068 in the "v2 (deferred):" clause. Non-blocking; may be folded into the next version that touches FR-064. |
| ISS-02 | Low | B2 / B4 | Header `Change:` block, the **v2.16.0** entry, line 81: "…routed to the product-owner as a clarification owed before the ballot layer is built **(not a defect in v1, which holds no vote)**;" | **A residual, unquoted, uncorrected echo of the identical imprecision the v2.16.3 patch fixed at §13 (h)** — surviving in the *changelog narration that first describes (h)'s creation*, one paragraph before the addendum at line 91 that already uses the correct scoped phrase ("the proposals layer holds no vote"). Read literally, "v1... which holds no vote" makes the same unscoped claim ADR-024 §(b) does not support (v1 *does* hold a ballot per DES-096; only the proposals/debate layer built in this drop does not). **Not escalated to Medium** because: (a) it sits inside a dated, unambiguously historical changelog paragraph — the document's own established convention (see the v2.14.1 ISS-01 precedent, which declined to amend historical changelog entries describing past states) treats this class of text as narration, not live specification; (b) it does not contradict any currently-governing text — §13 (h), (g), (i) and the FR-090/091/092 normative text are all correctly scoped and mutually consistent; (c) the routing conclusion it supports (OPEN, product-owner-owed, not a v1 blocker) is unaffected by the imprecision. It is nonetheless a genuine surviving instance of the sweep target this cycle was asked to look for, and is recorded here rather than silently passed. | Optional cleanup on the next version that touches §13: replace "v1, which holds no vote" with "the proposals layer, which holds no vote" at line 81, for consistency with the now-corrected (h) row and the already-correct line 91 addendum. Non-blocking. |
| ISS-03 | Low | B4 | §13 tracked routing (h), the new `(v2.16.3: …)` annotation's closing clause: "**DES-096 specifies a v1 ballot backing outright, so v1 does hold a vote.**" | **A precision gap relative to Doc 03's own correction of the identical claim.** Doc 03 v2.11.0 (the source Doc 02 v2.16.3 explicitly cites and follows) is careful to distinguish *what is specified* ("DES-096... specifies a v1 ballot backing outright") from *what is built* ("nothing in the shipped code derives anything yet" / "the proposals and debate layer built in this drop holds no vote"). Doc 02's parallel phrase compresses this into an unqualified "so v1 does hold a vote," which — read in isolation, and immediately beside §13 row **(g)** in the same table ("the layer **built** holds no vote; the **ballot layer is owed**") — could be misread as claiming v1's ballot-casting capability is already live/shipped, which it is not (per (g) itself, and per `admitToBallot()`'s hand-off-and-stop design in `proposals.js`). Read in its own full sentence — which correctly scopes the *current, live* claim to "the proposals and debate layer holds no vote... so no window can yet reach a defeated state" — the practical meaning is not actually wrong, and I found no case where a reader would draw an incorrect conclusion about what to build or test from it. This is a wording-precision nit, not a substantive error. | Optional: on the next version that touches (h), qualify the clause — e.g. "so v1's **design** does hold a vote (the ballot layer itself, tracked separately as OPEN at §13 (g))" — to remove any ambiguity against the adjacent (g) row. Non-blocking. |

> **Low** issues do not block the pass bar. There are **no** Critical, High, or Medium issues.

### 4.1 Verification performed (what I checked, and how)

| Claim in the version / changelog | How I verified it | Result |
|---|---|---|
| ADR-024 §(b) removes on-chain **execution** in v1 and puts votes in Postgres, but does not remove the ballot | Read `docs/adr/ADR-024-v1v2-delivery-split-voting-identity-seams.md` §(a) Seam 2 (IBallotService, method semantics table) and §(b) (v1 stack decision) in full | ✅ confirmed — §(b) states "Governance actions are executed in application code and recorded in the database," and §(a)'s method-semantics table describes v1's `castBallot`/`computeTally` DB-backed behaviour explicitly; nothing in §(b) removes the ballot |
| DES-096 (Doc 03 §10.13.3) specifies a v1 ballot backing outright — database `castBallot`, SQL `computeTally` | Read Doc 03 §10.13.3 directly (lines 1784–1797) | ✅ confirmed — the method table's v1 column: `castBallot` = "Authenticated write to database"; `computeTally` = "SQL COUNT aggregate; result hash published to on-chain audit contract" |
| The proposals and debate layer genuinely stops at `admitToBallot()` and hands off | Read `packages/sdk/src/proposals.js` lines 1–58 (module header + imports) | ✅ confirmed — header states verbatim: "It does not cast, store, count or tally a vote. The lifecycle runs UP TO the point a ballot opens and hands off at `admitToBallot()`... The ballot itself is `IBallotService`'s job (DES-096)" |
| The superseded wording is quoted accurately | Cross-checked Doc 02's quote ("v1 holds no vote (ADR-024 §(b))") against an independent source that recorded the original text before this fix — `artifacts/reviews/03-architecture-design-sdd-v2.11.1-technical-cycle3.md` line 356–359 | ✅ confirmed — that report quotes the flagged Doc 02 v2.16.2 sentence verbatim: *"Not a defect in what is built: v1 holds no vote (ADR-024 §(b)), so no window can yet be defeated."* Doc 02's own quote is a partial (but not misleading) subset of this |
| (h) still OPEN, still product-owner-owned, still about DEFEATED/CANCELLED terminal outcomes | Read the full (h) row (line 2984) end to end | ✅ confirmed — Owner: product-owner; Status: "OPEN — clarification owed; does not block v1"; substance (FR-091 terminal-outcome gap) unchanged |
| Sweep: any other live occurrence of "v1 holds no vote / v1 holds no ballot" or an ADR-024 §(b) mis-citation elsewhere in Doc 02 | `grep`-swept the whole document for `ADR-024`, `holds no vote`, `holds no ballot`, `admitToBallot` | Found: line 15 (quote, correct), line 20 (corrected live text, correct), line 52 (v2.16.1 changelog, correctly scoped to "the proposals layer"), **line 81 (v2.16.0 changelog, unscoped — ISS-02)**, line 91 (v2.16.1 addendum, correctly scoped), §13 (g)/(i) rows (both correctly scoped), lines 1899–1902 Gherkin NOTE (Q15 cross-ref, unaffected) — no other mis-citation of ADR-024 found (other ADR-024 citations at lines 1158, 3092, 3254, 3314, 3345, 3350 all concern the one-person-one-vote/ZK-swap-in topic, unrelated and accurate) |
| §13 rows (g) and (i), and FR-090's §4.25/§8 notes, correctly scope the "holds no vote" claim to the proposals/debate layer, not to "v1" broadly | Re-read all four locations directly | ✅ confirmed — (g): "the layer built holds no vote"; (i): "the proposals layer holds no vote"; FR-090's notes (verified at cycle 3) already use the scoped form |
| ISS-01 (FR-064 §4.6 cross-reference gap) still open, unchanged | Re-read §4.6 FR-064 row (line 656) in full | ✅ confirmed still open — "v2 (deferred):" clause still does not cross-reference FR-023/FR-068 |
| Changelog is honest about downstream discovery | Read the v2.16.3 changelog entry (lines 12–24) and cross-checked against `artifacts/reviews/03-architecture-design-sdd-v2.11.1-technical-cycle3.md`'s routing instruction (lines 356–360), which names Doc 02 v2.16.2 §13 (h) as "still unrouted from cycle 2" | ✅ confirmed accurate and consistent with the independent record — the changelog explicitly states "Doc 02 v2.16.2 had PASSED cycle 3 at 98% — this correction was found downstream, not by that review" |
| Semver bump appropriate | Compared 2.16.2 → 2.16.3 against the skill's bump rule (Low-only/non-normative fix → patch bump) | ✅ correct — same pattern as 2.16.1→2.16.2 |
| No placeholder / TBD text introduced by the delta | Read the full (h) row and changelog entry in full | ✅ none found |

---

## 5. Routing instruction (to the owning role)

**PASS — the product-owner sets Doc 02 `Status: Approved` and the SOP advances.** No new version is
required. Cycle 4 of 5 (continuing the v2.16.x lineage).

**ISS-01, ISS-02, ISS-03 all remain Low and non-blocking.** Fold ISS-02 and ISS-03 into whichever
future Doc 02 version next touches §13 — both are one-clause wording fixes, not worth a dedicated
version. ISS-01 continues to ride with the next version that touches FR-064.

**Note for the record (not a defect in this document):** this is the second time in this project's
history that a "the correction reached all locations but one" pattern has surfaced (the first two —
Doc 08 v2.5.3 ISS-01 and Doc 07 v2.4.3 ISS-01, both rated High — were flagged at cycle 3 of the
v2.16.2 review). ISS-02 here is the same defect *class* but, on the merits, materially lower risk:
it is confined to historical changelog narration rather than a live status field consulted as
current truth, so it does not warrant the same severity. Worth naming as a pattern for the
project-manager/product-owner to watch for in future one-line corrections routed downstream: a
targeted fix to the flagged location is not automatically a full sweep of the same phrase elsewhere
in the same document, even within business-mode documents.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — verdict is PASS at cycle 4 of 5. The cap was not reached and no human decision is
required or recorded here.
