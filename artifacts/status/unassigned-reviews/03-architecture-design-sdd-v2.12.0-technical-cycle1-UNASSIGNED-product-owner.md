> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** does every rework as a new version.
> Independence: the reviewer (**product-owner**) is **not** Doc 03's owner (owning role:
> **architect**, Ravi Deshmukh). This is **cycle 1** against the new substantive version v2.12.0;
> the prior chain ended at v2.11.2 (**PASS 95%**, cycle 4), so the cycle counter resets.
>
> **Reviewer conflict — disclosed.** In this same session the product-owner ruled on the
> petition-endorsement landing copy and drafted a **pending** amendment to **FR-131** (Doc 02
> v2.16.3 → v2.17.0, adding clause **(e)**, a product-wide honesty-of-claim duty;
> `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md`). That amendment is **not applied**
> in the repository. The single Medium below is deliberately grounded in **this document's own
> internal consistency at this version** — the new normative rule v2.12.0 itself states at
> §10.13.6, DES-094's own FR-131 binding, and clause 8's own admission — **not** in the pending
> amendment, which is noted only in §6 as a forward dependency. If the project-manager judges the
> conflict material, a different neutral role (engineer, tester or sre) should re-run this cycle;
> the finding is located precisely enough to be re-verified in minutes.

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.12.0
Review mode: technical
Reviewer role: product-owner (neutral — the owning role for Doc 03 is the architect)
Score: 97%
Critical: 0
High: 0
Medium: 1
Low: 0
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v2.12.0 is the strongest version of this document I have reviewed: it reverses one of its own
prior architect rulings **in the open**, states the reversal's reasoning, retains the superseded text
verbatim, verifies its claims against built code **by reading it at a named commit rather than
assuming**, and discharges **all five** Lows carried from v2.11.2 — every one of which I checked at
its location and found genuinely closed. **It nonetheless FAILS on one Medium**, and the Medium is
the direct shadow of the version's own best idea.

At §10.13.6 v2.12.0 mints a new normative rule: "**this ban reaches voting-adjacent *status* copy,
not only notice text**", and justifies overruling v2.7.0 with the argument that the green `ver` badge
"sits on the same authenticated surfaces from which a member votes, so a reasonable member reads it
as a claim about the ballot — in v1, a false one." It then applies that rule to **one** of the two
non-public status states of DES-094 and records no disposition for the other. The `anon` state (§10.12.3
three-state table, line 1666) carries **Title: "Anonymous"** — the banned word itself — and
**Subtitle: "Nothing you do here is linked to you"**, and unlike the `ver` row, which this version
newly annotates *in both cells* ("v2 ZK backing only…"), the `anon` row carries **no annotation at
all**. DES-094's own `Satisfies` column (line 1656) lists **FR-131**. And the document concedes the
claim is false in v1 in its own words at clause 8 (line 1720), which exists, it says, "because
DES-098's honesty notice applies only at vote time … and does not cover non-vote contexts **where the
`anon` pill displays the claim 'Nothing you do here is linked to you.'**", and which requires the
user be told "(ii) their open-tier participation actions **are associated with that account in the
platform DB**."

That gap is not theoretical: it has already produced exactly the failure the document's own normative
note warns about. `packages/ui/src/PrivacyStatus.tsx` lines 246–253 hardcode
`anon: { title: 'Anonymous', subtitle: 'Nothing you do here is linked to you' }` with **no backing
test and no annotation** — precisely mirroring the unannotated `anon` row, and precisely the
mechanism the v2.7.1/v2.12.0 note describes for the `ver` row ("taking the `ver` row of this table as
the implementation spec will produce an incorrect hardcoded v2 title"). The version fixed the cell
that had already burned the project and left its structurally identical sibling bare.

I am **not** asserting the `anon` copy must change — that may be the architect's call, or the
product-owner's, and clause 8's disclosure obligation is a real, owned, dated treatment that shows
the case was considered. The defect is that a version which establishes a new rule about status copy,
and re-annotates one row of a three-row table to enforce it, leaves the **disposition of the other
affected row unstated**, so a reader cannot tell whether `anon` was ruled compliant, ruled out of
scope, or simply missed.

Everything else verified, and the verification was not shallow. **§10.12.3**: the backing-aware
sub-table's v1 row title is now "Verified" with the superseded cell quoted in place (line 1675); the
three-state table's `ver` title cell is annotated v2-only exactly as the subtitle cell was (line 1667);
the v2.7.1 normative note's scope is extended from subtitle to title with an explicit diagnosis of
why the narrow scoping caused the defect (lines 1660–1662); the v2.7.0 banned-words ruling is marked
SUPERSEDED with its text retained verbatim and marked "**MUST NOT** be relied on" (lines 1677–1685);
and **clause 9** (line 1722) is a genuinely correct title-side twin of clause 7 — same fail-honest
default, same proxy annotation, and it explicitly extends to the `aria-label` so "assistive
technology never announces a claim the visual badge does not make", while stating why clause 7's body
is deliberately left untouched. **§13** (line 2852): the "Public tallies in Phase 1" repayment cell
now carries the FR-131(a)/(b)/(c) truth, quotes the retired wording inline, and correctly notes that
ADR-024 §(d) still quotes the old text — **reported, not edited**, which is right: ADRs are decision
records. **§10.13.6** (lines 1950–1957): DES-098 clause (1) now names all three denials; the
banned-words bullet states the negation carve-out and *why* a blanket substring ban would fail
FR-131(a)'s mandated text. **§15** (lines 2978–2979): both trace rows are accurate, and the second
carries the owed items openly — the acknowledge-to-proceed control is still unbuilt, and FR-131 still
has no US/TC/RTM row. **Code alignment**: I read `PrivacyStatus.tsx` — `VER_TITLE_V1 = 'Verified'`
(205), `VER_TITLE_V2 = 'Verified — private'` (212), selected by `backingProperties?.unlinkable === true`
(324), `aria-label={title}` (357) — every claim in the changelog is true. **All five carried Lows**:
Q17's body now reads "exercises **none of the three**" with v2.11.2's over-claim annotated as the
over-claim it was (line 3001); `Source:` re-pinned to SRS v2.16.3 (line 32); the §10.13.3 DES-096
ballot-state-accessor clause is added with owner, rationale and a "blocks no current work" honesty
note (line 1914); §10.13.12's FR-107 annotation and the Doc 02 §13 (h) discharge line are recorded as
claimed. **No Low is carried forward, as the Status block claims** — and that claim is true.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** (0) · High = 0? **yes** (0) · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — the score clears the bar comfortably; the Medium does not. Both rows must be all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 96 | 19.20 | DES-098 now covers FR-131(a) in full and clause (d) is separately specified; §13 and §15 align. Docked because DES-094 declares FR-131 in its `Satisfies` column while the `anon` state's FR-131 disposition is unrecorded. |
| T2 Soundness | 20 | 98 | 19.60 | The reversal is reasoned, not asserted: it names the superseding authority (Doc 09 v1.3.0 `REL-LIM-18`/`ISS-03`; approver 2026-09-05), states the new rule, keeps the old text, and explains why clause 7's body must stay unchanged. Code was verified by reading at commit 84e2203, and I independently confirmed every constant. |
| T3 Traceability & IDs | 20 | 98 | 19.60 | `Source:` re-pinned to SRS v2.16.3 with an explicit "no normative requirement text changed across the delta" check; §15 rows accurate; clause 9 correctly twinned to clause 7; US disposition stated outright ("no new US — a copy-selection constraint on an existing component"); owed US/TC/RTM for FR-131 carried openly rather than quietly. |
| T4 Security & failure modes | 15 | 96 | 14.40 | The fail-honest default is specified completely for `ver` — `false`, absent, error and malformed all fall back to v1, and the `aria-label` follows the selected title. Docked because the sibling `anon` state has no fail-honest treatment and its false claim is mitigated by a "Learn more" affordance (clause 8) rather than by the copy itself, with no recorded reasoning for the asymmetry. |
| T5 Completeness & testability | 15 | 93 | 13.95 | The new §10.13.6 rule ("the ban reaches voting-adjacent status copy") is applied to one of the two affected status rows of the same normatively-bound component. The three-state table now annotates both `ver` cells and leaves the `anon` row bare — the exact mechanism the version's own note says produces hardcoded wrong copy, and `PrivacyStatus.tsx` lines 246–253 show it already has. |
| T6 Convention compliance | 10 | 99 | 9.90 | Exemplary. Annotate-don't-delete honoured at every one of the six edited locations; the changelog names the driving artefacts by commit and PR; the ADR sweep is **reported, not edited**, with the right justification; all five carried Lows are individually enumerated and individually verifiable. |
| **Total** | **100** | — | **96.65 → 97%** | Weighted sum = 19.20+19.60+19.60+14.40+13.95+9.90 = 96.65. Well above 95%, but 1 Medium ⇒ **FAIL**. |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T1 / T4 / T5 | §10.12.3 three-state table, **line 1666** (`anon` row) — against §10.13.6 line 1957 (the new rule), §10.12.3 line 1656 (DES-094 `Satisfies: … FR-131 …`), line 1660 (the normative note), and clause 8 line 1720 | v2.12.0 establishes a **new normative rule** at §10.13.6: "this ban reaches voting-adjacent **status** copy, not only notice text", and applies it to the `ver` title via clause 9 and a re-annotated table row. It records **no disposition for the `anon` state**, whose Title is the banned word "**Anonymous**" and whose Subtitle is "**Nothing you do here is linked to you**" — a stronger claim than the "Verified — private" this version just overruled. The `ver` row now carries a v2-only annotation on **both** cells; the `anon` row carries **none**. The document concedes the claim is false in v1 in its own words at clause 8, which states it exists precisely "because DES-098's honesty notice applies only at vote time … and does not cover non-vote contexts where the `anon` pill displays the claim 'Nothing you do here is linked to you'", and which requires disclosing that "their open-tier participation actions **are associated with that account in the platform DB**". **The failure mode is already realised in shipped code:** `packages/ui/src/PrivacyStatus.tsx` lines 246–253 hardcode `anon: { title: 'Anonymous', subtitle: 'Nothing you do here is linked to you' }` with no backing test and no annotation — mirroring the bare table row exactly as the v2.7.1/v2.12.0 note predicts for an unguarded cell. **This is a disposition gap, not necessarily a copy defect:** clause 8 is a real, owned, dated obligation and may well be the right treatment. The defect is that a reader cannot tell whether `anon` was ruled compliant, ruled out of scope of the new rule (it renders in *non-vote* contexts by definition, which is a genuine defence), or simply missed — in the same section, at the same version, where the sibling case was ruled. | Architect **records the `anon` state's FR-131 disposition explicitly** at §10.12.3, choosing and stating one of: **(a)** in scope — annotate the `anon` row v2-only and specify a v1 fail-honest default in a new clause, twinned to clauses 7 and 9 (and cascade to `PrivacyStatus.tsx` via the engineer); or **(b)** out of scope — state plainly that the new "voting-adjacent status copy" rule does **not** reach `anon` because it renders only in non-vote contexts, that **clause 8's disclosure affordance is the deliberate and sufficient treatment**, and annotate the `anon` row to say so and to point at clause 8, so no future implementer reads the bare cells as unconstrained copy. Either resolves the Medium; a silent gap does not. |

> **Low** issues do not block the pass bar. This document has **0 Low** — the five carried from
> v2.11.2 are all genuinely discharged — and **1 Medium**, which forces a FAIL.

## 5. v2.11.2 carried Lows — re-verification disposition

| Carried Low | Disposition at v2.12.0 | Evidence checked |
|---|---|---|
| #1 — §16 **Q17** body still read "exercises neither" | **CLOSED** | Line 3001: body now reads "`differential.test.mjs` exercises **none of the three**"; the title matches; and v2.11.2's changelog over-claim ("corrected in both its title and body") is annotated **in place** as the over-claim it was, rather than quietly dropped. |
| #2 — `Source:` pinned to stale SRS v2.16.0 | **CLOSED** | Line 32: re-pinned to "SRS-TRUMOCRACY v2.16.3 (Approved 2026-08-30)", with an explicit delta check ("No normative requirement text changed across the v2.16.0 → v2.16.3 delta; FR-131 (§4.45) is unchanged"). I confirmed v2.16.3 is the Approved version at HEAD and that FR-131's text is unchanged across that delta. |
| #3 — "Still routed … Doc 02 §13 (h)" line | **CLOSED** | Recorded as discharged at Doc 02 v2.16.3 (Status block, line 20–21). Doc 02 §13 (h) does exist and is product-owner-owned and OPEN, consistent with the annotation. |
| #4 — §10.13.12 `Traces:` FR-107 | **CLOSED** | Annotated related-only and expressly **not** a DES assignment, consistent with §15's FR-107 row and with Doc 08 holding that Must row OPEN at DES = none — the same defect class v2.11.2's own ISS-01 fixed at §5.2/§10.13.13. |
| #5 — §10.13.3 DES-096 ballot-state accessor | **CLOSED** | Line 1914: a full "Owed — ballot-state accessor" clause now sits in the seam spec itself, specifying a read-only accessor with v1/v2 backing symmetry and **no** set/force/skip/reorder capability, naming the owner (Ravi Deshmukh) and stating honestly that it blocks no current work. It correctly matches the §13 debt row (line 2674) that already owned the debt — closing the "owned in §13 but invisible in the seam spec" gap. |

**All five close on the merits.** No Low is carried forward, as the Status block claims.

## 6. Forward dependency — not an issue at this version

A **pending** Doc 02 amendment (v2.17.0, FR-131 clause (e) — honesty-of-claim across every v1
participation act, product-wide and language-independent, with the test being what an ordinary
Grade-8 reader would take a claim to mean) would make ISS-01's disposition question unambiguous: the
`anon` title "Anonymous" and subtitle "Nothing you do here is linked to you" would fail clause (e)
outright, and a "Learn more" affordance would not cure a claim that is false on its face. **That
amendment is not applied and ISS-01 does not rest on it** — ISS-01 stands on this document's own new
§10.13.6 rule, DES-094's FR-131 binding and clause 8's own admission, all present at v2.12.0 against
the currently Approved FR-131. Recorded here so the architect can sequence the two rather than be
surprised: if v2.17.0 is approved, option (b) in ISS-01's required fix ceases to be available and
option (a) becomes mandatory. The reviewer authored the pending amendment and discloses it at the head
of this report.

## 7. Routing instruction (to the owning role)

**FAIL — cycle 1 of 5.** Route to the **owning role: architect (Ravi Deshmukh)**. The reviewer has
made no edit to Doc 03.

Rework required: **ISS-01 (Medium)** only — record the `anon` state's FR-131 disposition at §10.12.3
under option (a) or option (b), explicitly. Nothing else in v2.12.0 requires rework: the FR-131
cascade, the v2.7.0 reversal, clause 9, the §13 and §10.13.6 corrections, the §15 trace rows, the code
verification and all five carried-Low discharges are correct, complete and independently confirmed.
The rework MUST produce a **new version** — a Medium makes a **patch bump the floor; v2.12.1 is the
natural target** if the disposition is recorded without changing normative copy, or **v2.13.0** if
option (a) mints a new clause — with `Status: In Review`, after which this loop re-reviews as cycle 2.

If option (a) is chosen, note the downstream cascade: `packages/ui/src/PrivacyStatus.tsx` lines
246–253 and its UT would need the engineer, and Doc 06 §7 would carry the item. If option (b) is
chosen, no code changes.

## 8. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5; the cap is not in sight.
