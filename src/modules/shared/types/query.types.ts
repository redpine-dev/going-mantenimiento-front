type Pagination = {
  total: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

type PaginatedResponse<T> = {
  data: T;
  pagination: Pagination;
};

type WithPagination<T> = T & Pagination;

export type { PaginatedResponse, Pagination, WithPagination };
