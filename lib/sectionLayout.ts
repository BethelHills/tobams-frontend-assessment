/**
 * Shared layout: comfortable gutters on phone/tablet, full-bleed from lg up.
 */
export const SECTION_PAD_X = "px-4 sm:px-5 md:px-6 lg:px-0";

export const SECTION_PAD_Y = "py-6 sm:py-8 md:py-10 lg:py-14";

/** Framed art block; slight radius on smaller screens where gutters exist. */
export const CONTENT_ART_FRAME =
  "relative w-full overflow-hidden rounded-lg bg-white shadow-[0_14px_44px_-28px_rgba(45,10,35,0.2)] ring-1 ring-[#2c2430]/[0.06] md:rounded-xl lg:rounded-none";

export const CONTENT_IMAGE_CLASS =
  "pointer-events-none block h-auto w-full object-contain object-center";
