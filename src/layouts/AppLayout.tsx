import {useAuthContext} from '@/context/AuthContext';
import {Navigate, Outlet} from '@tanstack/react-router';

const AppLayout = () => {
  const {isAuthenticated} = useAuthContext();

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to='/signin' />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
