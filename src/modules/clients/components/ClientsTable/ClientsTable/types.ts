import { Table } from '@tanstack/react-table';

import { Client } from '@/modules/clients/domain/types';

export type ClientsTableProps = {
  table: Table<Client>;
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
};
