import Image from "next/image";

import SectionCtaLink from "@/components/SectionCtaLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";

const TRANSFORMATION_HUB_IMAGE = "18.png";

export default function TransformationHub() {
  return (
    <section
      className="w-full px-0"
      aria-labelledby="transformation-hub-heading"
    >
      <h2 id="transformation-hub-heading" className="sr-only">
        Transformation Hub With Ife Newton
      </h2>
      <Image
        src={`/images/${TRANSFORMATION_HUB_IMAGE}`}
        alt="Transformation Hub with Ife Newton — CEO masterclass series and leadership growth"
        width={1440}
        height={780}
        className="block h-auto w-full max-w-full object-contain object-top"
        sizes={CONTENT_IMAGE_SIZES}
        decoding="async"
      />
      <SectionCtaLink href="#contact">Learn more</SectionCtaLink>
    </section>
  );
}
