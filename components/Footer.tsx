import Image from "next/image";

const HEADER_LOGO = "Seecondary Logo copy 2.png";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  items: FooterLink[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-[26px] font-medium leading-[1.25] text-white lg:text-[18px]">
        {title}
      </h3>
      <ul className="mt-5 space-y-4 lg:mt-[18px] lg:space-y-[15px]">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-[18px] leading-[1.45] text-white/90 transition hover:text-white lg:text-[17px]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const whatWeDo: FooterLink[] = [
  { label: "Sustainability Services", href: "#training" },
  { label: "Strategy Planning and Implementation", href: "#training" },
  { label: "Tech Talent Solutions", href: "#consulting" },
  { label: "Training and Development", href: "#training" },
  { label: "IT Consulting Services", href: "#consulting" },
  { label: "Social Impact", href: "#page-top" },
  { label: "Talent Recruitment", href: "#consulting" },
];

const company: FooterLink[] = [
  { label: "About", href: "#page-top" },
  { label: "Jobs", href: "#page-top" },
  { label: "Projects", href: "#page-top" },
  { label: "Our Founder", href: "#page-top" },
  { label: "Business Model", href: "#page-top" },
  { label: "The Team", href: "#page-top" },
  { label: "Contact Us", href: "#contact" },
  { label: "Blog", href: "#page-top" },
  { label: "FAQs", href: "#page-top" },
  { label: "Testimonials", href: "#testimonials" },
];

const solution: FooterLink[] = [
  { label: "Tobams Group Academy", href: "#learning" },
  { label: "Help a Tech Talent", href: "#page-top" },
  { label: "Campus Ambassadors Program", href: "#page-top" },
  { label: "Join Our Platform", href: "#page-top" },
  { label: "Pricing", href: "#contact" },
  { label: "Book a Consultation", href: "#contact" },
  { label: "Join Our Slack Community", href: "#page-top" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" as const },
  { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" as const },
  { label: "X", href: "https://x.com", icon: "x" as const },
];

function FooterSocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  const className = "h-6 w-6 shrink-0 text-[#1b1b1b]";
  switch (name) {
    case "linkedin":
      return (
        <svg aria-hidden className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "instagram":
      return (
        <svg aria-hidden className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "x":
      return (
        <svg aria-hidden className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer
      className="w-full bg-[var(--color-purple-selection-purple)] text-white"
      aria-label="Tobams Group"
    >
      <section className="border-b border-white/60 bg-[var(--color-purple-selection-purple-90)]">
        <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-6 px-4 py-8 sm:px-6 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-[64px] lg:py-[48px]">
          <div>
            <p className="text-[20px] leading-[1.35] text-white/90 lg:text-[18px]">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="mt-3 text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-white md:text-[44px] lg:text-[58px]">
              Let{"'"}s work together to create a difference
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-[56px] items-center justify-center rounded-[6px] bg-[#7c1a5c] px-8 text-[20px] font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-purple-selection-purple-90)] lg:min-h-[52px] lg:min-w-[160px] lg:px-[28px] lg:text-[18px]"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1512px] px-4 py-10 sm:px-6 md:px-10 lg:px-[64px] lg:py-[54px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[390px_1fr_1fr_1fr] lg:gap-[88px]">
            <div>
              <a
                href="#page-top"
                className="inline-flex min-h-[72.61px] items-center rounded-md outline-none ring-offset-2 ring-offset-[var(--color-purple-selection-purple)] focus-visible:ring-2 focus-visible:ring-white"
              >
                <Image
                  src={`/images/${encodeURIComponent(HEADER_LOGO)}`}
                  alt="Tobams Group"
                  width={188}
                  height={73}
                  className="h-[72.61px] w-[188px] object-contain object-left"
                  sizes="188px"
                />
              </a>

              <p className="mt-10 max-w-[340px] text-[18px] leading-[1.6] text-white/90 lg:text-[17px]">
                Tobams Group is an innovative consultancy firm reshaping the
                future of tech talent development in Africa, specializing in
                talent acquisition, internships, and skill development with a
                global perspective.
              </p>

              <div className="mt-8 flex items-center gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white text-[24px] font-medium text-[#1b1b1b] transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-purple-selection-purple)]"
                  >
                    <FooterSocialIcon name={item.icon} />
                  </a>
                ))}
              </div>
            </div>

            <FooterColumn title="What We Do" items={whatWeDo} />
            <FooterColumn title="Company" items={company} />
            <FooterColumn title="Solution" items={solution} />
          </div>

          <div className="mt-12 rounded-[12px] bg-[#24131c] px-5 py-6 md:px-6 md:py-7 lg:mt-[54px] lg:px-[24px] lg:py-[28px]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1.2fr_0.8fr] lg:gap-0">
              <div className="lg:border-r lg:border-white/20 lg:px-0 lg:pr-[26px]">
                <h3 className="text-[24px] font-medium leading-[1.3] text-white lg:text-[18px]">
                  Registered Offices
                </h3>
                <div className="mt-4">
                  <p className="text-[18px] font-medium leading-[1.35] text-[#ff5a73] lg:text-[17px]">
                    United Kingdom
                  </p>
                  <p className="mt-2 text-[18px] leading-[1.6] text-white/95 lg:text-[17px]">
                    07451196 (Registered by Company House)
                  </p>
                  <p className="mt-1 text-[18px] leading-[1.6] text-white/95 lg:text-[17px]">
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    Kingdom, RM1 4QA
                  </p>
                </div>
              </div>

              <div className="lg:border-r lg:border-white/20 lg:px-[26px]">
                <h3 className="text-[24px] font-medium leading-[1.3] text-white lg:text-[18px] lg:opacity-0">
                  Nigeria
                </h3>
                <div className="mt-4 lg:mt-0">
                  <p className="text-[18px] font-medium leading-[1.35] text-[#ff5a73] lg:text-[17px]">
                    Nigeria
                  </p>
                  <p className="mt-2 text-[18px] leading-[1.6] text-white/95 lg:text-[17px]">
                    RC 1048722 (Registered by the Corporate Affairs Commission)
                  </p>
                  <p className="mt-1 text-[18px] leading-[1.6] text-white/95 lg:text-[17px]">
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>

              <div className="lg:pl-[26px]">
                <h3 className="text-[24px] font-medium leading-[1.3] text-white lg:text-[18px]">
                  Contact Information
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="mailto:theteam@tobamsgroup.com"
                    className="flex items-center gap-4 text-[18px] leading-[1.5] text-white/95 transition hover:text-white lg:text-[17px]"
                  >
                    <span aria-hidden="true" className="text-[#ff5a73]">
                      ✉
                    </span>
                    <span>theteam@tobamsgroup.com</span>
                  </a>
                  <a
                    href="tel:+447886600748"
                    className="flex items-center gap-4 text-[18px] leading-[1.5] text-white/95 transition hover:text-white lg:text-[17px]"
                  >
                    <span aria-hidden="true" className="text-[#ff5a73]">
                      ✆
                    </span>
                    <span>+447886600748</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/20 pt-8 lg:mt-[42px] lg:pt-[28px]">
            <div className="flex flex-col gap-4 text-[18px] leading-[1.5] text-white/90 lg:flex-row lg:items-center lg:justify-between lg:text-[16px]">
              <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <a
                  href="#page-top"
                  className="underline underline-offset-4 transition hover:text-white"
                >
                  Terms and Conditions
                </a>
                <a
                  href="#page-top"
                  className="underline underline-offset-4 transition hover:text-white"
                >
                  Privacy Policy
                </a>
                <a
                  href="#page-top"
                  className="underline underline-offset-4 transition hover:text-white"
                >
                  Cookies Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
