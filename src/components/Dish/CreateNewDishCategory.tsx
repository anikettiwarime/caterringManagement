import React from "react";
import { z } from 'zod'
import { dishCategoryValidationSchema } from "@/lib/validation/dishSchema";
import { Field } from "../common/forms/GenericForm";
import { useCreateDishCategory } from "@/lib/react-query/queriesAndMutations/dishAndRawMaterials";
import { useAuthContext } from "@/context/AuthContext";
import GenericForm from "../common/forms/GenericForm";

type FormValues = z.infer<typeof dishCategoryValidationSchema>;

const fields: Field<FormValues>[] = [
  {
    label: 'Dish Name',
    name: 'Name',
    placeholder: 'Dish Name',
    type: 'text',
  },
 
];


const CreateDishCategory: React.FC = () => {
  const { isError, isPending, error, mutateAsync: createDishCategory } = useCreateDishCategory();
  const {token} = useAuthContext()

  const handleFormSubmit = async (data: FormValues) => {
    console.log('Form submitted', data);

    try {
      const res = await createDishCategory({
        ...data,
         token:token?.accessToken as string
      }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GenericForm<FormValues>
      schema={dishCategoryValidationSchema}
      onSubmit={handleFormSubmit}
      isPending={isPending}
      isError={isError}
      error={error}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Create', cancel: 'Cancel'}}
      formTitle="Create Dish Category"
    />
  );
};

export default CreateDishCategory;
