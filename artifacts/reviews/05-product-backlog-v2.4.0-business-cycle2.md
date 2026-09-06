# Document Review Report — Product Backlog (BKLG-TRUMOCRACY) v2.4.0

```
Reviewed document: 05-product-backlog.md
Document version: 2.4.0
Review mode: business
Reviewer role: architect (neutral — the owning role for Doc 05 is the product-owner)
Score: 88%
Critical: 0
High: 2
Medium: 3
Low: 4
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Cycle-2 business-rubric review of `docs/05-product-backlog.md` v2.4.0 (BKLG-TRUMOCRACY, Status: In
Review, Last updated 2026-08-31), read end to end (3,793 lines: 12 epics, 62 features, 142 stories,
9 non-functional items, 23 screens). **Verdict FAIL at 88%, with 0 Critical, 2 High, 3 Medium and 4
Low.** The Critical is cleared and the score moves 69% → 88%.

**Every one of the fourteen cycle-1 findings was re-verified against the Approved sources rather than
accepted on assertion, and thirteen are genuinely closed.** The Critical (ISS-01) is fixed and fixed
honestly: the Must population is restated at **114** against SRS v2.16.3 §11 (I confirmed the count
and the membership of the Must row), and the eight uncovered Must FRs now carry stories US-0135–
US-0142 under new features FE-059–FE-062. I checked each of the eight — every one has Gherkin with at
least one negative and one adversarial scenario, a named person as owner, the correct FR trace, and a
status that matches the RTM. Critically, **none of the eight invents a link to look closed**: six say
`none (G-TRACE)` and cite a real Doc 08 v2.7.0 §7 gap-log entry, and I verified all six against the
RTM line by line — entry 119/FR-121/Marcus Adeyemi, 120/FR-125/Grace Mbeki, 121/FR-126/Dr. Lena
Kowalczyk, 122/FR-127, 123/FR-128, 124/FR-129, and entry 126/FR-133 correctly recorded as
`G-PHASE3` **only** because DES-099 is assigned. No fabricated DES link exists anywhere in this
version.

The rest of the reconciliation is equally sound. ISS-03 is fixed at the root: US-0073's first
scenario now refuses the join and names party A, with party A's membership and tenure explicitly
unchanged — the FR-064-SEMANTICS ruling (a), matching SRS v2.16.3 §8 and Doc 08 v2.7.0's FR-064 row.
ISS-04's five statuses all check out against Doc 08 v2.7.0 §6. ISS-05's TC claims match Doc 07 v2.4.4
§5.3 exactly, including which three are Blocked. ISS-07's seven DES corrections all verify against
SDD v2.11.2 §5.2 — and the owner was right to correct the cycle-1 report's own loose shorthand
(DES-103 covers **both** FR-079 and FR-080; DES-104 covers FR-090). ISS-09 is fixed and I confirmed
the harder half by taking the union of all twelve epics' Business-value lines: all 21 BRs are
reachable. The link-population work behind ISS-06 is careful — I spot-checked seventeen stories'
`Implements`/`Verified by` fields against SDD §5.2, Doc 07 §5.3–§5.6 and Doc 08 §3.1, and every link
was exact but two. Four upstream source disagreements were found and **routed rather than
papered over**, and the conservative reading taken in each. That is the behaviour the artifact-bus
rule asks for.

What holds it back is two defects, one mechanical and one incomplete. **The transcription left a raw
change-spec block in the middle of §6** (lines 1182–1206: a stray fence, a `## CH-23 …` heading and a
`FIND:` block), which orphans US-0087's acceptance criteria from its story atom and publishes editing
machinery as content. **And the ISS-07 stale-note sweep stopped seven stories short of finishing**:
US-0092–US-0096 carry `DES-093, DES-094` in `Implements:` while the Note directly beneath still reads
"no DES assigned yet" — a contradiction against SDD §5.2, against Doc 08 §3.1 (which reclassified
those entries G-TRACE → G-PHASE3 at v2.2.0), and against this document's own §12 census, which only
balances at 109/33 if these five count as having a DES. Both are contained and mechanically fixable;
neither is a rethink.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`88%`)
- Critical = 0? **yes** (0) · High = 0? **no** (2) · Medium = 0? **no** (3)
- **Verdict:** `FAIL` — PASS only when both rows above are all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 96 | 19.20 | ISS-10 fully closed and closed well: §2 carries a v1/v2 scope note pinned to SRS §16, EP-06 and EP-09 carry explicit Definition-A/Definition-B posture blocks, and both epics' success metrics are **split into a v1 row and a v2 row** rather than left ambiguous. US-0038/0041/0042/0044/0140 each carry the FR-131 clause (a) obligation and an explicit "MUST NOT be reported as satisfied by a v1 deployment". Twelve falsifiable hypotheses with quantified metrics, unchanged. Residual: still no kill criteria at epic or story level. Up from 85. |
| B2 Completeness | 15 | 82 | 12.30 | All 12 template sections present; Must coverage 114 of 114 verified against SRS v2.16.3 §11; the story atom is populated on **142 of 142** (`Implements:` and `Verified by:` both present on every story — counted). Deducted for the leaked change-spec block in §6 (NEW-01) and for the SCR field convention being applied to only 12 of the ~67 stories that need it (NEW-04). Up from 65. |
| B3 Traceability & IDs | 20 | 88 | 17.60 | The Critical is closed: every one of the 114 Must FRs reaches a `US` through §12's maps. 109 stories carry a DES and 33 say `none (G-TRACE)` and name their gap-log entry — 109 + 33 = 142, and I verified the arithmetic by count. 132 carry a TC, 10 say `none` and name the reason. §1's BR range corrected to BR-001…BR-021 with all 21 confirmed reachable from an epic. ID scheme stable, no reuse, supersession annotated (US-0054, US-0071). Deducted for NEW-02 (five stories stating their DES status three ways) and NEW-03 (two TCs claimed against Doc 07's own per-story register). Up from 52. |
| B4 Correctness & consistency | 15 | 84 | 12.60 | All four `Source:` pins verified current and Approved (SRS v2.16.3, SDD v2.11.2, Doc 07 v2.4.4, Doc 08 v2.7.0). ISS-03, ISS-04, ISS-05 and ISS-07 each independently re-verified against the source and each correct. Four upstream disagreements found, named, routed to the right role, and the conservative reading taken. Deducted for NEW-02, NEW-03, NEW-05 (the RTM's DoD figure misquoted as "17 of 142") and the Lows. Up from 55. |
| B5 Testability | 15 | 93 | 13.95 | Gherkin on 142/142 with at least one negative or adversarial scenario each, **including all eight newly minted stories** — checked individually. US-0073's AC now tests the approved behaviour instead of superseded behaviour. `Verified by:` is now a real anchor on every story. MoSCoW inherited and applied; per-epic out-of-scope explicit. Residual: no kill criteria. Up from 78. |
| B6 Convention compliance | 15 | 82 | 12.30 | Named-owner rule satisfied **142/142** with a person on every story and every NF item; ISO-8601 throughout; Gherkin house style consistent; annotate-don't-delete honoured on US-0073 as it was on US-0054/US-0071; the template §6 atom is now the house format. Deducted for the leaked spec block (NEW-01), the partial SCR convention and the wrong "78 carry an SCR" census (NEW-04), and cross-cycle `ISS-` ID collisions (NEW-06). Up from 76. |
| **Total** | **100** | — | **87.95% → 88%** | — |

## 4. Cycle-1 findings — verification result

Each re-verified against the Approved source; none accepted on the document's own assertion.

| Cycle-1 ID | Severity | Status in v2.4.0 | Evidence I checked |
|---|---|---|---|
| ISS-01 | Critical | **FIXED** | SRS v2.16.3 §11 Must row counted: 114, and FR-050/121/125/126/127/128/129/133 all present in it. §2 and §12 restated to 114; US-0135–US-0142 and FE-059–FE-062 minted; §12's maps reach all 114. Doc 08 v2.7.0 §7 entries 119–124 and 126 verified as real and quoted accurately. |
| ISS-02 | High | **FIXED** | SRS v2.16.3 §11 confirms FR-050 in the **Must** row and §11's "On the size of the Must set" carries the raising sentence verbatim. §12 removes FR-050 from the gap list, stories it as US-0142, and routes the stale Doc 08 §3.3 `Should` row (line 773, verified) to the tester. FR-005 Should, FR-049 Should, FR-052 Could, FR-053 Could — all four re-verified correct. |
| ISS-03 | High | **FIXED** | US-0073 AC-1 now: join refused **naming party A**, party A's membership "not voided, suspended or altered", tenure "not reset by the refused attempt"; AC-2 is explicit-leave-then-join. Matches SRS v2.15.0 ruling (a) and Doc 08 v2.7.0's FR-064 row ("`ALREADY_MEMBER_ELSEWHERE`, naming the current party"). Superseded wording annotated in place, not deleted. |
| ISS-04 | High | **FIXED** | Doc 08 v2.7.0 §6 verified: 13-story v2.2.4 baseline includes US-0021; v2.4.0 check adds US-0131; v2.5.0 adds US-0089 and US-0100; v2.5.1 adds US-0090 → 17. All five now marked as meeting DoD in §6 with the version pin. US-0087 correctly still **not** at DoD, matching the same section. |
| ISS-05 | High | **FIXED** | Doc 07 v2.4.4 §5.3 verified: TC-3470–TC-3476 + TC-3488 → US-0132; TC-3477–TC-3481 → US-0133; TC-3482–TC-3487 → US-0134; 19 cases / 16 pass / 3 Blocked (TC-3476, TC-3481, TC-3487) — exactly as stated. §12's TC list extended to TS-MEMBERSHIP TC-3517–3540 (24/0 Blocked) and TS-PROPOSALS TC-3542–3563 (22/0), both verified in Doc 07's suite table; the false blanket line is gone. |
| ISS-06 | High | **SUBSTANTIALLY FIXED — two residuals** | 142/142 stories now carry `Implements: FR · DES · SCR` and `Verified by:`. Seventeen links spot-checked exact (see §5 note). Residuals become **NEW-02** and **NEW-03/NEW-04**. |
| ISS-07 | Medium | **PARTIALLY FIXED** | The seven named stories all verified correct against SDD v2.11.2 §5.2 (DES-101/103/103/104/105/106/102), and the owner's correction of the review's shorthand is right. But the identical stale sentence survives on **US-0092–US-0096** → **NEW-02**. |
| ISS-08 | Medium | **FIXED** | Header `Source:` pins SRS v2.16.3 (Approved 2026-08-30), SDD v2.11.2, Doc 07 v2.4.4, Doc 08 v2.7.0 — all four version numbers and Approved statuses verified in the source headers. No live claim remains anchored to a superseded version. |
| ISS-09 | Medium | **FIXED** | §1 reads `BR-001 … BR-021`. I took the union of all twelve epics' "Business value / link" lines: BR-001…BR-021 with no hole. BR-016→EP-04, BR-017→EP-09, BR-020→EP-01 are present as claimed. |
| ISS-10 | Medium | **FIXED** | §2 v1/v2 note; EP-06 and EP-09 posture blocks with split v1/v2 success metrics; US-0038, US-0041, US-0042, US-0044 and US-0140 annotated with their SRS §16.3.1 classification (`DEFERRED-v2` / `PARTIAL`) and the FR-131 clause (a) obligation. |
| ISS-11 | Low | **FIXED (and over-delivered)** | §7 preamble states DES mapping lives in SDD §15. The SCR-22/SCR-23 inversion is correctly un-inverted: SDD v2.11.2 §5.2 (lines 848–849) and Doc 08 v2.7.0 §3.1 (FR-065→SCR-23; FR-066/067→SCR-22) both verified, and §6's US-0074/0075→SCR-23, US-0076/0077→SCR-22 now match. |
| ISS-12 | Low | **FIXED** | US-0013's Note is now two numbered clauses that cannot be read as contradictory, and Doc 08 v2.7.0 §6 does list US-0013 among the Partial stories as stated. |
| ISS-13 | Low | **FIXED** | §12 label reads "Coverage assertion at **v2.4.0**" with the maintenance rule stated beside it. |
| ISS-14 | Low | **FIXED** | Both the v2.3.0 and v2.2.0 changelog entries now qualify the claim to the **current** version and name the v2.0.1 PASS (99%, 0C/0H/0M/0L). |

## 5. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| NEW-01 | **High** | B2 / B6 | §6, lines **1182–1206** (between `US-0087` and `US-0088`) | **A raw change-spec block was left in the published document.** Line 1182 closes US-0087's block with a stray four-backtick fence ` ```` `; lines 1184–1190 then emit a horizontal rule, the heading `## CH-23 — US-0089: DES-103 assigned and DoD met (ISS-04, ISS-07)`, the label `FIND:` and a second ` ```` ` fence; lines 1191–1192 carry the find-text ("Note: Not Ready pending DES — FR-079 has no DES assigned yet…" / "Scenario: New member auto-assigned Supporter"). **US-0087's `AC:` section — its three non-violence-clause scenarios — is then orphaned at lines 1193–1206, separated from its own story atom by eleven lines of editing machinery.** A `## `-level heading also breaks the §6 heading hierarchy, so US-0088 onward now sit under "CH-23" rather than under §6's EP-02 subsection. The underlying edit itself **was** applied — US-0089 at line 1578 correctly carries `DES-103` and the DoD statement — so this is pure transcription residue, not a missing change. It is nonetheless a Must story whose acceptance criteria no longer read as part of the story, published inside a Gate-1 artifact. This is the only occurrence: a full-text search for `FIND:`, `## CH-`, `REPLACE:` and ` ```` ` returns nothing else. | Delete lines 1184–1192 (the rule, the `## CH-23` heading, `FIND:`, the fence and the find-text), change the stray ` ```` ` at line 1182 to a ` ``` ` closing US-0087's Note, and re-attach US-0087's `AC:` block (lines 1193–1206) inside US-0087's own fence so the story atom reads header → owner line → Note → AC. Then re-read §6 end to end once for any other fence damage. |
| NEW-02 | **High** | B3 / B4 | §6, `US-0092` (L2515–2516), `US-0093` (L2534–2535), `US-0094` (L2557–2558), `US-0095` (L2579–2580), `US-0096` (L2602–2603) | **Five Must stories state their DES status three different ways in the same document.** Each carries `Implements: FR-08x · DES-093, DES-094` on the owner line and, on the very next line, `Note: Not Ready pending DES — FR-08x has no DES assigned yet (Doc 03 §16 next-increment scope).` Both Approved sources say the DES **is** assigned: **SDD v2.11.2 §5.2** records DES-093 (`Satisfies: FR-082..086, FR-124, …`) and DES-094 (`Satisfies: FR-082..086, FR-124, FR-131, …`); **Doc 08 v2.7.0 §3.1** carries `DES-093/DES-094 · ADR-023` in FR-082's and FR-086's DES cells, and §7's v2.2.0 update states plainly "Entries 73–77 (FR-082..086) **reclassified from G-TRACE to G-PHASE3** — DES-093/094 now assigned". This document's own **§12** agrees twice over: its list of the 33 live G-TRACE chains does **not** include FR-082..FR-086, and its census "109 of 142 stories carry a DES … the remaining 33" only reconciles (109 + 33 = 142, which I verified by count) if these five count as carrying one. Per §6's own rule — "A story whose `DES` field reads `none (G-TRACE)` is not Ready" — these five are Ready; their Notes assert the opposite. This is the ISS-07 sweep applied to seven stories and not extended to the five carrying the identical stale sentence. Effect: Definition of Ready is misstated for five Must stories, and the document contradicts the two Approved documents it pins as authorities. | Replace the Note on each of US-0092–US-0096 with the pattern already used correctly on US-0087/US-0089/US-0100: "**DES-093/DES-094 ARE assigned** to FR-08x (SDD v2.11.2 §5.2; Doc 08 v2.7.0 §7 entries 73–77 reclassified G-TRACE → G-PHASE3 at RTM v2.2.0) — the 'no DES assigned' note carried at v2.3.0 was stale," then state what actually remains open (Doc 08 records the DES as covering the **UI display layer only**; full storage/enforcement/linkage-prevention design is still owed, and each row is `G-PHASE3`, not done). While there, re-run the same sweep across every remaining `has no DES assigned yet` note — there are 33 of them, and 28 are correct. |
| NEW-03 | **Medium** | B3 / B4 | §6, `US-0134` owner line (L1972) and Note (L1979–1980); against §12's per-story split (L3697–3698) and §6's own provenance rule (L559–560) | **US-0134 claims two TCs that Doc 07 heads to other stories, and the document's own tie-break rule says it may not.** `Verified by: TC-3476, TC-3481–TC-3487, TC-3534, TC-3535`. Doc 07 v2.4.4 §5.3's row-level `Verifies (US · FR · DES)` cells read **`US-0132 · FR-085 · FR-131 clause 8 · DES-094`** for TC-3476 and **`US-0133 · FR-131 · DES-095`** for TC-3481 — neither names US-0134. §6's provenance rule states "`TC` — from **Doc 07 v2.4.4 §5.x** where its case register carries a per-story heading … **Doc 07 wins where the two disagree**", and §12's own per-story split says "US-0132 → TC-3470..TC-3476 + TC-3488 · US-0133 → TC-3477..TC-3481 · **US-0134 → TC-3482..TC-3487**". So §6 contradicts §12 and breaks the rule §6 states. The claim is sourced from Doc 08 v2.7.0 §3.1's FR-131 TC cell, which does list TC-3476 and TC-3481 — but that is precisely the disagreement the rule was written to settle. Effect: TC-3476 is now claimed by US-0132 **and** US-0134, and TC-3481 by US-0133 **and** US-0134 — reproducing exactly the double-assignment condition this version flags and routes for TC-3555, without flagging it. Secondary, same story: `SCR-13, SCR-14` is claimed unqualified although Doc 08 v2.7.0 §3.1 records FR-131's SCR as `none`; under §6's rule it should read `none` or carry the `(§7 prov.)` marker US-0073 uses correctly. | Drop TC-3476 and TC-3481 from US-0134's `Verified by:` and keep the observation in the Note as what it is — "Doc 08 v2.7.0 §3.1 additionally lists TC-3476/TC-3481 in FR-131's TC cell; **this document follows Doc 07 per the §6 provenance rule**, and routes the third double-assignment to the tester alongside TC-3555." Mark US-0134's SCR-13/SCR-14 as `(§7 prov.)`. Then sweep §6 once for any other TC claimed against Doc 07's per-story heading. |
| NEW-04 | **Medium** | B2 / B6 | Header `Change:` block, v2.4.0 entry (L54, "78 carry an SCR"); §6 preamble link-provenance rule (L562–565); §6 (55 story atoms) | **The SCR half of the ISS-06 fix is the one that is both incomplete and mis-counted.** (a) The header states "**78** carry an SCR"; the actual figure is **75** (`Implements:` lines carrying an `SCR-` token). The DES census (109/33) and the TC census (132/10) are both exact — I verified all three by count — which makes this the one number in the set that drifted. (b) §6's stated rule is categorical: "Where the Approved sources record **none**, the field says so and names the reason … `none (deliberate)` and `none (no UI clause)` are positive statements, not omissions" and "**never blanks**". Only **12** stories honour it (`none (RTM records no SCR)`, `none (deliberate)`, `— (no UI clause)`, `all primary`). The other **55** stories — US-0006, US-0007, US-0028, US-0029, US-0030, US-0037, US-0040, US-0079, US-0080, US-0083, US-0086, US-0088, US-0092–US-0096, US-0097–US-0099, US-0103–US-0121, US-0122–US-0130, US-0133 among them — simply omit the SCR segment, which is the blank the rule forbids. The rule was adopted in this version, so the gap is against a standard this document set for itself one page earlier. | Correct the header count to the verified figure. Then apply the stated rule to the 55 silent stories: give each an explicit `none (RTM records no SCR)`, `none (no UI clause)` or `(§7 prov.)` value with its reason, so that an absent screen is a statement rather than a blank — as US-0089 and US-0132 already do well. If the intent is that a non-UI story needs no SCR segment at all, say that in the §6 preamble instead and drop the "never blanks" clause; either resolution is fine, but the document must not state one rule and follow another. |
| NEW-05 | **Medium** | B4 | §6, `US-0021` Note (L1314–1315) | **The RTM's headline DoD figure is misquoted in the one place the new authority convention was meant to protect.** The Note reads "US-0021 sits inside the 13-story DoD baseline on which **the RTM's current figure of 17 of 142** is built." Doc 08 v2.7.0 §6 states "**The current figure is 17 of 134**", and its §6 dashboard row reads `Stories | 134 | 134 (all carry Gherkin AC) | 17 meet the Definition of Done | 117`. The RTM has no "of 142" figure — 142 is this document's new denominator. §11 states the same fact correctly and carefully ("17 stories meeting DoD (17 of 134 when written; the eight stories minted at v2.4.0 are all short of DoD, so the numerator is unchanged and the denominator is now 142)"), so §6 and §11 now disagree about what the RTM says. Because §11 makes the RTM the authority **and** requires an explicit pin "so the drift becomes visible on the next bump", a story-level mis-citation of the pinned figure defeats the convention adopted in this same version — and it is the kind of figure the PM's status reporting lifts verbatim. | Rewrite the clause to quote the RTM as it stands and derive the rest: "…the 13-story DoD baseline on which Doc 08 v2.7.0's figure of **17 of 134** is built; against this document's post-v2.4.0 population of 142 stories that is 17 of 142, none of the eight new stories being at DoD." Then grep §6 for any other place a derived denominator is attributed to an upstream document. |
| NEW-06 | Low | B6 | §2 (L206), §3 (L257), §6 `US-0076` (L2172), §9 (L3594), §10 (L3598) — against the v2.4.0 `Change:` block | **Review-issue IDs from different cycles collide in-line with no qualifier.** §3's sequencing rule ends `_(ISS-10.)_` meaning the **v1.1.0-cycle** ISS-10 (WSJF sequencing rule), while §2's v1/v2 note cites **ISS-10** meaning the v2.3.0-cycle finding (Definition A/B). §9 cites `_(ISS-07: v1.0.0 base corrected…)_` while this version's ISS-07 is the stale-DES sweep; §10 cites `_(ISS-08: cadence corrected from "weekly" to "fortnightly")_` while this version's ISS-08 is the `Source:` pin; US-0076 cites `_(ISS-06: aligned to FR-066 "major election" scope)_` while this version's ISS-06 is the story-atom fields; §2 still carries `ISS-D` from the v1.1.1 cycle. A reader following an `ISS-` citation lands on the wrong finding roughly half the time. Pre-existing, not introduced here, but the density is now high enough to mislead. | Qualify every in-line citation with its cycle, e.g. `(ISS-10 @ v1.1.0-c1)` and `(ISS-10 @ v2.3.0-c1)`, and state the convention once in the §12 preamble. |
| NEW-07 | Low | B4 | §9 (L3590–3594); header `Change:` block (L80–81) | **The point total is stated 5 points high.** §9 says "**Total (v2.4.0): 142 stories, approximately 880 points**". Summing the `Points:` fields gives **875** — 23 stories at 3, 67 at 5, 41 at 8, 11 at 13 (23+67+41+11 = 142, so every story is accounted for). The v2.4.0 delta is exact (5+5+5+8+5+8+3+5 = **+44**, as stated); the drift is inherited from the pre-v2.4.0 "~836" figure, whose true value was 831. §9 says "approximately", so nothing downstream is wrong — but the sum is now mechanically checkable and should be stated exactly. | Restate as "142 stories, **875 points**" and correct the arithmetic chain (v1.1.1 base + increments) so it lands on 875, or keep "approximately" and footnote the exact figure. |
| NEW-08 | Low | B4 | §7 preamble (L3539–3544) | **A real source disagreement is left unflagged inside a correction that flags four others.** The preamble asserts "**Two Approved documents agree** against the v2.3.0 rows" for SCR-22/SCR-23, citing SDD v2.11.2 §5.2 and Doc 08 v2.7.0 §3.1. Both citations verify exactly (SDD lines 848–849; RTM FR-065→SCR-23, FR-066/FR-067→SCR-22), and the correction made here is right. But **SDD v2.11.2 §10.12.4 carries the inverse** — `| SCR-22 | Candidate feedback widget |` and `| SCR-23 | Debate schedule, attendance & post-debate vote |` — and §10.12.2's row "3.2 Candidate selection" repeats it ("Candidate rows with scores (SCR-22) + debate schedule context (SCR-23)"). The SDD disagrees with itself, and Doc 05 is downstream of the disagreement. This version routes four other source conflicts by name and role, which is exactly the right instinct; this fifth one deserves the same treatment. | Add to the §7 preamble and to §12's routed-disagreements paragraph: "(e) SDD v2.11.2 §10.12.2/§10.12.4 still carry SCR-22 and SCR-23 inverted relative to its own §5.2 and to Doc 08 v2.7.0 §3.1; this document follows §5.2 and the RTM → **architect**." |
| NEW-09 | Low | B4 | §6, `US-0014` Note (L1114), `US-0015` Note (L1133) | **Two stories still pin their status to an RTM three major versions behind and omit the story-level DoD statement.** Both read "RTM row COMPLETE (**Doc 08 v1.1.0**)". The FR-level claim is true — FR-011 closed at RTM v1.1.0 — but Doc 08 **v2.7.0** §6 lists **US-0015** among the Partial stories ("US-0011/0013/0015/0022/0087/0131 are **Status: Partial** — logic+UI complete and tested (IS_INSECURE_MOCK=true) but their Must RTM rows stay OPEN"). This is the same FR-row-versus-story-row ambiguity ISS-12 fixed for US-0013 in this very version, and §11's new convention requires an explicit current pin wherever DoD is mirrored. | Apply the ISS-12 two-clause pattern and the v2.7.0 pin to both: "(1) FR-011's Must row is COMPLETE (Doc 08 v2.7.0); (2) the story's own status is [done / Partial per Doc 08 v2.7.0 §6]." |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

**Note on the link spot-check (ISS-06 verification).** Seventeen stories were checked field by field
against the Approved sources, not sampled by eye: US-0001 (`DES-001 · ADR-003 · SCR-02`; TC-0001,
TC-1001–1003, TC-2600, TC-2601 — exact match to Doc 08 §3.1), US-0011 (FR-010 row: DES-073, SCR-04,
TC-0010/TC-1041/TC-3489–3493/TC-3515 — exact), US-0021, US-0024 (FR-020 row — exact, plus TC-3526/
TC-3527 correctly taken from Doc 07's "US-0024, US-0025" heading), US-0025, US-0073 (FR-064 row:
DES-065, SCR `—`, TC-3307–3309 + TC-3523–3525 — exact, and SCR-11 correctly marked `(§7 prov.)`
because the RTM carries none), US-0074/US-0075 (SCR-23, TC-3313–3316 — exact), US-0076/US-0077
(SCR-22, TC-3317–3322 — exact), US-0087 (DES-101 with SCR-04/SCR-05 per SDD §5.2; TC-3508–3510 +
TC-3541 — exact), US-0089 (`— (no UI clause)` matches the RTM's `none (no UI clause in the
requirement)` verbatim; TC-3405, TC-3542 — exact), US-0090 (SCR-15, SCR-12; TC-3406, TC-3544,
TC-3562, TC-3563 — exact), US-0100, US-0101, US-0102 (and its correct statement that DES-106 does
**not** discharge FR-107, which SDD v2.11.2 §5.2 confirms in terms), US-0131 (DES-102, SCR-09/SCR-11,
TC-3511–3516 + TC-3528/TC-3529 — exact), US-0133 (including TC-3520, whose Doc 07 row does list
`US-0024 · US-0133`), US-0137 (DES-099 correct, and entry 126 correctly read as `G-PHASE3` only),
US-0142 (DES-033, whose SDD §5.2 `Satisfies` is `FR-049..052` and so includes FR-050). **Sixteen of
seventeen were exact; the seventeenth is NEW-03.** That is a good result and the reason B3 moves 52 →
88.

## 6. Routing instruction (to the owning role)

**FAIL — routed to the `product-owner` (Priya Raghunathan), the owning role for Doc 05.** The
architect (this reviewer) is read-only on this document and has edited nothing in it; all rework is
the product-owner's.

Rework MUST produce a **new version**: bump `Version:` to at least **2.4.1** — every surviving issue
is a localised correction rather than a change of substance, so a **patch** bump is defensible; a
minor bump is also fine if the SCR sweep in NEW-04 grows large. Set `Status: In Review` and record
the fixes in the `Change:` block. This loop then re-reviews at **cycle 3 of 5**.

Suggested order — all five blocking issues are mechanical and none depends on a decision:

1. **NEW-01 first** — it is a five-line repair and it is the only issue visible to a casual reader.
   Re-read §6 once end to end afterwards to confirm no other fence was damaged in the same pass.
2. **NEW-02** — five Notes, using the pattern already written correctly on US-0087/US-0089/US-0100.
   Sweep the other 28 `has no DES assigned yet` notes while the source is open.
3. **NEW-03** and **NEW-05** — two single-line corrections, both restoring a rule this version
   itself adopted.
4. **NEW-04** — the count, then the 55 SCR fields (or the preamble, if the rule is to be narrowed).
5. **NEW-06 … NEW-09** — the four Lows, which do not block.

Nothing here requires re-verifying the coverage work: the 114-of-114 Must closure, the eight new
stories, the eight ISS-04/ISS-05/ISS-07 reconciliations and the seventeen-link spot-check all stand.

**Note for the project-manager.** This verdict is FAIL, so the SubagentStop gate for Doc 05 remains
unsatisfied by design until a passing report exists for the reworked version — the correct state, not
a defect in this report. Separately: this version routed **four** upstream defects out of Doc 05 that
belong to other owners and are **not** the product-owner's to fix — (a) Doc 08 v2.7.0 §3.3 still
classes FR-050 as `Should` and must move to §3.1 as a gating Must row (I verified line 773); (b) Doc
08 v2.7.0 §3.2 records NFR-007 as having no implementing backlog item although §8 NF-09 has covered
it since v1.1.1; (c) TC-3555 is double-assigned between Doc 07 §5.6 and Doc 08 §3.1; (d) SDD v2.11.2
§5.2 lists FR-075 in DES-102's `Satisfies` while Doc 08 v2.7.0 §3.1 records FR-075's DES as `none`.
**NEW-08 adds a fifth** (the SDD's internal SCR-22/SCR-23 inversion). (a)–(c) → tester (Ji-woo Park);
(d) and (e) → architect and tester jointly. These should be scheduled independently of the Doc 05
rework loop; leaving them open does not block Doc 05 from passing, since Doc 05 takes the
conservative reading in each case.

**Reviewer's self-check on the metadata block:** the fields above use the canonical spellings the hook
parses — `Reviewed document:` with the **filename** `05-product-backlog.md` and `Document version:`
with a bare semver `2.4.0` — and the filename
`05-product-backlog-v2.4.0-business-cycle2.md` matches the mandated
`<NN>-<slug>-v<version>-<mode>-cycle<k>.md` convention, so `hooks/check_gates.py`'s filename fallback
also resolves. **I could not run `node hooks/run_gates.cjs --audit` — this reviewer session has no
shell tool.** The project-manager should run the audit and confirm it names this report for Doc 05.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5 and the verdict is FAIL, not ESCALATED.
