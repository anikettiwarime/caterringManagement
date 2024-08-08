import {z, ZodSchema} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useRouter} from '@tanstack/react-router';
import {ReactNode} from 'react';
import {
  useForm,
  FieldValues,
  UseFormProps,
  Path,
  Controller,
} from 'react-hook-form';
import AsyncSelect from 'react-select/async';

export interface Field<T> {
  label?: string;
  name: keyof z.infer<ZodSchema<T>>;
  type: 'text' | 'email' | 'password' | 'select' | 'checkbox';
  placeholder: string;
  icon?: ReactNode;
  options?: Array<{value: string; label: string}>;
  isSearchable?: boolean;
  loadOptions?: (
    inputValue: string,
  ) => Promise<Array<{value: string; label: string}>>;
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
    control,
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
                {field.type === 'select' ? (
                  <Controller
                    name={field.name as Path<T>}
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <AsyncSelect
                        cacheOptions
                        loadOptions={field.loadOptions}
                        defaultOptions
                        value={field.options?.find(
                          (option) => option.value === value,
                        )}
                        onChange={(option) => onChange(option?.value)}
                        placeholder={field.placeholder}
                        isSearchable={field.isSearchable}
                        classNamePrefix="react-select"
                        className={`w-full rounded border bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary ${
                          errors[field.name] ? 'border-danger' : 'border-stroke'
                        }`}
                      />
                    )}
                  />
                ) : field.type === 'checkbox' ? (
                  <div className="flex items-center">
                    <Controller
                      name={field.name as Path<T>}
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <>
                          <input
                            type="checkbox"
                            id={field.name as string}
                            checked={!!value}
                            onChange={(e) => onChange(e.target.checked)}
                            className="sr-only"
                          />
                          <div
                            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                              errors[field.name]
                                ? 'border-danger'
                                : 'border-stroke'
                            }`}
                          >
                            {value && (
                              <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3"
                                  stroke="#3056D3"
                                  strokeWidth="0.4"
                                ></path>
                              </svg>
                            )}
                          </div>
                        </>
                      )}
                    />
                    <label
                      htmlFor={field.name as string}
                      className="cursor-pointer select-none"
                    >
                      {field.placeholder}
                    </label>
                  </div>
                ) : (
                  <input
                    className={`w-full rounded border bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary ${
                      errors[field.name] ? 'border-danger' : 'border-stroke'
                    }`}
                    type={field.type}
                    {...register(field.name as Path<T>)}
                    placeholder={field.placeholder}
                  />
                )}
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
