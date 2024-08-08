import { z } from 'zod';

const vendorSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters long' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  username: z
    .string({ required_error: 'Username is required' })
    .min(2, { message: 'Username must be at least 2 characters long' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters long' }),
  phoneNo: z
    .string({ required_error: 'Phone number is required' })
    .min(10, { message: 'Phone number must be at least 10 characters long' })
    .max(15, { message: 'Phone number must be at most 15 characters long' }),
  address: z
    .string({ required_error: 'Address is required' })
    .min(5, { message: 'Address must be at least 5 characters long' }),
  category: z
    .string({ required_error: 'Category is required' })
    .min(3, { message: 'Category must be at least 3 characters long' }),
});

export { vendorSchema };
