import Image from "next/image";

import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/siteNav";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6b0f52]";

const CTA_IMAGE = "D. CTA.png";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="scroll-mt-4 px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10"
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
      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Consultation%20request`}
          className={`inline-flex min-h-11 items-center justify-center rounded-md bg-[#6b0f52] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm ${focusRing}`}
        >
          Email to book a consultation
        </a>
        <a
          href={`tel:${CONTACT_PHONE_TEL}`}
          className={`inline-flex min-h-11 items-center justify-center rounded-md border-2 border-[#6b0f52] bg-white px-4 py-3 text-center text-sm font-semibold text-[#6b0f52] ${focusRing}`}
        >
          Call {CONTACT_PHONE_DISPLAY}
        </a>
      </div>
      <p className="mt-3 text-center text-xs text-neutral-600">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-[#6b0f52] underline underline-offset-2"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </section>
  );
}
