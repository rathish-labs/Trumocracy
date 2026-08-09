'use client';

/**
 * The vote confirmation screen — a security surface, not a receipt (ADR-012 §7, DES-063).
 *
 * "The screen must be safe to show to someone standing over your shoulder."
 *
 * Three rules, all of them structural rather than stylistic:
 *
 *  1. **It never renders the choice.** The `choice` prop is accepted because the caller
 *     naturally has one, and then deliberately not used to render anything. If it were
 *     rendered — even as a colour, an icon, or a `data-` attribute — the screen becomes a
 *     receipt, and a receipt is the thing that makes a bribe enforceable and a threat
 *     verifiable (ADR-006). `VoteConfirmation.test.tsx` asserts the markup is byte-identical
 *     for all three choices, so a future "helpful" addition fails the build.
 *  2. **"Change my vote" is available for the whole voting window**, not for a grace
 *     period. A coerced voter needs the door to still be open after the coercer leaves.
 *  3. **The wording never implies a prior vote can be inspected.** "Change my vote" leads
 *     to a fresh ballot that shows no previous selection.
 */
import { useT } from '@/i18n/LocaleProvider';

export interface VoteConfirmationProps {
  /**
   * Accepted, never rendered. Present so the type system records that this component is
   * given the choice and chooses not to use it.
   */
  choice?: 'for' | 'against' | 'abstain';
  /** Preformatted close time. A string, so the screen cannot vary by timezone or clock. */
  closesAtLabel: string;
  /** Voting is still open — the change-my-vote path stays live for the entire window. */
  votingOpen?: boolean;
  onChangeVote?: () => void;
  onDone?: () => void;
}

export function VoteConfirmation({
  choice: _choiceIsDeliberatelyUnused,
  closesAtLabel,
  votingOpen = true,
  onChangeVote,
  onDone,
}: VoteConfirmationProps) {
  const t = useT();

  return (
    <section aria-labelledby="vote-confirm-title" className="card" data-testid="vote-confirmation">
      <h1 id="vote-confirm-title">{t.vote.confirmTitle}</h1>

      {/* No choice, no tick, no colour, no "you chose". Identical for everyone. */}
      <p data-testid="vote-confirm-body">{t.vote.confirmBody}</p>

      {votingOpen ? (
        <div className="actions">
          <p id="change-vote-help" className="help">
            {t.vote.changeVoteHelp} {t.vote.changeVoteWindow(closesAtLabel)}
          </p>
          <button
            type="button"
            className="button button--secondary"
            onClick={onChangeVote}
            aria-describedby="change-vote-help"
            data-testid="change-vote"
          >
            {t.vote.changeVote}
          </button>
        </div>
      ) : null}

      <button type="button" className="button" onClick={onDone} data-testid="vote-done">
        {t.vote.done}
      </button>
    </section>
  );
}
