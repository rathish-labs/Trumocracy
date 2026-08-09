# ADR-009 — Storage: commitments on-chain, documents content-addressed on IPFS + Arweave, nothing personal anywhere

```
Status:        Accepted
Date:          2026-08-08
Owner:         Ravi Deshmukh (Principal Architect)
Traces:        BR-005, FR-046..FR-048, NFR-005, NFR-014, NFR-010, RISK-07, RISK-09
```

## Context

A party vision covering eight pillars is a document of tens to hundreds of kilobytes, revised
repeatedly, and it must be (a) permanently available, (b) provably unmodified after publication,
(c) censorship-resistant, and (d) cheap. Storing it on-chain would cost dollars per revision and
violate NFR-005. Storing it on our servers would make us the censor.

## Decision

**Three tiers, with the chain holding only the hash.**

| Tier | What lives there | Why |
|---|---|---|
| **On-chain (L2)** | Merkle roots, nullifiers, tallies, party/petition state, `bytes32` content hashes, event log | The only things that need consensus and permanence at the security level of the protocol |
| **IPFS (hot)** | Manifestos, pillar documents, proposal bodies, region code maps, ceremony transcripts | Content-addressed (CIDv1), so the on-chain hash *is* the integrity proof. Pinned redundantly by the protocol, by every party that cares, and by any citizen running a node |
| **Arweave (permanent)** | The same content, mirrored on publication | IPFS pins can lapse; a political archive must not. One-time payment, permanent storage |

**Content addressing means we cannot censor and neither can anyone else.** A manifesto's on-chain
record is `keccak256(cid)`; if every pin vanished, any citizen holding the file can re-publish it and
prove it is the original. Nothing about availability depends on our goodwill.

**Immutable version history.** Every manifesto revision appends to a per-party
`ManifestoVersion[]` with `(cid, contentHash, author, timestamp, changeSummary)`. Old versions are
never removed. A party that quietly rewrote its promises after an election is permanently visible —
this is the mechanical basis for the "dynamic accountability" requirement (BR-005), and it is
why the diff view is a first-class UI surface (SCR-MANIFESTO-DIFF), not a developer feature.

**The hard rule: no personal data, at any tier, ever.** Not encrypted, not hashed, not "pseudonymous
identifiers". Hashed personal data is personal data — an address or a phone number has a small
enough search space to brute-force. The protocol's data model contains no field that could hold a
name, address, document number, email, phone number or biometric. Client-side notification
preferences (an email for alerts) live **only** on the citizen's device and in an optional
end-to-end-encrypted notification relay keyed by the user, which the protocol never reads.

**Abuse handling without a censor.** Illegal content (e.g. incitement) posted as a manifesto cannot
be deleted from IPFS/Arweave by anyone — that is the point of the design and also its cost. What the
protocol *can* do, and does: (a) party-level flagging by members leading to a member vote to
retract, which sets a `retracted` flag on-chain that every conforming client honours; (b) an
**opt-in, publicly-auditable, jurisdiction-scoped denylist** that gateway operators may apply to
comply with their local law, published as a signed list so that any filtering is *visible* rather
than silent. We do not pretend to solve this; we make every act of filtering accountable.

## Consequences

**Good** — sub-cent publication; permanent, verifiable, censorship-resistant political record; no
data to leak.

**Bad / accepted risk**
- **Permanence cuts both ways.** A member cannot erase a manifesto they co-authored. Addressed in
  ADR-013 (legal posture) — the protocol stores no personal data, so erasure rights attach to the
  off-chain layers where they can actually be honoured.
- **IPFS retrieval can be slow and gateway-dependent.** Mitigation: protocol-run pinning cluster +
  multi-gateway fallback + client-side cache + optional local node; and Arweave as the permanent
  backstop.
- **Arweave costs are prepaid and non-refundable**; a wrong or malicious upload is permanent. A
  24-hour delay between publication and Arweave mirroring gives a window for the author to correct
  an accidental publication; after that it is permanent, and the UI says so in plain language before
  the first publish.
