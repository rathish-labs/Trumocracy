# Doc 09 — cycle-2 rework (v1.1.0 → v1.2.0): anchored FIND/REPLACE transcription spec

```
Spec ID:       SPEC-DOC09-REWORK2-2026-09-02
Author:        Chen Wei — Reliability Lead (sre)  — owning role
Date:          2026-09-02
Target:        docs/09-release-notes.md  (current: v1.1.0, Status: In Review, 549 lines, LF, UTF-8)
Result:        docs/09-release-notes.md  v1.2.0, Status: In Review  (Status does NOT change)
Routed by:     artifacts/reviews/09-release-notes-v1.1.0-business-cycle1.md
               (business, cycle 1 of 5 — FAIL 77%, 1C / 3H / 5M / 4L; reviewer: tester, PM-assigned)
Transcriber:   project-manager (mechanical applier). Authorship stays with the sre.
Ops:           27 (CH-01 … CH-27)
```

## What this rework does

The cycle-1 report is accepted **in full**. Every finding was independently re-verified against
shipped source at `HEAD` (`e039ff2`) before an op was written; nothing was taken on the report's
word. Two findings turned out to be **larger** than reported and are treated accordingly (see
"Where I went further", below). Nothing is disputed.

The review's own verdict on the `FR-131` sweep — clean, document-wide — is **not reopened**. No op
in this spec touches the "What this release does not do" section, the two-tier disclosure box, the
tamper-evidence splits, or the `FR-131` word ban, except where a listed finding requires it.

**The HALT survives, and CH-25 makes that explicit rather than implicit.** Removing `REL-LIM-03`
takes away the third of three named reasons; reasons 1 (RTM: 122 of 138 Must rows OPEN) and 2
(rollback undrilled) each independently block Gate 2, and the rewritten §7 says so in terms.

## Verification log — every finding re-checked at HEAD

| Finding | What I ran / read | Result |
|---|---|---|
| `ISS-01` | `packages/contracts/src/core/RegionRegistry.sol:211-217`; `git log -S "att.issuer != msg.sender"`; `docs/06-coding-and-ut.md:617` | **Confirmed.** The guard is at **L215** and tests `att.issuer != msg.sender`. `issuer` is written only by `registerAttester`, which is `onlyTimelock` at **L184**, so it cannot be self-set. The check landed in **`c854c0a` (2026-08-09)**. Doc 06 §5 **`C-01` (Critical, `SEC-C01`)** records the identical fix. Doc 09 has been wrong about this since 2026-08-09 |
| `ISS-02` | `ls packages/contracts/script/`; `src/promotion-gate.mjs`; `test/deployment-safety.test.mjs`; `test/adversarial.test.mjs:323`; `package.json:26`; `.github/workflows/verify.yml` | **Confirmed — all three facts false.** `script/` holds `compile.mjs` **and `deploy.mjs`**; `DEPLOY_ORDER` (`promotion-gate.mjs:23`) and `WIRING_STEPS` (`:46`) are frozen and are the source of truth, printed by `formatDeploymentPlan()` (`:157`) via `npm run deploy:plan`; `assertSafeToPromote()` (`:86`) throws `UnsafeDeploymentError` and is covered by **`UT-0600`–`UT-0612`** in `test/deployment-safety.test.mjs`, which CI runs. `adversarial.test.mjs:323` is **`UT-0334`** (population deflation) |
| `ISS-03` | `docs/14-user-guide.md` §1.2; `PersonhoodRegistry.sol:177, :210`; Doc 02 `FR-121`, `FR-129`, `OI-04`, `OI-20` | **Confirmed.** `issuerSetValid()` is real skeleton code; Doc 14 v2.3.0 §1.2 states the rule is **not in effect in this pilot** — one government-run rail only |
| `ISS-04` | `sed -n '360,376p'` on the current file; `git show 52ed66e:docs/09-release-notes.md \| sed -n '253,259p'` | **Confirmed.** L364 is an orphaned duplicate of the old item-3 heading; item 4's heading line is destroyed; L372–374 are its orphaned tail. Original heading recovered verbatim |
| `ISS-05` | Full sweep of `anonymous`, `receipt-free`, `coercion-proof` across `packages/*/src` and `apps/web/src` | **Confirmed — five violating sites, not three.** Adds `packages/sdk/src/client.js:455-456`; re-classes `ReceiptFreedomBanner.tsx:6-10` as a violating comment, with the render at **L41–44** |
| `ISS-06` | Every pin re-read at `HEAD` | **Confirmed, and one more found** than the report listed — see below |
| `ISS-07` | Doc 14 §2.3; `apps/web/src/i18n/en.ts:134-138`; `packages/sdk/src/party-creation.js:34-38, :839-841, :871-883` | **Confirmed.** `FR-064` one-active-membership, explicit-leave form; a join naming another active party throws `ALREADY_MEMBER_ELSEWHERE` (`:883`) |
| `ISS-08` | Doc 14 §1.2; Doc 02 `FR-121`, `FR-129`, `OI-04`, `OI-20`, `H-19` | **Confirmed.** Phase-1 pilot is India / Aadhaar offline paperless KYC, a single rail; `H-19` records the counting exclusion as a platform limitation |
| `ISS-09` | `git log --no-merges -- packages/ apps/`; `git tag` | **Confirmed with a correction of emphasis.** No tag and no `CHANGELOG.md` exist — but **14 non-merge product-code commits do**, `48b07e0` (2026-08-08) through `31b6df9` (2026-08-29). The record is producible; it was simply never written |
| `ISS-L2` | Searched `docs/07-test-cases-suites.md` and the suites for `TC-EXIT` | **Confirmed.** No backing case. The reviewer owns Doc 07 and states this authoritatively; accepted without argument |
| `ISS-L3`, `ISS-L4` | Read as written | Confirmed; both fixed (CH-03, CH-02) |
| `ISS-L1` | `docs/refine-log.md` | Confirmed zero `REF-##` entries. **PM-accepted — no op.** Still my debt |

## Where I went further than the report

1. **`ISS-06` — an eighth stale pin the report did not list.** `REL-LIM-09` pins
   `VerifierRegistry.sol:33,65`. Both resolve (`SUPERSEDE_GRACE` at `:33`, the grace-window
   assignment at `:65`) and the report marked them correct — but the row's *load-bearing* claim is
   that `VerifierRegistry.register` is timelock-only, and **no pin covers it**. `register` is at
   `:53`, its timelock check at `:57`. CH-15 **adds** `:53,57` rather than disturbing the two pins
   the reviewer verified.
2. **`ISS-06` — a provenance line, not just corrected numbers.** The report asks that the re-pin be
   dated so a future reader can tell a stale pin from a moved line. CH-20 adds that line. CH-20 also
   repairs a second-order falsehood in the same preamble — *"Each is open, none is fixed by this
   release"* — which was already untrue of `REL-LIM-04`/`-07` and becomes more untrue once
   `REL-LIM-03` closes.
3. **`ISS-L3` — the coverage note is missing a whole drop, not merely overstated.** It names party
   creation, the directory, join/leave, membership history and the counting-tier gate. It omits the
   **proposals and deliberation drop** (`c04b4f2`, `31b6df9`, 2026-08-29 — `DES-103`…`DES-106`,
   `ProposalsAndDebate.tsx`, `packages/sdk/src/proposals.js`), which this document also does not
   cover, and which its own §7 owed-refresh item therefore also under-scopes. CH-03 and CH-26 add it.
4. **`ISS-09` — populated rather than deferred.** See below.

5. **A residual `ISS-01` site the report did not list — CH-27.** The Developer/API entrypoints table
   routes the reader to `REL-LIM-03` from the `RegionRegistry.issueResidency` row. Closing the row
   without this would leave a pointer sending a reader to look for an open defect at an entrypoint
   that is now correctly guarded. Found by simulating this spec against the file before shipping it.

## Judgment calls the PM and the reviewer should see

- **`ISS-09` resolved by populating, not by carve-out.** The report offered either. A release-notes
  document whose changelog section is empty while fourteen dated Conventional-Commit product
  commits sit in the history is not honestly *blocked* — it is *unwritten*. CH-24 writes the real
  record, grouped by drop, at commit granularity, and states plainly what it is **not**: not a
  tagged release range (no tag exists) and not a claim of verified delivery. **The self-blocking
  MUST is removed, because the thing it demanded is now done.** A dated deferral seemed the weaker
  answer when the data was one `git log` away.
- **`REL-LIM-12` stays open and keeps "Blocks Gate 2", on a narrowed and re-justified basis**
  (CH-18). What is false is "no deploy script exists". What remains true is that `deploy.mjs`
  **prints** the plan and executes nothing, and that Doc 10 §3.2 specifies its gate as a job running
  `cast call` against the **target environment's live `VerifierRegistry`**, whereas
  `assertSafeToPromote()` is exercised only against injected test readers. No CI job runs the gate
  against a deployment. That is a real Gate-2 blocker and I have kept it — with the honest addition
  that the gate *logic* exists and is unit-tested. Had I found it wired, I would have closed the row.
- **`PrivacyStatus` is NOT added to `REL-LIM-18`.** The sweep surfaced
  `packages/ui/src/PrivacyStatus.tsx` `title: 'Anonymous'` (`:228`) and `'Verified — private'`
  (`:233`). I read it: it is **`FR-131`-compliant by construction**. Clause 7 selects the subtitle
  from the live backing's declared properties; the v1 default is the fail-honest *"Your vote counts.
  How you voted is never made public."* (`:177`); the v2 string is explicitly guarded against a v1
  backing; and the `anon` title is the Supporter disclosure axis (`FR-082`/`FR-124`), not v1 voting
  behaviour. It is also rendered nowhere in the shipped app. **The count stays at five.** Recorded
  here as a watch item for whoever first renders it.
- **`ISS-L4` fixed by rewriting both history entries wrapped** (CH-02), not by re-flowing the
  existing line. A re-flow op on a 1,000-word single line is exactly the anchor-spanning risk that
  produced `ISS-04`; rewriting the block wholesale is the lower-risk edit.
- **`ISS-01` cascade into Docs 10 and 11 is NOT in this spec.** Scoped out by the PM for this
  session. Recorded as sre debt in my memory note and referenced from the `REL-LIM-03` routing cell
  (CH-09) so the document itself carries the pointer.

## OWED sre debt, recorded here and in the session note

1. **`ISS-01` cascade — Docs 10 and 11 still publish the closed defect.**
   `docs/10-deployment-runbook.md:137` (Gate-2 checklist, "Open Must-blocking code defects = 0 —
   **FAIL:** … `REL-LIM-03` …") and `:378` ("This is Doc 09 `REL-LIM-03` / `REF-02` and is a **hard**
   …"); `docs/11-operations-runbook.md:281` ("Doc 09 `REL-LIM-03` / `REF-02`. Until this is fixed …")
   and `:993` (register row: `issueResidency` unauthenticated | **Gate-2 blocker**). All four cite
   Doc 09 as their source, so all four inherit the correction. **Owner: sre. Next session.**
2. **`REF-##` register (`ISS-L1`).** `docs/refine-log.md` holds zero entries while Doc 09 cites
   `REF-02` and `REF-04`…`REF-10`. PM-accepted; still owed by me at the next Operate cycle.
3. **Release-notes refresh for the v1 application drops** — party creation, directory, join/leave,
   membership, counting-tier gate **and the proposals/deliberation drop**. Owed at the next release
   cut (CH-26 records it in the document).
4. **Watch item, not a defect:** `packages/ui/src/PrivacyStatus.tsx` copy must be re-checked against
   `FR-131` the first time the component is actually rendered.

## Transcription protocol — read before applying

The cycle-1 report's `ISS-04` was caused by an applier that consumed one line more than the FIND
block specified, at a list-item boundary. Two safeguards this time:

- **Every FIND block was extracted with `sed -n 'X,Yp'` from the current file and machine-verified
  to occur exactly once, with no overlap between blocks.** Do not retype them.
- **After transcription, `git diff` the result and read the boundary lines of every op**, especially
  CH-21 (which repairs the previous boundary failure) and CH-25 (a 21-line block). An op that
  silently eats the following line will not always be visible in the rendered document.
- Fences are **four backticks**. Apply in any order; ops are independent. If any FIND matches zero
  times or more than once, **abort the whole spec** rather than applying the rest.
- No file other than `docs/09-release-notes.md` is changed by this spec.

---

## CH-01 Header — version 1.1.0 to 1.2.0 (line 5)

Header. Minor bump per the house rule for a Medium-or-worse FAIL. Column alignment preserved.
`Last updated` stays 2026-09-02 and `Status` stays `In Review` — neither is touched by any op.

FIND:
````
Version:       1.1.0            (document version; SemVer)
````
REPLACE WITH:
````
Version:       1.2.0            (document version; SemVer)
````

## CH-02 Document history — add v1.2.0 and re-wrap v1.1.0  [ISS-L4] (line 20)

Fixes `ISS-L4`. The v1.1.0 entry is re-issued **wrapped to ~100 columns**, unchanged in substance;
the v1.2.0 entry is wrapped from the start. FIND is the single unwrapped v1.1.0 line; the v1.0.1
line below it is untouched by this op.

FIND:
````
> **Document history — v1.1.0 (2026-09-02):** `FR-131` compliance rework, on the approver directive of 2026-09-02 (Rathish), which found in this document the same **Critical** class that failed Doc 14 v1.0.0 — an anonymity claim v1 does not deliver, asserted in a public-facing material. Doc 02 §4.45 `FR-131` closes by forbidding the words "private", "anonymous", "receipt-free" and "secure" as descriptions of v1 voting behaviour in the v1 product's UI, README **and all public-facing materials**; release notes are a public-facing material. Three violation classes were swept, and every corrected claim is pinned to shipped source rather than to a changelog. **(1) Anonymity/privacy overclaims about v1 voting** — the "What this release does not do" section rebuilt on the `FR-131`(a)–(d) disclosure (v1 voting is NOT anonymous, NOT receipt-free, NOT coercion-resistant; the platform database CAN see vote direction and party membership; the cryptographic private ballot arrives with the Definition-B (v2) privacy layer), in the future-framed pattern approved for Doc 14 v2.3.0 §2.6, since no ballot-casting screen ships yet; the Highlights, Security and can/cannot claims requalified; `REL-LIM-02` restated. **(2) Tamper-evidence / public-record overclaims** — "anyone can check the record", "re-compute it independently" and "complete verifiable state" qualified to what the shipped v1 store actually provides: append-only inside Trumocracy's own store, not published, not independently checkable until the `DES-097` audit-anchoring release (Doc 14 `ISS-C2-01` class). **(3) Two-tier omission** — the open-tier / counting-tier model (`FR-122`, `FR-123`, `FR-131`(d), `FR-132`) added wherever this document makes a participation claim. Also corrected, as facts that had become false: §0, the internal record and the Links table asserted that Docs 07/08 do not exist and that "Docs 02–14 unreviewed" — Docs 01–08, 13 and 14 all carry passing `document-review` reports as of 2026-09-01. New disclosed limitation **`REL-LIM-18`** records three surviving `FR-131` violations in **code**, routed to the engineer and not fixed here (documents-only session). **The release verdict is unchanged: HALTED, Gate 2 not approved** (§0, §7). Authored by the sre as an anchored FIND/REPLACE spec (`artifacts/sre-2026-09-02T1759-doc09-fr131-spec.md`) and transcribed mechanically.
````
REPLACE WITH:
````
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
````

## CH-03 §0 coverage note — soften the opening clause, add the omitted drop  [ISS-L3] (lines 49-57)

Fixes `ISS-L3`, and goes further: the note also omitted the **proposals and deliberation drop**
(`c04b4f2`, `31b6df9`, 2026-08-29), which this document likewise does not cover.

FIND:
````
> **What this document covers, and what it does not.** Release `0.1.0` as described here is the
> **Phase-1 contract skeleton on public testnet**. It **does not yet cover** the Definition-A (v1)
> database application since merged to trunk — party creation, the parties directory, join/leave,
> membership history and the counting-tier gate (`apps/web`, `packages/sdk`, `packages/protocol`).
> A release-notes refresh covering that drop is **owed at the next release cut** and is recorded as
> an open item in §7. This matters for reading the rest of the document: several properties below
> are design properties of the **contract skeleton** and are **not** properties of the shipped v1
> application. Where they differ, this version says which one it is describing, because the
> difference is the whole subject of `FR-131` (Doc 02 §4.45) and `REL-LIM-01`.
````
REPLACE WITH:
````
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
````

## CH-04 Highlights — Aadhaar-only counting exclusion  [ISS-08] (lines 70-75)

Fixes `ISS-08` at the first of four counting-tier claims. Doc 14 v2.3.0 §1.2 discloses this and
explicitly refuses to hide it; Doc 09 owes the same parity.

FIND:
````
`FR-122`). **Being counted is a separate step.** Contributing to a party's official strength number,
casting a vote that decides a binding decision, and standing as a candidate each require a
government-ID check first (`FR-123`, `FR-132`(b)). A vote that counts carries a weight of exactly 1
and cannot be bought, borrowed or inherited. **What this release does not give you is proof of
unique personhood:** the v1 identity check establishes "a real, legal-age person" — it is explicitly
not one-person-one-vote, and this document does not claim otherwise (`FR-132`(d); Doc 02 §4.46).
````
REPLACE WITH:
````
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
````

## CH-05 Added — membership bullet: one active party, and Aadhaar  [ISS-07, ISS-08] (lines 95-105)

Fixes `ISS-07` and the second `ISS-08` site. Verified: `FR-064` one-active-membership in
explicit-leave form — `packages/sdk/src/party-creation.js:34-38`, `:839-841`, `:871-883`
(`ALREADY_MEMBER_ELSEWHERE`); shipped copy `apps/web/src/i18n/en.ts:134-138`; Doc 14 v2.3.0 §2.3.

FIND:
````
- **Membership: join and leave, unconditionally** (`FR-020`–`FR-023`, `DES-013`, `DES-014`). Joining
  records only a commitment and a join time. **Time in the party affects what you are eligible to
  do; it never affects how much your vote counts.** Joining and leaving are open to everyone and are
  never gated on an identity document — `FR-020` is absolute (`FR-122`). **What joining does not by
  itself give you is a counted membership.** Until the government-ID check is passed a member is
  **open-tier**: not part of the party's official strength number, not able to cast a binding vote,
  not able to stand (`FR-123`, `FR-132`(b)); the `FR-131`(d) notice states this plainly before any
  such action is refused. And in the Definition-A (v1) application, membership is **not published**
  but **Trumocracy's own records can link an account to the party it joined** — that link is real
  and it is never published (`FR-131`(b); shipped copy `parties.joinPrivate`,
  `apps/web/src/i18n/en.ts`; Doc 14 v2.3.0 §2.3).
````
REPLACE WITH:
````
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
````

## CH-06 Security — both issuer bullets qualified skeleton-vs-pilot  [ISS-03] (lines 184-189)

Fixes `ISS-03`. Verified: `PersonhoodRegistry.issuerSetValid()` declared at `:177`, enforced
fail-closed in `enrol` at `:210` — real contract-skeleton code. Doc 14 v2.3.0 §1.2 states the
opposite for the shipping pilot. Both bullets the reviewer named are covered by this one op.

FIND:
````
- **A compromised issuer is contained, not weaponised** (`FR-005`, `DES-003`). Each issuer has a
  per-day enrolment cap. Removing a compromised issuer stops new enrolments but **does not revoke
  credentials already issued** — punishing an issuer's users for their issuer's failure would be the
  wrong trade.
- **At least two issuers, at least one not run by a state** (`ADR-003`, enforced by
  `PersonhoodRegistry.issuerSetValid()`).
````
REPLACE WITH:
````
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
````

## CH-07 Two-tier read-this-first box — Aadhaar-only  [ISS-08] (lines 283-294)

Fixes the third `ISS-08` site. The box currently presents the counting gate as a neutral universal
step. FIND starts at the counting-tier bullet and runs to the end of the box.

FIND:
````
> - **Counting tier** — an open-tier member who has additionally passed a government-ID check
>   (`FR-132`(b)). **Three actions, and only three, require it** (`FR-123`): contributing to a
>   party's official strength number, casting a vote that decides a binding decision, and standing
>   as a candidate.
>
> Attempt one of the three before you are counting and the app shows a plain-language,
> **non-dismissable** notice **before** it refuses — what your status is, that a government-ID check
> is what is needed, exactly what does not count for you, and how to become counting (`FR-131`(d)).
> That notice is **live today** at the parties directory
> (`apps/web/src/components/PartyMembership.tsx`, copy `parties.openTierNotice*`). **The
> government-ID check itself is not switched on yet in this release, so every member is currently
> open-tier** — read the "can" column below with that in mind.
````
REPLACE WITH:
````
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
````

## CH-08 can/cannot — the join row: one active party  [ISS-07, ISS-08] (line 302)

Fixes the fourth `ISS-08` site and the `ISS-07` table row. The row already cites `FR-122`/`FR-123`,
so the §0 coverage note does not shield it — it is describing the v1 application.

FIND:
````
| Join and leave any party, freely and unconditionally, with a phone number alone (`FR-020`, `FR-122`) | Have that membership **count** — toward official strength, toward a binding vote, or toward candidacy — before the government-ID check (`FR-123`, `FR-132`(b)); or transfer, sell, lend or inherit membership or voting power (`CON-006`, `ADR-007`) |
````
REPLACE WITH:
````
| Join any party with a phone number alone, and leave at any moment — no approval, no sponsor, no fee, no penalty, and nobody may remove them (`FR-020`, `FR-122`) | Hold two active memberships at once. In the v1 application a join is refused, naming the party that blocks it, until they leave the first — leaving is instant and needs nobody's permission (`FR-064` explicit-leave form; `apps/web/src/i18n/en.ts` `parties.onePartyRule`; Doc 14 v2.3.0 §2.3). Nor have that membership **count** — toward official strength, a binding vote, or candidacy — before the government-ID check, which in this pilot accepts **Aadhaar only** (`FR-123`, `FR-132`(b), `FR-121`, `H-19`); or transfer, sell, lend or inherit membership or voting power (`CON-006`, `ADR-007`) |
````

## CH-09 REL-LIM-03 — CLOSE the row; it was fixed on 2026-08-09  [ISS-01, Critical] (line 327)

**The Critical.** Re-verified at `HEAD`: `packages/contracts/src/core/RegionRegistry.sol:215` reads
`if (!attesterAuthorised[regionId][attesterId] || !att.active || att.issuer != msg.sender) revert
NotAuthorisedAttester(...)`. `issuer` is set only by `registerAttester`, `onlyTimelock` at `:184`.
The check landed in `c854c0a` (2026-08-09). Doc 06 v2.4.3 §5 records it as `C-01` / `SEC-C01`.
Restated in the closed style already used by `REL-LIM-04` and `REL-LIM-07`. The routing cell carries
the Doc 10 / Doc 11 cascade debt, per the PM scoping of this session.

FIND:
````
| **REL-LIM-03** | **`RegionRegistry.issueResidency` does not bind the caller to the attester.** The function checks that `attesterId` is authorised and active, but never checks that `msg.sender` is that attester — any address may pass an authorised `attesterId` and insert residency leaves. | A residency tree can be inflated at will, which inflates the verified-resident term of the petition threshold and manufactures endorsement eligibility. Directly undermines `RISK-01`. | `packages/contracts/src/core/RegionRegistry.sol:169`; `FR-006`, `NFR-004`, `RISK-01`, `RISK-05` | **Must be fixed and re-tested before any real-value deployment.** Routed to engineer via `REF-02` |
````
REPLACE WITH:
````
| ~~**REL-LIM-03**~~ | ~~`RegionRegistry.issueResidency` does not bind the caller to the attester~~ — **FIXED, and this document was wrong to keep publishing it.** `issueResidency` **does** authenticate the caller: it reverts unless `attesterAuthorised[regionId][attesterId] && att.active && att.issuer == msg.sender`. The `issuer` address is written only by `registerAttester`, which is `onlyTimelock`, so an attacker cannot self-register as the issuer of an authorised `attesterId`. | The residency-tree inflation path is closed. `RISK-01` and `NFR-004` are defended at this entrypoint. **Correction of record:** v1.0.1 and v1.1.0 both listed this as the last open Must-blocker and, in v1.1.0, re-routed it to the engineer on 2026-09-02 without re-verifying — the claim had already been false for three weeks. The earlier sentence that two sibling defects were fixed "and this one was not" was inverted: **all three were closed in the same remediation.** | `packages/contracts/src/core/RegionRegistry.sol:215` (guard), `:184` (`registerAttester` is `onlyTimelock`); commit `c854c0a`, 2026-08-09; Doc 06 v2.4.3 §5 defect `C-01` (Critical, `SEC-C01`); `FR-006`, `NFR-004`, `RISK-01`, `RISK-05` | **Closed** (re-verified by the sre against `HEAD`, 2026-09-02, on `09-release-notes-v1.1.0-business-cycle1` `ISS-01`). **Cascade owed:** Doc 10 §3.1 checklist and §6, and Doc 11 PB-ATTEST and its limitation register, still carry the stale claim citing this document as source — sre debt, next session |
````

## CH-10 REL-LIM-05 pin  [ISS-06] (line 329)

`RegionRegistry.sol:213` is inside `issueResidency`. `submitPopulation`, the `onlyTimelock` function
the row is about, is at **`:261`**.

FIND:
````
| **REL-LIM-05** | **Population sources all submit through the timelock.** `RegionRegistry.submitPopulation` is `onlyTimelock`, so the "median of ≥5 independent sources" is operationally a median of five values chosen by one governance path. | Weakens the `RISK-12` mitigation from *structural* to *procedural*. The 7-day dispute window and ±5%/quarter drift cap still bind. | `packages/contracts/src/core/RegionRegistry.sol:213`; `FR-009`, `DES-007`, `RISK-12` | Open — routed via `REF-04` |
````
REPLACE WITH:
````
| **REL-LIM-05** | **Population sources all submit through the timelock.** `RegionRegistry.submitPopulation` is `onlyTimelock`, so the "median of ≥5 independent sources" is operationally a median of five values chosen by one governance path. | Weakens the `RISK-12` mitigation from *structural* to *procedural*. The 7-day dispute window and ±5%/quarter drift cap still bind. | `packages/contracts/src/core/RegionRegistry.sol:261` (`submitPopulation`, `onlyTimelock`); `FR-009`, `DES-007`, `RISK-12` | Open — routed via `REF-04` |
````

## CH-11 REL-LIM-07 pins  [ISS-06] (line 331)

`Governor.sol:262` is a struct-field assignment; the explicit NOTE is at **`:309`**. `:157` is
`requiredTier` NatSpec; the flag gate the row contrasts against — `propose` — is at **`:199`**.

FIND:
````
| ~~**REL-LIM-07**~~ | ~~Disabling `party_governance` stops voting on open ballots~~ — **FIXED in this drop.** `vote`, `finalize` and `execute` are deliberately **not** flag-gated; only `propose` is. Flags now gate *starting* a capability, never *completing* one already under way. | `NFR-020` sentence 3 is satisfied for ballots. | `Governor.sol:262` (explicit NOTE), `Governor.sol:157`; Doc 06 §5 defect 4; `UT-0360`, `UT-0361` | **Closed** (verified by the sre against source, 2026-08-09) |
````
REPLACE WITH:
````
| ~~**REL-LIM-07**~~ | ~~Disabling `party_governance` stops voting on open ballots~~ — **FIXED in this drop.** `vote`, `finalize` and `execute` are deliberately **not** flag-gated; only `propose` is. Flags now gate *starting* a capability, never *completing* one already under way. | `NFR-020` sentence 3 is satisfied for ballots. | `Governor.sol:309-315` (the explicit NOTE inside `vote`), `Governor.sol:199` (`flags.requireEnabled(FLAG_GOVERNANCE)` — on `propose`, and nowhere else); Doc 06 §5 defect 4; `UT-0360`, `UT-0361` | **Closed** (verified against source 2026-08-09; pins re-verified 2026-09-02) |
````

## CH-12 REL-LIM-15 pins  [ISS-06] (line 332)

`PartyRegistry.sol:241` is near `revert AnonymitySetTooSmall` inside `endorse`. `activate` is at
**`:293`** and its `flags.requireEnabled(FLAG_PETITIONS)` at **`:297`**.

FIND:
````
| **REL-LIM-15** | **The same hazard survives at activation.** `PartyRegistry.activate` still calls `flags.requireEnabled(FLAG_PETITIONS)`. A petition that has **already met its threshold** cannot be activated while the flag is off — the flag blocks the completion of a citizen process that has already succeeded. | Disabling `petitions` is not purely additive: it strands successful petitions until the flag is re-enabled, which takes **30 days** through the timelock. Same class as the defect fixed for voting; same principle violated. | `PartyRegistry.sol:241`; `NFR-020`, `CON-003`; Doc 06 §5 defect 4 states the principle | **Open.** Routed via `REF-08`; operational control in Doc 11 PB-KILL |
````
REPLACE WITH:
````
| **REL-LIM-15** | **The same hazard survives at activation.** `PartyRegistry.activate` still calls `flags.requireEnabled(FLAG_PETITIONS)`. A petition that has **already met its threshold** cannot be activated while the flag is off — the flag blocks the completion of a citizen process that has already succeeded. | Disabling `petitions` is not purely additive: it strands successful petitions until the flag is re-enabled, which takes **30 days** through the timelock. Same class as the defect fixed for voting; same principle violated. | `PartyRegistry.sol:293` (`activate`), `:297` (the `requireEnabled` call); `NFR-020`, `CON-003`; Doc 06 §5 defect 4 states the principle | **Open.** Routed via `REF-08`; operational control in Doc 11 PB-KILL |
````

## CH-13 REL-LIM-16 pins  [ISS-06] (line 333)

Off by one: `issuerSetValid()` is declared at **`:177`**, and the fail-closed guard inside `enrol()`
(itself at `:199`) is at **`:210`**.

FIND:
````
| **REL-LIM-16** | **`enrol()` now fails closed on `issuerSetValid()`** — correct for the invariant, but it makes issuer removal a **global** lever: deactivating a compromised issuer that tips the region below "≥2 active, ≥1 non-state" halts **all** enrolment network-wide, and adding a replacement takes **30 days**. | The primary containment action in the issuer-compromise playbook can itself cause a 30-day enrolment outage. A real cliff, not a theoretical one. | `PersonhoodRegistry.sol:209`, `:176`; `ADR-003`, `ADR-010`; Doc 06 §5 defect 3 | **Open** — operational control in Doc 11 PB-ISSUER. Routed via `REF-09` |
````
REPLACE WITH:
````
| **REL-LIM-16** | **`enrol()` now fails closed on `issuerSetValid()`** — correct for the invariant, but it makes issuer removal a **global** lever: deactivating a compromised issuer that tips the region below "≥2 active, ≥1 non-state" halts **all** enrolment network-wide, and adding a replacement takes **30 days**. | The primary containment action in the issuer-compromise playbook can itself cause a 30-day enrolment outage. A real cliff, not a theoretical one — and in the single-rail Phase-1 pilot there is no sibling issuer to fall back to at all (see the Security section). | `PersonhoodRegistry.sol:210` (fail-closed guard in `enrol`), `:177` (`issuerSetValid()`); `ADR-003`, `ADR-010`; Doc 06 §5 defect 3 | **Open** — operational control in Doc 11 PB-ISSUER. Routed via `REF-09` |
````

## CH-14 REL-LIM-08 pin  [ISS-06] (line 335)

`Governor.sol:266` is a struct-field assignment. `revert MaciPathRequired()` is at **`:319`**; the
error is declared at `:137`.

FIND:
````
| **REL-LIM-08** | **Enabling `maci_voting` before the MACI module ships bricks voting.** `Governor.vote` reverts with `MaciPathRequired` when the flag is on, and no alternative vote path exists in this release. | A single timelocked `enable('maci_voting')` would make every party ungovernable with no way to undo it faster than the emergency disabler can act. | `Governor.sol:266` | Operational control only — Doc 10 §5.1 forbids enabling it before Phase 3 |
````
REPLACE WITH:
````
| **REL-LIM-08** | **Enabling `maci_voting` before the MACI module ships bricks voting.** `Governor.vote` reverts with `MaciPathRequired` when the flag is on, and no alternative vote path exists in this release. | A single timelocked `enable('maci_voting')` would make every party ungovernable with no way to undo it faster than the emergency disabler can act. | `Governor.sol:319` (`if (flags.isEnabled(FLAG_MACI)) revert MaciPathRequired();`), `:137` (error declaration) | Operational control only — Doc 10 §5.1 forbids enabling it before Phase 3 |
````

## CH-15 REL-LIM-09 pins — add the missing one  [ISS-06 + sre addition] (line 336)

`:33` and `:65` both resolve and the reviewer verified them. But the row s load-bearing claim —
that `register` is timelock-only — had **no** pin. `register` is at `:53`, its timelock check at
`:57`. Added rather than substituted.

FIND:
````
| **REL-LIM-09** | **A compromised verifier cannot be promptly retired.** `VerifierRegistry.register` is timelock-only (30 days, `ADR-010`) and superseding a circuit leaves the old verifier accepting proofs for a further `SUPERSEDE_GRACE = 30 days`. | Worst case ~60 days of a known-bad verifier still accepting proofs. The only fast lever is disabling the flag on the entrypoint that consumes it. | `VerifierRegistry.sol:33,65`; `NFR-017`, `DES-039`, `RISK-10` | Open — routed via `REF-06` |
````
REPLACE WITH:
````
| **REL-LIM-09** | **A compromised verifier cannot be promptly retired.** `VerifierRegistry.register` is timelock-only (30 days, `ADR-010`) and superseding a circuit leaves the old verifier accepting proofs for a further `SUPERSEDE_GRACE = 30 days`. | Worst case ~60 days of a known-bad verifier still accepting proofs. The only fast lever is disabling the flag on the entrypoint that consumes it. | `VerifierRegistry.sol:53` (`register`), `:57` (`if (msg.sender != timelock) revert NotTimelock();`), `:33` (`SUPERSEDE_GRACE = 30 days`), `:65` (grace window set on supersede); `NFR-017`, `DES-039`, `RISK-10` | Open — routed via `REF-06` |
````

## CH-16 REL-LIM-10 pin  [ISS-06] (line 337)

`fixture.mjs:62` is inside `ALL_FLAGS` (declared `:57`). `PHASE1_FLAGS` is at **`:70`** and does
enable `fork` and `treasury`, so the substance holds.

FIND:
````
| **REL-LIM-10** | **Phase-1 flag posture is inconsistent between sources.** `flags.js` prod defaults have `treasury: false` and `fork: false`; the test fixture's `PHASE1_FLAGS` enables `fork` **and** `treasury`; Doc 13 §9 says both OFF. | A deployment driven from the test fixture would ship two capabilities that plan and registry both say are dark. | `packages/protocol/src/flags.js` vs `packages/contracts/test/fixture.mjs:62` vs Doc 13 §9 | Doc 10 §5.1 makes `flags.js` prod defaults the single source of truth. Routed via `REF-07` |
````
REPLACE WITH:
````
| **REL-LIM-10** | **Phase-1 flag posture is inconsistent between sources.** `flags.js` prod defaults have `treasury: false` and `fork: false`; the test fixture's `PHASE1_FLAGS` enables `fork` **and** `treasury`; Doc 13 §9 says both OFF. | A deployment driven from the test fixture would ship two capabilities that plan and registry both say are dark. | `packages/protocol/src/flags.js` (prod defaults) vs `packages/contracts/test/fixture.mjs:70` (`PHASE1_FLAGS`) vs Doc 13 §9 | Doc 10 §5.1 makes `flags.js` prod defaults the single source of truth. Routed via `REF-07` |
````

## CH-17 REL-LIM-13 pin  [ISS-06] (line 340)

`Governor.sol:250-255` is struct-field assignment inside `propose`. The row is about interim tallies
being readable: the counters are `:81-83` and the public read is `proposals(uint256)` at **`:420`**.

FIND:
````
| **REL-LIM-13** | Interim tallies are readable on-chain; suppression before close (`FR-034`) is enforced by the client and indexer only, because the chain cannot hide what it stores. | A determined observer can read a running tally directly. Disclosed, not fixed. | `Governor.sol:250-255`; `FR-034`, `DES-026` | By design — disclosed in Doc 14 |
````
REPLACE WITH:
````
| **REL-LIM-13** | Interim tallies are readable on-chain; suppression before close (`FR-034`) is enforced by the client and indexer only, because the chain cannot hide what it stores. | A determined observer can read a running tally directly. Disclosed, not fixed. | `Governor.sol:81-83` (`forVotes` / `againstVotes` / `abstainVotes` on the stored `Proposal`), `:420` (`proposals(uint256)` returns the whole struct, unguarded), `:343-345` (the increments); `FR-034`, `DES-026` | By design — disclosed in Doc 14 |
````

## CH-18 REL-LIM-12 — re-based on HEAD, narrowed, Gate-2 verdict re-justified  [ISS-02, High] (line 339)

All three supporting facts were false. Verified: `script/` holds `compile.mjs` **and** `deploy.mjs`;
`DEPLOY_ORDER` (`promotion-gate.mjs:23`) and `WIRING_STEPS` (`:46`) are frozen and are the source of
truth, printed by `formatDeploymentPlan()` (`:157`) via `npm run deploy:plan`; `assertSafeToPromote()`
(`:86`) throws `UnsafeDeploymentError` and is covered by `UT-0600`–`UT-0612` in
`test/deployment-safety.test.mjs`, which CI runs; `adversarial.test.mjs:323` is `UT-0334`.
**Row stays open and keeps "Blocks Gate 2" — see the judgment call above for why.**

FIND:
````
| **REL-LIM-12** | **No production deploy script exists.** `packages/contracts/script/` contains only `compile.mjs`; the deployment order in Doc 10 §5 is derived from `test/fixture.mjs`. | Doc 10 §5 is executable-by-hand but not yet automated, and the deployment-safety gate of Doc 10 §3.2 exists as a test assertion (`adversarial.test.mjs:320-329`), not as a promotion job. | `packages/contracts/script/`; `NFR-020` | **Blocks Gate 2** — Doc 10 §3.2 |
````
REPLACE WITH:
````
| **REL-LIM-12** | **The deployment-safety gate is not wired to anything that deploys.** *(Corrected 2026-09-02: v1.0.1 and v1.1.0 said "no production deploy script exists", that the deploy order came from `test/fixture.mjs`, and that the gate was only a test assertion. All three were false and are withdrawn.)* What is actually true: `packages/contracts/script/deploy.mjs` exists but **prints** the plan and executes nothing — it is a CLI wrapper over `formatDeploymentPlan()`, run as `npm run deploy:plan`. The order itself is frozen and authoritative in `promotion-gate.mjs` (`DEPLOY_ORDER`, `WIRING_STEPS`), not in the test fixture. And `assertSafeToPromote()` **is** real, throwing code with real coverage — but it is exercised only against injected test readers. | **No environment can actually be promoted through the gate**, because nothing runs it against a live deployment. Doc 10 §3.2 specifies the check as a job that calls `versionCount`/`IS_INSECURE_MOCK()` on the **target environment's `VerifierRegistry`**; no CI job does that, and there is no executing deployer for it to sit in front of. The gate is proven as a function and unproven as a control. | `packages/contracts/script/deploy.mjs` (print-only); `packages/contracts/src/promotion-gate.mjs:23` (`DEPLOY_ORDER`), `:46` (`WIRING_STEPS`), `:86` (`assertSafeToPromote`), `:144`, `:167-168` (the throws), `:157` (`formatDeploymentPlan`); `packages/contracts/test/deployment-safety.test.mjs` (`UT-0600`–`UT-0612`); `.github/workflows/verify.yml`; Doc 10 §3.2; `NFR-020` | **Blocks Gate 2** — on the narrowed ground that Doc 10 §3.2's control is unexecuted, not on the withdrawn claim that it was unwritten. Clears when a promotion job runs `assertSafeToPromote` against a live target and the run is recorded |
````

## CH-19 REL-LIM-18 — five violating strings, not three  [ISS-05] (line 342)

Full sweep re-run across `packages/*/src` and `apps/web/src`. Adds `packages/sdk/src/client.js:455`
(fourth) and re-classes `ReceiptFreedomBanner.tsx:6-10` as a violating **comment** (fifth), with the
render pinned separately at `:41-44`. `PrivacyStatus.tsx` was examined and is NOT counted — see the
judgment call above.

FIND:
````
| **REL-LIM-18** | **Three shipped code strings still assert the retired "votes are anonymous but not receipt-free" framing, in violation of `FR-131`.** (1) `packages/protocol/src/flags.js:44` — `MACI_VOTING.description` says votes are anonymous but not receipt-free **and that the UI must say so**. (2) `packages/contracts/src/core/Governor.sol:25-28` — the same assertion in contract NatSpec. (3) `apps/web/src/i18n/en.ts:400-405` — `banner.notReceiptFreeTitle` uses the banned word "private" about v1 voting and `notReceiptFreeBody` claims nobody can see that a vote was yours; both are rendered at the vote step by the shipped `ReceiptFreedomBanner`. | (3) is **customer-facing and shipped**: it tells a member the exact thing `FR-131`(a)/(b) forbids, on the very surface where `FR-131` mandates the opposite. (1) and (2) are developer-facing, but (1) was cited by this document, until v1.1.0, as the normative warning text. The requirement, not the code string, is normative. | `FR-131`(a) and its closing sentence (Doc 02 §4.45); `packages/protocol/src/flags.js:44`; `packages/contracts/src/core/Governor.sol:25-28`; `apps/web/src/i18n/en.ts:400`; `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` | **Open — routed to the engineer** via the project-manager on 2026-09-02 by the sre (documents-only session; no code changed). Blocks any v1 customer-facing deployment |
````
REPLACE WITH:
````
| **REL-LIM-18** | **Five shipped code strings still assert the retired "votes are anonymous but not receipt-free" framing, in violation of `FR-131`.** *(Corrected 2026-09-02 from "three" after a full re-sweep of `packages/*/src` and `apps/web/src`.)* **(1)** `packages/protocol/src/flags.js:44` — `MACI_VOTING.description` says votes are anonymous but not receipt-free **and that the UI must say so**. **(2)** `packages/contracts/src/core/Governor.sol:25,28` — the same assertion in contract NatSpec, twice. **(3)** `apps/web/src/i18n/en.ts:400-405` — `banner.notReceiptFreeTitle` uses the banned word "private" about v1 voting and `notReceiptFreeBody` claims nobody can see that a vote was yours. **(4)** `packages/sdk/src/client.js:455-456` — "which is why a vote is anonymous even though it is public". **(5)** `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` — the file's own doc comment repeats the claim and quotes an SDD line instructing the client to state it. | **(3) and (5) are customer-facing:** (3) is the rendered copy and (5) is the standing instruction to keep rendering it, both on the vote surface where `FR-131` mandates the opposite text. (1), (2) and (4) are developer-facing, but (1) was cited by this document, until v1.1.0, as the normative warning text. **The requirement is normative; none of these strings is.** | `FR-131`(a) and its closing sentence (Doc 02 §4.45); `packages/protocol/src/flags.js:44`; `packages/contracts/src/core/Governor.sol:25,28`; `apps/web/src/i18n/en.ts:400-405`; `packages/sdk/src/client.js:455-456`; `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` (violating comment) and `:41-44` (the render), mounted at `ProposalsAndDebate.tsx:489` | **Open — routed to the engineer** via the project-manager, 2026-09-02, re-scoped from three sites to five on 2026-09-02 (`09-release-notes-v1.1.0-business-cycle1` `ISS-05`). Blocks any v1 customer-facing deployment. *Watch item, not counted here:* `packages/ui/src/PrivacyStatus.tsx` is `FR-131`-compliant by construction (backing-aware clause 7, fail-honest v1 default) and is rendered nowhere yet — re-check its copy the first time it is rendered |
````

## CH-20 Known-issues preamble — dated re-pin line, and a false "none is fixed"  [ISS-06] (lines 320-323)

Second half of `ISS-06`: state the date of the re-pin so a stale pin is distinguishable from a moved
line. Also repairs the preamble sentence "Each is open, none is fixed by this release", which was
already false of `REL-LIM-04`/`-07` and is more so once `REL-LIM-03` closes.

FIND:
````
Every item below is a **release-blocking** or **disclosed** limitation of release 0.1.0. Each is
open, none is fixed by this release.

| ID | Limitation | Impact | Trace | Cleared by |
````
REPLACE WITH:
````
Every item below is a **release-blocking** or **disclosed** limitation of release 0.1.0. Most are
open. Three are struck through and marked closed — `REL-LIM-03`, `REL-LIM-04` and `REL-LIM-07`, all
fixed in the same security remediation (`c854c0a`, 2026-08-09; Doc 06 §5 `C-01`–`C-06`) — and are
kept in the register rather than deleted, so the record of what was disclosed stays readable.

> **Source pins in the Trace column were re-verified line by line against `HEAD` on 2026-09-02**
> (rework cycle 1, finding `ISS-06`). Eight were stale: code had moved under them since 2026-08-09
> and the pins had not followed. If a pin below does not resolve to what its row describes, it moved
> **after** 2026-09-02 — that is the difference this line exists to let you tell.

| ID | Limitation | Impact | Trace | Cleared by |
````

## CH-21 Upgrade / migration notes — repair the destroyed list  [ISS-04 High, ISS-L2 Low] (lines 364-372)

**The transcription repair.** FIND spans the orphaned duplicate heading (L364), the whole of the
surviving item 3 (L365-371), and the **first line only** of item 4 s orphaned tail (L372) — that is
the line the restored item-4 heading must attach to. L373-374 are left untouched and re-attach
correctly once the heading is back.

Item 4 s heading sentence is recovered **verbatim** from `git show 52ed66e:docs/09-release-notes.md`
(line 256), the last commit before the v1.1.0 transcription.

Also closes `ISS-L2` in the same op: `TC-EXIT-*` is not a valid `TC-####` id and has no backing case
in Doc 07 v2.4.4 or any suite file, so the "tested as" claim is withdrawn rather than re-pinned.

**PM: diff this op specifically after applying, and read lines either side of the block.** It is the
repair of a boundary failure and it borders the same boundary.

FIND:
````
3. **Exit is always available and does not require us.** Any party can export its complete
3. **Exit is always available and does not require us.** In the contract skeleton, any party can
   export its complete on-chain state at any time and reconstitute it on an independent deployment
   (`NFR-018`, `DES-044`, tested as `TC-EXIT-*`). **"Verifiable" is the right word there and the
   wrong word for the Definition-A (v1) application:** a v1 export is a copy of records held in
   Trumocracy's own store, which nobody outside can yet check without trusting us to report them
   honestly (`DES-097` pending; Doc 14 v2.3.0 §2.12). Exit still works; independent verification of
   what is exported does not, yet.
   previous verifier keeps accepting proofs for 30 days (`SUPERSEDE_GRACE`, `DES-039`, `NFR-017`) so
````
REPLACE WITH:
````
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
````

## CH-22 Internal record — document version (line 453)

Header consistency with CH-01.

FIND:
````
| Document version | 1.1.0 (`Status: In Review`) — `FR-131` compliance rework, 2026-09-02 |
````
REPLACE WITH:
````
| Document version | 1.2.0 (`Status: In Review`) — rework cycle 1 (`FR-131` sweep at v1.1.0; correctness and re-pin pass at v1.2.0), 2026-09-02 |
````

## CH-23 Internal record — Security defects open/closed  [ISS-01, ISS-02] (line 467)

`REL-LIM-03` moves from open to closed. `REL-LIM-12` stays open on its narrowed basis (CH-18).

FIND:
````
| Security / a11y | Audits **not started** (MS-04 contracting target 2026-10-15). `NFR-011` a11y `N/A — not yet measured`. Security defects **open**: `REL-LIM-03`, `REL-LIM-12`, `REL-LIM-15`, `REL-LIM-16`. Security defects **closed in this drop**: `REL-LIM-04`, `REL-LIM-07` (Doc 06 §5) |
````
REPLACE WITH:
````
| Security / a11y | Audits **not started** (MS-04 contracting target 2026-10-15). `NFR-011` a11y `N/A — not yet measured`. Security defects **open**: `REL-LIM-12` (deployment-safety gate unexecuted — narrowed 2026-09-02), `REL-LIM-15`, `REL-LIM-16`, `REL-LIM-18` (five `FR-131` violations in code, routed to the engineer). Security defects **closed**: `REL-LIM-03`, `REL-LIM-04`, `REL-LIM-07` — all three fixed in the same remediation, `c854c0a`, 2026-08-09 (Doc 06 §5 `C-01`–`C-06`); `REL-LIM-03`'s closure was re-verified against `HEAD` on 2026-09-02 after this document had carried it as open in error |
````

## CH-24 §Changelog — write the record, remove the self-blocking MUST  [ISS-09] (lines 474-476)

Resolved by populating. Source: `git log --no-merges -- packages/ apps/` at `HEAD` (`e039ff2`) —
fourteen product-code commits, `48b07e0` (2026-08-08) to `31b6df9` (2026-08-29). `git tag` is empty,
so this is deliberately **not** presented as a tagged release range. The self-blocking MUST is gone
because what it demanded is now done.

FIND:
````
`N/A — not yet produced.` No `CHANGELOG.md` exists in the repository and no Conventional-Commit range
has been cut for release 0.1.0. This section MUST be populated from the commit range before this
document leaves `In Review`.
````
REPLACE WITH:
````
Cut from the repository history at `HEAD` (`e039ff2`, 2026-09-01): every non-merge commit touching
`packages/` or `apps/`, oldest first. **What this is not:** it is not a tagged release range — no
git tag exists and no `CHANGELOG.md` file is maintained — and it is not a claim of verified
delivery; the RTM position is in the internal record above.

**Protocol and contract skeleton — 2026-08-08 → 2026-08-09**

| Commit | Date | Summary |
|---|---|---|
| `48b07e0` | 2026-08-08 | `feat:` architecture decision records + monorepo skeleton + protocol reference implementation |
| `29c059a` | 2026-08-08 | `fix(contracts):` extract the promotion gate so a shebang cannot break the suite |
| `b8cf2ce` | 2026-08-09 | `feat(contracts):` core protocol + security fixes from the test-strategy review |
| `f028ae7` | 2026-08-09 | `feat:` SDD (Doc 03), Coding & UT (Doc 06), indexer, real opcode scanner |
| `747cf84` | 2026-08-09 | `feat:` README, CI workflow, deployment plan with a hard promotion gate |
| `f9364c3` | 2026-08-09 | `fix:` sponsorship exhaustion queues at zero cost, never charges (`FR-061`, `NFR-005`) |
| `52ed66e` | 2026-08-09 | `feat(web):` app router pages, safety-surface tests, i18n type widening |
| `c854c0a` | 2026-08-09 | `fix(contracts):` six criticals and four highs from the independent security scan — **closes `REL-LIM-03`, `REL-LIM-04`, `REL-LIM-07`** (Doc 06 §5 `C-01`–`C-06`) |
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
````

## CH-25 §7 — HALT restated on two independent reasons  [ISS-01, Critical] (lines 511-531)

**This is the op that must not weaken the halt, and does not.** Reason 3 (`REL-LIM-03`) is withdrawn
because the defect does not exist. Reasons 1 and 2 are unchanged in substance and are now stated as
**independently sufficient**, which is stronger than the previous three-reason list in which one was
false. The "verified fixed" paragraph is corrected in the same block, since it named the wrong set.

FIND spans the HALTED preamble, all three numbered reasons, and the verified-fixed paragraph.
**PM: this is a 21-line block — diff it and read the boundary lines.**

FIND:
````
**HALTED.** Release `0.1.0` is not promoted beyond `devnet`/`testnet`, and no production release is
initiated, for the reasons in §0. Specifically, three preconditions are not merely absent but
**failing**:

1. **The RTM (Doc 08) has open Must rows.** The document now exists at v2.7.0 (Approved), so the
   zero-gap check that could not be performed at the first readiness pass now can be — and it
   **fails**: 122 of 138 Must rows are OPEN (Doc 08 §3.1 and gap log). Doc 07 v2.4.4 (Approved)
   supplies a suite result of record — 610 green — which clears the "no result of record" blocker
   but not this one.
2. **Rollback is unproven** — the drill in Doc 10 §8.6 has not been executed (`NFR-020`, Doc 13
   §3.3 item 5).
3. **One Must-blocking defect remains open in code** — `REL-LIM-03`: `RegionRegistry.issueResidency`
   does not authenticate `msg.sender` against `attesterId`, so residency trees can be inflated at
   will. This defeats `NFR-004` in any deployment carrying real political consequence. Two sibling
   defects of the same class (`REL-LIM-04`, `REL-LIM-07`) were fixed in this drop; this one was not,
   and it is the last of the family.

**Verified fixed since the first readiness pass** (re-read against source on 2026-08-09):
`REL-LIM-04` (nullifier burn now access-controlled) and `REL-LIM-07` (open ballots no longer
flag-gated). **Newly found in the same pass:** `REL-LIM-15` (activation still flag-gated),
`REL-LIM-16` (issuer-removal enrolment cliff), `REL-LIM-17` (irrevocable spender set).
````
REPLACE WITH:
````
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

**Verified fixed, re-read against `HEAD` on 2026-09-02:** `REL-LIM-03` (residency issuance now binds
`msg.sender` to the attester's registered `issuer`), `REL-LIM-04` (nullifier burn access-controlled)
and `REL-LIM-07` (open ballots no longer flag-gated) — **all three closed in the same remediation**,
`c854c0a`, 2026-08-09. **Still open from the same readiness pass:** `REL-LIM-15` (activation still
flag-gated), `REL-LIM-16` (issuer-removal enrolment cliff), `REL-LIM-17` (irrevocable spender set).
````

## CH-26 §7 routing and owed items  [ISS-01, ISS-05, ISS-L1, ISS-L3] (lines 533-542)

Removes `REL-LIM-03` from the engineer routing (it is closed); corrects `REL-LIM-18` to five sites;
adds the Doc 10 / Doc 11 cascade and the `REF-##` register as named sre debt; updates the version
reference; and adds the proposals/deliberation drop to the owed refresh.

FIND:
````
Routed back through the project-manager (Ana-Maria Petrescu). Owning roles: **engineer** —
`REL-LIM-03`, `-12`, `-15`, and **`REL-LIM-18`, the three `FR-131`-violating code strings, routed
2026-09-02**; **tester** — the RTM Must-row gaps (Doc 08 §3.1); **architect** — `REL-LIM-05`, `-06`,
`-09`, `-16`; **technical-writer** — Doc 14 publication at Gate 2.

**Owed by the sre, recorded here rather than left implicit:** a release-notes refresh covering the
Definition-A (v1) database-application drop — party creation, the parties directory, join/leave,
membership history and the counting-tier gate — at the **next release cut**. Document version 1.1.0
is an `FR-131` compliance rework of the existing Phase-1 content and deliberately does not re-scope
the release; see the coverage note in §0.
````
REPLACE WITH:
````
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
   and deliberation flow — at the **next release cut**. Version 1.2.0 corrects the v1 position
   wherever this document already asserted it, but deliberately does not re-scope the release; see
   the coverage note in §0.
````

---

## Op index

| Op | Lines (v1.1.0) | Finding | What it does |
|---|---|---|---|
| CH-01 | 5 | header | Version 1.1.0 → 1.2.0 |
| CH-02 | 20 | `ISS-L4` | v1.2.0 history entry added; v1.1.0 entry re-issued wrapped |
| CH-03 | 49–57 | `ISS-L3` | Coverage note: opening clause softened; proposals drop added |
| CH-04 | 70–75 | `ISS-08` | Highlights — Aadhaar-only counting exclusion |
| CH-05 | 95–105 | `ISS-07`, `ISS-08` | Membership bullet — one active party; Aadhaar |
| CH-06 | 184–189 | `ISS-03` | Both issuer Security bullets qualified; pilot rule not in effect |
| CH-07 | 283–294 | `ISS-08` | Two-tier box — Aadhaar-only exclusion |
| CH-08 | 302 | `ISS-07`, `ISS-08` | can/cannot join row |
| CH-09 | 327 | **`ISS-01`** | **`REL-LIM-03` closed and verified** |
| CH-10 | 329 | `ISS-06` | `REL-LIM-05` pin 213 → 261 |
| CH-11 | 331 | `ISS-06` | `REL-LIM-07` pins 262 → 309, 157 → 199 |
| CH-12 | 332 | `ISS-06` | `REL-LIM-15` pin 241 → 293 / 297 |
| CH-13 | 333 | `ISS-06` | `REL-LIM-16` pins 209/176 → 210/177 |
| CH-14 | 335 | `ISS-06` | `REL-LIM-08` pin 266 → 319 (+137) |
| CH-15 | 336 | `ISS-06` + sre | `REL-LIM-09` — add the missing `:53,57` timelock pin |
| CH-16 | 337 | `ISS-06` | `REL-LIM-10` pin 62 → 70 |
| CH-17 | 340 | `ISS-06` | `REL-LIM-13` pin 250-255 → 81-83 / 420 / 343-345 |
| CH-18 | 339 | **`ISS-02`** | `REL-LIM-12` re-based, narrowed, Gate-2 verdict re-justified |
| CH-19 | 342 | `ISS-05` | `REL-LIM-18` — five violating strings, not three |
| CH-20 | 320–323 | `ISS-06` | Dated re-pin line; "none is fixed" corrected |
| CH-21 | 364–372 | **`ISS-04`**, `ISS-L2` | Upgrade list repaired to four clean items; `TC-EXIT-*` withdrawn |
| CH-22 | 453 | header | Internal record — document version 1.2.0 |
| CH-23 | 467 | `ISS-01`, `ISS-02` | Security defects open/closed lists |
| CH-24 | 474–476 | `ISS-09` | Changelog written; self-blocking MUST removed |
| CH-25 | 511–531 | **`ISS-01`** | **§7 HALT restated on two independent reasons** |
| CH-26 | 533–542 | `ISS-01`, `ISS-05`, `ISS-L1`, `ISS-L3` | Routing + named sre debt |
| CH-27 | 420 | `ISS-01` + sre | Entrypoints table — residual `REL-LIM-03` pointer replaced with the real access control |

## Post-transcription checks

1. **`git diff` and read the boundary lines of CH-21 and CH-25.** These are the two multi-line
   list/block ops, and CH-21 repairs a boundary failure of exactly this kind.
2. **Read §Upgrade/migration notes end to end.** It must show **four** numbered items, item 4
   reading "Circuit changes never disenfranchise in-flight actions" and running through to
   "See `REL-LIM-09` for the cost of that choice." No duplicate `3.` heading, no orphan fragment.
3. `grep -n "REL-LIM-03" docs/09-release-notes.md` — every hit must be a **closure** or the recorded
   correction. No hit may present it as open, as a HALT reason, or as routed to anyone.
4. `grep -n "TC-EXIT" docs/09-release-notes.md` — the only surviving hit is the withdrawal note in
   item 3.
5. Confirm §0 still reads "**This release has NOT been approved and MUST NOT be promoted to
   production**", §7 still opens **HALTED**, and "Approvals (Gate 2): **None.**" is intact.
6. Confirm the header reads `Version:       1.2.0`, `Status:        In Review`,
   `Last updated:  2026-09-02`, columns aligned.
7. `grep -n "Three shipped code strings" docs/09-release-notes.md` — must return nothing.
8. Re-run the `FR-131` word sweep the cycle-1 report ran, to confirm this rework did not reintroduce
   anything: every hit for `anonymous`, `private`, `receipt-free`, `secure` must remain a negation,
   the named v2 capability, a cannot-column entry, a flag or copy-key identifier, an accurately
   quoted defective code string, or a restatement of the ban.

## CH-27 Developer/API entrypoints — residual REL-LIM-03 pointer  [ISS-01, sre addition] (line 420)

**Found by me during the post-op simulation of this spec, not listed in the cycle-1 report.** The
entrypoints table still routes the reader to `REL-LIM-03` from the `issueResidency` row. Once CH-09
closes that row, the pointer sends a reader looking for an open defect at an entrypoint that is
now correctly guarded. The Flag-gate column value "none" is accurate — `issueResidency` carries no
**feature-flag** gate — but it needs to say what the access control actually is instead.

FIND:
````
| `RegionRegistry.issueResidency(regionId, attesterId, leaf)` | — | — | none (see `REL-LIM-03`) |
````
REPLACE WITH:
````
| `RegionRegistry.issueResidency(regionId, attesterId, leaf)` | — | — | no flag gate; caller-authenticated — reverts unless `msg.sender` is the authorised attester's registered `issuer` (`RegionRegistry.sol:215`) |
````
