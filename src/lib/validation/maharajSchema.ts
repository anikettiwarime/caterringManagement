import { z } from 'zod';

const maharajSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(2, { message: 'Username must be at least 2 characters long' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters long' }),
  phoneNo: z
    .string({ required_error: 'Phone number is required' })
    .min(10, { message: 'Phone number must be at least 10 characters long' })
    .max(15, { message: 'Phone number must be at most 15 characters long' }),
  specialization: z
    .array(z.string())
    .min(1, { message: 'At least one specialization is required' }),
    password: z
    .string({ required_error: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export { maharajSchema };
