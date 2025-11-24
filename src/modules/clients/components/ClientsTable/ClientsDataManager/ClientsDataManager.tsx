import { useGetClients } from '@/modules/clients/hooks/useGetClients';

import { ClientsDataTableManager } from '../ClientsDataTableManager';
import { ClientsDataManagerProps } from './types';

const ClientsDataManager = ({ onEdit, onDelete }: ClientsDataManagerProps) => {
  const { data: clients = [], isLoading, isError, refetch } = useGetClients();

  return (
    <ClientsDataTableManager
      data={clients}
      isLoading={isLoading}
      isError={isError}
      onRetry={() => refetch()}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export { ClientsDataManager };
