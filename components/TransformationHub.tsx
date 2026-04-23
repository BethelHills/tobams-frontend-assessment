import Image from "next/image";

import { mailtoConsult } from "@/lib/siteNav";

const HUB_IMAGE = "Transformation Hub image.png";
const BOLT_ICON = "bolt.png";
const LEARN_MORE_ARROW = "/images/arrow-up-right.png";

const topics = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section
      aria-labelledby="transformation-hub-heading"
      className="scroll-mt-4 w-full bg-[#f6f6f6] py-10 md:py-14 lg:py-[56px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[80px]">
        <div className="rounded-[24px] bg-[#f1d3db] px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-[46px] lg:py-[42px]">
          <p className="text-[18px] italic leading-[1.2] text-[#0f79f2] md:text-[20px] lg:text-[17px]">
            Learning With Our CEO:
          </p>

          <h2
            id="transformation-hub-heading"
            className="mt-3 font-medium italic tracking-[-0.02em] text-[#6c1854] max-md:whitespace-nowrap max-md:leading-[1.3] max-md:text-[clamp(0.8125rem,3.35vw+0.28rem,2.125rem)] md:text-[42px] md:leading-[1.15] lg:mt-[10px] lg:text-[56px]"
          >
            Transformation Hub With Jite Newton
          </h2>

          <p className="mt-6 max-w-[1500px] text-[18px] leading-[1.6] text-[#2b2328] md:text-[19px] lg:mt-[28px] lg:text-[18px]">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event offers
            invaluable insights and strategies for personal and professional
            growth. Whether you{"'"}re seeking to advance your career or enhance
            your leadership skills, the Transformation Hub provides a
            transformative learning experience to unlock your full potential and
            drive success in your endeavours.
          </p>

          <div className="mt-8 rounded-[18px] border-[3px] border-[#ef6842] bg-[#f4dde3] p-4 md:p-5 lg:mt-[30px] lg:p-[14px]">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[676px_minmax(0,1fr)] lg:gap-[36px]">
              <div className="relative min-h-[280px] w-full overflow-hidden rounded-[12px] lg:min-h-[390px]">
                <Image
                  src={`/images/${encodeURIComponent(HUB_IMAGE)}`}
                  alt="Woman standing in front of illuminated digital reflections"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 676px"
                />
              </div>

              <div className="rounded-[14px] bg-[#f6e7eb] px-4 py-4 md:px-5 md:py-5 lg:px-[24px] lg:py-[22px]">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-[16px]">
                  {topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex min-h-[68px] items-center gap-4 rounded-[14px] bg-white px-5 text-[18px] leading-[1.3] text-[#292126] md:text-[19px] lg:min-h-[70px] lg:text-[17px]"
                    >
                      <Image
                        src={`/images/${encodeURIComponent(BOLT_ICON)}`}
                        alt=""
                        width={22}
                        height={22}
                        className="h-[22px] w-[22px] shrink-0 object-contain lg:h-5 lg:w-5"
                      />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={mailtoConsult("Learn more — Transformation Hub")}
                  className="mt-6 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-[4px] bg-[#711053] px-6 text-[18px] font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#711053] focus:ring-offset-2 focus:ring-offset-[#f6e7eb] lg:mt-[28px] lg:min-h-[52px] lg:px-[28px] lg:text-[17px]"
                >
                  <span>Learn More</span>
                  <Image
                    src={LEARN_MORE_ARROW}
                    alt=""
                    width={22}
                    height={22}
                    className="h-6 w-6 shrink-0 lg:h-[22px] lg:w-[22px]"
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
