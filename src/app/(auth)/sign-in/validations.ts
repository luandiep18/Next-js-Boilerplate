import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1).max(500),
  pasword: z.number().min(1).max(500),
});
