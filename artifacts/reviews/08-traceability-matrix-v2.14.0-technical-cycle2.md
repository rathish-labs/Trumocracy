# Document Review Report — Doc 08 RTM v2.14.0 (technical, cycle 2 of 5)

> Produced by the **document-review** skill. The reviewer scores and lists issues only and never
> edits the reviewed document or any code. Independence: the **tester** (Ji-woo Park) owns this
> document; this review was run by **reviewer-qa** (Rafael Duarte), PM-assigned and recorded before
> dispatch in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.14.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 94%
Critical: 0
High: 0
Medium: 2
Low: 2
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

**Both cycle-1 Highs are genuinely fixed, and I verified them against the artefacts rather than
against the document's account of them.** I re-derived every subtotal from the row markers with a
counter I wrote myself: §3.1 returns **114 rows / 19 ✅ / 95 ☐**, the pre-v2.0.0 block returns
**54 / 14 / 40**, §3.2 returns **24 / 0 / 24**, §3.3 returns **23 / 5 / 18**, and the count of rows
carrying **both** a ✅ and a ☐ is **0** — every one of the three corrected subtotal lines, and the
FR-038 both-markers defect the tester found herself, reproduces exactly as published, and the
reconciliation **95 + 24 = 119 of 138** is arithmetically and mechanically right. `npm test` is
**739 / 739, exit 0** (contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138),
`npm run lint:deps` is clean (7 workspaces, layering OK), and `node hooks/run_gates.cjs --audit`
reads **derived 138 Must / 19 COMPLETE / 119 OPEN** against **published by §9: 19 / 119** — the two
independent signals **AGREE**, exactly as the version promised. I diffed the live file against the
PM's v2.13.0 backup: **fifteen changed regions, and every one falls inside the changelog's
sixteen-site enumeration** (site 16 is "§10 — no change", and §10 is indeed untouched). **Nothing
changed outside the enumeration** — which, after Doc 07 v2.11.0's cycle-2 Medium for exactly the
opposite, is worth stating. No FIND/REPLACE residue, no leaked fence, no conflict marker, no CRLF,
no duplicated tail; every touched row keeps its column count (FR-036 / FR-037 / FR-081 / FR-085 = 8,
FR-038 = 6, §7 entry 17 = 6, rule 4a = 2, the four new §8 rows = 2) and **exactly one status
marker**.

**ISS-02 is fixed completely and I would now defend FR-036 at merge.** I read Doc 02 §4 FR-036
(L895) clause by clause and every clause has a case **on the row**: *matured* → TC-3598 / TC-3600 ·
*only themselves* → TC-3601 · *region equals or contains residency* → TC-3597 / TC-3600 ·
*a published minimum of endorsements from matured residents* → TC-3602 published and **TC-3606
gating** (`ENDORSEMENTS_SHORT`) · *withdrawal at any time before the ballot locks* → **TC-3605**.
The UT cell now carries **UT-0897** and **UT-0898**, and I read the implementing `it`s: UT-0897's
"withdrawing BEFORE the nomination window closes…", "withdrawing AFTER the window closes but before
the ballot locks is allowed…" and "after the ballot locks, withdrawal is refused with
`BALLOT_LOCKED`" are the clause, and UT-0898's "debates cannot be scheduled before consent, nor
before the published minimum of endorsements" is the gate. **The backward trace now resolves on
both sides:** Doc 07 v2.11.0's `TC-3605` row reads `US-0095, US-0046 · FR-085, FR-107, FR-081,
FR-036 · DES-028 rule 6 · DES-027 rule 6`. §7 entry 17, the changelog and the row now say the same
thing.

**ISS-03 is ruled rather than straddled, and the rule is where a reader finds it** — §1's completion
rules table, row **4a**, before §3, cited by the FR-037 row, the FR-081 row, §8 and the changelog.
The distinction is principled and I agree with it: inspection can bound an **absence**; it cannot
manufacture a **record**. It is also already the rule the v2.13.0 Status block applied to FR-067
("refusal is discharged by capability absence; logging is a positive obligation to produce a record,
and an absence produces none"), so 4a generalises a live practice rather than inventing an
allowance, and FR-036 / FR-037 / FR-067 / FR-081 now fall on consistent sides of it. **I re-ran the
extent scan and it reproduces to the line:** a `grep -rlnE` for
`disclosures|realName|legalName|fullName|dateOfBirth|documentNumber` over
`packages/*/src services/*/src apps/web/src` returns **exactly five files** with **17 / 8 / 1 / 2 /
2** matching lines — `packages/sdk/src/candidates.js`,
`apps/web/src/components/CandidateSelection.tsx`, `apps/web/src/app/candidates/page.tsx`,
`apps/web/src/i18n/en.ts` and `ar.ts` (the last two are `legalNameField` / `legalNameHelp`, label
copy). `packages/protocol`, `services/indexer` and every other `apps/web` route return nothing, and
`ENROLMENT_UI` is `{dev: true, staging: false, prod: false}` in `packages/protocol/src/flags.js`.
**ELECTIONS is `prod: false`** — the drop still ships dark.

**The verdict is FAIL on two Mediums, and both are the same shape: a statement this version makes
about its own fixes that does not hold.** (ISS-C2-01) The Source block's `TC-TRUMOCRACY (` group is
**still unclosed**. The truncation is repaired, the italic is closed and the lost v2.12.0 sentence is
back — but the group opened at `TC-TRUMOCRACY v2.10.0 (` never closes, while the inline annotation
says "**Restored and closed**", the Status says "a sentence, an italic and a parenthesis unclosed —
restored", and the changelog says "restored, closed". Its two sibling pins on lines 563 and 564
balance 12/12 and 3/3 and terminate with a closing paren and a middot; this one is 7/5 (one excess
is a deliberate backticked literal), and line 566 still opens an unrelated `_(v2.7.0: …)_`.
(ISS-C2-02) The ISS-01 sweep is published as a *falsifiable enumeration* — "a grep for the stale
trio (`16 complete` / `98 open` / `122 open`) returns **15 hits**" with all fifteen classified —
and **I ran it and it does not reproduce**: against the v2.13.0 baseline the named grep returns
**9 lines / 13 occurrences** case-sensitively and **11 / 17** case-insensitively, never 15; **two of
the three "LIVE" sites (`12 complete · 42 open` at 2110 and `4 complete · 19 open` at 2248) contain
none of the three strings**, so the grep cannot return them; the "historical" line **858**
("122 Must rows stay open") contains none of them either; and **line 2596 — "…Submitted — 122 open
Must rows…" — is a real hit of the published grep and appears nowhere in the enumeration**. The
underlying work is right (I enumerated every remaining 16/98/122 occurrence in the live file and all
of them are dated records, quotations of the correction, or the FR-132 "FR-**122** open tier" false
positive; **no live stale figure survives**), which is why this is a Medium and not a High. But the
device offered as the answer to "a count of sites FIXED published as a count of sites CHECKED" is
itself a list a reader cannot re-derive.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (2)
- **Verdict:** `FAIL`

## 3. Per-cycle-1-issue verification (FIXED / not)

| Cycle-1 ID | Sev | Status at v2.14.0 | Evidence I used |
|---|---|---|---|
| ISS-01 | High | **FIXED** (substance) — see ISS-C2-02 for the sweep's self-description | Wrote my own marker counter over §3.1/§3.2/§3.3: **54 / 14 / 40**, **114 / 19 / 95**, **24 / 0 / 24**, **23 / 5 / 18**, **both-markers rows = 0**. All four live subtotal lines (2253, 2329, 2361, 2391) match their derivation; the reconciliation reads 95 + 24 = **119** of 138. Independently swept the live file for `16 complete` / `98 open` / `122 open`: every surviving occurrence is a dated record (789, 1270, 1314, 1802, 2537, 2539, 2747), a quotation inside the v2.14.0 correction (19, 709, 712, 716, 2329) or the FR-132 false positive (2326). The **FR-038 both-markers defect the tester found herself is real and is fixed** — the v2.13.0 baseline derived §3.3 as 22 / 4, the live file derives 23 / 5 |
| ISS-02 | High | **FIXED** | FR-036 row (L2224) TC cell now reads TC-0028, TC-3597, TC-3598, TC-3600, TC-3601, TC-3602, **TC-3605**, **TC-3606**, TC-3615, TC-3616; UT cell carries **UT-0897** and **UT-0898** with `Pass (obs.)` per case. Clause→case map present and correct against Doc 02 L895 read verbatim. Doc 07 v2.11.0 L2640 `TC-3605` names **US-0046** and **FR-036** + DES-027 rule 6. §7 entry 17 (L2567) now names TC-3602 / TC-3606 / TC-3605 and reconciles with the row. Implementing `it`s read in `packages/sdk/test/candidates.test.js`: UT-0897 has 9 `it`s including the three withdrawal cases; UT-0898 has 6 including the `ENDORSEMENTS_SHORT` gate. Suite green |
| ISS-03 | Medium | **FIXED** — one Low residual (ISS-C2-03) | `Completion rule 4a` is the sixth row of §1's completion-rules table (L2162), 2 columns, ahead of §3. FR-037 (L2225) closes **under 4a** with both limbs stated; FR-081 (L2272) states 4a **does not reach it** and why. A grep for "rule 4a" returns 6 hits (§1, FR-037, FR-081, §8, Status, Changelog). Extent scan reproduced exactly: 5 files, 17/8/1/2/2 matching lines. FR-067's row and the v2.13.0 Status already carried the same prohibition-vs-positive-obligation reasoning, so the four rows are consistent |
| ISS-04 | Medium | **FIXED** | L888 reads "**Fifteen** stories were checked" over fifteen ids (6 promoted + 9 not = 15), agreeing with §6 L2522 "Fifteen stories were in scope". Exactly one hit for "Fifteen stories were checked". The two surviving "Thirteen stories were checked" hits (L58, L761) are the correction quoting the phrase it corrects, in the Status and Changelog — harmless, since nothing counts prose here |
| ISS-05 | Medium | **PARTIALLY FIXED** → **ISS-C2-01 (Medium)** | Zero hits for a line ending "after that annot"; the lost v2.12.0 sentence is restored, the italic markers balance 3/3, and the pin is advanced to **Doc 07 v2.11.0** with the cross-document ISS-02 fold named. **But** the `TC-TRUMOCRACY v2.10.0 (` group opened at offset 37 of L565 has no closing paren, against 12/12 and 3/3 on the sibling pins at L563/L564 |
| ISS-06 | Low | **FIXED** | §4 "v2.13.0 sweep" added (L2450). I counted `it`s per `describe` in all four files with a script: protocol **6/5/4/7/5 = 27**, sdk **10/9/6/4/5/6/3 = 43**, ui UT-0903 **7**, web **4/5/7/4 = 20** → **97**, and every UT→TC mapping in the new paragraph matches. The eighteenth block (`UT-0871`) and the 640 + 97 + 2 = 739 arithmetic are both stated |
| ISS-07 | Low | **FIXED** | §7 preamble gains the "v2.13.0 update" note (L2541). Verified: heading is "all **119** open Must rows"; entries **17, 18, 76** struck through (alongside the older 70, 71, 81, 125); entries **19, 56, 57, 58, 72, 84** all read `G-NOMECH` with a "(was …; reclassified v2.13.0)" annotation; §7 carries 126 entries − 7 retired = **119** live |
| ISS-08 | Low | **FIXED** | §8 gains four rows at L2707–L2710 (constants · `ICandidateStore` v1→v2 seam · attested residency · FR-132 identity layer / DES-097(b) store), each 2 columns, each naming the requirement rows it forces to be re-verified |

## 4. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | FR-036 re-read clause by clause against Doc 02 L895: **all five clause-halves now carry a case on the row**, each with an implementing `it` I read. The cycle-1 coverage deduction is fully repaired |
| T2 Soundness | 20 | 96 | 19.2 | Rule 4a is a real rule, not a convenience: it is the reasoning already applied to FR-067 at v2.13.0, generalised, with a revisit flag made mandatory for rows closing under it. FR-081 correctly stays OPEN. Deduction: ISS-C2-03 (limb (i) names three `UT`s while limb (ii) enumerates five files) |
| T3 Traceability & IDs | 20 | 93 | 18.6 | Every derivation reproduces; hook signals agree; the §4 sweep's 97 `it`s and every UT→TC mapping check out; the §7 movement checks out row by row. Deduction: ISS-C2-02 |
| T4 Security & failure modes | 15 | 98 | 14.7 | `ELECTIONS` `prod: false` and `ENROLMENT_UI` `{dev:true, staging:false, prod:false}` re-verified in `packages/protocol/src/flags.js`; `IS_INSECURE_MOCK` discipline carried into §8's new seam row; the FR-037 closure's revisit flag is required by 4a rather than optional. `npm audit` is unchanged from prior sessions (11 dependency-tree findings, none introduced here — no lockfile change in this session) |
| T5 Completeness & testability | 15 | 90 | 13.5 | The sixteen-site enumeration is **complete and exact** against the diff — the strongest thing in this version. Deductions: ISS-C2-02 (the sweep's own enumeration is not reproducible) and ISS-C2-01 (a fix claimed complete that is not) |
| T6 Convention compliance | 10 | 88 | 8.8 | MINOR bump correctly justified; ISO-8601; `Status: In Review — v2.14.0 … Rework cycle 2 of 5` with the v2.13.0 record retained; the never-rewrite-a-dated-record convention honoured. Deductions: ISS-C2-01, ISS-C2-04 |
| **Total** | **100** | — | **94.4 → 94%** | — |

## 5. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C2-01 | **Medium** | T6, T5 | `Source:` block, line **565**; the claims at line **58** (Status), line **761** (Changelog) and inside the L565 annotation | **The parenthesis ISS-05 was raised on is still open, and three places say it was closed.** The truncated tail is genuinely restored and the pin genuinely advanced — but a character-by-character scan of L565 finds **7 open parens and 5 close parens**: one excess is the deliberate backticked literal naming the group, and the other is the **group opened at `TC-TRUMOCRACY v2.10.0 (` (offset 37), which never closes**. The two sibling pins on L563 (`SRS-TRUMOCRACY …`) and L564 (`CODE-TRUMOCRACY …`) balance **12/12** and **3/3** and terminate with a closing paren and a middot separator; this one terminates "…checked row by row." and L566 then opens an unrelated `_(v2.7.0: …)_`, which is precisely the structural break cycle-1 described. Meanwhile the annotation states that the sentence, the italic and the `TC-TRUMOCRACY (` group were "**all unclosed** … **Restored and closed.**", the Status states "leaving a sentence, an italic and a parenthesis unclosed — restored", and the Changelog states "restored, **closed**, and advanced". **The document names the exact group it failed to close and then asserts it closed it** — a statement about its own fix that does not hold, which is the defect class this version exists to retire | Tester: add the closing paren to the `TC-TRUMOCRACY (` group (and the middot separator its siblings carry), **or** re-cut the pin so the advanced v2.11.0 pin is its own `Source:` entry rather than a tail inside the v2.10.0 group. Either way the three "closed" claims must become true |
| ISS-C2-02 | **Medium** | T3, T5 | Changelog, v2.14.0 entry, lines **709–717**: "A grep for the stale trio (`16 complete` / `98 open` / `122 open`) returns **15 hits**. **3 are LIVE** … **12 are HISTORICAL** … lines 66, 149 … 647, 858, 1128, 1172, 1660 … 2392, 2394, plus line 2183 … a **false positive**" | **The falsifiable enumeration does not reproduce under its own published grep.** I ran it against the PM's v2.13.0 backup (the baseline the line numbers refer to). The named grep returns **9 distinct lines / 13 occurrences** case-sensitively (647, 1128, 1172, 1660, 2183, 2186, 2392, 2394, 2596) and **11 / 17** case-insensitively (adding 66 and 149). **It is never 15**, and no counting convention I could construct reaches 15 from the enumerated lines. Three specific mismatches: **(a)** two of the three sites published as LIVE hits of this grep carry none of the three strings — L2110 reads "**12 complete · 42 open**" and L2248 reads "**4 complete · 19 open**", so a reader re-running the grep finds the two headline corrections *absent from the hit list*; **(b)** L858 ("122 **Must rows stay** open") is classified as one of the twelve historical hits but matches none of the three strings either; **(c)** **L2596 is a genuine hit and is not in the enumeration** — "_(Prior v2.12.3: Submitted — **122 open** Must rows…)_" in §9's sign-off table — i.e. the N+1th site, again, inside the sweep whose purpose is to prove there is no N+1th site. **The substance is sound and I verified it independently**: I derived all four subtotals from the row markers and every one matches, and every surviving 16/98/122 occurrence in the live file is a dated record, a quotation of the correction, or the FR-132 "FR-**122** open tier" false positive — **no live stale figure remains**. What fails is the device offered to let a reader check that without trusting the author, and this version's own thesis is that such devices must hold | Tester: publish the actual command and the actual result. Either widen the pattern to the one really used (the stale figure-strings `12 complete`, `42 open`, `16 complete`, `98 open`, `4 complete`, `19 open`, plus `122 open`) and re-enumerate against it, or keep the trio grep and restate it honestly — "**N** hits of this grep, classified; the three corrected subtotal lines are **not** among them, because two of them carry different figures and were found by deriving the markers" — and add **L2596** to the historical list |
| ISS-C2-03 | Low | T2 | §3.1 **FR-037** row (line 2225), rule-4a limb (i) vs limb (ii) | **Limb (i) is enumerated over one site while limb (ii) is enumerated over five files, and the two are never reconciled.** Rule 4a requires that "**every site** at which the protected datum exists is itself covered by a passing absence test". The row satisfies it as: "the candidacy disclosure holding is the only place v1 holds a real-world identity, and **UT-0897**, **UT-0900** and **UT-0901** assert, **at that site**, that nobody unconsented is named" — three SDK-layer `UT`s at one site. Limb (ii) then publishes **five files**, two of which are outside the SDK: `CandidateSelection.tsx` (holds `legalName` in component state and passes `disclosures: { legalName }` into `nominate`) and `app/candidates/page.tsx` (a seeded `legalName: 'Neighbour Example'`). **I checked and the substance holds** — the component holds only the caller's own input, `UT-0904`'s first `it` ("after standing, **nothing is public** and the gate names the one-way door") is the absence test at that surface and is already on the row as `TC-3614`, `page.tsx`'s value is a demo fixture, and the two i18n hits are label copy that the row itself says "hold nothing". But a reader auditing limb (i) against limb (ii)'s own list finds two of the five files unaccounted for | Tester: name `UT-0904` (TC-3614) in limb (i) as the web-surface absence test, and state in limb (ii) that of the five files only `packages/sdk/src/candidates.js` holds the datum at rest — the others being the caller's own input, a demo fixture and label copy |
| ISS-C2-04 | Low | T6 | `artifacts/status/SPEC-2026-09-21-doc08-v2.14.0.md`, section "After transcription", item 4 | **A predicted grep count in the spec is wrong again, in the same session in which the tester recorded the lesson not to predict them.** The spec tells the PM to expect a count of **0** for "Thirteen stories were checked"; the true figure is **2** (L58 and L761, both the correction quoting the phrase it corrects). This is harmless in the document — nothing counts prose, exactly as the tester's own Doc 07 addendum concluded about `TC-3320` — and the published document makes no such claim, so it is not a defect in Doc 08. It is recorded because the spec is the transcription contract, and a PM ticking off a wrong expected figure is a check that silently passes | Tester: run the greps before writing them into a spec tail; adjust this one to **2** with the two self-quoting sites named |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 6. What is confirmed and needs no rework — stated so cycle 3 does not re-litigate it

- **The suite and the hook signals.** `npm test` **739 / 739, exit 0** (contracts 95 · protocol 178
  · sdk 287 · ui 25 · indexer 16 · web 138); `npm run lint:deps` clean, 7 workspaces, layering OK;
  `node hooks/run_gates.cjs --audit` reports **derived 138 Must / 19 COMPLETE / 119 OPEN** against
  **published by §9: 19 / 119**, the two independent signals **AGREE**. Doc 07 v2.11.0 and Doc 08
  v2.14.0 both show as blocking the review loop, which is expected at cycle 2 of 5 for each.
- **Every count in this version is derivable, and I derived them.** §3.1 **114 / 19 / 95**; §3.1
  pre-v2.0.0 **54 / 14 / 40**; §3.2 **24 / 0 / 24**; §3.3 **23 / 5 / 18**; total Must
  **138 / 19 / 119**; both-markers rows **0**; 19/138 = 13.768 → **13.8%**; open 95 + 24 + 18 =
  **137** against complete **24** (the "24 / 137" line); §6's test-case row **275 + 253 = 528**,
  matching the changelog's "528 / 275 / 253"; §7 **126 entries − 7 retired = 119**.
- **The change record is complete and exact.** Diff against `scratchpad/08.v2130.bak`: fifteen
  changed regions — header Version+Status, the new Changelog entry, the Source pin, the
  Thirteen→Fifteen line, rule 4a, FR-036, FR-037, FR-081, the three subtotals, FR-038, §4, §7
  preamble, §7 entry 17, §8 — **all inside the sixteen-site enumeration**, with site 16 ("§10 — no
  change") verified as genuinely unchanged. **No unenumerated site.**
- **No transcription residue:** no `FIND:` / `REPLACE WITH` marker, no conflict marker, no stray
  fence, 0 CRLF, no trailing whitespace, no duplicated adjacent line; all 17 spec OPs applied
  exactly once.
- **The Doc 07 dependency is safe.** Doc 08 pins Doc 07 **v2.11.0**, which I reviewed in the same
  session and **FAILED at 94% on one Medium** — but that Medium (Doc 07 cycle-2 ISS-01) is that Doc
  07's *change record* omits the `TC-3605` site, **not** that the change is wrong: the row itself
  carries `US-0046` / `FR-036` / `DES-027 rule 6` and is correct against Doc 02, Doc 05 and Doc 03
  §10.13.14. **No Doc 08 row, figure or ruling moves on it.** The pin's standing qualification
  ("the pin is to an In-Review sibling and that is stated, not hidden") remains accurate.
- **The rulings.** All six OPEN rulings (FR-039, FR-065, FR-066, FR-067, FR-081, FR-093) were
  independently confirmed at cycle 1 against the code and none is edited here; FR-085's closure and
  the TC-3476 re-homing stand; `TD-RTM-05` stands.

## 7. Merge sign-off — a separate question, answered

**Yes to all three closures.** This is my RACI accountability ("RTM complete (zero gaps)") and I
state it separately from the document verdict, because the two Mediums above are defects of
*statement*, not of *ruling*, and neither touches a row.

- **FR-036 — sign.** Every clause of Doc 02 L895 now has a case on the row, each case names an `it`
  I read in the test file, and each `it` asserts what the case says. The backward trace resolves in
  Doc 07. The two residuals (self-declared v1 residency; the ratified value **5** asserted only as
  non-zero) are disclosed on the row as revisit flags and are correctly routed to the engineer
  rather than absorbed. **At cycle 1 I said I would not defend this row; at cycle 2 I would.**
- **FR-037 — sign, under rule 4a, with ISS-C2-03 recorded.** The prohibition / positive-obligation
  distinction is correct and pre-existing in practice; the extent scan reproduces to the line; the
  revisit flag 4a requires is present and §8 now carries the trigger. ISS-C2-03 is a precision gap
  in the row's prose, not in the closure — I verified each of the five files myself.
- **FR-085 — sign.** Unchanged since cycle 1, where I verified the closure and the TC-3476
  re-homing (`US-0132 · FR-131 clause 8 · DES-094`, still Blocked, still on the FR-131 row).
  `TC-3605` gaining an FR-036 attribution does not weaken it.

**Gate 2 remains NOT MET, and that is unrelated to this review:** 119 of 138 Must rows are open.
The RTM's zero-gap criterion is a Gate-2 readiness condition certified by the project-manager with
`node hooks/run_gates.cjs --gate2`; this document is an accurate record of a gate that is shut.

## 8. Routing instruction (to the owning role)

**FAIL.** Route to the **tester (Ji-woo Park)**, the owning role for Doc 08. Rework MUST produce a
new version — bump the `Version:` semver and set `Status: In Review`, then re-enter this loop at
**cycle 3 of 5**. **A PATCH is sufficient this time**: `v2.14.1`. Neither Medium changes a row, a
ruling, a status or a count — ISS-C2-01 adds one character and repairs three sentences, ISS-C2-02
restates a changelog enumeration, and the two Lows are one sentence each. If the tester instead
takes ISS-C2-03 by routing the absence-scan `it` to the engineer, that is a code change and the
version must be MINOR.

Nothing here routes outside the tester except ISS-C2-04 (the tester's own spec tail, not a
document) and the standing engineer items already routed at v2.13.0/v2.14.0: the FR-037 absence-scan
`it` (owed hardening under 4a, **not** a condition of the closure), the
`NOMINATION_ENDORSEMENTS_MIN` value pin and its stale "flagged for ratification" `it` title, and the
`UT-0902` own-property enumeration.

## 9. Human decision at the cap (ESCALATED only)

Not applicable — `Verdict: FAIL` at cycle 2 of 5.
