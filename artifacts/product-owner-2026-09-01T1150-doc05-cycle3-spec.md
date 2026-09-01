# Doc 05 — v2.4.0 → v2.5.0 anchored change spec (cycle-3 rework) + session-memory note

```
Role:          product-owner (Priya Raghunathan)
Date:          2026-09-01
Target file:   docs/05-product-backlog.md  (CURRENT: v2.4.0, 3,793 lines)
New version:   2.5.0   Status: In Review
Closes:        artifacts/reviews/05-product-backlog-v2.4.0-business-cycle2.md
               (FAIL, 88%, 0 Critical / 2 High / 3 Medium / 4 Low; reviewer: architect, neutral)
Changes:       34 anchored edits (CH-01 … CH-34)
Delivery:      Edit is disabled for subagents and whole-file Write truncates, so this is a
               transcription spec. NOTHING was written to docs/. The PM transcribes.
Index:         Do NOT register this note yourself — the PM registers it in
               artifacts/memory-index.json.
```

---

## READ THIS BEFORE TRANSCRIBING — two applier hazards

**Hazard 1 — CH-04 uses FIVE-backtick fences, not four.** CH-04 repairs the NEW-01 transcription
residue, and the text being removed *contains four-backtick lines*. A four-backtick fence would
therefore terminate early and reproduce the exact defect this cycle is fixing. CH-04 — and only
CH-04 — is delivered inside ` ````` ` fences. Every other change uses the normal four.

**Hazard 2 — no change below contains a `## `-level heading inside a fence.** The v2.4.0 leak was
caused by a `## CH-23 …` heading being swallowed into a replacement body. All change headings in
this spec are `###`-level and all of them sit *outside* the fences. If your applier emits any line
beginning `FIND:`, `## CH-`, `REPLACE`, or a bare fence into `docs/05-product-backlog.md`, stop and
re-run: that is the NEW-01 defect recurring.

After transcription, please run a full-text search of `docs/05-product-backlog.md` for `FIND:`,
`## CH-`, `REPLACE`, and ` ```` ` (four backticks). All four MUST return zero hits.

---

## Verification log — what I checked before writing a single edit

Every finding was re-verified against the current file and the Approved sources. Six findings
verified exactly as written; **three carried a slip** (two arithmetic, one location) which I have
corrected rather than adopted. One finding's *required fix* is internally contradictory and I
implement the end state it specifies. Details:

| Finding | Verified? | Note |
|---|---|---|
| NEW-01 High | **Confirmed** | Residue is at lines 1182–1192; US-0087's AC orphaned at 1193–1206; US-0088's fence opens at 1207. Full-text search for `FIND:`, `## CH-`, `REPLACE`, four-backtick fences returns **this one occurrence only** — the reviewer's claim holds. The reviewer's *required fix* is self-contradictory (it says both "close US-0087's Note with a ``` at 1182" **and** "re-attach the AC inside US-0087's own fence" — mutually exclusive). I implement the **end state** it specifies: delete 1182–1192 outright, so the single existing fence (opened 1168, closed 1206) contains header → owner line → Note → AC. |
| NEW-02 High | **Confirmed, and it is worse than reported** | SDD v2.11.2 §10.12.2/§10.12.3 (L1524, L1566) and §15 (L2800–2801) both record DES-093/DES-094 as satisfying FR-082..086. Doc 08 v2.7.0 §7 L898 and entries 73–77 (L983–987) confirm the G-TRACE → G-PHASE3 reclassification. While fixing the Notes I ran the NEW-03 TC sweep the reviewer asked for and found **these same five stories claim seven TCs that Doc 07 heads to US-0132** — see the sweep result below. Both defects are fixed in one edit per story. |
| NEW-03 Medium | **Confirmed** | Doc 07 v2.4.4 §5.3 L1234 heads TC-3470..TC-3476 to **US-0132** and every row-level `Verifies` cell (L1240–1246) names US-0132 alone; L1250 heads TC-3477..TC-3481 to US-0133; L1264 heads TC-3482..TC-3487 to US-0134. US-0134's other claims are sound: TC-3534/TC-3535's heading (L1455) names `US-0133, US-0134`. Doc 08 §3.1 records FR-131's SCR as `none`, so `SCR-13, SCR-14` needs the `(§7 prov.)` marker. |
| NEW-04 Medium | **Confirmed, count verified independently** | Counted by matching `^Owner:.*Implements:` — **142** stories; of those **75** carry an `SCR-` token (the reviewer's 75 is right and the header's 78 is wrong) and **12** carry an explicit `none (…)`-style SCR statement, leaving **55** with no segment. Resolution chosen: **amend the rule** (see below). |
| NEW-05 Medium | **Confirmed** | Doc 08 v2.7.0 L869 and L877 both read **17 of 134**. `17 of 142` appears **once** in Doc 05, at L1314 (US-0021's Note). §11 (L3621) already states it correctly. Grep for `of 142` returns only L1314, L3777, L3781 — the last two are this document's own story denominators, correctly used. |
| NEW-06 Low | **Confirmed, one location slip** | The `ISS-06` citation the report places at "§6 US-0076 (L2172)" is actually at **§4, EP-07's outcome hypothesis, L372**. L2172 is US-0076's *title* line and carries no citation. The finding stands; the anchor moves. |
| NEW-07 Low | **Confirmed, and I can state the exact sum** | Counted `Points:` fields: 23×3 + 67×5 + 41×8 + 11×13 = 69 + 335 + 328 + 143 = **875**, and 23+67+41+11 = 142. The reviewer's 875 is right. |
| NEW-08 Low | **Confirmed** | SDD v2.11.2 §5.2 (L848–849) and DES-066/DES-067 (L904–905) give SCR-22 = debate, SCR-23 = candidate feedback. §10.12.4 (L1688–1689) and §10.12.2 (L1657) carry the **inverse**. The SDD does disagree with itself. |
| NEW-09 Low | **Confirmed** | US-0014 (L1114) and US-0015 (L1133) both pin `Doc 08 v1.1.0`. Doc 08 v2.7.0 §6 (L883) lists `US-0011/0013/0015/0022/0087/0131` as **Status: Partial** — so US-0015's story-level status contradicts its note. **US-0014 is not in that Partial list**, so its story-level status differs from US-0015's; the two notes get different second clauses, not one boilerplate. |

### The 33-note DES sweep — result, and a correction to the reviewer's arithmetic

The reviewer asked me to "re-run the same sweep across every remaining `has no DES assigned yet`
note — there are 33 of them, and 28 are correct." **There are not 33, and 28 is not the residue.**
Counted in the current file:

- `none (G-TRACE)` on an `Implements:` line: **33 stories** — this is the figure §12 balances on
  (109 + 33 = 142), and it is correct.
- `has no DES assigned yet` Notes: **32 lines**, of which **one (L1191) is NEW-01 residue**, not a
  story note → **31 real notes**.
- Of those 31: **5 are the NEW-02 defect** (US-0092..US-0096, which carry DES-093/DES-094) and
  **26 are correct** — FR-074, 075, 076, 078, 087, 088, 089, and FR-093..FR-111 (19 consecutive).
  I checked all 26 against §12's own list of the 33 live chains (L3733–3735) and against Doc 08
  v2.7.0 §7; each is genuinely on a live G-TRACE chain. Spot-verified in the RTM: FR-078 (L659,
  DES `none`) and FR-107 (L693, DES `none`, `G-TRACE + G-PHASE3`).
- The 33 `none (G-TRACE)` stories therefore break down as **26** carrying that note phrasing +
  **US-0091** (which uses a bespoke, and better, phrasing at L1631–1635) + the **6** newly minted
  v2.4.0 stories (US-0135, 0136, 0138, 0139, 0140, 0141), which cite their gap-log entry directly.
  26 + 1 + 6 = 33. ✓

**Sweep conclusion: exactly the five the reviewer named are wrong. No sixth. No note is left
unexamined, and the 33/109/142 census in §12 is confirmed by count and needs no change.**

### The NEW-03 TC sweep — one further cluster found

Sweeping §6 for any TC claimed against Doc 07's per-story heading (the reviewer's instruction),
I checked every story claiming a case in the contested ranges TC-3470..TC-3488, TC-3517..TC-3563:

- **US-0134** — claims TC-3476 (Doc 07: US-0132) and TC-3481 (Doc 07: US-0133). ✗ → CH-11/CH-12.
- **US-0092..US-0096** — claim TC-3470, TC-3471, TC-3472, TC-3474 (×5) and TC-3476; Doc 07 §5.3
  heads **every one of TC-3470..TC-3476 to US-0132 alone**, row by row. ✗ → CH-06..CH-10. This is
  the same defect as NEW-03 and is fixed the same way, in the same edit as the NEW-02 Note.
- **US-0132** (TC-3470–3476, TC-3488), **US-0133** (TC-3477–3481, TC-3520, TC-3530–3534,
  TC-3556–3558), **US-0011**, **US-0021** (TC-3539/3540), **US-0087** (TC-3541), **US-0089**
  (TC-3542) — all ✓ against Doc 07's headings. No further cluster exists.

Each of US-0092..US-0096 retains its own case (TC-3408..TC-3412 respectively — Doc 07 L1109 heads
TC-3408 to `US-0092 · FR-082`), so **the §12 census "132 of 142 carry at least one TC" is unchanged**
and needs no edit. No evidence is lost: the stripped cases stay on US-0132, which sits on the same
Doc 08 FR row, and each Note records the RTM observation.

### NEW-04 — resolution chosen: **amend the rule, do not annotate 55 stories**

I take the preamble amendment, and I say why in the changelog. Three reasons:

1. **The rule's purpose is anti-fabrication, and that purpose lives in `DES` and `TC`.** Those are
   the two fields that close a `BR → FR → DES → US → TC` chain; a blank in either can be read as
   "not yet checked". `SCR` closes nothing — the RTM's own §3.1 SCR cell reads `—` or `none` for
   the great majority of non-UI rows (verified for FR-002, FR-023, FR-028, FR-035, FR-051, FR-069,
   FR-070, FR-073, FR-078, FR-082, FR-084, FR-086). Keeping "never blanks" categorical for DES and
   TC keeps every ounce of the honesty; extending it to SCR bought nothing and cost consistency.
2. **55 restatements of "no screen" add no information and 55 transcription events add risk.** This
   very cycle is repairing a High severity defect *caused by transcription*. Trading one preamble
   edit for 55 is a poor bet against a defect rate that has already fired once.
3. **The amendment is falsifiable, not a loophole.** The new rule defines the absence ("this
   document claims no screen for the story") rather than leaving it undefined, keeps the 12 explicit
   statements already in place, and carries a **maintenance obligation with a named owner**: any
   story whose FR carries an SCR in Doc 08 §3.1/§3.2 MUST carry the segment, and a silent story
   against a recorded screen is a defect caught by the tester's RTM reconciliation.

The mis-count (78 → 75) is corrected regardless, in the v2.4.0 changelog entry (CH-03), in the new
§12 SCR census bullet (CH-25) and in the v2.5.0 changelog.

### Version bump — I do not follow the reviewer's suggestion

The report suggests "a patch bump to 2.4.1 is defensible". **It is not, under CLAUDE.md's review
loop**, which requires a new version for any Medium-or-worse finding and treats the bump as a
semver signal of substance, not of line count. Two Highs and three Mediums with a convention
amendment (NEW-04) is a **minor** bump. `v2.4.0 → v2.5.0`.

### Disputed / corrected items, stated plainly

1. **NEW-06's location is wrong** (US-0076 L2172 → §4 EP-07 L372). Finding upheld, anchor moved.
2. **The reviewer's DES-note arithmetic is wrong** ("33 of them, 28 are correct" → 31 notes, 26
   correct, 5 defective, plus 1 residue line). Finding upheld in full; only the count is corrected.
3. **NEW-01's required fix is internally contradictory**; I implement the end state it specifies.
4. **The suggested patch bump contradicts the loop rule**; minor bump taken.
5. **NEW-03's sweep instruction found more than NEW-03 described** — five additional stories. Fixed.

Nothing is disputed on substance. All nine findings are closed.

---

# THE CHANGES

### CH-01 — Header: version bump

FIND:

````
Version:       2.4.0
Status:        In Review
````

REPLACE WITH:

````
Version:       2.5.0
Status:        In Review
````

---

### CH-02 — Header: date + the v2.5.0 changelog entry

FIND:

````
Last updated:  2026-08-31
Change:        v2.4.0 — Cycle-1 business-review rework (2026-08-31). Addresses ISS-01..ISS-14 of
````

REPLACE WITH:

````
Last updated:  2026-09-01
Change:        v2.5.0 — Cycle-2 business-review rework (2026-09-01). Addresses NEW-01..NEW-09 of
               artifacts/reviews/05-product-backlog-v2.4.0-business-cycle2.md (FAIL, 88%,
               0 Critical / 2 High / 3 Medium / 4 Low; reviewer: architect, neutral). A MINOR
               bump, not the patch bump the report suggests: the review loop requires a new
               version for any Medium-or-worse finding, and this rework clears two Highs, three
               Mediums and amends a stated convention. Every finding was re-verified against the
               current file and the Approved sources before being applied; three carried a slip,
               corrected here rather than adopted (see NEW-06, NEW-02 and NEW-01 below).
               NEW-01 (High) — transcription residue deleted from §6. A raw change-spec block had
               been published between US-0087's Note and its acceptance criteria: a stray
               four-backtick fence, a horizontal rule, a "## CH-23 …" heading, a "FIND:" label, a
               second four-backtick fence and two lines of find-text. It orphaned US-0087's three
               scenarios from their story atom and put US-0088 onward under a "CH-23" heading
               instead of §6's EP-02 subsection. Deleted; US-0087 now reads header → owner line →
               Note → AC inside its single fence. The underlying edit had been applied correctly
               (US-0089 carries DES-103 and the DoD statement), so this was residue, not a missing
               change. §6 re-read end to end afterwards: no other fence damage, and a full-text
               search for "FIND:", "## CH-", "REPLACE" and four-backtick fences returns nothing
               anywhere in the document. (The report's required fix asked both to close US-0087's
               Note at the stray fence AND to re-attach the AC inside the same fence — mutually
               exclusive; the end state it specifies is what is implemented.)
               NEW-02 (High) — US-0092..US-0096 no longer state their DES status three ways. Each
               carried "Implements: FR-08x · DES-093, DES-094" and, on the next line, "Not Ready
               pending DES — FR-08x has no DES assigned yet". Both Approved sources say the DES IS
               assigned: SDD v2.11.2 records DES-093 and DES-094 as satisfying FR-082..086
               (§10.12.2/§10.12.3 and the §15 traceability rows), and Doc 08 v2.7.0 §7 states
               "Entries 73–77 (FR-082..086) reclassified from G-TRACE to G-PHASE3 — DES-093/094
               now assigned" at RTM v2.2.0. This document's own §12 agreed twice: FR-082..086 are
               absent from its list of the 33 live G-TRACE chains, and its 109 + 33 = 142 census
               only balances if these five carry a DES. The five stale Notes are replaced with the
               pattern used correctly on US-0087/US-0089/US-0100: the DES IS assigned, the note
               was stale, and what actually remains open is scope — Doc 08 records the DES as
               covering the UI display layer only, the per-FR design residue is named story by
               story from gap-log entries 73–77, and every row is G-PHASE3, not done.
               NEW-02 sweep result (the report asked for it and mis-counted the population): there
               are not 33 "has no DES assigned yet" notes but 31 — the 32nd match was the NEW-01
               residue line. Of the 31, exactly the 5 named are wrong and 26 are correct
               (FR-074, 075, 076, 078, 087, 088, 089 and FR-093..FR-111), each verified against
               §12's own list of live chains and against Doc 08 v2.7.0 §7. The 33 stories carrying
               "none (G-TRACE)" are those 26 + US-0091 (bespoke phrasing) + the 6 v2.4.0 stories
               that cite their gap-log entry directly. No sixth defect exists; the 109/33/142
               census is confirmed by count and unchanged.
               NEW-03 (Medium) — TC provenance enforced where this document's own rule required it.
               §6's rule reads "Doc 07 wins where the two disagree", and Doc 07 v2.4.4 §5.3 heads
               TC-3470..TC-3476 to US-0132, TC-3477..TC-3481 to US-0133 and TC-3482..TC-3487 to
               US-0134 — row by row, each "Verifies" cell naming one story. US-0134's TC-3476 and
               TC-3481 are dropped and the observation kept in its Note. Sweeping §6 for the same
               defect, as the report instructed, found a second cluster it had not: US-0092..US-0096
               claimed TC-3470, TC-3471, TC-3472, TC-3474 (five times) and TC-3476 — every one of
               which Doc 07 heads to US-0132 alone. All seven claims are dropped and recorded in
               each story's Note as an RTM-row observation. No evidence is lost: the cases remain
               on US-0132, which sits on the same Doc 08 FR row, and each of the five keeps its own
               case (TC-3408..TC-3412), so §12's "132 of 142 carry at least one TC" is unchanged.
               US-0134's SCR-13/SCR-14 is marked "(§7 prov.)" because Doc 08 v2.7.0 §3.1 records
               FR-131's SCR as none. The double-assignment observation is routed to the tester
               alongside TC-3555.
               NEW-04 (Medium) — the SCR convention is narrowed, and the census corrected. (a) The
               v2.4.0 entry claimed "78 carry an SCR"; the verified figure, counted by matching
               every "Implements:" line carrying an SCR- token, is 75 — corrected in that entry and
               recorded as a new census bullet in §12: 142 stories = 75 carrying an SCR-##, 12
               carrying an explicit "none (…)" statement, 55 carrying no SCR segment. The DES
               census (109/33) and TC census (132/10) were re-counted and are exact. (b) §6's rule
               said the field "never blanks", and 55 stories blanked it — the document stated one
               rule and followed another. RESOLUTION: the rule is narrowed, not the 55 stories
               annotated. "Never blanks" stays categorical for DES and TC — the two fields that
               close a traceability chain, where a blank could be read as "not yet checked" — and
               SCR becomes an explicitly conditional segment whose absence is DEFINED as "this
               document claims no screen for this story", carrying a named maintenance obligation:
               any story whose FR carries an SCR in Doc 08 §3.1/§3.2 MUST carry the segment, and a
               silent story against a recorded screen is a defect the tester's RTM reconciliation
               catches. Chosen because the anti-fabrication purpose of the rule is fully served by
               DES and TC; because 55 restatements of "no screen" carry no information; and because
               this very cycle is repairing a High severity defect CAUSED by transcription, so
               trading one edit for 55 is a poor bet. The 12 explicit statements already in place
               are correct and are kept.
               NEW-05 (Medium) — the RTM's DoD figure is quoted as the RTM states it. US-0021's
               Note said "the RTM's current figure of 17 of 142"; Doc 08 v2.7.0 §6 says "The
               current figure is 17 of 134" and its dashboard row reads 134/134/17/117. The clause
               now quotes 17 of 134 and derives the rest explicitly. Grepped for other places a
               derived denominator is attributed upstream: this was the only one — §11 already
               stated it correctly, and §12's 109-of-142 and 132-of-142 are this document's own
               denominators, correctly used.
               NEW-06 (Low) — cross-cycle review-ID collisions closed by convention. Six cycles
               each numbered findings from 1, so a bare "ISS-07" has meant four different things
               and a reader following a citation landed on the wrong finding about half the time.
               A citation convention is stated once in §12 — "<ID> @ v<version>-c<cycle>" — and
               every in-line citation in the body is qualified: ISS-09/ISS-01/ISS-08/ISS-10/ISS-11/
               ISS-13/ISS-05 @ v2.3.0-c1, ISS-06/ISS-07/ISS-08/ISS-10 @ v1.1.0-c1, ISS-D @
               v1.1.1-c2. Cycle-2 findings keep the reviewer's own NEW-nn prefix, which collides
               with nothing. (Location correction: the report placed the stray ISS-06 citation at
               "§6 US-0076 (L2172)"; it is at §4, EP-07's outcome hypothesis. The finding stands;
               the anchor moved.)
               NEW-07 (Low) — the point total is stated exactly. §9 said "approximately 880
               points"; summing every Points: field gives 875 (23 at 3 · 67 at 5 · 41 at 8 · 11 at
               13; 23+67+41+11 = 142, so every story is accounted for). The v2.4.0 delta of +44 was
               exact; the 5-point drift is inherited from the v2.0.0 catch-up line, recorded as
               "approximately 313" at preliminary estimates against a chain that reconciles at 308.
               §9 now states the counted total, the distribution it is counted from, and the
               reconciling chain — with the honest caveat that only the 875 is counted; the
               historical intermediates are pinned, not recounted.
               NEW-08 (Low) — a fifth source disagreement is routed rather than left silent. §7's
               correction asserted "two Approved documents agree" on SCR-22/SCR-23, which is true
               of SDD v2.11.2 §5.2 and Doc 08 v2.7.0 §3.1 — but SDD §10.12.4 and §10.12.2 carry the
               INVERSE, so the SDD disagrees with itself and this document is downstream of the
               disagreement. Added to §7's preamble and to §12's routed-disagreements paragraph,
               which now names three locally and cross-refers to the canonical five-item register
               below. → architect (with tester).
               NEW-09 (Low) — US-0014 and US-0015 no longer pin their status to Doc 08 v1.1.0.
               Both now carry the two-clause ISS-12 pattern with the v2.7.0 pin. The two are NOT
               given the same second clause: Doc 08 v2.7.0 §6 lists US-0015 among the Partial
               stories and does NOT list US-0014, so their story-level statuses genuinely differ
               and are stated separately.
               B5/B1 residual (carried at both cycles, "no kill criteria at epic or story level") —
               answered explicitly rather than left silent: kill criteria exist and are owned
               elsewhere. Doc 01 §E2 states seven kill/pivot criteria and Doc 13 §14 tabulates them
               as KC-1..KC-7 with triggers, measurement owners and actions. §11 now says so, names
               the backlog items that instrument them (NF-08 for KC-3/KC-4, NF-01 for KC-1, NF-04
               for KC-6), and states the backlog-level consequence: if a criterion trips, the
               affected epic's stories stop rather than being re-sequenced. They are deliberately
               NOT restated here — a criterion stated twice drifts.
               Routed OUT of this document — canonical register (this document owns Doc 05 only;
               none of these is the product-owner's to fix, and none blocks Doc 05 from passing,
               because Doc 05 takes the conservative reading in every case):
               (a) Doc 08 v2.7.0 §3.3 still classes FR-050 as Should — that row must move to §3.1
               as a gating Must row; (b) Doc 08 v2.7.0 §3.2 records NFR-007 as having no
               implementing backlog item, though §8 NF-09 has implemented it since v1.1.1 and its
               G-TRACE tag should retire; (c) TC-3555 is double-assigned — Doc 07 v2.4.4 §5.6 heads
               TC-3552..TC-3555 to FR-091 / US-0101 while Doc 08 §3.1 also lists TC-3555 under
               FR-122 (US-0133) — and, added at v2.5.0, the same double-assignment condition holds
               for TC-3470..TC-3476 and TC-3481, which Doc 08 associates with FR-082..086 / FR-131
               rows whose US cells name a second story while Doc 07 heads each case to one;
               (d) SDD v2.11.2 §5.2 lists FR-075 in DES-102's Satisfies while Doc 08 v2.7.0 §3.1
               records FR-075's DES as none; (e) SDD v2.11.2 §10.12.2/§10.12.4 carry SCR-22 and
               SCR-23 inverted relative to its own §5.2 and to Doc 08 v2.7.0 §3.1 — this document
               follows §5.2 and the RTM. (a)–(c) → tester (Ji-woo Park); (d) and (e) → architect
               and tester jointly.
               Counts unchanged at v2.5.0: 12 epics · 62 features · 142 stories · 9 NF items ·
               23 screens. No story, feature, epic or ID was minted, retired or renumbered.
               v2.4.0 — Cycle-1 business-review rework (2026-08-31). Addresses ISS-01..ISS-14 of
````

---

### CH-03 — v2.4.0 changelog entry: the SCR census (NEW-04a)

FIND:

````
               109 stories carry a DES; 33 remain "Not Ready pending DES" citing their
               Doc 08 v2.7.0 §7 gap-log chain; 78 carry an SCR; 132 carry at least one TC. No DES
               or TC link is claimed that an Approved source does not record.
````

REPLACE WITH:

````
               109 stories carry a DES; 33 remain "Not Ready pending DES" citing their
               Doc 08 v2.7.0 §7 gap-log chain; 75 carry an `SCR-##` and 12 more carry an explicit
               "none (…)" SCR statement; 132 carry at least one TC. No DES or TC link is claimed
               that an Approved source does not record. (v2.5.0 correction, NEW-04 @ v2.4.0-c2:
               this line read "78 carry an SCR". The verified figure is 75, counted by matching
               every `Implements:` line carrying an `SCR-` token. The DES census (109/33) and the
               TC census (132/10) were re-counted at v2.5.0 and are both exact; this was the one
               figure of the three that had drifted. Full SCR census now in §12.)
````

---

### CH-04 — §6: delete the NEW-01 transcription residue

> **FIVE-BACKTICK FENCES.** The find-text contains four-backtick lines. Do not re-fence this change
> at four backticks. This change deletes 11 lines (current 1182–1192) and leaves US-0087's `AC:`
> block inside the fence that opened at line 1168 and closes at line 1206.

FIND:

`````
  TC-3510 (UI non-editable + verbatim submission), TC-3541 (TS-PARTY, Doc 07 v2.4.4). UT:
  UT-0071..0075 (protocol), UT-0786 (sdk), UT-0849..0851 (web) — Doc 06 v2.2.0 Approved.
````

---

## CH-23 — US-0089: DES-103 assigned and DoD met (ISS-04, ISS-07)

FIND:

````
Note: Not Ready pending DES — FR-079 has no DES assigned yet (Doc 03 §16 next-increment scope).
  Scenario: New member auto-assigned Supporter
AC:
`````

REPLACE WITH:

`````
  TC-3510 (UI non-editable + verbatim submission), TC-3541 (TS-PARTY, Doc 07 v2.4.4). UT:
  UT-0071..0075 (protocol), UT-0786 (sdk), UT-0849..0851 (web) — Doc 06 v2.2.0 Approved.
AC:
`````

---

### CH-05 — §6 preamble: the link-provenance rule, with the SCR segment narrowed (NEW-04b)

FIND:

````
> · `SCR` — from **Doc 08 v2.7.0 §3.1/§3.2** where that table carries one. RTM §3.3 (Should/Could
>   rows) has no SCR column, so for those stories the `SCR` is this document's own §7 provisional
>   inventory and is marked `(§7 prov.)`.
> · `TC` — from **Doc 07 v2.4.4 §5.x** where its case register carries a per-story heading; the
>   RTM's per-FR `TC` cell is used only where Doc 07 does not. Doc 07 wins where the two disagree.
> Where the Approved sources record **none**, the field says so and names the reason. `none
> (G-TRACE)` marks a live gap-log chain in Doc 08 v2.7.0 §7 and that story is **Not Ready**;
> `none (deliberate)` and `none (no UI clause)` are positive statements, not omissions. **No link in
> this document is asserted that an Approved upstream document does not record** — coverage is not
> manufactured to make a chain look closed.
````

REPLACE WITH:

````
> · `SCR` — from **Doc 08 v2.7.0 §3.1/§3.2** where that table carries one. RTM §3.3 (Should/Could
>   rows) has no SCR column, so for those stories the `SCR` is this document's own §7 provisional
>   inventory and is marked `(§7 prov.)`.
> · `TC` — from **Doc 07 v2.4.4 §5.x** where its case register carries a per-story heading; the
>   RTM's per-FR `TC` cell is used only where Doc 07 does not. **Doc 07 wins where the two
>   disagree**, and it wins in the specific case that recurs: where a Doc 08 FR row names two
>   stories, a case Doc 07 heads to one of them is carried on **that** story only. The sibling
>   story records the RTM's association in its Note rather than claiming the case. The evidence is
>   not lost — it sits on the story Doc 07 names, on the same FR row.
>
> **`DES` and `TC` never blank.** Where the Approved sources record none, the field says so and
> names the reason: `none (G-TRACE)` marks a live gap-log chain in Doc 08 v2.7.0 §7 and that story
> is **Not Ready**; `none (deliberate)` and `none — no TC minted (Doc 07 v2.4.4)` are positive
> statements, not omissions. These are the two fields that close a `BR → FR → DES → US → TC` chain,
> so a blank in either could be read as "not yet checked" — which is why the rule is categorical
> here and only here.
>
> **`SCR` is a conditional segment, and its absence is defined** _(narrowed at v2.5.0, NEW-04 @
> v2.4.0-c2)_. A story carries an `SCR` segment when an Approved source records a screen for it —
> Doc 08 v2.7.0 §3.1/§3.2, or this document's §7 for an RTM §3.3 row, marked `(§7 prov.)`. **A
> story with no recorded screen carries no `SCR` segment, and that omission means exactly one
> thing: this document claims no screen for the story.** It is not an open question and not work
> deferred. The v2.4.0 wording made the rule categorical across all three fields, and 55 of 142
> stories did not follow it (75 carry an `SCR-##`, 12 carry an explicit `none (…)` statement, 55
> carry no segment) — a document stating one rule and following another. The rule is narrowed
> rather than the 55 stories annotated: the anti-fabrication purpose is fully served by `DES` and
> `TC`, 55 restatements of "no screen" carry no information, and each restatement is a
> transcription event of exactly the kind that produced the §6 defect repaired at v2.5.0. The 12
> explicit statements already written are correct and are kept. **Maintenance obligation:** any
> story whose FR carries an `SCR` in Doc 08 §3.1/§3.2 MUST carry the segment; a silent story
> against a recorded screen is a defect, caught by the tester's RTM reconciliation and fixed at the
> next bump. Owner: **Priya Raghunathan**.
>
> **No link in this document is asserted that an Approved upstream document does not record** —
> coverage is not manufactured to make a chain look closed.
````

---

### CH-06 — US-0092: stale DES note + TC provenance (NEW-02, NEW-03 sweep)

FIND:

````
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-082 · DES-093, DES-094   Verified by: TC-3408, TC-3470, TC-3474   Depends on: US-0089
Note: Not Ready pending DES — FR-082 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-082 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3408   Depends on: US-0089
Note: **DES-093 and DES-094 ARE assigned** to FR-082 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 (FR-082..086) from `G-TRACE` to
  `G-PHASE3` at RTM v2.2.0 on exactly that basis. The "no DES assigned yet" note carried from
  v2.3.0 was **stale**; corrected at v2.5.0 (NEW-02 @ v2.4.0-c2) — the v2.4.0 ISS-07 sweep applied
  this correction to seven stories and did not reach these five. **The story is Ready on its DES
  link and is NOT done.** What remains open is scope, not assignment: Doc 08 v2.7.0 §7 entry 73
  records the DES as covering the **UI display layer only**, and full storage, enforcement and
  linkage-prevention design for Supporter-tier anonymity is still owed. FR-082's row is
  `G-PHASE3`, IS_INSECURE_MOCK=true, and DoD is not satisfied (Doc 08 v2.7.0 §6). **TC provenance
  (NEW-03 sweep):** Doc 08 v2.7.0 §3.1's FR-082 row also lists TC-3470 and TC-3474 in its TC cell,
  on a row whose US cell names US-0092 **and** US-0132 — but Doc 07 v2.4.4 §5.3 heads TC-3470 and
  TC-3474 to **US-0132 alone**, row by row, and this document follows Doc 07 per the §6 provenance
  rule. Both cases are carried on US-0132, on this same FR row; TC-3408 (Doc 07: `US-0092 ·
  FR-082`) is this story's own case and is **No mechanism** — Supporter-tier anonymity enforcement
  is not designed.
````

---

### CH-07 — US-0093: stale DES note + TC provenance (NEW-02, NEW-03 sweep)

FIND:

````
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-083 · DES-093, DES-094   Verified by: TC-3409, TC-3471, TC-3474   Depends on: US-0090, US-0092
Note: Not Ready pending DES — FR-083 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-083 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3409   Depends on: US-0090, US-0092
Note: **DES-093 and DES-094 ARE assigned** to FR-083 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 from `G-TRACE` to `G-PHASE3` at RTM
  v2.2.0. The "no DES assigned yet" note carried from v2.3.0 was **stale**; corrected at v2.5.0
  (NEW-02 @ v2.4.0-c2). **The story is Ready on its DES link and is NOT done.** What remains open
  is scope, not assignment: Doc 08 v2.7.0 §7 entry 74 records the DES as covering the **UI display
  layer only**, and the participation-record data model and ballot-direction enforcement are not
  yet designed. FR-083's row is `G-PHASE3`; DoD not satisfied (Doc 08 v2.7.0 §6). **TC provenance
  (NEW-03 sweep):** Doc 08 v2.7.0 §3.1's FR-083 row also lists TC-3471 and TC-3474, on a row whose
  US cell names US-0093 **and** US-0132; Doc 07 v2.4.4 §5.3 heads both cases to **US-0132 alone**,
  and this document follows Doc 07 per the §6 provenance rule. TC-3409 is this story's own case.
````

---

### CH-08 — US-0094: stale DES note + TC provenance (NEW-02, NEW-03 sweep)

FIND:

````
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-084 · DES-093, DES-094   Verified by: TC-3410, TC-3472, TC-3474   Depends on: US-0093
Note: Not Ready pending DES — FR-084 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-084 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3410   Depends on: US-0093
Note: **DES-093 and DES-094 ARE assigned** to FR-084 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 from `G-TRACE` to `G-PHASE3` at RTM
  v2.2.0. The "no DES assigned yet" note carried from v2.3.0 was **stale**; corrected at v2.5.0
  (NEW-02 @ v2.4.0-c2). **The story is Ready on its DES link and is NOT done.** What remains open
  is scope, not assignment: Doc 08 v2.7.0 §7 entry 75 records the DES as covering the **UI display
  layer only**, and disclosure-schedule publication and enforcement are not yet designed. FR-084's
  row is `G-PHASE3`; DoD not satisfied (Doc 08 v2.7.0 §6). **TC provenance (NEW-03 sweep):**
  Doc 08 v2.7.0 §3.1's FR-084 row also lists TC-3472 and TC-3474, on a row whose US cell names
  US-0094 **and** US-0132; Doc 07 v2.4.4 §5.3 heads both cases to **US-0132 alone**, and this
  document follows Doc 07 per the §6 provenance rule. TC-3410 is this story's own case.
````

---

### CH-09 — US-0095: stale DES note + TC provenance (NEW-02, NEW-03 sweep)

FIND:

````
Owner: Sofia Marchetti   Priority: Must   Points: 8   Implements: FR-085 · DES-093, DES-094   Verified by: TC-3411, TC-3474, TC-3476   Depends on: US-0094
Note: Not Ready pending DES — FR-085 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Sofia Marchetti   Priority: Must   Points: 8   Implements: FR-085 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3411   Depends on: US-0094
Note: **DES-093 and DES-094 ARE assigned** to FR-085 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 from `G-TRACE` to `G-PHASE3` at RTM
  v2.2.0. The "no DES assigned yet" note carried from v2.3.0 was **stale**; corrected at v2.5.0
  (NEW-02 @ v2.4.0-c2). **The story is Ready on its DES link and is NOT done.** What remains open
  is scope, not assignment: Doc 08 v2.7.0 §7 entry 76 records the DES as covering the **UI display
  layer only**, and the consent lifecycle and data-destruction mechanics are not yet designed.
  FR-085's row is `G-PHASE3`; DoD not satisfied (Doc 08 v2.7.0 §6). **TC provenance (NEW-03
  sweep):** Doc 08 v2.7.0 §3.1's FR-085 row also lists TC-3474 and TC-3476, on a row whose US cell
  names US-0095 **and** US-0132; Doc 07 v2.4.4 §5.3 heads both cases to **US-0132 alone**
  (TC-3476's `Verifies` cell reads `US-0132 · FR-085 · FR-131 clause 8 · DES-094`), and this
  document follows Doc 07 per the §6 provenance rule. **TC-3476 is Blocked** — the enrolment screen
  is not wired with the PrivacyStatus component — which is the same wiring gap named above, and is
  tracked on US-0132. TC-3411 is this story's own case.
````

---

### CH-10 — US-0096: stale DES note + TC provenance (NEW-02, NEW-03 sweep)

FIND:

````
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-086 · DES-093, DES-094   Verified by: TC-3412, TC-3474   Depends on: US-0092, US-0093
Note: Not Ready pending DES — FR-086 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-086 · **DES-093, DES-094** (ADR-023)   Verified by: TC-3412   Depends on: US-0092, US-0093
Note: **DES-093 and DES-094 ARE assigned** to FR-086 — SDD v2.11.2 records both as satisfying
  FR-082..086, and Doc 08 v2.7.0 §7 reclassified entries 73–77 from `G-TRACE` to `G-PHASE3` at RTM
  v2.2.0. The "no DES assigned yet" note carried from v2.3.0 was **stale**; corrected at v2.5.0
  (NEW-02 @ v2.4.0-c2). **The story is Ready on its DES link and is NOT done.** What remains open
  is scope, not assignment: Doc 08 v2.7.0 §7 entry 77 records the DES as covering the **UI display
  layer only**, and the cross-tier unlinkability guarantee for role-changers — the substance of
  this story — is not yet designed. FR-086's row is `G-PHASE3`; DoD not satisfied (Doc 08 v2.7.0
  §6). **TC provenance (NEW-03 sweep):** Doc 08 v2.7.0 §3.1's FR-086 row also lists TC-3474, on a
  row whose US cell names US-0096 **and** US-0132; Doc 07 v2.4.4 §5.3 heads TC-3474 to **US-0132
  alone**, and this document follows Doc 07 per the §6 provenance rule. TC-3412 is this story's
  own case.
````

---

### CH-11 — US-0134 owner line: drop the two TCs, mark the SCR (NEW-03)

FIND:

````
Owner: Samuel Oyelaran   Priority: Must   Points: 8   Implements: FR-131 · DES-096, DES-098 (ADR-024) · SCR-13, SCR-14   Verified by: TC-3476, TC-3481–TC-3487, TC-3534, TC-3535   Depends on: US-0038, US-0133
````

REPLACE WITH:

````
Owner: Samuel Oyelaran   Priority: Must   Points: 8   Implements: FR-131 · DES-096, DES-098 (ADR-024) · SCR-13, SCR-14 (§7 prov.)   Verified by: TC-3482–TC-3487, TC-3534, TC-3535   Depends on: US-0038, US-0133
````

---

### CH-12 — US-0134 Note: keep the observation, route the disagreement (NEW-03)

FIND:

````
Note: Status Partial — IBallotService interface + conventional stub built and tested
  (UT-0770..UT-0779 within the UT-0760..0779 seam range, Doc 06 v2.0.1 §3); IS_INSECURE_MOCK=true
  while stub-backed. Audit-contract wiring (tally-hash publication endpoint) is owed. **TC is NOT
  open** — the v2.3.0 claim "no TC-#### minted yet" was false (ISS-05): Doc 07 **v2.4.4** §5.3
  `TS-SCAFFOLD` heads **TC-3482..TC-3487** to this story, and Doc 08 v2.7.0 additionally associates
  TC-3476 and TC-3481 (FR-131 clause (d) notice) and TC-3534/TC-3535 with it. **TC-3487**
  (audit-contract publication) is **Blocked**, which is exactly the owed wiring named above. RTM row
  not yet complete; DoD not satisfied (Doc 08 v2.7.0 §6). BR-005 (ballot accessible to every
  eligible citizen) is upstream rationale.
````

REPLACE WITH:

````
Note: Status Partial — IBallotService interface + conventional stub built and tested
  (UT-0770..UT-0779 within the UT-0760..0779 seam range, Doc 06 v2.0.1 §3); IS_INSECURE_MOCK=true
  while stub-backed. Audit-contract wiring (tally-hash publication endpoint) is owed. **TC is NOT
  open** — the v2.3.0 claim "no TC-#### minted yet" was false (ISS-05 @ v2.3.0-c1): Doc 07
  **v2.4.4** §5.3 `TS-SCAFFOLD` heads **TC-3482..TC-3487** to this story, and §5.5's
  `TC-3534..TC-3535` heading names `US-0133, US-0134`. **TC-3487** (audit-contract publication) is
  **Blocked**, which is exactly the owed wiring named above. **TC provenance (NEW-03 @ v2.4.0-c2):**
  Doc 08 v2.7.0 §3.1's FR-131 TC cell **additionally** lists TC-3476 and TC-3481, and both were
  claimed here until v2.5.0. Doc 07 v2.4.4 §5.3 heads **TC-3476 to US-0132** (`US-0132 · FR-085 ·
  FR-131 clause 8 · DES-094`) and **TC-3481 to US-0133**, and **this document follows Doc 07 per
  the §6 provenance rule** — the rule exists precisely to settle this kind of disagreement. Both
  are dropped from `Verified by:` above. Claiming them here reproduced the very double-assignment
  condition this document routes for TC-3555 without flagging it; **routed to the tester
  (Ji-woo Park) alongside TC-3555** — see §12. Nothing is lost: TC-3481's clause (d) obligation is
  delivered at the parties-directory surface by TC-3534, which this story does carry, and remains
  Blocked for the SCR-13/SCR-14 ballot surfaces (Doc 07 v2.4.4 §5.5 note). **SCR:** Doc 08 v2.7.0
  §3.1 records FR-131's `SCR` as `none`, so SCR-13/SCR-14 above are this document's §7 provisional
  inventory and are marked `(§7 prov.)`. RTM row not yet complete; DoD not satisfied (Doc 08
  v2.7.0 §6). BR-005 (ballot accessible to every eligible citizen) is upstream rationale.
````

---

### CH-13 — US-0021 Note: quote the RTM's DoD figure as the RTM states it (NEW-05)

FIND:

````
Note: **Meets the Definition of Done** — Doc 08 **v2.7.0** §6 records "US-0021 newly meets DoD
  (v2.2.4) — FR-013's Should row closes and the full chain closes", and US-0021 sits inside the
  13-story DoD baseline on which the RTM's current figure of **17 of 142** is built. _(v2.3.0 said
  "DoD not satisfied (production store pending)"; corrected at v2.4.0, ISS-04. The RTM is the
  authority on DoD and this document mirrors it with the version pin above — see §11.)_
````

REPLACE WITH:

````
Note: **Meets the Definition of Done** — Doc 08 **v2.7.0** §6 records "US-0021 newly meets DoD
  (v2.2.4) — FR-013's Should row closes and the full chain closes", and US-0021 sits inside the
  13-story DoD baseline on which **Doc 08 v2.7.0's figure of 17 of 134** is built. Against this
  document's post-v2.4.0 population of **142** stories that is 17 of 142 — none of the eight
  stories minted at v2.4.0 is at DoD, so the numerator does not move and only the denominator does.
  _(v2.3.0 said "DoD not satisfied (production store pending)"; corrected at v2.4.0, ISS-04 @
  v2.3.0-c1. Corrected again at v2.5.0, NEW-05 @ v2.4.0-c2: this clause attributed "17 of 142" to
  the RTM, which has no such figure — 134 is the RTM's census and 142 is this document's. Quoting
  the pinned figure wrongly defeats the very convention §11 adopted, and it is the kind of number
  the PM's status reporting lifts verbatim. The RTM is the authority on DoD and this document
  mirrors it with the version pin above — see §11.)_
````

---

### CH-14 — US-0014 Note: current RTM pin + two-clause status (NEW-09)

FIND:

````
Note: RTM row COMPLETE (Doc 08 v1.1.0). Additional UT coverage added in Doc 06 v2.2.0:
````

REPLACE WITH:

````
Note: Two clauses, which are not the same claim (the ISS-12 @ v2.3.0-c1 pattern, applied here at
  v2.5.0 — NEW-09 @ v2.4.0-c2; this note previously pinned a single status to an RTM three major
  versions behind): **(1)** FR-011's Must row is **COMPLETE** — closed at Doc 08 v1.1.0 and still
  COMPLETE at **Doc 08 v2.7.0**. **(2)** US-0014's own story status is **done**: Doc 08 v2.7.0 §6
  does **not** list US-0014 among the Partial stories (`US-0011/0013/0015/0022/0087/0131`), unlike
  its sibling US-0015. Additional UT coverage added in Doc 06 v2.2.0:
````

---

### CH-15 — US-0015 Note: current RTM pin + two-clause status (NEW-09)

FIND:

````
Note: RTM row COMPLETE (Doc 08 v1.1.0) for FR-011. Web UI confirmation added in Doc 06 v2.2.0:
````

REPLACE WITH:

````
Note: Two clauses, which are not the same claim (the ISS-12 @ v2.3.0-c1 pattern, applied here at
  v2.5.0 — NEW-09 @ v2.4.0-c2): **(1)** FR-011's Must row is **COMPLETE** — closed at Doc 08
  v1.1.0 and still COMPLETE at **Doc 08 v2.7.0**. **(2)** US-0015's own story status is
  **Partial**, not done: Doc 08 v2.7.0 §6 lists US-0015 among `US-0011/0013/0015/0022/0087/0131`
  — "logic+UI complete and tested (IS_INSECURE_MOCK=true) but their Must RTM rows stay OPEN". An
  FR row closing is not a story reaching DoD, and until v2.5.0 this note read as if it were. Web
  UI confirmation added in Doc 06 v2.2.0:
````

---

### CH-16 — §7 preamble: route the SDD's internal SCR-22/SCR-23 inversion (NEW-08)

FIND:

````
> **Corrected at v2.4.0 — SCR-22 and SCR-23 were inverted.** Two Approved documents agree against
> the v2.3.0 rows: SDD v2.11.2 §5.2 states "SCR-22 = Debate scheduling and attendance surface
> (FR-066, FR-067); SCR-23 = Candidate feedback voting surface (FR-065)", and Doc 08 v2.7.0 §3.1
> records FR-065→SCR-23 and FR-066/FR-067→SCR-22. The rows below now match, and §6 assigns
> **SCR-23** to US-0074/US-0075 and **SCR-22** to US-0076/US-0077. The rest of the table was
> reconciled to the §6 link mapping in the same pass.
````

REPLACE WITH:

````
> **Corrected at v2.4.0 — SCR-22 and SCR-23 were inverted.** Two Approved documents agree against
> the v2.3.0 rows: SDD v2.11.2 §5.2 states "SCR-22 = Debate scheduling and attendance surface
> (FR-066, FR-067); SCR-23 = Candidate feedback voting surface (FR-065)", and Doc 08 v2.7.0 §3.1
> records FR-065→SCR-23 and FR-066/FR-067→SCR-22. The rows below now match, and §6 assigns
> **SCR-23** to US-0074/US-0075 and **SCR-22** to US-0076/US-0077. The rest of the table was
> reconciled to the §6 link mapping in the same pass.
>
> **Routed, not resolved (added at v2.5.0 — NEW-08 @ v2.4.0-c2): the SDD disagrees with itself.**
> The correction above is right, but it is not a clean two-against-one. **SDD v2.11.2 §10.12.4
> carries the inverse of its own §5.2** — `SCR-22 | Candidate feedback widget` and `SCR-23 | Debate
> schedule, attendance & post-debate vote` — and §10.12.2's row "3.2 Candidate selection" repeats
> the inversion in prose. So the position is: SDD §5.2 (incl. DES-066/DES-067) and Doc 08 v2.7.0
> §3.1 agree with the rows below; SDD §10.12.2/§10.12.4 do not. **This document follows §5.2 and
> the RTM**, and states the conflict rather than presenting the agreement as unanimous. → **architect**
> (with the **tester** for the RTM side). This is item (e) of the routed register in §12; the other
> four upstream conflicts are recorded there.
````

---

### CH-17 — §9: state the point total exactly (NEW-07) + qualify ISS-07 (NEW-06)

FIND:

````
**Total (v2.4.0): 142 stories, approximately 880 points** (v1.1.1 was 83 stories at approximately 499 points; 47 new stories from the v2.0.0 Gate-1-re-entry catch-up add approximately 313 points at preliminary estimates; v2.1.0 adds US-0131 — 3 points; v2.2.0 adds US-0132 — 5 points, US-0133 — 8 points, US-0134 — 8 points: +21 points; **v2.4.0 adds the eight Must-coverage stories on the US-0024 = 3 reference scale — US-0135 5, US-0136 5, US-0137 5, US-0138 8, US-0139 5, US-0140 8, US-0141 3, US-0142 5: +44 points**). _(ISS-07: v1.0.0 base corrected to actual point sum; total revised accordingly; v2.0.0 total subject to revision after Doc 03 is published and DES links assigned. The six v2.4.0 stories that are "Not Ready pending DES" are estimated pessimistically for the same reason.)_
````

REPLACE WITH:

````
**Total (v2.5.0): 142 stories, 875 points — an exact sum, not an approximation.** The distribution it is counted from: **23** stories at 3 · **67** at 5 · **41** at 8 · **11** at 13. Every story is accounted for (23 + 67 + 41 + 11 = **142**) and the points reconcile (69 + 335 + 328 + 143 = **875**). The version chain lands on it: v1.1.1 pinned 83 stories at 499 points; the v2.0.0 Gate-1-re-entry catch-up adds 47 stories at **308** points → 807; v2.1.0 adds US-0131 (3) → 810; v2.2.0 adds US-0132 (5), US-0133 (8), US-0134 (8): +21 → 831; **v2.4.0 adds the eight Must-coverage stories on the US-0024 = 3 reference scale — US-0135 5, US-0136 5, US-0137 5, US-0138 8, US-0139 5, US-0140 8, US-0141 3, US-0142 5: +44 → 875**. _(NEW-07 @ v2.4.0-c2: this line read "approximately 880 points". The +44 delta was exact; the drift was inherited from the pre-v2.4.0 total of "~836", whose true value is 831, and it sits in the v2.0.0 catch-up line, recorded as "approximately 313" at preliminary estimates. **Honesty about the chain:** only the **875** is counted — recomputed from the current `Points:` fields, and to be recomputed on every bump. The 308 is **derived** from it (875 − 44 − 21 − 3 − 499), not independently recounted; if the pinned v1.1.1 base of 499 is itself off, the residue moves there and the total is unaffected. A figure that is mechanically checkable should be stated exactly rather than approximately, which is the whole reason for the change.)_ _(ISS-07 @ v1.1.0-c1: v1.0.0 base corrected to actual point sum. v2.0.0 estimates remain subject to revision as DES links are assigned; the six v2.4.0 stories that are "Not Ready pending DES" are estimated pessimistically for the same reason.)_
````

---

### CH-18 — §10: qualify the ISS-08 citation (NEW-06)

FIND:

````
- **Refinement:** Fortnightly, 60 minutes, product-owner-led; architect, engineer and tester consulted (aligned with Doc 13 §8.2). _(ISS-08: cadence corrected from "weekly" to "fortnightly" to match the project plan.)_
````

REPLACE WITH:

````
- **Refinement:** Fortnightly, 60 minutes, product-owner-led; architect, engineer and tester consulted (aligned with Doc 13 §8.2). _(ISS-08 @ v1.1.0-c1: cadence corrected from "weekly" to "fortnightly" to match the project plan. Not to be confused with ISS-08 @ v2.3.0-c1, the `Source:` pin — see the citation convention in §12.)_
````

---

### CH-19 — §11: the never-blanks clause, narrowed for SCR (NEW-04b)

FIND:

````
> not. **`SCR`** comes from RTM §3.1/§3.2 where that table carries one; RTM §3.3 (Should/Could) has
> no `SCR` column, so for those stories the `SCR` is this document's §7 provisional inventory and is
> marked `(§7 prov.)`. **`DES: none` and `SCR: none` are positive statements that the Approved
> sources record none — never blanks, and never invented to close a chain on paper.**
````

REPLACE WITH:

````
> not. **`SCR`** comes from RTM §3.1/§3.2 where that table carries one; RTM §3.3 (Should/Could) has
> no `SCR` column, so for those stories the `SCR` is this document's §7 provisional inventory and is
> marked `(§7 prov.)`. **`DES: none` and `TC: none` are positive statements that the Approved
> sources record none — never blanks, and never invented to close a chain on paper.** **`SCR` is a
> conditional segment**: present when an Approved source records a screen, absent when none is
> recorded, and its absence is a **defined non-claim** — "this document claims no screen for this
> story" — not a blank _(narrowed at v2.5.0, NEW-04 @ v2.4.0-c2; the full rule, the census that
> forced it, and the maintenance obligation that keeps it honest are in the §6 preamble)_.
````

---

### CH-20 — §11: state where kill criteria live (B5/B1 residual)

FIND:

````
**Done:** merged to trunk behind a flag · `UT-####` unit tests green · `TC-####` passing ·
telemetry emitted · accessibility checked (`NFR-011`) · no new personal data introduced (`NFR-010`
data-inventory check green) · **RTM row (Doc 08) complete** · reviewed and merge signed by
reviewer-qa (the engineer never merges their own work).
````

REPLACE WITH:

````
**Done:** merged to trunk behind a flag · `UT-####` unit tests green · `TC-####` passing ·
telemetry emitted · accessibility checked (`NFR-011`) · no new personal data introduced (`NFR-010`
data-inventory check green) · **RTM row (Doc 08) complete** · reviewed and merge signed by
reviewer-qa (the engineer never merges their own work).

**Stop conditions — kill criteria exist, and are deliberately not restated here** _(added at
v2.5.0; answers the B5/B1 residual carried at v2.3.0-c1 and v2.4.0-c2, "no kill criteria at epic or
story level")_. Seven kill/pivot criteria are stated in **Doc 01 §E2** and tabulated with trigger,
measurement owner, escalation path and action in **Doc 13 §14** as **`KC-1`** (privacy failure —
KILL), **`KC-2`** (coercion failure), **`KC-3`** (adoption failure), **`KC-4`** (thesis failure),
**`KC-5`** (legal failure), **`KC-6`** (economic failure) and **`KC-7`** (capture failure); the
plan-level stop conditions sit in the same section. **This backlog does not hold its own kill
criteria, because a criterion stated in two documents drifts** — Doc 13 §14 is the single source,
and the project-manager raises a tripped criterion to the human approver within one business day.
What the backlog does owe is the **instrumentation**, and it is scheduled work with named owners in
§8: **`NF-08`** (public governance-health dashboard, `NFR-019`) carries the live published metrics
for `KC-3` and `KC-4` — the obligation Doc 04 §A-15.3 registers; **`NF-01`** (adversarial privacy
audit) carries the evidence path for `KC-1`; **`NF-04`** (cost-per-action instrumentation) for
`KC-6`. **Backlog-level consequence: if a kill criterion trips, the affected epic's stories stop.
They are not quietly re-sequenced, re-scoped or absorbed into a later increment.** Owner:
**Priya Raghunathan**, with **Ana-Maria Petrescu** (PM) on the raise path.
````

---

### CH-21 — §12 preamble: version label + the review-citation convention (NEW-06)

FIND:

````
Coverage assertion at **v2.4.0** — to be independently verified by the tester in the RTM (Doc 08).
_(ISS-13: advance this label with the document version on every bump — the same maintenance rule
SRS §11 applies to its Counts heading. It was frozen at v2.0.0 through four versions.)_
````

REPLACE WITH:

````
Coverage assertion at **v2.5.0** — to be independently verified by the tester in the RTM (Doc 08).
_(ISS-13 @ v2.3.0-c1: advance this label with the document version on every bump — the same
maintenance rule SRS §11 applies to its Counts heading. It was frozen at v2.0.0 through four
versions. Re-checked at v2.5.0: no story, feature, epic or NF item was minted, retired or
renumbered in this version, so every coverage figure below is carried forward by verification, not
by assumption — the DES census (109/33), the TC census (132/10) and the story population (142) were
each re-counted.)_

> **Review-issue citation convention (adopted at v2.5.0 — NEW-06 @ v2.4.0-c2).** This document has
> been through six review cycles and every cycle numbers its findings from 1, so a bare `ISS-07`
> has meant four different things and a reader following a citation landed on the wrong finding
> about half the time. **Every in-line citation of a review finding is now qualified
> `<ID> @ v<document-version>-c<cycle>`** — the version that was reviewed and the cycle number,
> which together name exactly one report in `artifacts/reviews/`. So `ISS-10 @ v1.1.0-c1` is the
> WSJF sequencing rule and `ISS-10 @ v2.3.0-c1` is the Definition-A/B scope note; `ISS-08 @
> v1.1.0-c1` is the refinement cadence and `ISS-08 @ v2.3.0-c1` is the `Source:` pin; `ISS-D @
> v1.1.1-c2` is the NF-item count. Cycle-2 findings on v2.4.0 keep the reviewer's own **`NEW-nn`**
> prefix and are cited `NEW-nn @ v2.4.0-c2`; that prefix collides with no `ISS-` series. An
> unqualified `ISS-nn` appearing inside a `Change:` entry refers to the report named at the head of
> that entry.
````

---

### CH-22 — §12: record the DES sweep and correct the note census (NEW-02)

FIND:

````
  plus the six new-story chains FR-121, FR-125, FR-126, FR-127, FR-128 and FR-129. Every story on a
  live chain carries "Not Ready pending DES" in §6 and names its gap-log entry; those stories
  satisfy the Definition of Ready only after the architect assigns a DES. FR-112..FR-120 keep the
  provisional DES links mapped above, subject to re-confirmation.
````

REPLACE WITH:

````
  plus the six new-story chains FR-121, FR-125, FR-126, FR-127, FR-128 and FR-129. Every story on a
  live chain carries "Not Ready pending DES" in §6 and names its gap-log entry; those stories
  satisfy the Definition of Ready only after the architect assigns a DES. FR-112..FR-120 keep the
  provisional DES links mapped above, subject to re-confirmation.
  **v2.5.0 — the sweep was completed and the population re-counted (NEW-02 @ v2.4.0-c2).** The
  v2.4.0 ISS-07 sweep corrected seven stale "no DES assigned yet" notes and stopped five short:
  **US-0092..US-0096** carried `DES-093, DES-094` on the owner line and "FR-08x has no DES assigned
  yet" on the next line, contradicting SDD v2.11.2, contradicting Doc 08 v2.7.0 §7 entries 73–77,
  and contradicting this paragraph — which has never listed FR-082..086 among the live chains. All
  five are corrected in §6. The whole population was then re-counted: **33** stories carry
  `none (G-TRACE)` on their `Implements:` line (this is the figure the 109 + 33 = 142 census rests
  on, and it is correct); **31** stories carry the "has no DES assigned yet" note, of which the
  **5** above were wrong and **26** are right — FR-074, FR-075, FR-076, FR-078, FR-087, FR-088,
  FR-089 and the nineteen consecutive chains FR-093..FR-111, each checked against the list above
  and against Doc 08 v2.7.0 §7. The 33 break down as those 26 + **US-0091** (which states its
  exception in bespoke wording) + the **6** stories minted at v2.4.0 that cite their gap-log entry
  directly. _(The cycle-2 report put the population at "33 of them, 28 correct"; the 32nd match was
  the transcription-residue line removed by NEW-01, and the residue after correction is 26, not 28.
  The finding itself was exactly right — only its arithmetic drifted, and it is recorded here so
  the next sweep starts from a true number.)_ **No sixth stale note exists.**
````

---

### CH-23 — §12: three routed disagreements, and a pointer to the canonical register (NEW-08)

FIND:

````
  **Two source disagreements are routed, not resolved here:** (a) SDD v2.11.2 §5.2 lists FR-075 in
  DES-102's `Satisfies` while Doc 08 v2.7.0 §3.1 records FR-075's DES as `none` (G-TRACE) — one of
  the two is wrong; US-0085 keeps the conservative reading ("Not Ready pending DES") until the
  architect and tester agree; (b) Doc 08 v2.7.0 §3.2 records NFR-007 as having no story and no
  backlog item, although §8 **NF-09** has implemented NFR-007 since v1.1.1 — that row should read
  `NF-09` and its G-TRACE tag should retire. Both → tester (Ji-woo Park); (a) also → architect.
````

REPLACE WITH:

````
  **Three source disagreements are routed, not resolved here** _(locally lettered; the canonical
  register of all five upstream conflicts this document has found is the "Routed OUT" list in the
  v2.5.0 `Change:` entry, and each is owned by another role)_: (i) SDD v2.11.2 §5.2 lists FR-075 in
  DES-102's `Satisfies` while Doc 08 v2.7.0 §3.1 records FR-075's DES as `none` (G-TRACE) — one of
  the two is wrong; US-0085 keeps the conservative reading ("Not Ready pending DES") until the
  architect and tester agree; (ii) Doc 08 v2.7.0 §3.2 records NFR-007 as having no story and no
  backlog item, although §8 **NF-09** has implemented NFR-007 since v1.1.1 — that row should read
  `NF-09` and its G-TRACE tag should retire; (iii) **added at v2.5.0 (NEW-08 @ v2.4.0-c2)** —
  SDD v2.11.2 §10.12.2 and §10.12.4 carry **SCR-22 and SCR-23 inverted** relative to the same
  document's §5.2 (and its DES-066/DES-067 rows) and relative to Doc 08 v2.7.0 §3.1. The SDD
  disagrees with itself; §6 and §7 of this document follow §5.2 and the RTM, and say so.
  (i) and (ii) → tester (Ji-woo Park), (i) also → architect; (iii) → architect, with the tester on
  the RTM side.
````

---

### CH-24 — §12: record the TC provenance sweep (NEW-03)

FIND:

````
  story's `Verified by:` field in §6 under the provenance rule stated there. **Routed to the
  tester:** TC-3555 is double-assigned — Doc 07 §5.6 heads TC-3552..TC-3555 to FR-091 / US-0101
  while Doc 08 v2.7.0 §3.1 also lists TC-3555 under FR-122 (US-0133); this document follows Doc 07.
````

REPLACE WITH:

````
  story's `Verified by:` field in §6 under the provenance rule stated there. **Routed to the
  tester:** TC-3555 is double-assigned — Doc 07 §5.6 heads TC-3552..TC-3555 to FR-091 / US-0101
  while Doc 08 v2.7.0 §3.1 also lists TC-3555 under FR-122 (US-0133); this document follows Doc 07.
- **v2.5.0 TC provenance sweep — the §6 rule enforced where this document was breaking it
  (NEW-03 @ v2.4.0-c2).** §6 states "Doc 07 wins where the two disagree", and seven claims in §6
  were made against Doc 07's own per-story headings, all of them sourced from a Doc 08 §3.1 FR row
  whose `US` cell names two stories. **Dropped from `Verified by:`:** TC-3476 and TC-3481 from
  **US-0134** (Doc 07 §5.3 heads them to US-0132 and US-0133 respectively); TC-3470 + TC-3474 from
  **US-0092**, TC-3471 + TC-3474 from **US-0093**, TC-3472 + TC-3474 from **US-0094**, TC-3474 +
  TC-3476 from **US-0095**, TC-3474 from **US-0096** — Doc 07 §5.3's `TC-3470..TC-3476` block heads
  every one of those cases to **US-0132 alone**, row by row. Each affected story records the RTM
  association in its Note rather than claiming the case, and **each retains its own case**
  (TC-3408..TC-3412 for US-0092..US-0096; TC-3482..TC-3487 + TC-3534/TC-3535 for US-0134), so the
  **132-of-142 TC census below is unchanged** and no evidence is lost — the dropped cases sit on
  US-0132, on the same FR row. **Routed to the tester (Ji-woo Park) alongside TC-3555:** the same
  double-assignment condition that TC-3555 is routed for holds for TC-3470..TC-3476 and TC-3481,
  and belongs in Doc 07/Doc 08 reconciliation rather than in this document.
````

---

### CH-25 — §12: add the SCR census bullet (NEW-04a)

FIND:

````
- `TC-####` links: **assigned** — 132 of 142 stories carry at least one `TC` in their `Verified by:`
````

REPLACE WITH:

````
- `SCR-##` links: **75 of 142** stories carry an `SCR-##` in their `Implements:` field, **12** more
  carry an explicit `none (…)` statement (`none (RTM records no SCR)`, `none (deliberate)`,
  `— (no UI clause)`, `all primary`), and the remaining **55** carry no `SCR` segment — which,
  under the rule narrowed at v2.5.0, is a defined non-claim and not a blank: this document claims
  no screen for those stories. Screens come from Doc 08 v2.7.0 §3.1/§3.2, or from §7 for an RTM
  §3.3 row, marked `(§7 prov.)`. _(NEW-04 @ v2.4.0-c2: the v2.4.0 `Change:` entry asserted "78
  carry an SCR" — the counted figure is 75, and it was the one census of the three that had
  drifted. The convention, the reasoning for narrowing it rather than annotating 55 stories, and
  the maintenance obligation that keeps it honest are in the §6 preamble and §11.)_
- `TC-####` links: **assigned** — 132 of 142 stories carry at least one `TC` in their `Verified by:`
````

---

### CH-26 — §1: qualify the ISS-09 citation (NEW-06)

FIND:

````
Traces to Doc 01 §B (customer journey) and Doc 02 `BR-001` … `BR-021`. _(ISS-09: the range read
````

REPLACE WITH:

````
Traces to Doc 01 §B (customer journey) and Doc 02 `BR-001` … `BR-021`. _(ISS-09 @ v2.3.0-c1: the range read
````

---

### CH-27 — §2: qualify the ISS-D citation (NEW-06)

FIND:

````
**Contents.** 12 epics · 62 features · 142 user stories · 9 explicit non-functional backlog items. (ISS-D: count corrected from 8 to 9 after NF-09 was added at v1.1.1;
````

REPLACE WITH:

````
**Contents.** 12 epics · 62 features · 142 user stories · 9 explicit non-functional backlog items. (Counts re-verified at v2.5.0 — nothing was minted, retired or renumbered in that version.) (ISS-D @ v1.1.1-c2: count corrected from 8 to 9 after NF-09 was added at v1.1.1;
````

---

### CH-28 — §2: qualify the ISS-01 / ISS-08 citation (NEW-06)

FIND:

````
(Doc 08 v2.7.0)** — this document's assertion is not itself evidence. _(ISS-01, ISS-08.)_
````

REPLACE WITH:

````
(Doc 08 v2.7.0)** — this document's assertion is not itself evidence. _(ISS-01, ISS-08 @ v2.3.0-c1.)_
````

---

### CH-29 — §2: qualify the ISS-10 citation (NEW-06)

FIND:

````
satisfying a Definition-B guarantee.** _(ISS-10.)_
````

REPLACE WITH:

````
satisfying a Definition-B guarantee.** _(ISS-10 @ v2.3.0-c1 — the Definition-A/B scope note; not to be confused with ISS-10 @ v1.1.0-c1, the WSJF sequencing rule cited in §3. See the citation convention in §12.)_
````

---

### CH-30 — §3: qualify the other ISS-10 citation (NEW-06)

FIND:

````
> EP-01 must precede EP-02 because party drafting requires personhood). _(ISS-10.)_
````

REPLACE WITH:

````
> EP-01 must precede EP-02 because party drafting requires personhood). _(ISS-10 @ v1.1.0-c1 — the WSJF sequencing rule; not the Definition-A/B note cited in §2, which is ISS-10 @ v2.3.0-c1.)_
````

---

### CH-31 — §4 EP-07: qualify the ISS-06 citation (NEW-06)

> The cycle-2 report placed this citation at "§6 US-0076 (L2172)". It is here, in EP-07's outcome
> hypothesis. Finding upheld; anchor corrected.

FIND:

````
  by three completed debates per candidate. _(ISS-06: aligned to FR-066 "major election" scope.)_
````

REPLACE WITH:

````
  by three completed debates per candidate. _(ISS-06 @ v1.1.0-c1: aligned to FR-066 "major election" scope — this metric and US-0076's AC were corrected together. Not ISS-06 @ v2.3.0-c1, which is the story-atom link population.)_
````

---

### CH-32 — §7: qualify the ISS-11 citation (NEW-06)

FIND:

````
> **`DES` mapping for screens is deliberately not duplicated here** _(ISS-11)_: **SDD v2.11.2 §15**
````

REPLACE WITH:

````
> **`DES` mapping for screens is deliberately not duplicated here** _(ISS-11 @ v2.3.0-c1)_: **SDD v2.11.2 §15**
````

---

### CH-33 — §12: qualify the ISS-01 citation (NEW-06)

FIND:

````
  least one story, as of v2.4.0. _(ISS-01: this line read "All 101 Must FRs in Doc 02 v2.2.0" from
````

REPLACE WITH:

````
  least one story, as of v2.4.0 and re-confirmed at v2.5.0 (no requirement or story changed). _(ISS-01 @ v2.3.0-c1: this line read "All 101 Must FRs in Doc 02 v2.2.0" from
````

---

### CH-34 — §12: qualify the ISS-05 citation (NEW-06)

FIND:

````
  v2.4.0; the tester owes those ten a `TC` at the next Doc 07 increment. _(ISS-05: the previous
````

REPLACE WITH:

````
  v2.4.0; the tester owes those ten a `TC` at the next Doc 07 increment. _(ISS-05 @ v2.3.0-c1: the previous
````

---

## Post-transcription checks (please run these, PM)

1. `Version:       2.5.0` and `Last updated:  2026-09-01` in the header block; `Status: In Review`.
2. Zero hits for `FIND:`, `## CH-`, `REPLACE`, and four-backtick fences in `docs/05-product-backlog.md`.
3. `US-0087`'s atom reads header → owner line → Note → `AC:` → three scenarios → single closing
   fence, immediately followed by `US-0088`'s opening fence. `### EP-03` is the next `###` heading.
4. Zero hits for `17 of 142` attributed to the RTM (the phrase survives only in CH-13's derived
   form, where 142 is explicitly this document's denominator).
5. Zero hits for `has no DES assigned yet` on US-0092..US-0096; **26** hits remain document-wide.
6. `TC-3476` no longer appears on US-0095's or US-0134's `Verified by:` line; `TC-3481` no longer
   appears on US-0134's; `TC-3474` appears on no `Verified by:` line except US-0132's range.
7. `78 carry an SCR` returns zero hits.
8. Counts unchanged: 142 `^Owner:.*Implements:` lines; 33 `none (G-TRACE)`; 75 `Implements:` lines
   carrying `SCR-`.

---

## Session-memory note (this file doubles as it)

**What I did.** Cycle-3 rework of Doc 05 as its owning role. Read the cycle-2 report in full, then
re-verified all nine findings against the current v2.4.0 file and the four Approved sources (SRS
v2.16.3, SDD v2.11.2, Doc 07 v2.4.4, Doc 08 v2.7.0) rather than accepting any on assertion.
Produced 34 anchored edits taking Doc 05 to **v2.5.0, Status: In Review**. Wrote nothing to `docs/`.

**Decisions I made.**
1. **NEW-04 resolved by narrowing the rule, not annotating 55 stories** — `DES`/`TC` stay
   categorically "never blank"; `SCR` becomes a conditional segment whose absence is a defined
   non-claim, with a named maintenance obligation. Reasoned in the changelog and in §6.
2. **Minor bump (v2.5.0), rejecting the reviewer's suggested patch bump** — the loop rule requires
   a new version for Medium-or-worse and this cleared two Highs, three Mediums and a convention
   amendment.
3. **NEW-01 repaired to the end state the report specifies**, since its literal instruction was
   self-contradictory (close the fence *and* keep the AC inside it).
4. **Extended NEW-03 to five further stories** found by the sweep the report asked for
   (US-0092..US-0096 claiming seven of US-0132's cases), fixing them the same way.
5. **Corrected the report's arithmetic and one anchor** rather than adopting them: 31 stale-note
   candidates (26 correct), not 33/28; the ISS-06 citation is in §4 EP-07, not US-0076.
6. **Answered the kill-criteria residual by pointing, not duplicating** — Doc 01 §E2 and Doc 13 §14
   `KC-1..KC-7` own them; §11 names the instrumenting backlog items and the stop consequence.
7. **Added a fifth routed upstream conflict** (SDD's internal SCR-22/SCR-23 inversion) and made the
   v2.5.0 `Change:` block the canonical routed register, since §12 and the changelog had been
   lettering the same conflicts differently.

**Open items (not mine to fix, routed).** (a) Doc 08 §3.3 FR-050 still Should → tester; (b) Doc 08
§3.2 NFR-007 vs §8 NF-09 → tester; (c) TC-3555 double-assignment, now joined by TC-3470..TC-3476
and TC-3481 → tester; (d) SDD §5.2 FR-075 in DES-102 vs Doc 08 `none` → architect + tester;
(e) SDD §10.12.2/§10.12.4 SCR-22/SCR-23 inversion → architect + tester. Also still open and
unchanged: US-0091 (FR-081) genuinely has no DES; four declared Should/Could gaps (FR-005, FR-049,
FR-052, FR-053) have no story and MUST be storied before their target sprint — owner
Priya Raghunathan.

**IDs touched.** No ID minted, retired or renumbered. Edited in place: US-0014, US-0015, US-0021,
US-0087 (structural repair only — content unchanged), US-0092, US-0093, US-0094, US-0095, US-0096,
US-0134. Referenced without change: US-0089, US-0091, US-0100, US-0132, US-0133, US-0135..US-0142,
NF-01, NF-04, NF-08, NF-09, FR-050, FR-074..FR-111, FR-121..FR-133, DES-093, DES-094, DES-096,
DES-098, DES-101..DES-106, SCR-13, SCR-14, SCR-22, SCR-23, TC-3408..TC-3412, TC-3470..TC-3488,
TC-3534, TC-3535, TC-3555, KC-1..KC-7.

**Gate posture.** Doc 05 remains **In Review**. Gate 1 is not reachable until a passing (≥95%, zero
critical/high/medium) cycle-3 `document-review` report exists for **v2.5.0**. This is cycle 3 of 5.
