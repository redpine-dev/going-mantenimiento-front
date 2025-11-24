import { Row } from '@tanstack/react-table';

type DataTableRowsProps<TData> = {
  rows: Row<TData>[];
  getRowClassName?: (row: Row<TData>) => string;
};

export type { DataTableRowsProps };
