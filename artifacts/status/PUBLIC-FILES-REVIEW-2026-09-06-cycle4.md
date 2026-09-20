# Public-files review — cycle 4 — README · CONTRIBUTING · SECURITY · CODE_OF_CONDUCT

> **Not a governed-document review.** Public root files, not numbered documents. This report lives
> in `artifacts/status/` and avoids the `document-review` machine-parseable field names, so it
> cannot enter the SubagentStop hook's cycle counter. The business rubric and severity scale are
> the scoring frame only.

```
Files reviewed:   README.md · CONTRIBUTING.md · SECURITY.md · CODE_OF_CONDUCT.md
Cycle:            4  (c1 FAIL 81% 0/4/7/9 · c2 FAIL 93% 0/0/1/5 · c3 FAIL 95% 0/0/1/0)
Rework note:      artifacts/technical-writer-2026-09-06T2230-public-files-cycle4.md
Read at:          working tree, 2026-09-06 (uncommitted)
Review date:      2026-09-06
Reviewer:         product-owner (Priya Raghunathan) — same assigned reviewer; author excluded
Mode:             business rubric (B1–B6), adapted; severity C/H/M/L
Governing test:   FR-131 clause (e), Doc 02 §4.45 at v2.17.1 (tightened safe-harbour; reader test
                  governs) + "nothing public may claim a guarantee v1 doesn't deliver", applied in
                  both directions — no overclaimed guarantee, no under-stated retention.
Pass bar:         score ≥ 95% AND zero Critical/High/Medium
Score:            98%  (97.6 weighted)
Critical 0 · High 0 · Medium 0 · Low 0
VERDICT:          PASS — all four files. The loop closes at cycle 4 of 5, no escalation.
```

---

## 1. Summary (BLUF)

**PASS.** Both cycle-4 edits are correct, and the last Medium is closed **better than the minimum
I specified**: I asked for the word "only" to be deleted; the writer deleted it *and* added the
`FR-133` pointer *and* tightened "the other five fields" to "the other five **counting-tier**
fields". The retention paragraph — the one a cautious citizen actually reads before joining
phone-only — is now both non-exclusive and correctly scoped.

**The test count is verified true, not accepted.** README and CONTRIBUTING now read "625 tests at
the time of writing (2026-09-06)". Doc 06 **v2.7.0**'s header records "Suite: **625 tests**
(contracts 95 / protocol 151 / sdk 244 / ui 18 / indexer 16 / web **101**, +1 over v2.6.0's 624)".
The breakdown sums to exactly 625, and Doc 06 attributes the +1 to the `UT-0889` row moving from
5 to 6 assertions — which matches the writer's note. Every prior cycle carried this figure as a
Low routed to the PM; this cycle it resolves against the repo's own record.

**Nothing else moved.** I re-checked sentinel sentences from every previously-closed issue across
all four files: SECURITY's "already live **in the built demo**", CONTRIBUTING's "**addressed by**
`FR-132`(d)" and "`/verify`'s own copy is not yet in any register", README's "**would** keep this
in an in-memory store", and the CoC's "best-effort response from a single maintainer" and Covenant
2.1 attribution. All intact.

**Zero issues at any severity, in all four files.** This is the first cycle in which I have
nothing to list.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (98%, 97.6 weighted)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict: PASS.** The public files are, in my judgement as the role Accountable for
  public-facing claims, fit to publish. I edited none of them at any point across four cycles.

---

## 3. Per-criterion scores

| Criterion | Weight | c1 | c2 | c3 | **c4** | Weighted | Notes |
|---|---|---|---|---|---|---|---|
| B1 Outcome & problem clarity | 20 | 88 | 96 | 96 | **98** | 19.6 | Status block, `FR-132`(d) uniqueness caveat, `/verify` inventory, and now a retention paragraph that is neither over- nor under-stated. |
| B2 Completeness | 15 | 85 | 95 | 90 | **97** | 14.55 | The open-tier retention list is complete: phone hash, party link, `FR-133` anti-abuse signals. |
| B3 Traceability & IDs | 20 | 70 | 88 | 97 | **98** | 19.6 | Every pin in all four files resolves at the right scope; the new §4.47 pointer is correct. |
| B4 Correctness & consistency | 15 | 72 | 91 | 92 | **97** | 14.55 | No statement in any of the four files now contradicts its source. |
| B5 Verifiability of claims | 15 | 80 | 92 | 94 | **97** | 14.55 | The last unresolved figure (test count) now resolves to Doc 06 v2.7.0. Residual unverifiables are disclosed in-text as unverified. |
| B6 Convention compliance | 15 | 94 | 96 | 98 | **98** | 14.7 | Zero emails, zero personal names, personas framed, licences correct. |
| **Total** | **100** | 81% | 93% | 95% | — | **97.6 → 98%** | |

---

## 4. Cycle-3 issue closure — verified against source

| ID | Sev | Status | Evidence checked this cycle |
|---|---|---|---|
| **ISS-C3-01** | Medium | **CLOSED — beyond the minimum** | `README:66-69` now reads: "An **open-tier** account (phone-only, before the government-ID check) keeps the phone hash and the party link, **plus the anti-abuse signals `FR-133` requires (Doc 02 §4.47)** — none of the other five **counting-tier** fields exist until that check runs." Checked against `FR-133` (Doc 02 §4.47, Must, Rafael Duarte): it mandates VoIP/virtual-number screening, velocity checks by IP and device fingerprint, and device anti-fraud signals, with "flag events … restricted-class data (`NFR-027`)". The README **points** to §4.47 rather than re-enumerating the signals — the right call: it makes no claim it would have to keep in sync. The exclusive "only" is gone, so the sentence no longer under-states retention; "counting-tier" is a precision I did not ask for and it makes the "other five" unambiguous. |

**Second edit — test count, verified rather than accepted.** `README:157` and `CONTRIBUTING:107`
both read "625 tests at the time of writing (2026-09-06)". Doc 06 v2.7.0 header: "Suite: **625
tests** (contracts 95 / protocol 151 / sdk 244 / ui 18 / indexer 16 / web 101, +1 over v2.6.0's
624 — the ISS-03 jargon-scan assertion)" and "§3 `UT-0889` row and Total updated (5 → 6; 624 →
625)". 95+151+244+18+16+101 = **625** ✓. The writer's note attributes the +1 to hardening
`UT-0889`; Doc 06 attributes it to the ISS-03 jargon-scan assertion **added to the `UT-0889` row**
— the same event described from two sides, not a discrepancy. No public file states the
attribution, only the number, and the number is right.

**"Nothing else changed" — spot-verified, not assumed.** Sentinels from every closed issue
re-checked and intact: `SECURITY:40` (C2-05), `CONTRIBUTING:39` (C2-04), `CONTRIBUTING:43` and
`:156-159` (C2-01(a)), `README:71-74` (C2-03), `README:61-65` (C2-02 six-field list),
`CODE_OF_CONDUCT:61-68` and `:122` (ISS-20 + Covenant 2.1 attribution).

---

## 5. Issues

**None.** No Critical, High, Medium or Low issue is open against any of the four files.

For the record, the items that are *not* issues and remain routed elsewhere:

- **Doc 02 §13 (j) scope widening** to reach the `/verify` strings — a Doc 02 amendment owed by
  **me**, via the PM. The public files describe this gap accurately, so it blocks nothing.
- **GitHub private vulnerability reporting** must be confirmed enabled by the **maintainer** before
  publication; both SECURITY and the CoC cite it, and SECURITY carries a fallback if it is off.
- **`~18s` install time** and **`npm run dev` on a fresh clone** — unverified performance/
  environment claims, both explicitly disclosed in-text as not verified. No shell was available to
  this role in any cycle.
- **`deployment-safety.test.mjs:2`** docblock reads "UT-0600..UT-0610" while the file defines
  through `UT-0612` — engineer-side nit; README and Doc 09 are both correct.
- **Doc 08 v2.10.0 watch:** SECURITY publishes "16 of 138 Must rows complete, 122 open", correct
  against Doc 08 **v2.9.0 (Approved)** and correctly worded "as of the current **approved**
  version". If v2.10.0 moves that figure on passing, this published number needs re-checking.

---

## 6. FR-131 clause (e) — final application

**No violation, in any of the four files, at any point across four cycles.** Re-checked this cycle
against the v2.17.1 form, including the tightened safe-harbour ("makes no contrary claim elsewhere
in the same string") and the precedence rule (the reader test governs):

- `README:74-76` — the `parties.joinPrivate`-pattern paragraph — states plainly that Trumocracy's
  own records can read the account↔party link, states separately what is never published, names the
  difference between the two promises, and makes no contrary claim anywhere in the passage.
- Every use of "private / anonymous / receipt-free / secure" across the four files is negated or
  unmistakably v2-labelled.
- The `/verify` paragraphs quote enrolment copy and question it; they assert nothing, and enrolment
  is expressly outside clause (e).
- The cycle-3 Medium was an **under-statement of retention**, not a clause (e) breach — recorded as
  such then, and closed now.

---

## 7. Per-file ruling

- **`README.md` — PASS.** Eleven cycle-1 issues, two cycle-2, one cycle-3: all closed and verified.
- **`SECURITY.md` — PASS.** Clean since cycle 3.
- **`CONTRIBUTING.md` — PASS.** Clean since cycle 3; every id, path, number and hook claim verified.
- **`CODE_OF_CONDUCT.md` — PASS.** Covenant 2.1 intact, attribution present, no email address, no
  personal names, enforcement channel honestly described.

---

## 8. Routing

**The loop is closed.** Four cycles against a cap of five; no escalation, no human override needed.
Trajectory: 81% (0C/4H/7M/9L) → 93% (0/0/1/5) → 95% (0/0/1/0) → **98% (0/0/0/0)**.

1. **technical-writer** — nothing further. The four files are approved from my side as the role
   Accountable for public-facing claims.
2. **project-manager** — record the PASS against the "Public files" row of
   `REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`, and carry the Doc 08 v2.10.0 figure watch (§5).
3. **product-owner (me), via the PM** — Doc 02 §13 (j) widening and the `/verify` copy ruling.
   Unblocking; the public files state the gap honestly in the meantime.
4. **maintainer** — enable private vulnerability reporting before the repository is published.

**I edited none of the four files.** Scored and listed only, across all four cycles.
