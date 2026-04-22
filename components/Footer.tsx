import Image from "next/image";

import ImageOverlayLink from "@/components/ImageOverlayLink";
import { CONTENT_IMAGE_SIZES } from "@/lib/contentImageSizes";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
  mailtoConsult,
} from "@/lib/siteNav";

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
      <div className="relative w-full">
        <Image
          src={`/images/${encodeURIComponent(FOOTER_IMAGE)}`}
          alt="Tobams Group footer with contact details, office locations, and policies"
          width={1440}
          height={964}
          className="block h-auto w-full max-w-full object-contain object-top select-none"
          sizes={CONTENT_IMAGE_SIZES}
        />

        <ImageOverlayLink
          href={mailtoConsult("Get in touch")}
          ariaLabel="Get in touch"
          className="left-[48%] top-[2%] h-[9%] w-[min(50%,20rem)] min-h-11 sm:left-[52%] sm:top-[3%]"
        />

        <ImageOverlayLink
          href={`mailto:${CONTACT_EMAIL}`}
          ariaLabel={`Email ${CONTACT_EMAIL}`}
          className="left-[3%] top-[72%] h-[5%] w-[min(88%,28rem)] min-h-10 sm:top-[73%]"
        />

        <ImageOverlayLink
          href={`tel:${CONTACT_PHONE_TEL}`}
          ariaLabel="Call Tobams Group"
          className="left-[3%] top-[77%] h-[5%] w-[min(70%,24rem)] min-h-10 sm:top-[78%]"
        />

        <ImageOverlayLink
          href="#page-top"
          ariaLabel="Terms and conditions"
          className="bottom-[1%] left-[0%] h-[4%] w-[30%] min-h-9"
        />
        <ImageOverlayLink
          href="#page-top"
          ariaLabel="Privacy policy"
          className="bottom-[1%] left-[30%] h-[4%] w-[34%] min-h-9"
        />
        <ImageOverlayLink
          href="#page-top"
          ariaLabel="Cookie policy"
          className="bottom-[1%] left-[64%] h-[4%] w-[34%] min-h-9"
        />
      </div>
    </footer>
  );
}
