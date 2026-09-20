# Document Review Report — Doc 02 Requirements Specification v2.17.0 — business, cycle 1

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **reviewer-qa** (Rafael Duarte), acting as the PM-assigned neutral reviewer — **NOT**
> the document owner (the product-owner owns Doc 02). Assignment recorded before dispatch in
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. The reviewer scores and lists
> issues only; it never edits the document. All rework is done by the **owning role**
> (product-owner, Priya Raghunathan) as a new version.
>
> **Cycle numbering note:** the counter **restarts at 1** for v2.17.0, a new **minor** version.
> The v2.16.x lineage closed at cycle 4 with a PASS (96%, 0C/0H/0M/3L;
> `artifacts/reviews/02-requirements-srs-v2.16.3-business-cycle4.md`). This review is scoped to
> **the v2.17.0 delta** (four applied operations) **plus the cascade that delta obliges inside
> Doc 02**, plus re-confirmation of the three carried Lows — not a re-derivation of v2.16.x.

<!-- MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.17.0
Review mode: business
Reviewer role: reviewer-qa (neutral — product-owner owns Doc 02)
Score: 86%
Critical: 0
High: 0
Medium: 3
Low: 7
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

**The amendment itself is right, well-evidenced, and correctly applied. What fails is its cascade
inside Doc 02.**

I verified every factual claim in the v2.17.0 delta against primary sources and found **no
substantive error**: FR-014 and FR-015 are quoted and paraphrased accurately (lines 684-685);
§16.3's FR-014 `PARTIAL` / FR-015 `IN-v1` rows say what clause (e) says they say (lines 3190-3191);
§16.5 confirms FR-082 as Definition-B-only with "v1 equivalent is policy + FR-131 honest
disclosure"; §16.4 H-16/H-17/H-18 exist and H-17 reads as cited; Doc 14 §2.2 line 601 carries "it
will be a **public act**, on purpose" verbatim and lines 611-612 carry the "fully private ... not
switched on in this version" statement; `packages/protocol/src/flags.js` lines 52-58 confirm
`PRIVATE_ENDORSEMENT` `{ dev: true, staging: false, prod: false }, removeBy: 'Phase 4'`;
`apps/web/src/i18n/en.ts` lines 126-129 carry the `parties.joinPrivate` pattern clause (e) names as
approved, and UT-0869 (`apps/web/test/join-membership.test.tsx` line 444) guards it. **The ruling is
also no longer merely "presented" — `DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11 records the
approver's confirmation on 2026-09-06.**

**Application quality is excellent.** I mechanically compared each of the four `REPLACE WITH` blocks
in `artifacts/product-owner-2026-09-06T1000-endorsement-copy-spec.md` against the file: all four
appear **verbatim, exactly once** (1629 / 3245 / 6018 / 1662 chars). `git diff HEAD` shows
**+59 / -12 across exactly four hunks and nothing else**. **No transcription residue:** zero
`FIND:` / `REPLACE WITH:` leaks, zero stray fences (18 fence lines, all pre-existing pairs), zero
conflict markers, no duplicated or truncated lines at any of the four OP boundaries (header
1-60 verified line by line; the FR-131 row at line 1172 is a single intact line; the §13/§14
boundary at 3035-3043 is correctly ordered — (j)'s block, then the rule, then `## 14. Glossary`).
The ID scheme is clean: no ID reused or renumbered, no new `FR`/`BR` minted, (j) follows (i)
sequentially, and the superseded closing sentence is quoted in place per the annotate-don't-delete
convention (0 live occurrences of the un-widened form; 1 quoted occurrence).

**So why FAIL?** Because v2.17.0 changed FR-131's **scope** and stopped at the requirement row.
Doc 02 has an established, review-enforced cascade for exactly this operation — set when **clause
(d)** was added — and v2.17.0 completes none of it. Three Mediums, each with direct in-document
precedent at the same severity:

1. **No §8 Gherkin scenario for clause (e)** (ISS-01). The v2.13.0 review rated the identical gap
   for clause (d) a **Medium**: the changelog records it in the document's own words — *"ISS-03
   (Medium): FR-131 Scenario 5 added covering FR-131 clause (d)"* (line 194). Clause (e) introduces
   a novel and genuinely hard interpretive standard ("what an ordinary Grade-8 reader would take
   the claim to mean") and Doc 02 gives the tester **no acceptance criterion to trace to** — at the
   exact moment the tester is cutting Doc 07/08 for it and Doc 08 must re-close FR-131's chain.
2. **§4.45's heading and rationale are still ballot-scoped** (ISS-02) while the version's headline
   claim is that the duty is *no longer* voting-scoped. The v2.14.1 review rated the failure to
   update §4.45's preamble alongside the FR-131 row a **Medium** — *"ISS-01 (Medium): §4.45 FR-131
   preamble and §4.45 FR-131 requirement text ... at both sites"* (line 163). This matters more
   than usual here: a **ballot-scoped scope statement read literally** is the precise mechanism
   that shipped two false strings and caused this amendment.
3. **The operative prohibition of clause (e) is malformed under RFC 2119** (ISS-03): *"no
   public-facing string ... **MUST** assert ..."*. Negating the subject of a MUST inverts it — read
   literally it says only that no material is *required* to assert the claim, which obliges
   nothing. In an amendment whose entire rationale is that literal readings of imprecise normative
   text let false claims ship, a literally-null prohibition is not a cosmetic nit.

None of the three is a correctness error about the world; all three are completeness/convention
defects in how a correct ruling was landed. There are **no Critical and no High** issues — the
substance is sound and the trace is intact.

**Verdict: FAIL** — 86%, 0C / 0H / **3M** / 7L. Route to the **product-owner** for **v2.17.1**
(a patch bump is appropriate: no normative meaning changes; the fixes complete and correctly frame
a ruling already made). Cycle 1 of 5 — four cycles remain.

---

## 2. Pass-bar check

- Score >= 95%? **No** (`86%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No** (3)
- **Verdict:** `FAIL` — both rows must be all "yes"; neither is.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0-100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 97 | 19.40 | Outstanding. The change entry states the problem, the evidence, both independent grounds, what changed and — explicitly — what did **not**. Every one of its factual assertions survived independent verification against primary sources (Doc 14 §2.2, `flags.js`, `en.ts`, FR-014/FR-015, §16.3/§16.4/§16.5). The measurable outcome (a citizen in a hostile jurisdiction is not misled about a public act) is named plainly and is the right outcome. Small deduction only for the stale "presented for approver confirmation" framing (ISS-04). |
| B2 Completeness | 15 | 80 | 12.00 | The four **declared** sites are complete, non-placeholder and correctly located. But the amendment's obligatory cascade inside Doc 02 is not: no §8 Gherkin scenario (ISS-01); no §12 session-scope entry (ISS-07 — every prior version from v2.12.0 onward has one); §4.45 heading/rationale unrevised (ISS-02); §16.3's FR-131 summary row still describes FR-131 as a ballot-only notice (ISS-08). Completeness of the *delta* is high; completeness of the *change* is not. |
| B3 Traceability & IDs | 20 | 88 | 17.60 | Every ID cited by clause (e) verified against source and correct: FR-014, FR-015, NFR-023, ADR-024, ADR-025, FR-132, DES-098, DES-063, §16.4 H-16/H-17/H-18, §13 (j), UT-0869, UT-0887, Doc 14 §2.2. ID scheme clean — nothing reused or renumbered; (j) follows (i); no new FR minted (Must count unchanged). Deductions: clause (e) has **no TC/Gherkin anchor in this document** (the down-link the traceability rule requires is asserted as "owed" rather than seeded); the unqualified "§2.5" cross-reference (ISS-09); and §16.3's FR-132 row now reads ambiguously against the newly-existing FR-131 (e) (ISS-10). |
| B4 Correctness & consistency | 15 | 84 | 12.60 | Substantively accurate — I could not falsify any claim in the delta. Deductions are all consistency, not correctness: §4.45's heading/rationale contradict the widened scope (ISS-02); the `SATISFIES` safe-harbour is in tension with the `FAILS` test in the same clause (ISS-05); "claims about personhood enrolment ... **are governed by** FR-132 and §16.4" overstates, since §13 (j) — three sections later, in the same version — records those very claims as **un-ruled** (ISS-06); and the approver-confirmation status is stale (ISS-04). |
| B5 Testability | 15 | 80 | 12.00 | The document's Gherkin discipline is strong overall (§8 FR-131 carries Scenarios 1-5, 7 for clauses (a)-(d)), which limits the deduction. But the **new** clause has no acceptance criterion at all, and it is the clause that most needs one: "what an ordinary Grade-8 reader would take the claim to mean" is a judgement standard, not an executable one, and Doc 02 hands the tester nothing to convert. The clause's own compensating device — the named `parties.joinPrivate`/UT-0869 pattern — is a good start and belongs *in a scenario*. Verify-by "T, I" is retained but the T half is unanchored. |
| B6 Convention compliance | 15 | 82 | 12.30 | Correct: ISO-8601 dates throughout; annotate-don't-delete honoured (superseded closing sentence quoted verbatim, 0 live occurrences); **minor** semver bump correct for a normative scope extension; `Status: In Review` correct; the named-owner rule satisfied (FR-131 → Nadia Hassan, a person); §13 (j)'s role-owner matches the established convention of blocks (e)-(i). Deduction is the RFC 2119 defect in clause (e)'s operative prohibition (ISS-03), plus the trivial "Grade-8" / NFR-023 "grade-8" casing drift (folded into ISS-03's fix, not listed separately). |
| **Total** | **100** | — | **85.90% ~= 86%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | B5 / B2 | §8, the `# FR-131 ...` Gherkin block, line 2417 (Scenarios at lines 2446, 2450, 2472, 2509, 2513) | **Clause (e) ships with no Gherkin acceptance criterion.** Every existing FR-131 scenario is ballot-scoped, and the block's own header line 2417 reads "*UI MUST state voting is NOT anonymous/receipt-free/coercion-resistant before ballot confirmation*" — which clause (e) now exceeds. **Direct precedent at the same severity:** when clause (d) was added at v2.12.0 the identical gap was caught and rated **Medium** by the v2.13.0 review; the changelog records it verbatim at line 194: "*ISS-03 (Medium): FR-131 Scenario 5 added covering FR-131 clause (d)*". The impact is live, not theoretical: the tester is re-cutting Doc 07 v2.7.0 / Doc 08 v2.10.0 for clause (e) **this session** and Doc 08 must re-close FR-131's chain — from an acceptance criterion this document does not contain. Clause (e)'s own Source note concedes the point ("Clause (e) TC owed"), but conceding a gap is not the same as not having one, and Doc 02's precedent is to seed the scenario in the same version that mints the clause. | Add a **Scenario 8** to the §8 FR-131 block covering clause (e), and de-scope the block's header comment from the ballot. Derive it from what clause (e) already names as the approved pattern — e.g. *Given a v1 public-facing string describing a participation act / When an ordinary grade-8 reader reads it / Then it does not assert the act is unknowable to Trumocracy, and where the act is public by design it says so plainly, and it states separately what the platform does not publish and what the platform's own records can see (the `parties.joinPrivate` / UT-0869 pattern)*. Record the addition in the §12 session-scope entry (ISS-07). |
| ISS-02 | **Medium** | B4 / B2 | §4.45 heading (line 1148) and its Rationale block (lines 1150-1157) | **The section that houses FR-131 still frames it as ballot-only, directly against this version's headline claim.** The heading reads "**v1 honesty notice — voting authentication posture** (DES-098)" and the rationale reads "*A member voting in v1 cannot be assumed to know this; the UI MUST state it plainly **before they vote**.*" Meanwhile the header change entry (line 28) declares "*the honesty duty is extended from 'v1 voting behaviour' to every v1 participation act*" and clause (e) states it is "**not confined to the ballot**". These cannot both be the current scope framing. **This is materially worse than an ordinary heading nit**, because a ballot-scoped scope statement *read literally* is the precise mechanism that produced this defect: the engineer read FR-131's closing sentence literally, correctly concluded landing copy was out of reach, and two false strings shipped (DECISIONS §1, §6). Leaving the section framing ballot-scoped preserves the reasoning path the amendment exists to close. **Direct precedent at the same severity:** the v2.14.1 review rated the failure to keep §4.45's preamble in sync with the FR-131 row a **Medium** — changelog line 163: "*ISS-01 (Medium): §4.45 FR-131 preamble and §4.45 FR-131 requirement text ... at both sites*". | Widen both: retitle §4.45 (e.g. "**v1 honesty notice and honesty-of-claim duty — participation-act posture (DES-098)**") and extend the rationale with one sentence recording that, from v2.17.0, FR-131 also governs public-facing claims about **any** v1 participation act, not only the pre-ballot notice — cross-referencing clause (e). Do not delete the existing ballot rationale; it remains correct for clauses (a)-(d). |
| ISS-03 | **Medium** | B6 / B5 | §4.45, FR-131 row (line 1172), clause (e), second sentence | **The operative prohibition of the new clause is malformed under RFC 2119.** It reads: "*In a Definition-A (v1) deployment, **no** public-facing string, screen, README or other material — in any language — **MUST** assert that a participation act is unknowable to Trumocracy...*" Negating the **subject** of a MUST inverts the obligation: read literally, "no X MUST assert P" means *there is no X for which asserting P is required* — trivially true, obliging nothing. RFC 2119 expresses prohibition as **MUST NOT** on a positive subject (or **MAY NOT** on a negated one). CLAUDE.md names RFC 2119 as a house convention and this is the one sentence that defines what clause (e) forbids. **Why Medium and not High:** the duty is redundantly and correctly carried by two other well-formed sentences in the same clause — the "*a claim FAILS this clause if...*" test and the widened closing "*MUST NOT use the words ... or any other v1 participation act as defined in clause (e)*" — so the requirement is enforceable and nothing built or tested from it will be wrong. **Why not Low:** it is the operative prohibition of a new normative clause of a **Must** requirement, in an amendment whose stated rationale is that literal readings of imprecise normative text let false claims ship. A literally-null prohibition inside that fix is self-undermining, and the repair is one word. | Recast with a positive subject and `MUST NOT` — e.g. "*...public-facing strings, screens, READMEs and other materials — in any language — **MUST NOT** assert...*" (or keep the negated subject and use **MAY**). While in the sentence, align "Grade-8 reading level" with NFR-023's own casing ("grade-8 reading level"). |
| ISS-04 | Low | B1 / B4 | Header `Status:` (line 10), header `Change:` (line 31), and the FR-131 Source annotation (line 1172, twice) | **"Presented for approver confirmation" is stale — the confirmation exists and is recorded.** `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11 records, dated 2026-09-06, that the approver (Rathish Kumar) **CONFIRMED** Ruling B, **CONFIRMED** the §5 second finding, treated §5.3 as **reached by the approved clause (e)**, and **APPROVED** the Doc 02 amendment. The spec was authored at 10:00 and §11 was transcribed later the same day, so the wording was true as dated — but the document now understates the authority of a Must clause the shipped code already enforces. **Kept at Low, deliberately, on three grounds:** (a) the error is **understatement, not overclaim** — it cannot mislead anyone into treating an unapproved rule as binding, which is the direction of error that would matter; (b) the confirmation lives in **§11 of the very artifact cited inline at all four occurrences**, so the trace is intact and one hop away — B3's "links intact" test is satisfied; (c) the two header occurrences are rewritten by the PASS routing anyway when `Status:` becomes Approved. **The durable one is the FR-131 Source annotation**, which the annotate-don't-delete convention means will be read for the life of the requirement. | In the next version update the Source annotation (priority) and the `Change:` entry to read "*product-owner ruling of 2026-09-06, **CONFIRMED by the approver (Rathish Kumar) 2026-09-06** — DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11*". The `Status:` line is superseded by the PASS routing. |
| ISS-05 | Low | B4 | §4.45, FR-131 row (line 1172), clause (e): "*Copy that states what the platform does **not publish**, and separately states what the platform's **own records can see**, SATISFIES this clause...*" | **The safe-harbour is in tension with the governing test two sentences above it.** The clause first says a claim **FAILS** if an ordinary reader would conclude Trumocracy cannot link them to the act; it then says copy stating the two facts **SATISFIES** the clause. A string could do both at once — e.g. retain "your name is kept private" and append the two disclosures — and so simultaneously satisfy the safe-harbour and fail the reader test. Read as a whole the reader test plainly governs (the clause says outright "the test is what an ordinary reader ... would take the claim to mean"), so this is a drafting tension, not a live loophole, and I found no reading that would let a reviewer or engineer approve a false string on it. But in a clause whose premise is that literal readings matter, an unqualified "SATISFIES" is worth tightening. | Subordinate the safe-harbour to the test — e.g. "*Copy that states what the platform does not publish, and separately states what the platform's own records can see, **and makes no contrary claim elsewhere in the same string**, satisfies this clause...*". |
| ISS-06 | Low | B4 / B3 | §4.45, FR-131 row (line 1172), clause (e): "*claims about personhood enrolment and identity verification **are governed by** FR-132 and by §16.4 H-16/H-17/H-18 and are expressly outside it*" | **Overstates what currently governs those claims.** FR-132 §(d) does impose an honesty posture ("*v1 MUST NOT claim ... that one-person-one-vote is guaranteed or that the platform is anonymous*") and §16.4 H-16/H-17/H-18 are disclosure entries, so the citation is not empty. But §13 (j) — added by **this same version**, three sections later — records the two enrolment landing strings as "**un-ruled on the evidence available**" and routes the question as OPEN. If FR-132 and §16.4 already governed them, (j) would be unnecessary. The two statements are in mild tension on the boundary this version exists to draw. | Soften to "*...are addressed by FR-132 §(d) and §16.4 H-16/H-17/H-18 and are expressly outside this clause; whether those provisions fully reach the enrolment landing copy is the open question tracked at §13 (j).*" |
| ISS-07 | Low | B2 / B3 | §12 Traceability (lines 2858 ff.) — no `**v2.17.0 session scope:**` entry (compare v2.6.0 line 2918, v2.11.0 line 2934, v2.12.0 line 2945, v2.13.0 line 2955) | **v2.17.0 is the first FR-131 amendment since v2.12.0 not to record a session-scope entry in §12.** §12 is the document's own narrative of what each version did to the trace, and the v2.12.0 entry for clause (d) is the exact template ("*No new FRs minted (FR-131 clause (d) carries the open-tier disclosure obligation; no normative gap requiring a new ID). Must count stays at 114...*"). Its absence means a reader of §12 alone cannot see that FR-131's scope changed. Non-blocking on its own, but it is the third limb of the same incomplete cascade as ISS-01 and ISS-02. | Add a `**v2.17.0 session scope:**` entry to §12: no new FRs minted; Must count unchanged; FR-131 amended with clause (e) and a widened closing sentence; §13 (j) added; the clause (e) Gherkin scenario added per ISS-01; TC owed and routed to the tester. |
| ISS-08 | Low | B2 | §16.3 Classification table, FR-131 row (line 3307) | The row's v1 column still describes FR-131 as "*Non-dismissable plain-language UI notice **before each ballot** in v1; states NOT anonymous, NOT receipt-free, NOT coercion-resistant; carries one-account-per-phone caveat (FR-132)*" — an accurate description of clauses (a)-(c) and now an **incomplete** description of the requirement, which reaches all public-facing material in every language. **Low, not Medium:** it under-describes rather than contradicts, and the same row was not updated for clause (d) at v2.12.0 either and passed four review cycles — so the established (if imperfect) convention is that §16.3's description column is a v1/v2 phasing summary, not a clause register. | Append a clause-(e) phrase to the v1 column when §16.3 is next touched, e.g. "*...; from v2.17.0 also the honesty-of-claim duty across every v1 participation act (clause (e))*". |
| ISS-09 | Low | B3 | §13 tracked routing **(j)**, line 3039: "*believed true (the **§2.5** absence-test pattern; UT-0870)*" | **An under-qualified cross-reference that resolves to the wrong document on the naive reading.** The intended target exists and is exactly right — **Doc 06 §2.5, "Self-view contract and absence-test pattern"**. But "§2.5" carries no document qualifier, and it sits inside a block whose own header cites `DECISIONS-2026-09-06-ENDORSEMENT-COPY.md`, whose §2.5 is "The precedent" (the `joinPrivate`/UT-0869 case) — a different thing entirely. The source record's §7.1 says only "the absence-test pattern, UT-0870", with no section cite; the "§2.5" was added in transcription. I confirmed UT-0870 is genuinely an absence test (`apps/web/test/join-membership.test.tsx` line 466), so **the substance is correct** — this is a citation-hygiene defect only, which is why it is Low and not a mis-citation finding. Flagged because cross-reference precision in this document is a live concern (v2.16.3 was itself a mis-citation correction). | Qualify it: "*the **Doc 06 §2.5** absence-test pattern; UT-0870*". |
| ISS-10 | Low | B3 / B4 | §16.3 Classification table, FR-132 row (line 3308): "*honesty caveat carried by **FR-131 notice (DES-098) clauses (d)/(e)***" | **A pre-existing loose cross-reference that v2.17.0 activates into a live ambiguity.** This text predates v2.17.0 (confirmed unchanged at `HEAD`). Its intended referents are almost certainly **FR-132's own** clauses (d) "Honesty posture" and (e) "Vendor non-retention", since the row summarises FR-132 — and before this version FR-131 had no clause (e), so the reading was forced. Now FR-131 **does** have a clause (e), and the phrase reads naturally as FR-131's (d)/(e) — pointing the FR-132 honesty caveat at a clause that **expressly disclaims** enrolment and identity-verification claims. That is a contradiction on precisely the scope boundary this version drew. **Low, not Medium:** it is a summary column; the normative text (FR-132 §(d), which correctly says "per FR-131 clause (d)") is unambiguous; and the defect was authored elsewhere — v2.17.0 only makes it visible. | Disambiguate when §16.3 is next touched: "*honesty caveat carried by the FR-131 notice (DES-098) clause (d), and by **FR-132 §(d)/§(e)***". |
| ISS-11 | Low | B4 | §4.6 FR-064, the "**v2 (deferred):**" clause (line 704) — **carried** since `02-requirements-srs-v2.15.0-business-cycle1.md` (ISS-B1) | **Confirmed still present and unchanged.** I re-read the clause directly: "*automatic voidance, and enforcement by a global membership-scope nullifier that cannot be bypassed by leaving and re-joining within the same session, are DEFERRED to DES-065...*" — still no cross-reference to the v1 anti-abuse controls that actually bound this within v1 (FR-023 at line 703, FR-068 at line 705, both immediately adjacent). Correctly disclosed as carried in the v2.17.0 `Status:` block (line 16), and v2.17.0 does not touch FR-064, so carrying it again is the right call. | Unchanged from prior cycles: add a short v1 cross-reference to FR-023/FR-068. Non-blocking; fold into the next version that touches FR-064. |
| ISS-12 | Low | B2 / B4 | Header `Change:` block, the **v2.16.0** entry, line 129: "*...before the ballot layer is built **(not a defect in v1, which holds no vote)**;*" | **Confirmed still present, unchanged.** The residual unscoped echo of the mis-citation corrected at v2.16.3 §13 (h) survives in the historical changelog narration. Correctly disclosed as carried (lines 17-19). Still **Low** for the reason the v2.16.3 review gave and which I independently agree with: it sits in dated historical narration, not a live status field, and contradicts no currently-governing text. | Optional cleanup on the next version that touches §13: "*the proposals layer, which holds no vote*". Non-blocking. |
| ISS-13 | Low | B4 | §13 tracked routing **(h)**, line 3032, the `(v2.16.3: ...)` annotation's closing clause: "*DES-096 specifies a v1 ballot backing outright, so **v1 does hold a vote**.*" | **Confirmed still present, unchanged.** The precision gap against the adjacent (g) row's "the layer **built** holds no vote" persists. Correctly disclosed as carried (line 20). v2.17.0 touches §13 but **adds** block (j) rather than editing (h), and the `Status:` block says so explicitly and accurately (lines 21-22) — an honest piece of self-reporting worth noting. | Unchanged: qualify to "*so v1's **design** does hold a vote (the ballot layer itself, tracked separately as OPEN at §13 (g))*". Non-blocking. |

> **Low** issues do not block the pass bar. **ISS-01, ISS-02 and ISS-03 are Medium and each forces a
> FAIL.** ISS-11 / ISS-12 / ISS-13 are the three Lows carried from v2.16.3 (there ISS-01 / ISS-02 /
> ISS-03), all three re-verified present and all three correctly disclosed in the v2.17.0 header.

---

### 4.1 Verification performed (what I checked, and how)

| Claim / property | How I verified it | Result |
|---|---|---|
| All four spec operations applied **verbatim, exactly once**, with no fuzzy or partial match | Node script extracting each `REPLACE WITH` block from `artifacts/product-owner-2026-09-06T1000-endorsement-copy-spec.md` and searching `docs/02-requirements-srs.md` (CRLF-normalised) | PASS — OP1 1629 ch / OP2 3245 ch / OP3 6018 ch / OP4 1662 ch, each `found=true, occurrences=1` |
| The delta is **only** those four operations — nothing else moved | `git diff --numstat HEAD -- docs/02-requirements-srs.md` plus a full `-U1` diff read | PASS — 59 insertions, 12 deletions, four hunks: header Version/Status; header Last updated/Change; line 1172 FR-131 row; §13 block (j) |
| **Transcription residue** — leaked `FIND:`/`REPLACE WITH:`, stray fences, conflict markers | grep for `FIND:`, `REPLACE WITH:`, four-backtick fences, `<<<<<<<`, `=======`, `>>>>>>>`; fence count | PASS — zero leaks, zero conflict markers, 18 fence lines (all pre-existing balanced pairs) |
| **OP-boundary integrity** — duplication or truncation at the four seams | Read header lines 1-120 line by line; confirmed line 1172 is one intact single line; read §13/§14 boundary lines 3010-3054 | PASS — no duplicated or truncated lines; (j) correctly ordered after (i), followed by the rule, then `## 14. Glossary` |
| No live occurrence of the **un-widened** closing sentence; superseded wording quoted once | Substring counts over the whole document | PASS — 0 live, 1 quoted (FR-131 Source annotation, per annotate-don't-delete); widened form present exactly once |
| **FR-014** as cited by clause (e) ("at most one endorsement per person per petition") | Read FR-014 row, line 684 | PASS — verbatim match |
| **FR-015** as cited ("withdrawing one's own endorsement") | Read FR-015 row, line 685 | PASS — accurate paraphrase: "*Allow an endorser to withdraw an endorsement at any time before activation and decrement the count accordingly, without revealing who withdrew*" |
| **§16.3** v1 rows for FR-014 / FR-015 match the ruling's evidence | Read lines 3190-3191 | PASS — FR-014 `PARTIAL` / "DB-enforced one endorsement per petition scope"; FR-015 `IN-v1` / "DB decrement; no endorser identity revealed" |
| **§16.5** FR-082 ruling as relied on by the amendment | Read §16.5 (lines 3374 ff.) end to end | PASS — FR-082 row **CONFIRMED** Definition-B-only, "*A Supporter's party membership IS knowable by the operator and is NOT unconditionally anonymous*"; the T-03 row records "*v1 equivalent is policy + FR-131 honest disclosure*", which independently supports clause (e)'s existence |
| **§16.4 H-16/H-17/H-18** exist and H-17 reads as clause (e)/(j) cite it | Read lines 3369-3371 | PASS — H-17: "*The ID-check provider (third-party vendor) sees the government-ID document ... The vendor non-retention clause (FR-132 §(e)) is a legal and contractual control, not a technical guarantee*" |
| **Doc 14 §2.2** quote "a public act, on purpose" | Read `docs/14-user-guide.md` §2.2 (heading line 579; quote line 601; lines 611-612) | PASS — verbatim: "*it will be a **public act**, on purpose*"; and "*A **fully private** way to back a petition ... is **not switched on in this version.**"* |
| **`packages/protocol/src/flags.js`** `PRIVATE_ENDORSEMENT` defaults and phase | Read lines 52-58 | PASS — `defaults: { dev: true, staging: false, prod: false }`, `removeBy: 'Phase 4'`; clause (e)'s "Phase-4 flag that is OFF in every v1 deployment" is accurate for staging/prod |
| **`apps/web/src/i18n/en.ts` `parties.joinPrivate`** is the pattern clause (e) names | Read lines 126-129 | PASS — "*Your membership is not made public. In this version of the platform, our own records can link your account to the party you join. That link is never published...*" — states-what-we-don't-publish plus states-what-our-records-see, exactly as clause (e) describes |
| **UT-0869** exists and guards it | Read `apps/web/test/join-membership.test.tsx` lines 444-454 | PASS — asserts `not.toContain('Nobody gets that list')`, `toContain('our own records can link your account')`, `toContain('never published')` |
| **UT-0887** exists and the clause-(a) carve-out protects it | grep → `apps/web/test/safety-surfaces.test.tsx` line 125 and `ReceiptFreedomBanner.tsx` line 17 | PASS — UT-0887 asserts the FR-131 banner's mandated negated forms; clause (e)'s closing carve-out ("*where clause (a) mandates those words, they MUST appear only in the negated form clause (a) requires*") preserves it |
| Approver-confirmation status of the ruling | Read `DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11 | FLAG — **CONFIRMED 2026-09-06** (all three items); Doc 02's "presented for approver confirmation" is stale-but-true-as-dated → **ISS-04 (Low)** |
| **ID scheme** — no reuse, no renumbering, no new mints | Diff inspection plus §12 read plus Must-count statements | PASS — no `FR`/`BR`/`NFR`/`DES`/`US`/`TC` ID minted, reused or renumbered; clause (e) is a clause label, not an ID; §13 (j) follows (i) sequentially |
| **RFC 2119** compliance of the new normative text | Read clause (e) sentence by sentence | FLAG — one defect: negated subject with `MUST` → **ISS-03 (Medium)**. All other keywords well-formed (`MUST say so plainly`, `MUST NOT describe`, `MUST NOT use the words`, `MUST appear only in the negated form`) |
| **Gherkin** coverage for clause (e) | grep FR-131 across §8 (lines 1400-2900); read the block header (2417) and Scenarios at 2446/2450/2472/2509/2513 | FAIL — **none**; all scenarios ballot-scoped → **ISS-01 (Medium)** |
| Precedent: does the document oblige a scenario when an FR-131 clause is minted? | Read the v2.13.0 changelog entry, lines 192-200 | PASS — precedent set at **Medium**: "*ISS-03 (Medium): FR-131 Scenario 5 added covering FR-131 clause (d)*" |
| Precedent: keeping §4.45's preamble in sync with the FR-131 row | Read the v2.14.1 changelog entry, lines 160-168 | PASS — precedent set at **Medium**: "*ISS-01 (Medium): §4.45 FR-131 preamble and §4.45 FR-131 requirement text ... at both sites*" |
| §12 session-scope entry for v2.17.0 | grep `v2.17.0` across the document; compared with the v2.6.0/v2.11.0/v2.12.0/v2.13.0 entries | FAIL — absent (only lines 6, 21, 28, 1172 mention v2.17.0) → **ISS-07 (Low)** |
| The "§2.5 absence-test pattern" cross-reference in (j) | grep `^### 2.5` across Docs 02/04/06/14 and the decision record | FLAG — resolves correctly to **Doc 06 §2.5** but is unqualified, and the cited record's own §2.5 is "The precedent" → **ISS-09 (Low)**; UT-0870 confirmed a genuine absence test (`join-membership.test.tsx` line 466) |
| §16.3 FR-132 row's "clauses (d)/(e)" — new or pre-existing? | `git show HEAD:docs/02-requirements-srs.md \| grep -c` | FLAG — **pre-existing** (1 occurrence at `HEAD`, unchanged); FR-132's own §(d) "Honesty posture" and §(e) "Vendor non-retention" confirmed by reading line 1206 → **ISS-10 (Low)** |
| The three carried Lows still open | Re-read FR-064 line 704; changelog line 129; §13 (h) line 3032 | PASS — all three present and unchanged → **ISS-11 / ISS-12 / ISS-13**, matching the `Status:` block's own disclosure |
| Named-owner rule | FR-131 Owner column; §13 (j) Owner column vs blocks (e)-(i) | PASS — FR-131 → **Nadia Hassan** (a person); §13 (j)'s role-owner matches the established §13 convention (an open-issue register, not a requirement) |
| No placeholder / TBD text introduced by the delta | Read all four changed regions in full | PASS — none found |

---

## 5. Routing instruction (to the owning role)

**FAIL — route to the product-owner (Priya Raghunathan), the owning role, for a new version.**
The rework MUST produce **v2.17.1** (`Status: In Review`) and re-enter this loop as **cycle 2 of 5**.

**A patch bump is the correct increment.** None of the three Mediums changes what FR-131 *means*:
ISS-01 seeds the acceptance criterion for an obligation already stated, ISS-02 re-frames a section
heading and rationale to match a scope already widened, and ISS-03 repairs the grammar of a
prohibition already intended. The normative scope extension happened at 2.17.0 and is sound; 2.17.1
completes and correctly frames it.

**Blocking (must be fixed for a PASS):**

- **ISS-01** — add a §8 Gherkin scenario for clause (e) and de-scope the FR-131 block header.
- **ISS-02** — widen §4.45's heading and rationale to match clause (e).
- **ISS-03** — repair the RFC 2119 form of clause (e)'s operative prohibition.

**Strongly recommended in the same version (cheap, same sections, all Low):** ISS-04 (the durable
FR-131 Source annotation — record the approver's 2026-09-06 confirmation), ISS-05, ISS-06, ISS-07,
ISS-09. **Carry as before:** ISS-08 and ISS-10 with the next version that touches §16.3; ISS-11
with the next that touches FR-064; ISS-12 and ISS-13 with the next that edits §13's existing blocks.

**Notes for the project-manager (not defects in this document):**

- **The application was faultless and is worth recording as such.** Four anchored operations, four
  exact single matches, no residue, no collateral edits. The anchored-spec protocol did its job.
- **Sequencing note for the tester (Ji-woo Park).** Doc 07 v2.7.0 / Doc 08 v2.10.0 are due to
  re-cut FR-131's chain for clause (e) this session. **Doc 02 currently offers no acceptance
  criterion to cut against** (ISS-01). I flag this as a *sequencing* risk rather than a tester
  defect: either v2.17.1 lands its scenario first, or Doc 08's FR-131 row must state plainly that
  clause (e)'s criterion is owed by Doc 02. I have **not** verified Doc 07/08 here — they are a
  separate assignment — and I take **no position** on FR-131's Must-row status in this report.
- **This report makes no Gate-2 finding and signs no merge.** It is a document-review-loop report
  only. The Gate-2 RTM zero-gap certification and the merge sign-off are separate acts on separate
  evidence.
- **Audit expectation.** Other documents blocking in `node hooks/run_gates.cjs --audit` is expected
  mid-session (several are In Review at once) and I have not self-appointed for any of them.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — the verdict is **FAIL at cycle 1 of 5**. The cap is not reached, four cycles
remain, and no human decision is required or recorded here.
