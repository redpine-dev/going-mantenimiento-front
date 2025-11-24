import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth';

import { User } from '../../domain/types';

const getUser = async (): Promise<User> => {
  const response = await fetchWithAuth('/auth/me');
  return response.data.user;
};

export { getUser };
