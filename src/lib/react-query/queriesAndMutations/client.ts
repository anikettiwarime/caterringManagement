import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {CLIENT_KEYS} from '../queryKeys';
import {IdAndToken, PaginationParams} from '@/types';

import {
  createClient,
  updateClient,
  getAllClient,
  getClientById,
  deleteClient,
  searchClient,
} from '../../api/client';

const useCreateClient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createClient,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [CLIENT_KEYS.GET_ALL_CLIENT],
      });
    },
  });
};

const useGetAllClient = ({token, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [CLIENT_KEYS.GET_ALL_CLIENT, page, limit],
    queryFn: () => getAllClient({token, page, limit}),
    enabled: !!token,
  });
};

const useSearchClient = ({token, query, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [CLIENT_KEYS.SEARCH_CLIENT, page, limit],
    queryFn: () => searchClient({token, query, page, limit}),
    enabled: !!token,
    refetchOnWindowFocus: true,
  });
};

const useGetClientById = (data: IdAndToken) => {
  const {token, id} = data;
  return useQuery({
    queryKey: [CLIENT_KEYS.GET_CLIENT_BY_ID, id],
    queryFn: () => getClientById({token, id}),
    enabled: !!token,
  });
};

const useUpdateClient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateClient,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [CLIENT_KEYS.GET_ALL_CLIENT],
      });
    },
  });
};

const useDeleteClient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteClient,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [CLIENT_KEYS.GET_ALL_CLIENT],
      });
    },
  });
};

export {
  useCreateClient,
  useDeleteClient,
  useGetClientById,
  useGetAllClient,
  useSearchClient,
  useUpdateClient,
};
