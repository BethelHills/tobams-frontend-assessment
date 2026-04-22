import Image from "next/image";

const TRAINING_CONSULTANT_IMAGE = "D. Training the consultant.png";

export default function TrainingConsultant() {
  return (
    <section
      id="consulting"
      className="bg-[#ece5e8] px-5 py-8"
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
          sizes="(max-width: 430px) 100vw, 430px"
        />
      </div>
    </section>
  );
}
