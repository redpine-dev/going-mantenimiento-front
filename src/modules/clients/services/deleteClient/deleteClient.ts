import { DeleteClientResponse } from '@/modules/clients/domain/api.types';
import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';

import { DeleteClientRequest } from './types';

const deleteClient = async (
  request: DeleteClientRequest,
): Promise<DeleteClientResponse> => {
  const { id } = request;
  const response = await fetchWithAuth(`/clients/${id}`, {
    method: 'DELETE',
  });
  return response;
};

export { deleteClient };
