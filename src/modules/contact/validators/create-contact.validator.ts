import { z } from 'zod';

export const createContactSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").optional()
});

export type CreateContactDto = z.infer<typeof createContactSchema>;
