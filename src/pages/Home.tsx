import React from "react";

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ExperiencesSection from "../components/sections/ExperiencesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import EducationSection from "../components/sections/EducationSection";
// import CertificationsSection from "../components/sections/CertificationsSection";
// import BlogSection from "../components/sections/BlogSection";
// import ContactSection  from "../components/sections/ContactSection";
// import TestimonialsSection from "../components/sections/TestimonialsSection";



const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <EducationSection />
      <ProjectsSection />
      {/* <CertificationsSection /> */}
      {/* <BlogSection /> */}
      {/* <ContactSection /> */}
      {/* <TestimonialsSection /> */}
    </div>
  );
};

export default Home;