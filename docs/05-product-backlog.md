# Product Backlog — Epics / Features / Stories — Trumocracy

```
Document ID:   BKLG-TRUMOCRACY
Version:       1.1.2
Status:        In Review
Owner:         Priya Raghunathan — Product Owner
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md v1.1.1), PR-TRUMOCRACY (docs/01-press-release-prfaq.md)
Last updated:  2026-08-10
Change:        v1.1.2 — Cycle-2 business-review rework (2026-08-10).
               Addresses ISS-A..ISS-F from artifacts/reviews/05-product-backlog-v1.1.1-business-cycle2.md.
               ISS-A: EP-06 outcome hypothesis rewritten to align with Doc 02 v1.1.1 BR-011 (adversarial-audit
               properties; coercion rate as upper bound from incident reports, not operational observation);
               ISS-B: §12 Must-NFR map corrected NFR-022→US-0070 (was US-0001);
               ISS-C: §12 Must-NFR map corrected NFR-015→US-0003, SCR-01 (was US-0001, SCR-01);
               ISS-D: §2 NF item count corrected 8→9; ISS-E: §2 source pin updated to Doc 02 v1.1.1;
               ISS-F: US-0076 "Not Ready pending ISS-06" flag removed (ISS-06 resolved in v1.1.1).
               v1.1.1 — Cycle-1 business-review rework (2026-08-10).
               Addresses ISS-01..ISS-11 from artifacts/reviews/05-product-backlog-v1.1.0-business-cycle1.md.
               Key changes: NF-09 added for NFR-007 availability coverage + Must-NFR coverage map added to §12 (ISS-01);
               FR-005 removed from FE-002 Maps-to (ISS-02); FR-026 removed from SCR-10 (ISS-03); US-0007/US-0038
               ACs updated with adversary-game parameters mirroring Doc 02 v1.1.1 (ISS-04); OI-08 constants marked
               non-normative in 6 story ACs (ISS-05); EP-07 success metric and US-0076 AC aligned to FR-066 "major
               election" scope (ISS-06); story point arithmetic corrected (ISS-07); §10 cadence aligned to Doc 13 (ISS-08);
               FR-044 added to SCR-18 (ISS-09); WSJF sequencing rule stated (ISS-10); ICAO NFC scenario added to
               US-0080 (ISS-11).
               v1.1.0 — Nine-requirement change request (CR-v1.1.0) directed by Rathish 2026-08-09.
               Adds BR-013, FR-062..073; FE-029..036; US-0071..0083; SCR-21..23 (provisional).
               Source: artifacts/status/GATE1-DECISION-2026-08-09.md §7 (CR-v1.1.0).
```

> **Based on:** SAFe (Epic → Feature → Story) + Mike Cohn user-story standard. **Produced in:** Define; living through Coding & UT.
> Every story maps to the requirement(s) it implements. `DES-###` and `SCR-##` links are attached
> after Design (Doc 03) and reconciled in the RTM (Doc 08) by the tester — **stories below are not
> Ready until those links exist.**
> **No design decisions appear in this document.** Stories state the capability and its observable
> behaviour, never the mechanism.

---

## 1. Product goal & link to vision

**Goal.** Ship the walking skeleton of citizen-owned party formation — *enrol → draft → endorse →
threshold → activate → join → propose → vote → nominate → debate → elect → recall* — with every
non-negotiable guardrail (anonymity, sybil resistance, receipt-freeness, no-operator-discretion,
zero cost) present from the first line of code rather than retrofitted.

Traces to Doc 01 §B (customer journey) and Doc 02 `BR-001` … `BR-013`.

**Walking-skeleton definition of "alive":** one verified citizen can, unaided on a low-end phone,
enrol, draft an eight-pillar party, gather endorsements from other verified residents, watch it
activate automatically at threshold, join it, propose something, vote anonymously, stand for a ward
office, complete the debate cycle, be elected, and be recalled — with a third party able to
independently reproduce every count along the way. Stories are ordered so that this becomes true as
early as possible.

## 2. Backlog structure & hierarchy

`Theme → Epic (EP-##) → Feature (FE-###) → User Story (US-####) → Task`.
Non-functional work appears as **explicit backlog items**, never as an assumption — see §8.

**Contents.** 10 epics · 36 features · 83 user stories · 9 explicit non-functional backlog items. (ISS-D: count corrected from 8 to 9 after NF-09 was added.)
All 54 Must FRs in Doc 02 v1.1.1 are covered by at least one story; coverage is asserted in §12 and
verified in the RTM. (ISS-E: source pin updated from v1.1.0 to v1.1.1.)

## 3. Prioritization framework

**MoSCoW is inherited from Doc 02 and is authoritative for scope.** Sequencing *within* Must uses a
simplified WSJF: `WSJF = (User value + Risk reduction + Time criticality) / Size`, 1–10 per term.
Guardrail epics score high on Risk reduction by construction — this is intentional, because a
guardrail retrofitted after launch is a breach, not a feature.

| Epic | User value | Risk reduction | Time criticality | Size | WSJF | Sequence |
|------|-----------|----------------|------------------|------|------|----------|
| EP-01 Verified personhood & regional eligibility | 8 | 10 | 10 | 13 | 2.15 | 1 |
| EP-02 Party drafting & the eight pillars | 9 | 3 | 8 | 5 | 4.00 | 2 |
| EP-03 Petition, threshold & activation | 10 | 8 | 9 | 8 | 3.38 | 3 |
| EP-04 Open, equal membership | 9 | 8 | 8 | 5 | 5.00 | 4 |
| EP-05 Proposals, amendment & governance stability | 8 | 10 | 7 | 8 | 3.13 | 5 |
| EP-06 Anonymous, receipt-free voting | 10 | 10 | 9 | 13 | 2.23 | 6 |
| EP-07 Localized nomination & election | 9 | 5 | 7 | 8 | 2.63 | 7 |
| EP-08 Accountability: manifestos & recall | 9 | 6 | 6 | 8 | 2.63 | 8 |
| EP-09 Public verifiability & moderation-by-code | 8 | 9 | 7 | 5 | 4.80 | 9 |
| EP-10 Zero-friction access: cost, recovery, accessibility | 10 | 7 | 9 | 8 | 3.25 | 10 |

> **Sequencing rule:** WSJF scores measure value density; the walking-skeleton dependency chain
> determines the actual start sequence and overrides WSJF where dependency order requires it (e.g.,
> EP-01 must precede EP-02 because party drafting requires personhood). _(ISS-10.)_
>
> Sequence numbers order *epic start*, not completion. EP-09 and EP-10 are cross-cutting and their
> stories are pulled forward alongside the epics they serve — verifiability (`FR-054`) and fee
> sponsorship (`FR-060`) must be true of the very first action ever taken on the platform, not
> added in month five.

## 4. Epics

```
EP-01  Verified personhood & regional eligibility
Outcome hypothesis: We believe that proving a person is real and locally eligible WITHOUT learning
  who they are will achieve trustworthy counts with anonymous members; we'll know when the audited
  duplicate rate is <=0.1% and 0 member deanonymisations are confirmed.
Business value / link: BR-006, BR-009, BR-004
In scope: enrolment, one-credential-per-human, per-scope action limits, cross-scope unlinkability,
  residency scope, versioned region registry, population denominators, deterministic enrolment
  nullifier, pluggable credential adapter, government eID issuer hierarchy.
Out of scope: any storage of identity documents; any identity issued by Trumocracy.
Success metric: <=0.1% duplicate credentials; 0 identity fields at data inventory; >=2 attestors live per region.
Features: FE-001, FE-002, FE-003, FE-004, FE-034, FE-036
Owner: Marcus Adeyemi            Status: Backlog
```
```
EP-02  Party drafting & the eight mandatory pillars
Outcome hypothesis: We believe that letting any citizen publish a complete eight-pillar programme
  with no approval step will achieve genuine open incubation; we'll know when >=50 fully-pillared
  petitions exist in month 1 and 0 required a human approval.
Business value / link: BR-001
In scope: draft creation, name/emblem collision, eight-pillar completeness, charter amendment rules,
  offline drafting.
Out of scope: editorial judgement of political content; collaborative co-authoring.
Success metric: >=50 published petitions in month 1; 0 human approvals in the publish path.
Features: FE-005, FE-006
Owner: Tomás Ferreira            Status: Backlog
```
```
EP-03  Petition, threshold & automatic activation
Outcome hypothesis: We believe a population-proportional, code-computed threshold will achieve
  legitimacy without a gatekeeper; we'll know when >=12 parties activate in 12 months and 100% of
  activations are independently reproducible.
Business value / link: BR-002, BR-008
In scope: endorsement, withdrawal, denominator sourcing and disputes, threshold computation, dwell
  period, automatic activation, immutable activation record, petition expiry.
Out of scope: any manual activation, waiver or appeal of a threshold.
Success metric: >=12 activations; 100% reproducible; 0 threshold overrides possible.
Features: FE-007, FE-008, FE-009
Owner: Tomás Ferreira            Status: Backlog
```
```
EP-04  Open, equal membership
Outcome hypothesis: We believe join-without-approval plus strictly equal standing will achieve the
  removal of party elites; we'll know when 0 joins require approval, 0 members hold >1 vote, and at
  least one founding drafter has been outvoted by month 12.
Business value / link: BR-003, BR-010, BR-012
In scope: join, leave, equal standing, maturation period, churn rate limits, aggregate-only
  membership visibility, single-party-at-a-time constraint, tenure waiver for new parties
  (with anti-capture active).
Out of scope: membership tiers, dues, invitations, expulsion.
Success metric: 0 approval steps; 0 weighted votes; churn-attack simulation defeated; 0 dual-memberships.
Features: FE-010, FE-011, FE-012, FE-030, FE-033
Owner: Grace Mbeki               Status: Backlog
```
```
EP-05  Proposals, charter amendment & governance stability
Outcome hypothesis: We believe tiered thresholds, timelocks, entrenchment and open-time eligibility
  snapshots will achieve resistance to flash takeover and mob charter capture; we'll know when both
  red-team attacks fail before Gate 2.
Business value / link: BR-008, BR-012
In scope: proposal submission, four tiers, quorum + supermajority, timelocks, entrenched clauses,
  eligibility snapshot, proposal rate limits.
Out of scope: proposal moderation or pre-screening of any kind.
Success metric: 0 successful simulated takeovers; 100% of enactments satisfy their tier's rules.
Features: FE-013, FE-014, FE-015, FE-016
Owner: Tomás Ferreira            Status: Backlog
```
```
EP-06  Anonymous, receipt-free voting
Outcome hypothesis: We believe unlinkable ballots plus an invisible re-vote override will achieve a
  vote that cannot be bought or coerced; we'll know when (a) an independent adversarial audit (PPT
  adversary, λ ≥ 128 bits, N ≥ 10,000 ballot observations, 95% confidence) finds no receipt
  construction and no re-vote distinguisher, AND (b) the coercion incident rate is published as an
  upper bound derived from independent incident reports with a stated methodology — not as an
  operational observation rate, since re-voting is by design invisible (TD-06, FR-032).
  (ISS-A: "≥95% of reported coercion cases successfully overridden" removed; that metric is
  structurally unobservable per Doc 02 v1.1.1 BR-011(c); replaced with BR-011(a)/(b) proxies.)
Business value / link: BR-011, BR-009, BR-005
In scope: eligible anonymous casting, unlinkability, receipt-freeness, silent re-vote, results
  embargo, non-transferability, publicly reproducible tally.
Out of scope: delegation, proxy voting, individual vote verification (see TD-06).
Success metric: 0 receipt constructions found; 100% of tallies independently reproducible.
Features: FE-017, FE-018, FE-019
Owner: Aisha Nkemdirim           Status: Backlog
```
```
EP-07  Localized nomination & internal election
Outcome hypothesis: We believe binding candidacy and voting to where a person actually lives, and
  requiring debates before every major election (as defined in Doc 02 §14 and FR-066), will achieve
  real local representation with informed voters; we'll know when 100% of nominations are
  scope-checked, 0 out-of-region ballots are counted, and 100% of major-election ballots are preceded
  by three completed debates per candidate. _(ISS-06: aligned to FR-066 "major election" scope.)_
Business value / link: BR-004, BR-009, BR-013
In scope: self-nomination scoped to region+office, nomination endorsements, informed consent to
  public identity, candidacy withdrawal, mandatory pre-election debates (three per candidate),
  post-debate member vote determining candidacy, candidate feedback scoring, election timetable
  immutability, automatic office assignment, fixed terms. No automatic renomination.
Out of scope: nomination of others; central candidate lists; appointment of any kind; automatic
  renomination of incumbents.
Success metric: 0 out-of-scope nominations or ballots accepted; 100% consented disclosures;
  100% of major-election ballots preceded by three completed debates per candidate.
Features: FE-020, FE-021, FE-022, FE-031, FE-032
Owner: Aisha Nkemdirim           Status: Backlog
```
```
EP-08  Accountability: manifestos, records & mid-term recall
Outcome hypothesis: We believe public versioned commitments plus a real recall power will achieve
  dynamic accountability; we'll know when >=1 recall per 20 offices per year reaches a vote and
  harassment-classified initiations stay <=10%.
Business value / link: BR-005, BR-009
In scope: manifesto publication, dated commitments, immutable version history and diffs,
  office-capacity vote attribution, two-stage recall, grace/cooldown windows, automatic revocation
  and by-election.
Out of scope: performance scoring by Trumocracy; any editorial judgement of a commitment.
Success metric: 100% of versions retrievable; recall exercised at least once by month 6.
Features: FE-023, FE-024
Owner: Erik Lindqvist            Status: Backlog
```
```
EP-09  Public verifiability & the moderation-by-code boundary
Outcome hypothesis: We believe emitting a tamper-evident record of every governance action,
  shipping an independent verifier, and making participation profiles public will achieve trust
  without trusting us; we'll know when >=25 distinct third parties reproduce tallies by month 6 and
  the security audit finds 0 privileged governance paths.
Business value / link: BR-005, BR-008, BR-009
In scope: verifiable record emission, independent verifier, party history export, absence of
  operator override, jurisdiction-scoped display filtering with a public log, public participation
  profiles (FR-062), ballot-direction prohibition (FR-063).
Out of scope: content moderation of political speech; any deletion from the record.
Success metric: 0 privileged override paths at audit; 100% of filtering actions publicly logged.
Features: FE-025, FE-026, FE-029
Owner: Erik Lindqvist            Status: Backlog
```
```
EP-10  Zero-friction access: cost, recovery, accessibility
Outcome hypothesis: We believe removing tokens, fees, seed phrases and jargon will achieve use by
  ordinary citizens on cheap phones; we'll know when >=80% complete enrol->endorse unaided in <=10
  minutes at SUS >=75 and citizen cost is USD 0.00 in 100% of cases.
Business value / link: BR-007
In scope: fee sponsorship and per-person budgets, degrade-by-delay, seedless recovery with timelock
  and cancellation, privacy-preserving recovery, nullifier-collision recovery (FR-071, FR-072),
  WCAG 2.2 AA, low-bandwidth and offline behaviour, i18n/RTL, plain language.
Out of scope: desktop-optimised experience; any charge to a citizen, ever.
Success metric: USD 0.00 citizen cost; >=80% unaided completion; 0 WCAG A/AA failures.
Features: FE-027, FE-028, FE-035
Owner: Hiroshi Tanaka            Status: Backlog
```

## 5. Features

| ID | Feature (Epic) | Benefit hypothesis | Maps to | Stories | Owner |
|----|----------------|--------------------|---------|---------|-------|
| FE-001 | Personhood enrolment (EP-01) | A citizen proves they are one real human, once, without handing over documents to us | FR-001, FR-003, NFR-004, NFR-010 | US-0001–0003 | Marcus Adeyemi |
| FE-002 | Attestor plurality & concentration control (EP-01) | No single identity provider can capture or halt a region | FR-004, NFR-004 | US-0004–0005 | Marcus Adeyemi |
| FE-003 | Per-scope action limits & cross-scope unlinkability (EP-01) | One action per person per scope, with no way to join the dots between scopes | FR-002, NFR-001, NFR-002 | US-0006–0007 | Dr. Lena Kowalczyk |
| FE-004 | Residency scope & versioned region registry (EP-01) | Rights follow where you actually live, without us learning your address | FR-006, FR-007, FR-008 | US-0008–0010 | Marcus Adeyemi |
| FE-005 | Party draft creation (EP-02) | Anyone can start a party, pseudonymously, with no permission | FR-010, FR-012, NFR-012 | US-0011–0013 | Tomás Ferreira |
| FE-006 | Eight-pillar completeness gate (EP-02) | A party must be a whole programme, not a slogan | FR-011 | US-0014–0015 | Tomás Ferreira |
| FE-007 | Endorsement & withdrawal (EP-03) | Real local people, one each, back a petition — and can change their mind | FR-014, FR-015, FR-017 | US-0016–0018 | Tomás Ferreira |
| FE-008 | Denominator sourcing & threshold computation (EP-03) | The bar is arithmetic nobody can move | FR-009, FR-016, FR-013 | US-0019–0021 | Yuki Sato |
| FE-009 | Automatic activation (EP-03) | The party switches itself on; there is nobody to lobby | FR-018, FR-019 | US-0022–0023 | Tomás Ferreira |
| FE-010 | Join & leave (EP-04) | Membership without a gatekeeper, and exit without a penalty | FR-020, FR-022 | US-0024–0026 | Grace Mbeki |
| FE-011 | Equal standing (EP-04) | One member, one vote, no exceptions that anyone can create | FR-021, FR-051 | US-0027–0028 | Grace Mbeki |
| FE-012 | Maturation & churn limits (EP-04) | You cannot buy a majority overnight | FR-023 | US-0029–0030 | Rafael Duarte |
| FE-013 | Proposal submission (EP-05) | Any matured member sets the agenda, unfiltered | FR-024, FR-029 | US-0031–0032 | Tomás Ferreira |
| FE-014 | Tiered quorum & supermajority (EP-05) | Bigger changes need broader consent | FR-025 | US-0033–0034 | Tomás Ferreira |
| FE-015 | Timelocks & entrenched clauses (EP-05) | Nothing important changes fast or quietly | FR-026, FR-027 | US-0035–0036 | Rafael Duarte |
| FE-016 | Eligibility snapshot (EP-05) | Voting power cannot be acquired mid-vote | FR-028 | US-0037 | Rafael Duarte |
| FE-017 | Anonymous eligible ballot casting (EP-06) | Your vote counts and nobody knows it was yours | FR-030, FR-035, NFR-001, NFR-002 | US-0038–0040 | Dr. Lena Kowalczyk |
| FE-018 | Receipt-freeness & silent override (EP-06) | You cannot sell your vote, and you cannot be forced to keep one | FR-031, FR-032, FR-034, NFR-003 | US-0041–0043 | Aisha Nkemdirim |
| FE-019 | Publicly reproducible tally (EP-06) | Anyone can check the count without trusting us | FR-033 | US-0044–0045 | Erik Lindqvist |
| FE-020 | Self-nomination scoped to region + office (EP-07) | You stand where you live, for what you want, without asking a boss | FR-036 | US-0046–0048 | Aisha Nkemdirim |
| FE-021 | Candidate disclosure consent (EP-07) | Going public is a deliberate, informed, irreversible choice — and only candidates make it | FR-037, FR-038 | US-0049–0050 | Dr. Lena Kowalczyk |
| FE-022 | Internal election & automatic office assignment (EP-07) | The winner takes office by code, with nobody to ratify it | FR-039, FR-040, FR-041 | US-0051–0053 | Aisha Nkemdirim |
| FE-023 | Manifestos, commitments & immutable history (EP-08) | Promises are permanent and their edits are visible | FR-046, FR-047, FR-048 | US-0054–0056 | Erik Lindqvist |
| FE-024 | Two-stage mid-term recall (EP-08) | A representative who stops delivering can be removed now, not in four years | FR-042, FR-043, FR-044, FR-045 | US-0057–0060 | Aisha Nkemdirim |
| FE-025 | Verifiable record & independent verifier (EP-09) | Every action is checkable by a stranger | FR-054, FR-055, NFR-018 | US-0061–0063 | Erik Lindqvist |
| FE-026 | No-operator-discretion boundary (EP-09) | We removed our own power and you can verify it | FR-056, FR-057, NFR-017 | US-0064–0065 | Daniel Okonkwo |
| FE-027 | Fee sponsorship & no-token flows (EP-10) | It is free, and you never meet a wallet | FR-060, FR-061, NFR-005, NFR-023 | US-0066–0067 | Hiroshi Tanaka |
| FE-028 | Recovery & universal access (EP-10) | Losing your phone does not end your citizenship; a cheap phone is enough | FR-058, FR-059, NFR-011, NFR-012, NFR-013, NFR-016 | US-0068–0070 | Amara Diallo |
| FE-029 | Public participation profile (EP-09) | Your participation is visible; your votes are not — and the system proves the difference | FR-062, FR-063 | US-0071–0072 | Erik Lindqvist |
| FE-030 | Single party membership enforcement (EP-04) | One party at a time, enforced — no simultaneous memberships, no tenure arbitrage | FR-064 | US-0073 | Rafael Duarte |
| FE-031 | Candidate feedback scoring (EP-07) | Members signal quality before the ballot; downvotes are private to protect the voter | FR-065 | US-0074–0075 | Aisha Nkemdirim |
| FE-032 | Mandatory pre-election debates (EP-07) | Every candidate faces three debates; incumbency buys no automatic pass | FR-066, FR-067 | US-0076–0077 | Aisha Nkemdirim |
| FE-033 | Tenure waiver for new parties (EP-04) | New parties can mobilise without tenure gating, but anti-capture never switches off | FR-068 | US-0078 | Rafael Duarte |
| FE-034 | Deterministic enrolment nullifier (EP-01) | Duplicate detection by mathematics, not by matching names or faces | FR-069, FR-070 | US-0079–0080 | Marcus Adeyemi |
| FE-035 | Nullifier-collision recovery (EP-10) | Losing your keys does not lose your history; a stolen credential cannot take your seat | FR-071, FR-072 | US-0081–0082 | Amara Diallo |
| FE-036 | Government eID issuer hierarchy (EP-01) | One class of credential mints uniqueness; all others help but never grant new entries | FR-073 | US-0083 | Marcus Adeyemi |

## 6. User stories

> Format per Doc 05 template §6. **Verified by** `TC-####` is assigned by the tester in Doc 07;
> `DES-###`/`SCR-##` are attached after Design. Points use a modified Fibonacci scale; the reference
> story is **US-0024 (join a party) = 3 points**.
> Every story carries at least one adversarial or negative scenario.

### EP-01 · Verified personhood & regional eligibility

```
US-0001  Enrol as a verified unique person      (FE-001 · EP-01)
As a citizen, I want to prove once that I am a real adult eligible in my region, so that my
endorsements and votes count and nobody can impersonate or outnumber me with fakes.
Owner: Marcus Adeyemi   Priority: Must   Points: 8   Implements: FR-001   Depends on: US-0004
AC:
  Scenario: First enrolment succeeds
    Given a citizen who holds no credential
    When they complete an attestor check successfully
    Then an active personhood credential is issued to them
    And they are told they are enrolled without being shown any key material or seed phrase
  Scenario (adversarial): Same human enrols twice
    Given a human who already holds an active credential
    When that same human enrols again through a different attestor
    Then no second active credential is issued
    And the refusal message does not reveal which existing credential matched
```
```
US-0002  Enrolment leaves no identity data behind      (FE-001 · EP-01)
As a citizen, I want my documents and biometrics never to be kept, so that a leak, a sale or a court
order cannot expose me.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-003, NFR-010   Depends on: US-0001
AC:
  Scenario: Nothing identifying is retained
    Given a completed enrolment check
    When every store, log, backup, cache and message queue is inspected
    Then no document image, document number, biometric template, date of birth or address is present
    And only a non-identifying eligibility result remains
  Scenario (negative): Attempt to add an identifying field
    Given a change that would persist a date of birth
    When it is proposed
    Then the data-inventory check fails the build
```
```
US-0003  Understand what is and is not kept, before enrolling      (FE-001 · EP-01)
As a cautious citizen, I want to be told plainly what Trumocracy will and will not know about me
before I start, so that my consent is real.
Owner: Nadia Hassan   Priority: Must   Points: 3   Implements: FR-003, NFR-015, NFR-023   Depends on: US-0002
AC:
  Scenario: Pre-enrolment disclosure
    Given a citizen beginning enrolment
    When the first screen is shown
    Then it states in plain language that no documents, biometrics or address are kept, that records
      are permanent and cannot be deleted, and that an attestor still learns that they enrolled
    And the citizen must acknowledge it before proceeding
  Scenario (negative): Jargon check
    When the disclosure text is scanned
    Then it contains none of: wallet, seed phrase, private key, gas, token, mint, chain, block, hash
```
```
US-0004  Enrol through one of several independent attestors      (FE-002 · EP-01)
As a citizen without conventional documents, I want more than one way to prove I am real, so that a
single provider cannot exclude me.
Owner: Marcus Adeyemi   Priority: Must   Points: 8   Implements: FR-004   Depends on: —
AC:
  Scenario: Choice of path
    Given a region with at least two independent attestation paths live
    When a citizen begins enrolment
    Then they can choose any live path and complete enrolment through it
  Scenario (negative): Region with one attestor
    Given a region where only one attestation path is live
    When enrolment is attempted in that region
    Then enrolment is disabled for that region with an explanatory message
```
```
US-0005  Cap and publish attestor concentration      (FE-002 · EP-01)
As an auditor, I want no attestor to issue a majority of a region's credentials, so that capturing
one provider cannot capture the region.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-004, NFR-004   Depends on: US-0004
AC:
  Scenario: Shares are public
    Given credentials issued in a region
    When the public dashboard is viewed
    Then each attestor's share of that region's credentials is shown
  Scenario (adversarial): Attestor mass-issues
    Given an attestor holding 50% of a region's credentials
    When it attempts a further issuance in that region
    Then the issuance is refused and the event is publicly recorded
```
```
US-0006  Act at most once in any scope      (FE-003 · EP-01)
As a member, I want everyone limited to one action per scope, so that counts mean what they say.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-002   Depends on: US-0001
AC:
  Scenario: Second action in the same scope is refused
    Given a person who has already acted in scope S
    When they attempt to act again in S
    Then the action is refused as already-acted
    And no information about their earlier action is revealed to anyone else
  Scenario (adversarial): Fresh device, same person
    Given the same person using a new device and a new session
    When they attempt to act again in S
    Then the action is still refused
```
```
US-0007  Be unlinkable across scopes      (FE-003 · EP-01)
As a member, I want my actions in different parties and ballots to be impossible to connect, so that
nobody can build a profile of my politics.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 13   Implements: FR-002, NFR-001, NFR-002   Depends on: US-0006
AC:
  Scenario (adversarial): Colluding observers correlate
    Given one person who acted in scope S and scope T
    When an adversary holding {all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity} analyses N ≥ 10,000 independently drawn same-person action pairs
    Then the adversary's advantage in correctly identifying each pair as same-person is ≤ ε over 1/2 at 95% confidence (ε and collusion bound per Doc 02 NFR-001 / OI-10; provisional test value ε = 0.02)
  Scenario: Small-scope protection
    Given a scope with fewer than 1,000 eligible actors
    When a person acts in it
    Then publication is withheld or aggregated until the anonymity floor is met
    And the person is told publication is delayed and why
```
```
US-0008  Establish my region without giving my address      (FE-004 · EP-01)
As a citizen, I want to prove I live in my ward without telling anyone my street, so that I cannot be
found or targeted.
Owner: Marcus Adeyemi   Priority: Must   Points: 8   Implements: FR-006   Depends on: US-0001
AC:
  Scenario: Region established
    Given a citizen resident at a specific address
    When they complete residency attestation
    Then the system holds only the region identifier
    And no address, postcode or coordinate exists anywhere in the system for that person
  Scenario (negative): Address lookup attempted
    When any member, party, office-holder or operator queries for a person's address
    Then no interface, export or record returns one
```
```
US-0009  Have my rights follow one region at a time      (FE-004 · EP-01)
As a member, I want my scoped rights bound to exactly one region with a change cooldown, so that
nobody can shop for regions to swing a local vote.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-008   Depends on: US-0008
AC:
  Scenario: Rights follow current region
    Given a person whose active residency scope is ward W
    When they attempt any scope-restricted action outside W
    Then the action is refused as out-of-scope
  Scenario (adversarial): Rapid region hopping
    Given a person who changed region 30 days ago
    When they request another change
    Then the request is refused and the earliest permitted date is shown
```
```
US-0010  Rely on a versioned region registry      (FE-004 · EP-01)
As an auditor, I want boundary changes to be versioned and non-retroactive, so that redistricting
cannot rewrite a finished election.
Owner: Yuki Sato   Priority: Must   Points: 5   Implements: FR-007   Depends on: —
AC:
  Scenario: Closed results are frozen
    Given an election closed under registry version N
    When the registry advances to N+1 with changed boundaries
    Then the closed election's eligible set, counts and result are unchanged
    And the election record names the registry version it used
  Scenario (negative): Retroactive edit attempt
    When an attempt is made to apply a new boundary to a closed contest
    Then the attempt is refused and logged
```
```
US-0079  Enrol via deterministic nullifier with duplicate prevention      (FE-034 · EP-01)
As a verified citizen, I want my enrolment to be unduplicated by mathematics rather than by matching
my name or face, so that my identity is never exposed in the deduplication process.
Owner: Marcus Adeyemi   Priority: Must   Points: 8   Implements: FR-069   Depends on: US-0001
AC:
  Scenario: First enrolment derives and stores nullifier
    Given a credential with a valid issuer signature, unexpired, with a correct region attribute
    When the enrolment derivation runs
    Then only the derived nullifier is stored; no underlying identifier is retained
  Scenario (adversarial): Same credential presented twice
    Given the same credential submitted in a second enrolment attempt
    When the derivation runs
    Then the nullifier matches an existing record and the enrolment is rejected as a duplicate
  Scenario (negative): Tampered credential attribute
    Given a credential with a region attribute that does not place the person in the declared region
    When the derivation verification runs
    Then the enrolment is rejected with the reason (region-attribute invalid)
```
```
US-0080  Enrol via any of the supported adapter types      (FE-034 · EP-01)
As a citizen whose government issues a contactless-chip travel document rather than a digital wallet,
I want to enrol through the appropriate adapter, so that adapter choice does not determine eligibility.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-070   Depends on: US-0079
AC:
  Scenario: Government eID wallet adapter (eIDAS 2.0 or equivalent)
    Given a region where government eID wallets are the designated adapter
    When a citizen with a government eID wallet presents their credential
    Then the enrolment adapter verifies the trust-anchor signature, extracts the stable personal identifier and residency attribute, and produces a valid nullifier input
  Scenario: ICAO Doc 9303 NFC chip adapter (biometric passport / NFC identity card)
    Given a region where an ICAO Doc 9303 NFC chip adapter is configured
    When a citizen presents a biometric passport or NFC-enabled identity card
    Then the adapter verifies the Document Security Object against the ICAO public key directory, extracts the stable identifier field (MRZ DocumentNumber or chip pseudonym) and an attested residency claim, produces a valid nullifier input, and retains no biometric data
  Scenario: Offline paper KYC adapter (e.g. Aadhaar offline XML or equivalent)
    Given a region where offline paper KYC is the approved adapter
    When a citizen presents the required paper identity evidence
    Then the paper KYC adapter path accepts it and produces a valid nullifier input; no biometric data is retained after the attestor check
  Scenario (negative): Hard-coded single adapter
    When a deployment is inspected for adapter configuration
    Then the adapter layer is pluggable and no single credential type is the only supported path
```
```
US-0083  Only government eID rail mints enrolment nullifiers      (FE-036 · EP-01)
As a member, I want to know that liveness attestors and non-eID providers cannot create new
enrolment records, so that the uniqueness boundary is clear and auditable.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Implements: FR-073   Depends on: US-0079
AC:
  Scenario: Government eID credential enrols
    Given a credential from the designated government eID rail in a region
    When it is submitted for enrolment
    Then an enrolment nullifier is minted and the record is accepted
  Scenario (adversarial): Availability-only credential attempts enrolment
    Given a liveness attestor credential not designated as a uniqueness-minting class
    When it is submitted for enrolment
    Then no nullifier is minted, the attempt is refused with reason (non-eID class), and the event is logged
  Scenario: Availability-only credential used for liveness only
    Given the same availability-only credential used for a liveness attestation request
    When the request is processed
    Then liveness is confirmed without creating or modifying any enrolment record
```

### EP-02 · Party drafting & the eight mandatory pillars

```
US-0011  Create a party draft pseudonymously      (FE-005 · EP-02)
As a citizen with a programme, I want to draft a party without revealing who I am, so that I can
publish ideas before I am ready to be a public figure.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-010   Depends on: US-0008
AC:
  Scenario: Draft created
    Given a verified citizen
    When they create a draft with a name, emblem, one declared jurisdiction and a charter
    Then the draft is created and the drafter is shown only pseudonymously
  Scenario (negative): Name collision
    Given an existing petition in the same jurisdiction named "Ward Renewal"
    When a drafter attempts the same name or emblem there
    Then publication is refused and the colliding entity is named
```
```
US-0012  Draft offline on a weak connection      (FE-005 · EP-02)
As a drafter on a cheap phone with patchy signal, I want to write my pillars offline and submit when
I reconnect, so that I do not lose hours of work.
Owner: Nadia Hassan   Priority: Must   Points: 5   Implements: FR-010, NFR-012   Depends on: US-0011
AC:
  Scenario: Offline composition
    Given a drafter with no connectivity on the reference device
    When they write pillar content and close the app
    Then the content is retained locally and submitted automatically when connectivity returns
  Scenario (negative): Connection lost mid-submit
    Given a submission interrupted by loss of signal
    When connectivity returns
    Then the draft is submitted exactly once, with no duplicate draft created
```
```
US-0013  Declare my charter's own amendment rules      (FE-005 · EP-02)
As a drafter, I want to set my party's amendment tiers, thresholds and timelocks, so that the party
governs itself rather than being governed by our defaults.
Owner: Tomás Ferreira   Priority: Should   Points: 5   Implements: FR-012   Depends on: US-0011
AC:
  Scenario: Custom rules within bounds
    Given a drafter setting a charter-tier supermajority of 70% within the platform bounds
    When they publish
    Then the party's charter tier uses 70%
  Scenario (negative): Out-of-bounds rule
    Given a drafter setting a charter-tier supermajority of 20%, below the platform floor
    When they attempt to publish
    Then publication is refused, naming the bound and the permitted range
  Scenario: Silence takes defaults
    Given a charter that declares no amendment rules
    When it is published
    Then documented platform defaults apply and are displayed on the party page
```
```
US-0014  Be blocked from publishing an incomplete programme      (FE-006 · EP-02)
As a citizen deciding whether to endorse, I want every party to have covered all eight pillars, so
that I am backing a programme rather than a slogan.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-011   Depends on: US-0011
AC:
  Scenario: Complete draft publishes
    Given a draft in which all eight pillars meet the published minimum-substance standard
    When the drafter publishes
    Then the draft is published with no human approval step anywhere in the path
  Scenario (negative): Missing pillars named
    Given a draft with Healthcare empty and Security below the standard
    When the drafter attempts to publish
    Then publication is refused and both Healthcare and Security are named as deficient
```
```
US-0015  See exactly what each pillar requires before I write it      (FE-006 · EP-02)
As a first-time drafter, I want to know what "sufficient" means for each pillar in advance, so that
the completeness gate feels like a checklist rather than a rejection.
Owner: Nadia Hassan   Priority: Must   Points: 3   Implements: FR-011, NFR-022, NFR-023   Depends on: US-0014
AC:
  Scenario: Standard shown up front
    Given a drafter opening any pillar
    When the pillar editor loads
    Then the published minimum-substance standard for that pillar and a live progress indicator are shown
  Scenario (negative): No editorial judgement
    When the standard is inspected
    Then it constrains only structure and substance, and contains no criterion based on the political
      position expressed
```

### EP-03 · Petition, threshold & automatic activation

```
US-0016  Endorse a petition in my own jurisdiction      (FE-007 · EP-03)
As a resident, I want to back a party that claims to serve my area, so that support reflects the
people who actually live there.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-014   Depends on: US-0009, US-0014
AC:
  Scenario: Resident endorses once
    Given a verified person resident inside the petition's declared jurisdiction
    When they endorse
    Then the count increases by exactly one and their identity is not published
  Scenario (negative): Outsider endorses
    Given a person resident outside the declared jurisdiction
    When they attempt to endorse
    Then the endorsement is refused as out-of-jurisdiction
  Scenario (adversarial): Double endorsement
    Given a resident who has already endorsed
    When they endorse again from any device
    Then the count does not change
```
```
US-0017  Withdraw my endorsement      (FE-007 · EP-03)
As an endorser who changed my mind, I want to withdraw before the party activates, so that my support
is not permanent by accident.
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-015   Depends on: US-0016
AC:
  Scenario: Withdrawal before activation
    Given an endorser and a petition that has not activated
    When they withdraw
    Then the count decreases by one and no identity is revealed
  Scenario (negative): Withdrawal after activation
    Given a party that has activated
    When a former endorser attempts to withdraw
    Then the request is refused with an explanation that activation is final
```
```
US-0018  Watch a petition's progress publicly      (FE-007 · EP-03)
As any citizen or journalist, I want to see how close a petition is to its bar, so that the process is
legible without anyone's identity being exposed.
Owner: Erik Lindqvist   Priority: Should   Points: 3   Implements: FR-017   Depends on: US-0016
AC:
  Scenario: Public progress
    Given an active petition
    When anyone views it, with or without an account
    Then the current count, threshold, percentage and time remaining are shown
  Scenario (negative): No identities, no absentees
    When the petition page and every export are examined
    Then no endorser is identified and no list of persons who have not endorsed exists
```
```
US-0019  Compute a threshold from independent population sources      (FE-008 · EP-03)
As an auditor, I want the bar derived from at least two independent sources, so that a single bad or
manipulated statistic cannot make activation trivial or impossible.
Owner: Yuki Sato   Priority: Must   Points: 8   Implements: FR-009, FR-016   Depends on: US-0010
AC:
  Scenario: Sources agree
    Given two independent sources agreeing within the published tolerance and a closed dispute window
    When a threshold is computed
    Then the threshold, the denominator and both source identities are published and reproducible
  Scenario (negative): Sources disagree
    Given two sources disagreeing beyond the tolerance
    When a threshold computation is attempted
    Then it is refused and the discrepancy is published
```
```
US-0020  Challenge a denominator before it is used      (FE-008 · EP-03)
As a researcher, I want a window to dispute a population figure, so that an error is caught before it
decides whether a party can exist.
Owner: Yuki Sato   Priority: Must   Points: 5   Implements: FR-009   Depends on: US-0019
AC:
  Scenario: Dispute filed in window
    Given a published denominator inside its dispute window
    When a dispute is filed with evidence
    Then the denominator is marked disputed and is not used until resolved
  Scenario (negative): Dispute after window
    Given a denominator whose window has closed and which is in use
    When a dispute is filed
    Then it is recorded for the next revision and does not retroactively alter any activation
```
```
US-0021  Have a petition expire rather than linger forever      (FE-008 · EP-03)
As a citizen browsing petitions, I want stale petitions archived, so that the platform shows live
politics rather than a graveyard.
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-013   Depends on: US-0016
AC:
  Scenario: Expiry and archive
    Given a petition that reaches its expiry without meeting the threshold
    When expiry occurs
    Then it moves to an immutable archive and is removed from active listings
  Scenario (negative): Immediate identical re-petition
    Given a drafter whose petition just expired
    When they publish a substantially identical charter in the same jurisdiction inside the cooldown
    Then publication is refused with the earliest permitted date
```
```
US-0022  Watch a party activate itself      (FE-009 · EP-03)
As a drafter, I want the party to switch on automatically when the bar is met and held, so that there
is nobody to lobby, delay or bribe.
Owner: Tomás Ferreira   Priority: Must   Points: 8   Implements: FR-018   Depends on: US-0019
**Blocked pending OI-08** (dwell period unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
AC:
  Scenario: Threshold met and held
    Given a petition at or above threshold continuously for the published dwell period (example — non-normative; normative value set at OI-08 closure)
    When the dwell period elapses
    Then the party activates automatically with no human approval step in the path
    And the activation record immutably holds the charter version, count, denominator and its sources
  Scenario (negative): Threshold not held
    Given a petition that crossed the threshold but fell below it during the dwell period
    When the dwell period elapses
    Then the party does not activate and the petition remains open
  Scenario (adversarial): Override attempt
    When any employee, operator, funder or office-holder attempts to activate, block, waive or lower
      a threshold for a specific party
    Then no such capability exists, and the attempt is refused and publicly logged
```
```
US-0023  Keep a party inside the jurisdiction it earned      (FE-009 · EP-03)
As a resident, I want a party that met my district's bar not to silently become a national party, so
that thresholds cannot be laundered.
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-019   Depends on: US-0022
AC:
  Scenario (negative): Jurisdiction change refused
    Given an activated party
    When any actor attempts to change its declared jurisdiction
    Then the change is refused
  Scenario: Expansion by fresh petition
    Given the party wishes to operate in another jurisdiction
    When it petitions there
    Then it must meet that jurisdiction's own threshold independently
```

### EP-04 · Open, equal membership

```
US-0024  Join a party without asking anyone      (FE-010 · EP-04)     [REFERENCE STORY = 3 points]
As a citizen, I want to join any live party directly, so that no elite decides whether I belong.
Owner: Grace Mbeki   Priority: Must   Points: 3   Implements: FR-020   Depends on: US-0022
AC:
  Scenario: Direct join
    Given an active party and a verified citizen who is not a member
    When the citizen joins
    Then membership takes effect immediately with no approval, sponsorship, interview, invitation or fee
  Scenario (adversarial): Expulsion attempt
    When a drafter, office-holder, funder or operator attempts to reject, remove or suspend that member
    Then no such capability exists and the attempt is refused and logged
```
```
US-0025  Leave a party instantly      (FE-010 · EP-04)
As a member who no longer agrees, I want to leave at once with no penalty, so that exit is a real
check on the party.
Owner: Grace Mbeki   Priority: Must   Points: 3   Implements: FR-022   Depends on: US-0024
AC:
  Scenario: Immediate exit
    Given a member of an active party
    When they leave
    Then membership and all governance rights in that party end immediately
    And no approval, notice period or penalty is applied
  Scenario (negative): Exit blocked
    When any actor attempts to prevent or delay a member's exit
    Then no such capability exists
```
```
US-0026  See membership only in aggregate      (FE-010 · EP-04)
As a member, I want membership numbers public but individuals invisible, so that belonging to a party
never makes me a target.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-020, NFR-001, NFR-024   Depends on: US-0024
AC:
  Scenario: Aggregate visible
    Given an active party
    When anyone views it
    Then total membership and its regional breakdown are shown
  Scenario (adversarial): Roster extraction
    When any member, office-holder, journalist, operator or lawful demand seeks the list of members
    Then no interface, export, log or record yields any individual's membership
```
```
US-0027  Cast exactly one equal vote      (FE-011 · EP-04)
As a member, I want my vote to weigh exactly the same as the founder's, so that "equal standing" is
enforced rather than promised.
Owner: Grace Mbeki   Priority: Must   Points: 5   Implements: FR-021   Depends on: US-0024
AC:
  Scenario: Equal weight regardless of attributes
    Given members differing in tenure, office, contribution history and region
    When any party ballot is tallied
    Then each member's vote is counted exactly once with identical weight
  Scenario (negative): Weighting configuration
    When a configuration is attempted that weights a vote by any attribute whatsoever
    Then the configuration is rejected and the attempt is logged
```
```
US-0028  Gain nothing by paying      (FE-011 · EP-04)
As an ordinary member, I want a large donor to have exactly my rights, so that money cannot buy the
party.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-051, FR-035   Depends on: US-0027
AC:
  Scenario: Maximum contributor has ordinary rights
    Given a member who has contributed the maximum permitted amount
    When they act in any governance capacity
    Then their standing, vote weight, proposal precedence, candidacy eligibility, ballot ordering and
      visibility are identical to a member who has contributed nothing
  Scenario (adversarial): Buying or transferring a right
    When any actor attempts to buy, sell, lend, delegate, proxy or assign a vote, endorsement,
      membership or nomination right
    Then no such operation exists in the system and the attempt fails
```
```
US-0029  Wait out a maturation period before governing      (FE-012 · EP-04)
As a long-standing member, I want brand-new members to wait before they can vote, so that a party
cannot be taken over overnight.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-023   Depends on: US-0024
**Blocked pending OI-08** (maturation period unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
AC:
  Scenario: New member is not yet eligible
    Given a member who joined one hour ago and a maturation period that has not elapsed (example — non-normative; normative value set at OI-08 closure)
    When they attempt to vote, propose, nominate or sign a recall
    Then the action is refused and the date their rights begin is shown
  Scenario (adversarial): Mass flood
    Given 100,000 accounts joining within one hour while a proposal is open
    When that proposal is tallied
    Then none of those accounts is counted
```
```
US-0030  Be protected from churn gaming      (FE-012 · EP-04)
As an auditor, I want join/leave cycling rate-limited, so that a person cannot recycle their single
credential to manufacture apparent support.
Owner: Rafael Duarte   Priority: Must   Points: 3   Implements: FR-023   Depends on: US-0029
AC:
  Scenario (adversarial): Rapid rejoin
    Given a person who has left and rejoined a party twice within the published window
    When they attempt a further transition
    Then the transition is refused with the earliest permitted date
  Scenario: Legitimate change unaffected
    Given a person making their first move between parties in a year
    When they leave one party and join another
    Then both actions succeed without delay
```
```
US-0073  Be limited to one party at a time      (FE-030 · EP-04)
As a member, I want the platform to enforce a single active membership so that no one can hold sway
in multiple parties simultaneously.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-064   Depends on: US-0024
AC:
  Scenario: Switch parties voids old membership and resets tenure
    Given a member of party A who requests to join party B
    When the join request is processed
    Then membership in party A is voided, membership in party B takes effect, and the tenure clock resets to zero
  Scenario (adversarial): Simultaneous dual membership attempt
    When a member attempts to hold membership in two parties simultaneously through any mechanism
    Then no such dual-membership state exists and the attempt fails
  Scenario (negative): Vote before tenure re-established
    Given a member who joined party B after leaving party A less than one month ago
    When they attempt to vote in party B before one month of membership has elapsed
    Then the vote is rejected as tenure not yet met
```
```
US-0078  Benefit from new-party tenure waiver without losing anti-capture protection      (FE-033 · EP-04)
As a founding member of a brand-new party, I want to vote before the one-month tenure requirement
applies, so that the party can act immediately, while knowing anti-capture controls still protect us.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-068   Depends on: US-0029
AC:
  Scenario: Tenure waived in party's first three months
    Given a party in its first three calendar months of active status
    When a founding member who joined before activation attempts to vote
    Then the one-month tenure requirement is waived and the vote is accepted
  Scenario (adversarial): Anti-capture controls remain active during waiver
    Given a sudden flood of 10,000 new members joining the new party within one hour
    When a proposal snapshot is taken
    Then growth-surge defence controls and churn rate limits apply unchanged — UT-0220 confirms this
  Scenario: Waiver ends at three months
    Given a party that has been active for three calendar months
    When a new member who joined during that period attempts to vote before their one-month mark
    Then the standard one-month tenure requirement applies and the action is refused with the date rights begin
```

### EP-05 · Proposals, charter amendment & governance stability

```
US-0031  Put a proposal to my party      (FE-013 · EP-05)
As a matured member, I want to place any proposal in front of the membership, so that the agenda is
not controlled by whoever holds office.
Owner: Tomás Ferreira   Priority: Must   Points: 5   Implements: FR-024   Depends on: US-0029
AC:
  Scenario: Unfiltered submission
    Given a matured member
    When they submit a proposal with a declared tier
    Then it is accepted with no pre-screening, moderation or approval by any actor
  Scenario (adversarial): Suppression attempt
    When an office-holder, drafter or operator attempts to block, hide, delay or reorder that proposal
    Then no such capability exists and the attempt is refused and logged
```
```
US-0032  Withdraw or amend my proposal before voting opens      (FE-013 · EP-05)
As a proposer, I want to fix or retract a proposal before people vote, so that a typo does not become
a permanent charter clause.
Owner: Tomás Ferreira   Priority: Should   Points: 3   Implements: FR-029   Depends on: US-0031
AC:
  Scenario: Edit before opening
    Given a proposal that has not opened for voting
    When the proposer amends or withdraws it
    Then the change is applied and published
  Scenario (negative): Edit after opening
    Given a proposal that has opened
    When the proposer attempts to amend or withdraw it
    Then the attempt is refused
  Scenario (adversarial): Flooding
    Given a member submitting proposals beyond the published per-period limit
    When they submit another
    Then it is refused with the earliest permitted time
```
```
US-0033  Have bigger changes need broader consent      (FE-014 · EP-05)
As a member, I want charter changes to need far more support than routine decisions, so that a thin
majority cannot rewrite what the party is.
Owner: Tomás Ferreira   Priority: Must   Points: 8   Implements: FR-025   Depends on: US-0031
AC:
  Scenario: Tier rules enforced
    Given a charter-tier proposal requiring 40% quorum and 66% approval
    When it closes at 45% quorum and 70% approval
    Then it passes and enters its timelock
  Scenario (negative): Quorum missed
    When it closes at 39% quorum and 90% approval
    Then it fails and the failing condition is published
  Scenario (negative): Supermajority missed
    When it closes at 45% quorum and 60% approval
    Then it fails and the failing condition is published
```
```
US-0034  See a proposal's exact bar before I vote      (FE-014 · EP-05)
As a member, I want the tier, quorum, supermajority and timelock shown before I vote, so that the
rules cannot be reinterpreted after the result.
Owner: Nadia Hassan   Priority: Must   Points: 3   Implements: FR-025, NFR-023   Depends on: US-0033
AC:
  Scenario: Rules displayed
    Given an open proposal
    When a member opens it
    Then its tier, quorum, supermajority, timelock and close time are shown in plain language
  Scenario (negative): Rules changed mid-vote
    When any actor attempts to change any of those values while the proposal is open
    Then the change is refused and logged
```
```
US-0035  Have a timelock between a decision and its effect      (FE-015 · EP-05)
As a member, I want a public waiting period before a passed change takes effect, so that I have time
to react, argue or leave.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-026   Depends on: US-0033
**Blocked pending OI-08** (timelock durations unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
AC:
  Scenario: Pending change is visible and not yet effective
    Given a passed charter-tier proposal with its tier's published timelock duration (example — non-normative — 14 days; normative value set at OI-08 closure)
    When one day less than the full timelock has elapsed
    Then the change has not taken effect and is publicly listed as pending with its effective date
  Scenario (adversarial): Bypass attempt
    When any actor attempts to shorten, waive, skip or bypass the timelock
    Then no such capability exists and the attempt is refused and logged
```
```
US-0036  Protect founding clauses from a sudden crowd      (FE-015 · EP-05)
As a founding member, I want entrenched clauses to require the highest bar and long-standing members,
so that a flood of newcomers cannot capture what the party stands for.
Owner: Rafael Duarte   Priority: Must   Points: 8   Implements: FR-027   Depends on: US-0035
AC:
  Scenario: Entrenched rules applied
    Given a charter clause designated entrenched
    When a proposal to amend it opens
    Then it takes the highest tier and the longest timelock
    And only members whose membership predates the proposal by the published minimum age (example — non-normative; normative value set at OI-08 closure) count toward quorum
  Scenario (adversarial): Mob capture
    Given a party of 10,000 members of whom 9,000 joined in the last week
    When they vote to amend an entrenched founding clause
    Then quorum is not met and the amendment fails
```
```
US-0037  Fix the electorate when voting opens      (FE-016 · EP-05)
As a member, I want the eligible set frozen at the moment a proposal opens, so that voting power
cannot be acquired mid-vote.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-028   Depends on: US-0031
AC:
  Scenario: Snapshot published
    Given a proposal opened at time T
    When it opens
    Then its eligible-voter set is fixed at T and is publicly reproducible
  Scenario (adversarial): Late acquisition
    Given people who join, mature or change residency after T
    When they attempt to vote on that proposal
    Then they are refused as ineligible for that proposal
```

### EP-06 · Anonymous, receipt-free voting

```
US-0038  Vote without anyone knowing it was me      (FE-017 · EP-06)
As a member, I want my ballot untraceable to me, so that my politics cannot cost me my job, my safety
or my family.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 13   Implements: FR-030, NFR-001   Depends on: US-0037
AC:
  Scenario: Eligible and unlinkable
    Given a closed ballot with 5,000 cast votes
    When Trumocracy, an operator, an attestor and the party jointly analyse everything they hold
    Then an adversary holding {all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity} cannot link any cast ballot to its voter with advantage > ε over 1/2 at 95% confidence across N ≥ 10,000 drawn ballot-person pairs (ε per Doc 02 NFR-001 / OI-10; provisional test value ε = 0.02)
    And the tally still proves each counted ballot came from exactly one eligible, not-yet-counted voter
  Scenario (adversarial): Ineligible voter
    Given a person who is not in the proposal's eligible set
    When they attempt to cast a ballot
    Then the ballot is refused and no information about the eligible set is leaked
```
```
US-0039  Be protected in a small ballot      (FE-017 · EP-06)
As a member of a tiny ward party, I want anonymity not to collapse because few people voted, so that
small-scale democracy is not a privacy trap.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: NFR-002   Depends on: US-0038
AC:
  Scenario: Anonymity floor enforced
    Given a ballot scope with fewer than 1,000 eligible actors
    When a member casts a ballot
    Then the action is withheld from publication or aggregated until the floor is met
    And the member is shown a plain-language explanation of the delay
  Scenario (negative): Floor cannot be disabled
    When any actor attempts to disable or lower the anonymity floor for a scope
    Then the attempt is refused and logged
```
```
US-0040  Find no way to hand my vote to someone else      (FE-017 · EP-06)
As a member, I want delegation and transfer to be structurally absent, so that vote brokers have
nothing to work with.
Owner: Erik Lindqvist   Priority: Must   Points: 3   Implements: FR-035   Depends on: US-0038
AC:
  Scenario (adversarial): Transfer attempted
    When any actor attempts to transfer, sell, lend, delegate, proxy, assign or inherit a vote,
      endorsement or nomination right
    Then no such operation exists and the attempt fails
  Scenario: Inspection confirms absence
    When the system is inspected for delegation, proxy or transfer capability
    Then none is found in any interface, record or configuration
```
```
US-0041  Be unable to prove how I voted      (FE-018 · EP-06)
As a member facing a vote buyer, I want it to be impossible to prove my choice even if I want to, so
that there is nothing to sell.
Owner: Aisha Nkemdirim   Priority: Must   Points: 13   Implements: FR-031, NFR-003   Depends on: US-0038
AC:
  Scenario (adversarial): Voter cooperates fully with a buyer
    Given a voter who has cast a ballot and wants to prove their choice
    When they use every function, export, screenshot and stored artefact available to them
    Then they cannot produce anything that distinguishes their actual choice from any other admissible choice
  Scenario (adversarial): Device seized after the fact
    Given an adversary with full access to the voter's unlocked device after voting
    When they inspect all local state
    Then they cannot determine how the voter voted
```
```
US-0042  Quietly change a vote I was forced to cast      (FE-018 · EP-06)
As a member who was watched while voting, I want to vote again later invisibly, so that coercion buys
nothing.
Owner: Aisha Nkemdirim   Priority: Must   Points: 13   Implements: FR-032   Depends on: US-0041
AC:
  Scenario: Last ballot counts
    Given a voter who cast a ballot under observation
    When they cast a replacement ballot before the ballot closes
    Then only the last ballot is counted
  Scenario (adversarial): Coercer looks for evidence of the override
    When the coercer inspects the public record, the voter's device and every notification
    Then nothing indicates that a replacement occurred or how many ballots were cast
  Scenario (negative): After close
    Given a ballot that has closed
    When a voter attempts a replacement
    Then it is refused and the original stands
```
```
US-0043  See no results until voting ends      (FE-018 · EP-06)
As a member, I want no running tally, so that nobody can be pressured by, or coordinate around,
partial results.
Owner: Aisha Nkemdirim   Priority: Should   Points: 3   Implements: FR-034   Depends on: US-0038
AC:
  Scenario: Embargo holds
    Given an open ballot
    When anyone — member, office-holder, operator or the public — queries it
    Then no interim tally, partial count, turnout-by-option figure or projection is available
  Scenario: Release on close
    When the ballot closes
    Then the full result is published
```
```
US-0044  Re-count the result myself      (FE-019 · EP-06)
As a journalist with no account, I want to reproduce a tally from public data, so that I do not have
to take Trumocracy's word for it.
Owner: Erik Lindqvist   Priority: Must   Points: 8   Implements: FR-033   Depends on: US-0038
AC:
  Scenario: Independent reproduction
    Given a closed ballot
    When a third party re-computes the result from public data alone with no cooperation from Trumocracy
    Then their result matches the published result exactly
    And they learn no individual vote in the process
  Scenario (adversarial): Tampered result
    Given a published result that does not match the underlying public data
    When any third party runs the reproduction
    Then the mismatch is detected and reported
```
```
US-0045  Understand the result without expertise      (FE-019 · EP-06)
As an ordinary member, I want the result explained in plain language, so that verifiability is not
only for experts.
Owner: Nadia Hassan   Priority: Must   Points: 3   Implements: FR-033, NFR-023, NFR-011   Depends on: US-0044
AC:
  Scenario: Plain-language result
    Given a closed ballot
    When a member views the result
    Then outcome, turnout, quorum and threshold status are stated in plain language at grade-8 reading level
    And a one-tap route to the independent verification instructions is offered
  Scenario: Accessible result
    When the result screen is audited against WCAG 2.2 AA by screen reader and keyboard/switch at 200% text scale
    Then zero Level A or AA failures are found
```

### EP-07 · Localized nomination & internal election

```
US-0046  Stand for office where I actually live      (FE-020 · EP-07)
As a member, I want to nominate myself for my own ward's office, so that representation is local and
nobody parachutes in.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-036   Depends on: US-0029
AC:
  Scenario: In-scope self-nomination
    Given a matured member resident in ward W
    When they nominate themselves for an office whose region is W
    Then the nomination is accepted pending endorsements
  Scenario (negative): Out-of-scope nomination
    Given the same member nominating for an office in ward X where they do not reside
    Then the nomination is refused as out-of-scope
  Scenario (adversarial): Nominating someone else
    When a member attempts to nominate a different person
    Then the action is refused
```
```
US-0047  Gather local nomination endorsements      (FE-020 · EP-07)
As a candidate, I want to show a minimum of local backing before appearing on a ballot, so that
ballots are not flooded with unserious entries.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-036   Depends on: US-0046
AC:
  Scenario: Threshold reached
    Given a nomination requiring N endorsements from matured members resident in the region
    When N valid endorsements are recorded
    Then the candidacy proceeds
  Scenario (negative): Non-resident endorsement
    Given an endorsement from a matured member resident elsewhere
    Then it is not counted toward N
```
```
US-0048  Withdraw my candidacy before the ballot locks      (FE-020 · EP-07)
As a candidate whose circumstances changed, I want to withdraw before the ballot locks, so that I am
not trapped on a ballot.
Owner: Aisha Nkemdirim   Priority: Should   Points: 3   Implements: FR-036, FR-038   Depends on: US-0047
AC:
  Scenario: Withdrawal accepted
    Given a candidacy and a ballot that has not locked
    When the candidate withdraws
    Then they are removed from the candidate set and the removal is published
  Scenario (negative): After lock
    Given a ballot that has locked
    When the candidate attempts to withdraw
    Then the attempt is refused and the disclosure remains in effect as consented
```
```
US-0049  Choose, knowingly, to become public      (FE-021 · EP-07)
As a member becoming a candidate, I want to be told exactly what I am giving up before I give it up,
so that going public is a real choice.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-037, FR-038   Depends on: US-0046
AC:
  Scenario: Separate informed consent
    Given a member about to publish a candidacy
    When they proceed
    Then a separately recorded consent is required, stating that their real-world identity becomes
      public, that disclosure is irreversible for the candidacy and any resulting term, and that it
      can be revoked only by withdrawing before the ballot locks
    And the candidacy is not published until that consent is recorded
  Scenario (negative): No consent, no publication
    Given a candidacy where consent was declined
    Then nothing about that person is published
```
```
US-0050  Stay invisible if I am not a candidate      (FE-021 · EP-07)
As an ordinary member, I want the disclosure asymmetry to hold absolutely, so that being active in a
party never exposes me.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-037, NFR-024   Depends on: US-0049
AC:
  Scenario (adversarial): Identity hunt
    Given any person who is not a consenting candidate or office-holder
    When every interface, export, log, notification and public record is examined
    Then their real-world identity is not disclosed by any path
  Scenario (adversarial): Inference from candidate data
    When candidate records are cross-referenced with public party data
    Then no non-candidate member's identity or membership can be inferred
```
```
US-0051  Vote in my ward's election only      (FE-022 · EP-07)
As a resident member, I want only my ward's members choosing my ward's representative, so that local
offices are decided locally.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-039   Depends on: US-0038, US-0047
AC:
  Scenario: In-scope voting
    Given an election for (region R, office O)
    When a matured member resident in R votes
    Then the ballot is accepted
  Scenario (negative): Out-of-scope voting
    Given a matured member resident outside R
    When they attempt to vote
    Then the ballot is refused as out-of-scope
```
```
US-0052  Rely on a timetable nobody can move      (FE-022 · EP-07)
As a candidate, I want the rules fixed once the election opens, so that they cannot be changed to
suit whoever is losing.
Owner: Aisha Nkemdirim   Priority: Must   Points: 3   Implements: FR-039   Depends on: US-0051
AC:
  Scenario: Published before opening
    Given an election about to open
    When it opens
    Then its full timetable, candidate set and tie-break rule are already published
  Scenario (adversarial): Change after opening
    When any actor attempts to change the timetable, candidate set or tie-break rule after opening
    Then the change is refused and the attempt is logged
```
```
US-0053  Take office without anyone confirming it      (FE-022 · EP-07)
As an elected member, I want the office assigned by code on close, so that no committee can decline
to seat me.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-040, FR-041   Depends on: US-0052
AC:
  Scenario: Automatic assignment
    Given a closed election with a determined winner
    When the close is processed
    Then the result is published and the office role is assigned automatically in code
    And no confirmation, ratification, veto or appointment step is available to any actor
  Scenario: Term expiry
    Given an office with a charter-declared fixed term
    When the term ends without a fresh election
    Then the office expires automatically
```
```
US-0074  Cast a feedback vote on a candidate      (FE-031 · EP-07)
As a matured member, I want to signal my view of each candidate with one vote, so that the aggregate
tells the membership something real about suitability.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-065   Depends on: US-0047
AC:
  Scenario: Upvote scores +3
    Given a matured member who has not yet voted on candidate C in election E
    When they cast an upvote
    Then candidate C's tally increases by 3 and the member cannot vote on C again in E
  Scenario: Downvote scores -1
    Given a matured member who has not yet voted on candidate C in election E
    When they cast a downvote
    Then candidate C's tally decreases by 1 and the member cannot vote on C again in E
  Scenario (adversarial): Second feedback vote on same candidate
    Given a member who has already cast a feedback vote on candidate C in election E
    When they attempt another feedback vote on C in E
    Then the attempt is refused as already-voted
```
```
US-0075  See aggregate candidate feedback but not individual votes      (FE-031 · EP-07)
As a member deciding how to vote in a post-debate member vote, I want to see the aggregate feedback
score but not who voted how, so that pressure from local strongmen cannot follow individual votes.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-065   Depends on: US-0074
AC:
  Scenario: Aggregate tally is public
    Given feedback votes cast by multiple members on a candidate
    When the public record is viewed
    Then the aggregate tally (sum of +3 upvotes and -1 downvotes) is shown
  Scenario (adversarial): Individual vote inspection
    Given a member who cast a downvote on a local political figure
    When any actor inspects every interface, export, log and public record
    Then no individual feedback vote is linkable to its caster
```
```
US-0076  Complete three debates before a candidacy proceeds to the ballot      (FE-032 · EP-07)
As a member voter, I want every candidate to have addressed local conditions, local problems, and the
work required before appearing on a major election ballot (as defined in Doc 02 §14 Glossary and FR-066),
so that I vote on record rather than on rumour.
Owner: Aisha Nkemdirim   Priority: Must   Points: 8   Implements: FR-066   Depends on: US-0047
AC:
  Scenario: Three debates scheduled and completed before a major election
    Given a major election (as defined in Doc 02 §14) approaching for office O with three candidates
    When debates are scheduled
    Then three debates per candidate are scheduled, covering local conditions, local problems, and the
      work required respectively
    And attendance attestation and the post-debate content reference are recorded on the verifiable record
  Scenario (adversarial): Candidate skips a debate
    Given a candidate who fails to attend their scheduled local-conditions debate
    When the absence is recorded
    Then their absence is publicly visible in their participation record and on their profile
  Scenario (negative): Ballot without completed debates
    When the system attempts to place a candidate on a ballot without three completed debates
    Then the action is refused and the missing debates are named
```
```
US-0077  See no automatic renomination of incumbents      (FE-032 · EP-07)
As a member, I want every election cycle to start fresh, so that holding office is not the same as
keeping it without accountability.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-067   Depends on: US-0076
AC:
  Scenario: Post-debate member vote determines candidacy
    Given three completed debates and a post-debate member vote that closes with candidate C net positive
    When the election ballot is assembled
    Then candidate C is included because the member vote passed, not because of incumbency
  Scenario (adversarial): Incumbent attempts automatic advance
    Given a sitting office-holder whose term is expiring
    When the next election cycle opens
    Then they receive no automatic placement on the ballot; they must complete the full debate cycle
  Scenario (negative): Ballot assembled without post-debate vote
    When an actor attempts to place any candidate on a ballot without a completed post-debate member vote
    Then the attempt is refused and logged
```

### EP-08 · Accountability: manifestos, records & mid-term recall

```
US-0054  Publish what my party promises      (FE-023 · EP-08)
As a party, we want a public, machine-readable manifesto with dated commitments, so that citizens can
hold us to specifics rather than slogans.
Owner: Erik Lindqvist   Priority: Should   Points: 5   Implements: FR-046   Depends on: US-0022
AC:
  Scenario: Manifesto published
    Given an active party
    When it publishes a manifesto and dated commitments
    Then each commitment carries a date, a status of in progress / met / not met, and evidence links
    And the whole is retrievable in a machine-readable form without an account
  Scenario (negative): No editorial judgement
    When Trumocracy is asked to rate, score or verify a commitment
    Then no such capability exists; only the party may set a status, and the history of status changes is public
```
```
US-0055  Read every version a party ever published      (FE-023 · EP-08)
As a citizen, I want to see what a party said before it changed its mind, so that quiet rewriting is
impossible.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-047   Depends on: US-0054
AC:
  Scenario: Supersede, never overwrite
    Given a published charter at version 3
    When the party amends it
    Then version 4 is created, version 3 remains publicly retrievable unchanged, and a diff between
      them is viewable
  Scenario (adversarial): Deletion attempt
    When any actor attempts to edit or delete version 3
    Then no such capability exists and the attempt is refused and logged
```
```
US-0056  See how my representative voted, while my own votes stay private      (FE-023 · EP-08)
As a member, I want my representative's office-capacity votes attributable and my own anonymous, so
that power is accountable and I am not.
Owner: Erik Lindqvist   Priority: Should   Points: 8   Implements: FR-048   Depends on: US-0053
AC:
  Scenario: Office votes attributed
    Given an office-holder voting in their office capacity
    When anyone views the governance record
    Then that vote is publicly attributed to the office-holder
  Scenario (adversarial): Member votes stay hidden
    Given the same person voting as an ordinary member in a party ballot
    When any observer analyses the public record
    Then that ballot cannot be linked to them
```
```
US-0057  Start a recall of my representative      (FE-024 · EP-08)
As a member in a ward, I want to begin removing a representative who has stopped delivering, without
asking permission, so that accountability is not limited to election day.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-042   Depends on: US-0053
AC:
  Scenario: Initiation opens
    Given a matured member resident in the office's region during the term
    When they initiate a recall of that office's holder
    Then the initiation opens without approval from the office-holder, any other office-holder, the
      drafter or any platform actor
  Scenario (adversarial): Suppression attempt
    When the office-holder or any actor attempts to block, hide or delay the initiation
    Then no such capability exists and the attempt is refused and logged
```
```
US-0058  Require a higher bar to remove than to elect      (FE-024 · EP-08)
As a member, I want recall to be genuinely harder than election, so that recall is accountability
rather than a permanent re-run.
Owner: Aisha Nkemdirim   Priority: Must   Points: 8   Implements: FR-043   Depends on: US-0057
**Blocked pending OI-08** (recall bar unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
AC:
  Scenario: Two stages, published in advance
    Given an office-holder and the published recall bar R% (example — non-normative: elected at 55%, recall bar 60%; normative value set at OI-08 closure)
    When a recall initiation reaches its signature threshold and the recall ballot closes below R%
    Then the recall fails and the office-holder remains
  Scenario: Successful recall
    When a later valid recall ballot closes at or above R%
    Then the recall succeeds
  Scenario (negative): Bars changed mid-process
    When any actor attempts to change either bar after initiation opens
    Then the change is refused
```
```
US-0059  Be protected from recall harassment      (FE-024 · EP-08)
As a newly elected representative, I want a grace window and a cooldown after a failed recall, so
that a losing faction cannot grind me down with repeated attempts.
Owner: Daniel Okonkwo   Priority: Should   Points: 3   Implements: FR-044, NFR-024   Depends on: US-0058
**Blocked pending OI-08** (grace/cooldown durations unset; story not Ready until OI-08 closes — owner: Tomás Ferreira)
AC:
  Scenario (negative): Recall inside the grace window
    Given an office-holder elected 5 days ago and the published grace window duration (example — non-normative: 30 days; normative value set at OI-08 closure)
    When a recall is initiated
    Then it is refused with the earliest permitted date
  Scenario (negative): Immediate re-attempt
    Given a recall that failed yesterday and a published cooldown
    When the same office is targeted again inside the cooldown
    Then the initiation is refused
```
```
US-0060  See a recalled representative removed automatically      (FE-024 · EP-08)
As a member, I want a successful recall to take effect by itself and trigger a by-election, so that
removal is real rather than symbolic.
Owner: Aisha Nkemdirim   Priority: Must   Points: 5   Implements: FR-045   Depends on: US-0058
AC:
  Scenario: Automatic revocation
    Given a recall ballot that closes successfully
    When the close is processed
    Then the office role is revoked automatically in code with no ratification step
    And a by-election for that (region, office) pair opens within the published number of days
  Scenario (adversarial): Clinging to office
    When the recalled office-holder or any actor attempts to retain, restore or delay revocation
    Then no such capability exists
```

### EP-09 · Public verifiability & the moderation-by-code boundary

```
US-0061  Find a public record of every governance action      (FE-025 · EP-09)
As an auditor, I want every governance action recorded tamper-evidently and free of personal data, so
that the whole system can be checked by outsiders.
Owner: Erik Lindqvist   Priority: Must   Points: 8   Implements: FR-054   Depends on: US-0001
AC:
  Scenario: Record emitted
    Given any governance action of any listed type
    When it completes
    Then a publicly readable, tamper-evident record sufficient to reconstruct the outcome is emitted
    And that record contains no personal data
  Scenario (adversarial): Post-hoc alteration
    Given an emitted record
    When it is altered
    Then the alteration is detectable by any third party
```
```
US-0062  Run the verifier myself      (FE-025 · EP-09)
As a researcher, I want an open-source tool that re-checks every count without any cooperation from
Trumocracy, so that trust is unnecessary.
Owner: Erik Lindqvist   Priority: Should   Points: 8   Implements: FR-055, NFR-021   Depends on: US-0061
AC:
  Scenario: Independent run
    Given the published verifier and public data
    When a third party with no account runs it
    Then it re-computes every published count, threshold and tally and reports agreement
  Scenario (adversarial): Injected discrepancy
    Given public data deliberately inconsistent with a published result
    When the verifier runs
    Then it reports disagreement and identifies the affected record
```
```
US-0063  Take my party's history and leave      (FE-025 · EP-09)
As a party, we want to export our complete public history in an open format, so that our right to
leave is the ultimate check on Trumocracy.
Owner: Erik Lindqvist   Priority: Should   Points: 5   Implements: FR-055, NFR-018   Depends on: US-0062
AC:
  Scenario: Complete export
    Given an active party
    When any member requests the public-history export
    Then a complete, documented, open-format export of charters, versions, counts, tallies and results
      is produced
  Scenario: Reconstitution
    When the export is loaded into an independent deployment
    Then the party's public history is reconstituted and verifies identically
```
```
US-0064  Confirm that nobody at Trumocracy has a lever      (FE-026 · EP-09)
As a sceptical citizen, I want to verify that no employee, funder or operator can touch a party, so
that "no gatekeepers" is a fact rather than a promise.
Owner: Daniel Okonkwo   Priority: Must   Points: 8   Implements: FR-056, NFR-017   Depends on: US-0061
AC:
  Scenario (adversarial): Maximum privilege attempt
    Given an actor holding the maximum privilege available in the system
    When they attempt to delete or edit published content, remove or suspend a member, alter a count
      or tally, block a lawful governance action, or reorder a candidate set
    Then no such capability exists and the attempt is refused and publicly logged
  Scenario: Unilateral rule change
    When Trumocracy, a funder or an operator attempts to change a platform-wide governance rule alone
    Then no such path exists and the change can proceed only through the tiered process and its timelock
```
```
US-0065  See every display-filtering action in public      (FE-026 · EP-09)
As a journalist, I want every piece of content filtered anywhere to be publicly logged with its legal
basis, so that legal compliance cannot become quiet censorship.
Owner: Sofia Marchetti   Priority: Must   Points: 5   Implements: FR-056, FR-057   Depends on: US-0064
AC:
  Scenario: Filtering is logged, record is intact
    Given content unlawful in jurisdiction J
    When display filtering is applied for J
    Then the public log records the jurisdiction, legal basis and affected item
    And the underlying record is unaltered and remains retrievable outside J
  Scenario (negative): Silent removal
    When any actor attempts to filter content without a public log entry, or to delete the underlying record
    Then the action is refused
```
```
US-0071  View my public participation profile      (FE-029 · EP-09)
As any citizen or observer, I want to see a member's participation record, so that active engagement
is visible and accountability extends beyond what a person says.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Implements: FR-062   Depends on: US-0061
SCR: SCR-21 (provisional)
AC:
  Scenario: Profile shows participation without ballot direction
    Given a verified citizen's profile viewed by any actor
    When the profile loads
    Then it shows: elections and ballots participated in (without ballot direction), current and past
      party memberships, petitions endorsed, proposals authored, and debates attended
    And no ballot direction is shown for any contested vote
  Scenario: Office-holder governance vote is an exception
    Given an elected representative's profile
    When their office-capacity governance vote is displayed
    Then the direction is attributed to them per FR-048
  Scenario (adversarial): No ballot direction findable
    When an actor inspects every profile element, export and public record combination
    Then no contested vote direction is discoverable for any ordinary member
```
```
US-0072  Confirm ballot direction is never shown on any profile or export      (FE-029 · EP-09)
As a privacy-conscious member, I want assurance enforced by test that no platform path reveals how I
voted, so that social or workplace pressure cannot be exerted using platform data.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 5   Implements: FR-063   Depends on: US-0071
SCR: SCR-21 (provisional)
AC:
  Scenario (adversarial): All surfaces inspected for ballot direction
    Given any member's ballot direction on any contested vote
    When every interface, log, export, public record and profile view is examined
    Then no ballot direction for that member is discoverable
    And UT-0700 confirms no ballot-direction field is reachable through any client surface
    And UT-0701 confirms no ballot-direction field is present in any public-record export
  Scenario: Office-holder exception only
    Given an elected representative who voted in official office capacity
    When that specific vote is inspected
    Then direction is publicly attributed — this is the sole permitted exception governed by FR-048
```

### EP-10 · Zero-friction access: cost, recovery, accessibility

```
US-0066  Do everything without a token, a wallet or a fee      (FE-027 · EP-10)
As a non-technical citizen, I want to never encounter crypto, so that participating feels like using
any ordinary app.
Owner: Hiroshi Tanaka   Priority: Must   Points: 8   Implements: FR-060, NFR-005, NFR-023   Depends on: US-0001
AC:
  Scenario: Full journey with no crypto
    Given a citizen with no cryptocurrency, wallet or balance
    When they complete enrol, draft, endorse, join, propose, vote, nominate, stand, recall and recover
    Then every flow completes without acquiring, holding or spending any token or payment instrument
    And USD 0.00 is charged to them at every step
  Scenario (negative): Jargon scan
    When every primary-flow screen is scanned
    Then none contains the words wallet, seed phrase, private key, gas, token, mint, chain, block or hash
```
```
US-0067  Be delayed, never denied, when sponsorship runs low      (FE-027 · EP-10)
As a heavy user during an election, I want exhaustion of the free budget to slow me down rather than
lock me out, so that funding limits never become disenfranchisement.
Owner: Hiroshi Tanaka   Priority: Must   Points: 5   Implements: FR-061   Depends on: US-0066
AC:
  Scenario: Graceful degradation
    Given a person who has exhausted their periodic sponsored-action budget
    When they attempt a legitimate governance action
    Then the action is queued with a plain-language explanation and an expected time
    And it is neither rejected, charged for, nor permanently denied
  Scenario (adversarial): Abuse
    Given an account generating actions far beyond the published budget
    When it continues
    Then its actions are throttled while every other person's actions are unaffected
```
```
US-0068  Get back in after losing my phone      (FE-028 · EP-10)
As a citizen who lost my only device, I want to recover access without ever having had a seed phrase,
so that a lost phone does not end my participation.
Owner: Amara Diallo   Priority: Must   Points: 13   Implements: FR-058, NFR-016   Depends on: US-0001
AC:
  Scenario: Successful recovery
    Given a citizen who lost their device and was never shown key material
    When they complete recovery
    Then control of their credential and residency scope is restored after the published timelock
    And a notification is sent to their registered channel with a cancellation window
  Scenario (adversarial): Thief-initiated recovery
    Given a thief who initiates recovery on a stolen device
    When the legitimate holder cancels during the window
    Then the recovery is aborted and access is not transferred
```
```
US-0069  Recover without anyone learning my politics      (FE-028 · EP-10)
As a recovering citizen, I want the people who help me recover to learn nothing about my memberships
or votes, so that recovery is not a privacy back door.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Implements: FR-059   Depends on: US-0068
AC:
  Scenario (adversarial): Helpers pool what they saw
    Given a completed recovery
    When every participant — helper, guardian, attestor, support agent, operator — pools everything
      they observed
    Then none can determine the subject's party memberships, past ballots, endorsements or governance history
  Scenario (negative): Notification leakage
    When recovery notifications and their metadata are inspected
    Then they reveal no party, ballot or governance activity
```
```
US-0070  Use the whole platform on a cheap phone, in my language      (FE-028 · EP-10)
As a citizen with a five-year-old handset, a slow connection and a screen reader, I want every primary
flow to work, so that the platform serves the people it claims to serve.
Owner: Nadia Hassan   Priority: Must   Points: 13   Implements: NFR-011, NFR-012, NFR-013, NFR-006, NFR-022   Depends on: US-0066
AC:
  Scenario: Reference device and network
    Given the reference device (2 GB RAM, Android 9) on a 64 kbit/s intermittent connection
    When each primary flow is exercised
    Then every flow completes, the primary screen is interactive within 5 s at p95, and the install is <= 15 MB
  Scenario: Accessibility
    When each primary flow is audited against WCAG 2.2 AA by screen reader and keyboard/switch at 200% text
    Then zero Level A or AA failures are found
  Scenario: Localisation
    Given each of the 8 launch locales including a right-to-left script
    When each primary flow is exercised
    Then no untranslated string appears and layout, dates, numbers and names render correctly
  Scenario (negative): Unsupported device
    Given a device below the supported matrix
    When the app is opened
    Then a clear, actionable message is shown rather than a broken screen
```
```
US-0081  Recover from a nullifier collision with a seven-day delay and veto      (FE-035 · EP-10)
As a citizen who has lost their key material but still holds their credential, I want the collision-
detection path to become a recovery rather than a permanent lock-out, so that losing keys is
survivable without creating a second identity.
Owner: Amara Diallo   Priority: Must   Points: 13   Implements: FR-071, FR-072   Depends on: US-0068
SCR: SCR-19 (provisional — re-confirm with architect)
AC:
  Scenario: Collision routes to recovery
    Given a citizen whose derived nullifier matches an existing record
    When they re-authenticate with their credential and prove current key ownership
    Then the system routes them to the recovery flow; no second identity is created
    And membership, tenure and governance history are confirmed intact
  Scenario: Seven-day delay and notification
    Given a recovery initiated
    When the recovery is submitted
    Then a seven-day delay is imposed, a notification is sent to the registered channel, and the veto window is open for the full delay
  Scenario (adversarial): Active-key holder vetoes
    Given an active-key holder who receives the recovery notification
    When they submit a veto signal during the seven-day window
    Then the recovery is aborted and the existing key remains in control
```
```
US-0082  Be barred from voting while a recovery delay is in progress      (FE-035 · EP-10)
As any member, I want to know that a credential undergoing key rotation cannot vote during the delay,
so that recovery windows cannot be exploited for vote manipulation.
Owner: Rafael Duarte   Priority: Must   Points: 5   Implements: FR-072   Depends on: US-0081
AC:
  Scenario: Vote attempt during delay is refused
    Given a credential that has initiated a nullifier-collision recovery and is within the seven-day delay
    When the credential attempts to cast any vote
    Then the vote is refused and the reason (recovery delay active) is returned
  Scenario: Normal voting resumes after delay
    Given the same credential after the seven-day delay has completed and keys have been rotated
    When it attempts to cast a vote
    Then the vote is accepted normally
  Scenario (adversarial): Attacker races recovery against a ballot
    Given a live ballot and an attacker who initiates recovery under the original key during the ballot
    When they attempt to vote under the original key before rotation completes
    Then the vote is refused while recovery is active; the ballot-scope nullifier prevents double-counting
```

## 7. Screen / UX inventory (provisional)

> **Provisional and non-binding.** The architect confirms, splits or merges these in Doc 03; the
> tester reconciles the final `SCR` links in the RTM (Doc 08). Every surface must satisfy `NFR-011`,
> `NFR-012`, `NFR-013` and `NFR-023`, and must define empty, loading, offline, sponsorship-queued,
> error and success states.

| Screen | Name | Feature | Implements |
|--------|------|---------|-----------|
| SCR-01 | Pre-enrolment disclosure & consent | FE-001 | FR-003, NFR-015, NFR-023 |
| SCR-02 | Attestor choice & enrolment | FE-001, FE-002, FE-034 | FR-001, FR-004, FR-069, FR-070 |
| SCR-03 | Residency attestation | FE-004 | FR-006, FR-008 |
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
| SCR-16 | Election & office record | FE-022 | FR-039, FR-040, FR-041 |
| SCR-17 | Manifesto, commitments & version history | FE-023 | FR-046, FR-047, FR-048 |
| SCR-18 | Recall initiation & ballot | FE-024 | FR-042, FR-043, FR-044, FR-045 |
| SCR-19 | Account recovery (seedless + collision recovery) | FE-028, FE-035 | FR-058, FR-059, FR-071, FR-072 |
| SCR-20 | Public transparency dashboard & filtering log | FE-025, FE-026 | FR-054, FR-056, FR-057, NFR-019 |
| SCR-21 | Public participation profile | FE-029 | FR-062, FR-063 |
| SCR-22 | Candidate feedback widget | FE-031 | FR-065 |
| SCR-23 | Debate schedule, attendance & post-debate vote | FE-032 | FR-066, FR-067 |

## 8. Non-functional backlog items

> Explicit backlog items, not assumptions. Each is scheduled work with a named owner.

| ID | Item | Implements | Owner | Priority |
|----|------|-----------|-------|----------|
| NF-01 | Adversarial privacy audit: correlation, timing and metadata deanonymisation attempts against a production-like dataset | NFR-001, NFR-002, RISK-06 | Dr. Lena Kowalczyk | Must |
| NF-02 | Independent security and cryptography audit, zero critical/high open at Gate 2 | NFR-009, CON-012, RISK-10 | Rafael Duarte | Must |
| NF-03 | Red-team exercise: flash governance takeover and mob charter capture simulations | NFR-009, RISK-03, RISK-04 | Rafael Duarte | Must |
| NF-04 | Cost-per-action instrumentation and budget alerting against the USD 0.01 median target | NFR-005 | Hiroshi Tanaka | Must |
| NF-05 | Reference-device and low-bandwidth performance harness in CI | NFR-006, NFR-012 | Nadia Hassan | Must |
| NF-06 | Censorship and operator-censorship simulations (blocked domain; withheld action) | NFR-014, NFR-025, RISK-08, RISK-09 | Chen Wei | Must |
| NF-07 | Rollback drill proving < 15 min restore, plus the open-ballot flag freeze | NFR-020 | Chen Wei | Must |
| NF-08 | Public governance-health dashboard (activation, turnout, attestor concentration, duplicate rate, sponsorship exhaustion, anonymity delays) with zero individually identifying fields | NFR-019 | Yuki Sato | Should |
| NF-09 | Availability SLO instrumentation and error-budget dashboard (citizen write path ≥ 99.5% monthly; public read ≥ 99.9% monthly); single-operator-failure drill confirming no governance action blocked > 60 min; automated alerting when error budget drops below 50% | NFR-007 | Chen Wei | Must |

## 9. Estimation approach

Modified Fibonacci (1, 2, 3, 5, 8, 13). **Reference story: US-0024 "Join a party" = 3 points.**
Anything estimated above 13 must be split before it enters a sprint. Estimates are re-baselined once
the architect publishes Doc 03, because several stories (US-0007, US-0038, US-0041, US-0042, US-0068)
carry the bulk of the technical unknown and are deliberately estimated pessimistically until then.
**Total (v1.1.1): 83 stories, approximately 499 points** (v1.0.0 was 70 stories at approximately 415 points (corrected from 396; prior ISS-07); 13 new stories from CR-v1.1.0 add approximately 84 points at preliminary estimates). _(ISS-07: v1.0.0 base corrected to actual point sum; total revised accordingly.)_

## 10. Backlog refinement cadence & WIP limits

- **Refinement:** Fortnightly, 60 minutes, product-owner-led; architect, engineer and tester consulted (aligned with Doc 13 §8.2). _(ISS-08: cadence corrected from "weekly" to "fortnightly" to match the project plan.)_
- **Entry condition:** a story is pulled only when it satisfies the Definition of Ready below.
- **WIP limits:** 3 stories in progress per engineer pair; **1** guardrail story
  (any story implementing a Must NFR or a guardrail FR) in review at a time — guardrails get
  undivided review attention.
- **Ordering rule:** the walking skeleton (US-0001 → US-0060 along the primary path) is not
  re-ordered for convenience. Cross-cutting stories US-0061, US-0066 and US-0070 are pulled forward
  and must be true of the first action ever taken in production.

## 11. Definition of Ready / Definition of Done (team-wide)

**Ready:** traces to an `FR`/`NFR` in Doc 02 · traces to a `DES-###` in Doc 03 (and a `SCR-##` if it
has UI) · Gherkin AC written, including at least one negative or adversarial scenario · owner named
(a person) · estimated · dependencies identified · privacy and coercion impact considered and stated.

**Done:** merged to trunk behind a flag · `UT-####` unit tests green · `TC-####` passing ·
telemetry emitted · accessibility checked (`NFR-011`) · no new personal data introduced (`NFR-010`
data-inventory check green) · **RTM row (Doc 08) complete** · reviewed and merge signed by
reviewer-qa (the engineer never merges their own work).

## 12. Traceability

Coverage assertion at v1.1.1 — to be independently verified by the tester in the RTM (Doc 08):

- **All 54 Must FRs** in Doc 02 v1.1.1 are implemented by at least one story.
- **Must-NFR → story/NF-item coverage map** (22 Must NFRs; ISS-01):
  NFR-001→US-0007, US-0038, NF-01 · NFR-002→US-0039, NF-01 · NFR-003→US-0041, US-0042 · NFR-004→US-0005, NF-01 ·
  NFR-005→US-0066, NF-04 · NFR-006→NF-05 · NFR-007→NF-09 (**new**) · NFR-009→NF-02, NF-03 ·
  NFR-010→US-0002, NF-01 · NFR-011→US-0070, FE-028 · NFR-012→NF-05 · NFR-013→US-0070, FE-028 ·
  NFR-014→NF-06 · NFR-015→US-0003, SCR-01 · NFR-016→US-0068, FE-028 · NFR-017→US-0065 ·
  NFR-020→NF-07 · NFR-021→US-0062 · NFR-022→US-0070 · NFR-023→US-0066, US-0003 ·
  NFR-024→US-0059, NF-08 · NFR-025→NF-06.
- Must FR → story map (v1.0.0 carries forward unchanged, v1.1.x new FRs appended below): FR-001→US-0001 · FR-002→US-0006, US-0007 ·
  FR-003→US-0002, US-0003 · FR-004→US-0004, US-0005 · FR-006→US-0008 · FR-007→US-0010 ·
  FR-008→US-0009 · FR-009→US-0019, US-0020 · FR-010→US-0011, US-0012 · FR-011→US-0014, US-0015 ·
  FR-014→US-0016 · FR-016→US-0019 · FR-018→US-0022 · FR-020→US-0024, US-0026 · FR-021→US-0027 ·
  FR-022→US-0025 · FR-023→US-0029, US-0030 · FR-024→US-0031 · FR-025→US-0033, US-0034 ·
  FR-026→US-0035 · FR-027→US-0036 · FR-028→US-0037 · FR-030→US-0038 · FR-031→US-0041 ·
  FR-032→US-0042 · FR-033→US-0044, US-0045 · FR-035→US-0028, US-0040 · FR-036→US-0046, US-0047 ·
  FR-037→US-0049, US-0050 · FR-039→US-0051, US-0052 · FR-040→US-0053 · FR-042→US-0057 ·
  FR-043→US-0058 · FR-045→US-0060 · FR-047→US-0055 · FR-051→US-0028 · FR-054→US-0061 ·
  FR-056→US-0064, US-0065 · FR-058→US-0068 · FR-059→US-0069 · FR-060→US-0066 · FR-061→US-0067.
- **v1.1.0 additions (CR-v1.1.0):** FR-062→US-0071 · FR-063→US-0072 · FR-064→US-0073 ·
  FR-065→US-0074, US-0075 · FR-066→US-0076 · FR-067→US-0077 · FR-068→US-0078 ·
  FR-069→US-0079 · FR-070→US-0080 · FR-071→US-0081 · FR-072→US-0082 · FR-073→US-0083.
- Should/Could FRs covered: FR-005 (deferred — see gap note), FR-012→US-0013 · FR-013→US-0021 ·
  FR-015→US-0017 · FR-017→US-0018 · FR-019→US-0023 · FR-029→US-0032 · FR-034→US-0043 ·
  FR-038→US-0048, US-0049 · FR-041→US-0053 · FR-044→US-0059 · FR-046→US-0054 · FR-048→US-0056 ·
  FR-055→US-0062, US-0063 · FR-057→US-0065.
- **Known gaps (carried from v1.0.0, declared, not hidden):** `FR-005` (credential revocation and
  appeal), `FR-049`/`FR-050`/`FR-052` (treasury caps, ledger, spend approval) and `FR-053` (party
  fork) have **no story yet**. All are Should or Could. They MUST be storied before their target
  sprint. Owner: **Priya Raghunathan**.
- `DES-###` links: **not yet assigned** — added after Gate 1 when Doc 03 is updated.
- `TC-####` links: **not yet assigned** — added by the tester in Doc 07.

---

### Downstream
Stories are built per Doc 06 (Coding & UT), verified by Doc 07 (Test Cases), and reconciled in
Doc 08 (RTM). No story may be started before Gate 1 re-affirmation at v1.1.0 clears.
