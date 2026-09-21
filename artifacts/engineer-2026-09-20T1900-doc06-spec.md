# Doc 06 rework spec — v2.8.1 → v2.9.0 (debt-closure session)

```
Applier:       project-manager (anchored FIND/REPLACE spec — this role does not edit
               docs/06-coding-and-ut.md directly, per this repo's convention)
Author:        engineer (Samuel Oyelaran)
Target file:   docs/06-coding-and-ut.md
Target bump:   v2.8.1 (Approved) -> v2.9.0 (In Review)
Session note:  artifacts/engineer-2026-09-20T1900-doc06.md
Assignment:    artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md
Reviewer:      tester (new instance) — per the assignment record's neutral-reviewer table
Boundary rule: every FIND starts at a line start and ends at the end of a block-level unit.
               Fences are 4 backticks. Every FIND must match exactly once. Apply the eight
               OPs IN ORDER (each is independent of the others' line-number shifts because
               anchors are exact text, not line numbers).
```

---

### OP 1 — Header block: version bump, Status In Review, reviewer named, prior status retained

FIND:
````
Document ID:   CODE-TRUMOCRACY
Version:       2.8.1
Status:        Approved — 06-coding-and-ut-v2.8.1-technical-cycle2.md (PASS 97%, 0C/0H/0M/3L; reviewer: tester, neutral,
               PM-assigned; three Lows carried, non-blocking, to fold at the next touch: §5.0 review-history two cycles stale; v2.8.1 'not done' list overtaken by the concurrent Doc 02 v2.17.3 / README cycle-2 closures; §3 repaired sentence points at §7 item 26 where item 28 now registers UT-0890's owed row). Previously: In Review — review-loop rework cycle 2 of 5 against
               06-coding-and-ut-v2.8.0-technical-cycle1.md (FAIL 95%, 0C/0H/1M/3L; reviewer:
               tester Ji-woo Park, neutral, PM-assigned). ISS-01 (Medium) fixed in §3 and §7
               item 26(c); ISS-02/ISS-03/ISS-04 (Low) folded in the change history, §6 and §3
               respectively — see the v2.8.1 change-history entry for detail. Neutral
               reviewer for cycle 2: tester (per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md). Previously:
               In Review — neutral reviewer assigned before dispatch: tester (per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md). Previously:
               Approved — 06-coding-and-ut-v2.7.0-technical-cycle2.md (PASS 96%, 0C/0H/0M/3L;
               reviewer: tester, neutral, PM-assigned; three Lows carried, non-blocking, to
               fold at the next touch: ISS-C2-01 the item 26(c) closure pins Doc 07/08 at
               v2.6.0/v2.9.0 while v2.7.0/v2.10.0 are in review; ISS-C2-02 the v2.7.0 change
               entry still names Doc 02 v2.17.0 as In Review (v2.17.1 is Approved); ISS-C2-03
               the tightened Arabic assertion narrows the guard to the exact old phrase).
Owner:         Samuel Oyelaran — Engineering Lead
Source:        SDD-TRUMOCRACY v2.13.0 §9 · ADR-011 · ADR-023 · ADR-024 · ADR-025
Last updated:  2026-09-08
````
REPLACE WITH:
````
Document ID:   CODE-TRUMOCRACY
Version:       2.9.0
Status:        In Review — debt-closure session, rework-loop cycle 1 of 5. Neutral reviewer:
               tester (Ji-woo Park, new instance), assigned by the project-manager BEFORE
               dispatch per artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md
               (engineer is the owning role and is excluded; standing precedent for this
               document — v2.6.0, v2.7.0, v2.8.0, v2.8.1). This version is DOCUMENTS ONLY: no
               product code, no test, no config changed; `npm test` is unchanged, 640/640.
               It folds all three Lows carried at the v2.8.1 PASS status line (§5.0's review
               history, two cycles stale; the v2.8.1 "not done" list, overtaken by the
               concurrent Doc 02 v2.17.3 / README cycle-2 closures; §3's repaired sentence,
               which mis-pointed at §7 item 26 where item 28 has tracked UT-0890's row since
               v2.8.0); records UT-0890's TC/RTM row as CLOSED at §3 and §7 item 28 (Doc 07
               v2.9.0, Doc 08 v2.12.3, both Approved); records the OPEN-27 PrivacyStatus
               `anon`-copy ruling at §7 item 26 (Doc 03 §10.12.3 clause 10, Doc 03 v2.14.1
               Approved) as a PRE-MOUNT ruling with two owed engineering facts, not fixed this
               session; points §7 item 17 at the new Arabic review packet, still OPEN and
               human-gated; and adds new §7 item 29 naming the owning role for the SECURITY.md
               recurring re-check duty (routed from the SECURITY.md public-files review's
               ISS-02, Low, PM-adopted). Previously:
               Approved — 06-coding-and-ut-v2.8.1-technical-cycle2.md (PASS 97%, 0C/0H/0M/3L; reviewer: tester, neutral,
               PM-assigned; three Lows carried, non-blocking, to fold at the next touch: §5.0 review-history two cycles stale; v2.8.1 'not done' list overtaken by the concurrent Doc 02 v2.17.3 / README cycle-2 closures; §3 repaired sentence points at §7 item 26 where item 28 now registers UT-0890's owed row). Previously: In Review — review-loop rework cycle 2 of 5 against
               06-coding-and-ut-v2.8.0-technical-cycle1.md (FAIL 95%, 0C/0H/1M/3L; reviewer:
               tester Ji-woo Park, neutral, PM-assigned). ISS-01 (Medium) fixed in §3 and §7
               item 26(c); ISS-02/ISS-03/ISS-04 (Low) folded in the change history, §6 and §3
               respectively — see the v2.8.1 change-history entry for detail. Neutral
               reviewer for cycle 2: tester (per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md). Previously:
               In Review — neutral reviewer assigned before dispatch: tester (per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md). Previously:
               Approved — 06-coding-and-ut-v2.7.0-technical-cycle2.md (PASS 96%, 0C/0H/0M/3L;
               reviewer: tester, neutral, PM-assigned; three Lows carried, non-blocking, to
               fold at the next touch: ISS-C2-01 the item 26(c) closure pins Doc 07/08 at
               v2.6.0/v2.9.0 while v2.7.0/v2.10.0 are in review; ISS-C2-02 the v2.7.0 change
               entry still names Doc 02 v2.17.0 as In Review (v2.17.1 is Approved); ISS-C2-03
               the tightened Arabic assertion narrows the guard to the exact old phrase).
Owner:         Samuel Oyelaran — Engineering Lead
Source:        SDD-TRUMOCRACY v2.13.0 §9 · ADR-011 · ADR-023 · ADR-024 · ADR-025
Last updated:  2026-09-20
````

---

### OP 2 — New change-history entry v2.9.0 (inserted before the v2.8.1 entry)

FIND:
````
Change history:
  v2.8.1 (2026-09-08) — Rework cycle 2 of 5 against
````
REPLACE WITH:
````
Change history:
  v2.9.0 (2026-09-20) — Debt-closure session (documents only; NO product code, test or config
               changed), per artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md.
               Authored LAST in the session, after Docs 03/04/07/08 landed and were
               independently reviewed, so every claim below is verified against the file on
               disk at the moment of writing, not asserted from the assignment brief.
               **Item 28 — UT-0890's TC row, the sole `TC` row owed at session entry, is
               CLOSED.** Doc 07 **v2.9.0** (Approved, PASS 97% 0C/0H/0M/4L, reviewer-qa) mints
               `TC-3577`..`TC-3591` — fifteen cases, one per `it` of the UT-0890 block — into
               §5 `TS-ADV-01…16`; Doc 08 **v2.12.3** (Approved, PASS 97% 0C/0H/0M/2L,
               reviewer-qa, after a five-cycle rework loop) carries the RTM rows. §3 corrected
               to match (below). **Sharper finding than the debt was, recorded because it
               changes what the fifteen cases verify:** the tester ruled, and reviewer-qa
               independently re-read Doc 02 §4.45 and confirmed, that clause (e) governs
               participation acts only and expressly excludes personhood-enrolment/identity-
               verification copy (governed instead by FR-132 §(d)) — `/verify` copy IS
               enrolment copy, so all fifteen cases verify **FR-132 §(d)**, not FR-131. Two of
               the fifteen (`TC-3585`, `TC-3591`) apply FR-131's four-word list as an
               **instrument** over copy clause (e) does not govern, and both rows say so.
               **FR-131's Must row stays OPEN (G-PHASE3)**, unmoved by this mint, for the
               reason item 26(d) already gives (the DES-098 acknowledge-to-proceed control is
               unbuilt). Doc 08 records **fourteen**, not fifteen, of the fifteen cases as
               FR-132 evidence: `TC-3586` (the jargon-scan case) verifies **NFR-023 · DES-085**
               and names no FR. **Item 26 — the ISS-05(i) `PrivacyStatus` `anon`-state flag is
               RESOLVED.** The pre-mount re-copy-review this item asked for happened: the
               architect ruled BOTH `packages/ui/src/PrivacyStatus.tsx:251-252` strings
               (`title: 'Anonymous'`, `subtitle: 'Nothing you do here is linked to you'`) FAIL
               clause (e), and minted **Doc 03 §10.12.3 clause 10** (normative, Doc 03 v2.14.1
               Approved): v1 title **"Open tier"**; v1 subtitle **context-selected** by an
               explicit `anonContext` over `'browse' | 'join' | 'endorse'`; a **fail-honest
               default** for absent/unrecognised/malformed context; and an express bar on
               *inferring* context. `OPEN-27` is **CLOSED**; `OPEN-28` (the two failing
               strings), `OPEN-29` (screen 3.6's copy, named not ruled) and `OPEN-30` (closed
               same-session) were minted. The load-bearing reason: no single static `anon`
               subtitle can be honest across clause 8's three contexts — "not made public" is
               true on browse and join but **false on endorse**, since petition endorsement is
               public by design (Doc 14 §2.2); a one-string fix would trade a breach in one
               direction for a breach in the other. **Two facts recorded as owed engineering
               work, NOT fixed this session (product-code scope, out of this session's
               bounds):** (1) this is a **pre-mount** ruling — nothing ships wrong today;
               `PrivacyStatus` is mounted on no shipped surface (six non-render comments across
               five files: `ProvisionalStatus.tsx:11`, `PartyMembership.tsx:26`,
               `parties/page.tsx:19`, `proposals/page.tsx:22`, `petitions/new/page.tsx:13` and
               `:134`; no `PrivacyStatus` import anywhere in `apps/web`) — the opposite of the
               `ver` title, which shipped wrong and had to be caught in code (Doc 09 v1.3.0
               `REL-LIM-18`); (2) a green test currently **pins the non-compliant string**:
               `packages/ui/test/PrivacyStatus.test.tsx:32` asserts
               `expect(screen.getByText('Anonymous')).toBeTruthy()`, and the banned-word regex
               at line 208 sits **inside** the `UT-0759` `ver`-state describe block, so the
               `anon` case carries **no banned-word assertion at all**. Clause 10's five render
               conditions are the trigger for that fix, to be implemented together at the next
               `PrivacyStatus` touch. **Item 17 — Arabic stays OPEN and human-gated.** A
               complete review packet now exists,
               `artifacts/status/ARABIC-NATIVE-REVIEW-2026-09-20.md`: 253 reviewable leaves
               (228 plain strings + 25 template functions, zero missing an English
               counterpart), risk-ordered, `banner.*` coercion-warning strings at Tier 1.
               Recorded plainly: **preparing the packet is not the review** — the debt closes
               only when a named human Arabic speaker completes the pass and findings are
               applied. Two facts worth carrying: the template functions render counts and
               Arabic has **five** number-agreement categories to English's two, so the packet
               renders each at 1/2/3/11; and `UT-0889`/`TC-3573` guards the Arabic landing copy
               by **absence only** — it proves the retired phrasing is gone, not that the three
               required facts are present. **New §7 item 29 — the SECURITY.md re-check duty
               gets a named owner** (routed from the SECURITY.md public-files review's
               `ISS-02`, Low, PM-adopted; see §7 item 29 for detail). **Doc 06's three carried
               Lows folded:** (1) §5.0's review history, two cycles stale, now carries the
               v2.8.0 cycle-1 and v2.8.1 cycle-2 entries; (2) the v2.8.1 change-history "Not
               done in this session" list, overtaken by concurrent closures, corrected in place
               (below); (3) §3's sentence, corrected above, now cites item 28 (not item 26) and
               states the row CLOSED. **States observed on disk at the moment of writing,
               2026-09-20, not asserted from the session brief:** Doc 03 **v2.14.1** Approved;
               Doc 04 **v1.7.1** Approved; Doc 07 **v2.9.0** Approved; Doc 08 **v2.12.3**
               Approved; `node hooks/run_gates.cjs --audit` reports **0 documents blocking**,
               **138 Must / 16 COMPLETE / 122 OPEN** (both signals agreeing) — the Must count
               did not move this session, as expected for a documents-only debt-closure drop.
               **SECURITY.md's Doc 08 pin has landed at v2.12.3, verified on disk at the
               moment of this correction** — an earlier draft of this entry recorded it as
               not-yet-landed, correctly reflecting what was on disk when this document was
               first authored (the pin advance was a parallel, in-flight action at that
               moment); it has since landed and this entry is corrected before application
               rather than left to surface as a cycle-1 finding. `SECURITY.md:110` and
               `SECURITY.md:124-125` both now cite **Doc 08 v2.12.3**; the figures are
               unchanged (138/16/122). The same delta discharged the SECURITY.md review's
               `ISS-01` (the `--audit` overclaim) and passed its own cycle-2 public-files
               review: **PASS 97%, 0C/0H/0M/1L** (product-owner;
               `artifacts/status/PUBLIC-FILES-REVIEW-2026-09-20-security-md-cycle2.md`), which
               ruled **`ISS-03` DISCHARGED** — its condition was conjunctive (Doc 08 Approves
               AND the pin stays unadvanced) and the second conjunct is now false, so it cannot
               re-raise as a Medium. §7 item 29's recurring duty (below) is therefore recorded
               as **already exercised once this session, demonstrably** — not merely pending.
               **No product code, no test, no
               config changed. Suite unchanged: 640 tests** (contracts 95 / protocol 151 / sdk
               244 / ui 18 / indexer 16 / web 116), re-run and verified this session on a clean
               tree; `npm run typecheck` and `npm run lint:deps` not re-run — no code touched,
               nothing to typecheck or lint. Not done in this session, and not this role's to
               do: Doc 06's own document-review loop (tester, PM-assigned, this version); Doc 02
               §13 (j), `CLAUSE-TEXT-01`, `COOLDOWN-01` (unchanged — all named NOT CLOSEABLE by
               the assignment record); `TD-RTM-01`/`TD-RTM-02`/`TD-RTM-04` and item 26(d)/item
               10/item 23 (named out of scope by the assignment record, bigger than debt).
  v2.8.1 (2026-09-08) — Rework cycle 2 of 5 against
````

---

### OP 3 — §3 UT-inventory closing note: correct the owed-row sentence, append v2.9.0 annotation

FIND:
````
Every `UT-####` maps to an `FR`/`NFR`/`RISK` in the RTM (Doc 08) — the **UT-0890** block's
TC row is owed to the tester (§7 item 26; per the review assignment, Doc 08 not reopened for
it mid-session). **(v2.7.0, ISS-01 correction:** the
UT-0887/UT-0759/UT-0888 TC rows are **not** owed — Doc 07 v2.6.0 / Doc 08 v2.9.0, both
Approved 2026-09-06, carry `TC-3564`..`TC-3569` for them. The FR-131 Must row is not "owed" in
the sense of missing documentation either: Doc 08 v2.9.0 records it **OPEN (G-PHASE3)**, a
requirement-completeness gap on the unbuilt DES-098 acknowledge control (item 26(d)), not a
TC-authoring gap.) **(v2.8.1, ISS-01 correction:** the v2.8.0 text above this annotation read
"the UT-0889 and UT-0890 blocks' TC rows are owed" — **UT-0889's are not.** Doc 07 **v2.8.1**
(Approved) mints `TC-3570`..`TC-3576` for it and Doc 08 **v2.11.3** (Approved, closed on the
cap) carries them (line 530: "**UT-0889** → **TC-3570** … all five **Pass (obs.)** on R-18";
`TC-3576` linked from the §3.2 NFR-023 row). The only `TC` row owed to the tester is
**UT-0890's**, per `REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`; Doc 08 closed on the cap
and is not reopened for it mid-session. Doc 07/08 are not edited by this correction — both
are Approved and correct.)
````
REPLACE WITH:
````
Every `UT-####` maps to an `FR`/`NFR`/`RISK` in the RTM (Doc 08) — the **UT-0890** block's
TC row, **closed at v2.9.0** (§7 item 28 — not item 26, corrected below), is tracked there.
**(v2.7.0, ISS-01 correction:** the
UT-0887/UT-0759/UT-0888 TC rows are **not** owed — Doc 07 v2.6.0 / Doc 08 v2.9.0, both
Approved 2026-09-06, carry `TC-3564`..`TC-3569` for them. The FR-131 Must row is not "owed" in
the sense of missing documentation either: Doc 08 v2.9.0 records it **OPEN (G-PHASE3)**, a
requirement-completeness gap on the unbuilt DES-098 acknowledge control (item 26(d)), not a
TC-authoring gap.) **(v2.8.1, ISS-01 correction:** the v2.8.0 text above this annotation read
"the UT-0889 and UT-0890 blocks' TC rows are owed" — **UT-0889's are not.** Doc 07 **v2.8.1**
(Approved) mints `TC-3570`..`TC-3576` for it and Doc 08 **v2.11.3** (Approved, closed on the
cap) carries them (line 530: "**UT-0889** → **TC-3570** … all five **Pass (obs.)** on R-18";
`TC-3576` linked from the §3.2 NFR-023 row). The only `TC` row owed to the tester is
**UT-0890's**, per `REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`; Doc 08 closed on the cap
and is not reopened for it mid-session. Doc 07/08 are not edited by this correction — both
are Approved and correct.) **(v2.9.0, correction — the row above is CLOSED, and it was always
item 28's, not item 26's:** Doc 07 **v2.9.0** (Approved, PASS 97% 0C/0H/0M/4L, reviewer-qa)
mints `TC-3577`..`TC-3591` — fifteen cases, one per `it` of the UT-0890 block — into §5
`TS-ADV-01…16`; Doc 08 **v2.12.3** (Approved, PASS 97% 0C/0H/0M/2L, reviewer-qa, after a
five-cycle rework loop) carries the RTM rows. **All fifteen verify FR-132 §(d), not FR-131** —
the tester ruled, and reviewer-qa independently re-read Doc 02 §4.45 and confirmed, that
clause (e) governs participation acts only and expressly excludes personhood-enrolment/
identity-verification copy, which FR-132 §(d) governs instead; `/verify` copy IS enrolment
copy. Two of the fifteen (`TC-3585`, `TC-3591`) apply FR-131's four-word list as an
**instrument** over copy clause (e) does not govern, and both rows say so. **FR-131's Must row
stays OPEN (G-PHASE3)**, unmoved by this mint, for the reason item 26(d) already gives. Doc 08
records **fourteen**, not fifteen, of the fifteen cases as FR-132 evidence: `TC-3586` (the
jargon-scan case) verifies **NFR-023 · DES-085** and names no FR. Doc 07/08 are not edited by
this correction.)
````

---

### OP 4 — §5.0: fill the two-cycle-stale review-history gap

FIND:
````
Review history for this document:
- v2.6.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.6.0-technical-cycle1.md` — FAIL (94%, 0C/0H/1M/5L, reviewer: tester Ji-woo Park, neutral). Code accepted as correct (byte-exact against DECISIONS §4/§5/§5.3; UT-0889 verified to satisfy all five §5.4 requirements and to fail on every retired string); the FAIL is on the document. ISS-01 (Medium): §7 item 26(a)/(b)/(c), the change-history "Not done in this session" clause, the §3 closing note and the §4a "until it lands" sentence all still published as owed three cascades that had already closed (Doc 03 v2.13.0, Doc 09 v1.9.0, Doc 07 v2.6.0/Doc 08 v2.9.0) and mis-stated the FR-131 RTM row as owed rather than OPEN (G-PHASE3). ISS-02 (Low): §5.0 missing the v2.5.1 cycle-2 entry. ISS-03 (Low): no jargon scan over the two new landing strings. ISS-04 (Low): §2.2/§4a asserted a CI jargon-filter step that does not exist. ISS-05 (Low): the clause-(e) residue inventory omitted `PrivacyStatus.tsx`'s unmounted `anon` state and mis-stated the reason `private_endorsement` stands. ISS-06 (Low): the Arabic `'سري'` substring assertion is brittle against ordinary words sharing the root. All six reworked into v2.7.0 (a Medium forces at least a minor bump).
````
REPLACE WITH:
````
Review history for this document:
- v2.8.1 cycle 2: `artifacts/reviews/06-coding-and-ut-v2.8.1-technical-cycle2.md` — PASS (97%, 0C/0H/0M/3L, reviewer: tester, neutral). Three Lows carried rather than reworked, non-blocking, to fold at the next touch — the same three this v2.9.0 folds: §5.0's own review history two cycles stale (this pair of entries, filled at v2.9.0); the v2.8.1 "not done" list overtaken by the concurrent Doc 02 v2.17.3 / README cycle-2 closures; §3's repaired sentence pointing at §7 item 26 where item 28 registers UT-0890's owed row.
- v2.8.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.8.0-technical-cycle1.md` — FAIL (95%, 0C/0H/1M/3L, reviewer: tester Ji-woo Park, neutral). ISS-01 (Medium): §3's UT-inventory closing note wrongly claimed UT-0889's TC rows were still owed alongside UT-0890's, when only UT-0890's was. ISS-02 (Low): the v2.8.0 change-history claim "`--audit` still exits 0 with the unchanged format" needed qualifying to what is true and reproducible. ISS-03 (Low): §6's `enrolment_ui` paragraph read as the opposite of `permanentFlags()`'s actual filter. ISS-04 (Low): §3's "actual as of this session (2026-09-05)" needed advancing to a version-relative date so it cannot go stale again. All four reworked into v2.8.1 (ISS-01 fixed in §3 and §7 item 26(c); ISS-02/ISS-03/ISS-04 folded in the change history, §6 and §3 respectively).
- v2.6.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.6.0-technical-cycle1.md` — FAIL (94%, 0C/0H/1M/5L, reviewer: tester Ji-woo Park, neutral). Code accepted as correct (byte-exact against DECISIONS §4/§5/§5.3; UT-0889 verified to satisfy all five §5.4 requirements and to fail on every retired string); the FAIL is on the document. ISS-01 (Medium): §7 item 26(a)/(b)/(c), the change-history "Not done in this session" clause, the §3 closing note and the §4a "until it lands" sentence all still published as owed three cascades that had already closed (Doc 03 v2.13.0, Doc 09 v1.9.0, Doc 07 v2.6.0/Doc 08 v2.9.0) and mis-stated the FR-131 RTM row as owed rather than OPEN (G-PHASE3). ISS-02 (Low): §5.0 missing the v2.5.1 cycle-2 entry. ISS-03 (Low): no jargon scan over the two new landing strings. ISS-04 (Low): §2.2/§4a asserted a CI jargon-filter step that does not exist. ISS-05 (Low): the clause-(e) residue inventory omitted `PrivacyStatus.tsx`'s unmounted `anon` state and mis-stated the reason `private_endorsement` stands. ISS-06 (Low): the Arabic `'سري'` substring assertion is brittle against ordinary words sharing the root. All six reworked into v2.7.0 (a Medium forces at least a minor bump).
````

---

### OP 5 — v2.8.1 change-history "Not done in this session" list: annotate as overtaken (Low fold)

FIND:
````
               not self-appoint. Not done in this session, unchanged from v2.8.0: the
               README/CONTRIBUTING `/verify` inventory line (technical-writer); Doc 07/08 TC
               row for UT-0890 (tester, owed, next touch); the still-open
               `home.steps[0].body`/`home.promises[3]` question (item 26, unchanged); the
               DES-098 acknowledge-to-proceed control (item 26(d), unchanged); ARABIC-I18N
               native-speaker review (unchanged); Doc 02 v2.17.x's own review loop
               (product-owner/reviewer-qa, not this role's to do).
````
REPLACE WITH:
````
               not self-appoint. Not done in this session, unchanged from v2.8.0: the
               README/CONTRIBUTING `/verify` inventory line (technical-writer); Doc 07/08 TC
               row for UT-0890 (tester, owed, next touch); the still-open
               `home.steps[0].body`/`home.promises[3]` question (item 26, unchanged); the
               DES-098 acknowledge-to-proceed control (item 26(d), unchanged); ARABIC-I18N
               native-speaker review (unchanged); Doc 02 v2.17.x's own review loop
               (product-owner/reviewer-qa, not this role's to do). **(v2.9.0, Low fold — three
               of these six items closed since this line was written; corrected here rather
               than in place, per house convention:** the README/CONTRIBUTING `/verify`
               inventory line is present on disk (`README.md:123-143`,
               `CONTRIBUTING.md:41-163`) — CLOSED, pre-dating this session; the Doc 07/08 TC
               row for UT-0890 is CLOSED this session (§3, §7 item 28); Doc 02 v2.17.x's own
               review loop is CLOSED — Doc 02 is now **v2.17.3, Approved** (cycle 2,
               reviewer-qa). The remaining three items in this list are genuinely still open
               and unchanged: the `home.steps[0].body`/`home.promises[3]` question (item 26,
               still unruled); the DES-098 acknowledge-to-proceed control (item 26(d), still
               unbuilt); ARABIC-I18N (item 17 — a review packet now exists, but the
               native-speaker pass itself is still owed and human-gated).)
````

---

### OP 6 — §7 item 17: point Arabic at the new review packet

FIND:
````
17. **Arabic strings are a working-draft engineer translation — including the vote-surface
    coercion warning.** The i18n strings in `apps/web/src/i18n/ar.ts` (party-creation
    section, and since v2.5.0 the vote-surface safety copy `banner.notReceiptFreeTitle` /
    `banner.notReceiptFreeBody`) are engineer-authored and flagged for translation-quality
    review at Doc 14 (the technical-writer phase). **(v2.5.1)** The banner strings MUST have a
    native-speaker review before any Arabic-locale customer deployment: a mistranslated coercion
    warning is a safety defect, not a polish item. UT-0887 guards their substance (no retired
    "your vote is secret" claim; the platform-can-see statement present), not their fluency.
````
REPLACE WITH:
````
17. **Arabic strings are a working-draft engineer translation — including the vote-surface
    coercion warning.** The i18n strings in `apps/web/src/i18n/ar.ts` (party-creation
    section, and since v2.5.0 the vote-surface safety copy `banner.notReceiptFreeTitle` /
    `banner.notReceiptFreeBody`) are engineer-authored and flagged for translation-quality
    review at Doc 14 (the technical-writer phase). **(v2.5.1)** The banner strings MUST have a
    native-speaker review before any Arabic-locale customer deployment: a mistranslated coercion
    warning is a safety defect, not a polish item. UT-0887 guards their substance (no retired
    "your vote is secret" claim; the platform-can-see statement present), not their fluency.
    **(v2.9.0)** A complete ar↔en review packet now exists,
    `artifacts/status/ARABIC-NATIVE-REVIEW-2026-09-20.md`: 253 reviewable leaves (228 plain
    strings + 25 template functions, zero missing an English counterpart), risk-ordered, with
    the `banner.*` coercion-warning strings at Tier 1. **Preparing the packet is not the
    review** — this item stays OPEN and human-gated; it closes only when a named human Arabic
    speaker completes the pass and any findings are applied. Two facts worth carrying forward:
    the template functions render counts and Arabic has **five** number-agreement categories to
    English's two, so the packet renders each template at 1/2/3/11; and `UT-0889`/`TC-3573`
    guards the Arabic landing copy by **absence only** — it proves the retired phrasing is gone,
    not that the three required facts are present.
````

---

### OP 7 — §7 item 26: append the OPEN-27 resolution (ISS-05(i) flag now RESOLVED)

FIND:
````
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
````
REPLACE WITH:
````
    **(v2.7.0, ISS-01 review ISS-05(i) — one more site inventoried):**
    `packages/ui/src/PrivacyStatus.tsx:251-252`, the `anon` state's `title: 'Anonymous'` and
    `subtitle: 'Nothing you do here is linked to you'`, was not previously named here. It is
    **not public-facing today** — the component is mounted on no shipped surface (six explicit
    non-render comments across five consuming files, re-verified by Doc 09 v1.9.0) — so clause
    (e) does not bite yet. It is, however, precisely the string a future mount would ship, on
    the same footing as the `ver` title this item's (a) sub-item already tracked once before it
    shipped wrong: **flagged here for re-copy-review against clause (e) before first mount.**
    **(v2.9.0) — the re-copy-review ISS-05(i) flagged here happened, and `OPEN-27` is CLOSED,
    against the disposition:** the architect ruled BOTH strings above FAIL clause (e) — neither
    "Anonymous" nor "Nothing you do here is linked to you" survives the review — and minted
    **Doc 03 §10.12.3 clause 10** (normative, Doc 03 v2.14.1 Approved): v1 title **"Open
    tier"**; v1 subtitle **context-selected** by an explicit `anonContext` over
    `'browse' | 'join' | 'endorse'`; a **fail-honest default** for absent/unrecognised/
    malformed context; and an express bar on *inferring* context from any other prop.
    `OPEN-28` (the two failing strings), `OPEN-29` (screen 3.6's copy, named not ruled) and
    `OPEN-30` (closed same-session) were minted alongside the closure. **The load-bearing
    reason, worth carrying because it is not obvious:** no single static `anon` subtitle can be
    honest across clause 8's three contexts — "not made public" is true on browse and join but
    **false on endorse**, because petition endorsement is public by design (Doc 14 §2.2); a
    one-string fix would trade a breach in one direction for a breach in the other. **This is a
    PRE-MOUNT ruling — nothing ships wrong today.** `PrivacyStatus` is mounted on no shipped
    surface (unchanged from the finding above: six non-render comments across five files —
    `ProvisionalStatus.tsx:11`, `PartyMembership.tsx:26`, `parties/page.tsx:19`,
    `proposals/page.tsx:22`, `petitions/new/page.tsx:13` and `:134` — and no `PrivacyStatus`
    import anywhere in `apps/web`), the opposite of the `ver` title, which shipped wrong and had
    to be caught in code (Doc 09 v1.3.0 `REL-LIM-18`). **Owed engineering work, recorded here
    and NOT fixed this documents-only session:** (1) a green test currently pins the
    non-compliant string — `packages/ui/test/PrivacyStatus.test.tsx:32` asserts
    `expect(screen.getByText('Anonymous')).toBeTruthy()`, and the banned-word regex at line 208
    sits **inside** the `UT-0759` `ver`-state describe block, so the `anon` case carries **no
    banned-word assertion at all**; (2) clause 10's five render conditions are the trigger for
    implementing the fix (new title/subtitle strings, the `anonContext` prop, the fail-honest
    default and the test rewrite) at the next `PrivacyStatus` touch — product-code scope, owed
    to the engineer.
    **Still owed, unchanged by
    this fix:** (d) the DES-098 acknowledge-to-proceed control — FR-131 requires "the voter MUST
    acknowledge the notice to proceed"; the banner is non-dismissable but has no acknowledge
    control. That is SCR-13 story scope, not a copy fix, and stays open under US-0134. The
    enrolment/verification copy question (`home.steps[0].body`, `home.promises[3]`) is a
    **separate, not-yet-ruled** question (DECISIONS §7.1, tracked Doc 02 §13 (j)) and is
    untouched by this version.
````

---

### OP 8 — New §7 item 29: name the SECURITY.md re-check duty's owner

FIND:
````
    in this item clears CON-015 or is progress on enrolment — it removes a false public
    surface and builds nothing (DECISIONS §5.7).

## 8. Commit and branch conventions
````
REPLACE WITH:
````
    in this item clears CON-015 or is progress on enrolment — it removes a false public
    surface and builds nothing (DECISIONS §5.7).
29. **SECURITY.md's Doc-08-figure re-check duty has no owner — routed here so it is carried
    by this register (Flag: SECURITY-RECHECK-01; routed from the SECURITY.md public-files
    review's `ISS-02`, Low, PM-adopted 2026-09-20).** `SECURITY.md` (root, not one of the 14
    governed documents) publishes a **derived copy** of Doc 08 §9's Must-row figures (currently
    "16 of 138") with a maintenance note: "Re-check this figure on every Doc 08 version bump,
    and before any public release." The reviewer found the note had a trigger and a command but
    **no owner** — the same shape of absence that created the debt this session closes — and
    its preferred remedy, adopted by the project-manager, was to keep the public file
    lay-readable and instead **register the recurring duty here** rather than naming a role
    inside `SECURITY.md`. **This is a standing, RECURRING duty, not a one-off:** on every Doc 08
    version bump, and before any public release, re-derive the figure with
    `node hooks/run_gates.cjs --audit` and update `SECURITY.md`'s pinned figure and its
    "Last verified" line to match. **Owning role: technical-writer** (author of `SECURITY.md`;
    the project-manager triggers the re-check as part of certifying a Gate-2 packet or a Doc 08
    version bump, per the RACI). **Already exercised once this session, and now demonstrable
    rather than pending:** the pin has advanced from Doc 08 v2.11.3 to v2.12.3, verified on
    disk — `SECURITY.md:110` and `SECURITY.md:124-125` both now cite **Doc 08 v2.12.3**,
    figures unchanged (138/16/122). The delta's own cycle-2 public-files review PASSED
    (**97%, 0C/0H/0M/1L**, product-owner;
    `artifacts/status/PUBLIC-FILES-REVIEW-2026-09-20-security-md-cycle2.md`), which ruled
    **`ISS-03` DISCHARGED** — its condition was conjunctive (Doc 08 Approves AND the pin stays
    unadvanced) and the second conjunct is now false, so it cannot re-raise as a Medium. **A
    nuance on the re-derivation command, surfaced by that same review and worth carrying with
    the duty:** `node hooks/run_gates.cjs --audit`'s own `log()` (`run_gates.cjs:62-78`, called
    on every run) writes one JSON line to `.claude/gate-runs.log`, capped at 500 records —
    past the cap, each further run **discards the oldest record**. The reviewer graded this
    **Low, no fix owed** (`ISS-04`), because the log is gitignored (`.gitignore:21`): running
    the re-check command leaves `git status` clean and no tracked file changes, so the duty
    this item names remains, in the sense that matters to a reader, a documents-and-figures-only
    action.

## 8. Commit and branch conventions
````
