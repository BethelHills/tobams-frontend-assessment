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
        <div className="overflow-hidden rounded-[22px] border-[3px] border-[#e6b62d] bg-[#3c0229] px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:mx-auto lg:box-border lg:flex lg:min-h-[719px] lg:max-w-[1312px] lg:w-full lg:rounded-[20px] lg:p-[40px]">
          <div className="grid w-full flex-1 grid-cols-1 items-start gap-8 min-h-0 lg:grid-cols-[592px_minmax(0,1fr)] lg:gap-8 lg:items-stretch">
            <h2
              id="management-program-heading"
              className="max-w-[620px] font-medium tracking-[-0.02em] text-white max-md:whitespace-nowrap max-md:leading-[1.5] max-md:text-[clamp(0.875rem,3.25vw+0.32rem,2.125rem)] md:text-[42px] md:leading-[1.18] lg:col-start-2 lg:row-start-1 lg:max-w-none lg:text-[58px] lg:leading-[1.18]"
            >
              Management Development Program
            </h2>

            <div className="relative min-h-[320px] w-full overflow-hidden rounded-[14px] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:h-[639px] lg:w-[592px] lg:shrink-0 lg:min-h-0">
              <Image
                src={`/images/${encodeURIComponent(MDP_IMAGE)}`}
                alt="Three professionals reviewing a tablet in an office setting"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 592px"
              />
            </div>

            <div className="flex min-h-0 w-full min-w-0 flex-col gap-8 py-1 text-white lg:col-start-2 lg:row-start-2 lg:min-h-0 lg:gap-6 lg:pr-[18px]">
              <div className="min-w-0">
                <p className="mt-6 max-w-[650px] text-[18px] leading-[1.65] text-[#f1deeb] md:text-[20px] lg:mt-0 lg:text-[19px]">
                  Tobams Group offers a comprehensive Management Development
                  Program designed to equip corporate organisations with the
                  high-performing leaders they need to thrive.
                </p>

                <p className="mt-6 max-w-[660px] text-[18px] leading-[1.65] text-[#f1deeb] md:text-[20px] lg:mt-5 lg:text-[19px]">
                  Our program includes workshops, seminars, coaching sessions,
                  online courses, and experiential learning opportunities
                  designed to improve leadership, strategic thinking,
                  communication, and other essential managerial competencies for
                  corporate organisations.
                </p>
              </div>

              <div className="mt-0 w-full min-w-0 space-y-4 lg:space-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex min-h-[56px] w-full min-w-0 items-center gap-3 rounded-[10px] bg-[#a47698] px-3 py-2 text-[18px] font-medium leading-snug text-white md:text-[20px] lg:min-h-0 lg:px-3.5 lg:py-2.5 lg:text-[17px]"
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[18px] leading-none text-white lg:text-[16px]"
                    >
                      ⚡
                    </span>
                    <span className="min-w-0 break-words">{benefit}</span>
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
