import { flexRender, Row } from '@tanstack/react-table';
import { Fragment } from 'react';

import { DataTableBody } from '@/components/DataTable/DataTableBody';
import { DataTableHeader } from '@/components/DataTable/DataTableHeader';
import { Table } from '@/components/ui/Table';
import { TableCell } from '@/components/ui/Table/TableCell';
import { TableRow } from '@/components/ui/Table/TableRow/TableRow';
import { Measurement } from '@/modules/measurements/domain/types';
import { cn } from '@/utils/styles/cn';

import { diagnosticFieldsConfig } from '../MeasurementsDataTableManager/columns';
import { MeasurementsTableProps } from './types';

const DiagnosticDetails = ({ measurement }: { measurement: Measurement }) => {
  const diagnosticTotal = diagnosticFieldsConfig.reduce(
    (acc, field) => acc + (measurement[field.key] ?? 0),
    0,
  );

  return (
    <div className="bg-muted/50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold">Diagnóstico</h4>
        <span className="text-sm text-muted-foreground">
          Total: {diagnosticTotal}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-2 text-sm md:grid-cols-5 lg:grid-cols-7">
        {diagnosticFieldsConfig.map(field => {
          const value = measurement[field.key] ?? 0;
          return (
            <div key={field.key} className="flex justify-between gap-2">
              <span className="text-muted-foreground">{field.label}:</span>
              <span className={cn('font-medium', value > 0 && 'text-primary')}>
                {value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MeasurementsTableRows = ({ rows }: { rows: Row<Measurement>[] }) => {
  return (
    <>
      {rows.map(row => (
        <Fragment key={row.id}>
          <TableRow className={row.getIsExpanded() ? 'border-b-0' : ''}>
            {row.getVisibleCells().map(cell => (
              <TableCell
                key={cell.id}
                className={cn(
                  cell.column.columnDef.meta !== undefined &&
                    'className' in cell.column.columnDef.meta
                    ? (cell.column.columnDef?.meta?.className as string)
                    : '',
                )}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
          {row.getIsExpanded() && (
            <TableRow>
              <TableCell colSpan={row.getVisibleCells().length} className="p-0">
                <DiagnosticDetails measurement={row.original} />
              </TableCell>
            </TableRow>
          )}
        </Fragment>
      ))}
    </>
  );
};

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
      containerClassName="overflow-x-auto max-w-full"
    >
      <DataTableHeader table={table} />
      <DataTableBody
        table={table}
        isLoading={isLoading}
        isError={isError}
        onRetry={onRetry}
        emptyMessage="No hay mediciones registradas"
      >
        <MeasurementsTableRows rows={table.getRowModel().rows} />
      </DataTableBody>
    </Table>
  );
};

export { MeasurementsTable };
