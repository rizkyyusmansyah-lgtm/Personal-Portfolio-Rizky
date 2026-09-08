import { HeroSection } from '@/components/sections/HeroSection';
import { TechMarqueeSection } from '@/components/sections/TechMarqueeSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ResumeSection } from '@/components/sections/ResumeSection';
import { ContactSection } from '@/components/sections/ContactSection';

export function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <TechMarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
