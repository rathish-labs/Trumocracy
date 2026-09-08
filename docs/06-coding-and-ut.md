# Coding & Unit Testing — Trumocracy

```
Document ID:   CODE-TRUMOCRACY
Version:       2.7.0
Status:        Approved — 06-coding-and-ut-v2.7.0-technical-cycle2.md (PASS 96%, 0C/0H/0M/3L; reviewer: tester, neutral,
               PM-assigned; three Lows carried, non-blocking, to fold at the next touch: ISS-C2-01 the item 26(c) closure pins Doc 07/08 at v2.6.0/v2.9.0 while v2.7.0/v2.10.0 are in review; ISS-C2-02 the v2.7.0 change entry still names Doc 02 v2.17.0 as In Review (v2.17.1 is Approved); ISS-C2-03 the tightened Arabic assertion narrows the guard to the exact old phrase). Previously: In Review
Owner:         Samuel Oyelaran — Engineering Lead
Source:        SDD-TRUMOCRACY v2.13.0 §9 · ADR-011 · ADR-023 · ADR-024 · ADR-025
Last updated:  2026-09-06
```

> Built from SDD §9 and ADR-011. Records what was physically built, the unit-testing
> standard, the `UT-####` inventory, the feature-flag ledger, and the defects the review loop
> found and what was done about them.

```
Change history:
  v2.7.0 (2026-09-06) — Rework cycle 2 against
               artifacts/reviews/06-coding-and-ut-v2.6.0-technical-cycle1.md (FAIL 94%,
               0C/0H/1M/5L, reviewer: tester Ji-woo Park, neutral). The reviewer accepted the
               code as correct — byte-exact against DECISIONS §4/§5/§5.3, UT-0889 verified to
               satisfy all five §5.4 requirements and to fail on every retired string, suite
               624/624, typecheck and dep-guard clean — so this rework is documentary only; no
               product code changed except the one test file at ISS-03/ISS-06. A Medium forces
               at least a minor bump (the skill's rule), hence v2.6.0 -> v2.7.0, not a patch.
               **ISS-01 (Medium) — the register over-stated open work by three items.** §7 item
               26(a)/(b)/(c), the v2.6.0 change-history "Not done in this session" clause, the
               §3 UT-inventory closing note and the §4a "until it lands" sentence all published
               three cascades as still owed that had, in fact, already closed on 2026-09-06:
               Doc 03 is now **v2.13.0, Approved** (§10.12.3 title row, three-state table and
               §13 debt row all corrected at v2.12.0); Doc 09 is now **v1.9.0, Approved**
               (`REL-LIM-18` row reads `~~REL-LIM-18~~ CLOSED`, commit SHAs `0a5c542`/`84e2203`);
               Doc 07 is now **v2.6.0, Approved** and Doc 08 **v2.9.0, Approved** (`TC-3564`
               .. `TC-3569` cover UT-0887/UT-0759/UT-0888). All four locations annotated
               (not deleted) with the closing evidence; item 26(a)/(b)/(c) each now carry a
               dated `~~OWED~~ — CLOSED (v2.7.0)` line, leaving item 26(d) (the DES-098
               acknowledge-to-proceed control) as the only genuinely open item under that list.
               The FR-131 Must row itself is separately corrected: it is not "owed" TC
               authorship, it is Doc 08's own recorded verdict, **OPEN (G-PHASE3)**, pending the
               unbuilt DES-098 control — a requirement-completeness fact, not a documentation
               gap. **ISS-02 (Low)** — §5.0 was missing the `v2.5.1 cycle 2` entry although the
               version cites that PASS three times; added, with its score, severity counts and
               report path. **ISS-03 (Low)** — the two new landing strings
               (`home.steps[1].body`, `home.promises[0]`) had no jargon scan against §2.2's
               list, unlike the house pattern at UT-0857/UT-0868/UT-0884; a new `it()` added to
               UT-0889 in `apps/web/test/safety-surfaces.test.tsx` scans both strings against
               the full §2.2 jargon list. **ISS-04 (Low)** — §2.2 and §4a asserted a CI
               jargon-filter step that does not exist (`.github/workflows/` has `verify.yml`
               and `dco.yml`, neither runs a jargon scan); both passages corrected to name the
               actual enforcement — the per-story jargon-scan tests — and the CI claim removed.
               **ISS-05 (Low)** — the clause-(e) residue inventory in item 26's "Still stand,
               and why" paragraph was not exhaustive: added `packages/ui/src/PrivacyStatus.tsx`
               `anon` state (`title: 'Anonymous'`, `subtitle: 'Nothing you do here is linked to
               you'`) — not public-facing today (component unmounted on every consuming
               surface), flagged for re-copy-review before first mount; and corrected the
               `private_endorsement` flag reasoning — the description **string** names no
               phase (the phase lives in the sibling `removeBy`/`defaults.prod` fields), so the
               entry stands because it is developer-facing configuration, not because it "names
               the phase" as previously stated (conclusion unchanged, reason corrected).
               **ISS-06 (Low)** — the bare Arabic `.not.toContain('سري')` assertion in UT-0889
               was brittle against ordinary words sharing the root (`سريعًا` "quickly",
               `تسري` "takes effect", already present at `ar.ts` `parties.leaveHelp`); tightened
               to assert the exact retired phrase `اسمك سريًا` instead, per the coordinator's
               direction to fix rather than only record it (the review's own routing had left
               this optional). Suite: **625 tests** (contracts 95 / protocol 151 / sdk 244 /
               ui 18 / indexer 16 / web 101, +1 over v2.6.0's 624 — the ISS-03 jargon-scan
               assertion); `npm run typecheck` exits 0 in `packages/ui` and `apps/web`;
               `npm run lint:deps` reports "7 workspace package(s) checked — layering OK". §3
               UT-0889 row and Total updated (5 -> 6; 624 -> 625). Header `Source` pin advanced
               `SDD-TRUMOCRACY v2.7.1` -> `v2.13.0` (review advisory, ISS-01) to match Doc 03's
               current version; the historical `v2.7.1` citations inside earlier dated change-
               history entries and inline annotations are left as-is (they record what was true
               when written). Not done in this session, unchanged from v2.6.0: Doc 02 v2.17.0's
               own document-review loop; ARABIC-I18N native-speaker review; the §7.1
               enrolment-copy ruling; the DES-098 acknowledge-to-proceed control itself
               (item 26(d) — still the one open item in that list).
  v2.6.0 (2026-09-06) — Endorsement-copy honesty fix under Doc 02 v2.17.0 FR-131 clause (e)
               (product-owner Ruling B, presented 2026-09-06; CONFIRMED by the approver the
               same day — artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11).
               Why: the 2026-09-05 REL-LIM-18 sweep correctly left the petition-endorsement
               landing copy in place because FR-131's then-closing sentence was scoped to "v1
               voting behaviour" and endorsement is not voting; the product-owner ruled that
               scope an artefact of drafting, not permission, and widened FR-131 with a new
               clause (e) reaching every v1 participation act. Two overclaims fixed, en + ar in
               one commit: (1) `apps/web/src/i18n/en.ts`/`ar.ts` `home.steps[1].body`
               ("...with your name kept private...") claimed a v2 (Definition-B) property —
               unlinkability — that v1 does not have (FR-014/FR-015 require the operator
               database to link account to endorsement) and is additionally the *opposite* of
               what the product does, since backing is a public act by design (Doc 14 §2.2);
               REPLACED with the DECISIONS §4.1/§4.2 copy (public act; name not shown; our own
               records can link; only back a party you are content to be seen supporting).
               (2) The same-page `home.promises[0]` ("We never learn which party you
               support.") was flatly false against FR-131(b); REPLACED with the DECISIONS
               §5.1/§5.2 copy ("We never publish which party you belong to..."). (3) Reached by
               clause (e) (DECISIONS §5.3, approver-confirmed): the user-facing
               `AUTHORSHIP_REQUIRES_WORKER_TIER` refusal in `packages/sdk/src/proposals.js`
               ("...Supporters are anonymous...") is REPLACED with "...a Supporter's
               participation is never published..." (true in v1); the paraphrase in
               `ProposalsAndDebate.tsx`'s header doc comment is corrected to match; a
               "(FR-082 — Definition-B property; §16.3 DEFERRED-v2)" marker is added to the two
               requirement-describing doc comments in `packages/protocol/src/proposals.js`
               (~23, ~67) per the DECISIONS §5.3 SHOULD. `packages/sdk/src/ballot.js` and the
               `private_endorsement` flag description are unchanged — both name the v2/Phase-4
               phase explicitly and make no v1 claim, so clause (e) does not reach them. New
               regression guard **UT-0889** (`apps/web/test/safety-surfaces.test.tsx`), the
               UT-0869 pattern applied to this copy: asserts the en source strings and the
               rendered landing page (`home.steps[1].body` has no "kept private" and states the
               four DECISIONS §4 facts; `home.promises[0]` has no "never learn" and states
               "never publish"; neither string contains "private"/"anonymous"/"receipt-free"/
               "secure"), the Arabic mirror (no "سريًا"/"سري" in the endorsement step, no
               "لا نعرف" about party membership), and the sdk refusal message (no "Supporters
               are anonymous"). §7 item 26 rewritten: the corrected strings are no longer
               listed as "left in place" — they are fixed at this version, with `ballot.js`
               and the `private_endorsement` description named as correctly standing and the
               DES-098 acknowledge-to-proceed control (item 26(d)) restated as still owed under
               US-0134. The two v2.5.1-cycle-2 carried Lows are folded rather than carried
               further: **ISS-C2-01** — §4a's "the longest 17 words" corrected to "the longest
               18 words" (the sentence-length arithmetic in the cycle-2 review itself).
               **ISS-C2-02** — the `apps/web/tsconfig.tsbuildinfo` untrack + `.gitignore`
               `*.tsbuildinfo` entry, deferred to a `chore(infra)` commit at cycle-2 review
               time, had already landed on trunk (commit `84e2203`) by this session; recorded
               as new §7 item 27 (RESOLVED) so the register, not only the log, carries it. No
               feature flag: a correction of a false statement is not a feature (DECISIONS
               §5.4). Suite: 624 tests (contracts 95 / protocol 151 / sdk 244 / ui 18 /
               indexer 16 / web 100, +5 over v2.5.1's 619 — UT-0889); `npm run typecheck`
               exits 0 in `packages/ui` and `apps/web`; `npm run lint:deps` reports "7
               workspace package(s) checked — layering OK". §3 counts updated (new UT-0889
               row). Not done in this session, and not this role's to do: Doc 02 v2.17.0's own
               document-review loop (project-manager to assign, per CLAUDE.md); Doc 07/08 TC
               rows for UT-0889 (and the still-owed UT-0887/UT-0759/UT-0888 rows) and the
               FR-131 RTM row (tester); the Doc 09 REL-LIM-18 cascade and Doc 03 §10.12.3
               cascade named in item 26(a)/(b) (architect/sre, unchanged by this drop); the
               ARABIC-I18N native-speaker review of the two new Arabic strings
               (technical-writer, pre-Gate 2); the §7.1 enrolment-copy ruling (product-owner,
               tracked Doc 02 §13 (j), non-blocking); the DES-098 acknowledge-to-proceed
               control (item 26(d), SCR-13 story scope).
               **(v2.7.0, ISS-01 correction — this paragraph was already stale when written:**
               the UT-0887/UT-0759/UT-0888 TC rows and the Doc 09/Doc 03 cascades were, in
               fact, already closed by 2026-09-06 (Doc 03 v2.13.0, Doc 09 v1.9.0, Doc 07 v2.6.0
               / Doc 08 v2.9.0, all Approved) — see the v2.7.0 entry immediately below and §7
               item 26(a)/(b)/(c) for the corrected state and the evidence. Only UT-0889's TC
               row, the FR-131 Must row's OPEN(G-PHASE3) status pending DES-098, ARABIC-I18N,
               the §7.1 enrolment ruling and the DES-098 control itself were, and remain,
               genuinely open.)
  v2.5.1 (2026-09-05) — Rework cycle 1 against artifacts/reviews/06-coding-and-ut-v2.5.0-technical-cycle1.md
               (PASS 96%, 0C/0H/0M/6L — all six reworked rather than carried, as at v2.4.1).
               ISS-01 (Low): §7 item 26's "left in place" list omitted three residual sweep
               hits — packages/protocol/src/proposals.js:23,67 (FR-082 Supporter property,
               the protocol twin of the sdk hit), packages/sdk/src/ballot.js:68 ("absent in
               v2 for receipt-freeness" — a v2 property) and the ar.ts landing string
               "بقاء اسمك سريًا" (the Arabic mirror of the en.ts endorsement copy) — added,
               and the Arabic landing string routed to the product-owner together with its
               English counterpart. ISS-02 (Low): §7 item 17 covered only party-creation
               Arabic; widened to name the ar.ts vote-surface banner strings, flagged for
               native-speaker review BEFORE any Arabic-locale customer deployment (a
               mistranslated coercion warning is a safety defect). ISS-03 (Low): the new en
               banner body carried one 27-word and one 22-word sentence; both split
               (en + ar), no assertion of UT-0887 changed and the suite is unchanged at 619;
               the reading-level statement is now recorded in §4a beside the DES-verbatim
               deviation — the residual density is compelled by FR-131's own mandated
               vocabulary ("not receipt-free", "not coercion-resistant"). ISS-04 (Low):
               apps/web/tsconfig.tsbuildinfo, a tracked TypeScript incremental cache, is
               dirtied by the §4a-mandated typecheck; reverted and kept out of this drop's
               commit, and untracked in a separate chore(infra) commit with *.tsbuildinfo
               ignored (pre-existing hygiene surfaced by this drop, not a product change).
               ISS-05 (Low): packages/ui/test/PrivacyStatus.test.tsx header docblock read
               "UT-0750..UT-0758" and described only the subtitle four-path; now
               UT-0750..UT-0759 with the title four-path beside it. ISS-06 (Low): the owed
               SDD cascade (§7 item 26(a)) now also names Doc 03 §10.12.3's three-state
               reference table `ver` title cell and its v2.7.1 normative note, which scopes
               the "informational reference copy" caveat to the subtitle only and so
               under-covers the title now that the title is backing-aware too.
  v2.5.0 (2026-09-05) — REL-LIM-18 closed in code: the five FR-131-violating strings and the
               PrivacyStatus pre-mount blocker (Doc 09 v1.3.0, sre → engineer 2026-09-02;
               approver direction 2026-09-05). The document (Doc 09) told the v1 truth while
               the product still asserted the retired "votes are anonymous but not
               receipt-free" framing. Fixed, each replacement stating the FR-131 (Doc 02
               §4.45) v1 truth — a v1 vote is cast through conventional authentication and is
               NOT anonymous, NOT receipt-free and NOT coercion-resistant; the platform
               database CAN see vote direction and party membership; the ballot the platform
               cannot see arrives with the v2 privacy layer:
               (1) packages/protocol/src/flags.js MACI_VOTING.description;
               (2) packages/contracts/src/core/Governor.sol NatSpec (both sentences);
               (3) apps/web/src/i18n/en.ts banner.notReceiptFreeTitle/Body — the rendered
               vote-surface copy a citizen reads (was "Your vote is private…" / "Nobody can
               see that a vote was yours"), now stating FR-131 (a), (b) and (c) with the four
               banned words appearing only negated. The Arabic mirror in ar.ts carried the
               same claim ("صوتك سري" — your vote is secret) and is rewritten the same way
               (working-draft engineer translation; §7 item 17 applies);
               (4) packages/sdk/src/client.js #tenureSignals comment;
               (5) apps/web/src/components/ReceiptFreedomBanner.tsx doc comment — now cites
               FR-131 as the normative wording and forbids copying warning text out of code.
               Pre-mount blocker: packages/ui/src/PrivacyStatus.tsx `ver` title
               "Verified — private" is now backing-aware by the same clause-7 rule as the
               subtitle — v1 fail-honest default "Verified"; "Verified — private" only when
               backingProperties.unlinkable === true. Doc 03 §10.12.3 v2.7.0's "status
               visibility" reading of the word is overruled (Doc 09 v1.3.0 ISS-03; approver
               2026-09-05) — SDD cascade owed (§7 item 26; §4a recorded deviation).
               Regression guards: UT-0887 (web, 4) asserts the rendered banner uses no banned
               word except immediately negated, never "private"/"secure" at all, states
               (a)/(b)/(c), and that the Arabic banner carries the same truth; UT-0759 (ui,
               4) asserts the four-path title rule; UT-0888 (protocol, 1) guards the flag
               description. UT-0751/UT-0753 expectations updated. Full sweep of
               packages/*/src and apps/web/src for "anonymous", "private", "receipt-free",
               "secure" and the retired phrases: no further v1-voting claim (§7 item 26 names
               the non-voting hits left in place and routed). Suite 610 → 619; typecheck and
               dep-guard clean. §3 note's web sub-total corrected (it read 89; its own
               addends summed to 91).
  v2.4.3 (2026-08-29) — Rework cycle 1 against artifacts/reviews/06-coding-and-ut-v2.4.2-technical-cycle1.md
               (PASS 98%, 0C/0H/0M/1L — reworked rather than carried). ISS-01 (Low):
               `workerGateHow` still carried the v2.4.0 narrower framing ("makes what you
               put forward public for the term"). The consent panel corrected it before
               confirmation so FR-080 compliance was intact, but the gate is step 1 of the
               same consent event and existing Workers see that line as their standing
               reminder — an initial impression narrower than the truth is still a
               misleading impression, which is the §2 rule 2 concern. Copy now states both
               facts at the gate too: it lasts for the term, and it makes the member's
               record of taking part public for that time (en + ar). UT-0872 extended to
               assert both at the gate, so the narrow framing cannot come back unnoticed.
               Suite unchanged at 610.
  v2.4.2 (2026-08-29) — FR-080 informed-consent fix, found by the TESTER's rule-4 check
               (Doc 08 v2.5.0), not by the code review. The Worker declaration shipped as a
               ONE-CLICK control whose copy said it makes "what you put forward public for
               the term". FR-080 requires the UI to state, BEFORE confirmation, that the
               declaration is PERMANENT for the term AND makes the member's PARTICIPATION
               RECORD public — a broader fact than the proposals they file — and a one-click
               control has no "before" for that disclosure to precede. This was a real
               honesty defect in the drop: a permanent, publicity-increasing status change
               taken on one click without stating either consequence.
               Fixed: the declaration is now two steps (apps/web ProposalsAndDebate
               TierDeclaration) — the existing gate explains WHY the tier exists, then a
               consent panel states permanence, participation-record publicity, and that
               nobody reviews it, with confirm/decline. Declining leaves the member a
               Supporter and records nothing. New i18n en+ar strings (ar engineer draft,
               §7 #17). New tests UT-0885 (both required facts stated, and the filing form
               is NOT reachable before confirmation) and UT-0886 (declining changes
               nothing). Design landed with it: Doc 03 v2.9.2 DES-103 now specifies the
               two-step consent event normatively and binds SCR-15/SCR-12.
               Suite: 610 tests (contracts 95 / protocol 150 / sdk 244 / ui 14 / indexer 16 /
               web 91). §3 counts updated.
  v2.4.1 (2026-08-29) — Rework cycle 1 against artifacts/reviews/06-coding-and-ut-v2.4.0-technical-cycle1.md
               (PASS 97%, 0C/0H/0M/2L — reworked anyway, since both findings were about a
               test claiming more than it checks). ISS-01 (Low): UT-0876 and UT-0879 in
               apps/web/test/proposals.test.tsx read as though they were the primary
               fairness and lifecycle guards; they are the UI half only. Each now carries a
               SCOPE comment naming the real guard — UT-0836 on the ProposalService surface
               for FR-090, and assertStageTransition (UT-0091/0092) plus the service
               signature (UT-0842) for FR-091 — so a later reader cannot mistake a
               button-text scan for the enforcement. ISS-02 (Low): the takesNoVerifier()
               helper in packages/sdk/test/proposals.test.js now documents that an aliased
               parameter name would slip past its regex, and that it is one leg of a
               three-part check whose real legs are the spy assertion and the structural
               `_verifier === undefined` assertion. No test behaviour changed; suite
               unchanged at 608.
  v2.4.0 (2026-08-29) — PROPOSALS & DEBATE feature drop (FR-024, FR-079, FR-080, FR-090,
               FR-091, FR-092; FR-122/FR-123 counting distinction; FR-031/NFR-003 vote-step
               honesty). Built at the two layers that were empty — the contracts layer
               already had the consensus lifecycle (Governor/GovernanceRules, UT-0200..0230)
               and is NOT duplicated or modified by this drop.
               PROTOCOL (new packages/protocol/src/proposals.js): PARTICIPATION_TIER +
               canAuthorProposal + votingWeightForTier (FR-079/FR-080 — every tier weighs 1,
               exposed as a function so the guarantee is asserted rather than inferred);
               PROPOSAL_STAGE/STAGE_ORDER/DELIBERATIVE_STAGES/COMPETING_ENTRY_STAGES +
               nextStage + assertStageTransition (FR-091 — refuses STAGE_SKIPPED naming what
               was skipped, STAGE_REVERSED, STAGE_UNCHANGED; no force/skipTo parameter
               exists); validateProposalDraft (published floors only, never content
               judgement) and normalizeQuestionKey (FR-090 decision-window grouping).
               SDK (new packages/sdk/src/proposals.js): IProposalStore typedef,
               InMemoryProposalStore (IS_INSECURE_MOCK=true) and ProposalService —
               fileProposal (one entry point for original AND competing, because the
               distinction carries no power), proposalsInWindow, decisionWindows,
               postDeliberation (open to open-tier members; deliberative stages only),
               deliberation, advanceStage (one step, no target parameter), admitToBallot
               (the ONE seam call site, scope BINDING_VOTE), participationStatus (takes no
               verifier, so a status read can never trigger verification) and decisionTrail.
               The service holds NO verifier, so authoring and deliberation structurally
               cannot reach one. It casts, stores and counts NO vote — IBallotService owns
               that (DES-096) and the private-ballot mechanism is v2.
               Also: PartyCreationService.partyStatus() now returns `jurisdiction` and
               `name` (additive; public party data the FR-123 seam call sites need to scope
               a counting action without reaching into the store).
               WEB: /proposals page (flag-gated on party_governance) + ProposalsAndDebate
               component — Worker self-declaration surface, filing form, the competing-
               proposal list with equal affordances, the eight-stage track, the deliberation
               thread, the ballot step carrying the non-dismissable coercion-resistance
               notice, and the decision trail with its honest v1 note. i18n en+ar `debate`
               section (named `debate` because a pre-existing `proposals` key holds a
               proposal's BALLOT state — a duplicate key would have silently overwritten
               one of them; ar is an engineer draft, native review owed per §7 #17).
               Types: trumocracy-protocol.d.ts + trumocracy-sdk.d.ts extended for the new
               exports (the UT-0871 shim-sync guard covers IPartyStore only; these are new
               modules, so their declarations are added by hand — see §7 #23).
               New tests: UT-0087..UT-0095 (protocol, 24), UT-0832..UT-0848 (sdk, 24),
               UT-0872..UT-0884 (web, 18). Suite: 608 tests (contracts 95 / protocol 150 /
               sdk 244 / ui 14 / indexer 16 / web 89); dep-guard clean; tsc exits 0 in
               packages/ui and apps/web. §3 counts updated; §7 limitations #23–#25 added.
               DESIGN LANDED WITH THE CODE: DES-103..DES-106 written into Doc 03 v2.9.0 in
               the same session, so the FR rows can close rather than sit at
               "surface built, row open".
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
blockchain operations), **crypto**, or any equivalent technical blockchain vocabulary.
**(v2.7.0, ISS-04 correction:** this is enforced today by the **per-story jargon-scan tests**
(the `UT-0740`/`UT-0857`/`UT-0868`/`UT-0884`/`UT-0889` pattern in
`apps/web/test/safety-surfaces.test.tsx` and its siblings), not by a CI step — `.github/
workflows/` runs `verify.yml` (deps, contracts build, five test jobs) and `dco.yml`, and
neither contains a jargon-filter job. There is no `packages/protocol/src/flags.js`-boundary CI
scan; that description was aspirational, not built. If a CI jargon-filter job is added later,
this line should be updated to cite it.)

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

Counts are actual as of this session (2026-09-05), verified by running `npm test`.

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
| UT-0750..0759 | PrivacyStatus component: state rendering, self-view contract, absence, backing-aware copy; backing-aware `ver` title four-path — no FR-131 banned word on the v1 default (UT-0759, v2.5.0) | ui | 18 |
| UT-0760..0779 | IEligibilityVerifier seam, IBallotService seam: counting-tier gate, IS_INSECURE_MOCK delegation, nullifier, tally | sdk | 36 |
| UT-0780..0818, UT-0831 | PartyCreationService + InMemoryPartyStore: IS_INSECURE_MOCK, validation gate, collision (incl. TOCTOU re-check), cooldown, FR-018 threshold gate (ISS-01), FR-130 cap, join-never-calls-verifier, status, determinism, archivedAt determinism (ISS-03), expirePetitions interface-only seam regression (v2.3.1 ISS-01) | sdk | 38 |
| UT-0819..0830 | join/membership: join-without-permission, join/leave never call the seam, one-active-party (explicit leave), leave-at-will, append-only history, FR-130 100/101 boundary on ACTIVE members, strength counts verified members only, seam scope assertion, clock determinism, countingStatus | sdk | 22 |
| UT-0841..0857 | party-creation web flow: emblem field, deficiency errors, collision surfaces, BR-020 disclosure, non-violence clause, ProvisionalStatus, jargon scan | web | 27 |
| UT-0858..0870 | join/membership web flow: one-click join, no-approval absence, one-active-party refusal surface, leave, history active/inactive, cap at join surface, join ≠ counting figures, FR-131(d) notice (four clauses, non-dismissable), verified-member counting, seam spy, flag gating, jargon scan, v1-honest join copy, absence test | web | 27 |
| UT-0871 | SDK type-shim sync guard: trumocracy-sdk.d.ts IPartyStore member set equals the JSDoc typedef (v2.3.2, ISS-C2-01) | web | 1 |
| UT-0087..0095 | proposals reference rules: participation tiers (weight always 1), Worker-tier authoring gate, eight-stage order, skip/reverse/no-op refusals, capability absence, deliberative stages, competing-entry window, draft floors, question-key grouping | protocol | 24 |
| UT-0888 | `maci_voting` flag description states the FR-131 v1 truth, not the retired "votes are anonymous" framing (REL-LIM-18 site 1, v2.5.0) | protocol | 1 |
| UT-0832..0848 | ProposalService: Worker-tier authoring, authoring never calls the seam, competing proposals in one window with equal standing, the fairness capability-absence set, entry closed after the ballot opens, open-tier deliberation, records-not-outcomes, one-step lifecycle, BINDING_VOTE admission gate, refusal states what is kept, no vote is cast, append-only trail, clock determinism | sdk | 24 |
| UT-0885..0886 | FR-080 Worker informed-consent event: both required facts stated before confirmation (permanent for the term; participation record public), filing unreachable until confirmed, declining changes nothing (v2.4.2) | web | 2 |
| UT-0887 | vote-surface honesty banner (REL-LIM-18 site 3): rendered copy uses no FR-131 banned word except immediately negated and never "private"/"secure"; states FR-131 (a), (b), (c); retired claims absent; en source strings are what renders; Arabic mirror carries the same truth (v2.5.0) | web | 4 |
| UT-0872..0884 | proposals & debate web flow: Worker gate reads as disclosure not judgement, no filing form for a Supporter, both proposals rendered identically, both authors named, no control acts on another's proposal, provenance-not-precedence tag, eight-stage track, no skip control, open-tier deliberation stated and exercised, non-dismissable coercion notice before the ballot, honest open-tier refusal, trail order + v1 note, jargon and absence scans | web | 18 |
| UT-0889 | endorsement-copy honesty guard (FR-131 clause (e); DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §5.4): `home.steps[1].body` states public-act/name-not-shown/records-can-link, no "kept private"; `home.promises[0]` states "never publish", no "never learn"; neither string contains "private"/"anonymous"/"receipt-free"/"secure"; en source strings render on the landing page; Arabic mirror carries no "اسمك سريًا" phrase or "لا نعرف" claim (v2.7.0: tightened from a bare "سري" substring ban — ISS-06); the sdk AUTHORSHIP_REQUIRES_WORKER_TIER refusal no longer claims Supporters are anonymous; jargon filter clean over both new strings (v2.7.0, ISS-03) (v2.6.0; v2.7.0) | web | 6 |
| (SDK core) | identity, proofs, transports, verified reads, prediction, client, scopes | sdk | 124 |
| **Total** | | | **625** |

Note: the SDK total of 244 comprises 124 (core) + 36 (seams UT-0760..UT-0779) + 38
(UT-0780..UT-0818 + UT-0831 party-creation service) + 22 (UT-0819..UT-0830 membership) + 24
(UT-0832..UT-0848 proposals, v2.4.0). The web total of 101 comprises 16 (original
UT-0700..UT-0742) + 27 (UT-0841..UT-0857 party-creation web tests) + 27 (UT-0858..UT-0870
join-membership web tests) + 1 (UT-0871 type-shim sync guard, v2.3.2) + 18 (UT-0872..UT-0884
proposals & debate, v2.4.0) + 2 (UT-0885..UT-0886 Worker informed consent, v2.4.2) + 4
(UT-0887 vote-surface banner, v2.5.0) + 6 (UT-0889 endorsement-copy guard: 5 at v2.6.0, +1
jargon-scan assertion at v2.7.0, ISS-03). (Through
v2.4.3 this sentence stated the web total as 89 while its own addends summed to 91 and
`npm test` reported 91 — corrected at v2.5.0.) The
protocol total of 151 comprises 126 (as below) + 24 (UT-0087..UT-0095 proposals, v2.4.0) + 1
(UT-0888 flag description, v2.5.0); that 126 comprises 82 (original UT-0001..UT-0055) + 44
(UT-0060..UT-0086). The ui total of 18 comprises 14 (UT-0750..UT-0758) + 4 (UT-0759, v2.5.0).
Every `UT-####` maps to an `FR`/`NFR`/`RISK` in the RTM (Doc 08) — the new UT-0889 block's
TC row is owed to the tester (§7 item 26). **(v2.7.0, ISS-01 correction:** the
UT-0887/UT-0759/UT-0888 TC rows are **not** owed — Doc 07 v2.6.0 / Doc 08 v2.9.0, both
Approved 2026-09-06, carry `TC-3564`..`TC-3569` for them. The FR-131 Must row is not "owed" in
the sense of missing documentation either: Doc 08 v2.9.0 records it **OPEN (G-PHASE3)**, a
requirement-completeness gap on the unbuilt DES-098 acknowledge control (item 26(d)), not a
TC-authoring gap.)
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
| **Jargon filter clean** | No new user-facing string contains the banned vocabulary (§2.2, DES-085) | Per-story jargon-scan test (safety-surfaces / party-creation / join-membership / proposals pattern) — **not** a CI step; see §2.2 (v2.7.0 correction) |
| **No out-of-scope feature** | No application feature outside the commissioned story scope is shipped | Code review against the commissioning brief |
| **Honesty copy matches DES verbatim** | User-facing copy in UI components matches the approved DES element table (e.g. DES-094 backing-aware sub-table) verbatim, character-by-character | Test assertions use exact strings; reviewers verify against the SDD |
| **Capability-absence tests** | Where a guarantee is the absence of something, a test asserts that absence (§4, §2.5) | Test file and CI |
| **Clause 7 backing-aware tests** | Where a component selects content based on backing properties, the four-path test (absent/false/true/malformed) is present | UT-0758 pattern |

**Recorded deviation from the "Honesty copy matches DES verbatim" bar (v2.5.0).** The `ver`-state
v1 title in `packages/ui/src/PrivacyStatus.tsx` is "Verified", not the "Verified — private" that
the Doc 03 §10.12.3 backing-aware sub-table lists for its v1 row. FR-131 (Doc 02 §4.45) is
normative over the SDD's copy table; Doc 09 v1.3.0 (REL-LIM-18, ISS-03) routed the word as a
pre-mount blocker; the approver directed the correction on 2026-09-05. The v2 row ("Verified —
private", unlinkable === true) is unchanged and still matches verbatim. **(v2.7.0, ISS-01
correction:** the SDD cascade landed at Doc 03 v2.12.0, and Doc 03 is now v2.13.0, Approved —
the §10.12.3 sub-table v1 row title now reads "Verified" with the overruling annotated
(Doc 03 line 1766), so this deviation is no longer a gap between Doc 06 and Doc 03; it is
recorded here only as history of the original ISS-03 finding. UT-0759 remains the regression
guard on the shipped copy.)

**Reading level of the new vote-surface banner (v2.5.1, §2.2 / NFR-023).** The en banner body
is eight sentences, the longest 18 words (v2.6.0: corrected from "17 words" — ISS-C2-01,
`06-coding-and-ut-v2.5.1-technical-cycle2.md`; the eight sentence lengths are 8/10/14/9/18/17/6/11,
so the longest is sentence 5, "But the record exists, and it could be shown if somebody
pressures you to prove how you voted."), after the v2.5.1 split; the jargon filter is clean
(UT-0884 scans the proposals surface that mounts it; UT-0887 guards the copy itself). It reads
denser than the retired copy because FR-131(a) mandates the vocabulary "not anonymous, not
receipt-free and not coercion-resistant" — that residue is compelled by the requirement and is
recorded here rather than softened away.

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
- v2.6.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.6.0-technical-cycle1.md` — FAIL (94%, 0C/0H/1M/5L, reviewer: tester Ji-woo Park, neutral). Code accepted as correct (byte-exact against DECISIONS §4/§5/§5.3; UT-0889 verified to satisfy all five §5.4 requirements and to fail on every retired string); the FAIL is on the document. ISS-01 (Medium): §7 item 26(a)/(b)/(c), the change-history "Not done in this session" clause, the §3 closing note and the §4a "until it lands" sentence all still published as owed three cascades that had already closed (Doc 03 v2.13.0, Doc 09 v1.9.0, Doc 07 v2.6.0/Doc 08 v2.9.0) and mis-stated the FR-131 RTM row as owed rather than OPEN (G-PHASE3). ISS-02 (Low): §5.0 missing the v2.5.1 cycle-2 entry. ISS-03 (Low): no jargon scan over the two new landing strings. ISS-04 (Low): §2.2/§4a asserted a CI jargon-filter step that does not exist. ISS-05 (Low): the clause-(e) residue inventory omitted `PrivacyStatus.tsx`'s unmounted `anon` state and mis-stated the reason `private_endorsement` stands. ISS-06 (Low): the Arabic `'سري'` substring assertion is brittle against ordinary words sharing the root. All six reworked into v2.7.0 (a Medium forces at least a minor bump).
- v2.5.1 cycle 2: `artifacts/reviews/06-coding-and-ut-v2.5.1-technical-cycle2.md` — PASS (98%, 0C/0H/0M/2L, reviewer: tester). Both Lows (ISS-C2-01 reading-level arithmetic; ISS-C2-02 tsbuildinfo hygiene register entry) folded into v2.6.0 rather than carried further (Doc 06 §4a and §7 item 27).
- v2.5.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.5.0-technical-cycle1.md` — PASS (96%, 0C/0H/0M/6L, reviewer: tester). All six Lows reworked into v2.5.1 rather than carried (ISS-01 sweep enumeration, ISS-02 §7 item 17 scope, ISS-03 banner sentence length, ISS-04 tracked tsbuildinfo, ISS-05 test header, ISS-06 SDD cascade scope).
- v2.4.3 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.4.3-technical-cycle1.md` — PASS (100%, 0C/0H/0M/0L). Approved 2026-08-29.
- v2.4.2 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.4.2-technical-cycle1.md` — PASS (98%, 0C/0H/0M/1L). The reviewer confirmed both FR-080 clauses are genuinely satisfied by the consent copy, not gestured at. The Low (stale gate copy) is reworked into v2.4.3.
- v2.4.1 cycle 2: `artifacts/reviews/06-coding-and-ut-v2.4.1-technical-cycle2.md` — PASS (100%, 0C/0H/0M/0L). Approved 2026-08-29.
- v2.4.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.4.0-technical-cycle1.md` — PASS (97%, 0C/0H/0M/2L). Both Lows reworked into v2.4.1 rather than carried: they were tests reading as though they were the primary guard when they were the UI half only, which is the failure §2 rule 2 exists to prevent.
- v2.3.3 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.3.3-technical-cycle1.md` — PASS (98%, 0C/0H/0M/0L). Approved 2026-08-29. (This line read "pending" until v2.4.0 — corrected; the same stale-review-record defect the loop caught at v2.3.1 and v2.3.2.)
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
17. **Arabic strings are a working-draft engineer translation — including the vote-surface
    coercion warning.** The i18n strings in `apps/web/src/i18n/ar.ts` (party-creation
    section, and since v2.5.0 the vote-surface safety copy `banner.notReceiptFreeTitle` /
    `banner.notReceiptFreeBody`) are engineer-authored and flagged for translation-quality
    review at Doc 14 (the technical-writer phase). **(v2.5.1)** The banner strings MUST have a
    native-speaker review before any Arabic-locale customer deployment: a mistranslated coercion
    warning is a safety defect, not a polish item. UT-0887 guards their substance (no retired
    "your vote is secret" claim; the platform-can-see statement present), not their fluency.
18. **PrivacyStatus not rendered in the party-creation demo flow.** The petitions/new page demo
    has no authenticated session; DES-094 clause 1 would return null. Rendering PrivacyStatus
    without a session would be dishonest (it would imply a session-backed guarantee that does not
    exist). The absence is deliberate and documented in the page source comment.
    **(v2.5.0)** The Doc 09 v1.3.0 REL-LIM-18 pre-mount blocker on this component — the `ver`
    title "Verified — private" — is cleared: the title is backing-aware (UT-0759), and the v1
    fail-honest default carries no FR-131 banned word. The non-render decision above is
    unchanged; the component is still mounted on no shipped surface.
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
23. **The type-shim sync guard (UT-0871) covers `IPartyStore` only.** The new proposals
    modules add exports to both `trumocracy-protocol.d.ts` and `trumocracy-sdk.d.ts`
    (`PARTICIPATION_TIER`, `PROPOSAL_STAGE`, `STAGE_ORDER`, `ProposalService`,
    `InMemoryProposalStore`, `IProposalStore`, …) which are hand-written and **not** covered
    by a member-set equality test. `tsc --noEmit` catches a *missing* declaration the moment
    the app uses it, but not a declaration that drifts from the JSDoc in a way the app never
    exercises — the same class of gap ISS-C2-01 found. Extending UT-0871 to the proposals
    surfaces is owed (it is also the standing ISS-C3-01 backlog item for
    `PartyCreationService`).
24. **FR-092's public-reconstruction half is not built.** `decisionTrail()` is complete and
    append-only, but it lives in the application store. FR-092 requires the trail be
    "reconstructable end-to-end by any third party from public data alone", which needs the
    DES-097 audit-record anchoring (Doc 13 stage S-8). The web surface states this plainly
    (`trail-v1-note`) rather than implying the record is already independently checkable.
    The FR-092 RTM row does **not** close on this drop.
25. **The proposals demo advances stages by a button; production advances on a timeline.**
    FR-091 requires stage transitions "executed by code per published timelines". The
    service enforces the *order* (one step, no skip, no veto), which is the anti-capture
    half, but the *schedule* — driving transitions from `governance.js` `schedule()` — is
    not wired in this drop. The demo control can only ever move one step, because the
    service exposes no other move. Timeline wiring is owed before the FR-091 row can claim
    the "per published timelines" clause.
26. **REL-LIM-18 is closed in code; the endorsement-copy and FR-082-refusal strings are fixed
    at v2.6.0 under FR-131 clause (e); of the four cascades once owed elsewhere, three closed
    on 2026-09-06 and only the DES-098 control (d) remains open (v2.7.0, ISS-01).** (v2.5.0)
    The five FR-131-violating vote-surface strings and the PrivacyStatus pre-mount blocker are
    fixed at that version (change history). *Originally recorded as owed, three now closed —
    see the dated annotations after each sub-item:*
    (a) **architect, Doc 03** — §10.12.3 backing-aware sub-table v1 row title and the "FR-131
    banned-words analysis" note that ruled "Verified — private" compliant (overruled by Doc 09
    v1.3.0 ISS-03 and the approver, 2026-09-05); **(v2.5.1)** the §10.12.3 three-state
    reference table's `ver` title cell ("Verified — private") and its v2.7.1 normative note,
    which scopes the "informational reference copy" caveat to the `ver` *subtitle* only and so
    now under-covers the title — an engineer taking that row as the title spec would hardcode
    the v2 claim, the exact failure the note exists to prevent; and §13 "Public tallies in Phase 1", whose
    mitigation column still instructs the client to state that "Phase-1 votes are anonymous but
    not receipt-free" — the retired framing the code no longer carries.
    **~~(a) OWED~~ — CLOSED (v2.7.0, corrected against review finding ISS-01,
    `06-coding-and-ut-v2.6.0-technical-cycle1.md`).** All three sub-items landed at **Doc 03
    v2.12.0**, and Doc 03 is now **v2.13.0, Approved**: the §10.12.3 backing-aware sub-table v1
    row title now reads "Verified" with the overruling annotated (Doc 03 line 1766); the
    three-state reference table's `ver` title cell now carries the v1-default caveat and its
    note is corrected ("A note that guards one cell of a two-cell row does not guard the row",
    Doc 03 line 1753); §13 "Public tallies in Phase 1" now states the FR-131 truth instead of
    "anonymous but not receipt-free" (Doc 03 line 2955). Nothing further owed to the architect
    on this item.
    (b) **sre, Doc 09** —
    the REL-LIM-18 row and the §"What this release does not do" bullet still describe the five
    strings as shipped; they are fixed at this commit and the row should move to closed with
    the commit SHA.
    **~~(b) OWED~~ — CLOSED (v2.7.0, ISS-01).** Doc 09 is now **v1.9.0, Approved**: the
    `REL-LIM-18` row reads `~~REL-LIM-18~~ **CLOSED — all five strings are fixed in commit
    `0a5c542`**` with both commit SHAs (`0a5c542`/`84e2203`), Doc 09 line 909. Nothing further
    owed to the sre on this item.
    (c) **tester, Doc 07/08** — TC rows for UT-0887, UT-0759 and UT-0888, and
    the FR-131 RTM row.
    **~~(c) OWED~~ — CLOSED (v2.7.0, ISS-01).** Doc 07 is now **v2.6.0, Approved** and Doc 08
    is now **v2.9.0, Approved** (both 2026-09-06): `TC-3564`..`TC-3567` cover UT-0887,
    `TC-3568` covers UT-0759, `TC-3569` covers UT-0888 — all six authored, reviewed and
    approved. Doc 09 line 1034 states it in terms: those rows are "authored, reviewed and
    approved, and Doc 06 v2.5.1 §7 item 26(c) is closed — not merely discharged into review."
    **The FR-131 Must row itself is not part of this closure and was never meant to be:** Doc 08
    records it **OPEN (G-PHASE3)** (Doc 08 line 16, 81-82) — a requirement-completeness gap (the
    ballot-surface acknowledge control, item (d) below, is unbuilt), not a documentation gap.
    The only `TC` row still owed by the tester is **UT-0889's** (new at v2.6.0/this version).
    (d) **DES-098 acknowledgement step** — FR-131 requires that "the voter
    MUST acknowledge the notice to proceed"; the banner is non-dismissable but has no
    acknowledge control. That is SCR-13 story scope, not this defect fix, and it stays owed —
    **this is the only item under this numbered list still open** after the v2.7.0 correction
    above.
    **(v2.6.0) Fixed at this version, under Doc 02 v2.17.0 FR-131 clause (e) (product-owner
    Ruling B, approver-confirmed 2026-09-06;
    `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11) — no longer "left in
    place":** the landing-page endorsement copy `apps/web/src/i18n/en.ts` `home.steps[1].body`
    ("Support a new party with your name kept private…") quoted a v2 (Definition-B) target
    property as shipped v1 behaviour — a Grade-8 reader would take it to mean Trumocracy
    cannot link the backing to them, which is false in v1 (FR-014/FR-015 cannot be satisfied
    without that link) and, worse, backing is a **public act by design** (Doc 14 §2.2), so the
    claim was the opposite of what the product does, not merely incomplete. REPLACED with the
    DECISIONS §4.1 copy (public act, name not shown, our own records can link, only back a
    party you are content to be seen supporting), mirrored in `ar.ts` (§4.2, engineer working
    draft — native-speaker review owed, ARABIC-I18N). The adjacent, same-page finding
    `home.promises[0]` ("We never learn which party you support.") was flatly false — FR-131(b)
    states the platform database CAN see party membership — and is REPLACED with the DECISIONS
    §5.1 copy ("We never publish which party you belong to…"), mirrored in `ar.ts` (§5.2). The
    third finding, reached by clause (e) (DECISIONS §5.3, approver-confirmed): the
    `AUTHORSHIP_REQUIRES_WORKER_TIER` refusal in `packages/sdk/src/proposals.js` ("...because
    authorship is public and Supporters are anonymous...") is a **user-facing** message and is
    REPLACED with "...because authorship is public and a Supporter's participation is never
    published. Worker tier is self-declared — no one approves it." (true in v1: no
    participation record exists for a Supporter); the paraphrase in
    `ProposalsAndDebate.tsx`'s header doc comment (~line 17) is corrected to match. Regression
    guard: **UT-0889** (`apps/web/test/safety-surfaces.test.tsx`), the UT-0869 pattern applied
    to this copy — asserts the en source strings, the rendered landing page, the Arabic mirror,
    and the sdk refusal message.
    **Still stand, and why:** `packages/protocol/src/proposals.js` (~23, ~67) — these are doc
    comments describing FR-082 as a *requirement*, not a user-facing claim, so clause (e) does
    not reach them as overclaims; each now carries a "(FR-082 — Definition-B property; §16.3
    DEFERRED-v2)" marker (DECISIONS §5.3, SHOULD) so a reader does not mistake a v2 target
    property for shipped v1 behaviour. `packages/sdk/src/ballot.js` (`choice` typedef, "absent
    in v2 for receipt-freeness") **stands because it names the phase explicitly** ("absent in
    v2...") and declares v1 honestly (`receiptFree: false`). **(v2.7.0, ISS-01 review
    ISS-05(ii) — reason corrected):** the `private_endorsement` flag **description string**
    itself — `'Charter option: fully private petition endorsement for high-risk
    jurisdictions.'` — names no phase; the earlier "they name the phase" justification was
    imprecise about this second site. The correct reason it stands is that the flag entry is
    **developer-facing configuration, not public-facing copy**, and the phase lives in the
    sibling fields on the same object (`removeBy: 'Phase 4'`, `defaults.prod: false`) —
    conclusion unchanged (it stands; DECISIONS §5.3), reasoning corrected.
    **(v2.7.0, ISS-01 review ISS-05(i) — one more site inventoried):**
    `packages/ui/src/PrivacyStatus.tsx:251-252`, the `anon` state's `title: 'Anonymous'` and
    `subtitle: 'Nothing you do here is linked to you'`, was not previously named here. It is
    **not public-facing today** — the component is mounted on no shipped surface (six explicit
    non-render comments across five consuming files, re-verified by Doc 09 v1.9.0) — so clause
    (e) does not bite yet. It is, however, precisely the string a future mount would ship, on
    the same footing as the `ver` title this item's (a) sub-item already tracked once before it
    shipped wrong: **flagged here for re-copy-review against clause (e) before first mount.**
    **Still owed, unchanged by
    this fix:** (d) the DES-098 acknowledge-to-proceed control — FR-131 requires "the voter MUST
    acknowledge the notice to proceed"; the banner is non-dismissable but has no acknowledge
    control. That is SCR-13 story scope, not a copy fix, and stays open under US-0134. The
    enrolment/verification copy question (`home.steps[0].body`, `home.promises[3]`) is a
    **separate, not-yet-ruled** question (DECISIONS §7.1, tracked Doc 02 §13 (j)) and is
    untouched by this version.
27. **`apps/web/tsconfig.tsbuildinfo` hygiene (ISS-C2-02,
    `06-coding-and-ut-v2.5.1-technical-cycle2.md`) — RESOLVED, recorded here rather than only
    in the change history log.** The v2.5.1 ISS-04 rework reverted the file and kept it out of
    that drop's commit, but the untrack + `.gitignore` half was deferred to a separate
    `chore(infra)` commit that had, at cycle-2 review time, not yet landed. It has since landed
    (commit `84e2203`): `git ls-files apps/web/tsconfig.tsbuildinfo` returns nothing (untracked)
    and `.gitignore` carries a `*.tsbuildinfo` entry. Nothing further owed.

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
