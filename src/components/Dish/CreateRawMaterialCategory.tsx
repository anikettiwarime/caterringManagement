import React from 'react';
import {Field} from '@/components/common/forms/GenericForm';
import {GenericForm} from '@/components/common/forms';
import {rawMaterialCategoryValidationSchema} from '@/lib/validation/dishSchemas';
import {useCreateRawMaterialCategory} from '@/lib/react-query/queriesAndMutations/dishAndRawMaterials';
import {z} from 'zod';
import {useAuthContext} from '@/context/AuthContext';

type FormValues = z.infer<typeof rawMaterialCategoryValidationSchema>;

const fields: Field<FormValues>[] = [
  {
    label: 'Category Name',
    name: 'Name',
    placeholder: 'Category Name',
    type: 'text',
  },
];

const CreateRawMaterialCategory: React.FC = () => {
  const {token} = useAuthContext();
  const {
    isError,
    isPending,
    error,
    mutateAsync: createRawMaterialCategory,
  } = useCreateRawMaterialCategory();

  const handleFormSubmit = async (data: FormValues) => {
    try {
      const res = await createRawMaterialCategory({
        ...data,
        token: token?.accessToken as string,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GenericForm<FormValues>
      schema={rawMaterialCategoryValidationSchema}
      onSubmit={handleFormSubmit}
      isPending={isPending}
      isError={isError}
      error={error}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Add', cancel: 'Cancel'}}
      formTitle="Add Raw Material Category"
    />
  );
};

export default CreateRawMaterialCategory;
