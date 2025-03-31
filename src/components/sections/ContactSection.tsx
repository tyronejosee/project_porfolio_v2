import { ContactForm, Header } from "@/components/ui";

export default function ContactSection() {
  return (
    <section className="space-y-4">
      <Header
        title="Contact me"
        subtitle="Get in touch for collaborations, opportunities, or any questions you may have."
        headingLevel="h2"
      />
      <div>
        <ContactForm />
      </div>
    </section>
  );
}
