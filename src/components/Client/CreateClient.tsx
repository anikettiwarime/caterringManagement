import React from 'react';
import { GenericForm } from '../common/forms';
import {z} from "zod"
import { clientValidationSchema } from '@/lib/validation/clientSchemas';
import { Field } from '../common/forms/GenericForm';
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { useCreateClient } from '@/lib/react-query/queriesAndMutations/client';


type FormValues = z.infer<typeof clientValidationSchema>;

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
    label: 'Are you vegeterian',
    name: 'isVeg',
    type: 'text',
    placeholder: 'Are you vegeterian',
  },
  {
    label: 'Do you belong from jain?',
    name: 'isJain',
    type: 'text',
    placeholder: 'Do you belong from jain?',
  },
  {
    label: 'Caste',
    name: 'Caste',
    type: 'text',
    placeholder: 'Enter your caste',
  },
  {
    label: 'Address',
    name: 'Address',
    type: 'text',
    placeholder: 'Enter your address',
  },
  {
    label: 'CaterorID',
    name: 'caterorID',
    type: 'text',
    placeholder: 'Enter your Cateror Id',
  },
];



const CreateClient: React.FC = () => {


    
    const {
      isError,
      isPending,
      error,
      mutateAsync: createClient,
    } = useCreateClient();

    const handleFormSubmit = async (data: FormValues) => {
      console.log('Form submitted', data);

      try {
        const res = await createClient(data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };



    return (
      <GenericForm<FormValues>
        schema={clientValidationSchema}
        onSubmit={handleFormSubmit}
        isPending={isPending}
        isError={isError}
        error={error}
        fields={fields}
        formType="create"
        buttonText={{submit: 'Create', cancel: 'Cancel'}}
        formTitle="Create Client"
      />
    );
    
};

export default CreateClient;
