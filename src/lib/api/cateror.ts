import {
  CreateCaterorParams,
  GetAllCaterorsApiResponse,
  IdAndToken,
  PaginationParams,
} from '@/types';
import {api} from '@/utils/axios';
import {AxiosError} from 'axios';

const createCateror = async (data: CreateCaterorParams) => {
  const {token, UserID} = data;
  try {
    const res = await api.post('/cateror', UserID, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const getAllCaterors = async ({
  token,
  page,
  limit,
}: PaginationParams): Promise<GetAllCaterorsApiResponse> => {
  try {
    const res = await api.get('/cateror', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        limit,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const searchCaterors = async ({
  token,
  query,
  page,
  limit,
}: PaginationParams): Promise<GetAllCaterorsApiResponse> => {
  try {
    const res = await api.get('/cateror/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        limit,
        query,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const getCaterorById = async (data: IdAndToken) => {
  const {token, id} = data;

  try {
    const res = await api.get(`/cateror/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const deleteCateror = async (data: IdAndToken) => {
  const {token, id} = data;
  try {
    const res = await api.delete(`/cateror/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

export {
  createCateror,
  getAllCaterors,
  searchCaterors,
  getCaterorById,
  deleteCateror,
};
