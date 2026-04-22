import { mailtoConsult } from "@/lib/siteNav";

type ConsultantItem = {
  title: string;
  text: string;
};

const items: ConsultantItem[] = [
  {
    title: "Expert-Led Learning",
    text: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    text: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    text: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    text: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingConsultant() {
  return (
    <section
      id="consulting"
      aria-labelledby="training-consultant-heading"
      className="scroll-mt-4 w-full bg-[#f6f6f6] py-10 md:py-14 lg:py-[56px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[72px]">
        <div className="rounded-[2px] bg-[#ece7eb] px-5 py-8 md:px-8 md:py-10 lg:px-[72px] lg:py-[58px]">
          <h2
            id="training-consultant-heading"
            className="text-[34px] font-medium leading-[1.14] tracking-[-0.02em] text-[#6f1455] md:text-[42px] lg:text-[62px]"
          >
            Training The Consultant
          </h2>

          <p className="mt-5 text-[20px] font-medium leading-[1.35] text-[#6f1455] md:text-[22px] lg:mt-[22px] lg:text-[18px]">
            Maximise Your Potential as a Certified Trainer:
          </p>

          <p className="mt-6 max-w-[1540px] text-[18px] leading-[1.6] text-[#2a2328] md:text-[19px] lg:mt-[28px] lg:text-[18px]">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified training
            consultant. Learn from professionals in the field, immerse yourself
            in a thorough curriculum, and hone your training methods through
            interactive workshops. Participating in our program will enable you to
            gain expertise in diverse courses while also developing the abilities
            to mentor and encourage others in their career advancement.
          </p>

          <div className="mt-8 rounded-[12px] bg-[#6c0d4f] px-5 py-6 md:px-6 md:py-7 lg:mt-[32px] lg:px-[28px] lg:py-[30px]">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:gap-x-[56px] lg:gap-y-[34px]">
              {items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-[22px] font-semibold leading-[1.3] text-white lg:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[18px] leading-[1.6] text-white md:text-[19px] lg:mt-[14px] lg:text-[18px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <a
            href={mailtoConsult("Learn more — Training the Consultant")}
            className="mt-8 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-[4px] bg-[#711053] px-6 text-[18px] font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#711053] focus:ring-offset-2 focus:ring-offset-[#ece7eb] lg:mt-[36px] lg:min-h-[52px] lg:px-[28px] lg:text-[17px]"
          >
            <span>Learn More</span>
            <span aria-hidden="true" className="text-[22px] leading-none">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
