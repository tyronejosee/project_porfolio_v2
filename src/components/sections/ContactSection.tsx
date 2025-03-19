"use client";

import { ContactForm, Header } from "@/components/ui";



export default function ContactSection() {
  return (
    <section className="space-y-4">
      <Header title="Contact me" subtitle="Lorem ipsum" headingLevel="h2" />
      <div>
        <ContactForm />
      </div>
    </section>
  );
};
