"use client";

import Link from "next/link";
import { Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Folder } from "lucide-react";
import { Header } from "@/components/ui";
import { GitHubIcon } from "@/components/icons";
import { Project } from "@/interfaces";

import messages from "@/data/messages.json";

interface Props {
  projects: Project[];
}

export default function ProjectSection({ projects }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section>
      <Header title="Projects" subtitle="Lorem ipsum" headingLevel="h2" />
      <div className="space-y-4" ref={ref}>
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
            className="group grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-lightgray dark:bg-neutral-darkgrey border border-neutral-midlight dark:border-neutral-middark hover:border-neutral-gray dark:hover:border-neutral-gray hover:transition-all duration-300 p-4 rounded-xl"
          >
            <div className="inline-flex flex-col">
              <div className="border-b border-b-neutral-midlight dark:border-b-neutral-middark group-hover:border-b-neutral-gray dark:group-hover:border-b-neutral-gray hover:transition-all duration-300 pb-2">
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight line-clamp-1">
                  {project.name}
                </h3>
              </div>
              <p className="flex items-center text-sm text-primary text-bold space-x-2 pt-2">
                <Folder size={16} />
                <span>Project</span>
              </p>
              <div className="space-y-4 py-4">
                <p className="text-sm text-neutral-500 line-clamp-3">
                  {messages.projectLinkBtn}
                </p>
                <div className="flex space-x-2">
                  {project.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      size="sm"
                      color="primary"
                      variant="bordered"
                      className="text-xs font-bold"
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2 mt-auto">
                <Button color="primary" className="text-sm font-medium">
                  {messages.projectLinkBtn}
                </Button>
                <Link
                  href="https://lucide.dev/icons/chevrons-down"
                  className="p-2 hover:bg-neutral-lightgray dark:hover:bg-neutral-darkgrey dark:hover:text-primary items-center rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gmail"
                >
                  <GitHubIcon />
                </Link>
              </div>
            </div>
            <figure className="rounded-xl overflow-hidden border dark:border-neutral-middark aspect-video">
              {/* <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={200}
              className="group-hover:scale-110 transition-all ease-in-out"
            /> */}
            </figure>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
