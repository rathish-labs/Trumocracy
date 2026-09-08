# Document Review Report — Doc 04 Test Strategy & Master Test Plan v1.5.0 (technical, cycle 1)

> Produced by the **document-review** skill. The reviewer scores and lists issues only — it never
> edits the reviewed document. All rework is the **owning role's** (architect, Ravi Deshmukh).

```
Reviewed document: 04-test-strategy-master-plan.md
Document version: 1.5.0
Review mode: technical
Reviewer role: reviewer-qa (Rafael Duarte) — neutral, PM-assigned per artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md
Score: 92%
Critical: 0
High: 0
Medium: 1
Low: 5
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 04 v1.5.0 is the criterion half of the FR-131 clause-(e) re-cut, applied as 14 anchored
operations from `artifacts/architect-2026-09-06T1530-doc04-spec.md`. **The clause-(e) work itself is
correct and, on the hardest judgement in it, better than correct.** All 14 OPs applied verbatim and
exactly once, with zero transcription residue; the widened S4/S5 scope matches Doc 02 v2.17.0 §4.45
word for word; the single most dangerous available error — minting a fifth DES-098 **notice** clause
— is refused explicitly in five places; and the `anon`-badge question is **routed as OPEN-27 rather
than ruled**, which is exactly what Doc 03 §10.12.3's own "the copy authority is here, and only here"
sentence requires of this document.

The version nevertheless **FAILS**, on one Medium and for one reason: this version's headline
achievement is discharging the three carried pin-currency Lows by re-pinning **Doc 07 v2.4.4 →
v2.6.0**, but it advanced the pin without re-verifying the body statements that depend on Doc 07's
content. The live `TC`-range **reservation register at §14** — whose stated purpose is "so numbering
does not collide", and which was itself re-cut at v1.1.0 against a **High** finding for exactly this
kind of drift — is now contradicted in **four rows** by the Approved Doc 07 v2.6.0 the document now
cites: `TC-3564..TC-3569` have been minted into `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`, out
of the band §14 still reserves for the six unminted `TS-V1-*` suites and still annotates "none
minted". That is a collision risk against CLAUDE.md's never-reuse ID rule, and it is the register's
second drift into fiction.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`92%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — a Medium forces FAIL regardless of score, and the score is also below the bar.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | Clause (e) fully covered: S4 criterion, S5 four-rule scan, verification path (UT-0889 / UT-0869 / inspection), the satisfying pattern, the public-by-design case, and the expressly out-of-scope enrolment class (Doc 02 §13 (j)). Every element of FR-131 (e) is discharged somewhere testable. |
| T2 Soundness | 20 | 94 | 18.8 | The (a)–(d) notice range vs (e) claims-duty distinction is right and defended repeatedly. The trigger-(iii) lapse analysis is literal and correct — clause (e) is scoped, not unconditional. Routing rather than ruling is the correct disposition and matches Doc 03's own copy-authority sentence. Deductions: the OPEN-27 body invokes the `anon` **subtitle** standing condition (which Doc 03 identifies as the same condition as trigger **(iv)**) yet the lapse analysis names only trigger (iii) (ISS-04); S4/S5 carve-out counts read as inconsistent out of context (ISS-05). |
| T3 Traceability & IDs | 20 | 76 | 15.2 | OPEN-27 minted correctly after the OPEN-26 high-water mark, no ID reused or renumbered; every version pin re-verified against the actual header (Docs 02/03/05/06/07/08/09 all correct). But the §14 `TC` reservation register is wrong in four rows against the newly pinned Doc 07 v2.6.0 (**ISS-01, Medium**), and OPEN-20's stated basis is half-superseded by that same source (ISS-02). This is the criterion the Medium lands on. |
| T4 Security & failure modes | 15 | 97 | 14.55 | S5 stays **build-failing**; the claims test closes the failure mode a word list cannot catch (verified: the two strings the 2026-09-06 ruling corrected contain none of the five words); carve-outs are bounded to exactly two and keyed to named strings; the "not a shipped-copy defect today" claim is evidence-based and independently confirmed — `PrivacyStatus` has no authenticated host surface in `apps/web`. |
| T5 Completeness & testability | 15 | 95 | 14.25 | No placeholders. The owed work is named with owner, target version and story (`US-0134`, Doc 07 v2.7.0 / Doc 08 v2.10.0), and FR-131's Doc 08 Must row is honestly left **OPEN** rather than upgraded. Minor: UT-0889's "not green" status is now stale (ISS-03). |
| T6 Convention compliance | 10 | 96 | 9.6 | RFC 2119, ISO-8601, named individual owners throughout, annotate-don't-delete applied consistently, 15-column header gutter preserved exactly, no `TC`/`UT`/`US` minted by a document that owns none. Minor: ragged mid-sentence line breaks introduced at §1.4 (ISS-06). |
| **Total** | **100** | — | **91.8% → 92%** | — |

## 4. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T3 | §14 reservation table (lines 2156, 2157, 2162, 2166) + §0.4 line 505 + §22 changelog line 345 + Downstream line 2441 | **The live `TC`-range reservation register is contradicted by the Approved Doc 07 v2.6.0 that this version itself re-pins.** Doc 07 minted `TC-3564..TC-3569` at v2.5.0 and assigned them across **three** suites — `TS-ADV-01…16` (TC-3564–3567), `TS-SCAFFOLD` (TC-3568), `TS-ABSENCE` (TC-3569), per Doc 07 v2.6.0 §2 rows 597/612/617 and its §4.3/§5/§5.3 headings. Doc 04 §14 still reserves **TC-3564–TC-3699** for the six unminted `TS-V1-*` suites and annotates it "reserved at v1.1.0; none minted", and three further rows are now incomplete: `TS-SCAFFOLD` TC-3470–TC-3488 (Doc 07: **+ TC-3568**), `TS-ADV-01…16` TC-2600–TC-2799 (Doc 07: TC-2600–TC-2752 **+ TC-3564–TC-3567**), `TS-ABSENCE` TC-1600–TC-1799 (Doc 07: TC-1600–TC-1614 **+ TC-3569**). §14's own opening states the register exists "so numbering does not collide"; the collision has already happened. This is the second drift of this register into fiction — the first was closed at v1.1.0 as a **High** (§22 changelog: "ISS-03 (High) CLOSED — §14's `TC`-range table reconciled…") and recorded as `OPEN-26`(a). The origin pre-dates v1.5.0, but it becomes a live self-contradiction **at v1.5.0**, because this is the version that moved the Doc 07 pin to v2.6.0 and published "the three v1.4.0 Lows are DISCHARGED… No Low is carried forward." | Re-cut the four affected §14 rows against **Doc 07 v2.6.0 §2** to record the **actual** allocation (the v1.1.0 remedy, re-applied): show TC-3568 under `TS-SCAFFOLD`, TC-3564–3567 under `TS-ADV-01…16`, TC-3569 under `TS-ABSENCE`, and narrow the `TS-V1-*` reservation to the band that is genuinely free (**TC-3570–TC-3699**), dropping or annotating "none minted". Update the three echoes at §0.4 line 505, §22 line 345 and Downstream line 2441. Annotate, do not delete, per house style. If the architect judges any part of the re-cut to be the tester's, mint an open item naming it — but this register must not keep asserting a band it does not own. |
| ISS-02 | Low | T3 | §13 `OPEN-20` (line 2119); §0.4 note (lines 498–502); §13 blocker bullet (line 2087) | **A declared v1 Gate-2 blocker carries a half-superseded basis.** `OPEN-20` states that Doc 07 "disagrees with itself on two `TC` ranges": `TS-PROPOSALS` (§2 TC-3542–3563 vs §5.6 heading TC-3542–3561) **and** `TS-SCAFFOLD` (§2 TC-3470–3488 vs §5.3 heading TC-3470–3487). At Doc 07 **v2.6.0** the `TS-SCAFFOLD` half is **resolved** — §5.3's heading now reads "(TC-3470–TC-3488, TC-3568)", matching §2. Only the `TS-PROPOSALS` half survives, so the item remains genuinely live and correctly gate-blocking; what is stale is its stated scope, in the version that re-pinned the source. | Annotate `OPEN-20` (and the §0.4 note) to record that the `TS-SCAFFOLD` half closed at Doc 07 v2.5.0/v2.6.0 and that the item now stands on the `TS-PROPOSALS` heading alone. Do not close the item. |
| ISS-03 | Low | T5 | §0.5 S4 v1.5.0 note (lines 586–592); `Source:` block (lines 127–131); Downstream (lines 2426–2435) | **`UT-0889` is described as "owed-and-in-progress, not green"; it has since landed and is green.** The guard exists at `apps/web/test/safety-surfaces.test.tsx:294` and is registered in Doc 06 v2.6.0 §3/§7; this reviewer executed the file independently — **25/25 pass** (vitest run of `test/safety-surfaces.test.tsx` inside `apps/web`, 2026-09-06). The statement is an under-claim, not an over-claim, and was accurate at authoring time in the same session, so it changes no conclusion; the Doc 06 pin ("last Approved v2.5.1; v2.6.0 being cut") remains exactly right, as Doc 06 is In Review at v2.6.0. Recorded so the tester's Doc 07 v2.7.0 / Doc 08 v2.10.0 re-cut is not gated on a status this plan can now observe. | On the next touch re-pin the three UT-0889 mentions to "registered in Doc 06 v2.6.0 (In Review); guard green as of 2026-09-06", keeping the discipline that this plan upgrades no *test status* it has not seen pass. |
| ISS-04 | Low | T2 | §0.5 S5 v1.5.0 carve-out annotation (lines 686–706); §13 `OPEN-27` (line 2126) | **The lapse analysis names trigger (iii) only, while its own text engages the condition Doc 03 equates with trigger (iv).** The conclusion is right — clause (e) is scoped, not unconditional, so trigger (iii) does not fire — but `OPEN-27` argues that the 2026-09-06 ruling "is such a review" for the `anon` subtitle's standing condition, and Doc 03 §10.12.3 states "Trigger (iv) is the same standing condition the `anon` subtitle decision already carries." A reader can therefore reach the opposite conclusion (that a trigger fired and the carve-out lapsed automatically) from the document's own sentences. On the evidence neither trigger fires — the 2026-09-06 ruling litigated landing copy and *established* nothing about how users read the badge — but the document does not say so. | Add one sentence disposing of trigger **(iv)** by name on the same evidence standard ("shows / establishes" is not met: the ruling addressed landing copy, not the badge), so the not-lapsed conclusion is complete rather than partial. |
| ISS-05 | Low | T2 | §0.5 S4 (line 562) vs §0.5 S5 rule 4 (line 656) | **Carve-out counts read as contradictory across two sections changed in the same version.** S4: "The word ban carries **one carve-out**"; S5: "**Two carve-outs, and only two.**" Both are correct within their own scope (S4 governs the notice and v1 voting surfaces, where the `anon` badge does not render; S5 governs the `apps/web` + `packages/ui` string scan), but S4 states its count without stating its scope, immediately after directing the reader to S5. | Scope S4's sentence explicitly — e.g. "within S4's scope the word ban carries one carve-out; S5's scan carries that one plus the named `anon`-badge exception" — so a mechanical reader cannot mis-apply either count. |
| ISS-06 | Low | T6 | §1.4 References (lines 968–969, 972–974) | Ragged mid-sentence line breaks introduced by the OP 9 replacement text ("…§16.4 honesty register, and / §4.45 FR-131 clause (e)) ·" and "…(unit-test standard, / `UT-####`, §2.1 / `IS_INSECURE_MOCK` discipline)"), inconsistent with the surrounding paragraph's wrapping. Faithful to the spec, so an authoring rather than an application defect. Cosmetic only. | Re-wrap the §1.4 paragraph on the next touch. |

> **Low** issues do not block the pass bar. The single **Medium** (ISS-01) does.

## 5. Verified and explicitly NOT a defect (recorded so the next cycle need not re-litigate)

1. **All 14 OPs applied verbatim, exactly once, with zero residue.** Mechanically verified: every
   `REPLACE WITH` block occurs in the file exactly once; the `FIND` block survives only for OP 5/6/11/14,
   where the spec's replacement deliberately contains its own find text (prepend/append patterns). No
   leaked `FIND:` / `REPLACE WITH:` markers, no four-backtick fences (the file holds exactly two fenced
   blocks, both pre-existing), no duplicated or truncated lines. `git diff` shows 282 insertions / 27
   deletions across 19 hunks, all inside the 14 named OP regions — **no out-of-spec edit**.
2. **The retained v1.4.0 records are intact.** The v1.4.0 `Status` narrative survives in full under
   `_(v1.4.0 record, retained verbatim per annotate-don't-delete…)_`; the v1.4.0 changelog entry
   survives below the new one, beginning "2026-09-06 v1.4.0 — **Rework cycle 1 against**"; the v1.4.0 S4
   note survives untouched below the new note, including its "If a clause (e) is later ruled in…"
   sentence — the instruction this version executes.
3. **Clause (e) is transcribed correctly from Doc 02 v2.17.0 §4.45.** The participation-act enumeration,
   the Grade-8 (`NFR-023`) claims test, the FR-014/FR-015 linkage argument, the `parties.joinPrivate`
   satisfying pattern, the public-by-design endorsement case and the `private_endorsement` Phase-4 flag
   all match the requirement text. The widened closing sentence is quoted exactly ("…v1 voting behaviour
   **or any other v1 participation act as defined in clause (e)**"), and Doc 02 does retain the
   superseded wording verbatim in its own Source annotation, as S4's note claims.
4. **The notice range correctly stays (a)–(d).** `grep "(a)–(e)"` returns five hits: three historical
   changelog quotes, the retained v1.4.0 note quoting what S4 *used to* say, and the new note stating
   flatly that the range does **not** become (a)–(e). **No live criterion asserts a five-clause notice**,
   so no fabricated fifth notice `TC` can be derived from this plan. This was the highest-risk failure
   mode available to the version and it is closed decisively.
5. **The authority chain is exact.** `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11
   row 3 reads "**APPROVED** — Draft and apply FR-131 clause (e) in Doc 02; let Doc 08 reopen and
   re-close through its loop", quoted correctly, applied as Doc 02 v2.17.0 (In Review) §4.45.
6. **Every version pin re-verified against the actual document header:** Doc 02 v2.17.0 In Review ✓ ·
   Doc 03 v2.13.0 **Approved** ✓ (the swept pin was right) · Doc 05 v2.5.0 Approved ✓ · Doc 06 v2.6.0
   In Review, last Approved v2.5.1 ✓ · Doc 07 v2.6.0 Approved ✓ · Doc 08 v2.9.0 Approved ✓ · Doc 09
   v1.9.0 Approved ✓. The three v1.4.0 Lows (ISS-C2-01/02/03) are genuinely discharged at every location
   the cycle-2 review named.
7. **OPEN-27 is minted correctly** — OPEN-26 was the high-water mark, the new row sits after it, no ID is
   reused or renumbered, and it is classified *not gate-blocking but owed* with the condition that would
   make it blocking stated (Doc 03 §10.12.3 clause 8's own ship trigger). Its body is accurate against
   Doc 03 v2.13.0 §10.12.3 in every particular checked: the COMPLIANT basis, the "not describing that
   user's voting behaviour" quote, clause 8's three contexts (screens 1.2 / 1.6 / 2.3), the subtitle
   concession, and trigger (iii)'s exact wording.
8. **Routing rather than ruling is the correct disposition, and the upstream document requires it.**
   Doc 03 §10.12.3 states "Downstream — the copy authority is here, and only here… It cites; it does not
   rule." Doc 04 cites and routes. Had this version ruled the `anon` copy either way it would have
   repeated the v2.7.0 defect its own S5 carve-out exists to avoid. This is the strongest judgement in
   the version and it should not be re-opened in rework.
9. **Cited artifacts that exist as described:** Doc 02 §13 tracked routing **(j)** (line 3039, scoped
   exactly as S5 rule 4 says), `NFR-023` grade-8 reading level, Doc 14 §2.2 "a public act, on purpose",
   `PRIVATE_ENDORSEMENT` as a Phase-4 flag off in staging and prod, and `UT-0869` at
   `apps/web/test/join-membership.test.tsx:446`.
10. **Untouched as claimed:** §0.6's 4 / 2 / 7 buckets and counts, every test status, `OPEN-01`'s
    Definition-B Gate-2 blocker status and owners, and `A-02.6` (re-read against clause (e): it describes
    the ballot banner under the clause-(a) carve-out and is unaffected). No suite added or retired; no
    `TC`, `US` or `UT` minted by a document that owns none of them.

## 6. Routing instruction (to the owning role)

**FAIL — route to the architect (Ravi Deshmukh), the owning role.** Rework MUST produce a **new
version**: one Medium finding makes a **minor bump the floor**, so **v1.6.0**, `Status: In Review`,
with a changelog entry describing only what changed. Fix **ISS-01** (required) and take **ISS-02 …
ISS-06** on the same touch rather than carrying them — the v1.5.0 record itself argues that
pin- and register-currency items carried forward are what produced this cycle's Medium. The clause-(e)
substance (§0.5 S4/S5, the `Source:` and §1.4 pins, `OPEN-27`, §22, §11.2, Downstream) is **verified
and MUST NOT be re-opened**; confine the rework to §14's reservation rows and their three echoes,
`OPEN-20`, the UT-0889 status line, and the two wording clarifications. This is **cycle 1 of 5**; the
loop re-reviews v1.6.0.

**Not for the architect:** nothing here routes to the engineer. The tester (Ji-woo Park) should note
ISS-01 and ISS-02 when cutting Doc 07 v2.7.0 / Doc 08 v2.10.0 — the free `TC` band below TC-3699 now
begins at **TC-3570**, not TC-3564.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 and the verdict is FAIL, not ESCALATED.
