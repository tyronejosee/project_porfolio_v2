"use client";

import type { ContactValues } from "@/types";

import { useRouter } from "next/navigation";
import { Input, Button, Textarea } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { FormError } from "@/components/ui";
import { AnimatedContent } from "@/components/animated";
import { contactSchema } from "@/lib/validations";

export default function ContactForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactValues) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <AnimatedContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            {/* Name field */}
            <Input
              label="Name"
              labelPlacement="outside"
              size="lg"
              type="text"
              radius="md"
              placeholder="John Doe"
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
              {...register("name")}
            />

            {/* Email field */}
            <Input
              label="Email"
              labelPlacement="outside"
              size="lg"
              type="email"
              radius="md"
              placeholder="johndoe@example.com"
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              {...register("email")}
            />
          </div>

          {/* Message field */}
          <Textarea
            label="Message"
            labelPlacement="outside"
            size="lg"
            radius="md"
            placeholder="Your message here..."
            isInvalid={!!errors.message}
            errorMessage={errors.message?.message}
            {...register("message")}
          />

          {/** Form Button */}
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
        </div>
      </AnimatedContent>
    </form>
  );
}
