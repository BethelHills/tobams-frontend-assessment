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
  /** Mobile: title → image → body; desktop: alternating two-column layout. */
  const headingCell = reverse
    ? "order-1 lg:col-start-2 lg:row-start-1"
    : "order-1 lg:col-start-1 lg:row-start-1";

  const imageCell = reverse
    ? "order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2"
    : "order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2";

  const bodyCell = reverse
    ? "order-3 lg:col-start-2 lg:row-start-2"
    : "order-3 lg:col-start-1 lg:row-start-2";

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-[84px]">
        <h2
          className={`text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-[#161616] md:text-[38px] lg:text-[58px] ${headingCell}`}
        >
          {title}
        </h2>

        <div className={imageCell}>
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

        <div className={bodyCell}>
          <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#757575] md:text-[18px] lg:text-[18px]">
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
    imageSrc: `/images/${encodeURIComponent("Corporate Trainings image.png")}`,
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
    imageSrc: `/images/${encodeURIComponent("Personalised Individual Training image.png")}`,
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
    imageSrc: `/images/${encodeURIComponent("Capacity Development image.png")}`,
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
