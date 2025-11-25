import ProfileHeader from './components/HeroHeader';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactFooter from "./components/ContactFooter";

import WorkProcessSection from "./components/WorkProcessSection";
import FAQSection from "./components/FAQSection";

export default function Page() {


  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden">
      <Navigation />
      <ProfileHeader
        name="Mohammed Rharbi"
        role="Full Stack Developer"
        photoSrc="/portpic.webp"
        cta={{ label: "Hire Me", href: "#contact" }}
      />
      <div className="relative z-10 font-sans flex flex-col items-center justify-between p-8 sm:p-20 min-h-screen">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <WorkProcessSection />
        <FAQSection />
        <ContactFooter />
      </div>
    </div>
  );
}
