"use client";

import type { Skill } from "@/types";

import Image from "next/image";
import { Tooltip } from "@heroui/react";
import { Header } from "@/components/ui";
import { AnimatedContent } from "@/components/animated";

type Props = {
  skills: Skill[];
};

export default function SkillSection({ skills }: Props) {
  return (
    <section className="space-y-4">
      <Header
        title="Skills"
        subtitle="Technologies and tools I use to build high-quality web applications."
        headingLevel="h2"
      />
      <AnimatedContent>
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
      </AnimatedContent>
    </section>
  );
}
