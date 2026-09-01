# Architect session note + anchored edit spec — Doc 04 v1.1.0 → v1.2.0 (rework cycle 3)

```
Role:            architect (Ravi Deshmukh — Principal Architect)
Date:            2026-09-01
Target document: docs/04-test-strategy-master-plan.md
From version:    1.1.0 (In Review)
To version:      1.2.0 (In Review)
Driving report:  artifacts/reviews/04-test-strategy-master-plan-v1.1.0-technical-cycle2.md
                 (FAIL 94%; 0 Critical / 0 High / 1 Medium / 1 Low; reviewer: engineer, neutral)
Findings closed: ISS-08 (Medium) · ISS-09 (Low)
Delivery:        anchored FIND/REPLACE spec — the project-manager transcribes into docs/.
                 The architect wrote nothing under docs/ and did not touch
                 artifacts/memory-index.json.
IDs touched:     FR-121…FR-133 (FR-127 in particular) · OPEN-18 · CON-007 · TS-CR1 ·
                 TS-V1-ENROL / TS-V1-ID / TS-V1-SPAM (referenced, not changed) ·
                 §0.6, §13, §16, §18, §21
```

---

## 1. Verification of both findings before fixing

**ISS-08 — CONFIRMED.** I recounted §0.6's own 13-row table (lines 293–307) column
"Status on 2026-08-31" byte-by-byte:

| Bucket | Count | Rows |
|---|---|---|
| Status text begins "Covered" | **4** | `FR-122`, `FR-123`, `FR-124`, `FR-130` |
| Status text begins "Partial" | **2** | `FR-131`, `FR-132` |
| Status is bolded "No suite." / "No v1 suite." | **7** | `FR-121`, `FR-125`, `FR-126`, `FR-127`, `FR-128`, `FR-129`, `FR-133` |

4 + 2 + 7 = 13. The rollup at lines 309–311 says 5 / 2 / 6. The reviewer's diagnosis is exact:
the only way 5/2/6 sums to 13 is by silently promoting `FR-127` — whose own row reads
**"No v1 suite."** and whose only named suite `TS-CR1` is a **Definition-B** suite covering
the v2 `FR-069`/`FR-071` form with **all 46 cases Blocked** — into the covered bucket. That is
precisely the coverage-on-paper move §0.1/§0.5/§0.6 exist to forbid.

**The undercount propagated to four places, not two.** The reviewer named §0.6 and `OPEN-18`;
I found two more while tracing it, and all four are fixed here, because leaving the wrong
number in §18 and §21 would fail cycle 4 on the identical defect:

| # | Location | Current (wrong) text |
|---|---|---|
| 1 | §0.6 rollup, line ~309–310 | "**five are covered**, **two are partial**, and **six have no suite at all**… None of the six…" |
| 2 | §13 `OPEN-18`, line ~1646 (finding cell) | "**six have no suite anywhere**" |
| 3 | §13 `OPEN-18`, line ~1646 (action cell) | "**47 + 6 Must FRs and 11 RISKs…**" |
| 4 | §18 metrics table, line ~1834 | "Today this is 47 + 6 FRs and 11 RISKs" |
| 5 | §21 coverage assertion, line ~1895 | "six of `FR-121`…`FR-133` have **no suite at all**" |

(The phrase "the **six** unminted v1 suites" at header line 46 and §14 line 1694 is a *different*
six — the six suite names `TS-V1-BALLOT` · `TS-V1-NOTICE` · `TS-V1-ID` · `TS-V1-SPAM` ·
`TS-V1-AUDIT` · `TS-V1-ENROL`. That count is correct and is **not** touched.)

**ISS-09 — CONFIRMED.** Lines 1786–1788 and 1790–1792 are two back-to-back `CON-007`
paragraphs, the second being the untouched v1.0.x original with superseded
"walking-skeleton capability" terminology. Insertion artifact, as described.

**Nothing disputed.** Both findings stand as written.

## 2. Resolution chosen for ISS-08 — **recount to 4 / 2 / 7, with the bucket rule stated explicitly**

The reviewer offered two exits: recount, or declare `FR-127` covered-by-its-v2-form-suite and
say so at the row. I take the **recount**, and I reject the second exit on the merits: `TS-CR1`
is Definition-B, covers a *different form* of the requirement, and has **zero** non-Blocked
cases — counting it as v1 coverage would contradict §0.1 (a Definition-B suite never governs a
Definition-A release), §0.5's seam-honesty doctrine, and §0.6's own standing rule that
"nothing here upgrades a status."

To satisfy the "no unstated tie-breaker" instruction I do **both** halves: the counts become
4/2/7 **and** a short normative bucket rule is added immediately after the table, naming the
FRs in each bucket inline so the arithmetic is auditable without re-reading thirteen rows and
so no future editor can let `FR-127` drift again.

---

## 3. Anchored changes — 7 edits

> Transcription rule: each `FIND:` block is copied byte-for-byte from
> `docs/04-test-strategy-master-plan.md` **v1.1.0**. Replace the whole block with the
> `REPLACE WITH:` block. Apply in order. Edits 3–6 are one logical fix (ISS-08) applied at
> its four occurrences.

### Edit 1 of 7 — header: version bump (header block, ~line 4–6)

FIND:

````
Document ID:   MTP-TRUMOCRACY
Version:       1.1.0
Status:        In Review
````

REPLACE WITH:

````
Document ID:   MTP-TRUMOCRACY
Version:       1.2.0
Status:        In Review
````

### Edit 2 of 7 — header: date + new changelog entry (header block, ~line 21–22)

FIND:

````
Last updated:  2026-08-31
Changelog:     2026-08-31 v1.1.0 — **Rework cycle 1 against
````

REPLACE WITH:

````
Last updated:  2026-09-01
Changelog:     2026-09-01 v1.2.0 — **Rework cycle 2 against
               `artifacts/reviews/04-test-strategy-master-plan-v1.1.0-technical-cycle2.md`
               (FAIL 94%; 0 Critical / 0 High / 1 Medium / 1 Low; reviewer: engineer,
               neutral).** Minor bump: a Medium finding makes a minor bump the floor.
               **ISS-08 (Medium) CLOSED** — §0.6's Gate-2 rollup read "five covered, two
               partial, six no suite", contradicting its own 13-row table, which shows
               **4 / 2 / 7**; the 5/2/6 split only reconciled by silently counting
               `FR-127` as covered against its own "No v1 suite." row. Recounted to
               **4 covered / 2 partial / 7 no suite**, each bucket now naming its FRs, and
               the bucketing rule stated normatively at the table: a Definition-B suite
               (`TS-CR1`, all 46 cases Blocked) never buys a Definition-A row. The same
               undercount is corrected everywhere it propagated — **OPEN-18** (§13), the
               §18 metric row and §21's coverage qualifier now read **47 + 7 = 54**.
               **ISS-09 (Low) CLOSED** — §16 carried two back-to-back `CON-007` "scope
               absorbs overrun, not the date" paragraphs after the Definition-B milestone
               table; the superseded v1.0.x copy ("walking-skeleton capability") is merged
               into the v1.1.0 copy, keeping its `OI-02` citation.
               2026-08-31 v1.1.0 — **Rework cycle 1 against
````

### Edit 3 of 7 — §0.6: bucket rule + corrected rollup (ISS-08, ~line 309–311)

FIND:

````
**Summary, stated plainly for the Gate-2 packet.** Of the 13, **five are covered**, **two are
partial**, and **six have no suite at all**. All 13 are Must. None of the six is a testing omission
that testing alone can close — each is blocked on unbuilt capability or on `CON-015`. **OPEN-18.**
````

REPLACE WITH:

````
**How a row is bucketed — stated explicitly, so the count cannot drift.** A row counts as
**covered** only if a **Definition-A (v1)** suite exists *and* carries at least one non-Blocked case
for the **v1 form** of that FR; **partial** if such a suite covers some call sites or clauses and not
others; **no suite** otherwise. `FR-127` is bucketed **no suite** under this rule, deliberately: its
only named suite `TS-CR1` is a **Definition-B** suite covering the v2 `FR-069`/`FR-071` form, and all
46 of its cases are Blocked. Per §0.1 a Definition-B suite never governs a Definition-A row, and per
this section's own standing rule **nothing here upgrades a status**.

**Summary, stated plainly for the Gate-2 packet.** Of the 13, **four are covered** (`FR-122`,
`FR-123`, `FR-124`, `FR-130`), **two are partial** (`FR-131`, `FR-132`), and **seven have no suite at
all** (`FR-121`, `FR-125`, `FR-126`, `FR-127`, `FR-128`, `FR-129`, `FR-133`) — 4 + 2 + 7 = 13. All 13
are Must. None of the seven is a testing omission that testing alone can close — each is blocked on
unbuilt capability or on `CON-015`. **OPEN-18.**
````

### Edit 4 of 7 — §13 `OPEN-18`, finding cell (ISS-08, within ~line 1646)

FIND:

````
Of `FR-121`…`FR-133` (13 Must), **six have no suite anywhere**.
````

REPLACE WITH:

````
Of `FR-121`…`FR-133` (13 Must), **seven have no suite anywhere** (`FR-121`, `125`, `126`, `127`, `128`, `129`, `133`; the bucketing rule and the 4 / 2 / 7 split are at §0.6).
````

### Edit 5 of 7 — §13 `OPEN-18`, action cell (ISS-08, within ~line 1646)

FIND:

````
A Gate-2 packet must state that **47 + 6 Must FRs and 11 RISKs have declared cases and no passing evidence**.
````

REPLACE WITH:

````
A Gate-2 packet must state that **47 + 7 = 54 Must FRs and 11 RISKs have no passing evidence** — 47 with declared but unrunnable cases, 7 with no Definition-A suite at all.
````

### Edit 6 of 7 — §18 metric row + §21 qualifier (ISS-08, ~line 1834 and ~1894–1896)

FIND:

````
OPEN-18. Today this is 47 + 6 FRs and 11 RISKs.
````

REPLACE WITH:

````
OPEN-18. Today this is 47 + 7 = 54 FRs and 11 RISKs.
````

FIND:

````
  are **all Blocked or No mechanism** and six of `FR-121`…`FR-133` have **no suite at all**. See
````

REPLACE WITH:

````
  are **all Blocked or No mechanism** and **seven** of `FR-121`…`FR-133` have **no Definition-A suite
  at all** — `FR-127`'s only named suite, `TS-CR1`, is Definition-B and wholly Blocked (§0.6). See
````

### Edit 7 of 7 — §16: merge the duplicated `CON-007` paragraph (ISS-09, ~line 1786–1792)

FIND:

````
Per `CON-007`, **scope absorbs overrun, not the date**. If a Band A or Band B suite is not green, the
correct lever is deferring a v1 capability, never deferring a guardrail suite — and never re-labelling
a Definition-B requirement as met.

Per `CON-007`, **scope absorbs overrun, not the date**. If a Band A or Band B suite is not green, the
correct lever is deferring a walking-skeleton capability (Doc 02 §11, `OI-02`), never deferring a
guardrail suite.
````

REPLACE WITH:

````
Per `CON-007`, **scope absorbs overrun, not the date**. If a Band A or Band B suite is not green, the
correct lever is deferring a v1 capability — the v1.0.x "walking-skeleton capability" framing
(Doc 02 §11, `OI-02`) is superseded by the Definition-A/B split and the two mean the same thing — and
never deferring a guardrail suite, and never re-labelling a Definition-B requirement as met.
````

---

## 4. Post-transcription check (for the project-manager)

After applying all seven edits, these greps over `docs/04-test-strategy-master-plan.md` MUST
return **zero** hits: `five are covered` · `six have no suite` · `47 + 6` ·
`walking-skeleton capability (Doc 02` . And `Version:       1.2.0` MUST be present.
The two legitimate "six unminted v1 suites" mentions (header ~line 46, §14 ~line 1694) MUST
still be present and unchanged.

## 5. Decisions made

- **D1.** ISS-08 resolved by **recount to 4/2/7**, not by declaring `FR-127` covered. A
  Definition-B, fully-Blocked suite cannot discharge a Definition-A Must row; the opposite
  ruling would have contradicted §0.1 and §0.5 and manufactured coverage.
- **D2.** The tie-breaker is now **written down** as a normative bucketing rule at §0.6, and
  every bucket names its FRs inline, so the rollup is self-auditing.
- **D3.** The fix is applied at **all five occurrences** of the undercount (§0.6, `OPEN-18` ×2,
  §18, §21), not only the two the reviewer cited — an identical defect surviving in §18/§21
  would justify a cycle-4 FAIL on the same grounds.
- **D4.** ISS-09 resolved by **merge, not deletion**: the older paragraph's `OI-02` citation is
  preserved inside the surviving paragraph, with the superseded terminology explicitly marked
  as superseded.
- **D5.** **Minor** bump 1.1.0 → 1.2.0 (a Medium-or-worse FAIL requires at least a minor bump).
  `Status:` stays `In Review` pending cycle 3.

## 6. Open items (unchanged by this increment)

- `OPEN-18` remains **open and Gate-2 blocking**; this edit corrects its arithmetic, not its
  substance — the gap grew from 53 to 54 Must FRs without passing evidence.
- `FR-127` has **no named Definition-A destination suite** (unlike `FR-121`/`125`/`129` →
  `TS-V1-ENROL`, `FR-126`/`128` → `TS-V1-ID`, `FR-133` → `TS-V1-SPAM`). Noted, **not** fixed
  here: assigning it would ripple into §0.4, §14 (line ~1694) and §16's 2027-02-26 milestone
  (line ~1765), which is more than a two-fix increment should carry. Recommended for the next
  substantive Doc 04 version; it does not change any count above.
- `OPEN-09` (no named QA Lead), `OPEN-20` (Doc 07 `TC`-range self-disagreement), `OPEN-21`,
  `OPEN-22`, `OPEN-26(b)` all remain open and unowned by this increment.
- No review report was written by this role (AL-CANDIDATE-3: the owning role never reviews its
  own document).
