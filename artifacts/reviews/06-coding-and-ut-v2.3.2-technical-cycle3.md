# Document Review Report — Doc 06 Coding & UT v2.3.2 (+ code drop) — technical, cycle 3

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **tester**, acting as neutral reviewer — **NOT** the document owner (the engineer owns Doc 06).
> The reviewer scores and lists issues only; it never edits the document or any product code.
> All rework is done by the **owning role** (engineer) as a new version.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.3.2
Review mode: technical
Reviewer role: tester (neutral — engineer owns Doc 06)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 3 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 06 v2.3.2 closes all three cycle-2 issues, and the Medium is closed **properly** — not
patched. I verified every claim against the repository rather than against the document's word,
and I additionally **mutation-tested the new drift guard** to confirm it is a real guard and not a
test that passes for the wrong reason.

- **ISS-C2-01 (Medium) — CLOSED.** `findPetitionsPastClose(now: number): object[]` is now declared
  in **both** shim blocks of `apps/web/types/trumocracy-sdk.d.ts` (interface line 126, class line
  155). A mechanical member-set diff now returns **22 = 22 = 22** across the JSDoc typedef, the
  `IPartyStore` interface, and the `InMemoryPartyStore` class — set-equal in both directions, with
  no member on either side that the other lacks. The guard I asked for exists as **UT-0871**
  (`apps/web/test/sdk-types-sync.test.ts`), and it works: I ran two mutations against copies in a
  scratch directory (the repo was not touched). Removing the method from the **interface block
  only** makes the interface assertion fail while the class assertion still passes — so the guard
  detects drift **per block**, not merely in aggregate. Adding a phantom member to the JSDoc
  typedef fails the reverse direction. That is exactly the property the fix needed.
- **ISS-C2-02 (Low) — CLOSED.** §5.0 line for v2.0.1 cycle 2 now reads PASS (97%) — which matches
  the report on disk — and the v2.1.0 line's stale sign-off tail is replaced with the v2.2.0
  cycle-2 PASS resolution. Both corrections carry provenance annotations, so the audit trail
  records not just the right value but when it was corrected.
- **ISS-C2-03 (Low) — CLOSED.** `git log --stat -2` confirms two atomic commits: **3a273a1** is the
  fix with its proof (UT-0831, UT-0871, the `.d.ts` sync, the O(n) fold, the UT-0822 restructure —
  code and tests together, 6 files), and **f70292a** is the Doc 06 companion (1 file). No other
  role's `artifacts/` are swept in. The working tree now holds only review artifacts (my cycle-2
  report, memory notes, `memory-index.json`), exactly as it should for a reviewer-owned surface.
  Both commits are Conventional Commits and the fix commit references `US-0024 US-0025 US-0073`.

The §4a code-drop bar is met and independently re-verified: **542 tests pass, zero failures**
(contracts 95 / protocol 126 / sdk 220 / ui 14 / indexer 16 / web 71), matching §3 **row by row**,
including the new `web 71 = 16+27+27+1` decomposition. Dep-guard clean. `tsc --noEmit` exits 0 in
both `apps/web` and `packages/ui`. The v2.3.1 change-history entry correctly **retains** its
historical 541/web-70 figures rather than being retro-edited — the right call for an audit record.

I also probed beyond the reported issues: the **unguarded** half of the shim
(`PartyCreationService`) is currently **in sync** — 13 methods implemented, 13 declared, no member
on either side that the other lacks. So there is no hidden second drift.

One **Low** remains (UT-0871 guards `IPartyStore` only; the `PartyCreationService` declaration is
the other half of the same shim and is unguarded, though verified clean today). Low issues do not
block the pass bar.

**Verdict: PASS** — 97%, with zero Critical, High, or Medium issues. The engineer should set
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
| T1 Requirement coverage | 20 | 96 | 19.20 | No coverage regression; FR-020/021/022/122/123/130/131(b)/(d) remain implemented and tested across 542 green tests. UT-0871 adds build-integrity coverage on the DES-097 seam shim. FR-064 is not a coverage gap — §7 #20 is a tracked decision that correctly withholds the Must-row closure pending a product-owner ruling, which is the honest handling of a divergence the engineer cannot resolve alone. |
| T2 Soundness | 20 | 97 | 19.40 | The Medium is gone at the root, not papered over: the seam contract is now identical on both sides of the JS/TS boundary (22 = 22 = 22, set-equal both ways), and the service still touches only declared interface methods. The O(n) `membershipHistory` fold and the `expirePetitions` interface routing remain correct. Small residual (ISS-C3-01, Low): the guard covers `IPartyStore` only. |
| T3 Traceability & IDs | 20 | 98 | 19.60 | §3 reconciles **exactly** to the measured 542, row by row and subtotal by subtotal (protocol 82+44=126, sdk 124+36+38+22=220, web 16+27+27+1=71). UT-0871 is a fresh ID — no reuse, no renumbering — with its own §3 row and an updated note. §5.0 is now fully accurate against `artifacts/reviews/` for every line, with correction provenance recorded; the v2.3.1 entry keeps its historical 541 rather than being retro-edited. |
| T4 Security & failure modes | 15 | 97 | 14.55 | The silent-production-no-op failure mode is closed on **both** sides of the seam and is now locked by two independent tests (UT-0831 behavioural, UT-0871 structural), the second of which I confirmed by mutation actually fails on reintroduced drift. IS_INSECURE_MOCK discipline intact (store true → service delegates → CI gate). §7 #20/#21/#22 remain honest about what v1 does and does not enforce. |
| T5 Completeness & testability | 15 | 96 | 14.40 | UT-0871's design is right: it asserts set **equality both ways**, so it catches both the missing-shim-member drift (silent runtime crash) and the phantom-shim-member drift (a shim promising an API the SDK lacks). Mutation-tested per block, not just in aggregate. Its docstring is honest about *why* it exists (two prior drifts named). No placeholders in the new text. Residual: the `PartyCreationService` block is unguarded (ISS-C3-01, Low). |
| T6 Convention compliance | 10 | 97 | 9.70 | ISS-C2-03 fully closed: fix-with-its-proof in 3a273a1, docs in f70292a, both Conventional Commits, the fix commit referencing `US-0024 US-0025 US-0073`, no cross-role artifact contamination, and a working tree containing only reviewer-owned files. §8 branch parenthetical verified against `git branch --show-current`. Trivial noise only: 3a273a1 also carries `apps/web/tsconfig.tsbuildinfo`, a pre-existing tracked build artifact — not introduced by this drop and not a finding. |
| **Total** | **100** | — | **96.85% ≈ 97%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C3-01 | **Low** | T2, T5 | `apps/web/test/sdk-types-sync.test.ts` (UT-0871, lines 44–55); `apps/web/types/trumocracy-sdk.d.ts` — `export class PartyCreationService` block | UT-0871 guards the `IPartyStore` interface and the `InMemoryPartyStore` class against the JSDoc typedef, which is the seam that drifted twice and the right place to start. The **`PartyCreationService`** declaration in the same shim — the other surface `apps/web` codes against, and the one that gained six methods in the v2.3.0 membership drop — is not covered by any guard. I checked it independently and it is **currently in sync**: 13 public methods implemented in the JS class, 13 declared in the shim, with no member on either side that the other lacks. So this is a *residual exposure*, not a live defect: the same class of drift could recur on the service surface and would again be caught only by a human reviewer. | Extend UT-0871 (or add a sibling case) to assert the `PartyCreationService` shim member set equals the public method set of the JS class, using the same both-ways set equality. Purely additive hardening; no production-code change. **Non-blocking** — this may be scheduled at the enrolment sprint rather than gating the current drop. |

> **Low** issues do not block the pass bar. There are **no** Critical, High, or Medium issues.

### 4.1 Cycle-2 issues — closure verification (all three closed)

| Cycle-2 ID | Severity | Claimed fix | Independently verified | Status |
|---|---|---|---|---|
| ISS-C2-01 | Medium | `.d.ts` synced in both blocks + UT-0871 drift guard | `git show 3a273a1 -- apps/web/types/trumocracy-sdk.d.ts` shows `findPetitionsPastClose(now: number): object[];` added at **both** insertion points (interface after `archivePetition`, class after `archivePetition`). Member-set diff: JSDoc **22** / interface **22** / class **22**, set-equal both ways. UT-0871 present, 1 test, passing. **Mutation-tested in a scratch copy:** removing the method from the interface block alone → interface assertion fails, class assertion still passes (per-block detection confirmed); adding a phantom JSDoc member → reverse direction fails. | **Closed** |
| ISS-C2-02 | Low | §5.0 v2.0.1 → PASS (97%); v2.1.0 tail annotated | §5.0 line 475 now reads "PASS (97%). Approved. (Line previously read 'pending' — stale; corrected at v2.3.2.)" — matches the metadata block in `06-coding-and-ut-v2.0.1-technical-cycle2.md` (Score 97%, Verdict PASS). Line 474 now ends "the cycle-2 review of that rework passed (v2.2.0 cycle 2, above — PASS 97%). (Tail previously read 'merge sign-off withheld pending cycle-2 review' — resolved; corrected at v2.3.2.)" Every §5.0 line now matches a real file in `artifacts/reviews/`. | **Closed** |
| ISS-C2-03 | Low | Atomic fix commit + companion docs commit | `git log --stat -2`: **3a273a1** = 6 files (`sdk-types-sync.test.ts`, `trumocracy-sdk.d.ts`, `party-creation.js`, `membership.test.js`, `party-creation.test.js`, `tsconfig.tsbuildinfo`) — the fix and its proof together, no foreign artifacts; **f70292a** = `docs/06-coding-and-ut.md` only. Both Conventional Commits; 3a273a1 references `US-0024 US-0025 US-0073`. `git status --short` shows only `artifacts/memory-index.json` (M) and my two untracked reviewer files. | **Closed** |

### 4.2 Earlier issues — still closed (regression check)

| Origin | Issue | Re-verified this cycle |
|---|---|---|
| v2.3.0 cycle 1, ISS-01 | `expirePetitions` private-state reach | Still routed through `findPetitionsPastClose`; UT-0831 present and passing (sdk `party-creation.test.js` = 38 tests) |
| v2.3.0 cycle 1, ISS-02 | §8 stale branch name | §8 reads `build/v1-join-membership`; `git branch --show-current` agrees |
| v2.3.0 cycle 1, ISS-03 | O(n²) `membershipHistory` fold | Per-party open-row `Map`, single O(n) pass; membership suite 22 tests green |
| v2.3.0 cycle 1, ISS-04 | UT-0822 nested in UT-0821 | Own `describe` block; count unchanged |
| v2.2.0 cycle 2, ISS-05 | `Date.now()` header overclaim | Header still correctly qualified to the injected-clock fallback |

---

## 5. Independent verification evidence (code-drop review bar, Doc 06 §4a)

All commands run by the reviewer from the repo root on **2026-08-29**, at HEAD **f70292a**
(working tree clean of product code — only reviewer artifacts outstanding).

**`npm test` — exit code 0, 542 passed, 0 failed:**

```
@trumocracy/contracts   Test Files  5 passed (5)    Tests   95 passed (95)     56.92s
@trumocracy/protocol    Test Files  3 passed (3)    Tests  126 passed (126)    405ms
@trumocracy/sdk         Test Files 11 passed (11)   Tests  220 passed (220)    1.02s
@trumocracy/ui          Test Files  1 passed (1)    Tests   14 passed (14)     832ms
@trumocracy/indexer     Test Files  1 passed (1)    Tests   16 passed (16)     388ms
@trumocracy/web         Test Files  4 passed (4)    Tests   71 passed (71)     2.63s
[exited with code 0]
```

Web package per-file (the new file is the first line):

```
✓ test/sdk-types-sync.test.ts     (1 test)     3ms      ← UT-0871
✓ test/safety-surfaces.test.tsx   (16 tests)   290ms
✓ test/party-creation.test.tsx    (27 tests)   661ms
✓ test/join-membership.test.tsx   (27 tests)   1466ms
```

SDK per-file (unchanged from cycle 2): `membership.test.js` **22**, `party-creation.test.js` **38**.

Total 95 + 126 + 220 + 14 + 16 + 71 = **542**. §3's table sums to **542**, and each subtotal note
reconciles: protocol 82+44=126 · sdk 124+36+38+22=220 · web 16+27+27+1=71. Exact match.

**`npm run lint:deps` — exit code 0:**

```
> trumocracy@0.1.0 lint:deps
> node tools/dep-guard/check.mjs

dep-guard: 7 workspace package(s) checked — layering OK
```

**`npx tsc --noEmit` in `apps/web` — exit code 0, no output.**

**`npx tsc --noEmit` in `packages/ui` — exit code 0, no output.**

**`git branch --show-current`** → `build/v1-join-membership` (confirms §8).

**Type-shim sync check (the ISS-C2-01 closure evidence):**

```
BASELINE  jsdoc=22 iface=22 class=22
  iface==jsdoc: true   class==jsdoc: true
  findPetitionsPastClose in jsdoc/iface/class: true true true
```

**Mutation test of the UT-0871 guard** (run against file *copies* in a scratch directory; the
repository was not modified):

```
MUT-A (remove findPetitionsPastClose from the INTERFACE block only)
  iface==jsdoc: false (expect false)   class==jsdoc: true (expect true)
MUT-B (add a phantom member to the JSDoc typedef)
  jsdoc count 23; iface==jsdoc: false (expect false)
```

The guard fails on reintroduced drift, discriminates per block, and catches the reverse direction.
It is a real guard.

**Unreported-surface probe (basis for ISS-C3-01)** — `PartyCreationService` shim vs implementation:

```
JS impl   (13): IS_INSECURE_MOCK, activateParty, activeMembership, contributeToStrength,
                countingStatus, createDraft, expirePetitions, joinParty, leaveParty,
                membershipHistory, partyStatus, publishDraft, recordLegalRegistration
shim decl (13): (identical set)
IMPLEMENTED but NOT declared: []
DECLARED but NOT implemented: []
```

Remaining §4a bars — IS_INSECURE_MOCK discipline, jargon filter, no out-of-scope feature, honesty
copy, capability-absence tests, clause-7 backing-aware tests — are unchanged by this rework (which
touches one declaration file, one new test, and the document) and remain as verified at cycles 1
and 2: `safety-surfaces.test.tsx` green (16 tests), no new user-facing strings, no new feature.

---

## 6. Routing instruction (to the owning role)

**PASS — the engineer sets Doc 06 `Status: Approved` and the SOP advances.** No new version is
required. Cycle 3 of 5; the loop closes here for this drop.

ISS-C3-01 is **Low and non-blocking** — it may be carried as a §7 limitation or scheduled as
additive test hardening; it does not require a v2.3.3.

**Carried forward to the downstream roles (not defects in this document):**

- **Product-owner:** a ruling is owed on Flag `FR-064-SEMANTICS` (§7 #20) — option **(a)** annotate
  FR-064 with the v1 explicit-leave posture, or **(b)** uphold auto-void-on-join as v1 semantics —
  recorded in Doc 02. Doc 06 correctly states the engineer cannot make this edit.
- **Tester (me), for the RTM (Doc 08):** the **FR-064 Must row must stay OPEN** until that ruling
  lands. An open Must row blocks Gate 2. I will map **UT-0871** into the RTM against the FR-013
  petition-expiry path and the DES-097 persistence seam it protects.
- **reviewer-qa:** merge sign-off is now unblocked *by this loop* — the Doc 06 review loop has
  passed. Sign-off still requires reviewer-qa's own independent security scan and RTM zero-gaps
  verification. The engineer never merges their own work.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — verdict is PASS at cycle 3 of 5. The cap was not reached and no human decision is
required or recorded.
