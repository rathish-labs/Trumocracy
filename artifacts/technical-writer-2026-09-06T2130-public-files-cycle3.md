# technical-writer session note — 2026-09-06T21:30 — public-files rework, cycle 3

```
Role:      technical-writer (Maya Lindqvist)
Trigger:   artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06-cycle2.md — product-owner review,
           cycle 2: FAIL 93% (0C/0H/1M/5L). All twenty cycle-1 issues verified closed;
           one shared Medium (ISS-C2-01) plus four Lows remained, plus ISS-20 carried
           from cycle 1.
Scope:     Sentence-level fixes to README.md, CONTRIBUTING.md, SECURITY.md
           (ISS-C2-01(a)/02/03/04/05), plus CODE_OF_CONDUCT.md (ISS-20, authorized as
           "close if cheap" by the coordinator this cycle).
Status:    All six fixes applied. Not self-reviewed; routes back to the product-owner.
```

## Fixes, one line each

- **ISS-C2-01(a)** (Medium; README ~128-130, CONTRIBUTING ~41, ~156-157) — replaced the
  over-broad "tracked at Doc 02 §13 (j); Doc 06 §7 item 26" citation in all three sites with the
  qualified form: (j) covers only the two landing strings (`home.steps[0].body`,
  `home.promises[3]`), and `/verify`'s own copy "is not yet in any register" — applied verbatim
  in README's "What is actually built" bullet, CONTRIBUTING §1's carve-out, and CONTRIBUTING
  §6's "where not to start" bullet. Did **not** touch Doc 02 (ISS-C2-01(b) is the product-owner's
  own amendment, routed via the PM, not mine).
- **C2-02** (Low; README ~62-69) — the six-field allowlist now reads "for a **counting-verified**
  account," and a new sentence states an open-tier account "keeps only the phone hash and the
  party link — none of the other five fields exist until that check runs."
- **C2-03** (Low; README ~68-69) — "keeps this in an in-memory store" → "**would** keep this in
  an in-memory store — but today its credential store is **empty by design**: nothing on the
  demo page can populate it... (Doc 06 §7 item 22)."
- **C2-04** (Low; CONTRIBUTING ~39) — "governed by `FR-132`(d)" → "**addressed by**
  `FR-132`(d)," matching Doc 02 v2.17.1's own retired-vs-current wording.
- **C2-05** (Low; SECURITY ~40) — "is already live" → "is already live **in the built demo**,"
  so the claim can't be read as a production statement 35 lines below a "deployed nowhere"
  banner.
- **ISS-20** (Low, carried from cycle 1; CODE_OF_CONDUCT.md, authorized this cycle as "close if
  cheap") — Enforcement section now explicitly names the security channel as "used here simply
  as a private contact form, not because a conduct report is a security issue," and adds "expect
  a best-effort response from a single maintainer — there is no dedicated conduct team," fixing
  the usability/expectation gap the reviewer flagged without adding an email address.

## Not mine to fix — as the review itself routed

- **ISS-C2-01(b)** — widening Doc 02 §13 (j)'s scope (or minting a sibling tracked-routing item)
  to actually cover `/verify` is a Doc 02 amendment owed by the product-owner via the PM. My
  fix (a) is the honest interim statement; it does not wait on (b).
- **ISS-18's remaining half** — confirming GitHub private vulnerability reporting is enabled is
  a repository setting for the maintainer, not a file change.
- **Whether `/verify`'s copy is an honest placeholder or an overclaim** — explicitly not ruled
  by the reviewer, not ruled by me; my only obligation was to state the tracking gap honestly,
  which C2-01(a) now does in all three sites.

## Claims I could not independently verify this cycle

- I applied the reviewer's own re-verified facts (e.g., that `app/proposals/page.tsx:48-53`'s
  credential store is `new Map()` / empty by design, and that Doc 06 §7 item 22 states the
  reason) rather than re-deriving them myself from source this cycle — the review's §4 records
  these as independently checked against source by the reviewer.
- I did not re-run `npm test` or otherwise verify the "624" test count changed further since
  cycle 2; no new figure was supplied this cycle, so it is left as-is.

## IDs / documents touched or cited this cycle

FR-131 clause (e), FR-132(b)/(d), Doc 02 §4.46/§13 (j)/§16.4 H-02, Doc 02 v2.17.1 changelog
wording ("addressed by"), Doc 06 §5.3, §7 items 5/21/22/26/26(d), Doc 09 REL-LIM-12,
DES-098, ADR-025, Contributor Covenant v2.1 Enforcement section.
