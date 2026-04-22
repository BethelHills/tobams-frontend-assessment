import Image from "next/image";

import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";

const MANAGEMENT_PROGRAM_IMAGE = "Frame 1618869831.png";

export default function ManagementProgram() {
  return (
    <section
      className="px-4 py-5 md:px-6 md:py-6 xl:px-8 xl:py-8"
      aria-labelledby="management-program-heading"
    >
      <h2 id="management-program-heading" className="sr-only">
        Management Development Program
      </h2>
      <Image
        src={`/images/${encodeURIComponent(MANAGEMENT_PROGRAM_IMAGE)}`}
        alt="Management Development Program — leadership outcomes and organisational impact"
        width={1440}
        height={847}
        className="h-auto w-full rounded-lg object-contain md:rounded-xl"
        sizes={CONTENT_IMAGE_SIZES}
      />
    </section>
  );
}
