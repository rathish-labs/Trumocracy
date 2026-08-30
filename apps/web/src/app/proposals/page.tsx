'use client';

/**
 * Proposals & debate — SCR-12 (FR-024, FR-079/080, FR-090, FR-091, FR-092, FR-123).
 *
 * Wired to ProposalService over InMemoryProposalStore, reading membership from the same
 * PartyCreationService pattern the parties directory uses, plus a stub-backed
 * ConventionalEligibilityVerifier for the ONE counting action on this surface —
 * admission to a binding ballot (FR-123(b), Doc 03 §10.13.2(b)).
 *
 * IS_INSECURE_MOCK = true throughout: both stores are in-memory and the verifier's vendor
 * seams are stubs (vendors un-procured, gated on CON-015). The CI promotion gate blocks
 * all of it past devnet. The demo visitor's credential store is EMPTY on purpose — the
 * visitor is open-tier, so the ballot-admission attempt honestly shows the refusal and
 * what the member keeps. No control on this page can mark the visitor ID-verified;
 * building one would fake the enrolment flow this repo has deliberately not built.
 *
 * The demo visitor starts as a Supporter so the FR-080 self-declaration step is visible
 * rather than assumed: a Supporter cannot author, and the page says why and offers the
 * declaration the member makes for themselves.
 *
 * PrivacyStatus is NOT rendered: no authenticated session exists in the demo, so the
 * DES-094 clause 1 self-view contract would return null (Doc 06 §7 #18).
 *
 * Ship-dark: renders only when the `party_governance` flag is on.
 */
import { ProposalsAndDebate } from '@/components/ProposalsAndDebate';
import { FLAG, useFlag } from '@/config/flags';
import { useT } from '@/i18n/LocaleProvider';
import {
  ConventionalEligibilityVerifier,
  InMemoryPartyStore,
  InMemoryProposalStore,
  PartyCreationService,
  ProposalService,
  StubIdDocumentChecker,
  StubPhoneVerifier,
} from '@trumocracy/sdk';
import { NON_VIOLENCE_CLAUSE, PILLARS, petitionThreshold } from '@trumocracy/protocol';

// ─── Demo seed (module-level singletons; pattern matches parties/) ─────────────

const _partyStore = new InMemoryPartyStore();
const _parties = new PartyCreationService(_partyStore);
const _proposalStore = new InMemoryProposalStore();
const _proposals = new ProposalService(_proposalStore, _parties);

/** Stub vendor seams + EMPTY credential store — the visitor is open-tier. */
const _demoVerifier = new ConventionalEligibilityVerifier({
  phoneVerifier: new StubPhoneVerifier(),
  idDocumentChecker: new StubIdDocumentChecker(),
  credentialStore: new Map(),
});

const DEMO_MEMBER = 'demo-member';

const seedPillars = (name: string) =>
  Object.fromEntries(
    PILLARS.map((p) => [
      p,
      `${name} sets out its position on ${p} here, in enough detail that a reader can judge a full programme rather than a slogan. `.repeat(3),
    ]),
  );

/** One ACTIVE demo party, created through the real service path. */
function seedParty(name: string, emblem: string): string {
  const draft = {
    name,
    jurisdiction: 'IN/KA',
    pillars: seedPillars(name),
    emblem,
    charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
    jurisdictionPopulation: 1_000,
    jurisdictionVerified: 1_000,
  };
  const { draftId } = _parties.createDraft(draft, `demo-drafter-${emblem}`);
  const { petitionId } = _parties.publishDraft(draftId);
  _partyStore.updatePetition(petitionId, {
    endorsements: petitionThreshold({
      eligiblePopulation: draft.jurisdictionPopulation,
      verifiedResidents: draft.jurisdictionVerified,
    }),
  });
  const { partyId } = _parties.activateParty(petitionId);
  return partyId;
}

const _demoPartyId = seedParty('Commons Forward', 'CF');
_parties.joinParty(_demoPartyId, DEMO_MEMBER);

// A second member seeds one question so the competing-proposal rule is visible on load:
// the visitor can answer the same question and see both proposals stand equally.
_parties.joinParty(_demoPartyId, 'demo-neighbour');
_proposals.fileProposal(
  _demoPartyId,
  {
    question: 'Should the party meet in the evening so people with jobs can come?',
    title: 'Move meetings to the evening',
    body:
      'Most members work during the day, so daytime meetings quietly exclude them. This proposal ' +
      'moves the regular party meeting to the evening and keeps a written record for anyone who ' +
      'still cannot attend. ',
    tier: 1,
  },
  'demo-neighbour',
  'WORKER',
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProposalsPage() {
  const t = useT();
  const partyGovernanceOn = useFlag(FLAG.PARTY_GOVERNANCE);

  if (!partyGovernanceOn) {
    return <p>{t.errors.flagOff}</p>;
  }

  return (
    <ProposalsAndDebate
      service={_proposals}
      verifier={_demoVerifier}
      partyId={_demoPartyId}
      memberPseudonym={DEMO_MEMBER}
    />
  );
}
