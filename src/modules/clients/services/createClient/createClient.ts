import { CreateClientResponse } from '@/modules/clients/domain/api.types';
import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';

import { CreateClientRequest } from './types';

const createClient = async (
  request: CreateClientRequest,
): Promise<CreateClientResponse> => {
  const response = await fetchWithAuth('/clients', {
    method: 'POST',
    data: request,
  });
  return response;
};

export { createClient };
