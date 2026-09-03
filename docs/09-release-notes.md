# Release Notes — Trumocracy

```
Document ID:   REL-trumocracy-0.1.0
Version:       1.4.0            (document version; SemVer)
Release:       0.1.0            (Phase-1 walking skeleton, public testnet)
Status:        Approved — 09-release-notes-v1.4.0-business-cycle4.md (PASS 97%, 0C/0H/0M/2L;
               reviewer: tester, neutral, PM-assigned). Loop closed INSIDE the 5-cycle cap at
               cycle 4: 77% → 89% → 94% → 97%. Two Lows survive and are accepted on this
               version: the unresolvable `REF-##` citations (PM-accepted across all four
               cycles, owed by the sre at the next Operate cycle) and the §0 staleness fixed
               in this same edit. **This PASS closes the document-review loop only — it is
               NOT a Gate-2 sign-off, and it is NOT a release authorisation. This document's
               own verdict on release 0.1.0 remains HALTED (§0, §7).**
Owner:         Chen Wei — Reliability Lead (sre), Doc 13 §7.1
Source:        SRS-TRUMOCRACY §4.45 FR-131 · §4.46 FR-132 · §4.41 FR-122/FR-123 (docs/02-requirements-srs.md) ·
               UG-TRUMOCRACY v2.3.0 §1.2, §2.3, §2.6, §4.3 (docs/14-user-guide.md, Approved) ·
               packages/protocol/src/flags.js · packages/contracts/src/core/* ·
               packages/contracts/src/mocks/MockVerifier.sol · packages/sdk/src/party-creation.js ·
               apps/web/src/i18n/en.ts · apps/web/src/components/PartyMembership.tsx ·
               apps/web/src/components/ProposalsAndDebate.tsx · Doc 03 §5.2, §7 · Doc 13 §3.1, §9
Last updated:  2026-09-02
```

> **Based on:** Keep a Changelog + Semantic Versioning. **Produced in:** Launch. **Approved at:** Gate 2.
> Customer-facing section is plain language; the internal record carries the facts and traceability.
>
> **Document history — v1.4.0 (2026-09-02).** Rework cycle 3 against
> `artifacts/reviews/09-release-notes-v1.3.0-business-cycle3.md` (business, cycle 3 — **FAIL 94%,
> 0 Critical / 0 High / 1 Medium / 3 Low**; trajectory 77% → 89% → 94%). The review found every
> substantive defect from cycles 1 and 2 closed and no new one, and recorded the `FR-131` word ban
> clean for a third consecutive version and the HALT intact. **No content claim is changed by this
> version.** Four mechanical repairs:
>
> - **`ISS-01` (Medium) — two pieces of damage this document did to itself at edit boundaries.**
>   §7 carried a duplicated tail of a pre-edit line, dangling after the sentence it repeated; and the
>   re-pin note had lost the five words *"its row describes, it moved"*, which left its closing
>   sentence ungrammatical and removed the one instruction it exists to give — how to read a pin that
>   does not resolve. Both repaired. **Attribution corrected:** the review recorded these as
>   transcription residue; on re-reading the cycle-3 spec, both were **authoring** errors — one FIND
>   block stopped mid-sentence while its replacement re-emitted the sentence whole, and one
>   replacement silently dropped words its own FIND had consumed. The applier did what it was told
>   in both cases.
> - **`ISS-02` (Low).** "all six consuming surfaces" corrected to **five files carrying six
>   comments** — `app/petitions/new/page.tsx` has two. The six citations were already right and the
>   load-bearing claim (every consuming surface carries an explicit non-render comment) was already
>   true; only the count of surfaces was wrong.
> - **`ISS-03` (Low).** §7's owed-item 3 said "Version 1.2.0 corrects the v1 position…" — a stale
>   self-reference, now version-neutral and consistent with the §0 coverage note.
> - **Increment:** the review suggested v1.3.1; the house rule is that a Medium-or-worse FAIL takes
>   at least a **minor** bump, so this is v1.4.0.
>
> `ISS-04` (unresolvable `REF-##` citations) remains PM-accepted and owed at the next Operate cycle.
> **The release verdict is unchanged: HALTED, Gate 2 not approved** (§0, §7).
>
> **Document history — v1.3.0 (2026-09-02).** Rework cycle 2 against
> `artifacts/reviews/09-release-notes-v1.2.0-business-cycle2.md` (business, cycle 2 — **FAIL 89%,
> 0 Critical / 1 High / 2 Medium / 2 Low**; trajectory 77% → 89%). The review verified eleven of
> thirteen cycle-1 findings closed against shipped source, and recorded the `FR-131` word ban still
> clean and the HALT intact. Closed here:
>
> - **`ISS-01` (High) — a false commit attribution that v1.2.0 itself introduced, in five places.**
>   v1.2.0 said `REL-LIM-03`, `-04` and `-07` were "all three closed in the same remediation,
>   `c854c0a`". Only `REL-LIM-03` was. `git log -S` places the `authorisedSpender[msg.sender]` guard
>   (`REL-LIM-04`) and the `FLAG_GOVERNANCE` NOTE (`REL-LIM-07`) in **`b8cf2ce`**; `c854c0a`'s only
>   change to `PersonhoodRegistry.sol` is the four-line `H-01` set-once guard, which *completes* the
>   spender fix rather than originating it. The companion pointer "Doc 06 §5 `C-01`–`C-06`" was
>   wrong for the same two rows: Doc 06 §5 holds **two** tables, and `REL-LIM-04`/`-07` are §5.1
>   numbered defects 1 and 4, not `C-` rows. Each closure is now attributed to its own commit at all
>   five sites, and the range pointer is replaced by the per-row citations that were already correct.
> - **`ISS-02` (Medium) — the headline correction had not reached the sentence a citizen reads.**
>   The customer-facing bullet still said **three** `FR-131`-violating code strings while four other
>   places said five. Corrected, with the five sites' character summarised so the number is not the
>   only thing carrying the meaning.
> - **`ISS-03` (Medium) — a false compliance assertion.** The `REL-LIM-18` watch item claimed
>   `PrivacyStatus.tsx` is "`FR-131`-compliant by construction". It is not: `:236` sets
>   `title: 'Verified — private'`, rendered at `:333-335`. The component is protected today by being
>   **unmounted**, not by its construction. The exclusion from the counted five stands — every
>   consuming surface carries an explicit non-render comment — but it is now stated on its true
>   basis, and the string is routed as a **pre-mount blocker** rather than a watch item.
> - **`ISS-L1` (Low).** `promotion-gate.mjs:167-168` were labelled "the throws"; they are the gate's
>   published description strings. The throws are `:88` and `:144`.
>
> **Two further errors of the same class were found by this version's own sweep and are fixed here,
> though the review did not raise them:** the re-pin blockquote said "Eight were stale" when nine
> rows were re-pinned (and the count is ambiguous by construction, so it is replaced with an
> enumeration); and `REL-LIM-18` described sites (3) and (5) as "customer-facing" when (5) is a
> source-code comment that no citizen reads.
>
> **On method.** The cycle-2 report observed that both this document's Critical (cycle 1) and its
> High (cycle 2) were *summarising* sentences asserting something tidier than the records beneath
> them supported, each published under a claim of source verification, while the per-row citations
> they sat above were correct. That is accurate. Before this version was written, every generalising
> sentence in the document was re-read against the commit, line or table that proves it — fourteen
> in total, of which four were false and are fixed here, ten verified true and kept. Where a roll-up
> added nothing the rows do not already carry, it has been replaced by the enumeration.
> `ISS-L2` (unresolvable `REF-##` citations) remains PM-accepted and owed at the next Operate cycle.
> **The release verdict is unchanged: HALTED, Gate 2 not approved** (§0, §7). Authored by the sre as
> an anchored FIND/REPLACE spec (`artifacts/sre-2026-09-02T1855-doc09-rework3-spec.md`).
>
> **Document history — v1.2.0 (2026-09-02).** Rework cycle 1 against
> `artifacts/reviews/09-release-notes-v1.1.0-business-cycle1.md` (business, cycle 1 — **FAIL 77%,
> 1 Critical / 3 High / 5 Medium / 4 Low**; reviewer: tester, PM-assigned). The report's verdict on
> the v1.1.0 `FR-131` sweep — clean document-wide — stands and is not reopened. What failed was the
> same discipline applied to the rest of the document. Closed:
>
> - **`ISS-01` (Critical) — the document published a Critical security defect that had been closed
>   three weeks earlier, and routed an engineer to fix it.** `REL-LIM-03` claimed
>   `RegionRegistry.issueResidency` does not bind the caller to the attester. It does:
>   `RegionRegistry.sol:215` tests `att.issuer != msg.sender`, the check landed in `c854c0a`
>   (2026-08-09), and Doc 06 v2.4.3 §5 records the identical fix as `C-01` / `SEC-C01`. The row is
>   now closed and verified, and removed from §7's HALT reasons, from the internal record's open list
>   and from the engineer routing. **The HALT does not weaken:** reasons 1 (RTM — 122 of 138 Must
>   rows OPEN) and 2 (rollback undrilled) each block Gate 2 on their own, and §7 now says so.
> - **`ISS-02` (High) — a second false Gate-2 blocker.** All three supporting facts in `REL-LIM-12`
>   were falsified: `script/` holds `deploy.mjs` as well as `compile.mjs`; `DEPLOY_ORDER` and
>   `WIRING_STEPS` in `promotion-gate.mjs` are the deployment source of truth, not `fixture.mjs`; and
>   the safety gate is `assertSafeToPromote()`, which throws, not a test assertion at
>   `adversarial.test.mjs:320-329` (that pin is `UT-0334`). The row is re-based on what remains true
>   and its Gate-2 verdict re-justified on that narrower ground.
> - **`ISS-03` (High) — an unqualified anti-capture guarantee contradicting Doc 14 v2.3.0.** Both
>   issuer bullets now carry the contract-skeleton-versus-v1 qualifier the other Security bullets
>   received, and state the Phase-1 pilot posture plainly: Aadhaar-only, one government-run rail,
>   `ADR-003`'s plurality rule **not in effect in this pilot**.
> - **`ISS-04` (High) — transcription damage repaired.** The v1.1.0 mechanical transcription spanned
>   a list-item boundary in §Upgrade/migration notes, leaving a truncated duplicate heading and
>   destroying item 4 ("Circuit changes never disenfranchise in-flight actions"), orphaning its tail.
>   The list is restored to four clean items, item 4 recovered verbatim.
> - **`ISS-05`, `ISS-06` (Medium) — the register re-verified against `HEAD`.** `REL-LIM-18` was
>   undercounting: the `FR-131` violations in code are **five**, not three, adding
>   `packages/sdk/src/client.js:455` and re-classing `ReceiptFreedomBanner.tsx:6-10` as a violating
>   comment rather than render evidence. Eight stale source pins across `REL-LIM-05`, `-07`, `-08`,
>   `-09`, `-10`, `-13`, `-15` and `-16` are corrected, and the register now carries a dated re-pin
>   line so a future reader can tell a stale pin from a moved line.
> - **`ISS-07`, `ISS-08` (Medium) — two further Doc 14 consistency gaps.** "Join and leave any party,
>   freely and unconditionally" contradicted the shipped one-active-party rule (`FR-064`;
>   `apps/web/src/i18n/en.ts:134-138`) and is corrected; and the Aadhaar-only pilot exclusion — the
>   largest real limit on **who may be counted** — is added to every counting-tier claim.
> - **`ISS-09` (Medium) — the §Changelog placeholder carried a MUST forbidding this document's own
>   approval.** Resolved by writing the record rather than deferring it: fourteen dated
>   Conventional-Commit product commits, `48b07e0` (2026-08-08) to `31b6df9` (2026-08-29), grouped by
>   drop, with an explicit statement of what the record is *not*.
> - **`ISS-L2`, `ISS-L3` (Low).** The unbacked `TC-EXIT-*` pin is withdrawn; the §0 coverage note's
>   opening clause no longer overstates the boundary and now names the proposals/deliberation drop it
>   had omitted.
>
> `ISS-L1` (unresolvable `REF-##` citations) remains PM-accepted and is owed by the sre at the next
> Operate cycle, together with the `REL-LIM-03` cascade into Doc 10 (§3.1 checklist, §6) and Doc 11
> (PB-ATTEST, the limitation register), which carry the same corrected claim citing this document as
> their source. **The release verdict is unchanged: HALTED, Gate 2 not approved** (§0, §7). Authored
> by the sre as an anchored FIND/REPLACE spec
> (`artifacts/sre-2026-09-02T1830-doc09-rework2-spec.md`) and transcribed mechanically.
>
> **Document history — v1.1.0 (2026-09-02).** `FR-131` compliance rework, on the approver directive
> of 2026-09-02 (Rathish), which found in this document the same **Critical** class that failed
> Doc 14 v1.0.0 — an anonymity claim v1 does not deliver, asserted in a public-facing material.
> Doc 02 §4.45 `FR-131` closes by forbidding the words "private", "anonymous", "receipt-free" and
> "secure" as descriptions of v1 voting behaviour in the v1 product's UI, README **and all
> public-facing materials**; release notes are a public-facing material. Three violation classes were
> swept, each corrected claim pinned to shipped source rather than to a changelog:
>
> 1. **Anonymity/privacy overclaims about v1 voting** — the "What this release does not do" section
>    rebuilt on the `FR-131`(a)–(d) disclosure (v1 voting is NOT anonymous, NOT receipt-free, NOT
>    coercion-resistant; the platform database CAN see vote direction and party membership; the
>    cryptographic private ballot arrives with the Definition-B (v2) privacy layer), in the
>    future-framed pattern approved for Doc 14 v2.3.0 §2.6, since no ballot-casting screen ships yet.
>    The Highlights, Security and can/cannot claims were requalified and `REL-LIM-02` restated.
> 2. **Tamper-evidence / public-record overclaims** — "anyone can check the record", "re-compute it
>    independently" and "complete verifiable state" qualified to what the shipped v1 store actually
>    provides: append-only inside Trumocracy's own store, not published, and not independently
>    checkable until the `DES-097` audit-anchoring release (the Doc 14 `ISS-C2-01` class).
> 3. **Two-tier omission** — the open-tier / counting-tier model (`FR-122`, `FR-123`, `FR-131`(d),
>    `FR-132`) added wherever this document makes a participation claim.
>
> Also corrected, as facts that had become false: §0, the internal record and the Links table
> asserted that Docs 07/08 do not exist and that Docs 02–14 were unreviewed — Docs 01–08, 13 and 14
> all carry passing `document-review` reports as of 2026-09-01. New disclosed limitation
> `REL-LIM-18` recorded the surviving `FR-131` violations in **code**, routed to the engineer and not
> fixed there (a documents-only session). The release verdict was unchanged: HALTED, Gate 2 not
> approved.
> **Document history — v1.0.1 (2026-08-21):** Corrected MS-08 ceremony milestone date from 2027-03-05 to 2027-01-25 in §0 (release-gate status table) and §5 (deprecation schedule) per `DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md` REC-1 and Doc 13 v2.0.2 re-plan (assurance-based phase-2 campaign per ADR-022). No other content changed.

---

## 0. Release-gate status — read this before acting on this document

**This release has NOT been approved and MUST NOT be promoted to production.**

| Gate-2 precondition (Doc 13 §3.3) | State on 2026-09-02 |
|---|---|
| RTM (Doc 08) zero gaps in Must rows | **Not met** — `docs/08-traceability-matrix.md` now exists at **v2.7.0, Approved**, and records **138 Must rows: 16 COMPLETE, 122 OPEN** (Doc 08 §3.1 and gap log). The check that could not be performed at the first readiness pass now can be, and it **fails** |
| All suites green, 0 Sev-1/2 (Doc 07) | **Partially met** — `docs/07-test-cases-suites.md` now exists at **v2.4.4, Approved**, recording **610 suite cases green** and no Sev-1/2 of record. That is a suite result, not a Gate-2 pass on its own: the NFR measurements below are still absent |
| Coding & UT record (Doc 06) | **Met as a document** — present at **v2.4.3, `Status: Approved`** (`artifacts/reviews/06-coding-and-ut-v2.4.3-technical-cycle1.md`, PASS 100%). Its §7 "Known limitations of this drop" remains open |
| User Guide published (Doc 14) | **Not met** — present at **v2.3.0, `Status: Approved`** (review loop closed at PASS 96%), but publication happens **at** Gate 2, which is not approved |
| Two independent audits, 0 critical/high open (`NFR-009`) | **Not met** — MS-09/MS-10 target 2027-03-12 / 2027-04-16 |
| Six ceremony transcripts, `zkeyHash` frozen | **Not met** — MS-08 target 2027-01-25 (Doc 13 v2.0.2; batched assurance-sized phase-2 campaign per ADR-022); verifiers are mocks |
| Rollback drilled < 15 min (`NFR-020`) | **Not met** — drill defined in Doc 10 §8.6, not yet executed |
| MACI 5-of-7 committee constituted (`ADR-006`) | **Not met** — MS-12 target 2027-05-07 |
| Passing `document-review` reports | **Partially met** — Docs 01–08, 13 and 14 each carry a passing report in `artifacts/reviews/` as of 2026-09-01, and **this document now carries one for its current version** (`09-release-notes-v1.4.0-business-cycle4.md`, PASS 97%, cycle 4 of 5; the three earlier cycles failed). **Docs 10, 11 and 12 carry none** — which is why this precondition is still not met |

Gate 2 is milestone **MS-13**, target **2027-05-14**, and it gates the **Phase-3** production rollout
— not this release. Release `0.1.0` is the **Phase-1 walking skeleton on public testnet**
(Doc 13 §3.1, checkpoint **MS-05**, target 2026-11-27). It is a checkpoint exit decided by the Eng
Lead and Test Lead; it is **not** a launch and it carries no Gate-2 authority.

The sre has therefore drafted Docs 09–12 as Gate-2 **inputs** (Doc 13 §3.3 item 10) and **halted the
release**. See §7 of this document and the `<missing_information>` block returned with it.

> **What this document covers, and what it does not.** Release `0.1.0` as described here is the
> **Phase-1 contract skeleton on public testnet**. This version **does not re-scope the release** to
> add the Definition-A (v1) database application since merged to trunk — party creation, the parties
> directory, join/leave, membership history, the counting-tier gate, and the proposals and
> deliberation flow (`apps/web`, `packages/sdk`, `packages/protocol`). It **does** correct the v1
> position wherever the pre-existing text overclaimed it, which is why roughly a dozen statements
> below — in Highlights, the membership bullet, the Security section, `REL-LIM-02`, the two-tier box
> and the can/cannot table — describe the v1 application directly. A release-notes refresh that
> covers those drops as *release content* is **owed at the next release cut** and is recorded as an
> open item in §7. This matters for reading the rest of the document: several properties below are
> design properties of the **contract skeleton** and are **not** properties of the shipped v1
> application. Where they differ, this version says which one it is describing, because the
> difference is the whole subject of `FR-131` (Doc 02 §4.45) and `REL-LIM-01`.

---

## Customer-facing notes

### ✨ Highlights

You can start a political party from nothing but agreement. Write a founding charter, open a
petition, and if enough verified people in your region publicly back it, **the party comes into
existence automatically** — no committee approves you, no office reviews you, and nobody at
Trumocracy can stop you or speed you up. Once a party exists, **anyone may join with a phone number
alone** — no approval, no sponsor, no fee — and read, discuss, support and organise (`FR-020`,
`FR-122`). **Being counted is a separate step.** Contributing to a party's official strength number,
casting a vote that decides a binding decision, and standing as a candidate each require a
government-ID check first (`FR-123`, `FR-132`(b)). **And in this pilot that check has one rail
only.** The Phase-1 pilot region is India and the only accepted document is **Aadhaar**
(`FR-121`, `OI-04`; Doc 14 v2.3.0 §1.2): a person who does not hold Aadhaar can join, read, discuss,
support and organise, but **cannot yet be counted, cast a binding vote, or stand** — a real
exclusion, recorded as a platform limitation (`H-19`), not hidden. `ADR-003`'s standing rule of at
least two independent rails, one of them not state-run, is **not in effect in this pilot**
(`FR-129`, `OI-20`). A vote that counts carries a weight of exactly 1 and cannot be bought, borrowed
or inherited. **What this release does not give you is proof of unique personhood:** the v1 identity
check establishes "a real, legal-age person" — it is explicitly not one-person-one-vote, and this
document does not claim otherwise (`FR-132`(d); Doc 02 §4.46).

This first release is a **public testnet dress rehearsal**. The governance machinery is real. The
privacy machinery is not yet (see "What this release does not do", below) and **no real political
organising should be done on it**.

### Added

- **Petitions and automatic activation** (`FR-013`–`FR-018`, `DES-009`, `DES-010`). Open a petition
  for a new party with a charter, a jurisdiction and a window of 30–365 days. The number of
  endorsements needed is `max(threshold% × population, threshold% × verified residents, 500)` — the
  500 floor means no party can be chartered by a handful of accounts, ever. The threshold is
  **frozen at the moment the petition opens**, so nobody can move the goalposts under a live
  petition. Default threshold 2% (configurable 0.5%–20%).
- **Endorse and un-endorse** (`FR-014`, `FR-015`, `DES-011`, `DES-012`). One endorsement per person
  per petition, enforced cryptographically rather than by an account check. You may withdraw at any
  time before the party activates.
- **Party activation with no human step** (`DES-009`). When the count reaches the requirement,
  anyone may call activation; the party and its governor are created on the spot. There is no
  approve, reject, review or feature function anywhere in the registry.
- **Membership: join and leave, with nobody's permission** (`FR-020`–`FR-023`, `FR-064`, `DES-013`,
  `DES-014`). Joining records only a commitment and a join time. **Time in the party affects what you
  are eligible to do; it never affects how much your vote counts.** Nobody approves you, nobody may
  refuse you for lacking an identity document, and nobody can remove you — `FR-020` is absolute
  (`FR-122`). **One qualification, and it is not a gate on anyone:** in the shipped v1 application
  you hold **one active membership at a time**. Joining a second party while still an active member
  of the first is refused, naming the party that blocks it, until you leave — an explicit, recorded
  action that needs nobody's permission and takes effect at once (`FR-064` explicit-leave form;
  `packages/sdk/src/party-creation.js` `ALREADY_MEMBER_ELSEWHERE`; shipped copy
  `parties.onePartyRule` / `parties.alreadyMemberElsewhere`, `apps/web/src/i18n/en.ts`; Doc 14
  v2.3.0 §2.3). **What joining does not by itself give you is a counted membership.** Until the
  government-ID check is passed a member is **open-tier**: not part of the party's official strength
  number, not able to cast a binding vote, not able to stand (`FR-123`, `FR-132`(b)); the
  `FR-131`(d) notice states this plainly before any such action is refused. In this pilot that check
  accepts **Aadhaar only**, so a person without it stays open-tier indefinitely (`FR-121`, `H-19`;
  Doc 14 v2.3.0 §1.2). And in the Definition-A (v1) application, membership is **not published** but
  **Trumocracy's own records can link an account to the party it joined** — that link is real and it
  is never published (`FR-131`(b); shipped copy `parties.joinPrivate`, `apps/web/src/i18n/en.ts`;
  Doc 14 v2.3.0 §2.3).
- **Tiered governance with public tallies** (`FR-024`–`FR-028`, `DES-016`, `DES-018`, `DES-021`).
  Four decision tiers with escalating protection — operational, policy, structural, constitutional —
  each with its own quorum, approval bar, minimum membership tenure, discussion period, voting window
  and timelock. Constitutional changes need 40% quorum, 75% approval, 180 days' membership, 14 days'
  discussion, 14 days' voting and a 30-day timelock before they take effect.
- **Anti-capture adaptive quorum** (`BR-012`, `DES-015`, `DES-020`). If a party's membership jumps
  more than 20% in 30 days, structural and constitutional votes automatically get harder (+5
  percentage points of approval, double the voting window) and an `AnomalousGrowth` event is
  published. Everyday party business is deliberately left alone.
- **Charters that ratchet only one way** (`FR-012`, `DES-017`). A party may make its own rules
  stricter than the protocol floors. It may never make them weaker.
- **Entrenched and immutable clauses** (`FR-027`, `DES-022`). A party can bind its future self at
  founding, so a later majority cannot rewrite the clauses that define it.
- **Snapshot eligibility** (`FR-028`, `DES-019`). Eligibility is fixed when a proposal opens.
  Joining after that confers no power over it — this is what stops a flash takeover (`RISK-03`).
- **Permissionless finalise and execute** (`DES-021`). Anyone can close a vote and, after its
  timelock, execute it. There is no privileged executor who could sit on a result they dislike.
- **You never pay, and you never touch a wallet** (`NFR-005`, `NFR-023`, `ADR-002`, `ADR-014`).
  Sign in with the face or fingerprint unlock you already use. Fees are sponsored. You will not see
  the words wallet, seed phrase, key, gas, token or chain anywhere in the product.
- **A way in when you are blocked** (`NFR-014`, `NFR-025`, `ADR-001`, `DES-041`, `DES-051`). If the
  main service is blocked or refuses to carry your action, the app falls back automatically:
  alternate relay → pay-your-own-fee → submit directly to Ethereum. Every one of those paths is
  exercised in the test suite, not merely documented.
- **Anyone can check the record — in the contract skeleton** (`FR-054`, `NFR-021`, `DES-035`,
  `DES-045`). In the Phase-1 contract skeleton every governance action emits a public event; the
  rules are published twice — once in Solidity, once as a dependency-free JavaScript reference — and
  a differential test suite proves the two agree. **This is not yet true of the Definition-A (v1)
  application.** There, what is kept is an append-only record inside Trumocracy's own store —
  ordered, no delete path, every read a copy (`packages/sdk/src/party-creation.js`) — which is
  **not published** and **not independently checkable without trusting us**. That is a genuine
  property, and it is a smaller one than the sentence above; independent, tamper-evident anchoring
  is a later release (`DES-097`; shipped copy `debate.trailV1Note`, `apps/web/src/i18n/en.ts`;
  Doc 14 v2.3.0 §2.12).

### Changed

Nothing. This is the first release.

### Deprecated

See the deprecation schedule below. Nothing is deprecated for citizens in this release.

### Removed

Nothing. This is the first release.

### Fixed

Nothing. This is the first release.

### Security

- **No pause button, no admin key, no override** (`CON-003`, `ADR-010`). Nobody — including
  Trumocracy — can stop a party's vote, freeze its state or alter a result. The only unilateral
  power that exists anywhere is the ability to **turn a capability off for future calls**, and it can
  only ever subtract, never add (`FeatureFlags.disable`).
- **The chain holds no personal data** (`NFR-010`, `CON-002`, `CON-008`, `ADR-013 §2`). There is no
  field anywhere for a name, an address, a postcode, a coordinate, a document number, a biometric,
  an email, a phone number, an IP or a device ID — not even a hashed one, because a hashed address
  is still an address. **This is a statement about the chain, and only about the chain.** The
  Definition-A (v1) application is a conventional database that Trumocracy operates, and it does
  hold operational records: a one-way hashed phone number, a one-way hashed document-subject
  reference, a link from an account to the party it joined and — once voting ships — a record of how
  that account voted (`FR-131`(b), `FR-132`(b); Doc 02 §4.46). None of that is published. All of it
  is ours to see, and ours to be ordered to produce (Doc 14 v2.3.0 §4.3).
- **One person, one credential — the design property, not yet the shipped one** (`FR-001`–`FR-005`,
  `DES-001`). *By design,* enrolment burns a per-issuer nullifier so one document cannot enrol
  twice, and actions burn a per-scope nullifier so one human acts once per petition or vote; the
  same person endorsing a petition and voting in an unrelated party produces two marks with no
  derivable relationship. **Two things must be said about that in release 0.1.0.** First, every
  proof behind it is checked by `MockVerifier`, which accepts anything, so the property is
  **simulated, not enforced** (`REL-LIM-01`). Second, the Definition-A (v1) application does not
  implement it at all: v1 identity is a phone check plus a government-ID document check,
  verify-and-discard, and what it establishes is **"a real, legal-age person"** — explicitly **not**
  anonymity and **not** unique personhood. Same-document deduplication stops one document opening
  two counting accounts; it does not stop one person holding two legitimate documents
  (`FR-132`(c), (d); Doc 02 §4.46).
- **A compromised issuer is contained, not weaponised — in the contract skeleton** (`FR-005`,
  `DES-003`). Each issuer has a per-day enrolment cap. Removing a compromised issuer stops new
  enrolments but **does not revoke credentials already issued** — punishing an issuer's users for
  their issuer's failure would be the wrong trade. **In the Phase-1 pilot the containment is
  theoretical, because there is only one issuer to contain:** removing it stops enrolment outright
  rather than falling back to a sibling (see the next bullet, and `REL-LIM-16` for the same cliff
  in the skeleton).
- **At least two issuers, at least one not run by a state — the standing rule, NOT in effect in this
  pilot** (`ADR-003`, enforced in the contract skeleton by `PersonhoodRegistry.issuerSetValid()`,
  declared at `:177` and enforced fail-closed in `enrol()` at `:210`). **This is the one Security
  claim in this list that the shipping pilot does not meet, and it must not be read as a present
  guarantee.** The Phase-1 pilot region is India and deploys **one government-run rail only** —
  Aadhaar offline paperless KYC (`FR-121`; Doc 14 v2.3.0 §1.2, which states plainly: *"That rule is
  not in effect in this pilot."*). So in the pilot, one organisation can in practice decide who is
  able to become a counting member, which is precisely the concentration `ADR-003` exists to
  prevent. Widening the rail — the next planned step is a privacy-preserving digital-identity wallet
  — is neither built nor dated, and making single-rail operation permanent or extending it past the
  published Phase-1 scope is deliberately **not** achievable as a configuration default
  (`FR-129`, `OI-20`). A citizen in a jurisdiction where being identified is dangerous should weigh
  this bullet, not the heading above it.
- **Anonymity-set floor** (`NFR-002`, `DES-008`). In the contract skeleton an action is refused
  rather than published if it would be identifiable by elimination — fewer than 1,000 verified
  people in the scope (`RegionRegistry.PRODUCTION_MIN_ANONYMITY_SET`, enforced at `Party.sol:187`
  and `PartyRegistry.sol:238`, pinned by the promotion gate). **The check is real code; what it is
  sizing is not yet real.** The indistinguishability the floor exists to protect is a property of
  the proof layer, and the proof layer in this release is `MockVerifier` (`REL-LIM-01`). It is
  absent entirely from the Definition-A (v1) application.
- **Fail closed on anything security-relevant** (Doc 03 §10.7): a bad proof, an unknown tree root, a
  spent mark or a thin anonymity set is a refusal. Fail open only on convenience: if the index, the
  fee sponsor or notifications are down, you can still act.

### What this release does **not** do — stated plainly

**Voting in a Definition-A (v1) deployment is NOT anonymous, NOT receipt-free and NOT
coercion-resistant.** That is the most important sentence in this document and it is not softened
anywhere else in it (`FR-131`(a), Doc 02 §4.45).

**There is no working ballot screen in release 0.1.0.** What exists today is the ballot-*admission*
step — a member can check whether their vote would count — and nothing more; choosing and casting is
not built (`apps/web/src/components/ProposalsAndDebate.tsx`, `BallotStep`; Doc 14 v2.3.0 §2.4). So
what follows is stated **in advance**: this is what will be true on the day voting ships, published
now so that nobody decides to rely on this platform on an assumption it will not meet.

- **Your vote will not be anonymous.** You will sign in the ordinary way — not with a special
  anonymous proof — and your vote will be written to Trumocracy's own database next to your account.
  Trumocracy will be able to tell that you voted, and how (`FR-131`(a)).
- **The platform database CAN see vote direction and party membership.** Nobody outside Trumocracy
  sees it on any public page. Our own records hold it, and a government can order us to produce it
  (`FR-131`(b); Doc 14 v2.3.0 §4.3).
- **Your vote will not be receipt-free.** If somebody pressures you to prove how you voted, there
  will be a real record that could be shown.
- **Your vote will not be coercion-resistant.** There will be no way to quietly change your vote
  afterwards so that a threat becomes useless.

So a person who wants to buy your vote — or a boss, a landlord, a spouse or a clan leader who wants
to compel it — could ask you to prove your choice, and you would be able to. **Neither the observer
nor the briber and coercer is defended against in v1.** Earlier versions of this document said the
protection against the observer was in place. That was wrong on this document's own record — every
privacy guarantee in the contract skeleton is simulated by `MockVerifier`, not enforced
(`REL-LIM-01`) — and wrong about the shipped v1 application, which is a conventional authenticated
database. It is corrected here rather than explained away.

The missing protection is called **MACI**, and it works by letting you quietly replace an earlier
vote with a later one in a way nobody watching can detect — which makes a receipt worthless and a
bribe unenforceable (`ADR-006`, `NFR-003`, `BR-011`). It is the **Definition-B (v2) privacy layer**:
the cryptographic private ballot, in which the platform is technically unable to see vote direction
or party membership, arrives with that upgrade and not before (`FR-131`(c), Doc 02 §4.45). It is
behind the `maci_voting` flag, it is **OFF**, and it lands in **Phase 3** (`ADR-006` "Consequences";
Doc 13 §3.1, 2027-04-19 → 2027-07-09).

Until the Definition-B privacy layer ships:
- **Every surface on which a vote is cast MUST carry the `FR-131` honesty notice** (designed as
  `DES-098`), stating: **(a)** this ballot uses conventional authentication and is **NOT anonymous,
  NOT receipt-free and NOT coercion-resistant**; **(b)** the platform database **CAN** see vote
  direction and party membership in v1; **(c)** the cryptographic private ballot arrives with the
  Definition-B (v2) privacy layer; and **(d)** where an open-tier participant attempts a counting
  action, what their status is, that the action needs a government-ID check, exactly what does not
  count for them, and how to become counting. The notice MUST be visible before confirmation,
  **non-dismissable**, WCAG 2.2 AA and screen-reader accessible, on `SCR-13` and `SCR-14`
  (Doc 02 §4.45; Doc 14 v2.3.0 §2.6). It MUST also carry the
  real-person-verified-not-unique-personhood caveat (`FR-132`(d), Doc 02 §4.46).
- **The normative wording is `FR-131` itself — not any string in the codebase.** **Five** shipped
  code strings still assert the retired "votes are anonymous but not receipt-free" framing and are
  themselves violations of this requirement: a feature-flag description, contract documentation, an
  SDK comment, a component comment — and, the one that matters most, **the banner copy a citizen
  actually reads on the vote screen**. They are disclosed as **`REL-LIM-18`** and routed to the
  engineer. Do not copy warning text out of the code.
- **No public-facing Trumocracy material** — this document, the README, the UI — may use the words
  "private", "anonymous", "receipt-free" or "secure" to describe v1 voting behaviour, or present v1
  as providing the Definition-B guarantees (Doc 02 §4.45, closing sentence).
- The product is a **testnet rehearsal**. Do not use it to organise where being identified as a
  supporter could hurt you.
- When MACI is switched on, **the public-tally voting path closes at the same instant**
  (`Governor.vote` reverts with `MaciPathRequired` once `maci_voting` is enabled). Leaving both open
  would let a coercer simply demand you use the provable one.

**Petition endorsements are public on purpose and always will be** (`ADR-006` "Where MACI is not
used"). Backing a founding petition is closer to signing a public petition than to casting a secret
ballot, and public backing is what gives a petition its legitimacy. The design intent is that you
endorse under a **made-up name** — proving you live in the region without the public record naming
you — and that is the default in the contract skeleton. **Two limits on that in this release, stated
plainly.** The proof that would keep the region claim from naming you is checked by `MockVerifier`,
so the unlinkability behind the made-up name is **simulated, not enforced** (`REL-LIM-01`); and in
the Definition-A (v1) application Trumocracy's own records can see who acted, whatever the public
record shows (`FR-131`(b)). A **stronger endorsement mode that Trumocracy itself cannot link back to
you** exists in the design for high-risk jurisdictions, but it is behind the `private_endorsement`
flag, which is **OFF** until Phase 4.

### What a citizen can and cannot do in release 0.1.0

> **Read this first: there are two kinds of participant, and the difference decides what counts.**
>
> - **Open tier** — anyone who has verified a phone number. You are a real member from your first
>   day: join, leave, read, discuss, support, organise. Nobody may refuse you for lacking a document
>   (`FR-020` is absolute; `FR-122`).
> - **Counting tier** — an open-tier member who has additionally passed a government-ID check
>   (`FR-132`(b)). **Three actions, and only three, require it** (`FR-123`): contributing to a
>   party's official strength number, casting a vote that decides a binding decision, and standing
>   as a candidate.
>
> **The counting check has one rail in this pilot, and that is a real exclusion.** The Phase-1 pilot
> region is India and the only accepted document is **Aadhaar** (`FR-121`, `OI-04`; Doc 14 v2.3.0
> §1.2). If you do not hold Aadhaar you can still join, read, discuss, support and organise —
> everything in the open tier — but you **cannot yet be counted, cast a binding vote, or stand**.
> That exclusion is recorded as a platform limitation (`H-19`), not presented as a temporary
> inconvenience, and `ADR-003`'s rule of at least two independent rails is **not in effect in this
> pilot** (`FR-129`, `OI-20`).
>
> Attempt one of the three before you are counting and the app shows a plain-language,
> **non-dismissable** notice **before** it refuses — what your status is, that a government-ID check
> is what is needed, exactly what does not count for you, and how to become counting (`FR-131`(d)).
> That notice is **live today** at the parties directory
> (`apps/web/src/components/PartyMembership.tsx`, copy `parties.openTierNotice*`). **The
> government-ID check itself is not switched on yet in this release, so every member is currently
> open-tier** — read the "can" column below with that in mind.

| A citizen **can** | A citizen **cannot** |
|---|---|
| Complete the v1 identity check without Trumocracy keeping the document — it is verified and discarded, and only a real-person flag, a legal-age flag, a country code, a one-way hashed subject reference and a timestamp are retained (`FR-132`(b)) | Treat that as one-person-one-vote. Same-document deduplication stops one document opening two counting accounts; it does not stop one person with two legitimate documents (`FR-132`(c), (d)). In the contract skeleton the equivalent nullifier check is `MockVerifier`-simulated (`REL-LIM-01`); in the v1 application the check is not switched on yet |
| Open a petition for a new party in their region | Have a petition approved, promoted or blocked by anyone |
| Endorse a petition under a made-up name in the contract skeleton, and withdraw before activation — the unlinkability behind that name being `MockVerifier`-simulated (`REL-LIM-01`), and our own records seeing who acted in the v1 application (`FR-131`(b)) | Endorse in a way Trumocracy itself cannot link back to them (`private_endorsement` **OFF**, Phase 4) |
| Activate a party the moment its threshold is met | Activate early, or stop an activation |
| Join any party with a phone number alone, and leave at any moment — no approval, no sponsor, no fee, no penalty, and nobody may remove them (`FR-020`, `FR-122`) | Hold two active memberships at once. In the v1 application a join is refused, naming the party that blocks it, until they leave the first — leaving is instant and needs nobody's permission (`FR-064` explicit-leave form; `apps/web/src/i18n/en.ts` `parties.onePartyRule`; Doc 14 v2.3.0 §2.3). Nor have that membership **count** — toward official strength, a binding vote, or candidacy — before the government-ID check, which in this pilot accepts **Aadhaar only** (`FR-123`, `FR-132`(b), `FR-121`, `H-19`); or transfer, sell, lend or inherit membership or voting power (`CON-006`, `ADR-007`) |
| Propose in any decision tier, with no sponsor and no moderation queue, and take part in the discussion as an open-tier member with no ID check at all (`FR-122`) | Put a proposal forward without first declaring **Worker** tier — a self-declaration, never an approval, required because authorship is public and Supporters are not named (`FR-080`; `packages/sdk/src/proposals.js`; approver ruling 2026-08-30) — or bypass the discussion period or the timelock |
| Vote once per proposal at a weight of exactly 1 — once voting ships, and once they are counting-tier (`FR-123`) | Vote with more weight by paying, staying longer, or holding office; cast a binding vote at all while open-tier (the `FR-131`(d) notice fires first); or vote anonymously, receipt-free or coercion-resistantly in v1 — v1 voting is none of those things (`FR-131`(a)) |
| Publish and amend a manifesto with a permanent version history | Delete or rewrite a published manifesto version |
| Re-count what is actually published: in the v1 application, a party's total membership and official-strength numbers on its own screen; in the contract skeleton, every tally, quorum and threshold from the public event log | Independently re-compute what the v1 application holds. The membership and deliberation records are append-only **inside Trumocracy's own store**, not published and not checkable without trusting us until the `DES-097` audit-anchoring release (Doc 14 v2.3.0 §2.12). Or see interim results before a vote closes (`FR-034`, `DES-026`) |
| Export the party's full state at any time, with no permission (`NFR-018`) | Be prevented from leaving |
| Reach the protocol when the main site is blocked (`NFR-014`) | — |
| Fall back to paying their own sub-cent fee if sponsorship is exhausted | Be denied for lack of funds (`FR-061` — degrade, never deny) |
| — | Stand as a candidate — `elections` **OFF**, Phase 3 |
| — | Recall a representative — `recall` **OFF**, Phase 3 |
| — | Delegate a vote — `delegation` **OFF**, Phase 4 |
| — | Use a party treasury — `treasury` **OFF**, Phase 3, jurisdiction-gated |
| — | Fork a party — `fork` **OFF** in production, Phase 3 |
| — | Cast a receipt-free ballot — `maci_voting` **OFF**, Phase 3 |
| — | Use it for a binding state election, ever (`CON-001`, `ADR-013 §1`) |

### Known issues / limitations

Every item below is a **release-blocking** or **disclosed** limitation of release 0.1.0. Most are
open. Three are struck through and marked closed — `REL-LIM-04` and `REL-LIM-07` in `b8cf2ce`, and
`REL-LIM-03` in `c854c0a`, both commits on 2026-08-09 — and are kept in the register rather than
deleted, so the record of what was disclosed stays readable. Each row cites its own commit and its
own Doc 06 §5 entry; there is no single remediation that covers all three, and an earlier version of
this document was wrong to say there was.

> **Source pins in the Trace column were re-verified line by line against `HEAD` on 2026-09-02**
> (rework cycle 1, finding `ISS-06`). The rows whose pins were corrected were `REL-LIM-03`, `-05`,
> `-07`, `-08`, `-10`, `-12`, `-13`, `-15` and `-16`; `REL-LIM-09` gained a pin it had been missing.
> In each case code had moved and the pin had not followed. If a pin below does not resolve to what
> its row describes, it moved **after** 2026-09-02 — that is the difference this line exists to let
> you tell.

| ID | Limitation | Impact | Trace | Cleared by |
|---|---|---|---|---|
| **REL-LIM-01** | **Every proof is verified by `MockVerifier`, which accepts any proof.** The privacy and one-person-one-vote guarantees are **simulated, not enforced**, in this release. | Total. Anyone can forge an enrolment, a residency proof or a vote. | `packages/contracts/src/mocks/MockVerifier.sol`; Doc 13 §3.1 Phase 1 | Phase 2 (MS-08); enforced by the deployment-safety gate, Doc 10 §3.2 |
| **REL-LIM-02** | **v1 voting is NOT anonymous, NOT receipt-free and NOT coercion-resistant.** The Definition-A (v1) ballot uses conventional authentication; the platform database can see vote direction and party membership. The cryptographic private ballot is the Definition-B (v2) privacy layer and is not in this release. | The observer, the briber **and** the coercer are all undefended. Trumocracy itself can see how an account voted and can be ordered to produce it. No ballot-casting screen ships in 0.1.0, so the exposure begins the day voting ships — which is why it is disclosed in advance. | `FR-131`(a)–(c) (Doc 02 §4.45), `FR-132`(d) (§4.46); `NFR-003`, `BR-011`, `ADR-006`; flag `maci_voting`; Doc 14 v2.3.0 §2.6, §4.3 | Definition-B (v2) privacy layer / Phase 3 (MS-12/MS-13) |
| ~~**REL-LIM-03**~~ | ~~`RegionRegistry.issueResidency` does not bind the caller to the attester~~ — **FIXED, and this document was wrong to keep publishing it.** `issueResidency` **does** authenticate the caller: it reverts unless `attesterAuthorised[regionId][attesterId] && att.active && att.issuer == msg.sender`. The `issuer` address is written only by `registerAttester`, which is `onlyTimelock`, so an attacker cannot self-register as the issuer of an authorised `attesterId`. | The residency-tree inflation path is closed. `RISK-01` and `NFR-004` are defended at this entrypoint. **Correction of record:** v1.0.1 and v1.1.0 both listed this as the last open Must-blocker and, in v1.1.0, re-routed it to the engineer on 2026-09-02 without re-verifying — the claim had already been false for three weeks. The earlier sentence that two sibling defects were fixed "and this one was not" was inverted: **all three are closed** — `REL-LIM-04` and `REL-LIM-07` in `b8cf2ce`, this one in `c854c0a`, both on 2026-08-09. | `packages/contracts/src/core/RegionRegistry.sol:215` (guard), `:184` (`registerAttester` is `onlyTimelock`); commit `c854c0a`, 2026-08-09; Doc 06 v2.4.3 §5 defect `C-01` (Critical, `SEC-C01`); `FR-006`, `NFR-004`, `RISK-01`, `RISK-05` | **Closed** (re-verified by the sre against `HEAD`, 2026-09-02, on `09-release-notes-v1.1.0-business-cycle1` `ISS-01`). **Cascade owed:** Doc 10 §3.1 checklist and §6, and Doc 11 PB-ATTEST and its limitation register, still carry the stale claim citing this document as source — sre debt, next session |
| ~~**REL-LIM-04**~~ | ~~`PersonhoodRegistry.spendNullifier` unpermissioned~~ — **FIXED in this drop.** Burning a nullifier now requires `authorisedSpender[msg.sender]`; the authoriser is set by the timelock and authorises only the `Party`/`Governor` pairs the registry deploys. | The one-call disenfranchisement primitive is closed. | `PersonhoodRegistry.sol:259-262`; Doc 06 §5 defect 1; `UT-0325`, `UT-0326` | **Closed** (verified by the sre against source, 2026-08-09) |
| **REL-LIM-05** | **Population sources all submit through the timelock.** `RegionRegistry.submitPopulation` is `onlyTimelock`, so the "median of ≥5 independent sources" is operationally a median of five values chosen by one governance path. | Weakens the `RISK-12` mitigation from *structural* to *procedural*. The 7-day dispute window and ±5%/quarter drift cap still bind. | `packages/contracts/src/core/RegionRegistry.sol:261` (`submitPopulation`, `onlyTimelock`); `FR-009`, `DES-007`, `RISK-12` | Open — routed via `REF-04` |
| **REL-LIM-06** | **On-chain flags are boolean, not percentage.** `FeatureFlags` has no cohort or percentage concept, so a staged 1→10→50→100% rollout of any **on-chain-gated** capability is expressible only in the client. On-chain, every gated capability is all-or-nothing, network-wide. | Staged rollout is a client-cohort control, not a protocol control. Stated honestly in Doc 10 §6. | `packages/contracts/src/core/FeatureFlags.sol`; `NFR-020` | Open — routed via `REF-05` |
| ~~**REL-LIM-07**~~ | ~~Disabling `party_governance` stops voting on open ballots~~ — **FIXED in this drop.** `vote`, `finalize` and `execute` are deliberately **not** flag-gated; only `propose` is. Flags now gate *starting* a capability, never *completing* one already under way. | `NFR-020` sentence 3 is satisfied for ballots. | `Governor.sol:309-315` (the explicit NOTE inside `vote`), `Governor.sol:199` (`flags.requireEnabled(FLAG_GOVERNANCE)` — on `propose`, and nowhere else); Doc 06 §5 defect 4; `UT-0360`, `UT-0361` | **Closed** (verified against source 2026-08-09; pins re-verified 2026-09-02) |
| **REL-LIM-15** | **The same hazard survives at activation.** `PartyRegistry.activate` still calls `flags.requireEnabled(FLAG_PETITIONS)`. A petition that has **already met its threshold** cannot be activated while the flag is off — the flag blocks the completion of a citizen process that has already succeeded. | Disabling `petitions` is not purely additive: it strands successful petitions until the flag is re-enabled, which takes **30 days** through the timelock. Same class as the defect fixed for voting; same principle violated. | `PartyRegistry.sol:293` (`activate`), `:297` (the `requireEnabled` call); `NFR-020`, `CON-003`; Doc 06 §5 defect 4 states the principle | **Open.** Routed via `REF-08`; operational control in Doc 11 PB-KILL |
| **REL-LIM-16** | **`enrol()` now fails closed on `issuerSetValid()`** — correct for the invariant, but it makes issuer removal a **global** lever: deactivating a compromised issuer that tips the region below "≥2 active, ≥1 non-state" halts **all** enrolment network-wide, and adding a replacement takes **30 days**. | The primary containment action in the issuer-compromise playbook can itself cause a 30-day enrolment outage. A real cliff, not a theoretical one — and in the single-rail Phase-1 pilot there is no sibling issuer to fall back to at all (see the Security section). | `PersonhoodRegistry.sol:210` (fail-closed guard in `enrol`), `:177` (`issuerSetValid()`); `ADR-003`, `ADR-010`; Doc 06 §5 defect 3 | **Open** — operational control in Doc 11 PB-ISSUER. Routed via `REF-09` |
| **REL-LIM-17** | **Nullifier-spender authorisation is irrevocable and monotonic.** `authoriseSpender` has **no** de-authorisation path (deliberate — revoking a live party's ability to record votes would be a pause button by another name), and `setSpenderAuthoriser` authorises the new authoriser **without removing the old one**. | The set of addresses able to burn nullifiers only ever grows and can never shrink. Correct given `CON-003`, but it must be **inventoried and monitored** rather than assumed small. | `PersonhoodRegistry.sol:269-288` | **Accepted by design** — inventoried in Doc 12 §2.6, monitored per Doc 11. Routed via `REF-10` for visibility |
| **REL-LIM-08** | **Enabling `maci_voting` before the MACI module ships bricks voting.** `Governor.vote` reverts with `MaciPathRequired` when the flag is on, and no alternative vote path exists in this release. | A single timelocked `enable('maci_voting')` would make every party ungovernable with no way to undo it faster than the emergency disabler can act. | `Governor.sol:319` (`if (flags.isEnabled(FLAG_MACI)) revert MaciPathRequired();`), `:137` (error declaration) | Operational control only — Doc 10 §5.1 forbids enabling it before Phase 3 |
| **REL-LIM-09** | **A compromised verifier cannot be promptly retired.** `VerifierRegistry.register` is timelock-only (30 days, `ADR-010`) and superseding a circuit leaves the old verifier accepting proofs for a further `SUPERSEDE_GRACE = 30 days`. | Worst case ~60 days of a known-bad verifier still accepting proofs. The only fast lever is disabling the flag on the entrypoint that consumes it. | `VerifierRegistry.sol:53` (`register`), `:57` (`if (msg.sender != timelock) revert NotTimelock();`), `:33` (`SUPERSEDE_GRACE = 30 days`), `:65` (grace window set on supersede); `NFR-017`, `DES-039`, `RISK-10` | Open — routed via `REF-06` |
| **REL-LIM-10** | **Phase-1 flag posture is inconsistent between sources.** `flags.js` prod defaults have `treasury: false` and `fork: false`; the test fixture's `PHASE1_FLAGS` enables `fork` **and** `treasury`; Doc 13 §9 says both OFF. | A deployment driven from the test fixture would ship two capabilities that plan and registry both say are dark. | `packages/protocol/src/flags.js` (prod defaults) vs `packages/contracts/test/fixture.mjs:70` (`PHASE1_FLAGS`) vs Doc 13 §9 | Doc 10 §5.1 makes `flags.js` prod defaults the single source of truth. Routed via `REF-07` |
| **REL-LIM-11** | **`l1_force_inclusion` and `sponsored_gas` are client-only flags** (`onChain: false`). | The emergency disabler cannot reach them; killing either requires a client-bundle change. Both are marked `removeBy: never`, so both are permanent configuration by design. | `flags.js` | By design — recorded, not fixed |
| **REL-LIM-12** | **The deployment-safety gate is not wired to anything that deploys.** *(Corrected 2026-09-02: v1.0.1 and v1.1.0 said "no production deploy script exists", that the deploy order came from `test/fixture.mjs`, and that the gate was only a test assertion. All three were false and are withdrawn.)* What is actually true: `packages/contracts/script/deploy.mjs` exists but **prints** the plan and executes nothing — it is a CLI wrapper over `formatDeploymentPlan()`, run as `npm run deploy:plan`. The order itself is frozen and authoritative in `promotion-gate.mjs` (`DEPLOY_ORDER`, `WIRING_STEPS`), not in the test fixture. And `assertSafeToPromote()` **is** real, throwing code with real coverage — but it is exercised only against injected test readers. | **No environment can actually be promoted through the gate**, because nothing runs it against a live deployment. Doc 10 §3.2 specifies the check as a job that calls `versionCount`/`IS_INSECURE_MOCK()` on the **target environment's `VerifierRegistry`**; no CI job does that, and there is no executing deployer for it to sit in front of. The gate is proven as a function and unproven as a control. | `packages/contracts/script/deploy.mjs` (print-only); `packages/contracts/src/promotion-gate.mjs:23` (`DEPLOY_ORDER`), `:46` (`WIRING_STEPS`), `:86` (`assertSafeToPromote`), `:88` and `:144` (the two throws), `:167-168` (the gate's published description), `:157` (`formatDeploymentPlan`); `packages/contracts/test/deployment-safety.test.mjs` (`UT-0600`–`UT-0612`); `.github/workflows/verify.yml`; Doc 10 §3.2; `NFR-020` | **Blocks Gate 2** — on the narrowed ground that Doc 10 §3.2's control is unexecuted, not on the withdrawn claim that it was unwritten. Clears when a promotion job runs `assertSafeToPromote` against a live target and the run is recorded |
| **REL-LIM-13** | Interim tallies are readable on-chain; suppression before close (`FR-034`) is enforced by the client and indexer only, because the chain cannot hide what it stores. | A determined observer can read a running tally directly. Disclosed, not fixed. | `Governor.sol:81-83` (`forVotes` / `againstVotes` / `abstainVotes` on the stored `Proposal`), `:420` (`proposals(uint256)` returns the whole struct, unguarded), `:343-345` (the increments); `FR-034`, `DES-026` | By design — disclosed in Doc 14 |
| **REL-LIM-14** | Capacity figures (`NFR-008`), cost per action (`NFR-005`), latency (`NFR-006`) and availability (`NFR-007`) are **N/A — not yet measured** for this release. | No SLO baseline exists. Doc 11 §3 carries the targets; the observed columns are empty. | Doc 03 §7.6 | Load test before Gate 2 (Doc 13 §3.3 item 6) |
| **REL-LIM-18** | **Five shipped code strings still assert the retired "votes are anonymous but not receipt-free" framing, in violation of `FR-131`.** *(Corrected 2026-09-02 from "three" after a full re-sweep of `packages/*/src` and `apps/web/src`.)* **(1)** `packages/protocol/src/flags.js:44` — `MACI_VOTING.description` says votes are anonymous but not receipt-free **and that the UI must say so**. **(2)** `packages/contracts/src/core/Governor.sol:25,28` — the same assertion in contract NatSpec, twice. **(3)** `apps/web/src/i18n/en.ts:400-405` — `banner.notReceiptFreeTitle` uses the banned word "private" about v1 voting and `notReceiptFreeBody` claims nobody can see that a vote was yours. **(4)** `packages/sdk/src/client.js:455-456` — "which is why a vote is anonymous even though it is public". **(5)** `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` — the file's own doc comment repeats the claim and quotes an SDD line instructing the client to state it. | **(3) is the only one a citizen reads** — it is the rendered banner copy on the vote surface, exactly where `FR-131` mandates the opposite text. **(5) is a comment inside that same component** instructing that the copy be kept, so it is the reason (3) would come back; it is not itself seen by anyone outside the codebase. (1), (2) and (4) are developer-facing, but (1) was cited by this document, until v1.1.0, as the normative warning text. **The requirement is normative; none of these strings is.** | `FR-131`(a) and its closing sentence (Doc 02 §4.45); `packages/protocol/src/flags.js:44`; `packages/contracts/src/core/Governor.sol:25,28`; `apps/web/src/i18n/en.ts:400-405`; `packages/sdk/src/client.js:455-456`; `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` (violating comment) and `:41-44` (the render), mounted at `ProposalsAndDebate.tsx:489` | **Open — routed to the engineer** via the project-manager, 2026-09-02, re-scoped from three sites to five on 2026-09-02 (`09-release-notes-v1.1.0-business-cycle1` `ISS-05`). Blocks any v1 customer-facing deployment. *Excluded from the five, and why:* `packages/ui/src/PrivacyStatus.tsx` is **not rendered on any shipped surface** — it is exported at `packages/ui/src/index.ts:12`, but all five consuming files carry an explicit non-render comment, at six sites (`apps/web/src/app/parties/page.tsx:19`, `app/petitions/new/page.tsx:13,134`, `app/proposals/page.tsx:22`, `components/PartyMembership.tsx:26`, `components/ProvisionalStatus.tsx:11`). **That, and only that, is why it is excluded.** It is *not* compliant by construction, and an earlier version of this row wrongly said it was: `PrivacyStatus.tsx:236` sets `title: 'Verified — private'` for the `ver` state and renders it at `:333-335`, directly above the clause-7 fail-honest v1 subtitle — a banned word on a voting-adjacent status badge. **Routed to the engineer as a pre-mount blocker, not a watch item:** the `ver`-state title MUST be re-copy-reviewed against `FR-131` **before** this component is first mounted anywhere |

### Upgrade / migration notes

**There is no upgrade path, because there is no upgrade mechanism.** This is the design (`ADR-010`,
`CON-003`):

| Layer | Can it change? | How |
|---|---|---|
| **Core** — membership trees, nullifiers, vote accounting, party state machine | **No.** No proxy, no admin, no pause. | A new version is a **new deployment**. Parties opt in by a migration vote. Nobody can migrate a party against its will, and nobody can prevent one that chooses to. |
| **Registries** — issuers, attesters, verifiers, region scheme, population oracle | Yes | Protocol governance, **30-day timelock**; **48-hour expedited path for *removing* a compromised entry only — removal, never addition** |
| **Periphery** — paymaster policy, indexer, gateways, frontends | Freely | Operational, and every one of them is replaceable by the citizen with their own endpoint |

For this release specifically:

1. **Testnet state is disposable.** Release 0.1.0 runs on a public testnet with mock verifiers. When
   Phase 2 registers real, ceremony-bound verifiers, **all Phase-1 state is abandoned, not
   migrated** — every proof in it was accepted by a verifier that accepts anything, so none of it
   means what it appears to mean. This is announced up front rather than discovered later.
2. **The migration drill is a deliverable, not a contingency.** Every party's migration path from
   one core deployment to the next is rehearsed on testnet before mainnet (`ADR-010` "Consequences";
   Doc 10 §8.5). An unrehearsed migration path is a crisis improvisation.
3. **Exit is always available and does not require us.** In the contract skeleton, any party can
   export its complete on-chain state at any time and reconstitute it on an independent deployment
   (`NFR-018`, `DES-044`). **"Verifiable" is the right word there and the wrong word for the
   Definition-A (v1) application:** a v1 export is a copy of records held in Trumocracy's own store,
   which nobody outside can yet check without trusting us to report them honestly (`DES-097`
   pending; Doc 14 v2.3.0 §2.12). Exit still works; independent verification of what is exported
   does not, yet. *(Test coverage: none of record. Earlier versions cited `TC-EXIT-*`; that is not a
   valid `TC-####` identifier and no such case exists in Doc 07 v2.4.4 or in any suite file, so the
   claim is withdrawn rather than re-pinned — `09-release-notes-v1.1.0-business-cycle1` `ISS-L2`.)*
4. **Circuit changes never disenfranchise in-flight actions.** When a circuit is superseded, the
   previous verifier keeps accepting proofs for 30 days (`SUPERSEDE_GRACE`, `DES-039`, `NFR-017`) so
   a citizen who started an action before the change is not stranded. See `REL-LIM-09` for the cost
   of that choice.

### Breaking changes & compatibility

- **Baseline release — no prior version to break.** The contract ABIs, event schema and the
  `bytes32` identifier derivations (`regionId`, flag keys, nullifier scopes) established here are the
  compatibility baseline for `@trumocracy/sdk` and `@trumocracy/protocol`.
- **`regionId` is derived as `keccak256("v<schemeVersion>:<path>")`** and is bound to the region
  scheme version. Bumping the region scheme version changes every region ID and is a
  **breaking change by construction** — it is a timelocked registry decision, not a refactor.
- **Flag keys are `keccak256` of the string key in `flags.js`.** Renaming a flag key is a breaking
  change to the on-chain gate and would silently leave the old key enabled.
- **Forward-incompatible with Phase 3 by design:** when `maci_voting` is enabled, `Governor.vote`
  stops accepting the public-tally path permanently. Any client that has not shipped the MACI path
  by then will be unable to vote. This is intentional (see `REL-LIM-08`) and must be sequenced:
  **client first, flag second.**

### Deprecation schedule

| Deprecated | Replacement | Deprecated in | Removed in (date) |
|------------|-------------|---------------|-------------------|
| `MockVerifier` (all circuits) | Ceremony-bound Groth16 verifiers registered with a frozen `zkeyHash` | 0.1.0 | Phase 2 — target **2027-01-25** (MS-08; Doc 13 v2.0.2). Blocked in prod from day one by the Doc 10 §3.2 deployment-safety gate |
| Public-tally vote path (`Governor.vote`) | MACI receipt-free ballot path (`ADR-006`) | 0.1.0 | Phase 3 — target **2027-07-09** (MS-14), at the instant `maci_voting` is enabled |
| Flag `petitions` | none — capability becomes unconditional core | 0.1.0 | GA **v1.0.0** (`flags.js` `removeBy`) |
| Flag `party_governance` | none — capability becomes unconditional core | 0.1.0 | GA **v1.0.0** (`flags.js` `removeBy`) |
| Flag `maci_voting` | none — becomes mandatory | 0.1.0 | Phase 3 (`flags.js` `removeBy`) |
| Flags `elections`, `recall`, `treasury`, `fork` | none — capabilities become unconditional | 0.1.0 | "Phase 3 rollout complete" (`flags.js` `removeBy`) |
| Flags `delegation`, `private_endorsement` | none | 0.1.0 | Phase 4 (`flags.js` `removeBy`) |
| Flags `l1_force_inclusion`, `sponsored_gas` | **never removed** — permanent escape hatches (`removeBy: never`) | — | — |

> Two flags carry `removeBy: never` by deliberate decision. `permanentFlags()` in `flags.js` reports
> flags with **no** removal target; these two have one — the value `never` — so they are declared
> permanent rather than forgotten. Doc 10 §9 re-checks this every release.

### Developer / API changelog

The protocol's public API is **the contract ABI plus the event log**. There is no privileged REST
surface, by design (Doc 03 §5.4). The indexer's GraphQL API is **read-only and non-authoritative**;
every value that could change a citizen's decision is re-verified against chain state by the client
before use (`ADR-014`).

**Entrypoints added (0.1.0)**

| Call | Proof circuit | Nullifier scope | Flag gate |
|---|---|---|---|
| `PersonhoodRegistry.enrol(issuerId, π, [Nᵢ, C, issuerId])` | `personhood_enrol` | — | none |
| `RegionRegistry.issueResidency(regionId, attesterId, leaf)` | — | — | no flag gate; caller-authenticated — reverts unless `msg.sender` is the authorised attester's registered `issuer` (`RegionRegistry.sol:215`) |
| `PartyRegistry.openPetition(...)` | — | — | `petitions` |
| `PartyRegistry.endorse(petitionId, π, signals)` | `residency_member` | `keccak("endorse", petitionId)` | `petitions` |
| `PartyRegistry.withdrawEndorsement(...)` | `residency_member` | `keccak("withdraw", petitionId)` | `petitions` |
| `PartyRegistry.activate(petitionId, charter)` | — | — | `petitions` |
| `PartyRegistry.expire(petitionId)` | — | — | `petitions` |
| `PartyRegistry.openForkPetition(...)` | — | — | `fork` (**OFF in prod**) |
| `Party.join(π, signals)` / `Party.leave(...)` | `residency_member` | `keccak("join", partyId)` | `party_governance` |
| `Governor.propose(input, π, signals)` | `tenure_member` | `keccak("propose", partyId)` | `party_governance` |
| `Governor.vote(id, choice, π, signals)` | `tenure_member` | `keccak("vote", partyId, id)` | `party_governance`; **reverts** if `maci_voting` on |
| `Governor.finalize(id)` / `Governor.execute(id)` | — | — | permissionless |
| `Governor.cancelDuringDiscussion(id, π, signals)` | `tenure_member` | — | `party_governance` |
| `FeatureFlags.isEnabled(flag)` / `requireEnabled(flag)` | — | — | — |
| `VerifierRegistry.verify(circuitId, π, signals)` | — | — | — |

**Events added (0.1.0)** — the auditor's surface (`FR-054`, `DES-035`):
`IssuerRegistered`, `IssuerDeactivated`, `Enrolled`, `NullifierSpent`, `RegionCreated`,
`AttesterRegistered`, `AttesterAuthorised`, `AttesterSlashed`, `ResidencyIssued`,
`PopulationSubmitted`, `PopulationPending`, `PopulationEffective`, `RegionFrozen`, `RegionUnfrozen`,
`CircuitRegistered`, `CircuitSuperseded`, `FlagEnabled`, `FlagDisabled`, `PetitionOpened`,
`Endorsed`, `EndorsementWithdrawn`, `PartyActivated`, `PetitionExpired`, `Joined`, `Left`,
`ManifestoPublished`, `CharterAmended`, `AnomalousGrowth`, `GovernorSet`, `Dissolved`,
`ProposalCreated`, `VoteCast`, `ProposalFinalized`, `ProposalExecuted`, `ProposalCancelled`.

**Deprecated / removed API:** none (baseline release).

---

## Internal release record

| Field | Value |
|-------|-------|
| Release / SemVer | **0.1.0** — Phase-1 walking skeleton |
| Document version | 1.2.0 (`Status: In Review`) — rework cycle 1 (`FR-131` sweep at v1.1.0; correctness and re-pin pass at v1.2.0), 2026-09-02 |
| Date drafted | 2026-08-09 |
| Target environment | **public testnet** (Doc 03 §7.1 `testnet`) — **not production** |
| Milestone | **MS-05**, target 2026-11-27; exit decided by Eng Lead (Samuel Oyelaran) · Test Lead (Ji-woo Park) |
| Gate | **Gate 2 is MS-13, target 2027-05-14 — NOT approved, NOT applicable to this release** |
| Feature flags **ON** (prod defaults, `flags.js`) | `petitions` · `party_governance` · `l1_force_inclusion` · `sponsored_gas` |
| Feature flags **OFF** (prod defaults) | `elections` · `recall` · `maci_voting` · `private_endorsement` · `delegation` · `treasury` · `fork` |
| Rollout plan | 1% → 10% → 50% → 100%, **client-cohort only** — on-chain flags are boolean (`REL-LIM-06`). Detail: Doc 10 §6 |
| Requirements delivered | `FR-001`–`FR-005`, `FR-006`–`FR-009`, `FR-012`–`FR-018`, `FR-020`–`FR-028`, `FR-046`, `FR-047`, `FR-054`, `FR-061` — **claimed against the contract skeleton, and now checkable**: Doc 08 v2.7.0 (Approved) records 138 Must rows, of which **16 COMPLETE and 122 OPEN**, so most of this list is *not* RTM-closed. Read this row as a statement of intent, not of verified delivery. `FR-131` is deliberately **not** in the list: only clause (d) is built (the parties-directory notice); the ballot-surface notice is owed with voting |
| Requirements explicitly **not** delivered | `FR-030`–`FR-035` (MACI) · `FR-036`–`FR-045` (elections, recall) · `FR-049`–`FR-052` (treasury) · `FR-053` (fork) · `NFR-003` · `NFR-009` |
| Design elements | `DES-001`, `DES-003`–`DES-005`, `DES-007`–`DES-022`, `DES-035`, `DES-037`, `DES-038`, `DES-039`, `DES-045` |
| Epics / stories | `N/A — not yet produced` (Doc 05 exists; no per-release story cut recorded) |
| Test status | Suites present: `packages/contracts/test/{lifecycle,governance,adversarial,differential}.test.mjs`, `packages/protocol/test/*`, `apps/web/test/*`. Doc 07 v2.4.4 (Approved) records **610 suite cases green** and no Sev-1/2 of record; Doc 06 v2.4.3 (Approved) records the `UT-####` inventory and its §7 open limitations; Doc 08 v2.7.0 (Approved) records **122 of 138 Must rows OPEN**. Performance, capacity, availability and a11y remain `N/A — not yet measured` — see the NFR row below |
| NFR verification | `NFR-005` cost `N/A — not yet measured` · `NFR-006` p95 `N/A — not yet measured` · `NFR-007` availability `N/A — not yet measured` · `NFR-008` load `N/A — not yet measured` · `NFR-020` rollback drill **not executed** |
| Security / a11y | Audits **not started** (MS-04 contracting target 2026-10-15). `NFR-011` a11y `N/A — not yet measured`. Security defects **open**: `REL-LIM-12` (deployment-safety gate unexecuted — narrowed 2026-09-02), `REL-LIM-15`, `REL-LIM-16`, `REL-LIM-18` (five `FR-131` violations in code, routed to the engineer). Security defects **closed**: `REL-LIM-04` and `REL-LIM-07` in `b8cf2ce` (Doc 06 §5.1 numbered defects 1 and 4), and `REL-LIM-03` in `c854c0a` (Doc 06 §5.2 `C-01` / `SEC-C01`) — two commits, both on 2026-08-09. `REL-LIM-03`'s closure was re-verified against `HEAD` on 2026-09-02 after this document had carried it as open in error; the commit split was corrected on the same date after this document had attributed all three to one commit in error |
| Dependencies | OP Stack L2 (Base Sepolia for testnet) · Ethereum blobs · ERC-4337 bundler + paymaster · IPFS pinning cluster ≥3 operators · Arweave mirror · indexer (Postgres read model) · `@zk-kit/lean-imt.sol` 2.0.1 · `poseidon-solidity` 0.0.5 · Solidity 0.8.28 (Cancun) · Node 22. Full record: Doc 12 |
| Rollback | Flag-off via `FeatureFlags.disable` (emergency disabler, single tx) + client bundle revert + indexer/relayer re-point. **Target < 15 min (`NFR-020`). Cannot halt a running vote or reverse an on-chain decision** (`ADR-010`, `CON-003`). Full procedure and honest limits: Doc 10 §8 |
| Approvals (Gate 2) | **None.** Product `—` · Eng `—` · QA `—` · SRE `—` · Security `—` |

### Changelog (this release)

Cut from the repository history at `HEAD` (`e039ff2`, 2026-09-01): every non-merge commit touching
`packages/` or `apps/`, oldest first. **What this is not:** it is not a tagged release range — no
git tag exists and no `CHANGELOG.md` file is maintained — and it is not a claim of verified
delivery; the RTM position is in the internal record above.

**Protocol and contract skeleton — 2026-08-08 → 2026-08-09**

| Commit | Date | Summary |
|---|---|---|
| `48b07e0` | 2026-08-08 | `feat:` architecture decision records + monorepo skeleton + protocol reference implementation |
| `29c059a` | 2026-08-08 | `fix(contracts):` extract the promotion gate so a shebang cannot break the suite |
| `b8cf2ce` | 2026-08-09 | `feat(contracts):` core protocol + security fixes from the test-strategy review — **closes `REL-LIM-04`** (nullifier burn access-controlled) **and `REL-LIM-07`** (open ballots no longer flag-gated); Doc 06 §5.1 numbered defects 1 and 4 |
| `f028ae7` | 2026-08-09 | `feat:` SDD (Doc 03), Coding & UT (Doc 06), indexer, real opcode scanner |
| `747cf84` | 2026-08-09 | `feat:` README, CI workflow, deployment plan with a hard promotion gate |
| `f9364c3` | 2026-08-09 | `fix:` sponsorship exhaustion queues at zero cost, never charges (`FR-061`, `NFR-005`) |
| `52ed66e` | 2026-08-09 | `feat(web):` app router pages, safety-surface tests, i18n type widening |
| `c854c0a` | 2026-08-09 | `fix(contracts):` six criticals and four highs from the independent security scan — **closes `REL-LIM-03`** (Doc 06 §5.2 `C-01` / `SEC-C01`). It also hardens the `REL-LIM-04` family with `H-01` (`setSpenderAuthoriser` made set-once, four lines) but does **not** close `REL-LIM-04` itself, which `b8cf2ce` had already done |
| `4b935f8` | 2026-08-09 | `ci:` run verify on windows-latest; fix hardcoded absolute path in `compile.mjs` |

**Definition-A (v1) application — 2026-08-25 → 2026-08-29.** *Merged to trunk, and deliberately
**not** described as release content in this document — see the coverage note in §0 and the owed
refresh in §7.*

| Commit | Date | Summary |
|---|---|---|
| `26d6ab5` | 2026-08-25 | `feat(scaffold):` v1 structure and `ADR-024` seams — `packages/ui`, `IEligibilityVerifier`, `IBallotService` |
| `4879d8e` | 2026-08-28 | `build/v1` party creation |
| `fe102a4` | 2026-08-29 | `build/v1` join membership — includes the live `FR-131`(d) counting-tier notice |
| `c04b4f2` | 2026-08-29 | `feat(proposals):` v1 proposals and debate flow with `DES-103`…`DES-106` |
| `31b6df9` | 2026-08-29 | `fix(proposals):` `FR-080` informed-consent event; Doc 07 v2.4.1 + Doc 08 v2.5.1 traceability |

A `CHANGELOG.md` and a tagged `0.1.0` range are owed at the release cut, alongside the refresh
recorded in §7. Neither is a precondition of this document leaving `In Review`: the record above is
the release record, and it is complete as of `HEAD`.

### Contributors

Named per Doc 13 §7.1 and Doc 02 §2.7 (VEKTOR named-owner rule — a person, never a team):
Priya Raghunathan (product-owner / architect — dual-hat, see Doc 13 `E-02` / `RISK-21`),
Ana-Maria Petrescu (project-manager), Samuel Oyelaran (engineering lead), Ji-woo Park (test lead),
Rafael Duarte (reviewer-qa / head of security), Nadia Hassan (technical-writer / a11y & l10n),
Chen Wei (sre — owner of this document).

### Links

| Artefact | Path |
|---|---|
| PR-FAQ | `docs/01-press-release-prfaq.md` |
| Requirements (SRS) | `docs/02-requirements-srs.md` |
| Architecture (SDD) | `docs/03-architecture-design-sdd.md` |
| Test strategy | `docs/04-test-strategy-master-plan.md` |
| Backlog | `docs/05-product-backlog.md` |
| Coding & UT | `docs/06-coding-and-ut.md` (v2.4.3, Approved) |
| Test cases | `docs/07-test-cases-suites.md` (v2.4.4, Approved — 610 green) |
| **RTM** | `docs/08-traceability-matrix.md` (v2.7.0, Approved) — **still a Gate-2 blocker: 122 of 138 Must rows OPEN** |
| Deployment runbook | `docs/10-deployment-runbook.md` |
| Operations runbook | `docs/11-operations-runbook.md` |
| Application inventory | `docs/12-application-inventory.md` |
| Project plan | `docs/13-project-plan.md` |
| User guide | `docs/14-user-guide.md` (v2.3.0, Approved — review loop closed; publication happens at Gate 2). **The source of the approved `FR-131` voting-privacy language this document is aligned to** (§1.2, §2.3, §2.6, §4.3) |
| Refine log | `docs/refine-log.md` |
| Dashboards | `N/A — not yet produced` — Doc 11 §4 specifies them |
| ADRs | `docs/adr/ADR-001` … `ADR-014` |

---

## 7. sre release decision

**HALTED.** Release `0.1.0` is not promoted beyond `devnet`/`testnet`, and no production release is
initiated, for the reasons in §0. **Two preconditions are not merely absent but failing, and each
one is sufficient on its own** — the halt does not depend on both, and it does not depend on any
code defect:

1. **The RTM (Doc 08) has open Must rows.** The document exists at v2.7.0 (Approved), so the
   zero-gap check that could not be performed at the first readiness pass now can be — and it
   **fails**: 122 of 138 Must rows are OPEN (Doc 08 §3.1 and gap log). Doc 07 v2.4.4 (Approved)
   supplies a suite result of record — 610 green — which clears the "no result of record" blocker
   but not this one. **Sufficient alone:** Gate 2 requires zero gaps in Must rows.
2. **Rollback is unproven** — the drill in Doc 10 §8.6 has not been executed (`NFR-020`, Doc 13
   §3.3 item 5). **Sufficient alone:** an unproven rollback means the reversibility this release
   would be operated under is asserted, not demonstrated.

Beyond those two, `REL-LIM-12` (the deployment-safety gate is written and unit-tested but is
executed by nothing that deploys) and `REL-LIM-18` (five `FR-131`-violating strings in shipped code,
two of them customer-facing) are open and independently block a customer-facing v1 deployment.

**Correction of record — a false third reason, withdrawn (2026-09-02).** Versions 1.0.1 and 1.1.0
gave a third reason: `REL-LIM-03`, an unauthenticated `RegionRegistry.issueResidency`. **That defect
does not exist and had not existed since 2026-08-09.** `RegionRegistry.sol:215` binds the caller to
the attester, the check landed in `c854c0a`, and Doc 06 v2.4.3 §5 records it as `C-01` / `SEC-C01`.
Worse, v1.1.0 **re-routed it to the engineer on 2026-09-02** without re-verifying, in a version
whose stated method was that every claim is pinned to shipped source. It was caught by the cycle-1
neutral review (`ISS-01`), not by its author. Recorded here rather than quietly deleted, because a
release-decision document that publishes a phantom Critical has a defect of its own, and the
correction is the more useful artefact than the erasure. **Removing it does not change the
decision** — see reasons 1 and 2 above.

**Verified fixed — each against its own commit, re-derived with `git log -S` on 2026-09-02:**
`REL-LIM-04` (nullifier burn access-controlled) and `REL-LIM-07` (open ballots no longer flag-gated)
in **`b8cf2ce`** (Doc 06 §5.1 numbered defects 1 and 4); `REL-LIM-03` (residency issuance now binds
`msg.sender` to the attester's registered `issuer`) in **`c854c0a`** (Doc 06 §5.2 `C-01` /
`SEC-C01`). Two commits, both on 2026-08-09. *(Correction of record: v1.2.0 stated under this same
heading that all three closed "in the same remediation, `c854c0a`". Only `REL-LIM-03` did. The
sentence was a tidy summary of per-row citations that were themselves correct — the second time in
this document's history that a roll-up asserted more than the rows beneath it, and the second time a
neutral review caught it rather than its author. Every generalising sentence in this version was
re-read against the record that proves it before publication.)* **Still open from the same readiness
pass:** `REL-LIM-15` (activation still flag-gated), `REL-LIM-16` (issuer-removal enrolment cliff),
`REL-LIM-17` (irrevocable spender set).

Routed back through the project-manager (Ana-Maria Petrescu). Owning roles: **engineer** —
`REL-LIM-12`, `REL-LIM-15`, and **`REL-LIM-18`, the five `FR-131`-violating code strings** (routed
2026-09-02, re-scoped from three sites to five the same day); **tester** — the RTM Must-row gaps
(Doc 08 §3.1); **architect** — `REL-LIM-05`, `-06`, `-09`, `-16`; **technical-writer** — Doc 14
publication at Gate 2. `REL-LIM-03` is **no longer routed to anyone**: it is closed (see the
correction of record above).

**Owed by the sre, named rather than left implicit:**

1. **The `REL-LIM-03` correction has not yet cascaded.** `docs/10-deployment-runbook.md` (§3.1
   Gate-2 checklist, §6) and `docs/11-operations-runbook.md` (PB-ATTEST, the limitation register)
   still publish the withdrawn claim, each citing this document as its source. Owed next session.
2. **The `REF-##` register is empty.** This document cites `REF-02` and `REF-04`…`REF-10`;
   `docs/refine-log.md` holds no entries. Those routings were made in prose and never registered.
   Owed at the next Operate cycle.
3. **A release-notes refresh covering the Definition-A (v1) application drops** — party creation,
   the parties directory, join/leave, membership history, the counting-tier gate, and the proposals
   and deliberation flow — at the **next release cut**. This version corrects the v1 position
   wherever this document already asserted it, but deliberately does not re-scope the release; see
   the coverage note in §0.

---
### Downstream
Proceed to staged rollout per **Doc 10** — **only after Gate 2 (MS-13) is human-approved**. Service
record maintained in **Doc 12**; operation per **Doc 11**; production learnings captured as `REF-##`
in `docs/refine-log.md` and routed to the product-owner.
