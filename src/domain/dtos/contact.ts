import { z } from "zod";

export const contactDTO = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please provide a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactDTO = z.infer<typeof contactDTO>;
