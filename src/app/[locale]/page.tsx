import { HeroSection, ProjectSection, SkillSection } from "@/components";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

import projects from "@/data/projects.json"
import skills from "@/data/skills.json"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection projects={projects} />
      <SkillSection skills={skills} />
    </>
  );
}
