import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {signInValidationSchema} from '@/lib/validation/authSchemas';
import {Link, useRouter} from '@tanstack/react-router';
import {useSignIn} from '@/lib/react-query/queriesAndMutations/auth';
import {useAuthContext} from '@/context/AuthContext';
import {jwtDecode} from 'jwt-decode';

type SignInFormValues = z.infer<typeof signInValidationSchema>;

const SignIn = () => {
  const {mutateAsync: signIn} = useSignIn();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInValidationSchema),
    defaultValues: {},
  });

  const {setUser, setIsAuthenticated, setToken} = useAuthContext();
  const router = useRouter();

  const onSubmit = async (values: SignInFormValues) => {
    try {
      const res = await signIn(values);
      setIsAuthenticated(true);
      setUser(jwtDecode(res.data.token.accessToken));
      setToken(res.data.token);
      router.navigate({to: '/'});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2'>
      <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
        <h2 className='mb-9 text-center text-2xl font-bold text-black dark:text-white sm:text-title-xl2'>
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='mb-2.5 block font-medium text-black dark:text-white'>
              Email
            </label>
            <div className='relative'>
              <input
                type='text'
                placeholder='Enter your email'
                {...register('identifier')}
                className={`w-full rounded-lg border ${errors.identifier ? 'border-red-500' : 'border-stroke'} bg-transparent py-4 pl-6 pr-10 text-black outline-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
              />
              <span className='absolute right-4 top-4'>
                <svg
                  className='fill-current'
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.5'>
                    <path
                      d='M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z'
                      fill=''
                    />
                  </g>
                </svg>
              </span>
              {errors.identifier && (
                <p className='text-red-500'>{errors.identifier.message}</p>
              )}
            </div>
          </div>

          <div className='mb-4'>
            <label className='mb-2.5 block font-medium text-black dark:text-white'>
              Password
            </label>
            <div className='relative'>
              <input
                type='password'
                placeholder='Enter your password'
                {...register('password')}
                className={`w-full rounded-lg border ${errors.password ? 'border-red-500' : 'border-stroke'} bg-transparent py-4 pl-6 pr-10 text-black outline-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
              />
              <span className='absolute right-4 top-4'>
                <svg
                  className='fill-current'
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.5'>
                    <path
                      d='M16.1547 6.80626V5.86876C16.1547 2.64063 13.5141 0 10.286 0C7.05781 0 4.41719 2.64063 4.41719 5.86876V6.80626C2.77188 7.6 1.67401 9.35626 1.67401 11.34V17.6557C1.67401 20.3713 3.97813 22.3413 6.75156 21.9281C9.12656 21.582 10.7094 19.4563 10.6828 17.07V12.68C10.6828 12.2363 10.3336 11.8871 9.88983 11.8871C9.44608 11.8871 9.09688 12.2363 9.09688 12.68V17.1532C9.11875 18.7375 7.9625 20.032 6.35781 20.1382C4.62422 20.2539 3.22656 18.8782 3.22656 17.0994V10.7938C3.22656 9.12813 4.575 7.78126 6.24063 7.78126H14.3312C15.9953 7.78126 17.3438 9.12813 17.3438 10.7938V17.0994C17.3438 18.8782 15.9462 20.2539 14.2125 20.1382C12.6078 20.032 11.4516 18.7375 11.4734 17.1532V12.68C11.4734 12.2363 11.1242 11.8871 10.6805 11.8871C10.2367 11.8871 9.8875 12.2363 9.8875 12.68V17.07C9.86094 19.4563 11.4438 21.582 13.8188 21.9281C16.5922 22.3413 18.8963 20.3713 18.8963 17.6557V11.34C18.8963 9.35626 17.7984 7.6 16.1547 6.80626ZM5.96406 5.86876C5.96406 3.50938 7.92734 1.54688 10.286 1.54688C12.6453 1.54688 14.6086 3.50938 14.6086 5.86876V6.72657H5.96406V5.86876Z'
                      fill=''
                    />
                  </g>
                </svg>
              </span>
              {errors.password && (
                <p className='text-red-500'>{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className='mb-5'>
            <input
              type='submit'
              value='Sign In'
              className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
            />
          </div>

          <div className='mt-6 text-center'>
            <p>
              Don’t have any account?{' '}
              <Link className='text-primary' to='/'>
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
