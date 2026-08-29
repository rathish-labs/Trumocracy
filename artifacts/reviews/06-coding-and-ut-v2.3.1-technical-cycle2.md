# Document Review Report — Doc 06 Coding & UT v2.3.1 (+ code drop) — technical, cycle 2

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **tester**, acting as neutral reviewer — **NOT** the document owner (the engineer owns Doc 06).
> The reviewer scores and lists issues only; it never edits the document or any product code.
> All rework is done by the **owning role** (engineer) as a new version.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.3.1
Review mode: technical
Reviewer role: tester (neutral — engineer owns Doc 06)
Score: 92%
Critical: 0
High: 0
Medium: 1
Low: 2
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 06 v2.3.1 is a genuine rework, not a paper one. **All four cycle-1 issues are closed and each
was verified against the code, not against the document's claim about the code:**

- **ISS-01 (Medium, cycle 1) — closed in the JS.** `findPetitionsPastClose(now)` is declared on the
  `IPartyStore` `@typedef` (`packages/sdk/src/party-creation.js:113`), implemented in
  `InMemoryPartyStore` (`:311–319`), and `expirePetitions()` now iterates it (`:748–758`). I
  enumerated **every** `this._store.*` call site in the service — 22 distinct methods, all of them
  declared on the typedef. **No private-state access remains anywhere in `packages/sdk/src`**
  (`grep this._store._` → no matches). The new regression test **UT-0831** is the right shape: an
  interface-only facade built from exactly the typedef method list, delegating to a real store,
  injected into `PartyCreationService`; a renewed reach into `_petitions` would find `undefined` on
  the facade and fail the test. The seam break can no longer be silent.
- **ISS-02 (Low) — closed.** §8 reads `build/v1-join-membership`; `git branch --show-current`
  returns `build/v1-join-membership`.
- **ISS-03 (Low) — closed.** `membershipHistory()` (`:963–982`) replaces the per-LEAVE `rows.find()`
  with a per-party open-row `Map` — one O(n) pass. Behaviour is identical under the
  one-active-party invariant (at most one open row per party, so `find`-first and `Map.get`-last
  select the same row); the 22 membership tests still pass unchanged.
- **ISS-04 (Low) — closed.** UT-0822 is now its own `describe` block in `membership.test.js`; the
  test count is unchanged at 22.

The code-drop review bar (§4a) is met and independently verified: **541 tests pass, zero failures**
(contracts 95 / protocol 126 / sdk 220 / ui 14 / indexer 16 / web 70) — matching §3 **exactly, row
by row**, including the SDK 124+36+38+22 and web 16+27+27 decompositions. Dep-guard clean. `tsc
--noEmit` exits 0 in both `apps/web` and `packages/ui`. §5.0's corrected v2.2.0 line is accurate
(the cycle-2 report exists and reads PASS 97%). §7 #20 is now a properly-formed tracked decision
(Flag: `FR-064-SEMANTICS`) that names both options, gives an engineer recommendation, and — the
part that matters — explicitly states the FR-064 Must row must not be closed on this drop alone.
The v2.2.0 carried Low (the `Date.now()` header overclaim) is also fixed: the header now qualifies
the claim to the injected-clock fallback.

**One new Medium blocks the pass bar.** The ISS-01 remediation stopped at the JavaScript boundary.
`apps/web/types/trumocracy-sdk.d.ts` — the ambient TypeScript contract `apps/web` actually consumes
— still declares `IPartyStore` and `InMemoryPartyStore` with **21** methods; the JSDoc typedef and
the UT-0831 facade both carry **22**. `findPetitionsPastClose` is missing from both TS blocks. A
TypeScript-authored store would satisfy the declared interface, typecheck clean, and then throw
`TypeError: this._store.findPetitionsPastClose is not a function` the first time `expirePetitions()`
runs. This is the identical drift class that v2.3.0 tracked and fixed for `archivePetition(id, now)`,
and the v2.3.1 change history does not mention the `.d.ts` at all. The interface fix is only fixed
on one side of the language seam.

Two Low issues (a second stale "pending" left in the §5.0 review record; commit hygiene on 4148498)
do not block the bar.

**Verdict: FAIL** — one Medium present, and the score (92%) is below the 95% bar.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`92%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No** (1 Medium)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 96 | 19.20 | No coverage regression from the rework. FR-020/021/022/064/122/123/130/131(b)/(d) remain implemented and tested; 541 tests green. FR-064's semantic divergence is not a coverage gap — it is a documented, tracked decision (§7 #20) that correctly withholds the Must-row closure. |
| T2 Soundness | 20 | 88 | 17.60 | ISS-01 architecturally correct in JS: interface method added, all 22 service→store calls are declared methods, zero private-state access remains. ISS-03 fold is behaviour-identical and now O(n). **ISS-C2-01 (Medium)**: the same interface is declared two ways — 22 methods in the JSDoc typedef, 21 in the shipped `.d.ts` — so the seam contract is inconsistent across the JS/TS boundary and the fix is incomplete on the side `apps/web` compiles against. |
| T3 Traceability & IDs | 20 | 93 | 18.60 | §3 reconciles **exactly** to the measured suite: 41+41+44+25+11+34+12+16+13+16+14+36+38+22+27+27+124 = 541, and every per-package subtotal matches `npm test` output. UT-0831 added to the correct range row and given its own `describe`; UT-0822 promoted, so both RTM traces are now unambiguous. **ISS-C2-02 (Low)**: §5.0 still carries a stale "pending" for v2.0.1 cycle 2 (a PASS 97% report exists on disk) and a stale "merge sign-off withheld pending cycle-2 review" on the v2.1.0 line — the same stale-record defect the engineer corrected for v2.2.0 in this very version, left uncorrected one line below. |
| T4 Security & failure modes | 15 | 92 | 13.80 | IS_INSECURE_MOCK discipline intact (store true → service delegates → CI gate). The ISS-01 fix converts a **silent** production no-op into a loud contract call, which is the right direction, and UT-0831 locks it. §7 #20/#21/#22 are honest about what v1 does and does not enforce. Deduction: because the `.d.ts` under-declares the interface, the new failure mode (a conforming-by-TS store that lacks the method) is neither declared nor covered. |
| T5 Completeness & testability | 15 | 90 | 13.50 | UT-0831 is a well-designed regression test — it asserts the *property* (interface-only reachability), not the incident, so it also catches future private-state reaches on the createDraft/publishDraft/expirePetitions path. Suite green, no placeholders in the new text. Deduction: nothing asserts that the `.d.ts` declaration matches the JSDoc typedef, which is exactly how ISS-C2-01 escaped both the author and `tsc`. |
| T6 Convention compliance | 10 | 90 | 9.00 | §8 branch parenthetical corrected and verified against `git branch --show-current`. Conventional Commits with `US-####` refs on the feature commits; the fix commit carries the issue ref. **ISS-C2-03 (Low)**: commit 4148498 bundles the ISS-01 code fix with the tester's cycle-1 review report, tester memory note and `memory-index.json`, and does **not** contain UT-0831 — so the commit is not atomically revertible per §8, and the fix is committed while the test that proves it is not. |
| **Total** | **100** | — | **91.70% ≈ 92%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C2-01 | **Medium** | T2, T4, T5 | `apps/web/types/trumocracy-sdk.d.ts` — `export interface IPartyStore` (lines 113–135) and `export class InMemoryPartyStore implements IPartyStore` (lines 141–163); Doc 06 change history v2.3.1 (no `.d.ts` mention); Doc 06 §7 (absent) | The ISS-01 remediation added `findPetitionsPastClose(now)` to the JSDoc `IPartyStore` typedef (`packages/sdk/src/party-creation.js:113`) and to `InMemoryPartyStore` (`:311`), and UT-0831 enumerates it as one of "exactly the 22 @typedef methods". The ambient TypeScript declaration that `apps/web` compiles against was **not** updated: both the `IPartyStore` interface and the `InMemoryPartyStore` class declaration list only **21** methods, omitting `findPetitionsPastClose`. Verified mechanically by diffing the two declarations: the only member present in the JSDoc typedef and absent from the `.d.ts` is `findPetitionsPastClose`. Consequence: a TypeScript-authored store (the DES-097 Postgres/API backing is exactly that) can `implements IPartyStore`, typecheck clean, and then throw `TypeError: this._store.findPetitionsPastClose is not a function` on the first `expirePetitions()` sweep. `tsc --noEmit` cannot catch it today only because nothing in `apps/web` currently implements the interface in TS. This is the same drift class that v2.3.0 explicitly tracked and fixed for `archivePetition(id, now)` ("Types: trumocracy-sdk.d.ts updated … archivePetition(id, now) drift fixed"), and Doc 06 §2.4 makes the documented-JS-plus-declaration pattern a deliberate auditability choice — a declaration that no longer matches the implementation defeats it. | Add `findPetitionsPastClose(now: number): object[];` to **both** the `IPartyStore` interface (after line 125) and the `InMemoryPartyStore` class declaration (after line 153) in `apps/web/types/trumocracy-sdk.d.ts`, and record the `.d.ts` update in the v2.3.2 change history. **Strongly recommended** (this is the third recurrence of type drift on this seam): add a guard so the drift cannot recur silently — either a test that asserts the `.d.ts` `IPartyStore` member set equals the JSDoc typedef member set, or reuse UT-0831's `IPARTY_STORE_METHODS` list as the single source of truth and assert `InMemoryPartyStore` exposes exactly it. Without a guard, the next interface method drifts the same way. |
| ISS-C2-02 | **Low** | T3 | Doc 06 §5.0, review-history bullets for **v2.1.0 cycle 1** and **v2.0.1 cycle 2** | v2.3.1 corrected the stale "pending" on the v2.2.0 line but left two adjacent records stale. (a) The v2.0.1 line reads "— pending", yet `artifacts/reviews/06-coding-and-ut-v2.0.1-technical-cycle2.md` exists on disk and records **PASS (97%, reviewer-qa, 0C/0H/0M/1L)**. (b) The v2.1.0 line ends "merge sign-off withheld pending cycle-2 review", but that cycle-2 review ran and passed (the v2.2.0 cycle-2 report, PASS 97%) — the clause is no longer true. §5.0 is the document's own audit trail of what has and has not been independently reviewed; a gate reviewer reading it would under-count the passing reviews. (Error direction is conservative — it understates rather than overstates — which is why this is Low, not Medium.) | Update the v2.0.1 bullet to "PASS (97%, 0C/0H/0M/1L, reviewer-qa) — one Low: v2.0.1 dated before its v2.0.0 base", and drop or amend the stale trailing clause on the v2.1.0 bullet. While there, sweep the whole of §5.0 against `ls artifacts/reviews/06-*` once, rather than line by line, so this class of staleness is closed in one pass. |
| ISS-C2-03 | **Low** | T6 | `git show 4148498 --stat`; Doc 06 §8 ("Small, reversible commits") and v2.3.1 change history ("code fix committed 4148498") | The ISS-01 fix commit 4148498 also contains `artifacts/reviews/06-coding-and-ut-v2.3.0-technical-cycle1.md`, `artifacts/tester-2026-08-28T1000.md` and `artifacts/memory-index.json` — another role's session artifacts — so reverting the code fix would also revert the cycle-1 review record and the tester's memory note. §8 requires each commit to "represent one logically atomic change that can be reverted without undoing adjacent work". Separately, the regression test that makes the ISS-01 fix durable (**UT-0831**) is **not** in that commit and is still uncommitted in the working tree, alongside the ISS-03/ISS-04 fixes and Doc 06 v2.3.1 itself — so the shipped commit history currently contains the fix without its proof. (Reviewing an uncommitted working-tree drop is established practice here — the v2.0.1 cycle-2 review did the same — so the uncommitted state is not itself the finding.) | Commit the remaining v2.3.1 work as small atomic commits — e.g. `test(membership): UT-0831 interface-only store facade regression (ISS-01)`, `refactor(membership): O(n) membershipHistory fold (ISS-03)`, `test(membership): UT-0822 own describe block (ISS-04)`, `docs(coding-ut): Doc 06 v2.3.2` — and keep another role's `artifacts/` out of engineer code commits in future. No code behaviour change required. |

> **Low** issues do not block the pass bar. **ISS-C2-01 (Medium)** forces the FAIL.
>
> Issue IDs are prefixed `ISS-C2-` to keep them distinct from cycle 1's `ISS-01..ISS-04`, which
> Doc 06's change history already cites by bare number.

### 4.1 Cycle-1 issues — closure verification (all four closed)

| Cycle-1 ID | Severity | Claimed fix | Independently verified | Status |
|---|---|---|---|---|
| ISS-01 | Medium | `findPetitionsPastClose` on `IPartyStore`; `expirePetitions()` routed through it; UT-0831 regression | `party-creation.js:113` (typedef), `:311–319` (impl), `:748–758` (service). All 22 `this._store.*` call sites are declared typedef methods; `grep this._store._` → no matches. UT-0831 present, passes, facade lists exactly the 22 typedef methods. | **Closed** in JS (see ISS-C2-01 for the TS half) |
| ISS-02 | Low | §8 branch → `build/v1-join-membership` | §8 text matches `git branch --show-current` output `build/v1-join-membership` | **Closed** |
| ISS-03 | Low | O(n) per-party open-row Map fold | `party-creation.js:963–982`; `git diff` confirms `rows.find()` → `openByParty` Map; behaviour identical under the one-active-party invariant; 22 membership tests unchanged and green | **Closed** |
| ISS-04 | Low | UT-0822 promoted to its own `describe` | `membership.test.js:173–178`; `git diff` confirms the promotion; suite still reports 22 tests in that file | **Closed** |

### 4.2 Carried Low from the v2.2.0 cycle-2 review — also closed

| Prior ID | Finding | Status |
|---|---|---|
| v2.2.0 ISS-05 (Low) | File header claimed "no `Date.now()` anywhere in the file" while the constructor default contained it | **Closed** — the header (`party-creation.js:18–22`) now reads "No call to `Date.now()` exists in `InMemoryPartyStore` methods or service business logic; the constructor … falls back to `() => Math.floor(Date.now()/1000)` only when no clock is injected". Accurate. |

---

## 5. Independent verification evidence (code-drop review bar, Doc 06 §4a)

All commands run by the reviewer from the repo root on **2026-08-29**, against the working tree
(HEAD = 4148498 plus the uncommitted v2.3.1 changes to `party-creation.js`, `party-creation.test.js`,
`membership.test.js`, `docs/06-coding-and-ut.md`).

**`npm test` — exit code 0, 541 passed, 0 failed:**

```
@trumocracy/contracts   Test Files  5 passed (5)    Tests   95 passed (95)     56.51s
@trumocracy/protocol    Test Files  3 passed (3)    Tests  126 passed (126)    475ms
@trumocracy/sdk         Test Files 11 passed (11)   Tests  220 passed (220)    865ms
@trumocracy/ui          Test Files  1 passed (1)    Tests   14 passed (14)     1.13s
@trumocracy/indexer     Test Files  1 passed (1)    Tests   16 passed (16)     399ms
@trumocracy/web         Test Files  3 passed (3)    Tests   70 passed (70)     2.68s
[exited with code 0]
```

SDK per-file (relevant to this rework): `test/membership.test.js` **22 tests**,
`test/party-creation.test.js` **38 tests** — both exactly as §3 claims.
Total 95 + 126 + 220 + 14 + 16 + 70 = **541**. §3's table sums to **541**. Match.

**`npm run lint:deps` — exit code 0:**

```
> trumocracy@0.1.0 lint:deps
> node tools/dep-guard/check.mjs

dep-guard: 7 workspace package(s) checked — layering OK
```

**`npx tsc --noEmit` in `apps/web` — exit code 0, no output.**

**`npx tsc --noEmit` in `packages/ui` — exit code 0, no output.**

**`git branch --show-current`** → `build/v1-join-membership` (confirms §8, ISS-02 closed).

**Interface-drift check (the basis for ISS-C2-01):** diffing the `IPartyStore` member set in the
JSDoc typedef against the member set in `apps/web/types/trumocracy-sdk.d.ts` yields exactly one
member present in the JSDoc and absent from the `.d.ts`: **`findPetitionsPastClose`**. No member is
present in the `.d.ts` and absent from the JSDoc.

Remaining §4a bars — IS_INSECURE_MOCK discipline, jargon filter, no out-of-scope feature, honesty
copy, capability-absence tests, clause-7 backing-aware tests — are unchanged by this rework (which
touches only `expirePetitions`, `membershipHistory`, two test files and the document) and remain as
verified at cycle 1: `safety-surfaces.test.tsx` green (16 tests), no new user-facing strings, no new
feature shipped.

---

## 6. Routing instruction (to the owning role)

**FAIL — route to the engineer (Doc 06 owner). Cycle 2 of 5; one cycle consumed, three remain.**

The engineer MUST produce a new version **v2.3.2** (patch bump — the fix is a declaration file
update plus documentation corrections; no feature change) with `Status: In Review`, addressing:

1. **ISS-C2-01 (Medium — required to reach the pass bar):** declare `findPetitionsPastClose` in both
   TS blocks of `apps/web/types/trumocracy-sdk.d.ts`, record the `.d.ts` update in the change
   history, and add a guard (test or shared method list) so JSDoc↔`.d.ts` drift on this seam cannot
   recur silently. This is the third drift on this interface; a guard is what stops a fourth.
2. **ISS-C2-02 (Low):** sweep §5.0 against `artifacts/reviews/06-*` in one pass and correct the two
   remaining stale records.
3. **ISS-C2-03 (Low):** commit the outstanding v2.3.1 work (UT-0831, the ISS-03 fold, the ISS-04
   describe promotion, Doc 06) as small atomic commits; keep other roles' `artifacts/` out of
   engineer code commits.

Lows 2 and 3 do not block the bar but should be resolved in the same rework pass, since a v2.3.2
that fixes only the Medium would leave the document's own audit trail wrong.

After rework, this loop re-reviews at **cycle 3**. The engineer NEVER merges their own work —
`reviewer-qa` signs the merge after independent RTM zero-gaps verification (Doc 08).

**Standing note for the RTM (Doc 08), unchanged from cycle 1 and reaffirmed by §7 #20:** the FR-064
Must row must **not** be closed on the strength of this drop. The tracked decision
(Flag: `FR-064-SEMANTICS`) is owed a product-owner ruling — option (a) annotate FR-064 with the v1
explicit-leave posture, or option (b) uphold auto-void-on-join as v1 semantics — recorded in Doc 02.
An open Must row blocks Gate 2.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5 with verdict FAIL, not ESCALATED. No human decision is
required or recorded at this cycle.
