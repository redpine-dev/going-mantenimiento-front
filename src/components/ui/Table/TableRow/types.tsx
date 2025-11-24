import { type ComponentPropsWithoutRef, type ComponentRef } from 'react';

type TableRowProps = ComponentPropsWithoutRef<'tr'> & { striped?: boolean };

type TableRowRef = ComponentRef<'tr'>;

export type { TableRowProps, TableRowRef };
