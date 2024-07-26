import React from 'react';

export interface User {
  UserID: string;
  Username: string;
  Email: string;
  Role: string;
  iat?: number;
  exp?: number;
}

export type Token = {
  accessToken: string;
  refreshToken: string;
};

export interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  token: Token | null;
  setToken: React.Dispatch<React.SetStateAction<Token | null>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
