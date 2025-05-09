import { AnimatedContent } from "@/components/animated";

type Props = {
  title: string;
  subtitle?: string;
  headingLevel?: "h1" | "h2" | "h3";
};

export default function Header({
  title,
  subtitle,
  headingLevel = "h1",
}: Props) {
  const HeadingTag = headingLevel;

  return (
    <header className="py-4 space-y-2">
      <AnimatedContent distance={200} direction="horizontal">
        <HeadingTag className="scroll-m-20 text-4xl font-bold tracking-tight">
          {title}
        </HeadingTag>
        <p className="text-neutral-gray">{subtitle}</p>
      </AnimatedContent>
    </header>
  );
}
