import { Frown } from 'lucide-react';

import { DataTableMessage } from '../DataTableMessage/DataTableMessage';
import { DataTableErrorProps } from './types';

const DataTableError = ({ onRetry }: DataTableErrorProps) => {
  return (
    <DataTableMessage
      icon={<Frown size={72} className="text-muted-foreground" />}
      message="Ha ocurrido un error, por favor inténtelo mas tarde"
      action={onRetry}
      actionMessage="Reintentar"
    />
  );
};

export { DataTableError };
