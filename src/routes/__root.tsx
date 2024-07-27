
import Loader from '@/components/Loader';
import {RootLayout} from '@/layouts';
import {createRootRoute} from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
  loader: Loader,
});
