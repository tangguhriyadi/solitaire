export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface UserPagination {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

export interface UserHooks {
    isError: Boolean
    isLoading: Boolean
    data?: UserPagination
}

export interface FormData {
    email: string;
    password: string;
  }
