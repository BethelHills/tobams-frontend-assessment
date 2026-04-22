import Image from "next/image";

const ART = "D. LMS Block.png";

export default function LearningManagement() {
  return (
    <section
      id="learning"
      className="w-full bg-zinc-50 px-4 py-12 dark:bg-zinc-950/50 sm:px-6 sm:py-16"
      aria-labelledby="learning-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="learning-heading" className="sr-only">
          Learning management
        </h2>
        <Image
          src={`/images/${encodeURIComponent(ART)}`}
          alt="Learning management system overview"
          width={1440}
          height={800}
          className="h-auto w-full rounded-lg object-contain"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </section>
  );
}
