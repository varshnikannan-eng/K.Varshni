import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { GoalSection } from './components/GoalSection';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="varshni-portfolio-app" className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col">
      {/* 1. Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. About Me Section */}
        <AboutSection />

        {/* 4. Skills Section */}
        <SkillsSection />

        {/* 5. Projects Section */}
        <ProjectsSection />

        {/* 6. Learning Journey Section */}
        <JourneySection />

        {/* 7. Career Goal Section */}
        <GoalSection />

        {/* 8. Social Links Section */}
        <SocialSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
