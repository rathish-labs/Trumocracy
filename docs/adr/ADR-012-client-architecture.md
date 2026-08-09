# ADR-012 — Client: a local-first PWA that any citizen can run, verify, and replace

```
Status:        Accepted
Date:          2026-08-08
Owner:         Ravi Deshmukh (Principal Architect)
Traces:        NFR-022, NFR-011, NFR-014, NFR-006, RISK-08, RISK-07
```

## Context

The client is where every guarantee in this document is either delivered or quietly betrayed. A
perfect protocol behind a malicious or blockable frontend gives citizens nothing: the frontend is
what generates the proofs, holds the secret, and tells the user what they voted for. It is also the
easiest thing in the system for a state to block.

And it must be usable by someone who has never heard the word "blockchain", on a five-year-old
Android with intermittent 3G.

## Decision

**Next.js PWA, static-exportable, local-first, with the proving in the browser.**

1. **No crypto vocabulary in the primary flows.** "Verify you're a real person", "Join", "Support
   this party", "Cast your vote". Never "sign a transaction", "gas", "wallet", "nonce", "mint". The
   words are a UX decision with a political consequence: jargon selects for an existing crypto
   demographic, which is not the electorate.
2. **All secrets and all proving stay on-device.** The identity secret is derived in-browser and
   stored in IndexedDB wrapped by a passkey-derived key (ADR-002). Proofs are generated in a
   **Web Worker** with WASM witness generation. **No witness data ever crosses the network** — a
   server-side proving service would recreate the surveillance database we designed the whole system
   to avoid.
3. **Verify what you are given.** The client checks every circuit artifact against the on-chain
   `zkeyHash` in the verifier registry before proving, refuses unknown artifacts, and pins contract
   addresses per chain ID. A tampered deployment cannot silently hand a user a backdoored proving
   key.
4. **Unblockable by design.** The app is a static bundle: it is published to IPFS with an ENS name,
   mirrored to Arweave, downloadable as a signed offline bundle, and installable as a PWA that keeps
   working after the domain is blocked. Build output is **reproducible**, so anyone can verify the
   hosted bundle matches the public source — the standard defence against a compelled "just this one
   user gets a different JavaScript file" attack.
5. **Local-first read model.** The client keeps a local cache of party, petition and proposal state
   and reconciles against the indexer (ADR-014) *and* directly against the chain for anything
   security-relevant. **Anything the indexer says that affects a citizen's decision is verified
   against chain state before it is acted on** — the indexer is a convenience, never an authority.
6. **Accessibility as a hard requirement, tested in CI.** WCAG 2.2 AA, full keyboard operation,
   screen-reader labelling on every interactive element, minimum 44px touch targets, and — because
   the target user is not always literate in the platform's default language — an **icon+audio
   assisted mode** and full RTL support. i18n from the first commit, never retrofitted.
   Performance budget: **< 200KB initial JS**, interactive < 3s on a 4× CPU-throttled mid-range
   Android over Slow 4G, offline-capable for reading.
7. **The confirmation screen is a security surface.** After voting, the client shows an identical
   confirmation regardless of choice, offers a **change-my-vote** action for the whole voting window,
   and — for coercion (ADR-006) — supports a **panic gesture** that re-opens the ballot without
   revealing that a prior vote existed. The screen must be safe to show to someone standing over
   your shoulder.

## Consequences

**Good** — a client that is genuinely usable, genuinely private, and genuinely hard to switch off.

**Bad / accepted risk**
- **Browser crypto is a weaker sandbox than a native app.** Mitigation: passkeys keep the signing
  key in the enclave rather than in JS; a hardened native app is on the Phase 4 roadmap for
  high-risk jurisdictions.
- **In-browser proving is heavy on low-end devices.** Mitigated by small circuits (ADR-005) and by
  progressive UI (start proving while the user reads the confirmation copy). Measured on the target
  device class as a release gate, not assumed.
- **Reproducible builds are ongoing work, not a checkbox.** Requires pinned toolchains and a
  verification job that fails the release if the hash diverges.
