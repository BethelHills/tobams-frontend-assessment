import Image from "next/image";

import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";

const TESTIMONIALS_IMAGE = "Testimonials.png";

export default function Testimonials() {
  return (
    <section
      className="px-4 pb-6 md:px-6 md:pb-8 xl:px-8 xl:pb-10"
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Client testimonials
      </h2>
      <div className="relative mx-auto w-full max-w-full">
        <Image
          src={`/images/${TESTIMONIALS_IMAGE}`}
          alt="Testimonials from Anita Yusuf, John Okechukwu, Chisom Nnamdi, and other Tobams Group clients"
          width={1440}
          height={538}
          className="block h-auto w-full object-contain"
          sizes={CONTENT_IMAGE_SIZES}
        />
      </div>
    </section>
  );
}
