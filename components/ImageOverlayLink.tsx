type ImageOverlayLinkProps = {
  href: string;
  ariaLabel: string;
  className: string;
};

/**
 * Transparent hit target over a section image; scales with % positioning inside a relative wrapper.
 */
export default function ImageOverlayLink({
  href,
  ariaLabel,
  className,
}: ImageOverlayLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`absolute z-10 bg-transparent transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7b1b5d] ${className}`}
    />
  );
}
