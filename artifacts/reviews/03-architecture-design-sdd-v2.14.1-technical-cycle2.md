# Document Review Report — Doc 03 Architecture & Design (SDD) v2.14.1, technical, cycle 2

> Produced by the **document-review** skill. The reviewer **scores and lists issues only — it never
> edits the reviewed document**. Rework, if any, is the **architect's** (Ravi Deshmukh), as a new
> version. Independence: reviewer is the **tester** (Ji-woo Park, new instance), PM-assigned before
> dispatch per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md`. The reviewer owns
> neither Doc 03 nor Doc 04 and authored neither. **Docs 07 and 08 are reviewer-qa's and are not
> ruled here** — Doc 08 is referenced only to confirm that Doc 03's bibliographic pin on it is
> honest.

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.14.1
Review mode: technical
Reviewer role: tester
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Both cycle-1 Mediums are **genuinely fixed**, all three cycle-1 Lows are **taken**, and the
`OPEN-27` ruling is carried into v2.14.1 **verbatim** — which I did not take on assertion. I
reconstructed v2.14.1 mechanically from the **pre-session file at `HEAD`** through the v2.14.0 spec
and then the v2.14.1 spec, and the result is **byte-identical to `docs/03-architecture-design-sdd.md`
on disk**. That proves the strong form of the claim: **nothing outside the 12 declared operations
changed**, and every one of those operations is an annotation, a pin sweep, or an enumeration
correction. Clause 10, FINDING 1/2/3, the five rejected alternatives and three rejected titles, the
five-condition render trigger, the `OPEN-27` closure and the `OPEN-28`/`OPEN-29`/`OPEN-30` mints are
untouched. The **PATCH** bump is honest.

**ISS-01 is cured at the level the defect required.** A top-down reader can no longer meet line
1979's gloss as current: a supersession banner now sits immediately **above** the two v2.7.1
paragraphs and a note immediately **below** them, both naming the paragraphs explicitly and both
quoting the offending sentence verbatim. Nothing load-bearing was superseded by accident — the
FR-124(b) aggregate-only publication fact, the `phone_hash` / KMS-pepper / TRAI facts and their use
by FINDING 1 are each named as **surviving and still relied on**. *Facts survive; the gloss does
not* is the right cut and it is made at both ends.

**ISS-02's correction-by-annotation is the RIGHT CALL**, and I rule so expressly in §5(b): the
correction block is immediately adjacent to the retained paragraph, not scoped away from it, and
retaining the under-count preserves the evidence for the document's own self-diagnosis. The single
remaining **Low** is a locational mislabel inside the ISS-01 annotation — it says "closing sentence"
of a sentence that is third of four, and "first two sentences" survive where three of four do. The
sentence is quoted verbatim both times, so no reader can be misled about *which* claim is withdrawn;
that is why it is a Low and not a Medium.

**PASS at 97%. Set `Status: Approved`.**

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.60 | Unchanged from v2.14.0 in substance (clause (e), §8 Scenarios 8/9, FR-122/123/124(b), NFR-023, FR-014/015, Doc 14 §2.2, H-16/H-18, T-01/T-02) and improved by ISS-04's tense reconciliation, which makes the Doc 14 §2.2 citation say exactly what its source says. |
| T2 Soundness | 20 | 97 | 19.40 | The ruling is carried verbatim and was affirmed at cycle 1. ISS-04 and ISS-05 are discharged as reconciliations, not as changes, and both say so. The declined "pseudonymous publication" wording is **correctly** declined — see §5(c). |
| T3 Traceability & IDs | 20 | 95 | 19.00 | Both Mediums fixed; DES-094's register row corrected to the built reality with the superseded cell text retained; no id minted, renumbered, reused or re-statused (verified by reconstruction diff). **ISS-C2-01 lands here.** |
| T4 Security & failure modes | 15 | 98 | 14.70 | Fail-honest default, no-inference bar, five-condition render trigger and the `ar` human gate all intact; ISS-05's note separates the **ship-time** bar from the **run-time** default, which is a genuine improvement to the failure-mode reading. |
| T5 Completeness & testability | 15 | 97 | 14.55 | Clause 10(g)'s four-path `UT` shape, exact strings and `aria-label` assertion unchanged; `OPEN-28`'s closing condition unchanged; nothing fabricated. |
| T6 Convention compliance | 10 | 97 | 9.70 | Annotate-don't-delete observed on **every** operation — mechanically verified (see §4). RFC 2119, ISO-8601, named owners. Minus for ISS-C2-01's imprecise sentence locators. |
| **Total** | **100** | — | **96.95 → 97%** | — |

## 4. Verification log — what I checked mechanically rather than accepted

| Claim | Method | Result |
|---|---|---|
| **The ruling is carried verbatim; v2.14.1 is v2.14.0 plus 12 annotation ops and nothing else** | Reconstructed `HEAD` → (v2.14.0 spec, 15 ops) → (v2.14.1 spec, 12 ops) with an exact-match applier, then `diff` against the on-disk file | **TRUE — byte-identical, zero diff.** Every FIND matched **exactly once** in both specs. No op overlapped another. |
| Every v2.14.1 op is an annotation / enumeration correction (the PATCH claim) | Diffed the reconstructed v2.14.0 against v2.14.1: **4 deleted lines total** — `Version:`, and the first line of the `Status:`, `Change:` and DES-094 register rows | **TRUE.** All four are label-line rewrites whose prior text is retained immediately below or inside the replacement (99%, 92% and 100% of the superseded text retained verbatim, measured). **No normative clause is touched.** |
| Clause 10, FINDING 1/2/3, rejected alternatives/titles, render trigger, `OPEN-27/28/29/30` unchanged | The reconstruction diff shows **zero** changed lines in any of those regions | **TRUE** |
| ISS-01 (a): a banner sits immediately **above** the two v2.7.1 paragraphs | `docs/03` line 2132, between `**Copy:** "Nothing you do here is linked to you."` and the "Interpretive basis" paragraph | **TRUE** — and it names **both** paragraphs by their exact headings |
| ISS-01 (b): a note sits immediately **below** the FR-124(b) paragraph (line 2140) | `docs/03` line 2142 | **TRUE** |
| ISS-01 (c): both sites added to the v2.14.0 change entry's "Sites changed" list | `docs/03` line ~372, annotation below the retained list | **TRUE** — added by annotation rather than by editing a published list |
| Nothing load-bearing superseded by accident | Read both annotations end to end; traced FR-124(b) usage at FINDING 3 (line 2180), clause 10(b) (line 2250-2254) and the leak-check table (line 2271, "Aggregate-only, consistent with FR-124(b). SAFE.") | **TRUE.** The aggregate-only fact, the `phone_hash`/`subject_id_hash`/KMS-pepper/TRAI chain and their reliance by FINDING 1 are each named as **surviving**. Every downstream use still rests on a surviving fact. |
| ISS-02: the correction block enumerates six sites and each is real in Doc 04 | Read all six against `docs/04` — S5's named exception (1323-1345), S5 rule 4's count (1289), S4's scope-before-count sentence (1178-1190), §1.4's roll-call (1712-1741), §13's `OPEN-27` row (2911) + bullets (2856-2870), §11.2's tooling row (2802) | **TRUE — all six exist, all six are now clean.** No seventh found (see the Doc 04 report §4). |
| ISS-03: the DES-094 register cell | `docs/03` line 2087 | **TRUE** — reads `packages/ui/src/PrivacyStatus.tsx` — **BUILT, mounted on no shipped surface**, `anon` copy governed by clause 10, `ver` by clauses 7 and 9; the superseded cell text is quoted, not deleted |
| ISS-04: both halves present | `docs/03` lines 2182 (§10.12.3) and 3339 (§11) | **TRUE** — both deliver the exact reconciliation the required fix specified |
| ISS-05: the note is immediately above the leak-check table | `docs/03` line 2265 | **TRUE**, and its arithmetic checks: 13 pill screens − {1.2, 1.6, 2.3} = **10** rendering `ver`/`pub` |
| The `anon` wireframe-table row is annotated in **both** cells | `docs/03` line 2101 | **TRUE** — title and subtitle cells each carry the v2.14.0 SUPERSEDED / MUST-NOT-IMPLEMENT annotation |
| Pin sweep: Doc 07 v2.9.0 Approved; Doc 08 v2.12.1 In Review, last Approved v2.11.3 | Headers of `docs/07` and `docs/08`; `artifacts/reviews/07-…-v2.9.0-technical-cycle1.md` (PASS 97%, 0C/0H/0M/4L) | **TRUE and honestly framed** — see §5(d) |
| No design record establishes pseudonymous publication for endorsement | Grepped `docs/` for `pseudonym*`; read FR-017, FR-062 (SUPERSEDED, "do not implement"), DES-064 (`MUST NOT ship until OI-13`), DES-011, the §10.12.3 leak-check row for screen 2.3 | **TRUE — the architect is right.** See §5(c). |
| Suite unchanged at 640/640 | `npm test` | **TRUE** — 95 + 151 + 244 + 18 + 16 + 116 = **640 passed, 0 failed**. No code or test changed this session. |
| Gate self-check | `node hooks/run_gates.cjs --audit` | Doc 03 v2.14.1 blocks only for want of **this** report; Doc 08 v2.12.1 blocks on reviewer-qa's cycle-2 report — **expected, not mine, not self-appointed** |

## 5. Rulings the assignment asked for

**(a) ISS-01 — can a top-down reader still meet line 1979's gloss as current? NO. Was anything
load-bearing superseded by accident? NO.**

The defect at cycle 1 was structural, not rhetorical: the v2.14.0 banner was **scoped** ("both
`anon` decisions **below**"), so it could not reach material above it. v2.14.1 does not re-scope that
banner — it **brackets** the pair with a new marker at each end. A reader arriving from the top meets
the supersession before the gloss; a reader arriving from the ruling meets it after. The offending
sentence is **quoted verbatim in both markers**, so there is no path through the section on which it
reads as current.

The harder half is what *survives*, and this is done well. The annotation separates the **gloss**
(reading "linked" as "*publicly* linked", and the "truthful in the public sense" sentence) from the
**facts**, and it names the facts individually: publication is aggregate-only under FR-124(b); no
published record links an action to the `anon` holder; the operator-side linkage through
`phone_hash` / KMS pepper / `subject_id_hash` and the TRAI chain is real, disclosed, **still true and
still relied on by FINDING 1**. I traced every downstream consumer of the surviving facts — FINDING 3
(line 2180), clause 10(b)'s `'browse'` and `'join'` strings (2250-2254) and the leak-check table's
"Aggregate-only, consistent with FR-124(b). SAFE." row (2271) — and each now rests on a fact the
annotation expressly preserves. **Nothing load-bearing was superseded by accident.** The formula
*"Facts survive; the gloss does not"* is exactly right, and the document earns it by listing which
facts.

**(b) ISS-02 — was correcting by annotation the right call, or is a live paragraph still reading
"five" itself a defect? THE ANNOTATION IS THE RIGHT CALL. The live "five" is not a defect here.**

Three grounds, and the distinction from ISS-01 is the whole of it.

1. **Adjacency, not scoping.** ISS-01's defect was a marker that was *scoped away* from the text it
   should have governed — the banner said "below" and the text was above. Here the correction block
   is the **immediately following block**, opens with *"There are SIX sites, not five"*, and states
   *"The instruction above is re-issued against all six."* There is no reading order on which the
   five-site list is met without its correction. A marker that is adjacent and unscoped is a
   different object from a marker that is scoped elsewhere.
2. **The under-count is evidence, and the paragraph it sits in is the evidence's subject.** That
   paragraph warns, in its own words, that *"a withdrawn carve-out surviving in one of five sites is
   a build-failing scan quietly not failing."* The warning came true **because** the list beneath it
   was short. Editing "five" to "six" in place would leave a paragraph that appears to have been
   right all along, and would make the document's own diagnosis of the failure unverifiable at the
   site of the failure. Annotate-don't-delete is not decoration here; it is what keeps the causal
   record intact.
3. **It worked, and that is checkable.** Doc 04 v1.7.1 swept site 6 and cites the corrected
   enumeration by name. The instruction reached its reader. An instruction that reaches its reader
   and is obeyed is not defectively expressed.

I would have ruled otherwise if the correction block were distant, scoped, or if it merely asserted
"six" without listing them. It does list all six, with owner, controls, the offending sentence and
why site 6 is a *known* S5 site — that is more than the required fix asked for.

**(c) The declined wording — "endorsement is published pseudonymously, not identity-linked". I
ACCEPT the substitution. My cycle-1 formulation was wrong, and the architect was right to refuse
it.**

This deserves a direct answer because the architect asked for one. **I cannot source it, and I
looked properly.** I swept `docs/` for every occurrence of `pseudonym*` and read each in context:

- **No Doc 03 design record specifies a pseudonymous-publication property for endorsement.** Doc 03's
  pseudonym machinery is `member_pseudonym` (membership events, §9 data model), `drafter_pseudonym`
  (party drafts) and the v2 identity commitment — **none of them endorsement**. `DES-011` is an
  endorsement *nullifier scope* (one endorsement per person per petition) on the v2 path, not a
  publication rule.
- **What Doc 03 actually says is published on screen 2.3 is an aggregate**: the leak-check table's
  "Other-actor aggregate counts" row reads *"2.3 '6,120 endorsements' — Aggregate-only, consistent
  with FR-124(b). SAFE."* That is a count, not a pseudonymous roster.
- **The nearest candidate in Doc 02 is FR-017**, "display live petition progress publicly, **without
  revealing the identity of any endorser**" — but it is a **Should**, it governs the *progress
  display*, and non-revelation of identity is not the same proposition as publication *against a
  pseudonym*.
- **The one requirement that did publish "the petitions they have endorsed" per person, FR-062, is
  expressly SUPERSEDED and marked "do not implement"**, and its design element `DES-064` carries
  *"MUST NOT ship until OI-13 resolved"*.
- Worse for my wording: it pulls **against** the ruling's own source. Doc 14 §2.2 warns the citizen
  to *"only back a petition if you are comfortable being seen to support it"* — a warning that a
  pseudonymous publication property would largely defuse. Had my sentence been adopted, clause
  10(b)'s `'endorse'` string ("Backing a petition is public, on purpose") would have been resting on
  a softening property the design has never specified.

The architect's substitution — the **aggregate-only publication fact** plus **clause (e)'s
public-by-design rule** — is sourced at every limb and makes the same distinction I was asking for.
**A reviewer's required fix must not smuggle an unsourced property into the document it reviews**;
mine did, the architect caught it, declined it on the record, and offered to restate it if I could
source it. That is the correct handling of a reviewer error and I record it as mine.

**(d) Doc 08's bibliographic framing — HONEST, and nothing more is ruled.**

Doc 03 re-pins Doc 08 as **v2.12.1 (In Review), last Approved v2.11.3**, states it is mid-rework in
the tester's hands, and says expressly that it is **not read as settled** and that no statement in
v2.14.1 depends on its content. I verified only what that framing asserts: `docs/08`'s header reads
`Version: 2.12.1` / `Status: In Review — v2.12.1 … cycle 2 of 5`, and v2.11.3 was the last Approved
version. **The framing is accurate and appropriately limited**, and I confirm nothing beyond it.
Doc 08 is reviewer-qa's; I have not read its body and rule nothing about it.

**(e) The three Lows — all genuinely discharged, not restated.**

- **ISS-03** — the required fix asked for the cell to record that the component is built, mounted on
  no shipped surface, and governed for `anon` copy by clause 10. **All three are present**, plus the
  superseded cell text retained and the clause 7/9 `ver` pointer. Discharged.
- **ISS-04** — the required fix specified the exact reconciliation ("Doc 14 §2.2 states the posture
  for when backing ships, and clause 10(b)'s `'endorse'` string renders only on a shipped screen 2.3,
  so the tenses meet"). Both halves are delivered, at §10.12.3 and at §11, and both add the stronger
  point that FINDING 2's screen-2.3 limb rests on **present-tense design facts**. Discharged, and
  improved on.
- **ISS-05** — the required fix asked for one sentence reconciling the render bar with the
  thirteen-screen table: the three contexts are now the exhaustive `anon`-render set; the other ten
  render `ver`/`pub`; a fourth context requires editing clause 8 and clause 10 together. **All three
  elements are present**, the arithmetic is right, and the note adds the ship-time / run-time
  separation. Discharged.

**Zero Lows carried.** The claim is true.

## 6. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-C2-01 | Low | T3 / T6 | §10.12.3, the ISS-01 annotations at lines **2134** (banner, "the second paragraph's **closing sentence**") and **2142** (note, "**Its closing sentence** is SUPERSEDED" and "**What survives in this paragraph is its first two sentences**") | **Both annotations mislocate the superseded sentence, and the survivor count is one short.** The FR-124(b) paragraph (line 2140) has four sentences: (S1) "No participant action is ever published linked to any individual identity."; (S2) "No published record accessible to anyone other than the operator links any action…"; (S3) "This is the operative basis on which 'linked to you' is truthful in the public sense…"; (S4) "The operator-accessible linkage is real but is a platform-data-practices concern… accepted as a disclosed v1 limitation." The superseded sentence is **S3**, not the closing sentence — **S4 is the closing sentence, and it survives.** The note then says "what survives is its **first two sentences**" while its own list of survivors includes S4's content ("the operator-side linkage is real and disclosed"), so three of four survive, not two. **This cannot mislead a careful reader** — S3 is quoted verbatim at both sites, and the surviving-facts list is correct — which is why it is a Low. But a reader who trusts the locator rather than the quotation could take S4 for the withdrawn sentence, which would invert the disclosure the ruling most depends on; and an imprecise enumeration inside the very annotation written to make two halves distinguishable is the family's own signature weakness in miniature. | On the next touch, one substitution at each site: say **"its third sentence"** (or keep the verbatim quotation and drop the positional label entirely), and state the survivors as **S1, S2 and S4** — the aggregate-only fact, the no-published-record fact, **and** the disclosed operator-linkage limitation. No other change; the substance of both annotations is correct as written. |

> **Low** issues do not block the pass bar. There are **no** Critical, High or Medium issues.

## 7. Routing instruction

**PASS → the owning role (architect, Ravi Deshmukh) sets `Status: Approved` for v2.14.1.** The SOP
advances. **One Low (`ISS-C2-01`) is carried** under this document's established convention — record
it in the Approved status line with *"fix first on any future touch"*, exactly as v2.13.0's two Lows
were carried and then discharged at v2.14.1. It is a two-word substitution at each of two sites and
needs no version of its own.

**Nothing is routed back.** Both cycle-1 Mediums are fixed at the level the defect required, all
three cycle-1 Lows are taken, and the `OPEN-27` ruling is carried verbatim — the last of which I
proved by reconstruction rather than by reading for it.

**Ordering note for the project-manager:** Doc 03 v2.14.1 was applied before Doc 04 v1.7.1, as both
specs required and as the cycle-1 reports directed. Doc 04's corresponding cycle-2 report is
`artifacts/reviews/04-test-strategy-master-plan-v1.7.1-technical-cycle2.md` (**PASS 97%**).

## 8. Out of scope, as instructed — and not ruled

`OPEN-20`, `OPEN-28` and `OPEN-29` (open and untouched); the `OPEN-27` ruling and everything
affirmed at cycle 1 (not re-opened); the clause-(e) **substance** (a product-owner ruling CONFIRMED
by the approver 2026-09-06); and **Docs 07 and 08**, which are reviewer-qa's — Doc 08 is referenced
only to confirm Doc 03's bibliographic pin is honest, and nothing about its content is read or ruled.

**Two observations for the project-manager, not findings.**

1. **Bump convention.** The `document-review` skill's parenthetical says a FAIL on a Medium+ issue
   takes "at least a **minor** bump". Both cycle-1 reports instead directed a **patch** bump on the
   ground that no normative content changes, and reviewer-qa directed the same for Doc 08
   v2.12.0 → v2.12.1 in this session. The architect followed the reviewer's instruction, correctly.
   The repo now has a consistent three-document convention that departs from the skill's default; it
   is worth a human look at the handbook wording rather than a per-document deviation each time.
2. `OPEN-30`'s trigger, which I flagged to the PM at cycle 1, **fired and was discharged at Doc 04
   v1.7.1**. My independent ruling on whether it should have been taken there is in the Doc 04
   cycle-2 report §5(b) — in short, **yes, and my cycle-1 advice against it was the weaker call**.
