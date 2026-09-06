# Document Review Report — Doc 14 User Guide v2.0.0 (business, cycle 2)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (technical-writer) does every rework as a
> new version. Independence: the reviewer is the **tester**, which is **not** Doc 14's owning role.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 14-user-guide.md
Document version: 2.0.0
Review mode: business
Reviewer role: tester (neutral — the owning role for Doc 14 is the technical-writer)
Score: 78%
Critical: 1
High: 3
Medium: 3
Low: 4
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 14 v2.0.0 is a **substantial and mostly successful rework**. Of the six cycle-1 Criticals,
**all six are genuinely closed** — I re-verified each against the body rather than the changelog:

- **FR-131 vocabulary (ISS-01) is clean.** I swept every occurrence of *anonymous / private /
  receipt-free / secure* in all 1,267 lines. Every one is now a **negation** (§0.1, §2.6 four
  bullets, §7), a **v2-future statement** (§2.6 "what protection is coming", §4.4), a **glossary
  contrast** (`Receipt-free`, `Coercion-resistant`, `Verified`), a **not-yet-available row**
  (§3.4, §7), or a **quotation of Doc 09's stale framing explicitly labelled as the forbidden
  framing** (open item 1). No affirmative use survives.
- **The mandated disclosure (ISS-02) is present and complete.** §2.6 carries all four FR-131
  elements verbatim in plain language — NOT anonymous, NOT receipt-free, NOT coercion-resistant,
  and *"Trumocracy's own database can see vote direction and party membership"* — and §0.1 leads
  with it. §4.3's compulsion table now answers honestly for v1.
- **The retracted member-list claim (ISS-03) is gone** from all four locations and replaced with
  the shipped `joinPrivate` wording.
- **The two-tier model (ISS-04) is first-class** — §0.1, §1.2, a dedicated §2.3 subsection, a
  §3.1 screen row, a §3.5 message row, and five new glossary entries.
- **§1.2 (ISS-05) is re-founded on FR-132/ADR-025**, with the ZK paths moved into a clearly
  labelled v2 note; **the Phase-1 Aadhaar-only exclusion (ISS-06) is stated plainly**, and the
  ≥2-issuer rule is now labelled *"not in effect in this pilot"* in both §1.2 and §3.2.
- Of the seven cycle-1 Highs, **six are closed** (voting/results, recovery, residency, manifesto,
  the subpoena answers, WCAG, offline drafting) and all seven Mediums are addressed.
- The **§3.2 numeric reference survived the rework intact** — I re-verified 2% / 0.5–20% / 500 /
  30–365 d / 5-10-25-40% quorum / >50-60-75% approval / 0-14-90-180 d tenure / 90-day floor /
  2-7-14 d discussion / 3-3-7-14 d voting / 0-48h-14d-30d timelock / 20%-in-30-days / +5 pp /
  ×2 window / 90-day decay / 1,000 anonymity set / 10% + 30-day fork / 50 & 10 free actions /
  ≥2 issuers / 100-member cap / 1–8 emblem chars line by line against
  `packages/protocol/src/constants.js`. All correct. The source pins now carry version **and**
  status and every one verifies (Doc 01 v2.0.0 Approved, 02 v2.16.3 Approved, 03 v2.11.2
  Approved, 05 v2.3.0 In Review, 06 v2.4.3 Approved, 08 v2.7.0 Approved, 09 v1.0.1 In Review),
  and the RTM figure "138 Must rows, 16 COMPLETE, 122 OPEN" matches `run_gates.cjs --audit`
  exactly.

It nonetheless **FAILS** at **78%** with **one Critical and three Highs**, and the reason is
narrow and specific: **the availability re-derivation stopped at Doc 06 §7 and Doc 08 §3.1 and
never reached `apps/web/src`.** Doc 06 §7 is a list of *limitations*, not an inventory of
*surfaces*; a capability absent from both documents reads as "fine" when it is in fact "not
built at all". Three clusters slipped through:

1. **The public-record / tamper-evidence claim (Critical).** §2.12, §3.1, §3.4, §4.3 and the
   §3.6 glossary tell the reader the record of every action is *published*, *cannot be altered*,
   and that *"nobody can alter it, including us"*. The shipped product says the opposite in its
   own copy — `trailV1Note`: *"In this version the record is kept by us. Publishing it so that
   anyone can check it without trusting us is not switched on yet."* This is **the ISS-03 defect
   class recurring**: a "we cannot" guarantee the product has already retracted, published in the
   state-compulsion section, and now also self-contradicting §2.3/§2.6/§4.3 inside the same
   document.
2. **Backing a petition (High).** §1.4 calls it *"built today, and the fastest way to see the
   whole thing work"* and gives three UI steps. There is **no petitions-browse route, no
   endorse action and no withdraw action anywhere in `apps/web/src`**; the nav has three entries
   (Parties, Start a party, Verify). Doc 08 §3.1 FR-014 is `☐ G-CIRCUIT`.
3. **Putting an idea to your party (High).** §2.4 opens *"Any member — including an open-tier
   member … can put an idea to the party"*. `ProposalService._requireAuthor` throws
   `AUTHORSHIP_REQUIRES_WORKER_TIER`; the shipped copy states *"a Supporter cannot be the author
   of a proposal"*, and every member starts as a Supporter.

The remedy is not another rewrite. It is **one pass over §3.1/§3.4/§2 against the five files in
`apps/web/src/app` and the components they render**, plus the §2.12/§3.6/§4.3 public-record
correction. The FR-131 work — the hard part, and the reason cycle 1 failed — is done and should
not be touched.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`78%`)
- Critical = 0? **no** (1) · High = 0? **no** (3) · Medium = 0? **no** (3)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1** Outcome & problem clarity | 20 | 82 | 16.40 | Large improvement (78 → 82). §0.1's four-bullet "read this first", the re-scoping to 0.1.0, and the honest "what this pilot means for who can take part" are exactly right. Marked down because the two tasks the guide points a new reader at first — §1.4 backing (*"the fastest way to see the whole thing work"*) and §2.4 authoring — cannot be performed. |
| **B2** Completeness | 15 | 80 | 12.00 | Large improvement (55 → 80). The v1 participation model now has three sections, a screen row, a message row and five glossary entries; the "Open items this guide cannot close itself" section is a genuinely good addition that names an owner per item. Gaps: §2.1 never mentions the mandatory non-violence clause the founder will meet (FR-077/CON-013), and §2.4 never mentions the Worker declaration a member must make before authoring. |
| **B3** Traceability & IDs | 20 | 86 | 17.20 | Large improvement (55 → 86). Every `Source:` pin now carries version **and** status and all seven verify; requirement IDs (FR-131, FR-132, FR-122/123, FR-094/095, NFR-011/012/013, OI-04/08/20, ADR-024/025) are cited inline at the claims they govern; named owner and accountable present; open items routed per role. Marked down because the §3.1 / §3.4 availability rows — the guide's single most load-bearing traceable surface — carry no row-level anchor and four of them contradict the RTM and the code. |
| **B4** Correctness & consistency | 15 | 55 | 8.25 | Improvement (20 → 55) but still the weak criterion. The FR-131, FR-132, OI-04/OI-20, NFR-011/012/013 and delegation corrections are all sound. What remains is one Critical, three Highs and three Mediums, all of one shape: a capability described as working that has no surface, or a guarantee the shipped copy has retracted. §3.6's `Public record` entry contradicts §2.3, §2.6 and §4.3 of the same document. |
| **B5** Testability | 15 | 72 | 10.80 | Improvement (45 → 72). The falsifiable surface is now larger and better designed — the `Available in 0.1.0?` column, the new `Live in 0.1.0?` column on the §3.2 privacy table, and the per-section "Not available in version 0.1.0" blockquotes are the right pattern. §3.2 verifies exactly. Marked down because six of the falsifiable availability assertions are false when checked against `apps/web/src`. |
| **B6** Convention compliance | 15 | 92 | 13.80 | Large improvement (65 → 92). **The FR-131 forbidden-vocabulary breach is fully closed** — the decisive cycle-1 finding. ISO-8601 dates, named-owner rule, RFC-2119-free plain language, grade-8 register and NFR-023 jargon discipline all hold (no *wallet / seed phrase / private key / gas / token / mint / hash* anywhere). Residual: the duplicate `Last updated` / `Last reviewed` fields (ISS-23 carried). |
| **Total** | **100** | — | **78.45% → 78%** | — |

## 4. Issues (every issue severity-classified and located)

New IDs are numbered `ISS-C2-##` so cycle-1 IDs are never reused or renumbered.

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C2-01 | **Critical** | B4 | §2.12 "A decision looks wrong to you" items 1–2 (lines 868–873); §3.6 Glossary **Public record** (line 1046); §4.3 compulsion table row *"Take down party Y"* (line 1116); §3.1 row **Public record** → "Yes" (line 906); §3.4 left column *"Read the public record of what has happened so far"* (line 1005); §2.1 Step 5 *"the app records permanently"* (line 386) | The guide publishes a **tamper-evidence and public-publication guarantee that the shipped product has already retracted and that Doc 08 records as unbuilt.** §2.12: *"Every action taken so far … is **published** and cannot be altered afterwards. **If anyone alters a record, anyone else can detect it.**"* §3.6: *"The permanent, shared list of every action … It contains **no personal information** and **nobody can alter it, including us**."* §4.3: *"we could not alter what has already happened, because the record of every past action is kept and **cannot be edited**."* The product's own copy says the opposite — `apps/web/src/i18n/en.ts` `trailV1Note`: *"**In this version the record is kept by us. Publishing it so that anyone can check it without trusting us is not switched on yet.** We would rather say that than imply more."* Doc 08 §3.1 **FR-092** is `☐ **G-NOMECH**`: the trail *"lives in the application store and needs DES-097 audit-record anchoring"*, and *"third-party reconstruction is not built"* (gap-log entry 83; Doc 06 §7 #24). There is **no public-record route** in `apps/web/src/app` at all. Three aggravating facts: (i) this is the **same defect class as cycle-1 ISS-03** — a "we cannot" claim the engineer already withdrew from the product as a v1 honesty defect; (ii) it sits in **§4.3, the state-compulsion section**, where it converts an unanchored operator-held database into a promise of immutability to a reader under pressure; (iii) §3.6's *"contains no personal information"* **contradicts §2.3, §2.6 and §4.3 of this same version**, which correctly state that Trumocracy's records can link an account to its party. | Align all six locations with `trailV1Note`. State the v1 truth: the record is **append-only within Trumocracy's own store** (genuinely proven — ordered, no delete path, copies on read, UT-0846..0848), it is **not published**, it is **not independently checkable**, and independent verification arrives with the DES-097 audit anchoring. Correct the §3.6 glossary entry on both clauses. Rewrite the §4.3 *"Take down party Y"* answer to say what a v1 operator holds and could alter, and reserve the immutability claim for the anchored version. Change the §3.1 Public-record row from "Yes" and drop the §3.4 entry or re-scope it to "read what the app shows you today". |
| ISS-C2-02 | **High** | B2, B4 | §1.4 "Task 2 — Back a party you agree with" in full (lines 266–275); §2.2 in full (lines 398–438); §2 index row **HT-002** → "Yes" (line 292); §3.1 rows **Petitions** → "Yes" and **Back / withdraw** → "Yes" (lines 894–895); §3.4 left column *"Back a petition, and withdraw before it opens"* (line 1000); §7 *"petitions with a published bar; backing and withdrawing"* (line 1210); §0.2 *"You can, today: … gather public support for it, watch the party open by itself when enough people back it"* (lines 121–125) | **No backing surface exists.** `apps/web/src/app` contains exactly five routes — `page.tsx`, `parties/page.tsx`, `petitions/new/page.tsx`, `proposals/page.tsx`, `verify/page.tsx` — and `SiteHeader.tsx` offers three nav entries (Parties, Start a party, Verify). There is **no petitions-browse route**, and **no component anywhere in `apps/web/src/components` renders an endorse or withdraw action**; the `withdraw: 'Take back my support'` string in `en.ts` is unreferenced. The only endorsement path in the repository is `client.endorse()` in `packages/sdk/src/client.js`, which submits an on-chain transaction with a **residency proof from the uncompiled `residency_member` circuit** (Doc 06 §7 #2) to a **contract in an environment that does not exist** (Doc 08 §3.1: *"no environment exists"*). Doc 08 §3.1 **FR-014** is `☐ **G-CIRCUIT**`. In the demo, `parties/page.tsx` reaches its activation threshold only by writing `_demoStore.updatePetition(petitionId, { endorsements: required })` directly — the seed comment says so. So §1.4's three steps (*"Open **Petitions** and read one… Tap **Back this petition**… the count go up by one"*) describe a screen that does not exist, in the task the guide nominates as *"the fastest way to see the whole thing work"*, and §0.2's *"watch the party open by itself when enough people back it"* cannot happen. This is the cycle-1 ISS-07..13 class, un-caught because Doc 06 §7 lists limitations rather than surfaces. | Mark HT-002, both §3.1 rows and the §3.4 entry **Not yet**; convert §1.4 and §2.2 to the forthcoming-behaviour pattern §2.5/§2.7/§2.9 already use well; remove *"backing and withdrawing"* from §7's "new in this release" list and *"gather public support for it"* from §0.2's "you can, today"; nominate a different first task (§2.3 join/leave, which genuinely works end to end). Keep the §2.2 *"your support is public by default"* warning — it is correct and must survive as a forthcoming-behaviour warning. |
| ISS-C2-03 | **High** | B2, B4 | §2.4 opening sentence (lines 487–489); §2.4 "The discussion — what's built today" first sentence (lines 560–561); §2 index row **HT-004** → "Yes — casting a vote is not yet" (line 294); §3.4 left column *"Put an idea to a party and take part in the discussion"* (line 1004); §0.2 *"put ideas to the members"* (line 127) | **Authoring a proposal is Worker-gated; the guide says any member can do it.** §2.4 opens: *"**Any member** — including an open-tier member who has not passed the government-ID check — **can put an idea to the party**"*, and later *"**Any member may put a question to the party** and any Worker-tier-or-above member may put forward a competing answer"*. The code has **one** authoring entry point: `ProposalService.fileProposal()` → `_requireAuthor()`, which throws `AUTHORSHIP_REQUIRES_WORKER_TIER` — *"authoring a proposal requires Worker tier or above, because authorship is public and Supporters are anonymous"* (`packages/sdk/src/proposals.js`). Opening a question and filing a competing answer are the **same call**, so the guide's distinction between them does not exist. `DEFAULT_PARTICIPATION_TIER = SUPPORTER`, and `proposals/page.tsx` states *"The demo visitor starts as a Supporter … a Supporter cannot author"*. The shipped copy is explicit: `workerGateBody` — *"Supporters take part without a public name, so **a Supporter cannot be the author of a proposal**."* Compounding it, the missing step is **privacy-consequential**: declaring Worker is the FR-080 informed-consent event (`workerConsentPermanent`: *"This lasts for the whole term. You cannot undo it partway through"*; `workerConsentPublicRecord`: *"Your record of taking part in this party becomes public for the term"*). The guide describes that consent only in §2.7, a section headed **"Not available in version 0.1.0 — Phase 3"**, so a reader following §2.4 meets an irreversible-for-the-term public-record decision the guide told them was not required. The §2.4 sentence also conflates the two orthogonal axes SRS §4.41's TWO-AXIS NOTE separates: it reassures the reader about the **verification** axis (true — no ID check needed) in wording that implies no gate on the **disclosure** axis (false). | Rewrite §2.4's opening and the "what's built today" paragraph: **every member can read and take part in the discussion**; **putting a proposal forward requires declaring yourself a Worker first**, which nobody approves but which **makes your record of taking part in that party public for the term and cannot be undone partway through**. Move the "Declaring yourself a Worker" paragraph out of the Phase-3 §2.7 and into §2.4 where the decision is actually made. Qualify HT-004, §3.4 and §0.2 accordingly. Reuse `workerGateBody` / `workerConsentPermanent` / `workerConsentPublicRecord` verbatim — that copy is already approved and shipping. |
| ISS-C2-04 | **Medium** | B4, B5 | §3.1 rows **How the bar is worked out** → "Yes" (line 896), **Opening record** → "Yes" (line 897), **Party home** → "Yes" (line 898) | Three more availability rows overstate what exists. **Opening record** — no such route or component exists; nothing renders "what was recorded the moment a party opened". **How the bar is worked out** — the row promises *"The population figure, its sources, and the sum"*; `PetitionProgress.tsx` renders supporters / needed / remaining and a *"why this number"* disclosure that is only shown when the optional `binding` prop is passed, and `petitions/new/page.tsx` **does not pass it**. Neither the population figure nor its sources appear on any screen. **Party home** — the row promises *"Programme, total membership, breakdown by area"*; `PartyMembership.tsx` renders emblem, name, `memberCount`, `officialStrength`, the provisional-cap notice, join/leave and the BR-020 disclosure. **The programme is not shown and there is no breakdown by area.** | Re-derive these three rows against the components that render them. Mark "Opening record" **Not yet**; scope "How the bar is worked out" to what `PetitionProgress` actually shows; scope "Party home" to membership numbers and the join/leave panel, and drop "Programme" and "breakdown by area" or move them to a Not-yet row. |
| ISS-C2-05 | **Medium** | B4 | §2.1 Step 3 first bullet (line 349): *"The petition runs for a window **you choose**, between **30 days and 365 days**"*; §3.2 row *"How long a petition may run → 30 – 365 days"* | Presented as a built choice inside the one task the guide states is fully working. `PartyCreationService.publishDraft(draftId)` takes **no window argument** and hardcodes `closesAt = now + PETITION.MIN_DURATION_SECONDS`, and `EightPillarForm.tsx` offers no duration control. Every petition in 0.1.0 runs exactly **30 days**, chosen by the code. The 30–365 range itself is correct against `PETITION.MIN/MAX_DURATION_SECONDS` — only the "you choose" is wrong, which is why this is Medium and not High. | State the design range and the current behaviour separately, in the pattern §3.2 already uses well elsewhere: the design allows 30–365 days; in 0.1.0 every petition runs the 30-day minimum and the founder cannot yet choose. |
| ISS-C2-06 | **Medium** | B2, B4 | §2.1 Step 1 in full (lines 309–335), particularly *"It **never judges your politics** — the standard is about how much you wrote, **never about what you believe**"* (line 327); §3.2 "The eight chapters a programme must cover" (lines 980–981) | §2.1 enumerates everything a founder must supply — eight chapters, an area, a name, an emblem — and **omits the one content requirement the platform actually imposes**: the mandatory, non-removable non-violence clause every charter must carry verbatim (FR-077, CON-013). It is built and enforced: `EightPillarForm.tsx` displays `NON_VIOLENCE_CLAUSE` and attaches it to every draft; `constants.js` documents it as *"the one deliberate exception to the platform's content-neutrality principle (ADR-013 §4, CON-013): the platform does not judge political content, but it refuses to host violence."* The guide asserts unqualified content-neutrality and never mentions the exception, so a founder meets a clause attached to their charter that the guide never told them about — and the platform's single most defensible content rule goes unexplained. (Note for the writer: the clause text carries `CLAUSE-TEXT-01`, approver ratification owed before Gate 2 per Doc 06 §7 #15 — worth a provisional marker like the OI-08 ones.) | Add the non-violence clause to §2.1 Step 1 in plain language: every party programme carries it, it cannot be removed or edited, and it is the one thing the platform does require of content — with the reason. Qualify *"never about what you believe"* accordingly. Consider a §3.6 glossary entry. |
| ISS-C2-07 | Low | B6 | Header `Last updated: 2026-08-31` (line 22) and §0 table row `Last reviewed | 2026-08-31` (line 87) | **Cycle-1 ISS-23 carried unfixed.** Two independent date fields holding the same value with no stated rule for which governs. They will drift on the next revision. | Keep one, or define "reviewed" as distinct from "updated" in §0. |
| ISS-C2-08 | Low | B3 | §6 row *"Whether the service is up → The public status page **listed in the release notes**"* (line 1191) | **Cycle-1 ISS-24 partly carried.** The `Source:` block, §7 and open item 1 now all flag Doc 09 as `In Review` and not approved for production — correctly and prominently. §6 still points a reader at it as a settled companion without the qualifier, and §6's own blockquote already concedes the addresses are unpublished. | Add the same qualifier here, or fold the row into the §6 blockquote that already says the links are not yet published. |
| ISS-C2-09 | Low | B5 | §3.1 row *"Before you sign up | Plain statement of what is and is not kept | **Not yet built** — see §1.2"* (line 889) | An **understatement**, which is the safe direction to err and therefore Low. `verify/page.tsx` does render the kept / not-kept lists (`kept-list`, `not-kept-list`) today; what does not work is the enrolment action, which the next row (`Choose how to prove you are real`) already captures accurately. As written the row is slightly inconsistent with open item 4, which correctly says the page is *"reachable but non-functional"*. | Align the row with open item 4: the disclosure content is on the page today; the action behind it is inert. |
| ISS-C2-10 | Low | B4 | §5 bullet 4: *"**Built for a slow connection and an old phone.** Every built task **is designed to** work on a five-year-old phone and a very weak connection."* (lines 1180–1181) | The other two §5 bullets were correctly rewritten to "design target + current status" (the ISS-12 fix, which is well done). This one asserts a device/bandwidth property with no status caveat, while Doc 08 §3.1 **NFR-012** is `☐ G-UI` and gap-log entry 41 records *"no device lab"* — nothing has been measured on any phone. "Is designed to" is honest phrasing, so this is Low rather than a repeat of ISS-12. | Give this bullet the same two-part treatment as the two above it: the floor is the binding requirement (NFR-012); no device-lab measurement has been performed in 0.1.0. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### 4a. Cycle-1 disposition (all 24, re-verified against the body)

| Cycle-1 issue | Severity | Status at v2.0.0 | Evidence checked |
|---|---|---|---|
| ISS-01 forbidden vocabulary | Critical | **FIXED** | Full-document sweep of *anonymous/private/receipt-free/secure*: 20 occurrences, every one a negation, v2-future statement, glossary contrast, not-yet row, or a labelled quotation of Doc 09's stale framing |
| ISS-02 mandated FR-131 disclosure | Critical | **FIXED** | §2.6 carries all four elements of FR-131(a)+(b) verbatim in plain language; §0.1 bullet 1 leads with it; §4.3 rows corrected |
| ISS-03 "no member list exists" | Critical | **FIXED** | All four locations replaced with the shipped `joinPrivate` wording (§0.2, §2.3, §4.3 ×2). *(But see ISS-C2-01: the same defect class recurs in the public-record claim.)* |
| ISS-04 two-tier model absent | Critical | **FIXED** | §0.1 bullet 2, §1.2, the §2.3 subsection, §3.1 screen row, §3.5 message row, 5 glossary entries; "one vote, always" qualified to counting members |
| ISS-05 §1.2 v2 ZK as today's task | Critical | **FIXED** | §1.2 rebuilt on FR-132(a)/(b) with the verify-and-discard field list matching DES-100; ZK paths moved to a labelled "coming later (v2)" subsection; the FR-132(d) not-unique-personhood caveat present |
| ISS-06 Phase-1 ≥2-issuer guarantee | Critical | **FIXED** | §1.2 "What this pilot means for who can take part" states the Aadhaar-only exclusion plainly; §3.2 row reads "**Not met in this pilot — one government rail only**"; matches OI-04 and OI-20 as resolved 2026-08-20 |
| ISS-07 voting/results | High | **FIXED** | HT-004 qualified, §2.4 and §2.6 carry not-built blockquotes, §3.1 Voting and Result rows "Not yet built", §3.4 moved to the right column |
| ISS-08 account recovery | High | **FIXED** | HT-009 "Not yet — Phase 3"; §2.9 blockquote states *"no recovery path is implemented yet, at all"*; the §1.2 "please also do this now" instruction removed; §2.12 states the consequence |
| ISS-09 residency confirmation | High | **FIXED** | §1.3 blockquote; §3.1 row "Not yet built"; §3.5 row re-labelled; the 180-day figure retained correctly as the FR-008 design value |
| ISS-10 manifesto promises | High | **FIXED** | HT-005 "Not yet"; §2.5 reduced to a labelled intent statement citing FR-094/FR-095; §3.1 row "Not yet built"; removed from §7's new-in-this-release list |
| ISS-11 subpoena answers | High | **FIXED** | §4.3 compulsion table rewritten for v1; the sealed-committee claim removed; *"Stop this citizen taking part"* now explicitly *"rests on a feature we chose not to build, not on a cryptographic guarantee"*. *(One row still overclaims — see ISS-C2-01.)* |
| ISS-12 WCAG self-contradiction | High | **FIXED** | §5 bullets 1–2 restated as target + "has not yet been audited", citing NFR-011 and Doc 08 §3.1 |
| ISS-13 offline drafting | High | **FIXED** | All three locations corrected; §2.1 and §2.12 now instruct the reader to save their own copy |
| ISS-14 locales | Medium | **FIXED** | §3.3 and §5 state 2 shipped (English + Arabic working draft) against the 8-locale NFR-013 target; the translation-review action is picked up as open item 3 |
| ISS-15 source pins | Medium | **FIXED** | All seven pins carry version + status and all seven verify against the documents; RTM counts match `run_gates.cjs --audit` exactly |
| ISS-16 OI-08 figures | Medium | **FIXED** | Provisional notes at §2.4 (post-table), §3.2 (post-table) and §2.8; the *"Nobody can shorten, skip or cancel that wait"* assertion removed |
| ISS-17 §2.6 self-check | Medium | **FIXED** | §2.6 "One thing that already works today" now points at the parties directory clause-(d) notice and says the ballot-screen notice arrives with the ballot screens |
| ISS-18 delegation "never" | Medium | **FIXED** | §4.5 and §3.4 restated against `flags.js` — not in this release, not planned before Phase 4, pending capture analysis, one hop and revocable if ever built |
| ISS-19 §2.12 app-will-not-load | Medium | **FIXED** | Settings instruction removed; multi-address claim dropped; reconciled with §6. The retained *"built and exercised in the automated test suite"* claim is **correct** — `defaultTransportChain` (bundlers → `SelfPayTransport` → force inclusion) exists with tests; NFR-014 is open for the missing network lab, not a missing chain |
| ISS-20 public filtering log | Medium | **FIXED** | §0.2, §3.1 and §4.5 all now say the public log is planned but not built |
| ISS-21 recall example | Low | **FIXED** | §2.8 carries "and this is only an example; the recall bar itself is not yet fixed platform-wide (open item OI-08)" |
| ISS-22 glossary terms | Low | **FIXED** | Open tier, Counting tier, Official strength, Verified and Coercion-resistant all added and well written |
| ISS-23 duplicate date fields | Low | **NOT FIXED** | Carried as ISS-C2-07 |
| ISS-24 Doc 09 status | Low | **MOSTLY FIXED** | Flagged in the Source block, §7 and open item 1; §6 still cites it unqualified — carried as ISS-C2-08 |

**Score: 22 of 24 cycle-1 issues closed, including all six Criticals and six of seven Highs.**
The four new issues at Critical/High are **all** instances of one root cause: the availability
re-derivation used Doc 06 §7 and Doc 08 §3.1 as its only sources and never checked
`apps/web/src`. Doc 06 §7 is a register of *known limitations*, so a capability with no surface
at all leaves no trace in it.

## 5. Routing instruction (to the owning role)

**FAIL → route to the `technical-writer` (Nadia Hassan), the owning role for Doc 14.** The rework
MUST produce a **new version** — a **minor bump to `2.1.0`** is the honest signal (one Critical
and three Highs, but all contained corrections to existing sections rather than a re-founding) —
with `Status: In Review`, after which this loop re-reviews as cycle 3 of 5.

Suggested order of work, highest leverage first:

1. **ISS-C2-01 first.** It is the one safety-relevant issue and the one that repeats a defect
   class the product has already corrected. The approved wording is shipping in
   `apps/web/src/i18n/en.ts` `trailV1Note` — **reuse it rather than re-derive it**, exactly as the
   `joinPrivate` reuse worked for ISS-03. Six locations: §2.12 items 1–2, §3.6 `Public record`,
   §4.3 *"Take down party Y"*, §3.1 Public-record row, §3.4, §2.1 Step 5.
2. **ISS-C2-02, ISS-C2-04, ISS-C2-05 together — one pass with the code open.** Read the five
   files in `apps/web/src/app` and the seven components in `apps/web/src/components`, then walk
   §3.1 row by row and §3.4 column by column. **A capability with no route and no component is
   "Not yet", regardless of what the SDK contains.** This is the check that would have caught all
   four new findings, and it is the one addition the v2.0.0 method needs.
3. **ISS-C2-03.** Move the Worker declaration and its FR-080 consent consequence into §2.4 where
   the decision is made. `workerGateBody`, `workerConsentPermanent` and `workerConsentPublicRecord`
   are already approved plain-language copy — reuse them.
4. **ISS-C2-06** and the four Lows.

**Not to be changed — and I want this on the record so the next cycle does not undo it:**

- **The entire FR-131 rewrite** (§0.1, §0.2, §2.3, §2.6, §3.5, §3.6, §4.3, §7). §2.6 is now the
  best section in the document and the vocabulary sweep is clean.
- **§1.2** as rebuilt on FR-132 + the OI-04/OI-20 Phase-1 reality, including the Aadhaar
  exclusion stated without hedging.
- **§3.2**, which verifies line by line against `packages/protocol/src/constants.js`.
- **The "Open items this guide cannot close itself" section**, which correctly routes four items
  to named owners in other roles rather than fabricating a fix. Open item 4 (the inert `/verify`
  page) is confirmed accurate: `verify/page.tsx` line 72 renders a `start-verification` button
  with no handler.
- **The source-pin discipline** (version + status on every pin).

Nothing in this report asks the writer to reopen any of the above. The defect is a residual
scope check, not the honesty rewrite — which worked.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5, verdict **FAIL**, routed to the owning role.
