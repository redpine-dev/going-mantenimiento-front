import { createContext } from '@radix-ui/react-context';

import { type TableContextValues } from './types';

export const [TableContext, useTableContext] =
  createContext<TableContextValues>('Table');
