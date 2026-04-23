"use client";

import Image from "next/image";
import { useState } from "react";

const ACCOUNT_ICON_SRC = "/images/Account icon.png";
/** Same asset as `Footer` brand mark */
const HEADER_LOGO = "Seecondary Logo copy 2.png";

type NavItem = {
  label: string;
  href: string;
  hasChevron?: boolean;
  active?: boolean;
};

/** Anchors aligned with section ids on the home page. */
const navItems: NavItem[] = [
  { label: "About", href: "#page-top", hasChevron: true, active: true },
  { label: "What We Do", href: "#hero", hasChevron: true },
  { label: "Jobs", href: "#page-top", hasChevron: true },
  { label: "Projects", href: "#page-top" },
  { label: "TG Academy", href: "#learning" },
  { label: "Strategic Partnership", href: "#page-top" },
  { label: "Pricing", href: "#contact" },
  { label: "Book a Consultation", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-[#f5f5f5] text-[#211b20]">
      <div className="border-b border-[#d7cad3]">
        <div className="mx-auto flex w-full min-w-0 max-w-[1728px] items-center justify-between px-4 py-4 sm:px-6 md:px-8 lg:px-[92px] lg:py-[34px]">
          <a
            href="#page-top"
            className="inline-flex shrink-0 items-center rounded-md outline-none ring-offset-2 ring-offset-[#f5f5f5] focus-visible:ring-2 focus-visible:ring-[#6d0f50]"
            aria-label="Tobams Group home"
          >
            <Image
              src={`/images/${encodeURIComponent(HEADER_LOGO)}`}
              alt="Tobams Group"
              width={124}
              height={42}
              className="h-[42px] w-[123.85px] object-contain object-left"
              sizes="124px"
              priority
            />
          </a>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              className="inline-flex min-h-[56px] items-center gap-4 rounded-[4px] bg-[#6d0f50] px-[22px] text-[18px] font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#6d0f50] focus:ring-offset-2"
            >
              <span className="inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white/10">
                <Image
                  src={ACCOUNT_ICON_SRC}
                  alt=""
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px] object-contain p-0.5"
                />
              </span>
              <span>Account</span>
              <span aria-hidden="true" className="text-[16px]">
                ⌄
              </span>
            </button>

            <a
              href="#contact"
              className="inline-flex min-h-[56px] items-center justify-center rounded-[4px] bg-[#f54f57] px-[28px] text-[18px] font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f54f57] focus:ring-offset-2"
            >
              Take Assessment
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d7cad3] text-[#6d0f50] focus:outline-none focus:ring-2 focus:ring-[#6d0f50] focus:ring-offset-2 lg:hidden"
          >
            <span className="text-2xl leading-none">☰</span>
          </button>
        </div>
      </div>

      <div className="hidden border-b border-[#d7cad3] lg:block">
        <nav
          aria-label="Primary"
          className="mx-auto w-full min-w-0 max-w-[1728px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-[240px]"
        >
          <ul className="flex min-h-[80px] min-w-0 flex-wrap items-center gap-x-6 gap-y-2 lg:gap-x-[42px] lg:gap-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`inline-flex items-center gap-2 border-b-2 pb-[13px] pt-[15px] text-[18px] font-normal transition hover:text-[#6d0f50] xl:text-[20px] ${
                    item.active
                      ? "border-[#7a235f] text-[#6d0f50]"
                      : "border-transparent text-[#231f22]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasChevron ? (
                    <span aria-hidden="true" className="text-[14px]">
                      ⌄
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="border-b border-[#d7cad3] bg-[#f5f5f5] lg:hidden"
        >
          <nav
            aria-label="Mobile primary"
            className="mx-auto w-full max-w-[1728px] px-4 py-4 sm:px-6"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-md px-3 py-3 text-base transition hover:bg-[#ece4e9] ${
                      item.active ? "text-[#6d0f50]" : "text-[#231f22]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasChevron ? <span aria-hidden="true">⌄</span> : null}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid gap-3">
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#6d0f50] px-4 text-base font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#6d0f50] focus:ring-offset-2"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white/10">
                  <Image
                    src={ACCOUNT_ICON_SRC}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain p-0.5"
                  />
                </span>
                Account
              </button>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#f54f57] px-4 text-base font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f54f57] focus:ring-offset-2"
              >
                Take Assessment
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
