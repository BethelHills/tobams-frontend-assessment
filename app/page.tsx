import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import ManagementProgram from "@/components/ManagementProgram";
import Testimonials from "@/components/Testimonials";
import TrainingBlocks from "@/components/TrainingBlocks";
import TrainingConsultant from "@/components/TrainingConsultant";
import TransformationHub from "@/components/TransformationHub";

export default function Home() {
  return (
    <div
      id="page-top"
      className="isolate min-h-screen w-full overflow-x-clip bg-[#f5f1f4] text-[#2c2430]"
    >
      <Header />

      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-8 sm:pb-10 md:pb-12 lg:pb-16"
      >
        <Hero />

        <LearningManagement />

        <TrainingBlocks />

        <ManagementProgram />

        <TransformationHub />

        <TrainingConsultant />

        <CallToAction />

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
