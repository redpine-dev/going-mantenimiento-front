import { Pagination } from '@/modules/shared/types';

type DataTablePaginationProps = {
  pagination: Pagination;
  onPreviousPage: () => void;
  onNextPage: () => void;
  disabled?: boolean;
};

export type { DataTablePaginationProps };
