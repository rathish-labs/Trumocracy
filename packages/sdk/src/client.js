/**
 * `TrumocracyClient` — one place where a citizen action becomes a transaction.
 *
 * Every method here does the same four things in the same order:
 *   1. derive the **scope** for the action (byte-identical to the Solidity),
 *   2. derive the **nullifier** from the citizen's secret and that scope,
 *   3. assemble the **public signals in the contract's index order**, and
 *   4. hand the encoded call to the transport chain (DES-051), never to a single RPC.
 *
 * Step 3 is where this file earns its keep. The contracts read `publicSignals[3]` and
 * `publicSignals[5]` positionally; an SDK that puts the commitment where the nullifier
 * should be produces a perfectly valid proof of the wrong statement, and the citizen finds
 * out when their vote does not count. Each builder below therefore states the ordering as
 * a comment taken verbatim from the contract, and `test/signals.test.js` pins it.
 */
import { encodeFunctionData } from 'viem';
import {
  featureFlagsAbi,
  governorAbi,
  mockVerifierAbi,
  partyAbi,
  partyRegistryAbi,
  personhoodRegistryAbi,
  regionRegistryAbi,
  verifierRegistryAbi,
} from './abi.js';
import { CIRCUIT, CHOICE, FLAG_ID, PETITION_STATE_ENUM } from './constants.js';
import {
  endorseScope,
  identityCommitment,
  joinScope,
  leaveScope,
  nullifier as actionNullifier,
  proposeScope,
  scopeSignal,
  voteScope,
  cancelScope,
  withdrawEndorsementScope,
  enrolmentNullifier,
} from './identity.js';
import { FlagDisabled, InvalidArgument, TrumocracyError } from './errors.js';
import { ReadModel } from './readmodel.js';
import { onChainZkeyRegistry } from './proofs.js';

/**
 * @typedef {object} Addresses
 * @property {`0x${string}`} partyRegistry
 * @property {`0x${string}`} personhoodRegistry
 * @property {`0x${string}`} regionRegistry
 * @property {`0x${string}`} verifierRegistry
 * @property {`0x${string}`} featureFlags
 */

/**
 * @typedef {object} ResidencyWitness
 * @property {bigint} root       a residency root the region registry still recognises
 * @property {number} index
 * @property {bigint[]} siblings
 * @property {bigint} [validUntil]
 * @property {number} [tier]
 */

export class TrumocracyClient {
  /**
   * @param {object} deps
   * @param {{readContract: Function}} deps.publicClient  viem public client for the L2
   * @param {Addresses} deps.addresses
   * @param {import('./proofs.js').ProofProvider} deps.proofs
   * @param {import('./transport.js').TransportChain} deps.transport
   * @param {object} [deps.indexer]   optional read cache; never an authority (ADR-014)
   * @param {{id: number|string, name?: string, isDev?: boolean}} [deps.chain]
   */
  constructor({ publicClient, addresses, proofs, transport, indexer, chain }) {
    for (const key of ['partyRegistry', 'personhoodRegistry', 'regionRegistry', 'verifierRegistry', 'featureFlags']) {
      if (!addresses?.[key]) throw new InvalidArgument(`addresses.${key} is required`);
    }
    if (!publicClient?.readContract) throw new InvalidArgument('a viem public client is required');
    if (!proofs?.prove) throw new InvalidArgument('a ProofProvider is required');
    if (!transport?.send) throw new InvalidArgument('a TransportChain is required — a single RPC is not a transport policy');

    this.publicClient = publicClient;
    this.addresses = addresses;
    this.proofs = proofs;
    this.transport = transport;
    this.indexer = indexer;
    this.chain = chain;
  }

  // ------------------------------------------------------------------ plumbing

  /** @param {{address: `0x${string}`, abi: readonly unknown[], functionName: string, args?: unknown[]}} call */
  #read(call) {
    return this.publicClient.readContract(call);
  }

  /**
   * Encode and submit through the fallback chain.
   * @param {`0x${string}`} to
   * @param {readonly unknown[]} abi
   * @param {string} functionName
   * @param {unknown[]} args
   * @param {{action: string, gasLimit?: bigint}} meta
   */
  async #submit(to, abi, functionName, args, meta) {
    const data = encodeFunctionData({ abi, functionName, args });
    return this.transport.send({ to, data, value: 0n, gasLimit: meta.gasLimit, action: meta.action });
  }

  /**
   * On-chain flag check (ADR-011: a frontend-only flag leaves the risky path live).
   * @param {string} flagKey
   */
  async isFlagEnabled(flagKey) {
    const id = FLAG_ID[flagKey];
    if (!id) throw new InvalidArgument(`unknown feature flag "${flagKey}"`, { flagKey });
    return this.#read({
      address: this.addresses.featureFlags,
      abi: featureFlagsAbi,
      functionName: 'isEnabled',
      args: [id],
    });
  }

  async #requireFlag(flagKey) {
    if (!(await this.isFlagEnabled(flagKey))) throw new FlagDisabled(flagKey);
  }

  /**
   * Refuse to publish an action that would identify its author by elimination
   * (DES-008, NFR-002).
   *
   * The contracts enforce this too, but doing it here first means the citizen is told
   * *why* before their device spends four seconds proving something it must not publish —
   * and the client is the only layer that can offer the ancestor-region alternative.
   *
   * @param {`0x${string}`} regionId
   */
  async #requireAnonymitySet(regionId) {
    const [k, floor] = await Promise.all([
      this.#read({ address: this.addresses.regionRegistry, abi: regionRegistryAbi, functionName: 'verifiedResidents', args: [regionId] }),
      this.#read({ address: this.addresses.regionRegistry, abi: regionRegistryAbi, functionName: 'MIN_ANONYMITY_SET' }),
    ]);
    if (k < floor) {
      throw new TrumocracyError(
        'ANONYMITY_SET_TOO_SMALL',
        `this region has ${k} verified residents; publishing here would identify you by elimination (floor ${floor})`,
        { regionId, have: k, need: floor },
      );
    }
    return k;
  }

  /** Chain readers for the `ReadModel` — the authoritative side of ADR-014 §1. */
  chainReaders() {
    const { partyRegistry, regionRegistry } = this.addresses;
    const read = (call) => this.#read(call);
    return {
      async petitionEndorsements(petitionId) {
        const p = await read({ address: partyRegistry, abi: partyRegistryAbi, functionName: 'petitions', args: [petitionId] });
        return p[6];
      },
      async petitionRequired(petitionId) {
        const p = await read({ address: partyRegistry, abi: partyRegistryAbi, functionName: 'petitions', args: [petitionId] });
        return p[5];
      },
      requiredEndorsements(jurisdiction, thresholdBps) {
        return read({ address: partyRegistry, abi: partyRegistryAbi, functionName: 'requiredEndorsements', args: [jurisdiction, thresholdBps] });
      },
      isMemberAt(party, commitment, at) {
        return read({ address: party, abi: partyAbi, functionName: 'isMemberAt', args: [commitment, BigInt(at)] });
      },
      tenureAt(party, commitment, at) {
        return read({ address: party, abi: partyAbi, functionName: 'tenureAt', args: [commitment, BigInt(at)] });
      },
      async proposalTally(governor, proposalId) {
        const p = await read({ address: governor, abi: governorAbi, functionName: 'proposals', args: [BigInt(proposalId)] });
        return {
          forVotes: p.forVotes,
          againstVotes: p.againstVotes,
          abstainVotes: p.abstainVotes,
          snapshotMembers: p.snapshotMembers,
          votingEndsAt: p.votingEndsAt,
          finalized: p.finalized,
          succeeded: p.succeeded,
        };
      },
      verifiedResidents(regionId) {
        return read({ address: regionRegistry, abi: regionRegistryAbi, functionName: 'verifiedResidents', args: [regionId] });
      },
      balanceOf: (address) => this.publicClient.getBalance?.({ address }),
    };
  }

  /** A `ReadModel` wired to this client's chain and indexer. */
  readModel({ onViolation } = {}) {
    return new ReadModel({ indexer: this.indexer, chain: this.chainReaders(), onViolation });
  }

  /** The `zkeyHash` registry dependency, for constructing a `Groth16ProofProvider`. */
  zkeyRegistry() {
    return onChainZkeyRegistry(this.publicClient, this.addresses.verifierRegistry, verifierRegistryAbi);
  }

  /**
   * Does this circuit's registered verifier admit to being an insecure mock?
   * Feeds `DevProofProvider`, and is the check that catches a config file that lies
   * about which environment it is (SDD §7.1).
   * @param {`0x${string}`} circuitId
   */
  async isInsecureMockVerifier(circuitId) {
    const version = await this.#read({
      address: this.addresses.verifierRegistry,
      abi: verifierRegistryAbi,
      functionName: 'current',
      args: [circuitId],
    });
    try {
      return Boolean(
        await this.#read({ address: version.verifier, abi: mockVerifierAbi, functionName: 'IS_INSECURE_MOCK' }),
      );
    } catch {
      // A real verifier has no such function; the revert is the answer.
      return false;
    }
  }

  // ------------------------------------------------------------------ personhood

  /**
   * Enrol as a verified unique person (US-0001, FR-001).
   *
   * publicSignals = `[issuerNullifier, identityCommitment, uint256(issuerId), namespaceId]`
   * — `PersonhoodRegistry.enrol`.
   *
   * @param {object} args
   * @param {`0x${string}`} args.issuerId
   * @param {bigint} args.secret            identity secret (device-only)
   * @param {bigint} args.credentialSecret  credential secret (device-only)
   * @param {object} args.witness           private circuit inputs; never transmitted
   */
  async enrol({ issuerId, secret, credentialSecret, witness }) {
    const issuer = await this.#read({
      address: this.addresses.personhoodRegistry,
      abi: personhoodRegistryAbi,
      functionName: 'issuers',
      args: [issuerId],
    });
    const [active, , tier, , namespaceId] = issuer;
    if (tier === 0) throw new InvalidArgument(`unknown issuer ${issuerId}`);
    if (!active) throw new InvalidArgument(`issuer ${issuerId} is no longer accepted`);

    const commitment = identityCommitment(secret);
    const signals = [
      enrolmentNullifier(credentialSecret, namespaceId),
      commitment,
      BigInt(issuerId),
      BigInt(namespaceId),
    ];

    const { proof, publicSignals } = await this.proofs.prove(CIRCUIT.PERSONHOOD_ENROL, { signals, witness });
    const receipt = await this.#submit(
      this.addresses.personhoodRegistry,
      personhoodRegistryAbi,
      'enrol',
      [issuerId, proof, publicSignals],
      { action: 'enrol' },
    );
    return { ...receipt, identityCommitment: commitment, tier };
  }

  // ------------------------------------------------------------------ petitions

  /**
   * Open a petition for a new party (US-0011, FR-010).
   * No proof: opening a petition asserts nothing about a person. The bar is endorsement,
   * not authorship — anybody may propose a party, and nobody may approve one.
   */
  async openPetition({ petitionId, jurisdiction, name, charterHash, charterCID, thresholdBps = 0, durationSeconds }) {
    await this.#requireFlag('petitions');
    return this.#submit(
      this.addresses.partyRegistry,
      partyRegistryAbi,
      'openPetition',
      [petitionId, jurisdiction, name, charterHash, charterCID, thresholdBps, BigInt(durationSeconds)],
      { action: 'openPetition' },
    );
  }

  /**
   * Residency-proof signals, in `PartyRegistry.endorse` / `Party.join` order:
   * `[residencyRoot, regionId, minTier, scope, actionNullifier, identityCommitment]`.
   */
  #residencySignals({ root, regionId, minTier, scope, secret }) {
    return [
      BigInt(root),
      BigInt(regionId),
      BigInt(minTier),
      scopeSignal(scope),
      actionNullifier(secret, scope),
      identityCommitment(secret),
    ];
  }

  /**
   * Endorse a petition (US-0016, FR-014). One per person per petition, by scope.
   * @param {object} args
   * @param {`0x${string}`} args.petitionId
   * @param {bigint} args.secret
   * @param {ResidencyWitness} args.residency
   * @param {number} [args.minTier]
   */
  async endorse({ petitionId, secret, residency, minTier = 1, witness }) {
    await this.#requireFlag('petitions');
    const petition = await this.petition(petitionId);
    if (petition.state !== 'gathering') {
      throw new TrumocracyError('PETITION_NOT_GATHERING', `petition is ${petition.state}`, { petitionId });
    }
    await this.#requireAnonymitySet(petition.jurisdiction);

    const scope = endorseScope(petitionId);
    const signals = this.#residencySignals({
      root: residency.root,
      regionId: petition.jurisdiction,
      minTier,
      scope,
      secret,
    });
    const { proof, publicSignals } = await this.proofs.prove(CIRCUIT.RESIDENCY_MEMBER, {
      signals,
      witness: { ...witness, ...residency, secret },
    });
    return this.#submit(this.addresses.partyRegistry, partyRegistryAbi, 'endorse', [petitionId, proof, publicSignals], {
      action: 'endorse',
    });
  }

  /**
   * Withdraw an endorsement before activation (US-0017, FR-015).
   *
   * Uses `withdraw-endorsement`, a scope distinct from `endorse`, so the withdrawal is
   * once-only *and* unlinkable to the endorsement it reverses (DES-012).
   */
  async withdrawEndorsement({ petitionId, secret, residency, minTier = 1, witness }) {
    const petition = await this.petition(petitionId);
    const scope = withdrawEndorsementScope(petitionId);
    const signals = this.#residencySignals({
      root: residency.root,
      regionId: petition.jurisdiction,
      minTier,
      scope,
      secret,
    });
    const { proof, publicSignals } = await this.proofs.prove(CIRCUIT.RESIDENCY_MEMBER, {
      signals,
      witness: { ...witness, ...residency, secret },
    });
    return this.#submit(
      this.addresses.partyRegistry,
      partyRegistryAbi,
      'withdrawEndorsement',
      [petitionId, proof, publicSignals],
      { action: 'withdrawEndorsement' },
    );
  }

  /**
   * Activate a party whose petition met its threshold (US-0022, FR-018).
   *
   * Permissionless by design: anyone — the founder, a supporter, a journalist, an indexer
   * — may call this, and nobody can decline to. There is no approver in this path and
   * adding one would change FR-018.
   */
  async activate({ petitionId, charter }) {
    await this.#requireFlag('petitions');
    return this.#submit(this.addresses.partyRegistry, partyRegistryAbi, 'activate', [petitionId, charter], {
      action: 'activate',
    });
  }

  /** Read a petition, decoded into names rather than tuple indices. */
  async petition(petitionId) {
    const p = await this.#read({
      address: this.addresses.partyRegistry,
      abi: partyRegistryAbi,
      functionName: 'petitions',
      args: [petitionId],
    });
    if (p[7] === 0n) throw new TrumocracyError('UNKNOWN_PETITION', `no petition ${petitionId}`, { petitionId });
    return {
      petitionId,
      jurisdiction: p[0],
      charterHash: p[1],
      charterCID: p[2],
      name: p[3],
      thresholdBps: p[4],
      requiredEndorsements: p[5],
      endorsements: p[6],
      opensAt: p[7],
      closesAt: p[8],
      state: PETITION_STATE_ENUM[Number(p[9])],
      party: p[10],
      parentPartyId: p[11],
      forkInitiatedAt: p[12],
    };
  }

  // ------------------------------------------------------------------ membership

  /**
   * Join a party (US-0024, FR-020). Unconditional for a credentialed resident: no
   * approval, no sponsor, no interview — there is no function that could refuse.
   *
   * @param {object} args
   * @param {`0x${string}`} args.party      the Party contract address
   * @param {`0x${string}`} args.partyId
   * @param {bigint} args.secret
   * @param {ResidencyWitness} args.residency
   */
  async join({ party, partyId, secret, residency, minTier = 1, witness }) {
    await this.#requireFlag('petitions');
    const jurisdiction = await this.#read({ address: party, abi: partyAbi, functionName: 'jurisdiction' });
    await this.#requireAnonymitySet(jurisdiction);

    const scope = joinScope(partyId);
    const signals = this.#residencySignals({ root: residency.root, regionId: jurisdiction, minTier, scope, secret });
    const { proof, publicSignals } = await this.proofs.prove(CIRCUIT.RESIDENCY_MEMBER, {
      signals,
      witness: { ...witness, ...residency, secret },
    });
    return this.#submit(party, partyAbi, 'join', [proof, publicSignals], { action: 'join' });
  }

  /**
   * Leave a party (US-0025, FR-022). Immediate, unblockable, and proven rather than
   * announced — so leaving does not require identifying yourself to the party you leave.
   */
  async leave({ party, partyId, secret, residency, minTier = 1, witness }) {
    const jurisdiction = await this.#read({ address: party, abi: partyAbi, functionName: 'jurisdiction' });
    const scope = leaveScope(partyId);
    const signals = this.#residencySignals({ root: residency.root, regionId: jurisdiction, minTier, scope, secret });
    const { proof, publicSignals } = await this.proofs.prove(CIRCUIT.RESIDENCY_MEMBER, {
      signals,
      witness: { ...witness, ...residency, secret },
    });
    return this.#submit(party, partyAbi, 'leave', [proof, publicSignals], { action: 'leave' });
  }

  // ------------------------------------------------------------------ governance

  /**
   * Tenure-proof signals, in `Governor.propose` / `Governor.vote` order:
   * `[partyRootAtSnapshot, partyId, scope, actionNullifier, tenureSeconds]`.
   *
   * Note there is **no commitment** in this array. From these signals alone the chain learns
   * that *some* member with sufficient tenure acted, and nothing else. That is a property of
   * the signal array, not of v1 voting: in a v1 (Definition-A) deployment the ballot is cast
   * through conventional authentication, so the platform CAN see who voted and how, and the
   * vote is NOT anonymous, NOT receipt-free and NOT coercion-resistant (FR-131, Doc 02 §4.45).
   * Do not describe a v1 vote as anonymous.
   */
  #tenureSignals({ partyRoot, partyId, scope, secret, tenureSeconds }) {
    return [
      BigInt(partyRoot),
      BigInt(partyId),
      scopeSignal(scope),
      actionNullifier(secret, scope),
      BigInt(tenureSeconds),
    ];
  }

  /**
   * Put a proposal to a party (US-0031, FR-024). No pre-screening, no moderation queue,
   * no sponsor.
   *
   * @param {object} args
   * @param {`0x${string}`} args.governor
   * @param {`0x${string}`} args.partyId
   * @param {{tier: number, clauseId: `0x${string}`, contentHash: `0x${string}`, cid: string,
   *          requestedVotingSeconds: number, target: `0x${string}`, callData: `0x${string}`}} args.input
   */
  async propose({ governor, partyId, input, secret, tenure, witness }) {
    await this.#requireFlag('party_governance');
    const scope = proposeScope(partyId);
    const signals = this.#tenureSignals({
      partyRoot: tenure.root,
      partyId,
      scope,
      secret,
      tenureSeconds: tenure.tenureSeconds,
    });
    const { proof, publicSignals } = await this.proofs.prove(CIRCUIT.TENURE_MEMBER, {
      signals,
      witness: { ...witness, ...tenure, secret },
    });
    return this.#submit(governor, governorAbi, 'propose', [input, proof, publicSignals], { action: 'propose' });
  }

  /**
   * Cast one vote (US-0027, FR-030). Weight is 1; there is no other possibility.
   *
   * The MACI pre-check mirrors `Governor.vote`'s `if (flags.isEnabled(FLAG_MACI)) revert
   * MaciPathRequired()`. Leaving both paths open would let a coercer simply demand the
   * citizen use the provable one, so once receipt-freeness is live this path closes — and
   * the client says so rather than letting the transaction revert unexplained.
   */
  async vote({ governor, partyId, proposalId, choice, secret, tenure, witness }) {
    await this.#requireFlag('party_governance');
    if (await this.isFlagEnabled('maci_voting')) {
      throw new TrumocracyError(
        'MACI_PATH_REQUIRED',
        'receipt-free voting is live; the public-tally vote path is closed (ADR-006)',
        { proposalId },
      );
    }
    const choiceValue = typeof choice === 'string' ? CHOICE[choice.toUpperCase()] : choice;
    if (choiceValue === undefined || choiceValue < 0 || choiceValue > 2) {
      throw new InvalidArgument(`unknown vote choice "${choice}"`, { choice });
    }

    const scope = voteScope(partyId, proposalId);
    const signals = this.#tenureSignals({
      partyRoot: tenure.root,
      partyId,
      scope,
      secret,
      tenureSeconds: tenure.tenureSeconds,
    });
    const { proof, publicSignals } = await this.proofs.prove(CIRCUIT.TENURE_MEMBER, {
      signals,
      witness: { ...witness, ...tenure, secret },
    });
    return this.#submit(governor, governorAbi, 'vote', [BigInt(proposalId), choiceValue, proof, publicSignals], {
      action: 'vote',
    });
  }

  /** Withdraw a proposal during discussion only (US-0032, FR-029). */
  async cancelProposal({ governor, partyId, proposalId, secret, tenure, witness }) {
    const scope = cancelScope(partyId, proposalId);
    const signals = this.#tenureSignals({
      partyRoot: tenure.root,
      partyId,
      scope,
      secret,
      tenureSeconds: tenure.tenureSeconds,
    });
    const { proof, publicSignals } = await this.proofs.prove(CIRCUIT.TENURE_MEMBER, {
      signals,
      witness: { ...witness, ...tenure, secret },
    });
    return this.#submit(governor, governorAbi, 'cancelDuringDiscussion', [BigInt(proposalId), proof, publicSignals], {
      action: 'cancelProposal',
    });
  }

  /** Close the count. Permissionless — no proof, no privilege (FR-033). */
  async finalize({ governor, proposalId }) {
    return this.#submit(governor, governorAbi, 'finalize', [BigInt(proposalId)], { action: 'finalize' });
  }

  /**
   * Execute a passed proposal after its timelock (FR-026).
   * Permissionless on purpose: a privileged executor would be a veto in disguise.
   */
  async execute({ governor, proposalId }) {
    return this.#submit(governor, governorAbi, 'execute', [BigInt(proposalId)], { action: 'execute' });
  }
}
