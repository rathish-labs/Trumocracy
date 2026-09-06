# Document Review Report — Doc 14 User Guide v2.2.0 (business, cycle 4)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (technical-writer) does every rework as a
> new version. Independence: the reviewer is the **tester**, which is **not** Doc 14's owning role.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 14-user-guide.md
Document version: 2.2.0
Review mode: business
Reviewer role: tester (neutral — the owning role for Doc 14 is the technical-writer)
Score: 93%
Critical: 0
High: 0
Medium: 1
Low: 4
Cycle: 4 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

**All seven cycle-3 findings are closed at every location the cycle-3 report named, verified against
the code and not against the changelog.** The three Mediums are closed; all four Lows are closed;
the two PM-directed extensions (Changes 19/20) landed; the Change 21 pin refresh is correct. The
transcription is clean — zero residue on every probe.

It nonetheless **FAILS at 93%** on **one Medium**: **ISS-C3-02 survives, in its strongest possible
wording, at one location the cycle-3 report did not enumerate — §7, line 1394: *"New in this
release: joining and leaving **any party, unconditionally**."*** That is the exact claim this
rework was routed to qualify, and it sits in the **same sentence the rework edited** (Change 18
rewrote that sentence's tail). The rework qualified §0.2, §2.3, §3.4 and §3.5 correctly and then
left the one place that states the opposite emphatically.

What is genuinely closed:

- **ISS-C3-01 (Medium) — CLOSED.** §1.4 Step 1 now reads *"Open **Parties** and choose one."* The
  programme clause is gone, and the step now agrees with §3.1's Party-home row (*"Not shown: the
  party's programme"*). I re-confirmed the basis: `apps/web/src/app/parties/page.tsx` mounts exactly
  one component, `<PartyMembership>`, and no route renders `PILLARS`.
- **ISS-C3-02 (Medium) — CLOSED at four of five locations; survives at §7 (ISS-C4-01).** The new
  §2.3 subsection **"One party at a time"** (line 636) reuses `onePartyRule` **byte-for-byte**:
  *"You can belong to one party at a time. Leaving one and joining another is always your choice."*
  (`en.ts` 134–135). The new §3.5 row (line 1202) reuses `alreadyMemberElsewhere` **byte-for-byte**
  with the placeholder substituted (`en.ts` 136–138), and §2.3's claim that *"the app tells you
  which party is blocking it"* is true — `PartyMembership.tsx` 91–95 passes
  `nameOf(e.currentPartyId)` into that string. §0.2 now reads *"join an open party — one at a time
  (§2.3)"*; §3.4 reads *"Join and leave a party freely — one active membership at a time"*.
- **ISS-C3-03 (Medium) — CLOSED, and the split is exact.** Step 4 now labels the ≥5-source median
  and 7-day window as *"The design (DES-007) calls for…"* and states *"**None of that mechanism is
  built in this release.** … there is no multi-source oracle, no median calculation, and nothing yet
  to challenge."* Step 5 now records only *"the programme as written — name, emblem, area and the
  eight chapters"* and states *"**The backer count and the population figure used are not part of
  that permanent record in this release, and there is no source field anywhere in the code**"*.
  Both re-derived: `activateParty()` → `saveParty({ petitionId, name, emblem, jurisdiction, pillars,
  charter, drafterPseudonym, state, legalRegistrationVerified, activatedAt })` — no endorsement
  count, no denominators (`party-creation.js` 814–825); `petitionThreshold()` takes
  `petition.jurisdictionPopulation ?? 0` and `petition.jurisdictionVerified ?? 0` off the row
  (795–799); and a full-text search for a source field across `packages/sdk/src` and
  `packages/protocol/src` returns **nothing**. The claim of absence is correct.
- **All four Lows — CLOSED.** §2.12 item 1, §3.6 *Public record* and §7 are scoped to the two records
  that exist; §2.7's dangling *"below"* is fixed (line 893 now points *up* to §2.4 by name); the Doc
  05 pin is correct; §3.5's *"Activation is final"* and *"This device is not supported"* rows and
  §3.3's device row are all marked not-built, and the collision row is the shipped `collisionName`
  string verbatim.
- **Changes 19 and 20 landed.** §3.1's Public-record row (line 1087) is scoped identically to
  §2.12/§3.6. §2.1 Step 2 no longer claims the app names the holder.
- **Change 21 verifies.** The pin reads `BKLG-TRUMOCRACY (Doc 05 v2.5.0, Approved)`;
  `docs/05-product-backlog.md` reads `Version: 2.5.0`, `Status: Approved — 05-product-backlog-v2.5.0-business-cycle3.md (PASS 96%, 0C/0H/0M/6L)`. **All seven source pins now verify exactly** (01
  v2.0.0 Approved · 02 v2.16.3 Approved · 03 v2.11.2 Approved · 05 v2.5.0 Approved · 06 v2.4.3
  Approved · 08 v2.7.0 Approved · 09 v1.0.1 In Review). RTM figures (138 Must / 16 COMPLETE / 122
  OPEN) match `node hooks/run_gates.cjs --audit` exactly.
- **§3.2 survived a fourth rework intact.** Re-checked line by line against
  `packages/protocol/src/constants.js`: 2% (`DEFAULT_THRESHOLD_BPS: 200`), 0.5–20% (`MIN 50` /
  `MAX 2_000`), 500 (`ABSOLUTE_FLOOR_ENDORSEMENTS`), 30–365 d (`MIN/MAX_DURATION_SECONDS`), 100-member
  cap (`PROVISIONAL_MEMBER_CAP`), 1–8 emblem chars (`EMBLEM`), 5-10-25-40% quorum / >50->50-60-75%
  approval / 0-14-90-180 d tenure / 0-48h-14d-30d timelock / 2-7-14 d discussion / 3-3-7-14 d voting
  (`TIER_RULES`), 90-day floor (`CONSTITUTIONAL_TENURE_FLOOR_SECONDS`), 20%-in-30-days / +5 pp / ×2 /
  90-day decay (`SURGE`), 1,000 anonymity set, 10% + 30-day fork, 50 & 10 free actions, ≥2 issuers.
  **All correct.** The non-violence clause is still byte-identical to `NON_VIOLENCE_CLAUSE`.
- **No transcription residue.** `FIND:`, `REPLACE WITH`, `INSERT AFTER`, `## CH-`, `### Change`,
  `**Location:**`, `byte-exact`, conflict markers — **0 hits, case-insensitive**. **Zero** 4-backtick
  fences; the file holds exactly two ``` fences (lines 3, 25), balanced, both the metadata block.
- **The FR-131 vocabulary sweep still holds after +70 lines.** Two hits on the affirmative-risk
  scan, both benign and both pre-existing: line 108 (changelog, *"Supporters are anonymous"* — the
  authoring pseudonymity axis, not voting) and line 1427 (the open item **quoting** Doc 09's
  forbidden framing in order to flag it). No affirmative claim about v1 voting entered with the new
  text.
- **§2.4's two-axis treatment is untouched and still verbatim.** `workerGateBody`,
  `workerConsentPermanent`, `workerConsentPublicRecord` and `workerConsentNoApproval` all still match
  `en.ts` 204–225 exactly. Nothing the cycle-3 review asked to leave alone was reopened.

The four Lows are all residue of the same sweep: §3.5's row 1 was not swept with its siblings, the
new collision wording is ambiguous in a way that misreads the shipped strings, one changelog bullet
disagrees with the pin it describes, and §2.12 item 2 promises a public re-count for petitions that
have no browse screen. **None blocks the bar.** The single Medium does.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`93%`)
- Critical = 0? **yes** (0) · High = 0? **yes** (0) · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1** Outcome & problem clarity | 20 | 93 | 18.60 | Improvement (90 → 93). The nominated first task (§1.4) now works end to end at every step — the programme clause is gone and step 1 matches the only component `parties/page.tsx` mounts. The rule a reader will actually hit on a second join is now stated where joining is described, in shipped approved copy. Marked down only because the release-summary section still tells that reader joining is *"unconditional"* (ISS-C4-01). |
| **B2** Completeness | 15 | 94 | 14.10 | Improvement (86 → 94). The cycle-3 completeness gap is filled at four locations plus a new §3.5 row; Step 4's design-vs-current split adds the missing "and none of it is built" half; Step 5 now says what is *not* recorded, which is the harder and more useful half. Residual: §3.5 row 1 is the one message row still neither shipped nor marked (ISS-C4-02). |
| **B3** Traceability & IDs | 20 | 95 | 19.00 | Improvement (92 → 95). **All seven source pins now verify exactly**, including the Change-21 refresh to Doc 05 v2.5.0 Approved; the RTM counts match the audit; §2.1 Steps 4–5 now name the RTM state behind the mechanism instead of asserting it. Marked down only for the changelog bullet that still describes the superseded pin value (ISS-C4-04). |
| **B4** Correctness & consistency | 15 | 88 | 13.20 | Improvement (82 → 88). The §1.4/§3.1 contradiction this rework was routed to fix is gone; the population-provenance chain is honest; the one-party rule is stated identically in four places. But a **new** internal contradiction of the same shape now runs between §7 and §2.3/§3.5 (ISS-C4-01), and two smaller correctness slips remain (ISS-C4-03, ISS-C4-05). This criterion carries the whole of the FAIL. |
| **B5** Testability | 15 | 92 | 13.80 | Improvement (88 → 92). §3.5 and §3.3 — the region cycle 3 named as never re-derived — have now been re-derived: two non-existent messages marked, the device row qualified, the collision row taken verbatim from `en.ts`. §3.2 verifies for the fourth time. I re-confirmed five routes, nine components, `VoteConfirmation`/`ReceiptFreedomBanner` mounted nowhere, and no `withdraw` control anywhere in `app/` or `components/`. Marked down for §3.5 row 1 and §2.12 item 2, both falsifiable and both currently false. |
| **B6** Convention compliance | 15 | 95 | 14.25 | Improvement (94 → 95). FR-131 discipline survives a fourth version (30 occurrences swept; the two affirmative-looking hits are a pseudonymity reference and a deliberate quotation of Doc 09's forbidden framing). ISO-8601 throughout, named owners on all four open items, grade-8 register held in the new subsection — which reads as well as the shipped copy it reuses because it *is* the shipped copy. Zero transcription residue. Residual: the changelog/pin mismatch. |
| **Total** | **100** | — | **92.95% → 93%** | — |

## 4. Issues (every issue severity-classified and located)

New IDs are numbered `ISS-C4-##` so cycle-1, cycle-2 and cycle-3 IDs are never reused or renumbered.

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C4-01 | **Medium** | B1, B4 | §7 "What is new in this version", **line 1394**: *"New in this release: joining and leaving **any party, unconditionally**; …"*. Contradicted at §2.3 line 636–641, §3.5 line 1202, §3.4 line 1182, §0.2 line 240 | **ISS-C3-02 survives, at its strongest wording, in a sentence this rework edited.** The FR-064 one-active-party rule is enforced in code — `PartyCreationService.joinParty()` refuses a member holding an active membership elsewhere with `ALREADY_MEMBER_ELSEWHERE` (`party-creation.js` 833–843), surfaced by `PartyMembership.tsx` 91–95 with copy that names the blocking party. This version states that rule correctly in **four** places. §7 states the opposite in **one**, and does it emphatically: joining is *"unconditional"*, of *"any party"* — the identical phrase (*"any party"*) the cycle-3 report required to be qualified at §0.2 and §3.4, plus an adverb stronger than the *"freely"* it also required to be qualified at §3.4. This is not an un-swept remote corner: **Change 18 rewrote the tail of this very sentence** (spec lines 426–441 replace *"of everything that has happened so far"* with the scoped record clause), so the writer edited the clause immediately following the false one. It is also the case the rework's own stated principle covers — the v2.2.0 changelog (lines 180–185) argues that *"a same-class echo of a named finding falls within that finding's own sweep"* and applies it to two adjacent defects (Changes 19, 20); the strongest surviving echo of the primary finding was not swept by the same rule. Medium, not Low, for the same reason ISS-C3-01 was Medium: it is a flat internal contradiction with the shipped behaviour, in the section a reader consults to learn what this release does. | Qualify the clause the same way §3.4 already is. E.g. *"New in this release: joining and leaving a party — one active membership at a time (§2.3) — with no approval, no interview and no fee; …"*. Do not touch the rest of the sentence: Change 18's record clause is correct and verified. While in §7, confirm no other summary sentence restates an unconditional join. |
| ISS-C4-02 | Low | B2, B5 | §3.5 **row 1**, line 1199: *"You have already done this." · "One person, one action, for each petition." · "Nothing. Your first action counted."* | **The one §3.5 row the sweep missed — it has no shipped string and belongs to an unbuilt feature.** `apps/web/src/i18n/en.ts` contains no *"You have already done this"* copy (a case-insensitive search for `already` returns six hits: `alreadyMemberElsewhere`, two `collision*` strings, and three unrelated debate lines), and the SDK defines no `ALREADY_ENDORSED`/duplicate-endorsement code. The row describes the duplicate-**backing** refusal — and backing has no screen at all in 0.1.0, as this same version states four times (§2.2, HT-002, §3.1 Petitions and Back/withdraw rows, §7). Its four siblings in the same table were correctly marked in this rework (*"Activation is final"*, *"This device is not supported"*, and the two residency/voting rows); row 1 was left presented as live, and its "What to do" column — *"Your first action counted"* — actively implies backing works. Low for the same reason cycle 3 rated the identical class Low: §3.5 is a plain-language meanings table, not a string catalogue, and no guarantee is misstated. | Mark it like its siblings: *"Ships together with backing and withdrawal (§2.2) — no such message exists in this release."* Or drop the row until backing has a screen. |
| ISS-C4-03 | Low | B4, B5 | §2.1 Step 2, lines 477–479 (Change 20); the same wording echoed at §3.5's collision row, line 1204 | **Change 20 removed a false claim and introduced an ambiguous one that, on its most natural reading, is also false.** The line now reads *"…the app refuses — it tells you a name or emblem is already taken in your area, **not which one**."* The intended referent is the *holding party* (correct: `collisionName` = *"A party or petition with this name already exists in your area."* names nobody). But the nearest antecedent to *"which one"* is the immediately preceding disjunction *"a name or emblem"* — and on that reading the sentence is wrong: `en.ts` 362–363 ships **two distinct strings**, and `petitions/new/page.tsx` 77 and 82 attach them to distinct fields (`NAME_COLLISION` → `field: 'name'`, `EMBLEM_COLLISION` → `field: 'emblem'`), so the app tells you exactly which of the two collided. §3.5's gloss carries the same ambiguity — *"Names and emblems must be unique in an area — the message does not say which one is taken"* — with an even closer plural antecedent. Low: a wording defect about a message detail, with no safety, availability or guarantee impact, and one reading is correct. | Name the referent explicitly in both places: *"…the app tells you whether it is the name or the emblem that is taken, but never which party or petition holds it."* |
| ISS-C4-04 | Low | B3, B6 | Document history, **line 171**: *"**ISS-C3-06 (Low):** the Doc 05 source pin bumped to **v2.4.0, In Review**."* vs the pin it describes, **line 12**: *"BKLG-TRUMOCRACY (Doc 05 **v2.5.0, Approved**)"* | **The changelog describes a pin value the document no longer carries.** Change 21 refreshed the pin after the changelog bullet was authored, and the bullet was not refreshed with it. The pin itself is **correct** — I verified `docs/05-product-backlog.md` reads `Version: 2.5.0`, `Status: Approved — 05-product-backlog-v2.5.0-business-cycle3.md (PASS 96%, 0C/0H/0M/6L)`. So the defect is confined to the history section, but it is the *same staleness class* ISS-C3-06 named, now one level up: a reader auditing the changelog against the header finds them disagreeing. | *"ISS-C3-06 (Low): the Doc 05 source pin refreshed — to v2.5.0, Approved (Doc 05 advanced and its cycle-3 review passed between this rework's authoring and its transcription)."* |
| ISS-C4-05 | Low | B4, B5 | §2.12 *"A decision looks wrong to you"*, item 2, lines 1052–1054: *"**Re-count what is public.** The figures behind petitions and party status are public, so a journalist, a researcher or a neighbour can add them up again and compare."* | **Half of this is true today and half is not, in a section this rework otherwise made precise.** Party status is genuinely public: `PartyMembership.tsx` renders total membership and official strength as numbers on the parties directory, reachable by anyone. **Petition figures are not** — `PetitionProgress` is mounted only inside `petitions/new/page.tsx` (line 124), the draft-and-publish flow, and this version states four separate times that no petitions-browse screen exists (§2.2, §3.1 *Petitions* row, HT-002, §7). A journalist with no draft of their own cannot see a petition's supporters, bar or remaining count to "add them up again". The neighbouring item 1 was scoped precisely in this rework (Change 10); item 2 sits directly beneath it and still overstates. Low: the claim is an invitation to verify, not a guarantee, and it is correct for the party half. | Scope it to what a stranger can actually open today: party membership and official-strength numbers on the parties directory. Note that petition figures become publicly re-countable when the petitions-browse screen ships (§2.2). |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### 4a. Cycle-3 disposition (all 7, re-verified against the body and the code)

| Cycle-3 issue | Severity | Status at v2.2.0 | Evidence checked |
|---|---|---|---|
| ISS-C3-01 §1.4 Step 1 programme claim | Medium | **FIXED** | Line 387 now reads *"Open **Parties** and choose one."* Agrees with §3.1's Party-home row (line 1079). Re-derived: `apps/web/src/app/parties/page.tsx` mounts only `<PartyMembership>`; no route renders a programme. |
| ISS-C3-02 one-active-party rule absent | Medium | **FIXED at 4 of 5 locations — survives at §7 (ISS-C4-01)** | New §2.3 subsection (636–641) reuses `onePartyRule` **byte-for-byte** vs `en.ts` 134–135. New §3.5 row (1202) reuses `alreadyMemberElsewhere` **byte-for-byte** vs `en.ts` 136–138. §0.2 (240) → *"one at a time (§2.3)"*; §3.4 (1182) → *"one active membership at a time"*. §2.3's *"tells you which party is blocking it"* verified against `PartyMembership.tsx` 91–95 (`nameOf(e.currentPartyId)`). **§7 line 1394 still reads *"any party, unconditionally"*.** |
| ISS-C3-03 Steps 4–5 present tense | Medium | **FIXED** | Step 4 (511–516) labels DES-007 as design and states the mechanism is unbuilt, with no challenge right asserted. Step 5 (527–532) records only the programme and states the backer count, the population figure and any source field are absent. Verified against `party-creation.js` 795–799 and 814–825, and a repo-wide search that returns **no** source field in `packages/sdk/src` or `packages/protocol/src`. |
| ISS-C3-04 "every action" scope | Low | **FIXED, and extended** | §2.12 item 1 (1045–1051), §3.6 *Public record* (1229) and §7 (1397–1399) all now name the two records that exist; *"every backing"* is gone. Change 19 applied the identical scoping to §3.1's Public-record row (1087). *(§3.4's left column retains the hedged "what the app shows you of what has happened so far" — scoped by its own lead clause; not raised.)* |
| ISS-C3-05 §2.7 dangling "below" | Low | **FIXED** | Line 893 now reads *"…a separate, smaller step than standing for a position, and it does not wait for Phase 3 — see 'Declaring yourself a Worker' in §2.4…"* — the direction word is gone and the target is named. §2.4's own instance (671–672) points forward to §2.7 correctly. |
| ISS-C3-06 stale Doc 05 pin | Low | **FIXED** (pin correct; changelog bullet stale — ISS-C4-04) | Pin line 12 = `Doc 05 v2.5.0, Approved`; `docs/05-product-backlog.md` header = `Version: 2.5.0`, `Status: Approved …`. All six other pins re-verified exactly. |
| ISS-C3-07 §3.5 / §3.3 unswept | Low | **FIXED for the two named messages; one sibling row missed (ISS-C4-02)** | §3.5 *"Activation is final"* (1205) and *"This device is not supported"* (1206) both marked *"no such message exists in this release"*; §3.3's device row (1174) qualified *"**Not built yet** — no device or browser check runs in this release"*; collision row (1204) is `collisionName` verbatim. Row 1 (1199) was not swept. |

**Score: 7 of 7 cycle-3 issues addressed; 6 fully closed, 1 (ISS-C3-02) closed at four of its five
locations.** Combined across four cycles: **38 of 41 findings closed**. No previously closed finding
regressed — I re-checked the FR-131 rewrite, §1.2, §2.4's two-axis treatment, §3.2 and the
non-violence clause, all of which the cycle-3 report ruled must not be reopened, and none was.

### 4b. Transcription-residue check (requested explicitly)

| Probe | Result |
|---|---|
| `FIND:` / `REPLACE WITH` / `INSERT AFTER` / `INSERT THIS` (case-insensitive) | **0 hits** |
| `## CH-` / `### Change` change headers | **0 hits** |
| `**Location:**`, `byte-exact`, "transcription spec" | **0 hits** |
| Stray 4-backtick fences | **0** — the file holds exactly two ``` fences (lines 3, 25), balanced, both the metadata block |
| Conflict markers (`<<<`, `>>>`, `=======`) | **0 hits** |
| Spec coverage | All 21 changes present in the body; Changes 18, 19, 20 and 21 diffed against the spec's `REPLACE WITH` text byte for byte — exact |

**No residue.** The PM's applier ran clean. ISS-C4-03 traces to spec Change 20's own wording — an
authoring slip faithfully transcribed, not an application error; ISS-C4-01 and ISS-C4-04 are gaps in
what the spec covered, not defects in how it was applied.

## 5. Routing instruction (to the owning role)

**FAIL → route to the `technical-writer` (Nadia Hassan), the owning role for Doc 14.** The rework
MUST produce a **new version** — **`2.2.1`** is the honest signal (zero Critical, zero High; one
Medium that is a single clause, four Lows that are one sentence each; no section is re-founded) —
with `Status: In Review`, after which this loop re-reviews as **cycle 5 of 5**.

> **Cycle-5 note, stated plainly and without pressure.** A FAIL at cycle 5 makes the verdict
> **ESCALATED** and sends the document to the human for a recorded decision. Nothing in this report
> asks for judgement or re-founding: every finding is a located sentence with the replacement text
> supplied, and every fact needed to write it is already verified in §4. This should be a short
> rework.

Suggested order of work, highest leverage first:

1. **ISS-C4-01 first — it is the only thing standing between this document and a PASS.** One clause
   in §7 line 1394. The qualifying language already exists in this document at §3.4 (*"one active
   membership at a time"*) and §0.2 (*"one at a time (§2.3)"*) — reuse one of them verbatim rather
   than composing a third phrasing. **Do not touch the rest of that sentence**; Change 18's record
   clause is correct and verified.
2. **ISS-C4-02** — one cell in §3.5 row 1, using the not-yet-built pattern the same table now uses
   four times.
3. **ISS-C4-03** — name the referent in §2.1 Step 2 and §3.5's collision gloss. Both `en.ts` strings
   and both field bindings are quoted in §4 above; no further code checking is needed.
4. **ISS-C4-04, ISS-C4-05** — one line each.

**Not to be changed — carried forward and re-verified this cycle:**

- **The entire FR-131 rewrite** (§0.1, §0.2, §2.3, §2.6, §3.5's counting-tier rows, §3.6, §4.3, §7).
  Swept again at v2.2.0: still clean.
- **The ISS-C2-01 public-record correction and its four scoped locations** (§2.12 item 1, §3.6, §7,
  §3.1). The scoping is now right in all four; the guarantee sentences must not be touched.
- **§2.4's two-axis treatment and the Worker-declaration subsection** — all four reused strings still
  byte-identical to `en.ts` 204–225.
- **§1.2**, **§3.2** (verified a fourth time, line by line), **§2.1 Steps 3, 4 and 5** (the
  design-vs-current split is now the best pattern in the document — apply it, do not dilute it), the
  **source-pin discipline** (all seven now exact), and the **four open items with named owners**.
- **The new §2.3 "One party at a time" subsection and the new §3.5 refusal row.** Both are shipped
  copy, byte-for-byte. ISS-C4-01 asks the writer to make §7 agree with them — never the reverse.

No finding in this report asks the writer to reopen any of the above.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 4 of 5, verdict **FAIL**, routed to the owning role. Cycle 5 is the
last cycle before mandatory human escalation.
