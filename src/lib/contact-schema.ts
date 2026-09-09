import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[\d\s()+.-]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  service: z.string().trim().min(1, "Please select a service").max(120),
  message: z.string().trim().max(2000).optional().default(""),
  preferredWhen: z.string().trim().max(200).optional().default(""),
  // Honeypot field — real users never fill this in. Bots that autofill
  // every field will trip it.
  company: z.string().max(0, "Spam detected").optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
