import React from 'react';
import {z} from 'zod';
import {GenericForm} from '@/components/common/forms';
import {Field} from '@/components/common/forms/GenericForm';
import {utensilsCategorySchema} from '@/lib/validation/utensilsSchemas';

const CreateUtensilsCategory: React.FC = () => {
  type FormValues = z.infer<typeof utensilsCategorySchema>;

  const fields: Field<FormValues>[] = [
    {
      label: 'Category Name',
      name: 'utensilsCategory',
      placeholder: 'Enter the category name',
      type: 'text',
    },
  ];

  return (
    <GenericForm<FormValues>
      schema={utensilsCategorySchema}
      // onSubmit={}
      // isPending={}
      // isError={}
      // error={}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Create', cancel: 'Cancel'}}
      formTitle="Create Utensils Category"
    />
  );
};

export default CreateUtensilsCategory;
