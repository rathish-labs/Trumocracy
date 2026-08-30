'use client';

/**
 * Proposals & debate surface — SCR-12 (FR-024, FR-079/080, FR-090, FR-091, FR-092, FR-123).
 *
 * Renders one party's decision windows: the question, every proposal answering it with
 * EQUAL STANDING, the eight-stage lifecycle, the deliberation record, the ballot-admission
 * gate, and the permanent decision trail.
 *
 * Three honesty properties this surface must not soften:
 *
 *  1. **Competing proposals stand equally (FR-090).** The original and the competing
 *     proposals render in one list, in submission order, with identical affordances. The
 *     "asked the question" tag is provenance, never precedence — no control on this surface
 *     lets one author touch another's proposal, because the service exposes none.
 *  2. **The Worker-tier gate is a disclosure step, not an approval step (FR-024/FR-080).**
 *     When a Supporter cannot author, the copy says why (authorship is public, Supporters
 *     are anonymous) and that they may declare Worker themselves. It must never read as a
 *     judgement on the idea.
 *  3. **Deliberation is open to open-tier members (FR-122).** Only the ballot is gated, and
 *     a refusal there says plainly what the member keeps.
 *
 * The vote step carries the coercion-resistance honesty notice (ReceiptFreedomBanner,
 * FR-031/NFR-003): v1 tallies in the open, so a member is told that before they are asked
 * to act. It is not dismissable.
 */
import { useMemo, useState } from 'react';

import { ReceiptFreedomBanner } from '@/components/ReceiptFreedomBanner';
import { useT } from '@/i18n/LocaleProvider';
import { PARTICIPATION_TIER, PROPOSAL_STAGE, STAGE_ORDER, TIER } from '@trumocracy/protocol';
import type { EligibilityResult, ProposalService } from '@trumocracy/sdk';

type StageName = keyof typeof PROPOSAL_STAGE;

/**
 * Look up a stage's display name. The stage arrives as a plain string from the service,
 * so the lookup is narrowed here rather than asserted at each call site; an unrecognised
 * stage falls back to its own key instead of rendering `undefined`.
 */
const stageLabel = (names: Record<string, string>, stage: string): string =>
  names[stage] ?? stage;

/**
 * The eligibility seam, as this surface uses it: one call, at the ballot step only.
 * Typed structurally so a test double satisfies it without importing the vendor stack.
 */
export interface EligibilityVerifierLike {
  verifyEligibility(memberId: string, regionId: string, scope: string): EligibilityResult;
}

export interface ProposalsProps {
  /** A ProposalService. Typed as the real thing rather than restated structurally — a
   *  hand-copied service shape is one more place for the surface to drift from the SDK. */
  service: ProposalService;
  verifier: EligibilityVerifierLike;
  partyId: string;
  memberPseudonym: string;
}

/** Deterministic re-render key. */
const useTick = () => {
  const [tick, setTick] = useState(0);
  return { tick, bump: () => setTick((n) => n + 1) };
};

export function ProposalsAndDebate({
  service,
  verifier,
  partyId,
  memberPseudonym,
}: ProposalsProps) {
  const t = useT();
  const { tick, bump } = useTick();

  // The demo visitor's declared participation tier (FR-080: self-declared, nobody approves).
  const [participationTier, setParticipationTier] = useState<string>(PARTICIPATION_TIER.SUPPORTER);
  const [openWindowId, setOpenWindowId] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [refusal, setRefusal] = useState<{ code: string; message: string } | null>(null);

  const windows = useMemo(
    () => service.decisionWindows(partyId),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [service, partyId, tick],
  );

  const act = (fn: () => void) => {
    setRefusal(null);
    setNotice(null);
    try {
      fn();
    } catch (e) {
      const err = e as { code?: string; message?: string };
      setRefusal({ code: err.code ?? 'UNKNOWN', message: err.message ?? '' });
    }
    bump();
  };

  return (
    <section aria-labelledby="proposals-title" data-testid="proposals">
      <h2 id="proposals-title">{t.debate.title}</h2>
      <p>{t.debate.lead}</p>

      <TierDeclaration
        tier={participationTier}
        onDeclareWorker={() => setParticipationTier(PARTICIPATION_TIER.WORKER)}
      />

      <FileProposalForm
        canAuthor={participationTier !== PARTICIPATION_TIER.SUPPORTER}
        onFile={(draft) =>
          act(() => {
            service.fileProposal(partyId, draft, memberPseudonym, participationTier);
            setNotice(t.debate.filed);
          })
        }
      />

      {refusal && (
        <p role="alert" data-testid="proposal-refusal" data-code={refusal.code}>
          {refusal.message}
        </p>
      )}
      {notice && (
        <p role="status" data-testid="proposal-notice">
          {notice}
        </p>
      )}

      {windows.length === 0 ? (
        <p data-testid="proposals-empty">{t.debate.empty}</p>
      ) : (
        <ul data-testid="decision-windows">
          {windows.map((w) => (
            <li key={w.windowId}>
              <DecisionWindowCard
                window={w}
                service={service}
                verifier={verifier}
                memberPseudonym={memberPseudonym}
                participationTier={participationTier}
                expanded={openWindowId === w.windowId}
                onToggle={() =>
                  setOpenWindowId(openWindowId === w.windowId ? null : w.windowId)
                }
                act={act}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

// ─── FR-080 Worker self-declaration ───────────────────────────────────────────

function TierDeclaration({
  tier,
  onDeclareWorker,
}: {
  tier: string;
  onDeclareWorker: () => void;
}) {
  const t = useT();
  // FR-080: the declaration is a two-step informed-consent event. Step 1 explains why the
  // tier exists; step 2 states what the member is about to accept and asks them to confirm.
  // A one-click control would make "before a Worker declaration is confirmed the UI MUST
  // state…" unsatisfiable — there would be no "before".
  const [consenting, setConsenting] = useState(false);

  if (tier !== PARTICIPATION_TIER.SUPPORTER) {
    return (
      <p data-testid="tier-state" data-tier={tier}>
        {t.debate.workerGateHow}
      </p>
    );
  }

  if (consenting) {
    return (
      <aside
        role="note"
        aria-labelledby="worker-consent-title"
        data-testid="worker-consent"
        className="banner"
      >
        <h3 id="worker-consent-title">{t.debate.workerConsentTitle}</h3>
        {/* Both clauses are required by FR-080 and neither may be softened. */}
        <p data-testid="consent-permanent">{t.debate.workerConsentPermanent}</p>
        <p data-testid="consent-public-record">{t.debate.workerConsentPublicRecord}</p>
        <p data-testid="consent-no-approval">{t.debate.workerConsentNoApproval}</p>
        <button type="button" onClick={onDeclareWorker} data-testid="confirm-worker">
          {t.debate.workerConsentConfirm}
        </button>
        <button type="button" onClick={() => setConsenting(false)} data-testid="cancel-worker">
          {t.debate.workerConsentCancel}
        </button>
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-labelledby="worker-gate-title"
      data-testid="worker-gate"
      className="banner"
    >
      <h3 id="worker-gate-title">{t.debate.workerGateTitle}</h3>
      <p>{t.debate.workerGateBody}</p>
      <p>{t.debate.workerGateHow}</p>
      {/* The gate must never read as a judgement on the proposal. */}
      <p data-testid="worker-gate-not-judgement">{t.debate.workerGateNotJudgement}</p>
      <button type="button" onClick={() => setConsenting(true)} data-testid="declare-worker">
        {t.debate.workerGateAction}
      </button>
    </aside>
  );
}

// ─── FR-024 filing ────────────────────────────────────────────────────────────

function FileProposalForm({
  canAuthor,
  onFile,
}: {
  canAuthor: boolean;
  onFile: (draft: { question: string; title: string; body: string; tier: number }) => void;
}) {
  const t = useT();
  const [question, setQuestion] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  if (!canAuthor) return null;

  return (
    <form
      data-testid="file-proposal"
      onSubmit={(e) => {
        e.preventDefault();
        onFile({ question, title, body, tier: TIER.POLICY });
      }}
    >
      <h3>{t.debate.fileTitle}</h3>
      <p>{t.debate.fileLead}</p>

      <label htmlFor="proposal-question">{t.debate.questionField}</label>
      <input
        id="proposal-question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        aria-describedby="proposal-question-help"
      />
      <p id="proposal-question-help">{t.debate.questionHelp}</p>

      <label htmlFor="proposal-title">{t.debate.titleField}</label>
      <input id="proposal-title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="proposal-body">{t.debate.bodyField}</label>
      <textarea id="proposal-body" value={body} onChange={(e) => setBody(e.target.value)} />

      <button type="submit" data-testid="file-proposal-submit">
        {t.debate.fileConfirm}
      </button>
    </form>
  );
}

// ─── One decision window ──────────────────────────────────────────────────────

function DecisionWindowCard({
  window: w,
  service,
  verifier,
  memberPseudonym,
  participationTier,
  expanded,
  onToggle,
  act,
}: {
  window: { windowId: string; question: string; stage: string; proposalCount: number };
  service: ProposalsProps['service'];
  verifier: EligibilityVerifierLike;
  memberPseudonym: string;
  participationTier: string;
  expanded: boolean;
  onToggle: () => void;
  act: (fn: () => void) => void;
}) {
  const t = useT();
  const proposals = service.proposalsInWindow(w.windowId);
  const stageKey = w.stage as StageName;

  return (
    <article data-testid="decision-window" data-window-id={w.windowId} data-stage={w.stage}>
      <h3>{w.question}</h3>
      <p data-testid="window-summary">
        {t.debate.proposalCount(w.proposalCount)} · {t.debate.windowStage}:{' '}
        <span data-testid="window-stage-name">{stageLabel(t.debate.stageNames, w.stage)}</span>
      </p>

      <StageTrack current={w.stage} />

      {/* FR-090 — every proposal in one list, equal affordances. */}
      <p>{t.debate.competingLead}</p>
      <ol data-testid="proposal-list">
        {proposals.map((p) => (
          <li key={String(p.id)} data-testid="proposal" data-proposal-id={String(p.id)}>
            <h4>{String(p.title)}</h4>
            <p data-testid="proposal-author">
              {t.debate.byAuthor(String(p.authorPseudonym))}
            </p>
            <p data-testid="proposal-provenance">
              {p.isOriginal ? t.debate.originalTag : t.debate.competingTag}
            </p>
            <p>{String(p.body)}</p>
          </li>
        ))}
      </ol>

      <button type="button" onClick={onToggle} data-testid="toggle-window">
        {expanded ? t.debate.trailTitle : t.debate.discussionTitle}
      </button>

      {expanded && (
        <>
          <Deliberation
            windowId={w.windowId}
            stage={w.stage}
            service={service}
            memberPseudonym={memberPseudonym}
            participationTier={participationTier}
            act={act}
          />
          <BallotStep
            windowId={w.windowId}
            stage={w.stage}
            service={service}
            verifier={verifier}
            memberPseudonym={memberPseudonym}
            act={act}
          />
          <DecisionTrail windowId={w.windowId} service={service} />
        </>
      )}

      {/* Demo control: advance the lifecycle. Production: transitions run on the
          published timeline. There is deliberately no "skip to" control — the service
          exposes none, so this button can only ever move one step. */}
      <button
        type="button"
        data-testid="advance-stage"
        onClick={() => act(() => service.advanceStage(w.windowId))}
      >
        {stageLabel(t.debate.stageNames, w.stage)} →
      </button>
    </article>
  );
}

// ─── FR-091 lifecycle ─────────────────────────────────────────────────────────

function StageTrack({ current }: { current: string }) {
  const t = useT();
  const currentIndex = (STAGE_ORDER as readonly string[]).indexOf(current);

  return (
    <>
      <p>{t.debate.stageLead}</p>
      <ol data-testid="stage-track">
        {(STAGE_ORDER as readonly string[]).map((stage: string, i: number) => {
          const state = i < currentIndex ? 'done' : i === currentIndex ? 'now' : 'to-come';
          return (
            <li key={stage} data-testid="stage" data-stage={stage} data-state={state}>
              <span>{stageLabel(t.debate.stageNames, stage)}</span>{' '}
              <span data-testid="stage-state">
                {state === 'done'
                  ? t.debate.stageDone
                  : state === 'now'
                    ? t.debate.stageNow
                    : t.debate.stageToCome}
              </span>
            </li>
          );
        })}
      </ol>
    </>
  );
}

// ─── FR-091 deliberation ──────────────────────────────────────────────────────

function Deliberation({
  windowId,
  stage,
  service,
  memberPseudonym,
  participationTier,
  act,
}: {
  windowId: string;
  stage: string;
  service: ProposalsProps['service'];
  memberPseudonym: string;
  participationTier: string;
  act: (fn: () => void) => void;
}) {
  const t = useT();
  const [text, setText] = useState('');
  const records = service.deliberation(windowId);
  const status = service.participationStatus(windowId, memberPseudonym, participationTier);

  return (
    <section aria-labelledby={`discussion-${windowId}`} data-testid="deliberation">
      <h4 id={`discussion-${windowId}`}>{t.debate.discussionTitle}</h4>
      <p>{t.debate.discussionLead}</p>
      {/* FR-122: deliberation is open to open-tier members. Say so explicitly. */}
      <p data-testid="discussion-open-to-all">{t.debate.discussionOpenToAll}</p>

      {records.length === 0 ? (
        <p data-testid="discussion-empty">{t.debate.discussionEmpty}</p>
      ) : (
        <ul data-testid="discussion-records">
          {records.map((r) => (
            <li key={String(r.id)} data-testid="discussion-record">
              <span data-testid="record-author">{String(r.authorPseudonym)}</span>
              <p>{String(r.text)}</p>
            </li>
          ))}
        </ul>
      )}

      {status.mayDeliberate ? (
        <form
          data-testid="deliberation-form"
          onSubmit={(e) => {
            e.preventDefault();
            act(() => service.postDeliberation(windowId, memberPseudonym, text));
            setText('');
          }}
        >
          <label htmlFor={`say-${windowId}`}>{t.debate.discussionField}</label>
          <textarea id={`say-${windowId}`} value={text} onChange={(e) => setText(e.target.value)} />
          <button type="submit" data-testid="post-deliberation">
            {t.debate.discussionSend}
          </button>
        </form>
      ) : (
        <p data-testid="discussion-closed">{t.debate.discussionClosed}</p>
      )}
    </section>
  );
}

// ─── FR-123 ballot admission ──────────────────────────────────────────────────

function BallotStep({
  windowId,
  stage,
  service,
  verifier,
  memberPseudonym,
  act,
}: {
  windowId: string;
  stage: string;
  service: ProposalsProps['service'];
  verifier: EligibilityVerifierLike;
  memberPseudonym: string;
  act: (fn: () => void) => void;
}) {
  const t = useT();
  const atVote = stage === PROPOSAL_STAGE.VOTE;
  const status = service.participationStatus(windowId, memberPseudonym);

  return (
    <section aria-labelledby={`ballot-${windowId}`} data-testid="ballot-step">
      <h4 id={`ballot-${windowId}`}>{t.debate.ballotTitle}</h4>

      {!atVote ? (
        <p data-testid="ballot-not-open">{t.debate.ballotNotOpen}</p>
      ) : (
        <>
          {/* The vote step carries the coercion-resistance honesty notice BEFORE the
              member is asked to act (FR-031/NFR-003). Not dismissable. */}
          <ReceiptFreedomBanner />
          <p>{t.debate.ballotLead}</p>
          {status.admittedToBallot ? (
            <p data-testid="ballot-admitted">{t.debate.ballotAdmitted}</p>
          ) : (
            <button
              type="button"
              data-testid="check-ballot"
              onClick={() => act(() => service.admitToBallot(windowId, memberPseudonym, verifier))}
            >
              {t.debate.ballotCheck}
            </button>
          )}
        </>
      )}
    </section>
  );
}

// ─── FR-092 decision trail ────────────────────────────────────────────────────

function DecisionTrail({
  windowId,
  service,
}: {
  windowId: string;
  service: ProposalsProps['service'];
}) {
  const t = useT();
  const trail = service.decisionTrail(windowId);

  return (
    <section aria-labelledby={`trail-${windowId}`} data-testid="decision-trail">
      <h4 id={`trail-${windowId}`}>{t.debate.trailTitle}</h4>
      <p>{t.debate.trailLead}</p>
      <ol data-testid="trail-events">
        {trail.map((e, i) => (
          <li key={`${String(e.type)}-${i}`} data-testid="trail-event" data-type={String(e.type)}>
            {t.debate.trailEvents[String(e.type) as keyof typeof t.debate.trailEvents] ??
              String(e.type)}
          </li>
        ))}
      </ol>
      {/* v1 honesty: the trail is ours, not yet independently checkable (FR-092 partial). */}
      <p data-testid="trail-v1-note">{t.debate.trailV1Note}</p>
    </section>
  );
}
