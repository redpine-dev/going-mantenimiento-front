import { ReactNode } from 'react';

type DataTableMessageProps = {
  icon?: ReactNode;
  action?: () => void;
  actionMessage?: string;
  message: string;
};

export type { DataTableMessageProps };
