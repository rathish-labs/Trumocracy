# tester — session note (2026-09-20T2100) — Doc 06 v2.9.0 neutral technical review, cycle 1 of 5

```
Role:          tester (Ji-woo Park, new instance) — acting as NEUTRAL REVIEWER, not author
Document:      docs/06-coding-and-ut.md v2.9.0 (owner: engineer, Samuel Oyelaran — excluded)
Assignment:    artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md (PM, pre-dispatch)
Mode:          technical · cycle 1 of 5
Report:        artifacts/reviews/06-coding-and-ut-v2.9.0-technical-cycle1.md
Verdict:       PASS — 96%, 0 Critical / 0 High / 0 Medium / 5 Low
Branch:        build/v1-debt-closure (nothing committed)
```

## What I did

Loaded `CLAUDE.md`, the `document-review` skill and its template, then the assignment record.
Read Doc 06 v2.9.0 end to end (1587 lines) plus its full diff against `HEAD`. **Re-derived every
load-bearing claim from disk rather than accepting it from the brief or from the engineer's
note** — the assignment brief explicitly instructed me not to take its own word, and I did not.

Checks executed (all by me, this session):

- `npm test` → **640/640**, contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 116.
  Matches Doc 06's published breakdown component by component.
- `node hooks/run_gates.cjs --audit` → 138 Must / 16 COMPLETE / 122 OPEN, both signals agreeing;
  **Doc 06 the only blocker before my report landed, 0 blocking after**.
- `git status --porcelain` → only `SECURITY.md`, `artifacts/`, `docs/`. **Zero product code, test
  or config files touched.** Confirms the documents-only claim.
- Code facts re-verified independently: `PrivacyStatus.tsx:251-252` (both strings, exact lines);
  `PrivacyStatus.test.tsx:32` (`getByText('Anonymous')`), `:208` (the `BANNED` regex) and `:198`
  (the `UT-0759` `ver` describe that encloses it) — so the `anon` case genuinely carries **no**
  banned-word assertion; `grep -rn PrivacyStatus apps/web` → six comment hits across five files,
  **zero imports, zero renders**; the `UT-0890` describe (`safety-surfaces.test.tsx:430-584`)
  contains exactly **15** `it` blocks.
- Trace facts: Doc 07 `TC-3586` verifies `US-0133 · NFR-023 · DES-085`, names **no FR**;
  Doc 08 enumerates the **fourteen** `TC-3577..TC-3585, TC-3587..TC-3591` as FR-132 evidence;
  Doc 08 row 117 `FR-131 | G-PHASE3` (OPEN); `TC-3585`/`TC-3591` carry the instrument framing
  verbatim.
- Sibling versions on disk: Doc 02 **v2.17.3**, Doc 03 **v2.14.1**, Doc 04 **v1.7.1**,
  Doc 07 **v2.9.0**, Doc 08 **v2.12.3** — all Approved.
- `SECURITY.md:110` and `:124-125` both cite Doc 08 **v2.12.3**, figures 138/16/122;
  `run_gates.cjs:62-78` = `log()`, `slice(-499)` + 1 = 500-record cap; `.gitignore:21` =
  `.claude/gate-runs.log`; the cycle-2 public-files review's metadata (97%, 0C/0H/0M/1L,
  product-owner, PASS) and its `ISS-03` DISCHARGED / `ISS-04` "no fix is owed" rulings.
- Arabic packet: 253 leaves (228 + 25), 0 missing English counterparts, four risk-ordered tiers
  with `banner.*` at Tier 1, plural samples at 1/2/3/11.

## Decisions made (as reviewer)

1. **PASS at 96%, five Lows.** Nothing rose to Medium. Weighted: T1 97 · T2 98 · T3 95 · T4 98 ·
   T5 95 · T6 96 → 96.55 → 96%.
2. **The "all fifteen verify FR-132 §(d)" phrasing is NOT a finding.** It is the exact phrasing of
   its Approved source (Doc 07 v2.9.0 line 219), and Doc 06 goes **further** than its source by
   stating the fourteen-vs-fifteen carve-out at both sites, in the same paragraph as the claim.
   That voluntarily imports a downstream correction Doc 08 spent three rework cycles establishing.
3. **A missing §5.0 entry is Low, on this document's own unbroken precedent** (v2.6.0 ISS-02
   graded exactly this Low). I found the register is missing **v2.7.0 cycle 2** — a hole between
   adjacent entries, pre-existing, newly conspicuous because the fold ran through this list. I did
   **not** inflate it because the fold touched the same list; severity calibration has to stay
   consistent across a lineage.
4. **The "`--audit` reports 0 documents blocking" clause is Low, not Medium.** It is false of its
   own file during its own review window, but it is explicitly timestamped "at the moment of
   writing", the Status line declares In Review cycle 1, and the count returns to 0 the instant
   this report lands. The distinguishing feature from Doc 08's three Medium sites is that the
   annotation **is at the site**.
5. **Annotate-don't-delete held.** §3's lead sentence was edited in place, but the correction
   marker is in the sentence and the superseded wording survives verbatim three lines below in
   the retained v2.7.0 block. Same pattern as Doc 03 v2.14.1, which I ruled correct. Not an issue.
6. **Correct-before-apply was the right call.** Ruled in report §6: the alternative was knowingly
   publishing a false claim; the session's own design requires Doc 06 to report disk truth; the
   correction is recorded at two granularities (document = the fact, note = the process); the
   framing does not launder the earlier text and makes no unverifiable timing claim; and Doc 06
   does not claim to have advanced the pin itself — it cites the applying role's delta.

## Issues raised (all Low, none blocking)

| ID | Location | Finding |
|---|---|---|
| ISS-01 | §5.0 | No `v2.7.0 cycle 2` entry, though the report exists and its verdict is quoted in the header |
| ISS-02 | Header `Source:` line 41 | Pins SDD **v2.13.0** while Doc 03 is **v2.14.1** Approved and the body relies on v2.14.1 §10.12.3 clause 10. §9 itself verified unchanged across the delta |
| ISS-03 | Change history | "`--audit` reports 0 documents blocking" — false inside its own review window (audit printed 1) |
| ISS-04 | §7 item 29 | Names an owning **role** (technical-writer), no named **person** |
| ISS-05 | §7 item 26 | Carries Doc 03 FINDING 3's present tense without the v2.14.1 tense reconciliation (Doc 14 §2.2 is future-tense; endorsement unshipped in v1) |

## Open items

- Five Lows routed to the **engineer** to fold at the next Doc 06 touch. None requires a new
  version on its own account; none touches product code.
- Doc 06's own `Status:` line still reads `In Review` — the engineer sets it to `Approved`.
- Gate 2 remains **NOT MET** on traceability (122 open Must rows). Unmoved by this session, as a
  documents-only drop requires. Not this review's scope.

## IDs touched (read-only; I authored no document and edited no code)

`FR-131` · `FR-132 §(d)` · `NFR-023` · `DES-085` · `DES-094` · `DES-098` · `DES-100` ·
`US-0133` · `UT-0759` · `UT-0889` · `UT-0890` · `TC-3573` · `TC-3576` · `TC-3577`..`TC-3591`
(esp. `TC-3585`, `TC-3586`, `TC-3591`) · `OPEN-27`/`OPEN-28`/`OPEN-29`/`OPEN-30` ·
`REL-LIM-18` · `CON-015` · `RISK-02` · Doc 06 §7 items **17**, **26**, **28**, **29**.

## Scope discipline

- Wrote exactly two files: the review report under `artifacts/reviews/` and this note.
- **Did not edit `docs/06-coding-and-ut.md`** or any other governed document — scored and listed
  only, per the skill's independence rule.
- **Did not open or edit `artifacts/memory-index.json`** (PM pre-registers note paths this
  session).
- Did not touch product code, tests or config. `npm test` was run to verify, not to change.
- Did not self-appoint for any other document; every other governed document is Approved and was
  not reopened.
