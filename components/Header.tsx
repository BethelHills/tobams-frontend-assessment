"use client";

import Image from "next/image";

import { PRIMARY_NAV } from "@/lib/siteNav";

const HEADER_LOGO = "Seecondary Logo copy 2.png";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7b1b5d] focus-visible:ring-offset-2";

const navLinkBase =
  "inline-flex min-h-10 max-w-full shrink-0 items-center whitespace-nowrap rounded-md px-2 py-2 text-center text-[10px] font-medium leading-tight text-[#60575d] transition-colors hover:bg-[#faf7f9] hover:text-[#4b0f3c] sm:px-2.5 md:px-3 md:text-xs lg:text-sm";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e8dde3] bg-white shadow-sm">
      <p className="sr-only">Tobams Group — Training and Development</p>

      <div className="border-b border-[#efe7ec] px-3 py-3 sm:px-5 sm:py-4 lg:px-6">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <a
            href="#page-top"
            className={`flex min-h-10 min-w-0 shrink items-center rounded-md ${focusRing}`}
          >
            <Image
              src={`/images/${encodeURIComponent(HEADER_LOGO)}`}
              alt="Tobams Group"
              width={166}
              height={64}
              className="h-7 w-auto max-w-[min(9.5rem,42vw)] shrink-0 object-contain object-left sm:h-8 sm:max-w-none md:h-9 lg:h-10"
              sizes="(max-width: 640px) 120px, 166px"
              priority
            />
          </a>
          <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
            <a
              href="#contact"
              className={`inline-flex min-h-10 max-w-[9rem] items-center justify-center rounded-md bg-[#ea4b5f] px-2 py-2 text-center text-[9px] font-semibold leading-tight text-white sm:max-w-none sm:px-3 sm:text-[10px] md:text-xs ${focusRing}`}
            >
              Take Assessment
            </a>
          </div>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className="border-t border-[#f5eef2]/90 bg-white/98 backdrop-blur-[2px] md:border-t-0 md:bg-transparent md:backdrop-blur-none"
      >
        <div className="overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max max-w-none flex-nowrap items-center gap-x-1 px-3 py-3 pr-5 sm:gap-x-1.5 sm:px-4 sm:py-3.5 sm:pr-6 md:mx-auto md:w-full md:max-w-4xl md:flex-wrap md:justify-center md:gap-x-2 md:gap-y-2 md:px-4 md:pr-4 lg:max-w-5xl lg:px-5 lg:py-4">
            {PRIMARY_NAV.map((item, index) => (
              <li key={item.label} className="shrink-0">
                <a
                  href={item.href}
                  className={`${navLinkBase} ${focusRing} ${
                    index === 0
                      ? "font-semibold text-[#7b1b5d] underline decoration-[#7b1b5d] underline-offset-4"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
