import Image from "next/image";

const TESTIMONIALS_IMAGE = "Testimonials.png";

export default function Testimonials() {
  return (
    <section
      className="px-5 pb-8"
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Client testimonials
      </h2>
      <div className="mx-auto w-full max-w-full">
        <Image
          src={`/images/${TESTIMONIALS_IMAGE}`}
          alt="Testimonials from Anita Yusuf, John Okechukwu, Chisom Nnamdi, and other Tobams Group clients"
          width={1440}
          height={538}
          className="block h-auto w-full object-contain"
          sizes="(max-width: 430px) 100vw, 430px"
        />
      </div>
    </section>
  );
}
