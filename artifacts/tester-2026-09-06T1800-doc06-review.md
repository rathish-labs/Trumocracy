# Tester session note — 2026-09-06T18:00 — Doc 06 v2.6.0 + code drop, neutral review (cycle 1)

```
Role:     tester (Ji-woo Park) — acting ONLY as the PM-assigned NEUTRAL REVIEWER
          (document-review skill, technical mode). Not authoring Doc 07/08 in this
          instance — a separate tester instance holds the clause-(e) spec.
Branch:   build/v1-cascade-and-release-prep
Assigned: artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md
          (Doc 06 v2.6.0 + the code drop → tester; owner engineer excluded)
Output:   artifacts/reviews/06-coding-and-ut-v2.6.0-technical-cycle1.md
Verdict:  FAIL — 94%, 0 Critical / 0 High / 1 Medium / 5 Low, cycle 1 of 5
```

## What I did

Reviewed **`docs/06-coding-and-ut.md` v2.6.0** end to end **plus its code drop** (the review unit
for code generation per CLAUDE.md), against the approver-confirmed ruling in
`artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §4/§5/§5.3/§5.4/§11 and Doc 02 §4.45
FR-131 clause (e). Scored and listed issues only. **I edited no document and no product code.**

1. **String verification (byte-exact, by extraction and diff, not by eye).** Pulled the concatenated
   literals out of `apps/web/src/i18n/en.ts` and `ar.ts` and diffed them against the DECISIONS
   blockquotes with whitespace normalised. `home.steps[1].body` **EXACT** vs §4.1 (en) and §4.2 (ar);
   `home.promises[0]` **EXACT** vs §5.1 (en) and §5.2 (ar). The
   `AUTHORSHIP_REQUIRES_WORKER_TIER` message in `packages/sdk/src/proposals.js` is **EXACT** vs §5.3,
   and the tier gate's reason survives intact.
2. **UT-0889 audited against every §5.4 requirement** — source strings *and* rendered `HomePage`, the
   plain-substring ban on private/anonymous/receipt-free/secure, the Arabic negatives
   (`سريًا`/`سري`, `لا نعرف`), the sdk refusal message via a real `ProposalService` fixture. All five
   present; **four of the five would fail on the retired strings** (the fifth is the source→DOM
   binding, which is correct by design). Reasoned from the assertions; **did not modify code to
   test it**.
3. **Ran the suites myself** — see counts below.
4. **Doc 06 checks** — header/Status/version, change history, §3 UT-0889 row and the whole inventory
   arithmetic, §4a review bars, §5.0 review log, §7 items 26 and 27, ID hygiene, citation resolution.
5. **Ran the FR-131(e) sweep independently** over `apps/web/src/i18n/*.ts`, `packages/*/src/**`
   (+ `services/*/src` and non-i18n `apps/web/src`), in English and Arabic, and dispositioned all
   16 hit classes in report §6.
6. Ran `node hooks/run_gates.cjs --audit`. Doc 06's line:
   `BLOCK  06-coding-and-ut.md v2.6.0 (technical) - report exists but fails the bar:
   ['06-coding-and-ut-v2.6.0-technical-cycle1.md']` — the hook parsed my report by its metadata
   block (no filename fallback) and reflects the FAIL. Four documents block in total; per the
   assignment that is expected mid-session and **I did not self-appoint** for any of them.

## Test counts observed (my own run, not quoted from the engineer)

- `npm test` — **624 passed, 0 failed**: contracts **95** · protocol **151** · sdk **244** · ui
  **18** · indexer **16** · **web 100**. Matches Doc 06 §3's table exactly (I re-summed all 25 rows:
  624) and every per-workspace addend.
- `npm run typecheck` — exit **0** (`packages/ui`, `apps/web`).
- `npm run lint:deps` — "7 workspace package(s) checked — layering OK", exit **0**.

## Sweep result

**No remaining unnegated claim that a v1 participation act is unknowable to Trumocracy.** Every hit
is legitimate: FR-131(a)'s mandated negated banner, translation **key names** (`joinPrivate`,
`anonymityTooSmall`), the enrolment strings expressly excluded by clause (e) and routed unruled as
DECISIONS §7.1 / Doc 02 §13 (j), k-anonymity **set-size parameters** (NFR-002), v2/ZK mechanism
NatSpec, the FR-082 doc comments now carrying their Definition-B markers, and `ballot.js` /
`private_endorsement`, which the approver ruled stand. One Arabic false positive (`تسري`, "takes
effect", `ar.ts:123`). Two residues are **not inventoried** by Doc 06 and became ISS-05: the
unmounted `PrivacyStatus` `anon` badge ("Nothing you do here is linked to you") and the imprecise
stated reason for `private_endorsement`.

## Verdict and why

**FAIL, 94%, 0C / 0H / 1M / 5L.** The **code is correct and I say so in the report** — byte-exact to
the approved copy, guard complete, suite green, diff exactly the commissioned set, no ID reuse,
`IS_INSECURE_MOCK` and the capability-absence surfaces untouched. The failure is **documentary**:
§7 — this document's own "canonical register of what this drop leaves owed" — plus two other
passages of **new v2.6.0 prose** publish three cascades as still owed that are **closed at HEAD in
Approved documents** (Doc 03 v2.13.0, closed at v2.12.0; Doc 09 v1.9.0, `REL-LIM-18` CLOSED with SHA
and stating in terms that "Doc 06 v2.5.1 §7 item 26(c) is closed"; Doc 07 v2.6.0 / Doc 08 v2.9.0
carrying `TC-3564`–`TC-3569`), and they call the FR-131 RTM row "owed" when it exists and is **OPEN
(G-PHASE3)**.

- **ISS-01 (Medium)** — the stale "still owed" register, four locations.
- **ISS-02 (Low)** — §5.0 omits the v2.5.1 cycle-2 PASS entry.
- **ISS-03 (Low)** — no jargon scan covers the two new landing strings (clean by hand).
- **ISS-04 (Low)** — §2.2/§4a assert a CI jargon-filter scan that does not exist.
- **ISS-05 (Low)** — the clause-(e) "still stand" inventory is not exhaustive.
- **ISS-06 (Low)** — the bare `'سري'` assertion is brittle against the owed Arabic rewrite.

Both carried Lows from cycle 2 of v2.5.1 (**ISS-C2-01**, **ISS-C2-02**) are **DISCHARGED**, verified
at source — the 18-word correction with its distribution, and the tsbuildinfo untrack, which I
confirmed at HEAD (`git ls-files` empty, `.gitignore:24`, commit `84e2203`).

## Routing

**To the engineer (Samuel Oyelaran), owning role of Doc 06.** No code change is required. Fix ISS-01
and fold ISS-02–ISS-05; ISS-06 needs only a recorded note. Per the `document-review` skill's rule a
**Medium forces at least a minor bump**, so the rework version is **v2.7.0, `Status: In Review`**
(*not* a patch bump — noting that the coordinator's message referred to "v2.6.1"; the skill's rule
governs and the report says v2.7.0). This loop then re-reviews as **cycle 2 of 5**.

## Decisions made

- Graded the stale register **Medium**, not Low, because the false "still owed" claims are **new
  v2.6.0 prose** (not inherited), span four locations, and mislead the Gate-2 packet the PM is
  assembling this week. Calibrated against the Doc 09 precedent (ISS-05/ISS-06, "the register
  re-verified against HEAD" — Medium), not against the §5.0 "pending" precedents (Low).
- Did **not** raise the `PrivacyStatus` `anon` badge above Low: the component is mounted on no
  surface, so clause (e)'s "public-facing" condition is not met today. Recorded as a
  re-review-before-first-mount item instead.
- Did **not** penalise the `'سري'` assertion as a defect: the engineer implemented DECISIONS §5.4
  exactly as written; the brittleness is in the spec's mechanics and only bites when the owed
  native-speaker rewrite lands.
- Did **not** open Doc 07 or Doc 08 for editing in this instance — a separate tester instance owns
  the clause-(e) TC/RTM spec. I only **read** them, to verify item 26(c)'s state.

## Open items (not mine to close)

- Doc 06 **v2.7.0** rework and cycle-2 re-review (engineer, then a PM-assigned neutral reviewer).
- **TC row for UT-0889** — owed to the tester; the other tester instance is authoring Doc 07 v2.7.0 /
  Doc 08 v2.10.0. Unaffected by this rework.
- FR-131 remains an **OPEN** Must row (G-PHASE3) — a requirement-phasing fact, not a documentation
  gap. Gate-2 traceability criterion NOT MET (122 of 138 Must rows OPEN), per the audit.
- ARABIC-I18N native-speaker review of the two new Arabic strings (technical-writer, pre-Gate 2),
  with ISS-06's word-boundary note attached.
- DES-098 acknowledge-to-proceed control — item 26(d), still owed under US-0134, correctly recorded.
- Observation for the PM, not an issue against Doc 06: **Doc 02 moved to v2.17.1** during this
  session (it was v2.17.0 when the engineer's drop and my review cited it); the audit shows it and
  Doc 01 v2.2.0 with no report for the current version.

## IDs touched

- **Minted:** none. (Issue IDs `ISS-01`…`ISS-06` are local to the review report.)
- **Referenced, not minted:** `UT-0889` (verified, not authored), `UT-0887`, `UT-0888`, `UT-0869`,
  `UT-0759`, `TC-3564`–`TC-3569`, `FR-131` (clause (e)), `FR-082`, `FR-014`, `FR-015`, `US-0134`,
  `DES-098`, `DES-094`, `NFR-002`, `NFR-023`, `REL-LIM-18`, `ISS-C2-01`, `ISS-C2-02`.

## Handoff

Report written; Doc 06 routed back to the **engineer**. I wrote **no** other review and self-appointed
for none of the three other blocking documents (Doc 01, Doc 02, Doc 04) — the PM sequences those.
Stopping here.
