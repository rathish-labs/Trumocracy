# Document Review Report — Doc 06 Coding & UT v2.8.1 (+ the code drop), technical mode, cycle 2

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.8.1
Review mode: technical
Reviewer role: tester (Ji-woo Park) — neutral; same assigned reviewer as cycle 1, per artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md; the owning role (engineer, Samuel Oyelaran) and the product-owner (who chose the remedy) are both excluded
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 2 of 5
Verdict: PASS
```

Assignment record: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md` (§ "Neutral
reviewers (recorded BEFORE dispatch)", row 1).
Cycle-1 report: `artifacts/reviews/06-coding-and-ut-v2.8.0-technical-cycle1.md` (FAIL 95%, 0C/0H/1M/3L).
Rework note under review: `artifacts/engineer-2026-09-08T1900-doc06-rework.md`.

---

## 1. Summary (BLUF)

**All four cycle-1 findings are closed, and I verified every one of them against the document on
disk and the primary sources it cites — not against the engineer's note.** ISS-01 (the Medium) is
fixed at **both** locations in exactly the form the cycle-1 report required: §3's closing note is
restricted to **UT-0890 only**, with a dated `(v2.8.1, ISS-01 correction: …)` appended **after** the
pre-existing v2.7.0 annotation (which is preserved verbatim), and §7 item 26(c)'s sentence is left
**untouched** with the dated correction appended immediately beneath it. Both corrections state the
same two facts, and I re-verified each independently: **Doc 07 v2.8.1 (Approved)** carries all seven
of `TC-3570`, `TC-3571`, `TC-3572`, `TC-3573`, `TC-3574`, `TC-3575`, `TC-3576` — I grepped for each
ID individually — and **Doc 08 v2.11.3 (Approved, closed on the cap, cycle 5 of 5, no escalation)**
carries them at line 530 with the quoted text matching character-for-character. **Neither Doc 07 nor
Doc 08 was edited**: `git diff HEAD -- docs/07-* docs/08-*` returns zero lines. The duplicate-mint
hazard the Medium created is gone, and no residual claim that UT-0889's TC row is owed survives
anywhere in the document except inside correctly dated historical entries, which annotate-don't-
delete requires be left alone.

The three Lows are closed at the exact locations named: ISS-02's unreproducible audit claim is
replaced with a qualification that is now **true and reproducible** (format and RTM section
unchanged, `py_compile` clean, exit-0 observed at v2.7.0 before the bump, exits 1 at v2.8.0 by
design as a report not a hook decision); ISS-03's §6 sentence now says the flag stays **out of**
`permanentFlags()` "(which returns only flags with no `removeBy`)" — which matches
`flags.js:121-123` and what UT-0890 actually asserts; ISS-04's counts line is now version-relative,
"as of v2.8.1 (2026-09-08)".

**No product code, no test code and no hook code changed.** I confirmed this the strong way rather
than by reading the note: I re-took the MD5 of all nine files I reviewed at cycle 1, and **every
hash is byte-identical** to the cycle-1 values. `npm test` is **640/640 green** (contracts 95 ·
protocol 151 · sdk 244 · ui 18 · indexer 16 · web 116), unchanged. §3's table still totals 640 with
web at 116. The patch bump (v2.8.0 → v2.8.1) is the right call and matches the cycle-1 routing
instruction and the house precedent it cited.

**PASS at 97%, 0C/0H/0M/3L.** The three Lows are all new-this-cycle and none touches a substantive
claim: §5.0's review-history list has not been updated for two cycles; the "Not done in this
session" list names two items that closed **after** the engineer stopped; and the §3 sentence the
rework fixed still cross-references `§7 item 26` where **item 28** is now the item that registers
UT-0890's owed row. I record the calibration explicitly: the cycle-1 Medium was a live
misdirection of downstream work with an ID-collision hazard; these are a stale log, a
concurrency-stale list, and a one-word pointer.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Unchanged from cycle 1 and re-confirmed: approver decision 3 (all five clauses) and decision 1 / remedy (a) (all six items of DECISIONS §5.5) remain fully met. This rework touches no coverage surface — the nine code/test files are byte-identical to the state I passed on coverage at cycle 1 |
| T2 Soundness | 20 | 98 | 19.6 | The ISS-03 correction is now *technically exact*, not merely better phrased: "stays **out of** `permanentFlags()` (which returns only flags with no `removeBy`)" matches the implementation's filter and the assertion UT-0890 makes. The ISS-02 correction correctly distinguishes an audit **report** exit code from a hook **decision**, which is the distinction `run_gates.cjs` itself draws |
| T3 Traceability & IDs | 20 | 94 | 18.8 | ISS-01 closed at both cited locations with facts I verified at source: all **seven** `TC-3570`..`TC-3576` present in Doc 07 v2.8.1 (Approved), Doc 08 v2.11.3 (Approved) line 530 quote exact, NFR-023 row carries the `TC-3576` link. No `UT-####` or `TC-####` minted, reused or renumbered by this version; Doc 07/08 untouched (zero-line diff). −6 for ISS-C2-01 (§5.0 review-history missing two cycles) and ISS-C2-03 (the repaired §3 sentence points at §7 item 26 where item 28 is now the right target) |
| T4 Security & failure modes | 15 | 98 | 14.7 | Identical to cycle 1 by construction — the flag, the gate, the placeholder, the guard and `IS_INSECURE_MOCK` discipline are byte-identical. Nothing in a prose rework can regress them, and I confirmed the hashes rather than assuming it |
| T5 Completeness & testability | 15 | 96 | 14.4 | Suite still **640/640**; §3's total and every web addend still re-derive exactly (16+27+27+1+18+2+4+6+15 = 116; 95+151+244+18+16+116 = 640). The ISS-02 fix makes a previously unreproducible claim reproducible. −4 for ISS-C2-01/ISS-C2-02 |
| T6 Convention compliance | 10 | 96 | 9.6 | **Patch bump correct** and well-justified in the entry itself, citing the same Doc 07 v2.8.1 / Doc 08 v2.11.3 precedent the cycle-1 report cited. `Status: In Review`, cycle named, neutral reviewer named. **Annotate-don't-delete followed rigorously** — item 26(c)'s wrong sentence is preserved *verbatim* with the correction beneath it, the v2.7.0 annotation is preserved beneath the §3 rewrite, and the header's `Previously:` chain now nests three deep (v2.8.0 → v2.7.0) with no history deleted. ISO dates throughout. −4 for ISS-C2-02 |
| **Total** | **100** | — | **97%** | — |

---

## 4. Cycle-1 issue closure — verified at source, not taken on trust

| Cycle-1 ID | Severity | Status | Evidence I checked |
|---|---|---|---|
| **ISS-01** | Medium | **CLOSED** | **Location 1 — §3 closing note (line 881):** now reads "Every `UT-####` maps to an `FR`/`NFR`/`RISK` in the RTM (Doc 08) — the **UT-0890** block's TC row is owed to the tester". UT-0889 is gone from the claim. The v2.7.0 annotation (UT-0887/UT-0759/UT-0888, FR-131 OPEN (G-PHASE3)) is preserved **verbatim**, and a new `**(v2.8.1, ISS-01 correction:** …)` follows it (lines 888–895) quoting the wrong v2.8.0 text, stating "**UT-0889's are not**", citing Doc 07 **v2.8.1** (Approved) minting `TC-3570`..`TC-3576`, Doc 08 **v2.11.3** (Approved, closed on the cap) carrying them with the line-530 quote and the `TC-3576`/NFR-023 link, concluding "The only `TC` row owed to the tester is **UT-0890's**", and stating Doc 07/08 are not edited. **Location 2 — §7 item 26(c) (line 1263):** the original sentence "The only `TC` row still owed by the tester is **UT-0889's** (new at v2.6.0/this version)." is **preserved verbatim**, exactly as the required fix specified ("append a dated correction after the existing sentence, do not rewrite it"), with `**(v2.8.1, ISS-01 correction:** …)` appended at 1264–1269 recording the same two facts and "The sole owed `TC` row today is **UT-0890's** (§7 item 28)". **Independent verification:** I grepped Doc 07 for each of the seven IDs individually — `TC-3570` (37 hits), `TC-3571` (5), `TC-3572` (3), `TC-3573` (11), `TC-3574` (17), `TC-3575` (22), `TC-3576` (22) — read Doc 07's header (**v2.8.1, Approved**) and Doc 08's (**v2.11.3, Approved**, "loop closed ON the cap, cycle 5 of 5, no escalation"), and read Doc 08 line 530 in full. **Residue sweep:** every remaining co-occurrence of "UT-0889" and "owed" in Doc 06 is inside a correctly dated historical entry (the v2.6.0 change entry at line 279, the §5.0 v2.6.0 log line at 973) or inside the corrections themselves — nothing that annotate-don't-delete would have me change. **Doc 07/08 untouched:** `git diff HEAD --stat -- docs/07-* docs/08-*` → zero lines |
| **ISS-02** | Low | **CLOSED** | Change history, v2.8.0 entry item (1), lines 107–113. The unqualified "still exits 0" is gone. The replacement states only what is true and reproducible: "`--audit`'s **output format and the RTM section are unchanged** from v2.7.0's shape, and `python -m py_compile hooks/check_gates.py` compiles clean (stdlib-only preserved). The exit-**0** run was observed while Doc 06 was still **v2.7.0**, before this version's own bump; at **v2.8.0 itself `--audit` exits 1**, because this document (and, separately, Doc 02) block the review loop — by design a **report**, not a hook decision — returning to 0 once this version's review report and Doc 02's land (v2.8.1, ISS-02)." That is the fix as specified, and it is now consistent with what I observe: the audit exits 1 with **Doc 06 as the only blocker**, Doc 02 v2.17.3 having since passed |
| **ISS-03** | Low | **CLOSED** | §6, lines 1069–1072: "Unlike those two "never" flags, `enrolment_ui` carries a real `removeBy` (the enrolment sprint, blocked on CON-015), so it stays **out of** `permanentFlags()` (which returns only flags with no `removeBy`) and the standing `permanentFlags() === []` assertion (UT-0890) continues to hold, like every other non-permanent flag (v2.8.1, ISS-03)." I re-read `packages/protocol/src/flags.js:121-123` (`filter((f) => !f.removeBy)`) and UT-0890's `expect(permanentFlags()).toEqual([])`: the sentence now describes both correctly. The rest of the paragraph (the `onChain:false` justification, the UT-0055 note) is unchanged and was already correct |
| **ISS-04** | Low | **CLOSED** | §3, lines 834–835: "Counts are actual as of **v2.8.1 (2026-09-08)**, verified by running `npm test` (v2.8.1, ISS-04: version-relative wording so this line cannot go stale again on the next count change)." Both halves of the suggested fix taken — the date advanced *and* the wording made version-relative so the failure mode does not recur |

---

## 5. Independent re-verification of the code drop (nothing regressed)

The cycle-1 report's §7 said no code change was required. I confirmed none happened, by hash rather
than by inspection of a diff that could omit a file:

| File | MD5 at cycle 1 | MD5 now | Same? |
|---|---|---|---|
| `hooks/check_gates.py` | `bc5de1fb…d89ae1` | `bc5de1fb…d89ae1` | yes |
| `packages/protocol/src/flags.js` | `92923f41…009e0` | `92923f41…009e0` | yes |
| `apps/web/src/app/verify/page.tsx` | `0f7466df…24080` | `0f7466df…24080` | yes |
| `apps/web/src/components/SiteHeader.tsx` | `393a9dc7…58ce2` | `393a9dc7…58ce2` | yes |
| `apps/web/src/i18n/en.ts` | `d31fcd3e…c1414` | `d31fcd3e…c1414` | yes |
| `apps/web/src/i18n/ar.ts` | `561f9f6b…e37b12` | `561f9f6b…e37b12` | yes |
| `apps/web/test/safety-surfaces.test.tsx` | `e8e0b8cf…80d3ad` | `e8e0b8cf…80d3ad` | yes |
| `apps/web/src/config/flags.tsx` | `2bd5b38f…2669e4` | `2bd5b38f…2669e4` | yes |
| `apps/web/types/trumocracy-protocol.d.ts` | `c196723d…b05294` | `c196723d…b05294` | yes |

Because the drop is byte-identical, every cycle-1 verification carries forward unchanged and is not
re-litigated here: the byte-exactness of both locales against DECISIONS §5.3/§5.4, the non-vacuity
of UT-0890's DOM negatives, the dark-by-default posture, and the clause-by-clause satisfaction of
decision 3. Re-run this cycle for currency:

- `npm test` → **640/640 green** (contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 116)
- `node hooks/run_gates.cjs --audit` → exit 1, **one** document blocking: `06-coding-and-ut.md
  v2.8.1 — no report for this version` (this report). Every other document PASSes, including
  `02-requirements-srs.md v2.17.3`. RTM section unchanged: 138 Must rows, 16 COMPLETE, 122 OPEN,
  signals AGREE, Gate 2 criterion NOT MET (Gate-2 readiness only, untouched by a prose rework)

`npm run typecheck` and `npm run lint:deps` were not re-run this cycle and are not claimed here:
the code is byte-identical to the state where I ran both clean at cycle 1 (§4 rows 2–3 of that
report). I record that as an explicit scope statement rather than repeating a stale result — which
is the same discipline ISS-02 asked of the engineer.

---

## 6. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-C2-01** | Low | T3 | Doc 06 **§5.0 "Scaffold-drop technical review record"**, line ~972: "Review history for this document:" — the list is topped by `v2.6.0 cycle 1` | The document's own review-history log is **two cycles stale**. It is missing the **v2.7.0 cycle 2** entry (PASS 96%, 0C/0H/0M/3L — the review that approved v2.7.0) and the **v2.8.0 cycle 1** entry (FAIL 95%, 0C/0H/1M/3L — the review this very version reworks). The authoritative records are correct and unaffected (`artifacts/reviews/` holds both reports; the header block and the new change entry both state "cycle 2 of 5 against …v2.8.0-technical-cycle1.md"), so nobody is misled about the loop's state — which is why this is Low, not Medium. But §5.0 is the only place the document narrates its own loop, the cap is counted **per document**, and this is the *third* time a stale §5.0 line has been a finding here (v2.3.1 ISS-C2-02, v2.3.3, v2.6.0 ISS-02 — the last of which was scored Low for exactly one missing entry) | Append the two missing entries at the top of §5.0 in the existing house format (version + cycle, report filename, verdict with severity counts, neutral reviewer, and what was reworked where). Adding the v2.8.1 cycle-2 line at the same time is sensible once this report lands |
| **ISS-C2-02** | Low | T6 | Doc 06 change history, **v2.8.1 entry**, the closing list "Not done in this session, **unchanged from v2.8.0**: … the README/CONTRIBUTING `/verify` inventory line (technical-writer) … Doc 02 v2.17.x's own review loop (product-owner/reviewer-qa, not this role's to do)" (lines ~79–85) | Two of the listed items **closed after the engineer stopped**, so the list is stale at HEAD: **Doc 02 is v2.17.3 Approved** and PASSes in the audit I just ran, and the **README/CONTRIBUTING `/verify` delta PASSED its own review at cycle 2, 97%** (`artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify-cycle2.md`, 20:21Z — after the 19:00Z rework). In fairness this is largely defensible as written: the clause is scoped as "not done **in this session** … not this role's to do", which is a statement about the engineer's scope, not about the world; and both items moved under concurrent authorship he could not see. It is the same "went stale during the same session" class the v2.7.0 cycle-2 report scored Low. What tips it into a finding at all is the header "**unchanged from v2.8.0**", which does assert a state, and which is not true of either item (nor of the list itself, which correctly dropped v2.8.0's own review-loop line) | Either drop "unchanged from v2.8.0" from the header, or append a dated one-line note recording that Doc 02 reached **v2.17.3 Approved** and the README/CONTRIBUTING delta **PASSED at cycle 2 (97%)** after this rework was written. Do **not** restate either document's status as a fact this document owns — a pointer is enough |
| **ISS-C2-03** | Low | T3 | Doc 06 **§3**, line 882 — the sentence repaired by the ISS-01 fix: "the **UT-0890** block's TC row is owed to the tester (**§7 item 26**; per the review assignment, Doc 08 not reopened for it mid-session)" | The cross-reference did not move with the claim. At v2.7.0 that sentence was about **UT-0889**, whose owed row was tracked in §7 **item 26(c)** — so "(§7 item 26)" was right. Now the sentence is about **UT-0890**, and §7 **item 28** is the item that registers the `/verify` gate and its guard, while item 26(c) now records the opposite (that UT-0889's row is *no longer* owed). A reader following the pin lands on a closure notice instead of the open debt. The document does carry the correct pointer once — item 26(c)'s own correction says "The sole owed `TC` row today is **UT-0890's** (§7 item 28)" — which is why this is cosmetic rather than misleading | Change the parenthetical in §3 to **§7 item 28** (optionally "§7 items 26(c) and 28" if the trail to the closure notice is worth keeping) |

> **Low** issues do not block the pass bar. There are **no Critical, High or Medium** issues, and
> the score is ≥95%, so this version **PASSES**.

**Calibration, recorded explicitly.** The cycle-1 Medium was a live misdirection of downstream work
— it told the next tester to mint TC rows that already existed, with an ID-collision hazard, in the
register the PM reads for Gate 2. All three findings here are of a different order: a log that lags
its own loop, a scope list overtaken by two concurrent sessions, and a section pointer that did not
follow its sentence. None changes a fact about the code, the counts, the flags, the guard or the
owed work. I would not fail a Gate-2-prep document on any of them, and I do not.

---

## 7. Routing instruction (to the owning role)

**PASS → the engineer (Samuel Oyelaran) sets `Status: Approved`** on Doc 06 v2.8.1, citing this
report, and the SOP advances. The review loop for Doc 06 closes at **cycle 2 of 5**, no escalation.

The three Lows are **carried, non-blocking**, to fold at the next touch of this document — the house
pattern used at v2.5.0→v2.5.1 and v2.7.0. Recommended, in priority order: **ISS-C2-01** (§5.0 is
cheapest to fix now, while both missing entries are fresh, and it has recurred three times);
**ISS-C2-03** (a one-word pointer); **ISS-C2-02** (a header phrase). None warrants a version bump on
its own; fold them into whatever version next opens for a substantive reason. Do **not** reopen
Doc 07 or Doc 08 for any of them.

**Gate note for the project-manager.** With this report on disk, `node hooks/run_gates.cjs --audit`
should reach **exit 0** — Doc 06 v2.8.1 was the single remaining blocker, and every other gated
document already PASSes. That closes the review-loop invariant (c) for all ten documents. It does
**not** close Gate 2: the RTM criterion remains NOT MET (16 of 138 Must rows COMPLETE), which is a
Gate-2 readiness condition certified separately with `--gate2`, not a per-stop or merge condition.

---

## 8. Coverage owed by me (unchanged, recorded again so it cannot be lost)

`UT-0890` still has **no `TC` row**, and Doc 07 (v2.8.1) / Doc 08 (v2.11.3) remain **unopened** this
session, per the review assignment. This is the tester's debt, it is registered in Doc 06 §3, §7
item 28 and the v2.8.0 change entry, and it blocks no Must row — `enrolment_ui` ships dark, so the
surface UT-0890 guards is not reachable above `dev`. Expect ~15 cases on the UT-0889 pattern (one
per independently defeatable assertion) at the next Doc 07/08 touch.
