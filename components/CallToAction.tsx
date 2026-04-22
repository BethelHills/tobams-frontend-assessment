import Image from "next/image";

const CTA_IMAGE = "D. CTA.png";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="px-5 py-8"
      aria-labelledby="cta-heading"
    >
      <h2 id="cta-heading" className="sr-only">
        Book a consultation — accelerate growth at your organisation
      </h2>
      <div className="mx-auto w-full max-w-full overflow-hidden rounded-lg">
        <Image
          src={`/images/${encodeURIComponent(CTA_IMAGE)}`}
          alt="Call to action — see how we can help and book a consultation"
          width={1134}
          height={204}
          className="block h-auto w-full object-contain"
          sizes="(max-width: 430px) calc(100vw - 40px), 390px"
        />
      </div>
    </section>
  );
}
