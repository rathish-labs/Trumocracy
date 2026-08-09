/**
 * Trumocracy indexer — an event-sourced read model.
 *
 * Three properties make this safe to exist in a system whose whole thesis is the absence of
 * a trusted party (ADR-014):
 *
 *  1. **Deterministic.** The projection is a pure fold over the ordered event log, so any two
 *     honest operators starting from the same chain produce byte-identical state. That makes a
 *     lying indexer *detectable by diffing*, which is what makes it survivable.
 *  2. **Non-authoritative.** Nothing here is the source of truth. The client re-verifies every
 *     decision-relevant value against the chain before acting on it. This module marks which
 *     fields those are, so the obligation is machine-checkable rather than remembered.
 *  3. **Reader-blind.** No query logging, no IP capture, no per-reader analytics. Which parties
 *     a person browses is as sensitive as which party they joined; a system that refuses to
 *     store the second and casually logs the first has not protected anyone.
 */
import { petitionOutcome, PARTY_STATE } from '@trumocracy/protocol';

/**
 * Fields a client MUST re-verify against chain state before acting on them.
 * Exported so the SDK can enforce it structurally rather than by convention.
 */
export const AUTHORITATIVE_FIELDS = Object.freeze([
  'petition.endorsements',
  'petition.requiredEndorsements',
  'party.memberCount',
  'proposal.forVotes',
  'proposal.againstVotes',
  'proposal.abstainVotes',
  'proposal.snapshotMembers',
  'proposal.succeeded',
  'treasury.balance',
]);

export class ProjectionError extends Error {
  constructor(code, detail) {
    // The code stays in the message so a log line or a test assertion identifies the failure
    // class without having to reach for `.code`.
    super(detail ? `${code}: ${detail}` : code);
    this.code = code;
    this.detail = detail;
  }
}

/** Empty projection state. */
export function emptyState() {
  return {
    lastBlock: 0,
    lastLogIndex: -1,
    petitions: new Map(),
    parties: new Map(),
    proposals: new Map(), // key: `${partyId}:${proposalId}`
    regions: new Map(),
    issuers: new Map(),
    anomalies: [], // AnomalousGrowth events — surfaced to members as a warning
  };
}

const key = (partyId, proposalId) => `${partyId}:${proposalId}`;

/**
 * Apply one decoded event. Pure: returns the same state object mutated in place for speed,
 * but performs no I/O and reads no clock, so a replay is exactly reproducible.
 *
 * Events must arrive in (blockNumber, logIndex) order. Out-of-order delivery is rejected
 * rather than silently reordered — a read model that quietly accepts a reordered log will
 * silently produce a wrong vote count, and a wrong vote count is the one output this system
 * must never produce.
 */
export function applyEvent(state, event) {
  const { blockNumber, logIndex, name, args } = event;

  if (
    blockNumber < state.lastBlock ||
    (blockNumber === state.lastBlock && logIndex <= state.lastLogIndex)
  ) {
    throw new ProjectionError(
      'OUT_OF_ORDER',
      `event ${name} at ${blockNumber}/${logIndex} arrived after ${state.lastBlock}/${state.lastLogIndex}`,
    );
  }
  state.lastBlock = blockNumber;
  state.lastLogIndex = logIndex;

  switch (name) {
    case 'PetitionOpened':
      state.petitions.set(args.petitionId, {
        petitionId: args.petitionId,
        jurisdiction: args.jurisdiction,
        name: args.name,
        requiredEndorsements: Number(args.requiredEndorsements),
        endorsements: 0,
        opensAt: Number(args.opensAt),
        closesAt: Number(args.closesAt),
        parentPartyId: args.parentPartyId,
        state: PARTY_STATE.PETITION,
      });
      break;

    case 'Endorsed': {
      const p = state.petitions.get(args.petitionId);
      if (!p) throw new ProjectionError('UNKNOWN_PETITION', args.petitionId);
      p.endorsements = Number(args.endorsements);
      break;
    }

    case 'EndorsementWithdrawn': {
      const p = state.petitions.get(args.petitionId);
      if (!p) throw new ProjectionError('UNKNOWN_PETITION', args.petitionId);
      p.endorsements = Number(args.endorsements);
      break;
    }

    case 'PartyActivated': {
      const p = state.petitions.get(args.petitionId);
      if (p) p.state = PARTY_STATE.ACTIVE;
      state.parties.set(args.partyId, {
        partyId: args.partyId,
        address: args.party,
        governor: args.governor,
        jurisdiction: p?.jurisdiction,
        name: p?.name,
        memberCount: 0,
        manifestoVersions: [],
        state: PARTY_STATE.ACTIVE,
        parentPartyId: p?.parentPartyId,
      });
      break;
    }

    case 'PetitionExpired': {
      const p = state.petitions.get(args.petitionId);
      if (p) p.state = PARTY_STATE.EXPIRED;
      break;
    }

    case 'Joined': {
      const party = requireParty(state, event);
      party.memberCount = Number(args.memberCount);
      break;
    }

    case 'Left': {
      const party = requireParty(state, event);
      party.memberCount = Number(args.memberCount);
      break;
    }

    case 'AnomalousGrowth': {
      const party = requireParty(state, event);
      state.anomalies.push({
        partyId: party.partyId,
        blockNumber,
        fromCount: Number(args.fromCount),
        toCount: Number(args.toCount),
      });
      break;
    }

    case 'ManifestoPublished': {
      const party = requireParty(state, event);
      party.manifestoVersions.push({
        version: Number(args.version),
        contentHash: args.contentHash,
        cid: args.cid,
        changeSummary: args.changeSummary,
        blockNumber,
      });
      break;
    }

    case 'ProposalCreated': {
      const party = requirePartyByGovernor(state, event);
      state.proposals.set(key(party.partyId, args.proposalId), {
        partyId: party.partyId,
        proposalId: Number(args.proposalId),
        tier: Number(args.tier),
        contentHash: args.contentHash,
        cid: args.cid,
        snapshotMembers: Number(args.snapshotMembers),
        surgeAtCreation: args.surgeAtCreation,
        votingEndsAt: Number(args.votingEndsAt),
        executableAt: Number(args.executableAt),
        forVotes: 0,
        againstVotes: 0,
        abstainVotes: 0,
        finalized: false,
        succeeded: null,
      });
      break;
    }

    case 'VoteCast': {
      const party = requirePartyByGovernor(state, event);
      const prop = state.proposals.get(key(party.partyId, args.proposalId));
      if (!prop) throw new ProjectionError('UNKNOWN_PROPOSAL', String(args.proposalId));
      // Weight is 1 by construction. If a future event ever carried an amount, this line
      // would be the place the invariant broke — so it is written as an increment, not a set.
      if (Number(args.choice) === 1) prop.forVotes += 1;
      else if (Number(args.choice) === 0) prop.againstVotes += 1;
      else prop.abstainVotes += 1;
      break;
    }

    case 'ProposalFinalized': {
      const party = requirePartyByGovernor(state, event);
      const prop = state.proposals.get(key(party.partyId, args.proposalId));
      if (!prop) throw new ProjectionError('UNKNOWN_PROPOSAL', String(args.proposalId));
      prop.finalized = true;
      prop.succeeded = Boolean(args.succeeded);
      prop.quorumReachedBps = Number(args.quorumReachedBps);
      prop.approvalReachedBps = Number(args.approvalReachedBps);
      break;
    }

    case 'ProposalExecuted': {
      const party = requirePartyByGovernor(state, event);
      const prop = state.proposals.get(key(party.partyId, args.proposalId));
      if (prop) prop.executed = true;
      break;
    }

    case 'RegionCreated':
      state.regions.set(args.regionId, {
        regionId: args.regionId,
        parent: args.parent,
        schemeVersion: Number(args.schemeVersion),
        path: args.path,
        verifiedResidents: 0,
      });
      break;

    case 'ResidencyIssued': {
      const r = state.regions.get(args.regionId);
      if (r) r.verifiedResidents += 1;
      break;
    }

    case 'IssuerRegistered':
      state.issuers.set(args.issuerId, {
        issuerId: args.issuerId,
        tier: Number(args.tier),
        stateOperated: args.stateOperated,
        namespaceId: args.namespaceId,
        active: true,
      });
      break;

    case 'IssuerDeactivated': {
      const i = state.issuers.get(args.issuerId);
      if (i) i.active = false;
      break;
    }

    default:
      // Unknown events are ignored rather than fatal: a client running against a newer
      // contract must degrade, not crash. Every event that MATTERS is handled above, and
      // the differential replay test asserts that set is complete.
      break;
  }

  return state;
}

function requireParty(state, event) {
  for (const p of state.parties.values()) {
    if (eqAddr(p.address, event.address)) return p;
  }
  throw new ProjectionError('UNKNOWN_PARTY', `no party at ${event.address}`);
}

function requirePartyByGovernor(state, event) {
  for (const p of state.parties.values()) {
    if (eqAddr(p.governor, event.address)) return p;
  }
  throw new ProjectionError('UNKNOWN_GOVERNOR', `no governor at ${event.address}`);
}

const eqAddr = (a, b) => typeof a === 'string' && typeof b === 'string' && a.toLowerCase() === b.toLowerCase();

/** Fold a whole log. Returns fresh state; the input log is not mutated. */
export function project(events, state = emptyState()) {
  for (const e of events) applyEvent(state, e);
  return state;
}

/**
 * Petition view for a list screen. Uses the shared reference implementation for the
 * outcome so the indexer and the client can never disagree about whether a threshold was met.
 */
export function petitionView(state, petitionId, now) {
  const p = state.petitions.get(petitionId);
  if (!p) return null;
  const outcome = petitionOutcome({
    endorsements: p.endorsements,
    required: p.requiredEndorsements,
    opensAt: p.opensAt,
    closesAt: p.closesAt,
    now,
  });
  return {
    ...p,
    ...outcome,
    percent: p.requiredEndorsements === 0 ? 0 : Math.min(100, (p.endorsements / p.requiredEndorsements) * 100),
    /** @see AUTHORITATIVE_FIELDS — the client must re-check these on-chain before acting. */
    unverified: ['endorsements', 'requiredEndorsements'],
  };
}

/**
 * Deterministic fingerprint of the projection, so two operators can prove they agree without
 * exchanging the whole state. A mismatch is the signal that one of them is lying or broken.
 */
export function fingerprint(state) {
  const canonical = JSON.stringify({
    lastBlock: state.lastBlock,
    petitions: [...state.petitions.entries()].sort(byKey),
    parties: [...state.parties.entries()].sort(byKey),
    proposals: [...state.proposals.entries()].sort(byKey),
    regions: [...state.regions.entries()].sort(byKey),
    issuers: [...state.issuers.entries()].sort(byKey),
  });
  // FNV-1a — a checksum, not a security hash; divergence detection only.
  let h = 0x811c9dc5;
  for (let i = 0; i < canonical.length; i++) {
    h ^= canonical.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

const byKey = (a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
