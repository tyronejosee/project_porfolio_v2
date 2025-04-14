import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name cannot exceed 100 characters" }),

  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email cannot exceed 100 characters" }),

  message: z
    .string()
    .max(1000, { message: "Message cannot exceed 1000 characters" })
    .optional(),
});
