import Image from "next/image";

import ImageOverlayLink from "@/components/ImageOverlayLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import { mailtoConsult } from "@/lib/siteNav";

const TRAINING_CONSULTANT_IMAGE = "D. Training the consultant.png";

export default function TrainingConsultant() {
  return (
    <section
      id="consulting"
      className="scroll-mt-4 bg-[#ece5e8] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
      aria-labelledby="training-consultant-heading"
    >
      <h2 id="training-consultant-heading" className="sr-only">
        Training The Consultant
      </h2>
      <div className="relative mx-auto w-full max-w-full">
        <Image
          src={`/images/${encodeURIComponent(TRAINING_CONSULTANT_IMAGE)}`}
          alt=""
          width={1440}
          height={722}
          className="pointer-events-none h-auto w-full object-contain"
          sizes={CONTENT_IMAGE_SIZES}
          role="presentation"
        />
        <ImageOverlayLink
          href={mailtoConsult("Learn more — Training the Consultant")}
          ariaLabel="Learn more about Training the Consultant"
          className="bottom-[3%] left-1/2 h-[10%] w-[min(70%,18rem)] min-h-11 -translate-x-1/2 sm:bottom-[4%]"
        />
      </div>
    </section>
  );
}
