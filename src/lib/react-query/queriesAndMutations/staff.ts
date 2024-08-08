import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {STAFF_KEYS} from '../queryKeys';
import {IdAndToken, PaginationParams} from '@/types';

import {
  createStaff,
  updateStaff,
  getAllStaff,
  getStaffById,
  deleteStaff,
  searchStaff,
} from '../../api/staff';

const useCreateStaff = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createStaff,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [STAFF_KEYS.GET_ALL_STAFFS],
      });
    },
  });
};

const useGetAllStaff = ({token, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [STAFF_KEYS.GET_ALL_STAFFS, page, limit],
    queryFn: () => getAllStaff({token, page, limit}),
    enabled: !!token,
  });
};

const useSearchStaff = ({token, query, page, limit}: PaginationParams) => {
  return useQuery({
    queryKey: [STAFF_KEYS.SEARCH_STAFF, page, limit],
    queryFn: () => searchStaff({token, query, page, limit}),
    enabled: !!token,
    refetchOnWindowFocus: true,
  });
};

const useGetStaffById = (data: IdAndToken) => {
  const {token, id} = data;
  return useQuery({
    queryKey: [STAFF_KEYS.GET_STAFF_BY_ID, id],
    queryFn: () => getStaffById({token, id}),
    enabled: !!token,
  });
};

const useUpdateStaff = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateStaff,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [STAFF_KEYS.GET_ALL_STAFFS],
      });
    },
  });
};

const useDeleteStaff = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteStaff,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [STAFF_KEYS.GET_ALL_STAFFS],
      });
    },
  });
};

export {
  useCreateStaff,
  useDeleteStaff,
  useGetStaffById,
  useGetAllStaff,
  useSearchStaff,
  useUpdateStaff,
};
