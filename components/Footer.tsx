import Image from "next/image";

const ART = "Footer Final.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-background dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <Image
          src={`/images/${encodeURIComponent(ART)}`}
          alt="Site footer with links and information"
          width={1440}
          height={400}
          className="h-auto w-full object-contain"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </footer>
  );
}
