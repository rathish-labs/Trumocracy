# Document Review Report — Doc 06 Coding & UT v2.8.0 (+ the code drop), technical mode, cycle 1

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.8.0
Review mode: technical
Reviewer role: tester (Ji-woo Park) — neutral; assigned by the project-manager in artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md BEFORE dispatch; the owning role (engineer, Samuel Oyelaran) and the product-owner (who chose the remedy) are both excluded
Score: 95%
Critical: 0
High: 0
Medium: 1
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

Assignment record: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md` (§ "Neutral
reviewers (recorded BEFORE dispatch)", row 1 — Doc 06 v2.8.0 + the code drop, technical, tester).
Approver ruling under review: `artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md` §1, §3, §5.

---

## 1. Summary (BLUF)

**Both halves of this drop do what the approver ruled, and I verified each against the primary
source rather than against the engineer's note.**

*Decision 3 (stop-hook wording).* The reworded block message is live and correct. I triggered it
(`echo '{}' | node hooks/run_gates.cjs`) and read the text the blocked agent actually receives: it
says **"Do NOT author that report yourself"**, names reviewer assignment as the project-manager's
decision **recorded in `artifacts/status/REVIEW-ASSIGNMENT-*.md` BEFORE dispatch**, states that **a
report written to clear your own stop does not count as a cycle**, and tells an owner or
non-assigned reviewer to **record the block in its session note and stop**. The bar (≥95% and zero
C/H/M), the owner-reworks-a-new-version rule, and the 5-cycle cap with a named `approve-as-is`
approver are all preserved verbatim. The `{listed}` document-line format and the `--audit` output
format are untouched. `py_compile` is clean; a repo-wide search finds the old "Run the
`document-review` skill with a NEUTRAL…" imperative in **no** live code path — only in the decision
record, the engineer's note, and Doc 06's own description of the change.

*Decision 1 / product-owner remedy (a) (`/verify`).* Implemented exactly as specified. The
`enrolment_ui` flag ships `dev:true / staging:false / prod:false`, `onChain:false`, with a real
`removeBy` (so `permanentFlags()` stays `[]`); the client key, the page gate, the nav gate, the
rewritten module docstring, the `en.ts`/`ar.ts` header comments and the four new string keys per
locale are all present, and **no existing `verify.*` string is deleted**. I diffed the new copy
against the normative source programmatically: **`en.ts` is byte-identical to DECISIONS §5.3 and
`ar.ts` is byte-identical to §5.4** (line-trim normalisation only, for indentation). The default
posture is genuinely dark — `BUILD_ENVIRONMENT` falls back to `prod`, and I confirmed by rendering
`<VerifyPage/>` **with no override at all** that the honesty placeholder is what a citizen gets.

*The guard.* **UT-0890 makes all 15 assertions of §5.6 A–E**, one `it` per assertion, and I proved
the negatives are **not vacuous**: with the flag **on**, all five retired claims — including the two
that are invisible in the source because they straddle a string concatenation (`never leaves your
phone`, `and nothing else`) — **are present in the rendered DOM**, which is exactly why §5.6
assertion 5 asserts against the DOM. All three `data-testid` handles asserted null in B6 exist on
the flag-on page. Suite: **640/640 green (contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16
· web 116)**, +15 over v2.7.0's 625, matching UT-0890's 15 `it`s exactly; `npm run typecheck` exit 0;
`npm run lint:deps` "7 workspace package(s) checked — layering OK".

It nonetheless **FAILS**, on the document, not the code — and on the **same defect class this very
document was failed for at cycle 1 of v2.6.0**. §7 item 26(c) still reads "The only `TC` row still
owed by the tester is **UT-0889's**", and the §3 closing note — a sentence the engineer **actively
rewrote at this version** — now reads "the UT-0889 and UT-0890 blocks' TC rows are owed to the
tester". **UT-0889's TC rows are not owed.** Doc 07 **v2.8.1 Approved** mints `TC-3570`..`TC-3576`
for it and Doc 08 **v2.11.3 Approved** carries them (line 530: "**UT-0889** → **TC-3570** … all five
**Pass (obs.)** on R-18"). That is **ISS-01, Medium**: the canonical owed-work register tells the
next tester to mint TC rows that already exist, under an ID scheme whose first rule is never to
reuse or renumber — and it does so in the week the PM is assembling the Gate-2 picture from this
section. Everything else is Low.

**The correct owed-work statement at v2.8.0 is: UT-0890's TC row, and only UT-0890's, is owed.**
That is what the review assignment records, and Doc 07/08 are correctly **not** reopened this
session.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`95%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — the bar is **conjunctive**. The numeric score clears; the single Medium
  (ISS-01) does not. PASS requires both rows to be all "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Every clause of approver decision 3 is met and I verified each against the live block text, not the diff. Every item of DECISIONS §5.5 (1–6) is met: flag, client key, page gate, nav gate, docstring + both locale header comments, no string deleted. Both locales byte-exact against §5.3/§5.4. The only two `/verify` links in `apps/web/src` are the header (gated) and the home CTA (deliberately left — §5.1 makes the placeholder the reason it may stay) |
| T2 Soundness | 20 | 97 | 19.4 | `onChain:false` is correct and precedented, and the §6 note gives the right reason (no contract path exists because the backing does not). Hook order is safe — `useState` and `useFlag` both run before the early return, so the gate introduces no conditional-hook hazard. `BUILD_ENVIRONMENT` defaults to `prod`, so a misconfigured build ships *less*, and I confirmed the no-override render is the placeholder. The `.d.ts` shim gained only the one missing `permanentFlags()` declaration, and item 23 genuinely tracks the wider shim gap it belongs to. −3 for ISS-03 (§6 states the flag is "counted in the `permanentFlags()` assertion", which reads as the opposite of what the function returns) |
| T3 Traceability & IDs | 20 | 88 | 17.6 | `UT-0890` correctly minted in the free `apps/web` band (Doc 04 line 2434: UT-0850–UT-0899, free from UT-0887; 0887/0888/0889 taken), used nowhere else in the repo, registered in §3 with an accurate count, in §6, in §7 item 28 and in the change history; the `en.ts` comment cross-references it. TC row for UT-0890 correctly declared owed to the tester with Doc 08 correctly **not** reopened. −12 for **ISS-01**: two passages state UT-0889's TC row is still owed when Doc 07 v2.8.1 / Doc 08 v2.11.3 (both Approved) carry `TC-3570`..`TC-3576` for it — the recurrence of the v2.6.0 ISS-01 class, calibrated to the same deduction |
| T4 Security & failure modes | 15 | 98 | 14.7 | The defect class *is* the safety property, and this removes a false public surface without claiming any progress on enrolment (§7 item 28 says so in terms). The guard bites: I proved every retired claim is in the flag-on DOM and absent from the flag-off DOM, so a future re-wiring cannot pass it. Reversibility is a one-line flag flip; the debt is recorded with a `removeBy` that CI already enforces via `permanentFlags()`. `IS_INSECURE_MOCK` discipline and every capability-absence surface are untouched by this drop |
| T5 Completeness & testability | 15 | 95 | 14.25 | All 15 §5.6 assertions present, one `it` each, and non-vacuous (the three B6 test-ids exist on the flag-on page; the five B5 claims render with the flag on). §3 arithmetic re-derived and exact: 95+151+244+18+16+116 = **640**, and the web addends 16+27+27+1+18+2+4+6+15 = **116**. Test header comment carries every citation §5.6 requires. −5 for ISS-02 (the change entry publishes "`--audit` still exits 0" as a verification result; it cannot exit 0 at this version, and the engineer's own note shows the run was made at v2.7.0) |
| T6 Convention compliance | 10 | 96 | 9.6 | Minor bump is right for a new flag + new UT + new §7 item; `Status: In Review` with the **assigned neutral reviewer named in the header before dispatch** — good practice and exactly what the new hook text asks for; annotate-don't-delete respected (the v2.7.0 Approved status is preserved under "Previously:", the three carried Lows preserved verbatim); ISO dates; `Source:` pin still current at SDD v2.13.0. −4 for ISS-04 (§3's "Counts are actual as of this session (**2026-09-05**)" heads a table the engineer re-derived on 2026-09-08) |
| **Total** | **100** | — | **95%** | — |

---

## 4. What I verified, and how

Every claim below is something I ran or read at HEAD, not something I took from
`artifacts/engineer-2026-09-08T1100-verify-and-hook.md`.

| # | Check | Result |
|---|---|---|
| 1 | `npm test` (all six workspaces) | **640/640 green** — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 116. Exactly +15 over v2.7.0's 625, and `safety-surfaces.test.tsx` reports 41 tests (26 + UT-0890's 15) |
| 2 | `npm run typecheck` | exit 0 (`packages/ui`, `apps/web`) |
| 3 | `npm run lint:deps` | "dep-guard: 7 workspace package(s) checked — layering OK" |
| 4 | `python -m py_compile hooks/check_gates.py` | exit 0 (via `%LOCALAPPDATA%/Programs/Python/Python312/python.exe`, the interpreter `resolvePython()` finds; `python` is not on the Git-Bash PATH) |
| 5 | `node hooks/run_gates.cjs --audit` | exit 1, output format **unchanged**: `06-coding-and-ut.md v2.8.0 — no report for this version` (this report) and `02-requirements-srs.md v2.17.3 — no report for this version` (the product-owner's rework, reviewer-qa's loop — **not mine**; I did not self-appoint). RTM section unchanged: 138 Must rows, 16 COMPLETE, 122 OPEN, signals AGREE, Gate 2 criterion NOT MET |
| 6 | The **new block text**, as the blocked agent receives it | Carries all five required elements of decision 3. See §5 below for the clause-by-clause check |
| 7 | Old wording residue, repo-wide | The string "Run the `document-review` skill with a NEUTRAL" survives only in `DECISIONS-2026-09-08-VERIFY-PAGE.md`, the engineer's note and Doc 06's change entry — all **quotations of what was replaced**. `hooks/` contains exactly one review-loop `block()` call (line 536). `run_gates.cjs` carries none |
| 8 | Normative copy, **byte-exactness** | Programmatic compare of the `unavailable*` block in `en.ts` against DECISIONS §5.3 → **identical**; `ar.ts` against §5.4 → **identical** (per-line trim only) |
| 9 | **Non-vacuity of the B5 negatives** (the assertion that matters most) | Rendered `<VerifyPage/>` with `enrolment_ui: true` and asserted each retired claim **is** in `container.textContent`: all five present, including `never leaves your phone` and `and nothing else`, which do **not** appear in `en.ts` as literals because they straddle a `+` concatenation. The DOM-level assertion is therefore the only formulation that would bite — §5.6 got this right and the engineer implemented it right |
| 10 | Non-vacuity of the B6 handles | `data-testid="start-verification"` (page.tsx:113), `"kept-list"` (:120), `"not-kept-list"` (:128) all exist on the flag-on page |
| 11 | Default posture | Rendered `<VerifyPage/>` with **no override**: `BUILD_ENVIRONMENT` resolves to `prod`, and the placeholder renders. The page is dark by default, not merely dark when told to be |
| 12 | Flag registry | `permanentFlags()` filters on `!removeBy`; `enrolment_ui` carries one, so the `[]` assertion holds and the debt is recorded. `l1_force_inclusion`/`sponsored_gas` carry `'never …'` strings, so §6's "unlike those two" phrasing is accurate |
| 13 | ID hygiene | `UT-0890` appears only in `safety-surfaces.test.tsx` (2×), `en.ts` (1× comment) and Doc 06 (10×). Nothing reused, nothing renumbered. `UT-0891` unused |
| 14 | The owed-TC claim (ISS-01) | Doc 07 header: **v2.8.1, Approved**. Doc 08 header: **v2.11.3, Approved** ("loop closed ON the cap, cycle 5 of 5, no escalation"). Doc 08 line 530 maps **UT-0889 → TC-3570..TC-3574** "all five **Pass (obs.)** on R-18"; lines 471–499 add **TC-3576** and the NFR-023 link |
| 15 | Doc 07/08 not reopened | Confirmed — I made no edit to either document, per the review assignment. The UT-0890 TC row stands **OWED to the tester** at the next Doc 07/08 touch |

---

## 5. Decision 3, clause by clause (the framework fix)

The approver required five things. The live text delivers all five:

| Required by DECISIONS §3 | In the live block text | Verdict |
|---|---|---|
| Must **not** suggest the blocked agent author the missing artifact | "**Do NOT author that report yourself**" — stated before any instruction, and the old imperative verb ("Run the `document-review` skill…") is gone entirely | **Met** |
| Direct to the **project-manager** and the **assignment record** | "reviewer assignment is the project-manager's decision, recorded in `artifacts/status/REVIEW-ASSIGNMENT-*.md` BEFORE dispatch"; "the project-manager sequences the review" | **Met** |
| State that a **self-written report does not count** | "a report written to clear your own stop does not count as a cycle" | **Met** |
| Keep the **bar**, the **owner-reworks** rule and the **cap** | "a version passes only at score >= 95% AND zero critical/high/medium issues. On FAIL, the OWNING ROLE reworks a new version and it is re-reviewed (cap 5 cycles, then ESCALATE to a human, who must record an 'approve-as-is' decision with their name to clear it)" | **Met** |
| `--audit` **output format unchanged** | Diff touches only the docstring and the `block()` string; the audit's PASS/BLOCK lines, the blocking count, and the whole RTM section print exactly as before | **Met** |

The module docstring's invariant-(c) paragraph was reworded to match, so the two do not drift — a
detail the ruling did not demand and which is the right call.

One observation, not an issue: the message tells the **owner** and the **non-assigned reviewer**
what to do, and is silent about the **assigned** reviewer, who is left to infer that this block is
its cue to proceed. In practice the assignment record is the instruction and the dispatch carries
it, so the silence is safe; I record it only so a future reworder does not "fix" it by adding an
imperative that reopens the self-appointment hole this change exists to close.

---

## 6. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-01** | **Medium** | T3 | Doc 06 **§3 closing note** (immediately after the inventory table, the sentence beginning "Every `UT-####` maps to an `FR`/`NFR`/`RISK` in the RTM (Doc 08) —") **and §7 item 26(c)** (the v2.7.0 closure block, the sentence "The only `TC` row still owed by the tester is **UT-0889's** (new at v2.6.0/this version).") | Both passages state that **UT-0889's TC row is still owed to the tester**. It is not. **Doc 07 v2.8.1 (Approved)** mints `TC-3570`..`TC-3576` for UT-0889 and **Doc 08 v2.11.3 (Approved, closed on the cap 2026-09-08)** carries them — line 530 records "**UT-0889** → **TC-3570** (en `home.steps[1].body`), **TC-3571** … **TC-3574** … all five **Pass (obs.)** on R-18", and `TC-3576` is linked from the §3.2 NFR-023 row. The §3 sentence is not inherited text: the engineer **rewrote it at this version** ("the UT-0889 **and UT-0890** blocks' TC rows are owed") and re-asserted the stale half while adding the true half. §7 item 26(c)'s sentence is additionally wrong on "the only", since UT-0890's row is now owed. This is the exact defect class that failed v2.6.0 at cycle 1 (ISS-01: the canonical owed-work register over-stating open work), in the document the PM reads to assemble Gate 2 — and its live consequence is a **duplicate-mint hazard**: the next tester, told by Doc 06 that UT-0889 needs TC rows, could mint new IDs for cases that already exist, against the ID scheme's never-reuse-or-renumber rule | In **§3**, restrict the owed claim to UT-0890 and state where UT-0889 closed, in the dated annotate-don't-delete form this document already uses — e.g. "**(v2.8.0 correction:** UT-0889's TC rows are **not** owed — Doc 07 **v2.8.1** and Doc 08 **v2.11.3**, both Approved, carry `TC-3570`..`TC-3576` for it. The only TC row owed to the tester is **UT-0890's**, per `REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`; Doc 08 closed on the cap and is not reopened for it mid-session.)" In **§7 item 26(c)**, append a dated correction after the existing sentence (do not rewrite it) recording the same two facts and that the sole owed row is now UT-0890's. Do **not** edit Doc 07 or Doc 08 — they are correct |
| **ISS-02** | Low | T5 | Doc 06 change history, **v2.8.0 entry**, item (1), the sentence "`node hooks/run_gates.cjs --audit` still exits 0 with the unchanged format" | Presented as a verification result of this version; it is not reproducible at this version. Every `--audit` run recorded in `.claude/gate-runs.log` from 18:07Z onward exits **1**, and `artifacts/engineer-2026-09-08T1100-verify-and-hook.md` shows why: the exit-0 run was made while Doc 06 was still **v2.7.0** ("06 v2.7.0 … show `PASS`"). Bumping to v2.8.0 necessarily makes the audit exit 1 until this report lands. The **substance** is sound and I confirmed it — the exit code is a *report*, not a hook decision (`run_gates.cjs`: "`--audit` exits 1 when documents block, which is a report, not a hook decision"), and the format is genuinely unchanged — but a reader reproducing the stated check sees exit 1 and cannot tell whether the hook edit broke the gate | Qualify the claim to what is true and reproducible: the audit **output format** and the RTM section are unchanged and the hook compiles clean; exit 0 was observed at v2.7.0 **before this version's own bump**, and at v2.8.0 the audit exits 1 **because documents block the review loop** — by design, a report rather than a hook decision — returning to 0 once this version's review report and Doc 02's land |
| **ISS-03** | Low | T2 | Doc 06 **§6**, the new `enrolment_ui` paragraph, sentence beginning "Unlike those two "never" flags, `enrolment_ui` carries a real `removeBy` and is therefore **counted in** the `permanentFlags()` assertion…" | Read literally this says the flag appears in `permanentFlags()`, which is the opposite of the truth and of what UT-0890 asserts: `permanentFlags()` returns flags with **no** `removeBy` (`flags.js:121-123`), so `enrolment_ui` is deliberately **excluded** from its return value, and the assertion is that the list stays `[]`. The intended meaning — the flag is *subject to* the assertion — is recoverable from context, but this paragraph is the ledger's explanation of a flag whose whole justification is that its debt is recorded | Replace "counted in the `permanentFlags()` assertion" with wording that matches the function, e.g. "…carries a real `removeBy`, so it stays **out of** `permanentFlags()` and the standing `permanentFlags() === []` assertion (UT-0890) continues to hold" |
| **ISS-04** | Low | T6 | Doc 06 **§3**, line 768: "Counts are actual as of this session (**2026-09-05**), verified by running `npm test`." | The date heads a table the engineer re-derived at this version (total 625 → **640**, web 101 → **116**) on **2026-09-08**, and `Last updated` in the header is already 2026-09-08. Pre-dates this version (v2.7.0 carried it too), but v2.8.0 edited the table directly beneath it, so it is now two sessions stale and understates the currency of a count the PM will quote at Gate 2 | Advance the parenthetical to **2026-09-08**, or make it version-relative ("as of v2.8.0") so it cannot go stale again on the next count change |

> **Low** issues do not block the pass bar. The single **Medium** (ISS-01) forces the FAIL.

**Calibration, recorded explicitly.** I am applying the same standard the v2.6.0 cycle-1 report set
and the v2.7.0 cycle-2 report confirmed: a mis-statement of the **owed-work register** in this
document is a **Medium** (it misdirects downstream work and, here, invites duplicate ID minting);
claims that merely went **stale** during a live session, without changing what anyone must do, are
**Lows**. ISS-02 sits deliberately on the Low side of that line because the property the sentence
asserts — the hook did not break the gate — is **true**, and I verified it independently; only its
stated evidence is unreproducible.

---

## 7. What is *not* wrong (so the rework does not over-reach)

The engineer should change **nothing** in the following; all were checked and are correct:

- **Any product code, any test code, any hook code.** The Medium and all three Lows are in Doc 06's
  prose. No code fix is required by this report, and the suite must stay at 640.
- The four new `en.ts` strings and their `ar.ts` mirrors — **byte-exact** against DECISIONS §5.3/§5.4.
- UT-0890's 15 assertions — complete against §5.6 A–E, correctly one `it` per assertion, and
  non-vacuous at both ends (the negatives bite; the handles they null-check exist).
- The flag definition, its `onChain: false`, its `removeBy`, and the §6 ledger row.
- §7 item 28, including its explicit statement that this rules **nothing** about
  `home.steps[0].body` / `home.promises[3]` (DECISIONS §5.7) and clears nothing on CON-015.
- The change entry's "TC row for UT-0890 is OWED to the tester … Doc 08 v2.11.3 just closed on the
  cap — not reopened for this row" — accurate on every clause, including "on the cap" (Doc 08's
  header records cycle 5 of 5, PASS, no escalation).
- The `trumocracy-protocol.d.ts` addition and its stated provenance: `permanentFlags()` was already
  exported from `packages/protocol` (`export * from './flags.js'`) and merely absent from the
  hand-written shim, and item 23 genuinely tracks that shim class — I read it.

---

## 8. Routing instruction (to the owning role)

**FAIL → routes to the engineer (Samuel Oyelaran), the owning role.** Fix **ISS-01** (required) and,
while the document is open, **ISS-02**, **ISS-03** and **ISS-04** (recommended — folding them now
costs nothing and none will be cheaper later). Do **not** edit Doc 07 or Doc 08: both are Approved
and correct, and the tester owes only UT-0890's TC row at the next 07/08 touch. Set
`Status: In Review`, and this loop re-reviews as **cycle 2 of 5**.

**Version: bump to `v2.8.1` (patch), not `v2.9.0`.** The `document-review` skill's default for a
Medium FAIL is "at least a minor", but the house has already ruled the narrower case twice this
week: Doc 07 v2.8.0 (FAIL, 1 Medium) reworked to **v2.8.1** on the stated ground that "not one test
case, status, count or ruling changes at this version — every fix is in the header block, and a
version that touches no case does not earn a minor", and Doc 08 v2.11.2 → **v2.11.3** likewise. This
rework is exactly that shape: **no product code, no test, no `UT-####`, no count, no flag, no
ruling, and no normative text changes** — the fixes are two owed-work corrections, one date and one
sentence of explanatory prose. A minor bump here would signal a substantive change that did not
happen, which is its own small inaccuracy in a register the PM reads for Gate 2. If the
project-manager prefers the skill's letter over the house precedent, **v2.9.0** is acceptable and
changes nothing in this report.

**Sequencing note for the project-manager.** `node hooks/run_gates.cjs --audit` will keep exiting 1
until (a) this document's next version carries a passing report and (b) Doc 02 v2.17.3 clears
reviewer-qa's loop. Both are expected mid-session and neither is caused by the hook edit — I
confirmed the audit's format and the RTM section are byte-for-byte the same shape as before the
change.

---

## 9. Coverage owed by me (recorded, not actioned this session)

`UT-0890` has **no `TC` row**. Doc 07 (v2.8.1) and Doc 08 (v2.11.3) are **not reopened** this
session, per `REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md` ("TC rows for the new UT are OWED to the
tester at the next Doc 07/08 touch"). On the pattern the tester used for UT-0889 (one TC per
independently defeatable assertion), UT-0890 will yield on the order of **15** cases across the
`enrolment_ui` flag posture, the flag-off placeholder and DOM negatives, the flag-on intactness, the
new copy's honesty scans and the Arabic mirror. **This is an open item, not a gap I am papering
over:** it is a Should-class guard on a surface that ships dark, it blocks no Must row, and it is
registered here and in Doc 06's change entry so the next Doc 07/08 touch cannot miss it.
