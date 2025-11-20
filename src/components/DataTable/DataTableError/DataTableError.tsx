import { Frown } from 'lucide-react';

import { DataTableMessage } from '../DataTableMessage';
import { DataTableErrorProps } from './types';

const DataTableError = ({ onRetry }: DataTableErrorProps) => {
  return (
    <DataTableMessage
      icon={<Frown className="text-gray-400" size={72} />}
      message="Ha ocurrido un error, por favor inténtelo mas tarde"
      action={onRetry}
      actionMessage="Reintentar"
    />
  );
};

export { DataTableError };
