import Image from "next/image";

const growthImages = [
  {
    src: `/images/${encodeURIComponent("18.png")}`,
    alt: "Learning and collaboration at Tobams Group",
  },
  {
    src: `/images/${encodeURIComponent("Component 1.png")}`,
    alt: "Professional development highlight",
  },
  {
    src: `/images/${encodeURIComponent("Frame 1618868687.png")}`,
    alt: "Training programme visual",
  },
  {
    src: `/images/${encodeURIComponent("D. CTA.png")}`,
    alt: "Take the next step with Tobams Group",
  },
] as const;

export default function GrowthLearning() {
  return (
    <div className="w-full">
      <h2
        id="growth-learning-heading"
        className="max-w-[920px] text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-[#161616] md:text-[38px] lg:text-[48px]"
      >
        Your growth, powered by{" "}
        <span className="font-semibold text-[#5b083f]">bold learning</span>
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:mt-10 md:gap-6 lg:mt-12 lg:grid-cols-4 lg:gap-8">
        {growthImages.map((item) => (
          <div
            key={item.src}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#e8e8e8]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1023px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
