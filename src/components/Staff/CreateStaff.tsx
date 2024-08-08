import React from 'react';
import {z} from 'zod';
import {FiMail, FiPhone, FiUser} from 'react-icons/fi';
import {Field} from '../common/forms/GenericForm';
import {useAuthContext} from '@/context/AuthContext';
import GenericForm from '../common/forms/GenericForm';
import { staffValidationSchema } from '@/lib/validation/staffSchemas';
import { useCreateStaff } from '@/lib/react-query/queriesAndMutations/staff';


type FormValues = z.infer<typeof staffValidationSchema>;

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
    label: 'Job Type',
    name: 'jobType',
    type: 'text',
    placeholder: 'Enter your Job type',
  },
  {
    label: 'Address',
    name: 'address',
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


const CreateStaff: React.FC = () => {
  const {
    isError,
    isPending,
    error,
    mutateAsync: createStaff,
  } = useCreateStaff();
  const {token} = useAuthContext();

  const handleFormSubmit = async (data: FormValues) => {
    console.log('Form submitted', data);

    try {
      const res = await createStaff(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GenericForm<FormValues>
      schema={staffValidationSchema}
      onSubmit={handleFormSubmit}
      isPending={isPending}
      isError={isError}
      error={error}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Create', cancel: 'Cancel'}}
      formTitle="Create Staff"
    />
  );
};

export default CreateStaff;
