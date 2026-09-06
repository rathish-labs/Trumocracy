# Document Review Report — Doc 14 User Guide v2.3.0 (business, cycle 5)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (technical-writer) does every rework as a
> new version. Independence: the reviewer is the **tester**, which is **not** Doc 14's owning role.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 14-user-guide.md
Document version: 2.3.0
Review mode: business
Reviewer role: tester (neutral — the owning role for Doc 14 is the technical-writer)
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 5 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

**All five cycle-4 findings are closed, verified against the shipped code and the cited sources —
not against the changelog — and nothing regressed. v2.3.0 PASSES at 96% with zero Critical, zero
High, zero Medium and one cosmetic Low.**

The single Medium that carried the whole of the cycle-4 FAIL — **ISS-C4-01**, §7's release summary
claiming joining and leaving *"any party, unconditionally"* — is gone. Line 1428 now reads *"New in
this release: joining and leaving a party, **one active membership at a time**; …"*, reusing §3.4's
own verified formulation exactly as routed, rather than composing a third phrasing. §7 now agrees
with the four other locations that state the FR-064 rule (§0.2 line 272, §2.3 line 670, §3.4 line
1216, §3.5 line 1236), and the rule is stated identically in all five. Change 18's record clause,
later in the same sentence, is **untouched** — the append-only-inside-our-own-store scoping and the
two named records are byte-identical to v2.2.0.

The four Lows are closed against the text I supplied at cycle 4 and against the sources that text
cited:

- **ISS-C4-02 — CLOSED.** §3.5 row 1 (line 1233) now reads *"Ships together with backing and
  withdrawal (§2.2) — no such message exists in this release."*, with the "What to do" column
  changed to *"Not available yet — see §2.2."* The false implication (*"Your first action counted"*)
  is gone. I re-confirmed the basis of the marking: a case-insensitive search for `already done`,
  `ALREADY_ENDORSED` and `alreadyEndorsed` across `apps/web/src/i18n/en.ts`, `packages/sdk/src/*.js`
  and `packages/protocol/src/*.js` returns **zero hits**. Every row in §3.5 is now either shipped
  copy or explicitly marked not-built.
- **ISS-C4-03 — CLOSED at both locations, and the new wording is exactly right.** §2.1 Step 2 (line
  510) and §3.5's collision row (line 1238) both now say the app *"tells you whether it is the name
  or the emblem that is taken, but never which party or petition holds it."* Re-derived: `en.ts`
  362–363 ships **two distinct strings** (`collisionName`, `collisionEmblem`), neither naming a
  holder, and `petitions/new/page.tsx` 74–82 binds them to distinct fields (`NAME_COLLISION` →
  `field: 'name'`, `EMBLEM_COLLISION` → `field: 'emblem'`). Both halves of the new sentence are true;
  the ambiguous antecedent is gone.
- **ISS-C4-04 — CLOSED.** The changelog bullet at line 171 now reads *"the Doc 05 source pin
  refreshed — to v2.5.0, Approved"*, agreeing with the header pin at line 12. Changelog and header
  no longer disagree.
- **ISS-C4-05 — CLOSED.** §2.12 item 2 (lines 1084–1088) is scoped to what a stranger can actually
  open: *"Total membership and official-strength numbers are shown on a party's home screen (§3.1)…
  Petition figures become publicly re-countable the same way once the petitions-browse screen ships
  (§2.2)."* Re-derived: `PartyMembership.tsx` 174–192 renders `memberCount` and `officialStrength`
  side by side, and `parties/page.tsx` mounts it with a module-level demo visitor and **no
  authenticated session** — so the figures are readable without an account, which is what the claim
  now rests on.

**Transcription is clean.** `FIND:`, `REPLACE WITH`, `INSERT AFTER`, `### Change`, `## CH-`,
`byte-exact` — **0 hits, case-insensitive**. **Zero** 4-backtick fences; the file holds exactly two
``` fences (lines 3, 25), balanced, both the metadata block. Zero conflict markers. The
`"unconditionally"` string survives at exactly **one** line — 201, inside the v2.3.0 changelog
bullet that **quotes it to describe its removal** — which is correct and required.

**Regression sweep found nothing broken.** All seven source pins re-verify exactly against the
documents they name; the RTM figures (138 Must / 16 COMPLETE / 122 OPEN) match `node
hooks/run_gates.cjs --audit` exactly; the FR-131 discipline survives a fifth version (18
privacy-vocabulary occurrences, every affirmative-shaped hit inspected — all are negations,
glossary entries explicitly marked *"Not true of voting in this version"*, future-tense, or the
deliberate quotation of Doc 09's forbidden framing in the open item); §3.2's numerics spot-check
clean for the fifth time against `constants.js`; and §1.4 Step 1, §2.3's *"One party at a time"*
subsection (still `onePartyRule` byte-for-byte), §2.7's repaired cross-reference and §2.12 item 1
are all intact.

The one new finding is **cosmetic and non-blocking**: two of the eight applied edits left their
source lines unwrapped against the document's own ~100-column convention. It has **zero effect on
the rendered document**. It is recorded for completeness, not as a bar issue.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** (0) · High = 0? **yes** (0) · Medium = 0? **yes** (0)
- **Verdict:** `PASS` — both rows are all "yes". One Low is open; Lows do not block the bar.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1** Outcome & problem clarity | 20 | 97 | 19.40 | Improvement (93 → 97). The last contradiction between what §7 promises and what the app does is closed: a reader who consults the release summary to learn what this version does is now told the same rule the join screen enforces. The nominated first task (§1.4 → §2.3) works end to end at every step, on shipped copy. Every remaining §7 claim I probed holds against the code. |
| **B2** Completeness | 15 | 97 | 14.55 | Improvement (94 → 97). §3.5 is now completely swept: eleven rows, every one either verbatim shipped copy or explicitly marked not-built, with the last unmarked row (row 1) closed this cycle and its absence from the codebase re-confirmed by search. The "what is not built" half of the guide is now as thorough as the "what is built" half. |
| **B3** Traceability & IDs | 20 | 98 | 19.60 | Improvement (95 → 98). All seven source pins verify exactly (01 v2.0.0 Approved · 02 v2.16.3 Approved · 03 v2.11.2 Approved · 05 v2.5.0 Approved · 06 v2.4.3 Approved · 08 v2.7.0 Approved · 09 v1.0.1 In Review); RTM counts match the audit exactly; and the changelog no longer describes a pin value the header does not carry. The document history now reconciles with the header at every bullet. |
| **B4** Correctness & consistency | 15 | 96 | 14.40 | Improvement (88 → 96) — this criterion carried the whole cycle-4 FAIL and is the one that moved most. The §7/§2.3 contradiction is gone; the one-party rule reads identically in five places; the collision wording now matches two shipped strings and two field bindings with no ambiguous antecedent; §2.12 item 2 no longer promises a re-count of figures no stranger can open. Held just under full marks for one carried-forward looseness noted in §4b (not raised as an issue). |
| **B5** Testability | 15 | 96 | 14.40 | Improvement (92 → 96). Every falsifiable claim in the changed regions re-derives: the absent duplicate-backing string (search returns nothing), the two collision strings and their field bindings, the two membership figures and the unauthenticated surface that renders them. No message row now asserts a string that does not exist in `en.ts`. |
| **B6** Convention compliance | 15 | 94 | 14.10 | Roughly held (95 → 94). FR-131 discipline survives a fifth version; ISO-8601 throughout; named owners on all four open items; grade-8 register held in the changed clauses — which read well because they reuse this document's own already-approved phrasing. Zero transcription residue on every probe. Marked down only for the source-line-wrap slip (ISS-C5-01), which is cosmetic and does not affect the rendered document. |
| **Total** | **100** | — | **96.45% → 96%** | — |

## 4. Issues (every issue severity-classified and located)

New IDs are numbered `ISS-C5-##` so cycle-1 through cycle-4 IDs are never reused or renumbered.

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C5-01 | Low | B6 | Document history, **line 171** (181 chars) and §7, **line 1428** (110 chars) | **Two of this version's eight edits left their source lines unwrapped against the document's own convention.** Every other non-table line in this 1,488-line file wraps at or below ~100 columns: line 171 is the **only** non-table line in the whole document longer than 110 characters, and line 1428 is 110 against a §7 whose other prose lines all sit at ≤100. Both are exactly the lines this increment rewrote (the ISS-C4-04 changelog bullet and the ISS-C4-01 release-summary clause), so the cause is transcription, not authoring. **Zero reader impact** — Markdown reflows, and the rendered guide is identical either way. Low, and deliberately not more: no claim, guarantee, ID or fact is affected, and it does not block the bar. | Re-wrap both lines to the document's ~100-column prose convention. Purely cosmetic — appropriate to fold into the next content edit rather than to spend a version on. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### 4a. Cycle-4 disposition (all 5, re-verified against the body and the code)

| Cycle-4 issue | Severity | Status at v2.3.0 | Evidence checked |
|---|---|---|---|
| ISS-C4-01 §7 "any party, unconditionally" | **Medium** | **FIXED** | Line 1428 now reads *"joining and leaving a party, one active membership at a time"* — §3.4's own verified wording, reused rather than re-composed, exactly as routed. The FR-064 rule now reads identically at five locations: §0.2 (272), §2.3 (670), §3.4 (1216), §3.5 (1236), §7 (1428). Change 18's record clause in the same sentence is untouched (*"an append-only record, inside Trumocracy's own store, of the deliberation trail for each proposal and your own record of joining and leaving a party"*). `"unconditional"` survives only at line 201, where the changelog quotes it to describe its removal. I re-swept §7 in full: no other summary sentence restates an unconditional join. |
| ISS-C4-02 §3.5 row 1 unmarked | Low | **FIXED** | Line 1233: *"Ships together with backing and withdrawal (§2.2) — no such message exists in this release."*; "What to do" now *"Not available yet — see §2.2."* Basis re-confirmed: `already done` / `ALREADY_ENDORSED` / `alreadyEndorsed` return **0 hits** across `en.ts`, `packages/sdk/src/*.js` and `packages/protocol/src/*.js`. The row now matches its siblings' pattern. |
| ISS-C4-03 ambiguous "not which one" | Low | **FIXED at both locations** | §2.1 Step 2 (510) and §3.5's collision row (1238) both name the referent: *"whether it is the name or the emblem that is taken, but never which party or petition holds it."* Re-derived against `en.ts` 362–363 (two distinct strings, neither naming a holder) and `petitions/new/page.tsx` 74–82 (distinct field bindings). Both halves true; no reading of the sentence is now false. |
| ISS-C4-04 stale changelog bullet | Low | **FIXED** | Line 171 now reads *"the Doc 05 source pin refreshed — to v2.5.0, Approved"*; header pin line 12 reads `BKLG-TRUMOCRACY (Doc 05 v2.5.0, Approved)`; `docs/05-product-backlog.md` reads `Version: 2.5.0`, `Status: Approved — 05-product-backlog-v2.5.0-business-cycle3.md`. All three agree. |
| ISS-C4-05 §2.12 item 2 overstated | Low | **FIXED** | Lines 1084–1088 scoped to party membership and official-strength numbers on a party's home screen, with petition figures moved to the forthcoming clause tied to §2.2. Re-derived: `PartyMembership.tsx` 174–192 renders `memberCount` and `officialStrength`; `parties/page.tsx` mounts it with a module-level demo visitor and no authenticated session, so the numbers are readable by a stranger today. |

**Score: 5 of 5 cycle-4 issues closed, including the only Medium.** Combined across five cycles:
**43 of 44 findings closed** (the one open item is ISS-C5-01, opened this cycle). **No previously
closed finding regressed** — I re-checked every region prior cycles ruled must not be reopened.

### 4b. Regression sweep (moderate depth — what I re-checked and found intact)

| Region | Result |
|---|---|
| Source pins (all seven) | **Exact.** 01 v2.0.0 Approved · 02 v2.16.3 Approved · 03 v2.11.2 Approved · 05 v2.5.0 Approved · 06 v2.4.3 Approved · 08 v2.7.0 Approved · 09 v1.0.1 In Review — each read from the pinned document's own header |
| RTM figures | **Exact.** Header states 138 Must / 16 COMPLETE / 122 OPEN; `node hooks/run_gates.cjs --audit` reports 138 / 16 / 122 from both independent signals, which agree |
| FR-131 voting-privacy discipline | **Holds a fifth version.** 18 privacy-vocabulary occurrences; every affirmative-shaped hit inspected — lines 44/46 (changelog, negations), 832 (negation), 851 (naming the *missing* protection), 1225 (not-available table), 1252/1264 (glossary, both marked *"Not true of voting in this version"*), 1366 (future tense). No affirmative claim about v1 voting entered with the new text |
| §7's record clause (Change 18) | **Untouched and still correct** — the two named records, scoped to Trumocracy's own store |
| §2.3 "One party at a time" subsection | **Intact**, still `onePartyRule` byte-for-byte vs `en.ts` 134–135; §3.5's refusal row still `alreadyMemberElsewhere` byte-for-byte vs 136–138 |
| §1.4 Step 1 · §2.7 cross-reference · §2.12 item 1 | **Intact** (line 419, lines 925–926, lines 1077–1083) |
| §3.2 numeric reference | **Spot-check clean for the fifth time** — 2% (`DEFAULT_THRESHOLD_BPS: 200`), 500 floor (`ABSOLUTE_FLOOR_ENDORSEMENTS`), 30–365 d (`MIN/MAX_DURATION_SECONDS`), 100-member cap (`PROVISIONAL_MEMBER_CAP`), 90-day floor (`CONSTITUTIONAL_TENURE_FLOOR_SECONDS`) |
| v2.3.0 changelog accuracy | **All five bullets match what landed** — no bullet claims a fix the body does not carry, and none overstates its scope |

**One carried-forward looseness, recorded but deliberately not raised as an issue.** §2.12 item 2's
verb — *"add them up again"* — reads loosely against two aggregate figures with no underlying list
to re-add; what a reader can actually do is read both numbers and compare them. That verb is
**pre-existing wording I examined and accepted at cycle 4** (my cycle-4 finding was confined to the
petition half, and my supplied fix text asked only for scoping), and the sentence's verifiable core
— that both numbers are public on that screen today — is now true. Raising it at cycle 5, on text
whose fix I authored, would be moving the goalposts. It is noted here so the record is complete,
and it is reflected only in B4 sitting at 96 rather than higher.

### 4c. Transcription-residue check (requested explicitly)

| Probe | Result |
|---|---|
| `FIND:` / `REPLACE WITH` / `INSERT AFTER` (case-insensitive) | **0 hits** |
| `### Change` / `## CH-` change headers | **0 hits** |
| `byte-exact`, "transcription spec" | **0 hits** |
| Stray 4-backtick fences | **0** — the file holds exactly two ``` fences (lines 3, 25), balanced, both the metadata block |
| Conflict markers (`<<<`, `>>>`, `=======`) | **0 hits** |
| `"unconditional"` | **1 hit, line 201 only** — the changelog quoting the removed phrase to describe its removal. Correct and required; the live text is clean |
| Collateral damage to adjacent rows | **None found.** §3.5's other ten rows, §2.1's other steps and §2.12's items 1 and 3 all read as they did at v2.2.0 |

**The applier ran clean.** ISS-C5-01 is a wrap artefact of the application, not a content error.

## 5. Routing instruction (to the owning role)

**PASS → route to the `technical-writer` (Nadia Hassan), the owning role for Doc 14, to set
`Status: Approved`.** No new version is required. The SOP advances.

- Set `docs/14-user-guide.md` `Status:` from `In Review` to `Approved`, citing this report
  (`artifacts/reviews/14-user-guide-v2.3.0-business-cycle5.md`, PASS 96%, 0C/0H/0M/1L), in the same
  form the other approved documents use.
- **Do not bump the version for the approval itself** — v2.3.0 is the reviewed version and must stay
  the version this report is bound to, or the hook loses the binding.
- **ISS-C5-01 is Low, cosmetic and open.** It does not require a version and should not trigger one;
  fold the two line re-wraps into whatever content edit comes next.

**Not to be changed — carried forward and re-verified across five cycles:** the entire FR-131
rewrite (§0.1, §0.2, §2.3, §2.6, §3.5's counting-tier rows, §3.6, §4.3, §7); the ISS-C2-01
public-record correction at all its scoped locations; §2.4's two-axis treatment and the
Worker-declaration subsection; §1.2; §3.2; §2.1 Steps 2–5; the source-pin discipline; the four open
items with named owners; and the five now-consistent statements of the one-active-party rule.

**Gate-2 note (scope boundary).** This PASS closes the Doc 14 **document-review** loop. It is **not**
a Gate-2 sign-off and **not** a merge sign-off — the RTM traceability criterion is currently
**NOT MET** (16 of 138 Must rows COMPLETE, 122 OPEN, per the audit), and that gate belongs to
`reviewer-qa` and the human approver, not to this loop.

## 6. Human decision at the cap (ESCALATED only)

**Not applicable.** This is cycle 5 of 5 with verdict **PASS**, so no human decision at the cap is
owed and no recorded-decision fields are added to the metadata block. The rework loop closed inside
the cap: 54% → 78% → 89% → 93% → **96%**, with the last five findings — one Medium and four Lows —
all closed by an eight-operation increment that introduced no new Critical, High or Medium issue.
