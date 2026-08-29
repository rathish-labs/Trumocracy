# Document Review Report — Doc 06 Coding & UT v2.3.3 (+ code drop) — technical, cycle 1

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **tester**, acting as neutral reviewer — **NOT** the document owner (the engineer owns
> Doc 06). The reviewer scores and lists issues only; it never edits the document or any product code.
> All rework is done by the **owning role** (engineer) as a new version.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.3.3
Review mode: technical
Reviewer role: tester (neutral — engineer owns Doc 06)
Score: 98%
Critical: 0
High: 0
Medium: 0
Low: 0
Cycle: 1 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 06 v2.3.3 is a **recorded-decision closure with no code change**, and it is exactly that — I
verified the "no code change" claim mechanically rather than accepting it.

**No code changed since the v2.3.2 I passed at cycle 3.** `git diff --stat 997b2dc..HEAD` touches
four files, all under `docs/` or `artifacts/`; filtering the changed-file list for anything outside
those two trees returns **nothing**. The only uncommitted working-tree changes are
`docs/02-requirements-srs.md` and `docs/06-coding-and-ut.md` — the two documents under review. So
the drop I passed at 97% three cycles ago is byte-identical, and the v2.3.3 delta is confined to
prose.

I nevertheless **re-ran the full suite** this cycle rather than relying only on the no-delta
argument, because the document makes a positive numeric claim ("suite remains 542"). It does:
**542 passed, 0 failed, exit 0** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 ·
web 71. The claim is verified first-hand for this version, not inherited.

**§7 #20 is correctly rewritten from TRACKED DECISION to RESOLVED (a).** Every claim in it checks
out against Doc 02 v2.15.0: FR-064's text *is* amended at **§4.6** (I confirmed the section heading
directly above the amended row is "4.6 Membership: open onboarding and equal standing"); the
auto-void wording *is* superseded and annotated in place rather than deleted; automatic voidance and
the bypass-proof nullifier *are* deferred to **DES-065** at the v2 seam swap. The ruling provenance
(option (a), Rathish, Human Approver, 2026-08-29) matches Doc 02's record exactly, and the item
retains its full history line — raised v2.3.0, tracked at v2.3.1, resolved at v2.3.3.

**The claim "No code change required: the drop already implements the ruled semantics" is true**,
and I checked it at the assertion level: UT-0821 asserts `ALREADY_MEMBER_ELSEWHERE` with
`currentPartyId` and a message containing "explicit, recorded action" — that *is* option (a). The
ruling ratified what was built; it did not ask for anything new.

**The two bookkeeping habits this document was faulted for in earlier cycles are both honoured
here.** §5.0 now records my cycle-3 verdict accurately — **PASS (97%, 0C/0H/0M/1L), Approved
2026-08-29** — and, rather than quietly dropping the surviving Low, it names **ISS-C3-01** and
carries it as an explicit non-gating backlog item with its correct description ("extend UT-0871 to
the `PartyCreationService` shim block — additive hardening; verified in sync at review time"). That
is the opposite of the stale-record defect cycles 1 and 2 found in this same section. I re-checked
that surface: **13 methods implemented / 13 declared, both difference sets empty** — still in sync,
so ISS-C3-01 remains a residual exposure rather than a live defect, exactly as the document says.

**Sweep for stale language: clean.** Every remaining "tracked decision" / "ruling owed" /
"auto-void" mention in the file sits in a **historical changelog entry** describing the v2.3.0 or
v2.3.1 state at the time. No live section still presents FR-064 as an open decision.

**Verdict: PASS** — 98%, zero issues at any severity. The engineer should set `Status: Approved`;
the SOP advances.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (`98%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — both rows are all "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.40 | A decision closure changes no coverage, and none is claimed. §7 #20 now reflects the resolved requirement and — the part that matters for a gate reviewer — states plainly that **the RTM's FR-064 Must row REMAINS OPEN pending the DES-065 build**. A weaker document would have let "RESOLVED" imply "closed". This one draws the line in the right place, twice (change history and §7). |
| T2 Soundness | 20 | 98 | 19.60 | The "no code change required" claim is correct and independently verified two ways: mechanically (no non-`docs/`/`artifacts/` file changed since 997b2dc) and semantically (UT-0821's assertions *are* option (a)). The DES-065 deferral is architecturally coherent as stated — v1 explicit-leave is a genuine subset of v2 cryptographic one-active-membership, so layering the nullifier later does not invalidate the event log or any existing test. |
| T3 Traceability & IDs | 20 | 98 | 19.60 | §5.0 records the cycle-3 PASS accurately (97%, 0C/0H/0M/1L) and **carries ISS-C3-01 explicitly** instead of dropping it — directly addressing the failure mode cycles 1 and 2 caught in this section. Cross-reference to Doc 02 **v2.15.0 §4.6** verified correct down to the section number. Suite count correctly left at 542; §3 untouched, which is right since no test changed. Full history line preserved on §7 #20 (raised → tracked → resolved). No IDs minted or renumbered. |
| T4 Security & failure modes | 15 | 97 | 14.55 | No new failure modes introduced. The residual limitation is correctly **retained in §7** rather than removed with the flag: v1 still has no auto-void and no bypass-proof nullifier, and §7 is the right home for that. Keeping the item in the limitations list — with "RESOLVED" scoped precisely to the *flag*, not to the limitation — prevents a reader from concluding the gap is gone. |
| T5 Completeness & testability | 15 | 97 | 14.55 | No test change was needed and none was made. I re-ran the full suite for this cycle: **542/542, exit 0**, matching §3 and the change-history claim. The carried Low's surface re-checked and still in sync (13/13). No placeholders anywhere in the new text. |
| T6 Convention compliance | 10 | 98 | 9.80 | Patch bump 2.3.2 → 2.3.3 is the right size for a documents-only decision closure with no code, test or count change. `Status` correctly moved Approved → **In Review** for the new version, with v2.3.2's approval preserved in §5.0 rather than lost. Change-history entry carries full ruling provenance and ISO-8601 dates. |
| **Total** | **100** | — | **97.50% ≈ 98%** | — |

---

## 4. Issues (every issue severity-classified and located)

**None.** No Critical, High, Medium or Low issues were found in v2.3.3.

I looked specifically for the defect classes that have actually bitten this document before, and for
the ones a decision-closure version invites:

| Probe | What I checked | Result |
|---|---|---|
| Stale review record (the cycle-1 and cycle-2 defect) | §5.0 line for v2.3.2 against my own cycle-3 report's metadata block | Accurate — PASS 97%, 0C/0H/0M/1L, Approved 2026-08-29 |
| Silently dropped Low | Whether ISS-C3-01 survived the version bump | Carried explicitly, named, with correct description and non-gating status |
| Overclaim on the carried Low | Whether "verified in sync at review time" is still true | True — `PartyCreationService` shim 13 impl / 13 decl, both diff sets empty |
| Undisclosed code change | `git diff --name-only 997b2dc..HEAD` filtered for non-`docs/`/`artifacts/` paths | Empty — docs and artifacts only |
| Numeric claim ("suite remains 542") | Full `npm test` re-run this cycle | 542 passed, 0 failed, exit 0 |
| Cross-document claim | §7 #20's citation of Doc 02 v2.15.0 §4.6 | Correct, including the section number |
| Stale "open decision" language elsewhere | Grep for `FR-064` / `auto-void` / `TRACKED DECISION` / `ruling owed` / `decision required` | All remaining hits are historical changelog entries describing past states |
| "RESOLVED" hiding a live gap | Whether the RTM row is falsely implied closed | Explicitly stated OPEN, in both the change history and §7 #20 |

> A clean report is a finding, not an absence of one. This is a small, well-scoped, documents-only
> change whose every factual claim I was able to confirm from a primary source. Manufacturing a Low
> to make the score look harder-won would be inventing an issue, which the rubric forbids as firmly
> as it forbids inflating a score.

---

## 5. Independent verification evidence

All commands run by the reviewer from the repo root on **2026-08-29**, with `docs/02` and `docs/06`
modified in the working tree and HEAD at `caef333`.

**No code delta since the cycle-3 review baseline (`997b2dc`):**

```
$ git diff --stat 997b2dc..HEAD
 artifacts/memory-index.json         |  80 +++++++++++++++++
 artifacts/tester-2026-08-29T0530.md | 148 ++++++++++++++++++++++++++++++
 docs/07-test-cases-suites.md        | 173 ++++++++++++++++++++++++++++++----
 docs/08-traceability-matrix.md      |  48 +++++-----

$ git diff --name-only 997b2dc..HEAD | grep -vE '^(docs/|artifacts/)'
(none — docs/ and artifacts/ only)

$ git status --short
 M docs/02-requirements-srs.md
 M docs/06-coding-and-ut.md
```

**`npm test` — exit code 0, 542 passed, 0 failed (re-run for this cycle):**

```
contracts   Test Files  5 passed (5)     Tests   95 passed (95)
protocol    Test Files  3 passed (3)     Tests  126 passed (126)
sdk         Test Files 11 passed (11)    Tests  220 passed (220)
ui          Test Files  1 passed (1)     Tests   14 passed (14)
indexer     Test Files  1 passed (1)     Tests   16 passed (16)
web         Test Files  4 passed (4)     Tests   71 passed (71)
[exited with code 0]
```

95 + 126 + 220 + 14 + 16 + 71 = **542**, matching §3's table and the v2.3.3 change-history claim.

**Carried Low (ISS-C3-01) surface re-check — still in sync:**

```
ISS-C3-01 surface (PartyCreationService shim) — impl 13 / decl 13
  impl-not-declared: []
  declared-not-impl: []
```

**§7 #20 claims cross-checked against Doc 02 v2.15.0:** FR-064 amended at §4.6 (heading confirmed);
auto-void wording superseded and annotated in place, not deleted; auto-void + nullifier deferred to
DES-065 at the v2 seam swap; ruling recorded as option (a), Rathish, Human Approver, 2026-08-29;
RTM FR-064 Must row stated OPEN. **All confirmed.**

The remaining §4a bars (dep-guard, `tsc --noEmit`, IS_INSECURE_MOCK discipline, jargon filter,
capability-absence tests) are unchanged by a documents-only version and were verified green at
cycle 3 against the identical code.

---

## 6. Routing instruction (to the owning role)

**PASS — the engineer sets Doc 06 `Status: Approved` and the SOP advances.** No new version is
required. Cycle 1 of 5; the loop closes here for this version.

**Carried forward (not defects in this document):**

- **ISS-C3-01 (Low, from cycle 3)** remains open as non-gating backlog: extend UT-0871 to the
  `PartyCreationService` shim block. Verified in sync again this cycle, so it stays a residual
  exposure rather than a live defect. No version needs to be cut for it.
- **Tester (me), Doc 08:** the FR-064 Must row **stays OPEN**. This ruling closes the *semantics*
  half of gap-log entry 55; the **DES-065** half remains, and my next Doc 08 version will record the
  split rather than closing the row. Doc 06 and Doc 02 both state this correctly and consistently.
- **Architect:** DES-065 (the v2 membership-scope nullifier FR-064's Must row waits on) and the
  FR-130 provisional-cap DES routed in Doc 02 §13(e).
- **reviewer-qa:** merge sign-off still requires its own independent security scan and RTM
  zero-gaps verification. The engineer never merges their own work.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — verdict is PASS at cycle 1 of 5. The cap was not reached and no human decision is
required or recorded here. (The FR-064-SEMANTICS approver ruling this version closes is a separate,
upstream decision, recorded in the document itself.)
