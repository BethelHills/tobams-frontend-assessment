import Image from "next/image";

const TRAINING_BLOCKS_IMAGE = "Frame 1618869587.png";

export default function TrainingBlocks() {
  return (
    <section
      id="training"
      className="bg-white px-5 py-8"
      aria-labelledby="training-blocks-heading"
    >
      <h2 id="training-blocks-heading" className="sr-only">
        Corporate, individual, and capacity training programs
      </h2>
      <div className="mx-auto w-full max-w-full">
        <Image
          src={`/images/${encodeURIComponent(TRAINING_BLOCKS_IMAGE)}`}
          alt="Corporate trainings, personalised individual training, and capacity development"
          width={1440}
          height={1497}
          className="h-auto w-full object-contain"
          sizes="(max-width: 430px) 100vw, 430px"
        />
      </div>
    </section>
  );
}
