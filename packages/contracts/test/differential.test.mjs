/**
 * UT-0400..UT-0420 — differential tests: the pure reference implementation in
 * `@trumocracy/protocol` versus the deployed Solidity.
 *
 * This is the highest-value suite in the repository. The client uses the reference
 * implementation to tell a citizen "your proposal passed" or "you need 400 more
 * endorsements". If the chain disagrees with that prediction, the citizen has been lied to
 * by their own software — which, in a governance system, is indistinguishable from fraud.
 * Any divergence here is a release blocker.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { keccak256, toHex } from 'viem';
import {
  effectiveRules,
  tally,
  petitionThreshold,
  isSurgeActive,
  regionPreimage,
  TIER,
  BPS,
} from '@trumocracy/protocol';
import { deployProtocol, artifacts, regionId } from './fixture.mjs';

const DAY = 86400;

describe('UT-0400 tier rules: reference vs chain', () => {
  let ctx;
  let rules;
  beforeAll(async () => {
    ctx = await deployProtocol({ residents: 0, population: 0 });
    const A = artifacts();
    // GovernanceRules is an internal library; RulesProbe (test/support) exposes it.
    rules = await ctx.chain.deploy(A.RulesProbe, []);
  }, 300_000);

  for (const [name, tier] of Object.entries({
    operational: TIER.OPERATIONAL,
    policy: TIER.POLICY,
    structural: TIER.STRUCTURAL,
    constitutional: TIER.CONSTITUTIONAL,
  })) {
    it(`agrees on the ${name} tier, with and without a growth surge`, async () => {
      for (const surge of [false, true]) {
        const ref = effectiveRules(tier, {}, surge);
        const chainRules = await rules.read('effective', [tier, 0, surge]);
        expect(Number(chainRules.quorumBps), `${name} quorum surge=${surge}`).toBe(ref.quorumBps);
        expect(Number(chainRules.approvalBps), `${name} approval surge=${surge}`).toBe(ref.approvalBps);
        expect(Number(chainRules.minTenureSeconds)).toBe(ref.minTenureSeconds);
        expect(Number(chainRules.timelockSeconds)).toBe(ref.timelockSeconds);
        expect(Number(chainRules.discussionSeconds)).toBe(ref.discussionSeconds);
        expect(Number(chainRules.minVotingSeconds)).toBe(ref.minVotingSeconds);
        expect(chainRules.surgeApplied).toBe(ref.surgeApplied);
      }
    });
  }

  it('UT-0401 agrees that a charter may not be weaker than the protocol floor', async () => {
    // Reference throws; chain reverts. Both refuse — that agreement is the point.
    expect(() => effectiveRules(TIER.CONSTITUTIONAL, { tiers: { 3: { minTenureSeconds: 30 * DAY } } })).toThrow();
    const r = await rules.expectRevert('effective', [TIER.CONSTITUTIONAL, 30 * DAY, false]);
    expect(r.reason).toMatch(/CharterWeakerThanFloor/);
  });

  it('UT-0402 agrees on tally outcomes across a matrix of vote splits', async () => {
    const cases = [
      { f: 300, a: 100, ab: 0, m: 1000, tier: TIER.POLICY },
      { f: 50, a: 0, ab: 0, m: 1000, tier: TIER.POLICY },
      { f: 60, a: 60, ab: 80, m: 1000, tier: TIER.POLICY },
      { f: 100, a: 100, ab: 0, m: 1000, tier: TIER.POLICY },
      { f: 750, a: 250, ab: 0, m: 1000, tier: TIER.CONSTITUTIONAL },
      { f: 749, a: 251, ab: 0, m: 1000, tier: TIER.CONSTITUTIONAL },
      { f: 400, a: 0, ab: 0, m: 1000, tier: TIER.STRUCTURAL },
      { f: 0, a: 0, ab: 0, m: 1000, tier: TIER.OPERATIONAL },
      { f: 7, a: 3, ab: 1, m: 13, tier: TIER.POLICY },
      { f: 1, a: 0, ab: 0, m: 1, tier: TIER.OPERATIONAL },
    ];

    for (const c of cases) {
      const ref = tally({
        forVotes: c.f,
        againstVotes: c.a,
        abstainVotes: c.ab,
        snapshotMembers: c.m,
        rules: effectiveRules(c.tier),
      });
      const chainResult = await rules.read('tally', [c.tier, 0, false, BigInt(c.f), BigInt(c.a), BigInt(c.ab), BigInt(c.m)]);
      expect(chainResult[0], `passed for ${JSON.stringify(c)}`).toBe(ref.passed);
      expect(Number(chainResult[1]), `quorum for ${JSON.stringify(c)}`).toBe(ref.quorumBps);
      expect(Number(chainResult[2]), `approval for ${JSON.stringify(c)}`).toBe(ref.approvalBps);
    }
  });
});

describe('UT-0410 petition threshold: reference vs chain', () => {
  const scenarios = [
    { population: 1_000_000, residents: 14, label: 'population dominates' },
    { population: 0, residents: 14, label: 'oracle deflated to zero' },
    { population: 0, residents: 0, label: 'empty region — floor binds' },
  ];

  for (const s of scenarios) {
    it(`agrees when ${s.label}`, async () => {
      const ctx = await deployProtocol({ residents: s.residents, population: s.population });
      const onChain = await ctx.partyRegistry.read('requiredEndorsements', [ctx.rid, 200]);
      const pop = Number((await ctx.regions.read('population', [ctx.rid]))[0]);
      // The floor is a deployment parameter, so the reference must be given the SAME floor
      // the chain was deployed with. Comparing against the production constant while the
      // fixture runs a smaller one would be a differential test of two different systems.
      const ref = petitionThreshold({
        eligiblePopulation: pop,
        verifiedResidents: s.residents,
        thresholdBps: 200,
        absoluteFloor: ctx.endorsementFloor,
      });
      expect(Number(onChain)).toBe(ref);
    }, 300_000);
  }
});

describe('UT-0415 region ids: reference vs chain', () => {
  it('derives identical region ids from identical paths', async () => {
    const ctx = await deployProtocol({ residents: 0, population: 0 });
    for (const [path, version] of [
      ['IN', 1],
      ['IN/KA', 1],
      ['IN/KA/BLR', 1],
      ['IN/KA/BLR/BLR-S/W-152', 1],
      ['IN/KA', 2],
      ['BR/SP/SAO-PAULO', 1],
    ]) {
      const onChain = await ctx.regions.read('regionIdOf', [path, version]);
      expect(onChain.toLowerCase()).toBe(regionId(path, version).toLowerCase());
      // and the preimage the reference hashes is the one the chain hashes
      expect(regionPreimage(path, version)).toBe(`v${version}:${path}`);
    }
  }, 300_000);
});

describe('UT-0420 growth surge: reference vs chain', () => {
  it('agrees on whether a membership history constitutes a surge', async () => {
    // The chain samples growth from real join events; the reference takes the samples
    // directly. Feed the chain's own recorded samples back through the reference and require
    // the same verdict.
    const { deployProtocol: dp } = await import('./fixture.mjs');
    const ctx = await dp({ population: 0 });
    const { activateParty, attach, residencySignals, scopeId, ZERO_PROOF } = await import('./fixture.mjs');
    const { partyAddress } = await activateParty(ctx, { petitionId: keccak256(toHex('p:diff-surge')) });
    const party = attach(ctx, 'Party', partyAddress);
    const partyId = await party.read('partyId', []);

    const join = async (i) => {
      const signals = await residencySignals(ctx, {
        scope: scopeId('join', partyId),
        nullifier: 9_100_000n + BigInt(i),
        commitment: 9_200_000n + BigInt(i),
      });
      await party.send('join', [ZERO_PROOF, signals]);
    };

    for (let i = 0; i < 10; i++) {
      await join(i);
      await ctx.chain.warp(2 * 3600);
    }
    const quietVerdict = await party.read('surgeActive', []);

    for (let i = 10; i < 30; i++) {
      await join(i);
      await ctx.chain.warp(2 * 3600);
    }
    const surgeVerdict = await party.read('surgeActive', []);

    const count = Number(await party.read('growthSampleCount', []));
    const samples = [];
    for (let i = 0; i < count; i++) {
      const s = await party.read('growthSamples', [BigInt(i)]);
      samples.push({ timestamp: Number(s[0]), memberCount: Number(s[1]) });
    }
    const refVerdict = isSurgeActive(samples, Number(ctx.chain.timestamp));

    expect(surgeVerdict).toBe(refVerdict);
    expect(typeof quietVerdict).toBe('boolean');
  }, 600_000);
});

