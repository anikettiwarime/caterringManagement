import { z } from 'zod';


const clientValidationSchema = z.object({
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
    isVeg: z
        .boolean({ required_error: 'isVeg is required' }),
    isJain: z
        .boolean({ required_error: 'isJain is required' }),
    caterorID: z
        .string({ required_error: 'Cateror Id is required' })
        .min(10, { message: 'Cateror Id must be at least 10 characters long' }),
    Address: z
        .string({ required_error: 'address is required' })
        .min(10, { message: 'address is required' }),
    Caste: z
        .string({ required_error: 'caste is required' })
        .min(10, { message: 'caste is required' }),



});



const updateClientValidationSchema = z.object({

    id: z
    .string({required_error:'client id is required'}),
    isVeg: z
        .boolean({ required_error: 'isVeg is required' }),
    isJain: z
        .boolean({ required_error: 'isJain is required' }),
    caterorID: z
        .string({ required_error: 'Cateror Id is required' })
        .min(10, { message: 'Cateror Id must be at least 10 characters long' }),
    Address: z
        .string({ required_error: 'address is required' })
        .min(10, { message: 'address is required' }),
    Caste: z
        .string({ required_error: 'caste is required' })
        .min(10, { message: 'caste is required' }),


})

export { clientValidationSchema, updateClientValidationSchema };

