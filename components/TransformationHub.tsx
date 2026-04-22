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

const TRANSFORMATION_HUB_IMAGE = "18.png";

export default function TransformationHub() {
  return (
    <section
      className={`scroll-mt-4 w-full bg-[#f7f1f5] ${SECTION_PAD_X} ${SECTION_PAD_Y}`}
      aria-labelledby="transformation-hub-heading"
    >
      <h2 id="transformation-hub-heading" className="sr-only">
        Transformation Hub With Ife Newton
      </h2>
      <div className={CONTENT_ART_FRAME}>
        <Image
          src={`/images/${TRANSFORMATION_HUB_IMAGE}`}
          alt=""
          width={1440}
          height={780}
          className={`${CONTENT_IMAGE_CLASS} object-top`}
          sizes={CONTENT_IMAGE_SIZES}
          role="presentation"
          decoding="async"
        />
        <ImageOverlayLink
          href={mailtoConsult("Learn more — Transformation Hub")}
          ariaLabel="Learn more about Transformation Hub with Ife Newton"
          className="bottom-[6%] left-1/2 h-[10%] w-[min(62%,17rem)] min-h-11 -translate-x-1/2 sm:bottom-[7%]"
        />
      </div>
    </section>
  );
}
