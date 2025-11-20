import { Client } from '@/modules/clients/domain/types';

export type ClientsDataTableManagerProps = {
  data: Client[];
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
};
