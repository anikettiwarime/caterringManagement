
import { z } from 'zod';


const maharajValidationSchema = z.object({
    name: z
        .string({ required_error: 'Name is required' })
        .min(2, { message: 'Name must be at least 2 characters long' }),
    username: z
        .string({ required_error: 'Username is required' })
        .min(2, { message: 'Username must be at least 2 characters long' }),
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email({ message: 'Invalid email address' }),
    password: z
        .string({ required_error: 'Password is required' })
        .min(8, { message: 'Password must be at least 8 characters long' }),
    phoneNo: z
        .string({ required_error: 'Phone number is required' })
        .min(10, { message: 'Phone number must be at least 10 characters long' }),
    specialization: z
        .string({ required_error: 'specialization is required' })
        .min(10, { message: 'Phone number must be at least 10 characters long' }),
    experience: z
        .string({ required_error: 'experience is required' })
        .min(10, { message: 'Phone number must be at least 10 characters long' }),
    caterorID: z
        .string({ required_error: 'Cateror Id is required' })
        .min(10, { message: 'Phone number must be at least 10 characters long' }),



});

export { maharajValidationSchema };
