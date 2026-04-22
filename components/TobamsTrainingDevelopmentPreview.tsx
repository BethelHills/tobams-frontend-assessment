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

export default function TobamsTrainingDevelopmentPreview() {
  return (
    <div className="min-h-screen bg-[#ebe3e8] text-[#2c2430]">
      <div
        id="page-top"
        className="mx-auto min-h-screen w-full max-w-7xl overflow-hidden bg-[#f5f1f4] shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_24px_rgba(75,15,60,0.06)] sm:my-4 sm:rounded-xl sm:shadow-md md:my-6 lg:max-w-[90rem] lg:rounded-2xl lg:shadow-lg"
      >
        <Header />

        <main
          id="main-content"
          tabIndex={-1}
          className="flex flex-col gap-0 pb-10 sm:pb-12 lg:pb-16"
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
    </div>
  );
}
