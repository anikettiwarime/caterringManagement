import {api} from '@/utils/axios';
import {AxiosError} from 'axios';
import {z} from 'zod';
import {
  signInValidationSchema,
  signUpValidationSchema,
} from '../validation/authSchemas';

type signInData = z.infer<typeof signInValidationSchema>;
type signUpData = z.infer<typeof signUpValidationSchema>;

const signIn = async (data: signInData) => {
  try {
    const res = await api.post('/users/login', data);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong with sign in'
      );
    }
    throw error;
  }
};

const signUp = async (data: signUpData) => {
  try {
    const res = await api.post('/users/register', data);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong with sign up'
      );
    }
    throw error;
  }
};

const signOut = async (token: string) => {
  try {
    const res = await api.post('/users/logout', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong with sign out'
      );
    }
    throw error;
  }
};

export {signIn, signUp, signOut};
