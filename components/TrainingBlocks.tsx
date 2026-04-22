import Image from "next/image";

const ART = "Frame 1000002724.png";

export default function TrainingBlocks() {
  return (
    <section
      id="training"
      className="w-full bg-background px-4 py-12 sm:px-6 sm:py-16"
      aria-labelledby="training-blocks-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="training-blocks-heading" className="sr-only">
          Training blocks
        </h2>
        <Image
          src={`/images/${encodeURIComponent(ART)}`}
          alt="Training program blocks and modules"
          width={1440}
          height={800}
          className="h-auto w-full rounded-lg object-contain"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </section>
  );
}
