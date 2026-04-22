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
  { label: "LinkedIn", value: "in", href: "https://www.linkedin.com" },
  { label: "Instagram", value: "◎", href: "https://www.instagram.com" },
  { label: "X", value: "X", href: "https://x.com" },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-[#2a001a] text-white" aria-label="Tobams Group">
      <section className="border-b border-white/60">
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
            className="inline-flex min-h-[56px] items-center justify-center rounded-[6px] bg-[#7c1a5c] px-8 text-[20px] font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2a001a] lg:min-h-[52px] lg:min-w-[160px] lg:px-[28px] lg:text-[18px]"
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
                className="inline-flex min-h-[54px] items-center rounded-md outline-none ring-offset-2 ring-offset-[#2a001a] focus-visible:ring-2 focus-visible:ring-white"
              >
                <Image
                  src={`/images/${encodeURIComponent(HEADER_LOGO)}`}
                  alt="Tobams Group"
                  width={166}
                  height={64}
                  className="h-8 w-auto max-w-[min(11rem,70vw)] object-contain object-left sm:h-9 md:h-10"
                  sizes="(max-width: 640px) 140px, 166px"
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
                    className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white text-[24px] font-medium text-[#1b1b1b] transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2a001a]"
                  >
                    {item.value}
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
