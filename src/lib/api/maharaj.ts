import {api} from '@/utils/axios';
import {AxiosError} from 'axios';
import {
  CreateMaharaj,
  UpdateMaharaj,
  IdAndToken,
  PaginationParams,
} from '@/types';

const createMaharaj = async (data: CreateMaharaj) => {
  try {
    const res = await api.post('/maharaj', data);

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message ||
          'Something went wrong while creating a maharaj',
      );
    }
    throw error;
  }
};

const updateMaharaj = async (data: UpdateMaharaj) => {
  const {id, token, Specialization, Experience, isAvailable} = data;

  try {
    const res = await api.patch(
      `/maharaj/${id}`,
      {
        Specialization,
        Experience,
        isAvailable,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message ||
          'Something went wrong while updating a maharaj',
      );
    }
    throw error;
  }
};

const getMaharajById = async (data: IdAndToken) => {
  const {token, id} = data;
  try {
    const res = await api.get(`/maharaj/${id}`, {
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

const getAllMaharaj = async ({token, page, limit}: PaginationParams) => {
  try {
    const res = await api.get('/maharaj', {
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
        error.response?.data?.message ||
          'Something went wrong while retireving all maharaj',
      );
    }
    throw error;
  }
};

const searchMaharaj = async ({token, query, page, limit}: PaginationParams) => {
  try {
    const res = await api.get('/maharaj', {
      headers: {Authorization: `Bearer ${token}`},
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
        error.response?.data?.message ||
          'Something went wrong while searching for maharaj',
      );
    }
    throw error;
  }
};

const deleteMaharaj = async (data: IdAndToken) => {
  const {token, id} = data;
  try {
    const res = await api.delete(`/maharaj/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message ||
          'Something went wrong while deleting maharaj',
      );
    }
    throw error;
  }
};

export {
  createMaharaj,
  updateMaharaj,
  getMaharajById,
  getAllMaharaj,
  searchMaharaj,
  deleteMaharaj,
};
