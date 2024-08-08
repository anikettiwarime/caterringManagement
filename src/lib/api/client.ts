import { IdAndToken, PaginationParams ,CreateClient , UpdateClient } from '@/types';
import { api } from '@/utils/axios';
import { AxiosError } from 'axios';




const createClient = async (data: CreateClient) => {

    try {

        const res = await api.post('/clients', data)

        return res.data;

    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.message || 'Something went wrong while creating a Client',
            );
        }
        throw error;
    }

}


const updateClient = async (data: UpdateClient) => {


    const { id , token , isVeg, isJain, Address, Caste } = data

    try {

        const res = await api.patch(`/clients/${id}`,
            {
                isVeg,
                isJain,
                Address,
                Caste
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
                error.response?.data?.message || 'Something went wrong while updating a Client',
            );
        }
        throw error;
    }

}



const getClientById = async (data: IdAndToken) => {
    const { token, id } = data;
    try {
        const res = await api.get(`/clients/${id}`, {
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



const getAllClient = async ({ token, page, limit }: PaginationParams) => {
    try {
        const res = await api.get('/clients', {
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
                error.response?.data?.message || 'Something went wrong while retireving all Client',
            );
        }
        throw error;
    }
};


const searchClient = async ({
    token,
    query,
    page,
    limit,
}: PaginationParams) => {
    try {
        const res = await api.get('/clients', {
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
                error.response?.data?.message || 'Something went wrong while searching for Client',
            );
        }
        throw error;
    }
};




const deleteClient = async (data: IdAndToken) => {
    const { token, id } = data;
    try {
        const res = await api.delete(`/clients/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.message || 'Something went wrong while deleting Client',
            );
        }
        throw error;
    }
};






export { createClient , updateClient , deleteClient , getAllClient , getClientById , searchClient  }