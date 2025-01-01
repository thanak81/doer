import { z } from "zod";

export const toDoSchemaData = z.object({
  task: z.string().min(2, {
    message: "Task must be at least 2 characters.",
  }),
  description: z.string().optional().default(""), // Optional description with default empty string
  date: z.date().optional(), // Optional date
});
