import React from 'react';
import {z} from 'zod';
import {GenericForm} from '@/components/common/forms';
import {Field} from '@/components/common/forms/GenericForm';
import {disposalCategorySchema} from '@/lib/validation/disposalSchema';

const CreateDisposalCategory: React.FC = () => {
  type FormValues = z.infer<typeof disposalCategorySchema>;

  const fields: Field<FormValues>[] = [
    {
      label: 'Category Name',
      name: 'categoryName',
      placeholder: 'Enter the category name',
      type: 'text',
    },
  ];

  return (
    <GenericForm<FormValues>
      schema={disposalCategorySchema}
      // onSubmit={}
      // isPending={}
      // isError={}
      // error={}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Create', cancel: 'Cancel'}}
      formTitle="Create Disposal Category"
    />
  );
};

export default CreateDisposalCategory;
