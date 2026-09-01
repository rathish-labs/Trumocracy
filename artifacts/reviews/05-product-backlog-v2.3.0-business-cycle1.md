# Document Review Report — Product Backlog (BKLG-TRUMOCRACY) v2.3.0

```
Reviewed document: 05-product-backlog.md
Document version: 2.3.0
Review mode: business
Reviewer role: architect (neutral — the owning role for Doc 05 is the product-owner)
Score: 69%
Critical: 1
High: 5
Medium: 4
Low: 4
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Business-rubric cycle-1 review of `docs/05-product-backlog.md` v2.3.0 (BKLG-TRUMOCRACY, Status:
In Review, Last updated 2026-08-25), read end to end (3,219 lines: 12 epics, 58 features, 134
stories, 9 non-functional items, 23 screens). This is the review the document's own header records
as owed before Gate-1 presentation. **The verdict is FAIL at 69%, with 1 Critical, 5 High and 4
Medium issues.**

The single most important reason: **the backlog is pinned to a superseded requirements baseline and
has silently stopped covering the Must set.** The header pins SRS **v2.13.0**; the approved SRS is
**v2.16.3** (2026-08-30). §2 asserts "All 101 Must FRs in Doc 02 v2.2.0 are covered by at least one
story", but SRS v2.16.3 §11 carries **114 Must FRs**, and **eight Must FRs have no story anywhere in
this document** — FR-121, FR-125, FR-126, FR-127, FR-128, FR-129, FR-133 (undeclared), and FR-050
(declared, but mis-labelled "Should or Could"). The CLAUDE.md traceability rule requires every
FR to trace **down** to a `US`; eight Must chains are broken at this document, and a gap in any Must
row blocks Gate 2. RTM v2.7.0 §7 (gap-log entries 119–126) independently corroborates each one.

Beyond coverage, the document's status reporting has drifted out of agreement with the artefacts
that are authoritative over it. RTM v2.7.0 — authoritative on the Definition of Done — records **17
of 134** stories meeting DoD. Doc 05 describes five of those seventeen (US-0021, US-0089, US-0090,
US-0100, US-0131) as *not* done or *Not Ready*. It states that US-0132/0133/0134 have "no TC-####
minted yet" when Doc 07 v2.4.4 (Approved) carries TC-3470..TC-3488 for exactly those three stories.
And US-0073's first acceptance scenario still specifies the **auto-void** join semantics that SRS
v2.15.0 explicitly superseded on 2026-08-29 in favour of explicit-leave-then-join.

What is genuinely strong, and should not be lost in rework: all 134 stories carry Gherkin acceptance
criteria with at least one negative or adversarial scenario; the named-owner rule is satisfied
**134/134** with a person named on every story and every NF item; the ID scheme is clean with no
reuse and with supersession annotated rather than deleted (US-0054, US-0071); the WSJF arithmetic in
§3 is correct in all twelve rows; and every epic carries a falsifiable outcome hypothesis with a
quantified success metric. The defects are of currency and coverage, not of craft.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`69%`)
- Critical = 0? **no** (1) · High = 0? **no** (5) · Medium = 0? **no** (4)
- **Verdict:** `FAIL` — PASS only when both rows above are all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 85 | 17.00 | Goal, walking-skeleton definition and twelve falsifiable outcome hypotheses with quantified metrics are strong. Deducted for the absent v1/v2 (SRS §16 Definition A/B) framing — EP-06 and EP-09 state v2 cryptographic guarantees as if they were in scope now (ISS-10). |
| B2 Completeness | 15 | 65 | 9.75 | All 12 template sections present, no placeholders, every story carries owner/priority/points/AC. Deducted for 8 uncovered Must FRs (ISS-01, ISS-02) and for the story atom omitting the `DES-###`/`SCR-##`/`Verified by: TC-####` fields the template §6 mandates (ISS-06). |
| B3 Traceability & IDs | 20 | 52 | 10.40 | ID scheme correct and stable; supersession annotated. But the FR→US chain is broken for 8 Must FRs, 129/134 stories carry no DES link, no story carries a TC link, §12's maps are pinned to superseded SRS versions, and §1's BR range is 8 short (ISS-01/02/05/06/07/09). Weakest criterion. |
| B4 Correctness & consistency | 15 | 55 | 8.25 | Contradicts three Approved upstream documents: SRS v2.16.3 on FR-064 semantics (ISS-03), RTM v2.7.0 on five story statuses (ISS-04), Doc 07 v2.4.4 on TC existence (ISS-05), SDD v2.11.2 on seven DES assignments (ISS-07). Plus stale pins and three internal self-contradictions. |
| B5 Testability | 15 | 78 | 11.70 | Gherkin on all 134 stories with ≥1 adversarial/negative scenario each — consistently applied and genuinely good. MoSCoW inherited from Doc 02 and applied per story; explicit per-epic Out-of-scope. Deducted: no `Verified by` anchor on any story, US-0073's AC tests superseded behaviour, no kill criteria at any level. |
| B6 Convention compliance | 15 | 76 | 11.40 | Named-owner rule fully satisfied (134/134 persons, no team names); ISO-8601 dates throughout; Gherkin house style consistent. Deducted for template deviations (ISS-06, ISS-11), stale version pins and labels (ISS-08, ISS-13) and an inaccurate header claim (ISS-14). |
| **Total** | **100** | — | **68.5% → 69%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Critical** | B3 | §2 (Contents, "All 101 Must FRs in Doc 02 v2.2.0…"); §12 ("**All 101 Must FRs** in Doc 02 v2.2.0 are implemented by at least one story") | The Must-FR population is stated as **101** against SRS **v2.2.0**. SRS **v2.16.3 §11** (Approved) carries **114 Must FRs** (FR-001..FR-133 less the Should/Could and the 2 superseded). **Seven Must FRs have no story anywhere in this document and are not declared as gaps: FR-121** (pilot jurisdiction sequence), **FR-125** (open-tier invite-gating with mandatory non-invite fallback), **FR-126** (on-device credential processing), **FR-127** (nullifier-collision-only duplicate detection), **FR-128** (no stored identity / subpoena test), **FR-129** (attestor-plurality Charter guard), **FR-133** (v1 spam-resistance flag-don't-block). A full-text search of Doc 05 returns these IDs only inside changelog prose ("same recorded-phasing posture as FR-121..FR-129"), never as an `Implements:` value. RTM v2.7.0 §7 entries 119–126 corroborates ("no US or TC yet" on FR-133; FR-128's §3.1 row shows DES/US/SCR/TC/UT all `none`). This breaks the CLAUDE.md traceability rule (every FR traces down to a `US`) on seven Must requirements, and a gap in a Must row blocks Gate 2. | Mint a `US-####` for each of FR-121, FR-125, FR-126, FR-127, FR-128, FR-129, FR-133 under an appropriate `FE-###` (or, where a story is genuinely deferred, record it in §12 "Known gaps" with a named owner and a target sprint, as the FR-005/FR-049/FR-052/FR-053 precedent does). Restate the §2 and §12 coverage assertions against **SRS v2.16.3** with the correct **114** figure and the correct covered/uncovered split. |
| ISS-02 | **High** | B3 / B4 | §12, "Known gaps (carried from v1.0.0, declared, not hidden)" | The gap note reads: "`FR-005` …, `FR-049`/`FR-050`/`FR-052` (treasury caps, ledger, spend approval) and `FR-053` (party fork) have **no story yet**. **All are Should or Could.**" **FR-050 is Must**, not Should or Could: SRS v2.16.3 §11 lists 050 in the Must row, and §11's "On the size of the Must set" states plainly "FR-050 is raised from Should to Must (financial transparency is now a business requirement, BR-019)". §3 of this document declares "MoSCoW is inherited from Doc 02 and is authoritative for scope", so the mis-classification is a defect against Doc 05's own stated authority. Effect: an uncovered **Must** row is presented as a non-blocking Should/Could gap, understating the Gate-2 exposure. (RTM v2.7.0 line 773 carries the same stale "Should" classification for FR-050 — the error has propagated downstream, which is why fixing it here matters.) | Correct the sentence to state that FR-050 is **Must** and uncovered; either mint its story or move it into the Must-gap declaration with a named owner and target sprint. Re-verify the priority of FR-005, FR-049, FR-052 and FR-053 against SRS v2.16.3 §11 while making the edit. |
| ISS-03 | **High** | B4 / B5 | §6, `US-0073` (FE-030 · EP-04), first AC scenario "Switch parties voids old membership and resets tenure" | The scenario reads "Given a member of party A who requests to join party B / When the join request is processed / **Then membership in party A is voided**, membership in party B takes effect, and the tenure clock resets to zero." SRS **v2.15.0** superseded exactly this semantics under the `FR-064-SEMANTICS` ruling (Rathish, Human Approver, 2026-08-29): joining a second party does **NOT** auto-void the first — a member MUST explicitly, on the record, leave their current party before joining another; automatic voidance is **deferred to v2** (DES-065 global membership-scope nullifier). SRS v2.16.3 §16.3 confirms the v1 mechanism as "switch only by explicit recorded leave, then join (v2.15.0 ruling (a))", and §8's FR-064 Gherkin was replaced with explicit-leave scenarios. The story therefore specifies behaviour the approved requirement forbids in v1, and contradicts what was built (join/membership drop, Doc 06 v2.3.x, "one-active-party, leave-at-will"). A story whose AC asserts superseded behaviour will drive a wrong test and a wrong build. | Replace US-0073's first scenario with the explicit-leave scenarios from SRS v2.16.3 §8 FR-064: refusal on join naming the current party; leave-then-join success with tenure reset; dual-membership impossibility; tenure gate unchanged. Add a superseded-wording annotation in place, per the house annotate-don't-delete convention already used on US-0054 and US-0071. |
| ISS-04 | **High** | B4 | §6 `US-0021` Note; `US-0089` Note; `US-0090` Note; `US-0100` Note; `US-0131` Note; §12 "v2.1.0 addition" bullet | Five story statuses contradict **RTM v2.7.0** (Approved), which is authoritative on the Definition of Done and records **17 of 134** stories meeting it. (a) **US-0131** — Doc 05: "Status Partial … DoD not satisfied (RTM row OPEN: G-TRACE + G-PHASE3)"; RTM §6 v2.4.0 DoD check: "**US-0131 … now meets DoD**: FR-130 closes at v2.4.0 … It moves from Status: Partial to done", gap-log entry 125 **RETIRED**, DES-102 assigned. (b) **US-0021** — Doc 05: "DoD not satisfied (production store pending)"; RTM §6 counts US-0021 in the 13-story baseline and states "**US-0021 newly meets DoD (v2.2.4)** — FR-013 Should row closes … full chain … closes". (c) **US-0089** and (d) **US-0100** — Doc 05: "Not Ready pending DES"; RTM §6 v2.5.0 check: both "**now meet the bar** … Total 14 → 16 of 134". (e) **US-0090** — Doc 05: "Not Ready pending DES"; RTM §6: "**US-0090 DOES, as of v2.5.1** … taking the total to 17 of 134". A backlog that reports five completed stories as incomplete misstates delivered scope to Gate 1 and to the PM's status reporting. | Reconcile every story `Status:`/`Note:` against RTM v2.7.0 §6 and mark US-0021, US-0089, US-0090, US-0100 and US-0131 as meeting the Definition of Done, citing the RTM version. Adopt a single convention: the RTM is the authority on DoD and Doc 05 mirrors it with an explicit version pin, so this class of drift is visible on the next bump. |
| ISS-05 | **High** | B3 / B5 | §6 `US-0132` Note, `US-0133` Note, `US-0134` Note ("TC: OPEN — no TC-#### minted yet"); §12 "v2.2.0 additions" ("TC: OPEN — no TC-#### minted for US-0132..0134"); §12 final line ("`TC-####` links: **not yet assigned** — added by the tester in Doc 07") | All four statements are false against **Doc 07 v2.4.4 (Approved)**, whose suite table records `TS-SCAFFOLD` as **TC-3470–TC-3488 (19 cases, 16 passing)** mapped to precisely these three stories: TC-3470..TC-3476 → US-0132, TC-3477..TC-3481 → US-0133, TC-3482..TC-3488 → US-0134, most carrying **Pass (obs.)** evidence dated 2026-08-25. The blanket §12 closing line is false for the whole document — Doc 07 v2.4.4 carries 463 TC row anchors, and Doc 05's own §12 already lists TC-3489..TC-3516 two bullets above it. The document simultaneously asserts and denies that TC links exist. | Replace the three story-level "TC: OPEN" notes with the actual TC-3470..TC-3488 ranges and their Doc 07 status. Delete or qualify the §12 closing line "`TC-####` links: not yet assigned". While editing, extend §12's TC-assignment list past TC-3516 to cover the two drops landed since v2.3.0 was written (TS-MEMBERSHIP TC-3517..TC-3540, TS-PROPOSALS TC-3542..TC-3563, Doc 07 v2.4.4). |
| ISS-06 | **High** | B2 / B3 / B6 | §6 (all 134 story blocks); measured against `docs/templates/05-product-backlog.template.md` §6 and CLAUDE.md "Definition of Ready" | The template's story atom mandates `Implements: FR-### · DES-### · SCR-##` and `Verified by: TC-#### (+ UT-####)`. In this document every story's `Implements:` carries **FR IDs only**. Only **5 of 134** stories carry a DES link (US-0132, US-0133, US-0134 explicitly; US-0122..US-0130 carry DES names in free-text Notes rather than the field), only **4** carry a `SCR:` line (US-0071, US-0072, US-0081, US-0131; US-0132 records "SCR: none" deliberately), and **no story carries a `Verified by:` field at all**. CLAUDE.md's Definition of Ready requires a story to trace to an `FR`, a `DES`, and (if UI) a `SCR`. The document's preamble defers these links ("attached after Design … reconciled in the RTM"), but Design is now **complete and Approved** (SDD v2.11.2) and Test Cases are Approved (Doc 07 v2.4.4) — the deferral has expired. As written, the backlog cannot demonstrate Definition of Ready for ~96% of its stories. | Populate the `DES-###`/`SCR-##` values in each story's `Implements:` line from SDD v2.11.2 §5.2 and §15, and add the `Verified by: TC-####` field from Doc 07 v2.4.4. Where a DES genuinely does not exist yet (RTM v2.7.0 records 34 live G-TRACE chains), keep the story's "Not Ready pending DES" note but say so in the field rather than leaving it blank. |
| ISS-07 | **Medium** | B3 / B4 | §6 Notes on `US-0087`, `US-0089`, `US-0090`, `US-0100`, `US-0101`, `US-0102`, `US-0131`; §12 "v2.0.0 DES readiness gap" and "v2.1.0 DES readiness gap" paragraphs | Seven stories carry the note "no DES assigned yet (Doc 03 §16 next-increment scope)" or "Formal DES not yet assigned in Doc 03 §5.2 (G-TRACE persists)". All seven now have a DES in **SDD v2.11.2 (Approved)**: FR-077 → **DES-101**; FR-079 and FR-080 → **DES-103**; FR-090 → **DES-104**; FR-091/FR-092 → **DES-105/DES-106**; FR-130 → **DES-102**. RTM v2.7.0 §7 records the corresponding gap-log movements (entries 70/81 RETIRED at v2.5.0, 71 RETIRED at v2.5.1, 125 RETIRED at v2.4.0, 68 reclassified at v2.4.0). The two §12 "DES readiness gap" paragraphs repeat the stale claim at document level. | Update the seven Notes with their assigned DES IDs and re-scope both §12 DES-readiness paragraphs to the DES gaps that actually remain per RTM v2.7.0 §7. |
| ISS-08 | **Medium** | B4 / B6 | Header `Source:` line ("docs/02-requirements-srs.md **v2.13.0**"); §2 ("Doc 02 **v2.2.0**", "Doc 02 **v2.5.0**", "Doc 02 **v2.13.0**"); §12 lead ("Coverage assertion at **v2.0.0**"); §12 Must-NFR map ("24 Must NFRs **as of v2.2.0**") | Every count and coverage claim in the document is anchored to a superseded SRS version. The approved SRS is **v2.16.3** (Approved 2026-08-30); the pin is three minor versions and eight amendments behind, spanning the FR-064 semantics ruling (v2.15.0), the FR-132 government-ID amendment (v2.11.0), and the PROPOSING-NOT-COUNTING-GATED ruling (v2.16.0). This stale pin is the root cause of ISS-01, ISS-02 and ISS-03 and is itself a convention defect: the artifact-bus rule requires each artifact to stand on its own, and a document pinned to a superseded source cannot. | Advance the header `Source:` pin to **SRS-TRUMOCRACY v2.16.3 (Approved)** and re-derive every count and coverage claim in §2 and §12 against it. Add the SDD (v2.11.2) and Doc 07 (v2.4.4) to the `Source:` block with their statuses, since §6 and §12 now cite DES and TC IDs from both. |
| ISS-09 | **Medium** | B3 | §1 "Product goal & link to vision", final line: "Traces to Doc 01 §B (customer journey) and Doc 02 `BR-001` … `BR-013`." | The BR range is eight short. SRS v2.16.3 §11 counts **21 BR**, and §4 of this same document cites BR-014, BR-015, BR-016(implied), BR-018, BR-019, BR-020 and BR-021 in the "Business value / link" lines of EP-11 and EP-12. §1 therefore contradicts §4 and under-declares the product goal's up-trace by eight business requirements. | Correct §1 to `BR-001 … BR-021`, and confirm each of the 21 BRs is reachable from at least one epic's "Business value / link" line. |
| ISS-10 | **Medium** | B1 / B4 | §2, §4 (EP-06 outcome hypothesis and Success metric; EP-09 Success metric), §6 (`US-0038`, `US-0041`, `US-0042`, `US-0044`) | The document contains **no reference to the v1 / v2 split** that now governs what is being built. SRS v2.16.3 §16.1.1/§16.1.2 define **Definition A (v1 — transparent party platform)** and **Definition B (v2 — full cryptographic guarantees)**, and §16.3.1 assigns every FR a v1 mechanism and a v2 mechanism. SRS §4.45 **FR-131** requires that wherever a vote is cast in a v1 deployment the UI MUST state plainly that voting is **NOT** anonymous, **NOT** receipt-free and **NOT** coercion-resistant. Yet EP-06's outcome hypothesis promises "unlinkable ballots plus an invisible re-vote override", its success metric is "0 receipt constructions found", and US-0038/US-0041/US-0042 state those guarantees unqualified with no note that they are v2-scope. The only place the v1 posture appears is inside the three seam stories' `IS_INSECURE_MOCK=true` notes. A reader planning Gate-1 scope cannot tell which guarantees are v1 commitments and which are v2. | Add a short v1/v2 scope note to §2 pointing at SRS §16, and annotate the epics and stories whose guarantees are Definition-B-only (at minimum EP-06 and US-0038/0041/0042/0044) with their v1 posture and the FR-131 honesty-notice obligation, in the style already used on US-0130's fork-flag note. |
| ISS-11 | Low | B6 | §7 "Screen / UX inventory", `Implements` column (SCR-01..SCR-23) | The template §7 specifies the column as `FR-…, DES-…`. Every row carries FR (and NFR) IDs only; no DES appears, although SDD v2.11.2 §15 maps design elements to these screens. | Add the DES IDs to the `Implements` column, or state in the section preamble that DES mapping for screens lives in SDD §15 and is not duplicated here. |
| ISS-12 | Low | B4 | §6, `US-0013` Note | The note reads "DoD **not satisfied** (RTM Should row **now complete** — see Doc 08 v2.2.4)", asserting completion and non-completion of the same chain in one parenthesis. (RTM v2.7.0 §6 lists US-0013 among the Partial stories, so the intended meaning is that FR-012's Should row closed while the story's own chain did not.) | Rewrite as two clauses that cannot be read as contradictory — e.g. "FR-012's Should row is COMPLETE (Doc 08 v2.7.0); the story remains Partial because the production store is pending DES-097 wiring." |
| ISS-13 | Low | B4 / B6 | §12 opening line: "Coverage assertion at **v2.0.0** — to be independently verified by the tester in the RTM (Doc 08)" | The label was never advanced through v2.0.1, v2.1.0, v2.2.0 or v2.3.0, so §12 presents itself as a three-version-old assertion while carrying v2.1.0, v2.2.0 and v2.3.0 bullets beneath it. | Advance the label with the document version on every bump (the same maintenance rule SRS §11 applies to its Counts heading). |
| ISS-14 | Low | B4 | Header `Change:` block, v2.3.0 and v2.2.0 entries: "Gate-1 blocker remains: **no passing business-mode review exists for Doc 05**" | Stated flatly, this is inaccurate: `artifacts/reviews/05-product-backlog-v2.0.1-business-cycle2.md` is a **PASS** (99%, 0C/0H/0M/0L, technical-writer as neutral reviewer). What is true is that no passing review exists for the **current** version — the loop is per-version. | Qualify to "no passing business-mode review exists for the current version (v2.0.1 passed at cycle 2; v2.1.0 onward are unreviewed)". |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Routing instruction (to the owning role)

**FAIL — routed to the `product-owner` (Priya Raghunathan), the owning role for Doc 05.** The
architect (this reviewer) is read-only on this document and has edited nothing in it; all rework is
the product-owner's.

Rework MUST produce a **new version**: bump the `Version:` semver to at least **2.4.0** (a minor
bump is the minimum for a Medium-or-worse FAIL; the Critical coverage gap arguably warrants it in
any case), set `Status: In Review`, and record the fixes in the `Change:` block. This loop then
re-reviews at **cycle 2 of 5**.

Suggested order of attack, because the later fixes depend on the earlier ones:

1. **ISS-08 first** — advance the `Source:` pin to SRS v2.16.3 and add the SDD v2.11.2 / Doc 07
   v2.4.4 pins. Everything else is re-derived from that baseline.
2. **ISS-01 and ISS-02** — close the eight uncovered Must FRs (mint stories, or declare them with a
   named owner and target sprint) and restate the 101 → 114 Must count. This is the Critical and it
   is the one that blocks Gate 2 if it reaches the RTM uncorrected.
3. **ISS-03** — re-write US-0073's acceptance criteria to the explicit-leave semantics; annotate the
   superseded wording in place rather than deleting it.
4. **ISS-04, ISS-05, ISS-07** — one reconciliation pass against RTM v2.7.0 §6/§7, Doc 07 v2.4.4 and
   SDD v2.11.2, correcting every story status, TC claim and DES claim together.
5. **ISS-06** — populate the mandated `DES`/`SCR`/`Verified by` fields in the story atoms.
6. **ISS-09, ISS-10** and the four Lows.

Note for the project-manager: this report's verdict is FAIL, so the SubagentStop gate for Doc 05
remains unsatisfied by design until a passing report exists for the reworked version. That is the
correct state, not a defect in this report.

**Reviewer's self-check on the metadata block:** the fields above are written in the canonical
spellings the hook parses (`Reviewed document:` with the **filename** `05-product-backlog.md`;
`Document version:` with a bare semver `2.3.0`), and the report filename
`05-product-backlog-v2.3.0-business-cycle1.md` matches the mandated
`<NN>-<slug>-v<version>-<mode>-cycle<k>.md` convention, so the filename fallback in
`hooks/check_gates.py` also resolves. **I could not run `node hooks/run_gates.cjs --audit` to
confirm — this reviewer session has no shell tool available.** The project-manager should run the
audit and confirm it names this report for Doc 05.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5 and the verdict is FAIL, not ESCALATED.
