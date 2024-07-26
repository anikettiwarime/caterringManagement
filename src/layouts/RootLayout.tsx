import {Outlet} from '@tanstack/react-router';
import {Toaster} from 'react-hot-toast';
import {TanStackRouterDevtools} from '@tanstack/router-devtools';

const RootLayout = () => {
  return (
    <div>
      <Toaster position='bottom-right' reverseOrder={false} />
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </div>
  );
};

export default RootLayout;
