import React, {ReactNode} from 'react';

// **Sidebar Interfaces**
export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
}

// **API Response Interfaces**
export interface ApiResponse<T> {
  statusCode: number;
  status: boolean;
  message: string;
  data: T;
}

// **User and Auth Interfaces**
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

// **Pagination Interfaces**

export interface LimitSelectorProps {
  pageOptions?: number[];
  selectedLimit: number;
  onLimitChange: (newLimit: number) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// **Table Interfaces**
export type Column<T> = {
  header: string;
  accessor: keyof T;
  cell?: (value: unknown) => React.ReactNode;
};

export type TableProps<T> = {
  // Basic Table Setup
  columns: Column<T>[];
  data: T[];
  title: string;
  idKey: keyof T;

  // Pagination
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  pageOptions?: number[];

  // Search
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // Pagination and Search Handlers
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;

  // Actions
  onDetail?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
};

export interface SearchProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// **Loader Interfaces**
export interface LoadingErrorNoDataProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  hasData: boolean;
  children: React.ReactNode;
}

// **Cateror Interfaces**
export interface Cateror {
  CaterorID: string;
  createdAt: string;
  updatedAt: string;
  Username: string;
  Email: string;
  Name: string;
  Avatar: string | null;
  PhoneNo: string;
}

export interface CaterorsResponse {
  caterors: Cateror[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface SearchOrGetAllCaterorsParams {
  token: string;
  page?: number;
  limit?: number;
  query?: string;
}

export interface CreateCaterorData {
  UserID: string;
}

export type GetAllCaterorsApiResponse = ApiResponse<CaterorsResponse>;
