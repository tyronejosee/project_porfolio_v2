import { ContactSection, HeroSection, ProjectSection, SkillSection } from "@/components";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

import projects from "@/data/projects.json"
import skills from "@/data/skills.json"
import experiences from "@/data/experiences.json"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection experiences={experiences} />
      <ProjectSection projects={projects} />
      <SkillSection skills={skills} />
      < ContactSection />
    </>
  );
}
