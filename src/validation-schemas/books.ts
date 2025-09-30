import { z } from "zod";

const readingStatuses = ["Reading", "Completed", "Not started"];

export const addBookValidationSchema = z.object({
  title: z.string().trim().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  author: z.string().trim().min(1, { message: "Author is required" }),
  publishDate: z
    .string()
    .trim()
    .min(1, { message: "Publication date is required" }),
  readingStatus: z
    .enum(readingStatuses)
    .refine((v) => readingStatuses.includes(v), {
      message: "Reading should be either Reading..., Completed or Not started",
      path: ["readingStatus"],
    }),
});
