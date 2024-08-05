import React from 'react';
import {
  CreateDish,
  CreateDishCategory,
  AllDishesWithSearch,
} from '@/components/Dish';
import Breadcrumb from '@/components/Breadcrumbs';
import AllRawMaterialWithSearch from '@/components/Dish/AllRawMaterialWithSearch';

const DishManagement: React.FC = () => {
  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb />
      <div className="grid grid-cols-8 gap-8">
        <div className="col-span-8">
          <CreateDishCategory />
        </div>
        <div className="col-span-8">
          <CreateDish />
        </div>
        <div className="col-span-8">
          <AllDishesWithSearch />
        </div>
        <div className="col-span-8">
          <AllRawMaterialWithSearch />
        </div>
      </div>
    </div>
  );
};

export default DishManagement;
