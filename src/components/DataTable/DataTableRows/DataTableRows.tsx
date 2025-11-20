import { flexRender } from '@tanstack/react-table';

import { TableCell } from '@/components/ui/Table/TableCell';
import { TableRow } from '@/components/ui/Table/TableRow/TableRow';
import { cn } from '@/utils/styles/cn';

import { DataTableRowsProps } from './types';

const DataTableRows = <TData,>({
  rows,
  getRowClassName,
}: DataTableRowsProps<TData>) => {
  return (
    <>
      {rows.map(row => (
        <TableRow key={row.id} className={getRowClassName?.(row)}>
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
      ))}
    </>
  );
};

export { DataTableRows };
