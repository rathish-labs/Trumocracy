# ADR-004 — Regional residency: hierarchical region codes + per-region credential trees + ZK membership proof

```
Status:        Accepted
Date:          2026-08-08
Owner:         Priya Raghunathan (Principal Architect)
Traces:        BR-LOCAL, FR-REGION-*, FR-NOM-*, NFR-PRIV-01, NFR-PRIV-02, RISK-DEANON,
               RISK-ORACLE, CON-NO-DOC-CUSTODY
```

## Context

Localised representation requires the system to know that a citizen *belongs to* a region — to
endorse a petition scoped to that region, to vote for an office in that region, to stand as a
candidate there. But "the system knows where you live" is exactly the property that gets people
killed in the jurisdictions that need this platform most.

The requirement is therefore precise: **prove regional eligibility without revealing which
individual you are, and without revealing your address to anyone, including us.**

A second, less obvious problem: **the denominator**. "A petition succeeds at 2% support of the
region" requires knowing the region's eligible population. That number is an oracle, and an oracle
is an attack surface — inflate it and no petition ever succeeds; deflate it and a handful of
accounts can charter a party (RISK-ORACLE).

## Decision

### 1. Regions are a versioned hierarchical code, not coordinates

A region is identified by a path in a versioned hierarchy, encoded as a `bytes32`:

```
REGION := country ▸ admin1 ▸ admin2 ▸ admin3 ▸ ward
e.g.      IN      ▸ KA     ▸ BLR    ▸ BLR-S  ▸ W-152
regionId  = keccak256(abi.encodePacked(schemeVersion, "IN/KA/BLR/BLR-S/W-152"))
```

- Built on public standards: **ISO 3166-1/-2** for country and admin1, national statistical codes
  below that, with a published mapping file (content-addressed, ADR-009).
- **No coordinates, ever.** The protocol never stores a latitude, a postcode, or an address. The
  finest granularity the protocol *can* express is the electoral ward, because that is the finest
  granularity an election needs.
- **Versioned**, because boundaries are redrawn (and redrawing them is itself a political act —
  gerrymandering). A boundary change creates a new `schemeVersion`; old region IDs remain valid for
  historical records, and the migration is a protocol governance action with a public diff.

### 2. Residency is an attestation from a federation of attesters, proven in zero knowledge

```
attester signs:  ResidencyCredential { identityCommitment C, regionId R, validUntil T, tier }
                 → leaf = Poseidon(C, R, T, tier)
                 → inserted into the LeanIMT for region R
citizen proves:  "I know a secret s with Poseidon(s)=C, and leaf(C,R,T,tier) ∈ tree(R) with root ∈
                  recentRoots, and T > now, and my nullifier for this scope is Nₐ"
publishes:       ZK proof + Nₐ + R + the root used
```

The chain learns: *a valid resident of region R acted, once, in this scope.* It does not learn which
one. The **anonymity set is every credentialed resident of R** — which is why the protocol enforces
a **minimum anonymity-set size (`k ≥ 1000`, NFR-PRIV-02)** before a region's tree can be used for
any published action, and otherwise falls back to the parent region. A ward with 40 verified
residents provides no anonymity, and pretending otherwise would be a lie that gets someone hurt.

### 3. Attesters are plural, staked and disputable

| Attester class | Example | Why it is in the set |
|---|---|---|
| Civil registry / electoral roll | State election commission | Highest accuracy where cooperative |
| Utility & address-verification providers | Bank/telecom KYC address attestation | Broad coverage, no state dependence |
| Accredited civil-society organisations | Local NGOs running verification desks | Reaches the undocumented and low-connectivity |
| Peer attestation | 3 existing verified residents of R vouch | Last-resort inclusion path, lowest tier, hard-capped per region per epoch |

Attesters **stake** and are **slashable** for provable mis-attestation (a credential for a region
the person demonstrably does not reside in, surfaced through the dispute process). Every attester's
issuance volume per region per epoch is public; a sudden spike is visible to everyone and triggers
an automatic quorum-freeze on that region pending review (DES-036).

### 4. The population denominator is a multi-source signed oracle with a floor

`eligiblePopulation(R)` is set by a **committee of ≥5 independent sources** (national census,
electoral roll size, UN/World Bank statistics, and independent statistical bodies), published as a
signed record with a **7-day dispute window** before it takes effect. Additional protections:

- **Median, not mean** — one corrupted source cannot move it.
- **Change rate-limit** — the denominator may not move more than ±5% per quarter without a protocol
  governance vote, so it cannot be swung mid-petition.
- **Verified-resident floor** — the threshold is `max(pct × eligiblePopulation, pct × verifiedResidents(R), absoluteFloor)`.
  This means an attacker who *deflates* the denominator gains nothing, because the number of actually
  verified residents on the platform provides an independent floor.
- **Snapshot at petition creation** — the denominator a petition must clear is fixed when the
  petition opens, so it cannot be raised underneath a succeeding petition.

## Consequences

**Good**
- A citizen's address is never known to the protocol, to us, or to any single attester beyond the
  one that already knew it (the bank that already has your address learns nothing new).
- The k ≥ 1000 rule turns "anonymity" from a marketing claim into a checked precondition.
- The denominator floor removes the most damaging oracle attack (deflation → fake party charter).

**Bad / accepted risk**
- **The attesters know things.** A bank attesting your residency knows you asked for a residency
  attestation. It does not know for what, but in a small jurisdiction the inference is available.
  Mitigations: credentials are long-lived and reusable across all actions, obtained well before use;
  attesters are asked for a *region*, not a purpose; the protocol publishes no timestamp finer than
  the epoch.
- **Peer attestation is Sybil-farmable.** Hard-capped (≤5% of a region's credentials per epoch),
  lowest tier, and excluded from charter-level actions by default.
- **Boundary redraw is a governance attack surface.** A hostile boundary change can dilute a party's
  regional base. Mitigated by versioning, public diffs, timelock, and by the fact that memberships
  and petitions in flight are pinned to the scheme version they started under.
- **We cannot prevent a citizen from lying to a weak attester.** We can only make it expensive,
  visible and slashable. Accepted.

## Alternatives rejected

- **GPS / IP geolocation.** Trivially spoofed, invasive, and produces a location trail. Rejected
  outright.
- **Address hash on-chain.** A hashed address is *not* anonymous — the address space is small enough
  to brute-force. Rejected; this is a common and serious mistake.
- **Single national electoral-roll integration.** Highest accuracy, but makes the platform
  switch-offable by one ministry. Rejected as a sole source; welcomed as one of several.
