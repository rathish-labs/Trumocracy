# Trumocracy — User Guide

```
Document ID:   UG-TRUMOCRACY
Version:       2.3.0
Status:        Approved — 14-user-guide-v2.3.0-business-cycle5.md (PASS 96%, 0C/0H/0M/1L;
               reviewer: tester, neutral, PM-assigned). Loop closed INSIDE the 5-cycle cap:
               54% → 78% → 89% → 93% → 96%. The surviving Low (ISS-C5-01: two unwrapped
               lines, cosmetic) is accepted on this version and folds into the next content
               edit. This PASS closes the review loop only — it is NOT a Gate-2 sign-off.
Owner / Author: Nadia Hassan — Technical Writer (Docs, Accessibility & Localisation)  (Responsible)
Accountable:    Priya Raghunathan — Product Owner  (signs off at Gate 2)
Source:         PR-TRUMOCRACY (Doc 01 v2.0.0, Approved) ·
                SRS-TRUMOCRACY (Doc 02 v2.16.3, Approved — §4.40–§4.47, §13) ·
                SDD-TRUMOCRACY (Doc 03 v2.11.2, Approved — §5.6, §10.13, §16) ·
                BKLG-TRUMOCRACY (Doc 05 v2.5.0, Approved) ·
                CODE-TRUMOCRACY (Doc 06 v2.4.3, Approved — §7 "Known limitations of this drop") ·
                RTM-TRUMOCRACY (Doc 08 v2.7.0, Approved — §3.1 and the gap log; 138 Must rows,
                16 COMPLETE, 122 OPEN) ·
                REL-trumocracy-0.1.0 (Doc 09 v1.0.1, In Review — NOT approved for production;
                pre-dates the 2026-08-23 v1/v2 split and is stale on voting-privacy wording —
                see the open item at the end of this document) ·
                packages/protocol/src/constants.js · packages/protocol/src/flags.js ·
                apps/web/src/i18n/en.ts · apps/web/src/app/* · apps/web/src/components/* ·
                artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md
                (approver ruling — proposing/authoring two-axis) ·
                ADR-002, ADR-003, ADR-004, ADR-006, ADR-008, ADR-013, ADR-016, ADR-024, ADR-025
Last updated:   2026-09-01
```

> **Based on:** the Diátaxis framework (tutorials · how-to · reference · explanation), Google
> developer-documentation style, and Apple HIG (task-oriented, customer language).
> **Produced in:** Launch. **Ships at:** Gate 2.
> Written for an ordinary citizen, in plain language, at or below a grade-8 reading level.

### Document history

**v2.0.0 (2026-08-31) — major rework.** Routed back from
`artifacts/reviews/14-user-guide-v1.0.0-business-cycle1.md` (business review, cycle 1: **54%,
FAIL, 6 Critical / 7 High / 7 Medium / 4 Low**). v1.0.0 was written 2026-08-09, before the
party-creation, join/membership and proposals drops, and described the deferred v2 cryptographic
product as though it were shipping today — including asserting the exact opposite of the
mandated FR-131 voting-privacy disclosure. This version re-founds the guide on what is actually
built (Doc 06 §7) and what the RTM (Doc 08 §3.1) records as open, not on the 2026-08-09 feature
description. Closed:

- **ISS-01, ISS-02 (Critical):** every affirmative use of "anonymous" / "private" /
  "receipt-free" / "secure" about v1 voting removed. §2.6, §0.1, §0.2, §3.1, §3.5, §3.6 and §4.3
  rewritten on the FR-131(a)–(c) disclosure: v1 voting will be **NOT anonymous, NOT
  receipt-free, NOT coercion-resistant**, and **the platform database CAN see vote direction and
  party membership**.
- **ISS-03 (Critical):** the "no member list exists anywhere" claim removed from §0.2, §2.3 and
  §4.3 (four places) and replaced with the shipped `joinPrivate` copy (`apps/web/src/i18n/en.ts`):
  membership is not published, but Trumocracy's own records can link an account to its party.
- **ISS-04 (Critical):** added the open-tier / counting-tier participation model (FR-122, FR-123,
  FR-131(d)) as a first-class part of §1.2 and §2.3, a new §2.3 subsection, and a §3.5 message
  row, using the shipped counting-tier and clause-(d) notice copy.
- **ISS-05, ISS-06 (Critical):** §1.2 rewritten against FR-132/ADR-025 (phone verification, then
  a government-ID check) instead of the v2 ZK enrolment design; the Phase-1 single-rail
  (Aadhaar-only) reality and the exclusion it creates are now stated plainly (OI-04, OI-20), and
  the ≥2-issuer, non-government-issuer rule is presented as a design target not yet met, not a
  current guarantee.
- **ISS-07 → ISS-13 (High):** the §2, §3.1 and §3.4 availability tables re-derived row by row
  from Doc 06 §7 and Doc 08 §3.1 instead of from the original prose. Marked **Not yet available**:
  casting a vote and seeing a result, account recovery, residency confirmation, manifesto
  commitments with status tracking, the sealed multi-country ballot committee, and offline draft
  composition. The accessibility conformance claim (§5) is restated as a target plus current
  status, not an assertion.
- **ISS-14 → ISS-24 (Medium/Low):** source pins now carry version and status; locales restated as
  2 shipped (English, Arabic working-draft) against an 8-locale launch target; the OI-08
  provisional status of timelock/membership-tenure figures and the recall-bar example is noted;
  the §2.6 self-check instruction now points at the surface that actually carries the FR-131(d)
  notice today; the delegation claim is restated against `flags.js` (Phase 4, not "never");
  glossary gains **open tier**, **counting tier**, **official strength**, **verified** and
  **coercion-resistant**; and Doc 09's own `Status: In Review` is noted wherever it is cited.

Every fact in §1, §2, §3.1, §3.4 and §7 below is re-derived from Doc 06 §7 ("Known limitations
of this drop") and Doc 08 §3.1 (the RTM), not from a feature description written before those
artefacts existed. Nothing about the writing itself changed on the reviewer's instruction — the
plain-language register, the "what this is not" section, and the §3.2 numeric reference (checked
line by line against `packages/protocol/src/constants.js` and found accurate) are preserved.

**v2.1.0 (2026-09-01) — cycle-3 rework.** Routed back from
`artifacts/reviews/14-user-guide-v2.0.0-business-cycle2.md` (business review, cycle 2: **78%,
FAIL, 1 Critical / 3 High / 3 Medium / 4 Low**). That review confirmed all six cycle-1 Criticals
and six of seven cycle-1 Highs were genuinely fixed in v2.0.0, and asked this rework to leave the
FR-131 rewrite, §1.2, §3.2 and the source-pin discipline untouched — it did not reopen any of
them. The four new Critical/High/Medium findings were all one defect class the v2.0.0 rework had
not yet checked: sections describing a surface the shipped code in `apps/web/src` does not have.
Closed:

- **ISS-C2-01 (Critical):** the public-record / tamper-evidence guarantee corrected at all six
  locations it appeared — §2.12 items 1–2, the §3.6 glossary entry, the §4.3 "Take down party Y"
  answer, the §3.1 Public-record row, the §3.4 table, and §2.1 Step 5 — to the v1 truth already
  shipping in `apps/web/src/i18n/en.ts` (`trailV1Note`): the record is append-only **inside
  Trumocracy's own store** (genuinely proven — ordered, no delete path, copies on read,
  UT-0846–UT-0848), **not published**, and **not independently checkable** until the DES-097
  audit-anchoring release. The §3.6 entry's "contains no personal information" clause, which
  contradicted §2.3/§2.6/§4.3 of this same document, is also corrected.
- **ISS-C2-02 (High):** backing/withdrawing a petition marked **Not yet available** everywhere it
  was previously claimed built — §1.4 (retargeted to join/leave, §2.3, which works end to end),
  §2.2 (rewritten in the forthcoming-behaviour pattern §2.5/§2.7/§2.9 already use, keeping the
  public-by-default warning), HT-002, the §3.1 Petitions and Back/withdraw rows, the §3.4 table,
  §7's "new in this release" and "not in this release" lists, and §0.2.
- **ISS-C2-03 (High):** authoring corrected from "any member" to "Worker tier declared first" —
  §2.4's opening and "what's built today" paragraphs, a new "Declaring yourself a Worker"
  subsection in §2.4 (moved out of §2.7, reusing `workerGateBody` / `workerConsentPermanent` /
  `workerConsentPublicRecord` verbatim from `apps/web/src/i18n/en.ts`), HT-004, the §3.4 table, and
  §0.2. The two-axis distinction is preserved precisely: verification (no ID gate on authoring,
  confirmed OPEN by the 2026-08-30 approver ruling) is a different axis from disclosure (Worker
  self-declaration, unchanged, still gates authorship because authorship is public and Supporters
  are anonymous).
- **ISS-C2-04 (Medium):** three §3.1 rows re-scoped against the components that actually render
  them — "Opening record" to **Not yet built** (no such screen exists); "How the bar is worked
  out" to what `PetitionProgress` actually shows (supporters/needed/remaining, not the population
  figure or its sources); "Party home" to membership numbers and join/leave (not the programme,
  not a breakdown by area).
- **ISS-C2-05 (Medium):** §2.1 Step 3 and the §3.2 row now state the 30–365-day design range and
  the current behaviour (every petition runs the fixed 30-day minimum; no duration control exists
  in `PartyCreationService.publishDraft()`) separately.
- **ISS-C2-06 (Medium):** the mandatory, non-removable non-violence clause (FR-077, CON-013,
  `NON_VIOLENCE_CLAUSE` in `constants.js`) added to §2.1 Step 1 in plain language, with the reason
  and a provisional marker (CLAUSE-TEXT-01, pending approver ratification per Doc 06 §7 #15); the
  neutrality sentence qualified accordingly.
- **ISS-C2-07 → ISS-C2-10 (Low):** the duplicate date fields distinguished (§0's "Last reviewed"
  row now names the independent-review date and points to the header's "Last updated" field for
  content changes); the §6 status-page row qualified against Doc 09's `In Review` status; the
  §3.1 "Before you sign up" row aligned with open item 4 (the disclosure content renders today; the
  enrolment action does not); the §5 device/bandwidth bullet given the same
  design-target-plus-current-status treatment as the two bullets above it.

No claim the cycle-2 review found correct was reopened. Every fix above was checked against its
cited source — `apps/web/src/i18n/en.ts`, `packages/sdk/src/proposals.js`,
`apps/web/src/components/EightPillarForm.tsx`, `PetitionProgress.tsx`, `PartyMembership.tsx`,
`packages/protocol/src/constants.js`, `packages/sdk/src/party-creation.js`, and the 2026-08-30
approver ruling on proposing/authoring — before being written, not merely copied from the review's
suggested wording.

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
- **ISS-C3-06 (Low):** the Doc 05 source pin refreshed — to v2.5.0, Approved (Doc 05 advanced and its cycle-3 review passed between this rework's authoring and its transcription).
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
demonstrated it sweeps adjacent territory.

No claim the cycle-3 review found correct was reopened. Every fix above was checked against its
cited source — `apps/web/src/app/parties/page.tsx`, `apps/web/src/components/PartyMembership.tsx`,
`apps/web/src/i18n/en.ts`, `packages/sdk/src/party-creation.js`,
`packages/protocol/src/governance.js`, and `docs/08-traceability-matrix.md` §3.1 — before being
written, not merely copied from the review's suggested wording.

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

---

## 0. About this guide

| Field | Value |
|-------|-------|
| Who this is for | Any adult who wants to start, join or help run a political party |
| What you need | A phone (Android 9 or newer, 2 GB memory) or a mobile web browser. Nothing else. |
| Cost | Nothing. Ever. |
| Product version this guide covers | **0.1.0** — a first, public **practice release** (see Doc 09, Release Notes — itself still `In Review`) |
| Last reviewed (independent business review) | 2026-08-31 — cycle 2, see `artifacts/reviews/14-user-guide-v2.0.0-business-cycle2.md`. This is not the same date as `Last updated` in the header above, which tracks when the writer last changed this document's content. |
| Get help | See §6 |

### 0.1 Read this first — this release is a practice run

Version 0.1.0 is a **public rehearsal**, not the finished product. Four things about it change
what is safe for you to do. Read all four before you do anything else.

- **Your vote will not be private from Trumocracy.** In this version, Trumocracy's own database
  can see how you voted and which party you belong to. Nobody outside Trumocracy sees this on any
  public page — but our own records can, and a government could order us to hand them over. Read
  **§2.6** in full before you rely on this platform for anything that could put you at risk.
- **Joining is open to everyone. Being counted is not — yet.** Anyone can join a party with a
  phone number and take part in discussion straight away. But your vote will only decide a binding
  outcome, your membership will only count toward a party's official strength, and you will only
  be able to stand as a candidate, once you have passed a government-ID check. Read **§1.2** and
  **§2.3**.
- **In this pilot, there is one accepted way to prove who you are.** The identity check this
  release is built around only works with a government-issued ID — in the pilot region, an
  Aadhaar number. If you do not hold one, you cannot yet pass that check. This is a real exclusion
  and we are not going to hide it. Read **§1.2**.
- **The checks that prove you are a real, unique person are not fully built yet**, and casting a
  vote and seeing a result do not exist as working screens yet either. See §1.2, §2.4 and §3.1
  for exactly what does and does not work today.

**Please do not use this release to organise for real** if being known as a supporter — or being
unable to pass the identity check at all — could cost you your job, your safety or your family.

- **§0.2 — what Trumocracy is not.** It is not a government election.

### 0.2 What Trumocracy is — and what it is not

**Trumocracy helps people build and run political parties.**

You can, today:

- write a full party programme and open it as a petition,
- join an open party — one at a time (§2.3),
- take part in the discussion, and put an idea to the members once you declare yourself a Worker
  (§2.4), and
- watch a party's petition open into a party once its bar is met.

Gathering public support for a petition — the "back this petition" step — does not have a working
screen yet; see §2.2. Casting a vote on an idea is not built yet either — see §2.4. Once voting
exists, every counting member gets exactly one vote.

**Trumocracy is not a government election, and it never will be.**

- It does **not** run, count or certify any national, state or local government election.
- A result here is a **party's own decision** about its own affairs. It is **not** an official
  election result, and no government has to accept it.
- If your country requires a party to file named officers or audited accounts, Trumocracy can give
  you the record of what your party decided. **A person still files it, under their own name.**

Trumocracy also does **not**:

- sell memberships, votes or influence — nobody can pay for a bigger say;
- let anyone at Trumocracy approve, block, edit or delete a party, a member or a result;
- publish or hand anyone a list of who belongs to which party. Nobody outside Trumocracy can see
  who is in which party. **This is not the same as saying no record exists** — in this version,
  Trumocracy's own internal records can link your account to the party you join. That link is
  never published. See §2.3 and §2.6 for what that means for you;
- keep your identity documents, your fingerprints or your home address;
- moderate political opinions. Where content breaks the law in one country, we can hide it from
  view **in that country only** — a public log of every time we do that is planned but not built
  yet in 0.1.0 (see §4.5).

---

## 1. Get started — step by step

Two of the three tasks below are not yet available as working screens in version 0.1.0. This
section explains what each is for, what already works, and what is coming. Read it in order.

### 1.1 Before you begin

You need:

- a phone or a browser (see §3.3 for what is supported), and
- a few minutes of quiet.

You do **not** need money, a bank account, a special app store, or any technical knowledge. You do
**not** need to complete any verification step to use most of what is in this guide today — see
§1.2.

### 1.2 Task 1 — Prove you are a real person

> **Not fully available yet in version 0.1.0.** There is no working screen you complete today.
> Every visitor to the current build starts, automatically, as an **open-tier** member — see §2.3
> for exactly what that does and does not let you do. This section describes the model that is
> being built, so you know what to expect and can plan around what this pilot does and does not
> yet reach.

**Why it exists.** One person gets one counted vote. That promise only works if the platform can
tell, for the actions that must be counted, that each person is real and is only counting once.

#### What v1 actually asks for — two separate steps, not one (FR-132)

1. **A phone number, checked once.** This is all that is needed to create an account, join any
   party, read, discuss, support and organise. No government-ID document is required for this
   step, and none will ever be required just to join or take part in discussion.
2. **A government-issued ID document, checked once — only if you want to be counted.** You need
   this step only for three specific actions: being counted in a party's official strength number,
   casting a vote that decides a binding party decision, and standing as a candidate. Your document
   is checked and then discarded. Trumocracy keeps only that you are a real, legal-age person,
   which country issued the document, and a one-way scrambled version of the document number (used
   only to stop the same document opening two counting accounts). It never keeps the document
   image, a photo, your name, your date of birth or the document number itself.

**What this does not give you.** The government-ID check tells Trumocracy "a real, legal-age
person did this" — it does not, on its own, stop one person holding more than one legitimate
government ID from creating more than one counting account. It is an improvement over a phone
number alone, not a complete guarantee of one-person-one-vote. The full guarantee is a v2
capability (see below).

#### What this pilot means for who can take part

In this first pilot region, the only accepted government ID is **Aadhaar** (India's national ID).
This is a real limitation, and we are not going to hide it:

- **If you do not hold Aadhaar, you cannot yet pass the counting-tier check in this pilot.** You
  can still join, read, discuss and organise in the open tier (§2.3). You cannot yet be counted,
  cast a vote that decides a binding decision, or stand as a candidate.
- Trumocracy's design goal is that **no single organisation should be able to decide who is
  allowed to take part** — the standing rule is at least two independent ways to check someone is
  real, with at least one of them not run by a government (see §3.2). **That rule is not in effect
  in this pilot.** This pilot deploys one government-run rail only. Widening it — the next planned
  step is a privacy-preserving digital-identity wallet in the EU — is not yet built or dated.
- If your document is refused, you can appeal. An appeal never asks for more personal information
  than the first check did.

#### What is coming later — a different, further-off design (v2)

Trumocracy's longer design also describes reading a passport or ID chip directly with your own
phone, verification desks run by local civil-society organisations, and neighbours vouching for
each other where no accepted document exists — so that, eventually, proving you are real never
depends on one authority alone, and does so **without Trumocracy ever learning who you are** (a
mathematical proof rather than a document check). None of that is built or scheduled for this
pilot. It is described here so you know what is planned, not what to expect now. When it ships,
it will replace the government-ID check above behind the same seam, without changing anything
else about how parties, petitions or voting work (`IEligibilityVerifier`, ADR-024).

**One thing to know, for when this ships.** The organisation that checks you will learn that you
signed up for something. It will not learn what you do afterwards, which party you join, or how
you vote.

### 1.3 Confirm where you live

> **Not available in version 0.1.0.** Confirming your area — proving you live somewhere without
> saying exactly where — needs a cryptographic proof that is not built yet (FR-006 rests on an
> uncompiled circuit; FR-008's change function does not exist at all — Doc 08 §3.1). This section
> describes how it is designed to work, so you can decide in advance.

**What a residency confirmation will be.** A note from a trusted local organisation that says
"this person lives in this area." It will name the **area**, never the street.

> **What this means — "area"**
> An area is a place on a published list, like *country ▸ region ▸ city ▸ district ▸ ward*. The
> smallest area the design handles is a **ward**. The design has no way to store a street, a
> postcode, a map pin or a location — not even a scrambled one.

**Who will be able to give you one** — under the same single-rail pilot limitation described in
§1.2: your election commission or civil registry, or (once built) a civil-society verification
desk or neighbours who vouch for you.

**When this ships, you will be able to change your area, but not often.** The design allows **one**
area at a time. After a change, the design requires waiting **180 days** before changing again.
This is the published FR-008 figure; the change function itself, and the wait it enforces, do not
exist yet.

#### Why the design covers a wider area than your own ward, when it publishes an action

This is a protection the design is built around, not a mistake: if only a handful of verified
people live in your ward, publishing "someone in this ward acted" would be enough for someone to
guess it was you. So the design rule is: an action is only published once **at least 1,000
verified people** in that area could have been the one who did it (see §3.2). If an area is
smaller than that, the design uses the next area up, or holds the action back rather than publish
something that points at you. This rule changes **where an action is shown**, never **who is
allowed to act**.

### 1.4 Task 2 — Join a party you agree with

This is built today, end to end, and the fastest way to see the whole thing work.

1. Open **Parties** and choose one.
2. Tap **Join**.
3. You are a member straight away — no approval, no interview, no fee.

✅ **You have taken part.** Read §2.3 for what joining does and does not give you yet, and read §2.6
before you rely on this platform for anything that could put you at risk.

> **Backing a petition — the way a new party gets started — is not a working screen in this
> release.** There is no petitions-browse page and no "back this petition" or "withdraw" control
> yet, even though the underlying petition and activation logic exists and is exercised by the
> automated test suite. See §2.2 for what backing is designed to do, and §2.1 for how a founder
> opens a petition today.

### 1.5 What next

- Start your own party → §2.1
- Join an open party → §2.3
- See what counts, and what does not yet → §2.3
- Have your say in the discussion, and the voting-privacy warning → §2.4, §2.6
- See everything that is and is not available yet at a glance → §3.4

---

## 2. How to do each thing

| ID | Task | Available in 0.1.0? | Where |
|----|------|---------------------|-------|
| HT-001 | Start a new party | Yes | §2.1 |
| HT-002 | Support a party's petition | **Not yet** | §2.2 |
| HT-003 | Join a party | Yes | §2.3 |
| HT-004 | Take part in the discussion, and put an idea forward once you declare yourself a Worker | Yes — discussion is open to all; casting a vote is **not yet** | §2.4 |
| HT-005 | Publish what your party promises, with tracked status | **Not yet** | §2.5 |
| HT-006 | Understand your voting privacy before you rely on this platform | Yes — **read it** | §2.6 |
| HT-007 | Stand for a position | **Not yet — Phase 3** | §2.7 |
| HT-008 | Vote out someone who is not doing the job | **Not yet — Phase 3** | §2.8 |
| HT-009 | Get back in after losing your phone | **Not yet — Phase 3** | §2.9 |
| HT-010 | Leave a party | Yes | §2.10 |
| HT-011 | Start a new party from an old one | **Not yet — Phase 3** | §2.11 |
| HT-012 | If something goes wrong | Yes, for what exists today | §2.12 |

### 2.1 Start a new party

Nobody approves your party. Nobody can refuse it. The only thing standing between your idea and a
working party is **whether enough people who live in your area back it.**

#### Step 1 — Write the programme: all eight chapters

Your programme must cover **all eight** of these:

1. **Finance** — money, tax, spending
2. **Society** — how people live together
3. **Governance** — how decisions get made
4. **Law** — justice, courts, policing rules
5. **Education** — schools and learning
6. **Healthcare** — health and care
7. **Security** — safety and defence
8. **Regional Plans** — what you will do in your own area

**All eight, or you cannot publish.** A party is a whole programme, not a slogan.

**One more thing every programme carries, and it is not optional: a non-violence commitment.**
Every charter includes this fixed statement, word for word, and no party can remove or edit it:

> "This party will act through peaceful and lawful means only. No member may use, encourage, or
> support any form of violence in any activity connected to this party."

This is the one thing the platform requires of a party's content — not because it judges your
politics, but because hosting a call to violence is not a form of political neutrality. **It is the
only exception to the content-neutrality rule below.** *(The exact wording of this clause is still
awaiting formal approver ratification before this platform's Gate 2 launch review — tracked as
CLAUSE-TEXT-01 — and could still change; what will not change is that a non-violence commitment of
some form is mandatory and non-removable.)*

Each chapter has to contain a published minimum amount of writing. The app shows you that standard
**before** you start writing, and a progress bar as you go. If you try to publish with a chapter
missing or too thin, the app **names the chapters that are short**. Beyond the non-violence
commitment above, it never judges your politics — the length-and-substance standard is about how
much you wrote, never about what you believe.

**Write when you have signal.** Offline drafting — keeping your work on your phone and sending it
automatically when signal returns — is planned (NFR-012) but **not built yet** in 0.1.0. On a weak
connection, save your work yourself before you lose signal rather than relying on the app to keep
it for you.

**Your name is not attached.** While you draft and petition, you appear under a made-up name of
your choosing. You choose later, and separately, whether to become a public figure (see §2.7).

#### Step 2 — Choose your area and your name

- Pick **one** area. This is the area your party serves, and the area whose people decide it.
- Pick a name and an emblem (text only, 1–8 characters, in this release). If another petition or
  party in that area already uses them, the app refuses — it tells you whether it is the name or
  the emblem that is taken, but never which party or petition holds it.
- **The area is permanent.** After your party opens, it cannot be changed. If you later want to work
  in another area, you run a fresh petition there and meet that area's own bar.

#### Step 3 — Open the petition

Your party goes live as a **petition**: a public page where people who live in your area can back it.

- **The design allows a window between 30 days and 365 days.** In this release, every petition runs
  the **30-day minimum**, fixed by the app — there is no control yet for a founder to choose a
  longer window.
- Everything is public: the programme, the count, the bar, and the time left.
- Nobody is ever shown who backed it, and no list of people who did *not* back it exists.

#### Step 4 — "Enough support" — how the number is worked out

The number of backers you need is worked out by the app, in public, and **nobody can change it for
your party** — not us, not a rival, not an official.

It is the **largest** of these three numbers:

| Part of the sum | What it means |
|---|---|
| A set share of your area's population | The main bar. The share is **2% by default**. |
| The same share of the **verified people** in your area | Stops anyone making the bar easy by understating the population. |
| **500 backers** | An absolute floor. No party is ever founded on a handful of accounts. |

More detail, plainly:

- The share can be set anywhere between **0.5% and 20%**, depending on the area.
- **The exact share for each area is set per area and published before any petition opens there.**
  It is not decided later and never changed under a live petition.
- **The design (DES-007) calls for the population figure to come from at least five independent
  published sources**, using the **middle value** so one wrong or manipulated source cannot move
  it, with a **7-day window** during which anyone could challenge it before it is used. **None of
  that mechanism is built in this release.** The figure used today is a fixed value from a curated
  demo set for the pilot region, entered directly on the draft — there is no multi-source oracle,
  no median calculation, and nothing yet to challenge (Doc 06 §7).
- **The bar is frozen the moment your petition opens.** Nobody can raise it under a petition that
  is succeeding, or lower it for a friend.

#### Step 5 — The party opens by itself

When the count reaches the number needed, the party **opens**. That is all there is to it.

- **Nobody approves it.** There is no review, no committee and no waiting room. The code has no
  button for approving, rejecting, featuring or delaying a party, because we did not build one.
- Anyone can trigger the final step, including you, including a stranger.
- The moment it opens, the app permanently records, inside its own append-only store, the programme
  as written — name, emblem, area and the eight chapters. **The backer count and the population
  figure used are not part of that permanent record in this release, and there is no source field
  anywhere in the code**; the recorded, challengeable-sources guarantee described in Step 4 arrives
  with the population oracle. This record is not yet published outside Trumocracy, and nobody
  outside Trumocracy can yet check it independently — see §2.12 for what that means today.
- **A newly opened party is capped at 100 members until its legal registration is verified and
  recorded on the platform.** This is a deliberate anti-capture rule, not a bug — it stops an
  unverified party accumulating membership strength before it is legally real. The cap lifts
  automatically, by code, the moment legal registration is recorded; there is no manual way to lift
  it early.

If your window runs out before you reach the number, the petition is **archived**. It stays readable
forever. You may try again, but not immediately with the same text in the same area — there is a
waiting period, and the app tells you the earliest date.

### 2.2 Support a party's petition

> **Not available in version 0.1.0.** There is no petitions-browse screen and no backing or
> withdrawal control anywhere in this release — although the underlying petition and threshold
> logic they would use is built and tested (§2.1, §3.2). This section describes how backing is
> designed to work, so you can decide in advance whether it is right for you once it ships.

**How it will work**

1. Open the petition and read the eight chapters.
2. Tap **Back this petition**.
3. Confirm. → *The count goes up by one.*

**The rules it is designed to enforce**

- You will be able to back a petition **only in the area where you live**.
- **One person, one backing.** A second attempt from any device will change nothing.
- Backing will not be able to be sold, lent, given away or done on someone else's behalf. There is
  no planned feature for it, so there will be nothing for a broker to buy.

#### ⚠️ Your support will be public by default in this version

When backing ships, it will be a **public act**, on purpose. It is closer to signing a public
petition in the street than to casting a secret ballot. Public backing is what will give a petition
its weight.

What that will mean for you:

- **You will back it pseudonymously.** You will prove you live in the area. Your real name will not
  be shown.
- **But the act itself will be on the public record**, and in a small area, or if people already
  know your made-up name, that could be enough for someone to work out who you are.
- A **fully private** way to back a petition is a planned design option for high-risk places. It is
  **not switched on in this version.**

**So: once this ships, only back a petition if you are comfortable being seen to support it.**

Backing a petition and voting inside a party will be different things — see §2.4 and §2.6.

#### You will be able to withdraw before the party opens

- You will be able to withdraw at any time **before** the party opens. The count will drop by one,
  and nobody will be told who withdrew.
- After the party opens, withdrawal will no longer be possible. Opening will be final.

Withdrawing will remove your support. It will not stop you joining the party later if you change
your mind again.

### 2.3 Join a party

Joining is the simplest thing in Trumocracy.

**Steps**

1. Open the party's page.
2. Tap **Join**.

That is it. **You are a member straight away.**

- **No approval.** No one reviews you.
- **No interview.** No one questions you.
- **No invitation, no sponsor, no fee, no membership tier you have to earn to get in.**
- **Nobody can throw you out.** No founder, no office-holder, no funder and nobody at Trumocracy has
  the power to remove, suspend or block a member. That power does not exist in the app.

#### Joining is open to everyone. Being counted is a separate step.

There are two kinds of member, and the difference matters:

- **Everyone who joins is a real member straight away, with just a phone number.** You can read,
  discuss, support and organise — everything except the three things below.
- **Being counted needs one more step: a government-ID check** (§1.2). Until you pass it, three
  things do not count for you:
  - you are not part of the party's official strength number,
  - your vote does not decide a binding decision (once voting exists — see §2.4), and
  - you cannot stand as a candidate.

If you try one of those three things before you have passed the check, the app tells you plainly,
**before** it refuses: what your status is now, that a government-ID check is what you need, exactly
what does not count for you, and how to become a counting member. Nothing else about your
membership changes because of this — you keep everything else. **The government-ID check itself is
not switched on yet in this release** — see §1.2. Right now, every member is in the open tier.

**Who can see that you are a member?** Nobody outside Trumocracy. The party's **total** membership
and its official (counted) strength are both shown publicly as numbers — never as a list of names.
But **your membership is not fully private from us**: in this version of the platform, Trumocracy's
own records can link your account to the party you join. That link is never published. We tell you
this plainly rather than promise more than we can keep — see §2.6 for what this means for voting,
and §4.3 for what we could actually be ordered to hand over.

**One thing that will depend on time, once voting exists:** how long you have been a **counting**
member decides which kinds of decision you may vote on — not how much your vote weighs. See §2.4.

#### One party at a time

You can belong to one party at a time. Leaving one and joining another is always your choice. To
join a different party, leave the one you are in first — leaving is instant and needs nobody's
permission (§2.10). If you try to join while you are still an active member elsewhere, the app
tells you which party is blocking it and what to do next (§3.5).

### 2.4 Put an idea to your party, and take part in the discussion

**Every member — including an open-tier member who has not passed the government-ID check — can
read and take part in the discussion.** Nobody screens, delays, hides or reorders anything said
there.

**Putting a proposal forward is a separate step, and it requires one thing first: declaring
yourself a Worker.** See "Declaring yourself a Worker", below, before you do it — it is not a small
step.

**Casting an actual vote and seeing a result are not available yet in version 0.1.0.** What exists
today is putting a proposal forward (once you have declared Worker) and discussing it; what does
not exist yet is the ballot screen itself (see "What's built so far", below). The rest of this
section describes the whole model — built and not-yet-built parts together — so you understand what
you are looking at when you use it, and what to expect once voting ships.

#### Declaring yourself a Worker

Members who put proposals forward do so in the open, under a name other members can see.
Supporters take part without a public name, so a Supporter cannot be the author of a proposal.
Declaring Worker is entirely your own choice.

Before you declare, the app asks you to confirm two things, and neither may be softened:

- **This lasts for the whole term. You cannot undo it partway through.**
- **Your record of taking part in this party becomes public for the term** — not only the
  proposals you put forward, but what you take part in.

**Nobody reviews this. When you confirm, it is done.** This is a separate, smaller step than
standing for a position (§2.7), which additionally publishes your real name.

#### The four kinds of decision

The bigger the decision, the more agreement it will need and the longer it will take. There are
four kinds.

| Kind of decision | Examples | How many members must take part | How many must say yes | How long you must have been a member | Talk about it first | Voting lasts at least | Wait before it happens |
|---|---|---|---|---|---|---|---|
| **Everyday** | Publish a statement, arrange an event | 5% | More than half | No wait — from day one | — | 3 days | None |
| **Policy** | Adopt a position, agree a budget within the cap | 10% | More than half | 14 days | 2 days | 3 days | 48 hours |
| **Structural** | Change a chapter of the programme, change how positions work | 25% | 60% | 90 days | 7 days | 7 days | 14 days |
| **Founding rules** | The founding document, the party's name, its core values, the rules for changing the rules, closing the party | 40% | 75% | 180 days | 14 days | 14 days | 30 days |

Read the table like this:

- **"How many members must take part"** is the minimum turnout. If fewer than that vote, the
  decision fails — even if everyone who voted said yes.
- **"How many must say yes"** is the share of those who voted.
- Both bars, plus the closing time, are meant to be shown to you **before you vote**, and
  **cannot be changed once voting has opened**.

A party may make these rules **stricter** for itself. It may **never** make them weaker than the
table above.

> **A note on these figures.** The membership-tenure column and the "wait before it happens"
> (timelock) column are the values the design currently uses, but they are not yet the platform's
> formally fixed numbers — they remain open for the architect to close (**OI-08**) and could still
> change before this feature ships. The recall-bar example in §2.8 carries the same caveat. The
> turnout and agreement percentages above are not affected by this note.

#### Why the founding rules are harder to change

The founding rules are what the party *is*. If a simple majority on a quiet Tuesday could rewrite
them, then any group that turned up in numbers could take the party away from the people who built
it. That has happened to real parties for a century.

So three protections apply to founding rules, and only to founding rules:

1. **A high bar.** 40% must take part and 75% must agree.
2. **A waiting time before you may vote on them: 180 days of membership.** This is why, once voting
   exists, you will be able to vote on everyday party business from your first day as a counting
   member, but not on the founding rules until you have been part of the community for a while.
3. **A long delay before the change happens: 30 days.** Everyone can see it coming and can argue, or
   leave.

**Important: waiting time changes what you may vote on. It never changes how much your vote
weighs.** A member of 200 days and a member of 181 days will have exactly the same power. This is
not seniority. It is closer to a residency requirement, applied to the founding document alone.

**A party can also lock some clauses at founding.** If the founders write "we will never take
corporate donations" as a locked clause, no later majority can undo it. The app enforces it.

**If a party grows very fast, big votes get harder.** If membership grows by more than **20% in 30
days**, then for structural and founding-rule votes the app automatically:

- **doubles** the voting window,
- raises the share who must agree by **5 percentage points**, and
- publishes a warning that every member sees.

This is not aimed at newcomers. Genuine growth is a good thing. It is aimed at a **sudden** flood
that arrives just in time to win a vote. The extra protection fades away after 90 days.

#### The discussion — what's built today

**Putting a question to the party and putting forward a competing answer are the same step, and
both require declaring Worker first** — there is no separate, lower-gated way to only ask a
question (see "Declaring yourself a Worker", above). Every member, including an open-tier member,
can take part in the discussion itself without declaring Worker. Every step — the question, each
proposal, and what is said — is written down in order and never changed.

The published design also calls for a fixed discussion period before voting opens (2 days for
policy, 7 for structural, 14 for founding rules), with the timeline driving each proposal forward
automatically. **Only the ordering is enforced today** — no proposal can be skipped or reordered.
The automatic timing is not wired yet; in this release, moving a proposal forward is done by a demo
control, not by the clock (Doc 06 §7).

> Trumocracy has no forum, no messaging and no comment threads. Parties talk on their own channels.
> The discussion is time and record, not a chat room.

#### How voting is designed to work, once it exists

1. Open the proposal. You will see the kind of decision, both bars, and when voting closes.
2. Choose your answer.
3. Confirm.

**Who can vote on a proposal will be fixed at the moment it opens.** If you join, or reach the
required membership time, after that moment, you will not be able to vote on that particular
proposal. This is what is meant to stop a group joining after they have read a proposal in order to
defeat it.

**You will see no running total.** No partial counts, no turnout by option, no predictions —
nothing until voting closes. This is meant to stop anyone pressuring you with "we are winning" or
"you may as well not bother."

A decision that passes will not take effect at once — it will wait, per the table above, with the
change publicly listed as pending and the date it takes effect. The result, once published, will
show the outcome, how many took part, and whether each bar was met, and will be re-countable by
anyone from the public record (see §2.12).

**Read §2.6 before you rely on any of this for something that could put you at risk.** The privacy
properties of voting are the most important thing in this guide, and they are not yet what you
might assume.

### 2.5 Publish what your party promises

> **Not available in version 0.1.0.** Structured manifesto commitments — with time horizons, a
> tracked status of **in progress / met / not met**, and a permanent version history you can
> compare side by side — have no design and no implementation yet (Doc 08 §3.1, FR-094/FR-095).
> This section describes the intent, so you can decide in advance.

The design goal is that a party can publish its promises with dates, mark each one's progress, and
never be able to quietly rewrite what it said before — every version kept forever, comparable side
by side. Trumocracy itself would never rate, score or fact-check a promise; only the party would set
a status, and every change of status would be public.

### 2.6 ⚠️ An honest warning about voting privacy — read this before you rely on this platform

**Please read this section fully. It is the most important section in this guide.**

Casting a vote does not exist as a working screen in version 0.1.0 yet (see §2.4 and §3.1). This
section tells you, in advance, exactly what will be true about your privacy **the day voting
ships**, so you can decide, ahead of time, whether this platform is safe for you to use for
anything that matters.

#### Your vote will not be private from Trumocracy

When voting arrives in this version, you will sign in the ordinary way — with your device's own
unlock, not a special anonymous proof — and your vote will be written to Trumocracy's own database
next to your account. This is not a temporary bug; it is how this version of the platform is built.
That means, plainly:

- **Your vote will not be anonymous.** Trumocracy will be able to tell that you voted, and how.
- **Your vote will not be receipt-free.** If someone pressures you to prove how you voted, in this
  version there will be a real record that could be shown.
- **Your vote will not be coercion-resistant.** There will be no way, in this version, to quietly
  change your vote afterwards so that a threat becomes useless.
- **Trumocracy's own database can see vote direction and party membership.** Nobody outside
  Trumocracy sees this on any public page. But our own records can — and a government could order
  us to hand them over. See §4.3 for what we could actually be compelled to produce.

We are not going to soften this. It is a real gap, it is why this release is a rehearsal, and it is
the single biggest reason not to use this platform for real political organising, once voting
ships, where being identified could hurt you.

#### What protection is coming, and when

The missing protection is called **receipt-free, coercion-resistant voting**, and it works like
this: you will be able to change your vote later, secretly, and only your last vote will count.
Nothing will show that you changed it — not the public record, not your phone, not any message. A
later vote will look exactly like a first vote to anyone watching. That is what makes a threat
useless: someone can stand over you and watch you vote their way, and then have no way to check
whether you changed it after they left.

To make this work, votes will need to be kept sealed until the count, with the count done jointly
by a committee of independent organisations in different countries, several of whom must act
together to produce the result. **This is a Phase-3 capability. It is currently switched off**
(`maci_voting` is off in this build) and the committee that would run it does not exist yet.

#### What to do meanwhile

1. **Do not use this platform to vote on anything that could put you at risk**, once voting ships.
   This release is a rehearsal. Treat it as one.
2. **If you are pressured, your safety comes first.** Nothing in this app is worth being hurt for.
3. **Be careful what you back publicly.** Backing a petition is public by design (§2.2).
4. **Wait for the protection above to arrive** before organising anywhere that being known would be
   dangerous.

#### One thing that already works today

The **open-tier vs counting-tier** disclosure (§2.3, FR-131 clause (d)) is live today at the parties
directory: if you attempt a counting action — being counted, casting a binding vote, or standing —
before you have passed the government-ID check, the app shows you a plain notice before it refuses,
and you cannot dismiss it without reading it. That is the one part of this honesty requirement that
is built and testable right now; the ballot-screen notice above will join it once voting ships.

### 2.7 Stand for a position

> **Not available in version 0.1.0.** Standing for a position is switched off in this release and
> arrives in **Phase 3**. This section describes how it will work, so you can decide in advance.

**Only you can put your name forward.** There are no lists drawn up by anyone, no nominations of
other people, and no appointments. If a member tries to nominate someone else, the app refuses.

**You stand only where you live.** You may stand for a position covering your own area. If you try
to stand somewhere you do not live, the app refuses. If you move, your candidacy for the old area
ends — although a term you are already serving runs to its end.

**You need a minimum of local backing.** A published minimum number of members who live in your area
must back your nomination before you appear on a ballot. Backing from people outside the area does
not count. This keeps ballots serious without letting anyone gatekeep them.

**You give up your anonymity on purpose, and it lasts.** This is the one place where Trumocracy
shows a real name — and only because **you** chose it.

Before your candidacy is published, you go through a **separate consent step**. It states, before
you agree:

- your **real-world identity becomes public**;
- this is **irreversible** for your candidacy **and for any term you then serve**;
- the only way to take it back is to **withdraw before the ballot locks**;
- once the ballot locks, you cannot withdraw and the disclosure stands.

**If you do not give that consent, nothing about you is published.** Ever.

Ordinary members are never named. Not in any screen, any export, any log or any public record. The
difference is deliberate: **anonymity protects the powerless; openness binds the powerful.** Asking
people to vote for you is asking for power, and the price is being known.

**Voting for a position** is done only by members who live in that area. The timetable, the list of
candidates and the tie-break rule are all published **before** voting opens and cannot be changed
afterwards. When voting closes, **the winner takes the position automatically.** Nobody confirms it,
ratifies it or can refuse to seat them.

Positions have a fixed length set by the party. At the end, the position ends automatically and a
fresh vote is needed.

**A representative's votes are public.** When someone votes **as an office-holder**, that vote is
published with their name. When the same person votes **as an ordinary member**, that vote is
handled like everyone else's — see §2.6 for what "like everyone else's" means in this version.

**Declaring yourself a Worker** is a separate, smaller step than standing for a position, and it
does not wait for Phase 3 — see "Declaring yourself a Worker" in §2.4 for exactly what it does and
the two things you confirm before you do it.

### 2.8 Vote out someone who is not doing the job

> **Not available in version 0.1.0.** Recall is switched off in this release and arrives in
> **Phase 3**. This section describes how it will work.

You do not have to wait for the next scheduled vote to remove a representative who has stopped
delivering.

**Who can start it.** Any member who lives in that position's area and has been a member long
enough. You need **nobody's permission** — not the representative's, not another office-holder's,
not the founder's, and not Trumocracy's. Nobody can block, hide or delay it. The app has no such
power.

**It takes two stages.**

1. **Signatures.** Enough members in the area must sign to open a recall vote.
2. **A vote, with a higher bar than the one that put them in.** For example — and this is only an
   example; the recall bar itself is not yet fixed platform-wide (open item OI-08) — if someone was
   elected with 55% support and the recall bar is set at 60%, a recall vote at 58% would fail and
   they would stay; a later recall vote at 62% would succeed.

Both bars will be published **before** signatures open and cannot be changed once the process
starts.

**If a recall succeeds**, the position is removed automatically — no confirmation step, and no way
for the person to cling on — and a fresh vote for that position opens within a published number of
days.

**Protection from harassment.** There will be a grace period after someone is elected during which
no recall may be started, and a cooling-off period after a failed recall before the same position
can be targeted again. Recall is meant to be accountability, not a way to grind someone down.

### 2.9 Get back in after losing your phone

> **Not available in version 0.1.0.** Account recovery is switched off in this release and arrives
> in **Phase 3** — no recovery path is implemented yet, at all (Doc 06 §7). This section describes
> how it is designed to work, so you can plan ahead. **Right now, if you lose your phone in this
> release, there is no built-in way to get back in.**

You will not be given a secret code to write down, so there will be nothing you can lose in that
sense. Getting back in is designed to work through **people you trust**.

**The planned steps:**

1. Add a second device (a second phone, a tablet or a computer) and choose your **helpers** —
   people you trust who already use Trumocracy — well before you need them.
2. If you lose your phone: open Trumocracy on any device and choose **I have lost my access**.
3. Ask enough of your helpers to confirm it is really you.
4. Wait 7 days. A notice goes to you so you know it is happening, and **you can cancel it** with any
   device or key you still have.
5. After the wait, your account is handed back to you, on your new device.

**Why the design uses a week's wait.** Because a thief would also like it to be fast. If someone
steals your phone and tries to take your account, the design lets you stop them by tapping cancel.
Fast and pleasant recovery would also be fast and easy to abuse.

**Your helpers, when this ships, will learn nothing** about which parties you belong to, how you
voted, or what you have backed. All they will do is confirm you are you.

### 2.10 Leave a party

1. Open the party's page.
2. Tap **Leave**.

**You have left.** Right away.

- **Nobody can stop you.** No approval, no notice period, no penalty, no exit interview. The app
  has no way to delay or block it.
- Your rights in that party end at the same moment.
- You may join another party. You may join the same one again later.

Leaving is not just a convenience. It is the strongest check any member has: a party that stops
listening loses the people it is made of.

### 2.11 Start a new party from an old one (forking)

> **Not available in version 0.1.0.** Forking is switched off in this release and arrives in
> **Phase 3**. This section describes how it will work.

If a group inside a party disagrees deeply with where it is going, they do not have to win the
argument or give up. They can take the founding document and the history and start again.

**How it will work**

- **One in ten members** (10%) is enough to start a fork. You do **not** need permission from the
  party's leadership or its majority, and there is no function anywhere that lets them block it.
- The new party **inherits** the founding document and the record of promises, at a point in time
  you choose. Members can choose to come with it.
- There is a **30-day cooling-off period** before the fork goes ahead. A month is long enough for a
  hot argument to cool and short enough that it is a real option.
- The new party then **runs its own petition and must meet the full bar on its own** — exactly like
  any brand-new party. A fork gets a head start on writing, never on support.
- The link is permanent and public. Both parties show the fork in their history forever, so anyone
  can see which party continues what.

**Why this exists.** Any defence against a takeover eventually loses to someone determined enough.
Forking changes what a takeover is worth: capturing a party no longer captures its people. They
leave, with the programme and the history, and the captured shell keeps the empty structure.

The cost is real, and we will say it: easy exit means parties can splinter at the first
disagreement. The 10% bar, the waiting month and the requirement to earn support from scratch are
there to keep that cost in check.

### 2.12 If something goes wrong

#### You lost your phone

There is no built-in recovery path yet in this release — see §2.9 for how it is designed to work
once it exists. In this release, treat your device as something you should not lose.

#### Your proof failed, or you were refused

The government-ID check this describes is not switched on yet in this release (§1.2), so this does
not apply today. Once it exists:

1. Your area will need a working local rail; in this pilot, that means holding Aadhaar (§1.2).
2. You will be able to check your document is still valid; expired documents will need renewing.
3. You will be able to appeal; an appeal will never ask for more personal information than the
   first check did.

#### The app will not load

If the main service is blocked, the design includes an automatic fallback: an alternate relay,
then paying your own fee, then submitting directly to the underlying network. This fallback is
built and exercised in the automated test suite (Doc 09), not merely documented — but the exact
published addresses and how to reach them by hand for version 0.1.0 are **not yet published** (see
§6). There is currently no Settings option to enter an alternate address by hand.

#### Nothing is saved automatically while you are offline — yet

Offline draft composition (keeping unsent work on your phone and sending it when signal returns) is
planned (NFR-012) but **not built** in this release (Doc 08 §3.1). On a weak connection, save your
own copy of anything you have written before you lose signal.

#### Your action is queued, or delayed

- **"This will be published later"** — this message ships together with residency confirmation
  (§1.3), which is not available yet.
- **"Your action is in a queue"** — the spam-resistance and fee-sponsorship layer this message
  belongs to is designed but not yet deployed (FR-061, FR-133; Doc 08 §3.1). The design intent, for
  when it ships: your action is never refused and you are never charged — it waits, and the app
  tells you roughly how long.

#### A decision looks wrong to you

You can check most of what has happened yourself, today. You do not need an account, and you do not
need our help.

1. **Read what the app shows you.** What is kept today are two append-only records inside
   Trumocracy's own store: the deliberation trail for each proposal, and your own record of joining
   and leaving a party. Entries are ordered, there is no delete path, and every read returns a copy,
   so nothing you are shown can be quietly rewritten behind your back. **Neither record is yet
   published, and nobody outside Trumocracy can yet check either one without trusting us to report
   it honestly** — that independent, publish-and-verify guarantee arrives with a later
   audit-anchoring release. Today, the app itself is the only place to read them.
2. **Re-count what is public.** Total membership and official-strength numbers are shown on a
   party's home screen (§3.1), so a journalist, a researcher or a neighbour can add them up again
   and compare, today. Petition figures become publicly re-countable the same way once the
   petitions-browse screen ships (§2.2). A ready-made checking tool for non-experts is **not part
   of this release**; it is planned.
3. Results and version-history checking (§2.4, §2.5) will apply once those features ship.

**What we cannot do:** reverse a party's decision. There is no undo button, for anyone, including
us. If a party makes a decision that is unwise, the ways to answer it are the party's own rules
(propose a change), your right to leave (§2.10), and — later — forking (§2.11). We know this is
uncomfortable. It is the price of nobody being able to reverse a decision they dislike.

---

## 3. Reference

### 3.1 Screens

| Screen | What it is for | Available in 0.1.0? |
|---|---|---|
| Before you sign up | Plain statement of what is and is not kept | Yes — the disclosure text is shown today; the enrolment action behind it does not work yet (open item 4) |
| Choose how to prove you are real | The verification paths for your area | Page exists, but its action does not work yet — see §1.2 |
| Confirm where you live | Your area confirmation | **Not yet built** — see §1.3 |
| Party draft editor | The eight chapters, with the standard and a progress bar | Yes |
| Publish check | Names any chapter that is missing or too short | Yes |
| Petitions | Browse and read petitions | **Not yet built** — no petitions-browse screen exists in this release; see §2.2 |
| Back / withdraw | Support a petition, or take your support back | **Not yet built** — no backing or withdrawal control exists in this release; see §2.2 |
| How the bar is worked out | The supporters count, the number needed, and the number remaining | Yes — shown on the petition-progress screen today. The population figure, its sources, and a "why this number" explanation are not shown in this release's petition-creation flow |
| Opening record | What was recorded the moment a party opened | **Not yet built** — no such screen exists in this release |
| Party home | Total membership and official strength (as numbers), plus join and leave | Yes. **Not shown:** the party's programme, and any breakdown by area |
| Join / leave | One tap each | Yes |
| Does my membership count? | Open tier vs counting tier, and what the government-ID check unlocks | Yes |
| Proposals | List and detail: kind, discussion, stage | Yes — the discussion; stage timing is still manual (§2.4) |
| Voting | Cast your vote | **Not yet built** — see §2.4, §2.6 |
| Result | Plain-language outcome and how to check it | **Not yet built** |
| Promises and version history | Commitments, statuses, every past version, comparisons | **Not yet built** — see §2.5 |
| Get back in | Recovery through helpers | **Not yet built — Phase 3** |
| Public record | The deliberation trail for each proposal, and your own record of joining and leaving a party | Yes, to read within the app — **not yet published outside Trumocracy, and not yet independently checkable** (see §2.12). A log of content hidden for legal reasons is **not yet built** |
| Stand for a position | Self-nomination and the consent step | **No — Phase 3** |
| Positions and results | Who holds what, and their public votes | **No — Phase 3** |
| Recall | Start and vote on a recall | **No — Phase 3** |

### 3.2 The numbers, in one place

**Backing a petition**

| Setting | Value |
|---|---|
| Default share of the area's population needed | **2%** |
| Range the share may be set within | **0.5% – 20%** |
| Absolute minimum number of backers | **500** |
| How the requirement is worked out | The **largest** of: share × population, share × verified residents, 500 |
| How long a petition may run | Design range: **30 – 365 days**. **In 0.1.0, every petition runs the fixed 30-day minimum** — there is no control yet to choose a longer window. |
| When the bar is fixed | The moment the petition opens |
| Backings per person per petition | **1** |
| Withdrawing | Allowed any time before the party opens |
| Members before legal registration is verified | Capped at **100** (§2.1) |

**Decisions inside a party** (a party may be stricter, never weaker)

| Kind | Turnout needed | Agreement needed | Membership needed | Discussion | Voting (minimum) | Wait before effect |
|---|---|---|---|---|---|---|
| Everyday | 5% | more than 50% | none | — | 3 days | none |
| Policy | 10% | more than 50% | 14 days | 2 days | 3 days | 48 hours |
| Structural | 25% | 60% | 90 days | 7 days | 7 days | 14 days |
| Founding rules | 40% | 75% | 180 days | 14 days | 14 days | 30 days |

Lowest membership time any party may set for founding-rule votes: **90 days**.

> **These figures describe casting a vote, which is not yet built (§2.4).** The membership-tenure
> and "wait before effect" columns above, and the recall-bar example in §2.8, are provisional
> pending an open architecture decision (**OI-08**) and could still change. The turnout and
> agreement percentages are not affected by this note.

**If a party grows very fast**

| Setting | Value |
|---|---|
| Growth that triggers extra protection | more than **20%** in **30 days** |
| Extra agreement needed on structural and founding-rule votes | **+5 percentage points** |
| Voting window | **doubled** |
| How long the extra protection lasts | **90 days** |

**Privacy, area and access**

| Setting | Value | Live in 0.1.0? |
|---|---|---|
| People you must be indistinguishable among before an action is published | **1,000** | Applies once residency confirmation ships (§1.3) |
| If your area is smaller | The design uses the next area up, or holds the action back and tells you | Same |
| Areas you may hold at once | **1** | Same |
| Wait between changing area | **180 days** | Same |
| Independent ways to prove you are real, per area | **Design target: at least 2**, at least one not run by a government | **Not met in this pilot — one government rail only (§1.2)** |
| Free actions per person per period | **50** with a document or registry check, **10** with a neighbour check | The rate-limiting layer behind this is designed but not deployed yet (§2.12) |

**Getting back in** *(Phase 3 — not built; see §2.9)*

| Setting | Value |
|---|---|
| Waiting period | **7 days** |
| Notice sent to you | Yes, once built |
| You can cancel during the wait | Yes, once built |
| Secret codes to write down | **None** |

**Forking a party** *(Phase 3 — not built; see §2.11)*

| Setting | Value |
|---|---|
| Members needed to start a fork | **10%** |
| Cooling-off before it goes ahead | **30 days** |
| Must the new party earn its own support? | Yes — the full petition bar |

**The eight chapters a programme must cover:** Finance · Society · Governance · Law · Education ·
Healthcare · Security · Regional Plans.

### 3.3 What you need, and where it works

| Item | Requirement |
|---|---|
| Phone | Android 9 or newer, 2 GB memory or more |
| Browser | A mobile browser released in the last two years |
| Connection | Works down to a very slow connection |
| Download size | 15 MB or less |
| Languages | **2 shipped today: English, and Arabic as a working engineer draft awaiting native-speaker review.** Launch target: 8 languages including a right-to-left language (NFR-013). |
| Cost to you | **Nothing**, at every step, always |
| Older or unsupported devices | Design intent: a clear message telling you what will work, never a broken screen. **Not built yet** — no device or browser check runs in this release. |

### 3.4 What is available in this version, and what is not

| You can, today | You cannot yet |
|---|---|
| Start a party and open a petition (§2.1) | Complete a real identity check — phone or government-ID (§1.2) |
| Watch a party open by itself (§2.1) | Confirm your area (§1.3) |
| Join and leave a party freely — one active membership at a time (§2.3, §2.10) | Back a petition, or withdraw your support — no backing screen exists yet (§2.2) |
| See whether your membership counts, and why (§2.3) | Cast a vote, or see a result (§2.4) |
| Take part in the discussion, and put an idea forward once you declare yourself a Worker (§2.4) | Get your account back if you lose your phone (Phase 3 — §2.9) |
| Read what the app shows you of what has happened so far — not yet published outside Trumocracy (§2.12) | Stand for a position (Phase 3 — §2.7) |
| | Vote out a representative (Phase 3 — §2.8) |
| | Fork a party (Phase 3 — §2.11) |
| | Use a party treasury (Phase 3) |
| | Publish promises with a tracked, permanent version history (§2.5) |
| | Back a petition fully privately |
| | Cast a vote you could not be made to prove — coercion-resistant voting (Phase 3 — §2.6) |
| | Give your vote to someone else — not available now, and not currently planned before Phase 4 even then, pending a review of the risk of vote-buying (§4.5) |
| | Use Trumocracy for a government election — never, by design (§0.2) |

### 3.5 Messages you may see

| Message | What it means | What to do |
|---|---|---|
| "You have already done this." | Ships together with backing and withdrawal (§2.2) — no such message exists in this release. | Not available yet — see §2.2. |
| "This action needs one more step." | You tried a counting action (being counted, a binding vote, or standing) as an open-tier member. | Complete the government-ID check to become a counting member. That check is not switched on yet in this version — everything else about your membership keeps working (§2.3). |
| "Your request was not counted. Nothing else has changed." | Follows the message above. | Nothing further needed right now. |
| "You are already a member of <party>. You can belong to one party at a time. Leave <party> first, then join this one." | You tried to join a second party while still active in another. | Leave the named party first (§2.10), then join this one. |
| "Chapter too short: <chapters named>." | One or more of the eight chapters is missing or below the standard. | Add more to the named chapters, then publish. |
| "A party or petition with this name already exists in your area." | Names and emblems must be unique in an area — the message says whether it is the name or the emblem that is taken, but never which party or petition holds it. | Choose another. |
| "Activation is final." | Ships together with backing and withdrawal (§2.2) — no such message exists in this release. | Not available yet — see §2.2. You may still leave the party at any time (§2.10). |
| "This device is not supported." | Design intent for a below-minimum device (§3.3) — no such message exists in this release. | Not built yet — an unsupported device is not yet detected. |
| "You do not live in this area." | Ships together with residency confirmation. | Not available yet — see §1.3. |
| "You cannot vote on this yet — your rights begin on <date>." | Ships together with voting. | Not available yet — see §2.4. |
| "You joined after this proposal opened." | Ships together with voting. | Not available yet — see §2.4. |

### 3.6 Glossary

| Word | What it means, in one sentence |
|---|---|
| **Area** | A place on a published list — country, region, city, district or ward — used instead of your address. |
| **Backing (endorsing)** | Publicly supporting a petition to start a party, once, in the area where you live. |
| **Chapter (pillar)** | One of the eight policy areas every programme must cover. |
| **Coercion-resistant** | A property a voting system has when a voter can secretly change their vote later, so nobody who pressured them can ever be sure the pressure worked. **Not true of voting in this version — see §2.6.** |
| **Counting tier / counting member** | A member who has passed the government-ID check (§1.2), and so is counted toward a party's official strength, may cast a vote that counts, and may stand as a candidate. |
| **Discussion period** | The time between a proposal being published and voting opening. |
| **Founding rules (charter)** | A party's founding document: what it is, its name, its values and its rules for changing the rules. |
| **Fork** | Starting a new party from an existing one, taking its founding document and history with you. |
| **Helpers (guardians)** | People you trust who can confirm it is really you when you need to get back in, once account recovery exists. |
| **Locked clause** | A part of the founding rules that a party chose at the start to make permanent. |
| **Official strength** | The number of counting-tier members a party has. Different from its total membership, which includes open-tier members too. |
| **Open tier** | The tier every member starts in, reachable with a phone number alone. You can read, discuss, support and organise; you are not yet counted toward a party's official strength, your vote will not decide a binding decision, and you cannot stand as a candidate. |
| **Petition** | The stage a new party is in while it gathers support. |
| **Proof** | A short piece of maths that says something is true — "I am a real adult", "I live here" — without saying who you are. Not the mechanism v1 uses today; see §1.2. |
| **Public record** | The deliberation trail for each proposal, and your own record of joining and leaving a party — both append-only inside Trumocracy's own store, ordered, with no delete path. **Neither is yet published, and neither is yet independently checkable without trusting us**; that arrives with a later audit-anchoring release. Neither is free of personal information either: our own records can link an account to the party it joined — see §2.3 and §2.6. |
| **Receipt-free** | You could not prove how you voted even if you wanted to. **Not true of voting in this version — see §2.6.** |
| **Recall** | Removing a representative before their time is up. |
| **Turnout bar (quorum)** | The minimum share of members who must vote for a decision to count. |
| **Verified** | Has passed the government-ID check that unlocks the counting tier (§1.2). Not the same as anonymous, and not the same as unique — a person with more than one legitimate government ID can still hold more than one counting account in this version. |
| **Waiting period (timelock)** | The published delay between a decision passing and it taking effect. Provisional pending OI-08 — see §2.4. |

---

## 4. Why it works this way

### 4.1 The idea in one page

This section explains the idea behind Trumocracy's design — the target every release is built
toward. **What is actually true today, in version 0.1.0, is narrower; see §1.2 and §2.6 for the
current, honest state.**

Trumocracy separates two things that political gatekeeping normally welds together: **proving you
are a real, eligible person**, and **revealing who you are**. The target design is that you prove
once that you are a unique adult living in a particular area, and from then on the platform only
ever knows that "one eligible person in this area acted" — never which person, and never that the
same person also acted somewhere else.

Everything after that is meant to be arithmetic that runs by itself:

- a count that either crosses a published bar or does not,
- a membership that anyone can join and nobody can veto,
- a vote that is one per person and cannot be sold, lent or given away,
- and a removal that happens automatically when the bar is met.

There is no override button, because we did not build one.

### 4.2 Why there is nobody to appeal to

Every time this product hit a hard problem, the easy fix was an admin button. Every time, we said no.

If a person at Trumocracy could approve, reject, promote, demote, delete or reorder anything inside
a party, we would have rebuilt the thing we set out to abolish — and that button would be demanded
by every government, every court and every angry founder, and eventually used.

The honest cost is this: **a party can make a decision that is unwise, or the result of a mistake,
and nobody outside that party can undo it.** Your remedies are the party's own rules, your right to
leave, and — later — the right to fork. We would rather tell you that than pretend otherwise.

### 4.3 Your privacy: what is public, what is not published, and what we could be ordered to hand over

| Thing | Who can see it |
|---|---|
| A party's programme and founding rules | **Everyone**, forever |
| The number of people backing a petition | **Everyone** |
| **That you personally backed a petition** | **On the public record** — under a made-up name, but visible. See §2.2. |
| A party's total membership, and its official (counted) strength | **Everyone**, as numbers — never as a list of names |
| **That you personally are a member** | **Not published anywhere.** But Trumocracy's own records can link your account to your party in this version — see §2.3, §2.6. |
| Proposals and the discussion around them | **Everyone** |
| **How you voted, once voting exists** | **Not published, and not shown to other members or the public.** But Trumocracy's own database will be able to see it — see §2.6. |
| A candidate's or office-holder's real name | **Everyone** — because they chose it, in a separate consent step (§2.7) |
| An office-holder's votes made in that role | **Everyone** |
| **An ordinary member's votes, once voting exists** | Not shown to other members, or to the party, or to the public. Trumocracy's own database can see it — see §2.6. |
| Your identity documents, biometrics or a selfie | **Nobody** — the government-ID check, once built, discards these; they are never stored |
| Your home address, postcode or location | **Nobody** — the app has no place to put one |
| Your name, date of birth or the number on your document | **Nobody** — the government-ID check, once built, keeps only that you are a real, legal-age person and a one-way scrambled reference used to stop duplicate counting accounts (§1.2) |

**What happens if a government orders us to hand things over.** We answer honestly, and in this
version the honest answer is often "here is what our own records actually hold" — not "we have
nothing."

| What we could be ordered to produce | What we could actually produce, in this version |
|---|---|
| "Which account belongs to party X's members" | **Our own records can link an account to the party it joined** — that link is real in this version (§2.3). We would still not hold that member's real name, address or identity documents; we could produce an account-to-party link, not a name-to-party list. |
| "Tell us how this account voted" | **Once voting exists, our own database will hold that record**, because v1 voting uses a conventional, authenticated database — see §2.6. This is exactly the gap that section describes, and it will remain true until the receipt-free upgrade (Phase 3) is built and switched on. |
| "Take down party Y" | **We have not built a way to do that.** No button, no admin panel anywhere in the app lets anyone — including us — delete, freeze or hide a party's record through the product. We could be ordered to stop serving the website from our own systems. **In this version, the record lives in a conventional database we operate** — append-only by design (no delete path in the code), but not yet anchored to anything outside our own systems, so we cannot yet offer the stronger guarantee that nobody, including us, could alter the underlying data directly. That independent, tamper-evident guarantee is a later release, not this one (§2.12). |
| "Stop this citizen taking part" | **We have not built a way to do that either.** No feature in the app lets anyone single out one member and block them while leaving everyone else alone. That is a real commitment, but it rests on a feature we chose not to build, not on a cryptographic guarantee that it is impossible — in this version we operate a conventional database, so this is different from the technical impossibility v2 is designed to provide. |

This is not defiance for its own sake. It is a design choice not to build powers that, once they
exist, get demanded and used — including against us. That design choice is stronger for some
questions than others in this version, and this table says exactly which.

**Where we are still exposed, stated plainly:**

- Once the government-ID check exists, the organisation that verifies you will know you signed up
  for something. It will not know what you did afterwards. In a small place, that fact alone may be
  a hint. Sign up early, before you plan to act.
- Somebody who can watch all internet traffic could try to match up timings. The 1,000-person rule
  (§1.3, once built) reduces this. It does not remove it.
- A government can block the platform in its country. There are other ways in (§2.12), but this is a
  real cost to you, not a solved problem.
- **A published record cannot be deleted.** Your contribution to a party's programme is permanent.
  That is why authorship is under a made-up name by default: the permanence attaches to the name you
  chose, not to you.

### 4.4 Why money cannot buy a party here

There is nothing to buy.

- Membership cannot be purchased.
- Votes are not things. They cannot be transferred, sold, lent, given away or inherited — see §4.5
  for the current status of delegation.
- No donation of any size gives anyone standing, priority, a better place on a ballot or an extra
  vote.

**We will be honest about what we do not stop.** A rich person can still buy advertising, hire
canvassers and try to persuade people. That is a real advantage and we cannot remove it. What we
remove is the shortcut: turning money directly into control of the party machine. And once
receipt-free voting arrives (§2.6), the oldest shortcut of all — paying people for their votes —
stops working, because the payer has no way to check.

### 4.5 What Trumocracy is not building right now, and what it will never build

- **Vote delegation is not available in this release**, and it is not currently planned before
  **Phase 4** even then — and only after a review of the risk that a delegation market becomes a way
  to buy influence (`packages/protocol/src/flags.js`, ADR-007 §5). Right now, there is no transfer
  path in the code at all — a vote cannot be handed to anyone, full stop. If delegation is ever
  built, the design already caps it: one hop only, and revocable at any time.
- **Feeds, forums and messaging are not part of Trumocracy.** Parties use their own channels.
- **Moderation of political opinion by our staff will never happen.** A platform that judges
  politics is a political actor, and whoever writes those rules becomes the new gatekeeper. Where
  content is unlawful in one country, we can hide it **there**; a public log of every time we do
  that is planned, but not built yet in this release (see §0.2).
- **Running government elections. Never.** See §0.2.

---

## 5. Using Trumocracy with a screen reader, a keyboard, or in your own language

- **The design target is that every main task works with a screen reader**, with a keyboard or
  switch, and at 200% text size. **This has not yet been manually verified** in this release — no
  automated accessibility gate and no manual screen-reader pass have been completed (NFR-011, Doc
  08 §3.1). Please tell us if something does not work for you (§6).
- **The design target is WCAG 2.2 Level AA conformance**, with zero failures before launch. **This
  release has not yet been audited against that target.** We are stating the target and the current
  status separately, on purpose, rather than claiming conformance we have not checked.
- **Launch target: eight languages, including a right-to-left language (NFR-013).** This release
  ships **two**: English, and Arabic as a working engineer translation awaiting native-speaker
  review before launch (owner: this document's author, pre-launch — see the open item below).
- **Design target: a slow connection and an old phone.** Every built task is designed to work on a
  five-year-old phone and a very weak connection (NFR-012). **No device-lab measurement has been
  performed in this release** — nothing has been checked on an actual low-end phone yet (Doc 08
  §3.1).
- **Nothing you must remember.** No codes, no phrases, no passwords to memorise.

---

## 6. Get help and give feedback

| What you need | Where | When |
|---|---|---|
| Help using the app | The **Help** section in the app | Published with each release |
| Whether the service is up | The public status page listed in the release notes (Doc 09 — `Status: In Review`, not yet approved for production; see the note below) | Always |
| Report a problem | The **Report a problem** link in the app | Published with each release |
| Read the code and check it yourself | The public source repository | Always |

> The exact links, addresses and support hours for version 0.1.0 are **not yet published**. They
> ship with the release. Until then, this guide cannot list them, and it will not guess.

Support can never see how you voted, which parties you belong to, or who you are — beyond what our
own records already hold as described in §2.3, §2.6 and §4.3. If someone contacts you claiming to
be from Trumocracy and asks you for information beyond what this guide says we hold, **it is not
us.**

---

## 7. What is new in this version

**Version 0.1.0 — the first public practice release.**

New in this release: joining and leaving a party, one active membership at a time; drafting a party across the
eight chapters; petitions with a published bar; parties opening automatically once their bar is
met; taking part in the discussion, and putting an idea forward once you declare yourself a Worker;
an honest open-tier vs counting-tier disclosure the moment it matters; an append-only record, inside
Trumocracy's own store, of the deliberation trail for each proposal and your own record of joining
and leaving a party; and everything free, with nothing to buy.

Not in this release, and coming later: a working identity check — phone and government-ID (§1.2);
confirming your area (§1.3); backing and withdrawing support for a petition (§2.2); casting a vote
and seeing a result (§2.4); vote privacy that cannot be forced (§2.6); manifesto promises with
tracked status (§2.5); standing for a position (§2.7); recall (§2.8); getting your account back if
you lose your phone (§2.9); forking (§2.11); party treasuries; and fully private support for
petitions.

**And once more, because it matters:** in this release, there is no working screen yet for proving
who you are beyond an assumed phone number, and voting itself does not exist yet. When it does, it
will not be private from Trumocracy's own records until a later release. **This release is a
rehearsal. Please do not organise for real on it where being identified — or being unable to pass
the identity check at all — could hurt you.**

The full technical list of what changed is in the Release Notes (Doc 09) — itself still `Status:
In Review` and not approved for production (see the open item below).

---

### Open items this guide cannot close itself

These are named here, per role, because Doc 14 can only describe what other documents and the
shipped code establish — it cannot fix them.

1. **Doc 09 (Release Notes) is stale relative to FR-131/ADR-024.** Doc 09 v1.0.1 (`Last updated:
   2026-08-21`) predates the 2026-08-23 approver decision that split v1 (conventional database) from
   v2 (ZK/MACI), and its own "What this release does not do" section still states "Your vote in this
   release is anonymous, but it is not yet receipt-free" — the same forbidden framing this rework
   removed from Doc 14. **Owner: sre (Chen Wei), Doc 09.** Doc 14 does not repeat Doc 09's framing
   anywhere in this version; §2.6 and §4.3 carry the corrected FR-131 disclosure instead.
2. **OI-08 (governance-constant normative values)** — owner: architect (Tomás Ferreira), per Doc 02
   §13. Until it closes, the membership-tenure, timelock and recall-bar figures printed in §2.4,
   §3.2 and §2.8 remain provisional. This guide now says so at each location; it cannot close OI-08
   itself.
3. **Arabic native-speaker translation review** — owner: this document's author (Nadia Hassan),
   pre-launch, per Doc 06 §7 #17 and `apps/web/src/i18n/ar.ts`'s own header comment ("Doc 14 owns
   the reviewed copy for launch languages"). Not done as of this version; recorded in §3.3 and §5.
4. **The `/verify` screen ships inert.** `apps/web/src/app/verify/page.tsx` is reachable from
   navigation but its "Choose who checks you" action has no handler — it does nothing when pressed,
   and it presents the v2 multi-issuer design (passport chip, civil registry, verification desk)
   rather than the v1 FR-132 phone/government-ID model. This guide (§1.2, §3.1) describes the page as
   reachable but non-functional, and separates the v2 content it shows from the v1 model that is
   actually specified. **Owner: engineer, for a decision on whether to remove, disable, or wire this
   page before Gate 2** — recorded here for the project-manager to route.

---

### Upstream / Downstream

Sourced from the PR-FAQ (Doc 01), the requirements (Doc 02, particularly §4.40–§4.47 and §13), the
architecture (Doc 03 §5.6, §10.13, §16), the backlog and screens (Doc 05), the build record (Doc 06
§7), the traceability matrix (Doc 08 §3.1 and gap log), the release notes (Doc 09 — In Review), and
the protocol constants and shipped copy in `packages/protocol/src/constants.js`, `flags.js` and
`apps/web/src/i18n/en.ts`. Updated every release. Anything shipped that is not findable here is a
documentation gap.
