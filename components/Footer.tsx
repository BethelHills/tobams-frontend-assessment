import Image from "next/image";

import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  FOOTER_COMPANY,
  FOOTER_SOLUTION,
  FOOTER_WHAT_WE_DO,
} from "@/lib/siteNav";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8aca] focus-visible:ring-offset-2 focus-visible:ring-offset-[#220217]";

const FOOTER_IMAGE = "Frame 1618869161.png";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#220217] text-white"
      aria-labelledby="site-footer-heading"
    >
      <h2 id="site-footer-heading" className="sr-only">
        Tobams Group — footer, links, offices, and legal
      </h2>

      <div className="border-b border-white/10 px-4 py-6 md:px-6 xl:px-8">
        <p className="text-[8px] text-white/70 md:text-xs">
          Ready to be part of something extraordinary?
        </p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="max-w-[280px] text-base font-medium leading-snug md:text-lg">
            {"Let's work together to create a difference"}
          </h3>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Get%20in%20touch`}
            className={`inline-flex min-h-11 shrink-0 items-center justify-center rounded bg-[#6f1c57] px-4 py-2 text-center text-xs font-medium text-white md:text-sm ${focusRing}`}
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="grid gap-8 px-4 py-8 md:px-6 xl:px-8">
        <nav aria-label="Footer" className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xs font-semibold md:text-sm">What We Do</h3>
            <ul className="space-y-2 text-[8px] text-white/70 md:text-xs">
              {FOOTER_WHAT_WE_DO.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={`inline-block min-h-8 py-1 hover:text-white ${focusRing} rounded`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold md:text-sm">Company</h3>
            <ul className="space-y-2 text-[8px] text-white/70 md:text-xs">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={`inline-block min-h-8 py-1 hover:text-white ${focusRing} rounded`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold md:text-sm">Solution</h3>
            <ul className="space-y-2 text-[8px] text-white/70 md:text-xs">
              {FOOTER_SOLUTION.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={`inline-block min-h-8 py-1 hover:text-white ${focusRing} rounded`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="grid gap-5 border-t border-white/10 pt-5 text-[8px] text-white/70 md:text-xs">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xs font-semibold text-white md:text-sm">
                Registered Offices
              </h3>
              <p>United Kingdom</p>
              <p>7A/1A Leadership by Example House</p>
              <p>Victoria Street, Lagos</p>
            </div>
            <div>
              <h3 className="mb-2 text-xs font-semibold text-white md:text-sm">Nigeria</h3>
              <p>RC 148312 | Registered by CAC</p>
              <p>4 Isaac John, GRA, Ikeja</p>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-xs font-semibold text-white md:text-sm">
              Contact Information
            </h3>
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`font-medium text-white underline underline-offset-2 hover:text-[#ff8aca] ${focusRing} rounded`}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className={`font-medium text-white underline underline-offset-2 hover:text-[#ff8aca] ${focusRing} rounded`}
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 text-[7px] text-white/50 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between md:px-6 md:text-xs xl:px-8">
        <p>Copyright © Tobams Group, 2026. All rights reserved.</p>
        <nav aria-label="Legal" className="flex flex-wrap gap-3">
          <a href="#page-top" className={`min-h-8 hover:text-white/80 ${focusRing} rounded`}>
            Terms and Conditions
          </a>
          <a href="#page-top" className={`min-h-8 hover:text-white/80 ${focusRing} rounded`}>
            Privacy Policy
          </a>
          <a href="#page-top" className={`min-h-8 hover:text-white/80 ${focusRing} rounded`}>
            Cookie Policy
          </a>
        </nav>
      </div>

      <div className="border-t border-white/5" aria-hidden>
        <Image
          src={`/images/${encodeURIComponent(FOOTER_IMAGE)}`}
          alt=""
          width={1440}
          height={964}
          className="pointer-events-none block h-auto w-full max-w-full select-none object-contain object-top opacity-80"
          sizes={CONTENT_IMAGE_SIZES}
        />
      </div>
    </footer>
  );
}
