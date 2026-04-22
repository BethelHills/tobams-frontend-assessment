import Image from "next/image";

import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";

const CTA_IMAGE = "D. CTA.png";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10"
      aria-labelledby="cta-heading"
    >
      <h2 id="cta-heading" className="sr-only">
        Book a consultation — accelerate growth at your organisation
      </h2>
      <div className="mx-auto w-full max-w-full overflow-hidden rounded-lg md:rounded-xl">
        <Image
          src={`/images/${encodeURIComponent(CTA_IMAGE)}`}
          alt="Call to action — see how we can help and book a consultation"
          width={1134}
          height={204}
          className="block h-auto w-full object-contain"
          sizes={CONTENT_IMAGE_SIZES}
        />
      </div>
    </section>
  );
}
