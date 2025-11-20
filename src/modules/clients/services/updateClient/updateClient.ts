import { UpdateClientResponse } from '@/modules/clients/domain/api.types';
import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';

import { UpdateClientRequest } from './types';

const updateClient = async (
  request: UpdateClientRequest,
): Promise<UpdateClientResponse> => {
  const { id, ...body } = request;
  const response = await fetchWithAuth(`/clients/${id}`, {
    method: 'PUT',
    data: body,
  });
  return response;
};

export { updateClient };
