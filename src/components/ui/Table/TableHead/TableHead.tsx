import { forwardRef } from 'react';

import { cn } from '@/utils/styles/cn';

import { useTableContext } from '../TableContext/TableContext';
import { type TableSize } from '../TableContext/types';
import { type TableHeadProps, type TableHeadRef } from './types';

const sizeStyles: Record<TableSize, string> = {
  base: 'px-4 py-2',
  sm: 'px-4 py-2 first:pl-2.5 last:pl-2.5',
  xs: 'px-2 py-1.5 first:pl-3.5 last:pl-3.5',
};

const TableHead = forwardRef<TableHeadRef, TableHeadProps>(
  ({ className, ...props }, ref) => {
    const { size } = useTableContext('TableHead');

    return (
      <th
        ref={ref}
        className={cn(
          'text-balance text-left align-middle font-medium text-muted-foreground',
          'bg-background',
          '[&:has([role=checkbox])]:pr-0',
          sizeStyles[size],
          className,
        )}
        {...props}
      />
    );
  },
);

TableHead.displayName = 'TableHead';

export { TableHead };
