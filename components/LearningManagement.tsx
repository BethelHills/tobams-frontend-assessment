import Image from "next/image";

import ImageOverlayLink from "@/components/ImageOverlayLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import {
  CONTENT_ART_FRAME,
  CONTENT_IMAGE_CLASS,
  SECTION_PAD_X,
  SECTION_PAD_Y,
} from "@/lib/sectionLayout";
import { mailtoConsult } from "@/lib/siteNav";

const LMS_IMAGE = "D. LMS Block.png";

export default function LearningManagement() {
  return (
    <section
      id="learning"
      className={`scroll-mt-4 bg-[#e9e0e6] ${SECTION_PAD_X} ${SECTION_PAD_Y}`}
      aria-labelledby="lms-heading"
    >
      <h2 id="lms-heading" className="sr-only">
        Learning Management System
      </h2>
      <div className={CONTENT_ART_FRAME}>
        <Image
          src={`/images/${encodeURIComponent(LMS_IMAGE)}`}
          alt=""
          width={1440}
          height={744}
          className={CONTENT_IMAGE_CLASS}
          sizes={CONTENT_IMAGE_SIZES}
          role="presentation"
        />
        <ImageOverlayLink
          href={mailtoConsult("Learn more — TG Academy")}
          ariaLabel="Learn more about TG Academy"
          className="bottom-[4%] left-1/2 h-[11%] w-[min(70%,20rem)] min-h-11 -translate-x-1/2 sm:bottom-[5%]"
        />
      </div>
    </section>
  );
}
