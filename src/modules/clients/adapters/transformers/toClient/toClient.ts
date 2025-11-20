import { ApiClient } from '@/modules/clients/domain/api.types';
import { Client } from '@/modules/clients/domain/types';

const toClient = (apiClient: ApiClient): Client => {
  return {
    id: apiClient._id,
    name: apiClient.name,
    createdAt: new Date(apiClient.createdAt),
    updatedAt: new Date(apiClient.updatedAt),
  };
};

export { toClient };
