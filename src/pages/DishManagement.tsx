import React from 'react';
import { CreateDish,CreateDishCategory } from '@/components/Dish';

const DishManagement: React.FC = () => {
  return (
    <div>
      <CreateDishCategory/>
      <CreateDish />
    </div>
  );
};

export default DishManagement;