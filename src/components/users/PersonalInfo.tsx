import {useSignUp} from '@/lib/react-query/queriesAndMutations/auth';
import {signUpValidationSchema} from '@/lib/validation/authSchemas';
import {zodResolver} from '@hookform/resolvers/zod';
import {useRouter} from '@tanstack/react-router';
import React from 'react';
import {useForm} from 'react-hook-form';
import {FiUser, FiMail} from 'react-icons/fi';
import {z} from 'zod';

type formValues = z.infer<typeof signUpValidationSchema>;

const PersonalInfoForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<formValues>({
    resolver: zodResolver(signUpValidationSchema),
  });

  const {mutateAsync: signUp, isError, isPending, error} = useSignUp();

  const onsubmit = async (data: formValues) => {
    try {
      await signUp(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Personal Information
        </h3>
      </div>
      <div className="p-7">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-4.5 top-4">
                  <FiUser size={20} />
                </span>
                <input
                  className={`w-full rounded border bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary ${errors.name ? 'border-danger' : 'border-stroke'} `}
                  type="text"
                  {...register('name')}
                  placeholder="Devid Jhon"
                />

                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className={`w-full rounded border bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary ${errors.phoneNumber ? 'border-danger' : 'border-stroke'} `}
                type="text"
                {...register('phoneNumber')}
                placeholder="+91 90 3343 7865"
              />

              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div className="mb-5.5">
            <label
              className="mb-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-4.5 top-4">
                <FiMail size={20} />
              </span>
              <input
                className={`w-full rounded border bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary ${errors.email ? 'border-danger' : 'border-stroke'} `}
                type="email"
                {...register('email')}
                placeholder="devidjond45@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="mb-5.5">
            <label
              className="mb-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="Username"
            >
              Username
            </label>
            <input
              className={`w-full rounded border bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary ${errors.username ? 'border-danger' : 'border-stroke'} `}
              type="text"
              {...register('username')}
              placeholder="devidjhon24"
            />

            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div className="mb-5.5">
            <label
              className="mb-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="Username"
            >
              Password
            </label>
            <input
              className={`w-full rounded border bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary ${errors.password ? 'border-danger' : 'border-stroke'} `}
              type="password"
              {...register('password')}
              placeholder="Enter your password"
            />

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {isError && (
            <p className="text-red-500">
              {error?.message || 'An error occurred'}
            </p>
          )}

          <div className="flex justify-end gap-4.5">
            <button
              className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              onClick={() => router.navigate({to: '/dashboard'})}
            >
              Cancel
            </button>
            <button
              className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
              type="submit"
            >
              {isPending ? 'Loading...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
