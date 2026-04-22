import Image from "next/image";

const MDP_IMAGE = "Management Development Program image.png";

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementProgram() {
  return (
    <section
      aria-labelledby="management-program-heading"
      className="scroll-mt-4 w-full bg-[#f6f6f6] py-10 md:py-14 lg:py-[56px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[66px]">
        <div className="rounded-[22px] border-[3px] border-[#e6b62d] bg-[#3c0229] px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-[40px] lg:py-[40px]">
          <div className="grid items-stretch gap-8 lg:grid-cols-[624px_minmax(0,1fr)] lg:gap-[52px]">
            <div className="relative min-h-[320px] w-full overflow-hidden rounded-[14px] lg:min-h-[674px]">
              <Image
                src={`/images/${encodeURIComponent(MDP_IMAGE)}`}
                alt="Three professionals reviewing a tablet in an office setting"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 624px"
              />
            </div>

            <div className="flex flex-col justify-between py-1 text-white lg:pr-[18px]">
              <div>
                <h2
                  id="management-program-heading"
                  className="max-w-[620px] text-[32px] font-medium leading-[1.18] tracking-[-0.02em] text-white md:text-[42px] lg:text-[58px]"
                >
                  Management Development Program
                </h2>

                <p className="mt-6 max-w-[650px] text-[18px] leading-[1.65] text-[#f1deeb] md:text-[20px] lg:mt-[30px] lg:text-[19px]">
                  Tobams Group offers a comprehensive Management Development
                  Program designed to equip corporate organisations with the
                  high-performing leaders they need to thrive.
                </p>

                <p className="mt-6 max-w-[660px] text-[18px] leading-[1.65] text-[#f1deeb] md:text-[20px] lg:mt-[28px] lg:text-[19px]">
                  Our program includes workshops, seminars, coaching sessions,
                  online courses, and experiential learning opportunities
                  designed to improve leadership, strategic thinking,
                  communication, and other essential managerial competencies for
                  corporate organisations.
                </p>
              </div>

              <div className="mt-8 space-y-4 lg:mt-[34px] lg:space-y-[26px]">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex min-h-[56px] items-center gap-4 rounded-[10px] bg-[#a47698] px-4 text-[18px] font-medium leading-[1.35] text-white md:text-[20px] lg:min-h-[60px] lg:px-[18px] lg:text-[18px]"
                  >
                    <span
                      aria-hidden="true"
                      className="text-[18px] leading-none text-white"
                    >
                      ⚡
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
