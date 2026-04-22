import Image from "next/image";

const ART = "D. Training the consultant.png";

export default function TrainingConsultant() {
  return (
    <section
      id="consulting"
      className="w-full bg-zinc-50 px-4 py-12 dark:bg-zinc-950/50 sm:px-6 sm:py-16"
      aria-labelledby="training-consultant-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="training-consultant-heading" className="sr-only">
          Training the consultant
        </h2>
        <Image
          src={`/images/${encodeURIComponent(ART)}`}
          alt="Training the consultant program"
          width={1440}
          height={800}
          className="h-auto w-full rounded-lg object-contain"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </section>
  );
}
