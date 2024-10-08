"use client";

import { useRouter } from "next/navigation";
import { Input, Button, Textarea } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { API_URL } from "@/config/constants";
import { contactSchema } from "@/validations/contactSchema";
import { ContactValues } from "@/interfaces";
import { FormError } from "@/components";


export const ContactForm = () => {
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
    formData.append("last_name", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        body: formData,
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
      <Input
        label="Name *"
        size="sm"
        type="text"
        radius="md"
        required
        {...register("name")}
      />
      {errors.name?.message && <FormError>* {errors.name?.message}</FormError>}

      {/* Email field */}
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

      {/* Message field */}
      <Textarea
        label="Message"
        size="sm"
        radius="md"
        {...register("message")}
      />
      {errors.message?.message && (
        <FormError>* {errors.message?.message}</FormError>
      )}

      <Button
        type="submit"
        color="primary"
        radius="md"
        className="font-medium w-full"
      >
        Send Message
      </Button>

      <p className="text-xs text-neutral-gray text-center">
        * Fields marked with an asterisk are required.
      </p>
    </form>
  );
};
