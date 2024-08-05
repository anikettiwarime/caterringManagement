import {z} from 'zod'

const dishValidationSchema = z.object({

    Name: z
        .string({ required_error: 'Dish Name is required' })
        .min(2, { message: 'Name must be at least 2 characters long' }),
    CategoryID: z
        .string({ required_error: 'Dish Id is required' })
        .min(2, { message: 'Username must be at least 2 characters long' }),
    Description: z.string({
        required_error: 'Description is required',
    })

})

const dishCategoryValidationSchema = z.object({
  Name: z
    .string({required_error: 'Category Name is required'})
    .min(2, {message: 'Name must be at least 2 characters long'}),
});


export {dishValidationSchema, dishCategoryValidationSchema}