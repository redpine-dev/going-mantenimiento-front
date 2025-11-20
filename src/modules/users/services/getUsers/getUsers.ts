import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';
import { GetUsersResponse } from '@/modules/users/domain/api.types';

const getUsers = async (): Promise<GetUsersResponse> => {
  const response = await fetchWithAuth('/users', {
    method: 'GET',
  });
  return response;
};

export { getUsers };
