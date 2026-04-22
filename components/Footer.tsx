import Image from "next/image";

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
      <Image
        src={`/images/${encodeURIComponent(FOOTER_IMAGE)}`}
        alt="Tobams Group footer with contact, office locations, navigation, and copyright"
        width={1440}
        height={964}
        className="block h-auto w-full max-w-full object-contain object-top"
        sizes="430px"
      />
    </footer>
  );
}
