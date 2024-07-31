import {useCallback, useState} from 'react';
import {DisplayTable} from '@/components/common/Tables';
import {Column, Cateror} from '@/types';
import {useSearchCaterors} from '@/lib/react-query/queriesAndMutations/cateror';
import {useAuthContext} from '@/context/AuthContext';
import {LoadingErrorNoData} from '@/components/Loader';
import {useDebounceValue} from 'usehooks-ts';

const columns: Column<Cateror>[] = [
  {header: 'Username', accessor: 'Username'},
  {header: 'Email', accessor: 'Email'},
  {header: 'Name', accessor: 'Name'},
  {header: 'Phone Number', accessor: 'PhoneNo'},
];

const AllCaterorsWithSearch = () => {
  const {token} = useAuthContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [debouncedSearchQuery, setSearchQuery] = useDebounceValue<string>(
    '',
    500,
  );

  console.log('debouncedSearchQuery', debouncedSearchQuery);

  const {
    data: caterorsResponse,
    isLoading,
    isError,
  } = useSearchCaterors({
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
      errorMessage="Error loading caterors"
      hasData={!!caterorsResponse?.data}
    >
      <DisplayTable
        columns={columns}
        data={caterorsResponse?.data.caterors || []}
        idKey="CaterorID"
        title="Caterors"
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={caterorsResponse?.data.totalPages || 1}
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

export default AllCaterorsWithSearch;
