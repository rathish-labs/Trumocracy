# Security

## Status

**This project is design-stage and deployed nowhere.** No production or public deployment
exists. **No independent security audit has started.** Two audits are planned
([Doc 13](docs/13-project-plan.md)): audit-firm engagement is targeted for **2026-10-15**
(milestone MS-04) — a real, currently-tracked date. Both audit reports carry a target of
**2027-03-12** (milestone MS-09), but Doc 13 itself flags that date as a **placeholder offset
only**, derived from a schedule anchor that has since been retired, and explicitly says not to
use it for scheduling until the Definition-B (v2) plan re-enters design. Treat MS-09 as "not
yet planned," not as a date to rely on.

**Do not run this software against real users, and do not use it to organise real political
activity.** The zero-knowledge verifiers that would enforce this system's privacy and
one-person-one-vote properties are development mocks that accept any proof
(`MockVerifier`); v1 voting is not anonymous, receipt-free, or coercion-resistant; and
**Gate 2 (launch readiness) has not been met** — see the last section below.

## Known open findings

These are already public in the project's own governed documents. Listing them here costs
nothing and is more useful than a reader discovering them independently.

### Mocked cryptography

- **`REL-LIM-01`** — every zero-knowledge proof in this system is checked by `MockVerifier`,
  which accepts any proof. The privacy and one-person-one-vote guarantees the protocol is
  designed to provide are **simulated, not enforced**, in this release. Anyone could forge an
  enrolment, a residency proof, or a vote. (`packages/contracts/src/mocks/MockVerifier.sol`)
- Circuits are written but not compiled — compiling them requires a Phase-2 ceremony that has
  not run (Doc 06 §7 item 2).

### v1 voting posture

- **`REL-LIM-02`** — v1 voting is **NOT anonymous, NOT receipt-free, and NOT
  coercion-resistant**. The v1 ballot uses conventional account authentication; the platform
  database can see vote direction and party membership. The cryptographic private ballot is the
  v2 design (MACI) and is not built. ([FR-131](docs/02-requirements-srs.md), Doc 02 §4.45)
- **The FR-131 (a)–(c) honesty banner is already live in the built demo** on the vote surface
  today (`ReceiptFreedomBanner`, mounted at `apps/web/src/components/ProposalsAndDebate.tsx:489`
  on `/proposals`; guarded by `UT-0887`). The separate FR-131 **clause (d)**
  open-tier/counting-tier notice is also live, at the parties directory (Doc 06 §7 item 21).
  What is **not built** is the `DES-098` **acknowledge-to-proceed** control — the
  non-dismissable control that would require a voter to actively acknowledge the honesty banner
  before a ballot is confirmed — and the SCR-13/SCR-14 ballot-casting surfaces themselves, which
  do not exist as working screens yet (Doc 06 §7 items 21 and 26(d)).

### Governance gaps

- **`PREREQ-01`** — the non-violence-clause entrenchment rules (Doc 03 §10.13.10.1, rules 1–3)
  are **designed but not built**. A party can today amend away its own non-violence commitment
  in the on-chain governance path. This is a ruled **blocking prerequisite**: the on-chain
  governance increment must not ship until the adversarial regression test for this closes. It
  does not expose v1, because v1 runs no on-chain governance.
- **`C-05`** — fork initiation is currently taken from unauthenticated call data rather than
  accumulated on-chain state, making the fork-initiation thresholds decorative. The `fork` flag
  must stay off in every environment above `dev` until this is fixed; it is Phase-3 scope.

### Open security-scan findings (Doc 06 §5.3)

> **A note on ids.** The four short ids below (`H-02`, `H-05`, `H-06`, `H-07`) are Doc 06 §5.3
> security-scan finding numbers. Doc 02 §16.4 uses the **same short ids for a different
> register** — v1 honesty-disclosure rows. They are unrelated findings that happen to share a
> numbering scheme. Everywhere below, the id means the Doc 06 §5.3 security-scan finding.

- **`H-02` (Doc 06 §5.3)** — the surge-detection scan is O(n²) over its sample bound on a
  state-changing path; the same limitation specifically affects `join`/`leave` (Doc 06 §7
  item 5). This is a **liveness ceiling** at the sample cap, not a correctness defect.
- **`H-05` (Doc 06 §5.3)** — there is no expedited path to retire a compromised zero-knowledge
  circuit; the normal 30-day timelock plus a 30-day grace window both apply, so a known-bad
  verifier could remain live for up to ~60 days.
- **`H-06` (Doc 06 §5.3)** — the published identity commitment is a stable pseudonym across a
  party's events, which is a smaller anonymity property than full unlinkability.
- **`H-07` (Doc 06 §5.3)** — root history is bounded by a count of insertions, not a time
  window, so a busy region can evict a Merkle root that a citizen is still proving against.

### Release-safety gaps

- **`REL-LIM-12`** — the deployment-safety gate that is supposed to refuse promoting an
  environment still wired to a mock verifier is written and unit-tested, but nothing that
  actually deploys calls it yet. No environment can currently be promoted through this control
  because there is no live promotion path for it to guard.
- **`REL-LIM-15`** — a petition that has already met its activation threshold cannot be
  activated while the `petitions` flag is off; disabling that flag is not purely additive.
- **`REL-LIM-16`** — removing a compromised identity issuer can, in the worst case, halt all
  enrolment network-wide for up to 30 days if it drops the region below the minimum
  issuer-diversity requirement — and in the current single-rail pilot there is no sibling
  issuer to fall back to at all.
- **`REL-LIM-17`** — the ability to authorise a new nullifier-spender is irrevocable and only
  ever grows; this is accepted by design (there is deliberately no admin key to revoke it) but
  must be inventoried and monitored rather than assumed small.
- **`REL-LIM-18`** — **closed.** Five shipped strings previously asserted the retired "votes are
  anonymous but not receipt-free" framing, in violation of `FR-131`. All five were fixed in
  commit `0a5c542`, merged to `main` as `84e2203`, and verified against `HEAD` with regression
  guards `UT-0887`, `UT-0759`, and `UT-0888`. Listed here as an example of the review-and-rework
  loop closing a real defect, not as an open item.

### Traceability debt

- **`TD-RTM-01`** — the unit-test ids `UT-0841`..`UT-0848` are each defined twice, in two
  different test files. This does not affect any requirement's status, but it makes the
  automated duplicate/orphan check in the traceability matrix unsound for those eight ids until
  one set is renumbered.

## Gate 2 (launch readiness): NOT met

This project's own governance requires two human-approved gates before anything ships:
direction (Gate 1) and launch (Gate 2). **Gate 2 has not been reached.** As of the traceability
matrix's current approved version, of **138 Must-priority requirement rows, 16 are complete and
122 remain open**. Independent audits have not started, a rollback drill has not been executed,
and the MACI committee that would run the private ballot does not exist yet. See
[Doc 08](docs/08-traceability-matrix.md) and [Doc 09 §0](docs/09-release-notes.md) for the full,
current accounting — those documents, not this one, are the source of truth for the exact
figures, and they are updated more often than this file.

## Reporting a vulnerability

Please use **GitHub's private vulnerability reporting** for this repository (the "Report a
vulnerability" option under the Security tab) rather than a public issue. This needs no email
address and keeps the report private until it is resolved. (If this feature is not yet enabled
on the repository at the time you are reading this, please open a normal issue asking the
maintainer to enable it, without including any vulnerability details in that issue.)

Response time is **best-effort**, from a single maintainer — there is no security team and no
service-level agreement. Any fix ships through the same two-gate governance process described
in [`CLAUDE.md`](CLAUDE.md); there is **no silent hotfix path** by design (`ADR-010`) — the
project has no admin key anywhere, including for its own release process.

## What not to report

Please do not open a report for anything already listed above: the mocked verifiers, the
unbuilt phases (elections, recall, treasury, the MACI privacy layer), or any of the numbered
findings and register ids in this document. These are known, tracked, and already public. A
report is useful when it tells us something this document does not already say.
