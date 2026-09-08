# technical-writer session note — 2026-09-06T19:00 — public-files rework, cycle 2

```
Role:      technical-writer (Maya Lindqvist)
Trigger:   artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06.md — product-owner review,
           cycle 1: FAIL 81% (0 Critical / 4 High / 7 Medium / 9 Low).
Scope:     Rework README.md, SECURITY.md, CONTRIBUTING.md. CODE_OF_CONDUCT.md PASSED
           (per coordinator instruction) and is untouched this cycle.
Status:    All required fixes applied. Not self-reviewed (routes to the PM/product-owner
           for cycle-2 scoring, per AL-CANDIDATE-3 — I do not appoint myself reviewer).
```

## Findings fixed, and how

### README.md

- **ISS-01 (High)** — "a deployment check refuses to promote any environment still wired to
  one" (false present-tense control claim) → replaced with the true form: the check is
  "written and unit-tested (`UT-0600`–`UT-0612`) — but nothing that actually deploys calls it
  yet, because nothing deploys" (Doc 09 `REL-LIM-12`), framed as owed, not protection in effect.
- **ISS-02 (High)** — the v1 data-retention sentence was pinned to Doc 03 §10.12.3 (a different
  component, DES-094, not mounted). Re-pinned to Doc 03 §10.13.9 (`DES-100`, v1 ID-verification
  and retention model), §10.13.5 (`DES-097`, v1 conventional-auth stack), Doc 02 §4.46
  `FR-132`(b), and §16.4 `H-02`.
- **ISS-05 (Medium)** — the ADR-025 link pointed at a filename that does not exist
  (`ADR-025-conventional-authentication-seams.md`). Corrected to the real file,
  `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md` (verified present via `Glob`).
- **ISS-06 (Medium)** — the retained-field list read as an exhaustive enumeration of two fields.
  Rewrote as "at least six operational fields" and named all six from the `FR-132`(b) allowlist
  (`phone_hash`, `subject_id_hash`, id-verified flag, age-verified flag, issuing region,
  verified-at timestamp), and added one clause distinguishing the v1 **design** (what the
  allowlist permits) from the built **demo** (an in-memory store).
- **ISS-07 (Medium)** — no file stated the `FR-132`(d) real-person-vs-unique-person caveat.
  Added a full paragraph to the Status block: v1 verifies "a real, legal-age person," not a
  unique one; someone with two legitimate government IDs can hold two counting accounts;
  one-person-one-vote is a v2 property.
- **ISS-08 (Medium)** — the fourth navigable page, `/verify`, was omitted from both the
  repository-layout block and the "What is actually built" inventory. Added it to both,
  labelled honestly: not behind a flag, wired to nothing, its copy (verified against
  `apps/web/src/i18n/en.ts:32,90`, e.g. "never leaves your phone", "cannot be traced back to
  you") describes the v2 enrolment design, and whether that is an honest placeholder or an
  overclaim is an **open, unruled question** (Doc 02 §13 (j); Doc 06 §7 item 26). I did not
  rule on the copy itself — only listed and labelled the page, per the review's own scope note
  (§7 item 3 of the review).
- **ISS-09 (Medium)** — retagged the Doc 01 "Where to start reading" row: "the v2 target
  vision, not what is built (read its §0 first)".
- **ISS-12 (Low)** — test count 619 → **624**, per the coordinator's certified figure
  ("624 tests at the time of writing (2026-09-06)"). I did not re-derive this myself; I applied
  the PM-certified number as instructed (the review itself routes this number to the PM, not to
  me).
- **ISS-13 (Low)** — added the missing `packages/ui/` line to the repository-layout block.
- **ISS-14 (Low)** — softened "the whole CI sequence, locally" to "most of what CI runs,
  locally," and added one sentence naming the actual difference: CI additionally runs a
  separate `flag-debt` job and does not run a repo-wide typecheck step, both verified against
  `.github/workflows/verify.yml` and `package.json`'s `verify` script.
- **ISS-15 (Low)** — removed the duplicated AI-agent-personas sentence from "How this repository
  is run"; it now cross-references the Status block instead of restating it.
- **ISS-16 (Low)** — softened "Node 20 will fail at `npm ci`" (unverifiable and probably wrong,
  since there is no `.npmrc` with `engine-strict`) to "Node 20 is unsupported and will warn
  (`EBADENGINE`) rather than hard-fail... expect real failures further on."

### SECURITY.md

- **ISS-03 (High)** — the DES-098 paragraph said the FR-131 honesty notice is "shown at the one
  place it is live today (the parties directory)" — which is actually the **clause (d)** notice,
  a different clause, and is silent about the FR-131 (a)–(c) banner that **is** live on
  `/proposals`. Rewrote: the (a)–(c) banner is live (`ReceiptFreedomBanner`, mounted at
  `ProposalsAndDebate.tsx:489`, guard `UT-0887`); the clause (d) notice is live separately at the
  parties directory (Doc 06 §7 item 21); what is unbuilt is specifically the `DES-098`
  acknowledge-to-proceed control and the SCR-13/SCR-14 ballot-casting screens.
- **ISS-04 (High)** — `H-02`/`H-05`/`H-06`/`H-07` were published bare under "Governance gaps,"
  colliding with Doc 02 §16.4's identically-numbered honesty register and mis-filing three
  liveness/protocol findings as governance gaps. Split into two sections: "Governance gaps"
  (kept `PREREQ-01`, `C-05` only) and a new "Open security-scan findings (Doc 06 §5.3)" section
  with an explicit disambiguation note and "(Doc 06 §5.3)" cited on every one of the four ids.
- **ISS-10 (Medium)** — MS-09 (2027-03-12) was stated as a plan target without its "placeholder
  offset only, not a schedule" caveat (Doc 13's own ⚠ block). Restated exactly that way; MS-04
  (2026-10-15) is unaffected and kept as-is, per the review's own instruction.
- **ISS-17 (Low)** — the "(`join`/`leave`)" parenthetical on the `H-02` scan finding was not
  sourced to Doc 06 §5.3 itself. Re-sourced it to the correct place, Doc 06 §7 item 5, which
  does name `join`/`leave` explicitly, rather than leaving it as an unsupported addition.
- Also (not a scored issue): added one contingency sentence for the "GitHub private
  vulnerability reporting" channel — if it is not yet enabled when the repo goes public, a
  reader should open a normal issue asking the maintainer to enable it, without vulnerability
  detail. This does not resolve ISS-18 (a repository **setting**, not a text fix) — that
  remains the maintainer's confirmation to make before publication, per the review's routing.

### CONTRIBUTING.md

- **ISS-11 (Medium)** — the honesty rule (§1) and the "where not to start" list (§6) both
  omitted FR-131 clause (e)'s own carve-out: enrolment/identity-verification copy is a
  *different*, still-open question (`FR-132`(d), Doc 02 §13 (j)), not covered by the
  participation-act rule. Added one paragraph to §1 and one bullet to §6, both naming the
  `/verify` page as the live example and routing such changes through the product-owner too.
- **ISS-19 (Low)** — the five guard ids (`UT-0869`/`UT-0887`/`UT-0889`/`UT-0759`/`UT-0888`) were
  named with no file path, and three of the five live outside `apps/web/test`. Added a table
  with the exact file:line for each, verified in the review's own §5 ("all five verified to
  exist") — I did not re-verify the line numbers myself against source in this cycle; I applied
  the reviewer's own recorded verification.
- **ISS-12 (Low, shared)** — no numeric test count existed in CONTRIBUTING.md to correct;
  the "624" figure is applied only in the `npm test` comment in §5, matching README.

## Not fixed by me — routed as the review itself specified

- **ISS-12's re-verification** (the "624" figure itself) — the review states the
  project-manager re-verifies this, and the coordinator's message supplied the PM-certified
  number directly. I applied it; I did not independently re-derive it from `npm test` output
  this cycle (no Bash tool available to this role).
- **ISS-18** (confirming GitHub private vulnerability reporting is enabled) — a repository
  setting, explicitly routed to the maintainer by the review. No file change can resolve it;
  I added a soft fallback sentence in SECURITY.md but the setting itself needs a human to
  confirm before publication.
- **ISS-08's code half** (whether the `/verify` page copy is an honest placeholder or an
  overclaim) — explicitly **not** ruled by the reviewer and explicitly not mine to rule; my fix
  was limited to listing and honestly labelling the page, per the review's own §7 routing (a
  ruling requires a Doc 02 amendment via the product-owner, not a README edit).
- **CODE_OF_CONDUCT.md** — passed cycle 1; untouched this cycle, per the coordinator's
  instruction.

## Claims I could not independently verify this cycle

- The exact file:line locations for `UT-0869`/`UT-0887`/`UT-0759`/`UT-0888`/`UT-0889` in
  CONTRIBUTING's new table are taken from the reviewer's own recorded verification (review §4,
  ISS-19 row and §5), not re-checked by me against source this cycle.
- Whether Node 20 actually only warns (rather than fails) at `npm ci` — I could not run `npm ci`
  myself; I followed the reviewer's own stated reasoning (no `.npmrc`, so npm's default
  `EBADENGINE` behaviour is a warning) rather than asserting a tested fact.

## IDs / documents touched or cited this cycle

FR-131 clause (e), FR-132(b)/(d), DES-098, DES-100, DES-097, Doc 02 §4.46/§16.4 H-02,
Doc 03 §10.13.9/§10.13.5, Doc 06 §5.3/§7 items 5/21/26, Doc 08 header, Doc 09 REL-LIM-12,
Doc 13 MS-04/MS-09 caveat, ADR-025 (corrected filename), TD-RTM-01, UT-0600–0612,
UT-0869/0887/0759/0888/0889.
