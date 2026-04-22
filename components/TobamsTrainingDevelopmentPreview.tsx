import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";

type SplitBlockProps = {
  title: string;
  text: string;
  list: string[];
  imagePosition: "left" | "right";
};

function SplitBlock({ title, text, list, imagePosition }: SplitBlockProps) {
  const image = (
    <div className="h-40 rounded-lg bg-[linear-gradient(135deg,#d6c0b4,#9bb6ca)]" />
  );

  const content = (
    <div>
      <h3 className="text-[14px] font-semibold text-[#494047]">{title}</h3>
      <p className="mt-2 text-[8.5px] leading-4 text-[#746a72]">{text}</p>
      <ul className="mt-3 space-y-1 text-[7.8px] text-[#5f5460]">
        {list.map((item) => (
          <li key={item}>✦ {item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid gap-4">
      {imagePosition === "left" ? image : content}
      {imagePosition === "left" ? content : image}
    </div>
  );
}

export default function TobamsTrainingDevelopmentPreview() {
  const corporateList = [
    "Leadership Training",
    "Strategic Planning and Implementation",
    "Project Management",
    "Sustainability Training",
    "Human Resource Training",
  ];

  const personalList = [
    "Leadership Development",
    "Soft Skills Development",
    "Industry Specific Knowledge",
    "Technical Skills Enhancement",
    "Time Management",
    "Career Development",
  ];

  const capacityList = [
    "Tailored Training Programs",
    "Expert-Led Workshops",
    "Personalized Mentorship",
    "Technical Skill Enhancement",
    "Collaborative Learning Environment",
    "Ongoing Support and Resources",
  ];

  const managementList = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organizational Culture",
    "Sustainable Growth",
  ];

  const transformationList = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainable Leadership",
    "Communication Skills",
    "Business Model",
  ];

  const trainerList = [
    {
      title: "Expert-Led Learning",
      text: "Gain insights from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Comprehensive Curriculum",
      text: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Interactive Workshops",
      text: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Internationally Recognized",
      text: "Upon completion, a globally recognized certification opens doors to new opportunities.",
    },
  ];

  const testimonials = [
    {
      name: "Anita Yusuf",
      role: "Founder",
      text: "Working with Tobams Group on our website was a breeze. They understood our brand and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    },
    {
      name: "John Okechukwu",
      role: "Operations Lead",
      text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results.",
    },
    {
      name: "Chisom Nnamdi",
      role: "Business Owner",
      text: "Tobams Group has been instrumental in our talent acquisition journey. Their Hiring Talent Solution service consistently connects us with the right professionals.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1f1f1f] py-4 text-[#2c2430]">
      <div className="mx-auto w-full max-w-[430px] bg-[#f5f1f4] shadow-2xl">
        <Header />

        <main>
          <Hero />

          <LearningManagement />

          <section className="bg-white px-5 py-8">
            <div className="grid gap-6">
              <SplitBlock
                title="Corporate Trainings"
                text="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation."
                list={corporateList}
                imagePosition="right"
              />

              <SplitBlock
                title="Personalised Individual Training"
                text="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals."
                list={personalList}
                imagePosition="left"
              />

              <SplitBlock
                title="Capacity Development"
                text="At Tobams Group, we empower individuals and organisations through tailored training programs, expert-led workshops, and personalised mentorship."
                list={capacityList}
                imagePosition="right"
              />
            </div>
          </section>

          <section className="px-5 py-6">
            <div className="overflow-hidden rounded-lg bg-[#4a073b] p-4 text-white">
              <div className="grid gap-4">
                <div className="h-52 rounded bg-[linear-gradient(135deg,#d9c0a3,#9fc1c8)]" />
                <div>
                  <h3 className="max-w-[180px] text-[17px] font-semibold leading-6">
                    Management Development Program
                  </h3>
                  <p className="mt-3 text-[8.5px] leading-4 text-white/80">
                    Tobams Group offers a comprehensive Management Development
                    Program designed to equip corporate organisations with the
                    high-performing leaders they need to thrive.
                  </p>
                  <div className="mt-4 space-y-2">
                    {managementList.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded bg-[#8b577d]/60 px-3 py-2 text-[8px]"
                      >
                        <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-white text-[8px] text-[#6d2458]">
                          ✦
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 py-6">
            <div className="rounded-lg bg-[#f1d7df] p-4">
              <p className="text-[8px] italic text-[#8f7a87]">
                Learning With Our CEO
              </p>
              <h3 className="mt-1 text-[16px] italic text-[#7b3565]">
                Transformation Hub With Ife Newton
              </h3>
              <p className="mt-3 text-[8.5px] leading-4 text-[#655761]">
                Transformation Hub with Ife Newton is a flagship masterclass series
                curated by the CEO. It helps clients carve trajectories and
                leadership capabilities for personal and professional growth.
              </p>
              <div className="mt-4 rounded border-[5px] border-[#ef6d45] bg-[#f6ebe6] p-3">
                <div className="grid gap-4">
                  <div className="h-32 rounded bg-[linear-gradient(135deg,#1f5962,#c08a63)]" />
                  <div className="grid grid-cols-2 gap-2">
                    {transformationList.map((item) => (
                      <div
                        key={item}
                        className="rounded bg-white px-3 py-2 text-[8px] text-[#62515b] shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="w-max rounded bg-[#6f1c57] px-4 py-2 text-[8px] font-medium text-white"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#ece5e8] px-5 py-8">
            <h3 className="text-[15px] font-semibold text-[#7c4c73]">
              Training The Consultant
            </h3>
            <p className="mt-2 text-[8.5px] leading-4 text-[#655b62]">
              Maximize your potential as a Certified Trainer. With the help of our
              Training Consultants program, take a revolutionary step toward
              becoming a distinguished certified trainer.
            </p>
            <div className="mt-5 grid gap-3 rounded bg-[#5c0d48] p-4 text-white">
              {trainerList.map((item) => (
                <div key={item.title} className="rounded bg-[#6f1b57] p-3">
                  <h4 className="text-[9px] font-semibold">{item.title}</h4>
                  <p className="mt-2 text-[8px] leading-4 text-white/80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-4 rounded bg-[#6f1c57] px-4 py-2 text-[8px] font-medium text-white"
            >
              Learn More
            </button>
          </section>

          <section className="px-5 py-8">
            <div className="rounded bg-[#6b0f52] px-8 py-8 text-center text-white">
              <p className="text-[9px] text-white/80">
                Want to accelerate professional growth and development at your
                organisation?
              </p>
              <h3 className="mt-2 text-[11px] font-medium">
                See how we can help.
              </h3>
              <button
                type="button"
                className="mt-4 rounded bg-white px-4 py-2 text-[8px] font-semibold text-[#6b0f52]"
              >
                Book a Consultation
              </button>
            </div>
          </section>

          <section className="px-5 pb-8">
            <h3 className="text-center text-[18px] font-semibold text-[#333]">
              Testimonials
            </h3>
            <div className="mt-5 grid gap-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-lg border border-[#eadfe5] bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#f3c85d]" />
                    <div>
                      <h4 className="text-[9px] font-semibold text-[#54494f]">
                        {item.name}
                      </h4>
                      <p className="text-[7.5px] text-[#9a8b94]">{item.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[8px] leading-4 text-[#635860]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>
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
