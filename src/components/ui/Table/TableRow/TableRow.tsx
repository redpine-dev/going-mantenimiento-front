import { forwardRef } from 'react';

import { cn } from '@/utils/styles/cn';

import { type TableRowProps, type TableRowRef } from './types';

const TableRow = forwardRef<TableRowRef, TableRowProps>(
  ({ className, striped = false, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cn(
          'hover:bg-muted',
          'transition-colors   [&>td]:border-b',
          striped
            ? cn(
                'odd:bg-slate-100/80 hover:bg-slate-200/60 odd:hover:bg-slate-200/60',
                'dark:odd:bg-slate-700/20 dark:hover:bg-muted dark:odd:hover:bg-muted',
              )
            : '',

          cn('data-[state=faded]:opacity-40'),
          className,
        )}
        {...props}
      />
    );
  },
);

TableRow.displayName = 'TableRow';

export { TableRow };
