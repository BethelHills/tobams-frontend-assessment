import Image from "next/image";

type TrainingBlockProps = {
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

function TrainingBlock({
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  reverse = false,
}: TrainingBlockProps) {
  const textOrder = reverse
    ? "order-2 lg:order-2"
    : "order-2 lg:order-1";
  const imageOrder = reverse
    ? "order-1 lg:order-1"
    : "order-1 lg:order-2";

  return (
    <section className="w-full">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-[84px]">
        <div className={textOrder}>
          <h2 className="text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-[#161616] md:text-[38px] lg:text-[58px]">
            {title}
          </h2>
          <p className="mt-3 max-w-[640px] text-[17px] leading-[1.65] text-[#757575] md:text-[18px] lg:mt-[14px] lg:text-[18px]">
            {description}
          </p>
          <ul className="mt-6 space-y-3 lg:mt-[22px] lg:space-y-[14px]">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[17px] leading-[1.45] text-[#757575] md:text-[18px] lg:text-[17px]"
              >
                <span className="mt-[7px] inline-block shrink-0 text-[14px] leading-none text-[#5b083f]">
                  ✦
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={imageOrder}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type TrainingBlockData = {
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

const blocks: TrainingBlockData[] = [
  {
    title: "Corporate Trainings",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    items: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Corporate meeting and training session in a conference room",
  },
  {
    title: "Personalised Individual Training",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    items: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1573497491765-cf4147a21d86?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Participant listening during an individual training session",
    reverse: true,
  },
  {
    title: "Capacity Development",
    description:
      "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    items: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Team workshop focused on business charts and planning",
  },
];

export default function TrainingBlocks() {
  return (
    <div
      id="training"
      className="scroll-mt-4 w-full bg-[#f6f6f6] py-10 md:py-14 lg:py-[72px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
        <div className="space-y-14 md:space-y-16 lg:space-y-[104px]">
          {blocks.map((block) => (
            <TrainingBlock
              key={block.title}
              title={block.title}
              description={block.description}
              items={block.items}
              imageSrc={block.imageSrc}
              imageAlt={block.imageAlt}
              reverse={block.reverse ?? false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
