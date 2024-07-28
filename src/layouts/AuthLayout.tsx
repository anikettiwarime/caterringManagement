import {useAuthContext} from '@/context/AuthContext';
import {Link, Navigate, Outlet} from '@tanstack/react-router';

import LogoDark from '../assets/images/logo/logo-dark.svg';
import Logo from '../assets/images/logo/logo.svg';
import {AuthIcon} from '@/components/Icons';

const AuthLayout = () => {
  const {isAuthenticated} = useAuthContext();

  console.log(isAuthenticated + ' AuthLayout');

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="px-26 py-17.5 text-center">
            <Link className="mb-5.5 inline-block" to="/">
              <img className="hidden dark:block" src={Logo} alt="Logo" />
              <img className="dark:hidden" src={LogoDark} alt="Logo" />
            </Link>
            <p className="2xl:px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              suspendisse.
            </p>
            <AuthIcon />
          </div>
        </div>
        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
