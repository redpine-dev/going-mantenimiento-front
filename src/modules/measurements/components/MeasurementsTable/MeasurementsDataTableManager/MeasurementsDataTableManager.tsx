import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
