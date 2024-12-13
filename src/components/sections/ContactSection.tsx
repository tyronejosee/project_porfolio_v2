"use client"

// import { Skill } from "@/interfaces";
// import Image from "next/image";
import { ContactForm, Header } from "@/components";
// import { Tooltip } from "@nextui-org/react";
// import { useAnimateOnView } from "@/hooks";
// import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section className="space-y-4">
      <Header title="Contact me" subtitle="Lorem ipsum" headingLevel="h2" />
      <div>
        <ContactForm />
      </div>
    </section>
  )
}
