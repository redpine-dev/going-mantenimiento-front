import { Client } from '@/modules/clients/domain/types';

export type ClientsDataManagerProps = {
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
};
