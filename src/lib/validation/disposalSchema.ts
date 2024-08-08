import { z } from 'zod';

// Disposal Category Schema
const disposalCategorySchema = z.object({
  categoryName: z
    .string({ required_error: 'Category Name is required' })
    .min(2, { message: 'Category Name must be at least 2 characters long' }),
});

const disposalSchema = z.object({
    disposalName: z
      .string({ required_error: 'Disposal Name is required' })
      .min(2, { message: 'Disposal Name must be at least 2 characters long' }),
    categoryName: z
      .string({ required_error: 'Category Name is required' })
      .min(2, { message: 'Category Name must be at least 2 characters long' }),
  });

export { disposalCategorySchema,disposalSchema };
