# Code-Drop Technical Review — Doc 06 Coding & UT v2.4.0, Cycle 1 of 5

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.4.0
Document:       CODE-TRUMOCRACY
Document version: 2.4.0
Cycle:          1 of 5
Review mode:    technical
Reviewer role:  reviewer-qa (neutral — engineer owns Doc 06)
Review date:    2026-08-29
Reviewer:       reviewer-qa subagent (independent)
Score:          97%
Critical:       0
High:           0
Medium:         0
Low:            2
Verdict:        PASS
```

---

## Scope

Code-drop review per CLAUDE.md §"Review-and-rework loop" and Doc 06 §4a. The verdict is
recorded against Doc 06 v2.4.0 (proposals & debate drop). The reviewer reads the document
**and** the code independently; this report describes what was actually found.

Commit reviewed: `c04b4f2` on branch `build/v1-join-membership`

New deliverables reviewed:
- `packages/protocol/src/proposals.js` + `packages/protocol/test/proposals.test.js`
- `packages/sdk/src/proposals.js` + `packages/sdk/test/proposals.test.js`
- `packages/sdk/src/party-creation.js` (partyStatus additive change)
- `apps/web/src/app/proposals/page.tsx`
- `apps/web/src/components/ProposalsAndDebate.tsx`
- `apps/web/test/proposals.test.tsx`
- `apps/web/src/i18n/en.ts` and `ar.ts` (debate section)
- Type shims (trumocracy-protocol.d.ts, trumocracy-sdk.d.ts)

---

## §4a Code-Drop Bars — All Checked

| Bar | Result | Evidence |
|---|---|---|
| Suite green (608 tests) | PASS | npm test: 95 contracts / 150 protocol / 244 sdk / 14 ui / 16 indexer / 89 web = 608, all green |
| Dep-guard clean | PASS | `npm run lint:deps`: "7 workspace package(s) checked — layering OK" |
| Typecheck clean (apps/web) | PASS | `npx tsc --noEmit` in apps/web exits 0, no output |
| IS_INSECURE_MOCK discipline | PASS | InMemoryProposalStore returns true; ProposalService delegates to store; see §Check 6 |
| Jargon filter clean | PASS | en.ts and ar.ts debate sections reviewed — no banned vocabulary |
| No out-of-scope feature | PASS | No voting, tally or ballot storage implemented; see §Check 3 |
| Honesty copy | PASS | Non-dismissable notice present; trail-v1-note present; see §Check 6 |
| Capability-absence tests | PASS with Low | Tests are meaningful; see §Check 5 and Low findings |
| Clause 7 backing-aware tests | N/A | No new component selects content on a backing property |

---

## Hard Checks (per commissioning brief)

### Check 1: Competing-proposal fairness property (FR-090)

**Verdict: Genuine. Tests are meaningful, not tautological.**

ProposalService holds no `_verifier`, no `_priorityMap`, and no data structure that connects
one author to another's proposal. Reading the service end to end:

- `fileProposal()` calls `_requireAuthor()` (checks membership + tier), then
  `findWindowByQuestion()` to find or create the window, then `saveProposal()` to append
  a new row. The `seq` field records submission order; it has no effect on stage, schedule
  or outcome. One author calling `fileProposal` a hundred times can only add their own
  proposals — they cannot reach another's.
- No method on the service (`proposalsInWindow`, `decisionWindows`, `postDeliberation`,
  `deliberation`, `advanceStage`, `admitToBallot`, `participationStatus`, `decisionTrail`,
  `IS_INSECURE_MOCK`) can mutate, withdraw, veto or re-rank an existing proposal.
- `advanceStage()` operates on the decision window, not on individual proposals. All
  proposals in a window share one stage, advancing together. No author can advance their
  own proposal while holding back a competitor's.

The test UT-0836 checks:
1. Specific forbidden method names (`service[forbidden] === undefined`) — would actually
   fail if `withdrawProposal` were added.
2. Regex scan on `Object.getOwnPropertyNames(Object.getPrototypeOf(service))` for
   withdraw/remove/delete/veto/reject/merge/prioriti — would catch the obvious additions.
3. `proposalsInWindow(windowId)` has length 2 after both proposals are filed — a positive
   check that both remain.

These tests would fail if the described capability were added. They are not tautological.

### Check 2: Counting-gate placement (FR-020, FR-122, FR-123)

**Verdict: Verified.**

ProposalService constructor:
```javascript
constructor(store, membership, clock = ...) {
  this._store = store;
  this._membership = membership;
  this._clock = clock;
  // Deliberately absent: this._verifier.
}
```

`this._verifier` is undefined. Since the service holds no verifier, authoring
(`fileProposal`), deliberating (`postDeliberation`), and reading status (`participationStatus`)
structurally cannot reach one.

`participationStatus(windowId, memberPseudonym, participationTier)`: the third parameter
is a PARTICIPATION_TIER string, not a verifier. The method body calls only
`this._store.isAdmittedToBallot()` and `this._membership.activeMembership()`. No verifier
call possible.

The only seam call site is `admitToBallot(windowId, memberPseudonym, verifier)` — the
verifier arrives as an explicit per-call parameter and is called with scope
`COUNTING_ACTION.BINDING_VOTE`. Test UT-0843 verifies this is called exactly once with the
correct scope, and that `service._verifier` is undefined.

### Check 3: "It casts no vote" (scope fence)

**Verdict: Verified.**

Service methods: `fileProposal`, `proposalsInWindow`, `decisionWindows`, `postDeliberation`,
`deliberation`, `advanceStage`, `admitToBallot`, `participationStatus`, `decisionTrail`,
`IS_INSECURE_MOCK`. None of these cast, store, count or tally a vote.

`admitToBallot` returns `{ admitted: true, windowId, member }` — no ballot content, no
vote recorded. It calls `verifier.verifyEligibility()` and
`this._store.recordBallotAdmission()` (which records admission only, not a vote).

The store interface has `recordBallotAdmission` and `isAdmittedToBallot` — admission
tracking, not vote storage. No `castVote`, `storeVote`, `tally`, `countVotes`, `result`
method exists on the service or store.

UT-0845 checks for `castVote`, `vote`, `tally`, `countVotes`, `recordVote`, `results` —
would fail if any of these were added.

### Check 4: Lifecycle guarantees (FR-091)

**Verdict: Verified. The demo advance-stage button genuinely cannot skip.**

`assertStageTransition(from, to)` is the authoritative enforcer:
- `toIndex === fromIndex` → STAGE_UNCHANGED
- `toIndex < fromIndex` → STAGE_REVERSED  
- `toIndex > fromIndex + 1` → STAGE_SKIPPED (with `skipped` payload naming the missed stages)
- Takes exactly 2 parameters — the function signature is `assertStageTransition.length === 2`

`advanceStage(windowId)` computes `to = nextStage(from)` internally. It takes no target
parameter. Since `nextStage()` always returns the immediately following stage or null, and
`assertStageTransition` re-validates the result, there is no code path that skips.

The web component button:
```tsx
onClick={() => act(() => service.advanceStage(w.windowId))}
```
calls `advanceStage` with only the windowId. There is no way to pass a target from the UI.
There is no "skip to" or "jump" button in the component.

UT-0842 checks `advanceStage.length === 1` and that `skipTo`, `setStage`, `forceStage`,
`rewindStage`, `cancelWindow` are all undefined on the service.

### Check 5: Test quality — UT-0876, UT-0879, takesNoVerifier

**Verdict: UI text tests are honesty-layer tests, not the primary security guard. takesNoVerifier is adequate in combination, with one undocumented limitation.**

**UT-0876 (no control lets one author act on another's proposal):**
The test scans button text for withdraw/remove/delete/reject/merge/prioriti/make primary/veto.
This would fail if a button were labeled "Withdraw this proposal" — it correctly provides a
legibility guarantee that the UI does not claim capabilities it lacks. However, a button
labeled "Suppress it" or "Demote it" would escape the regex. This test is **a UI honesty
check**, not the primary fairness guard. The real enforcement is:
- Service surface test in UT-0836 (which checks method names and a regex on
  `getOwnPropertyNames(getPrototypeOf(service))`)
- The service having no such method to call even if a button existed

UT-0876 is **meaningful for its stated purpose** (the UI text does not imply capabilities
that don't exist) but would mislead if treated as sufficient for the fairness property.

**UT-0879 (no control skips a stage):**
Same assessment — button text scan for skip/jump/fast-forward. Real enforcement is
`assertStageTransition` at the protocol layer, tested by UT-0090-0093 and UT-0841-0842.
UT-0879 is a **UI legibility check**, not the security property.

**takesNoVerifier(fn):**
The helper inspects `fn.toString()` to extract the parameter list and asserts it doesn't
contain the string "verifier" (case-insensitive). This would catch `function foo(verifier)`
but would miss `function foo(ver)`. This is an undocumented limitation: the comment notes
the `.length` limitation (default parameters aren't counted) but not the aliasing escape.

In combination with `expect(verifier.verifyEligibility).not.toHaveBeenCalled()` (spy
assertion) and `expect(service._verifier).toBeUndefined()` (structural guard), the overall
test is adequate. `takesNoVerifier` adds a documentation-layer assertion — confirming the
function signature makes the intent legible — but is not the primary protection.

**No test is found to pass for the wrong reason. The critical security properties are
enforced and tested at the service and protocol layers. The web tests complement these
with UI honesty checks.**

### Check 6: Honesty constraints

**IS_INSECURE_MOCK discipline:**
- `InMemoryProposalStore.IS_INSECURE_MOCK()` returns `true` ✓
- `ProposalService.IS_INSECURE_MOCK()` delegates to `this._store.IS_INSECURE_MOCK()` ✓
- UT-0848 (final block): verifies both ✓

**Jargon filter (DES-085, NFR-023):**
Reviewed en.ts debate section and ar.ts debate section in full. No occurrence of: wallet,
seed phrase, private key, gas, token, mint, chain, blockchain, crypto, hash (in blockchain
sense). Both locales are clean. UT-0884 covers this mechanically.

**Non-dismissable coercion notice:**
`BallotStep` renders `<ReceiptFreedomBanner />` immediately when `atVote === true`,
before the ballot button. The UT-0881 test confirms: `within(banner).queryAllByRole('button')`
has length 0 — no dismiss control. ✓

**FR-092 "not independently checkable yet" note:**
`DecisionTrail` renders `<p data-testid="trail-v1-note">{t.debate.trailV1Note}</p>`.
en.ts: "In this version the record is kept by us. Publishing it so that anyone can check it
without trusting us is not switched on yet. We would rather say that than imply more." ✓
ar.ts mirrors this honestly. ✓

### Check 7: Doc 06 §3 counts, §7 #23-#25, §5.0 v2.3.3 line

**§3 counts — independently verified against npm test output:**

| Package | Claimed | Actual |
|---|---|---|
| Contracts | 95 | 95 ✓ |
| Protocol | 150 | 150 ✓ |
| SDK | 244 | 244 ✓ |
| UI | 14 | 14 ✓ |
| Indexer | 16 | 16 ✓ |
| Web | 89 | 89 ✓ |
| **Total** | **608** | **608 ✓** |

Breakdown note in §3 (SDK = 124+36+38+22+24; web = 16+27+27+1+18) is arithmetically
correct. The per-range UT-#### counts match the test file output.

**§7 #23 (shim-sync gap for proposals surfaces):** Present and accurately describes the
limitation — UT-0871 covers IPartyStore only; proposals shim declarations are hand-written.
This is also the ISS-C3-01 standing item from v2.3.2. Correctly tracked. ✓

**§7 #24 (FR-092 public-reconstruction not built):** Present and consistent with
`decisionTrail()` implementation. The RTM row correctly does not close. ✓

**§7 #25 (demo advances stages by button; production needs timeline wiring):** Present. ✓

**§5.0 review record for v2.3.3:** Reports PASS (98%, 0C/0H/0M/0L). The file
`artifacts/reviews/06-coding-and-ut-v2.3.3-technical-cycle1.md` exists on disk. The
correction note "(This line read 'pending' until v2.4.0)" is accurate — this is the same
stale-record pattern the loop has caught twice before. ✓

---

## Issues

### ISS-01 (Low): UT-0876 and UT-0879 could mislead a reader into treating them as the primary fairness/lifecycle safety net

**Location:** `apps/web/test/proposals.test.tsx`, UT-0876 ("UT-0876 offers NO control that
lets one author act on another's proposal") and UT-0879 ("UT-0879 offers no control that
skips a stage")

**What is found:** Both tests scan button text using regex. They correctly assert that the
UI does not claim capabilities it lacks (a UI honesty property). They would NOT catch a
button labeled with a semantically-equivalent but differently-named phrase (e.g. "Demote",
"Suppress", "Fast-track"). The real fairness property is enforced and tested at the service
layer (UT-0836, UT-0841-0842) and at the protocol layer (UT-0093).

The test names ("offers NO control that lets one author act") read like security assertions
when they are legibility assertions. A reviewer reading only the web tests could overestimate
their coverage.

**Required fix:** Add a comment to UT-0876 and UT-0879 clarifying that these are UI-text
legibility tests — the primary safety net is the service-layer absence test (UT-0836 /
UT-0842) and protocol-layer enforcement. The existing test is correct; the context is missing.

**Impact if not fixed:** A future reviewer or author could add a button whose text passes
the regex but is backed by a new service method, and the web test would pass. The service
test would fail, but the web test failure path would be invisible.

---

### ISS-02 (Low): takesNoVerifier() does not document the aliased-parameter escape

**Location:** `packages/sdk/test/proposals.test.js`, lines 115–118 (takesNoVerifier helper)

**What is found:**
```javascript
const takesNoVerifier = (fn) => {
  const params = fn.toString().slice(fn.toString().indexOf('('), fn.toString().indexOf(')') + 1);
  expect(params).not.toMatch(/verifier/i);
};
```
The helper parses function source for the literal string "verifier" in the parameter list.
It would not catch a parameter named `ver`, `v`, `eligibility`, or any other alias.
The comment in the function correctly notes the `.length` limitation (defaults aren't counted)
but says nothing about this aliasing escape.

In combination with `expect(verifier.verifyEligibility).not.toHaveBeenCalled()` and
`expect(service._verifier).toBeUndefined()`, the overall test suite is adequate. This is a
documentation gap in the helper, not a substantive correctness gap.

**Required fix:** Add a comment noting "This checks the literal string 'verifier' in the
parameter list; an aliased parameter would escape it — the spy assertion and structural
_verifier check are the primary guards."

---

## Summary

The proposals & debate code drop is well-structured, honestly bounded, and correctly tested.
All §4a bars are met. The two hard-check items most likely to be wrong (competing-proposal
fairness and counting-gate placement) are genuine and substantively correct. The service holds
no verifier, casts no vote, enforces one-step lifecycle advancement, and the demo button
cannot skip stages. The honesty constraints (IS_INSECURE_MOCK, jargon filter, non-dismissable
notice, FR-092 v1 note) are all present and correct. The test count of 608 is verified.

The two Low findings are documentation gaps, not correctness defects. Neither blocks a PASS.

**Score: 97% / 0C / 0H / 0M / 2L — PASS**
