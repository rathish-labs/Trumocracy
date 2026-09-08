# Anchored spec — Doc 01 v2.1.0 → v2.2.0 (review-loop rework, cycle 2 of 5)

```
Author:        product-owner (Priya Raghunathan) — the owning role for Doc 01
Date:          2026-09-06T19:00
Target file:   docs/01-press-release-prfaq.md   (ONE file — no other file is touched)
Applier:       project-manager (mechanical FIND/REPLACE; four-backtick fences)
Against:       artifacts/reviews/01-press-release-prfaq-v2.1.0-business-cycle1.md
               (business, cycle 1 — FAIL 87%, 1 Critical / 2 High / 3 Medium / 0 Low;
               reviewer: technical-writer, neutral, PM-assigned)
Result:        docs/01-press-release-prfaq.md v2.2.0, Status: In Review, cycle 2 of 5.
               Classification stays Public. §0 and the six v2.1.0 markers are unchanged.
Ops:           12  (2 header + 10 inline annotations)
Invariants:    NO requirement, tenet, metric, FAQ, scope item or open item is added, removed,
               reworded or renumbered. Nine tenets, the same §C rows, §D bullets and §E
               questions. Docs 02, 05, 13 and all product code are UNTOUCHED.
```

## What this version fixes

| Issue | Severity | Fixed by |
|---|---|---|
| `ISS-01` §E1 "Who is this for?" — "a **Supporter** by default — anonymous" unmarked | Critical | **OP 4** |
| `ISS-02` §E3 "Why no analytics" — "Supporters are anonymous by unconditional guarantee" unmarked | High | **OP 8** |
| `ISS-03` §E3 "right to be forgotten" — "no link between your identity and any action" unmarked; v1 reality not stated | High | **OP 9** (OP8-of-v2.1.0 pattern: v2 claim + v1 reality alongside) |
| `ISS-04` §D final bullet — "unconditional anonymity for Supporters" unmarked | Medium | **OP 3** |
| `ISS-05` recovery helpers "cannot see how you voted" (§E1) / "never reveals your past votes" (§E3), unsourced | Medium | **OP 5** and **OP 12** — grounded in `FR-059` (classed PARTIAL) and Doc 02 §16.4 `H-10`, and marked at both sites |
| `ISS-06` header `Status:` says "four" markers; body and change-log show six | Medium | **OP 1** (the whole `Status:` field is rewritten for v2.2.0 and states the count exactly) |

## Beyond the report — the full §D / §E sweep the coordinator asked for

Re-read §D and every answer in §E1, §E2 and §E3 for any remaining **present-tense** claim that a
**v1 participation act** (voting · endorsing/backing · joining or belonging to a party ·
supporting a party) is anonymous, unlinkable, unknown to Trumocracy, or unprovable. Three further
passages were found beyond the six the reviewer listed, and all three are marked here:

| Passage | Claim | Op |
|---|---|---|
| §E2 "What are the top 3 risks and mitigations?" | `RISK-02` mitigation "receipt-freeness plus invisible re-vote override"; `RISK-06` mitigation "minimum anonymity-set thresholds"; `RISK-01` "plural attestors" | **OP 6** |
| §E3 "Isn't this just a way for extremists to organise?" | extremists "cannot **keep a membership list**" — Doc 02 §16.4 `H-02` says that list **does exist** in v1 | **OP 10** |
| §E3 "What stops a billionaire buying a party?" | "because the vote is **receipt-free**… there is no way for the payer to check" | **OP 11** |

One further passage is annotated with a **different** label because the claim is *partly* true in
v1 rather than a pure v2 target — §E2 "legal, privacy, security and compliance", "*Data protection
is handled by not holding the data*" (**OP 7**). It is labelled `(v1 accuracy note — see §0.)`, not
`(v2 target — see §0.)`, so the two counts stay separable and countable — see the note on counting
below.

## Counting, so `ISS-06` cannot recur

After this version the **body** (§A–§F) contains:

- **15** occurrences of the inline marker `**(v2 target — see §0.)**` — six added at v2.1.0
  (§A tenet 2, §A tenet 4, head of §B, §E1 data-and-privacy, §E1 coercion, §E3 member-list) and
  **nine** added here (OPs 3, 4, 5, 6, 8, 9, 10, 11, 12);
- **1** occurrence of `**(v1 accuracy note — see §0.)**` (OP 7).

The header states exactly these figures. The phrase also appears in the header's prose and
change-log, which is why both statements say **"in the body"**.

---

Commentary for OP 1: the whole `Status:` field is rewritten for cycle 2. This is also the fix for
`ISS-06` — rather than patching "four" to "six" inside a field that is about to be replaced, the
new field states the v2.1.0 count and the v2.2.0 count exactly, and scopes both to the body. The
`Classification:`, `Owner:`, `Approvers:` and `Last updated:` lines are re-emitted unchanged
(`Last updated:` is already 2026-09-06 and this rework is the same day).

### OP 1 — docs/01-press-release-prfaq.md — header: version 2.2.0 and the cycle-2 Status field

FIND:
````
Version:       2.1.0
Status:        In Review — v2.1.0. Public-release posture rework of 2026-09-06: adds §0, the
               mandatory "read this first" banner stating that this PR-FAQ describes the
               Definition-B (v2) target vision and that none of it is built; adds four
               "(v2 target — see §0)" markers to the passages most likely to be read in
               isolation; changes Classification from Internal to Public ahead of the
               repository going public. Directed by the approver ruling of 2026-09-06
               (Rathish Kumar, ruling 5) recorded in
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11; finding of
               record artifacts/status/PUBLIC-RELEASE-READINESS-2026-09-06.md §1 row E-8;
               changes specified in artifacts/product-owner-2026-09-06T1530-doc01-spec.md.
               Neutral reviewer: technical-writer, business mode, per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md.
               **v2.0.0 record, carried forward:** Approved (review loop, cycle 1 PASS 97%;
               Gate 1 decision pending). That approval and that pending Gate-1 decision are
               unchanged by this version, which adds no requirement, tenet, metric, FAQ or
               scope item and removes none.
````
REPLACE WITH:
````
Version:       2.2.0
Status:        In Review — v2.2.0, review-loop rework **cycle 2 of 5** against
               artifacts/reviews/01-press-release-prfaq-v2.1.0-business-cycle1.md (business,
               cycle 1 — **FAIL 87%, 1 Critical / 2 High / 3 Medium / 0 Low**; reviewer:
               technical-writer, neutral, PM-assigned). The cycle-1 finding was a single class:
               §0 and the six v2.1.0 markers were accurate, but unmarked present-tense
               "anonymous / no link to identity" claims about v1 participation acts survived
               elsewhere in §D and §E. **Fixed, by issue id:** ISS-01 (Critical) §E1 "Who is
               this for?"; ISS-02 (High) §E3 "Why no analytics"; ISS-03 (High) §E3 "right to be
               forgotten" — v1 reality now stated alongside the v2 claim; ISS-04 (Medium) §D
               final bullet; ISS-05 (Medium) the recovery-helper claim in §E1 "Do I need to
               understand crypto?" and §E3 "What if someone loses their phone?", now grounded in
               `FR-059` (classed PARTIAL) and Doc 02 §16.4 `H-10` and marked at both sites;
               ISS-06 (Medium) the marker count, corrected and stated exactly below. **Beyond
               the report,** a full sweep of §D and §E for the same claim class found **three**
               further passages, all marked here: §E2 "top 3 risks", §E3 "extremists" ("cannot
               keep a membership list"), and §E3 "billionaire" ("because the vote is
               receipt-free"). **Marker count, stated once and scoped to the body (§A–§F):**
               **fifteen** `(v2 target — see §0.)` markers — **six** added at v2.1.0 (§A tenet 2,
               §A tenet 4, head of §B, §E1 data-and-privacy, §E1 coercion, §E3 member-list) and
               **nine** added at v2.2.0 — plus **one** `(v1 accuracy note — see §0.)` at the §E2
               data-protection answer, where the claim is partly true in v1 rather than a pure v2
               target. v2.1.0's own account of "four" markers was wrong and is superseded.
               Changes specified in
               artifacts/product-owner-2026-09-06T1900-doc01-cycle2-spec.md. Unchanged by this
               version: §0, the six v2.1.0 markers, Classification: Public, and every
               requirement, tenet, metric, FAQ, scope item and open item.
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
````

---

Commentary for OP 2: the v2.2.0 change-log entry is inserted above the surviving v2.1.0, v2.0.0
and v1.0.0 entries. The v2.1.0 entry is re-emitted byte-for-byte and is **not** corrected — it
already says "six" and was never the source of `ISS-06`; the "four" lived only in the `Status:`
field, which OP 1 replaces.

### OP 2 — docs/01-press-release-prfaq.md — change log: add the v2.2.0 entry

FIND:
````
Change log:
  v2.1.0 — 2026-09-06 — Public-release posture. Adds §0 "Read this first" (this PR-FAQ is the
````
REPLACE WITH:
````
Change log:
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
````

---

Commentary for OP 3 (`ISS-04`): the marker is appended after the bullet's last line. The final
sentence of the new text deliberately **preserves** the §D scope commitment — no-behavioural-
tracking is permanent and applies in v1 — so that qualifying the anonymity clause cannot be read
as weakening an out-of-scope guarantee.

### OP 3 — docs/01-press-release-prfaq.md — §D final bullet: ISS-04 marker

FIND:
````
  Analytics are aggregate-only; any personalisation is client-side and user-held. The analytics
  capability loss is accepted permanently in exchange for unconditional anonymity for Supporters.
````
REPLACE WITH:
````
  Analytics are aggregate-only; any personalisation is client-side and user-held. The analytics
  capability loss is accepted permanently in exchange for unconditional anonymity for Supporters.
  **(v2 target — see §0.)** "Unconditional anonymity for Supporters" is the **v2** property. In
  **v1** a Supporter's party membership sits in the operator's database and is knowable to
  Trumocracy (Doc 02 §16.4 `H-02`; `FR-082` and `FR-086` classed `DEFERRED-v2`). The
  no-behavioural-tracking commitment itself is **not** deferred: it is permanent and applies in v1
  exactly as stated in this bullet.
````

---

Commentary for OP 4 (`ISS-01`, Critical): the marker is inserted immediately under the question so
the very first customer FAQ answer cannot be read in isolation without it. It also grounds the
answer's opening phrase "a real, **unique** person" — Doc 02 §16.4 `H-15` and `FR-132` §(d)
require the improved-but-not-closed personhood caveat to be stated "in the UI and all product
materials", and this PR-FAQ is a product material.

### OP 4 — docs/01-press-release-prfaq.md — §E1 "Who is this for?": ISS-01 marker

FIND:
````
- **Who is this for?**
  Any adult who can prove they are a real, unique person legally eligible to participate in the pilot
````
REPLACE WITH:
````
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
````

---

Commentary for OP 5 (`ISS-05`, first of two sites): the reviewer asked for the claim to be grounded
in a requirement or softened. It is grounded: `FR-059` is classed **PARTIAL** and Doc 02 §16.4
`H-10` states the v1 position exactly ("the recovery event is associated with the account in the DB
and can be correlated with membership"). The marker therefore names it a v2 property and states the
v1 truth — that in v1 it is a policy and access control, not something the design makes impossible.
The rest of the answer (no seed phrase, no wallet, no gas, no jargon) is true in v1 and is
explicitly preserved.

### OP 5 — docs/01-press-release-prfaq.md — §E1 "Do I need to understand crypto?": ISS-05 (site 1)

FIND:
````
- **Do I need to understand crypto?**
  No. There is no seed phrase, no wallet to fund, no "gas", and no crypto vocabulary anywhere in the
````
REPLACE WITH:
````
- **Do I need to understand crypto?**
  **(v2 target — see §0.)** The last clause of this answer — that the people who help you recover
  your account **cannot see how you voted** — is the **v2** property (`FR-059`, classed PARTIAL;
  Doc 02 §16.4 `H-10`). In **v1** recovery is conventional: the recovery event is recorded against
  your account in the operator's database, which can also see vote direction — so in v1 this is a
  **policy and access control, not something the design makes impossible**. Everything else in this
  answer — no seed phrase, no wallet, no "gas", no crypto vocabulary — is true of v1 today.
  No. There is no seed phrase, no wallet to fund, no "gas", and no crypto vocabulary anywhere in the
````

---

Commentary for OP 6 (sweep, not in the report): the three named mitigations are the product's
answer to its three headline risks, and all three are weaker or absent in v1. `RISK-01`'s "plural
attestors" is additionally untrue of the pilot, which runs a single identity rail (`OI-20`,
`FR-129`; Doc 09 §0 Highlights; Doc 02 §16.5 T-08).

### OP 6 — docs/01-press-release-prfaq.md — §E2 "top 3 risks and mitigations": sweep marker

FIND:
````
- **What are the top 3 risks and mitigations?**
  `RISK-01` **sybil inflation of a threshold** — plural attestors, per-scope one-action-per-person
````
REPLACE WITH:
````
- **What are the top 3 risks and mitigations?**
  **(v2 target — see §0.)** These mitigations describe the **v2** design. In **v1**: the
  `RISK-02` mitigations — receipt-freeness and the invisible re-vote override — **do not exist**
  (`FR-131` clause (a); Doc 02 §16.4 `H-03`); the `RISK-06` anonymity-set mitigation is enforced
  as aggregate-only publication, a policy control, not the mathematical guarantee described
  (§16.4 `H-06`); and under `RISK-01` the Phase-1 pilot runs a **single** identity rail, not
  plural attestors (`FR-129`, `OI-20`; §16.5 T-08; Doc 09 §0).
  `RISK-01` **sybil inflation of a threshold** — plural attestors, per-scope one-action-per-person
````

---

Commentary for OP 7 (sweep; a `(v1 accuracy note)`, not a `(v2 target)` marker): "*Data protection
is handled by not holding the data*" is **partly** true of v1 — no document, biometric or address
is retained — but v1 does retain two derived identifiers. This is the enrolment class, which
`FR-131` clause (e) expressly places outside itself (governed by `FR-132` and §16.4
`H-16`–`H-18`), so it gets a factual accuracy note rather than a v2-target marker, and the note
adds no new claim beyond what §16.4 already records.

### OP 7 — docs/01-press-release-prfaq.md — §E2 legal/privacy answer: v1 accuracy note

FIND:
````
- **What are the legal, privacy, security and compliance implications?**
  Electoral law differs in every jurisdiction, which is why `CON-001` is absolute: we organise
````
REPLACE WITH:
````
- **What are the legal, privacy, security and compliance implications?**
  **(v1 accuracy note — see §0.)** "Data protection is handled by *not holding the data*" is
  **partly** true of v1. True: no identity document, no biometric template and no address is
  retained (verify-and-discard). Not true as an absolute: v1 retains two derived identifiers in
  the operator's database — `phone_hash` and `subject_id_hash` — so `FR-003` is classed PARTIAL,
  and their legal classification is an open constraint (`CON-015`) (Doc 02 §16.4 `H-16`, `H-18`).
  The member↔party mapping and vote direction are also held in v1 (§16.4 `H-02`, `H-01`).
  Electoral law differs in every jurisdiction, which is why `CON-001` is absolute: we organise
````

---

Commentary for OP 8 (`ISS-02`, High): the marker goes under the question, and the closing sentence
preserves the answer's actual commitment — the refusal to collect behavioural data is permanent and
is not one of the deferred properties.

### OP 8 — docs/01-press-release-prfaq.md — §E3 "Why no analytics": ISS-02 marker

FIND:
````
- **"Why no analytics or user tracking at all? Every other platform tracks usage."**
  Most platforms track usage to improve the product. We want to improve the product too — but not
````
REPLACE WITH:
````
- **"Why no analytics or user tracking at all? Every other platform tracks usage."**
  **(v2 target — see §0.)** One sentence below — "Supporters are anonymous by unconditional
  guarantee" — is the **v2** property. In **v1** a Supporter's party membership is held in the
  operator's database and is knowable to Trumocracy, so the guarantee is not unconditional and is
  not yet technical (Doc 02 §16.4 `H-02`; `FR-082` classed `DEFERRED-v2`). The reasoning of this
  answer is unaffected, and the refusal to collect behavioural data is **not** deferred: it is a
  permanent scope commitment that applies in v1 exactly as described here (§D).
  Most platforms track usage to improve the product. We want to improve the product too — but not
````

---

Commentary for OP 9 (`ISS-03`, High): the reviewer asked for the OP8-of-v2.1.0 pattern — state the
v1 reality alongside the v2 claim — because a reader relying on this answer for a real erasure
request would otherwise be told something false. The Worker/Candidate half of the answer is true in
v1 and is explicitly preserved.

### OP 9 — docs/01-press-release-prfaq.md — §E3 "right to be forgotten": ISS-03 marker

FIND:
````
- **"Nothing is ever deleted — what about my right to be forgotten?"**
  This is the sharpest tension in the product, and we do not resolve it cleanly. Our answer depends
````
REPLACE WITH:
````
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
````

---

Commentary for OP 10 (sweep, not in the report): "cannot keep a membership list" is the same claim
class as `ISS-01`–`ISS-03` and is the sentence Doc 02 §16.4 `H-02` contradicts most directly ("the
membership list the v2 design exists to make impossible DOES exist in v1 as database records"). The
other three items in that list are governance-design properties and are not touched.

### OP 10 — docs/01-press-release-prfaq.md — §E3 "extremists": sweep marker

FIND:
````
- **"Isn't this just a way for extremists to organise?"**
  Partly, yes — and we will not pretend otherwise. Any tool that lowers the cost of political
````
REPLACE WITH:
````
- **"Isn't this just a way for extremists to organise?"**
  **(v2 target — see §0.)** One item in the list below — that they "cannot keep a membership
  list" — is the **v2** property. In **v1** the membership list the v2 design exists to make
  impossible **does exist**, as ordinary records in the operator's database (Doc 02 §16.4 `H-02`).
  The other items — cannot buy a party, cannot install a leader, cannot stop their own members
  removing them — are properties of the governance rules and are not affected by the v1/v2 split.
  Partly, yes — and we will not pretend otherwise. Any tool that lowers the cost of political
````

---

Commentary for OP 11 (sweep, not in the report): the answer's closing move — vote-buying fails
because the vote is receipt-free — is the one defence in it that v1 does not have. Everything else
in the answer is a v1 governance rule and is preserved explicitly.

### OP 11 — docs/01-press-release-prfaq.md — §E3 "billionaire": sweep marker

FIND:
````
- **"What stops a billionaire buying a party?"**
  There is nothing to buy. Membership cannot be purchased, votes are not tokens and cannot be
````
REPLACE WITH:
````
- **"What stops a billionaire buying a party?"**
  **(v2 target — see §0.)** The last sentence of this answer — that paying people for their votes
  fails "because the vote is receipt-free" — is the **v2** property. In **v1** the vote is **NOT**
  receipt-free (`FR-131` clause (a); Doc 02 §16.4 `H-03`), so that particular defence is not in
  place yet. The rest of the answer — no purchasable membership, no transferable, delegable or
  donation-weighted vote, no standing bought by contribution — is a v1 governance rule and is not
  deferred.
  There is nothing to buy. Membership cannot be purchased, votes are not tokens and cannot be
````

---

Commentary for OP 12 (`ISS-05`, second of two sites): the same grounding as OP 5, stated locally so
the answer stands alone under the artifact-bus rule rather than depending on the reader having seen
§E1.

### OP 12 — docs/01-press-release-prfaq.md — §E3 "What if someone loses their phone?": ISS-05 (site 2)

FIND:
````
- **"What if someone loses their phone?"**
  Recovery exists, takes days rather than minutes, notifies the account and can be cancelled during a
````
REPLACE WITH:
````
- **"What if someone loses their phone?"**
  **(v2 target — see §0.)** As in the recovery answer in §E1: "it never reveals your past votes or
  governance history to whoever helped you recover" is the **v2** property (`FR-059`, classed
  PARTIAL; Doc 02 §16.4 `H-10`). In **v1** recovery is conventional and the recovery event is
  linked to your account in the operator's database, which can also see vote direction — so in v1
  this is a **policy and access control, not a property the design guarantees**. The rest of this
  answer — days not minutes, notification, a cancel window, re-keying — describes v1 as written.
  Recovery exists, takes days rather than minutes, notifies the account and can be cancelled during a
````

---

## Applier checklist

1. Apply OP 1 … OP 12 in order; each FIND must match exactly once before replacement.
2. After applying, confirm in the **body** (§A–§F): **15** occurrences of
   `**(v2 target — see §0.)**` and **1** of `**(v1 accuracy note — see §0.)**`. If either count
   differs, stop and return to the product-owner — the header states both figures.
3. Confirm `Version: 2.2.0`, `Status: In Review … cycle 2 of 5`, `Classification: Public`
   unchanged, `Last updated: 2026-09-06`, and change-log entries in order
   v2.2.0 / v2.1.0 / v2.0.0 / v1.0.0.
4. Confirm the invariants: **nine** tenets; §C table rows, §D bullets and §E question set
   unchanged in number and wording; §0 unchanged; the six v2.1.0 markers unchanged.
5. Suffix scan for transcription residue at all 12 boundaries: no orphaned `FIND:`/fence lines,
   no duplicated question line, no duplicated `Change log:` or `Version:` line.
6. Route to the **technical-writer** (business mode) for the **cycle-2** review against
   `artifacts/reviews/01-press-release-prfaq-v2.1.0-business-cycle1.md`'s rubric.
