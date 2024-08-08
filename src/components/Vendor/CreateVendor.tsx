import React from 'react';
import {GenericForm} from '../common/forms';
import {Field} from '../common/forms/GenericForm';
import {z} from 'zod';
import {vendorSchema} from '@/lib/validation/vendorSchema';

const CreateVendor: React.FC = () => {
  type FormValues = z.infer<typeof vendorSchema>;

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
      label: 'Category',
      name: 'category',
      placeholder: 'Enter your Category',
      type: 'text',
    },
  ];
  return (
    <GenericForm<FormValues>
      schema={vendorSchema}
      // onSubmit={}
      // isPending={}
      // isError={}
      // error={}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Create', cancel: 'Cancel'}}
      formTitle="Create Vendor"
    />
  );
};

export default CreateVendor;
