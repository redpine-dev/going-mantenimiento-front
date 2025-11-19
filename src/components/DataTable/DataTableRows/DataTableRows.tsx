import { flexRender } from '@tanstack/react-table';

import { cn } from '@/utils/styles/cn';

import { DataTableRowsProps } from './types';

const DataTableRows = <TData,>({
  rows,
  getRowClassName,
  onRowClick,
}: DataTableRowsProps<TData>) => {
  return (
    <>
      {rows.map(row => (
        <tr
          key={row.id}
          className={getRowClassName ? getRowClassName(row) : ''}
          onClick={() => onRowClick?.(row)}
        >
          {row.getVisibleCells().map(cell => (
            <td
              key={cell.id}
              className={cn(
                cell.column.columnDef.meta !== undefined &&
                  'className' in cell.column.columnDef.meta
                  ? (cell.column.columnDef?.meta?.className as string)
                  : '',
              )}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export { DataTableRows };
