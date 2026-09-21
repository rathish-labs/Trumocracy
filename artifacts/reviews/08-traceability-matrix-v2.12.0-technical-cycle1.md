# Document Review Report — Doc 08 Traceability Matrix v2.12.0 (technical, cycle 1)

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.12.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 92%
Critical: 0
High: 0
Medium: 3
Low: 2
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 08 v2.12.0 brings `TC-3577`..`TC-3591` into the matrix, folds the carried Low, records run
**R-20** and rules — correctly — that **nothing normative moves: 138 Must · 16 COMPLETE · 122
OPEN**. I re-derived that independently (`node hooks/run_gates.cjs --audit`: both signals agree)
and I re-derived the *reasoning*, clause by clause against Doc 02 §4.46, not just the number. The
FR-131-versus-FR-132 ruling is **right**, and it is right for the reason the document gives. Every
headline figure re-derives: `136 + 109 = 245`, `500 − 245 = 255`, `245 + 15 + 233 = 493`,
`491 − 1 + 10 = 500`. The version reaches §3.1, §3.2, §4, §6 (dashboard, convention note, DoD
check), §7 (entries 117 and 118), §9 (gate row) and the §9 sign-off — six of the seven places a
figure lives.

It **FAILs** on the seventh, and on two traceability defects. **(1)** The §9 gate row now states
its own denominator **twice and differently** — the headline says 493 and the "Denominator note"
three sentences later says 478, while quoting §6 at 485 when §6 now says 500. That is the
"correction that did not reach every place" defect, this time *inside the cell the correction
edited*. **(2)** `TC-3586` is asserted as FR-132 evidence, which Doc 07 v2.9.0 — written in the
same touch, by the same author — does not support: its TC-3586 row verifies `US-0133 · NFR-023 ·
DES-085` and names no FR. That creates a **fresh instance of the `TD-RTM-03` defect class** in the
version that discloses the old one, and it contradicts the explicit TC-3576 precedent this document
set at v2.11.0. **(3)** FR-132's Requirement cell still summarises only the DES-100 seam shape while
the row now carries clause-by-clause rulings on §(a)–(e) and fifteen cases verifying §(d) — the
same defect this document fixed for FR-131 at v2.9.0.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`92%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (3)
- **Verdict:** `FAIL` — route to the tester for **v2.12.1** (or v2.13.0), cycle 2 of 5.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 88 | 17.6 | The FR-132 clause-by-clause ruling is thorough and correct, and the §7 entry 117 "this drop touches FR-131 not at all" record is the right way to log a non-change. Minus for ISS-03: the row's **Requirement** cell describes the DES-100 seam, not FR-132, so the clause the fifteen cases verify does not appear in the column that states the requirement |
| T2 Soundness | 20 | 96 | 19.2 | Every substantive ruling holds under independent re-derivation: Must 138/16/122, FR-131 excluded by Doc 02 §4.45's own closing sentence, FR-132 open on four unbuilt clauses plus a §(d) duty resting on a non-existent DES-098, NFR-023 still `G-UI`, US-0133 not at DoD, gaps 255 unchanged. TC-3587 recorded as "the right fact on a surface that is not the one §(d) names" is exactly the call I would have made |
| T3 Traceability & IDs | 20 | 85 | 17.0 | Minus for ISS-01 (an FR-132 → TC-3586 link Doc 07 does not carry) and ISS-02 (the §9 cell contradicting itself on its own denominator). Otherwise the chain work is sound: BR-006, BR-012 → FR-132 → DES-095/DES-100 → US-0133 → TC-3577..TC-3591 closes at every link except the SCR cell, which is correctly declined |
| T4 Security & failure modes | 15 | 96 | 14.4 | Reversibility is recorded properly: the route is dark above `dev`, the flag carries a `removeBy`, and the document says in terms that "nothing these cases guard is a shipped capability". The Gate-2 verdict table stays **FAIL** on all six rows; rollback still "never drilled" |
| T5 Completeness & testability | 15 | 93 | 13.95 | All fifteen cases carry evidence and a run id; the DoD check is done story by story. Minus for ISS-04 — §10, the debt register, is the one section not refreshed while the debts it registers had their live content changed elsewhere |
| T6 Convention compliance | 10 | 95 | 9.5 | Retained-record convention, ISO-8601, pin annotations and the "named rather than half-done" discipline all honoured; the v2.11.3-closed-on-the-cap-then-fresh-cycle-1 reasoning is correct |
| **Total** | **100** | — | **92%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | T3 | §3.1 FR-132 row, `TC` cell and Evidence cell ("TC-3479, TC-3480, **TC-3577..TC-3591**"); §9 gate row, v2.12.0 parenthetical ("… enter at the §3.1 **FR-132** row (and TC-3586 *additionally* at the §3.2 **NFR-023** row)") | **An FR-132 → TC-3586 link is asserted that Doc 07 v2.9.0 does not support.** Doc 07's TC-3586 row reads "Verifies US-0133 · **NFR-023 · DES-085**" and names no FR; its own note says "Doc 08 **v2.12.0** records the NFR-023 → TC-3586 link" — singular. Written as a contiguous range, the FR-132 cell silently absorbs it, so the row claims **fifteen** cases where **fourteen** are FR-132 evidence. This contradicts the precedent this document set one version ago at v2.11.0: "**TC-3576 verifies `NFR-023 · DES-085`, not FR-131 clause (e)**, so it enters this matrix at the §3.2 NFR-023 row and **adds nothing to the FR-131 chain**" — and TC-3576 is correctly absent from the FR-131 `TC` cell. Substantively, a DES-085 jargon scan tests **readability**, not the honesty posture §(d) imposes. The effect is a **new instance of the `TD-RTM-03` defect class — Docs 07 and 08 disagreeing about which requirement a case verifies — created in the very version that discloses the old one** | Write the FR-132 `TC` cell as **TC-3577..TC-3585, TC-3587..TC-3591** (or as the range, minus TC-3586, stated in terms); do the same in the Evidence cell and in §7 entry 118; correct the §9 parenthetical so TC-3586 enters at NFR-023 **only**. If the tester holds that TC-3586 *is* FR-132 §(d) evidence, then Doc 07's TC-3586 row must say so — the two documents must not be left disagreeing |
| ISS-02 | **Medium** | T3 | §9, "Tests green across the requirement set" row — the "**Denominator note (added v2.7.0)**" inside the cell v2.12.0 edited | **The cell states its own denominator twice and differently, both in the present tense.** The headline now reads "**245 of 493** carry passing evidence … 245 + 15 + 233 = **493**". Three sentences later, in the same cell: "**This row counts against 478**, Doc 07 v2.8.0 §2's total … **§6's dashboard counts against 485** … Consequently §6's '**254** not executed or not executable' (= 478 − 224) and this row's '**232** cannot execute' …". §6 now publishes **500** and **255**; this row now publishes **493** and **233**. Four live figures in an unannotated present-tense note contradict the cell around them. Two of them (254, 232) had already gone stale at v2.10.0/v2.11.0 and escaped review; **478 and 485 go stale at this version, by this version's own edit.** This is precisely the recurring defect this lineage has failed on — a correction that did not reach every place it claimed to reach — and §9 is the cell a Gate-2 reader quotes | Update the Denominator note in place to the current figures (this row counts against **493**, §6's dashboard against **500**, §6's **255** versus this row's **233**, the gap still **7** and still unreconciled), **or** date and annotate it as a retained v2.7.0-era record with a current-figures sentence beside it. Do not leave two live denominators in one cell |
| ISS-03 | **Medium** | T1 | §3.1 FR-132 row, Requirement cell | **The Requirement cell describes the DES-100 seam, not FR-132.** It reads "IEligibilityVerifier allowlist-only action-type shape (DES-100): only counting actions permitted; JOIN, LEAVE, account-creation throw `IllegalActionType`; IS_INSECURE_MOCK=false with no vendor bound throws `VendorNotBound`". Doc 02 §4.46 FR-132 is a two-layer identity-verification requirement with five lettered clauses — §(a) phone layer, §(b) government-ID check and verify-and-discard, §(c) `subject_id_hash` deduplication, §(d) honesty posture, §(e) vendor non-retention. **§(d) — the clause all fifteen new cases verify — appears nowhere in the cell that states the requirement**, and neither do the four unbuilt clauses the Status cell rules on. This is the same defect this document fixed for FR-131 at v2.9.0 ("the requirement summary is restated from Doc 02 §4.45 — it had described the DES-096 seam and not the notice"). It was survivable while the row cited two seam cases; it is not, now that the row carries fifteen cases against a clause the cell does not mention and a clause-by-clause ruling with no antecedent in it | Restate the Requirement cell from **Doc 02 v2.17.3 §4.46**, naming clauses (a)–(e) in summary, and keep the DES-100 seam shape as the sub-clause of the row it actually is |
| ISS-04 | Low | T5 | §10, the `TD-RTM-02` and `TD-RTM-03` entries | **The debt register is the one section not refreshed.** `TD-RTM-02` still states "(1) Doc 07 §2 counts **471** … (2) Doc 08 §6 counts **478** … (3) … = **424** distinct" and "the **224** cases with passing evidence and the **619/619** suite" — v2.8.0-era figures — while §6's new v2.12.0 paragraph describes the disagreement `TD-RTM-02` "records" as 500 / 493 / a third base. `TD-RTM-03` still describes the NFR-023 row as citing "**TC-2331, TC-2332**" and reading "**none**" for evidence; that row now cites four TCs and carries two evidence entries. Neither misstates a normative figure and both debts are correctly left OPEN, but v2.9.0's own ISS-04 established the rule that §10 must record what the rest of the document attributes to it | Bring both entries to current figures and current citations, keeping the **raising dates unchanged** and both debts **OPEN** — the same treatment v2.9.0 gave `TD-RTM-02` |
| ISS-05 | Low | T2 | §7 entry 117; changelog, "THE FR-131 QUESTION" paragraph | **The clause (e) carve-out is framed as surface-scoped where Doc 02 scopes it by claim.** The reasoning given is "the `/verify` page is the enrolment surface … so no FR-131 link is added". Doc 02 §4.45 clause (e) is scoped to **claims about participation acts** — "This clause governs **participation acts only**" — not to pages, and the shipped `en.verify.unavailableBody` itself names two participation acts ("anyone can make an account, **join a party**, read, discuss and **support one**"). **The conclusion is correct** — no `/verify` string asserts that a participation act is unknowable, and the four-word ban reaches only "v1 voting behaviour or any other v1 participation act" — but the framing would license a future enrolment-page string that *did* make such a claim | Restate the carve-out from the **claim**: clause (e) does not reach these strings because none of them asserts unknowability of a participation act, not because they sit on the enrolment surface |

> **Low** issues do not block the pass bar. **The three Mediums force this FAIL.**

## 5. Routing instruction (to the owning role)

**FAIL — route to the owning role, the tester (Ji-woo Park).** Rework ISS-01, ISS-02 and ISS-03 into
a **new version** (bump the `Version:` semver — a **patch** is sufficient, since no `TC` is minted,
retired or re-statused and no count, status or gap code moves; set `Status: In Review`), and fold
ISS-04 and ISS-05 in the same edit rather than carrying them. This loop then re-reviews at
**cycle 2 of 5**.

**None of the three Mediums asks a status, a count or a verdict to move.** Must **138** · COMPLETE
**16** · OPEN **122** · G-PHASE3 **47** · G-TRACE **34** · stories **17 of 142** · designed **500** ·
passing evidence **245** · gaps **255** · Gate-2 verdict **FAIL** are all independently confirmed
correct and must come through the rework unchanged. ISS-01 removes one case from one evidence cell;
ISS-02 and ISS-03 are wording inside two cells.

**Doc 07 v2.9.0 PASSes and is not reopened.** ISS-01 is Doc 08's defect, not Doc 07's — unless the
tester concludes the link is right, in which case Doc 07's TC-3586 row is the place to say so, and
that would be a Doc 07 touch rather than a carry.

## 6. Reviewer's independent rulings (evidence, not acceptance)

### 6.1 The Must count genuinely holds — 138 · 16 · 122

`node hooks/run_gates.cjs --audit` reports **138 Must rows, 16 COMPLETE, 122 OPEN**, derived from
row status markers, and **16 / 122** published by §9 — "the two independent signals AGREE". I then
re-derived the *reasoning*, which is the part a hook cannot check:

- **FR-132 does not become the 17th.** Doc 02 v2.17.3 §4.46, read clause by clause: **§(a)** phone
  layer — no `phone_hash` implementation exists outside the SDK seam and `PrivacyStatus`; **§(b)**
  government-ID check and verify-and-discard — unbuilt, `StubIdDocumentChecker.IS_INSECURE_MOCK()`
  is true and CON-015 is uncleared; **§(c)** `subject_id_hash` deduplication — unbuilt; **§(e)**
  vendor non-retention — a procurement clause with no procurement; **§(d)** — Doc 02 places the
  same-document-deduplication statement duty on "**The FR-131 honesty notice (DES-098)**", and
  **DES-098 does not exist**. The document's own phrase, "TC-3587 states the right fact on a surface
  that is not the one §(d) names", is exactly right, and it is said **in the row** rather than left
  to read as coverage — I checked the §3.1 cell and §7 entry 118 and both carry it.
- **NFR-023 does not close.** Still `G-UI`, Complete **0**: an enumerated four-string scan is not
  the jargon **scanner** and not the readability check the row has waited for since v1.1.0.
- **No other row is touched.** The diff against `HEAD` shows exactly three requirement rows edited
  (FR-131, FR-132, NFR-023) and no status marker, gap code, owner or phase changed on any of them —
  which is why G-PHASE3 47 and G-TRACE 34 necessarily hold.
- **US-0133 does not meet the Definition of Done.** It carries FR-122, FR-123 and FR-132; the first
  two are untouched and stub-gated, the third is OPEN. Stories **17 of 142**, unchanged.

### 6.2 FR-131 versus FR-132 — the tester's ruling is correct

I read Doc 02 §4.45 clause (e) myself rather than taking the citation. It closes: "This clause
governs **participation acts only**: claims about personhood enrolment and identity verification
are addressed by FR-132 §(d) and by §16.4 H-16/H-17/H-18 and are **expressly outside this
clause**." The four-word ban in the same requirement is scoped to "v1 voting behaviour **or any
other v1 participation act as defined in clause (e)**" — so it does not reach enrolment copy
either. The five retired `/verify` claims are claims about document handling and identity checking,
not about participation acts. **Therefore: none of the fifteen carries an FR-131 link, and none
should.** TC-3585 and TC-3591 applying the four-word list as an **instrument** over copy clause (e)
does not govern is the right call, both rows say so, and §7 entry 117 records the non-change in the
gap log rather than by editing a row to say nothing moved — which is the correct place for it.
**Had this gone the other way it would have mis-traced fifteen cases; it did not.** One framing
caveat only, ISS-05, which does not disturb the outcome.

### 6.3 Figures — re-derived, not accepted

`136 + 109 = 245` · `500 − 245 = 255` · `245 + 15 + 233 = 493` · `491 − 1 + 10 = 500` ·
`485 + 15 = 500` · `478 + 15 = 493` · `230 + 15 = 245` · `94 + 15 = 109`. All hold. **Gaps 255
genuinely does not move**, because all fifteen carry evidence and none is Blocked — the first drop
since v2.2.4 for which that is true, as the document says. The +15 reached **§6 dashboard, §6
convention note, §6 DoD check, §9 gate-row headline, the §9 sign-off Decision cell and the §9
sign-off Notes cell** — six places, including the four the assignment named. It did **not** reach
the seventh (ISS-02) or the debt register (ISS-04).

### 6.4 R-20 and the discharge claim

Independently reproduced. `npm test` from the repo root: **exit 0**; protocol **151** · sdk **244** ·
ui **18** · indexer **16** · web **116**; `apps/web/test/safety-surfaces.test.tsx` **41/41**. Then
`npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0890"` in `apps/web`:
**15 passed, 26 skipped (41)**, every `it` green individually. The `UT-0890` `describe` opens at
line **430** and holds exactly **15** `it`s. **The discharge claim is sound and honestly
qualified:** R-18/R-19 ran against an uncommitted 76-path tree; that work is merged at `18244e8`
and R-20 runs against it. The tester does not claim a pristine tree — it names three dirty paths,
all session-governance records under `artifacts/`, and I confirmed that **no test in this
repository reads any of them**, nor `SECURITY.md`. My own run, taken when the only modified tracked
paths were `SECURITY.md`, `artifacts/*` and Docs 07/08 — **no product, test or configuration
path** — reproduces it. "Clean" is claimed of the categories that matter, not of the tree, and that
is the right strength.

### 6.5 The judgement calls the assignment asked me to make

- **Is extending `TD-RTM-03` without paying it itself a finding? No — disclosure is sufficient
  here, and I rule against calling it a defect.** Adding TC-3586 to the NFR-023 row moves the row
  from 1-of-3 to 2-of-4 cited; the absolute omission is unchanged at exactly two, the omission is
  re-stated **in the row itself** rather than only in §10, no status or figure turns on it
  (NFR-023 is `G-UI` either way), and importing TC-3538/TC-3561 means re-deriving two other drops'
  evidence — genuinely a recount, not a side-effect of a mint. Critically, the alternative —
  withholding the case this version is responsible for — would leave Docs 07 and 08 disagreeing by
  **one more** case, which is strictly worse. The disclosure obligation is met. What is **not** met
  is §10's own currency, which is ISS-04, and a separate point.
- **Was declining the `SCR` link right? Yes — it is the best call of the session.** Doc 03 §10.12.4
  maps the Verify flow to **SCR-01 (partial)** and **SCR-02 (partial)** and carries an open
  **Conflict C-01** on that surface. Asserting a screen id from an RTM trace cell would have been
  the tester resolving an architect's open conflict by side-effect. Routing it to Ravi Deshmukh
  while he holds Doc 03 open this session is exactly right, and the row correctly notes the status
  does not turn on it.
- **Is v2.12.0 cycle 1 of a fresh loop? Yes.** v2.11.3 closed **on** the cap with a **PASS**, and a
  PASS closes a lineage; the cap governs one version's rework loop, not the document forever. This
  report is **cycle 1 of 5**.

### 6.6 Out-of-scope items confirmed left alone

`TD-RTM-01` — untouched; none of the fifteen cites `UT-0841`..`UT-0848` (checked), so the §4 orphan
zeroes are unaffected. `TD-RTM-02` — all three conventions move by +15, none reconciled, and the
document says so in terms (see ISS-04 for the register's currency). `TD-RTM-04` — untouched; every
new case cites `US-0133`, which is traced; the eight "none" story cells are not edited. I agree
with each of those calls; naming them is the right treatment and none of them blocks this version.
