# Press Release / PR-FAQ — Trumocracy

```
Document ID:   PR-TRUMOCRACY
Version:       1.0.0
Status:        In Review
Classification:Internal
Owner:         Priya Raghunathan — Product Owner
Approvers:     Gate 1 — Product, Engineering, Design
Last updated:  2026-08-08
```

> **Based on:** Amazon "Working Backwards" PR-FAQ. **Produced in:** Vision. **Approved at:** Gate 1.
> Written as if Trumocracy has already launched on **2027-03-01**, in an ordinary citizen's language.
> Every promise below becomes an indexed requirement in `docs/02-requirements-srs.md`.

---

## A. Tenets (the principles for this product)

1. **No gatekeeper, ever — not even us.** If a human being at Trumocracy can approve, reject,
   promote, demote, delete or reorder anything inside a party, we have rebuilt the thing we set out
   to abolish. Governance runs in code or it does not run.
2. **An ordinary member is invisible; a candidate for office is not.** Anonymity protects the
   powerless; disclosure binds the powerful. We will accept a worse product experience before we
   accept a design that lets anyone build a list of who belongs to which party.
3. **Money buys nothing here.** No purchasable membership, no transferable vote, no weighting by
   donation, seniority or office. A billionaire and a bus driver hold exactly one vote each.
4. **A vote you can prove is a vote you can sell — or be beaten for.** Receipt-freeness and the
   ability to silently override a coerced vote are not features to be traded away for convenience.
5. **A citizen on a five-year-old phone is the customer.** No seed phrases, no gas, no wallets, no
   crypto vocabulary in any primary flow. If the median citizen cannot finish the task on a cheap
   handset on a weak network, it is not shipped.

---

## B. Press Release

**FOR IMMEDIATE RELEASE — Geneva, Switzerland — 2027-03-01**

### Headline
**Anyone can now start a political party — and nobody can buy it, own it or run it from the top.**

### Sub-headline
Trumocracy lets a verified citizen draft a full party programme, gather public support, and — once
enough real people in their own region back it — switch on a working party where every member has
exactly one equal vote and can remove any representative mid-term.

### Summary paragraph
Trumocracy launched today in three pilot jurisdictions. It is a free, open platform where any
verified adult can write and publish a complete party vision across eight compulsory policy areas,
collect endorsements from real, verified people who live in the area the party claims to serve, and
— when endorsements reach a fixed share of that area's eligible population — see the party
automatically become live. No committee approves it. No party boss admits members. No donation buys
a better seat. Every member joins directly, holds one identical vote, votes anonymously in a way
they cannot be forced to prove, and can start a recall of any representative who stops delivering.

### The problem
Today, joining a political party is easy; changing one is close to impossible. Candidate lists are
settled by a handful of people. Membership tiers, donor access and "seniority" quietly decide whose
vote counts. A citizen with a serious programme and no patron has nowhere to begin — party
registration is gated by incumbents, and the incumbents are the people the programme threatens. Even
inside parties that call themselves democratic, members cannot see how their representatives voted,
cannot remove them between elections, and are asked to hand over their name, address and political
affiliation to a private organisation that may leak it, sell it, or be compelled to surrender it.

### The solution
Trumocracy separates the two things that political gatekeeping keeps welded together: **proving you
are a real, eligible person** and **revealing who you are**. You prove once that you are a unique
human living in a specific region. From then on, the platform knows only that "one eligible person
in this district acted" — never which person, and never that the same person also acted somewhere
else. On that foundation everything else is arithmetic that runs in code: an endorsement count that
either crosses a published threshold or does not; a membership that anyone can join and nobody can
veto; a vote that is one-per-person and cannot be transferred, sold or delegated; a recall that
triggers a by-election automatically when the bar is met. Trumocracy has no override button, because
we did not build one.

### Leader quote
"We were told the hard part was technology. It wasn't — the hard part was refusing to keep a single
lever for ourselves. Every time we hit a problem, the easy fix was an admin button, and every time we
said no. What shipped today is a platform where our own staff have exactly as much power over your
party as a stranger on the street: none." — Priya Raghunathan, Product Owner, Trumocracy

### How it works / customer journey
1. **Prove you're you, once.** You confirm you are a real, unique adult living in a particular
   region. Trumocracy keeps no copy of your documents and never learns your address — only that
   someone eligible in that region completed the check.
2. **Draft a party.** Write a vision covering all eight compulsory pillars — Finance, Society,
   Governance, Law, Education, Healthcare, Security and Regional Plans. All eight, or it cannot be
   published.
3. **Petition.** Your party goes live as a *petition*. Verified residents of the jurisdiction you
   declared can endorse it. The bar is public and fixed: a set percentage of that jurisdiction's
   eligible population.
4. **Activate — automatically.** Hit and hold the threshold and the party switches on. There is no
   approval step and nobody to lobby.
5. **Join and be equal.** Any verified citizen joins any live party directly. No sponsor, no
   interview, no tier, no fee. One member, one vote.
6. **Propose, vote, stand, elect.** Members propose; members vote anonymously. You may stand for
   office only in the region where you actually live, for the office you actually want.
7. **Hold them to it.** Manifestos and commitments are published and versioned forever;
   representatives' governance votes are attributable to the office-holder. If they stop delivering,
   any member in their region can start a recall — mid-term.

### Customer quote
"I've been to three party meetings in my life and at all three the decisions were already made in
another room. Here I wrote a housing plan, 40,000 people I've never met backed it, and the party
turned on by itself at three in the morning. Nobody let me in. There was nobody to let me in."
— Ifeoma, 34, community pharmacist and founding drafter of a district party

### Availability & call to action
Trumocracy is free to use, open source, and available today as a mobile web app and a lightweight
Android app in three pilot jurisdictions, in eight languages including right-to-left scripts. It runs
on a five-year-old handset on a 2G-class connection. There is no token to buy and nothing to pay.
Start at the enrolment page, or read the code and run the independent verifier yourself.

---

## C. Success metrics (measurable promises)

> Every number here becomes a tracked requirement in Doc 02. Measurement owner: **Yuki Sato**
> (Data & Measurement Lead). Time-box: first 12 months post-launch unless stated.

| Metric | Baseline (2026-08-08) | Target | Guardrail (must-not-regress) |
|--------|----------------------|--------|------------------------------|
| Verified unique persons enrolled across the 3 pilot jurisdictions | 0 | ≥ 250,000 by 2027-09-01 | Duplicate/synthetic-person rate ≤ 0.1% of credentials, independently audited |
| Parties reaching activation threshold | 0 | ≥ 12 in the first 12 months | ≥ 60% of activated parties still above the maintenance floor at month 6 |
| Median cost per citizen governance action (platform-borne) | n/a | < USD 0.01 | p99 < USD 0.05; **USD 0.00 charged to the citizen, always** |
| First-time citizens completing enrol → endorse unaided | n/a | ≥ 80% within 10 minutes | SUS ≥ 75; support-contact rate ≤ 5% of enrolments |
| Confirmed deanonymisation of an ordinary member's affiliation or ballot | n/a | **0** | 0, permanently — this is a kill-criterion metric |
| Independently reproducible tallies (third party re-runs the count and matches) | n/a | 100% of closed ballots | ≥ 25 distinct third-party organisations running the verifier by month 6 |
| Reported coercion cases where the voter's silent override took effect | n/a | ≥ 95% of reported cases | 0 cases where the override was externally detectable |
| Largest single identity attestor's share of credentials in any one region | n/a | ≤ 40% | Never > 50% (a majority-issuing attestor is a stop-the-line event) |
| Elected representatives subject to a recall reaching a vote | 0 | ≥ 1 per 20 offices per year (evidence the mechanism is real) | ≤ 10% of recall initiations judged harassment by the published abuse metric |
| Citizen write-path availability | n/a | 99.5% monthly | No single operator outage blocks a citizen action for > 60 minutes |
| WCAG 2.2 AA conformance on all primary flows | n/a | 100% of primary flows | 0 Level A or AA failures at Gate 2 |

---

## D. Out of scope (explicit non-goals — this release)

- **Running binding state elections.** Trumocracy organises *parties*; it never conducts, certifies
  or replaces an official government election. This boundary is a hard constraint (`CON-001`).
- **Any transferable token, coin, sale or fundraising instrument for the platform itself.**
- **Vote delegation / liquid democracy / proxy voting.** Deliberately excluded from v1: delegation
  reintroduces brokers, which is the problem we are solving. Revisit no earlier than v2.
- **Cross-jurisdiction or federated parties.** A party declares one jurisdiction at activation.
  Expansion requires a fresh petition in the new jurisdiction.
- **Party treasuries at full scale.** v1 ships the *guardrail* (money confers no governance
  advantage) and public ledger reporting; contribution caps and spend-approval workflows are
  Should/Could and may land post-launch.
- **Content moderation of political speech by Trumocracy staff.** We will not build it. The only
  permitted intervention is jurisdiction-scoped display filtering of content that is unlawful where
  it is displayed, publicly logged, never a deletion from the record.
- **Discussion forums, direct messaging, feeds, or any social layer.** Out of scope; parties may use
  their own channels.
- **Party dormancy/deactivation lifecycle, treasury splitting on a fork, and personal blocklists.**
  Deferred; tracked as Could items.
- **Desktop-first experience, and jurisdictions beyond the three pilots.**
- **Integration with any official electoral roll as a system of record.** We consume population
  denominators as reference data only, from at least two independent sources.

---

## E. FAQ

### E1. Customer FAQs

- **Who is this for?**
  Any adult who can prove they are a real, unique person living in a pilot jurisdiction. Three groups
  in particular: the *drafter* who has a programme and no patron; the *joiner* who wants a party
  membership that actually carries a vote; and the *stander* who wants to be a candidate in the ward
  where they live, without asking a regional boss for permission.

- **How much does it cost me?**
  Nothing. There is no fee, no subscription, no token to buy, and no transaction cost passed to you.
  The platform pays the underlying costs; our target is under one US cent per citizen action. If our
  funding for that runs low, actions get *slower*, never blocked, and never billed to you.

- **Do I need to understand crypto?**
  No. There is no seed phrase, no wallet to fund, no "gas", and no crypto vocabulary anywhere in the
  main flows. If you lose your phone you can recover your account through a process designed for
  ordinary people, and the people who help you recover it cannot see how you voted.

- **How is my data used and kept private?**
  We do not keep your identity documents or biometric templates — they are checked and discarded,
  never stored by us. We never learn your home address, only that you are eligible in a region. The
  system is built so that your actions in different places cannot be linked back to one person, and
  so that no one — including Trumocracy — can produce a list of who belongs to which party. The one
  deliberate exception: **if you stand for office, you choose to make your identity public.** That is
  the trade you accept in exchange for asking people to vote for you.

- **Can someone force me to vote a certain way?**
  They can try. They cannot verify it. You cannot produce a receipt or a screenshot that proves how
  you voted, which removes the buyer's and the abuser's ability to check. And you can quietly vote
  again later; only your last vote counts, and nothing on your device or in the public record reveals
  that you changed it. This is the single most important thing we built, and it is why some things in
  the app are less convenient than they could be.

- **What happens if it goes wrong for me?**
  Lost access: a recovery path that takes days, not minutes, with a cancel window so a thief cannot
  rush it. A wrongly rejected enrolment: an appeal route that does not require you to send us more
  documents than the original check. A party you hate takes over a party you joined: you can leave
  instantly, and a minority can fork the charter and start their own petition. What we cannot offer
  is a Trumocracy employee reversing a governance result — there is no such button, by design.

- **What devices, regions and languages?**
  Mobile web plus a lightweight Android app; works on a 2GB-RAM device running Android 9 or later,
  and on connections down to 2G-class bandwidth. Three pilot jurisdictions at launch. Eight
  languages, including right-to-left scripts, with no untranslated primary flow. All primary flows
  conform to WCAG 2.2 AA.

- **What's different from a petition site, or from just joining an existing party?**
  A petition site collects signatures and hands them to someone who decides. Trumocracy's threshold
  *is* the decision — cross it and the party exists, with no one to appeal to. And unlike joining an
  existing party, nobody vets you, nobody ranks you, your vote cannot be diluted by a donor's, and
  you can remove a representative between elections.

### E2. Stakeholder / internal FAQs

- **What is the measurable success criterion?**
  By 2027-09-01: 250,000 verified persons enrolled, ≥ 12 activated parties in 12 months, zero
  confirmed deanonymisations, 100% independently reproducible tallies, and median platform cost per
  citizen action under USD 0.01. Full table in §C.

- **What is the business model / unit economics?**
  There is no revenue in v1 — this is a grant- and donation-funded public-interest utility, and the
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
  Electoral law differs in every jurisdiction, which is why `CON-001` is absolute: we organise
  parties, we never run binding state elections. Political-finance rules mean treasury features are
  jurisdiction-gated. Data protection is handled by *not holding the data*: no identity documents, no
  biometrics, no addresses, no personal data on the immutable public record. The unresolved tension
  between erasure rights and an immutable ledger is recorded as an explicit trade-off, not glossed
  over (Doc 02 §9.3, `NFR-015`). Security: independent audit with zero critical/high findings is a
  Gate-2 condition (`NFR-009`).

- **What is the rollout & rollback plan at a high level?**
  Trunk-based, everything behind feature flags, staged 1 → 10 → 50 → 100% by the sre. One
  jurisdiction first, then the second and third. Governance-affecting flags are one-way for the
  duration of any open ballot — you cannot flip a rule mid-vote. Rollback target under 15 minutes
  (`NFR-020`), proven before Gate 2.

- **What does success look like at 1 month / 6 months / 1 year?**
  *Month 1:* 25,000 enrolled, ≥ 50 petitions drafted with all eight pillars, 0 privacy findings.
  *Month 6:* ≥ 3 parties activated, ≥ 1 internal election completed, ≥ 25 third parties independently
  reproducing tallies, recall mechanism exercised at least once.
  *Month 12:* ≥ 12 parties activated, ≥ 250,000 enrolled, sustained membership above the maintenance
  floor, and at least one party where the founding drafter has been outvoted by the members — the
  clearest possible evidence that we did not build another top-down party.

- **What would make us kill or pivot this?**
  1. **Privacy failure:** any confirmed, reproducible deanonymisation of an ordinary member's party
     affiliation or ballot that we cannot remediate within 90 days → **kill**.
  2. **Coercion failure:** evidence of a functioning vote-buying or coerced-voting market touching
     > 1% of ballots cast → **kill or pivot** to a non-voting deliberation product.
  3. **Adoption failure:** fewer than 25,000 verified persons in the lead pilot jurisdiction by month
     6 — no party can then plausibly reach a threshold → **kill or re-scope** thresholds and relaunch.
  4. **Thesis failure:** at month 12, zero activated parties *and* median petition below 10% of its
     threshold → the open-incubation thesis is wrong → **kill**.
  5. **Legal failure:** rulings in ≥ 2 of the 3 pilot jurisdictions that operating the platform is
     unlawful → withdraw from those jurisdictions; if all 3, → **kill**.
  6. **Economic failure:** platform cost per citizen action cannot be held below USD 0.05 at 1M
     users → **pivot** the cost model before scaling.
  7. **Capture failure:** any successful governance takeover of an activated party by flash
     membership acquisition or a single funder → **freeze and harden**; twice → **kill**.

- **What is the estimated cost and timeline (appetite)?**
  USD 4.2M, 18 people, Gate 1 target 2026-08-22, design and build through 2027-01, Gate 2 target
  2027-02-15, launch 2027-03-01.

- **Accessibility & localization commitments?**
  WCAG 2.2 AA on every primary flow; usable at 2G-class bandwidth on a 2GB-RAM Android 9 device;
  eight launch languages including RTL; plain language at a grade-8 reading level with zero crypto
  jargon in primary flows. Owner: **Nadia Hassan**.

- **What is explicitly NOT in this release, and when (if ever) later?**
  See §D. Vote delegation: **never**, unless the tenet is formally overturned. State elections:
  **never**. Cross-jurisdiction parties, full treasury workflows, forks with treasury splitting, and
  party dormancy: v2 candidates, contingent on the month-6 metrics.

### E3. The hard questions (answered honestly, including where we lose)

- **"Isn't this just a way for extremists to organise?"**
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
  Today, partly yes, and that is the most serious unresolved tension in the product. Our mitigations:
  all governance-critical code is open source with reproducible builds; there is no administrative
  override, pause key or privileged role in the governance path; protocol changes must pass the same
  tiered thresholds and timelocks that parties themselves are bound by; and any party can export its
  entire public history and take it to an independent deployment. That last one is the real
  guarantee — the right to leave with everything is the only credible check on a platform operator.

- **"What if someone loses their phone?"**
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
  identity attestors; no legal prohibition on anonymous political association.
- **Open items for Gate 1:** see Doc 02 §13.

---

### Downstream
Every promise above (headline claims, §C metrics, §D scope boundaries, §E risks and trade-offs) is
indexed as a requirement in **`docs/02-requirements-srs.md`**. A promise with no requirement is a gap
that must be closed before Gate 1.
