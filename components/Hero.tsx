import Image from "next/image";

const HERO_ART = "Component 1.png";

export default function Hero() {
  return (
    <section className="w-full bg-background px-4 py-10 sm:px-6 sm:py-14" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl">
        <h1 id="hero-heading" className="sr-only">
          Tobams Assessment hero
        </h1>
        <Image
          src={`/images/${encodeURIComponent(HERO_ART)}`}
          alt="Hero section showcasing the main value proposition"
          width={1440}
          height={720}
          className="h-auto w-full rounded-lg object-contain shadow-sm"
          sizes="(max-width: 1152px) 100vw, 1152px"
          priority
        />
      </div>
    </section>
  );
}
