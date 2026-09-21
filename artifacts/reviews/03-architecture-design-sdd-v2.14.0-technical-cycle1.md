# Document Review Report — Doc 03 Architecture & Design (SDD) v2.14.0, technical, cycle 1

> Produced by the **document-review** skill. The reviewer **scores and lists issues only — it never
> edits the reviewed document**. Rework is the **architect's** (Ravi Deshmukh), as a new version.
> Independence: reviewer is the **tester** (Ji-woo Park, new instance), PM-assigned before dispatch
> per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md`. The reviewer owns neither
> Doc 03 nor Doc 04 and authored neither. Docs 07/08 are **reviewer-qa's** and are not ruled here.

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.14.0
Review mode: technical
Reviewer role: tester
Score: 93%
Critical: 0
High: 0
Medium: 2
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

v2.14.0 rules `OPEN-27` and **the ruling is right**. I did not take its code claims on assertion: I
read `packages/ui/src/PrivacyStatus.tsx:251-252`, `packages/ui/test/PrivacyStatus.test.tsx:32` and
`:208`, grepped the six non-render comments across the five consuming files, read Doc 02 v2.17.3
§4.45 clause (e) and §8 Scenarios 8 and 9 directly, read Doc 14 §2.2, checked the
`private_endorsement` flag ledger, and ran the suite. **Every load-bearing factual claim in this
version is true.** The lapse-vs-requirement-change distinction **holds** and is the correct
direction of authority. The endorse-context finding — that no single static subtitle can be honest
across clause 8's three contexts — **holds** and is the most valuable thing in the increment.
Clause 10 is genuinely in the form clauses 7 and 9 take, its enumerated set matches clause 8's three
contexts exactly, and its fail-honest default is true in all three.

The **FAIL is not on the ruling**. It is on the document's own stated standard — *"a correction that
does not reach every place it claims to reach is this family's signature defect"* — which this
version asserts twice and misses twice. (1) The **v2.7.1 "Interpretive basis" and "FR-124(b)
aggregate-only policy" paragraphs** — the author's gloss that the ruling expressly says clause (e)
displaces — are left live and unmarked **above** a supersession banner scoped to the decisions
"below". (2) The **Downstream instruction to Doc 04 enumerates five carve-out sites when there are
six**; the omitted sixth (Doc 04 §11.2's tooling register row) is still live and stale in Doc 04
v1.7.0 as a direct consequence. That is precisely the failure the same sentence warns of.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`93%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (2)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 96 | 19.20 | Clause (e) quoted operatively, §8 Scenarios 8 **and** 9 engaged, FR-122/123/124(b), NFR-023, FR-014/015, Doc 14 §2.2, H-16/H-18, T-01/T-02. Two new §11 failure-mode rows for FR-131(e)/DES-094. |
| T2 Soundness | 20 | 94 | 18.80 | Ruling correct on the text; five rejected alternatives + three rejected titles recorded to the ADR standard; the "no trigger fired, the requirement changed" distinction is right. ISS-04, ISS-05 sit here. |
| T3 Traceability & IDs | 20 | 86 | 17.20 | No id reused or renumbered; `OPEN-28/29/30` minted cleanly off a verified `OPEN-27` high-water mark; §15 footnoted; §10.13.6 corrected. **ISS-01 and ISS-02 land here.** |
| T4 Security & failure modes | 15 | 97 | 14.55 | Fail-honest default + express no-inference bar + five-condition render trigger + `ar` human gate. The strongest section of the version. |
| T5 Completeness & testability | 15 | 96 | 14.40 | Clause 10(g) names the four-path `UT` shape, the exact strings, the `aria-label` assertion, and the green test that pins the defect. `TC`/RTM routed under `US-0134`, nothing fabricated. |
| T6 Convention compliance | 10 | 93 | 9.30 | RFC 2119, ISO-8601, named owners, annotate-don't-delete observed nearly everywhere; ISS-01 is partly a convention miss. |
| **Total** | **100** | — | **93.45 → 93%** | — |

## 4. Verification log — what I checked against HEAD rather than accepted

| Claim (Doc 03 v2.14.0) | Method | Result |
|---|---|---|
| `PrivacyStatus.tsx:251-252` carries `title: 'Anonymous'` / `subtitle: 'Nothing you do here is linked to you'` | `sed -n '248,256p'` | **TRUE**, exactly those lines |
| `packages/ui/test/PrivacyStatus.test.tsx:32` asserts `getByText('Anonymous')` | read file | **TRUE**, line 32 exactly |
| its banned-word regex (line 208) is scoped to the `ver` state | read file | **TRUE** — line 208 `const BANNED = /\b(private\|anonymous\|receipt-free\|secure)\b/i;` is inside `describe('UT-0759 … ver-state title …')`. **A green test pins the non-compliant string.** |
| Six explicit non-render comments across five consuming files | grep `apps/web/src` | **TRUE** — `ProvisionalStatus.tsx:11`, `PartyMembership.tsx:26`, `parties/page.tsx:19`, `proposals/page.tsx:22`, `petitions/new/page.tsx:13` and `:134`. No `import { PrivacyStatus }` anywhere in `apps/web`. **No citizen sees either string.** |
| Suite still 640/640 | `npm test` | **TRUE** — 95 + 151 + 244 + 18 + 16 + 116 = **640 passed, 0 failed**. No code or test changed this session. |
| Endorsement is public by design (Doc 14 §2.2) | read `docs/14-user-guide.md:600-614` | **TRUE** — "it will be a **public act**, on purpose"; "only back a petition if you are comfortable being seen to support it". |
| `private_endorsement` is a Phase-4 flag OFF in v1 | Doc 06 §flag ledger line 1046; Doc 09 line 1028 | **TRUE** — dev `on`, staging `off`, prod `off`, Phase 4; listed under prod-default OFF flags. |
| Doc 02 pin v2.16.3 → **v2.17.3** is load-bearing | `docs/02` header + §4.45 | **TRUE and material** — clause (e) entered at v2.17.0; the old pin predated the text this section rules on. Doc 02 is v2.17.3 Approved at HEAD. |
| Other pins (Doc 05 v2.5.0, Doc 06 v2.8.1, Doc 07 v2.8.1 @HEAD, Doc 08 v2.11.3 @HEAD, Doc 09 v1.9.0) | headers + `git show HEAD:` | **TRUE** as at HEAD, and correctly flagged as in flight for 07/08 |
| `OPEN-28/29/30` are new; `OPEN-27` was the high-water mark | `git show HEAD:docs/04…` id scan | **TRUE** — max at HEAD was `OPEN-27`; no reuse, no renumbering |
| Screen 3.6's copy is not shipped; `en.ts` carries "anonymous" only in clause (a)'s negated form | grep `apps/web/src/i18n` | **TRUE** — only `banner.notReceiptFreeTitle` / `…Body` |

## 5. Rulings the assignment asked for

**(a) Does the lapse-vs-requirement-change distinction hold, or is it a way of reaching a
conclusion the trigger list would not support? — IT HOLDS, and it is the correct direction of
authority.** Three grounds, in ascending order of force. First, on the literal text: trigger (iii)
fires only if FR-131 is amended "to ban the four words **unconditionally** rather than 'to describe
v1 voting behaviour'". Clause (e) **widens** the scope to any participation act but keeps the ban
**conditional** — the words remain permitted where they do not describe a participation act. It did
not fire. Doc 04 v1.6.0's retained analysis walks exactly this point at `docs/04:1200-1216` and is
right. Second, triggers (i), (ii) and (iv) are plainly untouched, and I checked (iv)'s standard —
"shows" — against the 2026-09-06 honesty review, which took no badge evidence. Third and decisively:
**a re-open trigger list attached to a design disposition cannot limit the reach of the requirement
the disposition applies.** The triggers are a self-imposed revisit prompt in Doc 03; FR-131 is a Must
in Doc 02. If a trigger list could gate whether a widened requirement is applied, a lower-tier
document would be narrowing a higher-tier one by drafting. The disposition's premise ("the ban is
voting-scoped") became false; its conclusion stopped following; that is an application question, not
a lapse question. The architect's formulation — **"No trigger fired; the requirement changed"** — is
the honest one, and the version gains credibility by refusing the easier route of declaring a lapse.

**(b) Does the endorse-context finding hold? — YES, and it is the load-bearing finding.** Verified
independently: Doc 14 §2.2 says the act is public on purpose and warns the citizen to weigh being
seen; `private_endorsement` is `off` in staging and prod and marked Phase 4 in Doc 06's ledger and
Doc 09's prod-default list. So "not made public" is **true** on browse (1.2) and join (1.6) under
FR-124(b) and **false** on endorse (2.3). A single static subtitle therefore cannot be honest across
clause 8's three contexts, and any one-string fix trades a clause-(e) breach in one direction for
one in the other — in the direction of the one act where exposure is the whole point. `OPEN-27` did
read like a two-string word swap; it is not. Clause 10's context-selection is the right remedy and
the fail-honest default ("Our own records can link what you do here to your account.") is genuinely
claim-least: it asserts nothing about publication and is true in all three contexts.

**(c) Is `packages/ui/test/PrivacyStatus.test.tsx` really pinning the defect? — YES.** Line 32
asserts `getByText('Anonymous')` and line 208's banned-word regex is inside the `UT-0759` `describe`
block, which is `ver`-scoped. The `anon` state has no banned-word assertion at all. The engineer's
`OPEN-28` work must change the assertion with the constant or the suite goes red on a compliant
string. Confirmed as written.

**(d) Do the carried Lows discharged/folded exceed the dispatch? — NO, they were in scope.** The
dispatch row 3 named only `OPEN-27`. But Doc 03 v2.13.0's **Approved status line** carries a
standing direction from its own reviewer: *"Two Lows carried — fix first on any future touch."* That
is an obligation attached to the document, binding on any touch by the owning role, not a dispatch
item; it does not need re-authorisation. Carrying them past a **debt-closure** increment would have
been the defect. The architect also named the separable ops (Doc 03 OP 4) so the PM could have
dropped them, which is the right way to exceed a dispatch. I agree with the PM. **No issue raised.**

**(e) Does clause 10 warrant an ADR? — NO.** Clauses 7 (v2.7.1) and 9 (v2.12.0) are structurally
identical normative copy-selection rules with fail-honest defaults, both minted in §10.12.3 without
an ADR, both reviewed and PASSed. Clause 10 is the third of the same series in the same declared copy
authority; a third ADR for the third ruling would fragment exactly the authority the section exists
to concentrate, and the `Downstream` paragraph's own diagnosis of the v2.7.0 failure is copy rulings
living away from the copy authority. The ADR's substantive value — alternatives considered and
rejected with reasons — **is delivered in-line** (five alternatives plus three rejected titles, each
reasoned). The one arguable ADR hook is that clause 10 introduces a new component input
(`anonContext`) and a render **bar**; but `backingProperties` was specified the same way under
DES-094 without one. Precedent and concentration both point the same way. **No issue raised.**

**(f) Is `OPEN-29` named-without-ruling the right call, or an evasion? — RIGHT CALL.** It passes the
three tests that separate routing from evasion: it is **outside `OPEN-27`'s scope** (a wireframe
quotation in clause 6, not the two `PrivacyStatus` constants the item named); it is **verifiably not
urgent** — I confirmed the string is nowhere in `apps/` or `packages/`, and `en.ts` carries
"anonymous" only in clause (a)'s mandated negated form; and it is **registered with an id, a named
owner (Ravi Deshmukh) and a trigger (next Doc 03 increment)** in Doc 04 §13, so it cannot be lost.
Ruling it here — on a site given none of the analysis depth the two in-scope strings received —
would have been the half-done outcome the session brief expressly warns against. Naming a site is
not ruling it, and the discipline is the same one by which Doc 06 §7 item 26 surfaced the two
strings that *were* ruled.

## 6. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | T3 / T6 | §10.12.3, lines **1977** and **1979** (the "Interpretive basis" and "FR-124(b) aggregate-only policy" paragraphs), read against the supersession banner at line **1985** | The banner is scoped: *"both `anon` decisions **below** are OVERRULED"*. The two paragraphs that sit **above** it are the v2.7.1 **interpretive basis** — the author's gloss reading "linked" as "***publicly*** linked" — which is precisely what FINDING 1 says clause (e) displaces ("clause (e) is not a publication rule … it expressly makes the ordinary reader's reading govern over the author's gloss"). They are left **live and unannotated**, and line 1979 still closes: *"This is the operative basis on which 'linked to you' is truthful in the public sense."* A reader working top-down through §10.12.3's `anon` analysis meets that sentence as current before reaching any supersession marker. The change entry's "**Sites changed — all of them**" list does not include them. This is the same shape as the defect the version itself names three times: *"A note that guards one row of a three-row table does not guard the table."* | Annotate **in place**, per annotate-don't-delete, at both paragraphs: the interpretive basis is **superseded as the basis for the `anon` copy** by the v2.14.0 ruling and clause 10, and is retained as the record of the reasoning clause (e) displaced. State that the FR-124(b) fact itself (publication is aggregate-only; endorsement is published **pseudonymously**, not identity-linked) **remains true** and is what clause 10(b)'s `'browse'` and `'join'` strings rest on — so the reader can tell which half survives. Add both sites to the change entry's site list. |
| ISS-02 | **Medium** | T3 | §10.12.3 **Downstream**, line **2037** | The paragraph instructs Doc 04 "**at every site that carries the carve-out**" and enumerates **five**: S5's named exception, S5 rule 4's count, S4's scope-before-count sentence, §1.4's roll-call, §13's `OPEN-27` row. There is a **sixth**: Doc 04 **§11.2** (Tooling — what exists and what must be added), line 2615, whose live register row for the build-failing S5 denylist control reads *"**Two carve-outs only:** clause (a)'s mandated negated forms, and the **named `anon`-badge exception**. See §0.5 S5."* That row was last touched at Doc 04 v1.5.0 **for this very scan**, so it is a known S5 site. The under-enumeration is the direct cause of Doc 04 v1.7.0 leaving it stale — the outcome the very same sentence warns of: *"a withdrawn carve-out surviving in one of five sites is a build-failing scan quietly not failing."* | Correct the enumeration to name **six** sites, adding Doc 04 §11.2's tooling-register row, and re-issue the instruction. (The stale row itself is Doc 04's to fix — raised there as its ISS-01 — but the instruction that missed it is Doc 03's.) |
| ISS-03 | Low | T3 | §5.2, DES-094 register row (line 1932) | The row's implementation cell still reads "`packages/ui/PrivacyStatus` (**not yet created — Coding phase**)". The component exists and is the subject of this entire ruling; v2.14.0's own facts (`PrivacyStatus.tsx:251-252`; a green test pinning the string) depend on it existing. Pre-existing, not introduced here, but this version is the one that made the register row's staleness consequential. | On the next touch, annotate the cell to record that `packages/ui/src/PrivacyStatus.tsx` is built, is **mounted on no shipped surface**, and is governed for `anon` copy by §10.12.3 clause 10. |
| ISS-04 | Low | T2 | §10.12.3 FINDING 2 (line 2015), clause 10(b)'s `'endorse'` string (line ~2070), and §11's new FR-131(e) endorsement row (line 3153) | All three cite Doc 14 §2.2 as though it stated a present fact. Doc 14 §2.2 is written in the **future tense** — "When backing ships, **it will be** a public act, on purpose" — and petition endorsement is unshipped in v1 (contract skeleton only, Doc 09). Clause 10(b)'s `'endorse'` string is present tense. The conclusion is unaffected, because the string cannot render before the endorse surface exists, but the citation currently overstates its source's tense. | One clause at the citation: Doc 14 §2.2 states the posture **for when backing ships**, and clause 10(b)'s `'endorse'` string renders only on a shipped screen 2.3, so the tenses meet. |
| ISS-05 | Low | T2 / T4 | §10.12.3 render trigger condition **(ii)** (line 2029) against the leak-check table (line ~2085) | Condition (ii) is new and normative: *"a mount that cannot supply one is not permitted."* Combined with clause 10(b)'s three-value enumerated set, it **bars the `anon` pill from any surface other than screens 1.2, 1.6 and 2.3**. The leak-check table immediately below lists the privacy pill on **thirteen** screens without saying which may show `anon`. This is **consistent** with clause 8's pre-existing three-context enumeration, so it is not a contradiction — but v2.14.0 converts what was a disclosure-scope list into a **render bar**, and the document does not say so where a reader would look. | One sentence reconciling the two: clause 8's three contexts are now also the **exhaustive** set of `anon`-render surfaces in v1; the other ten pill screens render `ver`/`pub`; adding a fourth `anon` context requires an edit to clause 8 and clause 10 together (the "one list, two obligations" property clause 8's v2.14.0 annotation already claims). |

> **Low** issues do not block the pass bar. The two **Mediums** each force the FAIL.

## 7. Routing instruction

**FAIL → route to the owning role: architect (Ravi Deshmukh).** Fix **ISS-01** and **ISS-02**; fold
**ISS-03**, **ISS-04** and **ISS-05** on the same touch if the operations are cheap, or carry them
explicitly in the status line with "fix first on any future touch" (the convention that worked for
v2.13.0's two Lows and that this version correctly honoured). Rework MUST produce a **new version**
— a Medium sets at least a **patch** bump on unchanged normative content, and since no normative
clause changes, **v2.14.1** is sufficient; set `Status: In Review` and this loop re-reviews at
**cycle 2 of 5**.

**Nothing in the ruling itself needs reworking.** Clause 10, the three findings, the rejected
alternatives, the render trigger, the `OPEN-28/29/30` mints and the `OPEN-27` closure are all
sound, verified, and MUST be carried into v2.14.1 unchanged. Both Mediums are sweep-completeness
defects, not reasoning defects.

**Ordering note for the project-manager:** ISS-02 is the upstream half of Doc 04 v1.7.0's ISS-01.
Fix Doc 03's enumeration first, then Doc 04's §11.2 row, so the corrected instruction and the
corrected site land in that order — the same sequencing discipline the PM applied when applying
these two specs.

## 8. Out of scope, as instructed — and not ruled

`OPEN-20` (`TS-PROPOSALS` heading, untouched this session); Doc 04 §14's `TC` register and its
deliberately unadvanced reconciliation pin; the clause-(e) **substance** (a product-owner ruling
CONFIRMED by the approver 2026-09-06); and **Docs 07 and 08**, which are reviewer-qa's. Nothing
about Docs 07/08 is ruled here. One routing note only, to the **project-manager**, not a finding:
Doc 07 reached **v2.9.0 Approved** on disk during this session, which **fires `OPEN-30`'s trigger**
("the first touch of Doc 04 after Doc 07 v2.9.0 is Approved") — recorded so it is not lost between
sessions.
