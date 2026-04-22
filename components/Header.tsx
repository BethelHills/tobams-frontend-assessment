import AccountDialogTrigger from "@/components/AccountDialogTrigger";
import { PRIMARY_NAV } from "@/lib/siteNav";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7b1b5d] focus-visible:ring-offset-2";

export default function Header() {
  return (
    <header className="px-3 pt-2 md:px-5 md:pt-4 xl:px-8 xl:pt-6">
      <h1 className="sr-only">Tobams Group — Training and Development</h1>
      <div className="overflow-hidden rounded-t-sm bg-white md:rounded-t-none">
        <div className="flex flex-col border-b border-[#efe7ec]">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
            <a
              href="#page-top"
              className={`flex min-h-11 items-center gap-2 rounded-md ${focusRing}`}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#4b0f3c] text-sm text-white"
                aria-hidden
              >
                TG
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#7b1b5d]">
                  Tobams
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#7b1b5d]">
                  Group
                </span>
              </span>
            </a>
            <div className="flex flex-wrap items-center justify-end gap-2">
              <AccountDialogTrigger />
              <a
                href="#contact"
                className={`inline-flex min-h-11 items-center justify-center rounded bg-[#ea4b5f] px-3 py-2 text-center text-[10px] font-medium text-white md:text-xs ${focusRing}`}
              >
                Take Assessment
              </a>
            </div>
          </div>
          <nav aria-label="Primary" className="border-t border-[#efe7ec] px-2 py-2 md:px-3">
            <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[8.5px] text-[#60575d] md:gap-x-4 md:text-xs">
              {PRIMARY_NAV.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`inline-flex min-h-11 items-center rounded px-1 py-2 underline-offset-4 ${focusRing} ${
                      index === 0
                        ? "font-semibold text-[#7b1b5d] underline"
                        : "hover:text-[#4b0f3c]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
