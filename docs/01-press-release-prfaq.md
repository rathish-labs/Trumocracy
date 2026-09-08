# Press Release / PR-FAQ — Trumocracy

```
Document ID:   PR-TRUMOCRACY
Version:       2.3.0
Status:        Approved — 01-press-release-prfaq-v2.3.0-business-cycle3.md (PASS 99%, 0C/0H/0M/1L; reviewer: technical-writer, neutral,
               PM-assigned; one Low carried, non-blocking, to fold at the next touch: ISS-01 the §C preamble accuracy note slightly overstates that every §C row is v2-specific). Previously: In Review — v2.3.0, review-loop rework **cycle 3 of 5** against
               artifacts/reviews/01-press-release-prfaq-v2.2.0-business-cycle2.md (business,
               cycle 2 — **FAIL 96%, 0 Critical / 0 High / 1 Medium / 0 Low**; reviewer:
               technical-writer, neutral, PM-assigned). All six cycle-1 issues were verified
               **closed** at v2.2.0 and none is reopened. The single cycle-2 Medium (ISS-01) is
               the **integrity / no-gatekeeper** claim class, which v2.2.0 deliberately left
               un-ruled and referred upward: §A tenet 1 ("Governance runs in code or it does not
               run") and §E3 "Why blockchain at all?" ("nobody, including Trumocracy, may be able
               to alter a threshold count, a membership roll or a tally") are present-tense
               integrity claims that Doc 02 §16.5 contradicts for v1 — Charter Rule 3 / tension
               **T-05**, approver-**CONFIRMED** 2026-08-23: the operator's own database **is** the
               source of truth for tallies, and the published hash gives tamper-**evidence**, not
               tamper-**prevention**. The reviewer found the §0 override sentence scoped only to
               identity linkage, so it did not reach this class.
               **Ruling applied:** the **project-manager** (Ana-Maria Petrescu) ruled on
               2026-09-06, within approver ruling 5 ("so a public reader cannot mistake it for
               what ships today"), that the integrity class is **in scope** of the banner's
               purpose. This version takes the reviewer's option (a): **§0's override is widened
               to cover counts, rolls and tallies**, and the class is marked.
               **Fixed:** §0 override widened (integrity added, grounded in §16.5 T-05 and §16.4
               `H-05`); §A tenet 1 and §E3 "Why blockchain at all?" marked; §A tenet 8 given a
               `(v1 accuracy note)` rather than a v2-target marker, because its core append-only
               claim is **materially true in v1** under `NFR-028` and only its last clause needs
               qualifying — the reviewer's own weighting. **Beyond the report,** the integrity
               sweep of §B, §C and §E that the PM directed found three further passages, all
               handled here: §A tenet 7 ("a machine executes it… no human stands between the
               result and its effect"), §E1 "What happens if it goes wrong for me?" ("there is no
               such button, by design"), and §E3 "You say 'no gatekeepers'…" ("no administrative
               override, pause key or privileged role in the governance path"), plus a
               `(v1 accuracy note)` on the §C preamble covering the "independently reproducible
               tallies" target and the deanonymisation kill-criterion row. **§B needed no new
               marker:** its v2.1.0 section-head marker already states that no sentence in §B
               describes software that exists today, which reaches "switches on automatically"
               and "no override button".
               **Marker count, stated once and scoped to the body (§A–§F):** **twenty**
               `(v2 target — see §0.)` markers — six from v2.1.0, nine from v2.2.0, **five** added
               here (§A tenet 1, §A tenet 7, §E1 "goes wrong", §E3 "no gatekeepers", §E3 "Why
               blockchain") — plus **three** `(v1 accuracy note — see §0.)` (§E2 data-protection
               from v2.2.0; §A tenet 8 and the §C preamble added here). Twenty-three inline
               annotations in total.
               Changes specified in
               artifacts/product-owner-2026-09-06T2100-doc01-cycle3-spec.md. Unchanged by this
               version: the fifteen v2.2.0 markers, Classification: Public, and every
               requirement, tenet, metric, FAQ, scope item and open item.
               **v2.2.0 record, carried forward:** cycle-2 rework against the cycle-1 report
               (FAIL 87%, 1C/2H/3M), which closed all six cycle-1 issues in the identity-linkage
               claim class and added nine markers and one accuracy note; spec
               artifacts/product-owner-2026-09-06T1900-doc01-cycle2-spec.md.
               **v2.1.0 record, carried forward:** public-release posture rework of 2026-09-06 —
               added §0 and six markers and changed Classification from Internal to Public,
               directed by the approver ruling of 2026-09-06 (Rathish Kumar, ruling 5) recorded
               in artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11; finding of
               record artifacts/status/PUBLIC-RELEASE-READINESS-2026-09-06.md §1 row E-8; spec
               artifacts/product-owner-2026-09-06T1530-doc01-spec.md. Neutral reviewer for both
               versions: technical-writer, business mode, per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md.
               **v2.0.0 record, carried forward:** Approved (review loop, cycle 1 PASS 97%;
               Gate 1 decision pending). That approval and that pending Gate-1 decision are
               unchanged by v2.1.0 or v2.2.0, neither of which adds, removes, rewords or
               renumbers any requirement, tenet, metric, FAQ or scope item.
Classification: Public — published with the repository. This document is the v2 target vision,
               not a description of what is built today; read §0 first.
Owner:         Priya Raghunathan — Product Owner
Approvers:     Gate 1 — Product, Engineering, Design
Last updated:  2026-09-06
Change log:
  v2.3.0 — 2026-09-06 — Review-loop rework, cycle 3 of 5, against
             artifacts/reviews/01-press-release-prfaq-v2.2.0-business-cycle2.md (FAIL 96%;
             0 Critical / 0 High / 1 Medium). Closes the integrity / no-gatekeeper claim class
             (ISS-01), ruled in scope by the project-manager on 2026-09-06 within approver
             ruling 5. **Widens §0's override sentence** to cover counts, rolls and tallies: in
             v1 the operator's database is the source of truth and the published hash is
             tamper-evidence, not tamper-prevention (Doc 02 §16.5 Charter Rule 3 / T-05,
             approver-confirmed; §16.4 H-05). Adds five "(v2 target — see §0.)" markers — §A
             tenet 1; §A tenet 7; §E1 "What happens if it goes wrong for me?"; §E3 "You say 'no
             gatekeepers'…"; §E3 "Why blockchain at all?" — bringing the body total to twenty,
             and two "(v1 accuracy note — see §0.)" at §A tenet 8 (whose append-only claim is
             materially true in v1 under NFR-028) and the §C preamble, bringing that total to
             three. §B needed no new marker: its section-head marker already covers it. No
             requirement, tenet, metric, FAQ, scope item or open item is added, removed,
             reworded or renumbered; Classification: Public and the fifteen v2.2.0 markers are
             unchanged. Spec artifacts/product-owner-2026-09-06T2100-doc01-cycle3-spec.md;
             standard applied: FR-131 clause (e) (Doc 02 §4.45) and Doc 02 §16.5.
  v2.2.0 — 2026-09-06 — Review-loop rework, cycle 2 of 5, against
             artifacts/reviews/01-press-release-prfaq-v2.1.0-business-cycle1.md (FAIL 87%;
             1 Critical / 2 High / 3 Medium). Adds nine further inline "(v2 target — see §0.)"
             markers — §D final bullet; §E1 "Who is this for?"; §E1 "Do I need to understand
             crypto?"; §E2 "top 3 risks"; §E3 "Why no analytics"; §E3 "right to be forgotten";
             §E3 "extremists"; §E3 "billionaire"; §E3 "What if someone loses their phone?" —
             bringing the body total to fifteen, and adds one "(v1 accuracy note — see §0.)" at
             the §E2 data-protection answer. Grounds the account-recovery claim (ISS-05) in
             FR-059 (PARTIAL) and Doc 02 §16.4 H-10, and the "real, unique person" phrase in
             FR-132 §(d) and §16.4 H-15. Corrects the marker count the v2.1.0 Status field
             stated (ISS-06). No requirement, tenet, metric, FAQ, scope item or open item is
             added, removed, reworded or renumbered; §0, the six v2.1.0 markers and
             Classification: Public are unchanged. Spec
             artifacts/product-owner-2026-09-06T1900-doc01-cycle2-spec.md; standard applied:
             FR-131 clause (e) (Doc 02 §4.45, v2.17.0).
  v2.1.0 — 2026-09-06 — Public-release posture. Adds §0 "Read this first" (this PR-FAQ is the
             Definition-B (v2) target vision, written as if launched 2027-06-01; none of it is
             built; what exists is a working design plus three features behind flags against
             development mocks, deployed nowhere; v1 voting is NOT anonymous, NOT receipt-free
             and NOT coercion-resistant). Adds "(v2 target — see §0)" markers at §A tenet 2,
             §A tenet 4, the head of §B, the §E1 data-and-privacy answer, the §E1 coercion
             answer and the §E3 member-list answer. Changes Classification Internal → Public.
             No requirement, tenet, metric, FAQ, scope item or open item is added, removed,
             reworded or renumbered. Approver ruling 2026-09-06 (ruling 5); spec
             artifacts/product-owner-2026-09-06T1530-doc01-spec.md; FR-131 clause (e)
             (Doc 02 §4.45, v2.17.0) is the standard applied.
  v2.0.0 — 2026-08-10 — Vision re-entry directed by the approver (Rathish). Party
             self-governance first; participation tiers (Supporter / Worker / Candidate);
             one-pilot correction per OI-04; launch dateline moved to 2027-06-01 per S-01;
             budget ~USD 4.13M per L2 lever already approved; schedule/appetite
             re-estimated in Doc 13 after Gate 1 (open item — not invented here); four
             governance rulings embedded across §A, §B, §D, §E.
  v1.0.0 — 2026-08-08 — Initial release.
```

> **Based on:** Amazon "Working Backwards" PR-FAQ. **Produced in:** Vision. **Approved at:** Gate 1.
> Written as if Trumocracy has already launched on **2027-06-01**, in an ordinary citizen's language.
> Every promise below becomes an indexed requirement in `docs/02-requirements-srs.md`.

---

## 0. Read this first — this document is the target vision (v2), not what exists today

> **⚠️ READ THIS FIRST — this document is the target vision (v2), not what exists today.**
>
> This PR-FAQ is written **as if the finished product had already launched on 2027-06-01**. It
> describes the **Definition-B (v2)** design: anonymous membership, a private and receipt-free
> ballot, and zero-knowledge enrolment. **None of that is built.** Read every promise below —
> every tenet, every line of the press release, every metric, every FAQ answer — as a target we
> intend to reach, not as a description of the software in this repository.
>
> **What exists today** is a working design plus **three application features built behind
> feature flags**: party creation; joining and membership; and proposals and debate. They run
> against **development mocks** — the zero-knowledge verifiers are `IS_INSECURE_MOCK` stubs that
> accept any proof. The software is **deployed nowhere** and has **never been used for a real
> vote**.
>
> **In the current version (v1), voting is NOT anonymous, NOT receipt-free and NOT
> coercion-resistant. Trumocracy's own database can see how each account voted and which party
> each account belongs to.** Casting a vote is not yet a working screen in release 0.1.0; this is
> what will be true the day it ships (Doc 14 §2.6). **Backing a petition is a public act, on
> purpose** (Doc 14 §2.2). Nobody outside Trumocracy sees any of this on a public page — but our
> own records can, and a government could order us to hand them over.
>
> **Do not use this software to organise where being identified could hurt you.**
>
> **Where to read what is true today, instead of this document:**
> `README.md`; **Doc 14 §0.1 and §2.6** (`docs/14-user-guide.md`) for the plain-language warning;
> and **Doc 09 §0** (`docs/09-release-notes.md`), which records that release 0.1.0 has **not**
> been approved and **MUST NOT** be promoted to production. The full v1 / v2 split, requirement
> by requirement, is **Doc 02 §16** (`docs/02-requirements-srs.md`) — §16.4 is an honesty
> register listing every guarantee a reader might assume and what v1 actually does, and §16.5
> records the approver's rulings of 2026-08-23 that accepted v1 as a **disclosed non-anonymous
> product**.
>
> The rule this banner exists to satisfy is **`FR-131`** (Doc 02 §4.45), and in particular
> **clause (e)**: the test is **what an ordinary Grade-8 reader would take a claim to mean**, not
> whether a banned word appears. If any sentence in this document would leave such a reader
> believing that Trumocracy cannot today link a person to a vote, to a party membership or to a
> petition they backed, **this banner overrides it**.
>
> **The same override covers who can change the numbers.** If any sentence in this document would
> leave an ordinary Grade-8 reader believing that Trumocracy itself cannot today alter a count, a
> membership roll or a tally, **this banner overrides that too**. In the current version (v1), the
> operator's own database **is the source of truth** for counts, rolls and tallies. Publishing a
> hash of a result makes a later change **detectable** — that is tamper-**evidence**, not
> tamper-**prevention** — and the operator can in principle alter the database before the hash is
> published. A design in which nobody, including Trumocracy, **can** alter a count is the **v2**
> design (Doc 02 §16.5, Charter Rule 3 / tension **T-05**, approver-confirmed 2026-08-23; §16.4
> `H-05`). No administrative approval, reversal or override step exists in the governance flow in
> either version — that part of the promise holds today; what v1 does not yet have is a record the
> operator is technically unable to change.
>
> _(Added at v2.1.0 by the approver ruling of 2026-09-06, Rathish Kumar — ruling 5, recorded in
> `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11; finding of record
> `artifacts/status/PUBLIC-RELEASE-READINESS-2026-09-06.md` §1 row E-8 and §6. **The
> counts-rolls-tallies paragraph was added at v2.3.0** by the project-manager's ruling of
> 2026-09-06 within the same approver ruling 5, closing `ISS-01` of
> `artifacts/reviews/01-press-release-prfaq-v2.2.0-business-cycle2.md`. Every sentence above
> reuses wording already approved in Doc 14 §0.1/§2.6, Doc 09 §0 or Doc 02 §16/§16.5; it makes no
> new claim.)_

---

## A. Tenets (the principles for this product)

1. **No gatekeeper, ever — not even us.** If a human being at Trumocracy can approve, reject,
   promote, demote, delete or reorder anything inside a party, we have rebuilt the thing we set out
   to abolish. Governance runs in code or it does not run.
   **(v2 target — see §0.)** "Governance runs in code or it does not run" is the **v2** design.
   What holds in **v1**: there is no approval, rejection, promotion or reordering step for a
   Trumocracy employee anywhere in the governance flow. What does not: the operator's own database
   is the **source of truth** for counts, rolls and tallies, so a result can in principle be altered
   at the database before its hash is published — tamper-evidence, not tamper-prevention (Doc 02
   §16.5, Charter Rule 3 / **T-05**, approver-confirmed; §16.4 `H-05`). The §E3 answer "You say 'no
   gatekeepers' — but you write the code" states the same tension.
2. **An ordinary member is invisible; a candidate for office is not.** Anonymity protects the
   powerless; disclosure binds the powerful. We will accept a worse product experience before we
   accept a design that lets anyone build a list of who belongs to which party.
   **(v2 target — see §0.)** In v1 that list exists: the operator's own database links each
   account to the party it joined (Doc 02 §16.4 `H-02`; `FR-082` is classed `DEFERRED-v2`).
3. **Money buys nothing here.** No purchasable membership, no transferable vote, no weighting by
   donation, seniority or office. A billionaire and a bus driver hold exactly one vote each.
4. **A vote you can prove is a vote you can sell — or be beaten for.** Receipt-freeness and the
   ability to silently override a coerced vote are not features to be traded away for convenience.
   **(v2 target — see §0.)** Neither exists in v1: v1 voting is **NOT receipt-free and NOT
   coercion-resistant**, and there is no silent override (Doc 02 §4.45 `FR-131` clause (a);
   §16.4 `H-03`; Doc 14 §2.6).
5. **A citizen on a five-year-old phone is the customer.** No seed phrases, no gas, no wallets, no
   crypto vocabulary in any primary flow. If the median citizen cannot finish the task on a cheap
   handset on a weak network, it is not shipped.
6. **A party must govern itself before it asks to govern you.** A platform that helps groups seize
   state power while leaving their own internal governance opaque, oligarchic or unaccountable is not
   a democracy tool — it is a faster path to the same destination. Every party built on Trumocracy
   publishes its constitution, its governance rules, its finances and its decisions as a condition of
   existing, not as an optional transparency feature.
7. **Humans express preference; code executes consequence.** Humans deliberate, draft, propose,
   debate and vote. The moment a vote closes, a count is confirmed, a threshold is crossed, a term
   expires or a removal bar is met — a machine executes it, immediately and identically for everyone.
   No human, committee or Trumocracy employee stands between the result and its effect.
   **(v2 target — see §0.)** The execution step is automatic in v1 too — no person approves or
   releases a result. What is **v2** is the guarantee that the result the machine acts on cannot be
   changed by us: in v1 the operator's database is the source of truth, and the published hash makes
   an alteration detectable rather than impossible (Doc 02 §16.5 **T-05**; §16.4 `H-05`).
8. **Nothing is deleted; transparency is the anti-hijack mechanism.** Every entity is active or
   inactive; every action is appended to an immutable record; every decision carries a permanent
   trail. An actor who wants to capture a party, rewrite its history or disappear inconvenient votes
   finds the mechanism missing. History is the immune system.
   **(v1 accuracy note — see §0.)** This tenet is **materially true in v1**: the append-only,
   nothing-is-deleted record is a v1 requirement (`NFR-028`, Must, IN-v1), not a deferred one. One
   clause is narrower than it reads. An actor who can write to the operator's database directly is
   not stopped by the record itself, because in v1 that database is the source of truth and the
   published hash makes such a change **detectable** rather than impossible (Doc 02 §16.5 **T-05**;
   §16.4 `H-05`). Against everyone else — including anyone acting through the product — the
   mechanism is exactly as described.
9. **Tiers describe what you have done; they never decide what your vote is worth.** Becoming a
   Worker is recorded work, not a promotion awarded by anyone. Becoming a Candidate requires a
   member vote but confers no voting weight. A Supporter and a founding member hold exactly one vote
   each. Differentiated eligibility per vote type is permitted; differentiated weight is not, ever.

---

## B. Press Release

> **(v2 target — see §0.)** Everything in section B is a **dated-in-the-future press release**
> for the Definition-B (v2) product, written as if it had already shipped. No sentence in this
> section describes software that exists today, and the launch, the pilot jurisdiction, the
> quotes and the customer journey are all illustrative. What exists today is in §0.

**FOR IMMEDIATE RELEASE — Geneva, Switzerland — 2027-06-01**

### Headline
**For the first time, a political party can be built by citizens, governed by its own constitution, and held to account continuously — not only on election day.**

### Sub-headline
Trumocracy gives any verified adult the tools to draft a complete party constitution and measurable
programme, gather backing from verified residents, and — once enough real people in their region
endorse it — switch on a self-governing party where every member participates continuously in
proposals, candidate selection and performance measurement, and nobody can buy, override or shortcut
any of it.

### Summary paragraph
Trumocracy launched today in its first pilot jurisdiction. It is a free, open platform where a
group of founding members can write and ratify a party constitution — the governance rules,
membership rights, finances, candidate-selection process and dispute procedures — publish it
permanently, then draft a measurable programme across compulsory policy areas and open the party to
verified residents of their region. When endorsements from those residents reach a fixed share of
the area's eligible population the party switches on automatically. No committee approves it. No
party boss admits members. No donation buys a better seat. Every member joins directly, holds one
identical vote regardless of seniority, participates continuously in proposals and decisions,
chooses candidates from among themselves, and can remove any representative mid-term.

### The problem
Political parties are the organisations most people use to engage with democracy — and they are
often the least democratically governed institutions most people ever encounter. Candidate lists are
settled by a handful of people in a room before the meeting. Membership tiers and donor access
quietly decide whose opinion reaches the leadership. There is no written constitution that members
can hold anyone to. Finances are disclosed at the minimum required by law, and sometimes not even
that. Party promises are published at election time and forgotten the day after; there is no public
record of which commitments were kept, which were abandoned, and who was responsible.

A citizen with a serious programme and no patron has nowhere to begin — party registration is gated
by incumbents, and the incumbents are the people the programme threatens. Even inside parties that
call themselves democratic, members cannot see how their representatives voted internally, cannot
remove them between elections, and are asked to hand over their name, address and political
affiliation to a private organisation that may leak it, sell it, or be compelled to surrender it.

Any tool that asks people to trust a new party with government power while leaving that party's
internal governance unexamined is solving half the problem.

### The solution
Trumocracy solves two problems at once.

The first is identity without surveillance. It separates **proving you are a real, eligible person**
from **revealing who you are**. You prove once that you are a unique human living in a specific
region. From then on, the platform knows only that "one eligible person in this district acted" —
never which person, and never that the same person also acted somewhere else. On that foundation
everything else is arithmetic that runs in code: an endorsement count that either crosses a
published threshold or does not; a membership that anyone can join and nobody can veto; a vote that
is one-per-person and cannot be transferred, sold or delegated; a recall that triggers
automatically when the bar is met.

The second is internal governance. Before a party can open to members, its founders must publish a
complete party constitution — its governance rules, membership rights, financial-transparency
procedures, candidate-selection process, conflict-of-interest disclosure, and dispute resolution
timelines. That document is public and permanent from the moment it is ratified. Once the party is
live, every decision follows a published lifecycle: proposal → review → discussion → debate → vote →
decision → implementation → measurement. Every commitment in the manifesto carries a measured
baseline, a target, a timeline, a budget, and a named owner, tracked publicly for 1, 3, 5, 10 and
30-year horizons. Committees may draft and deliberate, but they hold no decisional weight — every
output goes to a member vote. Candidate selection follows a published schedule, uses member
questions and recorded debates, and ends in a member vote. The transparency dashboard and factual
performance scorecard are live from day one.

Trumocracy has no override button, because we did not build one.

### Leader quote
"We were told the hard part was technology. It wasn't — the hard part was refusing to keep a single
lever for ourselves. Every time we hit a problem, the easy fix was an admin button, and every time we
said no. What shipped today is a platform where our own staff have exactly as much power over your
party as a stranger on the street: none." — Priya Raghunathan, Product Owner, Trumocracy

### How it works / customer journey
1. **Prove you're you, once.** You confirm you are a real, unique adult legally eligible to
   participate in a particular country's political process. Trumocracy keeps no copy of your
   documents and never learns your address — only that someone eligible in that region completed the
   check.
2. **Choose your country and join or found a party.** You select the country where you are legally
   eligible, then join an existing party or join with others to found one. You hold one active party
   membership at a time.
3. **(Founders) Write the constitution.** Before a party can open to members, its founding members
   must draft and ratify a party constitution: governance rules, membership rights, financial
   transparency procedures, candidate-selection process, conflict-of-interest and recusal rules,
   leadership term limits, and a dispute-resolution process with defined timelines. The constitution
   is published permanently and is the first thing any prospective member reads.
4. **(Founders) Publish the programme and manifesto.** Cover all compulsory policy areas. Each
   manifesto commitment gets a measured baseline, a target, a timeline, a budget allocation, and a
   named owner. Commitments are tagged to 1, 3, 5, 10 and 30-year horizons and are tracked
   publicly. A commitment without a baseline and owner cannot be published.
5. **Petition.** The party goes live as a *petition*. Verified residents of the declared
   jurisdiction can endorse it. The bar is public and fixed: a set percentage of that jurisdiction's
   eligible population.
6. **Activate — automatically.** Hit and hold the threshold and the party switches on. There is no
   approval step and nobody to lobby.
7. **Join and choose your tier.** Any verified citizen joins directly. No sponsor, no interview, no
   fee. You are a **Supporter** automatically — anonymous, with full voting rights in all member
   votes, and nothing attributable to you. If you record work for the party (research, organising,
   communication), you are a **Worker** — self-declared; the work is the credential and nobody
   approves you into it. To become a **Candidate**, you self-nominate and the members vote. Tiers
   describe what you have contributed; they never change what your vote is worth.
8. **Participate continuously.** Any member may submit a proposal. Every proposal goes through a
   published lifecycle: proposal → review → discussion → debate → vote → decision → implementation
   → measurement. Committees may draft, facilitate and publish, but hold no decisional weight —
   their output is a proposal that goes to the ordinary member vote with no special status. Any
   member may submit a competing proposal on the same question. The full trail is permanent.
9. **Select your candidates.** Candidates are selected on a published schedule. Members submit
   questions; debates are recorded. At the end: a member vote. Selection by the membership is the
   only path to candidacy.
10. **Hold them to it.** The transparency dashboard and factual performance scorecard show every
    commitment and its measured progress — baseline, current value, and evidence link — from day
    one. The record is permanent. Representatives' governance votes are attributable to them. If
    they stop delivering, any member in their region can start a recall mid-term.

### Customer quote
"I've been to three party meetings in my life and at all three the decisions were already made in
another room. Here I wrote a housing plan, 40,000 people I've never met backed it, and the party
turned on by itself at three in the morning. Nobody let me in. There was nobody to let me in."
— Ifeoma, 34, community pharmacist and founding drafter of a district party

### Availability & call to action
Trumocracy is free to use, open source, and available today as a mobile web app and a lightweight
Android app in the first pilot jurisdiction, in eight languages including right-to-left scripts. It
runs on a five-year-old handset on a 2G-class connection. There is no token to buy and nothing to
pay. Start at the enrolment page, or read the code and run the independent verifier yourself.
Expansion to additional jurisdictions is planned for the post-launch period, using the same
published pilot-selection criteria.

---

## C. Success metrics (measurable promises)

> Every number here becomes a tracked requirement in Doc 02. Measurement owner: **Yuki Sato**
> (Data & Measurement Lead). Time-box: first 12 months post-launch unless stated.
>
> **(v1 accuracy note — see §0.)** Every row below is a **target for the v2 product, measured after
> launch**. None has been measured, because the software is deployed nowhere and has never been
> used for a real vote (§0). Two rows additionally depend on guarantees v1 does not have.
> **"Independently reproducible tallies"**: in v1 a third party re-running the count must still
> trust that the operator's database says what it says — the operator is the source of truth, and
> the published hash is tamper-evidence (Doc 02 §16.4 `H-05`; §16.5 **T-05**). **"Confirmed
> deanonymisation… 0"**: in v1 that kill criterion reads against **platform-initiated** exposure
> only, not against operator-side database access (Doc 02 §16.5).

| Metric | Baseline (2026-08-08) | Target | Guardrail (must-not-regress) |
|--------|----------------------|--------|------------------------------|
| Verified unique persons enrolled in the pilot jurisdiction | 0 | ≥ 250,000 by 2027-12-01 | Duplicate/synthetic-person rate ≤ 0.1% of credentials, independently audited |
| Parties reaching activation threshold | 0 | ≥ 12 in the first 12 months post-launch | ≥ 60% of activated parties still above the maintenance floor at month 6 |
| Median cost per citizen governance action (platform-borne) | n/a | < USD 0.01 | p99 < USD 0.05; **USD 0.00 charged to the citizen, always** |
| First-time citizens completing enrol → endorse unaided | n/a | ≥ 80% within 10 minutes | SUS ≥ 75; support-contact rate ≤ 5% of enrolments |
| Confirmed deanonymisation of an ordinary member's affiliation or ballot | n/a | **0** | 0, permanently — this is a kill-criterion metric |
| Independently reproducible tallies (third party re-runs the count and matches) | n/a | 100% of closed ballots | ≥ 25 distinct third-party organisations running the verifier by month 6 post-launch |
| Reported coercion cases where the voter's silent override took effect | n/a | ≥ 95% of reported cases | 0 cases where the override was externally detectable |
| Largest single identity attestor's share of credentials in any one region | n/a | ≤ 40% | Never > 50% (a majority-issuing attestor is a stop-the-line event) |
| Elected representatives subject to a recall reaching a vote | 0 | ≥ 1 per 20 offices per year (evidence the mechanism is real) | ≤ 10% of recall initiations judged harassment by the published abuse metric |
| Citizen write-path availability | n/a | 99.5% monthly | No single operator outage blocks a citizen action for > 60 minutes |
| WCAG 2.2 AA conformance on all primary flows | n/a | 100% of primary flows | 0 Level A or AA failures at Gate 2 |
| Activated parties with a published constitution AND at least one manifesto commitment with a measured baseline and target (v2 — party self-governance condition) | 0 | 100% of activated parties at launch | 0 activated parties without a ratified constitution on record |
| Committee outputs (drafted proposals, position papers) that proceeded to an ordinary member vote without special weighting (v2 — no-privileged-output guardrail) | n/a | **100%** | 0 committee outputs treated as decisions without a member vote — kill-criterion if violated |
| Per-user behavioural events collected (clicks, page views, dwell time, reading trails) by any platform component (v2 — political-intelligence-database guardrail) | n/a | **0** | 0, permanently — any collection is a kill-criterion event; aggregate-only analytics permitted |
| Decisions with a complete decision trail on the permanent record (proposal → vote result → implementation status) (v2 — transparency) | n/a | ≥ 99% of all closed member votes | ≤ 1% of votes may have incomplete trails due to infrastructure failure; all gaps are published |

---

## D. Out of scope (explicit non-goals — this release)

- **Government governance.** Trumocracy organises *parties*; it never conducts, certifies or
  replaces an official government election. This boundary is a hard constraint (`CON-001`). The
  first implementation is explicitly for political-party governance — the claim is that a party
  should prove it can govern itself transparently before asking citizens to trust it with government
  power.
- **Any transferable token, coin, sale or fundraising instrument for the platform itself.**
- **Vote delegation / liquid democracy / proxy voting.** Deliberately excluded: delegation
  reintroduces brokers, which is the problem we are solving. Revisit no earlier than a future major
  version, only if the tenet is formally overturned.
- **Cross-jurisdiction or federated parties.** A party declares one jurisdiction at activation.
  Expansion requires a fresh petition in the new jurisdiction.
- **Party treasuries at full scale.** This release ships the *guardrail* (money confers no
  governance advantage) and public ledger reporting; contribution caps and spend-approval workflows
  are Should/Could and may land post-launch.
- **Content moderation of political speech by Trumocracy staff.** We will not build it. The only
  permitted intervention is jurisdiction-scoped display filtering of content that is unlawful where
  it is displayed, publicly logged, never a deletion from the record.
- **Discussion forums, direct messaging, feeds, or any social layer.** Out of scope; parties may use
  their own channels.
- **Party dormancy/deactivation lifecycle, treasury splitting on a fork, and personal blocklists.**
  Deferred; tracked as Could items.
- **Desktop-first experience, and deployment to jurisdictions beyond the pilot at launch.**
  Multi-country capability is in scope from the outset; multi-jurisdiction *deployment* at launch is
  not. Additional jurisdictions roll post-launch against the published selection criteria.
- **Integration with any official electoral roll as a system of record.** We consume population
  denominators as reference data only, from at least two independent sources.
- **Per-user behavioural tracking of any kind** — clicks, page views, dwell time, reading trails,
  or any other per-session behavioural log attributable (even pseudonymously) to an individual.
  This is a deliberate trade-off, not a technical limitation: linking behaviour to a pseudonym over
  time is a reliable deanonymisation vector, and a hostile actor with a behavioural database could
  build a political-intelligence profile on every party member even without identity documents.
  Analytics are aggregate-only; any personalisation is client-side and user-held. The analytics
  capability loss is accepted permanently in exchange for unconditional anonymity for Supporters.
  **(v2 target — see §0.)** "Unconditional anonymity for Supporters" is the **v2** property. In
  **v1** a Supporter's party membership sits in the operator's database and is knowable to
  Trumocracy (Doc 02 §16.4 `H-02`; `FR-082` and `FR-086` classed `DEFERRED-v2`). The
  no-behavioural-tracking commitment itself is **not** deferred: it is permanent and applies in v1
  exactly as stated in this bullet.

---

## E. FAQ

### E1. Customer FAQs

- **Who is this for?**
  **(v2 target — see §0.)** Two phrases in this answer describe the **v2** design. **(1)** "You
  are a **Supporter** by default — anonymous": in **v1** a Supporter is **not** anonymous to
  Trumocracy — the operator's database links each account to the party it joined, and to how it
  voted once voting ships (Doc 02 §16.4 `H-01`, `H-02`; `FR-082` classed `DEFERRED-v2`).
  **(2)** "a real, **unique** person": v1's identity check establishes a **real, legal-age**
  person, not a unique one — someone holding two legitimate government IDs can hold two counting
  accounts (`FR-132` §(d); Doc 02 §16.4 `H-15`). The rest of this answer holds in v1: nobody vets
  you, nobody ranks you, and tiers never change what your single vote is worth.
  Any adult who can prove they are a real, unique person legally eligible to participate in the pilot
  jurisdiction. Three starting points: the *founder* who has a programme and no patron and wants to
  build a party that the members actually govern; the *joiner* who wants a membership that carries a
  genuine vote and continuous participation, not just a name on a mailing list; and the *candidate*
  who wants to stand in the ward where they actually live, selected by the members, without asking a
  regional boss for permission. Once you are in: you are a **Supporter** by default — anonymous,
  full voting rights. You may declare yourself a **Worker** by recording contributions; the work is
  the credential and nobody approves you. You may self-nominate as a **Candidate** and the members
  vote on your selection. Tiers describe what you have done; they never change what your single vote
  is worth.

- **How much does it cost me?**
  Nothing. There is no fee, no subscription, no token to buy, and no transaction cost passed to you.
  The platform pays the underlying costs; our target is under one US cent per citizen action. If our
  funding for that runs low, actions get *slower*, never blocked, and never billed to you.

- **Do I need to understand crypto?**
  **(v2 target — see §0.)** The last clause of this answer — that the people who help you recover
  your account **cannot see how you voted** — is the **v2** property (`FR-059`, classed PARTIAL;
  Doc 02 §16.4 `H-10`). In **v1** recovery is conventional: the recovery event is recorded against
  your account in the operator's database, which can also see vote direction — so in v1 this is a
  **policy and access control, not something the design makes impossible**. Everything else in this
  answer — no seed phrase, no wallet, no "gas", no crypto vocabulary — is true of v1 today.
  No. There is no seed phrase, no wallet to fund, no "gas", and no crypto vocabulary anywhere in the
  main flows. If you lose your phone you can recover your account through a process designed for
  ordinary people, and the people who help you recover it cannot see how you voted.

- **How is my data used and kept private?**
  **(v2 target — see §0.)** This answer — including the Supporter, Worker and Candidate terms
  below — describes the **v2** design. In **v1**, Trumocracy's own database **can** produce a list
  of who belongs to which party and **can** see how each account voted (Doc 02 §16.4 `H-01`,
  `H-02`; `FR-082` and `FR-086` are classed `DEFERRED-v2`). What v1 stores at enrolment is a
  separate question, governed by `FR-132` and recorded in Doc 02 §16.4 `H-16`–`H-18`.
  We do not keep your identity documents or biometric templates — they are checked and discarded,
  never stored by us. We never learn your home address, only that you are eligible in a region. The
  system is built so that no one — including Trumocracy — can produce a list of who belongs to which
  party. The privacy level you get depends on the tier you choose, and those terms are shown to you
  plainly before you confirm:

  **Supporter** (automatic on joining): you are fully anonymous. Nothing attributable to you appears
  anywhere; your actions are visible only as "one eligible person in this region acted." This
  anonymity is unconditional and is not weakened by anything else you do on the platform.

  **Worker** (self-declared by recording contributions): you become public. Taking a role that
  affects others is the voluntary consent event. That consent covers your active Worker period and is
  irrevocable for that term; you cannot become anonymous again while you hold the role. You may
  withdraw *before* nomination closes, in which case your submitted data is destroyed. The UI states
  this plainly before you confirm. If you were a Supporter before becoming a Worker, your
  Supporter-period activity remains anonymous — it is never linked to your Worker identity
  retroactively.

  **Candidate** (self-nominated, then member vote): public in the same way as a Worker, and for the
  duration of the candidacy and any office held thereafter. Disclosure scales with the power sought.

  We do not collect behavioural data — no click-tracking, page views, dwell time or reading trails
  for any user. See §D for the rationale.

- **Can someone force me to vote a certain way?**
  **(v2 target — see §0.)** This answer describes the **v2** ballot. In **v1** it is not true:
  v1 voting is **NOT receipt-free and NOT coercion-resistant**, there is no silent re-vote, and
  Trumocracy's database can see how each account voted (`FR-131` clause (a); Doc 02 §16.4 `H-03`;
  Doc 14 §2.6).
  They can try. They cannot verify it. You cannot produce a receipt or a screenshot that proves how
  you voted, which removes the buyer's and the abuser's ability to check. And you can quietly vote
  again later; only your last vote counts, and nothing on your device or in the public record reveals
  that you changed it. This is the single most important thing we built, and it is why some things in
  the app are less convenient than they could be.

- **What happens if it goes wrong for me?**
  **(v2 target — see §0.)** "A Trumocracy employee reversing a governance result — there is no such
  button, by design" is the **v2** guarantee. In **v1** no such button exists in the product either,
  but the operator's database is the source of truth, so a result can be altered at the database and
  the published hash makes that **detectable**, not impossible (Doc 02 §16.5 **T-05**; §16.4
  `H-05`). Note also that the minority-fork path mentioned below sits behind a feature flag that is
  **off** in v1 (Doc 06 §5.3); the recovery path and the appeal route are as described.
  Lost access: a recovery path that takes days, not minutes, with a cancel window so a thief cannot
  rush it. A wrongly rejected enrolment: an appeal route that does not require you to send us more
  documents than the original check. A party you hate takes over a party you joined: you can leave
  instantly, and a minority can fork the charter and start their own petition. What we cannot offer
  is a Trumocracy employee reversing a governance result — there is no such button, by design.

- **What devices, regions and languages?**
  Mobile web plus a lightweight Android app; works on a 2GB-RAM device running Android 9 or later,
  and on connections down to 2G-class bandwidth. One pilot jurisdiction at launch; additional
  jurisdictions post-launch. Eight languages, including right-to-left scripts, with no untranslated
  primary flow. All primary flows conform to WCAG 2.2 AA.

- **What's different from a petition site, or from just joining an existing party?**
  A petition site collects signatures and hands them to someone who decides. Trumocracy's threshold
  *is* the decision — cross it and the party exists, with no one to appeal to. And unlike joining an
  existing party, nobody vets you, nobody ranks you, your vote cannot be diluted by a donor's, and
  you can remove a representative between elections.

### E2. Stakeholder / internal FAQs

- **What is the measurable success criterion?**
  By 2027-12-01 (six months post-launch): 250,000 verified persons enrolled in the pilot
  jurisdiction, ≥ 12 activated parties in the first 12 months, zero confirmed deanonymisations,
  100% independently reproducible tallies, 100% of activated parties with a published constitution
  and manifesto with at least one measured commitment, and median platform cost per citizen action
  under USD 0.01. Full table in §C.

- **What is the business model / unit economics?**
  There is no revenue at launch — this is a grant- and donation-funded public-interest utility, and the
  funding entity holds **no** governance privilege in code (a funder with a lever is a gatekeeper).
  Cost to serve is dominated by (a) identity attestation and (b) per-action settlement, which we
  sponsor. Appetite: **USD 4.2M** and a team of 18 through launch (`CON-007`). Sustainability beyond
  month 18 is an **open question for Gate 1** — see §13 of Doc 02.

- **What is the build vs. buy decision?**
  Buy/reuse: identity attestation providers (plural, deliberately — never one), settlement and
  hosting infrastructure, localisation tooling. Build: everything with governance semantics —
  thresholds, membership, ballots, recall — because that is exactly where an outsourced dependency
  would become a gatekeeper. The specific technology choices are the **architect's** decision at
  Design; this document deliberately names none.

- **What are the top 3 risks and mitigations?**
  **(v2 target — see §0.)** These mitigations describe the **v2** design. In **v1**: the
  `RISK-02` mitigations — receipt-freeness and the invisible re-vote override — **do not exist**
  (`FR-131` clause (a); Doc 02 §16.4 `H-03`); the `RISK-06` anonymity-set mitigation is enforced
  as aggregate-only publication, a policy control, not the mathematical guarantee described
  (§16.4 `H-06`); and under `RISK-01` the Phase-1 pilot runs a **single** identity rail, not
  plural attestors (`FR-129`, `OI-20`; §16.5 T-08; Doc 09 §0).
  `RISK-01` **sybil inflation of a threshold** — plural attestors, per-scope one-action-per-person
  enforcement, concentration cap on any single attestor, published duplicate-rate audit.
  `RISK-02` **coercion and vote-buying** — receipt-freeness plus invisible re-vote override; no
  interim results; no transferable or delegable vote.
  `RISK-06` **deanonymisation by correlation** — minimum anonymity-set thresholds before an action is
  published, no personal data on the public record, and an adversarial privacy audit as a Gate-2
  condition. Full register: Doc 02 §10.

- **What dependencies does this need?**
  Independent identity attestation providers (≥ 2 per launch region); at least two independent
  sources of population statistics per region for threshold denominators; settlement/ordering
  infrastructure whose liveness we do not control; app-store distribution; an external cryptography
  audit firm; legal counsel per pilot jurisdiction; and translation/accessibility review vendors.

- **What are the legal, privacy, security and compliance implications?**
  **(v1 accuracy note — see §0.)** "Data protection is handled by *not holding the data*" is
  **partly** true of v1. True: no identity document, no biometric template and no address is
  retained (verify-and-discard). Not true as an absolute: v1 retains two derived identifiers in
  the operator's database — `phone_hash` and `subject_id_hash` — so `FR-003` is classed PARTIAL,
  and their legal classification is an open constraint (`CON-015`) (Doc 02 §16.4 `H-16`, `H-18`).
  The member↔party mapping and vote direction are also held in v1 (§16.4 `H-02`, `H-01`).
  Electoral law differs in every jurisdiction, which is why `CON-001` is absolute: we organise
  parties, we never run binding state elections. Political-finance rules mean treasury features are
  jurisdiction-gated. Data protection is handled by *not holding the data*: no identity documents, no
  biometrics, no addresses, no personal data on the immutable public record. The unresolved tension
  between erasure rights and an immutable ledger is recorded as an explicit trade-off, not glossed
  over (Doc 02 §9.3, `NFR-015`). Security: independent audit with zero critical/high findings is a
  Gate-2 condition (`NFR-009`).

- **What is the rollout & rollback plan at a high level?**
  Trunk-based, everything behind feature flags, staged 1 → 10 → 50 → 100% by the sre. One pilot
  jurisdiction at launch; expansion to additional jurisdictions begins post-launch when month-6
  metrics are confirmed. Governance-affecting flags are one-way for the duration of any open ballot
  — you cannot flip a rule mid-vote. Rollback target under 15 minutes (`NFR-020`), proven before
  Gate 2.

- **What does success look like at 1 month / 6 months / 1 year?**
  *Month 1 (post-launch):* 25,000 enrolled in the pilot jurisdiction, ≥ 50 petitions drafted with
  all compulsory pillars completed, at least 10 party constitutions ratified and published, 0
  privacy findings.
  *Month 6:* ≥ 3 parties activated (each with a published constitution and manifesto with measured
  commitments), ≥ 1 internal election completed through the full candidate-selection process, ≥ 25
  third parties independently reproducing tallies, recall mechanism exercised at least once, 0
  committee outputs treated as decisions without a member vote.
  *Month 12:* ≥ 12 parties activated, ≥ 250,000 enrolled, sustained membership above the
  maintenance floor, at least one party where the founding drafter has been outvoted by the members
  — the clearest possible evidence that we did not build another top-down party — and at least one
  manifesto commitment with a publicly tracked progress update.

- **What would make us kill or pivot this?**
  1. **Privacy failure:** any confirmed, reproducible deanonymisation of an ordinary member's party
     affiliation or ballot that we cannot remediate within 90 days → **kill**.
  2. **Coercion failure:** evidence of a functioning vote-buying or coerced-voting market touching
     > 1% of ballots cast → **kill or pivot** to a non-voting deliberation product.
  3. **Adoption failure:** fewer than 25,000 verified persons in the lead pilot jurisdiction by month
     6 — no party can then plausibly reach a threshold → **kill or re-scope** thresholds and relaunch.
  4. **Thesis failure:** at month 12, zero activated parties *and* median petition below 10% of its
     threshold → the open-incubation thesis is wrong → **kill**.
  5. **Legal failure:** a ruling in the pilot jurisdiction that operating the platform is unlawful
     → withdraw; if post-launch expansion jurisdictions also close → **kill** if no viable
     jurisdiction remains.
  6. **Economic failure:** platform cost per citizen action cannot be held below USD 0.05 at 1M
     users → **pivot** the cost model before scaling.
  7. **Capture failure:** any successful governance takeover of an activated party by flash
     membership acquisition or a single funder → **freeze and harden**; twice → **kill**.

- **What is the estimated cost and timeline (appetite)?**
  Appetite: USD 4.2M; accepted budget ~USD 4.13M (lever L2, one pilot at launch) against an 18-person
  team. Gate 1 target 2026-08-22. Gate 2 target 2027-05-14 (moved from 2027-02-15 per S-01, driven
  by the externally-paced cryptography programme). Fictional launch dateline in this press release:
  2027-06-01. The v2 scope's true schedule and appetite are re-estimated in Doc 13 after Gate 1 —
  the figures above are the currently approved envelope, not a re-plan for the expanded vision. An
  open item: Doc 13 must be updated before design begins.

- **Accessibility & localization commitments?**
  WCAG 2.2 AA on every primary flow; usable at 2G-class bandwidth on a 2GB-RAM Android 9 device;
  eight launch languages including RTL; plain language at a grade-8 reading level with zero crypto
  jargon in primary flows. Owner: **Nadia Hassan**.

- **What is explicitly NOT in this release, and when (if ever) later?**
  See §D. Vote delegation: **never**, unless the tenet is formally overturned. Government
  (state-run) elections: **never** (`CON-001`). Per-user behavioural tracking: **never**. Additional
  deployment jurisdictions: post-launch, starting from month 6 pending metric milestones.
  Cross-jurisdiction federated parties, full treasury contribution-cap workflows, forks with
  treasury splitting, and party dormancy lifecycle: post-launch candidates, contingent on month-6
  metrics.

### E3. The hard questions (answered honestly, including where we lose)

- **"Your committees are powerless — how does anything get organised?"**
  Committees can do a lot. They can organise events, coordinate campaigns, manage vendor
  relationships, write and publish draft proposals, facilitate discussions, and publish position
  papers. What they cannot do is decide. The boundary is precise: a committee output that determines
  who wins, who votes, who is a member, or who is a candidate is a decision that must go to a member
  vote with no special weight for the committee's recommendation. This means a committee can spend
  months drafting an excellent policy position — and a single member with a competing position can
  send it back to the full membership. We think that is the point, not a bug. The structural reason
  committees accumulate power in conventional parties is that no mechanism exists for ordinary
  members to override them at scale. We built that mechanism. The honest corollary: some committees
  will find working this way frustrating, and some well-intentioned proposals will lose to worse
  alternatives in a membership vote. We accept that as the cost of genuine member sovereignty.

- **"Why do you impose a non-violence clause if you claim political neutrality?"**
  We do not claim perfect political neutrality — we claim that Trumocracy does not take sides on
  questions where reasonable people disagree. Non-violence is not one of those questions for us.
  Every party constitution on the platform must include a non-violence clause as a precondition for
  activation. We record this honestly as the one deliberate exception to our political neutrality
  stance: a platform that could be used to plan or coordinate political violence is not something we
  will build, regardless of how we might otherwise justify neutrality. This makes us a referee who
  has one standing rule. The rule is narrow — it covers advocating or coordinating violence; it does
  not cover endorsing parties or positions that others find offensive. We do not expect everyone to
  agree with drawing the line here, and we do not pretend the line is obvious. What we will not do
  is pretend the line does not exist.

- **"Why no analytics or user tracking at all? Every other platform tracks usage."**
  **(v2 target — see §0.)** One sentence below — "Supporters are anonymous by unconditional
  guarantee" — is the **v2** property. In **v1** a Supporter's party membership is held in the
  operator's database and is knowable to Trumocracy, so the guarantee is not unconditional and is
  not yet technical (Doc 02 §16.4 `H-02`; `FR-082` classed `DEFERRED-v2`). The reasoning of this
  answer is unaffected, and the refusal to collect behavioural data is **not** deferred: it is a
  permanent scope commitment that applies in v1 exactly as described here (§D).
  Most platforms track usage to improve the product. We want to improve the product too — but not
  this way. The problem is specific to what Trumocracy stores: membership and political-participation
  data. A behavioural log that records which proposals a member read, how long they spent on a
  candidate's profile, or which party pages they visited is a political-intelligence database.
  A hostile actor — a state, a foreign government, an opposition party, or a commercial buyer of
  the data — can construct a political profile for each user from behavioural sequences alone, even
  without ever learning their identity. Supporters are anonymous by unconditional guarantee; letting
  behaviour deanonymise them through the back door would break that guarantee silently and
  irreversibly. So we do not collect it. Aggregate analytics (total actions in a region, total votes
  on a proposal) are permitted and useful. Per-user sequences are not. Personalisation, where it
  exists, runs on the user's own device and is held by the user, not by us. We accept that this
  limits our product insight. That is a permanent trade-off, not a temporary one.

- **"Nothing is ever deleted — what about my right to be forgotten?"**
  **(v2 target — see §0.)** The **Supporter** half of this answer describes the **v2** design and
  is **not true of v1**. In v1 there **is** a link between you and what you did: the operator's
  database records which party you joined and, once voting ships, how you voted (Doc 02 §16.4
  `H-01`, `H-02`; `FR-082` and `FR-086` classed `DEFERRED-v2`). So in v1 an erasure request from a
  Supporter is **not** "simultaneously satisfied and meaningless" — there is personal data behind
  it, and the honest v1 answer is the one this document already gives for Workers and Candidates:
  the tension between erasure rights and a permanent record is real, is recorded as a trade-off
  (`NFR-015`), and is not resolved. The Worker and Candidate half of this answer holds in v1 as
  written.
  This is the sharpest tension in the product, and we do not resolve it cleanly. Our answer depends
  on what tier you are in. For **Supporters**: there is nothing to delete. The record shows that
  "one eligible person in this region voted" — it does not show you. There is no link between your
  identity and any action, so there is no personal data to erase, and an erasure request would be
  simultaneously satisfied and meaningless. For **Workers and Candidates**: you consented to being
  public as the voluntary act of taking a role. The governance record of your actions while in that
  role — proposals you authored, positions you held, votes you cast as a representative — is part of
  the party's history that members rely on for accountability. We treat this the same way we treat
  the public record of a public official: it does not disappear because the office-holder would
  prefer it to. What we can do: mark your profile as inactive, note the end of your active period,
  and ensure no new associations are made after that date. What we cannot do: retroactively remove
  the record of what you did while you held the role. We note this tension explicitly as a recorded
  trade-off in §D and in Doc 02 (`NFR-015`). Where data protection law requires erasure that
  conflicts with these principles, the resolution is a legal posture — not a technical one — and is
  recorded openly as an unresolved tension, not glossed over.

- **"Isn't this just a way for extremists to organise?"**
  **(v2 target — see §0.)** One item in the list below — that they "cannot keep a membership
  list" — is the **v2** property. In **v1** the membership list the v2 design exists to make
  impossible **does exist**, as ordinary records in the operator's database (Doc 02 §16.4 `H-02`).
  The other items — cannot buy a party, cannot install a leader, cannot stop their own members
  removing them — are properties of the governance rules and are not affected by the v1/v2 split.
  Partly, yes — and we will not pretend otherwise. Any tool that lowers the cost of political
  organising lowers it for everyone, including people whose politics we find repellent. Three things
  are true. First, extremist organising is not currently blocked by a shortage of tools; it is the
  best-resourced kind of organising there is. Second, Trumocracy is *worse* for extremists than the
  alternatives in one specific way: they cannot buy a party, cannot install a leader, cannot keep a
  membership list, and cannot stop their own members from removing them — every mechanism a
  demagogue relies on is structurally absent. Third, the residency-scoped threshold means a party
  must convince a real percentage of the real people who actually live somewhere; it cannot be
  manufactured from a distributed online following. What we do **not** claim: that we can prevent a
  genuinely popular extreme party from forming. If a fifth of a district's population genuinely wants
  something, no platform design should be the thing that stops them — that is a job for law, not for
  us. Where content is unlawful in the place it is displayed, we filter its display in that
  jurisdiction and log the filtering publicly; we never delete the record, and we never take a
  political view. This is a trade-off we have accepted deliberately, not a problem we have solved.

- **"What stops a billionaire buying a party?"**
  **(v2 target — see §0.)** The last sentence of this answer — that paying people for their votes
  fails "because the vote is receipt-free" — is the **v2** property. In **v1** the vote is **NOT**
  receipt-free (`FR-131` clause (a); Doc 02 §16.4 `H-03`), so that particular defence is not in
  place yet. The rest of the answer — no purchasable membership, no transferable, delegable or
  donation-weighted vote, no standing bought by contribution — is a v1 governance rule and is not
  deferred.
  There is nothing to buy. Membership cannot be purchased, votes are not tokens and cannot be
  transferred, sold, lent, delegated or weighted by donation, and no contribution of any size confers
  standing, priority, candidacy advantage or an extra vote. Governance power comes only from a
  one-per-person credential that is not transferable and not for sale. A billionaire can still do
  what anyone can do: pay for advertising, hire canvassers, and try to persuade people to join and
  vote a certain way. **We do not stop that, and we should be honest that it is a real advantage.**
  What we remove is the shortcut — the ability to convert money directly into control of the party
  machine. And because the vote is receipt-free, the oldest conversion of all, paying people for
  their votes, does not work: there is no way for the payer to check.

- **"What happens if a government orders you to hand over the member list?"**
  **(v2 target — see §0.)** This answer describes the **v2** design and is **not true of v1**. In
  v1 the operator holds the member↔party mapping and vote direction in an ordinary database and
  **can be compelled to produce them**: `FR-128`'s "we do not have it" subpoena test is classed
  PARTIAL and deferred in full to v2 (Doc 02 §16.4 `H-04`; §16.5, approver ruling 2026-08-23).
  v1's honest posture is "we do not store identity documents" — **not** "we cannot disclose
  membership or vote direction".
  We hand over what we have, and what we have is not a member list. There is no database mapping
  people to parties, because the system never learns that mapping — it only ever confirms that
  *some* eligible person in a region acted. We hold no identity documents, no biometric templates and
  no addresses. A compelled disclosure therefore yields the same public information anyone can
  already download. Being straight about the limits: a determined state can still (a) compel an
  *identity attestor* to reveal who enrolled — which is why we require at least two independent
  attestors and cap any single one's share, but it does mean the fact that you enrolled *at all* is
  not perfectly hidden; (b) observe network traffic and attempt to correlate timing — which is why we
  hold actions until a minimum anonymity set exists, though this reduces, not eliminates, the risk;
  and (c) block the platform entirely. Candidates for office are public by their own choice and
  enjoy no such protection — that asymmetry is intentional. We will publish a transparency report of
  every legal demand received, and we have designed so that the honest answer to most of them is
  "we do not have it."

- **"Why blockchain at all? Isn't this just a database?"**
  **(v2 target — see §0.)** The property this answer states as the requirement — that *nobody,
  including Trumocracy, may be able to alter a threshold count, a membership roll or a tally, and
  anyone must be able to verify the result themselves without trusting us* — is **not met in v1**.
  In v1 the operator's database is the source of truth; tally result hashes are published to the
  on-chain audit record, so a change is **detectable**, but verifying a tally still means trusting
  that the database says what it says (Doc 02 §16.4 `H-05`; §16.5 Charter Rule 3 / **T-05**,
  approver-confirmed). The answer's own line that "a conventional database cannot supply that,
  because someone administers it" is therefore a description of v1's real position. **The
  requirement stands unchanged for v2** — this is a phasing disclosure, not a retraction.
  The requirement is not "use a blockchain" — this document deliberately specifies **no** technology,
  and the architect will choose after Gate 1. The requirement is a property: *nobody, including
  Trumocracy, may be able to alter a threshold count, a membership roll or a tally, and anyone must
  be able to verify the result themselves without trusting us.* A conventional database cannot supply
  that, because someone administers it, and "trust our admin not to touch the count" is precisely the
  gatekeeper we are removing. So the question is really: is the cost worth it? The honest answer is
  that a shared, tamper-evident, independently verifiable record costs us more in latency, in
  engineering, in privacy engineering, and in dependence on infrastructure whose liveness we do not
  control (`RISK-09`). We accept those costs *only* for the records where trust is the product —
  counts, rolls, tallies, charters and their history. Everything else can and should be ordinary
  boring infrastructure. If the architect can meet the verifiability and no-single-operator
  requirements another way, that is a better answer and we will take it.

- **"You say 'no gatekeepers' — but you write the code. Aren't you the gatekeeper?"**
  **(v2 target — see §0.)** This answer concedes the tension for the **code we write**. It
  understates it for **v1** in one specific way: "there is no administrative override, pause key or
  privileged role in the governance path" is true of the governance logic, but in v1 the operator's
  **database** is the source of truth for counts, rolls and tallies, and the published hash makes an
  alteration detectable rather than impossible (Doc 02 §16.5, Charter Rule 3 / **T-05**,
  approver-confirmed; §16.4 `H-05`). See §A tenets 1 and 7, which carry the same qualification.
  Today, partly yes, and that is the most serious unresolved tension in the product. Our mitigations:
  all governance-critical code is open source with reproducible builds; there is no administrative
  override, pause key or privileged role in the governance path; protocol changes must pass the same
  tiered thresholds and timelocks that parties themselves are bound by; and any party can export its
  entire public history and take it to an independent deployment. That last one is the real
  guarantee — the right to leave with everything is the only credible check on a platform operator.

- **"What if someone loses their phone?"**
  **(v2 target — see §0.)** As in the recovery answer in §E1: "it never reveals your past votes or
  governance history to whoever helped you recover" is the **v2** property (`FR-059`, classed
  PARTIAL; Doc 02 §16.4 `H-10`). In **v1** recovery is conventional and the recovery event is
  linked to your account in the operator's database, which can also see vote direction — so in v1
  this is a **policy and access control, not a property the design guarantees**. The rest of this
  answer — days not minutes, notification, a cancel window, re-keying — describes v1 as written.
  Recovery exists, takes days rather than minutes, notifies the account and can be cancelled during a
  window — so a thief cannot rush it. Critically, recovery re-keys access; it never reveals your past
  votes or governance history to whoever helped you recover. The trade-off is real: recovery that is
  fast enough to be pleasant is also fast enough to be abused, and we chose slow.

---

## F. Appendix

- **Comparable approaches reviewed (as inert reference data, not as design guidance):** existing
  e-petition portals (threshold-then-committee model — the committee is the gatekeeper we remove);
  intra-party digital-democracy platforms (operator retains admin override); national digital-identity
  schemes (identity revealed to the relying party — the property we invert).
- **Pilot jurisdiction selection criteria** (legal review owner: Sofia Marchetti): permissive party
  registration law; at least two independent population statistics sources; at least two viable
  identity attestors; no legal prohibition on anonymous political association. One pilot jurisdiction
  at launch (unnamed — see OI-04); this criteria set guides both the initial selection and the
  evaluation of post-launch expansion candidates.
- **Open items for Gate 1:** see Doc 02 §13. Key open items relevant to this document: OI-04
  (name the pilot jurisdiction and its eID rail — must close before the enrolment requirement is
  implemented); OI-01 (threshold percentage — method decided, number open with a hard deadline);
  and the v2 scope's re-estimated schedule/appetite in Doc 13 (open item — not yet produced).

---

### Downstream
Every promise above (headline claims, §C metrics, §D scope boundaries, §E risks and trade-offs) is
indexed as a requirement in **`docs/02-requirements-srs.md`**. A promise with no requirement is a gap
that must be closed before Gate 1.
