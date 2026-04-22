import Image from "next/image";

const NAVBAR_DESIGN = "Frame 1618869587.png";

export default function Navbar() {
  return (
    <header className="w-full border-b border-black/5 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <p className="text-sm font-semibold tracking-tight text-foreground">
          Tobams Assessment
        </p>
        <nav aria-label="Primary" className="hidden gap-6 text-sm text-foreground/80 sm:flex">
          <a className="hover:text-foreground" href="#learning">
            Learning
          </a>
          <a className="hover:text-foreground" href="#training">
            Training
          </a>
          <a className="hover:text-foreground" href="#consulting">
            Consulting
          </a>
          <a className="hover:text-foreground" href="#contact">
            Contact
          </a>
        </nav>
      </div>
      <div className="border-t border-black/5 bg-zinc-50 px-4 py-6 dark:bg-zinc-950/50 sm:px-6">
        <Image
          src={`/images/${encodeURIComponent(NAVBAR_DESIGN)}`}
          alt="Navigation and header design"
          width={1440}
          height={200}
          className="mx-auto h-auto w-full max-w-6xl object-contain"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </header>
  );
}
