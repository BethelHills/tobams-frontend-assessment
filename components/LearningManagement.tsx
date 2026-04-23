import Image from "next/image";

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
      className="scroll-mt-4 w-full bg-[#ede7eb] py-10 md:py-14 lg:py-[48px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[64px] xl:px-[72px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[620px_minmax(0,1fr)] lg:items-start lg:gap-[56px]">
          <div className="mx-auto w-full max-w-[620px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-full">
              <Image
                src={`/images/${encodeURIComponent(LMS_IMAGE)}`}
                alt="TG Academy — learning management and professional development"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) min(100vw, 620px), 620px"
              />
            </div>
          </div>

          <div className="w-full min-w-0 max-w-[720px] justify-self-start">
            <h2
              id="lms-heading"
              className="text-center text-[34px] font-medium leading-[1.18] tracking-[-0.02em] text-[#6d1354] md:text-[42px] lg:text-left lg:text-[58px]"
            >
              Learning Management System
            </h2>

            <div className="mt-6 rounded-[10px] bg-[#dbcfd8] px-5 py-5 md:px-7 md:py-7 lg:mt-[28px] lg:px-[28px] lg:py-[26px]">
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

              <p className="mt-7 text-[20px] font-semibold leading-[1.3] text-[#6d1354] lg:mt-[22px] lg:text-[18px]">
                Some of our courses include:
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 text-[18px] leading-[1.45] text-[#322b31] sm:grid-cols-2 lg:mt-[14px] lg:grid-cols-3 lg:gap-y-[12px] lg:text-[17px]">
                {courses.map((course) => (
                  <li key={course} className="flex items-start gap-3">
                    <span className="mt-[9px] block h-[6px] w-[6px] shrink-0 rounded-full bg-[#1f171d]" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
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
