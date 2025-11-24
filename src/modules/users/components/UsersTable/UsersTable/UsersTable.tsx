import { DataTableBody } from '@/components/DataTable/DataTableBody';
import { DataTableHeader } from '@/components/DataTable/DataTableHeader';
import { DataTableRows } from '@/components/DataTable/DataTableRows';
import { Table } from '@/components/ui/Table/Table';

import { UsersTableProps } from './types';

const UsersTable = ({
  table,
  isLoading,
  isError,
  onRetry,
}: UsersTableProps) => {
  return (
    <Table
      id="users-table"
      size="xs"
      containerClassName="overflow-x-auto max-w-full"
    >
      <DataTableHeader table={table} />
      <DataTableBody
        table={table}
        isLoading={isLoading}
        isError={isError}
        onRetry={onRetry}
        emptyMessage="No hay usuarios registrados"
      >
        <DataTableRows rows={table.getRowModel().rows} />
      </DataTableBody>
    </Table>
  );
};

export { UsersTable };
