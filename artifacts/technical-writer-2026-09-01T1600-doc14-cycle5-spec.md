> **This file is a transcription spec, not the document itself.** `Edit` is disabled for this
> subagent and whole-file `Write` truncates large files, so I cannot touch `docs/14-user-guide.md`
> directly. Every change below is a byte-exact `FIND` (copied from the current
> `docs/14-user-guide.md`, v2.2.0, 1,455 lines) paired with the exact `REPLACE WITH` text, or an
> `INSERT AFTER` anchor with `INSERT THIS TEXT`. The project-manager (or whoever holds `Edit`/`Write`
> on `docs/`) applies these mechanically — every FIND string was checked for uniqueness in the file
> before being selected (confirmed by `Grep`, one hit each — see "Verification notes").
>
> **This file also serves as my session-memory note** (role: technical-writer, session:
> 2026-09-01T1600). See "Session memory" at the end for what was done, decisions made, open items,
> and IDs touched. Per the cycle-5 brief: **fix exactly the five things the cycle-4 report names.
> Nothing else.** This is cycle 5 of 5 — the last cycle before the loop caps and escalates to a
> human decision.

---

# Doc 14 User Guide — cycle-5 rework spec (v2.2.0 → v2.3.0)

**Source review:** `artifacts/reviews/14-user-guide-v2.2.0-business-cycle4.md` — cycle 4, **93%,
FAIL, 0 Critical / 0 High / 1 Medium / 4 Low.** This is cycle 5 of 5.

**Verification method.** Before writing any fix below, I re-read the cycle-4 report's §4 in full —
including its cited code evidence — and checked the current document text at each of the five named
locations. All five findings check out exactly as the report describes; none is disputed. Two of the
report's four Lows (ISS-C4-03) share one underlying wording defect at two locations (§2.1 Step 2 and
§3.5's collision row), so they are transcribed as two separate anchored changes below, both under the
ISS-C4-03 label. **Total: 6 content fixes + version bump + changelog entry = 8 anchored changes.**

---

## Change 1 — Header: version bump (v2.2.0 → v2.3.0)

**Location:** line 5. Per CLAUDE.md's review-and-rework loop, a FAIL carrying a Medium (or worse)
requires at least a minor bump — `2.2.1` is not sufficient, regardless of the source report's own
suggested patch-level number. (The prior cycle's routing section made the identical suggestion —
`2.2.1` — for the identical reason and it was corrected to a minor bump then, too; this is the same
correction applied a third time this loop.)

FIND:
````
Version:       2.2.0
````

REPLACE WITH:
````
Version:       2.3.0
````

---

## Change 2 — Insert the v2.3.0 changelog entry

**Location:** end of the "### Document history" section, immediately after the v2.2.0 entry's
closing paragraph and before the `---` separator (around line 191).

INSERT AFTER:
````
No claim the cycle-3 review found correct was reopened. Every fix above was checked against its
cited source — `apps/web/src/app/parties/page.tsx`, `apps/web/src/components/PartyMembership.tsx`,
`apps/web/src/i18n/en.ts`, `packages/sdk/src/party-creation.js`,
`packages/protocol/src/governance.js`, and `docs/08-traceability-matrix.md` §3.1 — before being
written, not merely copied from the review's suggested wording.
````

INSERT THIS TEXT:
````

**v2.3.0 (2026-09-01) — cycle-5 rework.** Routed back from
`artifacts/reviews/14-user-guide-v2.2.0-business-cycle4.md` (business review, cycle 4: **93%,
FAIL, 0 Critical / 0 High / 1 Medium / 4 Low**). That review confirmed all seven cycle-3 findings —
including ISS-C3-02, the one-active-party rule — were genuinely closed against the code at every
location the cycle-3 report named, and asked this rework to leave the FR-131 rewrite, §2.4's
two-axis treatment, §1.2, §3.2, §2.1 Steps 3–5 and the source-pin discipline untouched. Closed:

- **ISS-C4-01 (Medium):** §7's release summary — the one place in the document that still stated
  joining and leaving "any party, unconditionally," contradicting the one-active-party rule this
  version states correctly at §0.2, §2.3, §3.4 and §3.5 — qualified to reuse §3.4's own verified
  wording, "one active membership at a time." §7 now agrees with the other four locations; Change
  18's record clause, later in the same sentence, is untouched.
- **ISS-C4-02 (Low):** §3.5 row 1 ("You have already done this.") — the one message row the
  cycle-4 sweep missed — marked with the same not-yet-built pattern its siblings on the same table
  already carry: it ships together with backing and withdrawal (§2.2), which has no screen in this
  release.
- **ISS-C4-03 (Low):** the ambiguous "not which one" collision wording, at §2.1 Step 2 and at
  §3.5's collision row, both named explicitly — the app says whether it is the name or the emblem
  that collided, never which party or petition holds it.
- **ISS-C4-04 (Low):** the changelog's own ISS-C3-06 bullet, stale since Change 21 (v2.2.0)
  refreshed the pin it describes, brought into agreement with the header it sits next to: Doc 05
  v2.5.0, Approved.
- **ISS-C4-05 (Low):** §2.12 item 2 scoped to what a stranger can open today — party membership
  and official-strength numbers on a party's home screen (§3.1) — with petition figures noted as
  becoming publicly re-countable the same way once the petitions-browse screen ships (§2.2).

No claim the cycle-4 review found correct was reopened. Every fix above was checked against its
cited source — `packages/sdk/src/party-creation.js`, `apps/web/src/components/PartyMembership.tsx`
and `apps/web/src/i18n/en.ts` — before being written, not merely copied from the review's suggested
wording, and each reuses this document's own existing verified phrasing rather than composing new
prose.
````

---

## Change 3 — §7: qualify "any party, unconditionally" (ISS-C4-01, Medium)

**Location:** line 1394. Contradicted the one-active-party rule this version states correctly at
§0.2 (line 240), §2.3 (line 636–641), §3.4 (line 1182) and §3.5 (line 1202) — `PartyCreationService
.joinParty()` refuses a member holding an active membership elsewhere with `ALREADY_MEMBER_ELSEWHERE`
(`packages/sdk/src/party-creation.js` lines 833–843). Per the cycle-4 report's required fix: reuse
one of the document's own existing formulations verbatim rather than compose a third phrasing, and
do not touch the rest of the sentence — Change 18's record clause, immediately following, is
verified correct and stays as-is.

FIND:
````
New in this release: joining and leaving any party, unconditionally; drafting a party across the
````

REPLACE WITH:
````
New in this release: joining and leaving a party, one active membership at a time; drafting a party across the
````

---

## Change 4 — §3.5 row 1: mark the duplicate-action message not-yet-built (ISS-C4-02, Low)

**Location:** line 1199. No shipped string matches this row (`apps/web/src/i18n/en.ts` has no
"You have already done this" copy; a case-insensitive search for `already` returns only
`alreadyMemberElsewhere`, two collision strings and three unrelated debate lines), and the row
describes the duplicate-**backing** refusal — backing has no screen anywhere in 0.1.0, as this
document already states four times (§2.2, HT-002, §3.1 Petitions/Back-withdraw rows, §7). Its four
siblings in the same table already carry the not-yet-built pattern; this row did not. Fixed using
the simpler two-column pattern already used at this table's residency/voting rows (lines 1207–1209),
since the reason is a missing screen, not an untested device check.

FIND:
````
| "You have already done this." | One person, one action, for each petition. | Nothing. Your first action counted. |
````

REPLACE WITH:
````
| "You have already done this." | Ships together with backing and withdrawal (§2.2) — no such message exists in this release. | Not available yet — see §2.2. |
````

---

## Change 5 — §2.1 Step 2: name the collision referent (ISS-C4-03, Low, location 1 of 2)

**Location:** lines 477–479. The intended referent is the *holding party*, but the nearest
antecedent to "not which one" is the immediately preceding disjunction "a name or emblem" — on that
reading the sentence is wrong: `en.ts` ships two distinct strings, `collisionName` and
`collisionEmblem` (lines 362–363), and `petitions/new/page.tsx` (lines 77, 82) attaches them to
distinct fields (`NAME_COLLISION` → `field: 'name'`, `EMBLEM_COLLISION` → `field: 'emblem'`) — so
the app does say which of the two collided; it never says which party or petition holds it. Fix
text supplied verbatim by the cycle-4 report.

FIND:
````
- Pick a name and an emblem (text only, 1–8 characters, in this release). If another petition or
  party in that area already uses them, the app refuses — it tells you a name or emblem is already
  taken in your area, not which one.
````

REPLACE WITH:
````
- Pick a name and an emblem (text only, 1–8 characters, in this release). If another petition or
  party in that area already uses them, the app refuses — it tells you whether it is the name or
  the emblem that is taken, but never which party or petition holds it.
````

---

## Change 6 — §3.5 collision row: name the collision referent (ISS-C4-03, Low, location 2 of 2)

**Location:** line 1204. Same underlying ambiguity as Change 5, with an even closer plural
antecedent ("Names and emblems … which one is taken"). Scoped to this row's own "What it means"
phrasing rather than pasting Change 5's sentence verbatim, since this cell explains the shipped
message rather than narrating the flow.

FIND:
````
| "A party or petition with this name already exists in your area." | Names and emblems must be unique in an area — the message does not say which one is taken. | Choose another. |
````

REPLACE WITH:
````
| "A party or petition with this name already exists in your area." | Names and emblems must be unique in an area — the message says whether it is the name or the emblem that is taken, but never which party or petition holds it. | Choose another. |
````

---

## Change 7 — Changelog: refresh the stale ISS-C3-06 bullet (ISS-C4-04, Low)

**Location:** line 171 (inside the v2.2.0 changelog entry, "### Document history" section). Change
21 (v2.2.0) refreshed the header pin to Doc 05 v2.5.0, Approved, after this bullet was authored; the
bullet was never refreshed with it, so a reader auditing the changelog against the header finds them
disagreeing. The pin itself (line 12) is correct and untouched by this cycle. Fix text supplied
verbatim by the cycle-4 report.

FIND:
````
- **ISS-C3-06 (Low):** the Doc 05 source pin bumped to v2.4.0, In Review.
````

REPLACE WITH:
````
- **ISS-C3-06 (Low):** the Doc 05 source pin refreshed — to v2.5.0, Approved (Doc 05 advanced and its cycle-3 review passed between this rework's authoring and its transcription).
````

---

## Change 8 — §2.12 item 2: scope the public re-count claim (ISS-C4-05, Low)

**Location:** lines 1052–1054. Party status is genuinely public — `PartyMembership.tsx` renders
total membership and official strength as numbers on a party's home screen, reachable by anyone.
Petition figures are not: `PetitionProgress` mounts only inside `petitions/new/page.tsx` (line 124),
the draft-and-publish flow, and this document already states four times that no petitions-browse
screen exists in 0.1.0 (§2.2, §3.1 Petitions row, HT-002, §7). A stranger with no draft of their own
cannot see a petition's figures to "add them up again" today. Scoped to what is actually open now,
per the cycle-4 report's required fix, while preserving the sentence about the not-yet-built
checking tool, which is correct and not part of the finding.

FIND:
````
2. **Re-count what is public.** The figures behind petitions and party status are public, so a
   journalist, a researcher or a neighbour can add them up again and compare. A ready-made checking
   tool for non-experts is **not part of this release**; it is planned.
````

REPLACE WITH:
````
2. **Re-count what is public.** Total membership and official-strength numbers are shown on a
   party's home screen (§3.1), so a journalist, a researcher or a neighbour can add them up again
   and compare, today. Petition figures become publicly re-countable the same way once the
   petitions-browse screen ships (§2.2). A ready-made checking tool for non-experts is **not part
   of this release**; it is planned.
````

---

# Verification notes (spot checks performed; no disputes)

All five cycle-4 findings checked out against the code and the document exactly as the report
describes. Specifics:

- **ISS-C4-01.** Confirmed §0.2 (line 240) reads "join an open party — one at a time (§2.3),"; §2.3
  (lines 636–641) reads "You can belong to one party at a time…"; §3.4 (line 1182) reads "Join and
  leave a party freely — one active membership at a time (§2.3, §2.10)"; §3.5 (line 1202) carries
  the `alreadyMemberElsewhere` refusal row verbatim. §7 (line 1394), before this fix, was the one
  outlier. Reused §3.4's exact phrase, "one active membership at a time," per the report's explicit
  instruction to reuse existing formulations rather than compose new wording. Left the rest of the
  sentence — the Change 18 record clause about the append-only store — untouched, as instructed.
  Re-scanned §7 for any other unconditional-join restatement after the fix: none found.
- **ISS-C4-02.** Confirmed `en.ts` has no "You have already done this" string (case-insensitive
  search for `already` returns exactly `alreadyMemberElsewhere`, `collisionName`, `collisionEmblem`,
  and three unrelated debate-copy hits). Confirmed §3.5's four sibling rows (Activation is final,
  device-not-supported, residency, voting-eligibility) already carry a not-built or ships-with
  pattern; row 1 did not until this fix.
- **ISS-C4-03.** Confirmed `en.ts` lines 362–363: `collisionName` = "A party or petition with this
  name already exists in your area."; `collisionEmblem` = "A party or petition with this emblem
  already exists in your area." — two distinct strings. Confirmed `petitions/new/page.tsx` lines 77
  and 82 attach `NAME_COLLISION` to `field: 'name'` and `EMBLEM_COLLISION` to `field: 'emblem'`
  respectively — the app does distinguish which field collided; it never names the colliding party
  or petition. Applied the report's supplied sentence at §2.1 Step 2 verbatim, and the equivalent
  scoped wording at §3.5's collision-row cell (adapted to that cell's own "What it means" phrasing,
  not pasted as a duplicate sentence, since the row already opens with "Names and emblems must be
  unique in an area").
- **ISS-C4-04.** Confirmed the header pin (line 12) already reads "BKLG-TRUMOCRACY (Doc 05 v2.5.0,
  Approved)" and `docs/05-product-backlog.md`'s own header reads `Version: 2.5.0`, `Status: Approved
  — 05-product-backlog-v2.5.0-business-cycle3.md (PASS 96%, 0C/0H/0M/6L)` — the pin is correct and
  untouched. The changelog bullet (line 171) was the only stale copy; replaced with the report's
  supplied text verbatim.
- **ISS-C4-05.** Confirmed `PartyMembership.tsx` renders total membership and official-strength
  numbers on the party-home screen (§3.1's own "Party home" row, line 1079, already documents this
  screen and its name). Confirmed `PetitionProgress` is mounted only inside
  `apps/web/src/app/petitions/new/page.tsx` (the draft flow) and that no petitions-browse route
  exists — consistent with this document's own four prior statements to that effect (§2.2, §3.1
  Petitions row, HT-002, §7). Referenced the screen by this document's own vocabulary, "a party's
  home screen (§3.1)," rather than the report's descriptive phrase "parties directory," which does
  not appear anywhere else in this guide.

**No disputes.** All five findings, and the report's supplied replacement text where given, were
verified correct before being transcribed or adapted.

# Session memory

**Role:** technical-writer (Nadia Hassan). **Session:** 2026-09-01T1600. **Document:** Doc 14 User
Guide, v2.2.0 → v2.3.0 (spec only — I do not have `Edit`/`Write` on `docs/`).

**What I did:** Read `artifacts/reviews/14-user-guide-v2.2.0-business-cycle4.md` in full, then the
current `docs/14-user-guide.md` v2.2.0 at each of the five named locations (§7 line 1394; §3.5 row 1,
line 1199; §2.1 Step 2, lines 477–479, and §3.5's collision row, line 1204, both under ISS-C4-03;
the changelog's ISS-C3-06 bullet, line 171; §2.12 item 2, lines 1052–1054). Independently re-verified
all five findings against the cited code and document cross-references rather than trusting the
report's prose alone. **All five checked out exactly. No disputes.** Produced **8 anchored changes**:
version bump, one changelog insertion, and six content fixes (ISS-C4-01 is one fix; ISS-C4-03 is two,
one per location; ISS-C4-02, -04, -05 are one each).

**Decisions made:**
1. **ISS-C4-01 fix wording:** reused §3.4's exact phrase "one active membership at a time" rather
   than composing a third formulation or using §0.2's shorter "one at a time (§2.3)" — chosen
   because it reads more naturally inside §7's list-of-features sentence structure and needs no
   added cross-reference, since §7 is a summary section that does not otherwise carry inline `§`
   pointers for every clause.
2. **Version bump: minor, not patch.** Per CLAUDE.md's review-and-rework loop, a FAIL carrying a
   Medium requires at least a minor bump. The cycle-4 report's own routing section suggested
   "2.2.1" — the identical suggestion the cycle-3 report made, which the cycle-4 rework corrected to
   a minor bump (v2.1.0 → v2.2.0) for the same reason. Followed the rule, not the report's
   suggestion, a second time.
3. **ISS-C4-05 screen name:** used this document's own established term, "a party's home screen
   (§3.1)," rather than the review report's descriptive phrase "parties directory" (which names the
   underlying code path, `apps/web/src/app/parties/page.tsx`, not a term this guide uses anywhere).
   Keeps the fix internally consistent with §3.1's own "Party home" row rather than introducing a
   new, undefined term.
4. **ISS-C4-03's second location (§3.5 collision row):** adapted the report's supplied sentence to
   the row's own "What it means" cell phrasing (which already opens with "Names and emblems must be
   unique in an area") rather than pasting the §2.1 Step 2 sentence verbatim a second time, to avoid
   a jarring repeat of "the app refuses" inside a table cell that isn't narrating a flow step.
5. **ISS-C4-02 pattern choice:** used the simpler two-column not-available pattern already used at
   §3.5's residency/voting rows ("Ships together with X. | Not available yet — see §Y.") rather than
   the longer "Activation is final" pattern (which adds "You may still leave the party at any time"),
   since row 1's underlying gap is a missing backing screen, not an untested device or unbuilt
   identity check with a parallel action still available.
6. Did **not** touch anything outside the five named findings: the entire FR-131 rewrite, §2.4's
   two-axis treatment, §1.2, §3.2, §2.1 Steps 3–5, the source-pin discipline, the new §2.3 "One party
   at a time" subsection, the new §3.5 `alreadyMemberElsewhere` row, or any of the thirty-eight
   findings closed across cycles 1–4 — all explicitly marked "not to be changed" by the cycle-4
   report and re-confirmed present and correct before writing this spec.

**Open items (unchanged from v2.2.0, still owed to other roles, not touched by this rework):** Doc
09 staleness (owner: sre), OI-08 governance-constant figures (owner: architect), Arabic
native-speaker review (owner: this document's author, pre-launch), the inert `/verify` action
(owner: engineer, decision routed to project-manager), CLAUSE-TEXT-01 non-violence clause
ratification (owner: routed to project-manager), and the FR-064 normative-text divergence
(EXPLICIT-LEAVE vs auto-void; owner: product-owner reconciliation per Doc 06 §7).

**IDs touched:** ISS-C4-01 through ISS-C4-05, FR-064.

**Handoff:** this spec is ready for mechanical transcription into `docs/14-user-guide.md` (v2.2.0 →
v2.3.0, `Status: In Review`), **8 anchored changes** (1 version bump, 1 changelog insertion, 6
content fixes covering the five named cycle-4 findings). This is **cycle 5 of 5** — the review-and-
rework loop's cap. If this version still fails to reach ≥95% with zero Critical/High/Medium at
cycle 5, the verdict becomes **ESCALATED** and the project-manager must present the surviving
issues to the human for a recorded decision (approve-as-is / rework / reject) — the loop does not
run a cycle 6.
