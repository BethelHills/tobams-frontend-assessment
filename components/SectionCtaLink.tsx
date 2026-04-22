import type { ReactNode } from "react";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7b1b5d] focus-visible:ring-offset-2";

type SectionCtaLinkProps = {
  href: string;
  children: ReactNode;
};

export default function SectionCtaLink({ href, children }: SectionCtaLinkProps) {
  return (
    <div className="mt-4 flex justify-center px-2 md:mt-5">
      <a
        href={href}
        className={`inline-flex min-h-11 items-center justify-center rounded bg-[#6f1c57] px-5 py-2.5 text-center text-xs font-medium text-white shadow-sm md:text-sm ${focusRing}`}
      >
        {children}
      </a>
    </div>
  );
}
