import React, {useState, useEffect} from 'react';
import {Field} from '@/components/common/forms/GenericForm';
import {GenericForm} from '@/components/common/forms';
import {rawMaterialValidationSchema} from '@/lib/validation/dishSchemas';
import {
  useCreateRawMaterial,
  useSearchRawMaterialCategories,
} from '@/lib/react-query/queriesAndMutations/dishAndRawMaterials';
import {z} from 'zod';
import {useAuthContext} from '@/context/AuthContext';

type FormValues = z.infer<typeof rawMaterialValidationSchema>;

const CreateRawMaterial: React.FC = () => {
  const {token} = useAuthContext();
  const [categoryName, setCategoryName] = useState<string>('');

  const {
    data: rawMaterialCategoriesResponse,
    isLoading,
    isError,
    refetch,
  } = useSearchRawMaterialCategories({
    token: token?.accessToken as string,
    query: categoryName,
    page: 1,
    limit: 10,
  });

  const {
    isError: createError,
    isPending,
    error: createErrorDetails,
    mutateAsync: createRawMaterial,
  } = useCreateRawMaterial();

  useEffect(() => {
    if (categoryName !== '') {
      refetch();
    }
  }, [categoryName, refetch]);

  const loadOptions = async (inputValue: string) => {
    setCategoryName(inputValue); // Update categoryName to trigger refetch

    if (isLoading || isError) {
      return [];
    }

    // Access rawMaterialCategories from the response
    const rawMaterialCategories =
      rawMaterialCategoriesResponse?.data?.rawMaterialCategories || [];

    return (
      rawMaterialCategories.map(
        (category: {
          RawMaterialCategoryID: string;
          RawMaterialCategoryName: string;
        }) => ({
          value: category.RawMaterialCategoryID,
          label: category.RawMaterialCategoryName,
        }),
      ) || []
    );
  };

  const fields: Field<FormValues>[] = [
    {
      label: 'Raw Material Name',
      name: 'Name',
      placeholder: 'Raw Material Name',
      type: 'text',
    },
    {
      label: 'Category',
      name: 'CategoryID',
      placeholder: 'Category Name',
      type: 'select',
      isSearchable: true,
      loadOptions,
    },
    {
      label: 'Unit',
      name: 'Unit',
      placeholder: 'Unit',
      type: 'select',
      options: [
        {value: 'kg', label: 'kg'},
        {value: 'g', label: 'g'},
        {value: 'l', label: 'l'},
        {value: 'ml', label: 'ml'},
      ],
      isSearchable: false,
    },
  ];

  const handleFormSubmit = async (data: FormValues) => {
    const dataToApi = {...data, token: token?.accessToken as string};
    try {
      await createRawMaterial(dataToApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GenericForm<FormValues>
      schema={rawMaterialValidationSchema}
      onSubmit={handleFormSubmit}
      isPending={isPending}
      isError={createError}
      error={createErrorDetails}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Add', cancel: 'Cancel'}}
      formTitle="Add Raw Material"
    />
  );
};

export default CreateRawMaterial;
