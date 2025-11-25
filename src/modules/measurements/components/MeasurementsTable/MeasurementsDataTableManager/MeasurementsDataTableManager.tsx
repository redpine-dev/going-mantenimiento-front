import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { MeasurementsTable } from '../MeasurementsTable';
import { getColumns } from './columns';
import { MeasurementsDataTableManagerProps } from './types';

const MeasurementsDataTableManager = ({
  data,
  isLoading,
  isError,
  onRetry,
}: MeasurementsDataTableManagerProps) => {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'date', desc: true }, // Default sort by date DESC
  ]);

  const columns = getColumns();

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
    <MeasurementsTable
      table={table}
      isLoading={isLoading}
      isError={isError}
      onRetry={onRetry}
    />
  );
};

export { MeasurementsDataTableManager };
