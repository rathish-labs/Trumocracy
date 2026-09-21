# Document Review Report — Doc 04 Test Strategy & Master Test Plan v1.7.0, technical, cycle 1

> Produced by the **document-review** skill. The reviewer **scores and lists issues only — it never
> edits the reviewed document**. Rework is the **architect's** (Ravi Deshmukh), as a new version.
> Independence: reviewer is the **tester** (Ji-woo Park, new instance), PM-assigned before dispatch
> per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md`. The reviewer owns neither
> Doc 03 nor Doc 04. §13 assigns the tester `OPEN-20` as an **action item**; being assigned an item
> is not authorship, and `OPEN-20` is untouched by this session and not ruled here.

```
Reviewed document: 04-test-strategy-master-plan.md
Document version: 1.7.0
Review mode: technical
Reviewer role: tester
Score: 94%
Critical: 0
High: 0
Medium: 1
Low: 2
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

v1.7.0 does the hard thing correctly: it **withdraws** the named `anon`-badge carve-out rather than
narrowing it, records the two strings as a *"ruled, remediation-pending failure, never an
exception"*, drops S5 rule 4's count from two to one, keeps S4's count at one, closes `OPEN-27` on
a ruling rather than on age, mints `OPEN-28/29/30` without reusing or renumbering any id, and —
the part that most documents get wrong — **cites Doc 03's ruling without re-reasoning it**. The
division of authority `OPEN-27` existed to protect is intact. I verified the sensitive claims
against HEAD rather than accepting them: the strings at `PrivacyStatus.tsx:251-252`, the six
non-render comments across five consuming files, the unimplemented `packages/ui` scan, the
`private_endorsement` ledger, and the suite at 640/640. All true.

The **FAIL is on exactly one thing**, and it is the one thing this document family keeps failing on.
The Status block and the changelog both claim the outcome is recorded *"at every site that carried
it"*, and the architect's own Doc 03 instruction enumerated five sites. There is a **sixth**:
**§11.2's tooling register row at line 2615** still reads *"Two carve-outs only: clause (a)'s
mandated negated forms, and the named `anon`-badge exception."* It is a live row in a live section,
describing the build-failing control S5 specifies, and it now directly contradicts S5 rule 4 — which
says in terms that these strings **MUST NOT** be recorded as an exception because *"an exception
asserts compliance and a failure asserts work."* That is "a correction that did not reach every
place it claimed to reach", by the document's own definition. Seven of eight named sites are clean;
this is the eighth that was never named.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 95 | 19.00 | FR-131 clause (e) and §8 Scenarios 8/9 correctly pinned at Doc 02 v2.17.3; S4's (a)–(d) notice range and S5's four rules preserved; origin (v2.17.0) and currency (v2.17.3) kept apart throughout. |
| T2 Soundness | 20 | 97 | 19.40 | The cite-don't-rule division is held perfectly. The retained lapse analysis is correctly characterised as still correct rather than quietly buried. "Not a build failure today" is **verified true** — the `packages/ui` scan is unimplemented and the component is unmounted. |
| T3 Traceability & IDs | 20 | 85 | 17.00 | `OPEN-27` closed, `OPEN-28/29/30` minted off a verified high-water mark, no reuse or renumber; all pins swept and independently verified. **ISS-01 lands here** and is the whole deduction. |
| T4 Security & failure modes | 15 | 96 | 14.40 | Gate posture inherited verbatim from `OPEN-27`; closing condition named as clause 10's five-condition render trigger; correctly refuses to make a build fail on copy no engineer has a story to change. |
| T5 Completeness & testability | 15 | 96 | 14.40 | The four-step "what the scan MUST do" is genuinely mechanical: in-scope-and-failing, don't fail a build today, assert the exact clause-10 strings including the fail-honest default, in every language, `ver` title unchanged in both directions. |
| T6 Convention compliance | 10 | 95 | 9.50 | Annotate-don't-delete observed throughout, including the one deletion (the stale "last Approved v2.16.3" clause), which is **named as a deletion**. ISO-8601, named owners, RFC 2119. |
| **Total** | **100** | — | **93.70 → 94%** | — |

## 4. Verification log — what I checked rather than accepted

| Claim (Doc 04 v1.7.0) | Method | Result |
|---|---|---|
| The eight `OPEN-27` sites are all brought into agreement | read each site | **7 of 8 correct** — S5 blockquote banner (1157), the "Until Doc 03 rules" tail (1231-1249), S5 rule 4 (1123, now **ONE**, with the v1.6.0 text retained verbatim below it), S4's sentence (1016-1024), §1.4's roll-call (1541), §13's bullets (2671-2684), §13's `OPEN-27` row (2715, CLOSED), §22's Approvals row (3014), and the `Source:` Doc 03 pin (303, → **v2.14.0 In Review**). **A ninth, unnamed site is stale — see ISS-01.** |
| S5 rule 4's count drops from two carve-outs to one | read line 1123 | **TRUE**, and S4's count is correctly left at one with the two reconciled as "the same one" |
| Doc 06 pin moved v2.7.0 In Review → **v2.8.1 Approved** at both live locations | `Source:` (327) and §1.4 (1518) | **TRUE**; the third location is correctly left as a retained historical record |
| Doc 02 pin → **v2.17.3 Approved**; clause (e) unchanged since v2.17.0 | `docs/02` header, §4.45, change history | **TRUE** — text is unchanged at v2.17.1/.2/.3; §8 Scenarios 8 and 9 added at v2.17.1 |
| `OPEN-28/29/30` are new; nothing reused or renumbered | `git show HEAD:docs/04…` id scan | **TRUE** — high-water mark at HEAD was `OPEN-27`; `OPEN-30` is the new mark; each new id has a **trigger** and a **named owner** |
| The two strings are at `PrivacyStatus.tsx:251-252` | read the file | **TRUE**, exactly |
| The `packages/ui` string scan is **not implemented**; `UT-0869`/`UT-0887`/`UT-0889` are `apps/web` i18n-scoped and `UT-0759` is `ver`-scoped | read `packages/ui/test/PrivacyStatus.test.tsx`; grep guards | **TRUE** — line 208's banned-word regex sits inside the `ver`-scoped `UT-0759` block; the `anon` case (line 32) asserts `getByText('Anonymous')` with no banned-word check |
| `PrivacyStatus` is mounted on no shipped surface (six comments, five files) | grep `apps/web/src` | **TRUE** — `ProvisionalStatus.tsx:11`, `PartyMembership.tsx:26`, `parties/page.tsx:19`, `proposals/page.tsx:22`, `petitions/new/page.tsx:13` and `:134`; no import anywhere |
| Endorsement public by design; `private_endorsement` Phase-4 OFF | Doc 14 §2.2 (600-614); Doc 06 flag ledger 1046; Doc 09 1028 | **TRUE** |
| Suite unchanged at 640/640 | `npm test` | **TRUE** — 95+151+244+18+16+116 = **640 passed, 0 failed** |
| §14 untouched and its **reconciliation** pin deliberately not advanced | diff | **TRUE** — bibliographic pins moved; the reconciliation pin stayed at Doc 07 v2.6.0; the two are expressly kept apart |

## 5. Rulings the assignment asked for

**The carve-out is genuinely WITHDRAWN, not narrowed.** S5 rule 4 now reads "ONE carve-out, and only
one", its clause (ii) is marked WITHDRAWN with the v1.6.0 text retained verbatim beneath it, the
blockquote carries a READ-THIS-FIRST banner, and the "Until Doc 03 rules" tail is discharged by name.
Critically, rule 4 states the distinction that matters: an exception **asserts compliance**, a
failure **asserts work** — so the two strings are recorded as in-scope-and-failing under `OPEN-28`,
not excepted. That is the correct outcome and the correct vocabulary.

**The lapse-vs-requirement-change distinction holds** (ruled in full in the Doc 03 v2.14.0 report;
the short form). Doc 04 v1.6.0's retained analysis at lines 1200-1216 walks trigger (iii) precisely
— clause (e) widens the ban's scope but keeps it **conditional**, so the "unconditional" amendment
trigger (iii) describes did not occur — and disposes of (i), (ii) and (iv) on their own terms.
v1.7.0 does not disturb it and says so twice. Beyond the literal text, the deeper point is the one
this document gets right: a re-open trigger list in a design document cannot gate whether a widened
Doc 02 Must is applied, or a lower-tier document would be narrowing a higher-tier one by drafting.
**"No trigger fired; the requirement changed"** is the honest characterisation, not an evasion.

**`OPEN-29` (screen 3.6's copy) named but not ruled is the right call.** It has an id, a named owner
(Ravi Deshmukh), and a trigger (the next Doc 03 increment); it is outside `OPEN-27`'s scope; and I
verified it is **not a shipped string** — the phrase appears nowhere under `apps/` or `packages/`,
and `en.ts` carries "anonymous" only in clause (a)'s mandated negated form. Routing it is the
opposite of half-doing it.

**Folding the three carried Lows was in scope.** Doc 04 v1.6.0's Approved status line carried them
with a standing "fix on the next touch" posture; discharging them on a **debt-closure** increment is
the purpose of the session, not scope creep. The handling is also honest rather than tidy: **ISS-07
FIXED** (both live locations re-pinned, the third correctly left as history), **ISS-09 DISCHARGED BY
SUPERSESSION** and said to be so, and **ISS-08 DEFERRED** — not silently, but converted to
**`OPEN-30`** with an owner and a named trigger, because reconciling §14 against a mid-increment
Doc 07 would have been the cycle-1 Medium in a new costume. A status block that claimed three Lows
"closed" would have been an over-claim; this one does not make it.

## 6. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | T3 | **§11.2 "Tooling — what exists, and what must be added", line 2615** — the row `**_(v1.1.0)_ Second denylist over user-facing strings (build-failing)**`, owner Nadia Hassan, controls `DES-085, DES-098, FR-131(e)` | The row's live v1.5.0 annotation still ends: *"**Two carve-outs only: clause (a)'s mandated negated forms, and the named `anon`-badge exception.** See §0.5 S5."* It was **not** swept at v1.7.0. It is not inside any retained/superseded block — it is a current row in a current section, describing the very control the withdrawal changes. It contradicts **S5 rule 4** ("ONE carve-out, and only one") on a count, and worse, it records as an **exception** exactly what rule 4 says MUST NOT be recorded as one: *"an exception asserts compliance and a failure asserts work."* The Status block (line 7) claims the outcome is recorded *"at every site that carried it"*; the changelog (line 430) enumerates the sites; Doc 03's Downstream instruction (line 2037) enumerates five and warns that *"a withdrawn carve-out surviving in one of five sites is a build-failing scan quietly not failing."* This row is that survival. It is also a **known** S5 site — it was last edited at **v1.5.0 for this exact scan**, which is why it should have been on the list. | Sweep line 2615, in the annotate-don't-delete form used everywhere else in v1.7.0: retain the v1.5.0 annotation as a record, append a **v1.7.0** annotation stating that the named `anon`-badge exception is **WITHDRAWN** (Doc 03 v2.14.0 §10.12.3 on `OPEN-27`), that the control now carries **one** carve-out — clause (a)'s mandated negated forms — and that the two `PrivacyStatus` `anon` strings are **in scope and failing**, tracked as `OPEN-28`, never as an exception. Then correct the Status block's and changelog's "every site" claim to enumerate the **six** sites carrying the carve-out. |
| ISS-02 | Low | T3 | §1.4's v1.7.0 roll-call (line ~1547) and §13's `OPEN-30` row / Status-block trigger | Both were **true when written** and are already overtaken **within the same session**: they cite Doc 07 as *"v2.8.1 Approved at HEAD … in flight to v2.9.0"* and set `OPEN-30`'s trigger as *"the first touch of this document after Doc 07 v2.9.0 is Approved"*. Doc 07 is now **v2.9.0 Approved** on disk (`07-test-cases-suites-v2.9.0-technical-cycle1.md`, PASS 97%), so **`OPEN-30`'s trigger has fired**. Not a defect in v1.7.0 — the HEAD scoping is explicit and correct — but this is the "pin that moved twice in one day" pattern the document's own sweep exists to catch, and it should not be rediscovered next session. | On the rework touch, note in §13's `OPEN-30` row that the trigger **fired on 2026-09-20** when Doc 07 v2.9.0 was Approved, so the §14 reconciliation is now due at the **next** Doc 04 increment rather than at an unspecified future one. Do **not** attempt the reconciliation in a Low-only rework — the deferral reasoning is sound and §14 stays untouched. Also route to the **project-manager** for the session close. |
| ISS-03 | Low | T6 | Status block, line 16-17 | *"Minor bump: a normative test-criterion scope change — a **build-failing** carve-out is withdrawn."* Read alone this implies a control that fails builds today. The document reconciles it 25 lines later ("the `packages/ui` string scan S5 specifies **is not implemented**"), and I verified the scan is indeed absent — so the statement is defensible as describing the control **as specified**. But the bump rationale is the first thing a reader meets and the qualification is the fortieth. | Add four words at the point of the claim: "a carve-out to a **specified-but-unimplemented** build-failing control is withdrawn". No other change. |

> **Low** issues do not block the pass bar. The single **Medium** forces the FAIL.

## 7. Routing instruction

**FAIL → route to the owning role: architect (Ravi Deshmukh).** Fix **ISS-01**; fold **ISS-02** and
**ISS-03** on the same touch — all three are single-site annotations. Rework MUST produce a **new
version**: no normative rule changes, so a **patch** bump to **v1.7.1** with `Status: In Review` is
correct, and this loop re-reviews at **cycle 2 of 5**.

**Nothing else needs reworking.** The withdrawal, the count change, the `OPEN-27` closure, the three
new `OPEN-##` items, the pin sweep, the retained lapse analysis and the mechanical scan instruction
are all correct and verified, and MUST be carried into v1.7.1 unchanged.

**Ordering note for the project-manager:** ISS-01 here is the downstream half of Doc 03 v2.14.0's
**ISS-02** (Doc 03's Downstream paragraph instructs "every site" and enumerates five when there are
six). Fix Doc 03's enumeration first, then this row — the same Doc-03-then-Doc-04 sequencing the PM
used to apply the two specs, and for the same reason: this document records what Doc 03 rules.

## 8. Out of scope, as instructed — and not ruled

`OPEN-20` (the `TS-PROPOSALS` §2-vs-§5.6 heading disagreement — untouched this session, and an item
**assigned to** the reviewer's role, which is not authorship); **§14's `TC` register** and its
deliberately unadvanced **reconciliation** pin (correctly kept distinct from the bibliographic pins
while Doc 07 is mid-increment); the **clause-(e) substance** itself (a product-owner ruling
CONFIRMED by the approver 2026-09-06); and **Docs 07 and 08**, which belong to reviewer-qa. Nothing
about Docs 07/08 is ruled here; the one Doc 07 fact used above — that v2.9.0 is Approved on disk —
is used only to flag that `OPEN-30`'s trigger has fired, and is routed to the project-manager, not
decided.
