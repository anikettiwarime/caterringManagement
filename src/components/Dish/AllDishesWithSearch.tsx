import React from 'react';
import {useCallback, useState} from 'react';
import {DisplayTable} from '@/components/common/Tables';
import {Column, Dishes} from '@/types';
import {useAuthContext} from '@/context/AuthContext';
import {LoadingErrorNoData} from '@/components/Loader';
import {useDebounceValue} from 'usehooks-ts';
import {useSearchDishes} from '@/lib/react-query/queriesAndMutations/dishAndRawMaterials';

const AllDishesWithSearch: React.FC = () => {
  const columns: Column<Dishes>[] = [
    {header: 'Dish ID', accessor: 'DishID'},
    {header: 'Dish Name', accessor: 'DishName'},
    {header: 'Dish Description', accessor: 'DishDescription'},
    {header: 'Dish Category ID', accessor: 'DishCategoryID'},
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
    data: dishesResponse,
    isLoading,
    isError,
  } = useSearchDishes({
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
      errorMessage="Error loading dishes"
      hasData={!!dishesResponse?.data}
    >
      <DisplayTable
        columns={columns}
        data={dishesResponse?.data.dishes || []}
        idKey="DishID"
        title="Dishes"
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={dishesResponse?.data.totalPages || 1}
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

export default AllDishesWithSearch;
