import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {DISH_AND_RAW_MATERIAL_QUERY_KEYS} from '../queryKeys';

import {IdAndToken, PaginationParams} from '@/types';

import {
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
} from '../../api/dishAndRawMaterial';

const useCreateRawMaterialCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRawMaterialCategory,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [
          DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_RAW_MATERIAL_CATEGORIES,
        ],
      });
    },
  });
};

const useGetAllRawMaterialCategories = ({
  token,
  page,
  limit,
}: PaginationParams) => {
  return useQuery({
    queryKey: [
      DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_RAW_MATERIAL_CATEGORIES,
      page,
      limit,
    ],
    queryFn: () => getAllRawMaterialCategories({token, page, limit}),
    enabled: !!token,
  });
};

const useSearchRawMaterialCategories = ({
  token,
  query,
  page,
  limit,
}: PaginationParams) => {
  return useQuery({
    queryKey: [
      DISH_AND_RAW_MATERIAL_QUERY_KEYS.SEARCH_RAW_MATERIAL_CATEGORIES,
      page,
      limit,
    ],
    queryFn: () => searchRawMaterialCategories({token, query, page, limit}),
    enabled: !!token,
    refetchOnWindowFocus: true,
  });
};

const useGetRawMaterialCategoryById = (data: IdAndToken) => {
  const {token, id} = data;
  return useQuery({
    queryKey: [
      DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_RAW_MATERIAL_CATEGORY_BY_ID,
      id,
    ],
    queryFn: () => getRawMaterialCategoryById({token, id}),
    enabled: !!token,
  });
};

const useUpdateRawMaterialCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateRawMaterialCategory,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [
          DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_RAW_MATERIAL_CATEGORIES,
        ],
      });
    },
  });
};

const useDeleteRawMaterialCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRawMaterialCategory,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [
          DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_RAW_MATERIAL_CATEGORIES,
        ],
      });
    },
  });
};

const useCreateRawMaterial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRawMaterial,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_RAW_MATERIALS],
      });
    },
  });
};

const useGetAllRawMaterials = ({token, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [
      DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_RAW_MATERIALS,
      page,
      limit,
    ],
    queryFn: () => getAllRawMaterials({token, page, limit}),
    enabled: !!token,
  });
};

const useSearchRawMaterials = ({
  token,
  query,
  page,
  limit,
}: PaginationParams) => {
  return useQuery({
    queryKey: [
      DISH_AND_RAW_MATERIAL_QUERY_KEYS.SEARCH_RAW_MATERIALS,
      query,
      page,
      limit,
    ],
    queryFn: () => searchRawMaterials({token, query, page, limit}),
    enabled: !!token,
  });
};

const useGetRawMaterialById = (data: IdAndToken) => {
  const {token, id} = data;
  return useQuery({
    queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_RAW_MATERIAL_BY_ID, id],
    queryFn: () => getRawMaterialById({token, id}),
    enabled: !!token,
  });
};

const useUpdateRawMaterial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateRawMaterial,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_RAW_MATERIALS],
      });
    },
  });
};

const useDeleteRawMaterial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRawMaterial,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_RAW_MATERIALS],
      });
    },
  });
};

// Dish Category
const useCreateDishCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createDishCategory,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_DISH_CATEGORIES],
      });
    },
  });
};

const useGetAllDishCategories = ({token, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [
      DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_DISH_CATEGORIES,
      page,
      limit,
    ],
    queryFn: () => getAllDishCategories({token, page, limit}),
    enabled: !!token,
  });
};

const useSearchDishCategories = ({
  token,
  query,
  page,
  limit,
}: PaginationParams) => {
  return useQuery({
    queryKey: [
      DISH_AND_RAW_MATERIAL_QUERY_KEYS.SEARCH_DISH_CATEGORIES,
      query,
      page,
      limit,
    ],
    queryFn: () => searchDishCategories({token, query, page, limit}),
    enabled: !!token,
  });
};

const useGetDishCategoryById = (data: IdAndToken) => {
  const {token, id} = data;
  return useQuery({
    queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_DISH_CATEGORY_BY_ID, id],
    queryFn: () => getDishCategoryById({token, id}),
    enabled: !!token,
  });
};

const useUpdateDishCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateDishCategory,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_DISH_CATEGORIES],
      });
    },
  });
};

const useDeleteDishCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDishCategory,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_DISH_CATEGORIES],
      });
    },
  });
};

// Dish

const useCreateDish = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createDish,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_DISHES],
      });
    },
  });
};

const useGetAllDishes = ({token, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_DISHES, page, limit],
    queryFn: () => getAllDishes({token, page, limit}),
    enabled: !!token,
  });
};

const useSearchDishes = ({token, query, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [
      DISH_AND_RAW_MATERIAL_QUERY_KEYS.SEARCH_DISHES,
      query,
      page,
      limit,
    ],
    queryFn: () => searchDishes({token, query, page, limit}),
    enabled: !!token,
  });
};

const useGetDishById = (data: IdAndToken) => {
  const {token, id} = data;
  return useQuery({
    queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_DISH_BY_ID, id],
    queryFn: () => getDishById({token, id}),
    enabled: !!token,
  });
};

const useUpdateDish = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateDish,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_DISHES],
      });
    },
  });
};

const useDeleteDish = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDish,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [DISH_AND_RAW_MATERIAL_QUERY_KEYS.GET_ALL_DISHES],
      });
    },
  });
};

export {
  useCreateRawMaterialCategory,
  useGetAllRawMaterialCategories,
  useSearchRawMaterialCategories,
  useGetRawMaterialCategoryById,
  useUpdateRawMaterialCategory,
  useDeleteRawMaterialCategory,

  // Raw Material
  useCreateRawMaterial,
  useGetAllRawMaterials,
  useSearchRawMaterials,
  useGetRawMaterialById,
  useUpdateRawMaterial,
  useDeleteRawMaterial,

  // DishCategory
  useCreateDishCategory,
  useGetAllDishCategories,
  useSearchDishCategories,
  useGetDishCategoryById,
  useUpdateDishCategory,
  useDeleteDishCategory,

  // Dish
  useCreateDish,
  useGetAllDishes,
  useSearchDishes,
  useGetDishById,
  useUpdateDish,
  useDeleteDish,
};
