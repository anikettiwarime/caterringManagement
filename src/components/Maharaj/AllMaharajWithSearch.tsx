<<<<<<< HEAD
import React from 'react';
import {useCallback, useState} from 'react';
import {DisplayTable} from '@/components/common/Tables';
import {Column, RawMaterials} from '@/types';
import {useAuthContext} from '@/context/AuthContext';
import {LoadingErrorNoData} from '@/components/Loader';
import {useDebounceValue} from 'usehooks-ts';
import {useSearchMaharaj} from '@/lib/react-query/queriesAndMutations/maharaj';

const AllMaharajWithSearch: React.FC = () => {
  const columns: Column<RawMaterials>[] = [
    {header: 'RawMaterialID', accessor: 'RawMaterialID'},
    {header: 'RawMaterialName', accessor: 'RawMaterialName'},
    {header: 'RawMaterialCategoryID', accessor: 'RawMaterialCategoryID'},
    {header: 'RawMaterialUnit', accessor: 'RawMaterialUnit'},
  ];

  const {token} = useAuthContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [debouncedSearchQuery, setSearchQuery] = useDebounceValue<string>(
    '',
    500,
  );

  console.log('debouncedSearchQuery', debouncedSearchQuery);

  const {
    data: maharajResponse,
    isLoading,
    isError,
  } = useSearchMaharaj({
    token: token?.accessToken || '',
    page: currentPage,
    limit: itemsPerPage,
    query: debouncedSearchQuery,
  });
=======
import { useCallback, useState } from 'react';
import { DisplayTable } from '@/components/common/Tables';
import { Column } from '@/types';
import { useAuthContext } from '@/context/AuthContext';
import { useDebounceValue } from 'usehooks-ts';

// Define the Maharaj interface
interface Maharaj {
  name: string;
  username: string;
  email: string;
  PhoneNo: number;
  specialization: string;
}

// Define columns for the Maharaj table
const columns: Column<Maharaj>[] = [
  { header: 'Name', accessor: 'name' },
  { header: 'Username', accessor: 'username' },
  { header: 'Email', accessor: 'email' },
  { header: 'Phone Number', accessor: 'PhoneNo' },
  { header: 'Specialization', accessor: 'specialization' },
];

const AllMaharajsWithSearch = () => {
  const { token } = useAuthContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounceValue<string>(searchQuery, 500);
>>>>>>> c9db49500851597b4a6ffa811770b2e1ae374450

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  const handleItemsPerPageChange = useCallback((newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleDetail = (id: string) => {
    console.log('Detail', id);
  };

  const handleEdit = (id: string) => {
    console.log('Edit', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete', id);
  };

  return (
<<<<<<< HEAD
    <LoadingErrorNoData
      isLoading={isLoading}
      isError={isError}
      errorMessage="Error loading raw materials"
      hasData={!!maharajResponse?.data}
    >
      <DisplayTable
        columns={columns}
        data={maharajResponse?.data.dishes || []}
        idKey="RawMaterialID"
        title="RawMaterial"
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={maharajResponse?.data.totalPages || 1}
=======
    <div>
      <DisplayTable
        columns={columns}
        data={[]} // Empty data array
        idKey="username"  // Use a unique key for the row
        title="Maharajs"
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={1}
>>>>>>> c9db49500851597b4a6ffa811770b2e1ae374450
        pageOptions={[5, 10, 20]}
        searchQuery={debouncedSearchQuery}
        onSearchChange={handleSearchChange}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
        onDetail={handleDetail}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
<<<<<<< HEAD
    </LoadingErrorNoData>
  );
};

export default AllMaharajWithSearch;
=======
    </div>
  );
};

export default AllMaharajsWithSearch;
>>>>>>> c9db49500851597b4a6ffa811770b2e1ae374450
