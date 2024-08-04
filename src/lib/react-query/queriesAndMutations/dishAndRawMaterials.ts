import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {DISH_AND_RAW_MATERIAL_QUERY_KEYS} from '../queryKeys';

import {IdAndToken, SearchOrGetAllParams} from '@/types';

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
}: SearchOrGetAllParams) => {
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
}: SearchOrGetAllParams) => {
  return useQuery({
    queryKey: [
      DISH_AND_RAW_MATERIAL_QUERY_KEYS.SEARCH_RAW_MATERIAL_CATEGORIES,
      query,
      page,
      limit,
    ],
    queryFn: () => searchRawMaterialCategories({token, query, page, limit}),
    enabled: !!token,
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

const useGetAllRawMaterials = ({token, page, limit}: SearchOrGetAllParams) => {
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
}: SearchOrGetAllParams) => {
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
};
