import React from 'react'
import { GenericForm } from '../common/forms'
import { Field } from '../common/forms/GenericForm';
import { maharajSchema } from '@/lib/validation/maharajSchema';
import { z } from 'zod';

const CreateMaharaj:React.FC = () => {

type FormValues = z.infer<typeof maharajSchema>;


const fields: Field<FormValues>[] = [
    {
        label: 'Name',
        name: 'name',
        placeholder: 'Enter your name',
        type: 'text',
      },
    {
      label: 'Username',
      name: 'username',
      placeholder: 'Enter your username',
      type: 'text',
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email',
      type: 'email',
    },
    
    {
      label: 'Phone Number',
      name: 'phoneNo',
      placeholder: 'Enter your phone number',
      type: 'text',
    },
    {
      label: 'Specialization',
      name: 'specialization',
      placeholder: 'Enter your specialization',
      type: 'text',
    },
  ];
  return (
    <GenericForm<FormValues>
    schema={maharajSchema}
    // onSubmit={}
    // isPending={}
    // isError={}
    // error={}
    fields={fields}
    formType="create"
    buttonText={{submit: 'Create', cancel: 'Cancel'}}
    formTitle="Create Maharaj"
  />
  )
}

export default CreateMaharaj
