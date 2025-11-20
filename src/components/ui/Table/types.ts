import { type ComponentPropsWithoutRef, type ComponentRef } from 'react';

import { type TableSize } from './TableContext';

type TableProps = ComponentPropsWithoutRef<'table'> & {
  size?: TableSize;
  containerClassName?: string;
  id: string;
};

type TableRef = ComponentRef<'table'>;

export type { TableProps, TableRef };
