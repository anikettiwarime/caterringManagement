import React from 'react';
import {Field} from '@/components/common/forms/GenericForm';
import {GenericForm} from '@/components/common/forms';
import {dishValidationSchema} from '@/lib/validation/dishSchemas';
import {useCreateDish} from '@/lib/react-query/queriesAndMutations/dishAndRawMaterials';
import {z} from 'zod';

type FormValues = z.infer<typeof dishValidationSchema>;

const fields: Field<FormValues>[] = [
  {
    label: 'Dish Name',
    name: 'Name',
    placeholder: 'Dish Name',
    type: 'text',
  },
  {
    label: 'Category Id',
    name: 'CategoryID',
    placeholder: 'Category Id',
    type: 'text',
  },
  {
    label: 'Description',
    name: 'Description',
    placeholder: 'description',
    type: 'text',
  },
];

const CreateDish: React.FC = () => {
  const {isError, isPending, error, mutateAsync: createDish} = useCreateDish();

  const handleFormSubmit = async (data: FormValues) => {
    console.log('Form submitted', data);

    try {
      const res = await createDish(data);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GenericForm<FormValues>
      schema={dishValidationSchema}
      onSubmit={handleFormSubmit}
      isPending={isPending}
      isError={isError}
      error={error}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Create', cancel: 'Cancel'}}
      formTitle="Create Dish"
    />
  );
};

export default CreateDish;
