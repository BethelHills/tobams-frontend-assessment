import Image from "next/image";

import ImageOverlayLink from "@/components/ImageOverlayLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import { mailtoConsult } from "@/lib/siteNav";

const TRAINING_BLOCKS_IMAGE = "Frame 1618869587.png";

export default function TrainingBlocks() {
  return (
    <section
      id="training"
      className="scroll-mt-4 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
      aria-labelledby="training-blocks-heading"
    >
      <h2 id="training-blocks-heading" className="sr-only">
        Corporate, individual, and capacity training programs
      </h2>
      <div className="relative mx-auto w-full max-w-full">
        <Image
          src={`/images/${encodeURIComponent(TRAINING_BLOCKS_IMAGE)}`}
          alt=""
          width={1440}
          height={1497}
          className="pointer-events-none h-auto w-full object-contain"
          sizes={CONTENT_IMAGE_SIZES}
          role="presentation"
        />
        <ImageOverlayLink
          href={mailtoConsult("Learn more — training programs")}
          ariaLabel="Learn more about training programs"
          className="bottom-[2%] left-1/2 h-[7%] w-[min(65%,18rem)] min-h-11 -translate-x-1/2 sm:bottom-[3%] sm:h-[8%]"
        />
      </div>
    </section>
  );
}
