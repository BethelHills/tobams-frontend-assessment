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
      className="scroll-mt-4 w-full px-4 pt-0 sm:px-5 sm:pt-3 md:px-6 md:pt-4 lg:px-0 lg:pt-6"
      aria-labelledby="hero-heading"
    >
      <h2 id="hero-heading" className="sr-only">
        Training and Development — hero
      </h2>

      <div className="relative isolate w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#2c1a26] via-[#23161f] to-[#181016] shadow-[0_24px_64px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.08] ring-inset sm:rounded-2xl lg:rounded-none">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(147,27,116,0.18),transparent_55%)]"
        />

        <div className="relative flex w-full justify-center px-0 py-5 sm:py-7 md:py-9 lg:py-12">
          <div className="relative w-full">
            <Image
              src={`/images/${encodeURIComponent(HERO_IMAGE)}`}
              alt=""
              width={1440}
              height={511}
              className="pointer-events-none h-auto w-full max-h-none object-contain object-center max-sm:max-h-[min(70vh,440px)] sm:max-h-[min(74vh,500px)] md:max-h-[min(76vh,540px)] lg:max-h-[min(82vh,44rem)] xl:max-h-[min(84vh,46rem)]"
              sizes={CONTENT_IMAGE_SIZES}
              role="presentation"
              priority
            />
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
        </div>
      </div>
    </section>
  );
}
