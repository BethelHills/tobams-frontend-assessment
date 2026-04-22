"use client";

import Image from "next/image";

import AccountDialogTrigger from "@/components/AccountDialogTrigger";
import ImageOverlayLink from "@/components/ImageOverlayLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import { PRIMARY_NAV } from "@/lib/siteNav";

const HEADER_IMAGE = "Component 1.png";

export default function Header() {
  return (
    <header className="px-3 pt-2 md:px-5 md:pt-4 xl:px-8 xl:pt-6">
      <h1 className="sr-only">Tobams Group — Training and Development</h1>
      <div className="overflow-hidden rounded-t-sm bg-white md:rounded-t-none">
        <div className="relative w-full">
          <Image
            src={`/images/${encodeURIComponent(HEADER_IMAGE)}`}
            alt="Tobams Group — header with logo, account, take assessment, and primary navigation"
            width={1440}
            height={173}
            className="pointer-events-none h-auto w-full select-none object-contain object-top"
            sizes={CONTENT_IMAGE_SIZES}
            priority
          />

          <ImageOverlayLink
            href="#page-top"
            ariaLabel="Tobams Group — home"
            className="left-[1%] top-[6%] h-[45%] w-[34%] min-h-11 sm:left-[2%] sm:top-[8%]"
          />

          <div className="absolute right-[24%] top-[6%] z-10 h-[40%] w-[22%] min-h-11 sm:right-[26%] sm:top-[8%] sm:h-[38%] sm:w-[20%]">
            <AccountDialogTrigger variant="overlay" />
          </div>

          <ImageOverlayLink
            href="#contact"
            ariaLabel="Take assessment"
            className="right-[1%] top-[6%] h-[40%] w-[22%] min-h-11 sm:right-[2%] sm:top-[8%] sm:w-[22%]"
          />

          <nav
            aria-label="Primary"
            className="absolute bottom-0 left-0 right-0 z-10 flex h-[46%] min-h-[40px] sm:h-[48%]"
          >
            {PRIMARY_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="min-h-11 flex-1 bg-transparent transition-colors hover:bg-black/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7b1b5d]"
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
