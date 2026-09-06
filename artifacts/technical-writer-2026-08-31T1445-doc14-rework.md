# Session memory — technical-writer — Doc 14 rework (v1.0.0 → v2.0.0)

```
Role:      technical-writer (Nadia Hassan) — owning role for Doc 14
Timestamp: 2026-08-31T14:45:00Z
Product:   Trumocracy
Branch:    build/v1-join-membership
Phase:     Launch — document-review rework loop, cycle 1 → cycle 2 pending
Trigger:   artifacts/reviews/14-user-guide-v1.0.0-business-cycle1.md — FAIL, 54%,
           6 Critical / 7 High / 7 Medium / 4 Low
```

## What I did

Reworked `docs/14-user-guide.md` from v1.0.0 (`Status: In Review`, last updated 2026-08-09) to
**v2.0.0** (`Status: In Review`, last updated 2026-08-31) — a major bump, per the review's own
routing instruction, because the document's central safety claims were being inverted, not
adjusted. I read the full review report end to end, then verified every finding against primary
sources myself before writing (I did not take the review's characterisations on trust): Doc 02 v2.16.3
(§4.40–§4.47, §13), Doc 03 v2.11.2, Doc 06 v2.4.3 §7, Doc 08 v2.7.0 §3.1 and gap log, Doc 09 v1.0.1,
ADR-024, ADR-025, `packages/protocol/src/constants.js` and `flags.js`, `apps/web/src/i18n/en.ts` and
`ar.ts`, and the actual shipped app routes/components (`apps/web/src/app/*`,
`PartyMembership.tsx`, `ProposalsAndDebate` wiring, `verify/page.tsx`).

I did not edit any other document and did not touch code. I did not write or edit any review
report (that is `document-review`/tester territory; authoring my own review would repeat the
AL-CANDIDATE-3 violation named in my brief).

## Every Critical and High — how each was closed

- **ISS-01, ISS-02 (Critical — FR-131 vocabulary/disclosure inversion).** Removed every
  affirmative "anonymous"/"private"/"receipt-free"/"secure" use about v1 voting. Rewrote §2.6
  (now framed correctly: voting doesn't exist as a working screen yet, so the section states what
  will be true the day it ships), §0.1, §0.2, §3.1, §3.5, §3.6 (glossary) and §4.3 on the
  FR-131(a)–(c) disclosure: v1 voting will be **NOT anonymous, NOT receipt-free, NOT
  coercion-resistant**, and **the platform database CAN see vote direction and party membership**.
  "Coercion-resistant" — absent from v1.0.0 entirely — now appears in §2.6 and the glossary.
- **ISS-03 (Critical — retracted "no member list exists" claim).** Fixed in §0.2, §2.3 and §4.3
  (two rows) using the shipped `joinPrivate` copy (`apps/web/src/i18n/en.ts`) near-verbatim:
  membership is not published, but Trumocracy's own records can link an account to its party.
- **ISS-04 (Critical — missing two-tier participation model).** Added as a first-class part of
  §1.2 and a new §2.3 subsection ("Joining is open to everyone. Being counted is a separate
  step."), plus a §3.5 message-table row, using the shipped `countingOpenBody` /
  `openTierNoticeTitle` / `openTierNoticeRefused` copy verbatim. Qualified §2.3's "one vote,
  always" and §2.4's voting description accordingly.
- **ISS-05, ISS-06 (Critical — v2 ZK enrolment documented as today's task; inoperative ≥2-issuer
  safeguard presented as live).** Rewrote §1.2 completely against FR-132/ADR-025 (phone number →
  government-ID check, verify-and-discard, what's retained). Moved the e-passport/neighbour-vouch
  design into a clearly labelled "What is coming later — a v2 design" note. Stated the Phase-1
  reality plainly: Aadhaar-only, one government rail, the exclusion it creates, and that the
  ≥2-issuer / non-government-issuer rule (OI-04, OI-20, FR-004/FR-121/FR-129) is a **design target
  not yet met**, not a current guarantee. Also went beyond the review's explicit ask: I checked
  whether a working verification *screen* exists at all (it does not — `/verify` is reachable but
  its action button has no handler, and no page anywhere collects a phone number; every demo
  visitor starts open-tier automatically per Doc 06 §7 #22). §1.2 states this plainly rather than
  presenting a step-by-step flow the reader could not actually complete. Recorded the inert
  `/verify` page as a named open item for the engineer, since fixing the code is out of my lane.

- **ISS-07 (High — voting/results documented as built).** Confirmed via Doc 06 §7 #21 ("SCR-13/
  SCR-14 ballot surfaces remain owed") and the RTM (FR-030/031/032 all `G-PHASE3`; TC-3481
  Blocked). Also confirmed directly against the app: no vote-casting or results route exists;
  `VoteConfirmation.tsx` and `ReceiptFreedomBanner.tsx` exist but are imported nowhere. Marked
  HT-004's voting half, the Voting/Result screens, and the "cast a vote" row **Not yet** throughout
  §2, §3.1, §3.4; kept the proposing/discussion half, which is built.
- **ISS-08 (High — recovery documented as working).** Confirmed Doc 06 §7 #11 ("No recovery path
  is implemented") and RTM FR-058/071/072 `G-PHASE3`. Converted §2.9 to the same "Not available in
  version 0.1.0 — here's how it will work" pattern already used correctly in v1.0.0's §2.7/§2.8/
  §2.11. Removed the §1.2 "please also do this now" instruction to set up recovery helpers.
- **ISS-09 (High — residency confirmation documented as working).** Confirmed RTM FR-006
  `G-CIRCUIT` (uncompiled circuit) and FR-008 `G-NOMECH` (no change function, no cooldown at all —
  not just the cooldown). Converted the whole of §1.3 (Task 2) to "Not available," kept the 180-day
  figure as the published FR-008 value with a "not yet enforced" caveat, removed the §3.5 error-
  message row for a flow that cannot fire.
- **ISS-10 (High — manifesto promises documented as working).** Confirmed RTM FR-094/FR-095
  `G-TRACE + G-PHASE3`, no DES, no implementation. Also confirmed the `historyTitle`/`versionLabel`/
  `diffAdded` i18n strings the v1.0.0 guide implicitly relied on are not consumed by any component
  — no manifesto-history UI exists at all, so there was no narrower "charter version history
  ships, promises don't" carve-out available (I checked; the review had flagged this as a possible
  fix but the evidence doesn't support it). Marked §2.5 fully "Not available."
- **ISS-11 (High — subpoena answers describe v2 guarantees).** Rewrote both flagged rows in §4.3.
  "Tell us who cast this vote" and "Stop this citizen taking part" now state the honest v1
  position: the sealed multi-country committee is a Phase-3 capability that doesn't exist
  (`maci_voting` off; committee not constituted per Doc 09); the "we cannot" claims are restated as
  "we have not built a way to," distinguishing a feature we chose not to build from a
  cryptographic impossibility. Retitled the table from "what we could never hand over" to "what we
  could be ordered to hand over."
- **ISS-12 (High — self-contradicting WCAG claim).** §5 now states the WCAG 2.2 AA target and
  NFR-011's actual status (no gate, no manual pass) as two separate, non-contradictory sentences,
  per RTM gap-log entry 40.
- **ISS-13 (High — offline drafting promised, no implementing code).** Confirmed RTM NFR-012 `G-UI`,
  "no implementing code or test." Removed the promise from §2.1, §2.12 and §5; replaced with an
  explicit "save your own copy before you lose signal" warning in all three places.

## Mediums / Lows (ISS-14 → ISS-24)

Worked through all of them: source pins now carry version + status (ISS-15); locales restated as
2 shipped vs an 8-locale target, with the Doc 06 §7 #17 translation-quality action explicitly
picked up and assigned to myself (ISS-14, ISS-22 partial); OI-08 non-normative caveat added to the
timelock/membership-tenure figures in §2.4/§3.2 and the recall-bar example in §2.8, scoped exactly
as the review specified — turnout/agreement percentages untouched (ISS-16); the §2.6 self-check
instruction now points at the parties-directory FR-131(d) surface that actually exists instead of
a ballot-screen surface that doesn't (ISS-17); the delegation claim restated against `flags.js`
(Phase 4, pending capture-risk review, not "never") with "never, by design" reserved for
government elections only (ISS-18); §2.12's censorship-fallback claim reconciled with §6 — kept
the relay→self-pay→L1 claim (Doc 09 confirms it's tested), dropped the Settings-address
instruction (no such route exists) and the "addresses ship with each release" claim (contradicts
§6 itself) (ISS-19); the filtering-register public-log claim softened in §0.2 and §4.5 per FR-057
`no mechanism` (ISS-20); recall-bar example reframed as illustrative (ISS-21); glossary gained
open tier, counting tier, official strength, verified, coercion-resistant (ISS-22); the two "last
updated"/"last reviewed" date fields now share one value with a stated rule (ISS-23); Doc 09's
`Status: In Review` is now noted at both places it's cited (ISS-24, plus a dedicated open item —
see below, since Doc 09 turned out to be substantively stale, not just unapproved).

## A finding beyond the assigned 24 — reported, not silently fixed elsewhere

While verifying ISS-19/ISS-24 I found that **Doc 09 (Release Notes) itself still carries the
forbidden FR-131 framing** ("Your vote in this release is anonymous, but it is not yet
receipt-free") — because Doc 09 v1.0.1 (`Last updated: 2026-08-21`) predates the 2026-08-23 v1/v2
split (ADR-024) and FR-131's minting. I did not edit Doc 09 (out of lane) and did not let Doc 14
inherit its framing anywhere. I recorded this explicitly as a named open item for the sre (Chen
Wei), since Doc 09 is sre-owned.

## Things I checked and judged the review's suggested fix needed adjusting, with evidence

- **ISS-10's suggested carve-out** ("if charter version history is what ships, scope §2.5 to it")
  — checked and rejected: the version-history i18n strings are dead code (grep across
  `apps/web/src/components` finds zero consumers), so there is no narrower true claim to carve
  out. §2.5 is fully "Not available."
- **ISS-05's fix, extended:** the review asked me to move the ZK design into a "what's coming"
  note and correct step 4's sign-in. I went one step further, grounded in Doc 06 §7 #22 and the
  inert `/verify` page: there is currently no working screen for *either* model, v1 or v2. I said
  so, rather than writing step-by-step instructions for a flow nobody can complete — the same
  category of harm ISS-05 exists to prevent.
- **No finding in the review report was judged incorrect.** Every Critical and High I checked
  against primary sources matched the report's characterisation exactly, including the specific
  RTM row text, the `flags.js` fields, and the shipped i18n strings it cited.

## New open items (named owners, recorded in Doc 14's own "Open items" section)

1. Doc 09 stale relative to FR-131/ADR-024 → **sre (Chen Wei)**.
2. OI-08 (governance-constant normative values) still open → **architect (Tomás Ferreira)** — Doc
   14 now flags every affected figure as provisional; cannot close this itself.
3. Arabic native-speaker translation review, pre-launch → **technical-writer (myself)** — not done
   in this cycle; named explicitly so it isn't lost.
4. The inert `/verify` page (reachable, non-functional, shows the wrong — v2 — model) → **engineer**,
   routed via the project-manager for a remove/disable/wire decision before Gate 2.

## IDs touched

FR-121, FR-122, FR-123, FR-124, FR-125, FR-129, FR-130, FR-131 (a–d), FR-132, FR-133, FR-006,
FR-007, FR-008, FR-094, FR-095, FR-035, FR-057, FR-061, FR-030, FR-031, FR-032, FR-058, FR-071,
FR-072, NFR-002, NFR-003, NFR-011, NFR-012, NFR-013, NFR-014, NFR-025, NFR-027, BR-005, BR-006,
BR-009, BR-012, ADR-016, ADR-024, ADR-025, OI-04, OI-08, OI-19, OI-20, DES-095, DES-098, DES-100,
SCR-13, SCR-14, HT-001..HT-012.

## Gate note

The SubagentStop hook is expected to block on exit: Docs 04/05/14 lack passing `document-review`
reports (Doc 14 v2.0.0 has not been reviewed yet — that is cycle 2 of the loop, run by a neutral
reviewer, not by me). This is expected per my brief and is not mine to fix. Reporting it, then
stopping.

## Status

`docs/14-user-guide.md` — **v2.0.0, Status: In Review.** Awaiting cycle-2 `document-review`
(neutral reviewer, business mode).
