import {api} from '@/utils/axios';
import {AxiosError} from 'axios';
import {
  CreateRawMaterial,
  CreateRawMaterialCategory,
  IdAndToken,
  RawMaterialCategoryUpdateParams,
  RawMaterialUpdateParams,
  SearchOrGetAllParams,
} from '@/types';

// Raw Material Category
const createRawMaterialCategory = async (data: CreateRawMaterialCategory) => {
  const {token, Name} = data;
  try {
    const res = await api.post(
      '/raw-materials/category',
      {
        RawMaterialCategoryName: Name,
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
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const getAllRawMaterialCategories = async ({
  token,
  page,
  limit,
}: SearchOrGetAllParams) => {
  try {
    const res = await api.get('/raw-materials/category', {
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

const searchRawMaterialCategories = async ({
  token,
  query,
  page,
  limit,
}: SearchOrGetAllParams) => {
  try {
    const res = await api.get('/raw-materials/category', {
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
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const getRawMaterialCategoryById = async (data: IdAndToken) => {
  const {token, id} = data;
  try {
    const res = await api.get(`/raw-materials/category/${id}`, {
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

const updateRawMaterialCategory = async (
  data: RawMaterialCategoryUpdateParams,
) => {
  const {token, id, Name} = data;
  try {
    const res = await api.patch(
      `/raw-materials/category/${id}`,
      {
        RawMaterialCategoryName: Name,
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
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const deleteRawMaterialCategory = async (data: IdAndToken) => {
  const {token, id} = data;
  try {
    const res = await api.delete(`/raw-materials/category/${id}`, {
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

// Raw Material
const createRawMaterial = async (data: CreateRawMaterial) => {
  const {token, Name, CategoryID, RawMaterialUnit} = data;
  try {
    const res = await api.post(
      '/raw-materials',
      {
        RawMaterialName: Name,
        RawMaterialCategoryID: CategoryID,
        RawMaterialUnit,
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
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const getAllRawMaterials = async ({
  token,
  page,
  limit,
}: SearchOrGetAllParams) => {
  try {
    const res = await api.get('/raw-materials', {
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

const searchRawMaterials = async ({
  token,
  query,
  page,
  limit,
}: SearchOrGetAllParams) => {
  try {
    const res = await api.get('/raw-materials', {
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
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const getRawMaterialById = async (data: IdAndToken) => {
  const {token, id} = data;
  try {
    const res = await api.get(`/raw-materials/${id}`, {
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

const updateRawMaterial = async (data: RawMaterialUpdateParams) => {
  const {token, id, Name, CategoryID, RawMaterialUnit} = data;
  try {
    const res = await api.patch(
      `/raw-materials/${id}`,
      {
        RawMaterialName: Name,
        RawMaterialCategoryID: CategoryID,
        RawMaterialUnit,
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
        error.response?.data?.message || 'Something went wrong with sign up',
      );
    }
    throw error;
  }
};

const deleteRawMaterial = async (data: IdAndToken) => {
  const {token, id} = data;
  try {
    const res = await api.delete(`/raw-materials/${id}`, {
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
  createRawMaterialCategory,
  getAllRawMaterialCategories,
  searchRawMaterialCategories,
  getRawMaterialCategoryById,
  updateRawMaterialCategory,
  deleteRawMaterialCategory,

  // Raw Material
  createRawMaterial,
  getAllRawMaterials,
  searchRawMaterials,
  getRawMaterialById,
  updateRawMaterial,
  deleteRawMaterial,
};
