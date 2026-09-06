> **This file is a transcription spec, not the document itself.** `Edit` is disabled for this
> subagent and whole-file `Write` truncates large files, so I cannot touch `docs/14-user-guide.md`
> directly. Every change below is a byte-exact `FIND` (copied from `docs/14-user-guide.md` v2.0.0)
> paired with the exact `REPLACE WITH` text, or an `INSERT AFTER` anchor with `INSERT THIS TEXT`.
> The project-manager (or whoever holds `Edit`/`Write` on `docs/`) applies these mechanically, in
> any order — every FIND string was checked for uniqueness in the file before being selected.
>
> **This file also serves as my session-memory note** (role: technical-writer, session:
> 2026-09-01T1015). See "Session memory" at the end for what was done, decisions made, open items,
> and IDs touched.

---

# Doc 14 User Guide — cycle-3 rework spec (v2.0.0 → v2.1.0)

**Source review:** `artifacts/reviews/14-user-guide-v2.0.0-business-cycle2.md` — cycle 2, 78%,
FAIL, 1 Critical / 3 High / 3 Medium / 4 Low.

**Verification method.** Before writing any fix below, I re-derived every finding against its
cited source, not against the review's prose: `apps/web/src/i18n/en.ts` (`trailV1Note`,
`joinPrivate`, `workerGateBody`, `workerConsentPermanent`, `workerConsentPublicRecord`,
`workerConsentNoApproval`, `nonViolenceTitle`, `nonViolenceHelp`), `packages/sdk/src/proposals.js`
(`ProposalService.fileProposal`/`_requireAuthor`/`admitToBallot`), `apps/web/src/app/proposals/page.tsx`
and `apps/web/src/components/ProposalsAndDebate.tsx`, `apps/web/src/components/EightPillarForm.tsx`
and `packages/protocol/src/constants.js` (`NON_VIOLENCE_CLAUSE`, `PETITION.MIN/MAX_DURATION_SECONDS`),
`apps/web/src/components/PetitionProgress.tsx` and `PartyMembership.tsx`,
`apps/web/src/app/petitions/new/page.tsx` and `apps/web/src/app/parties/page.tsx`,
`apps/web/src/app/verify/page.tsx`, `apps/web/src/components/SiteHeader.tsx`,
`packages/sdk/src/party-creation.js` (`publishDraft` signature), and
`artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md` (the two-axis approver
ruling). **Every finding checked out.** No disputes — see "Verification notes" at the end for the
one place I went slightly beyond the review's suggested wording and why.

---

## Change 1 — Header: version, date, source list

**Location:** lines 1–23 (document metadata block).

FIND:
````
# Trumocracy — User Guide

```
Document ID:   UG-TRUMOCRACY
Version:       2.0.0
Status:        In Review
Owner / Author: Nadia Hassan — Technical Writer (Docs, Accessibility & Localisation)  (Responsible)
Accountable:    Priya Raghunathan — Product Owner  (signs off at Gate 2)
Source:         PR-TRUMOCRACY (Doc 01 v2.0.0, Approved) ·
                SRS-TRUMOCRACY (Doc 02 v2.16.3, Approved — §4.40–§4.47, §13) ·
                SDD-TRUMOCRACY (Doc 03 v2.11.2, Approved — §5.6, §10.13, §16) ·
                BKLG-TRUMOCRACY (Doc 05 v2.3.0, In Review) ·
                CODE-TRUMOCRACY (Doc 06 v2.4.3, Approved — §7 "Known limitations of this drop") ·
                RTM-TRUMOCRACY (Doc 08 v2.7.0, Approved — §3.1 and the gap log; 138 Must rows,
                16 COMPLETE, 122 OPEN) ·
                REL-trumocracy-0.1.0 (Doc 09 v1.0.1, In Review — NOT approved for production;
                pre-dates the 2026-08-23 v1/v2 split and is stale on voting-privacy wording —
                see the open item at the end of this document) ·
                packages/protocol/src/constants.js · packages/protocol/src/flags.js ·
                apps/web/src/i18n/en.ts · apps/web/src/app/* ·
                ADR-002, ADR-003, ADR-004, ADR-006, ADR-008, ADR-013, ADR-016, ADR-024, ADR-025
Last updated:   2026-08-31
```
````

REPLACE WITH:
````
# Trumocracy — User Guide

```
Document ID:   UG-TRUMOCRACY
Version:       2.1.0
Status:        In Review
Owner / Author: Nadia Hassan — Technical Writer (Docs, Accessibility & Localisation)  (Responsible)
Accountable:    Priya Raghunathan — Product Owner  (signs off at Gate 2)
Source:         PR-TRUMOCRACY (Doc 01 v2.0.0, Approved) ·
                SRS-TRUMOCRACY (Doc 02 v2.16.3, Approved — §4.40–§4.47, §13) ·
                SDD-TRUMOCRACY (Doc 03 v2.11.2, Approved — §5.6, §10.13, §16) ·
                BKLG-TRUMOCRACY (Doc 05 v2.3.0, In Review) ·
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
````

---

## Change 2 — Insert the v2.1.0 changelog entry

**Location:** end of the "### Document history" section, immediately after the v2.0.0 entry's
closing paragraph and before the `---` separator (around line 76).

INSERT AFTER:
````
Every fact in §1, §2, §3.1, §3.4 and §7 below is re-derived from Doc 06 §7 ("Known limitations
of this drop") and Doc 08 §3.1 (the RTM), not from a feature description written before those
artefacts existed. Nothing about the writing itself changed on the reviewer's instruction — the
plain-language register, the "what this is not" section, and the §3.2 numeric reference (checked
line by line against `packages/protocol/src/constants.js` and found accurate) are preserved.
````

INSERT THIS TEXT:
````

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
````

---

## Change 3 — §0 table: distinguish "Last reviewed" from "Last updated" (ISS-C2-07, Low)

**Location:** lines 86–88.

FIND:
````
| Product version this guide covers | **0.1.0** — a first, public **practice release** (see Doc 09, Release Notes — itself still `In Review`) |
| Last reviewed | 2026-08-31 |
| Get help | See §6 |
````

REPLACE WITH:
````
| Product version this guide covers | **0.1.0** — a first, public **practice release** (see Doc 09, Release Notes — itself still `In Review`) |
| Last reviewed (independent business review) | 2026-08-31 — cycle 2, see `artifacts/reviews/14-user-guide-v2.0.0-business-cycle2.md`. This is not the same date as `Last updated` in the header above, which tracks when the writer last changed this document's content. |
| Get help | See §6 |
````

---

## Change 4 — §0.2: remove the unbuilt "gather public support" claim, qualify authoring (ISS-C2-02, ISS-C2-03)

**Location:** lines 119–130.

FIND:
````
**Trumocracy helps people build and run political parties.**

You can, today:

- write a full party programme,
- gather public support for it,
- watch the party open by itself when enough people back it,
- join any open party, and
- put ideas to the members and take part in the discussion.

Casting a vote on those ideas is not built yet — see §2.4. Once it is, every counting member gets
exactly one vote.
````

REPLACE WITH:
````
**Trumocracy helps people build and run political parties.**

You can, today:

- write a full party programme and open it as a petition,
- join any open party,
- take part in the discussion, and put an idea to the members once you declare yourself a Worker
  (§2.4), and
- watch a party's petition open into a party once its bar is met.

Gathering public support for a petition — the "back this petition" step — does not have a working
screen yet; see §2.2. Casting a vote on an idea is not built yet either — see §2.4. Once voting
exists, every counting member gets exactly one vote.
````

---

## Change 5 — §1.4: retarget "Task 2" from backing to join/leave, the task that works end to end (ISS-C2-02)

**Location:** lines 266–275.

FIND:
````
### 1.4 Task 2 — Back a party you agree with

This is built today, and the fastest way to see the whole thing work.

1. Open **Petitions** and read one. → *You should see the eight chapters of its programme, how many
   people have backed it, and how many are needed.*
2. Tap **Back this petition**.
3. Confirm. → *You should see the count go up by one.*

✅ **You have taken part.** Before you do this, read §2.2 — your support is **public by default**.
````

REPLACE WITH:
````
### 1.4 Task 2 — Join a party you agree with

This is built today, end to end, and the fastest way to see the whole thing work.

1. Open **Parties** and read one's programme.
2. Tap **Join**.
3. You are a member straight away — no approval, no interview, no fee.

✅ **You have taken part.** Read §2.3 for what joining does and does not give you yet, and read §2.6
before you rely on this platform for anything that could put you at risk.

> **Backing a petition — the way a new party gets started — is not a working screen in this
> release.** There is no petitions-browse page and no "back this petition" or "withdraw" control
> yet, even though the underlying petition and activation logic exists and is exercised by the
> automated test suite. See §2.2 for what backing is designed to do, and §2.1 for how a founder
> opens a petition today.
````

---

## Change 6 — §2.1 Step 1: add the mandatory non-violence clause (ISS-C2-06)

**Location:** lines 309–335.

FIND:
````
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

Each chapter has to contain a published minimum amount of writing. The app shows you that standard
**before** you start writing, and a progress bar as you go. If you try to publish with a chapter
missing or too thin, the app **names the chapters that are short**. It never judges your politics —
the standard is about how much you wrote, never about what you believe.

**Write when you have signal.** Offline drafting — keeping your work on your phone and sending it
automatically when signal returns — is planned (NFR-012) but **not built yet** in 0.1.0. On a weak
connection, save your work yourself before you lose signal rather than relying on the app to keep
it for you.

**Your name is not attached.** While you draft and petition, you appear under a made-up name of
your choosing. You choose later, and separately, whether to become a public figure (see §2.7).
````

REPLACE WITH:
````
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
````

---

## Change 7 — §2.1 Step 3: split the petition-window design range from current behaviour (ISS-C2-05)

**Location:** lines 345–351.

FIND:
````
#### Step 3 — Open the petition

Your party goes live as a **petition**: a public page where people who live in your area can back it.

- The petition runs for a window you choose, between **30 days and 365 days**.
- Everything is public: the programme, the count, the bar, and the time left.
- Nobody is ever shown who backed it, and no list of people who did *not* back it exists.
````

REPLACE WITH:
````
#### Step 3 — Open the petition

Your party goes live as a **petition**: a public page where people who live in your area can back it.

- **The design allows a window between 30 days and 365 days.** In this release, every petition runs
  the **30-day minimum**, fixed by the app — there is no control yet for a founder to choose a
  longer window.
- Everything is public: the programme, the count, the bar, and the time left.
- Nobody is ever shown who backed it, and no list of people who did *not* back it exists.
````

---

## Change 8 — §2.1 Step 5: qualify the "records permanently" claim (ISS-C2-01)

**Location:** lines 386–387.

FIND:
````
- The moment it opens, the app records permanently: the programme as written, the number of
  backers, the population figure used, and where that figure came from.
````

REPLACE WITH:
````
- The moment it opens, the app permanently records, inside its own append-only store: the programme
  as written, the number of backers, the population figure used, and where that figure came from.
  This record is not yet published outside Trumocracy, and nobody outside Trumocracy can yet check
  it independently — see §2.12 for what that means today.
````

---

## Change 9 — §2.2: convert the whole section to the forthcoming-behaviour pattern, keep the privacy warning (ISS-C2-02)

**Location:** lines 398–438.

FIND:
````
### 2.2 Support a party's petition

**Steps**

1. Open the petition and read the eight chapters.
2. Tap **Back this petition**.
3. Confirm. → *The count goes up by one.*

**Rules**

- You may back a petition **only in the area where you live**.
- **One person, one backing.** A second attempt from any device changes nothing.
- Backing cannot be sold, lent, given away or done on someone else's behalf. There is no feature
  for it, so there is nothing for a broker to buy.

#### ⚠️ Your support is public by default in this version

Backing a founding petition is a **public act**, on purpose. It is closer to signing a public
petition in the street than to casting a secret ballot. Public backing is what gives a petition its
weight.

What that means for you:

- **You back it pseudonymously.** You prove you live in the area. Your real name is not shown.
- **But the act itself is on the public record**, and in a small area, or if people already know
  your made-up name, that can be enough for someone to work out who you are.
- A **fully private** way to back a petition is a planned design option for high-risk places. It is
  **not switched on in this version.**

**So: only back a petition if you are comfortable being seen to support it.**

Backing a petition and voting inside a party are different things — see §2.4 and §2.6.

#### You can withdraw before the party opens

- You may withdraw at any time **before** the party opens. The count drops by one, and nobody is
  told who withdrew.
- After the party opens, you cannot withdraw. Opening is final. The app will tell you so.

Withdrawing removes your support. It does not stop you joining the party later if you change your
mind again.
````

REPLACE WITH:
````
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
````

---

## Change 10 — §2 index table: HT-002 and HT-004 (ISS-C2-02, ISS-C2-03)

**Location:** lines 291–294.

FIND:
````
| HT-001 | Start a new party | Yes | §2.1 |
| HT-002 | Support a party's petition | Yes | §2.2 |
| HT-003 | Join a party | Yes | §2.3 |
| HT-004 | Put an idea to your party, and take part in the discussion | Yes — casting a vote is **not yet** | §2.4 |
````

REPLACE WITH:
````
| HT-001 | Start a new party | Yes | §2.1 |
| HT-002 | Support a party's petition | **Not yet** | §2.2 |
| HT-003 | Join a party | Yes | §2.3 |
| HT-004 | Take part in the discussion, and put an idea forward once you declare yourself a Worker | Yes — discussion is open to all; casting a vote is **not yet** | §2.4 |
````

---

## Change 11 — §2.4 opening: correct authoring, add the Worker-declaration subsection (ISS-C2-03)

**Location:** lines 485–495.

FIND:
````
### 2.4 Put an idea to your party, and take part in the discussion

Any member — including an open-tier member who has not passed the government-ID check — can put an
idea to the party, and every member can join the discussion. Nobody screens, delays, hides or
reorders a proposal.

**Casting an actual vote and seeing a result are not available yet in version 0.1.0.** What exists
today is putting a proposal forward and discussing it; what does not exist yet is the ballot screen
itself (see "What's built so far", below). The rest of this section describes the whole model —
built and not-yet-built parts together — so you understand what you are looking at when you use it,
and what to expect once voting ships.
````

REPLACE WITH:
````
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
````

---

## Change 12 — §2.4 "what's built today": opening a question and answering it are the same gated step (ISS-C2-03)

**Location:** lines 558–564.

FIND:
````
#### The discussion — what's built today

Any member may put a question to the party and any Worker-tier-or-above member may put forward a
competing answer with equal standing (see §2.7 for what "Worker tier" means — declaring it is your
own choice, and nobody approves it). Every member, including an open-tier member, can take part in
the discussion itself. Every step — the question, each proposal, and what is said — is written down
in order and never changed.
````

REPLACE WITH:
````
#### The discussion — what's built today

**Putting a question to the party and putting forward a competing answer are the same step, and
both require declaring Worker first** — there is no separate, lower-gated way to only ask a
question (see "Declaring yourself a Worker", above). Every member, including an open-tier member,
can take part in the discussion itself without declaring Worker. Every step — the question, each
proposal, and what is said — is written down in order and never changed.
````

---

## Change 13 — §2.7: point to the relocated Worker-declaration paragraph instead of restating it (ISS-C2-03)

**Location:** lines 716–718.

FIND:
````
**Declaring yourself a Worker.** You do not need to wait for Phase 3 to make your record of taking
part in a party public — you can say you are a Worker at any time (§2.4). Nobody approves it, it
lasts for the term, and it is a separate, smaller step than standing for a position.
````

REPLACE WITH:
````
**Declaring yourself a Worker** is a separate, smaller step than standing for a position below, and
it does not wait for Phase 3 — see "Declaring yourself a Worker" in §2.4 for exactly what it does
and the two things you confirm before you do it.
````

---

## Change 14 — §2.12: the public-record / tamper-evidence claim, corrected to v1 truth (ISS-C2-01)

**Location:** lines 868–873.

FIND:
````
1. **Open the record.** Every action taken so far — every backing, every join, every proposal, every
   piece of discussion — is published and cannot be altered afterwards. If anyone alters a record,
   anyone else can detect it.
2. **Re-count what is public.** The figures behind petitions and party status are public, so a
   journalist, a researcher or a neighbour can add them up again and compare. A ready-made checking
   tool for non-experts is **not part of this release**; it is planned.
````

REPLACE WITH:
````
1. **Read what the app shows you.** Every action taken so far — every backing, every join, every
   proposal, every piece of discussion — is kept in an **append-only record inside Trumocracy's own
   store**: entries are ordered, there is no delete path, and every read returns a copy, so nothing
   you are shown can be quietly rewritten behind your back. **This record is not yet published, and
   nobody outside Trumocracy can yet check it without trusting us to report it honestly** — that
   independent, publish-and-verify guarantee arrives with a later audit-anchoring release. Today,
   the app itself is the only place to read it.
2. **Re-count what is public.** The figures behind petitions and party status are public, so a
   journalist, a researcher or a neighbour can add them up again and compare. A ready-made checking
   tool for non-experts is **not part of this release**; it is planned.
````

---

## Change 15 — §3.1: "Before you sign up" row understated what exists (ISS-C2-09, Low)

**Location:** line 889.

FIND:
````
| Before you sign up | Plain statement of what is and is not kept | **Not yet built** — see §1.2 |
````

REPLACE WITH:
````
| Before you sign up | Plain statement of what is and is not kept | Yes — the disclosure text is shown today; the enrolment action behind it does not work yet (open item 4) |
````

---

## Change 16 — §3.1: Petitions, Back/withdraw, "how the bar is worked out", Opening record, Party home rows (ISS-C2-02, ISS-C2-04)

**Location:** lines 894–898.

FIND:
````
| Petitions | Browse and read petitions | Yes |
| Back / withdraw | Support a petition, or take your support back | Yes |
| How the bar is worked out | The population figure, its sources, and the sum | Yes |
| Opening record | What was recorded the moment a party opened | Yes |
| Party home | Programme, total membership, breakdown by area | Yes |
````

REPLACE WITH:
````
| Petitions | Browse and read petitions | **Not yet built** — no petitions-browse screen exists in this release; see §2.2 |
| Back / withdraw | Support a petition, or take your support back | **Not yet built** — no backing or withdrawal control exists in this release; see §2.2 |
| How the bar is worked out | The supporters count, the number needed, and the number remaining | Yes — shown on the petition-progress screen today. The population figure, its sources, and a "why this number" explanation are not shown in this release's petition-creation flow |
| Opening record | What was recorded the moment a party opened | **Not yet built** — no such screen exists in this release |
| Party home | Total membership and official strength (as numbers), plus join and leave | Yes. **Not shown:** the party's programme, and any breakdown by area |
````

---

## Change 17 — §3.1: Public-record row (ISS-C2-01)

**Location:** line 906.

FIND:
````
| Public record | Every action taken so far | Yes — a log of content hidden for legal reasons is **not yet built** |
````

REPLACE WITH:
````
| Public record | Every action taken so far, inside the app | Yes, to read within the app — **not yet published outside Trumocracy, and not yet independently checkable** (see §2.12). A log of content hidden for legal reasons is **not yet built** |
````

---

## Change 18 — §3.2: petition-window row, design range vs current behaviour (ISS-C2-05)

**Location:** line 921.

FIND:
````
| How long a petition may run | **30 – 365 days** |
````

REPLACE WITH:
````
| How long a petition may run | Design range: **30 – 365 days**. **In 0.1.0, every petition runs the fixed 30-day minimum** — there is no control yet to choose a longer window. |
````

---

## Change 19 — §3.4: full table, three findings at once (ISS-C2-01, ISS-C2-02, ISS-C2-03)

**Location:** lines 997–1011.

FIND:
````
| You can, today | You cannot yet |
|---|---|
| Start a party and open a petition (§2.1) | Complete a real identity check — phone or government-ID (§1.2) |
| Back a petition, and withdraw before it opens (§2.2) | Confirm your area (§1.3) |
| Watch a party open by itself (§2.1) | Cast a vote, or see a result (§2.4) |
| Join and leave any party, freely (§2.3, §2.10) | Get your account back if you lose your phone (Phase 3 — §2.9) |
| See whether your membership counts, and why (§2.3) | Stand for a position (Phase 3 — §2.7) |
| Put an idea to a party and take part in the discussion (§2.4) | Vote out a representative (Phase 3 — §2.8) |
| Read the public record of what has happened so far (§2.12) | Fork a party (Phase 3 — §2.11) |
| | Use a party treasury (Phase 3) |
| | Publish promises with a tracked, permanent version history (§2.5) |
| | Back a petition fully privately |
| | Cast a vote you could not be made to prove — coercion-resistant voting (Phase 3 — §2.6) |
| | Give your vote to someone else — not available now, and not currently planned before Phase 4 even then, pending a review of the risk of vote-buying (§4.5) |
| | Use Trumocracy for a government election — never, by design (§0.2) |
````

REPLACE WITH:
````
| You can, today | You cannot yet |
|---|---|
| Start a party and open a petition (§2.1) | Complete a real identity check — phone or government-ID (§1.2) |
| Watch a party open by itself (§2.1) | Confirm your area (§1.3) |
| Join and leave any party, freely (§2.3, §2.10) | Back a petition, or withdraw your support — no backing screen exists yet (§2.2) |
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
````

---

## Change 20 — §3.6 Glossary: "Public record" entry (ISS-C2-01)

**Location:** line 1046.

FIND:
````
| **Public record** | The permanent, shared list of every action taken on the platform. It contains no personal information and nobody can alter it, including us. |
````

REPLACE WITH:
````
| **Public record** | The permanent, append-only list of every action taken on the platform, kept inside Trumocracy's own store — ordered, with no delete path. **It is not yet published, and it is not yet independently checkable without trusting us**; that arrives with a later audit-anchoring release. It is not free of personal information either: our own records can link an account to the party it joined — see §2.3 and §2.6. |
````

---

## Change 21 — §4.3: "Take down party Y" row, say what a v1 operator actually holds (ISS-C2-01)

**Location:** line 1116.

FIND:
````
| "Take down party Y" | **We have not built a way to do that.** No button, no admin panel anywhere in the app lets anyone — including us — delete, freeze or hide a party's record. We could be ordered to stop serving the website from our own systems; we could not alter what has already happened, because the record of every past action is kept and cannot be edited (§2.12). |
````

REPLACE WITH:
````
| "Take down party Y" | **We have not built a way to do that.** No button, no admin panel anywhere in the app lets anyone — including us — delete, freeze or hide a party's record through the product. We could be ordered to stop serving the website from our own systems. **In this version, the record lives in a conventional database we operate** — append-only by design (no delete path in the code), but not yet anchored to anything outside our own systems, so we cannot yet offer the stronger guarantee that nobody, including us, could alter the underlying data directly. That independent, tamper-evident guarantee is a later release, not this one (§2.12). |
````

---

## Change 22 — §5 bullet 4: device/bandwidth claim, design target + current status (ISS-C2-10, Low)

**Location:** lines 1180–1181.

FIND:
````
- **Built for a slow connection and an old phone.** Every built task is designed to work on a
  five-year-old phone and a very weak connection.
````

REPLACE WITH:
````
- **Design target: a slow connection and an old phone.** Every built task is designed to work on a
  five-year-old phone and a very weak connection (NFR-012). **No device-lab measurement has been
  performed in this release** — nothing has been checked on an actual low-end phone yet (Doc 08
  §3.1).
````

---

## Change 23 — §6: qualify the status-page row against Doc 09's review status (ISS-C2-08, Low)

**Location:** line 1191.

FIND:
````
| Whether the service is up | The public status page listed in the release notes | Always |
````

REPLACE WITH:
````
| Whether the service is up | The public status page listed in the release notes (Doc 09 — `Status: In Review`, not yet approved for production; see the note below) | Always |
````

---

## Change 24 — §7: remove "backing and withdrawing" from what shipped, qualify authoring, qualify the public-record claim (ISS-C2-01, ISS-C2-02, ISS-C2-03)

**Location:** lines 1209–1219.

FIND:
````
New in this release: joining and leaving any party, unconditionally; drafting a party across the
eight chapters; petitions with a published bar; backing and withdrawing; parties opening
automatically; putting an idea to a party and taking part in the discussion; an honest open-tier
vs counting-tier disclosure the moment it matters; a public record of everything that has happened
so far; and everything free, with nothing to buy.

Not in this release, and coming later: a working identity check — phone and government-ID (§1.2);
confirming your area (§1.3); casting a vote and seeing a result (§2.4); vote privacy that cannot be
forced (§2.6); manifesto promises with tracked status (§2.5); standing for a position (§2.7);
recall (§2.8); getting your account back if you lose your phone (§2.9); forking (§2.11); party
treasuries; and fully private support for petitions.
````

REPLACE WITH:
````
New in this release: joining and leaving any party, unconditionally; drafting a party across the
eight chapters; petitions with a published bar; parties opening automatically once their bar is
met; taking part in the discussion, and putting an idea forward once you declare yourself a Worker;
an honest open-tier vs counting-tier disclosure the moment it matters; an append-only record, inside
Trumocracy's own store, of everything that has happened so far; and everything free, with nothing
to buy.

Not in this release, and coming later: a working identity check — phone and government-ID (§1.2);
confirming your area (§1.3); backing and withdrawing support for a petition (§2.2); casting a vote
and seeing a result (§2.4); vote privacy that cannot be forced (§2.6); manifesto promises with
tracked status (§2.5); standing for a position (§2.7); recall (§2.8); getting your account back if
you lose your phone (§2.9); forking (§2.11); party treasuries; and fully private support for
petitions.
````

---

# Verification notes (spot checks performed, and where I went beyond the review's wording)

Every finding in the cycle-2 report checked out against the code. No disputes. Specifics:

- **ISS-C2-01.** Confirmed `trailV1Note` verbatim in `apps/web/src/i18n/en.ts` (line 281–283) and
  its use in `DecisionTrail` (`ProposalsAndDebate.tsx`, `data-testid="trail-v1-note"`). I did not
  reuse the exact `trailV1Note` sentence verbatim in every location (unlike the `joinPrivate`
  precedent) because that sentence is written for the proposals/debate trail specifically ("the
  record") and several of the six locations (§3.6 glossary, §4.3 operator-disclosure table) needed
  the same fact restated for a different grammatical context. I kept the three load-bearing facts
  identical everywhere: append-only in our own store (with the mechanism — ordered, no delete
  path, copies on read), not published, not independently checkable until DES-097 anchoring.
- **ISS-C2-02.** Confirmed `SiteHeader.tsx` nav has exactly three links (Parties, Start a party,
  Verify) and `apps/web/src/app` has exactly the five routes the review names — no petitions-browse
  route. Confirmed `parties/page.tsx`'s `seedParty()` writes `endorsements` directly into the
  in-memory store rather than through any UI-reachable endorse action.
- **ISS-C2-03.** Confirmed in `packages/sdk/src/proposals.js`: `fileProposal()` calls
  `_requireAuthor()` on **both** branches (window exists → competing proposal; window does not
  exist → new question), so opening a question and filing a competing answer are structurally the
  same gated call — the review's claim is exact, not approximate. Confirmed the two-axis ruling in
  `artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md` §1.3: verification axis
  (no ID gate) is CONFIRMED unchanged; disclosure axis (Worker self-declaration gates authorship)
  is explicitly UNCHANGED by that ruling. My rewrite states both axes rather than collapsing them,
  which is what the review's "get the two axes right" instruction was asking for.
- **ISS-C2-04.** Confirmed `PetitionProgress.tsx`: the `binding` prop is optional and its
  "why this number" `<details>` block only renders when `binding` is passed;
  `petitions/new/page.tsx` calls `<PetitionProgress endorsements required opensAt closesAt now />`
  with no `binding` prop. Confirmed `PartyMembership.tsx` renders `memberCount`,
  `officialStrength`, the provisional-cap notice, join/leave and the BR-020 disclosure, and
  nothing else — no programme text, no area breakdown.
- **ISS-C2-05.** Confirmed `PartyCreationService.publishDraft(draftId)` in
  `packages/sdk/src/party-creation.js` takes a single `draftId` argument, no duration parameter,
  and `PETITION.MIN_DURATION_SECONDS = 30 * DAY` / `MAX_DURATION_SECONDS = 365 * DAY` in
  `packages/protocol/src/constants.js`.
- **ISS-C2-06.** Confirmed `NON_VIOLENCE_CLAUSE` text verbatim in `constants.js` (with the
  `CLAUSE-TEXT-01` approver-ratification comment directly above it) and its non-editable rendering
  in `EightPillarForm.tsx` (`<blockquote data-testid="non-violence-clause">`). Used the exact
  clause text and the shipped `nonViolenceHelp` framing ("the only restriction the platform places
  on what a party believes") as the basis for the guide's new paragraph.
- **ISS-C2-09.** Confirmed `verify/page.tsx` renders `kept-list` and `not-kept-list` today, and
  that its `start-verification` button has no `onClick` handler — matches open item 4, which this
  version does not touch.
- All four Lows verified against the exact line numbers cited.

# Session memory

**Role:** technical-writer (Nadia Hassan). **Session:** 2026-09-01T1015. **Document:** Doc 14 User
Guide, v2.0.0 → v2.1.0 (spec only — I do not have `Edit`/`Write` on `docs/`).

**What I did:** Read the cycle-2 review report in full and the entire v2.0.0 document (1,268
lines) directly. Independently re-verified every one of the ten ISS-C2 findings against the cited
source files rather than trusting the review's prose, using `Read`/`Grep`/`Glob` against
`apps/web/src/i18n/en.ts`, `packages/sdk/src/proposals.js`, `packages/sdk/src/party-creation.js`,
`apps/web/src/components/{ProposalsAndDebate,EightPillarForm,PetitionProgress,PartyMembership,
SiteHeader}.tsx`, `apps/web/src/app/{proposals,petitions/new,parties,verify}/page.tsx`,
`packages/protocol/src/constants.js`, and
`artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md`. All ten findings checked
out with no disputes. Produced 24 anchored FIND/REPLACE (and one INSERT AFTER) changes covering
every location the review named, plus the version/changelog bump, targeting v2.1.0.

**Decisions made:**
1. §1.4 ("Task 2") is retargeted from petition-backing (no surface exists) to join/leave (§2.3,
   confirmed working end to end) per the review's explicit nomination, rather than merely marking
   the old Task 2 "not yet" and leaving a gap. Backing is fully covered as a forthcoming-behaviour
   section at §2.2 instead, with a cross-reference from the new §1.4.
2. The Worker-declaration paragraph is physically moved from §2.7 into a new §2.4 subsection
   ("Declaring yourself a Worker"), reusing `workerGateBody` / `workerConsentPermanent` /
   `workerConsentPublicRecord` / `workerConsentNoApproval` verbatim from `en.ts`, per the review's
   instruction and the ISS-03 `joinPrivate` reuse precedent. §2.7 now points to it rather than
   duplicating it.
3. ISS-C2-01's six locations are not all filled with the identical `trailV1Note` sentence — the
   three facts (append-only in our own store / not published / not independently checkable until
   DES-097) are restated in the grammar each location needs (glossary definition, compulsion-table
   answer, screen-availability row, narrative bullets). See "Verification notes" above.
4. §3.4's table is replaced as one atomic block (all thirteen "cannot yet" rows renumbered) rather
   than edited cell-by-cell, because three separate findings (ISS-C2-01/02/03) touch that one
   table and a full-table replace is lower-risk for the PM to transcribe correctly than several
   overlapping partial edits to the same table.
5. Did **not** touch: the FR-131 rewrite (§0.1, §2.3, §2.6, §3.5, §3.6 apart from the one glossary
   entry, §4.3 apart from the one row, §7's core structure), §1.2, §3.2 apart from the one duration
   row, or the source-pin discipline — all explicitly confirmed correct by cycle 2 and marked
   "not to be changed."

**Open items (unchanged from v2.0.0, still owed to other roles, not touched by this rework):**
Doc 09 staleness (owner: sre), OI-08 governance-constant figures (owner: architect), Arabic
native-speaker review (owner: this document's author, pre-launch), the inert `/verify` action
(owner: engineer, decision routed to project-manager). CLAUSE-TEXT-01 (non-violence clause
ratification) is a **new** open item surfaced by this rework — the guide now carries a provisional
marker for it at §2.1 Step 1; no document currently owns closing it, so the project-manager should
route it the same way as OI-08.

**IDs touched:** FR-077, FR-090, FR-092, FR-122, FR-123, CON-013, NFR-012, OI-08, DES-097,
CLAUSE-TEXT-01, ISS-C2-01 through ISS-C2-10, HT-002, HT-004.

**Handoff:** this spec is ready for mechanical transcription into `docs/14-user-guide.md`
(v2.0.0 → v2.1.0, `Status: In Review`). After transcription, the document is due for cycle-3 review
against this spec's 24 changes.
