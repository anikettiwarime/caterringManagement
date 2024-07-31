import {z, ZodSchema} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useRouter} from '@tanstack/react-router';
import {ReactNode} from 'react';
import {useForm, FieldValues, UseFormProps, Path} from 'react-hook-form';

export interface Field<T> {
  label: string;
  name: keyof z.infer<ZodSchema<T>>;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  icon?: ReactNode;
}

interface GenericFormProps<T extends FieldValues> {
  schema: ZodSchema<T>;
  onSubmit: (data: T) => void;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  fields: Array<Field<T>>;
  defaultValues?: UseFormProps<T>['defaultValues'];
  formType: 'create' | 'update' | 'delete';
  formTitle: string;
  buttonText?: {
    submit: string;
    cancel: string;
  };
}

const GenericForm = <T extends FieldValues>({
  schema,
  onSubmit,
  isPending,
  isError,
  error,
  fields,
  defaultValues,
  formType,
  formTitle,
  buttonText = {submit: 'Save', cancel: 'Cancel'},
}: GenericFormProps<T>) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmitHandler = async (data: T) => {
    onSubmit(data);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">{formTitle}</h3>
      </div>
      <div className="p-7">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          {fields.map((field) => (
            <div key={field.name as string} className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor={field.name as string}
              >
                {field.label}
              </label>
              <div className="relative">
                {field.icon && (
                  <span className="absolute left-4.5 top-4">{field.icon}</span>
                )}
                <input
                  className={`w-full rounded border bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary ${
                    errors[field.name] ? 'border-danger' : 'border-stroke'
                  }`}
                  type={field.type}
                  {...register(field.name as Path<T>)}
                  placeholder={field.placeholder}
                />
                {errors[field.name] && (
                  <p className="text-red-500">
                    {errors[field.name]?.message as string}
                  </p>
                )}
              </div>
            </div>
          ))}

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
              {buttonText.cancel}
            </button>

            <button
              className={`flex justify-center rounded ${
                formType === 'delete'
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-primary hover:bg-opacity-90'
              } px-6 py-2 font-medium text-gray`}
              type="submit"
            >
              {isPending ? 'Loading...' : buttonText.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenericForm;
