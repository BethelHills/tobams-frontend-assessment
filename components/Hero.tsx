import Image from "next/image";

import SectionCtaLink from "@/components/SectionCtaLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";

const HERO_IMAGE = "Frame 1000002724.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-3 scroll-mt-4 overflow-hidden bg-[#20161f] md:mx-5 xl:mx-8"
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
        sizes={CONTENT_IMAGE_SIZES}
      />
      <SectionCtaLink href="#contact">Book a consultation</SectionCtaLink>
    </section>
  );
}
