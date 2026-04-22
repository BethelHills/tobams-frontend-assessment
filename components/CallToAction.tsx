import { mailtoConsult } from "@/lib/siteNav";

export default function CallToAction() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="scroll-mt-4 w-full bg-[#f6f6f6] py-10 md:py-14 lg:py-[56px]"
    >
      <h2 id="cta-heading" className="sr-only">
        Start your project with Tobams Group — book a consultation
      </h2>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[184px]">
        <div className="rounded-[12px] bg-[#6b0d4f] px-5 py-10 text-center md:px-8 md:py-12 lg:px-[40px] lg:py-[42px]">
          <div className="mx-auto max-w-[980px]">
            <p className="text-[21px] font-normal leading-[1.55] tracking-[0.01em] text-white md:text-[24px] lg:text-[18px]">
              Don{"'"}t just dream it, let{"'"}s build it!
            </p>
            <p className="mt-3 text-[21px] font-normal leading-[1.55] tracking-[0.01em] text-white md:text-[24px] lg:text-[18px]">
              Click now and start your project with Tobams Group. Your journey to
              digital excellence begins here.
            </p>

            <a
              href={mailtoConsult("Book a consultation")}
              className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-[4px] bg-[#f4f4f4] px-6 text-[20px] font-medium text-[#6b0d4f] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6b0d4f] md:min-h-[58px] md:px-8 md:text-[21px] lg:mt-[28px] lg:min-h-[54px] lg:min-w-[253px] lg:px-[28px] lg:text-[18px]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
