import { z } from 'zod';

// Utensils Category Schema
const utensilsCategorySchema = z.object({
  utensilsCategory: z
    .string({ required_error: 'Category Name is required' })
    .min(2, { message: 'Category Name must be at least 2 characters long' }),
});

// Utensils Schema
const utensilsSchema = z.object({
  utensilName: z
    .string({ required_error: 'Utensil Name is required' })
    .min(2, { message: 'Utensil Name must be at least 2 characters long' }),
  categoryName: z
    .string({ required_error: 'Category Name is required' })
    .min(2, { message: 'Category Name must be at least 2 characters long' }),
});

export { utensilsCategorySchema, utensilsSchema };
