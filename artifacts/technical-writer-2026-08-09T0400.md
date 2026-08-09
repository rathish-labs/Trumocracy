# Session memory — technical-writer — 2026-08-09T04:00Z

**Role:** technical-writer · **Product:** Trumocracy · **Phase:** Launch (pre-Gate 2)
**Artifact written:** `docs/14-user-guide.md` (UG-TRUMOCRACY v1.0.0, Status: In Review)
**Nothing else written or edited.** No code, no design, no requirements, no test artifacts.

## What I did

Wrote the end-user guide for release **0.1.0** (Phase-1 walking skeleton, public testnet), from
`docs/templates/14-user-guide.template.md`, in Diátaxis order (tutorials → how-to → reference →
explanation), for an ordinary citizen at grade-8 reading level with no crypto vocabulary.

Sources read and grounded against:
- `CLAUDE.md`; `docs/templates/14-user-guide.template.md`
- Doc 01 (PR-FAQ — voice, tenets, non-goals, the hard questions)
- Doc 02 (BR/FR/NFR, Gherkin AC, CON-001, TD-01..TD-06, glossary)
- Doc 03 §5.6 state models, §11 failure modes, §7.1/§7.2 (access paths), §13 debt
- Doc 05 (US-0001..US-0070 Gherkin — the flows), §7 screen inventory
- Doc 06 §6 flag ledger, §7 known limitations
- Doc 09 (release notes 0.1.0 — what shipped, flag posture, REL-LIM-01..14)
- `packages/protocol/src/constants.js`, `packages/protocol/src/flags.js`
- ADR-002 (recovery), ADR-003 (personhood paths/tiers), ADR-004 (residency, k≥1000, denominator),
  ADR-006 (coercion resistance / MACI), ADR-008 (tiers, surge, entrenchment, fork), ADR-013 §3
  (compulsion table — rendered as a citizen-readable table)

## Sections delivered (all 13 requested, mapped onto the template)

1. §0.2 What Trumocracy is / is not (CON-001 stated in the first screenful)
2. §1.2 Prove you are a real person (5 paths, "a proof leaves your phone, never your document",
   honest "if you have no accepted document" subsection)
3. §1.3 Show where you live without giving an address (+ the k≥1000 anonymity-set rule and why the
   app escalates to a larger area)
4. §2.1 Start a new party (eight chapters, `max(pct×pop, pct×verified, 500)`, automatic activation)
5. §2.2 Support a petition (public by default, withdraw before activation)
6. §2.3 Join a party (no approval, one vote always)
7. §2.4 Proposals and voting (four tiers in plain words, tenure gates, discussion, timelock, surge)
8. §2.6 ⚠️ The receipt-freeness warning — unsoftened, with what is coming, when, and what to do now
9. §2.7 Stand for a position (self-nomination, consent, irreversible) — marked **not yet available**
10. §2.10 Leave / §2.11 Fork (10%, 30-day cooling-off) — fork marked **not yet available**
11. §2.12 If something goes wrong (lost phone, failed proof, app will not load, check the record)
12. §4.3 Privacy table + plain-language ADR-013 §3 compulsion table
13. §3.6 Glossary (15 terms, one sentence each)

Plus §3.2 "the numbers in one place", §3.5 message table, §5 accessibility/localisation, §6 help,
§7 what's new.

## Key writing decisions

- **Release honesty over feature completeness.** 0.1.0 has `elections`, `recall`, `fork`,
  `treasury`, `maci_voting`, `private_endorsement`, `delegation` OFF in prod (`flags.js`,
  Doc 06 §6, Doc 09). Those flows are documented but each carries an explicit
  "Not available in version 0.1.0 — Phase 3/4" banner, per the brief's flag rule.
- **REL-LIM-01 surfaced to the citizen.** Verifiers are mocks in this drop, so personhood/privacy
  guarantees are simulated. Stated in §0.1 and §2.6 rather than buried.
- **REL-LIM-13 surfaced.** Interim tallies are readable from the public record by a determined
  observer; the client/indexer suppression is a UI behaviour, not a guarantee.
- **No dwell period documented.** FR-018 requires one; OI-08 leaves the value unset and Doc 09
  describes shipped behaviour as "count reaches the requirement → anyone may activate". Documented
  the shipped behaviour, no invented number.
- **No activation percentage claimed.** OI-01 is open; guide says the share is 2% by default,
  settable 0.5%–20%, **set per area and published before any petition opens there**.
- **Sponsorship exhaustion documented as queue-and-delay, never charge** (FR-061 + NFR-005, both
  Must). Doc 09's "fall back to paying their own sub-cent fee" line is a conflict — see below.
- **No URLs invented.** §6 and §2.12 say the addresses/links ship with the release and refuse to
  guess. Marked as a gap.
- **No verifier tool claimed.** FR-055 is Should and is not in Doc 09's delivered list; the guide
  says the record is re-countable by hand and a ready-made checking tool is not in this release.
- **Jargon.** Zero occurrences of wallet, seed phrase, private key, gas, token, mint, chain, block,
  hash, blockchain, nullifier, zero-knowledge, MACI, quorum (used only as "turnout bar"), timelock
  (only as "waiting period"). Two "What this means" asides (proof, area). No "simply", "just",
  "easy". "Passkey" avoided — written as "the fingerprint or face unlock you already use".

## IDs touched

- **Wrote:** none (the User Guide mints no IDs).
- **Referenced, not modified:** BR-001..BR-012 · FR-001..FR-061 (esp. FR-001..011, 014..028,
  030..036, 040, 042..047, 054, 056, 058..061) · NFR-001..NFR-026 (esp. 002, 003, 005, 011..014,
  023) · CON-001..CON-008 · US-0001..US-0070 · SCR-01..SCR-20 · EP-01..EP-10 · FE-001..FE-028 ·
  ADR-002, 003, 004, 006, 008, 013 · REL-LIM-01..REL-LIM-14 · OI-01, OI-08, OI-09 ·
  TD-01..TD-06 · flags: petitions, party_governance, elections, recall, maci_voting,
  private_endorsement, delegation, treasury, fork, l1_force_inclusion, sponsored_gas.

## Open items / gaps for the next role

1. **CONFLICT (needs a decision):** Doc 09 "What a citizen can/cannot do" says a citizen may
   *"fall back to paying their own sub-cent fee if sponsorship is exhausted"*, while FR-061 and
   NFR-005 (both **Must**) say the action is queued and the citizen is charged **USD 0.00 in all
   cases**. The guide documents the Must-requirement behaviour (queue, never charge). One of the
   two must be corrected.
2. **Support/status/report links and the alternative access addresses are not published.** §6 and
   §2.12 carry a visible "not yet published" marker. Owner: sre (Chen Wei) at release.
3. **Dwell period (OI-08)** and **activation percentage per area (OI-01)** remain unset; the guide
   is written so that neither number is needed. Both must be published before the first petition.
4. **Minimum-substance standard (OI-09)** described qualitatively ("a published minimum amount of
   writing, shown in the app"); the concrete standard is not yet documented product behaviour.
5. **Accessibility conformance is claimed as a target, not evidence** — no audit has been run
   (`NFR-011` unmeasured, Doc 09). §5 says so explicitly. Replace with the conformance report at
   Gate 2.
6. **`FR-005` (revocation/appeal) has no story (Doc 05 §12 gap).** The guide documents an appeal
   route only as far as FR-005 states it ("no more personal data than the original check").
7. **Guide must be re-cut for the Phase-3 release**: §2.6, §2.7, §2.8, §2.11 and §3.4 all change
   the day `maci_voting`, `elections`, `recall` and `fork` are enabled.

## Gate hand-off

Doc 14 v1.0.0 is **In Review**. Per CLAUDE.md it needs a **business-mode `document-review`** report
from a neutral (non-technical-writer) role in `artifacts/reviews/14-user-guide-v1.0.0-business-cycle1.md`
before it can advance. **Doc 14 does not clear Gate 2 by itself** — Gate 2 (MS-13) also needs the
RTM (Doc 08) at zero Must gaps, green suites (Doc 07), a proven rollback, and the audits. Doc 09's
sre decision is **HALTED**, and that is unchanged by this document.

**Next role:** neutral reviewer running `document-review` (business mode) over `docs/14-user-guide.md`
v1.0.0; then product-owner (Priya Raghunathan) for Gate-2 sign-off of the guide when the release is
actually ready.
