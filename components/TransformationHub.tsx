import Image from "next/image";

const ART = "Frame 1618869831.png";

export default function TransformationHub() {
  return (
    <section
      className="w-full bg-background px-4 py-12 sm:px-6 sm:py-16"
      aria-labelledby="transformation-hub-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="transformation-hub-heading" className="sr-only">
          Transformation hub
        </h2>
        <Image
          src={`/images/${encodeURIComponent(ART)}`}
          alt="Transformation hub and resources"
          width={1440}
          height={800}
          className="h-auto w-full rounded-lg object-contain"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </section>
  );
}
