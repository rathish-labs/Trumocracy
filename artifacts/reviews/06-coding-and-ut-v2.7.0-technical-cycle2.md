# Document Review Report — Doc 06 Coding & UT v2.7.0 (+ the code drop), technical mode, cycle 2

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.7.0
Review mode: technical
Reviewer role: tester (Ji-woo Park) — neutral; same assigned reviewer as cycle 1, per artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md; the owning role (engineer, Samuel Oyelaran) is excluded
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

**All six cycle-1 findings are closed, and I verified every one of them against the primary source
rather than against the engineer's note.** ISS-01 (the Medium) is fixed at all four locations by
dated `~~OWED~~ — CLOSED (v2.7.0)` annotations that cite the closing document, its version, its
approval status and its line — Doc 03 **v2.13.0 Approved**, Doc 09 **v1.9.0 Approved**, Doc 07
**v2.6.0** / Doc 08 **v2.9.0 Approved** — and the FR-131 Must row is correctly reframed as **OPEN
(G-PHASE3)**, a requirement-completeness gap on the unbuilt DES-098 control, not owed TC authorship.
Item 26(d) is correctly left as the only open item under that list. ISS-02 through ISS-06 are each
closed at the exact location I named, with annotate-don't-delete respected throughout — no
historical text was rewritten or removed.

I re-ran everything: **625/625 green (contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 ·
web 101)**, `npm run typecheck` exit 0, `npm run lint:deps` clean. The §3 table re-sums to exactly
625 with every per-workspace subtotal matching the run. The four normative strings are **still
byte-exact** against DECISIONS §4.1/§4.2/§5.1/§5.2, and no product source changed this cycle — the
only code edit is the two test changes at ISS-03/ISS-06, exactly as claimed. My re-run of the
FR-131(e) sweep found **no new residue and no regression**.

**PASS at 96%, 0C/0H/0M/3L.** The three Lows are: two version pins that went stale *during this same
session* because sibling documents moved under concurrent authorship (Doc 07→v2.7.0, Doc 08→v2.10.0,
Doc 02→v2.17.1 Approved), and one observation that the ISS-06 fix, while it removes the
false-positive risk I raised, narrowed the Arabic half of the guard further than I recommended. None
of the three changes a substantive claim in the document. I record the calibration explicitly: the
cycle-1 Medium was three cascades across four locations misrepresenting the owed-work register in a
Gate-2-prep document; these are version pins whose underlying facts remain true.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Clause (e) implemented at every ruled site, both locales; my re-sweep found no new residue. The clause-(e) residue inventory is now **exhaustive** — ISS-05 closed by adding the unmounted `PrivacyStatus` `anon` state with a re-review-before-first-mount flag, and by correcting the `private_endorsement` reasoning |
| T2 Soundness | 20 | 96 | 19.2 | Strings still byte-exact; product source untouched this cycle; the ISS-03 jargon scan uses the right list and the right home (inside the UT-0889 block, not a sibling ID). −4 for ISS-C2-03: the ISS-06 tightening is defensible and well-commented but narrower than DECISIONS §5.4's mandate and than the fix I recommended |
| T3 Traceability & IDs | 20 | 95 | 19.0 | ISS-01 closed at all four sites with sourced, dated annotations; the FR-131 row correctly reframed as OPEN (G-PHASE3); §3 arithmetic exact (625, every addend); no `UT-####` minted or reused — UT-0889 gained assertions under the same ID, which is correct. −5 for ISS-C2-01/ISS-C2-02 (version pins and one unresolvable Doc 08 line pin) |
| T4 Security & failure modes | 15 | 96 | 14.4 | The honesty guard still fails the build on the en regression, the sdk regression and the exact Arabic regression; `IS_INSECURE_MOCK` and the capability-absence surfaces untouched. −4 for the narrowed Arabic negative (ISS-C2-03), mitigated by Doc 07 v2.7.0's `TC-3570`..`TC-3575` and Doc 02 Scenario 9's absence test |
| T5 Completeness & testability | 15 | 96 | 14.4 | The jargon bar is now **enforced** rather than asserted; §5.0 carries both missing entries; §3 row and totals current; suite green at 625. −4 for ISS-C2-03 |
| T6 Convention compliance | 10 | 98 | 9.8 | Minor bump correct for a Medium FAIL; `Status: In Review`; ISO dates; **annotate-don't-delete followed rigorously** — every correction is a dated addition placed after the text it corrects, and the historical `v2.7.1` citations inside dated entries are correctly left alone. `Source:` pin advanced to SDD v2.13.0 |
| **Total** | **100** | — | **96%** | — |

---

## 4. Cycle-1 issue closure — verified at source, not taken on trust

| Cycle-1 ID | Severity | Status | Evidence I checked |
|---|---|---|---|
| **ISS-01** | Medium | **CLOSED** | All four locations fixed. **§7 item 26** — the header line is rewritten ("of the four cascades once owed elsewhere, three closed on 2026-09-06 and only the DES-098 control (d) remains open (v2.7.0, ISS-01)"), and (a), (b), (c) each carry a dated `~~OWED~~ — CLOSED (v2.7.0)` block citing Doc 03 v2.13.0 Approved (lines 1766/1753/2955), Doc 09 v1.9.0 Approved (line 909), and Doc 07 v2.6.0 / Doc 08 v2.9.0 Approved with `TC-3564`..`TC-3569` mapped to UT-0887/UT-0759/UT-0888. I re-confirmed Doc 03 is Approved at v2.13.0 and Doc 09's `~~REL-LIM-18~~ CLOSED` row at line 909. The **FR-131 Must row** is correctly reframed: "not 'owed' TC authorship … Doc 08 records it **OPEN (G-PHASE3)**" — Doc 08's own header (line 15) says "THE FR-131 MUST ROW STAYS OPEN (G-PHASE3)". **26(d)** is explicitly "the only item under this numbered list still open". **Change history** — a dated correction paragraph follows the stale v2.6.0 clause, original preserved. **§3 closing note** — carries the `(v2.7.0, ISS-01 correction: …)` parenthetical. **§4a deviation** — carries the correction that the SDD cascade landed at Doc 03 v2.12.0. Advisory also taken: header `Source:` advanced `SDD v2.7.1 → v2.13.0` |
| **ISS-02** | Low | **CLOSED** | §5.0 now leads with the **v2.6.0 cycle 1 FAIL** entry (94%, 0C/0H/1M/5L, all six issues summarised) and carries the previously missing **v2.5.1 cycle 2 PASS** entry (98%, 0C/0H/0M/2L, both Lows folded into v2.6.0). The log is current for the first time in three versions |
| **ISS-03** | Low | **CLOSED** | New `it('neither corrected string contains banned blockchain jargon (§2.2, DES-085)')` inside the UT-0889 describe block, scanning **both** `en.home.steps[1].body` and `en.home.promises[0]` against the eleven-word list (wallet, seed phrase, private key, gas, token, mint, on-chain, blockchain, crypto, nullifier, hash) — the same list DECISIONS §4.1 applied by hand. Correctly added as an assertion under the existing UT ID rather than minting a new one. §3 row count 5 → **6**, total 624 → **625**, web addend → 101; all three re-derived and correct |
| **ISS-04** | Low | **CLOSED** | §2.2 now states the truth — enforcement is by the per-story jargon-scan tests (`UT-0740`/`UT-0857`/`UT-0868`/`UT-0884`/`UT-0889`), *not* CI; it names `verify.yml` and `dco.yml` explicitly, says "There is no `packages/protocol/src/flags.js`-boundary CI scan; that description was aspirational, not built", and tells a future author to update the line if a CI job is added. §4a's "How verified" cell is corrected to match |
| **ISS-05** | Low | **CLOSED** | "Still stand, and why" now inventories both sites. `PrivacyStatus.tsx:251-252` (`anon` title/subtitle) added with the correct reason (not public-facing — unmounted on every consuming surface) and **flagged for re-copy-review before first mount**, on the stated precedent of the `ver` title. The `private_endorsement` reasoning is corrected exactly as the finding asked: the description string names no phase, so it stands because it is developer-facing configuration, "conclusion unchanged (it stands; DECISIONS §5.3), reasoning corrected" |
| **ISS-06** | Low | **CLOSED** (see ISS-C2-03) | `apps/web/test/safety-surfaces.test.tsx:~355` now asserts `not.toContain('اسمك سريًا')` — the exact retired phrase — with an inline comment naming the false-positive words (`سريعًا`, `تسري`) and citing the finding. The bare `'سري'` and looser `'سريًا'` checks are removed. The false-positive risk I raised is gone; a residual observation is recorded below |

---

## 5. Verification performed this cycle

**5.1 Suites — re-run by me.**

| Command | Result |
|---|---|
| `npm test` | **625 passed, 0 failed** — contracts **95** · protocol **151** · sdk **244** · ui **18** · indexer **16** · **web 101** |
| `npm run typecheck` | exit **0** (`packages/ui`, `apps/web`) |
| `npm run lint:deps` | "dep-guard: 7 workspace package(s) checked — layering OK", exit **0** |

Machine-summed the §3 table: **625**, and per workspace protocol 151 / contracts 95 / indexer 16 /
web 101 / ui 18 / sdk 244 — **each matches the observed run exactly**. The web addend sentence
(16+27+27+1+18+2+4+**6**) = 101 is arithmetically correct. The `+1` over v2.6.0 is the ISS-03
assertion, as claimed.

**5.2 The code drop is unchanged, and still correct.** I re-ran my cycle-1 extraction-and-diff:
`en.home.steps[1].body` vs DECISIONS §4.1, `en.home.promises[0]` vs §5.1, `ar.home.steps[1].body` vs
§4.2, `ar.home.promises[0]` vs §5.2 — **all four still EXACT MATCH**. `git diff --stat HEAD` over
`apps/web/src` and `packages/*/src` returns the identical five-file, 22-insertion/14-deletion
footprint I measured at cycle 1, confirming the claim that no product source changed this cycle;
the only code edit is `apps/web/test/safety-surfaces.test.tsx`.

**5.3 FR-131(e) re-sweep — no new residue, no regression.** Re-ran the English and Arabic sweeps
over `apps/web/src/i18n/*.ts` and `packages/*/src/**`. The hit set is **identical to cycle 1** and
every hit keeps the disposition recorded in
`artifacts/reviews/06-coding-and-ut-v2.6.0-technical-cycle1.md` §6: FR-131(a)'s mandated negated
banner, the `joinPrivate`/`anonymityTooSmall` **key names**, the enrolment strings excluded by clause
(e) and routed unruled (DECISIONS §7.1 / Doc 02 §13 (j)), the k-anonymity set-size parameters, the
v2/ZK NatSpec, the marked FR-082 doc comments, and `ballot.js` / `private_endorsement`. The one
Arabic false positive (`تسري`, `ar.ts:123`) is unchanged and is now explicitly **outside** the
guard's assertion, which is the point of the ISS-06 fix.

**5.4 Upstream citations re-checked at HEAD.** Doc 02 is **v2.17.1, Approved**
(`02-requirements-srs-v2.17.1-business-cycle2.md`, PASS 96%, 0C/0H/0M/7L): clause (e) survives the
recast with its substance intact — "public-facing strings, screens, READMEs and other materials — in
any language — MUST NOT assert that a **participation act** is unknowable to Trumocracy", with the
grade-8 reader test and the `joinPrivate`/UT-0869 safe harbour — and **Scenario 8** (clause (e)) and
**Scenario 9** (the absence test across every v1 surface, in every language, including the README)
are both present at §8. Nothing Doc 06 asserts about clause (e) is affected by the patch. Doc 03
v2.13.0 Approved, Doc 09 v1.9.0 Approved: both confirmed.

---

## 6. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C2-01 | Low | T3 | §7 item 26(c) closure block; §3 closing-note parenthetical | The ISS-01 closure pins Doc 07 and Doc 08 at the versions they held when the rework was written — "Doc 07 is **now** v2.6.0, Approved and Doc 08 is **now** v2.9.0, Approved" — and states "The only `TC` row still owed by the tester is **UT-0889's**". Both moved during this same session under concurrent authorship: Doc 07 is **v2.7.0 (In Review)** and Doc 08 **v2.10.0 (In Review)**, and Doc 08's header records that Doc 07 v2.7.0 mints **`TC-3570`..`TC-3575`**, which cover UT-0889 — so that row is authored too. **The substantive closure is unaffected and holds a fortiori** (the approvals at v2.6.0/v2.9.0 are historical facts, and the newer versions go further). Separately, the pin "(Doc 08 line 16, 81-82)" does not resolve: the FR-131 OPEN (G-PHASE3) statement is at Doc 08 **line 15**, and 81-82 is unrelated change-history text about BKLG/MTP | Phrase the pins as **"as approved at Doc 07 v2.6.0 / Doc 08 v2.9.0"** rather than "is now"; refresh to Doc 07 v2.7.0 / Doc 08 v2.10.0 (In Review) and record that UT-0889's TC row is now authored as `TC-3570`..`TC-3575`; drop the Doc 08 line pin or re-derive it (line 15). Fold at the next touch — this does **not** need its own version |
| ISS-C2-02 | Low | T6 | Change history, v2.7.0 entry, final clause: "Not done in this session, unchanged from v2.6.0: Doc 02 v2.17.0's own document-review loop…" (line ~73) | New v2.7.0 prose names Doc 02 at **v2.17.0** with its review loop still pending. Doc 02 is **v2.17.1, Approved** at HEAD, with clause (e) recast under RFC 2119 (positive subject + MUST NOT) and Scenarios 8/9 added. The recast carried **no normative change** (hence the patch bump), so nothing Doc 06 relies on is wrong — this is a version pin and an implication about another document's loop state. The historical citations at lines 77, 128 and 1098 sit inside dated `(v2.6.0)` entries and are **correct as written**; only the new clause is stale | Update the v2.7.0 clause to cite **Doc 02 v2.17.1 (Approved)** and drop it from the "not done / still pending" list, or restate it as "not this role's to do" without a version pin. Leave the dated historical citations alone |
| ISS-C2-03 | Low | T2 / T4 / T5 | `apps/web/test/safety-surfaces.test.tsx`, the UT-0889 Arabic `it()` (~line 348-356) | The ISS-06 fix removes the false-positive risk I raised, but it narrows the Arabic negative from a **root ban** to a **single exact historical phrase** (`اسمك سريًا`), and the looser `سريًا` check was removed with it. That is narrower than DECISIONS §5.4's mandate ("does not contain `سريًا`/`سري` … in the endorsement step") and narrower than the word-boundary-aware matching my cycle-1 finding recommended. The Arabic `it()` now makes **no positive assertion at all**, unlike its English siblings ("public act", "name is not shown", "our own records can link"), so a *paraphrased* secrecy claim — e.g. `يبقى اسمك سرًا`, `دعمك سري` — would pass the guard. This matters specifically because the **ARABIC-I18N native-speaker rewrite is owed pre-Gate 2** (DECISIONS R-7): the guard is at its narrowest exactly when the copy it protects is scheduled to change. Mitigated by Doc 07 v2.7.0's `TC-3570`..`TC-3575` and Doc 02 Scenario 9's absence test, and by the fact that the shipped strings are correct today. The engineer implemented the coordinator's explicit direction and documented the reasoning well in an inline comment — this is a note on where the fix landed, not a departure from instruction | Add the three **positive** Arabic facts to the same `it()`, mirroring the en assertions (public act, name not shown, our records can link — e.g. `علني`, `لا يُعرض اسمك`, `لسجلاتنا نحن أن تربطه`), and/or a word-boundary-aware pattern on the root, so the guard still bites after the native-speaker rewrite. Attach to the ARABIC-I18N item so it lands with that rewrite rather than before it |

> All three are **Low** and none blocks the pass bar. **Calibration, stated so it is auditable:**
> ISS-C2-01 and ISS-C2-02 are the same *class* as the cycle-1 Medium but not the same *magnitude* —
> that Medium was three cascades across four locations misrepresenting the owed-work register in a
> Gate-2-prep document; these are version pins whose underlying facts remain true, on documents that
> moved under concurrent authorship after this version was written. Grading them Medium would make
> it impossible for any document to pass during a session in which its siblings are being reworked
> hourly.

---

## 7. Routing instruction (to the owning role)

**PASS → the engineer (Samuel Oyelaran) sets `Status: Approved` on Doc 06 v2.7.0** and the SOP
advances. No new version is required by this review.

The three Lows are **carried, not blocking**, and should be folded at the next touch of this
document — ISS-C2-01 and ISS-C2-02 are one-line pin refreshes; ISS-C2-03 belongs with the owed
**ARABIC-I18N** native-speaker rewrite (technical-writer, pre-Gate 2) so the guard and the copy move
together. Item **26(d)** — the DES-098 acknowledge-to-proceed control — remains the one genuinely
open item under §7 item 26, correctly recorded, and is unaffected by this review.

**Downstream:** the `TC` chain for UT-0889 is with the tester's Doc 07 v2.7.0 / Doc 08 v2.10.0
(In Review, separate instance, separate reviewer per the assignment record) and is outside this
review's scope. `reviewer-qa` remains the independent Gate-2 merge signer; this PASS is a
quality-loop verdict, not a merge sign-off.

---

## 8. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5 and the verdict is PASS.
