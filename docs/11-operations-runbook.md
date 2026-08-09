# Operations Runbook — Trumocracy

```
Document ID:   OPS-TRUMOCRACY
Version:       1.0.0
Status:        In Review  (becomes Living at Gate 2)
Owner:         Chen Wei — Reliability Lead (sre), Doc 13 §7.1
Source:        Doc 02 NFR-002/003/004/005/006/007/016/019/020/024/025 · Doc 03 §10.5–10.9 ·
               ADR-001, ADR-003, ADR-004, ADR-006, ADR-010, ADR-013, ADR-014 ·
               packages/contracts/src/core/* · packages/protocol/src/flags.js
Last updated:  2026-08-09
```

> **Based on:** Google SRE Workbook + Production Readiness Review. **Produced in:** Operate
> (authored before launch).
> _SLOs, monitoring, alert→action playbooks, incident response, on-call, and the refine-loop duty._

> **⚠ Status.** Every observed value in this document is `N/A — not yet measured`. Nothing is in
> production; Gate 2 (MS-13) is not approved. The targets are the requirements; the baselines will
> be established during the canary stage and this document becomes Living at that point.

---

## 1. Service summary

| Field | Value |
|-------|-------|
| Service / ID | **OPS-TRUMOCRACY** — party incubation, membership and governance protocol |
| Criticality / tier | **Tier-1.** Its users may be political dissidents; a privacy failure is a safety failure, not a service failure |
| Owner / on-call | **Chen Wei** (sre) — primary. Secondary: Samuel Oyelaran (Eng Lead). See §7 |
| Business capability | `BR-001`…`BR-012` (Doc 02) |
| Upstream dependencies | OP Stack L2 (Base) sequencer · Ethereum L1 (force-inclusion, blobs) · personhood issuers · residency attesters · population statistics sources · ERC-4337 bundler · IPFS pinning cluster · Arweave |
| Downstream consumers | citizens' PWA clients · independent indexer operators · journalists / auditors running `apps/verifier` · election commissions (evidence only, filed by a named human officer — `ADR-013 §1`) |
| **Kill switch** | `FeatureFlags.disable(flag, reason)` — one transaction from the emergency disabler. **Subtractive only.** It stops a capability being offered for future calls; it **cannot** stop a running vote, freeze state, or reverse anything (`ADR-010`, `CON-003`) |
| What we cannot do | pause the protocol · reverse a decision · identify a member · decrypt a ballot · remove a party. By construction, not by policy (`ADR-013 §3`) |

---

## 2. Architecture refresher

```
  citizen (PWA, proofs generated on-device)
      │  proof + nullifier + commitment    ── nothing personal ever crosses this line
      ▼
  [transport ladder]  hosted bundler → alternate bundler → self-pay → L1 force-inclusion
      ▼
  ┌─────────────────── L2 (Base) — the authority ───────────────────┐
  │ PersonhoodRegistry   identity tree, enrolment + action nullifiers│
  │ RegionRegistry       residency trees, attesters, population      │
  │ PartyRegistry        petitions → threshold → activation          │
  │ Party / Governor     membership, tiered proposals, tallies       │
  │ VerifierRegistry     circuit → verifier → zkeyHash → ceremony    │
  │ FeatureFlags         on-chain ship-dark + the kill switch        │
  └──────────────────────────────┬───────────────────────────────────┘
                                 │ events (the complete public API)
                    ┌────────────┴────────────┐
              indexer (cache, never          apps/verifier
              an authority — client           (anyone re-computes
              re-verifies everything)          every tally)
```

Full detail: **Doc 03** §5 (building blocks), §6 (runtime + degraded modes), §7 (deployment),
§10 (cross-cutting). Decisions: `docs/adr/ADR-001…ADR-014`.

---

## 3. SLIs / SLOs / error budget

### 3.0 ⭐ The rule that constrains every metric in this document

> **No SLI may be derived from an individual's behaviour.**
> (Doc 03 §10.6; `NFR-019` — governance metrics "MUST NOT expose any individual's activity";
> `NFR-001`, `NFR-024`, `ADR-014` rule 3.)

This is not a privacy footnote bolted onto a metrics design. It is a **design constraint on the
metrics themselves**, because a system that refuses to build a membership list and then builds an
observability stack that reconstructs one has achieved nothing. The reading record would be as
dangerous as the membership record we refused to build.

**How each metric is made incapable of individual attribution — the five rules:**

| # | Rule | Consequence |
|---|---|---|
| **R1** | **Count events, never actors.** Every SLI numerator and denominator is a count of *operations* or *aggregate state*, never a distinct-actor count keyed to anything stable. | No metric has a per-person cardinality dimension. |
| **R2** | **No identifier is ever a label.** Nullifiers, identity commitments, addresses, IPs, device IDs, session IDs and user-agent strings **MUST NOT** appear as a metric label, a log field, a trace attribute or a dashboard filter. | Nothing to join on, so no join can be demanded of us. |
| **R3** | **Aggregate before it lands.** Metrics are emitted pre-aggregated per interval; raw per-request records are **not persisted** by the indexer, the relayer or the gateway. Gateways run with **no logging** and are replaceable (`ADR-013 §3`). | The raw data does not exist to be subpoenaed or leaked. |
| **R4** | **Enforce the k-floor on published metrics too.** Any public metric partitioned by region, party or time bucket is **withheld or widened** until its bucket covers ≥ **1,000** eligible actors — the same `MIN_ANONYMITY_SET` the protocol enforces on actions (`NFR-002`, `DES-008`). A bucket of three tells you who the three are. | Small-bucket inference is closed, not merely discouraged. |
| **R5** | **Never correlate timing across surfaces.** No metric joins an on-chain event to an off-chain request by timestamp proximity. Off-chain latency is measured on operation *classes*, with jitter, never on individual operations traced end-to-end. | Timing correlation (`RISK-06`) is closed at the metrics layer, not just the protocol layer. |

**The test that keeps it honest.** A quarterly **re-identification review** (Dr. Lena Kowalczyk,
privacy owner) takes the *entire* metrics and logging corpus for a quarter and attempts to link any
two actions to the same person. **Zero linkages is the pass bar** (`NFR-001`). If a proposed metric
cannot pass this review, the metric is deleted — the metric loses, never the privacy property.

**What this costs us, stated honestly.** We give up per-user funnels, cohort retention, session
replay, per-user error attribution and "which users hit this bug". Debugging is harder. We accept
that. `NFR-022` (≥80% of first-time users complete enrol→endorse unaided) is therefore measured in
**moderated usability studies with consenting participants** (≥200 per launch locale) — never by
instrumenting production.

### 3.1 Service SLIs / SLOs

Window is **calendar month** unless stated. "Observed" is the running measurement.

| # | SLI | Definition (event-counted, never actor-counted) | SLO | Error budget | Observed | Trace |
|---|---|---|---|---|---|---|
| **S-01** | **Citizen write path availability** | successful state-changing citizen operations ÷ attempted, across the full transport ladder (bundler → alt → self-pay → force-inclusion). An operation that succeeds on a fallback **counts as a success** — the ladder is the product | **≥ 99.5%** monthly | 0.5% ≈ **3 h 39 m**/month | `N/A — not yet measured` | `NFR-007` |
| **S-02** | **Public read / verify availability** | successful public read + tally-verification requests ÷ attempted, measured from ≥3 external probe locations incl. ≥1 in a censoring-risk jurisdiction | **≥ 99.9%** monthly | 0.1% ≈ **43 m**/month | `N/A — not yet measured` | `NFR-007` |
| **S-03** | **Cost per citizen action** | total platform-borne fees in the interval ÷ count of sponsored citizen operations. **A ratio of two totals — never a per-person cost** | **median < USD 0.01**, p99 < USD 0.05, citizen pays **USD 0.00** always | any breach of median for >1 h | `N/A — not yet measured` | `NFR-005`, `KC-6` |
| **S-04** | **Action acknowledgement latency** | p95 time from submit to accepted, measured on operation *classes*, jittered (R5) | **p95 ≤ 5 s** | 5% of ops | `N/A — not yet measured` | `NFR-006` |
| **S-05** | **Finalisation latency** | p95 time from submit to finalised on the verifiable record | **p95 ≤ 120 s** | 5% of ops | `N/A — not yet measured` | `NFR-006` |
| **S-06** | **Proof-failure rate** | proof verifications rejected ÷ attempted, **partitioned by circuit id only** — never by submitter | **≤ 0.5%**, and ≤ 3× the 7-day trailing baseline | 0.5% | `N/A — not yet measured` | `RISK-10`, `DES-038` |
| **S-07** | **Sponsorship burn** | daily paymaster spend vs the p99 trailing daily baseline; and **days of runway remaining** against the 90-day buffer | burn **< 3× p99** daily; runway **≥ 90 days** at p95 fees | breach trips the circuit-breaker | `N/A — not yet measured` | `ADR-014`, `ADR-001`, `RISK-15` |
| **S-08** | **Sponsorship exhaustion rate** | count of operations that fell back to self-pay ÷ total. **Degradation, never denial** — a denial here is a Sev-1 | **< 1%** falling back; **0** denied for lack of funds | 0 denials | `N/A — not yet measured` | `FR-061`, `NFR-019` |
| **S-09** | **Force-inclusion usage** | count of citizen operations that reached the chain via the L1 escape hatch, per interval, network-wide. **Never per party, never per region below the k-floor** | baseline **0**. Any non-zero sustained >1 h = suspected sequencer censorship | any sustained use | `N/A — not yet measured` | `NFR-025`, `RISK-09`, `DES-041` |
| **S-10** | **Alternative-path inclusion time** | p95 time for an operation refused by the primary path to be included by an alternative | **≤ 60 min** | 5% | `N/A — not yet measured` | `NFR-025`, `NFR-007` |
| **S-11** | **Indexer lag** | seconds between chain head and the indexer's processed head, per operator | **p95 < 30 s**, p99 < 120 s | p95 breach >15 min | `N/A — not yet measured` | `ADR-014` |
| **S-12** | **Indexer divergence** | count of fields where an indexer's value differs from a fresh from-chain rebuild, sampled hourly across all known operators | **0**, always | zero tolerance | `N/A — not yet measured` | `ADR-014` rule 2 |
| **S-13** | **Operator diversity** | count of *independent* operators, by class: pinning ≥3 geographically separate · indexer ≥2 · bundler ≥2 · attesters ≥2 per region · issuers ≥2 with ≥1 non-state · MACI committee 7 across ≥5 jurisdictions | as stated; **no class may fall to 1** | any class at 1 = Sev-2 | `N/A — not yet measured` | `ADR-003`, `ADR-006`, `ADR-014`, `NFR-025` |
| **S-14** | **Anonymity-set withholding** | count and duration of actions withheld because the scope held < 1,000 eligible actors. **Count and median delay only — never which action, never which region below the k-floor** | published; delay **p95 < 7 days** | rising trend | `N/A — not yet measured` | `NFR-002`, `DES-008` |
| **S-15** | **Recovery success rate** | successful account recoveries ÷ attempted, over a 14-day completion window | **≥ 99%** within 14 days; fraudulent **≤ 0.01%** | 1% | `N/A — not yet measured` | `NFR-016`, `RISK-11` |
| **S-16** | **Reproducible-build match** | served client bundle hash == independently rebuilt hash from the tagged commit, checked every deploy and hourly | **100%** | zero tolerance | `N/A — not yet measured` | `NFR-021`, `DES-050` |
| **S-17** | **Change-failure rate** | releases requiring a rollback or hotfix ÷ total releases, trailing 30 days | **< 15%** | governance signal | `N/A — not yet measured` | CLAUDE.md governance signals |
| **S-18** | **Rollback time** | measured elapsed time from rollback declared to verified, per event and per drill | **< 15 min** | any breach | `N/A — not yet measured` | `NFR-020`, Doc 10 §8.6 |
| **S-19** | **Promise-vs-actual** | each PR-FAQ (Doc 01) measurable promise vs its observed value, reported weekly | gap tracked, not zero | governance signal | `N/A — not yet measured` | CLAUDE.md; Doc 13 §1 |

### 3.2 Governance-health SLIs (published publicly — `NFR-019`, Doc 03 §10.6)

These are **product health**, not service health. They are published on a public dashboard because a
governance system that keeps its own health private is asking to be trusted rather than checked.
Every one is a count or a ratio over a population; **none can be inverted to an individual** (R1–R5),
and every partition obeys the k ≥ 1,000 floor (R4).

| # | Signal | Definition | Watch for | Source | Trace |
|---|---|---|---|---|---|
| **G-01** | **Activation counts** | `PartyActivated` events per region per period | zero over a long period (`KC-4` thesis failure); or a spike suggesting threshold miscalibration | chain events | `FR-016`, `RISK-15` |
| **G-02** | **Petition health** | median endorsements as % of requirement; expiry rate; count of live petitions | median < 10% of threshold at month 12 = `KC-4` | `Endorsed`, `PetitionExpired` | `RISK-15`, `KC-4` |
| **G-03** | **Turnout** | ballots cast ÷ eligible members at snapshot, per proposal, aggregated per tier. **Ratio of two counts; the numerator is votes, not voters-by-identity** | structural collapse in turnout; turnout > 100% (impossible — indicates a bug or a Sybil event) | `VoteCast`, `snapshotMembers` | `NFR-019` |
| **G-04** | **Quorum near-misses** | proposals finalised with `quorumReachedBps` within 10% below `quorumBps` | a rising rate means thresholds are calibrated wrong and the system is quietly failing to decide | `ProposalFinalized` | `NFR-019`, `OI-01` |
| **G-05** | **Recall rates** | recall petitions opened / succeeded ÷ office-holders, per period. **`recall` flag is OFF until Phase 3 — reports `N/A — capability not enabled`** | recall used as a harassment tool (`NFR-024`) | recall events | `FR-042`–`FR-045` |
| **G-06** | **Anomalous-growth events** | `AnomalousGrowth(fromCount, toCount, windowSeconds)` emissions; count of parties currently in surge (`Party.surgeActive()`); adaptive-quorum activations. Trigger: **+20% membership in 30 days** | a cluster across parties in one region = coordinated capture attempt (`RISK-04`); one party repeatedly surging = flash takeover (`RISK-03`) | `AnomalousGrowth` | `BR-012`, `DES-015`, `DES-020`, `KC-7` |
| **G-07** | **Attester concentration** | per region: `issuanceCount[attester][region]` ÷ region total. **Published per attester — an attester is an institution, not a person** | **> 50% = automatic issuance halt** and same-day escalation (Doc 13 §14); > 40% = warning | `RegionRegistry.issuanceCount` | `NFR-004`, `FR-004`, `RISK-05` |
| **G-08** | **Issuer-set validity** | `PersonhoodRegistry.issuerSetValid()` — ≥2 active issuers, ≥1 non-state | **false = Sev-1**; a region relying on state issuers alone is a captured region | chain read | `ADR-003` |
| **G-09** | **Duplicate / Sybil rate** | audited estimate of duplicate credentials ÷ issued, per region, quarterly | **> 0.1%** breaches `NFR-004` | audit | `NFR-004`, `RISK-01` |
| **G-10** | **Population-denominator health** | per region: effective value, source count, pending value, dispute-window state, drift since last change | source count < 5; drift near ±5% cap; a pending value nobody noticed | `RegionRegistry.population` | `FR-009`, `RISK-12` |
| **G-11** | **Manifesto / charter activity** | manifesto versions published; charter amendments by tier; entrenched-clause amendment attempts | constitutional amendments clustering after a growth surge = capture in progress | `ManifestoPublished`, `CharterAmended` | `BR-012` |
| **G-12** | **Exit usage** | party state exports performed; parties migrated | a spike is a signal about **us**, not about them — read it as a trust indicator | `apps/verifier` telemetry (aggregate) | `NFR-018` |
| **G-13** | **Filtering & compulsion transparency** | count of jurisdiction-scoped display-filtering actions and of compulsion requests received, with what was produced | **any** compulsion request → PB-COMPEL | transparency register | `FR-056`, `FR-057`, `ADR-013 §4` |

> **G-03 note.** Turnout is the metric most likely to be quietly turned into surveillance ("who
> didn't vote?"). It is defined as votes ÷ snapshot member count — two integers read from the chain.
> There is no query, dashboard filter or export that yields a list of who voted, because
> `VoteCast(proposalId, choice, nullifier)` carries a scope-specific nullifier with no derivable
> relationship to the person or to their actions in any other scope (`ADR-003`).

### 3.3 Error-budget policy

- **Budgets are monthly** and are consumed by S-01 and S-02.
- **Budget exhausted → freeze and harden** (CLAUDE.md governance signals). Concretely: no new
  capability is promoted to a wider cohort, no flag is enabled, and the next release contains
  reliability work only. Lifted by the SRE when the following month opens with the budget restored.
- **Two budgets are zero-tolerance and are not budgets at all** — a single occurrence is an
  incident, and a confirmed one raises `KC-1`:
  - any confirmed deanonymisation of a member's affiliation or ballot (`NFR-001`);
  - any indexer divergence (S-12) or reproducible-build mismatch (S-16).
- **Cost (S-03) is a product metric with an alert, not an infrastructure line item** (Doc 03 §10.9).
  Sustained breach escalates to `KC-6`.
- Budget status is reported in the WBR (`artifacts/status/STATUS-WBR-*`) and, when exhausted,
  routed with the refine-log to the product-owner the same day (§10).

### 3.4 Burn-rate alerting

Multi-window, multi-burn-rate, per the SRE Workbook. Alert on **how fast** the budget is being
consumed, not only on threshold breaches.

| Burn-rate alert | Windows | Threshold | Budget consumed if sustained | Action | Owner |
|---|---|---|---|---|---|
| **Fast burn** — S-01 | 1 h **and** 5 m | **14.4×** | 2% in 1 h | **Page** on-call; roll back first, diagnose after | Chen Wei |
| **Fast burn** — S-02 | 1 h **and** 5 m | **14.4×** | 2% in 1 h | **Page**; re-point indexer/gateways | Chen Wei |
| **Medium burn** | 6 h **and** 30 m | **6×** | 5% in 6 h | **Page** during business hours; ticket out of hours | Chen Wei |
| **Slow burn** | 3 d **and** 6 h | **3×** | 10% in 3 d | **Ticket**; hold rollout promotion | Chen Wei |
| **Budget floor** | month to date | < 25% remaining | — | **Freeze and harden**; notify PM + PO | Chen Wei → Ana-Maria Petrescu |

---

## 4. Monitoring & dashboards

| Dashboard | Audience | Contents | Status |
|---|---|---|---|
| **Public governance health** | everyone — citizens, journalists, auditors | all of §3.2, k-floor enforced, no individual fields, machine-readable export | `N/A — not yet produced` (`NFR-019`, required live at launch) |
| **Service SLO** | on-call | S-01…S-19 with burn-rate panels | `N/A — not yet produced` |
| **Chain health** | on-call | sequencer liveness, L1 force-inclusion queue depth, blob fees, gas per operation class | `N/A — not yet produced` |
| **Cost / FinOps** | Hiroshi Tanaka + on-call | S-03, S-07, S-08, runway days, blob-fee distribution | `N/A — not yet produced` |
| **Registry & operator diversity** | Marcus Adeyemi, Rafael Duarte | S-13, G-07, G-08, G-10, timelock queue, pending registry changes | `N/A — not yet produced` |
| **Transparency register** | public | G-13 — filtering actions and compulsion requests (`ADR-013 §4`) | `N/A — not yet produced` |

**Instrumentation constraints (binding on whoever builds these):** no per-user dimension anywhere
(R2); pre-aggregated emission (R3); k ≥ 1,000 on every public partition (R4); gateway access logging
**off** (`ADR-013 §3`); no analytics on political browsing, ever (Doc 03 §10.2). **Sentry** is
configured with PII scrubbing, no IP capture, no user context, and no breadcrumbs from
governance-action code paths — an error report that carries a session is a deanonymisation surface.

---

## 5. ⭐ Alert → action playbooks

Format: **detection → diagnosis → action → comms**. Golden rule: for any citizen-impacting Sev,
**mitigate first, diagnose after** — and remember the only protocol-level mitigation available is
subtractive (`FeatureFlags.disable`).

---

### PB-ISSUER — Personhood issuer compromised (48 h expedited removal)

```
Alert:        ISSUER_COMPROMISE
Condition:    (a) issuer hits maxEnrolmentsPerEpoch on >=2 consecutive epochs, OR
              (b) enrolment rate for one issuer > 5x its 7-day trailing baseline, OR
              (c) credible external report of issuer key/process compromise, OR
              (d) issuer's published security assessment (metadataURI) is withdrawn
Severity:     Sev-1        Owner: Marcus Adeyemi (personhood) | On-call: Chen Wei
Trace:        FR-005, NFR-004, DES-003, RISK-05, ADR-003, ADR-010
```

**Detection.** `Enrolled` events grouped **by `issuerId`** — an institution, never a person (R1/R2).
Watch `IssuerEpochCapReached` reverts: the flood limiter firing is itself the signal. The cap exists
precisely so a compromised issuer cannot mint a jurisdiction's worth of people faster than the 48 h
expedited-removal path can react (`PersonhoodRegistry.sol:178-189`).

**Diagnosis.**
1. `cast call $PERSONHOOD "issuers(bytes32)" $ISSUER` → active, tier, `stateOperated`, epoch cap.
2. Rate per epoch vs 7-day baseline. Compare against the issuer's own reported issuance if published.
3. `issuerSetValid()` → will removal drop the region below **≥2 active, ≥1 non-state**?
4. Determine tier: a tier-1 (social) compromise is contained by its low sponsorship budget; a tier-3
   (registry) compromise is a jurisdiction-level event.

**Action.**
1. **Immediately**: reduce the epoch cap toward zero via `registerIssuer` (re-registration with a
   lower cap) — this is a *registry* change and still carries the timelock, so it is **not** fast.
   The genuinely fast lever is the **48-hour expedited removal** path for *removing* a compromised
   entry (`ADR-010`) — start that clock in the first 15 minutes.
2. `PersonhoodRegistry.deactivateIssuer(issuerId, reason)` via the expedited path. Future enrolments
   through that issuer stop.
3. **Do not attempt to revoke credentials already issued.** There is no such function, deliberately:
   mass-revocation would disenfranchise the issuer's legitimate users to punish its operator
   (`ADR-003`, Doc 03 §11 `FR-005`). Contain forward, never backward.
4. If removal would breach the `ADR-003` invariant, **onboard a replacement first** — but note that
   an *addition* takes **30 days**. If no replacement exists, escalate: the region must either accept
   a degraded issuer set or stop accepting new enrolments (`RegionRegistry.freezeRegion`). This
   trade-off is a **decision for the human approver**, not for on-call.
5. Quantify blast radius: enrolments through that issuer since the suspected compromise. These
   commitments stay valid; feed the count into the `NFR-004` duplicate-rate audit and `G-09`.

**Comms.** Public notice within 2 h naming the issuer, the window, and what it does and does not mean
for anyone who enrolled through it — in plain language, without implying anything about any
individual. Notify the issuer's operator. Log to the transparency register. Open a `REF-##`.

**Escalate if:** `issuerSetValid()` would go false → Rafael Duarte + human approver, same day.
Duplicate rate breaches 0.1% (`NFR-004`) → Marcus Adeyemi raises to PM for `RISK-01` reassessment.

---

### PB-ATTEST — Residency attester issuance anomaly → region freeze

```
Alert:        ATTESTER_ISSUANCE_ANOMALY
Condition:    (a) one attester's share of a region's issuance > 40% (warn) / > 50% (halt), OR
              (b) ResidencyIssued rate for a region > 5x its 14-day trailing baseline, OR
              (c) region's verifiedResidents grows faster than any plausible population model, OR
              (d) issuance from an address not operationally associated with the attester (see below)
Severity:     Sev-1        Owner: Marcus Adeyemi | On-call: Chen Wei
Trace:        FR-006, NFR-004, DES-006, DES-036, RISK-01, RISK-05, ADR-004
```

**Detection.** `issuanceCount[attesterId][regionId]` is **public on-chain, by design — spikes are
visible to everyone, not just to us** (`RegionRegistry.sol:72-73`). Compute each attester's share per
region hourly. This is institution-level data (R1/R2).

> **⚠ Standing hazard.** `RegionRegistry.issueResidency` **does not authenticate `msg.sender`** — any
> address may insert leaves under any authorised attester's identity (`RegionRegistry.sol:169`;
> Doc 09 `REL-LIM-03` / `REF-02`). Until this is fixed, condition (d) is the **only** detection for
> forged issuance, and it is detection after the fact. Treat any unexplained issuance as forged until
> proven otherwise. **This is a Gate-2 blocker, not an operational condition to live with.**

**Diagnosis.**
1. `issuanceCount` per attester for the region; share vs the 50% cap (`NFR-004`).
2. `verifiedResidents(regionId)` vs `population(regionId).value` — a verified-resident count
   approaching or exceeding the population denominator is proof of forged issuance.
3. Recompute `requiredEndorsements` for live petitions in that region: has the threshold been moved
   by the inflation? Note thresholds are **frozen at petition open** (`DES-009`), so petitions
   already open are protected; new ones are not.
4. `cast call $REGIONS "attesters(bytes32)" $ATTESTER` → active, tier, stake.

**Action.**
1. **`RegionRegistry.freezeRegion(regionId, reason)`** — the region accepts no new residency
   credentials pending review (`DES-036`, `ADR-004 §3`). This is `onlyTimelock`; use the expedited
   removal-class path. **Freezing a region stops new credentials; it does not invalidate existing
   ones and does not stop anyone already credentialed from acting.** Say that plainly.
2. Above 50% share: **issuance to that attester halts automatically in code**, and the PM raises it
   to the human approver **the same day** (Doc 13 §14 stop-the-line signal).
3. `RegionRegistry.slashAttester(attesterId, amount, reason)` where issuance is demonstrably
   fraudulent; slashing to zero stake deactivates the attester.
4. If a petition in the region is close to activation on inflated numbers: **there is no mechanism to
   stop it.** Activation is permissionless and threshold-frozen. Publish the finding immediately so
   the resulting party's legitimacy is contested in the open — that is the only remedy, and pretending
   otherwise would be worse.
5. Onboard a second/third attester (30-day timelock — start now, not after the review).

**Comms.** Public notice naming the attester and the region, with the issuance figures (already
public). Explain the freeze in plain language. Log to the transparency register. `REF-##`.

**Escalate if:** region has only one attester (single point of capture, `RISK-05`) → Rafael Duarte.
Any activated party is implicated → PM raises `KC-7` (capture failure) to the human approver.

---

### PB-CENSOR — Sequencer censorship → force-inclusion

```
Alert:        SEQUENCER_CENSORSHIP
Condition:    (a) S-09 force-inclusion usage > 0 sustained > 1 h, OR
              (b) citizen operations rejected/ignored by the sequencer > 1% over 15 min, OR
              (c) S-01 falling while chain head advances normally (the tell: chain healthy, WE are
                  not being included), OR (d) operations for one party/region failing while others
                  succeed -- targeted censorship
Severity:     Sev-1        Owner: Chen Wei
Trace:        NFR-025, NFR-014, NFR-007, RISK-09, ADR-001, DES-041, DES-051
```

**Detection.** The transport ladder is instrumented **per rung, in aggregate**: how many operations
were carried by bundler / alternate bundler / self-pay / force-inclusion. Force-inclusion is the
canary: its baseline is **0**, so any sustained use means the primary path is refusing work
(R1 — counts of operations, never of people).

**Diagnosis.**
1. Is the chain advancing? If the sequencer is *down*, this is liveness, not censorship — different
   response, same fallback.
2. Are rejections **targeted**? Compare inclusion rates across parties and regions. **Only compare
   buckets that clear the k ≥ 1,000 floor** (R4) — a targeted-censorship investigation must not
   itself become a per-party surveillance tool.
3. Check L1 `OptimismPortal` force-inclusion queue depth and the current force-inclusion window.
4. Any open ballot in its final 24 h? `ADR-001` sizes voting windows at **≥72 h** precisely so a
   force-inclusion round trip (~12–24 h) cannot silently disenfranchise anyone. Verify that holds.

**Action.**
1. **Do not roll back the client.** The fallback ladder is working as designed; rolling back removes
   the citizen's escape hatch. This is the one alert where the instinct to revert is wrong.
2. Confirm `l1_force_inclusion` is enabled client-side (`flags.js`, `prod: true`) and that the SDK is
   promoting to it automatically (`DES-041`, `DES-051`).
3. Publish the alternate access paths (≥2 independent, `NFR-014`) and the direct-L1 instructions.
4. Verify alternative-path inclusion time against **S-10 ≤ 60 min** (`NFR-025`). If exceeded, that is
   a distinct, more serious finding — the escape hatch itself is degraded.
5. If any ballot's voting window could close before censored votes can be force-included, publish the
   fact **immediately and prominently**. **We cannot extend a voting window** — no such function
   exists (`CON-003`). Say so.
6. Preserve evidence: censored operation classes, timestamps, sequencer responses. This is
   `RISK-09` materialising and it feeds the Phase-4 sovereign-rollup decision (`ADR-001b`).

**Comms.** Immediate public notice: the primary route is refusing traffic, here is the alternative,
here is how to use it. Written for a citizen on a 64 kbit/s link, not for an engineer.
**Do not name affected parties or regions unless the bucket clears the k-floor** — naming a censored
party may be exactly what the censor wants published.

**Escalate if:** censorship persists > 6 h → Rafael Duarte + Sofia Marchetti (may be a state action,
`RISK-07`/`RISK-08`) + PM to the human approver.

---

### PB-SPONSOR — Sponsorship drain

```
Alert:        SPONSORSHIP_DRAIN
Condition:    (a) daily paymaster spend > 3x p99 trailing daily baseline (circuit-breaker), OR
              (b) runway < 90 days at p95 fees, OR (c) S-03 median cost/action >= USD 0.01 for 1 h,
              OR (d) sponsored-op rate > 5x baseline with flat governance-event volume
                     (the tell: fees burning without governance happening)
Severity:     Sev-2 (Sev-1 if any citizen is DENIED)     Owner: Hiroshi Tanaka | On-call: Chen Wei
Trace:        NFR-005, FR-061, DES-043, ADR-014, ADR-001, RISK-15, KC-6
```

**Detection.** Spend and operation counts are **totals** (R1). The per-person budget is enforced
against the **personhood nullifier**, so creating more addresses gains nothing (`ADR-014`) — but the
*metric* is the count of budget-exhaustion events, never a list of who exhausted theirs (R2).

**Diagnosis.**
1. Spend split by operation class (enrol / endorse / join / propose / vote) — classes, not actors.
2. Blob-fee level: is this **volume** or **price**? Blob-fee volatility makes cost a distribution,
   not a constant (`ADR-001`). A price spike is not an attack.
3. Are sponsored operations producing governance events? Sponsored ops rising while `Endorsed` /
   `VoteCast` stay flat means the allowlist is being abused or an operation class is looping.
4. Check per-nullifier budget enforcement is actually firing: tier-1 credentials carry a much lower
   budget (`SPONSORSHIP_OPS_PER_EPOCH`: social 10, document 50, registry 50).
5. Cross-check `PB-ISSUER` — a sponsorship drain with an enrolment spike is a Sybil flood
   (`RISK-01`, `RISK-15`), not a cost problem.

**Action.**
1. **Circuit-breaker: degrade to self-pay** (`ADR-014`). The citizen pays their own sub-cent fee and
   the UI explains it. **Sponsorship exhaustion is a degradation, never a denial** (`FR-061`). Any
   citizen actually *denied* is an immediate Sev-1 escalation.
2. Tighten per-nullifier budgets, starting with tier-1 credentials.
3. Re-check the action allowlist: only civic-purpose protocol actions are sponsored, never arbitrary
   calls.
4. Top up the buffer to ≥90 days at p95 fees.
5. If cost per action cannot be held below **USD 0.05 at 1M users**, that is `KC-6` — PM raises to
   the human approver within one business day. Do **not** scale into a cost curve that makes
   participation means-tested; that is the exact failure the product exists to eliminate.

**Comms.** In-product explanation when self-pay engages, in plain language and **without the words
gas, token or wallet** (`NFR-023`). Public note if it persists > 24 h. `REF-##`.

---

### PB-INDEX — Indexer divergence

```
Alert:        INDEXER_DIVERGENCE
Condition:    (a) any field differs between an indexer and a fresh from-chain rebuild (S-12), OR
              (b) two independent indexers disagree, OR (c) indexer lag p95 > 30 s for 15 min (S-11),
              OR (d) an indexer serves a petition count, tally, threshold or membership count that
                     the client's re-verification rejects
Severity:     Sev-1 for divergence (zero tolerance) · Sev-3 for lag alone     Owner: Chen Wei
Trace:        ADR-014, NFR-007, FR-034, DES-026
```

**Detection.** Hourly differential: for a sampled set of petitions, parties and proposals, compare
each known indexer against a fresh from-chain rebuild. **The rebuild is the oracle.** Also count
client-side re-verification rejections in aggregate (R1) — the client re-verifies every
decision-relevant value before acting on it, so a lying indexer is detectable by anyone.

**Diagnosis.**
1. Divergence or lag? Lag is late-but-correct; divergence is **wrong**, and the two get different
   responses.
2. Is it one operator or all? One operator = that operator's problem. All = a bug in the shared
   open-source indexer, which is far more serious.
3. Which fields? Petition counts, tallies, thresholds, membership counts and treasury balances are
   **security-relevant**. Cosmetic fields are not.
4. Is `FR-034` interim-tally suppression still holding? Interim tallies are readable on-chain; their
   suppression before close is a **client and indexer obligation** — the chain cannot hide what it
   stores (`Governor.sol:250-255`, `DES-026`). An indexer leaking a running tally is a
   coercion-resistance failure, not a display bug.

**Action.**
1. **Remove the diverging indexer from the client's shipped endpoint list and publish the updated
   list.** Clients fall back to direct chain reads — slower, still correct (Doc 03 §6).
2. Rebuild that indexer's read model from chain; do not patch rows by hand, ever.
3. If all operators diverge identically → suspect the shared indexer code. Freeze indexer releases,
   fix, re-derive.
4. Verify the client's re-verification path is genuinely running: an indexer can only make the UI
   *fast*, never *wrong*, and that property is what makes it safe to exist (`ADR-014` rule 1).
5. Publish the divergence. A captured or lying indexer must be detectable by anyone and
   routable-around by everyone; concealing one would destroy the property.

**Comms.** Public note naming the operator and the divergent fields, plus how to point a client at a
different indexer. `REF-##` — repeated divergence is a signal about indexer design, and that is a
product decision for the product-owner, not an operational tweak.

---

### PB-MACI — Coordinator committee below the 5-of-7 threshold

```
Alert:        MACI_COMMITTEE_THRESHOLD
Condition:    (a) fewer than 5 of 7 committee members producing liveness attestations, OR
              (b) any member fails to participate in a scheduled tally, OR
              (c) committee jurisdiction diversity falls below 5 distinct legal jurisdictions, OR
              (d) two or more members become affiliated with the same party
Severity:     Sev-1        Owner: Aisha Nkemdirim (elections & voting) | On-call: Chen Wei
Trace:        NFR-003, ADR-006, DES-024, RISK-07, RISK-20, MS-12
Status:       maci_voting flag OFF -- this playbook is DORMANT until Phase 3 (MS-12, 2027-05-07)
```

**Detection.** Committee members publish **liveness attestations**; failure to participate is
slashable and triggers automatic replacement before the tally (`ADR-006`). Monitor attestation
freshness per member (a member is an *organisation*, so this is institution-level — R1/R2), and
monitor the jurisdiction/party-affiliation matrix, which is the structural property that makes
collusion hard: no single court order and no single political interest can reach a threshold.

**Diagnosis.**
1. Count members with fresh attestations. **≥5 = tally can proceed. <5 = it cannot.**
2. Is a tally pending or in progress? A committee shortfall between elections is recoverable; one
   mid-tally is an incident.
3. Correlated failure? Members vanishing together suggests coordinated pressure — a legal action
   reaching several at once (`RISK-07`), not bad luck.
4. Confirm the jurisdiction spread still holds ≥5 distinct legal jurisdictions.

**Action.**
1. Trigger automatic replacement from the reserve pool **before** the tally. Membership is sampled
   fresh per election precisely so there is no standing committee to capture.
2. If <5 and no replacement is possible: **re-run the election under a fresh committee with the
   encrypted message queue intact.**
3. **NEVER fall back to a plaintext tally.** This is absolute (`ADR-006`, Doc 03 §6, Doc 13 `RISK-20`).
   A plaintext fallback retroactively strips privacy from people who already voted, under the exact
   conditions — pressure on the committee — where they most need it. It is the failure mode the whole
   design exists to prevent. There is no authorisation level at which this becomes acceptable.
4. Communicate the delay plainly. Tally latency is minutes-to-hours by design (batched proving); a
   democratic system that resists the pressure for instant results is better for it.
5. If members were pressured, this is `RISK-07` → PB-COMPEL as well.

**Comms.** Public statement: the tally is delayed, why, when it will run, and **explicitly that no
ballot has been or will be decrypted individually**. That last sentence is the one voters need.

**Escalate if:** 3+ members lost → Rafael Duarte + Sofia Marchetti + PM to the human approver.
Evidence of a functioning vote-buying market > 1% of ballots → `KC-2`.

---

### PB-POP — Population-oracle dispute

```
Alert:        POPULATION_DISPUTE
Condition:    (a) PopulationPending emitted (ALWAYS alerts -- the 7-day window has opened), OR
              (b) proposePopulation reverts DriftTooLarge, OR (c) TooFewSources (< 5), OR
              (d) a credible external objection during the dispute window, OR
              (e) proposed median deviates > 10% from the trailing effective value
Severity:     Sev-2 (Sev-1 if a petition in that region is within 10% of its threshold)
Owner:        Yuki Sato (population / metrics) | On-call: Chen Wei
Trace:        FR-009, DES-007, DES-010, RISK-12, CON-009, ADR-004 §4
```

**Detection.** Alert on **every** `PopulationPending` event, not only on anomalies. The 7-day dispute
window is only meaningful if somebody notices it opened. Publish the pending value, the median, every
source's submitted value and every source's provenance the moment it fires.

**Diagnosis.**
1. `cast call $REGIONS "population(bytes32)" $REGION` → value, effectiveFrom, pendingValue,
   pendingSince. Dispute closes at `pendingSince + 7 days`.
2. `populationSourceCount(regionId)` → must be ≥ **5** (`MIN_POPULATION_SOURCES`).
3. Source spread: a tight cluster with one outlier is healthy (the median absorbs it). A **bimodal**
   spread means the sources disagree about the region's definition — that is a data problem, not a
   statistics problem, and re-proposing will not fix it.
4. **Are five sources genuinely independent?** Five sources all deriving from the same census is one
   source wearing five hats. Check vintage years and provenance.
5. Drift: > ±5% within 90 days reverts (`POPULATION_MAX_DRIFT_BPS`). A revert here is the guard
   working — a denominator cannot be swung underneath a live petition.
6. **Blast radius:** which live petitions in that region are near their threshold? Note that
   `requiredEndorsements` is **frozen at petition open** (`DES-009`), so open petitions are immune.
   Only petitions opened after activation feel the new denominator.

**Action.**
1. Publish everything, immediately — sources, values, median, provenance, effective date.
2. Objection → the remedy is to submit a corrected source value and re-propose. **There is no
   privileged cancel, and there must not be.** Nobody, including us, can set a region's population to
   an arbitrary number; the denominator is a median of independently submitted values, rate-limited,
   and dispute-windowed (`RegionRegistry.sol:13-15`).
3. If the deflation attack is suspected (drive the denominator toward zero to make activation
   trivial), verify the two floors still bind: `max(pct × population, pct × verifiedResidents, 500)`.
   The **500 absolute floor** and the verified-resident term mean an oracle deflated to zero gains an
   attacker nothing (Doc 03 §11, `DES-010`).
4. If < 5 sources, activation for that region is blocked until more are registered — 30-day timelock.
   Plan region launches around this.
5. Log the dispute and its outcome publicly regardless of the result.

**Comms.** Public notice at window open and at close, in plain language: "the number we count
petitions against is changing from X to Y on <date>; here are the five sources; here is how to
object." `REF-##` if the dispute reveals a systematic source problem — that is a `CON-009` reality
that may deserve a product response.

---

### PB-COMPEL — State compulsion request

```
Alert:        COMPULSION_REQUEST
Condition:    Any legal order, subpoena, warrant, national-security letter, informal police/agency
              request, or app-store/registrar/host takedown demand touching Trumocracy, any operator,
              or any committee member.
Severity:     Sev-1 (always, regardless of apparent scope)
Owner:        Sofia Marchetti (Legal) | Escalation: Rafael Duarte (Security) | On-call: Chen Wei
Trace:        ADR-013 §3, §4 · RISK-07, RISK-08, RISK-13, RISK-14 · FR-057, NFR-010, NFR-015, CON-003
```

> **This will happen. Not might — will** (`ADR-013`). The only question was what we are able to
> produce when it arrives, and that was answered at design time by removing the capability rather
> than by writing a policy. **The safest design for the operator is one where the operator is
> genuinely powerless.**

**On receipt — first 60 minutes.**
1. **Do not respond substantively. Do not confirm or deny anything about any individual.**
2. Route to Sofia Marchetti (Legal) immediately; Rafael Duarte in parallel. On-call's *only* job is
   routing and preservation — not answering.
3. Preserve the request itself verbatim (it is the transparency-report artefact).
4. **Change nothing** in response to an informal request. Only a valid order, assessed by counsel,
   changes anything — and the only thing it can ever change is a *display* filter, never the protocol.
5. **Do not** disable flags, freeze regions or alter registries as a "cooperative gesture". Those
   levers exist for safety incidents. Using them under legal pressure converts a safety mechanism
   into a compliance mechanism, and once it has been used that way once it will be demanded again.

**⭐ What we can and cannot produce — `ADR-013 §3`, verbatim in effect:**

| Order | What we can produce | Why |
|---|---|---|
| **"Give us the member list for party X"** | **Merkle commitments.** No names, no addresses, no device IDs, no IPs. | Membership is an insertion of a Poseidon commitment into a tree. The chain can prove someone is a member; it cannot list who they are. The protocol has no server that sees an IP; gateways run with **no logging** and are replaceable. |
| **"Tell us who cast vote N"** | **Nothing.** | Ballots are encrypted under a **5-of-7 threshold key held across ≥5 legal jurisdictions** (`ADR-006`). We hold no share sufficient to decrypt, and **no party holds a decryption path to an individual ballot at all** — not even the full committee. In Phase 1, with `maci_voting` OFF, the answer is still nothing from us: a `VoteCast` event carries a **scope-specific nullifier** with no derivable link to a person or to that person's actions in any other scope. |
| **"Take down party Y"** | **We cannot.** | No pause key, no admin key, no proxy (`ADR-010`, `CON-003`). The frontend we host can be blocked; the protocol and its IPFS/Arweave clients cannot. |
| **"Stop citizen Z participating"** | **We cannot.** | There is no account-level authority in the core. No function exists that revokes a person's participation, and none that maps a nullifier to a person — the information does not exist on-chain or off it. |
| **"Give us the identity behind commitment C"** | **Nothing.** | The identity secret never left the citizen's device. We never saw it. |
| **"Give us access logs / who read party X's page"** | **Nothing.** | No IP logs, no per-user query history, no analytics on political browsing (`ADR-014` rule 3). The reading record would be as dangerous as the membership record we refused to build. |
| **"Give us your metrics data"** | **Aggregates only, all of which are already public.** | §3.0 R1–R5: no metric, log, trace or error report carries an individual identifier. There is no private version of the dashboard. |
| **"Preserve data pending an order"** | **Nothing to preserve** beyond the already-public chain, plus ≤30-day minimal operational data (notification relay, support), which is end-to-end encrypted where possible and crypto-shredded on erasure (`ADR-013 §2`). | Erasure is honoured by **never collecting**, not by deleting. |

**Where personal data genuinely does exist — say so, do not overclaim:**
- **On the citizen's device** — their sole control.
- **At the issuer / attester** — *their* controller relationship, *their* retention obligations,
  disclosed to the citizen at enrolment. **An order served on an issuer is outside our control**, and
  citizens are told this before they enrol. This is disclosed residual risk (`RISK-07`, Doc 01 §E3),
  not a solved problem.
- **In optional off-chain services** (notification relay, support) — conventional storage, real
  deletion, ≤30-day retention.

**Content-related orders (`FR-056`).** The only lawful action available is **jurisdiction-scoped
display filtering** in the gateway where the content is unlawful. It is **never a deletion**, it is
**publicly logged**, and it does not touch the protocol. Filtering is visible rather than silent, by
design (`ADR-013 §4`, `ADR-009`). The protocol applies no political content rules — a protocol that
judges political content is a political actor, and whoever writes those rules is the new gatekeeper.

**⭐ Transparency-report obligation (`FR-057`, `ADR-013 §4`).** **Every** compulsion request is
recorded in the public transparency register (`G-13`) with: date, requesting jurisdiction, type,
scope, what was produced (usually "nothing"), and whether a filtering action resulted. Published on
the **regular cadence** and, where legally permitted, individually. Where a gag prevents publication,
the **aggregate count still increments** — the register's structure is designed so that silence is
visible. The register is a first-class product surface, not a compliance PDF.

**Comms.** Nothing public until Legal clears it, then publish. Never comment on an individual.
Notify affected operators and committee members if they may be next.

**Escalate if:** an order targets a committee member (→ PB-MACI) · an order targets an issuer or
attester (→ PB-ISSUER / PB-ATTEST) · rulings in ≥2 pilot jurisdictions that operating is unlawful
(→ `KC-5`, PM to the human approver within one business day).

---

### PB-KILL — Using the kill switch during an open ballot

```
Alert:        (procedural -- invoked from any playbook that reaches "disable a flag")
Severity:     inherits          Owner: Chen Wei (A for flag kill / rollback)
Trace:        NFR-020, CON-003, ADR-010 -- Doc 09 REL-LIM-07 / REF-01
```

**The hazard.** `Governor.vote` calls `flags.requireEnabled(FLAG_GOVERNANCE)` on every ballot, and
`FeatureFlags.disable` has **no open-ballot check**. `NFR-020` requires that a flag governing an open
ballot's rules **MUST NOT** be changeable while that ballot is open. **The code does not enforce
this.** So the emergency kill switch for `party_governance` is simultaneously a disenfranchisement
tool, and using it casually would breach a Must NFR.

**Procedure until the code enforces it:**
1. Before disabling **`party_governance`**, enumerate proposals in `Voting` state across all parties.
2. **If any ballot is open:** prefer **reverting the client bundle** — it removes the surface without
   blocking direct callers, and it does not disenfranchise anyone.
3. Disabling anyway requires an explicit **recorded decision** by the SRE (Accountable) with the PO
   (Priya Raghunathan) consulted, plus a public notice naming every affected ballot and the reason.
4. Flags that gate **entry** rather than **participation** (`petitions`, `fork`, `treasury`,
   `elections`, `recall`) do not carry this hazard — disabling them stops new actions without
   interrupting an in-flight decision.
5. Record the event and the elapsed ballot impact as a `REF-##`. **This is a Gate-2 blocker, not a
   steady state.**

---

## 6. Incident response

### 6.1 Severity & response SLA

| Sev | Definition | Response | Comms | Postmortem |
|---|---|---|---|---|
| **Sev-1** | Any confirmed privacy or deanonymisation finding · citizen write path down · censorship of citizen actions · insecure mock found in a live registry · indexer divergence · reproducible-build mismatch · MACI committee below threshold during a tally · any compulsion request | **Page immediately**, 15 min ack, mitigate first | public within 30 min | mandatory, blameless, published |
| **Sev-2** | Degraded SLO with budget burning · sponsorship drain · one operator class at minimum diversity · population dispute affecting a near-threshold petition | 1 h ack | public within 4 h | mandatory |
| **Sev-3** | Elevated indexer lag · single non-critical operator down · cosmetic client defect | next business day | as needed | if recurring |
| **Sev-4** | Cosmetic, no citizen impact | backlog | none | no |

**Privacy findings are always Sev-1**, regardless of blast radius. For this product a privacy failure
is a **safety** failure: the harm lands on a real person and no feature offsets it (`KC-1`).

### 6.2 Process

**detect → mitigate → assess → comms → resolve → blameless postmortem → `REF-##`**

1. **Detect** — alert, external report, or a citizen. External privacy reports go straight to Sev-1.
2. **Mitigate first, diagnose after.** The available mitigations, in order of preference:
   revert the client bundle → re-point indexer/relayer → degrade sponsorship to self-pay →
   `FeatureFlags.disable` (last, and only via **PB-KILL** if a ballot is open).
3. **Assess** what is reversible and what is not (**Doc 10 §8.3**) **before** telling anyone anything.
   Over-promising reversibility is the most damaging thing an incident commander can do here.
4. **Comms** — §6.4. State plainly what could **not** be rolled back.
5. **Resolve.**
6. **Blameless postmortem** within 5 business days, **published**. An operator whose whole thesis is
   verifiability does not run private postmortems.
7. **`REF-##`** — every Sev-1 and Sev-2 produces at least one refine-log entry (§10).

### 6.3 Incident Commander & roles

| Role | Who | Duty |
|---|---|---|
| **Incident Commander** | on-call SRE (Chen Wei primary) | decides; does not fix. Owns rollback (A) |
| Ops lead | Eng Lead (Samuel Oyelaran) | executes mitigations |
| Comms lead | PM (Ana-Maria Petrescu) | public + stakeholder comms |
| Privacy authority | Dr. Lena Kowalczyk | **veto** on any action widening the linkability surface — including a diagnostic |
| Security authority | Rafael Duarte | compromise assessment |
| Legal authority | Sofia Marchetti | compulsion, jurisdiction, takedowns |
| Scribe | any | timeline; feeds postmortem + `REF-##` |

> **The privacy veto is real and it binds the incident.** "Turn on request logging so we can debug
> this" is exactly the kind of expedient that destroys the product's central promise during the
> stress of an incident. It requires Dr. Kowalczyk's explicit approval, and the default answer is no.

### 6.4 Communication templates

**Sev-1 initial (within 30 min):**
> We are investigating an issue affecting <capability> since <time UTC>. <What a citizen sees.>
> <What to do meanwhile — e.g. the alternative access path.> We have <mitigation taken>.
> **What we have not been able to change: <the honest list — e.g. an open vote continues; a recorded
> decision stands>.** Next update by <time>.

**Rollback notice:**
> We rolled back <component> at <time UTC>. <Capability> is unavailable while we investigate.
> **Votes already cast, decisions already made and parties already created are unaffected and
> unchanged — we have no ability to alter them.** Next update by <time>.

**Never include:** any individual's activity, party membership, region below the k-floor, or anything
that would let a reader infer who was affected (`NFR-023`, `NFR-024`).

---

## 7. On-call & escalation

| Layer | Who | Reach | When |
|---|---|---|---|
| **Primary on-call** | **Chen Wei** — Reliability Lead | pager, 24×7 during rollout windows | all alerts |
| Secondary | **Samuel Oyelaran** — Eng Lead | pager | no primary ack in 15 min |
| **Privacy** | **Dr. Lena Kowalczyk** | direct | any suspected linkage; **veto holder** |
| **Security** | **Rafael Duarte** — Head of Security | direct | compromise, issuer/attester, ceremony, verifier |
| **Legal** | **Sofia Marchetti** | direct | **any** compulsion, takedown, jurisdiction |
| **Elections / MACI** | **Aisha Nkemdirim** | direct | committee, tally, coercion |
| **Personhood / residency** | **Marcus Adeyemi** | direct | issuer, attester, Sybil |
| **Cost** | **Hiroshi Tanaka** | business hours | sponsorship, cost SLO |
| **Population / metrics** | **Yuki Sato** | business hours | oracle, governance-health signals |
| **Recovery** | **Amara Diallo** | business hours | recovery success rate |
| **Product** | **Priya Raghunathan** — PO | — | consulted on PB-KILL; **decides** refine-log promotion |
| **Project / gates** | **Ana-Maria Petrescu** — PM | — | kill criteria → human approver within 1 business day |
| **Human approver** | per Doc 13 | via PM | gates, kill criteria, `ADR-003` invariant breach |

**Escalation triggers to the human approver (via PM, ≤1 business day):** any `KC-1`…`KC-7`
(Doc 13 §14) · `issuerSetValid()` false · attester > 50% share · error budget exhausted ·
rulings in ≥2 pilot jurisdictions.

---

## 8. Common operational tasks

```
# ---- kill a capability (subtractive only; read PB-KILL first if it is party_governance) ----
cast send $FEATURE_FLAGS "disable(bytes32,string)" $(cast keccak <flag>) "<incident>: <reason>" \
     --from $EMERGENCY_DISABLER
cast call $FEATURE_FLAGS "isEnabled(bytes32)(bool)" $(cast keccak <flag>)      # expect false

# ---- read the safety-critical invariants (run these first in ANY incident) ----
cast call $PERSONHOOD "issuerSetValid()(bool)"                                 # MUST be true
cast call $REGIONS    "anonymitySetSufficient(bytes32)(bool)" $REGION          # MUST be true
cast call $REGIONS    "population(bytes32)" $REGION                            # value, pending, since
cast call $REGIONS    "populationSourceCount(bytes32)(uint256)" $REGION        # MUST be >= 5
cast call $REGIONS    "verifiedResidents(bytes32)(uint256)" $REGION
cast call $REGIONS    "issuanceCount(bytes32,bytes32)(uint256)" $ATTESTER $REGION
cast call $PARTY_REGISTRY "requiredEndorsements(bytes32,uint16)(uint64)" $REGION 200

# ---- the deployment-safety gate (Doc 10 §3.2) -- run on any verifier suspicion ----
./scripts/deployment-safety.sh "$VERIFIER_REGISTRY"

# ---- freeze a region (stops NEW residency credentials; existing ones keep working) ----
timelock RegionRegistry.freezeRegion $REGION "<reason>"        # expedited removal-class path

# ---- expedited issuer removal (48h, ADR-010) ----
timelock PersonhoodRegistry.deactivateIssuer $ISSUER "<reason>"

# ---- indexer: check lag, rebuild from chain ----
indexerctl status                     # chain head vs processed head
indexerctl rebuild --from-genesis     # target < 6 h for a year of history; serve from standby

# ---- sponsorship: degrade to self-pay (degradation, NEVER denial) ----
paymasterctl mode self-pay
paymasterctl runway                   # days remaining at p95 fees; must stay >= 90

# ---- client bundle rollback ----
ipfsctl pins | tail -5                # last-known-good CID
ensctl set-contenthash <CID> && cdnctl purge
buildctl verify --commit <sha> --served-hash <hash>   # NFR-021 reproducible-build match

# ---- verify a tally independently (what any citizen can also do) ----
apps/verifier tally --proposal <id> --party <addr>
```

---

## 9. Capacity & scaling

Design figures: Doc 03 §7.6. **All observed values are `N/A — not yet measured`.**

| Signal | Design point | Binding constraint |
|---|---|---|
| Merkle depth | 32 (4.29 B leaves) | 85× headroom over the 50 M target — not a concern |
| On-chain insert | ~70–90 k gas (**measured** in the EVM harness) | cost, not throughput |
| Proof verification | ~250–290 k gas, constant | cost |
| Enrolment | 50 k/day baseline, 500 k peak | bounded by per-issuer epoch caps |
| **Vote burst** | 100 k/h baseline, **1 M/h peak** | **L2 throughput and blob capacity — the one capacity assumption that depends on someone else's roadmap** |
| Indexer | 200 events/s baseline, 2 000 peak | derived |
| Client proving | 1–4 s typical, 10 s worst | 2 GB Android 9, ≤2^17 constraints |

**The mitigation for the vote burst is scheduling, not scaling:** voting windows ≥72 h and
**staggered closes per region**. A governance system that requires everyone to act in the same hour
has designed in its own outage. Operationally: never let two national-scale ballots close in the same
hour in the same jurisdiction; publish the close calendar; use the ≥72 h window (already a `NFR-003`
coercion-resistance requirement) as the scheduling slack.

---

## 10. ⭐ Refine-log duty — capture and route (`REF-##`)

**The sre detects; the sre does not decide.** Deciding what to build from a production signal belongs
to the product-owner. That separation is deliberate: the role that sees the signal must not be able to
skip governance to act on it.

### 10.1 Capture

Every production learning is appended to **`docs/refine-log.md`** as a `REF-##` entry with: stable ID
(never reused, never renumbered), date, **signal source** (SLO / incident / metric / user-behavior),
what production taught us (grounded in the signal, **no speculation**), **severity**, and
`Promote? = TBD` until the product-owner decides.

**Mandatory capture triggers:** every Sev-1 and Sev-2 · every SLO breach · every error-budget
exhaustion · every rollback · every kill-criterion trigger · every stage-gate hold · every
promise-vs-actual gap (`S-19`) · every recurring toil item · every compulsion request.

**Capture rule that follows from §3.0:** a `REF-##` entry **MUST NOT** contain individual behaviour.
Write "12% of petitions expire within 10% of threshold", never "user X abandoned at step 3".

### 10.2 Route

| Trigger | Cadence | Action |
|---|---|---|
| **Weekly cadence** | every Monday | route the log to the **product-owner** (Priya Raghunathan); record in §3 of `refine-log.md` |
| **Threshold breach** | immediately | SLO breach · error budget exhausted · change-failure spike (S-17) · rollback > 15 min (S-18) · any `KC-*` trigger · any Sev-1 |

Every routing is recorded in the refine-log's **routing log** with date, trigger, entries routed, and
recipient. Routing is a fact, not a conversation — if it is not recorded, it did not happen.

### 10.3 What happens next (not the sre's call)

The **product-owner** promotes worth-it learnings into new `BR`/`FR` in Doc 02 with
`Source = REF-##`, and closes the rest with a logged reason. **A promoted refine bet re-enters the
SOP at the top and passes through BOTH gates** — Gate 1 and Gate 2 — exactly like any other bet.
It is never fast-tracked, however obvious it seems from inside an incident.

### 10.4 Entries already opened by this release (pre-production, from design and code review)

| REF | Signal source | Learning | Severity |
|---|---|---|---|
| `REF-01` | design review | The on-chain kill switch cannot distinguish an open ballot; disabling `party_governance` disenfranchises live votes, contradicting `NFR-020` | **High** |
| `REF-02` | code review | `RegionRegistry.issueResidency` does not authenticate `msg.sender` against `attesterId` | **High** |
| `REF-03` | code review | `PersonhoodRegistry.spendNullifier` is unpermissioned; a nullifier can be pre-spent to deny a citizen an action | **High** |
| `REF-04` | design review | Population "independent sources" all submit through the timelock, weakening `RISK-12`'s structural mitigation to a procedural one | Med |
| `REF-05` | design review | On-chain flags are boolean; 1→10→50→100% staging is client-cohort only | Med |
| `REF-06` | design review | A compromised verifier stays live for up to ~60 days (30-day timelock + 30-day supersede grace); and `VerifierRegistry` exposes no accessor to enumerate historical versions for the safety gate | Med |
| `REF-07` | metric / config | Phase-1 flag posture disagrees across `flags.js`, `fixture.mjs` and Doc 13 §9 | Med |

These are **pre-production** entries opened by the sre from the launch readiness review. They are
routed to the product-owner with the first weekly routing after this document leaves `In Review`.

---

## 11. Backup & recovery

| What | Cadence | RTO | RPO | Restore test |
|---|---|---|---|---|
| **Chain state** | n/a — the chain **is** the backup | n/a | **0** | continuously, by every full node |
| **Indexer read model** | none — **re-derived**, not backed up | **15 min** (service) / **< 6 h** (full history) | **0** | monthly rebuild-and-diff against a fresh rebuild |
| **Client bundle** | every release, pinned ≥3 operators + Arweave (permanent) | **< 5 min** | 0 | hash-verified every deploy and hourly (S-16) |
| **Ceremony transcripts** | published permanently to IPFS + Arweave | n/a | 0 | third-party `snarkjs zkey verify` reproducibility |
| **Contract source + ABIs** | in the public monorepo, AGPL-3.0-or-later | n/a | 0 | reproducible-build job |
| **Deployment address book** | every deploy, in Doc 12 | n/a | 0 | quarterly reconciliation against chain |
| **Party state (per party)** | exportable **by the party, at will, without our permission** | party-controlled | 0 | `TC-EXIT-*` in CI |
| Notification relay / support | ≤30-day retention, E2E encrypted where possible | 1 h | 24 h | quarterly |

**RTO 15 min / RPO 0 for all off-chain services** (Doc 03 §7.3–7.5, §10.5). RPO is zero because they
hold **no authoritative state** — the chain does. That is the whole reason this table is short.

---

## 12. Disaster recovery

| Scenario | Response | Drill |
|---|---|---|
| Indexer cluster lost | stand up new instance; rebuild from chain; clients meanwhile read the chain directly | quarterly |
| All hosted gateways blocked | citizens use IPFS/Arweave/ENS paths and user-supplied endpoints (`NFR-014`, ≥2 independent paths) | quarterly blocking simulation |
| Bundler/paymaster lost | alternate bundler → self-pay → L1 force-inclusion | quarterly |
| Sequencer down or censoring | L1 force-inclusion (`PB-CENSOR`); inclusion ≤60 min (`NFR-025`) | quarterly censorship simulation |
| Pinning cluster degraded to <3 | onboard operator; Arweave remains permanent | monthly diversity check |
| **Core contract defect** | **no rollback exists.** Deploy a corrected core; parties vote to migrate (`ADR-010`, Doc 10 §8.5) | migration rehearsed on testnet **before** mainnet |
| Emergency-disabler keys lost | **kill switch permanently gone** — `emergencyDisabler` is `immutable`. Response is migration | quarterly proof-of-possession by both holders |
| MACI committee lost | re-run under a fresh committee, encrypted queue intact — **never a plaintext tally** | per-election DKG rehearsal (MS-12) |
| Trumocracy the organisation ceases to exist | **the protocol continues.** Contracts are immutable and permissionless; the client is reproducible and permanently mirrored; anyone can run an indexer and a relayer; every party can export and reconstitute | the exit path is tested in CI, because an exit path that has never been executed is not an exit path |

---

## 13. Routine maintenance

| Task | Cadence | Owner |
|---|---|---|
| Rollback drill (Doc 10 §8.6) | quarterly + after any flag-set or key-holder change | Chen Wei |
| Censorship / blocking simulation (`NFR-014`, `NFR-025`) | quarterly | Chen Wei |
| Indexer rebuild-and-diff | monthly | Chen Wei |
| Operator-diversity review (S-13) | monthly | Chen Wei |
| **Re-identification review of the whole metrics + logging corpus** | **quarterly — zero linkages is the pass bar** | Dr. Lena Kowalczyk |
| Duplicate-rate / Sybil audit (`NFR-004`, G-09) | quarterly | Marcus Adeyemi |
| Attester-concentration review (G-07) | monthly | Marcus Adeyemi |
| Population-source freshness & independence review | quarterly per region | Yuki Sato |
| Feature-flag debt review (`permanentFlags()`, `removeBy` targets) | every release | Chen Wei |
| Secret rotation (relayer, indexer, CDN) — **note: `timelock` and `emergencyDisabler` are immutable and CANNOT be rotated** | quarterly | Chen Wei |
| Access review | quarterly | Rafael Duarte |
| Transparency report publication (`FR-057`) | per cadence + on request | Sofia Marchetti |
| Refine-log routing | **weekly** + on threshold breach | Chen Wei → Priya Raghunathan |
| Dependency + audit re-review | annual, and on any circuit change | Rafael Duarte |

### 13.1 Toil tracking & reduction

Cap toil at **< 50%** of on-call time. Top items convert into backlog items (Doc 05) via the
product-owner — the sre does not self-serve automation into the product backlog.

| Toil task | Frequency | Time/occurrence | Automation candidate? |
|---|---|---|---|
| Manual deployment-safety check (no promotion job exists yet) | every promotion | 30 min | **Yes — `REL-LIM-12`, Gate-2 blocker** |
| Reconstructing verifier version history from events (no `versionAt` accessor) | every safety check | 20 min | **Yes — `REF-06`** |
| Enumerating open ballots before a flag disable (PB-KILL) | every kill decision | 15 min | **Yes — `REF-01`** |
| Attester-share computation per region | monthly | 45 min | Yes |
| Population-source provenance verification | quarterly per region | 2 h | Partly — provenance is a judgement call |
| Weekly refine-log routing | weekly | 30 min | Partly — capture can be templated; judgement cannot |
| Cross-checking flag posture across `flags.js` / fixture / Doc 13 | every release | 15 min | **Yes — `REF-07`** |

---

## 14. Security operations

- **Secret rotation.** Relayer, indexer and CDN credentials quarterly. **The protocol timelock and
  the emergency disabler are `immutable` in every core contract and cannot be rotated** — rotation
  means redeploying the core, i.e. a migration. Two emergency-disabler holders in different
  jurisdictions, hardware-backed, quarterly proof-of-possession (Doc 10 §11.3).
- **Access review** quarterly (Rafael Duarte). Principle: the fewer capabilities exist, the fewer can
  be compelled from us (`ADR-013 §3`).
- **Audit logs** for operational actions (deploys, flag changes, config) are kept and **published**.
  On-chain actions are already public and self-auditing: `FlagDisabled` carries its own reason string.
- **No access logging on gateways** (`ADR-013 §3`) — a deliberate, permanent absence.
- **Vulnerability handling.** Responsible-disclosure channel; privacy findings routed straight to
  Sev-1; every finding assessed against `NFR-009`'s zero-critical/zero-high bar.
- **Supply chain.** `@trumocracy/protocol` is held to **zero runtime dependencies** so it can serve as
  the differential reference; `tools/dep-guard` enforces `protocol ← sdk ← web` in CI. Reproducible
  builds are verified by ≥1 independent party (`NFR-021`).

---

## 15. Dependencies & failure handling

| Dependency | Class | If it fails | Citizen impact |
|---|---|---|---|
| L2 sequencer (Base) | liveness + ordering trust | L1 force-inclusion (`DES-041`) | delay ≤60 min, never denial |
| Ethereum L1 | settlement + escape hatch | none available — this is the floor | total (accepted; the floor is Ethereum itself) |
| Personhood issuers | ≥2, ≥1 non-state | others serve; **fail closed** if the set would breach the invariant | new enrolments only |
| Residency attesters | ≥2 per region | others serve; region freeze if anomalous | new residency credentials only |
| Population sources | ≥5 per region | denominator holds at last effective value | new petitions cannot be sized |
| ERC-4337 bundler | replaceable | alternate → self-pay → L1 | citizen may pay their own sub-cent fee |
| Paymaster treasury | funded | degrade to self-pay | **degradation, never denial** |
| Indexer | cache only | client reads chain directly | slower, still correct |
| IPFS pinning (≥3) | content availability | Arweave mirror (permanent) | none |
| Arweave | permanence | IPFS + CDN | none |
| MACI committee | 5-of-7 | re-run under a fresh committee | tally delayed; **never a plaintext tally** |
| App stores / registrars / DNS | distribution | PWA + IPFS + ENS + Arweave (`CON-010`) | none if ≥2 paths hold |

**Fail closed** on anything security-relevant: bad proof, unknown root, spent nullifier, thin
anonymity set. **Fail open** on convenience: indexer, sponsorship, notifications. Idempotency is free
— a replayed action is rejected by construction, because its nullifier is already spent.

---

## 16. Known issues & workarounds

| ID | Issue | Workaround | Status |
|---|---|---|---|
| `REL-LIM-01` | Mock verifiers accept any proof | testnet only; deployment-safety gate blocks promotion | Phase 2 |
| `REL-LIM-02` | Votes anonymous, **not receipt-free** | UI warning mandatory; testnet only | Phase 3 |
| `REL-LIM-03` / `REF-02` | `issueResidency` unauthenticated | PB-ATTEST monitoring only — detection after the fact | **Gate-2 blocker** |
| `REL-LIM-04` / `REF-03` | `spendNullifier` unpermissioned | none available operationally | **Gate-2 blocker** |
| `REL-LIM-07` / `REF-01` | Kill switch disenfranchises open ballots | **PB-KILL** procedure | **Gate-2 blocker** |
| `REL-LIM-12` | No deployment-safety promotion job | manual check, 30 min per promotion (toil) | **Gate-2 blocker** |
| `REL-LIM-06` / `REF-05` | Boolean on-chain flags | staging is client-cohort only; stated in Doc 10 §6.1 | Open |
| `REL-LIM-09` / `REF-06` | Verifier retirement takes ~60 days | disable the consuming flag instead | Open |
| `REL-LIM-13` | Interim tallies readable on-chain | client + indexer suppression (`DES-026`) | By design, disclosed |
| `REL-LIM-05` / `REF-04` | Population sources route through the timelock | publish every raw submission | Open |
| — | Dashboards do not exist | none | **Gate-2 blocker** |

---

## 17. Contacts & links

Deploy / rollback → **Doc 10**. Service record → **Doc 12**. Release content → **Doc 09**.
Architecture → **Doc 03**. Requirements → **Doc 02**. Plan, RACI, kill criteria → **Doc 13**.
Decisions → `docs/adr/ADR-001…ADR-014`. Learnings → `docs/refine-log.md`.
Status reports → `artifacts/status/`. Dashboards → `N/A — not yet produced`.

---
### Related
Deploy/rollback → Doc 10; service record → Doc 12. Production learnings become `REF-##` entries and
are routed to the product-owner — weekly, or immediately on a threshold breach.
