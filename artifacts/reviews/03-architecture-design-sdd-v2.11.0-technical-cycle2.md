# Document Review — Doc 03 SDD v2.11.0 (technical, cycle 2)

<!-- MACHINE-PARSEABLE METADATA BLOCK — the SubagentStop hook reads these exact fields -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.11.0
Review mode: technical
Reviewer role: sre (neutral — architect Ravi Deshmukh owns Doc 03)
Score: 84%
Critical: 0
High: 0
Medium: 5
Low: 4
Cycle: 2 of 5
Verdict: FAIL
```

```
Date:          2026-08-30
Owning role:   architect (Ravi Deshmukh)
Prior cycle:   artifacts/reviews/03-architecture-design-sdd-v2.10.0-technical-cycle1.md
               (FAIL 80%, 0C/2H/4M/3L) — re-read in full before this review
Decision rec:  artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md
```

---

## 1. Summary (BLUF)

**Both cycle-1 Highs are genuinely fixed, and fixed correctly.** The mapping table now matches the
chain in every row I checked against source: `Governor.State` really does have seven members and no
`Draft`; `PROPOSAL`/`REVIEW`/`DISCUSSION`/`DEBATE` really do all sit inside the chain's single
pre-vote `Discussion` period; the warning now says four stages / skips three, which is the correct
count in the safer direction; `Cancelled` is correctly restricted to the discussion period with
`Governor.cancelDuringDiscussion` (Governor.sol:397) and FR-029 cited, and the table now agrees with
§5.6 instead of contradicting it. `stateAt()` is right, at the right line, and the decision record
was corrected too. Q16 and Q17 are real gaps, correctly scoped and owned, and Q16 explicitly forbids
answering itself by adding a window-closing capability. The withdrawn illustration is gone and the
cardinality argument stands without it.

**The verdict is FAIL because the fixes were applied to §10.13.13 and not propagated, and because
the two new claims that close ISS-04 and ISS-09 are each inaccurate against source.** Three findings
survive in a second location the changelog says was fixed: **§16 Q15 still reads "v1 holds no vote
(ADR-024 §(b))"** — the exact mis-citation ISS-05 named, now sitting two rows below Q16, which
states the corrected narrow version of the same fact; **§5.2's DES-105 row still publishes the old
v2-only seam rule** ("At the v2 seam the chain is the sole authority…"), so the document now carries
the normative rule in two mutually inconsistent scopes; and the mapping table's `Cancelled` row
still asserts **"the window ends"**, the same unspecified window-termination claim this version
withdrew from the illustration two paragraphs above and minted as Q16. Two new claims also do not
hold: there are **three** ballot-state mirrors in the repository, not two (`PROPOSAL_STATE_ENUM`,
`packages/sdk/src/constants.js:42` — the ordinal-indexed decode array, the highest-risk drift
surface of the three and the one Q17 does not name), and the new §15 sub-table maps **FR-107 →
DES-106 with an RTM status Doc 08 contradicts** (Doc 08 v2.5.4 records FR-107 as
`G-TRACE + G-PHASE3`, DES = **none**).

None of this reopens a High. The section's central argument is now correct; what is wrong is that
the correction stopped at the section boundary.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`84%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (5)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 90 | 18.0 | FR-091/FR-090/FR-024/FR-020/FR-079/FR-080/FR-092 all still covered; Q16 and Q17 minted, owned and dated; Q15 retained and correctly routed. Deduction: the new §15 row asserts an FR-107 coverage claim the RTM denies (ISS-05). |
| T2 Soundness | 20 | 78 | 15.6 | Both Highs verified fixed against source; the mapping is now correct in every row and agrees with §5.6. Deductions: the normative seam rule exists in two contradictory scopes in one document (ISS-02); the enum reconciliation is incomplete (ISS-03); the `Cancelled` row still asserts a window termination nothing specifies (ISS-04); the newly-bound v1 half has no named derivation source (ISS-06). |
| T3 Traceability & IDs | 20 | 82 | 16.4 | §15 sub-table added (cycle-1 ISS-09 closed); four of its five rows verified exactly against Doc 08; Q16 ↔ Doc 02 §13 (i) and Q15 ↔ (h) verified consistent; the decision record was genuinely updated. Deductions: ISS-05 (FR-107), ISS-07 (misattributed v2.9.1 fix), ISS-08 (wrong minting version), ISS-09 (Q-row ordering + unnamed owner). |
| T4 Security & failure modes | 15 | 80 | 12.0 | The safety payload is materially stronger: the collision warning now errs on the safe side, and the drift failure mode is stated for both versions. Deductions: §5.2 still publishes the narrower rule (ISS-02); the ordinal-coupled decode array — where a Solidity enum reorder silently corrupts every decoded state — is unnamed (ISS-03); the v1 half of the rule binds to nothing concrete (ISS-06). |
| T5 Completeness & testability | 15 | 88 | 13.2 | Q17 records the differential-coverage obligation with owner and needed-by; every code citation in the reworked section re-verified correct (Governor.sol:41-49 and :397, governance.js:19-28 and :210, sdk/proposals.js:295, protocol/proposals.js:103-108). Deduction: Q17's scope omits the third mirror (ISS-03). |
| T6 Convention compliance | 10 | 92 | 9.2 | RFC 2119 precise; ISO-8601 throughout; minor semver bump correct for a Medium-or-above rework; `Status: In Review` correct; corrections recorded rather than overwritten, per house practice. Deduction: §16 row ordering and the unnamed "engineer" owner (ISS-09). |
| **Total** | **100** | — | **84.4 → 84%** | — |

## 4. Issues (summary — full findings in §5)

| ID | Severity | Criterion | Location | Finding (one line) |
|----|----------|-----------|----------|--------------------|
| ISS-01 | Medium | T2 / T3 | §16 Q15 (line 2758) | The cycle-1 mis-citation survives verbatim: "v1 holds no vote (ADR-024 §(b))" — contradicting §10.13.3 (DES-096) and Q16 two rows above it. |
| ISS-02 | Medium | T2 / T4 | §5.2 DES-105 row (line 865) | Still states the seam rule as v2-only ("At the v2 seam the chain is the sole authority…"), contradicting the corrected both-versions rule at §10.13.13. |
| ISS-03 | Medium | T2 / T4 / T5 | §10.13.13(a) enum sub-table (2390–2403); §16 Q17 | "Two enums express the ballot state" is false — a third mirror exists (`PROPOSAL_STATE_ENUM`, sdk/constants.js:42), and it is the ordinal-order-sensitive one Q17 omits. |
| ISS-04 | Medium | T2 | §10.13.13(a) mapping, `Cancelled` row (line 2415) | "*(none — the window ends)*" asserts a window termination no capability implements, that Q15 routes as open and that the version's own new warning says nothing enforces. |
| ISS-05 | Medium | T1 / T3 | §15, new sub-table, last row (line 2736) | Maps FR-107 → DES-106 and labels the row "RTM row OPEN (G-NOMECH)"; Doc 08 v2.5.4 records FR-107 as `G-TRACE + G-PHASE3` with **no DES**. |
| ISS-06 | Low | T2 / T4 | §10.13.13(a) seam rule (2433–2442) vs §10.13.3 | The rule now binds v1, but DES-096 exposes no ballot-state accessor and no v1 ballot-state vocabulary is defined anywhere; the mapping's "Ballot state" column is on-chain-only. |
| ISS-07 | Low | T3 | §10.13.13 DES-104 item 4 (line 2311) | The new correction note says the v2.9.1 fix was made to "the §5.2 DES-104 row"; it was made to the §5.2 **DES-105** row. |
| ISS-08 | Low | T3 | §15 sub-table lead-in (2726–2728) | Says DES-103..DES-106 "shipped at v2.9.1"; they were minted at **v2.9.0**. |
| ISS-09 | Low | T6 | §16 rows Q15–Q17 (2756–2758) | Q16 and Q17 are inserted **before** Q15; and Q17's owner reads "Ji-woo Park (tester) + engineer" — the named-owner rule requires a person (the engineer is Samuel Oyelaran). |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Full findings

### ISS-01 (Medium) — the ISS-05 mis-citation survives in §16 Q15, one of the three places cycle 1 named

**Location.** §16, Q15 (line 2758): *"**Not a defect in what is built:** v1 holds no vote (ADR-024
§(b)), so no window can yet be defeated."*

**Finding.** This is the exact sentence cycle-1 ISS-05 required corrected, in one of the exact three
locations it named (§10.13.13(a), §16 Q15, header changelog). §10.13.13(a) was corrected —
thoroughly and well. Q15 was not. The claim remains false for the reason the same document now gives
at lines 2449–2458: ADR-024 §(b) removes on-chain **execution** and puts votes in Postgres, and
**DES-096 (§10.13.3) specifies a v1 ballot backing outright** — a database `castBallot`, a SQL
`computeTally`, and a `BallotReceipt` that includes the choice.

**Why it is more than a leftover.** The document now contradicts itself inside a single table.
Q16 (line 2756), minted by this version, states the corrected narrow form — *"It is **not a v1
defect** — the layer built in this drop holds no vote"*. Q15, two rows below, states the broad false
form with the mis-citation. A product-owner reading §16 to triage these two questions reads two
different claims about the same fact, and the false one is attached to the older, higher-priority
question. The header changelog meanwhile records ISS-05 as **FIXED** and says "the narrower true
claim … is stated where it belongs" — true of §10.13.13, not true of Q15.

**Required fix.** In Q15, replace "v1 holds no vote (ADR-024 §(b))" with the narrow claim already
used in Q16 — "the proposals and debate layer built in this drop holds no vote, so no window can yet
be defeated" — and drop the ADR-024 §(b) citation or replace it with §10.13.3 / DES-096.

**Route onward (not a Doc 03 defect).** **Doc 02 §13 tracked routing (h)** carries the identical
sentence ("**Not a defect in what is built:** v1 holds no vote (ADR-024 §(b))"). Doc 02 is the
product-owner's document; hand it to the project-manager for routing rather than editing it from
here. Doc 02 §13 **(i)** — the Q16 counterpart — already uses the correct narrow form, so the same
split exists there.

---

### ISS-02 (Medium) — §5.2's DES-105 row still publishes the v2-only seam rule the rework replaced

**Location.** §5.2, component table, DES-105 row (line 865), final clause:

> "**Layer boundary (ruled 2026-08-30, §10.13.13(a)):** … **At the v2 seam the chain is the sole
> authority on ballot state and `VOTE`/`DECISION`/`IMPLEMENTATION` MUST be DERIVED from it, never
> tracked independently**"

**Finding.** §10.13.13(a) now reads (line 2436): "**The ballot layer is the sole authority on ballot
state** … MUST be **derived** from the state held by whatever backing `IBallotService` (DES-096) is
bound to. In **v1** that authority is the **database backing** … at the **v2 seam swap** it becomes
the **chain**." The two statements of the same normative rule differ on exactly the point the
cycle-1 Medium was about: scope. §5.2 says the rule attaches at the v2 seam; §10.13.13 says it binds
in both versions.

I swept the whole document for other statements of the rule. `sole authority` occurs three times:
the header changelog's v2.10.0 historical entry (legitimate history, and explicitly corrected by the
v2.11.0 entry above it), §5.2 line 865, and §10.13.13 line 2436. Line 865 is the only live
contradiction.

**Why §5.2 is the wrong place to leave the old text.** §5.2 is the element register — the row an
implementer or a downstream role reads to learn what DES-105 obliges, without opening §10.13.13. A
v1 engineer reading only that row concludes the derivation rule does not apply to them, which is
precisely the conclusion ISS-05 was raised to prevent. It is also the same §5.2-vs-§10.13.13
divergence pattern as cycle-1 ISS-08 — this time on a normative MUST rather than on a rationale.

**Required fix.** Rewrite the DES-105 row's final clause to match §10.13.13's both-versions form,
and name DES-096 in it so the row points at the seam it now binds.

---

### ISS-03 (Medium) — there are three ballot-state mirrors, not two, and the omitted one carries the worst drift risk

**Location.** §10.13.13(a), the new reconciliation sub-table (lines 2390–2403): "**Two enums express
the ballot state, and they are not the same enum**"; and §16 Q17 (line 2757), which scopes the
differential obligation to those two.

**Verified correct, first.** Everything the sub-table asserts about the two enums it names is true.
`Governor.State` is exactly `{Discussion, Voting, Tallying, Defeated, Timelocked, Executed,
Cancelled}` — seven members at `Governor.sol:41-49`. `PROPOSAL_STATE` is exactly the eight listed
values in the listed order at `governance.js:19-28`. Difference (i) holds: `Governor.state()`
returns `State.Timelocked` for "passed, not yet executed" (`Governor.sol:432`) and `stateAt()`
returns `PROPOSAL_STATE.SUCCEEDED_TIMELOCK` for the same condition on both branches of its
degenerate ternary (`governance.js:217`) — one state, two names, confirmed. Difference (ii) holds:
repo-wide, `PROPOSAL_STATE.DRAFT` has no producer, `stateAt()` never returns it, and no contract
declares a `Draft`. Q17's claim that `differential.test.mjs` exercises neither is also true — that
file imports `effectiveRules`, `tally`, `petitionThreshold`, `isSurgeActive`, `regionPreimage`,
`TIER` and `BPS`, and touches no state enum at all; `stateAt()` still has zero call sites repo-wide.

**What is wrong.** A **third** declaration of the same machine exists and is not mentioned:

```js
/** `Governor.State`. */
export const PROPOSAL_STATE_ENUM = Object.freeze([
  'discussion', 'voting', 'tallying', 'defeated', 'timelocked', 'executed', 'cancelled',
]);
```
(`packages/sdk/src/constants.js:42-51`)

Seven entries, in `Governor.State`'s **declaration order**, using `'timelocked'` — a third spelling
of the state the sub-table reconciles, in the package an application actually consumes. Two
consequences:

1. The sentence "Two enums express the ballot state" is factually wrong, in the sub-table added to
   close a finding about enums being used without reconciliation.
2. This is the **ordinal-coupled** mirror: `Governor.state()` returns a `uint8` and this array is the
   index→name decode. Reordering the Solidity enum silently remaps every decoded state, with no
   compile error and no failing test. The SDK's own neighbouring comment shows the codebase knows
   this coupling matters — `/** Governor.Choice — the enum ordering is load-bearing in vote(). */`
   (`constants.js:39`). Q17 asks for "a differential case pinning **the two** enums to each other";
   a case satisfying Q17 as written would leave the ordinal decode unpinned, and that is the
   divergence that would actually mislead a citizen about their own proposal.

`PROPOSAL_STATE_ENUM` presently has zero usages, like the other two — so all three mirrors are
currently untested and unused, which strengthens rather than weakens the point.

**Required fix.** Add the third mirror to the sub-table with its citation; state which of the three
the seam rule's "ballot state" refers to at v2 (the on-chain `Governor.State`, decoded through the
SDK array); and widen Q17 to require the differential case to pin **the ordinal order** as well as
the value set.

---

### ISS-04 (Medium) — the `Cancelled` row still asserts "the window ends", the same claim class this version withdrew

**Location.** §10.13.13(a), mapping table, final row (line 2415): `*(none — the window ends)*` |
`Cancelled` | "**reachable only during the discussion period** — see below".

**Finding.** The relationship cell is now correct — that half of ISS-01 is properly fixed. The
FR-091 cell is not. "The window ends" asserts a window-level termination that this same version
establishes three separate times does not exist:

1. **No capability implements it.** DES-104 item 3 (line 2306) enumerates the absence: the service
   exposes no `closeWindow`, no `withdrawProposal`, no `mergeProposal`, no `vetoProposal`. Nothing
   ends a window.
2. **The version's own new warning says nothing terminates a window** (lines 2472–2478):
   "`advanceStage(windowId)` consults no outcome and would advance a defeated window straight on to
   `IMPLEMENTATION`. Nothing today prevents it." Verified against
   `packages/sdk/src/proposals.js:458-475` — `advanceStage` reads only `window.stage`, computes
   `nextStage(from)`, calls `assertStageTransition`, and refuses only at `LIFECYCLE_COMPLETE`.
3. **Q15 routes the question as open.** Whether a defeated or cancelled decision terminates at
   `DECISION` is explicitly "a requirement clarification owed to the product-owner, not an
   architect's call". The mapping table states as settled what §16 records as unsettled.

There is also a cardinality error of the kind this version's own item 1 now emphasises:
`cancelDuringDiscussion(proposalId, …)` cancels **one proposal** (`Governor.sol:397`, setting
`p.cancelled` at line 408). A decision window may hold several competing proposals. One cancelled
ballot cannot end a window that still holds two live ones — which is exactly the one-to-many
argument the paragraph above the table makes.

**Required fix.** Replace the cell with the neutral statement the row actually supports — e.g.
`*(none — no FR-091 stage corresponds; the window's other proposals are unaffected)*` — and, if a
cross-reference is wanted, point to Q15 rather than asserting the outcome Q15 routes.

---

### ISS-05 (Medium) — the new §15 sub-table misstates FR-107's RTM standing

**Location.** §15, "v2.11.0 proposals & debate trace rows", final row (line 2736):

> | FR-092 (permanent decision trail, third-party reconstructable); **FR-107** (append-only) |
> **DES-106** (decision trail) | … **RTM row OPEN (G-NOMECH)** on two counts … |

**Finding.** The FR-092 half is exactly right — Doc 08 v2.5.4 records FR-092 as G-NOMECH failing
"on two independent grounds", the same two grounds in the same order. The FR-107 half is wrong on
both counts the row makes:

| | Doc 03 §15 (this version) | Doc 08 v2.5.4 (authoritative RTM) |
|---|---|---|
| FR-107 → DES | **DES-106** | **none** (row 536: "DES: none · SCR: none") |
| FR-107 status | "RTM row OPEN (**G-NOMECH**)" | **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |

Doc 08's gap log is explicit: entry 98 — "FR-107 · G-TRACE · **No DES assigned** — Doc 03 §16;
append-only state-transition lifecycle not designed (FR-085 carve-out pending too) · Erik Lindqvist
· Design next increment".

The two classifications are not interchangeable: `G-TRACE` means the chain is broken and a **DES is
owed from the architect**; `G-NOMECH` means the chain is closed and a **build is owed**. Doc 03 §15
now tells a reader that an architect-owed design gap is an engineering gap.

**Note on provenance.** The underlying disagreement is older than this version — §5.2's DES-106 row
has carried FR-107 in its trace column since v2.9.0 while Doc 08 has recorded "none". What v2.11.0
adds is the **assertion of an RTM status** for it, in the section whose subject is traceability, in
a table introduced specifically to satisfy a traceability finding. That is the new defect.

**Required fix.** Either drop FR-107 from the row (leaving the row about FR-092, whose status is
verified correct), or keep it and record the divergence explicitly — "Doc 03 §5.2 traces FR-107 to
DES-106; Doc 08 records FR-107 as G-TRACE with no DES; routed to the tester for reconciliation" —
in keeping with this document's practice of recording contradictions rather than overwriting them
(§18). Do not assert a status Doc 08 does not carry.

---

### ISS-06 (Low) — the rule now binds v1, but v1 has no ballot state to derive from

**Location.** §10.13.13(a), the seam rule (lines 2433–2442), against §10.13.3 (DES-096).

**Finding.** The rework binds the rule to "the state held by whatever backing `IBallotService`
(DES-096) is bound to. In **v1** that authority is the **database backing** (DES-096: `castBallot`
writes, `computeTally` aggregates)". DES-096's design-level interface is four methods —
`castBallot`, `changeBallot`, `computeTally`, `getTallyProperties` — and **none of them returns a
ballot state**. There is no v1 counterpart to `Governor.state()`, no v1 ballot-state vocabulary
anywhere in this document, and the mapping table's "Ballot state" column contains only
`Governor.State` values. So the rule's positive half — derive `VOTE`/`DECISION`/`IMPLEMENTATION`
from it — names no source in v1, and the mapping that operationalises it exists for v2 only.

The prohibition half ("MUST NOT be tracked independently of it") is implementable in v1 as written,
which is why this is Low and not Medium — the drift the rule exists to prevent is still forbidden.
But an engineer building the DES-096 v1 backing has to invent the v1 state model to comply, and the
document does not say who owes that.

**Required fix.** One clause in the rule, or one row in DES-096: state that the v1 backing owes a
ballot-state accessor — or name `computeTally` plus the window schedule as the derivation source and
say which layer owns the timing — so the obligation lands on a named element rather than on
inference.

---

### ISS-07 (Low) — the new DES-104 item-4 correction note names the wrong §5.2 row

**Location.** §10.13.13, DES-104 item 4 (line 2311): *"…which contradicted its own next sentence and
the **§5.2 DES-104 row** — that row was corrected for this exact error at v2.9.1 and this lead-in
was left behind"*.

**Finding.** The lead-in itself is now correct ("Entry closes when the debate opens") — cycle-1
ISS-08 is fixed. The attribution in the new note is not. The v2.9.1 correction was made to the §5.2
**DES-105** row, not the DES-104 row. The header changelog says so ("v2.9.1 … ISS-01 (Low): the §5.2
**DES-105** row justified the competing-entry cutoff…"), and §5.2 confirms it: the competing-entry
cutoff sentence lives in the DES-105 row (line 865, "once the window reaches debate, entry is
refused"), while the DES-104 row (line 864) contains no entry-cutoff sentence at all.

**Required fix.** Change "§5.2 DES-104 row" to "§5.2 DES-105 row" in the correction note.

---

### ISS-08 (Low) — the §15 sub-table dates DES-103..DES-106 to the wrong version

**Location.** §15, sub-table lead-in (lines 2726–2728): *"these four elements shipped at **v2.9.1**
without a §15 sub-table"*.

**Finding.** DES-103..DES-106 were minted at **v2.9.0** — the header changelog's v2.9.0 entry reads
"PROPOSALS & DEBATE design … **Four new elements in §5.2**", listing all four. v2.9.1 corrected one
§5.2 row (DES-105's rationale); v2.9.2 completed DES-103 for FR-080. Cycle-1 ISS-09 also recorded
them as minted at v2.9.0. The heading's date range ("2026-08-29/30") is right; only the version is
wrong.

**Required fix.** "shipped at v2.9.0".

---

### ISS-09 (Low) — §16 row ordering and an unnamed owner

**Location.** §16, rows at lines 2756–2758.

**Finding — two small house-style breaks in the newly-edited table.**

1. **Ordering.** The rows run Q1 … Q14, **Q16, Q17, Q15**. The two new questions were inserted above
   the one minted at v2.10.0. Every other row in the table is in numeric order, and §16 is a
   register read by owners looking for their own ID.
2. **Unnamed owner.** Q17's owner reads "**Ji-woo Park (tester) + engineer**". The named-owner rule
   (CLAUDE.md, Conventions) requires a person, never a team or a role, and every other multi-owner
   row in this table names two people ("Ravi Deshmukh (architect) + Priya Raghunathan (PO)"). The
   engineer is named elsewhere in the suite — **Samuel Oyelaran** (Doc 13 PR-7, RISK-34, RISK-46).

**Required fix.** Move Q15 above Q16, and name the engineer in Q17.

---

## 6. What was verified and PASSED

Checked against source, not accepted as asserted. Recorded so cycle 3 need not re-derive it.

| Claim under review | Verdict | Evidence |
|---|---|---|
| **ISS-01 fixed** — `Cancelled` reachable only during discussion | **PASS** | The table row and the new warning cite `Governor.cancelDuringDiscussion` and FR-029 correctly. Verified: the function is at `Governor.sol:397` with the quoted comment at :396; it reverts `NotInDiscussion` when `block.timestamp >= p.discussionEndsAt` (:401); it is the **only** writer of `p.cancelled` (:408), which `state()` reads first (:426). The reachability claim is now correct. |
| **ISS-01 fixed** — agreement with §5.6 | **PASS** | §5.6 (line 1094) reads "└──proposer withdraws (**discussion only**)──▶ cancelled". The table and warning now cite §5.6 as the reference. The internal contradiction v2.10.0 introduced is gone. |
| **ISS-02 fixed** — no `DRAFT` rows remain | **PASS** | `PROPOSAL` and `REVIEW` now both map to `Discussion`. Repo re-check: `Governor.State` has 7 members and no `Draft` (`Governor.sol:41-49`); `stateAt()` returns `DISCUSSION` for any `now < discussionEndsAt` (`governance.js:213`); the only repo-wide occurrence of `PROPOSAL_STATE.DRAFT` is its own declaration. |
| **ISS-02 fixed** — the warning now says four / three | **PASS** | "a **single** ballot state spanning **four** FR-091 stages … silently skips **three** stages" (2417–2420). Correct, and correct in the safer direction. |
| **"two stages" sweep** | **PASS** | One surviving instance, in the **v2.10.0 historical changelog entry** (line 90), which the v2.11.0 entry immediately above it explicitly corrects ("understated its own trap as 'skips two'"). Legitimate as version history, consistent with the cycle-1 treatment of the v2.9.0 entry. The only other "two stages" in the document is FR-042 recall (line 2537), unrelated. |
| **ISS-03 fixed** — `proposalState()` sweep | **PASS** | Two surviving occurrences, both legitimate: line 84 (v2.10.0 historical changelog) and line 2378 (the v2.11.0 correction note that names it as the invented name). Item 3 now reads `stateAt(sched, now, { executed, cancelled, outcome })` — signature and line (`governance.js:210`) both verified exact. |
| **ISS-03 fixed** — "corrected … in the decision record" | **PASS** | `artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md:126` now carries `stateAt(sched, now, { executed, cancelled, outcome })`, and line 225 records the v2.11.0 rework. The claim is true. |
| **ISS-04 partially fixed** — the two named enums are accurately reconciled | **PASS on the two named** | Member counts, orders, string values and citations all verified exact; `SUCCEEDED_TIMELOCK` = `Timelocked` confirmed from both implementations; `DRAFT` confirmed producerless. The omission of the third mirror is ISS-03 above. |
| **§16 Q17 scope** | **PASS on scope** | Correctly owned by tester + engineer (a coverage obligation, not a requirements question), correctly *not* mirrored into Doc 02 §13, and its `differential.test.mjs` claim verified true. Its enumeration is incomplete — ISS-03. |
| **ISS-06 fixed** — illustration withdrawn | **PASS** | "one `SUCCEEDED_TIMELOCK` and two `DEFEATED`" appears nowhere outside the historical v2.10.0 changelog entry. Item 1 now reads "**three** ballot states, which resolve independently of one another" — what the code supports, and it carries the full one-to-many argument. |
| **§16 Q16 is a real, correctly-scoped gap** | **PASS** | FR-090's "same decision window" vs `Governor`'s independent per-proposal `Choice{Against,For,Abstain}` ballot is a genuine gap; DES-104's capability-absence set really does remove every window-closing path; owners are two named people; "needed by: before the ballot layer is built" is right. It **does** forbid the wrong answer: "that absence is a first-class anti-capture control and **MUST NOT be quietly removed to answer this**". Substantively identical to Doc 02 §13 tracked routing **(i)**. |
| **ISS-07 fixed** — "terminates at DECISION" marked an intention | **PASS** | The new warning block (2472–2478) is accurate: `advanceStage(windowId)` (`packages/sdk/src/proposals.js:458-475`) reads only `window.stage`, derives `to` from `nextStage(from)`, and consults **no outcome** — a defeated window would advance to `IMPLEMENTATION`. |
| **ISS-08 fixed** — DES-104 item 4 lead-in | **PASS** | Now "**Entry closes when the debate opens**", matching its own body and the §5.2 DES-105 row. (The attribution inside the new correction note is ISS-07 above.) |
| **ISS-09 fixed** — §15 sub-table exists | **PASS on existence; 4 of 5 rows verified** | FR-079 "CLOSED (Doc 08 v2.5.0)" ✓ (Doc 08: COMPLETE, closed v2.5.0). FR-080 "CLOSED (Doc 08 v2.5.1)" ✓. FR-090 "CLOSED (Doc 08 v2.5.0)" ✓. FR-091 "OPEN (G-NOMECH) on the unwired 'per published timelines' clause **only**" ✓ — Doc 08 says "this row therefore carries exactly ONE GAP", the same clause. FR-024 "extended" ✓ (Doc 08: COMPLETE, "v2.5.0 extends the evidence"). The FR-107 half is ISS-05. |
| **Routed items are accurately cited** | **PASS** | Both engineer-owned comments still exist exactly where the changelog says: `packages/sdk/src/proposals.js:295` ("Admitting a new option after the ballot opens…") and `packages/protocol/src/proposals.js:103-108` ("the open reconciliation question"). |
| **Doc 02 §13 consistency** | **PASS** | Q16 ↔ tracked routing **(i)** and Q15 ↔ **(h)** are substantively identical, with matching owners and needed-by. Q17 correctly has no Doc 02 counterpart. (Doc 02 (h) carries the same stale "v1 holds no vote" sentence — PO-owned; routed, see ISS-01.) |
| **Header hygiene** | **PASS** | `Version: 2.11.0`, `Status: In Review`, `Last updated: 2026-08-30`. Minor bump correct for a Medium-or-above rework. The changelog names the review report, the FAIL score and the severity counts accurately, and attributes each fix to its ISS id. |
| **§10.13.13(b) — ruling (b)** | **PASS, untouched** | Carried forward unchanged from v2.10.0, as cycle 1 instructed. Re-spot-checked: `COUNTING_ACTION` is still the frozen three-value allowlist and the directional warning still names both failure modes with their guarding tests (UT-0834; UT-0089/UT-0832). |
| **ADR-008 §6 durations** | **PASS** | T2 = 7 days / T3 = 14 days unchanged and still exact. |

## 7. Observations (no issue raised — for the architect's awareness)

- All **three** ballot-state mirrors (`PROPOSAL_STATE_ENUM`, `PROPOSAL_STATE`, and `stateAt()`
  itself) currently have **zero** call sites outside their own declarations. Q17 is therefore cheap
  to satisfy now, and gets more expensive the moment the ballot layer wires one of them in.
- §18 (Contradiction record) remains this document's own home for recorded contradictions. Once
  ISS-02 and ISS-05 are fixed, the §5.2-vs-§10.13.13 seam-rule divergence and the Doc 03-vs-Doc 08
  FR-107 divergence are both candidates for recording there rather than being silently overwritten —
  the practice this document follows elsewhere, and follows well.
- The v2.11.0 changelog does real work and is unusually candid. The one thing to watch is that it
  reports ISS-05 as "FIXED" while two of the three locations that finding named still carry the old
  claim. A changelog that over-reports a fix is the same defect class as a design document that
  over-reports a mechanism — the class this document's own v2.8.2 entry was written to guard
  against.

## 8. Routing instruction (to the owning role)

**FAIL → route to the architect (Ravi Deshmukh), owning role for Doc 03.**

Fix ISS-01 through ISS-05 (5 Medium — each independently forces the FAIL); ISS-06 to ISS-09 (Low) do
not block but should be taken in the same pass. The rework MUST produce a **new version** — bump
`Version:` to at least **2.11.1**, with `Status: In Review` (all five Mediums are propagation and
citation corrections inside existing content, so a patch bump is defensible; use **2.12.0** if the
ISS-03 sub-table row and the ISS-06 DES-096 clause are treated as new design content) — after which
this loop re-reviews as **cycle 3 of 5**.

**Nothing in §10.13.13(a)'s central argument needs rework.** The mapping table's nine rows (bar the
one `Cancelled` cell), the enum sub-table's two reconciled differences, both warning blocks, the
withdrawn illustration, the corrected `stateAt()` citation, the ISS-07 design-intention warning and
the corrected DES-104 lead-in are all verified correct against source and should be carried forward
unchanged. Four of the five Mediums are the **same corrections applied one location short** — §5.2's
DES-105 row, §16's Q15 row, the `Cancelled` row's left cell, and the §15 row's FR-107 half. The
fifth (ISS-03) is one table row plus one clause in Q17.

**Three items to route onward rather than fix in Doc 03:** the stale "v1 holds no vote (ADR-024
§(b))" sentence in **Doc 02 §13 (h)** is product-owner-owned; and the two engineer-owned code
comments the changelog already lists (`packages/sdk/src/proposals.js:295`,
`packages/protocol/src/proposals.js:103-108`) are still unrouted. Hand all three to the
project-manager.

## 9. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5 and the verdict is FAIL, not ESCALATED.
