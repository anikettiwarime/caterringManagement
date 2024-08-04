import {
  CreateDish,
  CreateRawMaterial,
  CreateRawMaterialCategory,
} from '@/components/Dish';
import React from 'react';

const DishManagement: React.FC = () => {
  return (
    <div>
      <CreateRawMaterialCategory />
      <CreateRawMaterial />
      <CreateDish />
    </div>
  );
};

export default DishManagement;
