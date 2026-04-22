import Image from "next/image";

import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import {
  CONTENT_ART_FRAME,
  CONTENT_IMAGE_CLASS,
  SECTION_PAD_X,
  SECTION_PAD_Y,
} from "@/lib/sectionLayout";

const TESTIMONIALS_IMAGE = "Testimonials.png";

export default function Testimonials() {
  return (
    <section
      className={`scroll-mt-4 bg-[#f5f1f4] ${SECTION_PAD_X} ${SECTION_PAD_Y}`}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Client testimonials
      </h2>
      <div className={CONTENT_ART_FRAME}>
        <Image
          src={`/images/${TESTIMONIALS_IMAGE}`}
          alt="Testimonials from Anita Yusuf, John Okechukwu, Chisom Nnamdi, and other Tobams Group clients"
          width={1440}
          height={538}
          className={CONTENT_IMAGE_CLASS}
          sizes={CONTENT_IMAGE_SIZES}
        />
      </div>
    </section>
  );
}
