/**
 * UT-0100..UT-0140 — the walking skeleton, end to end, on a real EVM.
 *
 * enrol → region → residency → petition → endorse → threshold → activate → join →
 * propose → vote → finalize → timelock → execute.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { keccak256, toHex } from 'viem';
import {
  deployProtocol,
  activateParty,
  residencySignals,
  tenureSignals,
  scopeId,
  charterTuple,
  artifacts,
  ZERO_PROOF,
  ISSUER_DOC,
  ATTESTER,
  flagId,
  attach,
  ISSUER_STATE,
  NS_EPASSPORT,
  NS_CIVIL_REGISTRY,
  NS_SOCIAL,
} from './fixture.mjs';

const DAY = 86400;
const PETITION = keccak256(toHex('petition:commons-forward'));

describe('UT-0100 protocol deployment', () => {
  let ctx;
  beforeAll(async () => {
    ctx = await deployProtocol();
  }, 300_000);

  it('seeds a region that clears the anonymity floor', async () => {
    expect(await ctx.regions.read('verifiedResidents', [ctx.rid])).toBe(14n);
    expect(await ctx.regions.read('anonymitySetSufficient', [ctx.rid])).toBe(true);
  });

  it('UT-0101 accepts a population only via the median of ≥5 sources, after a dispute window', async () => {
    const pop = await ctx.regions.read('population', [ctx.rid]);
    expect(pop[0]).toBe(1_000_274n); // median of the five seeded values
  });

  it('UT-0117 pins the production floors, which the fast test fixture deliberately lowers', async () => {
    // The fixture runs small floors so the suite finishes; these assertions are what stop
    // that convenience from ever becoming the deployed configuration.
    expect(await ctx.regions.read('PRODUCTION_MIN_ANONYMITY_SET', [])).toBe(1000n);
    expect(await ctx.partyRegistry.read('PRODUCTION_ABSOLUTE_FLOOR_ENDORSEMENTS', [])).toBe(500n);

    // …and this fixture is correctly flagged as NOT production-grade.
    expect(await ctx.regions.read('anonymityFloorIsProductionGrade', [])).toBe(false);
    expect(await ctx.partyRegistry.read('endorsementFloorIsProductionGrade', [])).toBe(false);

    const real = await deployProtocol({ anonymityFloor: 1000, endorsementFloor: 500, residents: 0 });
    expect(await real.regions.read('anonymityFloorIsProductionGrade', [])).toBe(true);
    expect(await real.partyRegistry.read('endorsementFloorIsProductionGrade', [])).toBe(true);
  }, 120_000);

  it('UT-0118 refuses a deployment configured with no floor at all', async () => {
    const A = artifacts();
    await expect(
      ctx.chain.deploy(A.RegionRegistry, [ctx.timelock.toString(), 0n]),
    ).rejects.toThrow(/BadAnonymityFloor/);
  });

  it('UT-0102 satisfies the ADR-003 invariant: ≥2 issuers, ≥1 non-state', async () => {
    expect(await ctx.personhood.read('issuerSetValid', [])).toBe(true);
  });

  it('UT-0103 refuses a region where every accepted issuer is state-operated', async () => {
    const solo = await deployProtocol({ residents: 0 });
    await solo.personhood.send('registerIssuer', [
      keccak256(toHex('state-a')),
      3,
      true,
      0,
      NS_SOCIAL,
      'ipfs://a',
    ]);
    await solo.personhood.send('registerIssuer', [
      keccak256(toHex('state-b')),
      3,
      true,
      0,
      NS_SOCIAL,
      'ipfs://b',
    ]);
    // Deactivate the fixture's non-state issuer, leaving only state issuers.
    await solo.personhood.send('deactivateIssuer', [ISSUER_DOC, 'test']);
    expect(await solo.personhood.read('issuerSetValid', [])).toBe(false);
  }, 120_000);
});

describe('UT-0104 personhood enrolment', () => {
  let ctx;
  beforeAll(async () => {
    ctx = await deployProtocol({ residents: 0 });
  }, 300_000);

  it('enrols a citizen and records only a commitment', async () => {
    const res = await ctx.personhood.send('enrol', [
      ISSUER_DOC,
      ZERO_PROOF,
      [111n, 222n, BigInt(ISSUER_DOC), BigInt(NS_EPASSPORT)],
    ]);
    const ev = res.events.find((e) => e.name === 'Enrolled');
    expect(ev.args.identityCommitment).toBe(222n);
    expect(await ctx.personhood.read('size', [])).toBe(1n);
  });

  it('UT-0105 refuses a second enrolment from the same real human', async () => {
    const r = await ctx.personhood.expectRevert('enrol', [
      ISSUER_DOC,
      ZERO_PROOF,
      [111n, 999n, BigInt(ISSUER_DOC), BigInt(NS_EPASSPORT)],
    ]);
    expect(r.reason).toMatch(/AlreadyEnrolled/);
  });

  it('UT-0106 refuses enrolment through a deactivated issuer', async () => {
    await ctx.personhood.send('deactivateIssuer', [ISSUER_DOC, 'compromised in test']);
    const r = await ctx.personhood.expectRevert('enrol', [
      ISSUER_DOC,
      ZERO_PROOF,
      [333n, 444n, BigInt(ISSUER_DOC), BigInt(NS_EPASSPORT)],
    ]);
    expect(r.reason).toMatch(/IssuerInactive/);
  });

  it('UT-0107 caps enrolments per issuer per epoch so a compromised issuer cannot flood a region', async () => {
    const capped = keccak256(toHex('capped-issuer'));
    await ctx.personhood.send('registerIssuer', [
      capped,
      1,
      false,
      2,
      NS_SOCIAL,
      'ipfs://capped']);
    for (let i = 0; i < 2; i++) {
      await ctx.personhood.send('enrol', [capped, ZERO_PROOF, [700n + BigInt(i), 800n + BigInt(i), BigInt(capped), BigInt(NS_SOCIAL)]]);
    }
    const r = await ctx.personhood.expectRevert('enrol', [capped, ZERO_PROOF, [710n, 810n, BigInt(capped), BigInt(NS_SOCIAL)]]);
    expect(r.reason).toMatch(/IssuerEpochCapReached/);

    // The cap is per epoch, not permanent — a legitimate issuer is throttled, not banned.
    await ctx.chain.warp(DAY + 1);
    await ctx.personhood.send('enrol', [capped, ZERO_PROOF, [711n, 811n, BigInt(capped), BigInt(NS_SOCIAL)]]);
  });

  it('UT-0109 refuses a second enrolment through a DIFFERENT issuer in the same namespace', async () => {
    // The 1-of-N acceptance model would otherwise let one human enrol once per accepted
    // issuer and vote once per enrolment. Issuers that read the same underlying document
    // share a namespace, so the nullifier collides and the second attempt is refused.
    const fresh = await deployProtocol({ residents: 0 });
    const issuerA = keccak256(toHex('epassport-reader-a'));
    const issuerB = keccak256(toHex('epassport-reader-b'));
    await fresh.personhood.send('registerIssuer', [issuerA, 2, false, 0, NS_EPASSPORT, 'ipfs://a']);
    await fresh.personhood.send('registerIssuer', [issuerB, 2, false, 0, NS_EPASSPORT, 'ipfs://b']);

    const sameHumanNullifier = 4242n;
    await fresh.personhood.send('enrol', [
      issuerA, ZERO_PROOF, [sameHumanNullifier, 5001n, BigInt(issuerA), BigInt(NS_EPASSPORT)],
    ]);
    const r = await fresh.personhood.expectRevert('enrol', [
      issuerB, ZERO_PROOF, [sameHumanNullifier, 5002n, BigInt(issuerB), BigInt(NS_EPASSPORT)],
    ]);
    expect(r.reason).toMatch(/AlreadyEnrolled/);
  }, 120_000);

  it('UT-0109b rejects an enrolment whose namespace does not match its issuer', async () => {
    const r = await ctx.personhood.expectRevert('enrol', [
      ISSUER_STATE, ZERO_PROOF, [8888n, 8889n, BigInt(ISSUER_STATE), BigInt(NS_EPASSPORT)],
    ]);
    expect(r.reason).toMatch(/NamespaceMismatch/);
  });

  it('UT-0109c fails closed when a region has no non-state issuer left', async () => {
    const solo = await deployProtocol({ residents: 0 });
    await solo.personhood.send('deactivateIssuer', [ISSUER_DOC, 'only non-state issuer removed']);
    const r = await solo.personhood.expectRevert('enrol', [
      ISSUER_STATE, ZERO_PROOF, [1234n, 5678n, BigInt(ISSUER_STATE), BigInt(NS_CIVIL_REGISTRY)],
    ]);
    expect(r.reason).toMatch(/IssuerSetInvalid/);
  }, 120_000);

  it('UT-0108 has no function that maps a nullifier back to a person', () => {
    const abi = artifacts().PersonhoodRegistry.abi;
    const names = abi.filter((e) => e.type === 'function').map((f) => f.name);
    for (const forbidden of ['identityOf', 'personOf', 'ownerOf', 'holderOf', 'reveal', 'deanonymize']) {
      expect(names).not.toContain(forbidden);
    }
    // Every getter that takes a nullifier returns a boolean, never an address or identifier.
    const spent = abi.find((f) => f.name === 'isSpent');
    expect(spent.outputs.map((o) => o.type)).toEqual(['bool']);
  });
});

describe('UT-0110 petition → threshold → activation', () => {
  let ctx;
  beforeAll(async () => {
    ctx = await deployProtocol();
  }, 300_000);

  it('computes the required count as max(pct×population, pct×verified, floor)', async () => {
    await ctx.partyRegistry.send('openPetition', [
      PETITION,
      ctx.rid,
      'Commons Forward',
      keccak256(toHex('charter-v1')),
      'ipfs://charter/v1',
      200,
      BigInt(90 * DAY),
    ]);
    const p = await ctx.partyRegistry.read('petitions', [PETITION]);
    // 2% of the median population (1,000,274) = 20,006 (ceil), which dominates both the
    // verified-resident count and the endorsement floor.
    expect(p[5]).toBe(20_006n);
  });

  it('UT-0111 refuses activation below the threshold — there is no override', async () => {
    const r = await ctx.partyRegistry.expectRevert('activate', [PETITION, charterTuple()]);
    expect(r.reason).toMatch(/ThresholdNotMet/);
  });

  it('UT-0112 counts one endorsement per person, enforced by nullifier not by address', async () => {
    const signals = await residencySignals(ctx, {
      scope: scopeId('endorse', PETITION),
      nullifier: 42n,
      commitment: 1_000_000n,
    });
    await ctx.partyRegistry.send('endorse', [PETITION, ZERO_PROOF, signals]);
    expect((await ctx.partyRegistry.read('petitions', [PETITION]))[6]).toBe(1n);

    // Same nullifier from a different address gains nothing — this is the Sybil defence.
    const r = await ctx.partyRegistry.expectRevert(
      'endorse',
      [PETITION, ZERO_PROOF, signals],
      { from: 3 },
    );
    expect(r.reason).toMatch(/NullifierAlreadyUsed/);
  });

  it('UT-0113 rejects an endorsement scoped to a different petition', async () => {
    const signals = await residencySignals(ctx, {
      scope: scopeId('endorse', keccak256(toHex('some-other-petition'))),
      nullifier: 43n,
      commitment: 1_000_001n,
    });
    const r = await ctx.partyRegistry.expectRevert('endorse', [PETITION, ZERO_PROOF, signals]);
    expect(r.reason).toMatch(/InvalidProof/);
  });

  it('UT-0114 lets an endorser withdraw before activation', async () => {
    const before = (await ctx.partyRegistry.read('petitions', [PETITION]))[6];
    // Withdrawal proves against the ENDORSEMENT scope and the same nullifier, so the
    // contract can require that this person actually endorsed before decrementing.
    const signals = await residencySignals(ctx, {
      scope: scopeId('endorse', PETITION),
      nullifier: 42n,
      commitment: 1_000_000n,
    });
    await ctx.partyRegistry.send('withdrawEndorsement', [PETITION, ZERO_PROOF, signals]);
    expect((await ctx.partyRegistry.read('petitions', [PETITION]))[6]).toBe(before - 1n);
  });

  it('UT-0115 activates automatically at the threshold, with no approval step anywhere', async () => {
    const small = await deployProtocol({ population: 0 });
    const id = keccak256(toHex('petition:small'));
    const { partyAddress, governorAddress, required } = await activateParty(small, { petitionId: id });
    // Population is 0 and the verified count is tiny, so the endorsement floor binds.
    expect(required).toBe(BigInt(small.endorsementFloor));
    expect(partyAddress).toMatch(/^0x[0-9a-f]{40}$/i);
    expect(governorAddress).toMatch(/^0x[0-9a-f]{40}$/i);

    const abi = artifacts().PartyRegistry.abi.filter((e) => e.type === 'function').map((f) => f.name);
    for (const forbidden of ['approve', 'reject', 'verifyParty', 'feature', 'suspend', 'delist']) {
      expect(abi).not.toContain(forbidden);
    }
  }, 300_000);

  it('UT-0116 refuses to publish an action in a region too small to hide anyone', async () => {
    const thin = await deployProtocol({ anonymityFloor: 100, residents: 40, population: 3000 });
    const id = keccak256(toHex('petition:thin'));
    await thin.partyRegistry.send('openPetition', [
      id,
      thin.rid,
      'Ward Party',
      keccak256(toHex('c')),
      'ipfs://c',
      200,
      BigInt(90 * DAY),
    ]);
    const signals = await residencySignals(thin, {
      scope: scopeId('endorse', id),
      nullifier: 1n,
      commitment: 1_000_000n,
    });
    const r = await thin.partyRegistry.expectRevert('endorse', [id, ZERO_PROOF, signals]);
    expect(r.reason).toMatch(/AnonymitySetTooSmall/);
  }, 120_000);
});

describe('UT-0120 membership', () => {
  let ctx;
  let party;
  beforeAll(async () => {
    ctx = await deployProtocol({ population: 0 });
    const { partyAddress } = await activateParty(ctx, { petitionId: keccak256(toHex('p:mem')) });
    party = attach(ctx, 'Party', partyAddress);
  }, 300_000);

  it('admits any verified citizen with no approval', async () => {
    const signals = await residencySignals(ctx, {
      scope: scopeId('join', await party.read('partyId', [])),
      nullifier: 900_001n,
      commitment: 2_000_001n,
    });
    const res = await party.send('join', [ZERO_PROOF, signals]);
    expect(res.events.find((e) => e.name === 'Joined')).toBeTruthy();
    expect(await party.read('memberCount', [])).toBe(1n);
  });

  it('UT-0121 gives every member identical standing — there is no weight field at all', () => {
    const abi = artifacts().Party.abi;
    const names = abi.filter((e) => e.type === 'function').map((f) => f.name);
    for (const forbidden of [
      'transfer',
      'transferFrom',
      'approve',
      'permit',
      'setWeight',
      'votingPower',
      'balanceOf',
      'delegate',
      'expel',
      'suspend',
      'setAdmin',
      'pause',
    ]) {
      expect(names).not.toContain(forbidden);
    }
  });

  it('UT-0122 refuses a second join from the same person', async () => {
    const partyId = await party.read('partyId', []);
    const signals = await residencySignals(ctx, {
      scope: scopeId('join', partyId),
      nullifier: 900_002n,
      commitment: 2_000_001n,
    });
    const r = await party.expectRevert('join', [ZERO_PROOF, signals]);
    expect(r.reason).toMatch(/AlreadyMember/);
  });

  it('UT-0123 refuses a citizen from a different jurisdiction', async () => {
    const partyId = await party.read('partyId', []);
    const signals = await residencySignals(ctx, {
      scope: scopeId('join', partyId),
      nullifier: 900_003n,
      commitment: 2_000_003n,
    });
    signals[1] = BigInt(keccak256(toHex('v1:FR/IDF/PARIS')));
    const r = await party.expectRevert('join', [ZERO_PROOF, signals]);
    expect(r.reason).toMatch(/WrongJurisdiction/);
  });

  it('UT-0124 lets a member leave immediately, with nobody able to block it', async () => {
    const partyId = await party.read('partyId', []);
    const signals = await residencySignals(ctx, {
      scope: scopeId('leave', partyId),
      nullifier: 900_010n,
      commitment: 2_000_001n,
    });
    await party.send('leave', [ZERO_PROOF, signals]);
    expect(await party.read('memberCount', [])).toBe(0n);
  });

  it('UT-0125 records tenure but never uses it as weight', async () => {
    const partyId = await party.read('partyId', []);
    const signals = await residencySignals(ctx, {
      scope: scopeId('join', partyId),
      nullifier: 900_020n,
      commitment: 2_000_050n,
    });
    await party.send('join', [ZERO_PROOF, signals]);
    const joinedAt = await party.read('joinedAt', [2_000_050n]);
    expect(joinedAt).toBeGreaterThan(0n);
    await ctx.chain.warp(100 * DAY);
    const tenure = await party.read('tenureAt', [2_000_050n, ctx.chain.timestamp]);
    expect(tenure).toBeGreaterThanOrEqual(BigInt(100 * DAY));
  });
});

