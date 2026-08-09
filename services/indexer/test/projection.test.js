/**
 * UT-0500..UT-0520 — indexer projection.
 *
 * The indexer is allowed to be wrong in only one way: not at all, silently. It may lag, and
 * it may be replaced — but a value it serves that disagrees with the chain, without anyone
 * noticing, is how a citizen gets told their endorsement counted when it did not. These
 * tests pin determinism, ordering strictness and divergence detectability.
 */
import { describe, it, expect } from 'vitest';
import {
  emptyState,
  applyEvent,
  project,
  petitionView,
  fingerprint,
  AUTHORITATIVE_FIELDS,
  ProjectionError,
} from '../src/index.js';

const PARTY = '0xaaaa000000000000000000000000000000000001';
const GOV = '0xbbbb000000000000000000000000000000000002';
const PID = '0xpetition01';
const PARTY_ID = '0xparty01';
const DAY = 86400;
const T0 = 1_760_000_000;

let seq = 0;
const ev = (name, args, address = PARTY, blockNumber = ++seq) => ({
  blockNumber,
  logIndex: 0,
  name,
  args,
  address,
});

function baseLog() {
  seq = 0;
  return [
    ev('RegionCreated', { regionId: '0xIN-KA-BLR', parent: '0xIN-KA', schemeVersion: 1n, path: 'IN/KA/BLR' }, PARTY),
    ev('PetitionOpened', {
      petitionId: PID,
      jurisdiction: '0xIN-KA-BLR',
      name: 'Commons Forward',
      requiredEndorsements: 500n,
      opensAt: BigInt(T0),
      closesAt: BigInt(T0 + 90 * DAY),
      parentPartyId: '0x' + '00'.repeat(32),
    }),
    ev('Endorsed', { petitionId: PID, endorsements: 1n, required: 500n }),
    ev('Endorsed', { petitionId: PID, endorsements: 2n, required: 500n }),
  ];
}

describe('UT-0500 projection basics', () => {
  it('folds a petition log into a readable view', () => {
    const s = project(baseLog());
    const view = petitionView(s, PID, T0 + DAY);
    expect(view.endorsements).toBe(2);
    expect(view.requiredEndorsements).toBe(500);
    expect(view.state).toBe('gathering');
    expect(view.remaining).toBe(498);
  });

  it('UT-0501 marks the fields a client must re-verify on-chain', () => {
    const s = project(baseLog());
    const view = petitionView(s, PID, T0 + DAY);
    expect(view.unverified).toContain('endorsements');
    expect(AUTHORITATIVE_FIELDS).toContain('petition.endorsements');
    expect(AUTHORITATIVE_FIELDS).toContain('proposal.forVotes');
  });

  it('UT-0502 reports a threshold as met the moment it is reached', () => {
    const log = [...baseLog(), ev('Endorsed', { petitionId: PID, endorsements: 500n, required: 500n })];
    const view = petitionView(project(log), PID, T0 + DAY);
    expect(view.met).toBe(true);
    expect(view.state).toBe('threshold_met');
    expect(view.percent).toBe(100);
  });

  it('UT-0503 decrements on withdrawal', () => {
    const log = [...baseLog(), ev('EndorsementWithdrawn', { petitionId: PID, endorsements: 1n })];
    expect(petitionView(project(log), PID, T0 + DAY).endorsements).toBe(1);
  });
});

describe('UT-0510 ordering is strict', () => {
  it('rejects an out-of-order event rather than silently reordering it', () => {
    const s = project(baseLog());
    expect(() =>
      applyEvent(s, { blockNumber: 1, logIndex: 0, name: 'Endorsed', args: { petitionId: PID, endorsements: 99n } }),
    ).toThrow(ProjectionError);
  });

  it('UT-0511 rejects a duplicate delivery of the same log entry', () => {
    const s = emptyState();
    const e = { blockNumber: 5, logIndex: 3, name: 'RegionCreated', args: { regionId: '0xR', parent: '0x0', schemeVersion: 1n, path: 'IN' } };
    applyEvent(s, e);
    expect(() => applyEvent(s, e)).toThrow(/OUT_OF_ORDER/);
  });

  it('accepts two events in the same block in log order', () => {
    const s = emptyState();
    applyEvent(s, { blockNumber: 5, logIndex: 0, name: 'RegionCreated', args: { regionId: '0xA', parent: '0x0', schemeVersion: 1n, path: 'IN' } });
    applyEvent(s, { blockNumber: 5, logIndex: 1, name: 'RegionCreated', args: { regionId: '0xB', parent: '0x0', schemeVersion: 1n, path: 'FR' } });
    expect(s.regions.size).toBe(2);
  });
});

describe('UT-0515 determinism and divergence detection', () => {
  it('produces an identical fingerprint from an identical log', () => {
    expect(fingerprint(project(baseLog()))).toBe(fingerprint(project(baseLog())));
  });

  it('UT-0516 produces a different fingerprint when one event differs', () => {
    const a = fingerprint(project(baseLog()));
    const tampered = baseLog();
    tampered[tampered.length - 1] = ev('Endorsed', { petitionId: PID, endorsements: 3n, required: 500n }, PARTY, 4);
    expect(fingerprint(project(tampered))).not.toBe(a);
  });

  it('UT-0517 tolerates unknown events so a newer contract does not crash an older reader', () => {
    const s = project([...baseLog(), ev('SomeFutureEvent', { whatever: 1n })]);
    expect(s.petitions.get(PID).endorsements).toBe(2);
  });
});

describe('UT-0520 party and proposal projection', () => {
  function activatedLog() {
    return [
      ...baseLog(),
      ev('PartyActivated', { petitionId: PID, partyId: PARTY_ID, party: PARTY, governor: GOV }),
      ev('Joined', { identityCommitment: 1n, at: BigInt(T0), newRoot: 9n, memberCount: 1n }, PARTY),
      ev('Joined', { identityCommitment: 2n, at: BigInt(T0), newRoot: 9n, memberCount: 2n }, PARTY),
      ev(
        'ProposalCreated',
        {
          proposalId: 0n,
          tier: 1n,
          contentHash: '0xdead',
          cid: 'ipfs://p',
          snapshotMembers: 2n,
          surgeAtCreation: false,
          votingEndsAt: BigInt(T0 + 5 * DAY),
          executableAt: BigInt(T0 + 7 * DAY),
        },
        GOV,
      ),
    ];
  }

  it('tracks membership and links a party to its governor', () => {
    const s = project(activatedLog());
    const party = s.parties.get(PARTY_ID);
    expect(party.memberCount).toBe(2);
    expect(party.name).toBe('Commons Forward');
    expect(s.petitions.get(PID).state).toBe('active');
  });

  it('UT-0521 counts each vote as exactly one', () => {
    const log = [
      ...activatedLog(),
      ev('VoteCast', { proposalId: 0n, choice: 1n, nullifier: 11n }, GOV),
      ev('VoteCast', { proposalId: 0n, choice: 1n, nullifier: 12n }, GOV),
      ev('VoteCast', { proposalId: 0n, choice: 0n, nullifier: 13n }, GOV),
      ev('VoteCast', { proposalId: 0n, choice: 2n, nullifier: 14n }, GOV),
    ];
    const prop = project(log).proposals.get(`${PARTY_ID}:0`);
    expect(prop.forVotes).toBe(2);
    expect(prop.againstVotes).toBe(1);
    expect(prop.abstainVotes).toBe(1);
  });

  it('UT-0522 surfaces an anomalous-growth warning rather than hiding it', () => {
    const log = [...activatedLog(), ev('AnomalousGrowth', { fromCount: 30n, toCount: 90n, windowSeconds: 2592000n }, PARTY)];
    const s = project(log);
    expect(s.anomalies).toHaveLength(1);
    expect(s.anomalies[0].toCount).toBe(90);
  });

  it('UT-0523 keeps manifesto history append-only', () => {
    const log = [
      ...activatedLog(),
      ev('ManifestoPublished', { version: 0n, contentHash: '0xa', cid: 'ipfs://v1', changeSummary: 'initial' }, PARTY),
      ev('ManifestoPublished', { version: 1n, contentHash: '0xb', cid: 'ipfs://v2', changeSummary: 'revised healthcare' }, PARTY),
    ];
    const party = project(log).parties.get(PARTY_ID);
    expect(party.manifestoVersions.map((v) => v.cid)).toEqual(['ipfs://v1', 'ipfs://v2']);
  });

  it('UT-0524 refuses an event from an address it does not know', () => {
    const s = project(baseLog());
    expect(() =>
      applyEvent(s, {
        blockNumber: 99,
        logIndex: 0,
        name: 'Joined',
        args: { memberCount: 1n },
        address: '0xdead000000000000000000000000000000000000',
      }),
    ).toThrow(/UNKNOWN_PARTY/);
  });

  it('UT-0525 records no reader, query or IP anywhere in the state shape', () => {
    const s = project(activatedLog());
    const serialized = JSON.stringify(s, (k, v) => (v instanceof Map ? [...v.entries()] : typeof v === 'bigint' ? String(v) : v));
    for (const forbidden of ['ip', 'userAgent', 'reader', 'sessionId', 'query', 'analytics']) {
      expect(serialized.toLowerCase()).not.toContain(`"${forbidden}"`);
    }
  });
});
