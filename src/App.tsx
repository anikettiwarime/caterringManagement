import {RouterProvider, createRouter} from '@tanstack/react-router';

// Import the generated route tree
import {routeTree} from './routeTree.gen';
import QueryProvider from './lib/react-query/QueryProvider';
import AuthContextProvider from './context/AuthContextProvider';

// Create a new router instance
const router = createRouter({
  routeTree
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return (
    <AuthContextProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </AuthContextProvider>
  );
};

export default App;
