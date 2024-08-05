import {useAuthContext} from '@/context/AuthContext';
import { Navigate } from '@tanstack/react-router';

const Home = () => {


  const {isAuthenticated} = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return <div>Home</div>;
};

export default Home;
