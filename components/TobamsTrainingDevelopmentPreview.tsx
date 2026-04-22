import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import TrainingBlocks from "@/components/TrainingBlocks";
import ManagementProgram from "@/components/ManagementProgram";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function TobamsTrainingDevelopmentPreview() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] px-3 py-4 text-[#2c2430] md:px-5 md:py-6 xl:px-8 xl:py-10">
      <div className="mx-auto w-full max-w-[425px] overflow-hidden bg-[#f5f1f4] shadow-2xl md:max-w-3xl md:rounded-xl md:shadow-2xl xl:max-w-7xl">
        <Header />

        <main>
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
