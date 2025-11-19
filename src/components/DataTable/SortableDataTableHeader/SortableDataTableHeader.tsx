import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from 'lucide-react';
import { useCallback } from 'react';

import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/styles/cn';

import { SortableDataTableHeaderProps } from './types';

const iconClassName = cn('size-3');

const SortableDataTableHeader = <TData, TValue>({
  column,
  children,
  className,
  size = 'sm',
}: SortableDataTableHeaderProps<TData, TValue>) => {
  const direction = column.getIsSorted();

  const renderIcon = useCallback(() => {
    if (direction === false)
      return (
        <ArrowUpDownIcon
          className={iconClassName}
          aria-label="Fecha arriba y abajo"
        />
      );

    if (direction === 'desc')
      return (
        <ArrowDownIcon
          className={iconClassName}
          aria-label="Fecha hacia abajo"
        />
      );

    return (
      <ArrowUpIcon className={iconClassName} aria-label="Fecha hacia arriba" />
    );
  }, [direction]);

  const handleToggleSorting = useCallback(() => {
    column.toggleSorting(direction === 'asc');
  }, [column, direction]);

  return (
    <Button
      variant="ghost"
      data-state={direction !== false ? 'selected' : ''}
      size={size}
      className={cn(
        '-ml-2 text-balance text-[1em] data-[state=selected]:bg-accent',
        className,
      )}
      onClick={handleToggleSorting}
    >
      <span>{children}</span>
      {renderIcon()}
    </Button>
  );
};

export { SortableDataTableHeader };
