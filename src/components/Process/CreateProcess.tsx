import React from 'react'
import { GenericForm } from '../common/forms'
import { Field } from '../common/forms/GenericForm';
import { z } from 'zod';
import { processSchema } from '@/lib/validation/processSchema';

const CreateProcess:React.FC = () => {

type FormValues = z.infer<typeof processSchema>;


const fields: Field<FormValues>[] = [
    {
        label: 'Process Name',
        name: 'ProcessName',
        placeholder: 'Enter process name',
        type: 'text',
      },
      {
        label: 'Description',
        name: 'Description',
        placeholder: 'Enter description',
        type: 'text',
      },
  ];
  return (
    <GenericForm<FormValues>
    schema={processSchema}
    // onSubmit={}
    // isPending={}
    // isError={}
    // error={}
    fields={fields}
    formType="create"
    buttonText={{submit: 'Create', cancel: 'Cancel'}}
    formTitle="Create Process"
  />
  )
}

export default CreateProcess
