import React from 'react';
import {useCallback, useState} from 'react';
import {DisplayTable} from '@/components/common/Tables';
import {Column, RawMaterials} from '@/types';
import {useAuthContext} from '@/context/AuthContext';
import {LoadingErrorNoData} from '@/components/Loader';
import {useDebounceValue} from 'usehooks-ts';
import {useSearchRawMaterials} from '@/lib/react-query/queriesAndMutations/dishAndRawMaterials';

const AllRawMaterialWithSearch: React.FC = () => {
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
    data: rawMaterialResponse,
    isLoading,
    isError,
  } = useSearchRawMaterials({
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
      errorMessage="Error loading raw materials"
      hasData={!!rawMaterialResponse?.data}
    >
      <DisplayTable
        columns={columns}
        data={rawMaterialResponse?.data.dishes || []}
        idKey="RawMaterialID"
        title="RawMaterial"
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={rawMaterialResponse?.data.totalPages || 1}
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

export default AllRawMaterialWithSearch;
