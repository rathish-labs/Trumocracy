# Document Review Report — Doc 02 Requirements Specification v2.17.2 — business, cycle 1

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **reviewer-qa**, the PM-assigned neutral reviewer — **NOT** the document owner (the
> product-owner owns Doc 02). The reviewer scores and lists issues only; it never edits the
> document. All rework is done by the **owning role** (product-owner, Priya Raghunathan).
>
> **Reviewer assigned BEFORE dispatch**, per the ruling recorded at
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md` ("Neutral reviewers (recorded
> BEFORE dispatch)" — Doc 02 v2.17.2, business, **reviewer-qa**; excluded: product-owner (owner),
> tester (Doc 08 rows)). I did not self-appoint and I authored no other report this session.
>
> **Cycle:** 1 of 5, opening the v2.17.2 lineage. The predecessor version v2.17.1 was **PASS 96%**,
> 0C / 0H / 0M / **7L** — `artifacts/reviews/02-requirements-srs-v2.17.1-business-cycle2.md`.
> v2.17.2 is a **PATCH** by the product-owner touching the header and the §13 tracked-routing
> block only. Rework spec: `artifacts/product-owner-2026-09-08T1000-doc02-spec.md` (5 OPs, of
> which OP 1 targets the decision record and OPs 2–5 target this document).

<!-- MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.17.2
Review mode: business
Reviewer role: reviewer-qa (neutral — product-owner owns Doc 02)
Score: 92%
Critical: 0
High: 0
Medium: 1
Low: 9
Cycle: 1 of 5
Verdict: FAIL
Assignment record: artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md
```

---

## 1. Summary (BLUF)

**The change entry's central claim — "no normative text is touched" — is TRUE, and I can prove it
mechanically rather than assert it. But the delta contains one Medium: the new §13 (j) item (3)
records, as completed past fact, an application that had not happened when the version was
authored, and pins it to a Doc 06 version that does not exist. FAIL at 92%, 0C / 0H / 1M / 9L.**

**The "no normative change" claim, proven by byte-for-byte reconstruction.** I took the committed
baseline (`git show HEAD:docs/02-requirements-srs.md` — **v2.17.1**), applied the **4 Doc 02
operations** of the v2.17.2 spec, requiring each `FIND` to match **exactly once** at its step, and
compared the result with the file on disk:

```
Doc 02 ops applied: 4   (OP 2 header version/status · OP 3 date · OP 4 change entry · OP 5 §13 (j))
each FIND matched exactly once: yes (4/4)
baseline 473,754 bytes  ->  reconstructed 480,660 bytes   actual 480,660 bytes
BYTE-IDENTICAL: true
```

That single result discharges the whole verification the brief asked for, and is stronger than a
diff. Because the reconstruction is byte-identical, **everything outside those four op boundaries
is unchanged from v2.17.1 by construction**: FR-131 (including clause (e)), FR-132 (including
§(b)/(d)/(e)), every §8 Gherkin scenario, every §16 row, §4.45, §4.6, §9 CON-015 and §12 are
untouched. It also establishes **zero collateral edits** anywhere in the 480,660-byte file and
**zero transcription residue** at any of the four boundaries — any orphaned marker, duplicated row
or truncation would have broken byte-identity. Independent greps agree: `FIND:` → 0,
`REPLACE WITH:` → 0, conflict markers → 0, three-backtick fence lines → 18 (even, balanced,
unchanged from v2.17.1). The header `Version:` line still parses cleanly for the gate
(`hooks/check_gates.py::doc_current_version` takes the **first** `Version:` match in the first 40
lines → `2.17.2`); I checked specifically that the newly embedded "**Prior status, retained
verbatim:** Approved — …" cannot be mistaken by the hook for a live approval, and it cannot — the
hook reads only `Version:`, never `Status:`.

**Every factual claim the new item (j)(3) makes about the requirements baseline is accurate.** I
checked each against its cited source rather than against the owner's summary:

| Claim in (j)(3) | Source checked | Verdict |
|---|---|---|
| verify-and-discard is true **by design** | FR-132 §(b) (§4.46); DES-100 (30 refs, Doc 03); ADR-003 (9 refs, Doc 03) | accurate |
| enrolment unbuilt, `StubIdDocumentChecker.IS_INSECURE_MOCK()` = true | `packages/sdk/src/eligibility.js:260`; Doc 06 §7 (line 586) | accurate |
| the vendor **does** see the document | §16.4 **H-17** | accurate |
| non-retention is contractual, not technical | FR-132 §(e) + H-17 ("a legal and contractual control, not a technical guarantee") | accurate |
| same-document dedup is not one-person-one-vote | §16.4 **H-15** | accurate |
| `subject_id_hash` is a retained derived identifier | §16.4 **H-18** | accurate |
| issuer plurality **not in effect** in the single-rail pilot | OI-20 ruling (§4.40 FR-004 note, §4.43 FR-129); Doc 14 §1.2 ("**That rule is not in effect in this pilot**") | accurate |
| no enrolment sprint until **CON-015** clears | §9 CON-015 ("No enrolment sprint begins until CON-015 is cleared", CRITICAL PATH) | accurate |
| the three quoted `/verify` strings | `apps/web/src/i18n/en.ts` `verify.onDeviceBody`, `verify.kept`, `verify.chooseIssuerHelp` | quoted faithfully |
| decision 2 confirmed the README `/verify` qualification | `DECISIONS-2026-09-08-VERIFY-PAGE.md` §2, row 2 | accurate |
| remedy (a), flag defaults, normative copy at §5.3 | ibid. §5.1–§5.4 | accurate |

**The judgement calls in the delta are also right, and worth recording as good practice.** Three in
particular: (i) **no BR/FR/NFR is minted** — the duty already exists in FR-132 §(d)/(e) and the
phasing truths already exist at §16.4, so the gap was routing, not requirements ("delete before you
build" applied to requirements, correctly); (ii) items (1) and (2) are held **OPEN and explicitly
not resolved** by the (3) ruling, with the widening note stating that a future ruling "must be
recorded here, not inferred from this one" — that is precisely the right guard against a closure
silently widening; (iii) the widening note explains *why* the register widened rather than just
widening it, which is the same self-documenting discipline that earned v2.17.1 its B1 score.

**The Medium.** §13 (j)'s **Status column** reads "(3) **CLOSED — ruled and applied 2026-09-08**",
its body states in the present indicative that "the route **is** flag-gated out of the public v1
build", "the header nav link **is** hidden" and "the route **renders** a short honesty
placeholder", and it attributes this to "**Applied by the engineer (Doc 06 v2.8.0)**". The
**ruling** is genuinely closed and I do not dispute it. The **application** was not. At my first
snapshot of the working tree, none of it existed — no `enrolment_ui` flag, no placeholder copy, no
page or nav conditional, no guard — and the engineer's own session note
(`artifacts/engineer-2026-09-08T1100-verify-and-hook.md`) says so in terms: "decision 1 (/verify)
**pending**", "explicitly DEFERRED to a second message". The owner's own session note
(`artifacts/product-owner-2026-09-08T1000-verify-ruling.md` §6) likewise lists "Build remedy (a) …
| engineer | **Pending**". So the document asserted, as a dated completed fact, something its own
author recorded as pending. During this review the engineer applied most of it (timeline in §4.1),
but **Doc 06 v2.8.0 still does not exist** — Doc 06 is **v2.7.0, Approved** — so the row's pointer
to the artifact that supposedly records the application is a dangling reference, and will point at
an **In Review** document even once it is cut.

I have weighed the argument for Low carefully and rejected it. Cross-document version-pin drift has
Low precedent here (Doc 06 v2.7.0's carried ISS-C2-01/ISS-C2-02, both graded Low by the tester),
and if this were only a stale pin I would grade it Low too. It is not only a pin. It is a
**build-state assertion in the Status column of a governed register** — the field a downstream
reader consults to learn whether an item is closed — and the downstream readers are named and
imminent: the technical-writer is directed (`DECISIONS-2026-09-08-VERIFY-PAGE.md` §5.7) to rewrite
the public README to say `/verify` is "flag-gated off in the public build", sourcing that claim
from this row, and the project-manager will read this row when assembling Gate-2 readiness. Under
CLAUDE.md's artifact-bus rule a document must stand on its own; standing on its own, this row
directs a reader to Doc 06 v2.8.0 for an application that Doc 06 v2.8.0 does not yet record.
**And the reflexive point is not rhetorical: this is the exact defect class the version exists to
record** — approver decision 1 held that "a public surface MUST NOT state an unbuilt guarantee as
current fact", and the row announcing that ruling states an unbuilt remedy as applied fact. A
register that does this once will be trusted the next time it does it.

The fix is small — separate the **ruling** (closed, dated, correct) from the **application** (state
its real, verifiable status and cite an artifact that exists). It is a wording and status
correction with no normative effect, so **a PATCH bump to v2.17.3 is correct**; a minor bump is not
warranted.

**Nine Lows — two new, seven carried.** The seven carried from v2.17.1 (ISS-01..ISS-07 of that
report) are re-confirmed present and correctly disclosed in the header; byte-identity proves none
of their sites moved. Per the brief they are not re-argued and none is raised above Low. The two
new Lows are a citation-set drift (H-15 substituted for H-16 against clause (e)'s own carve-out
list) and a missing §12 session-scope entry.

**Verdict: FAIL at 92%, 0C / 0H / 1M / 9L.** Route to the product-owner for **v2.17.3**.

---

## 2. Pass-bar check

- Score >= 95%? **No** (`92%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No** (1)
- **Verdict:** `FAIL` — both limbs fail; either alone would be sufficient.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0-100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 96 | 19.20 | The delta is unusually well-motivated. The widening note states **why** the register widened (same defect class; approver decision 2 directed it) rather than just widening it, and it forecloses the obvious misreading by saying items (1)/(2) are "**not** resolved by the (3) ruling; a future ruling on either must be recorded here, not inferred from this one". The change entry names the ruling, the delegation, the choice and the scope limit in that order. Small deduction: the "applied" overstatement blurs what the record actually establishes — a reader cannot tell from the row whether the decision or the code is what closed. |
| B2 Completeness | 15 | 92 | 13.80 | Everything the ruling needs to be actionable is present: the decision, the choice, the flag and its defaults, the normative copy source, the guard spec pointer, the TC owed to the tester, and an explicit statement of what is **not** ruled. Deductions: **no §12 session-scope entry** for v2.17.2 (ISS-03), breaking the pattern re-established one version earlier at the cycle-1 reviewer's request; and the row's supporting artifact (Doc 06 v2.8.0) does not exist, so the record is not yet self-supporting (part of ISS-01). |
| B3 Traceability & IDs | 20 | 88 | 17.60 | **No ID minted, reused or renumbered** — proven by byte-identity, not asserted; the Must count is untouched because §16 is untouched. Every outward citation I could check resolves and says what is claimed (table in §1): FR-131(e), FR-132 §(b)/(d)/(e), CON-015, H-15/H-17/H-18, OI-20, Doc 14 §1.2, DES-100, ADR-003, Doc 06 §7, and the two decision-record sections. Deductions: the **dangling Doc 06 v2.8.0 pin** (ISS-01) and the **H-15-for-H-16 citation-set drift** against clause (e)'s own carve-out list (ISS-02). |
| B4 Correctness & consistency | 15 | 86 | 12.90 | No factual regression anywhere in the requirements baseline — byte-identity establishes that directly, and every substantive claim in (j)(3) checks out against its source. This is where the Medium lands: the row asserts a build state that was false when authored, that the document cannot verify, and that **contradicts the owner's own session note** ("Pending") and the engineer's ("explicitly DEFERRED"). Internal consistency between a governed document and its authoring role's record is the thing a reviewer is for. |
| B5 Testability | 15 | 94 | 14.10 | Not a testability-bearing change: no acceptance criterion, scenario or MoSCoW value is touched. The row does its testability job well — it routes the guard to a concrete 15-assertion specification (`DECISIONS-2026-09-08-VERIFY-PAGE.md` §5.5–§5.6) and records the **TC as owed to the tester at the next Doc 07/08 touch** rather than quietly dropping it, which is the correct handling given Doc 08 closed on the cap. Deduction: carried ISS-06 (two Scenario-8 steps restate rules rather than assert outcomes) remains open and unaddressed, as disclosed. |
| B6 Convention compliance | 15 | 96 | 14.40 | ISO-8601 dates throughout the delta. **PATCH bump is correct** on the document's own declared convention (no normative change), consistent with v2.17.1 and with my predecessor's routing. **Annotate-don't-delete honoured**: the prior `Status:` is retained verbatim under an explicit label, and the original (j) prose on items (1) and (2) is re-emitted unchanged rather than rewritten. RFC 2119 usage in the delta is narration of a ruling, not new normative text, and is correctly cast. The Owner column names roles rather than persons, but that is the pre-existing pattern of the §13 routing table (rows (h), (i) and the prior (j) all do it) and this table holds routing items, not requirements — not raised. Deduction: the seven carried Lows include one convention item (ISS-07, capitalised "Grade-8") still open; I re-verified it is 2 occurrences in **both** v2.17.1 and v2.17.2, i.e. unchanged, not worsened. |
| **Total** | **100** | — | **92.00% = 92%** | — |

---

## 4. Issues (every issue severity-classified and located)

> **No Critical, no High. One Medium — it alone forces the FAIL, independently of the score.**
> Nine Lows: **two new** (ISS-02, ISS-03) and **seven carried** (ISS-04..ISS-10), which per the
> dispatch are recorded, not re-argued, and none of which is raised above Low.

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-01** | **Medium** | B4 / B3 | §13 tracked routing, item **(j)(3)** — the **Status column** ("(3) **CLOSED — ruled and applied 2026-09-08**"), the body clause "Applied by the engineer (**Doc 06 v2.8.0**)", and the present-indicative build claims ("the route **is** flag-gated…", "the nav link **is** hidden", "the route **renders**…"); echoed in the header **Change:** entry ("(3) the `/verify` page copy **CLOSED — ruled and applied 2026-09-08**") and the **Status:** block | **A governed register asserts, as dated completed fact, an application that had not occurred when the version was authored, and cites an artifact that does not exist.** The **ruling** is properly closed (approver decision 1 + the PO's choice at §5) and I do not dispute it. The **application** was not: at my first inspection of the working tree there was no `enrolment_ui` entry in `packages/protocol/src/flags.js`, no `ENROLMENT_UI` in `apps/web/src/config/flags.tsx`, no placeholder keys in `en.ts`/`ar.ts`, no conditional in `verify/page.tsx` or `SiteHeader.tsx`, and no guard. Both role notes agree: the engineer's says decision 1 is "**pending** … explicitly DEFERRED to a second message"; the owner's §6 lists "Build remedy (a) … **Pending**". The engineer applied most of it **during** this review (see §4.1), but **Doc 06 is still v2.7.0 (Approved)** — v2.8.0 does not exist, and when cut will be **In Review**. Under the artifact-bus rule the row must stand alone; standing alone it sends a reader to an artifact that records nothing. The harm is not hypothetical: the technical-writer is directed by `DECISIONS-2026-09-08-VERIFY-PAGE.md` §5.7 to rewrite the **public README** to say `/verify` is "flag-gated off in the public build", sourcing that claim from this row, and the PM will read this row for Gate-2 readiness. **Medium, not Low**, because this is a build-state assertion in a Status field rather than a stale version pin (the Low-precedent class, Doc 06 ISS-C2-01/02); **Medium, not High**, because it is contained to one row plus two header echoes, corrupts no requirement, ID or trace chain, and is fixable by wording alone. | **Separate the ruling from the application, and cite only artifacts that exist.** (a) **Status column** → state the ruling as closed and the application as its own tracked fact, e.g. "**(3) RULED 2026-09-08 (approver decision 1 + PO remedy (a)); application routed to the engineer — recorded status in Doc 06 §7 and the UT registry.**" (b) **Body** → recast the present-indicative build claims into the decided posture ("the remedy **is that** the route is flag-gated … behind `enrolment_ui`") so the sentence describes the decision, which Doc 02 owns, not the build, which it does not. (c) **Doc 06 pin** → either drop the version number ("registered by the engineer in Doc 06 §7 and the UT registry") or, if a version is kept, pin it only once Doc 06 v2.8.0 exists **and** state its status. (d) Mirror the correction in the `Change:` entry and the `Status:` block so all three sites agree. |
| ISS-02 | Low | B3 | §13 (j)(3) and the **Widening note (2026-09-08)** — "FR-132 §(d)/(e) and §16.4 **H-15/H-17/H-18** record as untrue in code" (2 occurrences of `H-15/H-17/H-18`, plus 1 spaced variant in the change entry) — against **FR-131 clause (e)**, whose carve-out reads "addressed by FR-132 §(d) and by §16.4 **H-16/H-17/H-18**" (1 occurrence) | **The widening note paraphrases clause (e)'s carve-out but silently substitutes H-15 for H-16.** Each citation is individually defensible — H-15 genuinely supports the one-person-one-vote point the row makes — but the note presents the set as the provisions "FR-131 clause (e) expressly does not reach", and clause (e)'s own enumeration of that set is **H-16/H-17/H-18**. A reader comparing the two sees the same idea cited with two different H-sets and cannot tell which is authoritative. The substitution also **drops H-16**, the provision most directly answering the `/verify` string the row quotes — "a short code … which cannot be traced back to you" — since H-16 records that the operator database holds `subject_id_hash` and `phone_hash` as derived identity data. The owner's own session note (§2) cites H-16 for exactly that string; the Doc 02 row is therefore weaker than its author's analysis. | Cite **H-15/H-16/H-17/H-18** in the widening note (the union is correct and costs four characters), or state the two sets distinctly: clause (e)'s carve-out set is H-16/H-17/H-18, and H-15 is cited additionally for the one-person-one-vote point. Non-blocking; fold into v2.17.3 alongside ISS-01. |
| ISS-03 | Low | B2 | **§12** (session scope) — the section ends with the **v2.17.1** entry; there is no v2.17.2 entry before `## 13.` | **No §12 session-scope entry for v2.17.2**, breaking the pattern re-established one version earlier. Cycle-1 ISS-07 against v2.17.0 raised precisely this omission, and v2.17.1's fix added entries for **both** v2.17.0 and v2.17.1; a reader of §12 now sees the series stop at v2.17.1 while the header advertises v2.17.2. The owner scoped it out deliberately ("Nothing else in this document is edited"), which is defensible for a header-plus-one-row patch, and my predecessor recorded that v2.16.0–v2.16.3 also have no entries, so the pattern is not universal — hence **Low**, and unchanged in severity from when it was last raised. | Add a short §12 entry for v2.17.2 in the established form (no new FRs; no IDs minted, reused or renumbered; Must count stays at 114; the §13 (j) widening and its two recorded decisions). Fold into v2.17.3 — it is a third site in the same rework, not a separate errand. |
| ISS-04 | Low | B3 | §8, FR-131 Gherkin block — scenarios numbered 1,2,3,4,5,**8**,9 — **carried**; v2.17.1 report ISS-01 | **Confirmed still present and unchanged** (byte-identity: §8 lies outside every op boundary). Correctly disclosed in the new `Status:` block. Per the standing routing, **do not renumber** now that Doc 07/08 reference these labels. | Unchanged: add a one-line block comment noting numbering continues at 8 and that 6/7 were never used. Fold into the next version that touches §8. |
| ISS-05 | Low | B2 / B4 | Three pointers cite "Scenario 8" alone where Scenario 9 also applies (`Scenario 8` → 6 occurrences; `Scenarios 8 and 9` → 1) — **carried**; v2.17.1 report ISS-02 | **Confirmed still present and unchanged.** Correctly disclosed. Still the carried Low that matters most, because the FR-131 Source annotation is the tester's natural path and Scenario 9 is the absence test. | Unchanged: "Scenario 8" → "Scenarios 8 and 9" at the three pointer sites, prioritising the FR-131 Source annotation. |
| ISS-06 | Low | B5 | §8, Scenario 8, last two steps — **carried**; v2.17.1 report ISS-03 | **Confirmed still present and unchanged.** Two steps restate rules rather than assert observable outcomes. | Unchanged: move to a `# Note:` comment or recast as assertions. Fold into the next version touching §8. |
| ISS-07 | Low (record-only) | B6 | Header `Change:` block, **v2.17.0** entry — one capitalised "Grade-8" — **carried**; v2.17.1 report ISS-04 | **Confirmed unchanged, and I verified it did not worsen:** `Grade-8` occurs **2** times in v2.17.1 and **2** times in v2.17.2 (one inside the ISS-04 description in the retained `Status:` text, one in the v2.17.0 narration). Dated historical narration is not rewritten in this document. | **No fix required.** Record-only, as before. |
| ISS-08 | Low | B4 | §4.6 FR-064, the "v2 (deferred):" clause — **carried**; v2.17.1 report ISS-05 | **Confirmed still present and unchanged** (§4.6 lies outside every op boundary; the `Status:` block accurately states this version does not touch §4.6). | Unchanged: add a v1 cross-reference to FR-023/FR-068 on the next version that touches FR-064. |
| ISS-09 | Low | B2 / B4 | Header `Change:` block, **v2.16.0** entry — "(not a defect in v1, which holds no vote)" (1 occurrence) — **carried**; v2.17.1 report ISS-06 | **Confirmed still present and unchanged.** Dated changelog narration; contradicts no governing text. | Unchanged: optional cleanup on a version that rewrites the changelog narration. |
| ISS-10 | Low | B4 | §13 tracked routing **(h)** — the "v1 does hold a vote" wording — **carried**; v2.17.1 report ISS-07 | **Confirmed still present and unchanged.** Worth stating precisely: v2.17.2 **does** touch §13, but OP 5's boundary is the (j) row and the table header only — row (h) lies outside it, and byte-identity proves it did not move. The `Status:` block's claim to that effect is accurate. | Unchanged: qualify to "so v1's **design** does hold a vote (the ballot layer itself, tracked separately at §13 (g))". |

---

### 4.1 The moving-target problem, recorded in full

The repository changed under me during this review — the engineer was applying remedy (a) in
parallel. I record the timeline because ISS-01's severity depends on it, and a later reader must be
able to audit my reasoning rather than take it on trust.

| Time (UTC) | Observed state |
|---|---|
| first snapshot (start of review) | Search for `enrolment_ui` / `ENROLMENT_UI` across `packages/protocol/src/flags.js`, `apps/web/src/config/flags.tsx`, `apps/web/src/app/verify/page.tsx` → **no matches**. Search for `unavailableTitle` in `apps/web/src/i18n/*.ts` → **no matches**. `git status` showed **no** modified files under `apps/` or `packages/`. Doc 06 **v2.7.0**. |
| 2026-09-08T18:06:44Z | `flags.js:80 ENROLMENT_UI`, `flags.tsx:93`, and the `en.ts`/`ar.ts` placeholder keys present. `verify/page.tsx` and `SiteHeader.tsx` **not yet** gated. Doc 06 still **v2.7.0**. |
| 2026-09-08T18:10:41Z | `verify/page.tsx` imports `useFlag`/`FLAG` and renders `data-testid="verify-unavailable"`; `SiteHeader.tsx:38` wraps the `/verify/` list item in a flag conditional; `UT-0890` present in `apps/web/test/safety-surfaces.test.tsx`. Doc 06 **still v2.7.0**. |

Two consequences. **First**, the version under review asserted "applied" at a time when nothing was
applied — that is a fact about the document, not about the code, and it is not cured by the code
landing afterwards. **Second**, the part of ISS-01 that remains true regardless of timing is the
**Doc 06 v2.8.0 pin**: at review close Doc 06 is v2.7.0 Approved, so the row's supporting artifact
does not exist. ISS-01 can therefore be closed in v2.17.3 by the wording fix alone, independently
of what the engineer's branch does — which is exactly the point of the required fix: **Doc 02
should record the decision it owns, not the build state it does not.**

I did **not** review the code, the flag, the guard or Doc 06. Doc 06 v2.8.0 and the code drop are
assigned to the **tester** (technical mode) by the same assignment record; the code state above is
cited only as evidence about Doc 02's claims and is not a code review. I make no finding on whether
the engineer's implementation is correct.

### 4.2 Independent verification performed

| Property | Method | Result |
|---|---|---|
| **All 4 Doc 02 ops applied exactly; zero collateral edits; zero residue** | Reconstructed v2.17.2 from `git show HEAD:docs/02-requirements-srs.md` (v2.17.1) by applying OPs 2–5 of `artifacts/product-owner-2026-09-08T1000-doc02-spec.md`, each `FIND` required to match **exactly once**, then compared with the file on disk | **BYTE-IDENTICAL** — 480,660 bytes both sides; 4/4 FINDs matched exactly once; baseline 473,754 bytes |
| **"No normative text is touched"** — the change entry's central claim | Follows directly from byte-identity: FR-131, FR-132, §8, §16, §4.45, §4.6, §9 and §12 all lie outside the four op boundaries | **CLAIM VERIFIED — TRUE** |
| No BR/FR/NFR/CON/RISK/DES/ADR/SCR/US/TC/UT id minted, reused or renumbered | Byte-identity (all ID-bearing sections outside the ops) | PASS |
| Must count unaffected | §16 untouched (byte-identity); the delta makes and changes no count claim | PASS |
| Transcription residue | `FIND:` → **0**; `REPLACE WITH:` → **0**; conflict markers → **0**; three-backtick fence lines → **18** (even, balanced, unchanged from v2.17.1) | PASS |
| Header parses for the gate; the embedded prior "Approved" cannot spoof it | Read `hooks/check_gates.py::doc_current_version`: first `Version:` match within the first 40 lines; `Status:` is never parsed. Doc 02 line 5 is `Version:       2.17.2` | PASS — no gate hazard from the enlarged `Status:` block |
| Gate audit identifies this version, and this document only | `node hooks/run_gates.cjs --audit` → exit **0**; `BLOCK  02-requirements-srs.md v2.17.2 (business) - no report for this version`; the nine other gated docs **PASS**; "Documents blocking the review loop: 1" | PASS — the only blocking document is the one I am assigned to |
| Every outward citation in (j)(3) resolves and says what is claimed | Eleven checks against Doc 02 §4.45/§4.46/§9/§16.4, Doc 03, Doc 06 §7, Doc 14 §1.2, the decision record and `en.ts` — table in §1 | PASS on all eleven |
| The three quoted `/verify` strings are quoted faithfully | Read `apps/web/src/i18n/en.ts` `verify.*`: `onDeviceBody`, `kept`, `chooseIssuerHelp` | PASS — elisions are fair; no claim distorted |
| Items (1) and (2) re-emitted verbatim, not silently reworded | OP 5's REPLACE re-emits the v2.17.1 (1)/(2) prose unchanged; confirmed by whole-file byte-identity | PASS |
| The recorded remedy is genuinely reversible (the reversibility principle) | The row records a feature flag with `dev: true, staging: false, prod: false` and a `removeBy`; reversal is a flag flip | PASS **as recorded** — I make no finding on the implementation |
| Carried Lows still present and correctly disclosed | Byte-identity (all seven sites outside the ops) plus targeted counts: `no public-facing string` → 0, `Scenario 8` → 6, `Scenarios 8 and 9` → 1, `Grade-8` → 2 (also 2 in v2.17.1), the v2.16.0 echo → 1, `v2 (deferred):` → 1 | PASS — all seven carried; the header's disclosure is accurate |
| The build-state claim | `git status`, targeted searches at three timestamps, the Doc 06 header, and both role session notes | **FLAG → ISS-01 (Medium)** |
| H-set citation consistency | Counts: `H-16/H-17/H-18` → 1 (clause (e)); `H-15/H-17/H-18` → 2, plus 1 spaced variant (the delta) | **FLAG → ISS-02 (Low)** |
| §12 continuity | Read §12's tail: the last entry is v2.17.1; no v2.17.2 entry before `## 13.` | **FLAG → ISS-03 (Low)** |

---

## 5. Routing instruction (to the owning role)

**FAIL — route to the product-owner (Priya Raghunathan) for rework as a NEW VERSION.** Per the
brief's question: **bump to `v2.17.3` (PATCH), `Status: In Review`.** A patch is the right
increment — the required fixes are wording, status and citation corrections with **no normative
effect**, the same convention this document applied at v2.17.1 and which my predecessor endorsed.
Cycle 1 of 5; the cap is nowhere near.

**Blocking (must be fixed in v2.17.3):**

- **ISS-01 (Medium)** — separate the **ruling** from the **application** at all three sites (§13 (j)
  Status column, §13 (j) body, header `Change:` entry). Doc 02 should record the decision it owns
  and route the application, not assert a build state it cannot verify. Drop or correct the
  **Doc 06 v2.8.0** pin so it names an artifact that exists.

**Fold into the same version (cheap, same neighbourhood):**

- **ISS-02 (Low)** — cite H-15/H-16/H-17/H-18, or distinguish clause (e)'s carve-out set from the
  additional H-15 citation.
- **ISS-03 (Low)** — add the §12 session-scope entry for v2.17.2.

**Carry unchanged (ISS-04..ISS-10, seven Lows):** routing is unchanged from the v2.17.1 report —
ISS-04/05/06 ride with the next version that touches §8 (**ISS-05 remains the one worth doing
first**), ISS-07 is record-only, and ISS-08/09/10 ride with FR-064, the changelog narration and
§13 (h) respectively. The header's disclosure of all seven is accurate and should be carried
forward again.

**Note for the project-manager.** Two process observations, offered as evidence rather than opinion.
(1) The **byte-identical reconstruction** worked again, first time, on a 5-op spec — the applier
discipline is holding, and the check remains the cheapest strong evidence available for
anchored-spec application. (2) ISS-01 is a **sequencing** defect, not a care defect: the
product-owner authored a truthful record of a decision and then described its application in the
past tense while the applying role had explicitly deferred that work to a later message. The
durable fix is not more diligence from the owner but a convention — **a document records the
decision it owns and routes the application; only the applying role's document reports that the
application happened.** That may be worth an `AL-CANDIDATE` entry, since the same shape produced
the Doc 06 v2.7.0 stale-pin Lows (ISS-C2-01/ISS-C2-02).

**Scope note.** I reviewed **only Doc 02 v2.17.2**, per
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`, which named me before dispatch. The
audit showed Doc 02 v2.17.2 as the single blocking document and I did **not** self-appoint for any
other; Doc 06 v2.8.0 and the code drop belong to the **tester**, and the README/CONTRIBUTING delta
to the **product-owner**. **This report makes no Gate-2 finding and signs no merge** — the RTM
zero-gap certification and the merge sign-off are separate acts on separate evidence, and the audit
still reports "Gate 2 traceability criterion: NOT MET" (138 Must rows, 16 COMPLETE, 122 OPEN).

## 6. Human decision at the cap (ESCALATED only)

Not applicable — the verdict is **FAIL at cycle 1 of 5**. The cap was not reached and no human
decision is required or recorded here.

---

## 7. Addendum (2026-09-08T18:18Z) — a state change after scoring, recorded not rewritten

House convention here is annotate-don't-delete, so I append rather than revise. **After** I scored
this version and wrote §1–§6, the engineer cut **Doc 06 v2.8.0** (`Status: In Review — neutral
reviewer assigned before dispatch: tester`). Statements above that Doc 06 "is still v2.7.0" were
accurate when written and are now superseded on that one fact; I leave them in place so the
timeline in §4.1 stays auditable.

**This does not change the verdict, the score, or ISS-01's severity**, for three reasons:

1. **The defect is about the document, not the code.** Doc 02 v2.17.2 asserted "applied" and
   "CLOSED" at a time when nothing was applied and Doc 06 v2.8.0 did not exist. A later event does
   not make an earlier assertion true when it was made; it only makes it lucky.
2. **The pin is still wrong in kind.** Doc 06 v2.8.0 is **In Review**, not Approved — it is itself
   blocked in the audit awaiting the tester. A register row that cites an unreviewed document as
   the record that a remedy "was applied" is citing a claim, not a verification. My required fix
   already anticipated this: pin a version "only once Doc 06 v2.8.0 exists **and** state its
   status".
3. **The Status column still overstates.** "CLOSED — ruled and applied" conflates a closed ruling
   with an application whose own review has not run. Nothing is verified until the tester scores
   Doc 06 v2.8.0 and the code drop.

The required fix in ISS-01 is unchanged and is, if anything, now cheaper: v2.17.3 can pin
"Doc 06 v2.8.0" **with its status**, and separate the ruling from the application in the Status
column. **I re-affirm: FAIL, 92%, 0C / 0H / 1M / 9L.**
