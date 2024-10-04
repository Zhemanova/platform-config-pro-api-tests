import { z } from 'zod';

export const envSchema = z.object({
    ADMIN_TOKEN: z.string(),
    ADMIN_EMAIL: z.string(),
    ADMIN_PASSWORD: z.string(),
    APP_NAME: z.string(),
});

const env = envSchema.parse(process.env);
export default env;
export {}
