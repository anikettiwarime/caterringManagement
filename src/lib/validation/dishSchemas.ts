import {z} from 'zod';

const rawMaterialCategoryValidationSchema = z.object({
  Name: z
    .string({required_error: 'Category Name is required'})
    .min(2, {message: 'Name must be at least 2 characters long'}),
});

const rawMaterialValidationSchema = z.object({
  Name: z
    .string({required_error: 'Raw Material Name is required'})
    .min(2, {message: 'Name must be at least 2 characters long'}),
  CategoryID: z.string({
    required_error: 'Category Id is required',
  }),
  Unit: z.enum(['kg', 'g', 'l', 'ml'], {
    message: 'Unit must be kg, g, l or ml',
  }),
});

const dishCategoryValidationSchema = z.object({
  Name: z
    .string({required_error: 'Category Name is required'})
    .min(2, {message: 'Name must be at least 2 characters long'}),
});

const dishValidationSchema = z.object({
  Name: z
    .string({required_error: 'Dish Name is required'})
    .min(2, {message: 'Name must be at least 2 characters long'}),
  CategoryID: z
    .string({required_error: 'Dish Id is required'})
    .min(2, {message: 'Username must be at least 2 characters long'}),
  Description: z.string({
    required_error: 'Description is required',
  }),
});

export {
  rawMaterialCategoryValidationSchema,
  rawMaterialValidationSchema,
  dishCategoryValidationSchema,
  dishValidationSchema,
};
