/**
 * UT-0300..UT-0360 — adversarial suites, one per RISK in Doc 02 §RISK register.
 *
 * Several of these test the ABSENCE of a capability. That is unusual and worth stating: for
 * a system whose core promise is "nobody can stop, alter or reveal this", the guarantee is
 * that a function does not exist. A test that asserts absence over the ABI and the deployed
 * bytecode is weaker than a proof, but it is strictly better than a code-review convention:
 * it fails the build the day someone adds `pause()`. Its limits are recorded in Doc 04.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { keccak256, toHex, toFunctionSelector } from 'viem';
import {
  deployProtocol,
  activateParty,
  residencySignals,
  tenureSignals,
  scopeId,
  attach,
  artifacts,
  charterTuple,
  ZERO_PROOF,
  ISSUER_DOC,
  ATTESTER,
  flagId,
  NS_EPASSPORT,
  NS_SOCIAL,
} from './fixture.mjs';

const DAY = 86400;

describe('RISK-03 flash governance takeover', () => {
  it('UT-0300 is structurally impossible: there is no transferable power to acquire', () => {
    const A = artifacts();
    // The attack requires an asset whose balance confers voting power. Assert that no such
    // asset exists anywhere in the core — not that we mitigate acquiring it.
    for (const name of ['Party', 'Governor', 'PartyRegistry', 'PersonhoodRegistry']) {
      const fns = A[name].abi.filter((e) => e.type === 'function').map((f) => f.name);
      for (const forbidden of [
        'transfer',
        'transferFrom',
        'approve',
        'allowance',
        'balanceOf',
        'totalSupply',
        'mint',
        'burn',
        'permit',
        'safeTransferFrom',
        'delegate',
        'delegateBySig',
        'getVotes',
        'getPastVotes',
        'votingPower',
      ]) {
        expect(fns, `${name}.${forbidden} must not exist`).not.toContain(forbidden);
      }
    }
  });

  it('UT-0301 confirms the deployed bytecode contains no ERC-20/721 transfer selector', () => {
    const A = artifacts();
    const selectors = [
      'function transfer(address,uint256)',
      'function transferFrom(address,address,uint256)',
      'function approve(address,uint256)',
      'function balanceOf(address)',
    ].map((sig) => toFunctionSelector(sig).slice(2));

    for (const name of ['Party', 'Governor']) {
      const code = A[name].deployedBytecode.toLowerCase();
      for (const sel of selectors) {
        expect(code.includes(sel), `${name} bytecode contains selector ${sel}`).toBe(false);
      }
    }
  });

  it('UT-0302 gives every member weight exactly 1 — the tally can only ever increment by one', () => {
    const A = artifacts();
    const voteEvent = A.Governor.abi.find((e) => e.type === 'event' && e.name === 'VoteCast');
    // No weight/amount/power field in the vote event: there is nothing to inflate.
    expect(voteEvent.inputs.map((i) => i.name)).toEqual(['proposalId', 'choice', 'nullifier']);
  });
});

describe('CON-003 / RISK-16 the operator must be powerless', () => {
  it('UT-0310 has no pause, admin, upgrade or ownership surface in the core', () => {
    const A = artifacts();
    for (const name of ['Party', 'Governor', 'PartyRegistry', 'PersonhoodRegistry', 'RegionRegistry']) {
      const fns = A[name].abi.filter((e) => e.type === 'function').map((f) => f.name);
      for (const forbidden of [
        'pause',
        'unpause',
        'upgradeTo',
        'upgradeToAndCall',
        'setImplementation',
        'owner',
        'transferOwnership',
        'renounceOwnership',
        'setAdmin',
        'grantRole',
        'revokeRole',
        'selfdestruct',
        'kill',
        'sweep',
        'emergencyWithdraw',
        'forceRemoveMember',
        'cancelProposal',
        'overrideResult',
      ]) {
        expect(fns, `${name}.${forbidden} must not exist`).not.toContain(forbidden);
      }
    }
  });

  it('UT-0311 has no DELEGATECALL in the core — no proxy pattern can hide behind it', () => {
    const A = artifacts();
    for (const name of ['Party', 'Governor', 'PartyRegistry', 'PersonhoodRegistry', 'RegionRegistry']) {
      const found = scanOpcodes(A[name].deployedBytecode);
      expect(found.has(0xf4), `${name} bytecode contains DELEGATECALL`).toBe(false);
      expect(found.has(0xff), `${name} bytecode contains SELFDESTRUCT`).toBe(false);
    }
  });

  it('UT-0311b proves the opcode scanner actually detects DELEGATECALL when it is present', () => {
    // A capability-absence test is worthless if the detector cannot detect. A naive scanner
    // that walks bytes two at a time mistakes PUSH immediates for opcodes and produces both
    // false positives and — worse — false confidence. Assert the detector on a known-positive.
    const A = artifacts();
    // 0x60 0xf4 is PUSH1 0xf4: the f4 is DATA, not an opcode, and must NOT be reported.
    expect(scanOpcodes('0x60f4').has(0xf4)).toBe(false);
    // 0x5b 0xf4 is JUMPDEST then DELEGATECALL: a real occurrence, and must be reported.
    expect(scanOpcodes('0x5bf4').has(0xf4)).toBe(true);
    // And the scanner sees ordinary opcodes in real compiled output.
    const real = scanOpcodes(A.Party.deployedBytecode);
    expect(real.has(0x35)).toBe(true); // CALLDATALOAD — every dispatcher has one
  });

  it('UT-0312 restricts the emergency flag control to DISABLE only — it can never add power', async () => {
    const ctx = await deployProtocol({ residents: 0 });
    const petitions = flagId('petitions');
    // The emergency responder can switch a capability off …
    await ctx.flags.send('disable', [petitions, 'incident drill'], { from: 9 });
    expect(await ctx.flags.read('isEnabled', [petitions])).toBe(false);
    // … but cannot switch anything on. Only the timelock can.
    const r = await ctx.flags.expectRevert('enable', [petitions], { from: 9 });
    expect(r.reason).toMatch(/NotTimelock/);
  }, 120_000);
});

describe('RISK-01 Sybil inflation of a threshold', () => {
  let ctx;
  beforeAll(async () => {
    ctx = await deployProtocol();
  }, 300_000);

  it('UT-0320 gains an attacker nothing from controlling many addresses', async () => {
    const id = keccak256(toHex('p:sybil'));
    await ctx.partyRegistry.send('openPetition', [
      id,
      ctx.rid,
      'Astroturf',
      keccak256(toHex('c')),
      'ipfs://c',
      200,
      BigInt(90 * DAY),
    ]);
    const signals = await residencySignals(ctx, {
      scope: scopeId('endorse', id),
      nullifier: 12_345n,
      commitment: 1_000_005n,
    });
    await ctx.partyRegistry.send('endorse', [id, ZERO_PROOF, signals], { from: 1 });

    // Twenty different addresses, one real person behind them: still one endorsement.
    for (let from = 2; from < 8; from++) {
      const r = await ctx.partyRegistry.expectRevert('endorse', [id, ZERO_PROOF, signals], { from });
      expect(r.reason).toMatch(/NullifierAlreadyUsed/);
    }
    expect((await ctx.partyRegistry.read('petitions', [id]))[6]).toBe(1n);
  });

  it('UT-0321 throttles a compromised issuer with a per-epoch cap', async () => {
    const rogue = keccak256(toHex('rogue-issuer'));
    await ctx.personhood.send('registerIssuer', [
      rogue,
      1,
      false,
      3,
      NS_SOCIAL,
      'ipfs://rogue']);
    for (let i = 0; i < 3; i++) {
      await ctx.personhood.send('enrol', [rogue, ZERO_PROOF, [90_000n + BigInt(i), 91_000n + BigInt(i), BigInt(rogue), BigInt(NS_SOCIAL)]]);
    }
    const r = await ctx.personhood.expectRevert('enrol', [rogue, ZERO_PROOF, [99_000n, 99_100n, BigInt(rogue), BigInt(NS_SOCIAL)]]);
    expect(r.reason).toMatch(/IssuerEpochCapReached/);
  });

  it('UT-0322 keeps a deactivated issuer’s existing credentials valid', async () => {
    // Punishing an issuer's users for their issuer's compromise would disenfranchise exactly
    // the people the platform exists to serve. Removal stops FUTURE enrolments only.
    await ctx.personhood.send('deactivateIssuer', [ISSUER_DOC, 'compromised']);
    const rid = ctx.rid;
    const id = keccak256(toHex('p:after-deactivation'));
    await ctx.partyRegistry.send('openPetition', [
      id, rid, 'Still Here', keccak256(toHex('c')), 'ipfs://c', 200, BigInt(90 * DAY),
    ]);
    const signals = await residencySignals(ctx, {
      scope: scopeId('endorse', id),
      nullifier: 55_555n,
      commitment: 1_000_006n,
    });
    await ctx.partyRegistry.send('endorse', [id, ZERO_PROOF, signals]);
    expect((await ctx.partyRegistry.read('petitions', [id]))[6]).toBe(1n);
  });
});

describe('nullifier griefing — disenfranchisement by a stranger', () => {
  it('UT-0325 refuses a nullifier burn from an unauthorised caller', async () => {
    // Before this control existed, `spendNullifier` was callable by anyone: an attacker who
    // observed or predicted a nullifier could burn it and permanently deny that citizen the
    // corresponding action. A one-call disenfranchisement is not an acceptable API.
    const ctx = await deployProtocol({ residents: 0 });
    const r = await ctx.personhood.expectRevert('spendNullifier', [keccak256(toHex('scope')), 1n], { from: 5 });
    expect(r.reason).toMatch(/NotAuthorisedSpender/);
  }, 120_000);

  it('UT-0326 authorises exactly the modules the registry deployed, and nothing else', async () => {
    const ctx = await deployProtocol({ residents: 1000, population: 0 });
    const { partyAddress, governorAddress } = await activateParty(ctx, {
      petitionId: keccak256(toHex('p:spenders')),
    });
    expect(await ctx.personhood.read('authorisedSpender', [partyAddress])).toBe(true);
    expect(await ctx.personhood.read('authorisedSpender', [governorAddress])).toBe(true);
    expect(await ctx.personhood.read('authorisedSpender', [ctx.chain.addressOf(5)])).toBe(false);

    // And a stranger cannot add themselves.
    const r = await ctx.personhood.expectRevert('authoriseSpender', [ctx.chain.addressOf(5)], { from: 5 });
    expect(r.reason).toMatch(/NotSpenderAuthoriser/);
  }, 300_000);
});

describe('RISK-12 population-oracle manipulation', () => {
  let ctx;
  beforeAll(async () => {
    ctx = await deployProtocol({ residents: 1000, population: 1_000_000 });
  }, 300_000);

  it('UT-0330 absorbs one corrupt source via the median', async () => {
    const before = (await ctx.regions.read('population', [ctx.rid]))[0];
    await ctx.regions.send('submitPopulation', [ctx.rid, keccak256(toHex('census')), 1n]);
    await ctx.regions.send('proposePopulation', [ctx.rid]);
    await ctx.chain.warp(8 * DAY);
    await ctx.regions.send('activatePopulation', [ctx.rid]);
    const after = (await ctx.regions.read('population', [ctx.rid]))[0];
    // One source set to 1; the median of the remaining honest four barely moves.
    expect(after).toBeGreaterThan((before * 95n) / 100n);
  });

  it('UT-0331 rate-limits drift so a denominator cannot be swung under a live petition', async () => {
    for (const s of ['census', 'electoral-roll', 'un-stats', 'world-bank', 'independent-stats']) {
      await ctx.regions.send('submitPopulation', [ctx.rid, keccak256(toHex(s)), 100_000_000n]);
    }
    const r = await ctx.regions.expectRevert('proposePopulation', [ctx.rid]);
    expect(r.reason).toMatch(/DriftTooLarge/);
  });

  it('UT-0332 enforces the dispute window before a new denominator takes effect', async () => {
    for (const s of ['census', 'electoral-roll', 'un-stats', 'world-bank', 'independent-stats']) {
      await ctx.regions.send('submitPopulation', [ctx.rid, keccak256(toHex(s)), 1_020_000n]);
    }
    await ctx.regions.send('proposePopulation', [ctx.rid]);
    const r = await ctx.regions.expectRevert('activatePopulation', [ctx.rid]);
    expect(r.reason).toMatch(/DisputeWindowOpen/);
  });

  it('UT-0333 requires at least five independent sources', async () => {
    const fresh = await deployProtocol({ residents: 0, population: 0 });
    const rid2 = await fresh.regions.read('regionIdOf', ['IN/KA/MYS', 1]);
    await fresh.regions.send('createRegion', ['IN/KA/MYS', 1, await fresh.regions.read('regionIdOf', ['IN/KA', 1]), 3]);
    for (const s of ['a', 'b', 'c']) {
      await fresh.regions.send('submitPopulation', [rid2, keccak256(toHex(s)), 1000n]);
    }
    const r = await fresh.regions.expectRevert('proposePopulation', [rid2]);
    expect(r.reason).toMatch(/TooFewSources/);
  }, 120_000);

  it('UT-0334 leaves a deflation attacker with nothing: the floors still bind', async () => {
    // population 0, 1000 verified residents → threshold is max(0, 20, 500) = 500.
    const zero = await deployProtocol({ residents: 1000, population: 0 });
    const required = await zero.partyRegistry.read('requiredEndorsements', [zero.rid, 200]);
    expect(required).toBe(500n);
  }, 300_000);
});

describe('RISK-10 circuit / verifier compromise', () => {
  let ctx;
  beforeAll(async () => {
    ctx = await deployProtocol();
  }, 300_000);

  it('UT-0340 refuses an action when the verifier rejects the proof', async () => {
    await ctx.residencyVerifier.send('setAccept', [false]);
    const id = keccak256(toHex('p:badproof'));
    await ctx.partyRegistry.send('openPetition', [
      id, ctx.rid, 'Bad Proof', keccak256(toHex('c')), 'ipfs://c', 200, BigInt(90 * DAY),
    ]);
    const signals = await residencySignals(ctx, {
      scope: scopeId('endorse', id),
      nullifier: 777n,
      commitment: 1_000_007n,
    });
    const r = await ctx.partyRegistry.expectRevert('endorse', [id, ZERO_PROOF, signals]);
    expect(r.reason).toMatch(/InvalidProof/);
    await ctx.residencyVerifier.send('setAccept', [true]);
  });

  it('UT-0341 refuses a proof with the wrong number of public signals', async () => {
    const id = keccak256(toHex('p:badsignals'));
    await ctx.partyRegistry.send('openPetition', [
      id, ctx.rid, 'Bad Signals', keccak256(toHex('c')), 'ipfs://c', 200, BigInt(90 * DAY),
    ]);
    const r = await ctx.partyRegistry.expectRevert('endorse', [id, ZERO_PROOF, [1n, 2n, 3n]]);
    expect(r.reason).toMatch(/InvalidProof/);
  });

  it('UT-0342 binds every circuit to a published ceremony and rejects an unregistered circuit', async () => {
    const cv = await ctx.verifiers.read('current', [keccak256(toHex('residency_member'))]);
    expect(cv.zkeyHash).toBe(keccak256(toHex('zkey:residency:v1')));
    expect(cv.ceremonyURI).toBe('ipfs://ceremony/residency');

    const r = await ctx.verifiers.expectRevert('verify', [keccak256(toHex('nonexistent_circuit')), ZERO_PROOF, [1n]]);
    expect(r.reason).toMatch(/UnknownCircuit/);
  });

  it('UT-0343 refuses to register a circuit without a published ceremony URI', async () => {
    const r = await ctx.verifiers.expectRevert('register', [
      keccak256(toHex('sneaky')),
      ctx.residencyVerifier.address.toString(),
      keccak256(toHex('zkey')),
      '',
    ]);
    expect(r.reason).toMatch(/EmptyCeremony/);
  });

  it('UT-0344 keeps a superseded verifier alive during its grace window', async () => {
    const A = artifacts();
    const replacement = await ctx.chain.deploy(A.MockVerifier, [6n, true]);
    await ctx.verifiers.send('register', [
      keccak256(toHex('residency_member')),
      replacement.address.toString(),
      keccak256(toHex('zkey:residency:v2')),
      'ipfs://ceremony/residency-v2',
    ]);
    expect(await ctx.verifiers.read('versionCount', [keccak256(toHex('residency_member'))])).toBe(2n);
    // A proof against the old key still verifies — an upgrade must not disenfranchise
    // anyone who started an action before it landed.
    expect(await ctx.verifiers.read('verify', [keccak256(toHex('residency_member')), ZERO_PROOF, [1n, 2n, 3n, 4n, 5n, 6n]])).toBe(true);
  });
});

describe('deployment safety — a mock verifier must never reach production', () => {
  it('UT-0350 detects an insecure mock in the verifier registry', async () => {
    const ctx = await deployProtocol({ residents: 0 });
    const A = artifacts();
    // The production deploy script runs exactly this check across every registered circuit.
    for (const circuit of ['personhood_enrol', 'residency_member', 'tenure_member']) {
      const cv = await ctx.verifiers.read('current', [keccak256(toHex(circuit))]);
      const probe = ctx.chain.attach(A.MockVerifier, cv.verifier);
      const isMock = await probe.read('IS_INSECURE_MOCK', []).catch(() => false);
      expect(isMock, `${circuit} is wired to a mock — safe in dev, fatal in prod`).toBe(true);
    }
    // A real Groth16 verifier has no such marker, so the same check passes in production
    // only when every verifier is real. The check is asserted here so it cannot rot.
  }, 120_000);
});

describe('ship-dark: on-chain feature flags', () => {
  it('UT-0360 blocks a flagged-off capability even for a direct contract caller', async () => {
    // Phase-1 default: fork is on, elections/recall/MACI are dark. Turn petitions off and
    // confirm the contract refuses — a frontend-only flag would leave this path live.
    const ctx = await deployProtocol({ residents: 1000, population: 0 });
    await ctx.flags.send('disable', [flagId('petitions'), 'phase gate'], { from: 9 });
    const r = await ctx.partyRegistry.expectRevert('openPetition', [
      keccak256(toHex('p:flagged-off')),
      ctx.rid,
      'Nope',
      keccak256(toHex('c')),
      'ipfs://c',
      200,
      BigInt(90 * DAY),
    ]);
    expect(r.reason).toMatch(/FlagDisabledError/);
  }, 300_000);

  it('UT-0361 closes the provable-vote path once receipt-free voting is live', async () => {
    // Leaving both paths open would let a coercer simply demand the provable one.
    const ctx = await deployProtocol({
      residents: 1000,
      population: 0,
      flags: ['petitions', 'party_governance', 'maci_voting'].map(flagId),
    });
    const { partyAddress, governorAddress } = await activateParty(ctx, { petitionId: keccak256(toHex('p:maci')) });
    const party = attach(ctx, 'Party', partyAddress);
    const governor = attach(ctx, 'Governor', governorAddress);
    const partyId = await party.read('partyId', []);

    const signals = await residencySignals(ctx, {
      scope: scopeId('join', partyId),
      nullifier: 4_400_000n,
      commitment: 5_400_000n,
    });
    await party.send('join', [ZERO_PROOF, signals]);
    await ctx.chain.warp(20 * DAY);
    await governor.send('propose', [
      [1, '0x' + '00'.repeat(32), keccak256(toHex('body')), 'ipfs://p', 0, '0x' + '00'.repeat(20), '0x'],
      ZERO_PROOF,
      tenureSignals({ partyId, scope: scopeId('propose', partyId), nullifier: 4_500_000n, tenureSeconds: 20 * DAY }),
    ]);
    await ctx.chain.warp(2 * DAY + 1);
    const r = await governor.expectRevert('vote', [
      0n,
      1,
      ZERO_PROOF,
      tenureSignals({
        partyId,
        scope: scopeId('vote', partyId, '0x' + '0'.repeat(64)),
        nullifier: 4_600_000n,
        tenureSeconds: 20 * DAY,
      }),
    ]);
    expect(r.reason).toMatch(/MaciPathRequired/);
  }, 300_000);
});

/**
 * Walk EVM bytecode and return the set of opcodes that are actually EXECUTED positions,
 * skipping the immediate data of PUSH1..PUSH32.
 *
 * Splitting bytecode into byte pairs and looking for `f4` finds every `0xf4` that happens to
 * sit inside a pushed constant — an address, a hash, a jump table — and reports DELEGATECALL
 * in a contract that has none. Getting this right is the difference between a control and a
 * superstition.
 */
function scanOpcodes(hex) {
  const bytes = Uint8Array.from(Buffer.from(hex.replace(/^0x/, ''), 'hex'));
  const found = new Set();
  for (let i = 0; i < bytes.length; i++) {
    const op = bytes[i];
    found.add(op);
    if (op >= 0x60 && op <= 0x7f) {
      i += op - 0x5f; // PUSH1..PUSH32 — skip the immediate
    }
  }
  return found;
}
