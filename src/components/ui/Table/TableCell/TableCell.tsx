import { forwardRef } from 'react';

import { cn } from '@/utils/styles/cn';

import { useTableContext } from '../TableContext';
import { type TableSize } from '../TableContext/types';
import { type TableCellProps, type TableCellRef } from './types';

const sizeStyles: Record<TableSize, string> = {
  base: 'p-4',
  xs: 'py-1.5 px-2 first:pl-2.5 last:pl-2.5',
  sm: 'py-2.5 px-4 first:pl-3.5 last:pl-3.5',
};

const TableCell = forwardRef<TableCellRef, TableCellProps>(
  ({ className, ...props }, ref) => {
    const { size } = useTableContext('TableCell');

    return (
      <td
        ref={ref}
        className={cn(
          'p-4 align-middle [&:has([role=checkbox])]:pr-0 ',
          sizeStyles[size],
          className,
        )}
        {...props}
      />
    );
  },
);

TableCell.displayName = 'TableCell';

export { TableCell };
