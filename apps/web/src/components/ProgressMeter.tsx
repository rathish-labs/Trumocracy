'use client';

/**
 * A progress meter that never relies on colour to say what it means.
 *
 * WCAG 2.2 AA 1.4.1: colour must not be the only carrier of information. So the value is
 * written out as text next to the bar, the bar is a native-semantics `progressbar` with
 * `aria-valuenow`, and the filled portion carries a repeating stripe so it is
 * distinguishable in greyscale and to a colour-blind reader.
 */
export function ProgressMeter({
  percent,
  label,
  valueText,
}: {
  percent: number;
  label: string;
  valueText: string;
}) {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));
  return (
    <div className="meter">
      <div
        className="meter__track"
        role="progressbar"
        aria-label={label}
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={valueText}
        data-testid="progress-meter"
      >
        {/* `inline-size` (not `width`) so the bar grows from the start edge in both LTR
            and RTL without a second stylesheet. */}
        <span className="meter__fill" style={{ inlineSize: `${clamped}%` }} />
      </div>
      <p className="meter__value">{valueText}</p>
    </div>
  );
}
