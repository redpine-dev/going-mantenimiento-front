import { forwardRef } from 'react';

import { cn } from '@/utils/styles/cn';

import { type TableFooterProps, type TableFooterRef } from './types';

const TableFooter = forwardRef<TableFooterRef, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn(
        'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    />
  ),
);

TableFooter.displayName = 'TableFooter';

export { TableFooter };
