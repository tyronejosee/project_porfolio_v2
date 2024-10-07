// import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Project } from "@/interfaces";
import { Header } from "@/components";

interface Props {
  projects: Project[];
}

export const ProjectSection = ({ projects }: Props) => {
  const t = useTranslations("projects");

  return (
    <section className="space-y-4">
      <Header title="Projects" subtitle="Lorem ipsum" headingLevel="h2" />
      {projects.map((project) => (
        <article
          key={project.id}
          className="group grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 border dark:border-neutral-800 dark:hover:border-neutral-500 rounded-xl p-2 hover:transition-all duration-300"
        >
          <div className="inline-flex flex-col space-y-2 p-4">
            <h3 className="text-lg font-medium leading-tight border-b border-neutral-700 pb-2">
              {project.name}
            </h3>
            <p className="text-sm text-neutral-500 h-14">
              {t(project.descriptionKey)}
            </p>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:underline"
            >
              Repository
            </a>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:underline"
            >
              Website
            </a>
            <div className="flex space-x-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="block text-xs border border-neutral-700 rounded py-1 px-2"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="pt-4 space-x-2">
              <Button color="primary">Website</Button>
              <Button color="secondary">Github repo</Button>
            </div>
          </div>
          <figure className="rounded-xl overflow-hidden border dark:border-neutral-500 aspect-video">
            {/* <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={200}
              className="group-hover:scale-110 transition-all ease-in-out"
            /> */}
          </figure>
        </article>
      ))}
    </section>
  )
}
