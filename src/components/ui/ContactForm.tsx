"use client";

import { useRouter } from "next/navigation";
import { Input, Button, Textarea } from "@heroui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { FormError } from "@/components/ui";
import { AnimatedContent } from "@/components/animated";
import { ContactValues } from "@/interfaces";
import { contactSchema } from "@/validations/contactSchema";

export default function ContactForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactValues> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      router.push("/contact/succeful");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name field */}
      <AnimatedContent>
        <Input
          label="Name *"
          size="sm"
          type="text"
          radius="md"
          required
          {...register("name")}
        />
        {errors.name?.message && (
          <FormError>* {errors.name?.message}</FormError>
        )}
      </AnimatedContent>

      {/* Email field */}
      <AnimatedContent>
        <Input
          label="Email *"
          size="sm"
          type="email"
          radius="md"
          {...register("email")}
        />
        {errors.email?.message && (
          <FormError>* {errors.email?.message}</FormError>
        )}
      </AnimatedContent>

      {/* Message field */}
      <AnimatedContent>
        <Textarea
          label="Message"
          size="sm"
          radius="md"
          {...register("message")}
        />
        {errors.message?.message && (
          <FormError>* {errors.message?.message}</FormError>
        )}
      </AnimatedContent>

      <AnimatedContent>
        <Button
          type="submit"
          color="primary"
          radius="md"
          className="font-medium"
          startContent={<ArrowUpRight size={16} />}
        >
          Send Message
        </Button>

        <p className="text-xs text-neutral-gray text-center">
          * Fields marked with an asterisk are required.
        </p>
      </AnimatedContent>
    </form>
  );
}
