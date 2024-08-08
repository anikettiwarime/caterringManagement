import {z} from 'zod';

const processSchema = z.object({
  ProcessName: z
    .string({required_error: 'Process Name is required'})
    .min(2, {message: 'Process Name must be at least 2 characters long'}),
  Description: z
    .string({required_error: 'Description is required'})
    .min(5, {message: 'Description must be at least 5 characters long'}),
});

export {processSchema};
