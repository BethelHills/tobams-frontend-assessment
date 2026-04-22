import Image from "next/image";

import ImageOverlayLink from "@/components/ImageOverlayLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import { mailtoConsult } from "@/lib/siteNav";

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
      <div className="relative w-full">
        <Image
          src={`/images/${encodeURIComponent(HERO_IMAGE)}`}
          alt=""
          width={1440}
          height={511}
          className="pointer-events-none h-auto w-full object-contain object-top"
          sizes={CONTENT_IMAGE_SIZES}
          role="presentation"
        />
        <ImageOverlayLink
          href={mailtoConsult("Book a consultation")}
          ariaLabel="Book a consultation"
          className="bottom-[5%] left-1/2 h-[15%] w-[min(88%,24rem)] min-h-11 -translate-x-1/2 sm:bottom-[6%] sm:h-[14%]"
        />
      </div>
    </section>
  );
}
