# Document Review Report - Doc 06 Coding and UT v2.1.0

```
Reviewed document  : 06-coding-and-ut.md
Document version   : 2.1.0
Review mode        : technical
Reviewer role      : reviewer-qa (independent - not the document owner)
Score              : 84%
Critical           : 0
High               : 1
Medium             : 2
Low                : 1
Cycle              : 1 of 5
Verdict            : FAIL
```

---

## 1. Summary

Doc 06 v2.1.0 and the party-creation code drop were reviewed independently by reviewer-qa on
2026-08-25. Suite: 486 tests all green (contracts 95 / protocol 126 / sdk 192 / ui 14 /
indexer 16 / web 43), dep-guard clean, tsc exits 0 in packages/ui and apps/web.

FR-011 pillar-all-named refusal, FR-013 cooldown/immutable-archive, FR-020 join-never-calls-
verifier, FR-130 cap with recordLegalRegistration as the sole lift, FR-077 verbatim non-violence
clause, and BR-020 disclosure are correctly implemented and tested.

ISS-01 (High): PartyCreationService.activateParty() transitions any petition in PETITION
state to ACTIVE with zero endorsement threshold check, directly violating FR-018 (activation
threshold-driven by code, no human step). Tests exercise this ungated path with 0 endorsements
at multiple call sites. Doc 06 section 7 does not disclose this limitation. Two Medium defects
(TOCTOU collision gap at publishDraft; Date.now() in store archivePetition) and one Low
documentation gap complete the set.

Merge sign-off is WITHHELD. Drop routed back to engineer for v2.2.0.

---

## 2. Pass-bar check

- Score >= 95%? NO (84%)
- Critical = 0? YES | High = 0? NO (1: ISS-01) | Medium = 0? NO (2: ISS-02, ISS-03)
- Verdict: FAIL

---

## 3. Per-criterion scores

| Criterion | Weight | Score | Weighted | Notes |
|-----------|--------|-------|----------|-------|
| T1 Requirement coverage | 20 | 80 | 16.0 | FR-018 not enforced at service layer (ISS-01); all other cited FRs correct |
| T2 Test quality | 20 | 82 | 16.4 | Good breadth; no test guards activateParty against sub-threshold petition |
| T3 Code quality | 20 | 82 | 16.4 | Seam pattern correct; TOCTOU at publishDraft (ISS-02); Date.now() in store (ISS-03) |
| T4 Documentation accuracy | 15 | 85 | 12.8 | Section 3 counts verified; section 7 missing activateParty threshold limitation (ISS-04) |
| T5 Security and safety | 15 | 80 | 12.0 | FR-020 clean; FR-130 no bypass; non-violence verbatim; ungated activateParty is the gap |
| T6 Conventions | 10 | 92 | 9.2 | lint:deps, tsc, LF 2-space all clean; Arabic strings flagged as working draft |
| **Total** | **100** | --- | **84%** | --- |

---

## 4. Issues

### ISS-01 (High) - activateParty has no endorsement threshold check

**Criterion:** T1, T5
**Location:** packages/sdk/src/party-creation.js lines 556-590

activateParty(petitionId) checks only that petition.state === PARTY_STATE.PETITION. It does
NOT read endorsement count and does NOT compare it against any threshold. FR-018 requires
that activation is threshold-driven by code with no human step.

Test call sites with 0 endorsements (sub-threshold):
  SDK test line 197: activateParty(petitionId) called immediately after publishDraft.
  makePartyWithMembers helper line 341: setup harness for UT-0802..UT-0807; calls
  activateParty without any endorsement count assertion. Same pattern at lines 411,
  435, 449, 463, 478.

IS_INSECURE_MOCK=true is a persistence-tier barrier only; the service logic gap is inherited
by any production-backed PartyCreationService using the same interface.

Not Critical: IS_INSECURE_MOCK=true blocks the devnet path and the demo page (page.tsx)
does not call activateParty at all.

Doc 06 section 7 does not disclose this gap (see also ISS-04).

**Required fix:** Add endorsements >= threshold guard in activateParty() with a
THRESHOLD_NOT_MET error code, plus a unit test that asserts the guard fires. A section 7
disclosure is required regardless of how the code is resolved.
### ISS-02 (Medium) - TOCTOU collision gap at publishDraft

**Criterion:** T3
**Location:** packages/sdk/src/party-creation.js lines 476-516

publishDraft re-runs validateDraft server-side (correct) but does NOT re-run the
name/emblem collision check that was run during createDraft. A second party with the same
normalised name or emblem in the same jurisdiction could be submitted between the two calls.
The IPartyStore interface exposes both methods independently so any future API route would
skip the collision guard entirely.

In the current demo page.tsx the two calls are back-to-back in the same synchronous handler
so the window is not practically open today, but the interface contract is incorrect regardless.

**Required fix:** Add collision re-check in publishDraft (name AND emblem, vs live petitions
AND active parties, same jurisdiction), OR document the TOCTOU gap in section 7 as an
explicit limitation with a note that single-process in-memory usage is safe.

### ISS-03 (Medium) - Date.now() in InMemoryPartyStore.archivePetition

**Criterion:** T3, T6
**Location:** packages/sdk/src/party-creation.js line 217

archivePetition(id) sets archivedAt: Date.now() directly, bypassing clock injection.
The file header at line 19 states no Date.now() in the service logic -- accurate for the
service class but misleading because InMemoryPartyStore in the same file uses Date.now().
expirePetitions in the service calls this._store.archivePetition(id) without passing the
clock value. No test currently checks archivedAt so there is no flakiness today, but the
archivedAt field is non-deterministic, violating section 2.6.

**Required fix:** Change signature to archivePetition(id, now) and update expirePetitions
to call this._store.archivePetition(id, t) where t comes from the injected clock. Update
the IPartyStore typedef comment accordingly.
### ISS-04 (Low) - Section 7 missing activateParty threshold limitation

**Criterion:** T4
**Location:** docs/06-coding-and-ut.md section 7

Section 7 lists 18 limitations. None mentions that activateParty() has no endorsement
threshold check at the SDK service layer. This omission makes the limitations list
inaccurate regardless of how ISS-01 is resolved.

**Required fix:** Add a limitation entry describing the activateParty enforcement boundary.
If ISS-01 is fixed in code, state that the guard lives in the service layer. If deferred,
state the gap explicitly.

---

## 5. Command outputs (reviewer run 2026-08-25)

npm test:
  contracts : 5 test files,  95 tests  PASS
  protocol  : 3 test files, 126 tests  PASS
  sdk       : 10 test files, 192 tests PASS
  ui        : 1 test file,   14 tests  PASS
  indexer   : 1 test file,   16 tests  PASS
  web       : 2 test files,  43 tests  PASS
  Total: 486 tests, 0 failures. Matches engineer-claimed 486.

npm run lint:deps: dep-guard -- 7 workspace package(s) checked, layering OK

tsc --noEmit -p packages/ui/tsconfig.json : exit 0, no errors
tsc --noEmit -p apps/web/tsconfig.json    : exit 0, no errors
---

## 6. FR-by-FR verification

| FR/NFR | Status | Notes |
|--------|--------|-------|
| FR-010 | PASS | createDraft: validateDraft + collision check; normalizeCollisionKey; UT-0060..0065, UT-0780..0787 |
| FR-011 | PASS | validateVision loops PILLARS array, collects all errors; UT-0066..0070, UT-0841..0844 |
| FR-012 | PASS | applyCharterDefaults fills all tiers from TIER_RULES; UT-0071..0075 |
| FR-013 | PASS | publishDraft sets PETITION; archivePetition flags ARCHIVED_IMMUTABLE; cooldown in createDraft; UT-0076..0086, UT-0788..0797 |
| FR-018 | FAIL (ISS-01) | activateParty has no threshold check; tests exercise ungated path with 0 endorsements |
| FR-020 | PASS | joinParty has no verifyEligibility call; UT-0807 spy assertion |
| FR-077 | PASS | NON_VIOLENCE_CLAUSE frozen; strict equality check in validateDraft; blockquote in EightPillarForm; UT-0060, UT-0851..0852 |
| FR-130 | PASS | PROVISIONAL_MEMBER_CAP=100 enforced in joinParty; recordLegalRegistration is sole legalRegistrationVerified setter; UT-0802..0806, UT-0853..0857 |
| BR-020 | PASS | ProvisionalStatus disclosure; EightPillarForm aside; page.tsx comment; UT-0849..0850 |
| CON-013 | PASS | NON_VIOLENCE_CLAUSE frozen; verbatim check rejects ALTERED_NON_VIOLENCE_CLAUSE; UT-0060 |

---

## 7. Routing

FAIL -- route to engineer (Samuel Oyelaran) for rework into v2.2.0 (Status: In Review).

Required before cycle 2 of 5:
  ISS-01 (High)   -- Fix activateParty threshold check + add unit test + section 7 entry.
  ISS-02 (Medium) -- Add publishDraft collision re-check, or document TOCTOU in section 7.
  ISS-03 (Medium) -- Remove Date.now() from archivePetition; pass clock value from service.
  ISS-04 (Low)    -- Add activateParty enforcement boundary to section 7.

Merge sign-off: WITHHELD pending resolution of ISS-01, ISS-02, ISS-03.
