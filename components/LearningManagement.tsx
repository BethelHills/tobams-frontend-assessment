import Image from "next/image";

const LMS_IMAGE = "D. LMS Block.png";

export default function LearningManagement() {
  return (
    <section
      id="learning"
      className="bg-[#e9e0e6] px-5 py-8"
      aria-labelledby="lms-heading"
    >
      <h2 id="lms-heading" className="sr-only">
        Learning Management System
      </h2>
      <div className="mx-auto w-full max-w-full">
        <Image
          src={`/images/${encodeURIComponent(LMS_IMAGE)}`}
          alt="TG Academy learning management system — courses, skills, and Learn More"
          width={1440}
          height={744}
          className="h-auto w-full object-contain"
          sizes="(max-width: 430px) 100vw, 430px"
        />
      </div>
    </section>
  );
}
