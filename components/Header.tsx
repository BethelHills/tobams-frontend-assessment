"use client";

import AccountDialogTrigger from "@/components/AccountDialogTrigger";
import { PRIMARY_NAV } from "@/lib/siteNav";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7b1b5d] focus-visible:ring-offset-2";

const navLinkBase =
  "inline-flex min-h-10 max-w-full items-center rounded-md px-2.5 py-2 text-center text-[10px] font-medium leading-tight text-[#60575d] transition-colors hover:bg-[#faf7f9] hover:text-[#4b0f3c] md:px-3 md:text-xs lg:text-sm";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e8dde3] bg-white shadow-sm">
      <h1 className="sr-only">Tobams Group — Training and Development</h1>

      <div className="border-b border-[#efe7ec] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href="#page-top"
            className={`flex min-h-10 items-center gap-2 rounded-md ${focusRing}`}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#4b0f3c] text-sm font-semibold text-white"
              aria-hidden
            >
              TG
            </span>
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[11px] font-bold uppercase tracking-wide text-[#7b1b5d] md:text-xs">
                Tobams
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wide text-[#7b1b5d] md:text-xs">
                Group
              </span>
            </span>
          </a>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <AccountDialogTrigger />
            <a
              href="#contact"
              className={`inline-flex min-h-10 items-center justify-center rounded-md bg-[#ea4b5f] px-3 py-2 text-center text-[10px] font-semibold text-white md:text-xs ${focusRing}`}
            >
              Take Assessment
            </a>
          </div>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className="px-3 py-3 sm:px-5 sm:py-3.5 lg:px-7 lg:py-4"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-2 sm:gap-x-1 md:gap-x-2">
          {PRIMARY_NAV.map((item, index) => (
            <li key={item.label}>
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
      </nav>
    </header>
  );
}
