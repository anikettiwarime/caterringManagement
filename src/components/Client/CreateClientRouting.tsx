import {TabTypes} from '@/types';
import CreateClient from './CreateClient';

export const clientConditonalRender: TabTypes[] = [
  {
    name: 'Client',
    categories: [
      {
        name: 'Create Client',
        accessor: 'CreateClient',
        component: <CreateClient />,
      },
      {
        name: 'Update Client',
        accessor: 'UpdateClient',
        component: <CreateClient />,
      },
      {
        name: 'Delete Client',
        accessor: 'DeleteClient',
        component: <CreateClient />,
      },
    ],
  },
];
