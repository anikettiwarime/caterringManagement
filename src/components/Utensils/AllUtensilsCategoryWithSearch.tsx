import {useCallback, useState} from 'react';
import {DisplayTable} from '@/components/common/Tables';
import {Column} from '@/types';
import {useAuthContext} from '@/context/AuthContext';
import {useDebounceValue} from 'usehooks-ts';

interface UtensilsCategory {
  utensilsCategory: string;
}

const columns: Column<UtensilsCategory>[] = [
  {header: 'Category Name', accessor: 'utensilsCategory'},
];

const AllUtensilsCategoryWithSearch = () => {
  const {token} = useAuthContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounceValue<string>(searchQuery, 500);

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
    <div>
      <DisplayTable
        columns={columns}
        data={[]} // Empty data array
        idKey="username" // Use a unique key for the row
        title="Utensils Category"
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={1}
        pageOptions={[5, 10, 20]}
        searchQuery={debouncedSearchQuery}
        onSearchChange={handleSearchChange}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
        onDetail={handleDetail}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AllUtensilsCategoryWithSearch;
