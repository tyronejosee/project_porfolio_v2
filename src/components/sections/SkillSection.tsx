import { Skill } from "@/interfaces";
import Image from "next/image";
import { Header } from "@/components";

interface Props {
  skills: Skill[];
}

export const SkillSection = ({ skills }: Props) => {
  return (
    <section className="space-y-4">
      <Header title="Skills" subtitle="Lorem ipsum" headingLevel="h2" />
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-12 gap-2">
        {skills.map((skill) => (
          <article
            key={skill.id}
            className="flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-chartreuse-400 rounded-full hover-scale transform hover:scale-105 group h-16"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={30}
              height={30}
            />
          </article>
        ))}
      </div>
    </section>
  )
}
