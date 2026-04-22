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
      className="scroll-mt-4 w-full px-0 pt-0 sm:px-6 sm:pt-4 lg:px-10 lg:pt-6"
      aria-labelledby="hero-heading"
    >
      <h2 id="hero-heading" className="sr-only">
        Training and Development — hero
      </h2>

      <div className="relative isolate mx-auto w-full overflow-hidden bg-gradient-to-b from-[#2c1a26] via-[#23161f] to-[#181016] shadow-[0_24px_64px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.08] sm:rounded-b-2xl lg:rounded-b-3xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(147,27,116,0.18),transparent_55%)]"
        />

        <div className="relative flex w-full justify-center px-3 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <Image
            src={`/images/${encodeURIComponent(HERO_IMAGE)}`}
            alt=""
            width={1440}
            height={511}
            className="pointer-events-none h-auto w-full max-w-[min(100%,92rem)] object-contain object-center max-sm:max-h-[min(68vh,420px)] sm:max-h-[min(72vh,480px)] md:max-h-[min(74vh,520px)] lg:max-h-[min(76vh,36rem)] xl:max-h-[min(78vh,40rem)]"
            sizes={CONTENT_IMAGE_SIZES}
            role="presentation"
            priority
          />
        </div>

        <ImageOverlayLink
          href={WHAT_WE_DO_HREF}
          ariaLabel="What we do — view learning and programs"
          className="left-1/2 top-[7%] z-20 h-[min(14%,5.5rem)] w-[min(52%,15rem)] min-h-11 -translate-x-1/2 sm:top-[8%] sm:h-[13%] sm:w-[min(48%,14rem)] md:top-[9%] lg:top-[10%] lg:w-[min(44%,13rem)]"
        />
        <ImageOverlayLink
          href={mailtoConsult("Book a consultation")}
          ariaLabel="Book a consultation"
          className="bottom-[4%] left-1/2 z-10 h-[min(17%,6rem)] w-[min(92%,26rem)] min-h-11 -translate-x-1/2 sm:bottom-[5%] sm:h-[15%] sm:w-[min(78%,24rem)] md:bottom-[5.5%] md:w-[min(70%,22rem)] lg:bottom-[6%] lg:w-[min(64%,20rem)]"
        />
      </div>
    </section>
  );
}
