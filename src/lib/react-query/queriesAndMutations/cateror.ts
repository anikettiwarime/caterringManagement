import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {QUERY_KEYS} from '../queryKeys';
import {
  CreateCaterorParams,
  GetAllCaterorsApiResponse,
  IdAndToken,
  PaginationParams,
} from '@/types';
import {
  createCateror,
  getAllCaterors,
  searchCaterors,
  getCaterorById,
  deleteCateror,
} from '@/lib/api/cateror';

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

const useGetAllCaterors = ({token, page, limit}: PaginationParams) => {
  return useQuery<GetAllCaterorsApiResponse>({
    queryKey: [QUERY_KEYS.GET_ALL_CATERORS, page, limit],
    queryFn: () => getAllCaterors({token, page, limit}),
    enabled: !!token,
  });
};

const useSearchCaterors = ({token, query, page, limit}: PaginationParams) => {
  return useQuery<GetAllCaterorsApiResponse>({
    queryKey: [QUERY_KEYS.SEARCH_CATERORS, query, page, limit],
    queryFn: () => searchCaterors({token, query, page, limit}),
    enabled: !!token,
  });
};
const useGetCaterorById = (data: IdAndToken) => {
  const {token, id} = data;
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CATEROR_BY_ID, id],
    queryFn: () => getCaterorById({token, id}),
    enabled: !!token,
  });
};

const useDeleteCateror = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCateror,
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GET_ALL_CATERORS]});
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export {
  useCreateCateror,
  useGetAllCaterors,
  useSearchCaterors,
  useGetCaterorById,
  useDeleteCateror,
};
