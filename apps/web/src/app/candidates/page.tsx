'use client';

/**
 * Candidate selection — SCR-15/16/22/23 (FR-036/037/038, FR-039, FR-065, FR-066, FR-067,
 * FR-081, FR-085, FR-123).
 *
 * Wired to CandidateService over InMemoryCandidateStore, reading membership from the same
 * PartyCreationService pattern the parties directory uses, a stub-backed
 * ConventionalEligibilityVerifier for the two counting actions on this surface — standing
 * (FR-123(c), Doc 03 §10.13.2(c)) and the post-debate vote (FR-123(b)) — and the real
 * ConventionalBallotService for the vote itself (DES-096).
 *
 * IS_INSECURE_MOCK = true throughout: every store is in-memory and the verifier's vendor
 * seams are stubs (vendors un-procured, gated on CON-015). The CI promotion gate blocks
 * all of it past devnet. The demo visitor's credential store is EMPTY on purpose — the
 * visitor is open-tier, so trying to stand honestly shows the FR-131 clause (d) refusal.
 * No control on this page can mark the visitor ID-verified; building one would fake the
 * enrolment flow this repo has deliberately not built.
 *
 * A neighbour's candidacy is seeded through consent, endorsements and all three debates so
 * the feedback and post-debate-vote surfaces have something real to act on.
 *
 * PrivacyStatus is NOT rendered: no authenticated session exists in the demo, so the
 * DES-094 clause 1 self-view contract would return null (Doc 06 §7 #18).
 *
 * Ship-dark: renders only when the `elections` flag is on (dev/staging on; prod off).
 */
import { CandidateSelection } from '@/components/CandidateSelection';
import { FLAG, useFlag } from '@/config/flags';
import { useT } from '@/i18n/LocaleProvider';
import {
  CandidateService,
  ConventionalBallotService,
  ConventionalEligibilityVerifier,
  InMemoryCandidateStore,
  InMemoryPartyStore,
  PartyCreationService,
  StubIdDocumentChecker,
  StubPhoneVerifier,
  type IdDocumentResult,
} from '@trumocracy/sdk';
import {
  NON_VIOLENCE_CLAUSE,
  NOMINATION_ENDORSEMENTS_MIN,
  NOMINATION_MATURATION_SECONDS,
  PILLARS,
  REQUIRED_DEBATE_TOPICS,
  petitionThreshold,
} from '@trumocracy/protocol';

// ─── Demo seed (module-level singletons; pattern matches parties/ and proposals/) ────

const DAY = 86_400;
const NOW = Math.floor(Date.now() / 1000);
const WARD = 'IN/KA/BLR/BLR-S/W-152';
const DEMO_MEMBER = 'demo-member';
const NEIGHBOUR = 'demo-neighbour';
const INCUMBENT = 'demo-incumbent';

// The clock is injected so seeded members can be MATURED: they "joined" before the
// maturation period elapsed. No wall-clock reads inside the services.
let _clockNow = NOW;
const _clock = () => _clockNow;

const _partyStore = new InMemoryPartyStore();
const _parties = new PartyCreationService(_partyStore, _clock);
const _candidateStore = new InMemoryCandidateStore();
const _candidates = new CandidateService(_candidateStore, _parties, _clock);

/** DES-100 allowlist rows for the seeded neighbours; the VISITOR's row is deliberately absent. */
const _credentialStore = new Map<string, IdDocumentResult>();
const _demoVerifier = new ConventionalEligibilityVerifier({
  phoneVerifier: new StubPhoneVerifier(),
  idDocumentChecker: new StubIdDocumentChecker(),
  credentialStore: _credentialStore,
});
const _ballots = new ConventionalBallotService({ eligibilityVerifier: _demoVerifier });

const seedPillars = (name: string) =>
  Object.fromEntries(
    PILLARS.map((p) => [
      p,
      // MIN_PILLAR_CHARS is 280. The first wording of this seed ("…in enough detail to judge a
      // programme.") ×3 came to 282 for "finance" and BELOW 280 for shorter pillar names, so the
      // page threw on import. This is the proposals-page wording, which clears 280 at ×3 for every
      // pillar; ×4 is kept as margin, not necessity.
      `${name} sets out its position on ${p} here, in enough detail that a reader can judge a full programme rather than a slogan. `.repeat(4),
    ]),
  );

function seedParty(): string {
  const draft = {
    name: 'Commons Forward',
    jurisdiction: 'IN/KA',
    pillars: seedPillars('Commons Forward'),
    emblem: 'CF',
    charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
    jurisdictionPopulation: 1_000,
    jurisdictionVerified: 1_000,
  };
  const { draftId } = _parties.createDraft(draft, 'demo-drafter');
  const { petitionId } = _parties.publishDraft(draftId);
  _partyStore.updatePetition(petitionId, {
    endorsements: petitionThreshold({ eligiblePopulation: 1_000, verifiedResidents: 1_000 }),
  });
  return _parties.activateParty(petitionId).partyId;
}

/** Join at a time that leaves the member matured today. */
function joinMatured(partyId: string, who: string) {
  _clockNow = NOW - NOMINATION_MATURATION_SECONDS - DAY;
  _parties.joinParty(partyId, who);
  _clockNow = NOW;
}

function verify(who: string) {
  _credentialStore.set(who, {
    id_verified_flag: true,
    age_verified: true,
    issuing_region: 'IN',
    subject_id_hash: `demo-hmac-${who}`,
    verified_at: '2026-08-24T10:00:00.000Z',
  });
}

const _partyId = seedParty();
joinMatured(_partyId, DEMO_MEMBER); // matured, but OPEN-TIER: no credential row on purpose
joinMatured(_partyId, NEIGHBOUR);
verify(NEIGHBOUR);
joinMatured(_partyId, INCUMBENT);
_candidates.recordOfficeHolder('ward-rep', INCUMBENT); // FR-083 record; confers nothing (FR-067)

const DEMO_ENDORSERS = Array.from({ length: NOMINATION_ENDORSEMENTS_MIN + 1 }, (_, i) => `demo-neighbour-${i}`);
for (const who of DEMO_ENDORSERS) joinMatured(_partyId, who);

const { electionId: _electionId } = _candidates.openElection(_partyId, {
  officeId: 'ward-rep',
  officeRegion: WARD,
  nominationClosesAt: NOW + 14 * DAY,
  ballotLocksAt: NOW + 45 * DAY,
});

// The neighbour stands, consents, is backed, and completes all three debates, so the
// visitor has a real candidacy to signal on and vote on.
const { candidacyId: _neighbourCandidacyId } = _candidates.nominate(
  _electionId,
  NEIGHBOUR,
  { residencyRegion: WARD, disclosures: { legalName: 'Neighbour Example' } },
  _demoVerifier,
);
_candidates.recordConsent(_neighbourCandidacyId, NEIGHBOUR, {
  identityBecomesPublic: true,
  irreversibleForTerm: true,
  revocableOnlyByWithdrawalBeforeLock: true,
});
for (const who of DEMO_ENDORSERS.slice(0, NOMINATION_ENDORSEMENTS_MIN)) {
  _candidates.endorseNomination(_neighbourCandidacyId, who, { residencyRegion: WARD });
}
_candidates.scheduleDebates(_neighbourCandidacyId);
for (const topic of REQUIRED_DEBATE_TOPICS) {
  _candidates.recordDebate(_neighbourCandidacyId, topic, { attended: true, contentRef: `demo-${topic.toLowerCase()}` });
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CandidatesPage() {
  const t = useT();
  const electionsOn = useFlag(FLAG.ELECTIONS);

  if (!electionsOn) {
    return <p>{t.errors.flagOff}</p>;
  }

  return (
    <CandidateSelection
      service={_candidates}
      verifier={_demoVerifier}
      ballots={_ballots}
      electionId={_electionId}
      memberPseudonym={DEMO_MEMBER}
      residencyRegion={WARD}
      neighbourCandidacyId={_neighbourCandidacyId}
      demoEndorsers={DEMO_ENDORSERS}
    />
  );
}
