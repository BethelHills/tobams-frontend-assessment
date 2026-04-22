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

const MANAGEMENT_PROGRAM_IMAGE = "Frame 1618869831.png";

export default function ManagementProgram() {
  return (
    <section
      className={`scroll-mt-4 bg-[#ebe4e8] ${SECTION_PAD_X} ${SECTION_PAD_Y}`}
      aria-labelledby="management-program-heading"
    >
      <h2 id="management-program-heading" className="sr-only">
        Management Development Program
      </h2>
      <div className={CONTENT_ART_FRAME}>
        <Image
          src={`/images/${encodeURIComponent(MANAGEMENT_PROGRAM_IMAGE)}`}
          alt=""
          width={1440}
          height={847}
          className={CONTENT_IMAGE_CLASS}
          sizes={CONTENT_IMAGE_SIZES}
          role="presentation"
        />
        <ImageOverlayLink
          href={mailtoConsult("Learn more — Management Development Program")}
          ariaLabel="Learn more about the Management Development Program"
          className="bottom-[4%] left-1/2 h-[10%] w-[min(68%,19rem)] min-h-11 -translate-x-1/2 sm:bottom-[5%]"
        />
      </div>
    </section>
  );
}
