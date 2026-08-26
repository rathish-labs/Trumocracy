# Document Review Report -- Doc 06 Coding and UT v2.2.0 (technical, cycle 2)

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.2.0
Review mode: technical
Reviewer role: reviewer-qa (independent - not the document owner)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 06 v2.2.0 and the party-creation code drop (post-rework against cycle-1 FAIL 84%,
0C/1H/2M/1L) were independently reviewed by reviewer-qa on 2026-08-25. All four cycle-1
issues are genuinely closed. Suite: 491 tests all green (contracts 95 / protocol 126 /
sdk 197 / ui 14 / indexer 16 / web 43). Dep-guard: 7 packages, layering OK. tsc exits
0 for packages/ui and apps/web. Score 97%, 0C/0H/0M/1L. PASS.

One new Low issue (ISS-05) introduced by the rework: file header at line 19 of
party-creation.js claims no Date.now() anywhere in the file, but the constructor default
parameter at line 348 contains Date.now(). The functional ISS-03 fix is correct; the
header is an overclaim.

---

## 2. Pass-bar check

- Score >= 95%? YES (97%)
- Critical = 0? YES | High = 0? YES | Medium = 0? YES
- Verdict: PASS -- all three pass-bar rows satisfied.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0-100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 99 | 19.8 | FR-018 now enforced; fail-closed confirmed; all cycle-1 FRs hold |
| T2 Test quality | 20 | 98 | 19.6 | UT-0814..0818 correct; seedThresholdMet legitimate; TOCTOU test demonstrates the actual race |
| T3 Code quality | 20 | 97 | 19.4 | All three code fixes correct; pre-existing _petitions access not new |
| T4 Documentation accuracy | 15 | 93 | 13.95 | Counts/changelog/limitation 19 accurate; ISS-05 (Low): header overclaims about Date.now() |
| T5 Security and safety | 15 | 98 | 14.7 | Fail-closed gate confirmed; no bypass parameter; seedThresholdMet legitimate |
| T6 Conventions | 10 | 99 | 9.9 | lint:deps clean; tsc exit 0; suite 491/491; LF maintained |
| Total | 100 | -- | 97% | -- |


---

## 4. Cycle-1 issue closure verification

### ISS-01 (High) -- activateParty endorsement threshold gate

STATUS: CLOSED.

activateParty() now calls petitionThreshold() (governance.js) with
petition.jurisdictionPopulation ?? 0 and petition.jurisdictionVerified ?? 0 before
transitioning any petition. When endorsements < required it throws THRESHOLD_NOT_MET
with .current and .required. No bypass parameter: signature is activateParty(petitionId).

Fail-closed analysis: when both denominators are absent, ?? 0 resolves them to 0.
petitionThreshold returns max(ceil(0*200/10000), ceil(0*200/10000), 500) = 500.
The 500-floor (PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS) binds. FAIL-CLOSED.

petitionThreshold exported only from governance.js (confirmed by grep of
packages/protocol/src). party.js references petitionThresholdBps as a property name
only; no duplicate export. Clean.

seedThresholdMet: calls store.findPetitionById(), then petitionThreshold() with same
parameters as the service, then store.updatePetition() -- a legitimate IPartyStore op.
No internal state poke.

New tests: UT-0814 (THRESHOLD_NOT_MET with current and required), UT-0815 (exactly at
threshold succeeds), UT-0816 (pop=100: 500-floor binds; at-floor succeeds).

### ISS-02 (Medium) -- TOCTOU collision gap at publishDraft

STATUS: CLOSED.

publishDraft() re-runs name AND emblem collision check (lines 505-551) after server-side
validation and before petition save. Scope: live petitions AND active parties, same
jurisdiction, same normalizeCollisionKey normalisation.

UT-0818: drafter A creates draft; drafter B publishes same name in same jurisdiction;
drafter A tries publishDraft -- re-check finds B petition -- refuses NAME_COLLISION.
Confirmed passing.

### ISS-03 (Medium) -- Date.now() in InMemoryPartyStore.archivePetition

STATUS: CLOSED (functional fix correct; one new Low documentation issue ISS-05).

archivePetition(id, now) -- signature changed. archivedAt set from caller-supplied now
(line 224). expirePetitions passes t to archivePetition(id, t) at line 594. UT-0817:
archivedAt equals value passed to expirePetitions. Deterministic.
New Low issue ISS-05 -- see Section 5.

### ISS-04 (Low) -- Section 7 missing activateParty threshold limitation

STATUS: CLOSED.

Doc 06 Section 7 limitation 19 added (lines 529-539). Accurately describes the gate at
the service layer, endorsements accuracy dependency on DES-097, and test seeding.


---

## 5. New issues (rework-introduced)

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-05 | Low | T4 | packages/sdk/src/party-creation.js line 19 | Header claims no Date.now() anywhere in file. False: line 348 constructor default parameter contains Date.now() as clock fallback. JSDoc at line 341 correctly acknowledges the default, creating an internal contradiction. Functional ISS-03 fix is correct. | Narrow header: no Date.now() in InMemoryPartyStore methods or service business logic; constructor default references Date.now() as fallback only -- tests must inject a fixed clock (Section 2.6). |

---

## 6. Toolchain outputs (reviewer-qa independent run 2026-08-25T2250)

npm test:
  contracts : 5 test files,  95 tests  PASS
  protocol  : 3 test files, 126 tests  PASS
  sdk       : 10 test files, 197 tests PASS
  ui        : 1 test file,   14 tests  PASS
  indexer   : 1 test file,   16 tests  PASS
  web       : 2 test files,  43 tests  PASS
  Total: 491 tests, 0 failures.
  Matches engineer-claimed 491 (95/126/197/14/16/43) exactly.

npm run lint:deps: dep-guard: 7 workspace package(s) checked -- layering OK
tsc --noEmit -p packages/ui/tsconfig.json : exit 0, no errors
tsc --noEmit -p apps/web/tsconfig.json    : exit 0, no errors

---

## 7. FR-by-FR spot-check (cycle-1 table, cycle-2 re-verification)

| FR/NFR | Status | Notes |
|--------|--------|-------|
| FR-018 | PASS | activateParty enforces threshold; fail-closed; UT-0814/0815/0816 |
| FR-010 | PASS | createDraft collision + TOCTOU re-check in publishDraft; UT-0787..0792, UT-0818 |
| FR-011 | PASS | validateDraft loops all PILLARS; UT-0784, UT-0841..0844 |
| FR-013 | PASS | archivePetition(id,now) immutable; cooldown; UT-0795..0801, UT-0817 |
| FR-020 | PASS | joinParty no verifyEligibility call; no verifyEligibility on service; UT-0807 |
| FR-077 | PASS | NON_VIOLENCE_CLAUSE frozen; strict equality in validateDraft; UT-0060, UT-0851..0852 |
| FR-130 | PASS | PROVISIONAL_MEMBER_CAP=100; recordLegalRegistration sole cap-lifter; UT-0802..0806 |
| BR-020 | PASS | legalRegistrationStatement in partyStatus; UT-0810, UT-0849..0850 |
| CON-013 | PASS | NON_VIOLENCE_CLAUSE frozen; verbatim check rejects altered clause; UT-0060 |


---

## 8. Merge sign-off

Merge-to-trunk RACI: Accountable = reviewer-qa, Responsible = engineer.

Per the human-approved ruling in
artifacts/status/DECISIONS-2026-08-25-RTM-MERGE-RULE-CLARIFICATION.md:
RTM zero-gap is a Gate-2 completion condition, NOT an incremental-merge gate.
The 126 open Must rows in Doc 08 do NOT block this merge.

Merge conditions checked:
  [x] Suite green:         491 tests, 0 failures (independently verified).
  [x] lint:deps:           dep-guard clean, 7 packages, layering OK.
  [x] tsc --noEmit:        packages/ui and apps/web exit 0.
  [x] Doc 06 review:       v2.2.0 cycle 2 PASS (score 97%, 0C/0H/0M/1L).
  [x] Feature flags:       party-creation behind IS_INSECURE_MOCK discipline;
                           production store gated by DES-097; no ambient state.
  [x] Rollback:            flag kill sufficient to revert; store is in-memory for
                           devnet; no schema migration in this drop.
  [x] Cycle-1 issues:      all four CLOSED (ISS-01/02/03/04).
  [x] Rework regressions:  ISS-05 is Low documentation only; no functional defects.
  [x] RTM zero-gap:        Gate-2 condition only; 126 open rows noted, not a block.

** MERGE SIGNED. **
reviewer-qa (independent approver) — 2026-08-25

The engineer may merge this PR to trunk. The engineer never merges its own work.
Gate 2 (launch readiness) remains NOT READY pending: RTM zero gaps, Doc 07/08 complete,
remaining stories, and final Gate-2 readiness packet.

---

## 9. Routing

ISS-05 (Low): route to engineer (owns packages/sdk/src/party-creation.js).
  Suggested fix: narrow the file-header comment at line 19 to read:
  "No call to Date.now() exists in InMemoryPartyStore methods or service business logic;
  the PartyCreationService constructor accepts an optional clock function and falls back to
  () => Math.floor(Date.now()/1000) only when no clock is injected -- tests must inject."
  This does not require a rework cycle; Low issues do not block PASS. Fix in next commit.

No other open items for this code drop.

