import {AuthContextType} from '@/types/auth';

export const INITIAL_AUTH_STATE: AuthContextType = {
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};
