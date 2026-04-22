import Image from "next/image";

import ImageOverlayLink from "@/components/ImageOverlayLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import { mailtoConsult } from "@/lib/siteNav";

const CTA_IMAGE = "D. CTA.png";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="scroll-mt-4 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
      aria-labelledby="cta-heading"
    >
      <h2 id="cta-heading" className="sr-only">
        Book a consultation — accelerate growth at your organisation
      </h2>
      <div className="relative mx-auto w-full max-w-full overflow-hidden rounded-lg md:rounded-xl">
        <Image
          src={`/images/${encodeURIComponent(CTA_IMAGE)}`}
          alt=""
          width={1134}
          height={204}
          className="pointer-events-none block h-auto w-full object-contain"
          sizes={CONTENT_IMAGE_SIZES}
          role="presentation"
        />
        <ImageOverlayLink
          href={mailtoConsult("Book a consultation")}
          ariaLabel="Book a consultation"
          className="right-[4%] top-[20%] h-[58%] w-[min(44%,14rem)] min-h-11 sm:right-[6%] sm:top-[18%] sm:h-[60%]"
        />
      </div>
    </section>
  );
}
