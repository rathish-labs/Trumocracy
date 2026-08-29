'use client';

/**
 * Party directory — join / leave / counting demo flow (FR-020/021/022, FR-064,
 * FR-122/FR-123, FR-130, FR-131(d), BR-003, BR-020).
 *
 * Wired to PartyCreationService backed by InMemoryPartyStore, plus a stub-backed
 * ConventionalEligibilityVerifier for the one counting action on this surface
 * (contributing to a party's official strength — FR-123(a), Doc 03 §10.13.2(a)).
 *
 * IS_INSECURE_MOCK = true throughout: the store is in-memory and the verifier's
 * vendor seams are stubs (vendors un-procured, gated on CON-015). Both are
 * blocked past devnet by the CI promotion gate. The demo visitor's credential
 * store is EMPTY on purpose: the demo member is open-tier (phone-verified only),
 * so the counting attempt honestly shows the FR-131 clause (d) disclosure. No
 * control on this page can mark the visitor ID-verified — building that would
 * fake the enrolment flow this repo has deliberately not built.
 *
 * PrivacyStatus is NOT rendered: no authenticated session exists in the demo,
 * so the DES-094 clause 1 self-view contract would return null (Doc 06 §7).
 *
 * Ship-dark: the page renders only when the `party_governance` flag is on.
 */
import { PartyMembership, type PartySummary } from '@/components/PartyMembership';
import { FLAG, useFlag } from '@/config/flags';
import { useT } from '@/i18n/LocaleProvider';
import {
  ConventionalEligibilityVerifier,
  InMemoryPartyStore,
  PartyCreationService,
  StubIdDocumentChecker,
  StubPhoneVerifier,
} from '@trumocracy/sdk';
import { NON_VIOLENCE_CLAUSE, PILLARS, petitionThreshold } from '@trumocracy/protocol';

// ─── Demo seed (module-level singletons; pattern matches petitions/new) ────────

const _demoStore = new InMemoryPartyStore();
const _demoService = new PartyCreationService(_demoStore);

/**
 * Demo verifier: stub vendor seams + EMPTY credential store — the visitor is
 * open-tier. IS_INSECURE_MOCK() = true (stub-backed); blocked past devnet.
 */
const _demoVerifier = new ConventionalEligibilityVerifier({
  phoneVerifier: new StubPhoneVerifier(),
  idDocumentChecker: new StubIdDocumentChecker(),
  credentialStore: new Map(),
});

/** The demo visitor. Production: the authenticated session's pseudonym. */
const DEMO_MEMBER = 'demo-member';

/** Placeholder pillar text long enough to pass the FR-011 substance gate. */
const seedPillars = (name: string) =>
  Object.fromEntries(
    PILLARS.map((p) => [
      p,
      `${name} sets out its position on ${p} here, in enough detail that a reader can judge a full programme rather than a slogan. `.repeat(3),
    ]),
  );

/** Create one ACTIVE demo party through the real service path. */
function seedParty(name: string, emblem: string, legallyRegistered: boolean): PartySummary {
  const draft = {
    name,
    jurisdiction: 'IN/KA',
    pillars: seedPillars(name),
    emblem,
    charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
    jurisdictionPopulation: 1_000,
    jurisdictionVerified: 1_000,
  };
  const { draftId } = _demoService.createDraft(draft, `demo-drafter-${emblem}`);
  const { petitionId } = _demoService.publishDraft(draftId);
  // DEMO SEED: endorsements set directly in the in-memory store so the petition
  // meets its FR-016/FR-018 threshold. Production endorsements come from real
  // endorsement records (DES-097 wiring); nothing here bypasses the service gate —
  // activateParty still computes and enforces the threshold.
  const required = petitionThreshold({
    eligiblePopulation: draft.jurisdictionPopulation,
    verifiedResidents: draft.jurisdictionVerified,
  });
  _demoStore.updatePetition(petitionId, { endorsements: required });
  const { partyId } = _demoService.activateParty(petitionId);
  if (legallyRegistered) {
    _demoService.recordLegalRegistration(partyId, 'demo-registration-evidence');
  }
  return { partyId, name, emblem };
}

const _demoParties: PartySummary[] = [
  seedParty('Commons Forward', 'CF', false),
  seedParty('River Assembly', 'RA', true),
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PartiesPage() {
  const t = useT();
  const partyGovernanceOn = useFlag(FLAG.PARTY_GOVERNANCE);

  if (!partyGovernanceOn) {
    return <p>{t.errors.flagOff}</p>;
  }

  return (
    <>
      <h1>{t.parties.title}</h1>
      <p>{t.parties.lead}</p>
      <PartyMembership
        service={_demoService}
        verifier={_demoVerifier}
        memberPseudonym={DEMO_MEMBER}
        parties={_demoParties}
      />
    </>
  );
}
