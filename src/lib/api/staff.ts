import { IdAndToken, PaginationParams, CreateStaff, UpdateStaff } from '@/types';
import { api } from '@/utils/axios';
import { AxiosError } from 'axios';




const createStaff = async (data: CreateStaff) => {

    try {

        const res = await api.post('/staff', data)

        return res.data;

    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.message || 'Something went wrong while creating a Staff',
            );
        }
        throw error;
    }

}


const updateStaff = async (data: UpdateStaff) => {


    const { id, token, jobType , address } = data

    try {

        const res = await api.patch(`/staff/${id}`,
            {
                jobType,
                address
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            }
        )

        return res.data;

    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.message || 'Something went wrong while updating a Staff',
            );
        }
        throw error;
    }

}



const getStaffById = async (data: IdAndToken) => {
    const { token, id } = data;
    try {
        const res = await api.get(`/staff/${id}`, {
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



const getAllStaff = async ({ token, page, limit }: PaginationParams) => {
    try {
        const res = await api.get('/staff', {
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
                error.response?.data?.message || 'Something went wrong while retireving all Staff',
            );
        }
        throw error;
    }
};


const searchStaff = async ({
    token,
    query,
    page,
    limit,
}: PaginationParams) => {
    try {
        const res = await api.get('/staff', {
            headers: { Authorization: `Bearer ${token}` },
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
                error.response?.data?.message || 'Something went wrong while searching for Staff',
            );
        }
        throw error;
    }
};




const deleteStaff = async (data: IdAndToken) => {
    const { token, id } = data;
    try {
        const res = await api.delete(`/staff/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.message || 'Something went wrong while deleting Staff',
            );
        }
        throw error;
    }
};






export { createStaff, updateStaff, deleteStaff, getAllStaff, getStaffById, searchStaff }