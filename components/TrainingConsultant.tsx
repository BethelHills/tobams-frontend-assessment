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

const TRAINING_CONSULTANT_IMAGE = "D. Training the consultant.png";

export default function TrainingConsultant() {
  return (
    <section
      id="consulting"
      className={`scroll-mt-4 bg-[#ece5e8] ${SECTION_PAD_X} ${SECTION_PAD_Y}`}
      aria-labelledby="training-consultant-heading"
    >
      <h2 id="training-consultant-heading" className="sr-only">
        Training The Consultant
      </h2>
      <div className={CONTENT_ART_FRAME}>
        <Image
          src={`/images/${encodeURIComponent(TRAINING_CONSULTANT_IMAGE)}`}
          alt=""
          width={1440}
          height={722}
          className={CONTENT_IMAGE_CLASS}
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
