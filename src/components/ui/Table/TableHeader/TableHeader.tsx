import { forwardRef } from 'react';

import { cn } from '@/utils/styles/cn';

import { type TableHeaderProps, type TableHeaderRef } from './types';

const TableHeader = forwardRef<TableHeaderRef, TableHeaderProps>(
  ({ className, sticky = true, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn(
        '[&>tr]:bg-background [&_th]:border-b',
        sticky ? '[&_th]:sticky [&_th]:top-0 [&_th]:z-[1]' : '',
        className,
      )}
      {...props}
    />
  ),
);

TableHeader.displayName = 'TableHeader';

export { TableHeader };
