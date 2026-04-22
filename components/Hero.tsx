import Image from "next/image";

const HERO_IMAGE = "Frame 1000002724.png";

export default function Hero() {
  return (
    <section
      className="relative mx-3 overflow-hidden bg-[#20161f]"
      aria-labelledby="hero-heading"
    >
      <h2 id="hero-heading" className="sr-only">
        Training and Development — hero
      </h2>
      <Image
        src={`/images/${encodeURIComponent(HERO_IMAGE)}`}
        alt="Training and Development — what we do, overview, and book a consultation"
        width={1440}
        height={511}
        className="h-auto w-full object-contain object-top"
        sizes="(max-width: 430px) calc(100vw - 24px), 406px"
      />
    </section>
  );
}
