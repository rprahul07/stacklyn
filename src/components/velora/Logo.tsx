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
 * The emblem lives at /logo.png (transparent, 200×249).
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
        alt="Stacklyn"
        width={200}
        height={249}
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
