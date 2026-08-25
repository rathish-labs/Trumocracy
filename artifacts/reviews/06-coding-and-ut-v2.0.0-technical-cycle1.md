# Document Review Report - Doc 06 Coding & UT v2.0.0 (Technical, Cycle 1)

<!-- MACHINE-PARSEABLE METADATA BLOCK -->
```
Reviewed document: 06-coding-and-ut.md
Document version: 2.0.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 94%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

## 1. Summary (BLUF)

Doc 06 v2.0.0 and the code drop (commit 5320342 packages/ui DES-093/DES-094; packages/sdk DES-095/DES-096; plus uncommitted backing-aware PrivacyStatus clause-7 fix) reviewed in technical mode. Suite fully green (383 tests: contracts 95, protocol 82, sdk 160, ui 14, indexer 16, web 16). Dep-guard clean. All 16 token hex values, property shapes, copy strings, seam contracts match SDD v2.7.1 verbatim. IS_INSECURE_MOCK delegation correctly tiered. DES-100 allowlist contains no denylist fields. UT-0758 covers all four clause-7 paths. Jargon filter clean. Scope discipline satisfied. Single blocking finding: ISS-01 (Medium) -- packages/ui/tsconfig.json declares types [node, vitest/globals] but @types/node absent from devDependencies. Running tsc --noEmit fails with TS2688, directly breaking Doc 06 section 4a Typecheck-clean bar. Verdict: FAIL.

## 2. Pass-bar check

- Score >= 95%? no (94%)
- Critical = 0? yes - High = 0? yes - Medium = 0? no (1 medium)
- Verdict: FAIL -- one Medium and score below threshold.

## 3. Per-criterion scores

| Criterion | Weight | Score | Weighted | Notes |
|-----------|--------|-------|----------|-------|
| T1 Requirement coverage | 20 | 93 | 18.6 | All DES elements covered; typecheck bar defined but not met |
| T2 Design conformance | 20 | 93 | 18.6 | All hex/shapes/copy verbatim correct; tsconfig misconfiguration |
| T3 Test completeness | 20 | 97 | 19.4 | 383 green; UT-0758 4-path; absence tests; IS_INSECURE_MOCK tested |
| T4 Security and privacy | 20 | 98 | 19.6 | Self-view contract; clause 6; DES-100 allowlist; jargon clean |
| T5 Internal consistency | 10 | 80 | 8.0 | Doc claims typecheck clean but it fails; UT range notation ambiguous |
| T6 Process/governance | 10 | 95 | 9.5 | Owner verified Doc 13; version/status/history correct; branch correct |
| Total | 100 | -- | 93.7% approx 94% | -- |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Medium | T2/T5 | packages/ui/tsconfig.json line 15; packages/ui/package.json devDeps absent | tsconfig.json declares "types":["node","vitest/globals"] but @types/node is not installed. Only @types/react and @types/react-dom are in devDependencies. Running tsc --noEmit gives: error TS2688: Cannot find type definition file for node. Breaks explicit Doc 06 section 4a bar (Typecheck clean). No functional impact (vitest resolves types independently; 14 tests pass), but bar is broken. | Two fixes: (a) Preferred -- remove "node" from types array in packages/ui/tsconfig.json. Browser-only UI library has no Node.js API surface in source files; vitest/globals covers test-file globals. (b) Alternative -- add @types/node as devDependency in packages/ui/package.json. Either fix must result in tsc --noEmit exiting 0. |
| ISS-02 | Low | T5 | docs/06-coding-and-ut.md section 3 rows 1-2 | UT-0001..0028 (28 IDs) claims 41 tests; UT-0030..0055 (26 IDs) claims 41 tests. Range notation implies 1:1 ID-to-test; reviewers deriving counts from the range compute wrong numbers. Table note explains SDK decomposition but not protocol rows. | Add a parenthetical to the section 3 note: UT-#### IDs may cover describe-blocks with multiple it() assertions; Count column is the verified figure from npm test; ID ranges mark RTM block boundaries only. |

## 5. Evidence from independent code execution

Suite results (npm test -- independently run):

| Package | Files | Tests | Status |
|---------|-------|-------|--------|
| @trumocracy/contracts | 5 | 95 | PASS |
| @trumocracy/protocol | 2 | 82 | PASS |
| @trumocracy/sdk | 9 | 160 | PASS |
| @trumocracy/ui | 1 | 14 | PASS |
| @trumocracy/indexer | 1 | 16 | PASS |
| @trumocracy/web | 1 | 16 | PASS |
| Total | 19 | 383 | ALL PASS |

Doc 06 section 3 claimed 383 -- verified exactly. PASS.

Dep-guard (npm run lint:deps): dep-guard: 7 workspace package(s) checked -- layering OK. PASS.

Typecheck (tsc --noEmit in packages/ui): FAIL. error TS2688: Cannot find type definition file for node. See ISS-01.

Token verification (DES-093 all 16 hex values vs Doc 03 section 10.12.2):
--navy #1E2761 PASS, --navy2 #2E3D7E PASS, --navy3 #3F4E96 PASS, --amber #F2B134 PASS,
--amber-deep #D9971C PASS, --ice #CADCFC PASS, --ice-deep #AEC0E8 PASS, --paper #F7F5EF PASS,
--paper2 #EFEBE0 PASS, --ink #1B2440 PASS, --grey #5A6685 PASS, --grey-soft #8892AE PASS,
--green #2C7A5B PASS, --green-soft #E7F1EC PASS, --red #B4483C PASS, --line #E4E1D6 PASS.
All 16 match verbatim. Font stacks match. Radii (16/14/20/12/11 px) match. Shadow matches.
Territory classes present with correct semantic rules. All PASS.

PrivacyStatus.tsx copy (DES-094 v2.7.1 backing-aware sub-table):
- anon: title Anonymous, subtitle Nothing you do here is linked to you, dot #8892AE, bg #ECEEF5, text #41496b. All verbatim. PASS.
- ver (no backing / unlinkable != true): title Verified -- private, subtitle Your vote counts. How you voted is never made public. (v1 fail-honest). Matches sub-table row 2. PASS.
- ver (unlinkable === true): title Verified -- private, subtitle Your vote counts. Your identity is not stored. (v2 ZK). Matches sub-table row 1. PASS.
- pub: title Public, subtitle You chose a public role. Your record is visible, dot #F2B134, bg #FDF3E0, text #8a5b10. All verbatim. PASS.
- CSS classes: privacy anon, privacy ver, privacy pub -- all match. PASS.

Clause 7 selection rule (PrivacyStatus.tsx lines 292-295): state === ver && backingProperties?.unlinkable === true ? VER_SUBTITLE_V2 : cfg.subtitle. Fail-honest default correct. PASS.

Self-view contract (clause 1): Runtime guard if (!selfView || selfView.holder !== authenticated-self) return null enforced beyond TypeScript. UT-0754/0755/0756 verify null/wrong-holder/empty-object all return null. PASS.

Clause 6 (no retroactive linkage): No console, fetch, analytics calls, or data-* state-recording attributes in render path. UT-0757 absence tests verify mechanically. PASS.

Clause 8 (non-vote anon disclosure): Not implemented; documented as obligation owed at enrolment sprint with trigger condition in PrivacyStatus.tsx JSDoc and Doc 06 section 7 limitation 10. Correctly deferred per DES-094 clause 8. PASS.

UT-0758 four-path coverage (clause 7, Doc 06 section 2.5 Clause-7-backing-aware-tests bar):
1. Absent backingProperties -- renders v1 subtitle, does NOT render v2. PASS.
2. unlinkable: false -- renders v1 subtitle, does NOT render v2. PASS.
3. unlinkable: true -- renders v2 subtitle, does NOT render v1. PASS.
4. Partial/malformed prop (onePersonOneVote: false only, no unlinkable field) -- renders v1 not v2. PASS.

getProperties() shape (DES-095): { onePersonOneVote: false, subpoenaResistant: false, unlinkable: false, anonymityFloor: false } -- exact match to SDD section 10.13.2 v1 backing column. PASS.

getTallyProperties() shape (DES-096): { receiptFree: false, coercionOverride: false, zeroKnowledge: false, publiclyVerifiable: true } -- exact match to SDD section 10.13.3. PASS.

IS_INSECURE_MOCK delegation (Doc 03 section 10.13.4):
- StubPhoneVerifier.IS_INSECURE_MOCK() returns true (stub). PASS.
- StubIdDocumentChecker.IS_INSECURE_MOCK() returns true (stub). PASS.
- ConventionalEligibilityVerifier.IS_INSECURE_MOCK() returns phoneVerifier.IS_INSECURE_MOCK() || idDocumentChecker.IS_INSECURE_MOCK() (correct OR delegation). PASS.
- ConventionalBallotService.IS_INSECURE_MOCK() delegates to eligibilityVerifier.IS_INSECURE_MOCK(). PASS.

DES-100 allowlist (no denylist fields): IdDocumentResult typedef contains exactly {id_verified_flag, age_verified, issuing_region, subject_id_hash, verified_at} -- five fields, no extras. Stub checkDocument() returns only these five. Denylist comment names all excluded fields. No denylist field appears in type or values. PASS.

COUNTING_ACTION contract: COUNTING_ACTION_VALUES = {STRENGTH_CONTRIBUTION, BINDING_VOTE, CANDIDACY}. Any other scope throws NotACountingAction citing FR-020/FR-122/FR-123. PASS.

castBallot requires eligibilityRef: Guard if (!eligibilityRef || !eligibilityRef.eligible) throws with Doc 03 section 10.13.3 citation. PASS.

Seam shapes v2 swap adversarial check: proof param optional in v1 (ignored); v2 passes real proof with no signature change. BallotReceipt.choice and .memberId typed optional; v2 hash-only receipt drops them without caller changes. Seam shapes genuinely allow v2 swap. PASS.

Jargon filter (DES-085): Grep of packages/ui for wallet, seed phrase, private key, gas, nonce, mint, on-chain finds only JSDoc comment text explaining the prohibition. Zero banned words in user-facing rendered strings. PASS.

Scope discipline: Commit 5320342 adds only packages/ui (tokens/component/tests/config), packages/sdk (seams/tests), artifacts. No app screens, vendor integrations, circuit/verifier changes, or new contract features. Working-tree delta: PrivacyStatus.tsx clause-7 fix, UT-0758, index.ts, doc/artifact updates only. PASS.

Branch claim (Doc 06 section 8): Doc states build/v1-scaffold. git branch --show-current returns build/v1-scaffold. PASS.

Owner claim: Doc 06 names Samuel Oyelaran -- Engineering Lead. Doc 13 section 7 RACI confirms. PASS.

Version history honesty: v1.0.0 recorded with honest 48%/FAIL/6C/6H/5M/4L. v1.1.0 recorded as no cycle-1 review completed, superseded. Annotate-dont-delete convention followed. PASS.

## 6. Routing instruction

FAIL -- route to engineer (Samuel Oyelaran) for rework.

ISS-01 is the only blocker. In packages/ui/tsconfig.json, remove node from the types array (preferred for a browser-only UI library), OR add @types/node as a devDependency in packages/ui/package.json. Either fix must result in tsc --noEmit exiting 0.

The rework MUST produce Version: 2.0.1, Status: In Review. After rework this loop re-reviews at cycle 2 of 5. If ISS-01 is resolved cleanly and no new issues appear, cycle 2 should return PASS -- all other bars are currently met.

ISS-02 (Low) should also be addressed in the same rework pass but does not block the pass bar alone.
