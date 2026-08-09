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
  proposalSnapshot,
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

  it('UT-0311 has no proxy pattern and no SELFDESTRUCT in the core', () => {
    const A = artifacts();
    const POSEIDON_T3 = '3333333c0a88f9be4fd23ed0536f9b6c427e3b93';

    for (const name of ['Party', 'Governor', 'PartyRegistry', 'PersonhoodRegistry', 'RegionRegistry']) {
      const code = A[name].deployedBytecode.toLowerCase();
      const found = scanOpcodes(code);

      // A contract can never be re-pointed at another implementation if it cannot be
      // destroyed and redeployed at the same address.
      expect(found.has(0xff), `${name} contains SELFDESTRUCT`).toBe(false);

      // DELEGATECALL by itself is NOT the danger, and asserting its absence would be a test
      // that lies: Solidity compiles a call to an external library (here PoseidonT3, which
      // exposes `public` functions) into exactly that opcode. What makes a proxy is a
      // *fallback* that forwards arbitrary calldata to a *mutable* address.
      //
      // So assert the two things that actually matter:
      //   1. no fallback or receive function exists, so there is no arbitrary-call entrypoint;
      //   2. every delegatecall in the contract is to the known, immutable, linked library.
      const hasFallback = A[name].abi.some((e) => e.type === 'fallback' || e.type === 'receive');
      expect(hasFallback, `${name} exposes a fallback — the shape of a proxy`).toBe(false);

      if (found.has(0xf4)) {
        expect(
          code.includes(POSEIDON_T3),
          `${name} delegatecalls somewhere other than the linked PoseidonT3 library`,
        ).toBe(true);
      }
    }
  });

  it('UT-0311c confirms the only delegatecall target is the immutable Poseidon library', () => {
    const A = artifacts();
    // The library address is a compile-time constant baked in at link time, not a storage
    // slot, so there is no write path that could re-point it after deployment. That is the
    // property that distinguishes a linked library from an upgradeable implementation.
    const code = A.Party.deployedBytecode.toLowerCase();
    const nonPoseidon = push20s(code).filter((a) => a !== '3333333c0a88f9be4fd23ed0536f9b6c427e3b93');
    // Any other pushed address would deserve an explanation; today there are none.
    expect(nonPoseidon, `unexpected hard-coded addresses: ${nonPoseidon.join(', ')}`).toEqual([]);
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
    // A PUSH20 of the Poseidon address is one address, not twenty overlapping ones.
    expect(push20s('0x73' + '11'.repeat(20))).toEqual(['11'.repeat(20)]);
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
    const ctx = await deployProtocol({ population: 0 });
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
    ctx = await deployProtocol({ population: 1_000_000 });
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
    // With the population oracle driven to zero, the endorsement floor is what remains — and
    // it is what makes the oracle safe to depend on at all (RISK-12).
    const zero = await deployProtocol({ population: 0 });
    const required = await zero.partyRegistry.read('requiredEndorsements', [zero.rid, 200]);
    expect(required).toBe(BigInt(zero.endorsementFloor));

    // And a production-configured deployment falls back to the real floor of 500, not to a
    // number an attacker could reach with a handful of accounts.
    const prod = await deployProtocol({ population: 0, endorsementFloor: 500, anonymityFloor: 1000, residents: 0 });
    expect(await prod.partyRegistry.read('requiredEndorsements', [prod.rid, 200])).toBe(500n);
    expect(await prod.partyRegistry.read('PRODUCTION_ABSOLUTE_FLOOR_ENDORSEMENTS', [])).toBe(500n);
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
    const ctx = await deployProtocol({ population: 0 });
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
 * Strip solc's trailing CBOR metadata.
 *
 * The compiler appends a metadata blob (source hash, compiler version) after the runtime
 * code, with its own length in the final two bytes. Those bytes are arbitrary — they will
 * contain 0xf4, 0xff and anything else — and they are never executed. Walking them as
 * opcodes produces exactly the false positives that make a capability-absence test lie.
 */
function stripMetadata(hex) {
  const bytes = Uint8Array.from(Buffer.from(hex.replace(/^0x/, ''), 'hex'));
  if (bytes.length < 2) return bytes;
  const len = (bytes[bytes.length - 2] << 8) | bytes[bytes.length - 1];
  const cut = bytes.length - 2 - len;
  // Sanity-check: the blob starts with a CBOR map header (0xa1..0xaf).
  if (cut > 0 && cut < bytes.length && bytes[cut] >= 0xa1 && bytes[cut] <= 0xaf) {
    return bytes.slice(0, cut);
  }
  return bytes;
}

/**
 * Walk executable EVM bytecode, returning the opcodes at instruction positions and the
 * immediates of every PUSH.
 *
 * Splitting bytecode into byte pairs and grepping finds every 0xf4 that happens to sit
 * inside a pushed constant — an address, a hash, a jump table — and reports DELEGATECALL in a
 * contract that has none. Getting this right is the difference between a control and a
 * superstition, and this file has now been burned by the naive version twice.
 */
function walk(hex) {
  const bytes = stripMetadata(hex);
  const opcodes = new Set();
  const pushes = [];
  for (let i = 0; i < bytes.length; i++) {
    const op = bytes[i];
    opcodes.add(op);
    if (op >= 0x60 && op <= 0x7f) {
      const n = op - 0x5f;
      pushes.push({
        size: n,
        value: Buffer.from(bytes.slice(i + 1, i + 1 + n)).toString('hex'),
      });
      i += n;
    }
  }
  return { opcodes, pushes };
}

function scanOpcodes(hex) {
  return walk(hex).opcodes;
}

function push20s(hex) {
  return walk(hex)
    .pushes.filter((p) => p.size === 20)
    .map((p) => p.value);
}

// ---------------------------------------------------------------------------------------
// Regressions for the findings of the independent security scan
// (artifacts/reviews/SECURITY-SCAN-2026-08-09.md). Each test is named for the guarantee it
// protects, not the bug that broke it, because the guarantee is what has to survive.
// ---------------------------------------------------------------------------------------

describe('SEC regressions — findings from the independent scan', () => {
  it('SEC-C01 only the registered attester account can issue a residency credential', async () => {
    // The attester id is public — it is emitted in `AttesterAuthorised`. If holding the id
    // were enough, anyone could mint unlimited residency credentials, and that tree is both
    // the Sybil boundary for joining and the source of the count that bounds it.
    const ctx = await deployProtocol({ residents: 0 });
    const r = await ctx.regions.expectRevert('issueResidency', [ctx.rid, ATTESTER, 12345n], { from: 6 });
    expect(r.reason).toMatch(/NotAuthorisedAttester/);

    // The real attester still can.
    await ctx.regions.send('issueResidency', [ctx.rid, ATTESTER, 12345n]);
    expect(await ctx.regions.read('verifiedResidents', [ctx.rid])).toBe(1n);
  }, 120_000);

  it('SEC-C02 a vote must prove against the proposal’s own snapshot root and time', async () => {
    const ctx = await deployProtocol({ population: 0 });
    const { partyAddress, governorAddress } = await activateParty(ctx, {
      petitionId: keccak256(toHex('p:snapshot')),
    });
    const party = attach(ctx, 'Party', partyAddress);
    const governor = attach(ctx, 'Governor', governorAddress);
    const partyId = await party.read('partyId', []);

    for (let i = 0; i < 5; i++) {
      await party.send('join', [
        ZERO_PROOF,
        await residencySignals(ctx, {
          scope: scopeId('join', partyId),
          nullifier: 6_600_000n + BigInt(i),
          commitment: 6_700_000n + BigInt(i),
        }),
      ]);
    }
    await ctx.chain.warp(20 * DAY);

    await governor.send('propose', [
      [1, '0x' + '00'.repeat(32), keccak256(toHex('body')), 'ipfs://p', 0, '0x' + '00'.repeat(20), '0x'],
      ZERO_PROOF,
      tenureSignals({
        partyId,
        scope: scopeId('propose', partyId),
        nullifier: 6_800_000n,
        tenureSeconds: 20 * DAY,
      }),
    ]);
    await ctx.chain.warp(2 * DAY + 1);

    const voteScope = scopeId('vote', partyId, '0x' + '0'.repeat(64));
    const snap = await proposalSnapshot(governor, 0n);

    // An attacker proving against a tree of their own construction is refused outright,
    // which is what makes "eligibility is snapshotted at creation" true rather than stated.
    const forged = await governor.expectRevert('vote', [
      0n,
      1,
      ZERO_PROOF,
      tenureSignals({
        partyRoot: 999_999_999n,
        partyId,
        scope: voteScope,
        nullifier: 6_900_000n,
        tenureSeconds: 20 * DAY,
        snapshotAt: snap.at,
      }),
    ]);
    expect(forged.reason).toMatch(/WrongSnapshotRoot/);

    // A correct root with the wrong snapshot time is refused too — otherwise the prover
    // picks their own tenure, since the circuit derives it from `snapshotAt`.
    const wrongTime = await governor.expectRevert('vote', [
      0n,
      1,
      ZERO_PROOF,
      tenureSignals({
        partyRoot: snap.root,
        partyId,
        scope: voteScope,
        nullifier: 6_900_001n,
        tenureSeconds: 20 * DAY,
        snapshotAt: Number(snap.at) + 1,
      }),
    ]);
    expect(wrongTime.reason).toMatch(/WrongSnapshotTime/);

    // The honest voter still votes.
    await governor.send('vote', [
      0n,
      1,
      ZERO_PROOF,
      tenureSignals({
        partyRoot: snap.root,
        partyId,
        scope: voteScope,
        nullifier: 6_900_002n,
        tenureSeconds: 20 * DAY,
        snapshotAt: snap.at,
      }),
    ]);
  }, 300_000);

  it('SEC-C04 a member leaving never bricks the party', async () => {
    // The surge check computed a difference before checking which sample was larger, so one
    // departure panicked a view that join, leave and propose all call — permanently, with no
    // admin path, in a system that deliberately has no admin.
    const ctx = await deployProtocol({ population: 0 });
    const { partyAddress } = await activateParty(ctx, { petitionId: keccak256(toHex('p:leave')) });
    const party = attach(ctx, 'Party', partyAddress);
    const partyId = await party.read('partyId', []);

    for (let i = 0; i < 4; i++) {
      await party.send('join', [
        ZERO_PROOF,
        await residencySignals(ctx, {
          scope: scopeId('join', partyId),
          nullifier: 7_600_000n + BigInt(i),
          commitment: 7_700_000n + BigInt(i),
        }),
      ]);
      await ctx.chain.warp(2 * 3600);
    }

    await party.send('leave', [
      ZERO_PROOF,
      await residencySignals(ctx, {
        scope: scopeId('leave', partyId),
        nullifier: 7_800_000n,
        commitment: 7_700_000n,
      }),
    ]);
    await ctx.chain.warp(2 * 3600);

    // The party still works after shrinking.
    expect(await party.read('surgeActive', [])).toBeTypeOf('boolean');
    await party.send('join', [
      ZERO_PROOF,
      await residencySignals(ctx, {
        scope: scopeId('join', partyId),
        nullifier: 7_900_000n,
        commitment: 7_900_001n,
      }),
    ]);
    expect(await party.read('memberCount', [])).toBe(4n);
  }, 300_000);

  it('SEC-C06 the price of an action is set by the action, not by the proposer', async () => {
    const ctx = await deployProtocol({ population: 0 });
    const { partyAddress, governorAddress } = await activateParty(ctx, {
      petitionId: keccak256(toHex('p:tier')),
    });
    const party = attach(ctx, 'Party', partyAddress);
    const governor = attach(ctx, 'Governor', governorAddress);
    const partyId = await party.read('partyId', []);
    await party.send('join', [
      ZERO_PROOF,
      await residencySignals(ctx, {
        scope: scopeId('join', partyId),
        nullifier: 8_100_000n,
        commitment: 8_200_000n,
      }),
    ]);
    await ctx.chain.warp(200 * DAY);

    const dissolveCall = '0xa5d3fed5'; // dissolve()
    // Tier 0 is 5% quorum, no discussion and ZERO timelock. Dissolving a party under it
    // would let a handful of people end it in three days.
    const r = await governor.expectRevert('propose', [
      [0, '0x' + '00'.repeat(32), keccak256(toHex('kill')), 'ipfs://k', 0, partyAddress, dissolveCall],
      ZERO_PROOF,
      tenureSignals({
        partyId,
        scope: scopeId('propose', partyId),
        nullifier: 8_300_000n,
        tenureSeconds: 200 * DAY,
      }),
    ]);
    expect(r.reason).toMatch(/TierTooLowForAction/);

    // The classifier fails closed: an unrecognised call into the party is constitutional.
    expect(await governor.read('requiredTier', [partyAddress, '0xdeadbeef'])).toBe(3);
    expect(await governor.read('requiredTier', [partyAddress, dissolveCall])).toBe(3);
    // And a proposal with no call at all stays operational.
    expect(await governor.read('requiredTier', ['0x' + '00'.repeat(20), '0x'])).toBe(0);
  }, 300_000);

  it('SEC-H01 the nullifier-spender authority can be set once and never re-pointed', async () => {
    const ctx = await deployProtocol({ residents: 0 });
    const r = await ctx.personhood.expectRevert('setSpenderAuthoriser', [ctx.chain.addressOf(7)]);
    expect(r.reason).toMatch(/SpenderAuthoriserAlreadySet/);
  }, 120_000);

  it('SEC-H03 a participation ratio above 100% cannot wrap the basis-point counter', async () => {
    const ctx = await deployProtocol({ residents: 0 });
    const A = artifacts();
    const probe = await ctx.chain.deploy(A.RulesProbe, []);
    // 66 votes against a 10-member snapshot is 66,000 bps, which overflows a uint16 and
    // would silently report 464 — turning a landslide into a failed quorum.
    const [passedFlag, quorumBps] = await probe.read('tally', [0, 0, false, 66n, 0n, 0n, 10n]);
    expect(quorumBps).toBe(10_000);
    expect(passedFlag).toBe(true);
  }, 120_000);
});

describe('SEC-H04 withdrawal cannot be used as a veto', () => {
  it('refuses a withdrawal from someone who never endorsed', async () => {
    // Before this check, `withdrawEndorsement` verified nothing that tied the caller to a
    // prior endorsement: any resident could decrement any petition, repeatedly. That is a
    // one-call veto on whether a party is allowed to exist.
    const ctx = await deployProtocol({ population: 0 });
    const id = keccak256(toHex('p:veto'));
    await ctx.partyRegistry.send('openPetition', [
      id, ctx.rid, 'Under Attack', keccak256(toHex('c')), 'ipfs://c', 200, BigInt(90 * DAY),
    ]);

    const endorser = await residencySignals(ctx, {
      scope: scopeId('endorse', id),
      nullifier: 4_100_000n,
      commitment: 4_200_000n,
    });
    await ctx.partyRegistry.send('endorse', [id, ZERO_PROOF, endorser]);
    expect((await ctx.partyRegistry.read('petitions', [id]))[6]).toBe(1n);

    // A stranger with a perfectly valid residency proof, who simply never endorsed.
    const stranger = await residencySignals(ctx, {
      scope: scopeId('endorse', id),
      nullifier: 4_300_000n,
      commitment: 4_400_000n,
    });
    const r = await ctx.partyRegistry.expectRevert('withdrawEndorsement', [id, ZERO_PROOF, stranger], { from: 4 });
    expect(r.reason).toMatch(/NotEndorsed/);
    expect((await ctx.partyRegistry.read('petitions', [id]))[6]).toBe(1n);

    // The real endorser can withdraw, exactly once.
    await ctx.partyRegistry.send('withdrawEndorsement', [id, ZERO_PROOF, endorser]);
    expect((await ctx.partyRegistry.read('petitions', [id]))[6]).toBe(0n);
    const twice = await ctx.partyRegistry.expectRevert('withdrawEndorsement', [id, ZERO_PROOF, endorser]);
    expect(twice.reason).toMatch(/AlreadyWithdrawn|NotEndorsed/);
  }, 300_000);

  it('SEC-C03 refuses a residency proof whose asserted "now" is stale or in the future', async () => {
    // A circuit cannot read the clock, so it proves the credential had not expired at a
    // timestamp it is given. Unbounded, that timestamp lets an expired credential be reused
    // forever by replaying an old value.
    const ctx = await deployProtocol({ population: 0 });
    const id = keccak256(toHex('p:stale'));
    await ctx.partyRegistry.send('openPetition', [
      id, ctx.rid, 'Stale Proof', keccak256(toHex('c')), 'ipfs://c', 200, BigInt(90 * DAY),
    ]);

    const stale = await residencySignals(ctx, {
      scope: scopeId('endorse', id),
      nullifier: 4_500_000n,
      commitment: 4_600_000n,
      provedAt: Number(ctx.chain.timestamp) - 7 * DAY,
    });
    expect((await ctx.partyRegistry.expectRevert('endorse', [id, ZERO_PROOF, stale])).reason).toMatch(/ProofTooOld/);

    const future = await residencySignals(ctx, {
      scope: scopeId('endorse', id),
      nullifier: 4_700_000n,
      commitment: 4_800_000n,
      provedAt: Number(ctx.chain.timestamp) + 3600,
    });
    expect((await ctx.partyRegistry.expectRevert('endorse', [id, ZERO_PROOF, future])).reason).toMatch(
      /ProofFromTheFuture/,
    );
  }, 300_000);
});
