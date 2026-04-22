import Image from "next/image";

import SectionCtaLink from "@/components/SectionCtaLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";

const LMS_IMAGE = "D. LMS Block.png";

export default function LearningManagement() {
  return (
    <section
      id="learning"
      className="scroll-mt-4 bg-[#e9e0e6] px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10"
      aria-labelledby="lms-heading"
    >
      <h2 id="lms-heading" className="sr-only">
        Learning Management System
      </h2>
      <div className="mx-auto w-full max-w-full">
        <Image
          src={`/images/${encodeURIComponent(LMS_IMAGE)}`}
          alt="TG Academy learning management system — courses, skills, and Learn More"
          width={1440}
          height={744}
          className="h-auto w-full object-contain"
          sizes={CONTENT_IMAGE_SIZES}
        />
      </div>
      <SectionCtaLink href="#contact">Learn more</SectionCtaLink>
    </section>
  );
}
