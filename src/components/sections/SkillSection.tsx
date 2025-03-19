"use client";

import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Skill } from "@/interfaces";
import { Header } from "@/components/ui";
import { useAnimateOnView } from "@/hooks";

interface Props {
  skills: Skill[];
}

export default function SkillSection({ skills }: Props) {
  const { ref, controls, itemVariants } = useAnimateOnView(0.1, false);

  return (
    <section className="space-y-4">
      <Header title="Skills" subtitle="Lorem ipsum" headingLevel="h2" />
      <div
        className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2"
        ref={ref}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.id}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeOut",
            }}
          >
            <Tooltip
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};
