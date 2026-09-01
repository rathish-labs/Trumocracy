> **This file is a transcription spec, not the document itself.** `Edit` is disabled for this
> subagent and whole-file `Write` truncates large files, so I cannot touch `docs/14-user-guide.md`
> directly. Every change below is a byte-exact `FIND` (copied from `docs/14-user-guide.md`) paired
> with the exact `REPLACE WITH` text, or an `INSERT AFTER` anchor with `INSERT THIS TEXT`. Changes
> 1–20 are byte-exact against v2.1.0 (1,385 lines, pre-transcription); Change 21 is byte-exact
> against the already-transcribed v2.2.0 header, since it targets state Changes 1–20 themselves
> produced. The project-manager (or whoever holds `Edit`/`Write` on `docs/`) applies these
> mechanically — every FIND string was checked for uniqueness in the file before being selected
> (confirmed by `Grep`, one hit each, shown in "Verification notes" below).
>
> **This file also serves as my session-memory note** (role: technical-writer, session:
> 2026-09-01T1400). See "Session memory" at the end for what was done, decisions made, open items,
> and IDs touched. Per the cycle-4 brief: **fix only what ISS-C3-01 through ISS-C3-07 name.** Two
> same-class adjacent issues noticed during verification were initially left unfixed and logged as
> out-of-scope; the project-manager then ruled (2026-09-01, this same session) that a same-class
> echo of a named finding falls within that finding's own sweep — not new prose that risks a new
> finding — and directed both be closed in this cycle. They are **Change 19** and **Change 20**
> below. A third, unrelated addendum — **Change 21** — closes a pin that went stale between this
> spec's authoring and its transcription, through no fault of the original fix. See "Verification
> notes" for the full disposition history of all three.

---

# Doc 14 User Guide — cycle-4 rework spec (v2.1.0 → v2.2.0)

**Source review:** `artifacts/reviews/14-user-guide-v2.1.0-business-cycle3.md` — cycle 3, **89%,
FAIL, 0 Critical / 0 High / 3 Medium / 4 Low.** This is cycle 4 of 5.

**Verification method.** Before writing any fix below, I re-derived every ISS-C3 finding against
its cited source, not against the review's prose: `apps/web/src/app/parties/page.tsx`,
`apps/web/src/components/PartyMembership.tsx` (lines 88–94 and 134–138 of `en.ts`'s `parties`
block — `onePartyRule`, `alreadyMemberElsewhere`), `packages/sdk/src/party-creation.js`
(`joinParty()` lines 858–886, `saveParty()`/`activateParty()` lines 341–346 and 776–830),
`packages/protocol/src/governance.js` (`petitionThreshold()` lines 220–232), `apps/web/src/i18n/en.ts`
(`collisionName` line 362, `collisionEmblem` line 363; searched for "Activation is final" and any
unsupported-device string — neither exists anywhere in `en.ts` or `apps/web/src`), and
`docs/08-traceability-matrix.md` (FR-009 line 916 `G-NOMECH — OPEN-12`, FR-018 line 919 `G-NOMECH`,
FR-064 lines 278/414/459). **Every finding checked out exactly as the review stated. No disputes.**
See "Verification notes" at the end.

---

## Change 1 — Header: version bump (v2.1.0 → v2.2.0)

**Location:** line 5.

FIND:
````
Version:       2.1.0
````

REPLACE WITH:
````
Version:       2.2.0
````

---

## Change 2 — Header: Doc 05 source pin bump (ISS-C3-06, Low)

**Location:** line 12. `docs/05-product-backlog.md` is at v2.4.0, `Status: In Review`, dated
2026-08-31 — one minor version ahead of the stale pin.

FIND:
````
BKLG-TRUMOCRACY (Doc 05 v2.3.0, In Review) ·
````

REPLACE WITH:
````
BKLG-TRUMOCRACY (Doc 05 v2.4.0, In Review) ·
````

---

## Change 3 — Insert the v2.2.0 changelog entry

**Location:** end of the "### Document history" section, immediately after the v2.1.0 entry's
closing paragraph and before the `---` separator (around line 134).

INSERT AFTER:
````
No claim the cycle-2 review found correct was reopened. Every fix above was checked against its
cited source — `apps/web/src/i18n/en.ts`, `packages/sdk/src/proposals.js`,
`apps/web/src/components/EightPillarForm.tsx`, `PetitionProgress.tsx`, `PartyMembership.tsx`,
`packages/protocol/src/constants.js`, `packages/sdk/src/party-creation.js`, and the 2026-08-30
approver ruling on proposing/authoring — before being written, not merely copied from the review's
suggested wording.
````

INSERT THIS TEXT:
````

**v2.2.0 (2026-09-01) — cycle-4 rework.** Routed back from
`artifacts/reviews/14-user-guide-v2.1.0-business-cycle3.md` (business review, cycle 3: **89%,
FAIL, 0 Critical / 0 High / 3 Medium / 4 Low**). That review confirmed all ten cycle-2 findings —
the Critical, both Highs, all three Mediums and all four Lows — were genuinely closed against the
code, not the changelog, and asked this rework to leave the FR-131 rewrite, §2.4's two-axis
treatment, §1.2, §3.2 and the source-pin discipline (bar the one stale pin) untouched. Closed:

- **ISS-C3-01 (Medium):** §1.4 Step 1's "read one's programme" claim removed. `parties/page.tsx`
  renders exactly one component, `<PartyMembership>`, with a `PartySummary` carrying only
  `{ partyId, name, emblem }` — no screen anywhere in 0.1.0 reads a party's programme, exactly as
  §3.1's own Party-home row already stated ("Not shown: the party's programme"). Step 1 now reads
  "Open **Parties** and choose one."
- **ISS-C3-02 (Medium):** the FR-064 one-active-party rule — built, enforced by
  `PartyCreationService.joinParty()`, approver-ruled 2026-08-29 (EXPLICIT-LEAVE form) — added
  where joining is described. A new §2.3 subsection, "One party at a time", reuses the shipped
  `onePartyRule` copy verbatim from `apps/web/src/i18n/en.ts`; a new §3.5 row reuses the shipped
  `alreadyMemberElsewhere` refusal copy verbatim; §0.2's "join any open party" and §3.4's "Join and
  leave any party, freely" are both qualified to one active membership at a time.
- **ISS-C3-03 (Medium):** §2.1 Steps 4–5 split into design versus current behaviour, mirroring the
  pattern already used at Step 3. Step 4 states the DES-007 design (≥5-source median, 7-day
  challenge window) as design intent and states plainly that none of it is built: FR-009 and
  FR-018 are both `☐ G-NOMECH` in the RTM, and `petitionThreshold()` takes two bare integers off
  the draft with no oracle, no median and no dispute mechanism. Step 5 now states only what
  `activateParty()`/`saveParty()` actually persist (the programme, name, emblem, area) and says
  plainly that the backer count, the population figure and its source are not part of that record
  in this release.
- **ISS-C3-04 (Low):** the "every action" / "every backing" public-record scope claims in §2.12
  item 1, the §3.6 glossary entry and §7 narrowed to the two records that exist — the per-proposal
  deliberation trail and a member's own membership history — and "every backing" dropped while
  backing has no screen. The same overstatement recurring at §3.1's Public-record row (line 1018,
  "Every action taken so far, inside the app") is a milder echo the cycle-3 review did not cite by
  line number; it is scoped identically here (Change 19), self-identified as within ISS-C3-04's own
  sweep on the project-manager's 2026-09-01 ruling.
- **ISS-C3-05 (Low):** §2.7's dangling "standing for a position below" cross-reference fixed — the
  relocation that moved the Worker-declaration paragraph to §2.4 in cycle 3 left the direction word
  pointing the wrong way.
- **ISS-C3-06 (Low):** the Doc 05 source pin bumped to v2.4.0, In Review. (This pin was refreshed
  once more, to v2.5.0 Approved, at **Change 21** — Doc 05 advanced between this rework's authoring
  and its transcription, and the header now cites the version current at transcription time.)
- **ISS-C3-07 (Low):** §3.5 and §3.3 swept against `en.ts`. The collision-name row is now the
  shipped `collisionName` string verbatim, which does not name the colliding party; "Activation is
  final" and the unsupported-device message — neither of which exists anywhere in `en.ts` — are
  both marked not-yet-built, and §3.3's device bullet is qualified the same way. The identical claim
  at §2.1 Step 2 ("tells you which one has it", line 420) is the same defect one level up in the
  same section; it is aligned to the shipped `collisionName`/`collisionEmblem` copy the same way
  here (Change 20), self-identified as within ISS-C3-07's own sweep on the same 2026-09-01 ruling.

Two same-class extensions beyond the seven named ISS-C3 findings — Change 19 (§3.1's public-record
echo) and Change 20 (§2.1 Step 2's collision claim) — were added on project-manager ruling after
the initial spec draft: both are defects this rework's own verification pass had already identified
and logged, of the identical class and identical end-state as a finding already in scope, so fixing
them now closes known defects rather than deferring them into a review cycle that has already twice
demonstrated it sweeps adjacent territory. A third addendum, Change 21, closes a Doc 05 source-pin
drift that opened between this spec's authoring and its transcription — not a defect in the fix
itself, but the same staleness class ISS-C3-06 named, now checkable again at review time.

No claim the cycle-3 review found correct was reopened. Every fix above was checked against its
cited source — `apps/web/src/app/parties/page.tsx`, `apps/web/src/components/PartyMembership.tsx`,
`apps/web/src/i18n/en.ts`, `packages/sdk/src/party-creation.js`,
`packages/protocol/src/governance.js`, and `docs/08-traceability-matrix.md` §3.1 — before being
written, not merely copied from the review's suggested wording.
````

---

## Change 4 — §0.2: qualify "join any open party" (ISS-C3-02)

**Location:** line 182.

FIND:
````
- join any open party,
````

REPLACE WITH:
````
- join an open party — one at a time (§2.3),
````

---

## Change 5 — §1.4 Step 1: drop the unbuilt "read one's programme" clause (ISS-C3-01)

**Location:** line 329.

FIND:
````
1. Open **Parties** and read one's programme.
````

REPLACE WITH:
````
1. Open **Parties** and choose one.
````

---

## Change 6 — §2.1 Step 4: population-provenance chain, design vs current (ISS-C3-03)

**Location:** lines 452–456.

FIND:
````
- The population figure comes from **at least five independent published sources**, and the app uses
  the middle value, so one wrong or manipulated source cannot move it. That figure has a **7-day
  window** during which anyone can challenge it before it is used. In this release, this
  population data is a curated demo set for the pilot region, not yet the production registry
  (Doc 06 §7).
````

REPLACE WITH:
````
- **The design (DES-007) calls for the population figure to come from at least five independent
  published sources**, using the **middle value** so one wrong or manipulated source cannot move
  it, with a **7-day window** during which anyone could challenge it before it is used. **None of
  that mechanism is built in this release.** The figure used today is a fixed value from a curated
  demo set for the pilot region, entered directly on the draft — there is no multi-source oracle,
  no median calculation, and nothing yet to challenge (Doc 06 §7).
````

---

## Change 7 — §2.1 Step 5: what is actually recorded at opening (ISS-C3-03)

**Location:** lines 467–470.

FIND:
````
- The moment it opens, the app permanently records, inside its own append-only store: the programme
  as written, the number of backers, the population figure used, and where that figure came from.
  This record is not yet published outside Trumocracy, and nobody outside Trumocracy can yet check
  it independently — see §2.12 for what that means today.
````

REPLACE WITH:
````
- The moment it opens, the app permanently records, inside its own append-only store, the programme
  as written — name, emblem, area and the eight chapters. **The backer count and the population
  figure used are not part of that permanent record in this release, and there is no source field
  anywhere in the code**; the recorded, challengeable-sources guarantee described in Step 4 arrives
  with the population oracle. This record is not yet published outside Trumocracy, and nobody
  outside Trumocracy can yet check it independently — see §2.12 for what that means today.
````

---

## Change 8 — §2.3: add "One party at a time" (ISS-C3-02)

**Location:** end of §2.3, lines 571–572, immediately before the `### 2.4` header.

INSERT AFTER:
````
**One thing that will depend on time, once voting exists:** how long you have been a **counting**
member decides which kinds of decision you may vote on — not how much your vote weighs. See §2.4.
````

INSERT THIS TEXT:
````

#### One party at a time

You can belong to one party at a time. Leaving one and joining another is always your choice. To
join a different party, leave the one you are in first — leaving is instant and needs nobody's
permission (§2.10). If you try to join while you are still an active member elsewhere, the app
tells you which party is blocking it and what to do next (§3.5).
````

---

## Change 9 — §2.7 closing paragraph: fix the dangling "below" (ISS-C3-05, Low)

**Location:** line 824.

FIND:
````
**Declaring yourself a Worker** is a separate, smaller step than standing for a position below, and
it does not wait for Phase 3 — see "Declaring yourself a Worker" in §2.4 for exactly what it does
and the two things you confirm before you do it.
````

REPLACE WITH:
````
**Declaring yourself a Worker** is a separate, smaller step than standing for a position, and it
does not wait for Phase 3 — see "Declaring yourself a Worker" in §2.4 for exactly what it does and
the two things you confirm before you do it.
````

---

## Change 10 — §2.12 item 1: scope the record claim (ISS-C3-04, Low)

**Location:** lines 976–982.

FIND:
````
1. **Read what the app shows you.** Every action taken so far — every backing, every join, every
   proposal, every piece of discussion — is kept in an **append-only record inside Trumocracy's own
   store**: entries are ordered, there is no delete path, and every read returns a copy, so nothing
   you are shown can be quietly rewritten behind your back. **This record is not yet published, and
   nobody outside Trumocracy can yet check it without trusting us to report it honestly** — that
   independent, publish-and-verify guarantee arrives with a later audit-anchoring release. Today,
   the app itself is the only place to read it.
````

REPLACE WITH:
````
1. **Read what the app shows you.** What is kept today are two append-only records inside
   Trumocracy's own store: the deliberation trail for each proposal, and your own record of joining
   and leaving a party. Entries are ordered, there is no delete path, and every read returns a copy,
   so nothing you are shown can be quietly rewritten behind your back. **Neither record is yet
   published, and nobody outside Trumocracy can yet check either one without trusting us to report
   it honestly** — that independent, publish-and-verify guarantee arrives with a later
   audit-anchoring release. Today, the app itself is the only place to read them.
````

---

## Change 11 — §3.3 last row: device message, design intent not built (ISS-C3-07, Low)

**Location:** line 1105.

FIND:
````
| Older or unsupported devices | You get a clear message telling you what will work, never a broken screen |
````

REPLACE WITH:
````
| Older or unsupported devices | Design intent: a clear message telling you what will work, never a broken screen. **Not built yet** — no device or browser check runs in this release. |
````

---

## Change 12 — §3.4: qualify "Join and leave any party, freely" (ISS-C3-02)

**Location:** line 1113.

FIND:
````
| Join and leave any party, freely (§2.3, §2.10) | Back a petition, or withdraw your support — no backing screen exists yet (§2.2) |
````

REPLACE WITH:
````
| Join and leave a party freely — one active membership at a time (§2.3, §2.10) | Back a petition, or withdraw your support — no backing screen exists yet (§2.2) |
````

---

## Change 13 — §3.5: add the `ALREADY_MEMBER_ELSEWHERE` row (ISS-C3-02)

**Location:** between lines 1132 and 1133.

FIND:
````
| "Your request was not counted. Nothing else has changed." | Follows the message above. | Nothing further needed right now. |
| "Chapter too short: <chapters named>." | One or more of the eight chapters is missing or below the standard. | Add more to the named chapters, then publish. |
````

REPLACE WITH:
````
| "Your request was not counted. Nothing else has changed." | Follows the message above. | Nothing further needed right now. |
| "You are already a member of <party>. You can belong to one party at a time. Leave <party> first, then join this one." | You tried to join a second party while still active in another. | Leave the named party first (§2.10), then join this one. |
| "Chapter too short: <chapters named>." | One or more of the eight chapters is missing or below the standard. | Add more to the named chapters, then publish. |
````

---

## Change 14 — §3.5: align the collision-name row to shipped copy (ISS-C3-07, Low)

**Location:** line 1134.

FIND:
````
| "That name is already used by <party>." | Names and emblems must be unique in an area. | Choose another. |
````

REPLACE WITH:
````
| "A party or petition with this name already exists in your area." | Names and emblems must be unique in an area — the message does not say which one is taken. | Choose another. |
````

---

## Change 15 — §3.5: mark "Activation is final" not-yet-built (ISS-C3-07, Low)

**Location:** line 1135.

FIND:
````
| "Activation is final." | The party has opened, so support cannot be withdrawn. | You may leave the party at any time instead. |
````

REPLACE WITH:
````
| "Activation is final." | Ships together with backing and withdrawal (§2.2) — no such message exists in this release. | Not available yet — see §2.2. You may still leave the party at any time (§2.10). |
````

---

## Change 16 — §3.5: mark the unsupported-device message not-yet-built (ISS-C3-07, Low)

**Location:** line 1136.

FIND:
````
| "This device is not supported." | Your phone or browser is below the minimum. | See §3.3. |
````

REPLACE WITH:
````
| "This device is not supported." | Design intent for a below-minimum device (§3.3) — no such message exists in this release. | Not built yet — an unsupported device is not yet detected. |
````

---

## Change 17 — §3.6 Glossary: scope the "Public record" entry (ISS-C3-04, Low)

**Location:** line 1159.

FIND:
````
| **Public record** | The permanent, append-only list of every action taken on the platform, kept inside Trumocracy's own store — ordered, with no delete path. **It is not yet published, and it is not yet independently checkable without trusting us**; that arrives with a later audit-anchoring release. It is not free of personal information either: our own records can link an account to the party it joined — see §2.3 and §2.6. |
````

REPLACE WITH:
````
| **Public record** | The deliberation trail for each proposal, and your own record of joining and leaving a party — both append-only inside Trumocracy's own store, ordered, with no delete path. **Neither is yet published, and neither is yet independently checkable without trusting us**; that arrives with a later audit-anchoring release. Neither is free of personal information either: our own records can link an account to the party it joined — see §2.3 and §2.6. |
````

---

## Change 18 — §7: scope "everything that has happened so far" (ISS-C3-04, Low)

**Location:** lines 1327–1329.

FIND:
````
an honest open-tier vs counting-tier disclosure the moment it matters; an append-only record, inside
Trumocracy's own store, of everything that has happened so far; and everything free, with nothing
to buy.
````

REPLACE WITH:
````
an honest open-tier vs counting-tier disclosure the moment it matters; an append-only record, inside
Trumocracy's own store, of the deliberation trail for each proposal and your own record of joining
and leaving a party; and everything free, with nothing to buy.
````

---

## Change 19 — §3.1: scope the Public-record row echo (self-identified extension of ISS-C3-04)

**Location:** line 1018. Added on project-manager ruling (2026-09-01): a same-class echo of a
named finding falls within that finding's own sweep. This is the identical scoping applied at
Change 10 (§2.12) and Change 17 (§3.6), extended to the one remaining location carrying the same
unscoped "every action" claim.

FIND:
````
| Public record | Every action taken so far, inside the app | Yes, to read within the app — **not yet published outside Trumocracy, and not yet independently checkable** (see §2.12). A log of content hidden for legal reasons is **not yet built** |
````

REPLACE WITH:
````
| Public record | The deliberation trail for each proposal, and your own record of joining and leaving a party | Yes, to read within the app — **not yet published outside Trumocracy, and not yet independently checkable** (see §2.12). A log of content hidden for legal reasons is **not yet built** |
````

---

## Change 20 — §2.1 Step 2: align the collision claim with the shipped string (self-identified extension of ISS-C3-07)

**Location:** lines 419–420. Added on project-manager ruling (2026-09-01): a same-class echo of a
named finding falls within that finding's own sweep. `en.ts`'s `collisionName` ("A party or
petition with this name already exists in your area.") and `collisionEmblem` ("A party or petition
with this emblem already exists in your area.") — both confirmed at Change 14 — name neither the
party nor the petition holding the name or emblem. This line makes the same overclaim Change 14
fixed at §3.5, one level up in §2.1.

FIND:
````
- Pick a name and an emblem (text only, 1–8 characters, in this release). If another petition or
  party in that area already uses them, the app refuses and tells you which one has it.
````

REPLACE WITH:
````
- Pick a name and an emblem (text only, 1–8 characters, in this release). If another petition or
  party in that area already uses them, the app refuses — it tells you a name or emblem is already
  taken in your area, not which one.
````

---

## Change 21 — Header: Doc 05 source-pin refresh (post-authoring drift, addendum)

**Location:** line 12 of the **already-transcribed** `docs/14-user-guide.md` v2.2.0 — i.e. this
FIND targets the state Change 2 produced, not the original v2.1.0 line. Added on project-manager
instruction (2026-09-01, after transcription): between this spec's authoring (when Change 2
correctly pinned Doc 05 at v2.4.0, In Review) and its transcription, Doc 05 advanced to v2.5.0 and
its cycle-3 review passed. This is the identical staleness class ISS-C3-06 named — the pin was
accurate when written and went stale before review, which is exactly what a reviewer checking pins
at review time will now find if left uncorrected.

**Facts confirmed before writing this fix:** `docs/05-product-backlog.md`'s header reads
`Version: 2.5.0`, `Status: Approved — 05-product-backlog-v2.5.0-business-cycle3.md (PASS 96%,
0C/0H/0M/6L; reviewer: architect, neutral, PM-assigned)`. The review report
`artifacts/reviews/05-product-backlog-v2.5.0-business-cycle3.md` exists on disk.

**No review-report citation added.** None of the other pins on this line cite a review-report
filename — Doc 02/03/06 carry `§`-section citations, Doc 08 carries section-plus-statistics, and
Doc 01/09 (like this pin, both before and after this fix) carry no citation at all. Matching this
pin's own existing style (unqualified `(Doc N vX.Y.Z, Status)`) rather than the block's most
elaborate style is the same choice already made at Change 2.

FIND:
````
BKLG-TRUMOCRACY (Doc 05 v2.4.0, In Review) ·
````

REPLACE WITH:
````
BKLG-TRUMOCRACY (Doc 05 v2.5.0, Approved) ·
````

---

# Verification notes (spot checks performed; no disputes)

Every ISS-C3 finding in the cycle-3 report checked out against the code exactly as described.
Specifics:

- **ISS-C3-01.** Confirmed `apps/web/src/app/parties/page.tsx` renders exactly one component,
  `<PartyMembership service verifier memberPseudonym parties={_demoParties} />`, and `_demoParties`
  is typed `PartySummary[]` — `PartyMembership.tsx` defines `PartySummary` as
  `{ partyId, name, emblem }`. No `PILLARS`/charter text is passed to or rendered by that page; the
  only place `PILLARS` appears is `seedPillars()`, a demo-seeding helper, not a rendered view. §3.1's
  Party-home row ("Not shown: the party's programme") is correct and untouched by this cycle.
- **ISS-C3-02.** Confirmed `onePartyRule` (line 134–135) and `alreadyMemberElsewhere` (line 136–138)
  verbatim in `apps/web/src/i18n/en.ts`. Confirmed `PartyCreationService.joinParty()`
  (`packages/sdk/src/party-creation.js` lines 858–886) throws `ALREADY_MEMBER_ELSEWHERE` with
  `err.currentPartyId` set when the caller holds an active membership elsewhere, and that
  `PartyMembership.tsx` (lines 90–94) catches that exact code and renders
  `t.parties.alreadyMemberElsewhere(nameOf(e.currentPartyId))`. Confirmed Doc 08 §3.1 records FR-064
  as implemented in the EXPLICIT-LEAVE form (lines 278, 414, 459) with the divergence from the
  normative auto-void text flagged for product-owner reconciliation, not for the app-side behaviour
  this guide describes — I did not add an RTM/DES-065 aside, since the cycle-4 brief's required fix
  for this issue is the paragraph, the row and the two qualifications only, and the brief's rule is
  to fix exactly what is named.
- **ISS-C3-03.** Confirmed `docs/08-traceability-matrix.md` line 916: FR-009 `☐ G-NOMECH —
  OPEN-12`, *"`submitPopulation` is `onlyTimelock`; source independence is not enforceable
  on-chain"*; line 919: FR-018 `☐ G-NOMECH`. Confirmed `petitionThreshold()`
  (`packages/protocol/src/governance.js` lines 220–232) takes `{ eligiblePopulation,
  verifiedResidents, thresholdBps, absoluteFloor }` — two bare integers off the draft, no oracle, no
  median, no dispute window anywhere in the function. Confirmed `activateParty()`
  (`packages/sdk/src/party-creation.js` lines 776–830) calls `saveParty()` with exactly
  `{ petitionId, name, emblem, jurisdiction, pillars, charter, drafterPseudonym, state,
  legalRegistrationVerified, activatedAt }` — no endorsement count, no population figure, no source
  field. The Step 5 rewrite lists only what this object actually contains.
- **ISS-C3-04.** Confirmed the three cited locations (§2.12 item 1, the §3.6 glossary row, §7) each
  used "every action" / "everything that has happened so far" language with no scoping, and that
  `decisionTrail(windowId)` (the deliberation trail) and `PartyMembership.tsx`'s own membership
  history are the only two records that exist. **§3.1's "Public record" row (line 1018) carries the
  same overstatement in a milder form** — *"Every action taken so far, inside the app,"* already
  partly softened by *"Yes, to read within the app"* but still claiming one unscoped record rather
  than the two that exist. Initially logged as out-of-scope because it is not a cited ISS-C3-04
  location; on the project-manager's 2026-09-01 ruling that a same-class echo of a named finding
  falls within that finding's own sweep, it is now closed at **Change 19**, scoped identically to
  the three named locations.
- **ISS-C3-05.** Confirmed the paragraph sits at the physical end of §2.7 (after the cycle-2
  relocation of the Worker-declaration text into §2.4), so "standing for a position below" pointed
  the wrong direction. Fixed by dropping the direction word, as the review's second suggested option
  offered.
- **ISS-C3-06.** Confirmed at authoring time `docs/05-product-backlog.md`'s header: `Version:
  2.4.0`, `Status: In Review`, `Last updated: 2026-08-31` — Change 2 pinned it correctly. Doc 05
  then advanced past that pin between this spec's authoring and its transcription: re-confirmed
  `Version: 2.5.0`, `Status: Approved — 05-product-backlog-v2.5.0-business-cycle3.md (PASS 96%,
  0C/0H/0M/6L)`, with the cited review report present on disk. **Change 21** re-pins to the
  version current at transcription time.
- **ISS-C3-07.** Searched `apps/web/src` (not only `en.ts`) case-insensitively for "not supported",
  "unsupported" and "Activation is final" — **zero hits** anywhere in the codebase for either
  message. Confirmed `collisionName` (`en.ts` line 362): *"A party or petition with this name
  already exists in your area."* — no interpolated party name. **§2.1 Step 2 (line 420) carries the
  identical overclaim one level up in the same section** — *"the app refuses and tells you which one
  has it"* — against the same `collisionName`/`collisionEmblem` strings Change 14 fixes at §3.5.
  Initially logged as out-of-scope because it is not a cited ISS-C3-07 location; on the same
  2026-09-01 project-manager ruling, it is now closed at **Change 20**, aligned to the shipped copy
  the same way as Change 14.

**Disposition history on Changes 19–21 (for the record).** Changes 19 and 20 were identified during
initial verification and deliberately left unfixed in the spec's first draft, consistent with the
cycle-4 brief's instruction to "fix ONLY what is named — new prose beyond the fixes risks new
findings at cycle 5." The project-manager reviewed that reasoning and ruled it did not apply to
these two items: the brief's purpose was to prevent *new* prose from creating *new* risk, not to
leave *known, already-logged* defects in a version submitted for review, and a same-class echo of a
named finding (same claim, same code evidence, same fix shape) is inside that finding's own sweep —
the reading the Doc 05 owning role and its reviewer both applied when extending sweeps beyond the
line numbers a review cited by name (see
`artifacts/product-owner-2026-09-01T1150-doc05-cycle3-spec.md`'s NEW-03 sweep, and
`artifacts/architect-2026-09-01T1430-doc05-cycle2.md`'s seventeen-field spot-check). Change 21 is a
different class entirely — not a finding of any kind, self-identified or reviewed, but a target
that moved: Doc 05 passed its own cycle-3 review and its owner flipped Status: Approved in the
interval between this spec being authored and transcribed, so the pin Change 2 wrote correctly is
now the same one-version-stale defect ISS-C3-06 closed, recurring by the calendar rather than by
any error in this rework. All three are closed as of this version of the spec.

# Session memory

**Role:** technical-writer (Nadia Hassan). **Session:** 2026-09-01T1400. **Document:** Doc 14 User
Guide, v2.1.0 → v2.2.0 (spec only — I do not have `Edit`/`Write` on `docs/`).

**What I did:** Read the cycle-3 review report (`artifacts/reviews/14-user-guide-v2.1.0-business-
cycle3.md`) in full, then the current `docs/14-user-guide.md` v2.1.0 at every location the report
and the cycle-4 brief named. Independently re-verified all three Mediums (ISS-C3-01/02/03) and all
four Lows (ISS-C3-04/05/06/07) against the cited code — `apps/web/src/app/parties/page.tsx`,
`apps/web/src/components/PartyMembership.tsx`, `apps/web/src/i18n/en.ts`,
`packages/sdk/src/party-creation.js`, `packages/protocol/src/governance.js`, and
`docs/08-traceability-matrix.md` — rather than trusting the review's prose. **All seven findings
checked out exactly. No disputes.** Initially produced 18 anchored changes covering only the named
findings; on project-manager ruling (2026-09-01, mid-session) that two same-class adjacent issues I
had identified and logged as out-of-scope should instead be closed now, added **Change 19** (§3.1
public-record echo) and **Change 20** (§2.1 Step 2 collision claim). After transcription, the
project-manager reported Doc 05 had advanced from v2.4.0 (In Review) to v2.5.0 (Approved, cycle-3
PASS 96%) in the interval between authoring and transcription, staling the Change 2 pin; added
**Change 21** to re-pin against the transcribed v2.2.0 header, confirmed against Doc 05's current
header and the cited review report before writing it. Final spec: **21 anchored FIND/REPLACE (and
two INSERT AFTER) changes** targeting v2.2.0.

**Decisions made:**
1. Initially left two adjacent, same-shape issues unfixed per the brief's "fix only what is named"
   instruction — §3.1's line-1018 public-record echo of ISS-C3-04, and §2.1 Step 2's collision claim,
   the identical defect ISS-C3-07 fixes one level up — and logged both in "Verification notes"
   rather than fixing them. On project-manager ruling (2026-09-01, this same session) that a
   same-class echo of a named finding falls within that finding's own sweep, both were added as
   Change 19 and Change 20, closing them in this cycle instead of carrying them to cycle 5.
2. ISS-C3-02's new §2.3 subsection reuses `onePartyRule` verbatim as its opening two sentences, then
   adds the "leave first, §2.10, no permission needed" guidance and a §3.5 cross-reference the
   required-fix text asked for — no DES-065/RTM aside, since that was the review's own suggested
   elaboration in its routing section, not a required fix.
3. §2.1 Steps 4–5 follow the same design-vs-current sentence shape already used (and praised by the
   reviewer) at Step 3 — bold "the design calls for X" / "none of that is built" pairing — rather
   than inventing a new pattern. Change 19's §3.1 fix and Change 20's §2.1 Step 2 fix reuse the exact
   scoping language already established at Changes 10/17 and Change 14 respectively, for the same
   reason: no new pattern, no new risk surface.
4. The §3.5 row edits (ISS-C3-02's new row, ISS-C3-07's collision/activation/device rows) are four
   independent small edits rather than one full-table replace, since each targets a single row and a
   full-table replace would risk transcribing the untouched rows incorrectly.
5. Did **not** touch: the FR-131 rewrite, §2.4's two-axis treatment, §1.2, §3.2, the
   Worker-declaration subsection, or any of the ten cycle-2 fixes — all explicitly confirmed correct
   by cycle 3 and marked "not to be changed." Changes 19/20/21 do not touch any of this content
   either.
6. Change 21 carries no review-report citation, matching this pin's own pre-existing style (unlike
   Doc 02/03/06/08, which carry `§`-section or statistics citations on the same Source block) —
   verified by re-reading all eight pins on the block before choosing the shorter form, rather than
   defaulting to the more elaborate citation style used elsewhere on the same line.

**Open items (unchanged from v2.1.0, still owed to other roles, not touched by this rework):** Doc
09 staleness (owner: sre), OI-08 governance-constant figures (owner: architect), Arabic
native-speaker review (owner: this document's author, pre-launch), the inert `/verify` action
(owner: engineer, decision routed to project-manager), CLAUSE-TEXT-01 non-violence clause
ratification (owner: routed to project-manager), and the FR-064 normative-text divergence
(EXPLICIT-LEAVE vs auto-void; owner: product-owner reconciliation per Doc 06 §7).

**IDs touched:** FR-064, FR-009, FR-018, DES-007, ISS-C3-01 through ISS-C3-07, Doc05-v2.4.0,
Doc05-v2.5.0.

**Handoff:** this spec is ready for mechanical transcription into `docs/14-user-guide.md` (v2.1.0 →
v2.2.0, `Status: In Review`), now **21 anchored changes** (18 covering the seven named ISS-C3
findings plus the version/changelog bump, 2 — Change 19, Change 20 — self-identified same-class
extensions, and 1 — Change 21 — a post-transcription pin refresh). Changes 1–20 target v2.1.0;
**Change 21 targets the already-transcribed v2.2.0 header** and must be applied after Changes 1–20,
not concurrently with them. This is **cycle 4 of 5** — if this version still fails to reach ≥95%
with zero Critical/High/Medium, cycle 5 is the last rework cycle before the loop caps and escalates
to human decision.
