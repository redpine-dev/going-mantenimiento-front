import { GetClientResponse } from '@/modules/clients/domain/api.types';
import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';

import { GetClientByIdRequest } from './types';

const getClientById = async (
  request: GetClientByIdRequest,
): Promise<GetClientResponse> => {
  const { id } = request;
  const response = await fetchWithAuth(`/clients/${id}`, {
    method: 'GET',
  });
  return response;
};

export { getClientById };
