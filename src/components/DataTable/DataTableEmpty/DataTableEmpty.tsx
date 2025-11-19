import { FileQuestion } from 'lucide-react';

import { DataTableMessage } from '../DataTableMessage';
import { DataTableEmptyProps } from './types';

const DataTableEmpty = ({
  emptyMessage = 'No hay datos para mostrar',
}: DataTableEmptyProps) => {
  return (
    <DataTableMessage
      icon={<FileQuestion size={72} className="text-muted-foreground" />}
      message={emptyMessage}
    />
  );
};

export { DataTableEmpty };
