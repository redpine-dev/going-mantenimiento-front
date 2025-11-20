import { Table } from '@tanstack/react-table';

type DataTablePaginationProps<TData> = {
  table: Table<TData>;
  options?: number[];
};

export type { DataTablePaginationProps };
