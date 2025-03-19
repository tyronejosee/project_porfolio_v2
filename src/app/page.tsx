import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from "@/components/sections";

import projects from "@/data/projects.json";
import skills from "@/data/skills.json";
import experiences from "@/data/experiences.json";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection experiences={experiences} />
      <ProjectSection projects={projects} />
      <SkillSection skills={skills} />
      <ContactSection />
    </>
  );
}
