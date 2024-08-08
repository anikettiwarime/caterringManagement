import React from 'react';
import {z} from 'zod';
import {GenericForm} from '@/components/common/forms';
import {Field} from '@/components/common/forms/GenericForm';
import {disposalSchema} from '@/lib/validation/disposalSchema';

const CreateDisposal: React.FC = () => {
  type FormValues = z.infer<typeof disposalSchema>;

  const fields: Field<FormValues>[] = [
    {
      label: 'Disposal Name',
      name: 'disposalName',
      placeholder: 'Enter the Disposal name',
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
      schema={disposalSchema}
      // onSubmit={}
      // isPending={}
      // isError={}
      // error={}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Create', cancel: 'Cancel'}}
      formTitle="Create Disposal"
    />
  );
};

export default CreateDisposal;
