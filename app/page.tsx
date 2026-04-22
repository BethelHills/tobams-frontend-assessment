import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import ManagementProgram from "@/components/ManagementProgram";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import TrainingBlocks from "@/components/TrainingBlocks";
import TrainingConsultant from "@/components/TrainingConsultant";
import TransformationHub from "@/components/TransformationHub";

export default function Home() {
  return (
    <>
      <Navbar />
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
    </>
  );
}
