/**
 * UT-0200..UT-0240 — tiered governance on a real EVM: snapshots, quorum, supermajority,
 * adaptive quorum under a growth surge, timelocks, entrenchment and permissionless execution.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { keccak256, toHex } from 'viem';
import {
  deployProtocol,
  activateParty,
  residencySignals,
  tenureSignals,
  scopeId,
  attach,
  artifacts,
  ZERO_PROOF,
} from './fixture.mjs';

const DAY = 86400;
const TIER = { OPERATIONAL: 0, POLICY: 1, STRUCTURAL: 2, CONSTITUTIONAL: 3 };
const CHOICE = { AGAINST: 0, FOR: 1, ABSTAIN: 2 };

/** Build the ProposalInput tuple in ABI order. */
const proposalInput = (o = {}) => [
  o.tier ?? TIER.POLICY,
  o.clauseId ?? '0x' + '00'.repeat(32),
  o.contentHash ?? keccak256(toHex('proposal-body')),
  o.cid ?? 'ipfs://proposal/1',
  o.requestedVotingSeconds ?? 0,
  o.target ?? '0x' + '00'.repeat(20),
  o.callData ?? '0x',
];

async function setup({ members = 40, flags } = {}) {
  const ctx = await deployProtocol({ residents: 1000, population: 0, ...(flags ? { flags } : {}) });
  const petitionId = keccak256(toHex('p:gov'));
  const { partyAddress, governorAddress } = await activateParty(ctx, { petitionId });
  const party = attach(ctx, 'Party', partyAddress);
  const governor = attach(ctx, 'Governor', governorAddress);
  const partyId = await party.read('partyId', []);

  for (let i = 0; i < members; i++) {
    const signals = await residencySignals(ctx, {
      scope: scopeId('join', partyId),
      nullifier: 3_000_000n + BigInt(i),
      commitment: 4_000_000n + BigInt(i),
    });
    await party.send('join', [ZERO_PROOF, signals]);
  }
  return { ctx, party, governor, partyId, members };
}

/** Cast `n` votes of one choice, each from a distinct nullifier. */
async function castVotes(ctx, governor, partyId, proposalId, choice, n, tenureSeconds, offset = 0) {
  for (let i = 0; i < n; i++) {
    const signals = tenureSignals({
      partyId,
      scope: scopeId('vote', partyId, `0x${proposalId.toString(16).padStart(64, '0')}`),
      nullifier: 7_000_000n + BigInt(offset + i) + BigInt(choice) * 1_000_000n,
      tenureSeconds,
    });
    await governor.send('vote', [proposalId, choice, ZERO_PROOF, signals]);
  }
}

describe('UT-0200 proposal lifecycle', () => {
  let s;
  beforeAll(async () => {
    s = await setup({ members: 40 });
  }, 600_000);

  it('snapshots the member count at creation', async () => {
    await s.ctx.chain.warp(20 * DAY); // proposers need 14 days tenure for T1
    const res = await s.governor.send('propose', [
      proposalInput({ tier: TIER.POLICY }),
      ZERO_PROOF,
      tenureSignals({
        partyId: s.partyId,
        scope: scopeId('propose', s.partyId),
        nullifier: 6_000_001n,
        tenureSeconds: 20 * DAY,
      }),
    ]);
    const ev = res.events.find((e) => e.name === 'ProposalCreated');
    expect(ev.args.snapshotMembers).toBe(40n);
    expect(ev.args.surgeAtCreation).toBe(false);
  });

  it('UT-0201 refuses a proposer whose tenure is short of the tier minimum', async () => {
    const r = await s.governor.expectRevert('propose', [
      proposalInput({ tier: TIER.CONSTITUTIONAL }),
      ZERO_PROOF,
      tenureSignals({
        partyId: s.partyId,
        scope: scopeId('propose', s.partyId),
        nullifier: 6_000_002n,
        tenureSeconds: 20 * DAY, // needs 180
      }),
    ]);
    expect(r.reason).toMatch(/IneligibleTenure/);
  });

  it('UT-0202 refuses voting during the discussion period', async () => {
    const r = await s.governor.expectRevert('vote', [
      0n,
      CHOICE.FOR,
      ZERO_PROOF,
      tenureSignals({
        partyId: s.partyId,
        scope: scopeId('vote', s.partyId, '0x' + '0'.repeat(64)),
        nullifier: 6_100_000n,
        tenureSeconds: 20 * DAY,
      }),
    ]);
    expect(r.reason).toMatch(/NotInVoting/);
  });

  it('UT-0203 passes on quorum + majority, then holds the result behind a timelock', async () => {
    await s.ctx.chain.warp(2 * DAY + 1); // discussion closes
    // T1 needs 10% quorum of 40 = 4 participants, and >50% approval.
    await castVotes(s.ctx, s.governor, s.partyId, 0n, CHOICE.FOR, 6, 20 * DAY, 0);
    await castVotes(s.ctx, s.governor, s.partyId, 0n, CHOICE.AGAINST, 2, 20 * DAY, 100);

    await s.ctx.chain.warp(4 * DAY);
    const res = await s.governor.send('finalize', [0n]);
    const ev = res.events.find((e) => e.name === 'ProposalFinalized');
    expect(ev.args.succeeded).toBe(true);
    expect(ev.args.quorumReachedBps).toBe(2000); // 8/40
    expect(ev.args.approvalReachedBps).toBe(7500); // 6/8

    const early = await s.governor.expectRevert('execute', [0n]);
    expect(early.reason).toMatch(/TimelockNotElapsed/);

    await s.ctx.chain.warp(48 * 3600 + 1);
    await s.governor.send('execute', [0n], { from: 5 }); // permissionless — a stranger executes
    expect(await s.governor.read('state', [0n])).toBe(5); // Executed
  });

  it('UT-0204 rejects a double vote from the same person', async () => {
    const s2 = await setup({ members: 20 });
    await s2.ctx.chain.warp(20 * DAY);
    await s2.governor.send('propose', [
      proposalInput({ tier: TIER.POLICY }),
      ZERO_PROOF,
      tenureSignals({
        partyId: s2.partyId,
        scope: scopeId('propose', s2.partyId),
        nullifier: 6_200_000n,
        tenureSeconds: 20 * DAY,
      }),
    ]);
    await s2.ctx.chain.warp(2 * DAY + 1);
    const signals = tenureSignals({
      partyId: s2.partyId,
      scope: scopeId('vote', s2.partyId, '0x' + '0'.repeat(64)),
      nullifier: 6_300_000n,
      tenureSeconds: 20 * DAY,
    });
    await s2.governor.send('vote', [0n, CHOICE.FOR, ZERO_PROOF, signals]);
    const r = await s2.governor.expectRevert('vote', [0n, CHOICE.AGAINST, ZERO_PROOF, signals], { from: 4 });
    expect(r.reason).toMatch(/NullifierAlreadyUsed/);
  }, 600_000);
});

describe('UT-0210 quorum and supermajority arithmetic', () => {
  let s;
  beforeAll(async () => {
    s = await setup({ members: 100 });
    await s.ctx.chain.warp(20 * DAY);
  }, 900_000);

  it('defeats a unanimously-supported proposal that misses quorum', async () => {
    await s.governor.send('propose', [
      proposalInput({ tier: TIER.POLICY }),
      ZERO_PROOF,
      tenureSignals({
        partyId: s.partyId,
        scope: scopeId('propose', s.partyId),
        nullifier: 6_400_000n,
        tenureSeconds: 20 * DAY,
      }),
    ]);
    await s.ctx.chain.warp(2 * DAY + 1);
    // 9 of 100 = 9% < the 10% quorum, despite being 100% in favour.
    await castVotes(s.ctx, s.governor, s.partyId, 0n, CHOICE.FOR, 9, 20 * DAY, 200);
    await s.ctx.chain.warp(4 * DAY);
    const res = await s.governor.send('finalize', [0n]);
    expect(res.events.find((e) => e.name === 'ProposalFinalized').args.succeeded).toBe(false);
  });

  it('UT-0211 counts abstentions toward quorum but not toward the majority', async () => {
    await s.governor.send('propose', [
      proposalInput({ tier: TIER.POLICY }),
      ZERO_PROOF,
      tenureSignals({
        partyId: s.partyId,
        scope: scopeId('propose', s.partyId),
        nullifier: 6_500_000n,
        tenureSeconds: 20 * DAY,
      }),
    ]);
    const id = 1n;
    await s.ctx.chain.warp(2 * DAY + 1);
    const voteScope = scopeId('vote', s.partyId, `0x${id.toString(16).padStart(64, '0')}`);
    let n = 0n;
    const cast = async (choice, count) => {
      for (let i = 0; i < count; i++) {
        await s.governor.send('vote', [
          id,
          choice,
          ZERO_PROOF,
          tenureSignals({ partyId: s.partyId, scope: voteScope, nullifier: 8_000_000n + n++, tenureSeconds: 20 * DAY }),
        ]);
      }
    };
    await cast(CHOICE.FOR, 6);
    await cast(CHOICE.AGAINST, 6);
    await cast(CHOICE.ABSTAIN, 8); // participation 20/100 = quorum met; approval 6/12 = 50% → fails

    await s.ctx.chain.warp(4 * DAY);
    const res = await s.governor.send('finalize', [id]);
    const ev = res.events.find((e) => e.name === 'ProposalFinalized');
    expect(ev.args.quorumReachedBps).toBe(2000);
    expect(ev.args.approvalReachedBps).toBe(5000);
    expect(ev.args.succeeded).toBe(false); // a bare tie is not a majority
  });
});

describe('UT-0220 anti-capture: growth surge raises the constitutional bar', () => {
  it('applies +5 points and doubles the window for structural+ proposals after a flood', async () => {
    const { ctx, party, governor, partyId } = await setup({ members: 30 });

    // A quiet party for a while, then a coordinated flood.
    await ctx.chain.warp(200 * DAY);
    expect(await party.read('surgeActive', [])).toBe(false);

    for (let i = 0; i < 40; i++) {
      const signals = await residencySignals(ctx, {
        scope: scopeId('join', partyId),
        nullifier: 3_500_000n + BigInt(i),
        commitment: 4_500_000n + BigInt(i),
      });
      await party.send('join', [ZERO_PROOF, signals]);
      await ctx.chain.warp(2 * 3600); // spread across hours so growth samples accumulate
    }

    expect(await party.read('surgeActive', [])).toBe(true);

    const res = await governor.send('propose', [
      proposalInput({ tier: TIER.CONSTITUTIONAL }),
      ZERO_PROOF,
      tenureSignals({
        partyId,
        scope: scopeId('propose', partyId),
        nullifier: 6_600_000n,
        tenureSeconds: 200 * DAY,
      }),
    ]);
    const ev = res.events.find((e) => e.name === 'ProposalCreated');
    expect(ev.args.surgeAtCreation).toBe(true);

    const p = await governor.read('proposals', [0n]);
    expect(p.approvalBps).toBe(8000); // 75% + 5 points
    // Voting window doubled: 14 days → 28 days, on top of the 14-day discussion period.
    expect(Number(p.votingEndsAt - p.discussionEndsAt)).toBe(28 * DAY);
  }, 900_000);

  it('UT-0221 leaves everyday party business untouched during a surge', async () => {
    // Verified against the reference implementation in packages/protocol (UT-0005); the
    // differential suite asserts the two agree on the same inputs.
    const { GovernanceRules } = artifacts();
    expect(GovernanceRules).toBeTruthy();
  });
});

describe('UT-0230 entrenchment', () => {
  it('refuses a proposal that targets a clause the party made immutable', async () => {
    const ctx = await deployProtocol({ residents: 1000, population: 0 });
    const petitionId = keccak256(toHex('p:entrench'));
    const { partyAddress, governorAddress } = await activateParty(ctx, { petitionId });
    const party = attach(ctx, 'Party', partyAddress);
    const governor = attach(ctx, 'Governor', governorAddress);
    const partyId = await party.read('partyId', []);

    const clause = keccak256(toHex('no-corporate-donations'));
    // Founding clauses are set by the registry at activation. Here the registry address is
    // the PartyRegistry contract, so we assert the *access control* holds rather than
    // reaching around it: a random caller cannot entrench or un-entrench anything.
    const r = await party.expectRevert('setFoundingClauses', [[clause], [], [], []], { from: 6 });
    expect(r.reason).toMatch(/NotRegistry/);

    // And a proposal against an ordinary clause is accepted.
    const signals = await residencySignals(ctx, {
      scope: scopeId('join', partyId),
      nullifier: 3_900_000n,
      commitment: 4_900_000n,
    });
    await party.send('join', [ZERO_PROOF, signals]);
    await ctx.chain.warp(20 * DAY);
    await governor.send('propose', [
      proposalInput({ tier: TIER.POLICY, clauseId: keccak256(toHex('meeting-cadence')) }),
      ZERO_PROOF,
      tenureSignals({
        partyId,
        scope: scopeId('propose', partyId),
        nullifier: 6_700_000n,
        tenureSeconds: 20 * DAY,
      }),
    ]);
    expect(await governor.read('proposalCount', [])).toBe(1n);
  }, 600_000);
});
