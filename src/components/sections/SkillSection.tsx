import { Skill } from "@/interfaces";
import Image from "next/image";
import { Header } from "@/components";
import { Tooltip } from "@nextui-org/react";

interface Props {
  skills: Skill[];
}

export const SkillSection = ({ skills }: Props) => {
  return (
    <section className="space-y-4">
      <Header title="Skills" subtitle="Lorem ipsum" headingLevel="h2" />
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
        {skills.map((skill) => (
          <Tooltip
            key={skill.id}
            offset={15}
            color="primary"
            placement="top"
            content={skill.name}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={200}
              height={200}
              className="bg-neutral-lightgray dark:bg-neutral-darkgrey border border-neutral-midlight dark:border-neutral-middark hover:border-neutral-gray dark:hover:border-neutral-gray hover:transition-all duration-300 p-4 rounded-xl"
            />
          </Tooltip>
        ))}
      </div>
    </section>
  )
}
