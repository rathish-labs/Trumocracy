# ADR-002 — Accounts, keys and recovery: ERC-4337 smart accounts with passkeys and social recovery

```
Status:        Accepted
Date:          2026-08-08
Owner:         Priya Raghunathan (Principal Architect)
Traces:        NFR-UX-01 (usable by a non-technical citizen), NFR-KEY-01 (key loss at population
               scale), NFR-COST-01, FR-ACCT-*, RISK-KEYLOSS, RISK-COERCE
```

## Context

Two facts are in direct tension.

1. **Self-custody is the whole point.** If a company holds the keys, that company can be ordered to
   vote, to freeze a party, or to hand over the member list. The product's core promise fails.
2. **Seed phrases are unusable at population scale.** Any design where a 60-year-old first-time
   voter must write down twelve words and never lose them will disenfranchise exactly the people the
   platform claims to empower. Empirically, seed-phrase self-custody loses single-digit percentages
   of users per year. A political system that loses 3% of its citizens per year to key loss is not a
   political system.

We need self-custody **without** the seed phrase, and recovery **without** a recovery company.

## Decision

**Every citizen account is an ERC-4337 smart contract account** with a four-part key design:

1. **Primary signer: a device passkey (WebAuthn, secp256r1/P-256).** The private key is generated
   and held in the phone's secure enclave / TPM, unlocked by biometrics or device PIN, and is
   non-exportable. There is no phrase to write down and nothing to phish. On-chain verification uses
   the **RIP-7212 P-256 precompile** where available, with an audited Solidity P-256 verifier
   (e.g. Daimo's `p256-verifier`) as the fallback path so the account is never bricked by
   precompile absence.
2. **Multi-device, not single-device.** A citizen SHOULD register ≥2 passkeys (phone + laptop, or
   phone + a second phone). Passkeys sync through the platform keychain, so the common "I broke my
   phone" case never reaches the recovery path at all.
3. **Social recovery, not company recovery.** Recovery is an *M-of-N guardian* scheme where
   guardians are other Trumocracy accounts, a hardware key, or a printed offline recovery card.
   Recovery is **time-locked (7 days) and publicly announced on-chain to the account owner's
   notification channel**, so a colluding guardian set cannot silently steal an account — the real
   owner can veto with any surviving key during the window.
4. **No platform key. Ever.** The protocol MUST NOT deploy any contract that lets an operator,
   foundation or multisig move a citizen's membership, cast their vote, or rotate their keys. This
   is enforced by test (UT/TC "no privileged actor can act on a member account") and by review — it
   is the single most important invariant in the account layer.

**Gas:** citizens hold no gas token. A **paymaster** sponsors UserOperations for whitelisted
protocol actions, rate-limited per personhood nullifier (ADR-017). The account also supports
self-payment so the system degrades to "pay your own fee" rather than "you cannot participate" if
sponsorship is exhausted.

**EOA compatibility:** existing wallet users may participate via **EIP-7702** delegation, which
gives an EOA the same smart-account behaviour without a migration. This is a convenience path, not
the primary one.

## Consequences

**Good**
- First-run experience is: open a web page, tap "Create account", use Face ID. No extension, no
  seed phrase, no token purchase, no bridge. This is the difference between a civic platform and a
  crypto product.
- Non-exportable enclave keys raise the cost of remote key theft dramatically and make bulk
  credential harvesting (the precondition for industrial vote-buying) impractical.
- Session keys (scoped, expiring) let a citizen browse and act without re-authenticating for every
  read, without ever granting broad authority.

**Bad / accepted risk**
- **Passkeys tie a citizen's civic identity to a platform vendor's keychain** (Apple/Google). This
  is a real centralisation critique. Mitigations: multi-device registration, mandatory offline
  recovery card at enrolment, and full support for hardware security keys and plain secp256k1
  signers for citizens who want no vendor in the loop. The vendor can lock an account out of
  *convenience*, never out of *ownership* — the guardian path always exists.
- **Guardian collusion is a real attack** (7 guardians who are all the local strongman's cousins).
  Mitigated by the time-lock + owner veto, and by refusing to make guardianship transferable or
  purchasable.
- **Physical device coercion remains possible** — someone holding your phone and your finger can
  cast a vote. This is *not* solved at the account layer. It is solved at the voting layer by
  receipt-freeness and re-voting (ADR-006): a coerced vote can be silently overridden afterwards,
  which removes the coercer's ability to verify compliance and therefore the incentive to try.

## Alternatives rejected

- **MPC/custodial-lite wallets (Privy/Web3Auth style).** Rejected as the default: the key shard
  service is a compellable party and a single point of subpoena. Permitted as an *optional* signer
  for citizens who choose convenience, never as the protocol default.
- **Seed-phrase EOA.** Rejected as default — see Context.
- **Account abstraction native to the chain (Solana/StarkNet style).** Would be cleaner, but is
  subsumed by the ADR-001 choice.
