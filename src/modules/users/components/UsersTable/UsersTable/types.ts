import { Table } from '@tanstack/react-table';

import { User } from '@/modules/users/domain/types';

export type UsersTableProps = {
  table: Table<User>;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
};
