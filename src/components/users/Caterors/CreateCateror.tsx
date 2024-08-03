import React from 'react';
import {useSignUp} from '@/lib/react-query/queriesAndMutations/auth';
import {useCreateCateror} from '@/lib/react-query/queriesAndMutations/cateror';
import {signUpValidationSchema} from '@/lib/validation/authSchemas';
import {z} from 'zod';
import {useAuthContext} from '@/context/AuthContext';
import {GenericForm} from '../../common/forms';
import {FiUser, FiMail, FiPhone} from 'react-icons/fi';
import {Field} from '../../common/forms/GenericForm';

type FormValues = z.infer<typeof signUpValidationSchema>;

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
    name: 'phoneNumber',
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
];

const CreateCateror: React.FC = () => {
  const {token} = useAuthContext();
  const {mutateAsync: signUp, isError, isPending, error} = useSignUp();
  const {mutateAsync: createCateror} = useCreateCateror();

  const handleFormSubmit = async (data: FormValues) => {
    console.log('Form submitted', data);

    const caterorData = {
      UserID: '',
      token: token?.accessToken || '',
    };

    try {
      const res = await signUp(data);
      caterorData.UserID = res.data.UserID;
      await createCateror(caterorData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GenericForm<FormValues>
      schema={signUpValidationSchema}
      onSubmit={handleFormSubmit}
      isPending={isPending}
      isError={isError}
      error={error}
      fields={fields}
      formType="create"
      buttonText={{submit: 'Create', cancel: 'Cancel'}}
      formTitle="Create Cateror"
    />
  );
};

export default CreateCateror;
