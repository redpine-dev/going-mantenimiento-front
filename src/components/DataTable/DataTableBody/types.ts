import { Table } from '@tanstack/react-table';
import { ReactNode } from 'react';

type DataTableBodyProps<TData> = {
  isLoading: boolean;
  isError: boolean;
  table: Table<TData>;
  onRetry?: () => void;
  children: ReactNode;
  emptyMessage?: string;
};

export type { DataTableBodyProps };
