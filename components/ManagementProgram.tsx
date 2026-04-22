import Image from "next/image";

const MANAGEMENT_PROGRAM_IMAGE = "Frame 1618869831.png";

export default function ManagementProgram() {
  return (
    <section
      className="px-5 py-6"
      aria-labelledby="management-program-heading"
    >
      <h2 id="management-program-heading" className="sr-only">
        Management Development Program
      </h2>
      <Image
        src={`/images/${encodeURIComponent(MANAGEMENT_PROGRAM_IMAGE)}`}
        alt="Management Development Program — leadership outcomes and organisational impact"
        width={1440}
        height={847}
        className="h-auto w-full rounded-lg object-contain"
        sizes="(max-width: 430px) calc(100vw - 40px), 390px"
      />
    </section>
  );
}
