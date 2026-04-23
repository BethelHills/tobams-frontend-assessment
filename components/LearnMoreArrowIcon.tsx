import Image from "next/image";

const ARROW_FILE = "arrow-up-right.png";

/** Arrow for Learn More CTAs; same asset and sizing on mobile and desktop site-wide. */
export default function LearnMoreArrowIcon() {
  return (
    <Image
      src={`/images/${encodeURIComponent(ARROW_FILE)}`}
      alt=""
      width={22}
      height={22}
      className="h-6 w-6 shrink-0 object-contain lg:h-[22px] lg:w-[22px]"
      aria-hidden
    />
  );
}
