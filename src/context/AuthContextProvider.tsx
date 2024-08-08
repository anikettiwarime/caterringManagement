import {ReactNode, useEffect, useState} from 'react';
import {AuthContext} from './AuthContext';
import {Token, User} from '@/types';
import {QUERY_KEYS} from '@/lib/react-query/queryKeys';
import {jwtDecode} from 'jwt-decode';

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<Token | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem(QUERY_KEYS.TOKEN) || 'null');

    if (localToken) {
      const decodedToken = jwtDecode(localToken.accessToken) as User;

      if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem(QUERY_KEYS.TOKEN);
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
      } else {
        setToken(token);
        setUser(decodedToken);
        setIsAuthenticated(true);
      }
    }
  }, [token]);

  // Value of the context
  const contextValue = {
    user,
    setUser,
    token,
    setToken,
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
