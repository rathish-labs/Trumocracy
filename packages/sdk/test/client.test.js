/**
 * UT-2597…UT-2612 — public-signal ordering and the client's fail-closed pre-checks.
 *
 * The contracts index public signals **positionally**: `PartyRegistry.endorse` reads
 * `publicSignals[3]` as the scope and `publicSignals[4]` as the nullifier; `Governor.vote`
 * reads `publicSignals[2]` and `publicSignals[3]`. An SDK that swaps two entries produces
 * a mathematically valid proof of a statement the citizen never made. These tests pin the
 * order against the contract comments, one action at a time.
 *
 * Traces: FR-014, FR-015, FR-018, FR-020, FR-022, FR-024, FR-030, NFR-002, NFR-020, ADR-006.
 */
import { describe, it, expect, vi } from 'vitest';
import { decodeFunctionData, keccak256, toHex } from 'viem';
import { TrumocracyClient } from '../src/client.js';
import { partyAbi, partyRegistryAbi, governorAbi, personhoodRegistryAbi } from '../src/abi.js';
import { CIRCUIT, FLAG_ID } from '../src/constants.js';
import {
  deriveIdentitySecret,
  deriveCredentialSecret,
  identityCommitment,
  nullifier,
  endorseScope,
  withdrawEndorsementScope,
  joinScope,
  proposeScope,
  voteScope,
  enrolmentNullifier,
} from '../src/identity.js';
import { FlagDisabled, TrumocracyError } from '../src/errors.js';

const ADDRESSES = {
  partyRegistry: `0x${'01'.repeat(20)}`,
  personhoodRegistry: `0x${'02'.repeat(20)}`,
  regionRegistry: `0x${'03'.repeat(20)}`,
  verifierRegistry: `0x${'04'.repeat(20)}`,
  featureFlags: `0x${'05'.repeat(20)}`,
};

const PARTY_ADDR = `0x${'0a'.repeat(20)}`;
const GOVERNOR_ADDR = `0x${'0b'.repeat(20)}`;
const PETITION_ID = `0x${'11'.repeat(32)}`;
const PARTY_ID = `0x${'ab'.repeat(32)}`;
const REGION = `0x${'77'.repeat(32)}`;
const NAMESPACE = `0x${'cd'.repeat(32)}`;
const ISSUER = keccak256(toHex('epassport-nfc'));

const SECRET = deriveIdentitySecret({ seed: `0x${'a1'.repeat(32)}` });
const CREDENTIAL = deriveCredentialSecret({ credentialDigest: `0x${'a2'.repeat(32)}` });
// Distinctive sibling values: small ones (1n, 2n) collide with legitimate signals such as
// `minTier`, which would make UT-2601's leak check pass or fail for the wrong reason.
const RESIDENCY = { root: 12345n, index: 3, siblings: [909_091n, 909_092n] };
const TENURE = { root: 6789n, tenureSeconds: 86_400 * 30 };

/**
 * A harness that records what the client asked the chain, the prover and the transport to
 * do. Everything is a plain function: no chain, no network, no fixtures to keep in sync.
 */
function harness({ flags = { petitions: true, party_governance: true, maci_voting: false }, verifiedResidents = 1200n, petitionState = 0 } = {}) {
  const proved = [];
  const sent = [];

  const readContract = vi.fn(async ({ functionName, args }) => {
    switch (functionName) {
      case 'isEnabled': {
        const key = Object.entries(FLAG_ID).find(([, id]) => id === args[0])?.[0];
        return Boolean(flags[key]);
      }
      case 'verifiedResidents':
        return verifiedResidents;
      case 'MIN_ANONYMITY_SET':
        return 1000n;
      case 'jurisdiction':
        return REGION;
      case 'issuers':
        return [true, false, 2, 0, NAMESPACE, 'ipfs://assessment'];
      case 'petitions':
        return [
          REGION, // 0 jurisdiction
          `0x${'ee'.repeat(32)}`, // 1 charterHash
          'ipfs://charter', // 2 charterCID
          'Commons Forward', // 3 name
          200, // 4 thresholdBps
          2000n, // 5 requiredEndorsements
          1200n, // 6 endorsements
          1_000n, // 7 opensAt
          9_000n, // 8 closesAt
          petitionState, // 9 state
          PARTY_ADDR, // 10 party
          `0x${'00'.repeat(32)}`, // 11 parentPartyId
          0n, // 12 forkInitiatedAt
        ];
      default:
        throw new Error(`unexpected read: ${functionName}`);
    }
  });

  const proofs = {
    prove: vi.fn(async (circuitId, { signals, witness }) => {
      proved.push({ circuitId, signals, witness });
      return { proof: new Array(8).fill(0n), publicSignals: signals };
    }),
  };

  const transport = { send: vi.fn(async (req) => (sent.push(req), { transport: 'stub', hash: '0xfeed', attempts: [] })) };

  const client = new TrumocracyClient({
    publicClient: { readContract },
    addresses: ADDRESSES,
    proofs,
    transport,
    chain: { id: 31337, isDev: true },
  });

  return { client, proofs, transport, proved, sent, readContract };
}

/** Decode the calldata the transport was handed. */
const decode = (abi, sent) => decodeFunctionData({ abi, data: sent.at(-1).data });

describe('residency-proof signal ordering', () => {
  it('UT-2597 endorse builds [root, regionId, minTier, scope, nullifier, commitment]', async () => {
    const { client, proved, sent } = harness();
    await client.endorse({ petitionId: PETITION_ID, secret: SECRET, residency: RESIDENCY, minTier: 2 });

    const scope = endorseScope(PETITION_ID);
    expect(proved[0].circuitId).toBe(CIRCUIT.RESIDENCY_MEMBER);
    expect(proved[0].signals).toEqual([
      RESIDENCY.root,
      BigInt(REGION),
      2n,
      BigInt(scope),
      nullifier(SECRET, scope),
      identityCommitment(SECRET),
    ]);

    const call = decode(partyRegistryAbi, sent);
    expect(call.functionName).toBe('endorse');
    expect(call.args[0]).toBe(PETITION_ID);
    expect(sent.at(-1).to).toBe(ADDRESSES.partyRegistry);
  });

  it('UT-2598 withdrawEndorsement uses the DISTINCT withdraw scope', async () => {
    const { client, proved, sent } = harness();
    await client.withdrawEndorsement({ petitionId: PETITION_ID, secret: SECRET, residency: RESIDENCY });

    // Reusing the endorse scope here would let an observer pair the two actions, which is
    // exactly what DES-012 separates them to prevent.
    expect(proved[0].signals[3]).toBe(BigInt(withdrawEndorsementScope(PETITION_ID)));
    expect(proved[0].signals[3]).not.toBe(BigInt(endorseScope(PETITION_ID)));
    expect(proved[0].signals[4]).toBe(nullifier(SECRET, withdrawEndorsementScope(PETITION_ID)));
    expect(decode(partyRegistryAbi, sent).functionName).toBe('withdrawEndorsement');
  });

  it('UT-2599 join proves against the party jurisdiction and the join scope', async () => {
    const { client, proved, sent } = harness();
    await client.join({ party: PARTY_ADDR, partyId: PARTY_ID, secret: SECRET, residency: RESIDENCY });

    expect(proved[0].signals[1]).toBe(BigInt(REGION));
    expect(proved[0].signals[3]).toBe(BigInt(joinScope(PARTY_ID)));
    expect(decode(partyAbi, sent).functionName).toBe('join');
    expect(sent.at(-1).to).toBe(PARTY_ADDR);
  });

  it('UT-2600 leave is proven, not announced — no identity crosses to the party', async () => {
    const { client, proved, sent } = harness();
    await client.leave({ party: PARTY_ADDR, partyId: PARTY_ID, secret: SECRET, residency: RESIDENCY });
    expect(decode(partyAbi, sent).functionName).toBe('leave');
    expect(proved[0].signals).toHaveLength(6);
  });

  it('UT-2601 the private witness is never put into the public signals', async () => {
    const { client, proved } = harness();
    await client.endorse({ petitionId: PETITION_ID, secret: SECRET, residency: RESIDENCY });
    // siblings + secret are witness-side only; nothing derived from them beyond the
    // commitment and the nullifier may appear on-chain (SDD §10.1 boundary B1→B2).
    expect(proved[0].witness.secret).toBe(SECRET);
    expect(proved[0].signals).not.toContain(SECRET);
    expect(proved[0].signals.some((s) => RESIDENCY.siblings.includes(s))).toBe(false);
  });
});

describe('tenure-proof signal ordering', () => {
  const input = {
    tier: 1,
    clauseId: `0x${'00'.repeat(32)}`,
    contentHash: `0x${'ff'.repeat(32)}`,
    cid: 'ipfs://proposal',
    requestedVotingSeconds: 0,
    target: `0x${'00'.repeat(20)}`,
    callData: '0x',
  };

  it('UT-2602 propose builds [partyRoot, partyId, scope, nullifier, tenureSeconds]', async () => {
    const { client, proved, sent } = harness();
    await client.propose({ governor: GOVERNOR_ADDR, partyId: PARTY_ID, input, secret: SECRET, tenure: TENURE });

    const scope = proposeScope(PARTY_ID);
    expect(proved[0].circuitId).toBe(CIRCUIT.TENURE_MEMBER);
    expect(proved[0].signals).toEqual([
      TENURE.root,
      BigInt(PARTY_ID),
      BigInt(scope),
      nullifier(SECRET, scope),
      BigInt(TENURE.tenureSeconds),
    ]);
    expect(decode(governorAbi, sent).functionName).toBe('propose');
  });

  it('UT-2603 vote scopes the nullifier to the proposal, and carries no commitment', async () => {
    const { client, proved, sent } = harness();
    await client.vote({
      governor: GOVERNOR_ADDR,
      partyId: PARTY_ID,
      proposalId: 7,
      choice: 'for',
      secret: SECRET,
      tenure: TENURE,
    });

    expect(proved[0].signals[2]).toBe(BigInt(voteScope(PARTY_ID, 7)));
    // The chain learns that *some* member with enough tenure voted. Nothing else.
    expect(proved[0].signals).toHaveLength(5);
    expect(proved[0].signals).not.toContain(identityCommitment(SECRET));

    const call = decode(governorAbi, sent);
    expect(call.functionName).toBe('vote');
    expect(call.args[0]).toBe(7n);
    expect(call.args[1]).toBe(1); // Choice.For
  });

  it('UT-2604 accepts the choice as a name or an enum value, and refuses anything else', async () => {
    const { client, sent } = harness();
    await client.vote({ governor: GOVERNOR_ADDR, partyId: PARTY_ID, proposalId: 1, choice: 2, secret: SECRET, tenure: TENURE });
    expect(decode(governorAbi, sent).args[1]).toBe(2);
    await expect(
      client.vote({ governor: GOVERNOR_ADDR, partyId: PARTY_ID, proposalId: 1, choice: 'maybe', secret: SECRET, tenure: TENURE }),
    ).rejects.toThrow(/unknown vote choice/);
  });

  it('UT-2605 finalize and execute are permissionless — no proof is built for either', async () => {
    const { client, proofs, sent } = harness();
    await client.finalize({ governor: GOVERNOR_ADDR, proposalId: 3 });
    expect(decode(governorAbi, sent).functionName).toBe('finalize');
    await client.execute({ governor: GOVERNOR_ADDR, proposalId: 3 });
    expect(decode(governorAbi, sent).functionName).toBe('execute');
    expect(proofs.prove).not.toHaveBeenCalled();
  });
});

describe('enrolment', () => {
  it('UT-2606 enrol builds [issuerNullifier, commitment, issuerId, namespaceId]', async () => {
    const { client, proved, sent } = harness();
    const result = await client.enrol({ issuerId: ISSUER, secret: SECRET, credentialSecret: CREDENTIAL, witness: {} });

    expect(proved[0].circuitId).toBe(CIRCUIT.PERSONHOOD_ENROL);
    expect(proved[0].signals).toEqual([
      enrolmentNullifier(CREDENTIAL, NAMESPACE),
      identityCommitment(SECRET),
      BigInt(ISSUER),
      BigInt(NAMESPACE),
    ]);
    expect(decode(personhoodRegistryAbi, sent).functionName).toBe('enrol');
    expect(result.identityCommitment).toBe(identityCommitment(SECRET));
  });
});

describe('fail-closed pre-checks', () => {
  it('UT-2607 refuses to endorse in a region below the k ≥ 1000 anonymity floor', async () => {
    const { client, proofs } = harness({ verifiedResidents: 40n });
    await expect(
      client.endorse({ petitionId: PETITION_ID, secret: SECRET, residency: RESIDENCY }),
    ).rejects.toMatchObject({ code: 'ANONYMITY_SET_TOO_SMALL' });
    // Refused BEFORE proving: we do not spend four seconds of a citizen's phone on an
    // action we must not publish (NFR-002, DES-008).
    expect(proofs.prove).not.toHaveBeenCalled();
  });

  it('UT-2608 refuses to join a party whose region is too thin', async () => {
    const { client } = harness({ verifiedResidents: 999n });
    await expect(
      client.join({ party: PARTY_ADDR, partyId: PARTY_ID, secret: SECRET, residency: RESIDENCY }),
    ).rejects.toMatchObject({ code: 'ANONYMITY_SET_TOO_SMALL' });
  });

  it('UT-2609 honours the on-chain feature flag, not a frontend copy of it', async () => {
    const { client, proofs } = harness({ flags: { petitions: false } });
    await expect(client.endorse({ petitionId: PETITION_ID, secret: SECRET, residency: RESIDENCY })).rejects.toBeInstanceOf(
      FlagDisabled,
    );
    expect(proofs.prove).not.toHaveBeenCalled();
  });

  it('UT-2610 closes the public-tally vote path once MACI is live (ADR-006)', async () => {
    const { client, proofs } = harness({ flags: { party_governance: true, maci_voting: true } });
    // Leaving both open would let a coercer simply demand the citizen use the provable one.
    await expect(
      client.vote({ governor: GOVERNOR_ADDR, partyId: PARTY_ID, proposalId: 1, choice: 'for', secret: SECRET, tenure: TENURE }),
    ).rejects.toMatchObject({ code: 'MACI_PATH_REQUIRED' });
    expect(proofs.prove).not.toHaveBeenCalled();
  });

  it('UT-2611 refuses to endorse a petition that is no longer gathering', async () => {
    const { client } = harness({ petitionState: 1 }); // Activated
    await expect(
      client.endorse({ petitionId: PETITION_ID, secret: SECRET, residency: RESIDENCY }),
    ).rejects.toMatchObject({ code: 'PETITION_NOT_GATHERING' });
  });

  it('UT-2612 cannot be constructed without a transport policy or a proof provider', () => {
    const ok = { publicClient: { readContract: async () => {} }, addresses: ADDRESSES };
    expect(() => new TrumocracyClient({ ...ok, proofs: { prove() {} } })).toThrow(/TransportChain/);
    expect(() => new TrumocracyClient({ ...ok, transport: { send() {} } })).toThrow(/ProofProvider/);
    expect(() => new TrumocracyClient({ ...ok, addresses: {}, proofs: { prove() {} }, transport: { send() {} } })).toThrow(
      /addresses\./,
    );
  });

  it('UT-2613 decodes a petition into names, not tuple indices', async () => {
    const { client } = harness();
    await expect(client.petition(PETITION_ID)).resolves.toMatchObject({
      jurisdiction: REGION,
      name: 'Commons Forward',
      requiredEndorsements: 2000n,
      endorsements: 1200n,
      state: 'gathering',
    });
  });
});
