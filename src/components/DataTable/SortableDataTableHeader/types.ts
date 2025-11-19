import { type Column } from '@tanstack/react-table';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { ButtonProps } from '@/components/ui/Button';

type SortableDataTableHeaderProps<TData, TValue> = {
  children?: ReactNode;
  column: Column<TData, TValue>;
  size?: ButtonProps['size'];
} & ComponentPropsWithoutRef<'div'>;

export type { SortableDataTableHeaderProps };
