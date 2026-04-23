import Image from "next/image";

import { mailtoConsult } from "@/lib/siteNav";

const LMS_IMAGE = "LMS image.png";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LearningManagement() {
  return (
    <section
      id="learning"
      aria-labelledby="lms-heading"
      className="scroll-mt-4 w-full bg-[#ede7eb] py-10 md:py-14 lg:py-[48px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[64px] xl:px-[72px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[620px_minmax(0,1fr)] lg:items-stretch lg:gap-[56px]">
          <h2
            id="lms-heading"
            className="text-center text-[34px] font-medium leading-[1.18] tracking-[-0.02em] text-[#6d1354] md:text-[42px] lg:col-start-2 lg:row-start-1 lg:self-start lg:text-left lg:text-[58px]"
          >
            Learning Management System
          </h2>

          <div className="mx-auto flex w-full max-w-[620px] justify-center lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:mx-0 lg:max-w-[620px] lg:min-h-0 lg:items-center lg:justify-center lg:justify-self-stretch">
            <div className="relative aspect-square w-full max-w-[620px] shrink-0 overflow-hidden rounded-full">
              <Image
                src={`/images/${encodeURIComponent(LMS_IMAGE)}`}
                alt="TG Academy — learning management and professional development"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) min(100vw, 620px), 620px"
              />
            </div>
          </div>

          <div className="w-full max-w-[720px] justify-self-center lg:col-start-2 lg:row-start-2 lg:justify-self-start lg:self-start">
            <div className="mt-6 rounded-[10px] bg-[#dbcfd8] px-5 py-5 md:px-7 md:py-7 lg:mt-0 lg:px-[28px] lg:py-[26px]">
              <p className="text-[18px] leading-[1.65] text-[#322b31] md:text-[20px] lg:text-[19px]">
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

              <div className="mt-7 flex w-full max-w-[675.12px] flex-col gap-[20px] lg:mt-[22px] lg:h-[436px] lg:overflow-y-auto">
                <p className="shrink-0 text-[20px] font-semibold leading-[1.3] text-[#6d1354] lg:text-[18px]">
                  Some of our courses include:
                </p>

                <ul className="flex min-h-0 flex-1 flex-col gap-[20px] text-[18px] leading-[1.45] text-[#322b31] lg:text-[17px]">
                  {courses.map((course) => (
                    <li
                      key={course}
                      className="flex min-h-0 items-center gap-3"
                    >
                      <span className="block h-[6px] w-[6px] shrink-0 rounded-full bg-[#1f171d]" />
                      <span className="min-w-0 whitespace-nowrap leading-[1.45]">
                        {course}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={mailtoConsult("Learn more — TG Academy")}
              className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[4px] bg-[#711053] px-6 text-[18px] font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#711053] focus:ring-offset-2 focus:ring-offset-[#ede7eb] lg:mt-[34px] lg:min-h-[50px] lg:px-[24px] lg:text-[17px]"
            >
              <span>Learn More</span>
              <span aria-hidden="true" className="text-[22px] leading-none">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
