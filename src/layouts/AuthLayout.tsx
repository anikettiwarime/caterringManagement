import {useAuthContext} from '@/context/AuthContext';
import {Navigate, Outlet} from '@tanstack/react-router';

const AuthLayout = () => {
  const {isAuthenticated} = useAuthContext();

  console.log(isAuthenticated + ' AuthLayout');

  if (isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
