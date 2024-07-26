import {signIn, signOut, signUp} from '@/lib/api/auth';
import {useMutation} from '@tanstack/react-query';
import {QUERY_KEYS} from '../queryKeys';
import {z} from 'zod';
import {
  signInValidationSchema,
  signUpValidationSchema,
} from '@/lib/validation/authSchemas';

type signInData = z.infer<typeof signInValidationSchema>;
type signUpData = z.infer<typeof signUpValidationSchema>;

const useSignIn = () => {
  return useMutation({
    mutationFn: (data: signInData) => signIn(data),
    onSuccess: (res) => {
      localStorage.setItem(QUERY_KEYS.TOKEN, JSON.stringify(res.data.token));
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

const useSignUp = () => {
  return useMutation({
    mutationFn: (data: signUpData) => signUp(data),

    onError: (error) => {
      console.error(error);
    },
  });
};

const useSignOut = () => {
  return useMutation({
    mutationFn: () => {
      const token = localStorage.getItem(QUERY_KEYS.TOKEN);
      if (!token) {
        throw new Error('No token found');
      }
      return signOut(token);
    },

    onSuccess: () => {
      localStorage.removeItem(QUERY_KEYS.TOKEN);
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

export {useSignIn, useSignUp, useSignOut};
