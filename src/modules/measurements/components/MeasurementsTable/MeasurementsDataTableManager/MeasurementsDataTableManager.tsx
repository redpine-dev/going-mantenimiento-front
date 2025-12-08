import {
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
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
  const columns = getColumns();
  const [expanded, setExpanded] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    enableSorting: false,
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
