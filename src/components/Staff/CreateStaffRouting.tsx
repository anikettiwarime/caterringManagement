import {TabTypes} from '@/types';
import CreateStaff from './CreateStaff';

export const staffConditonalRender: TabTypes[] = [
  {
    name: 'Staff',
    categories: [
      {
        name: 'Create Staff',
        accessor: 'CreateStaff',
        component: <CreateStaff />,
      },
      {
        name: 'Update Maharaj',
        accessor: 'UpdateStaff',
        component: <CreateStaff />,
      },
      {
        name: 'Delete Staff',
        accessor: 'DeleteStaff',
        component: <CreateStaff/>,
      },
    ],
  },
];
