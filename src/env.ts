import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    OPEN_AI_API_KEY_: z.string(),
  },
  client: {
    NEXT_PUBLIC_OPEN_AI_API_KEY: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_OPEN_AI_API_KEY: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
    OPEN_AI_API_KEY_: process.env.OPEN_AI_API_KEY,
  },
});
