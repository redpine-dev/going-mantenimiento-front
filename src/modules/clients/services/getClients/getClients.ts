import { GetClientsResponse } from '@/modules/clients/domain/api.types';
import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';

const getClients = async (): Promise<GetClientsResponse> => {
  const response = await fetchWithAuth('/clients', {
    method: 'GET',
  });
  return response;
};

export { getClients };
