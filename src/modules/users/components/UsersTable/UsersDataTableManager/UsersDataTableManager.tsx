import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { UsersTable } from '../UsersTable';
import { getColumns } from './columns';
import { UsersDataTableManagerProps } from './types';

const UsersDataTableManager = ({
  data,
  isLoading,
  isError,
  onRetry,
  onEdit,
  onDelete,
}: UsersDataTableManagerProps) => {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'username', desc: false }, // Default sort by username A-Z
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
    <UsersTable
      table={table}
      isLoading={isLoading}
      isError={isError}
      onRetry={onRetry}
    />
  );
};

export { UsersDataTableManager };
