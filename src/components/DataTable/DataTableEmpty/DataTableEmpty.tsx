import { Cat } from 'lucide-react';

import { DataTableMessage } from '../DataTableMessage';
import { DataTableEmptyProps } from './types';

const DataTableEmpty = ({
  emptyMessage = 'No hay datos para mostrar',
}: DataTableEmptyProps) => {
  return (
    <DataTableMessage
      icon={<Cat className="text-gray-400" size={72} />}
      message={emptyMessage}
    />
  );
};

export { DataTableEmpty };
