import { forwardRef } from 'react';

import { cn } from '@/utils/styles/cn';

import { TableContext } from './TableContext/TableContext';
import { type TableSize } from './TableContext/types';
import { type TableProps, type TableRef } from './types';

const sizeStyle: Record<TableSize, string> = {
  base: 'text-sm',
  xs: 'text-xs',
  sm: 'text-xs',
};

const Table = forwardRef<TableRef, TableProps>(
  ({ size = 'base', containerClassName, className, id, ...props }, ref) => (
    <TableContext size={size}>
      <div className={cn('size-full overflow-auto', containerClassName)}>
        <table
          ref={ref}
          className={cn(
            'w-full table-fixed caption-bottom border-separate border-spacing-0 text-nowrap',
            sizeStyle[size],
            className,
          )}
          id={`table-${id}`}
          {...props}
        />
      </div>
    </TableContext>
  ),
);

Table.displayName = 'Table';

export { Table };
