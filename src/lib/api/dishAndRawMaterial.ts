import {api} from '@/utils/axios';
import {AxiosError} from 'axios';
import {
  CreateDishCategory,
  CreateDishParams,
  CreateRawMaterial,
  CreateRawMaterialCategory,
  IdAndToken,
  PaginationParams,
  RawMaterialCategoryUpdateParams,
  RawMaterialUpdateParams,
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
}: PaginationParams) => {
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
}: PaginationParams) => {
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
  const {token, Name, CategoryID, Unit} = data;
  try {
    const res = await api.post(
      '/raw-materials',
      {
        RawMaterialName: Name,
        RawMaterialCategoryID: CategoryID,
        RawMaterialUnit: Unit,
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

const getAllRawMaterials = async ({token, page, limit}: PaginationParams) => {
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
}: PaginationParams) => {
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

// Dish Category

const createDishCategory = async (data: CreateDishCategory) => {
  const {token, Name} = data;
  try {
    const res = await api.post(
      '/dish/category',
      {
        DishCategoryName: Name,
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

const getAllDishCategories = async ({token, page, limit}: PaginationParams) => {
  try {
    const res = await api.get('/dish/category', {
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

const searchDishCategories = async ({
  token,
  query,
  page,
  limit,
}: PaginationParams) => {
  try {
    const res = await api.get('/dish/category', {
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

const getDishCategoryById = async (data: IdAndToken) => {
  const {token, id} = data;
  try {
    const res = await api.get(`/dish/category/${id}`, {
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

const updateDishCategory = async (data: RawMaterialCategoryUpdateParams) => {
  const {token, id, Name} = data;
  try {
    const res = await api.patch(
      `/dish/category/${id}`,
      {
        DishCategoryName: Name,
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

const deleteDishCategory = async (data: IdAndToken) => {
  const {token, id} = data;
  try {
    const res = await api.delete(`/dish/category/${id}`, {
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

// Create Dish

const createDish = async (data: CreateDishParams) => {
  const {Name, CategoryID, Description} = data;
  try {
    const res = await api.post('/dish', {
      DishName: Name,
      DishCategoryID: CategoryID,
      DishDescription: Description,
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message ||
          'Something went wrong with creating a dish',
      );
    }
    throw error;
  }
};

const getAllDishes = async ({page, limit, token}: PaginationParams) => {
  try {
    const res = await api.get('/dish', {
      params: {
        page,
        limit,
      },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong fetching dishes',
      );
    }
    throw error;
  }
};

const searchDishes = async ({page, limit, token, query}: PaginationParams) => {
  try {
    const res = await api.get('/dish', {
      params: {
        page,
        limit,
        query,
      },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong fetching dishes',
      );
    }
    throw error;
  }
};

const getDishById = async ({id, token}: IdAndToken) => {
  try {
    const res = await api.get(`/dish/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Something went wrong fetching dish',
      );
    }
    throw error;
  }
};

const updateDish = async (data: CreateDishParams & IdAndToken) => {
  const {id, token, Name, CategoryID, Description} = data;
  try {
    const res = await api.patch(
      `/dish/${id}`,
      {
        DishName: Name,
        DishCategoryID: CategoryID,
        DishDescription: Description,
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
          'Something went wrong updating the dish',
      );
    }
    throw error;
  }
};

const deleteDish = async ({id, token}: IdAndToken) => {
  try {
    const res = await api.delete(`/dish/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message ||
          'Something went wrong deleting the dish',
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

  // Dish Category
  createDishCategory,
  getAllDishCategories,
  searchDishCategories,
  getDishCategoryById,
  updateDishCategory,
  deleteDishCategory,

  // Dish
  createDish,
  getAllDishes,
  searchDishes,
  getDishById,
  updateDish,
  deleteDish,
};
