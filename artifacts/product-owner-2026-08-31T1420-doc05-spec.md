# Session memory + apply-verbatim change specification — product-owner — 2026-08-31T14:20Z

```
Role:      product-owner (Priya Raghunathan)
Phase:     Define — review-and-rework loop, Doc 05 cycle 1 → v2.4.0 (part 2 of 2)
Product:   Trumocracy
Task:      Produce the REMAINING v2.4.0 changes to docs/05-product-backlog.md as an anchored,
           apply-verbatim change specification. The 134-row link mapping from my
           2026-08-31T11:20Z note §6 is ALREADY transcribed into the document and is NOT
           repeated here.
Source of  artifacts/reviews/05-product-backlog-v2.3.0-business-cycle1.md
truth:     (FAIL 69%, 1C/5H/4M/4L; reviewer: architect, neutral)
           artifacts/product-owner-2026-08-31T1120-doc05-rework.md (my prior session; D-1..D-10)
Outcome:   45 anchored changes specified below. I wrote NOTHING into docs/ (see §Constraint).
```

---

## Constraint under which this artifact exists

`Edit` is disabled for subagents and whole-file `Write` truncates a 3,219-line governed document
(this corrupted Doc 04 and `artifacts/memory-index.json` earlier today). **I therefore wrote nothing
into `docs/`.** Every change below is expressed as a byte-exact `FIND` → `REPLACE WITH` or
`INSERT AFTER` pair for mechanical transcription by the project-manager. Authorship of the content
remains mine (Priya Raghunathan, Doc 05 owner); the transcription is a clerical act, not an
authoring act.

**Apply the changes in the order given (CH-01 → CH-45).** Every `FIND` was copied byte-for-byte from
the file **as it now stands** (post-link-mapping). Where a `FIND` block contains a ``` fence, this
spec wraps it in a four-backtick fence — strip only the outer four-backtick fence when applying.

---

## CH-01 — Header block: version, status, source pin, date, v2.4.0 changelog entry (ISS-08, ISS-14)

FIND:

````
Version:       2.3.0
Status:        In Review
Owner:         Priya Raghunathan — Product Owner
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md v2.13.0), PR-TRUMOCRACY (docs/01-press-release-prfaq.md)
Last updated:  2026-08-25
Change:        v2.3.0 — Party-creation drop traceability update (2026-08-25).
````

REPLACE WITH:

````
Version:       2.4.0
Status:        In Review
Owner:         Priya Raghunathan — Product Owner
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md v2.16.3, Approved 2026-08-30) ·
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md v2.11.2, Approved) ·
               TESTCASES-TRUMOCRACY (docs/07-test-cases-suites.md v2.4.4, Approved) ·
               RTM-TRUMOCRACY (docs/08-traceability-matrix.md v2.7.0, Approved) ·
               PR-TRUMOCRACY (docs/01-press-release-prfaq.md)
Last updated:  2026-08-31
Change:        v2.4.0 — Cycle-1 business-review rework (2026-08-31). Addresses ISS-01..ISS-14 of
               artifacts/reviews/05-product-backlog-v2.3.0-business-cycle1.md (FAIL, 69%,
               1 Critical / 5 High / 4 Medium / 4 Low; reviewer: architect, neutral). Every
               finding was independently re-verified against the Approved upstream documents
               before being applied; none was refuted.
               ISS-08 (Medium) — applied first, because everything else is re-derived from it:
               Source pin advanced SRS v2.13.0 → v2.16.3 (Approved); SDD v2.11.2, Doc 07 v2.4.4
               and Doc 08 v2.7.0 added to the Source block, since §6 and §12 now cite DES and TC
               IDs from all three.
               ISS-01 (Critical): the Must-FR population is 114 (SRS v2.16.3 §11), not the 101
               this document asserted against the superseded Doc 02 v2.2.0. Eight Must FRs had no
               story anywhere in the document — FR-050, FR-121, FR-125, FR-126, FR-127, FR-128,
               FR-129, FR-133 — so real coverage was 106 of 114. Eight stories minted
               (US-0135..US-0142) and four features minted (FE-059 pilot jurisdiction sequence,
               FE-060 open-tier entry spam control, FE-061 on-device proof & nullifier-only
               identity posture, FE-062 public treasury record); FR-129 added to FE-056.
               Coverage is now 114 of 114. §2 and §12 assertions restated against SRS v2.16.3.
               ISS-02 (High): §12 "Known gaps" corrected — FR-050 is Must (raised from Should,
               BR-019; SRS v2.16.3 §11) and is now storied by US-0142. The remaining four gaps
               were re-verified and are correctly classified: FR-005 Should, FR-049 Should,
               FR-052 Could, FR-053 Could.
               ISS-03 (High): US-0073's first AC scenario rewritten to the EXPLICIT-LEAVE
               semantics of the FR-064-SEMANTICS ruling (SRS v2.15.0 ruling (a), Rathish, Human
               Approver, 2026-08-29; SRS v2.16.3 §8 and §16.3.1). The superseded auto-void wording
               is annotated in place, not deleted, per the US-0054 / US-0071 house convention.
               ISS-04 (High): US-0021, US-0089, US-0090, US-0100 and US-0131 reconciled to
               Doc 08 v2.7.0 §6, which records 17 stories meeting the Definition of Done. §11
               adopts the standing convention: the RTM is the authority on DoD and this document
               mirrors it with an explicit version pin, so drift is visible on the next bump.
               ISS-05 (High): the four false "no TC-#### minted" statements corrected against
               Doc 07 v2.4.4 §5.3 — TS-SCAFFOLD is TC-3470..TC-3488 (19 cases; 16 Pass (obs.)
               dated 2026-08-25; 3 Blocked: TC-3476, TC-3481, TC-3487). §12's TC list extended
               past TC-3516 with TS-MEMBERSHIP (TC-3517..TC-3540) and TS-PROPOSALS
               (TC-3542..TC-3563), and the false blanket line "TC-#### links: not yet assigned"
               replaced.
               ISS-06 (High): the template §6 story atom is populated on all 142 stories —
               Implements: FR · DES · SCR, and Verified by: TC-####. The "attached after Design"
               deferral has expired (SDD v2.11.2 and Doc 07 v2.4.4 are both Approved) and is
               replaced by an explicit link-provenance convention in the preamble, §6 and §11.
               109 stories carry a DES; 33 remain "Not Ready pending DES" citing their
               Doc 08 v2.7.0 §7 gap-log chain; 78 carry an SCR; 132 carry at least one TC. No DES
               or TC link is claimed that an Approved source does not record.
               ISS-07 (Medium): the seven stale "no DES assigned yet" notes corrected against
               SDD v2.11.2 §5.2/§15 — FR-077→DES-101 (US-0087) · FR-079→DES-103 (US-0089) ·
               FR-080→DES-103 (US-0090) · FR-090→DES-104 (US-0100) · FR-091→DES-105 (US-0101) ·
               FR-092→DES-106 (US-0102) · FR-130→DES-102 (US-0131). Correction to the review's
               shorthand: DES-103 covers BOTH FR-079 and FR-080; DES-104 covers FR-090. FR-081
               (US-0091) genuinely still has no DES and stays "Not Ready pending DES".
               ISS-09 (Medium): §1's up-trace corrected BR-001…BR-013 → BR-001…BR-021, and the
               three unreachable BRs given an epic home: BR-016 → EP-04, BR-017 → EP-09,
               BR-020 → EP-01. All 21 BRs are now reachable from an epic's Business-value line.
               ISS-10 (Medium): v1/v2 scope note added to §2 pointing at SRS §16; Definition-A /
               Definition-B posture annotated on EP-06, EP-09 and on US-0038, US-0041, US-0042,
               US-0044 (and, at mint, US-0140), each carrying the FR-131 clause (a) honesty
               obligation: in a v1 deployment voting is NOT anonymous, NOT receipt-free and NOT
               coercion-resistant.
               ISS-11 (Low): §7 preamble states that screen-level DES mapping lives in SDD §15 and
               is not duplicated here; §7 rows reconciled to the §6 mapping; and SCR-22 / SCR-23
               un-inverted — SDD v2.11.2 §5.2 and Doc 08 v2.7.0 §3.1 both record SCR-22 = debate
               scheduling and attendance (FR-066, FR-067) and SCR-23 = candidate feedback (FR-065).
               ISS-12 (Low): US-0013's self-contradictory parenthesis rewritten as two clauses.
               ISS-13 (Low): §12 coverage-assertion label advanced to v2.4.0, with the maintenance
               rule stated beside it.
               ISS-14 (Low): the "no passing business-mode review" statements qualified to the
               CURRENT version — v2.0.1 passed at cycle 2 (99%, 0C/0H/0M/0L); v2.1.0 onward are
               unreviewed; the review loop is per-version.
               Counts: §2 features 58 → 62, stories 134 → 142. §9 total 134 stories / ~836 points
               → 142 stories / ~880 points (+44 on the US-0024 = 3 reference scale).
               Routed OUT of this document (found while reworking; I own only Doc 05):
               (a) Doc 08 v2.7.0 §3.3 still classes FR-050 as Should — that row must move to §3.1
               as a gating Must row; (b) Doc 08 v2.7.0 §3.2 records NFR-007 as having no
               implementing backlog item, but §8 NF-09 has implemented it since v1.1.1 and its
               G-TRACE tag should retire; (c) TC-3555 is double-assigned — Doc 07 v2.4.4 §5.6
               heads it to US-0101 (FR-091) while Doc 08 §3.1 also lists it under FR-122
               (US-0133); (d) SDD v2.11.2 §5.2 lists FR-075 in DES-102's Satisfies while
               Doc 08 v2.7.0 §3.1 records FR-075's DES as none. (a)–(c) → tester (Ji-woo Park);
               (d) → architect and tester jointly. This document takes the conservative reading
               in each case and claims nothing the RTM denies.
               v2.3.0 — Party-creation drop traceability update (2026-08-25).
````

---

## CH-02 — v2.3.0 changelog entry: qualify the "no passing review" claim (ISS-14)

FIND:

````
               remains: no passing business-mode review exists for Doc 05; full review owed before
               Gate-1 presentation.
````

REPLACE WITH:

````
               remains: no passing business-mode review exists for the CURRENT version; full review
               owed before Gate-1 presentation. (v2.4.0 correction, ISS-14: as written this was
               inaccurate — artifacts/reviews/05-product-backlog-v2.0.1-business-cycle2.md is a
               PASS at 99%, 0C/0H/0M/0L. The review loop is per-version: v2.0.1 passed; v2.1.0,
               v2.2.0 and v2.3.0 were unreviewed until the v2.3.0 cycle-1 review of 2026-08-31.)
````

---

## CH-03 — v2.2.0 changelog entry: same qualification (ISS-14)

FIND:

````
               updated; source pin updated to Doc 02 v2.13.0. NOTE: Doc 05 remains Status:
               In Review — no passing business-mode review exists yet; the v2.2.0 increment
               awaits the owed full business review before Gate-1 presentation.
````

REPLACE WITH:

````
               updated; source pin updated to Doc 02 v2.13.0. NOTE: Doc 05 remains Status:
               In Review — no passing business-mode review exists for this version (v2.0.1 passed
               at cycle 2, 99%); the v2.2.0 increment awaits the owed full business review before
               Gate-1 presentation. (v2.4.0: "no passing review exists yet" qualified to
               per-version — ISS-14.)
````

---

## CH-04 — Document preamble: the expired "attached after Design" deferral (ISS-06)

FIND:

````
> Every story maps to the requirement(s) it implements. `DES-###` and `SCR-##` links are attached
> after Design (Doc 03) and reconciled in the RTM (Doc 08) by the tester — **stories below are not
> Ready until those links exist.**
````

REPLACE WITH:

````
> Every story maps to the requirement(s) it implements **and carries its `DES-###`, `SCR-##` and
> `TC-####` links in the story atom**, reconciled in the RTM (Doc 08) by the tester. Design is
> complete and Approved (SDD v2.11.2) and Test Cases are Approved (Doc 07 v2.4.4), so the former
> "attached after Design" deferral **expired and is closed at v2.4.0** (ISS-06). The provenance
> rules for each link are stated once, in §6, and the authority convention in §11. **A story whose
> `DES` field reads `none (G-TRACE)` is not Ready** and says so in its Note — that is a positive
> statement about a live gap-log chain, never a blank.
````

---

## CH-05 — §1: BR up-trace corrected to the full range (ISS-09)

FIND:

````
Traces to Doc 01 §B (customer journey) and Doc 02 `BR-001` … `BR-013`.
````

REPLACE WITH:

````
Traces to Doc 01 §B (customer journey) and Doc 02 `BR-001` … `BR-021`. _(ISS-09: the range read
`BR-001` … `BR-013` until v2.4.0 — eight business requirements short. SRS v2.16.3 §11 counts 21 BR,
and §4 of this document already cited BR-014, BR-015, BR-018, BR-019 and BR-021 in its epic
Business-value lines, so §1 contradicted §4. Re-checked at v2.4.0: every one of the 21 BRs is now
reachable from at least one epic's "Business value / link" line — BR-016 was added to EP-04,
BR-017 to EP-09 and BR-020 to EP-01 to close the three that were not.)_
````

---

## CH-06 — §2: contents, Must-FR coverage, v1/v2 scope note (ISS-01, ISS-08, ISS-10, ISS-13)

FIND:

````
**Contents.** 12 epics · 58 features · 134 user stories · 9 explicit non-functional backlog items. (ISS-D: count corrected from 8 to 9 after NF-09 was added at v1.1.1; v2.0.0 adds EP-11, EP-12, FE-037..FE-056, US-0084..US-0130; v2.1.0 adds US-0131; v2.2.0 adds FE-057/058, US-0132..0134.)
All 101 Must FRs in Doc 02 v2.2.0 are covered by at least one story; coverage is asserted in §12 and
verified in the RTM. FR-130 (Must, Doc 02 v2.5.0) is covered by US-0131 (minted v2.1.0). FR-122, FR-123, FR-131, FR-132 (Must, Doc 02 v2.13.0) are covered by US-0132..US-0134 (minted v2.2.0). (ISS-E: source pin updated from v1.1.0 to v1.1.1; v2.0.0: source pin updated to v2.2.0; v2.1.0: source pin updated to v2.5.0; v2.2.0: source pin updated to v2.13.0.)
````

REPLACE WITH:

````
**Contents.** 12 epics · 62 features · 142 user stories · 9 explicit non-functional backlog items. (ISS-D: count corrected from 8 to 9 after NF-09 was added at v1.1.1; v2.0.0 adds EP-11, EP-12, FE-037..FE-056, US-0084..US-0130; v2.1.0 adds US-0131; v2.2.0 adds FE-057/058, US-0132..0134; v2.4.0 adds FE-059..FE-062 and US-0135..US-0142.)

**Must-FR coverage — re-derived at v2.4.0 against SRS v2.16.3 §11 (Approved 2026-08-30).** The Must
set is **114 FRs**. This section asserted "all 101 Must FRs in Doc 02 v2.2.0" from v2.0.0 to v2.3.0;
that population was three minor versions and eight amendments out of date, and it concealed a real
gap: **eight Must FRs had no story anywhere in this document** — `FR-050` (public treasury record),
`FR-121` (pilot jurisdiction sequence), `FR-125` (open-tier invite-gating with a mandatory
non-invite fallback), `FR-126` (on-device credential processing), `FR-127` (nullifier-collision-only
duplicate detection), `FR-128` (no stored identity / the subpoena test), `FR-129` (attestor-plurality
Charter guard) and `FR-133` (v1 spam-resistance, flag-don't-block). Real coverage was **106 of 114**.
v2.4.0 mints US-0135 (FR-121) · US-0136 (FR-125) · US-0137 (FR-133) · US-0138 (FR-126) · US-0139
(FR-127) · US-0140 (FR-128) · US-0141 (FR-129) · US-0142 (FR-050), taking coverage to **114 of 114**.
FR-130 (Must) is covered by US-0131; FR-122, FR-123, FR-124, FR-131 and FR-132 (Must) by
US-0132..US-0134. Coverage is asserted in §12 and **independently verified by the tester in the RTM
(Doc 08 v2.7.0)** — this document's assertion is not itself evidence. _(ISS-01, ISS-08.)_

**v1 / v2 scope — read this before reading any epic's success metric (SRS v2.16.3 §16).** SRS
§16.1.1 defines **Definition A (v1 — transparent party platform)** and §16.1.2 **Definition B
(v2 — full cryptographic guarantees)**; §16.3.1 assigns every FR a v1 mechanism, a v2 mechanism and
an honesty flag. Several guarantees this backlog states plainly are **Definition-B (v2)** commitments
and are **not** true of a v1 deployment: FR-030 and FR-031 are classed `DEFERRED-v2`; FR-032, FR-033
and FR-126 are classed `PARTIAL`; FR-128's subpoena test is not met in v1 at all. **FR-131 clause (a)
REQUIRES a v1 deployment to state at every vote-casting surface that voting is NOT anonymous, NOT
receipt-free and NOT coercion-resistant.** EP-06 and EP-09, and stories US-0038, US-0041, US-0042,
US-0044 and US-0140, carry that posture in place. **A v1 deployment MUST NOT be reported as
satisfying a Definition-B guarantee.** _(ISS-10.)_
````

---

## CH-07 — §4 EP-01: BR-020 up-trace, in-scope, features (ISS-01, ISS-09)

FIND:

````
Business value / link: BR-006, BR-009, BR-004
In scope: enrolment, one-credential-per-human, per-scope action limits, cross-scope unlinkability,
  residency scope, versioned region registry, population denominators, deterministic enrolment
  nullifier, pluggable credential adapter, government eID issuer hierarchy.
Out of scope: any storage of identity documents; any identity issued by Trumocracy.
Success metric: <=0.1% duplicate credentials; 0 identity fields at data inventory; >=2 attestors live per region.
Features: FE-001, FE-002, FE-003, FE-004, FE-034, FE-036, FE-037, FE-057
````

REPLACE WITH:

````
Business value / link: BR-006, BR-009, BR-004, BR-020
In scope: enrolment, one-credential-per-human, per-scope action limits, cross-scope unlinkability,
  residency scope, versioned region registry, population denominators, deterministic enrolment
  nullifier, pluggable credential adapter, government eID issuer hierarchy, published pilot
  jurisdiction sequence and adapter schedule (FR-121), open-tier entry with a permanently open
  non-invite fallback (FR-125) and flag-don't-block spam resistance (FR-133), on-device credential
  processing (FR-126), nullifier-collision-only duplicate detection (FR-127), no-stored-identity
  posture / the subpoena test (FR-128).
Out of scope: any storage of identity documents; any identity issued by Trumocracy.
Success metric: <=0.1% duplicate credentials; 0 identity fields at data inventory; >=2 attestors live per region.
Features: FE-001, FE-002, FE-003, FE-004, FE-034, FE-036, FE-037, FE-057, FE-059, FE-060, FE-061
````

---

## CH-08 — §4 EP-04: BR-016 up-trace (ISS-09)

FIND:

````
Business value / link: BR-003, BR-010, BR-012
In scope: join, leave, equal standing, maturation period, churn rate limits, aggregate-only
````

REPLACE WITH:

````
Business value / link: BR-003, BR-010, BR-012, BR-016
In scope: join, leave, equal standing, maturation period, churn rate limits, aggregate-only
````

---

## CH-09 — §4 EP-06: v1/v2 posture and a split success metric (ISS-10)

FIND:

````
Out of scope: delegation, proxy voting, individual vote verification (see TD-06).
Success metric: 0 receipt constructions found; 100% of tallies independently reproducible.
Features: FE-017, FE-018, FE-019, FE-058
````

REPLACE WITH:

````
Out of scope: delegation, proxy voting, individual vote verification (see TD-06).
v1 / v2 posture (SRS v2.16.3 §16.1.1, §16.1.2, §16.3.1 — added at v2.4.0, ISS-10): the guarantees in
  this epic's outcome hypothesis are **Definition-B (v2)** commitments. FR-030 and FR-031 are classed
  DEFERRED-v2; FR-032 and FR-033 are classed PARTIAL, honesty flag Y. In a **Definition-A (v1)**
  deployment voting is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**, and FR-131
  clause (a) REQUIRES every vote-casting surface to say exactly that. **This epic MUST NOT be
  reported as satisfied by a v1 deployment.**
Success metric: **v2 (Definition B):** 0 receipt constructions found in the adversarial audit;
  0 re-vote distinguishers; 100% of tallies independently reproducible.
  **v1 (Definition A):** 100% of vote-casting surfaces carry the FR-131 clause (a) notice, verbatim
  and un-suppressible; 100% of tallies independently reproducible from the published tally-hash
  (US-0134); 0 surfaces using the words "private", "anonymous", "receipt-free" or "secure" of v1
  voting behaviour.
Features: FE-017, FE-018, FE-019, FE-058
````

---

## CH-10 — §4 EP-09: BR-017 up-trace and v1/v2 posture (ISS-09, ISS-10)

FIND:

````
Business value / link: BR-005, BR-008, BR-009
In scope: verifiable record emission, independent verifier, party history export, absence of
  operator override, jurisdiction-scoped display filtering with a public log, three-tier participation
  records (FR-082..FR-086, superseding FR-062), ballot-direction prohibition (FR-063), data
  classification (FR-106), append-only lifecycle (FR-107, FR-108), behavioural-analytics prohibition (FR-111).
Out of scope: content moderation of political speech; any deletion from the record.
Success metric: 0 privileged override paths at audit; 100% of filtering actions publicly logged.
Features: FE-025, FE-026, FE-029, FE-040, FE-051, FE-053
````

REPLACE WITH:

````
Business value / link: BR-005, BR-008, BR-009, BR-017
In scope: verifiable record emission, independent verifier, party history export, absence of
  operator override, jurisdiction-scoped display filtering with a public log, three-tier participation
  records (FR-082..FR-086, superseding FR-062), ballot-direction prohibition (FR-063), data
  classification (FR-106), append-only lifecycle (FR-107, FR-108), behavioural-analytics prohibition (FR-111).
Out of scope: content moderation of political speech; any deletion from the record.
v1 / v2 posture (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10): Supporter-tier unconditional
  anonymity (FR-082) and the tier-privacy guarantees of FE-040 are delivered in **v1** by application
  design, API contract and the FR-131 disclosure — **not** by cryptographic construction. The
  subpoena test (FR-128 / US-0140) is **not met in v1**: the operator database can be compelled to
  disclose member↔party mapping and vote direction. The un-disclosable form of these guarantees is a
  **Definition-B (v2)** commitment. Surfaces in this epic MUST carry the FR-131 disclosure rather
  than claim the v2 property.
Success metric: **v1 and v2:** 0 privileged override paths at audit; 100% of filtering actions
  publicly logged; 100% of tier-privacy surfaces carrying the FR-131 honesty notice.
  **v2 only:** 0 identity-to-member mappings producible under the subpoena test (US-0140).
Features: FE-025, FE-026, FE-029, FE-040, FE-051, FE-053
````

---

## CH-11 — §4 EP-11: in-scope gains the public treasury record (ISS-01/ISS-02)

FIND:

````
In scope: committees (deliberation without decisional power), proposal lifecycle enhancements, financial
  anomaly detection, COI disclosure and recusal, internal audit by sortition, dispute resolution with
  timelines, member rights charter, conduct votes, removal from role, expulsion (public tier only),
  transparency dashboard, performance scorecard.
````

REPLACE WITH:

````
In scope: committees (deliberation without decisional power), proposal lifecycle enhancements,
  **public itemised treasury record (FR-050, Must — added at v2.4.0)**, financial
  anomaly detection, COI disclosure and recusal, internal audit by sortition, dispute resolution with
  timelines, member rights charter, conduct votes, removal from role, expulsion (public tier only),
  transparency dashboard, performance scorecard.
````

---

## CH-12 — §4 EP-11: features line gains FE-062 (ISS-01)

FIND:

````
Features: FE-041, FE-045, FE-046, FE-047, FE-048, FE-049, FE-050, FE-052
Owner: Ingrid Bergqvist          Status: Backlog
````

REPLACE WITH:

````
Features: FE-041, FE-045, FE-046, FE-047, FE-048, FE-049, FE-050, FE-052, FE-062
Owner: Ingrid Bergqvist          Status: Backlog
````

---

## CH-13 — §4 EP-12: in-scope gains the attestor-plurality Charter guard (ISS-01)

FIND:

````
In scope: trust-anchor lifecycle governance (revocation, rotation), steward organisation (election,
  enumerated powers, prohibition, zero-dependency proof), three-tier amendment boundary, unconditional
  fork right (FR-120 design posture — fork flag still OFF above dev per §13).
````

REPLACE WITH:

````
In scope: trust-anchor lifecycle governance (revocation, rotation), steward organisation (election,
  enumerated powers, prohibition, zero-dependency proof), three-tier amendment boundary, unconditional
  fork right (FR-120 design posture — fork flag still OFF above dev per §13), **attestor/issuer
  plurality Charter guard — single-issuer operation un-extendable by configuration (FR-129, Must —
  added at v2.4.0)**.
````

---

## CH-14 — §5: FE-056 gains FR-129 and US-0141 (ISS-01)

FIND:

````
| FE-056 | Amendment boundary & unconditional fork right (EP-12) | Seven rules are fork-only; named absolutes need super-process; fork right is entrenched and always exercisable | FR-118, FR-119, FR-120 | US-0128–0130 | Rafael Duarte |
````

REPLACE WITH:

````
| FE-056 | Amendment boundary & unconditional fork right (EP-12) | Seven rules are fork-only; named absolutes need super-process; fork right is entrenched and always exercisable; a dated pilot compromise cannot quietly become the permanent design | FR-118, FR-119, FR-120, FR-129 | US-0128–0130, US-0141 | Rafael Duarte |
````

---

## CH-15 — §5: insert the four new feature rows FE-059..FE-062 (ISS-01)

INSERT AFTER:

````
| FE-058 | Ballot service seam (EP-06) | The signed ballot contract — cast, change, and tally exposed as a verifiable seam with honest pre-action notices and a deterministic tally-hash for audit publication | FR-131; BR-005 | US-0134 | Samuel Oyelaran |
````

INSERT THIS TEXT:

````
| FE-059 | Pilot jurisdiction sequence & adapter schedule (EP-01) | A citizen is only ever offered an enrolment rail their jurisdiction has actually reached; a deferred jurisdiction is told so plainly instead of failing silently | FR-121 | US-0135 | Marcus Adeyemi |
| FE-060 | Open-tier entry spam control (EP-01) | Spam control slows a suspicious signup down; it never becomes an admission condition — the non-invite door cannot be closed by any operator, and a flagged number is rate-limited, never hard-blocked | FR-125, FR-133 | US-0136–0137 | Grace Mbeki |
| FE-061 | On-device proof & nullifier-only identity posture (EP-01) | The credential is read and discarded on the phone, duplicates are caught by nullifier collision alone, and the platform holds nothing a court order could turn into a member list | FR-126, FR-127, FR-128 | US-0138–0140 | Dr. Lena Kowalczyk |
| FE-062 | Public treasury record (EP-11) | Every movement in and out of a party treasury is itemised, published and independently reproducible — financial transparency as a property of the record, not a claim by the party | FR-050 | US-0142 | Erik Lindqvist |
````

---

## CH-16 — §6 preamble: the link-provenance convention (ISS-06; my D-6/D-7/D-8)

FIND:

````
> Format per Doc 05 template §6. **Verified by** `TC-####` is assigned by the tester in Doc 07;
> `DES-###`/`SCR-##` are attached after Design. Points use a modified Fibonacci scale; the reference
> story is **US-0024 (join a party) = 3 points**.
> Every story carries at least one adversarial or negative scenario.
````

REPLACE WITH:

````
> Format per Doc 05 template §6: `Implements: FR-### · DES-### · SCR-##` and
> `Verified by: TC-####`. Points use a modified Fibonacci scale; the reference story is
> **US-0024 (join a party) = 3 points**. Every story carries at least one adversarial or negative
> scenario.
>
> **Link provenance (adopted at v2.4.0, ISS-06 — the "attached after Design" deferral has expired:
> SDD v2.11.2 and Doc 07 v2.4.4 are both Approved).**
> · `DES` — from **SDD v2.11.2 §5.2 / §15**, cross-checked against **Doc 08 v2.7.0 §3.1/§3.2**.
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

---

## CH-17 — US-0013: the contradictory parenthesis (ISS-12)

FIND:

````
Note: Status Partial — charter bounds validation (floor enforcement) and defaults application
  complete at protocol+service level (IS_INSECURE_MOCK=true; production store pending DES-097
  wiring). DoD not satisfied (RTM Should row now complete — see Doc 08 v2.2.4). TC: TC-3497
  (charter defaults), TC-3498 (additive tier floor). UT: UT-0076..0082 (protocol) — Doc 06
  v2.2.0 Approved.
````

REPLACE WITH:

````
Note: Status Partial — charter bounds validation (floor enforcement) and defaults application
  complete at protocol+service level (IS_INSECURE_MOCK=true; production store pending DES-097
  wiring). Two separate facts, stated separately (ISS-12 — the v2.3.0 wording asserted completion
  and non-completion of the same chain in one parenthesis): **(1) FR-012's Should row is COMPLETE**
  in the RTM (Doc 08 v2.7.0); **(2) the story itself does not meet the Definition of Done** —
  Doc 08 v2.7.0 §6 lists US-0013 among the Partial stories, because the production store is pending
  DES-097 wiring. TC: TC-3497 (charter defaults), TC-3498 (additive tier floor). UT: UT-0076..0082
  (protocol) — Doc 06 v2.2.0 Approved.
````

---

## CH-18 — US-0021: reconciled to RTM v2.7.0's DoD record (ISS-04)

FIND:

````
Note: Status Partial — expiry, immutable-archive, and re-petition cooldown logic complete at
  service level (IS_INSECURE_MOCK=true; production store pending DES-097 wiring). RTM Should row
  now complete (Doc 08 v2.2.4 — prior gap was cooldown untested; now covered). DoD not
  satisfied (production store pending). TC: TC-3499 (expiry→archive), TC-3500 (immutable archive
  mutation refused), TC-3501 (archivedAt determinism), TC-3502 (cooldown refusal), TC-3503
  (cooldown allows after window). UT: UT-0795..0801/UT-0817 (sdk) — Doc 06 v2.2.0 Approved.
````

REPLACE WITH:

````
Note: **Meets the Definition of Done** — Doc 08 **v2.7.0** §6 records "US-0021 newly meets DoD
  (v2.2.4) — FR-013's Should row closes and the full chain closes", and US-0021 sits inside the
  13-story DoD baseline on which the RTM's current figure of **17 of 142** is built. _(v2.3.0 said
  "DoD not satisfied (production store pending)"; corrected at v2.4.0, ISS-04. The RTM is the
  authority on DoD and this document mirrors it with the version pin above — see §11.)_ Expiry,
  immutable-archive and re-petition cooldown logic complete at service level. TC: TC-3499
  (expiry→archive), TC-3500 (immutable archive mutation refused), TC-3501 (archivedAt determinism),
  TC-3502 (cooldown refusal), TC-3503 (cooldown allows after window), TC-3539/TC-3540
  (TS-MEMBERSHIP expiry seam, Doc 07 v2.4.4). UT: UT-0795..0801/UT-0817 (sdk) — Doc 06 v2.2.0
  Approved.
````

---

## CH-19 — US-0023: state the absent TC rather than omitting the field (ISS-06)

FIND:

````
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-019 · DES-009 · SCR-09   Depends on: US-0022
````

REPLACE WITH:

````
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-019 · DES-009 · SCR-09   Verified by: none — no TC minted for FR-019 (Doc 07 v2.4.4; Doc 08 v2.7.0 §3.3); tester owed a TC at the next increment   Depends on: US-0022
````

---

## CH-20 — US-0131: DES-102 assigned and DoD met (ISS-04, ISS-07)

FIND:

````
SCR: SCR-06 (Petition browser & detail — wireframe screen 2.3; provisional)
Note: Status Partial — 100-member provisional cap enforcement and code-only lift via
  recordLegalRegistration() complete at service+UI layer (IS_INSECURE_MOCK=true; production store
  pending DES-097 wiring). Formal DES not yet assigned in Doc 03 §5.2 (G-TRACE persists; same
  recorded-phasing posture as FR-121..FR-129). DoD not satisfied (RTM row OPEN: G-TRACE + G-PHASE3).
  TC: TC-3511 (member 101 refused), TC-3512 (cap lifts on legal registration), TC-3513 (no other
  lift path), TC-3514 (cap boundary honest at UI), TC-3516 (BR-020 ProvisionalStatus disclosure).
  UT: UT-0802..0811 (sdk), UT-0852..0856 (web) — Doc 06 v2.2.0 Approved.
````

REPLACE WITH:

````
SCR: SCR-09 and SCR-11 per Doc 08 v2.7.0 §3.1 (carried in the Implements field above); SCR-06
  (Petition browser & detail — wireframe screen 2.3) is this document's own §7 provisional addition
  and is labelled as such, not an RTM link.
Note: **Meets the Definition of Done** — Doc 08 **v2.7.0** §6 (v2.4.0 DoD check): "US-0131 … now
  meets DoD: FR-130 closes at v2.4.0 … It moves from Status: Partial to done"; gap-log entry 125 is
  **RETIRED** and **DES-102 is assigned** to FR-130 (SDD v2.11.2 §5.2). Both v2.3.0 claims — "Formal
  DES not yet assigned" and "DoD not satisfied (RTM row OPEN)" — were stale; corrected at v2.4.0
  (ISS-04, ISS-07). 100-member provisional cap enforcement and code-only lift via
  recordLegalRegistration() complete at service+UI layer. TC: TC-3511 (member 101 refused), TC-3512
  (cap lifts on legal registration), TC-3513 (no other lift path), TC-3514 (cap boundary honest at
  UI), TC-3516 (BR-020 ProvisionalStatus disclosure), TC-3528/TC-3529 (TS-MEMBERSHIP, Doc 07
  v2.4.4). UT: UT-0802..0811 (sdk), UT-0852..0856 (web) — Doc 06 v2.2.0 Approved.
````

---

## CH-21 — US-0073: acceptance criteria rewritten to the EXPLICIT-LEAVE semantics (ISS-03)

FIND:

````
AC:
  Scenario: Switch parties voids old membership and resets tenure
    Given a member of party A who requests to join party B
    When the join request is processed
    Then membership in party A is voided, membership in party B takes effect, and the tenure clock resets to zero
  Scenario (adversarial): Simultaneous dual membership attempt
````

REPLACE WITH:

````
Note: **AC-1 rewritten at v2.4.0 (ISS-03).** The superseded wording — "Scenario: Switch parties
  voids old membership and resets tenure … Then membership in party A is voided" — specified
  **auto-void on join**, which the `FR-064-SEMANTICS` ruling (SRS **v2.15.0** ruling (a); Rathish,
  Human Approver, 2026-08-29) explicitly superseded. SRS v2.16.3 §8 `# FR-064` and §16.3.1 now make
  the v1 mechanism **explicit leave, then join**: a member MUST explicitly and on the record leave
  their current party before joining another; **automatic voidance is deferred to v2** (DES-065
  global membership-scope nullifier). The superseded wording is annotated here rather than deleted,
  per the house convention already used on US-0054 and US-0071. This also matches what was built —
  Doc 06 v2.3.x "one-active-party, leave-at-will, append-only history".
AC:
  Scenario: Join is refused while an active membership exists, naming the current party
    Given a member of party A who requests to join party B
    When the join request is processed
    Then the join is refused naming party A as the current membership, and membership in party A is
      unchanged
    And party A's membership is not voided, suspended or altered by the refused attempt
    And the tenure clock in party A is not reset by the refused attempt
  Scenario: Explicit recorded leave, then join, takes effect and resets tenure
    Given a member of party A who has explicitly left party A (a recorded action, FR-022)
    When they request to join party B
    Then membership in party B takes effect and the membership tenure clock resets to zero
    And both the leave and the join are recorded append-only in membership history
  Scenario (adversarial): Simultaneous dual membership attempt
````

---

## CH-22 — US-0087: DES-101 is assigned (ISS-07)

FIND:

````
Note: Status Partial — non-violence clause verbatim-check and absence/alteration refusal complete
  at protocol+service+UI layer (IS_INSECURE_MOCK=true; production store pending DES-097 wiring).
  Formal DES not yet assigned in Doc 03 §5.2 (G-TRACE persists; same recorded-phasing posture as
  FR-074..FR-111). DoD not satisfied (RTM row OPEN: G-TRACE + G-PHASE3). TC: TC-3508 (clause
  verbatim accepted), TC-3509 (absent/altered refused), TC-3510 (UI non-editable + verbatim
  submission). UT: UT-0071..0075 (protocol), UT-0786 (sdk), UT-0849..0851 (web) — Doc 06
  v2.2.0 Approved.
````

REPLACE WITH:

````
Note: Status Partial — non-violence clause verbatim-check and absence/alteration refusal complete
  at protocol+service+UI layer (IS_INSECURE_MOCK=true; production store pending DES-097 wiring).
  **DES-101 IS assigned** to FR-077 (SDD v2.11.2 §5.2) — the "Formal DES not yet assigned" note
  carried at v2.3.0 was stale; corrected at v2.4.0 (ISS-07). The story is Ready on its DES link and
  **does not yet meet DoD** — Doc 08 v2.7.0 §6 does not list US-0087 among the 17; the RTM row stays
  open on G-PHASE3. TC: TC-3508 (clause verbatim accepted), TC-3509 (absent/altered refused),
  TC-3510 (UI non-editable + verbatim submission), TC-3541 (TS-PARTY, Doc 07 v2.4.4). UT:
  UT-0071..0075 (protocol), UT-0786 (sdk), UT-0849..0851 (web) — Doc 06 v2.2.0 Approved.
````

---

## CH-23 — US-0089: DES-103 assigned and DoD met (ISS-04, ISS-07)

FIND:

````
Note: Not Ready pending DES — FR-079 has no DES assigned yet (Doc 03 §16 next-increment scope).
  Scenario: New member auto-assigned Supporter
````

> **Applier's note:** the two lines above are NOT adjacent in the file — do not use this as the
> anchor. Use the single-line anchor below instead; it occurs once, immediately after US-0089's
> `Owner:` line.

FIND (use this):

````
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-079 · **DES-103** · — (no UI clause)   Verified by: TC-3405, TC-3542   Depends on: US-0024
Note: Not Ready pending DES — FR-079 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-079 · **DES-103** · — (no UI clause)   Verified by: TC-3405, TC-3542   Depends on: US-0024
Note: **DES-103 IS assigned** to FR-079 (SDD v2.11.2 §5.2; the corresponding Doc 08 v2.7.0 §7
  gap-log entry is RETIRED at RTM v2.5.0) — the "no DES assigned" note carried at v2.3.0 was stale;
  corrected at v2.4.0 (ISS-07). **Meets the Definition of Done** — Doc 08 v2.7.0 §6 (v2.5.0 DoD
  check) records US-0089 and US-0100 as now meeting the bar, taking the total from 14 to 16
  (ISS-04). Verified by TC-3405 and TC-3542 (TS-PROPOSALS, Doc 07 v2.4.4).
````

---

## CH-24 — US-0090: DES-103 assigned and DoD met (ISS-04, ISS-07)

FIND:

````
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-080 · **DES-103** · SCR-15, SCR-12   Verified by: TC-3406, TC-3544, TC-3562, TC-3563   Depends on: US-0089
Note: Not Ready pending DES — FR-080 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-080 · **DES-103** · SCR-15, SCR-12   Verified by: TC-3406, TC-3544, TC-3562, TC-3563   Depends on: US-0089
Note: **DES-103 IS assigned** to FR-080 (SDD v2.11.2 §5.2 — DES-103 covers **both** FR-079 and
  FR-080; the review's "FR-079/FR-080 → DES-103/DES-104" shorthand is loose and §5.2 is the
  authority). The "no DES assigned" note carried at v2.3.0 was stale; corrected at v2.4.0 (ISS-07).
  **Meets the Definition of Done** — Doc 08 v2.7.0 §6: "US-0090 DOES, as of v2.5.1", taking the RTM
  total to **17** (ISS-04). Verified by TC-3406, TC-3544, TC-3562, TC-3563 (TS-PROPOSALS,
  Doc 07 v2.4.4).
````

---

## CH-25 — US-0091: the one story ISS-07 does NOT clear (ISS-07 correction)

FIND:

````
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-081 · none (G-TRACE)   Verified by: TC-3407   Depends on: US-0046, US-0090
Note: Not Ready pending DES — FR-081 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-081 · none (G-TRACE)   Verified by: TC-3407   Depends on: US-0046, US-0090
Note: **Not Ready pending DES — FR-081 genuinely still has none.** Doc 08 v2.7.0 §3.1 records
  FR-081's DES as `none` with a live G-TRACE chain, and SDD v2.11.2 §5.2 assigns DES-103 to FR-079
  and FR-080 **only**. US-0091 is therefore the one story in FE-039 that the v2.4.0 ISS-07 sweep
  does **not** clear — recorded explicitly so the exception is visible rather than assumed. It
  satisfies the Definition of Ready only after the architect assigns a DES.
````

---

## CH-26 — US-0100: DES-104 assigned and DoD met (ISS-04, ISS-07)

FIND:

````
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-090 · **DES-104** · SCR-12   Verified by: TC-3416, TC-3543, TC-3545, TC-3546, TC-3548–TC-3551   Depends on: US-0031, US-0090
Note: Not Ready pending DES — FR-090 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-090 · **DES-104** · SCR-12   Verified by: TC-3416, TC-3543, TC-3545, TC-3546, TC-3548–TC-3551   Depends on: US-0031, US-0090
Note: **DES-104 IS assigned** to FR-090 (SDD v2.11.2 §5.2) — the "no DES assigned" note carried at
  v2.3.0 was stale; corrected at v2.4.0 (ISS-07). **Meets the Definition of Done** — Doc 08 v2.7.0
  §6 (v2.5.0 DoD check) records US-0089 and US-0100 as now meeting the bar, total 14 → 16 (ISS-04).
  Verified by TC-3416, TC-3543, TC-3545, TC-3546, TC-3548–TC-3551 (TS-PROPOSALS, Doc 07 v2.4.4).
````

---

## CH-27 — US-0101: DES-105 assigned; TC-3555 double-assignment routed (ISS-07, ISS-05)

FIND:

````
Owner: Tomás Ferreira   Priority: Must   Points: 8   Implements: FR-091 · **DES-105** · SCR-12   Verified by: TC-3417, TC-3552–TC-3555   Depends on: US-0031
Note: Not Ready pending DES — FR-091 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Tomás Ferreira   Priority: Must   Points: 8   Implements: FR-091 · **DES-105** · SCR-12   Verified by: TC-3417, TC-3552–TC-3555   Depends on: US-0031
Note: **DES-105 IS assigned** to FR-091 (SDD v2.11.2 §5.2) — the "no DES assigned" note carried at
  v2.3.0 was stale; corrected at v2.4.0 (ISS-07). Ready on the DES link; **not yet at DoD** —
  Doc 08 v2.7.0 §6 does not list US-0101 among the 17. Verified by TC-3417 and TC-3552–TC-3555
  (TS-PROPOSALS, Doc 07 v2.4.4). **Routed to the tester:** TC-3555 is double-assigned — Doc 07
  v2.4.4 §5.6 heads TC-3552..TC-3555 as "FR-091 … US-0101" while Doc 08 v2.7.0 §3.1 also lists
  TC-3555 in FR-122's TC cell (US-0133). This document follows Doc 07's per-case register
  (TC-3555 → US-0101) per the §6 provenance rule.
````

---

## CH-28 — US-0102: DES-106 assigned (ISS-07)

FIND:

````
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-092 · **DES-106** · SCR-12   Verified by: TC-3418, TC-3559, TC-3560   Depends on: US-0101
Note: Not Ready pending DES — FR-092 has no DES assigned yet (Doc 03 §16 next-increment scope).
````

REPLACE WITH:

````
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-092 · **DES-106** · SCR-12   Verified by: TC-3418, TC-3559, TC-3560   Depends on: US-0101
Note: **DES-106 IS assigned** to FR-092 (SDD v2.11.2 §5.2) — the "no DES assigned" note carried at
  v2.3.0 was stale; corrected at v2.4.0 (ISS-07). Ready on the DES link; **not yet at DoD**
  (Doc 08 v2.7.0 §6). Verified by TC-3418, TC-3559, TC-3560 (TS-PROPOSALS, Doc 07 v2.4.4). Note
  that **DES-106 does NOT discharge FR-107** (SDD v2.11.2 §15) — US-0117 keeps its own live
  G-TRACE chain and its own "Not Ready pending DES" status.
````

---

## CH-29 — US-0038: v1/v2 posture (ISS-10)

FIND:

````
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 13   Implements: FR-030, NFR-001 · DES-023, DES-024, DES-004, DES-008 · SCR-13   Verified by: TC-0033, TC-1607, TC-1958–TC-1961, TC-1963, TC-2650   Depends on: US-0037
AC:
````

REPLACE WITH:

````
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 13   Implements: FR-030, NFR-001 · DES-023, DES-024, DES-004, DES-008 · SCR-13   Verified by: TC-0033, TC-1607, TC-1958–TC-1961, TC-1963, TC-2650   Depends on: US-0037
Note: **v1 / v2 (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10).** FR-030 is classed
  **`DEFERRED-v2`**, honesty flag Y. In a **Definition-A (v1)** deployment the ballot is **NOT**
  unlinkable to its voter — the operator database can associate a ballot with its caster — and
  **FR-131 clause (a) REQUIRES the vote-casting surface to state plainly that voting is not
  anonymous, not receipt-free and not coercion-resistant** (US-0134 delivers the notice). The AC
  below states the **Definition-B (v2)** target. **This story MUST NOT be reported as satisfied by a
  v1 deployment.**
AC:
````

---

## CH-30 — US-0041: v1/v2 posture (ISS-10)

FIND:

````
Owner: Aisha Nkemdirim   Priority: Must   Points: 13   Implements: FR-031, NFR-003 · DES-023, DES-024, DES-063 · SCR-13   Verified by: TC-2610–TC-2612, TC-2614   Depends on: US-0038
AC:
````

REPLACE WITH:

````
Owner: Aisha Nkemdirim   Priority: Must   Points: 13   Implements: FR-031, NFR-003 · DES-023, DES-024, DES-063 · SCR-13   Verified by: TC-2610–TC-2612, TC-2614   Depends on: US-0038
Note: **v1 / v2 (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10).** FR-031 is classed
  **`DEFERRED-v2`**, honesty flag Y. Receipt-freeness is a **Definition-B (v2)** guarantee: in v1 a
  voter CAN be shown, and can show, how they voted, and the FR-131 clause (a) notice says so. The AC
  below is the v2 target and **MUST NOT be reported as satisfied by a v1 deployment**.
AC:
````

---

## CH-31 — US-0042: v1/v2 posture (ISS-10)

FIND:

````
Owner: Aisha Nkemdirim   Priority: Must   Points: 13   Implements: FR-032 · DES-023, DES-063 · SCR-13   Verified by: TC-1039, TC-2611, TC-2613   Depends on: US-0041
AC:
````

REPLACE WITH:

````
Owner: Aisha Nkemdirim   Priority: Must   Points: 13   Implements: FR-032 · DES-023, DES-063 · SCR-13   Verified by: TC-1039, TC-2611, TC-2613   Depends on: US-0041
Note: **v1 / v2 (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10).** FR-032 is classed **`PARTIAL`**,
  honesty flag Y. In **v1** the *last-ballot-counts* behaviour is delivered by application logic
  (US-0134, IBallotService); the **invisibility** of the override to an adversary holding operator
  logs is a **Definition-B (v2)** guarantee and is NOT true in v1. The FR-131 clause (a) notice
  states that voting is not coercion-resistant. The second AC scenario below is the v2 target.
AC:
````

---

## CH-32 — US-0044: v1/v2 posture (ISS-10)

FIND:

````
Owner: Erik Lindqvist   Priority: Must   Points: 8   Implements: FR-033 · DES-025 · SCR-14   Verified by: TC-0024, TC-2482   Depends on: US-0038
AC:
````

REPLACE WITH:

````
Owner: Erik Lindqvist   Priority: Must   Points: 8   Implements: FR-033 · DES-025 · SCR-14   Verified by: TC-0024, TC-2482   Depends on: US-0038
Note: **v1 / v2 (SRS v2.16.3 §16.3.1 — added at v2.4.0, ISS-10).** FR-033 is classed **`PARTIAL`**.
  **v1:** the tally is reproducible from the published canonical ballot state and its deterministic
  tally-hash (US-0134), and reproduction is real — but the ballot state a v1 reproducer works from is
  not anonymised, so "they learn no individual vote in the process" is a **Definition-B (v2)**
  property, not a v1 one. The FR-131 clause (a) notice carries the difference at the surface.
AC:
````

---

## CH-33 — US-0134: the false "no TC minted" note (ISS-05)

FIND:

````
Note: Status Partial — IBallotService interface + conventional stub built and tested
  (UT-0770..UT-0779 within the UT-0760..0779 seam range, Doc 06 v2.0.1 §3); IS_INSECURE_MOCK=true
  while stub-backed. Audit-contract wiring (tally-hash publication endpoint) is owed. TC: OPEN —
  no TC-#### minted yet. RTM row not yet complete; DoD not satisfied. BR-005 (ballot accessible to
  every eligible citizen) is upstream rationale.
````

REPLACE WITH:

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

---

## CH-34 — US-0133: the false "no TC minted" note (ISS-05)

FIND:

````
  account-creation call sites throw on incorrect COUNTING_ACTION invocation as asserted by seam
  tests. TC: OPEN — no TC-#### minted yet. RTM row not yet complete; DoD not satisfied.
````

REPLACE WITH:

````
  account-creation call sites throw on incorrect COUNTING_ACTION invocation as asserted by seam
  tests. **TC is NOT open** — the v2.3.0 claim "no TC-#### minted yet" was false (ISS-05): Doc 07
  **v2.4.4** §5.3 `TS-SCAFFOLD` heads **TC-3477..TC-3481** to this story, and TC-3520,
  TC-3530..TC-3534 (TS-MEMBERSHIP) and TC-3556..TC-3558 (TS-PROPOSALS) exercise the same seam.
  **TC-3481** (FR-131 clause (d) notice) is **Blocked** for the SCR-13/SCR-14 ballot surfaces —
  partially delivered at the parties-directory surface via TC-3534. RTM row not yet complete; DoD
  not satisfied (Doc 08 v2.7.0 §6).
````

---

## CH-35 — US-0132: the false "no TC minted" note (ISS-05)

FIND:

````
  TC: OPEN — no TC-#### minted yet; tester to add full-stack scenario coverage. RTM row not yet
  complete; DoD not satisfied.
````

REPLACE WITH:

````
  **TC is NOT open** — the v2.3.0 claim "no TC-#### minted yet" was false (ISS-05): Doc 07 **v2.4.4**
  §5.3 `TS-SCAFFOLD` heads **TC-3470..TC-3476 and TC-3488** to this story, most carrying
  **Pass (obs.)** evidence dated 2026-08-25. **TC-3476** (enrolment disclosure affordance) is
  **Blocked**, which is exactly the clause-8 affordance owed above. Full-stack scenario coverage
  beyond the seam remains owed to the tester. RTM row not yet complete; DoD not satisfied
  (Doc 08 v2.7.0 §6).
````

---

## CH-36 — Insert six new EP-01 stories: US-0135..US-0140 (ISS-01)

INSERT AFTER (this is the tail of the US-0133 block, including its closing fence):

````
    Then a configuration error is thrown at startup; account creation must never be routed through
      a counting gate (FR-132 — government-ID check gates counting, never joining)
```
````

INSERT THIS TEXT:

`````
```
US-0135  Enrol through the adapter my jurisdiction has actually reached      (FE-059 · EP-01)
As a citizen in the pilot jurisdiction, I want enrolment adapters deployed in a published,
technical-readiness-ordered sequence, so that I am never offered a rail that cannot yet prove what it
claims, and a deferred jurisdiction is told so plainly.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-121 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0080
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 119 records FR-121 as G-TRACE + G-PHASE3 ("no DES assigned — Doc 03 §16
  next-increment phasing"), owner Marcus Adeyemi, closing at "Design next increment". Hard
  dependency: **CON-015 MUST be satisfied before the Phase-1 adapter is marked
  implementation-ready** (SRS v2.16.3 §4.40).
AC:
  Scenario: Phase-1 India / Aadhaar offline paperless KYC enrols
    Given the Phase-1 India pilot with the FR-070 class (c) offline paper KYC adapter deployed
    When a citizen presents a valid Aadhaar offline XML credential
    Then the adapter verifies the government-signed document, derives the enrolment nullifier
      on-device per FR-126, and completes enrolment per FR-069
    And all four FR-069 universal in-circuit checks pass and no credential data is transmitted
  Scenario (negative): USA mDL credential presented while Phase 3 is deferred
    Given a USA mobile-driver's-licence credential presented to the Phase-1 enrolment system
    When the adapter checks the credential class and jurisdiction configuration
    Then the enrolment is refused because the Phase-3 USA adapter is not live
    And the refusal names the deferred Phase-3 status and exposes no identity data from the credential
  Scenario (adversarial): Phase-1 adapter marked ready before CON-015 clears
    Given CON-015 (the India legal opinion) is not recorded as satisfied
    When any actor attempts to mark the Phase-1 adapter implementation-ready
    Then the attempt is refused and the unmet CON-015 dependency is named
```
```
US-0136  Join without an invite, always      (FE-060 · EP-01)
As a citizen who knows nobody on the platform, I want a non-invite door that is permanently open,
so that spam control never becomes an admission condition and no one can shut me out by holding
back a referral.
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-125 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0024
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 120 (G-TRACE + G-PHASE3), owner Grace Mbeki. OI-19 was RESOLVED at SRS
  v2.4.0, so the requirement is finalised, not draft. FR-020 (join without asking anyone) stays
  absolute and unamended.
AC:
  Scenario: Determined person with no invite reaches full counted membership (the separating test)
    Given a citizen who holds no referral token from any existing participant
    When they register through the non-invite fallback path and continue to counted membership
    Then the fallback is available and open, may be slower or higher-friction, and charges no fee
    And they complete enrolment (FR-069 nullifier minted) and gain FR-123 counted-action eligibility
  Scenario: Invite fast path verifies the referral edge and then discards it
    Given open-tier registration with invite-gating enabled for spam control
    When a new citizen submits a valid referral token
    Then the token is verified for authenticity and the referral edge is discarded immediately
    And no referral relationship, referrer identity or token is retrievable from any store, log,
      cache or export after the gate-check completes
  Scenario (adversarial): Operator attempts to close the non-invite fallback
    Given an operator who configures the platform so the non-invite fallback is disabled, closed
      or redirected to a dead end
    When the configuration is applied
    Then the system rejects it; the fallback cannot be closed by any operator configuration,
      deployment flag or default; only the Charter-layer amendment process (FR-129) can change this
  Scenario (negative): Refusal for lack of an invite
    When any registration or membership path refuses a person because they hold no invite token
    Then no such refusal exists; FR-020 is absolute and unamended
```
```
US-0137  Be rate-limited, never shut out, when my number looks unusual      (FE-060 · EP-01)
As a legitimate citizen using a VoIP number or an eSIM, I want spam-resistance signals to slow me
down rather than exclude me, so that an anti-fraud heuristic can never disenfranchise a real person.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-133 · DES-099 · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4; Doc 08 v2.7.0 §3.1 records "no US or TC yet"); tester owed a TC   Depends on: US-0136
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). **DES-099 IS
  assigned** (SDD v2.11.2 §15, from v2.4.1), so Doc 08 v2.7.0 §7 entry 126 is G-PHASE3 only — this
  story is **Ready on the DES link** and open on implementation and test. The scope asymmetry is
  normative: flag-don't-block governs the **spam layer only**; the FR-132 §(b) government-ID check
  is a hard gate on FR-123 counting actions and is **NOT** subject to it.
AC:
  Scenario: Flagged number is rate-limited, not hard-blocked
    Given a v1 deployment and an enrolment attempt with a number flagged as VoIP or virtual
    When the spam-resistance layer processes the request
    Then the enrolment is rate-limited or queued for additional verification, is not hard-blocked,
      and the response never states a permanent denial based on the flag
  Scenario: Flagged legitimate user completes every primary flow
    Given a member whose number triggered a flag but whose enrolment completed
    When they attempt to join a party, sign a petition or cast a vote
    Then every governance action is available subject only to rate-limiting
    And no governance action is denied solely on the basis of the flag
  Scenario (negative): Flag events on a public or governance-path surface
    When the public verifiable record, any governance-path surface and any member-facing data
      are inspected
    Then zero flag events, VoIP indicators, device scores or spam-resistance signals appear
  Scenario (adversarial): Hard-block path sought
    When any v1 code path is tested for a route that permanently denies a flagged number
    Then no such path exists; every flagged number is rate-limited or queued
```
```
US-0138  Have my credential read only on my own device      (FE-061 · EP-01)
As a citizen enrolling, I want the raw credential to be read and proven on my phone and then
discarded, so that nothing the platform receives could ever identify me.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-126 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0079
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 121 (G-TRACE + G-PHASE3): "on-device credential-processing boundary not
  separately designed (ADR-017 covers the prover concept; a formal DES is owed)", owner
  Dr. Lena Kowalczyk. **v1 / v2:** SRS v2.16.3 §16.3.1 classes FR-126 `PARTIAL` — v1 enforces the
  discard by app design and API contract; v2 by cryptographic construction.
AC:
  Scenario: Raw credential discarded on-device before anything leaves the phone
    Given a citizen enrolling with an Aadhaar offline XML credential
    When the on-device prover generates the ZK proof and derives the enrolment nullifier
    Then the raw XML, the stable identifier and all intermediate material are discarded on-device
      before any data leaves the device
  Scenario (adversarial): Full network interception
    Given an adversary intercepting all traffic during and after enrolment
    When the captured traffic is fully inspected
    Then only the ZK proof and the derived nullifier are present; no Aadhaar XML, eIDAS attribute,
      ICAO chip datum, mDL datum or stable identifier appears in any payload
  Scenario (negative): Credential material anywhere in the estate
    When every store, log, cache, queue and backup is inspected during and after enrolment
    Then no raw credential material is present in any form; only the derived nullifier appears
```
```
US-0139  Be de-duplicated by mathematics, never by comparing me to a record      (FE-061 · EP-01)
As a citizen, I want duplicate enrolment caught only by nullifier collision, so that no name,
face or document number is ever compared to detect me.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-127 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0079, US-0138
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 122 (G-TRACE + G-PHASE3): the nullifier-collision-only posture is
  recorded as normative (ADR-017 / C-03) but a formal DES is owed.
AC:
  Scenario: Second enrolment with the same credential collides and is rejected
    Given a person who has already enrolled and whose nullifier N exists on the verifiable record
    When they attempt a second enrolment with the same physical credential
    Then the same deterministic nullifier N is derived on-device, the collision is detected against
      the existing record, and the enrolment is rejected as a duplicate
  Scenario (negative): Any identity-comparison path in duplicate detection
    When every duplicate-detection code path is inspected
    Then no name-matching, biometric comparison, document-number lookup, administrative review or
      identity-record comparison exists in any path under any configuration
  Scenario (adversarial): Operator configures a fallback identity match
    When an operator attempts to enable an identity-record comparison as a duplicate-detection
      fallback
    Then no such capability exists and the attempt is refused and logged
```
```
US-0140  Be un-disclosable, not merely undisclosed      (FE-061 · EP-01)
As a member of a political party, I want the platform to be technically unable to say who belongs
to it, so that a court order cannot do what a promise merely declines to do.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-128 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0138, US-0139
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 123 (G-TRACE + G-PHASE3); a formal DES is owed.
  **v1 honesty (SRS v2.16.3 §16.3.1, honesty flag Y): the subpoena test is NOT met in v1** — the
  operator database can be compelled to disclose member↔party mapping and vote direction, and
  FR-131 carries that disclosure. The guarantee is a **Definition-B (v2)** commitment and this
  story **MUST NOT** be reported as satisfied by a v1 deployment.
AC:
  Scenario (adversarial): The subpoena test
    Given a court order requiring disclosure of who belongs to a named political party
    When a technically capable actor with full platform access attempts to comply
    Then the platform is technically unable to produce any identity-to-member mapping, and no such
      mapping can be assembled from any combination of stored data
  Scenario (negative): Reversible identity data anywhere
    When the complete data inventory of every store, cache, log, queue, backup and ephemeral store
      is inspected
    Then zero identity documents, raw stable identifiers, biometric templates, date-of-birth or
      address fields — and nothing from which a stable identifier could be recovered — are present,
      in plaintext or encrypted form
  Scenario (adversarial): Encrypted-but-decryptable identity store proposed
    Given a configuration that stores identity data in encrypted form
    When the subpoena test is applied to it
    Then that configuration FAILS the test and is rejected, because a decryptable store can be
      produced under legal compulsion
  Scenario: v1 posture is disclosed rather than overclaimed
    Given a Definition-A (v1) deployment
    When any surface describes what the platform can and cannot see
    Then it states plainly that v1 does not meet the subpoena test (FR-131), and it does not use
      "private", "anonymous", "receipt-free" or "secure" of v1 behaviour
```
`````

---

## CH-37 — US-0056: state the absent TC rather than omitting the field (ISS-06)

FIND:

````
Owner: Erik Lindqvist   Priority: Should   Points: 8   Implements: FR-048 · DES-032 · SCR-17   Depends on: US-0053
````

REPLACE WITH:

````
Owner: Erik Lindqvist   Priority: Should   Points: 8   Implements: FR-048 · DES-032 · SCR-17   Verified by: none — no TC minted for FR-048 (Doc 07 v2.4.4; Doc 08 v2.7.0 §3.3); tester owed a TC at the next increment   Depends on: US-0053
````

---

## CH-38 — Insert US-0142 at the end of EP-11 (ISS-01, ISS-02)

INSERT AFTER (tail of the US-0120 block, including its closing fence):

````
    Then no editorial conclusion, grade, recommendation or qualitative rating is present;
      the scorecard presents facts and lets viewers conclude
```
````

INSERT THIS TEXT:

`````
```
US-0142  Follow every movement in and out of a party treasury      (FE-062 · EP-11)
As a member or auditor, I want every treasury inflow and outflow published as an itemised,
independently verifiable record, so that financial transparency is a property of the record
rather than a claim by the party.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-050 · DES-033 · none (RTM records no SCR)   Verified by: none — Doc 08 v2.7.0 §3.3 records no TC for FR-050; tester owed a TC at the next increment   Depends on: US-0061
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01/ISS-02). **FR-050 is
  Must**, not Should: SRS v2.16.3 §11 carries 050 in the Must row and states "FR-050 is raised from
  Should to Must (financial transparency is now a business requirement, BR-019)". **DES-033**
  (treasury caps + ledger) is assigned in SDD v2.11.2 §5.2, so this story is **Ready on its DES
  link** and open on implementation and test. Upstream of FR-096 (US-0106), which runs anomaly
  detection over this record. **Routed to the tester:** Doc 08 v2.7.0 §3.3 still classes FR-050 as
  Should and lists it under non-Must rows — that row MUST move to §3.1 as a gating Must row.
AC:
  Scenario: Every movement is published itemised and reproducible
    Given any treasury inflow or outflow for an active party
    When the event completes
    Then an itemised, publicly readable, independently verifiable record is published for it
    And any third party can reproduce the treasury state from the public record alone
  Scenario (negative): Unpublished or aggregated-away movement
    Given a treasury movement that is recorded internally but not published
    When the public treasury record is reconciled against the internal ledger
    Then the discrepancy is detectable by any third party
  Scenario (adversarial): Party or operator attempts to redact a published entry
    When any actor attempts to edit, delete or suppress a published treasury entry
    Then no such capability exists and the attempt is refused and logged
```
`````

---

## CH-39 — Insert US-0141 at the end of EP-12 (ISS-01)

INSERT AFTER (tail of the US-0130 block, including its closing fence):

````
  Scenario: Steward action cannot limit fork right
    Given a steward body that attempts to restrict or condition the fork right
    When the attempt is made
    Then no such steward capability exists; the fork right is available regardless of steward action
```
````

INSERT THIS TEXT:

`````
```
US-0141  Keep single-issuer operation temporary by construction      (FE-056 · EP-12)
As any enrolled citizen, I want the Phase-1 single-rail limitation to be un-extendable by a
configuration flag, so that a dated pilot compromise cannot quietly become the permanent design.
Owner: Marcus Adeyemi   Priority: Must   Points: 3   Implements: FR-129 · none (G-TRACE) · none (RTM records no SCR)   Verified by: none — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment   Depends on: US-0128, US-0135
Note: Minted at v2.4.0 to close an undeclared **Must** coverage gap (ISS-01). Not Ready pending DES
  — Doc 08 v2.7.0 §7 entry 124 (G-TRACE + G-PHASE3). **Which amendment tier governs (FR-118 Tier 1
  or FR-119 Tier 2) is deliberately unanswered and MUST NOT be assumed** — SRS v2.16.3 §4.43 owes
  that determination to the architect at the next Doc 03 increment. What is normative regardless of
  tier is tested below.
AC:
  Scenario (adversarial): Configuration flag attempts to extend the single-rail deployment
    Given an operator or maintainer who applies a configuration flag, environment variable or
      deployment default to extend Phase-1 single-rail operation beyond its published dated scope
    When the configuration is applied
    Then the system rejects it; no deployment flag or default may make single-issuer operation
      permanent or extend it
  Scenario: Only the Charter-layer amendment path can change the scope
    Given a Charter-layer amendment that has re-entered through Gate 1 and Gate 2 per CLAUDE.md,
      whose approved scope includes modifying the Phase-1 issuer-plurality limitation
    When the amendment is applied
    Then the issuer-plurality scope restriction may be extended or modified per that outcome
  Scenario (negative): Phase-1 limitation presented as permanent
    When any surface or configuration describes the single-rail deployment
    Then it is presented as a dated Phase-1 pilot limitation with Phase 2 (eIDAS 2.0) as the exit
      condition, and the accepted exclusion (a person without Aadhaar cannot enrol in the pilot
      region) is stated rather than hidden
```
`````

---

## CH-40 — §7 preamble: where screen DES mapping lives, and the SCR-22/23 correction (ISS-11)

FIND:

````
> **Provisional and non-binding.** The architect confirms, splits or merges these in Doc 03; the
> tester reconciles the final `SCR` links in the RTM (Doc 08). Every surface must satisfy `NFR-011`,
> `NFR-012`, `NFR-013` and `NFR-023`, and must define empty, loading, offline, sponsorship-queued,
> error and success states.
````

REPLACE WITH:

````
> **Provisional and non-binding.** The architect confirms, splits or merges these in Doc 03; the
> tester reconciles the final `SCR` links in the RTM (Doc 08). Every surface must satisfy `NFR-011`,
> `NFR-012`, `NFR-013` and `NFR-023`, and must define empty, loading, offline, sponsorship-queued,
> error and success states.
>
> **`DES` mapping for screens is deliberately not duplicated here** _(ISS-11)_: **SDD v2.11.2 §15**
> maps design elements to these screens and is the authority; this table carries the `FR`/`NFR`
> up-trace only, and the `Implements` column heading is read accordingly.
>
> **Corrected at v2.4.0 — SCR-22 and SCR-23 were inverted.** Two Approved documents agree against
> the v2.3.0 rows: SDD v2.11.2 §5.2 states "SCR-22 = Debate scheduling and attendance surface
> (FR-066, FR-067); SCR-23 = Candidate feedback voting surface (FR-065)", and Doc 08 v2.7.0 §3.1
> records FR-065→SCR-23 and FR-066/FR-067→SCR-22. The rows below now match, and §6 assigns
> **SCR-23** to US-0074/US-0075 and **SCR-22** to US-0076/US-0077. The rest of the table was
> reconciled to the §6 link mapping in the same pass.
````

---

## CH-41 — §7 rows SCR-04 … SCR-15 reconciled to the §6 mapping (ISS-11)

FIND:

````
| SCR-04 | Party draft editor (eight pillars) | FE-005, FE-006 | FR-010, FR-011, FR-012 |
| SCR-05 | Publish check & deficiency report | FE-006 | FR-011 |
| SCR-06 | Petition browser & detail | FE-007 | FR-014, FR-017 |
| SCR-07 | Endorse / withdraw | FE-007 | FR-014, FR-015 |
| SCR-08 | Threshold & denominator explainer | FE-008 | FR-009, FR-016 |
| SCR-09 | Activation record | FE-009 | FR-018 |
| SCR-10 | Party home & aggregate membership | FE-010 | FR-020 |
| SCR-11 | Join / leave (single-party enforcement) | FE-010, FE-030 | FR-020, FR-022, FR-064 |
| SCR-12 | Proposal list & detail (tier, quorum, timelock) | FE-013, FE-014, FE-015 | FR-024, FR-025, FR-026, FR-027 |
| SCR-13 | Ballot booth (cast / re-cast) | FE-017, FE-018 | FR-030, FR-031, FR-032 |
| SCR-14 | Result & verify-it-yourself | FE-019 | FR-033, FR-055 |
| SCR-15 | Nomination & disclosure consent | FE-020, FE-021 | FR-036, FR-037, FR-038 |
````

REPLACE WITH:

````
| SCR-04 | Party draft editor (eight pillars) | FE-005, FE-006, FE-038 | FR-010, FR-011, FR-012, FR-077 |
| SCR-05 | Publish check & deficiency report | FE-006, FE-038 | FR-011, FR-077 |
| SCR-06 | Petition browser & detail | FE-007, FE-008, FE-009 | FR-013, FR-014, FR-017, FR-130 (§7 prov.) |
| SCR-07 | Endorse / withdraw | FE-007 | FR-014, FR-015 |
| SCR-08 | Threshold & denominator explainer | FE-008 | FR-009, FR-016 |
| SCR-09 | Activation record | FE-009 | FR-018, FR-130 |
| SCR-10 | Party home & aggregate membership | FE-010 | FR-020 |
| SCR-11 | Join / leave (single-party enforcement) | FE-009, FE-010, FE-030 | FR-020, FR-022, FR-064, FR-130 |
| SCR-12 | Proposal list & detail (tier, quorum, timelock) | FE-013, FE-014, FE-015, FE-039, FE-041, FE-042 | FR-024, FR-025, FR-026, FR-027, FR-080, FR-090, FR-091, FR-092 |
| SCR-13 | Ballot booth (cast / re-cast) | FE-017, FE-018, FE-058 | FR-030, FR-031, FR-032, FR-131 |
| SCR-14 | Result & verify-it-yourself | FE-019, FE-058 | FR-033, FR-055, FR-131 |
| SCR-15 | Nomination & disclosure consent | FE-020, FE-021, FE-039 | FR-036, FR-037, FR-038, FR-080 |
````

---

## CH-42 — §7 rows SCR-22 / SCR-23 un-inverted (ISS-11; my F-1)

FIND:

````
| SCR-22 | Candidate feedback widget | FE-031 | FR-065 |
| SCR-23 | Debate schedule, attendance & post-debate vote | FE-032 | FR-066, FR-067 |
````

REPLACE WITH:

````
| SCR-22 | Debate schedule, attendance & post-debate vote | FE-032 | FR-066, FR-067 |
| SCR-23 | Candidate feedback widget | FE-031 | FR-065 |
````

---

## CH-43 — §9: totals (ISS-01)

FIND:

````
**Total (v2.2.0): 134 stories, approximately 836 points** (v1.1.1 was 83 stories at approximately 499 points; 47 new stories from the v2.0.0 Gate-1-re-entry catch-up add approximately 313 points at preliminary estimates; v2.1.0 adds US-0131 — 3 points; v2.2.0 adds US-0132 — 5 points, US-0133 — 8 points, US-0134 — 8 points: +21 points). _(ISS-07: v1.0.0 base corrected to actual point sum; total revised accordingly; v2.0.0 total subject to revision after Doc 03 is published and DES links assigned.)_
````

REPLACE WITH:

````
**Total (v2.4.0): 142 stories, approximately 880 points** (v1.1.1 was 83 stories at approximately 499 points; 47 new stories from the v2.0.0 Gate-1-re-entry catch-up add approximately 313 points at preliminary estimates; v2.1.0 adds US-0131 — 3 points; v2.2.0 adds US-0132 — 5 points, US-0133 — 8 points, US-0134 — 8 points: +21 points; **v2.4.0 adds the eight Must-coverage stories on the US-0024 = 3 reference scale — US-0135 5, US-0136 5, US-0137 5, US-0138 8, US-0139 5, US-0140 8, US-0141 3, US-0142 5: +44 points**). _(ISS-07: v1.0.0 base corrected to actual point sum; total revised accordingly; v2.0.0 total subject to revision after Doc 03 is published and DES links assigned. The six v2.4.0 stories that are "Not Ready pending DES" are estimated pessimistically for the same reason.)_
````

---

## CH-44 — §11: the DoD authority convention (ISS-04, ISS-06; my D-6/D-7/D-8)

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

> **Authority convention (adopted at v2.4.0 — ISS-04, ISS-06).** The **RTM (Doc 08) is the authority
> on the Definition of Done**; this backlog only *mirrors* it, and every place it does MUST carry an
> explicit version pin so the drift becomes visible on the next RTM bump. **The pin in force is
> Doc 08 v2.7.0**, which records **17 stories meeting DoD** (17 of 134 when written; the eight
> stories minted at v2.4.0 are all short of DoD, so the numerator is unchanged and the denominator
> is now 142). Where Doc 05 and the RTM disagree, the RTM wins and Doc 05 is the defect.
> **Doc 07 v2.4.4 is the authority on which `TC` belongs to which `US`** wherever its §5.x case
> register carries a per-story heading; the RTM's per-FR `TC` cell is used only where Doc 07 does
> not. **`SCR`** comes from RTM §3.1/§3.2 where that table carries one; RTM §3.3 (Should/Could) has
> no `SCR` column, so for those stories the `SCR` is this document's §7 provisional inventory and is
> marked `(§7 prov.)`. **`DES: none` and `SCR: none` are positive statements that the Approved
> sources record none — never blanks, and never invented to close a chain on paper.**
````

---

## CH-45 — §12: the whole traceability section, corrected

> This is one contiguous replacement covering ISS-01, ISS-02, ISS-04, ISS-05, ISS-07 and ISS-13.
> It is larger than the other anchors because the section's assertions are interdependent; the
> `FIND` is the section's opening three lines, then five smaller anchors follow (CH-45a … CH-45f).

### CH-45a — §12 lead, Must-FR assertion, Must-NFR pin (ISS-01, ISS-08, ISS-13)

FIND:

````
Coverage assertion at v2.0.0 — to be independently verified by the tester in the RTM (Doc 08):

- **All 101 Must FRs** in Doc 02 v2.2.0 are implemented by at least one story.
- **Must-NFR → story/NF-item coverage map** (24 Must NFRs as of v2.2.0; ISS-01 base + v2.0.0 additions):
````

REPLACE WITH:

````
Coverage assertion at **v2.4.0** — to be independently verified by the tester in the RTM (Doc 08).
_(ISS-13: advance this label with the document version on every bump — the same maintenance rule
SRS §11 applies to its Counts heading. It was frozen at v2.0.0 through four versions.)_

- **All 114 Must FRs** in Doc 02 (**SRS v2.16.3 §11**, Approved 2026-08-30) are implemented by at
  least one story, as of v2.4.0. _(ISS-01: this line read "All 101 Must FRs in Doc 02 v2.2.0" from
  v2.0.0 to v2.3.0. The population was 114, not 101, and eight Must FRs — FR-050, FR-121, FR-125,
  FR-126, FR-127, FR-128, FR-129, FR-133 — had no story anywhere in this document and were not
  declared as gaps, so the true figure at v2.3.0 was **106 of 114**. RTM v2.7.0 §7 gap-log entries
  119–126 corroborate each one. The eight stories minted at v2.4.0 (see the v2.4.0 additions bullet
  below) close all eight chains at this document; the RTM must still verify them downstream.)_
- **Must-NFR → story/NF-item coverage map** (24 Must NFRs; re-confirmed at v2.4.0 against SRS
  v2.16.3 §8, which records Gherkin on 24 of 24 Must NFRs):
````

### CH-45b — §12 v2.1.0 addition bullet (ISS-04, ISS-07)

FIND:

````
- **v2.1.0 addition (C-02 ruling, Rathish, 2026-08-22):** FR-130→US-0131. DES owed (same recorded-phasing posture as FR-121..FR-129). v2.3.0 update: US-0131 Status Partial — implementation exists (Doc 06 v2.2.0); TC-3511..TC-3516 minted (Doc 07 v2.2.2); RTM row OPEN (G-TRACE + G-PHASE3).
````

REPLACE WITH:

````
- **v2.1.0 addition (C-02 ruling, Rathish, 2026-08-22):** FR-130→US-0131. **v2.4.0 correction (ISS-04, ISS-07):** the "DES owed" and "RTM row OPEN" claims are superseded — **DES-102 is assigned** to FR-130 (SDD v2.11.2 §5.2), Doc 08 v2.7.0 §7 entry **125 is RETIRED**, and Doc 08 v2.7.0 §6 records US-0131 as **meeting the Definition of Done** at RTM v2.4.0 ("it moves from Status: Partial to done"). Implementation exists (Doc 06 v2.2.0); TC-3511..TC-3516 (Doc 07 v2.2.2) plus TC-3528/TC-3529 (TS-MEMBERSHIP, Doc 07 v2.4.4).
````

### CH-45c — §12 v2.2.0 additions closing lines (ISS-05)

FIND:

````
  All three stories Status: Partial — built and tested; RTM rows OPEN; DoD not satisfied.
  TC: OPEN — no TC-#### minted for US-0132..0134.
````

REPLACE WITH:

````
  All three stories Status: Partial — built and tested; RTM rows OPEN; DoD not satisfied
  (Doc 08 v2.7.0 §6). **TC is NOT open** — corrected at v2.4.0 (ISS-05): Doc 07 **v2.4.4** §5.3
  `TS-SCAFFOLD` carries **TC-3470..TC-3488** for exactly these three stories — 19 cases, 16 with
  **Pass (obs.)** evidence dated 2026-08-25, 3 **Blocked** (TC-3476 enrolment disclosure affordance,
  TC-3481 FR-131 clause (d) notice for the SCR-13/SCR-14 ballot surfaces, TC-3487 audit-contract
  publication). Per-story split: US-0132 → TC-3470..TC-3476 + TC-3488 · US-0133 → TC-3477..TC-3481 ·
  US-0134 → TC-3482..TC-3487.
````

### CH-45d — §12 known gaps (ISS-02)

FIND:

````
- **Known gaps (carried from v1.0.0, declared, not hidden):** `FR-005` (credential revocation and
  appeal), `FR-049`/`FR-050`/`FR-052` (treasury caps, ledger, spend approval) and `FR-053` (party
  fork) have **no story yet**. All are Should or Could. They MUST be storied before their target
  sprint. Owner: **Priya Raghunathan**.
````

REPLACE WITH:

````
- **Known gaps (carried from v1.0.0, declared, not hidden — corrected at v2.4.0, ISS-02):**
  `FR-005` (credential revocation and appeal, **Should**), `FR-049` (treasury caps, **Should**),
  `FR-052` (spend approval, **Could**) and `FR-053` (party fork, **Could**) have **no story yet**.
  Those four priorities were re-verified against SRS v2.16.3 §11 while making this edit and are
  correctly classified. They MUST be storied before their target sprint. Owner:
  **Priya Raghunathan**.
  **`FR-050` (public treasury record) has been removed from this list — it was never a Should.**
  SRS v2.16.3 §11 carries 050 in the **Must** row and states: "FR-050 is raised from Should to Must
  (financial transparency is now a business requirement, BR-019)". Presenting an uncovered **Must**
  row as a non-blocking Should/Could gap understated the Gate-2 exposure for three versions, and §3
  of this document declares MoSCoW inherited from Doc 02 to be authoritative — so this was a defect
  against Doc 05's own stated authority. FR-050 is storied at v2.4.0 by **US-0142** (FE-062 · EP-11;
  owner Erik Lindqvist; DES-033 assigned). **Routed to the tester:** Doc 08 v2.7.0 §3.3 still
  classes FR-050 as Should and lists it under non-Must rows — that row MUST move to §3.1 as a
  gating Must row before Gate 2.
````

### CH-45e — §12 DES-readiness paragraphs, re-scoped (ISS-07)

FIND:

````
- **v2.0.0 DES readiness gap (declared):** FR-074..FR-111 have no DES assigned — deliberate, per
  Doc 03 §16 (next-increment scope). Stories for FR-074..FR-111 are marked "Not Ready pending DES"
  in §6 and will satisfy the Definition of Ready only after Gate 1 produces the updated Doc 03 and
  DES links are confirmed. FR-112..FR-120 have provisional DES links (see DES map above) subject
  to re-confirmation.
- **v2.1.0 DES readiness gap (declared):** FR-130 (US-0131) has no DES assigned — same
  recorded-phasing posture as FR-121..FR-129 (Doc 03 §16 next-increment scope). US-0131 satisfies
  DoR only after the architect assigns a DES. v2.3.0: US-0131 implementation exists (Doc 06
  v2.2.0) but formal DES gap persists; RTM row remains OPEN (G-TRACE + G-PHASE3).
````

REPLACE WITH:

````
- **DES readiness — re-scoped at v2.4.0 against SDD v2.11.2 (Approved) and Doc 08 v2.7.0 §7
  (ISS-07).** The blanket v2.0.0 claim that "FR-074..FR-111 have no DES assigned" and the v2.1.0
  claim that FR-130 has none are **both superseded**. Assigned since: **FR-077 → DES-101** ·
  **FR-079 → DES-103** · **FR-080 → DES-103** · **FR-090 → DES-104** · **FR-091 → DES-105** ·
  **FR-092 → DES-106** · **FR-130 → DES-102** (Doc 08 v2.7.0 §7 records the movements: entries
  70/81 RETIRED at RTM v2.5.0, 71 RETIRED at v2.5.1, 125 RETIRED at v2.4.0, 68 reclassified at
  v2.4.0). Note that **DES-103 covers both FR-079 and FR-080**, and **DES-104 covers FR-090** — the
  review's "FR-079/FR-080 → DES-103/DES-104" shorthand is loose; SDD §5.2 is the authority.
  What actually remains open is **33 live FR-level G-TRACE chains** in Doc 08 v2.7.0 §7:
  FR-074, FR-075, FR-076, FR-078, **FR-081 (US-0091)**, FR-087, FR-088, FR-089, FR-093..FR-111,
  plus the six new-story chains FR-121, FR-125, FR-126, FR-127, FR-128 and FR-129. Every story on a
  live chain carries "Not Ready pending DES" in §6 and names its gap-log entry; those stories
  satisfy the Definition of Ready only after the architect assigns a DES. FR-112..FR-120 keep the
  provisional DES links mapped above, subject to re-confirmation.
  **Two source disagreements are routed, not resolved here:** (a) SDD v2.11.2 §5.2 lists FR-075 in
  DES-102's `Satisfies` while Doc 08 v2.7.0 §3.1 records FR-075's DES as `none` (G-TRACE) — one of
  the two is wrong; US-0085 keeps the conservative reading ("Not Ready pending DES") until the
  architect and tester agree; (b) Doc 08 v2.7.0 §3.2 records NFR-007 as having no story and no
  backlog item, although §8 **NF-09** has implemented NFR-007 since v1.1.1 — that row should read
  `NF-09` and its G-TRACE tag should retire. Both → tester (Ji-woo Park); (a) also → architect.
````

### CH-45f — §12 TC assignments, v2.4.0 additions, and the two closing lines (ISS-01, ISS-05)

FIND:

````
- `DES-###` links for FR-074..FR-111: **not yet assigned** — added after architect updates Doc 03.
- `TC-####` links: **not yet assigned** — added by the tester in Doc 07.
````

REPLACE WITH:

````
- **v2.4.0 Must-FR additions — the eight uncovered Must chains, closed (ISS-01, ISS-02):**
  FR-121→US-0135 (FE-059) · FR-125→US-0136 (FE-060) · FR-133→US-0137 (FE-060; **DES-099**) ·
  FR-126→US-0138 (FE-061) · FR-127→US-0139 (FE-061) · FR-128→US-0140 (FE-061) ·
  FR-129→US-0141 (FE-056) · FR-050→US-0142 (FE-062; **DES-033**).
  Six of the eight are **Not Ready pending DES**, each citing its Doc 08 v2.7.0 §7 entry
  (119–124); only US-0137 and US-0142 carry an assigned DES. **No DES link was invented to close a
  chain on paper** — honesty over coverage-theatre. None of the eight has a TC; the tester owes
  eight `TC-####` at the next Doc 07 increment.
- **v2.4.0 TC reconciliation against Doc 07 v2.4.4 (Approved) — ISS-05.** `TS-SCAFFOLD` =
  **TC-3470–TC-3488** (19 cases; 16 Pass (obs.) dated 2026-08-25; 3 Blocked). Two suites landed
  after v2.3.0 was written and are recorded here for the first time: `TS-MEMBERSHIP` =
  **TC-3517–TC-3540** (24 cases, 0 Blocked) and `TS-PROPOSALS` = **TC-3542–TC-3563** (22 cases,
  0 Blocked); `TS-PARTY` gained **TC-3541** (29 cases). Per-story `TC` links are carried in each
  story's `Verified by:` field in §6 under the provenance rule stated there. **Routed to the
  tester:** TC-3555 is double-assigned — Doc 07 §5.6 heads TC-3552..TC-3555 to FR-091 / US-0101
  while Doc 08 v2.7.0 §3.1 also lists TC-3555 under FR-122 (US-0133); this document follows Doc 07.
- `DES-###` links: **assigned wherever an Approved source records one** — 109 of 142 stories carry a
  DES in their `Implements:` field, from SDD v2.11.2 §5.2/§15 cross-checked against Doc 08 v2.7.0
  §3.1/§3.2. The remaining 33 sit on the live G-TRACE chains listed in the DES-readiness paragraph
  above, say so in the field, and are **Not Ready**.
- `TC-####` links: **assigned** — 132 of 142 stories carry at least one `TC` in their `Verified by:`
  field. Ten carry none and say so in the field: US-0023, US-0056 and the eight stories minted at
  v2.4.0; the tester owes those ten a `TC` at the next Doc 07 increment. _(ISS-05: the previous
  blanket line "`TC-####` links: not yet assigned — added by the tester in Doc 07" was false for the
  whole document — Doc 07 v2.4.4 carries 465 cases, and §12 itself listed TC-3489..TC-3516 two
  bullets above it.)_
````

---

# Session-memory note (this file doubles as it)

## What I did

Produced the complete remaining v2.4.0 change set for `docs/05-product-backlog.md` as **45 anchored
edits** (CH-01 … CH-45, with CH-45 split into six sub-anchors CH-45a … CH-45f), covering all
fourteen review findings **except** the 134-row link mapping, which the project-manager had already
transcribed from my 11:20Z note §6. I read the current file end to end in chunks, re-derived every
`FIND` from the post-mapping text, and re-verified four external facts that this spec asserts and my
prior note had not pinned precisely: Doc 07 v2.4.4 §2 suite ranges (TS-SCAFFOLD TC-3470–3488 19/16/3
· TS-PARTY TC-3489–3516 + TC-3541, 29 · TS-MEMBERSHIP TC-3517–3540, 24, 0 blocked · TS-PROPOSALS
TC-3542–3563, 22, 0 blocked); SRS v2.16.3 §8 `# FR-064` verbatim (the explicit-leave Gherkin US-0073
now mirrors); SRS v2.16.3 §8's "24 of 24 Must NFRs" (so §12's Must-NFR count survives the re-pin);
and the SRS §5 BR table for BR-014..BR-021, which is how I found the three BRs that had no epic home.

## Decisions made this session (extending D-1 … D-10)

- **D-11.** `FIND` anchors are drawn from the file **as it now is**. Where the link mapping changed a
  line I quoted in my prior note, the current text wins.
- **D-12. ISS-09 is fixed substantively, not cosmetically.** Correcting §1's range to `BR-001 …
  BR-021` alone would leave BR-016, BR-017 and BR-020 unreachable from any epic, which is the half
  of ISS-09's required fix that is easy to skip. BR-016 → EP-04, BR-017 → EP-09, BR-020 → EP-01
  (CH-05, CH-07, CH-08, CH-10). All 21 BRs are now reachable.
- **D-13. §7 is reconciled to the applied §6 mapping (CH-41, CH-42), not merely annotated.** Leaving
  the screen table contradicting the story atoms would have converted a fixed Low into a new Medium
  at cycle 2. This also lands my F-1 (SCR-22/SCR-23 inverted against SDD v2.11.2 §5.2 and RTM §3.1).
- **D-14. ISS-11 is closed by the preamble option**, not by adding a DES column: SDD §15 is the
  authority for screen→DES and duplicating it here would create a second place to drift.
- **D-15. ISS-06 is extended to US-0023 and US-0056** (CH-19, CH-37): the two pre-existing stories
  with no TC now *state* the absence in the field rather than omitting the field, matching the rule
  the eight new stories follow. `none` is a claim; a blank is not.
- **D-16. v1/v2 posture is placed at four levels, not one** — §2 (scope note), EP-06 and EP-09
  (hypothesis/metric), and the four stories ISS-10 names, with EP-06's success metric **split into a
  v1 row and a v2 row** so that a Gate-1 reader can tell which number is being promised now.
- **D-17. Where this brief and my evidence diverged, evidence won, and I say so:** (a) the brief says
  "§12's frozen label" is a Low fix — it is, and CH-45a also states the maintenance rule so it stops
  re-freezing; (b) the brief asks for the "Not Ready pending DES" statuses D-5 names — I additionally
  make **US-0091 an explicit, reasoned exception** (CH-25) rather than letting it look like an
  oversight; (c) I did **not** assign gap-log entry numbers to FR-079/FR-080/FR-090 individually
  (only entries 119–126 and 125 are attributed in my sources), so CH-23/CH-24/CH-26 cite the RTM
  version and the retirement release, not an entry number I cannot evidence.
- **D-18. I authored no review report and edited no review report** (AL-CANDIDATE-3). Re-review at
  cycle 2 is a neutral reviewer's job, assigned by the project-manager.

## Open items

- **OI-A (owed by the project-manager).** Transcribe CH-01 … CH-45 into `docs/05-product-backlog.md`
  with an editing tool. **Do not `Write` the whole file** — it is 3,219 lines and grows to ~3,560.
- **OI-B (owed by the project-manager).** **Register this note in `artifacts/memory-index.json`.** I
  did not touch that file: it is 5,900+ lines and a whole-file `Write` truncates it (it was corrupted
  that way once today). Registration is **owed**, not done.
- **OI-C (tester — Ji-woo Park).** Doc 08 v2.7.0 §3.3 classes FR-050 as Should (must move to §3.1 as
  a gating Must row) · §3.2 records NFR-007 as having no backlog item though NF-09 implements it ·
  TC-3555 double-assigned · ten stories owe a first `TC` (US-0023, US-0056, US-0135..US-0142).
- **OI-D (architect + tester).** FR-075's DES: SDD v2.11.2 §5.2 says DES-102, Doc 08 v2.7.0 §3.1 says
  `none`. US-0085 holds the conservative reading until they agree.
- **OI-E (architect).** DES owed for the six new-story chains FR-121, FR-125, FR-126, FR-127, FR-128,
  FR-129 (Doc 08 v2.7.0 §7 entries 119–124), and for FR-081 (US-0091).
- **OI-F (product-owner — me, out of this brief's scope).** SRS §13(h) / Doc 03 §16 Q15 (what becomes
  of a DEFEATED or CANCELLED decision under FR-091) and Q16 (two competing proposals both passing
  under FR-090) remain requirement clarifications I owe in Doc 02. Also noted while reading: SRS
  v2.16.3's §11 **Counts label still reads "(v2.15.0)"**, one bump behind its own maintenance rule.
- **OI-G.** Gate 1 remains blocked: Docs 04, 05 and 14 have no passing review at their current
  versions. Doc 05 v2.4.0 must go to **cycle 2 of 5** with a neutral reviewer in **business** mode.

## IDs touched

- **Minted (specified here, not yet in the document):** `US-0135`, `US-0136`, `US-0137`, `US-0138`,
  `US-0139`, `US-0140`, `US-0141`, `US-0142` · `FE-059`, `FE-060`, `FE-061`, `FE-062`.
- **Must FRs newly covered:** `FR-050`, `FR-121`, `FR-125`, `FR-126`, `FR-127`, `FR-128`, `FR-129`,
  `FR-133`.
- **Stories amended:** US-0013, US-0021, US-0023, US-0038, US-0041, US-0042, US-0044, US-0056,
  US-0073, US-0087, US-0089, US-0090, US-0091, US-0100, US-0101, US-0102, US-0131, US-0132, US-0133,
  US-0134.
- **Epics amended:** EP-01, EP-04, EP-06, EP-09, EP-11, EP-12. **Features amended:** FE-056.
- **Screens amended:** SCR-04, SCR-05, SCR-06, SCR-09, SCR-11, SCR-12, SCR-13, SCR-14, SCR-15,
  SCR-22, SCR-23.
- **DES cited:** DES-033, DES-065, DES-097, DES-099, DES-101, DES-102, DES-103, DES-104, DES-105,
  DES-106. **BR cited:** BR-016, BR-017, BR-019, BR-020. **CON cited:** CON-015.
- **TC ranges cited:** TC-3470–3488, TC-3489–3516, TC-3517–3540, TC-3541, TC-3542–3563.
- **Read, not edited:** Docs 01, 02, 03, 06, 07, 08; the v2.3.0 cycle-1 review report.
