# Document Review — Doc 06 Coding & UT v2.4.2 (technical, cycle 1)

```
Document:    Coding & Unit Testing — Trumocracy (CODE-TRUMOCRACY)
Version:     2.4.2
Review mode: technical
Cycle:       1 of 5
Reviewer:    reviewer-qa (neutral — engineer Samuel Oyelaran owns Doc 06 and the code)
Date:        2026-08-29
Score:       98%
Critical:    0
High:        0
Medium:      0
Low:         1
Verdict:     PASS
```

---

## What was checked

1. FR-080 normative text (Doc 02 §4.23) read directly and held against both EN and AR consent
   copy strings.
2. TierDeclaration component in `apps/web/src/components/ProposalsAndDebate.tsx` read
   end-to-end — state flow, conditional rendering, button targets.
3. EN i18n strings for the consent panel (`apps/web/src/i18n/en.ts`): `workerConsentTitle`,
   `workerConsentPermanent`, `workerConsentPublicRecord`, `workerConsentNoApproval`,
   `workerConsentConfirm`, `workerConsentCancel`.
4. AR i18n strings (`apps/web/src/i18n/ar.ts`): same keys, verified against EN meaning.
5. UT-0885 and UT-0886 in `apps/web/test/proposals.test.tsx` — logic, assertions, SCOPE comments.
6. Doc 06 §3 test-count table and breakdown note for 610.
7. Doc 06 v2.4.2 changelog entry for accuracy.
8. Jargon filter (DES-085/NFR-023) and grade-8 reading level on all new strings.
9. Prior passing versions (v2.4.1, PASS 100%) treated as baseline — no re-inspection of
   unchanged tests beyond the two new ones.

---

## FR-080 compliance assessment (primary verification task)

FR-080 normative text (Doc 02 §4.23, read verbatim):

> "before a Worker declaration is confirmed the user interface MUST state plainly that
> becoming a Worker is **permanent for the term** and makes the user's **participation
> record** public for the duration of the term"

### Clause (i) — permanence

`workerConsentPermanent`: "This lasts for the whole term. You cannot undo it partway through."

Both facts are stated: duration (whole term) and irreversibility (cannot undo). FR-080 clause
(i) is satisfied. The language is short, plain, unhedged.

### Clause (ii) — participation record publicity

`workerConsentPublicRecord`: "Your record of taking part in this party becomes public for the
term — not only the proposals you put forward, but what you take part in."

The phrase "record of taking part" directly maps to "participation record". The em-dash clause
explicitly disclaims the narrower framing ("not only the proposals you put forward") — the
exact narrowing that was the defect in the shipped v2.4.0 copy. FR-080 clause (ii) is
satisfied.

### Consent event placement

`TierDeclaration` uses `useState(false)` for `consenting`. Clicking `declare-worker` sets
`consenting = true` and renders the consent panel. Clicking `confirm-worker` calls
`onDeclareWorker()`. Clicking `cancel-worker` sets `consenting = false` (returns to gate).
The member reaches `onDeclareWorker` ONLY by clicking through the consent panel. FR-080's
"before a Worker declaration is confirmed the UI MUST state" is structurally satisfied: the
consent panel appears before and is required for the confirmation step.

### No-approval clause

`workerConsentNoApproval`: "Nobody reviews this. When you confirm, it is done." — satisfies
FR-080's no-human-approval requirement.

### UT-0885 verification

The test clicks `declare-worker`, asserts `file-proposal` is NOT reachable at that point
(confirming the "before" relationship), then queries `worker-consent` and checks:

- `consent-permanent` matches `/lasts for the whole term|cannot undo/i` — matches ✓
- `consent-public-record` matches `/record of taking part.*public/i` — matches ✓
- `consent-no-approval` matches `/Nobody reviews this/i` — matches ✓

The regex for `consent-public-record` tests the right property: it requires "record of taking
part" and "public" to appear together, which is the participation-record disclosure, not merely
the proposals-disclosure. This is a genuine test, not a superficial string presence check.

### UT-0886 verification

Clicks `declare-worker`, then `cancel-worker`; asserts `worker-gate` is visible (member is
back at step 1) and `file-proposal` is absent (still Supporter, nothing recorded). Correct.

---

## AR locale assessment

All six consent-panel keys verified against EN:

| Key | EN (condensed) | AR meaning | Match |
|-----|---------------|-----------|-------|
| workerConsentTitle | "Before you say you are a Worker" | "Before you declare you are a Worker" | ✓ |
| workerConsentPermanent | "lasts for the whole term; cannot undo" | "lasts for the entire term; cannot reverse midway" | ✓ |
| workerConsentPublicRecord | "record of taking part … becomes public … not only proposals … but what you take part in" | "record of participation becomes public … not only proposals you put forward, but what you participate in" | ✓ |
| workerConsentNoApproval | "Nobody reviews this. When you confirm, it is done." | "Nobody reviews this. When you confirm, the matter is done." | ✓ |
| workerConsentConfirm | "I understand — make me a Worker" | "I understand that — make me a Worker" | ✓ |
| workerConsentCancel | "Not now" | "Not now" | ✓ |

AR strings carry the correct caveat ("ENGINEER DRAFT — native-speaker review owed before
launch" at §7 #17). Both required FR-080 facts are present and accurate in the AR draft. The
draft flags are in place.

---

## Jargon filter and grade-8 reading level

All new EN strings (gate panel carried from v2.4.0; consent panel new in v2.4.2) scanned:

No occurrences of: wallet / seed phrase / private key / gas / token / mint / chain /
blockchain / crypto. Jargon filter clean.

Grade-8 reading level: all sentences short, everyday vocabulary, no subordinate clause depth
beyond the `consent-public-record` em-dash construction, which remains clear.

---

## Doc 06 changelog and §3 counts

v2.4.2 changelog: accurately describes the defect (one-click, "what you put forward", no
confirmation step), the tester rule-4 source, the fix (two-step, consent panel, both
facts), the new tests (UT-0885/UT-0886), and the suite increment (608→610). No
embellishments.

§3 table: UT-0885..0886 row present with description matching the actual test assertions.
Total row reads 610. Breakdown note at §3 footer accounts for the +2 correctly (web 89 → 91).

---

## Issues

### ISS-01 (Low) — gate panel `workerGateHow` undersells the disclosure scope

**Location:** `apps/web/src/i18n/en.ts` (and ar.ts mirror), `workerGateHow` key; rendered in
`TierDeclaration` gate panel (step 1) and in the tier-state display for members already at
Worker or Candidate tier.

**Observation:** `workerGateHow` reads: "You can say you are a Worker at any time. Nobody
approves it — you decide. Doing so makes **what you put forward** public for the term."

The phrase "what you put forward" reflects the v2.4.0 defect copy that FR-080's consent panel
was added to correct. In the consent panel (step 2), `workerConsentPublicRecord` correctly
widens this to "your record of taking part in this party … not only the proposals you put
forward, but what you take part in." The gate panel thus creates an initial impression narrower
than the truth, which the consent panel then corrects.

**FR-080 compliance impact:** none — the consent panel discloses both facts before
confirmation, satisfying the requirement. The gate panel is a pre-disclosure context, not the
normative disclosure step.

**Risk:** a member reading only the gate panel before clicking through may be surprised by the
wider scope in the consent panel. The string also appears as the tier-state display for
existing Workers (`data-testid="tier-state"`), where it gives a post-declaration reminder that
understates the actual disclosure they accepted.

**Recommendation (to the engineer on rework):** update `workerGateHow` to reflect the full
scope: "Doing so makes your record of taking part public for the term — not only the proposals
you put forward." The consent panel language has the right phrasing and could be mirrored here.
This is not a compliance gap; it is an honesty-of-copy improvement consistent with Doc 06 §2
rule 2.

---

## Unchanged elements

All UT-0832..0884 behaviour from v2.4.1 (PASS 100%) confirmed unchanged — this cycle reviewed
only the new consent-panel material and its tests. §7 limitations, §4 architecture notes, and
all non-consent-panel i18n strings are out of scope for this cycle.

---

## Verdict

**PASS — 98% / 0 Critical / 0 High / 0 Medium / 1 Low**

The FR-080 informed-consent event is correctly implemented: two steps, both required facts
disclosed before confirmation, no-approval stated, decline leaves Supporter with nothing
recorded. Tests UT-0885/UT-0886 are genuine guards. AR draft mirrors EN meaning faithfully.
Jargon clean, grade-8 reading level met. One Low (gate-panel copy undersells scope) carried
for rework consideration; it does not touch compliance and does not block advancement.
