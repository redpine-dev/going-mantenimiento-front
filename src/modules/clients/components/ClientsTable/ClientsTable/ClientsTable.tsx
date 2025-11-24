import { DataTableBody } from '@/components/DataTable/DataTableBody';
import { DataTableHeader } from '@/components/DataTable/DataTableHeader';
import { DataTableRows } from '@/components/DataTable/DataTableRows';
import { Table } from '@/components/ui/Table';

import { ClientsTableProps } from './types';

const ClientsTable = ({
  table,
  isLoading,
  isError,
  onRetry,
}: ClientsTableProps) => {
  return (
    <Table
      id="clients-table"
      size="xs"
      containerClassName="overflow-x-auto max-w-full "
    >
      <DataTableHeader table={table} />
      <DataTableBody
        table={table}
        isLoading={isLoading}
        isError={isError}
        onRetry={onRetry}
        emptyMessage="No hay clientes registrados"
      >
        <DataTableRows rows={table.getRowModel().rows} />
      </DataTableBody>
    </Table>
  );
};

export { ClientsTable };
