import {TabTypes} from '@/types';
import CreateDish from './CreateDish';
import CreateDishCategory from './CreateDishCategory';
import CreateRawMaterial from './CreateRawMaterial';
import CreateRawMaterialCategory from './CreateRawMaterialCategory';
export const DishRouting: TabTypes[] = [
  {
    name: 'Dish',
    categories: [
      {name: 'Create Dish', accessor: 'CreateDish', component: <CreateDish />},
      {name: 'Update Dish', accessor: 'UpdateDish', component: <CreateDish />},
      {name: 'Delete Dish', accessor: 'DeleteDish', component: <CreateDish />},
    ],
  },
  {
    name: 'Dish Category',
    categories: [
      {
        name: 'Create Dish Category',
        accessor: 'CreateDishCategory',
        component: <CreateDishCategory />,
      },
      {
        name: 'Update Dish Category',
        accessor: 'UpdateDishCategory',
        component: <CreateDish />,
      },
      {
        name: 'Delete Dish Category',
        accessor: 'DeleteDishCategory',
        component: <CreateDish />,
      },
    ],
  },
  {
    name: 'Raw Material',
    categories: [
      {
        name: 'Create Raw Material',
        accessor: 'CreateRawMaterial',
        component: <CreateRawMaterial />,
      },
      {
        name: 'Update Raw Material',
        accessor: 'UpdateRawMaterial',
        component: <CreateRawMaterialCategory />,
      },
      {
        name: 'Delete Raw Material',
        accessor: 'Delete Raw Material',
        component: <CreateDish />,
      },
    ],
    },
  
];
