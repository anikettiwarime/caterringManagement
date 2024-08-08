import React from 'react';
import {z} from 'zod';
import {useUpdateClient} from '@/lib/react-query/queriesAndMutations/client';
import GenericForm, {Field} from '../common/forms/GenericForm';
import {clientValidationSchema} from '@/lib/validation/clientSchemas';
import {useAuthContext} from '@/context/AuthContext';
import {IdAndToken, UpdateClient} from '@/types';
import {updateClient} from '@/lib/api/client';

type FormValues = z.infer<typeof clientValidationSchema>;

const fields: Field<FormValues>[] = [
  {
    label: 'Client Id',
    name: 'caterorID',
    type: 'text',
    placeholder: 'Aenter client id',
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

const UpdateClient: React.FC = () => {
  const {token} = useAuthContext();

  const {
    isError,
    error,
    isPending,
    mutateAsync: updateClient,
  } = useUpdateClient();

  const handleFormSubmit = async (data: UpdateClient) => {
    try {
      const res = await updateClient({
        ...data,
        id: data.id,
        token: token?.accessToken as string,
      });

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
