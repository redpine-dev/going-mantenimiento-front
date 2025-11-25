import { DataTableBody } from '@/components/DataTable/DataTableBody';
import { DataTableHeader } from '@/components/DataTable/DataTableHeader';
import { DataTableRows } from '@/components/DataTable/DataTableRows';
import { Table } from '@/components/ui/Table';

import { MeasurementsTableProps } from './types';

const MeasurementsTable = ({
  table,
  isLoading,
  isError,
  onRetry,
}: MeasurementsTableProps) => {
  return (
    <Table
      id="measurements-table"
      size="xs"
      containerClassName="overflow-x-auto max-w-full "
    >
      <DataTableHeader table={table} />
      <DataTableBody
        table={table}
        isLoading={isLoading}
        isError={isError}
        onRetry={onRetry}
        emptyMessage="No hay mediciones registradas"
      >
        <DataTableRows rows={table.getRowModel().rows} />
      </DataTableBody>
    </Table>
  );
};

export { MeasurementsTable };
