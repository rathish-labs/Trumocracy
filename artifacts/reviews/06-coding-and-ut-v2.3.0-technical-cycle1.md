# Document Review Report — Doc 06 Coding & UT v2.3.0 (+ code drop)

> Produced by the **document-review** skill. Reviewer: tester (acting as neutral reviewer — NOT the document owner; engineer owns Doc 06).
> One report per review cycle. The reviewer scores and lists issues only; the document's owning role (engineer) does every rework as a new version.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.3.0
Review mode: technical
Reviewer role: tester (neutral — engineer owns Doc 06)
Score: 90%
Critical: 0
High: 0
Medium: 1
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 06 v2.3.0 records the join/membership feature drop (commits 40c7af2, d5c36e2, 38a4341 on branch `build/v1-party-creation`). The suite is green — 540 tests pass (contracts 95 / protocol 126 / sdk 219 / ui 14 / indexer 16 / web 70), verified independently by running `npm test`. Dep-guard passes. `tsc --noEmit` exits 0 in both `packages/ui` and `apps/web`. The IS_INSECURE_MOCK discipline is maintained throughout the new code. FR-131(d) four-clause notice (elements (i)–(iv)) is present, rendered before the refusal, and non-dismissable. The joinPrivate string has been corrected from the v2-only claim to the v1-accurate FR-131(b) disclosure. FR-064 semantic divergence (explicit-leave form vs auto-void text) is flagged in §7 #20 rather than silently reworked. All commissioned features (FR-020/021/022/064/130/122/123/131(b)/(d)) are implemented and tested.

One Medium defect blocks the pass bar: `PartyCreationService.expirePetitions()` accesses `this._store._petitions` directly — a private field of `InMemoryPartyStore` that is not part of the `IPartyStore` interface. In production with any non-`InMemoryPartyStore`, this silently resolves to an empty array (via optional chaining `?.`), causing no petitions ever to be expired. This seam break is not documented in §7 as a known limitation.

Three Low issues (stale branch name in §8; O(n²) membershipHistory fold undocumented; UT-0822 appears as an `it()` label inside UT-0821's `describe()` block rather than its own `describe()` block) do not block the pass bar.

**Verdict: FAIL** — Medium issue present and score (90%) below the 95% bar.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`90%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No** (1 Medium)
- **Verdict:** `FAIL` — both conditions fail (score below 95% and Medium issue present).

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 95 | 19.0 | All commissioned FRs covered by tests, verified by running the full suite. FR-020/021/022/064/130/122/123/131(b)/(d) all implemented and tested. |
| T2 Soundness | 20 | 80 | 16.0 | ISS-01 (Medium): expirePetitions breaks IPartyStore seam — accesses `._store._petitions` private field not in the interface; silent no-op in production. ISS-03 (Low): membershipHistory O(n²) fold undocumented. Otherwise the append-only log, per-call verifier pattern, and one-active-party invariant are architecturally correct. |
| T3 Traceability & IDs | 20 | 93 | 18.6 | Suite counts in §3 verified exactly against npm test output (95/126/219/14/16/70 = 540). Commit references US-0024/0025/0073/0133. ISS-04 (Low): UT-0822 placed as `it()` label inside UT-0821 describe block rather than its own describe block, making it ambiguous as a separately traceable RTM unit. |
| T4 Security & failure modes | 15 | 94 | 14.1 | IS_INSECURE_MOCK discipline correct: InMemoryPartyStore returns true, PartyCreationService delegates, demo page uses empty credential store for honest open-tier. FR-064 divergence flagged with Flag: FR-064-SEMANTICS. Verifier never held by service (structural FR-020 guarantee). |
| T5 Completeness & testability | 15 | 88 | 13.2 | Test suite comprehensive. Four-clause FR-131(d) notice tested (UT-0864). Seam spy tests confirm join/leave never call verifier (UT-0820, UT-0866). ISS-01: expirePetitions seam break is not covered by any test that would detect silent failure in production. ISS-03/ISS-04 (Low): O(n²) and UT ID placement undocumented. |
| T6 Convention compliance | 10 | 88 | 8.8 | Conventional Commits reference US-#### correctly. Arabic strings flagged for native review (§7 #17). ISS-02 (Low): §8 branch name stale (`build/v1-scaffold` vs actual `build/v1-party-creation`). |
| **Total** | **100** | — | **89.7% ≈ 90%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T2, T5 | `packages/sdk/src/party-creation.js` — `expirePetitions()` method (~line 735); Doc 06 §7 (absent) | `expirePetitions()` accesses `this._store._petitions?.keys()` directly. `_petitions` is a private `Map` on `InMemoryPartyStore`; it is not declared on the `IPartyStore` `@typedef` interface. Any production store that does not expose `_petitions` would cause optional chaining to return `undefined`, falling through to `?? []`, silently returning no expired petitions — the entire petition lifecycle maintenance sweep becomes a no-op. The code comment acknowledges "Production: a DB query with WHERE closesAt < now" but the interface has no corresponding method, and §7 does not list this as a known limitation. | Either (a) add a `findAllLivePetitions()` (or `findExpiredCandidates(before: number)`) method to the `IPartyStore` interface and implement it in `InMemoryPartyStore`, so `expirePetitions` only uses the declared interface; or (b) document this production gap explicitly in §7 as a new limitation and add a test that verifies the method is a no-op on a store without `_petitions`. A new §7 limitation alone (option b) satisfies the documentation half but does not fix the seam break. |
| ISS-02 | **Low** | T6 | Doc 06 §8 — branch model paragraph | §8 reads "(current: `build/v1-scaffold`)" but the current branch is `build/v1-party-creation`. This was the correct name at v2.0.0 but was not updated through successive versions. | Update the parenthetical to "(current: `build/v1-party-creation`)" or remove it, since this is a transient annotation. |
| ISS-03 | **Low** | T2, T5 | `packages/sdk/src/party-creation.js` — `membershipHistory()` method (~line 948–963); Doc 06 §7 (absent) | `membershipHistory()` folds the event log with `rows.find()` per LEAVE event, giving O(n²) worst case. For typical short histories this is negligible, but the same class of complexity concern (H-02 for `surgeActive`) was considered worth documenting in §7 for governance paths. `membershipHistory` is in a governance-critical reading path (displayed on the parties directory). | Add a Low §7 limitation noting the O(n²) fold, similar to the §7 #5 surgeActive note, so the architecture record is complete. No code change required at this severity, but the limitation should be honest. |
| ISS-04 | **Low** | T3, T5 | `packages/sdk/test/membership.test.js` — line 174 (`it('UT-0822 …')` inside `describe('UT-0821 …')`); Doc 06 §3 | UT-0822 is used as an `it()` label inside the `describe('UT-0821 …')` block. Per the §3 note convention, `UT-####` IDs cover `describe-block` units; placing UT-0822 as an `it()` label makes it ambiguous whether the RTM should trace to UT-0821 or UT-0822 for the double-join refusal case. The suite still passes and the 22-test count is correct. | Promote the UT-0822 `it()` to its own `describe('UT-0822 …')` block (containing the single `it()`), matching the convention for every other UT ID in this file. This preserves the test count and makes the RTM trace unambiguous. |

> **Low** issues do not block the pass bar. ISS-01 (Medium) forces FAIL.

---

## 5. Routing instruction (to the owning role)

**FAIL — route to the engineer (Doc 06 owner).**

The engineer MUST produce a new version **v2.3.1** (patch bump is appropriate: the Medium fix is either a new IPartyStore interface method + implementation, or a §7 documentation addition + test; no new feature) with `Status: In Review`. The new version must address ISS-01 (Medium — required to reach the pass bar). ISS-02, ISS-03, ISS-04 (all Low — do not block the bar but should be resolved in the same rework pass).

After rework, this review loop re-reviews at cycle 2. The engineer NEVER merges their own work; reviewer-qa signs the merge.

**Suite evidence (for the record):**
- `npm test` 2026-08-28: 540 tests, 0 failures — contracts 95, protocol 126, sdk 219, ui 14, indexer 16, web 70. Matches §3 exactly.
- `npm run lint:deps`: "dep-guard: 7 workspace package(s) checked — layering OK"
- `npx tsc --noEmit` in `apps/web`: exit 0
- `npx tsc --noEmit` in `packages/ui`: exit 0
