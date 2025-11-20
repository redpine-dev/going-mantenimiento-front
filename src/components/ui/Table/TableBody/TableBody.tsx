import { forwardRef } from 'react';

import { cn } from '@/utils/styles/cn';

import { type TableBodyProps, type TableBodyRef } from './types';

const TableBody = forwardRef<TableBodyRef, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn(
        '[&_tr:last-child>td]:border-0 [&_tr:last-child]:border-0',
        className,
      )}
      {...props}
    />
  ),
);

TableBody.displayName = 'TableBody';

export { TableBody };
