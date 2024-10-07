interface Props {
  title: string;
  subtitle?: string;
  headingLevel?: "h1" | "h2" | "h3";
}

export const Header = ({ title, subtitle, headingLevel = "h1" }: Props) => {
  const HeadingTag = headingLevel;

  return (
    <header className="py-4 space-y-2">
      <HeadingTag className="scroll-m-20 text-4xl font-bold tracking-tight">
        {title}
      </HeadingTag>
      <p className="text-neutral-gray">{subtitle}</p>
    </header>
  )
}
