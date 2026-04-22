import Image from "next/image";

const ART = "D. CTA.png";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="w-full bg-background px-4 py-12 sm:px-6 sm:py-16"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="cta-heading" className="sr-only">
          Call to action
        </h2>
        <Image
          src={`/images/${encodeURIComponent(ART)}`}
          alt="Call to action — get started"
          width={1440}
          height={600}
          className="h-auto w-full rounded-lg object-contain"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </section>
  );
}
