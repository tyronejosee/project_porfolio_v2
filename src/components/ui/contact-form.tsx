"use client";

import type { ContactValues } from "@/types";

import { useState } from "react";
import { Input, Button, Textarea, addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { AnimatedContent } from "@/components/animated";
import { contactSchema } from "@/lib/validations";
import { scrollToTop } from "@/lib/utils";

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      addToast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        icon: <ArrowUpRight size={16} />,
      });
      reset();
      scrollToTop();
    } catch (error) {
      console.error(error);
      setApiError("There was a problem submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AnimatedContent>
        <div className="space-y-10">
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

          {/* Message field */}
          <Textarea
            label="Message"
            labelPlacement="outside"
            size="lg"
            radius="md"
            placeholder="Your message here..."
            isInvalid={!!errors.message}
            errorMessage={errors.message?.message}
            classNames={{ base: "!mt-2" }}
            {...register("message")}
          />

          {apiError && (
            <p className="text-xs text-red-500 text-center">{apiError}</p>
          )}
        </div>
        {/** Form Button */}
        <Button
          type="submit"
          color="primary"
          radius="md"
          className="font-medium mt-4"
          startContent={<ArrowUpRight size={16} />}
        >
          {loading || isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </AnimatedContent>
    </form>
  );
}
