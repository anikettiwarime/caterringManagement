import React from 'react'
import { z } from 'zod';
import { GenericForm } from '@/components/common/forms';
import { Field } from '@/components/common/forms/GenericForm';
import {utensilsSchema } from '@/lib/validation/utensilsSchemas';

const CreateUtensils:React.FC = () => {

type FormValues = z.infer<typeof utensilsSchema>;


const fields: Field<FormValues>[] = [
  {
    label: 'Utensil Name',
    name: 'utensilName',
    placeholder: 'Enter the utensil name',
    type: 'text',
  },
  {
    label: 'Category Name',
    name: 'categoryName',
    placeholder: 'Enter the category name',
    type: 'text',
  },
];



  return (
    <GenericForm<FormValues>
    schema={utensilsSchema}
    // onSubmit={}
    // isPending={}
    // isError={}
    // error={}
    fields={fields}
    formType="create"
    buttonText={{submit: 'Create', cancel: 'Cancel'}}
    formTitle="Create Utensils"
  />
  )
}

export default CreateUtensils