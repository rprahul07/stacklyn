type LogoProps = {
  /** Show the "Stacklyn" wordmark next to the emblem. */
  withWordmark?: boolean;
  /** Classes for the wrapping element (layout, spacing). */
  className?: string;
  /** Classes for the emblem image (sizing). Defaults to a 28px tall mark. */
  imgClassName?: string;
};

/**
 * Stacklyn brand lockup: the interlocking "S" emblem plus optional wordmark.
 * The emblem lives at /logo.png (transparent, 100×125 — 4× its default 28px display height).
 */
export function Logo({
  withWordmark = true,
  className = "",
  imgClassName = "h-7 w-auto",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.png"
        // Decorative next to the wordmark; screen readers would otherwise hear "Stacklyn" twice.
        alt={withWordmark ? "" : "Stacklyn"}
        width={100}
        height={125}
        className={imgClassName}
        loading="eager"
        decoding="async"
      />
      {withWordmark && (
        <span className="font-semibold tracking-tight text-foreground">Stacklyn</span>
      )}
    </span>
  );
}
