'use client';

/**
 * Candidate selection — SCR-15 (nomination & disclosure consent), SCR-22 (candidate
 * feedback), SCR-23 (debate schedule, attendance & post-debate vote), SCR-16 (ballot).
 *
 * FR-036 self-nomination where you live · FR-037/FR-038/FR-085 the informed-consent crossing
 * · FR-065 feedback scoring · FR-066 three debates · FR-067 the member vote decides and
 * incumbency confers nothing · FR-081 code-checked, nobody approves · FR-123 CANDIDACY and
 * BINDING_VOTE counting gates · FR-131 honesty notice before the binding vote.
 *
 * The honesty properties this surface carries, and the tests that hold them:
 *  - The consent crossing is two-step and states all three FR-038 facts BEFORE confirm,
 *    mirroring the FR-080 Worker declaration — a one-click control would make "before it
 *    is given" unsatisfiable.
 *  - An open-tier visitor who tries to stand gets the FR-131 clause (d) notice — what is
 *    not counted, why, and that everything else about their membership still works — and
 *    is never shown a control that pretends to verify them.
 *  - The post-debate vote is a BINDING vote, so the FR-131 notice precedes its controls.
 *  - Every "(demo)" control is labelled as such: it acts for the visitor where, in the
 *    real product, a neighbour or the debate host acts for themselves (Doc 06 §7).
 *
 * PrivacyStatus is NOT rendered: the demo has no authenticated session, so the DES-094
 * clause 1 self-view contract would return null — the same reason no other page mounts it
 * (Doc 06 §7 #18). Clause 10's `anonContext` is implemented in the component for whichever
 * surface mounts it first.
 */
import { useState } from 'react';
import { ReceiptFreedomBanner } from '@/components/ReceiptFreedomBanner';
import { useT } from '@/i18n/LocaleProvider';
import type { CandidateService, ConventionalBallotService, ConventionalEligibilityVerifier } from '@trumocracy/sdk';
import { CANDIDACY_STAGE, DEBATE_TOPIC, FEEDBACK, POST_DEBATE_CHOICE } from '@trumocracy/protocol';

type ServiceError = Error & { code?: string; endorsements?: number; required?: number };

export interface CandidateSelectionProps {
  service: CandidateService;
  verifier: ConventionalEligibilityVerifier;
  ballots: ConventionalBallotService;
  electionId: string;
  memberPseudonym: string;
  /** The visitor's declared residency (v1: self-declared — no attestation exists). */
  residencyRegion: string;
  /** A neighbour's candidacy the visitor can give feedback on and vote on. */
  neighbourCandidacyId: string;
  /** Seeded matured ward residents who "press their own button" in the demo. */
  demoEndorsers: readonly string[];
}

const fmt = (unix: number) => new Date(unix * 1000).toISOString().slice(0, 10);

export function CandidateSelection(props: CandidateSelectionProps) {
  const { service, electionId, memberPseudonym } = props;
  const t = useT();
  // Re-read the service after every action; the service is the source of truth.
  const [, setTick] = useState(0);
  const refresh = () => setTick((n) => n + 1);

  const election = service.election(electionId);
  const incumbent = service.officeHolder(election.officeId);
  const ballot = service.candidateSet(electionId);

  return (
    <section aria-labelledby="candidates-title">
      <h1 id="candidates-title">{t.candidates.title}</h1>
      <p>{t.candidates.lead}</p>

      <section aria-labelledby="race-title" data-testid="race">
        <h2 id="race-title">{t.candidates.raceTitle(election.officeId)}</h2>
        <p>{t.candidates.raceRegion(election.officeRegion)}</p>
        <h3>{t.candidates.timetableTitle}</h3>
        <ul>
          <li>{t.candidates.nominationsClose(fmt(election.nominationClosesAt))}</li>
          <li>{t.candidates.ballotLocks(fmt(election.ballotLocksAt))}</li>
        </ul>
        <p data-testid="timetable-fixed">{t.candidates.timetableFixed}</p>
        {incumbent && <p data-testid="incumbent-note">{t.candidates.incumbentNote(incumbent)}</p>}
      </section>

      <MyCandidacy {...props} refresh={refresh} />

      <NeighbourCandidacy {...props} refresh={refresh} />

      <section aria-labelledby="ballot-title" data-testid="ballot">
        <h2 id="ballot-title">{t.candidates.ballotTitle}</h2>
        {ballot.length === 0 ? (
          <p data-testid="ballot-empty">{t.candidates.ballotEmpty}</p>
        ) : (
          <ul>
            {ballot.map((c) => (
              <li key={c.candidacyId} data-testid="ballot-entry">
                {c.member}
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="muted" data-testid="demo-note">
        {t.candidates.demoNote}
      </p>
    </section>
  );
}

// ─── The visitor's own candidacy: stand → consent crossing → backing → debates ─────

function MyCandidacy({
  service,
  verifier,
  electionId,
  memberPseudonym,
  residencyRegion,
  demoEndorsers,
  refresh,
}: CandidateSelectionProps & { refresh: () => void }) {
  const t = useT();
  const [candidacyId, setCandidacyId] = useState<string | null>(null);
  const [region, setRegion] = useState(residencyRegion);
  const [legalName, setLegalName] = useState('');
  const [error, setError] = useState<ServiceError | null>(null);
  const [withdrawal, setWithdrawal] = useState<{ disclosuresDestroyed: boolean } | null>(null);
  const [endorserIx, setEndorserIx] = useState(0);

  const stand = () => {
    setError(null);
    try {
      const r = service.nominate(electionId, memberPseudonym, { residencyRegion: region, disclosures: { legalName } }, verifier);
      setCandidacyId(r.candidacyId);
      refresh();
    } catch (e) {
      setError(e as ServiceError);
    }
  };

  if (!candidacyId) {
    return (
      <section aria-labelledby="stand-title" data-testid="stand">
        <h2 id="stand-title">{t.candidates.standTitle}</h2>
        <p>{t.candidates.standLead}</p>
        <label>
          {t.candidates.residencyField}
          <input data-testid="residency" value={region} onChange={(e) => setRegion(e.target.value)} />
        </label>
        <p className="muted" data-testid="residency-help">
          {t.candidates.residencyHelp}
        </p>
        <label>
          {t.candidates.legalNameField}
          <input data-testid="legal-name" value={legalName} onChange={(e) => setLegalName(e.target.value)} />
        </label>
        <p className="muted">{t.candidates.legalNameHelp}</p>
        <button type="button" onClick={stand} data-testid="stand-action">
          {t.candidates.standAction}
        </button>
        {error && <StandError error={error} />}
      </section>
    );
  }

  const c = service.candidacy(candidacyId);
  const election = service.election(electionId);
  const locked = election.locked;

  return (
    <section aria-labelledby="my-candidacy-title" data-testid="my-candidacy" data-stage={c.stage}>
      <h2 id="my-candidacy-title">{t.candidates.standTitle}</h2>

      {c.stage === CANDIDACY_STAGE.NOMINATED && (
        <>
          <p data-testid="stood">{t.candidates.stood}</p>
          <ConsentCrossing
            onConfirm={() => {
              service.recordConsent(candidacyId, memberPseudonym, {
                identityBecomesPublic: true,
                irreversibleForTerm: true,
                revocableOnlyByWithdrawalBeforeLock: true,
              });
              refresh();
            }}
          />
        </>
      )}

      {c.stage !== CANDIDACY_STAGE.NOMINATED && c.stage !== CANDIDACY_STAGE.WITHDRAWN && (
        <p data-testid="consented">{t.candidates.consented}</p>
      )}

      {c.stage === CANDIDACY_STAGE.CONSENTED && (
        <section aria-labelledby="backing-title" data-testid="backing">
          <h3 id="backing-title">{t.candidates.endorsementsTitle}</h3>
          <p data-testid="endorsement-count">{t.candidates.endorsements(c.endorsements, c.endorsementsRequired)}</p>
          {endorserIx < demoEndorsers.length && (
            <button
              type="button"
              data-testid="endorse-demo"
              onClick={() => {
                service.endorseNomination(candidacyId, demoEndorsers[endorserIx], { residencyRegion: election.officeRegion });
                setEndorserIx((i) => i + 1);
                refresh();
              }}
            >
              {t.candidates.endorseDemoAction}
            </button>
          )}
          <p className="muted">{t.candidates.endorseDemoNote}</p>
          {c.endorsements >= c.endorsementsRequired && (
            <button
              type="button"
              data-testid="schedule-debates"
              onClick={() => {
                service.scheduleDebates(candidacyId);
                refresh();
              }}
            >
              {t.candidates.scheduleDebatesAction}
            </button>
          )}
        </section>
      )}

      {(c.stage === CANDIDACY_STAGE.DEBATING || c.stage === CANDIDACY_STAGE.DEBATES_COMPLETE) && (
        <Debates candidacyId={candidacyId} service={service} refresh={refresh} debates={c.debates} stage={c.stage} />
      )}

      {c.stage === CANDIDACY_STAGE.WITHDRAWN && withdrawal && (
        <p data-testid="withdrawn">{withdrawal.disclosuresDestroyed ? t.candidates.withdrawnDestroyed : t.candidates.withdrawnKept}</p>
      )}

      {c.stage !== CANDIDACY_STAGE.WITHDRAWN && c.stage !== CANDIDACY_STAGE.PUBLISHED && c.stage !== CANDIDACY_STAGE.NOT_ADVANCED && !locked && (
        <button
          type="button"
          data-testid="withdraw"
          onClick={() => {
            const r = service.withdraw(candidacyId, memberPseudonym);
            setWithdrawal({ disclosuresDestroyed: r.disclosuresDestroyed });
            refresh();
          }}
        >
          {t.candidates.withdrawAction}
        </button>
      )}

      <section aria-labelledby="trail-title" data-testid="trail">
        <h3 id="trail-title">{t.candidates.trailTitle}</h3>
        <p className="muted">{t.candidates.trailNote}</p>
        <ol>
          {service.trail(candidacyId).map((e) => (
            <li key={String(e.seq)} data-testid="trail-event">
              {String(e.type)}
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}

/** FR-131 clause (d) for an open-tier visitor; plain messages for the other refusals. */
function StandError({ error }: { error: ServiceError }) {
  const t = useT();
  if (error.code === 'NOT_COUNTING_ELIGIBLE') {
    // Reuses the approved clause-(d) notice copy from the parties surface (UT-0869 family).
    return (
      <aside role="note" aria-labelledby="open-tier-title" data-testid="open-tier-notice" className="banner">
        <h3 id="open-tier-title">{t.parties.openTierNoticeTitle}</h3>
        <p>{t.parties.openTierNoticeCurrent}</p>
        <p>{t.parties.openTierNoticeNeedsId}</p>
        <p data-testid="what-does-not-count">{t.parties.openTierNoticeWhatDoesNotCount}</p>
        <p>{t.parties.openTierNoticeHowTo}</p>
        <p data-testid="refused">{t.parties.openTierNoticeRefused}</p>
      </aside>
    );
  }
  const msg =
    error.code === 'OUT_OF_SCOPE' || error.code === 'RESIDENCY_OUTSIDE_JURISDICTION'
      ? t.candidates.outOfScope
      : error.code === 'ALREADY_NOMINATED'
        ? t.candidates.alreadyStanding
        : error.code === 'NOMINATION_WINDOW_CLOSED'
          ? t.candidates.windowClosed
          : error.code === 'NOT_MATURED'
            ? t.candidates.notMatured
            : error.message;
  return (
    <p role="alert" data-testid="stand-error" data-code={error.code}>
      {msg}
    </p>
  );
}

// ─── FR-037/FR-038 the consent crossing — two steps, like the FR-080 Worker declaration ─

function ConsentCrossing({ onConfirm }: { onConfirm: () => void }) {
  const t = useT();
  const [consenting, setConsenting] = useState(false);

  if (consenting) {
    return (
      <aside role="note" aria-labelledby="candidate-consent-title" data-testid="candidate-consent" className="banner">
        <h3 id="candidate-consent-title">{t.candidates.consentTitle}</h3>
        {/* The three FR-038 facts. None may be softened; all precede the confirm control. */}
        <p data-testid="consent-identity-public">{t.candidates.consentIdentityPublic}</p>
        <p data-testid="consent-irreversible">{t.candidates.consentIrreversible}</p>
        <p data-testid="consent-withdraw-only">{t.candidates.consentWithdrawOnly}</p>
        <p data-testid="consent-no-approval">{t.candidates.consentNoApproval}</p>
        <button type="button" onClick={onConfirm} data-testid="confirm-consent">
          {t.candidates.consentConfirm}
        </button>
        <button type="button" onClick={() => setConsenting(false)} data-testid="cancel-consent">
          {t.candidates.consentCancel}
        </button>
      </aside>
    );
  }

  return (
    <aside role="note" aria-labelledby="consent-gate-title" data-testid="consent-gate" className="banner">
      <h3 id="consent-gate-title">{t.candidates.consentGateTitle}</h3>
      <p>{t.candidates.consentGateBody}</p>
      <button type="button" onClick={() => setConsenting(true)} data-testid="open-consent">
        {t.candidates.consentGateAction}
      </button>
    </aside>
  );
}

// ─── FR-066 the three debates ────────────────────────────────────────────────────

function Debates({
  candidacyId,
  service,
  refresh,
  debates,
  stage,
}: {
  candidacyId: string;
  service: CandidateService;
  refresh: () => void;
  debates: { topic: string; attended: boolean | null }[];
  stage: string;
}) {
  const t = useT();
  const topics = Object.values(DEBATE_TOPIC) as (keyof typeof t.candidates.topicNames)[];
  const record = (topic: string, attended: boolean) => {
    service.recordDebate(candidacyId, topic, { attended, contentRef: attended ? `demo-${topic.toLowerCase()}` : null });
    refresh();
  };
  return (
    <section aria-labelledby="debates-title" data-testid="debates">
      <h3 id="debates-title">{t.candidates.debatesTitle}</h3>
      <p>{t.candidates.debatesLead}</p>
      <ul>
        {topics.map((topic) => {
          const d = debates.find((x) => x.topic === topic);
          const status = d?.attended === true ? t.candidates.debateAttended : d?.attended === false ? t.candidates.debateAbsent : t.candidates.debateNotHeld;
          return (
            <li key={topic} data-testid="debate" data-topic={topic} data-attended={String(d?.attended ?? null)}>
              <strong>{t.candidates.topicNames[topic]}</strong> — <span data-testid="debate-status">{status}</span>
              {stage === CANDIDACY_STAGE.DEBATING && d?.attended !== true && (
                <>
                  <button type="button" onClick={() => record(topic, true)} data-testid={`attend-${topic}`}>
                    {t.candidates.attendDemoAction}
                  </button>
                  <button type="button" onClick={() => record(topic, false)} data-testid={`absent-${topic}`}>
                    {t.candidates.absentDemoAction}
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <p className="muted">{t.candidates.debatesDemoNote}</p>
      {stage === CANDIDACY_STAGE.DEBATES_COMPLETE && <p data-testid="debates-complete">{t.candidates.debatesComplete}</p>}
    </section>
  );
}

// ─── A neighbour's candidacy: feedback (FR-065) and the post-debate vote (FR-067) ────

function NeighbourCandidacy({
  service,
  verifier,
  ballots,
  memberPseudonym,
  neighbourCandidacyId,
  refresh,
}: CandidateSelectionProps & { refresh: () => void }) {
  const t = useT();
  const [error, setError] = useState<ServiceError | null>(null);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [voteCast, setVoteCast] = useState(false);
  const c = service.candidacy(neighbourCandidacyId);

  const feedback = (kind: string) => {
    setError(null);
    try {
      service.castFeedback(neighbourCandidacyId, memberPseudonym, kind, verifier);
      setFeedbackGiven(true);
      refresh();
    } catch (e) {
      setError(e as ServiceError);
    }
  };

  const vote = async (choice: string) => {
    setError(null);
    try {
      await service.castPostDebateVote(neighbourCandidacyId, memberPseudonym, choice, verifier, ballots);
      setVoteCast(true);
      refresh();
    } catch (e) {
      setError(e as ServiceError);
    }
  };

  return (
    <section aria-labelledby="neighbour-title" data-testid="neighbour" data-stage={c.stage}>
      <h2 id="neighbour-title">{c.member ?? '—'}</h2>

      <section aria-labelledby="feedback-title" data-testid="feedback">
        <h3 id="feedback-title">{t.candidates.feedbackTitle}</h3>
        <p>{t.candidates.feedbackLead}</p>
        <p data-testid="feedback-score">{t.candidates.feedbackScore(c.feedback.score)}</p>
        <p data-testid="feedback-counts">{t.candidates.feedbackCounts(c.feedback.upvotes, c.feedback.downvotes)}</p>
        {!feedbackGiven ? (
          <>
            <button type="button" onClick={() => feedback(FEEDBACK.UPVOTE)} data-testid="upvote">
              {t.candidates.upvote}
            </button>
            <button type="button" onClick={() => feedback(FEEDBACK.DOWNVOTE)} data-testid="downvote">
              {t.candidates.downvote}
            </button>
          </>
        ) : (
          <p data-testid="feedback-given">{t.candidates.feedbackGiven}</p>
        )}
        {/* FR-131(b): who can see the direction of a feedback signal in v1. */}
        <p className="muted" data-testid="feedback-visibility">
          {t.candidates.feedbackVisibility}
        </p>
      </section>

      <section aria-labelledby="vote-title" data-testid="post-debate-vote">
        <h3 id="vote-title">{t.candidates.voteTitle}</h3>
        <p>{t.candidates.voteLead}</p>
        {c.stage === CANDIDACY_STAGE.DEBATES_COMPLETE && (
          <button
            type="button"
            data-testid="open-vote"
            onClick={() => {
              service.openPostDebateVote(neighbourCandidacyId);
              refresh();
            }}
          >
            {t.candidates.voteOpenAction}
          </button>
        )}
        {c.stage === CANDIDACY_STAGE.VOTE_OPEN && (
          <>
            {/* A binding vote: the FR-131 notice precedes the controls (DES-098). */}
            <ReceiptFreedomBanner />
            {!voteCast ? (
              <>
                <button type="button" onClick={() => void vote(POST_DEBATE_CHOICE.SUITABLE)} data-testid="vote-suitable">
                  {t.candidates.voteSuitable}
                </button>
                <button type="button" onClick={() => void vote(POST_DEBATE_CHOICE.NOT_SUITABLE)} data-testid="vote-not-suitable">
                  {t.candidates.voteNotSuitable}
                </button>
              </>
            ) : (
              <p data-testid="vote-cast">{t.candidates.voteCast}</p>
            )}
            <button
              type="button"
              data-testid="close-vote"
              onClick={() => {
                void service.closePostDebateVote(neighbourCandidacyId, ballots).then(refresh);
              }}
            >
              {t.candidates.voteCloseAction}
            </button>
          </>
        )}
        {c.stage === CANDIDACY_STAGE.PUBLISHED && <p data-testid="vote-result">{t.candidates.votePublished}</p>}
        {c.stage === CANDIDACY_STAGE.NOT_ADVANCED && <p data-testid="vote-result">{t.candidates.voteNotAdvanced}</p>}
        {error && <StandError error={error} />}
      </section>
    </section>
  );
}
