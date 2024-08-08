import {TabTypes} from '@/types';
import CreateMaharaj from './CreateMaharaj';

export const maharajConditonalRender: TabTypes[] = [
  {
    name: 'Maharaj',
    categories: [
      {
        name: 'Create Maharaj',
        accessor: 'CreateMaharaj',
        component: <CreateMaharaj />,
      },
      {
        name: 'Update Maharaj',
        accessor: 'UpdateMaharaj',
        component: <CreateMaharaj />,
      },
      {
        name: 'Delete Maharaj',
        accessor: 'DeleteMahraj',
        component: <CreateMaharaj />,
      },
    ],
  },
];
