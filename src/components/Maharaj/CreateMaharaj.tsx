<<<<<<< HEAD
import React from 'react';
import {Field} from '@/components/common/forms/GenericForm';
import {GenericForm} from '@/components/common/forms';
import { z } from 'zod';
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { maharajValidationSchema } from '@/lib/validation/maharajSchemas';
import { useCreateMaharaj } from '@/lib/react-query/queriesAndMutations/maharaj';


type FormValues = z.infer<typeof maharajValidationSchema>;

const fields: Field<FormValues>[] = [
  {
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'Devid Jhon',
    icon: <FiUser size={20} />,
  },
  {
    label: 'Phone Number',
    name: 'phoneNo',
    type: 'text',
    placeholder: '+91 90 3343 7865',
    icon: <FiPhone size={20} />,
  },
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'devidjond45@gmail.com',
    icon: <FiMail size={20} />,
  },
  {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'devidjhon24',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  },
  {
    label: 'Specialization',
    name: 'specialization',
    type: 'text',
    placeholder: 'Enter your Specialzation',
  },
  {
    label: 'Experience',
    name: 'experience',
    type: 'text',
    placeholder: 'Enter your Experience',
  },
  {
    label: 'CaterorID',
    name: 'caterorID',
    type: 'text',
    placeholder: 'Enter your Cateror Id',
  },
];



const CreateMaharaj: React.FC = () => {
  const {isError, isPending, error, mutateAsync: createMaharaj} = useCreateMaharaj();

  const handleFormSubmit = async (data: FormValues) => {
    console.log('Form submitted', data);

    try {
      const res = await createMaharaj(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GenericForm<FormValues>
      schema={maharajValidationSchema}
      onSubmit={handleFormSubmit}
      isPending={isPending}
      isError={isError}
      error={error}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Create', cancel: 'Cancel'}}
      formTitle="Create Maharaj"
    />
  );
};

export default CreateMaharaj;
=======
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
        label: 'Email',
        name: 'email',
        placeholder: 'Enter your email',
        type: 'email',
      },
      {
        label: 'Username',
        name: 'username',
        placeholder: 'Enter your username',
        type: 'text',
      },
    {
      label: 'Password',
      name: 'password',
      placeholder: 'Enter your Password',
      type: 'password',
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
>>>>>>> c9db49500851597b4a6ffa811770b2e1ae374450
