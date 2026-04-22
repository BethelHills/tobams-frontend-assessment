import Image from "next/image";

import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";

const TRAINING_CONSULTANT_IMAGE = "D. Training the consultant.png";

export default function TrainingConsultant() {
  return (
    <section
      id="consulting"
      className="bg-[#ece5e8] px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10"
      aria-labelledby="training-consultant-heading"
    >
      <h2 id="training-consultant-heading" className="sr-only">
        Training The Consultant
      </h2>
      <div className="mx-auto w-full max-w-full">
        <Image
          src={`/images/${encodeURIComponent(TRAINING_CONSULTANT_IMAGE)}`}
          alt="Training the Consultant — certified trainer program, curriculum, and Learn More"
          width={1440}
          height={722}
          className="h-auto w-full object-contain"
          sizes={CONTENT_IMAGE_SIZES}
        />
      </div>
    </section>
  );
}
