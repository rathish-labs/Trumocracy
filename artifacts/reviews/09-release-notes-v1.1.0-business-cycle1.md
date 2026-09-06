# Document Review Report — Doc 09 Release Notes v1.1.0 (business, cycle 1)

> Produced by the shared **document-review** skill. The reviewer **scores and lists issues only —
> it never edits the reviewed document**. All rework returns to the **owning role (sre, Chen Wei)**.
> Assignment of record: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-02-DOC-09.md`
> (PM Ana-Maria Petrescu, 2026-09-02 — reviewer: **tester (Ji-woo Park)**, mode **business**,
> recorded BEFORE dispatch per AL-CANDIDATE-3). The reviewer owns neither Doc 09 nor its outcome.

```
Reviewed document: 09-release-notes.md
Document version: 1.1.0
Review mode: business
Reviewer role: tester
Score: 77%
Critical: 1
High: 3
Medium: 5
Low: 4
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 09 v1.1.0 was read end to end and every changed claim was verified against **shipped source at
`HEAD`**, not against changelogs. **The `FR-131` sweep itself succeeded.** A document-wide sweep for
`anonymous · private · privacy · receipt-free · secure · anonymity · pseudonymous · tamper ·
verifiable · proven · never known` found **zero surviving affirmative uses about v1 voting
behaviour**; every hit is a negation, the named v2 capability, a cannot-column entry, a flag/copy-key
identifier, or an accurately quoted defective code string. The three fact-corrections were verified
true (Docs 07 v2.4.4 / 08 v2.7.0 / 06 v2.4.3 / 14 v2.3.0 all exist at the stated versions and
statuses; `node hooks/run_gates.cjs --audit` confirms passing reports for Docs 01–08, 13, 14 and none
for 09–12; the 138/16/122 and 610-green figures reconcile). **The HALT survives intact** — §0, §7,
the internal record and the Approvals row are unweakened.

The document nevertheless **FAILS**, for a reason outside the sweep's own scope. The version's stated
method is *"every corrected claim is pinned to shipped source rather than to a changelog"*, and its
§7 routing paragraph — **rewritten and dated 2026-09-02 in this version** — re-routes `REL-LIM-03` to
the engineer. `REL-LIM-03` **does not exist in the shipped code**:
`RegionRegistry.issueResidency` **does** bind the caller to the attester
(`packages/contracts/src/core/RegionRegistry.sol:215` — `|| att.issuer != msg.sender`), the check
landed in commit `c854c0a` (2026-08-09), and **Doc 06 v2.4.3 (Approved) §5 records it as defect
`C-01`, Critical, fixed** (`SEC-C01`). That false claim is one of the **three named reasons for the
HALT**. A second Gate-2 blocker, `REL-LIM-12`, is falsified the same way. **The correction does not
weaken the halt** — reasons 1 (RTM: 122 of 138 Must rows OPEN) and 2 (rollback undrilled) stand on
their own — but a release-decision document that publishes a live Critical Sybil hole that was closed
three weeks ago, and routes an engineer to fix it, cannot be Approved.

**Transcription residue is present and confirmed by diff** (`ISS-04`): the anchored FIND/REPLACE
spanned an item boundary in §Upgrade/migration notes, leaving a duplicated mid-sentence-truncated
line and destroying the whole of item 4.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`77%`)
- Critical = 0? **no** (1) · High = 0? **no** (3) · Medium = 0? **no** (5)
- **Verdict:** `FAIL` — route to the **sre** for **v1.2.0**.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1** Outcome & problem clarity | 20 | 90 | 18.00 | The release decision, the coverage boundary and the "what this release does not do" section are exceptionally clear and unsoftened. Deduction: the Aadhaar-only participation exclusion — the single largest limitation on *who may be counted* — is absent (`ISS-08`). |
| **B2** Completeness | 15 | 72 | 10.80 | A whole upgrade-note item destroyed (`ISS-04`); `REL-LIM-18` undercounts its own violation set (`ISS-05`); §Changelog is an unfilled placeholder carrying a MUST that forbids this document's own approval (`ISS-09`). |
| **B3** Traceability & IDs | 20 | 75 | 15.00 | ID discipline is dense and correct; named-owner rule honoured; all Doc/version pins (06/07/08/14) verified. Deduction: **nine** stale or wrong source pins in the `REL-LIM` register (`ISS-06`, plus the pins subsumed in `ISS-01`/`ISS-02`), `TC-EXIT-*` off-scheme and unbacked (`ISS-L2`), all seven `REF-##` citations unresolvable (`ISS-L1`). |
| **B4** Correctness & consistency | 15 | 55 | 8.25 | One Critical and two High factual falsifications against shipped code and against Doc 14 v2.3.0 (Approved) (`ISS-01`, `ISS-02`, `ISS-03`), plus a Medium contradiction of Doc 14 §2.3 (`ISS-07`). Offset upward by the fully clean `FR-131` sweep and correct fact-corrections. |
| **B5** Testability | 15 | 78 | 11.70 | Release-notes analogues of the Gherkin/MoSCoW criterion are present and strong: claims pinned to source, explicit out-of-scope (§0 coverage note, "Requirements explicitly not delivered"), a disclosed-limitation register, rollback limits stated. Deduction: the pins that make claims checkable are precisely what failed verification in four rows. |
| **B6** Convention compliance | 15 | 88 | 13.20 | RFC 2119 correct; ISO-8601 throughout; named-owner rule honoured; Keep-a-Changelog structure held; **`FR-131` word ban respected document-wide**. Deduction: `TC-EXIT-*` breaks the `TC-####` scheme; the duplicated line and the ~1,000-word unwrapped history paragraph break house style. |
| **Total** | **100** | — | **76.95 → 77%** | — |

## 4. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-01** | **Critical** | B4 | §7 reason 3 (L522–526); `REL-LIM-03` row (L327); Internal record "Security defects **open**" (L467); §7 routing paragraph **rewritten and dated 2026-09-02** (L533–536) | **The document's sole named open Must-blocking code defect does not exist in the shipped code.** Doc 09 states `RegionRegistry.issueResidency` "does not bind the caller to the attester … never checks that `msg.sender` is that attester — any address may pass an authorised `attesterId` and insert residency leaves." Shipped `packages/contracts/src/core/RegionRegistry.sol:211–224` guards at **line 215**: `if (!attesterAuthorised[regionId][attesterId] \|\| !att.active \|\| att.issuer != msg.sender) revert NotAuthorisedAttester(...)`. `issuer` is written only by `registerAttester`, which is `onlyTimelock` (L183), so it cannot be self-set. `git log -S "att.issuer != msg.sender"` shows the check added in **`c854c0a` (2026-08-09, "fix(contracts): six criticals and four highs from the independent security scan")**, and **Doc 06 v2.4.3 (Approved) §5 defect `C-01` (Critical, `SEC-C01`)** records the identical fix: *"An attester is an account: `registerAttester` records an `issuer` address and `issueResidency` checks `msg.sender`."* Doc 09's sentence *"Two sibling defects of the same class (`REL-LIM-04`, `REL-LIM-07`) were fixed in this drop; this one was not, and it is the last of the family"* is **inverted** — all three were closed in the same remediation. v1.1.0 re-asserted the routing on **2026-09-02** without re-verifying, against its own stated method. | Re-verify against `HEAD`. Restate as `~~REL-LIM-03~~ — **FIXED in this drop**` in the style already used for `REL-LIM-04`/`-07`, pinned to `RegionRegistry.sol:215` and cross-referenced to Doc 06 §5 `C-01` / `SEC-C01` / commit `c854c0a`. Remove it from §7 reason 3, from the internal record's open list, and from the 2026-09-02 engineer routing. **Do NOT weaken the halt** — restate §7 on reasons 1 (RTM 122/138 OPEN) and 2 (rollback undrilled), which stand independently. **Cascade (same sre pass):** `docs/10-deployment-runbook.md:137` and `:378`, and `docs/11-operations-runbook.md:281` and `:993`, carry the same false claim citing Doc 09 as source. |
| **ISS-02** | **High** | B4 | `REL-LIM-12` row (L339), marked "**Blocks Gate 2**"; Internal record "Security defects **open**" (L467) | **A second false Gate-2 blocker.** Every supporting fact in the row is falsified: (a) *"`packages/contracts/script/` contains only `compile.mjs`"* — the directory also contains **`deploy.mjs`** (added `747cf84`, refactored `29c059a`); (b) *"the deployment order in Doc 10 §5 is derived from `test/fixture.mjs`"* — `packages/contracts/src/promotion-gate.mjs` exports frozen `DEPLOY_ORDER` (L23) and `WIRING_STEPS` (L46) as the source of truth, printed by `formatDeploymentPlan()` (L157); (c) *"the deployment-safety gate of Doc 10 §3.2 exists as a test assertion (`adversarial.test.mjs:320-329`), not as a promotion job"* — it exists as **`assertSafeToPromote()` (`promotion-gate.mjs:86`)**, which `throw`s `UnsafeDeploymentError` on an `IS_INSECURE_MOCK` verifier, a missing `zkeyHash` or a missing ceremony URI (L144, L167–168); and the pin `adversarial.test.mjs:320-329` points at **`UT-0334`** (population-deflation), not at any deployment-safety assertion. | Re-base the row on `HEAD`. The residual truth — `deploy.mjs` *prints* the plan and does not *execute* a deployment, and `assertSafeToPromote` is not yet demonstrated as a wired CI promotion job — may keep the row open, but must be stated as that narrower claim with correct pins (`script/deploy.mjs`, `src/promotion-gate.mjs:86`), and the "Blocks Gate 2" verdict re-justified on the narrowed basis. |
| **ISS-03** | **High** | B4 | §Security bullet "At least two issuers, at least one not run by a state" (L188–189) | **Unqualified anti-capture guarantee contradicting an Approved public-facing document.** Doc 14 v2.3.0 (Approved) §1.2 states the opposite for the shipping pilot: *"In this first pilot region, the only accepted government ID is **Aadhaar**"* … *"the standing rule is at least two independent ways to check someone is real, with at least one of them not run by a government … **That rule is not in effect in this pilot.** This pilot deploys one government-run rail only."* `PersonhoodRegistry.issuerSetValid()` (L177, enforced L210) is real **contract-skeleton** code, so the claim is true of the skeleton — but v1.1.0's own §0 coverage note commits the document to *"Where they differ, this version says which one it is describing."* Three of the seven Security bullets received that qualifier in this version; this one and *"A compromised issuer is contained"* did not. This is a BR-012 anti-capture claim on which a citizen in a repressive jurisdiction could rely. | Qualify as a contract-skeleton property and state the v1 pilot posture per Doc 14 §1.2 (Aadhaar-only, one government-run rail, ADR-003 rule not in effect), in the same pattern already applied to the "Anonymity-set floor" and "One person, one credential" bullets. Apply the same test to *"A compromised issuer is contained, not weaponised"* (L184–187). |
| **ISS-04** | **High** | B2 | §Upgrade / migration notes, **L364–374** | **Transcription residue — confirmed by `git diff`.** The anchored FIND/REPLACE spanned the item-3 body *and* the item-4 heading; the replacement re-emitted item 3 but dropped item 4. Result: **(a)** L364 is a duplicated, mid-sentence-truncated repeat of the item-3 heading — `3. **Exit is always available and does not require us.** Any party can export its complete` — with no continuation, immediately followed by a second `3.` at L365; **(b)** the whole of item 4, present in v1.0.1 (`git show HEAD:docs/09-release-notes.md`) as *"**4. Circuit changes never disenfranchise in-flight actions.** When a circuit is superseded, the …"*, is **gone**, leaving L372–374 as an orphaned tail glued onto item 3 and reading *"… independent verification of what is exported does not, yet. / previous verifier keeps accepting proofs for 30 days (`SUPERSEDE_GRACE`, `DES-039`, `NFR-017`) …"* — an unattributable fragment. A substantive citizen-protection commitment cross-referenced by `REL-LIM-09` has lost its statement. | Delete the orphaned L364. Restore item 4's heading sentence verbatim from v1.0.1 (`4. **Circuit changes never disenfranchise in-flight actions.** When a circuit is superseded, the`) so L372–374 re-attach to it. Re-read the whole §Upgrade/migration notes list end to end after the edit. |
| **ISS-05** | **Medium** | B2 / B3 | `REL-LIM-18` row (L342), Limitation and Trace columns | **The new FR-131 code-violation register undercounts and mis-pins its own evidence.** The three cited sites verify **exactly**: `packages/protocol/src/flags.js:44` (*"votes are anonymous but NOT receipt-free — the UI must say so"*); `packages/contracts/src/core/Governor.sol:25,28`; `apps/web/src/i18n/en.ts:400–405` (`notReceiptFreeTitle` = *"Your vote is **private**, but it is not yet coercion-proof"*, `notReceiptFreeBody` = *"Nobody can see that a vote was yours"*). But: **(a)** `packages/sdk/src/client.js:455` — *"which is why a vote is **anonymous** even though it is public"* — is a **fourth** shipped string asserting the retired framing; it appears on the sre's own routing list in the anchoring spec but **not in this row**, so the document of record does not route it to the engineer; **(b)** `apps/web/src/components/ReceiptFreedomBanner.tsx:6–10` is cited in Trace as evidence of *rendering*, but L6–10 are the file's doc comment — itself a **fifth** instance (*"a vote is **anonymous but not receipt-free**"*, *"nobody can see that a vote was yours"*); the render site is ~L40–45. | Correct "Three" to the verified count; add `packages/sdk/src/client.js:455` as a listed site; re-describe the `ReceiptFreedomBanner.tsx:6–10` pin as a violating comment and pin the render separately (~L40–45). Re-run the sweep across `packages/`, `apps/` before fixing the number. |
| **ISS-06** | **Medium** | B3 | `REL-LIM-05`, `-07`, `-08`, `-10`, `-13`, `-15`, `-16` Trace columns (L329–337) | **Stale source pins across the limitations register**, while §7 (L528) asserts these were *"re-read against source"*. Verified at `HEAD`: `REL-LIM-05` `RegionRegistry.sol:213` → that line is inside `issueResidency`; `submitPopulation` (`onlyTimelock`) is at **L261**. `REL-LIM-07` `Governor.sol:262` ("explicit NOTE") → L262 is a struct-field assignment; the NOTE is at **L309**; `Governor.sol:157` → L157 is `requiredTier` NatSpec. `REL-LIM-08` `Governor.sol:266` → struct-field assignment; `revert MaciPathRequired()` is at **L319** (error declared L137). `REL-LIM-13` `Governor.sol:250-255` → struct-field assignments. `REL-LIM-15` `PartyRegistry.sol:241` → that is `revert AnonymitySetTooSmall` inside `endorse`; `activate` is at **L293** and its `flags.requireEnabled(FLAG_PETITIONS)` at **L297**. `REL-LIM-16` `PersonhoodRegistry.sol:209, :176` → off by one (`issuerSetValid()` declared **L177**, fail-closed guard **L210**). `REL-LIM-10` `fixture.mjs:62` → L62 is inside `ALL_FLAGS`; `PHASE1_FLAGS` is at **L70**. *(The substance of each of these seven rows was independently re-verified and holds; only the pins are wrong. `REL-LIM-03` and `-12` pins are subsumed in `ISS-01`/`ISS-02`. Verified **correct**: `Governor.sol:25-28`, `flags.js:44`, `en.ts:400-405`, `ReceiptFreedomBanner.tsx:6-10`, `PersonhoodRegistry.sol:259-262` and `:269-288`, `Party.sol:187`, `PartyRegistry.sol:238`, `VerifierRegistry.sol:33,65`.)* | Re-pin every `REL-LIM` Trace entry against `HEAD` and state the commit or date of the re-pin, so the next reader can tell a stale pin from a moved line. |
| **ISS-07** | **Medium** | B4 | Can/cannot table, "can" column row 6 (L302); §Added membership bullet (L95–98) | **"Join and leave any party, freely and unconditionally" contradicts Doc 14 v2.3.0 (Approved) §2.3 and the shipped v1 app.** Doc 14 §2.3 states plainly: *"**One party at a time.** You can belong to one party at a time … If you try to join while you are still an active member elsewhere, the app tells you which party is blocking it."* Shipped copy confirms it: `apps/web/src/i18n/en.ts:135` (*"You can belong to one party at a time"*) and `:137` (*"You are already a member of ${name} …"*). The §0 coverage note does not shield this row: the row itself cites `FR-122` and its "cannot" cell cites `FR-123`/`FR-132(b)`, so it is already describing the v1 application. | Qualify: unconditional in the contract-skeleton `Party.join`; **one active party at a time** in the v1 application (Doc 14 §2.3; `en.ts:135,137`). Apply the same qualifier to the §Added membership bullet. |
| **ISS-08** | **Medium** | B1 / B2 | §Highlights (L71–72); §Added membership bullet (L99–101); two-tier read-this-first box (L283–286); can/cannot row (L302) | **The Aadhaar-only pilot exclusion is absent from every counting-tier claim.** All four places present the counting gate as a neutral universal step ("each require a government-ID check first"). Doc 14 v2.3.0 (Approved) §1.2 discloses the real boundary and explicitly refuses to hide it: *"**If you do not hold Aadhaar, you cannot yet pass the counting-tier check in this pilot.** … This is a real limitation, and we are not going to hide it."* Having elected to describe the v1 counting tier in four places, Doc 09 owes the same disclosure parity that was the whole purpose of this rework. Partially mitigated by the accurate note that the check is not switched on yet (L293–294), but that covers only the present, not the disclosed future the rest of the section is written in. | Add the Aadhaar-only pilot limitation, forward-framed in the same pattern already used for the voting disclosure, at the two-tier box and the Highlights counting sentence, citing Doc 14 §1.2. Relates to `ISS-03`. |
| **ISS-09** | **Medium** | B2 | §Changelog (this release), L474–476 | **An unfilled required section carrying a MUST that forbids this document's own approval.** The section reads: *"`N/A — not yet produced.` No `CHANGELOG.md` exists … This section MUST be populated from the commit range before this document leaves `In Review`."* A PASS instructs the owner to set `Status: Approved` — the transition the document's own normative sentence prohibits. B2 penalises placeholders in required sections. *(Pre-existing from v1.0.1 and untouched by v1.1.0; raised because it mechanically blocks the status transition this review gates.)* | Populate from the Conventional-Commit range for release `0.1.0`, **or** record an explicit, dated scope carve-out deferring it alongside the §7 release-notes refresh and soften the self-imposed MUST accordingly. |
| **ISS-L1** | Low | B3 | `REL-LIM-03`, `-05`, `-06`, `-08`, `-09`, `-10`, `-15`, `-16`, `-17` "Cleared by" column | All seven distinct `REF-##` citations (`REF-02`, `-04`…`-10`) are unresolvable: `docs/refine-log.md` is the unfilled template with **zero** entries in its register (verified). | **PM-accepted before this review** and disclosed by the sre in its own spec; sre debt owed at the next Operate cycle. Recorded, **not scored against the pass bar**. |
| **ISS-L2** | Low | B3 / B6 | §Upgrade/migration item 3 (L367) | `TC-EXIT-*` is not a valid ID under the CLAUDE.md scheme (`TC-####`), and **no such case exists** in Doc 07 v2.4.4 or in any suite file — the "tested as" claim has no backing. *(Stated authoritatively: the reviewer owns Doc 07.)* | Suite-wide legacy convention (also in Docs 04, 10, 11, 12, 13 and ADR-010), so not unique to this rework — fix here by citing real `TC-####` anchors or dropping the claim, and route the convention itself to the same debt bucket as `ISS-L1`. |
| **ISS-L3** | Low | B1 | §0 coverage note, opening clause (L50–52) | *"It **does not yet cover** the Definition-A (v1) database application …"* overstates the boundary: the document then makes roughly a dozen substantive v1-application statements (Highlights, membership bullet, `REL-LIM-02`, the two-tier box, the can/cannot table, the Security "chain only" paragraph). The note's later sentences explain the real position correctly. | Re-word the opening clause to what the note actually means: the version **does not re-scope the release**, but **does** correct v1 claims wherever the pre-existing text overclaimed. |
| **ISS-L4** | Low | B6 | Document history, L20 | The v1.1.0 history entry is a single unwrapped ~1,000-word paragraph, against the wrapped house style used everywhere else in the document (and the Doc 14 `ISS-C5-01` precedent). | Wrap and break into the numbered violation-class structure it already describes. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. What was verified clean (recorded so cycle 2 need not re-litigate it)

1. **`FR-131` word ban — document-wide sweep, PASS.** Swept `anonymous · anonymity · private ·
   privacy · receipt-free · secure · security · pseudonym · tamper · verifiab · proven · never
   known`. **Zero surviving affirmative uses about v1 voting behaviour.** Every hit is one of:
   a negation (L78, 181, 203–222, 228, 304, 325); the named v2 capability
   ("Definition-B (v2) privacy layer", "cryptographic private ballot", L234–235, 244); a
   cannot-column entry (L300, 304, 315); a flag or copy-key identifier (`private_endorsement`,
   `parties.joinPrivate`); an accurately quoted defective code string (L252, `REL-LIM-18`); or a
   restatement of the ban itself (L256). The `### Security` heading is a section label, not a
   description of v1 voting behaviour — compliant.
2. **The three `FR-131` violation classes.** (1) Anonymity/privacy overclaims: the
   "What this release does not do" section matches Doc 14 v2.3.0 §2.6 clause-for-clause, correctly
   future-framed on the true premise that no ballot screen ships (`BallotStep` in
   `ProposalsAndDebate.tsx` is FR-123 ballot **admission** only, verified). (2) Tamper-evidence:
   "anyone can check the record" (L130), the re-compute row (L306) and "complete verifiable state"
   (L367) are all now correctly split skeleton-vs-v1 and consistent with Doc 14 §2.12/§4.3.
   (3) Two-tier: present and accurate at Highlights, the membership bullet, the read-this-first box
   and the can/cannot table, with `FR-122`/`FR-123`/`FR-131`(d)/`FR-132`(b) cited correctly.
3. **Shipped-code pins for the changed text.** `parties.joinPrivate` (`en.ts:123`),
   `debate.trailV1Note` (`en.ts:281`), `parties.openTierNotice*` (`en.ts:156–167`, rendered
   non-dismissably **before** the refusal at `PartyMembership.tsx:249–263`), `MockVerifier`
   (`IS_INSECURE_MOCK = true`, `verifyProof` returns `accept`), append-only membership history
   (`party-creation.js:45,123,133`), `Party.sol:187`, `PartyRegistry.sol:238`,
   `PersonhoodRegistry.sol:259-262` — **all resolve and say what the document says they say.**
4. **The false-fact corrections are true.** `docs/07-test-cases-suites.md` v2.4.4 Approved (610
   green); `docs/08-traceability-matrix.md` v2.7.0 Approved (138 Must / 16 COMPLETE / 122 OPEN —
   independently reconciled by `node hooks/run_gates.cjs --audit`, both signals agree);
   `docs/06-coding-and-ut.md` v2.4.3 Approved (PASS 100%); `docs/14-user-guide.md` v2.3.0 Approved
   (PASS 96%). `--audit` confirms passing reports for **Docs 01–08, 13, 14** and **none for 09–12**.
5. **The halt is intact and unweakened.** §0 header line, all nine precondition rows, §7 **HALTED**,
   the internal record Gate row, and "Approvals (Gate 2): **None.**" all survive. Moving two rows
   from "Not met" to "Partially met" is accurate and is each time qualified against a Gate-2 pass.
   **No softening found.**
6. **Scope discipline (review dimension 6).** The §0 coverage note is honest and materially clear:
   it names the deferred drop, points at the §7 open item, and warns the reader that several
   properties are skeleton-only. Only its opening clause overstates (`ISS-L3`).
7. **Internal-record flag lists** match `packages/protocol/src/flags.js` prod defaults exactly
   (ON: `petitions`, `party_governance`, `l1_force_inclusion`, `sponsored_gas`; OFF: the other
   seven).

## 6. Routing instruction (to the owning role)

**FAIL → route to the sre (Chen Wei), the owning role, for rework into a new version.** The rework
MUST produce **v1.2.0** (a Critical + three Highs require at least a minor bump) with
`Status: In Review`, after which this loop re-reviews as **cycle 2 of 5**.

Fix order, highest leverage first:

1. **`ISS-01`** — re-verify `REL-LIM-03` against `HEAD` and Doc 06 §5 `C-01`; close the row; strip it
   from §7's HALT reasons, the internal-record open list and the 2026-09-02 engineer routing.
   **Restate §7 on reasons 1 and 2 — the halt must not weaken.** Cascade the same correction into
   Docs 10 and 11 in the same pass.
2. **`ISS-02`** — re-base `REL-LIM-12` on `script/deploy.mjs` and `src/promotion-gate.mjs`.
3. **`ISS-04`** — repair the destroyed §Upgrade/migration item 4 and delete the orphan line, then
   re-read that section end to end. **General note on the house transcription pattern:** an anchored
   FIND/REPLACE whose anchor spans a list-item boundary will silently eat the next item's heading —
   after any mechanical transcription, diff the result and read the boundary lines.
4. **`ISS-03`, `ISS-07`, `ISS-08`** — close the three remaining Doc 14 v2.3.0 consistency gaps
   (issuer independence, one-party-at-a-time, Aadhaar-only). These are the same sweep the version
   already ran, applied to the sections it missed.
5. **`ISS-05`, `ISS-06`, `ISS-09`** — correct the `REL-LIM-18` count, re-pin the register against
   `HEAD`, and resolve the §Changelog MUST.

**Not required for the pass bar:** `ISS-L1`–`ISS-L4`. `ISS-L1` is PM-accepted and disclosed; the
others are cosmetic or suite-wide legacy.

**Independence note.** This report scores and lists issues only; the reviewer made no edit to
`docs/09-release-notes.md` or to any other product or owned document. This is a review-loop verdict
only — it is **not** a Gate-2 sign-off, which remains with `reviewer-qa` and the human approver.
