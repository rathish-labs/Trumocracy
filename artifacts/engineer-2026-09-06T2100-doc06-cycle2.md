# Engineer session note — 2026-09-06T21:00 — Doc 06 rework cycle 2 (v2.6.0 -> v2.7.0)

```
Role:    engineer (Samuel Oyelaran)
Branch:  build/v1-cascade-and-release-prep
Trigger: artifacts/reviews/06-coding-and-ut-v2.6.0-technical-cycle1.md (FAIL 94%,
         0C/0H/1M/5L; reviewer: tester Ji-woo Park, neutral). Coordinator directed the target
         version twice mid-session: first v2.6.1 (patch), then corrected to v2.7.0 (minor) —
         "a Medium FAIL takes at least a minor bump." Final version: v2.7.0.
```

## What I did — one fix per finding

The reviewer accepted the **code** as correct (byte-exact against DECISIONS §4/§5/§5.3; UT-0889
verified to satisfy all five §5.4 requirements). The FAIL was entirely on the **document**. This
rework is documentary except for the two test-file changes at ISS-03/ISS-06.

- **ISS-01 (Medium)** — §7 item 26(a)/(b)/(c), the v2.6.0 change-history "Not done in this
  session" clause, the §3 UT-inventory closing note, and the §4a "until it lands" sentence all
  published three cascades as still owed that had already closed on 2026-09-06. Fixed by
  **annotating, not deleting**, at all four sites:
  - Item 26(a): added a dated `~~(a) OWED~~ — CLOSED (v2.7.0)` block citing Doc 03 **v2.13.0,
    Approved** (§10.12.3 title-row correction at Doc 03 line 1766; three-state table note
    corrected at line 1753; §13 debt row corrected at line 2955).
  - Item 26(b): added `~~(b) OWED~~ — CLOSED (v2.7.0)` citing Doc 09 **v1.9.0, Approved**, the
    `~~REL-LIM-18~~ CLOSED` row with commit SHAs `0a5c542`/`84e2203` (Doc 09 line 909).
  - Item 26(c): added `~~(c) OWED~~ — CLOSED (v2.7.0)` citing Doc 07 **v2.6.0, Approved** and
    Doc 08 **v2.9.0, Approved**, `TC-3564`..`TC-3569` covering UT-0887/UT-0759/UT-0888, and
    corrected the FR-131 Must row characterization: it is **OPEN (G-PHASE3)** per Doc 08 (a
    requirement-completeness gap pending the unbuilt DES-098 control), not an owed TC-authoring
    item. Restated that item 26(d) (DES-098 acknowledge-to-proceed) is now the **only** open
    item under that numbered list, and rewrote item 26's header line accordingly.
  - Change history: appended a dated correction paragraph directly after the v2.6.0 entry's
    stale "Not done in this session" clause, pointing at the new v2.7.0 entry and §7 item 26 for
    the corrected state — original text preserved, not deleted.
  - §3 closing note: appended a `(v2.7.0, ISS-01 correction: ...)` parenthetical stating the
    UT-0887/UT-0759/UT-0888 rows are not owed and the FR-131 row is OPEN (G-PHASE3), not owed.
  - §4a "Recorded deviation" paragraph: appended a `(v2.7.0, ISS-01 correction: ...)` stating
    the SDD cascade landed at Doc 03 v2.12.0/now v2.13.0 Approved, so the "owed" framing no
    longer holds; UT-0759 remains named as the regression guard.
  - Advisory (same finding, folded in): header `Source:` pin advanced from `SDD-TRUMOCRACY
    v2.7.1` to `v2.13.0` to match Doc 03's current version. Historical `v2.7.1` citations
    inside earlier dated change-history entries (v2.5.1 entry, an older v2.7.0-era UI entry)
    were left untouched — they correctly record what was true when written.

- **ISS-02 (Low)** — §5.0 was missing the `v2.5.1 cycle 2` entry although the version cites
  that PASS three times. Added: `v2.5.1 cycle 2:
  artifacts/reviews/06-coding-and-ut-v2.5.1-technical-cycle2.md — PASS (98%, 0C/0H/0M/2L,
  reviewer: tester)`, noting both Lows were folded into v2.6.0. Also added the missing
  `v2.6.0 cycle 1` FAIL entry itself (the review this rework responds to), so §5.0 is now
  current.

- **ISS-03 (Low)** — the two new landing strings had no jargon scan (house pattern
  UT-0857/UT-0868/UT-0884). Added a new `it()` inside the UT-0889 describe block in
  `apps/web/test/safety-surfaces.test.tsx` that scans `en.home.steps[1].body` and
  `en.home.promises[0]` against the full §2.2 jargon list (wallet, seed phrase, private key,
  gas, token, mint, on-chain, blockchain, crypto, nullifier, hash) — added as a new assertion
  to the existing UT-0889 block, not a sibling test, since it is the same guard's job.

- **ISS-04 (Low)** — §2.2 and §4a's "How verified" cell both asserted a CI jargon-filter step
  that does not exist (`.github/workflows/` has only `verify.yml` and `dco.yml`, neither runs a
  jargon scan). Corrected both to state the truth: enforcement is by the **per-story
  jargon-scan tests** (the UT-0740/UT-0857/UT-0868/UT-0884/UT-0889 pattern), not CI; noted that
  if a CI step is added later this line should cite it.

- **ISS-05 (Low)** — the clause-(e) residue inventory in item 26's "Still stand, and why"
  paragraph missed two things the reviewer named:
  - Added `packages/ui/src/PrivacyStatus.tsx:251-252`, the `anon` state's `title: 'Anonymous'`
    / `subtitle: 'Nothing you do here is linked to you'` — not public-facing today (component
    mounted nowhere), flagged for re-copy-review against clause (e) **before first mount**, on
    the same footing as the `ver` title precedent.
  - Corrected the `private_endorsement` reasoning: the flag **description string** itself names
    no phase (only the sibling `removeBy`/`defaults.prod` fields do); the entry stands because
    it is developer-facing flag configuration, not public-facing copy — conclusion unchanged,
    stated reason corrected.

- **ISS-06 (Low)** — the coordinator explicitly elevated this from the review's optional "record
  a note" to a required code fix. Tightened
  `apps/web/test/safety-surfaces.test.tsx`'s Arabic assertion from the brittle bare-substring
  `expect(ar.home.steps[1].body).not.toContain('سري')` (which would false-positive against
  `سريعًا` "quickly" and `تسري` "takes effect", already present at `ar.ts` `parties.leaveHelp`)
  to the exact retired phrase: `expect(ar.home.steps[1].body).not.toContain('اسمك سريًا')`.
  Removed the redundant looser `'سريًا'`-only check in the same edit (the exact-phrase check
  supersedes it) and added a comment explaining why.

## Doc 06 version

**v2.6.0 -> v2.7.0** (minor, per the coordinator's correction — a Medium FAIL takes at least a
minor bump), **Status: In Review**. New top-of-changelog entry describing every fix above with
its finding ID; §5.0 review history now carries both the missing `v2.5.1 cycle 2` PASS and the
`v2.6.0 cycle 1` FAIL that triggered this rework.

## Test / build results

- `npm test`: **625 passed, 0 failed** (was 624 at v2.6.0; +1 = the ISS-03 jargon-scan
  assertion): contracts 95, protocol 151, sdk 244, ui 18, indexer 16, **web 101** (was 100).
- `npm run typecheck`: exits 0 (`packages/ui`, `apps/web`).
- `npm run lint:deps`: "7 workspace package(s) checked — layering OK".
- §3 UT-0889 row updated 5 -> 6; Total row 624 -> 625; web addend sentence corrected to 101.

## Decisions made

- Followed the coordinator's explicit version directive (v2.7.0) over my own earlier v2.6.1
  entry (written before the coordinator's correction arrived mid-task); replaced every
  occurrence before finishing.
- Followed annotate-don't-delete throughout: no historical change-history text was rewritten or
  removed — every correction is a dated addition placed immediately after the stale text it
  corrects, in the same style already used elsewhere in this document (e.g. the v2.12.0/v2.13.0
  annotations inside Doc 03's own §10.12.3 note).
- Followed the coordinator's explicit instruction to *fix* ISS-06 in code rather than only
  record a note, since the coordinator's message overrode the review's "no change required at
  v2.6.0" framing.
- Did not touch Doc 07/08, Doc 02/04, README, or any other document — confirmed by `git status`
  showing only my seven files changed (plus `artifacts/memory-index.json`, pre-existing/other
  agents' concurrent work, and `docs/04-test-strategy-master-plan.md`, which is **not** mine —
  another role's concurrent edit, left untouched).
- Did not commit.

## IDs touched

- No new `UT-####` minted this cycle — UT-0889 (minted last cycle) gained one additional
  assertion (jargon scan) and one tightened assertion (Arabic phrase), same test ID.
- Referenced/annotated: `ISS-01`..`ISS-06` (from `06-coding-and-ut-v2.6.0-technical-cycle1.md`),
  `FR-131` (Must row, OPEN G-PHASE3), `DES-098` (item 26(d), still owed), `TC-3564`..`TC-3569`
  (cited, not authored by me).

## Files changed

- `apps/web/test/safety-surfaces.test.tsx` (ISS-03 jargon-scan `it()`; ISS-06 tightened Arabic
  assertion)
- `docs/06-coding-and-ut.md` (v2.6.0 -> v2.7.0; ISS-01..ISS-06 all addressed; CRLF/LF unchanged
  — confirmed LF-only before and after, no line-ending churn)

No other files touched in this cycle (the en.ts/ar.ts/proposals.js/ProposalsAndDebate.tsx
changes from the v2.6.0 cycle are unchanged and untouched this session).

## Open items (unchanged, not mine to close)

- Doc 06 v2.7.0's own document-review loop — cycle 2 of 5, awaiting the neutral reviewer.
- Doc 02 v2.17.0's own document-review loop (project-manager to assign).
- ARABIC-I18N native-speaker review of the two new Arabic strings (technical-writer,
  pre-Gate 2) — now doubly relevant given ISS-06's brittleness note.
- §7.1 enrolment-copy ruling (product-owner, tracked Doc 02 §13 (j), non-blocking).
- DES-098 acknowledge-to-proceed control (Doc 06 item 26(d)) — still the only genuinely open
  item under item 26's numbered list; SCR-13 story scope, unbuilt.
- `PrivacyStatus.tsx` `anon` state — flagged (not fixed; no fix owed) for re-copy-review before
  any future mount.

## Handoff

Per instructions, other documents blocking (Doc 02 v2.17.0, Doc 01, Doc 04) is expected; I did
not self-appoint as reviewer for any of them, including my own Doc 06. Stopping for the
neutral reviewer to run cycle 2 of the technical review against v2.7.0.
