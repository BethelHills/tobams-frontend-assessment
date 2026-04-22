import Image from "next/image";

import ImageOverlayLink from "@/components/ImageOverlayLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import { mailtoConsult, PRIMARY_NAV } from "@/lib/siteNav";

const HERO_IMAGE = "Frame 1000002724.png";

const whatWeDoNav = PRIMARY_NAV.find((item) => item.label === "What We Do");
const WHAT_WE_DO_HREF = whatWeDoNav?.href ?? "#hero";

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-4 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8"
      aria-labelledby="hero-heading"
    >
      <h2 id="hero-heading" className="sr-only">
        Training and Development — hero
      </h2>
      <div className="relative w-full overflow-hidden rounded-lg bg-[#20161f] sm:rounded-xl lg:rounded-2xl">
        <Image
          src={`/images/${encodeURIComponent(HERO_IMAGE)}`}
          alt=""
          width={1440}
          height={511}
          className="pointer-events-none h-auto w-full object-contain object-top"
          sizes={CONTENT_IMAGE_SIZES}
          role="presentation"
        />
        {/* “What we do” pill / badge — upper center of art */}
        <ImageOverlayLink
          href={WHAT_WE_DO_HREF}
          ariaLabel="What we do — view learning and programs"
          className="left-1/2 top-[7%] z-20 h-[min(14%,5.5rem)] w-[min(52%,15rem)] min-h-11 -translate-x-1/2 sm:top-[8%] sm:h-[13%] sm:w-[min(48%,14rem)] md:top-[9%] lg:top-[10%] lg:w-[min(44%,13rem)]"
        />
        {/* Primary CTA — button strip at bottom of art */}
        <ImageOverlayLink
          href={mailtoConsult("Book a consultation")}
          ariaLabel="Book a consultation"
          className="bottom-[4%] left-1/2 z-10 h-[min(17%,6rem)] w-[min(92%,26rem)] min-h-11 -translate-x-1/2 sm:bottom-[5%] sm:h-[15%] sm:w-[min(78%,24rem)] md:bottom-[5.5%] md:w-[min(70%,22rem)] lg:bottom-[6%] lg:w-[min(64%,20rem)]"
        />
      </div>
    </section>
  );
}
