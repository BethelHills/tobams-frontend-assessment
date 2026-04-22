import Image from "next/image";

import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";

const HEADER_IMAGE = "Component 1.png";

export default function Header() {
  return (
    <header className="px-3 pt-2 md:px-5 md:pt-4 xl:px-8 xl:pt-6">
      <div className="overflow-hidden rounded-t-sm bg-white md:rounded-t-none">
        <Image
          src={`/images/${encodeURIComponent(HEADER_IMAGE)}`}
          alt="Tobams Group site header with logo, account actions, and navigation"
          width={1440}
          height={173}
          className="h-auto w-full object-contain object-top"
          sizes={CONTENT_IMAGE_SIZES}
          priority
        />
      </div>
    </header>
  );
}
