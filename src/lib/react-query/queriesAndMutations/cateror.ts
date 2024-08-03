import {createCateror, getAllCaterors, searchCaterors} from '@/lib/api/cateror';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {QUERY_KEYS} from '../queryKeys';
import {
  CreateCaterorParams,
  GetAllCaterorsApiResponse,
  SearchOrGetAllCaterorsParams,
} from '@/types';

const useCreateCateror = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateCaterorParams) => createCateror(data),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GET_ALL_CATERORS]});
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

const useGetAllCaterors = ({
  token,
  page,
  limit,
}: SearchOrGetAllCaterorsParams) => {
  return useQuery<GetAllCaterorsApiResponse>({
    queryKey: [QUERY_KEYS.GET_ALL_CATERORS, page, limit],
    queryFn: () => getAllCaterors({token, page, limit}),
    enabled: !!token,
  });
};

const useSearchCaterors = ({
  token,
  query,
  page,
  limit,
}: SearchOrGetAllCaterorsParams) => {
  return useQuery<GetAllCaterorsApiResponse>({
    queryKey: [QUERY_KEYS.GET_ALL_CATERORS, query, page, limit],
    queryFn: () => searchCaterors({token, query, page, limit}),
    enabled: !!token,
  });
};

export {useCreateCateror, useGetAllCaterors, useSearchCaterors};
