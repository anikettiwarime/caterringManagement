import React, {useCallback, useState} from 'react';
import {DisplayTable} from '@/components/common/Tables';
import {Column} from '@/types';
import {useAuthContext} from '@/context/AuthContext';
import {LoadingErrorNoData} from '@/components/Loader';
import {useDebounceValue} from 'usehooks-ts';
import {useSearchMaharaj} from '@/lib/react-query/queriesAndMutations/maharaj';

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
  {header: 'Name', accessor: 'name'},
  {header: 'Username', accessor: 'username'},
  {header: 'Email', accessor: 'email'},
  {header: 'Phone Number', accessor: 'PhoneNo'},
  {header: 'Specialization', accessor: 'specialization'},
];

const AllMaharajWithSearch: React.FC = () => {
  const {token} = useAuthContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounceValue<string>(searchQuery, 500);

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
    <LoadingErrorNoData
      isLoading={isLoading}
      isError={isError}
      errorMessage="Error loading maharajs"
      hasData={!!maharajResponse?.data}
    >
      <DisplayTable
        columns={columns}
        data={maharajResponse?.data.maharajs || []}
        idKey="username" // Use a unique key for the row
        title="Maharajs"
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={maharajResponse?.data.totalPages || 1}
        pageOptions={[5, 10, 20]}
        searchQuery={debouncedSearchQuery}
        onSearchChange={handleSearchChange}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
        onDetail={handleDetail}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </LoadingErrorNoData>
  );
};

export default AllMaharajWithSearch;
