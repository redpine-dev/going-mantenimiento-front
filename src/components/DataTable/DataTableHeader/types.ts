import { Table } from '@tanstack/react-table';

type DataTableHeaderProps<TData> = {
  table: Table<TData>;
  headClassName?: string;
};

export type { DataTableHeaderProps };
