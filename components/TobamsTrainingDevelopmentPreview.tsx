import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import TrainingBlocks from "@/components/TrainingBlocks";
import ManagementProgram from "@/components/ManagementProgram";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

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

        <footer className="bg-[#220217] text-white">
          <div className="border-b border-white/10 px-5 py-6">
            <p className="text-[8px] text-white/70">
              Ready to be part of something extraordinary?
            </p>
            <div className="mt-2 flex items-center justify-between gap-4">
              <h3 className="max-w-[210px] text-[16px] font-medium leading-5">
                {"Let's work together to create a difference"}
              </h3>
              <button
                type="button"
                className="rounded bg-[#6f1c57] px-4 py-2 text-[8px] font-medium text-white"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="grid gap-8 px-5 py-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#4b0f3c] text-xs text-white">
                  TG
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-[#ff8aca]">
                    Tobams
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-[#ff8aca]">
                    Group
                  </div>
                </div>
              </div>
              <p className="mt-4 max-w-[250px] text-[8px] leading-4 text-white/70">
                Tobams Group is an innovative consultancy firm advancing the
                future of the talent development industry by amplifying potential
                and helping individuals and organisations thrive.
              </p>
              <div className="mt-4 flex gap-2">
                {["in", "ig", "x"].map((item) => (
                  <span
                    key={item}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-[9px] uppercase text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 text-[8px]">
              <div>
                <h4 className="mb-3 text-[9px] font-semibold text-white">
                  What We Do
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li>Sustainable Practices</li>
                  <li>Strategic Planning</li>
                  <li>Tech Talent Solutions</li>
                  <li>Training and Development</li>
                  <li>IT Consulting Services</li>
                  <li>Social Impact</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-[9px] font-semibold text-white">
                  Company
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li>About</li>
                  <li>Jobs</li>
                  <li>Projects</li>
                  <li>Our Founder</li>
                  <li>The Team</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-[9px] font-semibold text-white">
                  Solution
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li>Tobams Group Academy</li>
                  <li>Hire Talent</li>
                  <li>Campus Ambassadors</li>
                  <li>Join Our Paid Community</li>
                  <li>Pricing</li>
                  <li>Book a Consultation</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-5 border-t border-white/10 pt-5 text-[8px] text-white/70">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="mb-2 text-[9px] font-semibold text-white">
                    Registered Offices
                  </h5>
                  <p>United Kingdom</p>
                  <p>7A/1A Leadership by Example House</p>
                  <p>Victoria Street, Lagos</p>
                </div>
                <div>
                  <h5 className="mb-2 text-[9px] font-semibold text-white">
                    Nigeria
                  </h5>
                  <p>RC 148312 | Registered by CAC</p>
                  <p>4 Isaac John, GRA, Ikeja</p>
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-[9px] font-semibold text-white">
                  Contact Information
                </h5>
                <p>hello@tobamsgroup.com</p>
                <p>+234 809 000 7746</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4 text-[7px] text-white/50">
            <p>Copyright © Tobams Group, 2026. All rights reserved.</p>
            <div className="flex gap-3">
              <span>Terms and Conditions</span>
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
