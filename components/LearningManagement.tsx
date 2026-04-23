import Image from "next/image";

import LearnMoreArrowIcon from "@/components/LearnMoreArrowIcon";
import { mailtoConsult } from "@/lib/siteNav";

const LMS_IMAGE = "LMS image.png";

export default function LearningManagement() {
  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
  ];

  return (
    <section
      id="learning"
      aria-labelledby="lms-heading"
      className="scroll-mt-4 w-full bg-[#ede7eb] py-10 md:py-14 lg:py-[52px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[66px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[560px_minmax(0,1fr)] lg:items-start lg:gap-[48px]">
          <div className="@container order-1 w-full min-w-0 lg:order-none lg:col-start-2 lg:row-start-1">
            <h2
              id="lms-heading"
              className="w-full max-w-full text-center text-[34px] font-normal leading-[1.18] tracking-[-0.02em] text-[#70104f] md:text-[42px] lg:text-left lg:text-[clamp(1.5rem,6cqw+0.5rem,3.625rem)] lg:whitespace-nowrap"
            >
              Learning Management System
            </h2>
          </div>

          <div className="order-2 mx-auto w-full max-w-[617px] lg:order-none lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-[560px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-full">
              <Image
                src={`/images/${encodeURIComponent(LMS_IMAGE)}`}
                alt="TG Academy — learning management and professional development"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) min(100vw, 617px), 560px"
              />
            </div>
          </div>

          <div className="order-3 flex w-full min-w-0 flex-col lg:order-none lg:col-start-2 lg:row-start-2 lg:w-full">
            <div className="w-full min-w-0 rounded-[10px] bg-[#dccfd7] px-5 py-5 md:px-7 md:py-7 lg:px-[22px] lg:py-[28px]">
              <p className="text-[18px] leading-[1.62] text-[#322a31] md:text-[19px] lg:text-[18px]">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest programming languages and
                development frameworks to soft skills training in leadership,
                effective communication and project management, TG Academy offers
                a wide range of courses to cater to diverse learning needs. With
                accessible and interactive learning materials, individuals can
                enhance their skills and stay ahead in today{"'"}s competitive
                tech landscape.
              </p>

              <p className="mt-7 text-[20px] font-semibold leading-[1.3] text-[#6e174f] lg:mt-[24px] lg:text-[18px]">
                Some of our courses include:
              </p>

              <ul className="mt-5 grid w-full min-w-0 grid-cols-1 gap-x-5 gap-y-3 text-[18px] leading-[1.4] text-[#322a31] sm:grid-cols-2 lg:mt-[15px] lg:grid-cols-3 lg:gap-x-5 lg:gap-y-[13px] lg:text-[17px]">
                {courses.map((course) => (
                  <li
                    key={course}
                    className="flex min-w-0 items-start gap-3 lg:items-center"
                  >
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#1c151a] lg:mt-0" />
                    <span className="min-w-0 max-lg:whitespace-normal lg:whitespace-nowrap">
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={mailtoConsult("Learn more — TG Academy")}
              className="mt-7 inline-flex min-h-[50px] w-fit items-center justify-center gap-3 rounded-[4px] bg-[#6f0f50] px-6 text-[18px] font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#6f0f50] focus:ring-offset-2 focus:ring-offset-[#ede7eb] lg:mt-[35px] lg:min-h-[51px] lg:px-[24px] lg:text-[17px]"
            >
              <span>Learn More</span>
              <LearnMoreArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
