import {z} from 'zod';

const signInValidationSchema = z.object({
  identifier: z
    .string({
      required_error: 'Username or email is required',
    })
    .min(2, {message: 'Username or email must be at least 2 characters long'}),
  password: z
    .string({required_error: 'Password is required'})
    .min(8, {message: 'Password must be at least 8 characters long'}),
});

const signUpValidationSchema = z.object({
  name: z
    .string({required_error: 'Name is required'})
    .min(2, {message: 'Name must be at least 2 characters long'}),
  username: z
    .string()
    .min(2, {message: 'Username must be at least 2 characters long'}),
  email: z.string().email({message: 'Invalid email address'}),
  password: z
    .string()
    .min(8, {message: 'Password must be at least 8 characters long'}),
});

export {signInValidationSchema, signUpValidationSchema};
