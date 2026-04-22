import Image from "next/image";

const ART = "Testimonials.png";

export default function Testimonials() {
  return (
    <section
      className="w-full bg-zinc-50 px-4 py-12 dark:bg-zinc-950/50 sm:px-6 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="testimonials-heading" className="sr-only">
          Testimonials
        </h2>
        <Image
          src={`/images/${encodeURIComponent(ART)}`}
          alt="Client testimonials"
          width={1440}
          height={800}
          className="h-auto w-full rounded-lg object-contain"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </section>
  );
}
