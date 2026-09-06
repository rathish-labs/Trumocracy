# Document Review Report — Doc 09 Release Notes v1.2.0 (business, cycle 2)

> Produced by the shared **document-review** skill. The reviewer **scores and lists issues only —
> it never edits the reviewed document**; the **owning role (sre, Chen Wei)** does every rework.
> Assignment of record: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-02-DOC-09.md`
> (PM Ana-Maria Petrescu, 2026-09-02 — reviewer: **tester (Ji-woo Park)**, mode **business**,
> recorded BEFORE dispatch per AL-CANDIDATE-3). The reviewer owns neither Doc 09 nor its outcome.
> Prior cycle: `artifacts/reviews/09-release-notes-v1.1.0-business-cycle1.md` (FAIL 77%).

```
Reviewed document: 09-release-notes.md
Document version: 1.2.0
Review mode: business
Reviewer role: tester
Score: 89%
Critical: 0
High: 1
Medium: 2
Low: 2
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

v1.2.0 is a substantial, largely successful rework. **All thirteen cycle-1 findings were addressed
and the four that mattered most are genuinely closed, verified against shipped source rather than
against the sre's spec.** The Critical is gone and was fixed in the strongest available way — the
false `REL-LIM-03` claim is withdrawn with a *correction of record* rather than quietly deleted, and
§7 is restated on **two independently sufficient** reasons so the HALT no longer leans on any code
defect at all. `REL-LIM-12`'s narrowed ground was independently tested and holds. The transcription
damage is repaired. The changelog was **populated, not deferred**, and its fourteen commits match
`git log --no-merges -- packages/ apps/` **exactly**, one for one. The `FR-131` word sweep is still
clean document-wide. Trajectory: **77% → 89%.**

It nevertheless **FAILS**, on one High and two Mediums — and the High is an error the rework
*introduced*. In tidying the `REL-LIM-03` correction into a single narrative, v1.2.0 asserts in
**five places** that `REL-LIM-03`, `-04` and `-07` were "**all three closed in the same
remediation**, `c854c0a`". That is true of `REL-LIM-03` only: `git log -S` shows both other fixes
landed in **`b8cf2ce`**. The claim is made under the banner *"Verified fixed, re-read against `HEAD`
on 2026-09-02"* — the same "asserted verification that was not performed" failure mode that produced
cycle 1's Critical, reproduced at lower severity while fixing it. Two Mediums follow: the
customer-facing bullet at L363 still says **three** `FR-131`-violating code strings where the rest of
the document now says **five**, and `REL-LIM-18`'s watch-item note asserts `PrivacyStatus.tsx` is
"`FR-131`-compliant by construction" when it renders `title: 'Verified — private'`.

None of this touches the release decision. **The HALT survives intact and is better argued than in
any prior version.**

## 2. Pass-bar check

- Score ≥ 95%? **no** (`89%`)
- Critical = 0? **yes** · High = 0? **no** (1) · Medium = 0? **no** (2)
- **Verdict:** `FAIL` — route to the **sre** for **v1.3.0**, then cycle 3.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1** Outcome & problem clarity | 20 | 96 | 19.20 | Materially stronger. The Aadhaar exclusion is now stated at all four counting-tier claims; §7 restates the halt on two independently sufficient reasons and says explicitly that it "does not depend on any code defect"; the coverage note is precise about what the version does and does not do. |
| **B2** Completeness | 15 | 88 | 13.20 | Migration list restored to four clean items; changelog populated and verified complete; `REL-LIM-18` at five sites. Deductions: `ISS-02` (L363 still says "three") and `ISS-03` (the `PrivacyStatus` justification is false in its load-bearing half). |
| **B3** Traceability & IDs | 20 | 80 | 16.00 | I re-verified roughly twenty-five source pins at `HEAD`; **all resolve correctly** bar one label. Deductions: `ISS-01` (the `c854c0a` misattribution across five sites, plus a `Doc 06 §5 C-01–C-06` pointer wrong for two of the three rows it covers), `ISS-L1` (`:167-168` mislabelled), `ISS-L2` (`REF-##` register still empty — PM-accepted, held at Low). |
| **B4** Correctness & consistency | 15 | 78 | 11.70 | Cycle 1's Critical and all three Highs are genuinely and verifiably closed. Against that: one newly introduced High factual error, one internal contradiction, one false compliance assertion. |
| **B5** Testability | 15 | 94 | 14.10 | Claims are pinned and overwhelmingly resolve. The withdrawn `TC-EXIT-*` is handled honestly ("Test coverage: none of record"). `REL-LIM-12` now carries a specific, checkable clearing condition. `UT-0600`–`UT-0612` verified to exist exactly as cited. |
| **B6** Convention compliance | 15 | 96 | 14.40 | RFC 2119, ISO-8601, named-owner rule, Keep a Changelog (now with a real changelog) all hold. **`FR-131` word ban still clean document-wide.** History entries wrapped. **No transcription residue** — I re-ran the duplicate-line and marker scans and diff-checked the repaired boundary. |
| **Total** | **100** | — | **88.6 → 89%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| **ISS-01** | **High** | B3 / B4 | §Known issues preamble (L440–443); `REL-LIM-03` row (L454); Internal record "Security defects **closed**" (L596); §7 "Verified fixed" (L700–703); §Changelog `c854c0a` row (L619) | **A false source-pinned attribution, newly introduced by v1.2.0 in five places, asserted under an explicit re-verification claim.** The document states that `REL-LIM-03`, `REL-LIM-04` and `REL-LIM-07` were "**all three closed in the same remediation**, `c854c0a`, 2026-08-09". Verified at `HEAD`: only `REL-LIM-03` was. `git log -S "authorisedSpender[msg.sender]" -- PersonhoodRegistry.sol` → **`b8cf2ce`**; `git log -S "deliberately NOT gated on FLAG_GOVERNANCE" -- Governor.sol` → **`b8cf2ce`**. `c854c0a` touches `PersonhoodRegistry.sol` by four lines and supplies `H-01` (`setSpenderAuthoriser` set-once), the *completion* of the spender fix, not its origin — which Doc 06's own history records (L273: *"spendNullifier fix was incomplete at v1.0.0"*; L285: *"§5 reported defect 1 as fixed when the fix was bypassable one level up (H-01)"*). **Second, the companion pointer `Doc 06 §5 C-01–C-06` is wrong for two of the three rows it covers:** `§5`'s `C-##` table holds `C-01`–`C-04`, `C-06` (issueResidency, vote signals, circuit signals, `surgeActive`, tier binding); `REL-LIM-04` is `§5` **numbered defect 1** and `REL-LIM-07` is `§5` **numbered defect 4** — a second, separate table in the same section, which the two rows' own Trace cells still cite correctly. The rework tidied a correction narrative into a claim it had not checked, in the version whose §7 says *"Verified fixed, re-read against `HEAD` on 2026-09-02."* | At all five sites, attribute each closure to its own commit: `REL-LIM-03` → `c854c0a` (Doc 06 §5 `C-01` / `SEC-C01`); `REL-LIM-04` → `b8cf2ce` (Doc 06 §5 defect 1, completed by `C-01`'s sibling `H-01` in `c854c0a`); `REL-LIM-07` → `b8cf2ce` (Doc 06 §5 defect 4). Replace "all three closed in the same remediation" with what is true — all three are closed, in two commits one day apart. Correct the `Doc 06 §5 C-01–C-06` pointer, or drop it in favour of the per-row citations that are already right. Correct the `c854c0a` changelog row so it claims only `REL-LIM-03`. |
| **ISS-02** | **Medium** | B2 / B4 | §"What this release does not do", second bullet under "Until the Definition-B privacy layer ships" (**L363–366**) | **The rework's headline correction was not applied to the customer-facing sentence that states it.** L363 still reads *"**Three** shipped code strings still assert the retired 'votes are anonymous but not receipt-free' framing … disclosed as `REL-LIM-18`"*, while **four** other places now say five: `REL-LIM-18` itself (L469, *"Corrected 2026-09-02 from 'three' after a full re-sweep"*), the internal record (L596), §7 (L686) and the §7 routing (L707). A reader of the customer-facing section is given the retired number, pointed at a register that contradicts it. This is the same class Doc 07 v2.4.4 recorded against itself — *"the fourth and most load-bearing place was missed"* — and here the missed place is the only one a citizen reads. | Change "Three" to "Five" at L363 and add the two new sites' character (one developer-facing SDK comment, one customer-facing component comment) if the sentence is to keep summarising them. Then grep the document for the number before publishing: `grep -n "three\|Three\|five\|Five" docs/09-release-notes.md`. |
| **ISS-03** | **Medium** | B2 / B4 | `REL-LIM-18` row, *"Watch item, not counted here"* clause (**L469**, final cell) | **The published justification for excluding `PrivacyStatus.tsx` is false in its load-bearing half.** The note asserts the component *"is `FR-131`-compliant by construction (backing-aware clause 7, fail-honest v1 default) and is rendered nowhere yet"*. **The "rendered nowhere" half is verified true** — `packages/ui/src/PrivacyStatus.tsx` is exported at `packages/ui/src/index.ts:12` but every consuming surface carries an explicit non-render comment (`apps/web/src/app/parties/page.tsx:19`, `app/petitions/new/page.tsx:13,134`, `app/proposals/page.tsx:22`, `components/PartyMembership.tsx:26`, `components/ProvisionalStatus.tsx:11`), so the **exclusion decision is sound**. The compliance half is not: **`PrivacyStatus.tsx:236` sets `title: 'Verified — private'`** for the `ver` state, rendered at `:333-335` as `{cfg.title}`, sitting directly above the clause-7 v1 fail-honest subtitle `VER_SUBTITLE_V1` (*"Your vote counts. How you voted is never made public."*). That is a **banned word on a voting-adjacent status badge** — the component is protected from `FR-131` today by being unmounted, not by its construction. Publishing "compliant by construction" would let the promised re-check at first mount pass as a formality. | Keep the exclusion from the counted five (it is correctly reasoned). Restate the justification truthfully: the component is **not** rendered on any shipped surface, **and** it carries an `FR-131`-relevant string at `PrivacyStatus.tsx:236` (`title: 'Verified — private'`) that MUST be re-copy-reviewed before it is first mounted. Consider routing the `ver`-state title to the engineer alongside `REL-LIM-18` as a pre-mount blocker rather than a watch item. |
| **ISS-L1** | Low | B3 | `REL-LIM-12` Trace column (L466) | `packages/contracts/src/promotion-gate.mjs` `:144`, `:167-168` are cited together as **"(the throws)"**. `:144` is a throw ✓, but `:167-168` are the gate's *description strings* inside `formatDeploymentPlan()` (`'Promotion gate: testnet, staging and production refuse any registered verifier'` / `'exposing IS_INSECURE_MOCK(), any missing zkeyHash, any missing ceremony URI,'`). The other throw is at `:88`. | Re-label: `:88` and `:144` (the throws), `:167-168` (the gate's published description). |
| **ISS-L2** | Low | B3 | `REL-LIM-05`, `-06`, `-08`…`-10`, `-15`…`-17` "Cleared by" column; §7 owed-item 2 | `REF-02` and `REF-04`…`REF-10` remain unresolvable — `docs/refine-log.md` still holds no register entries. **PM-accepted; held at Low per the standing ruling and not re-scored.** Improved this version: §7 owed-item 2 now names the debt explicitly (*"Those routings were made in prose and never registered"*) instead of leaving it implicit. | Owed at the next Operate cycle. Not a pass-bar item. |

> **Low** issues do not block the pass bar. **High/Medium** each force a FAIL.

## 5. Cycle-1 findings — verification of closure

Each verified against shipped source at `HEAD` (`e039ff2`), not against the sre's rework spec.

| Cycle-1 ID | Sev | Status | Evidence |
|---|---|---|---|
| ISS-01 | Critical | **CLOSED — verified** | `REL-LIM-03` struck through and closed with a correction of record. Pins verified: `RegionRegistry.sol:215` is the `att.issuer != msg.sender` guard ✓; `:184` is `) external onlyTimelock {` on `registerAttester` ✓; `c854c0a` ✓; Doc 06 §5 `C-01` ✓. Removed from §7's reasons, the internal record's open list and the engineer routing ✓. The entrypoints-table pointer was also corrected (L549) — **checked for overreach: none.** It replaces the stale `(see REL-LIM-03)` with a verified statement pinned to `:215`; the only nit is that caller-auth detail now sits in the "Flag gate" column, which is accurate and harmless. **`REL-LIM-03` is no longer routed to anyone** ✓. Docs 10/11 cascade recorded as owed debt (§7 owed-item 1) ✓ — correctly recorded rather than silently carried. |
| ISS-02 | High | **CLOSED — verified, and the narrowed claim is true** | I tested the narrowed ground independently. `deploy.mjs` is a 23-line CLI over `formatDeploymentPlan()` that prints and executes nothing ✓; `npm run deploy:plan` exists at root `package.json:26` ✓; `promotion-gate.mjs` `:23` `DEPLOY_ORDER` ✓, `:46` `WIRING_STEPS` ✓, `:86` `assertSafeToPromote` ✓, `:157` `formatDeploymentPlan` ✓; `deployment-safety.test.mjs` exists with **`UT-0600`–`UT-0612`** exactly as cited ✓ and drives the gate through an **injected reader** (`const reader = (overrides) => async (id) => …`), never a live chain ✓; `.github/workflows/verify.yml` runs lint/build/protocol/indexer/contracts/sdk/web tests and a flag-removal-target check — **no job calls `assertSafeToPromote` against a target environment** ✓. "Written and unit-tested, executed by nothing that deploys" is accurate, and **keeping "Blocks Gate 2" on that narrowed ground is justified**. |
| ISS-03 | High | **CLOSED — verified** | Both issuer bullets qualified. L289–301 now leads *"the standing rule, NOT in effect in this pilot"*, states one government-run rail, quotes Doc 14 §1.2 directly, and adds the concentration consequence. L282–288 (compromised-issuer containment) also qualified, with the single-rail cliff cross-referenced to `REL-LIM-16` — an improvement I did not request. `FR-121` verified in Doc 02 (*"Phase 1 — India (Aadhaar offline paperless KYC) … the first and only enrolment adapter at Gate 2"*); `FR-129` verified (*"Making single-issuer operation permanent … MUST NOT be achievable as a deployment or configuration default"*); `OI-20`, `OI-04`, `H-19`, `FR-004` all exist and support the claims. |
| ISS-04 | High | **CLOSED — verified by diff** | Migration list restored to four clean items (L484–503). Duplicate truncated heading gone; item 4 recovered verbatim with its `SUPERSEDE_GRACE` / `DES-039` / `NFR-017` / `REL-LIM-09` tail re-attached ✓. Re-ran the duplicate-line scan and the leaked-marker scan across all 732 lines: **no residue**. |
| ISS-05 | Medium | **CLOSED — verified** | `REL-LIM-18` now lists five sites. All verified exactly: `flags.js:44` ✓; `Governor.sol:25,28` ✓ (twice, as stated); `en.ts:400-405` ✓; **`client.js:455-456`** ✓ (the claim genuinely spans two lines); **`ReceiptFreedomBanner.tsx:6-10`** re-classed as a violating comment ✓ with **`:41-44`** correctly identified as the render of both strings ✓ and **`ProposalsAndDebate.tsx:489`** confirmed as the mount ✓. (The `PrivacyStatus` exclusion note is `ISS-03` above — the decision stands, the stated reason does not.) |
| ISS-06 | Medium | **CLOSED — verified** | All eight re-pins resolve, plus the added `REL-LIM-09` pins: `RegionRegistry.sol:261` (`submitPopulation`, `onlyTimelock`) ✓; `Governor.sol:309-315` (the NOTE inside `vote`, exact) ✓; `Governor.sol:199` (`requireEnabled(FLAG_GOVERNANCE)`) ✓ — and `grep -n requireEnabled Governor.sol` returns **only** line 199, so *"and nowhere else"* is exact ✓; `Governor.sol:319` + `:137` ✓; `Governor.sol:81-83`, `:420` (unguarded `proposals()`), `:343-345` (the increments) ✓; `PartyRegistry.sol:293`/`:297` ✓; `PersonhoodRegistry.sol:210`/`:177` ✓; `fixture.mjs:70` (`PHASE1_FLAGS`) ✓; `VerifierRegistry.sol:53` (`register`), `:57` (timelock check), `:33`, `:65` ✓. The dated re-pin blockquote (L445–448) is a genuinely useful addition. One label wrong — `ISS-L1`. |
| ISS-07 | Medium | **CLOSED — verified** | One-active-party stated in both places. All identifiers verified: `ALREADY_MEMBER_ELSEWHERE` in `party-creation.js:37,841,856` ✓; `parties.onePartyRule` at `en.ts:134` ✓; `parties.alreadyMemberElsewhere` at `en.ts:136` ✓; the cited range `en.ts:134-138` is exact ✓. The document's phrasing (*"refused, naming the party that blocks it, until you leave"*) matches the shipped copy verbatim, and Doc 14 §2.3 ✓. |
| ISS-08 | Medium | **CLOSED — verified** | Aadhaar exclusion added at all four counting-tier claims: Highlights (L156–162), membership bullet (L198–200), two-tier box (L400–406), can/cannot row (L422). Framed as *"a real exclusion … not hidden"* and *"not presented as a temporary inconvenience"* — honesty parity with Doc 14 §1.2 achieved. |
| ISS-09 | Medium | **CLOSED — verified, and better than required** | Populated rather than deferred, and the self-blocking MUST removed with a stated justification. **I verified the record independently:** `git log --oneline --no-merges -- packages/ apps/` returns **exactly fourteen commits**, matching the document's fourteen **one for one** — SHAs, dates and summaries all correct, correctly split into the 9-commit protocol drop (2026-08-08 → 2026-08-09) and the 5-commit v1 application drop (2026-08-25 → 2026-08-29). `HEAD` is `e039ff2`, dated **2026-09-01** ✓. `git tag` is empty ✓ and no `CHANGELOG.md` exists ✓, so *"not a tagged release range"* is accurate. The framing — *"not a claim of verified delivery; the RTM position is in the internal record above"* — is honest, and *"the record above is the release record, and it is complete as of `HEAD`"* is a claim I was able to confirm. (The `c854c0a` row's closure claim is `ISS-01`.) |
| ISS-L1 | Low | **Open — PM-accepted** | Now `ISS-L2` above. Improved: explicitly named as owed sre debt in §7. |
| ISS-L2 | Low | **CLOSED** | `TC-EXIT-*` withdrawn at L497–499 with the reasoning stated in the open — *"that is not a valid `TC-####` identifier and no such case exists in Doc 07 v2.4.4 or in any suite file, so the claim is withdrawn rather than re-pinned"*. Correct, and the honest resolution: **"Test coverage: none of record"** rather than a manufactured pin. |
| ISS-L3 | Low | **CLOSED** | Coverage note (L129–141) no longer overstates: *"does not re-scope the release"* … *"It **does** correct the v1 position wherever the pre-existing text overclaimed it, which is why roughly a dozen statements below … describe the v1 application directly"*, and the proposals/deliberation drop is now named. |
| ISS-L4 | Low | **CLOSED** | Both v1.2.0 and v1.1.0 history entries wrapped and structured. |

## 6. Other verification recorded clean

1. **`FR-131` word ban — re-swept document-wide at v1.2.0: still clean.** Every hit across
   `anonym · private · privacy · receipt-free · secure · pseudonym · tamper · verifiab · proven ·
   never known` is a negation, the named v2 capability, a cannot-column entry, a flag or copy-key
   identifier, an accurately quoted defective string, or the ban's own restatement. The one new
   phrase, *"a privacy-preserving digital-identity wallet"* (L297), describes a future identity rail
   — not v1 voting behaviour — and mirrors Doc 14 §1.2's own wording. **Compliant.**
2. **The HALT survives intact, and is better argued.** §0's opening line, all nine precondition rows,
   the Gate row, "Approvals (Gate 2): **None.**" and *"Docs 09–12, this document included, carry
   none"* are unchanged. §7 is **strengthened**: two reasons, each labelled *"Sufficient alone"*,
   with the explicit statement that the halt *"does not depend on any code defect"*, and
   *"Removing it does not change the decision"*. **No softening anywhere.**
3. **The correction of record is the right artefact.** Recording the withdrawn third reason — naming
   that v1.1.0 re-routed a phantom defect without re-verifying, and that it was *"caught by the
   cycle-1 neutral review … not by its author"* — is more useful than an erasure and is exactly what
   a release-decision document should do with its own defect.
4. **No transcription residue.** Duplicate-line scan across 732 lines returns only the legitimate
   twice-used *"Nothing. This is the first release."*; no leaked `FIND:`/`REPLACE:`/anchor markers;
   the repaired migration-list boundary diff-checked.
5. Internal-record flag ON/OFF lists still match `flags.js` prod defaults exactly.

## 7. Routing instruction (to the owning role)

**FAIL → route to the sre (Chen Wei) for rework into a new version.** One High and two Mediums; no
Critical. The rework MUST produce **v1.3.0** with `Status: In Review`, after which this loop
re-reviews as **cycle 3 of 5**. Cap is 5; this is cycle 2, so there is room — but the remaining work
is small and should close in one pass.

1. **`ISS-01`** — split the `c854c0a` attribution across its five sites. This is the only High and it
   is mechanical: two of the three closures belong to `b8cf2ce`.
2. **`ISS-02`** — one word at L363, "Three" → "Five".
3. **`ISS-03`** — restate the `PrivacyStatus.tsx` exclusion on its true basis (unmounted, **not**
   compliant-by-construction) and decide whether `:236` is a watch item or a pre-mount blocker.
4. **`ISS-L1`** optional; **`ISS-L2`** remains PM-accepted and is not a pass-bar item.

**A note on method, offered because it caused both the cycle-1 Critical and this cycle's High.** Both
errors are the same shape: a *summarising* sentence asserting something tidier than the underlying
records support, published under a claim of source verification. The per-row citations in this
document are excellent and were right both times; it is the roll-up sentences above them —
*"the last of the family"*, *"all three closed in the same remediation"* — that failed. Before
v1.3.0 leaves `In Review`, it is worth re-reading only the document's generalisations and asking of
each one what commit or line proves it.

**Independence note.** This report scores and lists issues only; the reviewer made no edit to
`docs/09-release-notes.md` or to any other product or owned document. This is a review-loop verdict
only — it is **not** a Gate-2 sign-off, which remains with `reviewer-qa` and the human approver.
