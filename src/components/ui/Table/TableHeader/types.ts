import { type ComponentPropsWithoutRef, type ComponentRef } from 'react';

type TableHeaderProps = ComponentPropsWithoutRef<'thead'> & {
  sticky?: boolean;
};

type TableHeaderRef = ComponentRef<'thead'>;

export type { TableHeaderProps, TableHeaderRef };
