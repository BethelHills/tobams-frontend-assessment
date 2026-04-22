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
    <div className="min-h-screen bg-[#1f1f1f] py-4 text-[#2c2430]">
      <div className="mx-auto w-full max-w-[430px] bg-[#f5f1f4] shadow-2xl">
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
