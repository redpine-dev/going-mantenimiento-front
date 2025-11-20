import { useGetUsers } from '@/modules/users/hooks/useGetUsers';

import { UsersDataTableManager } from '../UsersDataTableManager';
import { UsersDataManagerProps } from './types';

const UsersDataManager = ({ onEdit, onDelete }: UsersDataManagerProps) => {
  const { data: users = [], isLoading, isError, refetch } = useGetUsers();

  return (
    <UsersDataTableManager
      data={users}
      isLoading={isLoading}
      isError={isError}
      onRetry={() => refetch()}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export { UsersDataManager };
