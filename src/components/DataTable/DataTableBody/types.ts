import { Row, Table } from '@tanstack/react-table';
import { ReactNode } from 'react';

type DataTableBodyProps<TData> = {
  isLoading: boolean;
  isError: boolean;
  table: Table<TData>;
  onRetry?: () => void;
  children: ReactNode;
  emptyMessage?: string;
  getRowClassName?: (row: Row<TData>) => string;
};

export type { DataTableBodyProps };
