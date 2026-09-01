# Document Review Report — Doc 14 User Guide v2.1.0 (business, cycle 3)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (technical-writer) does every rework as a
> new version. Independence: the reviewer is the **tester**, which is **not** Doc 14's owning role.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 14-user-guide.md
Document version: 2.1.0
Review mode: business
Reviewer role: tester (neutral — the owning role for Doc 14 is the technical-writer)
Score: 89%
Critical: 0
High: 0
Medium: 3
Low: 4
Cycle: 3 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

**Every one of the ten cycle-2 findings is genuinely closed, verified against the code and not
against the changelog.** The Critical is closed at all six locations; both Highs are closed; all
three Mediums and all four Lows are closed. The document is materially more honest than v2.0.0 and
the two hardest things in it — the FR-131 voting-privacy disclosure and the public-record /
tamper-evidence correction — are now right.

- **ISS-C2-01 (Critical) — CLOSED at all six locations.** §2.12 items 1–2, the §3.6 `Public record`
  glossary entry, the §4.3 *"Take down party Y"* answer, the §3.1 Public-record row, the §3.4 table
  and §2.1 Step 5 now all state the same three facts and no more: append-only inside Trumocracy's
  own store, **not published**, **not independently checkable** until the DES-097 anchoring
  release. I checked each against `apps/web/src/i18n/en.ts` `trailV1Note` (lines 281–283) and
  against the proof the claim rests on: `UT-0846` (trail ordered, records the whole deliberation),
  `UT-0847` (mutating a returned trail changes nothing; the store's prototype exposes no
  `delete/update/remove/clear/rewrite` trail method), `UT-0848` (injected clock). The writer did
  **not** paste `trailV1Note` verbatim into all six slots and says so in the spec — that was the
  right call; the three load-bearing facts are identical in every location and the grammar fits
  each context. **The §3.6 "no personal information" contradiction is gone** and replaced with the
  opposite, correct statement.
- **ISS-C2-02 (High) — CLOSED.** Backing is `Not yet` in every location that previously claimed it:
  HT-002, both §3.1 rows, the §3.4 table, §7's *"not in this release"* list, §0.2, and §1.4 — which
  is retargeted to join/leave. **The public-support warning survives** as a forthcoming-behaviour
  warning in §2.2, exactly as the review asked. I re-confirmed `apps/web/src/app` still holds five
  routes and `SiteHeader.tsx` three nav entries.
- **ISS-C2-03 (High) — CLOSED, and the two axes are not conflated.** §2.4 now separates them
  correctly: *"Every member — including an open-tier member who has not passed the government-ID
  check — can read and take part in the discussion"* (verification axis: no ID gate, per the
  2026-08-30 ruling §1.3, which I read in full) and *"Putting a proposal forward … requires one
  thing first: declaring yourself a Worker"* (disclosure axis: unchanged by that ruling). The new
  §2.4 "Declaring yourself a Worker" subsection reuses `workerGateBody`,
  `workerConsentPermanent`, `workerConsentPublicRecord` and `workerConsentNoApproval` verbatim. The
  section is also **correct about what is built**: `ProposalsAndDebate.tsx` ships the two-step
  self-declaration (`declare-worker` → `worker-consent` → `confirm-worker`), so the guide is not
  describing an absent surface this time.
- **ISS-C2-04/05/06 (Medium) — CLOSED.** The three §3.1 rows are re-scoped and now match
  `PetitionProgress.tsx` and `PartyMembership.tsx` cell for cell; §2.1 Step 3 and the §3.2 row split
  the 30–365-day design range from the fixed 30-day behaviour (`publishDraft(draftId)` hardcodes
  `now + PETITION.MIN_DURATION_SECONDS`); the non-violence clause is added to §2.1 Step 1 **quoted
  verbatim** against `NON_VIOLENCE_CLAUSE` with the `CLAUSE-TEXT-01` provisional marker and the
  neutrality sentence qualified.
- **All four Lows — CLOSED.** Date fields distinguished; §6 status-page row qualified; the
  "Before you sign up" row aligned with open item 4; the §5 device bullet given the two-part
  treatment.
- **§3.2 survived a third rework intact.** I re-checked it line by line against
  `packages/protocol/src/constants.js` — 2% / 0.5–20% / 500 / 30–365 d / 100-member cap / 1–8
  emblem chars / 5-10-25-40% quorum / >50->50-60-75% approval / 0-14-90-180 d tenure / 0-48h-14d-30d
  timelock / 2-7-14 d discussion / 3-3-7-14 d voting / 90-day floor / 20%-in-30-days / +5 pp / ×2 /
  90-day decay / 1,000 anonymity set / 10% + 30-day fork / 50 & 10 free actions / ≥2 issuers. **All
  correct.** RTM figures (138 Must, 16 COMPLETE, 122 OPEN) match `run_gates.cjs --audit` exactly.
- **No transcription residue.** I searched for `FIND:`, `REPLACE`, `INSERT AFTER`, `## CH-`,
  `**Location:**` and stray 4-backtick fences, case-insensitively. **Zero hits.** The file carries
  exactly two fences (lines 3 and 25), balanced, both the metadata block. All 24 spec changes landed
  and I diffed three of them against the spec's `REPLACE WITH` text byte for byte. The
  transcription is clean.
- **The FR-131 vocabulary sweep still holds after +117 lines.** All 32 occurrences of
  *anonymous / private / receipt-free / coercion-resistant / secret* are negations, glossary
  contrasts, not-yet rows or Phase-3 statements. No affirmative use entered with the new text.

It nonetheless **FAILS at 89%** with **three Mediums**. None is a safety claim and none reopens a
closed finding. All three are the **same residual method gap in a smaller form**: the availability
re-derivation this cycle covered §3.1, §3.4, §2.2 and §2.4 thoroughly, but three assertions outside
those sections still describe behaviour the code does not have.

1. **§1.4 Step 1 — "Open Parties and read one's programme" (new text).** No programme view exists
   anywhere in the app, and **§3.1's own new Party-home row says so** (*"Not shown: the party's
   programme"*). The rework introduced a self-contradiction inside the task it nominates as *"built
   today, end to end"*.
2. **The one-active-party rule is absent from the whole guide.** FR-064's explicit-leave form is
   built, tested (UT-0821/0822/0859), approver-ruled on 2026-08-29, and ships its own user-facing
   copy — yet §0.2 says *"join **any** open party"*, §2.3 lists no precondition, and §3.5 omits the
   one refusal a member will actually hit.
3. **§2.1 Steps 4–5 present the population-provenance chain as current behaviour.** The figures are
   right against **DES-007** but both requirements behind them (FR-009, FR-018) are `☐ G-NOMECH` in
   the RTM, there is no source field anywhere in the code, and the text tells the reader *"anyone
   can challenge it"* — an action with no surface. This is the same shape as ISS-C2-05, one step
   further down the same section.

The fix is small and local: one sentence in §1.4, one short paragraph plus a §3.5 row for the
one-party rule, and the design-vs-current split already used well at Step 3 applied to Step 4–5.
**Nothing in the cycle-2 rework should be reopened** — see §5.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`89%`)
- Critical = 0? **yes** (0) · High = 0? **yes** (0) · Medium = 0? **no** (3)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1** Outcome & problem clarity | 20 | 90 | 18.00 | Improvement (82 → 90). The guide now nominates a first task that genuinely works (§1.4 join/leave) instead of one with no screen, and §2.4's authoring path is real end to end including the Worker consent flow. §0.1's four-bullet "read this first" remains the strongest opening in the suite. Marked down because step 1 of that nominated first task cannot be performed (ISS-C3-01), and a member's *second* join is refused by a rule the guide never mentions (ISS-C3-02). |
| **B2** Completeness | 15 | 86 | 12.90 | Improvement (80 → 86). Both cycle-2 completeness gaps are filled: the mandatory non-violence clause is in §2.1 Step 1 with its reason and provisional marker, and the FR-080 Worker consent has moved out of the Phase-3 §2.7 into §2.4 where the decision is actually made. §2.7 now points at it instead of duplicating it. Remaining gap: the FR-064 one-active-party rule appears nowhere in 1,385 lines, and §3.5 does not carry its refusal message. |
| **B3** Traceability & IDs | 20 | 92 | 18.40 | Improvement (86 → 92). §3.1 and §3.4 are now re-derived against the components that render them and every "Yes" row verifies against `apps/web/src`; new claims cite FR-077/CON-013, DES-097, FR-080, and the 2026-08-30 ruling; CLAUSE-TEXT-01 is raised as a new open item with an owner routed to the PM. Six of seven source pins verify exactly. Marked down for the stale Doc 05 pin (ISS-C3-06) and because §2.1 Steps 4–5 assert mechanisms whose RTM rows (FR-009, FR-018) are open without saying so. |
| **B4** Correctness & consistency | 15 | 82 | 12.30 | Large improvement (55 → 82) and the single biggest gain this cycle. The Critical is closed at all six locations and verified against `trailV1Note` and UT-0846–0848; the §3.6 contradiction is gone; the two participation axes are stated separately and correctly; the non-violence clause is quoted verbatim. What remains is three contained Mediums, one of which (ISS-C3-01) is an internal contradiction between §1.4 and §3.1 introduced by this rework. |
| **B5** Testability | 15 | 88 | 13.20 | Improvement (72 → 88). I re-derived every falsifiable availability assertion in §2, §3.1 and §3.4 against the five routes and nine components — this time they check out, including the three re-scoped rows and the Public-record row (the trail *is* rendered, at `data-testid="decision-trail"`, so "yes, to read within the app" is defensible). §3.2 verifies exactly. Marked down for the three assertions that still fail a check: §1.4's programme step, §2.1's challenge window, and two §3.5 messages with no shipped string. |
| **B6** Convention compliance | 15 | 94 | 14.10 | Improvement (92 → 94). The FR-131 vocabulary discipline survived a 117-line expansion — I re-swept all 32 occurrences. ISO-8601 throughout, named owners on every open item, grade-8 register held in the new sections (the Worker-consent paragraphs read as well as the copy they reuse), no jargon breach (NFR-023). The duplicate-date-field issue is properly resolved rather than deleted. Residual: one dangling cross-reference left by the §2.7 → §2.4 relocation (ISS-C3-05). |
| **Total** | **100** | — | **88.90% → 89%** | — |

## 4. Issues (every issue severity-classified and located)

New IDs are numbered `ISS-C3-##` so cycle-1 and cycle-2 IDs are never reused or renumbered.

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C3-01 | **Medium** | B1, B4, B5 | §1.4 Step 1 (line 329): *"Open **Parties** and read one's programme."* — new text, spec Change 5. Contradicted at §3.1 **Party home** (line 1010) | **No screen renders a party's programme, and this version's own §3.1 row says so.** `apps/web/src/app/parties/page.tsx` renders exactly one component, `<PartyMembership>`, and passes it `PartySummary[]` — a type with three fields, `{ partyId, name, emblem }` (`PartyMembership.tsx` lines 49–53). `PILLARS` appears in `parties/page.tsx` only inside `seedPillars()`, which fabricates demo charter text for the seeding path; nothing renders it. `EightPillarForm` is a `<textarea>` editor for your *own* draft, and there is no petitions-browse route to read anyone else's. So a party programme is **not readable by anyone in 0.1.0** — which is precisely what the new §3.1 Party-home row states: *"**Not shown:** the party's programme, and any breakdown by area."* The two statements are three hundred lines apart in the same version. The defect matters more than its size because §1.4 is the task the rework **nominated** as *"built today, end to end, and the fastest way to see the whole thing work"* — a reader following it fails at step 1 of 3. (Related, not separately raised: §4.3's first row promises *"A party's programme and founding rules — **Everyone**, forever"*, which is the design, not 0.1.0.) | Drop the programme clause from step 1: *"Open **Parties** and choose one"* — or, if the writer wants to keep the reading step, state where the programme can be read today (it cannot) and mark it. §2.2's forthcoming version of the same instruction (*"Open the petition and read the eight chapters"*) is already correctly future-tense and needs no change. |
| ISS-C3-02 | **Medium** | B2, B4 | Absent throughout; the affected claims are §0.2 (line 182) *"join **any** open party"*; §1.4 steps 1–3 (lines 329–331); §2.3 "Steps" and the four "No approval / No interview / No invitation…" bullets (lines 533–544); §3.4 left column (line 1113) *"Join and leave any party, **freely**"*; §3.5 (lines 1129–1139, the message list) | **The one-active-party rule is built, tested, approver-ruled and user-facing — and appears nowhere in this guide.** `PartyCreationService.joinParty()` refuses a member who holds an active membership elsewhere with `ALREADY_MEMBER_ELSEWHERE`, and `PartyMembership.tsx` (lines 91–94) surfaces it with shipped copy that names the blocking party: *"You are already a member of {name}. **You can belong to one party at a time.** Leave {name} first, then join this one."* The catalogue also carries a standing statement of the rule — `onePartyRule`: *"You can belong to one party at a time. Leaving one and joining another is always your choice."* Doc 08 §3.1 **FR-064** records it as implemented and tested in the EXPLICIT-LEAVE form (UT-0821 second join refused, UT-0822 same-party double join refused without inflating the count, UT-0859 the web surface names the blocking party), and the `FR-064-SEMANTICS` approver ruling of 2026-08-29 amended FR-064's normative text to that posture. The guide instead tells the reader joining is unconditional — *"join **any** open party"*, *"Joining is the simplest thing in Trumocracy"*, *"no membership tier you have to earn to get in"*, *"Join and leave any party, **freely**"* — and §2.10 mentions only the consequence (*"You may join another party"*) without the rule that makes leaving necessary. §3.5, which lists eight messages including three for unbuilt features, omits the one refusal a member will actually meet. This is the ISS-C2-06 class (a shipped, enforced rule the guide never tells the reader about), and it lands in the flagship working task. | Add the rule to §2.3 in plain language — one party at a time; to join another, leave the one you are in first; leaving is instant and needs nobody's permission (§2.10) — and reuse the shipped `onePartyRule` sentence, which is already approved copy. Qualify §0.2's *"join any open party"* and §3.4's *"freely"*. Add the `alreadyMemberElsewhere` refusal to the §3.5 table. Note in passing that the RTM row stays open for a v2 design reason (DES-065), not for the app-side behaviour the guide would be describing. |
| ISS-C3-03 | **Medium** | B4, B5 | §2.1 Step 4, third bullet (lines 452–456); §2.1 Step 5, third bullet (lines 467–470, the sixth ISS-C2-01 location) | **The population-provenance chain is described in the present tense; none of it is built.** Step 4: *"The population figure comes from **at least five independent published sources**, and the app uses the **middle value** … That figure has a **7-day window** during which **anyone can challenge it** before it is used."* The figures are **correct against DES-007** (Doc 03 line 859: *"median of ≥5 sources, 7-day dispute, ±5%/quarter drift cap"*) — I checked, and they are not invented. But **DES-007 is unbuilt**: Doc 08 §3.1 **FR-009** is `☐ **G-NOMECH — OPEN-12**` (*"`submitPopulation` is `onlyTimelock`; source independence is not enforceable on-chain"*), and in the shipped path `petitionThreshold()` takes two bare integers off the draft (`jurisdictionPopulation`, `jurisdictionVerified`) with no oracle, no median, and no dispute mechanism anywhere. There is **no way for anyone to challenge anything**. The existing caveat — *"this population data is a curated demo set"* — addresses the *data*, not the *mechanism*, and leaves the challenge right standing. Step 5 compounds it: *"the app permanently records, inside its own append-only store: the programme as written, the number of backers, the population figure used, and **where that figure came from**."* `activateParty()` → `saveParty()` persists name, emblem, jurisdiction, pillars, charter, drafterPseudonym, state, `legalRegistrationVerified` and `activatedAt` — **not** the endorsement count, **not** the denominators, and there is **no source field on a draft, a petition or a party record anywhere in the codebase**. The count and denominators survive only on the petition row, which `updatePetition()` mutates (so "append-only" is exact for the party record and loose for that one). "Denominator and sources recorded immutably at activation" is FR-018's requirement — and **FR-018 is `☐ G-NOMECH`** too. This is the same shape as ISS-C2-05 ("a window **you choose**"), one step further down the same section, and it sits in the sixth ISS-C2-01 location. | Apply the split the writer already used well at Step 3. Step 4: state the DES-007 design (five sources, middle value, a 7-day challenge window) as the published design, and state the current behaviour separately — in 0.1.0 the figure is a curated demo value, the multi-source oracle and the challenge window are not built, and there is nothing to challenge yet. Step 5: keep the programme and drop or qualify *"where that figure came from"*; say what is actually kept at opening and that the recorded-sources guarantee arrives with the population oracle. |
| ISS-C3-04 | Low | B4 | §2.12 item 1 (lines 976–979); §3.6 **Public record** (line 1159); §7 (lines 1327–1329) | **A scope overstatement in an otherwise correct fix.** All three say the record covers *"every action taken on the platform"* / *"every backing, every join, every proposal, every piece of discussion"* / *"everything that has happened so far"*. Two problems, neither safety-relevant. (i) *"every backing"* names an action this same version says has no screen (§2.2, HT-002, §3.1) — nothing can be recorded because nothing can happen. (ii) There is **no single platform-wide record**: what exists is the per-window decision trail (`service.decisionTrail(windowId)`, rendered at `data-testid="decision-trail"`, covering WINDOW_OPENED / PROPOSAL_FILED / STAGE_ADVANCED / DELIBERATION_POSTED / BALLOT_ADMISSION) and the member's **own** append-only membership history in `PartyMembership.tsx`. A reader told *"the app itself is the only place to read it"* will find two scoped views, not one list. Low, not Medium, because the honesty-critical facts this fix existed to deliver — not published, not independently checkable — are stated correctly at all three locations and the reader is not misled about any guarantee. | Scope the sentence to what the app holds and shows today: the deliberation record for each proposal, and your own record of joining and leaving. Drop *"every backing"* while backing has no surface. |
| ISS-C3-05 | Low | B6 | §2.7 closing paragraph (line 824): *"…is a separate, smaller step than standing for a position **below**…"* | A dangling cross-reference left by the §2.7 → §2.4 relocation. The paragraph now sits at the **end** of §2.7, so "standing for a position" is *above* it, not below. Faithfully transcribed from spec Change 13 — an authoring slip, not a transcription error. | *"…than standing for a position, described in this section…"* or simply drop the direction word. |
| ISS-C3-06 | Low | B3 | `Source:` block, line 12: *"BKLG-TRUMOCRACY (Doc 05 v2.3.0, In Review)"* | Stale pin. `docs/05-product-backlog.md` is at **v2.4.0**, `Status: In Review`, `Last updated: 2026-08-31` — one minor version ahead of the pin and dated the day *before* this rework, so it was checkable at authoring time. The other six pins verify exactly (01 v2.0.0 Approved, 02 v2.16.3 Approved, 03 v2.11.2 Approved, 06 v2.4.3 Approved, 08 v2.7.0 Approved, 09 v1.0.1 In Review), and the RTM counts match `run_gates.cjs --audit`. | Bump to `Doc 05 v2.4.0, In Review`. |
| ISS-C3-07 | Low | B5 | §3.5 rows 1, 4, 5, 6, 7 (lines 1130, 1133–1136); §3.3 last row (line 1105) | **Two of the eight §3.5 messages have no shipped string, and one paraphrase overstates.** `apps/web/src/i18n/en.ts` contains no *"Activation is final"* copy and no unsupported-device message; §3.3's *"Older or unsupported devices — You get a clear message telling you what will work, never a broken screen"* has nothing behind it either. `collisionName` reads *"A party or petition with this name already exists in your area"* — it does **not** name the party, so §3.5's *"That name is already used by **&lt;party&gt;**"* promises more than the screen shows. The two counting-tier rows are exact (`openTierNoticeTitle`, `openTierNoticeRefused`) and the three not-yet rows are correctly labelled. Low because §3.5 is explicitly a plain-language meanings table, not a string catalogue — but it is the last region of the document that has not been re-derived against the code. | Sweep §3.5 and §3.3's last row against `en.ts` in the same pass as ISS-C3-02's new row: drop or mark the two messages that do not exist, and align the collision paraphrase. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### 4a. Cycle-2 disposition (all 10, re-verified against the body and the code)

| Cycle-2 issue | Severity | Status at v2.1.0 | Evidence checked |
|---|---|---|---|
| ISS-C2-01 public-record / tamper-evidence | Critical | **FIXED** | All six locations state append-only-in-our-store / not published / not independently checkable, and nothing more. §2.12 items 1–2, §3.6 glossary (both clauses corrected), §4.3 "Take down party Y", §3.1 Public-record row, §3.4 left column, §2.1 Step 5. Checked against `trailV1Note` (en.ts 281–283) and UT-0846/0847/0848 (`packages/sdk/test/proposals.test.js` 523–585): ordering, copies-on-read, and the asserted absence of any `delete/update/remove/clear/rewrite` trail method. *(Residual scope wording carried as the Low ISS-C3-04; the guarantee itself is correct.)* |
| ISS-C2-02 backing marked built | High | **FIXED** | HT-002 **Not yet**; §3.1 Petitions and Back/withdraw rows **Not yet built**; §3.4 moved to the right column; §7 moved to "not in this release"; §0.2 rewritten; §1.4 retargeted to join/leave with a blockquote explaining backing's absence; §2.2 fully converted to forthcoming-behaviour. **The public-by-default warning is kept**, in future tense, with *"only back a petition if you are comfortable being seen to support it."* Re-confirmed five routes and three nav entries. |
| ISS-C2-03 authoring "any member" | High | **FIXED, and the two axes stay separate** | §2.4 opening rewritten; new "Declaring yourself a Worker" subsection reusing four shipped strings verbatim; "what's built today" states that opening a question and filing a competing answer are the same gated step (confirmed: `fileProposal()` → `_requireAuthor()` on both branches); HT-004, §3.4 and §0.2 qualified; §2.7 points to the relocated paragraph. Verification axis (no ID gate on authoring) matches the 2026-08-30 ruling §1.3 exactly; disclosure axis stated as self-declared with nobody approving. **Additionally verified the surface exists** — `ProposalsAndDebate.tsx` ships `declare-worker` → `worker-consent` → `confirm-worker`. |
| ISS-C2-04 three §3.1 rows | Medium | **FIXED** | "Opening record" → **Not yet built**; "How the bar is worked out" → scoped to supporters/needed/remaining with the population figure and "why this number" excluded (matches `PetitionProgress.tsx`, whose `<details>` renders only when the optional `binding` prop is passed — `petitions/new/page.tsx` does not pass it); "Party home" → membership numbers + join/leave, with programme and area breakdown explicitly excluded (matches `PartyMembership.tsx`). |
| ISS-C2-05 petition window "you choose" | Medium | **FIXED** | §2.1 Step 3 and the §3.2 row both state the 30–365-day design range and the fixed 30-day current behaviour separately. Confirmed `publishDraft(draftId)` takes one argument and sets `closesAt = now + PETITION.MIN_DURATION_SECONDS`. |
| ISS-C2-06 non-violence clause omitted | Medium | **FIXED** | §2.1 Step 1 quotes `NON_VIOLENCE_CLAUSE` **verbatim** (byte-identical to `constants.js` 165–168), states it is non-removable, gives the reason, marks it the only exception to content-neutrality, carries the `CLAUSE-TEXT-01` provisional marker, and the *"never about what you believe"* sentence is qualified with *"Beyond the non-violence commitment above…"*. Confirmed `EightPillarForm.tsx` displays it and attaches it to every draft. CLAUSE-TEXT-01 is raised as a new unowned open item routed to the PM — the right move. |
| ISS-C2-07 duplicate date fields | Low | **FIXED** | §0's row is now *"Last reviewed (independent business review) — 2026-08-31 … This is not the same date as `Last updated` in the header above, which tracks when the writer last changed this document's content."* Resolved by definition rather than deletion. |
| ISS-C2-08 §6 Doc 09 citation | Low | **FIXED** | The status-page row now carries *"(Doc 09 — `Status: In Review`, not yet approved for production; see the note below)"*. |
| ISS-C2-09 "Before you sign up" understated | Low | **FIXED** | Row now reads *"Yes — the disclosure text is shown today; the enrolment action behind it does not work yet (open item 4)"*, matching `verify/page.tsx` (`kept-list`, `not-kept-list` render; `start-verification` has no `onClick`). |
| ISS-C2-10 §5 device bullet | Low | **FIXED** | Now *"Design target: a slow connection and an old phone … **No device-lab measurement has been performed in this release**"*, matching the two bullets above it. |

**Score: 10 of 10 cycle-2 issues closed — the Critical, both Highs, all three Mediums and all four
Lows.** Combined with cycle 1: **32 of 34 findings across three cycles are closed**, and the two
that carried (ISS-23, ISS-24) closed this cycle. The three new Mediums are not regressions of
anything previously fixed.

### 4b. Transcription-residue check (requested explicitly)

| Probe | Result |
|---|---|
| `FIND:` / `REPLACE WITH` / `INSERT AFTER` / `INSERT THIS TEXT` (case-insensitive) | **0 hits** |
| `## CH-` / `CH-NN` change headers | **0 hits** |
| `**Location:**`, "transcription spec", "byte-exact" | **0 hits** |
| Stray 4-backtick fences | **0** — the file holds exactly two ``` fences (lines 3, 25), balanced |
| Conflict markers (`<<<`, `>>>`, `=======`) | **0 hits** |
| Spec coverage | All 24 changes present in the body; three (Changes 5, 8, 13) diffed against the spec's `REPLACE WITH` text byte for byte — exact |

**No residue.** The two issues that trace to spec text (ISS-C3-01, ISS-C3-05) are authoring slips
that were *faithfully* transcribed — I checked the spec, and the PM applied what was written.

## 5. Routing instruction (to the owning role)

**FAIL → route to the `technical-writer` (Nadia Hassan), the owning role for Doc 14.** The rework
MUST produce a **new version** — a **patch bump to `2.1.1`** is the honest signal (zero Critical,
zero High; three contained Mediums fixable in roughly one paragraph each, with no re-founding of any
section) — with `Status: In Review`, after which this loop re-reviews as cycle 4 of 5.

Suggested order of work, highest leverage first:

1. **ISS-C3-02 first.** It is the only finding that changes what a reader can *do*, and the copy
   already exists — `onePartyRule` and `alreadyMemberElsewhere` in `apps/web/src/i18n/en.ts` are
   approved, shipping plain language. Reuse them, exactly as the `joinPrivate`, `trailV1Note` and
   `workerGateBody` reuses worked in cycles 2 and 3. Four locations plus one new §3.5 row.
2. **ISS-C3-01.** One sentence. Delete the programme clause from §1.4 step 1 so it agrees with the
   §3.1 row this same version added.
3. **ISS-C3-03.** Apply the Step-3 pattern to Steps 4 and 5. This is the last place in §2.1 where
   design and current behaviour are welded together.
4. **The four Lows**, and while in §3.5 do the sweep ISS-C3-07 asks for — it is the one region of
   the document that has never been re-derived against `en.ts`.

**Not to be changed — carried forward from cycle 2 and re-verified this cycle:**

- **The entire FR-131 rewrite** (§0.1, §0.2, §2.3, §2.6, §3.5's counting-tier rows, §3.6, §4.3, §7).
  The vocabulary sweep is still clean after +117 lines.
- **The ISS-C2-01 public-record correction at all six locations** — the wording is right; only the
  "every action" scope phrase needs narrowing, and the guarantee sentences must not be touched.
- **§2.4's two-axis treatment and the relocated Worker-declaration subsection.** This is now the
  clearest statement of the disclosure/verification distinction in the whole document suite, and it
  matches the 2026-08-30 ruling precisely. Do not collapse the axes in any future edit.
- **§1.2**, **§3.2** (verified a third time, line by line), the **source-pin discipline** (one stale
  pin aside), and the **"Open items this guide cannot close itself"** section — now five items with
  named owners, including the newly surfaced CLAUSE-TEXT-01.

No finding in this report asks the writer to reopen any of the above.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 3 of 5, verdict **FAIL**, routed to the owning role.
