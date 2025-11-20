import { forwardRef } from 'react';

import { cn } from '@/utils/styles/cn';

import { type TableCaptionProps, type TableCaptionRef } from './types';

const TableCaption = forwardRef<TableCaptionRef, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('mt-4 text-sm text-muted-foreground', className)}
      {...props}
    />
  ),
);

TableCaption.displayName = 'TableCaption';

export { TableCaption };
