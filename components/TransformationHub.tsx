import Image from "next/image";

import ImageOverlayLink from "@/components/ImageOverlayLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import { mailtoConsult } from "@/lib/siteNav";

const TRANSFORMATION_HUB_IMAGE = "18.png";

export default function TransformationHub() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8"
      aria-labelledby="transformation-hub-heading"
    >
      <h2 id="transformation-hub-heading" className="sr-only">
        Transformation Hub With Ife Newton
      </h2>
      <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
        <Image
          src={`/images/${TRANSFORMATION_HUB_IMAGE}`}
          alt=""
          width={1440}
          height={780}
          className="pointer-events-none block h-auto w-full max-w-full object-contain object-top"
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
