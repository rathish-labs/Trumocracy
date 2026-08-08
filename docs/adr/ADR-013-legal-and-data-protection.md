# ADR-013 — Legal posture: an organising tool, not an election authority; erasure by design, not by deletion

```
Status:        Accepted
Date:          2026-08-08
Owner:         Priya Raghunathan (Principal Architect) · Reviewed by: Counsel (external)
Traces:        CON-LEGAL-01, CON-LEGAL-02, NFR-PRIV-03, NFR-COMPLY-01, RISK-STATE, RISK-MISUSE
```

> This ADR records architectural decisions with legal consequences. It is not legal advice, and each
> jurisdiction requires local counsel before launch — that is itself a gate condition in Doc 13.

## Context

Three legal realities shape the architecture and cannot be engineered away.

1. **Electoral law is national, mandatory, and not something a protocol can opt out of.** Registering
   a political party, funding it, and electing its officers are regulated acts in every democracy,
   with real requirements: named officers, audited accounts, donor disclosure, spending limits.
2. **Data protection law (GDPR and its many descendants) grants erasure rights** that an immutable
   ledger cannot honour if personal data is on it.
3. **A platform for organising political opposition will be ordered to identify its users.** Not
   might — will. The only question is what we are able to produce when that order arrives.

## Decision

### 1. Hard scope boundary: Trumocracy organises parties; it does not run binding state elections

The protocol's outputs are **internal** party acts — a party's own membership decisions, its own
candidate selection, its own manifesto, its own officers. It never claims to be, replace or interface
with a state's ballot. Where a state requires a registered party to have named officers and audited
accounts, the protocol *produces the evidence* for that filing (an auditable candidate-selection
record, a fully transparent treasury ledger) and a human officer files it under their own name.

This boundary is architectural, not just a disclaimer: there is no code path that produces a
state-binding electoral result, and the word "election" in the codebase always means an *internal
party* election. Blurring this would make the platform illegal in most of its target markets on day
one, and would make every regional deployment hostage to one electoral commission's opinion.

### 2. Erasure is honoured by never collecting, not by deleting

The chain holds **no personal data** (ADR-009): only commitments, nullifiers, roots and tallies. A
`Poseidon` commitment to a secret that never left a device is not personal data under any reading —
there is no re-identification path, because the linking data does not exist anywhere.

Where personal data *does* exist:
- **On the citizen's device** — under their sole control; erasure is uninstalling.
- **At the issuer/attester** — their controller relationship, their retention obligations, disclosed
  at enrolment.
- **In optional off-chain services** (notification relay, support) — conventional storage, real
  deletion, minimal retention (≤30 days), end-to-end encrypted where possible.

For any residual off-chain content, **crypto-shredding** applies: content is stored encrypted with a
per-record key, and erasure destroys the key.

The genuinely hard case is honest and stated in Doc 01: **a member cannot erase their contribution to
a public manifesto**, because a political record that can be rewritten is not a political record.
Authorship is pseudonymous by default precisely so that this permanence attaches to a pseudonym
rather than to a person.

### 3. What we can produce under compulsion — designed in advance

| Order | What we can produce |
|---|---|
| "Give us the member list for party X" | Merkle commitments. No names, no addresses, no device IDs, no IPs (the protocol has no server that sees them; gateways run with no logging and are replaceable). |
| "Tell us who cast vote N" | Nothing. Ballots are encrypted under a 5-of-7 threshold key held across ≥5 jurisdictions (ADR-006); we hold no share sufficient to decrypt, and no party holds a decryption path to an *individual* ballot at all. |
| "Take down party Y" | We cannot. No pause key, no admin key, no proxy (ADR-010). The frontend we host can be blocked; the protocol and its IPFS/Arweave clients cannot. |
| "Stop citizen Z participating" | We cannot; there is no account-level authority in the core. |

This is not defiance-by-design for its own sake. It is the deliberate elimination of capabilities
that, if they existed, would be demanded and used — including against us. **The safest design for the
operator is one where the operator is genuinely powerless.**

### 4. Misuse

An open party-incubation platform will be used to organise parties whose politics are repugnant, and
possibly illegal, in some jurisdiction. The design response is *jurisdictional and social*, not
architectural:
- The protocol applies no political content rules; a protocol that judges political content is a
  political actor, and whoever writes those rules is the new gatekeeper.
- Gateway operators apply their own local legal compliance, **publicly and auditably** (ADR-009), so
  filtering is visible rather than silent.
- Members retain retraction, fork and exit rights, which are the community's own remedies.
- We state this trade-off plainly in the PR-FAQ instead of pretending an open platform can be
  selectively open.

## Consequences

**Good** — minimal compliance surface, no honeypot, defensible posture in each jurisdiction,
credible privacy promise because it is enforced by absence of capability rather than by policy.

**Bad / accepted risk**
- **Regulatory hostility is likely regardless.** Mitigated by the scope boundary, per-jurisdiction
  counsel before each regional launch (a Doc 13 gate condition), and a published transparency report.
- **"You can't do anything about bad actors" is a genuine and permanent criticism**, not one we can
  answer away. We accept it as the cost of a platform that a government cannot switch off, and we say
  so out loud.
- **Treasury and donation rules vary enormously.** The treasury module is therefore
  **jurisdiction-configurable** (caps, disclosure thresholds, prohibited donor classes) with a
  per-region policy pack, and a party that misconfigures it is warned in-product.
