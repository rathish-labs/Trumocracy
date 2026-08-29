# Coding & Unit Testing — Trumocracy

```
Document ID:   CODE-TRUMOCRACY
Version:       2.3.3
Status:        In Review
Owner:         Samuel Oyelaran — Engineering Lead
Source:        SDD-TRUMOCRACY v2.7.1 §9 · ADR-011 · ADR-023 · ADR-024 · ADR-025
Last updated:  2026-08-29
```

> Built from SDD §9 and ADR-011. Records what was physically built, the unit-testing
> standard, the `UT-####` inventory, the feature-flag ledger, and the defects the review loop
> found and what was done about them.

```
Change history:
  v2.3.3 (2026-08-29) — Recorded-decision closure (documents only; NO code change). The
               FR-064-SEMANTICS ruling landed: option (a), v1 EXPLICIT-LEAVE (Rathish,
               Human Approver, 2026-08-29). §7 #20 closed as RESOLVED (a). FR-064's text is
               amended in Doc 02 v2.15.0 §4.6 — the auto-void wording is superseded and
               annotated in place; automatic voidance and the bypass-proof nullifier
               enforcement are DEFERRED to DES-065 at the v2 seam swap, where
               one-active-membership is enforced cryptographically. The behaviour this drop
               implements (ALREADY_MEMBER_ELSEWHERE refusal until an explicit recorded
               leave; fresh joinedAt on every join) is the subset the v2 mechanism
               formalises — the ruled semantics were already built, so no code, test, or
               count changes (suite remains 542). §5.0 updated: v2.3.2 cycle-3 PASS (97%)
               recorded. NOTE: the RTM's FR-064 Must row REMAINS OPEN pending the DES-065
               build (v2) — the ruling unblocked the semantics, not the row.

  v2.3.2 (2026-08-29) — Rework cycle 2 against artifacts/reviews/06-coding-and-ut-v2.3.1-technical-cycle2.md
               (FAIL 92%, 0C/0H/1M/2L). All three issues resolved:
               ISS-C2-01 (Medium): the v2.3.1 ISS-01 fix stopped at the JS boundary —
               apps/web/types/trumocracy-sdk.d.ts still declared the 21-method IPartyStore,
               so a TypeScript store (the DES-097 Postgres backing will be one) could
               `implements IPartyStore`, typecheck clean, and throw on the first
               expirePetitions() sweep. findPetitionsPastClose(now: number): object[] added
               to BOTH the IPartyStore interface and the InMemoryPartyStore class
               declaration in the shim. Drift guard added per the reviewer's ask: new web
               test UT-0871 (apps/web/test/sdk-types-sync.test.ts) parses the SDK JSDoc
               typedef and the .d.ts shim and asserts the member sets are EQUAL both ways —
               after two silent drifts on this seam (archivePetition arity at v2.2.0,
               findPetitionsPastClose at v2.3.1), the next one is a red build.
               ISS-C2-02 (Low): §5.0 v2.0.1 cycle-2 line corrected "pending" → PASS (97%);
               v2.1.0 line's "merge sign-off withheld pending cycle-2 review" annotated
               with the v2.2.0 cycle-2 PASS resolution.
               ISS-C2-03 (Low): the v2.3.1+v2.3.2 rework is committed atomically — code +
               tests (UT-0831, UT-0871, O(n) fold, UT-0822 restructure, .d.ts sync) in one
               fix commit, Doc 06 in its companion docs commit; the fix and its proof land
               together.
               Suite: 542 tests (contracts 95 / protocol 126 / sdk 220 / ui 14 /
               indexer 16 / web 71); dep-guard clean; tsc exits 0 in packages/ui and
               apps/web. §3 counts updated (new UT-0871 row).

  v2.3.1 (2026-08-29) — Rework cycle 1 against artifacts/reviews/06-coding-and-ut-v2.3.0-technical-cycle1.md
               (FAIL 90%, 0C/0H/1M/3L). All four issues resolved:
               ISS-01 (Medium): expirePetitions() no longer reaches into InMemoryPartyStore's
               private _petitions Map (silent-no-op risk with any production store). New
               IPartyStore interface method findPetitionsPastClose(now) — live petitions whose
               closesAt < now — declared on the @typedef, implemented in InMemoryPartyStore
               (production: WHERE state = PETITION AND closes_at < now), and expirePetitions()
               routed through it; the service now touches interface methods only (code fix
               committed 4148498). New regression test UT-0831: an interface-only store facade
               (exactly the 22 @typedef methods, delegating to a real InMemoryPartyStore) is
               injected into PartyCreationService; a past-close petition is still expired and
               archived through it. Any renewed private-state access finds undefined on the
               facade and the test fails — the seam break can no longer be silent.
               ISS-02 (Low): §8 branch parenthetical updated build/v1-scaffold →
               build/v1-join-membership (current working branch).
               ISS-03 (Low): membershipHistory() fold reworked from rows.find() per LEAVE
               event (O(n²) worst case) to a per-party open-row Map — a single O(n) pass,
               identical behaviour; covered by the existing membership-history tests
               (UT-0819..UT-0830 unchanged).
               ISS-04 (Low): UT-0822 promoted from an it() inside UT-0821's describe block to
               its own describe block; the RTM trace is now unambiguous. Test count unchanged.
               Also: §5.0 review record updated (v2.2.0 cycle-2 PASS 97% recorded — line was
               stale "pending"); §7 #20 upgraded from a flag to a tracked decision record
               (FR-064-SEMANTICS) awaiting product-owner ruling. Suite: 541 tests
               (contracts 95 / protocol 126 / sdk 220 / ui 14 / indexer 16 / web 70);
               dep-guard clean; tsc exits 0 in packages/ui and apps/web. §3 counts updated.

  v2.3.0 (2026-08-28) — Join/membership feature drop (FR-020/021/022, FR-064 invariant,
               FR-122/FR-123 counting distinction, FR-130 cap at join, FR-131 clause (d)).
               SDK (party-creation.js): InMemoryPartyStore membership model reworked from a
               bare Set to an APPEND-ONLY membership event log (recordJoin/recordLeave;
               addMember removed — it bypassed the one-active-party invariant and had no
               external callers), with derived active-membership and counted-members indexes.
               PartyCreationService: joinParty() now enforces one-active-party
               (ALREADY_MEMBER_ELSEWHERE until an explicit recorded leave; ALREADY_MEMBER on
               double join) and stamps joinedAt from the injected clock; new leaveParty()
               (FR-022 — immediate, no approval, never deletes history), membershipHistory()
               (active/inactive rows), activeMembership(), countingStatus() (join ≠ counting
               read), contributeToStrength(partyId, member, verifier) — the ONLY seam call
               site on this service, receiving the verifier as an explicit per-call parameter
               with scope COUNTING_ACTION.STRENGTH_CONTRIBUTION (Doc 03 §10.13.2(a)); the
               join/leave paths structurally cannot reach a verifier the service never holds
               (FR-020). partyStatus() gains officialStrength (counts verified current members
               only); a counted member who leaves stops counting (store invariant), history
               remains. NOTE: one-active-party is built in the EXPLICIT-LEAVE form per the
               2026-08-28 commissioning brief; FR-064's normative text reads auto-void-on-join
               — divergence flagged, PO reconciliation owed (§7 limitation #20).
               Web: parties directory page (apps/web/src/app/parties/page.tsx, gated on
               party_governance flag) + PartyMembership component — join/leave/history cards,
               FR-130 cap + BR-020 disclosure per card, join ≠ counting surface, and the
               FR-131 clause (d) open-tier notice (four clauses (i)–(iv), rendered before the
               refusal, no dismiss control) where an open-tier member attempts the strength-
               contribution counting action. Demo verifier is stub-backed
               (IS_INSECURE_MOCK=true, empty credential store — visitor is honestly open-tier;
               no control can fake ID verification). i18n en+ar membership strings added;
               en.parties.joinPrivate CORRECTED from the v2-only claim "Nobody gets that
               list, including us" to v1-accurate disclosure copy (FR-131(b): the platform's
               own records CAN link account↔party in v1) — ar mirrored (engineer draft,
               native review owed). Types: trumocracy-sdk.d.ts updated (membership API,
               eligibility seam exports, archivePetition(id, now) drift fixed).
               New tests: UT-0819..UT-0830 (sdk membership, 22 tests) and UT-0858..UT-0870
               (web join-membership flow, 27 tests). Suite: 540 tests (contracts 95 /
               protocol 126 / sdk 219 / ui 14 / indexer 16 / web 70); dep-guard clean;
               tsc exits 0 in packages/ui and apps/web. §3 counts updated; §7 limitations
               #20–#22 added.

  v2.2.0 (2026-08-25) — Rework cycle 1 against artifacts/reviews/06-coding-and-ut-v2.1.0-technical-cycle1.md
               (FAIL 84%, 0C/1H/2M/1L). All four issues resolved:
               ISS-01 (High): activateParty() now computes required endorsements via
               petitionThreshold() (governance.js — max(thresholdBps×pop/BPS,
               thresholdBps×verified/BPS, 500)) using the petition's stored
               jurisdictionPopulation and jurisdictionVerified fields. Refuses with
               THRESHOLD_NOT_MET (carrying .current and .required) when below threshold.
               No human step, no bypass parameter. Seven SDK call sites updated: each seeds
               threshold-met endorsements via seedThresholdMet() before activateParty().
               goodDraft fixture extended with jurisdictionPopulation/jurisdictionVerified.
               New tests UT-0814 (refusal below threshold naming counts), UT-0815 (exact
               threshold succeeds), UT-0816 (500-floor binds when percentage < floor).
               ISS-02 (Medium): publishDraft() re-runs name/emblem collision check (same
               normalisation, petitions AND active parties, same-jurisdiction) to close the
               TOCTOU window between createDraft and publishDraft. New test UT-0818 (draft
               created, colliding petition published concurrently, publishDraft refused).
               ISS-03 (Medium): InMemoryPartyStore.archivePetition(id) → archivePetition(id,
               now); expirePetitions passes the injected clock value t. No Date.now()
               anywhere in the file. IPartyStore typedef updated. New test UT-0817
               (archivedAt equals the injected expiry time — deterministic).
               ISS-04 (Low): §7 limitation #19 added (activateParty gate at service layer;
               production wiring must supply real endorsement counts).
               Suite: 491 tests (contracts 95 / protocol 126 / sdk 197 / ui 14 /
               indexer 16 / web 43); dep-guard clean; tsc exits 0 in packages/ui and
               apps/web. §3 counts updated.

  v2.1.0 (2026-08-25) — Party-creation feature drop (US-0014/US-0015/US-0131).
               Protocol additions (additive): PROVISIONAL_MEMBER_CAP, EMBLEM, NON_VIOLENCE_CLAUSE,
               REPETITION_COOLDOWN_SECONDS, validateDraft, applyCharterDefaults, charterFingerprint,
               normalizeCollisionKey, additive validateCharter tier bounds (D6). SDK:
               InMemoryPartyStore (IS_INSECURE_MOCK=true), PartyCreationService (clock-injected).
               Web: EightPillarForm extended (emblem + jurisdiction select + charter section + BR-020
               disclosure), ProvisionalStatus component (FR-130), petitions/new page wired to
               InMemoryPartyStore demo service. i18n: new party-creation strings en+ar (translation
               quality flag owed for Doc 14). Types: trumocracy-protocol.d.ts + trumocracy-sdk.d.ts
               updated. Suite: 486 tests (all green); dep-guard clean; tsc --noEmit 0 errors.
               §3 counts updated. §5 review record added. §7 limitations extended. ISS-03 (v2.0.1)
               date corrected (2026-08-24 → 2026-08-25).

  v2.0.1 (2026-08-25) — Rework cycle 1 against artifacts/reviews/06-coding-and-ut-v2.0.0-technical-cycle1.md
               (FAIL 94%, 0C/0H/1M/1L). ISS-01 (Medium): removed "node" from
               packages/ui/tsconfig.json types array — browser-only UI library has no Node API
               surface; vitest/globals covers test-file globals; tsc --noEmit now exits 0.
               ISS-02 (Low): added parenthetical to §3 table note clarifying that UT-#### IDs
               may cover describe-blocks with multiple it() assertions, the Count column is the
               npm-test-verified figure, and ID ranges mark RTM block boundaries only. Suite
               unchanged: 383 tests, all green.

  v2.0.0 (2026-08-25) — Full rewrite: §1 updated for packages/ui and SDK seams; §2 extended
               with IS_INSECURE_MOCK discipline (§10.13.4), jargon filter (DES-085), dep-guard
               layering, language conventions, self-view contract and absence-test pattern;
               §3 counts updated to reflect actual suite (383 tests); new §4a code-drop review
               bar added; §5 scaffold-drop review header added; §7 updated with new limitations
               (clause 8 owed, audit-contract wiring pending, ICredentialStore owed, SIM-swap
               DES owed); §8 branch updated to main/build/v1-scaffold. JOB 1 of this session:
               PrivacyStatus.tsx amended per clause 7 (backing-aware ver subtitle, DES-094
               v2.7.1); BackingProperties prop added; UT-0758 (4 tests) added; UT-0751/0757
               updated. Total suite: 383 tests, all green.

  v1.1.0 (2026-08-09) — Corrected six code defects from security scan (C-01..C-06);
               corrected §5 (spendNullifier fix was incomplete at v1.0.0; C-04 underflow
               mislabelled as "correct but wasteful"); corrected §6 flag ledger (on-chain
               column was false for elections/recall/treasury/delegation/private_endorsement);
               Status: In Review. This version entered review 2026-08-09 and has not yet
               received a passing cycle-1 technical review — it remains In Review as of this
               rewrite. The review record for v1.1.0 is pending; this document supersedes it
               at v2.0.0.

  v1.0.0 (2026-08-09) — Initial scaffold drop. Scored 48% / FAIL in the first technical-mode
               review (artifacts/reviews/06-coding-and-ut-v1.0.0-technical-cycle1.md;
               reviewer-qa; 6 critical / 6 high / 5 medium / 4 low). Key failings: code
               contained six critical security defects none of which were covered by a test;
               §5 reported defect 1 as fixed when the fix was bypassable one level up (H-01);
               §6's on-chain column was wrong for five flags; §7.4 called the growth-sample
               array "correct but wasteful" when it also contained the C-04 underflow that
               bricks a party permanently. The gap between the document's confidence and the
               drop's condition was the most important finding: this document would have
               persuaded a gate reviewer the drop was safe. Merge sign-off withheld.
```

---

## 1. Repository build (from SDD §9 / ADR-011)

The structure was built **before feature code**, per the VEKTOR Coding & UT rule.

```
trumocracy/
├── packages/
│   ├── protocol/     pure reference rules — ZERO runtime dependencies, enforced by CI
│   ├── contracts/    Solidity core + tests (in-process EVM)
│   ├── circuits/     Circom sources for the ZK circuits
│   ├── sdk/          JavaScript client (proofs, transports, verified reads, eligibility seams)
│   │   └── src/
│   │       ├── eligibility.js   IEligibilityVerifier seam — DES-095, ADR-024, ADR-025
│   │       └── ballot.js        IBallotService seam — DES-096
│   └── ui/           Design-system components — DES-093 tokens, DES-094 PrivacyStatus
│       ├── tokens.css              DES-093 colour/typography/radius/shadow tokens
│       └── src/PrivacyStatus.tsx   DES-094 privacy-status component (TypeScript/React)
├── apps/
│   └── web/          Next.js PWA
├── services/
│   └── indexer/      event-sourced read model — a cache, never an authority
├── tools/
│   ├── evm-harness/  solc-js + EthereumJS: offline, deterministic contract testing
│   └── dep-guard/    ADR-011 dependency-direction enforcement
└── docs/             the VEKTOR 14-doc suite + ADR-001..ADR-025
```

**Dependency direction is enforced, not documented.** `npm run lint:deps` fails the build on a
violation, and `@trumocracy/protocol` is held to zero runtime dependencies so it remains a
credible differential reference. A rule that lives only in a document is a rule that is
already broken somewhere.

**v1/v2 package disposition (DES-097 — cite, do not duplicate):** `packages/ui` is
**As-is** — DES-093 tokens and DES-094 privacy-status component are independent of the
identity/ballot backing split. `packages/sdk` is **Adapt** — exposes IEligibilityVerifier and
IBallotService interfaces (v2 is a seam-local swap); ZK proof paths are not yet wired.
`packages/circuits` and `apps/verifier` are **Untouched for v1**. Full disposition table in
Doc 03 §10.13.5 (DES-097).

### 1.1 Toolchain decision: why no Foundry or Hardhat

Both were rejected for this repository, and the reason is a product requirement rather than a
preference. `CON-004` requires reproducible, independently verifiable builds, and the audience
includes journalists, auditors and citizens — not only engineers with a working Rust
toolchain. Foundry needs a downloaded binary; Hardhat fetches a native `solc`. Both make
"clone and verify the tests pass" contingent on a network fetch succeeding.

`tools/evm-harness` uses `solc-js` (the compiler as a WASM npm package) and `@ethereumjs/vm`
(the EVM as an npm package). `npm install && npm test` on a clean clone reproduces every
result offline, byte-identically, on any machine. The cost is speed — the suite takes minutes,
not seconds — and that is an acceptable trade for a codebase whose verifiability is a
political property.

The harness provides: multi-file compilation with `node_modules` import resolution,
PoseidonT3 library linking and deployment, deploy/call/read with viem ABI encoding, event
decoding, **cross-contract custom-error decoding**, block-time control (`warp`) and state
snapshots.

### 1.2 Verified toolchain facts (measured, not assumed)

| Fact | Value | How established |
|---|---|---|
| Solidity | 0.8.28, `cancun` | `solc.version()` in the harness |
| On-chain/off-chain Merkle parity | identical roots | `LeanIMT` + `poseidon-solidity` on-chain vs `@zk-kit/lean-imt` + `poseidon-lite` off-chain |
| Merkle insert cost | 69,461 / 89,794 / 73,356 gas for leaves 1–3 | measured in the harness |
| Contract sizes | all under the 24,576-byte EIP-170 limit (largest: PartyDeployer 13,185) | compiler output, checked in `script/compile.mjs` |

Note on gas figures: the harness reports **execution gas only** — `runCall` excludes the
21,000 intrinsic cost and all calldata cost, and models no L1 blob fee. These numbers are a
**regression detector, not a price**. Cost per action against NFR-005 is measured on a real
L2 in the Doc 04 cost suite.

## 2. Unit-testing standard

1. **Test names state the guarantee, not the mechanism.** "refuses a second join from the
   same person" beats "test join revert". The suite doubles as the readable specification of
   what the protocol promises.
2. **Every negative path gets a test**, and it asserts the *specific* custom error. A test
   that only asserts "it reverted" passes for the wrong reason forever.
3. **Capability-absence is tested as a control** (§4).
4. **Differential tests are mandatory** wherever the reference implementation and a contract
   implement the same rule. A divergence between what the client predicts and what the chain
   does is how a citizen gets falsely told their vote counted.
5. **No mock where a real component fits.** The whole protocol is deployed in-process for
   integration tests; only the ZK verifiers are mocked, because the real ones require the
   Phase-2 ceremonies.
6. **Determinism.** Fixed genesis timestamp, deterministic accounts, no wall clock, no
   randomness. A flaky governance test is a governance bug you have not found yet.
7. **Coverage target:** 100% of branches in `packages/protocol` and in the governance-critical
   contract paths (membership, thresholds, tallies, nullifiers, eligibility). Elsewhere,
   coverage is a diagnostic, not a target — chasing a number produces tests that assert
   nothing.

### 2.1 IS_INSECURE_MOCK discipline (Doc 03 §10.13.4)

The CI deployment-safety scan blocks any testnet/staging/production deployment that contains an
`IS_INSECURE_MOCK()`-returning-true implementation. Three tiers apply:

- **Stubs return `true`.**  `StubPhoneVerifier.IS_INSECURE_MOCK()` and
  `StubIdDocumentChecker.IS_INSECURE_MOCK()` both return `true` because they lie about
  verifying — they accept any input without real checks.
- **Composites delegate and return `true` while any dependency lies.**
  `ConventionalEligibilityVerifier.IS_INSECURE_MOCK()` returns
  `this._phoneVerifier.IS_INSECURE_MOCK() || this._idDocumentChecker.IS_INSECURE_MOCK()`.
  A stub-backed composed verifier is also lying — the CI gate sees it as such.
  `ConventionalBallotService.IS_INSECURE_MOCK()` delegates to its eligibility verifier.
- **The honest conventional backing returns `false`.**  When real vendor integrations replace
  the stubs, no interface change is required — the composed verifier inherits `false` from
  both dependencies. The production v1 conventional backing is NOT a mock: it performs honest
  conventional checking and returns `IS_INSECURE_MOCK() = false`. Doc 03 §10.13.4.

**Write new tests for any new seam component** that verify: stub returns `true`, real returns
`false`, composed returns `true` while any dependency is a stub.

### 2.2 Jargon filter (DES-085, NFR-023)

No user-facing string in `apps/web` or `packages/ui` may contain the words: **wallet, seed,
seed phrase, private key, gas, token, mint, chain, block, hash** (in the context of
blockchain operations), **crypto**, or any equivalent technical blockchain vocabulary. The CI
jargon-filter scan (`packages/protocol/src/flags.js` boundary; DES-085) enforces this
mechanically. Test `apps/web/test/safety-surfaces.test.tsx` covers the UI string inventory.

Adding a new user-facing string that passes the filter is not sufficient — also confirm it
is at Grade-8 reading level (NFR-023). If in doubt, use the Hemingway App.

### 2.3 Dependency-guard layering (ADR-011 — enforced)

The `tools/dep-guard` check is the definitive authority. Violating it fails the build. The
current allowed dependency graph:

```
@trumocracy/protocol  → (none)
@trumocracy/contracts → (none)
@trumocracy/circuits  → (none)
@trumocracy/sdk       → @trumocracy/protocol, contracts(ABI), circuits(artifacts)
@trumocracy/ui        → @trumocracy/protocol  ← only protocol; NOT sdk, NOT web
apps/web              → @trumocracy/sdk, @trumocracy/ui, @trumocracy/protocol
services/indexer      → @trumocracy/protocol, contracts(ABI)
```

`@trumocracy/ui` depends ONLY on `@trumocracy/protocol`. It MUST NOT import from `sdk` or
`web`. `apps/web` may import from `sdk`, `ui`, and `protocol` but not from `contracts` or
`circuits` directly (ABI artifacts only, via sdk).

### 2.4 Language convention

| Package | Language | Notes |
|---|---|---|
| `packages/protocol` | Documented ESM JavaScript with JSDoc | Zero deps; type information via JSDoc `@typedef`; verified with `tsc --noEmit --allowJs --checkJs` |
| `packages/sdk` | Documented ESM JavaScript with JSDoc | Seam interfaces (`IEligibilityVerifier`, `IBallotService`) specified as JSDoc `@typedef`; exports via `src/index.js` |
| `packages/ui` | TypeScript / TSX | Strict mode; `jsx: react-jsx`; bundler module resolution |
| `apps/web` | TypeScript / TSX | Next.js app; strict mode |
| `packages/contracts` | Solidity 0.8.28 | Compiled by solc-js WASM harness; no native binary dependency |
| `packages/circuits` | Circom | Sources present; compilation requires `circom` binary (Phase-2 CI job) |

Do not introduce a new language without an ADR. Do not introduce TypeScript into `packages/protocol` or `packages/sdk` without an architect decision — the documented-JS-with-JSDoc pattern is a deliberate choice for auditability.

### 2.5 Self-view contract and absence-test pattern (DES-094 clauses 1, 3, 6)

The privacy-status component (`packages/ui/src/PrivacyStatus.tsx`) establishes a pattern
that MUST be followed wherever a component makes a privacy or security guarantee:

- **Self-view contract:** the component returns `null` for any non-conforming `selfView`
  token at runtime — even when TypeScript would allow the render. Tests verify this at `null`,
  wrong `holder` value, and empty object. See UT-0754..UT-0756.
- **Absence test:** tests verify that the rendered DOM contains *only* the expected approved
  strings and *no* surveillance metadata (no `data-*` attributes recording state, no member
  identifiers, no analytics attributes). The absence is the security property — the test
  failing to fail is the bug. See UT-0757.
- **Clause 7 — backing-aware subtitle test:** when a component selects content based on a
  backing's declared properties, tests MUST cover: absent prop → fail-honest default; explicit
  `false` → fail-honest default; explicit `true` → upgraded claim; malformed/partial prop →
  fail-honest default. See UT-0758.

This pattern applies to any new component that renders security-sensitive copy or participates
in a privacy-sensitive rendering rule. Do not implement a component that makes a copy
guarantee without a corresponding absence test.

### 2.6 Formatting and determinism (supplementary)

No formal `.editorconfig` is present in this repository. The de facto conventions observed in
all existing files and enforced by CI lint:

- **LF line endings** — all source files use Unix line endings (LF). Windows CRLF in a commit
  will be caught by the linter.
- **2-space indentation** — JavaScript, TypeScript, Solidity.
- **Fixed genesis timestamp** in all contract test fixtures — do not use `Date.now()` or
  `block.timestamp` from a live chain in a test. Use `warp()` in the EVM harness.
- **Deterministic accounts** — all test fixtures use fixed seeded accounts; no randomness
  unless the test is specifically testing randomness behaviour.
- **No wall clock in tests** — `Date.now()` in a test is a bug waiting to become a flake.

## 3. `UT-####` inventory

Counts are actual as of this session (2026-08-29), verified by running `npm test`.

| Range | Area | Package | Count |
|---|---|---|---|
| UT-0001..0028 | governance rules: tiers, surge, tally, eligibility, schedule, thresholds | protocol | 41 |
| UT-0030..0055 | party lifecycle, vision/charter validation, regions, anonymity guard, issuer invariant, flags | protocol | 41 |
| UT-0060..0086 | party-creation: validateDraft, emblem, non-violence clause, defaults, fingerprint, normalizeCollisionKey, additive charter bounds | protocol | 44 |
| UT-0100..0125 | deployment, enrolment, petitions, activation, membership | contracts | 25 |
| UT-0200..0230 | proposals, quorum, supermajority, surge, entrenchment, timelock | contracts | 11 |
| UT-0300..0361, SEC-* | adversarial, one suite per RISK; capability-absence; ship-dark; security regressions | contracts | 34 |
| UT-0400..0420 | differential: reference vs chain | contracts | 12 |
| UT-0500..0525 | indexer projection: determinism, ordering, divergence, reader-blindness | indexer | 16 |
| UT-0600..0612 | deployment promotion gate | contracts | 13 |
| UT-0700..0742 | client safety surfaces: receipt-free confirmation, warning banner, a11y | web | 16 |
| UT-0750..0758 | PrivacyStatus component: state rendering, self-view contract, absence, backing-aware copy | ui | 14 |
| UT-0760..0779 | IEligibilityVerifier seam, IBallotService seam: counting-tier gate, IS_INSECURE_MOCK delegation, nullifier, tally | sdk | 36 |
| UT-0780..0818, UT-0831 | PartyCreationService + InMemoryPartyStore: IS_INSECURE_MOCK, validation gate, collision (incl. TOCTOU re-check), cooldown, FR-018 threshold gate (ISS-01), FR-130 cap, join-never-calls-verifier, status, determinism, archivedAt determinism (ISS-03), expirePetitions interface-only seam regression (v2.3.1 ISS-01) | sdk | 38 |
| UT-0819..0830 | join/membership: join-without-permission, join/leave never call the seam, one-active-party (explicit leave), leave-at-will, append-only history, FR-130 100/101 boundary on ACTIVE members, strength counts verified members only, seam scope assertion, clock determinism, countingStatus | sdk | 22 |
| UT-0841..0857 | party-creation web flow: emblem field, deficiency errors, collision surfaces, BR-020 disclosure, non-violence clause, ProvisionalStatus, jargon scan | web | 27 |
| UT-0858..0870 | join/membership web flow: one-click join, no-approval absence, one-active-party refusal surface, leave, history active/inactive, cap at join surface, join ≠ counting figures, FR-131(d) notice (four clauses, non-dismissable), verified-member counting, seam spy, flag gating, jargon scan, v1-honest join copy, absence test | web | 27 |
| UT-0871 | SDK type-shim sync guard: trumocracy-sdk.d.ts IPartyStore member set equals the JSDoc typedef (v2.3.2, ISS-C2-01) | web | 1 |
| (SDK core) | identity, proofs, transports, verified reads, prediction, client, scopes | sdk | 124 |
| **Total** | | | **542** |

Note: the SDK total of 220 comprises 124 (core) + 36 (seams UT-0760..UT-0779) + 38
(UT-0780..UT-0818 + UT-0831 party-creation service) + 22 (UT-0819..UT-0830 membership). The web
total of 71 comprises 16 (original UT-0700..UT-0742) + 27 (UT-0841..UT-0857 party-creation
web tests) + 27 (UT-0858..UT-0870 join-membership web tests) + 1 (UT-0871 type-shim sync
guard, v2.3.2). The protocol total of 126
comprises 82 (original UT-0001..UT-0055) + 44 (UT-0060..UT-0086). Every `UT-####` maps to
an `FR`/`NFR`/`RISK` in the RTM (Doc 08).
(UT-#### IDs may each cover a describe-block with multiple `it()` assertions; the Count
column is the verified figure from `npm test`; ID ranges mark RTM block boundaries only.)

## 4. Capability-absence testing

Several guarantees in this system are the **absence of a function**: no admin, no pause, no
transfer, no way to resolve a nullifier to a person. These are tested three ways:

1. **ABI-surface assertions** — the compiled ABI must not contain `pause`, `transfer`,
   `approve`, `setAdmin`, `upgradeTo`, `grantRole`, `forceRemoveMember`, `overrideResult`, …
2. **Selector scanning of deployed bytecode** — the ERC-20/721 selectors must not appear.
3. **Opcode scanning** — no `DELEGATECALL` (`0xf4`) in the core, so no proxy pattern can hide
   behind it.

**What this does and does not prove.** It proves no *named* capability exists at the ABI
boundary, and it fails the build the day someone adds one — which is strictly better than a
review convention that a tired reviewer can miss. It does **not** prove the absence of an
unnamed backdoor reachable through a `fallback`, nor that an authorised caller cannot do
something surprising. Those remain the job of the two independent audits (Doc 13 MS-09), and
Doc 04 records the limitation rather than letting the green check imply more than it earns.

## 4a. Code-drop review bar

Before any code drop is presented for technical-mode document review, it MUST meet all of the
following bars. A reviewer failing to find one of these is a reviewer who has been misled.

| Bar | What is checked | How verified |
|---|---|---|
| **Suite green** | `npm test` passes with zero failures across all packages | CI output; must show exact count matching or exceeding the prior baseline |
| **Dep-guard clean** | `npm run lint:deps` passes with no violations | CI dep-guard step |
| **Typecheck clean** | `tsc --noEmit` passes in `packages/ui` and `apps/web` | CI lint + type-check step |
| **IS_INSECURE_MOCK discipline** | Every new seam component follows the stub/composite/honest-backing tier; new stubs return `true`; new composites delegate | Code review against §2.1 |
| **Jargon filter clean** | No new user-facing string contains the banned vocabulary (§2.2, DES-085) | CI jargon-filter scan; safety-surfaces test |
| **No out-of-scope feature** | No application feature outside the commissioned story scope is shipped | Code review against the commissioning brief |
| **Honesty copy matches DES verbatim** | User-facing copy in UI components matches the approved DES element table (e.g. DES-094 backing-aware sub-table) verbatim, character-by-character | Test assertions use exact strings; reviewers verify against the SDD |
| **Capability-absence tests** | Where a guarantee is the absence of something, a test asserts that absence (§4, §2.5) | Test file and CI |
| **Clause 7 backing-aware tests** | Where a component selects content based on backing properties, the four-path test (absent/false/true/malformed) is present | UT-0758 pattern |

The technical-mode review verdict is recorded against Doc 06's current version per CLAUDE.md
(§ "Review-and-rework loop"). The review report goes in `artifacts/reviews/` with filename
`06-coding-and-ut-v<version>-technical-cycle<k>.md`.

## 5. Defects found by the review loop, and what was done

Two independent reviews have now run against this code: the Doc 04 test strategy, and
reviewer-qa's security scan (`artifacts/reviews/SECURITY-SCAN-2026-08-09.md`, which scored
this document **48% / FAIL** at v1.0.0 and withheld merge sign-off). Between them they found
**six criticals and eight highs**. That is the honest headline, and it is worth stating why
it happened: the first four defects were caught by a reviewer reading the code, and the next
six by a reviewer reading it *again, adversarially*. Neither was caught by the tests, because
the tests were written by the same person who wrote the bug.

### 5.0 Scaffold-drop technical review record

Review history for this document:
- v2.3.3 cycle 1: pending — recorded-decision closure of §7 #20 (no code change); re-review owed (neutral reviewer, technical mode).
- v2.3.2 cycle 3: `artifacts/reviews/06-coding-and-ut-v2.3.2-technical-cycle3.md` — PASS (97%, 0C/0H/0M/1L). Approved 2026-08-29. Surviving Low ISS-C3-01 (extend UT-0871 to the PartyCreationService shim block — additive hardening; verified in sync at review time) carries as a non-gating backlog item.
- v2.3.1 cycle 2: `artifacts/reviews/06-coding-and-ut-v2.3.1-technical-cycle2.md` — FAIL (92%, 0C/0H/1M/2L). All four cycle-1 issues verified closed. ISS-C2-01 (Medium): the ISS-01 fix stopped at the JS boundary — `apps/web/types/trumocracy-sdk.d.ts` IPartyStore shim missing `findPetitionsPastClose`, so a TypeScript store could typecheck clean and throw at runtime; ISS-C2-02 (Low): two further stale §5.0 review-record lines (v2.0.1 "pending", v2.1.0 sign-off tail); ISS-C2-03 (Low): UT-0831 and the Low fixes not yet committed (and 4148498 bundled the fix with review artifacts). All three resolved in v2.3.2 (.d.ts synced in both blocks + UT-0871 drift guard; §5.0 corrected; rework committed atomically — fix commit + docs commit).
- v2.3.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.3.0-technical-cycle1.md` — FAIL (90%, 0C/0H/1M/3L). ISS-01 (Medium): expirePetitions reached into InMemoryPartyStore's private `_petitions` field — silent no-op with any production store; ISS-02 (Low): §8 stale branch name; ISS-03 (Low): membershipHistory O(n²) fold undocumented; ISS-04 (Low): UT-0822 as an `it()` inside UT-0821's describe block. All four resolved in v2.3.1 (interface method `findPetitionsPastClose` + regression test UT-0831; branch name fixed; fold reworked to O(n); UT-0822 given its own describe block).
- v2.2.0 cycle 2: `artifacts/reviews/06-coding-and-ut-v2.2.0-technical-cycle2.md` — PASS (97%, reviewer-qa). Approved. (This line previously read "pending" — stale; corrected at v2.3.1.)
- v2.1.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.1.0-technical-cycle1.md` — FAIL (84%, 0C/1H/2M/1L). ISS-01 (High): activateParty ungated; ISS-02 (Medium): TOCTOU at publishDraft; ISS-03 (Medium): Date.now() in archivePetition; ISS-04 (Low): §7 limitation missing. All four resolved in v2.2.0; the cycle-2 review of that rework passed (v2.2.0 cycle 2, above — PASS 97%). (Tail previously read "merge sign-off withheld pending cycle-2 review" — resolved; corrected at v2.3.2.)
- v2.0.1 cycle 2: `artifacts/reviews/06-coding-and-ut-v2.0.1-technical-cycle2.md` — PASS (97%). Approved. (Line previously read "pending" — stale; corrected at v2.3.2.)
- v2.0.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.0.0-technical-cycle1.md` — FAIL (94%, 0C/0H/1M/1L). ISS-01 tsconfig node type missing; ISS-02 §3 note ambiguous range notation. Reworked into v2.0.1.
- v1.0.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v1.0.0-technical-cycle1.md` — FAIL (48%)
- v1.1.0: no cycle-1 review completed (superseded by v2.0.0 in this session)

### 5.1 Found by the Doc 04 test strategy — all fixed

| # | Defect | Severity | Fix | Regression test |
|---|---|---|---|---|
| 1 | `spendNullifier` was `external` with no caller restriction. Anyone could burn any nullifier and permanently deny that citizen the action — a one-call disenfranchisement. | **Critical** | Restricted to modules the registry deployed; `spenderAuthoriser` set by the timelock; no de-authorisation path, since revoking a live party's ability to record votes would be a pause button by another name. | UT-0325, UT-0326 |
| 2 | Enrolment nullifiers were scoped **per issuer**, so under 1-of-N acceptance one human could enrol once per accepted issuer and vote once per enrolment — silently turning 1p1v into 1pNv. | **Critical** | Nullifiers are now scoped per identifier **namespace**: every issuer reading the same underlying document shares a namespace, so the second enrolment collides and is refused. The cross-*type* residual is bounded and documented in ADR-003 rather than papered over. | UT-0109, UT-0109b |
| 3 | `issuerSetValid()` (≥2 issuers, ≥1 non-state) was a view that nothing enforced; `enrol()` never consulted it, so a region could fall to a single state issuer and keep enrolling. | **High** | `enrol()` now fails closed on the invariant. | UT-0109c |
| 4 | `vote`, `finalize` and `execute` were gated on the governance feature flag, so the emergency disabler could freeze a ballot that was already open — exactly the pause-a-live-vote capability CON-003 forbids. | **High** | Flags now gate *starting* a capability, never *completing* one already under way. `propose` is gated; `vote`/`finalize`/`execute` are not. | UT-0360, UT-0361 |

Two further findings were accepted as **documentation defects** and fixed: dangling references
to a non-existent ADR set (ISS-L3 from the v1.0.0 review — those references have been
resolved), and a RACI conflict where the same named individual owned both requirements and
architecture. Three findings were escalated to Doc 03 §16 as open questions rather than
silently closed: the NFR-025 / force-inclusion timing conflict, the un-measurability of
NFR-004's duplicate rate, and the Phase-1 public-tally exposure.

### 5.2 Found by the independent security scan — fixed in v1.1.0

| # | Defect | Severity | Fix | Regression |
|---|---|---|---|---|
| C-01 | `issueResidency` took `attesterId` as a caller-supplied `bytes32`, and `Attester` had no address field. The id is public — it is emitted in `AttesterAuthorised` — so **anyone could mint unlimited residency credentials**. That tree is the Sybil boundary for joining and endorsing *and* the source of `verifiedResidents()`, so the attacker controlled the counter meant to bound them. | **Critical** | An attester is an account: `registerAttester` records an `issuer` address and `issueResidency` checks `msg.sender`. | SEC-C01 |
| C-02 | `vote()` never read `publicSignals[0]` or `[1]`. Nothing bound a vote to the proposal's snapshot root, `Party.knownRoot` was written and read by no contract, and `JoinedAfterSnapshot` was declared and never thrown. **A prover could build their own Merkle tree and vote once per secret.** ADR-008 §2 existed only in prose. | **Critical** | The proposal records `snapshotRoot` and `snapshotAt`; `vote()` requires both, plus the party id. | SEC-C02 |
| C-03 | Circuits declared 7 and 6 public signals; contracts required 6 and 5. The dropped inputs were exactly the timestamps. With real verifiers every action would revert permanently; widened without binding, expiry would be vacuous. `personhood_enrol.circom` **did not exist at all**. | **Critical** | Arities aligned end to end (4 / 7 / 6), `provedAt` bounded by `MAX_PROOF_AGE` in the contract, `personhood_enrol.circom` written, and the contract is now the documented arity of record (`packages/circuits/README.md`). | SEC-C03 |
| C-04 | `surgeActive()` computed `endS.memberCount - startS.memberCount` **before** the guard that checked which was larger. One member leaving panicked a view that `join`, `leave` and `propose` all call — bricking the party permanently, in a system with no admin to unstick it. | **Critical** | Guard moved ahead of the subtraction. | SEC-C04 |
| C-06 | Nothing bound a proposal's tier to what its `callData` could do. Tier 0 is 5% quorum, no discussion and **zero timelock** — so `dissolve()` under a Tier-0 proposal ended a party in three days. | **Critical** | `requiredTier(target, callData)` classifies the call and `propose()` rejects an under-priced tier. Unrecognised calls into the party fail closed at constitutional. | SEC-C06 |
| H-01 | `setSpenderAuthoriser` was re-callable and self-authorising, so one call made any address an irrevocable universal nullifier burner. | **High** | Set once; a second call reverts. | SEC-H01 |
| H-03 | `uint16` truncation in the basis-point conversion: 66 votes against a 10-member snapshot reported 464 bps and defeated a proposal that passed. | **High** | Clamped to `BPS` before narrowing. | SEC-H03 |
| H-04 | `withdrawEndorsement` checked no jurisdiction, no root, and **no prior endorsement** — any resident could decrement any petition repeatedly. A one-call veto on whether a party may exist. | **High** | Withdrawal proves against the *endorsement* scope and requires that nullifier to have been spent; a per-petition `withdrawn` map stops a repeat. | SEC-H04 |

### 5.3 Open, not fixed in this drop

- **C-05 fork initiation is taken from calldata.** `openForkPetition` accepts `initiators` and
  `forkInitiatedAt` as parameters with no on-chain initiation state, so `FORK_MIN_INITIATOR_BPS`
  and `FORK_COOLING_OFF` are currently decorative. The `fork` flag is off in every environment
  above dev, and the fix — a real `initiateFork` accumulating per-member nullifier signatures —
  is Phase-3 scope. **It must not be enabled before then.**
- **H-02** `surgeActive` is O(n²) over up to 512 storage samples on a state-changing path.
- **H-05** there is no expedited path to retire a compromised circuit.
- **H-06** the published `identityCommitment` is a stable pseudonym across a party's events.
- **H-07** root history is 64 *insertions*, not a time window, so a busy region can evict a
  root a citizen is still proving against.
- Seven medium and six low findings, including missing indexer events and no reorg handling.

All of these are recorded in the scan and routed; none is closed by silence.

## 6. Feature-flag ledger (ship dark)

| Flag | dev | staging | prod | On-chain | Removal target |
|---|---|---|---|---|---|
| `petitions` | on | on | on | yes | GA v1.0.0 |
| `party_governance` | on | on | on | yes | GA v1.0.0 |
| `elections` | on | on | **off** | yes | Phase 3 complete |
| `recall` | on | on | **off** | yes | Phase 3 complete |
| `maci_voting` | on | **off** | **off** | yes | Phase 3 — becomes mandatory |
| `private_endorsement` | on | off | off | yes | Phase 4 |
| `delegation` | on | off | off | yes | Phase 4 — pending capture analysis |
| `treasury` | on | on | **off** | yes | Phase 3 — pending per-jurisdiction legal review |
| `fork` | on | on | **off** | yes | Phase 3 |
| `l1_force_inclusion` | on | on | on | no | never — permanent escape hatch |
| `sponsored_gas` | on | on | on | no | never — degrades to self-pay, never to denial |

Every flag carries a removal target; `permanentFlags()` returns empty and a test asserts it.
The two flags with removal target "never" (`l1_force_inclusion`, `sponsored_gas`) are
explicitly excluded from the `permanentFlags()` assertion by design — they are permanent by
policy, not by accident, and their degrades-gracefully behaviour is separately tested.

**On-chain enforcement note (v1.1.0 correction, carried forward from v1.0.0).** Only
`petitions`, `party_governance`, `maci_voting` and `fork` are enforced by a contract today.
`elections`, `recall`, `treasury`, `delegation` and `private_endorsement` are marked
`onChain: true` in the registry because they *will* be enforced by the modules that implement
them — and those modules do not exist yet. Until they do, those five flags gate nothing
on-chain, which is harmless only because the capability they name is entirely unimplemented.
When each module lands it must read its flag in the same commit.

## 7. Known limitations of this drop

1. **Verifiers are mocks.** Real Groth16 verifiers require the Phase-2 ceremonies. The
   deployment-safety check refuses to promote any environment whose registry contains a
   contract exposing `IS_INSECURE_MOCK()`, and a test asserts the check itself works.
   `packages/sdk`'s seam stubs (`StubPhoneVerifier`, `StubIdDocumentChecker`) similarly return
   `IS_INSECURE_MOCK() = true` and are blocked from promotion past devnet by the same gate.
2. **Circuits are written but not compiled.** `packages/circuits` holds the Circom sources for
   `residency_member`, `tenure_member`, and `personhood_enrol` (the last was missing at v1.0.0
   and written in the v1.1.0 SEC-C03 fix); compiling them needs the `circom` binary, which is
   a Phase-2 CI job. Nothing in this drop claims a proof has been verified.
3. **The fork path must stay disabled** until C-05 is fixed (§5.3).
4. **Elections, Recall, Treasury and the MACI adapter are not implemented.** They are Phase-3
   scope, and their flags are off in every environment above dev. The `Governor` already
   refuses the public-tally path when `maci_voting` is on, so the switchover cannot leave both
   paths open.
5. **`Party.growthSamples` trims by array shift** and `surgeActive` is O(n²) over the
   512-sample bound, on a path that `join` and `leave` both take. A ring buffer and a cached
   verdict are required before mainnet scale (scan finding H-02).
6. **Phase-1 tallies are publicly readable on-chain.** The client and indexer suppress interim
   counts, but chain state is chain state. This is a real limitation, stated plainly in the
   release notes and closed by MACI in Phase 3 — not hidden behind a UI that implies more
   privacy than the protocol currently delivers.
7. **Tally publication pending audit-contract wiring.** `ConventionalBallotService.computeTally()`
   returns a result with `publicationPath: 'PENDING-audit-contract-wiring'`. The on-chain write
   of the tally result hash to the audit contract is an intentional integration point left for
   the sprint that wires the v1 audit-record contract subset (DES-097). The field is a
   placeholder; callers must not treat it as a completed audit path.
8. **Fonts not bundled.** `packages/ui/tokens.css` carries fallback stacks only. No Fraunces
   or Inter self-hosting is implemented. The Google Fonts CDN is blocked by the strict CSP in
   the PWA shell (ADR-012); self-hosting is the default requirement. DES-082 install-floor
   check is owed before the first production build that loads `packages/ui` in a browser.
9. **`ICredentialStore` interface owed.** `ConventionalEligibilityVerifier` receives a
   `credentialStore` as a constructor dependency (currently `Map<memberId, IdDocumentResult>`).
   In production this is a database query interface. A formal `ICredentialStore` seam interface
   (analogous to `IPhoneVerifier` and `IIdDocumentChecker`) is owed at the enrolment sprint;
   the current `Map` direct-dependency is a placeholder.
10. **DES-094 clause 8 disclosure affordance owed (enrolment sprint).** The normative clause 8
    obligation (Doc 03 §10.12.3) requires an accessible data-practices disclosure link adjacent
    to the `anon` pill in non-vote contexts (browsing, joining, endorsing). This obligation is
    deliberately NOT implemented in this session — no screens ship. It MUST be implemented
    before any screen rendering the `anon` pill in a non-vote context is shipped to production.
11. **SIM-swap recovery DES owed.** ADR-025 §(c-iv) notes that the FR-058/FR-071 account-recovery
    flow's interaction with phone-number-based recovery requires engineering decisions that are
    "NOT made in this ADR" and that "a DES owed before the enrolment sprint." No recovery path
    is implemented; this placeholder is flagged for the enrolment sprint.
12. **InMemoryPartyStore is IS_INSECURE_MOCK=true.** `packages/sdk/src/party-creation.js`'s
    `InMemoryPartyStore` is in-memory persistence, blocked past devnet by the CI promotion gate.
    The production Postgres-backed store (DES-097) is later wiring. The IS_INSECURE_MOCK
    delegation chain is enforced: InMemoryPartyStore → PartyCreationService → CI gate.
13. **Jurisdiction seed data is not the production registry.** `apps/web/src/config/jurisdictions.ts`
    contains a curated set of five pilot-region codes and approximate population denominators for
    demo use. Production: the DES-007 population oracle and live registry service replace this
    seed. Population figures are approximations only.
14. **Emblem is text-only (Phase 1).** An image emblem requires a dedicated DES (flagged at
    D3 ruling 2026-08-25). Text emblems (1–8 chars) are implemented; image emblems are blocked
    pending that DES.
15. **NON_VIOLENCE_CLAUSE text requires approver ratification (Flag: CLAUSE-TEXT-01).** The
    clause text in `packages/protocol/src/constants.js` is engineer-authored per D5 (2026-08-25)
    and must receive explicit approver ratification before Gate 2. The text is frozen in code so
    it is verifiable; any change requires a protocol governance action (ADR-010).
16. **REPETITION_COOLDOWN_SECONDS requires approver ratification (Flag: COOLDOWN-01).** No
    published figure found in Doc 02/03. Engineer-chosen at 30 days (2 592 000 s). Needs
    ratification.
17. **Arabic party-creation strings are a working-draft engineer translation.** The new i18n
    strings in `apps/web/src/i18n/ar.ts` (party-creation section) are engineer-authored and
    flagged for translation-quality review at Doc 14 (the technical-writer phase).
18. **PrivacyStatus not rendered in the party-creation demo flow.** The petitions/new page demo
    has no authenticated session; DES-094 clause 1 would return null. Rendering PrivacyStatus
    without a session would be dishonest (it would imply a session-backed guarantee that does not
    exist). The absence is deliberate and documented in the page source comment.
19. **`activateParty` threshold gate is at the SDK service layer; production wiring must
    supply accurate endorsement counts.** `PartyCreationService.activateParty()` now enforces
    the FR-018 / FR-016 threshold by calling `petitionThreshold()` (protocol governance.js)
    with the jurisdiction denominators stored on the petition row (`jurisdictionPopulation`,
    `jurisdictionVerified`). Activation is refused with `THRESHOLD_NOT_MET` (carrying `.current`
    and `.required`) when `petition.endorsements` falls short. No human step, no bypass
    parameter. The gate is correct for all code using this service. However, the
    `petition.endorsements` field is kept accurate by the production persistence layer
    (DES-097 Postgres-backed store); the service reads what the store provides. A store that
    does not correctly increment the endorsement count — or that wires a wrong on-chain oracle
    — would allow premature activation. Tests in this drop seed endorsement counts
    deterministically via the store; real endorsement feed wiring is a DES-097 integration
    task.
20. **One-active-party EXPLICIT-LEAVE form — RESOLVED (a) (Flag: FR-064-SEMANTICS — CLOSED
    2026-08-29).** The divergence this limitation tracked is resolved by approver ruling:
    **option (a), v1 EXPLICIT-LEAVE** (Rathish, Human Approver, 2026-08-29). Joining a
    second party does NOT auto-void the first — a member must explicitly, on the record,
    leave their current party (leaveParty(), FR-022) before joining another; nothing
    consequential happens by silence. FR-064's text is amended accordingly in **Doc 02
    v2.15.0 §4.6** (the superseded auto-void wording is annotated in place, not deleted).
    Automatic voidance and the bypass-proof nullifier enforcement are **DEFERRED to
    DES-065** at the v2 seam swap, where one-active-membership is enforced
    cryptographically — the behaviour implemented in this drop (ALREADY_MEMBER_ELSEWHERE
    refusal until an explicit recorded leave; fresh joinedAt on every join) is the subset
    the v2 mechanism formalises. **No code change required**: the drop already implements
    the ruled semantics. NOTE: the RTM's FR-064 Must row REMAINS OPEN pending the DES-065
    build (v2) — the ruling unblocked the semantics, not the row.
    Raised 2026-08-28 (v2.3.0); recorded as a tracked decision at v2.3.1; RESOLVED (a)
    2026-08-29 (v2.3.3).
21. **Official-strength contribution is v1 app-side state; no protocol/on-chain counterpart
    yet.** `contributeToStrength()` (FR-123(a)) records counted members in the party store;
    uniqueness is enforced by the counted-members set, not by the verifier's
    `isUniqueInScope()` nullifier record (which would wrongly block a legitimate
    re-contribution after leave→rejoin under v1 semantics). The v2 path (DES-065 membership
    nullifier; on-chain strength) replaces this at the seam swap. The FR-131 clause (d)
    notice surface is built at the parties directory; the SCR-13/SCR-14 ballot surfaces
    remain owed (voting is a later session).
22. **The parties directory demo visitor is honestly open-tier.** The demo verifier is
    stub-backed (IS_INSECURE_MOCK=true) with an EMPTY credential store: the counting attempt
    always shows the FR-131 clause (d) refusal. No page control can mark the visitor
    ID-verified — building that would fake the enrolment flow this repo has deliberately not
    built (CON-015). The verified-member path is covered by tests (UT-0826/UT-0865) that
    inject a DES-100-allowlist credential row directly.

## 8. Commit and branch conventions

**Branch model:** trunk-based on `main`. Feature work runs on short-lived named branches
(current: `build/v1-join-membership`) merged to `main` by pull request. The engineer NEVER merges
their own work: `reviewer-qa` signs the merge (Doc 08 verification).

**Conventional Commits** referencing `US-####` where a commit implements a story. The scaffold
commits (`build/v1-scaffold`) predate the backlog US rows that will formally cover this work —
the product-owner and tester are closing that gap in this session. Future commits MUST carry a
`US-####` reference where a story exists; scaffolding and infrastructure commits should carry
`feat(scaffold):` or `chore(infra):` with a brief scope.

**Small, reversible commits.** No commit should be "fix everything". Each commit should
represent one logically atomic change that can be reverted without undoing adjacent work.

**Prior trunk note (v1.0.0, corrected).** v1.0.0 of this document named the trunk as
`claude/decentralized-political-party-fy8b1k` — a tool-generated branch name. This has been
corrected: the canonical trunk is `main` (ISS-L2 from the v1.0.0 review).
