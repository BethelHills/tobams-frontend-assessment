import Image from "next/image";

const HEADER_IMAGE = "Component 1.png";

export default function Header() {
  return (
    <header className="px-3 pt-2">
      <div className="overflow-hidden rounded-t-sm bg-white">
        <Image
          src={`/images/${encodeURIComponent(HEADER_IMAGE)}`}
          alt="Tobams Group site header with logo, account actions, and navigation"
          width={1440}
          height={173}
          className="h-auto w-full object-contain object-top"
          sizes="(max-width: 430px) 100vw, 430px"
          priority
        />
      </div>
    </header>
  );
}
