import { Building2 } from 'lucide-react';
import { Experience } from "@/interfaces";
import { Header } from "@/components";

interface Props {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: Props) => {
  return (
    <section className="space-y-4">
      <Header title="Experience" subtitle="Lorem ipsum" headingLevel="h2" />
      {experiences.map((experience) => (
        <article
          key={experience.id}
          className="group bg-neutral-lightgray dark:bg-neutral-darkgrey border border-neutral-midlight dark:border-neutral-middark hover:border-neutral-gray dark:hover:border-neutral-gray hover:transition-all duration-300 p-4 rounded-xl"
        >
          <div className="flex justify-between items-center border-b border-b-neutral-midlight dark:border-b-neutral-middark group-hover:border-b-neutral-gray dark:group-hover:border-b-neutral-gray hover:transition-all duration-300 pb-2">
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">{experience.jobTitle}</h3>
            <span className="text-sm font-medium">{experience.dateRange}</span>
          </div>
          <div className="col-span-2 space-y-4 pt-2">
            <div>
              <p className="flex items-center text-primary text-bold space-x-2">
                <Building2 size={16} />
                <span>
                  {experience.company}
                </span>
              </p>
            </div>
            <p>{experience.description}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
