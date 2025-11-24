import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { ClientsTable } from '../ClientsTable';
import { getColumns } from './columns';
import { ClientsDataTableManagerProps } from './types';

const ClientsDataTableManager = ({
  data,
  isLoading,
  isError,
  onRetry,
  onEdit,
  onDelete,
}: ClientsDataTableManagerProps) => {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'name', desc: false }, // Default sort by name A-Z
  ]);

  const columns = getColumns({ onEdit, onDelete });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableSorting: true,
  });

  return (
    <ClientsTable
      table={table}
      isLoading={isLoading}
      isError={isError}
      onRetry={onRetry}
    />
  );
};

export { ClientsDataTableManager };
