import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {MAHARAJ_KEYS} from '../queryKeys';
import {IdAndToken, PaginationParams} from '@/types';

import {
  createMaharaj,
  updateMaharaj,
  getAllMaharaj,
  getMaharajById,
  deleteMaharaj,
  searchMaharaj,
} from '../../api/maharaj';

const useCreateMaharaj = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMaharaj,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [MAHARAJ_KEYS.GET_ALL_MAHARAJS],
      });
    },
  });
};

const useGetAllMaharaj = ({token, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [MAHARAJ_KEYS.GET_ALL_MAHARAJS, page, limit],
    queryFn: () => getAllMaharaj({token, page, limit}),
    enabled: !!token,
  });
};

const useSearchMaharaj = ({token, query, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [MAHARAJ_KEYS.SEARCH_MAHARAJS, page, limit],
    queryFn: () => searchMaharaj({token, query, page, limit}),
    enabled: !!token,
    refetchOnWindowFocus: true,
  });
};

const useGetMaharajById = (data: IdAndToken) => {
  const {token, id} = data;
  return useQuery({
    queryKey: [MAHARAJ_KEYS.GET_MAHARAJ_BY_ID, id],
    queryFn: () => getMaharajById({token, id}),
    enabled: !!token,
  });
};

const useUpdateMaharaj = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateMaharaj,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [MAHARAJ_KEYS.GET_ALL_MAHARAJS],
      });
    },
  });
};

const useDeleteMaharaj = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMaharaj,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [MAHARAJ_KEYS.GET_ALL_MAHARAJS],
      });
    },
  });
};

export {
  useCreateMaharaj,
  useDeleteMaharaj,
  useGetMaharajById,
  useGetAllMaharaj,
  useSearchMaharaj,
  useUpdateMaharaj,
};
