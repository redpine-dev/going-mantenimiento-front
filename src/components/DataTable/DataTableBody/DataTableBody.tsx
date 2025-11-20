import { Loader2 } from 'lucide-react';
import { cloneElement, isValidElement } from 'react';

import { TableBody } from '@/components/ui/Table/TableBody';
import { TableCell } from '@/components/ui/Table/TableCell';
import { TableRow } from '@/components/ui/Table/TableRow/TableRow';
import { cn } from '@/utils/styles/cn';

import { DataTableEmpty } from '../DataTableEmpty';
import { DataTableError } from '../DataTableError';
import { DataTableBodyProps } from './types';

const DataTableBody = <TData,>({
  isLoading,
  isError,
  table,
  onRetry,
  emptyMessage = 'No existen datos disponibles',
  children,
  getRowClassName,
}: DataTableBodyProps<TData>) => {
  const rows = table.getRowModel().rows;
  const cols = table.getVisibleLeafColumns().length;

  return (
    <TableBody>
      {isLoading ? (
        <TableRow>
          <TableCell colSpan={cols} className="!p-0">
            <div
              className={cn(
                'flex min-h-[200px] flex-col items-center justify-center gap-4',
              )}
            >
              <Loader2 className={cn('animate-spin', 'size-8')} />
              <p
                className={cn('font-medium text-muted-foreground', 'text-base')}
              >
                Cargando datos...
              </p>
            </div>
          </TableCell>
        </TableRow>
      ) : isError ? (
        <TableRow className="[&&]:hover:opacity-100 ">
          <TableCell colSpan={cols} className="!p-0">
            <DataTableError onRetry={onRetry} />
          </TableCell>
        </TableRow>
      ) : rows.length === 0 ? (
        <TableRow className="[&&]:hover:opacity-100">
          <TableCell colSpan={cols} className="!p-0">
            <DataTableEmpty emptyMessage={emptyMessage} />
          </TableCell>
        </TableRow>
      ) : (
        <>
          {isValidElement(children)
            ? cloneElement(children, { getRowClassName })
            : children}
        </>
      )}
    </TableBody>
  );
};

export { DataTableBody };
