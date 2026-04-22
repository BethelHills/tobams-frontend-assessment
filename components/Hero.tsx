import Image from "next/image";

import { mailtoConsult, PRIMARY_NAV } from "@/lib/siteNav";

const whatWeDoNav = PRIMARY_NAV.find((item) => item.label === "What We Do");
const WHAT_WE_DO_HREF = whatWeDoNav?.href ?? "#hero";

const HERO_BG =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="scroll-mt-4 relative min-h-[520px] w-full overflow-hidden md:min-h-[620px] lg:min-h-[720px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black/70"
      />
      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-7xl items-center justify-center px-4 py-16 text-center md:min-h-[620px] md:px-6 lg:min-h-[720px] lg:px-8">
        <div className="w-full max-w-3xl">
          <a
            href={WHAT_WE_DO_HREF}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:text-sm"
          >
            What We Do
          </a>
          <h1
            id="hero-title"
            className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Training and Development
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-200 md:text-base lg:text-lg">
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today{"'"}s ever-evolving landscape.
          </p>
          <a
            href={mailtoConsult("Book a consultation")}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-[#7C1D5A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#7C1D5A] focus:ring-offset-2 focus:ring-offset-black"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
