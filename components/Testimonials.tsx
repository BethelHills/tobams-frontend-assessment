"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function Testimonials() {
  const testimonials = useMemo(
    () => [
      {
        name: "Aisha Yusuf",
        role: "Founder, CraftHub NG",
        text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
      },
      {
        name: "John Davies",
        role: "Marketing Manager, E-Commerce Emporium",
        text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      },
      {
        name: "Chinonso Nwankwo",
        role: "HR Director, FutureTech Solutions",
        text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
      },
      {
        name: "Tolu Adebayo",
        role: "Operations Lead, VisionWorks",
        text: "Their training programs were practical, well-structured, and easy to apply. We saw immediate improvement in how our team approached execution and communication.",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
      },
    ],
    [],
  );

  const [startIndex, setStartIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    setStartIndex((current) => (current === 0 ? 0 : current - 1));
  };

  const handleNext = () => {
    setStartIndex((current) =>
      current >= testimonials.length - 3
        ? testimonials.length - 3
        : current + 1,
    );
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="scroll-mt-4 w-full bg-[#f6f6f6] py-10 md:py-14 lg:py-[56px]"
    >
      <div className="mx-auto w-full max-w-[1728px] overflow-hidden pl-4 pr-0 sm:pl-6 md:pl-10 lg:pl-[78px]">
        <h2
          id="testimonials-heading"
          className="text-center text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#171717] md:text-[48px] lg:text-[64px]"
        >
          Testimonials
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 pr-4 sm:pr-6 md:mt-10 md:grid-cols-2 md:pr-10 lg:mt-[56px] lg:grid-cols-3 lg:gap-[28px] lg:pr-0">
          {visibleTestimonials.map((item) => (
            <article
              key={item.name}
              className="min-h-[290px] rounded-[22px] border-l-[3px] border-l-[#ff4f63] bg-[#f1f1f1] px-6 py-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] lg:min-h-[291px] lg:rounded-[20px] lg:px-[28px] lg:py-[26px]"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={item.image}
                  alt=""
                  width={54}
                  height={54}
                  className="h-[54px] w-[54px] shrink-0 rounded-full object-cover lg:h-[52px] lg:w-[52px]"
                  sizes="54px"
                />
                <div className="min-w-0">
                  <h3 className="text-[20px] font-medium leading-[1.25] text-[#262626] lg:text-[18px]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[16px] leading-[1.35] text-[#7a7a7a] lg:text-[16px]">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="mt-8 text-[19px] leading-[1.65] text-[#2b2b2b] lg:mt-[28px] lg:text-[17px]">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3 pr-4 sm:pr-6 md:pr-10 lg:mt-[48px] lg:pr-[89px]">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Show previous testimonials"
            disabled={startIndex === 0}
            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#f3dde3] text-[28px] leading-none text-[#ff4f63] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Show next testimonials"
            disabled={startIndex >= testimonials.length - 3}
            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#f3dde3] text-[28px] leading-none text-[#ff4f63] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
