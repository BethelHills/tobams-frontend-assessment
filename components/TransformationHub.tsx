import Image from "next/image";

const TRANSFORMATION_HUB_IMAGE = "18.png";

export default function TransformationHub() {
  return (
    <section
      className="px-5 py-6"
      aria-labelledby="transformation-hub-heading"
    >
      <h2 id="transformation-hub-heading" className="sr-only">
        Transformation Hub With Ife Newton
      </h2>
      <div className="rounded-lg bg-[#f1d7df] p-4">
        <Image
          src={`/images/${TRANSFORMATION_HUB_IMAGE}`}
          alt="Transformation Hub with Ife Newton — CEO masterclass series and leadership growth"
          width={1440}
          height={780}
          className="h-auto w-full rounded-lg object-contain"
          sizes="(max-width: 430px) calc(100vw - 56px), 374px"
        />
      </div>
    </section>
  );
}
